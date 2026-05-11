---
status: active
related:
  - devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity/finding.md
  - devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity/finding.md
  - devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary/finding.md
  - devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/finding.md
  - devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/finding.md
  - devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/finding.md
  - devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search/finding.md
impacts:
  - homegrown/protocols/loop_diagnose.md
---
# Finding: Navigation Correction Chain Failure Inventory

## Question

Across the listed Navigation-related inquiry folders, what failures happened between the inquiries, what evidence supports each failure, and what ready-to-run `loop_diagnose.md` prompts should be used later to diagnose them?

The goal was to inspect all root Markdown files and archived discipline outputs in the seven named folders, list the visible failures cautiously, avoid pretending to know exact root cause, and prepare prompts that can later run `homegrown/protocols/loop_diagnose.md`.

## Finding Summary

- I inspected the requested evidence set: seven inquiry folders, all root Markdown files, and all `docarchive/*.md` files. The evidence set was 56 Markdown files and 10,596 lines by `wc -l`.

- The failures are not one flat category. They split into confirmed failures, policy refinements, near-failures repaired inside one inquiry, recurring risks, and diagnostic hypotheses.

- The strongest confirmed failures are: save-only-on-durable-handoff was wrong for Route Memory Review; project-level versus bounded Navigation was the wrong trigger; "Route-Memory Preflight" sounded like a standalone side routine; the maintained index was recommended before deterministic search was tested.

- The early-stage robust review policy is not a simple contradiction of the mature `review_needed` trigger. It is better classified as a phase-policy correction: the mature trigger was too optimized for the current early-stage system.

- The naming problem is real. Names such as `prior_map_overlay`, "Route-Memory Preflight," "source," and `PastNavigationMemoryFile` changed how the mechanism was understood. This is not only cosmetic.

- The ready-to-run prompts should mostly be pairwise correction-chain prompts. One aggregate naming/boundary prompt is useful later, but it should not replace pairwise diagnostics.

## Finding

This inquiry is a preparation step for later loop diagnosis. It does not replace `homegrown/protocols/loop_diagnose.md`.

`loop_diagnose.md` needs a correction chain: an earlier weak inquiry, a later improved inquiry, and a human correction signal. The seven Navigation inquiries contain several such chains. The most useful thing now is to name the failures and prepare clean prompts for those later diagnostic runs.

## Evidence Coverage

Read fully:

- `devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity`
- `devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity`
- `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary`
- `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation`
- `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review`
- `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility`
- `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search`

For each folder, I read `_branch.md`, `_state.md`, `finding.md`, and all five archived discipline outputs under `docarchive/`.

## Failure Inventory

