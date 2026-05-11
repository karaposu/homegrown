---
status: active
refines: devdocs/inquiries/2026-04-27_20-26__navigation_mvl_integration/finding.md
impacted_by:
  - devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/finding.md
  - devdocs/inquiries/2026-04-28_08-08__loop_diagnose_protocol_integration/finding.md
---
# Finding: Navigation Protocol Or Discipline

## Changes from Prior

**Prior path:** devdocs/inquiries/2026-04-27_20-26__navigation_mvl_integration/finding.md

**Revision trigger:** The user asked whether Navigation should be treated like `loop_diagnose`: not as a separate discipline, but as an MVL+ command/use case framed by a protocol.

**What's preserved:** The prior finding was right that Navigation should not be appended as a required sixth stage inside the MVL+ sequence.

**What's changed:** This finding separates Navigation's identity from Navigation's invocation. Navigation should remain a separate boundary discipline, but it can be invoked through protocol-like hooks.

**What's new:** The analogy with `loop_diagnose` is now rejected. `loop_diagnose` is a protocol that tells MVL+ what kind of inquiry to run. Navigation is a distinct map-making operation that can be called after an inquiry.

**Migration:** Keep `homegrown/navigation/SKILL.md` as a separate skill. Do not rewrite it into `homegrown/protocols/navigation.md` as an MVL+ wrapper. If integration is added later, add an invocation hook, not a new in-loop stage.

## Question

Should Navigation remain a separate discipline in Homegrown, or should it be reframed as an MVL+ command/use case with a Navigation protocol?

The goal was to decide whether Navigation has a distinct cognitive operation, how this relates to the atomic MVL/MVL+ model, and what practical change should or should not be made now.

## Finding Summary

- Navigation should remain a separate boundary discipline.

- Navigation should not become just an MVL+ command with a protocol.

- Navigation should not become a required sixth stage in MVL+.

- The right model is: MVL+ produces a finding; Navigation reads the completed finding and maps possible next moves.

- Navigation can still have protocol-style invocation. A command, hook, or future meta-loop can call Navigation at the boundary between inquiries.

- `loop_diagnose` is different. It frames a special MVL+ inquiry and still outputs a finding. Navigation performs a different operation and outputs a Navigation Map.

- Navigation should not choose the next move by itself. It should make possible moves visible; the human or a future selector chooses.

- The immediate practical work is to dogfood Navigation on completed inquiries and clean the small taxonomy mismatch in the Navigation docs.

## Finding

### 1. The short answer

Navigation should be a separate discipline with a protocol-like invocation path.

That means its identity should stay separate from MVL+, but its usage can become easier and more regular. The project should not choose between "separate discipline" and "protocol." It should split the question:

- **Identity:** Navigation is a separate boundary discipline.
- **Invocation:** Navigation can be called by a manual command, a post-CONCLUDE hook, or a future meta-loop.

This split keeps MVL+ atomic while still making Navigation usable.

### 2. Why Navigation is a separate discipline

Navigation has a distinct cognitive operation: it enumerates possible next directions after a completed inquiry.

MVL+ is answer-producing. It runs `Exploration -> Sensemaking -> Decomposition -> Innovation -> Critique`, then CONCLUDE writes a `finding.md`.

Navigation is movement-mapping. It reads a completed cycle or current project state and produces a Navigation Map. That map can name directions such as deepen, refine, reframe, test, consolidate, merge, terminate, or diagnose.

Those are not the same operation. MVL+ tries to answer the current question. Navigation asks what possible next questions or moves are now available.

This is why Navigation fits as a boundary discipline. It operates after an inquiry has enough shape to navigate from.

### 3. Why Navigation is not like `loop_diagnose`

The `loop_diagnose` protocol is a wrapper around MVL+.

Its job is to tell MVL+ how to inspect a correction chain: weak prior inquiry, human correction, and improved later inquiry. The reasoning engine remains MVL+. The output remains a diagnostic finding.

Navigation is different. It is not just "MVL+ but about next steps." It has its own expected artifact: a Navigation Map. It also has its own taxonomy, confidence labels, excluded-direction reasoning, and telemetry.

