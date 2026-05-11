# Exploration: navigation_context_intake_warmup_archaeology_pattern

## Mode and Entry Point

Mode: mixed artifact + possibility exploration.

Entry point: signal-first. The user supplied three existing codebase warm-up commands and a hypothesis that their sequential use creates an expanding context-unlocking effect.

## Cycle 1 - Artifact Scan

### What Was Scanned

Scanned the three existing command files:

- `/Users/ns/Desktop/projects/vibe-driven-development/commands/arch-small-summary.md`
- `/Users/ns/Desktop/projects/vibe-driven-development/commands/arch-intro.md`
- `/Users/ns/Desktop/projects/vibe-driven-development/commands/arch-traces-2.md`

Also scanned the prior Homegrown finding:

- `devdocs/inquiries/2026-05-02_15-09__next_load_bearing_navigation_warmup_context_loading/finding.md`

### What Was Found

The three commands are a staged codebase warm-up ladder:

1. **`arch-small-summary`** reads code and produces a non-technical summary of what the project is, what works, what is in progress, who uses it, and what general shape it has.
2. **`arch-intro`** reads code and produces a high-level architecture introduction for a new engineer: data flow paths, main abstractions, and top-level design patterns.
3. **`arch-traces-2`** requires enough prior understanding and then creates behavior traces: lifecycle, data transformation, integration boundary, decision/routing, error/recovery, and cross-cutting mechanism traces.

The commands are codebase-specific, but their deeper sequence is not only about code:

```text
plain orientation
  -> structural model
  -> behavior / mechanism traces
```

### Signals Detected

1. **Staged unlock signal.** Each command makes the next one more useful. `arch-traces-2` explicitly says not to run traces if codebase structure is unknown.

2. **Audience shift signal.** The first command is non-technical; the second is engineer-oriented; the third is expert-level behavioral analysis. This is progressive resolution, not just more detail.

3. **Grounding signal.** The commands insist on reading actual code behavior rather than documentation claims. The equivalent for Homegrown cannot rely only on stated theories; it must read artifacts and traces.

4. **Trace category signal.** The six trace categories are useful beyond code if renamed around artifact behavior, decision flow, lifecycle, evidence flow, failure/recovery, and cross-cutting mechanisms.

5. **Code-specific limitation.** These commands read code fully. Homegrown Navigation context intake must handle non-code artifacts: findings, protocols, traces, outcome reviews, branches, concept notes, and maybe external project docs.

### Resolution Decision

Zoom in on the staged unlock pattern rather than the exact commands.

### Probe

The codebase ladder has three levels:

| Existing command | Cognitive function | Output |
| --- | --- | --- |
| `arch-small-summary` | Orientation | plain-language project summary |
| `arch-intro` | Structural comprehension | architecture model |
| `arch-traces-2` | Behavioral tracing | expert traces of runtime behaviors |

For Homegrown Navigation, the analogous levels might be:

| Generalized level | Cognitive function | Possible output |
| --- | --- | --- |
| State summary | Orientation | what this artifact set/project state is about |
| Structure map | Structural comprehension | authorities, relationships, active decisions, branches, protocols |
| Movement/evidence traces | Behavioral tracing | how decisions moved, what was selected, what was killed, what was materialized, what worked |

### Frontier State

Frontier advancing. The core pattern is visible, but the exact adaptation is unresolved.

### Confidence Map Update

- Existing codebase warm-up ladder: confirmed.
- General staged unlock pattern: high confidence.
- Reuse commands directly for code repos: high confidence.
- Use same exact commands for non-code artifact sets: low confidence.
- Create analogous non-code/project-level warm-up ladder: high-confidence candidate.

## Cycle 2 - Possibility Scan

### What Was Scanned

Scanned possible adaptation strategies:

1. Reuse the three existing commands unchanged for codebases.
2. Create one generic `navigation_context_intake.md` protocol with internal stages.
3. Create three new general commands mirroring the codebase ladder.
4. Create separate codebase and non-code warm-up tracks.
5. Create a broader "artifact archaeology" layer for all artifact types.
6. Make Navigation perform all three stages internally.

### Signals Detected

