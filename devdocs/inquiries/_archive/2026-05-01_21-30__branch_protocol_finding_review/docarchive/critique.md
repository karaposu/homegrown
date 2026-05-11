# Critique: Branch Protocol Finding Review

## Evaluation Dimensions

| Dimension | Weight | Standard |
| --- | ---: | --- |
| Correct architecture | 5 | Branch creation should be owned at the right layer. |
| Useful now | 5 | The design should support immediate manual branch inquiries. |
| Implementation precision | 5 | The design should reduce ambiguity before edits. |
| Multihead scalability | 4 | Future parallel branch sets should not be blocked. |
| Low overbuild | 4 | V1 should avoid scheduler/merge complexity. |
| State safety | 5 | Parent/child state ownership should be clear. |

## Prosecution

The reviewed finding is not implementation-ready because it leaves several contracts vague:

- "mirrored or canonical" protocol copies is not a decision;
- `Branch Set ID` semantics are ambiguous for single branches;
- `branch_source` can be too weak if stored as a loose string;
- parent `_branches.md` ownership is unclear;
- `CONCLUDE` parent-index updates create a future shared-write trap;
- no explicit parent validation rules are given;
- no recursive branch/root-depth rule is given;
- no failure behavior is defined for parent index update failures.

If implemented exactly as written, two agents could make different but plausible choices and produce incompatible branch artifacts.

## Defense

The finding correctly solves the main architectural question:

- branch creation belongs in a protocol;
- MVL/MVL+ should stay pipeline runners;
- root inquiries should remain flat;
- nested branch inquiries are the right visible structure;
- `[folder_name]` must become `[inquiry_path]`;
- merge and scheduler should be deferred;
- parent index exists for discoverability, not as the child inquiry's only state.

These are the hardest conceptual decisions. The remaining issues are spec refinement, not reasons to abandon the direction.

## Collision

Defense wins on architecture. Prosecution wins on implementation readiness.

Final verdict: proceed, but first refine the finding into a stricter branch protocol spec.

## Required Refinements

### 1. Choose A Canonical Protocol Path

Use:

```text
homegrown/protocols/branch_inquiry.md
```

If `.codex/skills/protocols/branch_inquiry.md` exists, make it a pointer to the canonical protocol rather than a second full copy.

### 2. Store Structured Source Anchors

Accept:

```text
branch_source: finding.md > Finding Summary > "quoted bullet"
```

Store:

```md
Source File:
Source Section:
Source Anchor:
Source Lines:
```

### 3. Define Identifiers Clearly

Use:

```text
branch_id = timestamp slug
branch_mode = single | set-member
branch_set_id = none for single branch v1
```

Only set a real `branch_set_id` when a coordinated branch set exists.

### 4. Make Child State Authoritative

Child `_state.md` is the truth for child completion.

Parent `_branches.md` is an index/manifest that can be stale and refreshed.

### 5. Do Not Make CONCLUDE The General Parent-Index Writer

`CONCLUDE` should complete the child and print branch pointers.

For single manual branches, parent index update can be an explicit convenience. It must not be required for the child to complete.

For branch-set children, parent update should be done by a future coordinator or refresh protocol.

### 6. Add Parent Validation

Branch creation must reject:

- missing parent folder;
- missing parent `_branch.md` or `_state.md`;
- parent paths inside `docarchive/`;
- missing `branch_source`;
- empty child question;
- child path collision.

### 7. Make Recursive Branching Explicit

Nested branch parents are allowed.

The protocol should compute:

```text
parent_inquiry = direct parent
root_inquiry = top-most inquiry
branch_depth = parent depth + 1
```

## Critique Verdict

The reviewed finding is a good idea and should proceed, but not as-is. It needs a pre-implementation refinement pass focused on the branch protocol contract.

Do not start by editing MVL/MVL+ directly. Start by writing `branch_inquiry.md` with the refinements above.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.

**Overall: PROCEED** (the core proposal survives; implementation should wait for the stricter branch protocol contract)
