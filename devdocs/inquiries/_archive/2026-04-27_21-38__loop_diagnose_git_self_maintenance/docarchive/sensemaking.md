# Sensemaking: Loop Diagnose and Git Self-Maintenance

## User Input

`devdocs/inquiries/2026-04-27_21-38__loop_diagnose_git_self_maintenance/_branch.md`

## SV1 - Baseline Understanding

Initial interpretation: the prior finding was directionally right about needing diagnosis and maintenance memory, but too imprecise about implementation. `loop-diagnose` should probably not be a separate discipline if MVL/MVL+ is the atomic cognitive operation. Git is a powerful substrate for self-maintenance, but it likely cannot replace explicit diagnostic and evaluation artifacts.

The main task is to separate four things that were partially collapsed:

- the cognitive run method;
- the diagnostic task pattern;
- the semantic maintenance record;
- the versioned implementation branch.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- MVL or MVL+ is intended to be the atomic run method.
- A diagnostic comparison is itself hard reasoning, so it can be run through MVL+.
- Homegrown already has one diagnostic MVL+ inquiry under `devdocs/inquiries/diagnostics/`.
- Git exists and can store branches, diffs, commits, merges, and reverts.
- Git does not automatically store structured causal diagnosis, evaluation gates, risk class, or outcome decisions.
- Full autonomous branch evolution is not yet implemented in the meta-loop.
- The near-term design should not create premature new disciplines.

### Key Insights

- `loop-diagnose` is best understood as a **named MVL+ task type**, not as a new cognitive primitive.
- A protocol can still be valuable even if it is not a discipline. It can define inputs, output shape, and folder placement.
- A self-maintenance "ledger" does not have to mean one giant Markdown file. It can mean a lifecycle system whose records are diagnostic findings, experiment findings, branch references, and an index.
- Git records **what changed** better than Markdown does.
- Diagnostic findings record **why change is being considered** better than git does.
- Evaluation findings record **whether the change worked** better than either raw commits or branch names.
- Branch evolution is a real future direction, but it needs selection evidence or it becomes uncontrolled divergence.

### Structural Points

| Layer | Role | Primary Artifact |
|---|---|---|
| Atomic cognition | Run thinking | MVL / MVL+ inquiry |
| Diagnostic recipe | Shape a diagnostic use of MVL+ | `loop-diagnose` protocol/template |
| Evidence record | Explain failure and proposed maintenance | diagnostic `finding.md` |
| Lifecycle index | Track open/evaluating/retained/stopped status | self-maintenance index |
| Versioned variant | Hold changed fundamentals | git branch |
| Selection/evaluation | Compare baseline vs candidate behavior | evaluation inquiry/finding |

### Foundational Principles

- Do not multiply cognitive primitives unless an operation cannot be expressed as MVL/MVL+.
- Keep git responsible for file-state evolution, not semantic explanation.
- Keep findings responsible for argument, evidence, and selection rationale.
- Keep branch evolution evidence-bound.
- Prefer a distributed ledger of findings plus an index over a single dense maintenance file if evidence is large.

### Meaning-Nodes

- Atomic run method
- Diagnostic MVL+
- Protocol versus discipline
- Git branch evolution
- Semantic evidence
- Maintenance lifecycle
- Evolutionary selection
- Branch superiority

## SV2 - Anchor-Informed Understanding

The problem is not whether to choose MVL+ or `loop-diagnose`. `loop-diagnose` should be a constrained use of MVL+, just as "diagnostic inquiry" is a task type rather than a separate cognitive engine.

The problem is also not whether to choose git or a ledger. Git and ledger-like records answer different questions. Git answers "what file state existed?" and "how did it change?" The maintenance record answers "why was this variant created?", "what was it supposed to improve?", "how was it evaluated?", and "why was it merged, stopped, or refined?"

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

`loop-diagnose` compares artifacts and reasons about causes. That work naturally needs Exploration, Sensemaking, Decomposition, Innovation, and Critique when the correction chain is complex. Therefore MVL+ is the right internal engine.

New anchor: `loop-diagnose` should be a protocol wrapper around MVL+, not a replacement for MVL+.

### Human / User Perspective

The user does not want unnecessary new abstractions. They want the system to stay aligned with the actual workflow: run MVL, correct it, rerun it, then diagnose what the earlier run missed.

New anchor: the design should name what the user already does rather than invent a parallel process.

### Strategic / Long-Term Perspective

Git branch evolution is strategically important. A future system could create candidate fundamentals branches, run them on evaluation inquiries, compare outputs, and kill or merge weaker variants.

