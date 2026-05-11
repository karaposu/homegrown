# Critique: Feedback Family Organization

## User Input

Evaluate whether `reflect`, `outcome_review`, and `loop_diagnose` should remain separate, merge, or be reorganized as modes of a shared feedback architecture.

## Phase 0 - Dimension Construction

| Dimension | Weight | Success Criteria |
| --- | --- | --- |
| Conceptual simplicity | Critical | Reduces user-facing mental categories and clarifies relationships. |
| Operational fitness | Critical | Keeps each feedback procedure appropriate to its timing, evidence, and cost. |
| Avoids over-generalization | Critical | Does not create a vague mega-tool that loses sharpness. |
| Record compatibility | High | Enables shared evidence fields and cross-run accumulation. |
| Incremental feasibility | High | Can be materialized in small steps without rewriting the system. |
| Escalation clarity | High | Makes clear when cheap feedback is enough and when deeper diagnosis is needed. |
| Future scalability | Medium | Supports later navigation, state comprehension, and multihead comparison. |

Dimension validation:

- These dimensions match the user's concern: avoid adding complexity while preserving learning power.
- No separate novelty dimension is needed; novelty is not the goal.

## Phase 1 - Fitness Landscape

### Viable Region

A viable organization must:

- give one parent mental model;
- keep mode-specific procedures;
- share fields enough for records to accumulate;
- define escalation paths;
- be buildable as a small protocol addition.

### Dead Region

Dead or dangerous region:

- everything is separate with duplicated concepts;
- everything is merged into reflect;
- a generic feedback command handles all cases without boundary-specific evidence rules.

### Boundary Region

- A parent `feedback.md` protocol is viable if it stays small.
- It becomes risky if it tries to implement every feedback mode immediately.

## Phase 2 and 3 - Candidate Verdicts

## Candidate A - Keep Reflect, Outcome Review, and Loop Diagnose Fully Separate

### Prosecution

The killer objection is conceptual duplication. All three mechanisms would separately talk about evidence, mismatch, attribution, learning, and maintenance candidates. The user would keep asking whether one is really the same as another. Cross-run records would be harder to compare.

### Defense

Separation preserves operational clarity. Reflect, outcome review, and loop diagnose do have different timings and evidence needs.

### Collision

The defense wins against merging execution, but not against full separation. The solution is to keep procedure separation while sharing the conceptual contract.

### Verdict

REFINE.

Constructive output:

- Keep separate mode procedures.
- Do not keep separate vocabularies and record concepts.

## Candidate B - Merge Everything Into Reflect

### Prosecution

The killer objection is identity overload. Reflect is defined as second-order observation of a completed cognitive process. Outcome review observes downstream use. Loop diagnose performs correction-chain causal diagnosis. If reflect owns all of these directly, it stops being a coherent process-reflection tool.

### Defense

The defense is user simplicity. The user would invoke one familiar learning surface instead of many names.

### Collision

The defense is valid only at the display/integration layer. Reflect can read other feedback records or present process learning. It should not perform all feedback modes.

### Verdict

KILL as architecture.

Seed extracted:

- Keep reflect as a unified quality surface only where the object is process quality. Do not make it the parent of all feedback.

## Candidate C - Create One Generic Feedback Command

### Prosecution

The killer objection is over-generalization. A command that handles structure checks, process reflection, after-use outcome review, and correction-chain diagnosis risks becoming too abstract to guide behavior. It may have a beautiful schema and weak execution.

### Defense

A generic command would provide one entry point and one vocabulary.

### Collision

The defense is attractive but premature. The current system needs a parent contract, not a universal runner. Specialized modes should remain explicit until repeated use proves a stable generic invocation pattern.

### Verdict

KILL for v1.

Seed extracted:

- A future router could dispatch feedback modes, but only after mode records and triggers are stable.

## Candidate D - Create A Feedback Family Contract With Specialized Modes

### Prosecution

The main objection is that it adds another named concept, `feedback`, before adding concrete outcome-review value. If written too broadly, it may become conceptual overhead.

### Defense

It directly addresses the user's concern. One parent concept reduces confusion while preserving specialized procedures. It also gives outcome_review, reflect, checkpoint, and loop_diagnose compatible records and escalation paths.

### Collision

The defense wins if the parent contract is small and operational. It should define the shared kernel and mode table, not become a new thinking discipline.

### Verdict

SURVIVE.

Constructive output:

- Define feedback as expected-vs-observed evidence routing.
- Keep it as a protocol/concept, not a discipline.
- Make all modes declare object, trigger, evidence, output, and escalation.

## Candidate E - Create `feedback.md` First, Then `outcome_review.md`

### Prosecution

The main objection is sequencing overhead. The previous finding recommended outcome_review as the next load-bearing capability. Adding `feedback.md` first may delay the artifact that creates downstream-use records.

### Defense

The delay is small and the clarity gain is high. The user has already identified the confusion before materialization. If outcome_review is created now without the parent model, it may be born as a fourth isolated concept and require correction later.

### Collision

The defense wins. The parent protocol should be minimal, and outcome_review should follow immediately as its first new mode. This changes the sequence, not the destination.

### Verdict

SURVIVE - ranked first.

Constructive output:

- Build `homegrown/protocols/feedback.md` first.
- Then build `homegrown/protocols/outcome_review.md` as the use-feedback mode.
- Later patch `reflect` and `loop_diagnose` to reference the shared feedback vocabulary.

## Phase 3.5 - Assembly Check

Best assembly:

```text
feedback.md
  defines shared operation:
    expected -> observed -> delta -> evidence -> confidence -> route
  defines modes:
    structural_feedback = checkpoint / Primitive RC
    process_feedback = reflect
    use_feedback = outcome_review
    causal_feedback = loop_diagnose

outcome_review.md
  implements use_feedback
  writes compatible feedback records
  can route uncertain attribution to loop_diagnose

reflect and loop_diagnose
  keep their procedures
  later reference feedback.md for shared vocabulary
```

This assembly resolves the user's concern without erasing the useful differences among the mechanisms.

## Phase 4 - Coverage and Convergence Assessment

### Coverage Map

- Full separation: evaluated, refined.
- Reflect as parent: evaluated, killed.
- Generic feedback command: evaluated, killed for v1.
- Feedback family contract: evaluated, survived.
- Feedback first, outcome_review second: evaluated, survived and ranked first.

### Convergence

- The landscape is stable.
- A clean survivor exists.
- No major candidate remains likely to overturn the result.

### Signal

TERMINATE.

Ranked survivors:

1. Candidate E - create `feedback.md` first, then `outcome_review.md`.
2. Candidate D - feedback family contract with specialized modes.

## Convergence Telemetry

- Dimension coverage: all dimensions applied.
- Adversarial strength: STRONG.
- Landscape stability: STABLE.
- Clean SURVIVE exists: YES.
- Failure modes observed: no rubber-stamping; self-reference risk controlled by keeping feedback grounded in evidence records.
- Overall: PROCEED.
