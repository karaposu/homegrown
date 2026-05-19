> **Loading note.** This contract is read by protocols, disciplines, loop runners, and humans when they need shared alignment vocabulary or compatible alignment-control records. It is not an executable protocol. Do not treat this file as a runner, gate, or centralized alignment authority.

---

# ALIGNMENT_CONTROL - Shared Alignment Insurance Contract

ALIGNMENT_CONTROL defines the shared vocabulary and record shape for alignment-control work in Homegrown.

Alignment is the whole-system condition that must be preserved as work moves from intent to outcome.

Feedback is the control mechanism that makes alignment drift visible: expected state is compared with observed state, the delta is recorded, and a route is chosen.

Alignment-insurance operations are specialized mechanisms that prevent, detect, diagnose, or repair alignment drift at different boundaries.

This contract exists so those operations can share one language without being merged into one oversized procedure.

---

## Purpose

Use ALIGNMENT_CONTROL to:

- name which alignment layer is involved;
- name which mode the system is operating in;
- record expected vs observed behavior;
- record the alignment delta;
- preserve evidence and confidence;
- route the result to the right next operation;
- make records from checkpoint, reflect, outcome review, loop diagnose, materialization, navigation, and future tools compatible.

This file defines the contract. It does not execute the work.

---

## Non-Goals

ALIGNMENT_CONTROL is not:

- a universal alignment runner;
- a replacement for MVL or MVL+;
- a replacement for reflect, outcome review, loop diagnose, or checkpoint;
- a per-inquiry `_alignment.md` sidecar;
- a numerical scoring system;
- a six-agent runtime;
- an autonomy policy;
- a requirement that every small action creates a full record.

Do not centralize all alignment work here. Alignment state should stay close to the artifact or operation that produced it, then reference this contract for shared fields and routing semantics.

---

## Core Model

Every alignment-control record follows the same abstract shape:

```text
expected / intended / required
  vs
observed / actual / produced
  -> delta
  -> evidence
  -> confidence
  -> route
```

This corresponds to the AlignStack pillars:

| Pillar | In this contract |
| --- | --- |
| Explicitness | `expected` is stated |
| Visibility | `observed` is available |
| Measurement | `delta` is assessed |
| Comparison | expected and observed are compared |

Alignment layers define where alignment can fail.

Modes define the system's operating posture when the alignment check happens.

Routes define what should happen next.

---

## Alignment Layers

Use these layer ids in records.

| Layer | Name | Failure Surface |
| --- | --- | --- |
| `L0` | Workspace Alignment | Environment, context, files, prior work, or conventions are not loaded or fresh. |
| `L1` | Task Alignment | The task intent, depth, or expected outcome is not understood. |
| `L2` | Scope Alignment | The question or work scope does not match the goal. |
| `L3` | Action-Space Alignment | The approach space is wrong, incomplete, stale, or insufficient. |
| `L4` | Action-Set Alignment | The chosen steps, sequence, write-set, or execution plan is wrong or incomplete. |
| `L5` | Coherence Alignment | The work breaks or contradicts existing structure, contracts, findings, or constraints. |
| `L6` | Outcome Alignment | The result does not match the original intent or downstream use requirement. |
| `mixed` | Mixed Alignment | Multiple layers are implicated and cannot be separated cleanly. |
| `unknown` | Unknown Alignment | Alignment drift is visible, but the affected layer is not yet known. |

Prefer a specific layer when evidence supports it.

Use `mixed` when multiple layers are genuinely involved.

Use `unknown` when attribution would be speculative.

---

## Modes

Use these mode ids in records.

| Mode | Meaning |
| --- | --- |
| `exploration` | The system is mapping what exists or what could exist. |
| `alignment` | The system is executing known work while trying to stay correct. |
| `innovation` | The system is creating or reframing new possibilities. |
| `diagnostic` | The system is identifying what went wrong and why. |
| `maintenance` | The system is checking freshness, drift, archives, or standing state. |
| `recovery` | The system is restoring function or alignment after a diagnosed failure. |
| `reflection` | The system is learning from completed work or a completed period. |
| `unknown` | The mode is not known or was not recorded. |

