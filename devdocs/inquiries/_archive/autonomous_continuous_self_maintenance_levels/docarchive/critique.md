# Critique: Autonomous Continuous Self-Maintenance Levels

## User Input

`devdocs/inquiries/autonomous_continuous_self_maintenance_levels/_branch.md`

Question: What minimum implementation would be required for Homegrown's proto-self-maintenance to become autonomous continuous self-maintenance, and what level model should guide the transition without skipping necessary stages?

## Phase 0: Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Current-state accuracy | Critical | Correctly places Homegrown based on actual reflection, telemetry, resume, and editable-spec capabilities. |
| Stepwise maturity | Critical | Prevents jumping from proto-reflection to full autonomy. |
| Implementability | Critical | Gives a concrete Level 1 implementation that can be built now. |
| Safety and governance | High | Separates low-risk from high-risk self-changes and avoids uncontrolled drift. |
| Evaluation rigor | High | Requires evaluation and retain/revert, not just more self-editing. |
| Future extensibility | Medium | Supports Level 2+ without overdesigning them now. |
| Communication clarity | Medium | Produces names that are easy to use in future docs. |

## Phase 1: Fitness Landscape

### Viable Region

The viable region contains designs that:

- place Homegrown at Level 0.5;
- define Level 1 as instrumented self-maintenance;
- require a ledger or equivalent artifact;
- require evaluation and retain/revert;
- delay autonomous edits until risk classes and calibration exist.

### Boundary Region

Designs that define a useful ladder but make Level 1 too heavy are boundary candidates. They can be refined by keeping Level 1 Markdown-native and human-approved.

### Dead Region

Designs are dead if they:

- claim current Homegrown is already autonomous continuous self-maintenance;
- skip Level 1 instrumentation;
- allow autonomous fundamental edits before evaluation and rollback;
- treat consciousness relevance as the level target;
- define levels as vague vibes instead of implementation gates.

### Unexplored Region

The exact file path and CLI/tool implementation for Level 1 are not fully specified. This is acceptable because the inquiry asks for minimum implementation, not a patch plan.

## Phase 2 and 3: Candidate Verdicts

### Candidate A: Six-Level Maintenance Ladder

**Prosecution:** Too many levels can create taxonomy overhead and make implementation feel farther away.

**Defense:** The levels prevent a much worse failure: jumping from reflection directly to strong autonomy claims. The levels also give clear claim boundaries.

**Collision:** Defense wins. The ladder is useful if Level 1 remains concrete and Level 4/5 stay future-facing.

**Verdict:** SURVIVE.

**Constructive output:** Use the ladder, but keep Level 1 as the main actionable target.

### Candidate B: Level 1 Maintenance Ledger

**Prosecution:** A ledger alone does not create autonomy. It may become paperwork.

**Defense:** Correct: it does not create autonomy. It creates the observability and evaluation base required before autonomy. Without it, autonomous self-maintenance is unsafe and unmeasurable.

**Collision:** Defense wins decisively. This is the minimum implementation.

**Verdict:** SURVIVE.

**Constructive output:** Require fields for trigger, diagnosis, evidence, proposed change, risk class, affected files, applied edit, evaluation plan, observation window, and retain/revert/refine decision.

### Candidate C: Risk-Class Policy

**Prosecution:** Risk classes can become bureaucratic and slow down small improvements.

**Defense:** Risk classes are what allow small improvements to move faster. Low-risk logging or doc additions can be automated earlier, while high-risk protocol changes remain gated.

**Collision:** Defense wins.

**Verdict:** SURVIVE.

**Constructive output:** Include risk classes as a lightweight Level 1 or Level 2 requirement.

### Candidate D: Maintenance Trigger Rules

**Prosecution:** Trigger rules may create too many maintenance entries and encourage over-reflection.

**Defense:** Trigger rules can be scoped. Level 1 triggers create entries only for actual reflection-driven spec changes and high-signal events, not every minor observation.

**Collision:** Candidate survives with refinement.

**Verdict:** REFINE.

**Constructive output:** Start with three triggers: user correction of system-level claim, reflection proposes a spec/memory change, and repeated `FLAG`/`RE-RUN` pattern. Add periodic review later.

