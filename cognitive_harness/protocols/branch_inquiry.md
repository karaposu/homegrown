> **Loading note.** This file is loaded by MVL, MVL+, meta-loop, or a human before creating a child inquiry from an existing inquiry. Read it in full before BRANCH_INQUIRY is used. Every section below - input contract, validation, path creation, branch metadata, parent index, handoff, and failure modes - is referenced by the procedure. Do not summarize or partial-load.

---

# BRANCH_INQUIRY - The Inquiry Branch Creation Protocol

BRANCH_INQUIRY is the operational protocol for creating a child inquiry under an existing parent inquiry.

BRANCH_INQUIRY does not run MVL or MVL+. It does not conclude the branch. It does not merge branch results. It does not launch parallel or multihead execution.

BRANCH_INQUIRY only creates the child inquiry folder, records lineage and source authority, initializes child state, and updates the parent branch index.

After BRANCH_INQUIRY completes, the selected runner continues normally using the returned `inquiry_path`.

---

## When to use

Use BRANCH_INQUIRY when a new MVL or MVL+ inquiry should be a child of an existing inquiry rather than a new root inquiry under `devdocs/inquiries/`.

Typical trigger forms:

```text
branch_from: devdocs/inquiries/<parent>/
branch_source: finding.md > Finding Summary > "quoted bullet or source phrase"
question: <child question>
```

Future CLI-style form:

```text
MVL+ --branch-from devdocs/inquiries/<parent>/ --branch-source "finding.md: <section or bullet>" "<child question>"
```

Field-block input is the canonical v1 form. CLI-style arguments may be normalized into the same fields if the runner has argument parsing. Do not require CLI parsing for v1.

Do not use BRANCH_INQUIRY for:

- ordinary root inquiries;
- resuming an existing inquiry folder;
- merging completed branches;
- comparing multiple completed branches;
- automatically spawning every interesting follow-up question;
- branch-status refresh over already-created child folders.

---

## Step 1 - Normalize the input contract

Before creating any files, normalize the request into these fields:

```text
branch_from:
branch_source:
question:
runner:
slug:
branch_mode:
branch_set_id:
goal:
optional_context:
```

Field meanings:

- `branch_from` is the direct parent inquiry folder. It may be a root inquiry or another branch inquiry.
- `branch_source` is the source anchor inside the parent that justifies this branch.
- `question` is the child inquiry question to run through MVL or MVL+.
- `runner` is `MVL` or `MVL+`. Default: `MVL+`.
- `slug` is optional. If absent, derive it from the child question.
- `branch_mode` is `single` or `set-member`. Default: `single`.
- `branch_set_id` groups multiple sibling branches when a coordinated branch set exists. Default for `single`: `none`.
- `goal` is optional. If absent, derive a practical goal from the child question.
- `optional_context` is any extra context that should be recorded in `_branch.md`.

If `question` is absent but there is trailing free text after the branch fields, use that free text as `question`.

If `runner` is omitted, use `MVL+` because branch inquiries usually need exploration and decomposition.

If `branch_mode` is `single`, set:

```text
branch_set_id: none
```

If `branch_mode` is `set-member`, `branch_set_id` is required and must be a concrete id shared by all sibling members of that branch set.

---

## Step 2 - Validate the request

Reject the branch request before creating files if any required condition fails.

### Parent validation

`branch_from` is valid only if:

- the path exists;
- the path is a directory;
- the path contains `_branch.md`;
- the path contains `_state.md`;
- the path is not inside a `docarchive/` folder;
- the path is inside `devdocs/inquiries/` unless the user explicitly gives an approved nonstandard inquiry root.

The parent may have `Status: ACTIVE` or `Status: COMPLETE`.

The parent may itself be a branch. Nested branching is allowed.

### Source validation

`branch_source` is valid only if it identifies a specific parent-source anchor.

Weak source anchors are invalid:

```text
branch_source: finding.md
branch_source: critique
branch_source: something interesting
```

Acceptable source anchors include:

```text
branch_source: finding.md > Finding Summary > "quoted bullet"
branch_source: critique.md > Candidate B > "failure mode phrase"
branch_source: docarchive/critique.md > Assembly Verdict > "quoted phrase"
branch_source: finding.md:42-47
```

