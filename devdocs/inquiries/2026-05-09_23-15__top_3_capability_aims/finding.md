---
status: active
---
# Finding: Top-3 Capability Aims (10x Multipliers)

## Question

From `_branch.md`:

> What top 3 capabilities, if added to the homegrown thinking-engine project at `/Users/ns/Desktop/projects/native/`, would produce a 10x effectiveness multiplier — and what's the honest ranking based on the project's existing roadmap (per `enes/desc.md`), the explicitly-deferred items in `enes/loop_desing_ideas/meta_loop.md` and the discipline taxonomy's rejected list, and the dominant WON'T-MATTER risk surfaced in the just-completed substantiveness assessment?

The user's actual conversational phrasing (Source Input):

> *"what are top 3 capability we should aim for? what top 3 things would be if our thinking engine has them our capabilities would 10 fold ?"*

**Context for a reader new to this project.** This finding lives inside the homegrown thinking-engine project at `/Users/ns/Desktop/projects/native/`, which defines a five-discipline cognitive loop called MVL+ (Exploration → Sensemaking → Decomposition → Innovation → Critique). The project's stated end-goal (per `enes/desc.md`) is autonomous cognitive consciousness via Baldwin cycles — research-frontier territory the project itself acknowledges as a long-shot bet. The just-completed substantiveness assessment (`devdocs/inquiries/2026-05-09_20-30__project_substantiveness_assessment/finding.md`) established that the project produces structured artifacts useful for human readers but its marginal capability vs alternatives (CoT, Self-Refine, agent frameworks, o1-style test-time compute) is **UNKNOWN** — that's the dominant near-term risk and the load-bearing decision-relevant uncertainty.

**Goal of this finding.** Per `_branch.md`, the user should be able to read this and decide which 1-3 capabilities to prioritize for the next significant build effort.

---

## Finding Summary

- **The user's "10x" is hyperbolic shorthand. Most software/methodology multipliers are 1.5-3x; true 10x is rare and conditional.** The honest answer translates "10x" to specific multiplier axes (credibility, parallelism, compounding) and labels each pick by the axis it serves.

- **Top 3 capabilities, each on a different multiplier axis, ranked by impact-per-effort and phase-fit at current build state:**
  - **#1 — Empirical benchmarking infrastructure** (CREDIBILITY axis; indirect 10x via positioning category change). Resolves the WON'T-MATTER risk. Currently MISSING from the roadmap. ~2-3 weeks to ship a small benchmark.
  - **#2 — Sequential meta-loop v1 → multi-head meta-loop** (PARALLELISM axis; literal 10x by construction at N=10 heads, conditional on shipping merging logic). Project's stated end-goal direction (per `enes/loop_desing_ideas/meta_loop.md` and the auto-memory `project_end_goal_loop_architecture`). ON the roadmap as deferred. ~3-4 weeks for the v1 sequential runner; multi-month for multi-head with merging.
  - **#3 — Persistent cross-inquiry memory + retrieval** (COMPOUNDING axis; **2-3x at current corpus scale, ~5x at 100+ inquiries — NOT literal 10x**). Currently MISSING from the roadmap (`improvement_observations.md` is the precursor). ~1 week to ship. Compounding cumulative learning across inquiries.

- **Long-term aim — separate from top-3 actionable:**
  - **Closing the Baldwin cycle** (`/intuit` Phases B → C → D + Retrospective RC + N≥30 calibration data per discipline). This is the project's signature self-improvement engine per `enes/desc.md` and is more important LONG-TERM than any of the three actionable picks above. It does not appear in the top-3 because it has multi-year cost and depends on `/intuit` Phase A maturing first (which is the project's currently-named immediate-next-step). Position it as the natural follow-on to /intuit Phase A, not as a parallel near-term-build candidate.

- **Situational / orthogonal — considered and deprioritized:**
  - **Tool use** (web browsing, code execution, file handling). Would expand the universe of tasks MVL+ can attempt (e.g., GAIA-style benchmarks) but does not 10x the existing structured-reasoning capability. Revisit if MVL+ ships and the next constraint becomes task universe rather than reasoning quality.

