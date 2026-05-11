# Critique: Prior Map Overlay Artifact Necessity

## Dimensions

| Dimension | Weight | Success Criteria |
| --- | --- | --- |
| Source authority preservation | critical | Old maps remain historical evidence, not mutable truth. |
| Route-memory usefulness | critical | Old relevant routes can inform future Navigation without stale resurrection. |
| Artifact proportionality | high | The system does not create durable files when inline context is enough. |
| Cross-session durability | high | Durable handoff exists when another session or later run needs it. |
| Boundary clarity | high | Overlay does not become Navigation, refresh, or selection. |
| Implementation risk | medium | Patch is mostly wording and contract refinement. |

## Fitness Landscape

- Viable region: preserves old maps, reconciles route memory, supports both inline and saved output.
- Boundary region: always-saved overlay and inline-only overlay.
- Dead region: mutating old maps, ignoring old maps entirely, global registry now.
- Unexplored region: future automated route-memory store after repeated real Navigation usage.

## Candidate Verdicts

### Candidate A - Edit Old Navigation Maps

Prosecution: destroys historical evidence and creates repeated mutation burden.

Defense: easiest to read in one place.

Collision: defense loses. Readability does not justify corrupting snapshot semantics.

Verdict: KILL.

Seed extracted: if one-place readability becomes painful, create an index/pointer later rather than mutating old maps.

### Candidate B - Skip Old Maps

Prosecution: causes route amnesia and stale decision repetition.

Defense: simplest and avoids bloat.

Collision: defense loses when prior route memory matters.

Verdict: KILL as a general policy; allowed only when prior maps are irrelevant.

### Candidate C - Always Save `prior_map_overlay.md`

Prosecution: over-materializes route reconciliation and creates latest-file discovery burden.

Defense: strong durability and handoff.

Collision: both are valid; the file is useful, but not always.

Verdict: REFINE.

Refinement: saved overlay should be one output mode, not the definition of the operation.

### Candidate D - Inline-Only Overlay

Prosecution: weak for cross-session handoff; route reconciliation may disappear.

Defense: lean and excellent for immediate Navigation.

Collision: viable only for small/immediate cases.

Verdict: REFINE.

Refinement: inline should be default for immediate/small use, with saved escalation.

### Candidate E - Merge Overlay Into Refresh

Prosecution: blends two distinct problems: stale-session delta refresh and prior-route reconciliation.

Defense: fewer files and one handoff brief.

Collision: useful overlap exists, but merging ownership makes the contracts less clear.

Verdict: REFINE / DEFER.

Refinement: refresh can call or include overlay logic when needed, but overlay remains its own routine.

### Candidate F - Adaptive Overlay Operation

Prosecution: mode choice can become vague if save criteria are not explicit.

Defense: preserves authority, avoids bloat, and still supports durable handoff.

Collision: defense survives if the protocol names clear save criteria.

Verdict: SURVIVE.

Required refinement: add `output_mode: inline | save | print_only` and explicit save triggers.

## Assembly Check

The surviving assembly is adaptive:

```text
old navigation map = historical snapshot
overlay result = current route-memory interpretation
saved prior_map_overlay.md = durable storage mode when needed
new navigation map = current route-space enumeration
```

## Coverage Map

- Checked historical mutation.
- Checked no-overlay simplicity.
- Checked mandatory artifact.
- Checked inline-only.
- Checked merged refresh.
- Checked future registry.

No important adjacent region remains unexamined for this decision.

## Signal

TERMINATE with survivor:

Patch the active warm-up and router docs so prior-map overlay is an adaptive operation. Saved `prior_map_overlay.md` remains supported but is no longer mandatory.

## Convergence Telemetry

- Dimension coverage: complete for this design question.
- Adversarial strength: STRONG.
- Landscape stability: STABLE.
- Clean SURVIVE exists: yes, adaptive overlay operation.
- Failure modes observed: none.
- Output: PROCEED.