New anchor: branch evolution is a future self-maintenance capability, not a reason to delete diagnostic records.

### Risk / Failure Perspective

If git replaces the ledger entirely, the system loses structured evidence. Commit messages can carry some context, but they are weak as the main memory because they are compact, inconsistent, and oriented around file diffs.

If docs replace git entirely, the system loses operational version control. It can explain change but cannot safely branch, diff, merge, or revert the runtime fundamentals.

New anchor: self-maintenance needs both semantic memory and versioned state.

### Resource / Feasibility Perspective

The lowest-cost next step is not building autonomous branch evolution. It is to keep using MVL+ diagnostic inquiries under `devdocs/inquiries/diagnostics/`, add consistent frontmatter or sections, and optionally maintain a small index.

New anchor: branch evolution should be designed from diagnostic records after several cases exist.

### Definitional / Consistency Perspective

A discipline is a reusable cognitive operation like Sensemaking or Critique. A protocol is an operational recipe or lifecycle rule. A runner is an orchestrator. A diagnostic inquiry is a use case.

`loop-diagnose` currently fits protocol/use-case better than discipline. It may later become a discipline only if repeated examples reveal a stable internal operation that is not simply MVL+ applied to a diagnostic question.

New anchor: classification should follow mechanism, not naming convenience.

## SV3 - Multi-Perspective Understanding

The model shifts from "create loop-diagnose plus ledger" to a more precise layered architecture:

```text
MVL+ = atomic diagnostic engine
loop-diagnose = protocol/template for diagnostic MVL+ inquiries
diagnostic finding = semantic evidence record
self-maintenance index = lifecycle view across records
git branch = candidate implementation variant
evaluation MVL+ = branch selector evidence
```

This preserves the previous finding's purpose but corrects its implementation implication.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Is `loop-diagnose` an individual discipline?

**Strongest counter-interpretation:** Yes. Failure attribution has a distinct purpose and may need its own concepts, categories, telemetry, and failure modes. That sounds like a discipline.

**Why the counter-interpretation fails (structural grounds):** A discipline should be a cognitive operation that cannot be reduced to applying the existing loop to a different question. Current diagnostic work already uses all of MVL+'s components: Exploration maps artifacts, Sensemaking frames the failure, Decomposition separates sources, Innovation proposes maintenance paths, and Critique tests attributions. That means the existing loop is the engine.

**Confidence:** HIGH.

**Resolution:** `loop-diagnose` should not be a separate discipline now. It should be a named diagnostic MVL+ inquiry pattern, possibly supported by a protocol/template.

**What is now fixed?** MVL/MVL+ remains the atomic method.

**What is no longer allowed?** Treating `loop-diagnose` as a new primitive unless repeated diagnostic examples show a genuinely distinct internal operation.

**What now depends on this choice?** Implementation should focus on folder conventions, input contract, and finding sections instead of a new `SKILL.md`.

**What changed in the conceptual model?** `loop-diagnose` moves from "component" to "mode of use."

### Ambiguity: Is a self-maintenance ledger redundant because git exists?

**Strongest counter-interpretation:** Yes. Git already stores branches, diffs, commits, and reverts. A separate ledger duplicates version history and adds maintenance overhead.

**Why the counter-interpretation fails (structural grounds):** Git stores file-state history. It does not inherently store the correction chain, failure diagnosis, risk class, evaluation gate, output comparison, or selection rationale. Those are semantic lifecycle fields. They can be stored in files that git versions, but git itself is not the semantic ledger.

**Confidence:** HIGH.

**Resolution:** Git complements but does not replace maintenance records.

**What is now fixed?** Self-maintenance needs both git state and semantic evidence.

**What is no longer allowed?** Treating a branch or commit alone as proof that a self-maintenance change was justified or successful.

**What now depends on this choice?** Branch experiments need linked diagnostic and evaluation docs.

**What changed in the conceptual model?** The ledger becomes a semantic layer stored inside git, not an alternative to git.

### Ambiguity: Must the ledger be one file named `devdocs/self_maintenance.md`?

**Strongest counter-interpretation:** Yes. A single ledger file is easy to find, append, scan, and audit.

**Why the counter-interpretation fails (structural grounds):** Diagnostic records can be evidence-heavy. A single file would either become too dense or force evidence to be summarized away. The project already has a working diagnostic inquiry folder, and finding files already support evidence, reasoning, next actions, lineage, and raw input.

**Confidence:** MEDIUM-HIGH.

**Resolution:** The ledger can be distributed. Diagnostic findings can be the primary evidence records, with a small index or lifecycle state file if needed.

