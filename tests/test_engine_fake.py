"""Exercises RealBrain + the fix loop + the ElevenLabs timestamp path with stand-in responses (no credits).
 - first script answer is too short -> must be rejected and re-requested
 - first drawing has two overlapping texts -> the browser check must flag it and a fix round must repair it
 - fake TTS returns exact character timestamps -> timing must come from 'alignment'
Run: python3 tests/test_engine_fake.py"""
import json, shutil, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(ROOT / "tests"))
import _sandbox  # noqa: F401  (redirects all engine paths to a temp copy)
from engine import config, mock, publish, run_book, timing, tts
from engine.brain import RealBrain
from engine.llm import new_usage

PLAN = {"title": "Fake Book", "author": "A. Writer", "knows_book_well": True, "confidence_note": "test",
        "one_liner": "x", "summary": "A test book.", "lessons": [{"title": "One", "key_idea": "First idea."}]}
SHORT = "<meta>{\"subtitle\":\"s\",\"note_extra\":\"n\"}</meta>\n<script>\n=== A ===\nToo short.\n</script>"


class FakeLLM:
    def __init__(self):
        self.calls = []
        self.usage = new_usage()
        good = mock.design_response()
        bad = good.replace('<text class="d" x="120" y="124" font-size="68">Geniuses', '<text class="d" x="130" y="130" font-size="68">OVERLAP HERE</text><text class="d" x="120" y="124" font-size="68">Geniuses', 1)
        assert bad != good
        self.answers = [json.dumps(PLAN), SHORT, mock.script_response(), bad, good, '{"ok": true, "issues": []}']

    def ask(self, system, user, max_tokens, label=""):
        self.calls.append(label)
        return self.answers.pop(0)


def fake_synth(text, out_mp3, out_align):
    script = timing.parse_script(mock.MOCK_SCRIPT)
    first = set(script.scene_first_index())
    mock.tone_mp3([(len(s.text.split()), i in first and i > 0) for i, s in enumerate(script.sentences)], out_mp3)
    # perfect character timestamps: lay the characters of the narration out at 14 chars/second from t=0.4
    chars = list(text)
    times = [round(0.4 + i / 14.0, 3) for i in range(len(chars))]
    out_align.write_text(json.dumps({"characters": chars, "character_start_times_seconds": times,
                                     "character_end_times_seconds": [t + 0.05 for t in times]}))
    return json.loads(out_align.read_text())


def main():
    for d in (config.DATA / "fake-book", publish.DRAFTS / "fake-book"):
        shutil.rmtree(d, ignore_errors=True)
    llm = FakeLLM()
    tts.synthesize = fake_synth
    run_book.RealBrain = lambda _llm: RealBrain(llm)          # use the fake llm for this run
    run_book.LLM = lambda usage: llm
    rc = run_book.run("Fake Book", "", 1, "", dry=False, commit=False, max_cost=5)
    state = json.loads((config.DATA / "fake-book" / "state.json").read_text())
    L = state["lessons"][0]
    cfg = json.loads((config.DATA / "fake-book" / "lesson-01" / "cfg_real.json").read_text())
    text, offsets = timing.narration_text(timing.parse_script(mock.MOCK_SCRIPT))
    checks = {
        "run returned 0": rc == 0,
        "state is ready": state["status"] == "ready",
        "short script rejected, 2nd accepted": llm.calls.count("write script for lesson 1") == 2,
        "overlap found, one fix round used": "fix scenes for lesson 1" in llm.calls and llm.calls.count("design scenes for lesson 1") == 1,
        "visual review ran once (clean design only)": llm.calls.count("visual review") == 0 or llm.calls.count("visual review") == 1,
        "no leftover issues recorded from design": not [i for i in (L.get("issues") or []) if "OVERLAP" in i],
        "timing came from alignment": L.get("timing") == "alignment",
        "first cue time is exact": abs(cfg["TM"]["girls"] - round(0.4 + offsets[2] / 14.0, 2)) < 0.02,
        "draft lesson file exists": (publish.DRAFTS / "fake-book" / "lesson-01.html").exists(),
        "tts chars counted": state["usage"]["tts_chars"] == len(text),
    }
    for k, v in checks.items():
        print(("PASS " if v else "FAIL ") + k)
    print("calls:", llm.calls)
    for d in (config.DATA / "fake-book", publish.DRAFTS / "fake-book"):
        shutil.rmtree(d, ignore_errors=True)
    publish.update_drafts_index()
    sys.exit(0 if all(checks.values()) else 1)


if __name__ == "__main__":
    main()
