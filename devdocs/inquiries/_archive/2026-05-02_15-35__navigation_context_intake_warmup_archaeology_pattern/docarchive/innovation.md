# Innovation: navigation_context_intake_warmup_archaeology_pattern

## User Input

```text
Generate candidate ways to adapt the `arch-small-summary -> arch-intro -> arch-traces-2` staged warm-up pattern into Homegrown Navigation context intake for code and non-code artifacts.
```

## Seed

The seed is a collision:

```text
proven codebase archaeology ladder
  + Navigation context intake need
  + Homegrown's non-code artifact ecosystem
```

Valuation: preserve the staged unlocking effect without overbuilding a command family too early.

## Mechanism 1 - Lens Shifting

### Generic Variation

Frame the problem as "session warm-up."

Output: create one generic session warm-up protocol that always runs orientation -> structure -> traces.

Test: useful framing, but too broad for immediate Navigation.

### Focused Variation

Frame the problem as "Navigation input preparation."

Output: `navigation_context_intake.md` owns staged source-profile intake and produces a current-state brief.

Test: strong. It matches the prior finding and keeps Navigation as consumer.

### Contrarian Variation

Frame the problem as "artifact archaeology" rather than Navigation.

Output: create a standalone artifact archaeology discipline/skill.

Test: fertile but premature. It may become right later, but Navigation needs a protocol now.

## Mechanism 2 - Combination

### Generic Variation

Combine codebase commands + Homegrown protocol.

Output: protocol references existing codebase commands under `source_profile: codebase`.

Test: strong.

### Focused Variation

Combine source profiles + staged unlock.

Output:

```yaml
source_profile:
  codebase:
    stage_1: arch-small-summary
    stage_2: arch-intro
    stage_3: arch-traces-2
  project_state:
    stage_1: project-state summary
    stage_2: project-state structure map
    stage_3: movement/evidence traces
```

Test: strongest.

### Contrarian Variation

Combine all artifact types into one universal "context traces" command.

Output: `context-traces.md` handles code, docs, protocols, and strategy.

Test: likely too vague. Different source profiles need different trace categories.

## Mechanism 3 - Inversion

### Generic Variation

Assumption: "Warm-up commands should be commands."

Inversion: "Warm-up stages can be protocol sections first."

Output: define stages inside `navigation_context_intake.md`; extract commands only after repeated traces.

Test: strong. Fits `artifact_materialization.md` extraction logic.

### Focused Variation

Assumption: "Traces require runtime behavior."

Inversion: "Trace means any behavior over time."

Output: non-code movement/evidence traces:

- decision lifecycle traces;
- refinement/supersession traces;
- branch movement traces;
- materialization handoff traces;
- outcome calibration traces;
- cross-cutting protocol mechanism traces.

Test: strong.

### Contrarian Variation

Assumption: "More warm-up improves Navigation."

Inversion: "Warm-up should stop early unless a later stage is unlocked by need."

Output: staged unlock gates. Stage 2 only when Stage 1 is insufficient; Stage 3 only for Deep/Full mode or high-risk movement.

Test: strong as context-cost control.

## Mechanism 4 - Constraint Manipulation

### Generic Variation

Add constraint: no new commands yet.

Output: one controller protocol with embedded stage definitions.

Test: safe but may be less ergonomic.

### Focused Variation

Add constraint: codebase path must reuse proven commands.

Output: `navigation_context_intake.md` includes integration instructions for existing arch commands instead of copying them.

Test: strong.

### Contrarian Variation

Remove constraint: create the full new command family now.

Output:

```text
project-small-summary
project-intro
project-traces
```

Test: tempting, but likely premature before dogfood.

## Mechanism 5 - Absence Recognition

### Generic Variation

Missing artifact: source-profile classification.

Output: add source profile field to `navigation_context_intake.md`.

Test: required.

### Focused Variation

Missing artifact: non-code trace taxonomy.

Output: define project-state trace categories:

1. Decision lifecycle traces.
2. Evidence transformation traces.
3. Branch/movement traces.
4. Materialization handoff traces.
5. Failure/recovery/correction traces.
6. Cross-cutting protocol traces.

Test: strong analogue to code trace categories.

### Contrarian Variation

Missing artifact: "what does not need traces."

Output: define exclusions:

- isolated notes with no downstream use;
- stale drafts not loaded by protocols;
- duplicate summaries;
- artifacts with no movement or authority role.

Test: useful as guardrail.

## Mechanism 6 - Domain Transfer

### Generic Variation

Transfer from archaeology.

Output: "context archaeology" as the umbrella name.

Test: good metaphor, but may sound broader than Navigation.

### Focused Variation

Transfer from incident/situation reporting.

Output: current-state brief acts like a situation report:

