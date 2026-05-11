# Sensemaking: navigation_context_intake_warmup_archaeology_pattern

## User Input

```text
The user pointed to `arch-small-summary`, `arch-intro`, and `arch-traces-2` from vibe-driven-development as a proven session warm-up sequence. They asked whether Navigation context intake should use something similar, generalized beyond codebases to all artifact types, or whether the existing codebase commands should be reused for code while another three-step set is created for business/project-direction artifacts.
```

## SV1 - Baseline Understanding

The user is recognizing that context intake is not just "read files." Their existing codebase warm-up commands create progressive understanding: first plain orientation, then architecture, then behavioral traces. The question is how to preserve that staged unlocking effect for Homegrown Navigation context intake.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- The existing commands are proven useful for codebase warm-up.
- They read actual code behavior, not documentation claims.
- Homegrown Navigation must read many non-code artifacts: findings, protocols, traces, branches, outcome reviews, concept notes, and possibly code.
- The next protocol should be small enough to materialize now.
- Creating a full command family before dogfood may be premature.
- Naming should not over-narrow the concept to business if the artifacts include theory, project state, protocols, evidence, and movement history.

### Key Insights

- The load-bearing pattern is staged resolution, not code-specific mechanics.
- Codebase warm-up and Homegrown state warm-up are siblings, not the same operation.
- The generic abstraction is probably **artifact/project-state archaeology**: reconstruct what exists, how it is structured, and how it behaves over time from artifacts.
- Navigation context intake should be a controller that chooses the right warm-up track.
- Existing commands can remain the codebase track.

### Structural Points

The existing ladder:

```text
arch-small-summary
  -> arch-intro
  -> arch-traces-2
```

Generalized ladder:

```text
orientation summary
  -> structure/introduction map
  -> behavior/movement/evidence traces
```

Navigation intake use:

```text
source profile
  -> staged warm-up track
  -> current-state brief
  -> Navigation
```

### Foundational Principles

- Reuse proven tools when the source type matches.
- Generalize the underlying mechanism, not the surface names.
- Do not make Navigation responsible for all context archaeology.
- Do not create a new command family before the controller protocol is built.
- Context intake should unlock progressively, not flatten everything into one summary.

### Meaning-Nodes

- Staged unlock
- Codebase archaeology
- Artifact archaeology
- Project-state archaeology
- Current-state brief
- Source profile
- Warm-up track
- Behavioral traces
- Movement traces
- Evidence traces

## SV2 - Anchor-Informed Understanding

The problem is not whether to copy the commands. It is how to preserve their progressive context-unlocking structure across different source types.

The likely model is:

```text
navigation_context_intake.md
  controls modes and source profiles
  reuses codebase archaeology for code
  defines analogous project-state archaeology for non-code artifacts
```

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

The existing commands assume source code and runtime behavior. Non-code Homegrown artifacts do not have runtime behavior in the same sense. But they do have artifact behavior: decisions are created, refined, killed, branched, materialized, reviewed, superseded, and reused.

New anchor: non-code traces should be **movement/evidence traces**, not runtime traces.

### Human / User Perspective

The user already trusts the existing codebase warm-up pattern. Reusing the pattern reduces cognitive friction. But calling the non-code version "business" may not match the user's actual work, which includes system-building, theory, protocol work, ARC strategy, and navigation of thinking space.

New anchor: choose a name that helps the user invoke the right mental operation. "Project-state" or "artifact archaeology" is more accurate than "business."

### Strategic / Long-Term Perspective

If Homegrown is meant to maintain and maneuver its own thinking space, then it needs a way to understand artifact sets beyond code. The long-term target is not only code comprehension but state comprehension: what the system believes, what it changed, what failed, what is active, and where movement is possible.

New anchor: this is a foundation for Navigation Observer and future thinking-space UI.

### Risk / Failure Perspective

A generic all-artifact warm-up command may become vague. A separate three-command non-code ladder may fragment the system too early. A code-only warm-up leaves Navigation blind to Homegrown's real artifacts.

New anchor: start with protocol sections and output contracts; extract commands after repeated use.

### Resource / Feasibility Perspective

