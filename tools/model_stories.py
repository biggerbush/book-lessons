"""Hand-built animated stories for showcase models.

Writes a "story" array into site/models.json for each model defined here:
  story = [{"k": kicker, "h": headline, "t": body text, "svg": inner SVG for viewBox 0 0 360 280}, ...]
The player (site/models.js) adds the closing "Ask yourself" slide itself.
Animation classes are documented in site/models-motion.css.

Run:  python3 tools/model_stories.py
"""
from __future__ import annotations
import json
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# ------------------------------------------------------------------ helpers
def F(kind, d, inner, at=None):
    """Animated group. `at` = (x, y) to position the content without clashing with the animation transform."""
    if at:
        inner = f'<g transform="translate({at[0]} {at[1]})">{inner}</g>'
    return f'<g class="fx-{kind}" style="--d:{d}s">{inner}</g>'

def D(d, cls, delay=0.0, extra=""):
    """A path that draws itself."""
    return f'<path pathLength="1" class="{cls} fx-draw" style="--d:{delay}s" d="{d}"{extra}/>'

def P(d, cls, extra=""):
    return f'<path class="{cls}" d="{d}"{extra}/>'

def T(x, y, s, size=16, c="tk", font="fd", anchor="middle", extra=""):
    return f'<text x="{x}" y="{y}" class="{font} {c}" font-size="{size}" text-anchor="{anchor}"{extra}>{escape(s)}</text>'

def R(x, y, w, h, cls="pf", r=12):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" class="{cls}"/>'

def C(x, y, r, cls):
    return f'<circle cx="{x}" cy="{y}" r="{r}" class="{cls}"/>'

CHIP = {"a": ("ca", "ta"), "i": ("ci", "ti"), "m": ("cm", "tk"), "A": ("cA", "tw"), "I": ("cI", "tw")}
def chip_w(s, size=13):
    return round(len(s) * size * 0.56 + 26)

def chip(x, y, s, c="a", size=13, center=True):
    """Pill with text; (x, y) is the centre if center else the left edge (vertical centre)."""
    w, h = chip_w(s, size), size + 17
    x0 = x - w / 2 if center else x
    box, txt = CHIP[c]
    return R(round(x0, 1), y - h / 2, w, h, box, h / 2) + T(round(x0 + w / 2, 1), y + size * 0.36, s, size, txt, "fb")

def check(x, y, r=11, solid=True):
    return (C(x, y, r, "af") + P(f"M{x-5} {y}l3.6 3.8 7-7.6", "lk thin", ' style="stroke:var(--on-gain)"')) if solid else \
           (C(x, y, r, "pa") + P(f"M{x-5} {y}l3.6 3.8 7-7.6", "la thin"))

def cross(x, y, r=11):
    return C(x, y, r, "if") + P(f"M{x-4.5} {y-4.5}l9 9m0-9-9 9", "lk thin", ' style="stroke:var(--on-gain)"')

def person(s=1.0, body="k", legs="af", arms=True):
    """Simple figure standing on (0,0), about 72*s tall."""
    a = f'<path class="lk fat" d="M-15 -45l-7 20M15 -45l7 20" style="stroke:var(--ink)"/>' if arms else ""
    return (f'<g transform="scale({s})">{a}<circle class="{body}" cx="0" cy="-63" r="10"/>'
            f'<path class="{body}" d="M-13 -50h26a5 5 0 0 1 5 5v22h-36v-22a5 5 0 0 1 5-5z"/>'
            f'<path class="{legs}" d="M-13 -24h12v24h-12zM1 -24h12v24h-12z"/></g>')

def arrow(x1, y1, x2, y2, cls="la", delay=0.0, head=9):
    import math
    ang = math.atan2(y2 - y1, x2 - x1)
    hx1, hy1 = x2 - head * math.cos(ang - 0.5), y2 - head * math.sin(ang - 0.5)
    hx2, hy2 = x2 - head * math.cos(ang + 0.5), y2 - head * math.sin(ang + 0.5)
    return D(f"M{x1} {y1}L{x2} {y2}M{hx1:.1f} {hy1:.1f}L{x2} {y2}L{hx2:.1f} {hy2:.1f}", cls, delay)

def tile(x, y, w, h, icon, label, d, c="a"):
    box = "pa" if c == "a" else ("pi" if c == "i" else "pf")
    txt = {"a": "ta", "i": "ti"}.get(c, "tk")
    return F("pop", d, R(x, y, w, h, box, 14) + icon + T(x + w / 2, y + h - 18, label, 14, txt, "fb"))

def S(k, h, t, *parts):
    return {"k": k, "h": h, "t": t, "svg": "".join(parts)}

GROUND = lambda y=250, d=0.0: D(f"M24 {y}H336", "ll", d)

