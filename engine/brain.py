"""The 'thinking' steps: plan a book, write a lesson script, design the scenes, review the frames.
RealBrain calls Claude; MockBrain returns canned content so the whole engine can be tested for free."""
from __future__ import annotations

import json
import re
import subprocess
import tempfile
import xml.etree.ElementTree as ET
from pathlib import Path

from . import mock, prompts as P
from .config import CONFIG, MAX_WORDS, MIN_WORDS, log
from .timing import Script, parse_script


# ---------------------------------------------------------------- parsing helpers

def parse_json(text: str) -> dict:
    i, j = text.find("{"), text.rfind("}")
    if i < 0 or j < i:
        raise ValueError("no JSON object in the response")
    return json.loads(text[i:j + 1])


def _block(text: str, tag: str) -> str:
    m = re.search(rf"<{tag}>\s*(.*?)\s*</{tag}>", text, re.S)
    if not m:
        raise ValueError(f"missing <{tag}> block")
    body = m.group(1)
    body = re.sub(r"^```[a-z]*\n|\n```$", "", body.strip())      # tolerate code fences inside the block
    return body


def parse_script_response(text: str) -> tuple[dict, str]:
    meta = parse_json(_block(text, "meta"))
    return meta, _block(text, "script")


def parse_design_response(text: str) -> dict:
    parts = {"scenes": _block(text, "scenes_svg"), "setup": _block(text, "setup_js") if "<setup_js>" in text else "",
             "render": _block(text, "render_js")}
    return parts


def static_design_problems(parts: dict, script: Script) -> list[str]:
    """Cheap checks before we even open a browser."""
    problems = []
    n = len(script.scenes)
    try:
        root = ET.fromstring('<svg xmlns="http://www.w3.org/2000/svg">' + parts["scenes"] + "</svg>")
        ids = {g.get("id") for g in root if g.get("id")}
        for i in range(n):
            if f"s{i}" not in ids:
                problems.append(f"missing scene group <g id=\"s{i}\"> (the lesson has {n} scenes, s0..s{n - 1})")
        extra = [i for i in ids if re.fullmatch(r"s\d+", i or "") and int(i[1:]) >= n]
        for e in extra:
            problems.append(f"scene group {e} does not exist in the script (only s0..s{n - 1})")
        seen = {}
        for el in root.iter():
            i = el.get("id")
            if i:
                seen[i] = seen.get(i, 0) + 1
        for i, c in seen.items():
            if c > 1:
                problems.append(f"duplicate id \"{i}\" in the SVG")
    except ET.ParseError as e:
        problems.append(f"the SVG is not well-formed XML: {e}")
    cues = [s.cue for s in script.sentences if s.cue]
    code = parts["setup"] + "\n" + parts["render"]
    for c in cues:
        if f"TM.{c}" not in code:
            problems.append(f"cue \"{c}\" from the script is never used as TM.{c}")
    if re.search(r"#[0-9A-Fa-f]{3,8}\b", parts["scenes"] + code):
        problems.append("hex colours found; use only the CSS variables")
    return problems


def node_syntax_problem(parts: dict) -> str | None:
    js = "(function(){\nconst $=0,mk=0,cl=0,lin=0,ease=0,p=0,rise=0,K=1,SC=[],TM={};\n" + parts["setup"] + "\nfunction render(t){const u=t/K;\n" + parts["render"] + "\n}\n})();"
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False) as f:
        f.write(js)
        name = f.name
    r = subprocess.run(["node", "--check", name], capture_output=True, text=True)
    Path(name).unlink(missing_ok=True)
    if r.returncode != 0:
        return "JavaScript syntax error: " + r.stderr.strip().splitlines()[-1][:300]
    return None


# ---------------------------------------------------------------- real

