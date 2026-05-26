# Branch: Materialization Trace Record Location

## Question

Should materialization trace information be stored in the existing task description or implementation plan files, or should it remain a distinct post-implementation trace/record artifact?

## Goal

A good answer should decide where source authority, mode selection, artifact records, changed files, validation results, deviations, outcome, and follow-up review should live. It should preserve the strength of task-desc and task-plan as pre-implementation artifacts while avoiding unnecessary extra files for minimal artifacts.

## Scope Check

Question covers goal. The user asks whether task plan or task description can hold materialization trace information; the goal requires deciding the record ownership model and whether compact artifacts can merge records safely.

## Context

Relevant inputs:

- `devdocs/inquiries/2026-04-28_13-22__artifact_materialization_protocol_shape/finding.md` selected a tiered Artifact Materialization protocol with Compact, Standard, and Full modes.
- `enes/materialization_lifecycle.md` defines the lifecycle as decision -> desc -> plan -> dynamic critic -> repair -> implement -> validate -> trace -> retrospect.
- The user's concern is that `task-plan` already exists before creation and may be able to hold trace information, reducing extra document overhead.
