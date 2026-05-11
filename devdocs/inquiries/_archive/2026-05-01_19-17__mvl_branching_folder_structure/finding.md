# Finding: MVL Branching Folder Structure

## Verdict

Yes, MVL/MVL+ should support real inquiry branches, but only through an explicit branch mode at first.

The right first version is not full automation. It is a small folder contract:

- root inquiries stay flat under `devdocs/inquiries/`;
- branch inquiries live under their parent at `branches/<timestamp__slug>/`;
- the parent gets `_branches.md`;
- the child records `BRANCH_OF`, `ROOT_INQUIRY`, and `branch_source`;
- `RESUME` and `CONCLUDE` continue to operate by explicit path.

## Recommended V1 Shape

Default root inquiry:

```text
devdocs/inquiries/<YYYY-MM-DD_HH-MM__root_slug>/
```

Explicit branch inquiry:

```text
devdocs/inquiries/<parent>/
  _branches.md
  branches/
    <YYYY-MM-DD_HH-MM__child_slug>/
      _branch.md
      _state.md
      exploration.md
      sensemaking.md
      decomposition.md
      innovation.md
      critique.md
      finding.md
      docarchive/
```

## Invocation Contract

Preferred future form:

```text
$MVL+ --branch-from devdocs/inquiries/<parent>/ --branch-source "finding.md: <section or bullet>" "<child question>"
```

Prompt-field form that can work before real argument parsing exists:

```text
$MVL+
branch_from: devdocs/inquiries/<parent>/
branch_source: finding.md: <section or quoted bullet>
question: <child question>
```

The important part is not the exact syntax. The important part is that branch creation must know:

- parent inquiry path;
- source anchor in the parent;
- child question;
- desired flow type, such as MVL or MVL+.

## Child Metadata

Child `_branch.md` should include:

- parent inquiry path;
- root inquiry path;
- branch source;
- branch question;
- branch goal;
- branch depth.

Child `_state.md` should include relationships like:

```text
BRANCH_OF: devdocs/inquiries/<parent>/ (source: finding.md#...)
ROOT_INQUIRY: devdocs/inquiries/<root>/
CONTINUES_FROM: devdocs/inquiries/<parent>/
```

## Parent Index

Parent `_branches.md` should be a simple status index:

```text
| Branch | Source | Question | Status | Finding |
| --- | --- | --- | --- | --- |
| branches/2026-05-01_19-17__example/ | finding.md: Branch Candidates | Example question | ACTIVE | |
```

This file is the discoverability bridge. Without it, nested branches may be missed by tools or humans scanning only top-level inquiry folders.

## What Should Not Be Included In V1

Do not automatically spawn branches from every interesting finding. That would create branch explosion and waste compute.

Do not migrate existing flat inquiries. Historical paths should remain stable.

Do not make branch creation responsible for merging results back into the parent. `MERGE` should be a separate protocol.

Do not rely only on metadata while keeping all child folders flat. That preserves compatibility, but it does not solve the user's real complaint.

## Future Automation Path

After the branch folder contract exists:

1. `CONCLUDE` can optionally emit a `Branch Candidates` section.
2. Navigation can rank or select branch candidates.
3. MVL/MVL+ can create selected candidates with `--branch-from`.
4. A separate `MERGE` protocol can integrate completed child findings into parent synthesis.
5. Discovery tools can become branch-aware and read both top-level inquiries and nested `branches/` folders.

## Final Answer

Use explicit branch mode now. Store child inquiries physically under the parent. Add a parent `_branches.md` index so nested branches remain discoverable. Keep merge and automatic branch spawning out of the first version.

This gives the project real folder branching without breaking the current flat inquiry model.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.