If Navigation were reduced to an MVL+ protocol, the system would either lose those structures or rebuild them awkwardly inside a normal finding. That would make Navigation less clear, not more clear.

The useful lesson from `loop_diagnose` is narrower: special operations can have explicit input contracts. Navigation should also have clear invocation inputs, but that does not mean Navigation becomes an MVL+ protocol.

### 4. Why Navigation should not be inside the MVL+ core loop

The current atomic loop should remain:

```text
Exploration -> Sensemaking -> Decomposition -> Innovation -> Critique -> CONCLUDE
```

Navigation should not become:

```text
Exploration -> Sensemaking -> Decomposition -> Innovation -> Critique -> Navigation -> CONCLUDE
```

It also should not become:

```text
Exploration -> Sensemaking -> Decomposition -> Innovation -> Critique -> CONCLUDE -> Navigation
```

as a required step for every inquiry.

The reason is closure. MVL+ needs to be able to finish a bounded inquiry. If every finding automatically generates a next-step map, the loop gains continuation pressure even when the answer is complete enough.

Navigation should be available at the boundary, not mandatory inside every loop.

### 5. How Navigation should be invoked

The clean invocation model is:

```text
MVL+ -> finding.md -> optional Navigation -> Navigation Map
```

Manual invocation is enough for now. The user or agent can run Navigation on a completed inquiry folder when the next move is unclear.

A future MVL+ hook can recommend or run Navigation after CONCLUDE, but only when a trigger is visible. Good triggers include:

- The user explicitly asks "what next?" or invokes Navigation.
- The finding has important unresolved branches.
- Critique leaves multiple strong survivors.
- The inquiry failed to converge cleanly.
- A relationship pointer says the finding should return to a parent inquiry, but the return path is unclear.

The hook should record why Navigation was invoked. That creates evidence about when Navigation helps and when it adds noise.

### 6. How this fits the meta-loop idea

The meta-loop should be the runner that traverses thinking space across multiple inquiries.

Navigation is the meta-loop's eyes. It sees possible paths, but it should not be the will of the system.

A future meta-loop can look like this:

```text
seed question or current state
-> MVL+
-> finding.md
-> Navigation Map
-> selector or human choice
-> next MVL+ inquiry, branch, merge, test, or stop
```

That architecture preserves roles:

- MVL+ probes and produces findings.
- Navigation maps possible moves from those findings.
- A selector chooses a move using goals, risk, budget, and evidence.
- Meta-state remembers what has already been tried.

This is stronger than making Navigation a normal MVL+ command because it lets Navigation become reusable perception for a larger traversal system.

### 7. What should happen now

The project should keep Navigation as `homegrown/navigation/SKILL.md`.

The project should not create `homegrown/protocols/navigation.md` as a replacement for the Navigation discipline.

The project may later create a small invocation protocol if the hook becomes repetitive. That protocol would answer questions like:

- What input folder should Navigation read?
- Which completed artifacts must be present?
- What trigger caused Navigation to run?
- Where should the Navigation Map be saved?
- Is the map for manual use, meta-loop use, or both?

That future invocation protocol would call Navigation. It would not replace Navigation.

There is also a small documentation cleanup to make. `homegrown/navigation/SKILL.md` describes a 15-type taxonomy, while `homegrown/navigation/references/navigation.md` currently defines 16 types. That mismatch does not change this finding, but it should be fixed before Navigation is used heavily.

## Next Actions

### MUST

- **What:** Keep Navigation as a separate boundary discipline.
  **Who:** `homegrown/navigation/SKILL.md` and future Homegrown architecture docs.
  **Gate:** Any edit that tries to collapse Navigation into a generic MVL+ protocol.
  **Why:** Preserves Navigation's distinct map-making operation.

- **What:** Keep Navigation out of the required MVL+ core sequence.
  **Who:** `homegrown/MVL+/SKILL.md`.
  **Gate:** Any future MVL+ pipeline edit.
  **Why:** Preserves MVL+ as a bounded answer-producing loop.

- **What:** Fix the Navigation taxonomy count mismatch.
  **Who:** `homegrown/navigation/SKILL.md` or `homegrown/navigation/references/navigation.md`.
  **Gate:** Before building a Navigation hook or meta-loop consumer.
  **Why:** Prevents agents from learning two incompatible versions of the Navigation contract.

