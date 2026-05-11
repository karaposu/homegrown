# Innovation: MVL Compact Prevention Without Core Changes

## User Input

`devdocs/inquiries/2026-05-05_17-44__mvl_compact_prevention_without_core_changes/_branch.md`

Question: How can compact or batched MVL/MVL+ execution be prevented without rewriting the core MVL loop or sub-skill discipline logic, while allowing narrowly scoped edits to relevant peripheral/rules sections of the MVL/MVL+ skill files?

## Seed

The existing MVL+ prompt already says not to batch, but compact execution still happened. The useful innovation is not a louder warning; it is a small runner-level invariant that defines what counts as a valid discipline transition and what states are invalid.

## Mechanism 1: Lens Shifting

### Generic Variation

Shift from "prompt as instruction" to "prompt as contract."

### Focused Variation

Add a runner rule named `Discipline Transaction Invariant`. It says MVL/MVL+ execution is valid only if each discipline creates one output, validates or manually checks it, commits `_state.md`, and then proceeds.

### Contrarian Variation

Treat a complete-looking inquiry folder as invalid unless `_state.md` proves the transaction sequence.

Survivor: **Prompt-as-contract invariant**.

## Mechanism 2: Combination

### Generic Variation

Combine prompt rules, `_state.md`, and CONCLUDE lifecycle.

### Focused Variation

Add a rule block to both `homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md`:

```markdown
### Discipline Transaction Invariant

Each discipline is a separate transaction. A transaction is complete only after:

1. the discipline spec has been loaded for this discipline;
2. exactly this discipline's canonical output file has been written in the inquiry root;
3. structural check has been attempted;
4. if `tools/structural_check.sh` is unavailable, a manual structural check result has been recorded;
5. `_state.md` has been updated to check off this discipline and name the next discipline.

Do not write the next discipline output before this transaction is committed in `_state.md`.
```

### Contrarian Variation

Make `_state.md` the verifier, not the final file list. `finding.md` existence cannot prove MVL/MVL+ execution.

Survivor: **Runner rule + state ledger combination**.

## Mechanism 3: Inversion

### Generic Variation

Invert "what must happen" into "what is invalid."

### Focused Variation

Add invalid compact patterns:

```markdown
Invalid compact execution patterns:

- creating two or more discipline output files before a state commit for the prior discipline;
- creating all discipline outputs and `finding.md` in one edit;
- writing discipline outputs directly into `docarchive/`;
- marking all disciplines complete in `_state.md` without prior per-discipline history entries;
- skipping structural check silently because the checker script is missing.
```

### Contrarian Variation

If a run hits one of these invalid states, it should stop and mark the inquiry as procedurally invalid rather than "complete."

Survivor: **Invalid-state list**.

## Mechanism 4: Constraint Manipulation

### Generic Variation

Add a narrow write-order constraint.

### Focused Variation

During the pipeline phase, the allowed write order is:

```text
discipline output -> structural check/fallback -> _state.md -> next discipline output
```

`finding.md` and `docarchive/` writes are disallowed until CONCLUDE.

### Contrarian Variation

Allow a multi-file patch only if it contains a single discipline output and its paired state update. Even that is weaker than separate writes, but still prevents multi-discipline batching.

Survivor: **Write-order constraint**.

## Mechanism 5: Absence Recognition

### Generic Variation

The missing object is not another finding file. The missing object is a fallback rule for absent tooling.

### Focused Variation

Add:

```markdown
If `bash tools/structural_check.sh ...` fails because the script is missing, do not treat the check as passed. Perform a manual check against the discipline's required sections, record `Structural checker unavailable; manual [discipline] check passed/failed` in `_state.md`, and only proceed if the manual check passes.
```

### Contrarian Variation

Checker absence should be a brake. It should increase state detail, not reduce it.

Survivor: **Structural-check fallback rule**.

## Mechanism 6: Domain Transfer

### Generic Variation

Borrow database transaction semantics: begin, write, validate, commit.

### Focused Variation

Describe MVL/MVL+ discipline transitions as transactions in the rules section. The commit record is `_state.md`.

### Contrarian Variation

Treat direct final artifacts as an uncommitted batch replay unless transaction commits exist.

Survivor: **Transaction metaphor**.

## Mechanism 7: Extrapolation

### Generic Variation

If only MVL+ is hardened, compact failures may recur in MVL classic.

### Focused Variation

Apply the same invariant to both runners:

