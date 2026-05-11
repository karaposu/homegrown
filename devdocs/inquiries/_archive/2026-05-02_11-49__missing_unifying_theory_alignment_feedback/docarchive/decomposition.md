# Decomposition: Missing Unifying Theory for Alignment and Feedback

## 1. Coupling Map

### Whole

The whole is the suspected missing theory: an alignment-dynamics or cognitive-control layer that explains how scattered feedback/alignment operations form one self-maintenance cycle.

### Major Clusters

| Cluster | Internal Coupling | Notes |
| --- | --- | --- |
| C1. Alignment state | High | The system needs a notion of current state, not only individual records. |
| C2. Signal taxonomy | High | Signals need types: immediate, predictive, process, outcome, causal, traversal, maintenance. |
| C3. Evidence maturity | High | Signals change status as evidence accumulates or time passes. |
| C4. Control actions | High | Routes need semantics: monitor, continue, reflect, review, diagnose, navigate, branch, materialize, recover, revise. |
| C5. Calibration loop | High | Outcomes must update future predictions/routes; this connects to Predictive/Retrospective RC and Baldwin cycles. |
| C6. Existing operation interfaces | Moderate | Reflect, outcome review, loop diagnose, navigation, materialization, and meta-loop each use a local part of the dynamics. |
| C7. Autonomy policy | Moderate | Who is allowed to act on signals matters, but this may be later than the core theory. |

### Natural Boundaries

- State representation vs individual records.
- Signal detection vs route selection.
- Evidence maturity vs causal diagnosis.
- Control action theory vs command/protocol execution.
- Calibration theory vs immediate route decision.
- Current manual use vs future autonomy policy.

## 2. Boundary Validation

### Top-Down Boundaries

1. Static alignment taxonomy is separate from dynamic alignment state.
2. Feedback record creation is separate from control action selection.
3. Control action selection is separate from executing the selected operation.
4. Outcome evidence is separate from immediate prediction but calibrates it later.
5. Autonomy permission is separate from what the right control action would be.

### Bottom-Up Atoms

- `expected` / `observed` / `delta`.
- confidence.
- route.
- monitor.
- reflect.
- outcome review.
- loop diagnose.
- navigation.
- branch.
- materialize.
- recover.
- evidence age.
- repeated signal.
- corrected inquiry.
- delayed outcome.
- predictive hunch.
- calibration result.

### Validation Result

The atoms do not group naturally around existing files. They group around a lifecycle:

```text
state -> signal -> evidence maturity -> control action -> outcome -> calibration -> updated state
```

This validates that the missing layer is not another sibling operation.

## 3. Question Tree

### Q1. What is an alignment state?

Verification criteria:

- [x] Distinguishes current condition from isolated records.
- [x] Can include active uncertainties, debts, confirmations, open routes, and mode state.
- [x] Does not require a global `_alignment.md` sidecar for every inquiry.

Current answer: alignment state is the local or cross-run condition inferred from records, artifacts, active modes, open questions, and route commitments.

### Q2. What is an alignment signal?

Verification criteria:

- [x] Covers confirmations as well as failures.
- [x] Covers immediate, delayed, predictive, and causal evidence.
- [x] Maps to existing operations without merging them.

Current answer: an alignment signal is any observable difference, confirmation, uncertainty, drift, or repeated pattern that may justify a control action.

### Q3. How does evidence mature?

Verification criteria:

- [x] Explains weak signals that should only be monitored.
- [x] Explains when delayed evidence becomes outcome review.
- [x] Explains when repeated or comparative evidence becomes loop diagnose.
- [x] Connects to Predictive/Retrospective RC calibration.

Current answer: evidence matures through time, repetition, downstream use, correction chains, and prediction-vs-outcome comparison.

### Q4. What is a control action?

Verification criteria:

- [x] Distinguishes action choice from protocol execution.
- [x] Covers existing route names.
- [x] Can express "do nothing" and "monitor" without treating them as failure.

