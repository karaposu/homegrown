import pytest
from types import SimpleNamespace

# ── stubs ─────────────────────────────────────────────────────────────────
class DictMemoryStore(dict):
    def get(self, key, default=None):
        return super().get(key, default)
    def set(self, key, value):
        self[key] = value

def _res(content):
    return SimpleNamespace(content=content)

class DummyLLM:
    def calculate_user_intent(self, user_msg, history):
        return _res({"goal": "echo", "constraints": {}, "success_criteria": "done"})
    def plan_next_step(self, intent, history, tools_manifest):
        """
        • Before we have any 'observation' in the history → call the echo tool.
        • After an observation exists → emit a finish action.
        """
        saw_observation = any(h["phase"] == "observation" for h in history)

        if not saw_observation:
            # First planning pass: invoke the dummy echo tool
            return _res({
                "action": "call_tool",
                "tool":   "echo",
                "args":   {"text": "hello"}
            })

        # Second planning pass (after tool call & observation): finish the task
        return _res({
            "action": "finish",
            "spec":   {"ok": True}
        })

       
    def summarise_observation(self, result, intent):
        return _res({"summary": "tool returned"})
    def reflect_cycle(self, scratch, history):
        return _res({"success": True, "confidence": 0.9, "issues": [], "next_steps": []})

# ── tool definition ───────────────────────────────────────────────────────
from homegrown.tools.decorators import register_tool, record_metrics

@register_tool(
    name="echo",
    summary="Return the same text.",
    args_schema={"text": {"type": "str"}},
    returns_schema={"text": "str"},
    side_effects=[],
    idempotent=True,
)
@record_metrics("echo")
def echo(*, text):
    return {"text": text}

# ── imports under test ────────────────────────────────────────────────────
from homegrown.tool_runner import LocalToolRunner
from homegrown.governor    import SimpleGovernor
from homegrown.core        import Core

def test_core_happy_path():
    llm     = DummyLLM()
    memory  = DictMemoryStore()
    tools   = LocalToolRunner()
    gov     = SimpleGovernor()

    core = Core(llm, memory, tools, gov)
    # --- give the first user message explicitly --------------------------
    core.run_cycle(user_msg="dummy request")
    gov.register_core(core, run_immediately=True)
    gov.run(block=True)

    stats = gov.stats()
    assert stats["completed"] == 1
    assert tools.get_tool_stats("echo")["success"] >= 1
