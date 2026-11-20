"""The reel plan: a list of beats. Each beat = one narrated line + one scene + how we cut into it.

Both the director (Claude) and the hand-written plans go through normalise(), so the stage only ever sees tidy data."""
from __future__ import annotations

import re

SCENES = ("slam", "stat", "list", "versus", "timeline", "chart", "quote", "icon", "cycle", "cta")
THEMES = ("dark", "amber", "light")
TRANSITIONS = ("whip_left", "whip_right", "whip_up", "push_up", "zoom_through", "circle", "wipe_diag", "glitch", "flip", "scale_back", "cut")
ICONS = ("bulb clock target brain fire lock key heart rocket chart shield book eye phone coin mountain check cross star calendar sun seed "
         "cloud mail laptop bolt flag people door hourglass magnet compass pencil stairs scale").split()

# what the director is told about each scene (also the contract normalise() enforces)
SCENE_DOCS = """
slam      Huge words slam onto the screen one by one. {"lines":["MOST VALUABLE","SKILL AT WORK"],"accent":["VALUABLE"],"sub":"optional small line","glyph":"?"}
          1-4 lines, each max 16 characters (they are upper-cased). accent = words to colour. glyph = optional giant faint symbol behind (e.g. "?" or "1").
stat      A number counts up inside a ring. {"value":37,"decimals":0,"prefix":"","suffix":"x","label":"BETTER IN A YEAR","sub":"small line","ring":0.8}
list      2-4 cards fly in, the newest lights up. {"title":"SMALL TITLE","items":[{"t":"One hour","icon":"clock","on":"hour"},...]}   t max 26 chars; icon from the icon list; on = a word from this beat's narration that cues the card.
versus    Two panels collide (top vs bottom). {"left":{"t":"DEEP","sub":"hard thinking","icon":"brain"},"right":{"t":"SHALLOW","sub":"busywork","icon":"mail"},"win":"left|right|none"}   t max 16 chars, sub max 40. "left" is the TOP panel and is introduced first.
timeline  A line draws down through 3-5 numbered steps. {"title":"SMALL TITLE","items":[{"t":"Finance job","sub":"spreadsheets","on":"jason"},...]}   t max 24 chars.
chart     kind "compound": one curve explodes while another fades. {"kind":"compound","title":"","up_label":"WHAT IT'S WORTH","down_label":"HOW MANY DO IT","up_end":"MORE","down_end":"LESS","caption":"short line"}   up_end max 7 chars, down_end max 9.
          kind "bars": {"kind":"bars","bars":[{"label":"Day 1","value":1},{"label":"Day 365","value":38,"hl":true}],"suffix":"x"}   2-5 bars, real numbers only.
quote     A line of text rises out of masks. {"text":"max 110 characters","by":"who/where from","accent":["word"]}   Only for real quotes or the lesson's own punchline; never invent a quote for a real person.
icon      One big symbol with keywords orbiting. {"icon":"bulb","title":"ATTENTION RESIDUE","sub":"one short line","chips":["Pings","Tabs","Inbox"]}   title max 20 chars; chips max 4, each max 14 chars.
cycle     A loop of 3-5 steps with a dot running round it. {"title":"","center":"HABIT LOOP","nodes":["Cue","Craving","Response","Reward"]}   nodes max 12 chars.
cta       The end card with the book cover. {"line1":"Want the full lesson?","line2":"Watch it as an animated summary.","handle":"visualgrowth.app"}   Always the LAST beat.
"""


def _s(x, n, upper=False) -> str:
    t = re.sub(r"\s+", " ", str(x if x is not None else "")).strip()
    t = t[:n].rstrip()
    return t.upper() if upper else t


def _icon(x) -> str:
    x = str(x or "").strip().lower()
    return x if x in ICONS else ""


def _items(lst, keys, n_max, t_max, sub_max=0, icons=False):
    out = []
    for it in (lst or [])[:n_max]:
        if isinstance(it, str):
            it = {"t": it}
        if not isinstance(it, dict):
            continue
        o = {"t": _s(it.get("t"), t_max)}
        if sub_max:
            o["sub"] = _s(it.get("sub"), sub_max)
        if icons:
            o["icon"] = _icon(it.get("icon"))
        if it.get("on"):
            o["on"] = _s(it.get("on"), 24)
        if o["t"]:
            out.append(o)
    return out


