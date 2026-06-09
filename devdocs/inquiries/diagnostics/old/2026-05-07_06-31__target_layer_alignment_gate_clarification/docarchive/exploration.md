# Exploration: Target-Layer Alignment Gate Clarification

## Mode And Entry Point

Mode: artifact exploration.

Entry point: signal-first, because the user is challenging a specific proposed mechanism: `Target-Layer Alignment Gate`.

Question being mapped:

```text
What do evidence_domain, diagnosis_target, maintenance_target,
implementation_target, and out_of_scope_target mean?
Are they existing failure-mode concepts, new fields, discipline-wide changes,
or only an MVL runner/framing check? Is "gate" the right word?
```

## Exploration Cycle 1 - Source Scan

### Scan

Scanned:

- `homegrown/MVL+/SKILL.md`
- `devdocs/inquiries/diagnostics/2026-05-06_23-20__mvl_self_maintenance_failure_prioritization/finding.md`
- archived discipline outputs for that inquiry through `rg` matches
- `homegrown/protocols/loop_diagnose.md`
- `homegrown/protocols/conclude.md`
- `homegrown/protocols/artifact_materialization.md`
- `homegrown/protocols/multi_resolution_navigation.md`
- `homegrown/contracts/alignment_control.md`

### Signals Detected

The exact five fields:

```yaml
evidence_domain:
diagnosis_target:
maintenance_target:
implementation_target:
out_of_scope_target:
```

appear as a new proposed record in the recent MVL self-maintenance finding and its archived discipline outputs. They do not appear as an existing Homegrown contract or existing MVL runner field.

The underlying ideas are not new:

- `_branch.md` already has `Question`, `Goal`, and `Scope Check`.
- `loop_diagnose.md` already distinguishes prior inquiry, corrected inquiry, human correction, affected stage, maintenance candidate, and evaluation gate.
- `conclude.md` already asks whether the answer advances the goal and requires gates for proposed next actions.
- `alignment_control.md` already defines shared expected/observed/delta/evidence routing vocabulary, but explicitly says it is not a runner, gate, or centralized authority.

### Resolution Decision

Treat Target-Layer Alignment as a new explicit field shape for an existing alignment problem: target drift between what evidence is about and what the inquiry is supposed to fix.

### Probe

Probed `gate` usage. Homegrown already uses "gate" in several senses:

- evaluation gate in `loop_diagnose.md`: how to test whether a maintenance candidate helps;
- `Gate:` fields in `conclude.md` Next Actions: time-bound, condition-bound, or observable trigger;
- materialization gates: checks that block or allow later steps;
- navigation gates: blocked regions and opening conditions;
- alignment-control warning: not every contract should be treated as a gate or central authority.

### Frontier State

Advancing. The fields are new as a named record, but the problem they address is already present in Homegrown.

### Confidence Map Update

- Confirmed: exact five-field record is new.
- Confirmed: the concepts are related to existing scope/alignment/failure-diagnosis ideas.
- Confirmed: "gate" has precedent but can imply a stronger blocking mechanism.
- Unknown: best final name until Sensemaking/Critique evaluate "Gate" versus "Check" versus "Record."

## Exploration Cycle 2 - Category Meaning Probe

### Scan

Mapped each proposed field to the corrected failure from `2026-05-06_23-20__mvl_self_maintenance_failure_prioritization`.

### Inventory

| Field | Plain Meaning | In The Corrected Failure |
| --- | --- | --- |
| `evidence_domain` | The topic or artifacts being used as evidence. | Navigation route-memory discussions and diagnostic findings. |
| `diagnosis_target` | The failure or object being diagnosed. | Why the prior MVL prioritization loop failed. |
| `maintenance_target` | The system/process that should improve because of the diagnosis. | MVL self-maintenance behavior. |
| `implementation_target` | The files, protocols, or surfaces that may be edited when materializing the fix. | Potentially MVL+/MVL runner framing, Critique, CONCLUDE, or LOOP_DIAGNOSE guidance. |
| `out_of_scope_target` | The tempting adjacent system that should not be treated as the answer. | Navigation implementation patches. |

### Signals Detected

The fields are not failure modes themselves. They are target roles.

They help prevent several failure modes or shortcoming types:

- target substitution;
- wrong design axis;
- branch-frame drift;
- maintenance overreach;
- secondary operational claim leakage;
- evidence-domain salience becoming implementation guidance.

### Resolution Decision

Classify the proposed fields as a lightweight target-role record, not a discipline taxonomy and not a failure-mode taxonomy.

### Probe

Checked whether every discipline needs to alter behavior.

The likely primary surface is the runner/framing layer:

- when creating `_branch.md`;
- when doing Scope Check;
- when the user asks a meta, diagnostic, or self-maintenance question.

Secondary surfaces:

- Critique can use it as a target-fit dimension;
- CONCLUDE can use it as an answer-target finalization check.

