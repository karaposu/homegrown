# Sensemaking — Compare MVL+ vs MVL2+ on the surfacing-metadata question

## User Input

(from `_branch.md`) Comparing the two findings — one produced by `/MVL+` (at 20-35), one produced by `/MVL2+` (at 16-00) — on the same user query about adding mtime-awareness to the surfacing discipline. Which did a better job, and why?

## SV1 — Initial reading

Two findings answer the same user question with similar overall direction (annotation not filter, capture at Item-enumeration, multi-surface placement) but with meaningfully different coverage, naming, and failure-mode commitments. A verdict can be reached; the work is in identifying the comparison dimensions and weighting them in a way that honors the user's named concerns.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1 — Verdict required.** The user asked "which one did a better job" — a comparison that lists differences without a verdict fails the goal.
- **C2 — Reasoning required.** The "and why?" clause obligates per-dimension reasoning.
- **C3 — Runner-attribution attempt.** The user's framing ("one with MVL+ and another is ran with MVL2+") identifies the runner choice as the operative variable; the comparison must examine whether runner-difference explains output-difference.
- **C4 — No new design.** The inquiry is to compare existing findings, not to produce a third. Out-of-scope to recommend a hybrid or a new spec edit.
- **C5 — Honest confidence.** A multidimensional comparison admits multiple defensible verdicts under different weightings; the verdict's confidence must reflect this.
- **C6 — Both findings answer the question.** Neither is wrong. The comparison is about relative quality, not pass/fail.
- **C7 — Identical input.** Both inquiries received the user's verbatim input (verified at surfacing trace #38 and #39). Differences are not input-attributable.

### Key Insights

- **KI1 — The user's two named regression risks are the load-bearing criterion.** The user explicitly framed two failure modes — old-as-idle, silent down-weighting — and asked for a design that protects against them. Any quality dimension related to fidelity-to-these-risks weighs the most. MVL2+ adds two named failure modes that directly map to these (Recency-Equates-Idleness, Recency-Bias-Filter); MVL+ relies on the existing §4.4 asymmetric-failure principle + an §2.1 non-filtering reaffirmation. This is the sharpest quality differentiator.

- **KI2 — Forward-extension is a real but secondary win for MVL+.** The "observable-fact metadata annotations" named category gives MVL+'s addition structural value beyond the immediate mtime case — future metadata kinds (file-size, line-count, git-tracked-state) extend the category. MVL2+ leaves this as a Research Frontier, not committed. This is a structural win for MVL+ but operates at a different layer than the user's question.

- **KI3 — User-language alignment is a small but real win for MVL+.** MVL+'s `last-edit-time` matches the user's "last datetime of edit" phrasing closely; MVL2+'s `recency annotation` is one step abstracted away from the implementation. The user did not explicitly demand naming alignment, but the project's load-bearing-concept test (user-language alignment sub-aspect) flags this.

- **KI4 — Coverage breadth differs by ~2.3×.** MVL+'s addition touches 3 spec surfaces (§2.1, §5.4, §1.3); MVL2+'s addition touches 7 surfaces (§1.3, §1.4, §2.1, §4.2 ×2, §5.4, §5.5, §5.6). The coverage difference is largely about the failure-mode entries (which MVL+ doesn't add) and the reporting layer (State Summary derived field + Telemetry, which MVL+ defers as M3).

- **KI5 — Possibility-mode is handled IN by MVL2+ and OUT by MVL+.** MVL2+'s `source: none` first-class value preserves schema completeness for items without filesystem backing. MVL+'s "field is absent or N/A in possibility-case records" scopes possibility-mode out entirely. The MVL2+ approach is more information-complete; the MVL+ approach is more cautious.

- **KI6 — MVL+ shows more methodology rigor in the discipline pass.** MVL+'s state file shows: explicit stake-level commitment (HIGH; guilty-until-proven-innocent), 16 candidates evaluated (vs MVL2+'s 7), 7 piece-level Inversion-candidates with methodology-mode reasoning, Determination-mechanism piece check explicit. MVL+'s process is more rigorous; MVL2+'s output is more complete. The two are not the same thing.

