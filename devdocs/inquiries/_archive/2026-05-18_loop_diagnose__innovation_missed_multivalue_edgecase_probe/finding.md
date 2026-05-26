---
status: active
model: claude-opus-4-7[1m]
effort: max
---

# Finding: Innovation Missed Multi-Value Edge-Case Probe at Schema-Commitment Piece — A Strategy E (No-Extension) Diagnostic

## Question

From `_branch.md`:

> Given the weak prior inquiry at `devdocs/inquiries/2026-05-16_10-50__finding_md_format_redesign/` (whose Innovation produced a `type:` frontmatter key as single-valued with closed enum `decision | spec-modification | recommendation | loop-diagnose` and a HALT-and-ask rule when missing), the human follow-up directive that triggered the rethink (asking "should `type:` handle findings that genuinely span multiple types — and if so, should the schema be multi-valued, primary-plus-secondary, or some other shape?"), and the corrected inquiry at `devdocs/inquiries/2026-05-17_01-09__finding_type_field_multi_value_consideration/` (which re-considered the schema under the edge-case probe and committed to keeping single-value plus a clarifying note) — **what did the Innovation discipline in the weak prior fail to do that it did not surface "what if a finding genuinely spans multiple types?" (or any equivalent edge-case-probe on its own committed schema) as a candidate, focusing strictly on Innovation's own responsibility surface per `cognitive_harness/innovate/references/innovate.md` and excluding what other disciplines should have done**?

**Goal:** an evidence-backed Innovation-only diagnostic on this T1 correction chain, distinguishing structurally from the prior three 2026-05-18 diagnostics, composing with their refinement-set v3. The output is intended for a future redesign of `/innovate`.

---

## Finding Summary

- **The verdict is Strategy E — no extension.** Composed refinement-set v3 (the 8-piece set produced by the prior three 2026-05-18 diagnostics: Pair #5's Q1-Q5 piece-level Inversion rules; Pair #7's §8 intervention-shape vocabulary + Q3-extension axis specification + Q2 fifth property + Q5 telemetry extension; Pair #8's §8.B methodology-mode vocabulary + §9 seed-time consideration rule) stays unchanged at 8 effective pieces. This diagnostic produces NO new refinement candidates against `/innovate` reference (the canonical specification of the Structural Innovation discipline at `cognitive_harness/innovate/references/innovate.md`). The diagnostic's value is documentary: it characterizes what went wrong at Innovation's load-bearing piece, validates that the existing refinement-set v3 catches the case probabilistically, and contributes one cumulative data point to a research frontier preserved by the second prior diagnostic.

- **Where Innovation in `10-50` failed.** At inquiry `10-50`'s P1 piece (the frontmatter schema piece in its archived `innovation.md` at `2026-05-16_10-50__finding_md_format_redesign/docarchive/innovation.md`), the mechanism log records only **Combination** applied. No Framer (Lens Shifting, Constraint Manipulation, Inversion) was applied at the schema-commitment piece. The 5-test cycle's Scrutiny survival surfaced "the frontmatter has too many optional keys" — a KEY-QUANTITY objection, not a CARDINALITY objection. The cardinality axis (single-value vs multi-value vs open-enum) was structurally untouched at P1. At the adjacent P2 piece (per-type Finding-Body Schemas), Scrutiny surfaced a cross-variant objection — "4 variants is too rigid; some findings cross types" — but the defense ("primary type still applies; sub-form embeds OPTIONAL") relied on the body-section-shape reading IMPLICITLY without stating that reading as a structural commitment. The multi-value alternative was never generated as a candidate for the 5-test cycle to evaluate.

- **The deeper load-bearing axis at P1 is META-cardinality (reading-commitment), not raw cardinality.** The corrected inquiry `01-09` (the inquiry that probed the multi-type edge case and committed its verdict) did NOT change the schema. Its only structural intervention was a one-paragraph clarifying note added to the prior finding's Variants section + a corpus-audit MUST item. The clarifying note states: "`type:` denotes BODY-SECTION-SHAPE, not content-mention." The corrected outcome was SCHEMA-CONSERVATIVE; the intervention was at the META layer (which reading the schema uses), not at the structural layer (single-value vs multi-value). The diagnostic's refinement therefore matches: minimal-intervention to the diagnostic refinement-set, because the corrected human-team's intervention was itself minimal.

- **Composed v3 catches this case probabilistically, not deterministically.** `10-50`'s P1 fits composed v3's Q2 meta-decision-piece criterion at properties (iii) lesson-vocabulary YES — P1 introduces the 4-type enum as new vocabulary applied throughout the finding's downstream — and (iv) evaluation-criterion YES — the type field is criterion by which CONCLUDE (the protocol that compiles a finding from discipline outputs) evaluates downstream findings via HALT-and-ask + per-type body-section selection. Q3 (composed v3's piece-level Inversion rule at meta-decision pieces; produced by the first 2026-05-18 diagnostic) would fire at P1 retroactively. Q3's compliance criterion (an Inversion-candidate paragraph naming an assumption and reversal) would be met if any Inversion-candidate is generated. The axis-of-Inversion is non-determined under Q3 as written — Innovation could plausibly invert on content axis ("are the 4 types right?"), cardinality axis ("is single-valued right?"), openness axis ("is closed enum right?"), or completeness axis ("is a type missing?"). v3 catches the case in the sense that Q3 fires and Inversion is required; v3 does not deterministically catch the cardinality / reading-commitment axis specifically.

