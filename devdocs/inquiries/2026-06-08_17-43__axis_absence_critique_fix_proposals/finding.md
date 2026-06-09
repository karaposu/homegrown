---
status: active
model: claude-opus-4-7[1m]
effort: max
---

# Finding: Axis Absence at the Failure's Actual Plane — Underlying Mechanism and Three Structurally-Distinct Fix Proposals for `/td-critique`

## Question

From `_branch.md`:

We have a discipline called `/td-critique` (Structural Critique — its spec lives at `cognitive_harness/td-critique/references/td-critique.md`) whose role is to evaluate candidate ideas, plans, or designs by constructing evaluation dimensions, building a fitness landscape, conducting adversarial testing, and rendering verdicts (SURVIVE / REFINE / KILL). In an earlier 100-inquiry analysis (`devdocs/100_critique_correction_chain_analysis.md`) we found that ~48% of recent inquiries showed correction chains — later inquiries materially correcting earlier ones. From that, a top-7 list of common critique failures was distilled (`devdocs/top_7_common_critique_failures.md`), and one of those failures — number 2 — is **"Axis Absence at the Failure's Actual Plane"** with 9 corpus instances.

**The question.** What is the underlying mechanism of this Axis Absence failure (and how is it distinct from the existing "Wrong Dimensions" and "Dimension Blindness" failure modes already named in the td-critique spec), and what are at least 3 structurally-distinct solution proposals — surgical, additional, significant — for amending `td-critique.md` to address it, each with honest plus/minus trade-off analysis?

**Goal.** Actionable spec-edit proposals, grounded against the 9 corpus instances, with honestly different scope variance (not three flavors of the same edit), trade-off-honest plus/minus per proposal, and a clear understanding of the mechanism so the user can pick which proposal(s) to implement.

## Finding Summary

- **Axis Absence is a *construction-stage* failure, structurally distinct from the existing detection-stage failures.** The two existing failure modes in the td-critique spec — "Wrong Dimensions" (the dimensions don't match the actual problem) and "Dimension Blindness" (a critical dimension is missing) — both assume the dimension space already spans the failure space and ask whether selection or matching went wrong. Axis Absence is a deeper failure: the dimension space's *construction* itself produces a gap, so the right axis was never in the candidate set to be selected or matched against in the first place.

- **The precise relationship to Dimension Blindness is "precondition-violation."** Dimension Blindness's existing preventive mechanism (described in the spec as "cross-reference dimensions against the sensemaking perspectives") *presupposes* that sensemaking actually covered the territory at the relevant axis. When sensemaking under-covered — and the 9 corpus instances show this happens — the cross-reference runs successfully against an under-covered perspective set and silently misses the gap. Axis Absence is the named failure that fires when this presupposition silently fails.

- **Three distinct sub-mechanisms produce Axis Absence**, with distinct loci but one shared symptom (the failure axis missing from the dimension space).
  - *(i) Upstream-inheritance* — sensemaking or surfacing under-covered an axis; critique inherited the gap because its dimension list is derived from those upstream outputs.
  - *(ii) Narrowest-reading* — a project-canonical principle (e.g., "self-containment") was applied at its narrowest local interpretation; the failure rode on the principle's broader scope.
  - *(iii) Self-defeating-wording* — a specific dimension's check wording forces *performing* the property it's meant to *test for* (e.g., a Coherence check requiring naming neighbors when the property under test is non-overlap with neighbors).

- **Three structurally-distinct fix proposals are delivered, one at each scope tier.** The tier definitions are anchored in existing codebase precedents (not invented for this inquiry), and they describe different *edit shapes*, not different sizes of the same edit shape.
  - **Tier 1 — Surgical:** add a refinement-note pattern at Phase 0 of `td-critique.md` (the "Axis-completeness probe" — three concrete sub-checks).
  - **Tier 2 — Additional:** add a new failure-mode entry to §4 of `td-critique.md` ("Axis Absence" with sub-recognitions matching the three sub-mechanisms + cross-reference to the Tier 1 probe).
  - **Tier 3 — Significant:** restructure §4 of `td-critique.md` into a hook-table pattern mirroring sensemaking's existing Meta-Inspection section, under a single generative meta-question, with Axis Absence as one of the hooks.

- **Each proposal addresses the 3 sub-mechanisms at different strengths, costs, and future-extensibility profiles.** A comparison table along five trade-off axes (prevention leverage / cost / sub-mechanism coverage / future-extensibility / nitpicking-creep risk) plus a per-scenario picker is provided so the user can pick by context rather than by single-default.

- **The three proposals are composable, not just alternatives.** Cross-references between them are explicit: the Tier 1 probe's existence is cross-referenced inside the Tier 2 entry's prevention field; the Tier 1 probe is also referenced from inside Tier 3's HC5 hook calibration. So adopting Tier 1 + Tier 2 together is a natural composition (prevention mechanism + naming vocabulary); Tier 1 + Tier 3 is coherent (the probe lives at Phase 0 and is invoked from the hook table); but Tier 2 + Tier 3 is mostly redundant (the hook table absorbs the named entry's purpose).

- **The word "tier" in this finding refers to STRUCTURAL EDIT SHAPES, not a value-hierarchy.** "Tier 1 / 2 / 3" describes the cost-leverage navigation axis (surgical lighter / significant heavier), not a ranking of proposal merit. Each tier addresses the same structural failure (Axis Absence) at a different structural edit scope. This clarification was added during critique to prevent misreading the "tier-ladder" as a ranking.

- **A deferred alternative is preserved with an explicit revival trigger.** For teams that prefer minimum vocabulary growth, an alternative form of the Tier 2 proposal — "REPAIR" the existing Dimension Blindness entry's text instead of adding a new failure-mode entry — was generated and survives the 5-test cycle but is held in DEFERRED status. The revival trigger is documented.

## Finding

### Why this inquiry exists, briefly

The `/td-critique` discipline at `cognitive_harness/td-critique/references/td-critique.md` is one of the cognitive-loop disciplines in the homegrown thinking-discipline system at `/Users/ns/Desktop/projects/native`. Its job is to take candidate ideas (from `/innovate`) and evaluate them by constructing evaluation dimensions, building a fitness landscape, running adversarial testing (prosecution + defense + collision), and rendering verdicts. Earlier work this session produced two artifacts that motivated this inquiry:

1. **`devdocs/100_critique_correction_chain_analysis.md`** — an analysis of the last 100 inquiries in `devdocs/inquiries/` showing that ~48% (37 STRONG + 11 MEDIUM) carry correction-chain signal: a later inquiry materially corrected an earlier one. Each correction chain is empirical evidence that the prior inquiry's critique passed something that turned out to be wrong.

2. **`devdocs/top_7_common_critique_failures.md`** — the seven most common failure types distilled from the corrections corpus. Failure type #2, **"Axis Absence at the Failure's Actual Plane"**, was identified as an extension of the existing critique-spec failure modes "Wrong Dimensions" and "Dimension Blindness" with a deeper construction-problem subtype.

This inquiry takes that #2 failure type as the focus and asks two questions: what is its underlying mechanism (precisely, beyond "extension of #1/#4"), and what would concrete spec-edit proposals look like at meaningfully different scopes? The answer is structured so the user can choose to implement one proposal, or compose multiple, based on context.

