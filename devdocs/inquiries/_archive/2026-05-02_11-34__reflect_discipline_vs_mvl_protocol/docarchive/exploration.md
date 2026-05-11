# Exploration: Reflect Discipline vs MVL Protocol

## Restated Question

Should `reflect` remain a Homegrown discipline, or should it become a protocol that frames a normal MVL/MVL+ inquiry over process-alignment evidence?

## Exploration Mode

Artifact exploration with a signal-first entry point.

The signal is the user's challenge: the prior answer treated `reflect` as a discipline, but `loop_diagnose` is a protocol-wrapped MVL+ operation, and the user remembers prior discussion about this boundary.

## Scanned Territory

### Confirmed Artifacts

| Region | Confidence | Notes |
| --- | --- | --- |
| `homegrown/reflect/SKILL.md` | Confirmed | Defines `reflect` as a skill/discipline that examines a completed SIC run's process and writes `reflection.md`. |
| `homegrown/reflect/references/reflect.md` | Confirmed | Defines a stable cognitive method: process-vs-content boundary, five examination dimensions, three output types, and failure modes. |
| `homegrown/protocols/loop_diagnose.md` | Confirmed | Explicitly says LOOP_DIAGNOSE is not a new discipline; it is a framing protocol for a diagnostic MVL+ run. |
| `homegrown/contracts/alignment_control.md` | Confirmed | Treats reflect as process-alignment insurance and loop diagnose as causal alignment diagnosis. It also warns against merging specialized operations into a universal runner. |
| `homegrown/protocols/outcome_review.md` | Confirmed | Routes process-quality questions to `reflect`, correction-chain causal attribution to `loop_diagnose`, and downstream after-use mismatch to outcome review. |
| `devdocs/inquiries/_archive/reflect_as_primitive_rc/finding.md` | Confirmed | Earlier decision: reflect owns quality awareness but should not perform every quality check itself; structural checking belongs to checkpoint. |
| `devdocs/inquiries/2026-05-02_05-56__reflect_loop_diagnose_after_alignment_control/finding.md` | Confirmed | Recent decision: keep loop diagnose intact; keep reflect but reframe and trial it before runner integration. |

### Relevant Prior Signals

- `loop_diagnose` has a clear reason to be a protocol wrapper: it has no distinct internal cognitive method beyond framing an MVL+ diagnostic inquiry over a correction chain.
- `reflect` has a distinct internal method already: second-order process observation using human interventions, cross-step leaks, step quality, surprises, and answer-goal alignment.
- Prior findings rejected "`reflect` does everything" and "hybrid reflect with two modes" because they fragment identity.
- `alignment_control.md` deliberately separates shared contract from specialized execution.
- `reflect` remains practically unproven because it has not yet been used much.

## Signals Detected

### Signal 1: Operation Type Difference

`loop_diagnose` is a protocol because its work is primarily framing, evidence selection, and output-contract shaping for an MVL+ diagnostic run. `reflect` already claims a cognitive operation: second-order process observation.

### Signal 2: Primitive Minimalism Pressure

The user's challenge is structurally valid. If Homegrown treats MVL/MVL+ as the atomic reasoning engine, every new standalone discipline increases complexity. `reflect` must justify why it is not merely "MVL+ about the loop."

### Signal 3: Use Evidence Gap

`loop_diagnose` has real successful use. `reflect` is still mostly theoretical in this repo. A taxonomy decision should not pretend that reflect's practical value is proven.

### Signal 4: False Binary Risk

The choice may not be "discipline or protocol." A discipline can execute the bounded process-review operation, while a small protocol or trigger contract can govern when to run it and how to record alignment-control output.

### Signal 5: Cost and Adoption Pressure

Protocol-wrapped MVL+ reflection would be heavier but deeper. Direct `reflect` would be cheaper but may become shallow or generic if its method is weak in practice.

## Probes

### Probe A: Why Loop Diagnose Is Protocol-Wrapped MVL+

`loop_diagnose.md` explicitly says the reasoning engine remains MVL+ and warns against promoting LOOP_DIAGNOSE into a standalone discipline until repeated runs prove a distinct internal method. That is a maturity-control rule. It says: when the method is not distinct yet, keep the operation as a protocol wrapper.

### Probe B: Whether Reflect Has a Distinct Method

`reflect/references/reflect.md` is more than an input contract. It defines:

- a process/content distinction;
- exact inputs;
- five examination dimensions;
- output constraints;
- failure modes.

This is evidence for a distinct method. It may be a lightweight method, but it is not just "ask MVL+ a question."

### Probe C: Prior "Reflect Owns Quality Awareness" Decision

The archived Primitive RC finding rejected reflect as an all-purpose checker. It preserved reflect as a quality integrator that reads evidence produced by other mechanisms. This supports a narrow `reflect`, not a broad protocol that absorbs all feedback/diagnosis.

### Probe D: Alignment-Control Placement

`alignment_control.md` calls reflect an insurance operation and explicitly says operations should keep their procedures. This supports keeping reflect's execution identity separate from the shared contract.

## Frontier and Gaps

### Confirmed

- `loop_diagnose` should remain protocol-wrapped MVL+.
- `reflect` currently has a stable internal description and is therefore more discipline-like than `loop_diagnose`.
- `reflect` should not be auto-run by default.

### Scanned

- A future small protocol such as `process_review.md` could govern triggers, storage, and alignment-control record shape.
- That protocol would not necessarily replace `reflect`; it could invoke it.

### Unknown

- Whether real `reflect` runs will produce useful process-alignment evidence or generic noise.
- Whether process-alignment review regularly needs full MVL+ depth.
- Whether users will actually remember to invoke `reflect` without a runner suggestion.

## Convergence Check

- Frontier stability: sufficient for this inquiry. The relevant artifact regions have been scanned.
- Declining discovery rate: later reads reinforced the same distinction rather than revealing a new category.
- Bounded gaps: the remaining uncertainty is empirical usage evidence, not missing documentation.

## Exploration Output

The mapped territory supports a refined position: `reflect` is not obviously the same kind of thing as `loop_diagnose`. `loop_diagnose` is protocol-wrapped MVL+ because its method is mainly comparative diagnostic framing. `reflect` has a bounded second-order process-review method, so it can remain a boundary discipline for now. However, because use evidence is thin, the classification should be trial-gated rather than treated as permanent.