`navigation_context_intake.md` can define tracks without creating every track as a standalone command. That is feasible now. Creating three polished new skills or commands is more materialization work and should follow dogfood evidence.

New anchor: the protocol can include "future extraction candidates" for commands.

### Definitional / Consistency Perspective

Navigation enumerates movement possibilities. Context archaeology reconstructs state from artifacts. They are adjacent but distinct.

New anchor: warm-up is not part of Navigation's core cognitive operation; it is a precondition and input layer.

## SV3 - Multi-Perspective Understanding

The stable interpretation is:

```text
Keep the existing archaeology commands as the codebase profile.
Generalize their staged unlock into Navigation context intake.
Create a non-code artifact/project-state profile inside the protocol first.
Do not create a separate command family until dogfood proves stable repeated use.
```

## Phase 3 - Ambiguity Collapse

### Ambiguity 1: Is the pattern codebase-specific?

**Strongest counter-interpretation:** Yes. The commands read source code and trace runtime behavior. Applying them to non-code artifacts would be metaphorical and weak.

**Why the counter-interpretation fails (structural grounds):** The specific source type is code, but the staged unlock is more general: summary -> structure -> behavior traces. Non-code artifact sets also have behavior over time: findings refine prior findings, critique kills ideas, branches split questions, materializations create files, and outcome reviews test use.

**Confidence:** HIGH.

**Resolution:** The exact commands are codebase-specific, but the ladder is generalizable.

**What is now fixed?** Generalize the staged structure, not the code-specific content.

**What is no longer allowed?** Treating non-code warm-up as "just run arch commands anyway."

**What now depends on this choice?** The protocol needs source profiles.

**What changed in the conceptual model?** Codebase archaeology becomes one instance of broader context archaeology.

### Ambiguity 2: Should we reuse the existing commands for codebase warm-up?

**Strongest counter-interpretation:** No. Homegrown should create its own unified warm-up commands so everything follows one naming and output style.

**Why the counter-interpretation fails (structural grounds):** The existing commands already express the codebase path clearly and are proven in use. Replacing them now adds work without solving the non-code gap. A controller protocol can call or reference them when source profile is `codebase`.

**Confidence:** HIGH.

**Resolution:** Reuse the existing commands for codebase warm-up.

**What is now fixed?** `navigation_context_intake.md` should not reinvent codebase archaeology.

**What is no longer allowed?** Building duplicate codebase warm-up commands before a real incompatibility appears.

**What now depends on this choice?** The protocol should include a `source_profile: codebase` path.

**What changed in the conceptual model?** Homegrown can integrate external proven commands as track components.

### Ambiguity 3: Should the non-code track be called business-level?

**Strongest counter-interpretation:** Yes. The user wants "direction," which sounds like business/strategy-level context rather than technical context.

**Why the counter-interpretation fails (structural grounds):** Homegrown's non-code artifacts are not only business. They include methodology, system theory, protocol contracts, branches, diagnostics, outcome reviews, and materialization traces. "Business" would hide protocol/evidence/state work under a too-narrow label.

**Confidence:** HIGH.

**Resolution:** Use "project-state" or "artifact archaeology" as the general label. Use business/strategy as a source subtype when relevant.

**What is now fixed?** The generic non-code track is not called business-level by default.

**What is no longer allowed?** Naming the general warm-up layer in a way that excludes theory/protocol/evidence artifacts.

**What now depends on this choice?** Candidate command names and protocol section names.

**What changed in the conceptual model?** Direction is treated as movement through project/thinking state, not only business strategy.

### Ambiguity 4: Should we create three new non-code commands now?

**Strongest counter-interpretation:** Yes. The three-command shape is proven; creating analogues now makes the protocol concrete and usable.

**Why the counter-interpretation fails (structural grounds):** The abstraction is not yet dogfooded on Homegrown Navigation. Creating three new commands now risks fossilizing the wrong names or trace categories. `artifact_materialization.md` also argues for controller first and extraction after repeated traces.

**Confidence:** MEDIUM-HIGH.

**Resolution:** Put the three-stage non-code ladder inside `navigation_context_intake.md` first. Extract commands after repeated use.

