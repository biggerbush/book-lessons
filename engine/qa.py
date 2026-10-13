"""Automatic visual checks of a built lesson, using a real browser.

For a handful of moments in every scene we seek the lesson, then look for:
  - JavaScript errors, and NaN/undefined leaking into drawing attributes
  - visible text that is cut off or touches the edge of the 1600x900 stage
  - visible text boxes that overlap each other
and we save a frame of every scene (just before its crossfade) for the visual review and for the draft preview.
"""
from __future__ import annotations

import base64
import io
from pathlib import Path

from .config import log

_BOXES_JS = """() => {
  const svg = document.querySelector('svg'); const vb = svg.viewBox.baseVal; const sr = svg.getBoundingClientRect();
  const k = vb.width / sr.width;
  const eff = el => { let o = 1; for (let e = el; e && e.nodeType === 1; e = e.parentElement) {
      const a = e.getAttribute('opacity'); if (a !== null && a !== '') o *= parseFloat(a);
      if (e.style && e.style.opacity !== '') o *= parseFloat(e.style.opacity);
      if (e === svg) break; } return o; };
  const out = [];
  for (const t of svg.querySelectorAll('text')) {
    const s = (t.textContent || '').trim(); if (!s) continue;
    if (eff(t) < 0.6) continue;
    const b = t.getBoundingClientRect(); if (b.width === 0 || b.height === 0) continue;
    out.push({text: s.slice(0, 40), x0: (b.left - sr.left) * k, y0: (b.top - sr.top) * k, x1: (b.right - sr.left) * k, y1: (b.bottom - sr.top) * k});
  }
  const bad = [];
  for (const e of svg.querySelectorAll('*')) for (const a of e.attributes) if (/NaN|undefined|Infinity/.test(a.value)) bad.push(e.tagName + '@' + (e.id || '?') + ' ' + a.name + '=' + a.value.slice(0, 30));
  return {boxes: out, bad: bad.slice(0, 5)};
}"""


def sample_times(sc: list[list[float]]) -> list[tuple[int, float]]:
    """(scene index, second) pairs to inspect: shortly after the start, the middle, and just before the crossfade."""
    out = []
    for i, (a, b) in enumerate(sc):
        end = b - 0.8 if i < len(sc) - 1 else b - 1.0
        out += [(i, round(a + 1.0, 2)), (i, round((a + b) / 2, 2)), (i, round(max(a + 1.2, end), 2))]
    return out


def _overlap(a: dict, b: dict) -> float:
    w = min(a["x1"], b["x1"]) - max(a["x0"], b["x0"])
    h = min(a["y1"], b["y1"]) - max(a["y0"], b["y0"])
    if w <= 0 or h <= 0:
        return 0.0
    small = min((a["x1"] - a["x0"]) * (a["y1"] - a["y0"]), (b["x1"] - b["x0"]) * (b["y1"] - b["y0"]))
    return (w * h) / max(small, 1.0)


def inspect(html_path: Path, sc: list[list[float]], frames_dir: Path | None = None) -> dict:
    """Returns {"errors": [...], "issues": [...], "frames": {scene_index: Path}}."""
    from playwright.sync_api import sync_playwright
    errors, issues, frames, seen = [], [], {}, set()
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1400, "height": 1000}, color_scheme="light")
        page.on("pageerror", lambda e: errors.append("JS error: " + str(e)))
        page.on("console", lambda m: errors.append("console error: " + m.text)
                if m.type == "error" and "Failed to load resource" not in m.text else None)
        page.goto("file://" + str(Path(html_path).resolve()), wait_until="load")
        page.evaluate("document.fonts.ready")
        page.wait_for_timeout(300)
        for idx, (scene, t) in enumerate(sample_times(sc)):
            page.evaluate("t => { const s = document.getElementById('seek'); s.value = t;"
                          " s.dispatchEvent(new Event('input', {bubbles: true})); }", t)
            page.wait_for_timeout(40)
            res = page.evaluate(_BOXES_JS)
            boxes = res["boxes"]
            for bad in res["bad"]:
                issues.append(f"scene {scene} at {t}s: invalid value in drawing attribute ({bad})")
            for b in boxes:
                if b["x0"] < 24 or b["y0"] < 24 or b["x1"] > 1576 or b["y1"] > 876:
                    key = ("edge", scene, b["text"])
                    if key not in seen:
                        seen.add(key)
                        issues.append(f"scene {scene} at {t}s: text \"{b['text']}\" is cut off or touches the edge of the stage "
                                      f"(box x {b['x0']:.0f}-{b['x1']:.0f}, y {b['y0']:.0f}-{b['y1']:.0f}; the safe area is x 24-1576, y 24-876)")
            for i in range(len(boxes)):
                for j in range(i + 1, len(boxes)):
                    if _overlap(boxes[i], boxes[j]) > 0.2:
                        key = ("ov", scene, boxes[i]["text"], boxes[j]["text"])
                        if key not in seen:
                            seen.add(key)
                            issues.append(f"scene {scene} at {t}s: text \"{boxes[i]['text']}\" overlaps text \"{boxes[j]['text']}\"")
            if frames_dir is not None and idx % 3 == 2:          # third sample of a scene = just before its crossfade
                frames_dir.mkdir(parents=True, exist_ok=True)
                f = frames_dir / f"scene-{scene:02d}.jpg"
                page.locator("#stageBox").screenshot(path=str(f), type="jpeg", quality=80)
                frames[scene] = f
        browser.close()
    return {"errors": errors[:8], "issues": issues[:25], "frames": frames}


def frame_blocks(frames: dict[int, Path], narration: dict[int, str]) -> list[dict]:
    """Anthropic content blocks: each scene's final frame (downsized) preceded by its narration."""
    from PIL import Image
    blocks = []
    for i in sorted(frames):
        im = Image.open(frames[i]).convert("RGB")
        im.thumbnail((900, 506))
        buf = io.BytesIO()
        im.save(buf, "JPEG", quality=78)
        blocks.append({"type": "text", "text": f"Scene {i} (final frame). Narration: {narration.get(i, '')}"})
        blocks.append({"type": "image", "source": {"type": "base64", "media_type": "image/jpeg",
                                                   "data": base64.b64encode(buf.getvalue()).decode()}})
    return blocks


def thumbnail(html_path: Path, out: Path, t: float = 3.0) -> None:
    """Cover frame at t seconds (what the library shows)."""
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page(viewport={"width": 1280, "height": 1100}, color_scheme="light")
        page.goto("file://" + str(Path(html_path).resolve()), wait_until="load")
        page.evaluate("document.fonts.ready")
        page.evaluate("t => { const s = document.getElementById('seek'); s.value = t;"
                      " s.dispatchEvent(new Event('input', {bubbles: true})); }", t)
        page.wait_for_timeout(300)
        page.locator("#stageBox").screenshot(path=str(out), type="jpeg", quality=82)
        b.close()
    log(f"  thumbnail {out.name} ({out.stat().st_size // 1024} KB)")
