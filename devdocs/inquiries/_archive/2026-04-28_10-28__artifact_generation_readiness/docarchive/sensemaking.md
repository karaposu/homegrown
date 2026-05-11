# Sensemaking: Artifact Generation Readiness

## User Input

The user asked whether the current repo is mature enough to test and see what happens, or whether important pieces are missing. The user specifically suggested that a synthesis protocol may be missing because Homegrown currently mostly generates Markdown, and asked whether a protocol should let skills generate artifacts.

## SV1 - Baseline Understanding

Initial interpretation: the repo is ready to test reasoning workflows, but not ready to test executable artifact production. The missing thing is not only "synthesis" as summary; it is a protocol that materializes decisions into files, validates them, and records outcomes.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Current skills primarily produce Markdown outputs.
- `CONCLUDE` compiles discipline outputs into `finding.md`.
- The structural checker referenced by MVL/MVL+ is absent.
- ARC-style work requires executable artifacts and measured results, not only findings.
- Any artifact generation must avoid uncontrolled file edits and unverified changes.
- The repo already uses inquiry folders as stateful work records.

### Key Insights

- "Testing" has two meanings: testing reasoning quality vs testing artifact-producing capability.
- Homegrown is already testable as a reasoning system.
- Homegrown is not yet testable as an implementation system unless the human manually bridges findings to code.
- A synthesis protocol should not replace CONCLUDE. CONCLUDE synthesizes an answer; the missing protocol should materialize an artifact.
- The artifact protocol should be a bridge from finding to implementation, not a new cognitive discipline.

### Structural Points

- Current pipeline: branch -> discipline Markdown outputs -> finding.
- Needed implementation pipeline: finding -> artifact request -> write-set -> artifact draft -> validation -> trace -> outcome review.
- Related but separate needs:
  - artifact generation,
  - structural integrity checking,
  - branch experiment evaluation,
  - retrospective outcome review.

### Foundational Principles

- Do not count an artifact as successful until it passes its own verification gate.
- Do not let Markdown reasoning masquerade as implementation.
- Do not overbuild autonomy before the basic artifact lifecycle exists.
- Keep cognitive decision-making and file materialization separate.

### Meaning-Nodes

- Readiness.
- Testing.
- Synthesis.
- Artifact generation.
- Materialization.
- Verification.
- Trace.
- ARC harness.

## SV2 - Anchor-Informed Understanding

The issue is not that Homegrown is useless until it can produce code. It can already generate useful findings and diagnostics. The issue is that the next step toward ARC or any implementation-heavy work needs a new bridge: a disciplined way to turn accepted findings into concrete, checked artifacts.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

The repo lacks a formal file-generation contract. Without one, artifact production depends on ad hoc agent behavior. That can work manually, but it is not a reliable system capability.

New anchor: artifact generation needs an explicit input/output contract and verification step.

### Human / User Perspective

The user wants to start seeing empirical output, not only more documents. The frustration is reasonable: if every loop ends in another Markdown finding, the system may feel like it is circling instead of building.

New anchor: the next protocol should create a visible transition from "we decided" to "we built and checked."

### Strategic / Long-Term Perspective

The autonomy ladder depends on the system modifying its own artifacts and measuring whether those changes helped. Artifact generation is therefore not an ARC-only convenience; it is part of the self-improvement substrate.

New anchor: materialization is load-bearing for Baldwin cycles and branch experiments.

### Risk / Failure Perspective

Premature artifact generation can damage files, create untested code, or encode weak findings into source. The protocol must constrain write scope and require validation.

New anchor: artifact generation should be gated by source finding, write-set, validation, and rollback/retrospective path.

### Resource / Feasibility Perspective

A full implementation engine is too large. A small protocol is feasible now: define artifact contract, require a target path, require tests/checks, and require a trace. Tooling can come after the first few protocol runs.

New anchor: start with a lightweight protocol, not a large automation framework.

### Definitional / Consistency Perspective

Calling the missing piece "synthesis" is risky because CONCLUDE already synthesizes findings. The missing operation is closer to "artifact materialization": producing a file or patch from a decision.

New anchor: name should distinguish answer synthesis from artifact production.

## SV3 - Multi-Perspective Understanding

The model shifted from "maybe we need synthesis" to "we need a materialization protocol that follows synthesis." CONCLUDE answers "what should be done and why." The missing protocol answers "what artifact should now exist, where, under what contract, and how do we know it works?"

## Phase 3 - Ambiguity Collapse

### Ambiguity: "Can we test now?"

**Strongest counter-interpretation:** No, testing now is premature because the repo cannot produce executable artifacts or ARC results.

**Why the counter-interpretation fails (structural grounds):** It treats all tests as artifact tests. The repo can already test reasoning outputs: MVL+ findings, loop_diagnose outputs, navigation maps, and protocol critiques. Those tests produce useful evidence about discipline quality even without code generation.

