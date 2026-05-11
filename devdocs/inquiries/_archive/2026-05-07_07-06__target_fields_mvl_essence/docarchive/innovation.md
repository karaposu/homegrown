# Innovation: Target Fields And MVL Essence

## User Input

```text
$MVL+

The five fields may not be clear before MVL starts. Exploration may detect evidence_domain. diagnosis_target may be defined during the loop. Maybe these fields are the essence of MVL, since MVL uses thinking disciplines and meta definitions to capture them and come up with an answer.
```

## Seed

The seed is a dissatisfaction:

```text
The previous Target Alignment Record model is useful, but it risks sounding like a static pre-loop form. The better mechanism may need to treat the fields as evolving state that the loop discovers and stabilizes.
```

Value signal:

This matters because Homegrown wants explicitness, but explicitness must not freeze discovery before the disciplines run.

## Generate

### 1. Lens Shifting

| Variation | Output |
| --- | --- |
| Generic | View the fields as lifecycle state, not metadata. |
| Focused | Treat `Target Alignment Record` as `v0 -> v1 -> stable`, where each discipline may revise a target role. |
| Contrarian | View the fields as proof MVL is just target filling and can be simplified into a target table. |

Survivor:

- Lifecycle state survives.
- "MVL is just target filling" fails because it loses innovation, critique, and convergence.

### 2. Combination

| Variation | Output |
| --- | --- |
| Generic | Combine target fields with maturity states: unknown/provisional/revised/stabilized. |
| Focused | Combine `Target Alignment Record` with `_state.md` history: each target-role revision records discipline, reason, and confidence. |
| Contrarian | Combine the full field block into every discipline output. |

Survivor:

- Field + maturity state survives.
- Field + `_state.md` history is a strong implementation candidate.
- Full per-discipline duplication fails as too ceremonial.

### 3. Inversion

| Variation | Output |
| --- | --- |
| Generic | Instead of asking "what fields must be known before MVL?", ask "what fields must be allowed to be unknown?" |
| Focused | Make `unknown` an explicit valid value in the starting record. |
| Contrarian | Do not write any target record until the final finding. |

Survivor:

- Explicit `unknown` survives.
- Final-only record fails because it cannot prevent drift during the loop.

### 4. Constraint Manipulation

| Variation | Output |
| --- | --- |
| Generic | Add the constraint that every record value must have status and confidence. |
| Focused | Add the constraint that a discipline updates the target record only when it changes target-role understanding. |
| Contrarian | Add the constraint that all five fields must be stabilized before Exploration starts. |

Survivor:

- Event-driven update survives.
- Pre-Exploration stabilization fails.

### 5. Absence Recognition

| Variation | Output |
| --- | --- |
| Generic | What is missing is a way to say "we do not know this yet." |
| Focused | What is missing is `field_status`, such as `unknown`, `provisional`, `revised`, `stabilized`, and provenance for revisions. |
| Contrarian | What is missing is a sixth field: `answer_target`. |

Survivor:

- Status/provenance survives.
- A separate `answer_target` is interesting but may duplicate `maintenance_target` plus `implementation_target`; defer.

### 6. Domain Transfer

| Variation | Output |
| --- | --- |
| Generic | Import incident-review practice: initial incident report is provisional, later root-cause analysis revises it. |
| Focused | Use "working theory" semantics: a target role can be `hypothesis` until evidence stabilizes it. |
| Contrarian | Import legal pleading: lock initial claims and argue only within them. |

Survivor:

- Working-theory semantics survive.
- Legal-style lock-in fails because MVL is exploratory and corrective.

### 7. Extrapolation

| Variation | Output |
| --- | --- |
| Generic | If Homegrown runs many self-maintenance inquiries, static target fields will become stale anchors. |
| Focused | If evolving target roles are recorded, future diagnostics can see where target understanding changed and which discipline changed it. |
| Contrarian | If every change is recorded too heavily, agents will spend more effort maintaining the record than reasoning. |

Survivor:

- Revision history survives.
- Lightweight update threshold is needed to prevent record maintenance from dominating the loop.

## Test Survivors

### Candidate A: Evolving Target Alignment Record

Definition:

```text
A Target Alignment Record starts before or during the loop with known/provisional/unknown fields, then matures as disciplines revise target-role understanding.
```

