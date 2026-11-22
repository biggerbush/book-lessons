"""The reel plan: a list of beats. Each beat = one narrated line + one scene + how we cut into it.

Both the director (Claude) and the hand-written plans go through normalise(), so the stage only ever sees tidy data."""
from __future__ import annotations

import re

SCENES = ("intro", "slam", "stat", "dots", "meter", "donut", "list", "versus", "timeline", "chart", "quote", "icon", "cycle", "choices", "chat", "countdown", "day", "tracks", "iceberg", "tally", "toggle", "illus", "cta")
GRAPHS = ("stat", "dots", "meter", "donut", "chart", "day", "tracks", "iceberg", "tally", "toggle", "illus")              # data graphics
THINK = ("choices", "chat", "countdown")                           # scenes that put the viewer inside the problem
VISUAL = GRAPHS + THINK + ("versus", "timeline", "icon", "cycle", "list")  # anything that is a picture, not just words
THEMES = ("dark", "amber", "light")
TRANSITIONS = ("whip_left", "whip_right", "whip_up", "push_up", "zoom_through", "circle", "wipe_diag", "glitch", "flip", "scale_back", "cut")
ICONS = ("bulb clock target brain fire lock key heart rocket chart shield book eye phone coin mountain check cross star calendar sun seed "
         "cloud mail laptop bolt flag people door hourglass magnet compass pencil stairs scale").split()