**Confidence:** HIGH.

**Resolution:** Yes, test now for reasoning-loop quality; no, do not claim implementation or ARC solver capability until artifact infrastructure exists.

**What is now fixed?** Readiness is split into reasoning readiness and artifact readiness.

**What is no longer allowed?** A single yes/no readiness verdict.

**What now depends on this choice?** Test plans must name which readiness level they are testing.

**What changed in the conceptual model?** The repo is not blocked; it is phase-limited.

### Ambiguity: "Synthesis protocol"

**Strongest counter-interpretation:** A synthesis protocol is exactly what is missing because the system needs to synthesize Markdown reasoning into outputs.

**Why the counter-interpretation fails (structural grounds):** CONCLUDE already performs answer synthesis into `finding.md`. The missing operation is not another summary; it is file production with scope, contract, verification, and trace. Naming it synthesis risks duplicating CONCLUDE.

**Confidence:** HIGH.

**Resolution:** The new protocol should be named around artifact generation/materialization, not generic synthesis.

**What is now fixed?** CONCLUDE remains the finding synthesis protocol.

**What is no longer allowed?** Conflating final answer compilation with artifact creation.

**What now depends on this choice?** New protocol design should start after a finding, not replace finding generation.

**What changed in the conceptual model?** "Synthesis" becomes a two-stage chain: conclude the decision, then materialize the artifact.

### Ambiguity: "Should skills generate artifacts?"

**Strongest counter-interpretation:** Yes, every skill should be able to generate concrete artifacts directly, because otherwise the loop stays in Markdown.

**Why the counter-interpretation fails (structural grounds):** Individual skills have discipline-specific responsibilities. If every skill edits arbitrary files, write scope and verification become scattered. A protocol can centralize artifact contracts while still allowing disciplines to propose artifact requirements.

**Confidence:** HIGH.

**Resolution:** Skills should be able to request or specify artifacts, but artifact generation should be governed by a shared protocol.

**What is now fixed?** Artifact generation is a protocol boundary, not a free-form skill side effect.

**What is no longer allowed?** Unscoped file creation as a normal discipline output.

**What now depends on this choice?** Protocol design must define when artifact generation is invoked and what validation is required.

**What changed in the conceptual model?** The system gets a materialization boundary between cognitive output and filesystem effects.

## SV4 - Clarified Understanding

Homegrown is good enough to test as a thinking system now. It is not yet good enough to test as an artifact-producing engineering system without manual bridging. The missing near-term piece is an Artifact Generation or Artifact Materialization protocol that runs after a finding and governs producing files, patches, configs, adapters, tests, or other concrete outputs.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- Reasoning tests can start now.
- Artifact tests require a new protocol or at least a temporary contract.
- CONCLUDE should not be overloaded to write arbitrary implementation files.
- Structural integrity checking remains a parallel prerequisite.

### Eliminated

- Treating Markdown findings as enough for ARC-style empirical testing.
- Building a large autonomous implementation engine immediately.
- Letting every discipline freely create files without a shared contract.
- Renaming CONCLUDE into synthesis and expecting it to solve artifact production.

### Viable Paths

1. Create a lightweight `artifact_generation.md` or `artifact_materialization.md` protocol.
2. Use it manually for the first few artifacts.
3. Pair it with structural integrity checks and validation commands.
4. Later integrate it with maintenance branch experiments and retrospective outcome review.

## SV5 - Constrained Understanding

The next maturity step is not "more MVL+ analysis" and not "full ARC solver now." It is a small implementation bridge: findings can authorize artifacts, artifacts have contracts, the agent materializes them in a bounded write-set, validations run, and traces are archived. This makes ARC harness adapter work testable without pretending the whole autonomy loop is complete.

## SV6 - Stabilized Model

Current Homegrown is mature enough for reasoning-loop dogfooding and diagnostic learning. It is not mature enough to claim artifact-generation competence because it lacks the materialization protocol and structural checker needed to turn decisions into verified files. The right next protocol is not generic synthesis but **Artifact Materialization**: a post-CONCLUDE protocol that turns an accepted finding into a concrete artifact under an explicit contract, bounded write-set, validation gate, trace record, and later outcome review.

This differs from SV1 by removing the binary readiness framing. The repo is ready for one class of tests and missing infrastructure for another.

## Saturation Indicators

- Perspective saturation: high. Technical, user, strategic, risk, feasibility, and definitional perspectives converged.
- Ambiguity resolution ratio: 3 major ambiguities resolved / 3 identified.
- SV delta: significant. The model shifted from "missing synthesis" to "post-CONCLUDE artifact materialization boundary."
- Anchor diversity: high.

**Overall: PROCEED**
