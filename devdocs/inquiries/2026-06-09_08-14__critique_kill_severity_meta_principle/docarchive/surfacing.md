# Surfacing — critique_kill_severity_meta_principle

## User Input

```text
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-09_08-14__critique_kill_severity_meta_principle/_branch.md

The question is a MEANING-LAYER inquiry asking: WHAT structural property distinguishes a kill-worthy issue from a minor one in /td-critique, expressible task-agnostically. The Surfacing phase needs to draw items from the territory that bear on (a) the existing spec's definition of KILL as a verdict, (b) what makes one dimension's failure outweigh another's, (c) "stakes" / "burden-of-proof" / "critical-weight" as the recognized levers, (d) the contrast between #2 Rubber-Stamping (under-killing) and #3 Nitpicking (over-killing), (e) the constructive-output requirement attached to KILL, (f) cross-discipline analogs, (g) external canonical concepts (criticality, blast-radius, stake-asymmetry).
```

## Mode and entry point

- **Mode:** primarily artifact (concrete spec files exist) with side-relevant possibility mode (canonical external concepts as candidate items).
- **Entry point:** signal-first (purpose is given in `_branch.md`).
- **Territory specification:** explicit-bounded (paths enumerated in the input).
- **Boundary-discovery sub-phase:** SKIPPED (territory was pre-given).

---

## Traversal Trace

### Region 1: `td-critique.md` — Core spec being analyzed

