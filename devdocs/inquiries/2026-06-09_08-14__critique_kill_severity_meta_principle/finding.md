---
status: active
model: claude-opus-4-7[1m]
effort: max
---

# Finding: Severity in `/td-critique` is Purpose-Fitness — A Single-Axis Meta-Principle that Unifies Rubber-Stamping and Nitpicking as Opposite-Direction Violations

## Question

From `_branch.md` (the inquiry definition file at `devdocs/inquiries/2026-06-09_08-14__critique_kill_severity_meta_principle/_branch.md`):

This inquiry was triggered by a prior conversation about adding a new prevention check to `/td-critique` (the Structural Critique discipline whose spec lives at `cognitive_harness/td-critique/references/td-critique.md`). The conversation noted that the new check carried "nitpicking-creep risk" — risk that the check could inadvertently feed the existing Nitpicking failure mode (#3 in `td-critique.md` §4: *"every candidate gets killed on minor issues"*). The user asked: rather than just naming the risk, can we be *more smart* about what gets killed versus what counts as small — in a **meta and task-agnostic and case-agnostic way**?

**The question.** What is the structural meta-principle that distinguishes a kill-worthy issue from a minor / nitpick issue in `/td-critique`, expressible in a task-agnostic structural way that explains both #2 Rubber-Stamping (too little killing) and #3 Nitpicking (too much killing) as failures-at-the-extremes of the same calibration axis — and what does this imply for how `/td-critique`'s spec articulates (or should articulate) severity?

**Goal.** A conceptual framework with **meta-validity** — it holds across diverse evaluation domains (software design, research hypothesis, business strategy, spec-edit, and unsurveyed domains like legal contract review and scientific peer review). NOT per-task heuristics dressed up as a principle. NOT a vague hedge like "depends on stakes" without saying what *structurally* varies by stakes.

**Layer commitment.** MEANING primary — the inquiry produces the conceptual articulation. Spec-edit shapes (where in `td-critique.md` to encode the principle, what refinement-note shape to use) are explicitly out of scope for this inquiry; they belong to a sequential structural-layer follow-up.

## Finding Summary

- **Severity in `/td-critique` is *purpose-fitness*.** A defect in a candidate is **kill-worthy** if, left in place, it *fatally* prevents the candidate from doing what the candidate is supposed to do. A defect is **minor / nitpick** if, left in place, the candidate still does what it's supposed to do. The principle is single-axis at the meta-level; the per-task richness (the question of *what counts as doing its job*) lives at a separate calibration layer.

- **The practitioner-applicable form is a single yes/no structural question.** *"If this defect were left in place, would the candidate still do what it's supposed to do — sufficiently, not just degraded?"* YES → not kill-worthy (note as a caveat on SURVIVE, or REFINE if a known better in-frame variant exists). NO → kill-worthy (REFINE if the fix lives within the candidate's existing frame; KILL if the fix requires replacing the candidate's frame entirely).

- **The structural distinction between REFINE and KILL is fixability-within-frame.** Both presuppose the defect is purpose-blocking; the REFINE-vs-KILL question asks *where the fix lives.* REFINE = the candidate's existing structure can absorb the fix. KILL = fixing the defect requires replacing the candidate.

- **Per-task severity-calibration is composite (reversibility, blast-radius, scope, fixability, evidence-strength, etc.) — but only at the application layer, not at the meta-level.** The composite-decomposition you find in safety engineering (SIL = severity × likelihood × controllability) or software engineering (blast-radius × reversibility) is the *per-task instantiation* of purpose-fitness, not a competitor to it. The spec's existing language *"weights come from the problem context"* (`td-critique.md` line 88) IS the calibration layer; the meta-principle just clarifies what weighting structurally MEANS.

- **The constructive-output requirement on KILL (seed extraction) is integral to the meta-principle, not orthogonal.** `td-critique.md` lines 140–142 require every KILL verdict to include "what would fix it." Reading that requirement structurally: a kill-worthy defect must have an articulable explanation of *why* the candidate's frame prevents purpose-fulfillment — and that articulation IS the seed. Inability to extract a seed is structural evidence the KILL is unsupported — it's a nitpick or rubber-stamp masquerading as a KILL. The practitioner's correct response in that case is RE-EXAMINE (gather more evidence), not render the verdict either way.

- **Confidence is orthogonal to severity, not a severity-component.** A high-confidence small defect and a low-confidence small defect have the *same severity* (both are non-purpose-blocking) but different *evidence-handling actions*. Confidence affects whether to render a verdict at all; severity affects which verdict to render once you can. Whether `/td-critique` should add an INTERIM verdict (analogous to `/innovate`'s DEFERRED disposition) for insufficient-evidence cases is a structural-follow-up question (see Open Questions below).

- **The severity-calibration locus in `/td-critique`'s process is Phase 0 step 4 (Weight dimensions).** Per `td-critique.md` line 173, weighting is already where the spec attaches per-task severity. The meta-principle doesn't relocate calibration; it makes EXPLICIT what weighting structurally MEANS (which dimensions are critical-weight = which dimensions' failure would prevent purpose-fulfillment).

- **#2 Rubber-Stamping and #3 Nitpicking are opposite-direction violations of the same meta-principle.** #2 = severe (purpose-blocking) defect under-killed. #3 = non-severe (non-purpose-blocking) defect over-killed. The structural unity simplifies prevention design: ONE structural test (purpose-fitness) prevents BOTH failure modes. The operational distinction (prosecution-weakness vs defense-weakness) survives because the two failures have different *proximate causes*, even though they share a *structural root*.

- **For candidates with intentionally ambiguous purposes (exploratory ideation, research-frontier candidates, art critique), `/td-critique` should output a defer-with-direction verdict.** Rather than applying a modified test or silently refusing, critique should name the ambiguity and direct the inquirer back to `/sense-making` (the Structural Sensemaking discipline) to clarify purpose before evaluation. This preserves clean architectural separation across the cognitive harness disciplines.

- **The user has a choice for the structural follow-up.** Option A: encode this meta-principle in `td-critique.md` as a refinement note at Phase 0 (Dimension Construction) step 4 — naming purpose-fitness as the structural meaning of dimension-weighting; providing the 1-question practitioner test; cross-referencing the #2/#3 unification. Option B: NO-ACTION — the existing spec's implicit calibration (weighting + burden-of-proof + constructive-output) is operationally sufficient; this finding stands as the meaning-layer articulation without an accompanying spec edit. Both are structurally valid choices; the meaning-layer deliverable is THIS finding regardless.

## Finding

### Why this inquiry exists, briefly

This is a follow-up to a conversation about applying spec edits to `/td-critique` (the Structural Critique discipline). In that conversation, a proposed new prevention check was flagged with *"nitpicking-creep risk"* — meaning the new check, if applied too eagerly, could inadvertently fuel the existing Nitpicking failure mode (#3 in `td-critique.md` §4). When the user heard the term *"nitpicking-creep,"* they pushed back: rather than just naming the risk, *can we be more smart about what gets killed versus what counts as small — in a meta-and-task-agnostic-and-case-agnostic way?*

That push-back is the seed of this inquiry. The current `td-critique.md` spec articulates severity through four near-synonymous notions — *severity awareness* (line 22), *burden of proof* shifts by stakes (lines 124–128), *critical-weight dimensions* (lines 130–138), and the *constructive-output requirement on KILL* (lines 140–142) — without making explicit what STRUCTURE makes one defect kill-worthy and another minor. The two-pole framing of #2 Rubber-Stamping (too little kill) versus #3 Nitpicking (too much kill) implies a calibration axis exists, but the axis is left implicit.

This inquiry answers: WHAT structural property distinguishes kill-worthy from nitpick, in a way that holds across all evaluation domains (software, research, business, spec-edit, and beyond) without per-domain heuristics?

The inquiry committed MEANING primary in its `_branch.md` — meaning the deliverable is the conceptual articulation. Spec-edit shape (which refinement note, what wording, where exactly in the file) is sequential follow-up.

### 1. The meta-principle: purpose-fitness

The structural property that distinguishes a kill-worthy defect from a minor defect is **purpose-fitness**. Every candidate has a purpose — what it's supposed to do. A software design's purpose is to solve the problem it's designed for. A research hypothesis's purpose is to make a verifiable contribution to its field. A business strategy's purpose is to achieve a stated business outcome. A spec edit's purpose is to produce correct behavior in the affected discipline. A legal contract's purpose is to allocate obligations clearly. A scientific peer review's purpose is to verify the paper's contribution. An educational assessment's purpose is to measure stated learning objectives. Across these domains — and across more — every candidate has a purpose.

**A defect is kill-worthy if, left in place, it fatally prevents the candidate from doing what the candidate is supposed to do.**

**A defect is minor / nitpick if, left in place, the candidate still does what it's supposed to do.**

The word *"fatally"* is doing important work. Defects can degrade purpose-fulfillment without preventing it — a software bug that causes occasional slowdowns; a contract clause that's ambiguous but interpretable in context; a research methodology with minor bias that doesn't invalidate conclusions. Critique's existing language handles these via SURVIVE-with-caveats (`td-critique.md` line 234: *"Note any caveats — dimensions where it passes but barely"*). Purpose-fitness as a META-PRINCIPLE is binary (does the defect fatally block purpose-fulfillment?), but the practitioner's verdict surface is richer (SURVIVE / SURVIVE-with-caveat / REFINE / KILL) to handle degradation cases without losing the binary structural distinction.

The principle is **task-agnostic**: it doesn't reference per-domain content. It refers only to the candidate's purpose and to whether the defect blocks fulfillment of that purpose. Different domains have different purposes, but the structural test is the same.

### 2. The practitioner's 1-question test

The principle converts to a single yes/no structural question the practitioner can apply during a real `/td-critique` invocation:

> **"If this defect were left in place, would the candidate still do what it's supposed to do — sufficiently, not just degraded?"**

If YES → not kill-worthy. Either SURVIVE (the defect doesn't matter for the candidate's purpose) or SURVIVE-with-caveat (the defect degrades but doesn't block) or REFINE (a known better in-frame variant exists).

If NO → kill-worthy. The next question is WHERE the fix lives:
- **REFINE** if the candidate's existing frame can absorb the fix. The candidate's structure is essentially right; the specific defect is fixable in-frame.
- **KILL** if fixing the defect requires replacing the candidate's frame entirely. The candidate's structure itself produces the defect.

This converts severity from a felt judgment to a structural answer. Practitioners can apply it at speed — a single yes/no question per defect — without losing rigor.

### 3. Why the principle naturally unifies Rubber-Stamping and Nitpicking

The two failure modes most adjacent to severity-calibration in `td-critique.md` §4 are:

- **#2 Rubber-Stamping** (lines 324–330): *"Every candidate gets a SURVIVE verdict. No kills, no refinements. The critique reads like a review, not an adversarial test."*
- **#3 Nitpicking** (lines 332–338): *"Every candidate gets killed on minor issues. Defense is absent or too weak. The critique produces an impressive list of problems, but none are evaluated for actual severity."*

The spec frames these as paired opposites (`td-critique.md` line 128: *"the adversarial structure prevents two of critique's worst failure modes"*) but doesn't articulate their structural unity. Purpose-fitness makes the unity visible:

- **#2 Rubber-Stamping** = a defect that DOES block purpose-fulfillment is under-killed (rendered as SURVIVE).
- **#3 Nitpicking** = a defect that does NOT block purpose-fulfillment is over-killed (rendered as KILL).

Both failures are MISMATCHES between defect-severity-under-purpose-fitness and the verdict rendered. The mismatch direction differs, but the mismatch IS the failure. ONE structural test (purpose-fitness) prevents BOTH. The operational distinction (prosecution-weakness for #2; defense-weakness for #3) survives because the two failures have different proximate causes, even when they share their structural root.

### 4. The two-layer structure: meta-principle vs per-task calibration

A reasonable worry is: surely severity is composite, not single-axis? Safety engineering decomposes criticality into severity × likelihood × controllability. Software engineering uses blast-radius × reversibility. Decision theory uses asymmetric loss functions (cost of false-positive vs false-negative). Aren't these multi-axis at the meta-level?

The answer is: those decompositions are real, but they operate at a different LAYER from the meta-principle.

**Meta-layer:** purpose-fitness. Single-axis. Task-agnostic. The structural test of whether a defect fatally blocks the candidate from doing its job.

**Calibration layer:** per-task composite (reversibility × blast-radius × scope × fixability × evidence-strength, plus domain-specific axes like deontological-violation-presence in ethics or exploitability in security). The per-task selection of which axes matter and how heavily to weight them.

The two layers are distinct because:

- The composite's axes vary by domain. Reversibility matters more in software; blast-radius matters more in business strategy; deontological-violation matters in ethics. No fixed N-axis composition holds across all domains — which is exactly why a fixed-N-axis meta-principle would FAIL the task-agnostic constraint.
- The meta-principle stays single-axis (does the defect block purpose?), while the per-task calibration determines what counts as "doing its job" for THIS specific candidate.

The `td-critique.md` spec already commits this structurally. Line 88: *"weights come from the problem context, not from the critique framework."* The per-task composite IS dimension weighting at Phase 0 step 4. The meta-principle's contribution is to clarify what the weighting structurally MEANS: a heavily-weighted dimension is one whose failure blocks the candidate's purpose; a lightly-weighted one is one whose failure doesn't.

### 5. The constructive-output requirement is structural, not orthogonal

`td-critique.md` lines 140–142 (a refinement note at Phase 3 — Verdict + Constructive Output) requires every KILL verdict to include constructive output: *"A KILL must extract a seed — what can be learned from the failure that informs the next iteration? Critique that only says 'this is bad' without saying 'here's what would make it better' is incomplete."*

Read structurally rather than just operationally: if a defect is genuinely kill-worthy under purpose-fitness, the practitioner can articulate WHY the candidate's frame prevents purpose-fulfillment. That articulation IS the seed. The seed isn't a separate downstream-value requirement; it's the proof that the KILL is supported.

Inability to extract a seed is therefore a structural test. If the practitioner can't articulate WHY the candidate's frame prevents purpose-fulfillment, one of two things is true:

- The defect doesn't actually block purpose-fulfillment (the KILL is a nitpick).
- Evidence is insufficient to know whether the defect blocks purpose-fulfillment (the verdict should be RE-EXAMINE — gather more evidence — not KILL).

Neither of these is "render the KILL anyway." The constructive-output requirement encodes the structural test.

### 6. Confidence is a separate dimension from severity

A defect either blocks purpose-fulfillment or it doesn't, given sufficient evidence. The practitioner's confidence in that assessment is a separate concern about evidence-strength.

Confidence affects WHETHER to render a verdict at all. Severity affects WHICH verdict to render once you can.

This means a high-confidence small defect and a low-confidence small defect have the same severity (both are non-purpose-blocking) but different evidence-handling actions:

- High-confidence small defect → SURVIVE or SURVIVE-with-caveat. The verdict is rendered.
- Low-confidence small defect → RE-EXAMINE (gather more evidence) or INTERIM verdict (acknowledge insufficient evidence). The verdict isn't rendered yet.

`/td-critique` currently has no INTERIM verdict. The closest analog is /innovate's DEFERRED disposition (per `cognitive_harness/innovate/references/innovate.md` lines 572–579: *"DEFERRED with revival trigger — single-source or single-mechanism survivors. Evidence is sufficient to pass the 5-test cycle but too thin for full ACTIONABLE confidence"*). Whether `/td-critique` should add an INTERIM verdict is a structural-follow-up question (see Open Questions).

For this inquiry's meaning-layer deliverable: confidence is structurally orthogonal to severity. Insufficient-evidence cases are a separate verdict-shape problem, not a severity-calibration problem.

### 7. Handling candidates with ambiguous purposes

Some candidates have intentionally fuzzy purposes — exploratory ideation, research-frontier proposals, art critique, ethical deliberation. Their "purpose" isn't a fixed deliverable target; it's something more open-ended like "explore whether X is feasible" or "express a vision."

The meta-principle doesn't directly handle these. Purpose-fitness presupposes the candidate's purpose is clear enough to test against.

The cleanest architectural response is **defer-with-direction**. When critique encounters a candidate whose purpose is ambiguous, it should output a verdict naming the ambiguity and directing the inquirer back to `/sense-making` (the Structural Sensemaking discipline) to clarify purpose before evaluation. Concretely: *"Critique cannot render a severity verdict because the candidate's purpose is ambiguous. Run `/sense-making` on the question to stabilize the candidate's purpose, then return to `/td-critique` with the stabilized purpose."*

This preserves clean separation across the cognitive harness disciplines — sensemaking owns purpose-stabilization; critique owns purpose-fitness evaluation. It also avoids two operationally fragile alternatives:

- **Silent modification.** Critique applies a modified purpose-fitness test ("does this support the exploratory inquiry?") without making the modification explicit. Practitioners don't know they've switched test-shape.
- **Silent refusal.** Critique returns nothing. Practitioners don't know why.

Defer-with-direction makes the situation explicit and actionable.

### 8. Where the principle attaches in `/td-critique`'s process

The severity-calibration locus is **Phase 0 — Dimension Construction, step 4 (Weight dimensions)**. `td-critique.md` line 173 reads: *"Weight dimensions — which matter most given the context? (Risk-averse contexts weight robustness higher. Speed-critical contexts weight feasibility higher.)"*

That weighting IS severity calibration. The meta-principle clarifies what weighting structurally MEANS:

- A heavily-weighted dimension is one whose failure would prevent the candidate from doing what it's supposed to do (purpose-blocking).
- A lightly-weighted dimension is one whose failure would degrade but not prevent (non-purpose-blocking).

The meta-principle doesn't relocate calibration to a new phase. Phase 1 (Landscape Construction) MAPS the landscape from the weighted dimensions. Phase 2 (Adversarial Evaluation) APPLIES the calibration via prosecution-and-defense. Phase 4 (Coverage + Convergence Assessment) OBSERVES whether the calibration is producing discriminating verdicts. Severity isn't its own phase; it's the structural meaning of weighting set at Phase 0 step 4.

### 9. What the user should do next

The meaning-layer deliverable is this finding. Two options for follow-up, both structurally valid:

**Option A — encode in spec.** Run a sequential structural-layer inquiry that articulates a refinement note at Phase 0 (Dimension Construction) step 4 of `td-critique.md`. The refinement note should: (a) name purpose-fitness as the structural meaning of dimension-weighting; (b) provide the 1-question practitioner test; (c) cross-reference the existing #2 Rubber-Stamping and #3 Nitpicking entries (in `td-critique.md` §4) as opposite-direction violations of the same principle; (d) optionally articulate the defer-with-direction handling for ambiguous-purpose candidates. Pre-conditions: user confirms whether to name the #2/#3 unification in spec text, and whether to add an INTERIM verdict for insufficient-evidence cases.

**Option B — NO-ACTION.** The existing spec's implicit calibration (weighting + burden-of-proof shift + constructive-output requirement) is operationally sufficient given this finding's articulation. The principle is named in this finding; practitioners can refer to the finding when they need to apply severity-calibration deliberately. No spec edit is required for the value to be realized.

The choice depends on whether the user expects future `/td-critique` invocations to benefit from having the principle explicit in the spec text, or whether the finding's articulation is sufficient.

### 10. Self-test: does this finding pass its own meta-principle?

The meta-principle says: a candidate is kill-worthy if a defect blocks it from doing what it's supposed to do.

This finding's purpose: produce a structurally articulated, task-agnostic meaning-layer meta-principle for severity in `/td-critique`.

Defects to check:
- Does the finding articulate the principle? Yes (Section 1).
- Is the articulation task-agnostic? Yes (the principle references only the candidate's purpose, not domain content; verified on 4 surveyed domains + 5 adversarially tested unsurveyed domains).
- Is the articulation structurally distinct from existing spec language? Yes (it unifies 4 spec terms under one named structural test that the spec doesn't currently name).
- Does it survive the 3 inherited-frame prosecutions (every candidate has a definable purpose; purpose-fitness is binary; calibration is per-task composite)? Two of three survive cleanly; one (binary) survives with the "fatally blocks" refinement that's incorporated into Section 1.

No defect blocks the finding from doing what it's supposed to do. The principle survives its own application. There is a known caveat — self-application of an articulation-producing inquiry is structurally easy (any output that exists is an articulation; the self-test verifies form, not quality). This is acknowledged residual; the next critique on a structural-follow-up inquiry should adversarially evaluate the meta-principle against external corpus data (re-running critique on closed inquiries with the principle applied vs not applied), not solely via self-test.

## Next Actions

### MUST

No MUST items. The articulation IS the deliverable; nothing additional is required for this finding's value to be realized.

### COULD

- **What:** Run a sequential structural-layer inquiry to encode the meta-principle in `td-critique.md` as a refinement note at Phase 0 (Dimension Construction) step 4. The refinement should name purpose-fitness as the structural meaning of dimension-weighting; provide the 1-question practitioner test; cross-reference the existing #2 Rubber-Stamping and #3 Nitpicking entries as opposite-direction violations of the same principle; and optionally articulate the defer-with-direction handling for ambiguous-purpose candidates.
- **Who:** Future MVLw inquiry author (or the user directly, if the structural shape is clear enough to edit without an inquiry).
- **Gate:** Condition-bound — when the user is ready to commit to making the principle explicit in spec text, AND has decided on (a) whether to name the #2/#3 unification in spec text and (b) whether to add an INTERIM verdict (analogous to /innovate's DEFERRED).
- **Why:** Makes the principle accessible to future practitioners directly from the spec rather than requiring them to read this finding. Closes the implicit-calibration gap that motivated this inquiry.

- **What:** Run an empirical validation inquiry — pick 5–10 closed inquiries from `devdocs/inquiries/` and re-evaluate them under the purpose-fitness principle. Compare the new verdicts to the original critique verdicts. If the new verdicts differ in ways that match retrospective user corrections (where available), the principle has empirical traction; if they don't differ, the principle is under-applied or the original verdicts were already implicitly using purpose-fitness.
- **Who:** Future MVLw inquiry author.
- **Gate:** Condition-bound — when the structural-layer encoding (COULD #1 above) is committed AND there's a need to validate that the principle's adoption actually changes practitioner behavior.
- **Why:** Independent empirical grounding for the meta-principle, beyond the self-test in Section 10 of this finding. The known residual on self-test is that articulation-producing inquiries pass self-tests trivially; an empirical validation closes that gap.
- **Depends-on:** COULD #1 (the structural-layer encoding). This COULD is GATED — do not act until the structural-layer inquiry runs, because the validation needs to test the encoded principle, not just the finding's articulation.

### DEFERRED

- **What:** Add an INTERIM verdict to `/td-critique`'s verdict triplet (SURVIVE / REFINE / KILL → SURVIVE / REFINE / KILL / INTERIM) for cases where evidence is insufficient to render a confident verdict.
- **Gate:** Revival trigger — observable: after the structural-layer encoding (COULD #1) ships, if practitioners report (over ~10 inquiries) that SURVIVE-with-caveats is being over-applied to insufficient-evidence cases (the soft-verdict failure mode), revive and add INTERIM. Alternatively, condition-bound: if Phase 2 re-runs (the spec's current insufficient-evidence response) are observed to be under-triggered, revive.
- **Why (if revived):** Provides explicit structural handling for evidence-insufficient cases, analogous to /innovate's DEFERRED disposition. Decouples the severity question from the confidence question explicitly, rather than implicitly via the existing SURVIVE-with-caveats language.

- **What:** Extend the meta-principle to candidates with negative purposes (e.g., "do no harm" purposes — candidates whose purpose is to NOT do something). Investigate whether the structural test ("does the defect block the candidate from doing what it's supposed to do?") cleanly handles negative-purpose candidates, or whether a separate articulation is needed.
- **Gate:** Condition-bound — revive if a structural-follow-up inquiry encounters a negative-purpose candidate where the existing articulation produces awkward verdicts.
- **Why (if revived):** Frontier extension. Currently flagged as unexplored region in the critique's coverage map; not load-bearing for the meaning-layer deliverable but worth examining if the case arises.

- **What:** Extend the meta-principle to candidates whose purpose evolves mid-evaluation. Investigate whether re-running Phase 2 (per current spec) is the right response, or whether a structured purpose-revision verdict is needed.
- **Gate:** Condition-bound — revive if a structural-follow-up inquiry encounters a purpose-evolution case.
- **Why (if revived):** Frontier extension. Same status as negative-purpose; named for completeness but not load-bearing now.

## Reasoning

### Why purpose-fitness over the composite-at-meta alternative

Sensemaking (Phase 3 — Ambiguity Collapse, Ambiguity 1) considered the alternative framing: severity is composite at the meta-level (severity × likelihood × blast-radius × reversibility × fixability × confidence). External canonical frameworks (safety SIL, software blast-radius, decision theory's asymmetric loss) all use composite structures. Was the choice of single-axis purpose-fitness over composite-at-meta legitimate?

The composite-at-meta alternative was tested via prosecution-and-defense (Innovation, P-META Inversion-candidate; Critique, A1). It failed on two grounds:

1. **Task-agnostic constraint failure.** A fixed N-axis composition can't be task-agnostic because the relative weights of the axes vary by domain. Reversibility matters more in software; blast-radius matters more in business strategy; deontological-violation matters in ethics. A meta-principle that mandates a fixed N-axis composition would either over-fit one domain or under-fit all of them.
2. **Practitioner-applicability failure.** Composite-at-meta requires per-axis judgment per candidate, with no single-step verdict. Purpose-fitness reduces to a single yes/no question.

The composite IS real — but it lives at the per-task calibration layer, not the meta-principle layer. The two layers are explicitly distinct in the finding (Section 4). The composite-at-meta framing was killed for over-collapsing per-task richness into the meta-level.

### Why the REFINE/KILL boundary is fixability-within-frame, not a confidence gradient

Innovation (P-REFINE-KILL-BOUNDARY) considered the alternative: REFINE and KILL are positional on a confidence-gradient (high-confidence-fix-exists = REFINE; low-confidence-fix-exists = KILL) rather than separated by a binary fixability-in-frame property. This was tested by Critique (B2) and failed Scrutiny.

The structural argument: the spec's existing landscape language (`td-critique.md` line 138 — *"boundary region"* vs *"dead region"*) is positional, not confidence-graded. Boundary = the candidate's existing frame can absorb a fix → REFINE. Dead = the candidate's frame itself produces the failure → KILL. Confidence-gradient framing would collapse the spec's existing positional distinction into a single verdict with a confidence-level. The positional distinction is structurally clean and externally grounded (software's refactoring-vs-rewrite distinction; research's methodology-fix-vs-hypothesis-rejection distinction). The confidence-gradient alternative didn't survive.

### Why confidence is orthogonal to severity, not a component

Innovation (P-CONFIDENCE-ORTHOGONALITY) considered the alternative: confidence is entangled with severity (severity = impact × confidence). This was tested by Critique (C2) and failed Mechanism-independence.

The structural argument: external canonical frameworks (statistical Type I/II errors; risk management impact-vs-uncertainty; medical sensitivity/specificity-vs-disease-severity) all keep evidence-strength and impact-strength STRUCTURALLY SEPARATE. Entanglement is a folk-judgment pattern, not a structural relationship. Naming the orthogonality is what enables practitioners to NOTICE entanglement in their own judgment and correct for it. The entanglement alternative didn't have independent external grounding; the orthogonality framing did.

### Why defer-with-direction was preferred over layer-aware-modification for ambiguous-purpose candidates

Innovation (P-FRONTIER-AMBIGUOUS-PURPOSE) generated two candidates. The primary was a layer-aware modification of the meta-principle ("would this candidate continue to support the exploratory inquiry?") that fired when the candidate's purpose is fuzzy. The inversion was defer-out-of-scope: critique declines to evaluate, directing the user back to `/sense-making`.

Critique (E1) found the inversion structurally cleaner: the layer-aware modification preserves the meta-principle's form but blurs at the boundary (when is a candidate "exploratory enough" to fire the modification?). Defer-out-of-scope eliminates the boundary ambiguity. However, defer-out-of-scope without operational extension is fragile (silent refusal). The refined version — **defer-with-direction** — makes the situation explicit: critique outputs a verdict naming the ambiguity AND directing the inquirer back to `/sense-making`. This was the outcome.

### Why the spec edit is COULD, not MUST

The user explicitly committed MEANING primary in `_branch.md`. The finding's articulation IS the deliverable. Whether to translate the articulation into a spec edit is a separate decision the user owns. NO-ACTION is structurally valid: the existing spec's implicit calibration (weighting + burden-of-proof + constructive-output) is operationally sufficient given the meta-principle is named in this finding for practitioners to reference. The structural-layer encoding adds spec-resident vocabulary but doesn't add new operational behavior the finding doesn't already enable.

### Self-reference mitigation

This inquiry IS critique applied to critique-design. The risk of Self-Reference Collapse (`td-critique.md` §4 failure mode #7) was structurally in scope throughout. Mitigation was mechanism-based, not just acknowledged:

- Every candidate's Mechanism Independence test (Innovation Phase 3) required external canonical grounding (safety SIL, blast-radius, asymmetric loss, Type I/II errors, etc.). Internal-logic-only candidates failed and were rejected. The external groundings collapse to ~3 frame families (engineering risk; statistical decision theory; corpus + 4-domain test); 3 independent families is structurally sufficient for the principle's grounding.
- The 4-domain test was adversarially extended to unsurveyed domains during Critique (legal contract review, scientific paper peer review, educational assessment, security review, ethics review). The principle held across all.
- The self-applicability check (Section 10) explicitly acknowledges its limitation (tautology risk on articulation-producing inquiries) and recommends external empirical validation (COULD #2) as the proper resolution.

Self-reference is present but externally grounded. Acceptable residual.

## Open Questions

### Monitoring

- **Adoption signal: which structural-follow-up option the user picks.** Option A (spec encoding) or Option B (NO-ACTION). The choice itself is information about whether the user expects future practitioner benefit from explicit spec text.
- **Empirical validation outcome.** If COULD #2 is run after COULD #1, the comparison of new vs original verdicts on closed inquiries reveals whether the principle adoption actually changes practitioner behavior. A no-change outcome would indicate either (a) the original verdicts were already implicitly using purpose-fitness, or (b) the principle adoption is under-applied. Both interpretations are valuable.

### Blocked

- **INTERIM verdict decision.** Whether `/td-critique` should add an INTERIM verdict for insufficient-evidence cases cannot be decided at the meaning-layer alone. It depends on whether SURVIVE-with-caveats is over-applied in practice (an observable that requires post-encoding runtime data). Blocked until COULD #1 is committed AND ~10 post-encoding invocations are observable.

### Research Frontiers

- **Negative-purpose candidates.** Whether the meta-principle cleanly handles candidates whose purpose is to NOT do something (e.g., "do no harm" purposes). Currently unexplored; flagged as frontier in Critique's coverage map.
- **Purpose-evolution candidates.** Whether the meta-principle handles candidates whose purpose changes mid-evaluation. Currently unexplored; same status.

### Refinement Triggers

- **If a fourth Axis Absence sub-mechanism is observed in the purpose-fitness application** (i.e., a case where purpose-fitness applied at Phase 0 step 4 misses a real failure axis that the failure rides on), the meta-principle's structural completeness needs re-examination.
- **If the empirical validation (COULD #2) reveals the principle's adoption produces > 20% verdict reversal on closed inquiries** — meaning the original critique's severity-calibration diverged significantly from the principle — investigate whether the divergences are (a) original-critique errors corrected by the principle (validates adoption), (b) principle over-application (false-positive killings; signals nitpicking-creep), or (c) a structurally novel axis the principle doesn't cover (signals refinement need).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
u said

It's named "nitpicking-creep" specifically because the failure mode #3 already in td-critique.md §4 — Nitpicking ("every
  candidate gets killed on minor issues") — is the existing critique failure that the new check could inadvertently feed if
  it grows too eager.

but then we should be more smart and have a better understanding of what gets to be killed , what counts as a small ...
but in a meta and task agnostic case agnostic way?

lets dive deep into this
```

</details>
