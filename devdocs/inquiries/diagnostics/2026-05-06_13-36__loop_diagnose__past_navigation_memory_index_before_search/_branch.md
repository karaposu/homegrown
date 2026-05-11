# Branch: Loop Diagnose - Past Navigation Memory Index Before Search

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility`, the human correction, and the later improved inquiry at `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search`, what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?

## Goal

A good answer should identify evidence-backed failure hypotheses, confidence levels, affected discipline or runner stages, shortcoming types, maintenance candidates, and evaluation gates. It should avoid pretending to know exact root cause when the evidence is weak.

## Scope Check

Question covers goal. The question asks for comparative diagnosis of a correction chain, and the goal requires failure hypotheses, evidence, confidence, and maintenance candidates.

## Correction Chain

- Prior path: `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility`
- Corrected path: `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search`
- Human correction:
  ```text
  The user challenged the maintained index recommendation by asking why Homegrown needs an index if it can simply search the codebase for known file names and regex-searchable patterns.
  ```
- Optional context:
  ```text
  The prior inquiry recommended `devdocs/navigation_context/past_navigation_memory_file_index.md` as a maintained non-authoritative discovery registry with scan/backfill fallback. The corrected inquiry said that fallback undermines the need for a maintained v1 index and replaced it with `PastNavigationMemoryFile Discovery Search` plus optional run-local candidate report.
  ```

## Required Reads

For both inquiry folders, read `_branch.md`, `_state.md`, `finding.md`, root discipline outputs if present, and `docarchive/` discipline outputs if present.

## Diagnostic Constraints

- Treat the human correction as evidence, not noise.
- Treat the corrected inquiry as comparative evidence, not ground truth.
- Prefer evidence-backed hypotheses over exact root-cause claims.
- Allow mixed or unknown attribution when evidence does not isolate one discipline.
- Produce maintenance candidates only when the diagnosis gives enough evidence to justify them.

## Diagnostic Goal

Identify what the prior loop likely missed when it recommended a maintained PastNavigationMemoryFile Index before validating deterministic active-tree search. Diagnose affected stage or framing step with confidence levels. Pay special attention to whether Exploration under-tested the known filename/path search alternative, whether Sensemaking overvalued Homegrown explicitness as a maintained artifact, and whether Critique let a duplicate mutable state source survive. Read `_branch.md`, `_state.md`, `finding.md`, root discipline outputs if present, and `docarchive/*.md` for both folders. Do not diagnose from `finding.md` alone. Treat the corrected inquiry as comparative evidence, not ground truth.

## Relationships

- DIAGNOSES: `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility` (weak prior inquiry)
- COMPARES WITH: `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search` (later corrected inquiry)