# ------------------------------------------------------------------ Inversion
inversion = [
 S("The idea", "Solve it backwards.",
   "Instead of asking how to win, ask what would guarantee you lose. Then avoid those things.",
   F("fade", 0, C(268, 196, 80, "glow")),
   D("M104 52C140 14 210 14 248 48", "la", .5), F("fade", 1.2, P("M238 50l11 0-2-11", "la")),
   F("up", .1, R(20, 60, 150, 84, "pf", 14) + T(95, 96, "How do I", 19) + T(95, 121, "succeed?", 19)),
   F("pop", .9, R(190, 60, 150, 84, "pa", 14) + T(265, 96, "What would", 19, "ta") + T(265, 121, "make me fail?", 19, "ta")),
   GROUND(252, .2),
   F("up", 1.2, person(.85, "mf", "mf"), (95, 252)),
   D("M214 176H322", "la", 1.3),
   F("fade", 1.6, '<g transform="translate(268 176) rotate(180)">' + person(.85, "k", "af") + "</g>")),
 S("Forward thinking", "Big goals are foggy.",
   "Ask \"how do I build a great career?\" and the answers are vague: work hard, network, get lucky.",
   F("up", 0, P("M20 252L150 64l46 70 34-40 110 158z", "pf")),
   F("fade", .2, P("M150 64l-22 32 14-4 8 10 10-12 12 6z", "p2f")),
   F("fade", .4, P("M62 248C96 220 70 196 110 180S100 140 124 128", "lm dash fx-march")),
   F("fade", .6, P("M62 248C110 236 150 214 170 196S200 160 214 150", "lm dash fx-march")),
   F("fade", .8, P("M62 248C70 214 40 190 56 164S82 132 92 120", "lm dash fx-march")),
   F("fade", .9, F("float", 0, '<ellipse cx="170" cy="124" rx="150" ry="16" class="fog"/><ellipse cx="200" cy="156" rx="110" ry="12" class="fog"/>')),
   F("fade", 1.1, F("float", .8, '<ellipse cx="120" cy="104" rx="90" ry="10" class="fog"/>')),
   F("pop", 1.4, P("M150 64V34l20 8-20 8", "la") + T(182, 40, "?", 26, "ta")),
   F("up", .2, person(.7), (60, 252))),
 S("Flip it", "Now flip the question.",
   "\"How would I wreck my career?\" Suddenly the answers are sharp and specific.",
   F("out", .7, R(50, 34, 260, 212, "pf", 18) + T(180, 128, "How do I build a", 20, "tm") + T(180, 156, "great career?", 20, "tm")),
   F("flipin", .9, R(50, 34, 260, 212, "pa", 18) + T(180, 76, "How would I wreck", 20, "ta") + T(180, 102, "my career?", 20, "ta")),
   F("left", 1.4, cross(92, 140) + T(114, 145, "Burn bridges", 15, "tk", "fb", "start")),
   F("left", 1.6, cross(92, 178) + T(114, 183, "Stop learning", 15, "tk", "fb", "start")),
   F("left", 1.8, cross(92, 216) + T(114, 221, "Miss every deadline", 15, "tk", "fb", "start"))),
 S("Make rules", "Turn each failure into a rule.",
   "Every way to fail becomes something to avoid. Avoiding mistakes is often easier than chasing brilliance.",
   T(80, 40, "FAILURE", 11, "ti", "fm"), T(268, 40, "RULE", 11, "ta", "fm"),
   F("pop", .1, chip(80, 80, "Burn bridges", "i")), F("pop", .3, chip(80, 140, "Stop learning", "i")), F("pop", .5, chip(80, 200, "Miss deadlines", "i")),
   arrow(144, 80, 186, 80, "lm", .8), arrow(144, 140, 186, 140, "lm", 1.0), arrow(144, 200, 186, 200, "lm", 1.2),
   F("pop", 1.1, chip(268, 80, "Keep promises", "A")), F("pop", 1.3, chip(268, 140, "Learn every week", "A")), F("pop", 1.5, chip(268, 200, "Pad every deadline", "A"))),
 S("In practice", "Steer around the potholes.",
   "You don't need the perfect route if you avoid the holes that sink most people.",
   P("M10 262C120 250 150 130 350 96", "ll", ' style="stroke-width:58;stroke:var(--panel)"'),
   P("M10 262C120 250 150 130 350 96", "ll", ' style="stroke-width:62;stroke:var(--line);opacity:.5"'),
   P("M10 262C120 250 150 130 350 96", "ll", ' style="stroke-width:56;stroke:var(--panel)"'),
   P("M10 262C120 250 150 130 350 96", "lm thin dash fx-march"),
   F("pop", .3, '<ellipse cx="96" cy="244" rx="15" ry="7" class="if"/>'),
   F("pop", .5, '<ellipse cx="170" cy="182" rx="15" ry="7" class="if"/>'),
   F("pop", .7, '<ellipse cx="258" cy="124" rx="15" ry="7" class="if"/>'),
   D("M20 252C60 252 70 230 96 228S128 208 150 196 180 160 196 166 226 140 250 140 290 110 330 104", "la fat", 1.0),
   F("pop", 2.0, P("M330 104V70l22 9-22 9", "la") + C(330, 104, 5, "af"))),
 S("Where it helps", "Use it whenever advice feels vague.",
   "Planning a project, managing money, keeping a relationship healthy: ask what would ruin it first.",
   tile(16, 64, 100, 150, P("M44 98h44v40H44zM44 110h44M56 92v12M76 92v12", "la") + C(80, 128, 4, "af"), "Plans", .1),
   tile(130, 64, 100, 150, P("M156 140l16-18 14 10 24-28", "la") + P("M200 104h10v10", "la"), "Money", .3),
   tile(244, 64, 100, 150, P("M294 140c-16-10-26-18-26-30 0-8 6-14 13-14 6 0 10 4 13 8 3-4 7-8 13-8 7 0 13 6 13 14 0 12-10 20-26 30z", "la"), "People", .5)),
 S("Common mistake", "Don't stop at the list.",
   "A list of fears isn't a plan. Turn each one into a specific rule or check you will actually follow.",
   F("up", 0, R(70, 40, 160, 200, "pf", 14) + P("M120 34h60v14h-60z", "mf")),
   F("fade", .3, cross(100, 92, 9) + P("M118 92h86", "lm") + cross(100, 132, 9) + P("M118 132h70", "lm") +
     cross(100, 172, 9) + P("M118 172h80", "lm") + cross(100, 212, 9) + P("M118 212h56", "lm")),
   F("pop", 1.0, '<g transform="rotate(-10 250 150)">' + R(176, 124, 156, 52, "cA", 10) + T(254, 157, "MAKE IT A RULE", 14, "tw", "fm") + "</g>")),
]

# ------------------------------------------------------------------ chapters: one drawing that builds up over several flicks
def still(*parts, dim=False):
    """Layers from earlier flicks, shown finished (no entry animation)."""
    return f'<g class="still{" dim" if dim else ""}">' + "".join(parts) + "</g>"

def chapter(name, steps):
    """steps: dicts with h, t, svg and optional ex (example callout). Adds the chapter name and step number."""
    out = []
    for i, st in enumerate(steps):
        d = {"k": name, "h": st["h"], "t": st["t"], "svg": st["svg"]}
        if st.get("ex"):
            d["ex"] = st["ex"]
        if len(steps) > 1:
            d["step"] = [i + 1, len(steps)]
        out.append(d)
    return out

def X(h, t, svg, ex=None):
    return {"h": h, "t": t, "svg": svg, "ex": ex}

# ------------------------------------------------------------------ First principles
FP_GROUND = P("M24 250H336", "ll")
FP_LABELS = ["Rules say", "Can't change", "Too costly", "Experts say", "Always done"]
def fp_tower(labels=False, anim=True):
    out = []
    for k in range(5):
        y = 218 - k * 33
        blk = R(52, y, 112, 30, "pf", 6) + (T(108, y + 20, FP_LABELS[k], 12, "tk", "fb") if labels else "")
        out.append(F("up", .1 + k * .12, blk) if anim else blk)
    return "".join(out)
