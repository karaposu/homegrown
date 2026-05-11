# Branch: Discipline Verdict Telemetry Value Risk

## Question

Should Homegrown add standardized `PROCEED / FLAG / RE-RUN` verdicts to all MVL+ disciplines, and what would that do to quality, trust, routing, and rigidity?

## Goal

A good answer should explain why verdict telemetry would be added, whether it can improve discipline quality, how much we can trust self-evaluation by each discipline, what other advantages it brings, what rigidity risks it creates, and what design would preserve flexibility while making outputs routable.

## Scope Check

Question covers goal. The question asks about the reason for adding verdicts, quality effects, trustworthiness, other advantages, and rigidity risks; the goal requires answering exactly those points and giving a design recommendation.

## Context

- The user is responding to `devdocs/inquiries/2026-04-28_00-25__resume_protocol_usecase/finding.md`.
- That finding said telemetry-aware Resume is blocked until disciplines reliably report routable verdicts.
- Current source scan:
  - Innovation has an exact `**Overall: PROCEED** / **FLAG** / **RE-RUN** line in `homegrown/innovate/references/innovate.md`.
  - Critique has Convergence Telemetry with `Output: PROCEED / FLAG / RE-RUN` in `homegrown/td-critique/SKILL.md`.
  - Exploration, Sensemaking, and Decomposition have telemetry/self-evaluation concepts, but not a standardized routable final verdict line.
- Related recent finding: `devdocs/inquiries/2026-04-28_07-35__protocol_priority_top_5/finding.md` ranked `structural_integrity_and_telemetry_contract` as the third priority protocol.

## Relationships

- RELATED: resume_protocol_usecase (telemetry-aware Resume prerequisite)
- RELATED: protocol_priority_top_5 (structural integrity and telemetry contract priority)