| # | Failure Or Risk | Chain Location | Type | Evidence | Confidence |
| ---: | --- | --- | --- | --- | --- |
| 1 | Route Memory Review storage was treated as optional handoff storage instead of the required output of a meaningful operation. | `17-56 -> 20-38` | confirmed failure | `route_memory_review_file_necessity/finding.md` explicitly corrects `prior_map_overlay_artifact_necessity/finding.md` and says the earlier save-only-on-durable-handoff rule was wrong for Homegrown. | HIGH |
| 2 | The name `prior_map_overlay` made the operation harder to understand. | `17-56` and later findings | confirmed naming failure | `prior_map_overlay_artifact_necessity/finding.md` says "prior-map overlay" and "route reconciliation" made the operation sound like bookkeeping and replaces the concept with Route Memory Review. | HIGH |
| 3 | Route Memory Review trigger was tied to project-level or "big" Navigation instead of actual route-memory dependency. | `20-38 -> 17-12` | confirmed failure | `route_memory_review_trigger_boundary/finding.md` explicitly says the user's smell was correct and rejects project-level versus bounded as the boundary. | HIGH |
| 4 | "Cheap Route-Memory Preflight" created the smell of a new mandatory side operation. | `17-12 -> 18-30` | confirmed framing failure | `route_memory_preflight_reevaluation/finding.md` says the cheap part should be `route_memory_status` classification inside normal intake, not a standalone routine. | HIGH |
| 5 | "Old maps may affect the new map" was too vague as a trigger. | `17-12 -> 18-30` | confirmed trigger-language failure | `route_memory_preflight_reevaluation/finding.md` says "may affect" can collapse into "old maps exist, therefore review" and replaces it with unresolved material old-route effect. | HIGH |
| 6 | The mature material-effect trigger was too optimized for early-stage Homegrown. | `18-30 -> 20-02` | policy refinement / premature optimization | `early_stage_always_full_route_memory_review/finding.md` preserves the material-effect trigger as mature policy but shifts current default to source-present full review during early-stage discovery mode. | HIGH |
| 7 | The vocabulary around "source" and `PastNavigationMemoryFile` was not understandable enough. | cross-chain | diagnostic hypothesis | Artifacts repeatedly use "route-memory source" and `PastNavigationMemoryFile`; the user later objected to "source" and pushed for a clearer name. The strongest evidence is chat context plus artifact vocabulary. | MEDIUM |
| 8 | A maintained global index was recommended before deterministic filename/path search was tested hard enough. | `07-06 -> 10-21` | confirmed design failure | `past_navigation_memory_index_vs_search/finding.md` corrects the index finding and says a documented discovery search should be v1 because known names and paths can derive candidates. | HIGH |
| 9 | "All Navigation-related file creations" was too broad and nearly became the wrong index scope. | inside `07-06` | near-failure repaired in-run | `past_navigation_memory_file_index_feasibility/finding.md` rejects broad all-Navigation-file indexing and narrows scope to files that may contain past Navigation memory. | HIGH |
| 10 | Old maps, review files, indexes, and search results repeatedly risked becoming current route truth. | all seven inquiries | recurring risk | The findings repeatedly reassert that old maps are evidence, Route Memory Review interprets, and Navigation maps current routes. | HIGH |
| 11 | Earlier inquiry state files have weaker process trace than later sequential MVL+ runs. | especially `17-56`, `20-38`, `17-12` | diagnostic limitation | Earlier `_state.md` files mostly record created/completed, while later ones record per-discipline checks and missing-checker fallbacks. This limits exact stage attribution. | MEDIUM |

## Recommended Loop Diagnose Run Order

This order is based on evidence isolation, not severity.

1. **Index-before-search diagnostic**: `07-06 -> 10-21`.
   This is the cleanest correction edge because the later inquiry directly corrects the maintained-index recommendation.

2. **File-necessity diagnostic**: `17-56 -> 20-38`.
   This is the cleanest explicitness-culture miss.

3. **Preflight wording diagnostic**: `17-12 -> 18-30`.
   This is the cleanest operation-boundary and naming issue.

4. **Early-stage phase diagnostic**: `18-30 -> 20-02`.
   This should test whether the prior loop applied a mature policy too early.

5. **Project-level trigger diagnostic**: `20-38 -> 17-12`.
   This should test the trigger-proxy failure.

6. **Index-bridge diagnostic**: `20-02 -> 07-06`.
   This is lower priority because it is more of a bridge from source detection pressure to an index idea than a clean correction.

7. **Cross-chain naming diagnostic**.
   Run this after at least one or two pairwise diagnostics, because it is broader and easier to overgeneralize.

## Ready-To-Run Prompts

### Prompt 1 - Index Before Search

```text
$MVL+

Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility

corrected_path:
devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search

human_correction:
The user challenged the maintained index recommendation by asking why Homegrown needs an index if it can simply search the codebase for known file names and regex-searchable patterns.

optional_context:
The prior inquiry recommended `devdocs/navigation_context/past_navigation_memory_file_index.md` as a maintained non-authoritative discovery registry with scan/backfill fallback. The corrected inquiry said that fallback undermines the need for a maintained v1 index and replaced it with `PastNavigationMemoryFile Discovery Search` plus optional run-local candidate report.

diagnostic_goal:
Identify what the prior loop likely missed when it recommended a maintained PastNavigationMemoryFile Index before validating deterministic active-tree search. Diagnose affected stage or framing step with confidence levels. Pay special attention to whether Exploration under-tested the known filename/path search alternative, whether Sensemaking overvalued Homegrown explicitness as a maintained artifact, and whether Critique let a duplicate mutable state source survive. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.
```

### Prompt 2 - File Necessity And Explicitness Culture

