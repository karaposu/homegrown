# Innovation: Loop Diagnose and Git Self-Maintenance

## User Input

`devdocs/inquiries/2026-04-27_21-38__loop_diagnose_git_self_maintenance/_branch.md`

## Seed

The user is challenging a prior architecture: maybe `loop-diagnose` should not be a separate discipline at all because MVL is the atomic run method; maybe git branches are a stronger self-maintenance substrate than a separate ledger; maybe diagnostic `finding.md` files can themselves be the ledger.

Valuation signal: keep Homegrown coherent. Do not create abstractions that compete with MVL/MVL+. Do not ignore git's evolutionary power. Do not lose semantic evidence in raw branch history.

## 1. Mechanism Variations

### 1. Lens Shifting

**Generic variation:** View `loop-diagnose` as a task, not a tool.

- Candidate: "diagnostic MVL+".
- New frame: the same loop can answer ordinary questions or diagnostic questions depending on input and output contract.

**Focused variation:** View the ledger as a lifecycle view, not a storage file.

- Candidate: a small self-maintenance index over diagnostic findings, git branches, and evaluation findings.
- New frame: the record can be distributed while the lifecycle remains legible.

**Contrarian variation:** View git branches as living variants, not only version history.

- Candidate: branch-based fundamentals experiments.
- New frame: branches can become the evolutionary substrate once evaluation exists.

### 2. Combination

**Generic variation:** Combine MVL+ and diagnostic folder conventions.

- Candidate: `loop-diagnose` as a protocol that creates `devdocs/inquiries/diagnostics/<timestamp__slug>/`.
- Emergent value: no new discipline, but consistent diagnostic artifacts.

**Focused variation:** Combine git branch, diagnostic finding, and evaluation finding.

- Candidate: maintenance experiment bundle.
- Emergent value: branch stores the candidate implementation; findings store why and whether it worked.

**Contrarian variation:** Combine meta-loop with git branch selection later.

- Candidate: evolutionary meta-loop selector.
- Emergent value: future meta-loop can traverse variant branches and evidence records, not just inquiry topics.

### 3. Inversion

**Generic variation:** Instead of "make `loop-diagnose` smarter," ask "what if `loop-diagnose` should not think at all?"

- Candidate: protocol-only `loop-diagnose`.
- Result: MVL+ remains the thinker; the protocol just frames the diagnostic problem.

**Focused variation:** Instead of "ledger records changes," ask "ledger records selection pressure."

- Candidate: maintenance index records what a branch was competing to improve and how it was judged.
- Result: the ledger becomes evolutionary memory, not a changelog.

**Contrarian variation:** Instead of "merge the better branch," ask "keep multiple branches alive until evaluation differentiates them."

- Candidate: branch population mode.
- Result: useful later, but premature without branch lifecycle controls.

### 4. Constraint Manipulation

**Generic variation:** Add constraint: no new discipline unless repeated cases prove it.

- Candidate: protocol/template first.
- Effect: prevents premature primitive multiplication.

**Focused variation:** Add constraint: git branch only when source files change.

- Candidate: diagnostic-only records for analysis; branch experiments for actual variant testing.
- Effect: avoids creating branches for every thought.

**Contrarian variation:** Add constraint: no branch superiority claim without shared evaluation cases.

- Candidate: baseline-versus-candidate evaluation MVL+.
- Effect: converts branch evolution from metaphor into testable process.

### 5. Absence Recognition

**Generic variation:** What is missing between diagnostics and git?

- Missing: a link object that says which diagnostic finding caused which branch.
- Candidate: branch experiment frontmatter or index entry.

**Focused variation:** What is missing from git history?

- Missing: evaluation gate and output comparison.
- Candidate: evaluation finding linked to branch.

**Contrarian variation:** What is missing from diagnostic findings?

- Missing: branch lifecycle state.
- Candidate: frontmatter fields such as `maintenance_status`, `candidate_branch`, `baseline_branch`, `risk_class`, and `outcome`.

### 6. Domain Transfer

**Generic variation:** Transfer from scientific experiments.

- Candidate: each branch is an experimental condition; baseline is the control; evaluation inquiries are test cases.
- Adaptation: outputs are qualitative findings, so comparison must include human or rubric-based judgment.

**Focused variation:** Transfer from evolutionary algorithms.

- Candidate: fundamentals branch population with selection pressure.
- Adaptation: do not automate reproduction/selection until there is a stable fitness function.

**Contrarian variation:** Transfer from clinical trials.

- Candidate: do not promote a branch after one good result; require staged gates.
- Adaptation: use small N at first, then increase evaluation cases for higher-risk changes.

### 7. Extrapolation

**Generic variation:** If diagnostics grow, a single ledger file becomes dense.

- Candidate: distributed diagnostic findings plus index.

**Focused variation:** If branches multiply, branch state becomes invisible without docs.

- Candidate: self-maintenance index tracking active/stopped/merged branches.

**Contrarian variation:** If branch evolution succeeds, future Homegrown may need branch governance.

- Candidate: selector protocol or meta-loop extension that compares variants and stops weak branches.

## 2. Candidate Architectures

### A. Full `loop-diagnose` Discipline Now

Create `homegrown/loop-diagnose/SKILL.md` with its own reference framework.

- Novelty: medium.
- Scrutiny: weak now; it violates the atomic MVL/MVL+ principle.
- Fertility: possible later.
- Actionability: medium.
- Mechanism independence: low.
- Verdict: defer.

### B. `loop-diagnose` Protocol That Runs MVL+

