---
status: active
continues_from: devdocs/inquiries/diagnostics/rare_cases/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md
affects_spec: homegrown/sense-making/references/sensemaking.md
---

# Finding: Design Sensemaking — Frame-exit Perspective Meta-Categories

## Changes from Prior

**Prior path:** `devdocs/inquiries/diagnostics/rare_cases/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md` (the parent refactor proposal — adds a Frame-exit Completeness sub-perspective to Sensemaking Phase 2; DEFERRED at audit-revival ≥3-instance threshold).

**Revision trigger:** the user identified that the prior single-bullet Frame-exit Completeness draft has two distinct failure modes — Instance 1 (Memory; perspective NEVER FIRED — recognition failure) and Instance 2 (warming; perspective FIRED but reasoned SHALLOWLY via Clean Resolution Trap — reasoning-quality failure). The single broad question in the prior draft addresses Instance 1 but does not structurally prevent Instance 2. The user proposed sub-dividing the perspective into meta-categories so the AI is forced to consider each cognitive move separately, with the constraint that the categories must cover the perspective fully without narrowing it — and explicitly asked for a **%100 improvement** design, not a maybe-improve trade-off.

**What's preserved:** the prior refactor's overall shape (replace line 213's Definitional / Consistency bullet with two bullets — Internal Consistency + Frame-exit Completeness); the conjunctive gating predicate ("inherited multi-value terms in committed structures"); the failure-mode reference to Perspective Blindness (#4); the Memory positive-example pattern; the function-name negative-example pattern; the DEFERRED status at audit-revival.

**What's changed:** the Frame-exit Completeness bullet's BODY (currently a single broad question in the prior draft) is replaced with four sequenced, named, inline meta-categories — Existence Enumeration → Role Assessment → Verdict Rigor → Residual / Coverage Justification — arranged on a cognitive-move axis. The Internal Consistency bullet is NOT changed by this finding; only the Frame-exit Completeness bullet's body.

**What's new:** the four meta-categories themselves; the cognitive-move-axis-vs-frame-dimension-axis distinction with the explicit choice of cognitive-move-axis as structural backbone (dimensions as nested non-exhaustive examples inside Existence Enumeration); the Verdict Rigor meta-category reusing failure mode #5's (Clean Resolution Trap) corrective applied to the frame-exit axis; the Residual / Coverage Justification anti-narrowing mechanism with explicit termination criterion; the %100-improvement structural defense composing 5 sub-claims (superset coverage; Instance 1 coverage; Instance 2 coverage; anti-narrowing; axis narrowing-resistance) with cross-domain validation from software code review, formal logic, and medical differential diagnosis.

**Migration:** at audit-revival (Part A's ≥3-instance threshold per `devdocs/inquiries/2026-05-11_01-36__loop_diagnose__nav_org_structure_warming_scope_cut/finding.md`; current count 2/3), apply the surgical edit specified in Section 1 below ("THE FULL SURGICAL EDIT") — replace the single `Definitional / Consistency` bullet at line 213 of `homegrown/sense-making/references/sensemaking.md` with the two bullets (`Definitional / Internal Consistency` + `Definitional / Frame-exit Completeness`) shown in the AFTER block there. The merged text in Section 1 already includes the prior 03-07 refactor's contributions (Internal Consistency bullet; gating-predicate elaboration; worked examples) alongside this finding's four meta-categories — it is the complete lift-ready artifact.

## Question

From `_branch.md`: given that the prior draft's Frame-exit Completeness perspective has two distinct failure modes (not-fired AND fired-but-shallow), how should `homegrown/sense-making/references/sensemaking.md` be edited so the perspective is sub-divided into meta-categories that (a) force the AI to think about each sub-axis separately, (b) collectively cover the perspective's full intent without narrowing it, and (c) address both failure mechanisms simultaneously — with **%100 improvement** confidence (not might-improve / might-degrade trade-off)?

**Goal** per `_branch.md`: a concrete spec-edit design — drafted spec text + coverage proof + integration notes — that the user can apply at audit-revival or evaluate now without further design work. The narrowing-risk that the user explicitly flagged is a critical-weight rejection criterion: any design where the meta-categories themselves narrow the perspective fails the user's stated bar.

## Finding Summary

- **The design is four sequenced meta-categories on a cognitive-move axis, inline within the Frame-exit Completeness perspective bullet body.** The four moves in order: **Existence Enumeration** (discovery — list project-wide referents of the load-bearing term) → **Role Assessment** (relevance — for each excluded referent, state the role and test operation-coherence; re-locate if load-bearing) → **Verdict Rigor** (counter-test — for any out-of-scope / clean-boundary verdict, apply failure mode #5's "state strongest counter; test on structural grounds" corrective) → **Residual / Coverage Justification** (anti-narrowing closing-step — ask "any frame-exit concern the named categories did NOT capture?" with explicit termination criterion when recursion produces no new substantive findings).

- **The structural axis is cognitive moves, not frame dimensions.** Frame dimensions (TYPE, LAYER, PHASE, AGENT, TIME HORIZON, STRUCTURAL ROLE) live INSIDE Existence Enumeration as non-exhaustive prompting examples, not as the structural axis itself. This choice is the load-bearing anti-narrowing decision: the cognitive-move axis is finite-by-purpose (4 moves derived from what the perspective is fundamentally doing); the frame-dimension axis is enumerable-in-principle (any finite list narrows). Cross-domain validation supports the cognitive-move axis pattern: software code review uses cognitive-move-axis checklists (correctness / readability / performance / security / testability); formal logic proof checklists use state-and-enumerate-and-verify-per-case-and-verify-exhaustiveness; medical differential diagnosis uses enumerate-and-test-and-residual.

- **The two failure mechanisms are structurally addressed.** Instance 1 (not-fired; Memory case) is prevented by Existence Enumeration's mandate to enumerate project-wide referents across multiple dimension axes (TYPE-axis enumeration would have surfaced Memory's md-file referents alongside its human-mental referent). Instance 2 (fired-but-shallow; warming case) is prevented by Verdict Rigor's mandate that any "out of scope" / "clean boundary" verdict triggers the counter-argument-on-structural-grounds test (which would have flipped the warming verdict from "clean boundary" to "in-scope at a different layer — project-wide pre-condition vs per-inquiry artifact").

- **The %100-improvement claim is defended on structural grounds, not on empirical instance count.** Five sub-claims compose the defense: (S1) every aspect of the prior 03-07 single-bullet draft is preserved — no coverage loss; (S2) Existence Enumeration would have caught Memory; (S3) Verdict Rigor would have flipped warming; (S4) Residual / Coverage Justification's recursion is structurally narrowing-resistant; (S5) cognitive-move axis is field-coherent across three adjacent domains. The defense is logical-entailment from the spec's mandate, not statistical prediction of AI behavior. The only degradation surface identified — application-time friction of about 2-6 minutes per fired-perspective application — is bounded, proportional to the failure cost it prevents, and reversible.

- **Adoption stays DEFERRED at Part A's audit-revival gate** (≥3 frame-scope-capture instances; current count 2/3 — Memory + warming). The design also embeds Part B's content (the Verdict Rigor meta-category, addressing fired-but-shallow specifically) inside the same shipment. This is a deliberate project-design choice: ship the integrated design at Part A's gate rather than waiting for Part B's separate gate (≥3 fired-but-shallow specifically; current count 1/3), based on the argument that the integrated design adds coverage without proportional risk. The choice is subject to audit-revival ratification. This inquiry produces the drafted spec text as preparation; the spec file `homegrown/sense-making/references/sensemaking.md` is NOT edited in this inquiry's commit.

- **Self-applicability is verified.** Meta-applying the 4-meta-category structure to this inquiry's own analysis produces a non-trivial result: Existence Enumeration enumerates 3 inherited terms (Frame-exit Completeness; meta-category; cognitive move) and finds all in-scope; Role Assessment and Verdict Rigor pass vacuously (no excluded referents; no clean-boundary verdicts on artifacts); Residual / Coverage Justification examines 3 candidate residual concerns (broader patterns across disciplines; alternative refactors; implementation-time concerns) and finds all are either intentional bounding or covered by another piece. Two non-vacuous checks pass; two vacuous checks confirm the design's conditional structure works.

## Finding

The Sensemaking discipline has a specific failure pattern called **frame-scope capture**: the inquiry's frame excludes a project artifact or referent that actually bears on the analysis. The pattern has been observed twice in recent project work — once with the term "Memory" in a meta-loop autonomy-ladder design (the inquiry's frame implicitly assumed Memory means "human-mental memory" and excluded per-inquiry md files that ARE memory artifacts), and once with the term "warming" in a navigation-organization design (the inquiry's frame excluded the warming files at `homegrown/navigation/warmup/` even though those files are pre-condition content for /navigation per the established audit). Both instances were caught externally by the user, not by the Sensemaking phase that should have caught them.

A prior inquiry at `devdocs/inquiries/diagnostics/rare_cases/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md` proposed adding a **Frame-exit Completeness** sub-perspective to Sensemaking's Phase-2 perspective list — a sub-perspective that fires conditionally when the inquiry has inherited multi-value terms in committed structures, and asks the broad question "Does the inquiry's frame's anchor-set EXCLUDE referents that exist project-wide?" That prior draft addresses the Memory failure mechanism (perspective wasn't firing at all). But the warming failure shows the prior draft has a deeper gap: the perspective can fire and STILL produce a wrong verdict via the Clean Resolution Trap pattern (Sensemaking failure mode #5) — the AI declares "clean boundary" without stating or testing the strongest counter-argument.

This inquiry redesigns the prior draft's bullet body so the perspective is sub-divided into named meta-categories that force separate cognitive moves at application time. The user explicitly asked for a **%100 improvement** — a design defensible on structural grounds rather than on hope.

### 1. THE FULL SURGICAL EDIT — the lift-ready text to paste into `homegrown/sense-making/references/sensemaking.md`

**This section is the deliverable's actual lift-ready artifact.** It merges this finding's four meta-categories with the prior 03-07 refactor's contributions (the sibling Internal Consistency bullet; the gating-predicate elaboration; the worked examples) into one self-contained edit. Apply this at audit-revival; until then, the spec file stays unchanged.

**Target file:** `homegrown/sense-making/references/sensemaking.md`
**Target line:** 213 — the existing `Definitional / Consistency` bullet inside Phase 2 — Perspective Checking.
**Operation:** delete one bullet, insert two bullets in its place.
**No other files or lines need changing.** Failure modes #4 (Perspective Blindness) and #5 (Clean Resolution Trap), referenced from the new bullet below, are already present in the spec at lines 139-145 and 147-153. The Phase 2 list's other seven perspectives (Technical / Logical, Human / User, Strategic / Long-term, Risk / Failure, Resource / Feasibility, Ethical / Systemic, Phase / Calibration-State) are not touched.

#### BEFORE — what currently exists at line 213 (one bullet)

```text
* Definitional / Consistency — Does this interpretation contradict any established definitions, principles, or prior stabilized models? Check the claim against the strongest known anchors. If a weak anchor (observation, single data point) contradicts a strong anchor (definition, tested principle), the weak anchor must justify the override — not the other way around. But also check the reverse: does the established definition contradict ITSELF? Does its stated purpose align with its actual mechanisms? If a definition's own components are in tension — its core claim promises more than its structure delivers — the definition has an internal gap. Don't protect a definition that contradicts itself.
```

#### AFTER — what to insert in its place (two bullets at the same indent level)

```text
* Definitional / Internal Consistency — Does this interpretation contradict any established definitions, principles, or prior stabilized models WITHIN the inquiry's frame? Check the claim against the strongest known anchors. If a weak anchor (observation, single data point) contradicts a strong anchor (definition, tested principle), the weak anchor must justify the override — not the other way around. But also check the reverse: does the established definition contradict ITSELF? Does its stated purpose align with its actual mechanisms? If a definition's own components are in tension — its core claim promises more than its structure delivers — the definition has an internal gap. Don't protect a definition that contradicts itself.

* Definitional / Frame-exit Completeness (when the inquiry has inherited multi-value terms in its own committed structures) — Does the inquiry's frame's anchor-set EXCLUDE referents that exist project-wide, and have any out-of-scope verdicts been tested on structural grounds?

  Gating predicate: this perspective fires WHEN BOTH (i) the inquiry's commitments include terms inherited from prior findings, framing-level commitments, or upstream taxonomies; AND (ii) those inherited terms are used across ≥2 distinct values/levels WITHIN the inquiry's own committed structures (multi-row tables, ladders, axes, typed taxonomies — NOT in artifacts the inquiry analyzes; "distinct" means used to assert different propositions in different cells/levels, NOT multiple occurrences of the same proposition).

  When the gating fires, apply the four meta-categories below, in order, as separate cognitive moves:

  1. **Existence Enumeration.** Ask: "What does this term refer to project-wide, regardless of the inquiry's frame?" List each project-wide referent. Dimensions where the term may vary include (not exhaustive): TYPE (multiple referent types), LAYER (project-wide vs per-inquiry; pre-condition vs operation), PHASE (project phase-dependence), AGENT (multiple users / agents), TIME HORIZON, STRUCTURAL ROLE. For each referent enumerated, check whether the inquiry's frame's scope includes it. Failing to enumerate any referent-axis that has multiple project-wide values is an instance of Perspective Blindness (failure mode #4) applied to the frame-exit axis.

  2. **Role Assessment.** For each referent identified as outside the inquiry's frame, ask: "What role does this referent play in the operation being organized?" State the role explicitly. Then ask: "Is the operation's coherence preserved if this excluded referent is ignored?" If NO — the operation depends on the excluded referent — the corrective is NOT to force the referent into the current frame, but to RE-LOCATE it to its correct in-scope layer (e.g., project-wide pre-condition vs per-inquiry artifact) and note that the current inquiry operates within a per-layer slice of the operation.

  3. **Verdict Rigor.** For any "out of scope" or "clean boundary" verdict produced in this perspective (or referenced from another perspective), state the strongest counter-argument and test it on structural grounds. This applies failure mode #5 (Clean Resolution Trap)'s corrective to the frame-exit axis: a clean-boundary verdict that survives only because the counter-argument was never tested is LOW CONFIDENCE.

  4. **Residual / Coverage Justification.** After applying the three named meta-categories above, ask: "Is there a frame-exit concern about this term — anything the inquiry's frame might exclude — that the named categories did NOT capture?" If yes, name it; apply Existence Enumeration + Role Assessment + Verdict Rigor to it. The named categories above are not exhaustive of frame-exit concerns; this closing-step is the perspective's anti-self-narrowing check. Termination: if applying the named categories to a residual concern produces no new substantive findings — the concern reduces to already-captured cases or to intentional bounding decisions — terminate the recursion. Unbounded recursion is a sign of inquiry-frame instability, not of frame-exit completeness; if recursion would continue indefinitely, the issue is upstream of this perspective.

  Example (positive — gating fires): a metaloop-ladder inquiry inherits "Memory" from a prior session-architecture finding and uses it across 6 levels with distinct propositions per row. Existence Enumeration's TYPE-axis prompt surfaces three referent types — human-mental memory; system-written md files (e.g., per-inquiry md files written by /MVL or /MVL+ runners); runtime in-memory state. The meta-loop frame's scope includes only the first; the other two are excluded. Role Assessment finds the md-file referent load-bearing (persistent memory across inquiries). Verdict: re-locate, not exclude.

  Example (negative — gating does NOT fire): a code review where a function-name "authenticate" appears in 2 call sites with the same meaning is NOT distinct propositions; the gating predicate yields FALSE; the perspective skips.

  Failing to apply this perspective when the inquiry has inherited multi-value terms in its own committed structures is an instance of Perspective Blindness (failure mode #4) applied to the frame-exit axis. Failing to apply Verdict Rigor when a clean-boundary verdict is produced is additionally an instance of Clean Resolution Trap (failure mode #5) applied to the frame-exit axis.
```

#### What's different between BEFORE and AFTER

1. **Renamed bullet with explicit scope:** `Definitional / Consistency` becomes `Definitional / Internal Consistency`, with the phrase `WITHIN the inquiry's frame` added after `prior stabilized models`. The bullet's three existing cognitive jobs (forward consistency; anchor-strength weighting; reverse self-consistency) are otherwise word-for-word identical to the current text.

2. **New sibling bullet:** `Definitional / Frame-exit Completeness` is added at the same indent level. Its parenthesized gating header carries the conjunctive predicate; its body has the gating-predicate elaboration, the four sequenced meta-categories with worked examples, and the closing failure-mode references.

3. **Nothing else.** Every other line of `homegrown/sense-making/references/sensemaking.md` stays as-is.

#### How to apply (step-by-step)

1. Open `homegrown/sense-making/references/sensemaking.md`.
2. Locate line 213 — the existing `Definitional / Consistency` bullet inside Phase 2 — Perspective Checking. Verify the line matches the BEFORE text above exactly. If it has drifted (the spec was edited since this finding was written), pause and reconcile before editing.
3. Delete the entire `Definitional / Consistency` bullet — one bullet, beginning with `* Definitional / Consistency` and continuing through `Don't protect a definition that contradicts itself.`.
4. Paste the two bullets from the AFTER block above in its place. Same indent level as the surrounding Phase 2 perspectives. Preserve markdown bullet markers and the parenthesized gating header verbatim.
5. Save the file. Verify it still loads cleanly when `sense-making/SKILL.md` reads it at Step 0 (run any Sensemaking-invoking inquiry as a smoke check).

This is a single-location, single-commit edit.

#### When to apply

**DEFERRED.** Apply at audit-revival, when the count tracked by `devdocs/inquiries/2026-05-11_01-36__loop_diagnose__nav_org_structure_warming_scope_cut/finding.md` reaches ≥3 frame-scope-capture instances across distinct inquiries. Current count: 2/3 (Memory + warming). Until then, the AFTER text remains a documented draft; the spec file stays at the BEFORE state.

#### Composition note — where each part of the AFTER text comes from

The AFTER block is a merge of three sources. Knowing which part came from where matters if any of the source findings is revised before lift:

- **The Internal Consistency bullet** comes from `devdocs/inquiries/diagnostics/rare_cases/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md` Section 2. Word-for-word from the prior 03-07 draft.
- **The Frame-exit Completeness bullet's gating header**, the **gating-predicate elaboration paragraph**, the **positive Memory example**, the **negative function-name example**, and the **closing Perspective Blindness reference** all come from the prior 03-07 draft (same Section 2). The Memory example is lightly extended here to walk through Existence Enumeration's TYPE-axis enumeration explicitly.
- **The four numbered meta-categories** (Existence Enumeration; Role Assessment; Verdict Rigor; Residual / Coverage Justification with termination criterion) — including the failure-mode-#5 reference at Verdict Rigor and the Residual recursion-with-termination — are this inquiry's contribution. The Residual termination paragraph is the C1 REFINE applied at compilation per the Critique phase.

### 2. This finding's drafted contribution to the Frame-exit Completeness bullet body (partial view; the full edit is in Section 1 above)

The text below shows only the four meta-categories isolated — this finding's contribution as a standalone block, without the surrounding Internal Consistency bullet, the gating-predicate elaboration paragraph, or the worked examples. It is preserved here as a partial view for traceability. **For the actual edit, use Section 1 above.**

```
* Definitional / Frame-exit Completeness (when the inquiry has
  inherited multi-value terms in its own committed structures) —
  Does the inquiry's frame's anchor-set EXCLUDE referents that
  exist project-wide, and have any out-of-scope verdicts been
  tested on structural grounds? Apply the four meta-categories
  below, in order, as separate cognitive moves:

  1. **Existence Enumeration.** Ask: "What does this term refer
     to project-wide, regardless of the inquiry's frame?" List
     each project-wide referent. Dimensions where the term may
     vary include (not exhaustive): TYPE (multiple referent
     types), LAYER (project-wide vs per-inquiry; pre-condition
     vs operation), PHASE (project phase-dependence), AGENT
     (multiple users / agents), TIME HORIZON, STRUCTURAL ROLE.
     For each referent enumerated, check whether the inquiry's
     frame's scope includes it. Failing to enumerate any
     referent-axis that has multiple project-wide values is an
     instance of Perspective Blindness (failure mode #4) applied
     to the frame-exit axis.

  2. **Role Assessment.** For each referent identified as outside
     the inquiry's frame, ask: "What role does this referent
     play in the operation being organized?" State the role
     explicitly. Then ask: "Is the operation's coherence
     preserved if this excluded referent is ignored?" If NO —
     the operation depends on the excluded referent — the
     corrective is NOT to force the referent into the current
     frame, but to RE-LOCATE it to its correct in-scope layer
     (e.g., project-wide pre-condition vs per-inquiry artifact)
     and note that the current inquiry operates within a
     per-layer slice of the operation.

  3. **Verdict Rigor.** For any "out of scope" or "clean
     boundary" verdict produced in this perspective (or
     referenced from another perspective), state the strongest
     counter-argument and test it on structural grounds. This
     applies failure mode #5 (Clean Resolution Trap)'s
     corrective to the frame-exit axis: a clean-boundary
     verdict that survives only because the counter-argument
     was never tested is LOW CONFIDENCE.

  4. **Residual / Coverage Justification.** After applying the
     three named meta-categories above, ask: "Is there a
     frame-exit concern about this term — anything the
     inquiry's frame might exclude — that the named categories
     did NOT capture?" If yes, name it; apply Existence
     Enumeration + Role Assessment + Verdict Rigor to it. The
     named categories above are not exhaustive of frame-exit
     concerns; this closing-step is the perspective's
     anti-self-narrowing check.

     Termination: if applying the named categories to a
     residual concern produces no new substantive findings —
     the concern reduces to already-captured cases or to
     intentional bounding decisions — terminate the recursion.
     Unbounded recursion is a sign of inquiry-frame instability,
     not of frame-exit completeness; if recursion would
     continue indefinitely, the issue is upstream of this
     perspective.

  Failing to apply this perspective when the inquiry has
  inherited multi-value terms in its own committed structures
  remains an instance of Perspective Blindness applied to the
  frame-exit axis. Failing to apply Verdict Rigor when a
  clean-boundary verdict is produced is additionally an
  instance of Clean Resolution Trap applied to the frame-exit
  axis.
```

This text is intended for adoption when Part A's audit-revival gate triggers (per `devdocs/inquiries/2026-05-11_01-36__loop_diagnose__nav_org_structure_warming_scope_cut/finding.md`, count is currently 2/3 toward ≥3-instance threshold). Until then, the text is a DRAFT — `homegrown/sense-making/references/sensemaking.md` is unchanged.

### 3. Why these four meta-categories and not others

The choice of four cognitive-move meta-categories (rather than two, three, five, or a structure organized by frame dimensions) is the load-bearing design decision. Six candidate structures were explored and rejected in favor of this one.

**The two-category structure (Discovery + Verdict Rigor only)** addresses both Instance 1 and Instance 2 mechanisms but has a thin spot at relevance recognition. An AI that enumerates a referent in Existence and dismisses it without producing an explicit verdict slips past Verdict Rigor (which fires only on verdicts) and past Role Assessment (which doesn't exist in this candidate). Two-category coverage is incomplete.

**A five-category structure (adding Re-location as a separate category)** adds friction without coverage gain. The re-location guidance fits inside Role Assessment's corrective ("if NO to operation-coherence test, the corrective is to re-locate the referent to its correct in-scope layer"). Splitting it out as its own category increases application cost without reducing failure surface.

**A frame-dimension-axis structure (naming TYPE, LAYER, PHASE, AGENT, TIME HORIZON as the meta-categories themselves)** is the most acute narrowing risk. By naming specific dimensions as the perspective's structural axis, the spec implicitly tells the AI "these are the dimensions to check" — and any project-specific or unanticipated dimension not in the list is missed. The user's explicit narrowing warning rules this out. Frame dimensions are useful as PROMPTS (they help the AI generate enumeration breadth at runtime) but they fail as STRUCTURE.

**The single-bullet status-quo (the prior 03-07 draft)** fails the user's question by leaving Instance 2's fired-but-shallow mechanism unaddressed.

**Refinement-note placement (instead of inline within the perspective bullet)** uses the wrong spec idiom. Existing refinement notes (lines 219-291 of `homegrown/sense-making/references/sensemaking.md`) are conditional sub-rules ("when X, do Y in addition"). The four meta-categories are the perspective's operational definition, not an added rule. Inline placement is the correct idiom.

What remains is the **four-cognitive-move structure** — Discovery + Relevance + Verdict-Rigor + Residual — derived from what the Frame-exit Completeness perspective is fundamentally doing rather than from listing the cases it could check. The four moves correspond to four named failure-prevention targets: Existence Enumeration prevents the not-fired mechanism (Instance 1); Role Assessment operationalizes WHY an exclusion might be wrong; Verdict Rigor prevents the fired-but-shallow mechanism (Instance 2); Residual / Coverage Justification prevents the meta-categories themselves from becoming a narrowing frame (the recursive risk the user flagged).

The cognitive-move axis is supported by three adjacent fields. Software code review uses cognitive-move-axis checklists (correctness / readability / performance / security / testability). Formal logic completeness proofs use a structured sub-checklist (state hypothesis / enumerate cases / verify each case / verify exhaustiveness — which maps directly to Existence / Role / Verdict-Rigor / Residual). Medical differential diagnosis uses an "elimination + residual" pattern (enumerate likely diagnoses / test each / residual diagnosis-of-exclusion). Three independent fields converge on cognitive-move-axis sub-check structures. This is external validation that the design's structural form is field-coherent.

### 4. Why this is a %100 improvement (the structural defense)

The user's "%100 improvement" framing means the design must produce a clear improvement on structural grounds — every case the prior 03-07 single-bullet draft catches must still be caught, AND the fired-but-shallow gap must be additionally closed, AND no new narrowing or degradation surface is introduced. Five sub-claims compose the defense.

**Sub-claim 1 — superset coverage versus the prior baseline.** The prior 03-07 draft asks one broad question with conjunctive gating, an example pair (Memory positive; function-name negative), and a failure-mode-#4 reference. The four-meta-category design preserves the gating predicate unchanged (gating header inherited verbatim), preserves the project-wide referents check (now in Existence Enumeration), preserves the failure-mode-#4 reference (now in Existence Enumeration's tail), preserves the Memory positive-example pattern (now via dimension examples + the loop_diagnose lineage), and preserves the function-name negative-example pattern (in the inherited gating predicate's "distinct propositions" clause from the prior 03-07 draft Section 2 lines 102-110). Every aspect of the prior draft is preserved; no semantic content is lost.

**Sub-claim 2 — Instance 1 (not-fired; Memory) coverage.** The Memory failure happened because the existing Sensemaking perspectives all operate within the inquiry's frame — none asks "step out of the frame and look at what this term means project-wide." In the Memory case, an AI applying Existence Enumeration would be prompted by the TYPE-axis dimension example to enumerate Memory's referent types — human-mental memory; system-written md files; runtime in-memory state. Three types. For each, the spec mandates checking whether the inquiry's frame includes it; the per-inquiry md files written by /MVL and /MVL+ runners are NOT in the meta-loop frame's anchor set. The discovery is structural, not statistical: the spec's mandate to enumerate forces the surfacing. Then Role Assessment forces stating the role (persistent memory across inquiries) and testing operation-coherence (the meta-loop's autonomy ladder depends on who-writes-what — coherence requires md files in the frame). The verdict flips from "md files don't exist as memory artifacts" to "md files exist at the cross-inquiry layer; re-locate."

**Sub-claim 3 — Instance 2 (fired-but-shallow; warming) coverage.** The warming failure happened because the prior single-bullet question's verdict ("OUT OF SCOPE; clean boundary") rested on the elegant explanation "warmup feeds INTO discipline; doesn't change output structure" without testing the strongest counter-argument. Verdict Rigor's mandate makes the counter-test non-optional: any "out of scope" / "clean boundary" verdict triggers "state strongest counter; test on structural grounds." The strongest counter for warming is "warming IS the pre-condition layer; the project has it at `homegrown/navigation/warmup/`; /navigation's operation depends on it per audit Category I1 CANONICAL." Structural test: is the navigation-organization analysis coherent without warming? NO (audit I1 establishes warming as precondition). Verdict Rigor flips the verdict from "clean boundary" to "in-scope at a different layer." This is a logical entailment from the spec's mandate, not a behavioral prediction about the AI.

**Sub-claim 4 — anti-narrowing (Residual prevents the meta-categories themselves from becoming a narrowing frame).** The user explicitly warned that meta-categories must cover the perspective fully or they risk narrowing. Residual / Coverage Justification operates at a different grain size from the prior three meta-categories: per-perspective-application rather than per-referent or per-verdict. Its question — "Is there a frame-exit concern about this term that the named categories did NOT capture?" — is recursive: if yes, apply Existence + Role + Verdict-Rigor to the residual concern, with termination when the recursion produces no new substantive findings. This structurally prevents narrowing because any concern that doesn't fit Existence/Role/Verdict-Rigor's named scope is still surfaced by Residual, and once surfaced is subject to the named categories' recursion. Meta-applying the design to this inquiry's own analysis (described in section 4 below) validates the mechanism non-trivially.

**Sub-claim 5 — cognitive-move axis is narrowing-resistant by construction.** The cognitive-move axis is finite-by-purpose (four moves derived from what the perspective is fundamentally doing). The frame-dimension axis is enumerable-in-principle (any finite list of dimensions is incomplete). If the structural axis were dimensions, naming N dimensions would tell the AI "these are the perspective's job" — narrowing. If the structural axis is cognitive moves, the moves don't enumerate cases; they specify operations. Three adjacent fields (software code review; formal logic; medical differential diagnosis) use cognitive-move axes for sub-check structures. External cross-domain support, not circular self-reference.

**Composition.** The five sub-claims compose into the %100-improvement defense: coverage strictly supersets the baseline (S1), both failure mechanisms are structurally addressed (S2 + S3), meta-narrowing is recursively prevented (S4), and the structural axis is field-coherent (S5). The only degradation surface is application friction — about 2-6 minutes per fired-perspective application. This cost is bounded (the perspective fires conditionally per the inherited gating predicate; per the 03-07 finding's non-hurt analysis, the gating yields FALSE on non-frame-bounded inquiries like code reviews, bug diagnoses, concrete strategic decisions, and open-ended research questions). It is proportional (a few minutes is small compared to the cost of a downstream frame-scope-capture propagation failure — the 22-46 comparison inquiry inherited the warming frame and produced a wrong "new capability" claim, which required external user catching and a follow-on loop_diagnose). It is reversible (revert the spec edit if needed; no deep coupling to other discipline specs). No degradation surface is unbounded or irreversible.

### 5. Self-applicability — meta-application of the design to this inquiry

The 4-meta-category structure is applied to this inquiry's own analysis as a self-coverage test. The gating predicate fires: this inquiry has inherited multi-value terms (Frame-exit Completeness, meta-category, cognitive move, frame dimension — all from prior findings or user command-args) used in committed structures (the 4-meta-category table; the cognitive-move-vs-frame-dimension axis decision; multiple anchor lists).

**Existence Enumeration applied.** The three load-bearing terms are enumerated. "Frame-exit" appears in Sensemaking failure mode #4's corrective; in the prior 03-07 draft; in the 11-22 loop_diagnose finding; in this inquiry. Referent: a cognitive operation. Frame-scope includes all usages. "Meta-category" appears in the user's command-args and in this analysis; no other project usage. Referent: this inquiry's own structural axis. Frame-scope includes. "Cognitive move" appears in this analysis and in Exploration cycle 4; field-coherent. Frame-scope includes. **No excluded referents identified across the three terms.** Existence Enumeration passes.

**Role Assessment applied.** No excluded referents from the Existence step → no role-relevance violations to assess. Role Assessment passes vacuously. This vacuous pass is consistent with the design's conditional structure (when no exclusion exists, no role-assessment is needed).

**Verdict Rigor applied.** This sensemaking-and-design analysis produces no out-of-scope or clean-boundary verdicts on project artifacts; it produces resolutions on design choices (sequenced pipeline, inline placement, cognitive-move axis selection, …). Verdict Rigor passes vacuously. This vacuous pass is consistent with the design's conditional structure (when no clean-boundary verdict is produced, no counter-test is needed).

**Residual / Coverage Justification applied.** Three candidate residual concerns are examined. First, does this inquiry exclude broader frame-scope-capture patterns across disciplines beyond Sensemaking? The user's question is specifically about the Sensemaking spec — bounding to Sensemaking is intentional, not an oversight; check passes. Second, does this inquiry exclude alternative refactor candidates (e.g., promoting frame-scope capture to a project-level failure mode across all disciplines)? Out of scope for this inquiry's question — different refactor; same audit threshold; tracked as Research Frontier below. Third, does this inquiry exclude implementation-time concerns (how the AI actually applies the four categories at runtime)? Sensemaking Phase 4 and the integration framing cover this; calibration path acknowledged. **No uncaptured concern found.** Residual passes.

The meta-application produces two non-vacuous checks (Existence enumerating three terms; Residual examining three candidates) and two vacuous checks (Role and Verdict Rigor, consistent with the conditional structure). The design is self-applicable AND produces meaningful results — strong validity signal.

## Next Actions

### MUST

- **What:** preserve this finding as the lift-ready draft to be applied at audit-revival.
  - **Who:** the loop-builder layer when audit-revival triggers (Part A's ≥3 frame-scope-capture instances threshold).
  - **Gate:** observable — when the audit's instance count reaches 3 (currently 2 — Memory + warming).
  - **Why:** ensures the integrated design (with Verdict Rigor's content for Instance 2 coverage) ships at audit-revival rather than the un-integrated prior 03-07 draft.

### COULD

- **What:** monitor the gating predicate's correctness empirically over the next 5 Sensemaking outputs that involve frame-exit-relevant terminology, post-revival.
  - **Who:** any /MVL+ runner whose inquiry involves inherited multi-value terms.
  - **Gate:** observable — after the first 5 post-revival inquiries that should plausibly trigger the gating predicate.
  - **Why:** if 0/5 fire when at least one should fire, gating is too narrow; if 5/5 fire on non-frame-bounded inquiries, gating is too broad. The calibration path was established by the prior 03-07 draft and continues here.

### DEFERRED

- **What:** apply the spec edit specified in Section 1 above (THE FULL SURGICAL EDIT) — at line 213 of `homegrown/sense-making/references/sensemaking.md`, replace the single `Definitional / Consistency` bullet with the two bullets shown in Section 1's AFTER block (`Definitional / Internal Consistency` + `Definitional / Frame-exit Completeness`).
  - **Gate:** observable — M4 audit (from the Instance-1 diagnostic at `devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md`) produces ≥3 instances of frame-scope-capture patterns across distinct inquiries. Current count: 2/3 (Memory + warming).
  - **Why (if revived):** makes the Frame-exit Completeness perspective FIRE (Existence Enumeration addresses Instance 1) AND sharpens reasoning when it fires (Verdict Rigor addresses Instance 2) AND prevents meta-narrowing (Residual / Coverage Justification). At revival, this design's drafted text replaces the prior 03-07 bullet body inside the 03-07 refactor's overall shape.

- **What:** track instances toward the audit threshold with mechanism-aware classification (not-fired / fired-but-shallow / other) per the prior 11-22 loop_diagnose finding's recommendation.
  - **Gate:** automatic when the audit (M4) runs.
  - **Why (if applied):** allows the user / audit to verify at revival whether the integrated design's coverage of both mechanisms is empirically warranted, or whether the mechanisms should ship independently at separate gates.

### Integration / Adoption notes

Three operational notes required at audit-revival lift, per Critique's refinements:

- **Dependency on prior 03-07 gating predicate.** This design's bullet body presupposes that the 03-07 refactor's full text (including the gating predicate's "distinct propositions" definition from `devdocs/inquiries/diagnostics/rare_cases/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md` Section 2 lines 102-110) ships together at audit-revival. The Frame-exit Completeness bullet's gating header inherits this definition unchanged; this design changes only the bullet's body, not its gating predicate.

- **Revival-gate inheritance choice.** This design ships at Part A's revival gate (≥3 frame-scope-capture instances across distinct inquiries; current count 2/3) per `devdocs/inquiries/2026-05-11_01-36__loop_diagnose__nav_org_structure_warming_scope_cut/finding.md`. The design embeds Part B's content (the Verdict Rigor meta-category, intended to address fired-but-shallow specifically) inside the same shipment, even though Part B's separate gate (≥3 fired-but-shallow specifically; current count 1/3) is not independently met. This is a deliberate project-design choice based on the argument that the integrated design adds coverage without proportional risk: the strict bar for adoption is met by Part A's threshold; Part B's content is preparation that becomes operational at the same lift. At audit-revival, the user or audit may re-examine this choice and decide whether to wait for Part B's separate threshold instead.

- **Step-5 conformance.** This inquiry produces a DRAFT. `homegrown/sense-making/references/sensemaking.md` is not edited in this inquiry's commit. The DRAFT-not-adopted status is preserved until the audit-revival gate triggers.

## Reasoning

This section shows the full field of what was considered, including alternatives that were rejected and refinements that were applied.

### Why the cognitive-move axis is the structural backbone (not the frame-dimension axis)

The user's two named failure instances both involve specific frame dimensions — Memory's TYPE-axis was the missed dimension in Instance 1; warming's LAYER-axis was the missed dimension in Instance 2. A naive reading would suggest structuring the meta-categories AS frame dimensions (TYPE / LAYER / PHASE / AGENT / TIME HORIZON / …). The Sensemaking phase examined this candidate and rejected it on the user's explicit narrowing constraint: a frame-dimension-axis structure tells the AI "these dimensions are the perspective's job" — any project-specific dimension not in the list is missed. Frame dimensions are enumerable-in-principle; any finite enumeration narrows.

The cognitive-move axis is derived from what the perspective is fundamentally doing, not from listing the cases it could check. The four moves — discover what's outside the frame; assess relevance; test verdicts; check residual coverage — are finite-by-purpose. They specify operations, not cases. Dimensions live inside Existence Enumeration as non-exhaustive prompts (they help the AI generate enumeration breadth at runtime) but they are not the structural axis. This is a cleaner separation: the cognitive moves are the structure; the dimensions are the prompts inside the structure.

### Why four meta-categories and not three (Residual is not redundant)

A three-meta-category structure (Existence + Role Assessment + Verdict Rigor) addresses both Instance 1 and Instance 2 mechanisms. But the user explicitly warned that the meta-categories themselves could become a narrowing frame — naming three specific moves implicitly tells the AI "these three are exhaustive." The Residual / Coverage Justification meta-category exists specifically to prevent this recursive risk. Its question — "Is there a frame-exit concern about this term that the named categories did NOT capture?" — operates at a different grain size from the prior three (per-perspective-application rather than per-referent or per-verdict). It is not redundant with Verdict Rigor (which fires only on explicit verdicts, not on absences); it is not redundant with Role Assessment (which assesses excluded referents already enumerated). Residual catches what the named categories miss, with explicit termination criterion to prevent unbounded recursion.

### Why failure-mode references at Existence and Verdict Rigor but not at Role Assessment or Residual

Reuse-over-coinage is project-canonical (per `homegrown/protocols/loop_diagnose.md` Step 5 and the Sensemaking spec's existing failure-mode catalog). Existence Enumeration's failure case (the perspective doesn't fire on a dimension that should be checked) IS Perspective Blindness applied to the frame-exit axis — failure mode #4 in the Sensemaking spec. Verdict Rigor's failure case (a clean-boundary verdict produced without testing the counter) IS Clean Resolution Trap applied to the frame-exit axis — failure mode #5 in the spec. Both references reuse existing vocabulary.

Role Assessment doesn't have a corresponding canonical failure mode — no spec failure mode names "didn't assess relevance." The reuse-over-coinage principle says don't coin one when no failure-mode evidence demands it. Role Assessment is operationalized via its predicate text (state the role; test operation-coherence; re-locate if load-bearing) rather than via a failure-mode citation.

Residual's failure case is "the meta-categories themselves narrow the perspective." This is structurally a new failure pattern (recursive narrowing). Per Step 5, coining a new failure mode requires ≥3 instances. Currently 0 named instances exist (the user identified the RISK but no actual instance has occurred yet because the design hasn't shipped). Residual is operationalized via its predicate text rather than via a (yet-to-exist) failure-mode citation.

### Why DEFERRED rather than ACTIONABLE for adoption

`homegrown/protocols/loop_diagnose.md` Step 5 explicitly forbids broad fundamentals rewrites from a single weak correction chain. The Sensemaking spec is a load-bearing project file. Even though the design's correctness is defensible on structural grounds (cross-domain validation; mechanism convergence; self-applicability), Step 5's spirit is that spec changes wait for audit-confirmed pattern recurrence. The audit's threshold is ≥3 instances; current count is 2/3 (Memory + warming).

The draft-vs-adoption distinction is the project's existing pattern for honoring Step 5 while doing thinking work. The prior 11-22 loop_diagnose finding adopted this pattern for Part B's drafted spec text; this finding does the same. The drafted text is preparation; the audit gate is the adoption mechanism. If the audit reaches 3 before any unrelated change renders the design obsolete, the drafted text is lifted; if a fourth or fifth instance reveals a categorically-distinct mechanism the design doesn't fit, the design is revised before lift.

### Why ship the integrated design at Part A's gate rather than waiting for Part B's separate gate

Part A's gate (the prior 11-22 finding's revival trigger for the Frame-exit Completeness sub-perspective in general) is ≥3 frame-scope-capture instances across distinct inquiries. Part B's gate is ≥3 fired-but-shallow instances specifically. Current counts are 2/3 for Part A and 1/3 for Part B.

This design embeds Part B's content (Verdict Rigor) inside the larger Frame-exit Completeness bullet. Shipping at Part A's gate means Part B's content adopts at fewer fired-but-shallow instances than Part B's standalone gate would require. The argument for this choice: the integrated design ADDS coverage without proportional risk. Part A alone would ship the perspective with only Existence + Role + (no Verdict Rigor); a future fired-but-shallow instance after lift would surface a fixable gap the design already addresses. The cost of waiting for Part B's separate gate is leaving Instance-2-class failures undetected during the interval between Part A's lift and Part B's lift.

The argument against: Step 5's spirit is "don't ship spec changes from weak evidence"; Part B has N=1 fired-but-shallow evidence; embedding it at Part A's gate bypasses Part B's intended threshold. The choice is deliberate but not uncontested.

This finding flags the choice for audit-revival ratification. At revival, the user or audit may decide to ship only Existence + Role + Residual at Part A's gate (deferring Verdict Rigor to Part B's separate gate), or to ship the full integrated design as drafted. The flag is the responsible disposition.

### Critique survivors and refinements applied

The Critique phase ran 12 evaluation dimensions across 4 candidate pieces plus the assembly. Two pieces survived cleanly (C4 self-applicability evidence; the assembly itself). Three pieces received REFINE verdicts with concrete refinement briefs, all applied in this finding:

- C1 REFINE #1 — Residual termination criterion was missing from the drafted spec text. Applied: the bullet body now includes an explicit termination criterion as the closing paragraph of the Residual / Coverage Justification meta-category.
- C1 REFINE #2 — the finding needed explicit refutation conditions. Applied: see Open Questions / Refinement Triggers below.
- C2 REFINE — the design depends on the prior 03-07 gating predicate shipping together. Applied: noted explicitly in Integration / Adoption notes above.
- C3 REFINE — the Part-A-vs-Part-B revival-gate choice needed explicit statement. Applied: noted explicitly in Integration / Adoption notes above.

No candidates were killed. The verdict mix (4 REFINE all applied + 2 SURVIVE clean + 0 KILL) reflects honest evaluation — neither rubber-stamping nor nitpicking.

### Self-reference handling

This is a Sensemaking-discipline spec edit produced via a Sensemaking output, evaluated via a Critique output, all within the same project's vocabulary. Three meta-levels deep. Self-reference collapse is at acute risk (Sensemaking failure mode #6; Critique failure mode #7). Mitigations applied: (a) external anchoring at every load-bearing claim (failure modes #4 and #5 cited from the spec; cross-domain validation from three independent fields; line citations to 03-07 and 11-22 findings); (b) meta-application of the 4-category structure to this inquiry's own analysis (produces non-trivial results; does not collapse into trivial self-validation); (c) Critique's adversarial mechanism produced three concrete REFINE verdicts (not rubber-stamping). Self-reference is acute but mitigated.

## Open Questions

### Monitoring

- Whether the audit-revival count for Part A reaches 3 before any unrelated change to the Sensemaking spec renders this design obsolete. Observable across the next several /MVL+ runs that involve frame-exit-relevant terminology.
- Whether the fired-but-shallow count tracked separately (toward Part B's gate) grows independently of Part A's broader count. Observable when M4 audit runs with mechanism-aware classification.
- Whether the gating predicate fires correctly post-revival. Observable across the first 5 post-revival inquiries that should plausibly trigger the gating predicate.

### Blocked

- The spec edit's deployment is blocked behind M4's execution. M4 itself is DEFERRED in the prior Instance-1 diagnostic. There is a real path to revival, but it depends on the audit running.

### Research Frontiers

- Whether frame-scope capture should be promoted to a project-level failure mode across all disciplines (not just Sensemaking). Currently the pattern is descriptive shorthand in loop_diagnose findings; promotion to a named project-level failure mode requires broader audit evidence (likely a separate inquiry once M4 produces enough data).
- Whether other Sensemaking perspectives (or perspectives in other disciplines like Critique, Innovation, Decomposition) have analogously overloaded structures that could benefit from cognitive-move-axis meta-category decomposition. The Internal Consistency bullet from the prior 03-07 draft has three jobs bundled (forward consistency; anchor-strength weighting; reverse self-consistency) — those are themselves meta-categories worth surfacing explicitly. Separate inquiry.
- Whether the "deferred-spec-revival package" four-piece shape (drafted text + coverage proof + integration framing + self-applicability evidence) — used here and in the prior 11-22 finding's Part B — is a reusable project-pattern worth codifying as a convention. Two instances so far; ≥3 instances would justify codification per the project's pattern-recurrence threshold.

### Refinement Triggers

The drafted spec text and the design's overall structure re-open under any of these observable conditions:

- The design's bullet body re-opens if post-revival application produces 0/5 perspective fires across 5 inquiries that should plausibly trigger the gating predicate (gating too narrow → the predicate needs widening).
- The design's bullet body re-opens if post-revival application produces 5/5 fires across 5 non-frame-bounded inquiries (gating too broad → the predicate needs tightening).
- The design's structural form (4 cognitive-move meta-categories) re-opens if a future Instance 3 emerges that doesn't fit any of the four named categories AND that Residual / Coverage Justification fails to catch.
- The design's anti-narrowing claim re-opens if a frame-exit concern is found in practice that the named categories miss AND Residual doesn't catch.
- The revival-gate inheritance choice (shipping Part B's Verdict Rigor at Part A's gate) re-opens at audit-revival ratification — the user or audit may decide to wait for Part B's separate gate instead.
- The cognitive-move-axis vs frame-dimension-axis decision re-opens if a future failure instance has the property that no cognitive move catches it but a specific frame dimension would have caught it.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

read devdocs/inquiries/2026-05-11_01-36__loop_diagnose__nav_org_structure_warming_scope_cut/finding.md

and /Users/ns/Desktop/projects/native/devdocs/inquiries/diagnostics/rare_cases/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md

and understand that sensemaking have this issue


You said

 Instance 1 (Memory): the perspective NEVER FIRED. Instance 2 (here, warming): the perspective FIRED but reasoned SHALLOWLY (Clean Resolution Trap). Same outcome pattern (frame-scope capture); different etiology; different maintenance candidate.

and i think correct way to handle this is structure that perspective further into it's own meta categories . this way we have more control and since they are phrased seperately AI will have to think of them. But it is vital that these categories cover that perspective fully otherwise we are risking narrowing the perspective total


think about this hard and tell me how sensemaking should be edited. fyi, we want sth that is %100 improvement and not interested so much in might be improvemenrt might be degragation.
```

</details>