**What is now fixed?** "Ledger" means maintenance lifecycle memory, not necessarily a monolithic document.

**What is no longer allowed?** Assuming `devdocs/self_maintenance.md` must contain all diagnosis and evidence inline.

**What now depends on this choice?** The near-term implementation can use `devdocs/inquiries/diagnostics/` as the main storage location.

**What changed in the conceptual model?** `devdocs/self_maintenance.md` becomes optional as an index, not mandatory as the whole ledger.

### Ambiguity: Can git branches become an evolutionary self-maintenance system?

**Strongest counter-interpretation:** No. Git branches are a developer tool, not a cognitive-evolution mechanism.

**Why the counter-interpretation fails (structural grounds):** A branch can hold a distinct version of the fundamentals. If the same evaluation inquiries are run against baseline and candidate branches, their outputs can be compared. That is structurally similar to variant generation and selection.

**Confidence:** HIGH for the concept, MEDIUM for near-term implementation.

**Resolution:** Git branch evolution is a valid future self-maintenance architecture, but it requires evaluation protocols before it can be reliable.

**What is now fixed?** Branches can represent candidate evolved fundamentals.

**What is no longer allowed?** Equating branch existence with branch superiority.

**What now depends on this choice?** A future branch-experiment protocol should define baseline, candidate branch, patch, evaluation inquiries, comparison method, and stop/merge/refine rules.

**What changed in the conceptual model?** Git becomes an evolutionary substrate, not merely a backup or changelog.

## SV4 - Clarified Understanding

The corrected model is:

```text
loop-diagnose is not a new discipline.
loop-diagnose is a diagnostic MVL+ pattern.
diagnostic findings are the main evidence records.
a self-maintenance ledger is a lifecycle/index concept.
git branches are candidate variants of the fundamentals.
branch superiority requires output evidence, not just commits.
```

The prior finding's goal survives, but its implementation should be clarified. The next step is not "build a loop-diagnose discipline and a single ledger file." The next step is "standardize diagnostic MVL+ inquiries and link them to git-backed maintenance experiments when source changes are made."

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- MVL/MVL+ remains the atomic cognitive run.
- `loop-diagnose` begins as a protocol/template for diagnostic MVL+ inquiries.
- Diagnostic outputs should live naturally under `devdocs/inquiries/diagnostics/<YYYY-MM-DD_HH-MM__slug>/`.
- Git branches should be used for actual fundamentals variants.
- Semantic evidence must remain in Markdown artifacts tracked by git.

### Eliminated

- Creating `loop-diagnose` as a full separate discipline now.
- Replacing all maintenance records with git history alone.
- Treating `devdocs/self_maintenance.md` as necessarily monolithic.
- Claiming branch evolution can select superior variants before evaluation criteria exist.

### Still Viable

- A small `homegrown/protocols/loop_diagnose.md` that says how to run diagnostic MVL+.
- A small maintenance index file that points to diagnostics and branch experiments.
- A future branch-experiment protocol.
- A future meta-loop branch selector after enough evaluation data exists.

## SV5 - Constrained Understanding

The solution space is now organized into three implementation levels:

1. **Now:** Diagnostic MVL+ inquiries under `devdocs/inquiries/diagnostics/`.
2. **Next:** Git-backed maintenance branches linked to diagnostic findings and evaluation findings.
3. **Later:** Evolutionary branch selection where baseline and candidate branches are compared over a shared evaluation corpus.

The practical correction to the previous finding is:

```text
Do not create a new loop-diagnose discipline.
Do create a loop-diagnose protocol/recipe for running MVL+ on correction chains.
Do not rely on git alone as a ledger.
Do use git branches as candidate-evolution substrates.
Do store diagnostics/evaluations as finding.md files, with an index if needed.
```

## SV6 - Stabilized Model

The stabilized model is a layered self-maintenance architecture:

```text
MVL/MVL+ = cognition primitive
loop-diagnose = diagnostic use-case protocol
diagnostic finding = semantic evidence
self-maintenance index = lifecycle memory
git branch = executable candidate variant
evaluation finding = selection evidence
meta-loop later = traversal and branch-selection orchestrator
```

This differs from SV1 by making the correction sharper. The prior finding did not need to be abandoned, but it should be rephrased: `loop-diagnose` is not the thing that thinks. MVL+ thinks. `loop-diagnose` names the diagnostic job MVL+ is being asked to do.

Git is not "enough" by itself, but the user's branch-evolution idea is stronger than a plain ledger. The best architecture is not ledger versus git. It is git-backed evolution with Markdown-native diagnostic and evaluation records that make branch selection legible.
