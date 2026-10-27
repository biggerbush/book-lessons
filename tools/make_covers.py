"""Illustrated book covers for the library: one flat illustration per book on a warm cream ground, no text.

    python3 tools/make_covers.py            # covers for any book that has none yet (site/<dir>/cover.svg + cover.png, books.json fields)
    python3 tools/make_covers.py --all      # redraw every book's cover
    python3 tools/make_covers.py --sheet    # also writes a contact sheet to check them

The engine calls ensure() when a book is approved, so new books get a jacket automatically. A book with no hand-drawn
illustration in COVERS uses the art Claude designed for it (see engine/cover_art.py), else a generic one.

Covers are 400x320 (5:4). The play button is NOT part of the image: the site draws it on top, centred, so every
illustration keeps its centre fairly open or lets the button sit on a quiet shape.
"""
from __future__ import annotations

import json
import math
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"

CREAM, CREAM2 = "#F6F1E8", "#EFE7DA"
NAVY, SLATE, SLATE_L, MIST = "#1E3553", "#5B7BA6", "#9DB3CF", "#D7E0E9"
AMBER, AMBER_L, ORANGE, PEACH = "#EFA13A", "#F6CD86", "#E5813A", "#F1CBA4"
TEAL, TEAL_L, WHITE, GREY = "#4E8D8A", "#93C0BA", "#FFFFFF", "#C9CED6"

W, H = 400, 320


# ---------------------------------------------------------------- primitives
def svg(body: str) -> str:
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}">'
            f'<defs><radialGradient id="g" cx="50%" cy="38%" r="75%"><stop offset="0" stop-color="#FBF8F2"/>'
            f'<stop offset="1" stop-color="{CREAM2}"/></radialGradient></defs>'
            f'<rect width="{W}" height="{H}" fill="url(#g)"/>{body}</svg>')

def ln(d, c=NAVY, w=3.2, extra=""):
    return f'<path d="{d}" fill="none" stroke="{c}" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round"{extra}/>'

def fl(d, c, extra=""):
    return f'<path d="{d}" fill="{c}"{extra}/>'

def circ(x, y, r, c, extra=""):
    return f'<circle cx="{x}" cy="{y}" r="{r}" fill="{c}"{extra}/>'

def ring(x, y, r, c=NAVY, w=3.2, extra=""):
    return f'<circle cx="{x}" cy="{y}" r="{r}" fill="none" stroke="{c}" stroke-width="{w}"{extra}/>'

def rect(x, y, w, h, c, r=4, extra=""):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{c}"{extra}/>'

def ell(x, y, rx, ry, c, extra=""):
    return f'<ellipse cx="{x}" cy="{y}" rx="{rx}" ry="{ry}" fill="{c}"{extra}/>'

def g(body, tx=0, ty=0, s=1.0, rot=0, extra=""):
    t = f"translate({tx} {ty})" + (f" rotate({rot})" if rot else "") + (f" scale({s})" if s != 1 else "")
    return f'<g transform="{t}"{extra}>{body}</g>'

def sun(x, y, r=34, c=AMBER_L):
    return circ(x, y, r, c)

def cloud(x, y, s=1.0):
    return g(ell(0, 0, 26, 11, WHITE) + ell(-12, -6, 13, 11, WHITE) + ell(8, -9, 15, 13, WHITE), x, y, s)

def hill(d, c=MIST):
    return fl(d, c)

def ground(y=272, x1=40, x2=360, c=SLATE_L):
    return ln(f"M{x1} {y}H{x2}", c, 2.6)

def bust(c, s=1.0, x=0, y=0):
    """Front-facing head and shoulders standing on (x, y); about 150*s tall."""
    body = fl("M-48 0C-48-46-28-70 0-70S48-46 48 0Z", c) + circ(0, -98, 30, c)
    return g(body, x, y, s)

def bubble(x, y, w, h, c=WHITE, stroke=NAVY, dots=True, tail="left"):
    tx = x + 14 if tail == "left" else x + w - 30
    d = (f"M{x + 10} {y}h{w - 20}a10 10 0 0 1 10 10v{h - 20}a10 10 0 0 1-10 10"
         f"H{tx + 16}l-10 12v-12H{x + 10}a10 10 0 0 1-10-10v-{h - 20}a10 10 0 0 1 10-10z")
    out = f'<path d="{d}" fill="{c}" stroke="{stroke}" stroke-width="2.6" stroke-linejoin="round"/>'
    if dots:
        cy = y + h / 2
        out += "".join(circ(x + w / 2 + k * 11, cy, 3.2, stroke) for k in (-1, 0, 1))
    return out

def coin(x, y, r=14, c=AMBER):
    return circ(x, y, r, c) + ring(x, y, r - 5, "#FFFFFF", 1.6, ' opacity=".55"')

def coins(x, y, n, w=44, h=9, c=AMBER):
    out = ""
    for k in range(n):
        out += ell(x, y - k * h, w / 2, h / 1.6, "#D98E27") + ell(x, y - k * h - 3, w / 2, h / 1.6, c)
    return out

def star(x, y, r, c=AMBER):
    pts = []
    for k in range(10):
        a = -math.pi / 2 + k * math.pi / 5
        rr = r if k % 2 == 0 else r * .45
        pts.append(f"{x + rr * math.cos(a):.1f} {y + rr * math.sin(a):.1f}")
    return fl("M" + "L".join(pts) + "Z", c)

def leaf(x, y, l, ang, c=TEAL):
    return g(fl(f"M0 0C{l * .3} {-l * .35} {l * .75} {-l * .35} {l} 0C{l * .75} {l * .35} {l * .3} {l * .35} 0 0Z", c), x, y, 1, ang)

def rays(x, y, r1, r2, n=7, a0=-160, a1=-20, c=NAVY, w=3):
    out = ""
    for k in range(n):
        a = math.radians(a0 + (a1 - a0) * k / (n - 1))
        out += ln(f"M{x + r1 * math.cos(a):.1f} {y + r1 * math.sin(a):.1f}L{x + r2 * math.cos(a):.1f} {y + r2 * math.sin(a):.1f}", c, w)
    return out

def arrow(x1, y1, x2, y2, c=NAVY, w=3.2, head=11):
    a = math.atan2(y2 - y1, x2 - x1)
    h1 = (x2 - head * math.cos(a - .5), y2 - head * math.sin(a - .5))
    h2 = (x2 - head * math.cos(a + .5), y2 - head * math.sin(a + .5))
    return ln(f"M{x1} {y1}L{x2} {y2}M{h1[0]:.1f} {h1[1]:.1f}L{x2} {y2}L{h2[0]:.1f} {h2[1]:.1f}", c, w)

