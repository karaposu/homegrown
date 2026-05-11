---
status: active
refines: devdocs/inquiries/_archive/continuous_loop_priorities/finding.md
---
# Finding: Navigation MVL Integration

## Changes from Prior

**What's preserved:** The prior finding `devdocs/inquiries/_archive/continuous_loop_priorities/finding.md` was right that conditional Navigation invocation in `/MVL+` should come before a full continuous-loop runner.

**What's changed:** This finding sharpens what "Navigation in `/MVL+`" means. It does not mean adding Navigation as a sixth core discipline. It means a post-CONCLUDE boundary hook that can produce or recommend a Navigation map when the completed inquiry has open next-step pressure.

**What's new:** The finding separates five layers: the atomic MVL/MVL+ loop, a boundary trigger, the Navigation map, a selector, and a later meta-loop runner.

**Migration:** Treat any future `/MVL+` edit as a boundary-hook change only. Do not modify the core `E -> S -> D -> I -> C` pipeline. Do not add Navigation to classic `/MVL` yet.

## Question

Should the Navigation discipline be included inside the MVL/MVL+ loop, invoked conditionally at the loop boundary, or handled by a larger meta-loop that runs multiple MVL+ inquiries and uses Navigation to choose or branch next steps?

The goal was to inspect `homegrown/navigation`, `enes/desc.md`, and related prior findings, then decide what Navigation is for, when it should run, how it relates to MVL/MVL+, and what the next practical integration step should be without prematurely building autonomous orchestration.

## Finding Summary

- Navigation should not become a normal discipline inside the core MVL/MVL+ sequence.

- Navigation should be treated as a boundary discipline: it reads a completed inquiry and maps possible next directions.

- `/MVL+` can include a conditional Navigation hook after CONCLUDE, but that hook should not auto-select or auto-launch the next inquiry.

- Classic `/MVL` should stay lighter for now. If any loop gets conditional Navigation first, it should be `/MVL+`, because `/MVL+` is already the default for larger inquiry work.

- The larger architecture is a separate meta-loop runner: `MVL+ -> finding -> Navigation map -> selection -> next MVL+ / branch / merge / stop`.

- Navigation is necessary for the future multi-head system because multi-head work needs a map of several possible directions, not one hidden global choice.

- The next practical step is not a full autonomous runner. The next practical step is to either dogfood Navigation manually on completed inquiries, or add a small post-CONCLUDE `/MVL+` hook with explicit trigger reasons.

## Finding

### 1. Navigation has a clear role: map the next-step space

The Navigation discipline is not vague in the current Homegrown materials. `homegrown/navigation/references/navigation.md` defines it as a boundary discipline that operates between cognitive cycles.

Its job is to transform a completed loop output into a typed map of possible next directions. That map can include directions such as deepening a finding, reframing a bad question, pursuing a frontier, merging branches, testing a claim, or terminating a path.

This means Navigation is not primarily an answer-producing discipline. Sensemaking, Decomposition, Innovation, and Critique help answer the current inquiry. Navigation looks at the result and asks what movements are now possible.

### 2. MVL and MVL+ should remain atomic

The strongest architectural result is that MVL/MVL+ should stay atomic. An atomic loop means one bounded inquiry runs through its reasoning pipeline and produces a finding.

Classic `/MVL` is the smaller loop: `Sensemaking -> Innovation -> Critique`.

Extended `/MVL+` is the larger loop: `Exploration -> Sensemaking -> Decomposition -> Innovation -> Critique`.

Navigation should not be appended to those pipelines as if it were the next required thinking discipline. If Navigation becomes a required sixth stage, every inquiry becomes open-ended by default. That would weaken the purpose of CONCLUDE, which is to turn a completed loop into a stable `finding.md`.

### 3. A boundary hook is different from a core discipline

The useful distinction is "core sequence" versus "boundary hook."

Navigation should not be inside the core sequence:

```text
E -> S -> D -> I -> C -> N
```

But `/MVL+` can still invoke Navigation after the loop has already produced a finding:

```text
E -> S -> D -> I -> C -> CONCLUDE -> optional Navigation map
```

This preserves atomicity. The inquiry still ends. If there is next-step pressure, the system also produces a map that helps the human or a future runner decide what to do next.

