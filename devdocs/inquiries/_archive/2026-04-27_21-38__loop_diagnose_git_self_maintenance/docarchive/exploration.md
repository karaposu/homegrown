# Exploration: Loop Diagnose and Git Self-Maintenance

## User Input

`devdocs/inquiries/2026-04-27_21-38__loop_diagnose_git_self_maintenance/_branch.md`

## 1. Mode and Entry Point

- **Mode:** Mixed artifact + possibility exploration.
- **Entry point:** Signal-first. The user challenged two parts of the prior finding: whether `loop-diagnose` should be its own thing, and whether git already supplies the self-maintenance ledger substrate.

Artifacts scanned:

- `devdocs/inquiries/2026-04-27_21-14__rapid_fundamentals_improvement_focus/finding.md`
- `devdocs/inquiries/_archive/comparative_mvl_loop_diagnosis/finding.md`
- `devdocs/inquiries/_archive/autonomous_continuous_self_maintenance_levels/finding.md`
- `devdocs/inquiries/diagnostics/2026-04-27_tidy_loop_failure_attribution/finding.md`
- `homegrown/MVL+/SKILL.md`
- `homegrown/meta-loop/SKILL.md`
- Git branch/log state in the local repository.

## 2. Exploration Cycles

### Cycle 1: Prior Finding Probe

#### Scan

The rapid-fundamentals finding recommended:

```text
bad run + correction + improved run
-> comparative diagnosis
-> self-maintenance ledger entry
-> small fundamentals patch
-> future retain/revert/refine decision
```

It also suggested `homegrown/protocols/loop_diagnose.md` and `devdocs/self_maintenance.md`.

#### Signals Detected

1. **The wording may over-imply a separate operation.** Saying "the comparative diagnosis step can be called `loop-diagnose`" could make it sound like a new discipline.
2. **The ledger wording may over-imply one monolithic file.** The user correctly points out that diagnostic findings can themselves be ledger-like records.
3. **The git branch idea introduces a stronger evolutionary substrate.** Git can represent variant fundamentals, not only a changelog.

#### Resolution Decision

Zoom into older findings that already discussed the status of `loop-diagnose`.

#### Probe

`comparative_mvl_loop_diagnosis` already says `loop-diagnose` should start as a lightweight protocol/template and not become a full discipline until it works on several real correction chains.

This supports the user's correction. `loop-diagnose` is not a new cognitive primitive if MVL/MVL+ is the atomic run method. It is better understood as a named diagnostic use of MVL+, with a constrained input/output contract.

#### Frontier State

The first correction is stable: `loop-diagnose` should not be treated as a separate discipline now.

#### Confidence Map Update

- `loop-diagnose` as full discipline now: downgraded.
- `loop-diagnose` as MVL+ diagnostic inquiry pattern: confirmed.
- `loop-diagnose` as protocol wrapper/template: confirmed.

### Cycle 2: Existing Diagnostic Inquiry Probe

#### Scan

The existing diagnostic inquiry `devdocs/inquiries/diagnostics/2026-04-27_tidy_loop_failure_attribution/finding.md` already did what `loop-diagnose` is supposed to do:

- compared an earlier bad inquiry against a later correction;
- inspected archived discipline outputs;
- attributed failure roles with confidence;
- produced maintenance recommendations;
- stored the result as a normal MVL+ finding under `devdocs/inquiries/diagnostics/`.

#### Signals Detected

1. **The project already has a working diagnostic artifact pattern.**
2. **The output is a finding, not a special ledger row.**
3. **The diagnostic folder is a good home for these records.**
4. **The finding format already carries lineage, evidence, reasoning, and next actions.**

#### Resolution Decision

Treat `devdocs/inquiries/diagnostics/` as evidence that diagnostics can remain MVL+/finding-native.

#### Probe

The diagnostic finding states that the failure should not yet become an automatic protocol until several corrected loops show repeating categories. That is consistent with the user's concern that exact attribution is advanced analysis.

#### Frontier State

The folder pattern is confirmed: diagnostics can be inquiry folders, and their `finding.md` files can be maintenance evidence.

#### Confidence Map Update