def mountains(base=290):
    return (hill(f"M0 {base}L70 210 120 250 170 200 250 {base}Z", MIST) +
            hill(f"M180 {base}L270 220 320 250 360 215 400 245V{base}Z", "#E2E8EE"))


# ---------------------------------------------------------------- covers
def atom():
    orb = "".join(g(ell(0, 0, 118, 42, "none", f' stroke="{SLATE}" stroke-width="2"'), 200, 162, 1, a) for a in (0, 60, 120))
    return svg(sun(200, 162, 58, AMBER_L) + circ(200, 162, 46, AMBER) + orb +
               "".join(circ(200 + 118 * math.cos(math.radians(t)) * math.cos(math.radians(a)) - 42 * math.sin(math.radians(t)) * math.sin(math.radians(a)),
                            162 + 118 * math.cos(math.radians(t)) * math.sin(math.radians(a)) + 42 * math.sin(math.radians(t)) * math.cos(math.radians(a)), 7, NAVY)
                       for a, t in ((0, 200), (60, 40), (120, 300), (0, 20))))

def money_tree():
    trunk = fl("M192 280C196 240 194 214 186 190L200 196 214 186C206 214 204 240 208 280Z", "#8A6A4A")
    crown = circ(200, 140, 70, TEAL_L) + circ(150, 160, 40, TEAL_L) + circ(250, 160, 40, TEAL_L) + circ(200, 120, 50, "#A9CCC6")
    cs = "".join(coin(x, y, 11) for x, y in ((150, 132), (252, 128), (176, 92), (228, 170), (160, 182), (232, 100), (268, 168)))
    return svg(ground(282) + trunk + crown + cs + coins(300, 274, 3, 34, 8) + coins(104, 274, 2, 34, 8))

def negotiation():
    table = rect(110, 230, 180, 10, NAVY, 3) + ln("M130 240v40M270 240v40", NAVY, 4)
    return svg(ground(282) + prof(SLATE, .82, 96, 262) + prof(PEACH, .82, 304, 262, True) +
               table + bubble(150, 60, 64, 44, WHITE, NAVY) + bubble(196, 106, 64, 44, AMBER_L, NAVY, True, "right"))

def profile_path(c):
    d = ("M-58 0C-60-40-44-62-18-70C-26-80-32-96-30-112C-28-140-6-158 20-156C44-154 58-136 56-112"
         "C62-104 66-98 62-94C58-92 56-90 57-86C58-80 54-76 50-76C48-70 44-66 34-66"
         "C36-60 40-58 50-54C66-46 70-24 70 0Z")
    return fl(d, c)

def prof(c, s, x, y, flip=False):
    inner = f'<g transform="scale(-1 1)">{profile_path(c)}</g>' if flip else profile_path(c)
    return g(inner, x, y, s)

def scoreboard():
    bars = "".join(rect(118 + k * 44, 250 - h, 30, h, c, 5) for k, (h, c) in enumerate(((60, SLATE_L), (92, SLATE), (128, TEAL), (166, AMBER))))
    return svg(ground(252) + bars + ring(300, 92, 34, NAVY, 3) + ring(300, 92, 20, NAVY, 3) + circ(300, 92, 8, ORANGE) + arrow(236, 140, 294, 96))

def chess_knight():
    knight = fl("M168 262h72v-14h-8c-2-26 4-44 16-62 8-12 6-30-6-42-12-10-28-16-46-14l-8-12-8 16c-14 8-22 22-24 38l-10 18c-2 6 2 12 8 12 8 0 14-4 20-10 6 4 12 6 18 4-12 18-22 36-24 52h-8z", NAVY)
    return svg(sun(282, 100, 40, AMBER_L) + mountains(280) + ground(276) + rect(156, 262, 96, 14, NAVY, 4) + knight +
               ln("M262 220C292 214 312 196 318 168", ORANGE, 3, ' stroke-dasharray="7 8"') + arrow(312, 180, 318, 166, ORANGE))

def friends():
    return svg(ground(276) + bust(SLATE, .9, 146, 276) + bust(PEACH, .9, 254, 276) +
               bubble(166, 48, 70, 46, WHITE, NAVY, False) +
               fl("M201 81c-10-7-16-12-16-19 0-5 4-9 9-9 3 0 5 2 7 4 2-2 4-4 7-4 5 0 9 4 9 9 0 7-6 12-16 19z", ORANGE))

def seven_steps():
    st = "".join(rect(72 + k * 38, 262 - k * 24, 40, 18 + k * 24, (SLATE_L, SLATE_L, SLATE, SLATE, TEAL, TEAL, AMBER)[k], 3) for k in range(7))
    return svg(sun(312, 82, 38, AMBER_L) + cloud(110, 80, 1.1) + ground(280) + st + ln("M333 118V70l22 8-22 8", NAVY, 3))

def golden_key():
    key = (ring(150, 160, 40, AMBER, 16) + rect(186, 152, 140, 16, AMBER, 6) + rect(290, 166, 14, 26, AMBER, 3) + rect(312, 166, 12, 18, AMBER, 3))
    return svg(sun(150, 160, 70, "#F8E3BC") + key + coins(310, 276, 3, 40, 8) + coins(92, 276, 2, 40, 8) + ground(278, 40, 360, "#E3D7C4"))

def desk_lamp():
    lamp = (fl("M120 274h70l-8-12h-54z", NAVY) + ln("M150 262L118 160 200 96", NAVY, 4) + circ(118, 160, 6, NAVY) + circ(150, 262, 5, NAVY) +
            fl("M188 82l40 16-14 26-38-22z", NAVY))
    beam = fl("M210 118L330 270H232L196 110Z", AMBER_L, ' opacity=".55"')
    books = (rect(256, 246, 82, 16, SLATE, 3) + rect(262, 230, 74, 16, WHITE, 3) + ln("M262 230h74v16h-74z", NAVY, 2) +
             rect(258, 214, 76, 16, AMBER, 3))
    return svg(beam + ground(276) + lamp + books)

def paper_plane():
    loop = ln("M80 230C120 130 220 260 250 170S220 70 170 110 230 190 300 120", SLATE, 2.6, ' stroke-dasharray="7 8"')
    plane = fl("M290 96l66-18-34 60-12-18z", NAVY) + fl("M310 120l12 18 4-28z", SLATE) + fl("M290 96l20 24 46-42z", SLATE_L)
    return svg(cloud(100, 90, 1.2) + cloud(320, 230, .9) + loop + plane + circ(80, 230, 7, AMBER))

