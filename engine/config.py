"""Shared settings and paths for the book engine."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
DATA = ROOT / "engine-data"          # sources, scripts, scene code, voiceover MP3s, state (resumable, not deployed)
CONFIG = json.loads((ROOT / "config.json").read_text(encoding="utf8"))

# $ per million tokens (input, output). Used only for the cost estimate shown on a draft.
PRICES = {
    "claude-opus-5-5": (4.00, 20.00),
    "claude-sonnet-5-5": (2.00, 10.00),
    "claude-haiku-5-5": (0.10, 0.50),
}
TTS_PRICE_PER_1K_CHARS = 0.18        # approximate; depends on your ElevenLabs plan

WORDS_PER_SECOND = 2.5               # calm narrator, used for the pre-voice timing estimate
MIN_WORDS, MAX_WORDS = 270, 380      # accepted script range (target is ~300-330)
MAX_DESIGN_FIX_ROUNDS = 2            # automatic scene-fix rounds BEFORE the voiceover is paid for


def slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def norm_title(text: str) -> str:
    """Loose key to match 'The 4 Disciplines of Execution' with '4 Disciplines of Execution'."""
    t = re.sub(r"[^a-z0-9 ]+", "", text.lower()).strip()
    return re.sub(r"^(the|a|an) ", "", t)


def log(msg: str) -> None:
    from datetime import datetime
    print(f"[{datetime.now():%H:%M:%S}] {msg}", flush=True)
