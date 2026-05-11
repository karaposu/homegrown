# Sensemaking: Navigation Prior Map Read After Warm-Up v3

## User Input

The user asks whether prior `navigation.md` / `devdocs/navigation/*.md` reading should really be part of warm-up v1, or whether it should happen after `navigator-warmup3.md`.

## SV1 - Baseline Understanding

The user's instinct is probably correct: prior Navigation maps should not be loaded during v1. They should be read after the session has already built basic project context and movement traces.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Warm-up is once per session, not per request.
- v1 should create orientation and current-frontier understanding.
- v2 should explain project-direction architecture.
- v3 should trace movement over time.
- Prior Navigation maps are stale-prone because they record possible routes from an earlier state.
- Navigation should still benefit from prior maps before producing a new map.
- The solution should avoid adding a heavy fourth warm-up stage unless it earns its cost.

### Key Insights

- Prior Navigation maps are not the same kind of artifact as findings, protocols, or contracts.
- A finding is an accepted conclusion for an inquiry. A Navigation map is a route-space snapshot.
- Route-space snapshots are most useful after the current project state is known, because old routes need freshness judgment.
- Reading old route maps too early risks anchoring the warm-up around old options rather than the current state.
- The right operation is not "warm-up reads maps" in the broad sense. The right operation is "after warm-up, reconcile old route maps against current movement evidence."

### Structural Points

- v1: establish source-of-truth orientation and current frontier.
- v2: establish project-direction architecture.
- v3: establish movement traces.
- Post-v3: reconcile prior route maps against v1/v2/v3 outputs.
- Navigation: consume the reconciled continuation brief and produce a new route map.

### Foundational Principles

- Derived artifacts should not dominate source grounding.
- Route memory is evidence, not authority.
- Stale route memory should be interpreted, not merely loaded.
- A blocked or old route can matter even if it is not currently actionable.
- Good warm-up should reduce user steering without creating a giant controller protocol.

### Meaning-Nodes

- Context archaeology.
- Route-memory reconciliation.
- Continuation overlay.
- Staleness judgment.
- Warm-up handoff.
- Navigation consumption.

## SV2 - Anchor-Informed Understanding

The placement question is not just "which file reads navigation maps?" It is a boundary question between two operations. v1/v2/v3 build current understanding of the project; prior Navigation-map reading reconciles old route-space memory against that current understanding.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

If v1 reads prior Navigation maps deeply, v1 must decide whether old routes are active, stale, or superseded before it has v2's direction architecture or v3's movement traces. That is logically premature.

New anchor: route-state interpretation requires project-state interpretation first.

### Human / User Perspective

The user wants warm-up to reduce context burden. If prior maps appear too early, the user may have to correct stale old routes before the system has even understood the current project. If prior maps are read after v3, the system can ask a more precise question: which old routes still matter now?

New anchor: later placement reduces correction burden.

### Strategic / Long-Term Perspective

Navigation maps should become durable memory. But durable memory becomes harmful if replayed without freshness checks. A post-v3 overlay can become a stable bridge between old route memory and new Navigation runs.

New anchor: continuation memory needs a reconciliation step, not raw inclusion.

### Risk / Failure Perspective

The main failure mode is old-map anchoring. The system might over-weight a prior Navigation map because it is nicely structured, even if later findings corrected it. Another failure mode is operation creep: v3 could become too large if it both writes traces and reduces old route maps.

New anchor: keep v3 and route reconciliation adjacent but separate.

### Resource / Feasibility Perspective

A separate heavy v4 is not justified yet. But a small post-v3 handoff section or small companion command is feasible. It can read prior maps, classify route states, and produce a short continuation brief.

New anchor: add a small overlay, not a full stage.

### Definitional / Consistency Perspective

Navigation is a boundary discipline that maps possible next directions. Warm-up prepares session context. Prior Navigation maps are previous boundary outputs. They should inform the next boundary operation, but only after current context is established.

New anchor: prior maps belong closest to the Navigation handoff, not to initial project orientation.

## SV3 - Multi-Perspective Understanding

The model is now clearer: prior Navigation maps should be read after v3 because they require the current context established by v1/v2/v3. The operation should be small and handoff-shaped, not a full new warm-up command.

## Phase 3 - Ambiguity Collapse

### Ambiguity: What does "warm-up should read prior maps" mean?

**Strongest counter-interpretation:** It means v1 should read prior maps because v1 is the broad first-party source pass.

**Why the counter-interpretation fails (structural grounds):** v1 is designed to establish source-grounded orientation and current frontier. Prior Navigation maps are derived route snapshots, not canonical source-of-truth. They can be stale and need interpretation against movement evidence that v1 does not yet have.

**Confidence:** HIGH.

**Resolution:** "Warm-up should read prior maps" means the warm-up routine should include a post-v3 continuation-memory read, not that v1 should treat prior maps as ordinary source artifacts.

