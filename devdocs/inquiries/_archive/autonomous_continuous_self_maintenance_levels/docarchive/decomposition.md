# Decomposition: Autonomous Continuous Self-Maintenance Levels

## 1. Coupling Map

### Major Clusters

1. **Level taxonomy**
   - Defines what each maturity level means.
   - Strongly coupled to current-state assessment and next implementation target.

2. **Current-state assessment**
   - Identifies where Homegrown sits now.
   - Depends on actual artifacts: reflection, telemetry, resume, editable discipline specs, devdocs.

3. **Level 1 minimum implementation**
   - Defines the smallest build that moves Homegrown beyond proto.
   - Strongly coupled to maintenance ledger, evaluation plan, retain/revert decision.

4. **Autonomy progression**
   - Defines when triggers, diagnosis, proposals, applications, evaluation, and retain/revert become autonomous.
   - Coupled to telemetry, risk classes, and governance.

5. **Safety/governance**
   - Defines what changes are low-risk vs high-risk.
   - Coupled to when automation is allowed.

6. **Measurement and validation**
   - Defines what proves the maintenance loop works.
   - Coupled to claims about scientific credibility and future autonomy.

### Natural Boundaries

- **Boundary A:** Level taxonomy vs concrete Level 1 build.
- **Boundary B:** Self-maintenance capability vs consciousness relevance.
- **Boundary C:** Human-approved maintenance vs autonomous maintenance.
- **Boundary D:** Observing process quality vs changing system fundamentals.

### Bottom-Up Validation

The bottom-up atoms agree with the top-down clusters:

- Reflection observations and process-frontier questions belong to current-state assessment.
- Maintenance entries and retain/revert decisions belong to Level 1 implementation.
- PROCEED/FLAG/RE-RUN standardization belongs to autonomy progression.
- Risk classes and identity invariants belong to governance.
- Outcome tracking belongs to measurement.

## 2. Question Tree

### Q1: What are the levels of continuous self-maintenance?

Verification criteria:

- [ ] Defines Level 0 through later levels.
- [ ] Names each level clearly.
- [ ] Specifies what becomes autonomous at each level.
- [ ] Avoids confusing self-maintenance levels with consciousness levels.

### Q2: Where is Homegrown now?

Verification criteria:

- [ ] Grounds the assessment in current artifacts.
- [ ] Credits reflection and editable fundamentals.
- [ ] Does not overclaim autonomous closure.
- [ ] Produces a single current-level verdict.

### Q3: What is the minimum implementation for Level 1?

Verification criteria:

- [ ] Defines a concrete artifact.
- [ ] Defines required fields.
- [ ] Defines when entries are created.
- [ ] Defines evaluation and retain/revert gates.
- [ ] Can be implemented without new complex runtime.

### Q4: What is required for Level 2?

Verification criteria:

- [ ] Defines telemetry-triggered recommendations.
- [ ] Requires standardized verdicts across routing-relevant disciplines.
- [ ] Keeps approval human-mediated.
- [ ] Defines how recommendation thresholds are calibrated.

### Q5: What is required for Level 3 and beyond?

Verification criteria:

- [ ] Defines bounded low-risk autonomous changes.
- [ ] Defines risk classes.
- [ ] Defines rollback.
- [ ] Defines higher-level continuous autonomy.
- [ ] Defers identity/developmental autonomy until prerequisites exist.

### Q6: What should be built next?

Verification criteria:

- [ ] Prioritizes the smallest useful step.
- [ ] Does not skip evaluation.
- [ ] Gives file/protocol-level implementation targets.
- [ ] Specifies success criteria.

### Q7: What should not be claimed yet?

Verification criteria:

- [ ] Blocks autonomous continuous self-maintenance claims until loop closure exists.
- [ ] Blocks consciousness claims.
- [ ] Blocks autonomous fundamental self-editing until governance exists.

## 3. Interface Map

### Q1 -> Q2

- **Flow:** Level definitions determine current placement.
- **Direction:** One-way.
- **Interface:** Q2 must use the criteria from Q1, not intuitive labels.

### Q2 -> Q3

- **Flow:** Current missing pieces determine Level 1 minimum.
- **Direction:** One-way.
- **Interface:** If current status is Level 0.5, Level 1 must close the smallest missing loop.

### Q3 -> Q4

- **Flow:** Level 2 needs Level 1 records to detect patterns and thresholds.
- **Direction:** One-way.
- **Interface:** Telemetry-triggered maintenance depends on maintenance entries and standardized outputs.

### Q4 -> Q5

- **Flow:** Bounded autonomy requires calibrated recommendations.
- **Direction:** One-way.
- **Interface:** Do not automate application before recommendations are reliable.

### Q5 -> Q7

- **Flow:** Later autonomy prerequisites constrain claims.
- **Direction:** One-way.
- **Interface:** If Level 3+ is not implemented, do not claim strong autonomy.

### Q3, Q4, Q5 -> Q6

- **Flow:** Build plan comes from the ladder.
- **Direction:** Many-to-one.
- **Interface:** Q6 chooses the next buildable level, not the most ambitious level.

## 4. Dependency Order

1. **Q1: Level taxonomy** comes first.
2. **Q2: Current placement** depends on the taxonomy.
3. **Q3: Level 1 minimum** depends on current placement.
4. **Q4: Level 2 requirements** depends on Level 1 artifacts.
5. **Q5: Level 3+ requirements** depends on Level 2 calibration.
6. **Q6: Next build** synthesizes Q3-Q5.
7. **Q7: Claim boundaries** follows from the whole ladder.

## 5. Self-Evaluation

### Independence

**Pass.** Each question can be answered as a focused section, with explicit dependencies.

### Completeness

**Pass.** The decomposition covers the level ladder, current location, next implementation, later levels, safety, and claim boundaries.

### Reassembly

**Pass.** Answering all questions produces a usable implementation roadmap for self-maintenance maturity.

### Tractability

**Pass.** Level 1 is deliberately scoped as a small artifact/protocol change.

### Interface Clarity

**Pass.** The critical interface is Q3 -> Q4: Level 2 should not exist before Level 1 records create usable data.

### Balance

**Pass.** Level 1 is the most detailed because it is the next action. Higher levels are less detailed because they should not be built yet.

### Confidence

**High.** The decomposition matches both the existing artifacts and the user's level-ladder intuition.
