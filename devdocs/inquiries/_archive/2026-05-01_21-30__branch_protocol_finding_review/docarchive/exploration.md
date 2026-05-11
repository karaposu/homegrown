# Exploration: Branch Protocol Finding Review

## Input Under Review

`devdocs/inquiries/2026-05-01_20-24__mvl_branch_protocol_edits_multihead_scalability/finding.md`

## What The Finding Proposes

The finding proposes:

- branch creation should be a shared protocol, not duplicated inside MVL and MVL+;
- MVL/MVL+ should detect `branch_from` or `--branch-from`;
- root inquiries should remain flat under `devdocs/inquiries/`;
- branch inquiries should be nested under parent `branches/`;
- `[folder_name]` should be replaced with `[inquiry_path]`;
- branch metadata should include `Branch Set ID` and `Branch Mode`;
- parent `_branches.md` should become the discoverability index;
- `CONCLUDE` and `RESUME` should become branch-aware;
- multihead scheduling and merge should be deferred.

## Repo Signals

### MVL/MVL+ State

Both MVL and MVL+ currently assume top-level inquiry folders in several places:

```text
devdocs/inquiries/[folder_name]/
```

This affects creation, discipline invocation, structural checks, navigation suggestions, and resume examples.

### CONCLUDE/RESUME State

`CONCLUDE` and `RESUME` already reason over "the inquiry folder", so they are structurally close to path-based operation.

However, their examples and printed summaries still assume:

```text
devdocs/inquiries/[name]/
```

They do not currently understand `BRANCH_OF`, `BRANCH_SET`, parent `_branches.md`, or nested branch completion pointers.

### Discipline Wrappers

The discipline wrappers save beside the input file when given a file path. This supports the finding's claim that discipline specs should not be the first edit surface.

### Navigation/Meta-loop Signals

Navigation already names `MERGE` as the action when multiple branches complete.

Meta-loop says v1 is sequential and human-selected, and branches should only launch when the user explicitly requests multi-head/branch mode.

This supports explicit branch mode and deferring automatic multihead scheduling.

## Good Signals In The Finding

- It puts branch creation in a protocol. This is the right boundary.
- It preserves current flat root inquiries.
- It identifies `[folder_name]` as the main mechanical blocker.
- It does not let branch creation become merge.
- It reserves future multihead fields without trying to build a scheduler immediately.
- It treats parent `_branches.md` as a discoverability bridge, not as the child inquiry's source of truth.

## Refinement Signals

The finding is directionally good but under-specifies several implementation contracts:

- whether `homegrown/protocols/` or `.codex/skills/protocols/` is canonical;
- exact branch input grammar and parse precedence;
- parent path validation and allowed parent types;
- source anchor format and stability;
- branch id and branch set id generation;
- recursive branch depth and root detection;
- parent `_branches.md` update policy during conclude;
- what happens when parent index update fails;
- migration/backward compatibility for old inquiries;
- whether `_branches.md` is human-edited, machine-maintained, or both;
- branch discovery by navigation and meta-loop.

## Exploration Verdict

The idea is good. The finding should proceed as a direction, but it needs a stricter v1 contract before implementation.

The key refinement is to split the design into:

1. branch creation protocol;
2. branch execution path changes;
3. branch discovery/indexing;
4. branch completion/status refresh;
5. future branch-set/multihead coordination.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.

**Overall: PROCEED** (enough concrete evidence exists to evaluate the finding; refinements are implementation-contract gaps, not rejection reasons)
