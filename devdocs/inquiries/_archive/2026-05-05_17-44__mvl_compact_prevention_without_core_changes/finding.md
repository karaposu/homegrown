---
status: active
refines: devdocs/inquiries/2026-05-05_17-27__compact_mvl_execution_trigger_diagnosis/finding.md
---
# Finding: MVL Compact Prevention Without Core Changes

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-05_17-27__compact_mvl_execution_trigger_diagnosis/finding.md`

**Revision trigger:** User asked how to prevent the compact execution failure and corrected the source path/scope.

**What's preserved:** The prior diagnosis stands: compact MVL+ execution was an assistant-side protocol collapse, not a user-triggered mode and not a tool limitation.

**What's changed:** The relevant source files are the Homegrown files under `homegrown/`, not the installed copies under `/Users/ns/.codex/skills/`.

**What's new:** Narrow edits to the MVL/MVL+ runner skill files are allowed if they affect only relevant peripheral/rules sections. Core loop rewrites and sub-skill rewrites remain out of scope.

**Migration:** The prior recommendation to add discipline transaction language should be applied to `homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md`, not to installed copies.

## Question

How can compact or batched MVL/MVL+ execution be prevented without rewriting the core MVL loop or sub-skill discipline logic, while allowing narrowly scoped edits to relevant peripheral/rules sections of the MVL/MVL+ skill files?

The goal is to decide whether adding prompt text is enough, whether the existing prompts are themselves the problem, and what durable prevention mechanism fits this repo's explicit Markdown workflow.

## Finding Summary

- The existing prompts are not wrong at the core-loop layer. `homegrown/MVL+/SKILL.md` already says not to run all skills at once, and both Homegrown MVL runners already define sequential discipline transitions.

- A louder generic prompt is not the fix. MVL+ already had anti-batching text when the compact failure happened.

- The missing piece is invariant language: the runners should define what makes a discipline transition valid and what file/state patterns make a run procedurally invalid.

- The right immediate fix is a narrow rules/peripheral patch to both `homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md`.

- Do not edit discipline sub-skills for this failure. The failure was orchestration, and the runner owns orchestration.

- Do not rewrite the core MVL or MVL+ loop. The loop shapes are correct: MVL is S -> I -> C, and MVL+ is E -> S -> D -> I -> C.

## Finding

The fix should be a runner-level `Discipline Transaction Invariant`.

This is not a new cognitive step. It is a rule that makes the existing discipline transition protocol auditable.

Each discipline should count as complete only after five things happen:

1. the discipline spec is loaded;
2. exactly that discipline's canonical output file is written in the inquiry root;
3. structural check is attempted;
4. missing checker fallback is recorded if `tools/structural_check.sh` is unavailable;
5. `_state.md` is updated before the next discipline output is written.

The rule should also name invalid compact execution patterns:

- writing two or more discipline outputs before a state commit for the prior discipline;
- writing all discipline outputs and `finding.md` in one edit;
- writing discipline outputs directly into `docarchive/`;
- marking all disciplines complete in `_state.md` without per-discipline history entries;
- silently skipping structural check because the checker script is missing.

The rule should include the CONCLUDE boundary:

- `finding.md` belongs only after all discipline transactions complete;
- `docarchive/` movement belongs only to `homegrown/protocols/conclude.md`;
- discipline outputs should live in the inquiry root until CONCLUDE archives them.

This should be added to both Homegrown runners for parity:

- `homegrown/MVL/SKILL.md`: protects the classic S -> I -> C loop.
- `homegrown/MVL+/SKILL.md`: hardens the extended E -> S -> D -> I -> C loop, even though it already has anti-batch language.

## Suggested Rule Block

```markdown
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
```

## Next Actions

### MUST

- **What:** Add the `Discipline Transaction Invariant` rule block to `homegrown/MVL/SKILL.md`.
  **Who:** Skill maintenance / runner prompt edit.
  **Gate:** Before relying on classic MVL for another durable inquiry.
  **Why:** Classic MVL has the same batching risk but weaker anti-batching rule parity than MVL+.

- **What:** Add the same invariant rule block to `homegrown/MVL+/SKILL.md`.
  **Who:** Skill maintenance / runner prompt edit.
  **Gate:** Before the next durable MVL+ inquiry that writes artifacts.
  **Why:** MVL+ already says not to batch, but this adds concrete invalid states and fallback behavior.

- **What:** Keep discipline sub-skills unchanged for this fix.
  **Who:** Skill maintenance.
  **Gate:** This compact-execution prevention change.
  **Why:** The failure is runner orchestration, not discipline reasoning.

### COULD

- **What:** Restore or create `tools/structural_check.sh`.
  **Who:** Repo tooling.
  **Gate:** After the runner invariant patch lands, before treating structural checks as automated again.
  **Why:** Converts the current manual fallback into an actual automated check.

### DEFERRED

- **What:** Build a mechanical MVL runner/wrapper that enforces file/state transitions.
  **Gate:** Revive if another compact MVL/MVL+ run occurs after the invariant patch.
  **Why (if revived):** Prompt-level invariants improve protocol compliance and detectability; a wrapper would enforce sequence mechanically.

## Reasoning

The "add a louder anti-batching prompt" option was killed. MVL+ already had anti-batching text, so repeating the same idea would not address the failure mode.

The "existing prompts are fundamentally wrong" option was killed. The core loop definitions and discipline transition protocol are correct. The weakness is that the runners do not yet name enough invalid file/state patterns.

The "edit sub-skills" option was killed. A discipline sub-skill cannot force the runner to call it separately. The runner controls orchestration, state updates, and CONCLUDE timing.

The "restore structural checker now" option was refined. It is useful, but it is a tooling follow-up. The runner still needs fallback behavior for the checker-missing branch.

The "mechanical wrapper" option was refined. It would be stronger enforcement, but it is larger than the immediate allowed change surface. It should be revived only if prompt-level invariants fail again.

The surviving approach is the narrow runner invariant patch. It fits the user's corrected scope and turns sequential execution from a desired behavior into an auditable contract.

## Open Questions

### Monitoring

After the next 3 MVL or MVL+ inquiries, inspect `_state.md` histories and file layouts. If any inquiry has discipline outputs only in `docarchive/` without per-discipline state history, reopen this finding.

### Blocked

Automated structural validation remains blocked until `tools/structural_check.sh` exists.

### Refinement Triggers

Reopen this finding if `homegrown/protocols/conclude.md` changes the artifact lifecycle, because the rule depends on CONCLUDE owning `finding.md` and `docarchive/` movement.

Reopen this finding if a compact execution happens after the invariant patch, because that would be evidence that prompt-level prevention is insufficient and mechanical wrapper enforcement should be reconsidered.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+

Complete. I ran this MVL+ sequentially and wrote the result here: devdocs/inquiries/2026-05-05_17-
  27__compact_mvl_execution_trigger_diagnosis/finding.md.

  Main answer: $MVL+ did not trigger compact mode. It correctly triggered the sequential MVL+ protocol. The compact behavior was my execution
  failure: I treated MVL+ as an artifact-generation template and wrote all outputs together instead of running each discipline as a stateful
  transaction.

  Proof used:

  - Prior run files all landed at 2026-05-05 17:14:32.
  - Prior discipline files were already in docarchive/.
  - Prior tool trace showed one apply_patch adding all outputs and finding.md.
  - MVL+ spec explicitly requires sequential discipline execution.
  - My later caveat confirmed the behavior, but the artifact/tool evidence is stronger.

okay then we can we do to prevent this ? maybe adding a propmt to MVL loop is the fix? or maybe the already existing prompts are the problem?

we must not change the core MVL or sub skills tho

u said

A good answer should identify the prevention layer that can enforce sequential execution without editing `/Users/ns/.codex/skills/MVL
        /SKILL.md`, `/Users/ns/.codex/skills/MVL+/SKILL.md`

tahts not correct. we can edit skill.md files but the relevant parts only. not whole of it. only peripheral parts or rules parts

and also you should look at homegrown/MVL+/SKILL.md not to .codex folder ...  .codex folders are installed version of /Users/ns/Desktop/projects/native/homegrown
```

</details>
