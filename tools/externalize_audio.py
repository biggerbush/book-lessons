"""One-off/idempotent: move the base64 audio out of each lesson HTML into a sibling lesson-NN.mp3 and point the <audio> at it.
Also adds preconnect hints for Google Fonts. Usage: python3 tools/externalize_audio.py [root=site]"""
import base64, re, sys
from pathlib import Path

root = Path(sys.argv[1] if len(sys.argv) > 1 else "site")
URI = re.compile(r'src="data:audio/[a-z0-9]+;base64,([A-Za-z0-9+/=]+)"')
FONT = '<link rel="stylesheet" href="https://fonts.googleapis.com'
PRE = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
done = 0
for p in sorted(root.rglob("lesson-*.html")):
    s = p.read_text(encoding="utf8")
    m = URI.search(s)
    if m:
        data = base64.b64decode(m.group(1))
        assert data[:3] == b"ID3" or data[:2] in (b"\xff\xfb", b"\xff\xf3", b"\xff\xf2"), f"{p}: not an mp3"
        mp3 = p.with_suffix(".mp3")
        mp3.write_bytes(data)
        s = s[:m.start()] + f'src="{mp3.name}"' + s[m.end():]
        done += 1
    if "rel=\"preconnect\"" not in s and FONT in s:
        s = s.replace(FONT, PRE + FONT, 1)
    p.write_text(s, encoding="utf8")
print(f"externalised audio in {done} lesson(s)")
