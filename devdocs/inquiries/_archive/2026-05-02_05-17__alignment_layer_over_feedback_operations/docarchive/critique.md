# Critique: Alignment Layer Over Feedback Operations

## User Input

Evaluate whether `reflect`, `outcome_review`, and `loop_diagnose` should be organized as alignment-insurance operations, and whether the prior feedback-family plan should be revised.

## Phase 0 - Dimension Construction

| Dimension | Weight | Success Criteria |
| --- | --- | --- |
| Structural truth | Critical | Correctly identifies the deeper parent concept and does not stop one level too shallow. |
| Complexity control | Critical | Reduces conceptual sprawl rather than adding another vague abstraction. |
| Operational fitness | Critical | Keeps mode-specific procedures sharp and appropriately triggered. |
| Distributed alignment | Critical | Does not centralize alignment into one checkpoint or side file. |
| Incremental feasibility | High | Can be materialized in a small v1. |
| Compatibility with prior findings | High | Preserves valid feedback-family and alignment-in-SIC conclusions. |
| Future scalability | Medium | Supports later layer × mode monitoring without building it now. |

Dimension validation:

- These dimensions match the user's concern: the system must not create unnecessary complexity while preserving the deeper alignment insight.

## Phase 1 - Fitness Landscape

### Viable Region

A viable candidate:

- names alignment as parent;
- treats feedback as a control mechanism;
- keeps reflect/outcome/diagnose specialized;
- embeds alignment metadata into existing artifacts/records;
- starts thin and manual.

### Dead Region

A dead or premature candidate:

- treats feedback as the top-level parent after the alignment evidence;
- creates a centralized alignment bureaucracy;
- builds six-agent monitoring now;
- patches tools inconsistently with no shared vocabulary.

### Boundary Region

- `feedback.md` can survive if explicitly subordinated to alignment, but the filename may keep the wrong mental model alive.
- `alignment_control.md` can survive if it stays a thin contract and not a universal runner.

## Phase 2 and 3 - Candidate Verdicts

## Candidate A - Keep Prior Feedback Plan

### Prosecution

The killer objection is that it is one level too shallow. AlignStack and `thinking_disciplines/alignment_theory.md` already define feedback as the control loop inside alignment. Keeping feedback as the parent obscures the layer/mode architecture.

### Defense

The prior feedback finding did valuable work. It correctly unified reflect, outcome review, loop diagnose, and checkpoint around expected-vs-observed records.

### Collision

The defense preserves the mechanism, not the hierarchy. Feedback should survive as the record/control mechanism, but not as the top-level parent.

### Verdict

REFINE.

Constructive output:

- Keep the feedback kernel fields.
- Reframe them as alignment-control fields.

## Candidate B - Replace Feedback Parent With `alignment_control.md`

### Prosecution

The main objection is that `alignment_control.md` could become another broad, abstract document. Alignment is large enough that a parent protocol can easily overreach.

### Defense

The name points to the right root: alignment. "Control" keeps the scope operational: it defines how alignment deltas are detected, recorded, and routed. It avoids pretending that one protocol implements all alignment.

### Collision

The defense wins if the file is constrained to vocabulary, record fields, mode/layer table, and escalation rules.

### Verdict

SURVIVE.

Constructive output:

- Build `alignment_control.md` as a thin parent contract.
- Explicitly state it is not the whole alignment system.

## Candidate C - Create Full Alignment Layer Runtime Now

### Prosecution

The killer objection is premature scale. Six agents, continuous monitoring, mode state, and autonomy policy are the long-term architecture. Building that now would create the exact "larger than we can carry" risk the user is trying to avoid.

### Defense

The HomeGrown Agent alignment perspective is compelling and likely points to the future shape.

### Collision

The defense survives as long-term direction, not immediate action.

### Verdict

KILL for v1 / DEFER.

Seed extracted:

- Use layer × mode metadata now so a future runtime has data to grow from.

## Candidate D - Do Not Create Any Parent File; Patch Existing Tools Only

### Prosecution

The killer objection is inconsistency. If reflect, outcome review, and loop diagnose are patched independently, they may use different terms for layer, mode, delta, confidence, and route. That recreates conceptual sprawl.

### Defense

This avoids adding another file and aligns with the old warning against `_alignment.md` bureaucracy.

### Collision

The defense is valid against a sidecar artifact, but not against a thin parent contract. The parent contract is not a per-inquiry file; it is a shared vocabulary.

### Verdict

REFINE.

Constructive output:

- Patch existing tools later, but after a shared alignment-control vocabulary exists.

## Candidate E - Create Thin `alignment_control.md`, Then `outcome_review.md`

### Prosecution

The main objection is sequencing overhead. It inserts a parent contract before the outcome review capability we need.

### Defense

The overhead is small and prevents a worse mistake: creating outcome review under the wrong parent abstraction. The user has identified this before implementation, so correcting sequence now is cheaper than migration later.

### Collision

The defense wins. This is the best small step: one thin parent contract, then one concrete mode.

### Verdict

SURVIVE - ranked first.

Constructive output:

- Create `homegrown/protocols/alignment_control.md`.
- Then create `homegrown/protocols/outcome_review.md` as outcome-alignment insurance.

## Candidate F - Use `feedback.md` But Put Alignment As Its First Section

### Prosecution

The main objection is naming drift. If the file is called `feedback.md`, future users may still treat feedback as parent and forget that alignment is the thing being controlled.

### Defense

It preserves continuity with the previous finding and may be simpler if "feedback record" remains the operative artifact.

### Collision

The defense is acceptable only if naming constraints or local convention strongly prefer feedback. Otherwise `alignment_control.md` is clearer.

### Verdict

REFINE / fallback.

Constructive output:

- Use only if `alignment_control.md` feels too abstract during materialization.
- If used, the title and first section must state: feedback is the control mechanism of alignment.

## Phase 3.5 - Assembly Check

Best assembly:

```text
homegrown/protocols/alignment_control.md
  - defines alignment layers and mode metadata
  - defines feedback/control record fields
  - defines insurance operation table
  - defines escalation rules
  - explicitly says it is not a centralized alignment runner

homegrown/protocols/outcome_review.md
  - implements outcome-alignment insurance
  - writes alignment-delta records
  - routes to no-op, monitor, navigation, materialization, or loop_diagnose

later:
  - reflect says it is process-alignment insurance
  - loop_diagnose says it is causal alignment diagnosis
  - navigation reads alignment-delta records
```

## Phase 4 - Coverage and Convergence Assessment

### Coverage Map

- Prior feedback plan: evaluated, refined.
- Alignment-control parent: evaluated, survived.
- Full runtime now: evaluated, killed for v1.
- Patch existing tools only: evaluated, refined.
- Alignment-control then outcome review: evaluated, survived and ranked first.
- Feedback filename with alignment section: evaluated, kept as fallback.

### Convergence

- The landscape is stable.
- Clean survivor exists: Candidate E.
- The only open uncertainty is naming, not architecture.

### Signal

TERMINATE.

Ranked survivors:

1. Candidate E - thin `alignment_control.md`, then `outcome_review.md`.
2. Candidate B - `alignment_control.md` parent contract.
3. Candidate F - `feedback.md` with alignment-first framing, only as fallback.

## Convergence Telemetry

- Dimension coverage: all dimensions applied.
- Adversarial strength: STRONG.
- Landscape stability: STABLE.
- Clean SURVIVE exists: YES.
- Failure modes observed: self-reference risk controlled by anchoring in AlignStack source and old alignment findings.
- Overall: PROCEED.
