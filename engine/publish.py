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

def approve(slug: str) -> None:
    src = DRAFTS / slug
    if not (src / "book.json").exists():
        sys.exit(f"No draft '{slug}'")
    book = json.loads((src / "book.json").read_text(encoding="utf8"))
    if book.get("dry"):
        sys.exit("This is a dry-run draft (test content); it cannot be published. Reject it instead.")
    if book["status"] != "ready":
        sys.exit(f"Draft is '{book['status']}', not 'ready'; finish or re-run it before approving.")

    books_path = SITE / "books.json"
    data = json.loads(books_path.read_text(encoding="utf8"))
    entry = next((b for b in data["books"] if norm_title(b["title"]) == norm_title(book["title"])), None)
    book_id = entry["id"] if entry else book["id"]
    dest = SITE / (entry["dir"] if entry else book_id)
    if dest.exists():
        shutil.rmtree(dest)
    shutil.move(str(src), str(dest))
    (dest / "book.json").unlink(missing_ok=True)

    lessons = [{k: v for k, v in l.items() if k not in ("issues", "timing")} for l in book["lessons"]]
    new = {"id": book_id, "dir": dest.name, "title": book["title"], "author": book["author"], "blurb": book["blurb"],
           "planned": book["planned"], "lessons": lessons}
    if entry:
        entry.update(new)
    else:
        data["books"].append(new)
    books_path.write_text(json.dumps(data, indent=1, ensure_ascii=False), encoding="utf8")
    update_drafts_index()
    log(f"Published '{book['title']}' ({len(lessons)} lessons) as site/{dest.name}/")


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
    {"approve": approve, "reject": reject}[args[0]](args[1])
    if "--commit" in sys.argv:
        git_commit_push(f"{'Publish' if args[0] == 'approve' else 'Reject draft'} {args[1]}")
