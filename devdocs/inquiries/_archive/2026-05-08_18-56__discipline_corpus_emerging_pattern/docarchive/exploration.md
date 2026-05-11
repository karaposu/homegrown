# Exploration — Discipline-corpus emerging pattern

## User Input

```
Across the cumulative bolted-on rules, addendums, and cross-cutting checks added
to the homegrown discipline specs, what unnamed pattern is emerging? Map the
candidate patterns; flag evidence strength and adjacency.
```

## Mode and Entry

- **Mode:** hybrid (artifact — the spec files are concrete; possibility — "candidate named patterns" is conceptual)
- **Entry point:** signal-first. Eight candidate patterns named in `_branch.md`; scan outward from each.

---

## 1. Territory Overview

The territory is the homegrown discipline-spec corpus — eight discipline pairs (`SKILL.md` + `references/X.md`) plus the surrounding protocols (`CONCLUDE`, `RESUME`, `branch_inquiry`), the placement convention (`enes/discipline_rule_placement.md`), the discipline taxonomy (`enes/discipline_taxonomy.md`), and the regression model (`enes/regression/desc.md`).

Two structural observations up front:

1. **The bolted-on rules across the corpus share a remarkably consistent shape** (bold name prefix + trigger condition + required action + failure-mode link). 8 of 9 catalogued rules have all four elements; this is a strong pattern, not a coincidence.

