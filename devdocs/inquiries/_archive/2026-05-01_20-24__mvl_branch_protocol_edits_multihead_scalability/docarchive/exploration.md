# Exploration: MVL Branch Protocol Edits Multihead Scalability

## Territory

The requested change touches four surfaces:

- MVL and MVL+ inquiry creation;
- shared branch creation behavior;
- resume/conclude behavior over nested inquiry paths;
- future multihead and parallel execution.

## Existing Signals

### Loop Skills

Current MVL and MVL+ both create inquiries directly under:

```text
devdocs/inquiries/<YYYY-MM-DD_HH-MM__slugified_name>/
```

Both use `[folder_name]` in path placeholders and then expand it as:

```text
devdocs/inquiries/[folder_name]/
```

This is the main hard-coded assumption that breaks nested branch paths.

### Discipline Skills

The individual discipline wrappers save output beside the input path when the input is a file path. That means they should not need conceptual branch edits if MVL/MVL+ pass the correct nested `_branch.md` path.

### CONCLUDE

`CONCLUDE` already works on "the inquiry folder" and detects pipeline from `_state.md`. It should be able to conclude nested inquiries if given the nested path.

Needed changes are mostly wording and branch-parent status behavior.

### RESUME

`RESUME` reads `_state.md` from the inquiry folder. It should also work with nested branch paths, but its output examples assume `devdocs/inquiries/[name]/`.

### Prior Finding

The prior finding chose:

- explicit branch mode;
- child folder under parent `branches/`;
- parent `_branches.md`;
- child lineage metadata;
- no automatic branch spawning;
- no merge in v1.

## New Multihead Signal

Parallel branch execution creates a shared-write problem. If ten child branches conclude at the same time and each edits parent `_branches.md`, the design becomes race-prone.

Therefore, the scalable contract should distinguish:

- branch creation, which may write the parent index;
- branch execution, which writes only the child folder;
- branch status aggregation or merge, which updates parent-level summaries later.

## Exploration Conclusion

Branching should be a protocol, not duplicated inside MVL and MVL+. The loop skills should detect branch input, call or follow the branch protocol to create the folder/state, and then continue the same pipeline using an `inquiry_path` variable.

**Overall: PROCEED** (the territory is bounded: runner edits, protocol creation, conclude/resume path cleanup, and future parallel-safe status handling)
