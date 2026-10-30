"""Drafts, approval and git.

Layout:
  engine-data/<slug>/...            working files (scripts, scene code, voiceover MP3s, state). Not deployed.
  site/drafts/<slug>/               the draft: book.json + lesson-NN.html + thumb-NN.jpg. Previewable at #/preview/<slug>.
  site/drafts/index.json            list of drafts for the admin page.
  site/<id>/ + site/books.json      published (after approval).

CLI (used by the approve-book workflow):
  python -m engine.publish approve <slug> [--commit]
  python -m engine.publish reject <slug> [--commit]
"""
from __future__ import annotations

import json
import os
import re
import shutil
import subprocess
import sys
from datetime import datetime, timezone

from .config import DATA, ROOT, SITE, log, norm_title, slugify
from .llm import cost_usd

DRAFTS = SITE / "drafts"


def now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def state_path(slug):
    return DATA / slug / "state.json"


def load_state(slug: str) -> dict | None:
    p = state_path(slug)
    return json.loads(p.read_text(encoding="utf8")) if p.exists() else None


def save_state(state: dict) -> None:
    p = state_path(state["slug"])
    p.parent.mkdir(parents=True, exist_ok=True)
    state["updated"] = now()
    tmp = p.with_suffix(".tmp")
    tmp.write_text(json.dumps(state, indent=1, ensure_ascii=False), encoding="utf8")
    tmp.replace(p)


# ---------------------------------------------------------------- drafts

def write_draft(state: dict) -> None:
    """(Re)write site/drafts/<slug>/book.json and the drafts index from the engine state."""
    d = DRAFTS / state["slug"]
    d.mkdir(parents=True, exist_ok=True)
    plan = state.get("plan") or {}
    lessons = []
    for L in state.get("lessons", []):
        if L.get("stage") == "built":
            e = {"t": L["title"], "b": L["key_idea"], "d": L["dur"], "timing": L.get("timing", "")}
            if L.get("issues"):
                e["issues"] = L["issues"][:6]
            lessons.append(e)
    book = {
        "id": slugify(plan.get("title") or state["title"]), "title": plan.get("title") or state["title"],
        "author": plan.get("author") or state.get("author", ""), "blurb": plan.get("summary", ""),
        "planned": len(state.get("lessons", [])), "lessons": lessons, "status": state["status"],
        "message": state.get("message", ""), "dry": bool(state.get("dry")), "input_title": state["title"],
        "cost_usd": cost_usd(state.get("usage", {})), "updated": state.get("updated", now()),
    }
    if state.get("cover_art"):
        book["cover_art"] = state["cover_art"]
    if state.get("categories"):
        book["categories"] = state["categories"]
    if state.get("kind") == "model":
        book.update(kind="model", model_id=state.get("model_id", ""), category=state.get("category", ""))
    (d / "book.json").write_text(json.dumps(book, indent=1, ensure_ascii=False), encoding="utf8")
    update_drafts_index()


def update_drafts_index() -> None:
    DRAFTS.mkdir(parents=True, exist_ok=True)
    items = []
    for p in sorted(DRAFTS.glob("*/book.json")):
        b = json.loads(p.read_text(encoding="utf8"))
        items.append({"slug": p.parent.name, "title": b["title"], "input_title": b.get("input_title", b["title"]), "author": b.get("author", ""), "status": b["status"],
                      "message": b.get("message", ""), "lessons": len(b["lessons"]), "planned": b.get("planned", 0),
                      "dry": b.get("dry", False), "cost_usd": b.get("cost_usd", 0), "updated": b.get("updated", ""),
                      "flagged": sum(1 for l in b["lessons"] if l.get("issues"))})
    (DRAFTS / "index.json").write_text(json.dumps({"drafts": items}, indent=1, ensure_ascii=False), encoding="utf8")


# ---------------------------------------------------------------- approve / reject

_URI = re.compile(r'src="data:audio/[a-z0-9]+;base64,([A-Za-z0-9+/=]+)"')


