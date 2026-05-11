# Decomposition: Discipline Space Invariant Refinement

## Whole To Decompose

Reframe the MVL/MVL+ prevention rule so it protects independent discipline workspace and uses file/state traces as evidence, not as the core purpose.

## Step 1: Coupling Topology

### Elements

- MVL/MVL+ discipline sequence.
- Current discipline's loaded spec.
- Prior saved discipline outputs.
- Current discipline workspace.
- Later discipline outputs.
- Canonical output file.
- Structural check/fallback.
- `_state.md` transition commit.
- CONCLUDE finalization.

### Coupling Map

```text
Prior saved outputs
  -> current discipline workspace
      -> current discipline output
          -> structural check/fallback
              -> _state.md transition commit
                  -> next discipline workspace
                      -> next discipline output
                          -> ... -> CONCLUDE
```

Strong coupling:

- prior saved output <-> current discipline workspace;
- current workspace <-> current output;
- current output <-> next discipline input.

Moderate coupling:

- output file <-> structural check;
- structural check <-> `_state.md` commit;
- `_state.md` commit <-> next discipline permission.

Weak coupling:

- file timestamp <-> cognitive separation. Timestamp is evidence, not essence.

## Step 2: Boundary Detection

Natural pieces:

1. **Purpose Layer:** why discipline separation matters.
2. **Workspace Layer:** what each discipline is allowed to do in its own space.
3. **Handoff Layer:** how prior output becomes next input.
4. **Audit Layer:** what files/state/checks prove.
5. **Invalid Collapse Layer:** what patterns indicate workspace collapse.
6. **Rule Wording Layer:** how to write this into MVL/MVL+ rules.

## Step 3: Bottom-Up Validation

### Atoms

- User correction: "it actually not just about writing files."
- User correction: "writing at the same time is bad because it means sequential logic was not done properly maybe."
- User correction: "we would like to ensure each discipline takes its own space so they can output correctly."
- Prior invariant: file output, checker, state update.
- MVL/MVL+ structure: each step feeds the next.

### Boundary Check

- Purpose and audit must be separate. If merged, the rule becomes file-culting.
- Workspace and handoff must stay coupled. A discipline's workspace is defined partly by what it consumes.
- Invalid collapse belongs after purpose. The same invalid pattern is meaningful only if its cognitive reason is stated.

Confidence: high.

## Step 4: Question Tree

### Q1: What is the purpose of the invariant?

Verification:

- [ ] States that discipline output quality depends on separate focused execution.
- [ ] States that each discipline must consume actual prior saved artifacts.
- [ ] Does not frame files as the goal.

### Q2: What is a valid discipline workspace?

Verification:

- [ ] One discipline spec loaded.
- [ ] Prior saved outputs available as input.
- [ ] No later discipline outputs drafted or written.
- [ ] Current discipline produces only its own canonical output.

### Q3: What is a valid handoff?

Verification:

- [ ] Current output is saved.
- [ ] Current output is checked or manually verified.
- [ ] `_state.md` records completion and next discipline.
- [ ] Next discipline begins after that record.

### Q4: What artifacts audit the workspace?

Verification:

- [ ] Canonical output file.
- [ ] Structural check/fallback result.
- [ ] `_state.md` history entry.
- [ ] Checkpoint summary.
- [ ] CONCLUDE lifecycle.

### Q5: What patterns invalidate a run?

Verification:

- [ ] Batch writing all outputs.
- [ ] Writing later outputs before current handoff.
- [ ] Direct-to-archive discipline outputs.
- [ ] Completing `_state.md` only at end.
- [ ] Silent checker skip.
- [ ] Precomputing later discipline content during earlier discipline space.

### Q6: What should the rule be called?

Verification:

- [ ] Name points to purpose.
- [ ] Transaction/audit remains available as implementation language.

Candidate: `Discipline Workspace Invariant`.

## Step 5: Interface Map

| Source Piece | Target Piece | What Flows | Direction |
|---|---|---|---|
| Purpose Layer | Workspace Layer | reason for isolation | one-way |
| Workspace Layer | Handoff Layer | current output | one-way |
| Handoff Layer | Next Workspace | saved artifact as input | one-way |
| Audit Layer | Invalid Collapse Layer | evidence signals | one-way |
| Invalid Collapse Layer | Rule Wording Layer | forbidden patterns | one-way |
| Purpose Layer | Rule Wording Layer | rationale language | one-way |

## Step 6: Dependency Order

1. Define purpose.
2. Define valid workspace.
3. Define handoff.
4. Define audit artifacts.
5. Define invalid collapse patterns.
6. Write final rule.

## Step 7: Self-Evaluation

### Independence

Pass. Each piece is separately answerable while retaining clear interfaces.

### Completeness

Pass. The decomposition covers the user's correction, the old invariant's useful parts, and the revised wording need.

### Reassembly

Pass. The pieces reassemble into a rule that explains both why and how.

### Tractability

Pass. Each piece can be expressed in a short rule section.

### Interface Clarity

Pass. Purpose flows into workspace; workspace produces handoff; handoff creates audit evidence.

### Balance

Pass. No piece dominates.

### Confidence

High. Boundaries align with the user's correction and MVL/MVL+ feed-forward structure.

## Decomposition Result

The revised invariant should be structured as:

1. **Purpose:** preserve discipline-specific reasoning space.
2. **Workspace:** one discipline, one spec, prior saved outputs, no later outputs.
3. **Handoff:** output/check/state commit before next discipline.
4. **Audit:** files and `_state.md` evidence the handoff.
5. **Invalid collapse:** batch writes are invalid because they indicate workspace/feed-forward collapse.
