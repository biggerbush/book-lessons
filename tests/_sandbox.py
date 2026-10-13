"""Point the engine at a throwaway copy of the site so tests can never touch real drafts, lessons or books.json.
Import this FIRST in a test, after putting the repo root on sys.path."""
import shutil, tempfile
from pathlib import Path
from engine import config, publish, run_book

TMP = Path(tempfile.mkdtemp(prefix="vg-test-"))
(TMP / "site").mkdir()
(TMP / "engine-data").mkdir()
import json
_d = json.loads((config.SITE / "books.json").read_text(encoding="utf8"))
for _b in _d["books"]:
    if _b["id"] == "rich-dad-poor-dad":
        _b["lessons"] = []                      # the test needs an unpublished placeholder
(TMP / "site" / "books.json").write_text(json.dumps(_d), encoding="utf8")
_paths = {"SITE": TMP / "site", "DATA": TMP / "engine-data", "DRAFTS": TMP / "site" / "drafts"}
for _m in (config, publish, run_book):
    for _k, _v in _paths.items():
        if hasattr(_m, _k):
            setattr(_m, _k, _v)
