import json
import logging
from typing import Any, Dict, Optional

from .agent_engine import AgentEngine
# from llmservice.generation_engine import GenerationRequest

from .myllmservice import MyLLMService

logger = logging.getLogger(__name__)

class Core:
    """
    Orchestrates the full intent → planning → action → observation → reflection cycle.
    Each phase is driven by an LLM call; models and prompts are overrideable.

    PHASES = ("intent", "planning", "action", "observation", "reflection")
    """

    
    def __init__(
        self,
        engine: AgentEngine,
        models: Optional[Dict[str, str]] = None,
        prompts: Optional[Dict[str, str]] = None,
        max_childcore_spawn_depth=3,
        max_childcore_spawn_branch=3,
    ):
        self.engine = engine
        self.myllmservice= MyLLMService()
        self.max_childcore_spawn_depth=max_childcore_spawn_depth
        self.max_childcore_spawn_branch=max_childcore_spawn_branch
        

        # Default model per phase
        default_models = {
            "intent": "gpt-4o",
            "planning": "gpt-4o",
            "observation": "gpt-4o",
            "reflection": "gpt-4o",
        }
        self.models = {**default_models, **(models or {})}
        
        # Default prompt templates per phase
        default_prompts = {
            "intent": (
                "You are the Intent Extractor.\n"
                "User said: \"{user_msg}\"\n"
                "History: {history}\n"
                "Tools: {tool_manifest}\n"
                "Return JSON with keys: goal, constraints, success_criteria."
            ),
            "planning": (
                "You are the Planner.\n"
                "Intent: {intent}\n"
                "History: {history}\n"
                "Tools: {tool_manifest}\n"
                "Return JSON with keys: action (call_tool/ask_user/finish), tool?, args?, prompt?, spec?."
            ),
            "observation": (
                "You are the Observer.\n"
                "Result of action: {result}\n"
                "Intent: {intent}\n"
                "Return JSON summarizing what happened."
            ),
            "reflection": (
                "You are the Reflector.\n"
                "Scratchpad: {scratch}\n"
                "History: {history}\n"
                "Return JSON with keys: success (bool), issues (list), next_steps (list)."
            ),
        }
        self.prompts = {**default_prompts, **(prompts or {})}

    # def _call_llm(self, prompt: str, model: str, operation: str) -> str:
    #     """
    #     Executes a single LLM generation request and logs latency and errors.
    #     """
    #     req = GenerationRequest(
    #         data_for_placeholders={},
    #         unformatted_prompt=prompt,
    #         model=model,
    #         output_type="str",
    #         operation_name=f"core_{operation}"
    #     )
    #     response = self.engine.llm.execute_generation(req)
    #     logger.debug("LLM %s response: %s", operation, response)
    #     return response.content

    def intent_phase(self, user_input: str) -> Dict[str, Any]:
        """
        Extracts goal, constraints, and success criteria from user input.
        Returns a dict with keys: goal, constraints, success_criteria.
        """
        history = self.engine.mem.get("history", [])
        result=self.myllmservice.calculate_user_intent(user_input ,history )
        result_json=result.content 
        print("result_json:   ", result_json)

       

        from string2dict import String2Dict
        s2d=String2Dict()
        
        data= s2d.run(result_json)
        # print(parsed_dict)

        # data = json.loads(result_json)
        self.engine.mem.set("scratchpad", {"intent": data})
        return result_json

    def planning_phase(self) -> Dict[str, Any]:
        """
        Decides the next action: call a tool, ask the user, or finish with a spec.
        Returns a dict representing the plan.
        """
        scratch = self.engine.mem.get("scratchpad", {})
        intent_json = json.dumps(scratch.get("intent"), indent=2)
        prompt = self.prompts["planning"].format(
            intent=intent_json,
            history=json.dumps(self.engine.mem.get("history", []), indent=2),
            tool_manifest=self.engine.tool_manifest(),
        )
        raw = self._call_llm(prompt, self.models["planning"], "planning")
        plan = json.loads(raw)
        scratch.update({"plan": plan})
        self.engine.mem.set("scratchpad", scratch)
        return plan

    def action_phase(self, plan: Dict[str, Any]) -> Any:
        """
        Executes the action decided in the planning phase.
        """
        action = plan.get("action")
        if action == "call_tool":
            tool_name = plan["tool"]
            args = plan.get("args", {})
            result = self.engine.run_tool(tool_name, **args)
            # Record tool result in history
            self.engine.observe("tool", {"update": result})
            return result
        if action == "ask_user":
            # External code should handle direct user interaction
            logger.info("Asking user: %s", plan.get("prompt"))
            return None
        if action == "finish":
            return plan.get("spec")
        raise ValueError(f"Unknown action '{action}'")

    def observation_phase(self, result: Any) -> Dict[str, Any]:
        """
        Interprets the result of the action in the context of the intent.
        Returns a dict summarizing the observation.
        """
        scratch = self.engine.mem.get("scratchpad", {})
        prompt = self.prompts["observation"].format(
            result=json.dumps(result, indent=2),
            intent=json.dumps(scratch.get("intent"), indent=2),
        )
        raw = self._call_llm(prompt, self.models["observation"], "observation")
        observation = json.loads(raw)
        scratch.update({"observation": observation})
        self.engine.mem.set("scratchpad", scratch)
        return observation

    def reflection_phase(self) -> Dict[str, Any]:
        """
        Reflects on successes, issues, and next steps.
        Returns a dict with keys: success, issues, next_steps.
        """
        scratch = self.engine.mem.get("scratchpad", {})
        prompt = self.prompts["reflection"].format(
            scratch=json.dumps(scratch, indent=2),
            history=json.dumps(self.engine.mem.get("history", []), indent=2),
        )
        raw = self._call_llm(prompt, self.models["reflection"], "reflection")
        reflection = json.loads(raw)
        scratch.update({"reflection": reflection})
        self.engine.mem.set("scratchpad", scratch)
        return reflection

    def run(self, user_input: str) -> Any:
        """
        Runs a complete cycle: intent → planning → action → [observation → reflection].
        Returns final spec if finished, else reflection output.
        """
        # Record user input in history
        self.engine.observe("user", {"text": user_input})

        # Phases
        intent = self.intent_phase(user_input)
        plan = self.planning_phase()
        result = self.action_phase(plan)

        # Terminal action
        if plan.get("action") == "finish":
            return result

        # Continue loop
        self.observation_phase(result)
        return self.reflection_phase()



def main():


    from .memory import DictMemoryStore
    TOOLS = {"echo": "ECHO_TOOL"}
    engine = AgentEngine(memory_store=DictMemoryStore(), tool_registry=TOOLS)

    core=Core(engine=engine)
    
    dummy_user_input= "how is weather today in Istanbul"
    core.intent_phase(dummy_user_input)




if __name__ == "__main__":
    main()
