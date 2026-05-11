# Exploration: Recursive Navigation Coverage

## Mode and Entry Point

Mode: possibility exploration with artifact probes.

Entry point: signal-first. The user supplied a specific hunch: comprehensive Navigation may require iterative or recursive runs, first at the project-main-direction level and then per main direction.

## Exploration Cycles

### Cycle 1: Coarse Scan

Scanned:

- `homegrown/navigation/references/navigation.md`
- `devdocs/navigation/next_load_bearing_after_navigation_warmup.md`
- Navigation warm-up files under `homegrown/navigation/warmup/`
- recent Navigation findings about route-map contracts, prior-map reading, map usefulness, and route-card formatting

Found:

- Navigation is explicitly an enumeration discipline, not a selector, planner, or executor.
- The current route map contract is comprehensive at the route-record level: Direction, Goal, Type, Priority, Status, Blocked by, Purpose, Movement, Unlocks, Why, Guidance mode, Guidance, and Continuation note.
- Prior findings already treat Navigation maps as snapshots that need provenance, selection state, and reconciliation after use.
- Warm-up v1/v2/v3 prepares context, while prior Navigation-map reconciliation belongs after v3 as an overlay, not inside v1/v2/v3.
- The first real Navigation output had 13 routes and was useful, but also showed scanability and lifecycle pressure.

Signals detected:

- A single flat Navigation map can satisfy field completeness while still missing second-order coverage.
- "All possible directions" cannot mean infinite exhaustive expansion. It must mean complete at a declared resolution.
- Recursive Navigation is a natural way to increase resolution, but it can easily create map explosion.

Resolution decision:

Zoom in on the recursion boundary: when should Navigation stop at a top-level map, and when should it recursively map subspaces?

Frontier state:

Advancing. The coarse map shows the relevant territory but not the control rule for recursive use.

Confidence update:

- Confirmed: Navigation is an enumerator, not a selector.
- Confirmed: saved Navigation maps are continuation memory.
- Scanned: recursive Navigation as a usage pattern.
- Unknown: exact trigger contract for sub-navigation.

### Cycle 2: Probe Recursive Navigation

Probed:

- The user's proposed flow:

```text
find main directions in the codebase/project
run Navigation for each main direction
compose the complete Navigation map
then run MVL or another selector to judge top options
```

Found:

- The flow makes structural sense if "main directions" are treated as resolution partitions.
- The top-level Navigation map should not try to enumerate every sub-route in every major area. It should identify main regions and declare which regions need child maps.
- Child Navigation maps should inherit parent context and route identity, then enumerate that subspace at a deeper resolution.
- The composed result should be a map-of-maps, not one enormous flattened list.

Signals detected:

- Recursive Navigation belongs closer to "resolution management" than to ordinary route formatting.
- A child Navigation map is not a branch inquiry by default. It can be a navigation submap unless it needs a full MVL/MVL+ inquiry.
- Parallel child Navigation can be valid later, but only if each child has bounded input, parent route reference, and merge/reconciliation rules.

Resolution decision:

Zoom out to check boundaries with selection and MVL.

Frontier state:

Stabilizing. The recursive structure is visible; the main remaining risk is discipline boundary drift.

Confidence update:

- Confirmed: recursive Navigation can increase coverage.
- Scanned: map-of-maps composition.
- Unknown: exact file contract for child maps.

### Cycle 3: Boundary Scan

Scanned:

- Navigation's stated non-goals: decision-making, planning, routing, implementation.
- Findings that separate Navigation, materialization, outcome review, and selection.
- Prior map defects around stale snapshots and post-use reconciliation.

Found:

- Selecting "top options" should not be Navigation's job.
- MVL can be used after Navigation to evaluate top options, but there is a missing intermediate operation: selection or prioritization authority.
- Navigation may expose priority and confidence, but those are map metadata, not commitment.
- Recursive Navigation must preserve blocked, deferred, and low-priority routes; otherwise it becomes a filter instead of a coverage tool.

Signals detected:

