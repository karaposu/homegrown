# Innovation: prior_navigation_map_overlay_mutability

## Seed

The user is uncomfortable with a design that might require editing old Navigation maps to keep route statuses current.

## Mechanism Outputs

### Lens Shifting

- Generic: treat old maps as current ledgers.
- Focused: treat old maps as evidence and overlay as current interpretation.
- Contrarian: stop reading old maps entirely.

Survivor: evidence + overlay.

### Combination

- Generic: old map + overlay.
- Focused: old map snapshot + overlay current classification + new Navigation map.
- Contrarian: overlay + `_frontier.md` global state.

Survivor: snapshot + overlay + new map authority split.

### Inversion

- Current assumption: old routes should be updated so memory stays current.
- Inversion: old routes must not be updated so memory stays trustworthy.
- System-level inversion: route memory is not "one latest truth file"; it is a chain of snapshots plus current interpretations.

Survivor: immutable snapshots with current overlays.

### Constraint Manipulation

- Add constraint: no silent edits to old Navigation maps.
- Add constraint: every current classification needs evidence.
- Remove constraint: overlay must run before every Navigation.

Survivor: triggered read-only overlay.

### Absence Recognition

Missing artifact: a clear route-memory reconciliation record that is neither old map nor new map.

Survivor: `prior_map_overlay.md`.

### Domain Transfer

Event sourcing: old events are immutable; projections/read models carry current interpretation.

Survivor: old maps as events/snapshots; overlay as projection.

### Extrapolation

If old maps are edited over months, the project accumulates silent history loss. If overlays accumulate, the project may need a latest-overlay index later.

Survivor: immutable overlays now, possible index later.

## Assembly Survivor

Read-only prior-map overlay:

```text
old navigation.md = immutable snapshot
prior_map_overlay.md = current route-memory projection
new navigation.md = current route map
```

## Telemetry

Generators applied: 4/4.
Framers applied: 3/3.
Convergence: yes, five mechanisms converge on read-only overlay.
Survivors tested: 1/1.
Failure modes observed: none.
Overall: PROCEED.