Novelty: medium. It extends the prior record/check/gate model with lifecycle state.

Scrutiny survival: strong. It directly answers the user's concern that the fields may not be known before the loop.

Fertility: strong. It enables revision history, target-fit checks, and diagnostics of where target understanding changed.

Actionability: strong. It can be described without editing every discipline immediately.

Mechanism independence: strong. Lens shifting, combination, inversion, absence recognition, domain transfer, and extrapolation converge on it.

Result: survives.

### Candidate B: Target Role Maturity States

Definition:

```text
unknown | provisional | revised | stabilized | rejected/out_of_scope
```

Novelty: medium-low. This is a simple state model, but it changes the mechanism substantially.

Scrutiny survival: strong. It prevents early false certainty.

Fertility: strong. It provides a clean way for disciplines to update fields without pretending every field is settled.

Actionability: strong. Easy to add to documentation later.

Mechanism independence: strong.

Result: survives.

### Candidate C: Event-Driven Target Updates

Definition:

```text
Only update the record when a discipline changes target-role understanding.
Do not force every discipline to restate every field.
```

Novelty: medium.

Scrutiny survival: strong. It avoids ceremony while preserving explicitness.

Fertility: medium-high. It can become a small rule in MVL/MVL+ runner guidance.

Actionability: medium. Exact update location needs later materialization.

Mechanism independence: medium-high.

Result: survives.

### Candidate D: Static Pre-Loop Target Alignment Record

Definition:

```text
All five fields are completed before Exploration or Sensemaking.
```

Novelty: low.

Scrutiny survival: weak. It asks the loop to know what the loop is supposed to discover.

Fertility: weak. It turns target alignment into a stale anchor.

Actionability: high but harmful.

Mechanism independence: weak.

Result: reject.

### Candidate E: Final-Only Target Record

Definition:

```text
Only summarize the five fields in `finding.md`.
```

Novelty: low.

Scrutiny survival: weak. It cannot prevent target drift during the loop.

Fertility: medium. It could help readers after the fact, but not the loop itself.

Actionability: high but insufficient.

Mechanism independence: weak.

Result: reject as primary mechanism; may be useful as a final summary.

### Candidate F: Target Fields Replace MVL

Definition:

```text
The five fields are the real essence of MVL, so MVL can be reduced to filling and checking them.
```

Novelty: medium.

Scrutiny survival: weak. It drops the core cognitive operations: Exploration, Sensemaking, Decomposition, Innovation, Critique, and iteration.

Fertility: weak. It simplifies by removing the mechanisms that make MVL useful.

Actionability: medium but damaging.

Mechanism independence: weak.

Result: reject.

## Assembly Check

Best assembly:

```text
Target Alignment Record = live target-role state
Field status = unknown/provisional/revised/stabilized/rejected
Update rule = discipline updates only when target-role understanding changes
Target Fit Check = final comparison against stabilized target-role state
Target Alignment Gate = failure behavior when the check blocks conclusion or forces repair
```

Emergent value:

- preserves early explicitness without false certainty;
- lets MVL discover target roles instead of pretending they are known;
- provides durable state for handoff and diagnostics;
- keeps the five fields central to target alignment without reducing MVL to them.

## Refined Model

Recommended wording:

```text
Target Alignment Record is not a pre-loop form.
It is a live record of the loop's current target-role understanding.

At creation, fields may be known, provisional, or unknown.
During the loop, disciplines update fields when they change target-role understanding.
Before CONCLUDE, Target Fit Check compares the answer to the stabilized fields.
If the answer does not fit, Target Alignment Gate blocks conclusion or forces repair.
```

## Innovation Finding

The breakthrough is the word **live**:

```text
Live Target Alignment Record
```

The word "live" prevents the earlier static-record mistake. It says the record can change as the loop learns.

Potential final terminology:

```text
Live Target Alignment Record
Target Role Status
Target Fit Check
Target Alignment Gate
```

## Telemetry

Generators applied: 4 / 4.

Framers applied: 3 / 3.

Convergence: YES. Six mechanisms converge on evolving target-role state with maturity statuses and event-driven updates.

Survivors tested: 6 / 6.

Failure modes observed: none. The run tested both comfortable and uncomfortable candidates, including replacing MVL and final-only records.

Overall: PROCEED.
