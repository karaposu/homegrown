# Innovation: Artifact Generation Protocol Options

## User Input

The user asked whether the current repo is mature enough to test now, or whether important pieces are missing, specifically suggesting a synthesis protocol so Homegrown skills can generate artifacts rather than only Markdown.

## Seed

Homegrown can already reason and write findings, but it lacks a reliable bridge from accepted findings to concrete, verified artifacts.

Valuation signal: enable real testing without letting unverified file generation corrupt the repo.

## Mechanism Generation

### 1. Lens Shifting

- Generic: Treat artifact generation as an implementation phase after thinking, not as another thinking discipline.
- Focused: Treat `finding.md` as the authorization source and `artifact_trace.md` as the accountability record.
- Contrarian: Treat artifact generation as dangerous by default; require explicit write-set and validation before allowing it.

Survivor: post-CONCLUDE materialization protocol with bounded write-set.

### 2. Combination

- Generic: Combine CONCLUDE with a build protocol.
- Focused: Combine source finding + artifact brief + validation command + trace record.
- Contrarian: Combine branch experiment and artifact generation into one protocol only for high-risk source changes.

Survivor: lightweight Artifact Materialization protocol that can feed branch experiments but does not require one for every artifact.

### 3. Inversion

- Generic: Instead of every skill producing artifacts, every skill produces artifact requirements and a shared protocol produces artifacts.
- Focused: Instead of "skills write files," "findings authorize files."
- Contrarian: No artifact generation until structural checker exists.

Survivor: shared artifact boundary, with structural checker as important but not a total blocker for low-risk manual v1.

### 4. Constraint Manipulation

- Generic: Add constraint: artifact must have a validator before materialization.
- Focused: Add constraint: if no validator exists, artifact must be marked experimental and reviewed manually.
- Contrarian: Add constraint: v1 only writes Markdown protocols, not code.

Survivor: phased artifact types by risk. Start with protocol artifacts and trace schemas; move to code artifacts after validation flow works.

### 5. Absence Recognition

- Generic: Missing artifact lifecycle.
- Focused: Missing materialization brief, trace record, and validation result.
- Contrarian: Missing failure state: "materialization attempted and failed."

Survivor: protocol must support PASS, FAIL, and PARTIAL materialization outcomes.

### 6. Domain Transfer

- Generic: Transfer from build systems: source -> target -> rule -> output -> check.
- Focused: Transfer from PR templates: motivation, changed files, tests, risks, rollback.
- Contrarian: Transfer from lab notebooks: every artifact is an experiment with hypothesis, method, result, and interpretation.

Survivor: artifact trace should look like a small PR/test report.

### 7. Extrapolation

- Generic: If Homegrown keeps only producing Markdown, ARC work will stay conceptual.
- Focused: If artifacts are generated without contracts, source quality will drift.
- Contrarian: If the protocol is too heavy, the user will bypass it and manually hack files.

Survivor: keep v1 small enough to use every time.

## Candidate Options

### A. Do Nothing; Test Current Repo As-Is

Description: Start ARC or implementation tests now, with the human manually converting findings into code.

Test:

- Novelty: low.
- Scrutiny survival: low-medium. It is possible, but the system's artifact capability remains untested.
- Fertility: low for Homegrown improvement.
- Actionability: high short-term.
- Mechanism independence: low.

Verdict candidate: REFINE / KILL for artifact-readiness claims.

### B. Generic "Synthesis" Protocol

Description: Create a broad synthesis protocol that turns discipline outputs into whatever final output is needed.

Test:

- Novelty: low-medium.
- Scrutiny survival: low. It overlaps with CONCLUDE and is too vague.
- Fertility: medium.
- Actionability: medium.
- Mechanism independence: low.

Verdict candidate: KILL or rename/refine.

### C. Artifact Materialization Protocol

Description: A post-CONCLUDE protocol that takes a source finding and materialization brief, creates/edits bounded artifacts, runs declared validation, and writes an artifact trace.

Test:

