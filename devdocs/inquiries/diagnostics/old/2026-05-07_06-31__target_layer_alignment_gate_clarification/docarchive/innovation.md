# Innovation: Target-Layer Alignment Gate Clarification

## User Input

```text
$MVL+

Can you tell what these categories are? Are they related to failure modes, or something completely new? Is it for all disciplines or only the MVL main loop? Why call it gate? Do we have other gates?
```

## Seed

The seed is a naming and mechanism-design problem:

```text
The proposed fields are useful, but "Target-Layer Alignment Gate" may make a small target-clarity mechanism sound like a heavy discipline-wide blocker.
```

The value signal is high because the earlier failure came from target substitution: Navigation evidence became a Navigation answer even though the repair target was MVL self-maintenance.

## Generate

### 1. Lens Shifting

| Variation | Output |
| --- | --- |
| Generic | Treat the mechanism as a scoping aid, not a diagnostic taxonomy. |
| Focused | In MVL self-maintenance, view it as an extension of `_branch.md` Scope Check for cases where evidence topic and repair target can diverge. |
| Contrarian | Treat it as an anti-mechanism warning: if a loop needs this many fields to know what it is answering, maybe the branch question is malformed. |

Survivor:

- Focused lens survives: it explains why the fields belong near branch creation and finalization.

### 2. Combination

| Variation | Output |
| --- | --- |
| Generic | Combine Scope Check + LOOP_DIAGNOSE target distinction + CONCLUDE goal advancement into one target-alignment record. |
| Focused | Combine a branch-time record with a final-time check: define target roles once, then verify the final answer did not drift. |
| Contrarian | Combine every discipline with the field block so each discipline restates it. |

Survivor:

- Branch-time record + final-time check survives.
- Every-discipline restatement fails because it creates duplicated authority and ceremony.

### 3. Inversion

| Variation | Output |
| --- | --- |
| Generic | Instead of asking "where do we add the gate?", ask "where should we refuse to add it?" |
| Focused | Do not add the five fields to every Exploration/Sensemaking/Decomposition/Innovation/Critique output. Add them where target drift starts and where conclusion drift is caught. |
| Contrarian | Remove "gate" entirely and call the whole thing "Target Fit" unless it actually blocks finalization. |

Survivor:

- The contrarian naming pressure survives: "gate" should be reserved for blocking behavior.

### 4. Constraint Manipulation

| Variation | Output |
| --- | --- |
| Generic | Add a constraint: the mechanism must reduce confusion for the user, not only be precise for the system. |
| Focused | Add a constraint: the record is required only for meta, diagnostic, self-maintenance, or multi-target inquiries where evidence and repair target can diverge. |
| Contrarian | Add a stricter constraint: every inquiry must fill it. |

Survivor:

- Conditional requirement survives.
- Universal requirement fails for ordinary local inquiries because it adds abstraction without corresponding risk.

### 5. Absence Recognition

| Variation | Output |
| --- | --- |
| Generic | What is missing is not another failure mode; it is an explicit "what are we fixing?" field. |
| Focused | What was missing in the failed prioritization loop was a visible difference between Navigation as evidence and MVL as maintenance target. |
| Contrarian | What may be missing is a simpler user-facing name: "Target Alignment Record" or "Target Fit Check" instead of "Target-Layer Alignment Gate." |

Survivor:

- The missing distinction survives.
- The simpler name is worth carrying forward.

### 6. Domain Transfer

| Variation | Output |
| --- | --- |
| Generic | Import incident-review separation: incident evidence, root cause, remediation target, owner, non-goals. |
| Focused | For MVL self-maintenance, use the same split: evidence domain, diagnosed failure, process to improve, files to patch, explicit non-targets. |
| Contrarian | Import release gates: nothing ships unless every field is filled. |

Survivor:

- Incident-review separation survives because it maps well to diagnostics.
- Release-gate strictness fails because this is not always a release or patch.

### 7. Extrapolation

