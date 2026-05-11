# Exploration: Target Fields And MVL Essence

## Mode And Entry Point

Mode: artifact exploration.

Entry point: signal-first. The signal is the user's objection that the five Target Alignment fields may not be known before MVL starts and may instead be what MVL clarifies.

Territory being mapped:

- the previous `Target Alignment Record / Target Fit Check / Target Alignment Gate` finding;
- `homegrown/MVL/SKILL.md`;
- `homegrown/MVL+/SKILL.md`;
- nearby Homegrown alignment and diagnostic protocols.

## Exploration Cycle 1 - Runner And Prior Finding Scan

### Scan

Scanned:

- `devdocs/inquiries/diagnostics/2026-05-07_06-31__target_layer_alignment_gate_clarification/finding.md`
- `homegrown/MVL/SKILL.md`
- `homegrown/MVL+/SKILL.md`

### Signals Detected

The prior finding says the five fields are target-role fields and recommends:

```text
Target Alignment Record = the five fields
Target Fit Check = the validation step
Target Alignment Gate = only the blocker or repair behavior
```

The MVL and MVL+ runners do not treat the branch question as permanently complete truth. They create an initial `_branch.md`, run the full pipeline, then ask whether the original question is answered. If not, the loop continues with a refined focus.

This is important: the runner already has a concept of refinement. It does not assume the initial framing is perfect.

### Resolution Decision

Zoom in on the lifecycle of the five fields. The main unexplored region is whether these fields are initial inputs, evolving state, final outputs, or all three at different maturity levels.

### Probe

The prior finding's wording "record belongs near branch creation" can be read too strongly. It can sound like the loop must know all five values before thinking begins.

The runner docs suggest a weaker and more accurate interpretation:

```text
At start: seed or hypothesis.
During loop: clarified and revised.
At end: checked against the finding.
If mismatch: repair or loop again.
```

### Frontier State

Advancing. The previous finding answered naming and placement, but did not fully describe field maturity over time.

### Confidence Map Update

- Confirmed: MVL/MVL+ starts with a question, goal, and scope check.
- Confirmed: MVL/MVL+ can loop again with refined focus.
- Confirmed: previous finding did not intend every discipline to duplicate the fields.
- Scanned: how each field might mature through disciplines.

## Exploration Cycle 2 - Discipline Contribution Probe

### Scan

Scanned the discipline sequence implied by MVL+:

```text
Exploration -> Sensemaking -> Decomposition -> Innovation -> Critique
```

Mapped each field to the discipline that most naturally helps clarify it.

### Signals Detected

The five fields do not have the same lifecycle.

| Field | Likely Early State | Discipline That Clarifies It |
| --- | --- | --- |
| `evidence_domain` | Often partly known from the prompt, but incomplete. | Exploration maps what material exists and what evidence is actually relevant. |
| `diagnosis_target` | Often a hypothesis or unclear dissatisfaction. | Sensemaking clarifies what failure or ambiguity is really being explained. |
| `maintenance_target` | Often named by the user, but may be too broad or wrong. | Sensemaking and Critique test whether the answer is improving the right system/process. |
| `implementation_target` | Often unknown or premature before solution space is explored. | Innovation generates possible patch surfaces; Critique selects or rejects them. |
| `out_of_scope_target` | Often invisible until nearby temptations appear. | Decomposition finds boundaries; Critique catches answer drift. |

Signal: these fields are not just pre-loop metadata. They are also loop outputs.

### Resolution Decision

Zoom in on the user's "essence of MVL" hypothesis.

### Probe

The hypothesis has a strong core:

```text
MVL uses disciplines to move from vague intent and messy evidence
to a stable answer target and justified answer.
```

The five fields describe part of that movement. They expose the relationship between evidence, diagnosis, repair target, possible implementation, and non-targets.

But the five fields do not cover all of MVL. MVL also does:

- ambiguity reduction;
- candidate generation;
- adversarial evaluation;
- convergence detection;
- loop iteration when the answer is incomplete.

So the fields are not the whole essence of MVL. They are a target-alignment lens across the loop.

### Frontier State

Advancing but narrowing. The likely answer is a lifecycle model: provisional at start, discovered during the loop, stabilized before conclusion.

### Confidence Map Update

- Confirmed: fields should not be treated as fixed pre-loop facts.
- Inferred: initial record should allow unknown/provisional values.
- Inferred: final check should compare the final answer to the stabilized field values, not only the initial guesses.

## Exploration Cycle 3 - Alignment Contract And Diagnostic Protocol Scan

### Scan

Scanned:

- `homegrown/contracts/alignment_control.md`
- `homegrown/protocols/loop_diagnose.md`

### Signals Detected

`alignment_control.md` defines shared alignment vocabulary but explicitly says it is not a runner, gate, or centralized authority. That is relevant because the Target Alignment fields should not become a replacement for MVL.

`loop_diagnose.md` says LOOP_DIAGNOSE does not replace MVL+. It only frames a special MVL+ run. The reasoning engine remains:

```text
Exploration -> Sensemaking -> Decomposition -> Innovation -> Critique
```

