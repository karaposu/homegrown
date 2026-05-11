# Decomposition: Loop Diagnose - Early Stage Always Full Route Memory Review

## Coupling Map

### Major Elements

The diagnostic finding's content has twelve distinct elements:

- E1. Correction Chain Summary — paths, raw correction, user-signal-type observation (phase-priority).
- E2. Hypothesis D package — Loop framing missing phase variable. MEDIUM-HIGH confidence.
- E3. Hypothesis A package — Sensemaking Phase 2 missing phase / calibration-state perspective. HIGH confidence.
- E4. Hypothesis E package — Conservative uncertainty guardrail under-scoped (mid-stream near-miss). MEDIUM-HIGH confidence.
- E5. Hypothesis B package — Innovation missing phase-conditional candidate class. HIGH confidence.
- E6. Hypothesis C package — Critique missing phase-fit dimension; P2 fourth instance. HIGH confidence.
- E7. CONCLUDE ruled out.
- E8. Cross-chain pattern observations — P2 at 4 chains; M6 effectiveness check; M6 refinement candidates.
- E9. New 1-chain observations P5, P6, P7 in Monitoring tier.
- E10. System-level Research Frontier — Q-RF (quality-awareness gap) reinforced with calibration-awareness instance.
- E11. Maintenance Candidates section + Failure Attribution Summary table.
- E12. Diagnostic Verdict.

### Coupling Topology

Strong coupling:

- E2 (D) ↔ E3 (A): D is upstream of A in cascade.
- E3 (A) ↔ R1 candidate: phase-perspective rule for Sensemaking Phase 2 is the direct corrective.
- E4 (E) ↔ R4 candidate: scope-broadening rule for Innovation is the direct corrective.
- E5 (B) ↔ R3 candidate: phase-conditional candidate generation rule.
- E6 (C) ↔ R2 candidate AND M6-refinement-C: phase-fit dimension extends P2 family; M6 refinement tightens the dimension-list rule.
- E8 (cross-chain) ↔ M6-refinement-S + M6-refinement-C: M6 refinements grounded in P2 4-chain extension and M6 effectiveness check.
- E12 (verdict) ↔ E11 (candidates): verdict's actionability depends on at least one candidate having strong evidence and a concrete gate.

Moderate coupling:

