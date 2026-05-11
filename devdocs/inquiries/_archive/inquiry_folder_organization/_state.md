# State: inquiry_folder_organization

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
- RELATED: continuous_loop_priorities (its Item 1 consolidation overlaps with this organization decision)
- RELATED: wayfinding_navigation_unification_check (just produced 5 SUPERSEDED inquiries that need clear visual indicator)

## History
- 2026-04-27: Created. Question: how to organize `devdocs/inquiries/` so recency and staleness are visible at a glance; is a datetime-prefix + archive-folder convention best or is there a better alternative?
- 2026-04-27: Pipeline complete (E→S→D→I→C). Answer: don't rename folders; build `tools/inq` (one renderer, two output modes — terminal-plain default, Markdown-to-`devdocs/inquiries/README.md` via `--regen`); status-not-location archive (add ARCHIVED to enum, never-auto); 8-field data model + hybrid sectioned format with collapsibles; one-time hygiene pass marks 6 missing-Status folders SUPERSEDED. ~70-90 min implementation; no cross-reference cost paid. Status COMPLETE.
