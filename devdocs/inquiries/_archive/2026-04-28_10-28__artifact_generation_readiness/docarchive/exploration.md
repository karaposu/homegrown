# Exploration: Artifact Generation Readiness

## Mode and Entry Point

- Mode: mixed artifact and possibility exploration.
- Entry point: signal-first. The user named a concrete hunch: the repo may be stuck generating Markdown and may need a synthesis/artifact protocol.

## Cycle 1: Protocol Inventory Scan

### Scan

Scanned `homegrown/protocols/`, `homegrown/*/SKILL.md`, the ARC fit finding, the protocol priority finding, and codebase archaeology summaries.

### Found

- Active protocols:
  - `conclude.md`: compiles inquiry outputs into `finding.md`, archives discipline outputs, and closes state.
  - `loop_diagnose.md`: frames diagnostic MVL+ inquiries over prior/corrected inquiry artifacts.
  - `resume.md`: future-facing telemetry-aware resume/continuation protocol.
  - `unknown.md`: older or partial conclusion-like flow.
- Active skills mostly save Markdown artifacts.
- `CONCLUDE` produces a final Markdown finding, not implementation artifacts.
- `tools/structural_check.sh` is referenced by MVL/MVL+ but absent locally.

### Signals

- Strong absence: no protocol that turns a finding into code, config, harness adapter, test, or structured non-Markdown artifact.
- Strong absence: no structural integrity checker, even though the loop runners call one.
- Strong existing strength: the repo is good at producing durable reasoning artifacts with state and docarchive.

### Resolution Decision

Zoom in on what "testing now" can mean without executable artifact infrastructure.

### Frontier State

Protocol inventory is stable at coarse resolution. Missing artifact-production path is confirmed.

### Confidence Update

- Markdown reasoning loop readiness: confirmed.
- Executable artifact production readiness: confirmed absent at protocol level.

## Cycle 2: Prior Finding Probe

### Probe

Read `devdocs/inquiries/2026-04-28_10-10__arc_agi_competition_fit/finding.md`.

### Found

That finding concluded:

- Homegrown is not an ARC solver as-is.
- ARC needs an executable engine and exact verifier.
- Homegrown becomes useful after solver traces exist.
- Every Homegrown-generated ARC hypothesis must become executable code or a measured solver change before it counts.

### Signals

- ARC makes the Markdown/artifact gap concrete. Without an artifact path, Homegrown can diagnose what should be built, but the built thing remains outside the loop's formal lifecycle.
- The missing layer is not only "synthesis" in prose; it is "materialization + verification + trace."

### Resolution Decision

Zoom out to identify possible readiness levels.

### Frontier State

The ARC requirement confirms that current testing can be valuable only if scoped correctly.

### Confidence Update

- Testing Homegrown as a reasoning/diagnostic loop: high confidence possible now.
- Testing Homegrown as an artifact-producing engineering system: low confidence until protocol/tooling exists.

## Cycle 3: Current Test Types Scan

### Scan

Mapped kinds of tests the repo can run today vs tests it cannot run yet.

### Found

Current repo can test:

- whether MVL+ produces useful findings,
- whether loop diagnosis identifies missed reasoning,
- whether Navigation produces useful next directions,
- whether protocol ideas are coherent,
- whether discipline outputs are archived and resumable.

Current repo cannot robustly test:

- whether a finding becomes a correct code change,
- whether generated files satisfy an artifact contract,
- whether source edits improve downstream score,
- whether ARC harness adapters work,
- whether branch experiments beat baseline,
- whether generated artifacts survive regression checks.

### Signals

- The repo is mature enough for "thinking experiment" tests.
- It is not mature enough for "implementation loop" tests without manual engineering outside the protocol system.

### Resolution Decision

Probe the likely missing protocol shape.

### Frontier State

Testing landscape has two regions: valid-now Markdown reasoning tests, blocked artifact-production tests.

### Confidence Update

Two-level readiness model: confirmed.

## Cycle 4: Missing Artifact Protocol Probe

