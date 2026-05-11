# Finding: Discipline Verdict Source Of Authority

## Answer

Yes, the user's objection makes sense.

The previous finding was right that routable signals are valuable, but wrong to imply that every discipline should authoritatively emit `PROCEED / FLAG / RE-RUN` about itself.

A discipline can report what it did, what it missed, and where it is uncertain. It should not be trusted as the authority that decides whether its own output is sufficient for downstream use.

## Corrected Position

Do not add authoritative `PROCEED / FLAG / RE-RUN` verdicts to each discipline.

Instead:

1. Add compact telemetry or handoff blocks to discipline outputs.
2. Reserve `PROCEED / FLAG / RE-RUN` for evaluator-issued or runner-derived routing marks.
3. Add Critique-issued upstream diagnosis based on downstream kill/refine/flag evidence.
4. Keep MVL result marks separate from discipline-level routing marks.
5. Do not use any mark for hard routing until calibration proves it is reliable.

## Why Discipline Self-Verdicts Are Unsafe

The core problem is source of authority.

If Sensemaking misses a constraint, the same missed constraint can also make Sensemaking believe its output is sufficient. If Innovation generates weak candidates, the same weakness may prevent it from seeing why those candidates are weak.

So even when the label is scoped as "process sufficiency, not final truth," the producing discipline is still self-grading. That creates exactly the amplification risk the user flagged: weak self-report can become a stable signal that later systems over-trust.

## What Disciplines Should Emit

Disciplines should emit evidence, not authority.

Useful local telemetry includes:

- inputs used;
- criteria applied;
- assumptions surfaced;
- local checks run;
- local gaps;
- local failures;
- confidence notes;
- handoff risks.

This can be inspected later by Critique, Resume, Navigation, checkpoints, or a runner policy.

If a discipline emits a label at all, it should be explicitly treated as self-report, for example:

- `local_status: complete`
- `local_status: incomplete`
- `local_failure: reassembly failed`
- `handoff_risk: unresolved ambiguity`

Those are facts or local claims, not routing authority.

## Where `PROCEED / FLAG / RE-RUN` Belongs

The labels are still useful if they are evaluator marks:

- `PROCEED`: evaluator sees enough evidence to use the artifact downstream.
- `FLAG`: evaluator allows use but attaches a named risk, weakness, ambiguity, or confidence gap.
- `RE-RUN`: evaluator sees a minimum-process failure likely to mislead downstream use.

The evaluator can be Critique in gate mode, Resume, Navigation, a checkpoint policy, or the runner applying explicit thresholds.

These labels should be evidence-backed and advisory. A label without evidence should not control the loop.

## Critique Should Produce Upstream Marks

The previous finding missed an important design: Critique can mark previous discipline runs based on what it kills, refines, and flags.

This is a stronger signal than self-report because Critique sees downstream stress. For example:

- repeated feasibility kills may point to weak constraint use in Innovation or missed constraints in Sensemaking;
- repeated interface failures may point to weak Decomposition;
- repeated ambiguity flags may point to insufficient Exploration;
- generic candidate survivors may point to conservative Innovation;
- repeated scope misses may point to weak Sensemaking or Decomposition.

Critique should therefore include an `Upstream Diagnosis` section when useful:

```md
## Upstream Diagnosis

- Discipline: Innovation
- Mark: FLAG
- Symptom: multiple candidates killed for ignoring integration constraints.
- Evidence: candidate A, B, and D kill reasons.
- Likely cause: constraints were not preserved during generation.
- Confidence: medium.
- Correction: rerun Innovation with constraints pinned.
```

This diagnosis must include evidence and confidence because Critique can over-attribute causes.

## MVL Result Marks Are Separate

MVL result marks answer a different question: whether the loop output is usable, conditional, unresolved, or needs another pass.

They should not be confused with per-discipline marks. A loop can produce a useful result even if one discipline was weak and corrected downstream. A loop can also produce a weak result even if every discipline self-reported completion.

So the relationship is:

- discipline telemetry = local evidence;
- evaluator mark = routing recommendation over an artifact or discipline run;
- Critique upstream diagnosis = evidence-backed diagnosis of prior discipline weakness;
- MVL result mark = outcome-level status for the whole loop.

## Final Recommendation

Correct the earlier verdict proposal:

> Add discipline telemetry everywhere. Add `PROCEED / FLAG / RE-RUN` only as evaluator-issued or runner-derived routing marks. Let Critique produce upstream discipline marks from kill/refine patterns. Keep these marks advisory until calibration shows they are safe for automation.

This preserves the routability goal without adding the label-only hard-routing risk the user warned about.

## Result Mark

- **Result:** usable correction.
- **Scope:** corrects `devdocs/inquiries/2026-04-28_07-52__discipline_verdict_telemetry_value_risk/finding.md`.
- **Residual risk:** exact schema and storage format still need a separate design.
