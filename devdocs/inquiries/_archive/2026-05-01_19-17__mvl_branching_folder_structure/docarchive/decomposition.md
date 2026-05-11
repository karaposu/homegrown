# Decomposition: MVL Branching Folder Structure

## Main Components

### 1. Branch Creation Trigger

The system needs an explicit way to say: this new MVL/MVL+ inquiry is a child of an existing inquiry.

Minimal trigger:

```text
$MVL+ --branch-from devdocs/inquiries/<parent>/ --branch-source "finding.md: <section or bullet>" <question>
```

Fallback trigger before real argument parsing exists:

```text
$MVL+
branch_from: devdocs/inquiries/<parent>/
branch_source: finding.md: <section or quoted bullet>
question: <child question>
```

### 2. Branch Folder Topology

Root inquiry:

```text
devdocs/inquiries/<parent>/
```

Branch inquiry:

```text
devdocs/inquiries/<parent>/branches/<YYYY-MM-DD_HH-MM__child_slug>/
```

The child folder remains a complete inquiry folder:

```text
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

### 3. Child Metadata

`_branch.md` should add:

- parent inquiry path;
- root inquiry path;
- branch source;
- branch question;
- branch goal;
- branch depth.

`_state.md` should add relationship entries:

```text
BRANCH_OF: devdocs/inquiries/<parent>/ (source: finding.md#...)
ROOT_INQUIRY: devdocs/inquiries/<root>/
CONTINUES_FROM: devdocs/inquiries/<parent>/
```

### 4. Parent Branch Index

The parent should gain:

```text
_branches.md
```

Minimum columns:

```text
| Branch | Source | Question | Status | Finding |
```

This lets shallow discovery tools and humans find nested children without scanning the whole tree.

### 5. Resume and Conclude Behavior

`RESUME` should accept a nested branch path exactly as it accepts a root inquiry path.

`CONCLUDE` should write the child `finding.md` inside the child folder. When feasible, it should update the parent `_branches.md` status and finding link, but branch conclusion should not depend on successfully updating the parent index.

### 6. Future Automation

Later automation can add:

- `Branch Candidates` section in `finding.md`;
- navigation ranking over branch candidates;
- automatic branch creation after user selection;
- `MERGE` protocol for integrating completed branch findings;
- recursive branch maps across multiple depths.

## Dependency Order

1. Define branch path contract.
2. Define explicit branch invocation syntax.
3. Define child `_branch.md` and `_state.md` relationship fields.
4. Define parent `_branches.md`.
5. Update MVL/MVL+ skill instructions to honor branch mode.
6. Update `RESUME` and `CONCLUDE` instructions only where nested path assumptions appear.
7. Add future branch candidate and merge behavior separately.

## Boundaries

Branch creation is not branch selection. Selection is a navigation or user decision.

Branch creation is not merge. Merge is later synthesis.

Branch folders are not docarchives. `docarchive/` stores completed discipline outputs; `branches/` stores live or completed child inquiries.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.
