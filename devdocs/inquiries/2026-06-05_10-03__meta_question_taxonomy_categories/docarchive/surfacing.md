# Surfacing: Meta-Question Taxonomy / Categories

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-05_10-03__meta_question_taxonomy_categories/_branch.md`

Raw source (verbatim in branch.md Source Input): user proposes that meta-questions need a taxonomy because they're a "fuzzy term" — different MQs do different things; we don't know what KIND of perception each performs. The taxonomy should enable understanding their nature AND inform future pass-1/pass-2 split decisions. The immediate deliverable is the taxonomy itself; the split decision is downstream.

---

## Mode + Entry Point + Reception

**Mode:** `possibility` primary (candidate axes, candidate types, candidate names, candidate pass-2 meta-questions) + `artifact` sub (existing 3 MQs canonical definitions; bounded-extensibility rule at §2.3; 5 prior task-define findings).

**Entry point:** `signal-first`. Purpose specific: develop a typed taxonomy that makes the meta-question concept non-fuzzy + enables principled MQ extension authoring + enables future pass-1/pass-2 placement decisions.

**Purpose** (bias source): items bear if they help (a) identify the load-bearing axes that distinguish meta-questions, (b) propose candidate types/categories, (c) map MQ1/MQ2/MQ3 to candidate taxonomies, (d) clarify the pre-context-vs-post-context distinction and its implications, (e) surface candidate post-context meta-questions, (f) clarify the bounded-extensibility rule under the taxonomy, (g) name the categories.

**Territory:** abstract-bounded. Sub-regions:

- **AX** — Candidate axes for distinguishing meta-questions
- **TY** — Candidate types/categories that emerge from axes
- **MP** — Mapping of MQ1/MQ2/MQ3 to candidate taxonomies
- **PC** — Pre-context vs post-context (substrate-dependence axis details)
- **DC** — Downstream consumer (within-Task-Define vs cross-discipline)
- **AS** — Answer-shape axis
- **TP** — Task-property kind (intrinsic / relational / interpretive)
- **CO** — Cognitive operation (classify / perceive-need / infer-intent / validate / refine)
- **P2** — Pass-2-specific meta-question candidates
- **BR** — Bounded-extensibility rule status under taxonomy
- **NM** — Naming candidates for categories
- **EX** — MQ extension authoring under taxonomy
- **PS** — Pass-1/pass-2 split mapping (background concern; surface but not decide)
- **IH** — Inherited commitment touchpoints (5 priors)
- **GA** — Gaps (user-implicit)

**Boundary-discovery sub-phase: NOT FIRED.** Territory abstract-bounded; edges given by 9 observation targets.

---

## Traversal Trace

Per entry: region · item · tag (core/sub/side/umbrella) · confidence (HIGH/MED/LOW) · brief note. Recency annotation = `{source: none, value: null}` for all possibility-mode items.

### Region AX — Candidate axes for distinguishing meta-questions

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 1 | AX1 — **Substrate-dependence axis**: pre-context (answerable from task statement + LLM general knowledge alone) vs post-context (requires surfaced material) | core | HIGH | Directly serves user's pass-1/pass-2 motivation. |
| 2 | AX2 — **Target-of-perception axis**: what the meta-question perceives — intrinsic property of task / relational property (task-to-project) / interpretive property (task-to-user-intent) | core | HIGH | Maps cleanly to MQ1/MQ2/MQ3 distinction. |
| 3 | AX3 — **Downstream-consumer axis**: within-Task-Define operations (MultiScope, Rephrase) vs cross-discipline (runner → /surfacing) | core | HIGH | Binary; MQ1+MQ3 within; MQ2 cross. |
| 4 | AX4 — **Answer-shape axis**: simple verdict / single-element payload / multi-element structured payload / free-form perception | sub | HIGH | Distinguishes the 3 MQs' output shapes but doesn't directly serve user's stated downstream concern. |
| 5 | AX5 — **Cognitive operation axis**: classify (assign to category) / perceive-need (identify what's needed) / infer-intent (interpret hidden meaning) / validate (check prior perception) / refine (sharpen with new evidence) | sub | HIGH | More granular than AX2 but maps onto it. |
| 6 | AX6 — **Constraint-vs-information axis**: meta-question outputs that CONSTRAIN downstream operations (negative; rule out vocabularies/options) vs outputs that PROVIDE INFORMATION for downstream (positive; supply specific items/types) | sub | MED | Inherited from 2026-06-05_00-11 (task-define2's distinction); applies in principle to MQ-Rephrase relationship + MQ2-/surfacing relationship. |
| 7 | AX7 — **Subjectivity axis**: objective task properties (scope IS what it is) vs interpretive inferences (intent requires guess about user) | side | MED | Possible sub-axis under target-of-perception; distinguishes MQ1 (objective) from MQ3 (interpretive). |
| 8 | AX8 — **Verdict-actionability axis**: meta-questions whose answer drives a runtime decision (e.g., MQ2's verdict drives /surfacing input formulation) vs questions whose answer is informational only (e.g., MQ3's intent informs Rephrase but doesn't gate anything) | side | LOW | Possible but maybe redundant with AX3. |
| 9 | AX9 — **Load-bearing axis combination**: AX1 (substrate-dependence) + AX2 (target-of-perception) are the two most load-bearing for the user's purpose. Combined as 2D grid yields a structured taxonomy. | core | HIGH | Synthesis position. |

### Region TY — Candidate types/categories that emerge from load-bearing axes

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 10 | TY1 — **Type 1: Structural** (perceives intrinsic property of the task) — MQ1 scope is an instance. Answer is a classification or property-value. | core | HIGH | First of 3 primary types per AX2. |
| 11 | TY2 — **Type 2: Relational** (perceives task-to-project relation) — MQ2 context-need is an instance. Answer is preparation substrate for cross-discipline coordination. | core | HIGH | Second of 3 primary types. |
| 12 | TY3 — **Type 3: Interpretive** (perceives task-to-user-intent relation; infers hidden meaning) — MQ3 intent-vs-surface is an instance. Answer is free-form inference. | core | HIGH | Third of 3 primary types. |
| 13 | TY4 — **Type 4 (candidate, post-context): Validation** — meta-questions that check whether a prior (pre-context) perception still holds after surfacing has run. Example: "did MQ2's context-need verdict turn out right given what /surfacing returned?" | core | HIGH | Pass-2 candidate; post-context perception. |
| 14 | TY5 — **Type 5 (candidate, post-context): Refinement** — meta-questions that sharpen a prior perception using surfaced material as new evidence. Example: "given the surfaced incident-postmortem artifacts, what is the now-visible scope this task ACTUALLY refers to (not just the LLM's pre-context guess)?" | core | HIGH | Pass-2 candidate; post-context perception. |
| 15 | TY6 — Alternative 1-axis taxonomy (axis A only): just {Structural, Relational, Interpretive}. Clean 3-type structure; maps to 3 MQs; doesn't address pre/post-context | sub | MED | Simpler but doesn't serve user's downstream concern. |
| 16 | TY7 — Alternative 2x3 grid (axes A × B): {pre-context × {S,R,I}, post-context × {S,R,I}} = 6 cells, currently only 3 populated (MQ1, MQ2, MQ3 in pre-context column) | core | HIGH | Richer; surfaces empty post-context cells as candidates. |
| 17 | TY8 — Alternative 3+2 hybrid: 3 primary types {Structural, Relational, Interpretive} as axis-A categories + Validation and Refinement as axis-B-derived sub-types under each | sub | HIGH | Synthesis of TY1-TY5. |
| 18 | TY9 — Both pre-context and post-context Structural/Relational/Interpretive perceptions might exist; the typology might be 3 primary × 2 substrate-modes = 6 sub-types, where pass-1 fires the pre-context variants and pass-2 fires post-context variants | core | HIGH | Cleanest synthesis. |

### Region MP — Mapping of MQ1/MQ2/MQ3 to candidate taxonomies

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 19 | MP1 — **MQ1 (scope)** → Structural / pre-context. Perceives an intrinsic property of the task (its scope axis); answerable from task statement alone; consumed by MultiScope (within-Task-Define). | core | HIGH | Canonical mapping. |
| 20 | MP2 — **MQ2 (context-need)** → Relational / pre-context. Perceives task's relation to project (does it need external context; what kinds; what stance); answerable from task statement + LLM general task-type knowledge (hypothetical-relational mode); consumed by runner → /surfacing (cross-discipline). | core | HIGH | Canonical mapping. |
| 21 | MP3 — **MQ3 (intent-vs-surface)** → Interpretive / pre-context. Perceives task-to-user-intent (what the asker actually wants beyond the surface ask); answerable from task statement + LLM general inference; consumed by Rephrase (within-Task-Define). | core | HIGH | Canonical mapping. |
| 22 | MP4 — All 3 base MQs are pre-context (must be — they fire in pass-1 before /surfacing). The pre-context cell of axis B is populated by all three. | core | HIGH | Confirms pre-context as common substrate-state for current MQs. |
| 23 | MP5 — Mapping is clean: each MQ maps to ONE primary type unambiguously. No boundary cases among the 3 base MQs. | core | HIGH | Taxonomy survives the mapping test. |
| 24 | MP6 — The taxonomy explains why these 3 were the original base set: they cover the 3 primary types of pre-context perception (intrinsic / relational / interpretive). The 3-base-MQ choice was structurally exhaustive on axis A under the pre-context constraint. | core | HIGH | Retroactive justification. |
| 25 | MP7 — Extensions under bounded-extensibility rule would: (i) be additional instances within an existing primary type (e.g., another Structural MQ asking about a different intrinsic property), OR (ii) introduce a new primary type (less common; would need taxonomy refinement). | sub | HIGH | Extension authoring guidance. |

### Region PC — Pre-context vs post-context (axis B detail)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 26 | PC1 — **Pre-context meta-questions** are answerable from task statement + LLM general knowledge alone. No surfaced material needed. Fire in pass-1. | core | HIGH | Definitional. |
| 27 | PC2 — **Post-context meta-questions** require surfaced material to answer well. Their answer would be hypothetical-relational at best in pre-context (per 21-12 finding's mode); concrete in post-context. | core | HIGH | Definitional. |
| 28 | PC3 — Current spec has NO post-context meta-questions (the 3 base MQs are all pre-context). Post-context is the empty column in the taxonomy's 2D grid. | core | HIGH | Current state. |
| 29 | PC4 — A meta-question can theoretically EXIST in both modes — the SAME perception target performed pre-context (in pass-1) and post-context (in pass-2, with surfaced material refining the perception). Examples: a pre-context MQ2 produces hypothetical-relational kinds/stance; a post-context MQ2 (refinement type) could produce concrete kinds/stance from actual surfaced material. | sub | HIGH | Pre/post can be variants of same perception target. |
| 30 | PC5 — Pre-context perceptions can be VALIDATED post-context (Validation type) — "did our pre-context guess hold?" Or REFINED post-context (Refinement type) — "given surfacing, what's now visible that wasn't?" | core | HIGH | Two distinct post-context operations. |
| 31 | PC6 — The pre-context-vs-post-context axis is ORTHOGONAL to the target-of-perception axis. A 2D grid (or 2-mode-of-each-primary-type) is the structural shape. | core | HIGH | Architectural shape. |
| 32 | PC7 — Substrate-fidelity is preserved across both modes: pre-context MQs use task-statement + LLM cognition; post-context MQs use task-statement + LLM cognition + surfaced material (received from runner, not fetched — per the FETCH-vs-RECEIVE distinction from 21-58 and 2026-06-05_00-11). | core | HIGH | Substrate compatibility. |

### Region DC — Downstream-consumer axis details

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 33 | DC1 — **Within-Task-Define consumer**: meta-question's answer is consumed by another Task-Define operation. Examples: MQ1 → MultiScope (scope-axis); MQ3 → Rephrase (intent constraint). | core | HIGH | Half the consumer space. |
| 34 | DC2 — **Cross-discipline consumer**: meta-question's answer is consumed by a different discipline (via the runner). Example: MQ2 → /surfacing (preparation substrate). | core | HIGH | The other half. |
| 35 | DC3 — DC2 is structurally distinct because it requires runner-side translation (the runner formulates downstream-discipline input from the meta-question's answer). DC1 requires no such translation. | sub | HIGH | Architectural distinction. |
| 36 | DC4 — Consumer axis correlates with target-of-perception axis: Relational type tends to have cross-discipline consumer (it perceives task-to-project relation, which naturally informs cross-discipline coordination); Structural and Interpretive tend to have within-Task-Define consumer (they inform within-discipline operations). | sub | HIGH | Correlation, not strict mapping. |
| 37 | DC5 — Could a Structural meta-question have a cross-discipline consumer? E.g., "MQ-scope" feeding /sensemaking? Theoretically yes; but currently no such pattern in the spec. | side | LOW | Future possibility. |

### Region AS — Answer-shape axis details

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 38 | AS1 — **Simple verdict** (binary or trinary, e.g., yes/no/uncertain): no MQ uses this shape currently as the sole output. MQ2's verdict element is binary-trinary, but it's part of a compound payload. | sub | HIGH | Available shape. |
| 39 | AS2 — **Single-element payload** (one structured answer): MQ1's answer (a scope-axis value) approximates this. | sub | HIGH | MQ1's shape. |
| 40 | AS3 — **Multi-element structured payload** (multiple structured elements): MQ2's three-element shape (verdict + kinds + stance + hypothetical-relational mode). | sub | HIGH | MQ2's shape. |
| 41 | AS4 — **Free-form perception** (no fixed schema): MQ3's intent description. | sub | HIGH | MQ3's shape. |
| 42 | AS5 — Answer-shape correlates with target-of-perception type: Structural tends to single-element-payload (one property value); Relational tends to multi-element-structured (multiple coordination signals); Interpretive tends to free-form (perception isn't classifiable). | sub | HIGH | Useful correlation. |
| 43 | AS6 — Answer-shape might be more accurately a CONSEQUENCE of target-of-perception type than an independent axis. | sub | MED | Possible simplification. |

### Region TP — Task-property kind (sub-axis under target-of-perception)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 44 | TP1 — **Intrinsic** properties: facts about the task as stated. Scope (MQ1) is intrinsic. Other examples: task's complexity-class; task's deliverable-shape (already covered by Deconstruct, not MQ). | sub | HIGH | Distinguishes Structural-class MQs. |
| 45 | TP2 — **Relational** properties: how the task relates to existing project state. Context-need (MQ2) is relational. Other examples: task's dependency on prior work; task's expected impact on existing systems. | sub | HIGH | Distinguishes Relational-class MQs. |
| 46 | TP3 — **Interpretive** properties: inferences about user-intent or implicit framing. Intent-vs-surface (MQ3) is interpretive. Other examples: implicit acceptance criteria; unstated quality bar. | sub | HIGH | Distinguishes Interpretive-class MQs. |
| 47 | TP4 — These 3 task-property kinds map directly to the 3 primary types in TY1-TY3. Strong correlation; arguably TP IS axis A. | core | HIGH | Reduces axis count. |

### Region CO — Cognitive operation axis details

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 48 | CO1 — **Classify** — assign task to a category (e.g., MQ1's scope-axis classification). | sub | HIGH | Structural-class operation. |
| 49 | CO2 — **Perceive-need** — identify what the task needs (e.g., MQ2's context-need perception). | sub | HIGH | Relational-class operation. |
| 50 | CO3 — **Infer-intent** — interpret hidden meaning (e.g., MQ3's intent inference). | sub | HIGH | Interpretive-class operation. |
| 51 | CO4 — **Validate** — check whether a prior perception still holds given new evidence (e.g., post-context "did MQ2's verdict hold?"). | core | HIGH | Pass-2 candidate operation. |
| 52 | CO5 — **Refine** — sharpen a prior perception using new evidence (e.g., post-context "given the surfaced material, what's the now-clearer scope of this task?"). | core | HIGH | Pass-2 candidate operation. |
| 53 | CO6 — CO1+CO2+CO3 are pre-context operations; CO4+CO5 are post-context operations. The cognitive-operation axis correlates with substrate-dependence axis. | sub | HIGH | Cross-axis correlation. |
| 54 | CO7 — Could there be POST-context Classify / Perceive-need / Infer-intent? Yes — e.g., post-context Classify could mean "given surfacing, classify the task into a NEW scope axis we couldn't see pre-context." But these collapse into Refinement (CO5) in practice. | sub | MED | CO4/CO5 might be sufficient for post-context. |

### Region P2 — Pass-2-specific meta-question candidates

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 55 | P21 — **MQ2-validation** (post-context Relational): "Did MQ2's pre-context verdict (yes/no/uncertain) turn out right given what /surfacing returned? Were the perceived kinds/stance accurate?" | core | HIGH | Direct pass-2 candidate. |
| 56 | P22 — **MQ3-refinement** (post-context Interpretive): "Given the surfaced material, has the perceived intent shifted? Does the surface ask now appear to mean something different than initially inferred?" | core | HIGH | Direct pass-2 candidate. |
| 57 | P23 — **MQ1-refinement** (post-context Structural): "Given the surfaced material, is the task's scope as initially perceived, or has it expanded/contracted in light of what /surfacing revealed?" | sub | HIGH | Pass-2 candidate; possibly redundant with MultiScope's pass-2 role if MultiScope re-runs. |
| 58 | P24 — **MQ-frontier** (post-context Relational, new): "Given the surfaced material, what kinds of context are STILL missing? Should /surfacing be invoked again with a refined purpose?" | core | HIGH | Enables the iterative /surfacing loop from 2026-06-05_00-11's forward-looking note. |
| 59 | P25 — **MQ-conflict-detection** (post-context, new): "Does the surfaced material CONFLICT with the pre-context MQ answers? Are there contradictions that need adjudication?" | sub | MED | Possible pass-2 meta-question. |
| 60 | P26 — Pass-2 meta-questions probably need their OWN bounded-extensibility rule (different from pre-context MQs because they have different substrate-dependence). | sub | HIGH | Implication for BR region. |

### Region BR — Bounded-extensibility rule status under taxonomy

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 61 | BR1 — Current rule (§2.3): extensions must be (a) about task structure/framing, (b) constrain Rephrase, (c) one-sentence. | core | HIGH | Existing rule. |
| 62 | BR2 — Rule (a) applies UNIFORMLY across all categories — Structural, Relational, Interpretive are all about task structure/framing. | core | HIGH | Rule (a) survives the taxonomy. |
| 63 | BR3 — Rule (b) "constrain Rephrase" doesn't apply uniformly. MQ1 doesn't DIRECTLY constrain Rephrase (it feeds MultiScope); MQ2 also doesn't directly (it feeds /surfacing). Only MQ3 directly constrains Rephrase. The rule's CURRENT wording technically applies via the MQ-constrains-Rephrase general mechanism (all MQ answers feed Rephrase as constraints), but it's strained. | core | HIGH | Rule (b) needs refinement under taxonomy. |
| 64 | BR4 — Proposed rule (b) refinement: "must constrain some downstream operation — within-Task-Define (Structural → MultiScope; Interpretive → Rephrase) OR cross-discipline (Relational → /surfacing-via-runner)." This generalizes the rule without losing intent. | core | HIGH | Refinement candidate. |
| 65 | BR5 — Rule (c) one-sentence cap applies uniformly. All MQ types should be expressible in one sentence (the perception's structure, not the answer's full content). | sub | HIGH | Rule (c) survives. |
| 66 | BR6 — Post-context meta-questions (TY4 Validation, TY5 Refinement) need their own rule variant: extensions must reference what a pre-context perception said + what surfaced material reveals + what the validation/refinement verdict is. | sub | HIGH | New rule for post-context types. |
| 67 | BR7 — Per-category rule refinements: Structural extensions need to identify the property-class they perceive (scope, complexity-class, etc.); Relational extensions need to identify the cross-discipline they prepare for; Interpretive extensions need to identify the inference-target (intent, criteria, etc.). | sub | MED | Per-category rule shapes. |

### Region NM — Naming candidates for categories

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 68 | NM1 — Names for Type 1: "Structural meta-question" / "Property meta-question" / "Intrinsic meta-question" / "Classification meta-question". Each captures the type's character differently. | sub | HIGH | Name candidates. |
| 69 | NM2 — Names for Type 2: "Relational meta-question" / "Coordination meta-question" / "Preparation meta-question" / "Cross-discipline meta-question". "Preparation" honors the 21-58 preparation-substrate concept; "Relational" is more abstract. | sub | HIGH | Name candidates. |
| 70 | NM3 — Names for Type 3: "Interpretive meta-question" / "Inference meta-question" / "Intent meta-question" / "Hidden-meaning meta-question". | sub | HIGH | Name candidates. |
| 71 | NM4 — Names for Type 4: "Validation meta-question" / "Confirmation meta-question" / "Post-context-check meta-question". | sub | HIGH | Name candidates. |
| 72 | NM5 — Names for Type 5: "Refinement meta-question" / "Reconsideration meta-question" / "Context-informed-refinement meta-question". | sub | HIGH | Name candidates. |
| 73 | NM6 — Selected names should be (a) concrete (convey the cognitive operation), (b) consistent in form (all -meta-question or all -MQ-type), (c) honor existing project vocabulary where possible (e.g., "preparation" from 21-58). | core | HIGH | Selection criterion. |
| 74 | NM7 — Synthesis: {Structural / Relational / Interpretive / Validation / Refinement} — five types covering pre-context (3) + post-context (2). Consistent in form (single-word + "meta-question" suffix). | core | HIGH | Synthesis name set. |

### Region EX — MQ extension authoring under taxonomy

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 75 | EX1 — When LLM perceives a need for an MQ extension at runtime, the taxonomy enables the LLM to: (i) classify the proposed extension into a type (Structural / Relational / Interpretive / Validation / Refinement); (ii) apply the type's specific bounded-extensibility refinement (per BR6+BR7); (iii) determine the extension's pre-context vs post-context placement. | core | HIGH | Extension authoring guidance. |
| 76 | EX2 — Extensions that don't fit any type might indicate (a) the proposed extension isn't really a meta-question (it's something else — verification, fetching, etc.), OR (b) the taxonomy needs a new type. The taxonomy's negative diagnostic capability is itself useful. | sub | HIGH | Anti-pattern detection. |
| 77 | EX3 — Per-category extension exemplars (worked examples) would help LLM authoring. Examples could be added to §2.3 alongside the existing rule (b) worked examples. | sub | MED | Spec amendment candidate (structural-layer; OOS). |

### Region PS — Pass-1/pass-2 split mapping (downstream concern)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 78 | PS1 — Pre-context meta-questions (Structural / Relational / Interpretive) fit pass-1 (before /surfacing). The 3 base MQs all fit here. | core | HIGH | Direct mapping. |
| 79 | PS2 — Post-context meta-questions (Validation / Refinement) fit pass-2 (after /surfacing). Currently empty in spec; taxonomy enables identifying these as a class. | core | HIGH | Direct mapping. |
| 80 | PS3 — Variant (a) from 2026-06-05_00-11 commits "pass-2 only Rephrase re-runs"; no meta-questions in pass-2. Under the taxonomy, this would either need to be revisited (to allow Validation/Refinement MQs in pass-2) or the post-context MQs stay theoretical until variant (a) is itself revised. | core | HIGH | Tension with prior commitment; flag for finding. |
| 81 | PS4 — Possible resolution: extend variant (a) to include "pass-2 also fires post-context MQs (Validation, Refinement) before re-running Rephrase". This would expand pass-2 from "Rephrase only" to "post-context MQs + Rephrase". | sub | HIGH | Future variant. |
| 82 | PS5 — Alternative resolution: keep variant (a) as-is; treat post-context MQs as a research frontier for a future task-define3 design. | sub | MED | Conservative. |
| 83 | PS6 — The taxonomy ENABLES both resolutions; the choice is downstream (separate inquiry). | core | HIGH | Inquiry scope respected. |

### Region IH — Inherited commitment touchpoints

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 84 | IH1 — From 14-14 (mode 6): MQ2's answer carries verdict + kind specifier. Taxonomy's Relational category absorbs this as the MQ2 type's structural commitment. | core | HIGH | Compatible. |
| 85 | IH2 — From 21-12 (MQ2 reframe): MQ2's three-element substance + hypothetical-relational mode + runner-mediated alignment. Taxonomy's Relational category absorbs all of these as the type's structural properties. | core | HIGH | Compatible. |
| 86 | IH3 — From 21-58 (preparation substrate): always-invoke premise + preparation substrate concept. Taxonomy's Relational category IS the preparation-substrate-carrying type; concepts align. | core | HIGH | Compatible. |
| 87 | IH4 — From 2026-06-05_00-11 (task-define2): variant (a) commits Rephrase-only-in-pass-2. Taxonomy raises the question of whether post-context MQs (Validation/Refinement) should also be in pass-2 — surfaces a tension (see PS3). | core | HIGH | Tension flagged. |
| 88 | IH5 — From §2.3 bounded-extensibility rule: rule (a/b/c). Taxonomy refines rule (b) per-category (BR4); keeps (a) and (c) uniform. | core | HIGH | Refinement compatible. |

### Region GA — Gaps (user-implicit; load-bearing)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 89 | GA1 — User didn't explicitly say whether the taxonomy should be 1-axis or 2-axis. Default per surfacing position: 2-axis (substrate-dependence × target-of-perception) is most useful given the user's downstream concern. | core | HIGH | Interpretation needed in Sensemaking. |
| 90 | GA2 — User didn't address whether pass-2 MQs (if any) would be NEW MQs or RE-FIREDS of pass-1 MQs with new context. Both interpretations possible; taxonomy supports both (Validation = re-fire-with-new-evidence; Refinement = could be either). | sub | HIGH | Interpretation gap. |
| 91 | GA3 — User said meta-questions are fuzzy; but they didn't specify whether the fuzziness is about (i) what the category covers, (ii) what the existing 3 MQs each produce, or (iii) how to author new ones. Taxonomy needs to address all three. | core | HIGH | Multi-dimensional fuzziness. |
| 92 | GA4 — User's broader question (pass-1 should have all 5 ops?) is acknowledged in branch.md as background but not addressed. Taxonomy's pass-1/pass-2 mapping helps inform but doesn't resolve. | sub | HIGH | Scope-respect. |
| 93 | GA5 — The taxonomy's interaction with the MQ-constrains-Rephrase mechanism (07-48): does the mechanism apply uniformly across all types, or per-category? Sensemaking should clarify. | sub | MED | Cross-commitment question. |
| 94 | GA6 — Post-context MQs (Validation/Refinement) might violate the always-invoke premise from 21-58 if they trigger conditional behavior. Need to verify they don't. | sub | MED | Compatibility check needed. |

---

## State Summary

### Territory specification echo
Abstract-bounded; 15 sub-regions covering 9 observation targets + IH + GA.

### Purpose specification echo
Develop typed taxonomy of meta-question categories grounded in structural nature; map MQ1/MQ2/MQ3; identify pre/post-context types; clarify bounded-extensibility per category; enable future pass-1/pass-2 split.

### Coverage map

| Region | Coverage | Aggregate verdict |
|---|---|---|
| AX — Candidate axes | confirmed-thorough | core-rich (4 core, 3 sub, 2 side); AX9 (axis combination) is synthesis position |
| TY — Candidate types | confirmed-thorough | core-rich (6 core, 3 sub); TY9 (3 primary × 2 substrate-modes = 6 sub-types) is synthesis |
| MP — Mapping of MQ1/MQ2/MQ3 | confirmed | core-rich (6 core, 1 sub); MP5 (clean mapping verified) is foundation |
| PC — Pre/post-context | confirmed-thorough | core-rich (5 core, 2 sub); PC4 (same target, two modes) is load-bearing |
| DC — Downstream consumer | confirmed | core-rich (2 core, 2 sub, 1 side); DC4 (correlation with type) is observation |
| AS — Answer-shape | confirmed | sub-rich (0 core, 6 sub); AS6 (might be consequence not independent axis) |
| TP — Task-property kind | confirmed | core-rich (1 core, 3 sub); TP4 (TP = axis A) reduces axis count |
| CO — Cognitive operation | confirmed | core-rich (2 core, 5 sub); CO6+CO7 cross-axis correlations |
| P2 — Pass-2 candidate MQs | confirmed | core-rich (3 core, 2 sub, 1 side); P24 (MQ-frontier for iterative /surfacing) enables 21-58 forward-looking note |
| BR — Bounded-extensibility rule | confirmed-thorough | core-rich (4 core, 3 sub); BR3+BR4 (rule b refinement) is principal change |
| NM — Naming | confirmed | core-rich (2 core, 5 sub); NM7 synthesis names |
| EX — Extension authoring | confirmed | core-rich (1 core, 2 sub); EX1 is the actionable guidance |
| PS — Pass-1/2 split mapping | confirmed | core-rich (4 core, 2 sub); PS3 tension with variant (a) flagged |
| IH — Inherited commitments | confirmed | core-rich (5 core); IH4 surfaces variant-a tension |
| GA — Gaps | confirmed | core-rich (3 core, 3 sub); GA1 + GA3 are Sensemaking pivots |

### Confirmed-absent regions
None.

### Concept-names list

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| meta-question taxonomy | inquiry-vocabulary | branch.md | the inquiry's subject |
| substrate-dependence axis | coined-term | AX1 | pre-context vs post-context |
| target-of-perception axis | coined-term | AX2 | intrinsic / relational / interpretive |
| downstream-consumer axis | coined-term | AX3 | within-Task-Define vs cross-discipline |
| Structural meta-question | coined-term (TY1) | NM1 | Type 1 — perceives intrinsic property |
| Relational meta-question | coined-term (TY2) | NM2 | Type 2 — perceives task-to-project relation |
| Interpretive meta-question | coined-term (TY3) | NM3 | Type 3 — perceives task-to-user-intent |
| Validation meta-question | coined-term (TY4) | NM4 | Type 4 (post-context) — check prior perception |
| Refinement meta-question | coined-term (TY5) | NM5 | Type 5 (post-context) — sharpen prior perception |
| 3-primary × 2-substrate-modes | coined-term | TY9 | the taxonomy's 6-cell synthesis shape |
| pre-context perception | coined-term | PC1 | answerable from task statement + LLM cognition |
| post-context perception | coined-term | PC2 | requires surfaced material |
| MQ-frontier | coined-term | P24 | post-context MQ identifying still-missing context for iterative /surfacing |
| classify / perceive-need / infer-intent / validate / refine | inherited-from-CO | CO1-CO5 | cognitive operations per type |

### Frontier flags (for Sensemaking)

| # | Flag | Region | Sensemaking guidance |
|---|---|---|---|
| **F1** | **Adjudicate the load-bearing axes.** AX9 proposes axis-A (target-of-perception) + axis-B (substrate-dependence) as the load-bearing pair. Sensemaking should test this against alternatives (single-axis A only; 3-axis A+B+C; etc.). | AX | Primary; gates taxonomy shape. |
| **F2** | **Adjudicate the taxonomy shape.** TY6 (1-axis 3-type) vs TY7 (2x3 grid 6-cell) vs TY9 (3-primary × 2-substrate-modes). TY9 is the synthesis position; verify it's the right shape. | TY | Decides the typed structure. |
| **F3** | **Verify MQ1/MQ2/MQ3 mapping cleanness.** MP1-MP6 propose clean mapping; verify no boundary cases or ambiguities. | MP | Mapping integrity check. |
| **F4** | **Commit names for the 5 types.** NM7 proposes {Structural / Relational / Interpretive / Validation / Refinement}. Verify these are the best names; check alternatives (Preparation for Relational; etc.). | NM | Naming decision. |
| **F5** | **Adjudicate bounded-extensibility rule (b) refinement.** BR3+BR4 propose generalizing "constrain Rephrase" to "constrain some downstream operation". Verify this preserves rule intent. | BR | Rule refinement. |
| **F6** | **Surface variant-(a) tension.** PS3 + IH4 — variant (a) commits "Rephrase only in pass-2" which conflicts with placing post-context MQs in pass-2. Sensemaking should surface this tension in the finding so the user can decide whether to revisit variant (a) or treat post-context MQs as research frontier. | PS / IH | Honest-assessment requirement. |
| **F7** | **Adjudicate user's fuzziness interpretation.** GA3 — fuzziness has 3 dimensions (what category covers / what existing MQs produce / how to author new). Taxonomy should address all three. | GA | Comprehensive deliverable. |
| **F8** | **Adjudicate the post-context MQ candidates.** P21-P25 propose 5 candidate post-context MQs (MQ2-validation, MQ3-refinement, MQ1-refinement, MQ-frontier, MQ-conflict-detection). Verify these are distinct + collapse-able to the Validation/Refinement category. | P2 | Pass-2 MQ examples for finding. |
| **F9** | **Adjudicate inherited commitment compatibility.** IH1-IH5 — verify per commitment that taxonomy respects/refines/preserves. CONCLUDE mandates this section. | IH | Synthesis re-test requirement. |

### Workspace-populated status
`{populated: true, populated-at: 2026-06-05_10-07, extent: 94 items across 15 regions; 9 frontier flags for Sensemaking}`

---

## Telemetry

- **Mode:** possibility (primary) + artifact (sub: existing spec §2.3; 5 prior findings; current 3 MQs canonical text)
- **Entry point:** signal-first
- **Cycles run:** 15 (one per region)
- **Items enumerated/generated:** 94 total
  - **core:** 51
  - **sub:** 39
  - **side:** 4 (AX7 subjectivity-axis; AX8 verdict-actionability; DC5 future cross-discipline structural MQ; CO7 collapse of post-context types)
  - **umbrella:** 0
- **Sub-phase fired:** no (territory abstract-bounded)
- **Boundary-discovery output:** N/A
- **Convergence criteria status:** MET
- **Workspace-overload trigger:** not fired
- **Failure modes checked:** all clean (LAYER 1 #1-7 + LAYER 2 #1-3; recency N/A)
- **items_with_mtime:** 0
- **items_without_mtime:** 94

---

## Self-Assessment Verdict

**PROCEED.**

15 regions surfaced thoroughly (94 items; 51 core; all 9 branch observation targets + IH + GA covered). 9 frontier flags surfaced. No LAYER 1 or LAYER 2 failure modes observed.

**Frontier-priority for Sensemaking:** F1 (axes) + F2 (shape) are PRIMARY — they gate the taxonomy structure. F3 (mapping) + F4 (naming) are downstream of structure. F5 (rule refinement) + F6 (variant-a tension) are honest-assessment requirements. F7 (multi-dimensional fuzziness) ensures comprehensive deliverable. F8 (post-context MQ candidates) + F9 (inherited commitments) are coverage requirements.

**Pre-Sensemaking synthesis position:** the load-bearing axes are AX1 (substrate-dependence) + AX2 (target-of-perception). The taxonomy shape is TY9 (3 primary types × 2 substrate-modes = 6 sub-types; 3 currently populated by existing 3 base MQs in pre-context column; 2 candidate post-context types from CO4+CO5). Names per NM7: Structural / Relational / Interpretive / Validation / Refinement. Bounded-extensibility rule (b) needs refinement per BR4 (generalize "constrain Rephrase" to "constrain some downstream operation"). Variant-(a) tension flagged per PS3+IH4 for finding's honest-assessment section.

**Next discipline:** Sensemaking.
