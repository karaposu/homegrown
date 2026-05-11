# Critique: Route Expansion Fields Necessity For Auto Navigation

## Dimensions With Weights

- Correctness HIGH: supports auto Navigation and multi-resolution coverage.
- Maintenance burden HIGH: avoids stale state and manual updates.
- Boundary coherence HIGH: keeps route maps and expansion ledgers separate.
- Readability HIGH: keeps ordinary Navigation maps usable.
- Automation readiness MEDIUM: gives future runners enough data.
- Flexibility MEDIUM: allows future hints if real use proves need.

## Fitness Landscape

Viable region: expansion state lives in `_frontier.md`; route cards remain descriptive; optional hints deferred.

Boundary region: a single optional `Expansion hint` field used only before ledger creation.

Dead region: required per-route `Expansion`, `Expansion reason`, and `Child maps` fields in every Navigation map.

## Candidate Verdicts

### Candidate 1: Add all three fields as required route-card fields

Verdict: KILL.

Prosecution: This duplicates `_frontier.md` state, bloats every route card, and creates update burden. `Child maps` is especially dangerous because it becomes stale whenever child maps are added, moved, skipped, or superseded.

Defense: It makes expansion needs visible directly in the parent map.

Collision: The defense is real, but the cost is higher than the value now. `_frontier.md` already gives visibility once multi-resolution begins.

Constructive seed: If visibility is needed, add a map-level pointer or optional hint later.

### Candidate 2: Add the fields only when a map is explicitly multi-resolution-ready

Verdict: REFINE.

Prosecution: Even in multi-resolution maps, `Child maps` duplicates ledger state and can become stale.

Defense: It limits bloat to maps where expansion matters.

Collision: The narrowed scope is better, but still risks dual authority. Refine into optional non-authoritative hints, not state fields.

### Candidate 3: Use `_frontier.md` only; no route-card expansion fields

Verdict: SURVIVE.

Prosecution: Before `_frontier.md` exists, a reader may not see which routes look under-mapped.

Defense: It avoids duplicate state and keeps the expansion protocol as the source of truth. Candidate derivation can use existing route fields.

Collision: The weakness is acceptable for v1. If pre-ledger visibility becomes a real problem, add a small optional hint later.

### Candidate 4: Add one optional `Expansion hint` field later

Verdict: REFINE.

Prosecution: It may still create pressure to update parent maps.

Defense: It gives humans a lightweight readability signal without pretending to own child-map state.

Collision: Defer. Revive only after a real multi-resolution trial shows readers need pre-ledger hints.

## Assembly Check

Best assembly:

```text
ordinary navigation.md
  -> descriptive route cards only
  -> multi_resolution_navigation derives expansion candidates
  -> _frontier.md records expansion reasons, statuses, child paths, resume state
  -> optional parent map-level pointer to _frontier.md after expansion exists
```

## Coverage Map

Covered:

- required three fields;
- multi-resolution-only fields;
- `_frontier.md` only;
- future optional hint.

Remaining:

- first real multi-resolution trial;
- whether a map-level `_frontier.md` pointer should be added to the protocol output contract.

## Signal

TERMINATE with survivor: do not add required route-card Expansion fields now; use `_frontier.md` as expansion authority.

## Convergence Telemetry

Dimension coverage: complete for the design decision.

Adversarial strength: STRONG.

Landscape stability: STABLE.

Clean SURVIVE exists: yes.

Failure modes observed: avoided self-reference by grounding in update burden and current protocol state.

Overall: PROCEED.

