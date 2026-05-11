# Sensemaking: MVL Branching Folder Structure

## Core Interpretation

This is not only a folder organization problem. It is a missing relationship type in the inquiry system.

A branch inquiry is a normal inquiry with additional authority and lineage:

- It is spawned from a parent inquiry.
- It is anchored to a specific source in the parent, usually a finding section, critique concern, or branch candidate.
- It has its own pipeline state and conclusion.
- It may later be merged back into a parent or higher-level synthesis, but merge is a separate operation.

## Distinctions

### Follow-up Branch

This is the user's immediate case. A finding contains an interesting unresolved sub-question, and the user wants to run MVL/MVL+ on that sub-question without losing its parent context.

This does not require parallel execution.

### Multi-head Branching

This is a future meta-loop case. The system deliberately explores multiple branches in parallel or sequence and then compares them.

This requires stronger scheduling and merge rules.

### Merge

Merge is the act of integrating completed branch findings into a parent conclusion, roadmap, or synthesis.

Merge should not be bundled into branch creation v1. Branch creation must only establish lineage, source, and storage.

## What "Branching Via Folders" Should Mean

It should mean:

- the child inquiry is physically nested under the parent inquiry;
- the child can be resumed and concluded independently by path;
- the parent exposes a stable branch index;
- the relationship is explicit in both parent and child metadata;
- the branch records the exact parent source that justified its creation.

It should not mean:

- every interesting bullet automatically becomes a branch;
- the parent conclusion is automatically updated with branch results;
- old flat inquiries must be migrated;
- child branches are less formal than root inquiries;
- branch labels become hard routing commands.

## Source of Authority

Branch creation authority should come from an explicit user request or an explicit future protocol step. For now, MVL/MVL+ should not infer and create branches automatically.

The source anchor matters because without it, branch folders become just another organizational preference. With a source anchor, a branch becomes inspectable: someone can ask why it exists and where the unresolved question came from.

## Compatibility Reading

Because `RESUME` and `CONCLUDE` are path-based, nested child inquiries should work if commands receive the nested path explicitly. The likely breakage is not execution; it is discovery by tools that assume only one level under `devdocs/inquiries/`.

Therefore, parent-side branch indexing is not optional. It is the compatibility bridge.

## Design Center

The design center should be:

> explicit branch creation now, visible nested lineage, path-based execution, parent index for discovery, future automation later.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.