```text
$MVL+

Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity

corrected_path:
devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity

human_correction:
The user rejected the rule "create route_memory_review.md only when durable handoff matters" and said this is not how the codebase works because Homegrown enforces explicitness and creates Markdown artifacts for meaningful operations.

optional_context:
The prior inquiry correctly renamed the operation toward Route Memory Review, but still treated the saved file as adaptive storage. The corrected inquiry moved bloat control to trigger policy: do not run Route Memory Review unless old route memory matters, but if full review runs, write `route_memory_review.md`.

diagnostic_goal:
Identify what the prior loop likely missed about Homegrown's explicit-artifact culture and the distinction between operation output and storage convenience. Diagnose whether the weakness was in codebase-context intake, sensemaking boundary construction, innovation candidate testing, critique weighting, or conclusion synthesis. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.
```

### Prompt 3 - Route-Memory Preflight Wording

```text
$MVL+

Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary

corrected_path:
devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation

human_correction:
The user said the answer still felt messy and asked to reevaluate it carefully, starting by understanding why the "cheap Route-Memory Preflight plus full Route Memory Review" model did not feel clean.

optional_context:
The prior inquiry fixed the project-level versus bounded split by saying every Navigation run should do a cheap Route-Memory Preflight. The corrected inquiry said that wording risked creating a new standalone side ritual and should instead be route-memory status classification inside normal Freshness Preflight or context intake.

diagnostic_goal:
Identify what the prior loop likely missed about naming, operation boundaries, and the difference between status classification and full review. Diagnose whether the failure was premature stabilization around "preflight," insufficient human/user perspective, or critique not attacking operation proliferation strongly enough. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.
```

### Prompt 4 - Mature Trigger Applied Too Early

```text
$MVL+

Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation

corrected_path:
devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review

human_correction:
The user argued that Homegrown is early-stage, needs breakthroughs, and should prefer robustness over speed and token efficiency, asking whether full Route Memory Review should run by default until the system can optimize its own mechanisms.

optional_context:
The prior inquiry produced a mature clean trigger: full Route Memory Review only when relevant old route memory has unresolved material effect. The corrected inquiry preserved that as a future optimized policy but changed the current early-stage default to full review when a PastNavigationMemoryFile exists, with explicit exceptions and exit telemetry.

diagnostic_goal:
Identify whether the prior loop applied an optimized mature-system trigger too early for the current project phase. Diagnose what it missed about calibration, phase sensitivity, breakthrough preservation, and the user's stated robustness priority. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.
```

### Prompt 5 - Project-Level Versus Bounded Trigger

```text
$MVL+

Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity

corrected_path:
devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary

human_correction:
The user said the model smelled because it seemed to make Route Memory Review run for big or project-level Navigation but not bounded Navigation, even though Navigation should be Navigation regardless of scale.

optional_context:
The prior inquiry focused on whether `route_memory_review.md` should be generated and used trigger examples such as bounded local Navigation and old maps that matter. The corrected inquiry rejected project-level versus bounded as the structural boundary and replaced it with route-memory dependency.

diagnostic_goal:
Identify whether the prior loop used project-level or broad Navigation as a proxy for the real dependency. Diagnose what it missed about bounded inputs that are themselves route-memory artifacts, and about Navigation needing one unified context-preparation flow. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.
```

### Prompt 6 - Source Detection To Index Bridge

```text
$MVL+

Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review

corrected_path:
devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility

human_correction:
The user asked whether Homegrown should keep a record of all Navigation-related file creations so there would be a PastNavigationMemoryFile index, asking whether that would be easier and feasible.

optional_context:
The prior inquiry made early-stage robust review depend on whether a PastNavigationMemoryFile exists. The later inquiry tried to solve that discovery pressure by recommending a maintained index, while narrowing it away from all Navigation-related files.

diagnostic_goal:
Diagnose whether the source-present robust policy created an under-specified discovery problem that pushed the next loop toward a maintained index. Identify what the prior loop did or did not specify about discovering PastNavigationMemoryFile candidates, and whether the later index idea was a reasonable bridge or an overcorrection. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.
```

### Prompt 7 - Cross-Chain Naming And Boundary Drift

