# Innovation: Prior Map Overlay Artifact Necessity

## User Input

Generate candidate designs for old Navigation map reconciliation after warm-up.

## Seed

The current design protects old maps but may create unnecessary `prior_map_overlay.md` files.

## Mechanism Outputs

### Lens Shifting

Generic: Treat overlay as a current-state artifact.

Focused: Treat overlay as a transient pre-Navigation interpretation unless handoff distance requires durability.

Contrarian: Treat old Navigation maps as disposable and stop reading them.

### Combination

Generic: Combine overlay with refresh brief.

Focused: Combine overlay operation with adaptive output modes: inline for immediate use, saved for handoff.

Contrarian: Combine all Navigation memory into a global registry.

### Inversion

Generic: Instead of updating old maps, never touch them.

Focused: Instead of always writing current interpretation to a file, make file-writing the escalation path.

Contrarian: Instead of Navigation consuming old maps, make old maps consume current status. This collapses under historical mutation risk.

### Constraint Manipulation

Generic: Add a "no new artifact unless durable value exists" constraint.

Focused: Add save criteria: cross-session, many routes, user requested, expensive reconstruction, not immediately consumed.

Contrarian: Remove the "old maps are immutable" constraint. This creates source-history ambiguity and fails.

### Absence Recognition

Generic: Missing output mode boundary.

Focused: Missing `inline` mode and save policy.

Contrarian: Missing latest-overlay pointer. Useful later, but premature until multiple overlays exist.

### Domain Transfer

Generic: Like compiler diagnostics: diagnostics can print inline or be saved as reports.

Focused: Like Git history: old commits are immutable; current interpretation can be a note, branch, or report depending on usage.

Contrarian: Like issue trackers: mutable status lives on the issue. This is not a fit because Navigation maps are snapshots, not live tickets.

### Extrapolation

Generic: If Navigation becomes more frequent, mandatory files will multiply.

Focused: If multi-session Navigation grows, saved overlays become useful for handoff and audit.

Contrarian: If full automation exists later, a route-memory store may be needed, but this is premature now.

## Candidate Set

### Candidate A - Always Save `prior_map_overlay.md`

Passes durability. Fails proportionality for small same-session use.

### Candidate B - Inline Only

Passes leanness. Fails cross-session durability.

### Candidate C - Adaptive Overlay Output

Overlay is an operation. Default output can be inline for immediate/small use. Save to `prior_map_overlay.md` when durable handoff is needed.

### Candidate D - Merge With Refresh

Avoids one file, but blurs route-memory reconciliation with stale-session delta refresh.

### Candidate E - Global Route Memory Registry

Powerful later, too heavy now.

### Candidate F - Edit Old Maps

Readable in one place, but destroys snapshot semantics.

## Tests

| Candidate | Novelty | Scrutiny Survival | Fertility | Actionability | Verdict |
| --- | --- | --- | --- | --- | --- |
| Always save | moderate | partial | moderate | high | refine |
| Inline only | moderate | partial | low | high | refine |
| Adaptive output | high | high | high | high | survive |
| Merge with refresh | low | partial | low | medium | refine/defer |
| Global registry | high | low now | high later | low now | kill for now |
| Edit old maps | low | low | low | medium | kill |

## Assembly Check

The best assembly is:

```text
immutable old maps
  + prior-map overlay operation
  + output_mode: inline | save | print_only
  + explicit save policy
  + Navigation consumes overlay result, not necessarily an overlay file
```

## Telemetry

- Generators applied: 4 / 4
- Framers applied: 3 / 3
- Convergence: YES. Multiple mechanisms converge on adaptive overlay output.
- Survivors tested: 6 / 6
- Failure modes observed: none
- Overall: PROCEED
