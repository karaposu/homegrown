# Branch: Loop Diagnose Protocol Integration

## Question

Is `loop_diagnose` basically a protocol for comparing a weak prior MVL/MVL+ inquiry against a later corrected inquiry using the human correction as evidence, and how should that protocol be integrated with MVL/MVL+?

## Goal

A good answer should clarify what `loop_diagnose` is, what inputs it needs, what output it should produce, whether it is itself a discipline or an MVL/MVL+ wrapper protocol, and how MVL/MVL+ should load or invoke it without breaking the existing atomic-loop logic.

## Scope Check

Question covers goal. The question asks both what the proposed diagnostic protocol means and how it should be wired into the loop runner; the goal requires answering those points and giving an implementation recommendation.

## Context

- The user is responding to `devdocs/inquiries/2026-04-28_07-35__protocol_priority_top_5/finding.md`, where `loop_diagnose` was ranked first.
- The user proposes a concrete shape: read `path_A` and `path_B`, including `docarchive`, treat the human guidance as a correction signal, compare the old and new loop outputs, and infer what went wrong in the older run.
- Current MVL/MVL+ source files in `homegrown/` already use timestamped inquiry folder names.
- The user is considering a conditional hook such as: "if MVL is being called for self-maintenance, load `homegrown/protocols/loop_diagnose.md`."

## Relationships

- CONTINUES FROM: 2026-04-28_07-35__protocol_priority_top_5 (Rank 1 `loop_diagnose`)
- RELATED: 2026-04-27_21-38__loop_diagnose_git_self_maintenance
- RELATED: 2026-04-28_07-52__discipline_verdict_telemetry_value_risk
