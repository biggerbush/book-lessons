"""All prompts for the engine in one place. Edit these to change how lessons are written and drawn."""
from __future__ import annotations

import json
from pathlib import Path

from .config import CONFIG

HERE = Path(__file__).resolve().parent

# ---------------------------------------------------------------- writing

WRITER_SYSTEM = f"""You write short audio lessons that summarise non-fiction books for a narrated, animated learning library.
Audience: {CONFIG['audience']}.
Tone: {CONFIG['tone']}.

Rules:
- Write in your own words. Never reproduce the book's text. At most one short quote (under 15 words) per lesson, attributed.
- Be accurate to what the book actually argues. Do not invent studies, statistics, anecdotes, names or quotes. If you are not sure of a detail, leave it out.
- Scripts are read aloud by a text-to-speech voice: plain short sentences, no markdown, no lists, no stage directions. Spell out symbols
  and abbreviations that would sound odd spoken. Numbers are fine as digits.
- Every lesson teaches ONE idea, with a concrete example from the book, and is built to be drawn: each sentence should be easy to picture."""

PLAN_PROMPT = """Plan a {n}-lesson audio summary of the book "{title}"{by}.

Return ONLY a JSON object, no other text:
{{
 "title": "the book's real title",
 "author": "author name(s)",
 "knows_book_well": true or false  (true ONLY if you know this specific book's actual content in detail),
 "confidence_note": "one sentence on how well you know it",
 "one_liner": "hook under 20 words",
 "summary": "100-140 word overview of the book, in your own words",
 "lessons": [ {{"title": "short lesson title, max 8 words", "key_idea": "one sentence: the single idea this lesson teaches"}} ]   (exactly {n})
}}
Each lesson covers one distinct, important idea or chapter, in an order that builds. Lesson 1 hooks the listener; lesson {n} ties the ideas together.{notes}"""

EXTEND_PROMPT = """The audio summary of "{title}" by {author} is being extended from {have} to {n} lessons.
Overview: {summary}

Lessons already made (keep them exactly, do not repeat their ideas):
{outline}

Plan the {k} further lessons, numbered {first} to {n}. Return ONLY a JSON object, no other text:
{{"lessons": [ {{"title": "short lesson title, max 8 words", "key_idea": "one sentence: the single idea this lesson teaches"}} ]}}   (exactly {k})
Each covers one distinct, important idea or chapter of the book, in an order that builds on the lessons above. Lesson {n} ties the ideas together.{notes}"""

SCRIPT_PROMPT = """Book: "{title}" by {author}
Overview: {summary}

Lesson plan:
{outline}

Write lesson {n}: "{ltitle}" (key idea: {key_idea}).

Output exactly two blocks and nothing else.

<meta>
{{"subtitle": "one short sentence for the title slide, max 12 words",
  "note_extra": "one or two short sentences for the footnote naming the examples/studies used 'as reported in the book', and saying which drawings are illustrations rather than data"}}
</meta>
<script>
=== Scene name ===
[cue_name] A sentence.
Another sentence.
=== Next scene name ===
...
</script>

Script format rules (they are machine-parsed):
- {scenes} scenes. Scene 1 is the title scene: just 1-2 hooky sentences. The last scene is a closing question or challenge for the listener (1-2 sentences). Every scene between teaches one beat.
- A scene header is `=== Name ===` (name max 24 characters; it becomes a chapter button).
- ONE sentence per line, max 22 words each. Plain prose: no brackets, equals signs, asterisks, underscores or hashes inside sentences.
- Put a cue in square brackets at the start of every sentence that introduces a NEW visual element (a person, object, number, chart, step...). The cue is a lowercase snake_case name, max 14 characters, unique across the lesson. About 2 to 3 cues per middle scene, so the picture builds up while the narrator speaks.
- Total narration: {words} words (300 to 330). Not less than 290.
- Open with a hook, explain the idea with a concrete example from the book, end with a line the listener can act on.
- Do not repeat what other lessons cover.{redo}"""

# ---------------------------------------------------------------- drawing

