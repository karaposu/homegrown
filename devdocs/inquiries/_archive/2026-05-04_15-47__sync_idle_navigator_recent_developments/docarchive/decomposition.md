# Decomposition: Sync Idle Navigator Recent Developments

## Coupling Map

High-coupling clusters:

1. Freshness detection and source authority.
2. Delta read-set construction and artifact classification.
3. Sync brief output and Navigation handoff.
4. Existing warm-up routine and `navigation_context_intake.md` wrapper.

Low-coupling boundaries:

- Refresh detection can be defined separately from route enumeration.
- Sync brief format can be defined separately from future automation.
- Full warm-up fallback can stay in the existing v1/v2/v3 routine.

## Question Tree

### 1. How does the system know a Navigator session is stale?

Verification criteria:

- [ ] Names allowed freshness anchors: last warm-up output, last current-state brief, last Navigation map, timestamp, or explicit user source.
- [ ] Names rerun triggers: context boundary changed, major new evidence, stale assumptions, or Navigation failed due missing context.
- [ ] Does not require full session registry infrastructure.

### 2. What should refresh read?

Verification criteria:

- [ ] Includes recent relevant `finding.md` files.
- [ ] Includes changed Navigation/protocol/contract files.
- [ ] Includes `devdocs/navigation/*.md`.
- [ ] Includes materialization traces and outcome reviews when relevant.
- [ ] Includes git status or file-delta evidence as a supporting signal, not the sole authority.
- [ ] Skips archives unless critique/docarchive evidence is specifically needed.

### 3. What should refresh produce?

Verification criteria:

- [ ] Produces a concise sync brief.
- [ ] Lists read set and skipped sources.
- [ ] Separates new authority from recent but non-authoritative changes.
- [ ] Marks stale, superseded, blocked, and changed assumptions.
- [ ] States Navigation implications.
- [ ] Includes a recommended prompt or handoff to the idle Navigator.

### 4. Where should the routine live?

Verification criteria:

- [ ] Does not create a second Navigation namespace.
- [ ] Does not overload `navigation.md` or `_frontier.md`.
- [ ] Reuses `homegrown/navigation/warmup/` because this is Navigation-owned context support.
- [ ] Keeps `navigation_context_intake.md` as the small controller/wrapper until proven unnecessary.

### 5. How does this scale later?

Verification criteria:

- [ ] Supports manual use now.
- [ ] Produces durable artifacts that a future runner can consume.
- [ ] Defers background observer/runtime logic.
- [ ] Allows multi-head sessions to consume the same sync brief.

## Interface Map

- Freshness detection -> delta read set: provides anchor and scope.
- Delta read set -> sync brief: provides evidence and changed artifacts.
- Sync brief -> Navigation: provides warmed recent context and confidence limits.
- Sync brief -> outcome review: provides expected effect for later review.
- `navigation_context_intake.md` -> refresh routine: routes stale-session cases to refresh instead of full warm-up.

## Dependency Order

1. Define refresh command/protocol shape.
2. Add freshness anchor fields to warm-up or refresh outputs.
3. Patch wrapper/handoff docs to call refresh when stale.
4. Use refresh once to update an idle Navigator session.
5. Outcome-review whether the sync reduced manual context steering.
6. Consider automation only after repeated use.

## Self-Evaluation

Independence: PASS. Refresh can be built without changing Navigation route taxonomy.

Completeness: PASS. The decomposition covers detection, read set, output, placement, and scaling.

Reassembly: PASS. If each piece is implemented, an idle Navigator can receive a fresh sync brief before producing a new route map.

