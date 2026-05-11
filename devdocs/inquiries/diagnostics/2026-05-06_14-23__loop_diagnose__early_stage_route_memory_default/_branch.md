# Branch: Loop Diagnose - Early Stage Route Memory Default

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation`, the human correction, and the later improved inquiry at `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review`, what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?

## Goal

A good answer should identify evidence-backed failure hypotheses, confidence levels, affected discipline or runner stages, shortcoming types, maintenance candidates, and evaluation gates. It should avoid pretending to know exact root cause when the evidence is weak.

## Scope Check

Question covers goal. The question asks for comparative diagnosis of a correction chain, and the goal requires failure hypotheses, evidence, confidence, and maintenance candidates.

## Correction Chain

- Prior path: `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation`
- Corrected path: `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review`
- Human correction:
  ```text
  The user argued that Homegrown is early-stage, needs breakthroughs, and should prefer robustness over speed and token efficiency, asking whether full Route Memory Review should run by default until the system can optimize its own mechanisms.
  ```
- Optional context:
  ```text
  The prior inquiry produced a mature clean trigger: full Route Memory Review only when relevant old route memory has unresolved material effect. The corrected inquiry preserved that as a future optimized policy but changed the current early-stage default to full review when a PastNavigationMemoryFile exists, with explicit exceptions and exit telemetry.
  ```
- Diagnostic goal:
  ```text
  Identify whether the prior loop applied an optimized mature-system trigger too early for the current project phase. Diagnose what it missed about calibration, phase sensitivity, breakthrough preservation, and the user's stated robustness priority. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.
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

- DIAGNOSES: `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation` (weak prior inquiry)
- COMPARES WITH: `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review` (later corrected inquiry)
- USES_PROTOCOL: `homegrown/protocols/loop_diagnose.md`
