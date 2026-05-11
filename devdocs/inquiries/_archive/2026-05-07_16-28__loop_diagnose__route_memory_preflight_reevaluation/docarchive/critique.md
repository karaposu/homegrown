# Critique: Loop Diagnose - Route Memory Preflight Reevaluation

## User Input

LOOP_DIAGNOSE on the correction chain. Innovation produced 6 per-chain ACTIONABLE candidates (O1, O2, O3, O4, O7, O8), one cross-chain promotion (M6 from DEFERRED to ACTIONABLE), and one Research Frontier (Q-RF, NOT a maintenance candidate). Critique evaluates each against dimensions extracted from the diagnostic problem and from LOOP_DIAGNOSE Step 5 + Step 6 guardrails.

## Dimensions With Weights

### 1. Evidence Strength - 25%

Pass means the candidate's supporting evidence (per-chain or cross-chain) is strong enough to justify a source edit rather than monitoring. Critical dimension. Cross-chain candidates (M6 promotion) require explicit chain-count and revival-trigger citation; per-chain candidates require multi-artifact convergence.

### 2. Recurrence Prevention - 20%

Pass means the candidate, if implemented, would prevent recurrence of the specific failure pattern it targets. Critical dimension.

### 3. Evaluation Gate Specificity - 15%

Pass means the candidate has an observable gate firing within the near term (next 1-3 MVL+ runs of relevant type, or after the next LOOP_DIAGNOSE run). Critical dimension.

### 4. Overreach Risk - 25%

Pass means the candidate avoids LOOP_DIAGNOSE Step 5 + Step 6 guardrails: not a broad rewrite from limited evidence; not a fundamentals change from one chain; not a premature LOOP_DIAGNOSE protocol-level change; not a Predictive RC implementation step. Critical dimension. Cross-chain promotion (M6) is allowed because the previous finding's revival trigger was explicit; new cross-cutting rules from 1-chain evidence are NOT allowed.

### 5. Composition With Previous LOOP_DIAGNOSE - 10%

Pass means the candidate either extends a previous candidate (M, N) coherently, introduces a new surface that previous candidates did not cover, or promotes a previous deferred candidate per its explicit revival trigger.

### 6. Implementation Cost / Reversibility - 5%

Pass means cheap to implement, easy to revert.

Critical dimensions: Evidence Strength, Recurrence Prevention, Evaluation Gate Specificity, Overreach Risk.

## Fitness Landscape

### Viable Region

Candidates that:

- Have HIGH per-chain evidence strength OR cross-chain promotion with explicit trigger citation.
- Prevent recurrence of a specific pattern with a clear mechanism.
- Have an observable gate firing in the near term.
- Avoid all LOOP_DIAGNOSE Step 5 + Step 6 guardrails.
- Compose with previous LOOP_DIAGNOSE candidates coherently.
- Implementation is one paragraph or trivial.

### Dead Region

Candidates that:

- Propose protocol-level LOOP_DIAGNOSE changes from 3 chains.
- Propose Predictive RC implementation steps from 1 chain.
- Propose cross-cutting rules from 1-chain evidence.
- Modify SIC/MVL+ pipeline structure.
- Replace previous LOOP_DIAGNOSE candidates instead of composing.

### Boundary Region

Candidates that:

- Have HIGH evidence at the dimension level but moderate evidence at the prosecution-strength level (O3 has 1-chain P3 evidence; the rule itself is supported but its cross-chain generalization is not).
- Are zero-cost monitoring extensions (O8) — useful but not preventive.
- Are one-time content cleanup (O7) — useful but not generalizable.

### Unexplored Region

- Candidates that change LOOP_DIAGNOSE protocol substantively (out of scope per Step 6).
- Candidates that implement Predictive RC architecture (out of scope; Research Frontier).
- Candidates that change MVL+ pipeline structure (out of scope).

## Candidate Verdicts

### Candidate O1 — Sensemaking Terminology-Interrogation Rule (Extends M1+N2)

Prosecution:

The unified rule (Phase 1 / Constraints + Phase 1 / Foundational Principles + SV2+ Terminology) increases Sensemaking Phase 3 cognitive load. The recognition cue for "new noun phrase introduced in SV2 onward that is treated as stable" is judgment-dependent — what counts as "stable in subsequent versions"? A rule that fires on every new noun phrase would be too noisy.

