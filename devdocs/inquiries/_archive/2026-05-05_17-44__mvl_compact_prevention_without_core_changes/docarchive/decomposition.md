# Decomposition: MVL Compact Prevention Without Core Changes

## Whole To Decompose

Prevent compact or batched MVL/MVL+ execution while preserving the existing core loops and discipline sub-skills, allowing only narrow runner/rules hardening where useful.

## Step 1: Coupling Topology

### Elements

- `homegrown/MVL/SKILL.md`
- `homegrown/MVL+/SKILL.md`
- discipline sub-skills: `explore`, `sense-making`, `decompose`, `innovate`, `td-critique`
- `homegrown/protocols/conclude.md`
- `_state.md` inquiry state file
- discipline output files in inquiry root
- `docarchive/` archive folder
- `tools/structural_check.sh`
- optional external runner/wrapper

### Coupling Map

```text
MVL/MVL+ runner rules
  -> discipline transition protocol
      -> discipline output files in inquiry root
      -> structural check attempt/fallback
      -> _state.md transaction commit
          -> next discipline permission
              -> Critique complete
                  -> CONCLUDE
                      -> finding.md
                      -> docarchive/
```

Strong coupling:

- Runner rules <-> discipline transition protocol.
- Discipline output files <-> `_state.md` commits.
- CONCLUDE <-> `finding.md` and `docarchive/`.

Moderate coupling:

- Structural checker <-> transition validity.
- MVL classic <-> MVL+ parity.

Weak coupling:

- Discipline sub-skills <-> orchestration failure. They provide discipline content but do not control whether the runner batches disciplines.
- External wrapper <-> immediate prompt fix. It can enforce later, but is not required for narrow rule hardening.

## Step 2: Boundary Detection

Natural pieces:

1. **Runner Rule Hardening:** what to add to MVL/MVL+ rules.
2. **State Ledger Contract:** what `_state.md` must record after each discipline.
3. **Structural Check Fallback:** what to do when `tools/structural_check.sh` is absent.
4. **CONCLUDE Boundary:** what cannot happen before all discipline transactions complete.
5. **Parity Boundary:** how MVL and MVL+ should share the same invariant language.
6. **Deferred Tooling Boundary:** what mechanical tooling can be postponed.

Do not cut into discipline sub-skills. That would be a wrong boundary because the failure is runner orchestration.

## Step 3: Bottom-Up Validation

### Atoms

- MVL+ already says "not at once" and "not run all skills and write all docs."
- MVL+ Rule 8 forbids parallel/subagent shortcutting.
- MVL classic has sequential transition protocol but no equivalent extra anti-batching rule.
- CONCLUDE reads root discipline outputs and then archives them.
- Previous compact failure wrote files together and already archived outputs.
- Structural checker is missing.

### Boundary Check

- Runner Rule Hardening is real because both runner files own sequencing.
- State Ledger Contract is real because `_state.md` is already the source of truth.
- Structural Check Fallback is real because the checker instruction currently has no fallback when the script is missing.
- CONCLUDE Boundary is real because archive movement belongs to CONCLUDE.
- Parity Boundary is real because MVL and MVL+ share the same orchestration risk.
- Deferred Tooling is separate because it is a stronger enforcement layer but not the immediate prompt/rules surface.

Confidence: high.

## Step 4: Question Tree

### Q1: What narrow rule should be added to MVL/MVL+?

Verification:

- [ ] It does not rewrite the core loop.
- [ ] It names invalid compact patterns.
- [ ] It applies to both MVL and MVL+ with pipeline-specific file lists.
- [ ] It is short enough to belong in the runner rules/peripheral section.

### Q2: What must `_state.md` record?

Verification:

- [ ] One history entry per discipline completion.
- [ ] Output file path or name is identifiable.
- [ ] Structural check result or manual fallback is recorded.
- [ ] Next discipline is set before the next output is written.

### Q3: What should happen when `tools/structural_check.sh` is missing?

Verification:

- [ ] Checker attempt is made or absence is explicitly noticed.
- [ ] Manual section/requirement check is performed.
- [ ] `_state.md` records the fallback.
- [ ] The missing checker does not allow skipping the transaction.

### Q4: What is the CONCLUDE boundary?

Verification:

- [ ] `finding.md` cannot be written before all discipline transactions complete.
- [ ] Discipline outputs cannot be moved into `docarchive/` before CONCLUDE.
- [ ] CONCLUDE remains the only normal archive movement phase.

### Q5: What should not be changed?

Verification:

- [ ] Do not rewrite MVL/MVL+ core pipeline definitions.
- [ ] Do not edit discipline sub-skill logic for this failure.
- [ ] Do not add routine extra review artifacts unless separately justified.

### Q6: What can be deferred?

Verification:

- [ ] Restore/create `tools/structural_check.sh` can be later tooling work.
- [ ] External wrapper/harness can be later if prompt hardening fails.
- [ ] Monitoring trigger is defined.

## Step 5: Interface Map

| Source Piece | Target Piece | What Flows | Direction |
|---|---|---|---|
| Runner Rule Hardening | State Ledger Contract | required transaction fields | one-way |
| Runner Rule Hardening | Structural Check Fallback | fallback requirement | one-way |
| Runner Rule Hardening | CONCLUDE Boundary | no early finding/archive rule | one-way |
| State Ledger Contract | Next Discipline Permission | proof previous discipline committed | one-way |
| Structural Check Fallback | State Ledger Contract | check result or fallback note | one-way |
| CONCLUDE Boundary | Artifact Lifecycle | finding and archive timing | one-way |
| Parity Boundary | MVL/MVL+ edits | shared invariant language | one-way |
| Deferred Tooling | Runner Rule Hardening | later enforcement if prompt-only guardrails fail | one-way |

No circular dependencies. Runner rule hardening provides the contract; state/check/lifecycle enforce it in artifacts.

## Step 6: Dependency Order

1. Define the discipline transaction invariant.
2. Define `_state.md` ledger requirements.
3. Define structural-check fallback.
4. Define CONCLUDE boundary.
5. Apply parity to MVL and MVL+.
6. Decide whether to implement now or defer tooling.

## Step 7: Self-Evaluation

### Independence

Pass. Each piece can be reasoned about independently. The runner rule can be drafted before restoring tooling; checker fallback can be defined without modifying CONCLUDE.

### Completeness

Pass. The decomposition covers prompt/rule edits, state evidence, checker absence, archive timing, parity, and deferrable mechanical enforcement.

### Reassembly

Pass. If Q1-Q6 are answered, the system has a concrete prevention plan that fits the user's corrected scope.

### Tractability

Pass. Each piece is small enough for a focused rule or finding section.

### Interface Clarity

Pass. The main cross-piece flow is simple: runner rules require transactions; `_state.md` records them; CONCLUDE only runs after them.

### Balance

Pass. Runner Rule Hardening is the largest piece, but not so large that it requires sub-decomposition.

### Confidence

High. The boundaries align with source ownership and prior failure evidence.

## Decomposition Result

The fix should be designed as a runner-level invariant package:

- **Discipline Transaction Invariant:** one discipline output plus one state commit before next discipline.
- **Invalid States:** multi-discipline patch, direct-to-archive output, final `_state.md` completion without per-discipline commits, silent checker skip.
- **Checker Fallback:** manual check recorded when tooling is missing.
- **CONCLUDE Boundary:** no `finding.md` or archive movement before all discipline transactions complete.
- **Parity:** apply to both Homegrown MVL and MVL+.
- **Deferred Tooling:** restore checker or add wrapper if prompt-level invariants still fail.
