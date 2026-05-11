# Innovation: Options for Reflect and Loop Diagnose

## User Input

Generate possible responses to the current state: loop diagnose works, reflect is unused, and alignment-control/outcome-review now exist.

## Seed

The system has one proven diagnostic protocol and one unused reflection discipline. Recent alignment-control work gives both a clearer role, but adding complexity is still risky.

## Mechanism Outputs

### 1. Lens Shifting

Generic variation:

- Stop asking "which tool should exist?" Ask "which alignment-insurance boundary needs coverage?"

Focused variation:

- Loop diagnose covers causal diagnosis. Reflect covers process alignment. Outcome review covers after-use outcome alignment. The missing part is not role; it is trigger and integration.

Contrarian variation:

- Reflect may be unused because the workflow has been dominated by design correction chains, where loop_diagnose is naturally more useful.

Test:

- Novelty: medium.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: high.

Candidate:

- C1: Boundary-specific preservation.

### 2. Combination

Generic variation:

- Combine outcome review routing with reflect triggers.

Focused variation:

- Outcome review creates a record. If the delta suggests the artifact failed because the earlier loop process missed something, route to reflect. If the delta suggests unclear causal attribution across inquiries, route to loop_diagnose.

Contrarian variation:

- Let reflect consume outcome review records, not only discipline outputs. That would make reflect more grounded, but risks blurring process vs outcome.

Test:

- Novelty: high locally.
- Scrutiny survival: medium-high.
- Fertility: high.
- Actionability: high.

Candidate:

- C2: Outcome review as router into reflect/loop_diagnose.

### 3. Inversion

Generic variation:

- Instead of making reflect automatic, make non-use of reflect a monitored hypothesis.

Focused variation:

- Reflect only runs when process-alignment signals exist. If after 5 eligible cases it still produces no useful candidate, then reconsider its role.

Contrarian variation:

- Maybe reflect's best use is not per-inquiry but periodic review over multiple inquiries.

Test:

- Novelty: medium.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: high.

Candidate:

- C3: Reflect trial with usage gate.

### 4. Constraint Manipulation

Generic variation:

- Add constraint: no protocol that works gets rewritten for naming consistency.

Focused variation:

- Add constraint: no runner auto-runs reflect until reflect has produced useful outputs in manual trials.

Contrarian variation:

- Add constraint: reflect must output at most one alignment-control record per run to avoid record flood.

Test:

- Novelty: medium.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: high.

Candidate:

- C4: Conservative integration rules.

### 5. Absence Recognition

Generic variation:

- Missing thing: reflect trigger rules.

Focused variation:

- Missing thing: reflect's relationship to `alignment_control.md`.

Contrarian variation:

- Missing thing: a record saying "reflect not run and why." That might matter later if process gaps keep appearing.

Test:

- Novelty: medium-high.
- Scrutiny survival: strong.
- Fertility: medium.
- Actionability: high.

Candidate:

- C5: Reflect trigger/skip policy.

### 6. Domain Transfer

Generic variation:

- From incident response: root-cause analysis should not be rewritten when it works; post-incident retrospectives need trigger criteria to avoid ritual.

Focused variation:

- From engineering retrospectives: they are useful after meaningful work periods, not necessarily after every tiny change.

Contrarian variation:

- From testing: unused tests are sometimes valuable if they guard rare but important failures. Non-use does not mean deletion.

Test:

- Novelty: medium.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: high.

Candidate:

- C6: Reflect as milestone/process retrospective, not every-run tax.

### 7. Extrapolation

Generic variation:

- If reflect remains unused without trigger rules, it becomes dead weight.

Focused variation:

- If reflect is auto-run without evidence, it becomes archive noise.

Contrarian variation:

- If loop_diagnose is over-patched, it may stop being the crisp tool that worked.

Test:

- Novelty: medium.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: high.

Candidate:

- C7: Minimal patches plus usage telemetry.

## Candidate Set for Critique

### Candidate A - Leave Both Completely Unchanged

Do nothing to reflect or loop_diagnose for now.

### Candidate B - Patch Both Lightly for Alignment Control

Add role statements, contract references, and compatible output fields without changing triggers or execution.

### Candidate C - Preserve Loop Diagnose; Patch Reflect More Heavily

Leave loop diagnose nearly unchanged, but revise reflect with trigger rules, alignment-control record output, and usage gates.

### Candidate D - Auto-Run Reflect After Every MVL/MVL+

Make reflection a mandatory post-loop step.

### Candidate E - Retire Reflect

Remove or deprecate reflect because it has not been used and outcome_review/loop_diagnose cover practical learning.

### Candidate F - Use Reflect Periodically Rather Than Per Inquiry

Run reflect over batches or selected milestones, not every inquiry.

## Assembly Check

Strongest assembly:

```text
loop_diagnose:
  preserve behavior
  add alignment-control role/output fields

reflect:
  add alignment-control role
  add trigger rules
  add optional one-record alignment-control output
  trial manually on selected inquiries or milestones

outcome_review:
  route process-alignment deltas to reflect
  route causal-attribution deltas to loop_diagnose
```

This assembly keeps the working tool stable and gives the unused tool a fair operational trial.

## Innovation Telemetry

- Generators applied: 4/4.
- Framers applied: 3/3.
- Convergence: YES. Multiple mechanisms converge on conservative integration and trigger-based reflect.
- Survivors tested: 7/7.
- Failure modes observed: no early frame lock; no survival bias toward existing tools because retirement was considered.
- Overall: PROCEED.