- Direct reuse is correct for source-code repos but not enough for Homegrown's non-code system artifacts.
- A single protocol can define the controller logic, but three outputs may be easier to use and audit.
- Non-code artifacts need different trace categories than runtime code.
- Navigation should consume the warm-up outputs, not perform all warm-up steps itself.
- "Business-level" is probably too narrow a name. The artifacts are not only business strategy; they include project direction, theory, protocols, evidence, and movement history.

### Resolution Decision

Zoom in on a two-track design:

```text
codebase track: reuse existing archaeology commands
artifact/project track: create analogous state/context commands
navigation_context_intake.md: controller protocol that chooses track and mode
```

### Probe

The artifact/project track should probably not be called "business" unless the source is specifically a business artifact set. Better candidate names:

- **project-state warm-up**
- **artifact archaeology**
- **context archaeology**
- **strategic state intake**
- **movement-state intake**

For Navigation, "project-state" and "movement-state" are more accurate than "business." The goal is to show direction, dependencies, and active decision state, not only business strategy.

Potential three-step non-code ladder:

```text
state-small-summary
  -> state-intro
  -> state-traces
```

or:

```text
context-summary
  -> context-structure
  -> context-traces
```

### Frontier State

Frontier stabilizing around controller + tracks:

- keep codebase archaeology for code;
- create analogous artifact/project-state archaeology for non-code;
- let Navigation context intake choose the path and assemble the current-state brief.

### Confidence Map Update

- Single generic command for every artifact type: medium confidence, risk of vagueness.
- Three analogous non-code commands: high confidence as pattern reuse.
- Navigation doing everything: low confidence.
- "business-level" naming: low confidence as default, possible as one source profile.

## Jump Scan - Different Direction

### Scan Target

Looked away from warm-up commands toward `artifact_materialization.md`.

### Result

`artifact_materialization.md` already has artifact types and risk modes. This suggests `navigation_context_intake.md` should not create uncontrolled new command families immediately. It should specify controller behavior and extraction gates.

The first materialized artifact could be one protocol that defines both tracks and names the possible future three-command ladder. Separate commands should be extracted only after dogfood shows the repeated need.

## Convergence Assessment

- Frontier stability: yes. The same pattern appears across command artifacts and Navigation context-intake needs.
- Declining discovery rate: yes. New possibilities reduce to controller + staged outputs.
- Bounded gaps: yes. Open uncertainty is naming and extraction timing, not the core architecture.

Exploration is sufficient.

## Structural Map

### Territory Overview

The territory has four regions:

1. Existing codebase archaeology commands.
2. General staged warm-up pattern.
3. Non-code artifact/project-state warm-up needs.
4. Navigation context intake as controller and consumer boundary.

### Inventory

| Region | Confidence | Notes |
| --- | --- | --- |
| Codebase archaeology ladder | confirmed | Plain summary -> architecture intro -> traces. |
| Staged unlock mechanism | confirmed | Later stages require earlier orientation. |
| Direct reuse for code repos | confirmed | Keep using existing commands for codebase warm-up. |
| Direct reuse for non-code artifacts | low | They assume code files and runtime behavior. |
| Analogous non-code ladder | high | Needs artifact/project-state vocabulary. |
| Controller protocol | high | `navigation_context_intake.md` should choose source profile and mode. |
| Separate new commands immediately | medium | Useful but may be premature before dogfood. |

### Signal Log

- Probed: three-command staged unlock.
- Probed: non-code analogues.
- Probed: naming problem around "business-level."
- Deferred: immediate command family creation.

### Confidence Map

| Claim | Confidence |
| --- | --- |
| The existing commands should remain the codebase warm-up path | high |
| The same exact commands should warm up all artifact types | low |
| Homegrown needs a parallel artifact/project-state warm-up ladder | high |
| `navigation_context_intake.md` should control track selection | high |
| "business-level" is the right general name | low |
| Separate command files should be created before the protocol exists | low/medium |

### Frontier State

Remaining frontier:

- exact names for non-code stages;
- whether stages are protocol sections first or separate files;
- how trace categories generalize from runtime behavior to artifact movement/evidence behavior.

### Gaps and Recommendations

Recommendation for sensemaking: stabilize the abstraction as **context archaeology** or **project-state archaeology**, not business-level warm-up.

Recommendation for later materialization: make `navigation_context_intake.md` the controller first. It can support:

```text
source_profile: codebase -> use existing arch commands
source_profile: artifact_set/project_state -> use analogous staged sections
```

Separate non-code command files should wait until the protocol is dogfooded.