FP_TOWER_LABEL = T(108, 40, "THE USUAL WAY", 10, "tm", "fm")
FP_PERSON = F("up", .8, person(.8, "k", "mf"), (272, 250)) + F("pop", 1.2, chip(272, 150, "That's how it's done", "m", 11))
FP_LABEL_LAYER = "".join(F("fade", .2 + k * .18, T(108, 238 - k * 33, FP_LABELS[4 - k] if False else FP_LABELS[k], 12, "tk", "fb"))
                         for k in range(5))
FP_QMARKS = "".join(F("pop", 1.2 + k * .12, C(176, 233 - k * 33, 9, "pi") + T(176, 237 - k * 33, "?", 12, "ti")) for k in range(5))

FP_GROUND_BLOCKS = [("Fact", True), ("Rules say", False), ("Fact", True), ("Too costly", False), ("Fact", True), ("Always done", False)]
def fp_rubble(anim=True, facts_only=False):
    out = []
    for k, (lab, ok) in enumerate(FP_GROUND_BLOCKS):
        if facts_only and not ok:
            continue
        x = 26 + k * 52
        blk = (R(x, 218, 48, 30, "pa" if ok else "pf", 6) + (check(x + 24, 233, 9) if ok else
               T(x + 24, 238, "✕", 14, "ti", "fb")))
        out.append(F("down", .7 + k * .1, blk) if anim else blk)
    return "".join(out)
FP_RUBBLE_LABELS = (F("fade", 1.5, T(102, 206, "ASSUMPTIONS: OUT", 9, "ti", "fm") ) )

def fp_arch():
    blocks = [(70, 218), (70, 186), (70, 154), (238, 218), (238, 186), (238, 154)]
    out = [F("up", .2 + k * .1, R(x, y, 52, 30, "pa", 6)) for k, (x, y) in enumerate(blocks)]
    out.append(F("pop", .9, P("M70 152C110 92 250 92 290 152h-24c-26-34-82-34-108 0z", "af")))
    out.append(F("fade", 1.3, T(180, 76, "A NEW ANSWER", 11, "ta", "fm")))
    out.append(F("fade", 1.0, C(180, 160, 80, "glow")))
    return "".join(out)

# battery example
PACK = (R(136, 104, 88, 92, "pf", 10) + P("M156 98h14v8h-14zM190 98h14v8h-14z", "mf") +
        P("M184 126l-12 22h16l-12 22", "la fat"))
MATS = [(60, 100, "Cobalt"), (60, 145, "Nickel"), (60, 190, "Aluminium"), (300, 100, "Carbon"), (300, 145, "Polymers"), (300, 190, "Steel can")]
def bars(anim=True):
    tall = R(76, 60, 76, 170, "if", 8)
    short = R(208, 207, 76, 23, "af", 8)
    out = (F("growy", .2, tall) if anim else tall) + (F("growy", .7, short) if anim else short)
    out += T(114, 50, "$600", 20, "ti") + T(246, 197, "$80", 20, "ta")
    out += T(114, 252, "PACK PRICE", 10, "tm", "fm") + T(246, 252, "RAW MATERIALS", 10, "tm", "fm") + P("M40 232H320", "ll")
    return F("fade", 0, out) if anim else out

# gym example
GYM_CARD = (R(20, 18, 320, 74, "pf", 14) + T(38, 42, "THE PROBLEM", 10, "tm", "fm", "start") +
            T(38, 66, "I want to get fit, but the gym", 16, "tk", "fb", "start") + T(38, 84, "costs £50 a month.", 16, "tk", "fb", "start"))
GYM_ASSUME = ["Fitness needs a gym", "Gyms need a membership", "I need equipment"]
GYM_FACTS = ["Resistance builds muscle", "Effort builds stamina", "I have 30 min a day"]
def gym_chips(items, c, anim=True, size=13):
    out = []
    for k, s in enumerate(items):
        ch = chip(26, 140 + k * 42, s, c, size, center=False)
        out.append(F("left", .2 + k * .2, ch) if anim else ch)
    return "".join(out)