def externalize_audio(folder) -> int:
    """Lessons built by older runs embed their narration as base64 (slow first load). Move it into lesson-NN.mp3 next to the page."""
    import base64
    n = 0
    for p in sorted(folder.glob("lesson-*.html")):
        s = p.read_text(encoding="utf8")
        m = _URI.search(s)
        if m:
            p.with_suffix(".mp3").write_bytes(base64.b64decode(m.group(1)))
            p.write_text(s[:m.start()] + f'src="{p.with_suffix(".mp3").name}"' + s[m.end():], encoding="utf8")
            n += 1
    return n


def approve(slug: str) -> None:
    src = DRAFTS / slug
    if not (src / "book.json").exists():
        sys.exit(f"No draft '{slug}'")
    book = json.loads((src / "book.json").read_text(encoding="utf8"))
    if book.get("dry"):
        sys.exit("This is a dry-run draft (test content); it cannot be published. Reject it instead.")
    if book["status"] != "ready":
        sys.exit(f"Draft is '{book['status']}', not 'ready'; finish or re-run it before approving.")

    if book.get("kind") == "model":
        return approve_model(src, book)

    books_path = SITE / "books.json"
    data = json.loads(books_path.read_text(encoding="utf8"))
    entry = next((b for b in data["books"] if norm_title(b["title"]) == norm_title(book["title"])), None)
    book_id = entry["id"] if entry else book["id"]
    dest = SITE / (entry["dir"] if entry else book_id)
    if dest.exists():
        shutil.rmtree(dest)
    shutil.move(str(src), str(dest))
    externalize_audio(dest)
    (dest / "book.json").unlink(missing_ok=True)

    lessons = [{k: v for k, v in l.items() if k not in ("issues", "timing")} for l in book["lessons"]]
    new = {"id": book_id, "dir": dest.name, "title": book["title"], "author": book["author"], "blurb": book["blurb"],
           "planned": book["planned"], "lessons": lessons}
    if entry:
        entry.update(new)                       # keeps the book's categories
        target = entry
    else:
        new["categories"] = book.get("categories") or []
        data["books"].append(new)
        target = new
    if not target.get("categories"):            # every published book gets categories (editable later from the admin page)
        target["categories"] = _pick_categories(data, target)
    from .categories import reindex
    reindex(data)
    _make_cover(data, book_id, book)
    books_path.write_text(json.dumps(data, indent=1, ensure_ascii=False), encoding="utf8")
    update_drafts_index()
    log(f"Published '{book['title']}' ({len(lessons)} lessons) as site/{dest.name}/")


def _pick_categories(data: dict, entry: dict) -> list[str]:
    """Claude picks from the library's categories; a keyword guess if Claude isn't available. Never blocks publishing."""
    from . import categorise
    names = [c["name"] for c in data.get("categories", [])]
    llm = None
    try:
        if os.environ.get("ANTHROPIC_API_KEY"):
            from .llm import LLM, new_usage
            llm = LLM(new_usage())
    except Exception:
        llm = None
    cats = categorise.choose(llm, entry["title"], entry.get("author", ""), entry.get("blurb", ""), names) if llm else \
        categorise.guess(entry["title"], entry.get("blurb", ""), names)
    log(f"Categories for '{entry['title']}': {', '.join(cats)}")
    return cats


def _make_cover(data: dict, book_id: str, book: dict) -> None:
    """Give the newly published book its jacket cover (never blocks publishing)."""
    try:
        from tools import make_covers
        entry = next(b for b in data["books"] if b["id"] == book_id)
        art = book.get("cover_art")
        if not art and book_id not in make_covers.COVERS and os.environ.get("ANTHROPIC_API_KEY"):
            from . import cover_art
            from .llm import LLM, new_usage
            art = cover_art.design(LLM(new_usage()), entry["title"], entry.get("author", ""), entry.get("blurb", ""))
        entry.pop("cover", None)
        make_covers.ensure(data, {book_id: art} if art else None)
        log(f"Cover made for '{entry['title']}'")
    except Exception as exc:
        log(f"Cover skipped for '{book_id}': {type(exc).__name__}: {str(exc)[:160]}")


