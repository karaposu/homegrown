# Innovation: Route Memory Review Trigger Boundary

## Seed

The bounded/project-level trigger feels unnatural because Navigation should not have separate behavior based on size.

## Candidate A - Keep Project-Level Trigger

Run Route Memory Review only during project-level warm-up.

Test: weak. It misses bounded inputs that carry route memory and over-includes broad runs with no relevant old route memory.

Verdict candidate: kill.

## Candidate B - Full Review Every Navigation Run

Every Navigation run writes `route_memory_review.md`.

Test: weak. It preserves explicitness but produces empty artifacts when no route-memory sources exist.

Verdict candidate: kill.

## Candidate C - Universal Route-Memory Preflight, Conditional Review

Every Navigation run checks route-memory status. Full review runs only when route-memory dependency exists.

Test: strong. Keeps Navigation unified, satisfies explicitness through telemetry, and avoids empty review artifacts.

Verdict candidate: survive.

## Candidate D - Fold Everything Into Freshness Preflight

Freshness preflight handles route memory as one subfield, with no separate Route Memory Review routine.

Test: partial. Good for status classification, but full old-route reconciliation is too detailed for freshness preflight.

Verdict candidate: refine.

## Candidate E - Fold Everything Into Navigation Map

Navigation map performs and records route memory internally.

Test: partial. Good for summary, but hides pre-map source interpretation and weakens audit trail when old routes are many.

Verdict candidate: refine.

## Assembly

The best design is Candidate C with refinements from D and E:

```text
Navigation Freshness Preflight includes Route-Memory Preflight.
If route_memory_status = review_needed, delegate to Route Memory Review.
Navigation output records route_memory_status and review path if used.
```

## Telemetry

- Generators applied: 4 / 4.
- Framers applied: 3 / 3.
- Convergence: YES.
- Survivors tested: 1 main survivor plus 2 refinements.
- Failure modes observed: none.

**Overall: PROCEED**.
