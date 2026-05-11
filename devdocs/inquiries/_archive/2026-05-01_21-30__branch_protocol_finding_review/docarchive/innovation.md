# Innovation: Branch Protocol Finding Review

## Candidate A: Accept The Finding As-Is

Proceed directly to implementation using the reviewed finding's edit list.

Verdict: REFINE.

The direction is right, but implementation would require too much interpretation. The missing details are exactly the kind that cause protocol drift: source anchors, id semantics, parent index ownership, and canonical path.

## Candidate B: Reject Branch Protocol And Keep Logic In MVL/MVL+

Avoid a new protocol and directly edit both runners.

Verdict: KILL.

This recreates the duplication problem the reviewed finding correctly identified. It would also make future meta-loop and branch-set coordination harder.

## Candidate C: New Protocol Plus Stricter V1 Contract

Keep the reviewed finding's core proposal, but require a stricter branch protocol before runner edits.

Verdict: SURVIVE.

This is the strongest path. It preserves the good idea and prevents implementation ambiguity.

Required additions:

- canonical protocol location;
- branch input grammar;
- parent validation;
- id and branch-set semantics;
- structured source anchors;
- parent index ownership;
- child-local completion rule;
- explicit future refresh/merge boundary.

## Candidate D: Build Branch Status Refresh Now

Add a new protocol immediately:

```text
homegrown/protocols/branch_status_refresh.md
```

Verdict: REFINE LATER.

The concept is good, but it is not required before first use. Branch creation can write the initial parent index. Completion can remain child-local. A refresh protocol becomes necessary when branch sets or stale parent indexes appear.

## Candidate E: Make CONCLUDE Update Parent Index Always

When any branch completes, `CONCLUDE` updates parent `_branches.md`.

Verdict: KILL AS DEFAULT.

This is tempting because it improves single-branch ergonomics, but it makes the wrong operation own shared parent state. It also creates the exact race risk the design is trying to avoid for parallel branch sets.

Acceptable narrower version:

`CONCLUDE` may print parent update instructions or perform parent index update only under explicit single-branch non-parallel mode, but child completion must not depend on parent index mutation.

## Candidate F: Keep `Branch Set ID` But Use `none` For Single Branches

Use branch-set fields now, but set single branches to:

```text
Branch Set ID: none
Branch Mode: single
```

Verdict: SURVIVE.

This avoids conflating a branch's identity with a set's identity. When multihead arrives, set members can share a real branch-set id.

## Candidate G: Require Structured Source Anchors

Instead of a single loose `branch_source` string, normalize it into source file, section, anchor text, and optional lines.

Verdict: SURVIVE.

This improves later diagnosis, branch graph reading, and merge. A loose string can still be accepted at input time, but the stored record should be structured.

## Assembly

The refined answer should be:

Proceed with the branch protocol idea, but do not implement directly from the previous finding. First write a stricter `branch_inquiry.md` that resolves canonical path, input grammar, validation, ids, source anchors, parent index schema, and ownership rules.

Then update MVL/MVL+, CONCLUDE, and RESUME.

Do not build multihead scheduler or merge now. Do not make `CONCLUDE` the general parent-index writer.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.

**Overall: PROCEED** (the surviving refinement preserves the core idea and removes the implementation ambiguities)