Current answer: a control action is the selected response to a signal that changes the system's trajectory or preserves current trajectory deliberately.

### Q5. How do control outcomes calibrate future control?

Verification criteria:

- [x] Explains why outcome review matters.
- [x] Connects to Baldwin cycles and self-improvement.
- [x] Does not require immediate automation.

Current answer: after a control action is used, later evidence confirms, weakens, or corrects the policy that selected it.

### Q6. What are the boundaries to existing operations?

Verification criteria:

- [x] Preserves reflect, outcome review, loop diagnose, navigation, materialization.
- [x] Does not make one universal operation.
- [x] Gives each operation a place in the lifecycle.

Current answer:

- checkpoint detects immediate structural signals;
- reflect observes process signals;
- outcome review observes after-use signals;
- loop diagnose handles mature causal evidence;
- navigation enumerates possible control actions;
- materialization executes concrete control actions;
- meta-loop stores traversal and selection history.

## 4. Interface Map

| Source | Target | What Flows | Direction |
| --- | --- | --- | --- |
| `alignment_control.md` | alignment dynamics | record schema, layers, modes, routes | one-way input |
| alignment dynamics | `alignment_control.md` | possible refinements to record fields after theory stabilizes | later feedback |
| checkpoint / Primitive RC | alignment dynamics | immediate structural signal | one-way |
| `reflect` | alignment dynamics | process-alignment signal | bidirectional: theory gives triggers, reflect gives evidence |
| `outcome_review` | alignment dynamics | delayed after-use evidence | bidirectional: theory gives maturity rules, review gives calibration evidence |
| `loop_diagnose` | alignment dynamics | causal attribution evidence | bidirectional: theory gives escalation rules, diagnosis gives maintenance candidates |
| `navigation` | alignment dynamics | possible next moves | bidirectional: theory can supply signal priorities, navigation supplies move map |
| materialization | alignment dynamics | concrete action trace and validation result | bidirectional |
| meta-loop | alignment dynamics | traversal state and selection history | bidirectional |
| Predictive/Retrospective RC | alignment dynamics | prediction and calibration model | bidirectional |

## 5. Dependency Order

### First

Define a small theory note for the missing layer. It should stay conceptual and name primitives without becoming a runner.

Candidate location:

```text
enes/alignment_dynamics.md
```

### Second

Use that theory to review whether `alignment_control.md` has the right record fields. Do not expand the contract until the theory clarifies what fields are missing.

### Third

Patch local protocols only where the theory gives clear benefit:

- outcome review: evidence maturity and calibration fields;
- loop diagnose: mature causal signal framing;
- reflect: process signal role;
- navigation: signal-informed next move enumeration.

### Fourth

Only after real records exist, consider a shared control policy or runner.

## 6. Self-Evaluation

| Dimension | Result | Reason |
| --- | --- | --- |
| Independence | PASS | State, signal, evidence maturity, control action, calibration, and operation interfaces can each be studied independently. |
| Completeness | PASS | Covers the source of scattered feedback logic from record creation through later calibration. |
| Reassembly | PASS | If the pieces are defined, they reconstruct a plausible alignment-dynamics theory. |
| Tractability | PASS | A first theory note is feasible without implementation. |
| Interface clarity | PASS | Existing artifacts connect to the lifecycle through clear signal/action roles. |
| Balance | PASS | No single piece contains the entire problem, though control action policy is the hardest. |
| Confidence | MEDIUM-HIGH | The decomposition fits current evidence; exact naming and future artifact placement remain open. |

## Decomposition Output

The missing theory decomposes into:

```text
1. alignment state
2. alignment signals
3. evidence maturity
4. control actions / route selection
5. control outcome calibration
6. interfaces to existing operations
7. deferred autonomy policy
```

This decomposition suggests the first artifact should not be a protocol or runner. It should be a theory note that defines the dynamic lifecycle:

```text
state -> signal -> evidence maturity -> control action -> outcome -> calibration -> updated state
```
