# Critique: Discipline Space Invariant Refinement

## User Input

`devdocs/inquiries/2026-05-05_18-10__discipline_space_invariant_refinement/_branch.md`

Question: How should the proposed MVL/MVL+ transaction invariant be reframed so it protects each discipline's independent cognitive workspace, not merely the timing or placement of output files?

## Phase 0: Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Purpose Accuracy | 30 | Makes discipline output quality and feed-forward reasoning the primary goal. |
| Enforceability | 20 | Keeps observable file/state/check gates. |
| Anti-Cargo-Cult Protection | 20 | Prevents ritual file sequencing without real discipline separation. |
| Scope Fit | 15 | Fits runner rules without rewriting core loop or sub-skills. |
| Clarity | 15 | Explains why batch writing is invalid without making files sound like the goal. |

Critical dimensions: Purpose Accuracy, Enforceability, Anti-Cargo-Cult Protection.

## Phase 1: Fitness Landscape

### Viable Region

A viable rule:

- leads with discipline workspace and feed-forward logic;
- says each discipline consumes saved prior output;
- forbids drafting future discipline outputs in current space;
- keeps output/check/state requirements as audit trail;
- explains invalid file patterns as evidence of workspace collapse.

### Dead Region

Dead rules:

- file-only transaction language;
- vague "think separately" language with no audit;
- removing invalid file patterns entirely;
- adding new artifacts without improving the core distinction.

### Boundary Region

Boundary candidates:

- transaction wording retained as title;
- workspace wording without explicit no-precompute rule;
- checker-only enforcement.

These may help but do not fully answer the user's correction.

## Phase 2 And 3: Candidate Verdicts

### Candidate A: Keep `Discipline Transaction Invariant` As Previously Written

**Prosecution:**
It makes the file/state sequence sound like the core issue. That misses the user's correction that same-time writing is bad because it indicates the discipline logic was not given separate space.

**Defense:**
It is enforceable and catches the prior failure pattern.

**Collision:**
The defense is real but incomplete. The previous wording should be refined, not kept as-is.

**Verdict: REFINE**

Constructive output: keep the audit gates, but retitle and reframe around workspace.

### Candidate B: Replace With Pure `Discipline Workspace Invariant`

**Prosecution:**
If it only says each discipline needs its own space, it may become unobservable and unenforceable.

**Defense:**
It names the actual purpose and prevents file-order cargo culting.

**Collision:**
The title and purpose survive, but it must include the audit layer.

**Verdict: REFINE**

Constructive output: use workspace as title/purpose and transaction as evidence.

### Candidate C: Workspace-First Plus Audit-Trail Rule

**Prosecution:**
It is longer than the prior rule and includes both conceptual and operational language.

**Defense:**
The length is justified because it resolves the exact ambiguity. It explains why the operational gates exist and how they relate to discipline output quality.

**Collision:**
This candidate best satisfies all critical dimensions.

**Verdict: SURVIVE**

Constructive output: use the revised rule block from Innovation with minor tightening.

### Candidate D: Remove File Invalid Patterns Because They Are Only Symptoms

**Prosecution:**
It would avoid over-focusing on file writes.

**Defense:**
Removing them loses the strongest observable evidence. Symptoms are useful when they strongly indicate the underlying process failure.

**Collision:**
This candidate overcorrects.

**Verdict: KILL**

Seed extracted: retain file patterns but explain their cognitive meaning.

### Candidate E: Add No-Precompute Rule

**Prosecution:**
Precomputation is hard to verify directly.

**Defense:**
It names the exact cognitive failure that file batching indicates. It also creates a clear procedural constraint: do not draft later outputs during current discipline execution.

**Collision:**
Even if imperfectly verifiable, it is necessary to prevent cargo-cult compliance.

**Verdict: SURVIVE**

Constructive output: include no-precompute/no-future-output language in the rule.

## Phase 3.5: Assembly Check

Best assembly:

- Retitle the rule `Discipline Workspace Invariant`.
- Lead with the purpose: each discipline needs a focused execution space to produce correct output.
- Define current discipline input as branch, state, and saved prior outputs.
- Define current discipline output as only its canonical file.
- Forbid drafting or writing later discipline outputs.
- Keep output/check/state/CONCLUDE gates as audit trail.
- Keep invalid compact patterns but state they indicate workspace/feed-forward collapse.

Assembly verdict: **SURVIVE**.

## Coverage Map

| Region | Coverage | Result |
|---|---|---|
| File-only transaction wording | Covered | Refined |
| Pure workspace wording | Covered | Refined |
| Workspace plus audit trail | Covered | Survives |
| Remove file patterns | Covered | Killed |
| No-precompute rule | Covered | Survives |
| New artifact proof | Covered in Innovation | Killed |

## The Answer

The user correction is right. The invariant should not be described as primarily about writing files separately.

The actual invariant is:

> Each discipline must get its own focused workspace so it can produce correct output from its own frame and from the prior discipline's actual saved output.

The file and `_state.md` requirements remain necessary, but they are the audit trail for that deeper rule.

Writing all files together is invalid because it is evidence that the disciplines were probably not executed as separate feed-forward steps. It indicates the runner may have produced a whole-loop answer and then split it into files.

## Revised Rule Block

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

## Convergence Telemetry

- Dimension coverage: complete.
- Adversarial strength: strong. File-only and abstract-only candidates were both challenged.
- Landscape stability: stable.
- Clean SURVIVE exists: yes, workspace-first plus audit-trail rule.
- Failure modes observed: none. The critique avoided both rubber-stamping the prior invariant and overcorrecting away from observable gates.
- Overall: PROCEED.

## Signal

TERMINATE with ranked survivors:

1. **Workspace-first invariant:** discipline space and feed-forward reasoning are the protected value.
2. **Audit trail:** output/check/state/CONCLUDE gates prove the handoff as much as artifacts can.
3. **No-precompute rule:** future discipline outputs must not be drafted during current discipline execution.
