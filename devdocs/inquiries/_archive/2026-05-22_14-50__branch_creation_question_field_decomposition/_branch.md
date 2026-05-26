# Branch: Structural Decomposition of MVL+ Branch Creation's Question Field

## Question

State the question covering all of these structural aspects (applying the user's decompose-vague-instructions methodology to this inquiry's own _branch.md as a meta-test of the approach):

- **Subject** — the field-level instructions inside `cognitive_harness/MVL+/SKILL.md` Step 3 of "If NEW (input is a question or description)" that produce the `_branch.md` artifact at root inquiry creation; specifically the **Question field instruction** ("the question, stated clearly in one sentence") and secondarily the Goal field instruction. These instructions were diagnosed at LOOP_DIAGNOSE finding H1 as the entry point of the enumeration-frame-error correction chain — the user's load-bearing phrase "accumulation of other disciplines and finding" was dropped during transcription.
- **Action** — restructure / decompose the vague single-prompt instruction into an explicit enumeration of meta-categories with full coverage of question-content axes, AND add a fail-safe verification step that catches dropped load-bearing phrases without depending on the meta-category enumeration being provably complete.
- **Level** — instruction-text level within a framework artifact (the MVL+ runner spec). Structural granularity = the SHAPE of one instruction inside an existing template. NOT a from-scratch rewrite of MVL+ SKILL.md as a whole.
- **Observation targets** — FOUR explicit observation targets (each must appear in the deliverable):
  1. The paste-ready replacement text for the Question field instruction, with named meta-categories + full coverage rationale per category.
  2. Coverage analysis showing the H1 failure case (dropped conjunction-joined observation target) IS caught by at least one named meta-category.
  3. A fail-safe verification step (transcription-audit / raw-input diff) that catches dropped load-bearing phrases even if my meta-categories miss something — the meta-recursion fail-safe.
  4. Explicit acknowledgment of the meta-recursion residual: my proposed meta-categories cannot be provably complete; the fail-safe is the load-bearing element.
- **Deliverable shape** — paste-ready instruction text + coverage analysis + risk acknowledgment + branch-experiment evaluation gate (per LOOP_DIAGNOSE Step 5 guardrail; one-chain evidence is thin for permanent source edits).

Plain restatement (for readability, with all 5 aspects compressed): How should the Question field instruction in `cognitive_harness/MVL+/SKILL.md` Step 3 of "If NEW" be restructured into explicit meta-categories + a fail-safe so that the H1 load-bearing-phrase-loss failure mode is structurally prevented at the transcription step?

## Goal

A deliverable the user can act on immediately:

- **Criterion** — a good answer produces a paste-ready replacement for the current Question field instruction. The replacement must enumerate meta-categories that cover the question-content axes plausibly relevant to MVL+ inquiries; demonstrate that H1's failure case is covered by at least one named category; include a fail-safe that catches what the enumeration might miss; and explicitly acknowledge meta-recursion risk.
- **Use case** — the user pastes the replacement instruction into `cognitive_harness/MVL+/SKILL.md` as a branch experiment (parallel to the current spec); runs 5 NEW inquiries through both versions; measures whether the audited version catches load-bearing-phrase loss in ≥3 of 5 chains where it would occur. If the gate passes, the edit becomes permanent.
- **Desired outcome** — the H1 transcription failure mode is structurally less likely in future MVL+ inquiries. Cumulative MVL+ output quality across inquiries that have multi-part user-framing improves.
- **What would fail** — a decomposition that LOOKS comprehensive but actually misses a question-content axis (resulting in same failure mode under different surface form), OR a decomposition with so many sub-fields that it bloats every _branch.md unnecessarily, OR a proposed edit without a branch-experiment evaluation gate (violating LOOP_DIAGNOSE Step 5 guardrail on source-edit overreach).

## Scope Check

Question covers goal. The question asks for the decomposed instruction; the goal asks for the instruction + coverage analysis + fail-safe + acknowledgment + evaluation gate. The supporting elements are operationally necessary for the deliverable to function safely.

Specific-vs-pattern check: SPECIFIC. The deliverable is the actual replacement text for one instruction in one file. The broader pattern (general methodology for decomposing vague LLM instructions into meta-category enumerations + fail-safes) may emerge as Open Question but is not foreground.

## Layer Commitment

Primary cognitive layer: **STRUCTURAL**.

The question targets a framework-artifact instruction's SHAPE (how the instruction is organized: vague-single-prompt vs enumerated-meta-categories-with-fail-safe). It does NOT redefine what `_branch.md` IS (meaning layer would be: "what is a branch file as a concept?") and it does NOT change the PROCEDURE of MVL+ as a whole (process layer would be: "what order do the MVL+ steps run in?"). Only the instruction-text shape inside one step.

Out-of-scope layers:
- **Meaning layer** — what `_branch.md` IS as an artifact, or what the question/goal/scope-check concepts are. Out of scope: those meanings are already committed and the user is not questioning them.
- **Process layer** — what order MVL+ steps run in. Out of scope: the step order is correct as-is.

Sequential plan: structural this run; if the structural change reveals process-layer adjustments needed (e.g., the fail-safe step needs explicit positioning in the order), a follow-up process-layer inquiry would address it. No multi-layer plan needed at this point.

## Relationships

- CONTINUES FROM:
  - `devdocs/inquiries/2026-05-22_14-30__loop_diagnose__enumeration_frame_error_in_test_design/finding.md` — LOOP_DIAGNOSE finding that identified H1 (transcription failure) as a primary failure surface; MC2 (transcription-audit branch experiment) was named as the maintenance candidate. This inquiry operationalizes MC2.
- RELATED:
  - `cognitive_harness/MVL+/SKILL.md` — the artifact being structurally refined.
  - `cognitive_harness/protocols/loop_diagnose.md` — protocol whose Step 5 guardrail governs the branch-experiment evaluation gate.

## Source Input (raw user request to this inquiry — preserved verbatim for transcription-audit reference)

```text
User's phrase "accumulation of other disciplines and finding" was DROPPED during transcription; only "discriminate /explore from /surfacing" survived.

why? can u inspect branch creation and find the error part and maybe we can enhance it?

and i have this methdology which we used many times, sometimes we can use a sentence/concept in our prompt but this prompt sth doesnt produce same coverage of results each run. and this causes fluctuations in results quality. when this happens my appraoch is to understand the concept in terms of what it consists of and what are components and redefine that part of the prompt with more verbose version of that sentence so that it actually names these sub concepts components,,, this way LLM will see all coverage words and it is less likely to skip one aspect or layer because it is explicit. but key point is this decomposed version must be meta and have full coverage, otherwise if we make it explicit but miss a component, LLM will skip that missing componenet

lets try to approach this like this. first lets find the place whcih place is responsible in MVL+ md file for branch file creation and then try to decompose that part into meta categories with coverage and make sure experienced error is covered by one at least
```
