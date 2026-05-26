# Exploration: A/B Test Task Pair Design for /explore vs /surfacing Comparison

## User Input

(Inputs as specified in `/explore` invocation; full user question + goal at `_branch.md` in this folder.)

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/_branch.md`

Plus additional instructions: POSSIBILITY-MODE DOMINANT with artifact-mode sub-probe; signal-first entry; 10 focal points F1-F10; read prior comparative-evaluation finding + both specs + MVL+/MVL2+ runners + selective end-goal docs.

---

## Territory Overview

**Mode:** possibility-mode DOMINANT (candidate test-task prompts must be generated) + artifact-mode SUB-PROBE (the two specs and the prior comparative-evaluation finding are concrete artifacts to mine for operational-difference signals).

**Entry point:** signal-first. The prior comparative-evaluation finding (`devdocs/inquiries/2026-05-22_09-02__.../finding.md`) is a strong load-bearing prior: it identifies 10 dimensions where the two specs diverge (8 favor surfacing, 2 favor /explore) at MEDIUM-HIGH confidence. Three CRITICAL-tier divergences (C1 disciplines-self-contained, C4 asymmetric-failure, C8 cross-session resume) are particularly likely to propagate through the MVL accumulation cascade.

**Resolution:** MEDIUM. Sufficient to commit task-nature axes + identify candidate-prompt territory. Specific prompt wording deferred to Innovation.

**Territory regions** (ten):

| Region | What it covers |
|---|---|
| R1 | Five operational-difference axes between /explore and /surfacing that test prompts can stress |
| R2 | Six candidate task-nature axes for the 5+5 split |
| R3 | Accumulation-cascade propagation paths (how upstream output shape constrains S→D→I→C → finding) |
| R4 | Fairness controls (what must be identical across forked sessions) |
| R5 | Discrimination-strength predictors by prompt-shape |
| R6 | Self-reference / domain-bias considerations (harness-internal vs external-domain tasks) |
| R7 | Practical constraints (context budget, territory size) |
| R8 | Quality criteria for comparing two findings |
| R9 | Anti-discrimination shapes (prompt patterns to avoid) |
| R10 | Candidate prompt-body territory (seed pool for Innovation) |

Surround layer: project end-goal docs + the two runner specs (MVL+/MVL2+ SKILL.md). Included in first scan via prior context.

---

## Inventory

### R1 — Operational-difference axes (D2 default minimum)

Five axes derived from the spec comparison. Each axis names: what /explore commits, what /surfacing commits, and what kind of task stresses the difference.

| Axis | /explore commits | /surfacing commits | Stress task signature |
|---|---|---|---|
| **A1 Granularity** | Region/signal narrative; per-item depth D2 default (functional one-line); ANNOTATION-LAYER relevance is optional + low-commitment | Per-item relevance tagging at 4 levels (core/sub/side/umbrella); MANDATORY per-item tag emission | Tasks with mixed-relevance items at all 4 levels; downstream consumers need per-item precision |
| **A2 Uncertainty handling** | Convergence-by-completeness; frontier-stability + jump-scan; implicit completeness-favoring | Asymmetric-failure principle EXPLICIT: lean toward inclusion under uncertainty; umbrella tag for low-confidence; INFORMATION-LOSS-IN-THE-DARK named as failure mode | Tasks with many low-confidence-rejection candidates; under-determined territory |
| **A3 Output structure** | Single content-bearing artifact (confidence-tagged map with D2-D4 inventory) | Dual: workspace (in-context with scope tags) + thin artifact (traversal trace + state summary; NO item content) | Tasks where downstream consumption pattern matters (workspace pressure vs cross-session re-read) |
| **A4 Boundary handling** | Implicit; boundary-discovery sub-phase fires only with explicit `boundary: unknown` flag; Silent-boundary-discovery is a failure mode | Boundary-discovery is an explicit conditional pre-phase using same primitive substrate as main operation | Tasks with implicit/fuzzy territory edges; tasks requiring boundary probing before scanning |
| **A5 Substrate** | Scan-signal-probe-resolution-frontier-confidence components | 8 load-bearing primitives (Attention-pointer, Working Memory, Salience, Intuition-similarity, Context-framing, Inhibition, Metacognition, Focus-deep) + 3 deliberately-absent (Simulation, Evaluation, Motivation) | Tasks where primitive-level operations matter; tasks requiring inhibition or focus-deep |

**Confidence:** CONFIRMED. Direct from prior finding + spec re-reads.

### R2 — Task-nature axis options

Six candidate axes for splitting the 5+5 deliverable. The user said "different in nature, not complexity" — we need an axis that produces difference-in-kind.

| Axis | Nature-A pole | Nature-B pole | Difference-in-kind? |
|---|---|---|---|
| **N1** | Artifact-bounded (concrete items in known files) | Possibility-mode (candidates must be generated) | STRONG — territory type fundamentally different |
| **N2** | Diagnostic (what's wrong with X?) | Design (what should X be?) | MEDIUM — purpose differs but mechanism similar |
| **N3** | Explicit-bounded territory | Implicit-territory (boundary-discovery activates) | STRONG — directly stresses A4 difference |
| **N4** | Per-item-discrete domain (each item separately identifiable) | Region-narrative domain (items are passages, regions, themes) | MEDIUM — overlaps with A1 axis |
| **N5** | Harness-internal (this project's own docs/code) | External-domain (general programming, science, etc.) | MEDIUM — risks self-reference confound on harness-internal; external-domain harder to evaluate |
| **N6** | Known-answer (right answer exists somewhere) | Open-ended-generative (no predetermined answer) | STRONG — outcome-determinacy fundamentally different |

**Confidence:** CONFIRMED. Three strong candidates (N1, N3, N6); three medium (N2, N4, N5).

**Initial preference signal:** N1 (artifact-bounded vs possibility-mode) is the cleanest because it directly maps to the two modes both specs support — running the same mode-pair in both variants makes the comparison apples-to-apples while stressing different mechanisms.

### R3 — Accumulation-cascade propagation

How upstream output shape constrains downstream disciplines and final finding.

| Cascade stage | Under /explore (region-narrative + content-bearing) | Under /surfacing (per-item-tags + thin artifact) | Where divergence amplifies |
|---|---|---|---|
| **Upstream → Sensemaking** | Region anchors at coarser grain; sensemaking re-discovers per-item structure | Per-item anchors readily available; sensemaking builds relational structure on top | Per-item question precision; ambiguity-collapse depth |
| **Sense → Decomposition** | Larger pieces with content-bearing region narratives; HCRs operate on regions | Smaller pieces with per-item-tag-grounded boundaries; HCRs operate on tag relations | Piece tractability + interface clarity |
| **Decompose → Innovation** | Fewer broader seeds (region-level) | More focused seeds (item-level tags as seed points) | Seed count + Property-(v) firing frequency |
| **Innovate → Critique** | Region-level dimensions; critique probes narrative claims | Item-level dimensions; critique probes per-item tags | Dimension granularity; per-item verifiability |
| **Critique → finding** | Narrative-style finding with embedded item references | Per-item-precision finding with explicit tag-driven verdicts | Finding shape: prose vs structured-table |

**Confidence:** SCANNED — operational hypothesis derived from spec analysis; not yet empirically validated. The A/B test itself is what validates these propagation claims.

### R4 — Fairness controls (what must be identical across forks)

**Must be identical:**

| Control | Why |
|---|---|
| Conversation context at fork point | Same files read, same memory loaded, same auto-memory state |
| Model + effort level | Different models or `/fast` toggle would confound |
| Project working directory state | Uncommitted changes might be read differently |
| Structural-check tool availability | Affects per-discipline gate behavior |
| Time-of-conversation pressure | Late-session degradation could hit one fork harder |
| File-read order at warm phase | LLMs are sensitive to ordering of context |

**Acknowledged asymmetries (unavoidable):**

| Asymmetry | Mitigation |
|---|---|
| Each variant loads its own upstream spec | The COMPARISON's whole point — keep this; don't mitigate |
| LLM stochasticity (sampling) | Optionally run each task TWICE per fork; report variance |
| Task-ORDER effect (Task 1 then Task 2) | Order is IDENTICAL across forks → acceptable; or run reverse-order as a sanity check |

**Confidence:** CONFIRMED for inputs; SCANNED for stochasticity mitigation (operational choice).

### R5 — Discrimination-strength predictors

Per-prompt-shape likelihood of producing DIVERGENT findings between the two variants.

| Prompt shape | Discrimination strength | Why |
|---|---|---|
| Per-item-discrete + mixed-relevance (items at all 4 levels) | HIGH | Surfacing's 4-tag vocabulary fully exercised; /explore's narrative coarser |
| Asymmetric-failure-prone (many uncertain candidates) | HIGH | Surfacing's umbrella-tag-on-uncertainty fires; /explore's convergence may exclude |
| Boundary-implicit (territory edges unclear) | HIGH | Surfacing's Boundary-discovery sub-phase activates; /explore's may silently mis-scope |
| Cross-document accumulation needed | MEDIUM-HIGH | Both surface items; differs in artifact structure for cascading |
| Pure narrative ("explain X") | LOW | Both produce similar prose |
| Trivial enumeration (single-file `ls`) | LOW | Both produce identical lists |
| Single-domain bounded + few items | LOW | Both handle adequately; differences don't propagate |

**Confidence:** SCANNED — hypothesis-based; the A/B test validates these.

### R6 — Self-reference / domain-bias considerations

Both /explore and /surfacing are themselves harness disciplines. Tasks on harness-internal content carry a confound: surfacing was DESIGNED with the harness's own end-goal docs in mind, so it might artificially advantage on harness-internal tasks.

| Domain type | Confound risk | Practical evaluability |
|---|---|---|
| Harness-internal (cognitive_harness/, docs/) | MEDIUM-HIGH (surfacing optimized for this domain) | HIGH (user can evaluate findings against known content) |
| Harness-adjacent (general AI-tooling, cognitive-systems literature) | LOW | MEDIUM |
| External-unrelated (generic programming, science, biz) | NONE | LOW (user may lack domain knowledge to evaluate) |

**Trade-off:** harness-internal tasks are most evaluable but most confounded; external tasks are cleanest but hardest to judge. **Middle-ground:** harness-ADJACENT tasks (cognitive-science / AI-tooling concepts not specific to this harness) OR bounded harness-internal SUB-territories where both specs would be exercised symmetrically.

**Confidence:** CONFIRMED. Confound is real; mitigation via domain mix.

### R7 — Practical constraints

| Constraint | Budget |
|---|---|
| Context budget per fork (Opus 4.7 1M) | ~1M tokens |
| Per-task /MVL+ run | ~250-450k tokens (5 disciplines + CONCLUDE; each loads spec + reads inputs) |
| Two tasks per fork | ~500-900k tokens — fits with some headroom |
| Warming protocol | ~80-120k tokens (key docs + both specs) |
| Files designated by prompt | Should be ≤ 5-7 documents to upstream-read |

**Confidence:** CONFIRMED. Budget calculated from prior MVL+ runs this session.

### R8 — Quality criteria for finding comparison

When the user compares the two findings, the discrimination signal can be evaluated on:

| Criterion | What it measures |
|---|---|
| **Per-item precision** | Did the finding correctly identify what mattered + tag accurately? |
| **Coverage of obvious items** | Did the finding catch the items any reasonable observer would name? |
| **Coverage of non-obvious items** | Did the finding catch items that require careful surfacing? |
| **Robustness against missing items** | Would the finding's overall verdict survive if 1-2 items were missed? |
| **Trade-off depth** | Did the finding name the trade-offs honestly + at appropriate weight? |
| **Actionability** | Can the user act on the finding immediately? |
| **Per-item-precision-of-trade-off** | If a trade-off is named, is it pinned to specific items, or is it floating narrative? |

**Confidence:** CONFIRMED. Criteria match the prior comparative-evaluation finding's own quality vocabulary.

### R9 — Anti-discrimination shapes (TO AVOID)

| Shape | Why it doesn't discriminate |
|---|---|
| Trivial single-file enumeration | Both produce same list |
| Pure-narrative open question | Both produce similar prose; upstream output shape doesn't constrain downstream |
| Tasks too small (< 5 items) | Disciplines don't get fully exercised |
| Tasks too vague | Both fall back to similar narrative |
| Single-item-focused tasks | Per-item-tag vs region-narrative differences don't surface |
| Tasks where the answer is in one passage | Surfacing's traversal vs /explore's scan converge on same answer |

**Confidence:** CONFIRMED via inversion of R5.

### R10 — Candidate prompt-body seed territory

Initial candidate pool for Innovation to prune. Each tagged with which axis stresses (A1-A5) + which discrimination strength.

**Group A candidates (artifact-bounded, harness-internal):**

| # | Candidate | Stresses | Discrim |
|---|---|---|---|
| GA-1 | Map cross-discipline coupling points across all `cognitive_harness/<discipline>/references/<spec>.md` files | A1, A3, A4 | HIGH |
| GA-2 | Identify all failure modes across discipline specs + find structural patterns | A1, A2 | HIGH |
| GA-3 | Find every place asymmetric-failure principle is referenced/applied across harness | A2, A4 | MEDIUM-HIGH |
| GA-4 | Enumerate load-bearing primitives mentioned across `docs/` that should appear in typed-primitive set | A1, A2 | MEDIUM-HIGH |
| GA-5 | Locate every cross-spec reference to design history (the disciplines-self-contained violation pattern) | A1, A4 | MEDIUM |
| GA-6 | Map every step-refinement marker `(default; refinement-trigger = ...)` across discipline specs | A1, A2 | MEDIUM |

**Group B candidates (possibility-mode, generative — harness-internal or adjacent):**

| # | Candidate | Stresses | Discrim |
|---|---|---|---|
| GB-1 | Enumerate candidate cognitive disciplines this harness might add to cover "anticipation" | A1, A2, A5 | HIGH |
| GB-2 | Generate every plausible failure mode specific to multi-head cognitive loops not yet in any discipline catalog | A1, A2 | HIGH |
| GB-3 | Generate every candidate component a "merger" discipline would need to combine multi-head outputs | A1, A2, A5 | HIGH |
| GB-4 | Enumerate observable indicators of consciousness-gradient progress per `docs/desc.md` the harness should surface | A2, A4 | MEDIUM-HIGH |
| GB-5 | Generate every plausible anti-pattern for MVL+/MVL2+ misuse | A1, A2 | MEDIUM-HIGH |
| GB-6 | Enumerate cognitive primitives candidate for inclusion in a typed-primitive set beyond the 11 in `docs/thinking_space_dynamics.md` | A2, A4, A5 | MEDIUM |

**Diagnostic candidates** (for N2 axis if Sensemaking commits there):

| # | Candidate | Stresses | Discrim |
|---|---|---|---|
| DX-1 | Identify regression-symptom risk areas in current discipline corpus | A1, A2 | MEDIUM-HIGH |
| DX-2 | Diagnose which discipline-spec sections are at highest mutual-coupling risk | A1, A4 | MEDIUM |

**Control / anti-discrimination candidates** (negative control if user wants one):

| # | Candidate | Why it's a control |
|---|---|---|
| CTRL-1 | "Explain what /MVL+ does in one paragraph" | Pure narrative; expected SAME finding under both variants |
| CTRL-2 | "List the file names in `cognitive_harness/` top level" | Trivial enumeration; expected IDENTICAL finding |

**Confidence:** SCANNED for whole pool; INFERRED for discrimination strengths (validated by Critique).

---

## Signal Log

| # | Signal | Type | Status | Reasoning |
|---|---|---|---|---|
| S1 | Prior comparative-evaluation finding provides 10-dimension difference map | Density | PROBED | Strong load-bearing prior; used to seed R1 + R3 |
| S2 | Per-item-discrete vs region-narrative is the load-bearing axis between specs | Tension | PROBED | Drives most candidate discrimination predictions |
| S3 | Asymmetric-failure operationalized in surfacing but not in /explore | Novelty | PROBED | Drives uncertain-territory prompt shapes |
| S4 | Workspace + thin artifact creates downstream consumption-pattern difference | Tension | PROBED | Cross-session vs in-session matters for some prompts |
| S5 | Boundary-discovery sub-phase explicit in surfacing | Novelty | PROBED | Drives implicit-territory prompt shape |
| S6 | Self-reference confound on harness-content tasks | Tension | PROBED | Mitigation via domain mix |
| S7 | Negative-control / anti-discrimination tasks could validate the methodology | Absence | PROBED (jump-scan) | Added as CTRL candidates |
| S8 | Task-order effect within a fork | Absence | PROBED (jump-scan) | Order identical across forks → acceptable |
| S9 | Stochasticity mitigation: run each task multiple times | Density | DEFERRED to Sensemaking | Operational choice |
| S10 | Exact prompt wording | Density | DEFERRED to Innovation | Belongs to that phase |
| S11 | Which pair within 5+5 produces sharpest discrimination | Density | DEFERRED to Critique | Verdict-stage adjudication |
| S12 | Warming protocol detail (specific file list) | Density | DEFERRED to finding | Operationally needed but mechanical |

---

## Confidence Map

| Region | Confidence | Reasoning |
|---|---|---|
| R1 (axes) | CONFIRMED | Direct evidence from specs + prior finding |
| R2 (nature axes) | CONFIRMED | Six candidates surfaced; initial preference signal for N1 |
| R3 (cascade) | SCANNED | Operational hypothesis; not empirically validated yet |
| R4 (fairness) | CONFIRMED for inputs; SCANNED for stochasticity policy |
| R5 (discrimination) | SCANNED | Hypothesis-based predictions |
| R6 (self-reference) | CONFIRMED | Confound real; mitigation via domain mix |
| R7 (practical) | CONFIRMED | Context budget known from prior runs this session |
| R8 (quality criteria) | CONFIRMED | Match prior comparative-evaluation vocabulary |
| R9 (anti-shapes) | CONFIRMED | Inversion of R5 |
| R10 (candidates) | SCANNED — 6 GA + 6 GB + 2 DX + 2 CTRL surfaced | Specific prompts deferred to Innovation |

**Confirmed-absent regions:**

| Region | Why confirmed-absent |
|---|---|
| External-unrelated-domain candidates | Practical evaluability too low; user couldn't judge findings |
| Single-prompt "comparison task" (one prompt covering both natures) | Defeats 5+5 split criterion |
| Tasks requiring more than 1M context | Practical constraint (R7) excludes |
| Tasks requiring writing actual code | /MVL+ runs cognitive loop; code-writing isn't loop output shape |

---

## Frontier State

**STABLE.** Three convergence criteria met:

1. **Frontier stability:** new scans (jump-scans on anti-task design + task-order effects) returned no new major regions; only refinements within existing R4/R9.
2. **Declining discovery rate:** third-cycle probing yielded refinements (specific candidates within R10) not new region discovery.
3. **Bounded gaps:** remaining unknowns (exact prompt wording, exact warming-file list, exact pair selection) are interpolable from neighboring regions and explicitly deferred to downstream disciplines.

**Jump-scan performed:** YES — two directions probed:
- Anti-task design (negative-control prompts) → CTRL-1 + CTRL-2 surfaced; added to R10.
- Task-order effects within a fork → confirmed order-identical-across-forks acceptable; no new region.

---

## Gaps and Recommendations

### Frontier questions for Sensemaking

**FQ1** — Which task-nature axis (N1, N3, N6 as strong candidates) best satisfies "different in nature, not complexity" for THIS comparison? Commit one as primary.

**FQ2** — Should the 5+5 deliverable include a CTRL pair (negative control) or stay at 5+5? Trade-off: 5+5+CTRL strengthens methodology but adds runs.

**FQ3** — Which 6 of the 14 candidate prompts (R10) should advance to Innovation for refinement? Apply discrimination-strength + practicality filters.

**FQ4** — What's the discrimination criterion the user will apply when comparing the two findings? Commit explicit rubric.

**FQ5** — Stochasticity policy: one run per fork-per-task (efficient) or two runs (variance-aware)? Trade-off: context budget vs noise.

**FQ6** — Warming protocol file list: which docs MUST be read in parent session before fork to ensure both variants start identical?

**FQ7** — Domain mix: how harness-internal vs harness-adjacent should the chosen prompts be? Self-reference-confound is real but evaluability of external-domain is low.

**FQ8** — Anti-pattern double-check: do the candidates avoid the failure modes in R9?

### Open Questions (handed off downstream)

- **Empirical discrimination strength** — only hypothesis-based for now. The A/B test itself is what validates R5 predictions.
- **Cross-cascade fidelity** — does upstream output shape actually propagate as predicted in R3, or do downstream disciplines normalize away the difference? Open until A/B run produces data.

### Recommendations

- **Sensemaking:** commit ONE task-nature axis as primary; commit discrimination criterion; commit fairness protocol details.
- **Decomposition:** partition the 10-prompt deliverable into per-axis-side pieces + warming-protocol piece + discrimination-criterion piece.
- **Innovation:** generate the 10 specific prompt bodies + a CTRL pair if Sensemaking selects it; prune R10 candidate pool.
- **Critique:** probe each prompt for actual discrimination strength + practicality + fairness; verify anti-pattern avoidance; verdict pair-selection guidance.

---

## Telemetry

| Metric | Value |
|---|---|
| Mode | possibility (R2-R10) + artifact sub-probe (R1) |
| Entry point | signal-first |
| Cycles run | 2 (initial scan + jump-scan) |
| Candidates generated | 14 (6 GA + 6 GB + 2 DX) + 2 CTRL |
| Signals detected | 12 |
| Signals probed | 8 |
| Signals deferred | 4 (S9-S12 — operational/dependent on downstream) |
| Resolution progression | medium throughout; sufficient for next-discipline consumption |
| Frontier state | stable |
| Discovery rate | declining (3rd-cycle probing produced refinements only) |
| Convergence criteria | frontier stability ✓; declining rate ✓; bounded gaps ✓ |
| Jump-scan performed | YES (anti-task; task-order) |
| Failure modes checked | all 10 (none observed) |

**Failure modes (all checked, none observed):**
- Premature depth — full breadth scan via 10 focal points before any deep probe
- Surface-only scanning — probed 8 of 12 signals; only deferred-by-design 4
- False confidence — jump-scan performed; surprises checked (none altered model)
- Premature termination — all 3 convergence criteria checked
- Re-exploration — frontier tracking; no region scanned twice
- Completeness bias in possibility mode — both obvious candidates (harness-internal artifact tasks) and creative candidates (anti-pattern enumeration) included; non-creative obvious candidates explicitly preferenced in R5
- Open→closed drift — labeling held at functional-one-line; no interpretive role-assignment
- Silent boundary-discovery — territory was pre-specified in _branch.md; no sub-phase firing
- Negative-space silent drop — confirmed-absent regions explicitly listed
- Inadequate per-item content depth — D2 default met throughout

---

## Self-Assessment Verdict

**PROCEED to Sensemaking.**

The territory has been mapped to medium resolution. The structural decisions — which task-nature axis to commit, which candidates to advance, discrimination criterion, fairness protocol — are well-framed as frontier questions for Sensemaking. The candidate pool (R10) is sufficient for Innovation to prune toward 5+5. No convergence-criteria gaps; jump-scan revealed no model-altering surprises.