### Probe

Asked what would be needed to turn a Homegrown finding into an executable artifact safely.

### Candidate Missing Pieces

- Artifact request contract: what artifact type is being produced and where it should live.
- Source finding binding: which finding authorizes the artifact.
- Scope and write-set: which files may be created or edited.
- Artifact schema: required files, fields, interfaces, and examples.
- Materialization step: produce the actual artifact, not only a plan.
- Verification step: run tests, linters, structural checks, or contract validators.
- Trace step: record commands, failures, outputs, and changed files.
- Outcome link: connect artifact to later retrospective review.

### Signals

- This should probably be a protocol, not a new cognitive discipline. The cognitive decision still comes from MVL+. The missing thing is an operational bridge from decision to artifact.
- "Synthesis" alone is too vague. The protocol should probably be named around artifact materialization or artifact generation to avoid being confused with CONCLUDE/finding synthesis.

### Resolution Decision

Jump scan: check whether an existing adjacent protocol already covers this.

### Frontier State

Missing protocol shape is mapped enough for sensemaking.

### Confidence Update

Need for artifact-generation protocol: high.

## Jump Scan: Adjacent Protocols

### Scan

Checked prior `protocol_priority_top_5` and relevant protocol references.

### Found

The top-five protocol finding already named related needs:

- `maintenance_branch_experiment`,
- `structural_integrity_and_telemetry_contract`,
- `retrospective_outcome_review`,
- `loop_diagnose`,
- `navigation_selection_record`.

It did not isolate a direct "finding -> artifact" protocol as its own item, though it implied the need through branch experiments and artifact enforcement.

### Signal

Artifact generation is the missing bridge between "finding says build X" and "branch experiment evaluates X." It may be a distinct protocol or a subprotocol inside maintenance branch experiments.

## Convergence Assessment

- Frontier stability: yes. Major regions are mapped.
- Declining discovery rate: yes. Later scans confirmed the same missing bridge.
- Bounded gaps: yes. Open details remain about naming and exact schema, but the current readiness question is answered enough for next discipline.

## Structural Map

### Territory Overview

| Region | Status | Notes |
|---|---|---|
| Reasoning loop | Confirmed present | MVL/MVL+ produce Markdown inquiry artifacts. |
| Final finding synthesis | Confirmed present | CONCLUDE compiles findings. |
| Diagnostic protocol | Confirmed present | loop_diagnose exists and is useful. |
| Structural checker | Confirmed absent | Referenced by runners, missing locally. |
| Artifact generation protocol | Confirmed absent | No formal path from finding to executable artifact. |
| Branch/experiment protocol | Inferred missing | Prior findings ranked it, but no file exists in `homegrown/protocols/`. |
| ARC execution layer | Confirmed absent | Prior ARC fit finding covers this. |

### Inventory

Current artifacts are mostly:

- skill specs,
- reference specs,
- protocols,
- inquiry state files,
- discipline Markdown outputs,
- final findings,
- installer scripts.

Missing artifacts for ARC-style testing:

- executable harness adapter,
- solver source files,
- trace files,
- task result JSON,
- scoring outputs,
- artifact contract checks.

### Signal Log

- Probed: protocol inventory, ARC fit finding, test-type landscape, missing protocol shape, adjacent protocol priorities.
- Deferred: exact implementation of artifact-generation protocol.

### Confidence Map

| Claim | Confidence |
|---|---|
| Current repo can test reasoning-loop usefulness now | confirmed |
| Current repo can test executable artifact production now | confirmed absent / low |
| A protocol bridge from finding to artifact is missing | confirmed |
| Structural checker absence is important | confirmed |
| Artifact generation should be separate from CONCLUDE | inferred high |

## Gaps and Recommendations for Sensemaking

Sensemaking should collapse the central ambiguity: start testing now vs build missing infrastructure first. The likely answer is not binary. The repo can start with diagnostic/reasoning tests now, but artifact-producing tests need a minimal Artifact Generation protocol plus structural integrity checks.
