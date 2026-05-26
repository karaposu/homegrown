# Branch: Cognitive Fixes Formalization — Design Decision

## Question

State the question covering all five meta-aspects below.

- **Subject** — the organizational structure (or absence) inside `cognitive_harness/` that would house the user's "decompose vague LLM instruction into named meta-categories with full coverage + structural fail-safe" methodology. The user is asking whether a `cognitive_fixes` protocol should exist as a generic container for recurring fix-patterns of this kind, with the recently-applied MVL+ Question-field fix (`devdocs/inquiries/2026-05-22_14-50__branch_creation_question_field_decomposition/finding.md`) as the first instance.
- **Action** — evaluate the user's proposal + decide whether to formalize now + design the structure (if proceeding) + design the staging / promotion gate (per LOOP_DIAGNOSE Step 5 guardrail against premature protocol-promotion from one application).
- **Level** — methodology-corpus organization (between discipline-level and runner-level inside `cognitive_harness/`). Not redefining what a "cognitive fix" IS conceptually (meaning) or specifying the procedural STEPS to apply one (process — those are already in the LOOP_DIAGNOSE + the MVL+ inquiry's finding); the question is the SHAPE of how the corpus accommodates this pattern.
- **Observation targets** — six targets (each must be addressed):
  1. Honest evaluation: is formalization warranted from one N=1 application? (Per LOOP_DIAGNOSE Step 5 / Step 6 same-pattern guardrail.)
  2. If yes, structural shape (folder of fixes / template / protocol / discipline / runner hook).
  3. Naming choice (`cognitive_fixes` vs alternatives like `coverage_enforcement` / `instruction_robustness` / `prompt_fixes`).
  4. Staging / promotion-gate (when does the folder-of-fixes promote to a protocol? What's the evidence threshold? What's the kill condition?).
  5. Relationship to existing protocols (LOOP_DIAGNOSE has Step 5 guardrail against premature promotion — same logic should apply here).
  6. Honest opinion / recommendation (the user explicitly asked "what do you think"; the deliverable must include an evaluation not just a design).
- **Deliverable shape** — evaluation + recommended path + concrete artifacts (folder structure / template text / first-instance entry) if proceeding + promotion-gate spec + premature-formalization risk acknowledgment.

Plain restatement: should we create a `cognitive_fixes` folder/template/protocol now to house the decompose-vague-instructions-with-coverage methodology (with the recent MVL+ fix as the first instance), and if yes — in what staged form, with what name, and with what promotion-gate before any of it becomes a runner-level protocol?

## Goal

A deliverable the user can act on immediately:

- **Criterion** — honest evaluation of whether to formalize; concrete staged path if proceeding (folder + template at minimum; protocol promotion gated on N≥3-5 applications); naming + structural choice committed; premature-formalization risk explicitly acknowledged.
- **Use case** — user adopts the recommended structure (or pushes back). If proceeding, user creates the folder + template + indexes the MVL+ fix as 01. If not proceeding now, the inquiry serves as documented reasoning for why the timing was wrong.
- **Desired outcome** — the harness's methodology corpus has the right level of formalization for the current evidence state: not so much that we overreach from N=1, not so little that the methodology drifts in memory.
- **What would fail** — (a) creating a full protocol now from one application (overreach per LOOP_DIAGNOSE Step 5); (b) creating no structure and letting the methodology drift; (c) creating an over-bureaucratic template that adds friction without value; (d) committing to a structure without an explicit kill condition (if the pattern doesn't recur, the structure should be deletable cleanly).

## Source Input

```text
okay now lets talk about this

and i have this methdology which we used many times,                                                                                 
                                                                                                                                       
  sometimes we can use a sentence/concept in our prompt but this prompt sth doesnt produce same coverage of results each run. and      
  this causes fluctuations in results quality. when this happens my appraoch is to understand the concept in terms of what it          
  consists of and what are components and redefine that part of the prompt with more verbose version of that sentence so that it       
  actually names these sub concepts components,,, this way LLM will see all coverage words and it is less likely to skip one aspect    
  or layer because it is explicit.  but key point is this decomposed version must be meta and have full coverage , otherwise if we     
  make it explicit but miss a component, LLM will skip that missing componenet

i think this should be a generic protocol which we can apply to some of issues we will have in future. maybe we need a cognitive_fixes protocol and this can be one of kind?  what do you think
```

## Scope Check

Question covers goal. The question asks for evaluate + design + stage; the goal asks for evaluation + concrete artifacts + promotion gate + risk acknowledgment. All supporting elements are within scope.

Specific-vs-pattern check: SPECIFIC. The deliverable is the decision + artifacts for THIS proposed formalization (cognitive_fixes / the methodology / one application so far). Broader pattern (how to formalize any recurring methodology across the harness) emerges as Open Question but is not foreground.

## Layer Commitment

Primary cognitive layer: **STRUCTURAL**.

The question targets the SHAPE of organization inside `cognitive_harness/` — folder vs protocol vs discipline vs hook. It does NOT redefine what a "cognitive fix" IS as a concept (meaning layer — settled: it's a methodology pattern for mitigating recurring LLM failure modes via instruction decomposition + structural fail-safe). It does NOT specify the procedural STEPS one runs to apply a fix (process layer — those steps are already documented in the MVL+ Question-field finding's methodology section).

Out-of-scope layers:
- **Meaning** — "what cognitive fix concept means" — out of scope; settled by the methodology already applied
- **Process** — "what steps to apply a cognitive fix" — out of scope; the 7-step methodology is already documented (identify → decompose → coverage-check → structural fail-safe → meta-recursion-residual ack → branch experiment → evidence gate)

Sequential plan: structural this run; if structural choice reveals process-layer adjustments (e.g., template fields need refining), follow-up process-layer inquiry would address.

## Synthesis Trigger

OMIT — this inquiry consumes prior context (LOOP_DIAGNOSE finding + MVL+ Question-field finding) as evidence but does not synthesize N≥2 priors into a consolidated version.

## Relationships

- CONTINUES FROM:
  - `devdocs/inquiries/2026-05-22_14-50__branch_creation_question_field_decomposition/finding.md` — the N=1 application of the methodology; this inquiry decides whether/how to formalize it.
- RELATED:
  - `devdocs/inquiries/2026-05-22_14-30__loop_diagnose__enumeration_frame_error_in_test_design/finding.md` — LOOP_DIAGNOSE Step 5 guardrail against premature protocol-promotion applies analogously here.
  - `cognitive_harness/protocols/loop_diagnose.md` — protocol whose Step 6 ("Optional future MVL+ hook") establishes the same promotion-gating discipline this inquiry should follow.
  - `cognitive_harness/protocols/` — existing protocols folder where a future `cognitive_fixes.md` would live IF the methodology is eventually promoted.
