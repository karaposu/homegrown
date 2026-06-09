---
status: active
model: claude-opus-4-7[1m]
effort: max
---

# Finding: Inherited-Frame Preservation — Cross-Spec Precondition-Violation Mechanism and Six Concrete Fix Proposals (Three Tiers × Single-Spec / Cross-Spec)

## Question

From `_branch.md`:

This inquiry is the second in a planned series of deep-dives into the top-7 critique failures distilled in `devdocs/top_7_common_critique_failures.md`. The first inquiry covered failure type #2 "Axis Absence at the Failure's Actual Plane" and produced a tier-shape vocabulary (refinement-note / new failure-mode entry / hook-table restructure) plus three structurally-distinct fix proposals for the `/td-critique` discipline at `cognitive_harness/td-critique/`. This inquiry covers failure type #1 **"Inherited-Frame Preservation"** — the critique failure where critique tests claims *within* an inherited frame but never tests the frame itself.

**The question.** What is the structural mechanism of Inherited-Frame Preservation as a `/td-critique` failure — specifically, how does the failure surface span TWO specs (the `td-critique.md` Phase 0 dimension list missing a frame-prosecution dimension; CONCLUDE protocol's `cognitive_harness/protocols/conclude.md` Inherited Commitments Re-test enforcement framing commitments as preservation-verification rather than candidates-to-test); how do the two halves combine across an inquiry boundary (prior inquiry's CONCLUDE cements the frame; current inquiry's critique inherits and builds dimensions from it); how does this relate to existing critique failure modes (Wrong Dimensions / Dimension Blindness / False Convergence / Evaluation Drift) and to the just-articulated Axis Absence sibling — and what are at least 3 structurally-distinct fix proposals (surgical / additional / significant) for amending `td-critique.md` (single-spec variants) and/or both `td-critique.md` AND `conclude.md` (cross-spec variants), with explicit plus/minus per proposal?

**Goal.** Actionable cross-spec edit proposals, grounded against the 8 corpus instances from `top_7_common_critique_failures.md` §1, honoring the inherited tier-shape vocabulary from the Axis Absence finding, with honestly different scope variance, compositional analysis against the Axis Absence proposals (since both may be adopted), and trade-off-honest plus/minus.

## Finding Summary

- **Inherited-Frame Preservation is a CROSS-INQUIRY critique failure, structurally distinct from the existing within-inquiry failure modes AND from the just-articulated Axis Absence sibling.** The existing critique-spec failure modes — Wrong Dimensions (the dimensions don't match the actual problem), Dimension Blindness (a critical dimension is missing), False Convergence (the loop terminates too early), Evaluation Drift (dimensions or weights silently shift between iterations) — all operate at within-inquiry scope. Inherited-Frame Preservation operates at cross-inquiry scope: the frame inherited from a PRIOR inquiry's conclusion is what's preserved unchallenged in the CURRENT inquiry.

- **The failure has TWO HALVES across TWO SPECS, separated by an inquiry boundary — not a within-inquiry critique→CONCLUDE handoff.** Read this carefully because it is the most common point of confusion: the relevant CONCLUDE pass is the **PRIOR inquiry's CONCLUDE**, not the current inquiry's. The chain is — *prior inquiry's `/td-critique` passes → prior inquiry's CONCLUDE cements commitments via Inherited Commitments Re-test → current inquiry's `_branch.md` inherits those commitments via Synthesis Trigger or `refines:`/`corrects:`/`supersedes:` → current inquiry's sensemaking absorbs the inherited frame → current inquiry's `/td-critique` builds its dimension list FROM the absorbed frame and so cannot prosecute the frame itself.* Half one of the failure lives in `td-critique.md`: no dimension at Phase 0 tests inherited-frame validity. Half two lives in `conclude.md`: the Inherited Commitments Re-test enforcement is structured as preservation-verification (the per-commitment status options enumerate "RE-TESTED with evidence" or "INHERITED-WITHOUT-RE-TEST with reason"), not commitment-testing. Each half is independently catchable; both halves together produce the silent-pass pattern this inquiry diagnoses. The fix proposals target both halves: single-spec variants address `td-critique.md` only; cross-spec variants address `conclude.md` as well.

- **"Precondition-violation at a cross-spec layer"** names the structural relationship between the two halves: CONCLUDE's Inherited Commitments Re-test enforcement is the existing project mechanism that's *supposed to* catch frame issues — that is the precondition critique relies on. But the enforcement's preservation-verification framing presupposes the inherited commitment is still the right frame. When that presupposition silently fails (the commitment was based on a flawed frame), CONCLUDE's Re-test passes against the flawed frame and `/td-critique` — having no dimension that would catch the frame violation at Phase 0 — passes the candidate. Inherited-Frame Preservation is the named failure that fires when this presupposition fails and `/td-critique` has no compensating dimension.

- **The structural relationship to Axis Absence is "both are precondition-violation patterns, but at different layers."** The just-articulated Axis Absence finding established Axis Absence = precondition-violation of `td-critique.md` #4 Dimension Blindness's prevention (within-spec; within-inquiry). Inherited-Frame Preservation = precondition-violation of `conclude.md`'s Inherited Commitments Re-test enforcement (cross-spec; cross-inquiry). Both are precondition-violation patterns; the spec/scope layer differs. Neither is a subtype of the other.

- **Five distinct sub-mechanisms with distinct loci produce Inherited-Frame Preservation**, sharing one shared symptom (the frame's load-bearing premise is unchallenged) and one shared tendency (the inherited substrate is preservation-verified, not commitment-tested).
  - *(i) Authoritative-baseline-preservation* — a prior artifact is treated as authoritative baseline; preservation = transmission of contamination.
  - *(ii) Atomic-category-given* — an inherited category-definition is treated as primitive; its compositional structure or hidden assumption is not tested.
  - *(iii) Accreted-commitments-inherited* — commitments accumulated across an iteration chain are inherited as load-bearing as an assembly; per-each weight is not tested.
  - *(iv) Frame-bound-attributes-portable* — attributes derived within a frame are treated as portable to new contexts; frame-binding is not tested.
  - *(v) Frame-tested-within-not-itself* — the frame IS the testing space; the frame's structural soundness is not testable from within.

- **Six concrete fix proposals are delivered — three tiers, each with single-spec AND cross-spec variants.** The tier-shape vocabulary is inherited unchanged from the Axis Absence finding (Tier 1 surgical = refinement-note pattern; Tier 2 additional = new top-level structure; Tier 3 significant = restructure organizing pattern). The NEW dimension this inquiry adds is **single-spec vs cross-spec as a sub-axis WITHIN each tier**. Single-spec variants catch the failure at the manifestation locus (in `td-critique.md`); cross-spec variants catch the failure at the substrate locus (in `conclude.md` or in the MVLw `_branch.md` template).

- **Each proposal is composable with the just-articulated Axis Absence proposals.** A complete composition matrix (this inquiry's six variants × Axis Absence's three tiers = 18 cells) categorizes each composition as COMPOSE-NATURAL, COMPOSE-COHERENT, REDUNDANT, or mild-CONFLICT. Three cells are COMPOSE-NATURAL (adopt-together at same tier and spec); twelve are COMPOSE-COHERENT (different specs or different mechanisms; independent flow); three are mild-CONFLICT (if Axis Absence Tier 3 hook-table is adopted, this inquiry's Tier 2 entry becomes redundant with Tier 3 hook).

- **The word "tier" in this finding refers to STRUCTURAL EDIT SHAPES, not value-hierarchy, AND "single-spec vs cross-spec" is a SUB-AXIS within each tier, not a separate tier.** This clarification (carried forward from the Axis Absence finding's §10) is critical: the comparison-table view (six variants across six trade-off axes) is dimensional navigation, not ranking.

- **One deferred alternative is preserved with an explicit revival trigger.** If the codebase chooses NOT to adopt the Axis Absence finding's Tier 3 hook-table proposal, then this inquiry's Tier 3 single-spec variant (which extends that hook-table) becomes inapplicable — in that case, the deferred alternative "keep Inherited-Frame Preservation as separate Tier 2 mode, do not broaden the Axis Absence meta-question" becomes the preferred form.

- **The inquiry self-applies the proposed Frame-Premise Re-test in its own structure.** The inquiry's own load-bearing frame — "Inherited-Frame Preservation is real, structurally distinct from Axis Absence, warrants its own per-tier proposals" — was explicitly named and tested in sensemaking's Ambiguity 1, applying the proposed corrective to this inquiry itself. The self-applicability is structural evidence that the proposed mechanism is operationally meaningful.

## Finding

### Why this inquiry exists, briefly

The `/td-critique` discipline at `cognitive_harness/td-critique/references/td-critique.md` is the critique-evaluation discipline in the homegrown thinking-discipline system at `/Users/ns/Desktop/projects/native`. Earlier work in this session produced two artifacts that motivate this inquiry:

1. **`devdocs/100_critique_correction_chain_analysis.md`** — an analysis showing ~48% of the last 100 inquiries carry correction-chain signal (a later inquiry materially corrected an earlier one).

2. **`devdocs/top_7_common_critique_failures.md`** — the seven most common failure types distilled from the corrections corpus. Failure type #1 is **Inherited-Frame Preservation** with 8 corpus instances (the 7 named pairs in top_7 §1 plus the bundled 24-00 case counted as two).

This inquiry is the second in the planned series. The first inquiry (`devdocs/inquiries/2026-06-08_17-43__axis_absence_critique_fix_proposals/`) covered failure type #2 Axis Absence and established a tier-shape vocabulary (Tier 1 surgical = refinement-note pattern; Tier 2 additional = new failure-mode entry or sub-section; Tier 3 significant = hook-table restructure). This inquiry inherits that vocabulary unchanged.

The `_branch.md` declared Layer Commitment STRUCTURAL primary (proposals are spec edits) with meaning-layer foundational. Process layer (the runtime detail of when each new check fires during real `/td-critique` invocations) is explicitly deferred. A Synthesis Trigger declared 5 priors: `devdocs/100_critique_correction_chain_analysis.md`, `devdocs/top_7_common_critique_failures.md`, `cognitive_harness/td-critique/references/td-critique.md`, `cognitive_harness/protocols/conclude.md`, and the just-completed Axis Absence finding.

### 1. The underlying mechanism — Inherited-Frame Preservation is cross-inquiry AND cross-spec

The two existing critique-spec failure modes most adjacent to Inherited-Frame Preservation by name — Wrong Dimensions and Dimension Blindness — are about within-inquiry construction of the dimension list. Two other modes — False Convergence (termination-too-early) and Evaluation Drift (silent within-inquiry shift across iterations) — are also within-inquiry. None of them addresses the cross-inquiry scope where Inherited-Frame Preservation operates.

**One clarification before continuing, because this is the most common point of confusion.** This inquiry is about `/td-critique`. So why does the analysis discuss CONCLUDE? Two structural reasons, and neither says "`/td-critique` should look at CONCLUDE's output during critique" — that would be timing-impossible because CONCLUDE runs after critique within a single inquiry.

- **Reason 1 — Where the inherited frame enters the system.** The relevant CONCLUDE pass is the **PRIOR inquiry's CONCLUDE**, not the current inquiry's. The chain crosses an inquiry boundary: *prior inquiry's `/td-critique` passes → prior inquiry's CONCLUDE cements commitments via the Inherited Commitments Re-test template → current inquiry's `_branch.md` inherits those commitments via Synthesis Trigger or `refines:` / `corrects:` / `supersedes:` frontmatter → current inquiry's sensemaking absorbs the inherited frame → current inquiry's `/td-critique` builds its dimension list FROM the absorbed frame and so cannot prosecute the frame itself.* Critique is on the receiving end of CONCLUDE's preservation-verification output from a prior inquiry; that is why CONCLUDE's design is structurally relevant to a critique-focused inquiry.

- **Reason 2 — The failure has two halves across two specs.** Each half is independently fixable, and the proposals target both:
  - **Half one — in `td-critique.md`:** no dimension at Phase 0 tests inherited-frame validity. Critique builds dimensions from the inherited frame without prosecuting whether the frame's premises are still load-bearing. The single-spec (SS) fix variants target this half.
  - **Half two — in `conclude.md`:** the Inherited Commitments Re-test enforcement is structured as preservation-verification — its per-commitment status options ({"RE-TESTED with evidence", "INHERITED-WITHOUT-RE-TEST with reason"}) frame commitments as things-to-be-preserved, not candidates-to-be-tested. The cross-spec (CS) fix variants target this half (in addition to the `td-critique.md` edit).

  Either fix alone catches some cases; together they catch the failure at both its manifestation locus (critique's missing dimension) and its substrate locus (CONCLUDE's enforcement template).

With that timing/scope clarification in place, the rest of this section describes each half in turn.

**The substrate locus — CONCLUDE's Inherited Commitments Re-test enforcement.** Cross-inquiry inheritance enters the system through this enforcement. It fires when a finding's `_branch.md` declares a `## Synthesis Trigger` section OR when the frontmatter declares `refines:` / `supersedes:` / `corrects:` of a prior finding with N≥3 inherited commitments. When triggered, the protocol requires the finding to include an `## Inherited Commitments Re-test` section listing each commitment from the priors and marking each as either "RE-TESTED with evidence" or "INHERITED-WITHOUT-RE-TEST with reason." The structural framing of these per-commitment status options encourages PRESERVATION-VERIFICATION reasoning: the commitment is the thing-to-be-verified-as-preserved; the evidence cited is that the commitment still holds. What this framing does NOT prompt is COMMITMENT-TESTING reasoning: the inherited commitment is itself a candidate to TEST, and the test might find it has become wrong — the commitment is dropped or refined, not "preserved with evidence." This is the substrate-locus half of the failure.

**The manifestation locus — `/td-critique`'s missing Phase 0 dimension.** Once the inherited frame has been cemented by the prior inquiry's CONCLUDE pass and absorbed by the current inquiry's `_branch.md` and sensemaking, `/td-critique` at Phase 0 Dimension Construction builds its dimension list. The default Phase 0 mechanics — extracting dimensions from sensemaking's anchors, validating relevance, weighting by stakes, defining success criteria — operate on the inherited frame as given. No dimension prosecutes "is the inherited frame's load-bearing premise still right?" because no refinement note at Phase 0 prompts the prosecution. So a candidate that subtly violates an inherited frame's premise passes critique — and then the current inquiry's CONCLUDE Re-test, which is also preservation-verification by design, passes the commitments downstream too. This is the manifestation-locus half of the failure.

The 8 corpus instances all show this two-half pattern: prior inquiry's CONCLUDE cemented a frame; current inquiry's critique built dimensions from it; the candidate passed; a later inquiry surfaced that the inherited frame's premise had become wrong. The structurally-precise relationship between the two halves is **precondition-violation**: CONCLUDE's enforcement is the existing project mechanism that's *supposed to* catch frame-validity issues across inquiry boundaries — that is the precondition `/td-critique` relies on. But the enforcement's preservation-verification framing presupposes the inherited commitment is still the right frame. When that presupposition silently fails, CONCLUDE passes against the flawed frame and `/td-critique` — having no compensating Phase 0 dimension — also passes.

This is structurally parallel to the just-articulated Axis Absence finding's framing — both are precondition-violation patterns — but at a DIFFERENT LAYER:

- **Axis Absence** = precondition-violation of `td-critique.md` #4 Dimension Blindness's prevention. WITHIN-spec. WITHIN-inquiry.
- **Inherited-Frame Preservation** = precondition-violation of `conclude.md`'s Inherited Commitments Re-test enforcement. CROSS-spec. CROSS-inquiry.

Neither is a subtype of the other; both are precondition-violation patterns at different scopes.

### 2. The five sub-mechanisms with distinct loci

The 8 corpus instances cluster into five sub-mechanisms with structurally distinct loci. They share one symptom (the frame's load-bearing premise is unchallenged) and one tendency (the inherited substrate is preservation-verified, not commitment-tested), but the locus where each manifests differs — which matters for fix design.

**Sub-mechanism (i) — Authoritative-baseline-preservation** (locus: a prior artifact is treated as authoritative; preservation = transmission of any contamination in the baseline). The inherited spec, finding, or commitment-set is treated as a baseline-to-honor. The "surgical adoption" stance preserves the baseline AS IS; contamination in the baseline is propagated unchallenged.

*Corpus example.* The chain at `devdocs/inquiries/_archive/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/` was later corrected by both `2026-05-27_00-51__routeman_output_simplification/` and `2026-05-25_12-30__navigation_protocols_contamination_audit/`. The contamination audit explicitly names "surgical adoption WITHOUT semantic re-test" as the project-wide meta-mechanism — the prior artifact (multi_resolution_navigation.md) was inherited as authoritative baseline; the inheritance transmitted 4 contamination vectors that semantic re-test would have surfaced.

**Sub-mechanism (ii) — Atomic-category-given** (locus: an inherited category-definition is treated as primitive). A category or definition from a prior is treated as compositionally atomic; its internal structure or hidden assumption is not tested.

*Corpus examples.* The chain at `devdocs/inquiries/2026-06-05_00-11__task_define_two_pass_with_surfacing_between/` was later corrected by `2026-06-05_10-03__meta_question_taxonomy_categories/` — "Meta-question" was treated as a structurally coherent atomic category when it actually instantiates 3 distinct types. The pair at `devdocs/inquiries/2026-05-31_20-08__understanding_stage_identity/` was later corrected by `2026-05-31_22-30__inquiry_elaboration_discipline_or_not/` — the "one operation per discipline" hidden assumption was inherited without checking it against the existing discipline set (sensemaking itself composes two operations).

**Sub-mechanism (iii) — Accreted-commitments-inherited** (locus: commitments accumulated across a chain of inquiries are inherited as a load-bearing assembly). The accumulated commitments are inherited as the load-bearing baseline; per-each weight is not tested.

*Corpus example.* The chain at `devdocs/inquiries/2026-06-01_15-28__inquiry_elaboration_process_layer/` was later superseded by `2026-06-03_15-39__task_define_discipline_meaning_layer/`. The from-scratch successor dropped most of the cumulative IE accretions as "architectural accretions, not capabilities" — the weight of each accreted commitment had not been tested.

**Sub-mechanism (iv) — Frame-bound-attributes-portable** (locus: attributes of a frame are treated as portable to new contexts where the frame's binding no longer applies). Attributes derived within a frame are treated as content-independent; the frame-binding is not tested.

*Corpus examples.* The pair at `devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/` was later corrected by `2026-05-29_17-08__routelister_route_typology_logic/` — loop-bound attributes were treated as content-independent for routelister, but every attribute lost grounding outside the loop-bound frame. The pair at `devdocs/inquiries/2026-05-28_19-00__routeman_project_root_operation_meaning/` was later corrected by `2026-05-28_20-35__routeman_identity_standalone_discipline_redo/` — the loop-compatibility-bias narrowing read six identity anchors through one frame's filter; canon line 109 (which governs all disciplines) was reachable but never brought into the test.

**Sub-mechanism (v) — Frame-tested-within-not-itself** (locus: the frame IS the testing space). The frame becomes the space within which all testing happens; the frame's structural soundness is not testable from within.

*Corpus example.* The pair at `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/` was later corrected by `2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/` — the dispatch-substrate framing was the testing space; critique tested coherence WITHIN that framing without asking whether the runner actually has a /surfacing-or-not decision to make. "Dispatch" was the wrong technical term entirely; the right concept was "preparation substrate."

The five share a SYMPTOM (the frame's load-bearing premise is unchallenged) and a TENDENCY (the inherited substrate is preservation-verified, not commitment-tested). But their LOCI are structurally distinct — prior-artifact / category-definition / commitment-chain / attribute-set / testing-space — which matters because fix designs target loci, not symptoms.

### 3. Three structurally-distinct edit tiers (inherited from Axis Absence finding) + single-spec / cross-spec sub-axis (NEW)

The tier-shape vocabulary is inherited unchanged from the Axis Absence finding §3:

- **Tier 1 — Surgical = refinement-note pattern.** An italicized in-section addition to an existing phase of a spec, with a trigger condition and a body. The organizing pattern of the spec is not changed.
- **Tier 2 — Additional = new top-level structure following existing organizing pattern.** A new numbered failure-mode entry in `td-critique.md` §4, or a new sub-section in `conclude.md`'s finding template, preserves the organizing pattern with a new row or sub-section.
- **Tier 3 — Significant = restructure the organizing principle.** Replace the linear-numbered failure-modes list in `td-critique.md` §4 with a hook-table pattern under a generative meta-question, AND/OR restructure `conclude.md`'s Inherited Commitments Re-test enforcement framing from preservation-verification-by-default to commitment-testing-by-default.

The **NEW dimension this inquiry adds** is **single-spec vs cross-spec as a sub-axis WITHIN each tier**. Each tier can be delivered as:

- **Single-spec variant** — touches only `td-critique.md`. Catches the failure at the manifestation locus (in critique's dimension-list construction).
- **Cross-spec variant** — touches `conclude.md` (and optionally MVLw `_branch.md` template). Catches the failure at the substrate locus (in CONCLUDE's preservation-verification template, where the inherited frame enters the system).

This is NOT a 4th tier. The tier remains the structural edit shape (refinement-note / new failure-mode entry / restructure). Single-spec vs cross-spec is the spec-count sub-axis WITHIN the tier. The just-articulated Axis Absence finding's §10 tier-metaphor clarification carries forward and is reinforced: "tier" is structural edit shape, not value-hierarchy; and now additionally, "single-spec vs cross-spec" is the spec-count sub-axis, not a separate tier.

### 4. Tier 1 — SURGICAL proposals (two variants)

Both variants are Tier 1 surgical (refinement-note pattern). They differ on which spec they touch.

#### 4a. Tier 1 single-spec variant — Phase 0 Frame-premise test refinement note in `td-critique.md`

**What to add.** A refinement-note in `td-critique.md` Phase 0 § Dimension Construction, placed AFTER both existing refinement notes (the existing "Project-specific risk dimension check" + the Axis Absence finding's "Axis-completeness probe" if adopted).

**Drafted text** (discipline-individual — keeps `/td-critique` from coupling to runner / protocol / sister-discipline internals):

> *Refinement note (applies at Phase 0 Dimension Construction):*
>
> **Frame-premise test.** When the candidate-space being evaluated rests on commitments inherited from prior evaluation work — carried-forward decisions, refined-from priors, or a baseline being preserved — the dimension list must include at least one dimension that prosecutes the inherited frame's load-bearing premises themselves, not just the candidates within the frame. The check is operationalized as:
>
> 1. **Name 2-3 load-bearing premises** of the inherited frame (commitments that, if wrong, would invalidate the candidate-space being evaluated).
>
> 2. **For each named premise, construct a "what-if-wrong" prosecution** — what the candidate-space would look like if the premise were reversed; what evidence (canonical sources, sister-discipline outputs, prior evaluation chains) would surface that the premise has become wrong. The prosecution must operate INDEPENDENTLY of testing the candidate.
>
> 3. **If the frame's load-bearing premises cannot be named** (the practitioner can describe candidates but not the frame they rest on), that is itself a signal — the frame is invisible to the prosecutor. Run an upstream re-pass with a frame-exit perspective before continuing.
>
> Failing to construct a frame-premise prosecution when the candidate-space rests on inherited commitments is an instance of Failure Mode #9 Inherited-Frame Preservation (if adopted; cf. §4). For evaluations whose candidate-space doesn't rest on inherited commitments, the trigger condition is not satisfied and the check is skipped.

**Note on discipline-individuality.** This refinement note avoids naming runner artifacts (`_branch.md`, `## Synthesis Trigger`), protocol-specific frontmatter (`refines:` / `supersedes:` / `corrects:`), or sister-discipline-internal terms (e.g., a specific perspective name in `/sense-making`'s spec). The trigger condition — "candidate-space rests on inherited commitments" — is expressed generically. The runner is responsible for recognizing this state via its own inheritance-detection (which it already performs to populate `_state.md`'s `## Relationships` section and to fire CONCLUDE's Synthesis re-test enforcement); `/td-critique` does not need to know HOW the runner detects it. Likewise, the fallback "upstream re-pass with a frame-exit perspective" leaves the choice of upstream discipline (sensemaking or otherwise) and the specific perspective name unspecified — `/td-critique` stays domain-agnostic; the runner picks the appropriate upstream re-pass.

**Sub-mechanism coverage:** STRONG on (v) frame-tested-within-not-itself (the prosecution operates INDEPENDENTLY of candidate evaluation); MEDIUM on (i), (ii), (iii); WEAK on (iv).

**Plus / minus.**
- **Plus — leverage at low cost.** Phase 0 is pre-evaluation; the probe acts as prevention. ~30 lines of refinement-note; no SKILL.md edit; no organizing-pattern change.
- **Plus — codebase-template-aligned.** Follows existing Phase 0 refinement-note pattern (project-specific risk check + Axis-completeness probe if Axis Absence Tier 1 adopted).
- **Minus — partial coverage.** Strong only on sub-mechanism (v); weaker on others. A complete fix may require Tier 1 cross-spec or Tier 2+ proposals.
- **Minus — frame-invisibility fallback may not fire at runtime.** The fallback to sensemaking Frame-exit Completeness handles the inability-to-name case, but the practitioner must recognize they can't name the frame. Mitigation: the explicit prompt ("Name 2-3 load-bearing premises") creates the moment-of-recognition.
- **Minus — no diagnostic vocabulary.** Adopting this alone doesn't give the team a named category for retroactively labeling corpus pairs. (Tier 2 provides that.)

#### 4b. Tier 1 cross-spec variant — Status options expansion in `conclude.md` (with REFINE applied from critique)

**What to add.** A wording change to `conclude.md` Step 2 finding template — the Inherited Commitments Re-test section's per-commitment status enumeration.

**Drafted text:** Expand the per-commitment status options from {RE-TESTED with evidence; INHERITED-WITHOUT-RE-TEST with reason} to four statuses:

> Per-commitment Re-test status options:
>
> - **RE-TESTED — commitment confirmed** (with evidence cited; existing meaning).
> - **RE-TESTED — commitment confirmed but frame revised** (commitment holds, but the frame it rests on was found load-bearing in a different way than the prior assumed; cite which frame premise shifted and why).
> - **RE-TESTED — commitment found INVALID** (commitment's load-bearing premise was tested and found wrong; commitment is dropped or refined; this finding's content reflects the dropped commitment, not the inherited version; cite the test evidence and the new conclusion).
> - **INHERITED-WITHOUT-RE-TEST** (with reason; existing meaning).
>
> The expanded status options make commitment-testing (not just preservation-verification) a first-class outcome. "RE-TESTED — commitment confirmed but frame revised" and "RE-TESTED — commitment found INVALID" are intentional friction surfacing frame-level reasoning explicitly. A future reviewer can spot weak frame-testing by checking whether all RE-TESTED statuses are "commitment confirmed" only — that pattern is a soft signal of Inherited-Frame Preservation (cf. `td-critique.md` Failure Mode #9 if adopted).
>
> **(Critique-REFINE addition):** When reviewing a finding's Inherited Commitments Re-test section, if all per-commitment statuses are "RE-TESTED — commitment confirmed", this is a soft signal worth checking against `devdocs/top_7_common_critique_failures.md` §1 (Inherited-Frame Preservation) — pure preservation-verification across many inheritances may be evidence of unchallenged frame-inheritance rather than genuine frame-testing.

**Sub-mechanism coverage:** STRONG on all 5 sub-mechanisms.

**Plus / minus.**
- **Plus — substrate catch.** Catches the failure at its origin in CONCLUDE's enforcement template, not just at its manifestation in critique.
- **Plus — backward compatible.** Old status options remain valid; closed inquiries (the Axis Absence finding, this finding) stand as historical record; new status options are available going forward.
- **Plus — STRONG coverage of all 5 sub-mechanisms** via the expanded status options.
- **Minus — passive surfacing.** The status options don't FORCE the practitioner to test the frame. Active prosecution (a more intrusive change) would force; this proposal stays at lighter ADD-CONTENT.
- **Minus — blast radius across all future inquiries with Synthesis Trigger.** Every future inheritance-finding now has additional structural option-space. Bounded by backward compatibility but still a cross-spec change.
- **Minus — cross-spec edit complexity** (the NEW 6th trade-off axis). Touches `conclude.md`, not `td-critique.md`; coordination required if both Axis Absence and this inquiry's fixes are adopted together.

### 5. Tier 2 — ADDITIONAL proposals (two variants)

#### 5a. Tier 2 single-spec variant — New §4 failure-mode entry #9 in `td-critique.md`

**What to add.** A new numbered failure-mode entry in `td-critique.md` §4 (after Axis Absence's #8 if Axis Absence Tier 2 is adopted; otherwise as #8).

**Drafted entry text:**

> ### 9. Inherited-Frame Preservation
>
> A cross-inquiry critique failure: the dimension list is constructed FROM an inherited frame (the commitments carried forward from a prior inquiry's conclusion via CONCLUDE's Inherited Commitments Re-test mechanism at `cognitive_harness/protocols/conclude.md`) and treats the frame as a commitment-to-preserve rather than a candidate-to-test. The frame's own load-bearing premises are never re-questioned.
>
> **Sub-recognitions (five distinct sub-mechanisms with one shared symptom):**
>
> - **(i) Authoritative-baseline-preservation** — the inherited prior artifact is treated as an authoritative baseline; preservation = transmission of any contamination in the baseline.
> - **(ii) Atomic-category-given** — an inherited category-definition is treated as primitive; its compositional structure or hidden assumption is not tested.
> - **(iii) Accreted-commitments-inherited** — commitments accumulated across a chain of inquiries are inherited as a load-bearing assembly; the weight of each accreted commitment is not tested.
> - **(iv) Frame-bound-attributes-portable** — attributes derived within a frame are treated as portable to new contexts; the frame-binding of the attributes is not tested.
> - **(v) Frame-tested-within-not-itself** — the frame becomes the testing space; the frame's structural soundness is not testable from within.
>
> Shared symptom: the frame's load-bearing premise is unchallenged. Shared tendency: the inherited substrate is preservation-verified, not commitment-tested.
>
> **How to recognize.** Post-hoc, a later inquiry produces a `corrects:` or `refines:` finding showing the prior critique inherited the frame from an earlier inquiry's conclusion without testing the frame's load-bearing premises. The corrector typically refers to the inherited frame as "wrong," "contaminated," "narrower than the failure required," "carried forward unchallenged," or "preservation-for-preservation's-sake bias." Harm evidence often points to an external source (canon doc, sibling discipline spec, prior corpus pair) that was reachable but not surfaced.
>
> **How to prevent.** Run the Phase 0 "Frame-premise test" refinement note at dimension construction time (cross-reference: see Phase 0 Dimension Construction's Frame-premise test refinement note). For inquiries declaring a Synthesis Trigger in `_branch.md` or `refines:` / `supersedes:` / `corrects:` frontmatter, the prevention is mandatory.
>
> **Relationship to other modes.** Inherited-Frame Preservation is the precondition-violation of CONCLUDE protocol's Inherited Commitments Re-test enforcement mechanism (in `cognitive_harness/protocols/conclude.md`) — it fires when the Re-test's preservation-verification framing silently passes inherited commitments that have become wrong. Distinct from Failure Mode #8 Axis Absence at the Failure's Actual Plane: Axis Absence operates at within-spec layer (precondition-violation of #4 Dimension Blindness's prevention); Inherited-Frame Preservation operates at cross-spec layer.

**Sub-mechanism coverage:** STRONG on all 5 via sub-recognitions.

**Plus / minus.**
- **Plus — diagnostic vocabulary.** Names the failure as a category; corpus pairs can be retroactively labeled.
- **Plus — preserves linear failure-modes structure** (codebase precedent: surfacing modes 8+9 + Axis Absence #8 entry).
- **Plus — bounded scope** via Recognition wording.
- **Minus — cross-mode dependency to CONCLUDE.** The entry references conclude.md; if conclude.md is later restructured, the entry needs updating. (Mitigated: precondition-violation relationships are stable structurally.)
- **Minus — linear growth concern.** Adds §4 entry #9 after Axis Absence's #8; SKILL.md description grows. Bounded at current scale; becomes a real concern at ~12+ modes (where Tier 3 hook-table pays off).
- **Minus — vocabulary alone, prevention requires Tier 1.** Adopting this proposal alone doesn't catch the failure at construction time; it provides naming + cross-reference to Tier 1 probe.

#### 5b. Tier 2 cross-spec variant — New "Frame-Premise Re-test" sub-section in `conclude.md` (with REFINE applied from critique)

**What to add.** A new sub-section in `conclude.md` Step 2 finding template, peer to the existing Inherited Commitments Re-test section.

**Drafted sub-section (with Critique-REFINE applied to trigger condition wording):**

> ## Frame-Premise Re-test
>
> **REQUIRED when (a) the inquiry declared `## Synthesis Trigger` in `_branch.md` listing ≥1 prior whose commitments include explicit frame-shaping claims (named operations / named categories / named atomic concepts / named foundational principles), OR (b) the finding's frontmatter declares `refines:` / `supersedes:` / `corrects:` of a prior finding with N≥3 inherited commitments AND any of those commitments names a structural frame. OMIT entirely when neither trigger is met.**
>
> When required, surface:
>
> - **Named frame premises:** list 2-3 load-bearing premises of the inherited frame (commitments from priors that, if wrong, would invalidate this finding's candidate-space).
> - **Per-premise test status:** for each named premise, cite whether the premise was tested in this inquiry (sensemaking ambiguity collapse / critique adversarial evaluation / innovation inversion-candidate) and the outcome — premise confirmed; premise refined; premise dropped.
> - **For untested premises:** cite the reason (frame not load-bearing for this inquiry's candidate-space; testing deferred to follow-up inquiry; out of scope).
>
> The Frame-Premise Re-test is intentional friction designed to expose Inherited-Frame Preservation (cf. `td-critique.md` §4 Failure Mode #9 if adopted). A future reviewer can spot weak frame-testing by checking the ratio of "tested" to "untested" frame premises across a finding's inheritance.

**Sub-mechanism coverage:** STRONG on all 5.

**Plus / minus.**
- **Plus — STRONG coverage on all 5 sub-mechanisms** via the explicit per-premise test status.
- **Plus — substrate catch + naming.** Catches at substrate (conclude.md) AND provides explicit vocabulary (Frame-Premise Re-test).
- **Plus — composable with the Tier 1 cross-spec variant.** A3-CS expands status options; A4-CS adds the dedicated sub-section. The two together provide both passive surfacing (status options) AND active enforcement (sub-section).
- **Minus — cross-spec edit complexity.** Same as A3-CS; touches `conclude.md`.
- **Minus — adds structural requirement to every future inheritance-finding.** Bounded by the tightened trigger condition (post-REFINE).

### 6. Tier 3 — SIGNIFICANT proposals (two variants)

#### 6a. Tier 3 single-spec variant — Hook-table HC9 extension + meta-question broadening

**What to add / change.** REQUIRES Axis Absence Tier 3 (hook-table restructure) to be adopted first or simultaneously. Add HC9 hook to the hook-table; broaden the Axis Absence meta-question to encompass frame-inheritance.

**Drafted HC9 hook entry:**

> | **HC9 — Inherited-frame premise** | Whether the dimension list inherited a frame from a prior inquiry's commitments AND whether the frame's load-bearing premises are tested. Sub-aspects: (i) authoritative-baseline-preservation; (ii) atomic-category-given; (iii) accreted-commitments-inherited; (iv) frame-bound-attributes-portable; (v) frame-tested-within-not-itself. | Inherited-Frame Preservation (NEW) — corrective at Phase 0 Dimension Construction's Frame-premise test refinement note + cross-reference to `conclude.md` Inherited Commitments Re-test enforcement. Precondition-violation of `conclude.md`'s Re-test enforcement: fires when the Re-test's preservation-verification framing silently passes inherited commitments based on a wrong frame. |

**Proposed BROADENING of the Axis Absence meta-question:**

> **OLD (from Axis Absence Tier 3):** "Does the dimension space SPAN the failure space?"
>
> **NEW (broadened):** "Are the dimension space AND its inherited frame both load-bearing and tested?"
>
> The broadening preserves all original coverage. HC1 (Dimensions vs problem), HC4 (Dimension-space completeness), HC5 (Dimension-space construction) still ask about the dimension space. HC9 adds the frame-inheritance dimension. The new wording reads naturally across all 9 hooks. It is consistent with sensemaking's H2 (Frame scope) meta-question at the sensemaking discipline.

**Sub-mechanism coverage:** STRONG on all 5 via HC9 sub-aspects.

**Plus / minus.**
- **Plus — generative principle + sub-linear future-extensibility.** Future failure modes add as sub-aspects or new hooks (~5-10 lines each).
- **Plus — composes naturally with Axis Absence Tier 3.** This IS the extension of that hook-table.
- **Minus — coupling to Axis Absence Tier 3 adoption.** If Axis Absence Tier 3 is not adopted, this proposal is inapplicable.
- **Minus — unilateral revision of the Axis Absence finding's meta-question.** Broadening is structurally CONSISTENT (strictly broader, not different) but is a unilateral edit to a recently-stabilized prior commitment. (Mitigation: the broadening is honestly named in the proposal; the user can choose whether the broadening is acceptable.)
- **Minus — premature at current scale.** Same concern as Axis Absence Tier 3 itself — at ~7-8 failure modes the hook-pattern feels premature; sub-linear-growth benefit only manifests at ~12+ modes.

#### 6b. Tier 3 cross-spec variant — Combined 2-spec restructure

**What to add / change.** Two coordinated edits.

**Edit 1 — `conclude.md`:** Restructure the Inherited Commitments Re-test enforcement framing from preservation-verification-by-default to commitment-testing-by-default. The expanded status options (from A3-CS) become the default framing. Section header text changes:

> **OLD (current):** "A commitment cannot be silently absorbed. It is either re-justified by this inquiry's own work, or it is explicitly flagged as carried-forward-without-re-test with a reason."
>
> **NEW:** "A commitment cannot be silently absorbed. It is either RE-TESTED (commitment confirmed / commitment confirmed but frame revised / commitment found INVALID) with evidence cited, or it is explicitly flagged as INHERITED-WITHOUT-RE-TEST with reason."

**Edit 2 — `td-critique.md`:** EITHER extend the Axis Absence Tier 3 hook-table with HC9 (as in A5-SS) IF Axis Absence Tier 3 is adopted, OR add new entry #9 (as in A4-SS) if hook-table not adopted.

**Migration plan.** Old status options remain valid; closed inquiries (Axis Absence finding, this finding) stand as historical record. New finding compilation uses the expanded option set going forward. No retroactive migration.

**Sub-mechanism coverage:** STRONG on all 5.

**Plus / minus.**
- **Plus — HIGHEST overall prevention leverage.** Catches at both substrate AND manifestation. Re-frames the protocol's default stance.
- **Plus — HIGHEST future-extensibility.** Combines all benefits of A3-CS + A5-SS.
- **Plus — backward compatible.** Closed inquiries stand; new options used going forward.
- **Minus — HIGHEST cost.** Two coordinated spec edits + migration plan + cross-references to other refinement notes.
- **Minus — HIGHEST cross-spec edit complexity.** The 6th trade-off axis; both `conclude.md` and `td-critique.md` touched.
- **Minus — branching variant behavior.** Edit 2 depends on Axis Absence Tier 3 adoption status; the proposal has conditional clarity, not hidden complexity, but the conditionality is real.

### 7. Comparison and per-scenario picker

The six trade-off axes from sensemaking SV6 (prevention leverage / cost / sub-mechanism coverage / future-extensibility / nitpicking-creep risk / cross-spec edit complexity — NEW) applied across the six variants:

| Variant | Prevention Leverage | Cost | Sub-mech Coverage | Future-Extensibility | Nitpicking-creep Risk | Cross-spec Edit Complexity |
|---|---|---|---|---|---|---|
| **A3-SS Tier 1 single-spec** (Phase 0 refinement note) | HIGH (pre-eval at Phase 0) | LOW (~30 lines) | PARTIAL (STRONG on (v); MEDIUM/WEAK on others) | LOW | LOW-MEDIUM | LOW |
| **A3-CS Tier 1 cross-spec** (conclude.md status options) | STRONG (substrate catch) | MEDIUM (~20 lines in conclude.md) | STRONG all 5 | MEDIUM | LOW | MEDIUM |
| **A4-SS Tier 2 single-spec** (§4 entry #9) | MEDIUM (vocabulary; prevention requires Tier 1) | MEDIUM (~50 lines + SKILL.md) | STRONG via sub-recognitions | LOW-MEDIUM | LOW | LOW |
| **A4-CS Tier 2 cross-spec** (new conclude.md sub-section) | STRONG (substrate + naming) | MEDIUM (~30 lines) | STRONG all 5 | MEDIUM | LOW | MEDIUM |
| **A5-SS Tier 3 single-spec** (hook-table HC9 + broaden meta-Q) | MEDIUM-HIGH (with Axis Absence Tier 3 adoption) | HIGH (depends on Tier 3 Axis Absence) | STRONG all 5 | HIGHEST (sub-linear) | LOW-MEDIUM | LOW |
| **A5-CS Tier 3 cross-spec** (combined 2-spec restructure) | HIGHEST (substrate + manifestation + protocol re-frame) | HIGHEST (2 specs + migration) | STRONG all 5 | HIGHEST | LOW-MEDIUM | HIGHEST |

**Per-scenario picker:**

- **If cost-constrained / minimum-friction is the priority** — pick **A3-SS Tier 1 single-spec alone.** Surgical edit in `td-critique.md` Phase 0; cheap; partial coverage acceptable as accepted residual.

- **If substrate catch matters and you can take one cross-spec edit** — pick **A3-CS Tier 1 cross-spec alone.** Status options expansion in `conclude.md`; STRONG coverage on all 5 sub-mechanisms at the substrate locus.

- **If diagnostic vocabulary matters in addition to prevention** — pick **A3-SS + A4-SS together** (both single-spec) OR **A3-CS + A4-CS together** (both cross-spec). Natural compositions per tier.

- **If maximum coverage and future-extensibility are valued AND Axis Absence Tier 3 is being adopted** — pick **A5-SS Tier 3 single-spec.** Extends the hook-table with HC9 + broadens meta-question. Worth the coupling cost when the hook-pattern is in play.

- **If maximum coverage AND substrate re-framing are valued AND ready for the biggest change** — pick **A5-CS Tier 3 cross-spec.** Coordinated 2-spec restructure. Highest cost, highest leverage.

- **If you want the simplest possible fix even at cost of leverage** — pick **DO-NOTHING.** Accept the ~10-15% corpus rate for inquiries with Synthesis Trigger; document the structural blindness as accepted residual. This option was generated and tested during innovation; it was killed on the basis that the corpus rate is structurally significant, but it's named here for honest completeness.

### 8. Composition with Axis Absence proposals

The just-articulated Axis Absence finding (`devdocs/inquiries/2026-06-08_17-43__axis_absence_critique_fix_proposals/finding.md`) produced three tier proposals (Tier 1 Axis-completeness probe at Phase 0; Tier 2 §4 entry #8; Tier 3 §4 hook-table restructure). This inquiry's six variants compose with each of Axis Absence's three tiers; the matrix below names each composition.

| This inquiry → / Axis Absence ↓ | A3-SS | A3-CS | A4-SS | A4-CS | A5-SS | A5-CS |
|---|---|---|---|---|---|---|
| **Axis Absence Tier 1** (Phase 0 Axis-completeness probe) | **COMPOSE-NATURAL** — both Phase 0 refinement notes; siblings | COMPOSE-COHERENT — different specs; complementary | COMPOSE-COHERENT — entry references Phase 0 probe | COMPOSE-COHERENT — different specs | COMPOSE-NATURAL — HC9 calibration cross-refs Tier 1 | COMPOSE-COHERENT — different specs |
| **Axis Absence Tier 2** (§4 entry #8) | COMPOSE-COHERENT — A3-SS prevention; entry is vocabulary | COMPOSE-COHERENT — different specs | **COMPOSE-NATURAL** — both new §4 entries (sequential numbering #8, #9) | COMPOSE-COHERENT — different specs | mild CONFLICT — hook-table absorbs entry #8 + adds HC9; #8 entry deprecated | mild CONFLICT — if Edit 2 of A5-CS adopts hook-table, #8 entry deprecated |
| **Axis Absence Tier 3** (§4 hook-table HC5 + meta-Q) | COMPOSE-COHERENT — Phase 0 probe under HC1/HC5 calibration | COMPOSE-COHERENT — different specs | mild CONFLICT — #9 entry migrates to hook | COMPOSE-COHERENT — different specs | **COMPOSE-NATURAL** — A5-SS IS the extension of Axis Absence Tier 3 | **COMPOSE-NATURAL** — A5-CS Edit 2 adopts the hook-table extension |

**Recommended adoption sequences:**

- **Adopt at minimum (both inquiries, Tier 1 only):** Axis Absence Tier 1 + A3-SS (both at Phase 0; compose-natural as siblings). Lowest combined cost; addresses both primary failure mechanisms at construction time.

- **Adopt for vocabulary (both inquiries, Tier 1 + Tier 2):** Axis Absence Tier 1 + A3-SS + Axis Absence Tier 2 (#8) + A4-SS (#9). Surgical prevention + named vocabulary for both failures.

- **Adopt for future-extensibility (both inquiries, all three tiers via hook-table):** Axis Absence Tier 3 hook-table (with HC1-HC8) + A5-SS extending to HC9 + broader meta-question. Single hook-table with all 9 hooks; sub-linear growth for future failure modes.

- **Adopt for substrate re-framing (cross-spec across both inquiries' surfaces):** A3-CS (or A4-CS or A5-CS) — cross-spec changes in `conclude.md` are INDEPENDENT of the Axis Absence inquiry's `td-critique.md` changes; can be adopted in either order. The substrate-level fix catches Inherited-Frame Preservation at its origin.

### 9. A deferred alternative

An alternative form of Tier 3 single-spec — "don't broaden the Axis Absence meta-question; keep Inherited-Frame Preservation as a separate Tier 2 mode" — was generated and tested during innovation. It survives the 5-test cycle but is held in DEFERRED status with an explicit revival trigger.

**The alternative.** Don't extend the Axis Absence Tier 3 hook-table with HC9; don't broaden the meta-question. Instead, accept that Inherited-Frame Preservation doesn't fit cleanly under "Does the dimension space SPAN the failure space?" and keep it as a separate failure mode (Tier 2 entry #9 only, via A4-SS or A4-CS).

**Why deferred.** If the Axis Absence finding's Tier 3 hook-table is NOT adopted in this codebase (e.g., the team decides the linear-mode pattern is sufficient at current scale), then this inquiry's Tier 3 single-spec (A5-SS) is inapplicable because A5-SS PRESUPPOSES the hook-table is in play. In that case, the deferred alternative becomes the preferred form of Tier 3 — keeping Inherited-Frame Preservation as Tier 2 only and accepting that this inquiry has no Tier 3 single-spec variant.

**Revival trigger.** Condition-bound: revive if the Axis Absence finding's Tier 3 hook-table proposal is rejected OR indefinitely deferred. In that case, A5-SS becomes inapplicable; A4-SS becomes the preferred form of Tier 2; A5-CS may still be adopted as cross-spec Tier 3 because A5-CS does NOT require the hook-table (its Edit 2 has variant behavior).

### 10. Tier metaphor clarification + single-spec/cross-spec sub-axis clarification (carry-forward + extension)

**Carry-forward from Axis Absence finding §10:** "Tier 1 / Tier 2 / Tier 3" describes STRUCTURAL EDIT SHAPES (refinement-note pattern / new top-level structure / restructure organizing pattern), NOT a value-hierarchy. The "ladder" metaphor here describes navigation along the cost-leverage axis (surgical lighter / significant heavier), not a ranking of proposal merit.

**Extension by this inquiry:** "Single-spec vs cross-spec" describes the SPEC-COUNT SUB-AXIS within each tier, NOT a separate tier. A Tier 1 single-spec variant and a Tier 1 cross-spec variant are BOTH Tier 1 (both follow the refinement-note pattern); they differ only on which spec they touch. The picker is therefore navigation across tier AND spec-count, providing dimensional choice rather than ranked recommendation.

This clarification was added during critique to prevent re-introduction of value-hierarchy framing across either dimension.

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger naming five prior outputs. Per CONCLUDE's Synthesis re-test enforcement, this section re-tests each commitment.

### From `devdocs/100_critique_correction_chain_analysis.md`

- **Commitment:** ~48% of last 100 inquiries are correction chains (the corrections corpus underlies the inquiry's motivation).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** This inquiry's surfacing read the 8 Inherited-Frame Preservation pairs directly from `100_critique_correction_chain_analysis.md`'s Stage-3 per-pair analysis. The pairs are concrete and corpus-named. The retroactive corpus test for each proposal cites specific pairs by ID.

### From `devdocs/top_7_common_critique_failures.md` §1

- **Commitment:** Inherited-Frame Preservation is "structurally distinct from existing failure modes" and "the Inherited Commitments Re-test mechanism is preservation-verification, not commitment-testing."
  - **Re-test status:** RE-TESTED with REFINEMENT.
  - **Evidence:** The "structurally distinct" claim is RE-TESTED via sensemaking Ambiguity 1, with the structural relationship refined to "precondition-violation at CROSS-SPEC LAYER." This refines top_7's framing by specifying the layer at which the precondition-violation operates (CONCLUDE protocol's enforcement, not a `td-critique.md` failure mode's prevention). The "preservation-verification not commitment-testing" claim is RE-TESTED and adopted unchanged.

- **Commitment:** "Frame-Test dimension" is the proposed corrective.
  - **Re-test status:** RE-TESTED with operationalization.
  - **Evidence:** A3-SS (single-spec Phase 0 refinement note) is the operationalization of the Frame-Test dimension into a refinement-note pattern. The 3 sub-steps + Frame-exit Completeness fallback flesh out top_7's sketch.

### From `cognitive_harness/td-critique/references/td-critique.md`

- **Commitment:** Phase 0 Dimension Construction has 5 sub-steps; the existing project-specific risk dimension check refinement note is the precedent template; §4 Failure Modes has 7 entries with Mode + Recognition + Prevention fields.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** A3-SS uses the refinement-note pattern at Phase 0 (after the project-specific risk check). A4-SS uses the §4 entry pattern (after Axis Absence's #8 if adopted). The precedents are honored without modification.

### From `cognitive_harness/protocols/conclude.md`

- **Commitment:** Inherited Commitments Re-test enforcement fires on Synthesis Trigger or `refines:`/`supersedes:`/`corrects:` with N≥3 inherited commitments; the per-commitment status options are {RE-TESTED with evidence; INHERITED-WITHOUT-RE-TEST with reason}; "A commitment cannot be silently absorbed."
  - **Re-test status:** RE-TESTED with PROPOSED REFINEMENT.
  - **Evidence:** The enforcement mechanism is RE-TESTED and preserved as the surface where Inherited-Frame Preservation manifests. The proposal A3-CS PROPOSES REFINEMENT to expand the per-commitment status options from 2 to 4 — this is a structural amendment to this commitment. The COULD-vs-MUST dependency gating pattern is cited as precedent for the status-options expansion. The "A commitment cannot be silently absorbed" principle is preserved unchanged.

### From `devdocs/inquiries/2026-06-08_17-43__axis_absence_critique_fix_proposals/finding.md`

- **Commitment:** 3 tier-shape definitions (surgical = refinement-note; additional = new top-level structure; significant = restructure organizing pattern); "tier" = structural edit shape, not value-hierarchy; precondition-violation framing as Axis Absence's structural relationship; 5 trade-off axes (prevention leverage / cost / sub-mechanism coverage / future-extensibility / nitpicking-creep risk).
  - **Re-test status:** RE-TESTED with EXTENSION.
  - **Evidence:** Tier-shape definitions are RE-TESTED and inherited UNCHANGED. The "tier" = structural edit shape clarification is CARRIED FORWARD and EXTENDED with the new "single-spec vs cross-spec" sub-axis clarification (per §10). The precondition-violation framing is RE-TESTED with structural distinction: Inherited-Frame Preservation is precondition-violation at a DIFFERENT LAYER than Axis Absence's (cross-spec vs within-spec). The 5 trade-off axes are RE-TESTED and EXTENDED with a 6th axis: cross-spec edit complexity.

- **Commitment:** Axis Absence Tier 3 hook-table proposal with meta-question "Does the dimension space SPAN the failure space?"
  - **Re-test status:** RE-TESTED with PROPOSED BROADENING.
  - **Evidence:** This commitment is PROPOSED BROADENING via A5-SS — the meta-question becomes "Are the dimension space AND its inherited frame both load-bearing and tested?" The broadening is structurally consistent (strictly broader; preserves all original coverage; adds HC9 as new hook). The proposal explicitly cites this broadening as a unilateral edit to a recently-stabilized prior commitment and offers DO-NOTHING (P5-Inv-Deferred) as alternative if the broadening is rejected.

### Aggregate re-test summary

- RE-TESTED commitments: 8 (1 from 100.md; 2 from top_7 §1; 1 from td-critique.md; 1 from conclude.md; 2 from Axis Absence finding).
- INHERITED-WITHOUT-RE-TEST commitments: 0.
- RE-TESTED with REFINEMENT / OPERATIONALIZATION / PROPOSED REFINEMENT / PROPOSED BROADENING / EXTENSION: 5.
- Silent absorption: NONE.

**Self-applicability note:** This Inherited Commitments Re-test section is itself an EXAMPLE of the failure type Inherited-Frame Preservation. Three of the five RE-TESTED commitments are marked with explicit revision flags (REFINEMENT / PROPOSED REFINEMENT / PROPOSED BROADENING) — these are NOT pure preservation-verification statuses. The pattern across this section's commitments is therefore mixed (some confirmed; some refined; none silently absorbed). If A3-CS's expanded status options had been available at compilation time, the marked commitments would be statused "RE-TESTED — commitment confirmed but frame revised" (for REFINEMENT cases) or "RE-TESTED — commitment found INVALID" (none in this finding, but the option would exist). The retrospective fit of the expanded status options to this finding's own re-test pattern is structural evidence that the proposal is operationally meaningful.

## Next Actions

### MUST

No MUST items. The articulation IS the deliverable.

### COULD

- **What:** Apply the **Tier 1 single-spec (A3-SS) — Phase 0 Frame-premise test refinement note** as a spec edit to `cognitive_harness/td-critique/references/td-critique.md`. Insert AFTER both existing refinement notes (project-specific risk check + Axis Absence Tier 1 Axis-completeness probe if adopted).
- **Who:** Future spec-editor.
- **Gate:** Condition-bound — when the user is ready to commit at least one fix tier. This is the LOWEST-cost option and addresses the primary failure mechanism at construction time.
- **Why:** Partial coverage but high prevention leverage at low cost; composes naturally with Axis Absence Tier 1 if adopted.

- **What:** Apply the **Tier 1 cross-spec (A3-CS) — status options expansion** as a spec edit to `cognitive_harness/protocols/conclude.md`. Expand the per-commitment status options from 2 to 4 + add the soft-signal monitoring phrasing (per critique REFINE).
- **Who:** Future spec-editor.
- **Gate:** Condition-bound — when the team can accept a cross-spec edit. Backward-compatible (closed inquiries stand; new options used going forward).
- **Why:** Substrate catch + STRONG coverage on all 5 sub-mechanisms. Best single-proposal coverage of any variant.

- **What:** Apply the **Tier 1 single-spec + cross-spec combination (A3-SS + A3-CS)** for maximum Tier 1 coverage.
- **Who:** Future spec-editor.
- **Gate:** Condition-bound — when the team wants both manifestation and substrate catch.
- **Why:** Two surgical edits compose cleanly across specs; manifestation locus (Phase 0) + substrate locus (Re-test enforcement).

- **What:** Apply the **Tier 2 single-spec (A4-SS) — new §4 entry #9** in `td-critique.md` for diagnostic vocabulary.
- **Who:** Future spec-editor.
- **Gate:** Condition-bound — when the team wants a named category for retroactively labeling corpus pairs.
- **Why:** Vocabulary power; composes naturally with Axis Absence Tier 2 (sequential entries #8, #9).

- **What:** Apply the **Tier 2 cross-spec (A4-CS) — new "Frame-Premise Re-test" sub-section** in `conclude.md` with tightened trigger condition (per critique REFINE).
- **Who:** Future spec-editor.
- **Gate:** Condition-bound — when the team wants explicit enforcement of frame-testing at finding-compilation time.
- **Why:** Substrate naming + intentional friction at finding-compilation time. Composable with A4-SS.

- **What:** Apply the **Tier 3 single-spec (A5-SS) — extend Axis Absence Tier 3 hook-table with HC9 + broaden meta-question** in `td-critique.md`.
- **Who:** Future spec-editor.
- **Gate:** Condition-bound — when Axis Absence Tier 3 hook-table IS adopted AND future-extensibility is valued.
- **Why:** Generative principle made explicit at HC9; sub-linear future-extensibility for all future failure modes.
- **Depends-on:** Axis Absence Tier 3 adoption. This COULD is GATED — do not adopt A5-SS without coordinating with Axis Absence Tier 3.

- **What:** Apply the **Tier 3 cross-spec (A5-CS) — combined 2-spec restructure** of `conclude.md` re-test enforcement + `td-critique.md` §4.
- **Who:** Future spec-editor.
- **Gate:** Condition-bound — when the team is ready for the biggest change and willing to coordinate across two specs.
- **Why:** HIGHEST overall prevention leverage; combines substrate re-framing + manifestation catch + future-extensibility.

- **What:** Open a follow-up **process-layer inquiry** on the runtime invocation of whichever proposal(s) are adopted. Specifically: when in a real `/td-critique` invocation does the Frame-premise test fire? How does the practitioner enumerate the 2-3 frame premises operationally? How does the soft-signal monitoring in A3-CS (if adopted) actually surface during reviews?
- **Who:** Future MVLw inquiry author.
- **Gate:** Condition-bound — when at least one of A3-SS / A3-CS / A4-SS / A4-CS / A5-SS / A5-CS has been applied as a spec edit and process-layer questions become concrete.
- **Why:** Parallels the Axis Absence inquiry's deferred process-layer COULD; this inquiry committed to STRUCTURAL primary, process is downstream.
- **Depends-on:** at least one of the "Apply" COULDs above. This COULD is GATED.

### DEFERRED

- **What:** Adopt **P5-Inv-Deferred** — keep Inherited-Frame Preservation as separate Tier 2 mode (don't broaden the Axis Absence meta-question).
- **Gate:** Condition-bound — revive if the Axis Absence finding's Tier 3 hook-table proposal is rejected OR indefinitely deferred.
- **Why (if revived):** A5-SS becomes inapplicable in that case; A4-SS / A4-CS become the preferred Tier 2 forms; A5-CS may still be adopted as cross-spec Tier 3.

- **What:** Generate per-sub-mechanism separate failure-mode entries (one per (i)-(v)) instead of bundling them into one Tier 2 entry.
- **Gate:** Condition-bound — revive if the 5 sub-mechanisms diverge enough in prevention mechanisms that bundling becomes confusing.
- **Why (if revived):** Per-sub-mechanism entries would be more granular for diagnostic labeling. Currently bundled because prevention is shared (Tier 1 probe).

- **What:** Address the broader **Meta-A cluster** hypothesis from `top_7_common_critique_failures.md` (Inherited-Frame Preservation + Axis Absence + Cross-Sibling Critique Silo cluster around "Frame-bounded blindness"). The Tier 3 hook-table proposals are COMPATIBLE with future Meta-A reorganization but are NOT DESIGNED around it.
- **Gate:** Condition-bound — when the Meta-A cluster hypothesis is tested as a separate inquiry and validated.
- **Why (if revived):** If Meta-A is real, addressing the cluster gives more leverage than addressing each component separately.

- **What:** Modify the **MVLw `_branch.md` template's Layer Commitment section** to add an explicit "test inherited layer premise" instruction. Top_7 §1 named Layer Commitment as contributing to frame-inheritance ("tends to inherit the upstream layer's premises rather than test them").
- **Gate:** Condition-bound — revive if the per-corpus-pair analysis shows Layer Commitment misuse as a recurring sub-mechanism.
- **Why (if revived):** Layer Commitment fires once per inquiry; modifying its template has bounded leverage. Could be a minor surgical proposal in addition to the main fixes.

- **What:** Re-evaluate the **5 sub-mechanisms** in light of any new corpus instances as they emerge. If a 6th sub-mechanism shows up consistently, revise A2 (the coverage map).
- **Gate:** Condition-bound — revive when N≥3 corpus instances suggest a 6th sub-mechanism.
- **Why (if revived):** The 5-sub-mechanism set was consolidated from 7 surfaced candidates; it may need extension as evidence accumulates.

## Reasoning

The verdict — six fix proposals at three tiers × single-spec/cross-spec sub-axis, with composition matrix and per-scenario picker — is the convergent answer across the full pipeline. The reasoning trail:

### Why the cross-spec precondition-violation framing held

The competing framing during innovation was that Inherited-Frame Preservation is just precondition-violation of `td-critique.md` #6 Evaluation Drift's prevention applied at a slightly broader scope. This P1-Inv was tested via the 5-test cycle and failed on Scrutiny.

The structural argument: #6 Drift's prevention operates WITHIN-inquiry across iterations. It doesn't address CROSS-inquiry inheritance. Inherited-Frame Preservation's failure surface is the inheritance of commitments from PRIOR inquiries — a scope where #6's prevention has no operational mechanism. The precondition-violation pattern requires a TARGET prevention that operates at the relevant scope. The only such prevention at cross-inquiry scope is CONCLUDE protocol's Inherited Commitments Re-test enforcement.

### Why the 5 sub-mechanisms aren't 2 or 7

A competing P2-Inv proposed collapsing to 2 sub-mechanisms (preservation-of-prior + frame-bound-testing). The collapse was tested and failed on Scrutiny: the 5 loci are demonstrably distinct, and the corpus instances map cleanly to them. Surfacing's 7 candidates consolidated to 5 by locus.

### Why both single-spec AND cross-spec variants

Sensemaking SV6 Ambiguity 3 established that the failure surface spans 3 specs (`td-critique.md` + `conclude.md` + MVLw `_branch.md` template). Single-spec fixes catch the manifestation locus; cross-spec fixes catch the substrate locus. Both are valid; user picks by context. The Axis Absence inquiry's tier-shape vocabulary is honored; the NEW sub-axis is spec-count.

### Why each proposal survived critique

All six per-tier variants + 2 substrate + 2 cross-cutting candidates passed all CRITICAL dimensions:
- D1 (sub-mechanism coverage): varies by variant (PARTIAL for A3-SS; STRONG for the rest)
- D2 (cross-failure-distinct-not-collapsed): STRONG across all
- D3 (Layer Commitment STRUCTURAL): STRONG across all
- D4 (external grounding rigor): STRONG across all

Specific REFINEs from critique:
- **A3-CS received a REFINE** on the soft-signal monitoring phrasing (make the inheritance-pattern-monitoring explicit). Applied in §4b.
- **A4-CS received a REFINE** on the trigger condition wording (tighten ambiguity about when "Frame-Premise Re-test" is REQUIRED). Applied in §5b.
- **Emergent assembly received a REFINE** to carry forward the Axis Absence tier-metaphor clarification + add the single-spec/cross-spec sub-axis clarification. Applied in §10.

A5-SS and A5-CS received MEDIUM-confidence SURVIVE verdicts with honest minuses named (coupling to Axis Absence Tier 3; cross-spec coordination cost).

### Why the deferred alternative wasn't promoted

The "don't broaden meta-Q" alternative (P5-Inv-Deferred) survives the 5-test cycle. It wasn't promoted because the broadening (in A5-SS) is structurally consistent (strictly broader; preserves coverage) and gives sub-linear future-extensibility. The DEFERRED status preserves the option for the case where Axis Absence Tier 3 is rejected.

### Why the inversions were killed without re-litigation

Innovation killed five inversion-candidates (P1-Inv collapse-into-#6 Drift; P2-Inv 2-mechanism; P3-Inv DO-NOTHING; P4-Inv REFRAME-AS-BUG; P6-Inv no-picker; P7-Inv don't-analyze). Critique TERMINATED these as not-this-inquiry; re-evaluating would have been Evaluation Drift.

### Self-reference mitigation

This inquiry IS critique applied to critique-and-protocol-spec design. Self-Reference Collapse risk was HIGHER than for Axis Absence (which was single-spec). Mitigation: D10 explicitly tested per candidate; external grounding mandatory (corpus + codebase precedent + cross-discipline precedent like sensemaking's Meta-Inspection self-applicability principle); the inquiry's own frame was tested in sensemaking Ambiguity 1; the Inherited Commitments Re-test section above SELF-APPLIES the proposal (some commitments are marked with revision flags, not pure preservation-verification).

## Open Questions

### Monitoring

- **Adoption signal: which combination the user picks.** Tier 1 alone (cost-constrained) vs Tier 1 + Tier 2 (vocabulary-valued) vs Tier 3 (future-extensibility-valued); single-spec only vs cross-spec adoption. The choice itself is information.
- **Corpus rate post-adoption.** After adoption, the next 100-inquiry analysis should show a drop in Inherited-Frame Preservation pair count.
- **New sub-mechanism observation.** If a future corpus shows an instance whose locus isn't in (i)-(v), the failure type's articulation needs revision.

### Blocked

- **Process-layer validation.** Runtime invocation pattern of A3-SS or the soft-signal monitoring in A3-CS cannot be validated until adopted in real `/td-critique` invocations.
- **Meta-A cluster validation.** Whether Inherited-Frame Preservation shares a deeper common failure with Axis Absence and Cross-Sibling Critique Silo cannot be tested until all three failure types are articulated and a cluster-validation inquiry is run.
- **Cross-spec adoption coordination.** If both A3-CS (or A4-CS) and Axis Absence Tier 1 (or Tier 2) are adopted together, the rollout order matters; the picker recommends adoption sequences but real-world adoption may surface coordination issues.

### Research Frontiers

- **Generative-principle scope for critique's failure modes.** The proposed broadening (A5-SS) extends the meta-question to "Are the dimension space AND its inherited frame both load-bearing and tested?" Whether all future critique failures fit this broader meta-question is empirical.
- **Precondition-violation as a cross-spec structural pattern.** Both Axis Absence and Inherited-Frame Preservation are precondition-violation patterns (different layers). Could there be other precondition-violation pairs across the discipline spec set?
- **Self-applicability of the proposed mechanisms.** This finding's own Inherited Commitments Re-test section retrospectively fits the proposed expanded status options. Whether this self-applicability extends to other inquiries (e.g., would a 100-inquiry post-adoption corpus show inheritance-findings actually using the expanded status options) is empirical.

### Refinement Triggers

- **At A3-SS adoption:** if first 3-5 invocations report friction higher than expected, refine sub-step wording or relax trigger condition.
- **At A3-CS adoption:** if first 3-5 inheritance-findings ALL mark statuses "RE-TESTED — commitment confirmed", the soft signal fires; re-examine those findings for Inherited-Frame Preservation per the monitoring phrasing.
- **At A4-CS adoption:** if practitioners disagree on whether a finding should include the "Frame-Premise Re-test" sub-section (i.e., trigger condition is interpreted differently), revise wording.
- **At A5-SS adoption:** if the broadened meta-question causes confusion among reviewers (HC1-HC9 coverage feels less unified), reconsider whether the broadening was structurally consistent.
- **At A5-CS adoption:** if the 2-spec coordination causes regression in cross-references from other refinement notes, revise migration plan.
- **If a 4th proposal direction emerges from Meta-A validation:** revisit Tier 3 to consider whether HC9 + HC5 + HCN (Cross-Sibling) should be reorganized.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
## 1. Inherited-Frame Preservation

**Definition.** Critique tests claims *within* the inherited frame but never tests the frame itself. The dimension list is constructed FROM the frame — so it can only evaluate things the frame considers evaluable. Claims about the frame's own premises are treated as commitments-to-preserve rather than candidates-to-test.

**Mechanism.** A prior inquiry establishes a frame (e.g., "Meta-question is one operation"; "routeman's machinery is mature, carry it"; "dispatch is the right concept"; "the cumulative IE design accretions are load-bearing"). Subsequent critique inherits the frame as part of "Inherited Commitments Re-test" and verifies preservation. The frame's own load-bearing premises are never re-questioned — when a later inquiry finds the frame premise was wrong, critique had no dimension that could have caught it.

**Corpus instances.**
- **21-58** (dispatch-as-frame): tested coherence within the dispatch-substrate framing without asking whether the runner actually has a /surfacing-or-not decision to make. **"Dispatch" was the wrong technical term entirely; the right concept was "preparation substrate."**
- **00-11 ← 10-03** (MQ-as-atomic-category): tested whether variant (a) preserved commitments without testing whether "Meta-question" was a structurally coherent atomic category. It wasn't — it instantiates 3 distinct types.
- **15-28 ← 15-39** (cumulative IE accretions): tested cumulative design's internal coherence without asking whether each accreted commitment was still pulling its weight. The from-scratch successor dropped most of them as "architectural accretions, not capabilities."
- **24-00 ← 00-51 / 24-00 ← 12-30** (heavy-machinery preserved as inheritance): treated multi_resolution_navigation.md vocabulary as authoritative baseline rather than a candidate needing semantic re-test. Result: dead-inheritance contamination (4 vectors).
- **20-08 ← 22-30** (definition of "discipline" hidden assumption): "one operation per discipline" inherited without checking against the existing discipline set — `/sense-making` itself composes two operations (Comprehending + Stabilizing).
- **01-30 ← 17-08** (loop-bound attributes treated as content-independent): evaluated taxonomy entirely within routeman's loop-bound frame; every attribute lost grounding outside that frame.
- **19-00 ← 20-35** (loop-compatibility-bias narrowing): six identity anchors read through loop-context filter; canon line 109 governing all disciplines never brought into the test.

**Why current critique doesn't catch it.** The "Inherited Commitments Re-test" mechanism (per CONCLUDE protocol) is structured as preservation-verification — it tests whether candidates honor inherited commitments, not whether the commitments themselves are still valid. The Layer Commitment construct also tends to inherit the upstream layer's premises rather than test them.

**Corrective.** Add a **Frame-Test dimension**: per inquiry, explicitly name 2-3 load-bearing premises the frame is resting on, then dedicate at least one prosecution to "what if THIS PREMISE is wrong?" — independently of testing the candidate. If the frame can't be named, that's itself a signal (the frame is invisible to the prosecutor).  

lets dive deep into this one,
```

</details>
