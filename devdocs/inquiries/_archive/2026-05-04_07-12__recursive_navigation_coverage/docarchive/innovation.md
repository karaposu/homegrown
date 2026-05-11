# Innovation: Recursive Navigation Coverage

## User Input

Does iterative or recursive Navigation make sense for comprehensive route coverage: first find the main directions in the codebase/project, then run Navigation for each main direction, and only afterward use MVL or another operation to identify top options?

## Seed

Seed type: signal + gap.

The signal is that one Navigation run cannot reliably expose a large project's full route space. The gap is the lack of a controlled way to expand Navigation resolution without turning Navigation into selection, planning, or unbounded recursion.

## Mechanism Outputs

### 1. Lens Shifting

- Generic: Treat Navigation maps like maps at different zoom levels. A top-level map is not incomplete because it does not show every street; it is complete for its scale.
- Focused: Add "resolution" as a Navigation output property: project-level, direction-level, route-level, artifact-level.
- Contrarian: The best Navigation output may be intentionally incomplete at low resolution if it explicitly marks expandable regions.

### 2. Combination

- Generic: Combine Navigation with Exploration's scan/probe idea: broad route scan first, then deeper route probes.
- Focused: Combine route cards with child-map links: each route can point to zero or more submaps.
- Contrarian: Combine Navigation with package/module indexing: route maps could eventually become a source-indexed atlas, not just a list of decisions.

### 3. Inversion

- Generic: Instead of Navigation trying to list all paths, make Navigation list where it cannot yet list all paths.
- Focused: Replace "complete map" with "complete map plus declared unknowns and expansion candidates."
- Contrarian: The most honest comprehensive Navigation run may be one that refuses to expand certain regions because their source authority is too weak.

### 4. Constraint Manipulation

- Generic: Add a constraint: each Navigation run must declare its resolution and stop condition.
- Focused: Add a constraint: child maps may only be created from parent routes marked `Expansion: needed`, `Expansion: optional`, or `Expansion: no`.
- Contrarian: Add a budget constraint: at most N child maps per session unless the user explicitly authorizes broader expansion.

### 5. Absence Recognition

- Generic: Missing artifact: a child Navigation map contract.
- Focused: Missing field: `Expansion` or `Coverage` on route cards.
- Contrarian: Missing operation: route-map composition may matter more than recursive generation itself.

### 6. Domain Transfer

- Generic: Import cartography: overview map, region maps, local maps, index, legend, stale revision markers.
- Focused: Import compiler/pass architecture: top-level pass emits worklist; child passes analyze subregions; final pass composes results.
- Contrarian: Import incident command: do not send teams into every region; triage regions, assign probes, then reconcile reports.

### 7. Extrapolation

- Generic: If Homegrown accumulates many Navigation maps, flat Markdown lists will become hard to traverse.
- Focused: If branch and multihead execution grow, child maps and composition become prerequisites for sane parallelism.
- Contrarian: If recursive Navigation starts before outcome review and reconciliation are used, it may create a pile of maps with no learning loop.

## Tested Candidates

### Candidate A: Multi-Resolution Navigation Note

Description:

Patch Navigation reference guidance to say Navigation can run at declared resolution levels and may mark expandable regions for child maps.

Tests:

- Novelty: Medium. It extends existing Navigation but does not create a new protocol.
- Scrutiny survival: Strong. It directly fixes flat-map coverage without overbuilding.
- Fertility: High. It enables child maps later.
- Actionability: High. Small documentation/protocol edit.
- Mechanism independence: High. Produced by lens shifting, constraint manipulation, and absence recognition.

Verdict: SURVIVES.

### Candidate B: Child Navigation Map Contract

Description:

Create a contract for child maps: parent map, parent route, child question, source boundary, inherited context, route-card output, composition notes.

Tests:

- Novelty: Medium/high. It turns recursion from a vague idea into an artifact contract.
- Scrutiny survival: Strong. It addresses the main hidden-coupling risk.
- Fertility: High. It enables sequential and later parallel submaps.
- Actionability: Medium. Needs careful design but is tractable.
- Mechanism independence: High. Produced by combination, absence recognition, and domain transfer.

Verdict: SURVIVES with refinement. It may be too much to build before one manual trial unless the user wants immediate protocol work.

