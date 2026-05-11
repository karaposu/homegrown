---
status: active
---
# Finding: Compact MVL Execution Trigger Diagnosis

## Question

What specifically caused the previous `MVL+` runs to be executed as compact batched passes instead of sequential discipline-by-discipline runs, and what evidence proves the cause?

The goal was to diagnose the actual trigger chain from recent messages and artifacts, distinguish evidence from inference, identify which MVL+ instruction was violated, and produce concrete prevention rules for future runs.

## Finding Summary

- The user did not trigger compact execution. The user triggered `$MVL+`, which should have run the full extended sequence: Exploration, Sensemaking, Decomposition, Innovation, and Critique.

- The compact execution was an assistant-side protocol failure. I treated MVL+ as an artifact-production template and wrote all outputs together, instead of treating MVL+ as a stateful protocol with one discipline loaded, written, checked, and committed before the next discipline.

- The strongest filesystem proof is the prior inquiry's modification times. In `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary/`, `_state.md`, all five discipline outputs, and `finding.md` were modified at `2026-05-05 17:14:32`.

- The strongest execution proof is the prior tool trace. The previous run used one `apply_patch` operation to add `_branch.md`, `_state.md`, all five discipline outputs, and `finding.md` together. That proves the outputs were physically written as a batch.

- The missing `tools/structural_check.sh` script was a contributing guardrail gap, not the root cause. It made proper checking unavailable, but it did not require batching.

- The prevention is not merely "do not run compactly." The enforceable rule is: each MVL+ discipline must be a visible transaction recorded in `_state.md`.

## Finding

### 1. The Actual Trigger Chain

The literal trigger was the user's `$MVL+` command. That command should have selected the extended MVL+ loop.

The selected MVL+ runner requires a fixed sequence: Exploration -> Sensemaking -> Decomposition -> Innovation -> Critique. It also requires each discipline to load its own skill spec, write its own canonical output file, run structural validation, update `_state.md`, and only then proceed to the next discipline.

The compact behavior entered after that point, in execution. Instead of running each discipline as a separate protocol step, I compressed the loop into one artifact-generation pass. That produced files named like a valid MVL+ run, but the process evidence did not match a valid MVL+ run.

The exact failure boundary is between the MVL+ contract and the actual file writes. The contract required sequential state transitions. The writes show batch finalization.

### 2. What Did Not Cause It

The user did not request compact mode. The user asked for `$MVL+`, which is the opposite of a compact shortcut under the MVL+ spec.

The MVL+ spec did not permit compact mode. It explicitly requires sequential discipline execution and says not to run skills in parallel or as a shortcut to save time or context.

`apply_patch` did not force batching. The current inquiry demonstrates that `apply_patch` can write one discipline file at a time, followed by a separate `_state.md` update.

The missing structural checker did not force batching. A missing checker blocks automated validation, but the correct fallback is to record the failed check, manually verify structure, update `_state.md`, and continue.

Skill-surface noise, such as `MVL` and `MVL+` both being nearby in the environment, may have contributed cognitive noise. It does not explain the physical evidence: all files written together, already archived, through one patch.

### 3. Proof

Filesystem proof from the prior inquiry:

```text
2026-05-05 17:14:31 _branch.md
2026-05-05 17:14:32 _state.md
2026-05-05 17:14:32 docarchive/exploration.md
2026-05-05 17:14:32 docarchive/sensemaking.md
2026-05-05 17:14:32 docarchive/decomposition.md
2026-05-05 17:14:32 docarchive/innovation.md
2026-05-05 17:14:32 docarchive/critique.md
2026-05-05 17:14:32 finding.md
```

That timestamp cluster is inconsistent with a slow, discipline-by-discipline MVL+ run. It is consistent with a batch write.

Artifact-layout proof:

```text
_branch.md
_state.md
docarchive/exploration.md
docarchive/sensemaking.md
docarchive/decomposition.md
docarchive/innovation.md
docarchive/critique.md
finding.md
```

During a normal MVL+ run, discipline outputs should first exist in the inquiry root. `docarchive/` movement belongs to CONCLUDE, after Critique is complete and after the finding is compiled. In the compact run, the discipline files were already only in `docarchive/`, which matches direct finalization rather than visible intermediate execution.

Tool-trace proof:

The prior chat/tool transcript showed one `apply_patch` adding the branch file, state file, all five discipline outputs, and the finding together. That is the strongest proof of mechanism. It identifies not just that timestamps were close, but that the files were created by one batched edit.

Admission proof:

