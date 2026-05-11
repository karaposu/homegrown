---
status: active
---
# Finding: Cognitive OS, Prompt Library, Evidence, and Consciousness

## Question

What is Homegrown really building, is it best understood as an experimental cognitive operating system or as a prompt library, what empirical claims would need evidence, and could this approach plausibly contribute to machine consciousness?

The goal is a clear, honest conceptual position: what the system is, what it is not, which claims are currently speculative, which claims can be tested, what evidence would count, and how to talk about consciousness without overclaiming.

## Finding Summary

- Homegrown is best described as a **protocolized cognitive workflow layer for AI agents**. It defines named thinking disciplines, composes them into loops, records inquiry state, and turns completed work into durable findings.

- It is a **prompt library at the substrate level** because the current implementation is mostly reusable Markdown instructions. That label is true but incomplete.

- It is an **experimental cognitive operating system prototype** only if "operating system" means an organizing layer for cognitive processes. It is not yet an operating system in the strict implementation sense because execution is mostly prose-driven, validation is weak, and runtime enforcement is thin.

- The strongest scientific claim is not consciousness. The strongest testable claim is that structured cognitive process can improve AI-assisted work compared with ad hoc prompting.

- Empirical evidence must be claim-specific. Evidence for better answers would not prove better autonomy. Evidence for better metacognition would not prove consciousness.

- This approach may be consciousness-adjacent under some functional theories because it touches memory, reflection, recurrent evaluation, and attention routing. It does not currently provide evidence that consciousness has been created or unlocked.

- Homegrown already has **proto-self-maintenance**: reflection can inspect prior runs, extract process lessons, and lead to edits of the discipline fundamentals. What it does not yet have is autonomous continuous self-maintenance.

- The healthy next stage is validation plus light runtime enforcement: claims ledger, baseline comparisons, ablations, telemetry calibration, an explicit self-maintenance loop, and a working structural checker.

## Finding

### 1. What Is Being Built

Homegrown is building a protocolized cognitive workflow layer for AI agents.

That means it is trying to turn "thinking with an AI assistant" into explicit, reusable operations. The active materials define operations such as exploration, sensemaking, decomposition, comprehension, innovation, critique, reflection, and navigation. The loop runners then compose those operations into larger workflows such as MVL and MVL+.

The important thing is that Homegrown is not only asking the model to "think better." It is defining a process around the model: what to read, what artifact to produce, what failure modes to watch for, when to continue, and how to preserve the result.

The current implementation is still lightweight. Most of the system is Markdown instructions and protocol files. But the architecture points toward a cognitive runtime: a layer that manages cognitive operations, state, checkpoints, and final findings around a model.

### 2. Is It an Experimental Cognitive Operating System?

Yes, if the phrase is used carefully.

It is OS-like because it defines cognitive primitives, execution order, state files, lifecycle protocols, telemetry, and failure checks. A normal prompt library says "use this prompt." Homegrown says "run this inquiry through these cognitive phases, save these artifacts, check these failure modes, update state, conclude into a finding, and optionally reflect or navigate next."

That is more like an operating layer than a prompt catalog.

But no, it is not yet a cognitive operating system in the strict implementation sense.

A real operating system enforces execution. It schedules processes, manages resources, isolates failures, validates state, and recovers from errors. Homegrown mostly asks an AI assistant to comply with textual procedures. The missing `tools/structural_check.sh` file is a concrete local example: the architecture expects structural validation, but the enforcement tool is absent.

The honest phrase is: **an experimental cognitive operating system prototype**, or **a Markdown-native cognitive runtime in early protocol form**.

### 3. Is It a Prompt Library?

Yes, at the storage and distribution layer.

The system is made of reusable textual instructions. Those instructions are invoked as skills or commands. In that literal sense, Homegrown is a prompt library.

But "prompt library" is misleading if it is used as the whole identity.

A flat prompt library does not normally have inquiry folders, state files, loop runners, archived intermediate outputs, explicit failure modes, conclusion protocols, resume behavior, telemetry language, reflection, and navigation. Homegrown has those things. They turn the prompt files into parts of a larger workflow system.

The clean description is layered:

1. **Prompt substrate:** reusable Markdown instructions.
2. **Protocol layer:** procedures with phases, outputs, failure modes, and telemetry.
3. **Workflow layer:** MVL/MVL+ loops with inquiry state and final findings.
4. **Runtime ambition:** future enforcement, routing, validation, memory, and autonomous self-maintenance.
5. **Scientific status:** promising but not yet empirically validated.

