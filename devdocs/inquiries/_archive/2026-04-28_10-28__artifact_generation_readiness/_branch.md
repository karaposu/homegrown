# Branch: Artifact Generation Readiness

## Question

Is the current Homegrown repo mature enough to start testing ARC-style work and see what it produces, or is it missing important artifact-generation infrastructure such as a synthesis protocol that can turn findings into non-Markdown artifacts?

## Goal

A good answer should tell the user whether to start testing now, what kind of tests are valid at the current maturity level, what important gaps remain, and whether a new artifact/synthesis protocol should be created before trying to build ARC harness adapters or other executable artifacts. It should distinguish markdown-only reasoning maturity from executable artifact production maturity.

## Scope Check

Question covers goal. The question asks about current repo readiness and missing infrastructure; the goal requires a practical readiness verdict, gap diagnosis, and a recommendation about an artifact-generation protocol.

## Context

Relevant prior findings:

- `devdocs/inquiries/2026-04-28_10-10__arc_agi_competition_fit/finding.md` concluded that Homegrown is not an ARC solver as-is and needs an executable ARC harness plus trace layer before ARC score claims are meaningful.
- `devdocs/inquiries/2026-04-28_07-35__protocol_priority_top_5/finding.md` ranked structural integrity/telemetry contracts and maintenance branch experiments as near-term priorities.
- The current protocol folder contains `conclude.md`, `loop_diagnose.md`, `resume.md`, and `unknown.md`, but no dedicated protocol for producing implementation artifacts from findings.
