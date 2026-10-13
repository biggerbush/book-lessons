#!/usr/bin/env python3
"""Render a cover frame (t = 3 s) for every lesson-NN.html in a folder.

    python3 tools/make_thumbs.py site/atomic-habits [--fonts DIR] [--t 3]

Each lesson loads Google Fonts from the network. In sandboxes where that is blocked,
pass --fonts pointing at a folder with node_modules/@fontsource/{bricolage-grotesque,
instrument-sans,dm-mono} (npm install those three) and the CSS request is answered locally,
so the thumbnails use the real typefaces.
"""
import argparse, base64, glob, os, re, sys
from playwright.sync_api import sync_playwright

FONTS = [  # family, weight, package
    ("Bricolage Grotesque", 500, "bricolage-grotesque"), ("Bricolage Grotesque", 800, "bricolage-grotesque"),
    ("Instrument Sans", 400, "instrument-sans"), ("Instrument Sans", 600, "instrument-sans"),
    ("DM Mono", 400, "dm-mono"), ("DM Mono", 500, "dm-mono"),
]

def local_css(fonts_dir):
    out = []
    for fam, w, pkg in FONTS:
        path = os.path.join(fonts_dir, "node_modules", "@fontsource", pkg, "files", f"{pkg}-latin-{w}-normal.woff2")
        b64 = base64.b64encode(open(path, "rb").read()).decode()
        out.append(f"@font-face{{font-family:'{fam}';font-weight:{w};font-style:normal;"
                   f"src:url(data:font/woff2;base64,{b64}) format('woff2')}}")
    return "\n".join(out)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("folder")
    ap.add_argument("--fonts", default=None)
    ap.add_argument("--t", type=float, default=3.0)
    ap.add_argument("--theme", default="light")
    a = ap.parse_args()
    css = local_css(a.fonts) if a.fonts else None
    files = sorted(glob.glob(os.path.join(a.folder, "lesson-*.html")))
    if not files:
        sys.exit("no lesson-*.html in " + a.folder)
    with sync_playwright() as p:
        b = p.chromium.launch()
        ctx = b.new_context(viewport={"width": 1280, "height": 1100}, color_scheme=a.theme)
        if css:
            ctx.route(re.compile(r"https://fonts\.googleapis\.com/.*"),
                      lambda r: r.fulfill(status=200, content_type="text/css", body=css))
            ctx.route(re.compile(r"https://fonts\.gstatic\.com/.*"), lambda r: r.abort())
        for f in files:
            n = re.search(r"lesson-(\d+)\.html", f).group(1)
            pg = ctx.new_page()
            pg.goto("file://" + os.path.abspath(f), wait_until="load")
            pg.evaluate("document.fonts.ready")
            pg.evaluate("""t => { const s = document.getElementById('seek');
                s.value = t; s.dispatchEvent(new Event('input', {bubbles: true})); }""", a.t)
            pg.wait_for_timeout(300)
            out = os.path.join(a.folder, f"thumb-{n}.jpg")
            pg.locator("#stageBox").screenshot(path=out, type="jpeg", quality=82)
            print("wrote", out, os.path.getsize(out) // 1024, "KB")
            pg.close()
        b.close()

if __name__ == "__main__":
    main()
