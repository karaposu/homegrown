"""
homegrown/core.py
──────────────────────────────────────────────────────────────────────────────
Core = one autonomous agent that runs the five-phase loop
(intent → plan → act → observe → reflect) until it emits `action:"finish"`
or hits TTL / max-cycle limits.

External contracts (replace with your own concrete classes)
• MyLLMService          – helper methods listed above
• MemoryStore           – dict-like {get, set} scoped to core_id
• ToolRunner            – run_tool(name, **args) + tool_manifest()
• GovernorInterface     – enqueue(core_id)   (optional)
"""

from __future__ import annotations
import json, time, uuid
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional

# ────────────────────────────────────────────────────────────────────────────
# lightweight protocols
# ────────────────────────────────────────────────────────────────────────────
class MemoryStore:
    def get(self, key: str, default: Any = None) -> Any: ...
    def set(self, key: str, value: Any) -> None: ...


class ToolRunner:
    def run_tool(self, name: str, **kwargs) -> Any: ...
    def tool_manifest(self) -> List[Dict[str, Any]]: ...


class GovernorInterface:
    def enqueue(self, core_id: str) -> None: ...


# ────────────────────────────────────────────────────────────────────────────
# config & scratch structures
# ────────────────────────────────────────────────────────────────────────────
@dataclass
class CoreConfig:
    max_cycles: int = 40
    ttl_seconds: int = 300
    clarity_threshold: float = 0.70     # instinct: escalate if below


@dataclass
class Scratch:
    intent: Optional[Dict[str, Any]] = None
    plan: Optional[Dict[str, Any]] = None
    observation: Optional[Dict[str, Any]] = None
    reflection: Optional[Dict[str, Any]] = None
    meta: Dict[str, Any] = field(default_factory=dict)


# ────────────────────────────────────────────────────────────────────────────
# the Core
# ────────────────────────────────────────────────────────────────────────────
class Core:
    def __init__(
        self,
        llm: "MyLLMService",
        memory: MemoryStore,
        tools: ToolRunner,
        governor: Optional[GovernorInterface] = None,
        *,
        core_id: Optional[str] = None,
        parent_id: Optional[str] = None,
        cfg: Optional[CoreConfig] = None,
    ) -> None:
        self.id: str = core_id or f"C-{uuid.uuid4().hex[:8]}"
        self.parent_id = parent_id
        self.llm = llm
        self.mem = memory
        self.tools = tools
        self.gov = governor
        self.cfg = cfg or CoreConfig()
        self.started_ts = time.time()
        self.cycles = 0

        # initialise memoised state
        if self.mem.get("scratchpad") is None:
            self.mem.set("scratchpad", Scratch().__dict__)
        if self.mem.get("history") is None:
            self.mem.set("history", [])

    # ───────────── helpers ──────────────────────────────────────────────────
    def _scratch(self) -> Scratch:
        return Scratch(**self.mem.get("scratchpad"))

    def _save_scratch(self, s: Scratch) -> None:
        self.mem.set("scratchpad", s.__dict__)

    def _hist(self) -> List[Dict[str, Any]]:
        return self.mem.get("history")

    def _push_hist(self, record: Dict[str, Any]) -> None:
        h = self._hist()
        h.append(record)
        self.mem.set("history", h[-100:])  # keep last 100 entries

    # ───────────── phase funcs ──────────────────────────────────────────────
    def _intent_phase(self, user_msg: str) -> Scratch:
        s = self._scratch()
        if s.intent:
            return s

        res = self.llm.calculate_user_intent(user_msg, self._hist())
        s.intent = res.content
        self._save_scratch(s)
        self._push_hist({"phase": "intent", "intent": s.intent})
        return s

    def _planning_phase(self, s: Scratch) -> Scratch:
        res = self.llm.plan_next_step(s.intent, self._hist(), self.tools.tool_manifest())
        s.plan = res.content
        self._save_scratch(s)
        self._push_hist({"phase": "planning", "plan": s.plan})
        return s

    def _action_phase(self, s: Scratch) -> Any:
        plan = s.plan or {}
        act = plan.get("action")
        if act == "call_tool":
            return self.tools.run_tool(plan["tool"], **plan.get("args", {}))
        if act == "spawn_new_core":
            return self.tools.run_tool("spawn_new_core", **plan["core_spec"], parent_id=self.id)
        if act == "ask_parent":
            self._push_hist({"phase": "action", "ask_parent": plan.get("prompt")})
            return None
        if act == "finish":
            return plan.get("spec")
        raise ValueError(f"Unknown action: {act!r}")

    def _observation_phase(self, s: Scratch, result: Any) -> Scratch:
        res = self.llm.summarise_observation(result, s.intent)
        s.observation = res.content
        self._save_scratch(s)
        self._push_hist({"phase": "observation", "obs": s.observation})
        return s

    def _reflection_phase(self, s: Scratch) -> Scratch:
        res = self.llm.reflect_cycle(s.__dict__, self._hist())
        s.reflection = res.content
        self._save_scratch(s)
        self._push_hist({"phase": "reflection", "refl": s.reflection})
        return s

    # ───────────── public loop ──────────────────────────────────────────────
    def run_cycle(self, user_msg: str = "") -> Optional[Dict[str, Any]]:
        if self.cycles == 0 and not user_msg:
            raise ValueError("First cycle requires initial user_msg")

        # TTL / cycle guards
        if time.time() - self.started_ts > self.cfg.ttl_seconds:
            return {"status": "timeout"}
        if self.cycles >= self.cfg.max_cycles:
            return {"status": "cycles_exceeded"}

        self.cycles += 1

        # five phases
        s = self._intent_phase(user_msg)
        s = self._planning_phase(s)
        act_result = self._action_phase(s)

        if (s.plan or {}).get("action") == "finish":
            return {"status": "finished", "spec": act_result}

        s = self._observation_phase(s, act_result)
        s = self._reflection_phase(s)

        # re-queue for another cycle if governor present
        if self.gov:
            self.gov.enqueue(self.id)

        return None


def main():
    
    from homegrown.myllmservice import MyLLMService
    from homegrown.memory   import RedisMemory
    from homegrown.tools    import LocalToolRunner
    from homegrown.governor import SimpleGovernor

    llm      = MyLLMService()
    memory   = RedisMemory(core_id="demo")       # or any dict-like
    tools    = LocalToolRunner()                 # tools registered via decorators
    governor = SimpleGovernor()

    core = Core(llm, memory, tools, governor)
    while True:
        result = core.run_cycle(user_msg="create documentation about post AI world")
        if result:                                # finished / timeout / cycles_exceeded
            print(result)
            break
        # governor normally schedules, but for demo we just loop tight





if __name__ == "__main__":
    main()
