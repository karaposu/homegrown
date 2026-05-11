# Materialization Trace: Multi-Resolution Navigation Protocol

## Source

```yaml
authority: user_request
path: devdocs/inquiries/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage/finding.md
anchor: Next Actions / MUST / Correct future multi-resolution Navigation protocol wording
```

## Classification

```yaml
artifact_type: protocol
operation_intent: create
risk_class: medium
selected_mode: standard
```

## Contract

```yaml
target_path: homegrown/protocols/multi_resolution_navigation.md
write_set:
  - homegrown/protocols/multi_resolution_navigation.md
  - devdocs/materializations/2026-05-04_14-36__multi_resolution_navigation_protocol/
must_contain:
  - breadth is desired at the discovery layer
  - untracked expansion execution is the risk
  - batch_size or max_batch_expansions as current-run materialization budget
  - frontier ledger requirement
  - pending/unrun route preservation
  - scheduling is not final selection
  - exhaustive and budgeted modes
must_not_contain:
  - wording that treats breadth itself as the problem
  - hidden route filtering
  - runner implementation
  - .codex edits
```

## Records Created

```text
devdocs/materializations/2026-05-04_14-36__multi_resolution_navigation_protocol/desc.md
devdocs/materializations/2026-05-04_14-36__multi_resolution_navigation_protocol/step_by_step_impl_plan.md
devdocs/materializations/2026-05-04_14-36__multi_resolution_navigation_protocol/dynamic_critic_prompt.md
devdocs/materializations/2026-05-04_14-36__multi_resolution_navigation_protocol/critic.md
devdocs/materializations/2026-05-04_14-36__multi_resolution_navigation_protocol/step_by_step_impl_plan_revised.md
devdocs/materializations/2026-05-04_14-36__multi_resolution_navigation_protocol/materialization_trace.md
```

## Files Changed

```text
homegrown/protocols/multi_resolution_navigation.md
```

## Validation

### Check 1

Command:

```text
rg -n "problem is breadth|too many directions|max_expansions" homegrown/protocols/multi_resolution_navigation.md
```

Result:

```text
Only one hit: a legacy normalization note for `max_expansions`.
No hit for "problem is breadth".
No hit for "too many directions".
```

Limitation: manual interpretation required to confirm the legacy mention is acceptable.

### Check 2

Command:

```text
rg -n "Breadth|batch_size|max_batch_expansions|Budget controls|Unrun|Scheduled first|Out-of-policy|selection_boundary" homegrown/protocols/multi_resolution_navigation.md
```

Result:

```text
PASS. The protocol contains the Breadth Invariant, canonical batch fields, current-run budget wording, unrun/out-of-policy preservation, scheduling boundary, and no-final-selection field.
```

### Check 3

Command:

```text
git status --short -- homegrown/protocols/multi_resolution_navigation.md devdocs/materializations/2026-05-04_14-36__multi_resolution_navigation_protocol .codex
```

Result:

```text
homegrown/protocols/multi_resolution_navigation.md is newly created.
The repository already shows `.codex` deletions unrelated to this materialization.
This materialization did not edit `.codex`.
```

Limitation: `devdocs/materializations/` appears not to show in scoped git status, likely due ignore rules, but files exist locally.

### Check 4

Command:

```text
test -f tools/structural_check.sh && echo present || echo missing
```

Result:

```text
missing
```

Limitation: no automated structural checker was available; validation was manual plus targeted search.

## Deviations From Plan

```text
none
```

## Outcome

PASS.

The protocol was created within the approved write-set and encodes the corrected wording: breadth is desired, while untracked execution is the risk.

## Follow-Up Review Gate

```text
after_first_use
```

After the first protocol-guided multi-resolution Navigation run, use `homegrown/protocols/outcome_review.md` to check whether the protocol preserved unrun routes and reduced manual Navigation burden.
