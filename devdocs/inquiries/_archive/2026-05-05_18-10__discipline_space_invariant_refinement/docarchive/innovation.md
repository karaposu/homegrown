# Innovation: Discipline Space Invariant Refinement

## User Input

`devdocs/inquiries/2026-05-05_18-10__discipline_space_invariant_refinement/_branch.md`

Question: How should the proposed MVL/MVL+ transaction invariant be reframed so it protects each discipline's independent cognitive workspace, not merely the timing or placement of output files?

## Seed

The previous invariant correctly identified observable invalid patterns, but it risked making file order sound like the goal. The goal is discipline-space separation: each discipline gets a distinct focused run and consumes the saved output of prior disciplines.

## Mechanism 1: Lens Shifting

### Generic Variation

Shift the lens from storage transaction to cognitive workspace.

### Focused Variation

Rename the rule from `Discipline Transaction Invariant` to `Discipline Workspace Invariant`.

### Contrarian Variation

Keep "transaction" only inside the explanation as the audit layer, not the title.

Survivor: **Discipline Workspace Invariant**.

## Mechanism 2: Combination

### Generic Variation

Combine workspace isolation with artifact audit.

### Focused Variation

Rule structure:

1. Purpose: protect discipline-specific reasoning.
2. Workspace: one discipline spec, prior saved outputs, no future outputs.
3. Handoff: output/check/state.
4. Invalid patterns: evidence of workspace collapse.

### Contrarian Variation

Do not choose between cognition and files. The rule needs both.

Survivor: **Workspace plus audit structure**.

## Mechanism 3: Inversion

### Generic Variation

Invert "do not write files together" into "do not precompute later disciplines."

### Focused Variation

Add language:

```text
Do not draft, precompute, or write outputs for later disciplines while executing the current discipline.
```

### Contrarian Variation

If later discipline content already exists before the current discipline is committed, the current discipline's space was compromised.

Survivor: **No precompute rule**.

## Mechanism 4: Constraint Manipulation

### Generic Variation

Add a strict input-boundary constraint.

### Focused Variation

For each discipline:

- input is `_branch.md`, `_state.md`, and already-saved prior discipline outputs;
- output is only that discipline's canonical file;
- future discipline outputs are outside the workspace.

### Contrarian Variation

The next discipline may begin only after the prior saved artifact exists and `_state.md` commits it.

Survivor: **Input/output boundary rule**.

## Mechanism 5: Absence Recognition

### Generic Variation

The missing phrase is "why files matter."

### Focused Variation

Add:

```text
These file/state rules exist to prove the handoff happened. They are not the point of the loop; the point is that each discipline works from the prior discipline's actual saved output.
```

### Contrarian Variation

Without that explanation, agents may satisfy file order ritualistically while still compressing reasoning.

Survivor: **Rationale sentence**.

## Mechanism 6: Domain Transfer

### Generic Variation

Use laboratory contamination logic: samples must be isolated so later material does not contaminate earlier analysis.

### Focused Variation

Each discipline workspace is like an isolated analysis chamber. Future discipline conclusions cannot leak backward into current discipline output.

### Contrarian Variation

If Critique is already mentally drafted during Sensemaking, Sensemaking is contaminated by later evaluation.

Survivor: **Contamination/space model**, but keep wording plain rather than metaphor-heavy.

## Mechanism 7: Extrapolation

### Generic Variation

If the rule stays file-first, future runs may become ceremonially sequential but cognitively compact.

### Focused Variation

A future bad run could write files one at a time with state commits but still produce all content from one prior mental plan.

### Contrarian Variation

The next hardening step after this might need a wrapper, but only if workspace language plus audit traces still fails.

Survivor: **Anti-cargo-cult warning**.

## Candidate Tests

| Candidate | Novelty | Scrutiny Survival | Fertility | Actionability | Mechanism Independence | Verdict |
|---|---|---|---|---|---|---|
| Rename to Discipline Workspace Invariant | Medium | High: fixes center of gravity | High | High | High | SURVIVE |
| Keep only file transaction wording | Low | Fails user's correction | Low | Medium | Low | KILL |
| Add no-precompute rule | Medium | High: targets compact cognition | High | High | High | SURVIVE |
| Add input/output boundary rule | Medium | High: makes feed-forward concrete | High | High | High | SURVIVE |
| Keep invalid file patterns | Medium | High if rationale is explicit | Medium | High | Medium | REFINE |
| Add new artifact for discipline space proof | Low | Overhead without perfect proof | Low | Medium | Low | KILL |
| Build wrapper now | Medium | Useful later, not current wording fix | High | Medium | Medium | REFINE |

## Assembly Check

The strongest assembly is a revised rule block:

1. Title: `Discipline Workspace Invariant`.
2. Purpose sentence: each discipline gets its own focused execution space so it can produce correct output.
3. Input boundary: current discipline uses branch/state and saved prior outputs.
4. Output boundary: current discipline produces only its own canonical output.
5. No-precompute rule: do not draft later discipline outputs during current discipline.
6. Handoff/audit: output, check/fallback, `_state.md`, checkpoint.
7. Invalid compact patterns: listed as evidence of workspace collapse.

## Revised Rule Block Candidate

```markdown
### Discipline Workspace Invariant

Each discipline must run in its own focused workspace. The purpose is not merely to create files in order; the purpose is to let each discipline produce correct output from its own frame and from the prior discipline's actual saved result.

For the current discipline:

1. Load only the current discipline's spec and required references.
2. Use `_branch.md`, `_state.md`, and already-saved prior discipline outputs as the discipline's input.
3. Do not draft, precompute, or write outputs for later disciplines while executing the current discipline.
4. Write only the current discipline's canonical output file in the inquiry root.
5. Attempt structural check for that output.
6. If `tools/structural_check.sh` is unavailable, manually check the discipline's required structure and record the result in `_state.md`.
7. Update `_state.md` to check off the current discipline, summarize the check result, and name the next discipline.

Only after this handoff is committed may the next discipline begin.

The file and `_state.md` rules are the audit trail for discipline-space separation. They exist because the next discipline must consume the prior discipline's saved output, not an imagined or prewritten whole-loop answer.

Invalid compact execution patterns:

- drafting or writing outputs for later disciplines during the current discipline's workspace;
- writing two or more discipline outputs before the prior discipline has a committed `_state.md` handoff;
- writing all discipline outputs and `finding.md` in one edit;
- writing discipline outputs directly into `docarchive/`;
- marking all disciplines complete in `_state.md` without per-discipline history entries;
- skipping structural check silently because the checker script is missing.

`finding.md` and `docarchive/` movement belong only to CONCLUDE, after all discipline workspaces have completed and after `homegrown/protocols/conclude.md` has been loaded.
```

## Mechanism Coverage Telemetry

- Generators applied: 4 / 4.
- Framers applied: 3 / 3.
- Convergence: yes. All mechanisms converge on workspace-first, audit-second wording.
- Survivors tested: 7 / 7.
- Failure modes observed: none. The file-only candidate was explicitly killed.
- Overall: PROCEED.

## Innovation Result

Replace the previous `Discipline Transaction Invariant` wording with `Discipline Workspace Invariant`.

Keep file and `_state.md` restrictions, but explain that they exist to prove discipline-space separation and feed-forward handoff.
