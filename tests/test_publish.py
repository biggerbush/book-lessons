"""Draft -> approve/reject, using stand-in responses. Touches site/books.json and site/<book>/ then restores them.
Run: python3 tests/test_publish.py"""
import json, shutil, subprocess, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(ROOT / "tests"))
import test_engine_fake as T
from engine import config, mock, publish, run_book, tts
from engine.brain import RealBrain

TITLE = "Rich Dad Poor Dad"
ORIG_BOOKS = (config.SITE / "books.json").read_text(encoding="utf8")


def cleanup():
    for d in (config.DATA / "rich-dad-poor-dad", publish.DRAFTS / "rich-dad-poor-dad", config.SITE / "rich-dad-poor-dad", config.DATA / "dry-zz", publish.DRAFTS / "dry-zz"):
        shutil.rmtree(d, ignore_errors=True)
    (config.SITE / "books.json").write_text(ORIG_BOOKS, encoding="utf8")
    publish.update_drafts_index()


def main():
    cleanup()
    T.PLAN = dict(T.PLAN, title=TITLE, author="Robert Kiyosaki")
    llm = T.FakeLLM()
    llm.answers[0] = json.dumps(T.PLAN)
    tts.synthesize = T.fake_synth
    run_book.RealBrain = lambda _l: RealBrain(llm)
    run_book.LLM = lambda u: llm
    ok = {}
    ok["draft built"] = run_book.run(TITLE, "", 1, "", dry=False, commit=False, max_cost=5) == 0
    idx = json.loads((publish.DRAFTS / "index.json").read_text())["drafts"]
    ok["draft listed in index"] = any(d["slug"] == "rich-dad-poor-dad" and d["status"] == "ready" for d in idx)
    publish.approve("rich-dad-poor-dad")
    books = json.loads((config.SITE / "books.json").read_text())["books"]
    b = next(x for x in books if x["id"] == "rich-dad-poor-dad")
    ok["merged into the existing placeholder (no duplicate)"] = sum(1 for x in books if "rich dad" in x["title"].lower()) == 1
    ok["lesson published with title/duration"] = len(b["lessons"]) == 1 and b["lessons"][0]["d"] > 60 and set(b["lessons"][0]) == {"t", "b", "d"}
    ok["files moved to site/rich-dad-poor-dad/"] = (config.SITE / "rich-dad-poor-dad" / "lesson-01.html").exists() and (config.SITE / "rich-dad-poor-dad" / "thumb-01.jpg").exists()
    ok["draft folder gone, no book.json left in the public folder"] = not (publish.DRAFTS / "rich-dad-poor-dad").exists() and not (config.SITE / "rich-dad-poor-dad" / "book.json").exists()
    ok["removed from drafts index"] = not any(d["slug"] == "rich-dad-poor-dad" for d in json.loads((publish.DRAFTS / "index.json").read_text())["drafts"])
    # dry drafts must refuse approval
    run_book.run("zz", "", 1, "", dry=True, commit=False, max_cost=5)
    try:
        publish.approve("dry-zz"); ok["dry draft refused"] = False
    except SystemExit as e:
        ok["dry draft refused"] = "dry-run" in str(e)
    publish.reject("dry-zz")
    ok["reject removes the draft"] = not (publish.DRAFTS / "dry-zz").exists()
    for k, v in ok.items():
        print(("PASS " if v else "FAIL ") + k)
    cleanup()
    sys.exit(0 if all(ok.values()) else 1)


if __name__ == "__main__":
    main()
