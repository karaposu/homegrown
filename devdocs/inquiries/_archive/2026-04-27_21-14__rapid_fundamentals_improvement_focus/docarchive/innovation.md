# Innovation: Rapid Fundamentals Improvement Focus

## User Input

`devdocs/inquiries/2026-04-27_21-14__rapid_fundamentals_improvement_focus/_branch.md`

## Seed

Homegrown needs rapid improvement of its fundamentals. The current system is conceptually advancing, but the weak point is converting observed failures into durable improvements of disciplines, protocols, loops, and evidence practices.

Valuation signal: the project should not only generate more findings or more architecture. It should become better at learning from its own bad runs without jumping directly into premature autonomous self-maintenance.

## 1. Mechanism Variations

### 1. Lens Shifting

**Generic variation:** View the problem as "what improves a reasoning system fastest?"

- Candidate: tighten feedback loops around observed failures.
- New frame: speed comes from reducing the distance between failure and rule update.

**Focused variation:** View Homegrown as a Level 0.5 self-maintenance system trying to reach Level 1.

- Candidate: implement a human-guided self-maintenance ledger and correction-chain diagnosis.
- New frame: Level 1 does not require autonomy; it requires durable maintenance memory and closure.

**Contrarian variation:** View the project as a research instrument, not a software framework.

- Candidate: prioritize evidence records over feature growth.
- New frame: a good inquiry failure is valuable data, not just a bad output.

### 2. Combination

**Generic variation:** Combine user correction, prior finding, and later finding.

- Candidate: correction-chain diagnosis.
- Emergent value: the later better output reveals what the earlier output lacked.

**Focused variation:** Combine correction-chain diagnosis, self-maintenance ledger, and bounded patches.

- Candidate: evidence-to-fundamentals loop.
- Emergent value: diagnoses become tracked hypotheses that can be retained, reverted, or refined.

**Contrarian variation:** Combine meta-loop traversal with maintenance evidence only after the first correction-chain trial.

- Candidate: evidence-fed meta-loop.
- Emergent value: traversal becomes calibrated by known failure patterns instead of merely producing more artifacts.

### 3. Inversion

**Generic variation:** Instead of asking "what should we build next?", ask "what should we stop building until evidence improves?"

- Candidate: defer broad autonomy, full meta-loop optimization, and `/intuit` as central priorities.
- Result: protect the project from adding more under-calibrated moving parts.

**Focused variation:** Instead of "Reflection should inspect each discipline inside a run," ask "should later corrected runs inspect earlier runs?"

- Candidate: comparative loop diagnosis over correction chains.
- Result: the atomic object becomes the MVL/MVL+ run, not the individual discipline in isolation.

**Contrarian variation:** Instead of "fix the fundamentals directly," ask "what evidence would justify touching the fundamentals?"

- Candidate: maintenance candidate gate.
- Result: patches need evidence, risk class, and evaluation plan before changing source rules.

### 4. Constraint Manipulation

**Generic variation:** Add constraint: no autonomous self-editing.

- Candidate: human-guided maintenance loop.
- Effect: keeps the mechanism realistic and prevents premature autonomy.

**Focused variation:** Add constraint: first trial must use only three real correction chains and one or two low-risk patches.

- Candidate: fundamentals improvement sprint.
- Effect: makes the improvement loop immediately executable.

**Contrarian variation:** Add constraint: no new skill until the template works manually.

- Candidate: start `loop-diagnose` as a template/protocol draft, promote later.
- Effect: avoids over-formalizing a diagnostic operation before its shape is proven.

### 5. Absence Recognition

**Generic variation:** What is missing from the current project?

- Missing: a maintenance ledger that records proposed changes, evidence, risk, and outcomes.
- Candidate: `devdocs/self_maintenance.md`.

**Focused variation:** What is missing from MVL/MVL+ artifacts?

- Missing: a standard way to connect bad finding -> user correction -> improved finding -> system change.
- Candidate: correction-chain index and diagnosis output.

**Contrarian variation:** What should exist but maybe should not be formalized yet?

- Missing: automated diagnosis confidence scoring.
- Candidate: use coarse confidence manually first, because exact discipline attribution is itself an advanced analysis problem.

### 6. Domain Transfer

**Generic variation:** Transfer from incident postmortems.

- Candidate: treat bad MVL outputs as incidents with trigger, impact, root-cause hypothesis, corrective action, and follow-up.
- Adaptation: root cause remains probabilistic because cognitive failures rarely have one clean source.

**Focused variation:** Transfer from CI/regression testing.

- Candidate: every fundamentals patch gets an evaluation gate and later outcome.
- Adaptation: the "test" may be future inquiry behavior, not a deterministic unit test.

**Contrarian variation:** Transfer from lab notebooks.

- Candidate: record failed and inconclusive diagnoses, not only successful patches.
- Adaptation: negative evidence prevents the project from mythologizing its own improvements.

### 7. Extrapolation

**Generic variation:** If inquiry folders keep growing, unstructured learning gets worse.

- Candidate: maintenance ledger and correction-chain references become necessary for memory.

**Focused variation:** If meta-loop begins traversing before maintenance evidence exists, it may scale current weaknesses.

- Candidate: build evidence loop before stronger traversal.

**Contrarian variation:** If Homegrown becomes successful, the bottleneck shifts from generating protocols to knowing which protocols improved outcomes.

- Candidate: outcome-based fundamentals evolution.

## 2. Candidate Strategies

### A. Meta-Loop First

Build the larger runner now and let it traverse thinking space with Navigation as eyes.