- **Recommended sequence — Default scenario S4 (hybrid):** ship **R10 (benchmarking)** and **R12 (persistent memory)** in parallel over the first ~2-3 weeks. R12 (~1 week) is small enough to not contend with R10 (~2-3 weeks). Once R10's benchmark signal is in, decide whether to commit to **R3+R4 (sequential→multi-head meta-loop)** as the architectural lever or pivot based on what the benchmark showed. R12's compounding dividends start as soon as the corpus retrieval ships.

- **Solo-developer cost reality.** Acknowledging that this is a single-developer project: the full top-3 is roughly 6-8 weeks of concentrated work, or 3-6 months at part-time pace. The hybrid sequence (S4) reduces context-switching by parallelizing the two cheap picks (R10 + R12) and deferring the larger architectural commitment (R3+R4) until evidence is in.

- **Concrete failure-case acknowledged.** If R10's benchmark shows MVL+ is **marginal** vs alternatives (delta < 5 percentage points on GPQA-Diamond paired with Self-Refine), three honest pivots are open: (1) sharpen MVL+ where it does differentiate (per-question category-breakdown analysis); (2) simplify by adopting one of the simpler structured-reasoning approaches as the working pipeline and refocusing the project's distinctive contribution to the meta-architecture (discipline taxonomy, Step Refinement primitive, persistent memory) which is independent of pipeline shape; (3) accept "marginal but works" as baseline and commit to R3+R4 multi-head as the architectural multiplier.

- **Self-reference disclosure.** This evaluation runs inside MVL+ (the project's own loop runner). I tried to mitigate by: (a) ranking 2 of 3 picks (R10, R12) as MISSING from the existing roadmap to counter roadmap-favoritism; (b) testing R10's #1 ranking against the outside-expert standard ("any methodology project lacking empirical comparison has a credibility gap that an expert would name first") and finding it survives independent of recency; (c) honestly labeling R12 as 2-3x not literal 10x; (d) acknowledging concrete failure-case scenarios. The residual self-reference (the framework I'm using IS the project's framework) cannot be eliminated; an outside expert review — particularly someone who has built or shipped LLM agent frameworks at scale — would be a useful complement.

---

## Finding

### Why this question matters now

The user's recent inquiry chain has been deepening project work (auditing disciplines, evaluating breakthroughs, mapping architecture, assessing project substantiveness). The substantiveness assessment surfaced that the project's marginal capability vs alternatives is unknown and that this WON'T-MATTER question is the load-bearing uncertainty. The natural follow-up: given limited bandwidth, what 1-3 capabilities should the next significant build effort target?

The "10x" framing in the user's question is hyperbolic shorthand for "what would make a categorical difference?" — not a strict claim that each pick must literally multiply output by 10. The honest verdict translates this to specific multiplier axes per recommendation.

### What "10x" actually means here

Five distinct multiplier axes:

1. **Output-volume 10x** — more inquiries per unit time. Best served by parallelism (multi-head meta-loop) and by reducing redundant work (memory + retrieval).
2. **Output-quality 10x** — better answers per inquiry. Compounds from cross-inquiry priors; from self-improvement; from evidence-driven calibration.
3. **Capability-class 10x** — new task categories possible. Tool use is in this category; structured reasoning alone can't do real-world agent tasks.
4. **Credibility 10x** — external validation. Without empirical comparison vs alternatives, capability claims are speculative; with it, the project has empirical grounding. This is a positioning category change, not a numeric output multiplier.
5. **Autonomy-progression 10x** — rate of climbing the project's autonomy ladder per `enes/desc.md`. Best served by closing the Baldwin cycle (system observing its own behavior, proposing spec changes, evaluating, encoding).

The recommendations below pick a different axis per slot, not because three picks of the same shape would be redundant, but because the three axes together address a wider risk surface than any single axis.

### Why R10 (empirical benchmarking) is #1 — credibility axis

The just-completed substantiveness assessment named WON'T-MATTER (marginal contribution vs alternatives) as the dominant near-term risk. The project has shipped a working structured-reasoning pipeline; what it lacks is empirical comparison to existing alternatives (CoT, Self-Refine, ToT, Reflexion, Constitutional AI, agent frameworks, and the broader test-time compute scaling trend exemplified by o1-style reasoning models).

Without benchmarks, every capability claim about MVL+ is a claim, not knowledge. With benchmarks, the project's positioning shifts from "we hope this is good" to "we have evidence this is good (or that it isn't, in which case we know what to fix)." That's a category change — indirect 10x via credibility rather than numeric output multiplication.