If the parent source file exists, prefer reading it and preserving the closest section heading plus a short source phrase. If line numbers are available from the user's input or local inspection, record them.

### Question validation

`question` is valid only if:

- it is non-empty;
- it can be restated as one clear sentence;
- it is not merely "continue" or "look into this" without a specific object.

If the question is too vague, halt and ask the user to provide or approve a sharper child question.

### Runner validation

`runner` must be one of:

```text
MVL
MVL+
```

### Branch mode validation

`branch_mode` must be one of:

```text
single
set-member
```

`set-member` requires a non-empty `branch_set_id` other than `none`.

### Collision validation

The computed child inquiry path must not already exist.

If it exists, append a short numeric suffix to the branch id or ask the user for a different slug.

---

## Step 3 - Normalize the source anchor

Normalize `branch_source` into structured fields for storage.

Use this target shape:

```text
source_file:
source_section:
source_anchor:
source_lines:
source_raw:
```

Field meanings:

- `source_file` is the parent-relative file path, such as `finding.md` or `docarchive/critique.md`.
- `source_section` is the closest section heading or named area, if available.
- `source_anchor` is a short quoted phrase or source summary that explains the trigger.
- `source_lines` is optional and should be used only when line references are known.
- `source_raw` preserves the original `branch_source` input exactly.

If the source cannot be fully parsed, keep `source_raw` and fill any fields that can be inferred. Do not invent line numbers.

---

## Step 4 - Compute branch identity and paths

Compute:

```text
parent_path:
root_path:
branch_depth:
branch_id:
branch_set_id:
branch_mode:
inquiry_path:
inquiry_id:
```

### Parent path

Normalize `branch_from` to a relative path from repo root when possible.

Trim trailing slashes for internal comparison. Use a trailing slash only in display examples.

### Root path

If the parent `_state.md` or `_branch.md` contains `ROOT_INQUIRY`, use that value.

Otherwise, the parent is the root:

```text
root_path = parent_path
```

### Branch depth

If the parent `_branch.md` contains `Branch Depth`, parse it and set:

```text
branch_depth = parent_branch_depth + 1
```

If the parent has no branch depth, set:

```text
branch_depth = 1
```

### Depth policy

Recursive branches are allowed. A branch may itself become a parent branch.

Use this depth policy before creating the child folder:

```text
depth 1-3: normal
depth 4-5: warn in the creation summary and verify the source/goal are clear
depth 6+: require explicit user confirmation or recommend a new root inquiry linked by relationships
```

Depth policy is not a hard architectural cap. It is a safety check for path length, readability, and over-nesting.

If the user chooses a new root inquiry instead of physical nesting, do not use BRANCH_INQUIRY. Create a normal root inquiry and record relationships such as `CONTINUES FROM` or `RELATED`.

### Branch id

Use:

```text
<YYYY-MM-DD_HH-MM__slugified_child_question>
```

If `slug` was provided, use the slug after the timestamp:

```text
<YYYY-MM-DD_HH-MM__slug>
```

The branch id is the child folder name and must be unique under the parent's `branches/` directory.

### Branch set id

For v1 single branches:

```text
branch_mode = single
branch_set_id = none
```

For future coordinated branch sets:

```text
branch_mode = set-member
branch_set_id = <shared branch set id>
```

Do not use `single` as a branch set id. Do not use the child `branch_id` as the branch set id unless the user explicitly creates a one-member branch set.

### Inquiry path

Create child branches under:

```text
[parent_path]/branches/[branch_id]/
```

This full folder path is `inquiry_path`.

The local folder name is `inquiry_id`.

### Path length preflight

Before creating the child folder, estimate the final path length for:

```text
[parent_path]/branches/[branch_id]/
```

When available, use the filesystem path limit for the workspace, for example:

```text
getconf PATH_MAX .
```

If the limit cannot be checked, assume a conservative limit of 1024 characters.

Use this policy:

```text
below 80% of limit: proceed
80-90% of limit: warn and prefer a shorter slug
above 90% of limit: halt and shorten the slug before creating the folder
would exceed limit: halt; do not create the branch
```

If the path is long because of repeated nesting, recommend either a shorter slug or a new root inquiry with explicit relationships.

