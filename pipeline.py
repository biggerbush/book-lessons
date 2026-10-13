#!/usr/bin/env python3
"""Book-summary content pipeline.

    book titles -> brief + 10 lesson scripts (Claude) -> voiceovers (ElevenLabs)
                -> review page -> you approve -> published to the site/app

Usage:
    python pipeline.py run "Atomic Habits" "Deep Work"     # or: run --file books.txt
    python pipeline.py review                               # rebuild work/review.html
    python pipeline.py redo atomic-habits 4 --note "Shorter, more concrete example"
    python pipeline.py approve atomic-habits                # publishes it
    python pipeline.py reject atomic-habits
    python pipeline.py status
"""
from __future__ import annotations

import argparse
import html
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import time
from datetime import datetime, timezone
from pathlib import Path
from typing import Literal

import requests
from pydantic import BaseModel, Field

ROOT = Path(__file__).resolve().parent
WORK = ROOT / "work"
SOURCES = ROOT / "sources"
CONFIG = json.loads((ROOT / "config.json").read_text())

# $ per million tokens (input, output) — used only for the cost estimate on the review page.
PRICES = {
    "claude-opus-5-5": (4.00, 20.00),
    "claude-sonnet-5-5": (2.00, 10.00),
    "claude-haiku-5-5": (0.10, 0.50),
}
# Approximate $ per 1,000 ElevenLabs characters (check your plan).
TTS_PRICE_PER_1K_CHARS = {"eleven_multilingual_v2": 0.18, "eleven_v3": 0.18,
                          "eleven_flash_v2_5": 0.09, "eleven_turbo_v2_5": 0.09}


# ---------------------------------------------------------------- data models

class LessonOutline(BaseModel):
    title: str
    key_idea: str = Field(description="One sentence: the single idea this lesson teaches")


class BookPlan(BaseModel):
    knows_book_well: bool = Field(description="True only if you know this specific book's actual content in detail")
    confidence_note: str = Field(description="One sentence on how well you know this book")
    title: str
    author: str
    one_liner: str = Field(description="A hook under 20 words")
    summary: str = Field(description="120-180 word overview of the book")
    who_its_for: str
    key_themes: list[str]
    lessons: list[LessonOutline]


class LessonScript(BaseModel):
    script: str = Field(description="The spoken voiceover script, plain prose, no headings or markdown")
    takeaways: list[str] = Field(description="3 short bullet takeaways")
    action_step: str = Field(description="One concrete thing the listener can do today")


# ---------------------------------------------------------------- helpers

def slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def book_path(slug: str) -> Path:
    return WORK / slug / "book.json"


def load_book(slug: str) -> dict:
    p = book_path(slug)
    if not p.exists():
        sys.exit(f"No book '{slug}'. Run `python pipeline.py status` to list books.")
    return json.loads(p.read_text())


def save_book(book: dict) -> None:
    p = book_path(book["slug"])
    p.parent.mkdir(parents=True, exist_ok=True)
    book["updated_at"] = now()
    tmp = p.with_suffix(".tmp")
    tmp.write_text(json.dumps(book, indent=2, ensure_ascii=False))
    tmp.replace(p)


def all_books() -> list[dict]:
    return [json.loads(p.read_text()) for p in sorted(WORK.glob("*/book.json"))]


def log(msg: str) -> None:
    print(f"[{datetime.now():%H:%M:%S}] {msg}", flush=True)


# ---------------------------------------------------------------- Claude

SYSTEM = f"""You write book-summary lessons for an audio learning app.
Audience: {CONFIG['audience']}.
Tone: {CONFIG['tone']}.

Rules:
- Write in your own words. Never reproduce the book's text; at most one short quote (under 15 words) per lesson, attributed.
- Be accurate to what the book actually argues. Do not invent studies, statistics, anecdotes or quotes. If you are unsure of a detail, leave it out.
- Scripts are read aloud by a text-to-speech voice: plain sentences, no markdown, no bullet points, no stage directions, spell out symbols and abbreviations that would sound odd spoken."""

_client = None


def claude():
    global _client
    if _client is None:
        import anthropic
        _client = anthropic.Anthropic()
    return _client