class RealBrain:
    dry = False

    def __init__(self, llm):
        self.llm = llm

    def plan(self, title: str, author: str, n: int, notes: str) -> dict:
        by = f" by {author}" if author else ""
        nt = f"\n\nUse these source notes as the primary reference:\n<source_notes>\n{notes}\n</source_notes>" if notes else ""
        text = self.llm.ask(P.WRITER_SYSTEM, P.PLAN_PROMPT.format(n=n, title=title, by=by, notes=nt), 6000, "plan the book")
        plan = parse_json(text)
        plan["lessons"] = plan["lessons"][:n]
        plan["title"] = title                         # keep the title the user typed (so approval matches the library entry)
        if author and not plan.get("author"):
            plan["author"] = author
        return plan

    def plan_model(self, title: str, category: str, notes: str) -> dict:
        text = self.llm.ask(P.WRITER_SYSTEM + P.MODEL_WRITER_NOTE,
                            P.MODEL_PLAN_PROMPT.format(title=title, category=category, notes=notes), 3000, "plan the model")
        plan = parse_json(text)
        plan["lessons"] = plan["lessons"][:1]
        plan.update(title=title, author="Mental model", kind="model", category=category, knows_book_well=True)
        return plan

    def extend(self, plan: dict, done: list[dict], n: int, notes: str) -> list[dict]:
        outline = "\n".join(f"{i + 1}. {l['title']}: {l['key_idea']}" for i, l in enumerate(done))
        nt = f"\n\nSource notes:\n<source_notes>\n{notes}\n</source_notes>" if notes else ""
        text = self.llm.ask(P.WRITER_SYSTEM, P.EXTEND_PROMPT.format(
            title=plan["title"], author=plan["author"], have=len(done), n=n, summary=plan["summary"], outline=outline,
            k=n - len(done), first=len(done) + 1, notes=nt), 4000, "plan the extra lessons")
        new = parse_json(text)["lessons"][:n - len(done)]
        if len(new) != n - len(done):
            raise ValueError(f"expected {n - len(done)} extra lessons, got {len(new)}")
        return new

    def script(self, plan: dict, n: int, lesson: dict, scenes: int = 9) -> tuple[dict, str, Script]:
        outline = "\n".join(f"{i + 1}. {l['title']}: {l['key_idea']}" for i, l in enumerate(plan["lessons"]))
        redo = ""
        for attempt in range(3):
            prompt = P.SCRIPT_PROMPT.format(
                title=plan["title"], author=plan["author"], summary=plan["summary"], outline=outline, n=n,
                ltitle=lesson["title"], key_idea=lesson["key_idea"], scenes=scenes, words=CONFIG.get("words_per_lesson", 310),
                redo=redo)
            system = P.WRITER_SYSTEM
            if plan.get("kind") == "model":
                prompt, system = P.for_model(prompt, plan), system + P.MODEL_WRITER_NOTE
            text = self.llm.ask(system, prompt, 5000, f"write script for lesson {n}")
            try:
                meta, script_text = parse_script_response(text)
                script = parse_script(script_text)
                if not MIN_WORDS <= script.words <= MAX_WORDS:
                    raise ValueError(f"the script has {script.words} words; it must be 300 to 330")
                return meta, script_text, script
            except (ValueError, KeyError, json.JSONDecodeError) as e:
                log(f"  script rejected: {e}")
                redo = f"\n\nYour previous answer was rejected: {e}. Output both blocks again, correcting this."
        raise RuntimeError("could not get a valid script after 3 attempts: " + redo.strip())

    def design(self, plan: dict, n: int, total: int, lesson: dict, meta: dict, script: Script, est_starts: list[float],
               previous: dict | None = None, issues: list[str] | None = None) -> dict:
        if previous is None:
            lines, k = [], 0
            for si, sc in enumerate(script.scenes):
                lines.append(f"Scene s{si}: {sc.name}")
                for s in sc.sentences:
                    cue = f"[{s.cue}] " if s.cue else ""
                    lines.append(f"  {cue}{est_starts[k]:.1f}s  {s.text}")
                    k += 1
            prompt = P.DESIGN_PROMPT.format(
                title=plan["title"], author=plan["author"], n=n, total=total, ltitle=lesson["title"], key_idea=lesson["key_idea"],
                label=(f"MENTAL MODEL · {plan.get('category', '').upper()}" if plan.get("kind") == "model"
                       else f"{plan['title'].upper()} · LESSON {n}"), subtitle=meta.get("subtitle", ""), scene_count=len(script.scenes),
                last=len(script.scenes) - 1, script="\n".join(lines))
            if plan.get("kind") == "model":
                prompt = P.for_model(prompt, plan)
        else:
            prompt = P.FIX_PROMPT.format(issues="\n".join("- " + i for i in (issues or [])), scenes=previous["scenes"],
                                         setup=previous["setup"], render=previous["render"])
        text = self.llm.ask(P.design_system(), prompt, 64000, f"{'fix' if previous else 'design'} scenes for lesson {n}")
        return parse_design_response(text)

    def review(self, blocks: list[dict]) -> dict:
        text = self.llm.ask(P.REVIEW_SYSTEM, blocks + [{"type": "text", "text": "Review these frames. Answer with the JSON object only."}],
                            2500, "visual review")
        try:
            return parse_json(text)
        except (ValueError, json.JSONDecodeError):
            log("  visual review answer was not JSON; treating as no findings")
            return {"ok": True, "issues": []}


# ---------------------------------------------------------------- mock (dry run)

class MockBrain:
    dry = True

    def plan(self, title: str, author: str, n: int, notes: str) -> dict:
        return mock.plan(title, n)

    def plan_model(self, title, category, notes):
        plan = mock.plan(title, 1)
        plan.update(title=title, author="Mental model", kind="model", category=category, knows_book_well=True)
        return plan

    def extend(self, plan, done, n, notes):
        return [{"title": f"Dry run lesson {i + 1}", "key_idea": "Filler idea for the pipeline test."} for i in range(len(done), n)]

    def script(self, plan, n, lesson, scenes=9):
        text = mock.script_response()
        meta, script_text = parse_script_response(text)
        script = parse_script(script_text)
        return meta, script_text, script

    def design(self, plan, n, total, lesson, meta, script, est_starts, previous=None, issues=None):
        return parse_design_response(mock.design_response())

    def review(self, blocks):
        return {"ok": True, "issues": []}
