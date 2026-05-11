---
status: active
---
# Finding: Artifact Generation Readiness

## Question

Is the current Homegrown repo mature enough to start testing ARC-style work and see what it produces, or is it missing important artifact-generation infrastructure such as a synthesis protocol that can turn findings into non-Markdown artifacts?

The goal is to distinguish two things that are easy to blur: whether Homegrown can be tested now as a reasoning system, and whether it can be tested now as an artifact-producing engineering system.

## Finding Summary

- Homegrown is ready to test as a reasoning-loop system now. Valid tests include MVL+ output quality, loop diagnosis quality, navigation usefulness, protocol critique, and whether findings are clear enough to guide work.
- Homegrown is not ready to test as an artifact-generation system yet. It has no formal path from an accepted finding to a bounded file edit, validation result, and trace record.
- The missing piece should not be called a generic "synthesis protocol." `CONCLUDE` already synthesizes discipline outputs into `finding.md`. The missing operation is artifact materialization: turning a decision into concrete files under a contract.
- Skills should not freely generate arbitrary artifacts. Skills can propose artifact requirements, but a shared protocol should control source authorization, target paths, write scope, validation, and trace output.
- ARC can be an early substantial use case, but it should not define the protocol. First prove the materialization lifecycle on lower-risk artifacts such as protocols, trace schemas, or config stubs.
- The structural checker referenced by the runners is currently absent. That does not block writing the first protocol artifact, but it does block strong claims that generated artifacts are being structurally verified.

## Finding

The current repo is good enough to start testing, but only at the reasoning layer.

That means it is fair to test whether MVL+ produces useful inquiry findings, whether `loop_diagnose.md` catches prior reasoning failures, whether Navigation picks useful next work, and whether the archive/state structure makes results inspectable. These tests can produce real learning because the repo already has skills, protocols, inquiry folders, state files, final findings, and docarchives.

It is not yet fair to test Homegrown as if it can reliably produce implementation artifacts. Today the loop usually ends in Markdown. That is useful for decisions, but it is not enough for ARC-style empirical work, where the output must eventually be executable code, task predictions, trace data, scoring results, or harness adapters.

The missing protocol is not a broad synthesis protocol. In this repo, `CONCLUDE` is already the synthesis step: it turns exploration, sensemaking, decomposition, innovation, and critique into a final `finding.md`. Adding another generic synthesis layer would duplicate that role and make the system less clear.

The missing protocol should be a post-CONCLUDE **Artifact Materialization** protocol. It should answer a different question: after a finding says something should exist, what artifact should be created, where should it live, what files may be touched, what contract must it satisfy, what validation will be run, and where is the trace recorded?

The safe shape is:

1. A finding proposes or authorizes an artifact.
2. A materialization brief names the source finding, artifact type, target path or write-set, contract, validation plan, and risk class.
3. The agent creates or edits only the declared files.
4. The agent runs the declared checks, or records why only manual review is available.
5. The agent writes a trace with changed files, commands run, validation results, deviations, and outcome.
6. The outcome is marked PASS, FAIL, or PARTIAL.

This should be a shared protocol boundary, not behavior embedded separately inside every discipline. Exploration, Sensemaking, Decomposition, Innovation, and Critique can propose artifacts or constraints for artifacts. The actual file generation should happen through one protocol so authorization, write scope, and verification stay visible.

For ARC, this means the repo should not jump straight from "we have a reasoning loop" to "we are testing against ARC." The next ARC-relevant step is to create the artifact lifecycle first, then use it to materialize something small, and only then use it for an ARC harness adapter, trace schema, or solver integration file. Otherwise ARC work will depend on ad hoc human conversion from findings to code, which tests the human bridge more than the Homegrown system.

The structural checker gap matters. MVL/MVL+ refer to `tools/structural_check.sh`, but that file is not present in this repo. A first manual `artifact_materialization.md` can still be created without it because protocol documents can be reviewed directly. But once the protocol starts producing repeatable artifacts, structural checking or artifact-specific validators become required for credible materialization outcomes.

## Next Actions

### MUST

- **What:** Create `homegrown/protocols/artifact_materialization.md` as a lightweight v1 protocol.
  **Who:** Homegrown protocol layer.
  **Gate:** Before claiming Homegrown can generate implementation artifacts as a system capability.
  **Why:** This creates the missing bridge from accepted findings to bounded, validated, traceable artifacts.

