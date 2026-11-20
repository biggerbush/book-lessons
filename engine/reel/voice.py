"""Voice and word timings for a reel.

Real mode: ONE ElevenLabs generation for the whole narration, with character timestamps, through the same code (and the same voice)
as the book lessons. It is saved to voice.mp3 + align.json; if voice.mp3 already exists it is reused and never generated again.
Dry mode: silent audio and estimated word timings, free, so the pictures can be tested."""
from __future__ import annotations

import json
import re
import subprocess
from pathlib import Path

from .. import tts
from ..config import log

PAD = 0.35          # seconds of picture before the voice starts (the hook lands first)
TAIL = 2.0          # seconds the end card stays after the last word


def duration(mp3: Path) -> float:
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(mp3)], capture_output=True, text=True, check=True).stdout
    return float(out.strip())


def words_from_alignment(alignment: dict, text: str) -> list[dict] | None:
    chars = alignment.get("characters") or []
    st, en = alignment.get("character_start_times_seconds") or [], alignment.get("character_end_times_seconds") or []
    if not chars or len(chars) != len(st) or len(st) != len(en):
        return None
    joined, pos, out = "".join(chars), 0, []
    for m in re.finditer(r"\S+", text):
        w = m.group(0)
        i = joined.find(w, pos)
        if i < 0:
            return None
        out.append({"w": w, "s": float(st[i]), "e": float(en[i + len(w) - 1])})
        pos = i + len(w)
    return out


def estimate(text: str, per_word: float = 0.40) -> list[dict]:
    """Rough timings for dry runs: longer words and sentence ends take longer."""
    t, out = 0.0, []
    for w in text.split():
        d = per_word * (0.55 + 0.09 * len(re.sub(r"\W", "", w)))
        out.append({"w": w, "s": round(t, 3), "e": round(t + d, 3)})
        t += d + (0.30 if re.search(r"[.!?]$", w) else 0.14 if re.search(r"[,:;]$", w) else 0.0)
    return out


def silent_mp3(path: Path, seconds: float) -> None:
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "lavfi", "-i", "anullsrc=r=44100:cl=mono", "-t", f"{seconds:.2f}", "-q:a", "9", str(path)], check=True)


def make(text: str, out: Path, dry: bool) -> tuple[Path, list[dict], bool]:
    """Returns (voice.mp3, words, is_real). Never calls ElevenLabs twice for the same reel."""
    mp3, align = out / "voice.mp3", out / "align.json"
    if mp3.exists() and not dry:
        log("  voice: reusing the saved voice.mp3 (no new ElevenLabs generation)")
        words = words_from_alignment(json.loads(align.read_text(encoding="utf8")), text) if align.exists() else None
        if words:
            return mp3, words, True
        words = estimate(text)
        scale = duration(mp3) / max(0.1, words[-1]["e"] + 0.2)
        return mp3, [{"w": x["w"], "s": x["s"] * scale, "e": x["e"] * scale} for x in words], True
    if dry:
        words = estimate(text)
        silent_mp3(mp3, words[-1]["e"] + 0.3)
        return mp3, words, False
    alignment = tts.synthesize(text, mp3, align)
    words = words_from_alignment(alignment, text) if alignment else None
    if not words:
        log("  voice: no usable timestamps; spreading the words over the audio length instead")
        words = estimate(text)
        scale = duration(mp3) / max(0.1, words[-1]["e"] + 0.2)
        words = [{"w": x["w"], "s": x["s"] * scale, "e": x["e"] * scale} for x in words]
    return mp3, words, True
