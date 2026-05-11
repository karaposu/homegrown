# Critique: Recursive Branching Path Contract Review

## Evaluation Dimensions

| Dimension | Weight | Standard |
| --- | ---: | --- |
| Recursive correctness | 5 | Nested branches should work beyond one level. |
| Root compatibility | 5 | Existing flat root inquiries must not break. |
| Path safety | 5 | No basename re-rooting or accidental path reconstruction. |
| Human navigability | 4 | Deep branch trees should remain understandable. |
| Implementation simplicity | 4 | Runner edits should stay mechanical and testable. |
| Future scalability | 4 | Multihead and merge should not be blocked. |

## Prosecution

The current plan can fail if implementers treat `folder_name` as "a path that may contain slashes." That would preserve old wording while hiding a semantic change.

The plan can also fail if any runner derives parent paths from string slicing. For a nested branch, removing the last path segment reaches `branches/`, not the parent inquiry folder.

The branch protocol currently supports recursion, but it does not yet warn about excessive depth or path length. On this machine, `PATH_MAX` is 1024, so long branch ids plus nested `branches/` segments can eventually fail.

## Defense

The branch protocol already contains the important recursive pieces:

- parent may itself be a branch;
- root is inherited through `ROOT_INQUIRY`;
- depth is inherited through `Branch Depth`;
- child path nests under direct parent;
- `inquiry_path` is returned to the runner.

These are the right primitives. The design does not need a different folder layout to support many-layer branching.

## Collision

Defense wins on the recursive model.

Prosecution wins on safeguards. The model supports recursion, but the runner edit must be strict and the branch protocol should add depth/path preflight before being used heavily.

## Verdict

Proceed with recursive branching.

Refine the implementation plan before patching MVL/MVL+:

1. Add depth warning policy to `branch_inquiry.md`.
2. Add path length preflight to `branch_inquiry.md`.
3. Replace top-level path assumptions with `inquiry_path`, not `inquiry_id`.
4. Use metadata for parent/root/depth lookup.
5. Test root, depth-1 branch, and depth-2 branch before trusting deeper branching.

## Concrete Safety Rules

### Rule 1: File Operations Use Full Paths

All file operations must use:

```text
[inquiry_path]/...
```

not:

```text
devdocs/inquiries/[inquiry_id]/...
```

### Rule 2: IDs Do Not Build Paths

`inquiry_id` is display-only after creation.

### Rule 3: Only Creators Build Paths

Root creation builds:

```text
devdocs/inquiries/[inquiry_id]/
```

Branch creation builds:

```text
[parent_path]/branches/[branch_id]/
```

After creation, runners consume the returned path.

### Rule 4: Lineage Comes From Metadata

Use:

```text
Parent Inquiry
Root Inquiry
Branch Depth
BRANCH_OF
ROOT_INQUIRY
```

Do not infer lineage by chopping path strings.

### Rule 5: Deep Nesting Is Allowed But Watched

Recommended policy:

```text
depth 1-3: normal
depth 4-5: warn
depth 6+: require explicit confirmation or recommend new root inquiry
```

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.

**Overall: PROCEED** (recursive branching is viable if the path contract is tightened before runner edits)
