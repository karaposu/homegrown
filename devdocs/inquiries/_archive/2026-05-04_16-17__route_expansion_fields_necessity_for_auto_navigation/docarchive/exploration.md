# Exploration: Route Expansion Fields Necessity For Auto Navigation

## User Input

The user questioned whether `Expansion`, `Expansion reason`, and `Child maps` fields are actually needed. The user noticed that if the parent route card records whether a route is clear, needs expansion, or already has child maps, then those fields can become stale and require updates. The user asked whether auto Navigation can work without them.

## Mode And Entry Point

Mode: artifact exploration plus possibility exploration.

Entry point: signal-first. The signal is a maintenance-risk concern around route-card expansion metadata.

## Cycle 1 - Current Route-Card Contract

Scanned:

- `homegrown/navigation/references/navigation.md`
- `homegrown/navigation/SKILL.md`

Found:

- Navigation route cards already contain route identity, state, meaning, evidence, guidance mode, and continuation note.
- The route-card format does not currently include `Expansion`, `Expansion reason`, or `Child maps`.
- Navigation telemetry checks route coverage, route-state completeness, blocked-route visibility, and guidance allocation.

Signals:

- Route cards are already dense.
- Adding three more fields to every route would increase friction.
- The existing fields already contain enough evidence for a later expansion process to infer expansion candidates: priority, blockers, unlocks, WHY, guidance mode, and continuation note.

Frontier state: stable enough.

Confidence: confirmed.

## Cycle 2 - Multi-Resolution Contract

Scanned:

- `homegrown/protocols/multi_resolution_navigation.md`
- `devdocs/inquiries/2026-05-04_14-43__navigation_frontier_ledger_sidecar_shape/finding.md`

Found:

- Multi-resolution Navigation already defines `_frontier.md` as the durable control ledger.
- `_frontier.md` records every expansion candidate, status, expansion reason, eligibility, scheduling reason, and child map path.
- The protocol explicitly says child folders are created only when a candidate is expanded.
- The ledger, not the parent route map, is the source of truth for expansion state.

Signals:

- Route-card Expansion fields would duplicate `_frontier.md`.
- `Child maps` in parent route cards creates a second place to update when children are created, skipped, stale, or superseded.
- If the parent route-card metadata and `_frontier.md` disagree, future sessions will not know which source to trust.

Frontier state: stable.

Confidence: confirmed.

## Jump Scan

Scanned outside the direct files:

- `devdocs/inquiries/2026-05-04_07-12__recursive_navigation_coverage/finding.md`
- recent Navigation auto freshness finding

Found:

- The earlier recursive Navigation finding proposed optional `Expansion`, `Expansion reason`, and `Child maps` fields.
- That proposal came before `_frontier.md` became the control-source sidecar.
- The newer `_frontier.md` protocol changes the design pressure: expansion state now has a better home.

Jump-scan result: the older route-card field proposal should be refined, not blindly implemented.

## Structural Map

Relevant state locations:

```text
navigation.md route card
  -> describes route existence, meaning, reachability, evidence, guidance, continuation

_frontier.md
  -> controls expansion candidates, eligibility, status, child paths, resume state
```

If Expansion fields go into route cards, the same expansion state lives in two places.

If Expansion fields stay out of route cards, multi-resolution Navigation can still derive a frontier and write `_frontier.md`.

## Confidence Map

- Confirmed: auto Navigation can derive expansion candidates from existing route cards.
- Confirmed: `_frontier.md` is designed to own expansion state.
- Confirmed: parent route-card `Child maps` would create update burden.
- Scanned: whether an optional hint field is still useful.
- Unknown: whether real users will miss an expansion hint before `_frontier.md` exists.

## Gaps And Recommendations

Do not add required Expansion fields to every route card now. If a real run shows humans cannot tell which routes deserve deeper mapping before `_frontier.md` is created, add a lightweight optional hint later. The source of truth for expansion state should remain `_frontier.md`.

