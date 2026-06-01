---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Loop Diagnose — IE Self-Containment Failure Chain (01-17 + 01-37 → 09-54)

## Question

The user asked what went wrong with two prior inquiry findings (`2026-06-01_01-17__inquiry_elaboration_scope_and_coverage` and `2026-06-01_01-37__inquiry_elaboration_structural_design`), given that the later `2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare` reached a different verdict — specifically that the prior findings "talked about other disciplines in IE," which violates self-containment — and pointed at surfacing as the likely failure surface with a hypothesis: *"surfacing should have check examples especially regarding discipline-creation process."* The user invoked `cognitive_harness/protocols/loop_diagnose.md` to frame the diagnostic.

**The diagnostic question:** what did the prior loops miss, where in each pipeline did the failure originate or fail to be caught, what maintenance candidates follow at N=1 chain (without broad fundamentals rewrites), and does the user's surfacing-side hypothesis survive evidence-walk?

## Finding Summary

- **The failure is a chain with a primary origin and downstream confirmation-failures, not a single-stage error.** The primary origin is **01-17 surfacing** — that stage primed the entire pipeline toward neighbor-attributed boundaries via the anatomy-canon item's gloss ("NOT-list is the border with neighbors"), tagged the routelister fix-model at sub-priority without its load-bearing intrinsic-NOT-list property, and did not surface the adjudicating self-containment memory at all. Every downstream stage (sensemaking, innovation, critique) had a check that *could* have caught the violation but each fired on the wrong axis — operating *inside* the frame surfacing primed, not *at* it. The verdict is **primary-origin in the failure-chain** (not "exact root cause" — LOOP_DIAGNOSE Step 5 forbids that at N=1 chain).

- **01-37 inherited the violation AND minted its most explicit form.** 01-37 surfacing finally surfaced the routelister fix-model at core priority but at the narrowest reading of the self-containment memory; the inherited 01-17 NOT-list was passed through verbatim without re-testing against the now-clearer model. 01-37 innovation then *newly minted* the phrase the user quoted ("each tailored; does not invoke the neighbor discipline") — that phrase is not in 01-17, it was introduced at 01-37 innovation. 01-37 sensemaking exhibited a stated-then-violated pattern: principle stated in Constraint C2 ("the spec has no outbound pointers; defines its own vocabulary; grounds each NOT-list entry intrinsically") and violated in adjacent Key Insight K3 ("§2 Components describe each phase as a tailored internal operation that does not invoke the neighbor discipline").

- **The user's surfacing-side hypothesis survives in a narrowed form.** *"Surfacing should have check examples especially regarding discipline-creation process"* is correct, with the refinement: when an inquiry's target is a **discipline artifact** (creating, refining, or restructuring one), surfacing's territory must include both (i) project memories adjudicating discipline construction (here: `feedback_disciplines_self_contained`) and (ii) existing self-contained discipline specs as **PATTERN exemplars** (glossed with their load-bearing property, not just their structural shape). The narrowing matters: most inquiries don't have discipline-class self-containment constraints, so the trigger is genuinely discipline-target-shaped, not generic.

- **Four narrow maintenance candidates follow, each gated.** **MC-A** (surfacing-side, primary): the discipline-target trigger + adjudicating-memory + self-contained-exemplar inclusion described above. **MC-B** (sensemaking-side): the Frame-exit Completeness perspective should include a structural-property check (does the produced NOT-list/Components violate any adjudicating principle?), not only the existing vocabulary-referent check. **MC-C** (critique-side): two parts — (i) when self-containment is a dimension, Phase-2 prosecution MUST include a concrete *scan-every-produced-sentence-for-neighbor-names* test, and (ii) dimension wording should not contain the thing under test (e.g., "non-overlap with neighbor's territory" should become "self-contained boundary check"; the original phrasing forces naming neighbors to test for non-overlap). **MC-D** (CONCLUDE-side): the Inherited-Commitments-Re-test must include a broader-reading test of the inherited verdict's TEXT under the self-containment principle, not only the narrowest reading. Each MC is **risk-class LOW** (small additions to specific spec files), each has a **concrete evaluation gate** observable on the next discipline-design inquiry, and each is **gated WAIT** per LOOP_DIAGNOSE Step 5 at N=1 chain.

