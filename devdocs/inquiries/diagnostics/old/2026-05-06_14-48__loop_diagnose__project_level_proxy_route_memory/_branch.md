# Branch: Loop Diagnose - Project-Level Proxy Route Memory

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity`, the human correction, and the later improved inquiry at `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary`, what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?

## Goal

A good answer should identify evidence-backed failure hypotheses, confidence levels, affected discipline or runner stages, shortcoming types, maintenance candidates, and evaluation gates. It should avoid pretending to know exact root cause when the evidence is weak.

## Scope Check

Question covers goal. The question asks for comparative diagnosis of a correction chain, and the goal requires failure hypotheses, evidence, confidence, and maintenance candidates.

## Correction Chain

- Prior path: `devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity`
- Corrected path: `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary`
- Human correction:
  ```text
  The user said the model smelled because it seemed to make Route Memory Review run for big or project-level Navigation but not bounded Navigation, even though Navigation should be Navigation regardless of scale.
  ```
- Optional context:
  ```text
  The prior inquiry focused on whether `route_memory_review.md` should be generated and used trigger examples such as bounded local Navigation and old maps that matter. The corrected inquiry rejected project-level versus bounded as the structural boundary and replaced it with route-memory dependency.
  ```
- Diagnostic goal:
  ```text
  Identify whether the prior loop used project-level or broad Navigation as a proxy for the real dependency. Diagnose what it missed about bounded inputs that are themselves route-memory artifacts, and about Navigation needing one unified context-preparation flow. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.
  ```

## Required Reads

For both inquiry folders, read `_branch.md`, `_state.md`, `finding.md`, root discipline outputs if present, and `docarchive/` discipline outputs if present.

## Diagnostic Constraints

- Treat the human correction as evidence, not noise.
- Treat the corrected inquiry as comparative evidence, not ground truth.
- Prefer evidence-backed hypotheses over exact root-cause claims.
- Allow mixed or unknown attribution when evidence does not isolate one discipline.
- Produce maintenance candidates only when the diagnosis gives enough evidence to justify them.
- Be careful not to run the MVL+ loop compactly; each discipline must have its own committed workspace.

## Relationships

- DIAGNOSES: `devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity` (weak prior inquiry)
- COMPARES WITH: `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary` (later corrected inquiry)
- USES_PROTOCOL: `homegrown/protocols/loop_diagnose.md`
