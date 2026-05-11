---
status: active
refines: devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md
continues_from: devdocs/inquiries/2026-05-10_01-21__why_sensemaking_missed_memory_disambiguation/finding.md
---
# Finding: Refactor a Sensemaking perspective into 2 to catch frame-exit?

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md` (which committed M7 = "add a new Frame-exit perspective to Sensemaking Phase 2," DEFERRED per loop_diagnose Step 5).

**Revision trigger:** the user proposed an alternative shape — "maybe one of the perspectives can be refactored into 2 perspectives which would allow catching such things?" — with two MUST conditions: (a) gap must be real, (b) generic capability must not be hurt. This finding tests the alternative.

**What's preserved:** the prior loop_diagnose finding's full maintenance pool (M1, M2, M3, M4, M5, M6) is unchanged. The prior drill-down's chain attribution (5-link causal chain inside Sensemaking with link 4 frame-scope capture as primary) is preserved as the rationale for needing a frame-exit catch-point at all.

**What's changed:** the prior M7 is **superseded** by this finding's refactor proposal. Both share the same revival trigger (M4 audit ≥3 instances). M7 stays in the deferred pool as a defensible alternative if the user prefers flat-list framing.

**What's new:** identification of **Definitional / Consistency** as a refactor candidate; drafted spec text for **Definitional / Internal Consistency** + **Definitional / Frame-exit Completeness** sub-perspectives; concrete conjunctive gating predicate; non-hurt argument with empirical-validation path.

**Migration:** at revival (M4 audit confirms recurrence), update `homegrown/sense-making/references/sensemaking.md` Phase 2 perspective list to replace the existing D/C bullet with the two new bullets per this finding. The prior M7's wording becomes a fallback only if the user decides flat-list addition is preferable.

## Question

> Given the prior drill-down identified that Sensemaking's 7 Phase-2 perspectives all operate WITHIN the inquiry's frame and the missing move is **frame-exit perspective** — and given the prior loop_diagnose proposed adding a NEW perspective (M7) but DEFERRED it — **is one of the existing perspectives doing two distinct cognitive jobs that could be refactored into 2 perspectives**, where the split would (a) make frame-exit checking a first-class operation and (b) NOT hurt Sensemaking's generic capability across non-frame-bounded inquiries?

## Goal

A clear answer with three parts: (1) identify any real refactor candidate; (2) show the refactor closes the frame-scope-capture gap without hurting generic capability; (3) recommendation respects `homegrown/protocols/loop_diagnose.md` Step 5 (defer from N=1).

The user must be able to decide: revise the prior loop_diagnose's M7 from "add new perspective" to "refactor existing perspective into 2," or keep M7 as-is.

---

## Finding Summary

- **Yes — Definitional / Consistency is the refactor candidate.** It's the only one of the 8 existing Phase-2 perspectives whose spec text bundles 3 distinct cognitive jobs (forward consistency, anchor-strength weighting, reverse self-consistency). The other 7 perspectives are single-mode and not refactor candidates.

- **The split: D/C → Definitional / Internal Consistency + Definitional / Frame-exit Completeness.** Internal Consistency preserves the 3 existing jobs scoped explicitly to within-inquiry stabilized models. Frame-exit Completeness is a conditional sub-perspective (gated like the existing Phase / Calibration-State pattern) that operationalizes the broad scope D/C's spec text already implies but doesn't currently make explicit.

- **The refactor is substantive (not just renaming).** It bundles three changes: (a) renaming for application-time recognition, (b) a conditional gating predicate that triggers the new sub-perspective, (c) explicit scope-clarification in the existing sub-perspective. Each component alone is small; the bundle is meaningful — the application-time recognition gap that produced the L0 Memory failure becomes much harder to repeat.

- **User MUST condition (a) — gap is real:** YES. D/C's spec phrase *"established definitions, principles, or prior stabilized models"* is broad — reasonably reads as project-wide. But the application has narrowed it to within-inquiry stabilized models in practice (verifiable via the prior `docarchive/sensemaking.md` line 115 example). The split makes the broad scope explicit so application-time narrowing becomes self-evidently incomplete.

- **User MUST condition (b) — generic capability not hurt:** YES, under the proposed conjunctive gating predicate. The Frame-exit Completeness sub-perspective fires WHEN BOTH (i) the inquiry has terms inherited from prior findings/framing-level commitments, AND (ii) those terms are used across multiple values/levels within the inquiry's own committed structures (multi-row tables, ladders, axes, taxonomies — NOT in artifacts the inquiry analyzes). On non-frame-bounded inquiries (code review of a single function, bug diagnosis with reproducible steps, concrete strategic decision, open-ended research question), the gating yields FALSE → sub-perspective skips → cost zero.

- **Refactor vs prior M7:** structurally equivalent in net behavior; refactor preferable for honoring D/C's existing broad spec. M7 (add a new top-level "Frame-exit" perspective) remains a defensible alternative if the user prefers flat-list framing. Both share the same revival trigger.

- **Commitment status: DEFERRED per `homegrown/protocols/loop_diagnose.md` Step 5.** Even though the design analysis is structurally compelling, N=1 evidence does not justify shipping a spec change to a load-bearing project file. The user explicitly asked for caution. The audit IS the project's evidence-discipline mechanism — bypassing it would undermine the protocol the project itself defines.

- **Revival trigger:** M4 audit (from the prior loop_diagnose) produces ≥3 instances of frame-scope-capture-like patterns across distinct inquiries. At revival, prefer the refactor; M7 stays as deprecated alternative.

- **Self-reference resistance verified.** Applying the drafted Frame-exit Completeness perspective to THIS very inquiry (which has inherited multi-value terms — "Sensemaking perspectives" — and an organizing frame — the 8-perspective list) yields a non-trivial, falsifiable result: "Sensemaking spec has project-wide referents (Phase 1 anchors, Phase 3 ambiguity collapse, Phase 4 DOF, Phase 5 stabilization, failure modes) outside this inquiry's Phase-2 frame." The inquiry's `_branch.md` explicitly bounded scope to Phase 2; the meta-application correctly identifies that the bounding is intentional. The design is self-applicable AND produces meaningful results — validates the design substantively.

---

## Finding

### Surrounding context

This is the fourth finding in a sequence:

1. `devdocs/inquiries/2026-05-09_18-23__metaloop_autonomy_ladder_and_open_design_questions/finding.md` — original metaloop-ladder design with the L0 Memory misclassification.
2. `devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md` — first-pass diagnostic. Identified Sensemaking primary fault by spec-charter; committed M7 (DEFERRED) as "add new Frame-exit perspective."
3. `devdocs/inquiries/2026-05-10_01-21__why_sensemaking_missed_memory_disambiguation/finding.md` — drill-down. Isolated link 4 (frame-scope capture / Perspective Blindness on frame-exit) as PRIMARY; reaffirmed M7 as DEFERRED.
4. **This finding** — tests the alternative shape (refactor existing perspective into 2 vs add new perspective).

The reasoning engine is MVL+ (E → S → D → I → C). The drill-down's narrow scope allowed minimum mechanism coverage in Innovation per Decomposition's note.

### 1. The refactor candidate (with evidence)

The 8 Phase-2 perspectives in `homegrown/sense-making/references/sensemaking.md` (lines 207-214):

| # | Perspective | Spec-text bundled jobs | Refactor candidacy |
|---|---|---|---|
| 1 | Technical / Logical | Single mode (technical correctness, logical structure) | NOT a candidate |
| 2 | Human / User | Single mode (user-of-the-deliverable) | NOT a strong candidate |
| 3 | Strategic / Long-term | Single mode (long-term consequences) | NOT a candidate |
| 4 | Risk / Failure | Single mode (failure modes and risks) | NOT a candidate |
| 5 | Resource / Feasibility | Single mode (resource constraints) | NOT a candidate |
| 6 | Ethical / Systemic (conditional) | Single mode (when applied) | NOT a candidate |
| 7 | **Definitional / Consistency** | **3 distinct jobs bundled:** (a) forward consistency: *"Does this interpretation contradict any established definitions, principles, or prior stabilized models?"* (b) anchor-strength weighting: *"If a weak anchor contradicts a strong anchor, the weak anchor must justify the override."* (c) reverse self-consistency: *"does the established definition contradict ITSELF?"* | **STRONG candidate** |
| 8 | Phase / Calibration-State (conditional) | Single coherent move with sub-questions | NOT a strong candidate |

**Why D/C is structurally overloaded:** the 3 existing jobs are all CONSISTENCY checks. The spec phrase *"established definitions, principles, or prior stabilized models"* is broad — reasonably reads as project-wide — but the operationalized 3 jobs all check consistency, not completeness. **Frame-exit completeness is the missing 4th cognitive move that D/C's broad spec implies but doesn't operationalize.**

The Memory failure's prior `docarchive/sensemaking.md` line 115 demonstrates the narrowing in action:
> Tested: does the proposal's "Memory as 7th axis" contradict `_meta_state.md` already being the project's memory artifact?
> Resolved: No — `_meta_state.md` is the artifact; the axis is whether the system READS/WRITES it autonomously vs. a human curating it.

The application tested against `_meta_state.md` (a within-frame artifact) but not against the project's broader memory-bearing artifacts (per-inquiry md files written by `/MVL` and `/MVL+` runners at every level). The spec is broad; the application was narrow.

### 2. The split design (drafted spec text)

The proposed refactor replaces D/C's existing bullet at line 213 of `homegrown/sense-making/references/sensemaking.md` with TWO bullets:

#### Definitional / Internal Consistency

> Does this interpretation contradict any established definitions, principles, or prior stabilized models WITHIN the inquiry's frame? Check the claim against the strongest known anchors. If a weak anchor (observation, single data point) contradicts a strong anchor (definition, tested principle), the weak anchor must justify the override — not the other way around. But also check the reverse: does the established definition contradict ITSELF? Does its stated purpose align with its actual mechanisms? If a definition's own components are in tension — its core claim promises more than its structure delivers — the definition has an internal gap. Don't protect a definition that contradicts itself.

This sub-perspective preserves D/C's existing 3 cognitive jobs (forward consistency, anchor-strength weighting, reverse self-consistency). The substantive change is one phrase added: *"WITHIN the inquiry's frame"* — making the scope explicit so the broader scope (handled by the second sub-perspective) becomes self-evidently distinct.

#### Definitional / Frame-exit Completeness (when the inquiry has inherited multi-value terms or organizing frames)

> Does the inquiry's frame's anchor-set EXCLUDE referents that exist project-wide? Specifically: for terms inherited from prior findings, framing-level commitments, or upstream taxonomies, AND used across **≥2 distinct values/levels within the inquiry's own committed structures** (where 'distinct' means used to assert different propositions in different cells/levels — NOT multiple occurrences of the same proposition; and 'committed structures' means multi-row tables, ladders, axes, or taxonomies the inquiry itself produces — NOT artifacts the inquiry analyzes), ask: *"what does this term refer to project-wide, regardless of this inquiry's frame? Does the project have artifacts/usages of this term that the frame's scope doesn't account for?"*
>
> *Example (positive — fires):* if the inquiry inherits "Memory" from a prior session-architecture finding and uses it as the column header of a multi-row ladder table where L0 Memory = "human (mental)" and L1 Memory = "system writes navigation_observer.md" (distinct propositions), ask: does "Memory" have project-wide referents (e.g., per-inquiry md files written by `/MVL` or `/MVL+` runners) the meta-loop frame's scope excludes? *Example (negative — does not fire):* a code review where a function-name "authenticate" appears in 2 call sites with the same meaning is NOT distinct propositions; the gating predicate yields FALSE.
>
> Failing to apply this perspective when the inquiry has inherited multi-value terms in committed organizing structures is an instance of Perspective Blindness (failure mode #4) applied to the frame-exit axis.

The bracketed clarifications (distinct values, within committed structures) are added per Critique's caveats to make the spec text operationally tight.

#### What this looks like as a concrete spec edit

For clarity, here is the BEFORE → AFTER diff against the spec file `/Users/ns/.claude/skills/sense-making/references/sensemaking.md`. The edit is at line 213 of Phase 2 — Perspective Checking. **Operation:** delete one bullet, insert two bullets.

**BEFORE (current spec text — single bullet):**

```text
* Definitional / Consistency — Does this interpretation contradict any established definitions, principles, or prior stabilized models? Check the claim against the strongest known anchors. If a weak anchor (observation, single data point) contradicts a strong anchor (definition, tested principle), the weak anchor must justify the override — not the other way around. But also check the reverse: does the established definition contradict ITSELF? Does its stated purpose align with its actual mechanisms? If a definition's own components are in tension — its core claim promises more than its structure delivers — the definition has an internal gap. Don't protect a definition that contradicts itself.
```

**AFTER (two bullets replacing one):**

```text
* Definitional / Internal Consistency — Does this interpretation contradict any established definitions, principles, or prior stabilized models WITHIN the inquiry's frame? Check the claim against the strongest known anchors. If a weak anchor (observation, single data point) contradicts a strong anchor (definition, tested principle), the weak anchor must justify the override — not the other way around. But also check the reverse: does the established definition contradict ITSELF? Does its stated purpose align with its actual mechanisms? If a definition's own components are in tension — its core claim promises more than its structure delivers — the definition has an internal gap. Don't protect a definition that contradicts itself.

