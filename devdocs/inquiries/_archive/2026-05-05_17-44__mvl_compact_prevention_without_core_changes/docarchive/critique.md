# Critique: MVL Compact Prevention Without Core Changes

## User Input

`devdocs/inquiries/2026-05-05_17-44__mvl_compact_prevention_without_core_changes/_branch.md`

Question: How can compact or batched MVL/MVL+ execution be prevented without rewriting the core MVL loop or sub-skill discipline logic, while allowing narrowly scoped edits to relevant peripheral/rules sections of the MVL/MVL+ skill files?

## Phase 0: Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Scope Fit | 25 | Does not rewrite core MVL loops or discipline sub-skills; allows narrow runner/rules edits. |
| Failure Coverage | 25 | Directly blocks or detects the prior compact failure patterns. |
| Source Fit | 20 | Uses `homegrown/` source files and matches existing artifact lifecycle. |
| Enforceability | 15 | Creates observable state/file invariants, not only generic intent. |
| Minimality | 10 | Keeps the change small and localized. |
| Future Leverage | 5 | Leaves a path to stronger tooling if needed. |

Critical dimensions: Scope Fit, Failure Coverage, Source Fit.

## Phase 1: Fitness Landscape

### Viable Region

A viable fix:

- patches only runner/rules or peripheral sections of `homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md`;
- leaves discipline sub-skills alone;
- names compact execution as invalid;
- handles missing structural checker explicitly;
- preserves CONCLUDE as the archive/finding boundary.

### Dead Region

Dead approaches:

- repeat "do not batch" without new invariants;
- rewrite core loop mechanics;
- edit every discipline sub-skill;
- rely on `finding.md` existence as proof;
- require a large wrapper before any immediate fix.

### Boundary Region

Boundary approaches:

- restoring `tools/structural_check.sh`;
- building a mechanical wrapper;
- changing CONCLUDE to validate transaction histories.

These may be useful later, but they are larger or adjacent to the immediate prompt-hardening question.

## Phase 2 And 3: Candidate Verdicts

### Candidate A: Add A Louder Generic Anti-Batching Prompt

**Prosecution:**
MVL+ already says not to run all skills at once and not to write all docs together. The previous failure happened anyway.

**Defense:**
More prominent wording might catch attention in future runs.

**Collision:**
The defense is weak because it repeats a guardrail that already failed. More emphasis does not define observable invalid states.

**Verdict: KILL**

Seed extracted: warning language must become invariant language.

### Candidate B: Add A Discipline Transaction Invariant To Both Runners

**Prosecution:**
It still depends on the model following the prompt. It is not mechanical enforcement.

**Defense:**
It fits the allowed scope, keeps the core loop unchanged, and directly targets the prior failure. It makes compact execution invalid by artifact/state pattern, not just by intention.

**Collision:**
The prosecution is true but not fatal. The task asks what can be done at the prompt/rules layer. This is the strongest minimal change at that layer.

**Verdict: SURVIVE**

Constructive output: add a concise rule block to both `homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md`.

### Candidate C: Add Invalid Compact Execution Patterns

**Prosecution:**
Could make the prompt longer and more procedural.

**Defense:**
The prior failure had concrete signatures: multi-output patch, direct-to-archive outputs, final state completion without per-discipline commits, silent checker skip. Naming them improves detection and discourages false compliance.

**Collision:**
The extra length is justified because it names high-risk invalid states.

**Verdict: SURVIVE**

Constructive output: include a short invalid-state list under the transaction invariant.

### Candidate D: Add Structural-Check Fallback

**Prosecution:**
Manual checks are weaker than automated checks.

**Defense:**
The current repo lacks `tools/structural_check.sh`. Without a fallback, every runner has an unhandled branch. Manual check plus `_state.md` record is weaker than automation but stronger than silent skip.

**Collision:**
The fallback is necessary until the checker exists.

**Verdict: SURVIVE**

Constructive output: require state history to record `Structural checker unavailable; manual [discipline] check passed/failed`.

### Candidate E: Restore Or Create `tools/structural_check.sh` Now

**Prosecution:**
It is outside the immediate question about MVL prompt/rules hardening and may require defining check schemas for every discipline.

**Defense:**
It would add real mechanical validation and reduce dependence on manual checks.

**Collision:**
This is valuable but not the first fix. The prompt must still define fallback and invalid states because tooling can be missing, broken, or bypassed.

**Verdict: REFINE**

Constructive output: defer as a follow-up after runner rules are hardened.

### Candidate F: Build A Mechanical MVL Runner/Wrapper

**Prosecution:**
Larger scope; could conflict with current skill-driven workflow; not needed to answer the immediate prevention question.

**Defense:**
It would be the strongest enforcement layer because it can physically sequence reads/writes/checks.

**Collision:**
Useful if prompt hardening fails again, but too heavy as the immediate answer.

**Verdict: REFINE**

Constructive output: define a monitoring trigger. If another compact run occurs after the invariant patch, then design a wrapper.

### Candidate G: Edit Discipline Sub-Skills

**Prosecution:**
Wrong ownership layer. A discipline skill cannot force the runner to call it separately.

**Defense:**
It could remind each discipline to save its own file.

**Collision:**
The defense does not address the orchestration failure. It spreads logic across unrelated files.

**Verdict: KILL**

Seed extracted: orchestration failures need runner-level controls.

## Phase 3.5: Assembly Check

Surviving assembly:

1. Patch both Homegrown runners with a shared `Discipline Transaction Invariant`.
2. Include a short invalid compact execution list.
3. Include structural-check fallback language.
4. Include CONCLUDE boundary language.
5. Keep discipline sub-skills unchanged.
6. Defer checker restoration and wrapper work behind monitoring triggers.

Assembly verdict: **SURVIVE**.

## Coverage Map

| Region | Coverage | Result |
|---|---|---|
| Generic prompt addition | Covered | Killed |
| Runner invariant patch | Covered | Survives |
| Invalid-state list | Covered | Survives |
| Checker fallback | Covered | Survives |
| CONCLUDE boundary | Covered | Survives as part of assembly |
| Sub-skill edits | Covered | Killed |
| Structural checker restoration | Covered | Refined/deferred |
| Mechanical wrapper | Covered | Refined/deferred |

## The Answer

The existing prompts are not the core problem. MVL+ already contains explicit anti-batching text, so simply adding another warning is not enough.

The problem is that the runners do not yet make compact execution invalid in observable artifact/state terms. The fix should be a narrow rules/peripheral edit to both Homegrown runners:

- add a `Discipline Transaction Invariant`;
- list invalid compact execution patterns;
- require structural-check fallback when the checker script is missing;
- make `finding.md` and `docarchive/` movement CONCLUDE-only;
- apply the same invariant to classic MVL and MVL+.

Do not rewrite the core loops. Do not edit sub-skill discipline logic for this failure.

## Convergence Telemetry

- Dimension coverage: complete.
- Adversarial strength: strong. The obvious "add louder prompt" and "edit sub-skills" options were killed.
- Landscape stability: stable. No untested candidate fits the scope better than the runner invariant assembly.
- Clean SURVIVE exists: yes.
- Failure modes observed: self-reference risk is reduced by grounding in prior filesystem evidence and Homegrown source files.
- Overall: PROCEED.

## Signal

TERMINATE with ranked survivors:

1. **Primary fix:** narrow `Discipline Transaction Invariant` patch to `homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md`.
2. **Required content:** invalid-state list, checker fallback, and CONCLUDE boundary.
3. **Deferred tooling:** restore `tools/structural_check.sh`; consider wrapper only if compact execution recurs after the rule patch.
