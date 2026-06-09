# Branch: Meta-ambiguity vs Meta-question — Meaning-Layer Reframe Inquiry

## Question

- **Subject:** The cognitive operation currently called **Meta-question** (MQ) in `articulate_simple` — committed across nine inquiries from `2026-06-03_15-39` (foundation) through `2026-06-06_19-06` (just-completed Q-mandatory + A-permissive entry shape). The doc at `devdocs/how_articulate_simple_should_be.md` §2.2 currently frames MQ as "four perceptions per item plus an aggregation step," where each perception is a structurally-typed question (MQ1 Structural / scope; MQ2 Relational / context-need; MQ3 Interpretive / intent; MQ4 Boundary / exclusion). The user proposes a meaning-layer reframe: replace "Meta-questions" with **Meta-ambiguities** — instead of asking 4 structural questions and emitting permissive answers, the operation would **identify the strong meta-ambiguities** in the task statement, classified by the same four (or extensible) types (structural ambiguities / relational ambiguities / intent ambiguities / boundary ambiguities).

- **Action:** **decide / synthesize-with-correction** — produce a confident verdict (REAFFIRM / REFINE / REPLACE) on whether the Meta-ambiguity framing is structurally better at the meaning layer, engaging the user's intuition directly and re-testing against the nine prior commitments.

- **Level:** discipline-operation level (MQ as one of the 5 cognitive operations within articulate_simple); the proposal redefines what the operation IS conceptually.