- `devdocs/inquiries/diagnostics/` as diagnostic store: confirmed.
- single `devdocs/self_maintenance.md` as the only ledger: downgraded.
- "ledger" as an abstract index/lifecycle state, possibly backed by finding files: confirmed.

### Cycle 3: Git as Self-Maintenance Substrate

#### Scan

Local git state:

- current branch: `main`;
- recent commits are generic (`edit`, `cleaning`, `add skill folder`);
- working tree has an untracked `.codex/` directory.

Git already provides:

- snapshots of file state;
- branches for alternative fundamentals;
- diffs for what changed;
- merge/revert mechanics;
- commit graph history.

Git does not automatically provide:

- why a branch was created;
- which correction chain motivated it;
- what claim the branch is testing;
- which inquiries were used as evaluation cases;
- whether the branch's outputs were better;
- who decided to merge, stop, or refine it;
- risk class and autonomy boundary.

#### Signals Detected

1. **Git is necessary for serious self-maintenance.** Any real fundamentals mutation should be versioned.
2. **Git is insufficient as the whole ledger.** It records file evolution, but not enough structured diagnostic/evaluation context unless that context is also written somewhere.
3. **Branch evolution is a strong future architecture.** Branches can represent candidate variants of the cognitive system.
4. **Branch evolution needs a selection protocol.** Without an evaluation corpus and branch lifecycle records, branches become uncontrolled drift.

#### Resolution Decision

Separate "state substrate" from "evidence substrate."

#### Probe

Git branch = candidate genome or implementation variant.

Diagnostic finding = why the variant exists and what it is supposed to fix.

Evaluation findings = phenotype evidence: what outputs the variant produced and how they compared against baseline.

Maintenance index = current lifecycle view: open/evaluating/retained/reverted/stopped/refined.

#### Frontier State

Git should complement the maintenance ledger, not replace it.

#### Confidence Map Update

- Git as branch substrate: confirmed.
- Git as complete self-maintenance ledger: rejected.
- Git + diagnostic findings + evaluation findings + index: confirmed promising.

### Cycle 4: Meta-Loop and Evolutionary Branching

#### Scan

`homegrown/meta-loop/SKILL.md` defines a sequential human-selected traversal engine:

```text
seed + context
-> MVL+
-> Navigation
-> human selects next move
-> MVL+
-> update _meta_state.md
```

It explicitly does not support autonomous multi-head execution yet. It can move forward, backward, sideways, downward, upward, across, branch, merge, or stop conceptually, but v1 is sequential and human-selected.

#### Signals Detected

1. **The user's git-branch evolution idea fits the larger meta-loop direction.**
2. **The current meta-loop does not yet have the branch comparison/selection machinery.**
3. **A branch-evolution system would need both git branches and inquiry branches.**
4. **The "selection" layer is where evidence and consensus belong.**

#### Resolution Decision

Map branch evolution as a future Level 2/3 maintenance capability, not the first small implementation.

#### Probe

A future version could work like:

```text
diagnostic finding
-> create maintenance branch
-> edit fundamentals on that branch
-> run same evaluation inquiries on baseline and candidate
-> compare outputs
-> decide merge / keep evaluating / stop / fork another branch
```

The comparison could be done by MVL+ too. But it needs stable inputs, output criteria, and branch state to avoid subjective drift.

#### Frontier State

The git-evolution idea is viable and important, but it belongs one level above basic diagnostic records.

#### Confidence Map Update

- Branch evolution as near-term conceptual direction: confirmed.
- Branch evolution as replacement for diagnostic/ledger artifacts: rejected.
- Branch evolution as Level 2/3 mechanism after Level 1 records exist: confirmed.

### Jump Scan: Opposite Possibility

#### Scan

Opposite possibility: make `loop-diagnose` a full new discipline now, with its own `SKILL.md`, references, telemetry, and failure modes.

#### Result

This is premature. A full discipline is justified when the operation is a reusable cognitive primitive. Current evidence suggests `loop-diagnose` is a task type: an MVL+ run aimed at a diagnostic comparison. The project should gather more diagnostic findings before deciding whether a distinct discipline exists inside that work.

#### Confidence

High confidence that full discipline status is premature.

## 3. Territory Overview

Major regions:

1. **Atomic cognition layer**
   - MVL/MVL+ remains the atomic run method.
   - `loop-diagnose` should use MVL+ unless the diagnostic question is simple enough for MVL.