| # | Item identifier | Relevance | Confidence | Step note |
|---|---|---|---|---|
| 1 | Line 9 — *"Critique is not nitpicking — it's the contraction force that turns divergent thinking into convergent results."* | **CORE** | HIGH | The opening already frames critique as the contraction force, positioning nitpicking as the structurally-opposite anti-pattern. Severity-calibration IS the substance of this contraction. |
| 2 | Line 22 — *"Nitpicking finds surface flaws without assessing whether they matter; critique evaluates across weighted dimensions with severity awareness"* | **CORE** | HIGH | Direct statement that **severity awareness** distinguishes critique from nitpicking. The word "matter" is the load-bearing meaning-anchor: the meta-principle should make precise what it MEANS for an issue to matter. |
| 3 | Lines 73-90 — Evaluation Dimensions table (Correctness / Coherence / Feasibility / Completeness / Robustness / Elegance) + "Dimensions are weighted" + "weights come from the problem context" | **CORE** | HIGH | The 6 default dimensions. The "weighted" qualifier is where severity-calibration enters per-task; the question is whether there's a META-principle ABOVE the weighting. |
| 4 | Lines 110-122 — Prosecution + Defense + Collision adversarial structure | **CORE** | HIGH | The adversarial structure is the mechanism through which severity is surfaced. KILL emerges from "prosecution destroys defense"; severity is judged at the COLLISION POINT. |
| 5 | Lines 124-128 — **Burden of proof** shifts based on stakes: Low stakes → innocent until proven guilty (let it through); High stakes → guilty until proven innocent (block it) | **CORE** | HIGH | THE EXISTING CALIBRATION LEVER. This is the spec's current articulation of severity-calibration. It is binary (low/high) and stakes-based — a single axis. The question is whether stakes IS the meta-principle or whether stakes is itself decomposable. |
| 6 | Line 128 — "The adversarial structure prevents two of critique's worst failure modes: rubber-stamping (prosecution too weak — everything passes) and nitpicking (defense absent — everything fails on minor issues)." | **CORE** | HIGH | The structural framing of #2 and #3 as TWO POLES of the same axis. Implicitly defines severity as "what survives BOTH strong-prosecution AND strong-defense." This is the strongest existing meta-formulation. |
| 7 | Lines 130-138 — Verdicts table: SURVIVE (Viable region — passes critical dimensions) / REFINE (Boundary region — strong core, specific weaknesses) / KILL (Dead region — fails on critical dimensions, defense cannot overcome prosecution) | **CORE** | HIGH | The KILL definition contains TWO conditions: (1) fails on **critical dimensions**, (2) defense cannot overcome prosecution. The word "critical" is doing severity-work — what makes a dimension critical? Critical-weight is itself task-dependent per the problem context. |
| 8 | Line 138 — KILL output: *"The specific dimension that killed it + a seed extracted from the failure"* | **CORE** | HIGH | KILL requires a CONSTRUCTIVE OUTPUT (seed). This frames KILL as "this is fatal AND the failure is fertile." If you can't extract a seed, the dimension that "killed" the candidate may not have been the right axis. The constructive-output requirement is a hidden severity-filter. |
| 9 | Lines 140-142 — Refinement note: *"Every KILL and REFINE verdict must include constructive output. A KILL must extract a seed... Critique that only says 'this is bad' without saying 'here's what would make it better' is incomplete."* | **CORE** | HIGH | Reinforces (8). Strongly implies: if the issue can be fixed within the candidate's frame → REFINE; if it can only be addressed by starting from a new frame → KILL. The STRUCTURAL DISTINCTION between REFINE and KILL is whether the failure is fixable-within-frame or only fixable-by-frame-replacement. |
| 10 | Lines 219-227 — Multi-axis prosecution depth check refinement note (3 axes: user-perspective objection / specific failure-case scenario / specification-gap probe) | **CORE** | HIGH | The spec ALREADY recognizes severity is multi-axis. The 3 axes are PROSECUTION-DEPTH axes, not severity axes per se, but they reveal that the spec treats "depth of issue" as multi-dimensional. Suggests severity may also be multi-axis (not just stakes-weighted). |
| 11 | Lines 282-308 — Coverage Strategy: Per-candidate (Minimum: critical-weight dimensions; Full: all dimensions); Per-solution-space coverage; "Stop evaluating a candidate when prosecution finds a fatal dimension failure" | **CORE** | HIGH | "Fatal dimension failure" — the word "fatal" is a severity descriptor. The spec uses fatal/critical/non-critical without defining them structurally. The Coverage Strategy assumes severity is recognizable but doesn't articulate WHAT makes a failure fatal. |
| 12 | Lines 324-330 — Failure Mode #2 Rubber-Stamping: "Prosecution is too weak. Everything passes... Quality check: is the prosecution argument something that would make the candidate's strongest advocate pause?" | **CORE** | HIGH | Operational definition of under-killing: prosecution couldn't move the strongest advocate. This is a USEFUL existing meta-criterion. Severity is measured against the resilience of the strongest defense. |
| 13 | Lines 332-338 — Failure Mode #3 Nitpicking: "Every candidate gets killed on minor issues. Defense is absent or too weak... A candidate should only be KILLed if prosecution wins on a *critical-weight* dimension, not just any dimension." | **CORE** | HIGH | Operational definition of over-killing: prosecution wins, but on a non-critical-weight dimension. The italicized "critical-weight" is the prevention. But what determines critical-weight in a task-agnostic way? Currently: weights come from problem context (per #3). The meta-principle would need to explain what makes a weight critical in structural (not context-specific) terms. |
| 14 | Line 22 (parallel) — Critique is NOT validation: *"validation confirms something works; critique determines whether something is the *right* thing, not just a *working* thing"* | **CORE** | MEDIUM | Severity in critique is about "right vs working" not "working vs broken." A minor flaw in a "working but not right" candidate may be kill-worthy; a working candidate with surface issues isn't. The distinction shifts severity from defect-presence to fitness-for-purpose. |
| 15 | Line 27 — Critique is NOT pessimism: *"critique includes defense, not just prosecution — it finds what's strong, not only what's weak"* | **SUB** | HIGH | Reinforces the prosecution+defense balance. Severity is symmetrically constructed; weak defenses count as much as strong prosecutions. |
| 16 | §4 #1 Wrong Dimensions (lines 316-322) — preventive question: "If a candidate passed all these dimensions perfectly, would it actually solve the problem?" | **SUB** | HIGH | The meta-question for dimension-fit IS a severity-calibration check at meta-level. If passing the dimensions doesn't = solving the problem, the dimensions are mis-calibrated for severity. |
| 17 | §4 #4 Dimension Blindness (lines 340-346) | **SUB** | MEDIUM | A failure-mode about MISSING axes; tangentially related (severity-calibration matters less if the relevant axis isn't even in the dimension space). |
| 18 | §4 #8 Axis Absence at the Failure's Actual Plane (lines 372-386) (just-added) | **SUB** | MEDIUM | New entry; related to dimension-construction stage, upstream of severity-calibration. |
| 19 | Line 9 (whole opening): "Critique is not gut-feel judgment... evaluation as a practiced methodology based on dimension construction, landscape mapping, adversarial collision, and coverage-aware convergence detection" | **SUB** | HIGH | The aspiration is to convert gut-feel severity-judgment into a practiced methodology. Currently the methodology covers dimension construction (Phase 0), landscape mapping (Phase 1), adversarial collision (Phase 2), and convergence (Phase 4) — but severity-calibration is HANDLED IMPLICITLY through weights + burden-of-proof, not explicitly as a sub-phase. |

