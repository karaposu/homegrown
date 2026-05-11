# Innovation: Compact MVL Execution Trigger Diagnosis

## User Input

`devdocs/inquiries/2026-05-05_17-27__compact_mvl_execution_trigger_diagnosis/_branch.md`

Question: What specifically caused the previous `MVL+` runs to be executed as compact batched passes instead of sequential discipline-by-discipline runs, and what evidence proves the cause?

## Seed

The compact run was not a content failure. It was a process-proof failure: the final artifacts existed, but the observable state transitions that prove MVL+ actually ran were missing.

Valuation signal: the user cares about explicitness, durable Markdown artifacts, and avoiding fake protocol compliance.

## Mechanism 1: Lens Shifting

### Generic Variation

Evaluate MVL+ as a state machine, not as a writing style.

### Focused Variation

Every discipline transition must leave a durable state trace: output file exists, check attempted, `_state.md` updated, next discipline named.

### Contrarian Variation

Assume the final `finding.md` is untrusted unless the intermediate state trail proves the loop happened.

Survivor: **state-machine lens**. It directly addresses the failure boundary between contract and execution.

## Mechanism 2: Combination

### Generic Variation

Combine discipline output files with a process ledger.

### Focused Variation

Use `_state.md` as both progress state and evidence ledger:

- discipline completed
- output path
- checker result or manual fallback
- key telemetry
- next discipline

### Contrarian Variation

Make the ledger more important than `finding.md`; a finding without a complete ledger is procedurally invalid.

Survivor: **state ledger in `_state.md`**. It creates durable proof without adding a separate file for every run.

## Mechanism 3: Inversion

### Generic Variation

Invert "final artifacts prove the run" into "only intermediate transitions prove the run."

### Focused Variation

No `finding.md` may be written until Critique exists in the inquiry root and `_state.md` marks Critique complete.

### Contrarian Variation

No discipline output may be created directly under `docarchive`; direct-to-archive means the process is suspect until proven otherwise.

Survivor: **conclude gate**. It prevents the exact direct-to-archive pattern seen in the compact run.

## Mechanism 4: Constraint Manipulation

### Generic Variation

Add a hard constraint: one discipline output per file-edit operation.

### Focused Variation

For MVL+, after writing `exploration.md`, the next allowed edit is `_state.md`; the next discipline output is not allowed until that state edit exists.

### Contrarian Variation

Disallow multi-file patches during the discipline phase, except the state update paired after a single output has been checked.

Survivor: **one-output gate**. It turns "sequential" into an enforceable local action rule.

## Mechanism 5: Absence Recognition

### Generic Variation

The missing object is a fallback protocol for absent structural check tooling.

### Focused Variation

If `tools/structural_check.sh` is missing, the runner must:

1. attempt the checker and record failure,
2. run a manual section/requirement check,
3. record the manual check result in `_state.md`,
4. then proceed.

### Contrarian Variation

Checker absence should slow the run down, not speed it up. Lack of tooling increases the need for visible state.

Survivor: **manual check fallback**. It closes the guardrail gap exposed by this run.

## Mechanism 6: Domain Transfer

### Generic Variation

Import transaction-log thinking from databases: a committed outcome needs a log of state transitions.

### Focused Variation

Treat each discipline as a committed transaction:

- begin discipline by loading spec,
- write output,
- validate output,
- commit by updating `_state.md`,
- only then begin the next transaction.

### Contrarian Variation

If a "transaction log" says everything committed at the same instant, assume batch replay, not live execution.

Survivor: **discipline transaction model**. It gives a concrete mental model for future runs.

## Mechanism 7: Extrapolation

### Generic Variation

If compact MVL+ is tolerated once, future inquiries will accumulate complete-looking but process-invalid findings.

### Focused Variation

Over time, `devdocs/inquiries/` becomes less trustworthy because artifact existence no longer implies protocol execution.

### Contrarian Variation

The bigger risk is not one wrong answer; it is teaching downstream workflows to trust polished artifacts without process evidence.

Survivor: **procedural validity requirement**. It frames prevention as preserving archive trust, not just avoiding embarrassment.

## Candidate Tests

| Candidate | Novelty | Scrutiny Survival | Fertility | Actionability | Mechanism Independence | Verdict |
|---|---|---|---|---|---|---|
| State-machine lens | Medium | High: explains root mismatch | High | High | High | Survives |
| State ledger in `_state.md` | Medium | High: avoids extra file bloat while keeping proof | High | High | High | Survives |
| Conclude gate | Medium | High: blocks direct-to-archive pattern | Medium | High | High | Survives |
| One-output gate | Medium | High: directly prevents one-patch batch | Medium | High | High | Survives |
| Manual check fallback | Medium | High: handles missing checker without shortcut | High | High | Medium | Survives |
| Discipline transaction model | Medium | High: provides usable execution metaphor | High | Medium | High | Survives |
| Procedural validity requirement | High | High: protects archive meaning | High | Medium | High | Survives |

## Strongest Objections

### Objection: This adds too much ceremony.

Survival answer: MVL+ already defines the ceremony. The innovation does not add extra disciplines; it makes the existing sequence externally visible and recoverable.

### Objection: `_state.md` may become noisy.

Survival answer: `_state.md` is already the source of truth. A one-line history entry per discipline is proportional and avoids creating extra files.

### Objection: Manual checks are weaker than automated checks.

Survival answer: true, but a recorded manual fallback is stronger than silently skipping the gate. It also makes the missing automation visible.

### Objection: One-output patches are inefficient.

Survival answer: efficiency is not the governing value for MVL+. The runner explicitly says each skill should run canonically even if it consumes context.

## Assembly Check

The strongest assembly is:

1. Treat MVL+ as a state machine.
2. Treat each discipline as a transaction.
3. Enforce one discipline output before one state update.
4. Keep discipline outputs in the inquiry root until CONCLUDE.
5. If the checker is missing, record manual fallback in `_state.md`.
6. Do not write `finding.md` until Critique is complete and CONCLUDE is loaded.
7. Treat archive trust as depending on procedural validity, not final polish.

This assembly directly targets the contract-execution mismatch identified by Decomposition.

## Mechanism Coverage Telemetry

- Generators applied: 4 / 4.
- Framers applied: 3 / 3.
- Convergence: yes. All seven mechanisms converge on observable per-discipline state transitions.
- Survivors tested: 7 / 7.
- Failure modes observed: none. Generation and testing were separated, all mechanisms were used, and survivors were challenged.
- Overall: PROCEED.

## Innovation Result

The prevention should not be only "do not run MVL+ compactly." That is too abstract.

The stronger rule is:

For MVL+, every discipline must be a visible transaction: load the discipline spec, write exactly that discipline's canonical output in the inquiry root, attempt structural validation or record manual fallback, update `_state.md`, and only then proceed. `finding.md` and `docarchive/` movement belong after Critique, through CONCLUDE.
