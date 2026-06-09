## User Input

`devdocs/inquiries/2026-06-04_01-00__loop_diagnose__itemize_default_split_miss/_branch.md` (priors: surfacing / sensemaking / decomposition)

---

# Innovation — LOOP_DIAGNOSE on Itemize Default-Split Miss (Production Mode)

## Phase 1 — Seed + Methodology-Mode Consideration

**Seed:** decomposition's piece-list P0 (shared anchor) + P1 (Correction Chain Summary) + P2 (4 failure hypotheses) + P3 (Attribution Summary) + P4 (3 MCs with gates) + P5 (ACTIONABLE verdict) + P6 (open questions / pattern-claim).

**Inherited methodology mode:** **Standard default.** SV6 + decomposition operationalize the diagnostic; innovation's task is elaboration to authorable text per LOOP_DIAGNOSE Step 4 schema.

**Alternative mode named:** **Contrarian-rethink.** Under this, innovation would re-open SV6's 8 verdicts — re-test the root-attribution (sensemaking-primary vs surfacing-primary), the mechanism naming (name-vs-meaning vs other), the critique-miss hierarchy, the pattern-claim confidence.

**What follows under the alternative:** SV6 already resolved 10/10 ambiguity-collapse pairs at HIGH/MED confidence with 7 perspectives + Accommodation trigger not firing; re-litigating at innovation would unwind settled work without new evidence.

**Decision: Standard default.** `Seed-time-methodology-mode-decision: Standard default (inherited).`

## Phase 2 — Generate

### Cross-piece mechanism applications

**Combination.** Sensemaking SV6's verdict-text + LOOP_DIAGNOSE protocol's Step 4 schema-shape + the 15-39 archived discipline citations from surfacing's evidence trail = the substantive content for P1-P5. No new content invented; existing evidence reorganized into the protocol's required schema.