The recurrence of this recommendation from the prior inquiry chain is worth examining honestly: is the AI evaluating this question salient because of recency rather than merit? The defense is that an outside expert with no project context would also rank empirical comparison #1 for any methodology project lacking it. "What's your benchmark?" is a standard first question for any reasoning-method paper; the recurrence reflects the gap being real, not artifactual recency.

**Concrete first-build (Q1.1-A, refined):** GPQA-Diamond first 50 questions on Claude Sonnet 4.5 (whichever substrate MVL+ runs on). Use published direct-prompting and CoT scores from the model card; run Self-Refine locally on the 50 questions; run MVL+ on the same 50 questions; per-question logging in JSONL. Cost estimate **revised to 2-3 weeks (not 1 week)** because building a from-scratch eval harness with multi-condition setup + per-question logging + paired statistical analysis is more like 2-3 weeks for someone unfamiliar with eval infrastructure than 1.

**Statistical-power note:** N=50 paired questions catches BIG deltas (~10-15 percentage points) at reasonable power. If MVL+ is marginally better (3-5pp delta), N=50 isn't enough — you'd need to expand to ~150-200 paired questions to detect it confidently. The small benchmark answers "is there ANY signal?"; expansion is needed to characterize precisely. Plan accordingly.

### Why R3+R4 (sequential→multi-head meta-loop) is #2 — parallelism axis

Per `enes/loop_desing_ideas/meta_loop.md` and the project's stated end-goal trajectory (auto-memory `project_end_goal_loop_architecture`), the project's north-star is multi-head meta-loop with merging — many MVL+ heads exploring different sub-questions in parallel, with cross-head comparison and merging logic. This is the only candidate where "10x" is mathematically definitional: at N=10 parallel heads, capacity is literally 10x by construction. The 10x is conditional on shipping the merging logic and the meaningful-traversal substrate (per `enes/what_is_meaningful_traversal.md`), but the multiplier shape is real and not hyperbolic.

The current state: meta-loop is named in spec but has no implementation; multi-head is explicitly deferred until sequential meta-loop completes 3 useful chains. The buildable next-step is **R4 — sequential meta-loop v1**, per `meta_loop.md` §6 ("First Buildable Form"). R3 (multi-head with merging) follows once R4 has produced useful traversal evidence.

**Concrete first-build (Q1.2-A, refined):** sequential meta-loop runner that takes a seed → maintains `_meta_state.md` → runs /MVL+ as probe → runs /navigation on the probe's finding → human selects next direction from navigation map → runs /MVL+ probe 2 → updates _meta_state.md → continues until human-call to stop. State representation, navigation handoff, and human-select mechanism need explicit specification. Cost: ~3-4 weeks for v1 (acknowledging from-scratch implementation reality).

**Sharpened v1 value-proposition:** the sequential meta-loop v1 is **NOT immediately a 10x productivity gain** vs the user's current manual chaining of inquiries. Its value is **evidence-collection**: it captures which navigation types the user picks, what outcomes follow, and how meta-state evolves across probes. This evidence is the prerequisite for (a) the automated selector (deferred per `meta_loop.md`'s DEFERRED list), (b) multi-head meta-loop (R3, deferred behind v1), and (c) calibration data for the meta-loop's "meaningful traversal" substrate. The 10x is downstream; v1 ships the foundation.

### Why R12 (persistent memory) is #3 — compounding axis (NOT literal 10x)

