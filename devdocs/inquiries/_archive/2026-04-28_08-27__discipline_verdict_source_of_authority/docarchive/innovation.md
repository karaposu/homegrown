# Innovation: Discipline Verdict Source Of Authority

## Input

Decomposition identified the needed pieces: discipline telemetry, evaluator routing marks, Critique upstream diagnosis, outcome marks, and calibration. Innovation now tests candidate architectures for preserving routability without self-grading or unsafe hard routing.

## Candidate A: Authoritative Discipline Self-Verdicts

Each discipline appends:

- `PROCEED`
- `FLAG`
- `RE-RUN`

The discipline itself decides whether its output is sufficient.

**Potential value:** simple, uniform, easy for Resume and Navigation to inspect.

**Problem:** the output source and the judge are the same. This is exactly where blind spots are most dangerous.

**Status:** weak candidate. Useful only if demoted to self-report.

## Candidate B: Discipline Telemetry Only

Each discipline appends compact telemetry:

- local criteria checked;
- local gaps;
- local failures;
- confidence notes;
- handoff risks.

No `PROCEED / FLAG / RE-RUN` labels are emitted by the discipline.

**Potential value:** structurally honest and low-risk.

**Problem:** routing consumers still need a stable mark and may have to parse prose or apply thresholds later.

**Status:** strong base layer, incomplete alone.

## Candidate C: Runner-Derived Routing Marks

The runner reads discipline telemetry and applies a policy:

- required fields missing -> `RE-RUN`;
- required fields present with named gaps -> `FLAG`;
- required fields present and no blocking gaps -> `PROCEED`.

**Potential value:** simple operational routability without giving verdict authority to the discipline.

**Problem:** can only judge mechanical process sufficiency. It cannot diagnose conceptual failure well.

**Status:** useful for low-level routing, insufficient for quality diagnosis.

## Candidate D: Critique Gate Mode After Every Discipline

After each discipline, Critique evaluates the artifact and emits a routing mark.

**Potential value:** strongest per-stage evaluator authority. It directly tests downstream usability before moving on.

**Problem:** expensive, slows every loop, risks turning MVL+ into constant gating, and may be unnecessary for routine low-risk work.

**Status:** strong for high-stakes checkpoints, too heavy as the default.

## Candidate E: Final Critique Upstream Diagnosis

Critique evaluates generated candidates or conclusions, then emits upstream marks by examining kill/refine/flag clusters.

**Potential value:** directly addresses the user's proposal. It uses downstream evidence, which self-verdicts lack.

**Example output:**

```md
## Upstream Diagnosis

- Innovation: FLAG
  - Symptom: three candidates killed for ignoring integration constraints.
  - Likely cause: constraints from Sensemaking were not preserved during generation.
  - Evidence: candidate B, C, and D kill reasons.
  - Correction: rerun Innovation with constraints pinned.
  - Confidence: medium.
```

**Problem:** diagnosis can over-attribute. A killed candidate may result from bad inputs, bad generation, or bad critique criteria.

**Status:** strong if evidence and confidence are required.

## Candidate F: Hybrid Evidence-First Marks

Use all layers, but with authority boundaries:

1. Discipline emits telemetry, not verdict authority.
2. Runner can derive simple routing marks from explicit process thresholds.
3. Critique emits upstream diagnosis from downstream kill/refine evidence.
4. Final finding may include an outcome-level mark for the loop result.
5. Resume and Navigation treat marks as advisory until calibration.

**Potential value:** preserves routability, avoids self-grading, and gives Critique a useful diagnostic role.

**Problem:** requires careful naming so users and future agents do not collapse the layers again.

**Status:** strongest candidate.

## Candidate G: MVL Result Marks Only

Do not mark individual discipline outputs. Only mark the full MVL result.

**Potential value:** avoids self-grading risk and maps directly to the user's concern that MVL result marks are separate.

**Problem:** too coarse. It cannot tell future Resume or Navigation why a loop failed, which upstream discipline is suspect, or which stage should be rerun.

**Status:** useful as an outcome layer, not enough alone.

## Candidate H: No Verdict Labels, Prose Only

Avoid `PROCEED / FLAG / RE-RUN` entirely and require human reading.

**Potential value:** minimizes automation risk.

**Problem:** loses routability, weakens Resume, and makes meta-loop traversal harder.

**Status:** too conservative.

## Proposed Architecture

The best design is Candidate F:

**Name:** evidence-first evaluator marks.

**Rules:**

1. A producing discipline may emit only local telemetry and local failure signals.
2. `PROCEED / FLAG / RE-RUN` is reserved for evaluator or runner routing marks, unless explicitly labeled `self_report`.
3. Critique gets an `Upstream Diagnosis` section that can mark prior disciplines based on kill/refine/flag evidence.
4. MVL findings can include a separate outcome-level mark, but this is not a per-discipline verdict.
5. All marks must include evidence. No label-only hard routing.

## Innovation Telemetry

- **Candidate count:** 8.
- **Most promising:** Candidate F, evidence-first evaluator marks.
- **Killed or weakened:** authoritative discipline self-verdicts, prose-only design, MVL-result-only design.
- **Novel useful addition:** Critique `Upstream Diagnosis` marks over previous discipline runs.
- **Overall:** sufficient for Critique.