### 4. What Would Empirical Evidence Look Like?

Empirical evidence means evidence for a specific claim, not evidence for the entire project in one stroke.

| Claim | What evidence would look like | Current status |
|---|---|---|
| MVL/MVL+ improves answer quality | Controlled comparison against strong baseline prompting, blind human ratings, downstream error/rework tracking | Testable, not yet shown |
| Each discipline adds causal value | Ablation tests: full MVL+ vs versions without exploration, decomposition, critique, or reflection | Testable, not yet shown |
| File-backed state improves continuity | Resume tasks across sessions and compare omissions, contradictions, and recovery time | Testable, plausible |
| Telemetry is meaningful | Check whether PROCEED/FLAG/RE-RUN and failure-mode warnings predict later human judgments | Testable, not yet calibrated |
| Reflection improves future runs | Track whether reflection findings change later specs and improve measured outcomes | Longitudinal, not yet shown |
| The system has proto-self-maintenance | Track whether reflection detects process failures, produces proposed changes, changes discipline fundamentals, and improves later runs | Partially present, not yet closed-loop |
| The system has autonomous continuous self-maintenance | Show that the system self-triggers monitoring, proposes changes, applies or requests them, evaluates outcomes, and retains/reverts changes without depending on ad hoc human initiation | Later-stage claim |
| The system increases autonomy | Measure how much work can proceed without human intervention while preserving quality | Later-stage claim |
| The system supports consciousness | Requires a named theory of consciousness plus evidence that the required mechanisms exist as an integrated agent, not only as isolated protocols | Speculative, not currently supported |

The first serious evaluation should be small: 10 to 20 real tasks, baseline vs MVL/MVL+, at least one blind judge, and explicit cost tracking. The important question is not whether the output looks structured. The important question is whether the structure changes decisions, catches errors, reduces missed assumptions, or improves downstream work.

### 5. Could This Unlock Consciousness?

The honest answer is: not on current evidence.

It might be relevant under some functional theories of consciousness. If consciousness depends heavily on organized recurrent cognition, working memory, self-monitoring, attention routing, and a persistent self-model, then Homegrown points at some adjacent ingredients. Reflection, navigation, inquiry memory, and looped critique are all consciousness-adjacent in that limited sense.

But the current system lacks major things that many theories would require. It does not have intrinsic goals, embodied world contact, affective valuation as an internal dynamic, online learning, or a unified persistent self-model. It also does not provide evidence of subjective experience.

The self-maintenance point needs a narrower statement. Homegrown does have an emerging self-maintenance mechanism: reflection can inspect prior cognitive process, propose memory cells or process-frontier questions, and lead to edits of the discipline fundamentals that govern future runs. That is a real self-revising architecture in seed form.

What Homegrown does not yet have is autonomous continuous self-maintenance. The maintenance loop is still punctuated, explicitly invoked, human/tool mediated, and not yet governed by a persistent self-model with intrinsic goals. The better phrase is: **proto-self-maintenance** or **punctuated self-revision**, not "no self-maintenance."

So the safe claim is:

Homegrown may help study metacognition, agentic workflow, self-evaluation, self-revision, and structured memory in AI agents. It should not claim to unlock consciousness unless a specific theory says these mechanisms are sufficient and the implementation actually realizes them as an integrated continuing system.

### 6. Where The Project Is Evolving

The project is evolving from a set of reusable prompts into a protocolized agent workflow system.

The next mature version would be a lightweight cognitive runtime: still readable and Markdown-native, but with more machine-readable state, validators, routing rules, telemetry calibration, explicit self-maintenance records, and evaluation harnesses.

My honest opinion: the idea is coherent and worth pursuing. The original move is not a single prompt or discipline. The original move is the stack: named cognitive operations, explicit failure modes, composable loops, file-backed state, final findings, reflection, and navigation.

The risk is conceptual inflation. The project could keep adding taxonomies and become internally impressive but externally untested. The next stage should therefore be validation and enforcement, not more vocabulary.

## Next Actions

### MUST

- **What:** Create a claims ledger that lists each project claim, evidence type, current evidence, and current confidence.
  **Who:** Homegrown devdocs.
  **Gate:** Before adding major new consciousness, autonomy, or OS-level claims.
  **Why:** Prevents evidence for one claim from being reused to support another.

