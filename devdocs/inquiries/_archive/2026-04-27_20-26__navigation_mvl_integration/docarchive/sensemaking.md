# Sensemaking: Navigation MVL Integration

## User Input

`devdocs/inquiries/2026-04-27_20-26__navigation_mvl_integration/_branch.md`

## SV1 - Baseline Understanding

The question asks whether Navigation should become part of MVL/MVL+, or whether Navigation should live in a larger loop that runs MVLs and uses Navigation to choose next steps.

Initial interpretation: Navigation should not be inserted as another normal discipline inside MVL. It should probably run at the boundary after an MVL/MVL+ result, and later become part of a larger continuous-loop or multi-head orchestration system.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- MVL and MVL+ currently have fixed discipline sequences: S -> I -> C and E -> S -> D -> I -> C.
- Navigation's spec says it is a boundary discipline that operates between cycles.
- Navigation enumerates next directions; it does not choose one direction by itself.
- Navigation needs loop output as input: critique verdicts, frontier questions, telemetry, scope status, and optionally reflection.
- The end-goal involves parallel MVL+ loops with cross-comparison.
- The current system is still Level 0/early Level 1; human judgment remains the selector.
- Overbuilding an autonomous meta-loop before Navigation is used manually would risk adding orchestration without empirical signals.

### Key Insights

- Navigation's underuse is not because it lacks a purpose. Its purpose is clear: post-loop direction enumeration.
- The real gap is orchestration: no routine trigger, selector, or continuous-loop runner consumes Navigation maps.
- MVL should remain atomic. Navigation is meaningful precisely because MVL has completed a bounded thinking cycle.
- Conditional Navigation inside MVL+ is a bridge, not the final architecture.
- The larger architecture is `MVL+ -> Navigation -> Select/Branch -> MVL+`.
- Multi-head logic depends on Navigation because a multi-head system needs multiple candidate directions, not one global next move.

### Structural Points

- Core loop: produces an answer or partial answer.
- Reflection: learns backward from process quality.
- Navigation: maps forward possibilities from result and process signals.
- Selector: chooses one or more Navigation items.
- Meta-loop runner: launches one or more MVL+ loops from selected items and tracks traversal quality.
- Meaningful traversal: decides whether the sequence of loops is productive, convergent, directed, and worth continuing.

### Foundational Principles

- Do not blur cognition and orchestration. Disciplines answer or map; runners sequence and route.
- Enumeration should precede selection.
- Selection should be explicit, not hidden inside Navigation.
- A larger system can use MVL as an atomic operation without changing MVL's internal sequence.
- Autonomy should be staged: manual Navigation use -> conditional invocation -> sequential meta-loop -> multi-head meta-loop.

### Meaning-Nodes

- Boundary discipline
- Atomic MVL
- Continuous loop
- Multi-head MVL
- Navigation map
- Selector
- Meaningful traversal
- Human judgment boundary
- Orchestration

## SV2 - Anchor-Informed Understanding

The question is not "Navigation or MVL?" The stable frame is layered:

```text
Discipline layer:  E, S, D, I, C
Loop layer:        MVL / MVL+
Boundary layer:    Reflection + Navigation
Orchestration:     continuous-loop runner
Future topology:   multi-head runner
```

Navigation belongs at the boundary and becomes essential at the orchestration layer. It should not be added as a normal discipline inside the core MVL/MVL+ sequence.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

Navigation requires outputs from a completed loop. Running it before Critique has rendered verdicts or before CONCLUDE has clarified the finding would give it weak input.

New anchor: Navigation depends on loop completion signals.

### Human / User Perspective

The user currently supplies the "what next?" judgment after each finding. Navigation should reduce that cognitive load by making options explicit, but it should not remove the user's control before the system has a reliable selector.

New anchor: Navigation first helps the human decide; later it helps the system decide.

### Strategic / Long-Term Perspective

The end-goal points to many MVL+ loops in parallel with cross-comparison. Under that architecture, Navigation is not optional. It is the vocabulary for spawning branches and comparing their direction types.

New anchor: Navigation is a prerequisite for multi-head orchestration.

### Risk / Failure Perspective