fp = (
 chapter("The idea", [
  X("Most answers are copies.",
    "We usually solve problems by analogy: we look at how something is already done and do the same. It's quick, and most of the time it works.",
    FP_GROUND + F("fade", 0, FP_TOWER_LABEL) + fp_tower() + FP_PERSON,
    "Reasoning by analogy: “Everyone does it this way, so I will too.”"),
  X("Every copy hides assumptions.",
    "Look inside the usual answer and you'll find beliefs nobody has checked in years: the rules, the cost, what the experts say. Copy the answer and you copy all of them.",
    still(FP_GROUND, FP_TOWER_LABEL, fp_tower(anim=False), '<g transform="translate(272 250)">' + person(.8, "k", "mf") + "</g>", chip(272, 150, "That's how it's done", "m", 11)) +
    FP_LABEL_LAYER + FP_QMARKS),
  X("Take it apart.",
    "First principles thinking breaks the answer into its pieces and tests each one. Is this actually true, or just believed? Anything you can't prove gets thrown out.",
    still(FP_GROUND) + F("out", 0, FP_TOWER_LABEL + fp_tower(True, False)) + fp_rubble() +
    F("fade", 1.6, T(180, 120, "Keep only what's", 18) + T(180, 144, "certainly true", 18, "ta")),
    "Ask of every piece: how do I know this is true?"),
  X("Rebuild from the facts.",
    "Now build a new answer using only what's left. It often looks nothing like the old one, and that's where breakthroughs come from.",
    still(FP_GROUND) + F("out", 0, fp_rubble(False)) + fp_arch()),
 ]) +
 chapter("Where it comes from", [
  X("A 2,000-year-old idea.",
    "Aristotle described a first principle as “the first basis from which a thing is known”: a truth you can't break down any further. Everything else is built on top of it.",
    F("fade", 0, C(180, 150, 90, "glow")) +
    F("up", .1, R(130, 214, 100, 18, "pf", 3) + R(120, 232, 120, 18, "pf", 3)) +
    "".join(F("growy", .3 + k * .08, R(140 + k * 20, 92, 12, 122, "pf", 3)) for k in range(4)) +
    F("down", .7, R(124, 72, 112, 20, "pf", 3) + P("M118 72h124l-14-16h-96z", "pf")) +
    F("pop", 1.2, chip(180, 34, "ARISTOTLE · 4TH CENTURY BC", "a", 11)) +
    F("fade", 1.4, P("M40 250H120M240 250H320", "ll"))),
 ]) +
 chapter("Example: batteries", [
  X("The battery problem.",
    "In a 2012 interview, Elon Musk said battery packs cost around $600 per kilowatt-hour. Most people concluded that electric cars would always be expensive.",
    F("fade", 0, C(180, 150, 80, "glowi")) + F("pop", .1, PACK) +
    F("pop", .7, chip(180, 66, "$600 per kWh", "I", 14)) +
    F("fade", 1.2, T(180, 236, "“Batteries are just expensive.”", 15, "tm", "fb")),
    "The assumption everyone made: batteries are expensive, and always will be."),
  X("What is it actually made of?",
    "Instead of accepting the price, he asked a first-principles question: what does a battery contain? Strip away the pack and the brand, and it's a short list of raw materials.",
    still(PACK, chip(180, 66, "$600 per kWh", "I", 14), dim=True) +
    "".join(arrow(136 if x < 180 else 224, 150, 112 if x < 180 else 248, y, "lm", .3 + k * .08, 6) for k, (x, y, _) in enumerate(MATS)) +
    "".join(F("pop", .6 + k * .12, chip(x, y, s, "a")) for k, (x, y, s) in enumerate(MATS))),
  X("Price the raw materials.",
    "He priced those materials on the metals market. Bought as raw ingredients, they came to roughly $80 per kilowatt-hour, a fraction of the pack price.",
    bars(),
    "Figures as Musk described them; they're approximate and from 2012."),
  X("The gap is the opportunity.",
    "So the high price wasn't about what batteries are made of. It was about how they were made, and that can be redesigned. Smarter ways of putting those materials together could make batteries far cheaper.",
    still(bars(False)) +
    F("fade", .2, P("M152 60H300", "la thin dash")) + arrow(262, 132, 262, 66, "la", .5, 8) + arrow(262, 132, 262, 200, "la", .5, 8) +
    F("pop", 1.0, chip(262, 132, "how it's made", "A", 12))),
 ]) +
 chapter("Try it yourself", [
  X("Write down the problem.",
    "Pick something you're stuck on. Write the problem in one line, then list every belief behind it, even the ones that feel obvious.",
    F("up", 0, GYM_CARD) + F("fade", .4, T(26, 114, "WHAT I'M ASSUMING", 10, "tm", "fm", "start")) + gym_chips(GYM_ASSUME, "m"),
    "Example: “I want to get fit, but the gym costs £50 a month.”"),
  X("Ask: how do I know?",
    "Challenge each belief. Does getting fit really need a gym? No. Do you need a membership, or equipment? Not to start. Each one turns out to be a habit, not a fact.",
    still(GYM_CARD, T(26, 114, "WHAT I'M ASSUMING", 10, "tm", "fm", "start"), gym_chips(GYM_ASSUME, "m", False)) +
    "".join(F("pop", .4 + k * .3, cross(250 + (k == 1) * 22, 140 + k * 42)) for k in range(3)) +
    "".join(F("fade", .6 + k * .3, T(270 + (k == 1) * 22, 144 + k * 42, "habit", 11, "ti", "fm", "start")) for k in range(3))),
  X("Find what's certainly true.",
    "Underneath, a few things are certain: muscles grow when they work against resistance, stamina grows with effort, and you have 30 minutes a day.",
    still(GYM_CARD) + F("out", 0, T(26, 114, "WHAT I'M ASSUMING", 10, "tm", "fm", "start") + gym_chips(GYM_ASSUME, "m", False)) +
    F("fade", .4, T(26, 114, "WHAT'S TRUE", 10, "ta", "fm", "start")) +
    "".join(F("left", .5 + k * .2, chip(26, 140 + k * 42, s, "a", 13, center=False)) for k, s in enumerate(GYM_FACTS))),
  X("Rebuild a new answer.",
    "Build only on those facts: push-ups, squats and a run at home, 30 minutes a day. It costs nothing, because the goal was never “join a gym”. The goal was “get fit”.",
    still(GYM_CARD, T(26, 114, "WHAT'S TRUE", 10, "ta", "fm", "start"),
          "".join(chip(26, 140 + k * 42, s, "a", 13, center=False) for k, s in enumerate(GYM_FACTS)), dim=True) +
    arrow(232, 182, 252, 182, "la", .2, 7) +
    F("pop", .5, R(256, 118, 88, 128, "pa", 14) + T(300, 142, "NEW PLAN", 9, "ta", "fm") + T(300, 168, "Push-ups", 13, "tk", "fb") +
      T(300, 188, "Squats", 13, "tk", "fb") + T(300, 208, "Runs", 13, "tk", "fb") + T(300, 234, "£0", 18, "ta")),
    "No gym, no fee, and no excuse."),
 ]) +
 chapter("How to dig", [
  X("Keep asking until you hit bedrock.",
    "Good questions: How do I know this is true? What's the evidence? What would I do if I were starting from scratch? Stop when the answer is something you can measure or prove.",
    F("fade", 0, R(24, 50, 186, 40, "pf", 6) + T(117, 75, "OPINION", 11, "tm", "fm")) +
    F("fade", .15, R(24, 94, 186, 40, "pf", 6) + T(117, 119, "ASSUMPTION", 11, "tm", "fm")) +
    F("fade", .3, R(24, 138, 186, 40, "pf", 6) + T(117, 163, "BELIEF", 11, "tm", "fm")) +
    F("fade", .45, R(24, 182, 186, 64, "pa", 6) + T(117, 220, "FACT · BEDROCK", 12, "ta", "fm")) +
    D("M200 30V200", "la fat", .6) + F("pop", 1.5, P("M192 196l8 14 8-14z", "af")) +
    F("left", 1.0, chip(282, 70, "How do I know?", "a", 11)) +
    F("left", 1.2, chip(282, 120, "What's the evidence?", "a", 11)) +
    F("left", 1.4, chip(282, 170, "From scratch?", "a", 11))),
 ]) +
 chapter("When to use it", [
  X("Use it when you're stuck.",
    "It's most powerful when progress has stalled, when the only reason given is “that's how it's always done”, or when a cost or a rule seems impossible to move.",
    tile(16, 60, 100, 160, P("M48 112c0-14 36-14 36 0s-36 14-36 28 36 14 36 0", "la"), "Stuck", .1) +
    tile(130, 60, 100, 160, P("M180 92a26 26 0 1 1-24 16", "la") + P("M150 102l6 7 8-4", "la"), "Always done", .3) +
    tile(244, 60, 100, 160, P("M276 118h36v30h-36zM282 118v-10a12 12 0 0 1 24 0v10", "la"), "Fixed costs", .5)),
  X("But not for everything.",
    "Thinking from scratch is slow. For everyday choices, like what to cook or which route to take, copying what works is the smart move. Save first principles for problems that matter.",
    F("up", .1, R(20, 50, 150, 190, "pf", 16) + T(95, 80, "EVERYDAY", 11, "tm", "fm") +
      P("M70 110h50v60H70z", "lm") + P("M80 100h50v60", "lm thin") + T(95, 200, "Copy what", 15, "tk", "fb") + T(95, 220, "works", 15, "tk", "fb")) +
    F("up", .4, R(190, 50, 150, 190, "pa", 16) + T(265, 80, "BIG OR STUCK", 11, "ta", "fm") +
      R(241, 142, 22, 22, "cA", 4) + R(267, 142, 22, 22, "cA", 4) + R(254, 116, 22, 22, "cA", 4) +
      T(265, 200, "First", 15, "ta", "fb") + T(265, 220, "principles", 15, "ta", "fb"))),
 ]) +
 chapter("Common mistake", [
  X("An assumption in disguise.",
    "The trap is treating a belief as a fact. “Customers won't pay more” or “I'm not a numbers person” sound certain, but they're assumptions. If you can't say how you know it, keep digging.",
    F("out", .9, R(70, 72, 220, 120, "pa", 16) + T(180, 144, "FACT", 34, "ta")) +
    F("flipin", 1.1, R(70, 72, 220, 120, "pi", 16) + T(180, 130, "ASSUMPTION", 28, "ti") + T(180, 160, "dressed up as a fact", 14, "tm", "fb")) +
    F("pop", 1.7, F("float", 0, C(300, 206, 24, "pa") + P("M317 223l18 18", "la fat") + T(300, 214, "?", 22, "ta")))),
 ])
)


