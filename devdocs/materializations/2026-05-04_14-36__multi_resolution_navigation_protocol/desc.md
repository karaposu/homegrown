# Task Description: Multi-Resolution Navigation Protocol

## Problem Statement

The latest Navigation finding corrected a risky wording issue: breadth should not be described as the problem in multi-resolution Navigation. Broad route discovery is Navigation's purpose. The actual risk is untracked, unresumable child-map execution.

`homegrown/protocols/multi_resolution_navigation.md` does not exist yet. The next artifact should create it with the corrected premise baked into the protocol.

## User Value

The user gets a protocol that can later support multi-resolution Navigation without weakening route-space coverage or hiding unrun paths.

## Success Criteria

- Create `homegrown/protocols/multi_resolution_navigation.md`.
- State clearly that many discovered directions are desired.
- Define the actual risk as unbounded execution without frontier, composition, and resume state.
- Use `batch_size` or `max_batch_expansions`, not `max_expansions`, as the current-run expansion budget.
- Preserve the distinction between discovery, scheduling, and final selection.
- Require unrun candidates to remain visible and runnable later.

## Scope Boundaries

In scope:

- A v1 Markdown protocol for manual use and future runner design.
- Corrected wording and invariants.
- Input contract, output contract, procedure, statuses, and failure modes.

Out of scope:

- Implementing a `/multi-navigation` runner.
- Editing `.codex`.
- Patching the Navigation discipline itself.
- Running a real multi-resolution Navigation trial.

## Priority

High. This artifact prevents the future runner from encoding the wrong risk model.

## Source Authority

- User request: "do this"
- Source finding: `devdocs/inquiries/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage/finding.md`
- Source anchor: Next Actions / MUST / "Correct future multi-resolution Navigation protocol wording so breadth is not described as the problem."

## Artifact Type

`protocol`

## Operation Intent

`create`

## Target Path And Write-Set

Target path:

```text
homegrown/protocols/multi_resolution_navigation.md
```

Write-set:

```text
homegrown/protocols/multi_resolution_navigation.md
devdocs/materializations/2026-05-04_14-36__multi_resolution_navigation_protocol/
```

## Validation Plan

- Manual structural review of the created protocol.
- Search for forbidden or misleading language that frames breadth itself as the problem.
- Search for `max_expansions`; it may appear only as legacy/migration wording, not as the canonical field.
- Confirm no `.codex` files are changed.

Automated structural checker is unavailable because `tools/structural_check.sh` is missing.

## Risk Class

Medium.

Reason: this creates a new protocol that future Homegrown work may load. It does not change runtime behavior now, but it can shape future runner behavior.