Defense:

Cross-chain pattern P1 at 3 chains supports the rule shape. The recognition cue is bounded by "treated as stable in SV3-SV6 progression" — descriptive nouns that appear once and are dropped do not count. The rule extends an existing surface (Phase 3 / Ambiguity Collapse) rather than creating a new one. Composition with M1+N2 is mechanical: same rule shape, broader target list.

Collision:

Defense survives. The judgment-dependency objection is partly mitigated by the explicit recognition cue (stable across SV3-SV6 progression). Composition with M1+N2 is the right shape for cross-chain candidate accumulation.

Dimension positions:

- Evidence Strength: HIGH (cross-chain P1 at 3 chains).
- Recurrence Prevention: HIGH.
- Evaluation Gate Specificity: HIGH (next 3 MVL+ runs, observable in Phase 3 output).
- Overreach Risk: LOW (extends existing M1+N2 surface).
- Composition: HIGH (clean extension).
- Implementation Cost: LOW.

Verdict: SURVIVE.

Constructive output:

Promote as ACTIONABLE. Risk class: low. Evaluation gate: in next 3 MVL+ runs engaging Sensemaking with new noun phrases introduced in SV2 onward, at least one Phase 3 ambiguity-collapse pair targets the terminology. If zero of three runs produce such entries, downgrade to monitoring.

### Candidate O2 — Critique Operation-Parsimony Dimension (Sister To M3+N4)

Prosecution:

Adding a third project-specific dimension brings Critique's dimension list to 6 default + 3 project-specific = 9 dimensions. Cognitive load grows; future Critique runs may need to triage which dimensions apply. "Operation parsimony" recognition cue — "candidate proposes operations, routines, or protocol steps" — is judgment-dependent.

Defense:

Cross-chain pattern P2 at 3 chains supports the rule shape. The Critique reference's "modified per problem" language already accommodates dimension variation; not all dimensions apply to all problems. M3 + N4 + O2 form a coherent set of three project-specific axes (state-redundancy, cultural-fit, operation-parsimony) for Homegrown evaluations. The dimension-count concern is bounded by the "applied per problem" rule.

Collision:

Defense survives. The dimension-count objection is real but bounded; the alternative (Critique without project-specific dimensions) is the failure pattern this candidate fixes.

Dimension positions:

- Evidence Strength: HIGH (cross-chain P2 at 3 chains).
- Recurrence Prevention: HIGH.
- Evaluation Gate Specificity: HIGH.
- Overreach Risk: LOW.
- Composition: HIGH (sister to M3+N4; together = three project-specific Critique dimensions).
- Implementation Cost: LOW.

Verdict: SURVIVE.

Constructive output:

Promote as ACTIONABLE. Risk class: low. Evaluation gate: in next 3 Critique runs evaluating candidates that propose operations or routines, the operation-parsimony dimension appears in the dimension list with non-trivial weight.

### Candidate O3 — Critique Prosecution-Strength Check (User-Perspective)

Prosecution:

Single-chain evidence (P3 at 1 chain). Reading `_branch.md` Source Input and constructing prosecution against user-stated concerns is judgment-dependent — "address user's concerns at the level expressed" requires interpretation. With only 1 chain showing the failure pattern, promoting to ACTIONABLE is at the borderline of Step 5 ("do not propose broad rewrites from one weak correction chain"). The rule could over-fire by demanding user-perspective objections even when the user's source-input concerns are already covered by dimension-level objections.

Defense:

The rule is bounded: at least one prosecution objection must address one user-stated concern. It does not require multiple objections; it does not require the prosecution to be exhaustive. The recognition cue ("read `_branch.md` Source Input") is mechanical. The corrected loop's prosecution against Candidate A (constructing the user-perspective objection verbatim) demonstrates the rule's practical applicability. Single-chain evidence is the borderline; the rule's narrow scope mitigates overreach.

Collision:

