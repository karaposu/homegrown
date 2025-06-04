# Homegrown

add this to instinct prompt
Rule of thumb: spawn when the sub-task has a different skill/tool mix or can run in parallel.

**Homegrown** is an LLM-native agent framework built around the idea that each core phase of an agent’s decision loop is itself an LLM “cell.” By treating Intent, Planning, Action, Observation and Reflection as self-contained function-like blocks, you get:

our goal with homegrown we are Making the swarm flexible self governing and self organizing as possible without freezing it into rigid schemas. we bellieve this is the key to unlock emergent behaviours

- **Minimal glue code** – just the orchestration; every “how” lives in prompts unless it is a tool.  
- **Maximal LLM calls** – swap models or tweak prompts to upgrade any phase.  
- **True composition** – chain, nest or replicate base loops to assemble higher-order workflows.

---

## Core Agent Loop

Each base agent is a simple function template with five phases:

| Phase           | Responsibility                                                                                 |
|-----------------|------------------------------------------------------------------------------------------------|
| **Intent**      | Understand **what** must be achieved (goal, constraints, success criteria).                    |
| **Planning**    | Devise **how** to achieve it (select tools or sub-agents, set parameters).                     |
| **Action**      | Execute the chosen step (tool call or user prompt).                                            |
| **Observation** | Summarize and assess **what happened** (interpret tool output against the intent).             |
| **Reflection**  | Diagnose stalls or violations and adjust working state (scratchpad) before the next cycle.     |

You can view the loop as a Python “function”:

```python
def agent_core_loop(user_input, memory):
    # 1. Intent Phase
    intent = understand_phase(user_input, memory)

    # 2. Planning Phase
    plan = planning_phase(intent, memory)

    # 3. Action Phase
    result = action_phase(plan, memory)

    # 4. Observation Phase
    observation = interpretation_phase(result, memory)

    # 5. Reflection Phase
    reflection = reflection_phase(observation, memory)

    return reflection  # or final spec
