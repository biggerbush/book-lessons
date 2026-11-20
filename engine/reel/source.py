"""Load a lesson's text from the book engine's saved data (engine-data/<slug>/...)."""
from __future__ import annotations

import base64
import json
import re

from ..config import DATA, SITE, slugify


def load(book: str, n: int) -> dict:
    slug = slugify(book)
    d = DATA / slug
    if not (d / "state.json").exists():
        raise SystemExit(f"No saved lessons for '{book}' (looked in engine-data/{slug}). Reels are made from lessons built by the book engine.")
    st = json.loads((d / "state.json").read_text(encoding="utf8"))
    ld = d / f"lesson-{n:02d}"
    if not (ld / "script.txt").exists():
        raise SystemExit(f"Lesson {n} of '{book}' has no script (engine-data/{slug}/lesson-{n:02d}/script.txt).")
    lesson = next((l for l in st.get("lessons", []) if l.get("n") == n), {})
    raw = (ld / "script.txt").read_text(encoding="utf8")
    parts = []
    for line in raw.splitlines():
        line = line.strip()
        if not line:
            continue
        if line.startswith("==="):
            parts.append("\n## " + line.strip("= ").strip())
        else:
            parts.append(re.sub(r"^\[[a-z0-9_]+\]\s*", "", line))
    meta = json.loads((ld / "meta.json").read_text(encoding="utf8")) if (ld / "meta.json").exists() else {}
    plan = st.get("plan", {})
    cover = ""
    for name in ("cover.png", "cover.svg"):
        f = SITE / (st.get("dir") or slug) / name
        if f.exists():
            mime = "image/png" if name.endswith("png") else "image/svg+xml"
            cover = f"data:{mime};base64," + base64.b64encode(f.read_bytes()).decode()
            break
    book_art = ""                                                   # the jacket alone (no tile background), for carousel covers
    sv = SITE / (st.get("dir") or slug) / "cover.svg"
    if sv.exists():
        txt = sv.read_text(encoding="utf8")
        txt = re.sub(r'<rect width="400" height="320" fill="[^"]*"/>', "", txt)
        txt = re.sub(r'<circle cx="200" cy="330" r="170"[^>]*/>', "", txt)
        txt = re.sub(r'<rect x="117" y="35" width="176" height="264" rx="5" fill="#000" opacity=".12"/>', "", txt)
        txt = txt.replace('viewBox="0 0 400 320"', 'viewBox="112 28 176 264"', 1)
        if 'viewBox="112 28 176 264"' in txt:
            book_art = "data:image/svg+xml;base64," + base64.b64encode(txt.encode()).decode()
    return {"slug": slug, "book": st.get("title") or plan.get("title") or book, "author": st.get("author") or plan.get("author") or "",
            "n": n, "lesson_title": lesson.get("title", ""), "key_idea": lesson.get("key_idea", ""), "summary": plan.get("summary", ""),
            "subtitle": meta.get("subtitle", ""), "script": "\n".join(parts).strip(), "cover": cover, "book_art": book_art}