Mode is not the same as tool name.

For example, `loop_diagnose` usually operates in `diagnostic` mode. `reflect` usually operates in `reflection` mode. `outcome_review` may operate in `reflection`, `diagnostic`, or `maintenance` mode depending on the trigger.

---

## Alignment-Control Record

Use this shape for records that need to be shared across protocols or read later.

```yaml
alignment_layer: L0 | L1 | L2 | L3 | L4 | L5 | L6 | mixed | unknown
mode: exploration | alignment | innovation | diagnostic | maintenance | recovery | reflection | unknown
source:
  type: inquiry | branch | materialization | checkpoint | reflection | loop_diagnose | user_observation | other
  path: path-or-identifier
  anchor: section-line-or-short-phrase
expected: what should have been true
observed: what actually happened
delta:
  type: confirmation | mismatch | uncertainty | drift | regression
  summary: concise description of the difference
evidence:
  - path-or-observation
confidence: high | medium | low
route:
  action: no-op | monitor | reflect | outcome_review | loop_diagnose | navigation | branch | materialize | revise_protocol | recover
  target: optional path, protocol, discipline, or inquiry target
  reason: why this route follows from the evidence
status: open | routed | closed | deferred
```

### Field Rules

- `alignment_layer` must name the affected layer when evidence supports it.
- `mode` must name the operating posture when known.
- `source.path` should preserve the exact path when a file or inquiry produced the signal.
- `expected` must describe the intended, required, or predicted state.
- `observed` must describe what actually happened or was produced.
- `delta.type` must distinguish confirmation from failure. Positive evidence matters.
- `evidence` must include concrete anchors when available.
- `confidence` must reflect attribution confidence, not emotional certainty.
- `route.action` must be explicit. If no action is needed, use `no-op`.
- `status` tracks whether the record has been acted on.

Do not claim root cause in `delta.summary`. Root-cause claims belong in a diagnostic output such as LOOP_DIAGNOSE unless evidence is already strong.

---

## Insurance Operations

Alignment-insurance operations use this contract but keep their own procedures.

| Operation | Role | Typical Trigger | Typical Layer Emphasis | Typical Mode |
| --- | --- | --- | --- | --- |
| Checkpoint / Primitive RC | Immediate structural alignment insurance | A discipline output is produced before the next stage consumes it | `L4`, `L5` | `alignment` |
| Reflect | Process-alignment insurance | A loop or meaningful work unit completes | `mixed`, often `L4-L6` | `reflection` |
| Outcome Review | Outcome/use-alignment insurance | A finding, branch, protocol edit, or artifact has been used downstream | `L6`, sometimes `L1-L2` | `reflection`, `diagnostic`, or `maintenance` |
| Loop Diagnose | Causal alignment diagnosis | A weak prior result, human correction, and later improved result form a correction chain | any layer | `diagnostic` |
| Navigation | Alignment-aware routing | Evidence-backed next directions need enumeration | depends on source | `alignment` |
| Materialization | Action-set/coherence/outcome alignment guard | A decision becomes concrete files under a contract | `L4-L6` | `alignment` |

Do not merge these operations just because they share the same contract.

The contract is shared. Execution remains specialized.

---

## Routing Rules

Use the lightest sufficient route.

### `no-op`

Use when the observed state confirms the expected state and no follow-up is needed.

Still record no-op when the confirmation is valuable evidence.

### `monitor`

Use when the signal may matter but is not strong enough to justify action.

The record must include a concrete trigger for revisiting.

### `reflect`

Use when the signal concerns process quality of a completed loop or work period.

Do not use reflect for downstream-use evidence unless the question is specifically about process.

### `outcome_review`

Use when the signal concerns whether a finding, branch, protocol edit, or artifact worked after use.

Outcome review may create maintenance candidates or route uncertain attribution to loop diagnose.

### `loop_diagnose`

Use when attribution is unclear and there is enough evidence for causal diagnosis, especially a correction chain.

