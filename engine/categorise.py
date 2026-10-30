"""Pick categories for a new book (for the app's filters).

Claude chooses 1-3 from the categories the library already uses, adding a new one only when none fit. Used when a draft
finishes (stored in the draft's book.json as `categories`) and again at approval for drafts that have none. If Claude is
unavailable a keyword guess is used, so a published book is never left uncategorised.

CLI (safety net, also run by the approve workflow): python -m engine.categorise fill [--commit]
"""
from __future__ import annotations

import json
import re
import sys

from . import config
from .categories import clean, reindex
from .config import log

SYSTEM = "You file books into categories for a book-summary app's filters. Reply with JSON only."

PROMPT = """Choose 1 to 3 categories for this book.

Book: {title}{by}
About: {summary}

Existing categories (reuse these wherever one fits; put the best fit first):
{existing}

Only invent a new category (2-4 words, Title Case, like the existing ones) if none of the existing ones fit the book's main topic.
Reply with only a JSON list of strings, for example ["Personal Growth", "Mindset & Psychology"]."""

KEYWORDS = [  # (category, words in the title/summary)
    ("Money & Wealth", r"money|invest|wealth|rich|financ|millionaire|stock|saving"),
    ("Leadership & Management", r"leader|\bmanager|management|\bteams?\b|\bceo|\bboss|executive"),
    ("Sales & Marketing", r"sales|market|brand|customer|offer|advertis"),
    ("Entrepreneurship", r"startup|entrepreneur|business|founder|company"),
    ("Habits & Productivity", r"habit|productiv|focus|routine"),
    ("Communication & Influence", r"negotiat|communicat|persua|influenc|conversation|friends|speak"),
    ("Mindset & Psychology", r"mind|psycholog|think|anxi|emotion|brain|behavio|worr|ego"),
]


def existing_names() -> list[str]:
    try:
        data = json.loads((config.SITE / "books.json").read_text(encoding="utf8"))
        return [c["name"] for c in data.get("categories", [])]
    except Exception:
        return []


def guess(title: str, summary: str, existing: list[str]) -> list[str]:
    text = f"{title} {summary}".lower()
    have = {e.lower(): e for e in existing}
    out = [have[c.lower()] for c, rx in KEYWORDS if c.lower() in have and re.search(rx, text)]
    return out[:2] or [have.get("personal growth", "Personal Growth")]


def choose(llm, title: str, author: str, summary: str, existing: list[str] | None = None) -> list[str]:
    existing = existing if existing is not None else existing_names()
    try:
        by = f" by {author}" if author else ""
        text = llm.ask(SYSTEM, PROMPT.format(title=title, by=by, summary=(summary or "")[:600],
                                             existing="\n".join("- " + e for e in existing) or "(none yet)"), 300, "choose categories")
        m = re.search(r"\[.*?\]", text, re.S)
        cats = clean(json.loads(m.group(0)) if m else [])[:3]
        if cats:
            return cats
    except Exception as exc:
        log(f"  categories: Claude unavailable ({type(exc).__name__}); using a keyword guess")
    return guess(title, summary, existing)


def fill(llm=None) -> int:
    """Categorise every published book that has none."""
    p = config.SITE / "books.json"
    data = json.loads(p.read_text(encoding="utf8"))
    names = [c["name"] for c in data.get("categories", [])]
    n = 0
    for b in data["books"]:
        if not b.get("categories"):
            b["categories"] = choose(llm, b["title"], b.get("author", ""), b.get("blurb", ""), names) if llm else guess(b["title"], b.get("blurb", ""), names)
            names = list(dict.fromkeys(names + b["categories"]))
            n += 1
    reindex(data)
    p.write_text(json.dumps(data, indent=1, ensure_ascii=False), encoding="utf8")
    log(f"Categorised {n} book(s).")
    return n


if __name__ == "__main__":
    if len(sys.argv) < 2 or sys.argv[1] != "fill":
        sys.exit(__doc__)
    llm = None
    import os
    if os.environ.get("ANTHROPIC_API_KEY"):
        from .llm import LLM, new_usage
        llm = LLM(new_usage())
    fill(llm)
    if "--commit" in sys.argv:
        from .publish import git_commit_push
        git_commit_push("Categorise new books")
