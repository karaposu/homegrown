# Sensemaking: MVL Branch Protocol Edits Multihead Scalability

## Stable Understanding

Branching is not a new cognitive discipline. It is a lifecycle/routing operation around inquiries.

Therefore, branching should be a protocol, not a new step inside the MVL or MVL+ cognitive pipeline.

## Correct Boundary

### Branch Protocol Owns

The branch protocol should own:

- parsing the branch contract;
- validating the parent path;
- requiring a branch source;
- deciding the child path;
- creating child `_branch.md`;
- creating child `_state.md`;
- adding branch lineage metadata;
- creating or appending parent `_branches.md`;
- recording whether the branch is single, branch-set child, or future multihead member.

### MVL/MVL+ Own

The loop skills should own:

- detecting whether the input is root mode, branch mode, or resume mode;
- loading the branch protocol when branch mode is present;
- selecting the pipeline (`classic` for MVL, `extended` for MVL+);
- running the disciplines in order;
- passing the path to the child inquiry folder.

### CONCLUDE Owns

`CONCLUDE` should own:

- writing child `finding.md`;
- archiving child discipline files;
- marking the child inquiry complete;
- printing parent pointers.

It should not own merge.

For single manual branch mode, it may update the parent `_branches.md` row as a convenience. For future parallel branch sets, parent status updates should be done by a coordinator or branch-set refresh step to avoid concurrent writes.

### RESUME Owns

`RESUME` should own:

- resuming any inquiry path, including nested child branch paths;
- printing branch parent pointers when already complete or pipeline-complete.

## Key Naming Shift

The current `[folder_name]` placeholder is too narrow. It assumes every inquiry is a single top-level folder name.

The runner needs two separate concepts:

- `inquiry_path`: full relative path to the inquiry folder;
- `inquiry_id`: local folder name or stable id for display.

Root inquiry example:

```text
inquiry_path = devdocs/inquiries/2026-05-01_20-24__example/
inquiry_id = 2026-05-01_20-24__example
```

Branch inquiry example:

```text
inquiry_path = devdocs/inquiries/parent/branches/2026-05-01_20-24__child/
inquiry_id = 2026-05-01_20-24__child
```

## Multihead Meaning

A branch is one child inquiry.

A branch set is a group of sibling branches created from the same parent source to explore alternatives.

Parallelism is an execution strategy over branch sets. It should not change the child inquiry contract.

This gives a scalable model:

- v1 uses one branch at a time;
- later multihead creates several child branches with a shared `branch_set_id`;
- parallel workers write only to their child folders;
- a later merge or branch-set refresh reads completed child folders and updates parent summaries.

## Sensemaking Conclusion

The minimum useful design is:

1. create `branch_inquiry.md` as the shared creation protocol;
2. update MVL and MVL+ to call/follow it;
3. replace `[folder_name]` with `[inquiry_path]`;
4. add branch lineage fields that include a future `branch_set_id`;
5. keep merge and automatic branch spawning separate.

**Overall: PROCEED** (the boundary is stable and separates protocol creation, loop execution, and future coordination)
