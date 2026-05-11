# Branch: Artifact Materialization Protocol Shape

## Question

What should the operational `homegrown/protocols/artifact_materialization.md` protocol include and exclude, and how can it support a smaller lifecycle for minimal artifacts without wasting compute or time?

## Goal

A good answer should give a practical protocol design boundary: required sections, excluded responsibilities, risk tiers, minimal-path rules, gates for escalation to the full task-desc -> task-plan -> dynamic critic -> repair -> implement -> validate -> trace lifecycle, and guidance for when small artifacts can safely use a compressed flow.

## Scope Check

Question covers goal. The question asks what the protocol should include or exclude and specifically asks whether minimal artifacts can use a smaller lifecycle; the goal requires a concrete protocol shape and tiering model that answers both.

## Context

Relevant inputs:

- `enes/materialization_lifecycle.md` defines the larger lifecycle: decision -> desc -> plan -> dynamic critic -> repair -> implement -> validate -> trace -> retrospect.
- `devdocs/inquiries/2026-04-28_10-28__artifact_generation_readiness/finding.md` concluded that Homegrown needs a post-CONCLUDE Artifact Materialization protocol rather than broad synthesis or direct skill-level artifact generation.
- The proven external flow in `vibe-driven-development/commands/` is task description -> implementation plan -> dynamic critic -> plan repair -> implementation.
- Existing `homegrown/protocols/` contains `conclude.md`, `loop_diagnose.md`, `resume.md`, and `unknown.md`; no artifact materialization protocol exists yet.
