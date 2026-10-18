"""Book engine: title in, reviewable draft out.

    python -m engine.run_book --title "Rich Dad Poor Dad" [--author ...] [--lessons 10] [--notes "..."] [--commit] [--dry-run]

Per lesson (the manual pipeline, automated):  script -> scenes + estimated timing -> browser checks and visual review
(fixing the scenes up to twice, BEFORE any voiceover is paid for) -> ONE voiceover -> real timing -> final build -> thumbnail.
Everything is saved as it goes, so a re-run resumes where it stopped and never pays twice for the same voiceover.
"""
from __future__ import annotations

import argparse
import base64
import html as htmllib
import json
import os
import shutil
import sys
import tempfile
from pathlib import Path

from . import htmlparts, publish, qa, timing
from .brain import MockBrain, RealBrain, node_syntax_problem, static_design_problems
from .config import CONFIG, DATA, MAX_DESIGN_FIX_ROUNDS, SITE, log, slugify
from .llm import LLM, cost_usd, new_usage

STAGES = ["new", "scripted", "designed", "voiced", "built"]


# ---------------------------------------------------------------- building one lesson page

def build_html(plan: dict, n: int, lesson: dict, meta: dict, script: timing.Script, cfg: dict, parts: dict,
               mp3: Path | None) -> str:
    e = htmllib.escape
    book, author = plan["title"], plan["author"]
    if mp3 is not None:
        audio = f'<audio id="vo" preload="auto" src="lesson-{n:02d}.mp3"></audio>'
    else:
        audio = '<audio id="vo" preload="none"></audio>'
    if plan.get("kind") == "model":
        note = (f"An animated explainer of the {e(book)} mental model. {e(meta.get('note_extra', '').strip())} Drawings are illustrative. "
                + ("Narration is an AI voice generated with ElevenLabs." if mp3 is not None else "This preview is silent."))
    else:
        note = (f"A paraphrased summary of &ldquo;{e(lesson['title'])}&rdquo;, from <em>{e(book)}</em> by {e(author)}. "
                f"{e(meta.get('note_extra', '').strip())} Drawings are illustrative. "
                + ("Narration is an AI voice generated with ElevenLabs." if mp3 is not None else "This preview is silent."))
    aria = (f"Animated explainer of the {book} mental model: {lesson['key_idea'].rstrip('.')}. "
            f"{len(script.scenes)} scenes{' with narration' if mp3 is not None else ''}.") if plan.get("kind") == "model" else (
            f"Animated summary of lesson {n} of {book}: {lesson['key_idea'].rstrip('.')}. "
            f"{len(script.scenes)} scenes{' with narration' if mp3 is not None else ''}.")
    p = {
        "title": e(f"{book} · Mental model" if plan.get("kind") == "model" else f"{book} Lesson {n}"), "aria": e(aria, quote=True), "scenes": parts["scenes"].strip("\n"),
        "note": note, "audio": audio, "muted_hidden": mp3 is None,
        **timing.cfg_to_parts(cfg),
        "setup": parts["setup"].strip("\n") + "\n\n" if parts["setup"].strip() else "\n",
        "render": parts["render"].strip("\n"), "helpers": "\n",
    }
    return htmlparts.assemble(p)


# ---------------------------------------------------------------- one lesson

