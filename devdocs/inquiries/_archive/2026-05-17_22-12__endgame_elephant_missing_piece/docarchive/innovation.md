# Innovation — Candidate Calibration Anchors and Selection Algorithms

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-17_22-12__endgame_elephant_missing_piece/_branch.md`

Context: Innovation phase of an MVL+ inquiry. Read `_branch.md`, `exploration.md`, `sensemaking.md`, and `decomposition.md`. Save here. Decomposition identified the leverage point as P1 (Grounding Source) with hottest sub-point being the *selection algorithm* for choosing a calibration domain. Generate candidate calibration anchors AND candidate selection algorithms. Apply the seven mechanisms with three variations each (generic + focused + contrarian). Include OBVIOUS calibration domains first (completeness before novelty). Also generate framing-questioning candidates. Run the assembly check.

---

## Phase 1 — Seed

**Seed statement:** Homegrown's elephant is the **calibration anchor selection** — the act of choosing what the system's Retrospective RC measures predictions against, once the human is phased out as the implicit anchor. Sensemaking shows this is *latent at L0 and acute at L3+*; Decomposition shows it is the upstream leverage center of the outcome substrate (P1 in the question tree).

**Direction (intuition):** the user wants something that broadly eases the trajectory. The strongest payoffs come from candidates that (a) are domain-agnostic enough to apply across the 8 disciplines, (b) are compute-cheap enough to run per-invocation, (c) produce signal that *cannot be produced by self-rating*. Candidates that score on all three deserve extra attention.

**Seed type:** combined — Gap (no anchor named in project), Question (what should the system calibrate against?), and Constraint (without ground truth, calibration converges on self-consistency).

---

## Pre-Generation — Obvious Candidates (Completeness-Before-Novelty Pass)

Before applying mechanisms, surface the obvious calibration domains the project would consider:

| # | Domain | Strengths | Weaknesses |
|---|---|---|---|
| O1 | Math / formal proofs (proof checker) | hard correctness signal; mature benchmarks (MATH, miniF2F) | most Homegrown disciplines don't produce math outputs |
| O2 | Code execution (tests passing) | clear pass/fail; immediate; aligned with practical task completion | most disciplines aren't code-generation; need transformation |
| O3 | Prediction markets / forecasting tournaments | objective truth signal over time; calibrates probabilistic claims | long latency; market depth limits |
| O4 | User retention / decision-quality (longitudinal) | aligns with actual usefulness | many confounders; attribution noisy; long latency |
| O5 | Scientific replication | objective in the long run | replication infrastructure expensive; latency very long |
| O6 | Cross-AI consensus (multiple LLMs grade output) | cheap, fast, broadly applicable | shared model biases; agreement ≠ truth |
| O7 | Established LLM benchmarks (MMLU, HumanEval, GPQA, etc.) | well-validated; cheap | doesn't measure what Homegrown disciplines actually do |
| O8 | Expert human panels (broader than single-user) | improves on single-human; can grade qualitative work | expensive; still bounded by human bias |

These eight form the obvious candidate set. The mechanisms below generate variations that go beyond them.

---

## Phase 2 — Generate (Seven Mechanisms × Three Variations)

### Mechanism 1 — Combination (Generator)

**[C-Generic] Multi-Anchor Portfolio.** Don't pick one calibration domain — use a portfolio (math + code + cross-AI + retention) weighted by domain-applicability. Each discipline gets calibrated against whichever subset fits its outputs. The "selection algorithm" becomes a router: discipline X outputs of type Y get routed to anchor Z.

**[C-Focused] Cross-Discipline Self-Consistency.** Use the system's internal cross-discipline agreement as a calibration signal: if Sensemaking *predicts* that Innovation will surface candidate X, and Innovation surfaces X, that's confirmation. Connect the existing 8 disciplines into a consistency network where each discipline's output gets *checked by* a disjoint set of other disciplines acting as evaluators. This is *quasi-external* — the evaluating disciplines have different frames and different failure modes, so their agreement is not self-rating.

**[C-Contrarian] User-Decisions-Over-Time Anchor.** Combine the single-user calibrator with longitudinal action tracking. Instead of "did the human accept this finding?", track "did the human's *later actions taken because of the finding* succeed?". Combine outputs + downstream user actions + outcomes-of-actions into one calibration signal with built-in attribution.

---

### Mechanism 2 — Absence Recognition (Generator)

**[A-Generic] Domain-Agnostic Structural Quality.** What's absent from O1-O8? All are about *content correctness*. What's not there: **structural quality of the analysis itself** — irrespective of whether the analysis is "right." Compare the system's outputs against curated examples of high-quality analyses (graded by a panel) using structural similarity metrics. The corpus IS the anchor.

**[A-Focused] The `outcome.md` File Convention (Redesign-Level Absence).** The inquiry-folder convention has `_branch.md`, `_state.md`, discipline-outputs, `finding.md`, `docarchive/`. **There is no `outcome.md`** — no file convention for recording what actually happened after a finding was acted on. The redesign-level absence: if the system were designed from scratch with calibration in mind, every materialized finding would generate an `outcome.md` after T+N time (initially human-filled, eventually system-filled from anchor sources). This is the *file-convention-level* missing piece.

**[A-Contrarian] Rejected-and-Followed-Anyway Override Dataset.** The richest calibration signal isn't where the system agrees with humans — it's where they *disagree* and the disagreement gets tracked. The missing artifact is a **`overrides.md` log** of every human-override (where the human went against a critique verdict or extended a "killed" candidate), plus the outcome of pursuing the overridden direction. The system's miscalibration shows up loudest at the override boundary; nothing currently captures it.

---

### Mechanism 3 — Domain Transfer (Generator)

**[DT-Generic] The Clinical-Trial Pattern.** Borrow from medicine: define a *primary endpoint* (the calibration metric), *secondary endpoints* (supporting signals), an *attribution protocol* (confounder controls), and *pre-register predictions* before observing outcomes. Predictive RC pre-registers its hunches in an immutable log; Retrospective RC compares against pre-registered predictions only. Pre-registration kills the "researcher degree-of-freedom" problem at the substrate level.

**[DT-Focused] The Brier-Score Pattern (Forecasting Tournaments).** Borrow from Tetlock's superforecasting work: every prediction is logged with a probability; outcomes are scored against the predicted probability using the Brier score. Discipline outputs are reframed as probabilistic claims ("this approach has ~80% chance of solving the problem"). Calibration becomes: do the system's 80% claims actually come true 80% of the time? This directly addresses calibration-as-accuracy without requiring binary truth.

**[DT-Contrarian] The Replication-Crisis Pattern (Inverted).** Borrow from social-science replication crisis as a counter-pattern: assume your calibration is wrong by default. Run *replication studies* on the system's own past findings — re-run /MVL+ on the same question in different contexts/months/different models, see if the same answer survives. The calibration anchor becomes **internal replicability under perturbation** — not "truth" but *stability under varied conditions*. This is structurally novel because the replication explicitly perturbs the substrate that produced the original answer.

---

### Mechanism 4 — Extrapolation (Generator)

**[E-Generic] Agent-Task Benchmarks (METR / SWE-bench Trajectory).** Trend: AI evaluation is rapidly becoming agentic (METR's HCAST, SWE-bench, OSWorld, etc.). Extrapolation: in 2-5 years, the dominant calibration domain for cognitive harnesses will be **agentic task completion in well-defined sandboxes**. Homegrown should aim its calibration anchor at this domain — agent-task completion as ground truth.

**[E-Focused] Cheap Multi-Model Consensus as Commodity.** Trend: inference costs are dropping; multi-LLM orchestration is maturing. Extrapolation: cheap parallel evaluation across 5-10 frontier models becomes routine within 12-24 months. The cross-AI consensus anchor becomes increasingly viable as cost approaches zero. Bet now on this becoming the most-used calibration substrate.

**[E-Contrarian] Human Attention as Vanishing Resource.** Trend: human reviewer attention is becoming a luxury good (the bootstrap human gets pulled into other work). Extrapolation: the system needs to migrate calibration AWAY from humans *not* because the autonomy ladder says so, but because human labeling time becomes economically unavailable. This makes external grounding load-bearing earlier than the L3 ladder transition predicts — possibly even at L1.

---

### Mechanism 5 — Lens Shifting (Framer)

**[L-Generic] Under "Output-is-Thinking-Traces" Conditions, External Grounding Is a Category Error.** Current frame: ground truth is necessary. Shifted frame: if the discipline outputs are *thinking traces about thinking* (not predictions about the world), then external grounding may be a category error — the only valid calibration IS internal coherence + structural quality. Under this lens, the elephant is *the wrong elephant*; the project is right to omit external grounding because the substrate's outputs don't have an external referent to begin with.

**[L-Focused] Under "Human as Durable Calibrator" Conditions, the Elephant Dissolves.** README2 says human role monotonically decreases. But "graceful arrest" is named as a valid design choice. What if the trajectory permanently caps at L2-L3 with the human as the *strategic-only* reviewer? Then the human IS the durable calibrator — phased *down* to strategic decisions, not phased *out*. The ground-truth elephant becomes a Level 4+ concern only — and Level 4+ may be optional.

**[L-Contrarian] Under "Post-AGI Substrate" Conditions, the Whole Baldwin Substrate Becomes Legacy.** If the underlying LLM eventually has true reasoning capability, the Predictive RC layer becomes redundant — the model itself produces calibrated outputs. Under this lens, investing in the outcome substrate is a wrong-direction bet; the right bet is on substrate-takeover protocols (mentioned in `docs/desc.md` as an open question). The elephant is then "preparing for substrate-takeover," not "building the substrate."

---

### Mechanism 6 — Constraint Manipulation (Framer)

**[CM-Generic] Add: Calibration Must Be Runnable per /MVL+ Invocation.** This eliminates: scientific replication (too slow), user retention (too slow), prediction markets (slow). Keeps: code execution, cross-AI consensus, expert-panel-on-rubric, established benchmarks, perturbation testing. The constraint focuses the candidate set on what's actually deployable as runtime calibration.

**[CM-Focused] Add: Calibration Must Work for ANY Discipline Output (Domain-Agnostic).** This eliminates math (Sensemaking outputs aren't math), code (Critique outputs aren't code), most established benchmarks. Keeps: cross-AI consensus, expert-panel-on-rubric, structural-quality-against-corpus, cross-discipline self-consistency. The constraint reveals that the *domain-agnostic* candidate set is much smaller than the full candidate set — and convergence on cross-AI/cross-discipline anchors emerges as the only options that satisfy both this constraint AND the runnable-per-invocation constraint above.

**[CM-Contrarian] Drop: The "External" Requirement; Use Orthogonal-Internal Instead.** What if "ground truth" doesn't need to be EXTERNAL — it just needs to be ORTHOGONAL to the system's own self-assessment? An *internal-but-orthogonal* anchor: the meta-loop's traversal signals (coverage, convergence, productivity, directedness, depth) measured by a *different* discipline-set than the one being evaluated. The system grades its own work using disciplines disjoint from the discipline-under-test. The orthogonality (different frame, different failure modes) provides quasi-external character without requiring an actual external domain.

---

### Mechanism 7 — Inversion (Framer)

**[I-L1, Component] Calibrate Against Future-Self, Not External Truth.** Inverted: Retrospective RC asks "did the system's *later* judgment (informed by more inquiries) confirm the Predictive RC's *earlier* hunch?" Calibration becomes purely temporal-internal, between now-self and future-self. Doesn't require external grounding but converges on self-consistency at the limit. (Component-level inversion — workaround.)

**[I-L2, System] Calibration Is Not Outcome-Matching; It Is Perturbation Resilience.** Inverted: the goal isn't "predict correctly and confirm" but "produce outputs whose key claims survive injected adversarial perturbations." Calibration becomes *perturbation testing* rather than *outcome matching*. This is structurally what `/comprehend`'s CV4 "Hardened" level already does at the discipline level; promote it to the system-level Baldwin substrate. Each finding gets perturbed (re-run with adversarial prompts; alternative model substrate; reframed problem); claims that survive perturbation are "calibrated." (System-level inversion — architectural solution.)

**[I-L3, Root-Cause] The Baldwin Metaphor Is Wrong For Cognitive Systems.** Inverted: biology's Baldwin effect relies on an environment that is *not designed by the organism*; the cognitive harness has no such environment, so the project is forcing a biological analogy onto a domain where it doesn't fit. Replace with a different model: **dialectical-self-improvement** (Hegelian thesis → antithesis → synthesis), or **proof-search** (the system improves by closing more proof obligations over time), or **apprenticeship** (Vygotsky: the system improves through scaffolded interaction with more capable agents — humans, then other AIs, then itself). The elephant changes from "build the Baldwin substrate" to "the foundational metaphor is wrong, redesign the self-improvement mechanism."

---

## Phase 3 — Test

Each candidate against the 5 tests: novelty / scrutiny survival / fertility / actionability / mechanism independence. Disposition: ACTIONABLE / DEFERRED (with revival trigger) / RESEARCH FRONTIER.

| ID | Candidate | Novelty | Survival | Fertility | Actionability | Mech-Indep | Disposition |
|---|---|---|---|---|---|---|---|
| O1 | Math proofs | low (well-known) | high | medium | high | — | DEFERRED (only applies to math-shaped outputs; revival: discipline output type = math) |
| O2 | Code execution | low | high | medium | high | — | DEFERRED (applies to materialized code; revival: discipline output = runnable code) |
| O3 | Prediction markets | low | high (when used as forecasting) | high | medium | — | DEFERRED (latency; revival: when long-term outcome tracking is built) |
| O4 | User retention / decision-quality | low | medium | medium | low (in current scope) | — | DEFERRED |
| O5 | Scientific replication | low | high | low | very low (infra-cost) | — | RESEARCH FRONTIER |
| O6 | Cross-AI consensus | medium | high | high | high | converges with E-Focused, CM-Focused | **ACTIONABLE** |
| O7 | Established benchmarks (MMLU/HumanEval) | low | low (wrong shape for disciplines) | low | medium | — | FAILED test ("doesn't measure what disciplines do") |
| O8 | Expert human panels | low | high | medium | medium-low (cost) | converges with C-Contrarian | DEFERRED |
| C-Gen | Multi-Anchor Portfolio | medium | high (no single domain suffices) | high | high | converges with CM-Focused, E-Focused | **ACTIONABLE** |
| C-Foc | Cross-Discipline Self-Consistency | high | high (quasi-external by construction) | high | high | converges with CM-Contrarian, I-L2 | **ACTIONABLE** |
| C-Con | User-Decisions-Over-Time | high | medium | medium | medium (needs tracking infra) | — | DEFERRED (revival: when materialization is default-wired and user-decision capture exists) |
| A-Gen | Domain-Agnostic Structural Quality | high | medium (requires graded corpus) | medium | low (corpus doesn't exist) | — | DEFERRED (revival: when N≥100 graded discipline outputs exist) |
| A-Foc | `outcome.md` File Convention | high | high | high (changes inquiry-folder shape) | very high (small protocol change) | converges with DT-Generic | **ACTIONABLE** |
| A-Con | `overrides.md` Override Dataset | high | high (where signal is loudest) | high | high (small protocol change) | — | **ACTIONABLE** |
| DT-Gen | Clinical-Trial Pattern (pre-registration) | high | high (kills researcher-DoF) | high | high (methodological, not infra) | converges with DT-Focused | **ACTIONABLE** |
| DT-Foc | Brier-Score Pattern | high | high | high | high (Critique outputs are already verdicts) | converges with DT-Generic | **ACTIONABLE** |
| DT-Con | Replication / Internal-Stability | medium-high | high | high | medium (needs reproducible runs) | converges with I-L2 | **ACTIONABLE** |
| E-Gen | Agent-Task Benchmarks | medium | high (active field) | medium | medium (disciplines need agent-task framing) | — | DEFERRED (revival: when agentic eval is dominant + disciplines reframed as agent tasks) |
| E-Foc | Cheap Cross-AI Consensus | medium | high | high | high | converges with O6, CM-Focused | **ACTIONABLE** |
| E-Con | Human Attention Scarcity (urgency) | high | medium | low | low (not a candidate, it's a meta-point) | — | RESEARCH FRONTIER (observation) |
| L-Gen | "Output-is-thinking-traces" lens | high | medium (premise contested) | medium | low (it's a meta-claim) | — | DEFERRED (revival: if external candidates all fail) |
| L-Foc | Human-as-Durable-Calibrator (cap at L3) | high | high (README allows graceful arrest) | medium | medium (it's a project-direction choice) | — | **ACTIONABLE as meta-framing** |
| L-Con | Post-AGI Substrate Takeover | medium | medium (depends on AGI timelines) | low | very low (research frontier) | — | RESEARCH FRONTIER |
| CM-Gen | "Runnable per invocation" constraint | medium | high | high | high (filters candidate set) | converges with CM-Focused | **ACTIONABLE as selection constraint** |
| CM-Foc | "Domain-agnostic" constraint | medium | high | high | high (filters candidate set) | converges with CM-Generic | **ACTIONABLE as selection constraint** |
| CM-Con | Orthogonal-Internal (drop "external") | high | high | high | high | converges with C-Focused, I-L2 | **ACTIONABLE** |
| I-L1 | Calibrate against future-self | low-medium | medium (still self-referential at limit) | low | medium | — | DEFERRED |
| I-L2 | Perturbation Resilience | high | high (extends Comprehend's CV4 to system) | high | high (uses existing pattern) | converges with DT-Con, CM-Con | **ACTIONABLE** |
| I-L3 | Baldwin Metaphor Is Wrong (replace) | very high | medium (requires reframe of project's foundation) | very high | low (research-frontier reframe) | — | RESEARCH FRONTIER (meta-elephant candidate) |

---

## Convergence Findings

Looking at which ACTIONABLE candidates point to the same core innovation:

**Convergence cluster α — "Compute-cheap domain-agnostic anchors":**
O6 (cross-AI consensus) + C-Gen (multi-anchor portfolio) + E-Foc (cheap cross-AI) + CM-Gen (runnable constraint) + CM-Foc (domain-agnostic constraint) all point at: **a small portfolio of compute-cheap, runnable-per-invocation, domain-agnostic anchors with cross-AI consensus as a default member**.

**Convergence cluster β — "Internal-orthogonal calibration":**
C-Foc (cross-discipline self-consistency) + CM-Con (orthogonal-internal) + I-L2 (perturbation resilience) + DT-Con (replication / internal stability) all point at: **an internal-orthogonal calibration architecture** that doesn't require an external domain but uses cross-discipline + perturbation + cross-time-replication to produce quasi-external signal.

**Convergence cluster γ — "Methodology of recording outcomes":**
DT-Gen (clinical-trial pre-registration) + DT-Foc (Brier scoring) + A-Foc (`outcome.md` file convention) all point at: **a methodology-and-file-convention layer for recording outcomes** that works regardless of which domain serves as the anchor.

**Convergence cluster δ — "Where signal is loudest":**
A-Con (override dataset) + DT-Gen (pre-registration) point at: **capturing the human-system disagreement moments** as the highest-signal calibration data.

**Three core architectural moves emerge from these clusters.**

---

## Axis Coverage Check

| Axis | Variants represented |
|---|---|
| Anchor source | external (O1-O5), cross-AI (O6, E-Foc), internal-orthogonal (C-Foc, CM-Con), perturbation (I-L2, DT-Con), hybrid (C-Gen portfolio) — **all variants covered** |
| Selection algorithm | single-anchor (O1-O8), multi-anchor portfolio (C-Gen), anchor-per-discipline (C-Gen with router), no-selection (CM-Con uses internal disciplines) — **all variants covered** |
| Outcome methodology | observational (O1-O8 default), pre-registration (DT-Gen), Brier scoring (DT-Foc), perturbation (I-L2), file-convention (A-Foc), override-capture (A-Con) — **all variants covered** |
| Framing | accept the framing (most), question the framing (L-Gen, L-Foc, I-L3) — **both covered** |

Axis coverage: complete. The candidate set varies along all relevant orthogonal axes.

---

## Phase 3.5 — Assembly Check

Examine the ACTIONABLE survivors together. What architecture emerges?

### Emergent Assembly — The Domain-Agnostic Multi-Anchor Calibration Architecture (DAMACA)

**A four-layer calibration substrate that combines the strongest survivors into a single architecture:**

#### Layer 1 — Anchor Portfolio (cluster α + cluster β)

A *small fixed portfolio* of compute-cheap anchors that the system runs at every relevant inquiry:

- **Cross-AI consensus** (default; applies to every finding) — N≥3 frontier LLMs grade the finding against a structured rubric; agreement and disagreement-patterns are both recorded.
- **Cross-discipline self-consistency** (default; applies wherever discipline outputs cross-reference) — disjoint discipline sets evaluate the finding; agreement = quasi-external signal.
- **Perturbation resilience** (default for high-stakes findings) — adversarial perturbation per Comprehend's CV4 pattern; claims that survive are calibrated.
- **Domain-specific anchors when applicable** — code execution for runnable code outputs; math verification for proofs; etc. Used opportunistically, not required for every finding.

The "selection algorithm" is now: **route each finding to all applicable anchors in the fixed portfolio**. There is no per-finding selection decision — the portfolio handles routing automatically. This is the key architectural shift: turn "which anchor?" from a hard choice into a deterministic router.

#### Layer 2 — Outcome Methodology (cluster γ)

- **Pre-registration:** Predictive RC's hunches are recorded immutably *before* the finding is finalized. Format: an immutable `_predictions.md` file in the inquiry folder.
- **Brier-style scoring:** the discipline output's verdicts/claims are framed as probabilistic. Critique's SURVIVE/REFINE/KILL becomes (0.9, 0.5, 0.1) probabilities. Retrospective RC scores against pre-registration using Brier or a similar metric.
- **`outcome.md` file convention:** every materialized finding generates an `outcome.md` after T+N time. Initially: human-filled. Later: filled from Layer-1 anchor signals as they arrive.

#### Layer 3 — High-Signal Capture (cluster δ)

- **`overrides.md` log:** every place where the human overrides a discipline verdict (or the substrate's recommendation) gets recorded with timestamps, the original verdict, the override reason, and the eventual outcome. This is THE highest-signal calibration data — where the system and the human disagree IS where the system needs to learn.
- Override entries feed both Predictive RC training (these are the cases where Predictive RC most likely got it wrong) AND the Retrospective RC's spec-refinement loop (these are the cases where spec edits would have the highest impact).

#### Layer 4 — Human-Bridge Decision (L-Foc)

- **Decision point:** is the trajectory aiming for L4+ ("graceful arrest at L3" is valid per README2)? If L3 ceiling is chosen, the human remains the strategic-only calibrator forever and the elephant becomes a *bounded* problem. If L4+ remains the target, Layers 1-3 are the bridge and the human can phase out cleanly.
- This is a meta-framing candidate that affects the urgency of Layers 1-3 but doesn't change their design.

### Why this assembly is more valuable than any single piece

- **No-single-anchor problem solved.** The portfolio handles disciplines that need different anchors.
- **Latency-vs-signal tradeoff balanced.** Cross-AI is fast (immediate signal); perturbation is fast (per-finding); domain-specific anchors are precise but optional; long-latency anchors (retention, replication) are layered on opportunistically.
- **Silent-failure risk addressed.** Multiple orthogonal anchors → drift becomes visible (the anchors disagree with each other when signal degrades).
- **Selection-algorithm gap addressed.** The selection algorithm is *deterministic routing*, not arbitrary choice. The project commits to a fixed portfolio; per-finding selection is automatic.
- **Domain-agnostic constraint satisfied.** Cross-AI consensus + cross-discipline + perturbation work for every discipline output.
- **Runnable-per-invocation constraint satisfied.** Layer 1 anchors are all sub-minute compute cost.
- **Methodology gap addressed.** Pre-registration + Brier + `outcome.md` make Retrospective RC's job mechanical instead of judgment-laden.
- **Highest-signal data captured.** `overrides.md` ensures the most calibration-rich events (human disagreement) are never lost.

---

## Failure Modes Observed

- **Premature evaluation:** AVOIDED — no candidate was rejected before mechanism application; the 8 obvious candidates were surfaced first per completeness-before-novelty.
- **Single-mechanism trap:** AVOIDED — all 7 mechanisms applied; 4 generators + 3 framers covered.
- **Early frame lock:** PARTIALLY EXPOSED — the "external grounding required" frame was the dominant frame inherited from Sensemaking. Mechanisms L-Gen, L-Foc, L-Con, CM-Con, and I-L3 explicitly questioned it; not all were dismissed. The frame is now load-tested, not locked.
- **Innovation without grounding:** AVOIDED — each candidate was tested with the 5-test cycle and assigned a disposition.
- **Mechanism exhaustion:** AVOIDED — 28 distinct candidates produced; convergence emerged.
- **Survival bias:** PARTIALLY OBSERVED — the survivors clustered toward "incremental within Homegrown's frame" architectures (DAMACA). The most disruptive candidate (I-L3, "Baldwin metaphor is wrong") was preserved as RESEARCH FRONTIER rather than killed. The lens-shifting candidates (L-Gen, L-Foc) survived as meta-framing. Survival bias is detectable but mitigated by explicit RESEARCH FRONTIER preservation.

---

## Innovation Telemetry

| Field | Value |
|---|---|
| Generators applied | 4/4 (Combination, Absence Recognition, Domain Transfer, Extrapolation) |
| Framers applied | 3/3 (Lens Shifting, Constraint Manipulation, Inversion) |
| Total candidates | 28 (8 obvious + 21 mechanism-derived) |
| Disposition: ACTIONABLE | 11 (O6, C-Gen, C-Foc, A-Foc, A-Con, DT-Gen, DT-Foc, DT-Con, E-Foc, CM-Gen, CM-Foc, CM-Con, I-L2, L-Foc — counted with cluster collapses, 11 distinct survivors) |
| Disposition: DEFERRED with revival trigger | 9 |
| Disposition: RESEARCH FRONTIER | 4 (O5, E-Con, L-Con, I-L3) |
| Disposition: FAILED test | 1 (O7) |
| Convergence | YES — three convergence clusters (α, β, γ) plus a fourth (δ) emerged; assembly synthesizes them |
| Survivors tested | All 11 ACTIONABLE survivors tested per 5-test cycle |
| Axis coverage | Complete — all 4 axes (anchor source, selection algorithm, outcome methodology, framing) have multiple variants |
| Assembly emergent value | YES — DAMACA architecture combines clusters α + β + γ + δ into a four-layer architecture not present in any single candidate |
| Failure modes | premature evaluation: avoided; single-mechanism: avoided; early frame lock: partially exposed; innovation w/o grounding: avoided; exhaustion: avoided; survival bias: partially observed, mitigated |

**Overall: PROCEED.** Sufficient coverage + convergence + tested survivors + emergent assembly. The Critique step should evaluate DAMACA as the assembled candidate against the strongest counter-arguments, with the framing-questioning candidates (L-Gen, L-Foc, I-L3) as alternative top-level positions.

---

## Open hand-off to Critique

The Critique step should evaluate:

1. **DAMACA (the assembly)** as the primary candidate answer to "what's the elephant's solution?"
2. **Cross-AI consensus alone** as a minimum-viable version (the simplest survivor of cluster α).
3. **Cross-discipline self-consistency alone** as the simplest survivor of cluster β.
4. **`outcome.md` + `overrides.md` file conventions alone** as the simplest survivor of cluster γ+δ.
5. **L-Foc (graceful arrest at L3)** as a meta-framing alternative — the elephant dissolves rather than gets solved.
6. **I-L3 (Baldwin metaphor wrong)** as a research-frontier alternative — the elephant is conceptual, not capability.

Evaluation should test all candidates against the *bet-falsifiability* dimension: does this candidate make "structure-of-thinking matters more than raw intelligence" *testable*? The verdict on which candidate is "the answer to the user's question" depends on (a) which provides broadest leverage on the trajectory, (b) which is most actionable now, and (c) which best handles the silent-failure risk Sensemaking identified.