### Structural Points

- **SP1 — The runner choice plausibly contributes to but does not solely cause the output differences.** /explore upstream's empirical-cross-spec-precedent verification (verified "no precedent for file-metadata in any other discipline spec") encouraged MVL+ to a minimal-first scope (M1 only; M2 and M3 deferred); /surfacing upstream's relevance-tagged item enumeration in surfacing.md + adjacent conventions enumerated more surfaces where additions could land, encouraging MVL2+'s 7-surface breadth. Plausible runner contribution: ~30–50% of observed differences. The remainder is LLM run-to-run variance + per-discipline framing choices that the runner influences but doesn't determine.

- **SP2 — Both findings exhibit phase-discipline.** MVL+ defers M2 and M3 with concrete revival triggers; MVL2+ defers numeric bands with a concrete revival trigger. Neither overclaims; both keep options open for empirical refinement.

- **SP3 — Both findings produce ship-ready spec text.** MVL2+'s text spans all 7 surfaces with full drafts; MVL+'s text spans 3 surfaces with full drafts. Both are concrete enough for the user (or a materialization run) to apply directly.

- **SP4 — Neither finding cites the other.** They are independent runs on the same query — exactly the comparison-friendly setup the user wanted.

### Foundational Principles

- **FP1 — Multi-dimensional quality.** "Better" is not single-axis. The verdict requires per-dimension comparison + a stated weighting.

- **FP2 — User-concern weighting.** Dimensions related to the user's explicitly-named concerns weigh more than dimensions related to nice-to-have properties.

- **FP3 — Honest attribution.** A single-run-per-runner comparison cannot fully attribute differences to the runner. Other variables (LLM variance, framing choices downstream of the runner) plausibly contribute. The verdict should hypothesize runner-effect, not claim it outright.

### Meaning-Nodes

- **Fidelity to user's named regression risks** — the load-bearing comparison dimension. Strongest for MVL2+ (two named failure modes).
- **Structural defense-in-depth** — how many spec surfaces protect the principle. 7 vs 3 favors MVL2+.
- **Convention conformance** — does the addition use the project's primitives (Step Refinement primitive, italic-prefix visual marker)? Slightly favors MVL2+ for explicit invocation.
- **User-language alignment** — `last-edit-time` (MVL+) ≈ user's "last datetime of edit"; `recency annotation` (MVL2+) is abstracted. Favors MVL+.
- **Forward-extension** — named category for future metadata kinds. Favors MVL+.
- **Decomposition granularity** — 7 pieces with DAG (MVL+) vs 3 pieces parallel (MVL2+). Favors MVL+.
- **Methodology rigor in pass** — stake-level HIGH, 16 candidates, 7 Inversion-candidates per piece (MVL+) vs 7 candidates with 12 dimensions including 6 project-specific risk axes (MVL2+). Mixed: MVL+ shows more pass-rigor; MVL2+ shows more dimension breadth.
- **Reporting completeness** — Telemetry + State Summary derived field. Favors MVL2+ (committed) vs MVL+ (deferred as M3).
- **Missingness handling** — possibility-mode IN (MVL2+) vs OUT (MVL+). Favors MVL2+.

### Meta-Inspection cross-references (after SV2)

- **H4 (concept names).** The comparison's load-bearing concepts (the dimensions named above) are tested in Phase 3 Load-bearing concept test below.
- **H5 (motivating examples).** The two findings are specific examples; the comparison addresses the broader pattern (how runner choice affects spec-edit output) only with HYPOTHESIS confidence due to single-run-per-runner data.

### SV2 — Anchor-informed understanding

The comparison has 9 dimensions across which the two findings differ. The dimensions are not equally weighted: dimensions related to the user's named regression risks carry the most weight. MVL2+ wins decisively on those highest-weighted dimensions; MVL+ wins on lower-weighted dimensions. A weighted aggregate favors MVL2+, but the per-dimension result is mixed.

