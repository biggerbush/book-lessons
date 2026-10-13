"""Thin wrapper around the Anthropic API with token accounting."""
from __future__ import annotations

from .config import CONFIG, PRICES, TTS_PRICE_PER_1K_CHARS, log


def new_usage() -> dict:
    return {"input_tokens": 0, "output_tokens": 0, "cache_read_tokens": 0, "cache_write_tokens": 0,
            "tts_chars": 0, "claude_calls": 0}


def cost_usd(usage: dict, model: str | None = None) -> float:
    pin, pout = PRICES.get(model or CONFIG["claude_model"], (0, 0))
    claude = (usage.get("input_tokens", 0) * pin + usage.get("output_tokens", 0) * pout
              + usage.get("cache_read_tokens", 0) * pin * 0.1 + usage.get("cache_write_tokens", 0) * pin * 1.25) / 1e6
    return round(claude + usage.get("tts_chars", 0) / 1000 * TTS_PRICE_PER_1K_CHARS, 2)


class LLM:
    def __init__(self, usage: dict):
        import anthropic
        import os
        ws = os.environ.get("ANTHROPIC_WORKSPACE_ID", "").strip()          # only needed for keys not scoped to a workspace
        self.client = anthropic.Anthropic(default_headers={"anthropic-workspace-id": ws} if ws else None)
        self.usage = usage

    def ask(self, system: str, user, max_tokens: int, label: str = "") -> str:
        """One request. `user` is a string or a list of content blocks (text/image). The (long) system prompt is cached."""
        log(f"  claude: {label or 'request'}")
        with self.client.messages.stream(
            model=CONFIG["claude_model"], max_tokens=max_tokens,
            system=[{"type": "text", "text": system, "cache_control": {"type": "ephemeral"}}],
            messages=[{"role": "user", "content": user}],
        ) as stream:
            msg = stream.get_final_message()
        u = msg.usage
        self.usage["input_tokens"] += getattr(u, "input_tokens", 0) or 0
        self.usage["output_tokens"] += getattr(u, "output_tokens", 0) or 0
        self.usage["cache_read_tokens"] += getattr(u, "cache_read_input_tokens", 0) or 0
        self.usage["cache_write_tokens"] += getattr(u, "cache_creation_input_tokens", 0) or 0
        self.usage["claude_calls"] += 1
        if msg.stop_reason == "refusal":
            raise RuntimeError("Claude declined this request")
        if msg.stop_reason == "max_tokens":
            raise RuntimeError(f"Claude's answer was cut off ({label}); raise max_tokens")
        return "".join(b.text for b in msg.content if getattr(b, "type", "") == "text")
