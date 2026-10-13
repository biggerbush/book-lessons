"""Scripts, cue timings and the real-timing step.

Script format (written by Claude, parsed here):

    === Scene name (shown on the chapter chip) ===
    [cue_name] A sentence that introduces a new visual.
    A sentence with no cue.

One sentence per line. A cue is the moment a visual element should appear; its time is the start of that sentence.
Scenes are the crossfaded scenes of the lesson (the first is the title scene).

Timing steps, mirroring the manual pipeline:
  1. estimate()   sentence-length estimate -> "estimated" config (graphics are checked against this)
  2. voiceover generated ONCE
  3. real start of every sentence: exact character alignment from ElevenLabs if available,
     otherwise ffmpeg silencedetect (-35 dB, 0.22 s) snapped to the estimate -> "real" config
"""
from __future__ import annotations

import json
import math
import re
import subprocess
from dataclasses import dataclass, field

from .config import WORDS_PER_SECOND

CUE_RE = re.compile(r"^\[([a-z][a-z0-9_]{0,23})\]\s*(.+)$")
SCENE_RE = re.compile(r"^===\s*(.+?)\s*===\s*$")


@dataclass
class Sentence:
    text: str
    cue: str | None = None


@dataclass
class Scene:
    name: str
    sentences: list[Sentence] = field(default_factory=list)


@dataclass
class Script:
    scenes: list[Scene]

    @property
    def sentences(self) -> list[Sentence]:
        return [s for sc in self.scenes for s in sc.sentences]

    @property
    def words(self) -> int:
        return sum(len(s.text.split()) for s in self.sentences)

    def scene_first_index(self) -> list[int]:
        out, i = [], 0
        for sc in self.scenes:
            out.append(i)
            i += len(sc.sentences)
        return out


def parse_script(text: str) -> Script:
    scenes: list[Scene] = []
    seen: set[str] = set()
    for raw in text.strip().splitlines():
        line = raw.strip()
        if not line:
            continue
        m = SCENE_RE.match(line)
        if m:
            scenes.append(Scene(m.group(1)))
            continue
        if not scenes:
            raise ValueError("script line before the first '=== scene ===' header: " + line[:60])
        cue = None
        m = CUE_RE.match(line)
        if m:
            cue, line = m.group(1), m.group(2).strip()
            if cue in seen:
                raise ValueError(f"cue '{cue}' used twice")
            seen.add(cue)
        if re.search(r"[\[\]=*#_]|\{|\}", line):
            raise ValueError("sentence has markup or symbols that text-to-speech would read badly: " + line[:80])
        scenes[-1].sentences.append(Sentence(line, cue))
    if len(scenes) < 6:
        raise ValueError(f"only {len(scenes)} scenes; need 8 to 10")
    for sc in scenes:
        if not sc.sentences:
            raise ValueError(f"scene '{sc.name}' has no sentences")
    return Script(scenes)


def narration_text(script: Script) -> tuple[str, list[int]]:
    """The exact text sent to the voice (scenes are paragraphs) and the character offset of every sentence."""
    out, offsets = "", []
    for k, sc in enumerate(script.scenes):
        if k:
            out += "\n\n"
        for j, s in enumerate(sc.sentences):
            if j:
                out += " "
            offsets.append(len(out))
            out += s.text
    return out, offsets


# ---------------------------------------------------------------- estimate

def estimate(script: Script) -> tuple[list[float], float]:
    """Estimated start second of every sentence and the estimated end of speech."""
    starts, t = [], 0.3
    first = set(script.scene_first_index())
    for i, s in enumerate(script.sentences):
        if i in first and i:
            t += 0.45                                   # pause at a paragraph break
        starts.append(round(t, 2))
        t += len(s.text.split()) / WORDS_PER_SECOND + 0.18
    return starts, round(t, 2)


def make_config(script: Script, starts: list[float], speech_end: float, audio_len: float | None) -> dict:
    """K/DUR/ALEN/SC/NAMES/TM for the template. audio_len None -> estimated config (DUR = estimate + 3)."""
    length = audio_len if audio_len is not None else speech_end
    dur = int(length + 3.0 + 0.999)
    first = script.scene_first_index()
    bounds = [0.0] + [round(max(0.0, starts[i] - 0.3), 1) for i in first[1:]] + [float(dur)]
    sc = [[bounds[i], bounds[i + 1]] for i in range(len(script.scenes))]
    tm = {s.cue: round(starts[i], 2) for i, s in enumerate(script.sentences) if s.cue}
    return {
        "K": 1, "DUR": dur, "ALEN": round(audio_len, 2) if audio_len is not None else 0,
        "SC": sc, "NAMES": [s.name for s in script.scenes], "TM": tm,
    }


def cfg_to_parts(cfg: dict) -> dict:
    return {"K": str(cfg["K"]), "DUR": str(cfg["DUR"]), "ALEN": str(cfg["ALEN"]),
            "SC": json.dumps(cfg["SC"]), "NAMES": json.dumps(cfg["NAMES"], ensure_ascii=False),
            "TM": json.dumps(cfg["TM"])}


