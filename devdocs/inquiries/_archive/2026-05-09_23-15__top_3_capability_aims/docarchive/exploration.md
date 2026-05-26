# Exploration: Top-3 Capability Aims (10x Multipliers)

## Mode + Entry Point

- **Mode:** Possibility (capability candidates conceptual) + Artifact (project's roadmap, deferred items, prior findings concrete).
- **Entry:** Signal-first. Question is focused; produce candidate enumeration with per-axis evaluation, identify what's roadmap-vs-missing, surface honest "10x" plausibility.

---

## Territory Overview

Three regions:

1. **Capabilities already on the roadmap** — explicitly named and deferred per `enes/desc.md`, `enes/loop_desing_ideas/meta_loop.md`, the discipline-taxonomy rejected list, etc.
2. **Capabilities the roadmap acknowledges as future-work but hasn't fully named.**
3. **Capabilities MISSING from the roadmap entirely** (gaps not acknowledged).

Plus an "What does 10x mean" axis that sensemaking will need to collapse.

---

## Region 1 — Already on the Roadmap

Per `enes/desc.md`, `meta_loop.md`, and the prior inquiry chain:

### R1 — `/intuit` Phases B / C / D (Predictive RC build-out)

- **What:** the Predictive RC (real-time hunch capability) progressing from Phase A (admission audit + Phase A spec) through Phase B (per-primitive corpus building) → Phase C (calibration/integration) → Phase D (full operational).
- **Roadmap status:** Phase A is the immediate next buildable step; B/C/D explicitly deferred.
- **Leverage mechanism:** completes the Baldwin cycle's prediction-side (per `desc.md`: "Without the Predictive RC, nothing predicts at T0; without the Retrospective RC, nothing calibrates over time. Together they form the closed loop that IS the Baldwin cycle.")
- **10x plausibility:** HIGH **conditional** — if it works as spec'd, this enables real-time self-improvement signal. The conditionality is real; the calibration depends on N≥30 per-discipline evidence.
- **Cost:** LARGE (multi-phase build).

### R2 — Retrospective RC + Baldwin cycle CLOSING

- **What:** the empirical-outcome-tracking layer. After predictions are made by Predictive RC, the Retrospective RC tracks what actually happened downstream and calibrates predictions against outcomes. This is what closes the Baldwin cycle so the system can self-improve at the spec level.
- **Roadmap status:** the third quality-awareness layer per `desc.md`; less developed than the other two.
- **Leverage mechanism:** the Baldwin cycle is the self-improvement engine. Without Retrospective RC, prediction-side signal isn't grounded against truth → no calibration → no improvement.
- **10x plausibility:** HIGH **paired with R1** — they're a unit. Either alone is incomplete.
- **Cost:** LARGE (requires telemetry infrastructure + outcome tracking + calibration tooling).

### R3 — Multi-head meta-loop

- **What:** parallel MVL+ runs ("heads") working different sub-questions simultaneously; with **merging logic** to combine outputs across heads. Per `meta_loop.md` and the auto-memory `project_end_goal_loop_architecture`.
- **Roadmap status:** explicitly DEFERRED until "sequential meta-loop completes 3 useful chains with explicit stop/continue rationale."
- **Leverage mechanism:** literal parallelism. Multi-head architecture is the project's stated end-goal direction; once it ships, capacity per unit time multiplies by N (heads).
- **10x plausibility:** HIGH on parallelism if N=10 heads run; MEDIUM-HIGH on quality (cross-head comparison can catch errors single-head misses); requires merging/comparison logic that's deferred.
- **Cost:** LARGE (runner overhaul; meta-state expansion; merging logic; meaningful-traversal substrate per `enes/what_is_meaningful_traversal.md`).

### R4 — Sequential meta-loop v1

- **What:** the meta-loop's first buildable form (per `meta_loop.md` §6): seed → meta-state → MVL+ → Navigation → human-select-next → MVL+ → ... linear sequence with cross-MVL+ memory.
- **Roadmap status:** named as "First Buildable Form" but not yet implemented.
- **Leverage mechanism:** PREREQUISITE for multi-head (R3 blocked behind this). Also gives cross-inquiry continuity that's currently missing.
- **10x plausibility:** MEDIUM directly; HIGH as enabler (unlocks R3).
- **Cost:** MEDIUM (runner; meta-state design; navigation integration).

### R5 — Cross-inquiry learning / REFLECT discipline

- **What:** a discipline that synthesizes lessons across multiple completed inquiries. Per `loop_design_2.md`'s "Things `/MVL` doesn't currently do" + discipline-taxonomy rejected-list candidate "Structural refinement to R (reflect) based on invocation trace availability".
- **Roadmap status:** PRECURSOR exists (`devdocs/improvement_observations.md`); full discipline planned-but-not-built.
- **Leverage mechanism:** compounds learning. Currently each inquiry is mostly isolated; cross-inquiry insights only flow through human re-reading. A REFLECT discipline mechanizes this.
- **10x plausibility:** MEDIUM-HIGH — at corpus scale (~30 inquiries, growing), the value of automated synthesis grows superlinearly.
- **Cost:** MEDIUM (new discipline spec + retrieval infrastructure).

### R6 — Convergence telemetry across iterations

- **What:** measurement of whether successive iterations are improving (per `enes/what_is_meaningful_traversal.md`'s "anti-spinning" judgment).
- **Roadmap status:** named as future improvement; not built.
- **Leverage mechanism:** anti-spinning signal; termination criterion for meta-loop.
- **10x plausibility:** MEDIUM as enabler (multi-head needs this); LOW directly.
- **Cost:** SMALL-MEDIUM.

---

## Region 2 — Roadmap-Acknowledged Future-Work (Less Explicit)

### R7 — Modulator operationalization (Mood, Arousal)

- **What:** typed primitives for affective state per `desc.md`'s primitive set.
- **Roadmap status:** DEFERRED in primitive audit.
- **Leverage mechanism:** unblocks affect-shaped indicators (curiosity-under-boredom etc.).
- **10x plausibility:** LOW directly.

### R8 — Synthesis discipline (`/synthesize`)

- **What:** dedicated synthesis discipline that compresses inquiry corpus into project-deliverable artifacts. Per `loop_design_2.md`.
- **Roadmap status:** named gap; not built.
- **Leverage mechanism:** quality of finding.md; reusable across runners.
- **10x plausibility:** LOW-MEDIUM directly; MEDIUM if combined with R5.

### R9 — Wayfinding as separate discipline

- **What:** externalize iteration-narrowing logic into `/wayfinding`.
- **Roadmap status:** named gap.
- **Leverage mechanism:** auditability of steering decisions.
- **10x plausibility:** LOW directly.

---

## Region 3 — MISSING from the Roadmap (Gaps)

These are capabilities the project doesn't explicitly name. Self-reference countermeasure: the AI deep in project vocabulary will tend to favor R1-R9; surfacing R10+ is the corrective.

### R10 — Empirical benchmarking infrastructure

- **What:** mechanism to run MVL+ against a fixed task set (GPQA, BBH, MATH, GSM8K, etc.) with per-question logging, paired comparison vs baselines (CoT, Self-Refine), and result analysis. Surfaced as load-bearing in the just-completed substantiveness assessment.
- **Roadmap status:** **MISSING.** The project has structural_check.sh for output structure but no eval harness for capability comparison.
- **Leverage mechanism:** resolves the dominant WON'T-MATTER risk identified in the prior inquiry. Without empirical comparison, capability claims are speculative.
- **10x plausibility:** Indirect 10x via credibility/calibration. If benchmarks show MVL+ is materially better, it justifies all other investment. If they show marginal, it redirects effort.
- **Cost:** MEDIUM (eval harness + per-question logging + comparison tooling). Not LARGE.
- **Addresses WON'T-MATTER?** YES — directly.

### R11 — Tool use / external-action capability

- **What:** web browsing, code execution, file system manipulation, API calls — the tool-using capability that LLM agent frameworks (ReAct, AutoGen, etc.) ship by default.
- **Roadmap status:** **MISSING.** MVL+ currently runs inside Claude Code so has implicit file access via the Read/Write/Bash tools, but the tool use isn't part of the discipline specs themselves.
- **Leverage mechanism:** enables capability classes that pure structured-reasoning can't reach (real-world tasks, agent benchmarks like GAIA, code generation tasks). The project would move from "structured-reasoning system" to "structured agent."
- **10x plausibility:** HIGH on capability-class addition. Many LLM tasks require tools.
- **Cost:** MEDIUM (per-discipline tool spec + safety layer + integration).
- **Risk:** scope creep — the project's identity is structured reasoning, not tool use. Adding tools could dilute the focus.

### R12 — Persistent cross-inquiry memory + retrieval

- **What:** vector-search or structured memory over completed inquiries; automatic recall when starting a new inquiry on related topics. Compounds learning across the corpus.
- **Roadmap status:** **MISSING in this specific form.** Project has improvement_observations.md as a precursor but no automated retrieval. R5 (REFLECT discipline) is adjacent but different — REFLECT synthesizes lessons; memory+retrieval surfaces relevant prior findings to current inquiry.
- **Leverage mechanism:** compounds. As corpus grows, value of "find similar prior inquiries automatically" grows superlinearly. Currently the human is the retrieval mechanism.
- **10x plausibility:** MEDIUM-HIGH at current corpus size; HIGH at 100+ inquiry scale.
- **Cost:** SMALL-MEDIUM (vector DB or structured retrieval; embedding infrastructure).

### R13 — Output semantic verification

- **What:** automated checks of output correctness beyond structural format (e.g., do the cited file paths actually exist? do the claims match the cited evidence?). Currently human-driven.
- **Roadmap status:** **MISSING.** structural_check.sh exists; semantic_check.sh doesn't.
- **Leverage mechanism:** quality consistency; reduces the audit burden.
- **10x plausibility:** LOW-MEDIUM.

### R14 — Per-question evaluation infrastructure

- **What:** logging that captures per-question outputs across conditions; supports paired statistical analysis (per the recent benchmark conversation).
- **Roadmap status:** **MISSING.** Adjacent to R10.
- **Leverage mechanism:** statistical power for capability claims.
- **10x plausibility:** subset of R10.

### R15 — Domain transfer / generalization corpus

- **What:** deliberate expansion of the inquiry corpus into application domains (software engineering, scientific reasoning, business strategy) beyond the meta-design corpus that dominates currently.
- **Roadmap status:** **MISSING.** The "8/10 inquiries are meta-design" pattern is a known sample bias.
- **Leverage mechanism:** generalization evidence; addresses "does this work outside meta-design?" which the project can't currently answer.
- **10x plausibility:** MEDIUM — generalization to new domains often reveals capabilities (or limits).
- **Cost:** SMALL-MEDIUM (just deliberately use MVL+ on application questions; it costs run-time).

### R16 — Ensemble across model substrates

- **What:** route different disciplines to different model substrates (e.g., Claude for sensemaking, GPT-4o for innovation, o1 for math-heavy decomposition). Combine strengths.
- **Roadmap status:** **MISSING.**
- **Leverage mechanism:** model-strength specialization.
- **10x plausibility:** LOW-MEDIUM. Probably 1.2-1.5x in quality, not 10x.

### R17 — Test-time compute scaling integration

- **What:** wire MVL+ to use o1-style extended thinking for specific disciplines (especially decomposition + critique). MVL+ as a test-time compute budget allocator.
- **Roadmap status:** **MISSING.** Recent o1/Claude-extended-thinking results not yet integrated.
- **Leverage mechanism:** raw compute scaling has shown big capability gains; MVL+ could be the "structured way to spend compute."
- **10x plausibility:** MEDIUM.

---

## Per-Capability Ranking (Initial)

Tentative ranking by **leverage × plausibility × roadmap-fit**:

| Rank | Capability | Leverage | Plausibility | Roadmap | Cost | Addresses WON'T-MATTER? |
|---|---|---|---|---|---|---|
| **1** | **R10 — Empirical benchmarking infrastructure** | Indirect 10x via credibility; resolves dominant risk | HIGH | MISSING (but the user has been thinking about it) | MEDIUM | YES — directly |
| **2** | **R12 — Persistent cross-inquiry memory + retrieval** | Compounds across corpus growth | MEDIUM-HIGH at current scale; HIGH at 100+ inquiries | MISSING (improvement_observations is precursor) | SMALL-MEDIUM | NO directly; supports cumulative-learning |
| **3a (paired)** | **R1+R2 — /intuit Phase B + Retrospective RC + Baldwin cycle closing** | HIGH conditional on calibration data | HIGH if it works as spec'd | ON ROADMAP (deferred) | LARGE | NO directly; project's signature self-improvement engine |
| **3b (alternative)** | **R4 + R3 — Sequential meta-loop v1 → Multi-head meta-loop** | HIGH on parallelism; project's stated end-goal | HIGH on capacity multiplier | ON ROADMAP (deferred) | LARGE | NO directly; capacity-class addition |
| 4 | R5 — REFLECT discipline / cross-inquiry synthesis | Compounds | MEDIUM-HIGH | ON ROADMAP (planned not built) | MEDIUM | NO |
| 5 | R11 — Tool use / agent scaffolding | Capability-class addition | HIGH | MISSING | MEDIUM | partial (enables benchmarks like GAIA) |
| 6 | R15 — Domain transfer corpus | Generalization evidence | MEDIUM | MISSING | SMALL-MEDIUM | partial (addresses sample-bias) |
| 7-N | other R7-R17 | various smaller multipliers | varied | varied | varied | mostly NO |

Note: rank 3 has an A vs B choice that sensemaking should resolve — they're competing for the same slot (the "next big thing") and have different multiplier shapes (self-improvement vs parallelism).

---

## What "10x" Actually Means — for Sensemaking to Resolve

The user's "10x" is ambiguous. Five distinct multiplier axes:

1. **Output-volume 10x:** more inquiries per unit time. Best served by R3 (multi-head) + R12 (memory recall avoids redoing).
2. **Output-quality 10x:** better answers per inquiry. Best served by R1+R2 (Baldwin self-improvement) + R10 (calibration); incremental from R5 (cross-inquiry synthesis).
3. **Capability-class 10x:** new categories of tasks the system can do. Best served by R11 (tool use); somewhat R17 (test-time compute integration).
4. **Credibility 10x:** external validation. Best served by R10 (empirical benchmarks). If the project can't credibly compare to alternatives, all other multipliers are unverifiable.
5. **Autonomy-progression 10x:** rate of climbing the autonomy ladder. Best served by R1+R2 (Baldwin cycle closing); requires R10 to not be self-deceiving.

Different users/scenarios weight these differently. The verdict needs to clarify which axis the recommendation prioritizes — or rank-on-multi-axis explicitly.

---

## Honest "10x" Plausibility Check

Software/methodology projects rarely deliver true 10x; typical multipliers are 1.5-3x. Be honest about this.

True 10x candidates here:
- **R3 (multi-head):** literally N-x parallelism by construction. If N=10 heads, true 10x. **Genuinely 10x by definition.**
- **R10 (benchmarking):** indirect 10x via credibility — if benchmarks show material gain, the project's positioning shifts from "we hope this is good" to "we have evidence this is good." That's a category change, not a numeric multiplier. **Indirectly 10x.**
- **R1+R2 (Baldwin cycle closing):** if it works, the system improves over time autonomously. Compounded across many cycles, could exceed 10x. Conditional on it working as spec'd. **Conditional 10x.**

Unlikely-true-10x candidates:
- R12 (memory): probably 2-3x at current scale; 5x at corpus 100+; not 10x today.
- R11 (tool use): adds capability classes (categorical, not 10x in existing classes).
- R5 (REFLECT): probably 1.5-2x in synthesis quality.
- R7-R9, R13-R17: smaller multipliers.

---

## Signal Log

| Signal | Detection | Result |
|---|---|---|
| Project's roadmap is explicit and detailed | Per `desc.md` Open Questions, multiple deferred items named with revival triggers | Clear roadmap exists |
| WON'T-MATTER risk dominates near-term | Per just-completed substantiveness assessment | Calibration/benchmark capability is highest-leverage near-term move |
| Multi-head is project's stated end-goal | Per memory + meta_loop.md + desc.md | R3 is roadmap-aligned long-term north star |
| Self-reference risk: AI tends to validate roadmap items | Active concern | Counter: surfaced R10-R17 (missing-from-roadmap items) explicitly |
| 10x in software is rare | External grounding | True 10x candidates: R3, conditional-R1+R2, indirect-R10. Others are smaller multipliers. |
| Project has spec rigor but no empirical validation | Per substantiveness assessment | R10 is the load-bearing missing capability |

---

## Confidence Map

| Region | Confidence |
|---|---|
| R1-R6 already-on-roadmap items | CONFIRMED — direct citations from desc.md / meta_loop.md / loop_design_*.md |
| R10 missing-but-needed (benchmarking) | CONFIRMED — established in prior substantiveness assessment as load-bearing |
| R11-R17 gaps | SCANNED — surfaced as adjacent-field-norms the project hasn't adopted |
| 10x-multiplier plausibility ranking | INFERRED — based on first-principles + adjacent-field experience |
| Which capability is "best" | DEFERRED to Sensemaking |

---

## Frontier State

**Stable.** Capability candidates enumerated across 3 regions (roadmap / acknowledged-future / missing). Per-axis evaluation done. "10x" multiplier-axis ambiguity flagged for Sensemaking. Roadmap-vs-missing distinction explicit.

### Jump scan

Scanned: "What capability did I miss that an outside expert would name first?"

Possible misses:
- **A real-time collaborative UI** (vs Claude Code's text-only). UI is usually a force multiplier in design tools. But: the project's identity is "state lives in files;" UI is orthogonal.
- **Speed/cost optimization** (smaller/cheaper models for cheap disciplines). Real but probably 2x at most.
- **Open-sourcing for community contribution** — could 10x development velocity but is a strategic/business move, not a capability per se.
- **Direct integration with reasoning models (o1/o3)** that are themselves doing structured reasoning. R17 covers this partially.

These are noted but don't displace R10/R12/R3/R1+R2 from top ranking.

---

## Gaps and Recommendations

### Bounded gaps

- "10x" definitional ambiguity (5 multiplier axes). Sensemaking to resolve.
- Rank 3a (R1+R2) vs Rank 3b (R3+R4) is a fork — they compete for the same priority slot but have different multiplier shapes.
- R10's (benchmarking) cost and scope estimate is approximate; could be smaller (focused benchmark on 100 questions) or larger (full benchmark suite).

### Recommendations for Sensemaking

1. Collapse the "10x" definitional ambiguity — which multiplier axis is the user prioritizing? (Output volume / output quality / capability class / credibility / autonomy progression.)
2. Resolve rank 3a vs 3b — Baldwin self-improvement vs multi-head parallelism. They're compatible long-term but compete for next-significant-build-effort.
3. Address self-reference: the candidate ranking favors roadmap items (R1+R2, R3+R4) plus the missing-but-load-bearing R10. Verify that R10 (missing from roadmap) really is best-leveraged near-term, not just easy to recommend because it's the prior inquiry's recurring theme.
4. Honest "10x" framing: most candidates are 1.5-3x; R3 is true-10x by parallelism construction; R10 is indirect-10x via credibility; R1+R2 is conditional-10x. Don't pretend everything is 10x.

---

## Frontier-Stability Convergence Check

- **Frontier stability:** YES — 17 candidates enumerated; jump scan produced minor refinements not displacements.
- **Declining discovery rate:** YES.
- **Bounded gaps:** YES.

**Convergence: ACHIEVED.** Hand off to Sensemaking.
