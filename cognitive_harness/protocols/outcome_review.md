> **Loading note.** This file is loaded by a human, MVL/MVL+, materialization, navigation, or a future runner when a completed finding, branch, protocol edit, or materialized artifact has been used and needs after-use review. Read `cognitive_harness/contracts/alignment_control.md` before executing this protocol. This protocol implements outcome-alignment insurance; it does not replace reflect, loop diagnose, navigation, materialization, or validation.

---

# OUTCOME_REVIEW - Outcome-Alignment Insurance Protocol

OUTCOME_REVIEW is the operational protocol for reviewing whether a finding, branch, protocol edit, or materialized artifact worked after it was used.

OUTCOME_REVIEW implements the L6 Outcome Alignment mode of:

```text
cognitive_harness/contracts/alignment_control.md
```

Its core question is:

```text
This source was expected to produce X after use.
After use, did X happen?
If not, what alignment delta appeared and what route should follow?
```

OUTCOME_REVIEW is not a general reflection step. It is not a validation step before use. It is not causal diagnosis by default. It is an after-use alignment-control record.

---

## Alignment Lifecycle Context

Outcome review operates within the alignment lifecycle that turns feedback into future control improvement:

```text
alignment state
  -> signal
  -> evidence maturity
  -> control action
  -> outcome
  -> calibration
  -> updated alignment state
```

OUTCOME_REVIEW usually occupies the `tested` evidence-maturity stage: a finding, branch, protocol edit, route, or artifact has been used downstream, and observed behavior now exists.

When review depth is `full`, or when the review may affect future routing, OUTCOME_REVIEW should also preserve calibration evidence:

- what control action or route produced the reviewed source;
- what effect that action was expected to have;
- whether the action helped, failed, partially helped, or added overhead;
- what future route selection should learn from the outcome.

Do not promote alignment-dynamics concepts into mandatory `alignment_control.md` fields from a single review. Treat calibration notes as local evidence until repeated records justify contract changes.

---

## Purpose

Use OUTCOME_REVIEW to:

- compare expected downstream effect against observed downstream behavior;
- record outcome alignment confirmations, mismatches, uncertainties, drifts, and regressions;
- record calibration evidence when downstream use reveals whether a chosen route or control action worked;
- identify which alignment layer is implicated when evidence supports it;
- create a routeable alignment-control record;
- decide whether to no-op, monitor, navigate, branch, materialize, diagnose, revise a protocol, or recover;
- feed future navigation, loop diagnosis, state comprehension, and maintenance work.

---

## Non-Goals

OUTCOME_REVIEW does not:

- judge whether the original final answer was universally true;
- replace reflect's process-alignment review;
- replace loop diagnose's causal attribution inquiry;
- replace materialization validation;
- replace navigation's possibility enumeration;
- automatically revise protocols or files;
- require every tiny action to produce a full review;
- create a per-inquiry `_alignment.md` sidecar.

OUTCOME_REVIEW may route to these operations. It does not perform them unless the user separately invokes the relevant protocol or task.

---

## When to Use

Use OUTCOME_REVIEW after a source has been used downstream.

Typical sources:

- `finding.md` from an inquiry;
- a completed branch inquiry;
- a protocol edit;
- a materialized artifact;
- a materialization trace;
- a user observation that a prior result did or did not work;
- repeated downstream behavior that confirms or contradicts a prior expectation.

Typical trigger phrases:

- "Did this actually work?"
- "We used this and it failed."
- "This artifact was expected to solve X, but Y happened."
- "Record outcome review for this."
- "This branch/protocol/finding did not help after use."
- "This worked; record the confirmation."

Do not use OUTCOME_REVIEW when:

- the artifact has not been used yet; use validation or materialization trace instead;
- the question is about how the thinking process performed; use reflect;
- the user gives a weak prior, correction, and later improved inquiry; use loop diagnose or route to it;
- the user only wants possible next directions; use navigation;
- the expected outcome cannot be identified or inferred.

---

## Review Depth

### Minimal Review

Use for low-risk confirmations, simple mismatches, or quick manual records.

Minimum fields:

- source;
- expected;
- observed;
- delta;
- evidence;
- confidence;
- route.

### Full Review

Use when:

- the source is a protocol, skill, runner, branch architecture, or shared artifact;
- the observed mismatch has meaningful downstream cost;
- attribution is uncertain;
- the same problem has happened more than once;
- the route may become a branch, materialization, loop diagnose, or protocol revision.

Full review must include:

- layer classification;
- mode classification;
- secondary layer candidates when relevant;
- calibration note when the source came from a meaningful prior route or control action;
- maintenance candidate or explicit no-op;
- follow-up gate.

---

## Step 0 - Load the Contract

Before executing this protocol, read:

```text
cognitive_harness/contracts/alignment_control.md
```

Use its layer ids, mode ids, record schema, routing rules, and failure modes.

Calibration-sensitive means at least one is true:

- the reviewed source was produced by a prior route or control action;
- the source is a protocol, skill, runner, branch architecture, or shared artifact;
- the observed outcome may change future route preference;
- the same signal has appeared more than once;
- the review may route to materialization, loop diagnose, protocol revision, or recovery.

Minimal low-risk reviews may proceed using only `alignment_control.md`.

Do not execute OUTCOME_REVIEW from memory if the contract cannot be loaded.

---

## Step 1 - Normalize the Input Contract

Normalize the request into these fields:

```text
source_type:
source_path:
source_anchor:
expected:
observed:
use_context:
evidence:
validation_before_use:
control_action:
expected_control_effect:
review_depth:
requested_route:
optional_context:
```

Field meanings:

- `source_type` is one of `inquiry`, `branch`, `materialization`, `checkpoint`, `reflection`, `loop_diagnose`, `user_observation`, or `other`.
- `source_path` is the file or folder being reviewed.
- `source_anchor` is the section, line, quoted phrase, or decision being reviewed.
- `expected` is what the source was expected to make true after use.
- `observed` is what actually happened after use.
- `use_context` explains where, when, or how the source was used.
- `evidence` lists concrete files, outputs, user observations, validation results, or downstream behavior.
- `validation_before_use` records checks that passed or failed before the artifact was used.
- `control_action` is optional. It records the prior route or operation that produced the source when known, such as `branch`, `materialize`, `revise_protocol`, `navigation`, or `loop_diagnose`.
- `expected_control_effect` is optional. It records what that prior route or operation was expected to make true.
- `review_depth` is `minimal` or `full`. Default: `minimal` for clear low-risk cases; `full` for shared protocols, runners, materialization, uncertain attribution, or repeated issues.
- `requested_route` is optional. The reviewer still verifies it against evidence.
- `optional_context` records any additional context.

If `expected` is absent, infer it from the source only when the source clearly states an intended effect, goal, or success criterion.

If `observed` is absent, halt and ask for the downstream observation. OUTCOME_REVIEW cannot run without observed after-use behavior.

If `expected` cannot be inferred, halt and ask for the expected downstream effect.

---

## Step 2 - Verify Source and Evidence

If `source_path` is provided:

- verify the path exists when it is inside the workspace;
- preserve the exact path in the record;
- read the most relevant source artifact.

For inquiry folders, prefer reading:

- `_branch.md`;
- `_state.md`;
- `finding.md`;
- `_branches.md` if branch results matter;
- `docarchive/critique.md` if the source expectation came from a critique survivor or route.

For materialization folders, prefer reading:

- `desc.md`;
- `step_by_step_impl_plan.md`;
- `critic.md`;
- `materialization_trace.md`;
- validation output if present.

Do not require every possible file. Read enough to establish:

- what was expected;
- what was observed;
- what evidence supports the delta.

If source verification fails, do not invent source details. Record the source as unresolved or halt if the source is necessary.

---

## Step 3 - Reconstruct Expected Outcome

State the expected outcome in one or two concrete sentences.

Good expected outcomes:

```text
The branch protocol should make nested inquiries resumable without path reconstruction errors.
```

```text
The materialized artifact should let future protocols record source authority, validation, files changed, and follow-up gates.
```

Bad expected outcomes:

```text
It should be better.
```

```text
The protocol should work.
```

If the original expectation was vague, record that as an alignment issue. Vague expectation often implicates `L1` Task Alignment or `L6` Outcome Alignment.

---

## Step 4 - Record Observed Outcome

State what actually happened after use.

The observed outcome must be grounded in evidence:

- user correction;
- failed or passed command;
- downstream artifact behavior;
- branch usage result;
- materialization result;
- repeated confusion;
- successful use without required follow-up;
- validation miss discovered later.

Do not treat a plan, prediction, or validation-before-use as observed downstream outcome.

---

## Step 5 - Classify the Alignment Delta

Choose one delta type:

| Delta Type | Meaning |
| --- | --- |
| `confirmation` | Observed outcome matched expected outcome. |
| `mismatch` | Observed outcome contradicted expected outcome. |
| `uncertainty` | Evidence is not enough to know whether expected outcome held. |
| `drift` | The work moved away from original intent or goal over time. |
| `regression` | A previously aligned behavior got worse after the source was used or changed. |

Write a concise delta summary.

Examples:

```text
delta.type: mismatch
delta.summary: Branch creation worked, but nested branch resume still depended on path reconstruction in one runner.
```

```text
delta.type: confirmation
delta.summary: The protocol was used on a child inquiry and preserved parent/root lineage correctly.
```

