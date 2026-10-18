"""A Models-section explainer end to end with stand-in responses (no credits):
model prompts are used, the draft is marked as a model, and approving it publishes to site/models/<id>/ + models.json.
Run: python3 tests/test_model_fake.py"""
import json, shutil, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(ROOT / "tests"))
import _sandbox  # noqa: F401  (redirects all engine paths to a temp copy)
from engine import config, mock, publish, run_book, tts
from engine.brain import RealBrain
from engine.llm import new_usage
from test_engine_fake import fake_synth

PLAN = {"title": "x", "author": "Mental model", "knows_book_well": True, "one_liner": "x", "summary": "A thinking tool.",
        "lessons": [{"title": "Break it down, build it up", "key_idea": "Reason from facts, not copies."}]}


class FakeLLM:
    def __init__(self):
        self.prompts, self.usage = [], new_usage()
        self.answers = [json.dumps(PLAN), mock.script_response(), mock.design_response(), '{"ok": true, "issues": []}']

    def ask(self, system, user, max_tokens, label=""):
        self.prompts.append((label, system, user if isinstance(user, str) else ""))
        return self.answers.pop(0)


def main():
    shutil.copyfile(ROOT / "site" / "models.json", config.SITE / "models.json")
    llm = FakeLLM()
    tts.synthesize = fake_synth
    run_book.RealBrain = lambda _llm: RealBrain(llm)
    run_book.LLM = lambda usage: llm
    rc = run_book.run("First Principles Thinking", "", 10, "notes here", dry=False, commit=False, max_cost=5,
                      model_id="first-principles", category="Thinking Tools")
    slug = "model-first-principles"
    draft = json.loads((publish.DRAFTS / slug / "book.json").read_text())
    page = (publish.DRAFTS / slug / "lesson-01.html").read_text()
    labels = [p[0] for p in llm.prompts]
    script_p = next(p for p in llm.prompts if p[0].startswith("write script"))
    design_p = next(p for p in llm.prompts if p[0].startswith("design"))
    checks = {
        "run returned 0": rc == 0,
        "planned with the model prompt": labels[0] == "plan the model",
        "one lesson only": draft["planned"] == 1 and len(draft["lessons"]) == 1,
        "draft marked as model": draft.get("kind") == "model" and draft.get("model_id") == "first-principles",
        "script prompt is about a mental model": 'Mental model: "First Principles Thinking"' in script_p[2] and "NOT a book summary" in script_p[1],
        "design label": "MENTAL MODEL · THINKING TOOLS" in design_p[2] and "Book:" not in design_p[2],
        "page footnote": "mental model" in page and "from <em>" not in page,
    }
    publish.approve(slug)
    models = json.loads((config.SITE / "models.json").read_text())
    m = next(x for x in models["models"] if x["id"] == "first-principles")
    checks.update({
        "approved into site/models/<id>/": (config.SITE / "models" / "first-principles" / "lesson-01.html").exists()
                                            and (config.SITE / "models" / "first-principles" / "lesson-01.mp3").exists(),
        "draft removed": not (publish.DRAFTS / slug).exists(),
        "models.json points at it": m.get("video", {}).get("src") == "models/first-principles/lesson-01.html" and m["video"]["d"] > 0,
        "books.json untouched": not any(b["id"] == "first-principles-thinking" for b in json.loads((config.SITE / "books.json").read_text())["books"]),
        "real models.json untouched": "video" not in json.dumps(json.loads((ROOT / "site" / "models.json").read_text())["models"][0]),
    })
    bad = [k for k, v in checks.items() if not v]
    for k, v in checks.items():
        print(("PASS " if v else "FAIL ") + k)
    print("sandbox:", config.SITE)
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()
