---
status: active
reviews: devdocs/inquiries/2026-05-01_20-24__mvl_branch_protocol_edits_multihead_scalability/finding.md
refines: devdocs/inquiries/2026-05-01_19-17__mvl_branching_folder_structure/finding.md
---
# Finding: Branch Protocol Finding Review

## Question

Is `devdocs/inquiries/2026-05-01_20-24__mvl_branch_protocol_edits_multihead_scalability/finding.md` a good implementation direction for MVL/MVL+ branching, and what should be refined before implementation?

## Finding Summary

- The reviewed finding is a good idea and should proceed.
- Its core architecture is correct: branching should be a shared protocol, while MVL and MVL+ remain pipeline runners.
- The finding is not implementation-ready as written because several operational contracts are underspecified.
- The main refinement is to write a stricter `branch_inquiry.md` before editing MVL/MVL+.
- Parent `_branches.md` should be treated as an index that can be refreshed, not as the authoritative child state.
- `CONCLUDE` should not become the general parent-index writer, because future parallel branches would race on the same parent file.
- Multihead scheduling and merge should remain deferred, but branch metadata should reserve the fields needed for them.

## Finding

The reviewed finding's core direction is right.

Branching is not a new cognitive discipline. It is an inquiry lifecycle operation: create a child inquiry, record parent lineage, anchor it to a specific source, and then let a normal MVL or MVL+ runner execute inside the child folder.

Earlier branch inquiries `2026-05-01_19-17__mvl_branching_folder_structure` and `2026-05-01_20-24__mvl_branch_protocol_edits_multihead_scalability` are now historical precursors. They established the physical branch-folder idea, explicit branch mode, `_branches.md` discoverability, `inquiry_path` replacement, and future branch-set/multihead hooks. Their active substance is preserved by the stricter `branch_inquiry.md` contract and the later recursive path review, while outdated implementation details such as editing `.codex/skills/...` should not remain active guidance.

That means branching belongs in a shared protocol, not duplicated inside `.codex/skills/MVL/SKILL.md` and `.codex/skills/MVL+/SKILL.md`.

The finding also correctly identifies the main mechanical blocker: the loop skills currently use `[folder_name]` as if every inquiry lives directly under `devdocs/inquiries/`. Nested branches require a full `inquiry_path`.

The finding should not be implemented directly yet. It needs a stricter branch protocol contract first.

### Required Refinements

1. Choose one canonical protocol path.

Use:

```text
homegrown/protocols/branch_inquiry.md
```

If `.codex/skills/protocols/branch_inquiry.md` exists, it should point to the canonical protocol rather than duplicate the full content.

2. Define the branch input grammar.

Use field-block input first:

```text
branch_from: devdocs/inquiries/<parent>/
branch_source: finding.md > Finding Summary > "quoted bullet"
question: <child question>
```

Treat CLI-style `--branch-from` as future syntax unless the runner has real argument parsing.

3. Store structured source anchors.

Do not store only `branch_source: finding.md`.

Store:

```md
Source File:
Source Section:
Source Anchor:
Source Lines:
```

This makes later diagnosis and merge much stronger.

4. Define identifiers clearly.

Use:

```text
branch_id = timestamp slug
branch_mode = single | set-member
branch_set_id = none for single branch v1
```

Only use a real `branch_set_id` when a coordinated branch set exists.

5. Make child state authoritative.

Child `_state.md` is the truth for whether a branch is active, complete, blocked, or failed.

Parent `_branches.md` is a discoverability index. It may be stale and refreshed later.

6. Do not make `CONCLUDE` the default parent-index writer.

`CONCLUDE` should complete the child inquiry and print parent pointers.

For single manual branches, parent index update can be an explicit convenience. For branch-set children, parent updates should be handled by a later coordinator or refresh protocol.

7. Add parent validation.

Branch creation must reject missing parent folders, parents without `_branch.md` or `_state.md`, parents inside `docarchive/`, missing source anchors, empty child questions, and child path collisions.

8. Make recursive branching explicit.

Nested branch parents should be allowed, but the protocol must compute:

```text
parent_inquiry = direct parent
root_inquiry = top-most inquiry
branch_depth = parent depth + 1
```

## What Should Proceed

Proceed with:

- `branch_inquiry.md` as the shared branch creation protocol;
- branch mode detection in MVL and MVL+;
- replacing `[folder_name]` with `[inquiry_path]`;
- nested branch folders under `[parent]/branches/[branch_id]/`;
- parent `_branches.md` as a manifest/index;
- `Flow-type: classic` for MVL root inquiries;
- branch-aware `CONCLUDE` and `RESUME` printing.

## What Should Not Proceed Yet

Do not build a multihead scheduler now.

Do not build merge now.

Do not make every branch completion mutate parent `_branches.md`.

Do not mirror full protocol text in two locations unless the project accepts drift as a maintenance cost.

## Reasoning

The previous finding survives because it puts branch creation at the right layer and preserves existing root inquiry behavior.

The previous finding needs refinement because implementation details such as id semantics, source anchors, parent index ownership, and canonical protocol location are load-bearing. If left implicit, different runs could create incompatible branch artifacts.

The strongest refined design keeps v1 small: explicit single-branch creation now, with metadata fields that future multihead execution can use later.

## Next Actions

### MUST

- **What:** Write `homegrown/protocols/branch_inquiry.md` with the stricter contract above.
  **Who:** Protocol layer.
  **Gate:** Before editing MVL/MVL+.
  **Why:** Prevents duplicated or inconsistent branch semantics.

- **What:** Update MVL/MVL+ only after the branch protocol exists.
  **Who:** `.codex/skills/MVL/SKILL.md` and `.codex/skills/MVL+/SKILL.md`.
  **Gate:** After branch protocol approval.
  **Why:** Keeps the loop skills as thin callers rather than branch-spec owners.

### DEFERRED

- **What:** Branch status refresh protocol.
  **Gate:** When parent `_branches.md` becomes stale or branch sets are introduced.
  **Why (if revived):** Aggregates child states without parallel children writing the same parent file.

- **What:** Merge protocol.
  **Gate:** When completed child findings need synthesis into a parent or higher-level finding.
  **Why (if revived):** Keeps branch creation separate from result integration.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.
