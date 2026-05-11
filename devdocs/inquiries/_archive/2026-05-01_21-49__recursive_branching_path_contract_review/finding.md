---
status: active
refines: devdocs/inquiries/2026-05-01_21-30__branch_protocol_finding_review/finding.md
---
# Finding: Recursive Branching Path Contract Review

## Question

Will the planned MVL/MVL+ branch support handle many-layer branching safely, and how should `[folder_name]` path assumptions be replaced without breaking root inquiries or nested branch inquiries?

## Finding Summary

- Yes, the branch design can support many-layer branching.
- The current `homegrown/protocols/branch_inquiry.md` already allows a branch to become a parent branch.
- The practical depth is not infinite: this workspace reports `PATH_MAX = 1024`, and deeply nested timestamp-slug paths will eventually become too long or hard to read.
- The dangerous edit is replacing `[folder_name]` with another name-like value. The correct replacement is full-path based: use `inquiry_path` for all file operations.
- `inquiry_id` must be display-only after creation.
- Parent/root/depth should come from metadata, not from path slicing.
- Before patching MVL/MVL+, add two safeguards to `branch_inquiry.md`: depth warning and path length preflight.

## Finding

The design supports many-layer branching structurally.

The recursive folder model is:

```text
devdocs/inquiries/root/
  branches/child/
    branches/grandchild/
      branches/great_grandchild/
```

This works because each child branch is a full inquiry folder with its own `_branch.md`, `_state.md`, and possible `branches/` directory.

The current branch protocol already has the core recursion fields:

```text
Parent Inquiry
Root Inquiry
Branch Depth
BRANCH_OF
ROOT_INQUIRY
```

So the answer is not "we need a different folder design." The answer is "we need strict path discipline."

## The Safe Replacement Rule

Do not replace:

```text
[folder_name]
```

with:

```text
[inquiry_id]
```

That would break nested branches because a child branch id is only the local folder name.

Replace file paths like:

```text
devdocs/inquiries/[folder_name]/_branch.md
devdocs/inquiries/[folder_name]/[output_file]
```

with:

```text
[inquiry_path]/_branch.md
[inquiry_path]/[output_file]
```

Use:

```text
inquiry_path
```

for all reading, writing, structural checks, resume, conclude, navigation, and archive operations.

Use:

```text
inquiry_id
```

only for display labels, table ids, and headings.

## Where Paths May Be Built

Only two places should construct inquiry paths.

Root creation builds:

```text
inquiry_id = <timestamp__slug>
inquiry_path = devdocs/inquiries/[inquiry_id]/
```

Branch creation builds:

```text
branch_id = <timestamp__slug>
inquiry_path = [parent_path]/branches/[branch_id]/
```

After creation, MVL, MVL+, CONCLUDE, RESUME, and Navigation should consume `inquiry_path` as an opaque folder path. They should not reconstruct it from `inquiry_id`.

## Lineage Must Come From Metadata

Do not infer parent/root/depth by chopping strings.

For example, this is unsafe:

```text
parent = dirname(inquiry_path)
```

For a branch path, that gives the `branches/` directory, not the parent inquiry.

Use metadata instead:

```text
Parent Inquiry
Root Inquiry
Branch Depth
BRANCH_OF
ROOT_INQUIRY
```

## Depth Policy

The system can support many layers structurally, but the practical depth should be watched.

Recommended policy:

```text
depth 0: root inquiry
depth 1-3: normal branch nesting
depth 4-5: warn and require clear source/goal
depth 6+: require explicit confirmation or recommend a new root inquiry with relationships
```

This is not a hard cap. It is a safety policy to prevent unreadable paths and accidental over-nesting.

## Path Length Policy

Before creating a branch, `branch_inquiry.md` should estimate the final child path length.

If the path is near the filesystem limit, the protocol should shorten the slug or ask the user to approve a shorter slug.

The local workspace reports:

```text
PATH_MAX = 1024
```

So long nested paths are a real constraint.

## Required Refinement Before Runner Edits

Before updating MVL/MVL+, refine `homegrown/protocols/branch_inquiry.md` with:

1. depth warning policy;
2. path length preflight;
3. explicit warning that `inquiry_id` must never rebuild root paths;
4. explicit warning that parent/root/depth lookup must use metadata.

Then patch MVL/MVL+, CONCLUDE, and RESUME using `inquiry_path`.

## Testing Gate

Do not trust the branch runner after only one root test.

Test in this order:

1. root inquiry still writes to `devdocs/inquiries/<id>/`;
2. first-level branch writes to `root/branches/child/`;
3. second-level branch writes to `root/branches/child/branches/grandchild/`;
4. CONCLUDE archives outputs inside the active branch folder, not the root;
5. RESUME accepts the nested branch path directly.

## Reasoning

Unlimited physical nesting was rejected as too careless because path length and readability eventually fail.

A hard depth cap was rejected as too rigid because some investigations need deeper lineage.

The surviving design is recursive nesting with soft warnings and path-length checks.

The most important implementation rule is simple: file operations use `inquiry_path`; display uses `inquiry_id`.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.