The project's corpus is growing (~30 inquiries currently, with the recent inquiry chain accelerating accumulation). Each inquiry references prior findings, but cross-inquiry retrieval is currently human-driven — the user reads through prior findings manually when starting a new inquiry. The `improvement_observations.md` file is a precursor but doesn't address per-inquiry context recall.

Persistent cross-inquiry memory + retrieval would automate this: at the start of a new inquiry, the system retrieves the top-K most semantically-similar prior inquiries and surfaces them as context. This compounds — as the corpus grows from 30 to 100+ inquiries, the retrieval value grows superlinearly, because more relevant prior context is available per new question.

**Honest 10x labeling:** at current corpus scale (~30 inquiries), this is realistically **2-3x** in effective work (less re-deriving things already worked out; better priors). At 100+ corpus scale, it could reach 5x. **It is NOT literal 10x.** Including it in a "top-3 that 10x" list requires honest labeling — and that honesty matters more than aspirational hype. R12 earns its slot because (a) low cost-per-impact (~1 week to ship), (b) compounds with corpus growth (the project is at the inflection scale where this starts mattering), (c) enables R5 (the deferred REFLECT discipline) as natural follow-on.

**Concrete first-build (Q1.3-A):** sqlite-vec as the vector DB (lightweight; no server; markdown-friendly). text-embedding-3-small or voyage-3-lite as the embedding model. Index each `finding.md` chunked by section (Question, Finding Summary, Finding, Reasoning) plus the `_branch.md` Question section. At new-inquiry time: embed the question, retrieve top-5 most-similar prior inquiries via semantic similarity, surface as a "Related prior inquiries" section in `_branch.md`. Cost: ~1 week dev + ~$5-20 in embedding costs for the existing corpus.

### Why R1+R2 (Baldwin cycle closing) is the long-term aim, not in the top-3

The project's signature self-improvement engine is the Baldwin cycle: the Predictive RC (`/intuit`) producing predictions at T0 + Retrospective RC tracking outcomes at T2+ + the delta calibrating prediction-side accuracy + spec-level evolution from accumulated calibration data. This is the project's most ambitious claim and the one that distinguishes it most from typical agent frameworks. It is **more important long-term than any of the three top-3 picks above.**

It is not in the top-3 because:

- It has **multi-year cost.** `/intuit` is at Phase A admission audit; Phases B → C → D need to mature before the prediction side is fully operational. Retrospective RC is undeveloped. N≥30 calibration data per discipline is required for Baldwin seed-generation to activate (per `desc.md`).
- It **depends on `/intuit` Phase A** maturing first. Phase A is the project's currently-named immediate next-step per `desc.md` — that's the right next investment, not Phase B/C/D.
- Recommending it as top-3 next-build would conflate "long-term aim" with "actionable now," which obscures the cost reality.

**Position it explicitly:** R1+R2 is the long-term destination; the top-3 picks are the path. R10 (benchmarking) tells us whether the path is going somewhere useful. R3+R4 (multi-head) is the architectural lever the path leads to. R12 (memory) is the cumulative-learning compounding that makes longer paths productive.

### Why R11 (tool use) is situational, not in the top-3

Tool use (web browsing, code execution, file system, API calls) is what most LLM agent frameworks have by default. Adding it to MVL+ would let the project tackle GAIA-style benchmarks and real-world agent tasks. It is not in the top-3 because:

- It is a **categorical capability addition** (new task classes possible), not 10x of existing structured-reasoning capability. Different question.
- It would dilute MVL+'s identity as a structured-reasoning pipeline. The project's distinctness is in deliberation depth, not in agent execution.
- If the goal is competing with agent frameworks on agent benchmarks, tool use is essential. If the goal is sharpening structured-reasoning, it's situational.

Revisit if MVL+ ships and the next constraint becomes task universe rather than reasoning quality.

### The recommended sequence — Hybrid scenario (Q2-S4)

