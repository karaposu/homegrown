# Branch: Explore Discipline - Definite Gaps From Corpus Evidence

## Question

Across the 7 LOOP_DIAGNOSE chain findings (`2026-05-07_15-01__loop_diagnose__past_navigation_memory_index_vs_search/finding.md` through `2026-05-07_20-02__loop_diagnose__aggregate_naming_boundary_drift/finding.md`), what are the FOR-SURE-MISSING pieces from the Exploration thinking discipline spec at `homegrown/explore/references/explore.md` — pieces that the corpus evidence DEFINITELY shows the discipline is missing (not "might be useful" but "the loop demonstrably failed because the rule was absent and the corrected loop succeeded because the rule was present") — expressed as generic / meta-discipline rules (since explore.md is a domain-agnostic thinking discipline, fixes must NOT be project-specific)?

## Goal

A good answer should: (a) identify gaps with clear multi-source evidence from the corpus (not speculative); (b) state each gap in generic / meta-discipline language fit for a domain-agnostic thinking discipline; (c) specify the fix shape (rule wording, where it sits in explore.md's structure, what it asks the runner to produce); (d) be defensible against the test "the rule is genuinely missing AND its absence demonstrably caused a failure AND its presence in the corrected loops demonstrably succeeded"; (e) explicitly REJECT speculative additions (gaps that are "might-improve" rather than "definitely missing").

## Scope Check

Question covers goal. The question asks for definite missing pieces with specific evidence requirements; the goal asks for generic phrasing, fix specification, and rejection of speculative additions — all addressable from the 7 chain findings + the current explore.md.

## Required Reads

- `homegrown/explore/references/explore.md` (the discipline spec being analyzed).
- All 7 LOOP_DIAGNOSE chain findings:
  1. `devdocs/inquiries/2026-05-07_15-01__loop_diagnose__past_navigation_memory_index_vs_search/finding.md`
  2. `devdocs/inquiries/2026-05-07_15-35__loop_diagnose__route_memory_review_file_necessity/finding.md`
  3. `devdocs/inquiries/2026-05-07_16-28__loop_diagnose__route_memory_preflight_reevaluation/finding.md`
  4. `devdocs/inquiries/2026-05-07_16-57__loop_diagnose__early_stage_always_full_route_memory_review/finding.md`
  5. `devdocs/inquiries/2026-05-07_18-24__loop_diagnose__route_memory_review_trigger_boundary/finding.md`
  6. `devdocs/inquiries/2026-05-07_19-08__loop_diagnose__past_navigation_memory_file_index_feasibility/finding.md`
  7. `devdocs/inquiries/2026-05-07_20-02__loop_diagnose__aggregate_naming_boundary_drift/finding.md`

## Diagnostic Constraints

- For-sure means evidence-backed: each proposed gap must have at least one chain showing the prior loop FAILED because the rule was absent AND the corrected loop SUCCEEDED because the rule was present (or the equivalent observable contrast).
- Generic means meta-discipline: the rule must be expressed in terms of structural-exploration vocabulary (scan, signal, probe, resolution, frontier, confidence map, mode, layer) — NOT in project-specific vocabulary (navigation, route memory, codebase paths).
- Reject speculative additions: any proposal that is only ONE chain's evidence with no convergent observation must be filtered out OR explicitly marked as "single-chain caveat — not for-sure."
- Cite verbatim: each proposed gap must cite the specific chain finding text that supports it (M2, N1, etc. from the chain findings).
- Address the prior LOOP_DIAGNOSE M2 + N1 candidates: chain 1's M2 (probe-before-stabilization) and chain 2's N1 (cultural-norm corpus scan) both target explore.md directly. The chain findings already proposed these as patches to explore.md. The chain-7 aggregate diagnostic confirms the cross-cutting absence pattern. This inquiry's task is to (a) confirm M2 + N1 are for-sure-missing, (b) reframe them in generic / meta-discipline language, (c) check for any additional for-sure gaps.

## Relationships

- ANALYZES: homegrown/explore/references/explore.md (the discipline spec)
- ANALYZES: 7 chain findings (chains 1-7) for evidence of definite gaps
- RELATED: devdocs/inquiries/2026-05-07_15-01__loop_diagnose__past_navigation_memory_index_vs_search/ (chain 1; M2 candidate targets explore.md)
- RELATED: devdocs/inquiries/2026-05-07_15-35__loop_diagnose__route_memory_review_file_necessity/ (chain 2; N1 candidate targets explore.md)
- RELATED: devdocs/inquiries/2026-05-07_19-08__loop_diagnose__past_navigation_memory_file_index_feasibility/ (chain 6; corrected loop's Exploration Cycle 4 ran active artifact population scan — supports M2 pattern)
