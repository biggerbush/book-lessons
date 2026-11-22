"""python -m engine.reel --book deep-work --lesson 1 [--dry] [--plan plan.json] [--scale 1] [--fps 30]"""
from __future__ import annotations

import argparse
import json
import shutil
import subprocess
import sys
import tempfile
import time
from pathlib import Path

from ..config import DATA, SITE, log, slugify
from . import build, render, schema, sfx, source, voice

EXAMPLE = Path(__file__).parent / "examples" / "deep-work-1.plan.json"

PREVIEW = """<!doctype html><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1"><title>%(title)s · reel</title>
<style>body{margin:0;background:#0B1524;color:#F3F6F9;font:16px system-ui;display:flex;flex-direction:column;align-items:center;gap:14px;padding:18px}
video{height:80vh;max-width:100%%;border-radius:18px;box-shadow:0 20px 60px #0008}a{color:#FFC233}</style>
<h3 style="margin:0">%(title)s</h3><video src="reel.mp4" controls playsinline loop></video>
<div><a href="reel.mp4" download>Download mp4</a> · %(meta)s</div>"""


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(prog="engine.reel")
    ap.add_argument("--book", help="book slug (lesson and list reels)")
    ap.add_argument("--name", help="a standalone reel with no book (e.g. 7-laws); needs a saved plan or --plan")
    ap.add_argument("--lesson", type=int, default=1)
    ap.add_argument("--format", choices=["lesson", "list"], default="lesson", help="lesson = one lesson; list = '10 things to do' from the whole book")
    ap.add_argument("--dry", action="store_true", help="free: example plan, silent audio, estimated timing")
    ap.add_argument("--plan", help="use this plan JSON instead of asking Claude")
    ap.add_argument("--scale", type=float, default=1.0)
    ap.add_argument("--fps", type=int, default=30)
    ap.add_argument("--workers", type=int, default=2)
    ap.add_argument("--out", help="where to write reel.mp4 (default site/reels/<slug>-<n>/)")
    ap.add_argument("--no-sfx", action="store_true")
    ap.add_argument("--plan-only", action="store_true", help="ask Claude for the plan, save it, and stop (no voice, no render)")
    ap.add_argument("--voice-only", action="store_true", help="make (or reuse) the voice and stop: render later wherever you like")
    ap.add_argument("--captions", action="store_true", help="burn in word-by-word captions (off by default)")
    ap.add_argument("--look", choices=["white", "dark"], default="white", help="white = white backgrounds, navy + gold (default); dark = the navy look")
    a = ap.parse_args(argv)

    t0 = time.time()
    LIST = a.format == "list"
    if a.name:                                                        # standalone: no book, the plan carries everything
        slug = slugify(a.name)
        work = DATA / "topics" / slug / "reels"
        pf = Path(a.plan) if a.plan else work / "plan.json"
        if not pf.exists():
            raise SystemExit(f"A standalone reel needs a plan: pass --plan or save one at {work / 'plan.json'}")
        title = json.loads(pf.read_text(encoding="utf8")).get("title") or a.name
        a.plan = str(pf)
        src = {"slug": slug, "book": title, "author": "", "cover": "", "lesson_title": title}
        tag = ""
    elif not a.book:
        raise SystemExit("--book or --name is required")
    else:
        src = source.load_book(a.book) if LIST else source.load(a.book, a.lesson)
        slug = src["slug"]
        tag = "top10" if LIST else a.lesson                          # used in folder names and the footer
        work = DATA / slug / "reels" / ("top10" if LIST else f"lesson-{a.lesson:02d}")      # plan + voice live here so a re-render never pays for audio again
    if a.dry:
        work = work / "dry"
    work.mkdir(parents=True, exist_ok=True)
    usage = {"input_tokens": 0, "output_tokens": 0, "cache_read_tokens": 0, "cache_write_tokens": 0, "tts_chars": 0, "claude_calls": 0}

    plan_file = work / "plan.json"
    if a.plan:
        plan = schema.normalise(json.loads(Path(a.plan).read_text(encoding="utf8")))
    elif plan_file.exists() and not a.dry:
        log("plan: reusing the saved plan.json")
        plan = schema.normalise(json.loads(plan_file.read_text(encoding="utf8")))
    elif a.dry:
        ex = director_examples()[1 if LIST else 0]
        plan = schema.normalise(json.loads(ex.read_text(encoding="utf8")))
    else:
        from ..llm import LLM
        from . import director
        plan = director.plan_list(src, LLM(usage)) if LIST else director.plan_for(src, LLM(usage))
    for p in schema.problems(plan):
        log("  note: " + p)
    plan_file.write_text(json.dumps(plan, indent=1), encoding="utf8")
    text = schema.narration(plan)
    log(f"plan: {len(plan['beats'])} beats, {plan['words']} words")
    if a.plan_only:
        log(f"plan only: saved {plan_file}")
        return 0

    mp3, words, real = voice.make(text, work, a.dry)
    if a.voice_only:
        log(f"voice only: saved {work}")
        return 0
    usage["tts_chars"] = len(text) if real and not (work / "align.json").exists() else usage["tts_chars"]
    reel = build.timeline(plan, words, src.get("cover", ""), src["book"], tag, src.get("author", ""), a.look, a.captions)
    log(f"timeline: {reel['dur']:.1f}s")

    tmp = Path(tempfile.mkdtemp(prefix="reel-"))
    try:
        html = tmp / "reel.html"
        html.write_text(build.page(reel), encoding="utf8")
        audio = mp3
        if not a.no_sfx:
            ev = render.sfx_events(html)
            audio = sfx.mix(mp3, sfx.build(ev, reel["dur"], tmp / "sfx.wav"), tmp / "mix.m4a")
        fdir = render.frames(html, tmp, reel["dur"], fps=a.fps, scale=a.scale, workers=a.workers)
        out_dir = Path(a.out) if a.out else SITE / "reels" / f"{slug}{'-' + str(tag) if tag != '' else ''}{'-dry' if a.dry else ''}"
        out_dir.mkdir(parents=True, exist_ok=True)
        render.encode(fdir, audio, out_dir / "reel.mp4", fps=a.fps)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)

    meta = f"{reel['dur']:.0f}s · {len(plan['beats'])} scenes · {'real voice' if real else 'silent test'}"
    (out_dir / "index.html").write_text(PREVIEW % {"title": src['book'] if a.name else f"{src['book']} · {'10 things' if LIST else 'lesson %s' % a.lesson}", "meta": meta}, encoding="utf8")
    _index(slug, tag, src, reel, real, a.dry)
    log(f"done in {time.time() - t0:.0f}s -> {out_dir / 'reel.mp4'}")
    return 0


def director_examples():
    from . import director
    return director.EXAMPLE, (director.LIST_EXAMPLE if director.LIST_EXAMPLE.exists() else director.EXAMPLE)


def _index(slug, n, src, reel, real, dry):
    f = SITE / "reels" / "index.json"
    f.parent.mkdir(parents=True, exist_ok=True)
    items = json.loads(f.read_text(encoding="utf8")) if f.exists() else []
    rid = f"{slug}{'-' + str(n) if n != '' else ''}{'-dry' if dry else ''}"
    items = [i for i in items if i.get("id") != rid]
    items.insert(0, {"id": rid, "book": src["book"], "lesson": n, "title": src.get("lesson_title", ""), "dur": reel["dur"], "voice": real,
                     "updated": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())})
    f.write_text(json.dumps(items, indent=1), encoding="utf8")


if __name__ == "__main__":
    sys.exit(main())