### Candidate C: Navigation Atlas / Map-of-Maps

Description:

Represent parent and child maps as an atlas with route index, child-map links, coverage status, and stale/superseded markers.

Tests:

- Novelty: High.
- Scrutiny survival: Medium. Useful long-term, but can overbuild before enough maps exist.
- Fertility: High.
- Actionability: Medium/low now.
- Mechanism independence: Medium. Produced mostly by domain transfer and extrapolation.

Verdict: DEFER. Preserve as future shape after several child maps exist.

### Candidate D: Expansion Field On Route Cards

Description:

Add an optional route-card field:

```text
Expansion: no | optional | needed
Expansion reason: [density, uncertainty, blocker complexity, high value, user request, unknown]
Child maps: [links or none]
```

Tests:

- Novelty: Medium.
- Scrutiny survival: Strong. It is small and directly supports multi-resolution Navigation.
- Fertility: High. It creates the bridge to child maps without forcing them.
- Actionability: High. Easy to patch into Navigation guidance.
- Mechanism independence: High. Produced by inversion, constraint manipulation, absence recognition, and compiler-pass transfer.

Verdict: STRONG SURVIVOR.

### Candidate E: Recursive Navigation Protocol

Description:

Create `homegrown/protocols/recursive_navigation.md` to govern parent-map creation, child-map execution, composition, and selector handoff.

Tests:

- Novelty: Medium.
- Scrutiny survival: Mixed. It is structurally clean but may be premature.
- Fertility: High.
- Actionability: Medium.
- Mechanism independence: Medium.

Verdict: DEFER. Good future candidate after one manual route-card expansion trial.

### Candidate F: MVL-Based Selector After Map Completion

Description:

After a top-level map and child maps exist, run MVL/MVL+ on the composed map to identify top options, risks, and next commitment.

Tests:

- Novelty: Low/medium. It uses an existing loop in a new position.
- Scrutiny survival: Strong. It preserves Navigation's boundary.
- Fertility: High. It creates a disciplined selection/evaluation step.
- Actionability: High.
- Mechanism independence: High. Produced by inversion, boundary constraints, and prior findings.

Verdict: SURVIVES.

### Candidate G: Parallel Child Navigation

Description:

Run child Navigation maps in parallel for each main route after the parent map is created.

Tests:

- Novelty: Medium.
- Scrutiny survival: Weak now. Without child-map and composition contracts, it multiplies outputs and user burden.
- Fertility: High later.
- Actionability: Low now.
- Mechanism independence: Medium.

Verdict: KILL FOR NOW; preserve seed for later multihead.

## Assembly Check

The strongest assembly is:

```text
Navigation map declares resolution.
Route cards optionally include Expansion and Expansion reason.
Only flagged/selected/dense routes get child maps.
Child maps use a parent-route contract.
Composition produces a map-of-maps.
MVL/selector/user chooses top options after composition.
Materialization/outcome review handles action and evidence.
```

This assembly is stronger than any single candidate because it handles all pressures:

- coverage improves through child maps;
- recursion stays bounded through Expansion fields;
- parallelism remains possible later;
- Navigation does not select;
- MVL gets a better input when top-option evaluation is needed.

## Recommended Innovation

The best next concept is **multi-resolution Navigation with explicit Expansion fields**.

Minimal route-card addition:

```text
Expansion: no | optional | needed
Expansion reason: [why this route does or does not need deeper mapping]
Child maps: [links or none]
```

Operational rule:

```text
Top-level Navigation should not expand every route.
It should mark which routes need deeper maps and why.
Child Navigation should run only for selected, high-value, dense, blocked, uncertain, or user-requested regions.
```

Selection boundary:

```text
Navigation can mark expansion need.
Navigation cannot decide final top options.
MVL/MVL+, user selection, selector protocol, or materialization request performs commitment.
```

## Telemetry

- Generators applied: 4/4.
- Framers applied: 3/3.
- Convergence: YES. Four mechanisms converged on explicit expansion/resolution fields.
- Survivors tested: 7/7.
- Failure modes observed: none. Premature evaluation was avoided; parallelism was tested and rejected for now rather than accepted because it is attractive.
- Overall: PROCEED.