- Novelty: medium.
- Scrutiny survival: high. It directly addresses the missing bridge.
- Fertility: high. Applies to ARC harness adapter, protocols, configs, tests, trace schemas.
- Actionability: high.
- Mechanism independence: high.

Verdict candidate: SURVIVE.

### D. Artifact Request Blocks Inside Findings

Description: Extend CONCLUDE so findings may include a structured "Artifact Requests" section with target artifacts, contracts, and validation gates.

Test:

- Novelty: medium.
- Scrutiny survival: high if optional. Risky if it bloats every finding.
- Fertility: high. Gives the materialization protocol clean input.
- Actionability: medium-high.
- Mechanism independence: high.

Verdict candidate: SURVIVE as optional section.

### E. Structural Integrity Contract First

Description: Build `tools/structural_check.sh` and artifact validators before creating any materialization protocol.

Test:

- Novelty: low.
- Scrutiny survival: medium-high. Important, but can block practical learning if treated as prerequisite for every low-risk artifact.
- Fertility: high.
- Actionability: medium.
- Mechanism independence: medium.

Verdict candidate: REFINE. Do it in parallel or immediately after v1, not as total blocker.

### F. Maintenance Branch Experiment Protocol First

Description: Build the branch experiment protocol before artifact materialization.

Test:

- Novelty: low-medium.
- Scrutiny survival: medium. Branch experiments need materialized artifacts; without materialization, they remain conceptual.
- Fertility: high later.
- Actionability: medium.
- Mechanism independence: medium.

Verdict candidate: DEFER behind minimal materialization.

### G. Direct Skill-Level Artifact Generation

Description: Modify each skill so it can generate final artifacts directly.

Test:

- Novelty: medium.
- Scrutiny survival: low. It scatters write behavior across disciplines and makes validation harder.
- Fertility: medium.
- Actionability: low-medium.
- Mechanism independence: low.

Verdict candidate: KILL.

### H. ARC-First Artifact Protocol

Description: Build a protocol only for ARC harness adapters and solver traces.

Test:

- Novelty: medium.
- Scrutiny survival: medium. Useful for ARC, but too narrow for Homegrown's general self-improvement path.
- Fertility: medium-high for ARC, low-medium globally.
- Actionability: high if ARC is immediate.
- Mechanism independence: medium.

Verdict candidate: REFINE into a generic protocol with ARC as first test case.

## Assembly Check

Best assembly:

1. Keep testing Homegrown reasoning loops now.
2. Add optional Artifact Request blocks to findings when a concrete artifact is desired.
3. Create `homegrown/protocols/artifact_materialization.md`.
4. Protocol v1 requires:
   - source finding path,
   - artifact type,
   - target path/write-set,
   - artifact contract,
   - validation commands or manual review reason,
   - trace output,
   - outcome state: PASS / FAIL / PARTIAL.
5. Start with low-risk artifacts: protocols, trace schemas, config stubs.
6. Use ARC harness adapter as an early real artifact only after v1 works on a smaller artifact.
7. Build structural checker and maintenance branch experiment next, not as replacements.

## Candidate Protocol Skeleton

```markdown
# ARTIFACT MATERIALIZATION

## Input Contract
- Source finding:
- Artifact request:
- Artifact type:
- Target path/write-set:
- Contract/schema:
- Validation plan:
- Risk class:

## Procedure
1. Read source finding and artifact request.
2. Verify target paths and write scope.
3. Draft artifact plan.
4. Materialize artifact.
5. Run validation.
6. Write artifact trace.
7. Set outcome: PASS / FAIL / PARTIAL.

## Trace
- Source finding:
- Files changed:
- Commands run:
- Validation result:
- Deviations:
- Follow-up review gate:
```

## Innovation Telemetry

- Generators applied: 4 / 4.
- Framers applied: 3 / 3.
- Convergence: yes. Six mechanisms converge on a lightweight post-CONCLUDE Artifact Materialization protocol.
- Survivors tested: 8 / 8.
- Failure modes observed: none.
- Overall: PROCEED.
