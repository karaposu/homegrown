---
status: active
model: claude-opus-4-7[1m]
effort: max
refines: devdocs/inquiries/2026-06-06_19-06__meta_question_is_question_not_answer/finding.md
---
# Finding: Meta-ambiguity vs Meta-question — Meaning-Layer Reframe Inquiry

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-06-06_19-06__meta_question_is_question_not_answer/finding.md`

**Revision trigger:** User-surfaced reframe — after the prior 19-06 finding committed the Q-mandatory + A-permissive entry shape (each MQ entry carries a specialized question + the LLM's permissive answer with range = explicit-empty / hedged / confident commitment), the user surfaced a deeper meaning-layer claim: *"I have another take on MQs — instead of meta questions, we can actually list the strong meta ambiguities? do you think this is better framing? structural ambiguities, relational, intent ambiguities etc. ... I feel like this is a better fit."* The user proposes that the operation IDENTIFIES ambiguities classified by type, rather than asks questions and emits permissive answers. This inquiry tests that proposal.

**What's preserved:**
- The 19-06 Q-mandatory commitment (specialized question is the operation-identity emission)
- The 19-06 asymmetric-naming-implies-output-identity meta-pattern
- The 19-06 three-layer model (ANCHOR / ENVELOPE / CORE) — unchanged
- The 18-21 commitments (three-layer model / five negative-content classes / load-bearing element test + four-reader operationalization / B5 MQA verdict label IN / empty-as-content principle / two meta-patterns / layer-separation)
- The 11-16 commitments (Substrate-MQ vs Intra-articulate-MQ orthogonal axis / PERMISSION-not-CONSTRAINT framing)
- The 12-00 commitment (MQA reconciles cross-MQ contradictions)
- The 4-type taxonomy (Structural / Relational / Interpretive / Boundary) from 10-37 + 10-03
- The 21-58 commitment (MQ2 as preparation substrate; always-invoke premise)
- All other earlier prior commitments (15-39, 07-48, 21-12, 17-01, 14-14, 17-46, 22-44, 00-47, 16-19)

**What's changed:**
- **The 19-06 finding's CORE-content commitment** is REFINED. The permissive answer's range now includes **identified-ambiguities-list** as a first-class shape, alongside the existing confident-commitment, hedged-commitment, and explicit-empty shapes. The answer's range is now a 4-shape space, not a 3-shape space extended by one.
- **The specialized question's inquiry-form** refines to be about ambiguities: the question becomes "What structural ambiguities exist in this task?" / "What relational ambiguities exist?" / etc. The Q-mandatory commitment from 19-06 is preserved unchanged — the operation still asks a question — but the inquiry-form is now ambiguity-focused.

**What's new:**
- **Identified-ambiguity as first-class output content** — structurally distinct from hedged commitment. A hedged commitment commits to a frame with a confidence caveat ("probably feature-level, possibly cross-cutting"); an identified-ambiguity refuses to commit until resolved ("scope is ambiguous between feature-level and cross-cutting; surface ask doesn't disambiguate"). These are different cognitive emissions and PERMISSION-not-CONSTRAINT does not subsume the distinction.
- **Emission-emphasis-by-consumer** commitment: Substrate-MQs (MQ2 + MQ4) emit with ambiguity-list emphasis (for `/surfacing`'s resolution); Intra-articulate-MQs (MQ1 + MQ3) emit with tentative-commitment emphasis (for Rephrase + MultiDepth's constraint). Operation identity is uniform across all four base MQs; emission emphasis varies by downstream consumer.
- **PERMISSION-not-CONSTRAINT scope refinement**: applies to the tentative-commitment component of an entry. Does NOT apply to ambiguity-identification (which is honest emission of perceived openness, not hedged commitment).
- **MQA refinement**: reconciles contradicting tentative commitments primarily; ambiguity-overlaps across MQs are adjunct content when commitments don't conflict but ambiguities overlap.
- **One new reusable meta-pattern**: **ambiguity-as-first-class-output-content** — distinct from uncertainty-as-confidence-hedge. Applies when a discipline-output's answer-space includes both commitment-with-confidence AND refusal-to-commit-due-to-perceived-openness.

**Migration:** the prior 19-06 finding's CORE-content section + worked example renderings need updating to acknowledge identified-ambiguity as a valid answer shape (alongside the existing shapes). The discipline-explainer doc at `devdocs/how_articulate_simple_should_be.md` §2.2 commitment paragraph + §2.2.1-§2.2.4 + §2.2.6 + at least one §13 worked example need similar updates. Specific rendering choices (how to format an identified-ambiguity-list, how to position it relative to tentative commitment, how to label them distinctly) remain structural-layer concerns not pre-decided here.

## Question

Given that the discipline-explainer doc at `devdocs/how_articulate_simple_should_be.md` §2.2 currently commits the Meta-question (MQ) operation across four structurally-typed perception-questions (MQ1 Structural / MQ2 Relational / MQ3 Interpretive / MQ4 Boundary) — committed across nine prior findings and most recently REFINED at `devdocs/inquiries/2026-06-06_19-06__meta_question_is_question_not_answer/finding.md` to the Q-mandatory + A-permissive entry shape — and given the user's proposal that the operation be reframed as **identifying meta-ambiguities** classified by the same four types (structural / relational / intent / boundary) rather than as asking meta-questions:

Is the Meta-ambiguity framing structurally better at the meaning layer? Does it better serve the "seeding /surfacing" function the user has emphasized across prior inquiries? Does it preserve or require revision of the nine prior commitments — and does the doc's commitment need REAFFIRM (Meta-question wins; reframe rejected), REFINE (some hybrid framing), or REPLACE (Meta-ambiguity wins; substantial restructure)?

**Goal**: a confident verdict engaging the user's intuition directly, grounded in the doc commitments + 9 priors + structural analysis. If REFINE or REPLACE, name the specific revisions required.

## Finding Summary

- **The user is structurally right that ambiguity-identification is first-class** — currently under-expressed in the MQ framework. The conceptual distinction between "hedged answer" (commits to a frame with confidence caveat) and "identified ambiguity" (refuses to commit until resolved) is real and load-bearing; PERMISSION-not-CONSTRAINT authorizes the former but does not subsume the latter. The user's intuition has structural antecedents in the cumulative work at `2026-06-06_11-16` (Substrate-MQ "seeding" framing) and `2026-06-06_19-06` (question-as-identity finding).

- **But the operation's full cognitive work is BOTH ambiguity-noticing AND commitment-making** — not pure ambiguity-identification. When an LLM reads a compact task statement, it BOTH notices ambiguities AND commits perceptions (sometimes confidently, sometimes hedged, sometimes refusing to commit). Pure-Meta-ambiguity (the user's literal proposal) would eliminate the commitment-emission needed by Intra-articulate-MQs to constrain Rephrase + MultiDepth.

- **The verdict is REFINE** the prior `2026-06-06_19-06` finding's CORE-content commitment with shape **F3 Hybrid Q-of-ambiguities**. The permissive answer's range expands to include **identified-ambiguities-list** as a first-class shape alongside the existing confident-commitment, hedged-commitment, and explicit-empty shapes — a 4-shape answer space.

- **The operation stays named Meta-question** (not renamed to Meta-ambiguity). The structural reasons: (a) the asymmetric-naming-implies-output-identity meta-pattern from 19-06 does NOT discriminate between Meta-question and Meta-ambiguity (both are categorial nouns); (b) the 9-prior chain inertia (renaming forces cascading edits across multiple inquiry findings and the discipline-explainer doc); (c) Bootstrap-lock-simplest argues against forced renames; (d) under the verdict, the operation STILL asks a question — the inquiry-form refines to "what [type]-ambiguities exist in this task?" preserving the 19-06 Q-mandatory commitment. **Important: the user has the final call on the name.** The substantive content of the user's proposal (ambiguity-identification as first-class) is fully honored regardless of the label. If the user prefers rename to "Meta-ambiguity" after seeing the F3 substance, the substance still applies — only the label changes.

- **The shape applies UNIFORMLY across MQ1, MQ2, MQ3, MQ4, MQ extensions, and MQA** at the operation-identity layer. **Emission emphasis varies by downstream consumer**: Substrate-MQs (MQ2 + MQ4) naturally emit with ambiguity-list emphasis (because `/surfacing` resolves what's open); Intra-articulate-MQs (MQ1 + MQ3) naturally emit with tentative-commitment emphasis (because Rephrase + MultiDepth need constraints). The F4 Heterogeneous-by-class alternative (where Substrate-MQs become Meta-ambiguity and Intra-articulate-MQs stay Meta-question) was considered and rejected — it wrongly bifurcates the operation-identity layer when the asymmetry is actually at the emission-emphasis layer.

- **MQA's role refines**: reconciles contradicting tentative commitments primarily (from-scratch canonical case continues to work); ambiguity-overlaps across MQs are adjunct content when commitments don't conflict but the underlying ambiguities do.

- **PERMISSION-not-CONSTRAINT scope narrows**: applies to the tentative-commitment component of an MQ entry (the LLM may hedge or refuse to commit confidently). Does NOT apply to ambiguity-identification (which is honest emission of perceived openness, not hedged commitment). The 11-16 framing is preserved with scope refined to the component that actually carries over-commitment risk.

- **One new reusable meta-pattern**: **ambiguity-as-first-class-output-content** — structurally distinct from uncertainty-as-confidence-hedge. Cross-domain validation from formal logic (UNDETERMINED ≠ UNCERTAIN) confirms the distinction. The pattern applies when a discipline-output's answer-space needs to discriminate between commitment-with-confidence-caveat and refusal-to-commit-due-to-perceived-task-statement-openness.

## Finding

A small piece of context for the reader: this finding operates on `devdocs/inquiries/2026-06-06_19-06__meta_question_is_question_not_answer/finding.md` (referred to throughout as the "prior 19-06 finding"), which was produced earlier in this same session as a meaning-layer REFINE of the discipline-explainer doc's per-MQ-entry content commitment. The prior 19-06 finding settled that each Meta-question entry carries a specialized question (mandatory; operation-identity emission) + the LLM's permissive answer (may be explicit-empty, hedged, or confident). The user, after seeing that verdict applied to the doc, proposed a deeper reframe: replace "Meta-questions" with "Meta-ambiguities" — list strong meta-ambiguities by type (structural / relational / intent / boundary) rather than ask meta-questions.

This inquiry tests the user's proposal against the doc commitments and the 9-prior chain spanning the MQ framework's development.

### The structural crux: hedged answer ≠ identified ambiguity

The user's intuition has structural ground that PERMISSION-not-CONSTRAINT does not subsume.

When the LLM commits a hedged answer ("probably feature-level scope, possibly cross-cutting"), it COMMITS to a frame — feature-level — and adds a confidence caveat. The frame is committed; the LLM has taken a position.

When the LLM identifies an ambiguity ("scope is ambiguous between feature-level and cross-cutting; the task statement does not disambiguate"), it REFUSES to commit. The position-taking is deferred; the LLM names what's open and hands resolution to downstream (the runner formulating `/surfacing`'s input, or sense-making's Ambiguity Collapse phase).

These are different cognitive emissions. The hedged answer is a position with uncertainty about the position. The identified ambiguity is the recognition that no position is warranted yet. Cross-domain validation from formal logic confirms the distinction: UNDETERMINED (no truth value assignable from given premises) is structurally different from UNCERTAIN (probability less than 1 but assignable). Identified ambiguity is analogous to UNDETERMINED; hedged commitment is analogous to UNCERTAIN.

PERMISSION-not-CONSTRAINT from the prior `2026-06-06_11-16` finding authorizes hedged answers as the safe mode under cold-context uncertainty. It does NOT authorize the LLM to refuse-to-commit by identifying ambiguity instead. That's a different cognitive emission that the 19-06 finding's A-permissive range did not include.

### But the operation's full cognitive work is dual — not pure ambiguity-identification

When an LLM reads "fix the auth bug" in cold context, it does BOTH:
- notices ambiguities (which auth subsystem? which bug? what's the fix's scope? is "fix" a patch or a root-cause investigation?)
- commits perceptions (the intent is probably stop-the-bug-narrowly, not investigate-auth-design; the deliverable shape is probably a code change)

Neither pure ambiguity-identification nor pure commitment-emission captures this dual work. The user's literal proposal (replace MQ with MA) would eliminate the commitment-emission entirely — but Intra-articulate-MQs need commitments to feed Rephrase + MultiDepth. Rephrase cannot vary vocabulary "within ambiguous-between-feature-and-cross-cutting" — it needs the LLM to commit (tentatively, hedged, or confidently) to a scope axis to vary within.

So the operation's identity is broader than the user's literal proposal. The operation BOTH identifies ambiguities AND commits perceptions. The user's substantive insight is that ambiguity-identification has been UNDER-EXPRESSED in the current framework. Honoring the substantive insight without losing the commitment-emission requires F3 Hybrid Q-of-ambiguities.

### Why REFINE over REAFFIRM or REPLACE

**REAFFIRM** was rejected on USER-SUBSTANTIVE-FIDELITY grounds. The user's intuition has structural ground (KI1 — hedged answer ≠ identified ambiguity). REAFFIRM would dismiss the intuition with "PERMISSION-not-CONSTRAINT already covers uncertainty" — which fails because the distinction is structural, not nominal.

**REPLACE** was rejected on INHERITANCE-COHERENCE and Bootstrap-lock-simplest grounds. The 19-06 Q-mandatory + A-permissive shape is fresh + adversarially-tested via seven ambiguity-collapse pairs; REPLACE would invalidate it without warrant. The 9-prior chain stabilized at Meta-question terminology; REPLACE forces cascading edits across multiple inquiry findings, the discipline-explainer doc, and any future references — high churn for what is structurally a REFINE of the answer's range.

**REFINE** surgically updates the prior 19-06 finding's CORE-content commitment to expand the answer's range, preserving the rest. The operation's name stays; the Q-mandatory commitment stays; the A-permissive shape stays — only the A's RANGE expands to include identified-ambiguities-list as first-class content.

### Why preserve "Meta-question" name (and why the user has the final call)

The user explicitly proposed renaming to "Meta-ambiguity." The verdict preserves the name "Meta-question." This decision requires honest explanation.

**Structural reasons for preserving the name:**
1. The asymmetric-naming-implies-output-identity meta-pattern from the prior 19-06 finding does NOT discriminate between Meta-question and Meta-ambiguity. Both are categorial nouns naming what the operation IS (a question, or an ambiguity-identification, respectively). The meta-pattern would equally support either name; it doesn't pick a winner.
2. The 9-prior chain references "Meta-question" / "MQ" hundreds of times across the discipline-explainer doc and multiple inquiry findings. Renaming forces cascading edits with no structural benefit beyond the nominal change.
3. Bootstrap-lock-simplest (inherited governance from prior `2026-06-06_09-58`) argues against forced cascading edits when the substantive change is fully captured by REFINE.
4. Under the verdict, the operation STILL asks a question — the inquiry-form refines to "what [type]-ambiguities exist in this task?" This preserves the 19-06 Q-mandatory commitment. The name "Meta-question" remains accurate.

**But the user has the final call on the name.** This is important. The structural analysis supports preserving the name; the user's substantive intent (ambiguity-identification as first-class output content) is fully honored regardless of the label. If the user prefers rename to "Meta-ambiguity" after seeing the F3 substance, the substance does not change — only the nominal label. The verdict commits the substance; the user commits the label. The COULDs section below offers both paths.

### The shape: F3 Hybrid Q-of-ambiguities (uniform operation + 4-shape answer space)

Under F3, each MQ entry in the per-item bundle carries:

**The specialized question (mandatory, per 19-06 preserved):** the doc's italicized question from §2.2.1-§2.2.4 (or §2.2.6 for MQA), instantiated for the task. Refined inquiry-form: for MQ1, the question becomes *"What structural / scope-axis ambiguities exist in [the task]?"*; for MQ2, *"What relational / context-need ambiguities exist?"*; for MQ3, *"What interpretive / intent ambiguities exist?"*; for MQ4, *"What boundary / exclusion ambiguities exist?"* The Q-mandatory commitment from 19-06 is preserved.

**The permissive answer (range expanded to 4 first-class shapes):**
1. **Identified-ambiguities-list** — the LLM names what's open along the typed axis. May enumerate two or more candidate readings, or describe the open dimension. This is the new shape.
2. **Tentative commitment** (confident) — the LLM commits to a position confidently (e.g., "Feature-level scope" with no hedge).
3. **Tentative commitment** (hedged) — the LLM commits with a confidence caveat (e.g., "Probably feature-level, possibly cross-cutting").
4. **Explicit-empty** — preserved from the prior 18-21 empty-as-content principle (e.g., MQ4 in cold context with no extrinsic exclusion declarations visible).

When the LLM has perception to share, it emits either an identified-ambiguity (if the task statement is genuinely open along this axis) or a tentative commitment (if the LLM can responsibly commit). PERMISSION-not-CONSTRAINT applies to shapes 2-3 (the LLM may hedge); it does NOT apply to shape 1 (which is honest emission of openness, not hedged commitment).

### Emission emphasis varies by downstream consumer

The same operation produces both kinds of content when both are perceived. Downstream consumers read what they need.

**Substrate-MQs (MQ2 + MQ4)** — these feed the runner's formulation of `/surfacing`'s input. Their emission emphasis is **ambiguity-list primary**: `/surfacing`'s job is to surface project context that resolves what's open in the task; an identified-ambiguity is directly actionable as "resolve this." When the LLM also has a tentative commitment for MQ2 or MQ4, the commitment biases the runner's input formulation (e.g., suggesting which kinds of context might apply) but the ambiguity-list is the primary signal.

**Intra-articulate-MQs (MQ1 + MQ3)** — these constrain Rephrase + MultiDepth. Their emission emphasis is **tentative-commitment primary**: Rephrase needs commitments to vary vocabulary within; MultiDepth needs scope-axis perception to render the literal task sharply. When the LLM also identifies ambiguities for MQ1 or MQ3, the ambiguity-list surfaces for audit-reader visibility but the tentative commitment is the primary downstream-consumed signal.

The operation's IDENTITY is uniform across all four base MQs + extensions + MQA. The downstream-consumption emphasis varies. This is structurally parallel to the prior 18-21 finding's 4-reader operationalization: each reader reads what's load-bearing for their decision; the operation emits what's available; downstream selects.

The F4 Heterogeneous-by-class alternative (Substrate-MQs become Meta-ambiguity; Intra-articulate-MQs stay Meta-question — two structurally-different operations) was considered and rejected. The asymmetry between Substrate and Intra is at the downstream-consumption layer, not at the operation-identity layer. All four base MQs involve both ambiguity-noticing AND commitment-making cognitively; bifurcating their identity wrongly maps consumer-asymmetry to operation-asymmetry.

### MQA's role refines

The prior `2026-06-05_12-00` finding committed MQ-aggregate-resolution as reconciling cross-MQ contradictions. Under this finding's refinement, MQA primarily reconciles **contradicting tentative commitments**. The canonical from-scratch case from §2.2.6 continues to work: MQ2's default tentative commitment ("continuation, kinds=[prior X]") contradicts MQ3's tentative commitment ("greenfield intent"); MQA reconciles by recognizing MQ3's intent overrides MQ2's default substrate.

Ambiguity-overlaps across MQs are adjunct content when commitments don't conflict but the underlying ambiguities do. For example, MQ2 may identify "stance ambiguity (continuation vs fresh-start)" and MQ3 may identify "intent ambiguity (improve-existing vs rebuild)" — both are open along related axes. MQA may surface this overlap to the consumer ("multiple MQs identify related openness; consider resolving these together via `/surfacing`") without performing reconciliation in the prior sense.

### PERMISSION-not-CONSTRAINT scope refines

The prior `2026-06-06_11-16` finding committed PERMISSION-not-CONSTRAINT as the framing for cold-context mitigations (the LLM may emit safe-mode hedged answers rather than confident over-commitments). Under this finding's refinement, PERMISSION applies to the **tentative-commitment component** of an MQ entry (shapes 2 + 3 in the 4-shape answer space). PERMISSION does NOT apply to ambiguity-identification (shape 1) because ambiguity-identification is honest emission of perceived openness — there's no over-commitment to mitigate.

The 11-16 framing is preserved; the scope refines to the component where over-commitment risk actually exists. Cases that needed PERMISSION continue to receive it; cases that don't need it (ambiguity-identification) don't invoke it.

### The new meta-pattern: ambiguity-as-first-class-output-content

One reusable pattern emerges from this inquiry: **ambiguity-as-first-class-output-content** is structurally distinct from **uncertainty-as-confidence-hedge**. The two patterns operate on different cognitive axes:

- **Uncertainty-as-confidence-hedge**: the LLM commits to a frame and signals its confidence (confident / hedged / low-confidence). PERMISSION-not-CONSTRAINT authorizes this. Domain analog: UNCERTAIN in formal logic.

- **Ambiguity-as-first-class-output-content**: the LLM identifies that the task statement does not commit to a frame; the LLM refuses to commit until resolution. Domain analog: UNDETERMINED in formal logic.

When designing or auditing a discipline-output's meaning-layer spec, ask: does this output's answer-space need to discriminate between the two? If yes (typically when downstream consumers operate differently on commitments vs openness — e.g., `/surfacing` resolves openness vs Rephrase constrains on commitments), the answer-space should include both shapes as first-class. Future audits on other discipline-outputs can apply this pattern.

## Inherited Commitments Re-test

The branch declared a Synthesis Trigger inheriting commitments from nine prior outputs. Each is re-tested at this finding's verdict.

**Commitment 1**: prior `2026-06-06_19-06` finding's Q-mandatory + A-permissive entry shape + asymmetric-naming-implies-output-identity meta-pattern.
- **Re-test status**: RE-TESTED — **REFINED** (A-permissive's range expands; Q-mandatory preserved unchanged; asymmetric-naming meta-pattern preserved unchanged).
- **Evidence**: under F3 the operation still asks a question (refined inquiry-form); the A's range expands from 3-shape to 4-shape; the asymmetric-naming meta-pattern doesn't discriminate between Meta-question and Meta-ambiguity names, so preserving "Meta-question" is consistent.

**Commitment 2**: prior `2026-06-06_11-16` finding's Substrate-MQ vs Intra-articulate-MQ axis + PERMISSION-not-CONSTRAINT framing.
- **Re-test status**: RE-TESTED — **STANDS (PERMISSION scope refined)**.
- **Evidence**: Substrate-vs-Intra axis preserved; verdict adds emission-emphasis variation along this axis but operation identity stays uniform. PERMISSION's scope narrows to the tentative-commitment component (shapes 2 + 3 in 4-shape answer space) — does NOT apply to ambiguity-identification (shape 1). Cases that needed PERMISSION continue to receive it.

**Commitment 3**: prior `2026-06-05_12-00` finding's MQ-aggregate-resolution as the final internal step reconciling cross-MQ contradictions.
- **Re-test status**: RE-TESTED — **STANDS (content shape refined)**.
- **Evidence**: MQA primarily reconciles contradicting tentative commitments; the canonical from-scratch case continues to work. Ambiguity-overlaps across MQs are adjunct content.

**Commitment 4**: prior `2026-06-06_10-37` finding's MQ4 Boundary as 4th base meta-question + 4-type taxonomy + cold-empty-valid rule.
- **Re-test status**: RE-TESTED — **STANDS**.
- **Evidence**: 4-type taxonomy preserved (refined to ambiguity-type categories under F3 inquiry-form); MQ4's role unchanged; cold-empty-valid rule preserved (explicit-empty is still a valid answer shape in the expanded 4-shape range).

**Commitment 5**: prior `2026-06-04_21-58` finding's MQ2 as preparation substrate + always-invoke premise.
- **Re-test status**: RE-TESTED — **STANDS**.
- **Evidence**: MQ2 still produces preparation substrate for `/surfacing` via the runner. Under F3, the substrate is either an identified-ambiguity-list (Substrate-MQ emission emphasis) or a tentative commitment alongside an ambiguity-list. The substrate's content shape refines; its role and always-invoke premise are preserved.

**Commitment 6**: prior `2026-06-04_21-12` finding's MQ2 three-element substance + hypothetical-relational mode.
- **Re-test status**: RE-TESTED — **STANDS (hypothetical-relational mode is the tentative-commitment shape under F3)**.
- **Evidence**: hypothetical-relational mode is preserved as the form a tentative commitment takes under cold-context uncertainty. Three-element substance (verdict + kinds-plural + relational stance) preserved; expression mode preserved.

**Commitment 7**: prior `2026-06-05_10-03` finding's 3-type taxonomy foundation.
- **Re-test status**: RE-TESTED — **STANDS (extended to 4-type at 10-37; verdict respects the 4-type set)**.
- **Evidence**: the verdict applies uniformly across MQ1/MQ2/MQ3/MQ4. The 4-type taxonomy is preserved.

**Commitment 8**: prior `2026-06-04_07-48` finding's 3-phase runtime shape + per-operation firing-format + LAYER 1 / LAYER 2 failure-mode framework.
- **Re-test status**: INHERITED-WITHOUT-RE-TEST.
- **Reason**: Layer Commitment for this inquiry is MEANING; the process-layer runtime shape is out of scope. The 4-stage flow + per-operation firing remain unchanged by a content-shape REFINE.

**Commitment 9**: prior `2026-06-03_15-39` finding's foundation (5 operations + 4-stage flow + 3 base MQs initially).
- **Re-test status**: RE-TESTED — **STANDS**.
- **Evidence**: 5 operations preserved; 4-stage flow preserved; the base MQs (now 4 including MQ4 from 10-37) preserved.

## Next Actions

### MUST

(None proposed at this finding stage. The verdict's substantive content is the deliverable. Specific text edits to the prior 19-06 finding and the discipline-explainer doc wait on user authorization — see COULDs.)

### COULD

- **What:** Apply the F3 shape commitment to the prior `devdocs/inquiries/2026-06-06_19-06__meta_question_is_question_not_answer/finding.md` finding. Specific text edits:
  1. **CORE-content section** of the prior 19-06 finding — each per-MQ entry definition currently reads as "the specialized question (mandatory) + the [answer-category] (permissive)." Revise each to acknowledge identified-ambiguities-list as a first-class shape alongside the answer-category, with the answer-range now being a 4-shape space.
  2. **Example output** of the prior 19-06 finding — update at least one MQ entry to show ambiguity-identification + tentative-commitment emission (Substrate-MQ emphasis); contrast with another entry showing tentative-commitment-with-optional-ambiguity-list (Intra-articulate-MQ emphasis).
  3. Add a brief commitment note at the prior 19-06 finding's META layer-separation paragraph: *"The permissive answer's range is a 4-shape space — identified-ambiguity / confident commitment / hedged commitment / explicit-empty; ambiguity-identification is structurally distinct from hedged commitment and not subsumed by PERMISSION-not-CONSTRAINT."*
  - **Who:** The user, when ready (or a follow-up session at user authorization)
  - **Gate:** Observable trigger — user authorizes applying this finding's verdict to the prior 19-06 finding
  - **Why:** Closes the gap the user surfaced; brings the prior 19-06 finding's CORE-content commitment into alignment with this verdict.

- **What:** Apply the F3 shape commitment to the discipline-explainer doc at `devdocs/how_articulate_simple_should_be.md`. Specific text edits:
  1. **§2.2 commitment paragraph** (recently updated for 19-06) — refine to acknowledge identified-ambiguity as a first-class answer shape (alongside confident-commitment, hedged-commitment, and explicit-empty).
  2. **§2.2.1-§2.2.4** — refine each "Each MQX entry includes the specialized question + the LLM's permissive answer — [a scope-axis classification / a preparation substrate / an inference / an enumeration of exclusions]" sentence to acknowledge that the permissive answer's range is a 4-shape space.
  3. **§2.2.6 MQA** — add a brief note that MQA reconciles contradicting tentative commitments primarily; ambiguity-overlaps across MQs are adjunct content.
  4. **§13 examples** — update at least one worked example to show identified-ambiguity + tentative-commitment emission shape (Substrate-MQ); contrast with another showing tentative-commitment-emphasis (Intra-articulate-MQ).
  5. **§11 inheritance map** — add a row for this finding (`2026-06-06_20-29` — F3 4-shape answer space + emission-emphasis-by-consumer + PERMISSION scope refinement + MQA content-shape refinement).
  - **Who:** The user, when ready
  - **Gate:** Observable trigger — user authorizes applying this finding's verdict to the discipline-explainer doc
  - **Why:** Brings the doc into alignment with this verdict; surfaces ambiguity-as-first-class to future readers.

- **What:** Rename "Meta-question" to "Meta-ambiguity" across the discipline-explainer doc, the prior 19-06 finding, and any other affected documents. **This COULD is the user's decision.**
  - **Who:** The user, if they prefer the rename after seeing the F3 substance
  - **Gate:** Observable trigger — user prefers rename over preserve
  - **Why:** Honors the user's literal proposal at the nominal level. The substantive content of the verdict (4-shape answer space + emission-emphasis-by-consumer + scope refinements) applies either way; only the label changes. Bootstrap-lock-simplest argues against the rename, but the user has the final call on the nominal label.
  - **Depends-on:** none structurally; this is independent of the substance COULDs above.

### DEFERRED

- **What:** Specify structural-layer rendering conventions for the 4-shape answer space (how to render an identified-ambiguity-list vs a hedged commitment vs a confident commitment vs explicit-empty; how to position them when both ambiguity-list and tentative commitment are emitted; field-name conventions).
  - **Gate:** Condition-bound — when a structural-layer spec for the articulate_simple output md is being authored.
  - **Why (if revived):** the structural-layer spec downstream of this meaning-layer finding will need to commit specific rendering choices.

- **What:** Develop a determination criterion for when an LLM should emit identified-ambiguity vs tentative commitment for a given task and MQ axis.
  - **Gate:** Observable trigger — empirical evidence at Early Operation (~10-20 invocations per doc §10) that LLMs systematically differ on this decision.
  - **Why (if revived):** currently the choice is left to LLM judgment per the lightweight stance from the discipline-explainer doc §5. If divergence becomes operationally problematic, a determination criterion may need to be committed.

## Reasoning

### Why REFINE over REPLACE

REPLACE (the user's literal proposal — rename + redefine to pure Meta-ambiguity) was rejected on three structural grounds:

1. **Intra-articulate-MQ commitment requirement**: Rephrase + MultiDepth need commitments to constrain on. Pure ambiguity-identification (no tentative commitment) eliminates this needed emission. The user's literal proposal would break Intra-articulate-MQ's downstream consumer needs.

2. **9-prior chain invalidation**: REPLACE would invalidate 19-06's Q-mandatory commitment, force renaming across the discipline-explainer doc + multiple inquiry findings, and require recovering or restating the substance of the 9-prior chain. REFINE preserves these.

3. **MQA reconciliation work**: MQA reconciles contradicting commitments (per 12-00). Pure ambiguity-identification leaves MQA with nothing to reconcile (two open ambiguities don't "contradict" — they're just open spaces). REFINE preserves MQA's work with content-shape refinement; REPLACE invalidates it.

### Why the F4 Heterogeneous-by-class alternative was rejected

F4 proposed: Substrate-MQs (MQ2 + MQ4) become Meta-ambiguity (identify ambiguities for /surfacing to resolve); Intra-articulate-MQs (MQ1 + MQ3) stay Meta-question (commit perceptions for Rephrase to constrain). Two structurally-different operations.

Rejected on KI4 + KI5 grounds:
- The asymmetric-naming-implies-output-identity meta-pattern from 19-06 applies to all four base MQs equally. MQ1 and MQ3 are still meta-questions; their identity is question-shaped just like MQ2 and MQ4. Bifurcating their operation-identity violates the meta-pattern.
- The cognitive work is the same for all four base MQs: identify-what's-open + commit-perception-when-possible. Substrate-MQs aren't "ambiguity-identifiers only" (an LLM can commit MQ2's tentative substrate confidently in many cases). Intra-articulate-MQs aren't "commitment-emitters only" (an LLM can identify scope-axis ambiguities for MQ1 when the task is genuinely ambiguous).
- F3 uniformity + emission-emphasis-by-consumer captures the same downstream-need asymmetry at the correct layer (emission, not identity).

### Why preserving "Meta-question" is structurally grounded (with user-has-final-call)

The asymmetric-naming-implies-output-identity meta-pattern from 19-06 does NOT discriminate between Meta-question and Meta-ambiguity as candidate names — both are categorial nouns naming what the operation IS (a question, or an ambiguity-identification). The meta-pattern would equally support either.

What argues for preserving Meta-question:
- 9-prior chain inertia (hundreds of "Meta-question" references across documents)
- Bootstrap-lock-simplest (renaming forces cascading edits without structural benefit)
- Under F3, the operation STILL asks a question (refined inquiry-form is "what [type]-ambiguities exist?" — still question-shaped)

What argues for accepting user's rename if user prefers it:
- The user's substantive intent is fully honored either way (the 4-shape answer space + emission emphasis are the substance; the name is the label)
- User-respect: the user explicitly proposed rename and may prefer it
- The structural cost of cascading rename-edits is real but not prohibitive

The honest position is: the verdict commits the substance and recommends preserving the name on structural grounds, but the user has the final call on the label. Both paths are offered in the COULDs.

### Why the new meta-pattern (ambiguity-as-first-class-output-content) earns naming

The pattern was implicit across multiple inquiries but never named as a transferable principle. Naming it preserves the substantive insight for future audits on other discipline-output meaning-layer questions:

- Cross-domain validation (formal logic UNDETERMINED ≠ UNCERTAIN) confirms the distinction is structurally real, not project-specific.
- The discrimination criterion (commitment-with-confidence-caveat vs refusal-to-commit-due-to-perceived-openness) is operationally testable on candidate output content.
- The pattern composes with prior patterns: it sits alongside the "intentional-under-specification-as-process-layer-permission" pattern (from `2026-06-06_16-27`) and the "meaning-layer-as-discrimination-principle-set" pattern (from `2026-06-06_18-21`) — three meta-patterns for meaning-layer discipline-output audits.

## Open Questions

### Monitoring

- Whether the 4-shape answer space (identified-ambiguity / confident commitment / hedged commitment / explicit-empty) is sufficient as Bootstrap-state, or whether sub-shapes emerge as Early Operation accumulates empirical evidence.

- Whether the emission-emphasis-by-consumer commitment is operationally clean — whether Substrate-MQs reliably emit with ambiguity-list emphasis and Intra-articulate-MQs reliably emit with tentative-commitment emphasis across multiple LLM invocations of the same task statement.

### Blocked

- A structural-layer rendering spec for the 4-shape answer space is blocked on `cognitive_harness/articulate-simple/` being scaffolded (the implementation-scaffolding gap noted in prior `2026-06-06_18-21` finding).

### Research Frontiers

- Whether the ambiguity-as-first-class-output-content meta-pattern applies cleanly to other cognitive_harness discipline-outputs. The pattern was named based on Meta-question's instantiation; cross-discipline transfer is plausible but not confirmed. A future inquiry on another discipline's output (e.g., sensemaking's anchor extraction, or surfacing's relevance-attribution) could test the pattern's generality.

- Whether the verdict's preserve-name decision will hold up empirically. Over time, if "Meta-question" feels increasingly inaccurate as the operation's work surfaces ambiguity-identification more prominently, a future inquiry may reach a different rename verdict.

### Refinement Triggers

- If the user explicitly chooses to rename to "Meta-ambiguity" after seeing this finding's substance, the verdict's name-preservation reasoning is overridden by user-respect; the rename COULD becomes the operative choice.

- If empirical evidence at Early Operation shows that LLMs systematically struggle to differentiate identified-ambiguity from hedged commitment (treating them as interchangeable), the determination criterion may need to be specified earlier than Bootstrap-state defers it.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
i have another take on MQs i think instead of meta questions, we can actually list the strong meta  ambiguities? do you think this is better framing? structural ambiguities, relational , intent ambiguities etc..


i feel like this is a better fit

lets dive deep (meaing layer)
```

</details>
