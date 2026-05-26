# Exploration — /innovate Spec ↔ 19-Pair Human-Move Mapping

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-18_00-06__innovate_top5_improvements_from_pairs/_branch.md`

Context: Exploration phase. Save output here. Mode: artifact. Entry: signal-first (human-move-vs-mechanism mapping gaps). Goal: surface candidate improvement seeds — moves the human introduced that don't map onto `/innovate`'s existing 7 mechanisms.

---

## 1. Territory Overview

Two concrete artifacts, both consumed in full:

1. **`cognitive_harness/innovate/references/innovate.md`** — current canonical `/innovate` spec. ~440 lines.
2. **`devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/finding.md`** — prior 19-pair dataset + two-gap diagnosis.

Mode: artifact exploration; entry: signal-first. The signal: where do the 19 pairs' human-moves land in `/innovate`'s vocabulary, and where do they fall off the map?

Cycles run: 1 coarse scan (component inventory both sides) + 1 deep probe (per-pair mapping with mechanism-by-mechanism check) + 1 jump scan (T1 and T3 territories to verify the gap concentration in T2 and T4).

---

## 2. Inventory — Component Side A: `/innovate` Spec

### A.1 Two operations

- **Generation** — create novel content that didn't exist before.
- **Framing** — find/construct conditions under which a novel idea becomes valid.

### A.2 Seven mechanisms (4 Generators + 3 Framers)

| # | Mechanism | Role | What it does (spec quote) |
|---|---|---|---|
| 1 | **Lens Shifting** | Framer | "Changes the conditions under which the idea is evaluated. Same idea, different frame." |
| 2 | **Combination** | Generator | "Connects previously unrelated concepts to produce something neither contained alone." |
| 3 | **Inversion** | Framer | "Assumes the opposite of a current belief and explores what follows." Has depth-check refinement: invert again until system-level. |
| 4 | **Constraint Manipulation** | Framer | "Adds constraints that enable or removes constraints that block." |
| 5 | **Absence Recognition** | Generator | "Identifies what should exist but doesn't. Innovation from the negative space." |
| 6 | **Domain Transfer** | Generator | "Imports patterns, solutions, or principles from an unrelated field." |
| 7 | **Extrapolation** | Generator | "Extends an observed trend beyond its current range." |

### A.3 Supporting structure

- **Intuition** (3 components): Context / Valuation / Motivation. The human supplies; the discipline does not generate.
- **Seed** (7 types): Gap / Dissatisfaction / Constraint / Question / Signal / Failure / Collision. One seed per process.
- **Process** (3 phases): Seed → Generate (mechanisms) → Test → Iterate.
- **Tests** (5): Novelty / Scrutiny survival / Fertility / Actionability / Mechanism independence.
- **Failure modes** (6): Premature Evaluation / Single-Mechanism Trap / Early Frame Lock / Innovation Without Grounding / Mechanism Exhaustion / Survival Bias.
- **Refinements** (already in spec): Inversion depth-check; Combination scope-fidelity caveat; Absence Recognition redesign-level question; Phase-3 assembly check + axis coverage check; disposition categories (ACTIONABLE / DEFERRED with revival / RESEARCH FRONTIER).

### A.4 What the spec scopes IN

- Cognitive moves about the **content** under inquiry — the conceptual space being explored.
- Domain-agnosticism (the spec says so explicitly: "The framework is domain-agnostic. It works for business strategy, software architecture, product design, research, or any field where novel ideas are needed.")
- One seed per process; mechanisms applied to that one seed.
- Test-then-disposition cycle as terminator.

### A.5 What the spec implicitly scopes OUT

- Moves about **the procedure itself** — how the loop is running.
- Moves about **the system's own confidence** in its outputs.
- Moves across **multiple prior loop runs / prior findings** — the discipline operates on the current seed only.
- Replacement of the seed itself mid-run (the spec assumes the seed is given and stable).
- Mechanism-substitution as an explicit move (replacing the mechanism being pursued, not adding alternatives).

These scope-out items are the territory where the prior finding's Gap-1 (T2 under-elaborated) and Gap-2 (T4 absent) live.

---

## 3. Inventory — Component Side B: The 19 Pairs (Human-Move Inventory)

Each row: pair-number / T-tag / sub-type / one-line human-move / what `/innovate` mechanism (if any) could have produced it natively.

| # | T-tag | Sub-type | Human move | Native producer? |
|---|---|---|---|---|
| 1 | T1 | counter-example / dimensional | "md files at L0 = memory" — surfaced a concrete existing artifact contradicting an abstract absence claim | Partial — Absence Recognition surfaces missings; but verifying claimed-absence-against-existing-artifacts is the INVERSE direction. **GAP** |
| 2 | T1 | mechanism objection | "the 4-operations claim is wrong" — fact-checked a structural claim against actual structure | None. Inversion would flip the belief, not audit the count. **GAP** |
| 3 | T2 | existence-counter reframe | "warmup files ARE concept maps" — produced an existing artifact countering the "we need this new thing" frame | Partial — same shape as Pair 1 inverse. Absence Recognition finds gaps; no mechanism verifies claimed-gaps. **GAP** |
| 4 | T2 | fundamental-level reframing | "lets go back to fundamentals... what is exploring?" — pulled the inquiry UP from operational to definitional altitude | Partial — Lens Shifting changes conditions WITHIN a frame, not altitude OF the frame. **GAP** |
| 5 | T2 | wholesale rejection + redo | "prior mapping framework wrong, redo from scratch" — discarded the framework rather than reframing it | Partial — Inversion's depth-3 reaches "root-cause"; "discard and rebuild" is operationally distinct from "flip and explore." **GAP** |
| 6 | T3 | pattern-extension across multiple inquiries | sweep: cluster-wide defect across 6 navigation-memory inquiries → 6 loop_diagnose corrections | None. No mechanism operates across multiple prior inquiry outputs. **GAP** |
| 7 | T1 | pattern-naming | "Phantom Canon" — abstracted a recurring pattern across discipline outputs | None. Combination connects concepts within a run; pattern-naming-across-runs is meta. **GAP** |
| 8 | T2 | stage-level reframing (WEAK) | pre-vs-post-branch L1 stage shift | Lens Shifting could plausibly produce — partial coverage |
| 9 | T1 | dimensional correction | "budget-vs-coverage" — surfaced a missing TRADE-OFF AXIS | Partial — Absence Recognition might find missing things, but missing AXES (tensions between two values) is a specific shape. **GAP** |
| 10 | T1 | mechanism-level correction | "boost-coverage → selection-mechanism" — substituted one mechanism for another | Partial — Combination at a stretch (substitute = combine new mechanism). Subtle |
| 11 | T1 | edge-case probe | "type-key multi-value case" — surfaced a specific implementation edge case | Absence Recognition could produce — close coverage |
| 12 | T2 | question-replacement | "protocol/discipline → depth+answer production" — substituted the inquiry-question entirely | None. All mechanisms operate ON the seed; none replace it. **GAP** |
| 13 | T2 | frame replacement | "factoring → holistic understanding" — replaced one frame with another | Lens Shifting could produce — covered |
| 14 | T2 | structural reframing | "navigate = separate discipline" — architectural-level reframe cascaded from prior correction | Combination + Lens Shifting jointly could reach — partial coverage |
| 15 | T2 | verification-request-as-correction | "verify whether assistant's confident utterance is actually true" — meta-move on the system's own confidence | None. No mechanism targets the system's own confidence for verification. **GAP** |
| 16 | T3 | scope-shrinking ("minimal") | pruned an over-elaborated prior to minimal | Constraint Manipulation (add "minimum" constraint) — covered |
| 17 | T3 | pattern-extension (1 → 3 sources) | extended the same fault-pattern to 3 sources from 1 | Combination + Domain Transfer jointly could reach — partial coverage |
| 18 | T4 | intervention-shape correction | "REPAIR not ADD-TEST" — directive about the loop's next action-type | None. No mechanism produces procedural directives. **GAP** |
| 19 | T4 | methodology directive META | "contrarian rethink in weighted innovation mode" — re-run yourself in different mechanism-mode | None. No mechanism produces "change how the discipline itself runs." **GAP** |
| 20 | T4 | specific-failure-mode identification | "over-upstream-marks" — named a specific failure mode in prior's output | None. The discipline has a failure-mode list but no mechanism to APPLY that list to label prior outputs. **GAP** |

(Note: numbering above is sequential per-row, not the pair-IDs from the prior finding. Pair 19-sweep is row 6 here.)

### B.1 Summary by T-category coverage

| T-category | Pairs in dataset | Covered by existing mechanism | Partially covered | Gap |
|---|---|---|---|---|
| **T1 generative-content** | 6 (rows 1, 2, 7, 9, 10, 11) | 1 (row 11 edge-case probe) | 2 (rows 1, 9 partial) | **3** (rows 2, 7, 10) |
| **T2 frame-reshape** | 8 (rows 3, 4, 5, 8, 12, 13, 14, 15) | 2 (rows 8, 13) | 2 (rows 5, 14) | **4** (rows 3, 4, 12, 15) |
| **T3 scope-reshape** | 3 (rows 6, 16, 17) | 1 (row 16) | 1 (row 17) | **1** (row 6) |
| **T4 methodology directive** | 3 (rows 18, 19, 20) | 0 | 0 | **3** (all) |

**Total gaps: 11 of 20 pairs. Partial coverage: 5. Clean coverage: 4.**

T4 has the most acute coverage failure (0 of 3 covered). T2 has the most absolute gap count (4 of 8). T1 has surprising gaps despite Absence Recognition's broad scope (3 of 6). T3 is mostly covered by Constraint Manipulation.

---

## 4. Candidate Improvement Seeds (S1-S10)

Cognitive moves observed in pairs that don't map onto any existing `/innovate` mechanism. Each is a candidate for the top-5.

### S1 — Existence-counter / claimed-absence verification

**Move shape:** When the loop produces an abstract claim about what's missing or what's needed, check whether the project's existing artifacts already contain instances that contradict the claim.

**Evidence (pairs):** 1 (md files at L0), 3 (warmup files ARE concept maps).

**Why it's not covered:** Absence Recognition finds gaps from negative space. This is the inverse — verifying a claimed gap against actual existing artifacts. Different cognitive direction.

**Domain-agnostic:** YES — works for any field where claims about "what's missing" can be checked against accumulated artifacts (codebase, literature, prior decisions, anything inventoryable).

### S2 — Altitude-shift / foundational pull-back

**Move shape:** When the inquiry is at an operational/tactical depth, pull it back to definitional/foundational altitude — ask "what IS this thing at its core level?" before proceeding.

**Evidence (pairs):** 4 (back-to-fundamentals — "what is exploring? it is mapping correct?").

**Why it's not covered:** Lens Shifting changes the lens (conditions) within a fixed altitude of analysis. Altitude-shift changes the LEVEL of analysis itself — moving from "how do we do X?" to "what IS X?" Distinct cognitive move.

**Domain-agnostic:** YES — applies to any inquiry where tactical work can run aground on undefined fundamentals.

### S3 — Question-replacement / seed-substitution

**Move shape:** Substitute a different inquiry-question for the current one — recognize that the wrong question is being asked.

**Evidence (pairs):** 12 (protocol/discipline → depth+answer production).

**Why it's not covered:** All 7 mechanisms operate ON the seed; none replace it. The discipline assumes the seed is given and stable. The user often replaces the seed mid-conversation when they realize the current question is wrong.

**Domain-agnostic:** YES — applies to any inquiry where the right question is itself uncertain.

### S4 — Cross-loop pattern recognition

**Move shape:** Look at multiple prior inquiry findings / discipline outputs and name recurring patterns or cluster-wide defects.

**Evidence (pairs):** 6 (sweep across 6 inquiries), 7 (Phantom Canon pattern named from discipline outputs), 20 (over-upstream-marks failure-mode named from prior).

**Why it's not covered:** All 7 mechanisms operate on the current seed only. None operate across prior loop runs. Pattern-recognition at the loop-history level is structurally outside the discipline's input contract.

**Domain-agnostic:** YES — applies to any project that accumulates prior outputs as data.

### S5 — Wholesale rejection + redo

**Move shape:** Judge the prior framework wrong and demand a redo from scratch — discard rather than refine.

**Evidence (pairs):** 5 (prior_mapping_understanding_was_wrong_redo).

**Why it's not covered:** Inversion's depth-3 reaches "root-cause-level" which approaches this, but the spec's framing is "flip and explore what follows" — not "discard the conceptual space and rebuild from scratch." Operationally distinct.

**Domain-agnostic:** YES — applies whenever a framework's foundational assumptions are wrong.

### S6 — Procedural-meta directive

**Move shape:** Generate proposals about HOW the loop / inquiry / discipline should run next, not WHAT content to produce. Targets the procedure, not the conceptual space.

**Evidence (pairs):** 18 (REPAIR-not-ADD-TEST), 19 (contrarian rethink mode).

**Why it's not covered:** All 7 mechanisms operate on conceptual content. The closest meta-level moves in `/innovate` are Constraint Manipulation and Inversion — but they reshape the conceptual space, not the procedural one. Procedural-meta is structurally absent.

**Domain-agnostic:** YES — the move is "change the procedure," domain-independent.

### S7 — Tension-surface identification

**Move shape:** Recognize when two values or dimensions are in tension and surface that as a missing axis to evaluate.

**Evidence (pairs):** 9 (budget-vs-coverage).

**Why it's not covered:** Absence Recognition finds missing things; this finds missing AXES — specifically the trade-off relationship between two values. A specialized sub-form of Absence Recognition, distinct enough to warrant naming.

**Domain-agnostic:** YES — trade-off identification is universal.

### S8 — Self-confidence verification

**Move shape:** Recognize when the system's own confident assertion should be subjected to structural check rather than accepted as the basis for downstream work.

**Evidence (pairs):** 15 (verify navigation=explore claim).

**Why it's not covered:** The 5-test cycle tests outputs for novelty/survival/fertility/actionability/independence, but does not specifically target the *confidence-trustworthiness of the output* against external check. The discipline trusts its own post-test outputs.

**Domain-agnostic:** YES — any output-producing system has confidence-calibration risk.

### S9 — Mechanism-substitution

**Move shape:** Replace the mechanism-of-pursuit with a different mechanism when the current one is the wrong tool.

**Evidence (pairs):** 10 (boost-coverage → selection-mechanism).

**Why it's only partially covered:** Combination at a stretch (substitute = combine new mechanism into the pursuit). The user's move was more specific: "the mechanism you're using is wrong; use this other mechanism." Distinct shape; possible overlap with Combination.

**Domain-agnostic:** YES — applicable to any mechanism-driven process.

**Note:** This may be lower-priority than S1-S8 because Combination at a stretch covers it.

### S10 — Failure-mode self-labeling

**Move shape:** Apply the discipline's own failure-mode list to label specific failures in prior outputs (the discipline's own or other disciplines').

**Evidence (pairs):** 20 (over-upstream-marks named as a specific failure mode).

**Why it's not covered:** The discipline has a failure-mode list (used during a run for self-recognition) but no mechanism that applies the list externally to label prior outputs. The labeling is a meta-move on prior loop runs — overlaps with S4 (cross-loop awareness) and S6 (procedural-meta).

**Domain-agnostic:** YES — failure-mode labeling is generic to any discipline that has named failure modes.

**Note:** Significant overlap with S4 and S6 — may consolidate.

---

## 5. Signal Log

| # | Signal | Type | Action |
|---|---|---|---|
| S-1 | T4 has 0 coverage (3/3 pairs in gap) — strongest gap signal | Density + Tension | Top-priority improvement target |
| S-2 | T2 has 4 gap pairs — second-largest gap region | Density | High-priority improvement target |
| S-3 | T1 has 3 gap pairs despite Absence Recognition's broad scope — Absence Recognition is doing less than the spec suggests | Tension | Refine Absence Recognition |
| S-4 | "Across prior loop runs" is an entirely absent input contract — none of the 7 mechanisms takes multi-run history as input | Absence | New input contract needed |
| S-5 | "Procedural-meta" is entirely absent territory — all 7 mechanisms scope to conceptual content | Absence | New mechanism category needed |
| S-6 | "Existence-counter" (verify claimed-absence) is the INVERSE of Absence Recognition — same generator-pair shape | Novelty | New mechanism within Generator family |
| S-7 | "Altitude-shift" is structurally distinct from Lens Shifting — lens changes vs altitude changes | Novelty | New mechanism within Framer family |
| S-8 | Some candidate seeds heavily overlap (S4, S6, S10) — consolidation needed in downstream stages | Tension | Sensemaking should collapse |
| S-9 | The discipline's "Intuition" section already names the human as the source of valuation/motivation — there's an INTAKE mechanism missing for ELICITING those signals more rigorously | Absence | Possible meta-improvement |

---

## 6. Confidence Map

| Region | Confidence | Justification |
|---|---|---|
| /innovate spec component inventory | **confirmed** | Direct read of canonical spec |
| 19-pair human-move inventory | **confirmed** | Inherited from prior finding + spot-verified in this inquiry's earlier work |
| Per-pair mapping (covered / partial / gap) | **scanned → confirmed** | Each row reasoned through; gaps are structural (not just "didn't notice") |
| T4 gap (3/3 absent) | **confirmed** | Mechanism-by-mechanism check confirms no producer |
| T2 gap (4/8 absent) | **confirmed** | Per-pair mechanism check |
| Candidate seeds S1-S10 | **scanned** | Each named with evidence + reasoning; some overlaps flagged |
| Overlap between S4 + S6 + S10 | **scanned** | Three seeds all touch loop-meta-history; collapse should be Sensemaking's call |
| S9 partial-coverage by Combination | **inferred** | Subtle judgment call; flag to Critique |

### Confirmed-absent regions

- **Cross-loop-history input contract** is confirmed-absent. No mechanism in the spec mentions reading prior inquiry findings.
- **Procedural-meta output** is confirmed-absent. No mechanism produces "change how the loop runs" as a candidate output.
- **External-confidence verification** is confirmed-absent. The 5-test cycle does not target the system's own output-confidence against external check.
- **Multi-seed / seed-replacement workflow** is confirmed-absent. The spec assumes one stable seed per process.

These four absent regions are the load-bearing improvement territory.

---

## 7. Frontier State

**STABLE.** Two cycles + jump scan converged on a 10-candidate seed list (S1-S10) with consolidation hints (S4+S6+S10 may merge; S9 may drop). T1 and T3 territories' jump-scan revealed Absence Recognition and Constraint Manipulation cover most of those gaps; the load-bearing improvements live in T2 and T4 territory as predicted by the prior finding.

Convergence check:
- Frontier stability: ✓ (additional scans would refine seed wording, not surface new categories).
- Declining discovery rate: ✓ (second cycle deepened S1-S10, no new seeds).
- Bounded gaps: ✓ (T1/T3 gaps minor; T2/T4 gaps systematic and named).
- Jump scan: ✓ (T1/T3 territories checked; confirmed mostly covered).

---

## 8. Gaps and Recommendations — Frontier Questions for Downstream

### To Sensemaking

1. **Collapse seeds S1-S10 into a clean set.** S4 + S6 + S10 all touch "the discipline operates only on the current seed; meta-moves over prior loop history are absent." Decide whether they collapse into one umbrella (e.g., "loop-meta-awareness mechanism") or stay distinct.
2. **Decide categorization shape.** Do new mechanisms enter as: (a) additional members of the existing Generator/Framer set; (b) sub-types within Lens Shifting / Absence Recognition; (c) a new third category (e.g., "Procedural Meta-Mechanisms")? Each has implications.
3. **The Intuition section already names valuation/motivation as human-supplied** — should there be a more rigorous ELICITATION step, or is this out of scope for a mechanism-level improvement?
4. **The S9 mechanism-substitution overlap with Combination** — is the partial overlap close enough to drop S9, or is the move structurally distinct enough to name separately?

### To Decomposition

- The improvement-list deliverable is small (top 5 from 10 candidates). Light decomposition expected.
- One natural partition: (a) T2 framer-suite expansion (S1, S2, S3, S5, S7 — 5 candidates within T2 territory); (b) T4 procedural-meta + cross-loop awareness (S4, S6, S8, S10 — 4 candidates within T4 + loop-meta territory); (c) optional content-mechanism refinements (S9). Top-5 selection will likely draw from (a) and (b), since (c) is partially-covered.

### To Innovation

- Produce the top-5 improvement proposals with: name / mechanism-shape / which existing /innovate component (mechanism or operation or test or failure-mode) it slots into / which pairs it would catch / one-line domain-agnostic justification.
- Apply minimum coverage (1 Generator + 1 Framer) to the top-5 selection if the choice between candidates is non-obvious.

### To Critique

- Adversarially test each top-5 candidate against: domain-agnosticism (will it work outside Homegrown's discipline-redesign context?); structural distinctness from existing mechanisms (does it duplicate?); breadth (how many pair-rows does it cover?); actionability (can a spec-edit inquiry implement it?).
- Confirm the consolidated emergent claim from the prior finding (Gap-1 + Gap-2) survives the top-5 selection.
- Watch for survival bias: if the top-5 chosen are the "comfortable" extensions of existing mechanisms while the most disruptive candidates (S4 cross-loop awareness; S6 procedural-meta as a new category) are demoted, prosecute that choice.

---

## 9. Telemetry

| Field | Value |
|---|---|
| Mode | artifact |
| Entry point | signal-first (gap mapping) |
| Cycles run | 3 (coarse scan + deep probe + jump scan) |
| Artifacts read | 2 (spec + prior finding) |
| Spec components inventoried | 6 categories (operations, mechanisms, seeds, intuition, process, tests, failure modes, refinements) |
| Pair human-moves inventoried | 20 row-instances (covering the 19 distinct pair-records; Pair 19 sweep is 1 row representing 6 components) |
| Coverage breakdown | 4 clean / 5 partial / 11 gap |
| Candidate improvement seeds | 10 (S1-S10) with overlap flags |
| Confirmed-absent regions | 4 (cross-loop history; procedural-meta; external-confidence verification; multi-seed/seed-replacement) |
| Frontier state | stable |
| Discovery rate | declining |
| Convergence — frontier stability | ✓ |
| Convergence — declining discovery rate | ✓ |
| Convergence — bounded gaps | ✓ |
| Jump scan performed | ✓ (T1 and T3 territory check; confirmed mostly covered by existing mechanisms) |
| Failure modes checked | premature depth ✓ avoided; surface-only scanning ✓ avoided (deep mechanism-by-mechanism check); false confidence ✓ jump-scanned; premature termination ✓ all 3 criteria met; re-exploration ✓ leveraged prior finding rather than redoing; completeness bias in possibility mode N/A (artifact mode); open→closed drift ✓ annotations at labeling level; silent boundary-discovery ✓ boundary pre-specified; negative-space silent drop ✓ confirmed-absent regions named explicitly; inadequate per-item depth ✓ each row carries human-move + native-producer judgment |

---

## 10. Self-Assessment

**PROCEED.** 10 candidate improvement seeds (S1-S10) surfaced with full mechanism-mapping evidence. Coverage of the prior finding's two-gap diagnosis is complete — T2 gaps map to S1, S2, S3, S5, S7; T4 gaps map to S4, S6, S8, S10. The territory is structured for Sensemaking to commit a clean collapse (likely consolidating S4+S6+S10 into one loop-meta umbrella) and Decomposition to partition the top-5 selection work. Innovation will produce 5 named proposals; Critique will adversarially test them.

Two flags for downstream attention:
- **S9 (mechanism-substitution)** partially overlaps with Combination — Sensemaking should decide drop-or-keep.
- **Intuition elicitation** (S-9 in signal log) is a meta-improvement adjacent to but distinct from mechanism additions; Sensemaking should adjudicate whether it belongs in scope.
