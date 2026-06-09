# Critique: Tidy Loop Failure Attribution

## User Input

`devdocs/inquiries/2026-04-27_tidy_loop_failure_attribution/_branch.md`

## Phase 0: Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Evidence grounding | Critical | Attribution cites specific old-loop artifacts and corrected-finding claims. |
| Causal precision | Critical | Distinguishes root cause, contributor, propagation, missed catch, and finalization. |
| Fairness to disciplines | High | Does not blame downstream stages for faithfully using inherited premises. |
| Actionability | High | Produces prevention checks, not just diagnosis. |
| Confidence calibration | High | Uses confidence levels and avoids pretending exact certainty where evidence is partial. |
| Completeness | High | Covers Exploration, Sensemaking, Decomposition, Innovation, Critique, and CONCLUDE. |
| Avoids over-abstraction | Medium | Gives concrete mistakes, not generic process language. |

## Phase 1: Fitness Landscape

### Viable Region

- Role-based attribution.
- Sensemaking as primary root cause.
- Exploration as upstream contributing failure.
- Critique as primary missed-catch failure.
- Decomposition and Innovation as propagation/suppression stages.
- CONCLUDE as finalization amplifier.
- Prevention checks per discipline.

### Boundary Region

- Blaming Critique as co-primary root.
- Blaming Exploration as root.
- Treating CONCLUDE as a protocol failure.

### Dead Region

- Blaming only the final finding.
- Treating all disciplines as equally responsible.
- Saying the failure was just "bad judgment."
- Ignoring downstream propagation.

## Phase 2: Candidate Verdicts

### Candidate A: Exploration As Root Cause

**Prosecution:** Exploration first introduced the bad frame: "Folder Identity Is Load-Bearing." It labeled rename/archive risk as confirmed and failed to inspect architecture/archive guidance.

**Defense:** Exploration maps territory; it is allowed to surface signals. Sensemaking is responsible for testing anchors and collapsing ambiguity.

**Collision:** Exploration is an upstream contributor, but not the deepest root. It gave Sensemaking bad raw material with too much confidence.

**Verdict:** REFINE.

**Constructive output:** Exploration failure = incomplete artifact scan + false confidence.

### Candidate B: Sensemaking As Root Cause

**Prosecution:** Sensemaking explicitly stabilized the wrong model: `devdocs/inquiries/` as "canonical flat store." It gave HIGH confidence to rejecting datetime prefixes and physical archive without testing canonical vs provenance.

**Defense:** Sensemaking inherited path-stability evidence from Exploration and did not invent the concern.

**Collision:** Defense reduces but does not remove responsibility. Sensemaking's job is to test exactly this kind of anchor dominance.

**Verdict:** SURVIVE.

**Constructive output:** Primary root-cause discipline = Sensemaking. Specific failure = wrong anchor + premature ambiguity collapse + definitional check failure.

### Candidate C: Decomposition As Root Cause

**Prosecution:** Decomposition named "Canonical Folder Identity" and made storage/view separation the dominant structure.

**Defense:** Decomposition depends on Sensemaking's clarified whole. If the whole is wrong, decomposition will reflect that wrong topology.

**Collision:** Defense wins. Decomposition propagated and amplified the model, but was not root.

**Verdict:** REFINE.

**Constructive output:** Decomposition failure = wrong coupling map and missing pieces: canonical/provenance boundary, active/cold boundary, reference-severity boundary.

### Candidate D: Innovation As Root Cause

**Prosecution:** Innovation recommended README and weakened date/archive candidates.

**Defense:** It still generated date-prefix and archive-related candidates. Its seed explicitly inherited the constraint "do not break canonical inquiry paths unless benefit is overwhelming."

**Collision:** Innovation did not lack alternatives; it evaluated them under the wrong frame.

**Verdict:** REFINE.

**Constructive output:** Innovation failure = early frame lock / inherited-constraint obedience. It should challenge inherited constraints when user intuition points strongly to a discarded option.

### Candidate E: Critique As Root Cause

**Prosecution:** Critique made Path stability Critical and killed date/archive options. It did not include "correct canonical model" or "maintenance burden" as dimensions.

**Defense:** Critique's dimensions came from the previous stages. It can only evaluate from the understanding it receives.

**Collision:** Both are strong. Critique is not the root cause, but it is the main missed-catch discipline because dimension construction is Critique's own responsibility.

**Verdict:** REFINE.

**Constructive output:** Critique failure = wrong dimensions + weak adversarial test of the selected README survivor.

### Candidate F: CONCLUDE As Root Cause

**Prosecution:** CONCLUDE/final finding wrote "flat canonical store" and recommended README. The practical action followed from the final artifact.

**Defense:** CONCLUDE compiles the verdict; it did not construct the bad premise. The phrase came from upstream outputs.

**Collision:** Defense wins. CONCLUDE amplified the failure, but it is not root cause.

**Verdict:** REFINE.

**Constructive output:** CONCLUDE failure = finalization amplification. Potential improvement: preserve uncertainty when final recommendation rests on a contested premise.

### Candidate G: Role-Based Attribution

**Prosecution:** It may feel less satisfying than naming one failing discipline.

**Defense:** It matches the evidence. The mistake entered, stabilized, propagated, evaluated, and finalized at different points.

**Collision:** Defense wins. This is the cleanest model.

**Verdict:** SURVIVE.

**Constructive output:** Use roles:

- Exploration: introduced.
- Sensemaking: stabilized.
- Decomposition: encoded.
- Innovation: suppressed alternatives under bad constraint.
- Critique: failed to catch.
- CONCLUDE: finalized/amplified.

## Phase 3.5: Assembly Check

### Assembly Candidate: Root + Missed-Catch Attribution

Best final attribution:

1. **Primary root cause:** Sensemaking.
2. **Upstream contributor:** Exploration.
3. **Structural propagation:** Decomposition.
4. **Candidate suppression:** Innovation.
5. **Primary missed catch:** Critique.
6. **Finalization amplifier:** CONCLUDE.

**Prosecution:** This may understate Critique's responsibility because Critique declared the wrong evaluation landscape "STRONG."

**Defense:** The assembly explicitly names Critique as the primary missed catch. Root cause and missed catch are different roles.

**Collision:** Defense wins.

**Verdict:** SURVIVE.

## Phase 4: Coverage Map

### Covered

- Where the wrong premise first appeared.
- Which discipline stabilized it.
- Which disciplines propagated it.
- Which discipline should have caught it.
- What each mistake was.
- What prevention checks follow.

### Deferred

- Editing discipline specs to add prevention checks.
- Automating loop-diagnosis across multiple correction chains.
- Re-analyzing every previous bad finding.

### Convergence

The answer is stable. Sensemaking is root; Critique is missed catch; Exploration is upstream contributor.

## Signal

TERMINATE with ranked survivors:

1. **Root + missed-catch attribution**: final answer shape.
2. **Sensemaking root cause**: primary source of wrong stable model.
3. **Critique missed catch**: validation failure.
4. **Exploration upstream contributor**: incomplete scan/false confidence.
5. **Role-based attribution table**: best presentation format.

## Convergence Telemetry

- **Dimension coverage:** Full for the user's question.
- **Adversarial strength:** STRONG. Each possible culprit was prosecuted and defended.
- **Landscape stability:** STABLE.
- **Clean SURVIVE exists:** YES. Root + missed-catch attribution.
- **Failure modes observed:** No new critique failure. The diagnosed old-loop failure was wrong dimensions in prior Critique.
- **Overall:** PROCEED.
