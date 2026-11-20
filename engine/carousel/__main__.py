"""python -m engine.carousel --book deep-work --lesson 1 [--plan file.json] [--dry] [--out dir]"""
from __future__ import annotations

import argparse
import base64
import json
import sys
from pathlib import Path

from ..config import DATA, SITE, log
from ..reel import source

HERE = Path(__file__).parent
STAGE = HERE / "stage"
REEL_STAGE = HERE.parent / "reel" / "stage"
EXAMPLE = HERE / "examples" / "deep-work-1.micro.json"
FONTS = (("__F_NR400__", "newsreader-latin-400-normal.woff2"), ("__F_NR400I__", "newsreader-latin-400-italic.woff2"),
         ("__F_NR500I__", "newsreader-latin-500-italic.woff2"), ("__F_NR700__", "newsreader-latin-700-normal.woff2"),
         ("__F_NR800__", "newsreader-latin-800-normal.woff2"), ("__F_NR800I__", "newsreader-latin-800-italic.woff2"),
         ("__F_IN700__", "inter-latin-700-normal.woff2"), ("__F_IN800__", "inter-latin-800-normal.woff2"),
         ("__F_CV700__", "caveat-latin-700-normal.woff2"), ("__F_PH400__", "patrick-hand-latin-400-normal.woff2"))

PREVIEW = """<!doctype html><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1"><title>%(title)s · carousel</title>
<style>body{margin:0;background:#EEF2F7;font:16px system-ui;color:#0B1F3A;padding:20px}h3{margin:0 0 14px}
.strip{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:12px}
.strip a{flex:none;scroll-snap-align:start}.strip img{height:70vh;max-height:675px;border-radius:14px;box-shadow:0 14px 40px #0B1F3A33;display:block}</style>
<h3>%(title)s</h3><div class=strip>%(imgs)s</div>"""


def page(plan: dict, src: dict, n: int) -> str:
    micro = plan.get("style", "micro") == "micro"           # "micro" = story in micro-lessons (default); "editorial" = grid-paper listicle
    css = (STAGE / ("micro.css" if micro else "carousel.css")).read_text(encoding="utf8")
    for key, f in FONTS:
        css = css.replace(key, "data:font/woff2;base64," + base64.b64encode((STAGE / "fonts" / f).read_bytes()).decode())
    data = {"book": src["book"], "author": src.get("author", ""), "lesson": n, "cover": src.get("cover", ""), "book_art": src.get("book_art", ""), "slides": plan["slides"]}
    libs = (REEL_STAGE / "icons.js").read_text(encoding="utf8") if micro else (STAGE / "rough.js").read_text(encoding="utf8")
    return ("<!doctype html><html><head><meta charset=utf-8><style>" + css + "</style></head><body><div id=deck></div><script>"
            + "window.CAROUSEL=" + json.dumps(data).replace("</", "<\\/") + ";\n" + libs
            + "\n" + (STAGE / ("micro.js" if micro else "carousel.js")).read_text(encoding="utf8") + "</script></body></html>")


def render(html: str, out_dir: Path) -> list[Path]:
    from playwright.sync_api import sync_playwright
    out_dir.mkdir(parents=True, exist_ok=True)
    tmp = out_dir / "_deck.html"
    tmp.write_text(html, encoding="utf8")
    files = []
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(viewport={"width": 1080, "height": 1350}, device_scale_factor=1)
        pg.goto(tmp.resolve().as_uri())
        n = pg.evaluate("window.buildDeck()")
        for i in range(1, n + 1):
            f = out_dir / f"{i:02d}.png"
            pg.locator(f"#s{i}").screenshot(path=str(f))
            files.append(f)
        b.close()
    tmp.unlink()
    return files


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(prog="engine.carousel")
    ap.add_argument("--book", required=True)
    ap.add_argument("--lesson", type=int, default=1)
    ap.add_argument("--plan")
    ap.add_argument("--dry", action="store_true", help="free: use the example plan")
    ap.add_argument("--out")
    a = ap.parse_args(argv)
    src = source.load(a.book, a.lesson)
    work = DATA / src["slug"] / "carousels" / f"lesson-{a.lesson:02d}"
    saved = work / "plan.json"
    if a.plan:
        plan = json.loads(Path(a.plan).read_text(encoding="utf8"))
    elif a.dry:
        plan = json.loads(EXAMPLE.read_text(encoding="utf8"))
    elif saved.exists():
        plan = json.loads(saved.read_text(encoding="utf8"))
    else:
        from ..llm import LLM
        from . import director
        plan = director.plan_for(src, LLM({"input_tokens": 0, "output_tokens": 0, "cache_read_tokens": 0, "cache_write_tokens": 0, "tts_chars": 0, "claude_calls": 0}))
    if not a.dry:
        work.mkdir(parents=True, exist_ok=True)
        saved.write_text(json.dumps(plan, indent=1), encoding="utf8")
    out = Path(a.out) if a.out else SITE / "carousels" / f"{src['slug']}-{a.lesson}"
    files = render(page(plan, src, a.lesson), out)
    imgs = "".join(f'<a href="{f.name}" download><img src="{f.name}" alt="slide {i + 1}"></a>' for i, f in enumerate(files))
    (out / "index.html").write_text(PREVIEW % {"title": f"{src['book']} · lesson {a.lesson}", "imgs": imgs}, encoding="utf8")
    log(f"carousel: {len(files)} slides -> {out}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
