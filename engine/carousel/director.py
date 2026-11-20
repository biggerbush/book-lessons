"""Claude writes the carousel as a story in micro-lessons: cover -> the reader's problem -> one step per slide (concept, mechanism, spiral, turn, technique, framework, example, plan) -> recap/save."""
from __future__ import annotations

import json
from pathlib import Path

from ..brain import parse_json
from ..config import log

EXAMPLE = Path(__file__).parent / "examples" / "deep-work-1.micro.json"
TYPES = ("cover", "lesson")
KINDS = ("day", "compare", "residue", "dips", "cards", "converge", "gap", "formula", "flow", "calendar", "tracker", "chain", "book")

SYSTEM = """You write Instagram carousels for VisualGrowth (animated book lessons). Style: a STORY told in MICRO-LESSONS, like the best educational
creators. Every slide = one on-brand graphic (navy + gold infographic, never cartoons) + a bold 2-line title + a few short serif lines.

STORY ARC (11-14 slides):
1. cover: "title" = a HOOK headline, 4-8 words, Title Case, that names the reader's problem or a surprising claim, with one word in _italics_
   (e.g. "Why Your Busiest Days Feel _Unproductive_", "Why Smart People Make _“Crazy”_ Money Choices"). Shown huge above the book.
   Under it the page adds "A 2-minute lesson from <book> by <author>" (set "minutes" if longer).
   "chips" = 3 teasers of WHAT'S INSIDE, named ideas or techniques from later slides that make people curious (2-4 words, e.g. "Attention residue",
   "The focus formula", "The 1-hour fix", "The 1950 vs 1970 test"), each with an icon.
   "swipe" = a 2-4 word promise on the swipe button that matches the hook (e.g. "Swipe to fix it", "Swipe to see why").
2. THE PROBLEM, felt by the reader (no tag): their everyday experience, ending with a turn like "Here's why, and how to fix it."
3..: micro-lessons, each tagged {"n":1,"label":"2-3 words"} and each moving the story ONE step:
   what's really going on (the book's concept) -> why it happens (the research/mechanism) -> how it spirals ("For example:" + arrow list) ->
   the bigger picture / why it matters -> the turn (the opportunity) -> the technique ("instead"/"try") -> a framework or formula ->
   a real example from the book -> a specific plan (IF ... THEN ...) -> how to track or repeat it.
Last: a save/recap slide with a "chain" graphic of the story's steps, a one-line takeaway in bold, and "Follow for lesson 2 ... visualgrowth.app".

WRITING:
- Titles: 3-8 words, Title Case, each a clear claim that moves the story ("Every Switch Leaves Something Behind", "So Your Focus Never Fully Arrives",
  "Use The Focus Formula", "Example: From Spreadsheets To Software"). No vague labels.
- Body: 2-4 short blocks. Short sentences. One idea per slide. **bold** the key phrase, *highlight* at most one phrase, _italic_ for named terms.
  Blocks can be: "a sentence", {"list":[...],"style":"bullet|arrow|num"}, {"instead":"...","try":"..."}, {"big":"a rule or quote to remember"}.
- Paraphrase; never quote more than a few words. Use only facts from the lesson text. Illustrative graphics say "(illustration)" or "(example)".

GRAPHICS ({"kind": ...}) - pick the one that SHOWS the slide's idea:
day {"caption","segments":[4-7],"gold_at":i,"gold":"label"} | compare {"left":{"t","icon","items":[3]},"right":{...}} |
residue {"a","a_icon","b","b_icon","share":10-80,"left_label","right_label","caption"} | dips {"checks":[0-1 x2-4],"icon","full","x0","x1"} |
cards {"items":[{"t","icon","sub","hl"} x2-3]} | converge {"inputs":[2-3 short],"result","icon"} | gap {"up","down","gap"} |
formula {"parts":[result,a,b],"icons":[3],"note"} | flow {"steps":[{"t","sub","icon"} x2-4]} |
calendar {"hours":[5],"block":i,"label","other":{"i":"label"},"rules":[3 short]} | tracker {"values":[5],"target","target_label","caption"} |
chain {"steps":[4-6 short]} | book {"chip"}
Icons: bulb clock target brain fire lock key heart rocket chart shield book eye phone coin mountain check cross star calendar sun seed cloud mail laptop bolt flag people door hourglass magnet compass pencil stairs scale

Output ONLY JSON: {"style":"micro","title":"...","slides":[...]} - same shape as the example."""


def plan_for(src: dict, llm) -> dict:
    example = EXAMPLE.read_text(encoding="utf8")
    user = (f"BOOK: {src['book']} by {src.get('author', '')}\nLESSON {src['n']}: {src.get('lesson_title', '')}\nKEY IDEA: {src.get('key_idea', '')}\n\n"
            f"LESSON TEXT (use only facts from here):\n{src['script'][:9000]}\n\nEXAMPLE (a different lesson; copy the format and quality, not the content):\n{example}")
    plan = parse_json(llm.ask(SYSTEM, user, 7000, "writing the carousel"))
    slides = [s for s in plan.get("slides", []) if isinstance(s, dict) and s.get("type", "lesson") in TYPES]
    for s in slides:
        if isinstance(s.get("graphic"), dict) and s["graphic"].get("kind") not in KINDS:
            s.pop("graphic")
    if not slides or slides[0]["type"] != "cover":
        slides.insert(0, {"type": "cover", "title": src["book"], "sub": src.get("lesson_title", "")})
    plan["slides"] = slides[:15]
    plan["style"] = "micro"
    log(f"  carousel: {len(plan['slides'])} slides")
    return plan