---

## Step 6 - Classify Alignment Layer and Mode

Default layer for OUTCOME_REVIEW is:

```text
alignment_layer: L6
```

Use another layer or `mixed` when the evidence shows the outcome issue came from elsewhere:

- `L0`: stale or missing workspace context caused the outcome mismatch.
- `L1`: the intended task or expected outcome was misunderstood.
- `L2`: the work scope did not cover the real goal.
- `L3`: the wrong approach or action-space was chosen.
- `L4`: the plan, write-set, sequence, or action set was wrong.
- `L5`: the result broke coherence with existing files, protocols, findings, or constraints.
- `L6`: the result did not match original intent after use.
- `mixed`: multiple layers are materially involved.
- `unknown`: the layer cannot be attributed without diagnosis.

Default mode is usually:

```text
mode: reflection
```

Use:

- `diagnostic` when the review is already investigating failure cause;
- `maintenance` when reviewing staleness, drift, or standing state;
- `alignment` when reviewing whether known work stayed correct;
- `unknown` when not enough context exists.

Record secondary layer candidates in the body when useful, even though the contract's main field holds one layer.

---

## Step 7 - Decide the Route

Use the lightest sufficient route from `cognitive_harness/contracts/alignment_control.md`.

Common route decisions:

- `no-op`: confirmation and no follow-up needed.
- `monitor`: evidence is weak or impact is low, with a concrete revisit trigger.
- `navigation`: the review creates one possible next direction among several.
- `branch`: the review creates a clear child inquiry question with source anchor.
- `materialize`: the review points to a concrete artifact or file change.
- `loop_diagnose`: attribution is unclear and evidence is sufficient for causal diagnosis.
- `reflect`: the issue is mainly process quality of a completed loop.
- `revise_protocol`: evidence strongly supports a protocol or contract change.
- `recover`: breakage must be repaired before normal work continues.

Do not route to `loop_diagnose` only because a mismatch exists.

Do not route to `revise_protocol` unless evidence supports a source change.

Do not route to `materialize` without a concrete artifact or write-set candidate.

---

## Step 8 - Create the Calibration Note

Create a calibration note when `review_depth` is `full`, when `control_action` is known, or when the review may influence future routing.

Ask:

```text
What control action or route produced this source?
What effect was that action expected to have?
Did the action help, fail, partially help, remain unknown, or add overhead?
What should future routing learn from this outcome?
```

Use one of these route-outcome labels:

| Route Outcome | Meaning |
| --- | --- |
| `helped` | The selected route/control action materially supported the expected outcome. |
| `partial` | The action helped but left meaningful gaps, ambiguity, or follow-up cost. |
| `failed` | The action did not produce the expected control effect. |
| `overhead` | The action added complexity or cost without enough downstream value. |
| `unknown` | Evidence is not enough to judge route quality. |

The calibration note is not a root-cause diagnosis. It is evidence about route quality.

Do not revise protocols or routing rules from one calibration note unless evidence is unusually strong. Prefer creating a maintenance candidate, branch, or loop diagnose route when stronger reasoning is needed.

---

## Step 9 - Create the Review Record

Compute:

```text
review_id = <YYYY-MM-DD_HH-MM__slug>
```

Recommended storage:

```text
devdocs/alignment_control/outcome_reviews/[review_id].md
```

If the source is a local inquiry or materialization folder, optionally also create a short pointer file under:

```text
[source_folder]/alignment_records/outcome_reviews/[review_id].md
```

The global record is the durable review. The local pointer is for discoverability near the source.

Do not create a generic `_alignment.md` sidecar.

For minimal reviews that are not calibration-sensitive, omit the `Calibration Note` section.

Use this record structure:

```markdown
---
record_type: outcome_review
contract: cognitive_harness/contracts/alignment_control.md
review_id: [review_id]
status: open | routed | closed | deferred
---
# Outcome Review: [short name]

## Source

- Type: [source_type]
- Path: [source_path]
- Anchor: [source_anchor]

## Use Context

[Where/how the source was used.]

## Expected

[What should have been true after use.]

## Observed

[What actually happened after use.]

## Alignment-Control Record

```yaml
alignment_layer: [L0-L6 | mixed | unknown]
mode: [mode]
source:
  type: [source_type]
  path: [source_path]
  anchor: [source_anchor]
expected: [expected]
observed: [observed]
delta:
  type: [confirmation | mismatch | uncertainty | drift | regression]
  summary: [summary]
evidence:
  - [evidence item]
confidence: [high | medium | low]
route:
  action: [route]
  target: [target or none]
  reason: [reason]
