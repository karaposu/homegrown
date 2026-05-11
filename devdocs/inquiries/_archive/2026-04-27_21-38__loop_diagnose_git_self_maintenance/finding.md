---
status: active
refines: devdocs/inquiries/2026-04-27_21-14__rapid_fundamentals_improvement_focus/finding.md
impacted_by: devdocs/inquiries/_archive/comparative_mvl_loop_diagnosis/finding.md
---
# Finding: Loop Diagnose and Git Self-Maintenance

## Changes from Prior

**Prior path:** devdocs/inquiries/2026-04-27_21-14__rapid_fundamentals_improvement_focus/finding.md

**Revision trigger:** The user challenged two implementation implications in the prior finding: that `loop-diagnose` might be treated like a separate discipline, and that a self-maintenance ledger might duplicate what git already provides.

**What's preserved:** The prior finding's core direction remains right. Homegrown should learn from correction chains, where an earlier weak MVL/MVL+ result is corrected by the user and improved by a later run.

**What's changed:** `loop-diagnose` should not be treated as an individual discipline now. It should be treated as a diagnostic use of MVL/MVL+, with a lightweight protocol or template that shapes the input and expected output.

**What's new:** Git branches should become the substrate for candidate variants of Homegrown's fundamentals. Diagnostic and evaluation findings should remain the semantic memory that explains why a branch exists and whether it worked.

**Migration:** Replace the previous mental model of `loop-diagnose + self-maintenance ledger` with a staged hybrid model: diagnostic MVL+ findings first, lifecycle metadata or a small index when needed, git-backed branch experiments for actual source changes, and branch-selection automation later.

## Question

Should `loop-diagnose` be treated as a separate Homegrown discipline/protocol, or as a specialized MVL/MVL+ inquiry pattern; and can git branching replace or complement a self-maintenance ledger for evolving fundamentals?

The goal is to clarify the right architectural role for `loop-diagnose`, explain whether git is enough for self-maintenance memory, describe how branch-based evolutionary experimentation could work, and propose a practical near-term structure for diagnostics and self-maintenance artifacts.

## Finding Summary

- The user is right that `loop-diagnose` should not be a separate discipline at this stage. MVL/MVL+ remains the atomic cognitive method.

- `loop-diagnose` should mean "run MVL+ on a correction chain." The protocol can define the input contract and output sections, but MVL+ does the thinking.

- Diagnostic outputs should live as normal MVL+ inquiry folders under `devdocs/inquiries/diagnostics/<YYYY-MM-DD_HH-MM__slug>/`.

- A self-maintenance ledger does not need to be one giant file. Diagnostic `finding.md` files can be the main evidence records.

- Git is necessary but not sufficient. Git branches store executable variants of the fundamentals; diagnostic and evaluation findings store the reasons, evidence, gates, and decisions.

- The stronger architecture is git-backed evolution with Markdown-native evidence. A candidate branch should be created only when a diagnostic finding motivates an actual source change.

- Branch superiority must be earned by output evidence. A branch existing, compiling, or feeling cleaner is not enough.

## Finding

### 1. `loop-diagnose` is not the thing that thinks

MVL/MVL+ should remain the atomic cognitive operation.

`loop-diagnose` should be a named diagnostic use case for MVL+, not a new primitive discipline.

The diagnostic question is usually:

```text
Given an earlier weak inquiry, the user's correction, and a later improved inquiry,
what did the earlier loop likely miss, and what maintenance candidates follow?
```

That question naturally needs the whole MVL+ stack. Exploration maps the artifacts. Sensemaking frames the failure. Decomposition separates possible failure sources. Innovation proposes maintenance options. Critique tests attribution and patch candidates.

This means a `loop-diagnose` protocol can exist, but its job is operational. It should specify what inputs to read, how to frame the diagnostic MVL+ question, where to save the result, and what sections the final finding should include.

It should not be implemented as `homegrown/loop-diagnose/SKILL.md` yet. That would make it look like a new cognitive discipline before the project has enough examples to prove a distinct discipline exists.

### 2. Diagnostic findings can be the ledger records

The prior finding said "self-maintenance ledger." That phrase was too narrow if read as one central file.

The better interpretation is:

```text
ledger = maintenance lifecycle memory
```

That memory can be distributed across diagnostic findings, evaluation findings, branch metadata, and a small index if volume grows.

The existing folder `devdocs/inquiries/diagnostics/2026-04-27_tidy_loop_failure_attribution/` already proves the pattern. It is an MVL+ diagnostic inquiry. It compares a weak prior inquiry with a corrected later one. It attributes failure roles. It produces maintenance recommendations. It stores the result as a normal `finding.md`.

That is closer to the right Level 1 self-maintenance artifact than a single dense `devdocs/self_maintenance.md` file.

### 3. Git is the variant substrate, not the whole memory

Git is excellent for self-maintenance because it can hold candidate versions of the fundamentals.