---

## Step 5 - Create the child inquiry folder

Create:

```text
[parent_path]/branches/[branch_id]/
```

Do not create child branches inside `docarchive/`.

Do not move or rewrite the parent inquiry.

Do not migrate old flat inquiries.

---

## Step 6 - Write child `_branch.md`

Write:

```text
[inquiry_path]/_branch.md
```

Use this structure:

```markdown
# Branch: [name]

## Question

[the child question, stated clearly in one sentence]

## Goal

[what would a good answer let the user do?]

## Scope Check

[compare the question's scope to the goal's requirements. If the question covers the goal, write: "Question covers goal." If not, explain the gap and propose a wider or sharper question.]

## Branch Metadata

Parent Inquiry: [parent_path]
Root Inquiry: [root_path]
Branch Source File: [source_file]
Branch Source Section: [source_section or "unknown"]
Branch Source Anchor: [source_anchor]
Branch Source Lines: [source_lines or "not recorded"]
Branch Source Raw: [source_raw]
Branch ID: [branch_id]
Branch Set ID: [branch_set_id]
Branch Mode: [branch_mode]
Branch Depth: [branch_depth]
Runner: [runner]

## Optional Context

[optional_context if provided; otherwise omit this section]
```

If the scope check finds that the question does not cover the goal, halt before running the cognitive pipeline and ask the user whether to use the proposed revised question.

---

## Step 7 - Write child `_state.md`

Write:

```text
[inquiry_path]/_state.md
```

If `runner` is `MVL`, use:

```markdown
# State: [name]

## Flow-type

classic

## Pipeline

S -> I -> C

## Progress

- [ ] Sensemaking
- [ ] Innovation
- [ ] Critique

## Iteration

1

## Status

ACTIVE

## Next Discipline

Sensemaking

## Relationships

- BRANCH_OF: [parent_path] (source: [source_raw])
- ROOT_INQUIRY: [root_path]
- BRANCH_SET: [branch_set_id]
- CONTINUES FROM: [parent_path] (child branch)

## History

- [date]: Created branch inquiry from [parent_path]. Source: [source_raw]. Question: [one-line summary]
```

If `runner` is `MVL+`, use:

```markdown
# State: [name]

## Flow-type

extended

## Pipeline

E -> S -> D -> I -> C

## Progress

- [ ] Exploration
- [ ] Sensemaking
- [ ] Decomposition
- [ ] Innovation
- [ ] Critique

## Iteration

1

## Status

ACTIVE

## Next Discipline

Exploration

## Relationships

- BRANCH_OF: [parent_path] (source: [source_raw])
- ROOT_INQUIRY: [root_path]
- BRANCH_SET: [branch_set_id]
- CONTINUES FROM: [parent_path] (child branch)

## History

- [date]: Created branch inquiry from [parent_path]. Source: [source_raw]. Question: [one-line summary]
```

---

## Step 8 - Create or update parent `_branches.md`

Create or update:

```text
[parent_path]/_branches.md
```

If the file does not exist, initialize it:

```markdown
# Branches

## Branch Index

| Branch ID | Branch Set | Mode | Source | Question | Runner | Status | Path | Finding | Merge |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
```

Append one row for the child branch:

```markdown
| [branch_id] | [branch_set_id] | [branch_mode] | [source_file] > [source_section] > [source_anchor] | [question] | [runner] | ACTIVE | [inquiry_path] |  | not-started |
```

Parent `_branches.md` is an index and discovery aid. It is not the authoritative state of the child branch.

The authoritative child state is:

```text
[inquiry_path]/_state.md
```

If updating parent `_branches.md` fails after the child folder was created, do not delete the child branch. Report the parent-index failure and tell the user the child branch exists but is not indexed.

---

## Step 9 - Return the handoff contract

After successful creation, return these values to the runner:

```text
inquiry_path:
inquiry_id:
runner:
flow_type:
next_discipline:
parent_path:
root_path:
branch_id:
branch_set_id:
branch_mode:
```

Then the runner continues with its normal pipeline using:

```text
[inquiry_path]/_branch.md
```

MVL/MVL+ must not use `devdocs/inquiries/[folder_name]/...` after branch creation. They must use `inquiry_path`.