def rocket():
    body = (fl("M200 60c26 22 38 58 34 104h-68c-4-46 8-82 34-104z", WHITE, f' stroke="{NAVY}" stroke-width="3"') + circ(200, 118, 13, SLATE) +
            fl("M166 164l-22 30 26-6z", ORANGE) + fl("M234 164l22 30-26-6z", ORANGE) + fl("M184 164h32l-4 14h-24z", NAVY))
    flame = fl("M188 180c4 26 12 40 12 56 0-16 8-30 12-56z", AMBER)
    return svg(hill("M0 300C80 250 160 270 200 262S330 240 400 270V320H0Z", MIST) + star(92, 80, 9, AMBER_L) + star(318, 70, 7, AMBER_L) +
               star(300, 150, 5, SLATE_L) + flame + body + cloud(150, 240, 1.1) + cloud(256, 236, 1.2))

def flywheel():
    spokes = "".join(ln(f"M200 166L{200 + 76 * math.cos(math.radians(a)):.1f} {166 + 76 * math.sin(math.radians(a)):.1f}", NAVY, 4) for a in range(0, 360, 45))
    return svg(ring(200, 166, 80, NAVY, 10) + ring(200, 166, 80, AMBER, 4) + spokes + circ(200, 166, 16, NAVY) +
               ln("M318 120A124 124 0 0 1 318 214", ORANGE, 3) + arrow(322, 196, 316, 218, ORANGE) +
               ln("M82 214A124 124 0 0 1 82 120", SLATE_L, 3) + rect(150, 262, 100, 12, SLATE_L, 4))

def snowball():
    slope = hill("M0 110L400 300V320H0Z", MIST)
    trail = "".join(circ(40 + k * 46, 128 + k * 21.5, 5 + k * 3.2, WHITE, f' stroke="{SLATE_L}" stroke-width="2"') for k in range(5))
    return svg(sun(330, 70, 30, AMBER_L) + slope + trail + circ(300, 214, 46, WHITE, f' stroke="{SLATE}" stroke-width="3"') +
               "")

def sprout():
    return svg(sun(270, 92, 40, AMBER_L) + hill("M220 280C270 230 330 230 390 280Z", MIST) + ln("M60 280H340", NAVY, 3) +
               ln("M200 280C200 230 196 190 186 150", NAVY, 3) + leaf(188, 162, 90, -150, TEAL) + leaf(194, 196, 80, -30, TEAL))

def winding_road():
    road = ("M70 320C150 290 120 250 210 238S330 210 260 180 230 150 300 128")
    return svg(sun(250, 80, 34, AMBER_L) + hill("M0 240C90 180 180 170 260 140S360 120 400 130V320H0Z", MIST) +
               ln(road, WHITE, 26) + ln(road, NAVY, 2.4) + ln("M300 128V86l22 8-22 8", NAVY, 3) + fl("M302 86l20 8-20 8z", AMBER))

def one_arrow():
    faint = "".join(arrow(200, 230, 200 + 120 * math.cos(math.radians(a)), 230 + 120 * math.sin(math.radians(a)), GREY, 2.6, 9)
                    for a in (-170, -150, -130, -50, -30, -10))
    return svg(faint + arrow(200, 236, 200, 70, AMBER, 6, 18) + circ(200, 236, 10, NAVY) + ground(276, 120, 280))

def head_brain(extra=""):
    head = ln("M150 290C150 260 140 250 132 238 118 222 116 200 120 186L108 168 122 160C124 120 160 82 214 82 268 82 300 124 296 176 294 210 270 236 262 290", NAVY, 3)
    brain = fl("M168 150c-8-24 14-40 30-32 6-16 32-18 40-2 18-6 36 8 30 26 14 8 12 30-4 34-2 16-22 22-34 14-10 12-34 12-40-2-18 2-30-16-22-38z", PEACH,
               f' stroke="{AMBER}" stroke-width="2"')
    return svg(rays(214, 150, 92, 118, 7, -165, -15) + head + brain + extra)

def magnet():
    mag = (ln("M150 90v60a50 50 0 0 0 100 0V90", ORANGE, 30) + rect(135, 72, 30, 28, NAVY, 3) + rect(235, 72, 30, 28, NAVY, 3))
    figs = "".join(bust(c, .32, x, y) for c, x, y in ((SLATE, 120, 280), (TEAL, 170, 288), (PEACH, 230, 288), (SLATE_L, 282, 280)))
    return svg(mag + rays(200, 214, 46, 62, 5, -150, -30, AMBER, 3) + ground(290) + figs)

def golden_circle():
    return svg(circ(200, 162, 112, MIST) + circ(200, 162, 76, SLATE_L) + circ(200, 162, 40, AMBER) +
               ring(200, 162, 112, NAVY, 2.4) + ring(200, 162, 76, NAVY, 2.4) + ring(200, 162, 40, NAVY, 2.4))

def rock_sprout():
    rock = fl("M70 286C76 230 112 196 162 190 182 168 236 164 262 190 314 198 342 238 340 286Z", SLATE_L) + ln("M204 186L196 214 210 236 200 286", NAVY, 3)
    return svg(sun(300, 80, 30, AMBER_L) + rock + ln("M201 238C200 210 204 186 214 160", TEAL, 3) + leaf(214, 166, 46, -140, TEAL) + leaf(212, 182, 40, -30, TEAL) + ground(288))

def seesaw():
    return svg(ln("M70 264H330", SLATE_L, 2.6) + fl("M188 264l12-34 12 34z", NAVY) +
               ln("M84 222L320 160", NAVY, 4) + circ(126, 192, 30, ORANGE) + rect(268, 120, 44, 44, SLATE, 4) +
               cloud(110, 90, .9) + sun(320, 70, 22, AMBER_L))

def house_coins():
    house = fl("M120 270V180l70-56 70 56v90z", WHITE, f' stroke="{NAVY}" stroke-width="3"') + rect(176, 220, 28, 50, SLATE, 3) + rect(140, 196, 24, 22, MIST) + rect(216, 196, 24, 22, MIST)
    roof = ln("M108 188L190 120 272 188", NAVY, 5)
    return svg(sun(310, 80, 30, AMBER_L) + ground(272) + house + roof + coins(304, 266, 6, 46, 9) + coins(84, 266, 2, 40, 8))