def process_lesson(ctx: dict, state: dict, L: dict) -> None:
    brain, plan, slug, dry = ctx["brain"], state["plan"], state["slug"], state["dry"]
    n = L["n"]
    d = DATA / slug / f"lesson-{n:02d}"
    d.mkdir(parents=True, exist_ok=True)
    total = len(state["lessons"])
    outline = {"title": L["title"], "key_idea": L["key_idea"]}

    # 1. script
    if not (d / "script.txt").exists():
        meta, script_text, _ = brain.script(plan, n, outline)
        (d / "script.txt").write_text(script_text + "\n", encoding="utf8")
        (d / "meta.json").write_text(json.dumps(meta, ensure_ascii=False), encoding="utf8")
        L["stage"] = "scripted"
        publish.save_state(state)
    meta = json.loads((d / "meta.json").read_text(encoding="utf8"))
    script = timing.parse_script((d / "script.txt").read_text(encoding="utf8"))
    est_starts, est_end = timing.estimate(script)
    est_cfg = timing.make_config(script, est_starts, est_end, None)
    log(f"lesson {n}: {script.words} words, {len(script.scenes)} scenes, est. {est_end:.0f}s")

    # 2. scenes + checks (no voiceover credits are spent until these pass or the fix rounds run out)
    if not (d / "render.js").exists():
        parts, problems = None, []
        with tempfile.TemporaryDirectory() as tmp:
            tmp = Path(tmp)
            for rnd in range(MAX_DESIGN_FIX_ROUNDS + 1):
                parts = brain.design(plan, n, total, outline, meta, script, est_starts,
                                     previous=parts if rnd else None, issues=problems if rnd else None)
                problems = static_design_problems(parts, script)
                syntax = node_syntax_problem(parts)
                if syntax:
                    problems.append(syntax)
                if not problems:
                    page = tmp / f"est-{rnd}.html"
                    page.write_text(build_html(plan, n, outline, meta, script, est_cfg, parts, None), encoding="utf8")
                    res = qa.inspect(page, est_cfg["SC"], tmp / f"frames-{rnd}")
                    problems = res["errors"] + res["issues"]
                    if not problems and res["frames"]:
                        narration, k = {}, 0
                        for si, sc in enumerate(script.scenes):
                            narration[si] = " ".join(s.text for s in sc.sentences)
                        review = brain.review(qa.frame_blocks(res["frames"], narration))
                        if not review.get("ok", True):
                            problems = [f"scene {i.get('scene')}: {i.get('problem')} (fix: {i.get('fix')})"
                                        for i in review.get("issues", [])]
                log(f"  design round {rnd}: {'clean' if not problems else str(len(problems)) + ' problem(s)'}")
                if not problems:
                    break
                for pr in problems[:5]:
                    log(f"    - {pr}")
        L["issues"] = problems[:8]                      # anything left over is shown to the reviewer on the draft
        (d / "scenes.svg").write_text(parts["scenes"], encoding="utf8")
        (d / "setup.js").write_text(parts["setup"], encoding="utf8")
        (d / "render.js").write_text(parts["render"], encoding="utf8")
        L["stage"] = "designed"
        publish.save_state(state)
    parts = {"scenes": (d / "scenes.svg").read_text(encoding="utf8"), "setup": (d / "setup.js").read_text(encoding="utf8"),
             "render": (d / "render.js").read_text(encoding="utf8")}

    # 3. voiceover: ONE generation, never repeated
    mp3, align_path = d / "vo.mp3", d / "align.json"
    text, offsets = timing.narration_text(script)
    if not mp3.exists():
        if dry:
            from . import mock
            first = set(script.scene_first_index())
            mock.tone_mp3([(len(s.text.split()), i in first and i > 0) for i, s in enumerate(script.sentences)], mp3)
        else:
            from . import tts
            tts.synthesize(text, mp3, align_path)
        if not dry:
            state["usage"]["tts_chars"] += len(text)
        L["stage"] = "voiced"
        publish.save_state(state)

    # 4. real timing
    audio_len = timing.audio_seconds(mp3)
    starts, method = None, "silence"
    if align_path.exists():
        starts = timing.real_starts_from_alignment(json.loads(align_path.read_text(encoding="utf8")), text, offsets)
        method = "alignment"
    if starts is None:
        onsets, s0, s1 = timing.silence_onsets(mp3)
        starts, method = timing.real_starts_from_silence(est_starts, est_end, onsets, s0, s1), "silence"
    for i in range(1, len(starts)):                     # guard: strictly increasing
        starts[i] = max(starts[i], round(starts[i - 1] + 0.5, 2))
    real_cfg = timing.make_config(script, starts, audio_len, audio_len)
    (d / "cfg_real.json").write_text(json.dumps(real_cfg), encoding="utf8")
    log(f"  audio {audio_len:.1f}s (timing from {method}); lesson length {real_cfg['DUR']}s")

    # 5. final build, thumbnail, last automatic check with the real timings
    out_dir = publish.DRAFTS / slug
    out_dir.mkdir(parents=True, exist_ok=True)
    page = out_dir / f"lesson-{n:02d}.html"
    page.write_text(build_html(plan, n, outline, meta, script, real_cfg, parts, mp3), encoding="utf8")
    shutil.copyfile(mp3, out_dir / f"lesson-{n:02d}.mp3")        # the page streams its narration from this file (small page, fast start)
    qa.thumbnail(page, out_dir / f"thumb-{n:02d}.jpg", 3.0)
    res = qa.inspect(page, real_cfg["SC"])
    final_issues = res["errors"] + res["issues"]
    if final_issues:
        log(f"  final check found {len(final_issues)} issue(s) with the real timings (shown on the draft)")
    L["issues"] = (L.get("issues") or []) + final_issues[:4]
    L.update(stage="built", dur=real_cfg["DUR"], words=script.words, timing=method)
    L.pop("error", None)
    publish.save_state(state)


