# Branch: Task-Define MQ2 — Reframe Toward Surfacing-Directive Alignment

## Question

- **Subject** — the **MQ2 meta-question** in the Task-Define discipline runtime spec at `cognitive_harness/task-define/references/task-define.md` §2.3 (canonical wording: *"Is this task self-contained, or does it require external context to make sense and be done right? If external, what kind?"*) and the explanatory framing of it in `devdocs/what_is_task_define.md` (the line *"does the LLM need to know the project to do this right, or is the statement self-contained?"*). The user's critique is that the current framing is too abstract/binary — a generic "external context yes/no" verdict — when the cognitive question MQ2 is actually asking (and should be asking) is sharper: **what specific information needs to be surfaced from the project base, framed in a way that lets the downstream `/surfacing` discipline fully align with it?**
- **Action** — **redefine (DEVELOP)** what MQ2 IS as a cognitive question — its substance, the shape of its answer, and the downstream coupling it sets up. This is meaning-layer work: not "rewrite the spec wording" (structural) and not "change how MQ2 fires" (process), but "settle what cognitive question MQ2 is actually asking, so the wording and the firing protocol can follow."
- **Level** — **discipline-internal at the component layer** — specifically the MQ2 component within Task-Define's canonical meta-question set (§2.3) and the dispatch-substrate commitment that depends on MQ2's answer (§2.4). Adjacent surface: the explanatory doc `devdocs/what_is_task_define.md` which paraphrases MQ2 in a way the user calls "weird."
- **Observation targets** — list each as a separate item:
  1. **The cognitive question.** What question is MQ2 actually asking the LLM to answer about a task item? Is it (a) a binary "self-contained vs external" verdict, (b) a typed context-need with kind specifier (the mode 6 inquiry's current commitment), (c) a surfacing-directive ("here are the specific things to surface from the project base for this item, framed so /surfacing can align"), or (d) something else?
  2. **The shape of the answer.** Concretely, what does MQ2's per-item answer look like? Examples are needed — e.g., the user's example "*this task already worked on before, it has these artifacts and the current task is fresh start of it*." Is the answer a verdict + kind, or a structured surfacing-frame (subjects/artifacts/relations the surfacer should orient on), or a hybrid?
  3. **The downstream coupling to /surfacing.** What does "full alignment with /surfacing's side" actually require? Does MQ2's answer need to be in a form that maps directly to /surfacing's input contract (territory + goal + relevance bias)? Or does the runner intermediate?
  4. **Selectivity vs blind context-loading.** The user's stated motivation is preventing AI from "blindly loading everything to context" — MQ2's reframing should enable multi-layer relevance discrimination. Does the proposed reframing actually buy that? What's the cognitive mechanism by which a surfacing-directive answer enables selectivity downstream?
  5. **The compatibility check.** The mode 6 inquiry (2026-06-04_14-14) just committed §2.4 to the rule that MQ2's answer carries a context-need verdict ∈ {yes, no, uncertain} plus (when yes) a kind specifier. Is the proposed reframe compatible with that commitment, or does it supersede / refine / extend it?
  6. **The asymmetric-failure principle's applicability.** §4.4 commits "lean to fire" at MQ extensions and "lean to keep-together" at Itemize. For MQ2 specifically, what is the asymmetric failure-cost if MQ2's answer under-specifies (vague verdict) vs over-specifies (premature surfacing-directive that pre-empts /surfacing's job)?
  7. **Identity boundary preservation.** Task-Define's substrate is task-statement + LLM internal cognition only; it does NOT reach for external project state. Does a surfacing-directive answer require the LLM to know project-state in order to answer MQ2, violating the substrate? Or can it be answered purely from internal cognition (the LLM perceives "this kind of task typically needs surfacing of X, Y, Z artifact types" without actually fetching them)?
  8. **The pattern question (specific-vs-pattern, surfaced for completeness).** The user names MQ2 specifically. Should this inquiry also re-examine MQ1 (scope) and MQ3 (intent) under the same "downstream-discipline-aligned framing" lens, or scope strictly to MQ2 and treat the pattern as future work?
  9. **Effect on the explanatory doc.** If MQ2 is reframed, does `devdocs/what_is_task_define.md`'s paraphrase need to change? What does the corrected paraphrase look like?
- **Deliverable shape** — meaning-layer commitment + concrete answer-shape exemplars + downstream-coupling mechanism description + compatibility verdict against the mode 6 commitment + asymmetric-failure verdict + identity-boundary verdict + scope-of-pattern verdict + structural-followup list (what spec amendments + explanatory-doc edits would follow once meaning is settled — NOT the amendments themselves; this inquiry is meaning-layer).

**Question (single statement):** What is MQ2 actually asking the LLM to perceive about a task item — is its substance a binary self-contained/external verdict, a typed context-need with kind specifier (current §2.4 commitment), a surfacing-directive that names specific information-types-to-surface from the project base for downstream /surfacing alignment, or a hybrid — including (a) the concrete shape of MQ2's per-item answer, (b) the mechanism by which that answer enables selectivity and multi-layer relevance discrimination downstream, (c) compatibility / refinement / supersession relation with the mode 6 inquiry's §2.4 commitment, (d) whether answering it in the proposed surfacing-directive form would violate Task-Define's substrate (task-statement + LLM-internal-cognition only), and (e) whether this reframe applies symmetrically to MQ1 and MQ3 or is MQ2-specific?

## Goal

- **Criterion** — four qualities:
  - **Substantive clarity.** The committed answer states explicitly what cognitive question MQ2 IS asking — not in vague terms ("context-need"), but in a form that maps directly to a concrete answer-shape an LLM can produce per item.
  - **Downstream-alignment grounding.** The committed answer makes explicit how MQ2's answer enables /surfacing's downstream alignment. The mechanism — not just the claim — is named.
  - **Substrate-fidelity.** The committed answer respects Task-Define's substrate (task-statement + LLM-internal-cognition only) and does not implicitly require external project-state-reading to answer MQ2.
  - **Compatibility with prior commitments.** The committed answer either preserves the mode 6 §2.4 commitment (verdict ∈ {yes, no, uncertain} + kind specifier) as a sub-case OR explicitly refines/supersedes it with reasoning.
- **Use case** — settle MQ2's meaning so that (a) `cognitive_harness/task-define/references/task-define.md` can be amended at §2.3 (MQ2 wording) and §2.4 (dispatch-substrate's necessary-information-content commitment) to match; (b) `devdocs/what_is_task_define.md` can have its MQ2 paraphrase corrected; (c) any downstream-discipline-alignment claims about Task-Define ↔ /surfacing become precise rather than gestural.
- **Desired outcome** — a meaning-layer commitment on what MQ2 IS, with a concrete answer-shape exemplar, that the user can either approve, push back on with a sharper alternative, or refine into a structural-layer amendment plan as next-step work.
- **What would fail** — a deliverable that:
  - restates MQ2's current wording without resolving the user's "weird/should be like" critique;
  - commits a substance for MQ2 that requires Task-Define to read external project state (violating substrate);
  - commits a substance for MQ2 that pre-empts /surfacing's job (Task-Define commits TO the surfacing rather than perceiving the framing-gap; violates the perception/action split that the mode 6 / dispatch substrate inquiry committed);
  - commits a substance for MQ2 that contradicts the mode 6 §2.4 commitment without explicitly engaging that contradiction;
  - reaches for structural amendments (rewriting spec sections) before the meaning is settled;
  - treats MQ2 as a wording problem rather than a cognitive-question-identity problem.

## Source Input

```text
A n implicit need for external context — does the LLM need to know the project to do this right, or is the statement self-contained?


this is a bit weird, it should be like 

does LLM need to surface specific information from the project base? something like "this task already worked on before, it has these artifacts and the current task is fresh start of it, " this is important because AI shouldnt blindly load everything to context, it should be selective and understand the relevance in multiple layers. Thsi is why task-define's job  is to see correct meta questions which can turn into full alignment in surfacing's side...
```

## Scope Check

Question covers goal. The nine observation targets map to the four goal criteria: substantive clarity covered by targets 1+2; downstream-alignment grounding covered by targets 3+4; substrate-fidelity covered by target 7; compatibility covered by target 5. Asymmetric-failure (target 6), pattern-question (target 8), and explanatory-doc effect (target 9) are extension targets that surface in scope-completeness.

Specific-vs-pattern check: the user's input names MQ2 specifically with a specific proposed reframing. The primary scope is MQ2-specific (the user is pointing at one meta-question, not at the meta-question set in general). The pattern question (does the same reframing lens apply to MQ1 + MQ3?) is surfaced as observation target 8 and explicitly flagged for the inquiry to address by either including it or scoping it as future work — not silently dropped.

## Layer Commitment

**Primary layer: Meaning.** The question targets WHAT MQ2 IS as a cognitive question — its substance, the shape of its answer, the cognitive operation it asks the LLM to perform on a task item. The user's "this is a bit weird, it should be like..." framing is a meaning-layer challenge: the current framing names MQ2 in one substance (binary self-contained/external verdict) and the user is proposing it should name MQ2 in a different substance (surfacing-directive). Once meaning is settled, structural and process work follows.

**Other layers explicitly out of scope:**
- **Structural** — the spec wording at §2.3 (MQ2's stated question) and §2.4 (dispatch substrate's necessary-information-content commitment) is downstream of settling MQ2's meaning. Drop-in amendment text is OUT OF SCOPE for this inquiry; the inquiry will surface what amendments would be needed but not author them.
- **Process** — the per-item firing protocol (Stage 2 of the 4-stage flow), the timing of MQ2 firing first within Stage 2, and the constraint-relation to Rephrase are settled at the process-layer finding (2026-06-04_07-48). The reframing of MQ2's substance does not alter when or how MQ2 fires — only WHAT it perceives.

**Layer ordering rationale:** the substance of MQ2 is the upstream concern; the spec wording and the process timing are downstream consequences. Settling meaning unblocks both downstream layers; settling structural or process first would commit on text or sequence with a still-ambiguous substance underneath.

**Next-layer-inquiry preview (not declared as plan, just noted for transparency):** if this inquiry settles MQ2's meaning in a way that materially refines or supersedes the mode 6 §2.4 commitment, a follow-up structural-layer inquiry to amend `cognitive_harness/task-define/references/task-define.md` §2.3 + §2.4 would be the natural next step — but that is the user's call to schedule, not an obligation of this inquiry.
