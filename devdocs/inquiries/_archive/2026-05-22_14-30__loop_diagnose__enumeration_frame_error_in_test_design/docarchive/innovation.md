# Innovation: Loop Diagnose — Enumeration Frame Error in Test Design

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_14-30__loop_diagnose__enumeration_frame_error_in_test_design/_branch.md`

Plus exploration's evidence + sensemaking's 12 SDs + decomposition's 5-piece Q-tree; per-piece Seed → Generate → Test.

---

## Intuition / Direction

Generate the 5 failure hypotheses + cross-stage integration + attribution summary + maintenance candidates + verdict, grounded in exploration's direct artifact evidence. Mechanism coverage: Combination (per-piece) + Domain Transfer (LOOP_DIAGNOSE format) + Inversion (CONTRARIAN-RETHINK at P2/P5).

---

## P1 — Per-stage hypotheses (H1-H4)

### Hypothesis 1: _branch.md transcription failure

**Affected stage:** Loop framing / orchestration (NOT a discipline)

**Shortcoming type:** Semantic compression at transcription — user's load-bearing phrase ("accumulation of other disciplines and finding") was dropped when raw input was transcribed into `_branch.md`'s Question + Goal sections.

**Evidence from prior inquiry:** Prior `_branch.md` lines 5 + 11 framed the deliverable as "discriminate /explore from /surfacing" + "Each prompt annotated with which mechanism of /explore or /surfacing it stresses" — discipline-level framing throughout. Prior `finding.md` Source Input lines 340-348 show the user's raw input included BOTH "testing MVL2+ and MVL+" AND "accumulation of other disciplines and finding" — the second phrase did not survive transcription.

**Evidence from human correction:** "we are not testing between explore and surfacing, we are between MVL+ and MVL2+" + "cumulative effect of surfacing vs explore on the loop, and also individual outputs of them" — the user explicitly named the lost framing.

**Evidence from corrected inquiry:** Corrected `_branch.md` Question explicitly committed "observe BOTH (a) individual upstream-output differences AND (b) cumulative effect of upstream-discipline choice on final finding" — preserves the loop-level + cumulative-effect framing that the prior transcription lost.

**Confidence:** **HIGH** — direct text comparison; multiple artifacts converge (prior _branch.md + user raw input + corrected _branch.md); the corrected inquiry clearly repairs the same failure.

**Why not stronger:** Only ONE correction chain observed. Whether this is a one-off transcription error or a recurring failure pattern requires more chains to assess. Per LOOP_DIAGNOSE Step 5: do not propose broad rewrites from one chain.

**Maintenance candidate:** MC2 (see Section P4) — add a transcription-audit step to MVL+ runner's `_branch.md` creation: after writing `_branch.md`, re-read raw user input and verify load-bearing phrases survived. Flagged as branch experiment.

**Evaluation gate:** the transcription-audit step catches load-bearing phrase loss in ≥3 of next 5 NEW inquiries where user raw input contains multi-part framing.

### Hypothesis 2: Exploration R2 + R5 upstream-axis-stress framing

**Affected stage:** Exploration

**Shortcoming type:** Framework formulation — both Exploration R2 (nature-axis options) and R5 (discrimination-strength predictors) defined evaluation criteria entirely via upstream-discipline-mechanism stress, ignoring downstream-stage cumulative effect.

**Evidence from prior inquiry:** Prior `docarchive/exploration.md` R2 region (lines 56-71) rated task-kind axis N2 "Diagnostic vs Design" as **MEDIUM** with reasoning "**purpose differs but mechanism similar**" — explicit upstream-mechanism-stress reasoning. R5 region (lines 110-124) listed 3 HIGH-discrim categories all referring to upstream-discipline mechanism firing ("**Surfacing's 4-tag vocabulary fully exercised**"; "**Surfacing's umbrella-tag-on-uncertainty fires**"; "**Surfacing's Boundary-discovery sub-phase activates**"). NO row in R5 references downstream-stage amplification, finding-level effect, or cumulative behavior.

**Evidence from human correction:** "we are not testing between explore and surfacing" — the user's explicit pushback on discipline-level framing. The Exploration's framing was the discipline-level framing the user rejected.

**Evidence from corrected inquiry:** Corrected `docarchive/exploration.md` R2 (in the corrected) explicitly committed N1 = Diagnostic vs Generative-Design (task-kind axis) and reformulated discrimination as "downstream amplification spread" (R7 in corrected) — both reframes invert the prior's upstream-stress framing.

**Confidence:** **HIGH** — direct quoted evidence from prior R2 + R5 text; corrected inquiry's R13 root causes 1 + 2 are SUPPORTED by this evidence (not assumed from corrected narrative).

**Why not stronger:** Did Exploration have a real choice? The candidate pool itself included N2; rating it MEDIUM was a judgment call. Whether Exploration's spec would have produced a different rating with different prompts is unknown — one chain.

**Maintenance candidate:** Implicit in MC3 (see Section P4) — the corrective for Exploration is harder to specify; MC3 targets Sensemaking which downstream-audits Exploration's framework.

**Evaluation gate:** N/A directly (covered by MC3's gate).

### Hypothesis 3: Sensemaking SP1 inheritance-without-re-validation

**Affected stage:** Sensemaking

**Shortcoming type:** Procedural failure — Sensemaking SP1 consumed Exploration's "three strong" nature-axis candidates without auditing the strong/medium ratings against the inquiry's stated goal (loop-level test).

**Evidence from prior inquiry:** Prior `docarchive/sensemaking.md` SP1 (line 45): "Three strong task-nature axis candidates from exploration: N1 (artifact-bounded vs possibility-mode), N3 (explicit-bounded vs implicit-territory), N6 (known-answer vs open-ended-generative)." **N2 (Diagnostic vs Design) is absent — already pruned at Exploration's R2.** A1 ambiguity counter-test (line 175) tested "domain-mix" as counter, not "task-kind." Sensemaking ran 2 LBTs (LBT1 "Discrimination" + LBT2 "Nature-difference") but both operated WITHIN the inherited frame — neither tested "is this frame appropriate for the user's actual goal?"

**Evidence from human correction:** The user's correction targets the FRAME (loop-level vs discipline-level), not specific prompts — implying the frame was wrong. Sensemaking's job is to commit the frame; the frame was inherited from Exploration without re-validation.

**Evidence from corrected inquiry:** Corrected `docarchive/sensemaking.md` SP1 committed Diagnostic vs Generative-Design (the previously-excluded N2); the corrected inquiry's Critique-stage VP8 added "Root cause 4: Inherited-metric-not-re-validated" as an explicit named failure mode.

**Confidence:** **HIGH** — SP1 explicitly inherits; A1 counter-test misses task-kind; LBTs operate within frame.

**Why not stronger:** Sensemaking's current spec does not require an LBT on the inherited evaluation framework. Whether Sensemaking COULD have caught this without spec change is debatable. One chain.

**Maintenance candidate:** MC3 (see Section P4) — add a "metric-appropriateness" LBT requirement to Sensemaking spec: when consuming exploration's evaluation framework (R5, ratings, etc.), run LBT on the framework against the inquiry's stated goal. Flagged as branch experiment.

**Evaluation gate:** MC3 catches inherited-metric-not-re-validated patterns in ≥3 of next 5 NEW inquiries where Sensemaking inherits a load-bearing framework from Exploration.

### Hypothesis 4: Critique VD2 inheritance from R5

**Affected stage:** Critique

**Shortcoming type:** Inheritance — Critique's load-bearing dimension VD2 (Discrimination strength) explicitly inherited from Exploration R5 + Sensemaking FP3 (which also inherited R5 framing). Critique's Phase 0 dimension-validation operated within the inherited frame.

**Evidence from prior inquiry:** Prior `docarchive/critique.md` line 20: "**VD2 | Discrimination strength | CRITICAL | Sensemaking FP3 + Exploration R5**." Source column explicitly cites the inherited framework. None of VD1-VD10 probes for cognitive-task character / verb-shape / metric-appropriateness.

**Evidence from human correction:** Same as H1-H3 — frame error not caught at Critique either.

**Evidence from corrected inquiry:** Corrected `docarchive/critique.md` introduced VD1 (verb-shape verification) + VD2 (cognitive-task character) as CRITICAL dimensions — NEW dimensions not in prior Critique. These two dimensions specifically catch enumeration-shape that prior VD1-VD10 missed.

**Confidence:** **HIGH** — Source column evidence; dimension comparison between prior and corrected.

**Why not stronger:** Critique's Phase 0 dimension-construction says "verify dimensions against sensemaking output" — Critique did this. But the dimension-validation step doesn't audit the FRAME of the sensemaking output. Whether Critique's spec REQUIRES auditing the frame is debatable.

**Maintenance candidate:** Implicit overlap with MC3 — auditing the inherited frame at Sensemaking would prevent Critique from inheriting a biased frame. A separate Critique-stage candidate could be considered but is dominated by MC3 in evidence-strength.

**Evaluation gate:** Covered by MC3.

---

## P2 — Cross-stage hypothesis (H5)

### Hypothesis 5: Cross-stage inheritance-without-re-validation pattern

**Affected stage:** Cross-stage pattern (superordinate; integrates H1-H4)

**Shortcoming type:** Propagation mechanism — framework-inheritance propagating from upstream framing error. Every stage (Exploration, Sensemaking, Decomposition, Innovation, Critique, CONCLUDE) consumed upstream commitments without auditing them against the user's stated goal. The failure compounded across the cascade.

**Evidence from prior inquiry:** Exploration's R2/R5 → Sensemaking's SP1 → Innovation's seeds → Critique's VD2 → CONCLUDE's deliverable. Each stage's output explicitly cites the prior stage as source. The propagation trace is direct.

**Evidence from human correction:** The correction targets the OUTPUT shape (enumeration-shape prompts), not any single stage's process. The shape is the cumulative result of the inherited frame propagating through all stages.

**Evidence from corrected inquiry:** Corrected inquiry's R13 frame-error diagnosis identifies 3 structural root causes (Exploration framing + nature axis + conflation) + 1 procedural (inherited-metric-not-re-validated). The procedural cause IS the cross-stage pattern named at the Sensemaking-instance level. The corrected diagnosis recognized the pattern but framed it as a single Sensemaking-stage failure — this H5 reframes it as cross-stage.

**Confidence:** **HIGH** — multi-stage propagation trace + 4 counter-hypotheses tested (R10 in exploration); single-discipline attribution rejected.

**Why not stronger:** The cross-stage pattern is consistent with all evidence but the corrected R13 frames it more locally (at Sensemaking). Whether the cross-stage framing is genuinely SUPERORDINATE or merely a different abstraction of R13 root cause 4 is a framing choice. Both framings produce the same maintenance candidate (MC3).

**Maintenance candidate:** MC3 (Sensemaking metric-appropriateness LBT). Optionally extends to Critique's Phase 0 (dimension-validation against frame) — but MC3 at Sensemaking catches the propagation earlier in the cascade.

**Evaluation gate:** Same as MC3.

### CONTRARIAN-RETHINK at P2

**Counter:** "H5 is not a distinct hypothesis — it's just a re-description of H3 (Sensemaking inheritance) at a different level of abstraction."

**Test:** Does H5 add explanatory power beyond H3?
- H3 names Sensemaking-stage failure specifically.
- H5 names the PATTERN that produced the failure at multiple stages (Exploration, Sensemaking, Critique).
- H5 explains why the same maintenance candidate (MC3) is structurally sufficient — it targets the propagation mechanism at the point where it could be caught earliest with minimal spec change.

**Verdict:** H5 adds explanatory power. CONTRARIAN REJECTED. Both H3 and H5 are valid; H5 is the superordinate finding.

---

## P3 — Attribution Summary table

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---|---:|---|
| Loop framing / orchestration (H1) | Semantic compression at _branch.md transcription | strong | HIGH | MC2 (transcription-audit branch experiment) |
| Exploration (H2) | Upstream-axis-stress framing in R2 + R5 | strong | HIGH | MC3 covers downstream audit |
| Sensemaking (H3) | Inheritance-without-re-validation of R5 framework | strong | HIGH | MC3 (metric-appropriateness LBT branch experiment) |
| Critique (H4) | Inheritance of VD2 from R5 without frame audit | medium-strong | HIGH | MC3 covers via earlier audit |
| Cross-stage pattern (H5) | Framework-inheritance propagating without re-validation | strong | HIGH | MC3 + monitoring (MC1) |

Mixed attribution explicit: orchestration + per-discipline + cross-stage. Per LOOP_DIAGNOSE Step 5: failure not collapsed into single discipline.

---

## P4 — Maintenance candidates

### MC1 — Monitoring question

- **What changes:** Nothing yet — collect more evidence.
- **Which file or protocol might be affected:** None directly; this is a monitoring proposal.
- **Risk class:** LOW (no source change).
- **Expected benefit:** Track future MVL+ inquiries (5-10 new ones) for the same pattern. If the pattern recurs ≥3 times, promote MC2 + MC3 from branch-experiment to source-edit proposal.
- **Evaluation gate:** Time-bound — after 5-10 future MVL+ inquiries, review whether `_branch.md` transcription errors recur OR whether Sensemaking's inheritance-without-re-validation produces frame errors.
- **Should become branch experiment:** NO (this IS the branch-experiment criterion for MC2 + MC3).

### MC2 — Transcription-audit step (branch experiment)

- **What changes:** Add to MVL+ runner's `_branch.md` creation flow: after writing `_branch.md`, re-read the raw user input and run a structural check that load-bearing phrases survived transcription. Specifically: scan raw input for clause-pairs joined by "and" / "AND" / "BOTH ... AND" — these often indicate user's multi-part framing. Verify each clause's content appears in `_branch.md`'s Question or Goal.
- **Which file or protocol might be affected:** `cognitive_harness/MVL+/SKILL.md` (the runner spec). Optionally `cognitive_harness/protocols/branch_inquiry.md` for branch-new inquiries.
- **Risk class:** MEDIUM (changes the runner template; affects all future inquiries).
- **Expected benefit:** Catches transcription failures where user's load-bearing phrases get dropped (the H1 failure mode).
- **Evaluation gate:** Branch-experiment: create a parallel `MVL+/SKILL.md` with the transcription-audit step; run 5 NEW inquiries through both versions; compare whether the audited version catches load-bearing phrase loss in ≥3 of 5 chains where it occurs.
- **Should become branch experiment:** YES — per LOOP_DIAGNOSE Step 5, "Do not propose broad fundamentals rewrites from one weak correction chain." One chain is thin evidence; branch experiment is the right level.

### MC3 — Metric-appropriateness LBT (branch experiment)

- **What changes:** Add to Sensemaking spec: when consuming a load-bearing framework from a prior discipline (e.g., Exploration's R5, Sensemaking's commitments from earlier iterations, etc.), run a Load-Bearing-concept Test (LBT) on the framework's APPROPRIATENESS to the inquiry's stated goal. The LBT predicate: "if this framework's strong/medium ratings are followed, does the resulting decision serve the user's stated goal?" If unclear, surface as Open Question to user.
- **Which file or protocol might be affected:** `cognitive_harness/sense-making/references/sensemaking.md` (Phase 3 Ambiguity Collapse → LBT refinement note).
- **Risk class:** MEDIUM (changes Sensemaking spec; affects all future inquiries).
- **Expected benefit:** Catches inherited-metric-not-re-validated patterns where Sensemaking consumes upstream's framework without auditing.
- **Evaluation gate:** Branch-experiment: create a parallel `sensemaking.md` with the metric-appropriateness LBT requirement; run 5 NEW inquiries through both versions; compare whether the audited version catches frame-inheritance failures in ≥3 of 5 chains where they would occur.
- **Should become branch experiment:** YES — same evidence-strength caveat.

---

## P5 — Diagnostic Verdict + final synthesis

### Diagnostic Verdict

**Overall:** **PARTIAL**

- **Best-supported diagnosis:** H5 (cross-stage inheritance-without-re-validation pattern) is the superordinate finding. The pattern propagated from a `_branch.md` transcription failure (H1) through Exploration's upstream-axis-stress framing (H2), Sensemaking's framework-inheritance (H3), and Critique's dimension-inheritance (H4). Each instance is individually evidenced; together they form the propagation mechanism that produced the enumeration-shape deliverable the user rejected.

- **Strongest maintenance candidate:** MC1 (monitoring question). MC1 is fully ACTIONABLE per LOOP_DIAGNOSE Step 4 — it has a concrete evaluation gate (5-10 future inquiries) and no source-change risk. MC2 and MC3 are guarded as branch experiments because one correction chain is thin evidence for source-edit proposals.

- **Main uncertainty:** Whether the failure pattern is recurring (justifying MC2 + MC3 as permanent source edits) or one-off (justifying only MC1's monitoring). Per LOOP_DIAGNOSE Step 5: do not propose broad fundamentals rewrites from one weak correction chain. MC1's monitoring resolves the uncertainty over 5-10 future inquiries.

- **Recommended next step:** Adopt MC1 (monitoring). Defer MC2 + MC3 as branch experiments to run if MC1's monitoring confirms recurrence. Do NOT make permanent source edits to MVL+ SKILL.md, Sensemaking spec, or Critique spec from this one correction chain alone.

### CONTRARIAN-RETHINK at P5

**Counter:** "Verdict should be ACTIONABLE because MC1 has a concrete evaluation gate."

**Test:** Per LOOP_DIAGNOSE Step 4: ACTIONABLE = "at least one maintenance candidate has enough evidence and a concrete evaluation gate." MC1 qualifies. But the load-bearing maintenance candidates (MC2, MC3) are guarded as branch experiments — that's PARTIAL behavior, not ACTIONABLE.

**Verdict:** PARTIAL more accurately captures the state. MC1 is actionable; MC2 + MC3 are guarded; the test design as a whole is in the "partial" zone. CONTRARIAN REJECTED.

---

## Mechanism Coverage (Telemetry)

- **Generators applied:** Combination (per-piece content generation); Absence Recognition (P4 identifies what's missing in current MVL+ spec); Domain Transfer (medical-diagnosis confidence-attribution model applied to LOOP_DIAGNOSE format); Extrapolation (one-chain → 5-10 chain monitoring as evidence-accumulation strategy). 4/4 generators.
- **Framers applied:** Lens Shifting (re-framing single-discipline attribution as cross-stage pattern); Constraint Manipulation (per LOOP_DIAGNOSE Step 5 evidence-strength constraints); Inversion (CONTRARIAN-RETHINK at P2 + P5). 3/3 framers.
- **Convergence:** YES — multiple mechanisms converge on the same diagnostic (H5 superordinate + MC1 monitoring + MC2/MC3 branch experiments).
- **Survivors tested:** all 5 hypotheses + 3 candidates + verdict — all PASS.
- **Failure modes observed:** NONE.

**Overall: PROCEED to Critique.**

---

## Self-Assessment Verdict

**PROCEED to Critique.**