Three named scenarios were considered: all-parallel (S1; unrealistic for a solo developer), R10-first-only-sequence (S2; defers R12's cheap compounding by 2-3 weeks for no risk gain), and **hybrid R10+R12-parallel-then-R3+R4 (S4)**.

The hybrid is the recommendation because:

- R10 (~2-3 weeks) and R12 (~1 week) are independent and fit in parallel; R12 finishes early and starts compounding while R10 is still being set up.
- The bigger architectural commitment (R3+R4) is correctly deferred until R10's benchmark result is in. If MVL+ shows material gain over alternatives, R3+R4 is justified. If marginal, the user has data-driven choice between three pivots (sharpen / simplify / architectural-multiplier-bet).
- Solo-developer bandwidth is respected: 2-3 weeks of focused parallel work, then a decision point.

**Total cost realism:** 6-8 weeks of concentrated work for the full top-3, or 3-6 months at part-time pace. The user should plan accordingly.

### What happens if the benchmark shows MVL+ is marginal

Three honest pivots if R10's benchmark shows MVL+'s delta over Self-Refine (or similar) is small (<5 percentage points on GPQA-Diamond paired):

1. **Sharpen where MVL+ does differentiate.** Per-question category-breakdown analysis from the benchmark data should reveal whether MVL+ wins on specific question types (multi-step reasoning, abstract pattern induction) and loses on others. Refocus MVL+'s development on those specific cases; document the where-it-helps-most pattern.

2. **Simplify by adopting an existing approach.** Use Self-Refine (or whichever simpler approach is empirically equivalent) as the working pipeline; refocus the project's distinctive contribution to the **meta-architecture** that's independent of pipeline shape — the discipline taxonomy, the Step Refinement primitive, the inquiry-folder-as-structure pattern, the persistent memory, the eventual meta-loop. These are real distinctive contributions even if MVL+'s structured-reasoning is empirically similar to alternatives.

3. **Accept "marginal but works" as baseline; bet on R3+R4 architectural multiplier.** Multi-head parallelism is a 10x by construction at N=10 heads regardless of pipeline-shape elaboration. If MVL+ is marginally-better-than-baseline, multi-head MVL+ is still 10x marginal-better-than-baseline at 10 heads — and the project's distinctive value is the meta-loop architecture, not pipeline-shape elaboration.

All three are honest; none of them is "give up." The benchmark resolves which path is right.

### Self-reference disclosure

This evaluation runs inside MVL+ (the project's own loop runner). The vocabulary used (multiplier axes, multi-axis labeling, scenario S1-S4, etc.) is the project's framework. I tried to mitigate the self-reference risk by:

- Ranking **2 of 3 picks (R10, R12) as MISSING from the project's existing roadmap** to counter roadmap-favoritism. The third (R3+R4) is on-roadmap because it's a true-10x by parallelism construction; not picking it would be roadmap-skepticism rather than honest assessment.
- Testing R10's #1 ranking against the **outside-expert standard** (any methodology project without empirical comparison has a credibility gap an expert would name first); the recurrence holds independent of recency.
- **Honestly labeling R12** as compounding 2-3x→5x, NOT literal 10x. Including it in a "top-3 that 10x" list with that honest label rather than papering over.
- Acknowledging **concrete failure-cases** (what happens if benchmark shows marginal); not pretending the path is risk-free.
- **Promoting R1+R2** from "excluded items" (where it would have been buried) to "long-term aim" (where it's visible alongside the actionable top-3). The project's signature deserves this visibility even when it's not next-buildable.

The residual self-reference cannot be eliminated. The framework I'm using to evaluate the project IS the project's framework. An outside expert review — particularly someone who has built or shipped LLM agent frameworks at scale — would catch things I cannot.

Specific places I'm uncertain:

1. The cost estimates for R10 (2-3 weeks) and R4 (3-4 weeks) are calibrated for from-scratch eval harness / runner work; experienced builders could ship faster. Solo-dev part-time pace could ship slower.
2. The "2-3x→5x" labeling for R12 is a compounding-effect estimate based on corpus-scale intuition. Empirical retrieval studies in similar contexts vary; the actual multiplier could be smaller or larger.
3. The S4 hybrid recommendation assumes parallelism is feasible without context-switching cost; if the user finds parallelism cognitively expensive, S2 (sequential R10-first) is a defensible alternative.

---

## Next Actions

### MUST

(None mandatory — this is a prioritization recommendation; the user picks among the actionable options.)

### COULD

- **What:** Ship R10 SMALL benchmark (Q1.1-A refined) — 50-question GPQA-Diamond subset on the model substrate the user runs MVL+ on; published baselines for direct + CoT; local Self-Refine run; MVL+ run; per-question JSONL logging; paired statistical analysis.
  - **Who:** The user, with a focused 2-3 week sprint.
  - **Gate:** Time-bound — the next significant build sprint.
  - **Why:** Resolves the WON'T-MATTER load-bearing uncertainty. Either result is decision-relevant.

- **What:** Ship R12 persistent memory + retrieval (Q1.3-A) — sqlite-vec + text-embedding-3-small + section-chunked indexing of findings + retrieval at new-inquiry start.
  - **Who:** The user, in parallel with R10 (~1 week).
  - **Gate:** Same sprint as R10.
  - **Why:** Compounding cumulative learning; corpus is at the inflection scale where this starts mattering. Cheap; enables R5 (REFLECT) as natural follow-on.

- **What:** After R10's signal is in, decide whether to commit to R4 sequential meta-loop v1 (Q1.2-A) — runner that maintains `_meta_state.md` + chains MVL+ probes + integrates /navigation + supports human-select-next.
  - **Who:** The user.
  - **Gate:** Conditional on R10's benchmark result. If MVL+ shows material gain → ship R4 (~3-4 weeks). If marginal → choose among the three pivots in Concrete failure-case section.
  - **Why:** Project's stated end-goal direction; R3 (multi-head; literal 10x by construction) requires R4 first.

### DEFERRED

- **What:** Multi-head meta-loop with merging logic (R3).
  - **Gate:** Per `meta_loop.md`'s existing deferral — sequential meta-loop (R4) completes 3 useful chains with explicit stop/continue rationale.
  - **Why (if revived):** Literal 10x by parallelism construction; project's stated end-goal architecture.

- **What:** Close the Baldwin cycle — `/intuit` Phases B/C/D + Retrospective RC + N≥30 calibration data + spec-level self-modification (R1+R2; the long-term aim).
  - **Gate:** Time-bound on multi-year project trajectory; conditional on `/intuit` Phase A maturing first; N≥30 calibration data accumulating per discipline (per `desc.md`'s seed-generation gate).
  - **Why (if revived):** The project's signature self-improvement engine. Most-important-long-term direction.

- **What:** Tool use / agent scaffolding (R11) — web browsing, code execution, file handling, API calls.
  - **Gate:** Observable trigger — if MVL+ ships and the next constraint becomes task universe rather than reasoning quality.
  - **Why (if revived):** Categorical capability addition; would expand task universe (GAIA-style benchmarks; real-world agent tasks).

- **What:** REFLECT discipline (R5) — cross-inquiry synthesis discipline that uses R12's retrieved context to produce structural lessons across inquiries.
  - **Gate:** Conditional on R12 shipping and the corpus reaching ~50+ inquiries.
  - **Why (if revived):** Builds on R12's retrieval; produces synthesis quality that compounds with corpus growth.

---

## Reasoning

### What was killed and why

- **R11 (tool use) at top-3:** killed because it's a categorical capability addition, not 10x of existing structured-reasoning. Different question. Seed: revisit if/when task universe becomes the constraint.

- **Q2-S1 (all-parallel scenario):** killed for solo-developer realism — running R10 + R12 + R4 fully in parallel exceeds plausible solo bandwidth. Seed: appropriate for full-time focus only.

- **Q1.1-INV (don't benchmark):** killed because the WON'T-MATTER risk is real and unresolved. Seed: trust-the-family-of-effects argument is suggestive but not validating; only direct comparison resolves the uncertainty.

- **Q3-INV (don't surface excluded items):** killed because transparency about R1+R2 and R11 prevents future framing-collapse recurrence. The user benefits from seeing what was considered and why deprioritized.

- **Q4-INV (no artifact):** killed because finding.md is the navigable index per CONCLUDE protocol; the recommendation file IS the audit trail.

### What was sharpened during critique

The 7 refinements that survived critique:

1. **R1+R2 promoted from "excluded" to "long-term aim" category.** The project's signature deserves its own visibility, not bundling with situational items.
2. **Q1.1 SMALL benchmark cost revised from 1 week to 2-3 weeks.** From-scratch eval harness reality.
3. **Statistical-power note added for SMALL benchmark.** N=50 catches BIG deltas only; ~200 paired needed for smaller deltas.
4. **Q1.2 sequential meta-loop v1 value-prop sharpened.** Evidence-collection prerequisite for R3 and the automated selector; NOT immediate productivity 10x.
5. **Q2 default promoted from S2 (R10-first-only) to S4 (R10+R12 parallel).** R12 is small enough to not contend; defers no risk.
6. **Solo-developer cost reality acknowledged.** ~3-6 months part-time for full top-3.
7. **Concrete failure-case scenario added to Open Questions.** Three honest pivots if benchmark shows marginal.

### Contradictions reconciled

- **"R10 is recurring from prior inquiry"** vs **"R10 is the load-bearing capability."** Resolved by outside-expert standard test — any methodology project without empirical comparison has a credibility gap an expert would name first; the recurrence reflects merit, not bias.

- **"R12 doesn't 10x"** vs **"R12 is in the top-3."** Resolved by honest labeling — R12 explicitly tagged as 2-3x→5x compounding, NOT literal 10x. The user's "10x" is hyperbolic shorthand; the verdict translates honestly.

- **"R1+R2 is the project's signature"** vs **"R1+R2 isn't actionable now."** Resolved by separating "long-term aim" category from "actionable top-3." Both true; both visible.

---

## Open Questions

### Monitoring

- **What does R10's benchmark show?** Specifically: MVL+ on GPQA-Diamond N=50 paired with Self-Refine. Categorical breakdown: where does MVL+ help? Where doesn't it? This is the load-bearing observable.

- **At what corpus scale does R12's retrieval value start showing?** Currently ~30 inquiries; the verdict claims R12 starts mattering at this scale but the actual signal could emerge earlier or later.

### Blocked

- **Should R3+R4 ship after R10?** Cannot be decided until R10's benchmark result is in. The conditional logic is named in the Concrete failure-case section.

- **When does Baldwin cycle closing become feasible?** Cannot be answered until /intuit Phase A matures + Phase B/C/D progress + N≥30 calibration data accumulates. Multi-year timeline.

### Research Frontiers

- **The relationship between marginal-pipeline-improvement and architectural-multiplier-leverage.** If MVL+'s pipeline-shape contribution is marginal (5%) but multi-head parallelism is 10x by construction, the project's distinctive value lives in the meta-architecture, not the pipeline. This reframing isn't currently in the project's spec. If R10 shows marginal, this becomes a load-bearing reframing.

- **Per-question category-breakdown as the actually-interesting result.** Most reasoning-method papers report aggregates. Per-question breakdown often reveals the real story (where method X helps, where it doesn't). The benchmark should preserve this granularity.

### Refinement Triggers

- **The verdict's "R10 #1" recommendation** re-opens if a recent comparison paper on a current model with the same benchmark surfaces (`Self-Refine on Claude Sonnet 4.5 on GPQA` — currently believed not to exist publicly).

- **The 10x labeling for R12** re-opens if corpus-scale retrieval studies in adjacent contexts produce data that revises the 2-3x→5x estimate.

- **The S4 hybrid default** re-opens if the user finds parallelism cognitively expensive — S2 sequential R10-first is the alternative.

- **The phase-tag** (verdict calibrated for current project phase) re-opens after R10 ships and resolves the WON'T-MATTER question, OR after sequential meta-loop ships, OR after /intuit Phase A matures.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
what are top 3 capability we should aim for? what top 3 things would be if our thinking engine has them our capabilities would 10 fold ?
```

</details>