Unconditional Navigation after every loop could create noise. Many inquiries end with a clear answer and no need for another map. Conversely, never running Navigation keeps the system dependent on the human to remember open directions.

New anchor: Navigation should be conditional before it becomes autonomous.

### Resource / Feasibility Perspective

The smallest useful step is not building the full continuous-loop runner. It is to use Navigation manually or trigger it conditionally when an MVL+ output has open questions, multiple survivors, partial answer, failed convergence, or explicit user request.

New anchor: bridge first, meta-loop later.

### Definitional / Consistency Perspective

Navigation's own reference says it is not routing and not decision-making. So using it as a hidden dispatcher would contradict its definition. A separate selector or human choice must exist after Navigation.

New anchor: Navigation produces the map; selector chooses the route.

## SV3 - Multi-Perspective Understanding

The strongest model is a staged integration:

1. **Manual boundary use now:** run Navigation after a completed inquiry when the next direction is unclear.
2. **Conditional MVL+ boundary hook next:** MVL+ invokes Navigation when specific triggers fire.
3. **Sequential meta-loop later:** a runner performs `MVL+ -> Navigation -> selection -> next MVL+`.
4. **Multi-head meta-loop later:** a runner dispatches several MVL+ heads from the same Navigation map and later merges/comparisons them.

This reconciles the user's intuition with the existing spec. Navigation does automate next-step enumeration, but it should not be confused with autonomous next-step selection yet.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Should Navigation be inside MVL?

**Strongest counter-interpretation:** Yes. If Navigation decides next steps, MVL/MVL+ should include it so every run automatically knows what to do next.

**Why the counter-interpretation partially fails (structural grounds):** Navigation needs completed loop output to work well. If it becomes an in-loop discipline after Critique but before CONCLUDE, it blurs answer compilation with next-step mapping. If it becomes part of the core sequence, every MVL run becomes open-ended by default. The core loop loses atomicity.

**Confidence:** HIGH.

**Resolution:** Navigation should not be a normal in-loop discipline. It can be invoked at the loop boundary after a loop has produced an answer, partial answer, or failure-to-converge signal.

**What is now fixed?** MVL/MVL+ remain atomic answer-producing loops.

**What is no longer allowed?** Treating Navigation as `S -> I -> C -> N` or `E -> S -> D -> I -> C -> N` in the same sense as the core reasoning disciplines.

**What now depends on this choice?** MVL+ changes should be boundary hooks, not pipeline expansion.

**What changed in the conceptual model?** "Inside MVL" splits into "core sequence" versus "boundary hook." Only the boundary-hook interpretation survives.

### Ambiguity: Should Navigation run after every MVL+?

**Strongest counter-interpretation:** Yes. If the goal is autonomous continuous cognition, every finding should produce a map of next steps.

**Why the counter-interpretation partially fails (structural grounds):** Many findings terminate cleanly. Unconditional Navigation creates extra artifacts and may train the system toward perpetual continuation. Navigation is valuable when there is unresolved frontier, multiple survivor paths, non-convergence, relationship return, or explicit human desire for options.

**Confidence:** HIGH.

**Resolution:** Run Navigation conditionally at first.

**What is now fixed?** Default MVL+ does not always run Navigation.

**What is no longer allowed?** Equating "Navigation is important" with "Navigation must fire every time."

**What now depends on this choice?** Trigger definitions become important.

**What changed in the conceptual model?** Navigation is a controlled boundary operation, not a mandatory tail step.

### Ambiguity: Is Navigation itself the selector?

**Strongest counter-interpretation:** Navigation should not only enumerate; it should pick the best option so the system can automate next steps.

**Why the counter-interpretation fails (structural grounds):** The Navigation spec explicitly separates enumeration from decision-making. Its confidence symbols are rough prioritization signals, not a full value function. Selection requires additional criteria: mode, goal, risk tolerance, branch budget, meaningful-traversal signals, and human/autonomous control level.

**Confidence:** HIGH.

**Resolution:** Navigation produces a map. Selection is a separate operation performed by the human now, by a simple heuristic in v1 autonomous mode, and by a richer selector later.

