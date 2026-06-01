## User Input

`devdocs/inquiries/2026-06-01_11-46__loop_diagnose__inquiry_elaboration_self_containment_failure_chain/_branch.md` (priors consumed: surfacing / sensemaking / decomposition)

---

# Innovation — LOOP_DIAGNOSE: IE Self-Containment Failure Chain

## Seed
The decomposition pieces (G1 Correction-Chain · G2/G3 Hypotheses+Attribution-table joint · G4 four MCs · G5 Verdict · G6 Candidate-Failure-Modes register · G7 Open Frontiers). Goal: produce the concrete authorable content per piece per LOOP_DIAGNOSE Step 4.

**Methodology-mode consideration.** Inherited = **Standard default** (produce the diagnostic deliverable). Alternative = **Contrarian-rethink** of the diagnostic itself (is the primary-origin verdict right? is PARTIAL the right verdict-strength?). Decision: **Standard default + piece-level Inversion** on G5 (the verdict) and on G2 (primary-origin claim). Contrarian-rethink marked inapplicable (sensemaking settled the diagnostic; this run instantiates).

## Generate (mechanisms applied; key variations only — production task)

**Domain Transfer (Generator) — manufacturing failure-analysis (5-whys + Ishikawa).** In factory line failure-analysis, the rule is *find the upstream station where the defect first appeared, not the downstream station that didn't catch it.* This is the exact principle behind the primary-origin verdict: surfacing was where the defect first appeared (priming-by-gloss); downstream stages had inspection opportunities but the defect was already in the part. Reinforces the attribution.

**Combination (Generator).** Combine LOOP_DIAGNOSE's required failure-hypothesis schema + sensemaking's per-stage table → 8 hypothesis blocks (one per stage-pipeline pair), each with the seven LOOP_DIAGNOSE-required fields.

