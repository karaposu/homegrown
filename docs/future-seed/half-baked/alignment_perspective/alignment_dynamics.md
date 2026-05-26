# Alignment Dynamics

Alignment Dynamics is the theory of how alignment state changes over time.

It sits between:

- `cognitive_harness/contracts/alignment_control.md`, which defines shared alignment vocabulary and record shape;
- future runners, selectors, and autonomous control policies, which may act on alignment signals.

This file is not a protocol. It does not run anything. It does not replace `alignment_control.md`.

Its job is to explain the missing dynamic layer:

```text
alignment state
  -> signal
  -> evidence maturity
  -> control action
  -> outcome
  -> calibration
  -> updated alignment state
```

The purpose is to stop feedback operations from becoming scattered local tools. Checkpoint, reflect, outcome review, loop diagnose, navigation, materialization, and meta-loop should be understood as different points in one alignment-control lifecycle.

---

## 1. Core Distinction

Alignment is the condition the system tries to preserve.

Feedback is the mechanism that makes alignment visible.

Alignment-control records are the data shape used to preserve observations.

Alignment dynamics is the time-aware theory that explains what happens to those observations after they exist.

Without alignment dynamics, records become bookkeeping:

```text
expected -> observed -> delta -> route
```

With alignment dynamics, records become control material:

```text
expected -> observed -> delta -> evidence maturity -> control action -> outcome -> calibration
```

---

## 2. Alignment State

Alignment state is the current inferred condition of the system with respect to intent, work, evidence, uncertainty, and open control actions.

It is not one file.

It may be inferred from:

- `_branch.md` goals and scope checks;
- `_state.md` progress and status;
- discipline outputs;
- `finding.md`;
- `docarchive/`;
- alignment-control records;
- outcome reviews;
- materialization traces;
- navigation maps;
- loop diagnoses;
- user corrections;
- repeated patterns across inquiries.

Alignment state includes:

- what is currently confirmed;
- what is uncertain;
- what is drifting;
- what has failed;
- what route was chosen;
- what route is still pending;
- what evidence is still too weak to act on;
- what past control actions taught the system.

Do not create a duplicated `_alignment.md` sidecar for every inquiry just to represent this. Alignment state should stay close to the artifact that produced it unless a record is worth preserving.

---

## 3. Alignment Signals

An alignment signal is any observation that may change how the system should proceed.

Signals can be positive or negative.

Positive signals matter because they calibrate what works. Negative signals matter because they reveal drift, mismatch, or failure.

Common signal types:

| Signal Type | Meaning | Example |
| --- | --- | --- |
| `confirmation` | Expected and observed state match | A branch protocol is used and nested resume works. |
| `mismatch` | Observed state contradicts expected state | A protocol expected to reduce confusion creates more path ambiguity. |
| `uncertainty` | Evidence is insufficient | A critique seems weak, but no downstream failure exists yet. |
| `drift` | Work moves away from original intent over time | A loop answers a neighboring question instead of the asked one. |
| `regression` | Previously aligned behavior becomes worse | A runner change breaks normal root inquiries. |
| `repetition` | Similar signal appears across multiple artifacts | Several critiques miss the same kind of source-authority issue. |
| `correction_chain` | Human correction plus later improved result exists | A prior finding is corrected by a later inquiry. |
| `prediction_delta` | Prediction differs from later outcome | A route expected to fix a problem does not. |

Signals should not automatically cause action. A signal first needs maturity assessment.

---

## 4. Evidence Maturity

Evidence maturity describes how much control weight a signal should carry.

The same signal can move through maturity levels over time:

```text
noticed -> recorded -> repeated -> tested -> diagnosed -> calibrated
```

### `noticed`

A signal is visible but too weak to preserve formally.

Typical action: keep working, mention briefly if useful.

### `recorded`

A signal is concrete enough to preserve in an alignment-control record or local artifact.

Typical action: record with low or medium confidence.

### `repeated`

The same kind of signal appears across multiple inquiries, stages, or artifacts.

Typical action: navigation, reflect, or a focused MVL/MVL+ inquiry may be justified.

### `tested`

A prediction, protocol, branch, or artifact has been used, and there is observed downstream behavior.

Typical action: outcome review.

### `diagnosed`

