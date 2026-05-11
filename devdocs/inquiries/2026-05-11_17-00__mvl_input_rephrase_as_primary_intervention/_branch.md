# Branch: MVL+ Input-Rephrase as Primary Intervention Layer

## Question

Should the primary intervention for convergence-recognition failure (and question pre-bias more generally) live inside /MVL+'s input-handling step — the moment the runner converts the user's raw input into `_branch.md`'s Question, Goal, and Scope Check — rather than as a passive writing reminder (the prior 14-00 inquiry's Layer 1) or as the deferred discipline-layer refinement notes (the prior 14-00 inquiry's Layer 2)? If yes, what structured-but-lightweight rephrase logic would make the runner LOYAL to what is fuzzy and what is not fuzzy in the user's input — preserving ambiguity where the input is ambiguous, surfacing implicit candidates rather than baking them into a single-direction framing — so downstream disciplines can handle the query with accuracy?

## Goal

A clear verdict on whether structured input-rephrase logic at /MVL+'s runner level is (a) a Layer 1 REPLACEMENT for the writing-discipline reminder; (b) a CO-PRIMARY Layer 1 alongside the reminder; (c) a different layer entirely; or (d) not viable. If viable, the answer should sketch:

- WHAT the rephrase logic preserves (fuzzy-vs-non-fuzzy distinction; implicit candidates; question shape; the user's word choices that carry pre-bias).
- HOW the rephrase logic operates (steps; signal types it watches for; outputs it produces in `_branch.md`).
- WHERE in /MVL+ the logic lives (the input-handling step in `/Users/ns/.claude/skills/MVL+/SKILL.md`).
- WHAT it does NOT do (over-engineering boundaries — it's the runner, not a discipline; should not duplicate discipline-layer cognition).
- HOW it interacts with the prior 14-00 finding's MC1 (writing-discipline reminder) and MC2 (DEFERRED discipline-layer bundle).

## Scope Check

Question covers goal: YES. The question asks whether the intervention should live in /MVL+'s rephrase logic; the goal compiles the rephrase-logic sketch + interaction with prior 14-00 finding's layered intervention.

**Specific-vs-pattern check:** the user names /MVL+ specifically. Classic /MVL has the same rephrase step (read the question, restate clearly, write `_branch.md`). Default reading: address /MVL+ as primary; note /MVL classic as adjacent and likely inheriting the same intervention.

**Self-reference acuity:** HIGH. This inquiry uses /MVL+ to investigate /MVL+ itself — specifically the runner's input-handling step. The disciplines analyzing the runner will be run BY the runner. Mitigations required: external anchoring (the prior 14-00 finding; concrete read of the current /MVL+ SKILL.md); track whether disciplines stay within mandate.

**Pre-bias self-check (applying the very thing being investigated):** the user's question already pre-biases toward "yes, rephrase logic is the answer" via the phrase "maybe the real solution is not editing sensemaking innovation etc but how MVL handles input query." The inverse framing: "maybe rephrase logic is NOT viable as Layer 1, and the writing-discipline reminder is the correct location." This inquiry must test both directions.

## Relationships

- CONTINUES FROM: `devdocs/inquiries/2026-05-11_14-00__loop_diagnose__why_disciplines_missed_convergence/finding.md` — that finding's Layer 1 reminder is being reconsidered; this inquiry may revise MC1.
- POTENTIALLY AFFECTS: `/Users/ns/.claude/skills/MVL+/SKILL.md` (the /MVL+ runner spec); classic `/Users/ns/.claude/skills/MVL/SKILL.md` (likely inherits); `enes/runtime_environment/inquiry_framing_discipline.md` (may become redundant if rephrase logic absorbs it).
- RELATED: `devdocs/inquiries/2026-05-11_13-30__explore_vs_navigation_overlap/finding.md` (origin case); `devdocs/inquiries/2026-05-11_13-45__is_explore_and_navigation_one_underlying_operation/finding.md` (corrected case).

## Diagnostic Note

This inquiry is NOT a loop_diagnose. It's a forward-looking design question about WHERE to install the intervention from the 14-00 diagnosis. The 14-00 finding identified the failure and proposed a layered intervention; this inquiry tests whether the upper layer should be promoted from passive-reminder to active-runner-logic.
