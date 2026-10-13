"""Stress test for the silence-based fallback timing (used only when ElevenLabs gives no character timestamps).
Synthetic 'speech' with random speaking rates, comma/breath pauses and short sentence gaps; compares the recovered
sentence starts with the true ones. Run: python3 tests/test_timing.py"""
import array, math, os, random, subprocess, sys, tempfile, wave
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from engine import mock, timing

script = timing.parse_script(mock.MOCK_SCRIPT)
est_starts, est_end = timing.estimate(script)
first = set(script.scene_first_index())


def make(seed, path):
    r = random.Random(seed)
    wps, comma_p = r.uniform(2.0, 2.8), r.uniform(0.2, 0.9)
    gap_lo = r.uniform(0.1, 0.3); gap_hi = gap_lo + r.uniform(0.1, 0.4)
    rate = 22050; buf = array.array("h"); truth = []
    gap = lambda s: buf.extend([0] * int(rate * s))
    def tone(sec):
        n = int(rate * sec)
        for i in range(n):
            buf.append(int(3500 * min(1, i / 600, (n - i) / 600) * math.sin(2 * math.pi * 200 * i / rate)))
    gap(r.uniform(0.15, 0.5))
    for i, s in enumerate(script.sentences):
        if i in first and i > 0:
            gap(r.uniform(0.5, 1.0))
        truth.append(len(buf) / rate)
        words, k = s.text.split(), 0
        while k < len(words):
            m = r.randint(3, 7); seg = words[k:k + m]; k += m
            tone(len(seg) / wps * r.uniform(0.9, 1.1))
            if k < len(words) and r.random() < comma_p:
                gap(r.uniform(0.12, 0.35))
        gap(r.uniform(gap_lo, gap_hi))
    w = path + ".wav"
    with wave.open(w, "wb") as f:
        f.setnchannels(1); f.setsampwidth(2); f.setframerate(rate); f.writeframes(buf.tobytes())
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", w, "-codec:a", "libmp3lame", "-b:a", "64k", path], check=True)
    os.unlink(w)
    return truth


def main(cases=30):
    tmp = tempfile.mkdtemp()
    all_err = []
    for seed in range(cases):
        p = f"{tmp}/a{seed}.mp3"
        truth = make(seed, p)
        cands, s0, s1 = timing.silence_onsets(p)
        real = timing.real_starts_from_silence(est_starts, est_end, cands, s0, s1)
        all_err += [abs(a - b) for a, b in zip(real, truth)]
    n = len(all_err)
    over = lambda x: sum(1 for e in all_err if e > x) / n
    print(f"{cases} synthetic narrations, {n} sentence starts: mean error {sum(all_err)/n:.2f}s, "
          f"max {max(all_err):.2f}s, >0.5s: {over(0.5):.1%}, >1.0s: {over(1.0):.1%}")
    return over(1.0)


if __name__ == "__main__":
    sys.exit(0 if main() < 0.01 else 1)   # fail if more than 1% of sentence starts are off by over a second
