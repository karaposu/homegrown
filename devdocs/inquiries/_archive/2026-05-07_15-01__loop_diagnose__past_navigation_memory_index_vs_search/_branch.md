# Branch: Loop Diagnose - Past Navigation Memory Index Vs Search

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/`, the human correction, and the later improved inquiry at `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search/`, what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?

## Goal

A good answer should identify evidence-backed failure hypotheses, confidence levels, affected discipline or runner stages, shortcoming types, maintenance candidates, and evaluation gates. It should avoid pretending to know exact root cause when the evidence is weak. Special attention is required to (a) whether Exploration under-tested the known-filename/path search alternative, (b) whether Sensemaking overvalued Homegrown explicitness as a maintained artifact, and (c) whether Critique let a duplicate mutable state source survive.

## Scope Check

Question covers goal. The question asks for comparative diagnosis of a correction chain, and the goal requires failure hypotheses, evidence, confidence, and maintenance candidates. The three diagnostic concerns name specific stages to interrogate without forcing the diagnosis to land there.

## Correction Chain

- Prior path: `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/`
- Corrected path: `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search/`
- Human correction:
  ```text
  $MVL+

  but why do we need index if we can simply search the codebase and find all files... we know the file names afterall, at least regex searchable way we know.
  ```
- Optional context:
  ```text
  The prior inquiry recommended `devdocs/navigation_context/past_navigation_memory_file_index.md` as a maintained non-authoritative discovery registry with scan/backfill fallback. The corrected inquiry said that fallback undermines the need for a maintained v1 index and replaced it with `PastNavigationMemoryFile Discovery Search` plus optional run-local candidate report.
  ```

## Required Reads

For both inquiry folders, read `_branch.md`, `_state.md`, `finding.md`, root discipline outputs if present, and `docarchive/` discipline outputs if present. Both prior and corrected folders have all five archived discipline outputs (`exploration.md`, `sensemaking.md`, `decomposition.md`, `innovation.md`, `critique.md`) plus `_branch.md`, `_state.md`, and `finding.md`. No root discipline outputs remain unarchived.

## Diagnostic Constraints

- Treat the human correction as evidence, not noise.
- Treat the corrected inquiry as comparative evidence, not ground truth. (The corrected finding itself preserves the maintained index as deferred behind concrete revival triggers; that is bounded ambiguity, not a refutation.)
- Prefer evidence-backed hypotheses over exact root-cause claims.
- Allow mixed or unknown attribution when evidence does not isolate one discipline.
- Produce maintenance candidates only when the diagnosis gives enough evidence to justify them.
- Do not propose broad fundamentals rewrites from this single correction chain.

## Relationships

- DIAGNOSES: devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/ (weak prior inquiry)
- COMPARES WITH: devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search/ (later corrected inquiry)
- RELATED: devdocs/inquiries/2026-05-06_13-19__navigation_correction_chain_failure_inventory/ (inventory inquiry that prepared this LOOP_DIAGNOSE prompt; row 8 of its Failure Inventory table)