**What is now fixed?** Prior-map reading is not part of v1's core source read.

**What is no longer allowed?** Treating prior Navigation maps as equal to canonical findings during first orientation.

**What now depends on this choice?** Warm-up README/wrapper design and future Navigation handoff.

**What changed in the conceptual model?** Prior maps became route-memory inputs to a handoff, not base context inputs.

### Ambiguity: Should the prior-map read be inside v3?

**Strongest counter-interpretation:** Yes. v3 is already about movement traces, and prior Navigation maps are movement artifacts.

**Why the counter-interpretation fails (structural grounds):** v3's job is to enumerate and write traces. Prior-map reconciliation is a reduction step: it classifies route state from old maps against current traces. Combining both can make v3 too broad and expensive.

**Confidence:** MEDIUM-HIGH.

**Resolution:** Prior-map reading should happen after v3, but may be described in the same warm-up folder as a small handoff operation.

**What is now fixed?** v3 should not be overloaded as both trace producer and route-memory reducer.

**What is no longer allowed?** Expanding v3 into a hidden Navigation-map replay engine.

**What now depends on this choice?** Whether to create an explicit post-v3 file or a README rule.

**What changed in the conceptual model?** v3 produces evidence; the overlay interprets prior routes using that evidence.

### Ambiguity: Is this a v4?

**Strongest counter-interpretation:** Yes. If something runs after v3, it is v4.

**Why the counter-interpretation fails (structural grounds):** A stage implies another broad warm-up artifact. The needed operation is much smaller: read prior maps, classify route states, and produce a short continuation brief for Navigation. It does not need the same weight as v1/v2/v3.

**Confidence:** MEDIUM.

**Resolution:** Do not call it v4 yet. Call it a post-v3 continuation overlay or Navigation handoff.

**What is now fixed?** The operation is allowed, but its weight is constrained.

**What is no longer allowed?** Creating a heavy fourth archaeology command before testing the first Navigation run.

**What now depends on this choice?** File naming and whether the next patch edits a README/wrapper or creates a new command.

**What changed in the conceptual model?** The post-v3 read is part of handoff, not another context archaeology layer.

## SV4 - Clarified Understanding

The user is right in substance. Prior Navigation maps should not be put into v1. They should be read after v3, because v3 gives the movement evidence needed to judge whether old routes are active, stale, blocked, superseded, or still useful.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- v1 remains source-grounded orientation and current frontier.
- v2 remains project-direction architecture.
- v3 remains movement trace generation.
- Prior Navigation maps are read after v3.
- Old maps are evidence, not authority.
- The output of the post-v3 read should be a short continuation brief for Navigation.

### Eliminated

- Deep prior-map reading inside v1.
- Treating prior maps as canonical findings.
- Making v2 depend on prior route maps.
- Expanding v3 into a large route-memory reducer.
- Creating a heavy v4 before testing.

### Viable Paths

1. Add a short `After v3: Navigation continuation memory` section to `homegrown/navigation/warmup/README.md` or equivalent wrapper.
2. Create a small `navigator-handoff.md` command only if a README rule is too weak.
3. Later create a real v4 only if repeated sessions show the overlay needs substantial logic.

## SV5 - Constrained Understanding

The clean sequence is:

```text
v1: read source-of-truth artifacts -> project summary and current frontier
v2: read source artifacts + v1 -> project-direction architecture
v3: read source artifacts + v1/v2 -> movement traces
post-v3 overlay: read prior Navigation maps + v1/v2/v3 outputs -> continuation brief
Navigation: consume continuation brief -> new route map
```

## Phase 5 - Conceptual Stabilization

The missing operation is not more warm-up. It is route-memory reconciliation. This operation needs the warm-up outputs first, because old Navigation maps only become useful when compared against current project state and movement evidence.

## SV6 - Stabilized Model

Prior Navigation-map reading should happen after `navigator-warmup3.md`, not inside v1.

The best current design is a small post-v3 continuation overlay:

- read previous `navigation.md` files and `devdocs/navigation/*.md`;
- compare them against v1 summary, v2 direction architecture, and v3 traces;
- classify old routes as open, active, blocked, done, stale, superseded, or unknown;
- preserve useful `Continuation note` material;
- produce a short handoff brief for the next Navigation run.

This differs from SV1 by tightening the reason: the placement is not only "after v3 feels better." It is structurally required because route-memory reconciliation needs current context before old routes can be interpreted.

## Saturation Telemetry

- **Perspective saturation:** high. Perspectives converged on post-v3 placement.
- **Ambiguity resolution ratio:** 3/3 major ambiguities resolved.
- **SV delta:** high. SV1 was a hunch; SV6 defines a specific post-v3 overlay.
- **Anchor diversity:** strong. Anchors came from stage roles, authority, staleness risk, user burden, and operation weight.
