> **Loading note.** This file is loaded by a human, MVL/MVL+, Navigation, materialization work, or a future runner when an accepted decision must become concrete files. Read it in full before executing ARTIFACT_MATERIALIZATION. This protocol controls source authority, artifact classification, operation intent, write scope, lifecycle depth, validation, trace output, and after-use review. It does not decide whether the source finding is true.

---

# ARTIFACT_MATERIALIZATION - Controlled Decision-To-Files Protocol

ARTIFACT_MATERIALIZATION is the operational protocol for turning an authorized decision, finding, navigation selection, or user request into concrete files under an explicit contract.

Its core path is:

```text
authorized source
  -> normalize request
  -> classify artifact type
  -> classify operation intent
  -> assess risk facts
  -> select lifecycle mode
  -> execute selected path
  -> validate
  -> write trace
  -> set outcome-review gate
```

Materialization is different from thinking-loop conclusion. MVL/MVL+ can decide that an artifact should exist. ARTIFACT_MATERIALIZATION decides how that decision is safely converted into files.

---

## Bootstrap Clause

This protocol's own first creation may use a one-time bootstrap compact path when it is directly authorized by an explicit user request and prior materialization findings.

Future artifact creation, edits, rewrites, refactors, or implementation work should use this protocol instead of relying on the bootstrap exception.

---

## Purpose

Use ARTIFACT_MATERIALIZATION to:

- prevent ungoverned file creation from findings, skills, or navigation outputs;
- preserve source authority before files are changed;
- select a lifecycle depth proportional to risk;
- keep low-risk Markdown materialization lightweight but still bounded;
- require task-description, implementation-plan, dynamic-critic, repair, validation, and trace for code or behavior-affecting work;
- make changed files traceable back to the decision that authorized them;
- create evidence for outcome review and future protocol improvement.

---

## Non-Goals

ARTIFACT_MATERIALIZATION does not:

- decide whether the source finding is universally true;
- replace MVL, MVL+, Navigation, Reflect, Loop Diagnose, or Outcome Review;
- allow skills to freely generate arbitrary artifacts;
- create branches or merge branch results;
- grant permission to edit outside the approved write-set;
- require a full implementation lifecycle for every tiny Markdown note;
- create separate create/edit/rewrite/refactor subprotocol files in v1.

Skills and disciplines may propose artifact requirements. This protocol controls whether and how those requirements become files.

---

## When to Use

Use this protocol when a request or result asks for concrete artifacts, including:

- creating or editing protocols, contracts, skills, documentation, notes, schemas, traces, code, tests, configs, or harness adapters;
- materializing a conclusion from `finding.md`;
- turning a Navigation-selected direction into files;
- implementing a branch or outcome-review follow-up;
- changing existing loaded instructions or shared Homegrown structure.

Do not use this protocol for:

- a conversational answer with no file changes;
- reading, reviewing, or analyzing files without changing them;
- running an MVL/MVL+ inquiry;
- after-use review of an artifact that has already been used. Use `homegrown/protocols/outcome_review.md` for that.

---

## Universal Input Contract

Before changing files, normalize the materialization request into these fields:

```yaml
source_authority: user_request | finding | branch | navigation | outcome_review | loop_diagnose | trace_followup | protocol_need | other
source_path: path-or-conversation-anchor
source_anchor: section-line-quoted-phrase-or-summary
request_summary: concise statement of what should be materialized
artifact_type: markdown_note | documentation | protocol | contract | skill | runner | code | test | config | schema | harness_adapter | trace_schema | other
operation_intent: create | edit | rewrite | refactor | extend | extract | delete | deprecate
target_path: primary file or directory target
write_set:
  - allowed file or directory path
artifact_contract:
  purpose: why this artifact should exist
  must_contain:
    - required content, behavior, or interface
  must_not_contain:
    - forbidden scope, behavior, or claim
  relationships:
    - existing artifacts this must align with
success_criteria:
  - observable completion criterion
validation_plan:
  - command, structural check, manual review, or reason no automated validation exists
risk_facts:
  new_or_existing: new | existing | mixed
  behavior_impact: none | possible | actual
  loaded_instruction_impact: none | possible | actual
  write_set_breadth: single-file | few-files | many-files
  reversibility: easy | moderate | hard
  validation_clarity: clear | manual | unclear
  user_or_parallel_edit_risk: none | possible | actual
selected_mode: compact | standard | full
trace_path: devdocs/materializations/<id>/materialization_trace.md
follow_up_review_gate: none | after_first_use | after_downstream_failure | date-or-condition
```

If required fields are missing and cannot be inferred safely, stop and clarify or create a task description first.

---

## Step 1 - Verify Source Authority

Accepted source authorities:

- explicit user request;
- `finding.md` that names or implies a concrete artifact;
- completed branch result;
- Navigation-selected next action;
- Outcome Review route to materialize;
- Loop Diagnose maintenance recommendation;
- materialization trace follow-up;
- explicit protocol need discovered while executing another protocol.

Source authority must identify why this artifact should exist or change.

Do not use a finding as a loose permission slip. Preserve the concrete source path and anchor whenever available.

If source authority is ambiguous, halt before changing files.

---

## Step 2 - Classify Artifact Type

Choose the closest artifact type:

| Type | Meaning |
| --- | --- |
| `markdown_note` | Concept note, explanation, or standalone written artifact. |
| `documentation` | User-facing or developer-facing docs that describe existing behavior or decisions. |
| `protocol` | Operational procedure that guides future work. |
| `contract` | Shared vocabulary, schema, or invariant record used by multiple protocols or tools. |
| `skill` | Skill instruction file or skill-local support artifact. |
| `runner` | Loop runner, command behavior, orchestration, or execution machinery. |
| `code` | Runtime implementation code. |
| `test` | Test, fixture, scoring check, or validation script. |
| `config` | Configuration used by tooling, runtime, model adapters, or workflows. |
| `schema` | Data shape, persistence format, trace format, or interchange contract. |
| `harness_adapter` | Adapter connecting Homegrown reasoning to an external benchmark or execution harness. |
| `trace_schema` | Format for traces, logs, review records, or status records. |
| `other` | Anything not covered above. Must be explained. |

Markdown is not automatically low-risk. A Markdown file that defines a protocol, contract, skill, runner behavior, or shared schema can change future system behavior and may require Standard or Full mode.

---

## Step 3 - Classify Operation Intent

Choose the operation profile before selecting lifecycle mode.

| Operation | Main Risk | Required Attention |
| --- | --- | --- |
| `create` | Weak authority, unclear purpose, poor discoverability. | Verify source, target path, reader/user success, and relationship to existing artifacts. |
| `edit` | Local inconsistency, silent contract change, too-wide write-set. | Identify exact anchor, preserve unrelated content, and check downstream references. |
| `rewrite` | Loss of load-bearing content, changed meaning, hidden deletions. | Create a preservation map before editing. |
| `refactor` | Claimed structure-only change that alters behavior or meaning. | Prove before/after equivalence for preserved behavior or semantics. |
| `extend` | Scope creep, duplicated concepts, weak boundaries. | State why extension belongs in the target rather than a new artifact. |
| `extract` | Broken references, orphaned context, unclear ownership. | Preserve source and target links, ownership, and context needed by readers or tools. |
| `delete` | Lost history, broken navigation, missing replacement. | Require explicit authority and downstream-reference check. |
| `deprecate` | Old artifact still used accidentally. | Add replacement path, status, and migration note. |

### Rewrite Preservation Map

For `rewrite`, record before implementation:

```yaml
must_remain_true:
  - meaning, behavior, invariant, or source link to preserve
intentionally_changes:
  - meaning, behavior, structure, or emphasis that should change
removed_content:
  - content removed and why removal is acceptable
reference_updates:
  - downstream reference that must remain valid or be updated
```

### Refactor Equivalence Check

For `refactor`, record before implementation:

```yaml
preserved_behavior_or_meaning:
  - invariant that should not change
structure_change:
  - what is reorganized
equivalence_evidence:
  - test, diff review, semantic review, or reference check
```

---

## Step 4 - Assess Risk Facts

Use risk facts to select lifecycle mode. Do not select mode from file extension alone.

### Low Risk

Use low risk only when all are true:

- artifact is new or standalone;
- no runtime behavior impact;
- no loaded instruction impact, or only a draft not used by runners yet;
- write-set is a single file or narrow folder;
- change is easy to reverse;
- validation is clear or manual review is sufficient;
- no known user or parallel edits affect the target.

Typical examples:

- new standalone `enes/*.md` concept note;
- new low-risk explanatory documentation;
- new draft trace template not yet wired into tooling.

### Medium Risk

Use medium risk when any are true:

- existing protocol, contract, documentation, or skill is edited;
- change may affect future Homegrown operation;
- config, test, harness stub, or schema is created or changed;
- relationships to existing artifacts are non-trivial;
- rewrite or refactor is moderate;
- validation is manual but meaningful consequences exist.

Typical examples:

- creating a new protocol that future work will load;
- editing an existing protocol section;
- adding a harness adapter stub;
- changing tests or configs used by a workflow.

### High Risk

Use high risk when any are true:

- runner behavior changes;
- discipline fundamentals change;
- shared schema, trace format, or persistence behavior changes;
- ARC execution, scoring, or submission behavior changes;
- broad rewrite or refactor affects load-bearing content;
- validation is unclear and the artifact can mislead downstream work;
- actual runtime or operational behavior changes.

