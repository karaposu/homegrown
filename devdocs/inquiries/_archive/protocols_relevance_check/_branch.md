# Branch: protocols_relevance_check

## Question
Is the protocols dimension (described in `thinking_disciplines/protocols/desc.md` as a second dimension alongside thinking disciplines, with categories Pipeline / Transfer / Persistence and ~13 named protocols) still relevant given the current architecture, has it been superseded by the existing loop runners (`/MVL`, `/MVL+`, `/inquiry`), or does it identify still-missing pieces required for the project's stated goals?

## Goal
Three possible verdicts with clear consequences:
- **Still relevant (active concept):** protocols-as-second-dimension remains a useful frame; identify which named protocols are alive, which are absorbed into existing commands, and which still need formalizing. Recommend whether `protocols/desc.md` should be updated, archived to design-history, or kept as living spec.
- **Superseded:** the loop runners (`/MVL`, `/MVL+`, `/inquiry`) absorbed all the load-bearing operational concerns; the protocols frame is no longer needed. Recommend deleting/archiving the document and explaining what's lost (if anything).
- **Missing piece:** the protocols dimension identifies real operational gaps that no existing command fills — and those gaps are blocking stated long-term goals (year-long autonomous tasks, parallel branches, cross-agent handoff, etc.). Recommend what specifically to build first.

The user should leave with: a delete/keep/update call on `thinking_disciplines/protocols/desc.md` + a list of named protocols by status (alive / absorbed / dead / still-missing-and-needed) + a small punch list of next moves if any are needed.

## Scope Check
Question covers goal. The trichotomy in the question (still relevant / superseded / missing piece) directly maps to the three verdict categories in the goal. The question is broad enough to cover the document, the named protocols, and their relationship to the existing loop runner architecture, which is what the goal needs.

## Context
- The protocols document explicitly states "Status: Work in progress" and treats itself as preliminary, not finished spec.
- The document describes 4 categories (Pipeline / Transfer / Persistence / "Quality" — the last explicitly dissolved earlier).
- Named protocols total ~13: CONFIGURE, STEER, TERMINATE, SCOPE, BRANCH, MERGE, freshness checks, SYNTHESIZE, RESUME, HANDOFF, BRIEF, folder convention, CV persistence, VERSION, metadata injection, archival.
- The document's own Current State table claims: 7 functional, 3 underspecified, 6 missing.
- This session has just produced `loop_design_1.md / 2.md / 3.md` analyzing the same loop runners. The protocols doc and the loop_design_N.md series are partially overlapping perspectives on the same system — protocols is concept-first, loop_design is runner-first.
- The metadata-injection hook (`hooks/devdocs_metadata_appender.sh`) was removed earlier in this session — one of the "exists and functional" protocols is no longer functional.
- `/devdocs-archivist` referenced for the archival protocol — need to verify whether this command still exists in the project.
