# Innovation: Navigation Map Format And Guidelines Density

## User Input

Should Navigation map route records be reformatted into a more readable direction/goal card shape, and should Guidelines remain mandatory on every route or become adaptive to allow more direction coverage?

## Seed

The route map has the right information but the wrong hierarchy. The user needs to scan many directions without losing the ability to act on selected or high-risk routes.

Valuation: this matters because Navigation's value is comprehensive route visibility. If format friction makes the map hard to read, the system may produce correct artifacts that the user avoids using.

## Mechanism Outputs

### 1. Lens Shifting

- **Generic:** Treat the map as a dashboard, not a report. The first screen should show route identity and state, not full reasoning.
- **Focused:** Treat each route as a card with progressive disclosure. Top layer: direction/goal/state. Lower layer: purpose/movement/why/guidance/memory.
- **Contrarian:** Treat Guidelines as post-selection expansion. A Navigation map should list routes first and generate deeper advice only after selection.

**Best output:** route cards with progressive detail.

### 2. Combination

- **Generic:** Combine issue tracker cards with Navigation route records: title, goal, tags, status, blocker, then details.
- **Focused:** Combine route map and continuation memory: keep Continuation note visible even when Guidelines are compact.
- **Contrarian:** Combine table summary and detail cards: a compact index at top, then full card records below.

**Best output:** optional Map Index plus route cards.

### 3. Inversion

- **Generic:** Instead of "every route must include guidance," assume "no route gets full guidance unless it earns it."
- **Focused:** Instead of route title containing type/status, make type/status metadata fields and let the title be human-readable.
- **Contrarian:** Instead of asking how to fit all details, ask what the reader must know before deciding whether to read details.

**Best output:** separate "scan layer" from "detail layer."

### 4. Constraint Manipulation

- **Generic:** Add constraint: route coverage has priority over full guidance.
- **Focused:** Add constraint: full Guidelines are required only for HIGH routes, blocked routes with non-obvious unblock conditions, risky routes, or selected routes.
- **Contrarian:** Add constraint: LOW/deferred routes may have no Guidelines if Purpose, WHY, and Continuation note are clear.

**Best output:** adaptive Guidelines based on route importance and action proximity.

### 5. Absence Recognition

- **Generic:** Missing field: Goal. Purpose says why route matters, but Goal names the target state in a short phrase.
- **Focused:** Missing field: Guidance mode. Without it, telemetry cannot distinguish compact guidance from accidental thin guidance.
- **Contrarian:** Missing artifact: Selected-route expansion. Navigation can keep broad maps compact and expand only the chosen route.

**Best output:** add `Goal` and `Guidance mode`.

### 6. Domain Transfer

- **Generic:** From kanban/issue cards: status and blocker must be visible without reading prose.
- **Focused:** From API docs: summary first, details below. Repeated records need predictable field order.
- **Contrarian:** From maps: not every road needs turn-by-turn instructions; only the selected route does.

**Best output:** compact route state plus full guidance only when needed.

### 7. Extrapolation

- **Generic:** With 30 routes, full Guidelines on every route will make the map unreadable.
- **Focused:** With many accumulated maps, future warm-up needs state and continuation notes more than old advice blocks.
- **Contrarian:** If Guidelines are removed globally, selected-route materialization will keep asking follow-up questions and lose safety checks.

**Best output:** keep Guidelines available, but make them depth-controlled.

## Candidate Formats

### Candidate A: Full Route Card

```text
### Route 1: Materialize post-v3 Navigation continuation handoff

Goal: durable continuation memory after warm-up
Type: DEVELOP
Priority: HIGH
Status: active
Blocked by: none

Purpose: make Navigation warm-up usable as durable session memory instead of a one-off summary.
Movement: warm-up files lack handoff rule -> warm-up routine with README/index and post-v3 prior-map overlay.
Unlocks: reliable prior-map reading; cleaner Navigation sessions; later Navigation Observer report contract.
Why this route exists: latest canonical finding says prior maps should be reconciled after v3.

Guidance mode: compact
Guidance:
- Add warm-up README/index because future agents need visible run-order and session-boundary rules.
- Keep prior-map overlay small because a full warmup4 is deferred until repeated evidence demands it.

Continuation note: nearest closure route for Navigation warm-up continuity; revisit after first real post-v3 handoff use.
```

**Test:** highly readable, preserves fields, slightly longer per route than current format but easier to scan.

**Verdict:** SURVIVES.

### Candidate B: Map Index Plus Detail Cards

```text
## Route Index

| # | Direction | Goal | Type | Priority | Status | Blocked by |
|---|---|---|---|---|---|---|
| 1 | Materialize post-v3 handoff | Durable continuation memory | DEVELOP | HIGH | active | none |

## Route Details

### Route 1: ...
...
```

**Test:** best for many routes, but adds duplicate maintenance burden and can make hand-written output slower.

**Verdict:** REFINE. Use only for large maps or when requested.

### Candidate C: Compact Routes With No Guidelines

```text
### Route 1: ...
Goal:
Type:
Status:
Purpose:
Movement:
Blocked by:
Unlocks:
Why:
Continuation note:
```

**Test:** maximizes route count, but loses approach constraints and weakens materialization readiness.

**Verdict:** KILL as default. Keep as a possible ultra-compact mode only when the user asks for breadth over guidance.

### Candidate D: Adaptive Guidance Policy

```text
Guidance mode:
- none: allowed only for low/deferred routes when WHY and Continuation note are sufficient.
- compact: 1-2 critical pointers.
- full: 3-5 pointers with per-pointer reason.
- expand-on-selection: defer full guidance until user selects the route.
```

Default rule:

```text
HIGH, risky, blocked, or near-action routes -> compact or full.
MEDIUM open/deferred routes -> compact.
LOW/deferred routes -> none or compact.
Selected route -> full or expanded.
```

**Test:** preserves actionability while controlling output cost.

**Verdict:** STRONG SURVIVOR.

### Candidate E: Telemetry Split

Replace one `Guideline depth: COMPLETE` metric with:

```text
Route coverage: COMPLETE / FLAG / THIN
Guidance allocation: COMPLETE / FLAG / THIN
Guidance modes used: none N, compact N, full N, expand-on-selection N
```

**Test:** prevents compact guidance from being falsely judged as incomplete.

**Verdict:** SURVIVES.

## Assembly Check

Best assembly:

```text
Default Navigation output = route cards + adaptive guidance + updated telemetry
Large Navigation output = optional index + route cards
Selected route = expanded full guidance
```

This assembly preserves route coverage, improves readability, and keeps Guidelines useful without allowing them to dominate every route.

## Survivors

1. Full Route Card as the default shape.
2. Adaptive Guidance Policy.
3. Telemetry Split between route coverage and guidance allocation.
4. Optional Map Index for large maps.

## Killed or Limited

- Compact routes with no Guidelines as the default: killed.
- Mandatory 3-6 Guidelines on every route: killed.
- Dense one-line header as canonical format: killed.

## Telemetry

- **Generators applied:** 4/4.
- **Framers applied:** 3/3.
- **Convergence:** YES. Six mechanisms converge on layered route cards plus adaptive guidance.
- **Survivors tested:** 4/4.
- **Failure modes observed:** none.

Overall: PROCEED.
