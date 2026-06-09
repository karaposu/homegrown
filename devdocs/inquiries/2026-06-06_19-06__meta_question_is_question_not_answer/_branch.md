# Branch: Meta-question is Question, Not Answer — Meaning-Layer Re-examination

## Question

- **Subject:** The meaning-layer essence of the Meta-question operation in `articulate_simple`. The prior meaning-layer finding at `devdocs/inquiries/2026-06-06_18-21__articulate_simple_output_md_meaning/finding.md` committed in its CORE-content spec that each MQ entry IS a perception/classification/inference — i.e., that MQ outputs are ANSWERS. The user has surfaced a deeper meaning-layer claim: a Meta-question is, literally, a QUESTION; the question is mandatory in the output; the answer is permissive (hypothetical), not mandatory; the operation's purpose is to SEED downstream operations (Substrate-MQ → `/surfacing`; Intra-articulate-MQ → Rephrase + MultiDepth), not to ANSWER. This inquiry re-examines that claim.

- **Action:** synthesize-with-correction (the prior finding committed an "answer-as-primary-output" framing; this inquiry tests the user's "question-as-primary-output, answer-as-permissive-hypothesis" reframing, and decides whether the prior finding's CORE-content commitment needs revision).

- **Level:** discipline-operation level (what does the Meta-question operation EMIT at meaning layer?).

