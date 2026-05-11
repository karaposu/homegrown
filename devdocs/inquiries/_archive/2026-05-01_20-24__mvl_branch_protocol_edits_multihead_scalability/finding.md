---
status: active
refines: devdocs/inquiries/2026-05-01_19-17__mvl_branching_folder_structure/finding.md
---
# Finding: MVL Branch Protocol Edits Multihead Scalability

## Question

What needs to change in the MVL and MVL+ loop skills to support explicit branch inquiries now while keeping the design scalable for future multihead and parallel branch execution?

## Finding Summary

- Branching should be a new shared protocol, not logic duplicated inside MVL and MVL+.
- The new protocol should be `homegrown/protocols/branch_inquiry.md`, with a mirrored or canonical copy available to `.codex/skills/protocols/` if loop skills load protocols from there.
- MVL and MVL+ should detect branch mode, call/follow the branch protocol, then run their existing pipeline against a full `inquiry_path`.
- The biggest loop edit is replacing `[folder_name]` assumptions with `[inquiry_path]`.
- Add `Branch Set ID` and `Branch Mode` now, even before full multihead execution exists.
- Do not build parallel scheduling or merge into v1.
- For future parallelism, child branches should write only to their own folders. Parent index updates should be coordinator-owned for branch sets.

## Finding

### 1. Branching Is A Protocol

Branching is not a new MVL discipline. It is an inquiry lifecycle operation: create a child inquiry, anchor it to a parent source, record lineage, update discovery metadata, and then let a runner execute a normal cognitive pipeline.

That means the branch creation contract should live in a shared protocol:

```text
homegrown/protocols/branch_inquiry.md
```

If the runnable skills load from `.codex/skills/protocols/`, either mirror the protocol there or make one path canonical and update the runners to load that canonical path.

MVL and MVL+ should not each define their own branch folder rules. They should only detect branch mode and pass the selected flow type.

### 2. MVL/MVL+ Need Branch Mode Detection

Edit both:

```text
.codex/skills/MVL/SKILL.md
.codex/skills/MVL+/SKILL.md
```

Add detection before normal `If NEW` folder creation:

```text
If input is a folder path -> RESUME.
Else if input includes branch_from or --branch-from -> BRANCH NEW.
Else -> ROOT NEW.
```

Branch mode requires:

```text
branch_from
branch_source
question
```

Root mode remains unchanged:

```text
devdocs/inquiries/<YYYY-MM-DD_HH-MM__slug>/
```

Branch mode creates:

```text
<parent_path>/branches/<YYYY-MM-DD_HH-MM__slug>/
```

### 3. Replace `[folder_name]` With `[inquiry_path]`

The current loop files assume:

```text
devdocs/inquiries/[folder_name]/
```

That breaks for nested branches.

Use:

```text
[inquiry_path]
```

for all file operations, and optionally:

```text
[inquiry_id]
```

for display.

Update these areas in both loop skills:

- initial created-path print;
- discipline skill invocation;
- fallback manual command;
- structural check command;
- `_state.md` history;
- `/navigate` suggestion;
- cross-session resume examples;
- any `devdocs/inquiries/[folder_name]/...` path examples.

### 4. Add Branch Metadata To `_branch.md`

For branch mode, append:

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

`Branch Set ID` is the small hook that makes future multihead grouping possible without changing the child inquiry format later.

### 5. Add Stable Relationships To `_state.md`

For branch mode, add:

```md
## Relationships
- BRANCH_OF: [parent_path] (source: [branch_source])
- ROOT_INQUIRY: [root_path]
- BRANCH_SET: [branch_set_id]
- CONTINUES FROM: [parent_path] (child branch)
```

For MVL classic root mode, also add:

```md
## Flow-type
classic
```

MVL+ already has `Flow-type: extended`.

### 6. Create Parent `_branches.md`

The branch protocol should create or update:

```text
[parent_path]/_branches.md
```

Recommended table:

```md
| Branch ID | Branch Set | Mode | Source | Question | Runner | Status | Path | Finding | Merge |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
```

For single branch v1:

```text
Branch Set = single or same as Branch ID
Mode = single
Status = ACTIVE
Merge = not-started
```

For future multihead:

```text
Branch Set = shared id across sibling branches
Mode = branch-set-child
```

