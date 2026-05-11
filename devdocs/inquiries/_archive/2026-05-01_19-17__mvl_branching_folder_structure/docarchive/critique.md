# Critique: MVL Branching Folder Structure

## Evaluation

### Does It Solve The User Problem?

Score: 5/5.

The hybrid design creates real folder branches instead of only flat sibling folders. The parent inquiry visibly owns its follow-up branches.

### Does It Preserve Existing Behavior?

Score: 4/5.

Default MVL/MVL+ runs stay flat. Existing inquiries do not need migration. `RESUME` and `CONCLUDE` should work with nested child paths because they are path-based.

Residual risk: some discovery commands and reports may scan only `devdocs/inquiries/*`. Parent `_branches.md` mitigates this but does not automatically update every old tool.

### Does It Avoid Premature Automation?

Score: 5/5.

The design requires explicit branch creation. It does not automatically spawn branches from every interesting finding.

### Does It Keep Merge Separate?

Score: 5/5.

Branch creation records lineage. It does not claim to reconcile results back into the parent. That avoids overloading v1 with synthesis behavior.

### Is The Source Authority Clear?

Score: 4/5.

Requiring `branch_source` is strong. The source should be specific enough to inspect later: section heading, line reference if available, or a short quoted parent bullet.

Weak form to avoid:

```text
branch_source: finding.md
```

Better form:

```text
branch_source: finding.md / "Branch Candidates" / "Should artifact materialization use task-plan as trace?"
```

### Is The Folder Name Stable?

Score: 4/5.

`branches/` is clear and distinct from `docarchive/`. It supports recursive nesting if needed.

Risk: deep nesting can become hard to scan. Add `ROOT_INQUIRY` and parent indexes at each level to preserve orientation.

### Is A Special Argument Enough?

Score: 4/5.

It is enough for a manual first version. Since skill invocation may not yet parse CLI-style args, the protocol should allow a field-block form in the prompt.

## Main Failure Modes

### Failure Mode 1: Nested Branches Become Invisible

If tools keep using shallow `find devdocs/inquiries -maxdepth 1`, branch inquiries may be missed.

Mitigation:

- parent `_branches.md`;
- future branch-aware discovery;
- optional global branch registry later.

### Failure Mode 2: Automatic Branch Explosion

If every finding emits branches automatically, the system will create too many loops and waste compute.

Mitigation:

- explicit branch mode only in v1;
- optional `Branch Candidates` section later, not automatic branch creation.

### Failure Mode 3: Merge Gets Smuggled Into Branch Creation

If branch creation tries to update the parent conclusion, it will confuse lineage with synthesis.

Mitigation:

- branch creation only creates child inquiry and parent index entry;
- merge remains a separate protocol.

### Failure Mode 4: Existing Inquiries Are Moved Prematurely

Migrating old folders into branch trees could break references and historical paths.

Mitigation:

- no migration in v1;
- old flat inquiries remain valid.

## Critique Verdict

The proposal should proceed as a v1 contract:

- explicit branch mode;
- nested child inquiry folders;
- parent `_branches.md`;
- child lineage metadata;
- no automatic spawning;
- no merge in v1.

## Structural Check

`tools/structural_check.sh` is not present in this repo, so no structural check was run.
