# Innovation: Navigation Output Usefulness Review

## User Input

Review `devdocs/navigation/next_load_bearing_after_navigation_warmup.md`: how good it is, what is missing or lacking, and how useful it is.

## Seed

The Navigation map is good enough to expose real routes, but the user's burden is not fully reduced until map output can become durable current movement state after selection and use.

Valuation: this matters because Navigation is supposed to relax the user's developer/navigation burden. A beautiful route map that still requires the user to manually remember what was selected, used, fixed, or stale does not yet carry enough load.

## Mechanism Outputs

### 1. Lens Shifting

- **Generic:** Evaluate the map not as an answer, but as a state snapshot. Under that lens, its main weakness is expected: snapshots need reconciliation.
- **Focused:** Evaluate the map as future-session input. It becomes strong because continuation notes and blockers help future warm-up, but weak where read-set provenance and selected-route state are absent.
- **Contrarian:** Evaluate the map as too successful. It may look authoritative because it is well-structured, increasing the risk that stale routes get trusted later.

**Best output:** Treat Navigation maps as route-state snapshots with an explicit freshness/reconciliation lifecycle.

### 2. Combination

- **Generic:** Combine Navigation map + outcome review. Result: after a selected route is used, update route state with expected vs observed results.
- **Focused:** Combine post-v3 continuation overlay + prior Navigation maps. Result: a small "route-state handoff" that classifies old routes before new Navigation.
- **Contrarian:** Combine comprehensive map + compact current-move card. Result: preserve the full map for memory, but add one small handoff section for immediate operator use.

**Best output:** Full map plus compact handoff are different artifacts that should coexist.

### 3. Inversion

- **Generic:** Instead of asking "what should Navigation add?", ask "what should Navigation refuse to do?" It should refuse to select, implement, or claim current truth after action.
- **Focused:** Instead of making maps more detailed, make them easier to invalidate. Add provenance, freshness, and route-state update points.
- **Contrarian:** Instead of reducing user burden by more automation, reduce it by making old decisions easier to distrust when stale.

**Best output:** Navigation should become more falsifiable, not more authoritative.

### 4. Constraint Manipulation

- **Generic:** Add constraint: every Navigation map is stale after any selected route is acted on. This forces route-state reconciliation.
- **Focused:** Add constraint: future Navigation maps must name the exact warmed artifacts/read set used. This improves diagnosis without changing route structure.
- **Contrarian:** Add constraint: Navigation output may not contain a "recommended next" unless explicitly labeled as selector output. This protects discipline boundary.

**Best output:** Add a freshness contract: selected-route action invalidates or ages the prior map until reconciled.

### 5. Absence Recognition

- **Generic:** Missing thing: a "selected route" record.
- **Focused:** Missing thing: a post-use route-state update that says which routes are now done, stale, superseded, still blocked, or newly open.
- **Contrarian:** Missing thing: a "not selected but still important" preservation rule, so unchosen routes do not disappear.

**Best output:** Create a route-state reconciliation record, not just an outcome review.

### 6. Domain Transfer

- **Generic:** From issue trackers: tickets have status transitions, not just descriptions. Navigation routes need state transitions after use.
- **Focused:** From incident postmortems: expected behavior vs observed behavior reveals process defects. Selected Navigation routes should generate outcome records.
- **Contrarian:** From maps/navigation systems: old map tiles are useful only with recency metadata. Navigation maps need freshness metadata and invalidation rules.

**Best output:** Route records need lifecycle semantics like lightweight issue states, but without becoming a task tracker.

### 7. Extrapolation

- **Generic:** After 10 Navigation maps, unreconciled route snapshots will conflict and confuse future sessions.
- **Focused:** After several selected moves, route maps can become training data for a future selector only if route outcomes are recorded.
- **Contrarian:** If no reconciliation exists, the user will stop trusting Navigation maps because each map will require manual correction.

**Best output:** Build route-state reconciliation before map accumulation becomes painful.

## Candidate Set

### Candidate A: Add a Navigation Map Provenance Rule

Future Navigation outputs should include a compact read-set section:

```text
Context consumed:
- warm-up outputs:
- prior navigation maps:
- current project files/findings:
- freshness cutoff:
- known missing context:
```

**Tests:**