Signal: Homegrown already separates framing records from reasoning engines.

### Resolution Decision

Zoom out. The explored artifacts agree on a distinction:

- records and contracts make alignment visible;
- MVL/MVL+ performs the thinking;
- checks/gates prevent the output from drifting.

### Probe

The five fields should likely be treated as an evolving alignment record, not as a pre-loop questionnaire and not as a new cognitive discipline.

Possible maturity states:

```text
unknown
provisional
revised
stabilized
rejected / out of scope
```

This state model fits the user's concern that Exploration may discover the evidence domain and that diagnosis target may only become clear during the loop.

### Frontier State

Stable. Additional scans are unlikely to change the main map for this question.

### Confidence Map Update

- Confirmed: Homegrown has a pattern of lightweight framing/contract records that do not replace MVL.
- Confirmed: LOOP_DIAGNOSE frames MVL+ rather than becoming a new discipline.
- Inferred: Target Alignment fields should follow the same pattern.

## Jump Scan - Opposite Direction

### Scan

Jump-scanned for signs that Homegrown expects full target clarity before loops start.

### Signals Detected

The opposite signal was not found. MVL and MVL+ require a starting question and goal, but they explicitly allow loop refinement when the answer is incomplete.

The strongest opposing evidence is the existence of `_branch.md` Scope Check at inquiry creation. But Scope Check only verifies whether the question covers the goal. It does not prove that the evidence domain, diagnosis target, implementation target, or out-of-scope targets are fully known.

### Resolution Decision

Treat initial Target Alignment fields as orientation, not final truth.

### Frontier State

Closed for current purpose.

## Convergence Check

Frontier stability: yes. Runner specs, prior finding, alignment contract, and diagnostic protocol all support the same distinction between framing and reasoning.

Declining discovery rate: yes. Later scans refined field lifecycle but did not produce a new competing model.

Bounded gaps: yes. Exact syntax is unknown, but not needed for this conceptual question.

Jump scan: complete. No evidence found for mandatory full pre-loop target certainty.

## Territory Overview

The territory has four regions:

1. **Initial framing**
   - MVL/MVL+ needs a starting question, goal, and scope check.
   - Target fields may be recorded here only as known/provisional/unknown orientation.

2. **Discipline discovery**
   - Exploration can clarify `evidence_domain`.
   - Sensemaking can clarify `diagnosis_target` and `maintenance_target`.
   - Decomposition can clarify boundaries and `out_of_scope_target`.
   - Innovation can generate possible `implementation_target` values.
   - Critique can test whether the final answer fits the stabilized target roles.

3. **Final validation**
   - Target Fit Check should use the stabilized field values, not only the initial guesses.

4. **Gate behavior**
   - A gate exists only if target mismatch blocks conclusion, forces branch repair, or triggers another loop.

## Inventory

| Region | Finding |
| --- | --- |
| Prior Target Alignment finding | Good naming split, but incomplete field lifecycle model. |
| MVL/MVL+ runner specs | Loops start with a question but can refine focus when unanswered. |
| Alignment contract | Shared records do not replace specialized operations. |
| LOOP_DIAGNOSE | Framing protocols can guide MVL+ without becoming the reasoning engine. |
| User objection | Strong signal that fields must not be treated as fully known before exploration/sensemaking. |

## Signal Log

| Signal | Status | Notes |
| --- | --- | --- |
| `evidence_domain` may be discovered by Exploration | confirmed as plausible | The prompt may only provide a starting evidence hunch. |
| `diagnosis_target` may emerge during Sensemaking | confirmed as plausible | The loop often exists because the failure is not clear yet. |
| Five fields might be MVL's essence | partially supported | They describe target alignment, not all of MVL's cognitive work. |
| Initial record as fixed truth | rejected | Runner refinement behavior contradicts this. |
| Fields as evolving state | strong | Fits runner behavior and user concern. |

## Confidence Map

| Claim | Confidence | Reason |
| --- | --- | --- |
| The fields should allow unknown/provisional values at start | high | MVL/MVL+ starts before all understanding exists. |
| The fields are clarified by disciplines | high | Each field maps naturally to one or more disciplines. |
| The fields are the whole essence of MVL | medium-low | They capture target alignment, but not innovation, critique, decomposition, or convergence by themselves. |
| The fields are a cross-loop alignment lens | high | Fits prior finding and Homegrown alignment contract pattern. |
| Final check should use stabilized values | medium-high | Inferred from loop refinement and goal checking; exact protocol text does not yet exist. |

## Frontier State

Closed enough for Sensemaking.

## Gaps And Recommendations

Sensemaking should resolve the main ambiguity:

```text
Are these five fields inputs, outputs, or evolving state?
```

Exploration evidence points to:

```text
They are all three at different phases:
initial orientation, discipline-discovered state, and final validation target.
```

Sensemaking should also test the user's stronger hypothesis:

```text
Are these fields the essence of MVL?
```

The map suggests a nuanced answer:

```text
They are the essence of MVL's target alignment, not the essence of MVL's whole reasoning process.
```
