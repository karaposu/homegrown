# Branch: Loop Diagnose - Aggregate Naming and Boundary Drift

## Question

Across the correction chain rooted at `devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity/` (where `prior_map_overlay` was the original artifact name, replaced by `Route Memory Review`), corrected by `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/` (where `Route-Memory Preflight` was rejected as a separate routine in favor of `route-memory status classification`), and reinforced by supporting context from `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/` (where `PastNavigationMemoryFile` was introduced as a load-bearing concept), `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/` (where `PastNavigationMemoryFile Index` was proposed), and `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search/` (where the index was rejected for `PastNavigationMemoryFile Discovery Search`) — and given the user's repeated pushback that `prior_map_overlay`, "Route-Memory Preflight," "source," and `PastNavigationMemoryFile` either sounded like the wrong operation or were not understandable enough — what is the evidence-backed diagnosis for why unclear names kept producing mechanism confusion across the chain, and which of the candidate weakness axes (framing, Sensemaking vocabulary selection, Conclude wording, lack of user-language validation) is most likely the locus?

## Goal

A good answer should identify evidence-backed failure hypotheses for why unclear names kept producing mechanism confusion, with confidence levels (kept lower unless evidence isolates a specific prior-loop failure), name affected stages, classify shortcoming types, and produce maintenance candidates with explicit evaluation gates. Specifically: diagnose whether the weakness is in framing (the question or its decomposition lacked a name-validation step), Sensemaking vocabulary selection (the SV2-SV3 / Conceptual Stabilization output committed to names without grounding), Conclude wording (the finding-template invented or amplified labels), or lack of user-language validation (the loop never tested names against how the user would say it). This is the seventh LOOP_DIAGNOSE run and is explicitly an aggregate diagnostic, so isolated single-chain claims need particularly strong evidence.

## Scope Check

Question covers goal. The question asks for evidence-backed diagnosis of the naming/boundary drift across an aggregate corpus and explicitly names the four candidate weakness axes. The goal asks for confidence-aware hypotheses, candidate axis classification, and maintenance candidates with evaluation gates — all addressable from the corpus reads.

## Correction Chain

- **Primary correction chain:**
  - Prior path: `devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity/`
  - Corrected path: `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/`
- **Supporting context folders (vocabulary evidence only):**
  - `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/` — `source`, `PastNavigationMemoryFile`, "review-by-default" wording.
  - `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/` — `PastNavigationMemoryFile Index` proposal.
  - `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search/` — index → search rename.
- **Human correction (aggregate signal across the chain):**
  ```text
  Across the chain, the user repeatedly pushed back on unclear or unnatural names and boundaries: `prior_map_overlay`, "Route-Memory Preflight," "source," and `PastNavigationMemoryFile` either sounded like the wrong operation or were not understandable enough.
  ```
- **Optional context:**
  ```text
  Use these two folders as the primary correction chain for naming and operation-boundary drift. Also inspect, as supporting context, the three additional folders for `source`, `PastNavigationMemoryFile`, index, search, and route-memory wording. This is an aggregate naming diagnostic, so keep confidence lower unless evidence isolates a specific prior-loop failure.
  ```

## Required Reads

- Primary chain: `_branch.md`, `_state.md`, `finding.md`, root discipline outputs if present, and `docarchive/*.md` for both the prior and corrected folders.
- Supporting folders: vocabulary evidence only — `_branch.md` and `finding.md` are sufficient unless name-specific reasoning lives in discipline outputs.
- Do not treat later wording as ground truth. The corrected loops' rename decisions are evidence of the correction, not proof of which prior name was wrong.

## Diagnostic Constraints

- Treat the human correction as evidence, not noise. Signal type this chain: aggregate vocabulary pushback (across multiple chains and multiple specific names) — seventh distinct expression style across the LOOP_DIAGNOSE corpus.
- Treat all corrected inquiries as comparative evidence, not ground truth.
- Prefer evidence-backed hypotheses over exact root-cause claims. Aggregate diagnostic — keep confidence LOWER unless evidence isolates a specific prior-loop failure.
- Allow mixed or unknown attribution.
- Compositional candidate identifier scheme: U-prefix for chain 7 (M=1, N=2, O=3, R=4, S=5, T=6, U=7).
- Cross-chain pattern observations: track P1, P2, P3, P4, P5, P6, P7, P8, P11. P12+ may emerge as a new naming/vocabulary failure family if evidence supports it.
- M6 effectiveness check #4: with 3 cumulative refinements (M6-refinement-S, M6-refinement-C, M6-refinement-S2), would M6 catch chain 7's naming-drift failure? If chain 7 surfaces another M6 refinement, M6 cumulative refinement count reaches 4 — consolidation review trigger fires.
- TP3 effectiveness check #1: TP3 was promoted at chain 6. Does TP3 fire correctly against chain 7's Critique?
- Predict whether chain 7 might be the first chain to NOT yield maintenance candidates — confidence is constrained by aggregate-diagnostic framing.
- Aggregate-diagnostic evidence rule: claims at chain 7 must cite evidence from at least the primary correction chain (prior + corrected) before treating supporting folders as reinforcement.

## Relationships

- DIAGNOSES: devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity/ (weak prior inquiry; primary chain origin)
- COMPARES WITH: devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/ (later corrected inquiry; primary chain target)
- SUPPORTING CONTEXT: devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/ (vocabulary evidence: `PastNavigationMemoryFile`, "source")
- SUPPORTING CONTEXT: devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/ (vocabulary evidence: `PastNavigationMemoryFile Index`)
- SUPPORTING CONTEXT: devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search/ (vocabulary evidence: index → search rename)
- RELATED: devdocs/inquiries/2026-05-06_13-19__navigation_correction_chain_failure_inventory/ (inventory; Prompt 7)
- RELATED: devdocs/inquiries/2026-05-07_15-01__loop_diagnose__past_navigation_memory_index_vs_search/ (chain 1)
- RELATED: devdocs/inquiries/2026-05-07_15-35__loop_diagnose__route_memory_review_file_necessity/ (chain 2)
- RELATED: devdocs/inquiries/2026-05-07_16-28__loop_diagnose__route_memory_preflight_reevaluation/ (chain 3)
- RELATED: devdocs/inquiries/2026-05-07_16-57__loop_diagnose__early_stage_always_full_route_memory_review/ (chain 4; M6 refinements)
- RELATED: devdocs/inquiries/2026-05-07_18-24__loop_diagnose__route_memory_review_trigger_boundary/ (chain 5; N9 promotion)
- RELATED: devdocs/inquiries/2026-05-07_19-08__loop_diagnose__past_navigation_memory_file_index_feasibility/ (chain 6; M6-refinement-S2 + TP3 promotions)
