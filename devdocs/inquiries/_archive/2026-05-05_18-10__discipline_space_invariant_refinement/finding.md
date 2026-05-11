---
status: active
refines: devdocs/inquiries/2026-05-05_17-44__mvl_compact_prevention_without_core_changes/finding.md
---
# Finding: Discipline Space Invariant Refinement

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-05_17-44__mvl_compact_prevention_without_core_changes/finding.md`

**Revision trigger:** User correction that the problem is not merely simultaneous file writing. Simultaneous writing matters because it indicates the disciplines may not have had independent reasoning space.

**What's preserved:** The prior finding was right that narrow runner-rule edits are useful, that sub-skills should not be rewritten for this failure, and that file/state audit patterns still matter.

**What's changed:** The proposed rule should not be centered on file transactions. It should be centered on discipline workspace and feed-forward reasoning.

**What's new:** The rule should forbid drafting, precomputing, or writing later discipline outputs while executing the current discipline.

**Migration:** Replace the prior `Discipline Transaction Invariant` wording with `Discipline Workspace Invariant`.

## Question

How should the proposed MVL/MVL+ transaction invariant be reframed so it protects each discipline's independent cognitive workspace, not merely the timing or placement of output files?

The goal is to ensure each discipline takes its own space and produces correct output, while still keeping observable artifacts that prove the sequence as much as artifacts can.

## Finding Summary

- The user's correction is right. The badness of writing files together is not mainly about file timing. It is that same-time writing is evidence the disciplines were compressed into one mental pass.

- The protected value is discipline workspace: each discipline must run in its own focused frame and consume the prior discipline's actual saved output.

- File and `_state.md` rules still matter, but they are the audit trail. They exist to prove that each discipline handoff happened.

- The rule should be renamed from `Discipline Transaction Invariant` to `Discipline Workspace Invariant`.

- The revised rule must forbid drafting, precomputing, or writing later discipline outputs during the current discipline's workspace.

## Finding

The invariant should be workspace-first and audit-second.

Each MVL/MVL+ discipline has a distinct cognitive job. Sensemaking should stabilize meaning. Innovation should generate possibilities from the stabilized meaning. Critique should evaluate the generated possibilities. In MVL+, Exploration and Decomposition add their own distinct jobs before Innovation and Critique.

If all discipline files are written together, the likely failure is not merely that the files have close timestamps. The likely failure is that the runner produced a whole-loop answer and split it into discipline-shaped files. In that case, later disciplines did not truly consume the saved output of earlier disciplines.

So the rule should say why the audit trail exists:

> The next discipline must consume the prior discipline's saved output, not an imagined or prewritten whole-loop answer.

The file, checker, checkpoint, and `_state.md` requirements remain useful because they make the discipline handoff visible. They do not perfectly prove internal reasoning, but they create a concrete input boundary for the next discipline.

## Revised Rule Block

```markdown
### Discipline Workspace Invariant

Each discipline must run in its own focused workspace. The purpose is not merely to create files in order; the purpose is to let each discipline produce correct output from its own frame and from the prior discipline's actual saved result.

For the current discipline:

1. Load only the current discipline's spec and required references.
2. Use `_branch.md`, `_state.md`, and already-saved prior discipline outputs as the discipline's input.
3. Do not draft, precompute, or write outputs for later disciplines while executing the current discipline.
4. Write only the current discipline's canonical output file in the inquiry root.
5. Attempt structural check for that output.
6. If `tools/structural_check.sh` is unavailable, manually check the discipline's required structure and record the result in `_state.md`.
7. Update `_state.md` to check off the current discipline, summarize the check result, and name the next discipline.

Only after this handoff is committed may the next discipline begin.

The file and `_state.md` rules are the audit trail for discipline-space separation. They exist because the next discipline must consume the prior discipline's saved output, not an imagined or prewritten whole-loop answer.

Invalid compact execution patterns:

- drafting or writing outputs for later disciplines during the current discipline's workspace;
- writing two or more discipline outputs before the prior discipline has a committed `_state.md` handoff;
- writing all discipline outputs and `finding.md` in one edit;
- writing discipline outputs directly into `docarchive/`;
- marking all disciplines complete in `_state.md` without per-discipline history entries;
- skipping structural check silently because the checker script is missing.

`finding.md` and `docarchive/` movement belong only to CONCLUDE, after all discipline workspaces have completed and after `homegrown/protocols/conclude.md` has been loaded.
```

## Next Actions

### MUST

- **What:** Use `Discipline Workspace Invariant` instead of `Discipline Transaction Invariant` in the MVL/MVL+ runner rule patch.
  **Who:** Skill maintenance / runner prompt edit.
  **Gate:** Before patching `homegrown/MVL/SKILL.md` or `homegrown/MVL+/SKILL.md`.
  **Why:** Keeps the rule aimed at discipline output quality rather than file timing.

- **What:** Include the no-precompute rule.
  **Who:** Skill maintenance / runner prompt edit.
  **Gate:** Same patch as the workspace invariant.
  **Why:** Prevents ceremonial file sequencing where later discipline content is mentally drafted before the current discipline completes.

### COULD

- **What:** If later tooling is built, make it check for audit signals but name them as discipline-space evidence.
  **Who:** Repo tooling.
  **Gate:** When `tools/structural_check.sh` or an MVL runner wrapper is implemented.
  **Why:** Prevents tooling from treating file order as the purpose.

## Reasoning

The file-only transaction wording was refined. It catches real invalid patterns, but it under-explains why those patterns matter.

The pure workspace wording was also refined. Saying "give each discipline space" without observable gates is too abstract and easy to ignore.

The surviving wording combines both layers. Discipline workspace is the purpose. File/state/checkpoint sequencing is the audit trail.

Removing file invalid patterns was killed. Same-time writing remains strong evidence of workspace collapse, so it should remain invalid.

The no-precompute rule survived. It names the actual cognitive failure: later discipline outputs should not exist, even as drafted content, during an earlier discipline's focused workspace.

## Open Questions

### Monitoring

After the next 3 MVL/MVL+ inquiries, inspect whether `_state.md` histories describe discipline handoffs, not just file completion. If they only say files were written, reopen this finding.

### Refinement Triggers

Reopen this finding if a future run writes files one at a time but still appears to have produced all discipline content from one precomputed answer. That would show the audit trail is being followed ceremonially rather than cognitively.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+

### Discipline Transaction Invariant

Each discipline is a separate transaction. A discipline transaction is complete only after:

1. the discipline spec has been loaded for the current discipline;
2. exactly that discipline's canonical output file has been written in the inquiry root;
3. structural check has been attempted for that output;
4. if `tools/structural_check.sh` is unavailable, a manual structural check result has been recorded in `_state.md`;
5. `_state.md` has been updated to check off that discipline, summarize the check result, and name the next discipline.

Do not write the next discipline output before the current transaction is committed in `_state.md`.

Invalid compact execution patterns:

- writing two or more discipline outputs before a state commit for the prior discipline;
- writing all discipline outputs and `finding.md` in one edit;
- writing discipline outputs directly into `docarchive/`;
- marking all disciplines complete in `_state.md` without per-discipline history entries;
- skipping structural check silently because the checker script is missing.

`finding.md` and `docarchive/` movement belong only to CONCLUDE, after all discipline transactions are complete and after `homegrown/protocols/conclude.md` has been loaded.

hmm, but it actually not just about writing files. writing at the same time is bad becasue it means sequential logic was not done properly maybe, we would like to ensude each discpiline takes its own space so they can output correctly...
```

</details>
