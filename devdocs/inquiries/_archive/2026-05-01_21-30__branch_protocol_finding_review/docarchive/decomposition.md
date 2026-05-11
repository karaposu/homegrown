# Decomposition: Branch Protocol Finding Review

## Refinement Areas

### 1. Canonical Protocol Location

Problem:

The finding allows either mirrored or canonical protocol copies.

Refinement:

Choose a canonical source now.

Recommended:

```text
homegrown/protocols/branch_inquiry.md
```

Loop skills should load that path directly. Any `.codex/skills/protocols/branch_inquiry.md` file should forward to the canonical file instead of duplicating full content.

Dependency:

This decision should happen before writing the branch protocol.

### 2. Branch Input Grammar

Problem:

The finding names `branch_from`, `branch_source`, and `question`, but does not define parse rules.

Refinement:

Support field-block input first:

```text
branch_from: devdocs/inquiries/<parent>/
branch_source: finding.md > Finding Summary > "quoted bullet"
question: <child question>
```

Treat CLI-style `--branch-from` as future syntax unless the actual runner has argument parsing.

Dependency:

This should be in `branch_inquiry.md`, not duplicated in MVL/MVL+.

### 3. Parent Validation

Problem:

The finding does not define valid parent paths.

Refinement:

Branch creation should require:

- parent path exists;
- parent path contains `_branch.md` and `_state.md`;
- parent is not inside `docarchive/`;
- parent status may be `ACTIVE` or `COMPLETE`;
- parent flow type is known or inferable;
- parent path can be root or nested branch.

Dependency:

This belongs in `branch_inquiry.md`.

### 4. Child Path and Identifier Model

Problem:

`Branch Set ID` is useful but underspecified.

Refinement:

Use:

```text
branch_id = <YYYY-MM-DD_HH-MM__slug>
branch_set_id = none for single branch v1
branch_mode = single
```

Future multihead:

```text
branch_set_id = <YYYY-MM-DD_HH-MM__set_slug>
branch_mode = set-member
```

Child path:

```text
[parent_path]/branches/[branch_id]/
```

Dependency:

This belongs in branch protocol and parent `_branches.md` schema.

### 5. Source Anchor Format

Problem:

Weak `branch_source` values will make future diagnosis hard.

Refinement:

Branch metadata should split source into fields:

```md
Source File: finding.md
Source Section: Finding Summary
Source Anchor: "quoted bullet or short exact source phrase"
Source Lines: optional
```

The input can still accept one `branch_source` string, but the protocol should normalize it into structured fields when possible.

Dependency:

This belongs in child `_branch.md` and parent `_branches.md`.

### 6. Parent Index Ownership

Problem:

The reviewed finding allows `CONCLUDE` to update parent `_branches.md` for single branches. That is convenient but can become a pattern that breaks parallel branch sets.

Refinement:

Define ownership:

- branch protocol creates/appends parent `_branches.md` at creation;
- child runner writes child state only;
- `CONCLUDE` may print a parent-update recommendation;
- a future `branch_status_refresh` or merge protocol updates parent status from child folders.

For v1, manual parent update can be allowed, but not required for child completion.

Dependency:

This affects `branch_inquiry.md`, `CONCLUDE`, and future merge/refresh protocol.

### 7. Runner Path Changes

Problem:

The finding correctly names `[folder_name]` as a blocker.

Refinement:

Use two variables:

```text
inquiry_path = full path to folder
inquiry_id = basename only, for display
```

Every file operation must use `inquiry_path`.

Dependency:

This affects MVL and MVL+ after branch protocol exists.

### 8. Navigation and Meta-loop Integration

Problem:

The finding says future multihead is deferred, but does not identify the coordination surface.

Refinement:

Add only references, not implementation:

- navigation should read `_branches.md` when present;
- meta-loop should treat branch creation as an explicit selected movement;
- merge remains navigation-triggered when multiple branches complete.

Dependency:

Can be deferred until branch mode works.

## Dependency Order

1. Decide canonical protocol path.
2. Write `branch_inquiry.md` with input grammar, validation, id model, source anchor model, and parent index schema.
3. Update MVL/MVL+ to use `inquiry_path` and call/follow branch protocol.
4. Add `Flow-type: classic` to MVL.
5. Update CONCLUDE/RESUME for nested paths and branch pointers, but avoid making CONCLUDE the parent-index owner.
6. Use branch mode on one small real inquiry.
7. Only then consider navigation/meta-loop branch discovery refinements.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.

**Overall: PROCEED** (the refinement structure is implementable and resolves the target finding's under-specified parts)