A git branch can represent a variant of Homegrown:

```text
main = current baseline fundamentals
selfmaint/2026-04-27__critic_dimension_fix = candidate variant
```

That branch can change files under `homegrown/`, run inquiries with the changed fundamentals, and later be merged, stopped, or refined.

However, git by itself is not enough. Git records file state and diffs. It does not automatically record the correction chain that motivated the branch, the diagnosis, the risk class, the evaluation gate, the baseline-vs-candidate output comparison, or the decision rationale.

Commit messages can help, but they are not a reliable substitute for diagnostic and evaluation findings. The right use of git is to link commits and branches to evidence records, not to make git history carry all the evidence alone.

### 4. The evolutionary branch idea is valid

The user's branch-evolution idea is strong.

The future version could look like:

```text
diagnostic MVL+ finding
-> candidate git branch
-> fundamentals edit on that branch
-> run the same evaluation inquiries on baseline and candidate
-> compare outputs
-> merge / continue / stop / fork
```

This is structurally similar to evolution. The branch is the variant. The evaluation inquiries are the environment. The comparison finding is the selection event.

The important constraint is that selection must be evidence-bound. A branch is not superior because it is newer or more ambitious. It is superior only if it performs better on defined cases, under criteria that were stated before or during evaluation.

### 5. The near-term architecture should be staged

The corrected architecture is:

```text
diagnostic MVL+
+ loop_diagnose protocol/template
+ devdocs/inquiries/diagnostics/ records
+ optional lifecycle metadata/index
+ git-backed branch experiments
+ evaluation MVL+ for baseline-vs-candidate comparison
+ later meta-loop branch selection
```

The first stage is manual and simple. Run diagnostic MVL+ inquiries under `devdocs/inquiries/diagnostics/`.

The second stage adds lifecycle state. This can be frontmatter in diagnostic findings or a small index after there are at least three diagnostic findings or one active branch experiment.

The third stage adds git-backed branch experiments. Only create a branch when there is an actual source change to test.

The fourth stage adds baseline-vs-candidate evaluation. Run the same inquiry or evaluation set against `main` and the candidate branch, then compare outputs.

The fifth stage, later, lets meta-loop or another orchestrator manage branch traversal and selection. That should wait until manual branch experiments produce enough examples.

## Next Actions

### MUST

- **What:** Reinterpret `loop-diagnose` as a diagnostic MVL+ pattern, not a separate discipline.
  **Who:** Homegrown fundamentals maintainer.
  **Gate:** Before creating any `homegrown/loop-diagnose/SKILL.md`.
  **Why:** Preserves MVL/MVL+ as the atomic cognitive method and avoids premature primitive multiplication.

- **What:** Use `devdocs/inquiries/diagnostics/<YYYY-MM-DD_HH-MM__slug>/` for diagnostic MVL+ runs.
  **Who:** MVL+ runner or user-guided diagnostic pass.
  **Gate:** Starting with the next correction-chain diagnosis.
  **Why:** Reuses the existing inquiry/finding lifecycle while keeping diagnostic records separate and discoverable.

- **What:** Treat diagnostic `finding.md` files as the main self-maintenance evidence records.
  **Who:** CONCLUDE and future maintenance readers.
  **Gate:** Starting with the next diagnostic inquiry.
  **Why:** Keeps evidence, reasoning, confidence, and maintenance candidates in a readable artifact instead of compressing them into a ledger row.

- **What:** Use git branches only when a diagnostic finding motivates an actual fundamentals source change.
  **Who:** Implementation agent or maintainer.
  **Gate:** Before editing `homegrown/` or other fundamentals files based on a diagnosis.
  **Why:** Makes candidate variants testable and reversible without creating branches for analysis-only work.

- **What:** Link each maintenance branch to the diagnostic finding that motivated it.
  **Who:** Implementation agent or maintainer.
  **Gate:** At branch creation or first commit.
  **Why:** Prevents branch history from losing the reason the variant exists.

### COULD

- **What:** Add diagnostic frontmatter fields to future diagnostic findings.
  **Who:** CONCLUDE or a future `loop_diagnose` protocol.
  **Gate:** After one more diagnostic MVL+ finding is created.
  **Why:** Fields such as `maintenance_status`, `source_bad`, `source_improved`, `candidate_branch`, `baseline_branch`, `risk_class`, and `outcome` make diagnostics searchable without a heavy index.

- **What:** Create a small self-maintenance index.
  **Who:** Devdocs maintainer.
  **Gate:** After three diagnostic findings exist or after one active git maintenance branch exists.
  **Why:** An index is useful when there is enough lifecycle state to track; before that it is maintenance overhead.

- **What:** Define a branch-experiment template.
  **Who:** Homegrown protocol maintainer.
  **Gate:** Before the first candidate fundamentals branch is evaluated against baseline.
  **Why:** A branch experiment needs baseline branch, candidate branch, diagnostic source, changed files, evaluation inquiries, comparison rule, and outcome.

