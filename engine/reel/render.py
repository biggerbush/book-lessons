"""Render: step the stage's clock frame by frame in headless Chromium (Playwright), then encode with ffmpeg.

Nothing is recorded in real time, so the result is the same on a slow or fast machine."""
from __future__ import annotations

import multiprocessing as mp
import shutil
import subprocess
from pathlib import Path

from ..config import log


def _worker(args):
    html, frames_dir, idxs, fps, scale, quality = args
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        b = p.chromium.launch(args=["--disable-gpu", "--font-render-hinting=none", "--hide-scrollbars"])
        pg = b.new_context(viewport={"width": 1080, "height": 1920}, device_scale_factor=scale).new_page()
        pg.goto(Path(html).resolve().as_uri())
        pg.evaluate("window.reelReady")
        for i in idxs:
            pg.evaluate("([t,f])=>window.seek(t,f)", [i / fps, i])
            pg.screenshot(path=str(Path(frames_dir) / f"{i:05d}.jpg"), type="jpeg", quality=quality)
        b.close()
    return len(idxs)


def sfx_events(html: Path) -> list[dict]:
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        b = p.chromium.launch(args=["--disable-gpu"])
        pg = b.new_page(viewport={"width": 1080, "height": 1920})
        pg.goto(html.resolve().as_uri())
        pg.evaluate("window.reelReady")
        ev = pg.evaluate("window.sfxEvents()")
        b.close()
    return ev


def frames(html: Path, out_dir: Path, dur: float, fps: int = 30, scale: float = 1.0, workers: int = 2, quality: int = 92, only: list[float] | None = None) -> Path:
    fdir = out_dir / "frames"
    if fdir.exists():
        shutil.rmtree(fdir)
    fdir.mkdir(parents=True)
    idxs = sorted({int(round(t * fps)) for t in only}) if only else list(range(int(dur * fps)))
    workers = max(1, min(workers, len(idxs)))
    chunks = [idxs[w::workers] for w in range(workers)]
    log(f"  render: {len(idxs)} frames at {int(1080 * scale)}x{int(1920 * scale)} with {workers} worker(s)")
    with mp.get_context("spawn").Pool(workers) as pool:
        pool.map(_worker, [(str(html), str(fdir), c, fps, scale, quality) for c in chunks])
    return fdir


def encode(fdir: Path, audio: Path | None, out_mp4: Path, fps: int = 30, crf: int = 18) -> None:
    cmd = ["ffmpeg", "-y", "-loglevel", "error", "-framerate", str(fps), "-i", str(fdir / "%05d.jpg")]
    if audio:
        cmd += ["-i", str(audio)]
    cmd += ["-c:v", "libx264", "-preset", "medium", "-crf", str(crf), "-maxrate", "10M", "-bufsize", "20M", "-pix_fmt", "yuv420p", "-r", str(fps), "-vf", "scale=trunc(iw/2)*2:trunc(ih/2)*2"]
    if audio:
        cmd += ["-c:a", "aac", "-b:a", "192k", "-shortest"]
    cmd += ["-movflags", "+faststart", str(out_mp4)]
    subprocess.run(cmd, check=True)