* Definitional / Frame-exit Completeness (when the inquiry has inherited multi-value terms in its own committed structures) — Does the inquiry's frame's anchor-set EXCLUDE referents that exist project-wide? For terms inherited from prior findings, framing-level commitments, or upstream taxonomies, AND used across ≥2 distinct values/levels within the inquiry's own committed structures (multi-row tables, ladders, axes, typed taxonomies — NOT in artifacts the inquiry analyzes; "distinct" = used to assert different propositions in different cells/levels, NOT multiple occurrences of the same proposition), ask: "what does this term refer to project-wide, regardless of this inquiry's frame? Does the project have artifacts/usages of this term that the frame's scope doesn't account for?" Example (positive — fires): a metaloop-ladder inquiry inherits "Memory" from a prior session-architecture finding and uses it across 6 levels with distinct propositions per row; the check fires and asks whether "Memory" has project-wide referents (e.g., per-inquiry md files written by /MVL or /MVL+ runners) that the meta-loop frame's scope excludes. Example (negative — does not fire): a code review where a function-name "authenticate" appears in 2 call sites with the same meaning is NOT distinct propositions; the gating predicate yields FALSE. Failing to apply this perspective when the inquiry has inherited multi-value terms in its own committed structures is an instance of Perspective Blindness (failure mode #4) applied to the frame-exit axis.
```

**What's actually different (only two changes):**

1. *In the renamed first bullet (`Internal Consistency`):* added the words `WITHIN the inquiry's frame` after "stabilized models." Everything else is identical to the existing D/C text. Purpose: makes the scope explicit so the second bullet's broader scope is self-evidently distinct.
2. *The second bullet (`Frame-exit Completeness`) is entirely new* — operationalizes the broad scope D/C's existing wording already implies but doesn't currently make explicit. Conditional gating (parenthesized header) follows the spec's existing pattern at line 214 (`Phase / Calibration-State (when the inquiry involves rules…)`).