**Absence Recognition.**
- *Patch-level:* anything missing in decomposition's piece-set? Verified: all 8 SV6 verdicts have piece-homes; all 5 LOOP_DIAGNOSE Step 4 schema sections have piece-homes (P1 → Correction Chain; P2 → Failure Hypotheses; P3 → Attribution; P4 → MCs; P5 → Verdict). Coverage complete.
- *Redesign-level (what's missing):* would an additional piece be warranted? Considered: a separate "11-46 comparison" piece. Rejected — the 11-46 comparison is comparative methodology evidence within P6's pattern-claim, not its own deliverable artifact.
- *Redesign-level (what's already present in different form):* the LOOP_DIAGNOSE protocol's Step 4 schema IS already present as the project's specification of how to author this finding. Innovation reuses the schema rather than inventing a new one.

**Domain Transfer.**
- *Native (software engineering):* the failure-hypothesis schema parallels postmortem-style root-cause analysis (Toyota 5-Whys; AWS post-event review). The diagnostic shape is recognizable.
- *Cross-domain (medical diagnostic reasoning):* differential diagnosis — multiple candidate diagnoses, each with confidence + supporting evidence; treatment plan derived from the highest-confidence diagnosis but accounting for differentials. Maps to LOOP_DIAGNOSE: H1-H4 are differentials; MCs are treatments; ACTIONABLE verdict is the recommended treatment plan with monitoring for differentials that might still fire.

**Extrapolation.** As the project accumulates more LOOP_DIAGNOSE inquiries, the structural-gap claim's confidence trajectory: 2 instances → MED; 3rd instance (same shape) → HIGH; 5-10 instances → broad protocol revision warranted. The current verdict respects this trajectory by staying narrow.

**Lens Shifting.**
- *Spec-author lens:* MC1 + MC2 are transcribable as additions to specific refinement-note sections in existing specs.
- *LLM-implementing lens:* the MC1 sub-aspect and MC2 dimension are implementable cognitive operations.
- *User-perspective lens:* the user's specific question ("why did critique not catch that") gets a layered answer (dimension absence as primary; deferral and Dim 12 as operational sub-mechanisms).

**Constraint Manipulation.**
- *ADD:* "MC1 + MC2 + MC3 all must implement immediately" → violates LOOP_DIAGNOSE Step 5 narrow-candidates guardrail; MC3 should defer. Confirms MC3 prioritization.
- *REMOVE:* "remove MC2 — sensemaking fix alone is sufficient" → MC1 might miss less-obvious user-named operations; MC2 provides defense-in-depth. Confirms MC2's complementary role.

**Inversion (depth-iterate; multi-axis).**
- *Belief-axis:* invert "primary root is sensemaking" → "primary root is critique" (the user's hypothesis). System-level: if the root were critique, the maintenance candidate would be ONLY MC2; but the upstream gap at sensemaking would persist, producing similar misses on inquiries even with MC2 in place. The sensemaking-primary attribution survives this inversion at system-level.
- *Multi-axis identity:* invert "this is a structural gap" → "this is a one-off accidental miss." System-level: with 2 instances of identical shape (11-46 + this), the one-off framing fails — the pattern is structurally consistent. MED confidence holds (not HIGH yet; not LOW either).
- *Existence-axis:* could there be ZERO MCs (verdict = PARTIAL or INCONCLUSIVE, no source-edits)? System-level: that would violate the user's explicit invocation of LOOP_DIAGNOSE and would leave the gap unaddressed despite HIGH-confidence retroactive evaluation gates. ACTIONABLE verdict survives.

### Inherited Frame Audit (between Phase 2 and Phase 3)

`Inherited-Frame-Audit-marked-inapplicable: not invoked — the LOOP_DIAGNOSE protocol's Step 4 schema is externally given (cognitive_harness/protocols/loop_diagnose.md); SV6 operationalized the diagnostic against that schema with 10/10 ambiguity-collapse + 7 perspectives + Accommodation-trigger-did-not-fire; decomposition partitioned SV6 against the schema sections. The frame challenge happened at the SENSEMAKING phase (where the diagnostic itself was tested against the strongest counter-explanations); innovation's task is to elaborate the settled diagnostic into the protocol's required text-shape. Re-litigating at innovation would mean redoing the diagnostic without new evidence. Structural reason: external protocol mandates output shape. Contextual reason: LOOP_DIAGNOSE Step 4 schema + SV6 + decomposition Q-tree.`

### Per-piece concrete authorable content + Inversion candidates

#### P0 — Shared anchor preamble

**Principal candidate:**

> *Loading note for this finding.* This is a LOOP_DIAGNOSE diagnostic finding per the protocol at `cognitive_harness/protocols/loop_diagnose.md`. Output follows the protocol's Step 4 required schema: Correction Chain Summary → Failure Hypotheses → Failure Attribution Summary → Maintenance Candidates → Diagnostic Verdict. Hypothesis numbering convention used throughout: H1 = sensemaking-side root + mechanism; H2 = critique-side dimension absence + sub-mechanisms; H3 = surfacing-side upstream enabler; H4 = corrected-loop (17-01) structural blind-spot acknowledgement. The protocol's guardrails are honored: the corrected inquiry (17-01) is comparative evidence not ground truth; mixed attribution is acceptable; narrow maintenance candidates with evaluation gates; broad protocol rewrites are explicitly deferred until ≥5-10 diagnostic findings show stable pattern.

**Piece-Level Inversion:** invert "anchor at top, cited by all" → "each piece restates protocol commitments inline." Fails fertility (duplication). Principal SURVIVES.

#### P1 — Correction Chain Summary

**Principal candidate:**

> **Correction Chain Summary.**
>
> - **Prior path:** `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` — specifically the §2 Itemize description (verbatim: *"Itemize — input: the raw task statement. Mechanism: split the statement into distinct atomic items, where each item is one coherent ask. A statement that bundles multiple asks (e.g., 'design X and also document Y') yields multiple items; a statement that's already a single ask yields one item."*).
>
> - **Corrected path:** `devdocs/inquiries/2026-06-03_17-01__task_define_itemize_refinement/finding.md` — specifically §1's refined Itemize description (default-keep-together; emit ONE item by default; emit N only when distinct (subject, action, deliverable-shape) tuples are clearly established).
>
> - **Human correction (excerpt):** *"u said... Stage 1 (statement-level): Itemize — split the task statement into atomic items. But we should be extremely careful about itimize, because for the most part even task can have different examples definitions they are contrubiting to same meaning layer and it is part of one task. If we do premature itemization, we will seperate the coherance in the original task query text and harm the meaning... i think itemize is about detecting if completely differnet tasks are given in one query or not — but maybe i am wrong."*
>
> - **What changed (one paragraph):** the 15-39 wording's default-split bias was replaced with a default-keep-together stance. Specifically: emit ONE item by default; emit N only when the statement contains multiple distinct (subject, action, deliverable-shape) tuples. The asymmetric-failure direction inverts from surfacing's lean-to-include because Itemize's items are tasks (premature-split is irrecoverable; late-split retains option-to-recover). The single-item case is load-bearing (count = 1 is the signal to the runner). NOT-list category 4 gained a one-line disambiguation distinguishing Itemize's multi-detection from cross-item interpretation.

**Piece-Level Inversion:** invert "name both inquiries explicitly" → "describe the chain in generic terms." Fails actionability (the LOOP_DIAGNOSE protocol mandates path-citations). Principal SURVIVES.

#### P2 — Failure Hypotheses (H1, H2, H3, H4)

**Principal candidates (4 hypothesis blocks):**

> ### H1 — Sensemaking authored the bad phrasing via name-vs-meaning conflation in A8 Load-bearing concept test
>
> **Affected stage:** Sensemaking (15-39).
>
> **Shortcoming type:** Name-vs-meaning conflation. Sensemaking's A8 refinement note (Load-bearing concept test, at Phase 3 Ambiguity Collapse) tested user-language alignment of NAMES — verifying that the operation NAMES the LLM used matched the user's verbatim choices. It did not interrogate the LLM-auto-completed MEANINGS of those user-named operations against the user's intent for them. The rule existed; its test target was structurally incomplete.
>
> **Evidence from prior inquiry:** 15-39 sensemaking SV6 item 2 (verbatim): *"Itemize — split the task statement into distinct atomic items (1 or more)."* Earlier in the same artifact, 15-39 sensemaking A8 (Load-bearing concept test result): *"Itemize / Deconstruct / MultiScope — user-chosen verbatim in the original /MVLw invocation. PASS."* The test verified the NAME "Itemize" appeared verbatim in the user's invocation; it did not verify that "split into distinct atomic items" matched the user's intent for that named operation.
>
> **Evidence from human correction:** the user's correction text explicitly interrogates the authored mechanism description: *"lets refine this and check if 'split the statement into distinct atomic items' is actually harmful or not."* The user perceived the divergence between the authored MEANING and their intent for the named operation — exactly the question the A8 test should have asked but didn't.
>
> **Evidence from corrected inquiry:** 17-01 sensemaking K1 (the empirical-test verdict) demonstrated harm by literally applying the authored description to 15-39's Source Input: 1 task + 11 specifications would produce 11+ items under the authored "split into distinct atomic items" wording. This is the test that A8 should have prompted at 15-39 sensemaking-time but didn't.
>
> **Confidence:** HIGH.
>
> **Why not stronger:** the corrected inquiry repairs the same failure with the same diagnostic logic (literal application of authored text to Source Input); multiple converging artifacts (the SV6 line, the A8 result, the user's correction, K1's repair).
>
> **Maintenance candidate:** MC1 (see P4).
>
> **Evaluation gate:** MC1's retroactive + prospective gates (see P4).
>
> ---
>
> ### H2 — Critique failed via dimension absence (with 2 operational sub-mechanisms)
>
> **Affected stage:** Critique (15-39).
>
> **Shortcoming type:** Dimension absence — no dimension in 15-39 critique's 12-dimension set probed per-operation verb-meaning against authored text. The base cause is dimension absence; two operational sub-mechanisms compounded the miss:
>
> - **(a) Phase 1 "Unexplored region" deferral as category-error.** 15-39 critique Phase 1 verbatim: *"edge cases of Itemize (statement that's ambiguous between 1-item and N-items) — structural-layer concern, properly deferred."* The 1-vs-N **default direction** is a meaning-layer commitment (it determines whether the operation IS "perceive-then-split-if-warranted" vs "split-by-default"). Deferring it to structural-layer was a category error.
>
> - **(b) Dim 12 recursion-fitness near-miss.** 15-39 critique Dim 12 verbatim: *"Itemize: the statement is one ask (define a discipline) — yields 1 item."* The test used the LLM's intuitive reading of Itemize — which happened to yield "1 item" — rather than literally applying the authored P1 description ("split into distinct atomic items, where each item is one coherent ask"). The authored description applied literally to the 15-39 Source Input (1 task + 11 specifications) would have yielded 11+ items, contradicting the intuitive verdict. The divergence was unflagged. The evidence for the harm was IN critique but unrecognized because the test used unfaithful reading.
>
> **Evidence from prior inquiry:** 15-39 critique's 12-dimension list at Phase 0 (none probing per-operation verb-meaning); Phase 1 "Unexplored region" note verbatim; Dim 12 verbatim.
>
> **Evidence from human correction:** the user's verbatim: *"i am feeling like critique is not doing enough to catch these. so focus on what critique rejected and if this was even among them or not."* The user explicitly identified critique as part of the failure surface.
>
> **Evidence from corrected inquiry:** 17-01 critique's 10-dimension list contains a "structural test soundness" dimension that probes the authored test (the (subject, action, deliverable-shape) tuple rule) by applying it to edge cases. This is the dimension TYPE that was missing in 15-39. By contrast, 17-01's dimensions all evaluate the refined design, NOT the original miss — confirming H4's corrected-loop blind-spot.
>
> **Confidence:** HIGH for the dimension-absence base cause + the two sub-mechanisms.
>
> **Why not stronger:** specific cited lines in 15-39 critique converge; 17-01's dimension type confirms what was missing.
>
> **Maintenance candidate:** MC2 (see P4).
>
> **Evaluation gate:** MC2's retroactive + prospective gates (see P4).
>
> ---
>
> ### H3 — Surfacing bundled the 5 operations as ONE item (upstream enabler)
>
> **Affected stage:** Surfacing (15-39).
>
> **Shortcoming type:** Territory-decomposition gap. The user-framing named 5 operations (Itemize, Deconstruct, MultiScope, Rephrase, Meta-question) but supplied NO mechanism descriptions. 15-39 surfacing item A2 listed the 5 operations as ONE territorial row with one combined relevance tag, generating no per-operation frontier flag. Sensemaking inherited a single item and produced commitments at the discipline-as-whole level rather than per-operation.
>
> **Evidence from prior inquiry:** 15-39 surfacing item A2 verbatim: *"the five operations: Itemize, Deconstruct, MultiScope, Rephrase, Meta-question"* — ONE row, one combined "core / HIGH" relevance tag. 15-39 surfacing's 9 frontier flags F1-F9 contain F5 ("which verb is load-bearing for Task-Define as a whole?") and F3 (operation ordering) but NO per-operation verb-meaning frontier flag.
>
> **Evidence from human correction:** indirect — the user's correction targets the sensemaking-side outcome (the authored §2 Itemize description), but the upstream enabler is the surfacing-side bundling.
>
> **Evidence from corrected inquiry:** this LOOP_DIAGNOSE inquiry's surfacing artifact decomposed the same content into multiple per-operation evidence pointers, demonstrating that per-operation surfacing is feasible. (This is the corrected-loop showing the alternative.)
>
> **Confidence:** MED.
>
> **Why not stronger:** surfacing's bundling is contributory but not load-bearing. Sensemaking COULD have generated per-operation ambiguity-collapse pairs from its own commitment-set even without per-operation frontier flags from surfacing. The proximate cause is sensemaking A8's incomplete test target (H1); surfacing's bundling made the omission easier but didn't determine it.
>
> **Maintenance candidate:** MC3 (see P4 — LIGHTER priority).
>
> **Evaluation gate:** MC3's gates (see P4).
>
> ---
>
> ### H4 — 17-01 corrected-loop critique structural blind-spot (acknowledge-only; no MC)
>
> **Affected stage:** Critique (17-01 corrected-loop).
>
> **Shortcoming type:** Structural PROPERTY — corrected-loop critique cannot rediscover prior misses because the prior miss isn't a candidate in its candidate-set. The 17-01 critique's 10 dimensions all evaluate the REFINED design (default-keep-together); the rejected direction (default-split) is upstream of the candidate-set and cannot be "rediscovered" by the corrected-loop critique. This is intrinsic to corrective inquiries.
>
> **Evidence from prior inquiry:** N/A (this hypothesis concerns 17-01, not 15-39).
>
> **Evidence from human correction:** the user explicitly asked *"check 17-01 critique.md too — what critique rejected and if this was even among them or not."* The answer is "not among them" because of this structural property.
>
> **Evidence from corrected inquiry:** 17-01 critique's 10-dimension list: self-containment / user-language alignment / asymmetric-failure direction soundness / structural test soundness / coherence with prior commitments / multi-detection vs cross-item interpretation distinction airtight / load-bearing single-item case / refinement scope discipline / authorability / recursion fitness. **All evaluate the REFINED design.** Verdict: 0 KILLs + 1 OPTIONAL textual refine. The default-split direction is not in the candidate-set.
>
> **Confidence:** HIGH for the property statement.
>
> **Why not stronger:** the property is intrinsic; not subject to "stronger" confidence.
>
> **Maintenance candidate:** **NONE.** This is a structural property of corrective inquiries to acknowledge in the verdict's reasoning, not a fix. (Acknowledging the property informs future LOOP_DIAGNOSE inquiries that the corrected-loop critique cannot retroactively catch prior misses; the original-loop critique must be where the catch fires — which is exactly what MC1 + MC2 + MC3 address.)
>
> **Evaluation gate:** N/A.

**Piece-Level Inversion at P2 (intervention-shape-axis fires; shape committed is ADD-CONTENT for the 4 hypotheses):**

- *Inverted assumption:* ADD-CONTENT (4 new hypothesis blocks) is the shape.
- *Alternative shapes:* REORGANIZE-WITHOUT-ADDING (collapse hypotheses into a single composite analysis) — fails because the LOOP_DIAGNOSE protocol's Step 4 schema mandates per-hypothesis structure. REVERT-REGRESSION — N/A (no prior version). REMOVE — fails (would empty the diagnostic). DO-NOTHING — fails (would not produce the diagnostic).
- *Override:* `Intervention-shape-Inversion-marked-inapplicable: ADD-CONTENT (4 hypothesis blocks) is structurally required by the LOOP_DIAGNOSE protocol's Step 4 schema, which mandates per-hypothesis structured fields. Alternative shapes either fail the protocol's mandate (REORGANIZE collapses required schema) or empty the diagnostic (REMOVE / DO-NOTHING). Structural reason: external protocol mandate. Contextual reason: cognitive_harness/protocols/loop_diagnose.md Step 4 + decomposition's verification criteria for P2.`

#### P3 — Failure Attribution Summary

**Principal candidate:**

> **Failure Attribution Summary.**
>
> | # | Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
> |---|---|---|---|---|---|
> | H1 | Sensemaking | Name-vs-meaning conflation in A8 Load-bearing concept test (test verified NAMES not MEANINGS) | strong | HIGH | MC1: sensemaking spec extension |
> | H2 | Critique | Dimension absence + Phase 1 deferral as category-error + Dim 12 intuitive-vs-authored near-miss | strong | HIGH | MC2: td-critique spec extension |
> | H3 | Surfacing | Territory-decomposition gap — multi-operation set bundled as ONE item; upstream enabler, not proximate cause | medium | MED | MC3: surfacing spec refinement note (LIGHTER priority) |
> | H4 | Critique (corrected-loop, 17-01) | Structural property — corrected-loop critique cannot rediscover prior misses because rejected direction isn't in candidate-set | strong | HIGH | NONE — acknowledge in verdict reasoning; not a fix |

**Piece-Level Inversion at P3 (intervention-shape-axis; shape committed is REORGANIZE-WITHOUT-ADDING — the table reorganizes P2's hypotheses):**

- *Override:* `Intervention-shape-Inversion-marked-inapplicable: REORGANIZE-WITHOUT-ADDING is structurally required — the attribution table is a COMPACT VIEW of P2's already-authored hypotheses, not new content. ADD-CONTENT (a new analysis) would duplicate P2; REPAIR (modifying P2's content) would violate decomposition's piece-boundary. Structural reason: P3's function is a cross-cut reorganization. Contextual reason: LOOP_DIAGNOSE Step 4 schema's Failure Attribution Summary requirement + decomposition's P3 verification criteria.`

#### P4 — Maintenance Candidates (MC1, MC2, MC3)

**Principal candidates (3 MC blocks):**

> ### MC1 (PRIMARY) — Sensemaking spec: extend the Load-bearing concept test refinement with a sub-aspect for user-named operations whose mechanism description is LLM-authored
>
> **What changes:** add a sub-aspect to the existing "Load-bearing concept test" refinement note at Phase 3 of `cognitive_harness/sense-making/references/sensemaking.md`. The new sub-aspect text (to append after the existing "Phase 5 / Conceptual Stabilization output" sub-aspect):
>
> > *Sub-aspect — User-named-operation auto-completed-meaning test (applies when the user names an operation but supplies no mechanism description; the LLM auto-completes the meaning).* When a load-bearing concept is a USER-NAMED OPERATION whose mechanism description is LLM-authored (the user named the operation but did not define its mechanism), the ambiguity-collapse pair MUST interrogate the authored meaning against user intent. Test predicate: *"is the authored mechanism description (e.g., 'split into distinct atomic items' for the user-named 'Itemize') user-intended for this operation name, or is it an LLM intuitive default that may misalign with the user's intent for the named operation?"* Confidence is determined by (a) direct user empirical test when possible (apply the authored mechanism to the user's Source Input and verify the result matches user intent); (b) the test against the inquiry's own Source Input as fallback when direct user test isn't possible (apply the authored mechanism literally; if the literal result diverges from intuitive expectations, the authored meaning may misalign). Verifying the user-language alignment of the NAME does not satisfy this sub-aspect; the test target is the auto-completed MEANING.
>
> **File:** `cognitive_harness/sense-making/references/sensemaking.md` (Phase 3 Ambiguity Collapse, Load-bearing concept test refinement note).
>
> **Risk class:** **low** (additive sub-aspect; existing rule structure preserved).
>
> **Expected benefit:** catches LLM-auto-completed meaning misalignment at sensemaking-time, before innovation formalizes the wording into one-paragraph mechanism descriptions.
>
> **Retroactive evaluation gate:** if applied retroactively to 15-39 sensemaking, would the sub-aspect have surfaced "split into distinct atomic items" as misaligned? **YES (HIGH confidence).** Test logic: apply the authored mechanism literally to 15-39's Source Input (the user's 3-message framing for redefining the discipline); literal application yields 11+ items where the user's intent for the named operation is 1 item. The divergence between literal-application and intuitive-expectation would trigger the test's flagging behavior at sensemaking-time, before innovation formalizes the bad phrasing.
>
> **Prospective evaluation gate:** apply to the next ≥2 multi-operation discipline-design inquiries (inquiries that define disciplines with multiple named operations where the user names some operations without supplying mechanism descriptions). Observe whether ≥1 per-operation verb-meaning gets challenged at ambiguity-collapse rather than carried through unchallenged. Threshold: ≥1/2 challenges → MC1 effective. 0/2 challenges → MC1 fire-condition needs investigation (the sub-aspect may be misfiring or the test predicate may need sharpening).
>
> **Branch experiment:** NO. Narrow additive refinement; land as direct spec edit. Revisit if 0/2 prospective catches over next 2 multi-operation-discipline inquiries.
>
> ---
>
> ### MC2 (COMPLEMENTARY) — td-critique spec: extend Phase 0 Project-specific risk dimension check with a per-operation verb-meaning dimension
>
> **What changes:** extend the existing "Project-specific risk dimension check" refinement note at Phase 0 of `cognitive_harness/td-critique/references/td-critique.md` with a documented project-specific risk axis:
>
> > *Documented axis — Per-operation verb-meaning interrogated against authored text not LLM intuition.* When the inquiry's deliverable defines a multi-operation discipline (e.g., a discipline with multiple named operations like Itemize / Deconstruct / MultiScope), the dimension list MUST include "per-operation verb-meaning probe." Prosecution applies the authored mechanism description LITERALLY to the inquiry's own Source Input (or to a sibling test case from the inquiry's evidence base) and compares the literal verdict to any intuitive-reading verdicts produced elsewhere in the critique (e.g., a recursion-fitness check that used intuitive reading). Divergence between literal-application and intuitive-application triggers REFINE on the authored mechanism description, with constructive output specifying which authored phrase produced the divergence.
>
> **File:** `cognitive_harness/td-critique/references/td-critique.md` (Phase 0 Dimension Construction, Project-specific risk dimension check refinement note).
>
> **Risk class:** **low** (additive documented axis; existing check structure preserved).
>
> **Expected benefit:** defense-in-depth at critique-time. Catches misses that MC1 misses (e.g., when sensemaking's sub-aspect doesn't fire because the operation's user-naming was subtle or the auto-completion was less obviously misaligned).
>
> **Retroactive evaluation gate:** if applied retroactively to 15-39 critique, would the dimension have triggered prosecution? **YES (HIGH confidence).** Test logic: 15-39 critique Dim 12 already had an intuitive verdict ("1 item") on Itemize applied to the inquiry's Source Input. Applying the authored mechanism description ("split into distinct atomic items, where each item is one coherent ask") LITERALLY to the same Source Input would have yielded 11+ items. The divergence between intuitive (1) and literal (11+) would trigger REFINE on the authored Itemize description, with constructive output pointing to "split into distinct atomic items" as the load-bearing phrase.
>
> **Prospective evaluation gate:** apply to the next ≥2 multi-operation discipline-design inquiries' critique runs. Observe whether ≥1 authored-vs-intuited divergence is caught at critique-time. Threshold: ≥1/2 catches → MC2 effective.
>
> **Branch experiment:** NO. Narrow additive refinement.
>
> ---
>
> ### MC3 (LIGHTER) — Surfacing spec: refinement note for discipline-design inquiries with user-named operation sets
>
> **What changes:** add a refinement note at `cognitive_harness/surfacing/references/surfacing.md` near §2.1 Item-enumeration / generation (or Phase 2 — Relevance-attributed Traversal):
>
> > *Refinement note — Per-operation decomposition for discipline-design inquiries with user-named operation sets.* When a discipline-design inquiry's user-framing names a SET of operations (e.g., "Expand task definition by MultiScope, Deconstruct, Itemize") AND does not supply mechanism descriptions for those operations, surfacing's territory should decompose the operation set into per-operation items, each generating its own frontier flag. Treating the set as ONE territorial row with one combined relevance tag bundles multiple load-bearing concepts under a single flag, deferring per-operation meaning-interrogation to sensemaking which may not address it (per LOOP_DIAGNOSE 2026-06-04_01-00 finding). Per-operation surfacing forces downstream disciplines to address per-operation verb-meanings explicitly.
>
> **File:** `cognitive_harness/surfacing/references/surfacing.md` (Phase 2 — Relevance-attributed Traversal, or a new refinement note at §2.1 Item-enumeration).
>
> **Risk class:** **low** (additive refinement note).
>
> **Expected benefit:** make-it-easier-to-not-miss at surfacing-time; complementary to MC1.
>
> **Retroactive evaluation gate:** if applied retroactively to 15-39 surfacing, would per-operation frontier flags have been generated for Itemize / Deconstruct / MultiScope / Rephrase / Meta-question verb-meanings? **YES (HIGH confidence).** With per-operation flags, sensemaking would have been compelled to address per-operation verb-meanings explicitly via per-operation ambiguity-collapse pairs.
>
> **Prospective evaluation gate:** N/A initially. **Implement only if MC1+MC2 retrospective application shows gaps that MC3 would close.** MC1+MC2 are sufficient even when surfacing bundles operations (sensemaking can run the per-operation sub-aspect from its own commitment-set; critique can run the per-operation dimension from its own dimension-construction phase). MC3's contribution is making the per-operation decomposition visible earlier — useful but not necessary.
>
> **Branch experiment:** NO. Defer until MC1+MC2 evaluation.

**Piece-Level Inversion at P4 (intervention-shape-axis; shape committed is ADD-CONTENT for 3 spec refinements):**

- *Override:* `Intervention-shape-Inversion-marked-inapplicable: ADD-CONTENT (3 additive spec refinements) is structurally required to address the 3 distinct affected stages (sensemaking H1, critique H2, surfacing H3). Alternative shapes — REPAIR (semantically changing existing rules) would risk introducing unrelated changes; REORGANIZE (restructuring existing sections) would not add the missing test predicates; REMOVE (deleting existing rules) would worsen, not fix; DO-NOTHING fails the user's mandate. The 3 additive refinements are minimum-text-touch responses that close the diagnosed gaps. Structural reason: distinct gaps require distinct additive refinements. Contextual reason: H1, H2, H3 affect distinct discipline specs.`

#### P5 — Diagnostic Verdict

**Principal candidate:**

> ## Diagnostic Verdict
>
> **Overall:** **ACTIONABLE.**
>
> - **Best-supported diagnosis:** **Name-vs-meaning conflation in sensemaking's A8 Load-bearing concept test refinement (H1).** Confidence HIGH. The rule existed at 15-39 sensemaking-time but its test target was structurally incomplete (verified NAMES not MEANINGS for user-named operations). The 15-39 SV6 item 2 authoring of "split into distinct atomic items" + the 15-39 A8 PASS result + 17-01 K1's literal-application empirical test demonstrating harm + the user's correction text together constitute multi-artifact convergence on H1.
>
> - **Strongest maintenance candidate:** **MC1 (sensemaking-side sub-aspect amendment).** It addresses the load-bearing root locus (sensemaking, where the bad authoring originated) and has a HIGH-confidence retroactive evaluation gate (applied to 15-39, would have fired). Defense-in-depth via **MC2 (td-critique-side dimension axis)** is also HIGH-confidence retroactively but secondary because it catches misses MC1 misses rather than preventing the miss at the load-bearing locus.
>
> - **Main uncertainty:** the pattern-claim that the loop has a structural gap at per-operation verb-meaning level (across discipline-design inquiries with user-named operations) is at MED confidence based on 2 instances (11-46 LOOP_DIAGNOSE on neighbor-naming + this LOOP_DIAGNOSE on default-direction). Per LOOP_DIAGNOSE Step 5 guardrail, broad protocol rewrites are deferred until ≥5-10 instances. The pattern is supported but not load-bearing enough yet to justify protocol-level changes beyond the 3 narrow MCs.
>
> - **Recommended next step:** implement MC1 + MC2 as direct spec edits to `cognitive_harness/sense-making/references/sensemaking.md` and `cognitive_harness/td-critique/references/td-critique.md`. Defer MC3 until MC1+MC2 prospective evaluation gates fire across ≥2 multi-operation-discipline inquiries. Monitor for a 3rd LOOP_DIAGNOSE chain producing the same pattern shape; if observed, promote pattern-claim from MED to HIGH and implement MC3 + consider whether the surfacing-side refinement should extend to additional discipline-design contexts.

**Piece-Level Inversion at P5 (content-axis):**

- *Inverted assumption:* ACTIONABLE verdict.
- *Alternative:* PARTIAL — the correction chain reveals likely weakness but candidates need more evidence.
- *What follows under PARTIAL:* MC1 and MC2 retroactive evaluation gates are HIGH-confidence; deferring them as "need more evidence" would be over-cautious given the empirically demonstrated harm at 17-01 K1. ACTIONABLE survives.
- Principal SURVIVES.

#### P6 — Open Questions + Pattern-Claim

**Principal candidate:**

> ## Open Questions
>
> ### Monitoring
>
> - **Observable after MC1 + MC2 are applied and the next ≥2 multi-operation-discipline inquiries run.** Does MC1's sub-aspect fire on at least one per-operation verb-meaning at sensemaking-time (target: ≥1/2)? Does MC2's dimension catch at least one authored-vs-intuited divergence at critique-time (target: ≥1/2)?
> - **Observable across LOOP_DIAGNOSE chains.** Does a 3rd correction chain produce the same authored-in-sensemaking → not-caught-by-critique shape? If yes, the pattern-claim promotes from MED to HIGH.
>
> ### Refinement Triggers
>
> - **If MC1's prospective gate yields 0/2 catches** over the next 2 multi-operation-discipline inquiries, the sub-aspect's fire-condition needs investigation — possibly the predicate "is the authored mechanism user-intended" needs sharpening to be more deterministically applicable. Refine MC1's wording.
> - **If MC2's prospective gate yields 0/2 catches** over the next 2 multi-operation-discipline inquiries, the dimension may need a more concrete prosecution recipe (specifying exactly what counts as "applying the authored text literally"). Refine MC2's wording.
> - **If MC1 + MC2 each yield 1/2 catches but the catches don't overlap (different cases)**, the defense-in-depth is working as intended — both refinements are independently justified.
> - **If a 3rd LOOP_DIAGNOSE chain shows the same shape**, implement MC3 immediately and consider whether the surfacing-side per-operation-decomposition refinement should extend to additional contexts (e.g., user-named protocols, user-named taxonomies).
>
> ### Research Frontier
>
> - **Whether the loop's structural gap generalizes beyond user-named operations** to other load-bearing concepts where NAMING precedes MEANING (user-named protocols; user-named anchors; user-named runners). The pattern at MED confidence applies to user-named-operations specifically; a 3rd instance in a different load-bearing-concept category would suggest a broader pattern that might warrant a protocol-level change rather than per-discipline spec refinements.
> - **Whether corrected-loop critique blind-spot (H4) has any addressable form** — currently acknowledged as structural property; investigation into whether a "retrospective dimension" (one that explicitly examines the prior loop's authored text for the directional commitments NOT-rejected by the current critique) could fill the gap. Out of scope here; flagged as research frontier.
>
> ### Pattern-Claim (with promotion criterion)
>
> The diagnostic claims the MVLw loop has a **structural gap at the per-operation verb-meaning level** for discipline-design inquiries with user-named operations whose mechanism descriptions are LLM-authored. **Confidence: MED**, based on 2 instances of identical loop-failure shape: (i) `devdocs/inquiries/2026-06-01_11-46__loop_diagnose__inquiry_elaboration_self_containment_failure_chain/finding.md` — neighbor-naming in NOT-list, authored-in-sensemaking → not-caught-by-critique; (ii) this inquiry — Itemize default-direction, same shape. Per the LOOP_DIAGNOSE protocol's Step 5 guardrail ("do not propose broad fundamentals rewrites from one weak correction chain"), the candidate maintenance is NARROW (3 spec refinements with evaluation gates). **Promotion criterion:** a 3rd LOOP_DIAGNOSE chain producing the same shape raises confidence to HIGH and justifies additional candidates beyond the current 3 (potentially a protocol-level change).

**Piece-Level Inversion at P6 (content-axis):**

- *Inverted assumption:* pattern-claim at MED confidence.
- *Alternative:* pattern-claim at LOW confidence (2 instances insufficient to claim pattern).
- *What follows under LOW:* would not justify MC1+MC2 as direct spec edits; would justify only monitoring without action. But the 2 instances independently confirm via DIFFERENT CONTENT (neighbor-naming vs default-direction) — same loop-failure shape via different content paths. MED is honest.
- *Alternative 2:* pattern-claim at HIGH confidence.
- *What follows under HIGH:* would justify broad protocol rewrites beyond the 3 narrow MCs. Per Step 5 guardrail, ≥5-10 instances needed for broad rewrites. MED holds.
- Principal SURVIVES.

## Phase 3 — Test (5-test cycle on principal candidates)

| Piece | Novelty | Scrutiny Survival | Fertility | Actionability | Mechanism independence | Disposition |
|---|---|---|---|---|---|---|
| **P0** | low (anchor reusing project conventions) | survives — without P0, downstream pieces would re-state | yes — cited by 6 pieces | yes | Combination converges | **ACTIONABLE** |
| **P1** | low (cite-and-summarize) | survives | yes — establishes inputs for P2 | yes | Combination converges | **ACTIONABLE** |
| **P2 (4 hypotheses)** | medium (per-hypothesis evidence cites are new content) | survives Inversion (alternative shapes fail protocol); intervention-shape Inversion marked-inapplicable | yes — feeds P3+P4+P5 | yes | Combination + Inversion + Constraint converge | **ACTIONABLE** |
| **P3** | low (reorganization of P2) | survives intervention-shape Inversion | yes | yes | Reorganization is intrinsic | **ACTIONABLE** |
| **P4 (3 MCs)** | medium (concrete spec refinement text + evaluation gates are new) | survives Inversion (alternative shapes fail; MC3-immediate-implementation fails Step 5 guardrail; MC2-removal fails defense-in-depth) | yes — concrete spec edits | yes | Constraint-ADD + Constraint-REMOVE + Inversion converge | **ACTIONABLE** |
| **P5** | low (verdict synthesis) | survives content-axis Inversion (PARTIAL fails given HIGH retroactive gates) | yes | yes | Synthesis | **ACTIONABLE** |
| **P6** | low-medium (pattern-claim with promotion criterion is new) | survives content-axis Inversion (LOW + HIGH both fail; MED is honest) | yes — research frontier opens questions | yes | Extrapolation + Inversion converge | **ACTIONABLE** |

### Re-test trigger check

- The pattern-claim at MED confidence (P6) is consistent with the LOOP_DIAGNOSE protocol's Step 5 guardrail. No committed claim contradicted.
- The MC3 deferral (P4 + P5) is consistent with the protocol's narrow-candidates spirit. No contradiction.
- **No RE-TEST TRIGGER fires.**

## Phase 3.5 — Assembly check

The 7 pieces compose into a coherent LOOP_DIAGNOSE finding per the protocol's Step 4 schema. Emergent value: the medical-differential-diagnosis analog (Domain Transfer) makes the multi-hypothesis structure memorable; the postmortem-style root-cause schema (Domain Transfer Native) confirms the diagnostic shape is recognizable across domains.

**The assembly SURVIVES.**

## Phase 3.6 — Axis coverage check

| Axis | Piece(s) | Variant present? |
|---|---|---|
| Correction chain identification | P1 | YES |
| Failure hypothesis schema | P2 (×4) | YES |
| Cross-cut attribution view | P3 | YES |
| Maintenance candidate with gates | P4 (×3) | YES |
| Verdict synthesis | P5 | YES |
| Open questions + pattern-claim | P6 | YES |
| Anchor for shared commitments | P0 | YES |

All 7 axes have variants. **PASS.**

## Telemetry

- **Generators applied:** 4/4 (Combination · Absence Recognition · Domain Transfer · Extrapolation)
- **Framers applied:** 3/3 (Lens Shifting · Constraint Manipulation [both directions] · Inversion [multi-axis])
- **Mechanism coverage:** **FULL** (7/7).
- **Convergence signal:** **YES** — multiple mechanisms converge:
  - Combination + Domain Transfer (postmortem schema; medical differential diagnosis) → confirm the LOOP_DIAGNOSE shape is recognizable.
  - Constraint-ADD ("implement all 3 immediately") + Constraint-REMOVE ("remove MC2") + Inversion (sensemaking-vs-critique primary attribution) → confirm MC1 primary + MC2 complementary + MC3 lighter ordering.
  - Extrapolation (2 → 3 → 5-10 instances trajectory) → confirms pattern-claim MED confidence with promotion criterion.
- **Survivors tested:** 7/7 principal candidates passed; all dispositions ACTIONABLE.
- **Failure modes observed:** **none.**

### Production-task additional telemetry

- **Per-piece mechanism log:**
  - `P0: [Combination:content, Inversion:content]`
  - `P1: [Combination:content, Inversion:content]`
  - `P2: [Combination:content, Inversion:content (content-axis), Inversion:intervention-shape, Constraint-ADD:content, Constraint-REMOVE:content, Domain Transfer:content (postmortem + medical)]`
  - `P3: [Inversion:intervention-shape]`
  - `P4: [Constraint-ADD:content, Constraint-REMOVE:content, Inversion:intervention-shape, Lens Shifting:content]`
  - `P5: [Inversion:content (content-axis)]`
  - `P6: [Extrapolation:content, Inversion:content (content-axis with 2 alternatives)]`
- **Meta-decision-piece classification:** P0/P1/P2/P3/P4/P5/P6 all META-DECISION.
- **Piece-level Inversion compliance:**
  - `P0: satisfied · P1: satisfied · P2: satisfied (content + intervention-shape, intervention-shape marked-inapplicable with override) · P3: satisfied (intervention-shape marked-inapplicable) · P4: satisfied (intervention-shape marked-inapplicable) · P5: satisfied (content-axis) · P6: satisfied (content-axis)`
- **FLAG condition check:** zero violated; zero axis-misalignment violations.
- **Overall verdict: PROCEED.**

## RE-TEST trigger for Critique

Critique should pressure-test:

1. Are H1's evidence-from-prior citations LITERALLY in 15-39 archived discipline outputs? (Self-reference recursion check on the cited lines.)
2. Does H2's nested sub-mechanism structure (dimension absence base + deferral + Dim 12 near-miss) muddle the diagnostic, or does it correctly preserve the layered causality?
3. Are MC1 + MC2 + MC3's retroactive evaluation gates' HIGH-confidence claims defensible? Test by hypothetically applying each MC to the prior inquiry and checking whether the predicted fire-behavior holds.
4. Is the pattern-claim MED confidence honest at 2 instances? Does the 11-46 + this inquiry comparison genuinely instantiate the same loop-failure shape, or are they only superficially similar?
5. Does P4's MC3 priority-deferral correctly capture the LOOP_DIAGNOSE Step 5 guardrail's spirit, or should MC3 implement immediately?
6. Is the user's question ("why did critique not catch that") actually answered by H2 + H4 (dimension absence + corrected-loop blind-spot), or is there a sharper answer that P5's verdict misses?
7. Self-reference recursion: applied to THIS inquiry's Source Input, does refined Itemize emit 1 item correctly? (One subject = the loop diagnostic; one action = diagnose; one deliverable-shape = the diagnostic finding. Expected: 1.)
