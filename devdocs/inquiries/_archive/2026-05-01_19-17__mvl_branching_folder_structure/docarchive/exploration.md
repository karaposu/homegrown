# Exploration: MVL Branching Folder Structure

## Prompt

The user observes that MVL/MVL+ findings often contain follow-up questions that deserve their own loops, but new loops currently appear as flat sibling folders under `devdocs/inquiries/`. They want real branching by folders, maybe by a special MVL argument now and automation later.

## Cycle 1: Existing Mechanics

### Observations

- Current inquiry folders are created as `devdocs/inquiries/<YYYY-MM-DD_HH-MM__slug>/`.
- Each inquiry folder is treated as a runtime object with `_branch.md`, `_state.md`, discipline outputs, `finding.md`, and `docarchive/`.
- `CONCLUDE` is path-oriented: it reads the inquiry folder state and discipline files, writes `finding.md`, archives outputs to `docarchive/`, and updates `_state.md`.
- `RESUME` is also path-oriented: given an inquiry folder, it detects pipeline state from that folder and continues from there.
- `loop_diagnose.md` currently creates diagnostic inquiries as flat folders under `devdocs/inquiries/`.

### Signal

The core runner model does not appear inherently limited to top-level inquiry folders. The top-level-only behavior is mostly a creation and discovery convention.

## Cycle 2: Prior Project Signals

### Observations

- Prior protocol relevance work identified `BRANCH` and `MERGE` as missing load-bearing protocols.
- Existing navigation and meta-loop notes already mention branches, multiple heads, consolidation, and merge-like behavior.
- Meta-loop rules warn that branches should not be launched unless explicitly requested.
- Earlier notes mention "branches as sub-folders" as one possible navigation integration direction.

### Signal

The concept is already aligned with the project's direction, but the system needs a concrete file contract before automation.

## Cycle 3: Folder Layout Possibilities

### Flat With Metadata Only

All inquiries remain in `devdocs/inquiries/`, and child relationships are recorded only in `_state.md`.

Strength: easiest compatibility.

Weakness: does not solve the user's visible tree problem. Parent-child structure remains hidden and easy to lose.

### Nested Branch Folder Only

Child inquiries live directly under the parent, for example:

```text
devdocs/inquiries/<parent>/branches/<child>/
```

Strength: matches the mental model of a branch.

Weakness: tools that scan only `devdocs/inquiries/*` may miss nested branches.

### Hybrid Nested Folder Plus Parent Index

Child inquiries live under the parent, and the parent receives an explicit `_branches.md` index that points to child paths, source anchors, statuses, and findings.

Strength: visible tree plus discoverability.

Weakness: requires one more maintained file.

### Global Flat Folder Plus Branch Index

Child inquiries stay flat, but the parent has an index pointing to those top-level child folders.

Strength: keeps all existing shallow scans working.

Weakness: still fails the user's folder-branch expectation.

## Emerging Best Shape

The best v1 is a hybrid:

- Root inquiries continue to be created flat under `devdocs/inquiries/`.
- Explicit branch inquiries are created under the parent at `branches/<timestamp__slug>/`.
- Each child branch remains a complete inquiry folder.
- The parent gets `_branches.md` as a discoverability and status index.
- The child `_state.md` and `_branch.md` record `BRANCH_OF`, source anchor, and root inquiry path.

## Key Risk

Nested folders without a parent index would be structurally elegant but operationally brittle. The system would gain branching while losing easy discovery.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.