Create `homegrown/protocols/loop_diagnose.md` as a recipe: how to frame the diagnostic MVL+ question, what inputs to include, and what sections the finding must contain.

- Novelty: medium.
- Scrutiny: strong.
- Fertility: high.
- Actionability: high.
- Mechanism independence: high.
- Verdict: survives.

### C. Diagnostics Folder as Ledger

Store each diagnostic run as a normal MVL+ inquiry under `devdocs/inquiries/diagnostics/`.

- Novelty: low to medium.
- Scrutiny: strong because it already exists in one case.
- Fertility: high.
- Actionability: high.
- Mechanism independence: medium.
- Verdict: survives, but needs lifecycle indexing if volume grows.

### D. Git-Only Self-Maintenance

Use git branches, commits, and diffs as the entire maintenance ledger.

- Novelty: low.
- Scrutiny: weak; git does not capture semantic diagnosis and evaluation by default.
- Fertility: medium.
- Actionability: high for developers, low for cognitive traceability.
- Mechanism independence: low.
- Verdict: kill as complete replacement.

### E. Markdown-Only Self-Maintenance

Use diagnostic and maintenance docs without git branches.

- Novelty: low.
- Scrutiny: weak for actual source evolution; docs cannot isolate and compare runtime variants.
- Fertility: medium.
- Actionability: medium.
- Mechanism independence: low.
- Verdict: kill as complete approach.

### F. Git-Backed Maintenance Experiments

When a diagnostic finding recommends a fundamentals change, create a candidate git branch, apply the change there, run baseline-vs-candidate evaluation inquiries, and decide merge / continue / stop / refine.

- Novelty: high.
- Scrutiny: strong if evaluation is defined.
- Fertility: very high.
- Actionability: medium now, high later.
- Mechanism independence: high.
- Verdict: survives as next-stage architecture.

### G. Distributed Ledger Plus Small Index

Use diagnostic findings as full records and maintain a lightweight index or frontmatter convention for lifecycle state.

- Novelty: medium.
- Scrutiny: strong.
- Fertility: high.
- Actionability: high.
- Mechanism independence: high.
- Verdict: survives as near-term storage model.

### H. Evolutionary Meta-Loop Now

Immediately build a meta-loop that creates multiple git branches, runs MVL+ on each, compares outputs, and kills weak branches.

- Novelty: high.
- Scrutiny: weak for current stage; branch selection criteria are not ready.
- Fertility: high.
- Actionability: low.
- Mechanism independence: medium.
- Verdict: defer.

### I. Staged Hybrid Architecture

Use the following sequence:

```text
1. Diagnostic MVL+ pattern under devdocs/inquiries/diagnostics/
2. Lightweight loop_diagnose protocol/template
3. Diagnostic finding frontmatter or small index for lifecycle state
4. Git branch only when a source variant is being tested
5. Evaluation MVL+ compares baseline and candidate outputs
6. Later meta-loop handles branch traversal/selection
```

- Novelty: medium.
- Scrutiny: strongest.
- Fertility: high.
- Actionability: high.
- Mechanism independence: strongest.
- Verdict: primary survivor.

## 3. Assembly Check

The best architecture combines B, C, F, and G:

```text
loop_diagnose protocol
+ diagnostics inquiry folder
+ distributed findings-as-ledger
+ small lifecycle index/frontmatter
+ git-backed branch experiments
+ evaluation MVL+ for branch comparison
```

This assembly has more value than any component alone:

- Protocol without diagnostics folder gives a recipe but no storage convention.
- Diagnostics folder without lifecycle state creates evidence but weak status visibility.
- Git branches without findings create variants without rationale.
- Findings without git branches create rationale without executable variants.
- Evaluation without baseline/candidate linkage creates subjective comparison.

## 4. Strongest Objections

### Objection 1: This still adds a protocol.

Response: The protocol does not add a cognitive primitive. It is an input/output recipe for MVL+. That is lighter than a discipline and preserves the atomic-loop principle.

### Objection 2: A small index is still maintenance overhead.

Response: The index should be optional until there are at least three diagnostic findings or one active maintenance branch. Before that, frontmatter and folder placement may be enough.

### Objection 3: Git branches can use commit messages for rationale.

Response: Commit messages help but are not enough for multi-inquiry evidence, evaluation gates, and branch selection decisions. They should link to diagnostic/evaluation findings, not replace them.

### Objection 4: Branch evolution is the exciting part, so why defer it?

Response: Branch evolution without a fitness function or shared evaluation set will multiply uncertainty. The first step is to create records that later make branch selection possible.

## 5. Innovation Output

Primary innovation:

> Treat Homegrown self-maintenance as git-backed evolutionary experimentation, but keep MVL+ diagnostic findings as the semantic memory that explains and evaluates each variant.

Operational form:

```text
correction chain
-> diagnostic MVL+ finding
-> maintenance lifecycle entry/frontmatter
-> candidate git branch if source changes are needed
-> baseline-vs-candidate evaluation MVL+
-> merge / continue / stop / refine
```

This gives the user the branch-evolution path they are pointing at without losing the diagnostic evidence needed to decide which branch is actually better.

## 6. Mechanism Coverage Telemetry

- Generators applied: 4 / 4.
- Framers applied: 3 / 3.
- Convergence: YES. Six mechanisms converge on a staged hybrid architecture.
- Survivors tested: 9 / 9 candidate architectures.
- Failure modes observed: none. The run avoided early frame lock by explicitly testing git-only, docs-only, discipline-first, and evolutionary-meta-loop-now alternatives.
- Overall: PROCEED.
