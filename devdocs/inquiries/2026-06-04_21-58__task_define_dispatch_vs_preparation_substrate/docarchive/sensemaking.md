# Sensemaking: Task-Define MQ2 — Dispatch-Substrate vs Preparation-Substrate

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/_branch.md`

Upstream input: `surfacing.md` — 100 items across 12 regions (P/D/L/A/M/R/S/T/C/I/U/G); 8 frontier flags F1-F8.

---

## SV1 — Baseline Understanding (pre-analysis)

The user is claiming that the runner always invokes `/surfacing`, making "dispatch substrate" the wrong framing for MQ2's answer (no dispatch decision exists). They propose MQ2 is for "lightweight preparation." The inquiry needs to test this premise, redefine the concept if premise holds, and re-test prior commitments that depend on the dispatch framing.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

| # | Anchor | Source |
|---|---|---|
| **C1** | Task-Define's substrate: task statement + LLM internal cognition only | task-define spec §1.5 |
| **C2** | Lightweight-stance commitments: paragraph per operation; no sub-machinery; no separate verify-phase | task-define authoring tradition |
| **C3** | Perception/action split: discipline perceives, runner acts (architectural invariant) | mode 6 finding §2.4 commitment |
| **C4** | Just-committed MQ2 substance (21-12 finding): verdict + kinds + stance + hypothetical-relational mode — load-bearing inheritance | 21-12 MQ2 reframe finding |
| **C5** | Mode 6 §4.2 detection rule structure: binary detection on presence/absence of verdict + (when yes) kind content | 14-14 mode 6 amendment |
| **C6** | /surfacing's input contract: requires `purpose` + `territory` specification | /surfacing spec §3.3 |
| **C7** | Layer Commitment: meaning only; structural + process out of scope | this inquiry's `_branch.md` |

### Key Insights

| # | Anchor | Note |
|---|---|---|
| **K1** | "Dispatch" semantically implies routing/decision; if no decision (always-invoke), no dispatch. The user's critique is structurally clean. | Surfacing D1+D2 |
| **K2** | Even under always-invoke, MQ2's answer is LOAD-BEARING for /surfacing — but as INPUT-FORMULATION, not INVOCATION-DECISION. Substance survives; function-name changes. | Surfacing D4+D5 |
| **K3** | The verdict {yes,no,uncertain} still represents PERCEIVED CONTEXT-NEED — under preparation framing, this perception informs /surfacing's purpose formulation (e.g., verdict=no → vacuous purpose → /surfacing returns empty quickly). | Surfacing M3+M4 |
| **K4** | Mode 6 detection rule's structural content is name-independent — detects missing required content (verdict + kind) regardless of "dispatch" or "preparation" naming. | Surfacing M5+M7 |
| **K5** | Perception/action split SHIFTS but doesn't dissolve — action target moves from invocation-decision to input-formulation. | Surfacing S4+S5 |
| **K6** | Substance from 21-12 finding survives the concept correction — only GATING LANGUAGE in §4 table needs correction (re-grounding as input-formulation). | Surfacing R5+R10 |
| **K7** | User's "lightweight way" most likely refers to the CONCEPT (no heavy routing decision-machinery) rather than the SUBSTANCE shape (which they didn't directly challenge). | Surfacing L10 |

### Structural Points

| # | Anchor | Source |
|---|---|---|
| **S1** | 4 prior commitments under re-test: 15-39 original (introduced "dispatch substrate") + 14-14 mode 6 (committed §2.4+§4.2 with dispatch terminology) + 17-02 verification (confirmed mode 6 coverage with dispatch framing) + 21-12 reframe (committed gating language with dispatch framing) | _branch.md Synthesis Trigger |
| **S2** | Substrate-role candidate set: {A1 preparation, A2 framing, A3 pre-shape, A4 lightweight-priors, A5 input} | Surfacing A-region |
| **S3** | Pipeline placement: MQ2 fires Stage 2 of per-item iteration; BEFORE /surfacing receives input | Surfacing T2+T3 |
| **S4** | Runner's bridge role: reads MQ2's answer + formulates /surfacing's input | Surfacing T4 |

### Foundational Principles

| # | Anchor | Source |
|---|---|---|
| **P1** | Lightweight stance (no sub-machinery; paragraph per operation) | Task-Define authoring tradition |
| **P2** | Perception/action split (architectural invariant) | mode 6 finding |
| **P3** | Substrate-compliance (no project-state access at Task-Define layer) | task-define spec §1.5 |
| **P4** | Asymmetric-failure principle (lean richer, stop at pre-surfacing — from 21-12) | 21-12 finding |
| **P5** | Concept-correctness > terminology-preservation (a wrong concept must be corrected even if documented) | meta-principle |

### Meaning-Nodes

| # | Anchor |
|---|---|
| **M1** | "always-invoke premise" — the structural claim under test |
| **M2** | "dispatch substrate" — the concept under challenge |
| **M3** | "preparation substrate" — leading candidate replacement |
| **M4** | "invocation-decision" vs "input-formulation" — functional axis distinction |
| **M5** | "vacuous purpose" / "vacuous territory" — what /surfacing receives when verdict=no or stance=fresh-self-contained |

### Meta-Inspection cross-reference (after SV2 — H4 + H5)

**H4 (concept names):** loop-coined: "preparation substrate", "always-invoke premise", "invocation-decision", "input-formulation", "vacuous purpose/territory". User-language: "always invoke", "prepare things", "lightweight way." Load-bearing concept test in Phase 3 will validate.

**H5 (motivating examples):** user gave NO concrete task example; critique is purely conceptual. Specific-vs-pattern recognition cue applies marginally — critique IS at pattern (concept) level.

### SV2 — Anchor-Informed Understanding

The user's critique is structurally clean: "dispatch" implies decision; if no decision (always-invoke), then dispatch is the wrong concept. The replacement concept must (a) capture MQ2's actual function (informing /surfacing's input formulation), (b) preserve lightweight-stance, (c) keep the perception/action split intact (just shifting the action target).

The substance commitment from 21-12 finding (verdict + kinds + stance + hypothetical-relational) survives independent of the concept correction — these elements are content-types that /surfacing's input needs, regardless of whether MQ2's role is called dispatch or preparation.

The 4 prior commitments need targeted corrections, not wholesale rewrites: concept-name changes (§2.4 + §4.2 in spec; mode 6 finding amendment text; original meaning-layer finding's concept introduction); gating-language correction (MQ2 reframe finding's §4 table); minor terminology updates (verification finding).

---

## Phase 2 — Perspective Checking

### Lateral perspectives

**1. Technical/Logical.** "Dispatch" is a precise technical term meaning routing/decision. If /surfacing always invokes, there's no routing → no dispatch → the term is misapplied. The substantive content MQ2 carries (verdict + kinds + stance) is the INPUT to /surfacing, not a routing key. The technical term that fits the actual function is "input" or "preparation" or "pre-shape." **Anchor T1:** technical clarity demands the rename.

**2. Human/User.** User explicitly said "prepare things in very lightweight way." User's framing wants preparation, not routing. User's "doesn't make sense" judgment is a meaning-layer signal: the concept is wrong. User experience confirms the technical/logical conclusion. **Anchor H1:** user-language fit = "prepare" → "preparation substrate" or close synonym.

**3. Strategic/Long-term.** If the dispatch concept is wrong now, fixing it now prevents propagation through future task-define inquiries and dependent disciplines. Strategic cost of correction is small (renames + gating-language fixes); strategic cost of leaving wrong is large (compounding bad architectural concept). **Anchor St1:** correct now to prevent compounding.

**4. Risk/Failure.** Three risks:
- **R1:** User's premise might be wrong (maybe /surfacing isn't always invoked in actual runner) — needs structural verification.
- **R2:** Concept rename might break dependent terminology in multiple files. Cascading corrections bounded (I1-I7 from surfacing).
- **R3:** Substance commitment might subtly depend on dispatch framing in ways not yet seen — need careful re-test in Phase 3.

**5. Resource/Feasibility.** Cascading corrections feasible — concrete spec rename + finding-text updates. No structural disruption. **Anchor F1:** feasibility high.

**6. Ethical/Systemic.** N/A.

**7. Definitional / Internal Consistency.**
- Does the corrected concept contradict §2.4 wording? YES — but §2.4 wording is the correction target.
- Does it contradict perception/action split? NO — split shifts (action = formulation, not decision) but survives.
- Does it contradict the just-committed substance (21-12)? NO — substance survives the concept correction; only gating language needs fix.
- Does it contradict mode 6 detection rule's structural content? NO — rule survives renaming.
- Internal consistency check on Task-Define itself: does corrected concept align with Task-Define's verb (expand-to-define)? YES — MQ2 still perceives kinds + stance + verdict as preparation for /surfacing; discipline's verb unchanged.
- **Anchor D1:** internal consistency preserved when REFINING + concept-rename + substance-survives all hold.

**8. Definitional / Frame-exit Completeness.** Apply gating:
- (i) Inherited terms from prior findings? YES — "dispatch substrate" from 15-39 finding; "dispatch info" from 14-14 finding; "runner-mediated alignment" from 21-12 finding; "perception/action split" from mode 6 finding.
- (ii) Used across ≥2 distinct propositions in this inquiry's structures? YES — "dispatch substrate" appears at: (a) original 15-39 concept, (b) 14-14 §2.4 amendment + §4.2 mode 6 rule, (c) 17-02 verification claims, (d) 21-12 reframe gating language, (e) explanatory doc paraphrase. 5 distinct propositions about the same term.

Gating FIRES. Apply 4 meta-categories:

1. **Existence Enumeration.** Project-wide referents of "dispatch substrate":
   - The §2.4 concept introduction (in spec)
   - The mode 6 detection rule's predicate object (§4.2)
   - The mode 6 amendment's necessary-information-content rule (§2.4)
   - The verification finding's substance-coverage claims (17-02)
   - The MQ2 reframe finding's runner-mediated-alignment foundation (21-12 §4 gating table)
   - The explanatory doc's paraphrase
   - The just-completed substance commitment (21-12) — but substance is name-independent so this is reference-only
   
   This inquiry's frame includes: the concept itself + the 4 prior commitments. Out of scope: explanatory doc paraphrase (downstream of meaning), substance commitment (survives independently).

2. **Role Assessment.** For each excluded referent — coherence preserved if ignored?
   - Explanatory doc paraphrase: YES; doc is downstream of meaning; gets corrected after.
   - Substance commitment (21-12): YES if substance survives concept correction (which we verify via C1-C7 from surfacing + Ambiguity 4 in Phase 3).

3. **Verdict Rigor.** Strongest counter-argument to "dispatch is wrong" verdict: "The dispatch framing might still be useful even if /surfacing always invokes — the verdict could 'dispatch' to different runner-side branches (formulate purpose differently for different verdict values)." Test on structural grounds: runner-side branching IS input-formulation differentiation, not invocation routing. Calling differentiated input-formulation "dispatch" stretches the term beyond its precise meaning. Counter weakens — surviving "dispatch" usage would be metaphorical-imprecise; replacement with precise term is cleaner. Counter fails on structural grounds (precision matters in architecture).

4. **Residual / Coverage Justification.** Frame-exit concerns not captured? Possibly: "Does the corrected concept have downstream-discipline implications beyond /surfacing?" — G5 from surfacing. Should test whether MQ2's preparation-substrate role might serve other downstream disciplines too. Verdict: scope is currently MQ2 → /surfacing; future ecosystem changes might extend. Note for finding.

**Frame-exit Completeness PASS.**

**9. Phase / Calibration-State.** Task-Define still in BOOTSTRAP state. Concept correction is meaning-layer; doesn't require calibration data. PASS.

### Meta-Inspection cross-reference (after SV3 — H1 + H2 + H3 + H7)

**H1 (candidate set convergence):** Apply meta-question to A1-A5: are these the same thing?
- A1 preparation / A3 pre-shape / A5 input — functionally synonymous; differ only in word choice. **Collapse: {A1, A3, A5} → "preparation substrate" class.**
- A2 framing is BROADER (framing > preparation); not a functional synonym.
- A4 lightweight-priors emphasizes lightness over function.
- Three effective candidate classes: {preparation-class, framing-broader, lightweight-priors}.

**H2 (frame scope):** PASS via Frame-exit Completeness.

**H3 (question framing):** the 9 observation targets are precise; not pre-biased. Question explicitly considers premise might be wrong (target 1). PASS.

**H7 (phase/calibration state):** PASS.

### SV3 — Multi-Perspective Understanding

The user's premise is structurally defensible (technical-logical + human-user + strategic + frame-exit verdicts all converge). The concept name "dispatch substrate" is **precisely-wrong** (Technical/Logical perspective): "dispatch" implies a routing decision that doesn't exist under always-invoke. The corrected concept should be **"preparation substrate"** (or close synonym; "input substrate" is terser but loses the "lightweight preparation" connotation; "framing substrate" is too broad).

The substance commitment from 21-12 finding survives unchanged; gating language in §4 table needs targeted correction. Mode 6 detection rule survives the renaming with operational substance intact.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Is the user's "always-invoke" premise correct structurally?

**Strongest counter-interpretation:** /surfacing may NOT be always invoked — the project's runner might have conditional invocation gates.

**Why counter fails (structural grounds):** even if a runner could in principle skip /surfacing, /surfacing's spec describes itself as lightweight; the cost of always-invoking on a self-contained task is bounded (empty territory → quick empty result). Conditional-invocation would require additional decision-machinery at the runner layer — which the user's lightweight-stance argues against. Structurally, always-invoke is consistent with /surfacing's design; conditional-invoke adds machinery without clear benefit. The runner-side architecture (which the user knows from working with it) appears to confirm always-invoke.

**Confidence:** MED-HIGH (premise structurally defensible; relies partly on user's domain knowledge of their own runner).

**Resolution:** ACCEPT the user's premise — /surfacing is always invoked in the project's standard runner architecture.

**What is now fixed:** always-invoke premise treated as established for downstream work.

**What is no longer allowed:** design moves presuming conditional-invocation of /surfacing.

**What now depends on this:** all of F2-F7 frontier flags gated on this acceptance.

**What changed in conceptual model:** the inquiry can proceed to concept correction with structural confidence.

---

### Ambiguity 2: What is the correct substrate-role concept name?

**Strongest counter-interpretation:** keep "dispatch substrate" with semantic broadening (dispatch can mean "send to" not just "route"); avoids cascading corrections.

**Why counter fails (structural grounds):** "dispatch" has a precise technical meaning (routing/decision). Broadening it semantically introduces ambiguity into architectural terminology. The precision-loss cost is higher than the cascading-corrections cost. Technical/Logical perspective explicitly demands precision; lazy semantic broadening compounds across future authoring.

**Confidence:** HIGH.

**Resolution:** **"PREPARATION SUBSTRATE"** is selected. Reasoning:
- (a) User-language alignment: "prepare things lightly" → preparation
- (b) Functional accuracy: MQ2's answer prepares /surfacing's input
- (c) Lightweight connotation built into "preparation": preparing ≠ executing/routing

Alternatives rejected:
- "Input substrate" — loses the lightweight nuance; sounds more like data-passing than prepared content
- "Framing substrate" — too broad; framing connotes context-setting beyond MQ2's per-item scope
- "Pre-shape input" — awkward as a noun phrase; less linguistically clean
- "Lightweight-priors" — emphasizes lightness over function; function should lead naming

**What is now fixed:** "preparation substrate" is the corrected concept name.

**What is no longer allowed:** "dispatch substrate" in future authoring; cascading uses in dependent contexts.

**What now depends on this:** cascading corrections (I1-I8 from surfacing).

**What changed:** the concept has a precise name aligned with user-language.

---

### Ambiguity 3: Does mode 6 detection rule survive the concept correction?

**Strongest counter-interpretation:** mode 6 rule was DESIGNED FOR dispatch detection; under preparation framing, the rule's purpose changes — maybe the rule itself needs replacement.

**Why counter fails (structural grounds):** the rule's STRUCTURAL CONTENT is binary detection on presence/absence of (verdict + (when verdict=yes) kind). This content is **name-independent** — the same predicate works whether we call MQ2's answer "dispatch info" or "preparation info." The rule's PURPOSE shifts (from "detect missing routing info" to "detect missing preparation info") but the detection MECHANISM stays. Counter fails on substance-vs-name distinction.

**Confidence:** HIGH.

**Resolution:** mode 6 detection rule SURVIVES the concept correction; only the rule's NAME/WORDING needs cosmetic updates. The structural content is preserved.

**What is now fixed:** mode 6 rule continues to apply; rename to "MQ2-answer-missing-preparation-info" (or similar non-dispatch language).

**What is no longer allowed:** rebuilding the rule from scratch under the new concept.

**What now depends on this:** §4.2 spec correction; mode 6 finding's amendment-text correction.

**What changed:** rule-naming aligned with corrected concept; operational substance unchanged.

---

### Ambiguity 4: Does the MQ2 reframe finding's substance commitment survive?

**Strongest counter-interpretation:** substance (verdict + kinds + stance + hypothetical-relational) was committed in service of runner-mediated DISPATCH alignment; under preparation framing, the substance might need restructuring (simpler).

**Why counter fails (structural grounds):** the substance elements map cleanly to PREPARATION as well as DISPATCH:
- **Verdict** (perceived context-need) → tells /surfacing what kind of need to expect (preparation)
- **Kinds** → tells /surfacing what TYPES of info to bias toward (input-formulation)
- **Stance** → tells /surfacing what RELATIONAL framing to operate under (input-formulation)
- **Hypothetical-relational mode** → keeps substance substrate-compliant (independent of dispatch/preparation naming)

Each substance element serves PREPARATION as well as DISPATCH. The substance is **function-name-independent**. Removing any element would lose preparation value just as it would lose dispatch value. Counter fails on substance-name-independence.

**Confidence:** HIGH.

**Resolution:** substance commitment from 21-12 finding SURVIVES the concept correction. ONLY the gating language in §4 table needs correction (re-ground as input-formulation rather than invocation-gating).

**What is now fixed:** substance (verdict + kinds + stance + hypothetical-relational) continues to hold; gating language gets specific corrections (R6-R8 from surfacing).

**What is no longer allowed:** substance simplification motivated by concept correction.

**What now depends on this:** MQ2 reframe finding's §4 table correction; cascading corrections enumeration.

**What changed:** substance survives intact; targeted text correction in MQ2 reframe finding.

---

### Ambiguity 5: Does the lightweight-stance interpretation favor substance simplification?

**Strongest counter-interpretation:** user's "lightweight way" might mean the substance itself should be simpler (back toward mode 6's verdict + one-sentence kind).

**Why counter fails (structural grounds):** textual trace of user's input — the user critiques the DISPATCH CONCEPT specifically; doesn't directly challenge the substance shape. The "lightweight way" framing immediately follows the concept critique ("doesnt makes sense ... meta questions are to prepare things in very lightweight way"), suggesting it modifies the CONCEPT critique (lightweight = no heavy routing) rather than separately demanding substance change. Additionally, the just-completed 21-12 finding committed the three-element substance at HIGH confidence after extensive sensemaking; reverting would discard committed work without new evidence.

**Confidence:** MED-HIGH (textual interpretation; could be argued otherwise but stronger reading aligns with concept-only critique).

**Resolution:** user's "lightweight way" applies to the CONCEPT (no heavy routing decision-machinery), not the SUBSTANCE shape. Substance commitment survives.

**What is now fixed:** lightweight-stance interpretation is concept-level; substance unchanged.

**What is no longer allowed:** substance simplification justified by "lightweight" without new evidence.

**What now depends on this:** substance survives; only concept rename + gating-language correction.

**What changed:** interpretation pivot resolved.

---

### Ambiguity 6: Does the perception/action split survive?

**Strongest counter-interpretation:** under preparation framing, the runner's action becomes "formulate /surfacing input" — but if /surfacing always invokes and formulation is mostly mechanical translation, is there really meaningful "action"?

**Why counter fails (structural grounds):** formulation IS action — the runner reads MQ2's preparation content (verdict + kinds + stance) and DECIDES how to translate that into /surfacing's purpose + territory + bias. Translation decisions can vary per runner (different runners can implement different translation logics; the runner-side translation is acknowledged out-of-scope per Task-Define spec §2.4 "runner-side extraction protocol"). The action is real, just shifted from invocation-decision to formulation-decision. Counter conflates "mechanical" with "absent" — even mechanical translation is an action.

**Confidence:** HIGH.

**Resolution:** perception/action split SURVIVES the concept correction. Action target shifts (formulation, not invocation-decision) but split itself preserved.

**What is now fixed:** split preserved; action = runner formulates /surfacing input.

**What is no longer allowed:** claiming the split dissolves under always-invoke.

**What now depends on this:** architectural-invariant preservation across the concept correction.

**What changed:** action target re-described (formulation vs invocation-decision).

---

### Ambiguity 7: How extensive are the cascading corrections?

**Strongest counter-interpretation:** only the spec needs correction; prior findings can stand as historical records.

**Why counter fails (structural grounds):** prior findings carry forward as authoritative references for future inquiries. If dispatch terminology persists in those findings without correction notes, future authors will inherit the wrong concept. Cascading corrections at FINDING-level are needed for future-coherence, not for retrospective revision. Counter fails on future-coherence concern.

**Confidence:** HIGH.

**Resolution:** cascading corrections needed at 7 targets:

| # | Target | Shape | Severity |
|---|---|---|---|
| 1 | `cognitive_harness/task-define/references/task-define.md` §2.4 | RENAME + revise wording | MUST |
| 2 | Same file §4.2 mode 6 | RENAME + reword amendment text | MUST |
| 3 | `devdocs/what_is_task_define.md` "Meta-question answers ARE the dispatch substrate" passage | REPAIR | MUST |
| 4 | `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md` §4 gating-language table | REPAIR + supersedes note | MUST |
| 5 | `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md` amendment text | REPAIR terminology | MUST |
| 6 | `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` concept introduction | SUPERSEDES note | MUST |
| 7 | `devdocs/inquiries/2026-06-04_17-02__task_define_mq2_shape_thoroughness_check/finding.md` | UPDATE terminology (light) | COULD |

**What is now fixed:** cascading corrections enumerated (7 items; 6 MUSTs + 1 COULD).

**What is no longer allowed:** leaving prior findings without correction notes.

**What now depends on this:** structural-followup work plan for user to schedule.

**What changed:** explicit followup scope.

---

### Load-bearing concept test

**Concept 1: "preparation substrate"** (loop-coined replacement).
- Counter: loop-coined; could other terms fit better (input substrate, pre-shape input, etc.).
- Why counter fails: A8/A10 from surfacing already adjudicated — preparation captures both function (preparing /surfacing input) and lightweight character (preparing ≠ executing). Other terms either lose lightness (input substrate) or precision (framing substrate). User-language alignment ("prepare things lightly") confirms.
- Confidence: HIGH.
- Resolution: keep "preparation substrate"; document naming rationale in finding.

**Concept 2: "always-invoke premise"** (loop-coined; describes user's claim).
- Counter: loop-coined; user said "always invoke" but didn't formalize as "premise."
- Why counter fails: "premise" is standard analytical term for a claim being tested. Structural meaning is what matters.
- Confidence: HIGH.
- Resolution: keep.

**Concept 3: "input-formulation" vs "invocation-decision"** (functional axis distinction; loop-coined).
- Counter: loop-coined technical terms; user didn't use them.
- Why counter fails: precise functional descriptions. Without them, substance-vs-name distinction is harder to articulate. Structural utility justifies coining.
- Confidence: HIGH.
- Resolution: keep both as functional-axis vocabulary.

**Concept 4: "vacuous purpose" / "vacuous territory"** (loop-coined; describes what /surfacing receives when no-context-need).
- Counter: loop-coined; could be "empty purpose" / "empty territory."
- Why counter fails: "vacuous" emphasizes the not-meaningfully-populated quality more precisely than "empty"; "empty" could imply error state, "vacuous" implies intentionally-light.
- Confidence: MED.
- Resolution: use "vacuous" with note that "empty" is acceptable alternative.

### Specific-vs-pattern recognition cue

The user gave NO specific task example (no analogous case). The critique is purely conceptual; the cue applies marginally — the critique IS at the pattern level (concept), not at specific case level. No additional cue work needed.

### SV4 — Clarified Understanding

The user's always-invoke premise is structurally defensible — /surfacing is always invoked; there is no dispatch decision. The dispatch-substrate concept is therefore precisely-wrong (Technical/Logical perspective; Human/User perspective; lightweight-stance perspective all converge). The corrected concept is **"PREPARATION SUBSTRATE"** — capturing both MQ2's actual function (preparing /surfacing's input) and the lightweight character (preparing ≠ routing/executing).

The substance commitment from the just-completed MQ2 reframe finding survives the concept correction unchanged — verdict + kinds + stance + hypothetical-relational mode serve preparation just as they served the dispatch framing (substance is function-name-independent). Only the GATING LANGUAGE in §4 table needs correction (re-ground as input-formulation rather than invocation-gating).

The mode 6 detection rule's structural content survives — it detects missing required content (verdict + kind) regardless of concept-name. Only the rule's name/wording needs cosmetic updates ("MQ2-answer-missing-preparation-info" or similar).

The perception/action split survives — action target shifts from "decide whether to invoke /surfacing" to "formulate /surfacing's input from MQ2's preparation."

Cascading corrections are bounded (7 targets: 6 MUSTs + 1 COULD). The lightweight-stance interpretation favors concept correction only; substance simplification not warranted.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed (frontier flags closed via Phase 3 ambiguity resolutions)

| Flag | Closed at | Settled value |
|---|---|---|
| **F1** — always-invoke premise verification | Ambiguity 1 | **ACCEPTED** (premise structurally defensible) |
| **F2** — substrate-role concept selection | Ambiguity 2 | **"preparation substrate"** |
| **F3** — mode 6 detection rule survival | Ambiguity 3 | **SURVIVES with rename** (operational substance unchanged) |
| **F4** — MQ2 reframe finding (21-12) gating language correction scope | Ambiguity 4 | **TARGETED §4 TABLE FIX** (gating language → input-formulation language) |
| **F5** — substance commitment compatibility | Ambiguity 4 | **COMPATIBLE; SURVIVES UNCHANGED** (substance is function-name-independent) |
| **F6** — lightweight-stance interpretation | Ambiguity 5 | **CONCEPT-LEVEL ONLY** (substance unchanged) |
| **F7** — cascading corrections enumeration | Ambiguity 7 | **7 targets** (6 MUSTs + 1 COULD) |
| **F8** — substrate-role name selection | Ambiguity 2 | **"preparation substrate"** (terse functional name) |
| **Additional (perception/action split)** | Ambiguity 6 | **SURVIVES with action target shift** |

### Eliminated options

- "Dispatch substrate" terminology (replaced by "preparation substrate")
- Conditional-invocation reading of /surfacing (refuted by always-invoke acceptance)
- Substance simplification (refuted by Ambiguity 5)
- Wholesale mode 6 rule replacement (refuted by Ambiguity 3)
- Perception/action split dissolution (refuted by Ambiguity 6)
- Spec-only-no-finding-correction (refuted by Ambiguity 7)
- "Input substrate" / "framing substrate" / "pre-shape input" / "lightweight-priors" (refuted by Ambiguity 2)

### Remaining viable

- The single concept correction ("preparation substrate") + cascading corrections at 7 enumerated targets
- Substance commitment from 21-12 finding (intact)
- Mode 6 detection rule with name update
- Perception/action split with action target re-described

### SV5 — Constrained Understanding

The substrate-role of MQ2's answer is corrected from "dispatch substrate" (a misnomer under always-invoke) to **PREPARATION SUBSTRATE** — MQ2's answer is the lightweight preparation that informs the runner's formulation of /surfacing's input. The substance content from the just-completed MQ2 reframe finding (verdict + kinds + stance + hypothetical-relational mode) survives unchanged; mode 6's detection rule survives with rename; perception/action split survives with action target shifted to formulation. Cascading corrections at 7 targets enumerated (6 MUSTs + 1 COULD).

---

## Phase 5 — Conceptual Stabilization

### Accommodation trigger check (per Phase 5 refinement note)

Have new perspectives kept producing destabilizing anchors? Check:
- Phase 2 perspectives (9 perspectives applied) → ALL converged on the always-invoke acceptance + preparation-substrate correction + substance-survives commitments. No destabilizing anchors.
- Phase 3 ambiguities (7 ambiguities + 4 load-bearing concept tests) → all resolved consistently; no model revision required at later ambiguities to accommodate earlier ones.
- Frame-exit Completeness verdict survived Verdict Rigor counter-test.
- Phase/Calibration-State bootstrap state inherited cleanly.

Model is stable; no accommodation needed.

### Meta-Inspection at H6 (after SV6)

**H6 (model fit):** model-fit pattern is REFINEMENT — one concept rename (dispatch → preparation) + 7 cascading text corrections + substance-survives verdict. Not patching; coherent single correction with bounded scope. PASS.

### SV6 — Stabilized Model (final)

The user's **always-invoke premise** is structurally accepted: `/surfacing` is always invoked in the project's standard runner architecture; there is no dispatch decision for the runner to make. The "dispatch substrate" framing of MQ2's answer at §2.4 of the Task-Define spec (and propagated through `devdocs/what_is_task_define.md`, the mode 6 inquiry's §2.4 amendment + §4.2 detection rule, the MQ2 verification inquiry's substance-coverage claims, and the just-completed MQ2 reframe finding's gating language) is therefore **precisely-wrong**.

The corrected substrate-role concept is **PREPARATION SUBSTRATE**: MQ2's per-item answer is the lightweight preparation that informs the runner's formulation of `/surfacing`'s input (purpose + territory + bias). The renaming captures both (a) MQ2's actual function (preparing /surfacing's input, not making invocation decisions) and (b) the lightweight character (preparing ≠ executing/routing). User-language alignment is direct ("prepare things in very lightweight way").

**The substance commitment from the just-completed MQ2 reframe finding survives unchanged**: MQ2's answer carries verdict ∈ {yes, no, uncertain} + (when verdict=yes/uncertain) kinds-plural + relational-stance + hypothetical-relational expression mode. These elements serve preparation just as they served the dispatch framing — substance is name-independent.

**Mode 6 detection rule survives with cosmetic rename**: detects "MQ2-answer-missing-preparation-info" (the operational substance — binary detection on presence/absence of verdict + kind content — is unchanged).

**The perception/action split survives**: action target shifts from "decide whether to invoke /surfacing" to "formulate /surfacing's input from MQ2's preparation."

Cascading corrections enumerated as 7 targets (out of scope per Layer Commitment but flagged as MUST/COULD followup; structural-amendment authoring is downstream work):

1. §2.4 spec — RENAME + revise wording (MUST)
2. §4.2 mode 6 — RENAME + reword amendment text (MUST)
3. `devdocs/what_is_task_define.md` paraphrase — REPAIR (MUST)
4. 21-12 MQ2 reframe finding §4 gating-language table — REPAIR + supersedes note (MUST)
5. 14-14 mode 6 finding amendment text — REPAIR terminology (MUST)
6. 15-39 original meaning-layer finding concept introduction — SUPERSEDES note (MUST)
7. 17-02 MQ2 verification finding — UPDATE terminology (COULD; light)

### Difference from SV1

SV1 was the user's critique restated as a hypothesis. SV6 commits the always-invoke premise as **structurally accepted**; names **"preparation substrate"** as the corrected concept with structural grounding + user-language alignment; verifies **substance survival** under the new concept; verifies **mode 6 rule survival** with name-only update; verifies **perception/action split survival** with action target shifted; enumerates **7 cascading corrections** with severity classification.

The structural shift from SV1 to SV6 is clear: SV1 had 8+ open dimensions; SV6 has all 8 frontier flags + the additional perception/action split status closed at HIGH or MED-HIGH confidence (except Ambiguity 4 substance compatibility at HIGH — the load-bearing claim that substance survives the concept correction).

---

## Saturation Indicators (Telemetry)

| Indicator | Verdict | Detail |
|---|---|---|
| **Perspective saturation** | YES | 9 perspectives applied (6 lateral + Definitional/Internal + Frame-exit/Completeness + Phase/Calibration). Perspectives consistently converged on always-invoke acceptance + preparation-substrate correction + substance-survives; no new anchor TYPES in last 3 perspectives. |
| **Ambiguity resolution ratio** | 7/7 resolved | 7 ambiguities; 6 HIGH confidence + 1 MED-HIGH (Ambiguity 1 premise — relies partly on user's domain knowledge; Ambiguity 5 textual interpretation). 0 OPEN. |
| **SV delta** | LARGE | SV1 was hypothesis-restatement; SV6 commits 8+ specific decisions with structural justifications. Clear shift. |
| **Anchor diversity** | DIVERSE | Anchors from 5 types (Constraints C1-C7, Key Insights K1-K7, Structural Points S1-S4, Foundational Principles P1-P5, Meaning-Nodes M1-M5); from 9 perspectives. No single-type or single-perspective dominance. |

**Status:** sensemaking has reached sufficiency.

---

## Failure Mode Audit

| # | Mode | Observed? | Note |
|---|---|---|---|
| **1** | Status Quo Bias | NOT OBSERVED | The inquiry CHALLENGES the established "dispatch substrate" concept (established structure); doesn't protect it because it's documented; tests it on structural grounds. |
| **2** | Premature Stabilization (early-clarity axis) | NOT OBSERVED | All 5 phases completed; perspectives produced anchors through Phase 2; 7 ambiguities tested in Phase 3. |
| **2'** | Premature Stabilization (model-misfit / Accommodation trigger) | NOT FIRED | Perspectives converged; no model revision pressure. |
| **3** | Anchor Dominance | NOT OBSERVED | Multiple load-bearing anchors (C-set + K-set + S-set + P-set + M-set); resolution depends on COMBINATION. |
| **4** | Perspective Blindness | NOT OBSERVED | Uncomfortable perspective (Frame-exit Completeness on "dispatch substrate" used across 5 propositions) applied; Risk perspective surfaced 3 hard tests R1+R2+R3 all addressed in Phase 3; Definitional/Internal-Consistency tested concept correction against multiple existing structures. |
| **5** | Clean Resolution Trap | NOT OBSERVED | Each ambiguity's counter-interpretation tested on structural grounds (not by citing precedent); confidence levels noted (HIGH/MED-HIGH). |
| **6** | Self-Reference Collapse | APPLIES (BOUNDED) | This inquiry uses sensemaking to evaluate a discipline (Task-Define) that shares conceptual language with sensemaking (anchors, perspectives, structural commitments). External grounding via (a) user's explicit critique (external reference), (b) /surfacing spec's input contract (external discipline), (c) the always-invoke premise itself (external runner-architecture knowledge). Bounded by external constraints. |

**No failure modes observed in actionable form.**

---

## SV6 Commitments Summary (for downstream Decomposition)

The following 8 commitments are the load-bearing outputs of this Sensemaking:

| # | Commitment | Closes Flag | Confidence |
|---|---|---|---|
| **SV6-1** | Always-invoke premise = ACCEPTED (structurally defensible; /surfacing always invoked) | F1 | MED-HIGH |
| **SV6-2** | Corrected concept name = "preparation substrate" (function-aligned + user-language-aligned + lightweight-connoted) | F2 / F8 | HIGH |
| **SV6-3** | Substance from 21-12 finding = SURVIVES UNCHANGED (substance is function-name-independent) | F5 | HIGH |
| **SV6-4** | Mode 6 detection rule = SURVIVES with cosmetic rename (operational substance unchanged) | F3 | HIGH |
| **SV6-5** | Perception/action split = SURVIVES with action target shifted (formulation, not invocation-decision) | additional | HIGH |
| **SV6-6** | Lightweight-stance interpretation = concept-level only (substance unchanged) | F6 | MED-HIGH |
| **SV6-7** | Cascading corrections = 7 targets enumerated (6 MUSTs + 1 COULD) | F4 / F7 | HIGH |
| **SV6-8** | Structural-amendment authoring = OUT OF SCOPE per Layer Commitment; only enumeration of targets | derived from F7 | HIGH (scope decision) |

---

**Next discipline:** Decomposition. Frontier-priority: organize the 8 SV6 commitments into 2-3 load-bearing pieces; surface piece-level interfaces; check dependency layering.
