# Innovation: Loop diagnose — Memory ambiguity in metaloop ladder

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/_branch.md`

> **Question:** Which discipline / protocol / stage was responsible for the L0 Memory misclassification, and what maintenance candidate prevents the broader class of mistake?
>
> **Goal:** Evidence-backed failure hypotheses, the affected discipline / runner stage(s), shortcoming type(s), maintenance candidates with evaluation gates, and a final diagnostic verdict.

The user framed this as a *"simple but intolerable"* mistake — both an instance to fix and a class to prevent.

---

## Seed and Direction

### Seed (Failure type)

The L0 Memory cell shipped wrong. Three catch points (Sensemaking, Innovation, Critique) had a chance to catch it; none did. The MVL+ runner had no inter-discipline term safety check. The seed asks: which catch point should be improved, and how cheaply?

### Intuition direction

- **Context:** the diagnostic frame from Sensemaking — application-level failure (specs are right, application missed); two orthogonal classes (term-ambiguity + baseline-blindness); three layers of maintenance opportunity.
- **Valuation:** the user said "intolerable." Restoring trust matters more than perfect coverage. **Cheap catches that close the obvious gap** are valued over **deep redesigns that promise more but cost more**.
- **Motivation:** prevent recurrence (Reflect-channel suspected); maintain the project's "Failures are data" principle without overreacting to N=1.

This direction tells us to favor: low-risk additive clarifications, runner-level cheap catches, audit-before-spec-change.

---

## Phase 2 — Generate (7 Mechanisms × 3 Variations)

### Mechanism 1 — Lens Shifting (Framer)

**Current frame:** "Fix the discipline that failed primarily (Sensemaking)."

**1.1 Generic shift — runner-as-discipline frame.** Re-evaluate the failure under "the MVL+ runner is itself a discipline." If runner has its own quality measures, the catch points include orchestration, not just per-discipline tests. Consequence: M1 (pre-CONCLUDE checklist) becomes a runner-level upgrade.

**1.2 Focused shift — first-reader frame.** Re-evaluate from the perspective of the person reading the finished `finding.md`. The user IS the first reader who caught the L0 error. The catch happened post-publication. Mitigation: simulate the first-reader before publication (run a brief "fresh eyes" pass during CONCLUDE).

**1.3 Contrarian shift — user-as-catch-point frame.** Re-evaluate under "the user IS the final catch and that's architecturally fine." Don't add tests; trust the human-loop. The user caught it in seconds; that's evidence the human catch-point works. Maintenance: don't add tests at all; instead, make the user's review easier (clearer table layouts, baseline-row highlighted).

### Mechanism 2 — Combination (Generator)

**2.1 Generic — load-bearing-concept-test ⊗ multi-axis-prosecution-depth.** Sensemaking's load-bearing concept test (proxy-vs-structural, discoverability, user-language) and Critique's multi-axis prosecution depth (user-perspective, failure-case scenario, specification-gap probe) have similar shapes. Combine into a unified protocol invoked by both disciplines on the same terms with different axes. Reduces duplicated thinking.

**2.2 Focused — baseline-row-scrutiny ⊗ determination-mechanism-check.** Decomposition's determination-mechanism check (P5/Step 7) asks "if a runtime determination is needed, is the mechanism specified?" Combined with baseline-row scrutiny: "for every runtime-determined value, including the L0/baseline row, is the determination mechanism specified?" Catches both per-cell determinations AND the baseline-cell determination.

**2.3 Contrarian — LOOP_DIAGNOSE's standardized output ⊗ pre-CONCLUDE checklist.** Loop_diagnose has a standardized template; CONCLUDE doesn't have a pre-publish check. Combine: a brief CONCLUDE-pre-check that runs the loop_diagnose-style standardized scan ("for each term, are there multi-value usage points? are they each consistent?") before archiving and publishing.

### Mechanism 3 — Inversion (Framer)

**Current belief:** "More tests catch more failures."

**3.1 Component-level — fewer tests, more rigorously applied.** The spec already has the test; the gap is application. Reduce other noise in Sensemaking phase 3 to make the load-bearing concept test more salient. (Risk: may not actually fire more reliably.)

**3.2 System-level — stratify catch-points by cost, not by discipline.** Cheap catches go in the runner; expensive catches go in disciplines. Currently expensive Sensemaking catches bear burden that runner-level pre-checks could absorb cheaply.

**3.3 Root-level — pipeline order is wrong for term-disambiguation.** Sensemaking runs BEFORE Decomposition + Innovation, so it can't see the concrete cell values they'll produce. Term-safety should happen AFTER Innovation produces concrete commitments, OR at CONCLUDE pre-publish. (This is what M1 implements.)

### Mechanism 4 — Constraint Manipulation (Framer)

**4.1 Generic — ADD: every committed term in multi-row/multi-value context must have a one-line operational definition before stabilization.** Forces upstream disambiguation. Cost: adds a per-term sentence to Sensemaking SV6.

**4.2 Focused — REMOVE: Innovation inherits Sensemaking's stabilized concepts as truth.** If Innovation can re-disambiguate during concrete value construction, the L0 cell would have triggered "wait, what does Memory MEAN at L0?" Cost: pipeline becomes more redundant; Innovation may regress to second-guessing Sensemaking.

**4.3 Contrarian — ADD: user must audit every published finding within 24 hours of CONCLUDE.** Makes the human catch-point explicit and timed. Cost: user burden; trust-erosion if missed.

### Mechanism 5 — Absence Recognition (Generator)

**5.1 Gap: there's no "first reader" check in MVL+ pipeline.** Findings are written by CONCLUDE but never tested against a fresh-eyes reader simulation before publication. The fix: M1 pre-CONCLUDE checklist.

**5.2 Focused gap: there's no inventory of project-wide load-bearing terms.** If we maintained a `homegrown/glossary.md` (or `enes/terms.md`) with operational definitions, every inquiry could check candidate terms against the glossary at Sensemaking SV6.

**5.3 Redesign-from-scratch absence: term commitment registry.** If MVL+ were redesigned today, every Sensemaking SV6 would commit its load-bearing terms to a per-inquiry registry; downstream disciplines must use registered definitions; CONCLUDE checks consistency. (Heavier than 5.2; introduces a per-inquiry artifact.)

### Mechanism 6 — Domain Transfer (Generator)

**6.1 Generic — type systems in programming languages.** Variables have declared types; type-mismatch is a compile error. Transfer: load-bearing terms in Sensemaking commitments should have "types" (e.g., Memory: type=Multi-Variant{per-inquiry, cross-inquiry, navigator}). Critique can then check type-fit at every use. (Equivalent to 5.3 in spirit.)

**6.2 Focused — code review checklists.** PRs go through reviewer checklists. Transfer: CONCLUDE runs a finding-checklist with one item: "is every term unambiguous? Is every multi-row table's baseline row scrutinized?" — equivalent to M1.

**6.3 Contrarian — surgical TIME-OUT.** Before surgery, teams pause for a checklist. Transfer: before CONCLUDE archives + publishes, run a TIME-OUT pause where the loop reviews the finding's load-bearing terms one more time. (Equivalent to 6.2 with stronger framing.)

### Mechanism 7 — Extrapolation (Generator)

**7.1 Generic 1-year — vocabulary growth.** As the project produces more findings, the term-vocabulary grows. A glossary becomes increasingly valuable; building it now amortizes future cost.

**7.2 Focused 5-year — autonomous L5 traversals.** At meta-loop L5, the system runs autonomously. Term-ambiguity caught at L0/L1 prevents downstream cascade in autonomous L5 traversals. Investing in catch-points now compounds.

**7.3 Contrarian — discontinuity: discipline-spec approach gives way to runtime-checking.** At some scale, the MVL+ pipeline becomes a RUNTIME that enforces checks rather than a GUIDE that disciplines opt into. The transition itself is a maintenance candidate (long-horizon).

---

## Phase 3 — Test (5 criteria per output)

| Variation | Novelty | Scrutiny survival | Fertility | Actionability | Mechanism indep. | Disposition |
|---|---|---|---|---|---|---|
| 1.1 (runner-as-discipline) | ✓ | ✓ | ✓ — runner becomes load-bearing | ✓ | ✓ — overlaps 3.2, 5.1 | **ACTIONABLE** — frames M1 |
| 1.2 (first-reader frame) | ✓ | ✓ | ✓ — pre-publish simulation | ✓ | ✓ — overlaps 5.1, 6.2, 6.3 | **ACTIONABLE** — frames M1 |
| 1.3 (user-as-catch-point) | ✓ | partial — survives but contrarian | partial | partial — "do nothing" is hard to commit | n/a — single mechanism | **DEFERRED** — alternative narrative; mention in P7 framing |
| 2.1 (load-bearing-test ⊗ prosecution-depth) | ✓ | ✓ | ✓ — unifies catches | partial — would need new shared protocol | ✓ — overlaps 6.1 | **DEFERRED with revival** — heavier change; revive after audit confirms recurrence |
| 2.2 (baseline-row ⊗ determination-mechanism) | ✓ | ✓ | ✓ — addresses both classes | ✓ — concrete edit | ✓ — overlaps 5.1 (baseline scrutiny in Innovation) | **ACTIONABLE** — frames M5 |
| 2.3 (loop_diagnose-style ⊗ pre-CONCLUDE) | ✓ | ✓ | ✓ — direct fix | ✓ — concrete | ✓ — overlaps 1.1, 1.2, 3.2, 5.1, 6.2, 6.3 | **ACTIONABLE** — frames M1 (highest convergence) |
| 3.1 (fewer-tests-more-rigor) | partial | partial — risky (might not fire more reliably) | partial | partial | n/a | **DEFERRED** — single-mechanism, weak evidence |
| 3.2 (stratify by cost) | ✓ | ✓ | ✓ — design principle | ✓ — guides M1 | ✓ — overlaps 1.1 | **ACTIONABLE** — design principle for M1 |
| 3.3 (move catch to post-Innovation) | ✓ | ✓ | ✓ — argues for runner-level | ✓ | ✓ — overlaps 2.3 | **ACTIONABLE** — argues for M1 |
| 4.1 (require operational def per term) | ✓ | ✓ | ✓ | ✓ | ✓ — overlaps 5.2, 5.3, 6.1 | **DEFERRED with revival** — heavier (per-term overhead); revive if audit confirms |
| 4.2 (remove Innovation inheritance) | ✓ | partial — risk of regression | partial | partial | n/a | **DEFERRED** — too disruptive for N=1 |
| 4.3 (user audits within 24h) | ✓ | partial — user burden | partial | partial — user might reject | n/a | **DEFERRED** — user-centered; mention as alternative |
| 5.1 (no first-reader check; gap) | ✓ | ✓ | ✓ | ✓ | ✓ — overlaps 1.2, 6.2, 6.3 | **ACTIONABLE** — frames M1 |
| 5.2 (project glossary) | ✓ | ✓ | ✓ — long-term value | ✓ | partial — single-mechanism in this run | **ACTIONABLE** as smaller candidate (M6 below) — start the glossary; populate over time |
| 5.3 (per-inquiry term registry) | ✓ | ✓ | ✓ — heavy but coherent | partial — adds per-inquiry artifact | ✓ — overlaps 6.1 | **DEFERRED with revival** — too heavy for N=1; revive after audit |
| 6.1 (type system transfer) | ✓ | ✓ | ✓ | partial — formal types are heavy | ✓ — overlaps 5.3 | **DEFERRED with revival** |
| 6.2 (code review checklist transfer) | partial — confirms 5.1 | ✓ | partial | ✓ | ✓ — overlaps 1.2, 5.1, 6.3 | **CONFIRMS M1** — integrates into M1 |
| 6.3 (surgical TIME-OUT transfer) | ✓ | ✓ | ✓ — strong framing for M1 | ✓ — names the M1 step's vibe | ✓ — overlaps 6.2 | **CONFIRMS M1 framing** |
| 7.1 (1-year vocabulary growth) | partial | ✓ | partial — long-term | partial | partial | **DEFERRED — long-horizon** |
| 7.2 (5-year autonomous L5 cascade prevention) | partial | ✓ | partial | partial — long-horizon | partial | **DEFERRED — long-horizon** |
| 7.3 (discontinuity: runtime enforcement) | ✓ | partial — speculative | ✓ — frontier | partial — not actionable now | partial | **RESEARCH FRONTIER** |

### Disposition counts
- **ACTIONABLE:** 1.1, 1.2, 2.2, 2.3, 3.2, 3.3, 5.1, 5.2 = **8** (some converge to same M)
- **DEFERRED with revival:** 2.1, 4.1, 5.3, 6.1 = 4
- **DEFERRED:** 1.3, 3.1, 4.2, 4.3, 7.1, 7.2 = 6
- **CONFIRMS existing:** 6.2, 6.3 = 2 (count as supporting)
- **RESEARCH FRONTIER:** 7.3 = 1
- Total: 21

---

## Assembly Check

### Convergence signal

**Strongest convergence (6+ mechanisms):** Pre-CONCLUDE term-ambiguity checklist (M1).
- 1.1 (runner-as-discipline) → frames runner-level catch.
- 1.2 (first-reader) → frames pre-publish simulation.
- 2.3 (loop_diagnose-style ⊗ pre-CONCLUDE) → directly proposes pre-CONCLUDE checklist.
- 3.2 (stratify by cost) → cheap catch belongs in runner.
- 3.3 (move catch to post-Innovation) → argues for post-pipeline placement.
- 5.1 (no first-reader gap) → directly proposes the missing check.
- 6.2 (code review checklist transfer) → confirms.
- 6.3 (surgical TIME-OUT) → confirms framing.
HIGH confidence — promote to ACTIONABLE.

**Moderate convergence (2-3 mechanisms):**
- M5 baseline-row scrutiny in Innovation: 2.2 + 5.1 + (implicit in 1.2 first-reader). Promote to ACTIONABLE.
- M6 project glossary: 5.2 + (long-horizon support in 7.1, 5.3, 6.1 deferred). Promote to ACTIONABLE as a SMALL candidate (start the file; populate over time).

**Single-mechanism (defer):**
- M2 Sensemaking spec clarification: only the framing of failure-mode; not multi-mechanism convergent. DEFERRED with revival pending audit.
- M3 Critique spec clarification: similar. DEFERRED with revival.

### Axis coverage check

| Axis | Variant in candidates | Source variations |
|---|---|---|
| Catch-point location (runner / Sensemaking-app / Critique-app / Innovation-app) | YES — M1 (runner), M5 (Innovation), M2/M3 (deferred Sensemaking/Critique) | covered |
| Failure-class addressing (term-ambiguity / baseline-blindness) | YES — M1 covers both; M5 covers baseline; M6 covers term | covered |
| Cost / risk-class (low / medium / high) | YES — M1, M5, M6 LOW; M2/M3/M5(heavy)/M6(heavy) MEDIUM | covered |
| Spec change vs application change vs new artifact | YES — M1 (runner spec edit, low), M5 (Innovation spec edit, low), M2/M3 (DEFERRED spec edits), M4 (read-only audit), M6 (new artifact, low-burden) | covered |
| Time horizon (immediate / mid / long) | YES — M1/M4/M5/M6 immediate, M2/M3/spec changes mid (after audit), 7.x long-horizon DEFERRED | covered |

All axes have variants. The candidate set is well-distributed.

---

## Final Maintenance Candidates (Committed)

Below are the 5 candidates that emerge from convergent testing, ranked by evidence strength.

### M1 — Pre-CONCLUDE term-ambiguity checklist (HIGHEST CONVERGENCE; ACTIONABLE)

- **What changes:** Add a brief checklist step in `homegrown/protocols/conclude.md` Step 2 (compile finding) that scans the draft `finding.md` for: (a) any multi-row table where the same term appears in different cells with potentially different meanings; (b) any baseline/L0/default cell that received less scrutiny than higher-level cells; (c) any term used in passing in the finding body that has a non-obvious referent. The check is a 30-second pass, not a rigorous test.
- **File affected:** `homegrown/protocols/conclude.md`.
- **Risk class:** LOW.
- **Expected benefit:** catches both term-ambiguity AND baseline-blindness errors before publication. Restores trust by visibly closing the catch-point that failed.
- **Evaluation gate:** observable — over the next 5 CONCLUDE invocations, does the checklist fire on real cases? If 0/5 fire, the check is too narrow; revise. If 5/5 fire on noise, the check is too broad; revise.
- **Branch experiment:** NO — small enough for direct edit.
- **Addresses:** H1 (Sensemaking), H2 (Innovation), H3 (Critique), H4 (runner) — runner-level cheap catch absorbs work that none of the disciplines reliably did.
- **Both classes addressed:** term-ambiguity (item a, c) + baseline-blindness (item b).

### M5 — Baseline-row scrutiny rule for Innovation (ACTIONABLE)

- **What changes:** Add a small rule to `homegrown/innovate/references/innovate.md`'s Axis Coverage Check (Phase 3): "for proposals with multi-row tables, verify each row received active scrutiny — including baseline / L0 / default rows. Inheriting baseline values from upstream stabilization without re-evaluation is an instance of Survival Bias (failure mode #6) applied to baselines."
- **File affected:** `homegrown/innovate/references/innovate.md`.
- **Risk class:** LOW (additive rule; existing failure mode reference).
- **Expected benefit:** catches baseline-blindness specifically at Innovation stage (when concrete cell values are constructed).
- **Evaluation gate:** monitor next 5 Innovation outputs that produce multi-row tables — does baseline-row scrutiny show in the variations or testing?
- **Branch experiment:** NO.
- **Addresses:** H2 (Innovation) primarily.
- **Class addressed:** baseline-blindness.

### M6 — Start a project glossary (ACTIONABLE; LIGHT)

- **What changes:** Create `homegrown/glossary.md` (or equivalent) with one-line operational definitions for currently-load-bearing terms: Memory (per-inquiry vs cross-inquiry vs Navigator-memory), Reflect-channel, session, context, state. Each term gets type-distinction listed. Sensemaking SV6 references the glossary at end of process; new terms get added.
- **File affected:** new file `homegrown/glossary.md`.
- **Risk class:** LOW (additive, read-only effect on existing flows).
- **Expected benefit:** future inquiries inherit pre-disambiguated terms; the glossary grows over time, increasing leverage.
- **Evaluation gate:** observable — 6 months from now, does the glossary contain ≥10 terms? Are findings using glossary references?
- **Branch experiment:** NO.
- **Addresses:** H1 (Sensemaking) by giving load-bearing concept tests a reference point; preventatively addresses future H1.
- **Class addressed:** term-ambiguity.

### M4 — Recurrence audit (ACTIONABLE; LOW-RISK READ-ONLY)

- **What changes:** Run a one-shot audit of `enes/` and recent inquiries' findings; count load-bearing terms used loosely without disambiguation. Report ≤5 candidate examples (or none if pattern is absent). The audit is one MVL+ inquiry of its own.
- **File affected:** none directly; produces an audit document at `devdocs/inquiries/<future>/finding.md`.
- **Risk class:** LOW (read-only audit).
- **Expected benefit:** confirms or rejects the "Reflect-channel pattern repeats" hypothesis; if ≥3 instances found, M2 / M3 (deferred Sensemaking / Critique spec edits) escalate from MONITORING to ACTIONABLE.
- **Evaluation gate:** observable — audit completes and produces a count. Decision-trigger: count ≥3 → escalate M2/M3; count <3 → de-prioritize spec changes.
- **Branch experiment:** YES (could be a branch inquiry of this loop_diagnose).
- **Addresses:** the recurrence claim; not the specific Memory failure.
- **Class addressed:** term-ambiguity (broader pattern).

### M2 + M3 — Sensemaking and Critique spec clarifications (DEFERRED with revival)

- **M2 What changes:** sharpen `homegrown/sense-making/references/sensemaking.md` Phase 3 load-bearing concept test wording to make EACH applicable sub-aspect (proxy-vs-structural, discoverability, user-language alignment) a per-test obligation, not a "test multiple sub-aspects" suggestion.
- **M3 What changes:** extend `homegrown/td-critique/references/td-critique.md` multi-axis prosecution depth's specification-gap probe to include: "for any term used across multiple values/levels, probe whether the term has multiple meanings the candidate doesn't disambiguate."
- **Both files affected:** spec edits.
- **Risk class:** LOW-MEDIUM (clarifications of existing tests; risk is bloat / noise).
- **Expected benefit:** application reliability improvement.
- **Evaluation gate:** revival trigger condition-bound — if M4 audit produces ≥3 instances, both candidates escalate to ACTIONABLE.
- **Branch experiment:** NO (small spec edits if revived).
- **Why DEFERRED now:** per `loop_diagnose.md` Step 5 — "do not propose broad fundamentals rewrites from one weak correction chain." N=1 is too weak to justify even small spec clarifications without audit confirmation.

---

## Phase 1 — Hypothesis commitments (per Decomposition P1)

### H1 — Sensemaking (PRIMARY fault)

- **Affected stage:** Sensemaking.
- **Shortcoming type:** load-bearing concept test applied incompletely. Ambiguity #6 in `docarchive/sensemaking.md` resolved Memory's scope-axis (axis-vs-Navigator-only) but did NOT resolve Memory's type-axis (per-inquiry vs cross-inquiry vs Navigator-memory). The proxy-vs-structural sub-test of the Phase 3 load-bearing concept test was not applied to Memory specifically.
- **Evidence from prior inquiry:** `docarchive/sensemaking.md` lines 266-282 (Ambiguity #6) test scope only. Lines 287-293 (load-bearing concept tests) test "5 cognitive roles" and "autonomy ladder" but not "Memory." The SV5 table at line 385-390 already contains the wrong L0 cell ("n/a" for Memory at L0).
- **Evidence from human correction:** *"why u say memory is human? we have md files no?"* — the user did the disambiguation in one sentence. The disambiguation Sensemaking should have done.
- **Evidence from corrected inquiry:** the corrected `finding.md` distinguishes per-inquiry memory from cross-inquiry/meta-loop memory — the disambiguation Sensemaking missed.
- **Confidence:** HIGH. Multiple artifacts converge; spec text exists; the corrected version implements what should have been done.
- **Why not stronger:** N=1 — only one correction chain. The "Sensemaking applies its tests shallowly to terms-not-named-in-explicit-Ambiguity-numbering" claim is plausible but only weakly evidenced from one example.
- **Maintenance candidate (brief):** M2 (Sensemaking spec clarification) — DEFERRED pending M4 audit.
- **Evaluation gate:** if M4 audit produces ≥3 instances, M2 escalates.

### H2 — Innovation (SECONDARY fault)

- **Affected stage:** Innovation.
- **Shortcoming type:** baseline-blindness. The L0 row of the role-allocation table inherited Sensemaking's SV5 "n/a" Memory cell and was lightly rephrased to "human (mental)." Innovation's mechanism work (21 variations) focused on the new axes (Reflect-channel) and on L4/L5 commitments (multi-head, goal-formation), not on the L0 baseline row.
- **Evidence from prior inquiry:** `docarchive/innovation.md` Final Commitments section (around line 217) directly inherits the L0 row from Sensemaking SV5 with minimal mechanism work. Compare to L4 row (line 222), which has detailed multi-head + Evaluator + multi-axis variations.
- **Evidence from human correction:** the user pointed at the L0 row specifically — the row that received the least mechanism work.
- **Evidence from corrected inquiry:** corrected `finding.md` rewrites the L0 row substantively — what Innovation should have done.
- **Confidence:** MEDIUM. The baseline-blindness pattern is plausible from this example but only confirmed by one observation.
- **Why not stronger:** Innovation's spec doesn't currently REQUIRE per-row scrutiny. The shortcoming is partly a missing rule (M5 addresses) and partly application focus.
- **Maintenance candidate (brief):** M5 (baseline-row scrutiny rule for Innovation).
- **Evaluation gate:** monitor next 5 Innovation outputs producing multi-row tables.

### H3 — Critique (TERTIARY fault — missed catch)

- **Affected stage:** Critique.
- **Shortcoming type:** specification-gap probe applied to commitments (gates, heuristics, MERGE protocol) but not to terms in the proposal. The C1 (9-axis frame) defense even articulated *"Memory is read/write of artifacts"* — the lead was there, not pulled. Multi-axis prosecution depth's specification-gap probe could have asked "WHICH artifacts?"
- **Evidence from prior inquiry:** `docarchive/critique.md` line 101 (C1 defense articulating Memory but not interrogating the term); line 215-227 (C2 verdict on "Memory advances alongside" — prosecution focused on coordination, not term-disambiguation).
- **Evidence from human correction:** the term-ambiguity slipped through despite Critique having relevant tooling (D5 spec operability + multi-axis depth).
- **Evidence from corrected inquiry:** the correction is a term-disambiguation that Critique's spec-gap probe could have caught.
- **Confidence:** MEDIUM. The probe was applied; it just didn't extend to TERMS as candidates. Whether this is a spec-text gap or an application gap is debatable.
- **Why not stronger:** N=1 + the spec text doesn't explicitly say "probe terms"; could be argued either way.
- **Maintenance candidate (brief):** M3 (Critique spec extension) — DEFERRED pending M4 audit.
- **Evaluation gate:** if M4 audit produces ≥3 instances, M3 escalates.

### H4 — MVL+ runner (CONTRIBUTING fault)

- **Affected stage:** MVL+ runner / orchestration.
- **Shortcoming type:** no inter-discipline term safety check. Concepts stabilized in Sensemaking flow downstream as truth; if a term has unresolved ambiguity, no orchestration-level catch detects it. This is a runner-design gap, not a per-discipline failure.
- **Evidence from prior inquiry:** `MVL+/SKILL.md` execution-pipeline rules don't include a term-safety step. `homegrown/protocols/conclude.md` Step 2 doesn't include a term-ambiguity scan.
- **Evidence from human correction:** the user IS the only catch point that worked. That's evidence the runner has no automated catch.
- **Evidence from corrected inquiry:** the correction was applied via in-place edits AFTER publication — confirming the catch happened post-publication, not pre-publication.
- **Confidence:** HIGH. The absence of a runner-level term safety check is verifiable from spec text.
- **Why not stronger:** the runner could argue "term-safety is a discipline concern, not an orchestration concern." But the cascading failure across 3 disciplines suggests the discipline-level catches are insufficient on their own.
- **Maintenance candidate (brief):** M1 (pre-CONCLUDE term-ambiguity checklist).
- **Evaluation gate:** observable over next 5 CONCLUDE invocations — does the checklist fire usefully?

---

## P5 — Failure class context (committed)

Two orthogonal failure classes interacted in this case:

1. **Term-ambiguity (proximate cause).** The term "Memory" had 3 meanings (per-inquiry md files, cross-inquiry meta-loop state, Navigator-memory). Sensemaking's load-bearing concept test exists to catch this (proxy-vs-structural sub-test); Critique's spec-gap probe exists to catch this. Neither was applied to Memory's TYPE axis.

2. **Baseline-blindness (distal cause).** The L0 row of the role-allocation table received less scrutiny than higher rows because design attention concentrates on transitions / changes, not on the unchanged baseline. The L0 Memory cell inherited from Sensemaking SV5 ("n/a") and was lightly rephrased ("human (mental)") without being actively tested. *Note: "baseline-blindness" is loop-coined for this diagnosis; the term is provisional.*

The two classes COMPOUNDED. Without baseline-blindness, the term-ambiguity might have been caught at the L0 cell (because it's a default cell, the wrong default was less likely to be questioned). Without term-ambiguity, baseline-blindness alone might have shipped a different but similarly un-scrutinized error. Together, they shipped the categorical error the user caught.

Per-class fixes:
- Term-ambiguity → catch points: load-bearing concept test in Sensemaking + spec-gap probe in Critique + pre-CONCLUDE checklist in runner.
- Baseline-blindness → catch points: baseline-row scrutiny in Innovation + pre-CONCLUDE checklist's item (b).

M1 addresses BOTH (its checklist items cover both classes). M5 addresses baseline specifically. M2/M3/M6 address term specifically. The portfolio is intentionally redundant — each layer catches what slipped through prior layers.

---

## P6 — Recurrence monitoring (committed)

**Reflect-channel recurrence claim.** Innovation's variation 2.2 (ladder × Reflect-channel) introduced Reflect-channel as a 9th axis without fully disambiguating "what does Reflect-channel DO at L_N?" Critique flagged this with "operational details deferred to runner spec" caveat — the same load-bearing-concept-test gap may apply, in milder form. This is N=1 milder evidence supporting the recurrence claim.

**Audit scope (M4):**
- Read findings of recent inquiries: `2026-05-10_01-30__metaloop_navigator_session_relationship/`, `2026-04-27_20-45__meta_loop_whirl_navigation/`, `2026-05-09_18-23__metaloop_autonomy_ladder_and_open_design_questions/` (the corrected one), and ≥3 other recent findings.
- Read concept docs: `enes/desc.md`, `enes/thinking_space_dynamics.md`, `enes/loop_desing_ideas/meta_loop.md`.
- For each load-bearing term used across multiple findings (candidates: "Memory," "Reflect-channel," "session," "context," "state," "ladder," "level"), check: is the term used with consistent referent? Is its meaning operationalized?

**Revival trigger:** if audit produces ≥3 instances of un-disambiguated load-bearing terms in different inquiries, escalate M2 + M3 from DEFERRED to ACTIONABLE. If 0-2 instances, the pattern is not robust enough to justify spec edits; M2/M3 stay deferred.

---

## Mechanism Coverage Telemetry

- **Generators applied:** 4/4 (Combination, Absence Recognition, Domain Transfer, Extrapolation) ✓
- **Framers applied:** 3/3 (Lens Shifting, Constraint Manipulation, Inversion) ✓
- **Variations per mechanism:** 3 (generic, focused, contrarian); 21 total outputs.
- **Convergence:** YES — 8+ mechanisms converge on M1 (pre-CONCLUDE term-ambiguity checklist). Moderate convergence (2-3 mechanisms each) on M5 (baseline-row scrutiny) and M6 (project glossary).
- **Survivors tested:** 21/21 (every variation passed through 5-test cycle).
- **Disposition counts:** 8 ACTIONABLE (some converge to same M; 5 distinct candidates committed: M1, M4, M5, M6, plus M2/M3 deferred), 4 DEFERRED with revival, 6 DEFERRED informational, 2 CONFIRM-existing, 1 RESEARCH FRONTIER.
- **Failure modes observed:** None. Specifically:
  - Premature evaluation: avoided (all 21 generated before testing).
  - Single-mechanism trap: avoided (7 mechanisms applied).
  - Early frame lock: avoided (8-mechanism convergence on M1 validated).
  - Innovation without grounding: avoided (every output tested).
  - Mechanism exhaustion: avoided (5 ACTIONABLE survivors).
  - Survival bias: checked — variation 1.3 (user-as-catch-point) was uncomfortable but tested fairly; variation 4.3 (user audits) was uncomfortable and survived as DEFERRED-alternative.

**Overall: PROCEED.** Sufficient coverage + multi-mechanism convergence on M1 + 5 ACTIONABLE candidates with risk-stratified scope. Hand off to Critique.