Tertiary surfaces:

- Sensemaking can infer and clarify the fields when the branch did not define them;
- Innovation and Decomposition should not need global changes, but may consume the fields when choosing candidates or boundaries.

### Frontier State

Stable at meaning level.

### Confidence Map Update

- Confirmed: not all disciplines need direct modification.
- Confirmed: runner/framing plus Critique/CONCLUDE is the natural first placement.
- Inferred: Sensemaking may support it, but should not own it.

## Jump Scan - Existing "Gate" Semantics

### Scan

Jump-scanned Homegrown use of "gate" outside the recent finding.

### Signals Detected

Homegrown uses "gate" for at least three shapes:

1. **Evaluation gate**
   - A way to test whether a maintenance candidate helped.

2. **Progression gate**
   - A condition that must be true before a later step can run.

3. **Route/block gate**
   - A condition that opens or blocks a route.

The proposed Target-Layer Alignment mechanism is closer to a progression/alignment check than a failure mode. It blocks or repairs proceeding when the inquiry target is ambiguous.

### Resolution Decision

The word "gate" is defensible only if the mechanism can block or force repair before a finding becomes durable.

If it only records fields for clarity, "Target-Layer Alignment Record" or "Target-Layer Alignment Check" is more accurate.

### Frontier State

Stable.

### Confidence Map Update

- Confirmed: "gate" is not alien to Homegrown vocabulary.
- Confirmed: "gate" may be too strong if no halt/repair behavior is intended.
- Unknown: final naming should be decided by the intended operational force.

## Convergence Check

Frontier stability: yes. Later scans repeated the same distinction: new explicit record, existing alignment problem.

Declining discovery rate: yes. Additional docs clarified "gate" but did not change category meaning.

Bounded gaps: yes. Exact source patch placement is unknown, but the user's question asks for conceptual clarification.

Jump scan: complete. Existing "gate" usage was checked.

## Territory Overview

The territory has four regions:

1. **Field meanings**
   - The five fields name target roles in an inquiry.

2. **Failure relationship**
   - They are not failure modes, but they prevent several failure modes around target drift and wrong framing.

3. **Implementation surface**
   - Natural first home is MVL/MVL+ branch framing plus Critique/CONCLUDE final checks.

4. **Naming**
   - "Gate" is valid only if it has blocking or repair authority; otherwise "Check" or "Record" may be cleaner.

## Inventory

| Region | Finding |
| --- | --- |
| Existing exact mechanism | New in the recent finding. |
| Existing concepts | Present as Scope Check, goal advancement, LOOP_DIAGNOSE framing, evaluation gates, and alignment-control vocabulary. |
| Failure-mode relation | Prevents target substitution, wrong design axis, branch-frame drift, maintenance overreach, and side-claim leakage. |
| All-discipline change? | No. Primary runner/framing; secondary Critique/CONCLUDE; optional Sensemaking support. |
| Gate precedent | Yes, but meaning varies by protocol. |

## Signal Log

| Signal | Status | Notes |
| --- | --- | --- |
| Exact five fields are new | confirmed | Found only in recent MVL self-maintenance inquiry. |
| Underlying distinction already exists | confirmed | Scope Check, LOOP_DIAGNOSE, CONCLUDE, alignment-control all have nearby concepts. |
| Not a failure-mode taxonomy | confirmed | Fields name roles, not failure types. |
| Belongs to all disciplines | weak/rejected | Direct discipline-wide edits look too broad. |
| "Gate" may be too strong | confirmed as risk | Depends on intended behavior. |

## Confidence Map

| Claim | Confidence | Reason |
| --- | --- | --- |
| The categories are new as explicit fields | high | Search found them only in the recent inquiry artifacts. |
| The concept is not new | high | Existing Scope Check, LOOP_DIAGNOSE, CONCLUDE, and alignment docs already contain adjacent ideas. |
| They are related to failure modes but are not failure modes | high | They prevent observed failures but do not classify failures by themselves. |
| They should first live in MVL/MVL+ framing and finalization, not all disciplines | high | The problem is inquiry target alignment, not every discipline's local reasoning. |
| "Gate" should be kept only if it can block/repair | medium-high | Existing Homegrown usage supports gate as condition/check, but the term can imply authority. |

## Frontier State

Closed for the current question. Sensemaking should decide final wording and whether the better name is "Gate," "Check," or "Record."

## Gaps And Recommendations

Sensemaking should decide whether the five fields should be mandatory or conditional. The exploration evidence points toward conditional use:

```text
Use when evidence domain, diagnosis target, maintenance target,
and implementation target can diverge.
Do not force it on every small ordinary inquiry.
```

Sensemaking should also separate two forms:

- a fuller **record** at branch creation when target drift is likely;
- a tiny **finalization check** before Critique/CONCLUDE.
