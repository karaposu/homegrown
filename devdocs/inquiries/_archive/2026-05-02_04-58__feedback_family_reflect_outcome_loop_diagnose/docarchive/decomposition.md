# Decomposition: Feedback Family Architecture

## Input

Sensemaking stabilized this model:

```text
Feedback primitive
  -> structural feedback: checkpoint
  -> process feedback: reflect
  -> use feedback: outcome_review
  -> causal feedback: loop_diagnose
```

The goal is to decompose this without creating an oversized system.

## 1. Coupling Map

### Cluster A - Feedback Kernel

Strongly coupled elements:

- expected / intended / required behavior;
- observed / actual behavior;
- delta / mismatch / confirmation;
- evidence;
- confidence;
- route.

Why tightly coupled:

- These fields define the shared operation. If a feedback mode lacks these, it cannot produce comparable learning data.

### Cluster B - Mode Triggers and Boundaries

Strongly coupled elements:

- trigger condition;
- timing;
- observed object;
- required inputs;
- cost/depth.

Why tightly coupled:

- The same feedback kernel must be applied differently depending on the boundary. Checkpoint, reflect, outcome review, and loop diagnose should not run at the same times.

### Cluster C - Mode-Specific Procedures

Strongly coupled elements:

- reflect's five process dimensions;
- loop diagnose's correction-chain contract;
- outcome review's after-use expected-vs-actual record;
- checkpoint's deterministic structure checks.

Why tightly coupled:

- Each mode has specialized evidence requirements. Shared schema should not flatten these procedures.

### Cluster D - Escalation and Routing

Strongly coupled elements:

- no-op;
- memory cell;
- maintenance candidate;
- navigation input;
- branch inquiry;
- materialization;
- loop diagnose escalation;
- monitoring.

Why tightly coupled:

- Feedback only matters if it changes future action or records a justified no-op.

### Cluster E - Accumulation and Learning Memory

Strongly coupled elements:

- local record in inquiry/materialization folder;
- global index/backlog;
- pattern detection;
- later state comprehension;
- future protocol/spec edits.

Why tightly coupled:

- Cross-run learning needs records to be discoverable and comparable.

## 2. Question Tree

### Q1 - What is the shared feedback kernel?

Verification criteria:

- [ ] Defines expected/observed/delta/evidence/confidence/route.
- [ ] Works for structural, process, use, and causal feedback.
- [ ] Does not prescribe mode-specific procedure.

### Q2 - What modes exist in v1?

Verification criteria:

- [ ] Includes checkpoint/structural feedback.
- [ ] Includes reflect/process feedback.
- [ ] Includes outcome_review/use feedback.
- [ ] Includes loop_diagnose/causal diagnostic feedback.
- [ ] Defines trigger and timing for each.

### Q3 - What stays mode-specific?

Verification criteria:

- [ ] Reflect keeps process dimensions.
- [ ] Loop diagnose keeps correction-chain requirements.
- [ ] Outcome review keeps after-use requirements.
- [ ] Checkpoint keeps deterministic checks.

### Q4 - What shared outputs should all modes produce?

Verification criteria:

- [ ] Local feedback record or reference.
- [ ] Route decision.
- [ ] Confidence/uncertainty.
- [ ] Optional maintenance candidate.
- [ ] Optional monitoring gate.

### Q5 - What escalation paths are allowed?

Verification criteria:

- [ ] Checkpoint can feed reflect.
- [ ] Reflect can create process frontier or maintenance candidate.
- [ ] Outcome review can route uncertain attribution to loop diagnose.
- [ ] Loop diagnose can produce higher-confidence maintenance candidates.
- [ ] None of these loops run automatically without trigger clarity.

### Q6 - What should not be built yet?

Verification criteria:

- [ ] No giant feedback command.
- [ ] No automatic all-modes-after-every-run behavior.
- [ ] No forced global schema that makes existing reflect unusable.
- [ ] No autonomous selector from feedback records yet.

## 3. Interface Map

| Source | Target | What Flows | Direction |
| --- | --- | --- | --- |
| Checkpoint | Reflect | structural check results, stage labels, pass/warn/fail | one-way |
| Reflect | Feedback index/backlog | process observation, memory candidate, process frontier | one-way |
| Outcome Review | Feedback index/backlog | expected vs actual outcome, mismatch, route, maintenance candidate | one-way |
| Outcome Review | Loop Diagnose | uncertain attribution, correction-chain seed | conditional one-way |
| Loop Diagnose | Feedback index/backlog | failure hypothesis, confidence, maintenance candidate | one-way |
| Feedback index/backlog | Navigation | evidence-backed next directions | one-way |
| Feedback index/backlog | State comprehension | system learning state | one-way |
| Navigation | Branch/Materialization | selected maintenance direction | one-way |

## 4. Dependency Order

### First

1. Stabilize the conceptual parent: feedback.
2. Define the feedback kernel fields.
3. Define the v1 mode table.

### Second

4. Create outcome review using the feedback kernel.
5. Define feedback index/backlog convention.

### Third

6. Patch reflect and loop_diagnose to reference the feedback family vocabulary.
7. Teach navigation to read feedback records as signals.

### Later

8. Add state comprehension over feedback records.
9. Add branch-set/multihead comparison using feedback records.
10. Add automation/selection only after enough records exist.

## 5. Self-Evaluation

| Dimension | Result | Reason |
| --- | --- | --- |
| Independence | PASS | Feedback kernel can be defined without rewriting every mode immediately. |
| Completeness | PASS | Covers shared primitive, modes, procedure boundaries, routing, accumulation, and deferrals. |
| Reassembly | PASS | The pieces reconstruct a coherent feedback family without collapsing specialized modes. |
| Tractability | PASS | V1 can be a short parent protocol plus outcome review referencing it. |
| Interface clarity | PASS | Flows between modes are explicit and directional. |
| Balance | PASS | The architecture avoids a single oversized component. |
| Confidence | HIGH | Top-down parent concept and bottom-up existing artifacts agree. |

## Decomposition Result

The feedback family should be organized in two layers:

```text
Layer 1: shared feedback contract
  expected
  observed
  delta
  evidence
  confidence
  route

Layer 2: specialized modes
  checkpoint = structural feedback
  reflect = process feedback
  outcome_review = use feedback
  loop_diagnose = causal diagnostic feedback
```

The system should not build a single universal feedback runner yet. The immediate value is conceptual simplification plus compatible records.

Telemetry:

- Coupling clarity: high.
- Hidden coupling risk: medium around index/backlog design.
- Dependency confidence: high.
- Overall: PROCEED.
