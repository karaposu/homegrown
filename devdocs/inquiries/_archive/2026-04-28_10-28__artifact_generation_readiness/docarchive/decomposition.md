# Decomposition: Missing Artifact Infrastructure

## Input

Sensemaking stabilized the model: Homegrown is ready for reasoning-loop tests, but artifact-producing tests need a post-CONCLUDE Artifact Materialization protocol plus structural checks.

## 1. Coupling Map

### Cluster A: Current Reasoning Loop

- `_branch.md`
- discipline outputs
- `finding.md`
- `docarchive/`
- `_state.md`

This cluster is strongly coupled around Markdown inquiry artifacts. It already works well enough for reasoning tests.

### Cluster B: Artifact Materialization

- source finding,
- artifact request,
- artifact type,
- target path,
- write-set,
- artifact contract,
- creation/editing step,
- changed-file list.

This is the missing bridge from decision to concrete output.

### Cluster C: Verification and Structural Integrity

- structural checks,
- tests,
- linters,
- schema checks,
- dry-run commands,
- pass/fail evidence.

This cluster is strongly coupled to artifact materialization because an artifact without verification is only a generated file, not a reliable outcome.

### Cluster D: Experiment and Retrospective Closure

- baseline state,
- candidate artifact,
- evaluation gate,
- outcome review,
- retain/refine/revert decision,
- branch experiment record.

This cluster decides whether a materialized artifact actually improved anything.

### Cluster E: ARC-Specific Application

- ARC harness adapter,
- solver files,
- trace format,
- scoring outputs,
- failure batches for Homegrown diagnosis.

This is a downstream consumer of the generic artifact lifecycle.

## 2. Boundaries

### Boundary 1: CONCLUDE vs Artifact Materialization

CONCLUDE produces the answer artifact. Artifact Materialization produces implementation artifacts authorized by that answer. The boundary is low-coupling and should stay explicit.

### Boundary 2: Artifact Creation vs Artifact Verification

Creation and verification are coupled, but separable. A protocol can require verification without embedding every possible validator.

### Boundary 3: Generic Artifact Protocol vs ARC-Specific Harness Work

The artifact protocol should be generic. ARC harness files are one artifact type, not the protocol's whole purpose.

### Boundary 4: Materialization vs Branch Experiment

Materialization creates a candidate. Branch experiment compares candidate against baseline. These should connect but not collapse.

## 3. Bottom-Up Validation

### Atoms

- A finding is the smallest decision artifact.
- An artifact request is the smallest authorization unit.
- A file path or write-set is the smallest filesystem scope unit.
- A validation command is the smallest check unit.
- A trace record is the smallest accountability unit.
- An outcome review is the smallest learning unit.

### Validation

The top-down clusters align with the atoms. The only possible ambiguity is whether artifact request and branch experiment belong together. They should not collapse: many artifacts are small and do not need a full branch experiment, but every branch experiment needs materialized artifacts.

## 4. Question Tree

### Q1. When is artifact materialization invoked?

Verification criteria:

- Invocation point is defined.
- Relationship to CONCLUDE is clear.
- Manual vs automatic triggering is clear.
- Non-invocation cases are defined.

Working answer:

Invoke after a finding, when the finding proposes a concrete artifact or the user asks to materialize one.

### Q2. What input contract does artifact materialization require?

Verification criteria:

- Source finding path is required.
- Artifact type is named.
- Target path/write-set is bounded.
- Expected contract/schema is defined.
- Validation gate is defined.

Working answer:

Require a materialization brief before file edits.

### Q3. What artifact types should v1 support?

Verification criteria:

- Protocol files.
- Skill/reference file edits.
- Config files.
- Code files.
- Test files.
- Trace schema files.

Working answer:

Support broad artifact categories, but require each invocation to declare exactly one primary artifact type.

### Q4. How should verification work?

Verification criteria:

- Required checks are listed before edits.
- Checks can be skipped only with reason.
- Results are recorded.
- Failure leads to fix/retry or explicit failed materialization.

Working answer:

Artifact-specific validation should be declared in the brief and recorded in the trace.

### Q5. What trace should the protocol write?

Verification criteria:

- Changed files listed.
- Validation commands and results listed.
- Deviations from brief listed.
- Follow-up review gate listed.

Working answer:

Write an `artifact_trace.md` or section under the source inquiry, depending on whether materialization is one-off or part of a branch experiment.

### Q6. How does this connect to ARC?

Verification criteria:

- Can produce a harness adapter file.
- Can produce a trace schema.
- Can run basic validation.
- Can feed later MVL+ diagnosis.

Working answer:

ARC is a first useful test case, but should not be the only artifact type.

## 5. Interface Map

| Source | Target | What Flows | Direction |
|---|---|---|---|
| CONCLUDE finding | Materialization brief | decision, rationale, proposed artifact | one-way |
| Materialization brief | File edits | target paths, write-set, artifact contract | one-way |
| File edits | Verification | artifact output, changed files | one-way |
| Verification | Artifact trace | pass/fail evidence, command outputs, unresolved failures | one-way |
| Artifact trace | Retrospective review | outcome evidence | one-way |
| Artifact trace | Branch experiment | candidate details, changed files, gates | one-way |
| ARC harness | Homegrown diagnosis | failure traces, scores, task artifacts | one-way |

## 6. Dependency Order

1. Define Artifact Materialization protocol.
2. Define minimal artifact brief template.
3. Define minimal trace template.
4. Restore or replace structural integrity checks for Markdown/protocol artifacts.
5. Use protocol manually for one low-risk artifact.
6. Use protocol for ARC harness adapter only after the basic brief/trace/check flow works.
7. Connect to branch experiment and retrospective outcome review.

## 7. Self-Evaluation

| Dimension | Result | Notes |
|---|---|---|
| Independence | Pass | Materialization, verification, and retrospective review are separable with explicit interfaces. |
| Completeness | Pass | Covers invocation, contract, artifact types, verification, trace, ARC connection, and later review. |
| Reassembly | Pass | Pieces reconstruct a full path from finding to checked artifact. |
| Tractability | Pass | v1 can be a lightweight Markdown protocol before automation. |
| Interface clarity | Pass | Source finding, brief, write-set, checks, trace, and outcome review are explicit. |
| Balance | Pass | No single piece dominates except implementation details, which are downstream. |
| Confidence | Pass | Boundaries align with current repo architecture and prior findings. |

## Decomposition Verdict

Proceed to Innovation. The winning candidate should likely be a small `artifact_materialization.md` protocol with a required brief and trace, not a broad "synthesis" discipline or full automation engine.