- E2-E6 ↔ E11 (attribution table): summary derives from per-hypothesis stage label + shortcoming type + evidence strength + confidence.
- E1 ↔ E12 (verdict): verdict references chain identity but does not depend on it for content.
- E10 (Q-RF reinforcement) ↔ E12 (verdict's "Recommended next step"): gap may be referenced as longer-horizon direction.
- E9 (P5/P6/P7) ↔ E11 (verdict's Monitoring): observations feed deferred candidate revival triggers.

Low coupling:

- E1 ↔ E2-E10: once chain is summarized, per-hypothesis packages and pattern observations are self-contained.
- E2 ↔ E5 across hypotheses: each hypothesis's evidence comes from a different artifact region.
- E10 (Q-RF reinforcement) ↔ E2-E6: system-level concern is orthogonal to per-chain hypothesis evidence.

### Natural Boundaries

The problem separates into nine coherent pieces:

1. Correction chain summary + signal-type observation (E1).
2. Per-primary-hypothesis packages (E2-E6; five pieces with shared internal structure).
3. CONCLUDE ruled out (E7; brief).
4. Cross-chain pattern observations + M6 effectiveness check + M6 refinements (E8).
5. New 1-chain observations (E9; Monitoring tier).
6. System-level Research Frontier reinforcement (E10).
7. Maintenance Candidates + Failure Attribution Summary (combined aggregation piece, E11).
8. Diagnostic verdict (E12).

The strong-coupling pairs are between hypothesis packages and their derived candidates, between cross-chain observations and M6 refinements, and between Q-RF reinforcement and the diagnostic verdict's longer-horizon framing.

The wrong decomposition to avoid: splitting M6 refinements off from cross-chain observations. M6 refinements are mechanically derived from P2 4-chain extension and the M6 effectiveness check; they belong adjacent to those observations.

## Boundary Validation

### Top-Down Boundary Check

- E1: separable; signal-type observation (third distinct user-signal type in LOOP_DIAGNOSE corpus) is brief and self-contained.
- E2-E6: separable; each hypothesis's evidence comes from disjoint artifact regions in Sensemaking, Innovation, and Critique outputs.
- E7: separable; ruled-out stage is one short observation with reasoning.
- E8: separable; cross-chain observations + M6 effectiveness check + M6 refinements form a self-contained section. Identifies P2 4-chain extension; cites previous LOOP_DIAGNOSE finding's M6 promotion.
- E9: separable; new 1-chain observations with explicit revival triggers.
- E10: separable; Q-RF reinforcement with calibration-awareness instance.
- E11-E12: aggregation; reads from all upstream pieces.

### Bottom-Up Atom Check

Irreducible atoms:

- prior_path string;
- corrected_path string;
- raw human correction text (phase-priority signal);
- one Sensemaking excerpt (prior Phase 2 / Perspective Checking — 6 perspectives at steady-state);
- one Sensemaking excerpt (corrected Phase 2 / Perspective Checking — 6 perspectives explicitly with phase reasoning);
- one Innovation excerpt (prior 7 candidates, all steady-state);
- one Innovation excerpt (corrected Candidate B "Source-Gated Early Robust Mode");
- one Critique excerpt (prior dimensions: Conceptual cleanliness, Trigger correctness, Artifact fit, Boundary integrity, Automation clarity, User alignment, Implementation tractability);
- one Critique excerpt (corrected dimensions: Robustness, Breakthrough support, Conceptual cleanliness, Artifact discipline, Anti-authority safety, Cost control, Future optimization);
- one Innovation/Critique excerpt (prior Candidate F Conservative Uncertainty Rule SURVIVE-with-scope-constraint at chain-3-corrected = chain-4-prior);
- one `_branch.md` excerpt (prior Question and Goal — no phase mention);
- one `_branch.md` excerpt (corrected Question and Goal — explicit phase mention);
- previous LOOP_DIAGNOSE candidate identifiers (M1, M3, M4, M6, M7, M8, N2, N4, N7, N8, O1-O8) referenced;
- new candidate identifiers (R1, R2, R3, R4, R7, R8) introduced;
- M6 refinement identifiers (M6-refinement-S, M6-refinement-C);
- cross-chain pattern identifiers (P2 at 4 chains; P5, P6, P7 new at 1 chain);
- M6 effectiveness check evidence;
- per-hypothesis confidence labels;
- per-hypothesis "Why not stronger" rationale;
- per-candidate gate definition;
- per-candidate risk class label;
- diagnostic verdict label;
- Q-RF calibration-awareness instance reference.

Atoms group cleanly into the nine pieces. The "phase / calibration-state" atom appears in E2 (framing), E3 (Sensemaking perspective), E5 (Innovation candidate class), E6 (Critique dimension); it is not split because in each location it serves a different role (different stage's specific failure).

Boundary confidence: high.

## Question Tree

### Question 1 - What Is The Correction Chain Summary And Signal Type?

Verification criteria:

- [ ] Names prior_path with the full inquiry folder path.
- [ ] Names corrected_path with the full inquiry folder path.
- [ ] Quotes or faithfully excerpts the human correction.
- [ ] Notes that this is a phase-priority signal type — the third distinct user-signal type in the LOOP_DIAGNOSE corpus (after content-level, cultural-norm-level, metacognitive).
- [ ] Notes that chain 4 prior = chain 3 corrected (corpus-level observation).
- [ ] States what changed from prior to corrected in 1-2 sentences.
- [ ] Notes that this is the fourth LOOP_DIAGNOSE run with reference to the previous three findings.

### Question 2 - What Is The Hypothesis D Package (Loop Framing Missing Phase Variable)?

Verification criteria:

- [ ] Stage label = "loop framing" per LOOP_DIAGNOSE taxonomy.
- [ ] Shortcoming type names "_branch.md Question and Goal did not surface phase / calibration-state as load-bearing variable."
- [ ] Evidence from prior inquiry cites prior `_branch.md` Question and Goal verbatim (no phase mention).
- [ ] Evidence from human correction cites the user's phase-priority phrasing.
- [ ] Evidence from corrected inquiry cites corrected `_branch.md` Question with explicit early-stage mention.
- [ ] Confidence = MEDIUM-HIGH.
- [ ] "Why not stronger" notes one inferential step (downstream stages had independent opportunity to surface phase).
- [ ] Notes that D is a separate sub-pattern from chains 1-3 D-prime (directional bias) — different mechanism (missing variable vs directional bias).

### Question 3 - What Is The Hypothesis A Package (Sensemaking Phase 2 Missing Phase Perspective)?

Verification criteria:

- [ ] Affected stage = Sensemaking. **New Sensemaking surface** distinct from M1+N2+O1 (concept stabilization at Phase 1 / Foundational Principles / SV2+ Terminology).
- [ ] Shortcoming type names "Phase 2 / Perspective Checking missing phase / calibration-state perspective."
- [ ] Evidence from prior inquiry cites prior Phase 2 perspectives (6 perspectives at steady-state).
- [ ] Evidence from corrected inquiry cites corrected Phase 2 perspectives (6 perspectives explicitly with phase reasoning at every axis).
- [ ] Evidence from human correction cites the user's phase-priority phrasing as the surface signal.
- [ ] Confidence = HIGH.
- [ ] "Why not stronger" notes that A is downstream of D in causal order; even with D's framing gap, Sensemaking Phase 2 had independent responsibility to apply a phase perspective.
- [ ] Maintenance candidate (R1) identified.

### Question 4 - What Is The Hypothesis E Package (Conservative Uncertainty Guardrail Under-Scoped)?

Verification criteria:

- [ ] Affected stage = mixed (Sensemaking Phase 3 + Innovation Candidate F + Critique scope constraint).
- [ ] Shortcoming type names "near-miss; right ingredient generated but scope-broadening missed at project-phase level."
- [ ] Evidence from prior inquiry cites prior Sensemaking Phase 3 / Ambiguity 4 conclusion + prior Innovation Candidate F + prior Critique Candidate F SURVIVE-with-scope-constraint.
- [ ] Evidence from corrected inquiry cites corrected SV3 explicitly broadening uncertainty to phase level.
- [ ] Confidence = MEDIUM-HIGH.
- [ ] "Why not stronger" notes that E is a near-miss observation — the right ingredient was generated; the right framing for it was not adopted. Mixed attribution.
- [ ] Maintenance candidate (R4) identified with single-chain caveat.

### Question 5 - What Is The Hypothesis B Package (Innovation Missing Phase-Conditional Candidates)?

Verification criteria:

- [ ] Affected stage = Innovation. **Attribution:** mixed (largely inherited from A; independent component is candidate-set blind spot).
- [ ] Shortcoming type names "Candidate space split on steady-state shape; missing phase-conditional default class."
- [ ] Evidence from prior inquiry cites prior 7 candidates (all steady-state).
- [ ] Evidence from corrected inquiry cites corrected Candidate B "Source-Gated Early Robust Mode" verbatim.
- [ ] Confidence = HIGH.
- [ ] "Why not stronger" notes mixed attribution: candidate corridor was bounded by A's steady-state assumption.
- [ ] Maintenance candidate (R3) identified.

### Question 6 - What Is The Hypothesis C Package (Critique Missing Phase-Fit Dimension)?

Verification criteria:

- [ ] Affected stage = Critique. **P2 fourth instance.**
- [ ] Shortcoming type names "Wrong Dimensions failure mode; dimension list missing phase-fit / calibration-state-fit / robustness-priority axis."
- [ ] Evidence from prior inquiry cites prior dimensions verbatim (Conceptual cleanliness, Trigger correctness, Artifact fit, Boundary integrity, Automation clarity, User alignment, Implementation tractability — none is phase-fit).
- [ ] Evidence from corrected inquiry cites corrected dimensions with reorganization (Robustness + Breakthrough support at Critical; Conceptual cleanliness drops to High; Cost control + Future optimization added).
- [ ] Confidence = HIGH.
- [ ] "Why not stronger" notes mixed attribution: partly inherited from candidate set, partly independent dimension articulation.
- [ ] Maintenance candidate (R2) identified.
- [ ] Notes P2 family extension to 4 chains (4 specific axes: duplicate-derivable-state / explicit-culture-fit / operation-parsimony / phase-fit).

### Question 7 - What Is The CONCLUDE Ruling-Out?

Verification criteria:

- [ ] Names CONCLUDE.
- [ ] Brief observation: prior `finding.md` faithfully synthesized upstream output; phase-blindness was inherited from Sensemaking Phase 2, not introduced at CONCLUDE.
- [ ] Same as previous three LOOP_DIAGNOSE chains.

### Question 8 - What Are The Cross-Chain Pattern Observations And M6 Effectiveness Check / Refinements?

Verification criteria:

- [ ] Names P2 family at 4 chains with all four specific axes.
- [ ] Names P1 family at 3 chains (no extension this run).
- [ ] Names P3 and P4 families at 1 chain each (no extension this run).
- [ ] Documents M6 effectiveness check: M6's current rule shape would NOT have caught this chain's failure had it been applied during the prior loop. Sensemaking sub-rule layer-specific (Phase 1 + SV2+ Terminology only); Critique sub-rule "include at least one" satisfied formally but not substantively.
- [ ] Proposes M6-refinement-S: extend Sensemaking sub-rule to also cover Phase 2 / Perspective Checking when the candidate involves project-state-dependent rules.
- [ ] Proposes M6-refinement-C: tighten Critique sub-rule wording from "include at least one project-specific risk dimension" to "include all project-specific risk dimensions that apply given the candidate type and project phase."
- [ ] Both refinements with explicit one-additional-chain-evidence + small-scope caveats.

### Question 9 - What Are The New 1-Chain Observations P5, P6, P7?

Verification criteria:

- [ ] Names P5 (Sensemaking Phase 2 missing phase / calibration-state perspective).
- [ ] Names P6 (Innovation candidate-set missing phase-conditional candidate class).
- [ ] Names P7 (Loop framing missing phase / state-dependent variable).
- [ ] Each labeled HIGH confidence per chain at 1 of 3+ chain count.
- [ ] Tier label = Monitoring (NOT ACTIONABLE).
- [ ] Each has explicit revival trigger: revive when 3+ chains show the same family.

### Question 10 - What Is The Q-RF Reinforcement (System-Level Research Frontier)?

Verification criteria:

- [ ] Names Q-RF (quality-awareness gap, originally surfaced in chain 3).
- [ ] States that this chain reinforces Q-RF with a calibration-awareness specific instance (the prior loop's rule assumed the runner could judge material effect, but the runner is uncalibrated).
- [ ] References `enes/desc.md` Predictive RC architecture as the structural answer.
- [ ] Confidence = MEDIUM-HIGH (system-level argument, not per-chain actionable).
- [ ] No maintenance candidate proposed; remains Research Frontier.

### Question 11 - What Are The Maintenance Candidates And Failure Attribution Summary?

Verification criteria:

- [ ] At least one new R-candidate per primary hypothesis (R1 for A, R2 for C, R3 for B, R4 for E); D's corrective surfaces are at runner level (M4 deferred, no R-candidate); content cleanup (R7) and monitoring (R8) included.
- [ ] M6 refinements (M6-refinement-S, M6-refinement-C) explicitly recorded with single-additional-chain caveats.
- [ ] Failure Attribution Summary table covers: Sensemaking (A), Innovation (B), Critique (C with P2 fourth instance), Innovation/Critique mixed (E), Loop framing (D), CONCLUDE ruled out, Cross-chain (P2 at 4; P5/P6/P7 at 1; M6 refinements), System-level (Q-RF reinforcement).
- [ ] Each candidate names: what should change; which file/protocol; risk class; expected benefit; evaluation gate; whether it should become a branch experiment.
- [ ] Compositional identifier scheme (M, N, O, R, P, Q) consistent.

### Question 12 - What Is The Diagnostic Verdict?

Verification criteria:

- [ ] Verdict label = ACTIONABLE-PARTIAL.
- [ ] Best-supported diagnosis names the cascade structure (D → A → E → B → C; CONCLUDE ruled out).
- [ ] Strongest cross-chain claim: P2 at 4 chains; M6 refinements proposed.
- [ ] Strongest per-chain candidate identified by name.
- [ ] Main uncertainty named.
- [ ] Recommended next step is concrete.
- [ ] Verdict is consistent with LOOP_DIAGNOSE Step 4 verdict definitions and Step 5/6 guardrails.

## Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| Q1 (Correction Chain + Signal Type) | Q2-Q12 | path identifiers, raw correction text, signal-type observation | one-way |
| Q2 (Hypothesis D) | Q3 (Hypothesis A) | causal cascade reference (D → A) | one-way |
| Q3 (Hypothesis A) | Q4 (Hypothesis E) | causal cascade reference (A → E) | one-way |
| Q4 (Hypothesis E) | Q5 (Hypothesis B) | mid-stream → Innovation downstream | one-way |
| Q5 (Hypothesis B) | Q6 (Hypothesis C) | candidate-set → dimension-list cascade | one-way |
| Q3 (Hypothesis A) | Q11 (Candidates) | A shortcoming → R1 | one-way |
| Q6 (Hypothesis C) | Q11 (Candidates) | C shortcoming → R2; P2 fourth instance | one-way |
| Q5 (Hypothesis B) | Q11 (Candidates) | B shortcoming → R3 | one-way |
| Q4 (Hypothesis E) | Q11 (Candidates) | E shortcoming → R4 (single-chain caveat) | one-way |
| Q8 (Cross-Chain + M6 Refinements) | Q11 (Candidates) | M6-refinement-S, M6-refinement-C with caveats | one-way |
| Q9 (P5/P6/P7 Monitoring) | Q11 (Deferred candidates) | new patterns at 1 chain | one-way |
| Q10 (Q-RF Reinforcement) | Q12 (Verdict's "Recommended next step") | longer-horizon Research Frontier | one-way |
| Q2-Q10 | Q11 (Failure Attribution Summary cells) | stage label, shortcoming type, evidence strength, confidence | one-way |
| Q2-Q11 | Q12 (Verdict) | strongest hypothesis name, strongest candidate name, primary uncertainty | one-way |

Hidden-coupling check:

- The verdict (Q12) does not invent new content; it summarizes what Q2-Q11 state.
- M6 refinements (Q8) are mechanically derived from P2 4-chain extension + M6 effectiveness check; they do not require new evidence beyond what cross-chain observations cite.
- Q-RF reinforcement (Q10) does not produce a maintenance candidate; the diagnostic finding's verdict's "Recommended next step" may reference it as longer-horizon direction.
- Cross-chain observations (Q8) reference previous LOOP_DIAGNOSE findings by stable identifier and current hypotheses by name; they do not introduce protocol-level claims unsupported by chain count.

## Dependency Order

1. Q1 (Correction Chain + Signal Type) — no dependencies.
2. Q2 (Hypothesis D) — depends on Q1; framing observation.
3. Q3 (Hypothesis A) — depends on Q2 (causal cascade D → A).
4. Q4 (Hypothesis E) — depends on Q3 (mid-stream after Sensemaking).
5. Q5 (Hypothesis B) — depends on Q3 + Q4.
6. Q6 (Hypothesis C) — depends on Q1 + Q5; P2 fourth instance.
7. Q7 (CONCLUDE ruled out) — depends on Q1; brief.
8. Q8 (Cross-Chain + M6 Refinements) — depends on Q3 + Q6 (which give cross-chain pattern instances) plus references to previous three LOOP_DIAGNOSE findings + M6 effectiveness check.
9. Q9 (P5/P6/P7 new patterns) — depends on Q3 + Q5 + Q2 (new 1-chain observations from this chain's Sensemaking, Innovation, Framing).
10. Q10 (Q-RF Reinforcement) — depends on Q1 (calibration-awareness instance).
11. Q11 (Candidates + Attribution + Verdict) — depends on Q2-Q10.
12. Q12 (Verdict) — depends on Q11.

Parallelizable after Q1: Q2, Q7, Q10.

Must wait:

- Q3 should follow Q2.
- Q4 should follow Q3.
- Q5 should follow Q3 + Q4.
- Q6 should follow Q5.
- Q8 should follow Q3 and Q6.
- Q9 should follow Q3 + Q5 + Q2.
- Q11 should follow Q2-Q10.
- Q12 should follow Q11.

## Self-Evaluation

### Independence

Pass.

Each question can be answered using disjoint evidence regions in the prior + corrected artifacts. Q2 reads prior `_branch.md`; Q3 reads prior Phase 2; Q4 reads prior Phase 3 / Innovation Candidate F / Critique scope constraint; Q5 reads prior Innovation candidate set; Q6 reads prior Critique dimensions; Q7 reads prior `finding.md`; Q8 reads previous three LOOP_DIAGNOSE findings + current Q3/Q5/Q6; Q9 reads current Q3/Q5/Q2; Q10 reads `enes/desc.md` reference + chain 3's Q-RF.

### Completeness

Pass.

The twelve questions cover what LOOP_DIAGNOSE Step 4 prescribes plus the cross-chain extension + M6 effectiveness check + new pattern Monitoring + Research Frontier reinforcement.

### Reassembly

Pass.

If all twelve questions are answered with verification criteria met, the resulting `finding.md` will satisfy LOOP_DIAGNOSE Step 4's full output contract, document the M6 effectiveness check + refinement events, and reinforce Q-RF as Research Frontier.

### Tractability

Pass.

Each question is small enough for one focused pass. Q2-Q6 are roughly equal (one hypothesis package each). Q7 and Q10 are shorter. Q8 carries M6 effectiveness check + refinements with explicit caveat documentation. Q11 is the largest piece due to candidate aggregation (6 R-candidates + 2 M6 refinements).

### Interface Clarity

Pass.

Interfaces are mostly one-way. The hidden-coupling check above lists explicit guards. Cross-chain references use stable identifiers (M1-M9, N1-N9, O1-O9, R1-R8 in this run; P1-P7 patterns; Q-RF Research Frontier).

### Balance

Pass with note.

Q11 carries roughly 2x the load of Q2-Q6 because it aggregates across all hypotheses + cross-chain promotion + Research Frontier. Q8 (cross-chain + M6 refinements) is also above average size due to M6 effectiveness check documentation. Acceptable.

### Confidence

Pass.

Top-down boundaries (LOOP_DIAGNOSE Step 4 + cross-chain extension + M6 effectiveness + Research Frontier framing) and bottom-up atoms (irreducible evidence excerpts from prior + corrected + previous three LOOP_DIAGNOSE findings + project architecture reference) agree on the partition.