# richer text under each First Principles drawing: lead (t), a fuller paragraph (more), key points (pts), example (ex).
# **double stars** mark words the player highlights.
FP_RICH = [
 dict(t="We usually solve problems **by analogy**: we look at how something is already done and do the same.",
      more="That's not a bad thing. Copying lets you cook dinner, drive to work and do your job without rethinking everything from zero. Your brain saves energy by reusing answers that worked before.",
      pts=["**Fast:** no need to think from scratch", "**Safe:** it worked for someone else", "**Limited:** you can only ever match the original"]),
 dict(t="Look inside the usual answer and you'll find **beliefs nobody has checked** in years.",
      more="Some were true once and aren't any more. Some were never true at all, just repeated until they sounded like facts. When you copy the answer, you copy every one of them without noticing.",
      pts=["“That's the rule”: whose rule, and is it still needed?", "“It's too expensive”: compared with what?", "“The experts say so”: based on what evidence?"],
      ex="Each block in the tower is a belief, not a fact, until you test it."),
 dict(t="First principles thinking breaks the answer into its pieces and **tests each one**.",
      more="For every piece, ask: is this actually true, or just believed? Can I prove it, measure it, or see it for myself? Anything that fails the test gets set aside, however familiar it feels.",
      pts=["**Fact:** you can show it's true", "**Assumption:** it's true because people say so", "**Habit:** it's true because it's always been done"]),
 dict(t="Now build a new answer using **only what's left**: the facts.",
      more="Because you're no longer copying, the new answer can look completely different from the old one. That's where breakthroughs come from: not from working harder on the usual answer, but from building a better one.",
      pts=["Start from the facts, not the old solution", "Ask what's possible, not what's normal", "Expect the result to look unfamiliar"]),
 dict(t="Aristotle described a first principle as **“the first basis from which a thing is known”**.",
      more="In other words, a truth you can't break down any further. Thinkers, scientists and engineers have leaned on the idea ever since: find the bedrock, then build everything else on top of it.",
      pts=["**Science:** start from what you can measure", "**Maths:** start from what you can prove", "**Your life:** start from what you know is true for you"]),
 dict(t="In a 2012 interview, Elon Musk said battery packs cost around **$600 per kilowatt-hour**.",
      more="That price made electric cars expensive, and most people treated it as a fixed fact of life. If batteries cost that much, the reasoning went, they always would.",
      pts=["**The usual answer:** batteries are expensive", "**The analogy:** they've always been expensive", "**The conclusion:** electric cars can't be cheap"]),
 dict(t="Instead of accepting the price, he asked: **what does a battery actually contain?**",
      more="Strip away the brand, the packaging and the factory, and a battery pack is a short list of raw materials: cobalt, nickel, aluminium, carbon, some polymers and a steel can.",
      ex="The first-principles question: what is this made of, and what do those parts cost?"),
 dict(t="He priced those materials on the metals market.",
      more="Bought as raw ingredients, they came to roughly **$80 per kilowatt-hour**. The materials were only a small fraction of what a finished pack cost."),
 dict(t="The high price wasn't about **what** batteries are made of. It was about **how** they were made.",
      more="And how something is made can be redesigned. Smarter ways of putting the same materials together could make batteries far cheaper. The problem moved from “impossible” to “an engineering challenge”.",
      pts=["**Old view:** batteries are expensive", "**New view:** making batteries is expensive", "Only the second one is something you can work on"]),
 dict(t="Pick something you're stuck on and **write it in one line**.",
      more="Then list every belief behind it, even the ones that feel too obvious to write down. The obvious ones are often the assumptions that have gone unchecked the longest.",
      pts=["Keep the problem short and specific", "Write each belief as a plain statement", "Aim for at least three"]),
 dict(t="Challenge each belief with one question: **how do I know this is true?**",
      more="Does getting fit really need a gym? No. Do you need a membership, or equipment? Not to start. Each belief turns out to be a **habit** (what people normally do), not a **fact** (what must be true)."),
 dict(t="Underneath the habits, **a few things are certain**.",
      more="Muscles grow when they work against resistance. Stamina grows with regular effort. And you have 30 minutes a day. None of these needs a gym, a fee or any equipment.",
      pts=["A fact is something you could prove to a sceptic", "Keep each one short", "If in doubt, it isn't a fact yet"]),
 dict(t="Build a new plan **using only those facts**.",
      more="Push-ups, squats and a run near home, 30 minutes a day. It costs nothing, because the goal was never “join a gym”. The goal was “get fit”, and the facts show many ways to get there."),
 dict(t="Keep asking until you reach something you can **measure or prove**.",
      more="Opinions sit on top, assumptions underneath, beliefs below that. Each good question digs down a layer, until you hit bedrock: a fact that stays true whoever you ask.",
      pts=["How do I know this is true?", "What's the evidence, and who says so?", "What would I do if I were starting from scratch?"]),
 dict(t="It's most powerful when **progress has stalled**.",
      more="Reach for it when the only reason given is “that's how it's always done”, or when a cost, a rule or a limit seems impossible to move. Those are signs you're standing on assumptions.",
      pts=["**Stuck:** more effort isn't working", "**Always done:** nobody remembers why", "**Fixed costs:** “it just costs that much”"]),
 dict(t="Thinking from scratch is **slow**.",
      more="For everyday choices, like what to cook or which route to take, copying what works is the smart move. Save first principles for the problems that really matter, or the ones you can't solve any other way.",
      pts=["**Small, everyday decision:** copy what works", "**Big, costly or stuck:** go back to first principles"]),
 dict(t="The trap is treating **a belief as a fact**.",
      more="“Customers won't pay more.” “I'm not a numbers person.” “We can't change suppliers.” They sound certain, but each one is an assumption until it's tested. If you can't say how you know it, keep digging.",
      ex="A quick test: could you prove it to someone who disagrees?"),
]
assert len(FP_RICH) == len(fp), (len(FP_RICH), len(fp))
for _slide, _r in zip(fp, FP_RICH):
    _slide.update(_r)

