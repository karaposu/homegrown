# Critique — Compare MVL+ vs MVL2+ on the surfacing-metadata question

## User Input

(from `_branch.md`) Compare two findings and verdict which did a better job, with reasoning that distinguishes runner-attributable differences from other-variable differences.

## Phase 0 — Dimension Construction

### Default dimensions

| Dimension | What it asks | Weight | Source |
|---|---|---|---|
| Correctness | Does the verdict actually answer the user's "which one did a better job, and why?" | HIGH | meaning-node |
| Coherence | Do the per-dimension verdicts cohere with the overall synthesis? | HIGH | structural point |
| Feasibility | Can the user act on the verdict? | MEDIUM | constraint (user calibration use case) |
| Completeness | Does the verdict address all the user's framing aspects (which / why / runner-attribution)? | HIGH | constraint |
| Robustness | Is the verdict robust under different defensible weightings? | HIGH | constraint (Ambiguity #4 sensitivity) |
| Elegance | Is the verdict's structure minimum-sufficient, not over-engineered? | MEDIUM | principle (minimum complexity) |

### Project-specific risk dimensions

| Dimension | What it asks | Weight |
|---|---|---|
| **Confidence honesty** | Does the verdict's stated confidence match the evidence quality? | HIGH |
| **Runner-attribution honesty** | Does the runner-attribution claim match the data available? | HIGH |
| **Anti-overclaim** | Does the verdict avoid recommending "always use X" from one data point? | HIGH |
| **Per-dimension evidence-grounding** | Does each per-dimension verdict cite specific evidence from the finding? | HIGH |
| **User-framing fidelity** | Does the comparison honor the user's explicit framing (runner as operative variable; two regression risks named)? | HIGH |

### Dimension validation

All 11 dimensions are relevant. The project-specific risk dimensions (5) carry significant weight because this is a comparison-on-priors inquiry with calibration use-case — overclaim and false confidence are the most damaging failure modes here.

---

## Phase 1 — Landscape Construction

### Viable region

Composite verdict with: clear top-line winner (MVL2+); per-dimension support with evidence; explicit weighting (user-concern HIGH × 3 + MEDIUM × 2 + LOWER × 1); sensitivity check (equal weighting also tested); bounded runner-attribution (~30-50% with alternative-variable contributions named); MEDIUM-HIGH confidence with sensitivity-to-weighting flag; actionability statement that warns against premature generalization.

### Dead region

- Bare single-axis verdict ("MVL2+ added more sections, so MVL2+ is better"). KILLED by Completeness + Per-dimension evidence-grounding.
- HIGH confidence with claimed runner-causation. KILLED by Confidence honesty + Runner-attribution honesty.
- "Always use /MVL2+ for spec edits" recommendation. KILLED by Anti-overclaim.
- Verdict that ignores user-named regression risks. KILLED by User-framing fidelity.

### Boundary region

- Verdict at LOW confidence (over-hedges; ignores the invariance under both weighting schemes).
- Verdict at MEDIUM confidence (slightly over-hedges; misses the robust-under-both-weightings argument).

### Unexplored region

- Hybrid weightings between user-concern and equal. The verdict tested two extremes (user-concern-weighted; equal-weighting) and found MVL2+ wins both. Intermediate weightings preserved as not-individually-tested but reasonable-to-assume-MVL2+-wins-by-interpolation.

---

## Phase 2 — Adversarial Evaluation

### Candidate: the composite verdict

**Prosecution:**

- *Dimension-level — Elegance:* the composite verdict is multi-component (per-dimension + aggregation + runner-attribution + confidence + actionability). Could this be simpler? A 2-line verdict ("MVL2+ wins because it adds named failure modes; runner choice plausibly contributes") would be more elegant.
- *User-perspective objection:* the user might want a clear binary answer, not a 9-dimension breakdown. Does the verdict overcomplicate?
- *Specific failure-case:* what if the user weights forward-extension HIGH? Then MVL+ might tie or win.
- *Specification-gap probe:* how does the user know which weighting to apply? The verdict prescribes user-concern weighting but doesn't argue WHY user-concern beats forward-extension at the meta-weighting level.
- *User-framing-fidelity probe:* the user said "tell me which one did a better job for given query, and why" — the "and why" supports per-dimension reasoning, but does the verdict over-emphasize structural dimensions the user didn't explicitly name?

**Defense:**

- *Foundation:* the composite verdict satisfies BOTH parts of the user's question. The top-line ("MVL2+ wins") is the binary answer; the per-dimension structure is the "and why." Simpler would fail "and why"; more complex would fail Elegance.
- *Coherence:* per-dimension verdicts cohere with the overall (5 of 9 favor MVL2+ in count; 13 of 18 points favor MVL2+ under user-concern weighting).
- *Robustness:* tested under TWO weighting schemes (user-concern and equal); MVL2+ wins both. The verdict is invariant across defensible weightings; only the margin changes.
- *Confidence honesty:* MEDIUM-HIGH reflects the invariance (HIGH would be too strong because of runner-attribution partial-only) and the sensitivity (lower confidence would over-hedge given the invariance).
- *User-framing fidelity:* the dimensions the comparison weighted HIGHEST (D1 Fidelity to named regression risks; D2 Defense-in-depth; D3 Convention conformance) are derived from the user's explicit framing. Forward-extension and methodology rigor were correctly LOWER-weighted because the user didn't name them.
- *Runner-attribution honesty:* the ~30-50% range honestly reflects the uncertainty without controlled A/B data. A narrower estimate would overclaim; an absent estimate would under-respond to the user's framing of runner as operative.

**Collision:** Elegance is the strongest prosecution but the user explicitly demanded "and why" — Elegance has to lose to Completeness for this question type. User-perspective objection is mitigated by the clear top-line. Specification-gap on weighting is addressed by the sensitivity check (both weightings tested; MVL2+ invariant).

**Position:** Viable. **Verdict: SURVIVE.**

### Per-dimension verdicts — adversarial test summary

| Dimension | Verdict | Strongest counter | Counter rejected because |
|---|---|---|---|
| D1 Fidelity to named risks | MVL2+ decisive | MVL+'s §4.4+§2.1 reaffirmation is sufficient | User explicitly NAMED the regressions; protection-without-naming misses the user's framing |
| D2 Defense-in-depth | MVL2+ decisive | 2 anchors is enough | 4 anchors > 2 anchors against future spec drift; extrapolation confirms |
| D3 Convention conformance | MVL2+ slight | MVL+'s placement is also valid | Both are valid; MVL2+ is more visibly conformant (italic prefix; table-row not paragraph) |
| D4 User-language alignment | MVL+ with caveat | MVL2+'s structural argument trumps user-language | Structural argument is real but operates at a different layer than the user's familiarity |
| D5 Missingness handling | MVL2+ decisive | Scoping-out possibility-mode is simpler | Schema heterogeneity > schema homogeneity is a structural anti-pattern |
| D6 Reporting completeness | MVL2+ with caveat | Phase-discipline (defer M3) is structurally sound | M3 is mechanical aggregation, not calibration-dependent; deferral is cautious, not necessary |
| D7 Forward-extension | MVL+ decisive | Single-instance evidence insufficient for category | Named category is reusable without commitment to thresholds; MVL+ commits at the right layer |
| D8 Decomposition granularity | MVL+ slight | MVL2+'s 3-piece is sufficient | Acknowledged; MVL+'s 7 pieces are richer but marginal value is small |
| D9 Methodology rigor in pass | MVL+ slight | MVL2+'s dimension breadth (12) matches MVL+'s candidate count (16) | Different rigor axes; MVL+'s explicit stake level + Inversion-candidate count edge out on the pass-rigor dimension |

All 9 per-dimension verdicts SURVIVED adversarial testing. None reversed under prosecution.

### Runner-attribution hypothesis

**Prosecution:**
- *Wide range (30-50%):* could be a hedge to avoid commitment. Why not 40%? Why not 25%?
- *0% possibility:* what if the runner contribution is actually 0 — pure LLM variance?
- *100% possibility:* what if the runner contribution is actually >50%?

**Defense:**
- The 30-50% range is honest about the uncertainty without controlled A/B data. A point estimate would overclaim precision.
- 0% is implausible because /explore and /surfacing have structurally different orientations (cross-spec scan-signal-probe vs bounded-territory relevance-tagged enumeration). These biases plausibly affect downstream framing; expecting NO effect would be the surprising result.
- >50% is also implausible because per-discipline framing choices (sensemaking's naming decision; innovation's failure-mode-count decision) are influenced by but not strictly determined by the upstream discipline. Other variables matter too.

**Collision:** the range is appropriately bounded; alternatives are accounted for. The hypothesis is correctly framed as HYPOTHESIS, not CLAIM.

**Position:** Viable. **Verdict: SURVIVE at MEDIUM confidence.**

### Confidence calibration

**Prosecution:**
- *Should be MEDIUM:* the verdict relies on user-concern weighting which is itself a judgment call.
- *Should be HIGH:* the verdict is invariant under both weighting schemes; HIGH is justified.

**Defense:**
- MEDIUM-HIGH balances both prosecutions. Invariance under both weightings supports above-MEDIUM. Partial runner-attribution and weighting-sensitivity-margin support below-HIGH.

**Collision:** MEDIUM-HIGH is the right tier.

**Position:** Viable. **Verdict: SURVIVE at MEDIUM-HIGH.**

---

## Phase 3 — Verdict + Constructive Output

| # | Candidate | Verdict | Constructive output |
|---|---|---|---|
| 1 | Composite overall verdict (MVL2+ wins) | SURVIVE | — |
| 2 | D1 verdict (Fidelity → MVL2+) | SURVIVE | — |
| 3 | D2 verdict (Defense-in-depth → MVL2+) | SURVIVE | — |
| 4 | D3 verdict (Convention → MVL2+ slight) | SURVIVE | — |
| 5 | D4 verdict (User-language → MVL+ with caveat) | SURVIVE | — |
| 6 | D5 verdict (Missingness → MVL2+) | SURVIVE | — |
| 7 | D6 verdict (Reporting → MVL2+ with caveat) | SURVIVE | — |
| 8 | D7 verdict (Forward-extension → MVL+) | SURVIVE | — |
| 9 | D8 verdict (Decomposition granularity → MVL+ slight) | SURVIVE | — |
| 10 | D9 verdict (Methodology rigor → MVL+ slight) | SURVIVE | — |
| 11 | Runner-attribution hypothesis (~30-50%) | SURVIVE at MEDIUM confidence | — |
| 12 | Overall confidence (MEDIUM-HIGH) | SURVIVE | — |
| 13 | Actionability statement (don't generalize from one comparison) | SURVIVE | — |

**No KILLs. 13 SURVIVEs.**

---

## Phase 3.5 — Assembly Check

What architecture emerges when the survivors combine?

The composite verdict is more valuable than any single per-dimension verdict alone. The user gets:

1. **A clear top-line winner** (MVL2+) — answers "which one did a better job."
2. **Per-dimension support with evidence** — answers "why."
3. **Two weighting schemes tested** — establishes robustness of the top-line.
4. **Bounded runner-attribution** — honors the user's framing of runner as operative variable without overclaiming causation.
5. **Honest confidence** (MEDIUM-HIGH) with sensitivity-to-weighting flag.
6. **Actionability with anti-overclaim guard** — tells the user what they can do with the verdict + what they should NOT yet do (premature generalization).

Removing any one of these six components leaves the verdict weaker: removing (1) makes the answer indirect; removing (2) makes it bare; removing (3) makes it brittle to re-weighting; removing (4) misses the user's framing; removing (5) overclaims or underclaims; removing (6) invites premature generalization.

**Emergent property:** the comparison itself produces an observation worth recording — methodology-rigor-in-pass (MVL+ wins) and output-quality-on-user-concerns (MVL2+ wins) are partially decoupled in this single comparison. This is an open research question for the project: does the runner's process-rigor correlate with finding-quality, or do they vary independently? Single-comparison evidence is insufficient to answer; preserved as Research Frontier.

---

## Phase 4 — Coverage + Convergence

### Coverage map

| Region | Coverage |
|---|---|
| All 9 dimensions | Fully evaluated; 5 favor MVL2+, 4 favor MVL+ |
| Both weighting schemes | Tested; MVL2+ wins both |
| Runner-attribution axis | Bounded hypothesis with named alternative variables |
| Confidence axis | MEDIUM-HIGH with sensitivity flag |
| Actionability axis | Explicit statement + anti-overclaim |

### Convergence

- Adversarial strength: STRONG (multi-axis prosecution including user-perspective, specific failure-case, specification-gap, user-framing-fidelity probes).
- Landscape stability: STABLE (no candidate moved between regions during evaluation).
- Clean SURVIVE: YES (composite verdict survives all 11 dimension tests).
- Failure modes observed: none of the 7 (Wrong dimensions, Rubber-stamping, Nitpicking, Dimension blindness, False convergence, Evaluation drift, Self-reference collapse) fired.

### Signal

**TERMINATE with ranked survivors.** The ranking:

1. **Top-line verdict** (MVL2+ wins) — the answer to "which one."
2. **Per-dimension verdicts + aggregation** — the answer to "why."
3. **Runner-attribution hypothesis + confidence** — addresses the user's framing of runner as operative.
4. **Actionability statement** — what the user does with the verdict.

All 13 survivors are part of the composite answer; the overall verdict needs all four ranking tiers to be load-bearing.

---

## Convergence Telemetry

- **Dimension coverage:** 11 dimensions (6 default + 5 project-specific risk).
- **Adversarial strength:** STRONG.
- **Landscape stability:** STABLE.
- **Clean SURVIVE:** YES.
- **Failure modes observed:** none.
- **Output:** PROCEED.

## Self-Assessment

PROCEED to CONCLUDE. The composite verdict is robust under user-concern-weighted scoring AND equal weighting; runner-attribution is honestly bounded; confidence is calibrated to the evidence quality; actionability is explicit with anti-overclaim guard. The 13 survivors form a coherent, multi-component answer to the user's "which / why / runner-attribution" question.