### 4. The boundary hook should be conditional

Navigation should not run after every completed inquiry at this stage.

The reason is not that Navigation is unimportant. The reason is that unconditional Navigation creates artifacts even when a finding is complete, stable, and does not need a next-step map. That pushes the system toward perpetual continuation, which is not the same thing as useful autonomy.

The first trigger set should be small and explainable:

- The user explicitly asks for Navigation or asks "what next?"
- The finding is partial, unresolved, or contains important open questions.
- Critique leaves multiple viable survivors or multiple branch directions.
- `/MVL+` fails to converge after three iterations.
- The inquiry has relationship pointers, but the next movement is unclear.

Every triggered Navigation map should name the trigger reason. This matters because future self-maintenance needs evidence about when Navigation was useful and when it was noise.

### 5. Navigation is not the selector

The Navigation map is not the same as a next-step decision.

Navigation can rank or label directions, but it does not have enough information to decide by itself. Selection needs additional criteria: the current goal, branch budget, risk tolerance, user priority, whether the system is in manual or autonomous mode, and whether prior loops are converging.

At the current stage, the selector should be the human. The system can make the possible directions explicit, but the human should choose which direction deserves the next MVL+ run.

Later, a simple selector can be added. For example, a sequential runner might pick the highest-confidence Navigation item that is not blocked. But that selector should be a separate mechanism, not hidden inside Navigation.

### 6. The larger loop is a separate runner

The bigger loop the user is pointing at is real, but it is not just "MVL+ with Navigation appended."

A real continuous loop needs cross-run state:

- which inquiry folders have already been run;
- which Navigation directions were selected;
- which questions are still open;
- whether the sequence is making progress;
- whether branches should merge;
- when to stop.

That belongs in a separate meta-loop runner.

The clean architecture is:

```text
meta-state
-> MVL+
-> finding
-> optional Reflection if process quality is in question
-> Navigation map
-> selector
-> next MVL+ / branch / merge / stop
```

This fits the multi-head direction described in `enes/desc.md`. In a future multi-head system, one Navigation map could feed several MVL+ branches. Each branch would pursue a different typed direction, and a merge/comparison step would later decide what was learned across heads.

### 7. The immediate implementation should be staged

The system should not jump directly from unused Navigation to a full autonomous multi-head runner.

The staged path is:

1. Use Navigation manually on completed inquiries where the next step is unclear.
2. Add a conditional post-CONCLUDE Navigation hook to `/MVL+`.
3. Add a tiny boundary-signal contract so the trigger reason is explicit.
4. Build a sequential meta-loop runner that consumes Navigation maps.
5. Add meaningful-traversal metrics so the runner can judge whether its loop chain is productive.
6. Add multi-head dispatch and merge after the sequential runner works.

The important part is that each stage produces evidence for the next one. Manual use shows whether Navigation maps are helpful. Conditional hooks show when the system can detect next-step pressure. A sequential runner shows whether selection and recurrence can work before parallel branching multiplies complexity.

## Next Actions

### MUST

- **What:** Keep Navigation out of the core MVL/MVL+ discipline sequence.
  **Who:** MVL and MVL+ protocol files.
  **Gate:** Any future edit to `homegrown/MVL/SKILL.md` or `homegrown/MVL+/SKILL.md`.
  **Why:** Preserves the atomic loop model and prevents every inquiry from becoming an automatic continuation.

- **What:** Use Navigation manually on real completed inquiry folders.
  **Who:** Human user or agent when explicitly asked for next-step options.
  **Gate:** Run this on at least five completed inquiry folders where the next step is unclear.
  **Why:** Produces calibration evidence before building a selector or runner.

- **What:** If implementing now, add a post-CONCLUDE conditional Navigation hook to `homegrown/MVL+/SKILL.md` only.
  **Who:** MVL+ skill file.
  **Gate:** Trigger only when a finding is partial/open, has multiple survivors, has failed to converge after three iterations, has unclear relationship return, or the user explicitly asks for next options.
  **Why:** Makes Navigation available at the point it has useful input without changing the core loop.

### COULD

- **What:** Add a minimal boundary-signal block to future findings or state files.
  **Who:** CONCLUDE protocol or MVL+ runner.
  **Gate:** Only after the first conditional Navigation hook is being added.
  **Why:** Creates a stable interface for Navigation triggers and future runners.

