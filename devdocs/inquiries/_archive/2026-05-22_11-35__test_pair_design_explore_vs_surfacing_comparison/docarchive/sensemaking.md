# Sensemaking: A/B Test Task Pair Design for /explore vs /surfacing Comparison

## User Input

(Inputs as specified in `/sense-making` invocation; full user question + goal at `_branch.md` in this folder.)

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/_branch.md`

Plus additional instructions: read `_branch.md` + `exploration.md`; apply SV1→SV6; resolve FQ1-FQ8 with explicit commitments; apply self-reference vigilance + Frame-exit Completeness + Specific-vs-pattern + Layer-3 §9 (trivially satisfied).

---

## SV1 — Baseline Understanding

The task is to commit explicit design decisions for the A/B test the user wants to run: which task-nature axis splits the 5+5, which 6 of 14 candidate prompts advance to Innovation, what discrimination criterion the user applies when comparing findings, what warming protocol equalizes the forks, and what stochasticity policy governs the runs. The challenge is balancing methodological rigor (CTRL pairs, multi-criterion evaluation, commit-first rubrics) against the user's practical budget (4-12 /MVL+ runs at ~25-30 min each).

The deeper challenge is **authorship-bias mitigation**: I (Claude) drafted /surfacing in a prior inquiry this session. Designing the test that validates whether /surfacing actually outperforms /explore carries the same authorship-bias risk as the original comparative-evaluation. External grounding required: the prior finding's end-goal-anchored dimensions serve as the discrimination axes; the criterion is pre-committed; CTRL pairs anchor the noise floor empirically.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1** — 10 test prompts; 5+5 split by nature
- **C2** — "Different in nature, not complexity" (user explicit)
- **C3** — Paste-ready (minimal post-paste editing by user)
- **C4** — Maximum discrimination signal per prompt
- **C5** — Practical context budget per fork (~1M tokens; each /MVL+ run ~250-450k)
- **C6** — User must be able to evaluate findings (evaluability)
- **C7** — 14 candidate prompts + 2 CTRLs available in exploration's R10

### Key Insights

- **KI1** — Cleanest discrimination comes from per-item-discrete tasks where surfacing's 4-tag vocabulary is fully exercised AND asymmetric-failure-under-uncertainty is plausible.
- **KI2** — Self-reference confound on harness-internal tasks is real but evaluability is decisive — the user needs to be able to JUDGE findings, which requires domain familiarity.
- **KI3** — A CTRL pair (negative control) converts a 4-run test into a 6-run test but adds the critical methodological signal: if test prompts diverge AND CTRL prompts converge, the divergence is upstream-driven and not stochastic.
- **KI4** — Accumulation cascade amplification: surfacing's per-item-tags propagate as smaller decomposition pieces and per-item-precise critique probes; /explore's region-narrative propagates as larger pieces with less per-item verifiability.
- **KI5** — Fairness is mostly achievable on inputs (identical context + identical model + identical effort + identical project state); the residual is LLM stochasticity, addressed via CTRL.
- **KI6** — Discrimination criterion must be SPECIFIC + PRE-COMMITTED (rubric stated before runs, not derived from observed findings) to prevent post-hoc rationalization.
- **KI7** — Tasks should be at the SAME SIZE so size doesn't confound nature-difference — the user said "different in nature, not complexity"; this requires deliberate size-matching.

### Structural Points

- **SP1** — Three strong task-nature axis candidates from exploration: N1 (artifact-bounded vs possibility-mode), N3 (explicit-bounded vs implicit-territory), N6 (known-answer vs open-ended-generative).
- **SP2** — Of 14 candidate prompts, 8 are HIGH or MEDIUM-HIGH discrim; 6 are MEDIUM or lower.
- **SP3** — Warming protocol is binary (specific file list, in specific order, with specific framing).
- **SP4** — Stochasticity policy is binary (one run / multiple runs per task per fork).
- **SP5** — Domain mix is gradient (harness-internal → harness-adjacent → external-unrelated).
- **SP6** — Discrimination criterion can be single-axis or multi-axis; multi-axis gives more honest comparison but more measurement effort.

### Foundational Principles

- **FP1** — Apples-to-apples comparison requires identical inputs + identical procedure + the single delta being the upstream discipline.
- **FP2** — Discrimination measured per the user's actual deliverable (the finding), not just upstream output — the user consumes the finding, not the exploration.md / surfacing.md intermediate.
- **FP3** — Exploration's R5 discrimination-strength predictions are HYPOTHESIS — the test validates them; criteria must be insensitive to which hypothesis turns out correct.
- **FP4** — Authorship-bias mitigation: criteria pulled from external sources (end-goal docs + prior finding's externally-grounded dimensions); not from either spec; not from me on first reflex.
- **FP5** — Confound elimination requires single-variable variation: hold domain + size + procedure constant; vary ONLY upstream discipline (test) or expected-divergence (CTRL).

### Meaning-Nodes

- **MN1** — "Discrimination" = divergence between two findings on pre-committed criteria
- **MN2** — "Nature-difference" = difference in KIND of task, not in SIZE / DEPTH / DOMAIN
- **MN3** — "Fairness" = procedural symmetry between forks; the only delta is upstream discipline
- **MN4** — "Paste-ready" = user copy-pastes + adds `/MVL+` or `/MVL2+` prefix; no other editing
- **MN5** — "Discrimination criterion" = the rubric for declaring "Finding A is BETTER than Finding B" — must be pre-committed
- **MN6** — "CTRL pair" = negative-control prompts; expected divergence LOW; anchors noise floor empirically

---

## SV2 — Anchor-Informed Understanding

The task is constrained by C1-C7 and oriented by KI1-KI7. The selection problem decomposes into 8 sub-decisions (FQ1-FQ8), each with explicit trade-offs. The dominant constraint is authorship-bias mitigation (FP4) + confound elimination (FP5) — both push toward: single-axis nature variation, pre-committed criteria, CTRL pairs, harness-internal domain (for evaluability) with confound caveat acknowledged.

The 6 advancing candidates must satisfy: HIGH or MEDIUM-HIGH discrim + practical-context-budget + harness-internal (evaluability) + size-matched. The 5+5 split should map to N1 (artifact-bounded vs possibility-mode) because it's the cleanest axis where the upstream-discipline's per-item-tag vocabulary (surfacing) vs region-narrative output (/explore) produces different downstream consumption.

---

## Phase 2 — Perspective Checking

### Technical / Logical

Per-item discrete tasks are technically what differentiates surfacing's 4-tag vocabulary from /explore's narrative. The A1 axis (Granularity) is the LOAD-BEARING technical axis. Anchor: stress A1 + A2 (Uncertainty handling) + A4 (Boundary handling) in test prompts; CTRL prompts should stress NONE.

### Human / User

User will run 4-6 /MVL+/MVL2+ runs at ~25-30 min each. Total ~2-3 hours of compute. The user needs to be able to copy-paste a prompt-body and have it just work. Anchor: prompt bodies must be SELF-CONTAINED (don't reference inquiry-specific context the user would need to assemble).

### Strategic / Long-term

The A/B result validates (or refutes) the prior comparative-evaluation's MEDIUM-HIGH-confidence verdict that surfacing wins. If the test FAILS (findings don't meaningfully diverge), it raises a strategic question: structural-advantage at the spec level may not translate to operational-advantage at the loop level. Anchor: choose prompts likely to show REAL divergence if the verdict is correct; CTRL anchors what "no divergence" looks like.

### Risk / Failure

Four risks:
- **R-RISK-1** — Prompts produce identical findings → no signal → wasted compute.
- **R-RISK-2** — Prompts produce divergent findings for reasons UNRELATED to upstream discipline (LLM stochasticity, prompt wording, ordering) → false positive.
- **R-RISK-3** — User can't evaluate findings (insufficient domain familiarity) → no actionable signal.
- **R-RISK-4** — Confound from harness-internal bias (surfacing optimized for harness end-goals).

Anchor: CTRL pair addresses R-RISK-2 (noise-floor anchor); pre-committed criterion addresses R-RISK-2 (rubric not derived post-hoc); harness-internal addresses R-RISK-3 (user can judge); R-RISK-4 acknowledged but unavoidable without sacrificing R-RISK-3.

### Resource / Feasibility

4 test runs at ~30 min each = 2 hours. CTRL pair adds ~30 min × 2 = ~1 hour. Total ~3 hours of compute. Acceptable for the user's typical session length given prior /MVL+ inquiries this session each took ~30-45 min.

### Definitional / Internal Consistency

- "Different in nature, not complexity" — `nature` = KIND; `complexity` = SIZE/DEPTH. Two tasks at same SIZE that have different upstream-mode requirements ARE nature-different. The N1 axis (artifact-mode vs possibility-mode) satisfies this.
- "Discrimination" — divergence in FINDINGS, not just in upstream outputs. The user consumes findings.

### Definitional / Frame-exit Completeness

**Gating check.** Multi-value terms in inquiry's own committed structures:
- "Discrimination" — used across discipline-level (exploration/surfacing output), pipeline-level (sensemaking/decomposition/innovation/critique downstream), and deliverable-level (finding). Multiple distinct propositions across rows in the inquiry's own commitments. **GATING FIRES.**

**Existence Enumeration.**
- Project-wide referents of "discrimination":
  - LAYER: upstream-discipline-output level / sense-making-output level / decomposition-output level / innovation-output level / critique-output level / finding level.
  - TYPE: per-item-tag divergence / region-narrative divergence / aggregate-verdict divergence / trade-off-depth divergence.
  - PHASE: pre-run (criterion definition) / mid-run (telemetry comparison) / post-run (finding comparison).
- Inquiry's frame's scope: post-run / finding-level / aggregate-verdict + per-item-precision + trade-off-depth + coverage robustness.

**Role Assessment.**
- Excluded: per-discipline-output divergence; per-pipeline-stage divergence.
- Role: those are intermediate; the user-consumed deliverable is the finding. Operation coherence preserved if intermediate divergence is left aside (it can be observed secondarily but isn't the primary signal).
- Verdict: keep frame at finding-level discrimination; intermediate-level divergence noted as optional secondary observation.

**Verdict Rigor.**
- Counter-argument: "Mid-cascade divergence might be more diagnostic than finding-level — the cascade could compress meaningful upstream divergence into similar findings, hiding the signal."
- Test on structural grounds: this would be a problem IF the cascade is lossy AND the user's value-axis is at the upstream level. The user explicitly said the comparison is for "MVL loops becoming more robust" — that's loop-level (finding-level), not upstream-level. Structural ground: finding-level is the right scope per the user's stated value axis.
- Verdict survives.

**Residual / Coverage Justification.**
- Other frame-exit concerns: discrimination-criterion VOCABULARY (DC1/DC2/DC3 vs other rubrics like "elegance" or "innovation per critique probe"). Already addressed in A4 below. Termination: no new substantive concerns.

Similarly for "fairness," "nature-difference," "discrimination criterion" — all multi-value terms; all gating fires; all resolved with explicit commitments below.

### Phase / Calibration-State

Surfacing has zero deployment history; the A/B test runs are themselves part of its calibration. The discrimination criterion should be INSENSITIVE to calibration-state — i.e., shouldn't assume surfacing is well-calibrated already (otherwise the test is biased toward surfacing). Anchor: criterion (DC1 + DC2 + DC3) evaluates per-finding-quality, not "did the discipline follow its best-known operational protocol." A discipline that fails to follow its own spec still counts; the test measures OUTPUT QUALITY, not protocol fidelity.

### New anchors from perspectives

- **KI8** — Tasks should be at COMPARABLE SIZE so size doesn't confound nature-difference; "different in nature, not complexity" requires deliberate size-matching.
- **KI9** — User cannot blind themselves to which fork ran which prompt; pre-commit criterion BEFORE running (commit-first protocol) to prevent post-hoc rubric drift.
- **KI10** — Noise floor: ~5-10% per-item-tag divergence is normal LLM stochasticity; >20% per-item or aggregate-verdict-different is the signal threshold.

---

## SV3 — Multi-Perspective Understanding

The selection problem now factors cleanly:

1. **Axis** — N1 (artifact-bounded vs possibility-mode), validated by Frame-exit Completeness on "nature-difference."
2. **CTRL pair** — included (1 per nature group); converts noise-floor from hypothesis to empirically anchored.
3. **6 advancing candidates** — GA-1, GA-2, GA-3 (Group A) + GB-1, GB-2, GB-5 (Group B); discrimination HIGH or MEDIUM-HIGH; size-matchable; harness-internal.
4. **Discrimination criterion** — multi-axis: DC1 (per-item precision) + DC2 (trade-off depth) + DC3 (coverage robustness); aggregate per fork-task; pre-committed.
5. **Stochasticity policy** — one run per fork-task; noise floor anchored by CTRL.
6. **Warming protocol** — specific 6-file list, read in order, in parent session before fork.
7. **Domain mix** — all harness-internal with confound caveat acknowledged; evaluability decisive.
8. **Anti-pattern check** — Critique-stage probe against R9 anti-shapes for each Innovation-produced prompt.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity A1: "Different in nature, not complexity" — what counts as nature-difference?

**Strongest counter-interpretation:** Nature-difference could mean different DOMAINS (one harness-internal, one external-domain) — varying domain IS varying nature.

**Why the counter-interpretation fails (structural grounds):** Mixing domain difference with task-type difference would confound the test — divergence between findings could come from upstream-discipline OR from domain-shift; we couldn't tell which. The principle (FP5) requires single-variable variation. Domain-mix is a different test that would need its own control. Structural ground: confound elimination is methodologically prior to discrimination-strength maximization.

**Confidence:** HIGH.

**Resolution:** Commit **N1** (artifact-bounded vs possibility-mode) as the nature axis. Hold domain (harness-internal) and approximate size constant. Acknowledge domain-mix as a separate test the user could run later.

**What is now fixed:** nature axis = task-territory-type (artifact vs possibility).
**What is no longer allowed:** domain-mix as the discrimination variable.
**What depends on this:** Group A all artifact-mode prompts; Group B all possibility-mode prompts.
**What changed in the model:** "nature-difference" is operationalized as upstream-territory-type-difference.

### Ambiguity A2: 5+5 only OR 5+5+CTRL?

**Strongest counter-interpretation:** CTRL pair adds ~1 hour of compute (2 prompts × 2 forks × ~25 min); skip and trust the 5+5.

**Why the counter-interpretation fails (structural grounds):** Without CTRL, if the test findings diverge, we cannot distinguish "real discrimination by upstream discipline" from "LLM stochasticity producing different findings even when upstream-discipline doesn't matter." CTRL is a NEGATIVE CONTROL — its purpose is to empirically anchor the noise floor. With CTRL, the comparison becomes: divergence on tests AND convergence on CTRL → upstream-driven signal; divergence on both → stochasticity-driven; convergence on both → no signal. Without CTRL, only the third case is unambiguous. Structural ground: CTRLs are standard methodology for the same reason that lab experiments need negative controls.

**Confidence:** HIGH.

**Resolution:** Include 1 CTRL prompt per nature group (2 CTRL total). Total prompts: 10 + 2 CTRL = 12.

**What is now fixed:** 12-prompt deliverable shape.
**What is no longer allowed:** 5+5 without CTRL.
**What depends on this:** Innovation produces 12 prompts; user runs all 12 (~3 hours).
**What changed in the model:** the deliverable is a TEST WITH NEGATIVE CONTROLS, not a raw 5+5 brainstorm.

### Ambiguity A3: Which 6 of 14 candidates advance?

**Strongest counter-interpretation:** Why pre-prune to 6 — Innovation might want flexibility to refine more.

**Why the counter-interpretation fails (structural grounds):** Innovation's adjudication capacity per Seed → Generate → Test cycle is per-piece; 3 candidates per group × 2 groups = 6 candidates gives Innovation enough diversity to refine without bloating Critique's coverage burden. More candidates would diffuse Innovation's focus across borderline candidates that already failed Sensemaking's discrimination + practicality filters. Structural ground: Sensemaking's role is exactly to constrain Innovation's search space using already-established filters (KI1-KI7).

**Confidence:** HIGH.

**Resolution:** Sensemaking advances 6 candidates: **GA-1** (cross-discipline coupling) + **GA-2** (failure-mode patterns) + **GA-3** (asymmetric-failure mentions) for Group A; **GB-1** (missing disciplines) + **GB-2** (multi-head failure modes) + **GB-5** (anti-patterns) for Group B. Innovation refines + may derive 2 additional per group to reach 5+5.

**Confirmed-eliminated:** GA-4, GA-5, GA-6, GB-3, GB-4, GB-6, DX-1, DX-2 (lower discrim and/or higher confound and/or size-mismatch).

**What is now fixed:** Innovation's seed set.
**What is no longer allowed:** non-advancing candidates re-introduced without Critique-justification.
**What depends on this:** Innovation's per-piece work.
**What changed in the model:** the 14 → 6 prune; Innovation receives constrained seeds.

### Ambiguity A4: Single discrimination criterion or multi-axis?

**Strongest counter-interpretation:** Single criterion (per-item precision) is simpler and gives a clear single-number comparison.

**Why the counter-interpretation fails (structural grounds):** Single-axis comparison can produce a clear winner on that axis while missing that the other variant is better overall on a different axis. The end-goal docs' regression catalog recognizes multi-symptom diagnostics; single-axis evaluation is single-symptom and misses regression risk. Multi-axis comparison gives a more honest read. Structural ground: end-goal-docs methodology favors multi-symptom diagnostics.

**Confidence:** HIGH.

**Resolution:** Three discrimination sub-criteria, each evaluated per fork-task:

- **DC1 — Per-item precision** — Did the finding correctly identify what mattered, and (where applicable) tag each item accurately?
- **DC2 — Trade-off depth** — Did the finding name the relevant trade-offs honestly + at appropriate weight? Pinned to specific items or floating narrative?
- **DC3 — Coverage robustness** — Would the finding's overall verdict survive if 1-2 items were missed or mis-tagged? (Tests structural soundness.)

Aggregate per fork-pair-per-task: per-criterion comparison + holistic comparison. Pre-committed BEFORE runs (commit-first).

**What is now fixed:** rubric = DC1 + DC2 + DC3; commit-first protocol.
**What is no longer allowed:** post-hoc rubric drift.
**What depends on this:** finding-template structure; reporting template.
**What changed in the model:** discrimination is multi-axis + pre-committed.

### Ambiguity A5: One run per fork-task or multiple?

**Strongest counter-interpretation:** Two runs per fork-task halves stochasticity risk; doubles confidence.

**Why the counter-interpretation fails (structural grounds):** Run-count is multiplicative on budget — 2 forks × 6 prompts × 2 runs = 24 runs at ~25 min each = 10 hours; vs 2 forks × 6 prompts × 1 run = 12 runs × ~25 min = 5 hours. The marginal stochasticity gain is small at deterministic-ish LLM temperatures; per-item-tag verdicts are usually stable across reruns (LLMs vary on prose detail more than on item-relevance verdicts). CTRL pair already anchors noise floor empirically without needing per-test-prompt duplication. Structural ground: signal-to-noise is sufficient with one run + CTRL anchoring.

**Confidence:** MEDIUM (noise floor estimate is hypothesis-based; empirical CTRL-pair data confirms or refutes).

**Resolution:** ONE run per fork-task. Acknowledge ~5-10% noise floor. Signal threshold: >20% per-item divergence OR substantially different aggregate verdict.

**What is now fixed:** run policy = single.
**What is no longer allowed:** stochasticity-driven divergence treated as signal without CTRL-anchor.
**What depends on this:** total compute budget ~3 hours; CTRL-pair role becomes critical.
**What changed in the model:** stochasticity treated as residual to be empirically anchored, not eliminated.

### Ambiguity A6: Warming protocol — exhaustive or scoped?

**Strongest counter-interpretation:** Dump all of `docs/` + all of `cognitive_harness/` for safety; minimize chance of one fork not having context the other has.

**Why the counter-interpretation fails (structural grounds):** Over-warming bloats context, leaves less budget for the actual task. The warming should include ONLY documents that both forks need to reason about and that aren't task-specific. Documents loaded by individual disciplines during runs are loaded BY the discipline, not at warming time — and they're loaded identically across forks because the runner spec is the same shape. Structural ground: warming = priming common context; task-specific reads = per-discipline.

**Confidence:** HIGH.

**Resolution:** Warming reads exactly 6 files, in this order:
1. `cognitive_harness/explore/references/explore.md` — so each fork knows what /explore's spec commits
2. `cognitive_harness/surfacing/references/surfacing.md` — so each fork knows what /surfacing's spec commits
3. `cognitive_harness/MVL+/SKILL.md` — runner for /explore-variant fork
4. `cognitive_harness/MVL2+/SKILL.md` — runner for /surfacing-variant fork
5. `docs/desc.md` — project end-goal context
6. `docs/discipline_taxonomy.md` — categorical placement

**Excluded from warming:** `docs/regression/`, `docs/autonomy_ladder.md`, `docs/thinking_space_dynamics.md` (not load-bearing for the specific test tasks; disciplines can read on-demand if needed).

**What is now fixed:** warming = 6 files in committed order.
**What is no longer allowed:** ad-hoc warming variation between forks.
**What depends on this:** fork-fairness on context priming.
**What changed in the model:** warming is itself a committed structure.

### Ambiguity A7: Domain mix — harness-internal only, or include external?

**Strongest counter-interpretation:** Include one external-domain task to demonstrate the comparison generalizes beyond the harness; otherwise the verdict is confounded with harness-internal bias.

**Why the counter-interpretation fails (structural grounds):** Evaluability is decisive (R-RISK-3). The user can't easily judge whether Finding A is BETTER than Finding B on an external-domain task — they may lack the domain familiarity to know whether items were correctly tagged or whether trade-offs were named at appropriate weight. Internal-domain comparison gives strongest evaluability; the confound (R-RISK-4) is acknowledged in the deliverable rather than eliminated. Structural ground: a test the user can't read is worse than a test with acknowledged confound. The user can always run a follow-up external-domain test if the harness-internal test shows discrimination.

**Confidence:** MEDIUM-HIGH.

**Resolution:** ALL 12 prompts harness-INTERNAL. Confound risk acknowledged explicitly in the deliverable's caveats section.

**What is now fixed:** domain = harness-internal.
**What is no longer allowed:** mixed-domain advancement to Innovation.
**What depends on this:** evaluability + confound-caveat in finding.
**What changed in the model:** the test is a within-harness comparison; external-domain generalization is a separate question.

### Ambiguity A8: Anti-pattern check — trust Innovation or double-check at Critique?

**Strongest counter-interpretation:** Innovation knows the anti-patterns from exploration's R9; trust it.

**Why the counter-interpretation fails (structural grounds):** R9 anti-patterns (trivial enumeration, pure narrative, single-item-focus, tasks too small, tasks too vague, tasks where answer is in one passage) are easy to slip into during prompt-wording refinement when Innovation is focused on capturing the discrimination-stress signature. Critique's role is exactly to probe Innovation's outputs against pre-established failure modes. Structural ground: anti-pattern check is an across-stage verification, not within-stage trust.

**Confidence:** HIGH.

**Resolution:** Critique-stage protocol: probe each Innovation-produced prompt against R9 anti-shapes. Verdict per prompt + remediation guidance if any anti-pattern detected.

**What is now fixed:** anti-pattern double-check at Critique.
**What is no longer allowed:** anti-pattern slip-through.
**What depends on this:** Critique's coverage burden.
**What changed in the model:** Critique has a specific R9-anti-pattern probe in addition to standard probes.

### Load-bearing concept tests

**LBT1 — "Discrimination."** Pre-load: discrimination as divergence between FINDINGS on pre-committed criteria.

- **Counter-interpretation:** Discrimination could mean divergence at the UPSTREAM output level (exploration.md vs surfacing.md content), not the finding level. The user might value seeing WHERE divergence happens, not just the end result.
- **Why counter doesn't dominate:** The deliverable's purpose (per user) is to validate which upstream discipline produces better LOOP outputs, not just better upstream outputs. The user consumes findings. Structural ground: the value axis is at the finding level; mid-cascade divergence is optional secondary observation.
- **Confidence:** HIGH.
- **Resolution:** Discrimination measured at FINDING level (primary) with optional secondary observation at upstream level.

**LBT2 — "Nature-difference."** Pre-load: artifact-bounded vs possibility-mode as the difference-in-kind.

- **Counter-interpretation:** Both modes are supported by BOTH specs; this isn't really a "nature" difference for the upstream-discipline comparison — it's a territory-shape difference.
- **Why counter doesn't dominate:** Right — the mode-pair is the TERRITORY-SHAPE variable; the discipline-spec is the MECHANISM variable; we vary BOTH together (varying territory-shape across the 5+5 split AND varying discipline-spec across the two forks). The 2×2 design gives stronger evidence than 1×2 (varying only discipline-spec on one territory-shape) because divergence across BOTH modes confirms the discipline-spec effect generalizes across territory-shape. Structural ground: 2×2 design is methodologically stronger than 1×2.
- **Confidence:** HIGH.
- **Resolution:** Confirm N1 with the operational understanding that we're running a 2×2 design: 2 modes × 2 disciplines = 4 conditions per task pair.

### Specific-vs-pattern recognition cue

Per `_branch.md`'s Scope Check: SPECIFIC — the deliverable is 10 concrete test prompts (now 12 with CTRL) for this exact A/B comparison. Broader pattern (how to A/B-test cognitive disciplines in general) flagged as Open Question, not foreground. **Test passes** — Sensemaking commitments are local to this comparison, not generalizing.

---

## SV4 — Clarified Understanding

The 8 ambiguities are resolved. The deliverable shape is now stable:

- 12 prompts total (5 Group A + 5 Group B + 2 CTRL)
- N1 axis primary; harness-internal domain; size-matched
- 6 advancing seeds: GA-1, GA-2, GA-3, GB-1, GB-2, GB-5
- Discrimination criterion: DC1 + DC2 + DC3 multi-axis; pre-committed (commit-first protocol)
- One run per fork-task; ~5-10% noise floor; >20% signal threshold; CTRL anchors empirically
- Warming protocol: 6 files in committed order
- Anti-pattern double-check at Critique stage

Excluded: domain-mix, single-criterion, multi-run-per-task, over-broad warming, trust-Innovation-without-anti-pattern-probe.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed parameters

| # | Parameter | Value |
|---|---|---|
| F1 | Total prompts | 12 (5 Group A + 5 Group B + 2 CTRL) |
| F2 | Primary nature axis | N1 (artifact-bounded vs possibility-mode) |
| F3 | Domain | All harness-internal; confound caveat acknowledged |
| F4 | Advancing seeds for Innovation | GA-1, GA-2, GA-3, GB-1, GB-2, GB-5 |
| F5 | Discrimination criterion | DC1 (per-item precision) + DC2 (trade-off depth) + DC3 (coverage robustness) |
| F6 | Criterion-commit timing | BEFORE runs (commit-first protocol) |
| F7 | Stochasticity policy | One run per fork-task |
| F8 | Noise floor | ~5-10% per-item divergence (empirically CTRL-anchored) |
| F9 | Signal threshold | >20% per-item divergence OR substantially different aggregate verdict |
| F10 | Warming files | 6 files: 2 specs + 2 runners + desc.md + discipline_taxonomy.md |
| F11 | Anti-pattern check | Critique-stage probe against R9 anti-shapes |
| F12 | CTRL pair purpose | Negative control; anchors noise floor empirically |

### Eliminated paths

- Domain-mix in advancing candidates
- Single-axis discrimination criterion
- Two-run-per-fork-task stochasticity policy
- Exhaustive warming
- Trust-Innovation-without-Critique-anti-pattern-probe
- 5+5 without CTRL pair
- More than 6 advancing seeds
- Larger candidate pool re-introduced without Critique-justification

### Remaining viable paths (handed to Innovation)

- For each of the 6 seeds, generate 1-2 prompt variations + adjudicate which best serves the nature group
- Generate the 2 CTRL prompts (1 per nature group)
- Validate size-matching across the 5+5
- Cite which axis (A1/A2/A4) each prompt stresses
- Surface which 2-of-5 pair within Groups A/B has SHARPEST predicted discrimination (for user's run-budget optimization)

---

## SV5 — Constrained Understanding

The Innovation stage has a constrained search space:
- 6 seeds → refine to 5 + add 2 CTRL = 12 prompts
- Per prompt: ~150-200 word body; self-contained; harness-internal territory; size-matched (~5-10 items to surface per prompt's territory)
- Per prompt annotation: A1/A2/A4 axis stress + discrimination strength prediction
- 2-of-5 pair recommendation per group (sharpest predicted discrimination)

The Critique stage has constrained probes:
- Anti-pattern probe (R9) per prompt
- Pair-selection probe (does the recommended 2-of-5 actually maximize discrimination?)
- Size-match probe (are the 5+5 actually comparable in size?)
- CTRL-purpose probe (do CTRLs actually anchor noise floor — would two reasonable observers expect SAME finding from them?)

The CONCLUDE stage produces the deliverable with:
- 12 prompts (paste-ready)
- Warming protocol
- Discrimination criterion (pre-committed rubric)
- Stochasticity / noise-floor / signal-threshold guidance
- Anti-pattern verdicts
- Pair-selection guidance
- Confound caveats (harness-internal bias)

---

## Phase 5 — Conceptual Stabilization

### The integrated model

The A/B test design is a single-variable comparison (upstream discipline = independent variable; finding quality on DC1/DC2/DC3 = dependent variables) within a 2×2 design (2 modes × 2 disciplines). CTRL pair establishes the noise floor empirically. The methodology is: "if findings diverge on test prompts but converge on CTRL prompts, the divergence is upstream-discipline-driven and not artifactual."

**Authorship-bias mitigation applied:**
- Discrimination criterion pulled from external sources (R8 in exploration, which was anchored in the prior finding's end-goal-derived dimensions)
- Pre-committed BEFORE runs (no post-hoc rubric drift toward favoring surfacing)
- CTRL pair removes one channel through which authorship bias could leak (claiming stochasticity is signal)
- All commitments derived from constraints (C1-C7) + insights (KI1-KI10) + principles (FP1-FP5), not from preference for /surfacing

**Frame-exit Completeness applied:** multi-value terms ("discrimination," "fairness," "nature-difference," "discrimination criterion") resolved with explicit commitments + counter-interpretations tested + Verdict Rigor on all "out-of-scope" verdicts.

**Specific-vs-pattern applied:** SPECIFIC (10+2 prompts for this exact A/B test); broader pattern as Open Question.

**Layer-3 §9 trivially satisfied:** test-design, not methodology-mode question.

### Accommodation trigger check

No perspective-driven destabilization observed. The model settled cleanly after 8 ambiguity-collapse pairs + 2 LBTs. No need to re-extract anchors.

---

## SV6 — Stabilized Model

### Committed structural decisions (SDs)

12 SDs to hand to Decomposition:

| SD | Decision |
|---|---|
| **SD1** | Nature axis = N1 (artifact-bounded vs possibility-mode); primary; 2×2 design. |
| **SD2** | Deliverable = 12 prompts (5 Group A + 5 Group B + 2 CTRL). |
| **SD3** | 6 advancing seeds for Innovation: GA-1 (cross-discipline coupling), GA-2 (failure-mode patterns), GA-3 (asymmetric-failure mentions); GB-1 (missing disciplines), GB-2 (multi-head failure modes), GB-5 (anti-patterns). |
| **SD4** | Discrimination criterion = DC1 + DC2 + DC3 (per-item precision + trade-off depth + coverage robustness); aggregate per fork-task; pre-committed BEFORE runs. |
| **SD5** | Stochasticity policy = one run per fork-task; ~5-10% noise floor; >20% signal threshold. |
| **SD6** | Warming protocol = 6 files in committed order (explore.md + surfacing.md + MVL+ SKILL.md + MVL2+ SKILL.md + docs/desc.md + docs/discipline_taxonomy.md). |
| **SD7** | Domain = all harness-internal; confound risk acknowledged in deliverable's caveats. |
| **SD8** | Anti-pattern check = Critique-stage probe against R9 anti-shapes per prompt. |
| **SD9** | CTRL pair = 1 per nature-group; negative control; empirically anchors noise floor. |
| **SD10** | Authorship-bias mitigation = commit-first protocol (criterion pre-stated) + criteria pulled from external sources + CTRL pair. |
| **SD11** | Two-step verification = (a) run 4 test tasks + 2 CTRL tasks; (b) per-criterion + aggregate comparison; (c) signal threshold check; (d) CTRL noise-floor check. |
| **SD12** | Pair-selection guidance from Innovation = surface which 2-of-5 pair within Groups A/B has SHARPEST predicted discrimination (for user's run-budget optimization). |

### How SV6 differs from SV1

SV1 framed the task as choosing prompts to maximize divergence. SV6 reframes it as a methodologically-sound A/B experiment with negative controls, pre-committed multi-axis criterion, and explicit authorship-bias mitigations. The deliverable is no longer just "10 prompts" — it's "12 prompts + warming protocol + criterion + stochasticity policy + run plan + caveat structure."

---

## Saturation Indicators

| Indicator | Status |
|---|---|
| Perspective saturation | YES — last perspective (Phase / Calibration-State) added KI10 (noise-floor anchor); 7+ perspectives applied; new perspectives stopped producing new anchor TYPES |
| Ambiguity resolution ratio | 8/8 ambiguities resolved (100%); 2 LBTs both PASS |
| SV delta | SV1 → SV6 shows clear shift: from "10 prompts" → "12-prompt methodologically-controlled experiment with pre-committed criterion, CTRL pairs, warming protocol, and bias mitigations" |
| Anchor diversity | All 5 anchor types present (7 Constraints + 10 Key Insights + 6 Structural Points + 5 Principles + 6 Meaning-Nodes); 7 perspectives produced distinct anchors |

---

## Failure-mode check

| Failure mode | Status | Evidence |
|---|---|---|
| Status Quo Bias | NOT OBSERVED | N1 axis chose over status-quo "just take exploration's preference" via LBT2 structural-ground test |
| Premature Stabilization | NOT OBSERVED | SV1 → SV6 clear progression; 8 ambiguity pairs each with strongest-counter + structural-ground rebuttal |
| Anchor Dominance | NOT OBSERVED | Multiple anchors load-bearing; no single anchor pinning all resolutions |
| Perspective Blindness | NOT OBSERVED | 7 perspectives applied; Risk produced 4 distinct risks; Frame-exit fired on 4 multi-value terms |
| Clean Resolution Trap | NOT OBSERVED | All 8 ambiguities had strongest-counter explicitly tested on structural grounds, not by precedent |
| Self-Reference Blindness | NOT OBSERVED | Acknowledged explicitly; mitigated via commit-first protocol + external-anchored criteria + CTRL pair; ALL adjudications cite external grounds |

---

## Self-Assessment Verdict

**PROCEED to Decomposition with 12 committed structural decisions (SD1-SD12).**

The territory is stable. The Decomposition phase partitions the 12-prompt-+-protocols deliverable into independent pieces with explicit interfaces. Each SD constrains the corresponding piece's work scope.
