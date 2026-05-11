# Innovation: MVL Branching Folder Structure

## Candidate A: Flat Inquiries With Relationship Metadata

Keep all inquiry folders at the top level and add `BRANCH_OF` metadata to `_state.md`.

Verdict: KILL.

This is compatible, but it does not solve the actual pain. The user wants real folder branching because the follow-up question belongs under the parent inquiry.

## Candidate B: Nested Branch Folders Only

Create child inquiries under:

```text
devdocs/inquiries/<parent>/branches/<child>/
```

Verdict: REFINE.

This solves visible lineage, but it creates a discovery problem for tools and humans that look only at top-level inquiry folders. It needs a parent index.

## Candidate C: Hybrid Nested Branches Plus Parent Index

Create child inquiries under the parent and maintain `_branches.md` on the parent.

Verdict: SURVIVE.

This gives the user a real branch tree and preserves discovery through a stable index.

Required pieces:

- child folder under `branches/`;
- child `_branch.md` with parent, root, source, question, and goal;
- child `_state.md` with branch relationships;
- parent `_branches.md` table;
- explicit branch creation mode.

## Candidate D: Global Branch Registry

Create a central file such as:

```text
devdocs/inquiries/_branches.md
```

Verdict: REFINE LATER.

This may be useful after branch usage grows, but it is not needed for v1. A parent-local index is enough and avoids central file churn.

## Candidate E: Automatic Branch Candidate Extraction

During `CONCLUDE`, automatically identify every follow-up question and spawn branches.

Verdict: KILL FOR NOW.

This is too aggressive. It would create folder noise and compute waste. It also violates the existing meta-loop caution that branching should be explicit unless the user requests multi-head branch mode.

Refined future version:

- `CONCLUDE` may list `Branch Candidates`;
- the user or navigation protocol chooses which one to run;
- selected candidates can be created as branch inquiries.

## Candidate F: Special Argument For MVL/MVL+

Add an explicit branch invocation form:

```text
$MVL+ --branch-from <parent-path> --branch-source <source-anchor> <question>
```

Verdict: SURVIVE.

This is the right manual bridge before automation. It makes the branch relation explicit at creation time and avoids ambiguity.

Because current skill invocation may not have real argument parsing, the same contract can be expressed in prompt fields:

```text
branch_from: <parent-path>
branch_source: <finding.md section or quoted bullet>
question: <child question>
```

## Candidate G: Branch Protocol File

Create a future protocol:

```text
homegrown/protocols/branch_inquiry.md
```

Verdict: SURVIVE AFTER CONTRACT.

The first step is agreeing on the branch contract. After that, a protocol file should formalize creation, metadata, parent index updates, and validation.

## Best Assembly

Use Candidate C plus Candidate F:

1. Keep default MVL/MVL+ root inquiries flat.
2. Add explicit branch mode.
3. In branch mode, create the child under the parent `branches/` directory.
4. Require a branch source anchor.
5. Write parent `_branches.md`.
6. Keep the child inquiry fully resumable and concludable by path.
7. Defer automatic spawning and merge.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.