There is enough evidence to reason about cause, especially a correction chain.

Typical action: loop diagnose.

### `calibrated`

A route's predicted effect has been compared against outcome evidence.

Typical action: update future route preference, create a Baldwin-cycle maintenance candidate, or revise protocol if evidence is strong.

Evidence maturity prevents overreaction. Not every mismatch deserves loop diagnose. Not every uncertainty deserves a branch. Not every confirmation needs a record.

---

## 5. Control Actions

A control action is the selected response to an alignment signal.

Control action is not the same as protocol execution. A route can select an operation; the operation then executes under its own protocol or discipline.

Common control actions:

| Control Action | Use When | Typical Operation |
| --- | --- | --- |
| `no-op` | Confirmation is enough and no follow-up is needed | none |
| `monitor` | Signal is real but immature | local note or record |
| `reflect` | Process quality of a completed loop is at issue | `cognitive_harness/reflect/` |
| `outcome_review` | A finding, protocol, branch, or artifact has been used downstream | `cognitive_harness/protocols/outcome_review.md` |
| `loop_diagnose` | Attribution is unclear and correction-chain evidence exists | `cognitive_harness/protocols/loop_diagnose.md` + MVL+ |
| `navigation` | Several possible next moves should be enumerated | `cognitive_harness/navigation/` |
| `branch` | A source-anchored child inquiry should be created | `cognitive_harness/protocols/branch_inquiry.md` |
| `materialize` | A decision should become concrete files under contract | materialization lifecycle/protocol |
| `revise_protocol` | Evidence supports changing a protocol, contract, skill, or discipline | materialization after review |
| `recover` | A diagnosed issue requires restoring a known-good state | recovery procedure, future |

Use the lightest sufficient action.

The control action should match evidence maturity:

```text
noticed       -> no-op or monitor
recorded      -> monitor, reflect, navigation
repeated      -> reflect, navigation, branch
tested        -> outcome_review
diagnosed     -> loop_diagnose, recover, revise_protocol
calibrated    -> revise_protocol, materialize, update future routing
```

These are defaults, not laws. Context, risk, and user intent can override them.

---

## 6. Control Outcomes

Every meaningful control action has an expected effect.

Examples:

- A branch should isolate a follow-up question without losing parent context.
- A reflect run should reveal whether the loop process had an alignment issue.
- An outcome review should say whether a used artifact worked downstream.
- A loop diagnose should produce evidence-backed failure hypotheses.
- A materialization should create concrete files that satisfy a stated contract.

After the action is used, the system should ask:

```text
What did this action expect to make true?
What happened after it was used?
Did the route solve the problem, expose a different problem, or add noise?
What should future routing learn from that?
```

This is where alignment dynamics connects to Retrospective RC.

---

## 7. Calibration

Calibration is the process of comparing expected control effect against later outcome.

It turns feedback into learning.

Without calibration:

```text
record -> route -> forget
```

With calibration:

```text
record -> route -> outcome -> route quality update -> future behavior changes
```

Calibration can update:

- confidence in a protocol;
- trigger criteria for an operation;
- whether a route was too heavy or too light;
- whether a signal type deserves earlier attention;
- whether a discipline needs a patch;
- whether a future selector should prefer or avoid a route.

Calibration is the bridge to the Baldwin cycle:

```text
prediction at T0
outcome at T2+
delta becomes calibration data
repeated calibration pattern becomes a maintenance candidate
maintenance candidate enters MVL/MVL+ before becoming a spec change
```

Spec changes should not bypass thinking. Calibration data proposes changes; MVL/MVL+ and materialization decide and implement them.

---

## 8. Operation Map

Existing Homegrown operations are not random siblings. They occupy different lifecycle positions.

| Operation | Lifecycle Position | What It Sees | What It Should Not Do |
| --- | --- | --- | --- |
| Checkpoint / Primitive RC | Immediate signal detection | Structural output issues before propagation | Deep causal diagnosis |
| Reflect | Process signal review | How a completed loop or work unit behaved | Downstream outcome validation |
| Outcome Review | After-use review | Whether a used finding/artifact/protocol worked | Full root-cause diagnosis by default |
| Loop Diagnose | Mature causal diagnosis | Correction chains and comparative evidence | Routine mismatch handling |
| Navigation | Possibility enumeration | Possible next moves from evidence | Hidden selection |
| Branch Inquiry | Lineage-preserving inquiry creation | Source-anchored child questions | Running or concluding the branch |
| Materialization | Concrete action execution | Decision becoming files under contract | Free-form artifact creation |
| Meta-loop | Cross-inquiry traversal state | Visited inquiries, navigation decisions, traversal signals | Autonomous multihead selection in v1 |