def ask_claude(book: dict, prompt: str, schema: type[BaseModel], max_tokens: int):
    resp = claude().beta.messages.parse(
        model=CONFIG["claude_model"],
        max_tokens=max_tokens,
        system=SYSTEM,
        messages=[{"role": "user", "content": prompt}],
        output_format=schema,
        output_config={"effort": CONFIG["claude_effort"]},
        betas=["server-side-fallback-2026-07-01"],
        fallbacks="default",
    )
    usage = book.setdefault("usage", {"input_tokens": 0, "output_tokens": 0, "tts_chars": 0})
    usage["input_tokens"] += resp.usage.input_tokens  # counted first: failed responses are billed too
    usage["output_tokens"] += resp.usage.output_tokens
    if resp.stop_reason == "refusal":
        raise RuntimeError(f"Claude declined the request: {resp.stop_details}")
    if resp.stop_reason == "max_tokens":
        raise RuntimeError("Claude's answer was cut off (max_tokens); raise max_tokens and retry")
    return resp.parsed_output


def plan_book(book: dict) -> None:
    n = CONFIG["lessons_per_book"]
    source = SOURCES / f"{book['slug']}.txt"
    notes = ""
    if source.exists():
        notes = f"\n\nUse these source notes as the primary reference:\n<source_notes>\n{source.read_text()}\n</source_notes>"
    plan = ask_claude(book, f"""Plan a {n}-lesson audio summary of the book "{book['input_title']}".

Return the book's real title and author, a short brief, and exactly {n} lessons. Each lesson teaches one
distinct, important idea from the book, in an order that builds naturally. Lesson 1 should hook the listener;
lesson {n} should tie the ideas together.{notes}""", BookPlan, max_tokens=16000)
    if len(plan.lessons) < n:
        save_book(book)  # keep the usage of the failed attempt
        raise RuntimeError(f"Claude planned {len(plan.lessons)} lessons instead of {n}; re-run to retry")

    book.update(title=plan.title, author=plan.author,
                brief={"one_liner": plan.one_liner, "summary": plan.summary,
                       "who_its_for": plan.who_its_for, "key_themes": plan.key_themes},
                confidence_note=plan.confidence_note)
    book["lessons"] = [{"n": i + 1, "title": l.title, "key_idea": l.key_idea, "status": "outlined"}
                       for i, l in enumerate(plan.lessons[:n])]
    if not plan.knows_book_well and not notes:
        book["status"] = "needs_source"
        log(f"  ! Claude isn't confident it knows '{plan.title}' well: {plan.confidence_note}")
        log(f"    Add notes at sources/{book['slug']}.txt and re-run, or run with --force.")


def write_lesson(book: dict, lesson: dict, note: str | None = None) -> None:
    outline = "\n".join(f"{l['n']}. {l['title']} — {l['key_idea']}" for l in book["lessons"])
    redo = f"\n\nThis is a rewrite. Reviewer feedback on the previous version: {note}\nPrevious version:\n{lesson.get('script', '')}" if note else ""
    out = ask_claude(book, f"""Book: "{book['title']}" by {book['author']}
Brief: {book['brief']['summary']}

Full lesson plan:
{outline}

Write lesson {lesson['n']}: "{lesson['title']}" (key idea: {lesson['key_idea']}).
The script should be about {CONFIG['words_per_lesson']} words. Open with a hook, explain the idea with a concrete
example from the book, and close with a one-line bridge to lesson {lesson['n'] + 1} (unless it is the last lesson).
Don't repeat what other lessons cover.{redo}""", LessonScript, max_tokens=6000)
    lesson.update(script=out.script.strip(), takeaways=out.takeaways, action_step=out.action_step,
                  status="written", audio=None)


# ---------------------------------------------------------------- ElevenLabs

def split_text(text: str, limit: int = 4000) -> list[str]:
    if len(text) <= limit:
        return [text]
    parts, cur = [], ""
    for sentence in re.split(r"(?<=[.!?])\s+", text):
        if cur and len(cur) + len(sentence) + 1 > limit:
            parts.append(cur)
            cur = sentence
        else:
            cur = f"{cur} {sentence}".strip()
    return parts + [cur] if cur else parts