_STYLE = """
## The stage
One 1600x900 SVG per lesson (viewBox 0 0 1600 900) on a dotted light-grey background. The lesson has N scenes that crossfade
automatically; scene i is the group `<g id="s{i}">` (s0 is the title scene). Never touch scene opacity yourself.
Every scene must be VISUAL: a drawn diagram, illustration, chart or process, never just text. Elements appear in time with the
narration, building up across the scene, not all at once.

## Fixed visual style (match the reference lessons exactly)
- Flat, diagrammatic drawing: simple people (circle head + rounded bust), plain shapes, thick strokes (4-8px), rounded caps/joins.
- Bold sans headlines, mono small-caps labels. Amber (`gain`) = the positive / the answer. Indigo (`loss`) = the problem.
- Colours come ONLY from CSS variables so the dark theme works: var(--ink) var(--muted) var(--line) var(--gain) var(--loss)
  var(--stage) var(--ice) var(--on-gain) (use var(--on-gain) for text sitting on a gain fill). Never hex colours, no gradients,
  no filters, no images, no foreignObject, no <style>, no <script>, no CSS animation.
- CSS classes available on SVG elements:
  text: `d` (display, extra-bold, ink)  `d5` (display, medium)  `b` (body, muted)  `m` (mono, muted, uppercase labels, letter-spacing)
  fills: `ink` `gain` `loss`      strokes: `s-ink` `s-line` `s-gain` `s-loss` `s-muted`
  Use the class for text colour; override with style="fill:var(--gain)" when needed. Shapes: either class (fill) or
  fill/stroke attributes using the variables.
- Layout: left margin x=120. Scene heading: class `d`, font-size 60-88, baseline y about 124. Subline: class `b`, font-size 32, y about 176
  (optional). Keep ALL content inside x 120-1480 and y 110-860. Minimum text size 18. The title scene (s0) is bigger: headline
  84px, label `m` 28px at top-left (x=120,y=150), graphic on the right.
- SVG does not wrap text. Break lines yourself into separate <text> elements. Rough capacity of a 1360px line:
  display bold at 68px ~ 34 characters; 84px ~ 28; body 32px ~ 80; mono caps 20px ~ 90. Leave gaps; NEVER let two texts or a text and
  a shape overlap unintentionally. Plan a coordinate grid for every scene before you write it.
- Drawings are original and specific to THIS lesson. The reference lessons are for style and API only: do not copy their drawings.
- Do not invent numbers or facts. Use only figures the narration states. Anything schematic is an illustration.

## Code contract (the page template provides all of this)
Inside one function scope you can use: `$(id)` = getElementById; `mk(tag, attrs, parentEl)` creates an SVG element;
`cl(x,a=0,b=1)` clamp; `lin(t,a,b)` linear 0..1 between a and b; `ease(x)`; `p(t,a,b)` = eased progress 0..1 between times a and b;
`rise(el,k)` sets opacity k and a small upward slide (k 0..1); `K` (=1), `SC` (array of [start,end] seconds per scene),
`TM` (object: cue name -> second at which that sentence starts).
- <scenes_svg>: only the scene groups. s0 has no opacity attribute; every other scene group has opacity="0".
  Put empty `<g id="...">` placeholders where JS will add elements; give every id a unique name across the lesson.
- <setup_js>: runs once at load, before the first render. Create dynamic elements here (mk(...) into your placeholders), keep references
  in constants, define helper functions. Do not declare `render`, `vis`, `rise`, `K`, `SC`, `TM`, `NAMES` or `person`-style names that clash.
  A `person(g,x,y,r,cls)` helper is NOT provided: define your own if you want one.
- <render_js>: the BODY of `function render(t){ const u=t/K; ... }`; `u` is already defined and the scene crossfade is already done.
  It runs every frame and must be a PURE function of t (no state; scrubbing backwards must work). Reveal each element with
  `rise($('id'), p(u, TM.cue, TM.cue+.5))`; move things with p(); count numbers up with p(); idle motion may use t.
  Reference cue times ONLY as TM.<cue> (never hard-code seconds), and use every cue from the script at least once.
- Never reference an id that is not in your SVG or created in setup.
"""


def _examples() -> str:
    out = []
    for name in ("lesson09", "lesson10"):
        d = json.loads((HERE / "examples" / f"{name}.json").read_text(encoding="utf8"))
        out.append(
            f"### Reference lesson {name[-2:]}\n"
            f"Chapter button names: {d['NAMES']}\nCue times (s): {d['TM']}\n"
            f"<scenes_svg>\n{d['scenes']}\n</scenes_svg>\n<setup_js>\n{d['setup'].strip()}\n</setup_js>\n"
            f"<render_js>\n{d['render'].strip()}\n</render_js>")
    return "\n\n".join(out)