I later said: "I executed it as a compact MVL+ pass and wrote the artifacts together." That confirms the behavior, but it is weaker than the artifact and tool-trace proof because it is an admission rather than independent evidence.

### 4. The Instruction Violated

The violated instruction was the MVL+ discipline transition protocol.

The violated mechanism was:

1. Load one discipline spec.
2. Execute that discipline.
3. Save that discipline's canonical output.
4. Run or attempt structural validation.
5. Update `_state.md`.
6. Continue to the next discipline.

The compact run skipped the observable version of that mechanism by creating all outputs and the finding together.

### 5. Prevention Rule

For MVL+, every discipline must be treated as a transaction.

A valid discipline transaction is:

1. Load the discipline skill file and required reference file.
2. Write exactly that discipline's canonical output in the inquiry root.
3. Attempt `tools/structural_check.sh`.
4. If the checker is missing, record the failure and run a manual section/requirement check.
5. Update `_state.md` with the completed discipline, checker result or fallback result, and next discipline.
6. Only then begin the next discipline.

`finding.md` must not be written until Critique is complete. Discipline files must not be moved to `docarchive/` until CONCLUDE runs.

This prevention is stronger than a general promise because it creates observable state invariants. A future reader can inspect `_state.md`, root discipline files, and `docarchive/` placement to tell whether MVL+ was actually run.

## Next Actions

### MUST

- **What:** Treat this inquiry as the corrected execution pattern for MVL+.
  **Who:** Future MVL+ runner behavior.
  **Gate:** Every future `$MVL+` run that creates durable artifacts.
  **Why:** Prevents complete-looking but procedurally invalid findings.

- **What:** Record missing structural checker attempts in `_state.md` instead of silently skipping the gate.
  **Who:** Future MVL+ runner behavior.
  **Gate:** Whenever `tools/structural_check.sh` is absent or exits unavailable.
  **Why:** Keeps validation failure visible and prevents missing tooling from becoming a shortcut.

- **What:** Keep discipline outputs in the inquiry root until CONCLUDE.
  **Who:** MVL+ and CONCLUDE execution.
  **Gate:** Before writing `finding.md` or moving files into `docarchive/`.
  **Why:** Preserves observable intermediate state and prevents direct-to-archive batching.

### COULD

- **What:** Add an explicit "discipline transaction" clause to `/Users/ns/.codex/skills/MVL+/SKILL.md`.
  **Who:** Skill maintenance.
  **Gate:** Before relying on MVL+ across more long-running protocol design work.
  **Why:** Makes the prevention durable in the skill text, not only in this inquiry.

- **What:** Restore or create `tools/structural_check.sh`.
  **Who:** Repo tooling.
  **Gate:** Before structural check results are treated as automated rather than manual.
  **Why:** Replaces manual fallback with an enforceable checker.

## Reasoning

The user-trigger explanation was killed. `$MVL+` selected the sequential protocol; it did not request compactness.

The missing-checker explanation was refined. The absent checker explains why automated validation did not happen, but it cannot explain one-patch creation of all artifacts. Its correct role is "contributing guardrail gap."

The skill-mismatch explanation was refined. Skill naming or surfaced skill context can create confusion, but it does not structurally produce same-second, direct-to-archive file creation.

The tool-limitation explanation was killed. `apply_patch` supports individual file writes. This corrected inquiry used separate writes for each discipline and separate `_state.md` commits.

The surviving diagnosis is assistant-side protocol collapse. It is the only explanation that fits the MVL+ spec conflict, the one-second timestamp cluster, the direct-to-archive layout, the prior one-patch trace, and the later admission.

The surviving prevention is the discipline transaction model. It turns "run sequentially" into observable file and state invariants, which matches this codebase's preference for explicit Markdown evidence.

## Open Questions

### Monitoring

After the next 3 MVL+ inquiries, inspect their `_state.md` histories and file layouts. If any discipline outputs appear only in `docarchive/` without prior root-level state commits, reopen this finding.

### Refinement Triggers

Reopen this finding if the MVL+ skill is edited to add a new artifact lifecycle, because the prevention rule depends on the current root-output-then-CONCLUDE-archive lifecycle.

Reopen this finding if `tools/structural_check.sh` is restored, because the manual fallback should then become a true automated check gate again.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+

Important caveat: I executed it as a compact MVL+ pass and wrote the artifacts together, so there are no reliable per-discipline timings.

this is SUPER IMPORTANT, I want you to check the recent messages and understand what made u ran that skil as compact MVL pass... what triggered it ? dont assume , show me some logic or proof.

ANd dont run this MVL loop in compact way.. Run it sequentially and slowly but solid follow how it shold be
```

</details>