**What is now fixed?** Do not create three separate non-code warm-up commands as the immediate next step.

**What is no longer allowed?** Treating the existing codebase command count as proof that non-code must immediately have three files.

**What now depends on this choice?** Materialization scope stays one protocol for now.

**What changed in the conceptual model?** The three-stage ladder is a protocol-internal mode before it becomes a command family.

### Ambiguity 5: What are non-code "traces"?

**Strongest counter-interpretation:** Non-code artifacts do not have behavior, so traces do not apply.

**Why the counter-interpretation fails (structural grounds):** Non-code artifacts have lifecycle and movement behavior: a finding is created, refined, superseded, branched, materialized, used, reviewed, and sometimes corrected. Protocols also have execution behavior when used. These are traceable behaviors, just not runtime call stacks.

**Confidence:** HIGH.

**Resolution:** Non-code traces should be movement/evidence traces.

**What is now fixed?** The trace stage should track decision movement, source authority, artifact lifecycle, refinement chains, branch paths, materialization handoffs, outcome deltas, and cross-cutting mechanisms.

**What is no longer allowed?** Limiting traces to runtime code paths.

**What now depends on this choice?** The design of Deep/Full context intake.

**What changed in the conceptual model?** Trace means "behavior over time," not only "program execution."

## SV4 - Clarified Understanding

The existing three-command codebase warm-up pattern should be reused as a source-profile track, not copied blindly.

The generalized pattern is:

```text
orientation
  -> structure
  -> traces
```

For codebases, the existing commands already implement this.

For Homegrown's non-code artifact sets, the analogous track should be:

```text
project-state summary
  -> project-state structure map
  -> movement/evidence traces
```

This should initially live inside `navigation_context_intake.md`.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed Variables

- Reuse existing archaeology commands for `source_profile: codebase`.
- Do not use those exact commands for all artifacts.
- Do not call the general non-code track "business-level."
- Use artifact/project-state archaeology vocabulary.
- Include staged unlock inside `navigation_context_intake.md`.
- Treat standalone non-code commands as extraction candidates after dogfood.

### Eliminated Options

- One generic "read everything and summarize" warm-up.
- Navigation doing all context archaeology internally.
- Replacing existing codebase commands now.
- Creating three non-code commands before the controller exists.
- Using "business" as the general source profile name.

### Viable Paths

1. Controller protocol with source profiles and internal staged unlock.
2. Codebase track references existing three commands.
3. Artifact/project-state track defines analogous sections.
4. Later command extraction if repeated traces prove the stages stable.

## SV5 - Constrained Understanding

`navigation_context_intake.md` should likely include:

```yaml
source_profile:
  - codebase
  - artifact_set
  - project_state
  - mixed
```

and:

```text
stage_1_orientation:
  codebase: arch-small-summary
  project_state: project-state summary

stage_2_structure:
  codebase: arch-intro
  project_state: project-state structure map

stage_3_traces:
  codebase: arch-traces-2
  project_state: movement/evidence traces
```

The current-state brief should consume the outputs of these stages.

## Phase 5 - Conceptual Stabilization

## SV6 - Stabilized Model

The three existing codebase warm-up commands should be understood as a concrete implementation of a more general context-intake ladder:

```text
orientation summary
  -> structural introduction
  -> behavioral traces
```

For codebases, reuse them. For Homegrown's non-code artifacts, create an analogous project-state/artifact-archaeology ladder inside `homegrown/protocols/navigation_context_intake.md`.

Do not create a separate "business-level" command family yet. "Business" is one possible source profile, but the general problem is wider: project direction, thinking-state, protocol state, evidence state, and movement history.

The immediate protocol should define the staged mechanism and the source profiles. After dogfooding, if the non-code stages repeat stably, extract them into separate commands or skills.

## Telemetry

- Perspective saturation: high.
- Ambiguity resolution ratio: 5/5.
- SV delta: strong. The model moved from "copy or reuse the commands?" to "source-profiled context archaeology with staged unlock."
- Anchor diversity: high.
- Overall: PROCEED.