def habit_loop():
    nodes = ((200, 92, ORANGE), (290, 212, AMBER), (110, 212, TEAL))
    loop = (ln("M222 98A100 100 0 0 1 290 186", NAVY, 3) + ln("M266 222A100 100 0 0 1 134 222", NAVY, 3) + ln("M110 186A100 100 0 0 1 178 98", NAVY, 3) +
            arrow(282, 172, 290, 188) + arrow(150, 228, 132, 222) + arrow(166, 104, 180, 96))
    bell = ""
    return svg(loop + "".join(circ(x, y, 28, c) for x, y, c in nodes) + bell)

def shield():
    sh = fl("M200 60l92 30v62c0 64-42 104-92 124-50-20-92-60-92-124V90z", SLATE) + fl("M200 60l92 30v62c0 64-42 104-92 124z", NAVY)
    chev = ln("M156 166l44 30 44-30M156 138l44 30 44-30", AMBER, 8)
    return svg(sh + chev + rect(70, 286, 260, 4, SLATE_L, 2))

def crown():
    cr = fl("M118 206L104 112l52 40 44-66 44 66 52-40-14 94z", AMBER) + rect(116, 210, 168, 22, "#D98E27", 6)
    jewels = circ(200, 220, 7, NAVY) + circ(152, 220, 5, NAVY) + circ(248, 220, 5, NAVY) + circ(104, 108, 8, AMBER) + circ(296, 108, 8, AMBER) + circ(200, 82, 9, AMBER)
    return svg(rays(200, 160, 120, 140, 9, -170, -10, AMBER_L, 3) + cr + jewels + ell(200, 258, 110, 10, MIST))

def ten_x():
    bars = "".join(rect(96 + k * 40, 262 - h, 26, h, SLATE_L, 4) for k, h in enumerate((24, 36, 30)))
    big = rect(232, 70, 44, 192, AMBER, 6) + arrow(254, 66, 254, 40, ORANGE, 5, 14)
    return svg(ground(264) + bars + big + rays(254, 60, 34, 48, 5, -160, -20, ORANGE, 3))

def mind_sprout():
    return svg(sun(310, 76, 26, AMBER_L) + prof(SLATE_L, 1.05, 186, 300) + ln("M207 140C207 116 206 98 214 76", NAVY, 3) +
               leaf(214, 92, 64, -150, TEAL) + leaf(209, 116, 56, -30, TEAL) + ground(300, 60, 340))

def gift():
    box = rect(124, 150, 152, 118, ORANGE, 6) + rect(114, 124, 172, 34, "#F09A57", 6) + rect(190, 124, 20, 144, AMBER_L)
    bow = fl("M200 124c-24-30-58-24-50-4 6 14 30 8 50 4zM200 124c24-30 58-24 50-4-6 14-30 8-50 4z", AMBER, f' stroke="{NAVY}" stroke-width="2.4"')
    return svg(rays(200, 196, 118, 138, 9, -175, -5, AMBER_L, 3) + box + bow + ell(200, 278, 120, 9, MIST))

def megaphone():
    mp = fl("M126 156l120-56v136l-120-56z", ORANGE) + rect(96, 150, 34, 40, NAVY, 6) + ln("M120 190l14 46", NAVY, 6)
    waves = "".join(ln(f"M{268 + k * 22} {130 - k * 12}C{284 + k * 26} {152} {284 + k * 26} {188} {268 + k * 22} {210 + k * 12}", c, 3.4)
                    for k, c in enumerate((AMBER, SLATE, SLATE_L)))
    return svg(mp + waves + ground(272, 60, 340))

def iceberg():
    sea = rect(0, 150, 400, 170, "#DCE6EF", 0) + ln("M30 150H370", SLATE, 2.4)
    top = fl("M168 150l18-46 18 16 16-34 24 64z", WHITE, f' stroke="{NAVY}" stroke-width="2.6"')
    under = fl("M150 150h112c30 40 30 90 6 128-36 26-92 26-126 0-26-40-24-90 8-128z", SLATE_L) + fl("M150 150h112c30 40 30 90 6 128-20 14-40 20-62 20z", SLATE, ' opacity=".55"')
    return svg(sun(310, 70, 28, AMBER_L) + sea + under + top + cloud(92, 80, 1.0))

def glove():
    gl = (fl("M150 108c0-26 22-40 52-40h40c30 0 50 22 50 52v48c0 22-14 36-34 40v40h-96v-46c-8-6-12-16-12-28z", ORANGE) +
          fl("M150 160c-20 0-34-14-34-30s12-26 28-26h12", ORANGE) + rect(160, 236, 100, 32, NAVY, 6) + ln("M200 108c18 0 34 8 40 24", "#F3A66A", 4))
    return svg(rays(296, 120, 58, 78, 5, -60, 60, AMBER, 3) + gl + ell(210, 282, 100, 8, MIST))

def stand_out():
    grid = "".join(circ(96 + c * 52, 98 + r * 50, 14, GREY) for r in range(4) for c in range(5) if (r, c) != (1, 3))
    return svg(grid + circ(252, 148, 30, "#F8E3BC") + circ(252, 148, 18, ORANGE))

def hourglass():
    hg = (rect(140, 70, 120, 14, NAVY, 4) + rect(140, 240, 120, 14, NAVY, 4) +
          ln("M154 84C154 130 196 146 196 162 196 178 154 194 154 240M246 84C246 130 204 146 204 162 204 178 246 194 246 240", NAVY, 3) +
          fl("M168 106h64c-6 22-24 36-32 44-8-8-26-22-32-44z", AMBER_L) + fl("M164 238c6-26 22-40 36-46 14 6 30 20 36 46z", AMBER) + ln("M200 160v70", AMBER, 2, ' stroke-dasharray="3 6"'))
    return svg(sun(200, 162, 104, "#F3E9D6") + hg)

def two_bubbles():
    link = ln("M150 170C180 200 220 200 250 170", AMBER, 3, ' stroke-dasharray="6 7"')
    return svg(bust(SLATE, .78, 112, 282) + bust(TEAL, .78, 288, 282) + bubble(64, 70, 96, 58, WHITE, NAVY) + bubble(240, 92, 96, 58, AMBER_L, NAVY, True, "right") + link)

def pencil():
    squiggle = ln("M70 240C110 180 140 270 180 210S212 180 223 165", AMBER, 5)
    pen = g(rect(-14, -110, 28, 110, SLATE, 3) + fl("M-14 0h28l-14 30z", PEACH) + fl("M-5 21h10l-5 9z", NAVY) + rect(-14, -126, 28, 18, ORANGE, 3), 240, 140, 1, 35)
    return svg(squiggle + pen + ground(280, 60, 340))