---

## Phase 2 — Perspective Checking

### Technical / Logical

Both findings are technically sound — each provides ship-ready spec text consistent with the placement convention. No technical errors in either.

### Human / User

The user explicitly framed two regression risks. MVL2+ NAMES those risks as failure modes (Recency-Equates-Idleness, Recency-Bias-Filter). MVL+ protects against them via existing principle + reaffirmation, but doesn't name them. From a user-attentiveness perspective, MVL2+ honors the user's framing more directly.

### Strategic / Long-term

Long-term: MVL+'s named category ("observable-fact metadata annotations") provides forward-extension structure for future metadata kinds. MVL2+ preserves this as Research Frontier. If the project adds file-size or git-blame signals in the future, MVL+'s pattern is reusable as-is; MVL2+'s pattern would need to be re-derived.

This is a real MVL+ win, but operates at a layer the user did not explicitly ask about.

### Risk / Failure

The principal risk of MVL+: scoping possibility-mode OUT means candidate-generated items have no annotation. If surfacing is invoked in possibility-mode and a downstream consumer expects the field, the consumer gets nothing. MVL2+'s `source: none` first-class avoids this.

The principal risk of MVL2+: more spec edits = more places to maintain. Future contributors must update 7 surfaces consistently rather than 3.

Both are bounded risks; neither is catastrophic.

### Resource / Feasibility

Both findings are equally feasible to apply (a spec-edit is mechanical work). MVL+'s 3-surface edit is slightly smaller; MVL2+'s 7-surface edit is slightly larger. Difference is small (~10–20 lines).

### Definitional / Internal Consistency

Both findings are internally consistent. MVL+'s `observable-fact` framing and `last-edit-time` naming are mutually reinforcing; MVL2+'s `metadata-as-signal-not-verdict` principle and `recency annotation` naming are mutually reinforcing. No contradictions within either.

### Definitional / Frame-exit Completeness

Gating predicate check: the inquiry's commitments DO inherit terms from prior findings (asymmetric-failure principle, Step Refinement, NOT-list, surfacing.md sections), and the comparison's eventual dimension table WILL use some inherited terms across distinct values (e.g., "field name" → `last-edit-time` for MVL+, `recency annotation` for MVL2+). The gating fires.

**Existence Enumeration** for "field name" (the inherited term varying across the dimension table):
- TYPE axis: only two referents (MVL+'s and MVL2+'s field names). Both are in-frame.
- LAYER axis: same layer (per-item annotation). In-frame.
- PHASE axis: same phase (M1 minimal, MVL2+ committed). In-frame.
- AGENT axis: same agent (the surfacing discipline). In-frame.

No project-wide referent of "field name" is outside the inquiry's frame. The enumeration is exhaustive.

**Role Assessment:** the field name's role in this comparison is to host the per-item recency signal. Both candidates serve this role; the comparison is about which serves it better. In-frame.

**Verdict Rigor:** no "out of scope" or "clean boundary" verdict has been issued in this section; rigor not triggered.

**Residual / Coverage Justification:** is there a frame-exit concern about field names that the above categories don't capture? The naming-as-category-label question (MVL+'s "observable-fact metadata annotations" as a category name vs MVL2+'s "metadata-as-signal-not-verdict" as a principle name) is the same comparison reformulated; same dimensions apply. No residual gap.

### Phase / Calibration-State

Does the verdict depend on calibration the project has? No — both findings exist; the comparison is a relative quality judgment, not contingent on a future calibration phase.

### SV3 — Multi-perspective understanding

Seven perspectives applied. Frame-exit Completeness gating fires but produces no new anchors beyond confirming the comparison's referents are in-frame. The strongest perspectives are Human/User (MVL2+ wins) and Strategic/Long-term (MVL+ wins). The verdict balance comes down to weighting these against each other.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity #1 — Verdict shape

Should the verdict be single-winner ("/MVL2+ wins") or per-dimension ("MVL2+ wins on X, Y; MVL+ wins on A, B")?