The inquiry's `_branch.md` declared Layer Commitment STRUCTURAL primary (proposals are spec edits) with meaning-layer work foundational (understanding the mechanism). Process-layer design — the runtime detail of when and how each new check fires during actual `/td-critique` invocations — is explicitly deferred to a follow-up inquiry that runs after one of the three proposals is selected.

### 1. The underlying mechanism — Axis Absence is a construction-stage failure

The two existing critique-spec failure modes most adjacent to Axis Absence are:

- **#1 Wrong Dimensions** (per `td-critique.md` §4.1): the evaluation dimensions don't match the actual problem; critique runs rigorously against criteria that don't matter; the preventive mechanism is Phase 0 dimension validation against sensemaking.
- **#4 Dimension Blindness** (per `td-critique.md` §4.4): a critical dimension is missing entirely; critique evaluates thoroughly on the dimensions it has but a category of risk is invisible; the preventive mechanism is to cross-reference dimensions against the sensemaking perspectives.

Both are framed as *detection* problems. They assume the dimension space *can* span the failure space, and ask whether picking went wrong (Wrong Dimensions) or whether a critical axis got missed during selection (Dimension Blindness).

Axis Absence is a *construction* problem. It asks whether the dimension space itself spans the failure space — whether the *process that produces dimensions* can produce a dimension list that's missing the axis on which the actual failure rides. The 9 corpus instances all show this happening: the relevant axis was reachable from inside the inquiry (in sensemaking's anchors, or in a project-canonical principle, or visible in the dimension's own wording on careful re-read), but the dimension construction process didn't produce a dimension for it.

The structurally precise relationship to Dimension Blindness is **precondition-violation**. Dimension Blindness's preventive mechanism — cross-reference against sensemaking perspectives — *presupposes* that sensemaking covered the territory at the axis where the failure would ride. When sensemaking itself under-covered, the cross-reference produces a successful match against the under-covered perspective set; the prevention runs without firing; the dimension list looks fine. Axis Absence is the failure that fires when this presupposition silently fails. Calling it a "subtype" of Dimension Blindness would absorb it into a failure mode whose preventive mechanism it specifically defeats; calling it a precondition-violation names the structural relationship correctly.

### 2. The three sub-mechanisms, with corpus instances

Axis Absence shows up via three distinct sub-mechanisms with distinct loci. They share one symptom (the failure axis is missing from the dimension space) and one tendency (the dimension space was constructed without explicit testing for whether it spans the failure space). But the *where* each fires is different, which matters for the fix design.

**Sub-mechanism (i) — Upstream-inheritance** (locus: upstream pipeline). Surfacing or sensemaking under-covered an axis. Critique inherited the under-coverage as the dimension space because critique's dimensions are derived from upstream outputs. The failure rides on the axis that was never surfaced upstream.

*Corpus example.* The pair at `devdocs/inquiries/2026-05-28_19-00__routeman_project_root_operation_meaning/` was later corrected by `devdocs/inquiries/2026-05-28_20-35__routeman_identity_standalone_discipline_redo/`. The corrected critique evaluated the verdict's spec-grounding rigor entirely within routeman's own spec text and never cross-checked against the project-wide canon doc (canon line 109: "Each discipline is standalone and domain-agnostic"). The canon line existed and was reachable from inside the inquiry, but it was never surfaced upstream as a critique-relevant axis, so the dimension list inherited the gap.

**Sub-mechanism (ii) — Narrowest-reading** (locus: stage-local choice inside critique). A project-canonical principle (e.g., "self-containment," "asymmetric-failure," "Layer Commitment") was applied at its narrowest local interpretation rather than its broadest sensible reading. The failure rode on the principle's broader scope, but the dimension only tested its narrowest scope.

*Corpus example.* The pair at `devdocs/inquiries/2026-06-01_01-37__inquiry_elaboration_structural_design/` was later corrected by `devdocs/inquiries/2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare/`. Critique declared "self-containment" CRITICAL but applied the project memory at its narrowest reading ("no outbound pointers; vocabulary self-defined?") rather than as "no neighbor-naming in load-bearing positions." A scan-every-sentence-for-neighbor-names test would have caught it; the corrector explicitly noted "the flaw was bigger" than the user-pointed phrase.

**Sub-mechanism (iii) — Self-defeating-wording** (locus: intrinsic to the dimension itself). A specific dimension's check wording forces *performing* the property it's meant to *test for*. Reading the dimension produces the violation; running the test produces the violation; the dimension's check is structurally compromised by its own wording.

*Corpus example.* The chain corrected by `devdocs/inquiries/2026-06-01_11-46__loop_diagnose__inquiry_elaboration_self_containment_failure_chain/` documents this directly. The Coherence dimension in critique was worded as "non-overlap with neighbor's territory." Testing "non-overlap with neighbor" requires *naming* the neighbor — but naming the neighbor *is* the very violation the dimension was supposed to catch (in this inquiry, neighbor-naming was the self-containment violation under prosecution). The dimension's check performed the violation while testing it. The loop_diagnose finding explicitly names this as a "self-defeating dimension."

The three sub-mechanisms are not one mechanism with three manifestations — their loci are genuinely distinct (upstream pipeline / stage-local choice / intrinsic to dimension). But they share the symptom and the underlying tendency. A fix can target the symptom (one mechanism for all three) or target per-sub-mechanism. The three proposals below differ on this design choice.

### 3. Three structurally-distinct edit tiers, anchored in codebase precedent

Before describing the proposals themselves, it's worth being explicit about what "structurally distinct" means here. The three tiers are not three sizes of the same edit; they are three *edit shapes*, each with a named precedent in the existing codebase. Identifying which tier a proposal sits at is a structural classification, not a magnitude classification.

**Tier 1 — Surgical = refinement-note pattern.** An italicized in-section addition to an existing phase of `td-critique.md`, with a trigger condition (when the note applies) and a body (what to do when triggered). The organizing pattern of the spec is not changed; the section gets a new sub-content block. Existing codebase precedents (both in `td-critique.md` itself): the Phase 0 "Project-specific risk dimension check" refinement note; the Phase 2 "Multi-axis prosecution depth check" refinement note (which has 3 sub-axes, structurally analogous to the 3 sub-checks in the surgical proposal below).

**Tier 2 — Additional = new failure-mode entry at §4.** A new numbered top-level row in `td-critique.md` §4's failure-modes table, with the standard Recognition + Prevention fields. The organizing pattern of §4 (numbered linear list of failure modes) is preserved; a new row is added. Existing codebase precedent: surfacing's failure modes 8 and 9 (Recency-Equates-Idleness and Recency-Bias-Filter), which were added to `cognitive_harness/surfacing/references/surfacing.md` §4.2 as new numbered rows following the same pattern as the original seven.

**Tier 3 — Significant = restructure the organizing principle.** Replace `td-critique.md` §4's linear-numbered failure-modes list with a hook-table pattern under a single generative meta-question, allowing future failure modes to be added as sub-aspects of existing hooks (sub-linear growth) rather than as new numbered entries (linear growth). Existing codebase precedent: sensemaking's Meta-Inspection section in `cognitive_harness/sense-making/references/sensemaking.md`, which uses the meta-question "What am I treating as FIXED that might not be?" with 9 hooks (H1-H9), where each hook has its own sub-aspects in its calibration column.

These three are structurally distinct: a Tier 1 edit doesn't touch the organizing pattern; a Tier 2 edit follows the existing organizing pattern with a new row; a Tier 3 edit replaces the organizing pattern. They're not points on a continuum.

### 4. Tier 1 — SURGICAL proposal: Phase 0 Axis-completeness probe