def tts(text: str, out: Path, prev_text: str = "", next_text: str = "") -> None:
    key = os.environ.get("ELEVENLABS_API_KEY")
    if not key:
        sys.exit("ELEVENLABS_API_KEY is not set")
    url = (f"https://api.elevenlabs.io/v1/text-to-speech/{CONFIG['elevenlabs_voice_id']}"
           f"?output_format={CONFIG['elevenlabs_output_format']}")
    body = {"text": text, "model_id": CONFIG["elevenlabs_model_id"]}
    if prev_text:
        body["previous_text"] = prev_text
    if next_text:
        body["next_text"] = next_text
    for attempt in range(5):
        r = requests.post(url, json=body, headers={"xi-api-key": key}, timeout=300)
        if r.status_code == 200:
            out.write_bytes(r.content)
            return
        if r.status_code in (429, 500, 502, 503, 504) and attempt < 4:
            time.sleep(2 ** (attempt + 1))
            continue
        raise RuntimeError(f"ElevenLabs error {r.status_code}: {r.text[:300]}")


def audio_seconds(path: Path) -> float | None:
    try:
        out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                              "-of", "csv=p=0", str(path)], capture_output=True, text=True, check=True)
        return round(float(out.stdout.strip()), 1)
    except Exception:
        return None


def voice_lesson(book: dict, lesson: dict) -> None:
    out = WORK / book["slug"] / f"lesson-{lesson['n']:02d}.mp3"
    chunks = split_text(lesson["script"])
    if len(chunks) == 1:
        tts(chunks[0], out)
    else:
        with tempfile.TemporaryDirectory() as tmp:
            files = []
            for i, chunk in enumerate(chunks):
                f = Path(tmp) / f"{i}.mp3"
                tts(chunk, f, prev_text=chunks[i - 1] if i else "",
                    next_text=chunks[i + 1] if i + 1 < len(chunks) else "")
                files.append(f)
            listing = Path(tmp) / "list.txt"
            listing.write_text("".join(f"file '{f}'\n" for f in files))
            subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0",
                            "-i", str(listing), "-c", "copy", str(out)], check=True)
    book["usage"]["tts_chars"] += len(lesson["script"])
    lesson.update(audio=out.name, audio_seconds=audio_seconds(out), status="voiced")


# ---------------------------------------------------------------- pipeline steps

def process(title: str, voice: bool, force: bool) -> str:
    slug = slugify(title)
    p = book_path(slug)
    book = json.loads(p.read_text()) if p.exists() else {
        "slug": slug, "input_title": title, "status": "drafting", "created_at": now(),
        "model": CONFIG["claude_model"]}
    if book["status"] in ("approved", "published"):
        log(f"'{slug}' is already {book['status']} — skipping")
        return slug
    log(f"Book: {title}")

    if not book.get("lessons") or (book["status"] == "needs_source" and force):
        if not book.get("lessons"):
            log("  planning brief + lesson outline")
            plan_book(book)
        if book["status"] == "needs_source" and force:
            book["status"] = "drafting"
        save_book(book)
    if book["status"] == "needs_source":
        return slug

    for lesson in book["lessons"]:  # each step is saved, so a re-run resumes where it stopped
        if not lesson.get("script"):
            log(f"  writing lesson {lesson['n']}: {lesson['title']}")
            write_lesson(book, lesson)
            save_book(book)
        if voice and not lesson.get("audio"):
            log(f"  voicing lesson {lesson['n']}")
            voice_lesson(book, lesson)
            save_book(book)

    book["status"] = "review" if all(l.get("audio") for l in book["lessons"]) or not voice else "drafting"
    save_book(book)
    return slug


def cost(book: dict) -> float:
    u = book.get("usage", {})
    pin, pout = PRICES.get(book.get("model", ""), (0, 0))
    tts_rate = CONFIG.get("elevenlabs_usd_per_1k_chars") or TTS_PRICE_PER_1K_CHARS.get(CONFIG["elevenlabs_model_id"], 0.18)
    return (u.get("input_tokens", 0) * pin + u.get("output_tokens", 0) * pout) / 1e6 \
        + u.get("tts_chars", 0) / 1000 * tts_rate


# ---------------------------------------------------------------- review page

