# Critique: Artifact Generation Readiness

## Phase 0 - Evaluation Dimensions

The critique evaluates the candidate paths from Innovation against dimensions extracted from Sensemaking and Decomposition.

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Current-test honesty | 5 | The answer must distinguish reasoning-loop tests from artifact-production or ARC-score tests. |
| Artifact safety | 5 | Any file generation path must have source authorization, bounded write scope, and traceability. |
| Verification strength | 5 | Artifacts must have declared checks, or an explicit reason why only manual review is possible. |
| Minimum useful implementation | 4 | The next step should be small enough to use immediately. |
| Architectural fit | 4 | The design must preserve CONCLUDE as the finding-synthesis protocol and avoid scattered file-writing behavior. |
| ARC usefulness | 4 | The path should move toward ARC harness/trace work without pretending ARC is the whole problem. |
| Protocol weight | 3 | The design should avoid a broad automation framework before the basic lifecycle exists. |
| Retrospective usefulness | 4 | The output should feed later diagnosis, branch experiments, and outcome review. |

Critical dimensions are current-test honesty, artifact safety, and verification strength. A candidate that fails one of these cannot be accepted as the main answer.

## Phase 1 - Fitness Landscape

### Viable Region

The viable region is a two-level readiness answer plus a lightweight post-CONCLUDE artifact protocol. The system can test reasoning outputs now. It should not claim artifact-generation competence until a materialization protocol records what was authorized, what was changed, how it was checked, and what outcome resulted.

### Boundary Region

The boundary region contains useful but incomplete additions:

- optional Artifact Request blocks inside findings,
- a structural checker or artifact validator,
- ARC harness work as an early use case,
- branch experiments after actual artifacts exist.

These are useful, but none replaces the missing materialization bridge.

### Dead Region

The dead region contains approaches that either blur the current readiness claim or scatter unverified file generation:

- testing the current repo as if Markdown findings were enough for implementation claims,
- creating a broad generic "synthesis" protocol that overlaps with CONCLUDE,
- letting each discipline freely write artifacts,
- building an ARC-only protocol that ignores the general artifact lifecycle.

### Unexplored Region

A fully automated materialization engine remains unexplored. It is intentionally out of scope because the present repo needs the manual lifecycle first.

## Phase 2 - Candidate Evaluation

### A. Test Current Repo As-Is

**Prosecution:** If "test" means ARC scoring, executable artifact generation, or implementation-loop performance, the current repo cannot support that claim. It mostly produces Markdown artifacts and lacks both a materialization protocol and the referenced structural checker.

**Defense:** If "test" means dogfooding MVL+, loop diagnosis, navigation quality, or protocol reasoning, the repo is ready. These tests can already produce useful evidence.

**Collision:** The defense survives only under a narrowed definition of testing.

**Verdict:** REFINE for reasoning tests; KILL for artifact-production or ARC-readiness claims.

Constructive output: every test plan should name the readiness layer it is testing: reasoning-loop quality, artifact materialization, or downstream task performance.

### B. Generic "Synthesis" Protocol

**Prosecution:** The term duplicates CONCLUDE's role. CONCLUDE already synthesizes discipline outputs into `finding.md`. A broad synthesis protocol would obscure whether it is producing an answer, an artifact, or both.

**Defense:** The user's instinct is correct that the system needs something after analysis. A named protocol could create the missing bridge.

**Collision:** The useful seed is not "synthesis"; it is bounded artifact production after synthesis.

**Verdict:** KILL as named.

Constructive seed: rename and narrow the idea to Artifact Materialization, with CONCLUDE remaining the final-answer synthesis protocol.

### C. Artifact Materialization Protocol

**Prosecution:** A new protocol could become ceremony if it is too heavy, or dangerous if it creates files without strong validation.

**Defense:** It directly matches the missing boundary identified by every prior discipline: source finding -> artifact request -> write-set -> artifact contract -> validation -> trace -> outcome. It is generic enough for ARC, protocols, configs, tests, and trace schemas, but specific enough to constrain writes.

**Collision:** The prosecution is handled by keeping v1 manual, lightweight, and validation-oriented.

**Verdict:** SURVIVE.