**Strongest counter-interpretation:** single-winner is what the user asked for ("which one did a better job"). Per-dimension dilutes the answer.

**Why the counter-interpretation fails (structural grounds):** the user's question has two parts: "which one" AND "and why." The "and why" requires per-dimension reasoning. A single-winner verdict without per-dimension support is bare and fails the "why" clause. The verdict shape that satisfies both parts is composite: overall winner with explicit weighting + per-dimension comparison + the per-dimension wins for the loser.

**Confidence:** HIGH.

**Resolution:** Composite verdict — name overall winner with confidence + per-dimension comparison table + explicit reasoning about per-dimension wins for both findings.

**What is now fixed:** verdict shape.

**What is no longer allowed:** bare verdict without per-dimension support.

**What now depends on this choice:** the Innovation phase must generate dimension-by-dimension verdict candidates; Critique must adjudicate per dimension AND in aggregate.

**What changed in the conceptual model:** the comparison is multi-dimensional; the overall verdict is a weighted aggregate that respects per-dimension wins for both findings.

### Ambiguity #2 — Runner-attribution claim

Should the verdict claim the runner CAUSED the output differences, or be agnostic?

**Strongest counter-interpretation:** the user framed runner as the operative variable; claiming runner-causation honors the framing.

**Why the counter-interpretation fails (structural grounds):** the project has no controlled A/B data (same query × multiple runs × each runner). A single-run-per-runner comparison cannot causally attribute differences to the runner. The two findings differ in many ways — naming, possibility-mode handling, failure-mode addition — and the runner choice (which discipline runs first) is one of several variables that affected these. Other variables include LLM run-to-run variance, framing choices in each discipline pass (downstream of the runner but not strictly determined by it), and incidental wording differences.

**Confidence:** HIGH.

**Resolution:** HYPOTHESIZE runner-attribution with explicit confidence. State that the upstream discipline difference (/explore in MVL+ vs /surfacing in MVL2+) plausibly contributes to but does not solely cause the output differences. Estimate the runner contribution at ~30–50% with the remainder attributable to LLM variance + per-discipline framing choices.

**What is now fixed:** runner-attribution is a HYPOTHESIS with MEDIUM confidence, not a claim with HIGH confidence.

**What is no longer allowed:** claiming runner-choice alone explains the differences; recommending a runner solely on the basis of this single comparison.

**What now depends on this choice:** the verdict's confidence (because runner-attribution feeds the user's calibration use-case); the Open Questions section (which preserves the "is this runner-effect or LLM-variance?" question as Monitoring for future A/B-style comparisons).

**What changed in the conceptual model:** the comparison cannot fully answer the user's implicit broader question ("which runner should I use for spec-edit-type questions?"); the verdict on the specific pair of findings is one data point, not a calibration.

### Ambiguity #3 — Dimension weighting

Should dimensions be weighted equally, or should user-named concerns weigh more?

**Strongest counter-interpretation:** equal weighting is more objective; user-named-concern weighting introduces evaluator bias.

**Why the counter-interpretation fails (structural grounds):** the user's question explicitly names two regression risks. The TD-Critique discipline's Phase 0 (per `cognitive_harness/td-critique/references/td-critique.md`) explicitly directs dimension construction to extract from the problem's sensemaking output and weight per problem context. The user's framing IS the problem context. Equal weighting would dilute the user's stated concern — a finding that aces forward-extension but fails to name the user's regression risks would tie a finding that addresses both. Equal weighting is artificial; user-concern weighting is honest.

**Confidence:** HIGH.

**Resolution:** Weight dimensions by load-bearing-for-user-question, not equally.

