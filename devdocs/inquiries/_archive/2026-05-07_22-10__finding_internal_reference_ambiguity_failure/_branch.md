# Branch: Finding Internal-Reference Ambiguity Failure

## Question

Why did `homegrown/protocols/conclude.md`'s non-ambiguity principle (*"Each sentence must be understandable to a reader with no prior exposure to this inquiry. Define niche terms briefly on first use; give project-specific references a parenthetical context the first time each appears in the finding"*) fail to prevent the internally-referential references in `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md` — specifically phrases like *"the current Probe section says..."* and *"the current Surface-Only Scanning failure-mode prevention says..."* (which are opaque to a reader who has not read `homegrown/explore/references/explore.md`) — and what concrete fixes to `conclude.md` and/or the upstream discipline outputs would prevent this failure mode from recurring?

## Goal

A good answer should: (a) inspect both the docarchive contents (the 5 discipline outputs that fed into the failed finding.md) AND `homegrown/protocols/conclude.md` (the protocol whose rule failed) to identify the actual root cause(s) — not the surface symptom; (b) distinguish between rule-presence-but-not-applied vs rule-absent-mechanism failures; (c) propose specific concrete fixes that are mechanical (not subjective judgment-dependent) so the same failure cannot recur even when the runner is deeply embedded in the inquiry's vocabulary; (d) keep the fix proportional — small protocol patches over wholesale restructuring; (e) verify the fix would have caught the specific failures observed in the just-completed finding.md.

## Scope Check

Question covers goal. The question asks WHY the rule failed (root-cause diagnosis) AND HOW to fix it (specific patches); the goal asks for evidence-grounded analysis + mechanical fixes + proportional scope. All addressable from inspecting the docarchive + conclude.md + finding.md.

## Required Reads

- `homegrown/protocols/conclude.md` — the protocol whose rule failed.
- `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md` — the failed output.
- `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/docarchive/exploration.md`, `sensemaking.md`, `decomposition.md`, `innovation.md`, `critique.md` — the upstream discipline outputs that fed into finding.md.
- `homegrown/explore/references/explore.md` — to understand which references in finding.md are project-internal vs public.

## Diagnostic Constraints

- The non-ambiguity principle EXISTS in `conclude.md` (lines 64-75 + Quality test at lines 219-225 + Failure mode at line 329). The failure is NOT rule-absence but rule-not-applied.
- Identify the MECHANISM of the failure: was it the principle's abstract phrasing, the lack of a concrete check, the upstream disciplines propagating shorthand, the runner being unable to self-honestly apply the Quality test, or something else?
- Propose fixes that are MECHANICAL (a runner can apply them by following a step) rather than JUDGMENTAL (a runner has to subjectively recognize a pattern).
- Preserve `conclude.md`'s existing structure; the fix should be a small extension or refinement, not a rewrite.

## Relationships

- ANALYZES: devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md (the failed output)
- ANALYZES: homegrown/protocols/conclude.md (the protocol)
- RELATED: homegrown/explore/references/explore.md (the spec referenced in the failed finding)