Constructive output: create `homegrown/protocols/artifact_materialization.md` as the next protocol. It should require a source finding path, artifact type, target path or write-set, contract/schema, validation plan, changed-file trace, and outcome state: PASS, FAIL, or PARTIAL.

### D. Artifact Request Blocks Inside Findings

**Prosecution:** If mandatory, this could bloat findings and make every inquiry pretend to produce implementation work.

**Defense:** If optional, it gives the materialization protocol a clean handoff from decision to artifact without overloading every finding.

**Collision:** Optionality resolves the risk.

**Verdict:** SURVIVE as optional.

Constructive output: use Artifact Request sections only when a finding proposes concrete files or when the user asks to materialize an artifact.

### E. Structural Integrity Contract First

**Prosecution:** Treating structural checks as a complete prerequisite could block the low-risk creation of the materialization protocol itself. The absence of `tools/structural_check.sh` matters, but it is not a reason to postpone all protocol work.

**Defense:** Verification is not optional. The current runner references a structural checker that is absent, which weakens any claim that the loop can validate its own artifacts.

**Collision:** Structural checking is necessary soon, but not the first dependency for writing a manual protocol artifact.

**Verdict:** REFINE.

Constructive output: restore or replace the structural checker immediately after the materialization protocol exists, and require every materialization run to declare whatever checks are currently available.

### F. Maintenance Branch Experiment First

**Prosecution:** A branch experiment compares candidate changes against a baseline. Without a reliable path for producing candidate artifacts, the experiment protocol would remain conceptual.

**Defense:** Branch experiments are important for self-improvement, especially once code or protocol changes need empirical comparison.

**Collision:** The defense holds later, not now.

**Verdict:** DEFER.

Constructive output: build branch experiment flow after at least one low-risk artifact has been materialized and traced.

### G. Direct Skill-Level Artifact Generation

**Prosecution:** Letting every discipline write arbitrary files scatters authorization, scope control, and verification. It would make it harder to know which finding justified which artifact and which validation failed.

**Defense:** It would reduce friction and move the repo beyond Markdown faster.

**Collision:** The speed benefit is outweighed by write-safety and traceability failures.

**Verdict:** KILL.

Constructive seed: skills may propose artifact requirements, but a shared protocol should govern materialization.

### H. ARC-First Artifact Protocol

**Prosecution:** ARC is an important test case, but an ARC-only protocol would overfit the first application and leave the general finding-to-artifact lifecycle unsolved.

**Defense:** ARC provides a concrete, high-value pressure test because it requires executable outputs, exact scoring, and failure traces.

**Collision:** ARC should be a downstream consumer, not the protocol's definition.

**Verdict:** REFINE.

Constructive output: use ARC as an early substantial materialization target after the generic protocol succeeds on a smaller artifact.

## Phase 3.5 - Assembly Check

The strongest assembly is:

1. Start testing Homegrown's reasoning loops immediately.
2. Do not treat those tests as artifact-generation or ARC-performance evidence.
3. Create a lightweight post-CONCLUDE `artifact_materialization.md` protocol.
4. Let findings optionally include Artifact Request blocks.
5. Use the protocol manually first on low-risk artifacts such as protocol files, trace schemas, or config stubs.
6. Restore or replace structural checks so materialized artifacts have a real verification gate.
7. Move to ARC harness adapters only after the brief, write-set, validation, and trace lifecycle has been exercised.
8. Connect later materialized changes to branch experiments and retrospective outcome review.

This assembly passes all critical dimensions. It is honest about current readiness, controls filesystem effects, and gives a practical path toward empirical work.

## Phase 4 - Coverage and Convergence

All major candidates from Innovation were evaluated. New candidates are landing in already mapped regions: either they preserve a central materialization boundary, or they collapse boundaries and fail safety/clarity dimensions.

Coverage is sufficient for the user's question. The answer does not require another MVL+ iteration.

## Critique Verdict

**TERMINATE.**

Current Homegrown is good enough to test reasoning-loop behavior now. It is not yet good enough to test artifact-generation competence or ARC-task performance as a system capability. The next important missing piece is not a broad synthesis protocol; it is a post-CONCLUDE **Artifact Materialization** protocol that converts accepted findings into bounded, validated, traceable artifacts.