# ---------------------------------------------------------------- real timing

def audio_seconds(path) -> float:
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(path)],
                         capture_output=True, text=True, check=True)
    return float(out.stdout.strip())


def silence_onsets(path, noise_db: int = -35, min_silence: float = 0.12) -> tuple[list[tuple[float, float]], float, float]:
    """([(speech onset after a silence, length of that silence)], first speech start, end of speech) via ffmpeg silencedetect.
    A short minimum (0.12 s) finds every candidate; real_starts_from_silence() decides which ones are sentence starts."""
    r = subprocess.run(["ffmpeg", "-hide_banner", "-nostats", "-i", str(path),
                        "-af", f"silencedetect=noise={noise_db}dB:d={min_silence}", "-f", "null", "-"],
                       capture_output=True, text=True)
    length = audio_seconds(path)
    starts = [float(x) for x in re.findall(r"silence_start:\s*(-?[\d.]+)", r.stderr)]
    ends = [(float(a), float(b)) for a, b in re.findall(r"silence_end:\s*([\d.]+)\s*\|\s*silence_duration:\s*([\d.]+)", r.stderr)]
    speech_start = ends[0][0] if starts and starts[0] <= 0.05 and ends else 0.0
    speech_end = starts[-1] if starts and (not ends or starts[-1] > ends[-1][0]) else length
    cands = [(e, d) for e, d in ends if e > speech_start + 0.2 and e < speech_end - 0.3]
    return cands, max(0.0, speech_start), speech_end


def real_starts_from_silence(est_starts: list[float], est_end: float, cands: list[tuple[float, float]],
                             speech_start: float, speech_end: float, unmatched: float = 1.4) -> list[float]:
    """Assign sentence starts to speech onsets, in order, by dynamic programming over the SPACING between sentences.

    Matching sentence i (after a previously matched sentence k) to onset j costs how far the real gap differs from the gap the
    word counts predict, minus a reward for a long silence (sentence breaks are longer than breaths). Skipped sentences cost a
    fixed penalty and are interpolated. Spacing-based costs don't accumulate drift the way absolute positions do."""
    n, m = len(est_starts), len(cands)
    scale = (speech_end - speech_start) / max(1e-6, est_end - est_starts[0])
    pts = [(speech_start, 0.0)] + list(cands)                       # index 0 = the first sentence's start
    INF = float("inf")

    def pair(dreal: float, dest: float) -> float:
        return abs(dreal - dest * scale) / (0.5 + 0.35 * math.sqrt(max(dest, 0.0)))

    # best[(i, j)]: min cost with sentence i matched to pts[j] (sentence 0 <-> pts[0]); j >= 1 for i >= 1
    best = {(0, 0): 0.0}
    back: dict = {}
    for i in range(1, n):
        for j in range(1, m + 1):
            tj, dj = pts[j]
            reward = min(dj, 0.7)
            for k in range(max(0, i - 6), i):                      # at most 5 skipped sentences in a row
                for jp in range(0, j):
                    v = best.get((k, jp))
                    if v is None:
                        continue
                    c = v + (i - k - 1) * unmatched + pair(tj - pts[jp][0], est_starts[i] - est_starts[k]) - reward
                    if c < best.get((i, j), INF):
                        best[(i, j)] = c
                        back[(i, j)] = (k, jp)
    # close with the end of speech
    end_best, end_state = INF, None
    for (i, j), v in best.items():
        c = v + (n - 1 - i) * unmatched + pair(speech_end - pts[j][0], est_end - est_starts[i])
        if c < end_best:
            end_best, end_state = c, (i, j)
    out: list = [None] * n
    state = end_state
    while state is not None:
        i, j = state
        out[i] = pts[j][0]
        state = back.get(state)
    # interpolate skipped sentences between matched neighbours using the estimate
    k = 1
    while k < n:
        if out[k] is None:
            lo = k - 1
            hi = next((q for q in range(k, n) if out[q] is not None), None)
            t_hi, e_hi = (speech_end, est_end) if hi is None else (out[hi], est_starts[hi])
            span = max(1e-6, e_hi - est_starts[lo])
            for q in range(k, hi if hi is not None else n):
                out[q] = out[lo] + (est_starts[q] - est_starts[lo]) * (t_hi - out[lo]) / span
            k = hi if hi is not None else n
        else:
            k += 1
    return [round(x, 2) for x in out]


def real_starts_from_alignment(alignment: dict, text: str, offsets: list[int]) -> list[float] | None:
    """Exact sentence starts from ElevenLabs character timestamps; None if the alignment doesn't match the text."""
    chars = alignment.get("characters") or []
    times = alignment.get("character_start_times_seconds") or []
    if len(chars) != len(text) or len(times) != len(chars) or "".join(chars) != text:
        return None
    return [round(float(times[o]), 2) for o in offsets]
