"""Split a finished lesson HTML into reusable parts, and assemble a lesson from parts.

A lesson is one self-contained HTML file. Everything is identical between lessons except:
  title, aria label, scenes (inner SVG), the lesson-specific JS (SETUP + RENDER body), the timing config
  (K, DUR, SC, NAMES, TM, ALEN), the note under the player and the embedded audio.
`extract()` is used once to derive engine/template.html from your existing lessons;
`assemble()` is what the engine uses to build every new lesson. Round-trip tested in tests/.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
TEMPLATE_PATH = HERE / "template.html"

_B64 = re.compile(r"data:audio/[a-z0-9]+;base64,[A-Za-z0-9+/=]+")
_PROLOGUE = ("function render(t){\n  const u=t/K;\n"
             "  for(let i=0;i<SC.length;i++)$('s'+i).setAttribute('opacity',vis(t,i).toFixed(3));\n")


def _fmt_clock(seconds: float) -> str:
    s = int(round(seconds))
    return f"{s // 60}:{s % 60:02d}"


def extract(html: str) -> dict:
    """Return the lesson-specific parts of a finished lesson, plus a `template` string with placeholders."""
    parts: dict = {}
    t = html

    def grab(pattern: str, flags: int = re.S) -> re.Match:
        m = re.search(pattern, t, flags)
        if not m:
            raise ValueError("pattern not found: " + pattern[:60])
        return m

    parts["title"] = grab(r"<title>(.*?)</title>").group(1)
    parts["aria"] = grab(r'aria-label="(Animated[^"]*)"').group(1)
    m = grab(r'fill="url\(#dots\)" opacity="\.7"/>\n(.*?)(?:\n      <g id="wm"[\s\S]*?\n      </g>)?\n    </svg>')
    parts["scenes"] = m.group(1)
    parts["note"] = grab(r'<p class="note">(.*?)</p>').group(1)
    parts["audio"] = grab(r'(<audio id="vo"[^>]*></audio>)').group(1)
    parts["muted_hidden"] = 'id="mute" hidden' in t

    cfg = grab(r"const K=(\d+), DUR=([\d.]+), SC=(\[\[.*?\]\])\.map\(a=>\[a\[0\]\*K,a\[1\]\*K\]\);")
    parts["K"], parts["DUR"], parts["SC"] = cfg.group(1), cfg.group(2), cfg.group(3)
    parts["NAMES"] = grab(r"const NAMES=(\[.*?\]);").group(1)
    parts["TM"] = grab(r"const TM=(\{.*?\});").group(1)
    alen = grab(r"au\.duration:([\d.]+);")
    parts["ALEN"] = alen.group(1)

    s0 = html.index("const TM=")
    s0 = html.index("\n", s0) + 1
    s1 = html.index("function vis(")
    parts["setup"] = html[s0:s1]

    h0 = html.index("\n", html.index("function rise(")) + 1
    h1 = html.index("function render(t){")
    parts["helpers"] = html[h0:h1]          # lesson-specific helper functions between rise() and render()

    r0 = html.index(_PROLOGUE) + len(_PROLOGUE)
    r1 = html.index("\n}\n// transport")
    parts["render"] = html[r0:r1]

    # build the template by replacing each part with a placeholder
    tpl = html
    tpl = tpl.replace("<title>" + parts["title"] + "</title>", "<title>__TITLE__</title>", 1)
    tpl = tpl.replace('aria-label="' + parts["aria"] + '"', 'aria-label="__ARIA__"', 1)
    tpl = tpl.replace(parts["scenes"], "__SCENES__", 1)
    tpl = re.sub(r'<input id="seek" type="range" min="0" max="[\d.]+"', '<input id="seek" type="range" min="0" max="__DUR__"', tpl, 1)
    tpl = re.sub(r'<span id="clock">[^<]*</span>', '<span id="clock">0:00 / __CLOCK__</span>', tpl, 1)
    tpl = tpl.replace('<button id="mute" hidden type=', '<button id="mute" type=', 1)
    tpl = tpl.replace('<button id="mute" type=', '<button id="mute"__MUTE__ type=', 1)
    tpl = tpl.replace('<p class="note">' + parts["note"] + "</p>", '<p class="note">__NOTE__</p>', 1)
    tpl = tpl.replace(parts["audio"], "__AUDIO__", 1)
    tpl = tpl.replace(cfg.group(0), "const K=__K__, DUR=__DUR__, SC=__SC__.map(a=>[a[0]*K,a[1]*K]);", 1)
    tpl = tpl.replace("const NAMES=" + parts["NAMES"] + ";", "const NAMES=__NAMES__;", 1)
    tpl = tpl.replace("const TM=" + parts["TM"] + ";\n" + parts["setup"], "const TM=__TM__;\n__SETUP__", 1)
    tpl = tpl.replace(_PROLOGUE + parts["render"] + "\n}\n// transport", _PROLOGUE + "__RENDER__\n}\n// transport", 1)
    tpl = tpl.replace(parts["helpers"] + "function render(t){", "__HELPERS__function render(t){", 1)
    tpl = tpl.replace("au.duration:" + parts["ALEN"] + ";", "au.duration:__ALEN__;", 1)
    parts["template"] = tpl
    return parts


def assemble(parts: dict, template: str | None = None) -> str:
    """Build the lesson HTML. `parts` needs: title, aria, scenes, note, audio, muted_hidden, K, DUR, SC, NAMES, TM,
    ALEN, setup, render (all strings; DUR/ALEN/K numeric-as-string or numbers)."""
    tpl = template if template is not None else TEMPLATE_PATH.read_text(encoding="utf8")
    dur = float(parts["DUR"])
    rep = {
        "__TITLE__": parts["title"], "__ARIA__": parts["aria"], "__SCENES__": parts["scenes"],
        "__DUR__": str(parts["DUR"]), "__CLOCK__": _fmt_clock(dur),
        "__MUTE__": " hidden" if parts.get("muted_hidden") else "",
        "__NOTE__": parts["note"], "__AUDIO__": parts["audio"],
        "__K__": str(parts["K"]), "__SC__": parts["SC"], "__NAMES__": parts["NAMES"], "__TM__": parts["TM"],
        "__ALEN__": str(parts["ALEN"]), "__SETUP__": parts["setup"], "__RENDER__": parts["render"],
        "__HELPERS__": parts.get("helpers", "\n"),
    }
    # one pass, so placeholder-looking text inside the substituted content is never re-expanded
    pattern = re.compile("|".join(re.escape(k) for k in sorted(rep, key=len, reverse=True)))
    return pattern.sub(lambda m: rep[m.group(0)], tpl)


def strip_audio(html: str) -> tuple[str, str | None]:
    """Replace the embedded audio data URI by a placeholder; returns (html, uri)."""
    m = _B64.search(html)
    return (_B64.sub("__B64__", html), m.group(0) if m else None)


def to_json(parts: dict) -> str:
    return json.dumps({k: v for k, v in parts.items() if k != "template"}, indent=1, ensure_ascii=False)
