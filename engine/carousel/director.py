"""Claude writes the carousel: 9-12 slides that tell one lesson as a story, insight first, mostly graphics."""
from __future__ import annotations

import json
from pathlib import Path

from ..brain import parse_json
from ..config import log

EXAMPLE = Path(__file__).parent / "examples" / "deep-work-1.carousel.json"
TYPES = ("cover", "chart", "dots", "donut", "meter", "formula", "versus", "steps", "big", "tips", "cta")

SYSTEM = """You design Instagram carousel posts (static 4:5 slides) for VisualGrowth, a brand of animated book lessons. White slides, navy and gold.
Turn ONE lesson into 9-12 slides that tell its story so well people save and share it.

Rules:
- Slide 1 'cover': the book card plus a hook headline (max 9 words) that makes people swipe.
- Slide 2 shows the core insight AS A GRAPHIC (chart, dots, donut or meter). Insight first, context later.
- Then: evidence (graphics) -> why it happens -> the book's name for it / a story from the lesson -> one 'big' statement slide -> 'tips' (what to do tomorrow) -> 'cta' last.
- Headlines: max 12 words, spoken English. Wrap 1-2 key words in *asterisks* for the gold highlighter. Body: max 22 words, optional.
- At least 5 slides are graphics (chart, dots, donut, meter, formula, versus, steps). Never two of the same type in a row (except none).
- Paraphrase; never quote more than a few words. Use only facts in the lesson text. If a graph only illustrates an idea, keep numbers simple and set "note":"illustration".

Slide types and fields (all also take "head", most take "body"):
cover   {}
chart   {"kind":"compound","up_label","down_label","up_end","down_end","note"}  or  {"kind":"line","points":[2-8 numbers],"labels":["",...],"end_label","note"}
dots    {"total":10|20|50|100,"hl":n,"big":"SHORT","note"}
donut   {"center":"SHORT","segments":[{"label","value"}x2-4],"suffix":"%","note"}
meter   {"rows":[{"label","value","hl":true?}x2-4],"max":100,"suffix":"%","note"}
formula {"parts":[{"t","icon"}x2-4],"ops":["=","×",...]}
versus  {"left":{"t","sub","icon"},"right":{"t","sub","icon"},"win":"left|right"}
steps   {"items":[{"t","sub"}x2-4]}
big     {"glyph":"?" optional}
tips    {"items":[{"t","sub","icon"}x2-4]}
cta     {"actions":["Save","Share","Follow"]}
Icons: bulb clock target brain fire lock key heart rocket chart shield book eye phone coin mountain check cross star calendar sun seed cloud mail laptop bolt flag people door hourglass magnet compass pencil stairs scale
Output ONLY JSON: {"title":"...","slides":[{"type":"cover","head":"..."}, ...]}"""


def plan_for(src: dict, llm) -> dict:
    example = EXAMPLE.read_text(encoding="utf8")
    user = (f"BOOK: {src['book']} by {src.get('author', '')}\nLESSON {src['n']}: {src.get('lesson_title', '')}\nKEY IDEA: {src.get('key_idea', '')}\n\n"
            f"LESSON TEXT (use only facts from here):\n{src['script'][:9000]}\n\nEXAMPLE (different book; copy the style, not the content):\n{example}")
    plan = parse_json(llm.ask(SYSTEM, user, 6000, "writing the carousel"))
    slides = [s for s in plan.get("slides", []) if isinstance(s, dict) and s.get("type") in TYPES]
    if not slides or slides[0]["type"] != "cover":
        slides.insert(0, {"type": "cover", "head": src.get("key_idea") or src.get("lesson_title") or src["book"]})
    if slides[-1]["type"] != "cta":
        slides.append({"type": "cta", "head": "Want the *full lesson*?", "body": f"Watch {src['book']} as an animated summary at *visualgrowth.app*"})
    plan["slides"] = slides[:14]
    log(f"  carousel: {len(plan['slides'])} slides")
    return plan