- **Observation targets** (the user's input contained three distinct claims joined by "instead of X, we can actually Y" + "do you think this is better" + "this is a better fit" — each preserved as its own observation target):
  1. **Is the underlying cognitive operation better described as "asking a question + emitting permissive answer" or "identifying an ambiguity + emitting list of ambiguities"?** Structurally, an ambiguity is a perceived openness in the task statement (the task does not commit to scope / context-need / intent / boundaries on its own); the LLM identifies what's open rather than committing to a confident-or-hedged interpretation. This contrasts with the current MQ shape (per the just-prior 19-06 finding: specialized question + permissive answer).
  2. **Does Meta-ambiguity better serve the "seeding /surfacing" function the user has emphasized?** From `2026-06-06_11-16`'s Substrate-MQ framing and `2026-06-06_19-06`'s asymmetric-naming argument, the user has consistently emphasized that Substrate-MQs (MQ2 + MQ4) seed `/surfacing` rather than answer for it. An identified ambiguity is structurally closer to a "seed for /surfacing to resolve" than a hedged answer is.
  3. **Does Meta-ambiguity preserve the inherited commitments** — Substrate-vs-Intra axis, PERMISSION-not-CONSTRAINT, MQA reconciliation, Q-mandatory + A-permissive entry shape, the 4-type taxonomy, bounded-extensibility? Or does it require structural revision of those commitments?

- **Deliverable shape:** a meaning-layer verdict (REAFFIRM / REFINE / REPLACE) on the proposed reframe, with structural justification grounded in (a) the user's stated intuition; (b) the discipline-explainer doc's commitments at §2.2 (and the 9 prior inquiries it inherits); (c) downstream-consumer needs (the runner formulating /surfacing's input; Rephrase + MultiDepth consuming intra-articulate constraints). If REFINE or REPLACE, name the specific revisions required.

**Question statement:** Given that the discipline-explainer doc at `devdocs/how_articulate_simple_should_be.md` §2.2 currently commits the Meta-question (MQ) operation across four structurally-typed perception-questions (MQ1 Structural / MQ2 Relational / MQ3 Interpretive / MQ4 Boundary) — committed through nine prior findings and most recently REFINED at `2026-06-06_19-06` to the Q-mandatory + A-permissive entry shape — and given the user's proposal that the operation be reframed as **identifying meta-ambiguities** (structural ambiguities / relational ambiguities / intent ambiguities / boundary ambiguities) rather than asking meta-questions, is the Meta-ambiguity framing a structurally better fit at the meaning layer; does it better serve the "seeding /surfacing" function the user has emphasized; does it preserve or require revision of the nine prior commitments — and does the doc's commitment need REAFFIRM (Meta-question wins; reframe rejected with reason), REFINE (some hybrid — perhaps ambiguity-identification at Substrate-MQs; question-answering at Intra-articulate-MQs; or some other partial reframe), or REPLACE (Meta-ambiguity wins; substantial restructure needed of §2.2 and §13 examples)?

## Goal

- **Criterion:** A confident verdict (REAFFIRM / REFINE / REPLACE) with structural justification grounded in the doc commitments + 9 priors + the user's intuition, engaging the user's "feels like a better fit" argument directly rather than dismissing it with the existing PERMISSION-not-CONSTRAINT framework alone.
- **Use case:** Settle whether the MQ framework should be renamed/reframed; if so, what specific revisions follow.
- **Desired outcome:** A clear principle: either (a) "Meta-question is structurally correct because [reason]; the user's intuition about ambiguity is already accommodated via PERMISSION-not-CONSTRAINT" (REAFFIRM), or (b) "Meta-ambiguity is structurally correct for [Substrate-MQs / all MQs / specific cases]; the framework needs [specific revision]" (REFINE or REPLACE).
- **What would fail:**
  (a) dismissing the user's intuition without engaging it on structural grounds (defaulting to "PERMISSION-not-CONSTRAINT already covers this" without testing whether ambiguity-framing is actually different);
  (b) accepting the reframe wholesale without testing against the 9 prior commitments (especially the just-prior 19-06 Q-mandatory + A-permissive shape, which is fresh and has explicit verdicts);
  (c) treating this as a renaming-only question (the user's proposal changes the operation's cognitive identity, not just its label);
  (d) missing the Substrate-vs-Intra heterogeneity (Substrate-MQs may benefit from ambiguity-framing in ways Intra-articulate-MQs do not — the verdict must address this asymmetry);
  (e) producing a verdict without testing MQA's role under ambiguity-framing (MQA reconciles contradictions among MQ outputs; what does MQA reconcile if outputs are ambiguity-lists?);
  (f) treating "ambiguity" as identical to "uncertainty" — they are not the same; uncertainty is about confidence in an answer, ambiguity is about openness in the task statement itself.

## Source Input

```text
i have another take on MQs i think instead of meta questions, we can actually list the strong meta  ambiguities? do you think this is better framing? structural ambiguities, relational , intent ambiguities etc..


i feel like this is a better fit

lets dive deep (meaing layer)
```

## Scope Check

Question covers goal. The 3 observation targets enumerate the user's three distinct claims (the reframe proposal + the "feels better" intuition + the request to investigate). Specific-vs-pattern check: the user's proposal is about the MQ operation as a whole — the verdict applies uniformly across MQ1/MQ2/MQ3/MQ4 (and possibly extensions and MQA), subject to the Substrate-vs-Intra heterogeneity test in observation target 3.

## Layer Commitment

**Primary layer: MEANING.** The user explicitly said "(meaning layer)" at the end. The proposal redefines what the MQ operation IS as a cognitive operation — whether the operation's essence is "asking a question + emitting permissive answer" or "identifying an ambiguity + emitting list of ambiguities." This is the same kind of meaning-layer redefinition the prior `2026-06-06_19-06` inquiry handled, but at a deeper level (the prior settled the Q+A entry shape; this proposal questions whether the operation's essence is Q-shaped at all).

**Out of scope:**
- **Structural** — section organization of §2.2, schema syntax, specific field names for the output md. Settled-or-deferred per Layer Commitment; out for this inquiry.
- **Process** — when the operation runs, how the LLM constructs the ambiguity list, runtime gates. Out per Layer Commitment.

## Synthesis Trigger

This inquiry **SYNTHESIZES** commitments from nine prior outputs and tests them against the proposed reframe. Each prior carries claims this inquiry will inherit; CONCLUDE will require an `## Inherited Commitments Re-test` section.

- `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` — the foundation; commits the 5 operations + 4-stage flow + the 3 base MQs (MQ1 Structural / MQ2 Relational / MQ3 Interpretive).
- `devdocs/inquiries/2026-06-04_07-48__task_define_process_layer/finding.md` — 3-phase runtime shape + per-operation firing-format + LAYER 1 / LAYER 2 failure-mode framework.
- `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md` — MQ2's three-element substance + hypothetical-relational mode.
- `devdocs/inquiries/2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/finding.md` — MQ2 as preparation substrate for `/surfacing` + always-invoke premise.
- `devdocs/inquiries/2026-06-05_10-03__meta_question_taxonomy_categories/finding.md` — 3-type taxonomy foundation (Structural / Relational / Interpretive).
- `devdocs/inquiries/2026-06-05_12-00__mq_aggregate_contradiction_resolution/finding.md` — MQ-aggregate-resolution as the final internal step reconciling cross-MQ contradictions.
- `devdocs/inquiries/2026-06-06_10-37__articulate_scope_boundary_perception/finding.md` — MQ4 Boundary added; 4-type taxonomy; intrinsic-vs-extrinsic exclusion routing; cold-empty-valid rule.
- `devdocs/inquiries/2026-06-06_11-16__mqs_as_seed_qa_overreach_two_pass/finding.md` — Substrate-MQ vs Intra-articulate-MQ orthogonal consumer axis + PERMISSION-not-CONSTRAINT framing.
- `devdocs/inquiries/2026-06-06_19-06__meta_question_is_question_not_answer/finding.md` — the just-completed REFINE verdict: each MQ entry carries the specialized question (mandatory) + the permissive answer (when emitted; may be explicit-empty / hedged / confident).

The verdict's correctness depends on engaging each prior's commitment as the proposed Meta-ambiguity reframe affects it — not just citing the priors.
