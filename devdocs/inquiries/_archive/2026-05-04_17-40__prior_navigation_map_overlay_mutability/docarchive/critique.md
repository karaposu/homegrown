# Critique: prior_navigation_map_overlay_mutability

## Dimensions

- Historical integrity: old artifacts remain reliable evidence.
- Current usefulness: Navigation can still know which routes matter now.
- Maintenance burden: the user and future sessions are not forced into repeated edits.
- Authority clarity: one artifact owns each kind of state.
- Feasibility: can be used manually now.

## Fitness Landscape

- Viable: read-only old maps + current overlay.
- Boundary: latest-overlay index; useful later but premature.
- Dead: editing old maps by default.
- Dead: overlay before every Navigation run.

## Candidate Verdicts

### Candidate A - Mutate Old Navigation Maps

Verdict: KILL.

Prosecution: destroys snapshot semantics, creates edit burden, and creates ambiguity about when a route status changed.

Defense: easiest to read in one file.

Collision: readability does not beat historical integrity and maintenance risk.

Constructive seed: if discoverability becomes hard, create an index/pointer, not mutation.

### Candidate B - Read-Only Overlay Artifact

Verdict: SURVIVE.

Prosecution: creates another file to find.

Defense: preserves old maps, gives current interpretation, and matches existing sidecar/state-artifact pattern.

Collision: file discoverability is a manageable weakness; mutation risk is structural.

Constructive output: patch overlay and README to explicitly forbid mutating old maps by default.

### Candidate C - Overlay Before Every Navigation Run

Verdict: KILL.

Prosecution: turns Navigation into repeated historical reconciliation even for bounded local tasks.

Defense: strongest freshness.

Collision: freshness should be triggered by context need, not paid on every run.

Constructive seed: route through context router: cold project warm-up or explicit route-memory reconciliation.

### Candidate D - Latest Overlay Index

Verdict: REFINE.

Prosecution: premature before one real overlay exists.

Defense: could solve discoverability later.

Collision: good future improvement, not current requirement.

Constructive output: defer until at least two overlays exist or discovery becomes hard.

## Assembly Check

Best assembly:

```text
immutable old maps
+ read-only prior-map overlay
+ triggered execution
+ optional future index
```

## Signal

TERMINATE. A clean survivor exists and directly answers the question.

## Convergence Telemetry

Dimension coverage: complete for the design choice.
Adversarial strength: STRONG.
Landscape stability: STABLE.
Clean survivor: yes.
Failure modes observed: none.
Output: PROCEED.