def spotlight():
    beam = fl("M180 40h40l90 230H90z", AMBER_L, ' opacity=".6"')
    lamp = rect(176, 30, 48, 18, NAVY, 4)
    figs = bust(SLATE, .36, 168, 272) + bust(TEAL, .4, 204, 274) + bust(ORANGE, .36, 240, 272)
    other = "".join(bust(GREY, .32, x, 276) for x in (60, 100, 300, 342))
    return svg(beam + lamp + ell(200, 274, 110, 10, "#EAD9B8") + figs + other)

def bulb_refresh():
    bulb = (fl("M200 70c-38 0-62 28-62 60 0 24 14 38 24 50 6 8 8 16 8 26h60c0-10 2-18 8-26 10-12 24-26 24-50 0-32-24-60-62-60z", AMBER_L, f' stroke="{NAVY}" stroke-width="3"') +
            rect(172, 210, 56, 12, NAVY, 3) + rect(178, 226, 44, 10, SLATE, 3) + ln("M186 172l14-30 14 30", ORANGE, 3))
    ref = ln("M296 150A96 96 0 0 1 120 214", SLATE, 3) + arrow(140, 230, 118, 214, SLATE) + ln("M104 150A96 96 0 0 1 280 86", SLATE_L, 3) + arrow(262, 72, 282, 88, SLATE_L)
    return svg(ref + bulb)

def hand_birds():
    hand = fl("M110 286c0-40 6-64 22-80l6-34c2-10 16-10 18 0l2 24 4-46c2-12 18-12 20 0l2 44 4-52c2-12 18-12 20 0l2 50 6-40c2-12 18-10 18 2l-4 64c-4 30-20 50-40 60v8z", PEACH)
    bird = lambda x, y, s, c: g(ln("M-14 0C-8-8-2-8 0 0 2-8 8-8 14 0", c, 3), x, y, s)
    return svg(sun(300, 84, 34, AMBER_L) + hand + bird(232, 116, 1.4, NAVY) + bird(270, 150, 1.0, SLATE) + bird(300, 120, 1.2, NAVY) + bird(330, 170, .8, SLATE))

def funnel():
    f = fl("M100 90h200l-74 90v70l-52 20v-90z", SLATE_L) + ln("M100 90h200l-74 90v70l-52 20v-90z", NAVY, 3)
    drops = "".join(circ(x, y, 8, c) for x, y, c in ((130, 60, TEAL), (170, 46, ORANGE), (214, 62, SLATE), (256, 44, AMBER), (284, 66, TEAL)))
    return svg(drops + f + circ(200, 292, 12, AMBER))

def branches():
    trunk = ln("M200 290V190", NAVY, 6)
    br = (ln("M200 230L130 170 100 120M130 170L150 110M200 200L268 150 300 100M268 150L250 96M200 190L200 100", NAVY, 4))
    tips = "".join(circ(x, y, 14, c) for x, y, c in ((100, 112, TEAL), (150, 100, AMBER), (300, 92, ORANGE), (250, 88, SLATE), (200, 88, AMBER_L)))
    return svg(trunk + br + tips + ground(292))

def runner():
    rain = "".join(ln(f"M{x} {y}l-8 18", SLATE_L, 2) for x, y in ((60, 40), (110, 70), (160, 30), (230, 60), (300, 40), (350, 80), (80, 120), (330, 140), (260, 110)))
    hillp = hill("M0 300C120 280 200 200 400 150V320H0Z", MIST)
    body = (circ(226, 120, 14, NAVY) + ln("M222 136L208 190M208 190L234 220 226 252M208 190L186 214 160 216M218 146L246 168 262 152M218 146L192 160 180 180", NAVY, 8))
    return svg(rain + hillp + body)

def door_light():
    floor_light = fl("M164 270h72l80 40H84z", AMBER_L, ' opacity=".7"')
    door = rect(150, 80, 100, 190, AMBER_L) + fl("M150 80l-36 18v190l36-18z", NAVY) + ln("M150 80h100v190H150z", NAVY, 3)
    fig = bust(NAVY, .52, 200, 270)
    return svg(ground(270, 40, 360) + floor_light + door + fig)

def venn():
    cs = "".join(circ(x, y, 70, c, ' opacity=".55"') for x, y, c in ((160, 130, TEAL_L), (240, 130, PEACH), (160, 200, SLATE_L), (240, 200, AMBER_L)))
    rings = "".join(ring(x, y, 70, NAVY, 2) for x, y in ((160, 130), (240, 130), (160, 200), (240, 200)))
    return svg(cs + rings + circ(200, 165, 14, AMBER))

def gauge():
    arc = ln("M96 230A110 110 0 0 1 304 230", MIST, 22) + ln("M96 230A110 110 0 0 1 150 140", TEAL_L, 22) + ln("M250 140A110 110 0 0 1 304 230", AMBER, 22)
    needle = ln("M200 230L262 158", NAVY, 5) + circ(200, 230, 12, NAVY)
    ticks = "".join(ln(f"M{200 + 82 * math.cos(math.radians(a)):.1f} {230 + 82 * math.sin(math.radians(a)):.1f}L{200 + 94 * math.cos(math.radians(a)):.1f} {230 + 94 * math.sin(math.radians(a)):.1f}", NAVY, 2.4) for a in range(-180, 1, 30))
    return svg(arc + ticks + needle + rect(130, 262, 140, 12, SLATE_L, 4))

def sailboat():
    sea = fl("M0 236C60 226 120 246 200 236S340 226 400 236V320H0Z", "#DCE6EF") + ln("M40 256C80 250 110 262 150 256M240 270C280 264 310 276 350 270", SLATE_L, 2.4)
    boat = fl("M130 228h150l-26 30h-98z", NAVY) + fl("M206 70v150h-72z", WHITE, f' stroke="{NAVY}" stroke-width="3"') + fl("M214 96v124h56z", AMBER) + ln("M206 66v162", NAVY, 3)
    return svg(sun(310, 90, 34, AMBER_L) + cloud(100, 80, 1.0) + sea + boat)

def balloons():
    def b(x, y, c, s=1.0):
        return g(ell(0, 0, 22, 27, c) + fl("M-4 26h8l-4 6z", c) + ln("M0 32C6 50-6 64 0 84", NAVY, 1.6), x, y, s)
    return svg(b(110, 70, GREY, .7) + b(160, 50, GREY, .6) + b(270, 60, GREY, .65) + b(320, 90, GREY, .55) +
               b(200, 140, ORANGE, 1.25) + ground(270) + circ(200, 248, 4, NAVY))