- **Observation targets** (the user's input contains three distinct claims — each preserved as its own observation target):
  1. **Is the QUESTION the primary load-bearing emission of MQ?** Per the user: "meta-question is a question" — the question text itself is the substantive output. The explainer doc at §2.2.1-§2.2.4 defines each MQ by the question it asks (e.g., MQ1: *"What's the scope of this task?"*). Is the question or the answer the primary emission at meaning layer?
  2. **Is the answer permissive (non-mandatory) rather than mandatory?** Per the user: "answer is not mandatory as the question." A hypothesized answer may accompany the question, but the question is the mandatory part. This connects to PERMISSION-not-CONSTRAINT from `devdocs/inquiries/2026-06-06_11-16__mqs_as_seed_qa_overreach_two_pass/finding.md`.
  3. **Is the function of MQ "seeding" the downstream operation rather than "answering"?** Per the user: "meta-question is about seeding the surfacing... not about answering." This connects to MQ2's role as preparation substrate for `/surfacing` per `devdocs/inquiries/2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/finding.md` and to the Substrate-MQ vs Intra-articulate-MQ axis from `devdocs/inquiries/2026-06-06_11-16__mqs_as_seed_qa_overreach_two_pass/finding.md`.

- **Deliverable shape:** meaning-layer decision with structural justification + an explicit verdict on whether the prior `2026-06-06_18-21` finding's CORE-content commitment ("each MQ entry IS a perception/answer") needs revision — and if so, what the corrected commitment should be. The verdict must be ONE of: (a) reaffirm prior finding (user's framing is wrong on specific structural grounds), (b) refine prior finding (the prior is partly right; question-mandatory + answer-permissive is the correct nuance), or (c) replace prior finding (the user's framing is right; questions are the emission, answers are downstream).

**Question statement:** Given the prior meaning-layer finding's commitment that each per-item bundle's MQ entry IS an answer (a scope-axis classification for MQ1, a preparation substrate for MQ2, an intent inference for MQ3, an exclusion enumeration or empty for MQ4), and given the user's reframing that Meta-question is fundamentally a *question* whose mandatory emission is the question text (with the answer being a permissive hypothesis that seeds downstream operations), is the question or the answer the primary load-bearing emission of MQ at meaning layer; is the answer permissive rather than mandatory; is the function of MQ "seeding" rather than "answering"; and does the prior finding's CORE-content commitment need revision?

## Goal

- **Criterion:** A confident meaning-layer verdict (REAFFIRM / REFINE / REPLACE the prior finding's CORE-content commitment) with structural justification grounded in the discipline-explainer doc's identity commitments + the prior finding's inheritances + the user's stated argument. The verdict must engage the user's argument directly, not dismiss it with the lightweight stance or convention.
- **Use case:** Apply the verdict's commitment to the prior `2026-06-06_18-21` finding's CORE-content spec (and to the example output's MQ entries) so the discipline's emission shape is correctly represented.
- **Desired outcome:** A clear principle: "an MQ entry's mandatory content is the question text instantiated for this task; the answer (when emitted) is a permissive hypothesis that seeds downstream consumption" — OR a clearly reasoned rejection of that principle with structural grounds.
- **What would fail:**
  (a) listing options without producing a verdict (this is a decide-question, not a survey-question);
  (b) defaulting to the lightweight stance without engaging the user's "seed-not-answer" claim on its own terms;
  (c) missing the Substrate-MQ vs Intra-articulate-MQ distinction (Substrate-MQs seed `/surfacing`; Intra-articulate-MQs seed Rephrase/MultiDepth — the seeding-claim applies most cleanly to Substrate-MQs; the verdict must handle both classes);
  (d) treating the user's framing as a structural-layer rendering choice (it is a meaning-layer essence claim — what the MQ operation IS as a cognitive operation);
  (e) producing a verdict without explicitly testing it against MQ-aggregate-resolution (MQA reconciles MQ-answers — if MQ emits only questions, does MQA still make sense?);
  (f) producing a verdict without testing it against Substrate-MQ overreach risk from `2026-06-06_11-16` (the overreach problem the prior inquiry addressed depends on whether MQ emits answers; if MQ emits only questions, does overreach disappear?).

## Source Input

```text
u said 

MQ4 (Boundary / exclusion): (empty — no extrinsic exclusion declarations perceivable in cold-context session)                     

  why metaquestions doesnt include the question??

[... my prior response presenting Options A/B/C as a structural-layer rendering choice ...]

but do you understand metaquestion is a question... we must put the question there , answer is not mandatory as the question. because meta question is about seeding the surfacing... not about answering ...
```

## Scope Check

Question covers goal. The 3 observation targets enumerate the three distinct claims the user surfaced ("MQ is a question" / "answer not mandatory" / "MQ seeds, doesn't answer") — each preserved per the transcription-audit fail-safe trigger (the user's input contains "because" connecting two clauses, plus multi-claim semantic load that must not be compressed). Specific-vs-pattern check: the user's claim is about MQs generally (the operation's essence); the verdict applies to all four base MQs + extensions + MQA implications, not just the MQ4 example that triggered the discussion.

## Layer Commitment

**Primary layer: MEANING.** The user is questioning what the Meta-question operation IS as a cognitive operation — its essence (question? answer? seed?). This is not about how the doc's sections are organized (structural) or how the operation runs at runtime (process); it is about WHAT MQ EMITS at the meaning layer. The verdict will determine whether the operation's substantive output is the question text, the answer text, or some combination — and that determines what the output md must carry.

**Out of scope:**
- **Structural** — specific field names ("question:" vs "Q:"), markdown rendering choices, schema syntax. The structural rendering is downstream of settling whether the question is mandatory content at meaning layer. The Options A/B/C framing from the prior response treated this as structural — which was insufficient because the user's claim is at meaning layer.
- **Process** — when the question is emitted, how the LLM constructs the question text, etc. Process layer is downstream.

## Synthesis Trigger

This inquiry **SYNTHESIZES** commitments from 5 priors and tests them against the user's reframing. Each prior carries claims this inquiry inherits; CONCLUDE will require an `## Inherited Commitments Re-test` section per the protocol.

- `devdocs/inquiries/2026-06-06_18-21__articulate_simple_output_md_meaning/finding.md` — the JUST-COMPLETED meaning-layer finding on the output md. Commits that each per-item bundle's MQ entries are PERCEPTIONS/ANSWERS (MQ1 = scope-axis classification; MQ2 = preparation substrate; MQ3 = intent inference; MQ4 = exclusion enumeration or empty). The user's reframing tests this CORE-content commitment directly. The verdict may need to REVISE this prior.

- `devdocs/how_articulate_simple_should_be.md` — the discipline-explainer doc. §2.2 defines Meta-question; §2.2.1-§2.2.4 each frame an MQ by stating the QUESTION it asks (italicized in the doc). The doc's identity commitments + the question-italicized framing are direct evidence on whether the question is part of MQ's identity.

- `devdocs/inquiries/2026-06-06_11-16__mqs_as_seed_qa_overreach_two_pass/finding.md` — Substrate-MQ vs Intra-articulate-MQ axis + PERMISSION-not-CONSTRAINT framing. The user's claim ("MQ seeds /surfacing, doesn't answer") cleanly maps onto the Substrate-MQ side of this axis. PERMISSION-not-CONSTRAINT directly supports "answer is permissive, not mandatory."

- `devdocs/inquiries/2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/finding.md` — MQ2 as preparation substrate for `/surfacing` + always-invoke premise. Direct evidence that MQ2's role is SEEDING `/surfacing`, supporting the user's claim about Substrate-MQs.

- `devdocs/inquiries/2026-06-05_12-00__mq_aggregate_contradiction_resolution/finding.md` — MQ-aggregate-resolution reconciles MQ-answers when they contradict. This commitment is in tension with the user's "question, not answer" framing: if MQs emit only questions, what does MQA reconcile? The verdict must address this directly.

The verdict's correctness depends on whether it engages each prior's commitment AS the user's reframing affects it — not just citing the priors.
