# State: Finding Internal-Reference Ambiguity Failure

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

- ANALYZES: devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md (the failed output)
- ANALYZES: homegrown/protocols/conclude.md (the protocol whose rule failed to prevent the failure)
- RELATED: homegrown/explore/references/explore.md

## History

- 2026-05-07: Created. Question: why did conclude.md's non-ambiguity principle fail to prevent internally-referential references in the just-completed finding.md, and what concrete mechanical fix would prevent recurrence?
- 2026-05-07: Concluded. Answer: the rule failed for two converging reasons — H1 (the principle is descriptive not procedural; runner has to subjectively recognize patterns and fails when embedded in inquiry vocabulary) + H2 (upstream discipline outputs propagate internally-referential vocabulary which CONCLUDE inherits AS-IS without a translation pass). Fix: add a mechanical check sub-section to conclude.md Step 2 (3 regex pattern descriptions + first-use checklist + remediation guidance), expand the existing principle's example list with 3 concrete failure shapes drawn from observed failures, and add a one-line reminder to the Quality test. Combined ~25-30 lines added; preserves existing structure. Verified to catch all 10+ observed failures in the previous inquiry's finding.md. Verdict ACTIONABLE. Wrote `finding.md` and archived discipline outputs to `docarchive/`. Status COMPLETE.