- **What:** Pair Reflection and Navigation conditionally.
  **Who:** Future boundary runner or manual workflow.
  **Gate:** Use only when an inquiry was corrected, failed to converge, or showed process-quality problems.
  **Why:** Reflection explains what went wrong; Navigation maps what to do next.

### DEFERRED

- **What:** Build a sequential continuous-loop runner.
  **Gate:** After at least five manual or conditional Navigation maps exist and at least three of them produce a useful next MVL+ inquiry.
  **Why if revived:** Lets the system run `MVL+ -> Navigation -> selection -> MVL+` with explicit state instead of relying on the human to thread folders manually.

- **What:** Build a multi-head MVL+ runner.
  **Gate:** After a sequential runner can complete at least three loop chains with useful termination or merge decisions.
  **Why if revived:** Lets Navigation's enumeration feed multiple inquiry branches, which matches the long-term architecture in `enes/desc.md`.

- **What:** Create an autonomous selector.
  **Gate:** After there are at least ten Navigation maps with recorded human selections and later outcomes.
  **Why if revived:** Gives the selector empirical examples instead of inventing a value function from theory alone.

## Reasoning

Exploration found a strong textual signal in `homegrown/navigation/references/navigation.md`: Navigation is a boundary discipline. It operates between cycles and produces a map of possible directions. The same scan found no strong source supporting Navigation as a normal in-loop stage.

Exploration also found that `enes/desc.md` and `enes/what_is_meaningful_traversal.md` point toward many MVL+ loops, possibly in parallel, with comparison across outputs. That supports a larger orchestration layer, not a modified core MVL+ sequence.

Sensemaking resolved the main ambiguity by splitting "inside MVL" into two meanings. If "inside" means "a required sixth discipline," the answer is no. If "inside" means "a conditional boundary hook after the finding is produced," the answer is yes for `/MVL+` and no for classic `/MVL` for now.

Decomposition showed five pieces: the atomic loop, the boundary trigger, the Navigation map, the selector, and the meta-loop runner. Only the boundary trigger belongs near `/MVL+` now. The selector and recurrence logic belong outside the loop.

Innovation considered eight designs. Core-pipeline Navigation was rejected because it makes the loop open-ended. Manual-only Navigation was safe but too weak. Conditional boundary integration survived because it creates useful maps without changing the core pipeline. A separate sequential meta-loop survived as the correct later architecture. Immediate multi-head orchestration was rejected for now because it would multiply branch choices before the system has a selector or meaningful-traversal metric.

Critique killed core-pipeline Navigation on two critical dimensions: atomicity preservation and spec coherence. It also killed immediate multi-head implementation for now because the required selector, merge logic, and traversal-quality signals do not exist yet.

Critique kept the conditional `/MVL+` boundary hook because it satisfies the current stage: it makes Navigation visible, uses completed loop output as input, and keeps selection manual. It kept the minimal trigger contract because future runners need an explainable reason why Navigation fired.

The resulting answer advances the user's larger aim. Navigation is indeed the mechanism that helps break the "what next?" limitation, but it does that first by mapping options, not by autonomously choosing them. Autonomy comes later when a runner and selector consume those maps.

## Open Questions

### Monitoring

- After five manual or conditional Navigation maps, review whether the maps led to better next MVL+ questions or just produced obvious options.

- After ten Navigation maps with human selections, inspect whether the same trigger types repeatedly produce useful next loops. That is the first evidence base for a selector.

### Blocked

- The exact autonomous selector is blocked until there are recorded Navigation maps, human choices, and later outcomes to compare.

- The multi-head merge strategy is blocked until a sequential runner exists and shows how findings should be compared across loop chains.

### Research Frontiers

- Meaningful traversal still needs operational tests: coverage, convergence, productivity, directedness, and depth must become observable enough for a runner to stop or branch responsibly.

### Refinement Triggers

- Reopen the "Navigation after every MVL+" decision if five consecutive completed inquiries require manual Navigation immediately after completion.

- Reopen the "classic `/MVL` stays light" decision if classic `/MVL` becomes the main runner for complex inquiry chains instead of `/MVL+`.

