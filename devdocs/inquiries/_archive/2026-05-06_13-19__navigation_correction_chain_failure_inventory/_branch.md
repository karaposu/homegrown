# Branch: Navigation Correction Chain Failure Inventory

## Question

Across the listed Navigation-related inquiry folders, what failures happened between the inquiries, what evidence supports each failure, and what ready-to-run `loop_diagnose.md` prompts should be used later to diagnose them?

## Goal

A good answer should give the user a cautious, evidence-backed inventory of failures across the specified correction chain, including naming failures, trigger-boundary failures, artifact-necessity reversals, index recommendation reversal, and any other failure visible in the inquiry artifacts. It should inspect all root Markdown files and archived discipline outputs in the listed folders, avoid assuming unstated root causes, and produce ready-to-run prompts for `homegrown/protocols/loop_diagnose.md`.

## Scope Check

Question covers goal. The question asks for the cross-inquiry failure inventory and loop-diagnose prompt preparation, and the goal requires evidence, caution, full artifact inspection, and runnable diagnostic prompts.

## Evidence Set

- devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity
- devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity
- devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary
- devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation
- devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review
- devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility
- devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search

## Required Reads

For every folder in the evidence set, read all root Markdown files and all `docarchive/*.md` files fully.