2. **Protocol/template layer**
   - `loop-diagnose` can be a protocol or inquiry recipe that defines inputs, expected comparison focus, and output requirements.
   - It does not need to be a discipline.

3. **Diagnostic artifact layer**
   - `devdocs/inquiries/diagnostics/<folder>/finding.md` can store diagnostic findings.
   - This may be better than a single giant ledger file for evidence-heavy analysis.

4. **Lifecycle/index layer**
   - A self-maintenance ledger can be a small index or state file pointing to diagnostic findings, branches, patches, and evaluation outcomes.
   - It does not need to contain all evidence inline.

5. **Git branch layer**
   - Git branches can represent candidate evolved fundamentals.
   - Git is strong for file-state versioning and weak for semantic evidence unless paired with docs.

6. **Selection/evaluation layer**
   - Branch comparison requires shared evaluation inquiries, output criteria, and decisions.
   - This is where future evolutionary selection logic belongs.

## 4. Inventory

### Confirmed Existing Assets

- MVL+ as a fixed extended loop.
- `devdocs/inquiries/diagnostics/2026-04-27_tidy_loop_failure_attribution/` as an actual diagnostic MVL+ output.
- Git repository with branch mechanics.
- Meta-loop concept that can eventually traverse, branch, merge, and compare.

### Missing or Thin Assets

- No `homegrown/protocols/loop_diagnose.md` yet.
- No branch-experiment protocol.
- No evaluation corpus for comparing branch variants.
- No self-maintenance index or lifecycle state file.
- No stable rule for when a diagnostic finding opens a maintenance branch.

## 5. Signal Log

| Signal | Source | Probed? | Confidence | Meaning |
|---|---|---:|---:|---|
| MVL/MVL+ is atomic | User input + MVL/MVL+ specs | Yes | Confirmed | `loop-diagnose` should not become a primitive discipline now. |
| Diagnostic MVL+ already works | `devdocs/inquiries/diagnostics/...` | Yes | Confirmed | Store diagnostics as inquiry findings. |
| Git is powerful for variants | Git model + user hypothesis | Yes | Confirmed | Branches can represent alternative evolved fundamentals. |
| Git is not enough as ledger | Git scan | Yes | Confirmed | Git lacks structured why/evidence/evaluation/outcome fields. |
| Branch evolution fits meta-loop future | `homegrown/meta-loop/SKILL.md` | Yes | Confirmed | Future selection layer can compare branch variants. |
| Full `loop-diagnose` discipline now | Jump scan | Yes | Rejected | Premature before repeated diagnostic examples. |

## 6. Confidence Map

- **Confirmed:** `loop-diagnose` should be an MVL+/MVL diagnostic inquiry pattern first.
- **Confirmed:** A protocol/template may still be useful to standardize inputs and outputs.
- **Confirmed:** Diagnostic findings can function as the main evidence records.
- **Confirmed:** Git branches are valuable for candidate fundamentals variants.
- **Confirmed:** Git alone is not enough because it stores diffs, not the reasoning/evaluation lifecycle.
- **Scanned:** Branch evolution can become a strong future self-maintenance capability.
- **Unknown:** Exact branch-selection metrics for comparing two cognitive-system variants.
- **Unknown:** Whether a single index file or per-diagnostic frontmatter is the best lifecycle view.

## 7. Frontier State

Exploration is converged enough for sensemaking.

The stable hypothesis is:

```text
loop-diagnose = MVL+ diagnostic inquiry pattern + protocol/template
self-maintenance ledger = lifecycle/index over diagnostic findings + git branches + evaluation outcomes
git = versioned branch substrate, not semantic memory by itself
```

## 8. Gaps and Recommendations

Recommendations for Sensemaking:

- Preserve the user's correction that MVL/MVL+ is the atomic method.
- Define `loop-diagnose` as a named diagnostic use of MVL+, not a new discipline.
- Reinterpret the "ledger" as a lifecycle/index concept, not necessarily one Markdown file.
- Treat git branches as the future evolutionary substrate for candidate fundamentals, but require diagnostic/evaluation artifacts for selection.
- Propose a staged path: diagnostic findings first, branch experiments second, branch-selection meta-loop later.
