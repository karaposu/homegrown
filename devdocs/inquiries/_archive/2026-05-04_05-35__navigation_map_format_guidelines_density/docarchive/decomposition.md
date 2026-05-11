# Decomposition: Navigation Map Format And Guidelines Density

## Step 1 - Coupling Topology

The problem is a route-record presentation contract. Its parts are coupled by reading order and output budget.

### Major Clusters

1. **Route Identity**
   - route number
   - route name / direction
   - goal name
   - type tag

2. **Route State**
   - priority/confidence
   - status
   - blocked by
   - unlocks

3. **Route Meaning**
   - purpose
   - movement
   - why this route exists

4. **Guidance**
   - critical checks
   - approach hints
   - risk warnings
   - expansion on selected routes

5. **Continuation Memory**
   - continuation note
   - stale/superseded/open/done state in future maps

6. **Telemetry**
   - route-field completeness
   - guideline depth
   - route coverage
   - blocked-route visibility

### Coupling Notes

- Route Identity and Route State are strongly coupled in the reader's first scan. They should be adjacent but not collapsed into one overloaded line.
- Route Meaning and Guidance are moderately coupled. Guidance should respond to the route's purpose and risk, but it is not the same as the route's reason to exist.
- Guidance and Route Coverage are negatively coupled under output limits. More guidance per route can reduce number of routes included.
- Continuation Memory is strongly coupled to Route State, but not to full Guidelines.
- Telemetry is coupled to whatever output policy is chosen. If Guidelines become adaptive, telemetry must stop treating full Guidelines everywhere as the only complete state.

## Step 2 - Boundaries

The natural boundaries are:

1. **Identity Block:** what route this is.
2. **State Block:** whether/how it can be moved on.
3. **Meaning Block:** why it exists and what it changes.
4. **Guidance Block:** how to approach it, with adaptive depth.
5. **Memory Block:** what future warm-up should remember.
6. **Telemetry Block:** whether the map met coverage/detail expectations.

These boundaries make the output scannable without weakening the route contract.

## Step 3 - Bottom-Up Boundary Validation

### Atoms

- direction name
- goal name
- type
- priority/confidence
- status
- purpose
- movement
- blocked by
- unlocks
- why
- guidelines
- continuation note
- route coverage count
- guideline depth telemetry

### Validation

- Direction name and goal name belong together but should remain separate fields.
- Type, priority, and status belong together as metadata.
- Purpose, Movement, and WHY belong together as meaning/evidence.
- Blocked by and Unlocks belong with state because they describe reachability.
- Guidelines are their own layer because they can expand or shrink without changing route identity.
- Continuation note is a durable memory field and should stay visible even when Guidelines are compact.

Top-down and bottom-up boundaries agree. Confidence: HIGH.

## Step 4 - Question Tree

### Q1: What should be visible in the first scan of a route?

Verification criteria:

- [x] route number/name visible;
- [x] goal visible;
- [x] type visible;
- [x] priority/confidence visible;
- [x] status visible;
- [x] blocker visible or clearly `none`.

### Q2: What fields must remain mandatory for continuation memory?

Verification criteria:

- [x] Purpose remains mandatory.
- [x] Movement remains mandatory.
- [x] Status remains mandatory.
- [x] Blocked by remains mandatory.
- [x] Unlocks remains mandatory.
- [x] WHY remains mandatory.
- [x] Continuation note remains mandatory.

### Q3: What should happen to Guidelines?

Verification criteria:

- [x] Guidelines remain part of Navigation.
- [x] Full Guidelines are not mandatory on every route.
- [x] Guideline depth is determined by priority, risk, blocked state, and action proximity.
- [x] Selected routes can request expanded Guidelines.

### Q4: How should telemetry change?

Verification criteria:

- [x] Route coverage is measured separately from guideline depth.
- [x] Guideline depth can be `compact`, `full`, or `expanded-on-request`.
- [x] A map can be complete even if low/deferred routes have compact guidance.

### Q5: What format should be proposed?

Verification criteria:

- [x] Uses route/card sections.
- [x] Separates direction and goal.
- [x] Keeps type as a tag/field.
- [x] Uses blank lines and predictable labels.
- [x] Can support compact and full views.

## Step 5 - Interface Map

| Source Piece | Target Piece | Flow | Direction |
|---|---|---|---|
| Identity Block | State Block | route id anchors status and priority | one-way |
| State Block | Guidance Block | blocked/high-risk routes require more guidance | one-way |
| Meaning Block | Guidance Block | purpose and WHY determine useful pointers | one-way |
| State Block | Continuation Memory | current state becomes future memory | one-way |
| Guidance Block | Telemetry Block | guidance mode affects quality report | one-way |
| Route Coverage | Guidance Block | broad maps constrain guidance depth | one-way |

## Step 6 - Dependency Order

1. Define route-card identity/state format.
2. Preserve mandatory route-state and meaning fields.
3. Define adaptive Guidelines policy.
4. Update telemetry to distinguish route coverage from guideline depth.
5. Patch Navigation reference/examples.
6. Test with the existing `next_load_bearing_after_navigation_warmup.md` map or a future Navigation run.

## Step 7 - Self-Evaluation

| Dimension | Result | Reason |
|---|---|---|
| Independence | PASS | Format, required fields, Guidelines, and telemetry can be adjusted separately. |
| Completeness | PASS | Covers readability, route semantics, guidance depth, and continuation memory. |
| Reassembly | PASS | Pieces recombine into a clear revised route-map contract. |
| Tractability | PASS | A spec patch can implement this without new tooling. |
| Interface clarity | PASS | The main coupling is explicit: Guidelines depend on route state and output budget. |
| Balance | PASS | No piece dominates excessively. |
| Confidence | HIGH | Boundaries match the bottom-up atoms. |

## Proposed Route Card Skeleton

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
Why this route exists: latest canonical finding says prior Navigation maps should be reconciled after warm-up v3.

Guidance mode: compact
Guidance:
- Add warm-up README/index because future agents need visible run-order and session-boundary rules.
- Keep prior-map overlay small because a full warmup4 is deferred until repeated evidence demands it.

Continuation note: nearest closure route for Navigation warm-up continuity; revisit after first real post-v3 handoff use.
```

## Telemetry

- **Pieces:** 6.
- **Interfaces:** 6.
- **Dependency clarity:** HIGH.
- **Hidden coupling risk:** MEDIUM around Guidelines and route coverage.

Overall: PROCEED.
