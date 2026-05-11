# Branch: Discipline Verdict Source Of Authority

## Question

Should `PROCEED / FLAG / RE-RUN` be emitted by each discipline itself, by Critique or another evaluator after downstream evidence exists, or by the runner from telemetry?

## Goal

A good answer should decide where verdict authority belongs, explain why discipline self-verdicts may be unsafe, preserve the useful routability goal without adding label-only hard-routing risk, and propose a safer architecture for MVL/MVL+ quality signals.

## Scope Check

Question covers goal. The question targets the source of verdict authority, the risk of discipline self-grading, the relationship to MVL result marks, and whether Critique can diagnose upstream discipline weaknesses from kill/refine patterns.

## Context

- Trigger: the user objected to `devdocs/inquiries/2026-04-28_07-52__discipline_verdict_telemetry_value_risk/finding.md`.
- User concern: a discipline cannot reliably know whether its output is sufficient for downstream use because the same process that produced weak output can rationalize itself.
- User concern: label-only hard routing is too risky and should not be added.
- User concern: `PROCEED / FLAG / RE-RUN` on every discipline may not be relevant to MVL result marks.
- User proposal: Critique may be the right place to produce upstream marks by analyzing what gets killed, refined, and why. Repeated kills on the same dimension may reveal common upstream mistakes in Sensemaking, Innovation, Decomposition, or another prior discipline.

## Relationships

- CORRECTS: devdocs/inquiries/2026-04-28_07-52__discipline_verdict_telemetry_value_risk/finding.md (reassesses verdict source of authority)
- RELATED: devdocs/inquiries/2026-04-28_00-25__resume_protocol_usecase/finding.md (telemetry-aware resume)