- **Three candidate failure modes are named but NOT promoted at N=1, for the revival register.** *Priming-by-gloss* (surfacing — a surfaced item's gloss frames a structural concept; downstream stages adopt the framing without challenging it). *Self-defeating dimension* (critique — a dimension whose own wording forces the failure it should catch). *Stated-then-violated* (sensemaking — the author states a principle in one anchor and violates it in the next anchor of the same document). All three are sharper than the closest existing failure modes (Missed-relevance / Wrong-dimensions / Self-Reference Blindness) and warrant naming if they recur at N≥2.

- **Diagnostic verdict per LOOP_DIAGNOSE Step 4: PARTIAL.** The correction chain reveals likely weaknesses with strong artifact-isolated evidence (primary-origin triangulated to surfacing-01-17 via three independent observations). Source edits are gated by either N≥2 chains or by the evaluation gates firing affirmatively on the next discipline-design inquiry. *This is the protocol-faithful recommendation at N=1; the user retains override authority — approving source edits now is a legitimate decision if the user judges the artifact evidence sufficient.*

## Correction Chain Summary

**Prior path A (weak — first violation):** `devdocs/inquiries/2026-06-01_01-17__inquiry_elaboration_scope_and_coverage/`. Produced a 7-border NOT-list with each border attributed to a named neighbor discipline (`→ /sense-making`, `→ /decompose`, `→ /surfacing`, `→ /innovate`, `→ /td-critique`, `→ runner+branch_inquiry`, `→ runner-meta`).

**Prior path B (weak — inherited + extended the violation):** `devdocs/inquiries/2026-06-01_01-37__inquiry_elaboration_structural_design/`. Inherited 01-17's neighbor-attributed NOT-list verbatim AND newly minted the explicit phrase the user quoted: each Component marked *"tailored; does not invoke the neighbor discipline."*

**Corrected path:** `devdocs/inquiries/2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare/`. Adopted an output-organized self-contained design naming no other discipline anywhere; generalized the self-containment violation beyond the user's quoted phrase; renamed `why_makes_sense` → `rephrase_in_project_goal`; dropped+re-homed reference-authority.

**Human correction (the spark):**

> *"each marked 'does not invoke the neighbor discipline'? wait what? IE shouldnt know about other disciplines...it is just is to elaborate with context and multilayered understanding."*

**Human correction (this run — the surfacing-side hypothesis):**

> *"i would expect this kind of mistake to not happen, it should have been surfaced in surfacing i guess, and surfacing should have check examples especially regarding discipline-creation process..."*

**What changed from prior to corrected:** prior treated IE's NOT-list as a list of neighbor-attributed borders (each row "→ /neighbor-X"); corrected re-expressed every boundary intrinsically in IE's own terms (IE produces re-statements and framings; does not produce the inquiry's answer, a model of the problem, a partition into work-pieces, or a judgment of solutions — naming no one). The fix-model was `cognitive_harness/routelister/references/routelister.md` §1.3-§1.4 (intrinsic NOT-list + explicit self-containment property) — available in the codebase the whole time.

**Stage-name vocabulary** (used verbatim in Failure Hypotheses and Attribution Summary): `surfacing-01-17` · `sensemaking-01-17` · `innovation-01-17` · `critique-01-17` · `surfacing-01-37` · `sensemaking-01-37` · `innovation-01-37` · `critique-01-37` · `cross-stage-attribution`.

## Failure Hypotheses

### Hypothesis 1: surfacing-01-17 — priming-by-gloss + absent adjudicating memory + wrong-priority fix-model

**Affected stage:** surfacing-01-17. **Shortcoming type:** missed-relevance (specifically: surfaced relevance with wrong framing + absent project-memory).

**Evidence from prior inquiry:** `01-17/docarchive/surfacing.md` Region B item #6 anatomy gloss reads *"NOT-list is the border WITH NEIGHBORS (defines scope by exclusion)"* (priming-by-gloss). Region C item #15 (routelister) tagged "sub" priority with gloss *"self-containment + NOT-list discipline"* — missing the load-bearing property "grounds each exclusion in an intrinsic feature of the operation, NEVER by naming a neighbor." Project memory `feedback_disciplines_self_contained` is completely absent from the surfacing trace (no region, no item, no mention).

**Evidence from human correction:** the user's surfacing-side hypothesis ("surfacing should have check examples especially regarding discipline-creation process") explicitly names this stage as the likely originating surface.

**Evidence from corrected inquiry:** `09-54/docarchive/surfacing.md` Region C surfaced BOTH the memory AND routelister §1.3-1.4 at CORE priority with the sharper gloss *"NOT-list grounds each exclusion in 'an intrinsic feature of the operation,' NEVER by naming a neighbor. This is how to re-express IE's NOT-list correctly"* — direct contrast with 01-17.

**Confidence:** HIGH.

**Why not stronger:** strict N≥2 isolation requires a second discipline-design inquiry exhibiting the same surfacing-stage primer; MC-A's gate will produce that evidence if/when it fires.

**Maintenance candidate:** MC-A (primary).

**Evaluation gate:** next discipline-design inquiry's surfacing trace includes both (i) `feedback_disciplines_self_contained` AND (ii) at least one self-contained-spec exemplar with the intrinsic-pattern gloss explicitly stating its load-bearing property — both at core priority; downstream produced spec text contains zero neighbor-names.

### Hypothesis 2: sensemaking-01-17 — propagation + frame-exit aimed at the wrong axis

**Affected stage:** sensemaking-01-17. **Shortcoming type:** propagation of priming + aimed-at-wrong-axis check.

**Evidence from prior inquiry:** `01-17/docarchive/sensemaking.md` "Structural points" reads *"Neighbors fixing the borders: surfacing (draws items), sense-making (structures the problem), decompose (partitions the problem)..."* — explicit propagation of surfacing's neighbor-attribution framing. The Frame-exit Completeness perspective fired on overloaded vocabulary (understanding / decomposition / verify / elaboration referents) but did NOT fire on the NOT-list's structural property ("is the NOT-list construction itself self-contained?").

**Evidence from human correction:** the user did not flag this stage directly (they flagged the downstream symptom in 01-37).

**Evidence from corrected inquiry:** `09-54/docarchive/sensemaking.md` K1 generalized the self-containment violation beyond the user's quoted phrase; K4 named *"my 01-37 Components themselves — 'comprehend / perceive-structure / verify' — were defined by mirroring neighbor operations. Same self-containment smell one level up"* — a structural-property check sensemaking-01-17 did not run.

**Confidence:** MED-HIGH (the propagation evidence is artifact-isolated; the "aimed-at-wrong-axis" interpretation is supported but interpretive).

**Why not stronger:** the frame-exit-axis claim could be a generalizable refinement (MC-B) or a one-off; needs N≥2 to be sure the same axis-blindness recurs.

**Maintenance candidate:** MC-B.

**Evaluation gate:** next discipline-design inquiry's sensemaking frame-exit perspective explicitly checks the NOT-list / Components for structural-property violations (not only vocabulary referents).

### Hypothesis 3: innovation-01-17 — Inversion did not probe the NOT-list's load-bearing claim

**Affected stage:** innovation-01-17. **Shortcoming type:** missed-mechanism-axis (Inversion fired on object-test + mode-test but not on the NOT-list's neighbor-attribution).

**Evidence from prior inquiry:** `01-17/docarchive/innovation.md` Inversion section probed *object = request* and *perceive = not act* — but did not probe *"each border attributed to a named neighbor"* as a load-bearing claim. The NOT-list passed through as the literal text *"problem-understanding→sense-making · problem-partition→decompose · ..."* without challenge.

**Evidence from human correction:** indirect — the user caught the symptom that this Inversion-blindness allowed through.

**Evidence from corrected inquiry:** `09-54/docarchive/innovation.md` Inversion was applied at the meta-decision pieces AND the Inherited-Frame-Audit fired (catching the previously-unchallenged inherited NOT-list framing).

**Confidence:** MED.

**Why not stronger:** Inversion's axis-coverage is genuinely hard to make complete; an "Inversion must include this axis" rule risks over-specifying the mechanism. Better: downstream critique-side scan (MC-C) catches what Inversion misses.

**Maintenance candidate:** supports MC-C (downstream catch) more than a per-mechanism Inversion rule.

**Evaluation gate:** see MC-C below.

### Hypothesis 4: critique-01-17 — self-defeating dimension + no scan for neighbor-names

**Affected stage:** critique-01-17. **Shortcoming type:** self-defeating dimension wording + missing concrete prosecution.

**Evidence from prior inquiry:** `01-17/docarchive/critique.md` Phase-0 dimension reads *"Coherence / non-overlap (project risk): Does it fit 22-30's arc + the canon, WITHOUT claiming any neighbor's territory"* — the dimension's own wording forces naming neighbors to test for non-overlap. Phase-2 check 5 *"NOT-list non-overlap"* asked *"does comprehend-request overlap surfacing ('both take in input')?"* — names the neighbor in the test. The check WAS the violation.

**Evidence from human correction:** the user caught what critique should have flagged.

**Evidence from corrected inquiry:** `09-54/docarchive/critique.md` self-containment was applied as a scan-for-neighbor-names across all produced text; zero neighbor-names survived.

**Confidence:** HIGH (artifact-isolated; the dimension wording is verbatim).

**Why not stronger:** N≥2 chains needed to promote "self-defeating dimension" to a named failure mode.

**Maintenance candidate:** MC-C.

**Evaluation gate:** next discipline-design inquiry's critique Phase-2 includes a concrete scan-for-neighbor-names test in the produced spec text; the self-containment dimension's wording does not force naming the thing under test.

### Hypothesis 5: surfacing-01-37 — narrowest reading of the adjudicating memory + inherited verdict not re-tested

**Affected stage:** surfacing-01-37. **Shortcoming type:** narrow-reading of project memory + inherited-without-re-test.

**Evidence from prior inquiry:** `01-37/docarchive/surfacing.md` Region E item #15 surfaced the self-containment memory at "sub" priority with gloss *"no outbound pointers to design-history/theory; the structure must be standalone"* — only the memory's narrowest interpretation (folder-pointer-only). Region C item #7 surfaced routelister at CORE priority — the fix-model was finally clear — BUT the inherited 01-17 NOT-list was not re-tested against this newly-clear model.

**Evidence from human correction:** the user's main objection was to phrasing produced in 01-37 (Hypothesis 7 below).

**Evidence from corrected inquiry:** `09-54/docarchive/surfacing.md` H1 frontier flag explicitly named the broader pattern *"the self-containment violation is broader than the Component phrasing: the entire 01-37 NOT-list names neighbors, and the verdict-header/guard lean on neighbor concepts"* — exactly what surfacing-01-37 missed.

**Confidence:** MED-HIGH.

**Why not stronger:** "narrow reading" is partly interpretive; the memory's literal text genuinely focuses on outbound pointers (folder-paths) and only implicitly extends to neighbor-naming.

**Maintenance candidates:** MC-A + MC-D.

**Evaluation gate:** next discipline-design inquiry surfacing the same memory glosses it at the broader-applicable reading (covering "no neighbor-naming in load-bearing positions," not only "no folder pointers").

### Hypothesis 6: sensemaking-01-37 — stated-then-violated principle within the same document

**Affected stage:** sensemaking-01-37. **Shortcoming type:** stated-then-violated (a narrower form of sensemaking failure-mode #6 Self-Reference Blindness).

**Evidence from prior inquiry:** `01-37/docarchive/sensemaking.md` C2 states *"the spec has NO outbound pointers... it defines its own vocabulary and grounds each NOT-list entry intrinsically."* The next bullet K3 violates this: *"§2 Components describe each phase as a tailored internal operation that does not invoke the neighbor discipline"* — names "the neighbor discipline" in a paragraph directly under "grounds each NOT-list entry intrinsically." The author stated the principle then violated it in adjacent prose.

**Evidence from human correction:** the user quoted the violated form (Hypothesis 7).

**Evidence from corrected inquiry:** `09-54/docarchive/sensemaking.md` opens with a maximal self-reference guard and remains neighbor-free throughout.

**Confidence:** HIGH (verbatim adjacency in the same document).

**Why not stronger:** at N=1 it could be a one-off; pattern-promotion needs N≥2.

**Maintenance candidate:** supports E5 register entry at N≥2; no source-edit MC at N=1.

**Evaluation gate:** observe the next 2-3 discipline-design sensemaking outputs for the same adjacent-anchor stated-then-violated pattern.

### Hypothesis 7: innovation-01-37 — minted the user's-quoted phrase (introduced, not inherited)

**Affected stage:** innovation-01-37. **Shortcoming type:** new-text-violation (innovation introduced the most explicit form of the violation) + missing Inversion-on-NOT-list (same as Hypothesis 3, recurring).

**Evidence from prior inquiry:** `01-37/docarchive/innovation.md` D2 §2 Components newly phrased: *"each tailored; does not invoke the neighbor discipline."* This phrase was not in 01-17; it was introduced here. Per-Component lines repeat the phrase. Inversion did not probe "name no neighbor" as the load-bearing claim.

**Evidence from human correction:** the user quoted this exact phrase verbatim.

**Evidence from corrected inquiry:** `09-54/docarchive/innovation.md` reframed Components intrinsically, naming no neighbor; K4 generalization from sensemaking was directly applied.

**Confidence:** HIGH (phrase-level artifact match to the user's quote).

**Why not stronger:** the new-mint failure could be one-off creativity vs systematic pattern; needs N≥2.

**Maintenance candidate:** MC-C (downstream scan catches what innovation produces).

**Evaluation gate:** see MC-C.

### Hypothesis 8: critique-01-37 — narrowest-reading dimension; no scan for neighbor-names

**Affected stage:** critique-01-37. **Shortcoming type:** narrow-reading of self-containment + missing concrete prosecution (same shape as Hypothesis 4, recurring).

**Evidence from prior inquiry:** `01-37/docarchive/critique.md` Phase-0 self-containment dimension: *"No outbound pointers; vocabulary self-defined?"* — applied at the memory's narrowest reading (folder-pointer-only). No Phase-2 prosecution scanned the produced text for neighbor-names. The NOT-list "→ /sense-making" etc. and the "does not invoke the neighbor discipline" phrases passed through unchallenged.

**Evidence from human correction:** the user caught what critique didn't.

**Evidence from corrected inquiry:** `09-54/docarchive/critique.md` self-containment GATE dimension at critical weight, with explicit Phase-2 scan for neighbor-names across all produced text. Zero neighbor-names survived.

**Confidence:** HIGH (recurring pattern Hypothesis 4 → Hypothesis 8 → 09-54 fix; three-point evidence).

**Why not stronger:** see Hypothesis 4.

**Maintenance candidate:** MC-C.

**Evaluation gate:** see MC-C.

## Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---:|---:|---|
| **surfacing-01-17** | priming-by-gloss + absent adjudicating memory + wrong-priority fix-model | **strong** | **HIGH** | MC-A |
| sensemaking-01-17 | propagation + frame-exit aimed at wrong axis | medium-strong | MED-HIGH | MC-B |
| innovation-01-17 | Inversion did not probe NOT-list's load-bearing claim | medium | MED | (via MC-C) |
| critique-01-17 | self-defeating dimension + no scan-for-neighbor-names | **strong** | **HIGH** | MC-C |
| surfacing-01-37 | narrow-reading of memory + inherited verdict not re-tested | medium-strong | MED-HIGH | MC-A + MC-D |
| sensemaking-01-37 | stated-then-violated within same document | **strong** | **HIGH** | E5 register entry (no source-edit at N=1) |
| innovation-01-37 | minted user's-quoted phrase; missing Inversion-on-NOT-list | **strong** | **HIGH** | (via MC-C) |
| critique-01-37 | narrowest-reading dimension + no scan-for-neighbor-names | **strong** | **HIGH** | MC-C |
| **cross-stage attribution** | **PRIMARY-ORIGIN: surfacing-01-17** (priming propagates; downstream checks aimed wrong); **CONFIRMATION-FAILURES: all four 01-17 stages + recurring at 01-37** | **strong (triangulated A1+A3+C1)** | **HIGH** | MC-A + MC-C as the load-bearing pair |

## Maintenance Candidates

### MC-A — Discipline-target surfacing-territory check (PRIMARY)

- **What should change:** when an inquiry's `_branch.md` targets a discipline artifact (creating, refining, restructuring, or otherwise meta-operating on a discipline spec), surfacing's territory must include — at **core** priority — (i) project memories adjudicating discipline construction (currently: `feedback_disciplines_self_contained`); (ii) one or more existing self-contained discipline specs as PATTERN exemplars, glossed with their load-bearing self-containment property — not just structural shape.
- **Which file/protocol affected:** `cognitive_harness/surfacing/references/surfacing.md` — a one-paragraph addition (most naturally in §3.6 Re-invocation parameters or wherever territory-specification is described), keyed by inquiry-target type. Alternative location: a one-paragraph rule in the runner's `_branch.md` template that pre-loads these items into the purpose-framing before surfacing runs.
- **Risk class:** **LOW.** Purely additive to surfacing's territory; trigger narrowly-scoped (discipline-target inquiries only); no existing surfacing behavior changes.
- **Expected benefit:** prevents Hypothesis-1's primary-origin failure mode (priming-by-gloss + absent adjudicating memory + wrong-priority fix-model). Per the manufacturing-failure-analysis transfer: catches the defect at the upstream station rather than at downstream inspection.
- **Evaluation gate:** the next discipline-design inquiry's `surfacing.md` artifact contains BOTH (i) the relevant project memory AND (ii) at least one existing self-contained discipline spec at core priority, *and the gloss for that exemplar explicitly states its intrinsic-pattern property* (e.g., for routelister: "NOT-list grounded in an intrinsic feature of the operation, naming no neighbor") — not a generic shape-only gloss. Downstream test: produced spec text contains zero neighbor-names that would have to be removed.
- **Branch-experiment?** NO — at N=1, gate-evaluation is via observation on the next applicable inquiry, not a separate branch run.
- **Source-edit-now? or wait-for-N≥2?** **WAIT.** Per LOOP_DIAGNOSE Step 5: at N=1 chain, source edits should require strong evidence; the gate provides cheap empirical evidence on the next applicable inquiry. Promote to source-edit when (a) the gate fires affirmatively on the next inquiry, OR (b) N≥2 chains of the same pattern accumulate. *(User override: see Diagnostic Verdict note on authority.)*

### MC-B — Sensemaking frame-exit perspective: structural-property check

- **What should change:** when an inquiry produces a discipline construct (NOT-list, Components, Identity), the Frame-exit Completeness perspective should include a "structural-property check" — *does the produced construct violate any adjudicating principle inherited from project context?* — in addition to the existing vocabulary-referent check.
- **Which file/protocol affected:** `cognitive_harness/sense-making/references/sensemaking.md` — small addition to the Frame-exit Completeness perspective (Phase 2).
- **Risk class:** **LOW.** Refinement of an existing check, not a new mechanism.
- **Expected benefit:** prevents Hypothesis-2's aimed-at-wrong-axis failure (the check that exists firing on the wrong axis).
- **Evaluation gate:** next discipline-design inquiry's sensemaking frame-exit explicitly checks the NOT-list / Components for structural-property violations, not only for vocabulary referents.
- **Branch-experiment?** NO. **Source-edit-now? or wait?** **WAIT** (gate-evaluation on next applicable inquiry).

### MC-C — Critique self-containment gate + non-self-defeating dimension wording

- **What should change:** two parts. **(i)** When self-containment is a critical-weight dimension, Phase-2 prosecution MUST include a concrete adversarial test: *"scan EVERY produced spec sentence for neighbor-names"* (specifically: any reference to another named discipline / `/skill-name` / specific external-component name). **(ii)** Dimensions should not contain phrasing that forces naming the thing under test — e.g., "non-overlap with neighbor's territory" → re-word to "scope-coherence of the discipline's own borders" or "self-contained boundary check."
- **Which file/protocol affected:** `cognitive_harness/td-critique/references/td-critique.md` — small addition to Phase-2 Adversarial Evaluation (the concrete-test rule) + a one-line caution on dimension wording.
- **Risk class:** **LOW.** Adds a specific prosecution test; does not alter existing dimension framework.
- **Expected benefit:** catches what slips through surfacing (Hypothesis 4 + 8 — the recurring critique-side missing scan). Pairs with MC-A as "upstream prevent + downstream catch."
- **Evaluation gate:** next discipline-design inquiry's critique Phase-2 includes the scan; zero neighbor-names survive into the spec output. Dimension wording does not force the failure-it-tests.
- **Branch-experiment?** NO. **Source-edit-now? or wait?** **WAIT** (gate-evaluation on next applicable inquiry).

### MC-D — Inherited-Commitments-Re-test broader-reading enforcement

- **What should change:** when a discipline-design inquiry's CONCLUDE compiles Inherited-Commitments-Re-test, the Re-test must include the broader-reading test: *"does the inherited verdict's TEXT violate self-containment under the broader reading (no neighbor-naming in load-bearing positions), not only the narrowest reading (no folder-pointers)?"*
- **Which file/protocol affected:** `cognitive_harness/protocols/conclude.md` — a one-paragraph addition to the Inherited-Commitments-Re-test section enforcement, keyed by inquiry target type.
- **Risk class:** **LOW.** Refines an existing enforcement check; trigger narrowly-scoped.
- **Expected benefit:** prevents Hypothesis-5's narrow-reading + inherited-without-re-test failure.
- **Evaluation gate:** next discipline-design inquiry inheriting a prior verdict via Synthesis Trigger names the broader-reading check explicitly in the Re-test.
- **Branch-experiment?** NO. **Source-edit-now? or wait?** **WAIT** (gate-evaluation on next applicable inquiry).

## Candidate Failure Modes for Revival Register

*Named but NOT promoted at N=1 — entered into a candidate-mode register per LOOP_DIAGNOSE Step 5's promotion-discipline; revived at N≥2.*

### Candidate-E1 — Priming-by-gloss

- **Stage of origin:** surfacing.
- **Concise definition:** a surfaced item's GLOSS frames a structural concept (e.g., characterizes the NOT-list as inherently neighbor-attributed); downstream stages adopt the framing without challenging it, looking *inside* the framing rather than *at* it.
- **Recognition signal:** the surfacing artifact's gloss for a load-bearing item characterizes a structural concept by what it relates to (here: "border WITH NEIGHBORS") rather than by its intrinsic property (here: "intrinsic-feature-grounded exclusion"). Downstream stages then build with the relational framing.
- **Why novel (not just an instance of existing modes):** surfacing's existing Missed-relevance LAYER-1 mode captures "the item wasn't surfaced." Priming-by-gloss is sharper — the item WAS surfaced, but the *gloss* framed it wrong, and that framing propagated.
- **Promotion trigger:** N≥2 chains showing the same pattern (a surfacing gloss priming a downstream violation).

### Candidate-E4 — Self-defeating dimension

- **Stage of origin:** critique.
- **Concise definition:** a critique dimension whose own wording forces the failure it should catch — e.g., "non-overlap with neighbor's territory" must name neighbors to be tested, so the test produces the violation it should detect.
- **Recognition signal:** the dimension contains the THING-UNDER-TEST in its own wording. A clean dimension can be tested without performing the violation.
- **Why novel:** critique's existing 7 failure modes don't cover the case where the dimension architecture itself is self-defeating; "Wrong dimensions" comes close but covers irrelevant dimensions, not self-defeating-when-applied dimensions.
- **Promotion trigger:** N≥2 chains showing a dimension that performs the violation it tests.

### Candidate-E5 — Stated-then-violated principle

- **Stage of origin:** sensemaking.
- **Concise definition:** the author states a principle in one anchor of a sensemaking document (e.g., a Constraint or Foundational Principle) and violates that principle in the next anchor (e.g., a Key Insight) within the same document.
- **Recognition signal:** the principle's text + a violation of the principle's text appear in adjacent anchors of the same SV-level pass.
- **Why novel:** sensemaking's failure mode #6 Self-Reference Blindness covers using-a-discipline-to-evaluate-something-sharing-its-assumptions. Stated-then-violated is more specific: within-document adjacency.
- **Promotion trigger:** N≥2 chains showing adjacent stated-then-violated anchors in sensemaking outputs.

## Diagnostic Verdict

**Overall: PARTIAL** — per LOOP_DIAGNOSE Step 4 rubric. The correction chain reveals likely weaknesses with strong artifact-isolated evidence at the primary-origin (surfacing-01-17, HIGH confidence on A1+A3+C1 triangulation). Maintenance candidates are narrow + gated; source edits should wait for either N≥2 chains or the next discipline-design inquiry's evaluation gates to fire.

- **Best-supported diagnosis:** the failure-chain has a **primary origin in the failure-chain at surfacing-01-17** *(per LOOP_DIAGNOSE Step 5: "primary origin in the chain," not "exact root cause" — that stronger claim is forbidden at N=1)*. The origin shape: priming-by-gloss via the anatomy item's characterization of the NOT-list ("border with neighbors") + absent self-containment memory + wrong-priority fix-model. Downstream confirmation-failures at every 01-17 stage (sensemaking-frame-exit-aimed-wrong-axis; innovation-Inversion-missed-NOT-list; critique-self-defeating-dimension); recurring at 01-37 in shifted form (narrow-reading memory + stated-then-violated principle + minted-user's-quoted-phrase + narrowest-reading critique). The user's surfacing-side hypothesis survives in narrowed form (discipline-target trigger, not all surfacings).

- **Strongest maintenance candidate: MC-A** (discipline-target surfacing-territory check — the user's hypothesis precisely scoped). It addresses the primary-origin failure directly; risk class LOW; the evaluation gate is observable on the next discipline-design inquiry. **MC-C is the second-strongest** (it catches downstream what MC-A doesn't prevent upstream). Both are load-bearing, neither alone is sufficient given 01-37's evidence that surfacing-fix-alone doesn't catch 01-37-style new-minting at innovation.

- **Main uncertainty:** N=1 chain. The verdict's promotion path requires either N≥2 chains showing the same pattern OR the next discipline-design inquiry's evaluation gates firing affirmatively. The pattern is plausible and artifact-supported but not yet repeatedly observed across distinct inquiries. Secondary uncertainty: whether the candidate failure modes E1/E4/E5 are promote-ready (sensemaking's classification said promote-at-N≥2; this verdict respects that gate).

- **Recommended next step:** monitor the next discipline-design inquiry against the four evaluation gates. If gates fire affirmatively on the next applicable inquiry → upgrade MC-A and MC-C to ACTIONABLE (source-edit). If a second discipline-design inquiry exhibits the same pattern (N=2) → upgrade with stronger evidence + consider promoting candidate failure modes E1/E4/E5 to named modes in their respective discipline specs. Until either trigger fires, the maintenance candidates remain *named, narrow, and gated* per LOOP_DIAGNOSE Step 5.

- **Note on verdict authority:** this is the **protocol-faithful recommendation at N=1**; the user retains override authority. Approving source-edit now is a legitimate decision if the user judges the artifact evidence sufficient; the verdict's job is to give the protocol's recommendation, not to bind action.

## Inherited Commitments Re-test

This inquiry consumed three prior findings + the routelister exemplar + the self-containment memory; each is re-tested as evidence, not absorbed as inheritance-of-verdicts.

- **Commitment:** `2026-06-01_01-17/finding.md` — the scope verdict (IE's 3 phases + 7-border NOT-list attributed to neighbors).
  - **Re-test status:** **EVALUATED AS A FAILURE CASE.** The verdict's *scope content* (the request-vs-problem boundary, the perceive-vs-act mode) is preserved; the *encoding* (neighbor-attributed NOT-list, neighbor-mirrored Component names) was the violation diagnosed here. The 09-54 correction preserved the scope while replacing the encoding — this diagnostic confirms that pattern.
  - **Evidence:** `01-17/docarchive/sensemaking.md` Structural points + Innovation D5 NOT-list (artifact-isolated to verbatim).

- **Commitment:** `2026-06-01_01-37/finding.md` — the structural verdict (5-section sibling template + "does not invoke the neighbor discipline" Component phrasing).
  - **Re-test status:** **EVALUATED AS A FAILURE CASE.** The 5-section structural template is preserved; the "does not invoke the neighbor discipline" phrasing was the violation (Hypothesis 7: minted at innovation-01-37, not inherited). The 09-54 correction preserved the section shape while replacing the violating phrasings.
  - **Evidence:** `01-37/docarchive/innovation.md` D2 verbatim (artifact-isolated).

- **Commitment:** `2026-06-01_09-54/finding.md` — the corrected verdict (output-organized self-contained design).
  - **Re-test status:** **TREATED AS COMPARATIVE EVIDENCE, NOT GROUND TRUTH** (per LOOP_DIAGNOSE Step 5). Used to identify what the prior pipelines missed (the routelister fix-model + the broader memory reading); the diagnostic does not assume the corrected verdict is the *only* correct path, only that its surfacing-stage choices avoided the failure-chain.
  - **Evidence:** `09-54/docarchive/surfacing.md` Region C + sensemaking K1/K4 (artifact-isolated; constitutes the comparative-contrast).

- **Commitment:** `cognitive_harness/routelister/references/routelister.md` §1.3–1.4 — the intrinsic-NOT-list exemplar.
  - **Re-test status:** **ARTIFACT-GROUNDED EVIDENCE.** Confirmed present and unchanged in the codebase throughout the failure period; available to the prior surfacings but not pulled at core priority with its load-bearing property in the gloss. The exemplar is the load-bearing fix-model the priors should have consulted.
  - **Evidence:** read fresh in this run; §1.3 grounds each exclusion "in an intrinsic feature of the operation, not in what neighbor operations do."

- **Commitment:** project memory `feedback_disciplines_self_contained` — the adjudicating principle.
  - **Re-test status:** **ARTIFACT-GROUNDED EVIDENCE; READING-BREADTH ADJUDICATED.** The memory's narrowest reading (folder-pointer-only) was used by 01-37; the broader reading (no neighbor-naming in load-bearing positions) was used by 09-54. The diagnostic does not claim the memory verbatim mandates the broader reading; it claims that the broader reading is the operationally-applicable one for discipline-design, per the routelister exemplar.
  - **Evidence:** memory file content + routelister §1.3 confirm the broader-reading is the project-wide pattern.

All commitments re-tested with cited evidence; none absorbed without re-test.

## Next Actions

### MUST

- **What:** Accept or reject the diagnostic verdict (PARTIAL at N=1) and the four maintenance candidates (MC-A primary; MC-B/C/D secondary; all WAIT-for-gate).
  - **Who:** user.
  - **Gate:** observable — explicit response.
  - **Why:** the diagnostic is at N=1; user judgment on whether to wait for gate-firing or to override and source-edit immediately is required.

### COULD

- **What:** Monitor the next discipline-design inquiry (the user's `2026-05-31_22-50__inquiry_elaboration_scope_and_notlist` if it gets activated, or any new discipline-design inquiry) against the four evaluation gates. Specifically, observe whether (i) surfacing pulls the self-containment memory + a self-contained-spec exemplar at core priority with intrinsic-pattern gloss; (ii) sensemaking frame-exit checks the structural property; (iii) critique Phase-2 scans for neighbor-names; (iv) Inherited-Commitments-Re-test names the broader-reading check.
  - **Who:** observer (user or future inquiry-author).
  - **Gate:** condition-bound — at the next discipline-design inquiry.
  - **Why:** the gate-firing IS the evidence that promotes the maintenance candidates from PARTIAL to ACTIONABLE.

- **What:** When a second discipline-design inquiry exhibits the same pattern (N=2), upgrade the maintenance candidates with stronger evidence and consider promoting the candidate failure modes E1 (priming-by-gloss), E4 (self-defeating dimension), E5 (stated-then-violated) to named modes in their respective discipline specs.
  - **Who:** future LOOP_DIAGNOSE inquiry.
  - **Gate:** condition-bound — N≥2 chains.
  - **Why:** LOOP_DIAGNOSE Step 5 promotion-discipline.

### DEFERRED

- **What:** Decide whether candidate-failure-modes E1, E4, E5 should live in a register file (analogous to `cognitive_harness/cognitive_fixes/`) or remain in this finding only. Structural-layer decision.
  - **Gate:** condition-bound — when N≥2 chains accumulate; deciding the register format prematurely risks the wrong format.
  - **Why (if revived):** a register file would make candidate-modes discoverable across inquiries; in-finding-only keeps them tied to their originating evidence.

- **What:** Broader-pattern check: do other discipline-design inquiries in the project (e.g., the routelister, routeman design-histories) exhibit the same surfacing-side vulnerability?
  - **Gate:** condition-bound — after MC-A's first gate-evaluation; observable across the project's inquiry history.
  - **Why (if revived):** if the broader pattern is present, MC-A's promotion strengthens significantly.

## Reasoning

The diagnostic verdict survives adversarial testing in both directions. **Under-promotion (INCONCLUSIVE) was rejected** because the artifact evidence triangulates: A1 (priming-by-gloss in the surfacing trace) + A3 (absent adjudicating memory) + C1 (09-54's different-surfacing produced different-outcome) are three independent observations, each citable to specific file:section. INCONCLUSIVE's bar ("artifacts do not support a reliable diagnosis") is not met. **Over-promotion (ACTIONABLE) was rejected** because LOOP_DIAGNOSE Step 5 explicitly disallows broad fundamentals rewrites at N=1, and source-edit at N=1 would commit before the evaluation gates can produce empirical confirmation. **The diffuse-attribution counter** (any single downstream stage could have caught it) was rejected via a three-part defense: the 09-54 comparative contrast empirically points at surfacing; the manufacturing-failure-analysis transfer formalizes the upstream-attribution rule; LOOP_DIAGNOSE explicitly allows mixed attribution (and this verdict IS mixed — primary-origin + confirmation-failures, not single-stage).

The user's hypothesis is correct. The narrowing (discipline-target trigger rather than all-surfacings) is a refinement, not a rejection. The strongest single intervention is MC-A (surfacing-side, the user's hypothesis precisely scoped) paired with MC-C (critique-side, downstream catch). The pairing matters: 01-37's evidence shows that surfacing-fix-alone wouldn't catch innovation-side new-minting; downstream prosecution must complement upstream prevention.

A note on self-reference: this diagnostic is by the same paradigm that produced the failure. The bound is that every load-bearing claim rests on artifact evidence citable to file:section, not on agent inference; the 09-54 contrast provides external comparison; the user's correction provides external anchoring at two points (initial flag + surfacing-side hypothesis); the PARTIAL verdict + N≥2 promotion gates enforce the bound at the verdict-strength level. The diagnostic discipline-naming (surfacing-01-17, etc.) is appropriate — a process-layer analysis legitimately names its territory, unlike a discipline spec which must be self-contained.

## Open Questions

### Blocked

- All four MCs' source-edit promotion is blocked on either (a) the next discipline-design inquiry's evaluation gates firing affirmatively, or (b) N≥2 chains accumulating.

### Research Frontiers

- Do other discipline-design inquiries in the project share the same surfacing-side vulnerability? (Deferred — observable across project history; gated to after MC-A's first gate-evaluation.)
- Should candidate-failure-modes E1/E4/E5 live in a register file or in-finding only? (Structural-layer decision deferred to N≥2.)

### Refinement Triggers

- **RT-1** — If the next discipline-design inquiry triggers MC-A's gate AND still produces neighbor-named output, MC-A's gate-specificity needs strengthening (the gloss-quality criterion was insufficient).
- **RT-2** — If a second LOOP_DIAGNOSE chain isolates a non-surfacing primary-origin (e.g., critique-primary), the "primary-origin tends to be at surfacing" hypothesis narrows or falsifies; revisit MC-A's primary status.
- **RT-3** — If "stated-then-violated" (E5) recurs in non-discipline-design sensemaking outputs, its scope broadens beyond the candidate-mode named here.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
what went wrong with devdocs/inquiries/2026-06-01_01-17__inquiry_elaboration_scope_and_coverage/finding.md and devdocs/inquiries/2026-06-01_01-37__inquiry_elaboration_structural_design/finding.md 

? because in  
devdocs/inquiries/2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare/finding.md

verdict was different and many things like talking about other disciplines in IE was wrong.. 


i would expect this kind of mistake to not happen, it should have been surfaced in surfacing i guess, and surfacing should have check examples especially regarding discipline creation processs... 


use cognitive_harness/protocols/loop_diagnose.md
```

</details>