The dynamics layer explains when one operation should hand off to another.

---

## 9. Relationship to `alignment_control.md`

`cognitive_harness/contracts/alignment_control.md` is the shared contract.

This file is the theory note.

The contract should stay thin. It should define stable vocabulary and record shape.

This theory can later suggest contract changes, but only after use shows what fields are stable.

Possible future additions to the contract, not yet committed:

- evidence maturity;
- expected control effect;
- route outcome;
- calibration status;
- related prior signals;
- repeated-signal group id.

Do not add these fields just because they are listed here. Add them only after real records show the need.

---

## 10. Relationship to Thinking-Space Dynamics

`docs/thinking_space_dynamics.md` defines quality-awareness timing:

```text
Primitive RC
Predictive RC
Retrospective RC
```

Alignment Dynamics should reuse that timing instead of duplicating it.

Mapping:

| Thinking-Space Layer | Alignment Dynamics Role |
| --- | --- |
| Primitive RC | Immediate deterministic signal detection |
| Predictive RC | Real-time hunch about route quality or value risk |
| Retrospective RC | After-use evidence and calibration |

The overlap is intentional.

Thinking-space dynamics explains the cognitive substrate of prediction and calibration.

Alignment dynamics explains how alignment-control signals use that substrate to change system behavior.

---

## 11. Relationship to Meaningful Traversal

Meaningful traversal asks whether movement through inquiry space is productive or spinning.

Alignment dynamics is upstream of that.

A traversal can be judged only if the system understands:

- what state it was in;
- what signal motivated movement;
- what control action was chosen;
- what outcome followed;
- whether the move improved, degraded, or merely moved.

So meaningful traversal should eventually consume alignment dynamics, not replace it.

---

## 12. Failure Modes

### Static Taxonomy Trap

The system keeps adding names for operations but cannot explain motion between them.

Corrective action: ask which lifecycle position each operation occupies.

### Generic Runner Prematurity

The system builds an automatic route selector before signal maturity and calibration are understood.

Corrective action: keep routing manual until enough records exist.

### Record Flood

Every minor signal becomes a formal alignment record.

Corrective action: record only meaningful confirmations, mismatches, uncertainties, drifts, regressions, or repeated patterns.

### Diagnosis Inflation

Every mismatch routes to loop diagnose.

Corrective action: use evidence maturity. Immature signals usually need monitor, reflect, or outcome review first.

### Theory Sink

`alignment_dynamics.md` grows into a full autonomy, consciousness, self-maintenance, and selector theory.

Corrective action: keep this file scoped to state, signal, maturity, action, outcome, calibration.

### Contract Bloat

`alignment_control.md` imports every concept from this theory before field stability is proven.

Corrective action: promote only concepts that survive real use.

### Hidden Selection

Navigation or a protocol silently chooses the next action while claiming only to enumerate.

Corrective action: keep selection explicit until a selector/control policy exists.

---

## 13. Deferred Work

Do not build these from this note alone:

- generic alignment runner;
- automatic selector;
- numerical alignment scores;
- universal feedback command;
- full self-maintenance architecture;
- autonomy permission policy;
- multihead route arbitration.

Suggested revival gates:

- 5 real alignment-control or outcome-review records before changing record fields;
- 10 records across at least 3 operation types before generic routing;
- 5 navigation maps plus alignment records before selector design;
- repeated calibrated route outcomes before route preference automation.

---

## 14. Short Version

Homegrown was missing not another feedback operation, but the dynamic theory that explains how feedback changes future behavior.

The core lifecycle is:

```text
alignment state
  -> signal
  -> evidence maturity
  -> control action
  -> outcome
  -> calibration
  -> updated alignment state
```

Each existing operation handles part of that lifecycle.

The next step is to use this theory lightly, against real records, before promoting any part of it into contracts or automation.
