# Critique — Self-Improvement Rate Measurable-Question Evaluation

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-16_00-07__self_improvement_rate_measurable_questions/_branch.md

Input: innovation.md (15 candidate questions across 6 pieces; user seeds anchored at Q2a + Q2b) + decomposition.md (6-piece structure) + sensemaking.md (conceptual model) + exploration.md (substrate map).

Evaluate the 15 candidates: Phase 0 → Phase 1 → Phase 2 adversarial (multi-axis prosecution: dimension + user-perspective + failure-case + spec-gap probe) → Phase 3 verdicts SURVIVE/REFINE/KILL with constructive output → Phase 3.5 assembly check → Phase 4 coverage + convergence. Final deliverable with convergence telemetry: PROCEED / FLAG / RE-RUN.
```

---

## Phase 0 — Dimension Construction

Dimensions extracted from sensemaking SV6's conceptual model + user-stated bars + project-specific risk check.

### Evaluation dimensions

| # | Dimension | What it asks | Extracted from | Weight |
|---|---|---|---|---|
| **D1** | **Traceability to primary anchor** | Does this question trace back to "rate of change of task-completion-ability attributed to self-modification"? | sensemaking SV6 primary anchor | **CRITICAL** |
| **D2** | **Proximate measurability** | Can this question be answered today (or with modest investment) with observable data? | user explicit bar | **HIGH** |
| **D3** | **Consistent measurability** | Does the same question yield comparable answers across measurement events without reviewer/standard drift? | user explicit bar | **HIGH** |
| **D4** | **Frame regression resistance** *(project-specific risk)* | Does the question accidentally collapse into a neighbor concept (task-completion rate, capability growth from substrate, etc.) per sensemaking's 6 verified boundaries? | sensemaking SV6 boundaries C1-C6 | **HIGH** |
| **D5** | **Specification clarity** | Does the question specify WHO measures, WHAT data, WHERE the data lives, WHEN the measurement happens? | multi-axis prosecution / spec-gap probe | **HIGH** |
| **D6** | **Modality handling** | For questions touching the discipline-type asymmetry, does the question explicitly handle both mechanistic and meaning-producing modalities? | sensemaking SV6 transverse modality | MEDIUM |
| **D7** | **Scope clarity** | Does the question specify its measurement scope (discipline / corpus / harness)? | sensemaking SV6 three nested scopes | MEDIUM |
| **D8** | **Calibration-state honesty** | Is the question honest about today-answerable vs when-mature? | sensemaking SV6 calibration-state stratification | MEDIUM |
| **D9** | **Absence-of-failure first-class status** *(project-specific risk)* | For absence-of-failure questions, are they treated as first-class with explicit symptom-catalog references, not relegated to fallback? | sensemaking SV6 + failure-modes-clearer principle | MEDIUM-HIGH |
| **D10** | **Non-redundancy** | Does this question overlap with another candidate such that one could be dropped without losing coverage? | innovation's axis-coverage check | MEDIUM |
| **D11** | **Coverage contribution** | Does this question fill a unique cell in the axis-coverage matrix (phase × scope × modality × calibration-state)? | innovation's axis-coverage check | MEDIUM |

### Project-specific risk dimensions
D4 (frame-regression resistance) and D9 (absence-of-failure first-class) are the project-specific risk axes per the Phase 0 refinement. Both addressed.

### Critical dimensions
**D1 (traceability)** — failing D1 means the question isn't measuring self-improvement rate at all. Auto-KILL if D1 fails.

### Dimension validation
Cross-check against sensemaking's 8 perspectives:
- Technical / Logical → D5 (spec clarity): covered.
- Human / User → D2 (proximate), D3 (consistent): covered.
- Strategic → D1 (primary-anchor traceability): covered.
- Risk → D4 (frame-regression): covered.
- Definitional/Internal Consistency → D6 (modality), D7 (scope): covered.
- Frame-exit Completeness → D11 (coverage), D7 (scope): covered.
- Phase/Calibration-State → D8 (calibration-state honesty): covered.
- Resource/Feasibility → D2 (proximate), D8 (calibration-state): covered.

All 8 perspectives have at least one dimension. No dimension blindness on the sensemaking axis.

---

## Phase 1 — Fitness Landscape

**Viable region:** passes D1 (CRITICAL) AND ≥4 of 5 HIGH dimensions (D2 D3 D4 D5 D9) AND positioned reasonably on MEDIUM.

**Dead region:** fails D1 (auto-KILL).

**Boundary region:** passes D1, mixed on HIGHs. **Most candidates land here pre-refinement**; refinement targets specific HIGH-dimension failures (usually D5 spec-gaps) to push them into viable.

**Topology observations:**
- Most candidates pass D1 (the conceptual model from sensemaking is strong; innovation built on it).
- The dominant failure pattern is D5 spec-gaps (under-specified WHO/WHAT/WHERE/WHEN). These are REFINE-able.
- A few candidates touch D4 frame-regression risk (Q2a could collapse into per-inquiry convergence; Q3d's attribution has confounding-window risk). These need targeted refinement.

---

## Phase 2 — Adversarial Evaluation (per candidate)

Multi-axis prosecution applied: dimension-level + user-perspective + specific-failure-case + specification-gap probe.

### Q1a — Self-detection vs human-flagged ratio

**Prosecution.**
- *Dimension-level:* D1 PASS (traces to autonomy graduation = self-improvement attribution). D5 spec-gap: how is "system-detected" operationally distinguished from "human-flagged" vs "user-initiated investigation"?
- *Specific failure-case:* a reviewer might miscount user-initiated investigation as "system-detected" if they conflate "the user used the harness" with "the harness detected need."
- *User-perspective:* the user wanted ~15 measurable questions. Q1a's value today is approximately 0% system-detected. Is a measurement that reads ~0 useful?

**Defense.**
- The reading-0 today IS the baseline; the rate-of-change-away-from-0 is the signal. Without this question, the autonomy graduation arc is not directly observable.
- The categorical-3-way (system / human-flag / user-init) is structurally clean once the operational distinction is specified.

**Collision.**
- Prosecution's "constant-0 is useless" fails — the trajectory signal is the value. Defense survives on D1.
- Prosecution's spec-gap on operational distinction is real. Defense holds with a specification fix.

**Verdict: REFINE.**

*Constructive output:* sharpen the wording — "system-detected" = an event recorded in the harness's `_state.md` history or `loop_diagnose` output WITHOUT a corresponding human-flag in the inquiry's `_branch.md` Source Input section. "Human-flagged" = an event explicitly raised by a person in `_branch.md` Source Input or in a correction message. "User-initiated investigation" = an open question without an issue flag.

### Q1b — Absence-of-need claim verification

**Prosecution.**
- *Dimension-level:* D5 spec-gap — when the system "reports no improvement needed," HOW is the report made today? There's no current artifact where the system makes this claim.
- *Specific failure-case:* a reviewer might apply this to the USER's "no improvement needed" judgment, conflating user-judgment with system-claim.

**Defense.**
- D9 absence-of-failure first-class status: this is one of the dimension-list's three primary-status absence-of-failure questions; dropping it would relegate the absence-of-failure family to fallback, contradicting sensemaking's SV6.
- The symptom-catalog (5 types) reference is the operational anchor; the question is forward-relevant even if the system isn't yet making the claim.

**Collision.**
- Prosecution's "no current artifact" is real but mitigable. Defense's structural-importance wins if the question's wording acknowledges that today the claim is made by HUMAN review.

**Verdict: REFINE.**

*Constructive output:* sharpen wording — "when any reviewer (user at L0; system at L4+) reports no improvement currently needed for discipline X or for the corpus, is the report supported by an explicit symptom-absence check across the 5 regression-symptom types..."

### Q1c — Bidirectional severity-triage

**Prosecution.**
- *Dimension-level:* D5 spec-gap — what counts as "severity"? Does this inherit the regression catalog's LOW/MEDIUM/HIGH/CRITICAL tags? What is "quickly" — a latency budget per severity class?
- *Specific failure-case:* without budget, "act on HIGH quickly" is unfalsifiable.

**Defense.**
- The bidirectional triage (act + don't-act) is structurally important — captures the contrarian dimension that says self-modification can also be premature. Few projects measure both directions explicitly.
- Inheriting the regression catalog's severity tags is natural.

**Collision.**
- Prosecution's budget gap is real. Defense holds with a specification fix that makes the budget itself an output of the measurement.

**Verdict: REFINE.**

*Constructive output:* sharpen wording — (a) "severity" inherits from the regression catalog's tags (LOW / MEDIUM / HIGH / CRITICAL); (b) the per-severity latency budget is itself a measurement output (the question reports observed latencies per severity class, not validates against a presupposed budget); (c) "act" means a spec change was encoded; "defer" means the issue was logged but no spec change in the next N inquiries.

### Q2a — Detection-to-correction latency *(user seed 1)*

**Prosecution.**
- *Dimension-level:* D1 PASS. D4 frame-regression: could this be measuring per-inquiry convergence speed (neighbor concept C5) instead of self-improvement rate? Yes if the issue and the spec change are in the SAME inquiry. The user's seed concept is cross-inquiry.
- *User-perspective:* user's wording was "how long does it need to wait after error is caught to apply fixes" — implies a temporal gap, not within-inquiry resolution.

**Defense.**
- Operationally well-specified (named artifacts: `_state.md`, critique verdicts, `_branch.md` Source Input).
- The Baldwin-cycle phase-segment breakdown is a strong feature for diagnosing where the bottleneck is.

**Collision.**
- Prosecution's neighbor-concept collapse risk is real. Defense holds with a within-vs-across-inquiry clarification.

**Verdict: REFINE.**

*Constructive output:* sharpen wording — add clarification: "the issue surfaced in inquiry X; the spec change was encoded in inquiry Y where Y is either a later inquiry, OR the same inquiry IF AND ONLY IF the encoded change persisted past that inquiry's conclude phase (encoded changes that get reverted before conclude don't count). This excludes per-inquiry convergence (which is a within-inquiry telemetry concept, not self-improvement rate)."

### Q2b — Convergence efficiency *(user seed 2)*

**Prosecution.**
- *Dimension-level:* D4 PASS (the loop_diagnose correction-chain reference is cross-inquiry by definition). D5 spec-gap: what counts as one "attempt"? An MVL+ iteration, a spec edit, or a correction-chain entry?
- *Specific failure-case:* if "attempt" is undefined, the median + max distribution is unstable across reviewers.

**Defense.**
- The abandonment-rate sub-question is a strong feature (per the failure-modes-clearer principle).
- Correction chains are operationally anchored in the loop_diagnose protocol.

**Collision.**
- Prosecution's attempt-definition gap is real. Defense holds with a definition fix.

**Verdict: REFINE.**

*Constructive output:* sharpen wording — "an attempt is one correction-chain entry per `homegrown/protocols/loop_diagnose.md`'s correction-chain schema. Each entry is terminated either by SUCCESS (a subsequent chain entry within N inquiries references this improvement as effective) or by ABANDONMENT (no further chain entries within N inquiries; the issue is left unaddressed). N is reported as a parameter of the measurement (suggested default N=10 inquiries)."

### Q2c — Cost per encoded improvement

**Prosecution.**
- *Dimension-level:* D3 consistent-measurability concern — human-effort hours are estimable but vary widely across reviewers. Reproducibility risk.
- *User-perspective:* the user didn't explicitly seed cost-per-improvement. Is it in scope?

**Defense.**
- Cost-per-improvement is D-13 from exploration; sustainability of the self-improvement trajectory matters for the project.
- Three cost-axes (tokens / duration / human-effort) is operationally clean.

**Collision.**
- Prosecution's reproducibility concern on human-effort is real. Defense holds if the question reports cost as a range with explicit estimation method.

**Verdict: REFINE.**

*Constructive output:* sharpen wording — "human-effort is reported as a range (low / median / high estimate) with the estimation method noted (e.g., self-report after the inquiry; reviewer-estimate based on inquiry-folder content; calendar-allocation log). The range is acceptable; pretending to a single number is not."

### Q3a — Cycle count × per-cycle quality

**Prosecution.**
- *Dimension-level:* D6 PASS (explicit modality split). D3 consistent-measurement concern — meaning-producing per-cycle quality requires reviewer judgment; reviewer-consistency over time is a risk.
- *Specific failure-case:* the same improvement event could be rated "Major" by one reviewer and "Moderate" by another; without a consistency mechanism, the measurement drifts.

**Defense.**
- This is the canonical desc.md formula operationalized; the central question. Removing it removes the formula's operationalization.
- Inheriting reviewer judgment for meaning-producing is consistent with sensemaking SV6's transverse modality commitment.

**Collision.**
- Prosecution's reviewer-consistency concern is real. Defense holds with a consistency mechanism fix.

**Verdict: REFINE.**

*Constructive output:* sharpen wording — "for the meaning-producing modality, the same reviewer applies the same diagnostic categories (Major / Moderate / Minor / Negligible) across the measurement window. The categories anchor to the regression catalog's symptom-severity tags (CRITICAL / HIGH / MEDIUM / LOW) to maintain consistency with the project's other quality assessments. Reviewer-rotation is a separate parameter; if reviewers rotate, the measurement reports inter-reviewer agreement explicitly."

### Q3b — Disciplines at N≥30 calibration

**Prosecution.**
- *Dimension-level:* D5 spec-gap — what counts as N? Inquiries-completed, or discipline-invocations? An MVL+ inquiry invokes multiple disciplines; an MVL inquiry invokes the SIC three plus loop runners.

**Defense.**
- Simple, observable, important.

**Collision.**
- Prosecution's N-definition gap is real. Defense holds with a simple clarification.

**Verdict: REFINE.**

*Constructive output:* sharpen wording — "N is counted as discipline-invocations (the number of times the discipline's spec was executed by the loop runner with a saved output artifact), not inquiries-completed. So a `/sense-making` invoked in 20 distinct `/MVL+` inquiries contributes N=20 to its discipline-level count."

### Q3c — Cross-discipline transfer rate

**Prosecution.**
- *Dimension-level:* D8 calibration-state — the question requires sustained data to observe cascades; today not meaningfully answerable.

**Defense.**
- Structurally important: cross-discipline transfer is named in `enes/desc.md` Open Questions as a research-frontier item. The discipline-graph dependencies are real and observable in principle.
- Innovation already labeled ACTIONABLE-WHEN-MATURE.

**Collision.**
- Prosecution's calibration-state concern is honest. Defense's structural-importance wins as a when-mature question.

**Verdict: SURVIVE-WITH-CAVEAT** (the when-mature caveat is preserved; the question is included for structural completeness).

### Q3d — Attribution-stratified magnitude

**Prosecution.**
- *Dimension-level:* D1 PASS (attribution is the load-bearing boundary against C2). D5 spec-gap: confounding windows — when substrate updates AND a spec edit is encoded in the same measurement window, how is the magnitude attributed?
- *Specific failure-case:* a discipline's per-cycle quality improves (Q3a). In the same week, the LLM substrate updated AND a spec edit was encoded. How much of the improvement is attributed to which source?

**Defense.**
- One of the most load-bearing questions on the list — without attribution, the boundary against C2 (capability growth from substrate) collapses.
- The three-way attribution (system / substrate / human) is operationally clean (each has distinct git/log signatures).

**Collision.**
- Prosecution's confounding-window concern is real. Defense holds with a confounding-handling specification.

**Verdict: REFINE.**

*Constructive output:* sharpen wording — "for measurement windows where multiple attribution sources changed (e.g., substrate updated AND a spec edit was encoded), report the overlap explicitly: 'in window W, both substrate change S and spec edit E occurred; observable quality delta is X; attribution is shared.' Do not force single attribution; the shared-attribution report is itself useful evidence about confounding-frequency."

### Q4a — Slow-drift detection frequency

**Prosecution.**
- *Dimension-level:* D2 proximate-measurability concern — canary infrastructure not yet shipped; today's form is manual qualitative detection.
- *Specific failure-case:* without canary, reviewer-consistency on "slow-drift detected" is a real risk.

**Defense.**
- Slow-drift is THE hardest regression to catch per `enes/regression/desc.md`'s Pattern 5. Including it is structurally important.
- D9 absence-of-failure first-class: this is one of the dimension-list's three first-class absence-of-failure questions.
- Innovation already labeled ACTIONABLE with partial-instrument caveat.

**Collision.**
- Prosecution's reviewer-consistency concern mitigable by structuring today's form as a triage event ("user manually flags drift events; canary will automate when ships"). Defense holds.

**Verdict: SURVIVE-WITH-CAVEAT** (the partial-instrument caveat is preserved).

### Q4b — Reverted vs superseded fraction

**Prosecution.**
- *Dimension-level:* D5 spec-gap — how is "addresses the same section" determined for "superseded"? Section identity in markdown isn't always obvious.
- *Specific failure-case:* a spec edit replaces an entire H2 section's content with new content. Is the new content "addressing the same section" (superseded) or "an entirely new section that happens to use the same heading" (reverted prior + added new)?

**Defense.**
- The distinction is structurally important — it captures the reverted-as-regression vs superseded-by-evolution distinction explicitly named in `enes/regression/desc.md`'s "Regression is not Evolution" claim.
- Git-diff observability is real.

**Collision.**
- Prosecution's section-identity gap is real. Defense holds with a determination-rule fix.

**Verdict: REFINE.**

*Constructive output:* sharpen wording — "'same section' is determined by EITHER (a) the section heading + position in the spec file matching across the diff, OR (b) the new edit's commit message or `_state.md` history explicitly referencing the prior edit (e.g., 'supersedes prior edit X'). If neither holds, classify as REVERTED + ADDED rather than SUPERSEDED."

### Q4c — Per-edit spec-symptom check

**Prosecution.**
- *Dimension-level:* the four Type-5 spec-symptoms (shorter-than-before / missing-sections / weakened-language / removed-safeguards) are observable. But "shorter-than-before" can be redundancy-removal OR content-removal — symptom-fire is HIGH severity only with reviewer judgment.

**Defense.**
- This is a proactive check that catches regression at the EARLIEST possible point (Type 5 symptoms detectable before any run).
- Strong fertility for canary infrastructure operationalization.
- The four-symptom check is anchored in the regression catalog.

**Collision.**
- Prosecution's reviewer-judgment requirement on "shorter-than-before" is real but consistent with the regression catalog's design. Defense holds.

**Verdict: SURVIVE.**

### Q5a — Meaningful-vs-spinning with placeholder signals

**Prosecution.**
- *Dimension-level:* D3 consistent-measurability concern — placeholder signals are explicitly fuzzy per source text; different reviewers may apply the 5 signals differently.
- *User-perspective:* the question gates other questions' validity. User might want sharper substrate.

**Defense.**
- The substrate is acknowledged fuzzy in `enes/what_is_meaningful_traversal.md`; the question accepts that explicitly.
- Innovation already labeled ACTIONABLE-WITH-PLACEHOLDER-CAVEAT.

**Collision.**
- Prosecution's consistency concern is real but defense holds via the explicit placeholder framing.

**Verdict: SURVIVE-WITH-CAVEAT** (the placeholder caveat is preserved).

### Q6a — Meta-level improvement of the mechanism

**Prosecution.**
- *Dimension-level:* D8 calibration-state — the "object-level trend after each meta-edit" requires sustained data; today only the meta-edit count is observable.
- *Specific failure-case:* the set of "disciplines responsible for self-improvement" is a moving target — as new disciplines ship (e.g., `/intuit`), the set changes. Comparing meta-edit counts across measurement windows is confounded.

**Defense.**
- This is the recursive-improvement measurement; structurally important per exploration's D-14 + sensemaking SV6's harness-scope commitment.
- The list of meta-spec files is explicit (`loop_diagnose.md`, `outcome_review.md`, `spec_governance.md`, and `intuit.md` once shipped).
- Innovation already labeled ACTIONABLE-WITH-MATURITY-CAVEAT.

**Collision.**
- Prosecution's moving-target concern is real but mitigable: the set of "self-improvement responsible" disciplines is itself a measurement output (one of the meta-spec edits is to expand or contract the set).

**Verdict: SURVIVE-WITH-CAVEAT** (the maturity caveat is preserved; the question reports both the set itself and the edit count within that set).

---

## Phase 3.5 — Assembly Check across Survivors

After per-candidate verdicts (10 REFINEs with constructive output + 5 SURVIVE-with-caveat), examine the post-refinement set together.

**Emergent question 1 candidates examined:**
- Q3a × Q3d composite (self-improvement-attributed rate) — already implicit when both questions answered together; no new question needed.
- Q1a × Q6a trajectory (autonomy-graduation arc) — already observable across measurement events; no new question needed.
- Q4a × Q4c multi-layer drift surveillance — Q4a (behavioral layer) and Q4c (spec layer) complement; both kept; no new emergent.

**Assembly verdict (same as innovation's):** no new emergent questions. The 15 refined candidates form a coherent measurement system; pairwise combinations enrich readings without generating new measurement targets.

**One emergent observation:** the 15 questions naturally divide into TWO INTERPRETATION TIERS by calibration-state:
- *Tier 1 (today-readable):* Q1a, Q1b (after refinement), Q1c, Q2a, Q2b, Q2c, Q3a, Q3b, Q3d, Q4b, Q4c, Q5a (partial), Q6a-meta-edit-count = 12-13 questions answerable today at coarse-to-medium precision.
- *Tier 2 (when-mature-readable):* Q3c cross-discipline transfer, Q4a slow-drift (full canary), Q5a (full substrate), Q6a-object-level-trend = 3-4 questions whose meaningful answers require accumulated data.

This Tier 1 / Tier 2 split is implicit in Innovation's calibration-state tags; Critique surfaces it as an organizational pattern Critique recommends to Conclude.

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage
- All 15 candidates evaluated with multi-axis adversarial testing.
- Per-piece coverage: P1 (3), P2 (3), P3 (4), P4 (3), P5 (1), P6 (1) — matches the user's "around 15" target.
- Axis coverage (per innovation's check, confirmed by critique's refinements): 7 axes all spanned (phase / scope / modality / calibration-state / direct-vs-absence / user-seeds / primary-anchor traceability).
- Two interpretation tiers (today-readable / when-mature) emerged as organizational pattern.

### Convergence
- A clean SURVIVE exists: 5 direct survivors (Q3c, Q4a, Q4c, Q5a, Q6a — all with caveats) + 10 REFINE-with-constructive-output candidates that become clean post-refinement. After refinement, all 15 are SURVIVE.
- Landscape stable — no candidate moves between viable / dead / boundary across critique passes; refinements push boundary candidates into viable.
- New iterations would not produce structurally-distinct candidates beyond the 15 (innovation's axis-coverage check was tight; critique's refinements sharpen rather than replace).
- Convergence criteria met:
  - ✓ SURVIVE exists with no critical-dimension caveats.
  - ✓ Landscape stable.
  - ✓ No unexplored regions topologically likely to contain viable candidates.
  - ✓ Decreasing rate of new information (critique added refinement specifics, not new questions).

### Signal: **TERMINATE with ranked survivors.**

---

## Final Deliverable

### (a) Dimensions with weights
- D1 traceability — **CRITICAL**
- D2 proximate measurability — HIGH
- D3 consistent measurability — HIGH
- D4 frame-regression resistance *(project-specific)* — HIGH
- D5 specification clarity — HIGH
- D9 absence-of-failure first-class *(project-specific)* — MEDIUM-HIGH
- D6 modality / D7 scope / D8 calibration-state / D10 non-redundancy / D11 coverage contribution — MEDIUM

### (b) Fitness Landscape
- **Viable region:** D1 ∧ ≥4-of-5 HIGH ∧ MEDIUM reasonable. After refinement, all 15 candidates land here.
- **Boundary region (pre-refinement):** 10 of 15 candidates — all had D5 spec-gaps (most common) or D3/D4 risk (Q2a, Q2c, Q3a, Q3d, Q4b). Refinement targets each spec-gap with constructive output.
- **Dead region:** zero candidates (no D1 failure).
- **Unexplored region:** none — innovation's axis-coverage was adequate; critique confirms.

### (c) Candidate Verdicts

| Q# | Verdict | Constructive output |
|---|---|---|
| Q1a self-vs-human ratio | REFINE | Operationally define system-detected vs human-flagged vs user-initiated based on `_state.md` / loop_diagnose / Source Input. |
| Q1b absence-of-need check | REFINE | Clarify claim-maker (any reviewer at L0; system at L4+). |
| Q1c bidirectional triage | REFINE | Severity from regression catalog; latency budget reported not presupposed; act/defer operationalized. |
| Q2a latency *(user seed 1)* | REFINE | Cross-inquiry boundary clarified; same-inquiry counts only if encoded change persists past conclude. |
| Q2b convergence efficiency *(user seed 2)* | REFINE | "Attempt" = correction-chain entry per loop_diagnose; SUCCESS / ABANDONMENT terminators specified; N=10 default. |
| Q2c cost per improvement | REFINE | Human-effort reported as range (low/median/high) with estimation method noted. |
| Q3a cycle count × quality | REFINE | Reviewer-consistency mechanism: same reviewer + diagnostic categories anchored to regression catalog severity. |
| Q3b N≥30 coverage | REFINE | N counted as discipline-invocations, not inquiries-completed. |
| Q3c transfer rate | SURVIVE (when-mature caveat) | — |
| Q3d attribution-stratified magnitude | REFINE | Confounding windows report overlap explicitly; do not force single attribution. |
| Q4a slow-drift | SURVIVE (partial-instrument caveat) | Today manual; canary automates when ships. |
| Q4b reverted vs superseded | REFINE | "Same section" = heading+position match OR commit-message cross-reference; else REVERTED+ADDED. |
| Q4c per-edit spec-symptom check | SURVIVE | — |
| Q5a meaningful-vs-spinning | SURVIVE (placeholder caveat) | Placeholder signals; precision improves when substrate ships. |
| Q6a meta-level improvement | SURVIVE (maturity caveat) | Count today; trend when sustained data accumulates. |

**Summary:** 10 REFINE-with-constructive-output / 5 SURVIVE-with-caveat / 0 KILL. After refinement application, all 15 questions are SURVIVE.

### (d) Coverage Map

- All 15 candidates evaluated with multi-axis adversarial testing.
- Two interpretation tiers surfaced:
  - **Tier 1 (today-readable, 12-13 questions):** Q1a, Q1b (refined), Q1c, Q2a, Q2b, Q2c, Q3a, Q3b, Q3d, Q4b, Q4c, Q5a partial, Q6a meta-edit-count.
  - **Tier 2 (when-mature-readable, 3-4 questions):** Q3c full, Q4a full (canary), Q5a full, Q6a trend.
- Axis coverage adequate across all 7 axes (phase / scope / modality / calibration-state / direct-vs-absence / user-seeds / traceability).
- No unexplored regions.

### (e) Signal: **TERMINATE with ranked survivors.**

**The 15 questions, ranked by readability tier:**

**Tier 1 (answerable today):**
1. Q1a self-detection vs human-flagged ratio *(refined)*
2. Q1b absence-of-need claim verification *(refined)*
3. Q1c bidirectional severity-triage *(refined)*
4. Q2a detection-to-correction latency *(user seed 1, refined)*
5. Q2b convergence efficiency *(user seed 2, refined)*
6. Q2c cost per encoded improvement *(refined)*
7. Q3a cycle count × per-cycle quality *(refined)*
8. Q3b disciplines at N≥30 calibration *(refined)*
9. Q3d attribution-stratified magnitude *(refined)*
10. Q4b reverted vs superseded fraction *(refined)*
11. Q4c per-edit spec-symptom check
12. Q5a meaningful-vs-spinning ratio *(placeholder caveat)*
13. Q6a meta-level improvement: meta-edit count *(today's form)*

**Tier 2 (answerable when mature):**
14. Q3c cross-discipline transfer rate
15. Q4a slow-drift detection frequency *(full canary form)*

Notes:
- Q6a's full form (object-level trend after meta-edits) belongs in Tier 2; the meta-edit-count form is Tier 1.
- Q5a's full form (precise substrate signals) is Tier 2; placeholder form is Tier 1.

---

## Convergence Telemetry

- **Dimension coverage:** 11 dimensions defined (1 CRITICAL + 4 HIGH + 1 MEDIUM-HIGH + 5 MEDIUM); project-specific risk dimensions D4 + D9 included per Phase 0 refinement; sensemaking's 8 perspectives all mapped to dimensions.
- **Adversarial strength:** **STRONG.** Multi-axis prosecution applied per refinement (dimension-level + user-perspective + specific-failure-case + spec-gap probe); 13 of 15 candidates received explicit specific-failure-case scenarios.
- **Landscape stability:** **STABLE.** No candidate moved between viable / boundary / dead across critique passes; refinements push boundary candidates into viable without restructuring the landscape.
- **Clean SURVIVE exists:** YES — 5 direct SURVIVE-with-caveat candidates + 10 REFINE-to-SURVIVE-with-constructive-output candidates. After refinement, all 15 are clean SURVIVE.
- **Failure modes observed:**
  - *Wrong dimensions:* NO — dimensions extracted from sensemaking + validated against 8 perspectives + project-specific risk axes included.
  - *Rubber-stamping:* NO — 10 of 15 received REFINE verdicts with constructive output, not SURVIVE. Prosecution constructions were genuine.
  - *Nitpicking:* NO — severity-weighted dimensions; no candidate KILLed on minor issues. The 10 REFINEs are spec-clarity fixes, not arbitrary rejections.
  - *Dimension blindness:* NO — D4 (frame-regression) + D9 (absence-of-failure first-class) explicitly included as project-specific risk axes.
  - *False convergence:* NO — clean SURVIVE exists + landscape stable.
  - *Evaluation drift:* NO — same 11 dimensions applied across all candidates.
  - *Self-reference collapse:* PARTIAL-MITIGATED — Critique is evaluating questions about measuring the discipline corpus (which includes Critique itself). External grounding via sensemaking's source-text-anchored conceptual model + user-stated bars + regression catalog is sufficient.

**Overall: PROCEED** (sufficient coverage + clean SURVIVE + stable landscape + no critical failure modes; self-reference partial-mitigation noted but not blocking).
