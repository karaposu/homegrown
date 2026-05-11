---
status: active
refines:
  - devdocs/inquiries/2026-05-02_15-09__next_load_bearing_navigation_warmup_context_loading/finding.md
---
# Finding: navigation_context_intake_warmup_archaeology_pattern

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-02_15-09__next_load_bearing_navigation_warmup_context_loading/finding.md`

**Revision trigger:** The user pointed to three proven codebase warm-up commands from `vibe-driven-development` and asked whether `navigation_context_intake.md` should reuse that staged pattern for code and non-code artifacts.

**What's preserved:** The prior finding was right that `homegrown/protocols/navigation_context_intake.md` should be the next load-bearing artifact and that it should prepare a current-state brief for Navigation.

**What's changed:** The protocol should not only define Compact, Standard, Deep, and Full read modes. It should also define **source profiles** and a staged warm-up ladder.

**What's new:** The existing `arch-small-summary -> arch-intro -> arch-traces-2` sequence should be treated as the codebase source profile. The general pattern is `orientation summary -> structural map -> behavior/movement traces`.

**Migration:** Build the staged source-profile model inside `navigation_context_intake.md` first. Extract standalone non-code commands only after real dogfood traces show stable repeated use.

## Question

How should Homegrown adapt the `arch-small-summary -> arch-intro -> arch-traces-2` session warm-up pattern into Navigation context intake for code and non-code artifacts?

The goal is to explain what is load-bearing in the three existing codebase warm-up commands, whether that staged unlock pattern should be reused directly, generalized, or mirrored with new artifact-level commands, and what this means for `homegrown/protocols/navigation_context_intake.md`.

## Finding Summary

- The existing codebase warm-up sequence is highly relevant.

- The load-bearing part is not "read code" by itself. The load-bearing part is the staged unlock:

```text
orientation summary
  -> structural introduction/map
  -> behavior or movement traces
```

- For codebases, reuse the existing commands:

```text
arch-small-summary
  -> arch-intro
  -> arch-traces-2
```

- For Homegrown's non-code artifacts, define an analogous **project-state / artifact archaeology** track inside `navigation_context_intake.md`:

```text
project-state summary
  -> project-state structure map
  -> movement/evidence traces
```

- Do not call the general non-code layer "business-level." Business strategy can be a source profile, but the general layer is wider: project direction, protocol state, evidence state, branch movement, materialization, outcome reviews, and thinking-space history.

- Do not create three new non-code commands yet. Put the three-stage ladder inside `navigation_context_intake.md` first, then extract commands after repeated dogfood use proves the stages are stable.

## Finding

### 1. The Existing Commands Prove A Staged Warm-Up Pattern

The three files the user named form a strong session warm-up sequence.

`arch-small-summary` reads code and produces a plain-language summary of what the project is, what it currently does, what looks in progress, who would use it, and what general shape it has.

`arch-intro` reads code and produces a higher-resolution architecture introduction: data flow paths, main abstractions, and top-level design patterns.

`arch-traces-2` only makes sense after enough codebase understanding exists. It then enumerates and writes expert traces of runtime behavior: lifecycle, data transformation, integration boundary, decision/routing, error/recovery, and cross-cutting mechanism traces.

The important pattern is:

```text
plain orientation
  -> structural model
  -> behavioral traces
```

Each stage unlocks the next. The first stage lets the session know what world it is in. The second stage gives structure. The third stage follows concrete behavior through time.

### 2. Codebase Warm-Up Should Reuse The Existing Commands

For codebases, Homegrown should not reinvent these commands now.

The existing codebase archaeology path is already clear:

```text
Stage 1: arch-small-summary
Stage 2: arch-intro
Stage 3: arch-traces-2
```

`navigation_context_intake.md` should reference this as the `codebase` source profile.

This keeps reuse pragmatic. The codebase track stays grounded in actual source code behavior, which is exactly what those commands are designed to inspect.

### 3. Non-Code Artifacts Need A Parallel Track, Not A Forced Code Track

Homegrown's core artifacts are often not source code. They include findings, protocols, contracts, branches, materialization traces, outcome reviews, concept notes, and archived discipline outputs.

These artifacts do not always have runtime behavior. But they do have movement and evidence behavior:

- a finding refines or supersedes another finding;
- critique kills or refines candidates;
- a branch splits a question from a source anchor;
- a protocol gets materialized and then used;
- an outcome review confirms or contradicts expected value;
- a correction chain reveals that an earlier loop missed something.

So the non-code analogue should be:

```text
project-state summary
  -> project-state structure map
  -> movement/evidence traces