### DEFERRED

- **What:** Promote `loop-diagnose` to a full discipline.
  **Gate:** Reopen only after 5 to 10 diagnostic MVL+ findings show a stable internal operation that cannot be explained as ordinary MVL+ on a diagnostic question.
  **Why (if revived):** A full discipline may become justified if failure attribution develops its own repeatable cognitive method.

- **What:** Build autonomous evolutionary branch selection.
  **Gate:** Reopen only after at least three branch experiments have baseline-vs-candidate evaluation findings.
  **Why (if revived):** Those records are needed to design a non-arbitrary selection rule.

- **What:** Let a candidate branch continue its own runtime without baseline supervision.
  **Gate:** Reopen only after branch experiments have clear stop/merge/revert rules and the baseline can compare outputs reproducibly.
  **Why (if revived):** Independent branch runtime is powerful, but without supervision it risks drift rather than improvement.

## Reasoning

The staged hybrid architecture survived because it keeps the useful parts of every strong idea.

The `loop-diagnose` protocol survived because it standardizes diagnostic MVL+ without pretending to be a new discipline. It can define inputs and output requirements while MVL+ remains the reasoning engine.

The diagnostics folder survived because it already exists and works. The `2026-04-27_tidy_loop_failure_attribution` inquiry is evidence that diagnostic MVL+ findings can store failure analysis clearly.

The distributed-ledger model survived because diagnostic findings can carry detailed evidence better than a central table. A small index may still become useful, but only after enough records exist.

Git-backed maintenance experiments survived as the next-stage architecture. Git is the right tool for candidate fundamentals branches, diffs, merges, and reverts.

Git-only self-maintenance was killed as a complete approach. It loses the semantic lifecycle: why a change exists, what correction chain motivated it, how it was evaluated, and why it won or lost.

Markdown-only self-maintenance was killed as a complete approach. It can explain changes, but it cannot isolate executable variants or compare branch-specific runtime behavior.

A full `loop-diagnose` discipline was deferred. It may become valid later, but creating it now would violate the atomic-loop principle and harden a pattern before there are enough examples.

An autonomous evolutionary meta-loop was deferred. It is conceptually aligned with the user's branch-evolution idea, but selection criteria are not ready. Automated branch selection without evaluation records would multiply uncertainty.

The central contradiction was resolved by separating responsibilities. MVL+ thinks. A diagnostic protocol frames a task. Findings preserve semantic evidence. Git branches preserve executable variants. Evaluation findings decide which variant deserves to survive.

## Open Questions

### Monitoring

- After three diagnostic MVL+ findings, check whether frontmatter search is enough or whether a small self-maintenance index is needed.

- After the first candidate maintenance branch, check whether the branch can be linked clearly to one diagnostic finding and one evaluation finding.

### Blocked

- Branch-selection criteria are blocked until at least one baseline-vs-candidate evaluation has been run.

- A full `loop-diagnose` discipline is blocked until 5 to 10 diagnostic MVL+ findings reveal whether a distinct internal method exists.

### Research Frontiers

- It is still unknown what "branch superiority" should mean for cognitive fundamentals. Possible criteria include fewer user corrections, stronger critique, better preservation of context, fewer CONCLUDE failures, and better external validation outputs.

### Refinement Triggers

- Reopen this finding if diagnostic MVL+ repeatedly fails to localize failures better than ordinary reflection.

- Reopen this finding if git branch experiments produce useful evidence faster than diagnostic findings can capture it.

- Reopen this finding if the diagnostics folder becomes hard to search before three diagnostic findings exist.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 

in devdocs/inquiries/2026-04-27_21-14__rapid_fundamentals_improvement_focus/finding.md u mention

The comparative diagnosis step can be called loop-diagnose. Its job is to inspect a correction chain and produce evidence-backed maintenance candidates. It should not pretend to identify exact root cause when the evidence is weak.

The self-maintenance ledger is the durable memory. Each ledger entry should record trigger, evidence, diagnosis, proposed change, affected files, risk class, evaluation gate, and final outcome.

but our atomic run method is MVL, and loop diagnose is just an MVL+ loop which compares 2 inquiries and finds the source of errors.. or u think it should be individual discipline?  

also u are talking about self-maintenance ledger ,  we already have a git, isnt it enough? i think when system advances , using git to create a new branch, make fundemental edits there and continue it's own runtime there should be a capability worthy.  original brnach can also compare and evaulate new branches outputs and validate it's superiority in certain ways.  just like evolution there cna be many branches each are evolved in a unique way and there can be a conseous about who is worse and should be stopped based on output evidence... 

but i understand ur self-maintenance ledger cna be just finding md files, targeting self maintainance... and we can keep them seperately just like devdocs/inquiries/diagnostics does?
```

Pasted MVL skill body omitted from this block for length; it was used as contextual evidence that MVL is intended as the atomic run method.

</details>