- what exists;
- what changed;
- what matters;
- what is blocked;
- what evidence is missing;
- what Navigation should consider.

Test: strong.

### Contrarian Variation

Transfer from onboarding curricula.

Output: progressive onboarding levels: outsider summary -> operator map -> expert traces.

Test: strong language for stage design.

## Mechanism 7 - Extrapolation

### Generic Variation

If Homegrown accumulates many protocols/findings, flat read-all context becomes impossible.

Output: staged source-profile intake becomes necessary.

Test: strong.

### Focused Variation

If Navigation Observer eventually exists, it will need reusable context intake tracks.

Output: build track/controller now, observer later.

Test: strong.

### Contrarian Variation

If too many protocols/commands accumulate, users will forget which warm-up to run.

Output: maintain a single entry point: `navigation_context_intake.md`; separate commands are hidden behind source profiles.

Test: strong.

## Candidate Set

### Candidate A - Controller Protocol With Source Profiles

Build `navigation_context_intake.md` with:

- source profile classification;
- staged unlock: orientation -> structure -> traces;
- codebase profile references existing arch commands;
- project-state/artifact profile defines analogous sections;
- current-state brief output;
- extraction gates for future commands.

### Candidate B - Create Three Non-Code Commands Now

Create:

```text
project-small-summary
project-intro
project-traces
```

or:

```text
context-summary
context-structure
context-traces
```

### Candidate C - Reuse Existing Arch Commands Directly For Everything

Treat every artifact set as a codebase-like source and run the same commands.

### Candidate D - Create A Generic `context_archaeology.md` Protocol First

Build a broad protocol for all artifacts, then have Navigation call it.

### Candidate E - Patch Navigation To Run Warm-Up Internally

Navigation becomes responsible for source-profile detection and staged warm-up.

### Candidate F - Controller Protocol Plus Deferred Command Extraction

Same as A, but explicitly states that future standalone commands require:

- 3+ dogfood runs;
- stable stage procedure;
- repeated user benefit;
- no duplicate invariants;
- controller remains entry point.

## Candidate Testing

| Candidate | Novelty | Scrutiny Survival | Fertility | Actionability | Mechanism Independence | Initial Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| A - Controller with source profiles | medium | high | high | high | high | SURVIVE |
| B - Three non-code commands now | medium | medium | high | medium | medium | REFINE/DEFER |
| C - Reuse arch commands for everything | low | low | low | high | low | KILL |
| D - Generic context archaeology first | medium | medium | high | medium | medium | REFINE/DEFER |
| E - Patch Navigation internally | low | low/medium | medium | medium | low | KILL for v1 |
| F - Controller + extraction gates | medium | high | high | high | high | SURVIVE |

## Assembly Check

The best assembly is Candidate F:

```text
navigation_context_intake.md
  -> source_profile classification
  -> staged unlock levels
  -> codebase profile reuses existing arch commands
  -> project_state/artifact_set profile defines analogous stages
  -> current-state brief output
  -> extraction gates for future commands
```

This assembly absorbs the strongest parts of A, B, and D while killing premature command proliferation and direct misuse of code commands.

## Proposed Protocol Shape

### Source Profiles

```yaml
source_profile:
  - codebase
  - artifact_set
  - project_state
  - business_strategy
  - mixed
```

`business_strategy` is a subtype, not the general name.

### Stages

```text
Stage 1 - Orientation Summary
  Goal: plain answer to "what is this state/source about?"

Stage 2 - Structural Map
  Goal: relationships, abstractions, authorities, dependencies, active parts.

Stage 3 - Movement/Evidence Traces
  Goal: how decisions, artifacts, branches, materializations, outcomes, and failures move over time.
```

### Codebase Profile

```text
Stage 1: arch-small-summary
Stage 2: arch-intro
Stage 3: arch-traces-2
```

### Project-State / Artifact-Set Profile

```text
Stage 1: project-state summary
Stage 2: project-state structure map
Stage 3: movement/evidence traces
```

### Project-State Trace Categories

1. Decision lifecycle traces.
2. Evidence transformation traces.
3. Branch/movement traces.
4. Materialization handoff traces.
5. Failure/recovery/correction traces.
6. Cross-cutting protocol mechanism traces.

### Unlock Rule

```text
Stage 1 always.
Stage 2 when Navigation needs structural relationships, authorities, dependencies, or active boundaries.
Stage 3 when movement is high-risk, repeated confusion exists, outcome evidence matters, or Deep/Full mode is selected.
```

## Mechanism Coverage Telemetry

- Generators applied: 4/4.
- Framers applied: 3/3.
- Convergence: YES. Five mechanisms point to controller + source profiles + staged unlock + extraction gates.
- Survivors tested: 6/6.
- Failure modes observed: none severe.
- Overall: PROCEED.
