# Exploration: Refactor a Sensemaking perspective into 2 to catch frame-exit?

## 1. Mode and Entry Point

- **Mode:** Artifact exploration. The territory has concrete objects: the 8 perspectives in `homegrown/sense-making/references/sensemaking.md` Phase 2 (lines 207-214), plus Phase 1 anchor types and Phase 3 ambiguity-collapse mechanisms.
- **Entry point:** Signal-first. The user hypothesized "maybe one of the perspectives splits into 2." The exploration probes each existing perspective for "is this perspective doing 2+ distinct cognitive jobs that could split?"

---

## 2. Territory Overview

The territory has 3 regions:

- **R-A: The 8 existing Sensemaking Phase-2 perspectives** — Technical/Logical, Human/User, Strategic/Long-term, Risk/Failure, Resource/Feasibility, Ethical/Systemic (conditional), Definitional/Consistency, Phase/Calibration-State (conditional). Each is a candidate for refactor.
- **R-B: The frame-exit gap** — what cognitive move is missing that would have caught the L0 Memory failure (per the prior drill-down's link 4 attribution).
- **R-C: The non-hurt criterion** — across non-frame-bounded inquiries (ordinary Sensemaking runs that aren't ladder-design or taxonomic), would the refactor add cost/noise?

---

## 3. Inventory (per region)

### R-A: The 8 perspectives — refactor-candidacy probe

I probe each perspective for "is this doing multiple distinct cognitive jobs that could split?"

| # | Perspective | Spec-text bundled jobs | Refactor candidacy |
|---|---|---|---|
| 1 | **Technical / Logical** | Single mode (technical correctness, logical structure). | NOT a candidate. |
| 2 | **Human / User** | Single mode (user-of-the-deliverable). Could conceivably split into "deliverable-consumer" vs "stakeholder," but not motivated by frame-exit. | NOT a strong candidate. |
| 3 | **Strategic / Long-term** | Single mode (long-term consequences). | NOT a candidate. |
| 4 | **Risk / Failure** | Single mode (failure modes and risks). | NOT a candidate. |
| 5 | **Resource / Feasibility** | Single mode (resource constraints). | NOT a candidate. |
| 6 | **Ethical / Systemic** | Single mode (when applied). | NOT a candidate. |
| 7 | **Definitional / Consistency** | **HEAVY** — bundles 3 distinct cognitive jobs in the spec text (lines 213): (a) forward consistency: *"Does this interpretation contradict any established definitions, principles, or prior stabilized models?"* (b) anchor-strength weighting: *"Check the claim against the strongest known anchors. If a weak anchor contradicts a strong anchor, the weak anchor must justify the override."* (c) reverse self-consistency: *"But also check the reverse: does the established definition contradict ITSELF? Does its stated purpose align with its actual mechanisms?"* | **STRONG candidate.** |
| 8 | **Phase / Calibration-State** | Single mode (project-phase / calibration-state dependency check) with sub-questions. | NOT a strong candidate. |

**Critical observation about #7 (D/C):** the spec phrase *"established definitions, principles, or prior stabilized models"* is broad — it includes the ENTIRE project's established model space, not just the inquiry's frame. But in the prior Memory failure's application of D/C (line 115 of `docarchive/sensemaking.md`):
> Tested: does the proposal's "Memory as 7th axis" contradict `_meta_state.md` already being the project's memory artifact?
> Resolved: No — `_meta_state.md` is the artifact; the axis is whether the system READS/WRITES it autonomously vs. a human curating it.

The application narrowed D/C to "within-inquiry stabilized models" (it tested against `_meta_state.md` — a within-frame artifact — but didn't test against the project's broader memory model that includes per-inquiry md files). **The spec is broad; the application was narrow.** This narrowing is exactly what the refactor would prevent.

### R-B: The frame-exit gap — what cognitive move is missing?

Per the prior drill-down's chain attribution, the missing move is: *"step out of the inquiry's frame; check whether the inquiry's frame's anchor-set EXCLUDES referents that exist project-wide."*

For the Memory failure: stepping out of the meta-loop frame and asking "what does Memory mean project-wide?" — this would have surfaced per-inquiry md files. The user's correction did exactly this.

This move is partially within D/C's spec text (broad reading: "prior stabilized models" includes the project's established broader memory model). But the move is NOT explicitly named or operationalized — D/C focuses on "contradict" (consistency), not on "exclude" (completeness/inventory).

**Frame-exit gap = D/C's broad scope is spec'd but not explicitly operationalized as a distinct sub-perspective.**

### R-C: The non-hurt criterion — generic capability

What does Sensemaking look like on a generic non-frame-bounded inquiry?

Examples of non-frame-bounded inquiries:
- A code review: no inherited multi-value terms, no organizing taxonomic frame.
- A business strategy decision: similar — concrete options, not a framework.
- A bug diagnosis: specific to the bug; no axes / ladder.
- A research question: open-ended; usually no rigid frame.

For these inquiries, the proposed refactor's frame-exit sub-perspective should be cheap-to-skip when there are no inherited frame-bounded terms. Specifically:
- If there are no inherited terms in the inquiry's commitments, the frame-exit check has no targets — it auto-passes / is skipped.
- If there are no organizing frames (multi-axial models, taxonomies, ladders), the "frame's scope" is just "the inquiry's straightforward terms" and frame-exit is trivially satisfied (no frame to exit).

So the cost on non-frame-bounded inquiries: minimal-to-zero, gated by the presence of inherited multi-value terms and organizing frames.

**Generic capability is not hurt** if the gating is correctly specified.

---

## 4. Signal Log

| ID | Signal | Source / type | Action |
|---|---|---|---|
| S1 | D/C's spec text bundles 3 distinct cognitive jobs (forward consistency, anchor weighting, reverse self-consistency) | Direct spec evidence | **Probed** (R-A) — confirms refactor candidacy |
| S2 | D/C's spec phrase "prior stabilized models" is broad (includes project-wide); the prior Memory application narrowed it | Comparative evidence (spec vs application) | **Probed** (R-A) — confirms refactor opportunity is in scope-clarification, not new behavior |
| S3 | The other 7 perspectives are single-mode; no candidate matches D/C's structural overload | Pattern across R-A | **Probed** — confirms D/C is THE candidate |
| S4 | Frame-exit move is partially in D/C's broad spec but not explicitly operationalized | Cross-reading | **Probed** (R-B) — confirms the missing thing is real |
| S5 | Generic non-frame-bounded inquiries have no inherited multi-value terms; the frame-exit sub-perspective auto-skips | Hypothetical-test | **Probed** (R-C) — confirms non-hurt under correct gating |
| S6 | Phase / Calibration-State has analogous structure (conditional perspective with gating) — the spec's existing pattern supports gated perspectives | Pattern | **Probed** — confirms gating is a known idiom in the spec |
| S7 | The refactor preserves existing D/C behavior in one sub-perspective (consistency) and makes the missing scope (frame-exit completeness) a first-class operation | Refactor design | **Probed** — confirms the split is true refactor (not just renaming) |

---

## 5. Confidence Map

| Region | Status | Notes |
|---|---|---|
| R-A: 8 perspectives surveyed | **Confirmed** | Direct spec text; D/C identified as the only strong candidate |
| R-B: frame-exit gap | **Confirmed** | Gap is real per prior drill-down + spec-text broad-vs-narrow comparison |
| R-C: non-hurt criterion | **Scanned** | Hypothesis-tested via thought experiments on non-frame-bounded inquiries; auto-skip path is plausible but not yet empirically tested. Reduce to non-hurt UNDER CORRECT GATING. |
| Whether the refactor is structurally clean | **Confirmed** | D/C's existing 3 jobs (forward consistency, anchor weighting, reverse self-consistency) are all CONSISTENCY checks; adding a 4th (frame-exit completeness) would overload further. Splitting is justified. |
| Whether the gating prevents spurious firing | **Scanned** | Gating proposal: trigger sub-perspective only when (a) inquiry has inherited terms from prior findings or framing-level commitments AND (b) those terms are used across multiple values/levels (load-bearing). |
| Whether N=1 evidence justifies the spec change | **Scanned (NO)** | Per loop_diagnose Step 5: defer the recommendation pending M4 audit; the design analysis stands but the commitment is still gated on multi-instance evidence. |

No region adjacent to "Confirmed" is "Unknown" — gaps are at the periphery.

---

## 6. Frontier State

**Stable.** Three exploration cycles converged:
- Cycle 1: surveyed all 8 perspectives; identified D/C as sole strong refactor candidate.
- Cycle 2: probed D/C's spec text vs application; confirmed scope-narrowing in application.
- Cycle 3: tested non-hurt criterion on hypothetical non-frame-bounded inquiries; gating proposal sketched.

Discovery rate: declining. No new perspectives to surface; no new failure modes for D/C application.

Bounded gaps: the gating's empirical effectiveness is the only unknown — addressable by M4 audit (already pending from prior loop_diagnose finding).

Convergence: **achieved**.

---

## 7. Gaps and Recommendations

### Refactor-candidate identification (concrete answer)

**Definitional / Consistency** is the candidate. It bundles 3 distinct cognitive jobs in its spec text (forward consistency, anchor-strength weighting, reverse self-consistency) — all CONSISTENCY checks. The frame-exit completeness move is partially within the spec's broad reading ("prior stabilized models" can include project-wide) but is not explicitly operationalized. Splitting cleanly into:

- **Definitional / Internal Consistency** — preserves the existing 3 jobs (forward, weighting, reverse) but explicitly scopes them to within-inquiry stabilized models. This is what the application currently does, made explicit.
- **Definitional / Frame-exit Completeness** (or **Definitional / Project-wide Inventory**) — operationalizes the broad scope: for inherited terms or framing-level commitments, ask "does the inquiry's frame exclude referents that exist project-wide?"

The split:
- Adds NO new substantive behavior beyond what D/C's broad spec already implies.
- Makes the application-time recognition easier (each scope has its own name).
- Preserves generic capability via gating (frame-exit sub-perspective fires only on inherited multi-value terms).

### Gating (prevents non-hurt failure)

The frame-exit sub-perspective fires WHEN:
1. The inquiry's commitments include terms inherited from prior findings, framing-level commitments, or upstream taxonomies.
2. AND those terms are used across multiple values/levels (i.e., load-bearing terms in multi-row tables, multi-axis frames, ladders, or other organizing structures).

If 1 and 2 are not both true, the sub-perspective is skipped. This is analogous to Phase / Calibration-State's existing conditional gating ("when the inquiry involves rules that may behave differently in different project phases or calibration states").

### Recommendations to next disciplines

- **Sensemaking should:**
  1. Stabilize the claim that D/C is the sole strong refactor candidate (via load-bearing concept test + perspective-blindness check on the user's MUST conditions).
  2. Test whether the proposed split is structurally clean (each sub-perspective handles distinct cognitive moves; no overlap).
  3. Apply the specific-vs-pattern check: this analysis is from N=1; the broader-pattern claim about "perspectives that bundle multiple jobs" might apply elsewhere.

- **Decomposition should:**
  1. Partition the deliverable into: (P1) refactor candidate identification, (P2) split design (sub-perspective texts), (P3) gating spec, (P4) non-hurt argument, (P5) recommendation/verdict.

- **Innovation should:**
  1. Generate the actual split text for both sub-perspectives.
  2. Apply mechanisms (Domain Transfer, Inversion) to confirm the split is the right shape vs alternatives (e.g., would adding an Ethical/Systemic-style conditional perspective be better?).
  3. Compare refactor vs original M7 (add new perspective) — which is structurally cleaner?

- **Critique should:**
  1. Test whether the refactor's spec-clarification claim ("D/C broad scope already implies frame-exit") is honest or stretching.
  2. Test the gating's tightness — would it fire on this inquiry? (this inquiry HAS inherited terms — "Sensemaking perspectives" is inherited from spec; should fire.)
  3. Verify that the recommendation respects loop_diagnose Step 5 (DEFERRED pending audit).
  4. Apply self-reference resistance — this analysis uses Sensemaking to redesign Sensemaking.

### What was NOT explored (deliberate scope cuts)

- Whether other Sensemaking spec sections (Phase 1 anchor types, Phase 3 ambiguity collapse, Phase 4 DOF reduction) have similar refactor candidates. Out of scope.
- Whether the refactor would be retroactively applied to past inquiries or only forward. Implementation question; out of scope for design analysis.
- Whether the new "Frame-exit Completeness" sub-perspective should also be added to Critique's specification-gap probe. Adjacent maintenance candidate; flag for future inquiry.
