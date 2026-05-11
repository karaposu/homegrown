# Decomposition: Changes for Reflect and Loop Diagnose

## Input

Sensemaking result:

```text
loop_diagnose = preserve + light alignment-control integration
reflect = keep + reframe + trigger-based trial
```

## 1. Coupling Map

### Cluster A - Loop Diagnose Stability

Strongly coupled elements:

- correction-chain input contract;
- required reads from both inquiries;
- diagnostic MVL+ framing;
- failure hypotheses;
- maintenance candidates;
- diagnostic verdict.

Why tightly coupled:

- These are the reasons loop_diagnose works. They should not be disturbed.

### Cluster B - Loop Diagnose Alignment Integration

Strongly coupled elements:

- affected alignment layer;
- mode context;
- attribution confidence;
- route/maintenance candidate;
- alignment-control contract reference.

Why tightly coupled:

- These enrich the existing diagnostic output without changing its engine.

### Cluster C - Reflect Identity

Strongly coupled elements:

- process-vs-content distinction;
- human interventions;
- cross-step leaks;
- step quality;
- surprises;
- answer-goal alignment.

Why tightly coupled:

- These define reflect's useful boundary. They should remain intact.

### Cluster D - Reflect Adoption

Strongly coupled elements:

- trigger rules;
- optional alignment-control output;
- selected trial inquiries;
- monitoring gate;
- no mandatory runner integration yet.

Why tightly coupled:

- Reflect's problem is not theory; it is lack of a use path.

### Cluster E - Outcome Review Routing

Strongly coupled elements:

- route to reflect when process alignment is implicated;
- route to loop_diagnose when causal attribution is unclear and correction-chain evidence exists;
- route to navigation/materialization for simpler next actions.

Why tightly coupled:

- Outcome review can become the practical dispatcher that makes reflect and loop diagnose useful without making them automatic.

## 2. Question Tree

### Q1 - What should happen to loop_diagnose?

Verification criteria:

- [ ] Preserve current protocol structure.
- [ ] Add role statement: causal alignment diagnosis.
- [ ] Reference `homegrown/contracts/alignment_control.md`.
- [ ] Add affected alignment layer and mode context to diagnostic output.
- [ ] Do not convert into standalone discipline.

### Q2 - What should happen to reflect?

Verification criteria:

- [ ] Preserve process-vs-content distinction.
- [ ] Add role statement: process-alignment insurance.
- [ ] Reference `homegrown/contracts/alignment_control.md`.
- [ ] Add trigger rules.
- [ ] Add optional alignment-control record output.
- [ ] Do not auto-run by default yet.

### Q3 - What triggers reflect?

Verification criteria:

- [ ] Human intervention during a loop.
- [ ] Answer-goal alignment concern.
- [ ] Later step exposed something earlier step should have caught.
- [ ] Outcome review indicates process weakness.
- [ ] Repeated weak stage pattern across inquiries.
- [ ] Milestone/period review.

### Q4 - What triggers loop_diagnose?

Verification criteria:

- [ ] Correction chain exists.
- [ ] Attribution is unclear enough to need diagnosis.
- [ ] Outcome review or user correction provides evidence.
- [ ] Not used for simple mismatches.

### Q5 - What remains deferred?

Verification criteria:

- [ ] Mandatory reflect after every MVL.
- [ ] Automatic loop_diagnose routing.
- [ ] Generic alignment runner.
- [ ] Reflect memory cells as automatic spec edits.

## 3. Interface Map

| Source | Target | What Flows | Direction |
| --- | --- | --- | --- |
| `alignment_control.md` | reflect | layer/mode/record vocabulary | one-way |
| `alignment_control.md` | loop_diagnose | layer/mode/record vocabulary | one-way |
| outcome_review | reflect | process-alignment suspicion | conditional one-way |
| outcome_review | loop_diagnose | uncertain causal attribution, correction-chain seed | conditional one-way |
| reflect | alignment-control records | process delta, evidence, route | optional one-way |
| loop_diagnose | alignment-control records | affected layer/mode, diagnosis confidence, route | optional one-way |
| reflect | memory cells / process frontier | candidate process improvements | one-way |
| loop_diagnose | maintenance candidates | source-change candidates and evaluation gates | one-way |

## 4. Dependency Order

### First

1. Patch `loop_diagnose.md` lightly:
   - role statement;
   - contract reference;
   - add alignment layer/mode fields to required diagnostic output.

2. Patch `reflect` lightly:
   - role statement;
   - contract reference;
   - trigger rules;
   - optional alignment-control record output.

### Second

3. Use reflect manually on 3-5 selected completed inquiries where process signals are likely.
4. Check whether reflect produces useful maintenance candidates or only obvious summaries.

### Third

5. If useful, add an MVL/MVL+ post-completion suggestion:

```text
Process-alignment signals detected. Consider /reflect [inquiry_path].
```

Do not auto-run yet.

### Later

6. Consider auto-run only after evidence:
   - at least 10 reflect runs;
   - at least 3 produced useful maintenance candidates;
   - low record-noise rate.

## 5. Self-Evaluation

| Dimension | Result | Reason |
| --- | --- | --- |
| Independence | PASS | Loop diagnose and reflect patches are independent and low conflict. |
| Completeness | PASS | Covers preservation, patching, triggers, interfaces, adoption, and deferrals. |
| Reassembly | PASS | Pieces create a coherent process/cause alignment-insurance layer. |
| Tractability | PASS | Both patches can be small documentation edits. |
| Interface clarity | PASS | Outcome review routes to each based on different conditions. |
| Balance | PASS | Loop diagnose gets less change because it is already working. |
| Confidence | HIGH | Existing specs and recent contract align. |

## Decomposition Result

The next changes should be asymmetric:

```text
loop_diagnose:
  small alignment vocabulary patch, no behavior rewrite

reflect:
  small alignment vocabulary patch + trigger/adoption guidance

MVL/MVL+:
  no mandatory reflect integration yet
```

Telemetry:

- Coupling clarity: high.
- Hidden coupling risk: low.
- Dependency confidence: high.
- Overall: PROCEED.
