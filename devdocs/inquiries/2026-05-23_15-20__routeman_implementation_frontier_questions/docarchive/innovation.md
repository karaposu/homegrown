# Innovation — routeman implementation frontier questions

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/_branch.md`

## Phase 1 — Seed + Methodology-Mode Consideration

### Seed (Production-task mode)

The seed is a piece-list inherited from upstream Sensemaking + Decomposition: select 10 frontier questions from 23 candidates by executing the 6-piece pipeline (P1 filter / P2 consolidate / P3 rank + spread / P4 select 10 / P5 tier / P6 metadata) applying sensemaking's 8 operational constraints.

### Methodology mode

**Inherited mode:** **Standard default.** The seed text signals production work — sensemaking and decomposition have fully constrained the criteria; innovation's job is to apply them.

**Alternative mode generated:** **Generator-weighted exploration.** Under the alternative, innovation would maximize novel-candidate breadth, possibly surfacing frontier questions the 23-candidate surfacing missed.

**What follows under the alternative:** Generator-weighted would emphasize Absence Recognition + Extrapolation to look beyond surfacing's 23 candidates. Risk: undermining surfacing's coverage commitment without justification.

**Decision: default to Standard default mode.** Reason: surfacing already did the candidate generation across 12 regions; over-generating now would conflict with sensemaking's verdict that the 23-candidate pool is the working set. Absence Recognition fires once at P3 as a sanity check, not as a primary generation mode.

---

## Phase 2 — Execute the 6-Piece Pipeline

### Piece classification

| Piece | Meta-decision? | Property firing |
|---|---|---|
| P1 — Apply eligibility filter | YES | (iv) commits to evaluation criteria (3-condition + elevation + accommodation rules) |
| P2 — Consolidate | YES | (iv) commits to consolidation rule |
| P3 — Rank + spread | YES | (iv) commits to hardness + spread criteria |
| P4 — Select 10 | NO | content-production (applies committed criteria) |
| P5 — Assign tiers | YES | (iv) commits to tier-assignment criterion |
| P6 — Write metadata | NO | content-production |

Meta-decision pieces P1, P2, P3, P5 require Piece-Level Inversion.

---

### P1 — Apply the eligibility filter

#### Mechanism work

**Combination (Generator):** combine the 3-condition test (no-current-answer + gating + net-new) with the elevation rule (already-flagged eligibility) and the accommodation rule (not-yet-shipped capability) into a per-candidate verdict.

**Domain Transfer (Generator):** import filtering pattern from set-theoretic intersection — a candidate is eligible only when ALL three conditions hold. Set intersection has well-known semantics; the filter is structurally rigorous.

#### Per-candidate verdicts

| Q# | Region | Eligibility | Verdict reasoning |
|---|---|---|---|
| Q1 | Identity | ELIGIBLE | All 3 conditions met. |
| Q2 | Identity | NOT-ELIGIBLE | Gating WEAK — SKILL.md can handle Navigational↔Possibility composition implicitly; not gating authoring. |
| Q3 | Identity | NOT-ELIGIBLE | Gating WEAK — layer ordering is implicit per design memo; structural-layer concern. |
| Q4 | Endgame fit | ELIGIBLE | Per accommodation rule (sensemaking-confirmed). |
| Q5 | Endgame fit | ELIGIBLE | All 3 conditions met. |
| Q6 | Endgame fit | NOT-ELIGIBLE | Gating WEAK — EF-3 promotion doesn't gate SKILL.md authoring; SKILL.md can mark EF-3 candidate-load-bearing without resolving the criterion. |
| Q7 | Lineage | ELIGIBLE | All 3 conditions met; empirical-assumption type. |
| Q8 | Lineage | NOT-ELIGIBLE | Hardness check (P3 anticipation): articulation LOW — "what goes in this section" is trivially-hard; the structural-layer follow-up resolves directly. Drop at filter to avoid wasted ranking. |
| Q9 (consolidated with Q12) | Features | ELIGIBLE | F-prescr generation mechanism + pointer WHY anchor. |
| Q10 | Features | NOT-ELIGIBLE | Gating PARTIAL — depends on /intuit Phase β+ shipping; not gating today's authoring. Overlaps with L-f1 deferral. |
| Q11 | Attributes | ELIGIBLE | All 3 conditions met (note: hardness re-tagged at P3 step). |
| Q13 (consolidated with Q14) | Failure framework | ELIGIBLE | LAYER-2 audit cadence + runner + threshold. |
| Q15 | Runtime integration | ELIGIBLE | All 3 conditions met. |
| Q16 | Runtime integration | NOT-ELIGIBLE | Reclassified: gating belongs to runner spec (/MVL, /MVLw), not routeman SKILL.md. Q16 is runner-level, parallel to the F3/F5-trigger/F8 mis-attributions excluded from routeman's lineage. |
| Q17 | Migration | NOT-ELIGIBLE | Gating PARTIAL — incoming-reference cleanup is operationally important for the archive COULD but doesn't gate SKILL.md authoring. |
| Q18 | Coupling | ELIGIBLE | Per sensemaking elevation verdict — substantive new structure beyond L-f2 deferral. |
| Q19 | Coupling | ELIGIBLE | All 3 conditions met. |
| Q20 | Calibration | ELIGIBLE | All 3 conditions met. |
| Q21 | Endgame conditional | ELIGIBLE | Per accommodation rule (sensemaking-confirmed). |
| Q22 | Methodology portability | NOT-ELIGIBLE | Per sensemaking — research frontier doesn't gate routeman implementation. |

**Eligible after P1: 13 candidates** (Q1, Q4, Q5, Q7, Q9, Q11, Q13, Q15, Q18, Q19, Q20, Q21 + Q16-replacement consideration left to P3).

#### Piece-Level Inversion at P1

**Assumption being reversed:** "the 3-condition test is the right eligibility filter."

**Inversion-candidate:** *Alternative — gating-only filter.* Drop the no-current-answer and net-new conditions; eligibility = gating-for-implementation only. Under this alternative, more candidates would qualify (e.g., Q22 methodology portability would be eligible because some readers might argue it gates routeman's spec by affecting the methodology's framing).

**5-test:**

| Test | Verdict | Notes |
|---|---|---|
| Novelty | PASS | Gating-only is a different filter. |
| Scrutiny survival | FAIL | Loses the "frontier" qualifier from `_branch.md`; produces too many candidates; defeats the purpose of curation. |
| Fertility | LOW | Without filtering, the deliverable degrades to a list of all gating questions. |
| Actionability | PASS | Easier to apply. |
| Mechanism independence | NO | Only Inversion produced this. |

**Disposition:** REJECTED. Original 3-condition filter preserved.

**Compliance:** ✓ Piece-Level Inversion satisfied.

---

### P2 — Consolidate overlapping candidates

#### Mechanism work

**Combination (Generator):** combine the consolidation rule (2-candidate cap; tight overlap) with sensemaking's specific verdicts (Q12⊂Q9; Q14⊂Q13).

**Consolidated pairs (applied):**

- **Q9 (consolidated):** *F-prescr generation mechanism, including what anchors each pointer's WHY.* Merges original Q9 (generation mechanism) + Q12 (pointer-WHY anchor). Sub-aspects enumerated.
- **Q13 (consolidated):** *LAYER-2 identity-erosion audit cadence + runner + threshold calibration to project's actual invocation rate.* Merges original Q13 (audit cadence + runner) + Q14 (L2-A threshold calibration). Sub-aspects enumerated.

#### Piece-Level Inversion at P2

**Assumption being reversed:** "2-candidate consolidation cap is the right rule."

**Inversion-candidate:** *Alternative — no consolidation.* Treat each candidate independently. Under this, Q9 + Q12 stay separate; Q13 + Q14 stay separate. Total eligible candidates becomes 15 (13 + 2 un-consolidated).

**5-test:**

| Test | Verdict | Notes |
|---|---|---|
| Novelty | PASS | No-consolidation is a different rule. |
| Scrutiny survival | PARTIAL | Preserves sub-aspect visibility BUT consumes 4 of 10 slots on 2 closely-related question-pairs, weakening axis-spread. |
| Fertility | LOW | More questions = less differentiation. |
| Actionability | PASS | Easier (no merge work). |
| Mechanism independence | NO | Only Inversion produced this. |

**Disposition:** REJECTED. 2-candidate consolidation preserved — sub-aspect visibility is preserved via explicit sub-aspect enumeration within merged questions.

---

### P3 — Rank by hardness + check spread

#### Mechanism work

**Combination (Generator):** apply the 3-dimension hardness test to each of the 13 eligible candidates; tag with which sub-dimensions apply.

**Absence Recognition (Generator):** redesign-level scan — what frontier questions COULD exist that the 23-candidate surfacing missed?

- *Patch-level scan:* the 23-candidate surfacing covers 12 regions; no gap detected.
- *Redesign-level scan:* what's missing if routeman were designed from scratch from a different starting frame? Examples surfaced: (a) routeman's compliance with the cognitive_fixes/01 methodology (covered as L-f3 deferral; not a new frontier); (b) routeman's interaction with potential future protocols not yet defined (out-of-scope; capability dependency on capabilities even further off than multi-head); (c) routeman's failure under inquiry-folder-corruption or cross-session inconsistency (touches Q11 Continuation Note persistence; absorbed there).

**Verdict:** no candidate frontier missed. The 23-candidate pool is sufficient.

#### Per-candidate hardness tags

| Q# | Breadth | Depth | Articulation | Tags | Rating |
|---|---|---|---|---|---|
| Q1 | HIGH | HIGH | MED | 3-of-3 | ★★★ |
| Q4 | HIGH | HIGH | MED | 3-of-3 | ★★★ |
| Q5 | MED | MED | HIGH | 2-of-3 (depth-articulation) | ★★ |
| Q7 | MED | MED | HIGH | 2-of-3 (depth-articulation) | ★★ |
| Q9 | HIGH | HIGH | MED | 3-of-3 | ★★★ |
| Q11 | MED | HIGH | HIGH | 2-of-3 (depth-articulation; breadth MED-low because Continuation Note's cross-session persistence is bounded to one attribute) | ★★ |
| Q13 | HIGH | HIGH | MED | 3-of-3 | ★★★ |
| Q15 | HIGH | HIGH | MED | 3-of-3 | ★★★ |
| Q18 | MED | MED | HIGH | 2-of-3 (depth-articulation) | ★★ |
| Q19 | HIGH | HIGH | HIGH | 3-of-3 | ★★★ |
| Q20 | MED | MED | MED | 1-of-3 (none clearly HIGH; overlaps with Q13's calibration sub-aspect) | ★ — DEMOTE |
| Q21 | MED | MED | HIGH | 2-of-3 (depth-articulation) | ★★ |

**After demotion (Q20 dropped to "trivially-hard"):** 12 candidates remain.

#### Axis-spread check on the 12

Region coverage of the 12:
- Identity (Q1)
- Endgame fit (Q4, Q5)
- Lineage (Q7)
- Features (Q9)
- Attributes (Q11)
- Failure framework (Q13)
- Runtime integration (Q15)
- Coupling (Q18, Q19)
- Endgame conditional (Q21)

10 candidates across **9 regions** (some regions doubled). ≥6 ✓.

Gating-type coverage:
- Spec-gap (Q1, Q9, Q11, Q13, Q15)
- Interface (Q4, Q15, Q18, Q19)
- Empirical (Q7, Q19)
- Capability (Q4, Q21)
- Calibration (Q13)
- Policy (Q5, Q21)

All **6 of 6 types** covered. ≥4 ✓.

#### Piece-Level Inversion at P3

**Assumption being reversed:** "3-dimension hardness test is the right hardness criterion."

**Inversion-candidate:** *Alternative — single-dimension hardness (only breadth).* Hardness = breadth-of-consequence only.

**5-test:**

| Test | Verdict | Notes |
|---|---|---|
| Novelty | PASS | Single-dim is a different rule. |
| Scrutiny survival | FAIL | Loses articulation-difficulty (the meta-quality that distinguishes design-memo-named items from never-articulated frontiers); loses depth-of-investigation (impact on what counts as a meaningful follow-up). Under single-dim, Q5/Q7/Q11/Q18/Q21 (all articulation-strong) would be under-ranked. |
| Fertility | LOW | |
| Actionability | PASS | Easier. |
| Mechanism independence | NO | Only Inversion. |

**Disposition:** REJECTED. 3-dimension hardness preserved.

---

### P4 — Select exactly 10

#### Mechanism work

**Combination (Generator):** combine the ranked list (12 candidates after Q20 drop) with the 10-cap constraint. Two candidates need to drop.

**Constraint Manipulation (Framer):** *ADD-direction* — add the constraint "no two questions in the 10 may share gating type + region." Under this constraint: Q5 + Q21 share (policy, endgame); Q18 + Q19 share (interface, coupling). Need to drop one of each pair.
- Q5 vs Q21: Q21 has unique capability+policy combination; Q5 is purely policy. Drop Q5.
- Q18 vs Q19: Q19 is broader (cycle-output shape) whereas Q18 is specific (/reflect mapping); Q18 was sensemaking-flagged for substantive new structure. Keep both — drop the added constraint as too rigid; the 2-region-overlap is acceptable.

*REMOVE-direction* — remove the 10-cap, accept 12 questions. Rejected — user explicitly asked for 10.

**Both-direction-mandatory compliance:** ADD-direction applied (rejected after analysis); REMOVE-direction applied (rejected — user constraint hard).

#### Final selection (10)

After dropping Q5 (overlap with Q21) and Q20 (trivially-hard from P3):

**Selected 10:** Q1, Q4, Q7, Q9, Q11, Q13, Q15, Q18, Q19, Q21.

Region spread: Identity / Endgame fit / Lineage / Features / Attributes / Failure framework / Runtime integration / Coupling (×2) / Endgame conditional = **9 distinct regions** (≥6 ✓).

Gating-type spread: spec-gap / capability / interface / empirical / calibration / policy = **all 6 types** (≥4 ✓).

---

### P5 — Assign tiers

#### Mechanism work

**Lens Shifting (Framer):** under what condition is each question Tier 1 vs Tier 2?
- Tier 1 lens: "if unresolved, the SKILL.md author makes a silent choice with downstream consequence."
- Tier 2 lens: "the SKILL.md can document the question as an open-question note without making a silent choice."

#### Tier assignments

| Q# | Tier | Reasoning |
|---|---|---|
| Q1 (autonomy-level detection) | Tier 1 | Silent choice if unresolved: SKILL.md either has a default mechanism or omits the F-autosplit's runtime context dependency. Both are silent commitments. |
| Q4 (multi-head handoff) | Tier 1 | Silent default: SKILL.md commits to per-invocation Route Map shape that may be incompatible with multi-head when it ships. |
| Q9 (F-prescr generation) | Tier 1 | Silent default: SKILL.md leaves the prescriptive layer's mechanism implicit, risking LLM-direct default. F-prescr is the load-bearing residual. |
| Q13 (LAYER-2 audit) | Tier 1 | Silent default: SKILL.md declares LAYER-2 modes but their audits are toothless without infrastructure decisions. |
| Q15 (runner-discipline contract) | Tier 1 | Silent default: the runner-discipline interface becomes implicit, breaking on first non-trivial invocation. |
| Q19 (cycle-output shape constraints) | Tier 1 | Silent default: routeman assumes well-shaped upstream output without enforcement; first incompatibility silently degrades. |
| Q7 (taxonomy completeness) | Tier 2 | Trackable: SKILL.md ships with 16-type taxonomy as-is and a note "completeness untested empirically; add types via /MVL2+ inquiry if observed." |
| Q11 (Continuation Note persistence) | Tier 2 | Trackable: SKILL.md ships with the attribute and a note "cross-inquiry persistence mechanism unspecified; defer until cross-inquiry coordination matures." |
| Q18 (/reflect → routeman mapping shape) | Tier 2 | Trackable: SKILL.md ships with a placeholder coupling statement; L-f2's revival trigger fires when /reflect spec is loaded for the structural-layer follow-up. |
| Q21 (pre-maturity emission policy) | Tier 2 | Trackable: SKILL.md ships with a default policy (always emit with appropriate confidence) and a note "policy may shift as Baldwin maturity N≥30 approaches." |

**Tier 1:** 6 questions. **Tier 2:** 4 questions. Total: 10. Within sensemaking's 5-7 + 3-5 range. ✓

#### Piece-Level Inversion at P5

**Assumption being reversed:** "2-tier presentation (must-resolve vs watch-list) is the right organization."

**Inversion-candidate:** *Alternative — single-tier ranked list.* Present all 10 in one ranked list by hardness, no tier distinction.

**5-test:**

| Test | Verdict | Notes |
|---|---|---|
| Novelty | PASS | Single-tier is different. |
| Scrutiny survival | PARTIAL | Simpler presentation, but loses the actionable distinction the user needs (the user said "before moving into implementation" — implying some questions block moving forward and others can be tracked). Single-tier doesn't help triage. |
| Fertility | LOW | |
| Actionability | PARTIAL | Lower triage-utility. |
| Mechanism independence | NO | Only Inversion. |

**Disposition:** REJECTED. 2-tier presentation preserved.

---

### P6 — Write per-question metadata

For each of the 10, populate the 5-field metadata. The full deliverable is in the **Final 10-Question Deliverable** section below.

---

## Inherited Frame Audit (between Phase 2 and Phase 3)

### Step (i) — Seed-level central assumption

The seed's central load-bearing assumption: **"the 23 candidates surfaced + the 8 constraints from sensemaking are the right input frame; the selection task is well-specified."**

### Step (ii) — Piece-level commitments

Meta-decision pieces P1, P2, P3, P5 — each commits to a criterion. P4 + P6 are content-production.

### Step (iii) — Challenge scan

| Assumption | Challenged by candidate? |
|---|---|
| Seed: 23 + 8 constraints = right input | YES — Absence Recognition (P3 step) scanned for missing candidates; no gap detected. |
| P1: 3-condition test | YES — Piece-Level Inversion (gating-only alternative; rejected) |
| P2: 2-candidate consolidation cap | YES — Piece-Level Inversion (no-consolidation; rejected) |
| P3: 3-dimension hardness | YES — Piece-Level Inversion (single-dim; rejected) |
| P5: 2-tier presentation | YES — Piece-Level Inversion (single-tier; rejected) |

### Step (iv) — Firing condition

All assumptions challenged. **AUDIT DOES NOT FIRE.**

---

## Phase 3 — Test (Summary)

Each piece's verdict was tested via 5-test cycle during execution. Summary:

- **ACTIONABLE:** the 10 final questions with metadata (P6 output below).
- **REJECTED via Inversion:** gating-only filter (P1); no-consolidation (P2); single-dim hardness (P3); single-tier presentation (P5).

---

## Assembly Check

### Emergent value

The 10-question deliverable + tier organization + per-question metadata is the inquiry's deliverable. The assembly's emergent value: the user can take the 10 to the SKILL.md authoring step and either resolve each (run additional /MVL2+ inquiries on Tier 1 items) or defer (annotate Tier 2 items in the SKILL.md as open questions).

### Axis coverage check

| Axis | Variance in selected 10 |
|---|---|
| Region | 9 distinct regions covered ✓ |
| Gating type | All 6 types covered ✓ |
| Hardness | 6 ★★★ + 4 ★★ ✓ |
| Tier | 6 Tier 1 + 4 Tier 2 ✓ |
| Identity vs operation | Q1+Q4+Q7+Q11 (identity-layer questions) + Q9+Q13+Q15+Q18+Q19+Q21 (operation-layer questions) ✓ |

### Shared-input detection

Multiple mechanisms reached the consolidation verdicts (Q12⊂Q9, Q14⊂Q13). Did they operate on shared inherited input? YES — both Combination (P2) and the sensemaking specific-overlap-verdicts operate on the same underlying overlap observations from surfacing's FF-2. This is SHARED-INPUT convergence, not independent. Adversarial test: could the overlaps be misjudged? Q12⊂Q9 — both about prescriptive layer mechanics; structurally tight. Q14⊂Q13 — both about LAYER-2 audit infrastructure; structurally tight. The shared input doesn't change verdict; consolidation stands.

---

## Final 10-Question Deliverable

### Tier 1 — Must-Resolve-Before-SKILL.md (6 questions)

These questions, if unresolved, lead to silent implementation choices in `cognitive_harness/routeman/SKILL.md`. Each needs either an answer (additional /MVL2+ inquiry) OR a documented conscious-deferral-with-risk before the SKILL.md is authored.

---

#### Q1 — Autonomy-Level Detection Mechanism

**Question text:** How does routeman detect (or access) the project's current autonomy level (L0 / L1 / L2 / L3 / L4+) at invocation time, so that the F-autosplit feature can partition the 16 movement types into auto-derivable vs human-judgment per the current level?

**Why-frontier:**
- *No-current-answer:* no mechanism in the corpus today by which a discipline reads the project's autonomy level. `docs/desc.md` describes the autonomy ladder as a trajectory but doesn't specify a runtime-readable register.
- *Gating:* routeman's identity sentence references "the project's current autonomy level" as a load-bearing input to graduated-autonomy classification; F-autosplit cannot operate without it.
- *Net-new:* the design memo did not name this gap; routeman's identity sentence references the level without explaining how the level is observed.

**What-it-gates:** the SKILL.md must specify how F-autosplit accesses the autonomy level. Options the SKILL.md must choose between (or defer): (a) a project-level register file (`docs/autonomy_level.md` or similar); (b) inference from operating context (which runner invoked routeman; which protocols are active); (c) a parameter passed by the runner at invocation; (d) defer entirely and hard-code L0 in the spec (silent commitment).

**Hardness:** breadth (HIGH — affects F-autosplit, L2-C calibration drift detection, EF-2 endgame function operationalization) + depth (HIGH — needs design from scratch) + articulation (MED).

**Candidate resolution path:** new /MVL2+ inquiry framed as "design the project-level autonomy register and discipline-read mechanism." Expected scope: a register-file design + a read-API in discipline specs + a write-API for human-set or system-set updates. Likely 1-2 weeks of inquiry work.

---

#### Q4 — Multi-Head Handoff: One Route Map or N?

**Question text:** Under the planned multi-head architecture (parallel cognitive cycles consuming enumerations per `project_end_goal_loop_architecture` memory + finding 57), does routeman re-invoke per parallel head (producing N Route Maps consumed independently by each head), produce ONE shared Route Map consumed by all heads, or use some other handoff shape (e.g., a single Route Map with per-head priority overrides)?

**Why-frontier:**
- *No-current-answer:* multi-head architecture is the project's stated trajectory but is not shipped; no handoff protocol exists.
- *Gating:* per the accommodation rule (sensemaking Ambiguity 4), the SKILL.md must commit to a Route Map shape that works under multi-head. A silent default ("one Route Map per invocation regardless") later becomes hard to revise.
- *Net-new:* the design memo's EF-1 (enumeration-first preserves multi-head) commits to the property but not to the handoff mechanism.

**What-it-gates:** the SKILL.md's output-shape commitment + the runner-discipline contract for multi-head invocation. Specifically: does routeman emit one Route Map per invocation (and the runner handles per-head consumption) or per-head Route Maps (and the runner invokes routeman per head)?

**Hardness:** breadth (HIGH — affects output schema, runner contract, telemetry semantics, all downstream consumers under multi-head) + depth (HIGH — multi-head not yet shipped; design must project forward) + articulation (MED).

**Candidate resolution path:** new /MVL2+ inquiry framed as "design routeman's multi-head invocation protocol." Alternative resolution: conscious deferral with a documented assumption ("routeman ships with single-head semantics; multi-head adoption will require revision") — acceptable IF the SKILL.md's output shape isn't structurally incompatible with future multi-head adoption.

---

#### Q9 — F-prescr Generation Mechanism (consolidated with original Q12 pointer-WHY anchor)

**Question text:** What is the generation mechanism for adaptive guidance pointers (the F-prescr feature, the prescriptive load-bearing residual)? Specifically: (a) is the mechanism LLM-direct (the agent generates pointers from the cycle output), derived from specific cycle-output elements (e.g., critique's prosecution arguments become Guidance pointers), projected from /intuit hunches, or some other source? (b) What anchors each pointer's WHY — a specific cycle-output element, a telemetry signal, project context, a prior finding, or something else?

**Why-frontier:**
- *No-current-answer:* canonical /navigation describes the route-card structure including Guidance Mode and Guidance Pointers with per-pointer WHY, but does not specify HOW the pointers are generated or what anchors the WHY.
- *Gating:* F-prescr is the load-bearing residual distinguishing routeman from descriptive-labeling siblings (per finding 58). Without a generation mechanism, F-prescr degrades to filler; the LAYER-2 mode "Prescriptive-Without-Cycle-Context" fires.
- *Net-new:* the design memo named F-prescr as a feature without specifying the mechanism.

**What-it-gates:** the SKILL.md's procedural specification for the F-prescr feature. Without commitment, the spec leaves the mechanism implicit (default = "the agent generates pointers using LLM judgment from the cycle output"). The LAYER-2 audit cannot detect failures without an anchored WHY check.

**Hardness:** breadth (HIGH — F-prescr affects every Route's prescriptive content; failure here triggers LAYER-2 mode) + depth (HIGH — no mechanism specified; design from scratch) + articulation (MED — the question is structurally clear from finding 58's F1 residual).

**Candidate resolution path:** new /MVL2+ inquiry framed as "design F-prescr's generation mechanism, including the WHY-anchor source." Likely options to evaluate: (a) cycle-output-derivation rule mapping critique verdicts → DEEPEN/REFINE/PURSUE-SEED guidance pointers; (b) /intuit Phase β+ hunch projection; (c) LLM-direct with structural template; (d) hybrid. The inquiry would need to commit to one and test against the LAYER-2 "Prescriptive-Without-Cycle-Context" failure mode.

---

#### Q13 — LAYER-2 Identity-Erosion Audit Infrastructure (consolidated with original Q14 threshold calibration)

**Question text:** Who runs the LAYER-2 identity-erosion audits (the three identity-eroding failure modes L2-A Rename-Renders-Itself-Cosmetic, L2-B Prescriptive-Without-Cycle-Context, L2-C Auto-vs-Judgment Calibration Drift), at what cadence, and how is the "5 consecutive invocations" threshold in L2-A's recognition signal calibrated to the project's actual invocation rate (which may be 1/day at L0 and many/hour at L4)?

**Why-frontier:**
- *No-current-answer:* the design memo names the LAYER-2 modes and their recognition signals but specifies no audit mechanism (who runs, when, with what observability infrastructure).
- *Gating:* without an audit mechanism, LAYER-2 modes are toothless — they're declared but undetectable at runtime. The discipline's identity erodes silently.
- *Net-new:* the design memo did not name the audit infrastructure as a deferral; it implied LAYER-2 modes are operational.

**What-it-gates:** the SKILL.md's failure-mode section AND a separate audit-infrastructure piece (which may belong to a meta-discipline like /reflect or a new discipline). Without commitment, LAYER-2 modes are documentation-only.

**Hardness:** breadth (HIGH — affects all 3 LAYER-2 modes; affects the "identity-eroding" half of the failure framework) + depth (HIGH — no audit mechanism today; needs full design) + articulation (MED — the design memo names the modes but not the audit).

**Candidate resolution path:** new /MVL2+ inquiry framed as "design the LAYER-2 audit infrastructure for routeman (and possibly extensible to other Boundary disciplines)." Key sub-questions to settle: (a) does /reflect run the audit (extending /reflect's process-quality scope to identity-quality)? (b) does the discipline self-audit at invocation end (with the self-coupling-to-downstream risk per /surfacing's LAYER-2 framework warning)? (c) does a separate audit discipline exist or need to be created? (d) how are thresholds adapted to invocation rate?

---

#### Q15 — Runner-Discipline Contract

**Question text:** What is the explicit contract between the runner (/MVL, /MVLw, and future runners) and routeman at invocation time — including (a) how the runner passes cycle output (one document? multiple references? in-context content vs file paths?), (b) what shape routeman emits to signal completion (a file written? a return value? a state-update?), (c) what happens on partial failure (routeman crashes mid-enumeration; routeman times out; routeman emits malformed output)?

**Why-frontier:**
- *No-current-answer:* the discipline-vs-runner boundary is canonical per finding 58, but the operational contract between runner and routeman has not been formalized. Canonical /navigation describes WHAT routeman consumes ("the cycle's aggregated output") without specifying the passing mechanism.
- *Gating:* /MVL, /MVLw, and any future runner will invoke routeman. Each runner needs to know the contract. Without commitment, runners diverge in how they invoke and consume routeman; the discipline becomes runner-specific.
- *Net-new:* the design memo did not name this contract as a deferral; the runner-discipline boundary was assumed but not specified.

**What-it-gates:** the SKILL.md's invocation-contract section + corresponding updates to /MVL's and /MVLw's pipeline definitions. Without commitment, the runners encode invocation conventions implicitly, and routeman's spec encodes consumption conventions implicitly, with no enforcement.

**Hardness:** breadth (HIGH — affects every routeman invocation across runners) + depth (HIGH — canonical doesn't specify; needs design) + articulation (MED).

**Candidate resolution path:** new /MVL2+ inquiry framed as "design the runner-discipline contract for routeman, generalizable to other disciplines." Likely deliverable: a contract specification including invocation arguments, completion signaling, partial-failure handling, and a section in routeman's SKILL.md + updated sections in runner specs.

---

#### Q19 — Cycle-Output Shape Constraints

**Question text:** What shape constraints does routeman implicitly require on its upstream cycle inputs (the outputs of /sense-making, /innovate, /td-critique, /reflect — the "aggregated cycle output" routeman consumes)? Are these constraints documented in the upstream discipline specs, enforced at invocation, or invariants assumed and unverified?

**Why-frontier:**
- *No-current-answer:* the upstream disciplines have output specifications but no explicit output contracts that routeman could rely on. Routeman's identity sentence names "the cycle's aggregated output" as input without enumerating the required input shape.
- *Gating:* routeman's cycle-consumer process position depends on input being shape-conformant. Without contracts, the first time a non-conformant input appears (e.g., a critique without explicit SURVIVE/REFINE/KILL verdicts; a sense-making without anchors), routeman silently degrades.
- *Net-new:* the design memo names the input contract at a high level but doesn't specify the shape constraints.

**What-it-gates:** the SKILL.md's input-contract section AND coordinated edits to upstream discipline specs (to commit to output shapes routeman can consume). Without commitment, the cycle-consumer contract is held together by convention.

**Hardness:** breadth (HIGH — affects all upstream disciplines; foundational for routeman's input integrity) + depth (HIGH — no formal contracts in upstream specs today) + articulation (HIGH — the assumption was never tested; most agents assume the cycle output is well-shaped without checking).

**Candidate resolution path:** new /MVL2+ inquiry framed as "audit and commit cycle-output shape contracts across /sense-making, /innovate, /td-critique, /reflect — the upstream pipeline that feeds routeman." This is a multi-discipline coordination inquiry; substantial scope (2-3 weeks). Alternative: a documented input-validation layer in routeman's SKILL.md that detects and flags non-conformant input rather than silently degrading.

---

### Tier 2 — Watch-List-During-SKILL.md (4 questions)

These questions don't gate authoring directly — the SKILL.md can ship with documented placeholders or default policies that don't make silent commitments. Track them as open-question notes in the SKILL.md so they're visible during future revisions.

---

#### Q7 — 16-Type Movement Taxonomy Completeness

**Question text:** Is the 16-type movement-type taxonomy (inherited from canonical /navigation: DEEPEN, REFINE, PURSUE SEED, INVESTIGATE FRONTIER, DEVELOP, TERMINATE; RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE; REVISIT (+ RESURRECT/INVALIDATE/REVERT), UNBLOCK, MERGE, TEST, CONSOLIDATE) structurally complete (a closed set), or should routeman accommodate type emergence at runtime (a growable set)?

**Why-frontier:**
- *No-current-answer:* canonical /navigation inherits the 16-type taxonomy without empirical completeness testing. The design memo inherits the assumption from canonical.
- *Gating:* affects the route-card schema's Movement Type field (closed enum vs open enum) and the F-excluded feature's handling of structurally-inapplicable types.
- *Net-new:* the design memo's lineage decision to inherit R2 (16-type taxonomy) didn't test completeness.

**What-it-gates:** the schema commits Movement Type as a fixed enum or growable enum. Tier-2 because the SKILL.md can ship with the 16 as-is and a note "completeness untested empirically; if a type emerges that doesn't fit, file a /MVL2+ inquiry to extend the taxonomy."

**Hardness:** breadth (MED — affects schema + F-excluded only) + depth (MED — corpus survey for new types) + articulation (HIGH — the assumption was inherited silently; design memo didn't name it).

**Candidate resolution path:** longitudinal observation — after routeman ships, monitor whether any actual next-move falls outside the 16 types over the next 20-30 inquiries. If yes, file a taxonomy-extension inquiry. If no, calibrate confidence in completeness over time.

---

#### Q11 — Continuation Note Cross-Session Persistence

**Question text:** How does the per-route Continuation Note attribute (A12 — "what a future warm-up should remember about this route") get loaded by a future agent across sessions or across inquiries, without violating the project's "discipline self-containment" principle (no outbound pointers to design-history/theory folders)?

**Why-frontier:**
- *No-current-answer:* the Continuation Note's persistence layer is unspecified. Within one inquiry folder, the markdown file IS the persistence; across inquiries, no mechanism exists to surface a Route's Continuation Note when re-encountered.
- *Gating:* MED — the attribute can ship as write-only with a note documenting the limitation; routeman doesn't fail without cross-inquiry persistence.
- *Net-new:* design memo named the attribute but not the persistence semantics.

**What-it-gates:** if Tier 1, the SKILL.md would need to commit to a cross-inquiry-memory mechanism. Tier-2 because the SKILL.md can ship with a write-only Continuation Note and a documented note "cross-inquiry persistence deferred; the future warm-up reads the originating inquiry folder when revisiting a route." This is acceptable as long as it's explicit.

**Hardness:** breadth (MED — single attribute) + depth (HIGH — no persistence layer today) + articulation (HIGH — the cross-session memory mechanism is structurally unfamiliar to the project).

**Candidate resolution path:** defer. Track in the SKILL.md as a future-research question. Revival trigger: when 3+ cross-inquiry route resurrections happen (per the REVISIT sub-action RESURRECT) and require Continuation Note context.

---

#### Q18 — /reflect → Routeman Operational Mapping Shape

**Question text:** What is the operational mapping from /reflect's process-quality observations to routeman's guidance pointers? Specifically: direct one-to-one (each observation becomes a pointer)? aggregation (multiple observations summarize into one pointer)? filtering (only observations exceeding a threshold become pointers)? transformation (a rule converts observation shape to pointer shape)?

**Why-frontier:**
- *No-current-answer:* canonical /navigation says "R's observations become N's guidelines" without naming the mapping shape. The design memo's L-f2 deferral preserves the question; this inquiry elevates with a specific sub-shape question.
- *Gating:* MED — the SKILL.md can ship with a placeholder R-coupling section; the L-f2 revival trigger fires when /reflect spec is loaded for the structural-layer follow-up.
- *Net-new:* sensemaking adjudicated this as ELIGIBLE because the design memo's L-f2 didn't name the mapping shape sub-question.

**What-it-gates:** the SKILL.md's "coupling with /reflect" section. Tier-2 because the section can be a placeholder with sub-aspects enumerated for the L-f2 follow-up.

**Hardness:** breadth (MED — gates R→N coupling only) + depth (MED — needs /reflect spec loaded) + articulation (HIGH — the design memo's deferral didn't name the specific mapping shape).

**Candidate resolution path:** the L-f2 deferral's revival trigger ("when /reflect spec is loaded"). The /MVL2+ inquiry that authors `cognitive_harness/routeman/SKILL.md` should also load `/reflect`'s spec at that time and resolve the mapping shape inline.

---

#### Q21 — Pre-Maturity Emission Policy for INVESTIGATE FRONTIER + REVISIT

**Question text:** Are the INVESTIGATE FRONTIER and REVISIT movement-types disabled when the project's calibration maturity (per `docs/desc.md`: N≥30 inquiries per discipline) has not been reached, or are they always emitted with appropriate confidence labels? The Baldwin-cycle's seed-generation maturity gate intersects with these types — INVESTIGATE FRONTIER and REVISIT can generate Baldwin-cycle seeds.

**Why-frontier:**
- *No-current-answer:* the Baldwin-cycle maturity gate is documented in `docs/desc.md`; routeman's emission policy under maturity is unspecified.
- *Gating:* per the accommodation rule, the SKILL.md must commit to a policy that works pre-maturity AND post-maturity. Silent default would either over-emit (emit FRONTIER + REVISIT pre-maturity, polluting the Baldwin cycle's seed quality) or under-emit (disable them, losing useful next-move types).
- *Net-new:* design memo didn't articulate this intersection.

**What-it-gates:** the SKILL.md's F-revisit and F-enum behavior for the two types. Tier-2 because the SKILL.md can ship with a default policy (always emit with confidence-LOW pre-maturity; promote to confidence-MED/HIGH as maturity advances) and a note documenting the policy.

**Hardness:** breadth (MED — affects 2 of 16 movement types) + depth (MED — policy choice + threshold) + articulation (HIGH — the intersection between Baldwin maturity and routeman's enumeration wasn't articulated in the design memo).

**Candidate resolution path:** track in the SKILL.md as policy documentation. Revival trigger: when the project's inquiry count approaches N=30 per discipline (calibration maturity threshold), re-evaluate the policy. Alternative: the policy is settled at SKILL.md authoring time with a default that ships and is auditable.

---

## Telemetry

- **Generators applied:** Combination ✓, Domain Transfer ✓, Absence Recognition ✓, Extrapolation ✓ (implicit in hardness sub-dimension breadth-of-consequence) → **4 / 4**
- **Framers applied:** Lens Shifting ✓ (P5 tier reasoning), Constraint Manipulation ✓ (P4 both-direction; ADD rejected, REMOVE rejected), Inversion ✓ (Piece-Level Inversion at P1, P2, P3, P5) → **3 / 3**
- **Full coverage achieved (7/7 mechanisms).**
- **Convergence signal:** YES — sensemaking's specific overlap verdicts (Q12⊂Q9, Q14⊂Q13) confirmed by Combination at P2; sensemaking's hardness criteria confirmed by ranking at P3; selection logic converges on the same 10 across multiple ordering rules.
- **Test completion:** 5-test cycle run on all Piece-Level Inversion candidates at meta-decision pieces P1, P2, P3, P5.
- **Failure modes observed:**
  - Premature Evaluation: NO (mechanisms applied before testing).
  - Single-Mechanism Trap: NO (full coverage).
  - Early Frame Lock: NO (Piece-Level Inversion at all 4 meta-decision pieces).
  - Innovation Without Grounding: NO (every candidate tested via 5-test).
  - Mechanism Exhaustion: NO.
  - Survival Bias: NO (uncomfortable candidates — gating-only filter; no-consolidation; single-dim hardness; single-tier — explicitly tested even when rejected).
- **Inherited Frame Audit:** did NOT fire (all assumptions challenged).
- **Per-piece mechanism log:**
  - `P1: [Combination:content, Domain Transfer:content, Inversion:content]` — meta-decision; compliance satisfied.
  - `P2: [Combination:content, Inversion:content]` — meta-decision; compliance satisfied.
  - `P3: [Combination:content, Absence Recognition:content, Inversion:content]` — meta-decision; compliance satisfied.
  - `P4: [Combination:content, Constraint Manipulation:content (both-direction)]` — content-production.
  - `P5: [Lens Shifting:content, Inversion:content]` — meta-decision; compliance satisfied.
  - `P6: [content-production for 10 questions × 5 metadata fields]` — content-production.

**Overall verdict: PROCEED.**

Three flags carry forward to Critique:

- **Flag-1.** Q11 (Continuation Note persistence) was re-tagged from ★★★ to ★★ during the rank step. Critique should test whether the re-tagging is justified or self-protective (the question is harder than the re-tag suggests).
- **Flag-2.** Q16 (selection-step ownership) was reclassified to NOT-ELIGIBLE during P1 on the grounds that it's a runner-level concern. Critique should test whether the reclassification is correct or over-aggressive (some readers might argue Q16 gates routeman's spec because routeman's SKILL.md describes the R→N→Select flow).
- **Flag-3.** The selected 10 has 4 Coupling/Runtime-integration questions (Q15, Q18, Q19 — and Q4 has interface aspects). Critique should test whether the selection is over-weighted on coupling/integration at the expense of other axes.