- MVL classic: S, I, C transactions.
- MVL+: E, S, D, I, C transactions.

### Contrarian Variation

Do not edit discipline sub-skills for parity. Parity belongs in runners, not disciplines.

Survivor: **MVL/MVL+ parity**.

## Candidate Tests

| Candidate | Novelty | Scrutiny Survival | Fertility | Actionability | Mechanism Independence | Verdict |
|---|---|---|---|---|---|---|
| Add louder "do not batch" prompt | Low | Fails: MVL+ already had this | Low | Medium | Low | KILL |
| Discipline Transaction Invariant | Medium | High: defines observable validity | High | High | High | SURVIVE |
| Invalid-state list | Medium | High: names exact failure patterns | High | High | High | SURVIVE |
| Structural-check fallback rule | Medium | High: handles known missing tool | High | High | Medium | SURVIVE |
| CONCLUDE boundary/write-order rule | Medium | High: aligns with existing lifecycle | High | High | High | SURVIVE |
| Edit sub-skills | Low | Fails: wrong ownership layer | Low | Medium | Low | KILL |
| Restore checker or build wrapper now | Medium | Partly: stronger but larger scope | High | Medium | Medium | REFINE |

## Strongest Objections

### Objection: Prompt invariants still depend on the model obeying them.

Survival answer: true. This is protocol hardening, not mechanical enforcement. It is still the right first fix because it makes invalid states explicit and fits the allowed edit surface. Mechanical tooling can be deferred as a stronger enforcement layer.

### Objection: MVL+ already says this.

Survival answer: MVL+ already says "do not batch," but it does not name invalid artifact/state patterns or the checker fallback. The proposed rule changes the enforcement shape, not just the intensity.

### Objection: This belongs in CONCLUDE.

Survival answer: CONCLUDE already owns archive timing. The runner must prevent reaching CONCLUDE prematurely. A small runner rule can reference the CONCLUDE boundary without rewriting CONCLUDE.

### Objection: This adds ceremony.

Survival answer: the ceremony already exists in the Discipline Transition Protocol. The edit makes it auditable.

## Assembly Check

The strongest assembly is a narrow rule block added to both runner skill files:

1. **Discipline Transaction Invariant:** one discipline at a time.
2. **State Commit Requirement:** `_state.md` records each discipline completion before the next starts.
3. **Structural Check Fallback:** missing checker requires manual check and state entry.
4. **Invalid Compact States:** explicitly list batch patterns that invalidate a run.
5. **CONCLUDE Boundary:** `finding.md` and `docarchive/` are only after all discipline transactions and CONCLUDE load.
6. **Parity:** apply to both MVL and MVL+.

## Suggested Rule Block

This is the candidate text Innovation proposes for later Critique:

```markdown
### Discipline Transaction Invariant

Each discipline is a separate transaction. A discipline transaction is complete only after:

1. the discipline spec has been loaded for the current discipline;
2. exactly that discipline's canonical output file has been written in the inquiry root;
3. structural check has been attempted for that output;
4. if `tools/structural_check.sh` is unavailable, a manual structural check result has been recorded in `_state.md`;
5. `_state.md` has been updated to check off that discipline, summarize the check result, and name the next discipline.

Do not write the next discipline output before the current transaction is committed in `_state.md`.

Invalid compact execution patterns:

- writing two or more discipline outputs before a state commit for the prior discipline;
- writing all discipline outputs and `finding.md` in one edit;
- writing discipline outputs directly into `docarchive/`;
- marking all disciplines complete in `_state.md` without per-discipline history entries;
- skipping structural check silently because the checker script is missing.

`finding.md` and `docarchive/` movement belong only to CONCLUDE, after all discipline transactions are complete and after `homegrown/protocols/conclude.md` has been loaded.
```

## Mechanism Coverage Telemetry

- Generators applied: 4 / 4.
- Framers applied: 3 / 3.
- Convergence: yes. Six mechanisms converge on invariant-based runner hardening.
- Survivors tested: 7 / 7.
- Failure modes observed: none. The obvious prompt-only fix was tested and killed.
- Overall: PROCEED.

## Innovation Result

The best fix is a narrow runner-rules patch, not a core-loop rewrite:

- add the same `Discipline Transaction Invariant` block to `homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md`;
- keep discipline sub-skills unchanged;
- leave CONCLUDE mostly unchanged;
- defer structural checker restoration or external wrapper unless failures continue.