# what the director is told about each scene (also the contract normalise() enforces)
SCENE_DOCS = """
intro     The BOOK CARD. Use it as beat 2 or 3, right after the hook: the book flies in under "A LESSON FROM" while the narrator names the author and book. {"hook":""}   Leave hook empty (the hook belongs to beat 1, as a graphic).
slam      Huge words slam onto the screen one by one. {"lines":["MOST VALUABLE","SKILL AT WORK"],"accent":["VALUABLE"],"sub":"optional small line","glyph":"?"}
          1-4 lines, each max 16 characters (they are upper-cased). accent = words to colour. glyph = optional giant faint symbol behind (e.g. "?" or "1").
stat      A number counts up inside a ring. {"value":37,"decimals":0,"prefix":"","suffix":"x","label":"BETTER IN A YEAR","sub":"small line","ring":0.8}
list      2-4 cards fly in, the newest lights up. {"title":"SMALL TITLE","items":[{"t":"One hour","icon":"clock","on":"hour"},...]}   t max 26 chars; icon from the icon list; on = a word from this beat's narration that cues the card.
versus    Two panels collide (top vs bottom). {"left":{"t":"DEEP","sub":"hard thinking","icon":"brain"},"right":{"t":"SHALLOW","sub":"busywork","icon":"mail"},"win":"left|right|none"}   t max 16 chars, sub max 40. "left" is the TOP panel and is introduced first.
timeline  A line draws down through 3-5 numbered steps. {"title":"SMALL TITLE","items":[{"t":"Finance job","sub":"spreadsheets","on":"jason"},...]}   t max 24 chars.
chart     kind "compound": one curve explodes while another fades. {"kind":"compound","title":"","up_label":"WHAT IT'S WORTH","down_label":"HOW MANY DO IT","up_end":"MORE","down_end":"LESS","caption":"short line"}   up_end max 7 chars, down_end max 9.
          kind "line": any shape from 2-8 points. {"kind":"line","points":[1,3,2,6,12],"labels":["Mon","","","","Fri"],"end_label":"12x","caption":"short line"}   (forgetting curves, plateaus then breakthrough, etc.)
          kind "bars": {"kind":"bars","bars":[{"label":"Day 1","value":1},{"label":"Day 365","value":38,"hl":true}],"suffix":"x"}   2-5 bars, real numbers only.
quote     A line of text rises out of masks. {"text":"max 110 characters","by":"who/where from","accent":["word"]}   Only for real quotes or the lesson's own punchline; never invent a quote for a real person.
icon      One big symbol with keywords orbiting. {"icon":"bulb","title":"ATTENTION RESIDUE","sub":"one short line","chips":["Pings","Tabs","Inbox"]}   title max 20 chars; chips max 4, each max 14 chars.
cycle     A loop of 3-5 steps with a dot running round it. {"title":"","center":"HABIT LOOP","nodes":["Cue","Craving","Response","Reward"]}   nodes max 12 chars.
dots      A grid of people; some light up. {"total":10|20|50|100,"hl":3,"big":"3 IN 10","label":"SHORT LABEL","sub":"one line","note":"illustration"}   Great for "most people", "one in five", proportions.
meter     2-4 horizontal bars fill and count. {"title":"SMALL TITLE","rows":[{"label":"Distracted hour","value":20},{"label":"Focused hour","value":100,"hl":true}],"suffix":"%","max":100,"note":"illustration"}   Great for before/after and comparisons.
donut     A ring split into 2-4 shares. {"title":"WHERE THE DAY GOES","center":"60%","segments":[{"label":"Shallow work","value":60},{"label":"Deep work","value":40}],"suffix":"%","note":"illustration"}
choices   THINKING SCENE. A scenario box, then 2-3 options fly in; the viewer picks, then the answer lights up. {"label":"IT'S 5PM","prompt":"I need the whole deck redone by tomorrow morning.","options":[{"k":"A","t":"Sure, I'll do it","on":"sure"},{"k":"B","t":"That's impossible"},{"k":"C","t":"?","hl":true}],"reveal":"word spoken when the answer lights","q":"What do you say?"}   prompt max 90 chars; option t max 30; at most ONE option has hl (the answer; leave all unmarked for a pure open question).
chat      THINKING SCENE. 2-4 chat bubbles pop in; the highlighted phrase shows what is being repeated or noticed. {"messages":[{"who":"them","name":"BOSS","t":"I need it by tomorrow morning.","hl":"by tomorrow morning"},{"who":"me","name":"YOU","t":"By tomorrow morning?","hl":"by tomorrow morning"}],"note":"optional payoff line"}   each t max 70 chars; who = them|me.
countdown THINKING SCENE. A ring drains while the seconds count up: silence, waiting, a pause made visible. {"seconds":4,"label":"SAY NOTHING","sub":"it feels long"}   seconds 2-9.
day       GRAPHIC. A ring of everyday actions: each segment lights and its icon pops as it is named, then a word lands in the centre. {"title":"A NORMAL MORNING","items":[{"t":"Alarm","icon":"clock"},{"t":"Phone","icon":"phone"},{"t":"Coffee","icon":"coffee"},{"t":"Commute","icon":"car"}],"center":"AUTOPILOT","sub":"optional line"}   3-6 items, t max 10 chars, read each one out in order.
tracks    GRAPHIC. Two signal lanes run side by side; at the "break" word the top lane cracks and stops while the bottom one keeps flowing. {"top":"MEMORY","bottom":"HABIT","break":"lose","top_after":"gone","bottom_after":"still running"}   For two systems where one fails and the other carries on.
iceberg   GRAPHIC. A small tip above water ("top"), then the huge hidden mass is revealed and the items surface inside it as they are named. {"top":"What you notice","items":["Phone checks","Snacking","Same route"]}   items max 4, each max 16 chars, read out in order.
tally     GRAPHIC. A clock sweeps one hour while tally marks stack up in fives and a counter climbs. {"title":"ONE HOUR","marks":12,"start":"mark","label":"times on autopilot"}   For counting, tracking, a self-experiment. "start" = word when marks begin.
toggle    GRAPHIC HOOK. A game-style settings card: a selector slides across 2-3 options as each is said and lands on the last. {"hook":"SMART PEOPLE DON'T WORK HARDER","label":"Life","kicker":"SETTINGS","options":["Hard","Normal","Easy"]}   read each option out loud, in order.
illus     GRAPHIC. Any of the carousel's illustrations (G.<kind> in engine/carousel/stage/micro.js: tangle, pareto, ifthen, curve, choices, fork, hick, ...), animated part by part. {"kind":"tangle","data":{...same data as the carousel graphic...},"cues":["word for step 1","word for step 2",...]}   cues = the spoken word that brings in each step of the picture. Read every text on the picture out loud, in order.
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
        if p.get("kind") == "line":
            try:
                pts = [float(v) for v in (p.get("points") or [])[:8]]
            except (TypeError, ValueError):
                pts = []
            if len(pts) >= 2:
                return {"kind": "line", "title": _s(p.get("title"), 40, True), "points": pts, "labels": [_s(x, 10) for x in (p.get("labels") or [])[:8]],
                        "end_label": _s(p.get("end_label"), 8, True), "caption": _s(p.get("caption"), 60)}
        return {"kind": "compound", "title": _s(p.get("title"), 40, True), "up_label": _s(p.get("up_label"), 34, True), "down_label": _s(p.get("down_label"), 34, True),
                "up_end": _s(p.get("up_end"), 7, True), "down_end": _s(p.get("down_end"), 9, True), "caption": _s(p.get("caption"), 60)}
    if scene == "quote":
        return {"text": _s(p.get("text"), 110), "by": _s(p.get("by"), 40, True), "accent": [_s(a, 18) for a in (p.get("accent") or [])[:4]]}
    if scene == "icon":
        return {"icon": _icon(p.get("icon")) or "star", "title": _s(p.get("title"), 20, True), "sub": _s(p.get("sub"), 70), "chips": [_s(c, 14) for c in (p.get("chips") or [])[:4] if _s(c, 14)]}
    if scene == "cycle":
        nodes = [_s(n, 12) for n in (p.get("nodes") or [])[:5] if _s(n, 12)]
        return {"title": _s(p.get("title"), 40, True), "center": _s(p.get("center"), 22), "nodes": nodes if len(nodes) >= 3 else ["Start", "Do", "Repeat"]}
    if scene == "intro":
        return {"hook": _s(p.get("hook") or p.get("text") or " ".join(p.get("lines") or []), 48, True), "accent": [_s(a, 18, True) for a in (p.get("accent") or [])[:3]]}
    if scene == "dots":
        total = p.get("total") if p.get("total") in (10, 20, 50, 100) else 10
        try:
            hl = max(0, min(total, int(round(float(p.get("hl", 1))))))
        except (TypeError, ValueError):
            hl = 1
        return {"total": total, "hl": hl, "big": _s(p.get("big"), 12, True), "label": _s(p.get("label"), 34, True), "sub": _s(p.get("sub"), 64), "note": _s(p.get("note"), 40)}
    if scene == "meter":
        rows = []
        for r in (p.get("rows") or [])[:4]:
            try:
                rows.append({"label": _s(r.get("label"), 26), "value": float(r.get("value", 0)), "hl": bool(r.get("hl"))})
            except (TypeError, ValueError, AttributeError):
                pass
        rows = rows or [{"label": "Before", "value": 30}, {"label": "After", "value": 90, "hl": True}]
        try:
            mx = float(p.get("max") or 0) or max(r["value"] for r in rows) or 1
        except (TypeError, ValueError):
            mx = max(r["value"] for r in rows) or 1
        return {"title": _s(p.get("title"), 40, True), "rows": rows, "suffix": _s(p.get("suffix"), 4), "max": mx, "note": _s(p.get("note"), 40)}
    if scene == "donut":
        segs = []
        for g in (p.get("segments") or [])[:4]:
            try:
                segs.append({"label": _s(g.get("label"), 24), "value": max(0.0, float(g.get("value", 0)))})
            except (TypeError, ValueError, AttributeError):
                pass
        if len(segs) < 2 or sum(g["value"] for g in segs) <= 0:
            segs = [{"label": "This", "value": 70}, {"label": "That", "value": 30}]
        return {"title": _s(p.get("title"), 40, True), "center": _s(p.get("center"), 8), "segments": segs, "suffix": _s(p.get("suffix"), 3), "note": _s(p.get("note"), 40)}
    if scene == "choices":
        opts = []
        for i, o in enumerate((p.get("options") or [])[:3]):
            o = o if isinstance(o, dict) else {"t": o}
            if _s(o.get("t"), 30):
                opts.append({"k": _s(o.get("k"), 2, True) or "ABC"[i], "t": _s(o.get("t"), 30), "hl": bool(o.get("hl")), "on": _s(o.get("on"), 24)})
        if len(opts) < 2:
            opts = [{"k": "A", "t": "Say yes", "hl": False, "on": ""}, {"k": "B", "t": "Say no", "hl": False, "on": ""}]
        seen = False
        for o in opts:                                        # only one answer can be the answer
            if o["hl"] and seen:
                o["hl"] = False
            seen = seen or o["hl"]
        return {"label": _s(p.get("label"), 22, True) or "YOUR MOVE", "prompt": _s(p.get("prompt"), 90), "options": opts, "reveal": _s(p.get("reveal"), 24), "q": _s(p.get("q"), 50)}
    if scene == "chat":
        msgs = []
        for m in (p.get("messages") or [])[:4]:
            if isinstance(m, dict) and _s(m.get("t"), 70):
                msgs.append({"who": "me" if m.get("who") == "me" else "them", "name": _s(m.get("name"), 10, True), "t": _s(m.get("t"), 70), "hl": _s(m.get("hl"), 40), "on": _s(m.get("on"), 24)})
        return {"messages": msgs or [{"who": "them", "name": "THEM", "t": "Hello.", "hl": "", "on": ""}], "note": _s(p.get("note"), 60)}
    if scene == "countdown":
        try:
            sec = max(2, min(9, int(round(float(p.get("seconds", 4))))))
        except (TypeError, ValueError):
            sec = 4
        return {"seconds": sec, "label": _s(p.get("label"), 20, True) or "SAY NOTHING", "sub": _s(p.get("sub"), 60)}
    if scene == "day":
        items = []
        for o in (p.get("items") or [])[:6]:
            o = o if isinstance(o, dict) else {"t": o}
            if _s(o.get("t"), 10):
                items.append({"t": _s(o.get("t"), 10), "icon": _s(o.get("icon"), 12) or "star"})
        return {"title": _s(p.get("title"), 30, True), "items": items or [{"t": "Wake", "icon": "sun"}, {"t": "Phone", "icon": "phone"}, {"t": "Work", "icon": "laptop"}], "center": _s(p.get("center"), 14, True), "sub": _s(p.get("sub"), 60)}
    if scene == "tracks":
        return {"top": _s(p.get("top"), 14, True) or "MEMORY", "bottom": _s(p.get("bottom"), 14, True) or "HABIT", "break": _s(p.get("break"), 20), "top_after": _s(p.get("top_after"), 24), "bottom_after": _s(p.get("bottom_after"), 24), "note": _s(p.get("note"), 60)}
    if scene == "iceberg":
        return {"top": _s(p.get("top"), 24), "items": [_s(x, 16) for x in (p.get("items") or [])[:4] if _s(x, 16)]}
    if scene == "tally":
        try:
            mk = max(3, min(15, int(p.get("marks", 12))))
        except (TypeError, ValueError):
            mk = 12
        return {"title": _s(p.get("title"), 24, True), "marks": mk, "start": _s(p.get("start"), 20), "label": _s(p.get("label"), 28)}
    if scene == "illus":
        kind = re.sub(r"[^a-z]", "", str(p.get("kind") or ""))[:16]
        cues = [_s(c, 40) for c in (p.get("cues") or [])][:8]
        out = {"kind": kind, "data": p.get("data") if isinstance(p.get("data"), dict) else {}, "cues": cues}
        if p.get("top"):
            out["top"] = max(300, min(700, int(p["top"])))
        return out
    if scene == "toggle":
        opts = [_s(o, 10) for o in (p.get("options") or ["Hard", "Normal", "Easy"]) if _s(o, 10)][:3] or ["Hard", "Normal", "Easy"]
        return {"hook": _s(p.get("hook"), 48), "accent": [_s(a, 16, True) for a in (p.get("accent") or [])][:3], "label": _s(p.get("label"), 14) or "Life", "kicker": _s(p.get("kicker"), 14, True) or "SETTINGS", "options": opts}
    if scene == "cta":
        return {"big": _s(p.get("big"), 3), "label": _s(p.get("label"), 10, True),
                "line1": _s(p.get("line1"), 30) or "Want the full lesson?", "line2": _s(p.get("line2"), 60) or "Watch it as an animated book summary.", "handle": _s(p.get("handle"), 28) or "visualgrowth.app"}
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
        nb = {"say": say, "scene": scene, "theme": theme, "transition": tr, "p": _clean_params(scene, b.get("p") or b.get("params") or {})}
        try:
            if b.get("num") is not None and 1 <= int(b["num"]) <= 10:
                nb["num"] = int(b["num"])
                if b.get("name"):
                    nb["name"] = _s(b["name"], 22)
                if b.get("sub"):
                    nb["sub"] = _s(b["sub"], 90)
        except (TypeError, ValueError):
            pass
        beats.append(nb)
    if not beats:
        raise ValueError("the plan has no usable beats")
    first = next((i for i, b in enumerate(beats) if b["scene"] == "intro"), None)   # one book card, early on
    for i, b in enumerate(beats):
        if b["scene"] == "intro" and (i != first or i > 2):
            b["scene"] = "slam"; b["p"] = _clean_params("slam", {"lines": [b["p"].get("hook", "")[:16]]})
    if beats[-1]["scene"] != "cta":
        beats.append({"say": "Follow for the full lesson.", "scene": "cta", "theme": "dark", "transition": "circle" if prev_tr != "circle" else "whip_up", "p": _clean_params("cta", {})})
    for b in beats[:-1]:
        if b["scene"] == "cta":
            b["scene"] = "slam"; b["p"] = _clean_params("slam", {"lines": [b["say"][:16]]})
    out = {"title": _s(plan.get("title"), 60), "beats": beats}
    if plan.get("format") == "list":
        out["format"] = "list"
        out["of"] = max(3, min(10, int(plan.get("of") or 10)))
    if plan.get("standalone"):
        out["standalone"] = True
    out["words"] = sum(len(b["say"].split()) for b in beats)
    return out


def narration(plan: dict) -> str:
    return " ".join(b["say"] for b in plan["beats"])


_STOP = {"the", "a", "an", "and", "or", "to", "of", "it", "is", "you", "i", "your", "my", "we", "they"}


def _toks(t: str) -> list[str]:
    return [w for w in (re.sub(r"[^a-z0-9% ]", " ", str(t).lower().replace("'", "")).split()) if w]


def _on_screen(b: dict) -> list[str]:
    """The text in a text-based graphic that the viewer has to read (options, bubbles, steps, labels)."""
    p, sc = b["p"], b["scene"]
    if sc == "choices":
        return [o["t"] for o in p.get("options", []) if o["t"].strip("?“”\" ")]
    if sc == "chat":
        return [m["t"] for m in p.get("messages", []) if m.get("who") == "me"] + [m["t"] for m in p.get("messages", [])[1:] if m.get("who") != "me"]
    if sc in ("timeline", "list"):
        return [i["t"] for i in p.get("items", [])]
    if sc == "versus":
        return [p["left"]["t"], p["right"]["t"]]
    if sc in ("day",):
        return [i["t"] for i in p.get("items", [])]
    if sc == "iceberg":
        return list(p.get("items", []))
    if sc == "meter":
        return [r["label"] for r in p.get("rows", [])]
    if sc == "toggle":
        return list(p.get("options", []))
    if b.get("name"):
        return [b["name"]]
    return []


def _read(text: str, say: str) -> bool:
    """True when the narration reads this text: most of its meaningful words are spoken."""
    want = [w for w in _toks(text) if w not in _STOP] or _toks(text)
    have = set(_toks(say))
    if not want:
        return True
    hit = sum(1 for w in want if w in have or any(h.startswith(w[:4]) for h in have if len(w) > 4))
    return hit >= max(1, round(len(want) * 0.6))


def _kind(b: dict) -> str:
    """A scene's visual kind: each carousel illustration counts as its own kind."""
    return "illus:" + b["p"].get("kind", "") if b["scene"] == "illus" else b["scene"]