- **What:** Dogfood Navigation manually on completed inquiry folders.
  **Who:** Human user or agent when asked to map next moves.
  **Gate:** At least five completed inquiries before adding an automatic hook.
  **Why:** Produces evidence about whether Navigation Maps are useful in practice.

### COULD

- **What:** Add a post-CONCLUDE Navigation hook to MVL+.
  **Who:** `homegrown/MVL+/SKILL.md`.
  **Gate:** After manual dogfooding shows that Navigation Maps produce useful next inquiries.
  **Why:** Makes Navigation easier to use without changing the MVL+ core sequence.

- **What:** Create a small Navigation invocation protocol.
  **Who:** `homegrown/protocols/navigation_invocation.md`.
  **Gate:** Only if manual use reveals repeated invocation details that agents forget.
  **Why:** Standardizes how Navigation is called while keeping Navigation as the underlying discipline.

### DEFERRED

- **What:** Make Navigation choose the next inquiry by itself.
  **Gate:** After there are at least ten Navigation Maps with recorded human choices and later outcomes.
  **Why if revived:** A selector needs evidence about which mapped directions actually led to useful work.

- **What:** Move Navigation entirely inside the meta-loop.
  **Gate:** After a sequential meta-loop exists and has completed at least three useful loop chains.
  **Why if revived:** The meta-loop is the natural consumer, but Navigation should remain independently callable until the runner is proven.

## Reasoning

The strongest survivor is "Navigation as a separate boundary discipline." It survived because the current Navigation source already defines a distinct operation: enumerate possible next moves from a completed cognitive cycle or project state.

The second survivor is "separate discipline plus boundary invocation." It survived because it solves the real problem of underuse without erasing Navigation's structure. A manual command, post-CONCLUDE hook, or meta-loop phase can all invoke the same discipline.

Manual-only Navigation survived only as a temporary state. It is safe, but it explains why Navigation is currently underused. Manual dogfooding should come first because it creates examples before automation.

The idea "Navigation as only an MVL+ protocol wrapper" was rejected. It treats Navigation as if it were just another special inquiry type, like `loop_diagnose`. That misses the artifact difference: `loop_diagnose` produces a finding, while Navigation produces a map of possible movements.

The idea "Navigation as a required sixth MVL+ stage" was rejected. It would weaken inquiry closure by making every completed finding generate continuation pressure.

The idea "Navigation as selector" was rejected. Navigation can identify and label possible moves, but choosing among them requires goals, risk limits, budget, and outcome memory. Those belong to a human, selector, or meta-loop runner.

The idea "move Navigation entirely into the meta-loop" was deferred. It is likely correct long-term that meta-loop consumes Navigation, but the meta-loop is not mature enough to own the discipline yet.

The apparent contradiction between MVL+ atomicity and Navigation usefulness is resolved by the identity/invocation split. MVL+ remains the atomic inquiry loop. Navigation remains a separate boundary operation that can be invoked after MVL+ finishes.

## Open Questions

### Monitoring

After five manual Navigation runs, check whether the Navigation Maps produced non-obvious useful next inquiries, or whether they mostly restated obvious options.

After ten Navigation Maps with recorded human choices and later outcomes, inspect whether the project has enough evidence to design a simple selector.

### Blocked

The autonomous selector is blocked until there are Navigation Maps, human selections, and outcome traces.

The final meta-loop integration is blocked until the sequential meta-loop has at least three completed loop chains.

### Research Frontiers

The main research frontier is not whether Navigation exists. It is how a future selector should value competing Navigation directions without hiding the value function inside Navigation itself.

### Refinement Triggers

Reopen this decision if five manual Navigation runs fail to produce useful maps. That would suggest Navigation's discipline structure is too heavy or poorly specified.

Reopen this decision if agents repeatedly fail to invoke Navigation correctly without a protocol. That would justify adding `homegrown/protocols/navigation_invocation.md`.

Reopen this decision if Navigation starts accumulating selection, memory, or self-maintenance logic. That would mean it is becoming a runner rather than a boundary discipline.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 

should navigation be just MVL+ command with certain protocol for navigation ? or it should be a seperate discipline ?
```

</details>