The prosecution's "single-chain evidence" objection is real. The rule is at the boundary of ACTIONABLE vs DEFERRED. Defense's "narrow scope mitigates overreach" survives if the candidate is promoted with explicit "single-chain evidence; revisit if not effective in next 3 runs" caveat. Without that caveat, the rule risks promoting a heuristic from one observation.

Dimension positions:

- Evidence Strength: MEDIUM-HIGH (1-chain per-chain evidence; the rule's specific prosecution form is observable in the corrected critique).
- Recurrence Prevention: MEDIUM-HIGH (catches the specific failure pattern).
- Evaluation Gate Specificity: HIGH.
- Overreach Risk: MEDIUM (single-chain evidence with explicit caveat; bounded scope).
- Composition: MEDIUM (new surface in Critique; not previously covered).
- Implementation Cost: LOW.

Verdict: SURVIVE with explicit single-chain caveat.

Constructive output:

Promote as ACTIONABLE with the caveat: "single-chain evidence (P3 at 1 chain); revisit if not effective in next 3 runs OR if the next LOOP_DIAGNOSE run does not show another P3 instance." Risk class: low-medium. Evaluation gate: in next 3 Critique runs against surviving candidates, at least one prosecution objection addresses a user-stated concern from `_branch.md` Source Input.

### Candidate O4 — Innovation Candidate-Discrimination Check

Prosecution:

Single-chain evidence (P4 at 1 chain). "Cosmetic vs structural variant" is judgment-dependent. The rule could over-fire when candidates differ structurally but share surface naming.

Defense:

The rule's recognition cue (multiple candidates produce outcomes that differ only in cosmetic/wording details) is bounded. The corrected loop's Assembly Check explicitly distinguishes the cosmetic variants in this chain — demonstrating the rule's applicability. Single-chain evidence is the borderline; the rule's narrow scope mitigates overreach.

Collision:

Same shape as O3: borderline ACTIONABLE vs DEFERRED. Defense survives with the same single-chain caveat.

Dimension positions:

- Evidence Strength: MEDIUM-HIGH (1-chain per-chain evidence).
- Recurrence Prevention: MEDIUM (catches the specific cosmetic-variant pattern).
- Evaluation Gate Specificity: MEDIUM-HIGH.
- Overreach Risk: MEDIUM.
- Composition: MEDIUM (new surface in Innovation).
- Implementation Cost: LOW.

Verdict: SURVIVE with explicit single-chain caveat.

Constructive output:

Promote as ACTIONABLE with the caveat: "single-chain evidence (P4 at 1 chain); revisit if not effective in next 3 runs OR if the next LOOP_DIAGNOSE run does not show another P4 instance." Risk class: low-medium. Evaluation gate: in next 3 Innovation runs producing cosmetically similar candidates, the Test phase explicitly distinguishes them.

### Candidate O7 — Mark Prior Finding As Corrected (Mirrors M7+N7)

Prosecution:

Content cleanup, not process-level prevention. The risk it addresses (a runner executing the prior's "Route-Memory Preflight" recommendation in isolation) is bounded.

Defense:

Trivial cost; mirrors M7+N7 pattern; consistency across diagnostic chains is itself valuable. The corrected `finding.md` already has `corrects:` pointing at the prior; this completes the reciprocal link.

Collision:

Defense survives. Cost is trivial; consistency with M7+N7 is mechanical.

Dimension positions:

- Evidence Strength: HIGH (asymmetric annotation observable).
- Recurrence Prevention: LOW (one-time fix).
- Evaluation Gate Specificity: HIGH.
- Overreach Risk: ZERO.
- Composition: HIGH (mirrors M7+N7).
- Implementation Cost: TRIVIAL.

Verdict: SURVIVE.

Constructive output:

Promote as ACTIONABLE (content cleanup track). Risk class: zero. Evaluation gate: prior `finding.md` frontmatter contains `corrected_by:` and a top-level Status note appears at the start of the body.

### Candidate O8 — Continue Cross-Chain Monitoring + M6 Effectiveness Track (Extends M8+N8)

Prosecution:

Three monitoring tracks (P3, P4 patterns, M6 effectiveness) require ongoing observation. The user has to keep this finding visible across future LOOP_DIAGNOSE runs to maintain the tracks.

Defense:

LOOP_DIAGNOSE Step 5 prescribes monitoring for borderline cases. Cross-chain promotion (M6) needs effectiveness tracking to validate the promotion. The two-track monitoring structure (per-chain in normal MVL+ runs; cross-chain across LOOP_DIAGNOSE runs) tracks two evidence types at two cadences; M6 effectiveness adds a third track that is naturally observed during future LOOP_DIAGNOSE runs.

Collision:

Defense survives. Multi-track monitoring is bounded by "observe at the next LOOP_DIAGNOSE run completion."

Dimension positions:

- Evidence Strength: N/A (meta-evaluation gate).
- Recurrence Prevention: MEDIUM (gate function).
- Evaluation Gate Specificity: HIGH.
- Overreach Risk: ZERO.
- Composition: HIGH (extends M8+N8).
- Implementation Cost: ZERO.

Verdict: SURVIVE.

Constructive output:

Promote as ACTIONABLE (always-on baseline, extends M8+N8). Risk class: zero. Evaluation gate: when the fourth LOOP_DIAGNOSE run completes, document P1/P2/P3/P4 chain count and assess M6 effectiveness.

### Candidate M6 PROMOTION — Cross-Cutting "Name-And-Test Load-Bearing Anchors" Pattern

Prosecution:

Three chains is the trigger but also a small sample. The P1 family covers three layers (Constraints, Foundational Principles, Terminology) with the liberal reading; under a stricter reading, P1 strictly applies to Phase 1 axiom items only and has 2 chains, not 3. M6 promotion at 3 chains may over-fit. The rule's "load-bearing concept" recognition cue is judgment-dependent at the application layer.

Defense:

The previous LOOP_DIAGNOSE finding's revival trigger was explicit: *"revive after 3 or more correction chains show the same anchor-or-dimension covertly-held-assumption pattern."* The trigger language used "anchor-or-dimension" — broader than "Phase 1 axiom items." The liberal reading (load-bearing concept at any layer) is consistent with the trigger language. Sensemaking's Ambiguity 1 in this chain explicitly tested the strict-vs-liberal reading and resolved on the liberal side. Per-discipline patches (M1+N2+O1; M3+N4+O2) remain the concrete instances; M6 is the formalization that gives them a common rule shape, not a replacement.

Collision:

Defense survives. The previous finding's revival trigger language is verbatim "anchor-or-dimension covertly-held-assumption pattern"; three chains × three layers/axes meet that trigger under the natural reading. The over-fitting concern is real but mitigated by the per-discipline patches remaining as concrete instances and by O8's M6-effectiveness monitoring track.

Dimension positions:

- Evidence Strength: HIGH (3 chains × 3 layers + 3 axes; revival trigger explicitly cited).
- Recurrence Prevention: HIGH.
- Evaluation Gate Specificity: HIGH.
- Overreach Risk: LOW (mechanically triggered per previous trigger language; per-discipline patches retained as concrete instances).
- Composition: HIGH (formalizes M1+N2+O1; M3+N4+O2 patterns).
- Implementation Cost: LOW.

Verdict: SURVIVE — PROMOTE from DEFERRED to ACTIONABLE.

Constructive output:

Promote as ACTIONABLE. Risk class: low. Evaluation gate: in next 3 MVL+ runs, both Sensemaking Phase 3 (test load-bearing concepts at any layer) AND Critique Phase 0 (include at least one project-specific risk dimension) show the rule firing. M6 effectiveness assessed at the fourth LOOP_DIAGNOSE run completion via O8.

### Candidate Q-RF — Quality-Awareness Gap (Research Frontier)

Prosecution (against treating as a maintenance candidate):

Predictive RC implementation is a multi-phase architectural component (per `enes/desc.md`). Proposing implementation steps from one chain's evidence violates LOOP_DIAGNOSE Step 5. The system-level concern is real but its corrective surface is at the architectural layer, not the per-paragraph patch layer.

Defense:

The user's metacognitive correction signal is real diagnostic evidence. Surfacing the gap as Research Frontier preserves the observation without forcing premature implementation. The CONCLUDE template explicitly distinguishes Monitoring, Blocked, Research Frontiers, and Refinement Triggers — Research Frontiers is the right placement for "no known path; requires new investigation."

Collision:

Prosecution wins on "not a maintenance candidate"; defense wins on "Research Frontier framing." Together: Q-RF is documented as Research Frontier with reference to `enes/desc.md` Predictive RC architecture; no maintenance candidate proposed; the diagnostic verdict's "Recommended next step" may reference Q-RF as longer-horizon direction.

Dimension positions (as Research Frontier, not as candidate):

- Evidence Strength: MEDIUM-HIGH (system-level argument grounded in `enes/desc.md`).
- Recurrence Prevention: N/A (not a candidate).
- Evaluation Gate Specificity: N/A.
- Overreach Risk: LOW (Research Frontier framing prevents overreach).
- Composition: N/A.

Verdict: SURVIVE as Research Frontier in CONCLUDE Open Questions / Research Frontiers subsection. NOT a maintenance candidate.

### Previous LOOP_DIAGNOSE Candidates — Status Update

Cross-chain evidence and previous deferred-state from this run updates the status of previous LOOP_DIAGNOSE candidates without re-evaluating them:

- **M1** (anchor-interrogation prompt): unified into M1+N2+O1 (now covers Constraints + Foundational Principles + Terminology). M6 promotion subsumes the rule pattern.
- **M3** (duplicate-derivable-state dimension): retained; sister to N4 + O2. M6 promotion subsumes the rule pattern.
- **M4** (Goal-clause balance check, deferred): no D-prime evidence in this chain. Gate unchanged.
- **M5** (Comparator-surfacing prompt, deferred): no new evidence. Gate unchanged.
- **M6** (cross-cutting "name-and-test" pattern, deferred): **PROMOTES to ACTIONABLE this run.**
- **M7** (mark prior finding superseded): mirrored by N7 + O7; pattern consistent.
- **M8** (monitoring): extended by N8 + O8; M6 effectiveness track added.
- **M9** (canary test, deferred): no monitoring ambiguity yet.
- **N5** (output-level source verification, deferred): N2's process-rule still in evaluation window; gate unchanged.
- **N6** (cultural-norms manifest file, deferred): N1 in evaluation window; gate unchanged.
- **N9** (LOOP_DIAGNOSE protocol promotion-gate documentation, deferred): with M6 actually promoting, N9 has its first reference event. Promotion still deferred per LOOP_DIAGNOSE Step 6 (5-10 stable findings).

## Assembly Check

Surviving assembly:

```text
O1 (Sensemaking terminology-interrogation; extends M1+N2 to terminology layer)
  + O2 (Critique operation-parsimony dimension; sister to M3+N4)
  + O3 (Critique prosecution-strength check; new surface, single-chain caveat)
  + O4 (Innovation candidate-discrimination check; new surface, single-chain caveat)
  + O7 (Mark prior finding corrected; mirrors M7+N7)
  + O8 (Extend M8+N8 monitoring with cross-chain + M6 effectiveness tracks)
  + M6 PROMOTION (cross-cutting "name-and-test load-bearing anchors" pattern, ACTIONABLE)
  + Q-RF (Quality-awareness gap; Research Frontier, not a candidate)
```

Emergent value:

- O1 + M6 cover the upstream Sensemaking shortcomings (B + A) at per-discipline patch layer AND formalization layer.
- O2 + O3 cover both Critique surfaces (dimension + prosecution) with separable corrective levers.
- O4 catches Innovation Assembly Check candidate-discrimination at per-chain layer.
- O7 + O8 maintain consistency with previous chains.
- M6 promotion is the first cross-chain promotion event; documents pattern accumulation across three chains.
- Q-RF surfaces the quality-awareness gap as longer-horizon direction without forcing premature implementation.

The assembly produces redundant coverage at terminology / dimension / prosecution / candidate-space layers, plus content cleanup, plus monitoring extension, plus cross-chain formalization, plus longer-horizon Research Frontier. Each component candidate is independently evaluable by its own gate.

Assembly verdict: SURVIVE.

Refinements required before implementation:

- O1 must explicitly cite the three-layer scope (Constraints + Foundational Principles + SV2+ Terminology).
- O2 must reference cultural-norm corpus and previous M3+N4 dimensions.
- O3 must reference `_branch.md` Source Input as prosecution input AND include single-chain caveat.
- O4 must distinguish "cosmetic variant" from "structural variant" with explicit recognition cue AND include single-chain caveat.
- O7 reciprocal annotation only.
- O8 references `devdocs/improvement_observations.md` plus separate cross-chain + M6 effectiveness tracks.
- M6 promotion must cite the previous LOOP_DIAGNOSE finding's revival trigger language verbatim AND the 3-chain count AND name the per-discipline patches as concrete instances.
- Q-RF must be placed in Open Questions / Research Frontiers subsection per CONCLUDE template.

## Coverage Map

Evaluated:

- O1, O2, O3, O4, O7, O8 (six per-chain candidates).
- M6 PROMOTION (cross-chain promotion).
- Q-RF (Research Frontier).
- Previous LOOP_DIAGNOSE candidate status updates (M1-M9, N1-N9).

Unexplored but not blocking:

- LOOP_DIAGNOSE protocol-level changes (out of scope per Step 6).
- Predictive RC implementation steps (out of scope; Q-RF Research Frontier).
- MVL+ pipeline structure changes (out of scope).

Coverage judgment:

Sufficient. Six clean per-chain SURVIVORS plus M6 promotion plus Q-RF Research Frontier. Deferred candidates have concrete revival triggers. Unexplored regions are out-of-scope.

## Signal

TERMINATE with ranked survivors:

1. **PROMOTE: M6** (cross-cutting "name-and-test load-bearing anchors" pattern, DEFERRED → ACTIONABLE) — strongest cross-chain claim.
2. **SURVIVE: O1** (Sensemaking terminology-interrogation; extends M1+N2) — upstream prevention.
3. **SURVIVE: O2** (Critique operation-parsimony dimension; sister to M3+N4) — downstream detection.
4. **SURVIVE: O3** (Critique prosecution-strength check; single-chain caveat) — Critique surface separable from O2.
5. **SURVIVE: O4** (Innovation candidate-discrimination check; single-chain caveat) — Innovation surface.
6. **SURVIVE: O7** (mark prior finding corrected; mirrors M7+N7) — content cleanup.
7. **SURVIVE: O8** (extend M8+N8 monitoring with cross-chain + M6 effectiveness tracks) — always-on baseline.
8. **RESEARCH FRONTIER: Q-RF** (quality-awareness gap; NOT a candidate) — longer-horizon direction.
9. **RETAINED DEFERRED:** previous M4, M5, M9, N5, N6, N9 with gates unchanged or strengthened.

## Convergence Telemetry

Dimension coverage: complete. All four critical dimensions (Evidence Strength, Recurrence Prevention, Evaluation Gate Specificity, Overreach Risk) were evaluated for every candidate, plus the two non-critical dimensions.

Adversarial strength: STRONG. Strongest objections constructed for each candidate (judgment-dependency for O1; dimension-count for O2; single-chain evidence for O3 and O4; not-maintenance for O7; multi-track-monitoring for O8; sample-size and over-fitting for M6 promotion; not-a-candidate framing for Q-RF).

Landscape stability: STABLE. The viable region is consistent: low-overreach, near-term gates, narrow per-discipline patches survive; cross-chain promotion follows explicit revival trigger; protocol-level changes from limited evidence remain deferred; system-level concerns are framed as Research Frontiers.

Clean SURVIVE exists: yes, multiple. Six per-chain candidates plus one promotion plus one Research Frontier framing.

Failure modes observed: none. Wrong dimensions avoided. Rubber-stamping avoided (single-chain candidates O3 and O4 carry explicit caveats; Q-RF is framed as Research Frontier rather than candidate). Nitpicking avoided (six survived, multiple deferred). Dimension blindness avoided (Overreach Risk catches both Step 5 and Step 6 guardrails). False convergence avoided (assembly check confirmed redundant coverage). Evaluation drift avoided (dimensions held constant). Self-reference collapse avoided (external reference points: LOOP_DIAGNOSE Step 4-6 verbatim, previous LOOP_DIAGNOSE finding's revival trigger language verbatim, prior + corrected artifacts).

Overall: PROCEED.