- Novelty: medium.
- Scrutiny: weak as the top priority, because traversal does not itself diagnose bad fundamentals.
- Fertility: high later.
- Actionability: medium.
- Mechanism independence: appears through extrapolation and combination, but as downstream work.
- Verdict: defer as central focus.

### B. `/intuit` First

Build the hunch/intuition layer as the next strategic capability.

- Novelty: high.
- Scrutiny: weak for this specific question, because it adds a signal layer without maintenance conversion.
- Fertility: high for long-term autonomy.
- Actionability: medium.
- Mechanism independence: supported by prior roadmap, not by this rapid-improvement frame.
- Verdict: defer as central focus.

### C. External Validation First

Run Homegrown on external tasks and compare results.

- Novelty: low to medium.
- Scrutiny: strong for scientific credibility, incomplete for fundamentals improvement.
- Fertility: high if failures are diagnosed and logged.
- Actionability: medium.
- Mechanism independence: supported by scientific-summary concerns.
- Verdict: useful input, not the central mechanism.

### D. Structural Check First

Implement `tools/structural_check.sh` and enforce artifact shape.

- Novelty: low.
- Scrutiny: strong as hygiene, weak as reasoning-quality improvement.
- Fertility: medium.
- Actionability: high.
- Mechanism independence: supported by absence recognition.
- Verdict: do it as support, not the biggest focus.

### E. Full Autonomous Self-Maintenance First

Build an advanced system that detects failures, edits fundamentals, and evaluates itself.

- Novelty: high.
- Scrutiny: weak for current stage, because requirements and failure modes are still fuzzy.
- Fertility: high but dangerous.
- Actionability: low.
- Mechanism independence: fails constraint manipulation.
- Verdict: kill for now.

### F. Minimal Correction-Chain Learning Loop

Create a lightweight way to compare bad output, correction, and improved output.

- Novelty: medium.
- Scrutiny: strong.
- Fertility: high.
- Actionability: high.
- Mechanism independence: supported by lens shifting, combination, inversion, absence recognition, domain transfer, and extrapolation.
- Verdict: survives.

### G. Maintenance Ledger Only

Create `devdocs/self_maintenance.md` and manually enter proposed changes.

- Novelty: low.
- Scrutiny: partial; memory improves, but diagnosis remains ad hoc.
- Fertility: medium.
- Actionability: high.
- Mechanism independence: supported by absence recognition and domain transfer.
- Verdict: refine; insufficient alone.

### H. Loop-Diagnose Only

Create a protocol/template that diagnoses correction chains, but do not maintain a ledger yet.

- Novelty: medium.
- Scrutiny: partial; produces insight but lacks closure.
- Fertility: medium.
- Actionability: high.
- Mechanism independence: supported by combination and inversion.
- Verdict: refine; insufficient alone.

### I. Fundamentals Improvement Sprint

Run a small, explicit first sprint:

```text
1. create self-maintenance ledger schema
2. create lightweight loop-diagnose template/protocol
3. select three correction chains
4. run diagnoses
5. create ledger entries
6. apply one or two low-risk patches
7. evaluate retain/revert/refine after later use
8. repair structural_check support as hygiene
```

- Novelty: medium.
- Scrutiny: strong.
- Fertility: high.
- Actionability: high.
- Mechanism independence: strongest; it appears through six of seven mechanisms.
- Verdict: primary survivor.

## 3. Assembly Check

The strongest individual outputs combine into one architecture:

```text
correction-chain diagnosis
+ maintenance ledger
+ bounded patch policy
+ evaluation closure
+ structural check support
```

This assembly has emergent value that no piece has alone:

- Diagnosis without ledger creates insight but no durable memory.
- Ledger without diagnosis creates a backlog but weak evidence.
- Patching without evaluation creates unverified churn.
- Structural check without diagnosis creates shape compliance but not reasoning improvement.
- Meta-loop without this assembly creates traversal without calibration.

The best innovation is therefore not a new large discipline. It is a small evidence flywheel that turns already-occurring user-guided correction into maintainable fundamentals changes.

## 4. Strongest Objections

### Objection 1: This may slow down creative exploration.

Response: It should be deliberately small. The first version only needs three correction chains and one or two patches. It should not become a bureaucratic layer around every inquiry.

### Objection 2: Failure attribution may be too hard.

Response: The diagnosis does not need exact root cause. It needs evidence-backed candidate attributions with confidence and maintenance candidates. Low-confidence attributions can still be useful if they are not over-promoted.

### Objection 3: External validation is the real scientific bottleneck.

Response: External validation is necessary, but without maintenance conversion it produces reports rather than improved fundamentals. Once the evidence loop exists, external validation becomes much more valuable because every failure can enter the same ledger.

### Objection 4: A missing structural check is more concrete.

Response: Fixing the structural check is concrete and should happen, but it only validates artifact shape. The bigger missing capability is learning from reasoning-quality failures.

## 5. Innovation Output

Primary innovation:

> Treat user-corrected MVL/MVL+ reruns as the first empirical substrate for Homegrown self-maintenance.

Operational form:

```text
bad run + correction + improved run
-> comparative diagnosis
-> self-maintenance ledger entry
-> small patch
-> future retain/revert/refine decision
```

This is the biggest current focus because it directly improves the fundamentals from the highest-signal evidence the project already has.

## 6. Mechanism Coverage Telemetry

- Generators applied: 4 / 4.
- Framers applied: 3 / 3.
- Convergence: YES. Lens shifting, combination, inversion, constraint manipulation, absence recognition, domain transfer, and extrapolation all converge on a correction-chain evidence loop.
- Survivors tested: 9 / 9 candidate strategies.
- Failure modes observed: none. The run avoided single-mechanism trap, early frame lock, and innovation without grounding.
- Overall: PROCEED.