def build_review() -> Path:
    WORK.mkdir(exist_ok=True)
    e = html.escape
    sections = []
    for b in all_books():
        if b["status"] not in ("review", "needs_source", "drafting"):
            continue
        lessons = []
        for l in b.get("lessons", []):
            audio = (f'<audio controls preload="none" src="{e(b["slug"])}/{e(l["audio"])}"></audio>'
                     f'<span class="muted">{l.get("audio_seconds") or "?"}s</span>') if l.get("audio") else '<span class="muted">no audio yet</span>'
            takeaways = "".join(f"<li>{e(t)}</li>" for t in l.get("takeaways", []))
            lessons.append(f"""<details><summary><b>{l['n']}. {e(l['title'])}</b> — {e(l['key_idea'])}</summary>
              {audio}<p>{e(l.get('script', '(not written yet)'))}</p>
              <ul>{takeaways}</ul><p><b>Action:</b> {e(l.get('action_step', ''))}</p>
              <code>python pipeline.py redo {e(b['slug'])} {l['n']} --note "..."</code></details>""")
        brief = b.get("brief", {})
        sections.append(f"""<section><h2>{e(b.get('title', b['input_title']))} <small>{e(b.get('author', ''))}</small></h2>
          <p class="pill {e(b['status'])}">{e(b['status'])}</p><p class="muted">{e(b.get('confidence_note', ''))}</p>
          <p><i>{e(brief.get('one_liner', ''))}</i></p><p>{e(brief.get('summary', ''))}</p>
          <p><b>For:</b> {e(brief.get('who_its_for', ''))}</p>
          {''.join(lessons)}
          <p class="muted">Est. cost so far: ${cost(b):.2f}</p>
          <code>python pipeline.py approve {e(b['slug'])}</code></section>""")
    body = "".join(sections) or "<p>Nothing waiting for review.</p>"
    page = f"""<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Lesson Review</title><style>
:root{{--bg:#fafaf9;--fg:#1c1917;--muted:#78716c;--card:#fff;--line:#e7e5e4}}
@media (prefers-color-scheme:dark){{:root{{--bg:#1c1917;--fg:#f5f5f4;--muted:#a8a29e;--card:#292524;--line:#44403c}}}}
body{{font:16px/1.55 system-ui,sans-serif;background:var(--bg);color:var(--fg);max-width:760px;margin:0 auto;padding:16px}}
section{{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px;margin:16px 0}}
details{{border-top:1px solid var(--line);padding:10px 0}} summary{{cursor:pointer}} audio{{width:100%;margin:8px 0}}
.muted{{color:var(--muted);font-size:14px}} code{{font-size:13px;word-break:break-all}}
.pill{{display:inline-block;padding:2px 10px;border-radius:99px;background:var(--line);font-size:13px}}
</style></head><body><h1>Lessons awaiting approval</h1>{body}</body></html>"""
    out = WORK / "review.html"
    out.write_text(page)
    return out


# ---------------------------------------------------------------- publishing

def public_book(book: dict, audio_urls: dict[int, str]) -> dict:
    return {
        "slug": book["slug"], "title": book["title"], "author": book["author"], **book["brief"],
        "lessons": [{"n": l["n"], "title": l["title"], "key_idea": l["key_idea"], "script": l["script"],
                     "takeaways": l["takeaways"], "action_step": l["action_step"],
                     "audio_url": audio_urls[l["n"]], "audio_seconds": l.get("audio_seconds")}
                    for l in book["lessons"]],
        "published_at": now(),
    }


def upload_s3(local: Path, key: str) -> str | None:
    """Uploads to S3-compatible storage (e.g. Cloudflare R2) when S3_* env vars are set."""
    bucket = os.environ.get("S3_BUCKET")
    if not bucket:
        return None
    import boto3
    s3 = boto3.client("s3", endpoint_url=os.environ.get("S3_ENDPOINT_URL"),
                      aws_access_key_id=os.environ["S3_ACCESS_KEY_ID"],
                      aws_secret_access_key=os.environ["S3_SECRET_ACCESS_KEY"])
    s3.upload_file(str(local), bucket, key, ExtraArgs={"ContentType": "audio/mpeg"})
    return f"{os.environ['S3_PUBLIC_BASE_URL'].rstrip('/')}/{key}"


