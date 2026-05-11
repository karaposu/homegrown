# Task Description: navigation_context_intake_protocol

## Problem Statement

Homegrown needs a repeatable way to warm up a session before Navigation runs. The current burden still falls on the user: they decide which recent findings, protocols, traces, branches, outcome reviews, and codebase artifacts the AI should load before asking "what should we do next?"

## User Value

Once this protocol exists, the user can ask for project-level Navigation without manually reconstructing current project state every time.

## Success Criteria

- `homegrown/protocols/navigation_context_intake.md` exists.
- It defines Navigation warm-up as a pre-Navigation protocol, not Navigation itself.
- It defines source profiles for codebase, artifact set, project state, business strategy, mixed, and other.
- It defines Compact, Standard, Deep, and Full intake modes.
- It preserves the staged unlock pattern: orientation summary -> structural map -> behavior/movement/evidence traces.
- It reuses existing codebase archaeology commands for codebase warm-up.
- It defines project/artifact/thinking-state stages for non-code artifacts.
- It defines a current-state brief output contract.
- It defines read-set recording, confidence limits, handoff to Navigation, trace, and outcome review gate.
- It includes extraction gates for future standalone project-state warm-up commands.

## Scope Boundaries

This materialization will not:

- edit Navigation skill or discipline files;
- create standalone project-state warm-up commands;
- create a Navigation Observer protocol;
- create a selector;
- run a full Navigation dogfood session;
- edit `.codex` files.

## Priority

High. This is the next protocol artifact selected by recent findings and directly targets the user's context-steering burden.

## Materialization Contract

```yaml
source_authority: user_request + findings
source_paths:
  - devdocs/inquiries/2026-05-02_15-09__next_load_bearing_navigation_warmup_context_loading/finding.md
  - devdocs/inquiries/2026-05-02_15-35__navigation_context_intake_warmup_archaeology_pattern/finding.md
artifact_type: protocol
operation_intent: create
target_path: homegrown/protocols/navigation_context_intake.md
write_set:
  - homegrown/protocols/navigation_context_intake.md
  - devdocs/materializations/2026-05-02_15-53__navigation_context_intake_protocol/
risk_class: medium
selected_mode: standard
validation_plan:
  - verify target file exists
  - verify required anchors exist with rg
  - verify ASCII-only content
  - run structural checker if available
trace_location: devdocs/materializations/2026-05-02_15-53__navigation_context_intake_protocol/materialization_trace.md
follow_up_review_gate: after_first_use
```
