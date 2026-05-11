# Critique: MVL Branch Protocol Edits Multihead Scalability

## Evaluation Dimensions

| Dimension | Weight | Reason |
| --- | ---: | --- |
| Useful immediately | 5 | The user wants this to work now for follow-up MVL questions. |
| Avoids duplication | 5 | MVL and MVL+ should not diverge on branch semantics. |
| Supports future multihead | 4 | The design should not block branch sets or parallel execution. |
| Keeps v1 small | 4 | Overbuilding would slow adoption. |
| Preserves existing inquiries | 5 | Flat historical inquiries must keep working. |
| Avoids shared-write races | 4 | Parallel branches must not all mutate the same parent file. |

## Candidate Verdicts

### Shared `branch_inquiry.md` Protocol

Verdict: SURVIVE.

It is the right abstraction boundary. Branch creation is shared infrastructure across MVL, MVL+, future meta-loop traversal, loop diagnosis, and branch-set execution.

### Direct MVL/MVL+ Branch Logic

Verdict: KILL.

It creates immediate duplication and makes later multihead support harder. Any fix to branch metadata, parent index format, or path validation would need to be repeated in both loop skills.

### `inquiry_path` Replacement

Verdict: SURVIVE.

This is mandatory. Without it, nested branches will keep colliding with examples and commands that assume `devdocs/inquiries/[folder_name]/`.

### `Branch Set ID` In V1

Verdict: SURVIVE.

This is a small field with high future value. It does not make single-branch usage heavy, and it gives future multihead branches a grouping key.

### Full Multihead Scheduler Now

Verdict: KILL.

The system does not need scheduling, parallel execution, and merge all at once. The folder/protocol contract should come first.

### Parent `_branches.md` Updated By Every Child On Conclude

Verdict: REFINE.

For single manual branches, this is convenient. For parallel branch sets, it is race-prone. The protocol must distinguish single branch convenience from future branch-set coordination.

## Assembly Verdict

Proceed with a two-layer design:

1. `branch_inquiry.md` is a new protocol for branch creation.
2. MVL and MVL+ become branch-aware callers that run the normal pipeline at whatever `inquiry_path` the protocol creates.

Future multihead support should be represented now by `Branch Set ID`, `Branch Mode`, and parent index columns, not by building a scheduler yet.

## Required Refinement

The implementation should update both protocol copies or make one canonical. This repo has `.codex/skills/protocols/` and `homegrown/protocols/`. If only one copy changes, the system will drift.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.

**Overall: PROCEED** (the answer is concrete, scoped, and handles the future parallelism risk without overbuilding)
