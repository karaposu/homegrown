# Sensemaking: Route Expansion Fields Necessity For Auto Navigation

## SV1 - Baseline Understanding

Expansion fields looked useful because they expose which routes need child maps. The user's concern reveals the hidden cost: once those fields live in route cards, they become state that must be updated.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Navigation maps should remain readable.
- Auto Navigation should reduce human burden, not create manual update work.
- Multi-resolution Navigation already has `_frontier.md` as expansion-state source of truth.
- Child maps are created lazily only when candidates are expanded.
- Navigation should enumerate, not execute or select.

### Key Insights

- `Expansion: needed` is not the same kind of field as `Purpose` or `Blocked by`.
- Purpose and blockers describe the route itself.
- Expansion status describes whether another artifact has mapped the route's subspace.
- Artifact-derived state belongs in a ledger, not in every route card.

### Structural Points

- Parent route map answers: what routes exist?
- `_frontier.md` answers: which routes are candidates for expansion, what happened to them, and how to resume?
- Auto multi-resolution can compute expansion candidates from existing route fields.
- Required Expansion fields would duplicate ledger state.

### Foundational Principles

- Do not store the same operational state in two places without a clear authority rule.
- Avoid adding maintenance state before real use proves the need.
- Prefer derivable signals over manually updated fields.

### Meaning-Nodes

- expansion hint
- expansion state
- ledger authority
- stale child map pointer
- derived frontier

## SV2 - Anchor-Informed Understanding

The issue is not whether deeper maps matter. They do. The issue is where the signal should live. Expansion state should live in `_frontier.md`; route cards should remain descriptive route records.

## Phase 2 - Perspective Checking

### Technical / Logical

The multi-resolution protocol can inspect each route's priority, status, blockers, unlocks, WHY, guidance mode, and continuation note to produce expansion candidates. It does not need an `Expansion` field to function.

### Human / User

The user will pay the maintenance cost if route cards contain child-map links that must be updated. A stale `Child maps` field is worse than no field because it creates false continuation memory.

### Strategic / Long-Term

For auto Navigation, derivability matters. The system should infer where deeper mapping is needed and record that inference in a generated ledger. Manual route-card expansion fields are less scalable.

### Risk / Failure

The biggest failure mode is dual authority: parent `navigation.md` says one thing, `_frontier.md` says another. Another failure mode is route-card bloat, where every map becomes heavier before multi-resolution is even used.

### Resource / Feasibility

Avoiding the fields is easier now. The existing protocol already supports candidate records in `_frontier.md`.

### Definitional / Consistency

Navigation is a route enumeration discipline. Expansion is a later multi-resolution traversal operation. A route card can contain hints, but expansion state should not become part of basic Navigation identity.

## SV3 - Multi-Perspective Understanding

The earlier proposal should be narrowed. Expansion fields are not required route-card fields. At most, a future map may include optional expansion hints when it is explicitly prepared for multi-resolution traversal.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Are Expansion fields required for auto Navigation?

**Strongest counter-interpretation:** Yes. Auto Navigation needs explicit fields so a future runner knows which routes to expand.

**Why the counter-interpretation fails:** A runner can derive candidates from existing route fields and write `_frontier.md`. The candidate record already includes `expansion_reason`, eligibility, status, and child path. Explicit route-card fields are convenient but not structurally necessary.

**Confidence:** HIGH.

**Resolution:** Expansion fields are not required for auto Navigation.

**What is now fixed?** Auto Navigation can proceed without adding them to every route card.

**What is no longer allowed?** Treating route-card Expansion fields as a blocker for multi-resolution Navigation.

**What now depends on this choice?** The multi-resolution protocol remains the primary expansion-state mechanism.

### Ambiguity: Are Expansion fields harmful?

**Strongest counter-interpretation:** They are harmless optional metadata.

**Why the counter-interpretation fails:** Once `Child maps` or `Expansion` appears in route cards, readers may treat it as current state. If it is not updated after child maps change, it becomes misleading.

**Confidence:** HIGH.

**Resolution:** They are not inherently harmful, but making them standard required fields now is risky.

**What is now fixed?** Do not add them as required route-card fields.

**What is no longer allowed?** Duplicating `_frontier.md` state inside every parent route card.

### Ambiguity: Should there be any route-level signal at all?

**Strongest counter-interpretation:** No. Put everything in `_frontier.md` and keep route cards pure.

**Why the counter-interpretation partially fails:** Before `_frontier.md` exists, a human may still want to know whether a route looks dense or under-mapped.

**Confidence:** MEDIUM.

**Resolution:** Defer route-level expansion hints. If needed later, add a single optional `Expansion hint` field, not three stateful fields.

**What is now fixed?** Route-card expansion hints are deferred, not killed forever.

## SV4 - Clarified Understanding

Expansion state should not be embedded into ordinary Navigation route cards. Multi-resolution Navigation can work by deriving candidates from existing route records and storing expansion state in `_frontier.md`.

## Phase 4 - Degrees-of-Freedom Reduction

Fixed:

- `_frontier.md` is the source of truth for expansion candidates, statuses, and child paths.
- Route cards do not need required `Expansion`, `Expansion reason`, or `Child maps` fields.
- Auto Navigation can work without them.

Eliminated:

- Making Expansion fields mandatory in ordinary maps.
- Storing child-map paths in two places.
- Treating lack of Expansion fields as a blocker.

Remaining viable:

- Optional future `Expansion hint` field.
- Map-level pointer: `Expansion state: see _frontier.md` when a multi-resolution run exists.
- First real multi-resolution trial without route-card Expansion fields.

## SV5 - Constrained Understanding

The safe path is to avoid the route-card patch now and test multi-resolution using `_frontier.md`.

## SV6 - Stabilized Model

Expansion fields are not load-bearing for auto Navigation. What is load-bearing is preserving expansion candidates and child-map state in `_frontier.md`. Route cards should stay focused on route meaning and reachability. If real use shows that expansion hints are needed for readability before ledger creation, add one optional hint later.

