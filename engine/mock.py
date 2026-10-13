"""Dry-run content: exercises the whole engine (timing, build, browser checks, thumbnails, drafts, approval, git, deploy)
without spending any Claude or ElevenLabs credits. The 'lesson' it produces is a copy of Atomic Habits lesson 9's drawings
with filler narration, so it is clearly test content and the draft is flagged `dry` (it cannot be approved)."""
from __future__ import annotations

import array
import json
import math
import subprocess
import wave
from pathlib import Path

HERE = Path(__file__).resolve().parent

MOCK_SCRIPT = """=== Family and friends ===
This is a dry run test lesson that costs nothing to produce.
It checks the whole pipeline from script to published page.
=== Polgár’s idea ===
[girls] Imagine three girls growing up in one busy home.
[chess] Their parents put a chess board in the middle of the living room.
[books] Shelves of books about the game lined every wall of the house.
[pics] Pictures of famous players hung beside the books as quiet examples.
=== The sisters ===
[susan] The first sister became a champion at a very young age.
[sofia] The second sister also climbed to the very top of the sport.
[judit] The youngest sister broke a record that had stood for decades.
[y27] She stayed at the top of the rankings for many years after that.
=== Three groups ===
[close0] This part of the test talks about the people nearest to us.
[many0] Then it talks about the many people who make up our wider tribe.
[power0] Finally it talks about the powerful people we admire and copy.
=== The close ===
[obese] Placeholder numbers like this one only prove that counters animate in time.
The test narration continues for a few more words to fill the scene.
=== The many ===
[actors] A crowd of actors in a room agrees on one answer together.
[along] Then one real person decides whether to go along with the crowd.
[tribe] Going against the group is hard work for almost everybody alive.
=== The powerful ===
[status] People with status and respect shape what the rest of us do.
[approval] We want the approval that we imagine they receive from others.
=== Join a group ===
[run] If you want to run, spend your time with people who run.
[read] If you want to read more, join a book club near you.
[surr] Surround yourself with people who already have the habits you want.
=== The question ===
[q] This dry run is over, so check the draft and approve nothing.
"""

MOCK_META = {"subtitle": "A free test of the whole pipeline.",
             "note_extra": "This is dry-run test content, not a real lesson."}


def plan(title: str, n: int) -> dict:
    return {"title": title, "author": "Dry Run", "knows_book_well": True, "confidence_note": "mock",
            "one_liner": "A free test of the book engine.",
            "summary": "Dry-run test book. Nothing here comes from the real book; it exists to test the pipeline.",
            "lessons": [{"title": f"Dry run lesson {i + 1}", "key_idea": "Tests the pipeline end to end."} for i in range(n)]}


def script_response() -> str:
    return f"<meta>\n{json.dumps(MOCK_META)}\n</meta>\n<script>\n{MOCK_SCRIPT}</script>"


def design_response() -> str:
    d = json.loads((HERE / "examples" / "lesson09.json").read_text(encoding="utf8"))
    d["scenes"] = d["scenes"].replace("ATOMIC HABITS · CHAPTER 9", "DRY RUN · TEST LESSON")
    return (f"<scenes_svg>\n{d['scenes']}\n</scenes_svg>\n<setup_js>\n{d['setup']}\n</setup_js>\n"
            f"<render_js>\n{d['render']}\n</render_js>")


def tone_mp3(sentence_words: list[tuple[int, bool]], out: Path) -> None:
    """A fake narration: a quiet tone per sentence (2.3 words/s) with gaps, so silence detection has something to find.
    sentence_words = [(word_count, starts_new_scene), ...]"""
    rate = 22050
    buf = array.array("h")
    gap = lambda s: buf.extend([0] * int(rate * s))          # noqa: E731
    gap(0.4)
    for words, new_scene in sentence_words:
        if new_scene:
            gap(0.5)
        n = int(rate * max(1.0, words / 2.3))
        for i in range(n):
            env = min(1.0, i / 800, (n - i) / 800)
            buf.append(int(3500 * env * math.sin(2 * math.pi * 220 * i / rate)))
        gap(0.35)
    wav = out.with_suffix(".wav")
    with wave.open(str(wav), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(rate)
        w.writeframes(buf.tobytes())
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", str(wav), "-codec:a", "libmp3lame", "-b:a", "64k", str(out)], check=True)
    wav.unlink()
