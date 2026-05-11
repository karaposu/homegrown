# Sensemaking: Recursive Branching Path Contract Review

## Stable Understanding

The current branch protocol is recursive by design.

The design supports many-layer branching because each branch can become a parent. A child branch is just another inquiry folder with `_branch.md`, `_state.md`, and its own `branches/` directory when needed.

The danger is not recursion itself. The danger is mixing up two different concepts:

- `inquiry_path`: the full path to the inquiry folder.
- `inquiry_id`: the local folder name, useful only for display or table ids.

If the runner ever takes `inquiry_id` and rebuilds `devdocs/inquiries/[inquiry_id]/`, nested branching breaks.

## Required Path Semantics

### Root Inquiry

Root inquiry:

```text
inquiry_path = devdocs/inquiries/2026-05-01_21-49__example/
inquiry_id = 2026-05-01_21-49__example
parent_path = none
root_path = inquiry_path
branch_depth = 0
```

### First-Level Branch

First-level branch:

```text
inquiry_path = devdocs/inquiries/root/branches/child/
inquiry_id = child
parent_path = devdocs/inquiries/root/
root_path = devdocs/inquiries/root/
branch_depth = 1
```

### Second-Level Branch

Second-level branch:

```text
inquiry_path = devdocs/inquiries/root/branches/child/branches/grandchild/
inquiry_id = grandchild
parent_path = devdocs/inquiries/root/branches/child/
root_path = devdocs/inquiries/root/
branch_depth = 2
```

The runner should never infer `parent_path` by string slicing unless it is inside the branch creation protocol. Once the inquiry exists, `_branch.md` and `_state.md` are the source of truth for parent/root/depth.

## Practical Depth Answer

How deep can it go?

Structurally, any depth is possible:

```text
root -> branch -> branch -> branch -> ...
```

Practically, depth is limited by:

- filesystem path length;
- long timestamp+slug folder names;
- human ability to navigate the tree;
- parent index readability;
- navigation and meta-loop discovery logic.

The local filesystem reports `PATH_MAX = 1024`. With long branch ids, the practical limit may arrive sooner than expected.

## Recommended Depth Policy

Do not hard-block depth early.

Add soft policy:

- depth 0: root inquiry;
- depth 1-3: normal;
- depth 4-5: warn and require explicit source/goal clarity;
- depth 6+: strongly recommend creating a new root inquiry with `RELATED` / `CONTINUES FROM` unless the user explicitly needs physical nesting.

This keeps the protocol flexible while avoiding unreadable paths.

## Replacement Principle

The replacement must not be:

```text
[folder_name] -> [inquiry_id]
```

The replacement must be:

```text
devdocs/inquiries/[folder_name]/... -> [inquiry_path]/...
```

And for root creation only:

```text
inquiry_path = devdocs/inquiries/[inquiry_id]/
```

That distinction is the whole safety rule.

## Sensemaking Verdict

Yes, the design supports many-layer branching, but only under a strict path-source-of-truth rule:

Every file operation uses `inquiry_path`.

Every display-only name uses `inquiry_id`.

Every lineage lookup uses metadata from `_branch.md` or `_state.md`, not path reconstruction.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.

**Overall: PROCEED** (the core answer is stable and shows the exact replacement principle)
