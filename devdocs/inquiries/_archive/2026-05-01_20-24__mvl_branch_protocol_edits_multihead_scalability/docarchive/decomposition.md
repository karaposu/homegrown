# Decomposition: MVL Branch Protocol Edits Multihead Scalability

## Edit Cluster 1: New Branch Protocol

Create:

```text
homegrown/protocols/branch_inquiry.md
```

Optionally mirror or load from:

```text
.codex/skills/protocols/branch_inquiry.md
```

This protocol defines the branch creation contract once, so MVL and MVL+ do not duplicate it.

Minimum protocol sections:

- inputs;
- parent validation;
- path selection;
- child `_branch.md` template;
- child `_state.md` template;
- parent `_branches.md` template;
- single-branch vs branch-set behavior;
- failure modes.

## Edit Cluster 2: MVL/MVL+ Branch Mode Detection

Edit both:

```text
.codex/skills/MVL/SKILL.md
.codex/skills/MVL+/SKILL.md
```

Add a step before normal `If NEW` folder creation:

- if input is a folder path, keep `RESUME`;
- else if `branch_from:` or `--branch-from` exists, use branch mode;
- else use normal root mode.

Branch mode must require:

- `branch_from`;
- `branch_source`;
- `question`.

## Edit Cluster 3: Replace Folder Name Placeholder

Replace path placeholders:

```text
[folder_name]
devdocs/inquiries/[folder_name]/
```

with:

```text
[inquiry_path]
```

Optional display-only placeholder:

```text
[inquiry_id]
```

Affected areas:

- initial print;
- discipline skill invocation;
- fallback manual command;
- structural check command;
- `_state.md` history;
- `/navigate` suggestion;
- cross-session resume examples.

## Edit Cluster 4: Root Mode State Cleanup

In MVL classic, add:

```md
## Flow-type
classic
```

MVL+ already has:

```md
## Flow-type
extended
```

This removes ambiguity for `RESUME`, `CONCLUDE`, and future branch-set coordination.

## Edit Cluster 5: Branch Metadata

In branch mode, `_branch.md` should include:

```md
## Branch Metadata
Parent Inquiry: [parent_path]
Root Inquiry: [root_path]
Branch Source: [branch_source]
Branch ID: [branch_id]
Branch Set ID: [branch_set_id or "single"]
Branch Mode: single | branch-set-child
Branch Depth: [depth]
```

`Branch Set ID` should exist now even if v1 usually sets it to `single` or the branch id. This is the smallest hook for future multihead execution.

## Edit Cluster 6: State Relationships

In branch mode, `_state.md` should include:

```md
## Relationships
- BRANCH_OF: [parent_path] (source: [branch_source])
- ROOT_INQUIRY: [root_path]
- BRANCH_SET: [branch_set_id]
- CONTINUES FROM: [parent_path] (child branch)
```

The relationship names should be stable because `RESUME`, `CONCLUDE`, navigation, and future merge can inspect them.

## Edit Cluster 7: Parent Branch Index

Create or append:

```text
[parent_path]/_branches.md
```

Suggested columns:

```md
| Branch ID | Branch Set | Mode | Source | Question | Runner | Status | Path | Finding | Merge |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
```

For v1, status can be `ACTIVE` and merge can be `not-started`.

For future multihead, all sibling rows can share the same `Branch Set`.

## Edit Cluster 8: CONCLUDE Branch Awareness

Edit:

```text
.codex/skills/protocols/conclude.md
homegrown/protocols/conclude.md
```

Needed changes:

- use `[inquiry_path]`, not `devdocs/inquiries/[name]`, in examples;
- if `_state.md` contains `BRANCH_OF`, print parent and branch-set pointers;
- for single branch mode, optionally update parent `_branches.md` status to `COMPLETE`;
- for branch-set child mode, do not directly mutate parent index during parallel execution; write child completion locally and let a coordinator refresh parent status.

## Edit Cluster 9: RESUME Branch Awareness

Edit:

```text
.codex/skills/protocols/resume.md
homegrown/protocols/resume.md
```

Needed changes:

- state that the input may be a root inquiry or nested branch inquiry;
- use `[inquiry_path]` in summaries;
- when status is `COMPLETE`, print `BRANCH_OF` and `BRANCH_SET` pointers if present.

## Edit Cluster 10: Future Branch-Set/Multihead Layer

Do not build a full parallel scheduler into MVL/MVL+ now.

Only reserve these fields now:

- `Branch Set ID`;
- `Branch Mode`;
- parent `_branches.md` `Branch Set` column;
- parent `_branches.md` `Merge` column.

Later, a `branch_set` or `multihead` protocol can create multiple child branches up front, then run them independently.

## Dependency Order

1. Write `branch_inquiry.md`.
2. Update MVL and MVL+ to detect branch mode and use `inquiry_path`.
3. Add MVL classic `Flow-type: classic`.
4. Update `CONCLUDE`.
5. Update `RESUME`.
6. Audit discipline skills only for hard-coded top-level paths.
7. Add future branch-set protocol only after single branch mode has been used on real inquiries.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.

**Overall: PROCEED** (the edit list is complete enough to implement v1 without blocking future branch sets)