Do not use loop diagnose for every mismatch. It is an escalation.

### `navigation`

Use when the record should become one input among possible next directions.

Navigation enumerates; it does not decide by itself.

### `branch`

Use when the alignment delta justifies a child inquiry with a clear source anchor and question.

Branch creation should use `cognitive_harness/protocols/branch_inquiry.md`.

### `materialize`

Use when the next step is a concrete artifact, file change, test, adapter, or protocol implementation.

Materialization should stay under its own contract and trace requirements.

### `revise_protocol`

Use only when evidence supports changing a protocol, contract, skill, or discipline specification.

Prefer monitoring or loop diagnosis when evidence is thin.

### `recover`

Use when a diagnosed issue requires restoring a known-good state or repairing breakage before continuing normal work.

Recovery is distinct from diagnosis.

---

## Integration Points

### MVL / MVL+

Loop runners may produce alignment-control records when:

- scope or intent is uncertain;
- structural checkpoint results produce warnings;
- iteration refinement risks drifting from the goal;
- a completed loop exposes alignment debt.

Loop runners should not become universal alignment controllers.

### Reflect

Reflect may read alignment-control records as evidence about process alignment.

Reflect may produce alignment-control records when it identifies process drift, cross-step leaks, human corrections, or answer-goal mismatch.

### Outcome Review

Outcome review should implement `L6` outcome/use-alignment insurance.

It should use this contract for after-use records.

### Loop Diagnose

Loop diagnose should use this contract to report likely affected layers, mode context, attribution confidence, and maintenance candidates.

### Materialization

Materialization traces should include enough information for later outcome-alignment review:

- source authority;
- expected effect;
- files changed;
- validation;
- follow-up review gate.

### Navigation

Navigation may read alignment-control records as evidence-backed next-direction signals.

Navigation should preserve the distinction between:

- alignment drift that needs diagnosis;
- alignment debt that needs materialization;
- confirmed alignment that needs no action.

---

## Failure Modes

### Centralized Alignment Runner

ALIGNMENT_CONTROL becomes a universal command or runner.

Corrective action: keep this file as a contract; keep procedures mode-specific.

### Sidecar Bureaucracy

Every inquiry gets a duplicated `_alignment.md` file.

Corrective action: embed alignment state in existing artifacts and use records only when there is a real delta or confirmation worth preserving.

### Feedback Parent Drift

Feedback is treated as the top-level concept and alignment becomes an afterthought.

Corrective action: keep alignment as the parent architecture; feedback/control is the mechanism.

### Over-Diagnosis

Every mismatch routes to loop diagnose.

Corrective action: use monitor, reflect, outcome review, or navigation when causal diagnosis is not justified.

### False Precision

Records use numerical alignment scores without calibration.

Corrective action: use qualitative confidence until enough comparable records exist.

### Attribution Overclaim

A record names a root cause without enough evidence.

Corrective action: downgrade confidence, use `unknown` or `mixed`, and route to loop diagnose only when evidence is sufficient.

### Record Flood

Every minor action creates a record.

Corrective action: record only meaningful confirmations, mismatches, uncertainties, drifts, or regressions.

---

## Deferred Work

Do not add these until enough alignment-control records exist to justify them:

- per-layer numerical alignment scores;
- a generic alignment runner;
- automatic route selection;
- six-agent alignment runtime;
- continuous layer × mode monitoring;
- branch-set or multihead comparison based on alignment records.

Suggested revival gates:

- 10+ real alignment-control records before considering generic routing;
- 30+ comparable records before considering numerical scores;
- 10+ outcome-review records before automating outcome-alignment routing;
- stable mode/layer record patterns before building continuous monitoring.

---

## Short Version

Use this contract when an operation needs to say:

```text
Which alignment layer was at risk?
Which mode was active?
What was expected?
What was observed?
What delta appeared?
What evidence supports that?
How confident is the attribution?
What route should follow?
```

Alignment is the architecture.

Feedback/control is the mechanism.

Insurance operations are specialized procedures that use the shared contract.