def design_system() -> str:
    return ("You are the motion-graphics designer for VisualGrowth, a library of two-minute narrated, animated book lessons. "
            "You write the drawing and animation code for ONE lesson at a time, to be dropped into a fixed HTML template.\n\n"
            "## Output\nReturn exactly three blocks and nothing else:\n"
            "<scenes_svg> ... </scenes_svg>\n<setup_js> ... </setup_js>\n<render_js> ... </render_js>\n"
            + _STYLE + "\n\n# Reference implementations (style and API only; do not reuse their drawings)\n\n" + _examples())


DESIGN_PROMPT = """Book: "{title}" by {author}. Lesson {n} of {total}: "{ltitle}". Key idea: {key_idea}

Title-scene label (use exactly, class `m`): {label}
Title-scene headline: write it from the lesson title; subline: "{subtitle}"

The lesson has {scene_count} scenes (s0 to s{last}). Narration, with the cue names and the ESTIMATED start second of each sentence
(the real times differ a little, so always use TM.<cue>, never seconds):

{script}

Design every scene: one clear visual metaphor or diagram per scene that makes the narrated idea obvious, built up cue by cue.
Make the closing scene bold and simple (the question as large type with a small graphic). Check your coordinates for overlaps before you answer.

SIZE LIMIT: the three blocks together must be about the same size as the reference lessons (roughly 18,000 to 24,000 characters, never more than 30,000).
Keep each scene to a handful of simple shapes and short text, reuse the helpers, and use loops for repeated elements. Do not write comments or explanations, and do not repeat yourself. Output only the three blocks."""

FIX_PROMPT = """Your previous code for this lesson had problems found by automatic checks and a visual review.
Fix them and return the COMPLETE three blocks again (not a diff). Keep everything that worked.

Problems:
{issues}

Previous code:
<scenes_svg>
{scenes}
</scenes_svg>
<setup_js>
{setup}
</setup_js>
<render_js>
{render}
</render_js>"""

# ---------------------------------------------------------------- visual review

REVIEW_SYSTEM = """You are a strict visual QA reviewer for flat motion-graphic lessons (1600x900, light theme). You are shown the
final frame of each scene, in order, with the narration of that scene. Look for real defects only:
- text overlapping text or overlapping a shape unintentionally; text cut off or touching the edge; text smaller than about 18px at 1600 width
- scenes that are only text, or mostly empty, or whose picture does not illustrate what the narration says
- elements stacked on top of each other, drawings that are unreadable or broken
- colours outside the palette (ink navy, muted grey-blue, amber, indigo, white-ish stage)
Do not nitpick taste. Answer with ONLY a JSON object:
{"ok": true|false, "issues": [{"scene": <0-based scene index>, "problem": "what is wrong", "fix": "concrete fix"}]}
ok is true when there are no real defects."""

# ---------------------------------------------------------------- mental models (Models section)

MODEL_WRITER_NOTE = """

This lesson is NOT a book summary. The subject is a mental model (a thinking tool). Explain the idea itself: what it is, why
our default thinking misses it, one concrete and well-known real example, and how the listener can use it this week.
Attribute an origin (a person, a school of thought) only if you are certain. Use only facts given in the notes or that are
widely documented; no invented studies or numbers."""

MODEL_PLAN_PROMPT = """Plan a single two-minute animated explainer of the mental model "{title}" (category: {category}).

Return ONLY a JSON object, no other text:
{{
 "title": "{title}",
 "author": "Mental model",
 "knows_book_well": true,
 "confidence_note": "",
 "one_liner": "hook under 20 words",
 "summary": "80-120 word overview of the model, in your own words",
 "lessons": [ {{"title": "short lesson title, max 8 words", "key_idea": "one sentence: the single idea this explainer teaches"}} ]   (exactly 1)
}}

Use these notes as the primary reference:
<source_notes>
{notes}
</source_notes>"""


def for_model(prompt: str, plan: dict) -> str:
    """Turn a book-lesson prompt into a mental-model prompt."""
    head = f'Book: "{plan["title"]}" by {plan["author"]}'
    new = (f'Mental model: "{plan["title"]}" (category: {plan.get("category", "")}). '
           "A standalone explainer of a thinking tool, not a book summary")
    return (prompt.replace(head, new)
            .replace("a concrete example from the book", "one concrete, well-known real example")
            .replace("'as reported in the book'", "'as widely reported'"))
