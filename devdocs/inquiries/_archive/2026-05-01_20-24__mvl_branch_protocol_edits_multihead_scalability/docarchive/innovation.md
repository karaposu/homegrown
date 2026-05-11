# Innovation: MVL Branch Protocol Edits Multihead Scalability

## Candidate A: Put All Branch Logic Directly In MVL And MVL+

This would edit both loop skills to parse branch input, validate the parent, create child folders, update indexes, and define branch metadata.

Verdict: KILL.

It would work now but duplicate behavior immediately. The next runner, diagnostic protocol, or meta-loop branch mode would either copy the same logic or drift from it.

## Candidate B: Create A Shared Branch Protocol And Keep Loop Skills Thin

Create `branch_inquiry.md` and have MVL/MVL+ use it during branch-mode creation.

Verdict: SURVIVE.

This centralizes the folder contract, parent index behavior, and branch metadata. MVL and MVL+ only need to detect branch mode, declare their flow type, and run the selected pipeline.

## Candidate C: Use Only Metadata, Keep All Folders Flat

Keep every inquiry under `devdocs/inquiries/`, but add `BRANCH_OF` metadata.

Verdict: KILL.

This fails the visible folder-branch requirement. It may remain useful as a compatibility fallback, but it should not be the primary branch model.

## Candidate D: Build Full Multihead Now

Add a scheduler that creates many branches, runs them in parallel, handles race-free status updates, then merges results.

Verdict: KILL FOR V1.

This is too much for the immediate need. It risks delaying the useful single-branch feature. The right move is to add stable branch-set metadata now and build scheduling later.

## Candidate E: Parallel-Safe Parent Index Contract

Make `_branches.md` a creation-time manifest and avoid relying on every parallel child run to mutate it at conclusion.

Verdict: SURVIVE.

For manual single branches, updating parent status on conclusion is acceptable. For future branch sets, a coordinator should update parent summaries after reading child folders. This preserves simple v1 behavior while avoiding a known race in parallel mode.

## Candidate F: Branch Grouping By Folder Path

Use nested grouping:

```text
branches/<branch_set_id>/<branch_id>/
```

Verdict: REFINE LATER.

This is attractive for multihead, but it makes single-branch mode heavier. A `Branch Set ID` metadata field and parent index column are enough now. If multihead usage grows, the project can add branch-set folders without changing the child inquiry contract.

## Candidate G: Keep `folder_name` But Allow Slashes

Treat `[folder_name]` as a path that may contain slashes.

Verdict: KILL.

The name becomes misleading and invites mistakes. Use `inquiry_path` for file operations and `inquiry_id` for display.

## Assembly

The strongest design is:

- `branch_inquiry.md` owns branch creation;
- MVL/MVL+ detect branch mode and pass `flow_type`;
- `inquiry_path` replaces top-level folder assumptions;
- branch metadata includes `Branch Set ID`;
- parent `_branches.md` is a manifest/index;
- `CONCLUDE` is branch-aware but does not become merge;
- multihead scheduling is deferred but structurally supported.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.

**Overall: PROCEED** (several alternatives were evaluated; the surviving assembly is small now and extensible later)
