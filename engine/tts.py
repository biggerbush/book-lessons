"""Voiceover: ONE ElevenLabs generation per lesson.

House rules (from the project brief): never regenerate to fix length or small issues, never retry a generation.
So: if vo.mp3 already exists we do not call the API again, and a failed request is NOT retried here; it raises, the lesson is
marked failed, and a human decides. The only second request is a fallback to the plain endpoint when the timestamps endpoint
rejects the request outright (HTTP 400/404/422, i.e. nothing was generated).
"""
from __future__ import annotations

import base64
import json
import os
from pathlib import Path

import requests

from .config import CONFIG, log


def synthesize(text: str, out_mp3: Path, out_align: Path) -> dict | None:
    """Write out_mp3 (and out_align when ElevenLabs returns character timestamps). Returns the alignment or None."""
    key = os.environ.get("ELEVENLABS_API_KEY")
    if not key:
        raise RuntimeError("ELEVENLABS_API_KEY is not set (add it as a repository secret)")
    voice, model = CONFIG["elevenlabs_voice_id"], CONFIG["elevenlabs_model_id"]
    fmt = CONFIG.get("elevenlabs_output_format", "mp3_44100_128")
    body = {"text": text, "model_id": model}
    headers = {"xi-api-key": key}
    base = f"https://api.elevenlabs.io/v1/text-to-speech/{voice}"

    log(f"  elevenlabs: generating {len(text)} characters (single generation, no retry)")
    r = requests.post(f"{base}/with-timestamps?output_format={fmt}", json=body, headers=headers, timeout=600)
    if r.status_code == 200:
        j = r.json()
        out_mp3.write_bytes(base64.b64decode(j["audio_base64"]))
        align = j.get("alignment")
        if align:
            out_align.write_text(json.dumps(align), encoding="utf8")
        return align
    if r.status_code in (400, 404, 422):
        log(f"  elevenlabs: timestamps endpoint rejected the request ({r.status_code}); nothing was generated, using the plain endpoint once")
        r = requests.post(f"{base}?output_format={fmt}", json=body, headers=headers, timeout=600)
        if r.status_code == 200:
            out_mp3.write_bytes(r.content)
            return None
    raise RuntimeError(f"ElevenLabs error {r.status_code}: {r.text[:300]}")