- **The case adds one cumulative data point to a research frontier preserved by the second 2026-05-18 diagnostic.** That diagnostic (`devdocs/inquiries/2026-05-18_loop_diagnose__innovation_produced_addtest_when_repair_correct/finding.md`) preserved Q3.Inversion (ADD-MULTI-AXIS-REQUIREMENT — require Inversion on ALL load-bearing axes simultaneously at meta-decision pieces, not just the intervention-shape axis) as RESEARCH FRONTIER, deliberately not promoted because single-case evidence was insufficient. This Pair #12 case is the SECOND cumulative case for that frontier: Pair #7 was the first evidence (intervention-shape axis at property-(v) pieces); Pair #12 is the second evidence (cardinality / reading-commitment axis at schema-commitment pieces). A plausible threshold for promoting ADD-MULTI-AXIS-REQUIREMENT from RESEARCH FRONTIER to actionable is 3+ cumulative cases with multi-axis-failure at meta-decision pieces; one or two more cases would justify promotion. The threshold is heuristic, not rigid; the calibration is evidence-accumulation-driven, not count-based.

- **The case introduces a new composition pattern: "validation + cumulative-evidence contribution".** The prior three 2026-05-18 diagnostics established three composition patterns: Pair #5's STANDALONE-SET (5 new pieces; refinement-set v1); Pair #7's INTEGRATED-EXTENSION (v1 → v2: +1 new vocabulary + 3 modified prior pieces); Pair #8's VERTICAL-LAYERING (v2 → v3: +2 new pieces at seed-time above piece-time). Pair #12 introduces a fourth pattern that is legitimately distinct: validation + cumulative-evidence contribution, producing v3 unchanged. **Three preconditions must converge for this pattern to apply:** (1) the case is partially caught by the existing refinement-set; (2) the corrected outcome was structurally conservative; (3) single-case evidence is insufficient for promoting any preserved research frontier. When all three converge, the pattern's output is no spec-edit candidates + validation of which existing rules fire + cumulative data point to relevant preserved frontiers + composition-pattern application. Future diagnostics in the series can use this pattern when these three preconditions converge.

- **T1 territory's edge-case-probe sub-type is spec-vocabulary covered by existing /innovate mechanisms.** The 19-pair gap-analysis (`devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/finding.md`) named Gap-1 (T2 framer-suite under-elaboration) and Gap-2 (T4 procedural-meta absence) as the two structural gaps; T1 generative-content territory was not named as a gap. This finding's scope is bounded to the edge-case-probe sub-type within T1 (NOT the full T1 territory — other T1 sub-types: counter-examples, mechanism objections, dimensional corrections, pattern-naming, mechanism-level correction remain unexamined). Within the edge-case-probe sub-type, existing /innovate mechanism descriptions canonically include edge-case probing as application directions: Inversion ("Assumes the opposite of a current belief and explores what follows"); Constraint Manipulation ("removes constraints that block"); Absence Recognition ("Identifies what should exist but doesn't"). The failure at `10-50`'s P1 is at the DISCIPLINE-APPLICATION level — existing mechanisms were canonically available but not applied to the load-bearing axis. Operational confirmation: the corrected `01-09`'s Innovation generated 4 multi-value schema alternatives using exactly these mechanisms (Domain Transfer, Inversion, Combination, Extrapolation, Constraint Manipulation) — proving that existing mechanism vocabulary is operationally sufficient when directed correctly.

- **Hard scope constraint maintained.** Both diagnostic-articulation pieces (Q1 structural characterization + Q2 forward-looking output) operate exclusively on the diagnostic finding's own text. Neither proposes changes to `/innovate` reference. Composed v3 stays at 8 effective pieces; no spec-edit propagates to v3 from this diagnostic.

---

## Finding

### Surrounding context — why this diagnostic exists

The Homegrown project (a cognitive harness defined by markdown files installed as LLM skills; see project README at `README.md`) ships a discipline called `/innovate` whose canonical specification lives at `cognitive_harness/innovate/references/innovate.md`. The discipline generates candidate ideas using seven mechanisms (four Generators — Combination, Absence Recognition, Domain Transfer, Extrapolation; three Framers — Lens Shifting, Constraint Manipulation, Inversion) and tests them via a five-test cycle (Novelty, Scrutiny survival, Fertility, Actionability, Mechanism independence).