```

The trace stage should not imitate runtime call traces too literally. It should trace decisions, evidence, branches, protocols, materializations, outcomes, failures, and corrections through time.

### 4. "Business-Level" Is Too Narrow As The General Name

The user's phrase "business level" points at a real need: a layer that shows direction rather than implementation detail.

But "business-level" is too narrow for Homegrown's general context intake. Some inputs are business strategy. Many are not. Homegrown needs to understand project direction, thinking-state, protocol state, evidence state, and movement history.

Better general names:

- `project_state`
- `artifact_set`
- `context_archaeology`
- `movement_state`

The protocol can still include `business_strategy` as a source profile or subtype when the source is actually business/strategy material.

### 5. The Next Protocol Should Be A Controller With Source Profiles

`navigation_context_intake.md` should become the single entry point.

It should classify the source profile:

```yaml
source_profile:
  - codebase
  - artifact_set
  - project_state
  - business_strategy
  - mixed
```

It should then apply the staged ladder:

```text
Stage 1 - Orientation Summary
Stage 2 - Structural Map
Stage 3 - Behavior / Movement / Evidence Traces
```

For `source_profile: codebase`, it can reference the existing archaeology commands.

For `source_profile: project_state` or `artifact_set`, it should define the analogous non-code stages inside the protocol.

For `source_profile: mixed`, it should combine tracks and record which parts came from code, findings, protocols, traces, or external documents.

### 6. Do Not Extract New Commands Yet

Creating three new non-code commands now is tempting because the codebase version works.

It is still premature.

The non-code trace categories and output shapes have not been dogfooded. If we create three new commands immediately, we risk freezing the wrong names or stages.

The better path matches the logic of `homegrown/protocols/artifact_materialization.md`: controller first, extraction after repeated traces.

Extraction gates should be explicit:

- at least 3 dogfood uses of the project-state/artifact track;
- stable repeated stage procedure;
- repeated user benefit;
- no duplicate invariants with `navigation_context_intake.md`;
- the controller remains the entry point after extraction.

## Next Actions

### MUST

- **What:** In `homegrown/protocols/navigation_context_intake.md`, define source profiles.
  **Who:** The upcoming materialization run for `navigation_context_intake.md`.
  **Gate:** During protocol creation.
  **Why:** Navigation context intake must know whether it is warming up a codebase, an artifact set, project state, business strategy, or mixed sources.

- **What:** Include the staged warm-up ladder inside `navigation_context_intake.md`.
  **Who:** The upcoming materialization run for `navigation_context_intake.md`.
  **Gate:** During protocol creation.
  **Why:** This preserves the proven expanding-unlock effect from the existing archaeology commands.

- **What:** Reuse existing codebase commands for the `codebase` source profile.
  **Who:** `navigation_context_intake.md`.
  **Gate:** During protocol creation.
  **Why:** The codebase path is already proven and should not be duplicated.

- **What:** Define the project-state/artifact-set stages inside the protocol.
  **Who:** `navigation_context_intake.md`.
  **Gate:** During protocol creation.
  **Why:** Non-code artifacts need different orientation, structure, and trace semantics from runtime code.

- **What:** Add command-extraction gates.
  **Who:** `navigation_context_intake.md`.
  **Gate:** During protocol creation.
  **Why:** This keeps the door open for future `project-state-summary`, `project-state-structure`, and `project-state-traces` commands without fragmenting before dogfood.

### COULD

- **What:** Add `business_strategy` as a source profile or subtype.
  **Who:** `navigation_context_intake.md`.
  **Gate:** During protocol creation if it remains simple.
  **Why:** Business/strategy artifacts are real, but they should not name the entire non-code layer.

- **What:** Define project-state trace categories.
  **Who:** `navigation_context_intake.md`.
  **Gate:** During protocol creation if it remains readable.
  **Why:** Trace categories make Deep/Full context intake more concrete.

### DEFERRED

- **What:** Create standalone project-state warm-up commands.
  **Gate:** Revive after at least 3 dogfood uses show stable repeated stages and clear user benefit.
  **Why (if revived):** Separate commands may become ergonomic once the protocol proves the shape.

- **What:** Create generic `context_archaeology.md`.
  **Gate:** Revive after Navigation, materialization, loop diagnose, and other operations independently need the same staged source-profile intake.
  **Why (if revived):** The abstraction may become useful across Homegrown, but Navigation should prove it first.

- **What:** Patch Navigation to run context intake internally.
  **Gate:** Revive after `navigation_context_intake.md` has been dogfooded and the handoff is stable.
  **Why (if revived):** A single-command UX may be useful later, but v1 should keep intake and Navigation separable for diagnosis.

## Reasoning

Exploration found that the three existing commands are not just a random codebase workflow. They instantiate a staged unlock: orientation, structure, then traces.

Sensemaking resolved that "business-level" is not the right general name. The more accurate layer is project-state or artifact archaeology. Business strategy can be one source profile, but Homegrown's non-code state also includes methodology, protocols, findings, branches, materialization, and outcomes.

Decomposition separated the controller from the tracks. `navigation_context_intake.md` should choose source profile and stage; codebase and project-state tracks should feed the current-state brief; Navigation should consume the brief.

Innovation generated six candidates. The best assembly was a controller protocol with source profiles, staged unlock, codebase command reuse, project-state stages, current-state brief, and extraction gates.

Critique killed direct reuse of the codebase commands for every artifact type because code-specific assumptions do not fit non-code artifacts.

Critique killed patching Navigation to run warm-up internally for v1 because it collapses input preparation and movement enumeration.

Critique deferred creating three non-code commands now because the non-code stages have not been dogfooded. It preserved them as a future extraction target.

The surviving design is source-profiled staged context archaeology inside `navigation_context_intake.md`.

## Open Questions

### Monitoring

- After 3 dogfood uses, did the project-state/artifact stages repeat in a stable enough way to extract commands?
- After 3 dogfood uses, did the source profile classification reduce user prompting or add overhead?

### Blocked

- Exact standalone command names are blocked until dogfood shows whether the best names are `project-state-*`, `context-*`, or `artifact-*`.

### Refinement Triggers

- If the protocol becomes too long, extract the project-state trace taxonomy into a separate reference file.
- If users repeatedly invoke the non-code stages without needing Navigation, run MVL+ on a generic `context_archaeology.md` protocol.
- If codebase warm-up needs different outputs for Navigation than the existing commands produce, revisit whether lightweight adapters are needed.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 

the next load-bearing development should be homegrown/protocols/navigation_context_intake.md, with "Navigation
  warm-up" as the plain-language alias.

  The key conclusion is that Navigation should be the next operating focus, but its missing dependency is a context-intake/
  input-boundary protocol. It should prepare a current-state brief for Navigation using tiered reads: Compact, Standard,
  Deep, Full. It should not be a new discipline yet, not a full Navigation Observer yet, and not finding-only by default.

okay this is good. 

/Users/ns/Desktop/projects/vibe-driven-development/commands/arch-small-summary.md
/Users/ns/Desktop/projects/vibe-driven-development/commands/arch-intro.md
/Users/ns/Desktop/projects/vibe-driven-development/commands/arch-traces-2.md

read these fully, they are how i warm up sessions for usual codebases and these 3 when run sequentially enforces context intake to have expanding unlocking effect, 

maybe we can have something similar but not specialy to codebase but all types of artificats? or maybe we can reuse these sones for codebase warmup and create antoher 3 for business level (i dont know what to call this ) things which shows the direction ?
```

</details>
