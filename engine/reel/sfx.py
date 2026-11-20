"""Sound design: small synthesised effects (whooshes on every cut, pops, thuds, risers) mixed quietly under the voice.
No samples and no licences: everything is generated with numpy."""
from __future__ import annotations

import subprocess
import wave
from pathlib import Path

import numpy as np

SR = 44100
_rng = np.random.default_rng(7)


def _env(n, a=0.01, r=0.2):
    x = np.ones(n)
    na, nr = max(1, int(a * SR)), max(1, int(r * SR))
    x[:na] = np.linspace(0, 1, na)
    x[-nr:] *= np.linspace(1, 0, nr)
    return x


def _lp(x, k):
    c = np.cumsum(np.insert(x, 0, 0))
    y = (c[k:] - c[:-k]) / k
    return np.concatenate([np.zeros(k - 1), y])


def whoosh(dur=0.32, up=True):
    n = int(dur * SR)
    noise = _rng.standard_normal(n)
    t = np.linspace(0, 1, n)
    sweep = (_lp(noise, 6) - _lp(noise, 60)) * (t if up else 1 - t) ** 0.6
    return sweep / (np.abs(sweep).max() + 1e-9) * _env(n, 0.04, 0.16) * 0.55


def pop(f=520):
    n = int(0.16 * SR)
    t = np.arange(n) / SR
    return np.sin(2 * np.pi * (f + 900 * np.exp(-t * 40)) * t) * np.exp(-t * 28) * 0.5


def thud():
    n = int(0.45 * SR)
    t = np.arange(n) / SR
    return (np.sin(2 * np.pi * (46 + 90 * np.exp(-t * 18)) * t) * np.exp(-t * 7) + _lp(_rng.standard_normal(n), 30) * np.exp(-t * 40) * 0.5) * 0.9


def riser(dur=1.5):
    n = int(dur * SR)
    t = np.linspace(0, 1, n)
    tone = np.sin(2 * np.pi * np.cumsum(180 + 900 * t ** 2) / SR)
    nz = (_lp(_rng.standard_normal(n), 4) - _lp(_rng.standard_normal(n), 40)) * 0.6
    return (tone * 0.25 + nz * 0.4) * t ** 1.6 * _env(n, 0.05, 0.06)


def tick():
    n = int(0.05 * SR)
    t = np.arange(n) / SR
    return np.sin(2 * np.pi * 1800 * t) * np.exp(-t * 90) * 0.35


def build(events: list[dict], dur: float, out_wav: Path) -> Path:
    buf = np.zeros(int((dur + 0.5) * SR))
    for e in events:
        k, t = e.get("kind"), float(e.get("t", 0))
        if k == "whoosh":
            s = whoosh(0.3, up=e.get("tr") not in ("whip_right", "scale_back"))
        elif k == "pop":
            s = pop(480 + (hash(round(t, 2)) % 5) * 90)
        elif k in ("thud", "slam"):
            s = thud()
        elif k == "riser":
            s = riser()
        else:
            s = tick()
        i = int(max(0, t - (0.05 if k == "whoosh" else 0)) * SR)
        j = min(len(buf), i + len(s))
        buf[i:j] += s[:j - i]
    buf = np.tanh(buf * 0.9)
    pcm = (buf * 32767 * 0.8).astype("<i2")
    with wave.open(str(out_wav), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(pcm.tobytes())
    return out_wav


def mix(voice: Path, sfx_wav: Path, out: Path, sfx_gain=0.42) -> Path:
    """Voice stays on top; effects sit at about -8 dB under it."""
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", str(voice), "-i", str(sfx_wav), "-filter_complex",
                    f"[1:a]volume={sfx_gain}[s];[0:a][s]amix=inputs=2:duration=first:normalize=0,alimiter=limit=0.95[a]", "-map", "[a]", "-c:a", "aac", "-b:a", "192k", str(out)], check=True)
    return out
