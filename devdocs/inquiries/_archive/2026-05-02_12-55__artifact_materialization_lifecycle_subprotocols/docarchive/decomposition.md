# Decomposition: Artifact Materialization Lifecycle Subprotocols

## Input

`devdocs/inquiries/2026-05-02_12-55__artifact_materialization_lifecycle_subprotocols/_branch.md`

Reads: `_branch.md`, `exploration.md`, and `sensemaking.md`.

## 1. Coupling Map

### Major Clusters

| Cluster | Contents | Coupling |
| --- | --- | --- |
| A. Shared materialization invariants | source authority, artifact contract, write-set, validation, trace, outcome gate | Strong internal coupling |
| B. Classification axes | artifact type, operation intent, risk facts, lifecycle mode | Strong internal coupling |
| C. Lifecycle modes | Compact, Standard, Full | Moderate-to-strong coupling to B |
| D. Operation profiles | create, edit, rewrite, refactor, extend, extract, delete/deprecate | Moderate coupling to B and C |
| E. Artifact-specific paths | content/Markdown path, code/behavior path, protocol/skill path | Moderate coupling to C and D |
| F. Future extraction policy | when operation profiles become separate subprotocols | Weak coupling to v1 execution |

### Dominant Boundaries

1. **Shared invariants vs specialization**
   - Invariants always apply.
   - Specialization changes lifecycle depth and checks.

2. **Classification vs execution**
   - First classify artifact/operation/risk.
   - Then execute Compact/Standard/Full path.

3. **Operation profiles vs subprotocols**
   - Operation profiles are v1 internal sections.
   - Subprotocols are future extracted files only if evidence justifies them.

4. **Content artifacts vs behavior artifacts**
   - Content artifacts need purpose/containment/relationship checks.
   - Behavior artifacts need implementation plan/dynamic critic/validation.

## 2. Boundary Validation

### Top-Down Candidate Pieces

- P1: universal materialization contract.
- P2: classification and mode-selection logic.
- P3: Compact content/materialization path.
- P4: Standard/Full implementation path.
- P5: operation profiles.
- P6: escalation and validation rules.
- P7: future subprotocol extraction gates.

### Bottom-Up Atoms

- `source authority`
- `target path/write-set`
- `artifact contract`
- `operation intent`
- `artifact type`
- `risk facts`
- `mode`
- `desc.md`
- `step_by_step_impl_plan.md`
- `dynamic_critic_prompt.md`
- `critic.md`
- `plan repair`
- `implementation`
- `validation`
- `materialization_trace.md`
- `outcome_review gate`

Top-down and bottom-up agree. The universal contract is a coherent base piece; operation profiles are real atoms but not independent enough to become separate files yet.

## 3. Question Tree

### Q1. What must every materialization run record?

Verification criteria:

- [ ] Source authority is required.
- [ ] Artifact contract is required.
- [ ] Target path/write-set is required.
- [ ] Validation plan is required.
- [ ] Trace and outcome gate are required.
- [ ] No artifact type can bypass these.

### Q2. How should the protocol classify a request before choosing process depth?

Verification criteria:

- [ ] Captures artifact type.
- [ ] Captures operation intent.
- [ ] Captures risk facts.
- [ ] Captures behavior/instruction impact.
- [ ] Captures validation clarity.
- [ ] Produces Compact/Standard/Full mode.

### Q3. What is the Compact Markdown/content path?

Verification criteria:

- [ ] Includes reason for existence.
- [ ] Includes must-contain and must-not-contain.
- [ ] Includes relationship to existing artifacts.
- [ ] Includes tiny plan.
- [ ] Includes validation/manual review.
- [ ] Includes trace and follow-up gate.

### Q4. What is the Standard/Full code or behavior-changing path?

Verification criteria:

- [ ] Uses task description.
- [ ] Uses implementation plan.
- [ ] Uses dynamic critic.
- [ ] Requires plan repair for High/Medium risks.
- [ ] Validates with commands or explicit manual review.
- [ ] Produces trace.