# ------------------------------------------------------------------ Dichotomy of control
RING = C(180, 142, 118, "li dash")
dc = [
 S("The idea", "Some things are up to you.",
   "A Stoic idea: separate what you control from what you don't, and put your energy into the first.",
   F("fade", 0, C(180, 142, 70, "glow")),
   F("pop", .1, C(180, 142, 118, "li dash fx-spin") ),
   F("pop", .5, C(180, 142, 54, "pa")),
   F("up", .9, T(180, 140, "YOU", 22, "ta") + T(180, 162, "in control", 12, "tm", "fb")),
   F("fade", 1.2, T(180, 14, "NOT IN YOUR CONTROL", 10, "ti", "fm")),
   *[F("pop", 1.3 + i * .12, F("float", i * .4, C(x, y, 6, "if"))) for i, (x, y) in enumerate([(72, 70), (300, 92), (64, 210), (292, 224), (120, 262)])]),
 S("Outside", "What you can't control.",
   "Other people's choices, the economy, the past, the weather, even the final result.",
   C(180, 142, 118, "li dash"), C(180, 142, 54, "pf"),
   *[F("pop", .2 + i * .18, F("float", i * .5, chip(x, y, s, "I", 13))) for i, (x, y, s) in enumerate(
       [(84, 52, "Other people"), (284, 68, "The economy"), (60, 150, "The past"), (304, 168, "Weather"), (120, 246, "Outcomes"), (262, 240, "Luck")])],
   T(180, 147, "?", 26, "tm")),
 S("Inside", "What you can control.",
   "Your effort, your choices, your attitude and how you respond. That's where your power is.",
   C(180, 142, 118, "li dash"),
   F("fade", 0, C(180, 142, 100, "glow")),
   F("pop", .1, C(180, 142, 96, "pa")),
   F("pop", .5, chip(180, 96, "Your effort", "A")), F("pop", .7, chip(180, 128, "Your choices", "A")),
   F("pop", .9, chip(180, 160, "Your attitude", "A")), F("pop", 1.1, chip(180, 192, "How you respond", "A"))),
 S("Energy", "Worry leaks energy.",
   "Energy spent on what you can't change is simply lost. Pull it back to what you can.",
   F("pop", 0, chip(70, 56, "Opinions", "i")), F("pop", .1, chip(290, 56, "Traffic", "i")), F("pop", .2, chip(70, 160, "The past", "i")), F("pop", .3, chip(290, 160, "Results", "i")),
   F("out", 1.6, P("M180 170L92 70M180 170L268 70M180 186L104 162M180 186L256 162", "li dash fx-march")),
   F("pop", 1.8, C(180, 196, 60, "glow")), F("pop", 2.0, C(180, 196, 58, "la fx-pulse")),
   F("up", .3, person(.9), (180, 238))),
 S("Example", "The job interview.",
   "You can't decide whether they hire you. You can prepare, answer well and handle the result.",
   F("left", 0, R(16, 40, 156, 200, "pi", 16) + T(94, 72, "NOT YOURS", 11, "ti", "fm")),
   F("right", .2, R(188, 40, 156, 200, "pa", 16) + T(266, 72, "YOURS", 11, "ta", "fm")),
   F("up", .6, T(94, 112, "Their decision", 14, "tk", "fb") + T(94, 146, "Other candidates", 14, "tk", "fb") + T(94, 180, "Their mood", 14, "tk", "fb")),
   F("pop", .9, check(214, 108, 9) + T(230, 113, "Preparation", 14, "tk", "fb", "start")),
   F("pop", 1.1, check(214, 142, 9) + T(230, 147, "Your answers", 14, "tk", "fb", "start")),
   F("pop", 1.3, check(214, 176, 9) + T(230, 181, "Follow-up", 14, "tk", "fb", "start")),
   F("pop", 1.5, check(214, 210, 9) + T(230, 215, "Your reaction", 14, "tk", "fb", "start"))),
 S("A useful twist", "Some things you can influence.",
   "Plenty sits in between. Do your part well, then let go of how it turns out.",
   D("M180 24a118 118 0 1 1 0 236a118 118 0 1 1 0-236", "li dash", 0),
   D("M180 62a80 80 0 1 1 0 160a80 80 0 1 1 0-160", "la dash", .5),
   F("pop", 1.0, C(180, 142, 40, "cA")),
   F("fade", 1.2, T(180, 147, "Control", 13, "tw", "fb")),
   F("fade", 1.4, T(180, 88, "Influence", 13, "ta", "fb")),
   F("fade", 1.6, T(180, 46, "Concern", 13, "ti", "fb"))),
 S("Common mistake", "Don't use it as an excuse.",
   "\"Out of my control\" can become a cop-out. Be honest about what you could actually change.",
   F("up", 0, person(1.0, "k", "mf"), (110, 244)),
   F("pop", .5, chip(110, 102, "Not my problem", "i", 15)),
   D("M50 102H170", "li fat", 1.1),
   arrow(184, 150, 220, 150, "lm", 1.3),
   F("pop", 1.6, chip(282, 150, "What's my part?", "A", 15))),
]

