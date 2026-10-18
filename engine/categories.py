"""Book categories (for the app's filters).

Each book in site/books.json has  "categories": ["Habits & Productivity", ...]
and the file has a top-level index the app can read directly:
  "categories": [{"name": "Habits & Productivity", "slug": "habits-productivity", "count": 12}, ...]
  "updated": "<ISO time>"

CLI (used by the set-categories workflow):
  python -m engine.categories apply '<json: {"book-id": ["Cat A", "Cat B"], ...}>' [--commit]
  python -m engine.categories reindex [--commit]
"""
from __future__ import annotations

import json
import re
import sys
from datetime import datetime, timezone

from . import config
from .config import log, slugify

MAX_PER_BOOK = 8
MAX_LEN = 40


def clean(names) -> list[str]:
    """Trim, collapse spaces, drop empties, de-duplicate ignoring case, keep order."""
    if isinstance(names, str):
        names = names.split(",")
    out, seen = [], set()
    for n in names or []:
        n = re.sub(r"\s+", " ", str(n)).strip()[:MAX_LEN].strip()
        if n and n.lower() not in seen:
            seen.add(n.lower())
            out.append(n)
    return out[:MAX_PER_BOOK]


def reindex(data: dict) -> dict:
    """Rebuild the category index from the books. Keeps the first spelling seen for each category."""
    counts: dict[str, list] = {}
    for b in data["books"]:
        b["categories"] = clean(b.get("categories", []))
        for c in b["categories"]:
            counts.setdefault(c.lower(), [c, 0])[1] += 1
    data["categories"] = [{"name": n, "slug": slugify(n), "count": k}
                          for n, k in sorted(counts.values(), key=lambda x: (-x[1], x[0].lower()))]
    data["updated"] = datetime.now(timezone.utc).isoformat(timespec="seconds")
    return data


def _load():
    p = config.SITE / "books.json"
    return p, json.loads(p.read_text(encoding="utf8"))


def apply(changes: dict) -> int:
    p, data = _load()
    by_id = {b["id"]: b for b in data["books"]}
    n = 0
    for bid, cats in changes.items():
        if bid not in by_id:
            log(f"  unknown book '{bid}', skipped")
            continue
        new = clean(cats)
        if new != by_id[bid].get("categories", []):
            by_id[bid]["categories"] = new
            n += 1
    reindex(data)
    p.write_text(json.dumps(data, indent=1, ensure_ascii=False), encoding="utf8")
    log(f"Updated categories on {n} book(s); {len(data['categories'])} categories in the index.")
    return n


def main(argv: list[str]) -> None:
    args = [a for a in argv if a != "--commit"]
    if not args or args[0] not in ("apply", "reindex"):
        sys.exit(__doc__)
    if args[0] == "apply":
        if len(args) != 2:
            sys.exit(__doc__)
        changes = json.loads(args[1])
        if not isinstance(changes, dict) or len(changes) > 500:
            sys.exit("changes must be a JSON object of book id -> list of categories")
        apply(changes)
    else:
        p, data = _load()
        reindex(data)
        p.write_text(json.dumps(data, indent=1, ensure_ascii=False), encoding="utf8")
    if "--commit" in argv:
        from .publish import git_commit_push
        git_commit_push("Update book categories")


if __name__ == "__main__":
    main(sys.argv[1:])
