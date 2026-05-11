# Innovation: Route Expansion Fields Necessity For Auto Navigation

## Seed

Route-card Expansion fields may help show which routes need child maps, but they may create stale update burden.

## Mechanism Outputs

### Lens Shifting

Generic: Treat Expansion fields as state, not documentation.

Focused: Once `Child maps` is in a route card, it must be maintained like a pointer. That belongs in a ledger.

Contrarian: Treat expansion need as a computed view, not a stored route attribute.

### Combination

Generic: Combine route-card descriptors with `_frontier.md`.

Focused: Let route cards describe routes; let multi-resolution Navigation compute candidates and store candidate records in `_frontier.md`.

Contrarian: Add only a map-level pointer to `_frontier.md`, not per-route fields.

### Inversion

Generic: Instead of route cards saying "I need expansion," let the expansion protocol decide "this route is a candidate."

Focused: Parent maps stay stable; expansion state is generated when expansion is requested.

Contrarian: The absence of Expansion fields may be a feature because it prevents premature recursion pressure.

### Constraint Manipulation

Generic: Add the constraint "no duplicate operational state."

Focused: If `_frontier.md` has child paths and statuses, parent route cards should not also have them.

Contrarian: Add the constraint "ordinary Navigation maps must not get heavier for a multi-resolution feature that may not be used."

### Absence Recognition

Generic: The missing thing is not a route field; it is a derivation rule for expansion candidates.

Focused: `multi_resolution_navigation.md` can already scan routes and record candidates. A future runner needs candidate derivation guidance more than route-card metadata.

Contrarian: The only possibly missing route-level feature is an optional hint for pre-ledger readability.

### Domain Transfer

Generic: Borrow from database normalization: avoid storing the same fact in two places.

Focused: `Child maps` belongs in the relation/table that owns child expansion state: `_frontier.md`.

Contrarian: Borrow from compilers: expansion candidates can be generated from source data; source files do not store every derived artifact edge manually.

### Extrapolation

Generic: As maps multiply, stale child pointers in parent route cards will become common.

Focused: Auto Navigation becomes easier if it can regenerate expansion frontier rather than maintain per-route expansion flags.

Contrarian: If a future UI needs expansion state, it should read `_frontier.md`, not scrape route cards.

## Assembly Candidate

Do not add `Expansion`, `Expansion reason`, and `Child maps` to the ordinary route-card contract now.

Instead:

- keep `_frontier.md` as expansion-state source of truth;
- let multi-resolution Navigation derive expansion candidates from existing route fields;
- optionally add a map-level note when a multi-resolution run exists: `Expansion state: see _frontier.md`;
- defer a single optional `Expansion hint` field until real use proves it is needed.

## Innovation Telemetry

Generators applied: 4/4.

Framers applied: 3/3.

Convergence: YES. Multiple mechanisms converge on avoiding duplicated state.

Survivors tested: 1/1 assembly candidate tested.

Failure modes observed: none significant.

Overall: PROCEED.