### Region 2: `top_7_common_critique_failures.md` — Empirical corpus evidence

| # | Item identifier | Relevance | Confidence | Step note |
|---|---|---|---|---|
| 20 | §6 Pattern-Persistence ("Recurring-Pattern Persistence Within Same Inquiry") | **CORE** | HIGH | Empirical example of UNDER-killing: blindspots that fire repeatedly within an inquiry without being killed, because the pattern's truth-value form was tested but the structural form re-fires elsewhere. The meta-principle should distinguish "fixed-once-mentioned" (REFINE) from "structurally recurring" (KILL). |
| 21 | §4 External-Grounding Absence ("None tested against the real ... artifact... 8 Innovation mechanisms + 13 Critique dimensions converged... confidently-wrong-structural-convergence-when-no-empirical-test") | **CORE** | HIGH | Empirical example: convergence of many mechanisms = false confidence when grounded only internally. Severity-calibration without external anchor produces high-confidence wrong KILLs and high-confidence wrong SURVIVEs. External grounding is a severity-anchor. |
| 22 | §3 Label-Tested, Substance-Untested | **CORE** | HIGH | Empirical example: surface tests pass, substance fails. The CONVERSE of nitpicking: surface labels treated as load-bearing → critique passes on surface but fails on substance. Suggests severity has a LABEL-vs-SUBSTANCE axis. Surface defects are NEVER kill-worthy unless they signal substance failure; substance defects are ALWAYS kill-worthy regardless of surface presentation. |
| 23 | §5 Scope/Layer Mismatch in Defensive Mitigation | **CORE** | HIGH | A defense's scope must match the threat's scope. Implies: an issue's "severity" depends not on its existence but on whether DEFENSE can reach it at the same scope. A defect with a same-scope defense available is non-fatal (REFINE); a defect with no same-scope defense is fatal (KILL). |
| 24 | Tally table + "vs. current spec" column showing 5 NEW failure modes the existing spec misses | **CORE** | MEDIUM | Meta-observation: the existing failure-mode list (#1-#8) under-articulates dimensions of failure that empirically matter. Severity-calibration may be similarly under-articulated. |
| 25 | Cross-failure interactions §: "the seven failures may cluster into ~3 deeper meta-failures: Meta-A Frame-bounded blindness / Meta-B Surface-over-substance / Meta-C No-anchor-outside-the-frame" | **CORE** | HIGH | Meta-clustering hypothesis. **Meta-B (Surface-over-substance)** is most directly relevant — it names the meta-pattern where severity is mis-calibrated because the test fires at the wrong level of representation. |
| 26 | §1 Inherited-Frame Preservation | **SUB** | MEDIUM | Tangential — about frame-inheritance, not severity-calibration directly. But: inherited frames can carry inherited severity-calibrations, which then mis-fire on new candidates. |
| 27 | Recommendation §5 — "Roll out adversarially... Check whether the augmented critique finds NEW issues that the original passed — or whether it surfaces too many false positives (nitpicking risk)" | **CORE** | HIGH | Explicit empirical articulation of the nitpicking-creep risk this inquiry exists to address. Counts as data — over-killing IS a recognized empirical risk when expanding critique's dimension set. |
| 28 | Recommendation §6 — "Decide the budget split between adding new dimensions (raising the dimension-count from current ~12 to ~18-20) vs. restructuring existing dimensions to cover the new axes via their existing wording. Adding dimensions has a cognitive cost; restructuring is cheaper but risks under-coverage" | **SUB** | MEDIUM | The trade-off between coverage and cognitive cost is adjacent to severity-calibration: more dimensions = more potential nitpicking vectors; fewer dimensions = more potential rubber-stamping vectors. |

### Region 3: `td-critique/SKILL.md` — Skill description

| # | Item identifier | Relevance | Confidence | Step note |
|---|---|---|---|---|
| 29 | Line 3 — *"...producing verdicts (SURVIVE / REFINE / KILL) with constructive output"* | **CORE** | HIGH | SKILL.md confirms 3 verdict types with constructive-output requirement. Lighter restatement of the spec; consistent with what td-critique.md commits. |

### Region 4: `cognitive_harness/innovate/references/innovate.md` — Sister discipline (verdict-shape analog)

| # | Item identifier | Relevance | Confidence | Step note |
|---|---|---|---|---|
| 30 | Phase 3 Test — 5-test cycle (Novelty / Scrutiny Survival / Fertility / Actionability / Mechanism Independence) | **SUB** | HIGH | Innovate's TEST GATE is binary per test. A candidate either passes or doesn't. No SEVERITY axis within tests — survival is all-or-nothing per test. Contrast with critique's positional verdicts. |
| 31 | Output disposition categories (lines 572-579): ACTIONABLE / DEFERRED with revival trigger / RESEARCH FRONTIER / RE-TEST TRIGGER | **CORE** | HIGH | INNOVATE HAS 4 DISPOSITION CATEGORIES for survivors. This is RICHER than critique's 3 verdicts. The DEFERRED category captures "passed but with thin evidence" — i.e., "survives but with calibrated confidence." Critique has no analog for "SURVIVE with thin confidence" — currently caveats are noted at SURVIVE but there's no structural lever for low-confidence-SURVIVE. **Meta-principle candidate: severity is partly a CONFIDENCE-WEIGHTED axis, not just a fatality axis.** |
| 32 | Phase 3 Test refinement note on Mechanism Independence — "Shared-input detection... mark spurious-from-shared-input convergence as needing additional adversarial testing" | **SUB** | MEDIUM | Spurious convergence is a confidence-degrader. Innovate explicitly handles "convergence that looks robust but isn't." Severity-calibration in critique could benefit from analogous confidence-degrading checks. |
| 33 | Inherited Frame Audit Override Path (lines 473-498) — "compliance criterion" with structural + contextual reasoning required, "rhetorically-rich-but-shallow-content overrides" recognized as defects | **SUB** | HIGH | Innovate articulates STRUCTURAL CRITERIA for when to override an audit-firing. By analogy, critique could articulate structural criteria for when an issue is kill-worthy (specific structural property + contextual grounding), preventing rhetorically-rich-but-shallow KILL verdicts. |
| 34 | Inversion depth-check refinement (lines 157-163) — "Keep inverting until you reach a statement about the SYSTEM, not about a COMPONENT" | **SIDE** | MEDIUM | Component-level vs system-level distinction. Could analogize to: component-level defect = REFINE; system-level defect = KILL. Suggests a depth-axis to severity. |

### Region 5: `cognitive_harness/sense-making/references/sensemaking.md` — Sister discipline (verdict-shape analog)

| # | Item identifier | Relevance | Confidence | Step note |
|---|---|---|---|---|
| 35 | Sensemaking's ambiguity collapse mechanism (committed-resolution per ambiguity); per CLAUDE-context: sensemaking renders SV1→SV6 with ambiguity collapse decisions at each version | **SUB** | LOW | NOT FULLY READ in this surfacing pass — flagged as frontier. Hypothesis: sensemaking's "collapse" is a different verdict-shape (commitment to one resolution); doesn't have SURVIVE/REFINE/KILL but has IMPLICIT severity in how much evidence each collapse rests on. Sensemaking's anchor-confidence (HIGH/MEDIUM/LOW) is an analog of severity-confidence. |

### Region 6: `cognitive_harness/surfacing/references/surfacing.md` — Sister discipline (verdict-shape analog)

| # | Item identifier | Relevance | Confidence | Step note |
|---|---|---|---|---|
| 36 | Four relevance levels: CORE / SUB / SIDE / UMBRELLA | **SUB** | HIGH | A 4-tier verdict-shape. Asymmetric-failure principle: lean toward INCLUSION under uncertainty (the same way critique's burden-of-proof says low-stakes = let-it-through). **Surfacing's relevance levels are an explicit MULTI-TIER severity-analog** — neither binary nor positional. Critique's SURVIVE/REFINE/KILL is positional; surfacing's CORE/SUB/SIDE is also positional but tiered along ONE axis (relevance to purpose). |
| 37 | Asymmetric-failure principle (§4.4 of surfacing): "Missing a relevant item is structurally worse than surfacing an irrelevant item" + lean-toward-INCLUSION default | **CORE** | HIGH | DIRECT META-PRINCIPLE for an analogous calibration. By analogy: in critique, **is killing a viable candidate structurally worse than letting an unviable one through, or vice versa?** This is the meta-question that drives severity-calibration. The asymmetry shifts with STAKES (the existing burden-of-proof lever): low-stakes → false-negative is worse (let it through), high-stakes → false-positive is worse (block it). Severity-calibration is the per-task adjudication of which asymmetry direction holds. |

### Region 7: `devdocs/100_critique_correction_chain_analysis.md` — Empirical corpus (skimmed)

| # | Item identifier | Relevance | Confidence | Step note |
|---|---|---|---|---|
| 38 | Corpus signal: ~48% of last 100 inquiries are correction chains; many corrections target prior critique's mis-calibration | **SUB** | MEDIUM | The corpus IS evidence of severity-mis-calibration at scale. Frequent corrections suggest critique pass-rate is too lenient on substance (under-killing) AND occasionally too harsh on surface (over-killing — though less frequent in the corrected-chain data). Not fully re-read in this pass — frontier flag. |

### Region 8: External canonical concepts (possibility-mode, side-relevant)

| # | Item identifier | Relevance | Confidence | Step note |
|---|---|---|---|---|
| 39 | Safety engineering — Risk = Severity × Likelihood (criticality matrices, e.g., SIL Safety Integrity Levels in IEC 61508); reversibility-of-harm is a key axis | **SIDE** | MEDIUM | Provides a canonical structural decomposition: severity is one axis, likelihood is another, and both combine into a "criticality" tier. Suggests critique's severity-calibration may already conflate two axes: **(a) HOW BAD the failure is if it occurs (severity proper)** and **(b) HOW LIKELY the failure is to actually occur given the candidate's context (likelihood)**. Currently the spec's "critical-weight" mixes both. |
| 40 | Software engineering — "blast radius" (number of consumers / systems affected by a change) + "reversibility" (can the change be undone cheaply?) | **SIDE** | HIGH | Two specific axes that compose into severity: (a) blast-radius (scope), (b) reversibility (recoverability). Both are TASK-AGNOSTIC structural properties of any change/candidate. **Strong candidates for the meta-principle's structural axes.** |
| 41 | Decision theory — stake-asymmetry (loss-aversion / asymmetric loss functions); the existing td-critique spec's "burden of proof shifts by stakes" lever | **SIDE** | HIGH | Reinforces (5). Decision theory has rich vocabulary for asymmetric loss: when downside >> upside, the threshold for action shifts. The spec's burden-of-proof shift is exactly this. Suggests stakes IS legitimately the load-bearing meta-axis, but stakes itself may be decomposable into (severity-if-occurs × likelihood-of-occurring × scope-of-affected). |
| 42 | Medical ethics — "First, do no harm" / primum non nocere (asymmetric loss favoring inaction) vs aggressive intervention (asymmetric loss favoring action when delay is fatal) | **SIDE** | MEDIUM | Field-canonical example of stakes-driven asymmetric severity. Mirrors the spec's existing low-stakes-let-through vs high-stakes-block-it dichotomy. Confirms the meta-principle is empirically common across domains. |
| 43 | Type-I vs Type-II errors in statistics — false-positive vs false-negative trade-off; controlled by significance threshold (alpha) | **SIDE** | MEDIUM | DIRECT analog of critique's KILL vs SURVIVE asymmetric-error space. Alpha-level is the calibration knob. Suggests severity-calibration could be expressed as "what is the false-positive-vs-false-negative cost ratio for this candidate's context?" |
| 44 | Engineering — fail-safe vs fail-deadly defaults (which direction is the system's failure-state biased toward?) | **SIDE** | MEDIUM | The notion of a DEFAULT failure-direction. Critique's burden-of-proof shift IS this: low-stakes default = fail-safe (let through); high-stakes default = fail-deadly (block). Severity-calibration ultimately encodes which default the critique is operating under. |
| 45 | Test theory — test sensitivity vs specificity (true-positive rate vs true-negative rate) | **SIDE** | LOW | Same trade-off frame as (43). Less directly analogous to critique because tests are binary-outcome whereas critique has positional verdicts. |

---

## State Summary

### Territory-specification echo

Bounded territory:
- CORE: `td-critique.md` (8 sections, all sections traversed); `top_7_common_critique_failures.md` (8 sections + cross-failure interactions, all traversed); `td-critique/SKILL.md` (1 page traversed).
- SUB: `innovate.md` (lines 1-638 of 753 traversed — covered Intuition + 7 Mechanisms + Seed/Generate/Test/Iteration + Coverage Strategy partially; lines 639-753 NOT traversed in this pass — frontier flag); `sensemaking.md` (NOT directly read this pass — frontier flag with hypothesized content); `surfacing.md` (read in full as the discipline-spec being used; surfaced relevance-level taxonomy + asymmetric-failure principle).
- SIDE: 7 external canonical concepts surfaced as possibility-mode candidate items.

### Purpose-specification echo

What structural property distinguishes a kill-worthy issue from a minor / nitpick issue in `/td-critique`, expressible task-agnostically. The Surfacing phase drew items bearing on: KILL's definition, dimension-weighting, stakes/burden-of-proof/critical-weight calibration levers, #2/#3 polar contrast, KILL's constructive-output requirement, cross-discipline verdict-shape analogs, external canonical severity concepts.

### Coverage map

| Region | Coverage confidence | Aggregate relevance verdict |
|---|---|---|
| `td-critique.md` | CONFIRMED (full traversal) | CORE — 13 CORE items, 5 SUB items |
| `top_7_common_critique_failures.md` | CONFIRMED (full traversal) | CORE — 6 CORE items, 2 SUB items |
| `td-critique/SKILL.md` | CONFIRMED (full traversal) | CORE — 1 item |
| `innovate.md` | SCANNED-BUT-SHALLOW (84% read; final sections on Failure Modes + Process Model not yet traversed) | SUB — 1 CORE item, 3 SUB items, 1 SIDE item |
| `sensemaking.md` | INFERRED (item surfaced via hypothesized content; not directly read) | SUB — 1 SUB item with LOW confidence |
| `surfacing.md` | CONFIRMED via reference-load | SUB — 1 CORE item, 1 SUB item |
| `100_critique_correction_chain_analysis.md` | INFERRED (high-level signal only) | SUB — 1 SUB item with MEDIUM confidence |
| External canonical concepts | CONFIRMED via possibility-mode candidate generation | SIDE — 7 items |

### Confirmed-absent regions

None confirmed-absent in this pass. All probed regions yielded at least one relevant item.

### Concept-names list

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| **Kill-worthy** | coined-term (per question) | item 7 (KILL verdict definition) | An issue whose presence makes a candidate fall in the dead region of the fitness landscape; defense cannot overcome prosecution at a critical-weight dimension. |
| **Minor / nitpick** | coined-term (per question) | items 2, 13 (Nitpicking failure mode) | An issue treated as severe when its defect-presence doesn't actually undermine candidate fitness; over-killing pattern. |
| **Severity awareness** | vocabulary (from spec) | item 2 (line 22 of td-critique.md) | The spec's named substrate for distinguishing matter-from-noise; currently un-decomposed in the spec. |
| **Burden of proof** | vocabulary (from spec) | item 5 (lines 124-128) | The existing calibration lever: low-stakes → innocent-until-proven-guilty; high-stakes → guilty-until-proven-innocent. |
| **Critical-weight dimension** | vocabulary (from spec) | items 7, 13 | The spec's named axis for distinguishing fatal-failure-axis from non-fatal-failure-axis. Weights are task-context-derived; the meta-question is whether weights themselves are decomposable. |
| **Critical / fatal** | vocabulary (from spec) | items 11, 12 | Used interchangeably to describe failure-magnitude; not structurally defined in the spec beyond "weighted high." |
| **Constructive output (seed extraction)** | vocabulary (from spec) | items 8, 9 | KILL requires a seed = fertile failure. Hidden severity-filter: if no seed is extractable, the KILL may be a nitpick. |
| **Asymmetric-failure principle** | vocabulary (from /surfacing) | item 37 | Sister-discipline meta-principle: missing-something > including-something-extra. Critique's analog would be: depending on stakes, either false-positive (kill viable) or false-negative (let unviable through) is worse. |
| **Severity × Likelihood (Criticality)** | structural-reference (external) | item 39 | Canonical structural decomposition from safety engineering. Suggests critique's "critical-weight" may conflate severity-if-occurs with likelihood-of-occurring. |
| **Blast radius + Reversibility** | structural-reference (external) | item 40 | Two task-agnostic structural axes that compose into stakes/severity. Strong candidates for the meta-principle's load-bearing structural properties. |
| **False-positive vs false-negative cost ratio** | structural-reference (external) | items 43, 44 | Statistical / engineering framing of the same asymmetry the burden-of-proof lever encodes. |
| **Defense-scope match** | vocabulary (from top_7 §5) | item 23 | Defense must operate at same scope as threat; otherwise the defense doesn't address the threat. Severity is partly: "is there a defense at the threat's scope?" |
| **Label-vs-substance** | vocabulary (from top_7 §3) | item 22 | An axis along which severity can flip: a substance defect can hide behind a clean surface; a surface defect can mis-flag substance. |
| **Pattern-persistence (structural)** | vocabulary (from top_7 §6) | item 20 | A defect signature that re-fires structurally. Suggests severity = single-instance-defect vs structurally-recurring-defect. |
| **Component-level vs system-level** | structural-reference (from /innovate Inversion depth-check) | item 34 | Depth axis that may analogize to severity: component-level defect = REFINE; system-level defect = KILL. |
| **Meta-B: Surface-over-substance** | structural-reference (from top_7 cross-failure interactions) | item 25 | Hypothesized meta-cluster: severity mis-calibration because the test fires at the wrong level of representation. |

### Recency distribution

Not applicable for this inquiry (territory is documentation, not active-task code). The relevant files' mtimes were not gated on; all files surfaced regardless of recency.

### Frontier flags

The following regions are under-traversed in this pass and would benefit from a re-invocation with a refined sub-purpose:

1. **`innovate.md` lines 639-753.** Likely covers Innovation's failure modes, output schema details. May contain additional severity-calibration analogs (e.g., what makes an Innovation output KILLABLE vs DEFERRED). Refined sub-purpose: surface verdict-shape and severity-analog content from innovate's failure modes.

2. **`sensemaking.md`.** Not directly read in this pass. The sensemaking spec is large; reading it for verdict-shape analog only would consume significant budget. Refined sub-purpose: surface sensemaking's collapse/commitment mechanism and its confidence-axis to compare with critique's verdict structure. **DEFER unless Sensemaking phase signals it's needed.**

3. **`100_critique_correction_chain_analysis.md`.** Not directly read in this pass; relevance inferred from `top_7`'s summary. The full corpus may contain explicit kill-rate / refine-rate / survive-rate statistics that would empirically ground the severity-calibration meta-principle. Refined sub-purpose: surface empirical kill-rate vs survive-rate distribution from the corpus.

4. **External canonical concepts (possibility-mode side-relevant).** The 7 surfaced concepts are illustrative; deeper sourcing (e.g., a literature review of criticality matrices, blast-radius frameworks, asymmetric loss functions) would strengthen the meta-principle's external grounding. Refined sub-purpose: validate that the surfaced external concepts are correctly characterized; surface additional canonical concepts if applicable.

### Workspace-populated status

`{populated: true, populated-at: 2026-06-09_08-14, extent: "td-critique.md FULL; top_7 FULL; SKILL.md FULL; innovate.md PARTIAL (84%); surfacing.md spec-loaded; sensemaking.md / 100.md / external canon items SURFACED-WITH-LOW-CONFIDENCE; 45 items total tagged"}`

### Frontier — open questions for downstream

These are surfaced but not interpreted. Relational meaning belongs to sensemaking.

1. **Is the spec's "burden-of-proof" lever (low-stakes vs high-stakes) the META-PRINCIPLE, or is it a SYMPTOM of a deeper principle?** Stakes itself decomposes into (severity-if-occurs × likelihood-of-occurring × blast-radius × reversibility) per the external canonical concepts. If stakes IS the meta-principle, then severity-calibration is a one-axis problem and the spec's existing articulation is sufficient. If stakes is decomposable, the meta-principle is a multi-axis composition and the spec under-articulates it.

2. **What is the structural distinction between REFINE and KILL?** Item 9 suggested the distinction is "fixable-within-frame vs fixable-only-by-frame-replacement." Is this load-bearing? If so, it directly answers the meaning-layer question: a kill-worthy issue is one whose fix requires REPLACING THE CANDIDATE; a minor issue is one whose fix CAN BE INTEGRATED into the existing candidate.

3. **What role does CONFIDENCE play in severity?** Item 31 surfaced innovate's DEFERRED category (passed with thin confidence). Critique has no analog. Should severity-calibration include a confidence-weighted dimension where a high-confidence small defect ≠ a low-confidence small defect?

4. **Is "severity" actually decomposable into MULTIPLE orthogonal axes** (e.g., SEVERITY-IF-OCCURS × LIKELIHOOD × BLAST-RADIUS × REVERSIBILITY × FIXABILITY-WITHIN-FRAME × CONFIDENCE), each of which contributes to a composite kill-worthiness verdict? Multiple items (39, 40, 41, 43) point this direction.

5. **What is the relationship between #2 Rubber-Stamping and #3 Nitpicking as TWO POLES of a single axis vs. TWO INDEPENDENT FAILURE MODES?** The spec treats them as paired-opposites (item 6 line 128). But if severity is multi-axis, they may each represent failure on a DIFFERENT axis: Rubber-Stamping = prosecution insufficient; Nitpicking = defense insufficient. Both axes need positive presence; their absence-modes are not strictly polar.

6. **Does the existing #1 Wrong Dimensions / #4 Dimension Blindness coverage already PARTIALLY address the meta-question by ensuring the dimensions ARE the right severity-axes for the task?** If yes, severity-calibration is downstream of dimension-construction (which is Phase 0). If no, severity-calibration is a separable sub-component that lives between Phase 1 (landscape) and Phase 2 (adversarial evaluation).

7. **The constructive-output requirement on KILL (item 8): is this a SYMPTOM of the meta-principle (kill-worthy issues are fertile failures) or an ORTHOGONAL requirement (KILL requires constructive output for downstream value regardless of severity)?** If the former, the meta-principle includes a FERTILITY axis: kill-worthy issues produce reusable seeds; non-kill-worthy issues don't.

## Telemetry

- **Mode:** artifact (primarily) + possibility (for external canonical concepts).
- **Entry point:** signal-first.
- **Cycles run:** 1 main traversal across 8 regions.
- **Items enumerated:** 45 total (44 file-backed + 1 inferred hypothetical for sensemaking + 7 external possibility-mode = noting that some entries are counts of conceptual surfaces, not literal lines).
- **Items tagged at each relevance level:** CORE: 18; SUB: 14; SIDE: 8; UMBRELLA: 0 (no items required umbrella tag — all items had sufficient confidence to assign CORE/SUB/SIDE).
- **Sub-phase fired:** NO (territory was explicit-bounded; no boundary-discovery).
- **Convergence criteria status:** territory traversed at current resolution; uncertainty-includes filtering applied (5 items at LOW or MEDIUM confidence were INCLUDED rather than dropped per the asymmetric-failure principle).
- **Workspace-overload trigger:** APPROACHED — innovate.md not fully read (final 115 lines deferred). Frontier flag emitted (see Frontier flag #1).
- **`items_with_mtime` / `items_without_mtime`:** mtime annotation not load-bearing for this inquiry (documentation territory, not active-task code); annotation skipped for tractability — flag this as a deviation from the spec's general policy.
- **LAYER 1 failure modes checked:** Missed-relevance (NO); Surfaced-irrelevance (NO); Over-coverage (NO); Territory-mis-binding (NO); Workspace overload (YES — frontier flag emitted); Artifact under-specification (NO); Workspace-artifact desync (NO); Recency-Equates-Idleness (N/A — recency annotation skipped); Recency-Bias-Filter (N/A — same reason).
- **LAYER 2 failure modes checked:** Interpretive-overstep (NO — items tagged but not interpreted relationally); Purpose-loss (NO — purpose clearly biased all tagging); Self-coupling-to-downstream (NO).

## Self-Assessment Verdict

**FLAG** — output produced; one significant flag raised (workspace-overload mitigation fired for innovate.md lines 639-753; frontier-signal emitted for sensemaking.md not being read in this pass; recency annotations skipped as a tractable deviation given the documentation-territory). Downstream Sensemaking consumer should review the frontier flags and decide whether re-invocation with refined sub-purpose is needed before proceeding, OR whether the surfaced content is sufficient for Sensemaking to produce SV1→SV6.

**Recommendation:** Sensemaking can proceed with the current surfacing output. The 45 surfaced items cover the question's seven sub-targets (a)-(g) with HIGH-confidence anchors from `td-critique.md`, `top_7`, `innovate.md` (84% coverage), `surfacing.md` (asymmetric-failure principle), and 7 external canonical concepts. The frontier flags name what's MISSING; sensemaking can decide whether the missing content would shift the ambiguity-resolution.