**What to add.** A refinement-note in `td-critique.md` Phase 0 (Dimension Construction), placed AFTER the existing "Project-specific risk dimension check" refinement note so the two surgical edits compose without re-flowing the section.

**Drafted text** (with the wording refinement from critique applied to sub-check (a)):

> *Refinement note (applies at Phase 0 Dimension Construction):*
>
> **Axis-completeness probe.** When the candidate set will be evaluated against dimensions derived from upstream sensemaking output, the dimension list must additionally pass a three-part axis-completeness check before Phase 1 begins. The probe targets the construction-stage failure described in Failure Mode #8 (Axis Absence at the Failure's Actual Plane) and operates by interrogating the dimension space's coverage of the failure space, NOT the dimensions' content fit to known candidates.
>
> **Sub-check (a) — Upstream-coverage trace.** For each load-bearing failure-mode the candidate set could exhibit (as identified in the inquiry's sensemaking constraints + key insights + risk surfaces), trace whether the axis on which the failure would ride was surfaced in upstream sensemaking — as a perspective, an anchor, a constraint, or a meaning-node. If the axis is reachable from sensemaking's output but not represented in the dimension list, the dimension list inherited the upstream gap. Add the dimension, or document the deliberate exclusion.
>
> **Sub-check (b) — Broadest-reading verification.** For each dimension that applies a project-canonical principle (e.g., self-containment, asymmetric-failure, Layer Commitment), state both the narrowest reading (the specific local interpretation) and the broadest sensible reading (the principle's full scope). When the broadest reading is structurally supported by other project commitments, adopt the broadest reading. Narrowest-reading dimensions miss failures that ride on the broader scope.
>
> **Sub-check (c) — Self-defeating-wording check.** For each dimension's wording, re-read for whether the dimension's check requires PERFORMING the property it's testing for. A dimension whose check forces the violation it's meant to catch fails this sub-check. Rewrite the wording to test the property WITHOUT performing it.
>
> Failing to run all three sub-checks at Phase 0 when the dimension space could exhibit construction-stage blind spots is an instance of Failure Mode #8 (Axis Absence at the Failure's Actual Plane). For project-canon-derived dimensions (e.g., canon-line references), sub-check (a) also verifies the canon reference was surfaced in upstream sensemaking before the dimension space was constructed.

**Sub-mechanism coverage.** Sub-check (a) addresses upstream-inheritance (i) at STRONG strength; sub-check (b) addresses narrowest-reading (ii) at STRONG strength; sub-check (c) addresses self-defeating-wording (iii) at MEDIUM-STRONG strength.

**Retroactive corpus test.** Of the 9 Axis Absence pairs in `devdocs/100_critique_correction_chain_analysis.md`, this probe would have caught: the chain corrected by `2026-06-01_11-46` (self-defeating Coherence) via sub-check (c); `01-37 → 09-54` (self-containment narrowest-reading) via sub-check (b); `19-00 → 20-35` (canon line 109 not consulted) via sub-check (a); `14-39 → 16-31` (operational-architecture anchor missing) via sub-check (a) if user's endgame had been an upstream anchor; `08-14 → 09-07` (self-containment-as-no-outbound-pointers missing) via sub-check (b). 6 of 9 STRONG catch; the remaining 3 (downstream-consumer-sufficiency, cross-section runtime compliance, spec-completeness vs user mental models) are not directly catchable by the probe and would need other interventions.

**Plus / minus.**

- **Plus — leverage at low cost.** The edit lives at the critique pipeline's earliest stage (Phase 0), so the probe acts as prevention before evaluation begins; the failures it traps are caught before any candidate adjudication happens. Spec cost is approximately 30 lines of added text; no changes to `SKILL.md`; no changes to the spec's organizing pattern.
- **Plus — codebase-template-aligned.** The 3-sub-check structure mirrors the existing Phase 2 "Multi-axis prosecution depth check" refinement note (which has 3 sub-axes: user-perspective objection / specific failure-case scenario / specification-gap probe). The pattern is already in this codebase.
- **Minus — weak on sub-mechanism (iii).** The self-defeating-wording sub-check requires the practitioner to read each dimension's wording for self-reference. It's mechanical (verifiable case-by-case) but depends on careful re-reading; a tired or rushed practitioner could plausibly miss it again. The MEDIUM-STRONG rating reflects this.
- **Minus — friction at quick-inquiry scale.** Running three sub-checks per inquiry adds ~5 minutes of practitioner thought. For quick exploratory inquiries with low-stakes candidates, this friction can feel disproportionate. Mitigation exists via the trigger condition (the probe fires only when sensemaking is the dimension source) and via td-critique's existing low-stakes "Burden of proof" lever (`td-critique.md` §Adversarial Structure).
- **Minus — no diagnostic vocabulary.** Adopting this proposal alone doesn't give the team a named category for retroactively labeling corpus pairs as "Axis Absence instances." Labeling becomes longhand. (This is what the Tier 2 proposal provides.)

### 5. Tier 2 — ADDITIONAL proposal: §4 new failure-mode entry #8 "Axis Absence"

**What to add.** A new failure-mode entry in `td-critique.md` §4 Failure Modes, numbered #8, appended at end. SKILL.md's description list is updated to include "axis absence" in the failure-modes enumeration.

**Drafted entry text.**

> ### 8. Axis Absence at the Failure's Actual Plane
>
> A construction-stage failure: the dimension space's CONSTRUCTION fails to span the failure space. The right axis for the actual failure was reachable from inside the inquiry but was not in the dimension list. Distinct from Failure Mode #4 Dimension Blindness — Axis Absence fires when #4's preventive mechanism's precondition (sensemaking covered the territory at the relevant axis) silently fails.
>
> **Sub-recognitions (three distinct sub-mechanisms with one shared symptom):**
>
> - **(i) Upstream-inheritance** — surfacing/sensemaking under-covered the relevant axis; critique inherited the gap as the dimension space.
> - **(ii) Narrowest-reading** — a project-canonical principle was applied at its narrowest scope; the failure rode on the broader scope.
> - **(iii) Self-defeating-wording** — a dimension's check wording forces performing the property it's meant to test for; the dimension performs the violation while testing it.
>
> **How to recognize.** Post-hoc, a later inquiry produces a `corrects:` or `refines:` finding showing the prior critique passed without testing on the axis where the failure actually rode. The harm evidence is in the prior critique's own artifact (or in a project-internal source the prior could have consulted). The cluster property is **missed-not-didn't-know** — the right axis was reachable; it just wasn't constructed into the dimension space.
>
> **How to prevent.** Run the Phase 0 "Axis-completeness probe" refinement note at dimension construction time (cross-reference: see Phase 0 Dimension Construction's Axis-completeness probe refinement note). The probe's three sub-checks address the three sub-mechanisms respectively. For project-canon-derived dimensions, the probe additionally verifies the canon reference was surfaced in sensemaking before the dimension space was constructed.
>
> **Relationship to other modes.** Axis Absence fires when Dimension Blindness's preventive mechanism ("cross-reference dimensions against sensemaking perspectives") silently fails because the precondition (sensemaking covered the territory at the relevant axis) was not verified. The two modes are vocabulary-distinct but mechanically related at the precondition layer.

**Sub-mechanism coverage.** All three via the Recognition field's sub-recognitions (i)/(ii)/(iii). Strength is STRONG for naming; for prevention, the entry's "How to prevent" field cross-references Tier 1's probe.

**Retroactive corpus test.** All 9 corpus instances trigger the Recognition field's sub-recognitions; 9 of 9 catchable AS NAMED CATEGORIES. Prevention requires Tier 1's probe to actually catch them at construction time; this entry provides the vocabulary + cross-reference.

**Plus / minus.**

- **Plus — diagnostic vocabulary.** The named category lets the team label corpus pairs cleanly. Instead of "this is the case where the dimension list didn't span the failure space because of how the dimension's wording forced the violation it was meant to catch," the team can say "this is an Axis Absence instance, sub-mechanism (iii)." Naming has communication power.
- **Plus — preserves the linear failure-modes structure.** The codebase precedent (surfacing's failure modes 8 + 9) shows this exact pattern. No new structural form is invented.
- **Plus — bounded scope.** The new entry's Recognition + Prevention fields constrain when it fires; the entry doesn't introduce a new dimension probe that runs everywhere. Nitpicking-creep risk is low.
- **Minus — cross-mode dependency.** The entry explicitly states it fires when #4's prevention silently fails. This makes Axis Absence structurally dependent on #4. If #4 is later restructured under the Tier 3 proposal, the precondition-violation relationship migrates into HC5's calibration column (the structural relationship is preserved), but the mode-vs-hook framing changes.
- **Minus — vocabulary alone, prevention requires Tier 1.** Adopting this proposal alone doesn't catch new Axis Absence cases at construction time; it provides the naming + cross-references the (non-existent) Tier 1 probe. Adopted alone, it's vocabulary without prevention; in practice, Tier 1 + Tier 2 are a natural composition.
- **Minus — linear-growth concern (mild at current scale).** Adding entry #8 grows §4 by ~40 lines and adds one item to the SKILL.md description list. Each future failure type adds similar; spec stays readable through ~12 modes but becomes unwieldy beyond. (This is the future-extensibility argument for Tier 3.)

### 6. Tier 3 — SIGNIFICANT proposal: restructure §4 into a hook-table pattern

**What to add / change.** Replace `td-critique.md` §4's linear-numbered failure-modes list with a hook-table pattern mirroring sensemaking's existing Meta-Inspection section structure. Add a generative meta-question at the section head. Map the existing seven modes onto hooks. Add Axis Absence as one new hook (HC5). Update SKILL.md description to reflect the new structure. Update td-critique.md's §6 Summary table's "Failure modes" row.

**Generative meta-question** (the structural anchor for the section): **"Does the dimension space SPAN the failure space?"**

**Hooks table (initial set).**

| Hook | Inspection point | Calibration / Corrective |
|---|---|---|
| **HC1 — Dimensions vs problem** | Whether the extracted dimensions match the actual problem | Wrong Dimensions (existing) — corrective at Phase 0 Dimension Construction's validate sub-step |
| **HC2 — Prosecution strength** | Whether adversarial testing's prosecution actually challenges | Rubber-Stamping (existing) — corrective at Phase 2 Adversarial Evaluation |
| **HC3 — Defense strength** | Whether adversarial testing's defense is sufficient | Nitpicking (existing) — corrective at Phase 2 |
| **HC4 — Dimension-space completeness** | Whether a critical dimension is missing from the dimension space | Dimension Blindness (existing) — corrective via cross-reference against sensemaking perspectives |
| **HC5 — Dimension-space construction** | Whether the dimension space's CONSTRUCTION inherited blind spots from upstream — sub-aspects: (i) upstream-inheritance; (ii) narrowest-reading; (iii) self-defeating-wording | Axis Absence at the Failure's Actual Plane (NEW) — corrective at Phase 0 Dimension Construction's Axis-completeness probe refinement note. **Precondition-violation of HC4:** fires when HC4's prevention silently fails because sensemaking itself under-covered. |
| **HC6 — Convergence detection** | Whether termination is declared correctly | False Convergence (existing) — corrective at Phase 4 Coverage + Convergence Assessment |
| **HC7 — Cross-iteration consistency** | Whether dimensions or weights shift silently between iterations | Evaluation Drift (existing) — corrective via accumulator state |
| **HC8 — Self-reference** | Whether evaluating critique itself produces circular validation | Self-Reference Collapse (existing) — corrective via external reference grounding |

**Hook-list extensibility rule** (mirroring sensemaking's Meta-Inspection pattern): when a new failure mode is observed at the ≥3-instance threshold, apply the meta-question: does an existing hook capture it? If YES — add as a sub-aspect of the existing hook in the calibration column. If NO — add a new hook with one-line description. Spec growth becomes SUB-LINEAR (~5-10 lines per new failure mode instead of ~30 lines).

**Sub-mechanism coverage.** All three sub-mechanisms via HC5's sub-aspects (i)/(ii)/(iii). Strength is STRONG for naming and STRONG for prevention via the HC5 calibration's cross-reference to the Phase 0 Axis-completeness probe (the same probe described in the Tier 1 proposal).

**Retroactive corpus test.** All 9 corpus instances trigger via HC5 sub-aspects + Phase 0 probe coverage; same retroactive coverage as the Tier 2 entry's Recognition field, with the same prevention dependency on the Tier 1 probe.

**Plus / minus.**

- **Plus (the strategic one) — sub-linear future-extensibility.** Future failure-mode additions cost ~5-10 lines (a hook entry or sub-aspect) instead of ~30 lines (a full failure-mode section). Across 5+ future additions the saving is ~100+ lines of spec growth. Sensemaking's Meta-Inspection rewrite explicitly cites this same trade-off as accepted in its Step 5 conformance note.
- **Plus — generative principle made explicit.** The meta-question "Does the dimension space span the failure space?" is the underlying generative principle of the eight failure modes; making it explicit converts the section from a list-of-modes into a generative-pattern that explains *why* these failure modes exist together.
- **Plus — codebase precedent is direct.** This proposal imports sensemaking's Meta-Inspection structural pattern directly; it doesn't invent a new organizing form.
- **Minus (the honest one) — premature at current scale.** At critique's current count of 7 failure modes, the hook-pattern feels premature. The sub-linear-growth benefit only manifests at ~12+ modes. If critique's failure-mode count stays in the 7-8 range long-term, the hook-table is over-engineering. This is the proposal's primary minus and the user should weigh it against expected future failure-mode growth.
- **Minus — high upfront migration cost.** ~150-200 lines of reorganization, plus a SKILL.md description rewrite, plus a §6 Summary table update, plus checking that other refinement notes which cross-reference §4 still resolve correctly. High regression risk on the edit itself, even though the spec's *future* edits become cheaper.
- **Minus — meta-question scope risk.** The chosen meta-question "Does the dimension space span the failure space?" works for the existing seven modes + Axis Absence, but is narrower than sensemaking's "What am I treating as FIXED that might not be?". If a future failure mode doesn't fit this meta-question (e.g., a purely process-related failure that has nothing to do with the dimension space), the hook pattern would break. The defense is that all critique failures are in fact dimension-space-related (the spec's whole subject is dimension construction + dimension-based evaluation), but this is a structural bet, not a certainty.

### 7. Comparison and per-scenario picker

The five trade-off axes from sensemaking SV6 (prevention leverage / cost / sub-mechanism coverage / future-extensibility / nitpicking-creep risk) applied across the three proposals:

| Proposal | Prevention Leverage | Cost | Sub-mech Coverage | Future-Extensibility | Nitpicking-creep Risk |
|---|---|---|---|---|---|
| **Tier 1 Surgical (Phase 0 probe)** | HIGH (Phase 0 is pre-evaluation; addresses construction-stage failure at its locus) | LOW (~30 lines refinement-note; no SKILL.md edit; no organizing-pattern change) | STRONG for (i)+(ii); MEDIUM-STRONG for (iii) via sub-check (c) | LOW (refinement-note doesn't change organizing pattern; future modes still grow linearly elsewhere) | LOW-MEDIUM (one new probe; bounded scope via trigger condition + burden-of-proof lever) |
| **Tier 2 Additional (§4 new entry #8)** | MEDIUM (vocabulary + cross-reference to the Tier 1 probe; the entry itself is recognition vocabulary, prevention requires Tier 1's probe) | MEDIUM (~40 lines entry + ~1 line SKILL.md description update; no Summary table edit) | STRONG for all 3 via Recognition field's sub-recognitions | LOW-MEDIUM (linear pattern continues; future modes add similar ~30 lines each) | LOW (named failure mode bounded by Recognition wording; no new always-firing dimension probe) |
| **Tier 3 Significant (§4 hook-table restructure)** | MEDIUM-HIGH (generative principle catches precondition-violation pattern broadly; HC5 names Axis Absence; cross-references the Tier 1 probe via HC5's calibration) | HIGH (~150-200 lines reorganization + SKILL.md description rewrite + Summary table update + verify cross-references in other refinement notes) | STRONG for all 3 via HC5 sub-aspects + extensible to future sub-mechanisms via sub-linear growth | HIGHEST (sub-linear growth for ALL future failure-mode additions) | LOW-MEDIUM (hook-table is structured; meta-question bounds the surface) |

**Per-scenario picker.** These scenarios are illustrative; the user knows their context best.

- **If cost-constrained or minimum-friction is the priority** — pick **Tier 1 alone**. Surgical edit; cheap; addresses the primary failure mechanism at its construction locus. Accept the absence of diagnostic vocabulary as a trade-off; describe corpus instances longhand when needed.

- **If diagnostic-vocabulary matters** (the team will retroactively label corpus pairs as "Axis Absence instances" for tracking) — pick **Tier 1 + Tier 2 together**. The natural composition: Tier 1 provides the prevention mechanism, Tier 2 provides the named category with cross-reference back to Tier 1. Best combined value per unit cost.

- **If future-extensibility matters** (the team anticipates failure-mode count growing to 12+ within a meaningful horizon) — pick **Tier 3** (which absorbs the purpose of Tier 2's named entry into HC5, and includes the Tier 1 probe via cross-reference from HC5's calibration column). Worth the upfront cost if the spec is expected to grow.

- **If you want vocabulary but with minimum disruption** — consider the deferred alternative **Tier 2-Inv (REPAIR existing Dimension Blindness)** instead of Tier 2. See §9 below.

- **If the structural blindness is judged worth-the-cost as accepted residual** — the "hold the line" option exists implicitly. Accept ~10% corpus rate (current rate from `100_critique_correction_chain_analysis.md`) and document the structural blindness as a known accepted residual. No spec edit. This option was generated and tested during innovation; it was killed on the basis that the corpus rate is structurally significant, but it's named here for honest completeness.

### 8. Compositional considerations

The three proposals are not three competing alternatives; they're three structurally distinct edit shapes addressing the same failure. They can be composed.

- **Tier 1 + Tier 2 — natural composition.** Surgical prevention + diagnostic vocabulary, with the Tier 2 entry's Prevention field cross-referencing Tier 1's probe. The two edits do different jobs (prevention mechanism + naming vocabulary) and reinforce each other. Probably the highest-value combination for most teams.

- **Tier 1 + Tier 3 — coherent.** The Tier 1 probe lives at Phase 0 of the spec (its original location); Tier 3's HC5 hook calibration column references the probe via cross-reference pointer. The probe doesn't relocate; the hook table just cites it. This pattern (bidirectional pointers between failure-mode entries and refinement notes) is already in use in the codebase (e.g., `td-critique.md` §4.2's "see Phase 2 → Multi-axis prosecution depth check" pattern).

- **Tier 2 + Tier 3 — mostly redundant.** Tier 3's HC5 hook + sub-aspects (i)/(ii)/(iii) provides the same vocabulary as Tier 2's entry + sub-recognitions. Both express "Axis Absence at the Failure's Actual Plane" with three sub-mechanisms. Adopting both means recording the same content twice (once in §4 hook-table; once as a separate entry). Skip Tier 2 if you're adopting Tier 3.

### 9. A deferred alternative: REPAIR existing Dimension Blindness instead of adding a new entry

An alternative form of the Tier 2 proposal was generated and tested during innovation. It survives the 5-test cycle but is held in DEFERRED status with an explicit revival trigger.

**The alternative.** Instead of adding a new failure-mode entry #8, modify the existing Dimension Blindness entry's "How to prevent" text to add a third paragraph at the end:

> "The preventive mechanism above presupposes sensemaking covered the territory at the axis where the failure would ride. When sensemaking itself under-covered, the cross-reference silently fails — the prevention runs successfully against an under-covered perspective set. The construction-stage analog of this silent failure is described and prevented at Phase 0's Axis-completeness probe refinement note: trace the failure's reachable axis through sensemaking output before treating the cross-reference as sufficient."

**Trade-off vs. the primary Tier 2 proposal.** The REPAIR approach is a smaller edit (~10 lines instead of ~40). It doesn't require a SKILL.md description update (Dimension Blindness is already in the list). But Axis Absence becomes invisible as a NAMED CATEGORY — retroactive corpus labeling becomes longhand. Vocabulary loss vs. mechanical-change minimization.

**Why deferred.** The user's question explicitly asked for ≥3 fix proposals with plus/minus, and the primary Tier 2 proposal serves that better (it gives the team a named category). But if SKILL.md description maintenance cost becomes binding (e.g., the failure-modes enumeration list grows unwieldy across many disciplines), or if the team prefers minimum vocabulary growth as a principle, this REPAIR alternative becomes the preferred form of additional-tier intervention.

**Revival trigger.** Time-bound: revive if `cognitive_harness/td-critique/SKILL.md`'s description list grows beyond ~12 failure-mode names and becomes hard to maintain. Or condition-bound: revive if the team adopts a "minimum vocabulary growth" principle for spec edits across disciplines.

### 10. A note on what "tier" means in this finding

"Tier 1 / Tier 2 / Tier 3" describes STRUCTURAL EDIT SHAPES (refinement-note pattern / new failure-mode entry pattern / hook-table restructure), not a value-hierarchy. The "ladder" metaphor here describes navigation along the cost-leverage axis (surgical lighter / significant heavier) — not a ranking of proposal merit. Each tier addresses the same underlying failure (Axis Absence) at a different structural edit scope; which one is "best" depends on context and is what the per-scenario picker in §7 helps the user judge. This clarification was added during critique to prevent misreading the tier-ladder as a value-hierarchy.

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger naming four prior outputs. The per-commitment re-test is recorded below per CONCLUDE's Synthesis re-test enforcement.

### From `devdocs/100_critique_correction_chain_analysis.md`

- **Commitment:** ~48% of last 100 inquiries are correction chains (37 STRONG + 11 MEDIUM = 48); the corpus is empirical evidence of critique-pass-then-corrected patterns.
  - **Source:** `100_critique_correction_chain_analysis.md` aggregate signals table.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** This inquiry's surfacing read the 9 Axis Absence pairs directly from `100_critique_correction_chain_analysis.md`'s Stage-3 per-pair analysis. The pairs are concrete and corpus-named. The ~10% rate (9 / 100) for Axis Absence specifically is structurally significant for the proposal's ROI argument (Tier 1 plus/minus). The aggregate corpus rate underlies the inquiry's motivation; the Axis-Absence-specific rate underlies the cost-benefit case.

- **Commitment:** The 9 corpus instances all have the "missed-not-didn't-know" cluster property (evidence was reachable from inside the prior inquiry).
  - **Source:** `top_7_common_critique_failures.md` §2 "WHAT CRITIQUE MISSED" rows.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** This inquiry's sensemaking Phase 1 anchor K2 explicitly verified the cluster property and used it as the key insight establishing Axis Absence as a structural blindness, not an epistemic limit. Each proposal's retroactive corpus test cites specific pairs by ID, confirming the evidence was reachable.

### From `devdocs/top_7_common_critique_failures.md` §2 (Axis Absence)

- **Commitment:** Axis Absence "extends Wrong Dimensions / Dimension Blindness with deeper construction-problem subtype" — implying a subtype relationship.
  - **Source:** `top_7_common_critique_failures.md` §2 header table.
  - **Re-test status:** RE-TESTED with REFINEMENT.
  - **Evidence:** The "subtype" framing in top_7 is REFINED to precondition-violation per this inquiry's sensemaking SV6. The precondition-violation relationship is structurally more precise: Axis Absence is not a subtype of Dimension Blindness; it is the failure mode that fires when Dimension Blindness's preventive mechanism's precondition silently fails. The subtype framing would have absorbed Axis Absence into a mode whose prevention it specifically defeats. This refinement is load-bearing for the inquiry's distinction-preservation constraint (sensemaking C5).

- **Commitment:** Three sub-mechanisms: dimension-extraction-inherits-surfacing-under-coverage; project-memory-applied-at-narrowest-reading; self-defeating-dimension-wording.
  - **Source:** `top_7_common_critique_failures.md` §2 mechanism section.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Sensemaking Ambiguity 2 resolution confirmed the three sub-mechanisms have distinct loci (upstream pipeline / stage-local choice / intrinsic to dimension), not one umbrella mechanism. The proposal designs explicitly map each sub-mechanism to a sub-check, sub-recognition, or sub-aspect, preserving the distinction.

- **Commitment:** Corrective sketch: "axis-completeness probe + self-defeating-dimension check" (the proposal seed in top_7 §2).
  - **Source:** `top_7_common_critique_failures.md` §2 Corrective field.
  - **Re-test status:** RE-TESTED with operationalization.
  - **Evidence:** The Tier 1 proposal IS the operationalization of this corrective sketch into a refinement-note pattern. The self-defeating-dimension check is sub-check (c). The corrective was a seed; this inquiry produced the concrete spec edit.

### From `cognitive_harness/td-critique/references/td-critique.md`

- **Commitment:** Phase 0 Dimension Construction has 5 sub-steps including "validate dimensions"; the existing "Project-specific risk dimension check" refinement note is the precedent template.
  - **Source:** `td-critique.md` §Phase 0.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** The Tier 1 proposal's insertion point is explicitly AFTER the existing project-specific risk check refinement note (preserves composition with that existing edit). The refinement-note pattern (italicized + trigger condition + sub-checks) is reused verbatim. The drafted text follows the exact precedent shape.

- **Commitment:** §4 Failure Modes has 7 entries with Mode + Recognition + Prevention fields; surfacing's failure modes 8 + 9 are the codebase precedent for additional entries.
  - **Source:** `td-critique.md` §4 + `cognitive_harness/surfacing/references/surfacing.md` §4.2.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** The Tier 2 proposal's entry text follows the exact field structure; surfacing's failure modes 8 + 9 are cited as precedent in the Innovation discipline output.

- **Commitment:** Wrong Dimensions (#1) and Dimension Blindness (#4) are the two existing modes most adjacent to Axis Absence; their prevention mechanisms presuppose dimension-space-spanning is achievable.
  - **Source:** `td-critique.md` §4.1 and §4.4.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** The distinction-preservation argument (Section 1 of the finding body) cites #1 and #4's prevention text verbatim from the spec and structurally argues why Axis Absence is precondition-violation of #4's prevention, not subtype of #1 or #4. The structural distinction is the inquiry's load-bearing claim.

### From `cognitive_harness/td-critique/SKILL.md`

- **Commitment:** SKILL.md's description names the 7 failure modes in its enumeration list; adding a new entry requires updating this list.
  - **Source:** `td-critique/SKILL.md` description field.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Tier 2's plus/minus explicitly accounts for the SKILL.md description update cost (~1 line edit). Tier 3's plus/minus also accounts for SKILL.md description rewrite (~3 lines). The deferred Tier 2-Inv alternative explicitly avoids this cost (and that avoidance is a load-bearing trade-off in its revival trigger).

### Aggregate re-test summary

- RE-TESTED commitments: 9 (2 from `100_critique_correction_chain_analysis.md`; 4 from `top_7_common_critique_failures.md` §2; 2 from `td-critique.md`; 1 from `SKILL.md`).
- INHERITED-WITHOUT-RE-TEST commitments: 0.
- REFINED commitments (RE-TESTED but with explicit refinement): 1 (the "subtype" framing from top_7 §2 is refined to precondition-violation).
- Silent absorption: NONE. Each inherited commitment is either re-justified by this inquiry's own work or explicitly flagged with a refinement.

## Next Actions

### MUST

No MUST items. The articulation IS the deliverable; nothing additional is required for this finding's value to be realized. The user picks a proposal (or composition) and applies the spec edit; that's downstream work, not a precondition for this finding.

### COULD

- **What:** Apply the **Tier 1 (Surgical)** proposal as a spec edit to `cognitive_harness/td-critique/references/td-critique.md`. Insert the Axis-completeness probe refinement note at Phase 0 AFTER the existing Project-specific risk dimension check.
- **Who:** Future spec-editor (could be a follow-up inquiry or direct user edit).
- **Gate:** Condition-bound — when the user is ready to commit at least one fix tier. This is the LOWEST-cost option and ALSO the option that achieves the highest prevention leverage per unit cost, making it the best stand-alone first move.
- **Why:** Closes the primary structural-blindness gap at the construction locus (Phase 0). Estimated benefit: catches the ~6-7 of 9 corpus-instance categories that ride on upstream-inheritance + narrowest-reading; provides material catch on self-defeating-wording.

- **What:** Apply the **Tier 1 + Tier 2 (Surgical + Additional)** composition. Both edits committed in one inquiry: the Phase 0 refinement note + the §4 entry #8 with cross-references between them.
- **Who:** Future spec-editor.
- **Gate:** Condition-bound — when the team values diagnostic vocabulary in addition to prevention; OR when the team plans to retroactively label corpus pairs for tracking.
- **Why:** Achieves prevention + naming together. The composition is the natural one (the cross-references between Tier 1 and Tier 2 make this combination structurally clean). Recommended for teams that anticipate using `/td-critique` enough that named diagnostic categories are worth the small additional cost.

- **What:** Apply the **Tier 3 (Significant)** proposal as a §4 restructure into a hook-table pattern, importing sensemaking's Meta-Inspection structural form.
- **Who:** Future spec-editor + likely a follow-up inquiry to validate the restructure.
- **Gate:** Condition-bound — when failure-mode count is expected to grow to ~12+ within the team's planning horizon; OR when the team wants to make the generative principle of critique's failure modes explicit; OR when both Tier 1 and Tier 2 have already been adopted and the linear pattern is felt to be approaching unwieldiness.
- **Why:** Sets sub-linear growth path for all future failure-mode additions. High upfront cost; pays off over multiple future additions. The premature-at-current-scale concern is real; pick this when the future-extensibility argument actually applies to your context.

- **What:** Open a follow-up **process-layer inquiry** on the runtime invocation of whichever proposal(s) are adopted. Specifically: when in a `/td-critique` invocation does the Axis-completeness probe fire? Is it a gate or an advisory? How is the "load-bearing failure-modes" enumeration in sub-check (a) operationally executed?
- **Who:** Future MVLw inquiry author.
- **Gate:** Condition-bound — when at least one of Tier 1 / Tier 2 / Tier 3 has been applied as a spec edit and process-layer questions become concrete.
- **Why:** This inquiry committed to STRUCTURAL primary layer; process layer is the natural downstream. Without process design, the spec edit lives in `td-critique.md` but its runtime behavior is left to practitioner judgment, which may produce inconsistent application.
- **Depends-on:** at least one of the three "Apply" COULDs above. This COULD is GATED — do not author the process-layer inquiry before at least one tier is applied; the process-layer design depends on which tier was adopted.

### DEFERRED

- **What:** Adopt the **Tier 2-Inv (REPAIR Dimension Blindness)** alternative instead of Tier 2's new failure-mode entry.
- **Gate:** Condition-bound — revive if `td-critique/SKILL.md`'s description list grows beyond ~12 failure-mode names AND maintenance cost becomes binding; OR if the team adopts a "minimum vocabulary growth" principle across multiple discipline specs.
- **Why (if revived):** Smaller spec edit (~10 lines), no SKILL.md description update, preserves all existing numbering. Vocabulary loss is accepted as the trade-off.

- **What:** Generate per-sub-mechanism separate failure-mode entries (one for upstream-inheritance, one for narrowest-reading, one for self-defeating-wording) instead of bundling them into one Tier 2 entry.
- **Gate:** Condition-bound — revive if the 3 sub-mechanisms diverge enough in their prevention mechanisms that bundling becomes confusing. Currently the 3 share one prevention mechanism (the Tier 1 probe with its 3 sub-checks), so bundling is appropriate.
- **Why (if revived):** Per-sub-mechanism entries would be more granular for diagnostic labeling. Currently the bundling is correct because the prevention is shared.

- **What:** Address the broader **Meta-A cluster** hypothesis from `top_7_common_critique_failures.md` (Axis Absence + #1 Inherited-Frame Preservation + #7 Cross-Sibling Critique Silo cluster around "Frame-bounded blindness"). The Tier 3 hook-table proposal happens to be COMPATIBLE with a future Meta-A reorganization but is NOT DESIGNED around it.
- **Gate:** Condition-bound — when the Meta-A cluster hypothesis is tested as a separate inquiry and validated; then a follow-up restructure could absorb all three failure types under a single meta-question.
- **Why (if revived):** If Meta-A is real, addressing the cluster gives more leverage than addressing each component separately. But the hypothesis is currently untested; designing for it now would over-commit.

- **What:** Apply Tier 3 to other discipline specs in the codebase whose failure-modes sections might benefit from the same hook-table pattern (e.g., `cognitive_harness/innovate/references/innovate.md`, which has 6 failure modes in a linear pattern).
- **Gate:** Condition-bound — when at least one Tier-3-style hook-table is in active use in `td-critique.md` and has demonstrated its value (e.g., 2+ sub-aspects added without spec growth becoming unwieldy).
- **Why (if revived):** Cross-discipline consistency in failure-mode-section structure would aid reader navigation. But this is multi-discipline scope; out of this inquiry's bounds.

- **What:** Re-evaluate the dimension list for `/td-critique` itself in light of the construction-vs-detection distinction. The current 6 default dimensions (Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance) are content-oriented; Axis Absence work suggests construction-stage dimensions might be additionally useful.
- **Gate:** Condition-bound — when the construction-vs-detection distinction shows up in cases beyond Axis Absence (e.g., other failure types in the top-7 list show similar construction-stage patterns).
- **Why (if revived):** Could be a structural enrichment of critique's dimension framework. Out of scope here.

## Reasoning

The verdict — three structurally-distinct proposals at three tiers, with the user picking by context — is the convergent answer across the full pipeline. The reasoning trail:

### Why the precondition-violation framing held against the subtype framing

The competing framing was that Axis Absence is just a deeper subtype of Dimension Blindness. This was generated as an Inversion-candidate (P1-Inv) during innovation and tested via the 5-test cycle. It failed on Scrutiny.

The structural argument: Dimension Blindness's preventive mechanism is "cross-reference dimensions against the sensemaking perspectives." This presupposes sensemaking covered the territory. The 9 corpus instances all show this presupposition CAN silently fail. As a pure subtype of Dimension Blindness, Axis Absence inherits the same prevention; but if the prevention silently fails, the subtype has no separate preventive surface. As a precondition-violation (the failure mode that fires when prevention preconditions fail), Axis Absence gets its own preventive mechanism designed AT the precondition layer (which is what the Tier 1 probe does).

The subtype framing would have absorbed Axis Absence into a mode whose prevention it specifically defeats. The precondition-violation framing names the structural relationship precisely. The corpus 9 instances ground both readings; only the precondition-violation reading produces actionable per-sub-mechanism prevention.

### Why the 3 sub-mechanisms aren't one umbrella mechanism

A competing framing during sensemaking Ambiguity 2 was that the 3 sub-mechanisms share one common deeper mechanism — "the dimension list is constructed FROM upstream artifacts that inherit blind spots." This umbrella reading was tested and partially failed.

The umbrella reading only fits (i) upstream-inheritance cleanly. Sub-mechanism (ii) narrowest-reading is a choice made INSIDE critique (a stage-local interpretation, not inheritance from upstream). Sub-mechanism (iii) self-defeating-wording is intrinsic to the specific dimension's text (not inherited at all). The three loci are demonstrably distinct.

The umbrella was preserved as a shared *symptom* (the failure axis is missing from the dimension space) and shared *tendency* (the dimension space is constructed without explicit testing for whether it spans the failure space). But the loci differ, which is why per-sub-mechanism sub-checks (Tier 1's a/b/c structure) and per-sub-mechanism sub-recognitions (Tier 2 + Tier 3) are appropriate.

### Why three structurally-distinct tiers, not a continuum

P2-Inv during innovation generated the "tiers are a continuum" alternative. It failed on Scrutiny.

The codebase has named structural patterns for spec edits: refinement-note pattern (italicized + trigger + body), failure-mode entry pattern (numbered row + Recognition + Prevention), hook-table pattern (meta-question + hooks + calibration). These are not points on a continuum; they are *different forms*. Adopting a "very small significant rewrite" produces a refinement-note (Tier 1), not a tiny restructure. Adopting a "large surgical" produces a longer refinement-note (still Tier 1). The form determines the tier, not the size.

This matters because the user's question explicitly asked for tier-distinct proposals. Producing three refinement-notes with different content would violate the user's request; the codebase's actual structural distinctions resolve this cleanly.

### Why each proposal survived critique

All three primary proposals (Tier 1 / Tier 2 / Tier 3) passed all CRITICAL dimensions in critique:
- D1 (sub-mechanism coverage) — all three address all 3 sub-mechanisms; Tier 1's sub-check (c) is MEDIUM-STRONG on (iii) rather than STRONG, which is the honest minus.
- D2 (construction-vs-detection distinction preservation) — all three maintain Axis Absence as structurally distinct (not collapsed into #1 or #4).
- D3 (Layer Commitment respect, STRUCTURAL) — all three commit structural edit shapes without runtime process design.
- D4 (external grounding rigor) — each cites ≥1 corpus pair + ≥1 codebase precedent.

Plus most HIGH dimensions. Specific notes from critique:
- **Tier 1 received a REFINE** on sub-check (a)'s wording (clarifying that the "load-bearing failure-modes" extraction step references sensemaking's already-extracted constraints + key insights + risk surfaces, not bootstrapping from nothing). The REFINE was applied in §4 of this finding.
- **Tier 3 received MEDIUM confidence** because the "premature at current scale" concern is honest and real. The defense (the value is future-extensibility, not current-scale efficiency) is structurally sound, but the adoption decision honestly depends on the user's context.
- **The emergent tier-ladder assembly received a REFINE** clarifying that "tier" refers to STRUCTURAL EDIT SHAPES, not a value-hierarchy. This clarification was applied in §10 of this finding to prevent misreading.

### Why the deferred alternative wasn't promoted

The REPAIR-Dimension-Blindness alternative (Tier 2-Inv) survives the 5-test cycle. It wasn't promoted because the user explicitly asked for ≥3 distinct fix proposals with plus/minus; the primary Tier 2 proposal (new entry #8) serves that request better by providing a named category for diagnostic labeling. The DEFERRED alternative is preserved so a future team that prefers minimum vocabulary growth can revive it.

### Why the inversions were killed without re-litigation

Innovation killed four inversion-candidates during its Phase 3 Test (P1-Inv collapse-into-#4; P2-Inv tiers-as-continuum; P3-Inv DO-NOTHING surgical; P5-Inv restructure-without-adding). Critique TERMINATED these as not-this-inquiry rather than re-evaluating them. Re-evaluating would have been Evaluation Drift (per `td-critique.md` §4.6) — the same evaluation produced different verdicts across iterations. The kill reasons are recorded in innovation.md (now in docarchive/innovation.md after this finding compiles).

### Self-reference risk mitigation

This inquiry IS critique applied to the design of critique amendments. Self-Reference Collapse (per `td-critique.md` §4.7) is structurally in scope. The mitigation was mechanism-based, not just acknowledged:

- All candidates were required to cite external grounding (≥1 corpus pair + ≥1 codebase precedent), not critique-internal logic alone.
- Codebase precedents came from a DIFFERENT discipline (sensemaking's Meta-Inspection is the Tier 3 precedent), not from critique itself.
- The 9 corpus instances are empirical evidence external to the inquiry's own reasoning.

This is acceptable residual self-reference, not collapse.

## Open Questions

### Monitoring

- **Adoption signal: which tier the user picks.** If the user picks Tier 1 alone, the team's stated context emphasizes cost-constraint. If Tier 1 + Tier 2, the team values diagnostic vocabulary. If Tier 3, future-extensibility is the priority. The choice itself is information.
- **Corpus rate post-adoption.** After whichever proposal(s) are adopted, the next 100-inquiry analysis should show a drop in the Axis Absence pair count. If the rate stays at ~10%, the adoption didn't catch the failure (something is wrong with the implementation or with our model of the mechanism). If it drops to ~2-3%, the adoption is working. If it drops to ~0%, the mitigation is comprehensive.
- **New sub-mechanism observation.** If a future corpus shows an Axis Absence instance whose locus isn't (i)/(ii)/(iii) (e.g., a 4th sub-mechanism), the failure type's articulation needs revision. Tier 3's hook-table pattern would accommodate this as a new sub-aspect of HC5 with sub-linear cost; Tier 1's refinement-note would need a sub-check (d).

### Blocked

- **Process-layer validation.** The runtime invocation pattern of the Tier 1 probe (when in a real `/td-critique` invocation it fires, how the practitioner enumerates "load-bearing failure-modes the candidate set could exhibit") cannot be validated until the spec edit is committed and used in at least one real `/td-critique` invocation. Blocked by adoption of at least one tier.
- **Meta-A cluster validation.** Whether Axis Absence shares a deeper common failure with Inherited-Frame Preservation (top_7 #1) and Cross-Sibling Critique Silo (top_7 #7) cannot be tested until those failure types are similarly articulated and a cluster-validation inquiry is run.

### Research Frontiers

- **Generative-principle scope for critique's failure modes.** The Tier 3 meta-question "Does the dimension space span the failure space?" works for the 7 existing modes + Axis Absence. Whether ALL future critique failures will fit this meta-question is an empirical question. If a fundamentally non-dimension-space-related critique failure emerges, the meta-question may need revision. This is a research frontier with no current evidence either way.

- **Cross-discipline pattern: precondition-violation as a structural pattern.** Axis Absence is precondition-violation of Dimension Blindness's prevention. Could there be other precondition-violation pairs across the discipline spec set (e.g., in sensemaking, in surfacing, in /innovate)? If yes, "precondition-violation" might be a generative pattern worth naming at the codebase-architecture level, not just at the td-critique level. Research frontier with implications for how cognitive-harness disciplines articulate their failure modes.

- **Per-discipline failure-mode count growth.** The Tier 3 future-extensibility argument depends on whether failure-mode counts actually grow over time. Sensemaking has 6 + 3 hooks-extensible; surfacing has 9; td-critique has 7. Whether these counts trend upward, stay flat, or trend downward over the next 1-2 years is empirical. Worth tracking.

### Refinement Triggers

- **At Tier 1 adoption:** if the practitioner's first 3-5 invocations of the Axis-completeness probe report friction higher than expected (e.g., the 3 sub-checks consistently take 10+ minutes per inquiry), revise sub-check wording or relax the trigger condition.

- **At Tier 2 adoption:** if the new failure-mode entry's Recognition wording is ambiguous in the first 3-5 retroactive labeling exercises (i.e., the team can't agree on whether a corpus pair is Axis Absence sub-mechanism (i) vs (ii) vs (iii)), refine the sub-recognition wording.

- **At Tier 3 adoption:** if the hook-table restructure causes regression in cross-references from other refinement notes (e.g., a refinement note in Phase 0 references "Failure Mode #4" and that number no longer exists after the restructure), revise the migration plan to preserve cross-references via explicit translation.

- **If the Meta-A cluster is validated as a separate inquiry:** revisit Tier 3 to consider whether HC5 + HC1 + HC7 (Wrong Dimensions + Axis Absence + Self-Reference Collapse if applicable) should be reorganized under a single meta-question.

- **If a 4th sub-mechanism of Axis Absence is observed:** revise Tier 1 to add sub-check (d), revise Tier 2 to add sub-recognition (iv), or revise Tier 3 to add a sub-aspect to HC5.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
lets dive deep into Axis Absence at the Failure's Actual     │ 9         │ Extends "Wrong dimensions" with deeper                │
  │     │ Plane                                    │           │ construction-problem subtype       and understand the underlying issue and what surgical, or significant rewrites or additional sections might fix this issue, and what are plus minuses of each solution, at least give me 3 solution proposal

but first start by reading cognitive_harness/td-critique fully
```

</details>
