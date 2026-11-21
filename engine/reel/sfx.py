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
    return sweep / (np.abs(sweep).max() + 1e-9) * _env(n, 0.05, 0.18) * 0.7


def pop(f=0):
    """A soft 'thock': a low, short body plus a puff of filtered noise. No pitched blip, so nothing beeps."""
    n = int(0.12 * SR)
    t = np.arange(n) / SR
    body = np.sin(2 * np.pi * (150 + 70 * np.exp(-t * 60)) * t) * np.exp(-t * 34)
    puff = _lp(_rng.standard_normal(n), 14) * np.exp(-t * 55) * 0.8
    return (body * 0.55 + puff * 0.5) * 0.7


def thud():
    """The big impact: sub drop + a short noise crack on top, with a little tail."""
    n = int(0.6 * SR)
    t = np.arange(n) / SR
    sub = np.sin(2 * np.pi * (42 + 110 * np.exp(-t * 16)) * t) * np.exp(-t * 6.5)
    crack = (_lp(_rng.standard_normal(n), 3) - _lp(_rng.standard_normal(n), 40)) * np.exp(-t * 60) * 0.9
    tail = _lp(_rng.standard_normal(n), 120) * np.exp(-t * 9) * 0.5
    return (sub * 0.95 + crack * 0.45 + tail * 0.35) * 0.95


def riser(dur=1.5):
    """A rising air sweep (filtered noise only, no tone)."""
    n = int(dur * SR)
    t = np.linspace(0, 1, n)
    nz = _rng.standard_normal(n)
    sweep = (_lp(nz, 5) - _lp(nz, 70)) * t ** 1.8
    return sweep / (np.abs(sweep).max() + 1e-9) * _env(n, 0.05, 0.08) * 0.6


def tick():
    """A barely-there tap (noise, no pitch)."""
    n = int(0.03 * SR)
    t = np.arange(n) / SR
    return _lp(_rng.standard_normal(n), 8) * np.exp(-t * 130) * 0.35


def build(events: list[dict], dur: float, out_wav: Path) -> Path:
    buf = np.zeros(int((dur + 0.5) * SR))
    ticks = 0
    for e in events:
        k, t = e.get("kind"), float(e.get("t", 0))
        if k == "whoosh":
            s = whoosh(0.3, up=e.get("tr") not in ("whip_right", "scale_back"))
        elif k == "pop":
            s = pop()
        elif k in ("thud", "slam"):
            s = thud()
        elif k == "riser":
            s = riser()
        else:
            ticks += 1
            if ticks % 3:
                continue
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