def approve_model(src, book: dict) -> None:
    """A Models-section explainer: move it to site/models/<id>/ and point the model at it in models.json."""
    mid = book["model_id"]
    path = SITE / "models.json"
    data = json.loads(path.read_text(encoding="utf8"))
    m = next((x for x in data["models"] if x["id"] == mid), None)
    if m is None:
        sys.exit(f"No model '{mid}' in site/models.json")
    dest = SITE / "models" / mid
    if dest.exists():
        shutil.rmtree(dest)
    dest.parent.mkdir(parents=True, exist_ok=True)
    shutil.move(str(src), str(dest))
    externalize_audio(dest)
    (dest / "book.json").unlink(missing_ok=True)
    m["video"] = {"src": f"models/{mid}/lesson-01.html", "thumb": f"models/{mid}/thumb-01.jpg", "d": book["lessons"][0]["d"]}
    data["updated"] = now()
    path.write_text(json.dumps(data, indent=1, ensure_ascii=False), encoding="utf8")
    update_drafts_index()
    log(f"Published the animated explainer for '{m['name']}' as site/models/{mid}/")


def approve_all() -> None:
    """Publish every finished (ready, non-dry) draft, one after another."""
    done, skipped = [], []
    for p in sorted(DRAFTS.glob("*/book.json")):
        b = json.loads(p.read_text(encoding="utf8"))
        if b.get("dry") or b.get("status") != "ready" or not b.get("lessons"):
            skipped.append(p.parent.name)
            continue
        try:
            approve(p.parent.name)
            done.append(p.parent.name)
        except SystemExit as e:
            log(f"Skipped {p.parent.name}: {e}")
            skipped.append(p.parent.name)
    log(f"Published {len(done)} book(s): {', '.join(done) or 'none'}. Left as they were: {', '.join(skipped) or 'none'}.")


def reject(slug: str) -> None:
    src = DRAFTS / slug
    if src.exists():
        shutil.rmtree(src)
    update_drafts_index()
    log(f"Rejected and removed draft '{slug}' (working files stay in engine-data/{slug}/)")


# ---------------------------------------------------------------- git

def _git(*args: str, check: bool = True) -> subprocess.CompletedProcess:
    return subprocess.run(["git", *args], cwd=ROOT, capture_output=True, text=True, check=check)


def git_commit_push(message: str) -> None:
    _git("config", "user.name", "github-actions[bot]")
    _git("config", "user.email", "41898282+github-actions[bot]@users.noreply.github.com")
    _git("add", "-A", "engine-data", "site")
    if _git("diff", "--cached", "--quiet", check=False).returncode == 0:
        return
    _git("commit", "-m", message)
    import random, time
    for attempt in range(8):                                    # several books may be pushing at once
        if attempt:
            time.sleep(random.uniform(2, 8))
        _git("pull", "--rebase", "origin", "main", check=False)
        r = _git("push", "origin", "HEAD:main", check=False)
        if r.returncode == 0:
            log(f"  committed and pushed: {message}")
            return
        log(f"  push failed (attempt {attempt + 1}): {r.stderr.strip()[-200:]}")
    raise RuntimeError("could not push to main")


if __name__ == "__main__":
    args = [a for a in sys.argv[1:] if a != "--commit"]
    if len(args) != 2 or args[0] not in ("approve", "reject") or not re.fullmatch(r"[a-z0-9][a-z0-9-]{0,80}", args[1]):
        sys.exit(__doc__)
    if args[0] == "approve" and args[1] == "all":
        approve_all()
    else:
        {"approve": approve, "reject": reject}[args[0]](args[1])
    if "--commit" in sys.argv:
        git_commit_push(f"{'Publish' if args[0] == 'approve' else 'Reject draft'} {args[1]}")