| Variation | Output |
| --- | --- |
| Generic | As Homegrown uses more self-diagnosis, target drift will recur unless target roles are explicit. |
| Focused | Without this check, future MVL diagnostics may keep patching the most salient evidence domain instead of the intended maintenance target. |
| Contrarian | If overused, the mechanism becomes another form to fill and agents will learn to satisfy it mechanically. |

Survivor:

- Future recurrence risk survives.
- Overuse warning also survives.

## Test Survivors

### Candidate A: Target-Layer Alignment Record / Check / Gate Split

Novelty: medium. It is new as explicit terminology but built from existing Homegrown concepts.

Scrutiny survival: strong. It answers the user's concern that "gate" is too broad by separating the data block, validation, and blocker.

Fertility: strong. It can guide future docs without forcing a new discipline.

Actionability: strong. The system can add the record at branch framing and the check at finalization.

Mechanism independence: strong. Lens shifting, combination, inversion, absence recognition, and domain transfer all point to this.

Result: survives.

### Candidate B: Rename User-Facing Mechanism To Target Alignment Record / Target Fit Check

Novelty: medium-low. It is mostly a clearer naming refinement.

Scrutiny survival: strong. It directly addresses the user's confusion about "Target-Layer Alignment Gate" sounding abstract or overpowered.

Fertility: medium. It makes the mechanism more understandable but may lose the nuance that evidence, diagnosis, maintenance, and implementation are separate layers.

Actionability: strong. Easy to use in docs.

Mechanism independence: medium. Absence recognition, inversion, and constraint manipulation support it.

Result: survives as a naming refinement.

### Candidate C: Add The Five Fields To Every Discipline

Novelty: low.

Scrutiny survival: weak. It overcorrects and increases ceremony.

Fertility: weak. It duplicates target authority across outputs.

Actionability: medium, but with poor cost/benefit.

Mechanism independence: weak.

Result: reject.

### Candidate D: Treat The Fields As Failure Modes

Novelty: low.

Scrutiny survival: weak. The fields do not describe failures; they describe inquiry roles.

Fertility: weak. It would pollute failure-mode diagnosis with context slots.

Actionability: weak.

Mechanism independence: weak.

Result: reject.

### Candidate E: Do Nothing, Just Tell Agents To Be Careful

Novelty: low.

Scrutiny survival: weak. The exact prior failure happened because care was not enough.

Fertility: weak.

Actionability: weak.

Mechanism independence: weak.

Result: reject.

## Assembly Check

The strongest assembly is:

```text
Use a branch-time Target Alignment Record when target drift is plausible.
Use a final Target Fit Check before Critique/CONCLUDE finishes.
Reserve Target Alignment Gate for the blocking behavior when the check fails.
```

This assembly has more value than the pieces alone:

- the record clarifies roles early;
- the check catches drift late;
- the gate only exists when something must stop or be repaired.

## Recommended Naming

Most precise:

```text
Target-Layer Alignment Record
Target-Layer Alignment Check
Target-Layer Alignment Gate
```

More understandable:

```text
Target Alignment Record
Target Fit Check
Target Alignment Gate
```

Best practical v1:

```text
Target Alignment Record = the fields
Target Fit Check = the validation
Target Alignment Gate = only if mismatch blocks conclusion or forces repair
```

Rationale: "layer" is technically accurate, but the user-facing need is clarity. The fields themselves already show the layers.

## Innovation Finding

The useful innovation is not the five-field list by itself. It is the record/check/gate force split:

```text
Record: capture target roles.
Check: compare answer against target roles.
Gate: block or repair only when the check fails.
```

This avoids both bad extremes:

- no durable mechanism, which lets target drift recur;
- a universal gate, which creates abstraction ceremony.

## Telemetry

Generators applied: 4 / 4.

Framers applied: 3 / 3.

Convergence: YES. Six mechanisms converge on branch-time record plus final-time check, with gate reserved for blocking behavior.

Survivors tested: 5 / 5.

Failure modes observed: none. Generation was separated from testing, all seven mechanisms were used, and uncomfortable options were tested rather than dismissed immediately.

Overall: PROCEED.
