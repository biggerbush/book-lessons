"""Claude writes the carousel in the proven 'listicle story' format: hook cover -> relatable setup -> name the idea -> N numbered truths (what it is / try this + sketch) -> action -> save/share."""
from __future__ import annotations

import json
from pathlib import Path

from ..brain import parse_json
from ..config import log

EXAMPLE = Path(__file__).parent / "examples" / "deep-work-1.carousel.json"
TYPES = ("cover", "story", "define", "item", "action", "cta")
KINDS = ("bars", "fragments", "curves", "converge", "pie", "formula", "flow", "split", "calendar")

SYSTEM = """You write Instagram carousels for VisualGrowth (book lessons) in the style of the best educational creators: an editorial, grid-paper look with
heavy serif headlines, highlighter titles and hand-drawn sketch diagrams. People must want to SAVE and SHARE it.

STRUCTURE (8-11 slides):
1. cover: a numbered listicle hook, 6-11 words, title case, curiosity + payoff. e.g. "5 Truths About Focus That Will _Quietly_ Change Your Career",
   "7 Money Habits Rich People Never Talk About", "This Is How to _Actually_ Stop Procrastinating". One word in _italics_ for voice. "note" = a short handwritten aside (e.g. "from Deep Work\\nby Cal Newport").
2. story: build tension BEFORE any answer. A short punchy serif headline about the reader's life ("You've never been busier."), 2 short paragraphs, and a sketch that makes the problem visible.
3. define (optional) or story: name the book's idea / introduce the author's answer, so the list has a frame.
   The define/setup headline must NAME THE PROBLEM in plain words (e.g. "The problem isn't you. It's _shallow work_."), not announce that a name exists. Use "tag" on each term for a handwritten aside (e.g. "where most days go").
4..N. item slides, numbered 1..N (3-7 items; the cover's number must equal N): "title" (max 9 words) that DESCRIBES THE PROBLEM OR TENSION concretely, so it works on its own (good: "Long hours won't save distracted work", "Everyone's distracted, so focus is now a superpower", "\"Quick checks\" quietly drain your focus"; bad, too abstract: "Focus is rare and valuable", "Quality = time × intensity"), "what" (1-2 sentences, max 38 words, the idea in plain English),
   "try" (one concrete action or a question in _italics_). No "What it is" label: "what" is shown as a plain paragraph, and a "diagram". Each item must be a distinct, useful idea from the lesson, ordered so they build.
N+1. action: what to do tomorrow (head, 2-3 "steps", optional "challenge" question) with a calendar or other sketch.
Last. cta: a question that invites comments (e.g. "Which one hit _hardest_?"), body asking to save/send to a specific kind of person.

TEXT: **bold**, *highlighter* (1-2 key phrases per slide), _italic_. Spoken, warm, specific. Paraphrase; never quote more than a few words. Use only facts from the lesson text.

DIAGRAMS ({"kind": ...}):
fragments {"caption","segments":[4-7 short labels],"gold":"label for the tiny gold slot","gold_at":index}   - a day/history/process chopped into pieces
bars      {"bars":[{"label","value","top":"handwritten value"} x2-4],"note":"small source/caveat"}   - compare real numbers from the lesson
curves    {"up":"label","down":"label","gap":"handwritten point"}   - two trends diverging
converge  {"inputs":["2-3 short labels, use \\n to break"],"result":"label"}
pie       {"share":10-90,"main":"label","label":"handwritten note, \\n allowed"}
formula   {"parts":["result","a","b"],"ops":["=","×"]}
flow      {"steps":[{"t":"short","sub":"handwritten"} x2-4]}   - a story or process, last step is the payoff
split     {"columns":[{"t":"SHALLOW","items":[3-5]},{"t":"DEEP","items":[3-5]}]}
calendar  {"hours":["8:00",...5],"block":1,"label":"DEEP WORK","other":{"0":"email",...}}
Labels inside diagrams: max 18 characters per line.

Output ONLY JSON: {"title":"...","slides":[...]} - same shape as the example."""


def plan_for(src: dict, llm) -> dict:
    example = EXAMPLE.read_text(encoding="utf8")
    user = (f"BOOK: {src['book']} by {src.get('author', '')}\nLESSON {src['n']}: {src.get('lesson_title', '')}\nKEY IDEA: {src.get('key_idea', '')}\n\n"
            f"LESSON TEXT (use only facts from here):\n{src['script'][:9000]}\n\nEXAMPLE (a different lesson; copy the format and quality, not the content):\n{example}")
    plan = parse_json(llm.ask(SYSTEM, user, 7000, "writing the carousel"))
    slides = [s for s in plan.get("slides", []) if isinstance(s, dict) and s.get("type") in TYPES]
    for s in slides:
        if isinstance(s.get("diagram"), dict) and s["diagram"].get("kind") not in KINDS:
            s.pop("diagram")
    if not slides or slides[0]["type"] != "cover":
        slides.insert(0, {"type": "cover", "head": src.get("lesson_title") or src["book"], "note": f"from {src['book']}"})
    if slides[-1]["type"] != "cta":
        slides.append({"type": "cta", "head": "Which one hit _hardest_?", "body": "Save this, and send it to someone who needs it.", "link": "visualgrowth.app"})
    plan["slides"] = slides[:14]
    log(f"  carousel: {len(plan['slides'])} slides")
    return plan
