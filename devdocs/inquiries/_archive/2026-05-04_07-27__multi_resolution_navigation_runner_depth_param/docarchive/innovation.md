# Innovation: Multi-Resolution Navigation Runner Depth Param

## User Input

Should multi-resolution Navigation become a separate loop/runner like MVL with a depth parameter, or is there a better operational shape that avoids manually running Navigation one by one while keeping coverage bounded?

## Seed

Seed type: gap + constraint.

The gap is that multi-resolution Navigation cannot remain manual. The constraint is that automated traversal must not become unbounded recursion or hidden selection.

## Mechanism Outputs

### 1. Lens Shifting

- Generic: See the operation as traversal, not cognition. It walks a route tree; it does not think through multiple disciplines.
- Focused: Treat `depth` the way a crawler treats crawl depth: useful, but always paired with max pages and allow/deny rules.
- Contrarian: The first "runner" may be a protocol checklist, not executable automation.

### 2. Combination

- Generic: Combine Navigation with job-queue semantics: parent map emits expansion jobs, jobs produce child maps, composer merges output.
- Focused: Combine route cards with expansion metadata and a traversal queue.
- Contrarian: Combine Navigation with outcome review: expansion policy should eventually learn from which child maps proved useful.

### 3. Inversion

- Generic: Instead of "runner decides what to expand," require routes to prove they deserve expansion.
- Focused: Default `Expansion: no`; expansion happens only when policy or user selection changes it.
- Contrarian: The runner should be allowed to stop early and say "coverage is enough at this resolution."

### 4. Constraint Manipulation

- Generic: Add a budget: `depth`, `max_expansions`, `max_routes_per_map`, and `max_output_size`.
- Focused: Add a policy: `expansion-needed-only`, `high-priority-only`, `blocked-and-high`, `user-selected`, or `all-within-budget`.
- Contrarian: Forbid parallelism in v1 even if the runner structure could support it.

### 5. Absence Recognition

- Generic: Missing artifact: `homegrown/protocols/multi_resolution_navigation.md`.
- Focused: Missing route fields: `Expansion`, `Expansion reason`, `Child maps`.
- Contrarian: Missing product surface: a composed route atlas may matter more than the runner command itself.

### 6. Domain Transfer

- Generic: Web crawler: depth plus robots/policy plus page budget plus sitemap output.
- Focused: Test runner: discover tests, apply filters, execute within budget, report summary.
- Contrarian: Incident triage: don't investigate every lead; triage, assign, reconcile, stop.

### 7. Extrapolation

- Generic: If Homegrown keeps growing, manual Navigation expansion will become impossible.
- Focused: If multihead arrives later, a traversal runner becomes necessary infrastructure.
- Contrarian: If runner automation arrives before outcome calibration, it may generate route maps that nobody uses.

## Candidate Set

### Candidate A: Depth-Only Runner

Shape:

```text
/multi-navigation --depth 2 <context>
```

Test:

- Novelty: low.
- Scrutiny survival: weak. Depth alone does not bound breadth.
- Fertility: medium.
- Actionability: high but unsafe.
- Mechanism independence: low.

Verdict: KILL.

Seed extracted:

Depth is a necessary parameter, but not the runner contract.

### Candidate B: Budgeted Traversal Runner

Shape:

```text
/multi-navigation --depth 2 --max-expansions 4 --policy expansion-needed <context>
```

Test:

- Novelty: medium.
- Scrutiny survival: strong if child-map and composition contracts exist.
- Fertility: high.
- Actionability: medium.
- Mechanism independence: high.

Verdict: SURVIVE with staging.

### Candidate C: Protocol-First Multi-Resolution Navigation

Shape:

```text
homegrown/protocols/multi_resolution_navigation.md
```

The protocol defines:

- source authority;
- invocation fields;
- expansion policy;
- traversal budget;
- child-map header;
- output layout;
- composition artifact;
- no-selection boundary.

Test:

- Novelty: medium.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: high.
- Mechanism independence: high.

Verdict: STRONG SURVIVOR.

### Candidate D: Extend Existing Navigation With `--multi`

Shape:

```text
/navigation --multi --depth 2 --budget 4 <context>
```

Test:

- Novelty: medium.
- Scrutiny survival: mixed. Convenient, but risks bloating Navigation itself.
- Fertility: high.
- Actionability: medium.
- Mechanism independence: medium.

Verdict: REFINE.

Refinement:

Use later as command surface only after protocol behavior is stable.

### Candidate E: Separate Cognitive Loop Peer To MVL

Shape:

```text
/MNav depth=2
```

with a full loop identity similar to MVL.

Test:

- Novelty: medium.
- Scrutiny survival: weak. It misclassifies traversal as a multi-discipline cognitive loop.
- Fertility: medium.
- Actionability: medium.
- Mechanism independence: low.

Verdict: KILL.

Seed extracted:

A named command is useful, but it should be a traversal runner, not a peer cognitive primitive.

### Candidate F: Selector-First Expansion

Shape:

```text
top Navigation map
-> user/MVL selects 2-3 promising routes
-> child maps only for selected routes
```

Test:

- Novelty: medium.
- Scrutiny survival: strong for low budget; weak for comprehensive coverage.
- Fertility: medium.
- Actionability: high.
- Mechanism independence: medium.

Verdict: REFINE.

Refinement:

Good mode when the user needs a decision, not when the user needs comprehensive coverage.

### Candidate G: Atlas/Graph Manager

Shape:

Persistent route graph with parent/child maps, statuses, and expansion queue.

Test:

- Novelty: high.
- Scrutiny survival: weak now. Premature infrastructure.
- Fertility: high later.
- Actionability: low now.
- Mechanism independence: medium.

Verdict: DEFER.

## Assembly Check

The strongest assembly is:

```text
1. Patch Navigation route cards with expansion fields.
2. Create `homegrown/protocols/multi_resolution_navigation.md`.
3. Use protocol in sequential mode first:
   depth: 1 or 2
   max_expansions: 2-4
   policy: expansion-needed or user-selected
4. Produce a composed map-of-maps.
5. Stop before selection.
6. Promote to command/runner only after one or two successful protocol uses.
7. Add parallel child execution later.
```

This assembly solves the user's feasibility concern without introducing unsafe recursion.

## Proposed Runner Contract

Minimal future invocation:

```text
/multi-navigation \
  --depth 2 \
  --max-expansions 4 \
  --policy expansion-needed \
  --output devdocs/navigation/<map-id>/ \
  <source>
```

Policy options:

- `expansion-needed`: only routes marked `Expansion: needed`.
- `user-selected`: only route IDs named by the user.
- `high-priority`: high-priority routes within budget.
- `blocked-high`: blocked high-priority routes and their unblock paths.
- `coverage-thin`: routes whose coverage is explicitly thin or unknown.

Required output:

```text
parent_navigation.md
children/<route-id>/navigation.md
composition.md
run_trace.md
```

Stop rules:

- stop at `depth`;
- stop at `max_expansions`;
- stop when no route satisfies policy;
- stop if composition becomes unreadable and record deferred candidates;
- never select final top option.

## Recommended Innovation

The best answer is:

```text
Protocol-first, runner-later.
```

Do not make this a full MVL-like loop now. Define `multi_resolution_navigation.md` as an orchestration protocol. After it works once, materialize a command/skill wrapper with `depth`, `max_expansions`, `policy`, and `output`.

## Telemetry

- Generators applied: 4/4.
- Framers applied: 3/3.
- Convergence: YES. Five mechanisms converge on protocol-backed budgeted traversal.
- Survivors tested: 7/7.
- Failure modes observed: none.
- Overall: PROCEED.
