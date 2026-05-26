# Exploration — Candidate Space for the "Elephant in the Room"

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-17_22-12__endgame_elephant_missing_piece/_branch.md`

Context: Exploration phase of an MVL+ inquiry. Save output to this folder. Possibility-exploration mode. Survey candidates across 5 named regions: infrastructure, cognitive substrate, value/trust, loop-architecture, external/meta. Source territory: `README2.md`, `README.md`, `docs/desc.md`, `thinking_disciplines/minimum_viable_loop.md`.

---

## 1. Territory Overview

**Mode:** possibility (candidates must be generated, not found pre-existing in artifacts).
**Entry point:** frontier-first (no prior hunch; broad scan first).
**Territory boundary:** pre-specified by the inquiry input — 5 named regions; no boundary-discovery sub-phase fired.
**Resolution:** medium across all regions; high resolution on candidates surfaced in cross-cutting/meta region after second cycle revealed density.

The territory is the set of "missing capabilities" whose absence is currently a bottleneck on Homegrown's trajectory toward the README2 end-goal (autonomous cognitive consciousness via Baldwin cycles + autonomy ladder). Candidates are sourced from explicit statements in the project's own self-diagnostics (README2's "What it doesn't do yet," `docs/desc.md`'s "Open Questions," `minimum_viable_loop.md`'s "The Two Fixes") and from structural-pattern inference where the project's stated framing has internal tensions or unnamed assumptions.

---

## 2. Inventory — Surfaced Candidates per Region

### Region A — Infrastructure gaps

**A1. Regression detection (the safety substrate, automated).**
README2 names this as "the load-bearing risk" — without regression detection, every self-improvement cycle is "a roll of the dice" and "self-improvement degenerates into self-degradation" below threshold. The Primitive RC's snapshot mechanism in `archived_skills/` is operational; canary reference runs, change-log sections, and the symptom catalog are partially built; nothing is wired into a runner that gates self-modifications. (D2: ~explicit in README2 "What's next, Family II" + `docs/regression/`.)

**A2. Telemetry-driven routing in the runner.**
Disciplines already emit telemetry (transform / progression / telemetry / frontier — the four-layer output anatomy). The runner currently checks *file existence* between disciplines, not output *quality*. Named in `thinking_disciplines/minimum_viable_loop.md` as one of two specific gaps preventing the "tinder fire" from starting. (D2: explicit gap.)

**A3. Materialization wiring as default post-finding step.**
The 8-phase `artifact_materialization.md` protocol exists; it is not wired as a default step after `/MVL+` produces a finding. Findings prescribe changes; nothing forces the prescription into actual files under contract. Named in README2 as "Family II — Next." (D2: explicit gap.)

### Region B — Cognitive substrate gaps

**B1. Predictive RC (the `/intuit` discipline).**
The real-time hunch layer. Heavily specced in `docs/intuit.md`, `docs/thinking_space_dynamics.md`, named the substrate without which the Baldwin cycle cannot close. Not shipped as a slash command. README2 names this as Family III "Self-maintenance (the Predictive RC arm)." (D2: explicit gap; the project's stated immediate next buildable step per `docs/desc.md` §"Where We Are Now.")

**B2. Retrospective RC (outcome-tracking calibration).**
The empirical-confirmation layer. Without it, Predictive RC has nothing to calibrate against. The Baldwin cycle literally *closes here* — predictions at T0, observations at T2+, the delta becomes calibration data. Named in README2 Family III as "The Baldwin cycle closes here." (D2: explicit gap.)

**B3. Primitive set admission completeness.**
The 11-primitive set is specified; per-primitive admission tests with two-reviewer corpus audit are partially built. Mood and Arousal modulators are explicitly DEFERRED (`docs/desc.md` Open Question #12). Indicators shaped by affective state are under-operationalized. (D2: explicit; lower priority than B1/B2.)

**B4. Z-space generation (Level 3 intuition — "intuition-space generation").**
The capability horizon. Beyond brute-force transfer; creating a custom Z-space tailored to the problem. `docs/desc.md` explicitly names this as "research frontier; not yet buildable." (D1: confidence-tagged as inferred; not actionable.)

### Region C — Value/trust gaps

**C1. Value persistence under deep self-modification.**
At Level 4+, the system modifies its own specs including value-encoding parts. How do bootstrap-encoded human values persist across deep self-modification? Named in README2 "Honest framing" as a known gap. Named in `docs/desc.md` Open Question #1 as "unproven; mainstream AI safety hasn't solved it either." (D2: explicit; no proposed mechanism.)

**C2. Quality-awareness calibration (the three RC layers as system capabilities, not human-provided).**
Today the human IS all three RC layers (Primitive, Predictive, Retrospective). Trajectory says the system develops its own. This is the conjunction of B1+B2+A1. (D2: explicit; restatement of the Baldwin substrate from the trust angle.)

**C3. The self-improvement viability threshold.**
README2 says: "Below that threshold, self-improvement degenerates into self-degradation." But what *concretely* defines the threshold? At what numerical level of regression-detection reliability does the system become trustable to self-modify? Operational definition deferred. (D2: explicit threshold-named-but-undefined.)

### Region D — Loop-architecture gaps

**D1. Multi-head loops (parallel MVL+ workers with cross-comparison).**
Family III "Meta-loop graduation (Level 4 multi-head MVL+)." Multiple parallel Workers explore competing branches; an Evaluator compares findings across heads; MERGE protocol decides PROMOTE/MERGE/CONTINUE/STOP. Not built. Gated on ≥3 sequential L3 chains. (D2: explicit; far-future.)

**D2. Persistent Navigator (cross-run context).**
Navigator at L1.5/L2 — auto-discovers default source inquiry; context persists with `navigation_memory.md`. Family III, gated on ≥10 navigation maps with selection rationale. (D2: explicit; near-future.)

**D3. Autonomous goal-formation.**
The system selects its own next seed from accumulated Reflect signals + outcome history. Family IV. No known buildable path. (D1: inferred; research frontier.)

**D4. Meaningful-traversal substrate (the L5 gate).**
The signal that distinguishes thinking from spinning. README2 explicitly: "Currently fuzzy; five candidate signal flavors named (coverage, convergence, productivity, directedness, depth); operational definition deferred." (D2: explicit absence.)

**D5. The loop-on-itself pattern (disciplines applied to their own specs).**
Phase 2 of the whirlpool in `minimum_viable_loop.md`. The system uses sensemaking on a discipline's weakness, innovation on fixes, critique on the fixes. Conceptually described, not yet automated as a routine. (D2: explicit conceptual frame; partial practice in inquiry folders.)

### Region E — External/meta gaps

**E1. Calibration data volume (N ≥ 30 per discipline).**
`docs/desc.md` Open Question #8: "Baldwin cycle rate for seed-generation maturity — Phase D seed-generation activates at N ≥ 30. Actual Baldwin cycle rate is unknown. If too slow, seed density insufficient." (D2: explicit; threshold named but rate unmeasured.)

**E2. Model-substrate dependency.**
`docs/desc.md` Open Question #11: "If AGI-level substrate emerges, externally-approximated primitives become redundant. Migration paths in substrate-versioned delegation provide proportionate handling." The project's own primitives may get bypassed if model intelligence increases enough. (D2: explicit; framed as opportunity, not risk.)

**E3. Project rate of inquiry.**
Implicit in E1. How often does an MVL+ inquiry actually run, in this project, in real use? `devdocs/inquiries/` shows ~60+ inquiries over weeks-to-months, but per-discipline coverage is uneven. (D3: inferred from inquiry-folder timestamps; not a project-stated gap.)

**E4. Single-user / single-project scope.**
Homegrown today is a single-user instrument running in one repo with one human as the bootstrap. Calibration data is one person's judgment over one project's problem-space. The "training set" for the future quality detector is N=1 labeler. (D3: inferred from repo structure; not a project-stated gap.)

### Region X — Cross-cutting / unnamed candidates (frontier scan beyond the prompt's 5 regions)

**X1. The "specced-but-unshipped" pattern.**
Multiple high-leverage capabilities (`/intuit`, the canary-run mechanism, the symptom catalog, materialization-as-default) are fully designed in `docs/` but absent from `cognitive_harness/`. The bottleneck is not design clarity — it's execution capacity. This is a project-velocity gap, not a capability gap. (D3: inferred; visible from comparing docs/ → cognitive_harness/ surface area.)

**X2. External ground truth — the "calibration anchor" problem.**
Everything Homegrown produces is markdown about thinking. The Retrospective RC's "actual downstream usefulness at T2+" presumes there *is* a downstream-usefulness signal. But the project has no automated test harness running disciplines against external problems with objective scoring. The "integrated test ladder" in `docs/desc.md` (well-defined hard problems → novel problems → unsolved human problems) is named but not instantiated as a runnable benchmark. Without external grounding, Baldwin cycles can only converge on internal coherence, not on truth. (D3: inferred; *not named anywhere explicitly* in the project's own diagnosis. Strong novelty signal.)

**X3. Single-human calibrator as single point of failure.**
The bootstrap-anchored values approach grounds the system in one human's labels (during the calibration phase). Idiosyncratic biases get encoded permanently into the Baldwin substrate. If the calibrator is unavailable or leaves the project, calibration stalls. The training set diversity is fundamentally limited. (D3: inferred; not project-named.)

**X4. Time-asymmetry of Retrospective RC.**
Predictive RC fires at T0; Retrospective RC needs T2+ ("days/weeks/months"). Each calibration data point requires real elapsed time to mature. N=30 calibrations per discipline × this latency = months-to-years of accumulated wall-clock time before "well-calibrated" claims hold. This is intrinsic, not a bug. The Baldwin cycle is structurally slow. (D3: inferred; project names the N=30 threshold but doesn't name the time-cost.)

**X5. Outcome attribution to specific spec changes.**
When a finding leads to a spec change which leads to downstream loops performing better/worse, attributing the delta to *which specific edit* caused it is non-trivial. Multiple spec changes overlap in time. Discipline outputs are influenced by both the spec and the prompt and the model and the human's framing. Without clean attribution, Retrospective RC's "calibration data" has high noise. (D3: inferred; not project-named.)

**X6. The bet itself.**
README2 names this in "Honest framing": the bet that structure-of-thinking matters more than raw model intelligence is testable, not proven. If the bet is wrong, all the work is moot. This is acknowledged but cannot be tested without external grounding (X2). (D2: project-named as "bet may fail.")

---

## 3. Signal Log

| Signal | Type | Where it fires | Decision |
|---|---|---|---|
| Baldwin closure (B1+B2) is the project's own named load-bearer | density + relevance | B1, B2, C2 converge on the same substrate | **PROBED** (probe 1) |
| Ground-truth gap is unnamed in project but cuts across everything | novelty + absence + tension | X2 spans B, C, E | **PROBED** (probe 2) |
| Single-human calibrator pattern | novelty + absence | X3 cross-cuts E4 | **PROBED** (probe 3) |
| Time-asymmetry is intrinsic, not engineering | novelty + tension | X4 connects to B2, E1 | **PROBED** (probe 4) |
| Value persistence under self-modification | tension + absence | C1 explicitly unresolved | **PROBED** (probe 5) |
| Specced-but-unshipped velocity gap | density | X1 spans multiple regions | Probed lightly; not the dominant signal |
| L5 meaningful-traversal substrate undefined | absence + tension | D4 explicit absence | Probed lightly; downstream of B+C, not upstream |
| Multi-head / persistent Navigator | relevance | D1, D2 | Deferred — Family III, downstream of Baldwin closure |
| Autonomous goal-formation | novelty | D3 | Deferred — Family IV, not actionable |

### Probe 1 — Baldwin closure (B1 + B2 + the human-replacement angle)

The project's *own* stated story: the Baldwin cycle (Predictive RC predicts at T0 → Retrospective RC observes at T2+ → delta becomes spec-refinement seeds) is the self-improvement mechanism. Without it, no self-improvement. With it, self-improvement runs. So solving B1+B2 *by definition* unblocks the trajectory.

But B2 (Retrospective RC) presupposes: outcomes happen (requires A3 materialization), outcomes are attributable to specific spec choices (requires X5), and outcomes carry an objective signal (requires X2 ground truth). B1 (Predictive RC) presupposes: a primitive substrate (B3), training cases (E1), and a calibration target (B2). So the "Baldwin substrate" is actually a *cluster* of co-dependencies, not a single point.

The project's own framing collapses the cluster into "ship `/intuit`." That collapse hides the fact that `/intuit` alone — without ground truth, without attribution, without volume — would *not* close the Baldwin loop. It would produce hunches without a way to know if they were right.

### Probe 2 — External ground truth (the calibration anchor)

The Predictive RC's design uses Case-Based Reasoning + Structure-Mapping Engine on prior cases. "Prior cases" means prior inquiry outcomes. "Prior outcomes" means: the human accepted/rejected the finding. So the calibration signal is, at the end of the day, the human's verdict on whether the finding was good.

This is fine *during the bootstrap phase* (Level 0). But the README is explicit that the human's role "MONOTONICALLY DECREASES." If the calibration data is human-labeled and the calibrator is being phased out, the system progressively loses its calibration anchor. The trajectory is: human grounds the system → system internalizes human's judgment patterns → system becomes self-grounding using those patterns. This *only works* if the human's patterns are correct (i.e., match the world). Without an external check that the patterns match the world, self-grounding converges to self-consistency.

The project does have a named external check: the **integrated test ladder** (well-defined hard problems → novel problems → unsolved human problems). But this is described, not instantiated. There is no benchmark suite. No script that runs the disciplines against external problems with objective scoring. The ladder is a *promise*, not a *mechanism*.

This is the strongest unnamed candidate. Without external grounding, the Baldwin cycle is a self-licking ice cream cone — calibrating predictions against earlier predictions, all anchored in one human's increasingly historical judgments.

### Probe 3 — Single-human calibrator

The bootstrap-anchored-values frame assumes the human provides reliable labels during calibration. But ONE human's labels:

- Have idiosyncratic biases (this person's aesthetic preferences become THE preferences).
- Limit the calibration set to problems this person encounters.
- Stop accumulating when the person is unavailable.
- Cannot be validated against another labeler (no inter-rater agreement).
- Carry attribution ambiguity: the human's labels may be influenced by the disciplines themselves (the human reads the discipline's output and rates it, but the discipline's framing primes the human's judgment).

This compounds with X2. A diverse labeler pool (5-50 humans across domains) would broaden the calibration set and reduce idiosyncratic encoding. The project has no mechanism for this.

### Probe 4 — Time-asymmetry of Retrospective RC

The Predictive RC fires immediately. The Retrospective RC requires consequences to play out — "days/weeks/months." This is the *Baldwin tempo*: the rate at which calibration data accumulates is bounded by how fast the world responds to the system's recommendations.

Concretely: a discipline run today produces a finding. That finding gets materialized into a file. The file change affects future runs. Future runs reveal whether the change helped. *That signal arrives weeks-to-months later.* You can't compress this.

This is structurally different from ML training (where many samples per second are available). The Baldwin cycle is more like clinical trials than gradient descent.

N=30 calibrations per discipline × (let's say) 1-2 calibrations per month per discipline = 15-30 months minimum to claim "well-calibrated" on a single discipline. With 8 disciplines, sequential, that's ~10-20 years. With parallel multi-head, that *could* compress, but multi-head requires Family III (which requires B1+B2, which requires calibration data — circular).

This is the *clock* problem: the Baldwin cycle has a fundamental tempo bounded by external response time. Faster tempo requires more parallelism (more inquiries running, more users running them, more domains generating outcomes), which requires E4 expansion.

### Probe 5 — Value persistence under self-modification

The system at L4+ modifies its own value-encoding specs. The README acknowledges this is unsolved. It is a real elephant — but it's an elephant for L4+. The current project state is L0. The trajectory from L0 to L3 doesn't strongly depend on solving C1. So while C1 is genuinely critical, it's a *late* elephant, not the immediate one.

If solved early, however, it would let the project commit confidently to autonomy increases without value drift fear. That's a real but conditional unblocker.

---

### Jump scan (a deliberately different direction)

What if the elephant isn't a *capability* gap but a *process* gap — testability/replicability? Specifically: can another team reproduce Homegrown from the docs and reach the same results? Could a script run the disciplines on a fixed benchmark and verify they produce the documented behaviors? Could a new AI session pick up `cognitive_harness/` and produce comparable outputs to the original?

Surfaced from jump:

- No automated test harness for disciplines.
- No benchmark of inputs with known-good outputs.
- No replication evidence: the disciplines have only ever been run by this one project.
- Multiple READMEs (`README.md`, `README2.md`, `README copy.md`) coexist; a new reader gets different framings depending on which they pick up.

This is real and could be construed as connected to X2 (a testable system can be calibrated against external ground truth). But it sits more in the *project hygiene* layer than the *cognitive capability* layer. I noted it; I do not promote it to top-candidate status because the user's question asks about *the project's end-goal*, and project hygiene is upstream of the end-goal but not the dominant bottleneck for it.

---

## 4. Confidence Map

| Region | Confidence | Notes |
|---|---|---|
| Region A (Infrastructure gaps) | **scanned** | candidates explicit; A1 is project-named load-bearer |
| Region B (Cognitive substrate) | **scanned** | B1, B2 explicit; B4 inferred at research-frontier |
| Region C (Value/trust) | **scanned** | C1 explicitly unresolved; C2 = restatement of B substrate |
| Region D (Loop-architecture) | **scanned** | D1-D2 explicit Family III; D3-D4 inferred frontier |
| Region E (External/meta) | **scanned** | E1, E2 explicit; E3, E4 inferred from repo structure |
| Region X (Cross-cutting unnamed) | **inferred** | X1-X6 surfaced by gap-pattern analysis, not project-named (except X6); strong novelty for X2, X3, X4 |

**Confirmed-absent regions** (productive output — what is NOT in the candidate space):
- "Increase model intelligence" is **explicitly absent** as a path. README2 rules out parameter scaling as the project's approach.
- "Wait for better LLM substrate" is **explicitly absent**. The bet is structure-of-thinking *on top of* current models.
- "Build a UI / product" is absent — the project commits to harness-internal cognition, not a user-facing tool.
- "External user telemetry pipeline" is absent — no multi-user infrastructure planned.
- "Integration with prediction markets / code execution / math proof engines for objective grounding" is absent — no such external-coupling mechanism named anywhere.

The last absence is the most striking: X2 (external ground truth) is literally NOT in the project's named candidate space.

---

## 5. Frontier State

**STABLE** for the project-named regions (A, B, C, D, E). Additional scans in those directions would surface variants of already-named candidates, not new structural features.

**ADVANCING → STABLE** for region X (cross-cutting unnamed). The probes deepened X2, X3, X4 into clear candidates with structural reasoning. Further scanning would refine but not surface novel candidates of comparable weight.

**Convergence assessment:**

| Criterion | Status |
|---|---|
| Frontier stability | ✓ — additional scans yield variants, not new candidates |
| Declining discovery rate | ✓ — second cycle deepened existing signals rather than finding new ones |
| Bounded gaps | ✓ — remaining unknowns (specific operationalization of X2, time-asymmetry numerics) are interpolable from neighbors |
| Jump scan performed | ✓ — testability/replicability direction scanned; surfaced project-hygiene candidates that ranked below top tier |

**Convergence:** met. Proceeding to deliverable.

---

## 6. Gaps and Recommendations — Frontier Questions Handed Off

The top-tier candidates handed off to downstream disciplines (Sensemaking, Decomposition, Innovation, Critique):

**Tier-1 candidates (the strongest "elephant" candidates by leverage):**

1. **The Closed Baldwin Substrate (B1+B2 cluster).** Shipping Predictive RC AND Retrospective RC AND their attribution machinery (X5) as system capabilities, not human-provided. This is the project's own named load-bearer.

2. **External Ground Truth / Objective Calibration Anchor (X2).** The unnamed assumption that the Baldwin cycle can converge on truth without an external coupling to a domain where outcomes are objectively scorable. Without this, the cycle converges on internal coherence, not improvement.

3. **Calibration Data Velocity (X3 + X4 + E1 + E4 cluster).** The intrinsic time-asymmetry + single-user scope means N=30-per-discipline thresholds take 10-20 years sequential. Either accept the tempo or fundamentally change scope.

**Tier-2 candidates (real elephants but conditional or downstream):**

4. **Value persistence under self-modification (C1).** Critical at L4+ but not blocking L0→L3 trajectory.
5. **Automated regression detection (A1).** Project-named load-bearer for the safety substrate; precondition for trusting any self-modification.
6. **The L5 meaningful-traversal substrate (D4).** The signal that distinguishes thinking from spinning; gates the late autonomy ladder.
7. **The materialization-attribution loop (A3 + X5).** Required for outcomes-to-spec-edits attribution; precondition for B2.

**Tier-3 (real but not the elephant):**

8. **Specced-but-unshipped pattern (X1).** A project-velocity issue, not a cognitive-capability issue.
9. **Multi-head + persistent Navigator (D1, D2).** Downstream of Baldwin closure.
10. **Autonomous goal-formation (D3), Z-space generation (B4).** Research frontier, not actionable.

### Frontier questions to downstream:

- **For Sensemaking:** what does it MEAN for a thinking system to have a "ground truth"? Is X2 a real constraint or a categorical confusion? Are there definitions of self-improvement that don't require external grounding (e.g., internal-coherence-improvement as a legitimate end)? Anchors needed: "self-improvement," "calibration," "ground truth," "Baldwin closure," "the bet."
- **For Decomposition:** is the "Baldwin substrate" actually one piece or a cluster of co-dependencies? Should it be decomposed into B1 alone vs. B2 alone vs. attribution machinery vs. ground truth? What's the dependency order? Can any be built without the others?
- **For Innovation:** what are alternative mechanisms for calibrating the Predictive RC if external ground truth is unavailable? (Internal consistency? Multi-AI consensus? Adversarial probing? Historical reasoning patterns?) What unblocks the time-asymmetry?
- **For Critique:** comparing Tier-1 candidates head-to-head — which has the broadest unblocking effect on the trajectory? Which is most actionable now? Where do the candidates have hidden assumptions that fail under adversarial probing?

---

## 7. Telemetry

| Field | Value |
|---|---|
| Mode | possibility |
| Entry point | frontier-first |
| Cycles run | 3 (initial scan; signal-detection + probe; jump scan + convergence check) |
| Candidates generated | 26 named (A1-A3, B1-B4, C1-C3, D1-D5, E1-E4, X1-X6) |
| Signals detected | 9 distinct (5 strong, 4 weak) |
| Probed count | 5 (deep) + 1 (jump scan) + ~3 (light) |
| Deferred count | 6 (Tier-3 candidates not deeply probed) |
| Resolution progression | medium across all regions; high resolution on region X after density signal triggered second cycle |
| Frontier state | stable on named regions; stable on X after second cycle |
| Discovery rate | declining — cycle 1 surfaced ~20 candidates; cycle 2 surfaced 6 in region X; cycle 3 jump-scan surfaced 0 new top-tier candidates |
| Convergence — frontier stability | ✓ |
| Convergence — declining discovery rate | ✓ |
| Convergence — bounded gaps | ✓ |
| Jump scan performed | ✓ (testability/replicability direction) |
| Per-item depth | D2/D3 across the map (D3 reached on probed candidates) |
| Failure modes checked | premature depth (✓ avoided — coarse scan first); surface-only scanning (✓ avoided — probed signals); false confidence (✓ — jump scan performed); premature termination (✓ — all convergence criteria checked); re-exploration (✓ avoided); completeness bias in possibility mode (✓ — surfaced obvious project-named candidates before unnamed ones); open→closed drift (✓ avoided — annotations kept at labeling level); silent boundary-discovery (✓ — boundary was pre-specified, no sub-phase fired); negative-space silent drop (✓ — confirmed-absent regions explicitly listed); inadequate per-item depth (✓ — D2 minimum maintained) |

---

## 8. Self-Assessment

**Verdict: PROCEED.**

All convergence criteria met. Jump scan performed without surfacing new top-tier candidates. The candidate space is well-mapped across the 5 project-named regions plus a 6th cross-cutting region (X) that surfaced unnamed elephants.

The top-tier hand-off to Sensemaking is clear: **three candidate "elephants" of comparable weight but different leverage shapes** — (1) the closed Baldwin substrate (project-named), (2) external ground truth (unnamed but cross-cutting), (3) calibration data velocity (cluster). Sensemaking will need to extract the anchors that distinguish these candidates and reduce the ambiguity in what counts as "elephant" for this project's end-goal definition.

Notable absences worth flagging to Sensemaking: the project has *no candidate* in its named space for "external grounding mechanism" — yet X2 surfaces consistently from gap-pattern analysis. Either the project deliberately omits external grounding (and Sensemaking should recover the reason), or it's a blind spot.
