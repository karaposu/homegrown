# Branch: Explore — Canonical Coverage via Staged Iteration

## Question

How should `/explore` be structured to guarantee thorough coverage of relevant content — including canonical-source content the inquiry depends on — rather than random sampling, and specifically should `/explore` itself adopt a staged for-loop pattern (surface a coarse concept map first, then drill into each concept's surrounding context one by one)?

## Goal

A grounded design decision with rationale: (1) WHERE staging lives — inside `/explore` per-call, or in a separate `/staged-explore` runner that orchestrates multiple `/explore` invocations — and (2) WHAT concrete coverage-guarantee mechanism prevents canonical-source content from being missed (because "more staging" does not automatically equal "no misses"). The user should be able to act on the answer immediately: either ship the runner skill, modify `/explore` directly, or harden the existing coverage rules.

## Scope Check

Question covers goal. The question asks BOTH (a) the structural-design question (where staging lives) AND (b) the coverage-guarantee question ("not randomly"; "canonical-source content can be missed"). The goal asks for the design decision + the coverage mechanism. Match.

Specific-vs-pattern check: The user references `devdocs/nav_north_star.md` and the for-loop pattern itself as examples, not as the specific subject. The inquiry addresses the broader pattern of how `/explore` achieves coverage and how staging should be organized — not just whether one specific file should be picked up by one specific run.