**Action item today: NONE on the spec.** The edit is DEFERRED per `homegrown/protocols/loop_diagnose.md` Step 5 — N=1 evidence (the Memory failure) does not justify shipping a change to a load-bearing project file. The edit revives when M4 audit produces ≥3 instances of frame-scope-capture-like patterns across distinct inquiries. Until then, the spec stays as-is.

### 3. The conjunctive gating predicate

The Frame-exit Completeness sub-perspective fires WHEN BOTH:

- **Condition (i):** the inquiry's commitments include terms inherited from prior findings (referenced via the inquiry's `_state.md` Relationships section) OR from framing-level commitments (in the inquiry's own `_branch.md`) OR from upstream taxonomies.
- **Condition (ii):** those inherited terms are used across ≥2 distinct values/levels WITHIN the inquiry's own committed structures (multi-row tables, ladders, axes, typed taxonomies). "Distinct" means used to assert different propositions in different cells/levels.

If either condition is FALSE, the sub-perspective is skipped. The pattern is analogous to the spec's existing `Phase / Calibration-State (when the inquiry involves rules that may behave differently in different project phases or calibration states)` conditional pattern — uses the same idiom for spec consistency.

### 4. Non-hurt argument

The conjunctive gating predicate auto-skips on non-frame-bounded inquiries:

| Inquiry type | Condition (i) inherited terms? | Condition (ii) committed multi-value structures? | Gating | Cost |
|---|---|---|---|---|
| Code review of a single function | NO (or YES from prior PRs but not committed in THIS inquiry) | NO (no multi-row table or ladder; the inquiry's commitment is a single recommendation) | FALSE | Zero |
| Bug diagnosis (specific reproducible bug) | NO | NO | FALSE | Zero |
| Concrete strategic decision (option A vs B) | NO (options generated for the decision) | NO (option list is not a multi-value structure of one term) | FALSE | Zero |
| Open-ended research question | NO | NO | FALSE | Zero |
| **Metaloop-ladder design** (the failure case) | **YES** (Memory inherited from prior session-architecture finding) | **YES** (used across 6 levels of the role-allocation table with distinct propositions per row) | **TRUE** | Sub-perspective fires; catches frame-scope capture |
| **This inquiry** (meta-application test) | **YES** ("Sensemaking perspectives" inherited from spec) | **YES** (analyzed across the 8-perspective list with distinct claims per perspective) | **TRUE** | Sub-perspective fires; produces meaningful result |

For non-frame-bounded inquiries, the gating yields FALSE; the sub-perspective skips. **Generic Sensemaking capability is preserved.**

**Risk:** subjective gating could over-fire under loose interpretation. **Mitigation:** the conjunctive (AND) structure tightens application; spec-text examples (positive: Memory; negative: function-name) ground the predicate. Empirical-validation path (post-revival): monitor next 5 Sensemaking outputs across inquiry types — calibrate. If 0/5 frame-bounded inquiries fire the sub-perspective, gating is too narrow. If 5/5 non-frame-bounded inquiries fire, too broad. Calibration: 1-3/5 fire on real frame-bounded; 0/5 fire on non-frame-bounded.

### 5. Refactor vs prior M7 comparison

| Dimension | Refactor (this inquiry) | Add new perspective (prior M7) |
|---|---|---|
| Structural net behavior | Frame-exit operation in Sensemaking Phase 2 | Frame-exit operation in Sensemaking Phase 2 |
| Spec-text edit | Replace 1 bullet (D/C) with 2 bullets (Internal Consistency + Frame-exit Completeness) | Add 1 new bullet (Frame-exit) to the existing 8 perspectives |
| Naming pattern | Uses 2-level "Definitional / X" pattern (matches spec's existing pattern: Technical/Logical, Risk/Failure, etc.) | New top-level perspective (also matches spec's existing pattern) |
| Conceptual framing | Honors D/C's existing broad spec; clarifies scope | Asserts a missing capability |
| Application-time recognition | Better (each scope has its own name; broader scope visible in spec text) | Equivalent (new perspective explicitly named) |
| Spec parsimony | Higher (no net new perspectives at top level) | Lower (one more top-level perspective) |
| Non-hurt under gating | Equivalent (both can use the same conjunctive gating predicate) | Equivalent |
| External-domain support | Strong — consistency-vs-completeness is a field-coherent distinction in software code review, mathematical proof, and formal logic (set theory) | Weaker — "frame-exit" is a project-internal label without established external grounding |

**Recommendation: refactor preferable** for honoring D/C's existing broad spec, for spec parsimony, and for external-domain support (the consistency-vs-completeness distinction is canonical in adjacent fields).

**M7 remains acceptable alternative** if the user prefers a flat top-level perspective list. If M7 is chosen, the design is otherwise structurally equivalent — the same gating predicate, the same examples, the same revival trigger.

### 6. Self-reference verification (meta-application of the design)

A meta-application test: apply the drafted Frame-exit Completeness perspective to THIS inquiry.

- **Condition (i) — inherited multi-value terms?** YES. "Sensemaking perspectives" is inherited from `homegrown/sense-making/references/sensemaking.md`; "Definitional / Consistency" is inherited from the spec; multiple terms are referenced from prior loop_diagnose findings.
- **Condition (ii) — used across ≥2 distinct values/levels in committed structures?** YES. The inquiry analyzes 8 perspectives in a typed structure (the perspective comparison table); each perspective has a distinct claim.
- **Gating fires.**
- **Frame-exit Completeness check:** does "Sensemaking spec" have project-wide referents the inquiry's frame excludes? **YES** — the spec also has Phase 1 (anchor types), Phase 3 (ambiguity collapse), Phase 4 (DOF reduction), Phase 5 (stabilization), and 6 failure modes. The inquiry's `_branch.md` explicitly bounded scope to Phase 2 perspectives only.

The meta-application produces a NON-TRIVIAL, FALSIFIABLE RESULT: it correctly identifies that this inquiry's analysis is bounded to Phase 2 and surfaces the broader question (do other Sensemaking spec sections have analogous needs?). The bounding is acknowledged in Exploration's "What was NOT explored" section.

This is strong validation: the design is self-applicable AND produces meaningful results — not trivial self-validation. Self-reference collapse is mitigated.

---

## Next Actions

### MUST

- **What:** Update `devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md`'s deferred-candidates list — replace the current M7 entry ("add new Frame-exit perspective") with a reference to this finding's refactor proposal. Note M7 (add new perspective) as the alternative.
  **Who:** future small inquiry or direct edit.
  **Gate:** observable — when the user next revisits the prior loop_diagnose finding's Next Actions / DEFERRED list.
  **Why:** keeps the deferred-candidates pool current; prevents the user from accidentally choosing M7 over the refactor when both target the same gap.

### COULD

- **What:** Investigate whether other Sensemaking spec sections (Phase 1 anchor types, Phase 3 ambiguity collapse, Phase 4 DOF reduction, Phase 5 stabilization) have analogous "broadly-spec'd-but-narrowly-applied" patterns worth refactoring.
  **Who:** future MVL+ inquiry.
  **Gate:** condition-bound — when M4 audit completes and produces evidence of recurrence beyond Memory; AND when there's bandwidth for spec maintenance work.
  **Why:** the meta-application of this finding's design surfaced the question; addressing it requires its own scope and evidence base.

### DEFERRED

- **What:** Apply the refactor — replace D/C's existing bullet in `homegrown/sense-making/references/sensemaking.md` Phase 2 with the two drafted sub-perspective bullets.
  **Gate:** condition-bound — M4 audit (from prior loop_diagnose) produces ≥3 instances of frame-scope-capture-like patterns across distinct inquiries.
  **Why if revived:** closes the primary causal mechanism (frame-scope capture / Perspective Blindness on frame-exit) per the prior drill-down's chain attribution; field-coherent (consistency-vs-completeness distinction validated in software, mathematics, formal logic); empirically calibratable.

### Research Frontier

- **What:** The broader pattern — across the project, are there other implicitly-overloaded perspective-like structures (in Critique's dimensions; in Innovation's mechanism categories; in Decomposition's self-evaluation dimensions) where one named element bundles multiple cognitive jobs that could be refactored?
  **Why surface:** if the consistency-vs-completeness pattern is real (audit confirms), similar patterns might exist in other discipline specs. This is a meta-architectural question.
  **Next step if pursued:** new MVL+ inquiry framing the question as "which other discipline-spec elements are implicitly overloaded?"

---

## Reasoning

### Why D/C and not another perspective

Per Exploration's inventory: D/C is the only perspective whose spec text bundles 3+ distinct cognitive jobs. The other 7 are single-mode. Splitting any single-mode perspective would be invented (no bundled-jobs evidence to support). Splitting D/C is structurally supported by the 3-jobs evidence in line 213 of the spec.

### Why "consistency-vs-completeness" specifically

Domain Transfer surfaced 3 fields where this distinction is canonical: software code review (correctness vs case-coverage), mathematical proof (non-contradiction vs case-coverage), formal logic / set theory (axiom consistency vs axiom completeness). The distinction is well-grounded externally. Naming the split "Internal Consistency" vs "Frame-exit Completeness" matches established field terminology and makes the conceptual operation portable.

### Why DEFERRED rather than ACTIONABLE

The user explicitly asked for caution: *"only if it is a real missing thing, and if it is not gonna be hurt sensemaking's generic capability for sure."* Even with the design analysis being structurally compelling, N=1 evidence does not justify shipping a spec change to a load-bearing project file. `homegrown/protocols/loop_diagnose.md` Step 5's spirit applies to even small spec edits when load-bearing. The audit IS the project's evidence-discipline mechanism; bypassing it would undermine the protocol the project itself defines.

### Why the refactor over M7

**Honoring existing spec (D2 source-fidelity argument):** the refactor's framing is "D/C's broad spec already permits this; clarify the scope by splitting." This is more honest than M7's framing of "Sensemaking has a missing capability." The honest framing matters because future inquiries will read the spec as documentation; the refactor's framing teaches "the spec was correct; the application was narrow," which is the more accurate diagnosis.

**Spec parsimony:** the refactor doesn't grow the top-level perspective count; it splits an existing one. M7 grows the top-level count by 1.

**External grounding:** the consistency-vs-completeness distinction has canonical support in 3 adjacent fields. M7's "Frame-exit" is a project-internal label without established external grounding.

**M7 remains defensible** if the user prefers flat-list framing — both achieve structurally equivalent net behavior.

### Significant SURVIVE-with-caveat

- **P1 + P2 (refactor design + non-hurt argument)** survived with shared spec-text caveats: define "distinct values" precisely; clarify "within the inquiry's commitments" scope. Both caveats applied in this finding's drafted spec text.
- **P3 + P4 (vs M7 + commitment)** survived clean.

### No KILL verdicts

The design is structurally compelling at the analysis level. The DEFERRAL is a commitment-status decision, not a design-level kill. No element of the proposal was killed; the entire design is preserved for revival pending audit.

### Self-reference handling

This sequence (loop_diagnose → drill-down → refactor analysis) is sensemaking-of-sensemaking-of-sensemaking. Three meta-levels deep. Critical mitigations:

1. **Meta-application of the drafted design produces non-trivial result** (Section 6 above). The Frame-exit Completeness sub-perspective applied to THIS inquiry correctly identifies its bounded scope. Falsifiable test passed.
2. **External anchoring at every load-bearing claim:** spec text citations to `homegrown/sense-making/references/sensemaking.md`; prior-finding citations to `docarchive/sensemaking.md` line numbers; Domain Transfer citations to software / mathematics / formal logic.
3. **Critique refused trivial clean SURVIVE:** P1 + P2 received caveats requiring spec-text clarification.
4. **Step 5 restraint applied:** commitment is DEFERRED; not committed from N=1.

Self-reference collapse: not observed.

---

## Open Questions

### Monitoring

- **Will the Frame-exit Completeness sub-perspective fire usefully post-revival?** Observable over the next 5 Sensemaking outputs after the refactor ships. If 1-3/5 fire on real frame-bounded inquiries, working as intended. If 0/5 fire, gating is too narrow. If 5/5 fire on noise, too broad.

- **Will the conjunctive gating predicate's ambiguities ("inherited," "committed structures," "distinct propositions") produce consistent application across runs?** Observable when 5+ Sensemaking outputs reference the predicate; check inter-application consistency.

### Blocked

- **The refactor's deployment.** Cannot ship until M4 audit produces ≥3 instances of frame-scope-capture-like patterns across distinct inquiries.

- **Whether the broader pattern (other Sensemaking spec sections with similar overload) exists.** Cannot be addressed without M4 audit completing AND a follow-on inquiry on the broader pattern.

### Research Frontiers

- **Other discipline specs with implicitly-overloaded structures.** Critique's dimensions, Innovation's mechanism categories, Decomposition's self-evaluation dimensions, etc. Whether the consistency-vs-completeness pattern (or analogous bundled-jobs patterns) appears elsewhere is a meta-architectural question.

- **Whether "frame-scope capture" should be promoted to a named project-level failure mode** (across all disciplines, not just Sensemaking). Currently descriptive shorthand; revival depends on broader audit evidence.

### Refinement Triggers

- **The conjunctive gating predicate's exact wording** re-opens after empirical validation. If the predicate produces inconsistent application, revise per the inter-application consistency check.

- **The "≥2 distinct values" threshold** re-opens if the threshold proves too narrow or too loose under revival deployment.

- **The refactor vs M7 preference** re-opens if the user (or future practice) finds M7's flat-list framing more applicable. Either path produces structurally equivalent net behavior; the preference is conceptual, not structural.

- **The DEFERRAL** re-opens at M4 audit completion. ≥3 instances → escalate. <3 instances → keep deferred or retire.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
u said 

The primary reason the application missed it: Sensemaking's seven Phase-2 perspectives all operate inside the inquiry's frame. None
   of them asks "step out of the frame — what does this term mean project-wide?" That's the perspective the user used (asking "we 
  have md files no?" — referring to artifacts that exist project-wide, regardless of the meta-loop). The Sensemaking spec's          
  Perspective Blindness corrective ("which perspective would be most uncomfortable to check?") is exactly the move that would have 
  caught it; frame-exit is uncomfortable because it requires temporarily abandoning the inquiry's organizing frame. The corrective
  wasn't applied with frame-exit as the candidate.

  The deeper structural insight: the user's correction worked because the user is OUTSIDE the meta-loop frame (operating at L0, the  
  human IS the meta-loop runner with project-wide visibility). The AI is INSIDE the frame. Frame-exit was free for the user; not
  available to the loop without an explicit perspective check.    


and maybe we need to enhance / add more perspectives to sensemaking to be able to catch such thing? but only if it is a real missing thing, and if it is not gonna be hurt sensemaking's generic capability for sure... 

think hard and understand , maybe one of the perspective can be refactored into 2 perspectives whcih would allow cathing such things?
```

</details>