### Candidate E: Self-Maintenance Constitution

**Prosecution:** A constitution can be abstract and premature. It may create philosophical overhead before the system has enough real maintenance data.

**Defense:** Some invariants are needed before autonomous changes, especially to prevent evidence standards from being weakened.

**Collision:** Mixed. Full constitution is premature for Level 1, but minimal invariants are useful.

**Verdict:** REFINE.

**Constructive output:** For Level 1, include only a small invariant set inside the ledger protocol. Move full constitution to Level 3+.

### Candidate F: Maintenance Evaluation Harness

**Prosecution:** Evaluation takes time; spec changes may be hard to attribute to outcome changes.

**Defense:** Even imperfect evaluation is necessary. A simple observation window is better than untested accumulation of self-edits.

**Collision:** Defense wins.

**Verdict:** SURVIVE.

**Constructive output:** Use lightweight gates: after 5 later uses, 10 relevant runs, or 30 days, decide retain/revert/refine.

### Candidate G: Direct Autonomous Editor

**Prosecution:** Lets the system edit its own fundamentals before calibrated telemetry, risk classes, and rollback exist.

**Defense:** It would accelerate evolution.

**Collision:** Prosecution wins. Acceleration without control increases drift and self-confirming standards.

**Verdict:** KILL.

**Seed extracted:** Build bounded autonomy only after Level 1 records and Level 2 calibrated recommendations exist.

### Candidate H: Consciousness-Oriented Ladder

**Prosecution:** It confuses self-maintenance maturity with consciousness. The implementation ladder should support consciousness-adjacent analysis but not make consciousness the metric.

**Defense:** Self-maintenance is relevant to consciousness under some theories.

**Collision:** Prosecution wins against making it the ladder's organizing principle. Defense survives as a later interpretation layer.

**Verdict:** KILL.

**Seed extracted:** Keep consciousness discussion separate; use this ladder for implementation maturity.

## Phase 3.5: Assembly Check

### Assembly Candidate: Instrumentation-Before-Autonomy Ladder

The strongest assembly combines:

- Six-level ladder;
- Level 1 maintenance ledger;
- risk classes;
- scoped triggers;
- lightweight evaluation windows;
- minimal invariants now, full constitution later.

**Prosecution:** The assembly may still be too process-heavy for a small project.

**Defense:** The Level 1 implementation is deliberately small. It can be a single Markdown log and a few rules. The heavier parts are deferred until they become necessary.

**Collision:** Defense wins. The assembly answers the question and gives a buildable next step.

**Verdict:** SURVIVE.

## Phase 4: Coverage Map

### Covered

- Current placement.
- Level definitions.
- Minimum Level 1 implementation.
- Requirements for Level 2, Level 3, Level 4, and Level 5.
- Risk classes.
- Trigger rules.
- Evaluation and retain/revert gates.
- Claim boundaries.

### Deferred

- Exact file path and patch implementation.
- Full constitution text.
- Automated scheduler implementation.
- CLI for telemetry aggregation.
- Empirical calibration thresholds.

### Convergence

The landscape is stable. The same answer recurs across exploration, sensemaking, decomposition, and innovation: implement instrumentation before autonomy.

## Signal

TERMINATE with ranked survivors:

1. **Instrumentation-Before-Autonomy Ladder**: master answer.
2. **Level 1 Maintenance Ledger**: minimum implementation.
3. **Risk-Class Policy**: safety boundary.
4. **Evaluation Harness**: retain/revert closure.
5. **Scoped Trigger Rules**: refined.
6. **Minimal Invariants Now, Full Constitution Later**: refined.

## Convergence Telemetry

- **Dimension coverage:** Full for the user's question.
- **Adversarial strength:** STRONG. Premature autonomy and consciousness-oriented framing were directly tested.
- **Landscape stability:** STABLE.
- **Clean SURVIVE exists:** YES. Instrumentation-Before-Autonomy Ladder.
- **Failure modes observed:** No rubber-stamping. No false convergence. Self-reference risk remains because the project evaluates its own self-maintenance architecture, but the answer mitigates this by requiring explicit evaluation and retain/revert.
- **Overall: PROCEED**