# ---------------------------------------------------------------- one book

def run(title: str, author: str, n_lessons: int, notes: str, dry: bool, commit: bool, max_cost: float,
        model_id: str = "", category: str = "") -> int:
    is_model = bool(model_id)
    if is_model:
        n_lessons = 1
    slug = ("dry-" if dry else "") + ("model-" + slugify(model_id) if is_model else slugify(title))
    if not slug:
        sys.exit("empty title")
    if not dry and not is_model and (SITE / "books.json").exists():
        for b in json.loads((SITE / "books.json").read_text(encoding="utf8"))["books"]:
            if b["lessons"] and slugify(b["title"]) == slug:
                log(f"'{b['title']}' is already published ({len(b['lessons'])} lessons). Delete it first if you want it rebuilt.")
                return 0
    state = publish.load_state(slug) or {"slug": slug, "title": title, "author": author, "dry": dry, "status": "planning",
                                         "usage": new_usage(), "lessons": [], "created": publish.now()}
    if is_model:
        state.update(kind="model", model_id=slugify(model_id), category=category)
    state.update(dry=dry)
    if state.get("plan"):
        state["plan"]["title"] = title                   # the title the user typed, not a long subtitle from an earlier plan
    if state.get("status") == "failed":                  # retrying a failed run: any new failure must be recorded again
        state.update(status="working", message="")
    notes_file = DATA / slug / "source-notes.txt"
    if notes:
        notes_file.parent.mkdir(parents=True, exist_ok=True)
        notes_file.write_text(notes, encoding="utf8")
    notes = notes_file.read_text(encoding="utf8") if notes_file.exists() else ""

    brain = MockBrain() if dry else RealBrain(LLM(state["usage"]))
    ctx = {"brain": brain}
    log(f"Book: {title}{' (DRY RUN: no credits used)' if dry else ''}")

    def checkpoint(msg: str) -> None:
        publish.save_state(state)
        publish.write_draft(state)
        if commit:
            publish.git_commit_push(msg)

    try:
        if state.get("status") == "needs_source":
            if not notes:
                log(state.get("message", "needs source notes"))
                return 0
            state.pop("plan", None)                          # notes were supplied: plan again with them
            state.update(status="planning", lessons=[], message="")
        if not state.get("plan"):
            plan = brain.plan_model(title, category, notes) if is_model else brain.plan(title, author, n_lessons, notes)
            state["plan"] = plan
            if not plan.get("knows_book_well") and not notes:
                state.update(status="needs_source", lessons=[],
                             message=f"Claude is not confident it knows this book ({plan.get('confidence_note', '')}). "
                                     "Run it again with source notes (chapter summaries or key points) in the Notes box.")
                checkpoint(f"Draft '{title}': needs source notes")
                log(state["message"])
                return 0
            state["lessons"] = [{"n": i + 1, "title": l["title"], "key_idea": l["key_idea"], "stage": "new"}
                                for i, l in enumerate(plan["lessons"])]
            checkpoint(f"Plan '{plan['title']}' ({len(state['lessons'])} lessons)")
        have = len(state["lessons"])
        if state.get("plan") and n_lessons > have and have > 0:      # asked for more lessons than the draft has: plan only the extra ones
            extra = brain.extend(state["plan"], [{"title": l["title"], "key_idea": l["key_idea"]} for l in state["lessons"]], n_lessons, notes)
            state["plan"]["lessons"] = state["plan"]["lessons"][:have] + extra
            state["lessons"] += [{"n": have + i + 1, "title": l["title"], "key_idea": l["key_idea"], "stage": "new"} for i, l in enumerate(extra)]
            checkpoint(f"Plan {len(extra)} more lessons for '{state['plan']['title']}' (now {n_lessons})")
        state.update(status="working", message="")
        for L in state["lessons"]:
            if L.get("stage") == "built":
                continue
            if cost_usd(state["usage"]) > max_cost:
                state.update(status="failed", message=f"Stopped: estimated spend passed the ${max_cost:.0f} limit. Re-run to continue.")
                checkpoint(f"Draft '{title}': stopped at cost limit")
                return 1
            try:
                process_lesson(ctx, state, L)
            except Exception as exc:                       # keep what is done, report, stop
                L["error"] = str(exc)[:400]
                state.update(status="failed", message=f"Lesson {L['n']} failed: {str(exc)[:300]}")
                checkpoint(f"Draft '{title}': lesson {L['n']} failed")
                raise
            checkpoint(f"Draft '{state['plan']['title']}': lesson {L['n']} of {len(state['lessons'])}")
        state.update(status="ready", message="")
        checkpoint(f"Draft '{state['plan']['title']}' ready for review")
        log(f"Done. Estimated cost ${cost_usd(state['usage']):.2f}. Review the draft, then approve it.")
        return 0
    except Exception as exc:
        log(f"FAILED: {type(exc).__name__}: {exc}")
        if state.get("status") != "needs_source" and not any(L.get("error") for L in state.get("lessons", [])):     # early failure (e.g. the planning call): record it for the admin page
            state.update(status="failed", message=f"{type(exc).__name__}: {str(exc)[:300]}")
            try:
                checkpoint(f"Draft '{title}': failed")
            except Exception as exc2:
                log(f"could not save the failure: {exc2}")
        return 1


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--title", required=True)
    ap.add_argument("--author", default="")
    ap.add_argument("--lessons", type=int, default=CONFIG.get("lessons_per_book", 10))
    ap.add_argument("--notes", default="")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--model-id", default="", help="make a Models-section explainer (one lesson) for this model id in site/models.json")
    ap.add_argument("--category", default="")
    ap.add_argument("--commit", action="store_true", help="commit and push after each lesson (used in GitHub Actions)")
    ap.add_argument("--max-cost", type=float, default=float(os.environ.get("BOOK_MAX_COST", "30")))
    a = ap.parse_args()
    if not 1 <= a.lessons <= 12:
        sys.exit("--lessons must be 1 to 12")
    sys.exit(run(a.title.strip()[:120], a.author.strip()[:120], a.lessons, a.notes.strip()[:20000], a.dry_run, a.commit, a.max_cost,
            a.model_id.strip()[:80], a.category.strip()[:60]))


if __name__ == "__main__":
    main()