def problems(plan: dict) -> list[str]:
    """Things worth a second look (used to ask Claude for one repair, and printed in the log)."""
    out, beats = [], plan["beats"]
    n = plan.get("words") or sum(len(b["say"].split()) for b in beats)
    if n < 118:
        out.append(f"narration is only {n} words; it needs 130-150 to fill about a minute")
    if n > 165:
        out.append(f"narration is {n} words; it needs 130-150 to fit about a minute")
    if len(beats) < 9:
        out.append(f"only {len(beats)} beats; use 9-14")
    if len(beats) > (14 if plan.get("format") == "list" else 15):
        out.append(f"{len(beats)} beats is too many")
    if plan.get("format") == "list":
        nums = [b.get("num") for b in beats if b.get("num")]
        N = plan.get("of") or 10
        if nums != list(range(1, N + 1)):
            out.append(f"the list must be {N} beats numbered 1 to {N} in order (\"num\"), found {nums}")
        for b in beats:
            if b.get("num") and b["scene"] in ("slam", "quote", "intro", "cta"):
                out.append(f"thing {b['num']} uses a text scene ({b['scene']}); every numbered thing needs an animated graphic")
        kinds = {_kind(b) for b in beats if b.get("num")}
        if len(kinds) < min(7, plan.get("of") or 10):
            out.append(f"the 10 things use only {len(kinds)} kinds of scene; use at least 7 different ones")
    bi = [i for i, b in enumerate(beats) if b["scene"] == "intro"]
    if not plan.get("standalone") and (not bi or bi[0] not in (1, 2)):
        out.append("the book card ('intro' scene, hook empty) must be beat 2 or 3, straight after the hook")
    if beats and beats[0]["scene"] not in GRAPHS:
        out.append("beat 1 is the hook and must be a graphic (stat, dots, donut, chart, day, iceberg...), not text or the book card")
    run = 1
    for a, b in zip(beats, beats[1:]):
        run = run + 1 if _kind(a) == _kind(b) else 1
        if run >= 3:
            out.append(f"three '{b['scene']}' scenes in a row; vary the scenes")
            break
    if beats and len(beats[0]["say"].split()) > 13:
        out.append(f"the hook (beat 1) is {len(beats[0]['say'].split())} words; keep it to 8-12 so the insight lands by ~3 seconds")
    mid = beats[1:-1]
    g = sum(b["scene"] in GRAPHS for b in beats[:-1])
    v = sum(b["scene"] in VISUAL for b in mid)
    s = sum(b["scene"] in ("slam", "quote") for b in mid)
    t = sum(b["scene"] in THINK for b in mid)
    if t > 1:
        out.append(f"{t} text-card scenes (choices, chat, countdown); use one at most and let animated graphics carry the reel")
    if g < 5:
        out.append(f"only {g} animated graphics; use at least 5, each a different kind")
    if mid and v < 0.7 * len(mid):
        out.append(f"only {v} of {len(mid)} middle beats are graphics; at least 70% should be pictures, not words")
    if s > 3:
        out.append(f"{s} text-only beats (slam/quote); keep it to 3 at most")
    for i, b in enumerate(beats):
        unread = [t for t in _on_screen(b) if not _read(t, b["say"])]
        if unread:
            out.append(f"beat {i + 1} ({b['scene']}) shows text the narrator never reads: " + "; ".join(f'"{t}"' for t in unread[:3]) + ". Read every option/bubble/step out loud, in order, or change the text to match the words spoken")
        if len(b["say"].split()) > (28 if b["scene"] in THINK else 22):
            out.append(f"beat {i + 1} has a long line ({len(b['say'].split())} words); split it")
    return out