Typical examples:

- patching MVL/MVL+ execution behavior;
- changing loaded skill fundamentals;
- changing benchmark harness execution or scoring;
- altering shared trace contracts used by multiple protocols.

---

## Step 5 - Select Lifecycle Mode

Select the lightest mode that covers the risk.

| Mode | Use For | Required Records |
| --- | --- | --- |
| `compact` | Low-risk standalone artifacts and simple new Markdown/content work. | One `materialization_trace.md` with inline brief, content contract, tiny plan, risk scan, validation, outcome, and follow-up gate. |
| `standard` | Medium-risk artifacts, existing docs/protocol edits, tests/configs/stubs, and behavior-possible work. | `desc.md`, `step_by_step_impl_plan.md`, `dynamic_critic_prompt.md`, `critic.md`, revised plan when needed, validation, and `materialization_trace.md`. |
| `full` | High-risk artifacts, runner/discipline/schema/harness behavior, broad rewrites, or unclear validation with high consequence. | Standard records plus strict risk gates, stronger validation, explicit accepted-risk notes, and required outcome-review gate. |

Compact mode is not allowed when:

- existing loaded protocols, contracts, skills, or runner behavior are changed;
- runtime behavior changes;
- validation is unclear and consequence is meaningful;
- operation intent is broad rewrite or behavior refactor;
- write-set expands beyond the normalized contract.

---

## Step 6 - Compact Mode

Compact mode is a content lifecycle, not a no-process shortcut.

Use for low-risk artifacts where a full task-desc/task-plan/dynamic-critic lifecycle would add more overhead than safety.

Create:

```text
devdocs/materializations/<id>/materialization_trace.md
```

The trace must contain these sections:

```markdown
# Materialization Trace: <name>

## Source
## Contract
## Classification
## Content Contract
## Tiny Plan
## Risk Scan
## Implementation Notes
## Validation
## Outcome
## Follow-Up Review Gate
```

The Compact content contract must state:

```yaml
purpose:
must_contain:
must_not_contain:
relationships:
reader_success:
```

Validation may be manual structural review when the artifact is pure Markdown. If no automated check exists, say that directly.

Outcome must be one of:

- `PASS`: artifact was created or changed within contract and validation passed;
- `PARTIAL`: artifact exists but a limitation, missing validation, or unresolved issue remains;
- `FAIL`: artifact was not safely materialized.

---

## Step 7 - Standard Mode

Standard mode adapts the proven task-desc, task-plan, dynamic-critic, repair, implementation lifecycle.

Create a materialization folder:

```text
devdocs/materializations/<id>/
  desc.md
  step_by_step_impl_plan.md
  dynamic_critic_prompt.md
  critic.md
  step_by_step_impl_plan_revised.md   # only when critic requires plan repair
  materialization_trace.md
```

### Phase 1 - Task Description

`desc.md` must define:

- problem statement;
- user value;
- success criteria;
- scope boundaries;
- priority;
- source authority;
- artifact type;
- operation intent;
- target path and write-set;
- validation plan;
- risk class.

Gate: another agent or future reader should understand the intended artifact from `desc.md` without reconstructing the whole prior conversation.

### Phase 2 - Implementation Plan

`step_by_step_impl_plan.md` must include:

- what is being built or changed;
- how the plan moves from current state to desired state;
- step table with expected outputs;
- per-step details;
- files each step may touch;
- validation per step;
- repair or rollback path if the step fails.

Gate: do not run dynamic critic until write-set and validation expectations are clear.

### Phase 3 - Dynamic Critic

Create `dynamic_critic_prompt.md` customized to:

- artifact type;
- operation intent;
- repo area;
- existing relationships;
- validation path;
- likely failure modes.

Run the dynamic critic and save the result as `critic.md`.

The critic should identify:

- High, Medium, and Low risks;
- affected files or concepts;
- likely failure mode;
- mitigation for every High or Medium risk;
- whether the plan is too vague for the risk level.

Gate: unresolved High risks block implementation. Medium risks require plan repair or explicit accepted-risk notes.

### Phase 4 - Plan Repair

If the critic finds High risks or repairable Medium risks, create:

```text
step_by_step_impl_plan_revised.md
```

The revised plan must state how each risk was resolved or accepted.

### Phase 5 - Implementation

Implement only within the approved write-set.

If implementation requires a wider write-set, pause and revise the materialization contract before editing more files.

### Phase 6 - Validation

Run the planned validation commands or manual checks. Record exact command names and results when commands are used.

### Phase 7 - Trace

Write `materialization_trace.md` with final source, records created, files changed, validation results, deviations, outcome, and follow-up gate.

---

## Step 8 - Full Mode

Full mode is Standard mode plus strict gates.

Use Full mode for high-risk artifacts.