### Q5. How do operation profiles modify the path?

Verification criteria:

- [ ] `create` checks source, scope, discoverability.
- [ ] `edit` checks local coherence and narrow write-set.
- [ ] `rewrite` checks meaning preservation and removed content.
- [ ] `refactor` checks behavior/meaning preservation.
- [ ] `extend` checks scope creep and duplication.
- [ ] `extract` checks references and orphaned context.
- [ ] `delete/deprecate` checks history, redirects, and downstream links.

### Q6. When should the protocol escalate?

Verification criteria:

- [ ] Escalates on behavior impact.
- [ ] Escalates on existing loaded protocol/skill/runner changes.
- [ ] Escalates on unclear validation.
- [ ] Escalates on write-set expansion.
- [ ] Escalates on rewrite/refactor of load-bearing content.

### Q7. When should operation profiles become subprotocol files?

Verification criteria:

- [ ] Requires repeated traces.
- [ ] Requires stable independent logic.
- [ ] Requires enough length/complexity that controller readability suffers.
- [ ] Requires no duplication of shared invariants.

## 4. Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| Q1 Universal contract | Q2 Classification | source, artifact contract, write-set | one-way |
| Q2 Classification | Q3 Compact path | mode = Compact plus content risk facts | one-way |
| Q2 Classification | Q4 Standard/Full path | mode = Standard/Full plus risk facts | one-way |
| Q2 Classification | Q5 Operation profiles | operation intent | one-way |
| Q5 Operation profiles | Q3/Q4 | operation-specific checks and escalation modifiers | one-way |
| Q6 Escalation | Q3/Q4 | mode upgrade or pause/re-plan | bidirectional control |
| Q3/Q4 | Q1 trace/outcome | files changed, validation, deviations, outcome | returns to trace |
| Q7 Extraction gates | future protocol structure | evidence from repeated traces | one-way deferred |

## 5. Dependency Order

1. **Q1 Universal contract**
   - Must come first. Without it, all paths can drift.

2. **Q2 Classification**
   - Depends on Q1 because source/write-set/risk facts are classified.

3. **Q5 Operation profiles**
   - Depends on Q2 because operation intent must be known.

4. **Q3 Compact path and Q4 Standard/Full path**
   - Depend on Q2 and Q5.
   - Can be written in parallel once mode and operation profile rules exist.

5. **Q6 Escalation**
   - Depends on Q3/Q4 examples.
   - Must be included before protocol is usable.

6. **Q7 Extraction gates**
   - Last. It governs future growth, not immediate execution.

## 6. Reassembly Test

If all pieces are present, `artifact_materialization.md` can answer:

```text
Given an authorized artifact request,
what kind of artifact is it,
what operation is being performed,
how risky is it,
what lifecycle depth is required,
what concrete steps should be taken,
what validation is required,
and what trace/outcome gate proves the run happened?
```

This reconstructs the whole protocol purpose.

## 7. Self-Evaluation

| Dimension | Result | Notes |
| --- | --- | --- |
| Independence | PASS | Each piece can be written as a separate section. |
| Completeness | PASS | Covers shared contract, classification, modes, operation profiles, escalation, validation, future extraction. |
| Reassembly | PASS | Pieces combine into one usable controller protocol. |
| Tractability | PASS | Each piece is small enough for one protocol-writing pass. |
| Interface clarity | PASS | Mode selection and operation profiles feed execution paths cleanly. |
| Balance | PASS | Q3/Q4 are heavier but appropriate. |
| Confidence | HIGH | Boundaries match existing prior findings and user's examples. |

## Decomposition Output

Innovation should design the concrete protocol architecture around:

```text
controller protocol
  -> universal contract
  -> classification
  -> Compact content path
  -> Standard/Full implementation path
  -> operation profiles
  -> escalation
  -> extraction gates
```

## Verification Gap

`tools/structural_check.sh` is absent, so automated structural validation could not be run.
