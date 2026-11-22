"""Turn a plan + word timings into the stage page (one self-contained HTML file the renderer steps through)."""
from __future__ import annotations

import base64
import json
from pathlib import Path

from .voice import PAD, TAIL

STAGE = Path(__file__).parent / "stage"


def timeline(plan: dict, words: list[dict], cover: str, book: str, lesson: int, author: str = "", look: str = "white", captions: bool = False) -> dict:
    """Beats get their spoken words (counted, since the narration is the beats' lines joined), shifted by PAD."""
    out, i = [], 0
    allw = [{"w": w["w"], "s": round(w["s"] + PAD, 3), "e": round(w["e"] + PAD, 3)} for w in words]
    for b in plan["beats"]:
        n = len(b["say"].split())
        ws = allw[i:i + n]
        i += n
        out.append({**b, "start": ws[0]["s"] if ws else (out[-1]["start"] + 2 if out else PAD), "end": ws[-1]["e"] if ws else 0, "words": ws})
    dur = round(max(allw[-1]["e"] + TAIL, 8.0), 2)
    return {"dur": dur, "beats": [{"say": b["say"], "scene": b["scene"], "p": b["p"], "theme": b["theme"], "tr": b["transition"], "start": b["start"], "end": b["end"], "words": b["words"], "num": b.get("num"), "name": b.get("name")} for b in out],
            "words": allw, "book": book, "author": author, "look": look, "captions": captions, "lesson": lesson, "cover": cover, "of": plan.get("of", 10)}


def page(reel: dict) -> str:
    css = (STAGE / "reel.css").read_text(encoding="utf8")
    for key, f in (("__F_BR800__", "bricolage-grotesque-latin-800-normal.woff2"), ("__F_BR500__", "bricolage-grotesque-latin-500-normal.woff2"),
                   ("__F_IS600__", "instrument-sans-latin-600-normal.woff2"), ("__F_DM500__", "dm-mono-latin-500-normal.woff2")):
        css = css.replace(key, "data:font/woff2;base64," + base64.b64encode((STAGE / "fonts" / f).read_bytes()).decode())
    html = (STAGE / "reel.html").read_text(encoding="utf8").replace("<script>/*__RUNTIME__*/", "<script>/*__MICRO__*/</script>\n<script>/*__RUNTIME__*/", 1)
    for key, f in (("/*__ICONS__*/", "icons.js"), ("/*__RUNTIME__*/", "reel.js"), ("/*__SCENES__*/", "scenes.js")):
        html = html.replace(key, (STAGE / f).read_text(encoding="utf8"))
    cf = STAGE.parent.parent / "carousel" / "stage"                # the carousel's illustrations (G.*), so reels can animate the same pictures
    for fam, w, f in (("News", 700, "newsreader-latin-700-normal.woff2"), ("News", 800, "newsreader-latin-800-normal.woff2"), ("Sans", 700, "inter-latin-700-normal.woff2"), ("Sans", 800, "inter-latin-800-normal.woff2")):
        css += '@font-face{font-family:"%s";font-weight:%d;src:url(data:font/woff2;base64,%s) format("woff2")}\n' % (fam, w, base64.b64encode((cf / "fonts" / f).read_bytes()).decode())
    html = html.replace("/*__MICRO__*/", "(() => {\n" + (cf / "micro.js").read_text(encoding="utf8") + "\n})();", 1)
    html = html.replace("/*__CSS__*/", css).replace("/*__REEL__*/null", json.dumps(reel).replace("</", "<\\/"))
    return html
