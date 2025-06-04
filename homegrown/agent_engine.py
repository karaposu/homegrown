# agentkernel/agent_engine.py

import json
from typing import Any, Dict, List

from .models import Observation
from .tool import Tool
from .memory import DictMemoryStore
from .myllmservice import MyLLMService


class AgentEngine:
    """
    Runtime kernel providing:
      • LLM gateway (injected via llmservice)
      • pluggable memory (scratchpad + history)
      • tool execution helper
      • optional validators
      • interpretation hook
    """

    def __init__(
        self,
        memory_store: Any = None,
        tool_registry: Dict[str, Tool] = None,
        validators: List[Any] = None,
    ):
        self.mem       = memory_store or DictMemoryStore()
        self.tools     = tool_registry or {}
        self.validators = validators or []

        self.myllmservice= MyLLMService()

    def observe(self, obs: Observation) -> None:
        """
        Ingest a new observation:
          1. Append raw payload to history
          2. Merge any 'update' into scratchpad
          3. Interpret the observation and log that too
        """
        # 1) raw log
        self.mem.append("history", {"origin": obs.origin, "payload": obs.payload})

        # 2) merge structured updates
        if obs.origin in {"tool", "validator"} and "update" in obs.payload:
            scratch = self.mem.get("scratchpad", {})
            scratch.update(obs.payload["update"])
            self.mem.set("scratchpad", scratch)

        # 3) interpretation
        interp_obs = self.interpret(obs)
        # store the interpreted summary in history as well
        self.mem.append("history", {"origin": interp_obs.origin, "payload": interp_obs.payload})

    def interpret(self, obs: Observation) -> Observation:
        """
        Use the LLM to produce a one-sentence interpretation of the raw observation.
        Returns a new Observation(origin="interpretation", payload={"text": summary}).
        """
        
        result =self.myllmservice.step_progress_interpretor(obs.origin,obs.payload )
        summary = result.content
        return Observation(origin="interpretation", payload={"text": summary})

    def run_tool(self, name: str, **args) -> Any:
        """
        Execute a registered tool by name. Returns the tool's output.
        """
        if name not in self.tools:
            raise KeyError(f"Tool '{name}' not found in registry.")
        return self.tools[name].run(**args)

    def tool_manifest(self) -> str:
        """
        Return a JSON-formatted map of available tool names to their descriptions.
        Useful for injecting into prompts.
        """
        return json.dumps(
            {name: tool.description for name, tool in self.tools.items()},
            indent=2
        )
