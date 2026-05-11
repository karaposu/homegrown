# State: Where Should The Placement Convention Live

## Flow-type

extended

## Pipeline

E -> S -> D -> I -> C

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

- REFINES: devdocs/inquiries/2026-05-07_22-54__principled_rule_placement_in_thinking_discipline_specs/finding.md
- ANALYZES: /Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md
- ANALYZES: homegrown/explore/references/explore.md

## History

- 2026-05-07: Created. Question: should the placement convention live INSIDE each discipline spec or ONLY at the external enes/discipline_rule_placement.md? User prefers discipline-spec purity.
- 2026-05-07: Concluded. Answer: don't embed. Convention stays external at enes/discipline_rule_placement.md. Three converging arguments: audience separation (runtime runner vs maintenance contributor), DRY across all 5 specs (5× duplication avoided), self-consistency (convention obeys its own scope-determines-canonical-home rule). Mechanism C primary (no pointer in specs); Mechanism B fallback (one-line pointer) deferred with revival trigger. The 22-54 finding's embedding recommendation is REFINED — REJECTED. Generalizable principle articulated: Runtime-Purity for Maintenance-Time Concerns. No edits to existing files needed. Verdict ACTIONABLE as documented decision. Wrote `finding.md` and archived discipline outputs to `docarchive/`. Status COMPLETE.
