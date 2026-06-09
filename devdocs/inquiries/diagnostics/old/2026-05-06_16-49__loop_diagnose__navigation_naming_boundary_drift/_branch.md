# Branch: Loop Diagnose - Navigation Naming Boundary Drift

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity`, the human correction pattern, and the later improved inquiry at `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation`, what did the prior loop likely miss about naming and operation boundaries, why did it miss it, and what maintenance candidates follow?

## Goal

A good answer should identify evidence-backed hypotheses for why unclear names kept producing mechanism confusion across Navigation route-memory work. It should diagnose whether the weakness is in framing, sensemaking vocabulary selection, CONCLUDE wording, or lack of user-language validation, while keeping confidence lower unless evidence isolates a specific prior-loop failure.

## Scope Check

Question covers goal. The question asks for comparative diagnosis of a correction chain and the goal requires failure hypotheses, evidence, confidence, affected stages, maintenance candidates, and evaluation gates.

## Correction Chain

- Prior path: `devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity`
- Corrected path: `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation`
- Human correction:
  ```text
  Across the chain, the user repeatedly pushed back on unclear or unnatural names and boundaries: `prior_map_overlay`, "Route-Memory Preflight," "source," and `PastNavigationMemoryFile` either sounded like the wrong operation or were not understandable enough.
  ```
- Optional context:
  ```text
  Use these two folders as the primary correction chain for naming and operation-boundary drift. Also inspect, as supporting context, `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review`, `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility`, and `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search` for `source`, `PastNavigationMemoryFile`, index, search, and route-memory wording. This is an aggregate naming diagnostic, so keep confidence lower unless evidence isolates a specific prior-loop failure.
  ```
- Diagnostic goal:
  ```text
  Identify evidence-backed hypotheses for why unclear names kept producing mechanism confusion. Diagnose whether the weakness is in framing, sensemaking vocabulary selection, conclude wording, or lack of user-language validation. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for the prior and corrected folders; read the additional context folders only for supporting vocabulary evidence. Do not treat later wording as ground truth.
  ```

## Required Reads

For the prior and corrected inquiry folders, read `_branch.md`, `_state.md`, `finding.md`, root discipline outputs if present, and `docarchive/` discipline outputs if present.

For supporting context folders, inspect vocabulary evidence around `source`, `PastNavigationMemoryFile`, index, search, route-memory, Route-Memory Preflight, and naming/boundary wording.

## Diagnostic Constraints

- Treat the human correction pattern as evidence, not noise.
- Treat the corrected inquiry as comparative evidence, not ground truth.
- Prefer evidence-backed hypotheses over exact root-cause claims.
- Allow mixed or unknown attribution when evidence does not isolate one discipline.
- Keep confidence lower for aggregate naming claims unless multiple artifacts converge.
- Produce maintenance candidates only when the diagnosis gives enough evidence to justify them.
- Be careful not to run the MVL+ loop compactly; each discipline must have its own committed workspace.

## Relationships

- DIAGNOSES: `devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity` (weak prior inquiry)
- COMPARES WITH: `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation` (later corrected inquiry)
- SUPPORTING_CONTEXT: `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review`
- SUPPORTING_CONTEXT: `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility`
- SUPPORTING_CONTEXT: `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search`
- USES_PROTOCOL: `homegrown/protocols/loop_diagnose.md`
