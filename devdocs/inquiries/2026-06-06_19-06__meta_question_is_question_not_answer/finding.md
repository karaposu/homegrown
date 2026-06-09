---
status: active
model: claude-opus-4-7[1m]
effort: max
refines: devdocs/inquiries/2026-06-06_18-21__articulate_simple_output_md_meaning/finding.md
---
# Finding: Meta-question Is Question, Not Answer — Meaning-Layer Re-examination

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-06-06_18-21__articulate_simple_output_md_meaning/finding.md`

**Revision trigger:** User correction — after the prior finding's example output rendered each Meta-question entry as label + answer only (e.g., *"MQ4 (Boundary / exclusion): (empty — no extrinsic exclusion declarations perceivable in cold-context session)"*), the user surfaced a deeper meaning-layer point: "metaquestion is a question... we must put the question there, answer is not mandatory as the question. because meta question is about seeding the surfacing... not about answering." The prior finding had committed in its CORE-content spec that each MQ entry IS a perception/answer (scope-axis classification for MQ1, preparation substrate for MQ2, intent inference for MQ3, exclusion enumeration for MQ4) — silently dropping the question text from each entry's content. This inquiry tests that gap.

**What's preserved:**
- Three-layer model (ANCHOR / ENVELOPE / CORE)
- The list of CORE per-item content kinds (ten entries — item text, MQ1, MQ2, MQ3, MQ4, MQ extensions, MQA, Deconstruct, MultiDepth, Rephrase)
- Empty-rendering as first-class content principle
- The five negative-content classes (substrate-violations / adjudications / cross-item-relational / fidelity-verdicts / ecosystem-knowledge)
- The four over-elaboration rejections (reader-summary / inheritance-trace / provenance metadata / frontier flags)
- The MQA verdict label as required parseable content (B5 IN)
- The load-bearing element test as primary discrimination
- The 4-reader operationalization (runner / downstream-discipline / user / audit)
- The layer-separation meta-commitment
- Both meta-patterns from the prior finding (meaning-layer-as-discrimination-principle-set; empty-as-result-not-as-narration)

**What's changed:**
- **CORE per-item entry content commitment for each Meta-question entry (MQ1, MQ2, MQ3, MQ4, MQ extensions, MQA)**: prior text "MQ1 is a scope-axis classification of the item" now reads as "MQ1's content is the specialized question (mandatory) + the scope-axis classification (permissive — when the LLM has perception to share)." Same pattern for MQ2/MQ3/MQ4/extensions/MQA.

**What's new:**
- The S3 shape commitment: **Question-mandatory + Answer-permissive** for every Meta-question entry.
- The specialized-question convention: each MQ entry carries the doc's italicized question from §2.2.1-§2.2.4 (or §2.2.6 for MQA's implicit "do the MQs cohere?" form) instantiated for the specific task at hand.
- Five independent structural justifications for the shape (one new meta-pattern emerges from the first: asymmetric-naming-implies-output-identity).

**Migration:** the prior finding's worked example output renders each MQ entry as label + answer only. Under this finding's REFINE-verdict, each MQ entry's rendering would include the specialized question text. Specific rendering choices (italics vs Q: prefix vs heading-style; position before vs after answer; field-name conventions) remain structural-layer concerns not pre-decided here. The example output later in this finding shows ONE illustrative rendering; structural-layer authoring downstream is free to choose otherwise.

## Question

Given that the prior meaning-layer finding at `devdocs/inquiries/2026-06-06_18-21__articulate_simple_output_md_meaning/finding.md` committed in its CORE-content spec that each Meta-question (MQ) entry in the per-item bundle IS a perception/answer (a scope-axis classification for MQ1, a preparation substrate for MQ2, an intent inference for MQ3, an exclusion enumeration or empty for MQ4), and given the user's reframing that **a Meta-question is, literally, a *question***; the question text is the mandatory part of the entry; the answer is permissive (not mandatory); and the function of MQ is *seeding* downstream operations (Substrate-MQ → `/surfacing`; Intra-articulate-MQ → Rephrase + MultiDepth) rather than *answering* — is the question or the answer the primary load-bearing emission of MQ at the meaning layer; is the answer permissive (PERMISSIVE) rather than absent (OPTIONAL); is the function "seeding" or "answering"; and does the prior finding's CORE-content commitment need revision?

**Goal**: produce a confident verdict (REAFFIRM / REFINE / REPLACE the prior finding's CORE-content commitment) with structural justification grounded in the discipline-explainer doc at `devdocs/how_articulate_simple_should_be.md` (§2.2's identity commitments) and in the prior inheritances (Substrate-vs-Intra from `2026-06-06_11-16`, preparation substrate from `2026-06-04_21-58`, MQA reconciliation from `2026-06-05_12-00`, and the just-prior 18-21 finding) — engaging the user's argument directly rather than dismissing it with the lightweight stance.

## Finding Summary

- **The user is right.** Meta-question is, structurally, a *question*. The prior finding's CORE-content commitment has a real meaning-layer gap that needs correction. The verdict is **REFINE** (not REAFFIRM, not REPLACE).

- **The shape is S3: Question-mandatory + Answer-permissive.** Each MQ entry in the per-item bundle carries two components: (a) the **specialized question** — the doc's italicized question text from §2.2.1-§2.2.4 (or §2.2.6 for MQA's implicit form) instantiated for the specific task at hand; this is MANDATORY; (b) the **permissive answer** — the LLM's hypothesized perception/inference/classification/substrate/enumeration; may be explicit-empty when no perception is available (e.g., MQ4 cold-context), may be hedged per PERMISSION-not-CONSTRAINT (e.g., MQ2 hypothetical-relational mode), may be confident when perception is clear. Never silent-absent.

- **Five independent structural justifications converge on S3.** (1) **Asymmetric naming** — Meta-QUESTION is a categorial noun (named by what the operation IS); sibling cognitive disciplines (sense-making, surfacing, critique, innovation) are deverbal nouns or gerunds (named by what the operation DOES). The categorial-vs-deverbal asymmetry signals that Meta-question's output identity uniquely includes its question. (2) **MQA reconciliation test** — the Meta-question aggregate-resolution step exists to reconcile MQ-output contradictions; this presupposes MQs emit answer-shaped content that CAN contradict (two questions cannot contradict). The 11-16 overreach problem similarly presupposes answers. Question-only framing eliminates both, signaling that answers are real and load-bearing. (3) **PERMISSION-not-CONSTRAINT inheritance from `2026-06-06_11-16`** — answers are permitted, not required; this directly supports the permissive component of S3. (4) **Empty-as-content inheritance from `2026-06-06_18-21`** — explicit-empty IS content, never silent-absent; this supports the answer-field-always-present component of S3. (5) **User-as-reader perspective** — the 4-reader operationalization from the prior 18-21 finding includes user-as-reader and audit-reader; without the question text, both readers must consult the spec to decode labels; the specialized question makes the bundle self-contained.

- **The user's "answer is not mandatory" claim resolves to WEAK reading (PERMISSIVE, not OPTIONAL)**. Field is always present; content is permissive. Strong reading (field absent) would break the empty-as-content inheritance (which requires the field present to carry explicit-empty as signal) and the MQA reconciliation requirement (which needs answer-shaped content to reconcile). The weak reading honors the user's claim while preserving prior inheritances.

- **The shape applies UNIFORMLY across MQ1, MQ2, MQ3, MQ4, MQ extensions, and MQA**. Heterogeneous-by-class (Substrate-MQs use Q+A; Intra-articulate-MQs use A-only) was considered and rejected — the asymmetric naming applies to all four base MQs + extensions equally; consumption pattern (Substrate-MQs seed `/surfacing`; Intra-articulate-MQs constrain Rephrase + MultiDepth) is orthogonal to output shape. MQA's implicit question ("do the MQs cohere for this task?") earns inclusion in the uniform shape by the same logic.

- **One new reusable meta-pattern surfaced**: **asymmetric-naming-implies-output-identity**. When a discipline's name is structurally asymmetric to its siblings — specifically, when sibling names are deverbal nouns / gerunds (named by what the operation does) and one discipline's name is a categorial noun (named by what the operation IS) — the categorial-named discipline's output identity uniquely includes that category. Future audits on other discipline-output meaning-layer questions can apply this pattern when naming asymmetry of this specific kind is observable.

- **The verdict requires specific revisions to the prior `2026-06-06_18-21` finding** — its CORE-content section's per-MQ-entry definitions (each currently says "MQ_n IS an [answer-category]") and its worked example output's per-MQ-entry rendering both need updating to reflect the S3 shape. The revisions are bounded (surgical text edits at specific sections); the prior's other commitments (three-layer model, five negative-content classes, four over-elaboration rejections, load-bearing test, four-reader operationalization, B5 MQA-verdict-label IN, two existing meta-patterns, layer-separation meta-commitment) all hold without revision.

## Finding

A small piece of context for the reader: this finding operates on `devdocs/inquiries/2026-06-06_18-21__articulate_simple_output_md_meaning/finding.md` (referred to throughout as "the prior 18-21 finding"), which was produced earlier in this same session as a meaning-layer spec for the output md that `articulate_simple` should produce. The user, after seeing the prior finding's worked example, surfaced a meaning-layer claim that the prior finding had silently dropped: a Meta-question, structurally, is a *question* — not just an operation that produces an answer. The user's claim is grounded in the discipline-explainer doc at `devdocs/how_articulate_simple_should_be.md` §2.2.1-§2.2.4, where each Meta-question is defined by the question it asks (presented in italicized form) — and the asymmetric naming of "Meta-question" relative to sibling cognitive disciplines.

This finding tests the user's claim against the prior 18-21 finding's CORE-content commitment and four deeper priors that established related commitments. It produces a confident verdict: the user is right; the prior finding has a real gap; the verdict is **REFINE**.

### The user is right — and the structural argument is concrete

The user's claim has structural foundations the prior 18-21 finding silently overlooked. Three foundations, working together, force the verdict toward REFINE + S3:

**Foundation 1: The asymmetric naming.** The cognitive disciplines in `cognitive_harness/` follow a naming pattern. Each is named by what it DOES — sense-MAKING (the act of making sense), SURFACING (the act of surfacing items), CRITIQUE (the act of critiquing, deverbal noun), INNOVATION (the act of innovating, deverbal noun). These are **deverbal nouns or gerunds** — names derived from the action the operation performs.

Meta-question is named differently. It's a **categorial noun** — it names the operation by what the operation IS (a question, specifically a meta one). This categorial-vs-deverbal asymmetry is the structural signal: when the operation is named by its category, the operation's output identity uniquely includes that category. The output of Meta-question is a question. The output of sense-making is sense (made), the output of surfacing is surfaced items, the output of critique is verdicts — these are results-of-action. The output of Meta-question is the question (instantiated for the task) plus whatever the operation perceives as a permissive answer.

A precise statement: sibling cognitive disciplines emit results-of-action (because their names ARE results-of-action). Meta-question emits the category (its own identity) plus permissive results-of-perception (because its name is categorial). The naming difference IS the output-identity difference.

**Foundation 2: The italicized question presentation in the doc.** §2.2.1 begins: *"MQ1 asks: 'What's the scope of this task — time-horizon, conceptual, project, feature, cross-cutting, or other?'"*. §2.2.2 begins: *"MQ2 asks: 'Does this item require external context?...'"*. §2.2.3, §2.2.4 follow the same pattern. The question is italicized and treated as part of each MQ's identity-definition. The doc could have begun §2.2.1 with "MQ1 produces a scope-axis classification" — but it begins with the question. The presentation choice is consistent across all four base MQs; the question is structurally constitutive.

**Foundation 3: The MQA reconciliation test eliminates question-only.** The Meta-question aggregate-resolution operation at §2.2.6 reconciles MQ outputs that contradict. Two questions cannot contradict (they merely ask different things); contradiction requires assertions or answer-shaped commitments. The worked example at §2.2.6 (the from-scratch case where MQ2's default "yes need context, kinds = [prior X]" contradicts MQ3's "intent = greenfield") explicitly shows MQs emitting substantive assertions that disagree. If MQs emitted only questions, MQA would have nothing to reconcile, and the from-scratch case would be unrepresentable.

The 11-16 overreach problem (Substrate-MQs may emit confident answers that turn out wrong at warm context) similarly presupposes MQs emit answers. Eliminating answers would eliminate the problem the prior inquiry solved — strong signal that the answer is real, not pure decoration. PERMISSION-not-CONSTRAINT was the mitigation; it would have nothing to mitigate if MQs were question-only.

These three foundations together establish: the question is real (Foundations 1 and 2), the answer is also real (Foundation 3), and the answer is permissive (the 11-16 PERMISSION mitigation is structurally inherited).

### The verdict: REFINE the prior 18-21 finding

REFINE is the structurally-right verdict because the user's pushback was on one specific commitment (the prior finding's CORE-content section's per-MQ-entry definitions, which said "MQ_n IS an [answer-category]" — silently dropping the question text). The prior finding's other commitments — the three-layer model (ANCHOR / ENVELOPE / CORE), the five negative-content classes, the four over-elaboration rejections, the load-bearing element test + 4-reader operationalization, the B5 MQA-verdict-label-IN verdict, the two meta-patterns, the layer-separation meta-commitment — were not under challenge and remain sound.

**REAFFIRM** was rejected because it would leave the user's correctly-identified gap and continue silently dropping the question text from MQ entry definitions. **REPLACE** was rejected because it would invalidate the prior finding's still-sound other commitments. **REFINE** surgically updates the per-MQ-entry content commitment while preserving the rest.

### The shape: S3 — Question-mandatory + Answer-permissive

The S3 shape commits each MQ entry (MQ1, MQ2, MQ3, MQ4, MQ extensions when fired, and MQA) to carry two components:

**The specialized question (MANDATORY).** The doc's italicized question text from §2.2.1-§2.2.4 (or §2.2.6 for MQA), instantiated for the specific task at hand. For an articulation of "improve the onboarding flow for new users," MQ1's specialized question is *"What's the scope of 'improve the onboarding flow for new users' — time-horizon, conceptual, project, feature, cross-cutting, or other?"*. The specialization is what makes the question audit-readable without requiring spec lookup. The question is always emitted; it is the operation-identity emission.

**The permissive answer (PERMISSIVE).** The LLM's hypothesized perception when one exists. May be explicit-empty (e.g., MQ4 in a cold-context invocation with no extrinsic exclusion declarations visible). May be hedged per PERMISSION-not-CONSTRAINT (e.g., MQ2's hypothetical-relational mode at cold context: *"tasks of this kind typically have these artifacts available; if so, they would bear on the framing"*). May be confident when perception is clear (e.g., MQ1's scope-axis classification when the task domain is recognizable). The answer is permitted, not mandated to manufacture confidence the LLM doesn't have. It is never silent-absent — the empty-as-content principle from the prior 18-21 finding requires the field present to carry explicit-empty as a signal.

A per-MQ confidence stamp (HIGH / MED / LOW) appears where confidence is non-trivial, parallel to the prior finding's commitment.

### Reading-resolution: PERMISSIVE not OPTIONAL

The user said "answer is not mandatory." This has two readings:
- **Strong (OPTIONAL)**: the answer field is absent from the bundle entry entirely
- **Weak (PERMISSIVE)**: the answer field is present in the bundle entry; the content is permissive (may be empty / hedged / confident)

The weak reading resolves the user's claim while preserving two prior commitments:
- The MQA reconciliation step at §2.2.6 requires answer-shaped content to reconcile — strong reading would break MQA
- The empty-as-content principle from prior 18-21 requires the field present to carry explicit-empty as a load-bearing signal (e.g., empty MQ4 in cold context tells the runner that `/surfacing`'s territory has no extrinsic exclusions to apply) — strong reading would break this

The weak reading is structurally necessary; the strong reading is not what the user's claim is asking for when read in light of the surrounding inheritances.

### Uniformity: one shape across all MQ operations

The S3 shape applies uniformly to MQ1, MQ2, MQ3, MQ4, MQ extensions (when fired per §2.2.5), and MQA.

A heterogeneous alternative was considered — Substrate-MQs (MQ2 + MQ4 per the §2.2.7 Substrate-vs-Intra axis) might use S3 because they seed `/surfacing` (the question-as-seed is most natural for them), while Intra-articulate-MQs (MQ1 + MQ3) might use S1 (answer-only) because they constrain Rephrase + MultiDepth (the answer-as-constraint is most natural for them). Rejected: the asymmetric naming applies to all four base MQs equally; all four are Meta-questions; their output-identity is question-inclusive regardless of downstream consumption pattern. Under S3 uniform shape, Intra-articulate-MQs' downstream constraints (e.g., Rephrase reading MQ1's classification) read the permissive answer; the specialized question is supplementary content serving user-reader and audit-reader. No conflict.

MQA earns inclusion in the uniform shape by the same logic. MQA's implicit question is *"Do the meta-question perceptions for this task cohere? If not, what reconciles them?"* — specialized to the task. MQA's answer is the verdict label (ALIGNED / CONTRADICTION-reconciled / IRREDUCIBLE-TENSION) + reconciliation-content, as committed by the prior 18-21 finding's B5 boundary IN verdict.

### How the S3 shape interacts with downstream consumption (Substrate vs Intra)

The user's "seeding /surfacing" rationale is structurally accurate for Substrate-MQs and reframable but not literal for Intra-articulate-MQs:

- **Substrate-MQs (MQ2 + MQ4)**: under S3, the runner reads both the specialized question and the permissive answer to formulate `/surfacing`'s input (purpose + territory + bias). The question seeds the inquiry (it asks the runner: "is context-need a question here?" "are there exclusions?"); the permissive answer hypothesizes the substrate (kinds-plural, stance, enumerated exclusions). The runner formulates `/surfacing`'s input using both. The user's "seeding" claim applies cleanly here.

- **Intra-articulate-MQs (MQ1 + MQ3)**: under S3, Rephrase + MultiDepth read the permissive answer (scope-axis classification, intent inference) as constraint. The specialized question is supplementary content for user-reader and audit-reader. The user's "seeding" claim does NOT literally apply here (Rephrase doesn't go investigate scope further; it uses the answer as a fixed constraint) — but the output SHAPE (question + answer) is independent of downstream consumption pattern.

This downstream-consumption asymmetry is fully captured by the prior 11-16 finding's Substrate-vs-Intra axis. This finding's S3 verdict adds a per-MQ output-shape commitment (uniform) on top of that consumption-axis (heterogeneous).

## Inherited Commitments Re-test

The branch declared a Synthesis Trigger inheriting commitments from five prior outputs. Each is re-tested at this finding's verdict.

**Commitment 1: Prior `2026-06-06_18-21` finding's CORE-content commitment** (each MQ entry IS a perception/answer)
- **Source:** `devdocs/inquiries/2026-06-06_18-21__articulate_simple_output_md_meaning/finding.md` § Finding
- **Re-test status:** RE-TESTED — **REFINED**
- **Evidence:** the per-MQ entry definitions ("MQ1 IS a scope-axis classification" etc.) silently dropped the question text from the entry's content. This finding's S3 verdict restores the question text as mandatory content. The prior finding's other commitments (three-layer model, five negative-content classes, four over-elaboration rejections, load-bearing test + 4-reader operationalization, B5 IN, two meta-patterns, layer-separation meta-commitment) hold without revision.

**Commitment 2: Prior `2026-06-06_11-16` finding's Substrate-MQ vs Intra-articulate-MQ axis + PERMISSION-not-CONSTRAINT framing**
- **Source:** `devdocs/inquiries/2026-06-06_11-16__mqs_as_seed_qa_overreach_two_pass/finding.md`
- **Re-test status:** RE-TESTED — **STANDS (EXTENDED)**
- **Evidence:** Substrate-vs-Intra axis is orthogonal to this finding's output-shape commitment (consumption pattern is independent of shape). The PERMISSION-not-CONSTRAINT framing is directly inherited and applied to the answer-permissive component of S3. This finding EXTENDS PERMISSION from the cold-context MQ2/MQ4 mitigations to the general answer-component of every MQ entry — the answer is always permissive (may be empty, hedged, or confident), not mandated to manufacture content the LLM doesn't have.

**Commitment 3: Prior `2026-06-04_21-58` finding's MQ2-as-preparation-substrate + always-invoke premise**
- **Source:** `devdocs/inquiries/2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/finding.md`
- **Re-test status:** RE-TESTED — **STANDS**
- **Evidence:** MQ2 still produces preparation substrate for the runner's formulation of `/surfacing`'s input. Under S3, the substrate IS the permissive answer accompanying the specialized question. The always-invoke premise holds. The verdict re-frames MQ2's emission as "specialized question + permissive substrate" rather than just "substrate" — but the substrate's role and content kind remain unchanged.

**Commitment 4: Prior `2026-06-05_12-00` finding's MQ-aggregate-resolution as the contradiction-reconciliation step**
- **Source:** `devdocs/inquiries/2026-06-05_12-00__mq_aggregate_contradiction_resolution/finding.md`
- **Re-test status:** RE-TESTED — **STANDS**
- **Evidence:** MQA reconciles MQ-output contradictions. Under S3, MQA reconciles the answer-components of MQ entries when they contradict; it emits "no tension to resolve" when answers align or are absent (per the Example A precedent at the prior 18-21 finding). The question text doesn't reconcile; only the answer content does. MQA's role and emission shape remain unchanged.

**Commitment 5: The discipline-explainer doc's §2.2 + §2.2.1-§2.2.4 + §2.2.6 + §6 commitments**
- **Source:** `devdocs/how_articulate_simple_should_be.md`
- **Re-test status:** RE-TESTED — **STANDS (REFRAMED)**
- **Evidence:** the doc's italicized question presentation in §2.2.1-§2.2.4 is now READ as part of the operation's identity-EMISSION (not just identity-definition). The doc's repeated "MQ's answer" / "Meta-question answers" language at §6 is preserved — the answer is part of each entry under S3. The bundle contract at §6 is augmented (not replaced) by including the specialized question. No doc commitment is invalidated; the verdict adds explicit accommodation for the question text alongside the answer.

## Next Actions

### MUST

(None proposed at this finding stage. The verdict itself is the deliverable. The specific revisions to the prior 18-21 finding's text — listed in the COULD below — wait on user authorization, following the established session pattern.)

### COULD

- **What:** Apply the S3 shape commitment to the prior `devdocs/inquiries/2026-06-06_18-21__articulate_simple_output_md_meaning/finding.md` finding. Specific text edits required:
  1. **CORE-content section** — each per-MQ entry definition currently reads as "MQ_n IS an [answer-category]." Revise each to "MQ_n's content is the specialized question (mandatory) + the [answer-category] (permissive — may be explicit-empty per the empty-as-content principle; may be hedged per PERMISSION-not-CONSTRAINT; may be confident when perception is clear)." Affects MQ1, MQ2, MQ3, MQ4, MQ extensions, MQA entries.
  2. **Example output ("Example Output (illustrative rendering)") in the prior finding** — each MQ entry's rendering currently shows label + answer only (e.g., *"MQ1 (Structural / scope): Feature-level scope..."*). Revise each to show the specialized question + permissive answer. The illustrative-rendering caveat already in the prior finding's example covers structural rendering choices (italics vs Q: prefix vs heading-style; ordering); only the meaning-layer SHAPE needs to be visibly present (Q text + A content).
  3. **Optional brief meta-commitment note** — add a one-sentence note near the prior finding's META layer-separation paragraph: *"The asymmetric naming of Meta-question relative to sibling cognitive disciplines (categorial noun vs deverbal nouns / gerunds) signals that the question text is part of each MQ entry's mandatory content; the permissive answer accompanies the question."*
  - **Who:** The user (when ready), or a follow-up session at user authorization
  - **Gate:** Observable trigger — user authorizes applying this finding's verdict to the prior 18-21 finding
  - **Why:** Closes the gap the user surfaced; brings the prior finding's CORE-content commitment into alignment with the verdict.

### DEFERRED

- **What:** Specify a structural-layer rendering convention for the specialized question (italics vs Q: prefix vs heading-style; positioning before or after the answer; field-name format).
  - **Gate:** Condition-bound — when a structural-layer spec for the articulate_simple output md is being authored.
  - **Why (if revived):** The structural-layer spec downstream of this meaning-layer finding will need to commit specific rendering choices that preserve the meaning-layer S3 commitment (Q always present specialized to task + A permissive).

- **What:** Test whether the asymmetric-naming-implies-output-identity meta-pattern transfers to other cognitive_harness disciplines with categorial-vs-deverbal naming asymmetry.
  - **Gate:** Condition-bound — when another cognitive discipline is being audited at its output meaning-layer AND naming asymmetry is observable.
  - **Why (if revived):** Tests the meta-pattern's generality beyond articulate_simple's specific case. Cross-discipline confirmation would strengthen the pattern's reusability claim.

## Reasoning

### Why REFINE over REAFFIRM or REPLACE

**REAFFIRM** was rejected on USER-CLAIM-FIDELITY grounds — the user's pushback identified a real meaning-layer gap (the question text silently dropped from MQ entry definitions). REAFFIRM would leave the gap and dismiss the user's structural argument, failing the inquiry's stated goal of "engaging the user's argument directly rather than dismissing with the lightweight stance."

**REPLACE** was rejected on INHERITANCE-COHERENCE and Bootstrap-lock-simplest grounds — the prior 18-21 finding's three-layer model, five negative-content classes, four over-elaboration rejections, load-bearing test + 4-reader operationalization, B5 IN, two meta-patterns, and layer-separation meta-commitment were NOT under user challenge and remain structurally sound. REPLACE would invalidate them, requiring re-derivation; the prior's broad correctness doesn't warrant total revision.

**REFINE** surgically updates the one CORE-content commitment that has the gap, preserving the rest. Bounded scope per Bootstrap-lock-simplest.

### Why S3 specifically (vs S1/S2/S5/S6)

Five candidate shapes were considered:
- **S1 — Answer-only** (the prior 18-21 finding's commitment): fails USER-CLAIM-FIDELITY (silently drops the question text the user has correctly identified as part of MQ's identity).
- **S2 — Question-only**: fails the MQA reconciliation test (two questions cannot contradict; MQA's worked from-scratch example at §2.2.6 cannot be represented without answer-shaped content) and the 11-16 overreach test (eliminating answers eliminates the problem the prior inquiry solved, which is a strong signal that answers are real).
- **S3 — Question-mandatory + Answer-permissive**: passes all tests. Honors user's claim (question is mandatory) AND preserves MQA + 11-16 + 18-21 inheritances (answer present but permissive). Selected.
- **S5 — Label-as-compressed-question + Answer** (what the prior 18-21 finding's example actually rendered): fails user-as-reader perspective — the label "(Structural / scope)" requires spec lookup to decode.
- **S6 — Heterogeneous by Substrate-vs-Intra class**: rejected — adds complexity without meaning-layer benefit; the asymmetric naming applies to all four base MQs equally regardless of downstream consumption.

### Why the asymmetric-naming argument needs precision (deverbal vs categorial)

A first-pass framing of "Meta-question is a noun naming a question; sibling disciplines are action-verbs" was structurally imprecise. The siblings — sense-making, surfacing, critique, innovation — are ALSO nouns. Surfacing is a gerund (act of surfacing). Critique is a deverbal noun (the act of critiquing OR the result of critiquing). Innovation is a deverbal noun (act of innovating OR result of innovating). Sense-making is a gerund (act of making sense).

The precise asymmetry: sibling names are **deverbal nouns** or **gerunds** — derived from the action the operation performs. Meta-question is a **categorial noun** — naming what kind of thing the operation IS. The categorial-vs-deverbal distinction holds; the "verbs vs nouns" framing did not.

Future references to the asymmetric-naming meta-pattern should express this precisely.

### Why the user's "answer is not mandatory" resolves to PERMISSIVE not OPTIONAL

A strong reading (answer field absent) would invalidate two prior inheritances:
- The empty-as-content principle from the prior 18-21 finding requires the field present to carry explicit-empty as a load-bearing signal — silent absence would be ambiguous between "considered and found nothing" vs "didn't consider."
- The MQA reconciliation step requires answer-shaped content to reconcile contradictions when they exist — strong reading eliminates MQA's work.

The weak reading (answer field present; content permissive) reconciles the user's claim with both inheritances. Specifically: the answer field always appears in the bundle entry; its content may be explicit-empty, hedged, or confident. Never silent-absent. This is the structurally necessary interpretation of the user's claim.

### Why uniformity across MQ operations (vs heterogeneous by Substrate-vs-Intra class)

A heterogeneous alternative — Substrate-MQs use S3 (question + permissive answer because they seed downstream operations); Intra-articulate-MQs use S1 (answer-only because they constrain downstream operations) — was considered and rejected.

The asymmetric naming applies to all four base MQs equally — MQ1, MQ2, MQ3, MQ4 are all Meta-questions; their categorial-noun identity is the same. Downstream consumption pattern (seed vs constrain) is orthogonal to output shape. Under uniform S3, Intra-articulate-MQs' downstream consumers (Rephrase, MultiDepth) read the permissive answer as constraint; the specialized question is supplementary content for user-reader and audit-reader. No conflict.

Heterogeneity would add complexity to structural-layer authoring without meaning-layer benefit.

## Open Questions

### Monitoring

- Whether the specialized question text + permissive answer rendering chosen by the eventual structural-layer spec is sufficient for user-as-reader self-containment, or whether additional reader-aids surface as the discipline accumulates Early-Operation invocations.

### Blocked

- A structural-layer rendering convention for the specialized question + permissive answer is blocked on `cognitive_harness/articulate-simple/` being scaffolded (the implementation-scaffolding gap noted in the prior 18-21 finding).

### Research Frontiers

- Whether the asymmetric-naming-implies-output-identity meta-pattern (Pattern from this inquiry) applies cleanly to OTHER cognitive_harness disciplines. The pattern was named based on Meta-question's instantiation; cross-discipline transfer is plausible but not confirmed. A future inquiry on another categorial-named operation (if one exists or emerges) could test the pattern's generality.

### Refinement Triggers

- If empirical evidence at Early Operation shows LLMs systematically render the specialized question text inconsistently in ways that confuse downstream consumers, a structural-layer convention may need to be committed earlier than naturally would happen.

- If a future inquiry on a sibling discipline surfaces a case where output identity does NOT include the discipline's categorial name despite naming asymmetry, the meta-pattern needs revision (e.g., adding a discrimination criterion for when the asymmetry is load-bearing vs incidental).

## Example Output (illustrative rendering, S3 shape)

The rendering below is *illustrative*. Field names, header styles, ordering choices, and markdown shape are structural-layer concerns. What the example demonstrates is the **meaning-layer S3 commitment**: each Meta-question entry carries the specialized question (mandatory) + the permissive answer (when LLM has perception to share).

The example uses a cold-context invocation so that MQ4's permissive answer is explicit-empty.

---

### CORE (per-item bundle, single-item case)

**Item text**: improve the onboarding flow for new users

**MQ1**
- *Question*: What's the scope of "improve the onboarding flow for new users" — time-horizon, conceptual, project, feature, cross-cutting, or other?
- *Answer*: Feature-level scope — the onboarding flow is a feature subsystem within a larger product surface.

**MQ2**
- *Question*: Does "improve the onboarding flow for new users" require external context? If yes or uncertain, what kinds of external information are load-bearing, and what is the relational stance toward the project?
- *Answer* (hypothetical-relational mode):
  - Verdict: yes
  - Kinds-plural: the current onboarding flow's implementation; user feedback on onboarding pain points (if available); metrics on first-time-user completion rates
  - Relational stance: continuation (improving existing work)

**MQ3**
- *Question*: What does the user actually want behind "improve the onboarding flow for new users," beyond the surface ask?
- *Answer*: Intent is reducing drop-off / increasing completion-rate of first-time setup. Not "redesign user data model" or "reorganize post-onboarding experience."

**MQ4**
- *Question*: What's explicitly out of scope or excluded for "improve the onboarding flow for new users"?
- *Answer*: *(empty — cold-context invocation; no extrinsic exclusion declarations perceivable in session)*

**MQ-aggregate-resolution**
- *Question* (implicit): Do MQ1-MQ4 for this task cohere? If not, what reconciles them?
- *Answer*:
  - Verdict label: ALIGNED
  - Reconciliation-content: no tension to resolve — all four base meta-question perceptions converge on "improve completion-rate / UX of an existing feature-level subsystem."

(Deconstruct + MultiDepth + Rephrase entries follow the prior 18-21 finding's commitments; they are not Meta-question entries and are unchanged by this finding.)

---

### What this example demonstrates at meaning layer

- **Each MQ entry carries the specialized question** — the doc's italicized question from §2.2.1-§2.2.4 (or §2.2.6 for MQA's implicit form) instantiated for the specific task ("improve the onboarding flow for new users"). The question text is present in every MQ entry; no spec lookup needed.

- **Each MQ entry carries a permissive answer**:
  - MQ1, MQ2, MQ3, MQA have confident perceptions to share — answer content present.
  - MQ4 has no extrinsic exclusions to enumerate in cold context — answer renders as *(empty — [reason])* per the empty-as-content inheritance from the prior 18-21 finding.

- **The MQA verdict label is distinct parseable content** (B5 IN from the prior 18-21 finding) — `ALIGNED` is a label, distinct from the reconciliation-content prose that follows.

- **Specific rendering is illustrative.** This example uses "*Question*: ... / *Answer*: ..." pairs; a structural-layer spec might choose italics with no label, or Q: / A: prefixes, or heading-style. The meaning-layer commitment is that the SHAPE is question-mandatory + answer-permissive; the specific markdown is downstream.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
u said 

MQ4 (Boundary / exclusion): (empty — no extrinsic exclusion declarations perceivable in cold-context session)                     

  why metaquestions doesnt include the question??

[... assistant's prior response presenting Options A/B/C as a structural-layer rendering choice ...]

but do you understand metaquestion is a question... we must put the question there , answer is not mandatory as the question. because meta question is about seeding the surfacing... not about answering ...
```

</details>