Additional requirements:

- no unresolved High risks;
- every Medium risk is repaired or explicitly accepted with reason;
- validation must include the strongest available automated check, structural check, targeted test, or explicit reason no such check exists;
- broad rewrites and refactors must include preservation or equivalence evidence;
- runner, discipline, schema, and benchmark-harness changes should consider branch experiment or staged rollout before ordinary adoption;
- `follow_up_review_gate` must route to `homegrown/protocols/outcome_review.md` after first meaningful use or downstream failure.

Full mode does not mean "make the artifact bigger." It means make authority, planning, risk handling, validation, and trace stronger.

---

## Step 9 - Implementation Rules

During implementation:

- stay inside the approved write-set;
- preserve unrelated user edits;
- do not perform unrelated refactors;
- do not delete or overwrite existing content without operation intent and authority;
- keep source links and anchors where they matter;
- update references when moving, extracting, deleting, or deprecating content;
- use the repo's existing patterns before inventing new structure;
- if validation reveals a mismatch, repair within the contract or record `PARTIAL` / `FAIL`.

If the target changes from Markdown-only to behavior-affecting, reclassify risk and mode before continuing.

---

## Step 10 - Validation and Outcome

Validation records must distinguish:

```text
planned check
actual check run
result
limitation
```

Outcome values:

- `PASS`: the artifact satisfies the contract, stayed inside write-set, and validation is sufficient for the selected mode.
- `PARTIAL`: the artifact was created or changed, but validation, scope, or risk handling is incomplete.
- `FAIL`: materialization could not be completed safely or the artifact does not satisfy the contract.

Do not call manual inspection an automated test. Manual validation is acceptable only when named as manual.

---

## Step 11 - Materialization Trace

Every mode produces a trace.

The trace is the bridge back into Homegrown's learning system.

Minimum trace fields:

```yaml
source:
  authority:
  path:
  anchor:
classification:
  artifact_type:
  operation_intent:
  risk_class:
  selected_mode:
contract:
  target_path:
  write_set:
  must_contain:
  must_not_contain:
records_created:
  - path
files_changed:
  - path
validation:
  - command_or_check:
    result:
    limitation:
deviations_from_plan:
  - deviation or none
outcome: PASS | PARTIAL | FAIL
follow_up_review_gate:
```

Trace files should live under:

```text
devdocs/materializations/<YYYY-MM-DD_HH-MM__slug>/materialization_trace.md
```

Use a stable slug that identifies the artifact or change.

---

## Step 12 - After-Use Review

Materialization validation happens before or during creation.

Outcome review happens after the artifact has been used.

Set a follow-up review gate when the artifact is expected to affect future work:

```text
after_first_use
after_downstream_failure
after_3_uses
date-or-condition
none
```

After the gate triggers, use:

```text
homegrown/protocols/outcome_review.md
```

The review should ask:

- did the artifact solve the original problem;
- did the plan miss important implementation realities;
- did the dynamic critic catch the right risks;
- did validation predict downstream behavior;
- what route should follow from observed evidence.

---

## Step 13 - Subprotocol Extraction Gates

Do not create `artifact_create.md`, `artifact_edit.md`, `artifact_rewrite.md`, or `artifact_refactor.md` in v1.

Operation profiles may be extracted into separate files only when all are true:

- at least three materialization traces have used that operation profile;
- the repeated steps are stable;
- the section has become large enough to make this controller hard to read;
- extraction will not duplicate the universal materialization contract;
- the extracted file is still invoked through `artifact_materialization.md`.

This keeps v1 small enough to use while preserving a path toward specialization.

---

## Failure Modes

Watch for these failures:

- **Source laundering:** a broad finding is treated as permission for unrelated files.
- **Compact loophole:** low-risk mode is used to skip needed planning for behavior-affecting work.
- **File-type false safety:** Markdown is assumed safe even when it changes loaded instructions or shared contracts.
- **Write-set creep:** implementation expands beyond the approved target without reclassification.
- **Rewrite drift:** a rewrite silently removes load-bearing meaning.
- **Refactor drift:** a refactor claims no semantic change but changes behavior or interpretation.
- **Critic bypass:** Standard or Full mode skips dynamic critique.
- **Validation substitution:** manual review is described as if it were a test.
- **Trace omission:** files change without a materialization record.
- **Subprotocol proliferation:** operation files are split before repeated traces prove the need.
- **Outcome amnesia:** artifact validation passes, but no after-use review gate exists for load-bearing artifacts.

---

## Short Version

Before changing files, answer:

```text
What source authorizes this?
What artifact type is this?
What operation is being performed?
What can break?
Which mode is sufficient: compact, standard, or full?
What exact files may change?
How will it be validated?
Where is the trace?
When should outcome_review run after use?
```

Then materialize only inside that contract.
