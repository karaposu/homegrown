---
status: active
refines: devdocs/inquiries/diagnostics/2026-05-06_23-20__mvl_self_maintenance_failure_prioritization/finding.md
---
# Finding: Target Alignment Record, Check, And Gate

## Changes from Prior

**Prior path:** devdocs/inquiries/diagnostics/2026-05-06_23-20__mvl_self_maintenance_failure_prioritization/finding.md

**Revision trigger:** User clarification request about the proposed `Target-Layer Alignment Gate` fields.

**What's preserved:** The prior finding was right that MVL self-maintenance needs a way to stop evidence-domain drift. In the failed case, Navigation discussions were the evidence, but MVL self-maintenance was the repair target.

**What's changed:** The five-field block should not itself be called a gate. It is a record. The validation is a check. Only the blocking or repair behavior should be called a gate.

**What's new:** The clearer user-facing names are `Target Alignment Record`, `Target Fit Check`, and `Target Alignment Gate`.

**Migration:** If this mechanism is materialized, write the five fields under a `Target Alignment Record` heading. Use `Target Fit Check` for final validation. Reserve `Target Alignment Gate` for cases where the check fails and the loop must repair the branch, narrow the answer, defer the target, or refuse to conclude.

## Question

The question was whether these proposed fields are existing failure modes, a completely new mechanism, a change for every discipline, or only an MVL runner/framing concern:

```yaml
evidence_domain:
diagnosis_target:
maintenance_target:
implementation_target:
out_of_scope_target:
```

The user also asked why this should be called a "gate" and whether Homegrown already has other gates.

## Finding Summary

- The five fields are **target-role fields**. They name what role each thing plays in the inquiry.

- They are **not failure modes**. They help prevent failure modes such as target substitution, wrong design axis, and repair-target drift.

- The exact five-field record is **new as explicit wording**, but the underlying idea already exists in Homegrown through `_branch.md` Scope Check, LOOP_DIAGNOSE framing, CONCLUDE goal checks, and existing gate vocabulary.

- The field block should be called **Target Alignment Record**, not a gate.

- The validation step should be called **Target Fit Check**.

- The word **gate** should be reserved for the behavior that blocks conclusion or forces repair when the target roles do not match the answer.

- This should not be added to every discipline output by default. It belongs first in MVL/MVL+ branch framing, then in Critique/CONCLUDE final validation.

## Finding

We are discussing this because a prior MVL self-maintenance inquiry used Navigation diagnostics as evidence, but then produced an answer that was too Navigation-centered. The repair target was supposed to be MVL self-maintenance. The evidence topic took over the answer topic.

The proposed fields are useful because they make that kind of drift visible.

### The Fields

`evidence_domain` means: what material are we using as evidence?

Example: Navigation route-memory discussions and diagnostic findings.

`diagnosis_target` means: what failure, prior output, or behavior are we trying to explain?

Example: why a prior MVL prioritization loop answered on the wrong layer.

`maintenance_target` means: what system or process should become better because of the diagnosis?

Example: MVL self-maintenance behavior.

`implementation_target` means: where would a later patch or rule change land?

Example: MVL/MVL+ runner framing, Critique target-fit checks, CONCLUDE finalization, or LOOP_DIAGNOSE guidance.

`out_of_scope_target` means: what nearby target is tempting, but should not become the answer?

Example: Navigation implementation changes, when the inquiry is really about MVL self-maintenance.

### They Are Not Failure Modes

These fields are not failure-mode names.

A failure mode is something like `target substitution`: the loop starts with one repair target but answers as if a different target were the goal.

A failure mode is also something like `evidence-domain capture`: the evidence topic becomes the implementation topic even though it was only supposed to provide examples.

The five fields are different. They are context slots that make those failures easier to detect.

### They Are New And Not New

The exact field block is new. Homegrown does not already have these five names as a standard record.

The need is not new. Homegrown already has nearby concepts:

- `_branch.md` has a Scope Check.
- LOOP_DIAGNOSE separates prior path, corrected path, human correction, diagnostic target, and maintenance candidate.
- CONCLUDE checks whether a finding actually answers the branch question and advances the goal.
- Existing protocols already use gates for evaluation, progression, blocked routes, and action triggers.

So this should be treated as a small explicit record for an existing alignment problem, not as a brand-new discipline.

### Where It Should Live

The primary home is MVL/MVL+ framing.

That means the record belongs near branch creation or `_branch.md` Scope Check when an inquiry can confuse evidence, diagnosis, maintenance, implementation, and non-targets.

The secondary home is final validation.

That means Critique and CONCLUDE should be able to ask: did the final answer match the target roles recorded at the start?

It should not be added to every discipline output by default. Every discipline can read the target roles as shared context, but making every discipline restate them creates duplication and makes the mechanism feel ceremonial.

