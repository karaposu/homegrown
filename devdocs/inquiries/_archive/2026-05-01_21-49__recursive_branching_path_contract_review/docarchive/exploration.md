# Exploration: Recursive Branching Path Contract Review

## Territory

The user is asking whether the branch design supports many-layer branching and whether replacing `devdocs/inquiries/[folder_name]/...` assumptions needs extra care.

## Signals From `branch_inquiry.md`

`homegrown/protocols/branch_inquiry.md` already supports recursive branches in principle:

- `branch_from` may be a root inquiry or another branch inquiry.
- Parent paths may be nested.
- `root_path` is inherited from `ROOT_INQUIRY` if present.
- `branch_depth` is computed from parent `Branch Depth`.
- child path is `[parent_path]/branches/[branch_id]/`.

This means the intended structure can recurse:

```text
devdocs/inquiries/root/
  branches/child_a/
    branches/grandchild_b/
      branches/great_grandchild_c/
```

## Signals From Current MVL/MVL+

Current MVL and MVL+ still assume a top-level folder name:

```text
devdocs/inquiries/[folder_name]/_branch.md
devdocs/inquiries/[folder_name]/[output_file]
```

That assumption works for root inquiries but fails for nested branches.

The immediate risk is path reconstruction:

```text
inquiry_id = basename(inquiry_path)
devdocs/inquiries/[inquiry_id]/
```

For a nested branch, that would incorrectly point to a non-existent or wrong root-level folder.

## Signals From CONCLUDE/RESUME

`CONCLUDE` and `RESUME` are conceptually folder-path based, but their examples still use:

```text
devdocs/inquiries/[name]/
```

They need the same rule: accept an `inquiry_path` as an opaque folder path and never rebuild it from basename.

## Physical Depth Limit

The local workspace reports:

```text
PATH_MAX = 1024
```

So recursive branch depth is not unlimited in practice.

If branch ids are long timestamp+slug names, deep nesting will eventually hit path-length limits. Even before that, human readability will degrade.

## Operational Depth Limit

The more important limit is cognitive and navigational:

- depth 1 to 3 is likely readable;
- depth 4 to 5 may still work but needs clear root/parent metadata;
- beyond that, path length and comprehension both become real risks.

The protocol can support arbitrary depth structurally, but the system should warn or require explicit confirmation beyond a configured depth.

## Exploration Verdict

The branch model can support many-layer branching if every runner treats `inquiry_path` as the source of truth.

The replacement rule must be strict:

```text
Do not replace [folder_name] with [inquiry_id].
Replace file-operation paths with [inquiry_path].
Use [inquiry_id] only for display.
```

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.

**Overall: PROCEED** (the recursive model exists, but the path replacement rule needs explicit safeguards)
