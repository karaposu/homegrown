# State: protocol_path_generalization

## Flow-type
extended

## Pipeline
E → S → D → I → C (always)

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
—

## Relationships
- CONTINUES FROM: telemetry_routing_protocol_classification (RESUME extraction; this inquiry refines path-resolution mechanism)
- RELATED: extract_conclude_to_homegrown (CONCLUDE extraction precedent)
- RELATED: synthesize_vs_finding_split (protocol-extraction pattern)
- RELATED: wayfinding_navigation_unification_check (grounding-in-shipped-doctrine pattern)

## History
- 2026-04-26: Created. Question: how to generalize protocol path-resolution across install contexts (Claude / Codex user / Codex repo / in-repo) without runtime iteration?
- 2026-04-26: Iteration 1 complete (extended pipeline E→S→D→I→C). Verdict: Option C (installer-time sed substitution). Source SKILL.md uses single literal in-repo path `homegrown/protocols/conclude.md`; install scripts substitute with install-target absolute path via `${HOME}` expansion at install time. Each installed SKILL.md gets a single literal correct path. Migration: ~16 lines across 6 files; ~25-40 min. Critical REFINE from critique: use `${HOME}` not literal `~` (otherwise broken at agent read-time). REFINES the prior `telemetry_routing_protocol_classification` finding's loading-mechanism wording. Status: COMPLETE.
