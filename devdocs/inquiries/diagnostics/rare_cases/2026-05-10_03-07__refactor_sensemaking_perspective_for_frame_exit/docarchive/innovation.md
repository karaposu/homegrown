# Innovation: Refactor a Sensemaking perspective into 2 to catch frame-exit?

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/_branch.md`

> **Question:** Refactor candidate? Split design? Non-hurt? Recommendation?
>
> **Goal:** Recommendation that respects user's two MUST conditions (gap is real; generic capability not hurt) AND `homegrown/protocols/loop_diagnose.md` Step 5 (defer from N=1).

This is a drill-down. Per Decomposition's note: minimum mechanism coverage suffices; commit P1-P4 directly.

---

## Seed and Direction

- **Seed: gap.** D/C's broad spec scope is partially implemented; frame-exit completeness is not first-class.
- **Intuition direction:** spec parsimony (refactor preferable to addition); user's frame-exit framing of THIS question is itself the external evidence the design needs.

---

## Phase 2 — Generate (focused mechanism work on spec text)

Per Decomposition: minimum mechanism coverage on the new spec text. I apply 2 mechanisms (1 framer + 1 generator).

### Mechanism 1 — Inversion (Framer): test the gating predicate

**Inversion 1.1 — disjunctive gating (OR instead of AND).** What if the predicate were "inherited terms OR organizing frames" instead of "inherited terms AND organizing frames"? Fires more aggressively. Counter: spurious fire on code reviews using a function name from a prior PR (inherited, but no organizing frame). Conclusion: keep CONJUNCTIVE.

**Inversion 1.2 — unconditional perspective.** What if Frame-exit Completeness fires always? Counter: noise on simple inquiries; cost across all Sensemaking runs. Conclusion: keep CONDITIONAL.

**Inversion 1.3 — invert the predicate (skip when condition holds).** What if we say "skip when the inquiry has NO inherited multi-value terms"? Same behavior, different wording. Slightly more user-friendly but functionally identical. Conclusion: positive-formulation (when condition is TRUE, fire) is the standard spec idiom. Keep.

**Inversion result:** the proposed conjunctive gating predicate is structurally correct. Confirms the design.

### Mechanism 2 — Domain Transfer (Generator): does "consistency vs completeness" hold elsewhere?

**Transfer 2.1 — software code review.** Code reviews distinguish "is this function correct?" (consistency) from "does this function handle all cases?" (completeness). Two distinct checks. Transfer: D/C's split into Internal Consistency vs Frame-exit Completeness mirrors this established distinction.

**Transfer 2.2 — mathematical proof.** Proofs distinguish "does the proof not contradict itself?" (consistency) from "does the proof cover all cases?" (completeness). Different operations.

**Transfer 2.3 — set theory / formal logic.** "Consistency" (axioms don't contradict) and "completeness" (axioms prove all true statements) are formally distinct. The conceptual separation is canonical.

**Domain Transfer result:** Internal Consistency vs Frame-exit Completeness is a field-coherent distinction. Naming them separately matches established terminology in software, mathematics, and formal logic. Strong support for the split.

---

## Phase 3 — Test (5-test cycle on the drafted sub-perspective spec text)

| Test | Result |
|---|---|
| **Novelty** | Partial — the consistency-vs-completeness distinction is established in other fields; novelty is its application to Sensemaking's perspective list. |
| **Scrutiny survival** | Strong — survives Inversion (disjunctive too aggressive; unconditional too noisy) and confirms via Domain Transfer (3 fields support the distinction). |
| **Fertility** | Strong — opens the question of whether other Sensemaking spec sections (Phase 1 anchors, Phase 3 ambiguity collapse) might also have implicit completeness checks worth making explicit. |
| **Actionability** | Strong — concrete spec text drafts produced (P1 below). |
| **Mechanism independence** | Strong — Inversion + Domain Transfer both confirm the design. |

**Disposition: ACTIONABLE in form; DEFERRED in commitment** per loop_diagnose Step 5 (N=1).

---

## P1 — Refactor design (committed)

### Refactor candidate

**Definitional / Consistency** is THE refactor candidate. Evidence: spec text at `homegrown/sense-making/references/sensemaking.md` line 213 bundles 3 distinct cognitive jobs:
- (a) Forward consistency: *"Does this interpretation contradict any established definitions, principles, or prior stabilized models?"*
- (b) Anchor-strength weighting: *"Check the claim against the strongest known anchors. If a weak anchor contradicts a strong anchor, the weak anchor must justify the override."*
- (c) Reverse self-consistency: *"But also check the reverse: does the established definition contradict ITSELF? Does its stated purpose align with its actual mechanisms?"*

These 3 jobs are all CONSISTENCY checks. The spec phrase *"established definitions, principles, or prior stabilized models"* is broad — reasonably reads as project-wide — but the 3 operationalized jobs all check consistency, not completeness. Frame-exit completeness is the missing 4th cognitive move that D/C's broad spec implies but doesn't operationalize.

The other 7 perspectives (Technical/Logical, Human/User, Strategic/Long-term, Risk/Failure, Resource/Feasibility, Ethical/Systemic, Phase/Calibration-State) are single-mode. None has D/C's structural overload.

### Split design (drafted spec text)

The proposed refactor replaces the existing D/C bullet at line 213 with TWO bullets:

**`* Definitional / Internal Consistency`** — Does this interpretation contradict any established definitions, principles, or prior stabilized models WITHIN the inquiry's frame? Check the claim against the strongest known anchors. If a weak anchor (observation, single data point) contradicts a strong anchor (definition, tested principle), the weak anchor must justify the override — not the other way around. But also check the reverse: does the established definition contradict ITSELF? Does its stated purpose align with its actual mechanisms? If a definition's own components are in tension — its core claim promises more than its structure delivers — the definition has an internal gap. Don't protect a definition that contradicts itself.

**`* Definitional / Frame-exit Completeness`** (when the inquiry has inherited multi-value terms or organizing frames) — Does the inquiry's frame's anchor-set EXCLUDE referents that exist project-wide? Specifically: for terms inherited from prior findings, framing-level commitments, or upstream taxonomies, AND used across multiple values/levels (e.g., 2+ rows of a multi-row table; 2+ levels of a ladder; 2+ axes of a multi-axial frame), ask: *"what does this term refer to project-wide, regardless of this inquiry's frame? Does the project have artifacts/usages of this term that the frame's scope doesn't account for?"* For example: if the inquiry inherits a term like "Memory" from a prior session-architecture finding and uses it across multiple levels of a ladder, ask whether "Memory" has project-wide referents (e.g., per-inquiry md files written by `/MVL` or `/MVL+` runners) that the meta-loop frame's scope excludes. Failing to apply this perspective when the inquiry has inherited multi-value terms or organizing frames is an instance of Perspective Blindness (failure mode #4) applied to the frame-exit axis.

### Gating predicate (specified concretely)

The Frame-exit Completeness sub-perspective fires WHEN BOTH:
- **Condition (i):** the inquiry's commitments include terms inherited from prior findings, framing-level commitments, or upstream taxonomies. ("Inherited" = appearing in the inquiry's `_branch.md` framing OR in a prior finding referenced via the inquiry's `_state.md` Relationships section.)
- **Condition (ii):** those inherited terms are used across multiple values/levels — operationalized as ≥2 distinct values of the term in the inquiry's commitments (≥2 rows of a multi-row table; ≥2 levels of a ladder; ≥2 axes of a multi-axial frame; ≥2 entries of a typed taxonomy).

If either condition is FALSE, the sub-perspective is skipped. The gating uses Phase/Calibration-State's existing conditional pattern (per `homegrown/sense-making/references/sensemaking.md` line 214), so it's idiom-consistent with the spec.

---

## P2 — Non-hurt argument (committed)

**Claim:** the proposed refactor's gating predicate auto-skips on non-frame-bounded inquiries; generic Sensemaking capability is preserved.

**Argument:**

A non-frame-bounded inquiry is one where the conjunctive gating predicate yields FALSE — i.e., the inquiry has no inherited multi-value terms AND no organizing frames. Examples:

- **Code review** of a single function. No inherited terms (the function-name might be referenced in PRs but isn't "inherited" in the sense of being committed across multiple values/levels of THIS inquiry). No organizing frame (the inquiry's commitment is a single recommendation, not a multi-row table or ladder). Gating: FALSE. Sub-perspective skipped. Cost: zero.

- **Bug diagnosis** with a specific reproducible bug. No inherited multi-value terms. No frame. Gating: FALSE. Skipped. Cost: zero.

- **Concrete strategic decision** with a finite option set (e.g., "should we choose option A or B?"). Options are values BUT they are typically NOT inherited from prior findings (they're generated for this decision). Even if they were inherited, they're not "multi-value of one term" — they're a list of alternatives. Gating: FALSE. Skipped. Cost: zero.

- **A research question** with no organizing frame. Same — gating FALSE; skipped.

For frame-bounded inquiries (e.g., the metaloop-ladder design with 6 levels × 9 axes; or this very drill-down inquiry which inherits "Sensemaking perspectives" across 8 perspectives), the gating fires and the sub-perspective applies. This is the intended firing.

**Risk:** subjective gating could over-fire under loose interpretation. Mitigation: the conjunctive (AND) structure tightens the gating; spec-text examples (positive: Memory in metaloop ladder; negative: code review function-name) ground the predicate.

**Empirical-validation path:** post-revival deployment, monitor next 5 Sensemaking outputs across inquiry types. If 0/5 frame-bounded inquiries fire the sub-perspective, gating is too narrow. If 5/5 non-frame-bounded inquiries fire it, gating is too broad. Calibration: 1-3/5 fire on real frame-bounded inquiries; 0/5 fire on non-frame-bounded inquiries.

**Verdict on user MUST condition (b):** generic capability NOT hurt under the proposed gating predicate.

---

## P3 — Refactor vs prior M7 comparison (committed)

The prior loop_diagnose finding (`devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md`) proposed M7 = add a NEW perspective ("Frame-exit") to Sensemaking Phase 2. The current drill-down (`devdocs/inquiries/2026-05-10_01-21__why_sensemaking_missed_memory_disambiguation/finding.md`) reaffirmed M7 as DEFERRED.

This inquiry proposes refactoring D/C into two sub-perspectives instead. **The two paths produce structurally equivalent net behavior**: in both cases, Sensemaking Phase 2 ends up with a frame-exit operation that's gated on inherited multi-value terms.

| Dimension | Refactor (this inquiry) | Add new perspective (prior M7) |
|---|---|---|
| Structural net behavior | Frame-exit operation in Sensemaking Phase 2 | Frame-exit operation in Sensemaking Phase 2 |
| Spec-text edit | Replace 1 bullet (D/C) with 2 bullets (Internal Consistency + Frame-exit Completeness) | Add 1 new bullet (Frame-exit) to existing 8 perspectives |
| Naming pattern | Uses 2-level "Definitional / X" pattern (matches spec's existing pattern) | New top-level perspective (also matches spec's existing pattern) |
| Conceptual framing | Honors D/C's existing broad spec; clarifies scope | Asserts a missing capability |
| Application-time recognition | Better (each scope has its own name; broader scope visible) | Equivalent (new perspective explicitly named) |
| Risk of dilution | Lower — refactor honors existing spec text | Lower — addition doesn't change existing spec |
| Spec parsimony | Higher (no net new perspectives at top level) | Lower (one more top-level perspective) |
| Non-hurt under gating | Both equivalent under conjunctive gating | Same |

**Recommendation:** refactor preferable for honoring D/C's existing broad spec and for spec parsimony. M7 (add new perspective) remains a defensible alternative if the user prefers flat-list framing.

If the refactor is adopted, the prior M7 from `2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md` is superseded. Both candidates share the same revival trigger (M4 audit ≥3 instances).

---

## P4 — Commitment + Recommendation (committed)

**Commitment status: DEFERRED** per `homegrown/protocols/loop_diagnose.md` Step 5.

**Justification:**
- The user's MUST conditions are MET: gap is real (D/C broad spec implies frame-exit; verified via spec-text reading + the Memory failure as evidence); generic capability not hurt (P2's non-hurt argument under conjunctive gating).
- The design analysis is structurally compelling (Inversion + Domain Transfer both confirm; field-coherent distinction in software, mathematics, formal logic).
- BUT: per Step 5 spirit ("do not propose broad fundamentals rewrites from one weak correction chain"), N=1 evidence does not justify shipping a spec change. The Sensemaking spec is a load-bearing project file; the precaution applies.
- The user explicitly asked for caution ("only if it is a real missing thing, and if it is not gonna be hurt sensemaking's generic capability for sure"). DEFERRED honors this.

**Revival trigger:** condition-bound — M4 audit (from `devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md`) produces ≥3 instances of frame-scope-capture-like patterns across distinct inquiries. Specifically: instances where a Sensemaking inquiry inherited a term from a prior finding, the term had multiple project-wide meanings, and the inquiry's frame settled the term's meaning to one without testing the others.

**At revival:** prefer the refactor (this inquiry's design) over the prior M7 (add new perspective). Update the prior loop_diagnose finding's deferred-candidates list — replace M7 with "refactor D/C per `2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md`" and note M7 as the alternative.

**Final recommendation:**
1. **Now (no spec change):** keep all DEFERRED candidates (M2, M3, M7 from prior; this refactor from now) in the deferred pool sharing the M4-audit revival trigger.
2. **At M4 audit completion:** if ≥3 instances confirm the broader pattern, escalate this refactor (or M7 if the user prefers the alternative framing) to ACTIONABLE.
3. **Continue using existing M1, M5, M6** (the prior loop_diagnose's actionable candidates) as downstream safety-net + baseline-row scrutiny + glossary infrastructure.
4. **No changes to the Sensemaking spec right now.** The design analysis is the deliverable; the spec change waits for evidence.

---

## Mechanism Coverage Telemetry

- **Generators applied:** 1/4 (Domain Transfer with 3 sub-variations) — confirmed the consistency-vs-completeness distinction across software, mathematics, formal logic.
- **Framers applied:** 1/3 (Inversion with 3 sub-variations) — confirmed conjunctive gating; rejected disjunctive and unconditional alternatives.
- **Convergence:** YES — both mechanisms support the design without divergence.
- **Survivors tested:** 1/1 (the drafted refactor design).
- **Failure modes observed:** None.
  - Premature evaluation: avoided.
  - Single-mechanism trap: avoided.
  - Early frame lock: avoided.
  - Innovation without grounding: avoided.
  - Mechanism exhaustion: avoided.
  - Survival bias: checked — Inversion 1.1 (disjunctive) was structurally weaker but tested fairly; rejected on merits, not comfort.

**Overall: PROCEED.** Minimum coverage met; all 4 pieces (P1-P4) committed; design DEFERRED per Step 5 with concrete revival trigger.