def weeks_grid():
    cells = ""
    for r in range(8):
        for c in range(13):
            k = r * 13 + c
            col = NAVY if k < 38 else (AMBER if k == 38 else MIST)
            cells += rect(66 + c * 21, 70 + r * 23, 16, 16, col, 3)
    return svg(cells)

def quadrant():
    q = (rect(104, 64, 94, 94, MIST, 6) + rect(202, 64, 94, 94, AMBER, 6) + rect(104, 162, 94, 94, MIST, 6) + rect(202, 162, 94, 94, SLATE_L, 6))
    axes = arrow(100, 262, 100, 52) + arrow(100, 262, 310, 262)
    heart = fl("M249 132c-12-8-20-14-20-23 0-6 5-11 11-11 4 0 7 2 9 5 2-3 5-5 9-5 6 0 11 5 11 11 0 9-8 15-20 23z", WHITE)
    return svg(q + axes + heart)

def dominoes():
    ds = ""
    for k, (h, c) in enumerate(((30, SLATE_L), (46, SLATE_L), (66, SLATE), (92, TEAL), (126, AMBER))):
        x = 74 + k * 58
        ds += g(rect(-h * .22, -h, h * .44, h, c, 4) + circ(0, -h * .72, h * .06 + 2, WHITE) + circ(0, -h * .32, h * .06 + 2, WHITE), x, 270, 1, -18 if k == 0 else 0)
    return svg(ground(272) + ds)

def figure_mountain():
    mt = fl("M60 290L200 70 340 290Z", SLATE) + fl("M200 70L340 290H230Z", NAVY) + fl("M200 70l-26 42 14-6 12 12 10-12 16 6z", WHITE)
    return svg(sun(310, 80, 26, AMBER_L) + mt + ground(292, 20, 380) + bust(ORANGE, .3, 200, 292))

def mountain_flag():
    mt = fl("M110 290L222 112 330 290Z", SLATE) + fl("M222 112L330 290H250Z", NAVY) + fl("M110 290L160 214 200 290Z", SLATE_L)
    flag = ln("M222 112V66", NAVY, 3) + fl("M224 66l30 12-30 12z", AMBER)
    return svg(sun(282, 120, 40, AMBER_L) + cloud(96, 120, 1.0) + cloud(330, 210, .9) + mt + flag + ground(292, 40, 360))

def four_people():
    return svg(prof(SLATE, .9, 116, 290) + prof(PEACH, .86, 182, 290) + prof(ORANGE, .95, 246, 290, True) + prof(TEAL, .86, 306, 290, True) +
               bubble(70, 40, 64, 40, WHITE, TEAL) + bubble(170, 28, 64, 40, WHITE, ORANGE) + bubble(270, 50, 64, 40, WHITE, TEAL, True, "right"))

def ego_balloon():
    string = ln("M262 214C240 240 190 244 150 226", NAVY, 1.8)
    ego = circ(262, 140, 76, PEACH) + ell(240, 112, 22, 14, WHITE, ' opacity=".5"') + ln("M286 78l-8 20 14 10-10 18", ORANGE, 2.6)
    pin = ln("M348 52L304 96", NAVY, 3.6) + circ(352, 48, 8, AMBER)
    return svg(ground(284) + string + ego + pin + bust(TEAL, .8, 112, 284))

def investor_chart():
    bars = "".join(rect(64 + k * 54, 280 - h, 36, h, SLATE_L if k % 2 else MIST, 4) for k, h in enumerate((60, 96, 76, 130, 168)))
    line = ln("M70 232C100 200 118 230 150 188S214 214 250 150S300 120 330 96", NAVY, 3.2)
    lens = circ(284, 128, 50, WHITE, ' opacity=".55"') + ring(284, 128, 50, NAVY, 5) + ln("M320 164L356 202", NAVY, 9) + coin(284, 128, 26)
    return svg(ground(282) + bars + line + lens)

def obstacle_steps():
    steps = rect(60, 238, 96, 44, SLATE_L, 4) + rect(156, 196, 96, 86, SLATE, 4) + rect(252, 154, 96, 128, NAVY, 4)
    rock = ell(104, 222, 34, 26, GREY) + ell(94, 212, 12, 7, WHITE, ' opacity=".6"') + ln("M112 226l8-10", SLATE, 2)
    path = ln("M64 200C110 120 210 100 300 118", AMBER, 3.4, ' stroke-dasharray="7 8"') + arrow(280, 112, 316, 124, AMBER, 3.4, 11)
    flag = ln("M318 154V102", NAVY, 3) + fl("M320 102l30 12-30 12z", AMBER)
    return svg(sun(318, 66, 34, AMBER_L) + steps + rock + path + flag + ground(282))

def now_lotus():
    water = "".join(ell(200, 262, rx, ry, "none", f' stroke="{SLATE_L}" stroke-width="2.4"') for rx, ry in ((70, 14), (116, 24), (162, 34)))
    petals = "".join(leaf(200, 250, l, a, c) for l, a, c in ((92, -150, TEAL_L), (92, -30, TEAL_L), (100, -125, PEACH), (100, -55, PEACH), (108, -90, ORANGE)))
    return svg(sun(200, 160, 70, AMBER_L) + hill("M0 270H400V320H0Z", "#E2E8EE") + water + petals + circ(200, 252, 6, AMBER))

def ziggurat():
    tiers = (rect(96, 232, 208, 46, PEACH, 4) + rect(128, 192, 144, 40, "#EBC48E", 4) + rect(160, 154, 80, 38, PEACH, 4) + rect(184, 122, 32, 32, AMBER_L, 4) +
             "".join(ln(f"M{x} 232V278M{x + 6} 192V232", "#D9B98C", 2) for x in (130, 270)))
    return svg(sun(318, 82, 36, AMBER_L) + cloud(78, 96, .9) + tiers + coins(66, 280, 4, 40, 9) + coins(338, 280, 3, 40, 9) + ground(280))