status: [open | routed | closed | deferred]
```

## Evidence

- [evidence item with path/anchor if available]

## Interpretation

[What the delta means. Avoid root-cause overclaiming.]

## Calibration Note

- Control Action: [prior route/control action or "unknown"]
- Expected Control Effect: [expected effect or "unknown"]
- Route Outcome: [helped | partial | failed | overhead | unknown]
- Future Routing Lesson: [what future routing should learn, or "None."]

## Maintenance Candidate

[Specific candidate or "None."]

## Follow-Up Gate

[Observable condition for revisiting, or "None."]
```

---

## Step 10 - Update the Global Index

Create or update:

```text
devdocs/alignment_control/outcome_reviews.md
```

Use this table:

```markdown
# Outcome Reviews

| Review ID | Source | Layer | Mode | Delta | Confidence | Route | Status | Path |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
```

Append one row per review.

If index update fails after the review record is created, do not delete the review record. Report that the record exists but is not indexed.

---

## Step 11 - Return Handoff Summary

Print:

```text
Outcome review complete.
Source: [source]
Delta: [delta type + summary]
Layer: [alignment_layer]
Route: [route action]
Record: [record path]
```

If route is not `no-op`, include the next command or protocol target when known.

Examples:

```text
Route: loop_diagnose
Reason: Attribution is unclear and a correction chain exists.
```

```text
Route: branch
Question: Why did outcome review show repeated L2 scope drift in materialization traces?
```

---

## Relationship to Other Operations

### Reflect

Reflect asks:

```text
Did the process that produced the result maintain alignment?
```

Outcome review asks:

```text
Did the result maintain alignment after use?
```

If the review reveals process weakness, route to reflect or create a process maintenance candidate.

### Loop Diagnose

Loop diagnose asks:

```text
Which layer, stage, protocol, or framing step likely failed, based on correction-chain evidence?
```

Outcome review should route to loop diagnose when attribution is unclear and evidence is sufficient.

### Navigation

Navigation enumerates possible next directions from the review record.

Outcome review may recommend navigation when the delta creates multiple possible next moves.

### Materialization

Materialization creates or changes artifacts.

Outcome review may recommend materialization when the delta points to a concrete file or protocol change.

### Alignment Control

Outcome review uses `cognitive_harness/contracts/alignment_control.md` for layer, mode, record, and routing semantics.

### Alignment Dynamics

Outcome review preserves after-use and route-quality evidence, then routes to navigation, loop diagnose, materialization, or protocol revision when the evidence justifies further work. It should not absorb alignment-dynamics concepts wholesale into mandatory contract fields from a single review.

---

## Failure Modes

### Validation Substitution

The review records pre-use validation as if it were after-use outcome.

Corrective action: distinguish validation_before_use from observed downstream behavior.

### Vague Expected Outcome

The review says the source was expected to "work" or "be better."

Corrective action: reconstruct a concrete expected effect or record L1/L6 uncertainty.

### Attribution Overclaim

The review claims a root cause without enough evidence.

Corrective action: use `unknown` or `mixed`, lower confidence, and route to loop diagnose only if evidence supports it.

### Calibration Overreach

The review treats one route outcome as enough to rewrite protocols, automate routing, or change contract fields.

Corrective action: record the calibration note, create a maintenance candidate when useful, and require repeated records or strong evidence before protocol or contract changes.

### Dynamics Bloat

The review tries to implement the whole alignment-dynamics lifecycle.

Corrective action: keep OUTCOME_REVIEW limited to after-use evidence and calibration notes. Route other lifecycle work to the appropriate operation.

### Over-Diagnosis

Every mismatch routes to loop diagnose.

Corrective action: use monitor, navigation, or materialization for simpler cases.

### Confirmation Blindness

Only failures get recorded.

Corrective action: record confirmations when they are valuable evidence for future trust or automation.

### Record Flood

Every tiny action produces a review.

Corrective action: use outcome review for meaningful downstream use, materialized artifacts, branch results, protocol edits, repeated failures, or important confirmations.

### Sidecar Bureaucracy

The protocol creates `_alignment.md` files or duplicates source artifacts.

Corrective action: create global outcome-review records and optional local pointers only.

### Orphan Record

The review record is created but not indexed or discoverable.

Corrective action: update `devdocs/alignment_control/outcome_reviews.md` or report the indexing failure.

---

## Short Version

OUTCOME_REVIEW is:

```text
after-use review for L6 outcome alignment
```

It records:

```text
source -> expected -> observed -> delta -> evidence -> confidence -> route
```

It writes an alignment-control record using:

```text
cognitive_harness/contracts/alignment_control.md
```

For full or calibration-sensitive reviews, it also records:

```text
control action -> expected control effect -> route outcome -> future routing lesson
```

It does not diagnose every failure. It routes deeper diagnosis only when justified.
