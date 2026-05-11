# Critique: Artifact Materialization Lifecycle Subprotocols

## User Input

`devdocs/inquiries/2026-05-02_12-55__artifact_materialization_lifecycle_subprotocols/_branch.md`

## Phase 0 - Evaluation Dimensions

| Dimension | Weight | Success Criteria |
| --- | ---: | --- |
| Safety | 25 | Prevents direct, under-scoped, unvalidated file changes. |
| Usability | 20 | Does not make trivial artifacts so heavy that the protocol gets bypassed. |
| Completeness | 20 | Covers code, Markdown, protocols, skills, rewrites, refactors, and future extraction. |
| Coherence | 15 | Fits prior Compact/Standard/Full finding and AlignStack task-desc/task-plan/critic-d workflow. |
| Scalability | 10 | Can grow into subprotocols later without v1 fragmentation. |
| Traceability | 10 | Ensures every materialized artifact has source, write-set, validation, trace, and outcome gate. |

Critical dimensions: Safety, Usability, Completeness.

## Phase 1 - Fitness Landscape

### Viable Region

One controller protocol with shared invariants, operation profiles, artifact-type guidance, Compact/Standard/Full modes, escalation rules, validation, trace, and future extraction gates.

### Boundary Region

Risk-only modes without operation profiles. This is usable but misses important rewrite/refactor risks.

### Dead Region

File-type-only split and separate subprotocol files in v1. The first underestimates high-risk Markdown; the second fragments the protocol before evidence exists.

### Unexplored Region

Exact wording of each operation profile belongs to materialization implementation. The conceptual decision is ready.

## Phase 2 - Candidate Verdicts

### Candidate A - File-Type Split

Code gets full lifecycle; Markdown gets compact lifecycle.

**Prosecution:** This creates a false shortcut. Markdown protocols, skills, and runner instructions can alter future behavior. A rewrite of a loaded protocol can be more dangerous than a small code stub.

**Defense:** It matches the user's intuition and is easy to understand.

**Collision:** Prosecution wins. Simplicity is not worth a wrong risk model.

**Verdict:** KILL.

**Seed Extracted:** Preserve the user's intuition as artifact-type guidance, but combine it with operation intent and risk facts.

### Candidate B - Risk-Only Modes

Keep Compact/Standard/Full only. Do not add operation profiles.

**Prosecution:** Risk-only modes do not explain how create/edit/rewrite/refactor differ. Rewrite and refactor especially need preservation checks.

**Defense:** It preserves the prior finding and avoids adding complexity.

**Collision:** Defense wins against fragmentation, but prosecution shows the model is incomplete.

**Verdict:** REFINE.

**Constructive Output:** Keep Compact/Standard/Full as lifecycle modes, but add operation profiles that feed mode selection and required checks.

### Candidate C - Controller Protocol With Operation Profiles

One `artifact_materialization.md` contains shared invariants, classification, modes, operation profiles, artifact-type guidance, escalation rules, and extraction gates.

**Prosecution:** The controller may become long and dense. Users may not know which sections apply.

**Defense:** It preserves one source of truth while representing real differences. It avoids premature file proliferation and lets evidence decide future extraction.

**Collision:** Defense wins if the controller is organized as a decision flow: classify first, then follow only the relevant mode/profile.

**Verdict:** SURVIVE.

**Constructive Output:** Build the protocol as a controller with a short decision table near the top.

### Candidate D - Separate Subprotocol Files Now

Create `artifact_create.md`, `artifact_edit.md`, `artifact_rewrite.md`, and `artifact_refactor.md`.

**Prosecution:** This duplicates invariants, increases selection overhead, and creates drift risk before any real traces prove the need.

**Defense:** Operation-specific files could be clearer later if the controller grows too large.

**Collision:** Prosecution wins for v1. Defense becomes a future extraction gate.

**Verdict:** KILL now.

**Seed Extracted:** Extract an operation profile into a subprotocol only after repeated materialization traces show stable independent procedure and controller bloat.

### Candidate E - Content Contract For Markdown

Compact Markdown materialization uses source authority, purpose, must-contain, must-not-contain, relationships, target path, operation intent, tiny plan, review, and trace.

**Prosecution:** This may still feel like process for a small note.

**Defense:** It is the minimum needed to prevent conceptual drift. It is much lighter than full task-desc/task-plan/critic-d.

**Collision:** Defense wins. The content contract compresses process without removing accountability.

**Verdict:** SURVIVE.

**Constructive Output:** Compact mode should include a content contract section.

### Candidate F - Dynamic Critic Escalation For Conceptual Changes

Dynamic critic is required for code, behavior-changing artifacts, loaded protocol/skill rewrites, and high-risk Markdown changes.

**Prosecution:** This expands dynamic critic beyond code and may slow protocol edits.

**Defense:** Protocol/skill edits can produce cognitive behavior regressions. Dynamic critic's value is task-specific risk detection, not only code review.

**Collision:** Defense wins with escalation rules. Dynamic critic should not be universal, but it must be triggered by conceptual risk.

**Verdict:** SURVIVE.

**Constructive Output:** Add escalation triggers that require Standard or Full mode for loaded protocols, skills, runners, schemas, and substantial rewrites/refactors.

## Phase 3.5 - Assembly Check

### Assembly Candidate - Single Controller With Profiles And Modes

```text
artifact_materialization.md
  -> universal contract
  -> classify artifact type
  -> classify operation intent
  -> assess risk facts
  -> select Compact / Standard / Full
  -> apply operation profile checks
  -> execute content path or implementation path
  -> validate
  -> trace
  -> outcome review gate
```

**Prosecution:** The assembly might be too broad.

**Defense:** Breadth is controlled by decision flow. Shared invariants stay central. Profiles avoid premature subprotocols. Modes avoid over-bureaucracy.

**Collision:** Defense wins.

**Verdict:** SURVIVE, ranked first.

## Coverage Map

| Candidate | Verdict | Reason |
| --- | --- | --- |
| A File-type split | KILL | Underestimates high-risk Markdown. |
| B Risk-only modes | REFINE | Correct base, missing operation intent. |
| C Controller with profiles | SURVIVE | Best balance of safety and usability. |
| D Separate subprotocols now | KILL now | Premature fragmentation. |
| E Content contract for Markdown | SURVIVE | Lightweight but accountable. |
| F Dynamic critic escalation | SURVIVE | Needed for conceptual/behavior risk. |
| Assembly | SURVIVE first | Integrates modes, profiles, and escalation. |

## Final Ranking

1. **SURVIVE:** Single controller protocol with operation profiles and Compact/Standard/Full modes.
2. **SURVIVE:** Content contract for Compact Markdown materialization.
3. **SURVIVE:** Dynamic critic escalation for conceptual/behavior-affecting changes.
4. **REFINE:** Risk-only modes become modes plus operation profiles.
5. **KILL:** File-type-only split.
6. **KILL now:** Separate create/edit/rewrite/refactor subprotocol files.

## Signal

TERMINATE.

The question is answered. The user's intuition is correct, but the right v1 design is one controller protocol with operation profiles, not separate subprotocol files.

## Convergence Telemetry

- **Dimension coverage:** Complete.
- **Adversarial strength:** STRONG. Both tempting simple alternatives were tested and rejected or refined.
- **Landscape stability:** STABLE.
- **Clean SURVIVE exists:** YES.
- **Failure modes observed:** None significant. Self-reference risk was reduced by grounding in the existing AlignStack command workflow and prior findings.
- **Overall:** PROCEED.

## Verification Gap

`tools/structural_check.sh` is absent, so automated structural validation could not be run.