# book id -> cover drawing
COVERS = {
    "atomic-habits": atom, "rich-dad-poor-dad": money_tree, "never-split-the-difference": two_bubbles,
    "4-disciplines-of-execution": scoreboard, "your-next-move": chess_knight, "how-to-win-friends-and-influence-people": friends,
    "the-7-habits-of-highly-effective-people": seven_steps, "think-and-grow-rich": golden_key, "deep-work": desk_lamp,
    "the-lean-startup": paper_plane, "zero-to-one": rocket, "good-to-great": flywheel, "the-compound-effect": snowball,
    "man-s-search-for-meaning": sprout, "thinking-fast-and-slow": winding_road, "essentialism": one_arrow,
    "the-psychology-of-money": lambda: head_brain(coin(296, 250, 18)), "influence-the-psychology-of-persuasion": magnet,
    "start-with-why": golden_circle, "grit": rock_sprout, "the-4-hour-workweek": seesaw, "the-millionaire-next-door": house_coins,
    "the-power-of-habit": habit_loop, "extreme-ownership": shield, "the-48-laws-of-power": crown, "10x-rule": ten_x,
    "mindset": mind_sprout, "100m-offers": gift, "crush-it": megaphone, "hidden-potential": iceberg,
    "jab-jab-jab-right-hook": glove, "purple-cow": stand_out, "same-as-ever": hourglass, "supercommunicators": lambda: svg(
        bust(SLATE, .78, 112, 282) + bust(TEAL, .78, 288, 282) + bubble(64, 70, 96, 58, WHITE, NAVY) +
        bubble(240, 92, 96, 58, AMBER_L, NAVY, True, "right") + ln("M150 170C180 200 220 200 250 170", AMBER, 3, ' stroke-dasharray="6 7"')),
    "the-practice": pencil, "this-is-marketing": spotlight, "think-again": bulb_refresh, "the-let-them-theory": hand_birds,
    "100m-leads": funnel, "range": branches, "can-t-hurt-me": runner, "dare-to-lead": door_light, "ikigai": venn,
    "measure-what-matters": gauge, "the-almanack-of-naval-ravikant": sailboat, "the-subtle-art-of-not-giving-a-f-ck": balloons,
    "four-thousand-weeks": weeks_grid, "radical-candor": quadrant, "tiny-habits": dominoes, "the-mountain-is-you": figure_mountain,
    "awaken-the-giant-within": mountain_flag, "surrounded-by-idiots": four_people,
    "ego-is-the-enemy": ego_balloon, "the-intelligent-investor": investor_chart, "the-obstacle-is-the-way": obstacle_steps,
    "the-power-of-now": now_lotus, "the-richest-man-in-babylon": ziggurat,
}
COVERS["never-split-the-difference"] = negotiation



# ---------------------------------------------------------------- books without a hand-drawn cover
def open_book():
    pages = fl("M200 120C160 96 110 98 76 112V242C110 228 160 230 200 254Z", WHITE, f' stroke="{NAVY}" stroke-width="3" stroke-linejoin="round"') + \
            fl("M200 120C240 96 290 98 324 112V242C290 228 240 230 200 254Z", "#FBF8F2", f' stroke="{NAVY}" stroke-width="3" stroke-linejoin="round"')
    lines = "".join(ln(f"M{96} {140 + k * 18}C130 {132 + k * 18} 160 {138 + k * 18} 184 {152 + k * 18}", SLATE_L, 2.4) for k in range(3))
    return svg(sun(200, 90, 40, AMBER_L) + pages + lines + star(268, 70, 12) + star(132, 60, 8, ORANGE) + ground(268, 60, 340))

def book_stack():
    stack = (rect(110, 236, 180, 36, SLATE, 5) + rect(126, 198, 156, 36, TEAL, 5) + rect(100, 160, 170, 36, ORANGE, 5) +
             "".join(ln(f"M{x} {y}h40", WHITE, 2.4, ' opacity=".7"') for x, y in ((128, 254), (144, 216), (118, 178))))
    return svg(sun(300, 100, 40, AMBER_L) + cloud(92, 96, 1.0) + stack + star(214, 128, 16) + ground(274, 70, 330))

GENERIC = [open_book, book_stack]
ART_TAGS = {"g", "path", "circle", "ellipse", "rect", "line", "polyline", "polygon"}
ART_ATTRS = {"d", "cx", "cy", "r", "rx", "ry", "x", "y", "x1", "x2", "y1", "y2", "width", "height", "points", "fill", "stroke",
             "stroke-width", "stroke-linecap", "stroke-linejoin", "stroke-dasharray", "opacity", "fill-opacity", "stroke-opacity", "transform"}


def clean_art(markup: str) -> str | None:
    """Make model-written SVG shapes safe to publish: only plain shapes and presentation attributes. None if unusable."""
    import re
    import xml.etree.ElementTree as ET
    try:
        root = ET.fromstring('<svg xmlns="http://www.w3.org/2000/svg">' + re.sub(r"<\?xml[^>]*\?>|</?svg[^>]*>", "", markup) + "</svg>")
    except ET.ParseError:
        return None
    count = 0

    def walk(el, out):
        nonlocal count
        for ch in el:
            tag = ch.tag.split("}")[-1]
            if tag not in ART_TAGS:
                continue
            attrs = {k: v for k, v in ch.attrib.items() if k in ART_ATTRS and "url(" not in v.lower() and "javascript" not in v.lower()}
            count += 1
            a = "".join(f' {k}="{_esc(v)}"' for k, v in attrs.items())
            if tag == "g":
                inner = []
                walk(ch, inner)
                out.append(f"<g{a}>{''.join(inner)}</g>")
            else:
                out.append(f"<{tag}{a}/>")
    parts: list[str] = []
    walk(root, parts)
    return "".join(parts) if 4 <= count <= 400 and len(markup) < 30000 else None


def art_svg(book: dict, art: str | None = None) -> str:
    """The illustration for a book: our hand-drawn one, else the model-designed art given, else a generic one."""
    if book["id"] in COVERS:
        return COVERS[book["id"]]()
    cleaned = clean_art(art) if art else None
    if cleaned:
        return svg(cleaned)
    return GENERIC[sum(map(ord, book["id"])) % len(GENERIC)]()


# ---------------------------------------------------------------- book jackets (the cover shown in the library)
# Our own jacket design: one colour per book from our palette, author + title in our type, our illustration as the
# picture. Deliberately NOT based on the publisher's cover art or colours.
JACKETS = [  # (book colour, tile colour, text colour)
    ("#F26B3A", "#FFD6C6", "#FFFFFF"), ("#1C4466", "#C4E6F5", "#FFFFFF"), ("#F4C430", "#FFF1B8", "#1E3553"),
    ("#E04B4B", "#F8C9C9", "#FFFFFF"), ("#4B4C7E", "#D7D6EA", "#FFFFFF"), ("#1F8A84", "#CBEBE6", "#FFFFFF"),
    ("#2F6FD6", "#CCDDF8", "#FFFFFF"), ("#3E8F5A", "#D3ECDA", "#FFFFFF"), ("#F0A23B", "#FCE4BC", "#1E3553"),
    ("#7A4E8C", "#E5D5EC", "#FFFFFF"),
]
FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif"


