# Exploration: Feedback Family Across Reflect, Outcome Review, and Loop Diagnose

## User Input

The user noticed that `reflect`, `outcome_review`, and `loop_diagnose` are all feedback-like. The concern is that treating them as three separate things may increase complexity. The goal is to understand the underlying operation before adding another protocol.

## Mode and Entry Point

- Mode: artifact exploration plus possibility exploration.
- Entry point: signal-first. The signal is "these are all feedback."

## Exploration Cycles

### Cycle 1 - Scan Existing Feedback-Like Mechanisms

Scanned artifacts:

- `homegrown/reflect/SKILL.md` and `homegrown/reflect/references/reflect.md`
- `homegrown/protocols/loop_diagnose.md`
- `devdocs/inquiries/2026-05-02_04-35__next_load_bearing_self_improvement_loop/finding.md`
- `devdocs/inquiries/_archive/reflect_as_primitive_rc/finding.md`

Found mechanisms:

- **Reflect** reads a completed cognitive loop and examines the process that produced the answer.
- **Outcome review** was proposed as an after-use record that compares expected effect against actual downstream behavior.
- **Loop diagnose** frames a diagnostic MVL+ inquiry over a correction chain: weak prior result, human correction, later improved result.
- **Primitive RC/checkpoint** is an inline structural feedback mechanism that catches hard output-shape violations and lets reflect integrate patterns later.

Signal:

- All four mechanisms compare some observed thing against an expectation, contract, or desired behavior, then create learning data.

Confidence:

- Confirmed: these mechanisms are related.
- Confirmed: their differences are mainly timing, object being judged, and depth of diagnosis.

### Cycle 2 - Probe The Shared Operation

The repeated pattern is:

```text
expectation / contract / intent
  + observed behavior
  -> mismatch or confirmation
  -> evidence record
  -> attribution or uncertainty
  -> route / memory / maintenance candidate
```

Observed in each mechanism:

- Checkpoint: expected structural requirements vs actual output structure.
- Reflect: expected good process vs actual loop process.
- Outcome review: expected downstream effect vs actual downstream outcome.
- Loop diagnose: expected corrected behavior vs weak prior/correction chain evidence.

Signal:

- The common primitive is not "reflection." The common primitive is "feedback."

Probe result:

- Reflection is one mode of feedback, not the parent category.
- Outcome review is one mode of feedback, not a wholly separate category.
- Loop diagnose is an escalation/diagnostic mode of feedback when attribution is unclear or a correction chain exists.

### Cycle 3 - Probe Organization Options

Possible organizations:

1. Keep each mechanism fully separate.
2. Merge all mechanisms into `reflect`.
3. Create a new feedback architecture where each mechanism is a mode with a shared record/routing interface.
4. Rename everything under a single `feedback` discipline.
5. Keep separate files but add a short `feedback.md` protocol that defines shared concepts, vocabulary, and escalation.

Signals:

- Full separation increases vocabulary and duplicate fields.
- Merging into `reflect` breaks reflect's identity as process reflection.
- A single `feedback` discipline may become too broad.
- A shared feedback protocol/interface may reduce complexity while preserving local mechanism fitness.

### Jump Scan - Prior Reflect/Primitive RC Finding

The prior `reflect_as_primitive_rc` finding already rejected "reflect does everything."

Important preserved insight:

- A unified quality surface is useful, but ownership and execution differ.
- Some feedback is cheap and deterministic, so it belongs in checkpoint.
- Reflect can integrate those results without performing the checks itself.

Surprise:

- The same principle applies here. We should not make one mechanism perform all feedback. We should define one feedback architecture that coordinates specialized feedback modes.

## Convergence Assessment

- Frontier stability: strong. All scanned artifacts support a shared feedback primitive.
- Declining discovery rate: strong. New scans refine the same model rather than introducing unrelated mechanisms.
- Bounded gaps: good. Exact file naming and protocol edits remain open, but the organizing principle is clear.

## Structural Map

### Territory Overview

Homegrown has several feedback surfaces:

- Inline structural feedback: checkpoint / Primitive RC.
- Post-loop process feedback: reflect.
- Post-use outcome feedback: proposed outcome review.
- Correction-chain causal feedback: loop diagnose.

### Inventory

| Mechanism | Object Observed | Timing | Output |
| --- | --- | --- | --- |
| Checkpoint / Primitive RC | discipline output structure | between stages | structural pass/warn/fail log |
| Reflect | loop process | after loop completion | process observations, memory cells, process frontier |
| Outcome review | downstream result of using a finding/artifact | after use | outcome record, mismatch, maintenance candidate |
| Loop diagnose | correction chain and prior failure | when failure source is unclear | failure hypotheses, attribution, maintenance candidates |

### Signal Log

- Probed: shared feedback primitive.
  - Result: strong.
- Probed: merge into reflect.
  - Result: risky; creates identity overload.
- Probed: independent mechanisms.
  - Result: risky; duplicates concepts and increases mental load.
- Probed: feedback protocol family.
  - Result: strongest.

### Confidence Map

- Confirmed: all mechanisms compare expected vs actual behavior.
- Confirmed: timing and object differ.
- Confirmed: loop diagnose is deeper and more causal than reflect or outcome review.
- Inferred: a shared feedback record/interface would reduce complexity.
- Unknown: whether the shared layer should be one protocol file or a folder of feedback protocols.

### Frontier State

The next frontier is not "add outcome_review as a fourth isolated mechanism." It is to define the feedback family: the shared operation, the mode table, and the escalation paths.

### Gaps and Recommendations

Recommended next conceptual move:

- Replace the mental model "`reflect`, `outcome_review`, `loop_diagnose` are separate things" with "`feedback` is the parent operation; reflect, outcome review, and loop diagnose are modes at different boundaries."

Recommended materialization move later:

- Before creating `outcome_review.md`, create or include a `Feedback Family` section that defines shared fields and escalation:

```text
checkpoint -> reflect -> outcome_review -> loop_diagnose
```

Telemetry:

- Exploration mode: artifact + possibility.
- Cycles: 3 plus jump scan.
- Convergence: PROCEED.
- Failure modes observed: no premature depth; possible naming uncertainty remains.
