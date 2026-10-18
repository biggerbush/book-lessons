import sys, json
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import tests._sandbox as sb  # noqa: F401  (points the engine at a temp copy of the site)
from engine import categories, config

assert categories.clean(" a ,A,  b  c,, ") == ["a", "b c"]
assert len(categories.clean([str(i) for i in range(20)])) == categories.MAX_PER_BOOK
n = categories.apply({"atomic-habits": ["Habits", "habits", "New Cat"], "nope": ["x"]})
assert n == 1
d = json.loads((config.SITE / "books.json").read_text(encoding="utf8"))
b = next(x for x in d["books"] if x["id"] == "atomic-habits")
assert b["categories"] == ["Habits", "New Cat"], b["categories"]
idx = {c["name"]: c for c in d["categories"]}
assert idx["New Cat"]["count"] == 1 and idx["New Cat"]["slug"] == "new-cat"
assert d["categories"] == sorted(d["categories"], key=lambda c: (-c["count"], c["name"].lower()))
assert categories.apply({"atomic-habits": ["Habits", "New Cat"]}) == 0
print("categories ok")