def _wrap(text: str, size: float, width: float, k: float = .6) -> list[str]:
    per = max(4, int(width / (size * k)))
    lines, cur = [], ""
    for w in text.split():
        if cur and len(cur) + 1 + len(w) > per:
            lines.append(cur)
            cur = w
        else:
            cur = (cur + " " + w).strip()
    return lines + [cur] if cur else lines


def _author(a: str) -> str:
    import re
    first = re.split(r",| and | with | \(", a)[0].strip()
    return first + (" et al." if "," in a and " and " in a else "")


def _esc(t: str) -> str:
    from html import escape
    return escape(t)


def jacket(book: dict, n: int, art: str | None = None) -> str:
    col, tile, ink = JACKETS[n % len(JACKETS)]
    x, y, w, h = 112, 28, 176, 264
    title = book["title"]
    for size in (27, 24, 21, 19, 17, 15.5, 14):
        lines = _wrap(title, size, w - 30, .62)
        if len(lines) <= (3 if size >= 19 else 4) and all(len(l) * size * .62 <= w - 28 for l in lines):
            break
    ty = y + 40
    text = "".join(f'<text x="{x + 18}" y="{ty + size * (i + 1) + (i * size * .12):.1f}" font-family="{FONT}" font-weight="800" '
                   f'font-size="{size}" fill="{ink}" letter-spacing="-.2">{_esc(l)}</text>' for i, l in enumerate(lines))
    auth = _author(book.get("author", "")).upper()
    asize = 8.2 if len(auth) <= 24 else 7
    text += (f'<text x="{x + 18}" y="{y + 26}" font-family="{FONT}" font-weight="700" font-size="{asize}" letter-spacing="1.1" '
             f'fill="{ink}" opacity=".85">{_esc(auth)}</text>')
    # the picture: our illustration for this book in a panel on the lower half of the jacket
    ill = art_svg(book, art)
    inner = ill[ill.index("</defs>") + 7:ill.rindex("</svg>")]
    py = y + 150
    pic = (f'<clipPath id="pc"><rect x="{x + 10}" y="{py}" width="{w - 18}" height="{h - 146}" rx="7"/></clipPath>'
           f'<g clip-path="url(#pc)"><rect x="{x + 10}" y="{py}" width="{w - 18}" height="{h - 146}" fill="#F6F1E8"/>'
           f'<svg x="{x + 10}" y="{py}" width="{w - 18}" height="{h - 146}" viewBox="20 30 360 260" preserveAspectRatio="xMidYMid slice">{inner}</svg></g>')
    book_svg = (rect(x + 5, y + 7, w, h, "#000", 5, ' opacity=".12"') +                      # shadow
                rect(x, y, w, h, col, 5) + rect(x, y, 7, h, "#000", 3, ' opacity=".16"') +  # jacket + spine
                rect(x + 7, y, 1.5, h, "#FFF", 0, ' opacity=".18"') + text + pic +
                circ(x + w - 15, y + h - 12, 0, "none"))
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}">'
            f'<defs><radialGradient id="g" cx="50%" cy="38%" r="75%"><stop offset="0" stop-color="#FBF8F2"/><stop offset="1" stop-color="{CREAM2}"/></radialGradient></defs>'
            f'<rect width="{W}" height="{H}" fill="{tile}"/><circle cx="200" cy="330" r="170" fill="#FFFFFF" opacity=".55"/>'
            f'{book_svg}</svg>')


def ensure(data: dict, art: dict | None = None, only_missing: bool = True) -> list[str]:
    """Give every book without a cover one (all of them with only_missing=False). `art` maps book id -> model-designed SVG shapes.
    Updates the cover fields in `data` and writes cover.svg + cover.png; returns the ids it made."""
    art = art or {}
    made = []
    for n, b in enumerate(data["books"]):
        d = SITE / b["dir"]
        if only_missing and b.get("cover") and (d / "cover.svg").exists():
            continue
        d.mkdir(parents=True, exist_ok=True)
        (d / "cover.svg").write_text(jacket(b, n, art.get(b["id"])), encoding="utf8")
        b["cover"] = f"{b['dir']}/cover.svg"
        b["cover_png"] = f"{b['dir']}/cover.png"
        made.append(b["id"])
    render_png([SITE / next(b["dir"] for b in data["books"] if b["id"] == i) / "cover.svg" for i in made])
    return made


def main() -> None:
    data = json.loads((SITE / "books.json").read_text(encoding="utf8"))
    made = ensure(data, only_missing="--all" not in sys.argv)
    (SITE / "books.json").write_text(json.dumps(data, indent=1, ensure_ascii=False), encoding="utf8")
    print(f"wrote {len(made)} cover(s): {', '.join(made) or 'none needed'}")
    if "--sheet" in sys.argv:
        sheet(data["books"])


def render_png(paths: list[Path]) -> None:
    """800x640 PNG next to each SVG, for apps that don't draw SVG."""
    if not paths:
        return
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        print("playwright not installed: skipped the PNG copies (the SVG covers still work)")
        return
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(viewport={"width": 800, "height": 640})
        for sp in paths:
            src = sp.read_text(encoding="utf8").replace("<svg ", '<svg width="800" height="640" ', 1)
            pg.set_content('<html><body style="margin:0">' + src + "</body></html>")
            pg.screenshot(path=str(sp.with_suffix(".png")), clip={"x": 0, "y": 0, "width": 800, "height": 640})
        b.close()


def sheet(books: list[dict]) -> None:
    from PIL import Image, ImageDraw
    cols, w, h = 6, 300, 240
    rows = (len(books) + cols - 1) // cols
    out = Image.new("RGB", (cols * w, rows * (h + 22)), "white")
    dr = ImageDraw.Draw(out)
    for i, b in enumerate(books):
        im = Image.open(SITE / b["dir"] / "cover.png").resize((w - 6, h - 6))
        x, y = (i % cols) * w, (i // cols) * (h + 22)
        out.paste(im, (x + 3, y + 3))
        dr.text((x + 6, y + h), b["title"][:40], fill="black")
    p = Path(sys.argv[sys.argv.index("--sheet") + 1]) if len(sys.argv) > sys.argv.index("--sheet") + 1 else ROOT / "covers-sheet.png"
    out.save(p)
    print("sheet:", p)


if __name__ == "__main__":
    main()
