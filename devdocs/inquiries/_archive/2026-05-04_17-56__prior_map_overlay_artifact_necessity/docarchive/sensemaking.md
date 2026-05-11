# Sensemaking: Prior Map Overlay Artifact Necessity

## User Input

Is the proposed separate `prior_map_overlay.md` really the best solution?

## SV1 - Baseline Understanding

The current design is correct about old-map immutability but may be too rigid about always writing a new overlay file.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Old Navigation maps must remain historical snapshots by default.
- Navigation should not accidentally resurrect stale routes.
- Warm-up should not create unnecessary maintenance burden.
- A stale or separate session may need durable handoff context.
- Navigation itself should produce the new current route map; overlay should not become route selection.

### Key Insights

- `prior_map_overlay` is an operation before it is an artifact.
- "Current interpretation" and "saved markdown file" are not the same thing.
- Handoff distance determines whether a durable file is needed.
- A file is more valuable when reconstruction cost is high or the consumer is not the same live session.

### Structural Points

- Old map: historical snapshot.
- Overlay result: reconciliation of old route states against current authority.
- New Navigation map: current route-space enumeration.
- Refresh brief: bounded delta update for a stale warmed session.
- `_frontier.md`: multi-resolution expansion ledger, not general session memory.

### Foundational Principles

- Do not mutate historical evidence to express current state.
- Do not materialize artifacts unless they carry durable value.
- Controllers route; operational files execute; Navigation enumerates.

### Meaning-Nodes

- Snapshot integrity.
- Route-memory continuity.
- Artifact proportionality.
- Navigation boundary.

## SV2 - Anchor-Informed Understanding

The central problem is not whether overlay exists. It is whether the storage policy for overlay output matches the usage situation. A mandatory saved file protects resumption but violates proportionality for small same-session cases.

## Phase 2 - Perspective Checking

### Technical / Logical

The operation has an input/output contract independent of file storage. The same reconciliation table can be printed inline, embedded in a Navigation map, or saved as `prior_map_overlay.md`.

### Human / User

The user is actively resisting bloat. A design that forces another file after every warm-up creates friction and makes Navigation feel heavier than needed.

### Strategic / Long-Term

Durable overlays are valuable when Navigation becomes multi-session or multi-head. But making durability mandatory too early can make the system harder to carry.

### Risk / Failure

Skipping reconciliation causes stale route resurrection. Always saving can cause artifact sprawl and latest-file confusion. Editing old maps causes historical ambiguity.

### Resource / Feasibility

An adaptive output mode is cheap to implement: change wording and templates. No runner is required.

### Definitional / Consistency

Navigation outputs a route map. Prior-map overlay is context for Navigation, not the map itself. Therefore the overlay should not be defined by a single persisted markdown path.

## SV3 - Multi-Perspective Understanding

The best design is a conditional output policy: reconcile old route memory when it matters; produce the overlay inline by default for immediate small use; save it as a durable artifact only when the reconciliation itself must outlive the current conversation or be handed to another session.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Does "overlay" mean a file?

**Strongest counter-interpretation:** Yes. A named overlay is useful only if it is a file a future session can read.

**Why the counter-interpretation fails:** The mechanism is route-state reconciliation. A file is one storage mode for that reconciliation, not the mechanism itself. Immediate Navigation can consume the same reconciliation inline without losing correctness.

**Confidence:** HIGH

**Resolution:** Overlay means a prior-map reconciliation result. It may be inline or saved.

**What is now fixed?** The operation should not require file creation in all cases.

**What is no longer allowed?** Treating `prior_map_overlay.md` as the only valid overlay output.

**What now depends on this choice?** `navigator-prior-map-overlay.md`, `navigation_context_intake.md`, and the handoff prompt.

**What changed in the conceptual model?** Storage became a policy choice, not the essence of the operation.

### Ambiguity: When should the overlay be saved?

**Strongest counter-interpretation:** Save every overlay so future sessions always have a path.

**Why the counter-interpretation fails:** A saved file has a discovery and maintenance cost. If the overlay contains one or two route corrections and Navigation runs immediately in the same session, the durable file adds little value.

**Confidence:** HIGH

**Resolution:** Save when the route-memory reconciliation is large, cross-session, user-requested, affects future sessions, or will not be immediately consumed.

**What is now fixed?** Save policy should be explicit.

**What is no longer allowed?** Mandatory artifact creation for trivial same-session overlays.

**What now depends on this choice?** Output mode fields and validation checks.

**What changed in the conceptual model?** Overlay output becomes proportional to usage.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- Old maps are immutable snapshots.
- Overlay is route-memory reconciliation.
- Saved artifact is optional, not mandatory.
- Navigation consumes overlay context and writes the current map.

### Eliminated

- Editing old Navigation maps.
- Treating the latest old map as current authority.
- Requiring a saved overlay for every warm-up.
- Using `_frontier.md` for this problem.

### Viable

- Inline overlay for immediate/small route-memory use.
- Saved `prior_map_overlay.md` for durable handoff.
- Router language that says "run overlay when prior route memory matters" without forcing save.

## SV5 - Constrained Understanding

The design should keep the overlay routine, but refine it into an adaptive output operation. It should have `output_mode: inline | save | print_only`, with `inline` as the normal same-session path and `save` as the durable handoff path.

## SV6 - Stabilized Model

Best solution: preserve old Navigation maps as historical snapshots; reconcile them only when prior route memory matters; produce a prior-map overlay result; save that result as `prior_map_overlay.md` only when durable handoff or large reconciliation requires it. Otherwise, let the next Navigation run consume the overlay inline and, if useful, include a compact `Prior Route Memory` section in the new Navigation map.