Earlier this session, a 19-pair gap-analysis cataloged correction chains where the project's accumulated inquiry history shows the human stepping in with an innovation the discipline didn't produce on its own. That analysis named two structural gaps in `/innovate`: Gap-1 (T2 framer-suite under-elaboration for frame-reshape moves) and Gap-2 (T4 procedural-meta moves absent from `/innovate`'s mechanism vocabulary). T1 territory — generative-content correction (counter-examples, mechanism objections, edge-case probes, dimensional corrections) — was NOT named as a gap; the analysis implicitly treated T1 as covered by existing mechanisms.

Three prior 2026-05-18 diagnostics each addressed one correction chain from the dataset:
- **Pair #5** (T2 mapping-redo) → piece-level Inversion absent at the load-bearing relationship-label piece. Produced refinement-set v1 (5 new pieces: Q1 definitional clarification at §3 Inversion; Q2 four-property meta-decision-piece criterion; Q3 piece-level Inversion rule; Q4 failure-mode prevention refinements; Q5 telemetry extension).
- **Pair #7** (T4 REPAIR-vs-ADD-TEST) → Inversion applied at piece-level but on the wrong axis (content not intervention-shape). Produced refinement-set v2 (v1 + 1 new §8 intervention-shape vocabulary + 3 modified prior pieces: Q2 fifth property added; Q3 axis specification; Q5 axis-distribution telemetry).
- **Pair #8** (T4 contrarian-rethink methodology mode) → seed-level methodology-mode-alternative not considered. Produced refinement-set v3 (v2 + 2 new pieces at seed-time: §8.B methodology-mode vocabulary; §9 seed-time methodology-mode consideration rule).

This is the fourth diagnostic, addressing Pair #12 of the dataset, tagged in the gap-analysis as "T1 generative-content — edge-case probe sub-type." The same weak prior as Pair #8 (`10-50`); a different correction chain (the corrected inquiry is `01-09`, which probed the multi-type edge case). The user invoked LOOP_DIAGNOSE (the project's protocol for diagnosing correction chains at `cognitive_harness/protocols/loop_diagnose.md`) explicitly and scoped strictly to Innovation.

### The correction chain

Two saved inquiries form the evidence base:

- **The weak prior**, at `devdocs/inquiries/2026-05-16_10-50__finding_md_format_redesign/`, produced 8 load-bearing commitments for a redesigned finding.md template — including the universal-base + typed-variant architecture, four type variants (decision, spec-modification, recommendation, loop-diagnose), an edit-spec sub-form, frontmatter extensions, strengthened style rules, and a CONCLUDE-procedure-update brief. The P1 (frontmatter schema) piece committed `type:` as single-valued with the closed 4-value enum plus a HALT-and-ask rule when missing.

- **The corrected inquiry**, at `devdocs/inquiries/2026-05-17_01-09__finding_type_field_multi_value_consideration/`, probed the question "should `type:` be multi-valued?" The verdict was option (a): single-valued stays. The clarifying intervention was a one-paragraph note added to the prior finding's Variants section, stating that `type:` denotes body-section-shape (not content-mention). The corrected inquiry also committed a corpus-audit MUST item: within two weeks, audit the corpus's ~50 findings for hybrid-body cases; if any are found, the deferred list-valued schema (`types: [primary, secondary]`) becomes the right answer and the verdict re-opens. The corrected outcome is SCHEMA-CONSERVATIVE.

The user's directive (verbatim from `01-09`'s `_branch.md` Question):

> *"Should the `type:` frontmatter key proposed in [10-50] (currently single-valued with enum ...) handle findings that genuinely span multiple types — and if so, should the schema be multi-valued (list form), primary-plus-secondary, or some other shape?"*

This Pair #12 is tagged "T1 generative-content; edge-case probe" — distinct from the prior three diagnostics' tags (Pair #5 T2; Pair #7 T4; Pair #8 T4). T1 was not named as a structural gap by the prior gap-analysis.

### What Innovation produced in `10-50`'s P1 schema-commitment piece

Reading `10-50`'s archived `innovation.md` at the P1 piece directly:

The piece's mechanism-application section reads: *"Combination: canonical template + corpus-observed frontmatter variety + sensemaking commits → unified schema."* Only **Combination** is named at piece-application level (with Sensemaking's commits cross-referenced as inputs to Combination). No Framer (Lens Shifting, Constraint Manipulation, Inversion) is applied at P1.

The committed text:

```yaml
type: decision                   # decision | spec-modification | recommendation | loop-diagnose
```

— with the default-when-missing rule: `HALT and ask the user.` The piece's own KILLs section lists one rejected alternative: "default to `decision`" — rejected because *"silent default to the wrong type is the failure mode the discriminator exists to prevent."* The rejected alternative addressed default-handling, not cardinality.

The 5-test cycle at P1:

| Test | Output |
|---|---|
| Novelty | "preserves canonical universal sections (100% adoption); extends frontmatter to codify observed variety; carves out materialization explicitly." |
| **Scrutiny** | **"strongest objection — 'the frontmatter has too many optional keys.' Defense: each key has documented semantics + corpus usage evidence (`related` 32/50; `diagnoses` 4/50; `verdict` 2/50); they're optional. Survives."** |
| Fertility | "the `type:` discriminator enables per-type Finding-body variants (P2)." |
| Actionability | "yes — frontmatter is YAML; sections are markdown." |
| Mechanism independence | "Combination (canonical + corpus) and Sensemaking commits converge." |

The Scrutiny objection at P1 is on KEY-QUANTITY (too many optional keys), not on the type field's cardinality. The cardinality axis is untouched. The 5-test cycle proceeds with the single-value commitment unchallenged on the relevant axis.

At the adjacent P2 (per-type Finding-Body Schemas) piece, the Scrutiny test reads: *"strongest objection — '4 variants is too rigid; some findings cross types (e.g., a Decision finding that also proposes edits).' Defense: the primary type still applies; sub-form embeds are OPTIONAL for non-spec-modification types. Cross-type content stays valid; type names the dominant shape."* — The cross-variant objection IS surfaced at P2's Scrutiny, but the defense ("primary type still applies; sub-form embeds OPTIONAL") relies on the body-section-shape reading implicitly. The defense doesn't state that reading as an explicit structural commitment; it just operates under it.