- **HIGH weight** (load-bearing for user's named concerns): Fidelity to named regression risks, Structural defense-in-depth, Convention conformance.
- **MEDIUM weight** (substantive but not load-bearing for user's specific question): User-language alignment, Missingness handling, Reporting completeness.
- **LOWER weight** (nice-to-have or process-quality rather than output-quality for this question): Forward-extension, Decomposition granularity, Methodology rigor in pass.

**What is now fixed:** the weighting scheme.

**What is no longer allowed:** equal-weighted scoring; verdicts that ignore user-named-concern primacy.

**What now depends on this choice:** the overall verdict (because aggregate score depends on weighting); the per-dimension comparison's framing.

**What changed in the conceptual model:** the dimensions are tiered, not flat. The verdict reflects the tiered weighting.

### Ambiguity #4 — Confidence of overall verdict

How confident is the comparison verdict?

**Strongest counter-interpretation:** HIGH confidence — both findings are visible and the dimensions are clear.

**Why the counter-interpretation fails (structural grounds):** the verdict depends on weighting. The weighting commitment (Ambiguity #3) is well-grounded but not the only defensible weighting; an evaluator who weighed forward-extension and user-language alignment higher could reach a different verdict. The verdict is robust under the user-concern-weighted scheme but not under all defensible weightings. HIGH would overclaim; MEDIUM-HIGH is appropriate.

**Confidence:** HIGH (about the confidence-level decision itself).

**Resolution:** MEDIUM-HIGH confidence in the overall verdict. State the weighting explicitly so future evaluators can re-weigh; flag that the verdict is sensitive to weighting choices.

**What is now fixed:** verdict confidence = MEDIUM-HIGH; weighting committed and made explicit.

**What is no longer allowed:** unhedged HIGH-confidence verdicts that ignore weighting sensitivity.

**What now depends on this choice:** the wording of the verdict in the finding (must include the weighting + sensitivity note).

**What changed in the conceptual model:** confidence reflects the weighted-aggregate's sensitivity to the weighting choice, not just the per-dimension certainty.

### Load-bearing concept test cross-reference

The committed dimensions (Fidelity to named regression risks, Structural defense-in-depth, etc.) were tested against:

- **proxy-vs-structural:** each dimension describes a real structural property of a finding (presence of named failure modes, count of spec surfaces touched, etc.). Not proxies.
- **discoverability:** the dimensions can be observed by reading the two findings + state files. Observable.
- **user-language alignment:** the user's "didnt do well" / "better job" language maps to multi-dimensional quality; the dimensions align with that.

### Specific-vs-pattern cross-reference

The two specific findings are the comparison subject. The broader pattern (which runner is better for spec-edit questions generally) is preserved as an open question; the verdict here is about the SPECIFIC pair, not the BROADER pattern.

### SV4 — Clarified understanding

Four ambiguities resolved at HIGH confidence each. The verdict shape is composite (overall + per-dimension); runner-attribution is hypothesized not claimed; dimensions are weighted by user-concern primacy; overall confidence is MEDIUM-HIGH.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

- Verdict shape: composite (overall winner + per-dimension comparison + per-dimension wins for both).
- Runner-attribution: HYPOTHESIZED, not claimed; ~30–50% runner-contribution estimate.
- Dimension weighting: HIGH (3 dimensions), MEDIUM (3 dimensions), LOWER (3 dimensions).
- Overall verdict confidence: MEDIUM-HIGH.
- Scope: this specific pair of findings; no calibration of MVL+ vs MVL2+ generally.

### Eliminated

- Bare single-winner verdict without per-dimension support.
- Equal-weighted scoring.
- HIGH-confidence overall verdict.
- Runner-causation claim.
- New spec design (out of scope).

### Remaining viable choices

- Which finding wins the overall verdict under the committed weighting scheme.
- The exact per-dimension verdicts (these will be generated and tested in Innovation + Critique).

### SV5 — Constrained understanding

The design space has contracted to: under the committed weighting (HIGH on user-concern dimensions), which finding wins overall, and what is the per-dimension story? Innovation generates candidate per-dimension verdicts; Critique adjudicates with adversarial testing per dimension.

---

## Phase 5 — Conceptual Stabilization

The stable model:

> Two findings answer the same user query about adding mtime-awareness to the surfacing discipline. Both reach similar overall direction (annotation not filter, multi-surface placement, defense-in-depth) but differ on nine dimensions of varying weight. Under user-concern-weighted scoring (HIGH weight on fidelity to the user's named regression risks, structural defense-in-depth, and convention conformance), MVL2+ wins overall. MVL+ wins on user-language alignment, forward-extension, and decomposition granularity (lower-weighted dimensions). The overall verdict's confidence is MEDIUM-HIGH (robust under user-concern-weighted scoring; sensitive to weighting choices). Runner-attribution is partial: the upstream discipline difference (/explore vs /surfacing) plausibly contributes ~30–50% of the observed differences, with the rest attributable to LLM run-to-run variance + per-discipline framing choices.

### Accommodation trigger check

Did new perspectives keep destabilizing the model? No. Each perspective refined the comparison without forcing structural revision. The four ambiguities resolved cleanly. Model fits the territory.

### Meta-Inspection (after SV6)

- **H6 (model fit).** Stable across perspectives. PASS.
- **H8 (self-reference).** This inquiry uses sensemaking to evaluate two findings produced by sensemaking-equipped pipelines. Self-reference risk: the evaluation tool shares conceptual vocabulary with the targets. Mitigation: the evaluation grounds in the USER's query (external referent) and in the project's placement-convention + Step-Refinement conventions (external referents). Self-reference is bounded.
- **H9 (user language alignment).** Dimensions named in plain language; verdict accessible to a user who hasn't read either finding. PASS.

### SV6 — Stabilized Model

The comparison verdict: **MVL2+'s finding does a better job for this specific user query under user-concern-weighted scoring, at MEDIUM-HIGH confidence.** The primary reason is fidelity to the user's two explicitly-named regression risks (MVL2+ adds two named failure modes mapping directly to those risks; MVL+ relies on existing §4.4 + §2.1 reaffirmation without naming the risks). MVL+ has real wins on user-language alignment (`last-edit-time` matches user phrasing), forward-extension (named category for future metadata kinds), and decomposition granularity (7 pieces with DAG), but these operate at lower-weighted dimensions for this query. Runner-attribution: plausible contribution ~30–50%; not sole cause.

Difference from SV1: SV1 saw "two findings, similar direction, MVL2+ probably has more coverage." SV6 sees a 9-dimension comparison with tiered weighting, a composite verdict (MVL2+ wins overall; MVL+ wins on specific dimensions), partial runner-attribution, and explicit confidence calibration.

---

## Saturation Indicators (Telemetry)

- **Perspective saturation:** YES. The last two perspectives (Frame-exit Completeness, Phase/Calibration-State) produced no new anchors.
- **Ambiguity resolution ratio:** 4 of 4 ambiguities resolved at HIGH confidence.
- **SV delta:** SV1 saw a single-axis comparison; SV6 sees a 9-dimension tiered comparison with composite verdict + runner-attribution hypothesis + explicit confidence calibration. Major delta.
- **Anchor diversity:** Constraints (7), Key Insights (6), Structural Points (4), Foundational Principles (3), Meaning-Nodes (9). Diverse.

## Failure Mode Check

- Status Quo Bias: did NOT default to "both are fine, runner doesn't matter" — committed a verdict.
- Premature Stabilization: SV4 only committed after 4 ambiguities resolved with structural grounds.
- Anchor Dominance: no single anchor dominates. KI1 (user's named risks), KI2 (forward-extension), KI4 (coverage breadth) are three independent load-bearing insights.
- Perspective Blindness: 7 perspectives applied including Frame-exit Completeness gating check.
- Clean Resolution Trap: all 4 ambiguity-collapse pairs include counters with structural-grounds rejection.
- Self-Reference Blindness: this inquiry uses sensemaking to evaluate sensemaking-equipped findings; mitigation via external referents (user query + project conventions).

## Self-Assessment

PROCEED to Decomposition. Stable model in place; the 9 dimensions and their tiered weighting are the input set Decomposition partitions into sub-comparisons for Innovation to generate candidates against and Critique to adjudicate.
