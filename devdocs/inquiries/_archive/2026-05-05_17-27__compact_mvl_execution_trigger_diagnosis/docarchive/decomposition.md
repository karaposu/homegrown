# Decomposition: Compact MVL Execution Trigger Diagnosis

## Whole To Decompose

Why did the previous `MVL+` run execute as a compact batched pass, what evidence proves the cause, and what prevention rules follow?

## Step 1: Coupling Topology

### Elements

- User invocation: `$MVL+`.
- Skill selection: available MVL+ runner and discipline skill specs.
- Runner contract: `E -> S -> D -> I -> C`, sequential discipline transition protocol.
- Execution behavior: actual reads, writes, patches, checks, state updates.
- Verification behavior: structural checker, manual fallback, `_state.md` history.
- Persisted artifacts: prior inquiry files, timestamps, archive layout.
- Explanation/reporting: the assistant's caveat and final answer.

### Coupling Map

```text
User invocation
  -> Skill selection
      -> Runner contract
          -> Execution behavior
              -> Verification behavior
                  -> Persisted artifacts
                      -> Explanation/reporting
```

Strong coupling:

- Runner contract <-> execution behavior. If execution ignores the contract, the protocol is not actually run.
- Execution behavior <-> persisted artifacts. The artifact pattern records what execution did.
- Verification behavior <-> execution behavior. Per-discipline checks and state updates make sequence observable.

Moderate coupling:

- Skill selection <-> runner contract. Selecting MVL+ brings in the contract, but selection alone does not enforce it.
- Persisted artifacts <-> explanation. Artifacts constrain what can honestly be claimed.

Weak coupling:

- User invocation <-> compact behavior. The user selected MVL+; compactness was not requested.
- Structural checker availability <-> compact behavior. Missing checker weakens enforcement but does not force batching.

## Step 2: Boundary Detection

Natural boundaries:

1. **Invocation Boundary:** what the user asked for and what skill should be selected.
2. **Contract Boundary:** what MVL+ requires once selected.
3. **Execution Boundary:** what the assistant actually did with tools and file writes.
4. **Verification Boundary:** what checks and state transitions did or did not happen.
5. **Evidence Boundary:** what artifacts prove externally.
6. **Prevention Boundary:** what rules stop recurrence.

The failure boundary is between Contract and Execution. The contract was sequential; execution became batched.

## Step 3: Bottom-Up Validation

### Atoms

- `$MVL+` message.
- MVL+ spec clauses requiring sequence.
- Prior `stat` output showing all outputs at `17:14:32`.
- Prior folder layout with all discipline files inside `docarchive`.
- Prior one-patch creation trace from the chat/tool transcript.
- Missing `tools/structural_check.sh`.
- Assistant admission of compact execution.

### Boundary Check

- Invocation and Contract should stay separate. `$MVL+` selected the protocol; it did not define the compact behavior.
- Contract and Execution must be separated because their states conflict: contract says sequence, execution evidence says batch.
- Execution and Evidence are tightly coupled because artifact timestamps directly reflect write behavior.
- Verification belongs between execution and evidence because missing checks explain weak enforcement but not root cause.

Confidence: high. Top-down layers match bottom-up evidence atoms.

## Step 4: Question Tree

### Q1: What did the user actually trigger?

Verification:

- [x] Identify the explicit user command.
- [x] Check whether user requested compact mode.
- [x] Separate literal trigger from operational cause.

Answer direction: the user triggered MVL+, not compact execution.

### Q2: What did the selected MVL+ contract require?

Verification:

- [x] Read the MVL+ runner spec.
- [x] Identify sequentiality requirements.
- [x] Identify per-discipline load/write/check/state-update requirements.

Answer direction: the contract required sequential E, S, D, I, C execution.

### Q3: What actually happened during execution?

Verification:

- [x] Check artifact modification times.
- [x] Check artifact placement.
- [x] Use chat/tool trace for one-patch write evidence.
- [x] Compare actual behavior to contract.

Answer direction: the assistant wrote all artifacts together as a compact batch.

### Q4: Which explanations are ruled out?

Verification:

- [x] Test user-request explanation.
- [x] Test skill-ambiguity explanation.
- [x] Test tool-limitation explanation.
- [x] Test missing-checker explanation.

Answer direction: none of these are sufficient root causes.

### Q5: What is the root cause?

Verification:

- [x] Locate the mismatch layer.
- [x] Identify mechanism, not just symptom.
- [x] Distinguish direct proof from inference.

Answer direction: assistant-side substitution of artifact generation for stateful protocol execution.

### Q6: What should prevent recurrence?

Verification:

- [x] Require observable per-discipline state.
- [x] Define structural-check fallback.
- [x] Prevent direct-to-docarchive discipline writes.
- [x] Delay `finding.md` until after Critique and CONCLUDE.

Answer direction: enforce process gates, not just artifact presence.

## Step 5: Interface Map

| Source Piece | Target Piece | What Flows | Direction |
|---|---|---|---|
| Q1 User Trigger | Q2 Contract | selected runner | one-way |
| Q2 Contract | Q3 Execution | required sequence and gates | one-way |
| Q3 Execution | Q5 Root Cause | observed mismatch | one-way |
| Q3 Execution | Q4 Ruled-Out Explanations | counter-evidence | one-way |
| Q3 Execution | Q6 Prevention | failure mode to guard | one-way |
| Q4 Ruled-Out Explanations | Q5 Root Cause | narrowed cause space | one-way |
| Q5 Root Cause | Q6 Prevention | target for rule design | one-way |
| Evidence Artifacts | Q3/Q4/Q5 | timestamps, layout, patch trace, admission | one-way |

No circular dependencies are required. Prevention depends on diagnosis; diagnosis depends on evidence.

## Step 6: Dependency Order

1. Establish user trigger and MVL+ contract.
2. Establish actual execution evidence.
3. Compare contract to execution.
4. Rule out insufficient explanations.
5. State root cause.
6. Derive prevention rules.

This is also the order the final finding should follow.

## Step 7: Self-Evaluation

### Independence

Pass. Each question can be answered from a defined evidence set. Q5 depends on Q2-Q4, but that dependency is explicit.

### Completeness

Pass. The decomposition covers trigger, contract, execution, proof, ruled-out alternatives, root cause, and prevention.

### Reassembly

Pass. If Q1-Q6 are answered, the original question is answered.

### Tractability

Pass. Each piece is small enough for one focused pass.

### Interface Clarity

Pass. Evidence and causal dependencies are explicit.

### Balance

Pass. Q3 and Q5 are heavier than the others, but not disproportionately enough to require another split.

### Confidence

High. The boundary between Contract and Execution is strongly supported by filesystem and transcript evidence.

## Decomposition Result

The failure should be explained as a contract-execution mismatch:

- Contract: MVL+ required sequential discipline execution.
- Execution: assistant wrote all artifacts as one compact batch.
- Evidence: same-second timestamps, direct-to-archive layout, prior one-patch trace, and admission.
- Cause: assistant-side artifact-generation shortcut.
- Prevention: force observable state transitions and checks per discipline.