**Absence Recognition (Generator) — patch + redesign + already-present.**
- *Patch:* every MC needs an *evaluation gate* that is **specific** (observable, not "improve surfacing"). Per sensemaking + LOOP_DIAGNOSE Step 5, each MC gets a one-line gate.
- *Redesign:* a *stage-name glossary* should sit at G1 so G2/G3 use the same vocabulary verbatim (decomposition's hidden-coupling fix).
- *Already-present:* most of the LOOP_DIAGNOSE-required output is already drafted in sensemaking SV6 + decomposition pieces — innovation's job is to *render* it in the exact LOOP_DIAGNOSE shape.

**Inversion (Framer; piece-level, system depth).**
- Invert *"primary-origin at 01-17 surfacing"* → "diffuse — any single downstream stage could have caught it." System: this counter is real but doesn't survive — see the manufacturing transfer (upstream defect ≠ downstream non-catch); the priming-by-gloss propagates; the downstream checks were operating *inside* the primed frame. → **Inversion fails; primary-origin survives. Critique will pressure-test in N5.**
- Invert *"PARTIAL verdict"* → "ACTIONABLE — the user's hypothesis is clear; just ship MC-A." System: at N=1 chain, LOOP_DIAGNOSE Step 5 explicitly warns against broad source edits from one chain. ACTIONABLE would mean adopting MC-A now; PARTIAL means MC-A is gate-ready, waiting for either N≥2 or the next discipline-design inquiry to fire the gate. → **Inversion fails; PARTIAL appropriate per protocol.**
- Invert *"MC-A trigger: discipline-target only"* → "all surfacings should pull adjudicating memories." System: most inquiries don't have analogous self-containment-class constraints; broadening loses specificity and over-burdens surfacing. → **Inversion fails; narrow trigger confirmed.**

**Constraint Manipulation (Framer) — both directions.** ADD "each MC must carry a specific evaluation gate" → adopted across G4. REMOVE "all 4 MCs ship as a bundle" → adopted: MC-A is the primary candidate (the user's hypothesis with strong artifact support); MC-B/C/D are secondary with their own gates and can be evaluated independently.

**Lens Shifting (Framer) — future-spec-author lens.** Under this lens, MCs must be concrete edits not abstract suggestions; verdicts must be readable cold; the attribution table must give a one-glance view. Adopted in G3/G4/G5 wording below.

**Extrapolation (Generator).** If this pattern recurs in other discipline-design inquiries (N3 frontier), then MC-A's promotion would gate a broader pattern: surfacing's territory expands by inquiry-target-type (discipline-design ⇒ adjudicating-memories + self-contained-exemplars; other types ⇒ their own canonical-context items). Not adopted for this finding's verdict; flagged in G7.

## Inherited Frame Audit
Central seed assumption = "the sensemaking SV6 diagnostic is correct; this run produces its deliverable." Was it challenged? Yes — Inversion of primary-origin + PARTIAL verdict + MC-A trigger all to system level; all failed. **Audit does not fire.**

## Test + Assembly — the concrete LOOP_DIAGNOSE deliverable content

### G1 — Correction Chain Summary (concrete text)

> **Prior path A** (weak — first violation): `devdocs/inquiries/2026-06-01_01-17__inquiry_elaboration_scope_and_coverage/`. Produced a 7-border NOT-list with each border attributed to a named neighbor discipline (`→ /sense-making`, `→ /decompose`, `→ /surfacing`, `→ /innovate`, `→ /td-critique`, `→ runner+branch_inquiry`, `→ runner-meta`).
> **Prior path B** (weak — inherited + extended the violation): `devdocs/inquiries/2026-06-01_01-37__inquiry_elaboration_structural_design/`. Inherited 01-17's neighbor-attributed NOT-list verbatim AND newly minted the explicit phrase the user caught: each Component marked *"tailored; does not invoke the neighbor discipline."*
> **Corrected path:** `devdocs/inquiries/2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare/`. Adopted an output-organized self-contained design naming no other discipline anywhere; generalized the self-containment violation beyond the user's quoted phrase; renamed `why_makes_sense` → `rephrase_in_project_goal`; dropped+re-homed reference-authority.
> **Human correction (the spark):** *"each marked 'does not invoke the neighbor discipline'? wait what? IE shouldnt know about other disciplines...it is just is to elaborate with context and multilayered understanding."*
> **Human correction (this run — the surfacing-side hypothesis):** *"i would expect this kind of mistake to not happen, it should have been surfaced in surfacing i guess, and surfacing should have check examples especially regarding discipline-creation process..."*
> **What changed from prior to corrected:** prior treated IE's NOT-list as a list of neighbor-attributed borders (each row "→ /neighbor-X"); corrected re-expressed every boundary intrinsically in IE's own terms (IE produces re-statements and framings; does not produce the inquiry's answer, a model of the problem, a partition into work-pieces, or a judgment of solutions — naming no one). The fix-model was `cognitive_harness/routelister/references/routelister.md` §1.3-§1.4 (intrinsic NOT-list + explicit self-containment property) — available in the codebase the whole time.

> **Stage-name vocabulary (used verbatim by G2 and G3):** `surfacing-01-17` · `sensemaking-01-17` · `innovation-01-17` · `critique-01-17` · `surfacing-01-37` · `sensemaking-01-37` · `innovation-01-37` · `critique-01-37` · `cross-stage-attribution`.

### G2 — Failure Hypotheses (8 per-stage blocks)

#### Hypothesis 1: Surfacing-01-17 — priming-by-gloss + absent adjudicating memory + wrong-priority fix-model
**Affected stage:** surfacing-01-17.
**Shortcoming type:** missed-relevance (specifically: surfaced relevance with wrong framing + absent project-memory).
**Evidence from prior inquiry:** `01-17/docarchive/surfacing.md` item #6 anatomy gloss reads *"NOT-list is the border WITH NEIGHBORS (defines scope by exclusion)"* (priming-by-gloss). Item #15 (routelister) tagged "sub" priority with gloss "self-containment + NOT-list discipline" but missing the load-bearing property "grounds each exclusion in an intrinsic feature, NEVER by naming a neighbor." Project memory `feedback_disciplines_self_contained` is completely absent from the surfacing trace (no region, no item).
**Evidence from human correction:** the user's surfacing-side hypothesis ("surfacing should have check examples especially regarding discipline-creation process") names this stage.
**Evidence from corrected inquiry:** `09-54/docarchive/surfacing.md` Region C surfaced BOTH the memory AND routelister §1.3-1.4 at CORE priority with the sharper gloss ("NEVER by naming a neighbor") — direct contrast.
**Confidence:** HIGH.
**Why not stronger:** strict N≥2 isolation requires a second discipline-design inquiry exhibiting the same surfacing-stage primer; the gates in MC-A will produce that evidence if/when it fires.
**Maintenance candidate:** MC-A (primary).
**Evaluation gate:** next discipline-design inquiry's surfacing trace includes `feedback_disciplines_self_contained` AND a self-contained-spec exemplar at core priority with intrinsic-pattern gloss.

#### Hypothesis 2: Sensemaking-01-17 — propagation + frame-exit aimed at wrong axis
**Affected stage:** sensemaking-01-17.
**Shortcoming type:** propagation of priming + aimed-at-wrong-axis check.
**Evidence from prior inquiry:** `01-17/docarchive/sensemaking.md` "Structural points" reads *"Neighbors fixing the borders: surfacing (draws items), sense-making (structures the problem), decompose (partitions the problem)..."* — explicit neighbor-attribution propagation from surfacing's framing. The Frame-exit Completeness perspective fired on overloaded vocabulary (understanding / decomposition / verify / elaboration referents) but did NOT fire on the NOT-list's structural property ("is the NOT-list construction itself self-contained?").
**Evidence from human correction:** user did not flag this stage directly; flagged downstream symptom.
**Evidence from corrected inquiry:** `09-54/docarchive/sensemaking.md` K1 generalized the self-containment violation beyond the user's quoted phrase; K4 named "Components defined by mirroring neighbor operations" as the same smell one level up — a structural-property check sensemaking-01-17 did not run.
**Confidence:** MED-HIGH (the propagation evidence is artifact-isolated; the "aimed-at-wrong-axis" claim is interpretive but supported).
**Why not stronger:** frame-exit's axis-choice could be a generalizable refinement (MC-B) or a one-off; need N≥2.
**Maintenance candidate:** MC-B.
**Evaluation gate:** next discipline-design inquiry's frame-exit perspective explicitly checks the NOT-list / Components for self-containment property (not only vocabulary referents).

#### Hypothesis 3: Innovation-01-17 — Inversion did not probe "name no neighbor"
**Affected stage:** innovation-01-17.
**Shortcoming type:** missed-mechanism-axis (Inversion fired on object-test + mode-test but not on the NOT-list's load-bearing claim).
**Evidence from prior inquiry:** `01-17/docarchive/innovation.md` Inversion section probed *object = request* and *perceive = not act* — but did not probe *"each border attributed to a named neighbor"* as a load-bearing claim. The NOT-list passed through as the literal text *"problem-understanding→sense-making · problem-partition→decompose · ..."* without challenge.
**Evidence from human correction:** indirect (the user caught the symptom).
**Evidence from corrected inquiry:** `09-54/docarchive/innovation.md` Inversion was applied at the meta-decision pieces (object-test, mode-test) AND the Inherited-Frame-Audit fired (catching the previously-unchallenged inherited NOT-list framing).
**Confidence:** MED.
**Why not stronger:** Inversion's axis-coverage is genuinely hard to make complete; an "Inversion-must-include-this-axis" rule risks over-specifying the mechanism. Better: Critique-side scan (MC-C) catches what Inversion misses.
**Maintenance candidate:** supports MC-C (downstream catch) more than a per-mechanism Inversion rule.
**Evaluation gate:** see MC-C below.

#### Hypothesis 4: Critique-01-17 — self-defeating dimension + no scan for neighbor-names
**Affected stage:** critique-01-17.
**Shortcoming type:** self-defeating dimension wording + missing concrete prosecution.
**Evidence from prior inquiry:** `01-17/docarchive/critique.md` Phase-0 dimension reads *"Coherence / non-overlap (project risk): Does it fit 22-30's arc + the canon, WITHOUT claiming any neighbor's territory."* The dimension's own wording forces naming neighbors to test for non-overlap. Phase-2 check 5 *"NOT-list non-overlap"* asked *"does comprehend-request overlap surfacing ('both take in input')?"* — names the neighbor in the test. The check WAS the violation.
**Evidence from human correction:** the user caught what critique should have flagged.
**Evidence from corrected inquiry:** `09-54/docarchive/critique.md` self-containment dimension applied as a scan-for-neighbor-names across all produced text; zero neighbor-names survived.
**Confidence:** HIGH (artifact-isolated; the dimension wording is verbatim).
**Why not stronger:** N≥2 chains needed to promote "self-defeating dimension" to a named failure mode.
**Maintenance candidate:** MC-C.
**Evaluation gate:** next discipline-design inquiry's critique Phase-2 includes a concrete scan-for-neighbor-names in the produced spec text; the dimension wording does not force the failure-it-tests.

#### Hypothesis 5: Surfacing-01-37 — narrowest reading of the adjudicating memory + inherited verdict not re-tested
**Affected stage:** surfacing-01-37.
**Shortcoming type:** narrow-reading of project memory + inherited-without-re-test.
**Evidence from prior inquiry:** `01-37/docarchive/surfacing.md` item #15 surfaced the self-containment memory at "sub" priority with gloss *"no outbound pointers to design-history/theory; the structure must be standalone"* — only the memory's narrowest interpretation (folder-pointer-only). Item #7 surfaced routelister at CORE priority — the fix-model was finally clear — BUT the inherited 01-17 NOT-list was not re-tested against this newly-clear model.
**Evidence from human correction:** the user's main objection was to phrasing produced in 01-37 (B5 below).
**Evidence from corrected inquiry:** `09-54/docarchive/surfacing.md` H1 frontier flag explicitly named the broader pattern *"the self-containment violation is broader than the Component phrasing: the entire 01-37 NOT-list names neighbors, and the verdict-header/guard lean on neighbor concepts"* — exactly what surfacing-01-37 missed.
**Confidence:** MED-HIGH.
**Why not stronger:** "narrow reading" is partly interpretive; the memory itself is genuinely written narrowly.
**Maintenance candidate:** MC-A + MC-D.
**Evaluation gate:** next discipline-design inquiry surfacing the same memory glosses it at the broader-applicable reading (covering "no neighbor-naming in load-bearing positions," not only "no folder pointers").

#### Hypothesis 6: Sensemaking-01-37 — stated-then-violated principle within the same document
**Affected stage:** sensemaking-01-37.
**Shortcoming type:** stated-then-violated (a narrower form of sensemaking failure-mode #6 Self-Reference Blindness).
**Evidence from prior inquiry:** `01-37/docarchive/sensemaking.md` C2 states *"the spec has NO outbound pointers... it defines its own vocabulary and grounds each NOT-list entry intrinsically."* The next bullet K3 violates this: *"§2 Components describe each phase as a tailored internal operation that does not invoke the neighbor discipline"* — names "the neighbor discipline" in a paragraph directly under "grounds each NOT-list entry intrinsically." The author stated the principle then violated it in adjacent prose.
**Evidence from human correction:** the user caught the violated form (B5).
**Evidence from corrected inquiry:** `09-54/docarchive/sensemaking.md` opens with a maximal self-reference guard and stays neighbor-free throughout.
**Confidence:** HIGH (verbatim adjacency in the same document).
**Why not stronger:** at N=1 it could be a one-off; pattern-promotion needs N≥2.
**Maintenance candidate:** supports E5 promotion at N≥2; no source-edit MC at N=1.
**Evaluation gate:** observe the next 2-3 discipline-design sensemaking outputs for the same adjacent-anchor stated-then-violated pattern.

#### Hypothesis 7: Innovation-01-37 — minted the user's-quoted phrase (not inherited)
**Affected stage:** innovation-01-37.
**Shortcoming type:** new-text-violation (innovation introduced the most explicit form of the violation) + missing Inversion-on-NOT-list (same as Hypothesis 3, recurring).
**Evidence from prior inquiry:** `01-37/docarchive/innovation.md` D2 §2 Components newly phrased: *"each tailored; does not invoke the neighbor discipline."* This phrase was not in 01-17; it was introduced here. Per-Component lines repeat the phrase. Inversion did not probe "name no neighbor."
**Evidence from human correction:** the user quoted this exact phrase.
**Evidence from corrected inquiry:** `09-54/docarchive/innovation.md` reframed Components intrinsically, naming no neighbor; the K4 generalization (sensemaking) was directly applied.
**Confidence:** HIGH (phrase-level artifact match to user's quote).
**Why not stronger:** the new-mint failure could be one-off creativity vs systematic pattern; need N≥2.
**Maintenance candidate:** MC-C (downstream scan catches what innovation produces).
**Evaluation gate:** see MC-C.

#### Hypothesis 8: Critique-01-37 — narrowest-reading dimension; no scan-for-neighbor-names
**Affected stage:** critique-01-37.
**Shortcoming type:** narrow-reading of self-containment + missing concrete prosecution (same shape as Hypothesis 4, recurring).
**Evidence from prior inquiry:** `01-37/docarchive/critique.md` Phase-0 self-containment dimension: *"No outbound pointers; vocabulary self-defined?"* — applied at the memory's narrowest reading (folder-pointer-only). No Phase-2 prosecution scanned the produced text for neighbor-names. The NOT-list "→ /sense-making" etc. and the "does not invoke the neighbor discipline" phrases passed through unchallenged.
**Evidence from human correction:** the user caught what critique didn't.
**Evidence from corrected inquiry:** `09-54/docarchive/critique.md` self-containment GATE dimension at critical weight, with explicit Phase-2 scan for neighbor-names across all produced text. Zero neighbor-names survived.
**Confidence:** HIGH (recurring pattern Hypothesis 4 → Hypothesis 8 → 09-54 fix, three-point evidence).
**Why not stronger:** see Hypothesis 4.
**Maintenance candidate:** MC-C.
**Evaluation gate:** see MC-C.

### G3 — Failure Attribution Summary (compact table)

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

### G4 — Maintenance Candidates (4 blocks)

#### MC-A — Discipline-target surfacing-territory check (PRIMARY)
- **What should change:** when an inquiry's `_branch.md` targets a discipline artifact (creating, refining, restructuring, or otherwise meta-operating on a discipline spec), surfacing's territory must include — at CORE priority — (i) project memories adjudicating discipline construction (currently: `feedback_disciplines_self_contained`); (ii) one or more existing self-contained discipline specs as PATTERN exemplars, glossed with their load-bearing self-containment property (not just shape) — e.g., for routelister: "NOT-list grounds each exclusion in an intrinsic feature of the operation, NEVER by naming a neighbor."
- **Which file/protocol affected:** `cognitive_harness/surfacing/references/surfacing.md` — add a one-paragraph note in §3.6 Re-invocation parameters (or wherever territory-specification is described) keyed by the inquiry's target type. Alternative: a one-paragraph rule in the runner-side `_branch.md` template that pre-loads these into purpose framing.
- **Risk class:** LOW. Purely additive to surfacing's territory; trigger narrowly-scoped (discipline-target inquiries only); no existing surfacing behavior changes.
- **Expected benefit:** prevents Hypothesis-1's primary-origin failure mode (priming-by-gloss + absent memory + wrong-priority fix-model). Per the manufacturing-failure-analysis transfer: catches the defect at the upstream station rather than at downstream inspection.
- **Evaluation gate:** the next discipline-design inquiry's `surfacing.md` artifact contains BOTH (i) the relevant project memory AND (ii) at least one existing self-contained discipline spec (with the intrinsic-pattern gloss) at core priority. And: downstream produced spec text contains zero neighbor-names that would have to be removed.
- **Branch-experiment?** NO — at N=1, gate-evaluation is via observation on the next applicable inquiry, not a separate branch run.
- **Source-edit-now? or wait-for-N≥2?** **WAIT.** Per LOOP_DIAGNOSE Step 5: at N=1 chain, source edits should require strong evidence; the gate provides cheap empirical evidence on the next applicable inquiry. Promote to source-edit when (a) the gate fires affirmatively on the next inquiry, OR (b) N≥2 chains of the same pattern accumulate.

#### MC-B — Sensemaking frame-exit perspective: structural-property check
- **What should change:** when an inquiry produces a discipline construct (NOT-list, Components, Identity), the Frame-exit Completeness perspective should include a "structural-property check" — does the produced construct violate any adjudicating principle inherited from project context? — in addition to the existing vocabulary-referent check.
- **Which file/protocol affected:** `cognitive_harness/sense-making/references/sensemaking.md` — small addition to the Frame-exit Completeness perspective (Phase 2). 
- **Risk class:** LOW. Refinement of an existing check, not a new mechanism.
- **Expected benefit:** prevents Hypothesis-2's aimed-at-wrong-axis failure (the check that exists firing on the wrong axis).
- **Evaluation gate:** the next discipline-design inquiry's sensemaking frame-exit explicitly checks the NOT-list / Components for structural-property violations, not only for vocabulary referents.
- **Branch-experiment?** NO.
- **Source-edit-now? or wait-for-N≥2?** **WAIT.** Gate-evaluation on next applicable inquiry.

#### MC-C — Critique self-containment gate + non-self-defeating dimension wording
- **What should change:** two parts. (i) When self-containment is a critical-weight dimension, Phase-2 prosecution MUST include a concrete adversarial test: *"scan EVERY produced spec sentence for neighbor-names"* (specifically: any reference to another named discipline / `/skill-name` / specific external-component name). (ii) Dimension wording should not contain phrases that force naming the thing under test — e.g., "non-overlap with neighbor's territory" → re-word to "scope-coherence of the discipline's own borders" or "self-contained boundary check."
- **Which file/protocol affected:** `cognitive_harness/td-critique/references/td-critique.md` — small addition to Phase-2 Adversarial Evaluation (the concrete-test rule) + a one-line caution on dimension wording.
- **Risk class:** LOW. Adds a specific prosecution test; does not alter existing dimension framework.
- **Expected benefit:** catches what slips through surfacing (Hypothesis 4 + 8 — the recurring critique-side missing scan).
- **Evaluation gate:** next discipline-design inquiry's critique Phase-2 includes the scan; zero neighbor-names survive into the spec output. Dimension wording does not force the failure-it-tests.
- **Branch-experiment?** NO.
- **Source-edit-now? or wait-for-N≥2?** **WAIT.** Gate-evaluation on next applicable inquiry.

#### MC-D — Inherited-Commitments-Re-test broader-reading enforcement
- **What should change:** when a discipline-design inquiry's CONCLUDE compiles Inherited-Commitments-Re-test, the Re-test must include the broader-reading test: *"does the inherited verdict's TEXT violate self-containment under the broader reading (no neighbor-naming in load-bearing positions), not only the narrowest reading (no folder-pointers)?"*
- **Which file/protocol affected:** `cognitive_harness/protocols/conclude.md` — a one-paragraph addition to the Inherited-Commitments-Re-test section enforcement, keyed by inquiry target type.
- **Risk class:** LOW. Refines an existing enforcement check; trigger narrowly-scoped.
- **Expected benefit:** prevents Hypothesis-5's narrow-reading + inherited-without-re-test failure.
- **Evaluation gate:** next discipline-design inquiry inheriting a prior verdict via Synthesis Trigger names the broader-reading check explicitly in the Re-test.
- **Branch-experiment?** NO.
- **Source-edit-now? or wait-for-N≥2?** **WAIT.** Gate-evaluation on next applicable inquiry.

### G5 — Diagnostic Verdict

> **Overall:** **PARTIAL** — per LOOP_DIAGNOSE Step 4 rubric. The correction chain reveals likely weaknesses with strong artifact-isolated evidence at the primary-origin (surfacing-01-17, HIGH confidence on A1+A3+C1 triangulation). Maintenance candidates are narrow + gated; source edits should wait for either N≥2 chains or the next discipline-design inquiry's evaluation gate to fire.
>
> - **Best-supported diagnosis:** the failure-chain has a **primary-origin at surfacing-01-17** (priming-by-gloss via the anatomy item's gloss; absent self-containment memory; wrong-priority fix-model), with **downstream confirmation-failures** at every 01-17 stage (sensemaking-frame-exit-aimed-wrong-axis; innovation-Inversion-missed-NOT-list; critique-self-defeating-dimension) that recurred at 01-37 in a slightly different form (narrow-reading memory + stated-then-violated principle + minted-user's-quoted-phrase + narrowest-reading critique). The user's surfacing-side hypothesis is supported in a narrowed form (discipline-target trigger, not all surfacings).
>
> - **Strongest maintenance candidate:** **MC-A** (discipline-target surfacing-territory check — the user's hypothesis precisely scoped). It addresses the primary-origin failure directly; risk class LOW; the evaluation gate is observable on the next discipline-design inquiry. MC-C is the second-strongest (it catches downstream what MC-A doesn't prevent upstream; both are load-bearing, neither alone is sufficient given 01-37's evidence that surfacing-fix-alone doesn't catch 01-37-style new-minting at innovation).
>
> - **Main uncertainty:** N=1 chain. The verdict's promotion path requires either N≥2 chains showing the same pattern OR the next discipline-design inquiry's evaluation gates firing affirmatively. The pattern is plausible and artifact-supported but not yet repeatedly observed across distinct inquiries. The secondary uncertainty: whether the candidate failure modes E1/E4/E5 should be promoted to named modes (sensemaking's classification said promote-at-N≥2; this verdict respects that gate).
>
> - **Recommended next step:** monitor the next discipline-design inquiry against the four evaluation gates. If gates fire affirmatively on the next applicable inquiry → upgrade MC-A and MC-C to ACTIONABLE (source-edit). If a second discipline-design inquiry exhibits the same pattern (N=2) → upgrade with stronger evidence + consider promoting the candidate failure modes E1/E4/E5 to named modes in their respective discipline specs. Until either trigger fires: maintenance candidates remain *named, narrow, and gated* per LOOP_DIAGNOSE Step 5.

### G6 — Candidate Failure Modes for Revival Register (named, NOT promoted at N=1)

#### Candidate-E1 — Priming-by-gloss
- **Stage of origin:** surfacing.
- **Concise definition:** a surfaced item's GLOSS frames a structural concept (e.g., characterizes the NOT-list as inherently neighbor-attributed); downstream stages adopt the framing without challenging it, looking *inside* the framing rather than *at* it.
- **Recognition signal:** the surfacing artifact's gloss for a load-bearing item characterizes a structural concept by what it relates to (here: "border WITH NEIGHBORS") rather than by its intrinsic property (here: "intrinsic-feature-grounded exclusion"). Downstream stages then build with the relational framing.
- **Why-novel (why doesn't it fold into existing modes):** surfacing's existing Missed-relevance LAYER-1 mode captures "the item wasn't surfaced." Priming-by-gloss is sharper — the item WAS surfaced, but the *gloss* surfaced framed it wrong, and that framing propagated.
- **Promotion trigger:** N≥2 chains of the same pattern (a surfacing gloss priming a downstream violation).

#### Candidate-E4 — Self-defeating dimension
- **Stage of origin:** critique.
- **Concise definition:** a critique dimension whose own wording forces the failure it should catch — e.g., "non-overlap with neighbor's territory" must name neighbors to be tested, so the test produces the violation it should detect.
- **Recognition signal:** the dimension contains the THING-UNDER-TEST in its own wording. A clean dimension can be tested without performing the violation.
- **Why-novel:** critique's existing 7 failure modes don't cover the case where the dimension architecture itself is self-defeating; "Wrong dimensions" comes close but covers irrelevant dimensions, not self-defeating-when-applied dimensions.
- **Promotion trigger:** N≥2 chains of the same pattern (a dimension that performs the violation it tests).

#### Candidate-E5 — Stated-then-violated principle
- **Stage of origin:** sensemaking.
- **Concise definition:** the author states a principle in one anchor of a sensemaking document (e.g., a Constraint or Foundational Principle) and violates that principle in the next anchor (e.g., a Key Insight) within the same document.
- **Recognition signal:** the principle's text + a violation of the principle's text appear in adjacent anchors of the same SV-level pass.
- **Why-novel:** sensemaking's failure mode #6 Self-Reference Blindness covers using-a-discipline-to-evaluate-something-sharing-its-assumptions. Stated-then-violated is more specific: within-document adjacency.
- **Promotion trigger:** N≥2 chains of the same pattern (adjacent stated-then-violated anchors in sensemaking outputs).

### G7 — Open Frontiers

- **N3 (broader-pattern check):** do other discipline-design inquiries in the project (e.g., the routelister design-history, the routeman design-history) exhibit the same surfacing-side vulnerability? Out of scope for this diagnostic's verdict; recommended for project-level monitoring after MC-A's first gate-evaluation.
- **N4 (revival-register format):** should candidate-failure-modes E1/E4/E5 live in a register file (analogous to `cognitive_harness/cognitive_fixes/`) or only in this finding's G6? Structural-layer decision; out of this diagnostic.
- **N5 (Critique pressure-test reservation):** the primary-origin verdict should survive critique's strongest prosecution ("any single downstream stage could have caught it"). The Inversion section above tested this; Critique stage will re-test.
- **N6 (1-7 vs 7-8 inheritance-pattern):** 01-37's recurrence of the same critique-stage failure type (narrow reading + missing scan) suggests the failure isn't purely 01-37-specific; it's a stable pattern in critique when self-containment is a dimension. This adds slight evidence weight to MC-C even at N=1.

## Dispositions
- **ACTIONABLE NOW (this run's deliverable):** G1–G7 concrete content above — ready to compile into the diagnostic finding.
- **GATED (source-edit) on N≥2 OR next-applicable-inquiry gate-firing:** MC-A, MC-B, MC-C, MC-D source edits.
- **DEFERRED to N≥2 register decisions:** candidate failure modes E1, E4, E5 promotion to named modes.
- **DEFERRED to project-level monitoring:** N3 broader-pattern check.

## Frontier
- The diagnostic is complete at N=1 with PARTIAL verdict. Critique should pressure-test G2 Hypothesis-1's primary-origin claim against the "diffuse attribution" counter (the strongest counter named in sensemaking A1) and confirm the verdict survives, or downgrade.