- **What:** Require each materialization run to declare a source finding, artifact type, target path or write-set, artifact contract, validation plan, and risk class.
  **Who:** Artifact Materialization protocol.
  **Gate:** Before any non-trivial file creation or edit under the protocol.
  **Why:** This prevents uncontrolled file generation and makes the artifact auditable.

- **What:** Require a trace for each materialized artifact.
  **Who:** Artifact Materialization protocol.
  **Gate:** At the end of every materialization run.
  **Why:** The trace gives later loop diagnosis, branch experiments, and retrospective review concrete evidence.

- **What:** Restore or replace the missing structural check path.
  **Who:** Repo tooling layer.
  **Gate:** Before treating materialized artifacts as structurally verified.
  **Why:** The current runner references a check that is absent, so verification claims are weaker than the protocol expects.

### COULD

- **What:** Add optional Artifact Request blocks to findings.
  **Who:** CONCLUDE protocol or individual findings when relevant.
  **Gate:** Only when a finding proposes concrete files or the user asks to materialize one.
  **Why:** This gives the materialization protocol a clean handoff without bloating every finding.

- **What:** Use ARC harness or trace work as the first substantial materialization test after a smaller protocol/config artifact succeeds.
  **Who:** ARC integration workstream.
  **Gate:** After one low-risk materialization run produces a trace with a PASS or explainable PARTIAL outcome.
  **Why:** ARC is a useful pressure test, but it should exercise a generic artifact lifecycle rather than define one narrowly.

### DEFERRED

- **What:** Direct artifact generation inside every discipline.
  **Gate:** Reopen only if the shared materialization protocol becomes a proven bottleneck across several artifact runs.
  **Why (if revived):** It could reduce friction, but the current risk is scattered write behavior and weak validation.

- **What:** Full automated artifact-generation engine.
  **Gate:** Reopen after manual materialization has produced enough traces to show stable patterns.
  **Why (if revived):** Automation should be based on observed artifact lifecycle needs, not guessed upfront.

- **What:** Maintenance branch experiment protocol as the immediate next step.
  **Gate:** Reopen after at least one materialized artifact exists and has a trace.
  **Why (if revived):** Branch experiments compare candidate changes against a baseline; they need candidate artifacts first.

## Reasoning

The "test current repo as-is" option survived only for reasoning-loop tests. It fails for artifact-production claims because current outputs are mostly Markdown and the missing structural checker weakens validation.

The generic "synthesis protocol" option was killed because it overlaps with `CONCLUDE`. The useful seed is preserved under a better name: Artifact Materialization.

The Artifact Materialization protocol survived because every discipline converged on the same missing bridge: source finding, artifact request, write-set, contract, validation, trace, and outcome.

Optional Artifact Request blocks survived because they create a clean handoff when a finding proposes concrete files. They should stay optional because many findings are decisions, diagnoses, or evaluations rather than artifact requests.

The structural integrity contract was refined rather than killed. It is necessary soon, especially because `tools/structural_check.sh` is absent, but it does not need to block writing a lightweight protocol artifact.

The maintenance branch experiment option was deferred. It becomes valuable after artifacts exist, but it cannot replace the protocol that creates candidate artifacts.

Direct skill-level artifact generation was killed because it scatters filesystem effects across disciplines. The safer model is that disciplines propose artifact requirements and one protocol materializes them.

The ARC-first protocol option was refined. ARC is a good pressure test because it requires executable outputs and exact scoring, but a protocol that only serves ARC would miss the more general self-improvement need.

## Open Questions

### Monitoring

- After 3 materialization runs, review whether the required brief fields are too heavy, too loose, or missing fields.
- After the first ARC-related materialization, check whether ARC needs a specialized artifact subtype or just a normal materialization brief.

### Blocked

- Strong verification claims are blocked until structural checks or artifact-specific validators exist.

### Refinement Triggers

- Reopen the protocol design if two consecutive materialization traces end in PARTIAL because the validation contract is unclear.
- Reopen direct discipline-level artifact generation only if the shared protocol consistently blocks low-risk artifact creation without improving safety or traceability.