```text
$MVL+

Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity

corrected_path:
devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation

human_correction:
Across the chain, the user repeatedly pushed back on unclear or unnatural names and boundaries: `prior_map_overlay`, "Route-Memory Preflight," "source," and `PastNavigationMemoryFile` either sounded like the wrong operation or were not understandable enough.

optional_context:
Use these two folders as the primary correction chain for naming and operation-boundary drift. Also inspect, as supporting context, `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review`, `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility`, and `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search` for `source`, `PastNavigationMemoryFile`, index, search, and route-memory wording. This is an aggregate naming diagnostic, so keep confidence lower unless evidence isolates a specific prior-loop failure.

diagnostic_goal:
Identify evidence-backed hypotheses for why unclear names kept producing mechanism confusion. Diagnose whether the weakness is in framing, sensemaking vocabulary selection, conclude wording, or lack of user-language validation. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for the prior and corrected folders; read the additional context folders only for supporting vocabulary evidence. Do not treat later wording as ground truth.
```

## Guardrails For Running These Prompts

Run pairwise prompts before the aggregate prompt. Pairwise diagnostics are more likely to isolate stage or framing failures.

Do not ask `loop_diagnose.md` to diagnose all seven inquiries at once as the first pass. That blurs prior and corrected roles.

Do not let a diagnostic run use `finding.md` only. The archived discipline outputs are required evidence.

Do not ask for source edits until at least one diagnostic finding produces a specific maintenance candidate and evaluation gate.

## Next Actions

### MUST

- **What:** Use the pairwise prompts when running later `loop_diagnose.md` diagnostics.
  **Who:** User or future MVL+ runner.
  **Gate:** When the goal is to identify which MVL+ discipline, framing step, or protocol rule failed.
  **Why:** Pairwise prompts preserve weak-prior and corrected-inquiry roles.

- **What:** Keep exact root-cause and maintenance claims out of this inventory.
  **Who:** Current and future diagnostic work.
  **Gate:** Until a `loop_diagnose.md` finding identifies evidence-backed hypotheses.
  **Why:** Prevents overconfident self-maintenance edits.

### COULD

- **What:** Run the index-before-search diagnostic first.
  **Who:** User or future MVL+ runner.
  **Gate:** If only one diagnostic will be run first.
  **Why:** It has the cleanest correction edge and likely strongest evidence for a missed alternative.

### DEFERRED

- **What:** Propose MVL+ or discipline-source changes.
  **Gate:** After at least one `loop_diagnose.md` finding returns an `ACTIONABLE` diagnostic verdict with a concrete maintenance candidate and evaluation gate.
  **Why (if revived):** Source edits should be based on diagnosed failure mechanisms, not only this inventory.

## Reasoning

A flat failure list was rejected because it would be easy to read but too weak for later diagnosis. The user asked for prompts, and `loop_diagnose.md` needs roles and correction signals.

A prompt-only answer was rejected because the user also asked for the failures to be listed. Prompts without a failure inventory would hide why each diagnostic is worth running.

One aggregate prompt was refined. Cross-chain patterns are real, especially naming and authority-boundary drift, but `loop_diagnose.md` is built around correction chains. Pairwise prompts should come first.

Immediate maintenance candidates were rejected for this finding. Maintenance candidates belong in the later diagnostic findings, where the affected stage and confidence can be evaluated.

The surviving structure is an evidence-backed diagnostic backlog. It gives the user a failure list now and runnable prompts later, while keeping root-cause claims out of this inventory.

## Open Questions

### Monitoring

After two or three loop-diagnose runs from this prompt set, check whether the diagnostics converge on the same failure surface. If they do, that may justify a source-level maintenance inquiry.

### Refinement Triggers

Reopen this inventory if a later diagnostic finds that one of these listed failures was actually a healthy refinement rather than a weak prior result.

Reopen the prompt set if `loop_diagnose.md` rejects one of the prompts because the prior/corrected role assignment is not clean enough.

## Source Input

<details>
<summary>Raw user input excerpt for this finding</summary>

```text
$MVL+ 

inspect all these 
 devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity
  devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity
  devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary
  devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation
  devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review
  devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility
  devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search
and understand the all the failures that happen between them 

including using an ununderstandable name , to saying yes to index and then saying not needed and more

and list them to me 

i need these list because later on i will use 
homegrown/protocols/loop_diagnose.md

to identify what went wrong.. 

so also give me ready to run prompts for running  loop_diagnose.md witht them 

BE extrememly CAUTIOUS, DO NOT ASSUME, INSPECT DOCARCHIEVE FILES AND READ files fully
```

The pasted classic MVL skill body in the next user message was process context and is omitted here because it did not change the substantive evidence request.

</details>