def publish(book: dict) -> None:
    dest = ROOT / CONFIG["publish_dir"] / "books" / book["slug"]
    dest.mkdir(parents=True, exist_ok=True)
    base = CONFIG["public_base_url"].rstrip("/")
    urls = {}
    for l in book["lessons"]:
        src = WORK / book["slug"] / l["audio"]
        key = f"books/{book['slug']}/{l['audio']}"
        url = upload_s3(src, key)
        if url is None:
            shutil.copy2(src, dest / l["audio"])
            url = f"{base}/{key}" if base else key
        urls[l["n"]] = url
    data = public_book(book, urls)
    (dest / "book.json").write_text(json.dumps(data, indent=2, ensure_ascii=False))

    catalog_path = ROOT / CONFIG["publish_dir"] / "catalog.json"
    catalog = json.loads(catalog_path.read_text()) if catalog_path.exists() else {"books": []}
    catalog["books"] = [b for b in catalog["books"] if b["slug"] != book["slug"]] + [{
        "slug": book["slug"], "title": book["title"], "author": book["author"],
        "one_liner": book["brief"]["one_liner"], "lessons": len(book["lessons"]),
        "path": f"books/{book['slug']}/book.json", "published_at": data["published_at"]}]
    catalog_path.write_text(json.dumps(catalog, indent=2, ensure_ascii=False))

    hook = os.environ.get("PUBLISH_WEBHOOK_URL")  # optional: push straight into your app's backend
    if hook:
        headers = {"Authorization": f"Bearer {os.environ['PUBLISH_WEBHOOK_TOKEN']}"} if os.environ.get("PUBLISH_WEBHOOK_TOKEN") else {}
        requests.post(hook, json=data, headers=headers, timeout=60).raise_for_status()

    book["status"] = "published"
    book["published_at"] = data["published_at"]
    save_book(book)
    log(f"Published '{book['title']}' → {dest.relative_to(ROOT)}")


# ---------------------------------------------------------------- CLI

def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    r = sub.add_parser("run", help="generate books end to end")
    r.add_argument("titles", nargs="*")
    r.add_argument("--file", help="text file with one book title per line")
    r.add_argument("--no-voice", action="store_true", help="write scripts only, skip ElevenLabs")
    r.add_argument("--force", action="store_true", help="continue even if Claude doesn't know the book well")
    sub.add_parser("review")
    sub.add_parser("status")
    for name in ("approve", "reject"):
        sub.add_parser(name).add_argument("slug")
    rd = sub.add_parser("redo", help="rewrite + re-voice one lesson")
    rd.add_argument("slug")
    rd.add_argument("lesson", type=int)
    rd.add_argument("--note", required=True)
    rd.add_argument("--no-voice", action="store_true")
    a = ap.parse_args()

    if a.cmd == "run":
        titles = list(a.titles)
        if a.file:
            titles += [t.strip() for t in Path(a.file).read_text().splitlines() if t.strip() and not t.startswith("#")]
        if not titles:
            sys.exit("Give at least one book title")
        failed = []
        for t in titles:
            try:
                process(t, voice=not a.no_voice, force=a.force)
            except Exception as ex:  # keep going with the other books; re-running resumes this one
                log(f"  ✗ {t}: {ex}")
                failed.append(t)
        log(f"Review page: {build_review().relative_to(ROOT)}")
        if failed:
            sys.exit(f"Failed (re-run to resume): {', '.join(failed)}")
    elif a.cmd == "review":
        print(build_review())
    elif a.cmd == "status":
        for b in all_books():
            done = sum(1 for l in b.get("lessons", []) if l.get("audio"))
            print(f"{b['slug']:<40} {b['status']:<13} {done}/{len(b.get('lessons', []))} voiced  ~${cost(b):.2f}")
    elif a.cmd == "redo":
        book = load_book(a.slug)
        lesson = next((l for l in book["lessons"] if l["n"] == a.lesson), None)
        if not lesson:
            sys.exit(f"No lesson {a.lesson}")
        write_lesson(book, lesson, note=a.note)
        if not a.no_voice:
            voice_lesson(book, lesson)
        book["status"] = "review"
        save_book(book)
        log(f"Lesson {a.lesson} redone. Review page: {build_review().relative_to(ROOT)}")
    elif a.cmd == "approve":
        book = load_book(a.slug)
        if book["status"] not in ("review", "published"):
            sys.exit(f"Can't approve: '{a.slug}' is {book['status']}, not ready for review")
        missing = [l["n"] for l in book["lessons"] if not l.get("audio")]
        if missing:
            sys.exit(f"Can't approve: lessons {missing} have no voiceover yet")
        book["status"] = "approved"
        save_book(book)
        publish(book)
        build_review()
    elif a.cmd == "reject":
        book = load_book(a.slug)
        book["status"] = "rejected"
        save_book(book)
        build_review()
        log(f"Rejected '{a.slug}'")


if __name__ == "__main__":
    main()
