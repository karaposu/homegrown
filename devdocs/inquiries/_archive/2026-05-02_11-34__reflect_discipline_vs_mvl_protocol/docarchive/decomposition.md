# Decomposition: Reflect Discipline vs MVL Protocol

## 1. Coupling Map

### Whole

The whole is the classification and operating design for process-alignment review in Homegrown.

### Major Clusters

| Cluster | Internal Coupling | Notes |
| --- | --- | --- |
| C1. Shared alignment contract | High | Alignment layers, modes, record shape, and routing vocabulary must stay centralized in `alignment_control.md`. |
| C2. Reflect operation | High | Process/content boundary, five review dimensions, output constraints, and failure modes belong together. |
| C3. Invocation and trigger governance | Moderate | Trigger rules, storage, runner suggestions, and trial gates affect reflect but can be separated from its cognitive method. |
| C4. Deep diagnostic escalation | High | Correction chains, causal attribution, and failure hypotheses belong with `loop_diagnose`/MVL+. |
| C5. Empirical adoption evidence | Moderate | Trial runs, usefulness gates, and retirement/convert criteria determine whether the taxonomy should change later. |

### Natural Boundaries

- Contract vs execution: `alignment_control.md` defines shared fields; it should not execute reflection.
- Bounded observation vs open-ended diagnosis: `reflect` observes process alignment; MVL+/`loop_diagnose` diagnoses complex causes.
- Immediate classification vs future migration: keep current type separate from evidence gates that may change it later.
- Discipline method vs protocol wrapper: the method can remain in `reflect`; a protocol wrapper is only needed if invocation/storage complexity grows.

## 2. Boundary Validation

### Top-Down Boundaries

1. Contract boundary: alignment vocabulary is separate from operations.
2. Operation boundary: direct process review is separate from causal diagnosis.
3. Governance boundary: triggers and trial gates are separate from the review method.
4. Escalation boundary: complex process diagnosis goes to MVL+/loop_diagnose.

### Bottom-Up Atoms

- "Read completed loop artifacts."
- "Notice human intervention."
- "Detect cross-step leak."
- "Judge step quality."
- "Check answer-goal alignment."
- "Record expected/observed/delta/route."
- "Compare weak prior to corrected later result."
- "Create maintenance candidate."

### Validation Result

The reflect atoms group naturally into a bounded review method. The correction-chain atoms group naturally into `loop_diagnose`. The alignment-record atom crosses both but belongs to the shared contract/interface, not inside either operation's identity.

Boundary confidence: HIGH for reflect vs loop_diagnose; MEDIUM for whether invocation governance deserves a separate protocol now.

## 3. Question Tree

### Q1. What operation does `reflect` actually perform?

Verification criteria:

- [x] Identify whether the operation is bounded or open-ended.
- [x] Identify whether it has an internal method distinct from MVL+.
- [x] Identify whether it is process-facing, content-facing, or outcome-facing.

Answer: bounded second-order process observation.

### Q2. What work belongs to a protocol rather than a discipline?

Verification criteria:

- [x] Separate input normalization, source authority, storage, and routing from cognitive judgment.
- [x] Compare `loop_diagnose` as the reference protocol-wrapper case.
- [x] Identify whether a `process_review.md` wrapper is needed now.

Answer: protocol work is trigger/input/storage/output governance. It may wrap reflect later, but does not replace reflect now.

### Q3. When should MVL+ be used instead of direct `reflect`?

Verification criteria:

- [x] Define escalation conditions.
- [x] Preserve loop_diagnose's correction-chain role.
- [x] Avoid running full MVL+ for routine lightweight process review.

Answer: use MVL+ when the process issue requires open-ended sensemaking, decomposition, candidate generation, critique, or causal attribution.

### Q4. What should decide the future classification?

Verification criteria:

- [x] Define a small trial gate.
- [x] Define success/failure signals.
- [x] Define conversion/retirement triggers.

Answer: 3-5 triggered reflect runs should decide whether `reflect` remains a discipline, gains a protocol wrapper, converts to MVL+ framing, or is retired.

## 4. Interface Map

| Source | Target | What Flows | Direction |
| --- | --- | --- | --- |
| `alignment_control.md` | `reflect` | layer/mode/record vocabulary | one-way |
| `reflect` | alignment-control records | process drift, human correction, cross-step leak, answer-goal mismatch | one-way |
| `outcome_review.md` | `reflect` | route when downstream observation implicates process quality | one-way |
| `reflect` | `loop_diagnose` / MVL+ | escalation when attribution is unclear or evidence suggests systemic failure | one-way |
| MVL/MVL+ runner | `reflect` | optional suggestion when process-alignment signals exist | one-way, deferred |
| `reflect` trial evidence | taxonomy decision | keep, wrap, convert, retire | one-way |

## 5. Dependency Order

1. Classify `reflect` narrowly as process-alignment insurance.
2. Patch reflect's role/triggers/output expectations to match `alignment_control.md`.
3. Run 3-5 triggered reflect trials on completed inquiries with visible process-alignment signals.
4. Review trial results:
   - if useful and lightweight, keep as discipline;
   - if useful but trigger/storage heavy, add `process_review.md` protocol wrapper;
   - if direct reflect repeatedly needs full E -> S -> D -> I -> C reasoning, convert to protocol-wrapped MVL+;
   - if generic/noisy, retire or tighten triggers.
5. Only after evidence, consider MVL/MVL+ runner suggestion hooks.

Parallelizable later:

- Trial reflect on different inquiry types after the role patch.
- Compare reflect outputs against outcome-review and loop-diagnose records.

## 6. Self-Evaluation

| Dimension | Result | Reason |
| --- | --- | --- |
| Independence | PASS | Contract, reflect operation, protocol governance, and MVL+ escalation can be reasoned about separately through clear interfaces. |
| Completeness | PASS | Covers current classification, trigger behavior, protocol possibility, MVL+ escalation, and future evidence gates. |
| Reassembly | PASS | If all pieces are followed, the system gets a clear near-term type plus a route to revise it based on use evidence. |
| Tractability | PASS | Each piece can be materialized or tested in a focused pass. |
| Interface clarity | PASS | Shared record vocabulary and routing interfaces are explicit. |
| Balance | PASS | The heaviest piece is empirical trial, which correctly belongs after patching. |
| Confidence | MEDIUM-HIGH | Strong documentation evidence supports the boundary; practical reflect value remains empirical. |

## Decomposition Output

The natural structure is not "one object called reflection." It is:

```text
shared alignment contract
  -> reflect as bounded process-observation discipline
  -> optional protocol governance if needed
  -> MVL+/loop_diagnose escalation for complex causal diagnosis
  -> trial evidence decides future type
```

This decomposition supports keeping `reflect` as a discipline now, but makes that decision conditional rather than dogmatic.
