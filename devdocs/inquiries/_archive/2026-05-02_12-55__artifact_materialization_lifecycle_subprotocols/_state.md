# State: Artifact Materialization Lifecycle Subprotocols

## Flow-type
extended

## Pipeline
E -> S -> D -> I -> C (always)

## Progress
- [x] Exploration
- [x] Sensemaking
- [x] Decomposition
- [x] Innovation
- [x] Critique

## Iteration
1

## Status
COMPLETE

## Next Discipline
-

## Relationships
- CONTINUES FROM: devdocs/inquiries/2026-05-02_12-20__next_load_bearing_navigation_vs_materialization/ (artifact_materialization.md selected as next protocol artifact)
- RELATED: devdocs/inquiries/2026-04-28_13-22__artifact_materialization_protocol_shape/ (tiered materialization protocol shape)

## History
- 2026-05-02: Created. Question: decide whether artifact materialization needs different lifecycles or subprotocols for code, Markdown, create/edit/rewrite/refactor.
- 2026-05-02: Exploration complete. Mapped artifact type, operation intent, and lifecycle mode as separate axes. Structural check could not run because `tools/structural_check.sh` is absent.
- 2026-05-02: Sensemaking complete. Stabilized model: one controller protocol with operation profiles and risk-scaled lifecycle depth.
- 2026-05-02: Decomposition complete. Broke protocol shape into universal contract, classification, compact path, standard/full path, operation profiles, escalation, and extraction gates.
- 2026-05-02: Innovation complete. Strongest architecture is one `artifact_materialization.md` controller with operation profiles, content path, implementation path, and future extraction gates.
- 2026-05-02: Critique complete. Clean survivor is one controller protocol with operation profiles and Compact/Standard/Full modes. Structural check could not run because `tools/structural_check.sh` is absent.
- 2026-05-02: Concluded. Answer: yes, the distinction makes sense, but create/edit/rewrite/refactor should be operation profiles inside one controller protocol in v1, not separate subprotocol files yet. Status COMPLETE.
