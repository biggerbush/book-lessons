"""Cover illustration for a new book: Claude draws one flat picture (SVG shapes) in the library's style.

Used when a draft is finished (stored in the draft's book.json as `cover_art`) and again at approval for drafts that
have none. tools/make_covers.py cleans it (plain shapes only) and puts it on the book jacket. Never fatal: if anything
goes wrong the book simply gets a generic illustration.
"""
from __future__ import annotations

import re

from .config import log

SYSTEM = """You are an illustrator drawing the picture for a book jacket in a flat, friendly vector style. Reply with SVG shapes only."""

PROMPT = """Draw ONE simple illustration that captures the central idea of this book as a single clear visual metaphor.

Book: {title}{by}
About: {summary}

Canvas: viewBox 0 0 400 320 (draw inside x 30-370, y 40-285; the middle must stay fairly open or quiet because a play button sits on it).
Style: flat shapes, soft and slightly cartoonish, 2-3 dominant colours, one amber accent, a few thin navy outlines. No text, no letters, no logos, no real people's faces.
Palette only: navy #1E3553, slate #5B7BA6, light slate #9DB3CF, mist #D7E0E9, amber #EFA13A, light amber #F6CD86, orange #E5813A, peach #F1CBA4, teal #4E8D8A, light teal #93C0BA, white #FFFFFF, grey #C9CED6.
Allowed elements: g, path, circle, ellipse, rect, line, polyline, polygon, with fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, stroke-dasharray, opacity, transform. No gradients, filters, images, scripts, text or styles.
Do NOT draw a background (it is added for you). Use 15-45 shapes, ground line near y=280 if the scene needs one.

Reply with only the shapes (no <svg> wrapper, no explanation) inside <art></art> tags."""


def design(llm, title: str, author: str, summary: str) -> str | None:
    try:
        by = f" by {author}" if author else ""
        text = llm.ask(SYSTEM, PROMPT.format(title=title, by=by, summary=(summary or "")[:600]), 4000, "draw the book cover")
        m = re.search(r"<art>(.*?)</art>", text, re.S)
        return (m.group(1) if m else text).strip() or None
    except Exception as exc:                                   # a cover must never stop a book being built or published
        log(f"  cover art skipped: {type(exc).__name__}: {str(exc)[:120]}")
        return None