- **What:** Implement or remove the missing `tools/structural_check.sh` dependency.
  **Who:** Runtime/tooling layer.
  **Gate:** Before treating discipline telemetry as enforced validation.
  **Why:** Closes the gap between protocol language and actual structural checking.

- **What:** Formalize the self-maintenance loop.
  **Who:** Reflection/runtime layer.
  **Gate:** Before claiming continuous self-maintenance or self-directed methodology evolution.
  **Why:** Separates proto-self-maintenance from autonomous continuous maintenance by recording trigger, diagnosis, proposed change, applied edit, evaluation result, and retain/revert decision.

- **What:** Run a small MVL/MVL+ evaluation against baseline prompting.
  **Who:** Evaluation harness or manual study.
  **Gate:** 10 to 20 representative tasks with blind review.
  **Why:** Tests the core claim that process architecture improves outcomes.

### COULD

- **What:** Add machine-readable schemas for `_state.md`, `_branch.md`, and discipline outputs.
  **Who:** Runtime/tooling layer.
  **Gate:** When more than one runner or agent needs to consume inquiry state.
  **Why:** Makes routing, resume, and validation less dependent on prose compliance.

- **What:** Write a short positioning doc using the layered identity from this finding.
  **Who:** Devdocs.
  **Gate:** Before public or README-level framing.
  **Why:** Gives the project ambitious but accurate language.

### DEFERRED

- **What:** Make strong consciousness claims.
  **Gate:** Only revive if the project names a theory of consciousness, implements the required mechanisms, and defines an evidence standard beyond task performance.
  **Why if revived:** Could become a serious research direction, but premature claims would damage credibility.

## Reasoning

The final answer uses the **Honest Layered Position** because it survived all critical dimensions: current-implementation accuracy, conceptual clarity, empirical rigor, philosophical restraint, future usefulness, and communication practicality.

The unqualified claim "Homegrown is already a cognitive operating system" was killed. The prosecution is simple: the current system does not mechanically enforce execution, scheduling, validation, or failure recovery. The defense, that the architecture is OS-like, survives only after qualification.

The claim "Homegrown is just a prompt library" was killed. The system is prompt-backed, but "just" ignores loops, state, artifacts, conclusion protocols, telemetry, reflection, and navigation.

The claim "this can unlock consciousness" was killed as a current claim. The defense survives only in a narrower form: Homegrown may be relevant to consciousness-adjacent capacities under some theories. That does not establish subjective experience or a conscious system.

The earlier version of this finding undercounted self-maintenance. Homegrown is not static: reflection can inspect process performance, propose memory cells or process-frontier questions, and lead to edits of the discipline fundamentals that govern future cognition. The corrected position is that Homegrown has proto-self-maintenance, but not yet autonomous continuous self-maintenance.

The main contradiction across the inquiry was reconciled by separating layers. Prompt library and cognitive OS prototype are not mutually exclusive when one describes the storage medium and the other describes the architectural direction.

The second contradiction was reconciled by separating claims from evidence. Better output quality, better continuity, better telemetry, higher autonomy, and consciousness relevance are different claims. They require different evidence.

## Open Questions

### Monitoring

- After 10 to 20 evaluated tasks, do MVL/MVL+ outputs outperform baseline prompting on correctness, usefulness, missed assumptions, and downstream rework?
- After telemetry is tracked across at least 30 discipline outputs, do PROCEED/FLAG/RE-RUN labels predict human review outcomes?
- After 10 documented reflection-driven spec edits, do those edits improve later run quality or mainly add process complexity?

### Blocked

- The strict cognitive-runtime claim is blocked until state, validation, and routing are enforced by tooling rather than only by prose.

### Research Frontiers

- Which theory of consciousness, if any, would treat Homegrown-style recurrent metacognitive workflow as relevant evidence?
- What minimum implementation would be required before Homegrown's proto-self-maintenance becomes autonomous continuous self-maintenance?
- What minimum implementation would be required before consciousness-adjacent architecture becomes more than a metaphor?

### Refinement Triggers

- Reopen the "cognitive operating system" label after executable validators, typed state, and automatic routing exist.
- Reopen the scientific-status judgment after a controlled evaluation shows measurable improvement over baseline prompting.
- Reopen the autonomous self-maintenance claim after the system can self-trigger reflection, propose changes, evaluate outcomes, and retain or revert changes through a documented loop.
- Reopen the consciousness discussion only after the project names a theory, required mechanisms, and non-task-performance evidence standards.
