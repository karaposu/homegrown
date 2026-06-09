---
status: active
model: claude-opus-4-7[1m]
effort: unknown
---

# Finding: Loop Diagnose — Itemize Default-Split Was Authored at Sensemaking and Never Caught by Critique

*This is a LOOP_DIAGNOSE diagnostic finding per the protocol at `cognitive_harness/protocols/loop_diagnose.md`. Output follows the protocol's Step 4 required schema: Correction Chain Summary → Failure Hypotheses → Failure Attribution Summary → Maintenance Candidates → Diagnostic Verdict. Hypothesis numbering: H1 = sensemaking-side root + mechanism; H2 = critique-side dimension absence + sub-mechanisms; H3 = surfacing-side upstream enabler; H4 = corrected-loop structural blind-spot acknowledgement. Protocol guardrails honored: 17-01 is comparative evidence not ground truth; mixed attribution; narrow maintenance candidates with evaluation gates; broad protocol rewrites deferred until ≥5-10 instances.*

## Question

From `_branch.md`:

**Question.** Given the weak prior inquiry at `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/` (which authored "split the task statement into distinct atomic items" as the Itemize description), the human correction (the user's message that triggered the 17-01 refinement), and the later improved inquiry at `devdocs/inquiries/2026-06-03_17-01__task_define_itemize_refinement/`, what did the prior MVLw loop likely miss, why did critique in particular not catch it, what did the 17-01 critique reject and was the default-split direction even on its radar, and what maintenance candidates follow?

**Goal.** Evidence-backed failure hypotheses with honest confidence; mixed attribution (failure may span multiple disciplines + the loop's framing); narrow maintenance candidates with evaluation gates per LOOP_DIAGNOSE Step 5; no broad protocol rewrites from a single correction chain.

## Finding Summary

- **Root location:** the harmful phrasing "split the task statement into distinct atomic items (1 or more)" first appeared at **15-39 sensemaking SV6 item 2**. Upstream enabler: 15-39 surfacing item A2 listed the five operations as ONE territorial row with one combined relevance tag, generating no per-operation frontier flag.

- **Mechanism (H1):** **name-vs-meaning conflation in sensemaking's A8 Load-bearing concept test refinement.** The refinement's test target verified user-language alignment of NAMES — the LLM's operation NAMES matched the user's verbatim choices — but did NOT interrogate the LLM-auto-completed MEANINGS for those user-named operations. The user said the name "Itemize" verbatim; the LLM auto-completed the mechanism "split into distinct atomic items" without any test asking whether that mechanism matched user intent for the named operation. **Confidence: HIGH** (4 converging artifacts).

- **Why critique missed (H2):** dimension absence — 15-39 critique's 12 evaluation dimensions had NONE that probed per-operation verb-meaning against authored text. Two operational sub-mechanisms compounded the miss:
  - (a) Phase 1 *"Unexplored region"* deferral as **category-error**: critique noted *"edge cases of Itemize (statement that's ambiguous between 1-item and N-items) — structural-layer concern, properly deferred"* — but the 1-vs-N **default direction** is meaning-layer (it commits the operation's identity). Critique saw the territory and mis-categorized.
  - (b) Dim 12 recursion-fitness **near-miss**: applied Itemize to the inquiry's Source Input and got *"yields 1 item"* — but used the LLM's **intuitive reading** of Itemize, not the **authored P1 description**. The authored verb literally applied would have produced 11+ items. The evidence for the harm was IN critique but unrecognized.
  - **Confidence: HIGH.**

- **17-01 critique cross-check (H4):** the default-split direction was **NOT** among 17-01 critique's 10 dimensions' rejections (0 KILLs; 1 optional textual refine). This is a **structural property of corrective inquiries**, not a failing of 17-01 — corrected-loop critique evaluates the FIX, not the original miss; the rejected direction (default-split) isn't a candidate in its candidate-set. The catch must happen at the original-loop critique. **Confidence HIGH for the property statement.**

- **Surfacing upstream enabler (H3):** 15-39 surfacing item A2 bundled the 5 operations as ONE row; no per-operation frontier flag generated. Contributory but not load-bearing — sensemaking could have generated per-operation pairs from its own commitment-set without per-operation flags from surfacing. **Confidence: MED.**

- **Gap is STRUCTURAL** (not accidental). Sensemaking spec's A8 refinement note has a specific text target (user-language-alignment of TERMS); meaning-alignment for user-named operations is not in the test. Filling the gap requires structural amendment.

- **Three narrow maintenance candidates** with retroactive + prospective evaluation gates:
  - **MC1 (PRIMARY)** — sensemaking spec: extend the A8 Load-bearing concept test refinement with a sub-aspect for user-named operations whose mechanism is LLM-authored. Test predicate: *"is the authored mechanism description user-intended for this operation name, or is it an LLM intuitive default that may misalign?"* Retroactive gate HIGH (would have fired at 15-39).
  - **MC2 (COMPLEMENTARY)** — td-critique spec: extend Phase 0 Project-specific risk dimension check with a documented axis *"Per-operation verb-meaning interrogated against authored text not LLM intuition"* for multi-operation discipline inquiries. Prosecution applies authored text literally to Source Input; divergence from intuitive reading triggers REFINE. Retroactive gate HIGH (would have triggered prosecution on Itemize at 15-39).
  - **MC3 (LIGHTER)** — surfacing spec: refinement note for discipline-design inquiries with user-named operation sets: territory decomposes the set into per-operation items each generating its own frontier flag. Lighter priority; defer until MC1+MC2 retrospective application shows gaps it would close.

- **Pattern claim** (with bounded confidence): the loop has a structural gap at the per-operation verb-meaning level for discipline-design inquiries with user-named operations. **MED confidence** based on 2 instances of the same loop-failure shape (11-46 LOOP_DIAGNOSE on neighbor-naming + this LOOP_DIAGNOSE on default-direction). Per LOOP_DIAGNOSE Step 5 guardrail, narrow maintenance candidates only; broad protocol rewrites deferred until ≥5-10 instances. **Promotion criterion:** a 3rd LOOP_DIAGNOSE chain producing the same shape raises confidence to HIGH.

- **Diagnostic verdict: ACTIONABLE.** Implement MC1 + MC2 as direct spec edits; defer MC3 until prospective evaluation gates fire on MC1+MC2.

## Finding

The user invoked LOOP_DIAGNOSE on the 15-39 → user-correction → 17-01 correction chain with specific focus on three questions: where (which discipline and what mechanism) the bad Itemize phrasing was rooted in the prior loop; why critique did not catch it; and whether the default-split direction was among the rejections in the 17-01 corrected-loop critique. The user also expressed a hypothesis worth testing directly — *"i am feeling like critique is not doing enough to catch these"* — naming critique as the primary suspect.

Reading the 15-39 archived discipline outputs in evidence-trail order produces a clear chronology of how the bad phrasing entered and survived through the loop, and the analysis must be honest about whether the user's hypothesis (critique as primary suspect) is supported by the evidence.

### 1. The chronology — where the bad phrasing first appeared

The 15-39 inquiry was created to define **Task-Define**, a new lightweight discipline replacing the prior Inquiry-Elaboration arc. The user's framing named five operations the discipline performs (*"Expand task definition by, ,MultiScope, Deconstruct, Itemize,"* across the initial invocation, plus Rephrase and Meta-question accepted via the alignment exchange). The user named the operations but supplied no mechanism descriptions for them. The auto-completion of the mechanisms was the LLM's responsibility.

15-39 **surfacing** treated those five operations as **one territorial item**: surfacing's Region A item A2 reads *"the five operations: Itemize, Deconstruct, MultiScope, Rephrase, Meta-question"* — listed as ONE row with one combined "core / HIGH" relevance tag. Among surfacing's 9 frontier flags F1-F9, none asks *"what does Itemize MEAN?"* or *"what does Deconstruct MEAN?"* — F5 addresses Task-Define's overall verb (expand vs define), F3 addresses operation ordering, F2 addresses the Meta-question canonical set, but per-operation verb-meanings have no frontier flag.

15-39 **sensemaking** then produced the first authored statement of Itemize's mechanism, in SV6 item 2 verbatim: *"Itemize — split the task statement into distinct atomic items (1 or more)."* The parenthetical "(1 or more)" acknowledged the single-item case as an exception; the verb "split" set the default direction. This is the **root location** of the harmful phrasing.

Crucially, sensemaking's 10 ambiguity-collapse pairs A1-A10 addressed **Task-Define-as-a-whole**: A1 the verb-meaning of Task-Define (expand vs define); A2 lightweight enforcement; A3 the meta-question canonical set; A4 the handoff signal; A5 the pipeline position; A6 input contract cardinality; A7 NOT-list scope; A8 the load-bearing concept test (which became the structural locus of the failure — see §2); A9 specific-vs-pattern cue; A10 self-reference. **None of A1-A10 specifically interrogated per-operation verb-meanings** for Itemize, Deconstruct, MultiScope, Rephrase, or Meta-question. The per-operation meanings were auto-completed by the LLM and carried forward unchallenged.

15-39 **innovation** formalized SV6 item 2 into the P1 piece's per-operation paragraph: *"Itemize — input: the raw task statement. Mechanism: split the statement into distinct atomic items, where each item is one coherent ask. A statement that bundles multiple asks (e.g., 'design X and also document Y') yields multiple items; a statement that's already a single ask yields one item."* The default-split bias persisted; the single-item case was treated as the structural exception ("already a single ask"); the multi-ask case was treated as the structural default ("bundles multiple asks"). Innovation's piece-level Inversion at P1 inverted the **intra-discipline ordering**, not the per-operation verb-meaning — addressing a different axis.

15-39 **critique** ran 12 evaluation dimensions over the design (self-containment / NOT-list intrinsic grounding / perception-action split / lightweight stance enforcement / user-language alignment / meaning-layer scope discipline / from-scratch consistency / open-with-extension preservation of lightweight / coherence with project architecture / coverage of 8 observation targets / cross-runner generalization / recursion fitness). **None of the 12 dimensions explicitly probed per-operation verb-meaning against the authored text.** The bad phrasing reached the finding's §2 Itemize section unflagged. The user's later correction — *"u said... Itemize — split the task statement into atomic items. But we should be extremely careful about itimize, because for the most part even task can have different examples definitions they are contrubiting to same meaning layer and it is part of one task"* — was what eventually surfaced the harm.

### 2. The mechanism that produced the unchallenged adoption (H1)

The proximate mechanism is **name-vs-meaning conflation in sensemaking's A8 Load-bearing concept test refinement**.

The A8 refinement note (at Phase 3 of `cognitive_harness/sense-making/references/sensemaking.md`) is supposed to test load-bearing concepts that have been stabilized in earlier Sense Versions. Its illustrative list does mention *"newly-coined noun phrases or operation names treated as stable in subsequent Sense Versions"* — so user-named operations are within its scope. But the test target is *"user-language alignment"* — does this term match the project's actual vocabulary and the user's language. For Itemize specifically, the A8 result at 15-39 reads *"Itemize / Deconstruct / MultiScope — user-chosen verbatim in the original /MVLw invocation. PASS."*

The test verified that the NAME "Itemize" appeared verbatim in the user's invocation. It did NOT verify that "split into distinct atomic items" — the auto-completed mechanism description — matched the user's intent for that named operation. The user said the name; the LLM filled in the meaning; A8 PASSed on name-alignment and treated the PASS as if it covered meaning-alignment.

This is the structural absence: A8 exists, has rules, has an illustrative list, and has a test predicate — but the test predicate's target is alignment-of-names, not alignment-of-meanings for user-named operations whose mechanism descriptions the LLM auto-completes. The rule's text reads *"Does this term match the project's actual vocabulary and the user's language?"* — the target is the term, not the meaning. Filling the gap requires structural amendment to the test target.

Why this is the load-bearing mechanism rather than "LLM intuitive default" or "coverage gap" at higher abstractions: the A8 refinement is the most specific and most proximate place where the test SHOULD have fired. If A8's test target had included meaning-interrogation, the bad phrasing would have been challenged at sensemaking-time, before innovation formalized it. Confidence in this attribution is HIGH because four artifacts converge: the SV6 line; the A8 PASS result; the user's correction text explicitly interrogating the authored mechanism (*"lets refine this and check if 'split the statement into distinct atomic items' is actually harmful or not"*); and the 17-01 sensemaking K1 empirical-test repair (which demonstrated the harm by literally applying the authored description to 15-39's Source Input — exactly the test that A8 should have prompted).

### 3. Why critique missed it (H2)

The user named critique as the primary suspect. The diagnostic tested this hypothesis honestly: yes, critique IS part of the failure surface, but with three layered sub-causes.

**Primary sub-cause: dimension absence.** Critique can only evaluate dimensions it constructs. 15-39 critique's 12-dimension list (extracted from sensemaking's commitments via Phase 0 Dimension Construction) did not contain a dimension for per-operation verb-meaning probing against authored text. This is the base cause: if critique HAD the right dimension, it would have constructed prosecution faithfully; without the dimension, no prosecution against per-operation meanings happened.

**Secondary sub-cause: Phase 1 "Unexplored region" deferral as category-error.** 15-39 critique's Phase 1 explicitly noted *"edge cases of Itemize (statement that's ambiguous between 1-item and N-items) — structural-layer concern, properly deferred."* Critique SAW the 1-vs-N ambiguity and deferred it. The deferral was a category error: the 1-vs-N **default direction** is a meaning-layer commitment — it determines whether the operation IS "perceive-then-split-if-warranted" or "split-by-default" (these are different operations). The exact runtime decision rule (HOW the LLM determines 1-vs-N in practice) may be a structural-layer detail, but the DEFAULT DIRECTION is meaning. Critique mis-categorized the question and deferred a meaning-layer concern to structural-layer.

**Tertiary sub-cause: Dim 12 recursion-fitness near-miss.** 15-39 critique's Dim 12 (recursion fitness) applied Itemize to the inquiry's own Source Input and produced the verdict *"Itemize: the statement is one ask (define a discipline) — yields 1 item."* This was the closest near-miss in the entire critique. The test used the LLM's **intuitive reading** of Itemize, which happened to yield "1 item." But the **authored P1 description** ("split into distinct atomic items, where each item is one coherent ask") applied LITERALLY to the same Source Input — a 3-message framing with eleven specification-clauses — would have produced 11+ items. The divergence between intuitive (1) and literal (11+) was the evidence for the harm; critique had the evidence but did not recognize it because the test used unfaithful reading.

The composite picture: critique perceived the territory, mis-categorized it as structural, and used unfaithful reading even when it had the harm-evidence in hand. The base cause is dimension absence; the operational sub-causes are how the base cause manifested in 15-39 critique's actual artifact. Confidence is HIGH because five artifacts converge — the 12-dimension list itself, the Phase 1 verbatim note, the Dim 12 verbatim verdict, the user's explicit critique-targeting signal, and 17-01 critique's contrasting dimension list (which does contain a "structural test soundness" dimension that probes authored text against edge cases — the type of dimension that was missing in 15-39).

### 4. The 17-01 corrected-loop cross-check (H4)

The user explicitly asked whether the default-split direction was among 17-01 critique's rejections. The answer is **NO**, and the structural reason is worth being precise about.

17-01 critique evaluated the refined design (default-keep-together) across 10 dimensions: self-containment / user-language alignment / asymmetric-failure direction soundness / structural test soundness / coherence with prior commitments / multi-detection vs cross-item interpretation distinction airtight / load-bearing single-item case / refinement scope discipline / authorability / recursion fitness. The verdict was 0 KILLs + 1 OPTIONAL textual refinement. None of the 10 dimensions adjudicated the rejected direction (default-split); the candidate-set was the refined design + alternatives to it.

This is **a structural property of corrective inquiries, not a failing of 17-01**. Critique's candidate-set is constructed from the present design + alternatives that could replace it; the pre-correction state (default-split) is upstream of the candidate-set, structurally not a candidate to evaluate. Asking 17-01 to "rediscover the default-split direction" would mean asking it to evaluate something not in its candidate-set — structurally impossible.

This matters for the diagnostic's recommendations: **the catch must happen at the ORIGINAL critique, not the corrected critique.** Which is exactly what the maintenance candidates address — MC1 fixes original sensemaking (catch at authoring time); MC2 fixes original critique (catch at evaluation time). The corrected critique remains a useful evaluator of the corrected design's quality, but it cannot serve as a backstop for original-loop misses.

The user's hypothesis ("critique is not doing enough to catch these") thus receives a layered answer: yes for the ORIGINAL critique (H2 — dimension absence at 15-39); no for the CORRECTED critique (H4 — structural property; not a failing).

### 5. The surfacing-side upstream enabler (H3)

15-39 surfacing's item A2 bundled the 5 operations as ONE row with one combined relevance tag. This is an upstream enabler: with per-operation frontier flags (one per operation), sensemaking would have been compelled to address per-operation verb-meanings explicitly. Without them, sensemaking's commitment-set was at the discipline-as-whole level.

However, surfacing's bundling is **contributory but not load-bearing**. Sensemaking COULD have generated per-operation ambiguity-collapse pairs from its own commitment-set — the 5 operation names were present in sensemaking's anchor list. The proximate cause is sensemaking A8's incomplete test target (H1); surfacing's bundling made the omission easier but did not determine it. Confidence is MED, reflecting the contributory-vs-load-bearing distinction.

This is why MC3 (the surfacing-side refinement) is the **lighter priority** of the three maintenance candidates: it makes-it-easier-to-not-miss at surfacing-time, but if MC1 fires correctly even when surfacing bundles operations, MC3's marginal contribution is small. MC3 is appropriate to implement if MC1+MC2 prospective evaluation gates show gaps that surfacing-side decomposition would close.

### 6. The pattern claim and the structural-gap framing

This is the second LOOP_DIAGNOSE chain in the project's history to produce the same shape: authored-in-sensemaking → not-caught-by-critique. The first was `devdocs/inquiries/2026-06-01_11-46__loop_diagnose__inquiry_elaboration_self_containment_failure_chain/finding.md`, which diagnosed a neighbor-naming-in-NOT-list miss at 15-39 sensemaking's predecessor inquiry. The content differs (neighbor-naming vs default-direction); the loop-failure shape is identical (sensemaking authored unchallenged; critique's dimension-set didn't include the catch).

Two instances of identical shape support a **structural gap** claim at MED confidence. Per the LOOP_DIAGNOSE protocol's Step 5 guardrail (*"do not propose broad fundamentals rewrites from one weak correction chain"*), broad protocol rewrites are deferred until ≥5-10 instances. The current diagnostic stays narrow: three additive spec refinements with retroactive + prospective evaluation gates. The promotion criterion is specific: a 3rd LOOP_DIAGNOSE chain producing the same shape raises confidence to HIGH and justifies additional candidates beyond the current 3 (potentially a protocol-level change). Until then, the narrow refinements are sufficient.

## Failure Attribution Summary

| # | Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---|---|---|---|
| **H1** | Sensemaking (15-39) | Name-vs-meaning conflation in A8 Load-bearing concept test (test verified NAMES not MEANINGS for user-named operations) | strong | HIGH | MC1 — sensemaking spec extension |
| **H2** | Critique (15-39) | Dimension absence (no per-operation verb-meaning probe) + Phase 1 "Unexplored region" deferral as category-error + Dim 12 intuitive-vs-authored near-miss | strong | HIGH | MC2 — td-critique spec extension |
| **H3** | Surfacing (15-39) | Territory-decomposition gap (5 operations bundled as ONE row; no per-operation frontier flag); upstream enabler, not proximate cause | medium | MED | MC3 — surfacing spec refinement note (LIGHTER priority) |
| **H4** | Critique (17-01, corrected-loop) | Structural property — corrected-loop critique cannot rediscover prior misses because the rejected direction isn't in its candidate-set | strong | HIGH | NONE — acknowledge in verdict; not a fix (the catch must happen at the original-loop critique, which MC2 addresses) |

## Failure Hypotheses (detail)

### Hypothesis H1: Sensemaking authored "split into distinct atomic items" via name-vs-meaning conflation in A8 Load-bearing concept test

**Affected stage:** Sensemaking (15-39).

**Shortcoming type:** Name-vs-meaning conflation in the A8 refinement note. The note's test target verifies user-language alignment of NAMES; it does not interrogate the LLM-auto-completed MEANINGS for user-named operations.

**Evidence from prior inquiry:**
- 15-39 sensemaking SV6 item 2, verbatim: *"Itemize — split the task statement into distinct atomic items (1 or more)."*
- 15-39 sensemaking A8 result, verbatim: *"Itemize / Deconstruct / MultiScope — user-chosen verbatim in the original /MVLw invocation. PASS."*
- The PASS verified the NAME "Itemize" was user-verbatim; the test did NOT verify the auto-completed mechanism description.

**Evidence from human correction:** the user explicitly interrogated the authored mechanism description: *"lets refine this and check if 'split the statement into distinct atomic items' is actually harmful or not."*

**Evidence from corrected inquiry:** 17-01 sensemaking K1 (empirical-test verdict) demonstrated harm by literally applying the authored description to 15-39's Source Input — exactly the test that A8 should have prompted at 15-39 sensemaking-time.

**Confidence:** HIGH.

**Why not stronger:** four converging artifacts; corrected inquiry repairs the exact failure with the same diagnostic logic.

**Maintenance candidate:** MC1.

### Hypothesis H2: Critique failed via dimension absence + Phase 1 deferral category-error + Dim 12 intuitive-vs-authored near-miss

**Affected stage:** Critique (15-39).

**Shortcoming type:** Dimension absence (base cause) + two operational sub-mechanisms.

**Evidence from prior inquiry:**
- 15-39 critique's 12-dimension list (none probing per-operation verb-meaning).
- 15-39 critique Phase 1 verbatim: *"Unexplored region: edge cases of Itemize (statement that's ambiguous between 1-item and N-items) — structural-layer concern, properly deferred."* The deferral was a category error.
- 15-39 critique Dim 12 verbatim: *"Itemize: the statement is one ask (define a discipline) — yields 1 item."* The intuitive verdict; the authored description applied literally would have produced 11+ items.

**Evidence from human correction:** *"i am feeling like critique is not doing enough to catch these. so focus on what critique rejected and if this was even among them or not."*

**Evidence from corrected inquiry:** 17-01 critique's 10-dimension list contains a "structural test soundness" dimension probing the authored test — the dimension type that was missing in 15-39.

**Confidence:** HIGH for the dimension-absence base cause + both sub-mechanisms.

**Why not stronger:** five converging artifacts.

**Maintenance candidate:** MC2.

### Hypothesis H3: Surfacing bundled the 5 operations as ONE item (upstream enabler)

**Affected stage:** Surfacing (15-39).

**Shortcoming type:** Territory-decomposition gap.

**Evidence from prior inquiry:** 15-39 surfacing item A2 listed the five operations as ONE row with one combined "core / HIGH" tag; 15-39 surfacing's 9 frontier flags F1-F9 contain no per-operation verb-meaning flag.

**Evidence from human correction:** indirect — the correction targets the sensemaking-side outcome; the surfacing-side bundling is upstream.

**Evidence from corrected inquiry:** this LOOP_DIAGNOSE inquiry's surfacing artifact demonstrates per-operation surfacing is feasible.

**Confidence:** MED. Contributory, not load-bearing — sensemaking could have generated per-operation pairs from its own commitment-set without per-operation frontier flags from surfacing.

**Maintenance candidate:** MC3 (LIGHTER priority).

### Hypothesis H4: 17-01 corrected-loop critique structural blind-spot (acknowledge-only)

**Affected stage:** Critique (17-01, corrected-loop).

**Shortcoming type:** Structural PROPERTY — corrected-loop critique cannot rediscover prior misses because the rejected direction isn't in its candidate-set. Intrinsic to corrective inquiries.

**Evidence from prior inquiry:** N/A.

**Evidence from human correction:** the user explicitly asked the question this hypothesis answers.

**Evidence from corrected inquiry:** 17-01 critique's 10-dimension list evaluates the refined design; the default-split direction is not in the candidate-set.

**Confidence:** HIGH for the property statement.

**Why not stronger:** the property is intrinsic; not subject to stronger confidence.

**Maintenance candidate:** NONE — acknowledge in verdict reasoning; the catch must happen at the original-loop critique (which MC2 addresses).

## Next Actions

### MUST

- **What:** Implement MC1 (sensemaking spec extension) — append the user-named-operation auto-completed-meaning test sub-aspect to the existing A8 Load-bearing concept test refinement note at `cognitive_harness/sense-making/references/sensemaking.md`. The exact text to append (in the spec's blockquote form):

  > *Sub-aspect — User-named-operation auto-completed-meaning test (applies when the user names an operation but supplies no mechanism description; the LLM auto-completes the meaning).* When a load-bearing concept is a USER-NAMED OPERATION whose mechanism description is LLM-authored (the user named the operation but did not define its mechanism), the ambiguity-collapse pair MUST interrogate the authored meaning against user intent. Test predicate: *"is the authored mechanism description (e.g., 'split into distinct atomic items' for the user-named 'Itemize') user-intended for this operation name, or is it an LLM intuitive default that may misalign with the user's intent for the named operation?"* Confidence determined by (a) direct user empirical test when possible; (b) fallback test against the inquiry's own Source Input — apply the authored mechanism literally; if literal application diverges from intuitive expectations, the authored meaning may misalign. For Source Inputs with insufficient structural complexity to reveal divergence (rare; e.g., truly single-clause specifications), fallback = compare the authored mechanism against project-vocabulary norms for similar operations; flag if unattested. Verifying user-language alignment of the NAME does not satisfy this sub-aspect; the test target is the auto-completed MEANING.
  - **Who:** spec editor (anyone with edit access).
  - **Gate:** condition-bound — implement as direct spec edit.
  - **Why:** primary load-bearing fix at the root locus (sensemaking); retroactive evaluation gate HIGH (applied to 15-39, the sub-aspect would have fired on Itemize).

- **What:** Implement MC2 (td-critique spec extension) — append the per-operation verb-meaning documented axis to the existing Project-specific risk dimension check refinement at `cognitive_harness/td-critique/references/td-critique.md` (Phase 0 Dimension Construction). The exact text to append:

  > *Documented axis — Per-operation verb-meaning interrogated against authored text not LLM intuition.* When the inquiry's deliverable defines a multi-operation discipline (a discipline with multiple named operations like Itemize / Deconstruct / MultiScope), the dimension list MUST include "per-operation verb-meaning probe." Prosecution applies the authored mechanism description LITERALLY to the inquiry's own Source Input (or to a sibling test case from the inquiry's evidence base) and compares the literal verdict to any intuitive-reading verdicts produced elsewhere in the critique (e.g., a recursion-fitness check). Divergence between literal-application and intuitive-application triggers REFINE on the authored mechanism description, with constructive output specifying which authored phrase produced the divergence.
  - **Who:** spec editor.
  - **Gate:** condition-bound — implement as direct spec edit, concurrent with MC1.
  - **Why:** defense-in-depth at critique-time; catches misses MC1 misses; retroactive evaluation gate HIGH.

### COULD

- **What:** Implement MC3 (surfacing spec refinement note) — add a refinement note at `cognitive_harness/surfacing/references/surfacing.md` near §2.1 Item-enumeration:

  > *Refinement note — Per-operation decomposition for discipline-design inquiries with user-named operation sets.* When a discipline-design inquiry's user-framing names a SET of operations and does not supply mechanism descriptions for those operations, surfacing's territory should decompose the operation set into per-operation items, each generating its own frontier flag. Treating the set as ONE territorial row bundles multiple load-bearing concepts under a single flag, deferring per-operation meaning-interrogation to sensemaking which may not address it.
  - **Who:** spec editor.
  - **Gate:** condition-bound — defer until MC1+MC2 prospective evaluation gates have fired across ≥2 multi-operation discipline-design inquiries AND retrospective analysis shows MC1+MC2 alone would have caught the cases. Implement only if gaps remain.
  - **Why:** make-it-easier-to-not-miss at surfacing-time; complementary to MC1, not a substitute.
  - **Depends-on:** MUST items MC1 + MC2 + 2 prospective inquiries. GATED.

### DEFERRED

- **What:** Promote the pattern-claim from MED to HIGH confidence and consider protocol-level changes.
  - **Gate:** condition-bound — a 3rd LOOP_DIAGNOSE chain produces the same authored-in-sensemaking → not-caught-by-critique shape.
  - **Why (if revived):** sufficient evidence to consider broader changes beyond the current 3 narrow MCs (e.g., a protocol-level rule about per-operation verb-meaning interrogation).

- **What:** Investigate whether the structural-gap pattern generalizes beyond user-named operations to other load-bearing concepts where naming precedes meaning (user-named protocols; user-named anchors; user-named runners).
  - **Gate:** condition-bound — observable when ≥1 LOOP_DIAGNOSE chain produces a similar pattern in a non-operation context.
  - **Why (if revived):** would suggest a project-wide rule about user-named-meaning-auto-completion.

## Reasoning

### Why sensemaking is primary attribution rather than critique

The user's hypothesis named critique as the primary suspect. The diagnostic tested this and found: critique IS part of the failure surface (H2 with HIGH confidence) but NOT the primary locus. The primary locus is sensemaking (H1 with HIGH confidence) because the bad phrasing was AUTHORED at sensemaking SV6 — the wording entered the loop's record at sensemaking-time. Critique inherited the authored phrasing as a candidate; its failure was not constructing a dimension that would have flagged the authored phrasing as misaligned with user intent. If critique HAD the right dimension, prosecution would have run faithfully — but the right dimension was absent.

The structural priority is: catch at authoring (sensemaking) is better than catch at evaluation (critique) because catch at authoring prevents the bad phrasing from being formalized; catch at evaluation requires the bad phrasing to already exist. MC1 catches at authoring; MC2 catches at evaluation; both are warranted but MC1 is primary.

### Why "dimension absence" is the right framing for critique's failure rather than "negligence" or "rubber-stamping"

Critique can only evaluate dimensions it constructs. The dimensions are extracted from sensemaking's commitments via Phase 0 Dimension Construction. If sensemaking's commitment-set doesn't include per-operation verb-meaning commitments (which it didn't, because A8 didn't interrogate them), critique's Phase 0 dimension extraction won't produce a per-operation-verb-meaning dimension. The downstream miss is structural, not a quality failing of the critique work itself.

The 2 operational sub-mechanisms (Phase 1 deferral as category-error; Dim 12 intuitive-vs-authored near-miss) are how the structural absence manifested in the actual critique artifact. The deferral was a category error — critique perceived the territory but mis-categorized a meaning-layer question as structural. The Dim 12 near-miss was a faithful-reading failure — critique had the evidence in hand but used unfaithful reading.

These sub-mechanisms could individually be fixed by procedural rules (e.g., "do not defer 1-vs-N to structural when default-direction is in scope"), but the deeper fix is at sensemaking — adding the right commitment so the right dimension gets constructed.

### Why the 17-01 corrected-loop blind-spot is a PROPERTY not a FAILING

Corrected-loop critique evaluates the present design against criteria derived from the present design's commitments. The pre-correction state (the rejected direction) is upstream of those commitments; it cannot appear in the candidate-set. This is the structural property — corrective inquiries cannot retroactively catch their predecessor's misses because the predecessor's commitment isn't a candidate to evaluate.

The user's question ("what 17-01 critique rejected and was the default-split among them") implicitly assumed corrected-loop critique could reject the default-split. The diagnostic's answer clarifies the structural fact: no, and the catch must happen at the ORIGINAL critique, which is exactly what MC2 addresses. Framing this as a property rather than a failing is structurally correct, not exculpatory — corrective inquiries are useful evaluators of the corrected design's quality, not backstops for original-loop misses.

### Why the maintenance candidates are narrow rather than a protocol rewrite

The LOOP_DIAGNOSE protocol's Step 5 guardrail is explicit: *"do not propose broad fundamentals rewrites from one weak correction chain. Do not promote LOOP_DIAGNOSE into a standalone skill or discipline until 5 to 10 diagnostic MVLw findings show a stable internal method."* This inquiry plus 11-46 is 2 instances; the structural-gap claim's confidence is MED, not HIGH. Broad rewrites are premature.

The three narrow MCs (additive sub-aspects to existing refinement notes in existing spec sections; no new files; no restructuring) honor the guardrail. They address the diagnosed root cause (sensemaking A8's incomplete test target) and the diagnosed critique-side gap (no per-operation verb-meaning dimension), and they make-it-easier at surfacing as a lighter complement. If MC1+MC2 prospective evaluation gates fire effectively over the next 2 multi-operation discipline-design inquiries, the narrow refinements are sufficient. If they don't, MC3 implementation and/or a 3rd LOOP_DIAGNOSE chain would warrant broader consideration.

### Why pattern-claim is MED and not HIGH at 2 instances

Two instances of identical loop-failure shape (11-46 neighbor-naming + this default-direction) support a structural-gap claim at MED. They are not enough to support HIGH, which would require either ≥3 instances OR multi-source convergence beyond the loop-internal evidence. The 17-01 corrected critique's content provides comparative evidence (17-01's "structural test soundness" dimension is the type that was missing in 15-39), but corrected-inquiries are explicitly comparative-not-ground-truth per the LOOP_DIAGNOSE protocol's guardrails.

A 3rd LOOP_DIAGNOSE chain producing the same shape would raise the claim to HIGH and would justify additional candidates. The promotion criterion is preserved as a refinement trigger.

## Open Questions

### Monitoring

- **Observable after MC1 + MC2 are implemented and the next ≥2 multi-operation discipline-design inquiries run.** Does MC1's sub-aspect fire on at least one per-operation verb-meaning at sensemaking-time (target: ≥1/2)? Does MC2's dimension catch at least one authored-vs-intuited divergence at critique-time (target: ≥1/2)?
- **Observable across LOOP_DIAGNOSE chains.** Does a 3rd correction chain produce the same authored-in-sensemaking → not-caught-by-critique shape? If yes, promote pattern-claim from MED to HIGH.

### Refinement Triggers

- **If MC1's prospective gate yields 0/2 catches** over the next 2 multi-operation discipline-design inquiries, the sub-aspect's fire-condition needs investigation — possibly the test predicate needs sharpening or the gate needs to allow more cases.
- **If MC2's prospective gate yields 0/2 catches**, the dimension may need a more concrete prosecution recipe specifying exactly what counts as "applying the authored text literally."
- **If MC1 + MC2 each yield 1/2 catches but the catches don't overlap** (different cases), the defense-in-depth is working as intended; both refinements are independently justified.
- **If a 3rd LOOP_DIAGNOSE chain shows the same shape**, implement MC3 immediately and consider whether the surfacing-side per-operation decomposition refinement should extend to additional contexts (user-named protocols; user-named anchors).

### Research Frontiers

- **Whether the loop's structural gap generalizes beyond user-named operations** to other load-bearing concepts where naming precedes meaning. The pattern at MED confidence applies to user-named-operations specifically; a 3rd instance in a different load-bearing-concept category would suggest a broader pattern that might warrant protocol-level change rather than per-discipline spec refinements.
- **Whether the corrected-loop critique blind-spot (H4) has any addressable form.** Currently acknowledged as a structural property; investigation into whether a "retrospective dimension" — one that explicitly examines the prior loop's authored text for directional commitments NOT-rejected by the current critique — could fill the gap. Out of scope here; flagged as research frontier.

## Diagnostic Verdict

**Overall: ACTIONABLE.**

- **Best-supported diagnosis:** Name-vs-meaning conflation in sensemaking's A8 Load-bearing concept test refinement (H1; HIGH confidence; multi-artifact convergence).
- **Strongest maintenance candidate:** MC1 (sensemaking-side sub-aspect amendment) — load-bearing locus is sensemaking where the bad authoring originated; retroactive evaluation gate HIGH.
- **Main uncertainty:** the pattern-claim that the loop has a structural gap at per-operation verb-meaning level is at MED confidence based on 2 instances (11-46 + this); broad protocol rewrites deferred per LOOP_DIAGNOSE Step 5 guardrail; promotion to HIGH on a 3rd instance.
- **Recommended next step:** implement MC1 + MC2 as direct spec edits to `cognitive_harness/sense-making/references/sensemaking.md` and `cognitive_harness/td-critique/references/td-critique.md`; defer MC3 until MC1+MC2 prospective gates fire over ≥2 multi-operation discipline-design inquiries; monitor for a 3rd LOOP_DIAGNOSE chain with the same shape (would promote pattern-claim to HIGH and justify MC3 + consideration of broader changes).

## Source Input

<details>
<summary>Raw user input for this LOOP_DIAGNOSE inquiry</summary>

```text
use cognitive_harness/protocols/loop_diagnose.md


in devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md we had a wrong understanding for itemize , and in devdocs/inquiries/2026-06-03_17-01__task_define_itemize_refinement/finding.md it is fixed


i would expect our MVLw loop to catch on that, I want you to focus on where (which discipline, and what mechanism) this bad idea was rooted, and also why critique did not catch that...

i am feeling like critique is not doing enough to catch these. so focus on what critique rejected and if this was even among them or not by checking devdocs/inquiries/2026-06-03_17-01__task_define_itemize_refinement/docarchive/critique.md too
```

</details>