Across `10-50`'s entire saved Innovation output, no Inversion-candidate at the cardinality axis is generated; no multi-value alternative is tested by the 5-test cycle; no rejected multi-value option appears in any KILL section.

### What Innovation produced in the corrected inquiry `01-09`

The corrected inquiry's Innovation operated under a seed framing that explicitly probed the multi-type edge case. The seed's `_branch.md` declares meaning as the primary cognitive layer: "the load-bearing question is what is a finding type-wise — does a finding inherently have ONE type, or can it genuinely span types?"

Reading `01-09`'s archived `innovation.md`: Innovation generated 4+ multi-value schema alternatives, tested each via 5-test cycle, and DEFERRED all with revival triggers:
- W3: list-valued `types: [primary, secondary]` (revival: corpus audit finds hybrid-body findings).
- N2: dual single-value fields (`type:` + `intent:`) (revival: case where body-shape and author-intent demonstrably disagree).
- N4: rename `type:` to `body_variant:` (revival: 3+ future findings show misreading despite clarifying note).
- N5: drop `type:` entirely; derive from sections (revival: spec-evolution inquiry on CONCLUDE pipeline detection).

The mechanisms `01-09`'s Innovation logged BY NAME were existing /innovate mechanisms (Domain Transfer, Inversion, Combination, Extrapolation, Constraint Manipulation) — not "edge-case probe" as a separate mechanism. The mechanism vocabulary did the work; the directive to apply mechanisms to the cardinality axis came from the seed framing (which inherited it from the user's correction).

In both inquiries, the methodology mode was inherited from the seed framing. In `10-50`, the standard default mode (Combination-led ship-ready production); the cardinality axis was not in the seed's focus. In `01-09`, the explicit multi-value-probe mode (mechanisms applied at the cardinality axis); the alternatives were generated and tested.

### Why the failure occurred — three layered structural anchors at the schema-commitment piece (with one critical asymmetry)

The three-layered structural anchor pattern observed across the prior three 2026-05-18 diagnostics (spec vocabulary level / prior-rule prescription level / discipline application level) generalizes to this case, but with a critical asymmetry: Layers 1 and 2 are already addressed; only Layer 3 is gap, and the gap is application-level only (not structural-level).

**Layer 1 — Spec vocabulary level — ALREADY ADDRESSED.** `/innovate` reference's existing mechanism descriptions canonically include edge-case probing as application directions. The relevant text from the reference file:

- Inversion: *"Assumes the opposite of a current belief and explores what follows."*
- Constraint Manipulation: *"Adds constraints that enable or removes constraints that block. Counterintuitively, adding a constraint can expand the solution space by changing what's relevant."*
- Absence Recognition: *"Identifies what should exist but doesn't. Innovation from the negative space."*

Each of these mechanism descriptions canonically permits edge-case generation: Inversion via assumption-reversal; Constraint Manipulation via constraint-relaxation; Absence Recognition via missing-cases identification. The Scrutiny survival test's "strongest objection" prosecution is itself an adversarial-test surface that surfaces edge cases. T1 territory's edge-case-probe sub-type is therefore spec-vocabulary covered — the gap-analysis's implicit treatment of T1 as covered is validated by this case at the spec-vocabulary level.

**Layer 2 — Prior-rule prescription level — PARTIALLY ADDRESSED.** Composed refinement-set v3's Q3 rule (piece-level Inversion at meta-decision pieces; produced by the first 2026-05-18 diagnostic) would fire at `10-50`'s P1 retroactively. P1 fits the meta-decision-piece criterion at properties (iii) and (iv). Q3's compliance criterion is met if any Inversion-candidate is generated.

But Q3 as written is AXIS-AGNOSTIC. The "current belief" to invert is chooser-determined. At P1, Innovation could plausibly invert on multiple axes:
- Content axis: "are the 4 types right?"
- Cardinality axis: "is single-valued right?"
- Openness axis: "is closed enum right?"
- Completeness axis: "is a type missing from the enum?"

If Innovation chooses the cardinality axis, the multi-value alternative is generated as the Inversion-candidate. If Innovation chooses content axis, it's not. Composed v3 catches the case PROBABILISTICALLY — Q3 fires; some Inversion-candidate is required; the specific axis is non-specified.

The axis-direction concern (which axis Inversion should target at multi-axis pieces) is addressed by the second 2026-05-18 diagnostic's preserved research frontier: Q3.Inversion (ADD-MULTI-AXIS-REQUIREMENT — require Inversion on ALL load-bearing axes simultaneously). That diagnostic deliberately preserved this as RESEARCH FRONTIER because single-case evidence was insufficient for promoting it to actionable. This Pair #12 case adds one cumulative data point to that preserved frontier; promotion is not justified by this case alone but is one case closer.

**Layer 3 — Discipline application level — GAP, but application-level only.** `10-50`'s Innovation applied no Framer at P1; the cardinality / reading-commitment axis was never probed. This is an APPLICATION failure of in-spec mechanisms, not a structural gap in `/innovate` spec or in composed v3's rules.

