# Sensemaking: Branch Protocol Finding Review

## Stable Interpretation

The reviewed finding is a good architectural direction.

It correctly sees that branching is an inquiry lifecycle operation, not a cognitive discipline. Therefore, branch creation belongs in a protocol, and MVL/MVL+ should remain pipeline runners.

The finding's weakness is not the idea. The weakness is that it leaves too many operational decisions implicit. If implemented literally, different files could interpret branch paths, ids, parent indexes, and branch-set behavior differently.

## Core Distinction

The design must distinguish four operations:

1. **Create branch:** make a child inquiry folder and lineage metadata.
2. **Run branch:** execute MVL or MVL+ inside that child folder.
3. **Refresh branch status:** update parent index from child states.
4. **Merge branch results:** synthesize completed child findings back into a parent or higher-level finding.

The reviewed finding mostly covers 1 and 2, touches 3, and correctly defers 4.

The refinement is to make 3 explicit as a separate operation. Otherwise `CONCLUDE` becomes tempted to update parent `_branches.md`, and that creates a future parallel-write problem.

## Most Important Refinement

`_branches.md` should be treated as a parent-side index/manifest, not as the authoritative state of child branches.

Authoritative state lives in each child `_state.md`.

Parent `_branches.md` can be created at branch creation time and refreshed later. In manual single-branch mode, `CONCLUDE` may print enough information for the parent index to be updated, but it should not be required for child completion.

This makes the design scale:

- single branch mode works now;
- parallel branch children do not write to the same parent file;
- a future branch-status-refresh or merge protocol can aggregate child state safely.

## Canonical-Path Problem

The finding says "mirror or make canonical" for protocol copies. That is too weak.

The implementation should choose one canonical protocol path. Mirroring full text invites drift.

Recommended canonical path:

```text
homegrown/protocols/branch_inquiry.md
```

Then MVL/MVL+ should explicitly load that path. If `.codex/skills/protocols/branch_inquiry.md` exists, it should be a short forwarding note, not an independent copy.

## Branch Id Model

The finding should define identifiers more tightly:

- `branch_id`: unique child inquiry id, usually timestamp plus slug.
- `branch_set_id`: only present when a coordinated set exists, or set to `none` for single branches.
- `branch_mode`: `single` or `set-member`.
- `root_inquiry`: top-most inquiry in the lineage.
- `parent_inquiry`: direct parent.
- `branch_depth`: parent depth plus one.

Using `single` as a branch-set id is too vague because many single branches would share the same value. Using the branch id as the branch-set id is workable, but it blurs the difference between branch identity and set identity. Better: `branch_set_id: none` for v1 single branches.

## Source Anchor Model

`branch_source` must be more than "finding.md".

Minimum source fields:

- `source_file`;
- `source_heading` or `source_section`;
- short quoted/source summary;
- optional line number when available.

This matters because branch questions usually come from an exact critique failure, finding bullet, or unresolved ambiguity. Weak source anchors will make branch graphs harder to diagnose later.

## Multihead Scalability

The finding is right to defer the scheduler.

The minimal future-proofing should be:

- reserve `branch_set_id`;
- reserve `branch_mode`;
- keep child writes local;
- make parent index refresh a separate operation;
- let navigation/meta-loop choose or coordinate branch sets later.

That is enough. Anything more would overbuild v1.

## Sensemaking Verdict

Proceed with the idea, but refine the implementation contract before editing the runner files.

The finding should be treated as a good direction plus a draft edit list, not as a complete implementation spec.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.

**Overall: PROCEED** (the meaning is stable: good architecture, incomplete operational contract)
