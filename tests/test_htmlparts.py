"""Round trip: every existing lesson must be rebuilt byte-for-byte from the template + its own parts."""
import sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from engine import htmlparts as hp

def main():
    lessons = ROOT / "site" / "atomic-habits"
    base = hp.extract(hp.strip_audio((lessons / "lesson-09.html").read_text(encoding="utf8"))[0])
    hp.TEMPLATE_PATH.write_text(base["template"], encoding="utf8")
    ok = True
    for n in ("08", "09", "10"):
        original = (lessons / f"lesson-{n}.html").read_text(encoding="utf8")
        stripped, uri = hp.strip_audio(original)
        parts = hp.extract(stripped)
        rebuilt = hp.assemble(parts)
        if uri:
            rebuilt = rebuilt.replace("__B64__", uri)
        same = rebuilt == original
        ok &= same
        print(f"lesson-{n}: {'IDENTICAL' if same else 'DIFFERENT'} ({len(original):,} bytes)")
        if not same:
            import difflib
            a, b = original.splitlines(), rebuilt.splitlines()
            for line in list(difflib.unified_diff(a, b, lineterm="", n=0))[:12]:
                print("   ", line[:160])
    sys.exit(0 if ok else 1)

if __name__ == "__main__":
    main()