The three-layered pattern in prior diagnostics had all three layers as gaps requiring refinement. This case has Layer 1 already addressed (existing mechanism vocabulary covers the space) and Layer 2 partially addressed (composed v3's Q3 catches probabilistically; preserved frontier addresses the axis-direction concern). Only Layer 3 is gap, and the gap is application-level. The case validates v3's coverage at the structural levels and documents the application-level failure as cumulative evidence.

### The deeper load-bearing axis at P1 — META-cardinality (reading-commitment)

The corrected inquiry `01-09`'s structural intervention was NOT a schema change. It was a clarifying note at the META layer: "`type:` denotes body-section-shape, not content-mention." The corrected verdict kept the schema single-valued; the intervention was to make the implicit reading-commitment explicit.

This reveals that the load-bearing axis at P1 is at a META layer above cardinality. The reading-commitment determines cardinality downstream:
- Under the body-section-shape reading, cardinality is single-valued (one body-shape per finding).
- Under the content-mention reading, cardinality could be multi-valued (a finding has content from multiple variants).

The READING is the load-bearing decision. If `10-50`'s P1 had explicitly committed to the body-section-shape reading (rather than implicitly), the multi-type appearance would not have produced a user-correction; the reading-commitment would have pre-empted the ambiguity.

Innovation in `10-50` did not surface the implicit reading-commitment as an axis-of-decision. The 5-test cycle's Scrutiny on P1 tested key-quantity; Scrutiny on P2 tested cross-variant content (with implicit reading); no test surfaced "which reading is the schema using?" as an explicit axis.

This META-axis (reading-commitment) is part of what the preserved Q3.Inversion (ADD-MULTI-AXIS-REQUIREMENT) frontier would address if promoted: when Inversion is required on ALL load-bearing axes at a meta-decision piece, the reading-commitment axis would be one of the axes to invert against. Promotion of that frontier from cumulative evidence is the path forward; this diagnostic contributes one data point.

### Strategy E (no extension) — the calibration-discipline-honoring verdict

The composed refinement-set stays at v3 (8 effective pieces). This diagnostic produces NO new refinement candidates against `/innovate` reference. Four converging structural reasons:

1. **Corrected outcome calibration.** `01-09`'s structural intervention was a one-paragraph clarifying note + corpus-audit MUST item. The user-correction-equivalent (post-`10-50` correction) is MINIMAL. The diagnostic refinement should match — producing a structural spec-edit when the corrected-team produced a clarifying note is disproportionate.

2. **Accumulated parsimony preference.** Composed v3 is at 8 effective pieces. Adding more pieces from single-case evidence approaches the user's accumulated parsimony threshold (established by the prior three diagnostics' minimum-sufficient calibration discipline and explicit by Pair #8's Strategy C selection).

3. **Single-case evidence insufficient for stronger interventions.** Two stronger alternatives were considered and rejected by Sensemaking's ambiguity-collapse step. Strategy F (axis-clarifying refinement at cardinality / reading-commitment) requires single-case evidence to justify a new piece — violating the calibration discipline. Strategy G (promoting Pair #7's preserved ADD-MULTI-AXIS-REQUIREMENT frontier from RESEARCH FRONTIER to actionable) requires multi-case evidence; this case adds 1 cumulative data point but is not sufficient on its own (Pair #7 was itself 1 data point; Pair #12 is the second).

4. **Preserved-frontier mechanism explicitly designed for this case's shape.** Pair #7 preserved ADD-MULTI-AXIS-REQUIREMENT as RESEARCH FRONTIER deliberately to await cumulative-evidence-driven promotion. This case validates the preserved-frontier mechanism's operational design — it's a cumulative-evidence pipeline, exercised for the first time across diagnostics.

The four reasons converge structurally. Strategy E is calibrated, not avoidance.

### The four diagnostic contributions under Strategy E

This diagnostic produces four concrete contributions:

1. **Validation that composed v3's Q3 rule fires at P1 retroactively.** `10-50`'s P1 piece is the third independent meta-decision piece (after Pair #5's relationship-label piece and Pair #7's intervention-shape-commitment piece) where Q3 would fire. v3's Q3 has cumulative validation across 3+ types of meta-decision pieces. The validation is operational evidence that the rule generalizes.

2. **One cumulative data point to Pair #7's preserved ADD-MULTI-AXIS-REQUIREMENT research frontier.** Pair #7 (the second 2026-05-18 diagnostic) preserved this frontier with the explicit reasoning that single-case evidence was insufficient for promotion. This case is the SECOND cumulative case for that frontier: Pair #7 was the first evidence (intervention-shape axis); Pair #12 is the second evidence (cardinality / reading-commitment axis). A plausible threshold for promotion is 3+ cumulative cases with multi-axis-failure at meta-decision pieces. The threshold is heuristic, not rigid; the calibration is evidence-accumulation-driven, not count-based. One or two more cases would justify promotion.

3. **T1 edge-case-probe sub-type spec-vocabulary coverage confirmed.** Within the edge-case-probe sub-type of T1 (NOT the full T1 territory — other T1 sub-types remain unexamined), existing /innovate mechanism descriptions canonically cover edge-case probing. The gap-analysis's implicit treatment of T1 as covered is validated at the spec-vocabulary level for this sub-type. The diagnostic does not extend this claim to other T1 sub-types.

4. **New composition pattern named with explicit preconditions.** The prior three diagnostics established three composition patterns (standalone-set, integrated-extension, vertical-layering). This case introduces a fourth: "validation + cumulative-evidence contribution." Three preconditions must converge for this pattern to apply: (i) the case is partially caught by the existing refinement-set; (ii) the corrected outcome was structurally conservative; (iii) single-case evidence is insufficient for promoting any preserved research frontier. When all three converge, the pattern's output is no spec-edit candidates + validation of which existing rules fire + cumulative data point to relevant preserved frontiers + composition-pattern application. Future diagnostics in the series can use this pattern when these three preconditions converge.

### Honest cost acknowledgment

Strategy E preserves probabilistic catching at schema-commitment pieces (and other meta-decision pieces with non-intervention-shape load-bearing axes). Future schema-commitment pieces could miss the load-bearing axis if Innovation chooses a non-load-bearing axis for the Inversion-candidate. This is the cost of calibration parsimony.

The mitigation is the preserved-frontier mechanism — cumulative-evidence-driven promotion. 1-2 more cumulative cases at meta-decision pieces with multi-axis-failure would justify promoting Pair #7's preserved ADD-MULTI-AXIS-REQUIREMENT from RESEARCH FRONTIER to actionable. The promotion would systematically address the axis-direction gap across all meta-decision pieces.

### What this diagnostic does NOT do

This diagnostic does NOT:

- **Propose any changes to `/innovate` reference.** Both diagnostic-articulation pieces (Q1 structural characterization + Q2 forward-looking output) operate exclusively on the diagnostic finding's own text.

- **Promote the preserved research frontier.** Pair #7's preserved Q3.Inversion (ADD-MULTI-AXIS-REQUIREMENT) stays as RESEARCH FRONTIER. This case adds one cumulative data point but does not exceed the heuristic threshold (3+ cases) for promotion.

- **Diagnose other disciplines.** Sensemaking's role in framing the seed; Decomposition's piece-list shape; Critique's lack of adversarial-testing on alternative schema cardinalities at `10-50` — observable in evidence; out of scope per the user's hard constraint.

- **Generalize to the broader 19-pair dataset.** Other T1 sub-types (counter-examples, mechanism objections, dimensional corrections) and other T1 instances (Pairs #1, #2, #9, #10, #11) remain unexamined. The claim about T1 spec-vocabulary coverage is bounded to the edge-case-probe sub-type as applied to Pair #12.

- **Name a new failure mode.** Single-case evidence is insufficient for pattern-naming, per the established calibration discipline. The phenomenon (Innovation produces a confident schema commitment without probing the load-bearing axis at the schema-commitment piece) is observable in this case; multi-case evidence is required to elevate it to a named failure mode.

---

## Next Actions

### MUST

- **What:** Track the cumulative-evidence accumulation toward Pair #7's preserved ADD-MULTI-AXIS-REQUIREMENT research frontier. Each future diagnostic that encounters multi-axis-failure at meta-decision pieces should reference this finding and Pair #7's finding, incrementing the cumulative count.
  - **Who:** future diagnostic inquiries running `/MVL+` on T1, T2, or T4 cases from the 19-pair dataset.
  - **Gate:** observable — when a third cumulative case is documented, promotion of the preserved frontier becomes a candidate for the next `/MVL+` inquiry on `/innovate` redesign.
  - **Why:** the preserved-frontier mechanism's design is cumulative-evidence-driven. Without explicit tracking, the threshold is not visible to a future redesign inquiry.

### COULD

- **What:** Apply the "validation + cumulative-evidence contribution" composition pattern's three preconditions (case partially caught by existing refinement-set + corrected outcome structurally conservative + single-case evidence insufficient for preserved-frontier promotion) as a checklist when starting future LOOP_DIAGNOSE inquiries. If all three converge during exploration or sensemaking, the inquiry can plan toward Strategy E from early in the pipeline rather than discovering it at Sensemaking's ambiguity-collapse step.
  - **Who:** the user, when invoking `/MVL+` for future correction-chain diagnostics.
  - **Gate:** condition-bound — when starting a new LOOP_DIAGNOSE inquiry on a correction chain.
  - **Why:** accelerates calibration by surfacing the no-extension path explicitly. Saves discipline cycles when the path is appropriate.

- **What:** Audit the other 5 T1 instances in the 19-pair dataset (Pairs #1, #2, #9, #10, #11) to check whether other T1 sub-types also reveal application-level failures of in-spec mechanisms at meta-decision pieces.
  - **Who:** a separate analysis inquiry.
  - **Gate:** condition-bound — when the user wants to extend the T1 territory characterization beyond the edge-case-probe sub-type.
  - **Why:** establishes whether T1's spec-vocabulary coverage holds across all sub-types or only the edge-case-probe sub-type. May surface additional cumulative evidence for the preserved frontier.
  - **Depends-on:** MUST item "Track cumulative-evidence accumulation." OVERRIDE: COULD is adoption-ready independent of the MUST. Reason: the T1 audit can run on existing dataset without first committing to the cumulative-evidence-tracking process; its value (calibrating the T1 coverage claim's scope) does not require the tracking to have happened.

### MONITORING (deferred-style; not requiring action, just observation)

- **What:** Observe whether the Layer-3 seed-time methodology-mode override pattern (override-with-reason when sensemaking's calibration adjudication is upstream) becomes formulaic across future diagnostics. The pattern has now appeared in two consecutive diagnostics (Pair #8 and Pair #12) with similar structural reasons (upstream-discipline boundary + calibration cost). If the pattern continues for 3+ future diagnostics with rote application (specific reasons converging on the same template), the override mechanism's intentional-friction purpose may be eroding.
  - **Gate:** observable — after 3+ future diagnostics' Layer-3 self-applications.
  - **Why (if triggered):** the override's intentional friction is part of its operational design. Formulaicness defeats friction. A future spec-edit inquiry might need to strengthen the override compliance criterion.

---

## Reasoning

### Why Strategy E over Strategy F or Strategy G

Sensemaking's ambiguity-collapse step (Ambiguity 5) explicitly considered three calibration strategies and committed Strategy E:

- **Strategy E (no extension):** composed v3 stays at 8 pieces; diagnostic output is validation + cumulative-evidence contribution + composition-pattern naming. Cost: probabilistic catching at meta-decision pieces with multi-axis load.

- **Strategy F (axis-clarifying refinement):** add a refinement at v3 specifying cardinality axis OR reading-commitment axis at schema-commitment pieces. v3 becomes 9 pieces. Cost: over-elaboration from single-case evidence; violates parsimony threshold.

- **Strategy G (multi-axis frontier promotion):** promote Pair #7's preserved Q3.Inversion (ADD-MULTI-AXIS-REQUIREMENT) from RESEARCH FRONTIER to actionable. v3's Q3-extension becomes multi-axis. Cost: violates the calibration discipline (single-case evidence insufficient for promotion; Pair #7 explicitly preserved the frontier for cumulative-evidence accumulation).

The four converging structural reasons (corrected outcome's calibration; accumulated parsimony; single-case evidence insufficiency; preserved-frontier mechanism design) all favor Strategy E. Critique's prosecution on the self-protective-avoidance axis tested Strategy E rigorously; defense survived on substance (4 concrete contributions + calibration-discipline grounding + corrected-outcome shape matching + preserved-frontier mechanism operational design).

### Why this case refines the prior gap-analysis's claim about T1 coverage at the sub-type level

The earlier 19-pair gap-analysis stated T1 is implicitly covered by existing /innovate mechanisms (it named Gap-1 T2 and Gap-2 T4 as the structural gaps; T1 was not named). This Pair #12 case tests that claim within the edge-case-probe sub-type and validates it at the spec-vocabulary level: existing mechanism descriptions canonically include edge-case probing language. Operational confirmation comes from `01-09`'s Innovation, which generated 4+ multi-value alternatives using existing mechanism vocabulary by name.

The validation is scope-bounded. T1 has multiple sub-types (counter-examples, mechanism objections, edge-case probes, dimensional corrections, pattern-naming, mechanism-level correction); this case examines only the edge-case-probe sub-type. Other T1 sub-types are preserved as research frontier (the COULD action in Next Actions).

### Why the failure is at the discipline-application level, not at the spec level

The structural argument: at `10-50`'s P1, all three of /innovate's existing Framers (Lens Shifting, Constraint Manipulation, Inversion) were within-spec affordances. Constraint Manipulation could have removed the single-value constraint to surface the multi-value space. Inversion could have asked "what if `type:` is multi-valued?" — the canonical Inversion question applied to the cardinality assumption. Absence Recognition could have surfaced edge cases breaking the closed-enum commitment.

None were applied. The mechanism log at P1 records Combination only.

The spec-level question — "does /innovate's spec direct mechanisms to the load-bearing axis at schema-commitment pieces?" — has a structural answer: no, composed v3's Q3 is axis-agnostic at piece level; Pair #7's preserved Q3.Inversion (multi-axis requirement) is the open structural question, preserved for cumulative-evidence-driven promotion.

The application-level question — "did Innovation in `10-50` exercise its in-spec latitude to apply a Framer to the cardinality axis?" — has the observable answer: no. The within-spec affordance was unused.

The two layers converge: the spec's axis-direction silence + Innovation's non-exercise of within-spec latitude = the case observed. Strategy E addresses neither at the spec-level (because single-case evidence is insufficient and the preserved-frontier mechanism is the structurally correct path), but documents both at the application-level.

### Contradictions reconciled across the loop

Exploration's central finding was that P1 had Combination only; no Framer. Sensemaking initially framed this as a Pair #5-pattern (Inversion absent at meta-decision piece). Ambiguity-collapse refined: the case is structurally distinct from Pair #5 because the load-bearing axis at P1 is cardinality / reading-commitment (Sensemaking's Ambiguity 4), not Pair #5's relationship-label content axis. The case is therefore closer to Pair #7's axis-misalignment pattern but at a different axis (cardinality, not intervention-shape). Pair #7's preserved Q3.Inversion (ADD-MULTI-AXIS-REQUIREMENT) explicitly addresses this case's structural shape; this case is its second cumulative evidence.

Decomposition surfaced a potential tension: Innovation typically produces piece-level Inversion-candidates for new spec-edit pieces; under Strategy E, there are no new pieces, so the recursive self-application is trivially satisfied. Decomposition resolved this by treating Q1 and Q2 as documentation pieces (not spec-edit pieces); the recursive self-application requirement at piece-level applies only to spec-edit pieces; the seed-level §9 rule still fires (Innovation's Layer-3 override recorded).

Critique surfaced a potential self-protective-avoidance concern: Strategy E produces no new spec-edit candidates and could be smoke-screen. Defense survived on substance via 4 concrete contributions + structural grounding in the calibration discipline. The defense was not "the case is fine" but "the case adds cumulative evidence to a preserved frontier and validates v3's coverage" — substantive forward-looking outputs.

### Self-reference acknowledgment

This entire diagnostic uses the same cognitive harness whose discipline (`/innovate`) it analyzes. The Critique step explicitly tested Strategy E for self-protective avoidance — the self-reference-collapse failure mode applied to the verdict's own justification. The defense was structurally grounded: 4 concrete contributions + calibration discipline + corrected-outcome shape + preserved-frontier mechanism design. External grounding came from `01-09`'s independent verdict (schema-conservative); the prior three 2026-05-18 diagnostics' independent evidence bases; /innovate reference's canonical mechanism descriptions.

The Layer-3 override at seed time (Innovation's §9 application to this run's own seed) recorded an override with structural reason citing Sensemaking's Ambiguity 5 adjudication of Strategies A-E. This is the second consecutive diagnostic to record such an override (Pair #8 was the first; Pair #12 is the second). The MONITORING action in Next Actions tracks future formulaicness; the pattern is currently legitimate but worth observing.

---

## Open Questions

### Monitoring

- **Cumulative-evidence accumulation toward preserved frontier promotion.** Track via the MUST action. Threshold heuristic: 3+ cumulative cases with multi-axis-failure at meta-decision pieces; current count is 2 (Pair #7 + Pair #12).

- **Layer-3 seed-time methodology-mode override pattern formulaicness.** Observable after 3+ future diagnostics' Layer-3 self-applications. If the structural reasons converge on the same template, the override's intentional friction may be eroding.

- **`01-09`'s corpus audit MUST item outcome.** Within two weeks of `01-09`'s publication, the audit may produce evidence that the multi-value schema (`types: [primary, secondary]`) is the right answer after all. If so, `01-09`'s verdict re-opens; this diagnostic's Strategy E foundation would not change (Strategy E's foundation is calibration discipline + current evidence state), but the cumulative-evidence accumulation toward the preserved frontier could be re-weighed if the audit changes the case's structural shape.

### Blocked

- **Promotion of Pair #7's preserved ADD-MULTI-AXIS-REQUIREMENT frontier.** Blocked on cumulative-evidence accumulation reaching the heuristic threshold (plausibly 3+ cases). Pair #7 + Pair #12 + 1-2 more cases at meta-decision pieces with multi-axis-failure would justify promotion.

### Research Frontiers

- **Other T1 sub-types' coverage by existing /innovate mechanisms.** Counter-examples, mechanism objections, dimensional corrections, pattern-naming, mechanism-level correction sub-types are unexamined. The COULD action in Next Actions surfaces this audit as a separate inquiry.

- **Does the four-condition convergence (partially caught by existing set + corrected outcome conservative + single-case evidence insufficient + Strategy E composition-pattern preconditions all met) recur as a recognizable pattern across future LOOP_DIAGNOSE inquiries?** The composition pattern is named with explicit preconditions; whether the preconditions converge often enough to make the pattern useful is empirically open.

- **Does the META-cardinality (reading-commitment) axis at schema-commitment pieces generalize as a load-bearing axis distinct from cardinality / intervention-shape / methodology-mode?** This case observed reading-commitment at one schema-commitment piece. Whether other schema-defining findings have similar implicit reading-commitments requiring explicitness is preserved by `01-09`'s corpus-audit MUST and by `01-09`'s COULD action ("Add an Anti-Ambiguity Discipline note ... Schema-defining findings must explicitly state which reading their schema fields use").

### Refinement Triggers

- **If 3+ cumulative cases with multi-axis-failure at meta-decision pieces accumulate:** Pair #7's preserved Q3.Inversion (ADD-MULTI-AXIS-REQUIREMENT) becomes promotable to actionable. A future `/MVL+` inquiry on `/innovate` redesign should fold the promoted rule into composed v3.

- **If the Layer-3 override pattern continues for 3+ future diagnostics with structural reasons that rote-template-converge:** the override's intentional-friction purpose may be eroding. A future spec-edit inquiry should strengthen the override compliance criterion (e.g., require explicit non-template reasoning per case).

- **If `01-09`'s corpus audit finds hybrid-body findings:** `01-09`'s verdict re-opens; the deferred list-valued schema becomes the right answer. This Pair #12 diagnostic's Strategy E foundation does NOT change automatically, but the audit's outcome would be folded into the cumulative-evidence picture for the preserved frontier.

- **If a future T1 sub-type audit (per the COULD action) surfaces application-level failures across multiple T1 sub-types:** the cumulative evidence for preserved-frontier promotion may accelerate; the broader claim "T1 coverage at the spec-vocabulary level + application-level failures across multiple sub-types" would emerge as a documented pattern.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
use cognitive_harness/protocols/loop_diagnose.md

one innovation fix pair is           

`2026-05-16_10-50__finding_md_format_redesign` → `2026-05-17_01-09__finding_type_field_multi_value_consideration`

 i want you to analyse exactly what when wrong with innovation that it missed this.  but make sure only focus on what innovation should  
  do, and not job of other disciplines, this will be used to improve innovation later on but this is not our scope now.
```

</details>