- Novelty: modest.
- Scrutiny survival: survives; provenance is directly tied to diagnosis and staleness.
- Fertility: opens better future warm-up and diagnosis.
- Actionability: high.
- Mechanism independence: supported by lens shifting, constraint manipulation, and domain transfer.

**Verdict:** SURVIVES as a small correction.

### Candidate B: Add a Compact Current-Move Handoff Beside the Full Map

Keep the comprehensive map, but add a small section or companion artifact:

```text
Current handoff:
- strongest open route:
- blocked high-value routes:
- selected route:
- action taken:
- review gate:
```

This is not Navigation selection unless the user or selector fills `selected route`.

**Tests:**

- Novelty: medium.
- Scrutiny survival: survives if kept separate from Navigation's enumeration role.
- Fertility: opens selector/materialization/outcome flow.
- Actionability: high.
- Mechanism independence: supported by combination, absence recognition, and extrapolation.

**Verdict:** SURVIVES with boundary condition: selection must be explicit and external to Navigation.

### Candidate C: Route-State Reconciliation Record

After a route is used, create a lightweight record that updates route states:

```text
Route acted on:
Expected unlocks:
Observed result:
Routes now done:
Routes now stale/superseded:
Routes still blocked:
New routes opened:
Outcome review needed:
```

**Tests:**

- Novelty: medium-high in this system.
- Scrutiny survival: survives; it directly addresses snapshot decay.
- Fertility: strong. Enables future selector data, better warm-up, and outcome review.
- Actionability: high.
- Mechanism independence: supported by combination, inversion, absence recognition, domain transfer, and extrapolation.

**Verdict:** STRONG SURVIVOR.

### Candidate D: Navigation Vocabulary Hygiene Rule

Add guidance to avoid terms the user rejected and use neutral operational language:

```text
dogfood -> first real use / trial use / evidence-producing use
cleanest immediate closure -> strongest open route / nearest closure candidate
```

**Tests:**

- Novelty: low.
- Scrutiny survival: survives; user friction matters for repeated use.
- Fertility: limited but useful.
- Actionability: high.
- Mechanism independence: mostly human/user perspective and constraint manipulation.

**Verdict:** SURVIVES as small polish, not load-bearing by itself.

### Candidate E: Navigation Should Produce a "No Selection Made" Marker

At the end of a map:

```text
Selection state: no route selected by Navigation.
Next selector: user / selector protocol / materialization protocol.
```

**Tests:**

- Novelty: low-medium.
- Scrutiny survival: survives because it protects discipline boundary.
- Fertility: opens explicit selector integration.
- Actionability: high.
- Mechanism independence: supported by inversion and constraint manipulation.

**Verdict:** SURVIVES as boundary hardening.

## Assembly Check

The strongest architecture is:

```text
Navigation map = comprehensive route-space snapshot
Provenance section = why this snapshot should be trusted and where it may be thin
Selection marker/handoff = whether any route was selected outside Navigation
Route-state reconciliation = update old snapshot after use
Outcome review = judge whether the selected route worked in reality
Future warm-up = reads map + reconciliation + outcome as evidence
```

This assembly is better than any single candidate. It preserves Navigation's enumeration role while making maps usable across time.

## Survivors

1. **Route-state reconciliation record** - strongest survivor.
2. **Compact current-move handoff** - survives if selection is explicit and external.
3. **Navigation map provenance rule** - small, useful correction.
4. **Selection-state marker** - boundary hardening.
5. **Vocabulary hygiene rule** - quick user-fit correction.

## Killed or Limited

- **Make Navigation select the best route automatically:** killed. It violates discipline boundary and reintroduces hard-routing risk.
- **Shrink the map by dropping low/deferred/blocked routes:** killed. It destroys continuation memory.
- **Add another full warm-up stage immediately:** killed. The gaps are lifecycle/reconciliation gaps, not broad context gaps.
- **Build route graph engine now:** deferred. Wait until several maps expose Markdown limits.

## Telemetry

- **Generators applied:** 4/4.
- **Framers applied:** 3/3.
- **Convergence:** YES. Five mechanisms converged on route-state reconciliation/freshness lifecycle.
- **Survivors tested:** 5/5.
- **Failure modes observed:** none. No premature evaluation, no single-mechanism trap, no grounding loss.

Overall: PROCEED.