---

## Ownership rules

Child `_state.md` is authoritative for child status.

Parent `_branches.md` is an index that may become stale.

BRANCH_INQUIRY owns branch creation and initial parent index insertion.

MVL/MVL+ own cognitive pipeline execution inside the child folder.

CONCLUDE owns child `finding.md`, child archive, and child status completion.

CONCLUDE should print branch parent pointers when `BRANCH_OF` exists. It may offer an explicit parent-index update for single manual branches, but child completion must not depend on mutating the parent index.

Future branch-status refresh or merge protocols own parent-level aggregation across multiple child branches.

Parallel or multihead branch children must write only to their own child folders during execution. They must not all mutate the parent `_branches.md` during conclusion.

## Path source-of-truth rules

`inquiry_path` is the source of truth for file operations.

Use `inquiry_path` for:

- reading `_branch.md`;
- reading `_state.md`;
- running discipline inputs;
- writing discipline outputs;
- structural checks;
- resume;
- conclude;
- navigation;
- archive operations.

`inquiry_id` is only a display identifier after creation.

Use `inquiry_id` for:

- headings;
- local table ids;
- short labels in conversation;
- branch ids when the local folder name is needed.

Do not rebuild a path from `inquiry_id`.

This is invalid for nested branches:

```text
inquiry_path = devdocs/inquiries/[inquiry_id]/
```

That construction is allowed only during root inquiry creation, before the inquiry exists.

Only two operations may construct inquiry paths:

```text
root creation:   inquiry_path = devdocs/inquiries/[inquiry_id]/
branch creation: inquiry_path = [parent_path]/branches/[branch_id]/
```

After creation, runners and protocols must consume the full `inquiry_path` as an opaque folder path.

Do not infer lineage by chopping path strings. For parent, root, and depth, use metadata:

```text
Parent Inquiry
Root Inquiry
Branch Depth
BRANCH_OF
ROOT_INQUIRY
```

---

## Output summary

Print a concise creation summary:

```text
Branch inquiry created: [inquiry_path]/
Runner: [runner]
Parent: [parent_path]/
Source: [source_raw]
Question: [question]
Next: [runner] [inquiry_path]/
```

Do not print the full child `_branch.md` or `_state.md` unless the user asks.

---

## Failure modes

- **Missing parent** - `branch_from` does not exist. Halt and ask for a valid parent inquiry path.
- **Invalid parent** - parent lacks `_branch.md` or `_state.md`. Halt; this is not a valid inquiry folder.
- **Docarchive parent** - parent is inside `docarchive/`. Halt; archived discipline outputs cannot own branch inquiries.
- **Vague source anchor** - `branch_source` names only a file or vague idea. Ask for a section, quoted phrase, or line range.
- **Empty question** - no child question can be extracted. Ask for the child question.
- **Runner mismatch** - runner is not `MVL` or `MVL+`. Ask for one of the supported runners.
- **Branch mode mismatch** - `set-member` has no `branch_set_id`, or `single` has a coordinated set id. Ask for corrected branch mode fields.
- **Path collision** - computed child path already exists. Generate a suffix or ask for a different slug.
- **Depth warning ignored** - branch depth is 6 or greater and no explicit user confirmation was given. Halt and ask whether to physically nest or create a related root inquiry.
- **Path too long** - computed child path is above the safe path-length threshold or would exceed the filesystem limit. Halt and shorten the slug or recommend a related root inquiry.
- **Path re-rooting** - a runner tries to rebuild `devdocs/inquiries/[inquiry_id]/` from a nested branch id. Stop and use the full `inquiry_path`.
- **Lineage by path slicing** - a runner tries to infer parent/root/depth by chopping path strings. Stop and read branch metadata instead.
- **Scope gap** - child question does not cover the stated goal. Ask whether to widen/sharpen the question before running the pipeline.
- **Parent index write failure** - child folder exists but `_branches.md` could not be updated. Report both facts; do not delete child files.
- **Accidental merge** - branch creation starts rewriting the parent finding or synthesizing results. Stop; merge is a separate protocol.
- **Automatic branch explosion** - the runner tries to create branches for every interesting finding without explicit user selection. Stop; v1 branch creation is explicit only.

---