# ------------------------------------------------------------------ Compounding
AX = lambda d=0: D("M36 28V240H332", "lk", d)
cp = [
 S("The idea", "Small gains, huge results.",
   "When each gain builds on the last, growth stops being a straight line and starts to curve upward.",
   AX(0), F("fade", .3, T(330, 260, "TIME", 10, "tm", "fm", "end") + T(44, 24, "RESULTS", 10, "tm", "fm", "start")),
   D("M36 238C140 232 230 200 322 40", "la fat", .5),
   F("pop", 1.5, C(322, 40, 9, "af")), F("pop", 1.5, C(322, 40, 18, "glow fx-pulse"))),
 S("The maths", "1% a day adds up.",
   "Get 1% better every day for a year and you're about 38 times better. Get 1% worse and you're close to zero.",
   F("up", .1, R(20, 44, 152, 180, "pa", 18)), F("up", .3, R(188, 44, 152, 180, "pi", 18)),
   F("fade", .5, T(96, 96, "1.01", 30, "tk") + T(130, 76, "365", 13, "tm", "fb", "start")),
   F("fade", .7, T(264, 96, "0.99", 30, "tk") + T(298, 76, "365", 13, "tm", "fb", "start")),
   F("pop", 1.1, T(96, 168, "37.8", 44, "ta")), F("pop", 1.4, T(264, 168, "0.03", 44, "ti")),
   F("fade", 1.6, T(96, 200, "BETTER", 10, "ta", "fm") + T(264, 200, "WORSE", 10, "ti", "fm"))),
 S("A picture", "Like a snowball.",
   "Each roll picks up more snow, because the ball is already bigger than it was.",
   D("M20 70C120 110 230 180 344 236", "ll fat", 0),
   *[F("pop", .3 + i * .25, C(x, y, r, "pf" if i < 4 else "pa")) for i, (x, y, r) in
     enumerate([(48, 74 - 9, 7), (92, 90 - 12, 11), (148, 116 - 17, 16), (214, 150 - 24, 23), (290, 196 - 34, 34)])],
   F("pop", 1.7, C(290, 162, 46, "glow"))),
 S("Patience", "Slow, then sudden.",
   "For a long time, compounding looks worse than steady effort. Then it overtakes everything.",
   AX(0),
   D("M36 238L322 112", "lm", .3),
   D("M36 238C160 236 230 210 322 34", "la fat", .7),
   F("pop", 1.6, C(252, 146, 8, "if")), F("pop", 1.6, C(252, 146, 18, "glowi fx-pulse")),
   F("fade", 1.9, chip(176, 112, "overtakes here", "I", 12)),
   F("fade", .6, T(330, 148, "steady", 11, "tm", "fb", "end")), F("fade", 1.4, T(300, 30, "compound", 11, "ta", "fb", "end"))),
 S("Where it works", "It works on almost everything.",
   "Savings, skills, habits, reputation and relationships all compound over time.",
   F("fade", 0, C(180, 140, 54, "glow")),
   D("M150 160c18-2 34-12 60-50", "la fat", .2), F("pop", .9, C(210, 110, 6, "af")),
   *[F("pop", .6 + i * .15, chip(x, y, s, "a")) for i, (x, y, s) in
     enumerate([(80, 60, "Money"), (280, 60, "Skills"), (56, 150, "Habits"), (300, 150, "Reputation"), (180, 236, "Relationships")])]),
 S("Common mistake", "Most people quit too early.",
   "The flat start feels like nothing is happening. That's exactly where most people give up.",
   AX(0),
   D("M36 238C140 236 230 210 322 34", "la fat", .3),
   F("fade", .8, C(226, 86, 44, "glow") + T(226, 90, "most growth", 12, "ta", "fb")),
   F("up", 1.0, person(.6, "k", "mf"), (110, 234)),
   F("pop", 1.5, cross(110, 168, 12)), F("fade", 1.7, T(110, 146, "quits here", 12, "ti", "fb"))),
 S("Watch out", "It cuts both ways.",
   "Debt, bad habits and neglect compound too. Small negatives grow just as quietly.",
   AX(0),
   D("M36 238C140 234 230 206 322 46", "la fat", .3),
   D("M36 238C150 236 240 218 322 102", "li fat", .7),
   F("fade", 1.4, chip(200, 60, "good habits", "a", 12)), F("fade", 1.6, chip(132, 168, "debt, bad habits", "i", 12))),
]

