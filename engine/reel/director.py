"""The director: Claude turns one lesson into ~16-22 beats (a line of narration + a scene + a transition each), like a reel editor would."""
from __future__ import annotations

import json
from pathlib import Path

from ..brain import parse_json
from ..config import log
from . import schema

EXAMPLE = Path(__file__).parent / "examples" / "deep-work-1.plan.json"

SYSTEM = """You are a senior motion designer and short-form editor who makes Instagram Reels and TikToks for a brand called VisualGrowth (animated book summaries).
You turn ONE lesson of a book into a ~60 second vertical reel. The voice is the same warm, clear narrator as the long lessons, but the writing is tuned for the feed.

How you think:
- HOOK: the first beat must stop the thumb in under 2 seconds: a bold claim, a surprising number, or a question the viewer can't ignore. Never start with "In this video" or the book title.
- One idea only. A reel can carry a single insight, one proof (a story or number from the lesson), one turn, and one takeaway. Cut everything else.
- Pace: the picture changes every 2-4 seconds. Short spoken lines (5-14 words). Spoken English, contractions, no jargon, no filler.
- Build tension then pay off: setup, the 'but', the reveal, the single thing to do tomorrow, then the end card.
- Vary scenes. Never three of the same scene in a row. Mix dark and amber themes for rhythm; use light sparingly, for a breath.
- Every beat's on-screen text must be the punchiest version of what is being said at that moment, not a transcript.
- Paraphrase the book. Never quote more than a few words. Never invent statistics, quotes or studies: use only facts that are in the lesson text provided.
- 130-150 words of narration in total (about 58 seconds). The last beat is always the 'cta' end card with a short spoken line inviting people to the full lesson.
- Transitions: pick one per beat from the list, never the same twice in a row; match them to the energy (whips for momentum, zoom_through for a reveal, glitch for 'but', circle for a turn, flip for a comparison, cut for a hard beat).

Output ONLY JSON: {"title":"internal title","beats":[{"say":"spoken line","scene":"slam","theme":"dark|amber|light","transition":"...","p":{...scene params...}}]}.
The 'say' lines joined with spaces are exactly what the narrator reads, so write them as speech (no stage directions, no emoji, no hashtags).

SCENES (params go in "p"):
""" + schema.SCENE_DOCS + "\nTRANSITIONS: " + ", ".join(schema.TRANSITIONS) + "\nICONS: " + " ".join(schema.ICONS) + "\n"


def direct(src: dict, llm, feedback: list[str] | None = None) -> dict:
    example = json.dumps(json.loads(EXAMPLE.read_text(encoding="utf8")), indent=1)
    user = (f"BOOK: {src['book']} by {src.get('author', '')}\nLESSON {src['n']}: {src.get('lesson_title', '')}\nKEY IDEA: {src.get('key_idea', '')}\n\n"
            f"LESSON TEXT (what the long lesson says; use only facts from here):\n{src['script'][:9000]}\n\n"
            f"EXAMPLE OF THE STYLE AND FORMAT (a different book; do not copy its content):\n{example}\n\nNow write the reel plan for this lesson.")
    if feedback:
        user += "\n\nYour previous attempt had problems, fix all of them:\n- " + "\n- ".join(feedback)
    raw = llm.ask(SYSTEM, user, 9000, "directing the reel")
    return schema.normalise(parse_json(raw))


def plan_for(src: dict, llm) -> dict:
    plan = direct(src, llm)
    issues = schema.problems(plan)
    if issues:
        log("  director: asking for one repair: " + "; ".join(issues))
        try:
            fixed = direct(src, llm, issues)
            if len(schema.problems(fixed)) <= len(issues):
                plan = fixed
        except Exception as e:                                   # keep the first plan rather than fail the reel
            log(f"  director: repair failed ({e}); keeping the first plan")
    return plan