### 7. Update CONCLUDE

Edit both protocol copies if both remain active:

```text
.codex/skills/protocols/conclude.md
homegrown/protocols/conclude.md
```

Needed changes:

- use `[inquiry_path]` in examples instead of `devdocs/inquiries/[name]`;
- when `_state.md` has `BRANCH_OF`, print the parent pointer and branch-set pointer;
- for single branch mode, optionally update parent `_branches.md` row to `COMPLETE` with the child `finding.md`;
- for branch-set child mode, do not rely on every child updating the parent index during parallel execution.

The last point matters. Parallel child branches should not all write to the same parent file. A later coordinator, branch-set refresh, or merge protocol should update parent summaries.

### 8. Update RESUME

Edit both protocol copies if both remain active:

```text
.codex/skills/protocols/resume.md
homegrown/protocols/resume.md
```

Needed changes:

- say the input may be a root inquiry path or nested branch inquiry path;
- use `[inquiry_path]` in printed summaries;
- if a completed inquiry has `BRANCH_OF`, print parent and branch-set pointers.

### 9. Do Not Edit The Discipline Specs First

The discipline wrappers already save beside the input path when the input is a file path. If MVL/MVL+ pass:

```text
[inquiry_path]/_branch.md
```

then the discipline outputs should land in the branch folder.

Only audit discipline specs for hard-coded `devdocs/inquiries/<top-level-name>/` assumptions after the runner/protocol changes are made.

### 10. Defer Multihead Scheduler And Merge

Do not build full parallel scheduling now.

Do reserve:

- `Branch Set ID`;
- `Branch Mode`;
- `_branches.md` `Branch Set` column;
- `_branches.md` `Merge` column.

Future branch-set execution can then:

1. create several child branches up front;
2. give them the same `Branch Set ID`;
3. run each child independently;
4. aggregate completed findings later;
5. merge only through a separate merge protocol.

## Next Actions

### MUST

- **What:** Create `homegrown/protocols/branch_inquiry.md`.
  **Who:** Protocol layer.
  **Gate:** Before editing MVL/MVL+ branch mode.
  **Why:** Prevents duplicated branch semantics across loop runners.

- **What:** Update MVL and MVL+ to use `inquiry_path` and detect branch mode.
  **Who:** `.codex/skills/MVL/SKILL.md` and `.codex/skills/MVL+/SKILL.md`.
  **Gate:** After `branch_inquiry.md` exists.
  **Why:** Enables useful branch runs now.

- **What:** Update `CONCLUDE` and `RESUME` to be branch-aware.
  **Who:** `.codex/skills/protocols/` and `homegrown/protocols/` copies, unless one path becomes canonical.
  **Gate:** Before using branch mode for real work.
  **Why:** Prevents branch inquiries from being created but not cleanly resumed or completed.

### DEFERRED

- **What:** Build a multihead scheduler.
  **Gate:** After single branch mode has been used on real inquiries and at least one need for sibling branch comparison appears.
  **Why (if revived):** Runs multiple child inquiries under one branch set.

- **What:** Build merge protocol.
  **Gate:** After completed branch findings need integration back into parent conclusions.
  **Why (if revived):** Keeps branch creation separate from synthesis.

## Reasoning

Putting branch logic directly into MVL and MVL+ was rejected because it duplicates shared lifecycle rules. Any future change to branch metadata, parent indexes, or parallel behavior would have to be edited in multiple runners.

Keeping all branches flat with only relationship metadata was rejected because it does not solve the user's visible folder-branch problem.

Building full multihead scheduling now was rejected because it overloads v1. The immediate need is explicit single-branch creation. The scalable part is not a scheduler; it is stable metadata that a future scheduler can use.

The parent index update policy was refined. It is acceptable for single manual branches to update `_branches.md` on conclusion, but future parallel branch-set children should not all mutate the same parent index. Parent summaries should be refreshed by a coordinator or merge-like step.

## Open Questions

### Monitoring

After the first three real branch inquiries, check whether `_branches.md` is enough for navigation or whether a global branch registry is needed.

### Refinement Triggers

If two or more branches are launched from the same parent source, revive the branch-set protocol design.

If completed child findings start needing integration into parent findings, create a separate merge protocol.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.