# ------------------------------------------------------------------ Cognitive distortions
CLOUD = "M88 176c-34-2-40-52-4-58 2-40 56-48 78-16 22-26 74-18 76 18 36-2 46 52 6 56z"
cd = [
 S("The idea", "Thinking traps.",
   "Habitual patterns that bend how we read events, and make us feel worse than the facts justify.",
   F("fade", 0, C(180, 130, 90, "glowi")),
   F("pop", .1, P(CLOUD, "pf")),
   D("M126 140l20-20 20 30 20-30 20 20 20-26", "la fat", .6),
   F("pop", 1.1, C(108, 198, 8, "pf")), F("pop", 1.2, C(92, 222, 5, "pf")),
   F("up", 1.3, person(.7), (74, 270))),
 S("How it works", "Thoughts shape feelings.",
   "It's often our reading of an event, not the event itself, that drives how we feel and what we do.",
   F("pop", .1, R(20, 40, 140, 80, "pf", 14) + T(90, 70, "EVENT", 10, "ta", "fm") + T(90, 98, "No reply", 15, "tk", "fb")),
   F("pop", .5, R(200, 40, 140, 80, "pi", 14) + T(270, 70, "THOUGHT", 10, "ti", "fm") + T(270, 98, "“They hate me”", 15, "tk", "fb")),
   F("pop", .9, R(200, 172, 140, 80, "pf", 14) + T(270, 202, "FEELING", 10, "ta", "fm") + T(270, 230, "Anxious, hurt", 15, "tk", "fb")),
   F("pop", 1.3, R(20, 172, 140, 80, "pf", 14) + T(90, 202, "BEHAVIOUR", 10, "ta", "fm") + T(90, 230, "Withdraws", 15, "tk", "fb")),
   arrow(164, 80, 194, 80, "lm", .4, 7), arrow(270, 124, 270, 166, "lm", .8, 7), arrow(196, 212, 166, 212, "lm", 1.2, 7), arrow(90, 166, 90, 126, "lm", 1.6, 7)),
 S("Trap 1", "All-or-nothing thinking.",
   "\"If it isn't perfect, it's a failure.\" Real life happens in the shades in between.",
   '<defs><linearGradient id="cd-aon" x1="0" x2="1"><stop offset="0" stop-color="var(--loss)"/><stop offset="1" stop-color="var(--gain)"/></linearGradient></defs>',
   F("pop", .1, C(40, 140, 22, "if")), F("pop", .3, C(320, 140, 22, "af")),
   T(40, 190, "FAILURE", 10, "ti", "fm"), T(320, 190, "PERFECT", 10, "ta", "fm"),
   F("growx", .7, R(66, 130, 228, 20, "x", 10).replace('class="x"', 'fill="url(#cd-aon)"')),
   F("pop", 1.5, chip(180, 96, "most of real life", "m", 13)), D("M180 112v14", "lm", 1.7)),
 S("Trap 2", "Mind-reading.",
   "Assuming you know what others think, without evidence. A missing reply usually just means busy.",
   F("up", 0, R(36, 40, 120, 212, "pf", 20) + R(48, 62, 96, 168, "p2f", 8)),
   F("pop", .4, R(70, 86, 66, 34, "cA", 12) + T(103, 108, "Drinks Fri?", 11, "tw", "fb")),
   F("fade", .8, C(70, 142, 4, "mf fx-blink") + C(82, 142, 4, "mf fx-blink").replace('fx-blink"', 'fx-blink" style="--d:.2s"') + C(94, 142, 4, "mf fx-blink").replace('fx-blink"', 'fx-blink" style="--d:.4s"')),
   F("pop", 1.1, P("M196 128c-28-2-32-42 0-46 2-30 50-36 64-10 16-16 58-10 58 14 28 0 32 40 2 42z", "pi")),
   F("fade", 1.3, T(256, 102, "“They're annoyed", 13, "ti", "fb") + T(256, 120, "with me”", 13, "ti", "fb")),
   F("pop", 1.9, chip(256, 196, "or... they're busy", "A", 13))),
 S("Trap 3", "Catastrophising.",
   "Jumping from a small setback straight to the worst possible outcome.",
   P("M20 246H340", "ll"),
   F("pop", .1, P("M40 246l18-22 18 22z", "af")),
   F("growy", .5, P("M118 246L230 52l100 194z", "pi")),
   F("pop", .9, chip(70, 200, "One typo", "a", 12)), arrow(110, 196, 150, 160, "lm", 1.1, 7),
   F("pop", 1.3, chip(186, 144, "Fired", "i", 12)), arrow(206, 124, 222, 96, "lm", 1.5, 7),
   F("pop", 1.7, chip(232, 70, "Lose home", "I", 12))),
 S("Traps 4 and 5", "\"Shoulds\" and feelings as facts.",
   "Rigid rules for yourself, and treating a feeling as proof, both keep you stuck.",
   F("down", .1, P("M70 70h52l12 60H58z", "k") + P("M84 70a12 12 0 0 1 24 0", "lk") + T(96, 112, "SHOULD", 10, "tw", "fm").replace('class="fm tw"', 'class="fm" fill="var(--bg)"')),
   F("up", .4, person(.8, "k", "mf"), (96, 246)),
   F("fade", .7, P("M180 40v200", "ll")),
   F("pop", 1.0, T(270, 120, "Feeling", 26) + T(270, 186, "Fact", 26)),
   F("pop", 1.4, T(270, 158, "≠", 38, "ta"))),
 S("What to do", "Catch it, check it, change it.",
   "Notice the thought, name the trap, weigh the evidence for and against, then find a fairer view.",
   D("M70 140H290", "ll fat", 0),
   F("pop", .2, C(70, 140, 38, "pa") + C(64, 134, 13, "la") + P("M73 143l12 12", "la")),
   F("pop", .6, C(180, 140, 38, "pa") + P("M180 118v40M160 126h40M160 126l-8 16h16zM200 126l-8 16h16z", "la")),
   F("pop", 1.0, C(290, 140, 38, "cA") + P("M276 136a14 14 0 0 1 26-6M304 144a14 14 0 0 1-26 6", "lk") + P("M302 122v8h-8M278 158v-8h8", "lk")),
   F("fade", 1.3, T(70, 206, "CATCH", 11, "ta", "fm") + T(180, 206, "CHECK", 11, "ta", "fm") + T(290, 206, "CHANGE", 11, "ta", "fm"))),
 S("Keep in mind", "Not every worry is wrong.",
   "Some concerns are accurate. The aim is balanced thinking, not forced positivity.",
   P("M180 60V230M130 230h100", "lk"),
   F("tilt", .3, P("M70 76H290", "lk fat") + P("M70 76l-30 60h60zM290 76l-30 60h60z", "lk") +
     chip(70, 156, "Worry", "i", 13) + chip(290, 156, "Evidence", "a", 13)),
   F("pop", 0, C(180, 60, 8, "af"))),
]

STORIES = {"inversion": inversion, "first-principles": fp, "dichotomy-of-control": dc, "compounding": cp, "cognitive-distortions": cd}

if __name__ == "__main__":
    p = ROOT / "site" / "models.json"
    data = json.loads(p.read_text(encoding="utf8"))
    n = 0
    for m in data["models"]:
        if m["id"] in STORIES:
            m["story"] = STORIES[m["id"]]
            n += 1
    p.write_text(json.dumps(data, indent=1, ensure_ascii=False), encoding="utf8")
    print(f"wrote stories for {n} models ({sum(len(s) for s in STORIES.values())} slides)")
