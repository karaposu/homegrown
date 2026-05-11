# Decomposition: Recursive Branching Path Contract Review

## Path Concepts

### `inquiry_path`

Full path to the inquiry folder.

Examples:

```text
devdocs/inquiries/root/
devdocs/inquiries/root/branches/child/
devdocs/inquiries/root/branches/child/branches/grandchild/
```

Use for:

- reading `_branch.md`;
- reading `_state.md`;
- discipline output paths;
- structural check paths;
- CONCLUDE archive paths;
- RESUME input;
- navigation input;
- printed finding paths.

### `inquiry_id`

Local folder name only.

Examples:

```text
root
child
grandchild
```

Use for:

- display labels;
- table ids;
- local branch id;
- headings.

Never use `inquiry_id` to rebuild a file path under `devdocs/inquiries/`.

### `root_path`

Top-most root inquiry in a branch tree.

Use for:

- lineage;
- branch graph orientation;
- future merge/consolidation.

### `parent_path`

Direct parent inquiry folder.

Use for:

- `_branches.md`;
- `BRANCH_OF`;
- recursive branch depth;
- local branch source lookup.

## Safe Replacement Classes

### Class 1: File Operations

Replace:

```text
devdocs/inquiries/[folder_name]/_branch.md
devdocs/inquiries/[folder_name]/[output_file]
```

with:

```text
[inquiry_path]/_branch.md
[inquiry_path]/[output_file]
```

This applies to:

- Skill invocation args;
- fallback manual commands;
- structural checks;
- discipline save expectations;
- CONCLUDE archive commands.

### Class 2: Root Creation

Root creation still computes:

```text
inquiry_id = <timestamp__slug>
inquiry_path = devdocs/inquiries/[inquiry_id]/
```

This is the only place where `devdocs/inquiries/` should be joined with an id.

### Class 3: Branch Creation

Branch creation computes:

```text
inquiry_id = branch_id
inquiry_path = [parent_path]/branches/[branch_id]/
```

This happens only inside `branch_inquiry.md`.

MVL/MVL+ should receive the completed `inquiry_path` and then stop caring how it was built.

### Class 4: Display

Replace display examples like:

```text
SIC loop created: devdocs/inquiries/[folder_name]/
```

with:

```text
SIC loop created: [inquiry_path]/
```

or:

```text
Inquiry created: [inquiry_path]/
ID: [inquiry_id]
```

### Class 5: Relationships

Replace relationship placeholders like:

```text
CONTINUES FROM: folder_name
```

with full paths:

```text
CONTINUES FROM: [inquiry_path or parent_path]
```

For branch relationships, use the branch protocol fields.

## Unsafe Replacement Patterns

### Unsafe 1: Basename Re-rooting

Do not do:

```text
folder_name = basename(inquiry_path)
path = devdocs/inquiries/[folder_name]/
```

This breaks depth greater than zero.

### Unsafe 2: Slash-bearing Folder Name

Do not let `[folder_name]` mean "maybe a path with slashes."

That hides the distinction between id and path and will produce confusing docs.

Use `inquiry_path` instead.

### Unsafe 3: Parent Inference By Removing Last Segment

For nested branch paths, removing the last segment only gives:

```text
.../branches/
```

not the parent inquiry.

Parent should come from metadata:

```text
Parent Inquiry:
BRANCH_OF:
```

or from branch protocol state during creation.

### Unsafe 4: Depth From Counting `branches/`

Counting path segments can work accidentally, but metadata is better.

Use `Branch Depth` from parent metadata and increment it.

## Required Additions To Branch Protocol

The current branch protocol is mostly sufficient, but it should add two safeguards before MVL/MVL+ edits:

1. Add a depth warning policy:

```text
Depth 1-3: normal
Depth 4-5: warn
Depth 6+: require explicit confirmation or recommend new root inquiry
```

2. Add a path length preflight:

```text
Before creating the child folder, estimate final path length.
If near filesystem limit, shorten slug or ask user to approve a shorter slug.
```

## Dependency Order

1. Update `branch_inquiry.md` with depth warning and path length preflight.
2. Patch MVL and MVL+ to use `inquiry_path` for all file operations.
3. Patch CONCLUDE and RESUME examples/outputs to use `inquiry_path`.
4. Run one root inquiry dry check.
5. Run one first-level branch dry check.
6. Run one second-level branch dry check before trusting many-layer branching.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.

**Overall: PROCEED** (the safe replacement classes and unsafe patterns are clear)
