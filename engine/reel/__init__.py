"""Reel engine: turns one lesson of a book into a ~60 second vertical (9:16) video for Instagram / TikTok.

  python -m engine.reel --book deep-work --lesson 1            # real: Claude directs, ElevenLabs voices (one generation), renders
  python -m engine.reel --book deep-work --lesson 1 --dry      # free: hand-written/mock plan, silent audio with estimated timing
  python -m engine.reel --book deep-work --lesson 1 --plan p.json   # use (or edit) a plan instead of asking Claude

Pipeline: source lesson -> director (Claude writes the beats: narration + scene + transition) -> voice (ElevenLabs, word timings)
-> stage (HTML/SVG animation driven by a clock) -> render (Playwright steps the clock, ffmpeg encodes) -> sound effects + mix.
"""
