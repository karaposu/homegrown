# Exploration: Reflect and Loop Diagnose After Alignment Control

## User Input

With recent understandings and the creation of `alignment_control.md` and `outcome_review.md`, what should happen to `reflect` and `loop_diagnose`? The user notes that `loop_diagnose` has worked fine, while `reflect` has not been used so far.

## Mode and Entry Point

- Mode: artifact exploration.
- Entry point: signal-first. The signal is usage asymmetry: `loop_diagnose` has proven useful; `reflect` is theoretically important but unused.

## Exploration Cycles

### Cycle 1 - Scan Alignment Control

Scanned:

- `homegrown/contracts/alignment_control.md`

Findings:

- Alignment control says `reflect` is process-alignment insurance.
- Alignment control says `loop_diagnose` is causal alignment diagnosis.
- Both operations are expected to use shared alignment-layer, mode, delta, evidence, confidence, and route vocabulary.
- The contract explicitly says not to merge operations just because they share the same contract.

Signal:

- The new contract already gives both tools a place. The open question is integration depth, not identity.

### Cycle 2 - Scan Loop Diagnose

Scanned:

- `homegrown/protocols/loop_diagnose.md`

Findings:

- `loop_diagnose` is an operational protocol, not a discipline.
- It frames a special MVL+ inquiry from a correction chain.
- It already has good guardrails:
  - do not treat corrected inquiry as ground truth;
  - do not claim exact root cause;
  - do not collapse all failures into discipline failures;
  - do not propose broad rewrites from one example;
  - do not promote it into a standalone skill too early.
- It already supports maintenance candidates and evaluation gates.

Signal:

- `loop_diagnose` is working because it is trigger-specific, evidence-specific, and uses MVL+ rather than inventing a separate reasoning engine.
- It likely needs a light alignment vocabulary patch, not a redesign.

### Cycle 3 - Scan Reflect

Scanned:

- `homegrown/reflect/SKILL.md`
- `homegrown/reflect/references/reflect.md`

Findings:

- `reflect` is defined as second-order observation of a completed SIC run's process.
- It examines human interventions, cross-step leaks, step quality, surprises, and answer-goal alignment.
- It produces per-step observations, proposed memory cells, and process frontier questions.
- It has strong failure-mode controls: no rubber-stamping, no over-reflection, no blaming user, no content reflection.
- It has not been operationally integrated into MVL/MVL+ or the user's recent workflow.

Signal:

- Reflect's conceptual role is valid.
- The likely problem is not that reflect is bad; it lacks a trigger, storage/use loop, and relationship to newer alignment-control records.

### Cycle 4 - Scan Outcome Review

Scanned:

- `homegrown/protocols/outcome_review.md`

Findings:

- Outcome review explicitly says it does not replace reflect or loop diagnose.
- It routes to reflect when the issue is process quality.
- It routes to loop diagnose when attribution is unclear and evidence supports causal diagnosis.
- It uses `alignment_control.md`.

Signal:

- Outcome review can become the real trigger surface for both reflect and loop diagnose.
- Reflect should not compete with outcome review; it should handle process-alignment deltas found by outcome review or by loop completion.

## Structural Map

### Territory Overview

There are three relevant maturity states:

- `loop_diagnose`: proven in practice, needs light alignment-control integration.
- `outcome_review`: newly created, likely becomes a trigger/router.
- `reflect`: valid spec, unused, needs an adoption path and alignment-control framing.

### Inventory

| Component | Current State | Main Risk | Likely Action |
| --- | --- | --- | --- |
| `loop_diagnose` | Working protocol | Over-patching or making it too heavy | Preserve; patch lightly for alignment layer/mode vocabulary |
| `reflect` | Strong spec, unused | Dead concept or forced auto-run overhead | Keep; reposition as optional process-alignment insurance with clear triggers |
| `outcome_review` | New protocol | Could bypass reflect or over-route to diagnose | Use as router for after-use deltas |
| `alignment_control` | New contract | Could become theory-only | Let reflect/loop_diagnose reference it when patched |

### Signal Log

- Probed: retire reflect.
  - Result: premature; reflect covers a real gap.
- Probed: auto-run reflect after every MVL+.
  - Result: risky; may waste effort and create noise.
- Probed: redesign loop_diagnose under alignment.
  - Result: unnecessary; it is already structurally sound.
- Probed: light alignment-control patches.
  - Result: strongest.

### Confidence Map

- Confirmed: loop_diagnose should not be redesigned.
- Confirmed: reflect should not be merged into outcome_review or loop_diagnose.
- Confirmed: reflect lacks operational use path.
- Inferred: reflect should be introduced through trigger-based use, not automatic universal use.
- Unknown: whether reflect will produce enough value after 3-5 real uses.

## Convergence

- Frontier stability: strong.
- Declining discovery rate: strong.
- Bounded gaps: yes. The question is sequencing of small patches and usage gates, not a new architecture.

Telemetry:

- Exploration mode: artifact.
- Convergence: PROCEED.
- Failure modes observed: no premature retirement; auto-run risk logged.
