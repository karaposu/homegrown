# Sensemaking: Meta-Question Taxonomy / Categories

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-05_10-03__meta_question_taxonomy_categories/_branch.md`

Upstream input: `surfacing.md` — 94 items across 15 regions; 9 frontier flags; pre-Sensemaking position: 2-axis taxonomy with 3 primary types × 2 substrate modes shape.

---

## SV1 — Baseline Understanding (pre-analysis)

Meta-questions in task-define are fuzzy because the spec treats them as a homogeneous category despite the 3 base MQs being heterogeneous in nature (MQ1 perceives intrinsic property; MQ2 produces preparation substrate; MQ3 infers hidden meaning). The user wants a typed taxonomy that makes meta-questions non-fuzzy AND enables future pass-1/pass-2 placement decisions. The inquiry's primary deliverable is the taxonomy; the split decision is downstream.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

| # | Anchor | Source |
|---|---|---|
| **C1** | 5 prior commitments inherited (14-14 MQ2 verdict+kind; 21-12 MQ2 three-element substance; 21-58 preparation substrate + always-invoke; 2026-06-05_00-11 task-define2 variant a; §2.3 bounded-extensibility rule) | branch.md Synthesis Trigger |
| **C2** | Layer Commitment: meaning-layer only (structural amendments + per-pass placement OOS) | branch.md |
| **C3** | Bounded-extensibility rule §2.3: (a) task structure/framing, (b) constrain Rephrase, (c) one-sentence | task-define spec |
| **C4** | Existing 3 base MQs canonical: MQ1 scope; MQ2 context-need; MQ3 intent-vs-surface | task-define spec §2.3 |
| **C5** | MQ-constrains-Rephrase mechanism (07-48) load-bearing | 07-48 finding |
| **C6** | User explicitly narrowed scope to taxonomy; pass-1/pass-2 split is downstream concern | branch.md Source Input |

### Key Insights

| # | Anchor | Note |
|---|---|---|
| **K1** | The 3 base MQs are heterogeneous in nature — different cognitive operations (classify / perceive-need / infer-intent) | Surfacing MP1-MP3 |
| **K2** | Two load-bearing axes: substrate-dependence (pre/post-context) + target-of-perception (intrinsic/relational/interpretive); together form 2D grid | Surfacing AX1+AX2+AX9 |
| **K3** | Post-context meta-questions conceptually exist but spec currently empty under variant (a); tension to surface | Surfacing P2 + PS3 |
| **K4** | The taxonomy explains why exactly 3 base MQs were chosen — they cover 3 primary types under pre-context constraint | Surfacing MP6 |
| **K5** | Bounded-extensibility rule (b) "constrain Rephrase" doesn't apply uniformly — needs refinement to "constrain some downstream operation" | Surfacing BR3+BR4 |
| **K6** | User's "fuzziness" critique has 3 dimensions: category coverage, MQ heterogeneity, extension authoring | Surfacing GA3 |
| **K7** | Taxonomy enables pass-1/pass-2 split decisions but doesn't commit them — Layer Commitment scope respect | Surfacing PS6 |

### Structural Points

| # | Anchor | Source |
|---|---|---|
| **S1** | 5 candidate types from surfacing TY9 + NM7: Structural, Relational, Interpretive, Validation, Refinement | Surfacing TY/NM |
| **S2** | 2 load-bearing axes (substrate-dependence + target-of-perception) | Surfacing AX9 |
| **S3** | 6-cell grid (3 primary × 2 substrate modes); 3 cells currently populated | Surfacing TY7+TY9 |
| **S4** | Variant-(a) tension to surface (Rephrase-only-in-pass-2 vs post-context MQs) | Surfacing PS3 + IH4 |
| **S5** | 5 candidate post-context MQs (MQ2-validation, MQ3-refinement, MQ1-refinement, MQ-frontier, MQ-conflict-detection) — collapse into Validate/Refine operations | Surfacing P21-P25 |

### Foundational Principles

| # | Anchor | Source |
|---|---|---|
| **P1** | Substrate-fidelity preserved across pre/post-context (FETCH vs RECEIVE distinction from 21-58 + 2026-06-05_00-11) | 21-58 + variant-a finding |
| **P2** | Perception/action split (architectural invariant) | 15-39 + 14-14 + 21-58 |
| **P3** | Lightweight stance | Task-Define authoring tradition |
| **P4** | Function-name-independence | 21-58 |
| **P5** | Asymmetric-failure principle (lean toward more-detail-but-not-overspecify) | 07-48 + 21-12 |

### Meaning-Nodes

| # | Anchor |
|---|---|
| **M1** | "meta-question taxonomy" — inquiry's subject |
| **M2** | "Structural / Relational / Interpretive" — 3 primary types |
| **M3** | "Validate / Refine" — 2 post-context cognitive operations |
| **M4** | "substrate-dependence axis" — pre-context vs post-context |
| **M5** | "target-of-perception axis" — intrinsic vs relational vs interpretive |
| **M6** | "6-cell grid" — taxonomy's structural shape |
| **M7** | "variant-(a) tension" — Rephrase-only-pass-2 vs post-context MQs |

### Meta-Inspection cross-reference (after SV2 — H4 + H5)

**H4 (concept names):** loop-coined: "Structural", "Relational", "Interpretive", "Validate", "Refine", "pre-context", "post-context". Need Phase 3 Load-bearing concept test validation.

**H5 (motivating examples):** the 3 base MQs (MQ1/MQ2/MQ3) are the specific motivating examples. Specific-vs-pattern cue applies: does the taxonomy generalize beyond these 3 instances?

### SV2 — Anchor-Informed Understanding

The taxonomy emerges from 2 load-bearing axes (substrate-dependence + target-of-perception) crossed into a 6-cell grid. The 3 base MQs populate 3 cells in the pre-context column (Structural=MQ1, Relational=MQ2, Interpretive=MQ3). The post-context column is empty in current spec under variant (a), but 2 candidate cognitive operations (Validate, Refine) emerge as natural post-context perceptions. The bounded-extensibility rule (b) needs refinement to generalize across types. The variant-(a) tension is surfaced for user choice without committing a resolution.

---

## Phase 2 — Perspective Checking

### Lateral perspectives

**1. Technical/Logical.** 2-axis taxonomy is structurally clean; 3 primary types × 2 substrate modes maps cleanly to existing 3 MQs + 3 post-context candidates. Alternative 1-axis (target-of-perception only) is simpler but doesn't address user's pass-1/pass-2 downstream concern. Alternative many-axis (5+ axes from surfacing AX4-AX8) is over-specified; harder to use. **Anchor T1:** 2-axis taxonomy is technically optimal.

**2. Human/User.** User said "fuzzy" → wants crisp definitions. 5 named types (3 primary + 2 post-context operations) with distinct cognitive operations is crisp. User's "taxonomy/categories" plural framing accepts either single-taxonomy-with-sub-types or multi-axis approach; the 2-axis taxonomy delivers both effectively. **Anchor H1:** 2-axis with 5 names fits user-perspective.

**3. Strategic/Long-term.** Taxonomy is foundational for future MQ extension authoring + pass-1/pass-2 split + per-category bounded-extensibility refinements. Strategic value high. 5-type naming propagates through future inquiries; getting names right now prevents future renames. **Anchor St1:** strategic value high; naming decision load-bearing.

**4. Risk/Failure.** Five risks:
- **R1:** Over-typing — too many types makes taxonomy hard to use. Current 5 (3 primary + 2 post-context operations) is balanced.
- **R2:** Under-typing — too few types leaves category fuzzy. 5 names distinguishes cognitive operations cleanly.
- **R3:** Boundary cases — what if a new MQ doesn't fit any type? Sub-finding: taxonomy should explicitly handle (either add a new type per future inquiry OR reject as not-meta-question).
- **R4:** Variant-(a) tension — surfacing it might trigger inquiry on variant-(a) revision (downstream; user's call).
- **R5:** Naming risk — names tied to current operations (Classification, Preparation) might be too narrow; type names should describe target-of-perception, not operation.

**5. Resource/Feasibility.** Taxonomy is meaning-layer; structural amendments downstream. Feasibility high. **F1.**

**6. Ethical/Systemic.** N/A.

**7. Definitional/Internal Consistency.** Check against 5 priors:
- 14-14 (MQ2 verdict+kind): Relational type absorbs; compatible.
- 21-12 (MQ2 three-element substance + hypothetical-relational + runner-mediated): Relational type IS the type carrying these; compatible.
- 21-58 (preparation substrate + always-invoke + function-name-independence): Relational type IS the preparation-substrate type; always-invoke premise inherited; function-name-independence applies; compatible.
- 2026-06-05_00-11 (variant a Rephrase-only-pass-2): tension with post-context types in pass-2; surfaced.
- §2.3 (bounded-extensibility): rule (b) needs refinement; rules (a)+(c) preserved.
- **Anchor D1:** internal consistency high except for variant-(a) tension (explicitly surfaced, not silenced).

**8. Definitional/Frame-exit Completeness.** Apply gating:
- (i) Inherited terms? YES — "meta-question", "MQ1/MQ2/MQ3", "bounded-extensibility", "preparation substrate", "pre-context", "post-context", "variant (a)".
- (ii) Used across ≥2 distinct propositions? YES — these terms appear across surfacing's 15 regions with distinct propositions.

Gating FIRES. Apply 4 meta-categories:

1. **Existence Enumeration.** "Meta-question" referents project-wide: the 3 base MQs (canonical); extensions allowed under bounded-extensibility; the category as a discipline component; the cognitive operation performed per item; future possible MQs (post-context candidates). All in inquiry's frame. No exclusions.

2. **Role Assessment.** No excluded referents.

3. **Verdict Rigor.** Strongest counter to "5-name taxonomy": "Maybe only 3 are real (pre-context primary types); post-context names are speculative because no actual post-context MQs exist in spec." Test on structural grounds: post-context cognitive operations (Validate, Refine) are structurally distinct from pre-context operations (classify, perceive-need, infer-intent); they COULD exist in a future architecture. The taxonomy's value isn't only describing existing MQs but enabling future ones. Counter fails — post-context types are structurally distinct operations.

4. **Residual/Coverage.** Frame-exit concerns not captured? Possibly: "Does the taxonomy generalize to other disciplines' meta-questions (e.g., if /sensemaking has meta-questions)?" — research frontier; not in scope. Termination: no new substantive findings.

**Frame-exit Completeness PASS.**

**9. Phase/Calibration-State.** Task-Define is BOOTSTRAP. Taxonomy is meaning-layer; doesn't require calibration data. PASS.

### Meta-Inspection cross-reference (after SV3 — H1 + H2 + H3 + H7)

**H1 (candidate set convergence):** Are some of the 5 types the same?
- Structural and Interpretive — both within-Task-Define-consumed, both pre-context. Same? NO — Structural is objective-property classification; Interpretive is hidden-meaning inference. Distinct.
- Validate and Refine — both post-context operations. Same? NO — Validate checks if prior held (verdict); Refine produces sharpened version (positive content). Distinct.
- 5 distinct types/operations confirmed.

**H2 (frame scope):** PASS via Frame-exit Completeness.

**H3 (question framing):** question explicitly considers multi-axis taxonomy and post-context types. Not pre-biased. PASS.

**H7 (phase/calibration state):** PASS.

### SV3 — Multi-Perspective Understanding

The taxonomy is structurally clean: 2 load-bearing axes (substrate-dependence + target-of-perception) cross into a 6-cell grid; 3 cells populated by current MQs in pre-context column (Structural=MQ1, Relational=MQ2, Interpretive=MQ3); 3 cells empty in post-context column (where Validate/Refine operations could fire if variant (a) is revised). Names are crisp and target-of-perception-oriented (not operation-tied). Bounded-extensibility rule (b) refinement needed (generalize from "constrain Rephrase" to "constrain some downstream operation"). Variant-(a) tension flagged for user choice. All 5 priors compatible.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Should the taxonomy be 1-axis or 2-axis?

**Strongest counter-interpretation:** 1-axis (target-of-perception only) is sufficient — Structural/Relational/Interpretive cover everything; substrate-dependence is a sub-aspect not a primary axis.

**Why counter fails (structural grounds):** substrate-dependence is structurally distinct and load-bearing for the user's downstream concern (pass-1/pass-2 split). A 1-axis taxonomy wouldn't enable the split decision — Structural/Relational/Interpretive could each have pre-context or post-context instances. Without substrate-dependence axis, the split has no taxonomic basis. The user's stated downstream concern requires both axes.

**Confidence:** HIGH.

**Resolution:** 2-axis taxonomy (target-of-perception × substrate-mode); 3 primary types × 2 substrate modes = 6 cells.

**What is now fixed:** 2-axis structure; 3 primary types; 2 substrate modes; 6 cells.

**What is no longer allowed:** 1-axis-only taxonomy; ignoring substrate-dependence axis.

**What now depends on this:** subsequent ambiguities (naming, post-context operations, rule refinement).

**What changed:** taxonomy structure committed.

---

### Ambiguity 2: What are the right names for the 3 primary types?

**Strongest counter-interpretation:** alternative names — "Preparation" for Relational; "Classification" for Structural; "Inference" or "Intent" for Interpretive — are more concrete and reuse existing project vocabulary.

**Why counter fails (structural grounds):**
- "Preparation" for Relational: conflates type with one function (preparation substrate is what MQ2 carries; other Relational MQs like MQ-frontier carry frontier signals). Type name should be target-of-perception, not function.
- "Classification" for Structural: tied to operation (classify); post-context Structural would refine, not classify. Type name should be operation-agnostic.
- "Inference" or "Intent" for Interpretive: "Inference" is operation-specific; "Intent" is target-specific (only intent). "Interpretive" covers all hidden-meaning perceptions broadly.

Pattern: type names should describe TARGET-OF-PERCEPTION, not OPERATION or specific FUNCTION. This keeps the names operation-agnostic and forward-compatible.

**Confidence:** HIGH on Structural/Relational; MED on Interpretive (acceptable variants exist but Interpretive is broadest).

**Resolution:** Structural / Relational / Interpretive as primary type names.

**What is now fixed:** 3 primary type names committed.

**What is no longer allowed:** type names that conflate type with operation or function.

**What now depends on this:** subsequent naming for substrate modes + post-context operations + the full per-cell label.

**What changed:** primary type names locked.

---

### Ambiguity 3: How does each existing MQ map to a single cell?

**Strongest counter-interpretation:** maybe MQ2 is BOTH Relational AND Interpretive (perceives task-to-project relation AND infers some intent about user's surfacing need). Boundary case.

**Why counter fails (structural grounds):** MQ2's substance per 21-12 is well-defined — verdict + kinds + stance + hypothetical-relational mode, all about task-to-project relation. The "stance" element (continuation / fresh-start-of-prior / reference-to / fresh-self-contained) is relational categorization, not intent inference. MQ2 is cleanly Relational. Same check for MQ1 (scope-axis classification = clearly Structural; no ambiguity) and MQ3 (intent-vs-surface = clearly Interpretive; no ambiguity).

**Confidence:** HIGH.

**Resolution:** MQ1=Structural/pre-context; MQ2=Relational/pre-context; MQ3=Interpretive/pre-context. Clean mapping; no boundary cases among base 3.

**What is now fixed:** existing MQ mapping.

**What is no longer allowed:** treating existing MQs as multi-type or boundary-typed.

**What now depends on this:** the 3 currently-populated cells; the 3 currently-empty cells (post-context column).

**What changed:** mapping locked.

---

### Ambiguity 4: What about post-context meta-questions and variant-(a) tension?

**Strongest counter-interpretation:** post-context types are speculative because variant-(a) commits "Rephrase only" in pass-2 — they don't exist in current spec, so exclude them from the taxonomy.

**Why counter fails (structural grounds):** the taxonomy's VALUE is enabling future decisions, not just describing existing MQs. Post-context cognitive operations (Validate, Refine) are structurally distinct from pre-context (classify, perceive-need, infer-intent) and could exist in a future variant-a-revision or task-define3. Excluding them makes the taxonomy narrowly descriptive rather than principled.

Variant-(a) tension is real but not a reason to exclude post-context from the taxonomy. The taxonomy SURFACES the tension; the user decides whether to revisit variant-(a) (extending pass-2 to include post-context MQs) or to treat post-context as research frontier.

**Confidence:** HIGH.

**Resolution:** post-context types ARE in the taxonomy (3 empty cells in post-context column, with Validate/Refine cognitive operations); variant-(a) tension flagged for user choice; taxonomy enables both resolutions.

**What is now fixed:** post-context types included; variant-(a) tension surfaced.

**What is no longer allowed:** limiting the taxonomy to current spec only; or silently picking a resolution to variant-(a) tension.

**What now depends on this:** the 3 empty post-context cells become specification targets for future MQs; variant-(a) revision becomes a separate downstream inquiry.

**What changed:** post-context scope confirmed; honest assessment of variant-(a) tension committed.

---

### Ambiguity 5: What are the post-context cognitive operations?

**Strongest counter-interpretation:** maybe Validate and Refine collapse into a single "Re-perceive" operation that covers both checking and sharpening.

**Why counter fails (structural grounds):** Validate and Refine are different cognitive operations:
- **Validate** = check whether a prior (pre-context) perception still holds given surfaced material. Output: a binary or graded verdict ("held" / "didn't hold" / "partially held").
- **Refine** = produce a sharpened version of the prior perception using surfaced material as new evidence. Output: positive content (an updated perception, not just a verdict).

These are distinct operations. A meta-question can perform one without the other. Collapsing them would lose the operational distinction.

**Confidence:** HIGH.

**Resolution:** Validate and Refine as distinct post-context cognitive operations. Both applicable to any of the 3 primary types.

**What is now fixed:** 2 post-context operations identified.

**What is no longer allowed:** merging Validate and Refine into a single operation.

**What now depends on this:** per-cell cognitive operation labels (post-context cells have Validate-or-Refine operations).

**What changed:** post-context cognitive operations committed.

---

### Ambiguity 6: Does the bounded-extensibility rule (b) need refinement?

**Strongest counter-interpretation:** rule (b) "constrain Rephrase" applies via the general MQ-constrains-Rephrase mechanism (07-48) — all MQ answers feed Rephrase as constraints; existing rule wording is fine.

**Why counter fails (structural grounds):** the general mechanism is true architecturally (all MQ answers ARE constraints on Rephrase), but the SPECIFIC primary downstream consumer differs by type:
- Structural MQs primarily feed MultiScope; Rephrase constraint is secondary/indirect
- Relational MQs primarily feed runner → /surfacing; Rephrase constraint is secondary
- Interpretive MQs primarily feed Rephrase directly

A strict "constrain Rephrase" reading might falsely reject a type-appropriate extension that doesn't constrain Rephrase directly. Generalizing to "must constrain some downstream operation" preserves intent + accommodates typed taxonomy + provides per-category extension authoring guidance.

**Confidence:** MED-HIGH.

**Resolution:** rule (b) REFINED — generalize "constrain Rephrase" to "constrain some downstream operation: within-Task-Define (Structural → MultiScope; Interpretive → Rephrase) OR cross-discipline (Relational → /surfacing-via-runner) OR pass-2-operations (post-context types under variant a or successors)." Per-category authoring becomes clearer.

**What is now fixed:** rule (b) refinement.

**What is no longer allowed:** strict "constrain Rephrase" reading that rejects type-appropriate extensions.

**What now depends on this:** extension authoring guidance per type.

**What changed:** rule (b) generalized.

---

### Ambiguity 7: How does the taxonomy interact with the MQ-constrains-Rephrase mechanism?

**Strongest counter-interpretation:** the mechanism (07-48) applies uniformly to all MQ answers; taxonomy doesn't change this.

**Why counter fails (partially):** mechanically yes — all MQ answers feed Rephrase as constraint inputs. But the DIRECTNESS of constraint varies by type. The taxonomy honors this variance: Structural+Relational provide indirect Rephrase constraint (via MultiScope or runner-formulated /surfacing); Interpretive provides direct Rephrase constraint (vocabulary-shaping). Mechanism PRESERVED uniformly; per-type directness varies.

**Confidence:** HIGH.

**Resolution:** MQ-constrains-Rephrase mechanism PRESERVED uniformly; per-type DIRECTNESS varies (Structural+Relational indirect; Interpretive direct).

**What is now fixed:** mechanism status under taxonomy.

**What is no longer allowed:** claiming the mechanism breaks per-type, OR claiming directness is uniform.

**What now depends on this:** rule (b) refinement aligns with this directness-varies-by-type observation.

**What changed:** mechanism interpretation nuanced.

---

### Load-bearing concept test

**Concept 1: "Structural meta-question"** (loop-coined type name).
- Counter: could be "Intrinsic" or "Classification".
- Why counter fails: "Structural" captures both classification AND other intrinsic properties (e.g., complexity-class); broader than "Classification" which is operation-specific; less abstract than "Intrinsic". Best balance.
- Confidence: MED-HIGH.
- Resolution: keep "Structural".

**Concept 2: "Relational meta-question"** (loop-coined).
- Counter: could be "Coordination" or "Preparation".
- Why counter fails: "Coordination" is operation-specific (only cross-discipline); "Preparation" is function-specific. "Relational" is target-of-perception agnostic to operation.
- Confidence: MED-HIGH.
- Resolution: keep "Relational".

**Concept 3: "Interpretive meta-question"** (loop-coined).
- Counter: could be "Inference" or "Intent".
- Why counter fails: "Inference" is operation-specific; "Intent" is target-specific (only intent). "Interpretive" covers all hidden-meaning perceptions broadly.
- Confidence: HIGH.
- Resolution: keep "Interpretive".

**Concept 4: "Validate / Refine"** (post-context operations).
- Counter: could merge into "Re-perceive".
- Why counter fails: Validate (binary/graded verdict) and Refine (positive content) are distinct operations.
- Confidence: HIGH.
- Resolution: keep Validate / Refine distinct.

**Concept 5: "pre-context / post-context"** (substrate-mode names).
- Counter: could be "pre-/surfacing / post-/surfacing".
- Why counter fails: "pre-context / post-context" is discipline-agnostic; "pre-/surfacing / post-/surfacing" is /surfacing-specific. Future architectures might have different upstream context-providers; the more abstract naming is forward-compatible.
- Confidence: MED-HIGH.
- Resolution: keep "pre-context / post-context".

### Specific-vs-pattern recognition cue

The 3 base MQs (MQ1/MQ2/MQ3) are the principal motivating examples — a specific small set. Is the taxonomy fit only to these 3, or generalizable?

**Strongest counter:** 3 examples doesn't tell us about the pattern; taxonomy might miss other primary types.

**Why counter holds partially:** yes, 3 is a small sample. But the taxonomy is grounded in axis A (target-of-perception) which is exhaustive under the bounded-extensibility rule (a) constraint (extensions must be about task structure/framing). Any perception about task structure/framing falls into intrinsic / relational / interpretive — these three exhaust the perception-target categories for task-structure-framing perceptions. Extensions fit into existing types unless a fundamentally new perception target emerges.

**Resolution:** taxonomy is generalizable; 3-type primary-axis is exhaustive on axis A under bounded-extensibility rule (a). Sub-finding: note that future extensions might surface a 4th primary type if a fundamentally new perception target emerges; taxonomy is open-set-extensible at primary-type level.

### SV4 — Clarified Understanding

The meta-question taxonomy has 2 load-bearing axes (target-of-perception × substrate-mode), 3 primary types (Structural / Relational / Interpretive), 2 substrate modes (pre-context / post-context), and 2 post-context cognitive operations (Validate / Refine). The 6-cell grid currently has 3 cells populated (MQ1=Structural/pre-context; MQ2=Relational/pre-context; MQ3=Interpretive/pre-context) and 3 cells empty (post-context column under variant a). Bounded-extensibility rule (b) refined to generalize across types. Variant-(a) tension surfaced for user choice. All 5 inherited commitments compatible (Relational type absorbs MQ2's substance; variant-a tension is only friction surfaced).

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

| Flag | Closed at | Settled value |
|---|---|---|
| **F1** axes | Ambiguity 1 | substrate-dependence + target-of-perception (2 load-bearing axes) |
| **F2** taxonomy shape | Ambiguity 1 | 3 primary types × 2 substrate modes = 6 cells |
| **F3** existing MQ mapping | Ambiguity 3 | MQ1=Structural/pre; MQ2=Relational/pre; MQ3=Interpretive/pre |
| **F4** primary type names | Ambiguity 2 | Structural / Relational / Interpretive |
| **F4'** post-context op names | Ambiguity 5 | Validate / Refine |
| **F4''** substrate-mode names | Concept test 5 | pre-context / post-context |
| **F5** rule (b) refinement | Ambiguity 6 | generalize "constrain Rephrase" → "constrain some downstream operation per category" |
| **F6** variant-(a) tension | Ambiguity 4 | SURFACED for user choice; not resolved here |
| **F7** fuzziness resolution | Concept test + Ambiguity 6 | resolved at 3 dimensions (category-coverage; MQ heterogeneity; extension authoring) |
| **F8** post-context MQ candidates | Ambiguity 5 + P2 surfacing | 5 candidates collapse into Validate/Refine operations |
| **F9** inherited commitments | Ambiguity 4 | all 5 priors compatible; variant-(a) only friction surfaced |

### Eliminated

- 1-axis-only taxonomies (don't enable pass-1/pass-2 split)
- Many-axis taxonomies (over-specified)
- Type names tied to operations (Classification, Preparation, Inference) — too narrow
- Type names tied to specific functions (Preparation conflates with MQ2 specifically)
- Substrate-mode names tied to /surfacing-specific (pre-/surfacing / post-/surfacing) — not forward-compatible
- Limiting taxonomy to current-spec instances only (would make taxonomy descriptive not principled)
- Merging Validate and Refine into a single operation (loses distinction)
- Silently resolving variant-(a) tension (violates honest-assessment)

### Remaining viable

- 2-axis taxonomy with 3 primary types × 2 substrate modes; 2 post-context cognitive operations; rule (b) generalized per-category; variant-(a) tension surfaced

### SV5 — Constrained Understanding

The meta-question taxonomy has 2 load-bearing axes (target-of-perception × substrate-mode) crossed into 6 cells. 3 primary types named {Structural, Relational, Interpretive}. 2 substrate modes named {pre-context, post-context}. 2 post-context cognitive operations named {Validate, Refine}. 3 cells populated by existing MQ1/MQ2/MQ3 in pre-context column; 3 cells empty in post-context column. Bounded-extensibility rule (b) refined to generalize "constrain Rephrase" across types. Variant-(a) tension surfaced. All 5 inherited commitments compatible.

---

## Phase 5 — Conceptual Stabilization

### Accommodation trigger check

Have new perspectives kept producing destabilizing anchors? No — perspectives converged consistently on the 2-axis taxonomy + 3 primary types + 2 post-context operations + rule (b) refinement + variant-(a) tension surfacing. No accommodation needed.

### Meta-Inspection at H6 (after SV6)

**H6 (model fit):** model-fit pattern is REFINEMENT — coherent typed structure with clean mapping; no patching. PASS.

### SV6 — Stabilized Model (final)

**The meta-question taxonomy** has 2 load-bearing axes:

**Axis A: target-of-perception** — what the meta-question perceives. 3 primary types:
- **Structural** — perceives intrinsic properties of the task (scope, complexity-class, time-horizon, etc.)
- **Relational** — perceives task-to-project relations (context-need, kinds of info needed, relational stance toward project state, preparation substrate)
- **Interpretive** — perceives task-to-user-intent (hidden meaning behind the surface ask; implicit acceptance criteria; unstated quality bar)

**Axis B: substrate-mode** — what evidence the meta-question requires:
- **Pre-context** — answerable from task statement + LLM general knowledge alone (fires in task-define2 pass-1)
- **Post-context** — requires surfaced material to answer well (would fire in pass-2 if variant-a is revised)

The 2 axes cross into a **6-cell grid**. Per cell:

| Cell | Type × Mode | Cognitive operation | Current MQ |
|---|---|---|---|
| 1 | Structural × pre-context | classify intrinsic property | **MQ1** (scope-axis classification) |
| 2 | Relational × pre-context | perceive-need + produce preparation substrate | **MQ2** (verdict + kinds + stance in hypothetical-relational mode) |
| 3 | Interpretive × pre-context | infer hidden meaning | **MQ3** (intent vs surface) |
| 4 | Structural × post-context | Validate or Refine intrinsic-property perception | (currently empty) |
| 5 | Relational × post-context | Validate or Refine task-project-relation perception | (currently empty — could be MQ2-validation; MQ-frontier; etc.) |
| 6 | Interpretive × post-context | Validate or Refine hidden-meaning perception | (currently empty — could be MQ3-refinement) |

**The 2 post-context cognitive operations:**

- **Validate** — check whether the pre-context perception still holds given surfaced material. Output: a verdict (binary or graded — held / partially-held / didn't-hold).
- **Refine** — produce a sharpened version of the pre-context perception using surfaced material as new evidence. Output: positive content (an updated perception, not just a verdict).

**Bounded-extensibility rule (b) refinement.** Current rule (§2.3): "must constrain Rephrase." Refined to: "must constrain some downstream operation":
- Structural extensions → constrain MultiScope (primary) + Rephrase (indirect)
- Relational extensions → constrain runner → /surfacing (primary) + Rephrase (indirect)
- Interpretive extensions → constrain Rephrase (primary, direct)
- Post-context extensions → constrain pass-2 operations (currently Rephrase under variant a; potentially others under future variants)

Rules (a) "about task structure/framing" and (c) "one-sentence" preserved unchanged.

**The taxonomy resolves meta-question fuzziness at 3 dimensions:**

1. **Category coverage** — meta-question = structural perception of one of 3 primary property types (intrinsic/relational/interpretive) about the task, in one of 2 substrate modes (pre/post-context). The category is exhaustive on axis A under the bounded-extensibility rule (a) constraint.

2. **MQ heterogeneity** — the 3 base MQs are heterogeneous because they instantiate 3 different primary types. This is structurally correct, not a defect. Each MQ has distinct cognitive operation + distinct downstream consumer + distinct answer-shape, all explained by its type.

3. **Extension authoring** — proposed extensions are classified by (a) primary type, (b) substrate mode, (c) cognitive operation (per cell). The per-type bounded-extensibility rule (b) refinement provides authoring guidance. Extensions that don't fit any type either (i) belong to a fundamentally new primary type (requires taxonomy revision via separate inquiry) or (ii) aren't meta-questions (might be verification, fetching, etc. — different operations).

**Variant-(a) tension (surfaced for user choice):** task-define2 variant (a) commits "only Rephrase re-runs in pass-2." If the user wants post-context MQs (Validate or Refine operations) to fire in pass-2, variant (a) needs revisiting. Two resolutions:
- **(a) extend variant-(a)** to include post-context MQs (pass-2 = post-context MQs + Rephrase)
- **(b) keep variant-(a) as-is** and treat post-context types as research frontier for a future task-define3

This inquiry doesn't decide; it surfaces the tension so the user can choose. The taxonomy ENABLES both resolutions.

**Inherited commitment compatibility:**

| Prior | Commitment | Status under taxonomy |
|---|---|---|
| 14-14 | MQ2 verdict + kind specifier | Relational type absorbs; **PRESERVED** |
| 21-12 | MQ2 three-element substance (verdict + kinds + stance + hypothetical-relational mode); runner-mediated alignment | Relational type IS the type carrying these; **PRESERVED** |
| 21-58 | Preparation substrate + always-invoke premise + function-name-independence | Relational type IS preparation-substrate type; **PRESERVED** |
| 2026-06-05_00-11 (variant a) | Rephrase-only in pass-2 | **TENSION SURFACED** (post-context MQs would extend pass-2; user choice) |
| §2.3 bounded-extensibility | rule (a/b/c) | rule (a) + (c) **PRESERVED**; rule (b) **REFINED** per-category |

### Difference from SV1

SV1: meta-questions are undifferentiated fuzzy category; pre-Sensemaking position was 5 types.

SV6: commits 2-axis taxonomy (target-of-perception × substrate-mode); 3 primary types (Structural / Relational / Interpretive); 2 substrate modes (pre-context / post-context); 6-cell grid with 3 populated + 3 empty; 2 post-context cognitive operations (Validate / Refine); rule (b) refinement; variant-(a) tension surfaced; 5 priors compatibility verified; fuzziness resolved at 3 dimensions.

The structural shift: SV1 had ~9 open dimensions; SV6 has 11 commitments at HIGH or MED-HIGH confidence.

---

## Saturation Indicators

| Indicator | Verdict | Detail |
|---|---|---|
| **Perspective saturation** | YES | 9 perspectives applied; perspectives consistently converged on 2-axis 3-primary-type taxonomy; no new anchor TYPES in last 3 perspectives. |
| **Ambiguity resolution ratio** | 7/7 resolved | 6 HIGH + 1 MED-HIGH (Ambiguity 6 rule (b) refinement). 0 OPEN. |
| **SV delta** | LARGE | SV1 baseline; SV6 commits 11 specific decisions. |
| **Anchor diversity** | DIVERSE | Anchors from 5 types (Constraints C1-C6, Key Insights K1-K7, Structural Points S1-S5, Foundational Principles P1-P5, Meaning-Nodes M1-M7); 9 perspectives. |

**Status:** sufficiency reached.

---

## Failure Mode Audit

| # | Mode | Observed? | Note |
|---|---|---|---|
| **1** | Status Quo Bias | NOT OBSERVED | Inquiry challenges the spec's current "undifferentiated meta-question" framing; doesn't defend it. Variant-(a) tension flagged honestly. |
| **2** | Premature Stabilization (early-clarity) | NOT OBSERVED | 5 phases completed; perspectives produced anchors through Phase 2; 7 ambiguities + 5 concept tests tested. |
| **2'** | Premature Stabilization (accommodation) | NOT FIRED | Perspectives converged; no model revision pressure. |
| **3** | Anchor Dominance | NOT OBSERVED | Multiple load-bearing anchors (Constraints + Key Insights + Structural Points + Foundational Principles); resolution depends on combination. |
| **4** | Perspective Blindness | NOT OBSERVED | Uncomfortable perspectives applied: Risk surfaced 5 risks including R4 variant-(a) tension; Definitional/Internal challenged compatibility with 5 priors; Frame-exit Completeness fired and PASSED. |
| **5** | Clean Resolution Trap | NOT OBSERVED | Each ambiguity's counter-interpretation tested on structural grounds; confidence levels noted with reasoning. |
| **6** | Self-Reference Collapse | APPLIES (BOUNDED) | Inquiry uses sensemaking to evaluate a discipline (task-define) sharing conceptual language with sensemaking. External grounding via (a) user proposal (external reference), (b) §2.3 spec (external rule), (c) 5 prior findings (external commitments), (d) Bootstrap phase (external constraint). Bounded. |

**No failure modes observed in actionable form.**

---

## SV6 Commitments Summary (for downstream Decomposition)

| # | Commitment | Confidence |
|---|---|---|
| **SV6-1** | 2 load-bearing axes: target-of-perception + substrate-mode | HIGH |
| **SV6-2** | 3 primary types: Structural / Relational / Interpretive | HIGH |
| **SV6-3** | 2 substrate modes: pre-context / post-context | HIGH |
| **SV6-4** | 6-cell grid (3 primary × 2 substrate modes); 3 currently populated + 3 currently empty | HIGH |
| **SV6-5** | Existing MQ mapping: MQ1=Structural/pre; MQ2=Relational/pre; MQ3=Interpretive/pre | HIGH |
| **SV6-6** | 2 post-context cognitive operations: Validate / Refine | HIGH |
| **SV6-7** | Bounded-extensibility rule (b) refinement: generalize "constrain Rephrase" → "constrain some downstream operation per category" | MED-HIGH |
| **SV6-8** | Variant-(a) tension surfaced for user choice (no commitment on resolution) | HIGH |
| **SV6-9** | Fuzziness resolved at 3 dimensions: category-coverage; MQ heterogeneity; extension authoring | HIGH |
| **SV6-10** | All 5 inherited commitments compatible; only friction surfaced is variant-(a) tension | HIGH |
| **SV6-11** | Structural amendments + per-pass placement decisions = OUT OF SCOPE per Layer Commitment | HIGH (scope) |

---

**Next discipline:** Decomposition. Frontier-priority: organize the 11 SV6 commitments into 2-3 load-bearing pieces; surface piece-level interfaces; check dependency layering.
