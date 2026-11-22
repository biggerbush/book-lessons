"""The director: Claude turns one lesson into ~12-16 beats (a line of narration + a scene + a transition each), like a reel editor would."""
from __future__ import annotations

import json
from pathlib import Path

from ..brain import parse_json
from ..config import log
from . import schema

EXAMPLE = Path(__file__).parent / "examples" / "the-power-of-habit-1.plan.json"
LIST_EXAMPLE = Path(__file__).parent / "examples" / "the-power-of-habit-top10.plan.json"

SYSTEM = """You are a senior motion designer and short-form editor who makes Instagram Reels and TikToks for a brand called VisualGrowth (animated book summaries).

ILLUSTRATION RULE (most important): for every idea, pick or design the illustration that BEST represents that specific idea. Never reuse a scene just because a previous reel, carousel or template used it. Ask "what picture makes this idea obvious?" (a tangle for messy thinking, a decision tree for a choice, a crowded grid vs three options for too many choices) and draw that. When a carousel of the same content exists, its illustrations are the starting point: use the "illus" scene to animate the carousel's own picture rather than swapping it for a generic stock scene.

You turn ONE lesson of a book into a ~60 second vertical reel. The voice is the same warm, clear narrator as the long lessons, but the writing is tuned for the feed.

How you think:
- STRUCTURE: hook (beat 1) -> book card (beat 2, the 'intro' scene with an empty hook, while the narrator names the author and book in one short line) -> the idea, explained with animated graphics -> one thing to try -> end card.
- THE HOOK IS A GRAPHIC: beat 1 is a graphic scene (stat, dots, donut, chart, day, iceberg...) that shows the lesson's most surprising claim or number while the narrator says it in 8-12 words. Never open on the book, a title card or a definition.
- TEACH THE IDEA, DON'T RETELL THE LESSON: the lesson text is your source, not your script. Pull out the one idea and explain it directly to the viewer, about the viewer's own life. Skip the lesson's stories, characters and case studies unless the idea genuinely can't land without one, and then give it one beat at most.
- GRAPHICS, NOT CARDS: nearly every beat is an animated diagram: rings, lanes, icebergs, tallies, grids of people, charts, cycles, meters, donuts, timelines. Use choices/chat/countdown (text cards) once at most, and slam/quote twice at most. At least 5 different graphic kinds per reel.
- Turn every idea into a shape: proportions -> dots or donut; routines and daily life -> day; two systems where one fails -> tracks; hidden vs visible -> iceberg; tracking or a self-experiment -> tally; before/after -> meter or versus; change over time -> chart; steps -> timeline; loops -> cycle.
- READ IT OUT LOUD: any words on a graphic (ring items, iceberg items, meter labels, versus panels, timeline steps) are said by the narrator in the order they appear, in the same beat, and pop in as they are spoken. On-screen words match the spoken words (they can be shorter, never different). No side notes nobody reads.
- Pace: 9-13 beats, each 4-7 seconds, short spoken lines (6-18 words). Spoken English, contractions, no jargon, no filler.
- Numbers: real figures from the lesson text only. Simple illustrative maths is fine when labelled as rough ("about six hours in a sixteen-hour day"). Never invent research.
- Vary scenes: never the same scene twice in a row. Mix dark and amber themes for rhythm; light sparingly.
- Paraphrase the book. Never quote more than a few words.
- 125-150 words of narration in total (about 60 seconds). The last beat is always the 'cta' end card with a short spoken line (try one thing, then follow for the full lesson).
- Transitions: pick one per beat from the list, never the same twice in a row; match them to the energy.

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


LIST_RULES = """THIS REEL IS A LIST: "10 things to do from <book>". It covers the WHOLE book, not one lesson.
- STRUCTURE: beat 1 = the hook as a graphic (the book's most surprising number or claim, 8-12 spoken words) -> beat 2 = the book card ('intro' scene, empty hook) while the narrator says "Ten things to do from <book> by <author>." -> beats 3-12 = the 10 things, each with "num": 1..10 -> the 'cta' end card.
- EACH THING IS AN ACTION the viewer can take this week, said as an instruction ("Write down your cue.", "Keep the routine, swap the reward."), followed by the why in a few words. 10-14 spoken words per thing. The narrator says the number first: "One. ...", "Two. ...".
- Pick the 10 most useful, concrete actions across all the lessons, in a sensible order (understand -> change -> keep it going). No stories, no characters, no case studies, no history. If a famous study backs an action, half a sentence at most.
- EVERY THING GETS ITS OWN ANIMATED GRAPHIC that shows the action or its effect (day, tracks, iceberg, tally, cycle, meter, versus, donut, chart, dots, icon, stat, timeline, countdown...). Never slam, quote or intro for a numbered thing. At least 7 different scene kinds across the 10; never the same scene twice in a row.
- READ IT OUT LOUD still applies: words on a graphic are spoken in that beat, in order.
- The number badge and progress bar are drawn automatically from "num"; don't put the number in the graphic.
- 135-160 words in total (about 65 seconds). End card: "Pick one and start today. Follow for more."
Output JSON as usual, plus "format":"list" at the top level and "num" on each of the 10 thing beats."""


def direct_list(src: dict, llm, feedback: list[str] | None = None) -> dict:
    ex = LIST_EXAMPLE if LIST_EXAMPLE.exists() else EXAMPLE
    example = json.dumps(json.loads(ex.read_text(encoding="utf8")), indent=1)
    body = "\n\n".join(f"LESSON {l['n']}: {l['title']}\nKEY IDEA: {l['key_idea']}\n{l['script'][:3500]}" for l in src["lessons"])
    user = (f"BOOK: {src['book']} by {src.get('author', '')}\n\nTHE BOOK'S LESSONS (use only facts from here):\n{body[:30000]}\n\n"
            f"EXAMPLE OF THE VISUAL STYLE AND FORMAT (scenes and params; do not copy its content):\n{example}\n\nNow write the '10 things to do' reel plan for this book.")
    if feedback:
        user += "\n\nYour previous attempt had problems, fix all of them:\n- " + "\n- ".join(feedback)
    raw = llm.ask(SYSTEM + "\n" + LIST_RULES, user, 10000, "directing the list reel")
    plan = parse_json(raw)
    plan["format"] = "list"
    return schema.normalise(plan)


def plan_list(src: dict, llm) -> dict:
    plan = direct_list(src, llm)
    issues = schema.problems(plan)
    if issues:
        log("  director: asking for one repair: " + "; ".join(issues))
        try:
            fixed = direct_list(src, llm, issues)
            if len(schema.problems(fixed)) <= len(issues):
                plan = fixed
        except Exception as e:
            log(f"  director: repair failed ({e}); keeping the first plan")
    return plan