- The phrase "list all possible paths" needs a constraint: "all meaningful routes at selected resolution."
- Without resolution limits, recursive Navigation can become unbounded.
- Without merge rules, child maps can increase the user's burden instead of reducing it.

Resolution decision:

Perform a jump scan against an alternative interpretation: maybe current Navigation should just be told to list more comprehensively.

Frontier state:

Stable. The key architecture is known.

Confidence update:

- Confirmed: Navigation should enumerate; selector/MVL should judge.
- Confirmed: recursion needs resolution boundaries.
- Inferred: child maps need parent route IDs and composition records.

### Jump Scan: "Just Ask Navigation To List All"

Scanned:

- The possibility that the right fix is simply stronger prompt wording: "list all possible routes."

Found:

- Prompt pressure alone is insufficient because one map has finite output and attention budget.
- A single pass will privilege visible, high-level, recent, or salient routes.
- Comprehensive coverage across a large project requires staged resolution: overview first, then submaps for dense or important regions.

Signals detected:

- The user's intuition is correct: flat "list all" is weaker than iterative coverage.

Resolution decision:

Converged.

## Convergence Check

Frontier stability: yes. The relevant regions are Navigation role, recursive coverage, resolution boundaries, child-map composition, and selector separation.

Declining discovery rate: yes. Later scans repeated the same boundary: Navigation maps, selector chooses, MVL evaluates.

Bounded gaps: yes. The remaining gaps are implementation details for a future child-map contract, not unanswered conceptual territory.

## Structural Map

### Territory Overview

The territory has five regions:

1. Top-level Navigation: enumerates main movement regions from the current project state.
2. Child Navigation: enumerates routes inside one parent route or main direction.
3. Composition: merges child maps into a readable map-of-maps.
4. Selection/Evaluation: chooses or ranks routes outside Navigation.
5. Lifecycle/Reconciliation: records what changed after routes are used.

### Inventory

Top-level Navigation:

- Finds major project directions.
- Should preserve blocked, deferred, low-priority, and risky routes.
- Should identify which routes need deeper child maps.

Child Navigation:

- Runs with a parent route as authorized context.
- Enumerates one subspace at a deeper resolution.
- Should not rewrite the parent map's authority.

Composition:

- Produces an index of parent routes and linked child maps.
- Preserves parent route state.
- Adds coverage status per subspace: unmapped, mapped, stale, superseded.

Selection/Evaluation:

- May be done by the user, a selector protocol, MVL, MVL+, or materialization request.
- Must not be silently absorbed by Navigation.

Lifecycle/Reconciliation:

- Updates route state after use.
- Prevents old maps from becoming false authority.

### Signal Log

Probed:

- Recursive Navigation as resolution management.
- Parent/child map boundary.
- Navigation vs selection boundary.

Deferred:

- Exact file naming for child maps.
- Whether child maps should be generated sequentially or in parallel by default.
- Whether a dedicated `recursive_navigation.md` protocol is needed.

### Confidence Map

- Navigation as enumerator: confirmed.
- Need for staged/recursive coverage: confirmed.
- Selector/MVL outside Navigation: confirmed.
- Map-of-maps composition: scanned.
- Child-map file contract: inferred.
- Parallel execution policy: unknown.

### Frontier State

The conceptual frontier is stable enough for Sensemaking. The next unknown is operational: whether recursive Navigation should be added to Navigation reference guidance now as a pattern, or deferred until another real Navigation run exposes the need.

### Gaps and Recommendations

- Gap: no explicit recursive Navigation contract exists yet.
- Gap: no child-map provenance/composition convention exists yet.
- Recommendation: treat recursive Navigation as "resolution expansion," not as a new discipline.
- Recommendation: keep top-option selection outside Navigation.
- Recommendation: add the idea to Navigation guidance only after deciding minimal wording, because over-protocolizing recursion could create complexity before evidence demands it.

## Telemetry

- Cycles run: 3 plus jump scan.
- Coverage: COMPLETE for conceptual territory; THIN for operational file contract.
- Main failure avoided: completeness bias from assuming one flat map can cover everything.
- Main residual risk: recursive maps may increase output volume unless bounded by resolution and composition rules.