def _clean_params(scene: str, p: dict) -> dict:
    p = p if isinstance(p, dict) else {}
    if scene == "slam":
        lines = p.get("lines") or ([p["text"]] if p.get("text") else [])
        lines = [_s(l, 18, True) for l in lines[:4] if _s(l, 18)]
        return {"lines": lines or ["WATCH THIS"], "accent": [_s(a, 18, True) for a in (p.get("accent") or [])[:4]],
                "sub": _s(p.get("sub"), 70), "glyph": _s(p.get("glyph"), 2)}
    if scene == "stat":
        try:
            v = float(p.get("value", 0))
        except (TypeError, ValueError):
            v = 0.0
        return {"value": v, "decimals": max(0, min(2, int(p.get("decimals") or 0))), "prefix": _s(p.get("prefix"), 4), "suffix": _s(p.get("suffix"), 6),
                "label": _s(p.get("label"), 34), "sub": _s(p.get("sub"), 64), "ring": max(0.05, min(1.0, float(p.get("ring", 0.78) or 0.78)))}
    if scene == "list":
        return {"title": _s(p.get("title"), 40, True), "items": _items(p.get("items"), None, 4, 26, 0, True)}
    if scene == "versus":
        def side(o, ic):
            o = o if isinstance(o, dict) else {}
            return {"t": _s(o.get("t"), 16, True), "sub": _s(o.get("sub"), 40), "icon": _icon(o.get("icon")) or ic}
        win = p.get("win") if p.get("win") in ("left", "right", "none") else "right"
        return {"left": side(p.get("left"), "cross"), "right": side(p.get("right"), "check"), "win": win, "vs": _s(p.get("vs"), 3, True) or "VS"}
    if scene == "timeline":
        return {"title": _s(p.get("title"), 40, True), "items": _items(p.get("items"), None, 5, 24, 44)}
    if scene == "chart":
        if p.get("kind") == "bars":
            bars = []
            for b in (p.get("bars") or [])[:5]:
                try:
                    bars.append({"label": _s(b.get("label"), 22), "value": float(b.get("value", 0)), "hl": bool(b.get("hl"))})
                except (TypeError, ValueError, AttributeError):
                    pass
            if len(bars) >= 2:
                return {"kind": "bars", "title": _s(p.get("title"), 40, True), "bars": bars, "suffix": _s(p.get("suffix"), 4)}
        return {"kind": "compound", "title": _s(p.get("title"), 40, True), "up_label": _s(p.get("up_label"), 34, True), "down_label": _s(p.get("down_label"), 34, True),
                "up_end": _s(p.get("up_end"), 7, True), "down_end": _s(p.get("down_end"), 9, True), "caption": _s(p.get("caption"), 60)}
    if scene == "quote":
        return {"text": _s(p.get("text"), 110), "by": _s(p.get("by"), 40, True), "accent": [_s(a, 18) for a in (p.get("accent") or [])[:4]]}
    if scene == "icon":
        return {"icon": _icon(p.get("icon")) or "star", "title": _s(p.get("title"), 20, True), "sub": _s(p.get("sub"), 70), "chips": [_s(c, 14) for c in (p.get("chips") or [])[:4] if _s(c, 14)]}
    if scene == "cycle":
        nodes = [_s(n, 12) for n in (p.get("nodes") or [])[:5] if _s(n, 12)]
        return {"title": _s(p.get("title"), 40, True), "center": _s(p.get("center"), 22), "nodes": nodes if len(nodes) >= 3 else ["Start", "Do", "Repeat"]}
    if scene == "cta":
        return {"line1": _s(p.get("line1"), 30) or "Want the full lesson?", "line2": _s(p.get("line2"), 60) or "Watch it as an animated book summary.", "handle": _s(p.get("handle"), 28) or "visualgrowth.app"}
    return p


def clean_say(x) -> str:
    t = re.sub(r"[\[\]\*_#=<>{}|]", "", str(x or ""))
    return re.sub(r"\s+", " ", t).strip()


def normalise(plan: dict) -> dict:
    beats_in = plan.get("beats") if isinstance(plan, dict) else None
    if not isinstance(beats_in, list) or not beats_in:
        raise ValueError("the plan has no beats")
    beats, prev_tr, k = [], "", 0
    for i, b in enumerate(beats_in):
        say = clean_say(b.get("say"))
        if not say:
            continue
        scene = b.get("scene") if b.get("scene") in SCENES else "slam"
        theme = b.get("theme") if b.get("theme") in THEMES else ("amber" if scene in ("cta",) and False else THEMES[0])
        tr = b.get("transition") if b.get("transition") in TRANSITIONS else ""
        if not tr or tr == prev_tr:
            tr = next(t for t in TRANSITIONS[k % len(TRANSITIONS):] + TRANSITIONS if t != prev_tr)
            k += 3
        prev_tr = tr
        beats.append({"say": say, "scene": scene, "theme": theme, "transition": tr, "p": _clean_params(scene, b.get("p") or b.get("params") or {})})
    if not beats:
        raise ValueError("the plan has no usable beats")
    if beats[-1]["scene"] != "cta":
        beats.append({"say": "Follow for the full lesson.", "scene": "cta", "theme": "dark", "transition": "circle" if prev_tr != "circle" else "whip_up", "p": _clean_params("cta", {})})
    for b in beats[:-1]:
        if b["scene"] == "cta":
            b["scene"] = "slam"; b["p"] = _clean_params("slam", {"lines": [b["say"][:16]]})
    out = {"title": _s(plan.get("title"), 60), "beats": beats}
    out["words"] = sum(len(b["say"].split()) for b in beats)
    return out


def narration(plan: dict) -> str:
    return " ".join(b["say"] for b in plan["beats"])


def problems(plan: dict) -> list[str]:
    """Things worth a second look (used to ask Claude for one repair, and printed in the log)."""
    out, beats = [], plan["beats"]
    n = plan.get("words") or sum(len(b["say"].split()) for b in beats)
    if n < 118:
        out.append(f"narration is only {n} words; it needs 130-150 to fill about a minute")
    if n > 165:
        out.append(f"narration is {n} words; it needs 130-150 to fit about a minute")
    if len(beats) < 14:
        out.append(f"only {len(beats)} beats; use 16-22 so the picture changes every 2-4 seconds")
    run = 1
    for a, b in zip(beats, beats[1:]):
        run = run + 1 if a["scene"] == b["scene"] else 1
        if run >= 3:
            out.append(f"three '{b['scene']}' scenes in a row; vary the scenes")
            break
    for i, b in enumerate(beats):
        if len(b["say"].split()) > 22:
            out.append(f"beat {i + 1} has a long line ({len(b['say'].split())} words); split it")
    return out