2. **Three patterns from the candidate list collapse into one host pattern.** Bolted-on rule as primitive (#1), multi-axis coverage (#4), and failure-mode prevention map (#5) are not three separate patterns — they are one pattern viewed from three angles (the host primitive, one of its types, and its inverse navigation direction).

---

## 2. Inventory — Bolted-on rules per discipline

| Discipline | Bolted-on rule | Step / Component | Failure-mode link |
|---|---|---|---|
| explore | Type-Aware Probing | Probe component | Surface-Only Scanning (FM #2) |
| explore | Coarse Scan in Layered Territories | Resolution Progression | Premature Depth (FM #1) |
| sense-making | Phase / Calibration-State perspective | Phase 2 Perspective Checking | Perspective Blindness (FM #4) |
| sense-making | Load-bearing concept test | Phase 3 Ambiguity Collapse | Premature Stabilization (FM #2) |
| sense-making | Specific-vs-pattern recognition cue | Phase 3 Ambiguity Collapse | Premature Stabilization (FM #2) |
| decompose | Determination-mechanism piece check | Step 7 Self-Evaluate | Missing Pieces (FM #4) |
| td-critique | Project-specific risk dimension check | Phase 0 Dimension Construction | Dimension Blindness (FM #4) |
| td-critique | Multi-axis prosecution depth check | Phase 2 Adversarial Evaluation | Rubber-Stamping (FM #2) |
| innovate | Output disposition categories | Phase 3 Test | (no explicit link) |
| innovate | Axis coverage check | Phase 3 Test | (no explicit link) |
| comprehend | Paradigm Projection (added as 8th failure mode, post-hoc) | Failure Modes section | (this IS the failure mode itself, accreted) |

**Common shape across 9 rules** (all 9 of explore/sense-making/decompose/td-critique have explicit failure-mode link; innovate's two are the only without):

- **Bold name prefix** (`**Type-Aware Probing.**`, `**Load-bearing concept test.**`, etc.) — uniformly used
- **Trigger condition** ("when X applies / when Y is observable / when the territory has Z")
- **Required action** ("must include / must check / must construct...")
- **Failure-mode link** ("Failing this is an instance of [named failure mode]") — present in 8/10 rules; only innovate's two rules omit explicit linking

---

## 3. Inventory — Discipline output structure

Examining each discipline's "Final Deliverable" / output-writing instructions:

| Discipline | Has B2 summary table at file end? | Has explicit verdict line (PROCEED/FLAG/RE-RUN)? | Output-section structure |
|---|---|---|---|
| explore | YES | NO (has 3 convergence criteria, qualitative) | 6 sections (Territory / Inventory / Signal Log / Confidence Map / Frontier State / Gaps) |
| sense-making | **NO** (exception) | NO (has Saturation Indicators, "indicators not gates") | SV1→SV6 progression (different shape) |
| decompose | YES | NO (has self-eval with PASS/FAIL per dimension; no overall) | 5 sections (Coupling Map / Question Tree / Interface Map / Dependency Order / Self-Evaluation) |
| innovate | YES | YES (Mechanism Coverage Telemetry → PROCEED/FLAG/RE-RUN) | Per-mechanism candidates + Tests + Telemetry |
| td-critique | YES | YES (Convergence Telemetry → PROCEED/FLAG/RE-RUN) | 5 sections (Dimensions / Landscape / Verdicts / Coverage / Signal) |
| comprehend | YES | NO (confidence map, no verdict line) | CV1→CV5 progression |
| reflect | YES | NO | Per-step observations + Memory cells + Process frontier |
| navigation | **NO** (exception) | YES (Navigation Telemetry → COMPLETE/FLAG/THIN) | Map with route cards + Excluded section |

**Two structural observations:**

- The B2 summary table is in 6/8 disciplines; sense-making and navigation are the exceptions. (Sense-making's SV-progression and navigation's route-card structure both produce different end-of-file shapes.)
- The verdict line is in only 3/8 disciplines (innovate, td-critique, navigation). The other 5 either have qualitative self-assessment (saturation indicators, convergence criteria) or none. **This is a real gap relative to `homegrown/protocols/resume.md`'s expectations**, which calls for a `**Overall: PROCEED**` line and falls back to "treat as PROCEED" when missing.

---

## 4. Pattern-by-pattern probes

### Pattern 1 — Bolted-on rule as primitive (HIGH evidence)

**Pro-formalize:** lifting the shape to a corpus primitive (a "Step Rule" or "Refinement Rule") gives a machine-discoverable format, bidirectional cross-references, easier audit ("does every named failure mode have at least one preventing rule? are there orphan rules?"), and a template for adding new rules. The shape is already there in 8/10 instances.

**Anti-formalize:** at early calibration, premature codification might suppress useful variations. But the variation across 10 instances is small; the shape is genuinely shared.

**Adjacent patterns:** subsumes #4 (multi-axis coverage = one kind of bolted-on rule) and produces #5 (failure-mode prevention map) as a byproduct.

**Verdict:** HIGH evidence; HIGH formalization payoff; ready to formalize.

### Pattern 2 — Per-discipline output protocol (MEDIUM evidence)

**Pro-formalize:** lift the output-writing pattern (record user input → save to canonical filename → run telemetry → update state → structural check) to a shared protocol analogous to CONCLUDE.

**Anti-formalize:** much of this is **already at the runner level** (MVL+ Workspace Invariant: "load only the current discipline's spec, write only the canonical output file, attempt structural check, update _state.md"). Lifting risks re-stating what the runner already enforces.

The **discipline-specific body** of each output (SV-progression, fitness landscape, question tree, etc.) genuinely differs and cannot be unified without damage. What CAN be unified is the **framing** (input record + canonical filename + telemetry self-check + state update + structural check), which is mostly already at the runner level.

**Adjacent patterns:** depends on #3 (output contract); the protocol enforces the contract.

**Verdict:** MEDIUM evidence; LOW-MEDIUM formalization payoff. Most of this is already there; the gap is small.

### Pattern 3 — Discipline output contract (HIGH evidence)

**Pro-formalize:** `homegrown/protocols/resume.md` explicitly depends on every discipline producing a `**Overall: PROCEED/FLAG/RE-RUN**` line and currently falls back to "treat as PROCEED" with a NOTE for missing verdicts. Closing this gap (forcing every discipline output to expose a verdict) makes resume.md cleaner and makes telemetry-aware iteration a first-class capability.

**Anti-formalize:** disciplines whose self-assessment is genuinely qualitative (sensemaking's saturation indicators are explicitly "not gates") may produce verdict lines that the runner can't trust. But: a verdict can carry hedging (e.g., "PROCEED — saturation moderate") without forcing false precision. The contract is "produce a verdict line"; the line itself can express uncertainty.

**Adjacent patterns:** the contract is the formal half of #2 (per-discipline output protocol).

**Verdict:** HIGH evidence; HIGH formalization payoff; concrete artifact = update each discipline spec to produce a verdict line.

### Pattern 4 — Multi-axis coverage as cross-discipline rule (HIGH evidence as instance, MEDIUM as standalone)

**Evidence:** appears as bolted-on rules in td-critique (multi-axis prosecution), innovate (axis coverage), sensemaking (load-bearing concept test sub-aspects), decompose (top-down + bottom-up validation = two-axis structural check).

**Pro-formalize:** a corpus-wide rule "every structured-stance output identifies its orthogonal axes and verifies coverage on each."

**Anti-formalize:** "axis" is fuzzy; what counts varies by discipline. Lifting risks a vague rule.

**Verdict:** HIGH evidence as a cross-discipline phenomenon, but **subsumed by Pattern 1** — the multi-axis check is one type of bolted-on rule. Formalizing #1 covers this as a sub-case.

### Pattern 5 — Failure-mode prevention map (HIGH evidence)

**Evidence:** the failure-mode link in 8/10 bolted-on rules creates an implicit rule⇄failure-mode mapping. Currently navigable rule → failure mode (rule says "this prevents X"). NOT navigable failure mode → rules.

**Pro-formalize:** the inverse direction (failure mode → list of preventing rules) is highly useful when debugging discipline output ("did Premature Stabilization fire? what rules across the corpus prevent it?"). Currently you'd grep.

**Anti-formalize:** committing to a representation format (e.g., a "Prevention Rules" subsection in each failure mode) commits to drift maintenance.

**Adjacent patterns:** **byproduct of Pattern 1**. Formalizing #1 with a uniform shape lets a tool generate the inverse map.

**Verdict:** HIGH evidence; HIGH payoff; tightly coupled to #1.

### Pattern 6 — Fractal cognitive deliverable shape (MEDIUM evidence)

**Evidence:** finding.md has the shape Question → process → verdict → open questions. Discipline outputs each carry a partial shape. CONCLUDE compiles partials into the full.

**Pro-formalize:** a shared template lets new disciplines drop in and lets CONCLUDE simplify.

**Anti-formalize:** the shape is partial; sensemaking's SV-progression and navigation's route-cards genuinely don't fit a uniform template. Forcing the shape damages discipline-specific structure.

**Verdict:** MEDIUM evidence; the fractal is real at the meta level (every cognitive deliverable has framing + body + verdict + open questions) but enforcement risks damage to discipline integrity.

### Pattern 7 — Cross-discipline interaction placement (LOW evidence)

**Evidence:** one explicit instance — "Pipeline-Early /intuit Interaction" sections placed at the affected discipline's home (per `enes/discipline_taxonomy.md`). N=1.

**Verdict:** LOW evidence (single instance). Defer until a second cross-discipline interaction emerges.

### Pattern 8 — Load-bearing concept as primitive (HIGH usage, LOW formalization payoff)

**Evidence:** "load-bearing" is used 30+ times across the corpus. Sensemaking has the canonical definition; other disciplines use it without re-defining. The term works as informally shared vocabulary.

**Verdict:** HIGH usage; LOW formalization payoff. The term works fine informally. Formalization would add a file without changing behavior.

---

## 5. Signal Log

| Signal | Region | Probed? | Strength |
|---|---|---|---|
| Bolted-on rules share a 4-element shape across 9 instances | #1 | YES | STRONG |
| 8/10 bolted-on rules have explicit failure-mode link | #5 | YES | STRONG |
| innovate's two bolted-on rules lack explicit failure-mode link (outliers) | #1 / #5 | YES | NOTED — partial-coverage signal |
| Verdict line missing in 5/8 disciplines | #3 | YES | STRONG |
| Sense-making and navigation are structural exceptions (no B2 summary table) | #6 | YES | NOTED — these disciplines have alternative final-section shapes |
| MVL+ Workspace Invariant already covers most of "per-discipline output protocol" framing | #2 | YES | NOTED — reduces #2's payoff |
| comprehend's Paradigm Projection (FM #8) was accreted later than the original 7 — same accretion pattern at the failure-mode level | #1 | YES | NOTED — accretion is corpus-wide, not just at step rules |
| sensemaking's three bolted-on rules cluster at Phase 3 (hot spot) | #1 | PARTIAL | MEDIUM — confirms hot-spot accumulation from prior inquiry |

**Signals deferred:**

- Whether the missing verdict line in 5 disciplines is deliberate (qualitative) or a gap to close — sensemaking depends on this
- Whether any other corpus accretion patterns exist that I haven't catalogued (e.g., in MVL+ rules accumulation, in CONCLUDE template growth)

---

## 6. Confidence Map

| Pattern | Evidence | Formalization payoff | Phase-fit | Status |
|---|---|---|---|---|
| #1 Bolted-on rule as primitive | HIGH | HIGH | Ready | **Top candidate** |
| #2 Per-discipline output protocol | MEDIUM | LOW-MEDIUM | Already partial at runner | Subsumed by #3 + existing runner |
| #3 Discipline output contract | HIGH | HIGH | Ready (resume.md depends on it) | **Top candidate** |
| #4 Multi-axis coverage | HIGH (as instance) | MEDIUM | Subsumed by #1 | Sub-pattern of #1 |
| #5 Failure-mode prevention map | HIGH | HIGH | Byproduct of #1 | **Top candidate** (linked to #1) |
| #6 Fractal deliverable shape | MEDIUM | MEDIUM | Risk of forced fit | Defer; observe |
| #7 Cross-discipline interaction placement | LOW (N=1) | LOW | Premature | Defer; revival at N≥2 |
| #8 Load-bearing concept primitive | HIGH (usage) | LOW | Works informally | Defer; works as-is |

**Confirmed absences (jump scan):**

- I performed a jump scan toward "are there bolted-on rules in MVL+ / CONCLUDE / RESUME themselves?" Yes — the MVL+ Workspace Invariant is itself a bolted-on rule pattern (8-bullet "Invalid compact execution patterns"). This corroborates that the pattern is **corpus-wide**, not just discipline-internal. The runners and protocols also accrete refinements at canonical points.
- I performed a jump scan toward "do bolted-on rules ever appear OUTSIDE the references/X.md files?" Yes — the MVL+ Workspace Invariant lives in the SKILL.md (runner level). The pattern crosses spec/runner boundaries.

---

## 7. Frontier State

**Stable.** Eight candidate patterns mapped with evidence and adjacency. Three top candidates identified (#1, #3, #5; with #1 and #5 tightly coupled). The factual map is complete enough for sensemaking to collapse to stable understanding.

**Discovery rate:** declining. Late cycles confirmed earlier signals (e.g., shape consistency across 10 bolted-on rules; the runner-level appearance of the same pattern). No new structural surprises in the last cycle.

**Bounded gaps:** remaining uncertainty is about *whether and how to formalize* (which is sense-making's job), not about *what's in the corpus*.

---

## 8. Gaps and Recommendations

### Three primary handoff seeds for sense-making

1. **Patterns #1 and #5 are one structural object viewed from two angles.** Anchor sense-making around: "naming the bolted-on rule primitive automatically produces the failure-mode prevention map as the inverse navigation direction." These should be considered together, not separately.

2. **Pattern #3 (discipline output contract) is independent but equally ready.** Anchor sense-making around: "resume.md already encodes the contract aspirationally; closing the gap in the disciplines' output formats is the load-bearing move."

3. **Pattern #2 (user's candidate) is partly already there.** The MVL+ Workspace Invariant covers most of what "per-discipline output protocol" would do. Sense-making should examine whether the residual gap is large enough to lift, or whether a small addendum to the Workspace Invariant suffices.

### Frontier observations (out of primary scope)

- The bolted-on rule pattern crosses runners and protocols (MVL+ Workspace Invariant; CONCLUDE's accreted style rules). Formalizing #1 may want to extend to runner level, not just discipline level.
- Innovate's two bolted-on rules lack explicit failure-mode links (the outliers in #1's audit). Either the rules are anchoring something that isn't a failure mode, or the failure-mode links should be added. Sub-question for innovation phase to consider.
- The "fractal cognitive deliverable shape" (#6) might be liftable as a meta-level observation without imposing structural change — name it but don't enforce it. Innovation phase can propose this.

### Honest limits

- This exploration is corpus-internal. Every claim about "this would help" rests on the spec corpus's own framing. No empirical evidence that formalizing #1 actually reduces failure rates.
- The "shape consistency across 10 bolted-on rules" claim depends on my counting; a different reader might split or merge differently. Sensemaking should test the shape-consistency claim against the strongest counter-reading.
- Pattern #3's "verdict line missing in 5/8 disciplines" is observable, but the *cost* of that gap (in actual resume.md usage) is unmeasured. Conservative-default reasoning applies.

---

## Final Note

The exploration's most important finding: **patterns #1, #4, #5 collapse into one host primitive viewed from three angles**. Naming it produces:
- Pattern #1's named primitive (the host: a "Step Rule" or "Refinement Rule")
- Pattern #5's inverse map (failure-mode → preventing rules) for free
- Pattern #4's multi-axis check as a recognized sub-type of step rule

Pattern #3 is independent but equally ready. The user's candidate (#2) is partially redundant with the runner level; sense-making should test whether the residual gap warrants its own protocol.

Sense-making should converge on **two named patterns** (the bolted-on rule primitive + the discipline output contract), not three or four.