Sensemaking can clarify the fields if they are missing or ambiguous, but it should not become the only owner of the mechanism.

### Why Not Call The Field Block A Gate

"Gate" is too strong for the field block itself.

A record stores context. A check validates something. A gate blocks or allows movement.

So the clean naming is:

```text
Target Alignment Record = the five fields
Target Fit Check = the validation step
Target Alignment Gate = only the blocker or repair behavior
```

If the loop merely writes the five fields, that is not a gate.

If the loop compares the final answer to the five fields, that is a check.

If the mismatch means the loop must repair the branch question, narrow the answer, mark a target deferred, or refuse to conclude, that is a gate.

### Existing Gates

Homegrown already uses "gate" in several ways.

LOOP_DIAGNOSE uses an evaluation gate: how to test whether a maintenance candidate actually helps.

CONCLUDE uses action gates: time-bound, condition-bound, or observable triggers for next actions.

Navigation uses route/block gates: a route may stay blocked until a condition changes.

Artifact materialization uses progression gates: a later step should not happen until a required condition is met.

This means "gate" is not alien to Homegrown. The issue is force. The word is correct only when something can block, unlock, or force repair.

## Next Actions

### MUST

- **What:** When materializing this mechanism, name the field block `Target Alignment Record`, not `Target-Layer Alignment Gate`.
  **Who:** MVL/MVL+ framing documentation.
  **Gate:** First doc edit that adds these five fields to MVL/MVL+ behavior.
  **Why:** Prevents the record from sounding like a hard blocker.

- **What:** Add `Target Fit Check` as the final validation concept before a self-maintenance, diagnostic, or meta inquiry concludes.
  **Who:** Critique/CONCLUDE guidance.
  **Gate:** First doc edit that wires this mechanism into finalization.
  **Why:** Catches answers that drift from evidence topic to the wrong repair target.

- **What:** Reserve `Target Alignment Gate` for failed checks that require branch repair, answer narrowing, explicit deferral, or non-conclusion.
  **Who:** MVL/MVL+ runner rules and CONCLUDE guidance.
  **Gate:** Any doc edit using the word `gate` for this mechanism.
  **Why:** Keeps Homegrown's gate vocabulary tied to actual blocking or repair behavior.

### COULD

- **What:** Add a local target-fit prompt to a specific discipline only if evidence shows that discipline repeatedly drifts despite branch-level target roles.
  **Who:** The affected discipline's skill/protocol.
  **Gate:** Two or more diagnostics identify the same discipline as the drift point after the branch-level record exists.
  **Why:** Allows targeted reinforcement without making every discipline carry duplicate fields.

### DEFERRED

- **What:** Decide exact serialization, such as YAML block versus prose table.
  **Gate:** Reopen when editing MVL/MVL+ docs.
  **Why (if revived):** The current question is about meaning and placement, not syntax.

## Reasoning

The record/check/gate split survived because it preserves the useful part of the prior proposal while fixing the naming problem. The useful part is explicit target separation. The naming fix is that "gate" is used only when the mechanism can actually block or repair.

The simplified names survived because they are easier to understand. `Target-Layer Alignment` is technically accurate because the fields separate evidence, diagnosis, maintenance, implementation, and exclusions. But the field names already show those layers. `Target Alignment Record` is clearer for v1.

Adding the five fields to every discipline was rejected. It maximizes explicitness, but it duplicates target authority across outputs and turns a framing problem into discipline-wide ceremony.

Treating the fields as failure modes was rejected. A field like `evidence_domain` can be perfectly valid. The failure is not that evidence exists. The failure is when evidence is mistaken for the thing being repaired.

Doing nothing was rejected. The prior failure shows that generic care is not enough. The system needs a small explicit mechanism for cases where evidence topic and repair target can diverge.

The remaining risk is overuse. If this record is required for every ordinary local inquiry, agents will likely fill it mechanically. That would recreate the same kind of abstraction friction the user is objecting to.

## Open Questions

### Refinement Triggers

Reopen the naming if two later inquiries show users or agents still confuse `Target Alignment Record` with `Target Alignment Gate`.

Reopen discipline placement if two later diagnostics show the same discipline drifting despite a branch-level Target Alignment Record and a final Target Fit Check.

Reopen syntax when MVL/MVL+ docs are edited to materialize the mechanism.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+

u said 

The first urgent fix is therefore the Target-Layer Alignment Gate. In every self-maintenance, diagnostic, or meta inquiry where the evidence topic can differ from the repair target, the loop should record:

evidence_domain:
diagnosis_target:
maintenance_target:
implementation_target:
out_of_scope_target:

can u tell what are these categories? are they sth related to failure modes? or sth completely new that we dont have it at all?

is it sth all for all disciplines to alter ? or only MVL main loop ? and why call it gate? do we have other gates?
```

</details>