**What is now fixed?** Do not hide selection inside Navigation.

**What is no longer allowed?** Saying "Navigation automates next steps" without naming the selector.

**What now depends on this choice?** Continuous-loop runner design must include a selection component.

**What changed in the conceptual model?** Navigation is necessary but insufficient for autonomy.

### Ambiguity: What is the bigger loop?

**Strongest counter-interpretation:** The bigger loop is just MVL+ with Navigation appended.

**Why the counter-interpretation fails (structural grounds):** A bigger loop needs state across multiple MVL+ runs: what has been tried, which navigation types were selected, whether open questions are shrinking, whether work is still directed, whether branches should merge, and when to stop. Appending Navigation does not provide this cross-run memory.

**Confidence:** HIGH.

**Resolution:** The bigger loop is a meta-loop with its own state:

```text
meta-state -> MVL+ -> CONCLUDE -> optional Reflection -> Navigation -> Select -> next MVL+ or branch/merge/stop
```

**What is now fixed?** The continuous-loop runner is a distinct artifact, not a tiny MVL+ extension.

**What is no longer allowed?** Calling conditional Navigation invocation a full continuous-loop implementation.

**What now depends on this choice?** Build sequencing should separate bridge integration from meta-loop runner design.

**What changed in the conceptual model?** Navigation becomes the connector between atomic MVL+ runs, not an expansion of one run.

## SV4 - Clarified Understanding

Navigation has a clear role: it turns completed loop output into a typed map of possible next directions. It does not answer the current question, and it does not choose the next question alone.

Therefore, MVL should not include Navigation as a core discipline. MVL/MVL+ should stay atomic.

The correct integration path is staged:

1. Use Navigation manually when the next step is unclear.
2. Add conditional Navigation invocation at MVL+ boundaries.
3. Build a continuous-loop runner that consumes Navigation maps.
4. Later add multi-head dispatch and merge.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- Navigation is boundary-level.
- MVL/MVL+ remain atomic loops.
- Selection is separate from Navigation.
- Conditional invocation is the next practical integration.
- The larger architecture is a meta-loop around MVL+, not a modified MVL+ core.

### Eliminated

- Navigation as always-on in-loop discipline.
- Navigation replacing CONCLUDE.
- Navigation selecting next steps without a selector.
- Building full multi-head orchestration before testing conditional Navigation.

### Still Viable

- Manual Navigation now.
- Conditional Navigation in MVL+ as bridge.
- Sequential continuous-loop runner v1.
- Multi-head runner v2+.
- Navigation between branches during multi-head execution.

## SV5 - Constrained Understanding

The problem is now constrained to a build-sequencing question:

```text
Core loop stays stable.
Boundary hook becomes conditional.
Meta-loop owns recurrence and selection.
Multi-head comes after sequential runner works.
```

The immediate architectural answer is not "put Navigation into MVL." It is "teach MVL+ when to call Navigation at the boundary, then later build a separate orchestrator that uses Navigation maps to run more MVL+ loops."

## Phase 5 - Conceptual Stabilization

Navigation was originally supposed to break the "what next?" limitation, but not by becoming a hidden autonomous agent. It breaks the limitation by making the next-step space explicit.

At Level 0, that helps the human choose. At Level 1, MVL+ can invoke it conditionally so maps appear when the system needs them. At later levels, a runner can consume those maps, select directions, launch MVL+ branches, compare outputs, and measure meaningful traversal.

## SV6 - Stabilized Model

Navigation is the **between-loop direction map**. MVL/MVL+ are **atomic answer-producing loops**. The larger cognitive system is:

```text
MVL+ -> finding -> Navigation map -> selection -> next MVL+ / branch / merge / stop
```

The next practical step is not to put Navigation inside the MVL discipline sequence. The next practical step is conditional boundary invocation in MVL+, with a human selector first. The larger continuous-loop runner should come after that bridge is exercised and after meaningful-traversal signals are operational enough to decide when the sequence should continue or stop.

Compared with SV1, the model is sharper: the user's intuition about a bigger loop is correct, and the phrase "MVL should include Navigation" is only correct if "include" means a boundary hook, not a new core discipline.
