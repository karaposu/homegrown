# Decomposition: Target Fields And MVL Essence

## Coupling Map

### Major Clusters

1. **Field Maturity**
   - unknown;
   - provisional;
   - revised;
   - stabilized;
   - rejected or out of scope.

2. **Discipline Contributions**
   - Exploration maps evidence.
   - Sensemaking clarifies diagnosis and maintenance target.
   - Decomposition clarifies boundaries and non-targets.
   - Innovation generates possible implementation targets.
   - Critique validates fit and kills/refines wrong targets.

3. **Record Mechanics**
   - where target-role state lives;
   - when it is initialized;
   - when it is updated;
   - who has authority to revise it.

4. **Final Validation**
   - Target Fit Check;
   - Target Alignment Gate on failure;
   - loop-again or branch-repair behavior.

5. **Essence Claim**
   - whether the five fields are the whole of MVL;
   - whether they are only one layer of MVL;
   - how they relate to mapping, sensemaking, innovation, critique, and iteration.

### Coupling Relationships

| Relationship | Coupling | Reason |
| --- | --- | --- |
| Field Maturity -> Record Mechanics | Strong | A fixed record and an evolving record require different structures. |
| Discipline Contributions -> Field Maturity | Strong | Field values mature because disciplines discover or revise them. |
| Record Mechanics -> Final Validation | Strong | Final check needs a stabilized target state to compare against. |
| Essence Claim -> Record Mechanics | Moderate | If the fields were the whole essence, they might become the main loop; if they are target alignment, they remain instrumentation. |
| Discipline Contributions -> Essence Claim | Strong | The disciplines show that MVL does more than fill target fields. |
| Final Validation -> Field Maturity | Moderate | Failed validation can reopen a supposedly stabilized field. |

### Natural Boundaries

The clean cut is by lifecycle role, not by field name.

The five fields should not be decomposed as five independent features because their main issue is shared lifecycle:

```text
How does a target role move from unknown/provisional to stabilized?
```

## Question Tree

### Q1. What maturity states should a target field have?

Verification criteria:

- [ ] Allows incomplete knowledge at loop start.
- [ ] Allows disciplines to revise values.
- [ ] Identifies when a value is stable enough for final validation.

Answer shape:

```text
unknown -> provisional -> revised -> stabilized
                           -> rejected / out of scope
```

### Q2. Which discipline can legitimately change which field?

Verification criteria:

- [ ] Does not force every discipline to update every field.
- [ ] Names natural update authority by discipline.
- [ ] Preserves MVL's discipline purposes.

Answer shape:

| Discipline | Natural Target-Role Contribution |
| --- | --- |
| Exploration | discovers or corrects evidence domain |
| Sensemaking | clarifies diagnosis target and maintenance target |
| Decomposition | clarifies boundary and out-of-scope target |
| Innovation | proposes implementation targets |
| Critique | validates target fit and rejects/refines bad targets |

### Q3. Where should the evolving record live?

Verification criteria:

- [ ] Keeps state visible enough to prevent drift.
- [ ] Avoids copying the full block into every discipline output.
- [ ] Preserves resume and handoff durability.

Answer shape:

The record can start in `_branch.md` or `_state.md`, but its semantics must be "current target-role state," not "final target truth." If implemented later, the best surface may be a small `Target Alignment Record` section with status/confidence fields.

### Q4. What should happen at the end of the loop?

Verification criteria:

- [ ] Uses stabilized target roles, not stale first guesses.
- [ ] States what happens when mismatch exists.
- [ ] Connects with existing loop-again behavior.

Answer shape:

Before CONCLUDE, run Target Fit Check:

```text
Does the answer fit the stabilized target roles?
```

If no:

```text
repair branch / narrow answer / mark deferred / loop again / refuse conclusion
```

### Q5. Are the fields the essence of MVL?

Verification criteria:

- [ ] Acknowledges the user's insight.
- [ ] Does not reduce MVL to the fields.
- [ ] Names the exact layer where the fields are essential.

Answer shape:

The fields are the essence of MVL's **target-alignment layer**. They are not the essence of the whole MVL loop because MVL also maps, understands, decomposes, invents, critiques, and iterates.

## Interface Map

| Source Piece | Target Piece | Flow | Direction |
| --- | --- | --- | --- |
| Q1 Field maturity | Q3 Record mechanics | maturity states determine record structure | one-way |
| Q2 Discipline contribution | Q1 Field maturity | disciplines create maturity transitions | feedback |
| Q2 Discipline contribution | Q5 Essence claim | discipline diversity limits reduction to five fields | one-way |
| Q3 Record mechanics | Q4 Final validation | final check consumes stabilized record | one-way |
| Q4 Final validation | Q1 Field maturity | failed check can reopen a field | feedback |
| Q5 Essence claim | Q3 Record mechanics | prevents record from becoming new runner | one-way |

Hidden interface:

- If the record can be updated, it needs provenance: which discipline changed the field and why.
- If a field is marked stabilized, Critique/CONCLUDE must still be allowed to reopen it when the answer does not fit.

## Dependency Order

1. Define maturity states.
2. Map discipline contributions to field changes.
3. Decide record semantics as evolving state.
4. Define final validation behavior.
5. Answer the essence claim.

Parallelizable after step 2:

- storage syntax exploration;
- field-specific examples.

Must wait:

- final validation design must wait until maturity states and record semantics are clear.
- essence claim must wait until discipline contribution map is visible.

## Self-Evaluation

| Dimension | Result | Notes |
| --- | --- | --- |
| Independence | Pass | Each question can be worked independently after maturity-state premise is fixed. |
| Completeness | Pass | Covers lifecycle, discipline role, record location, final check, and essence claim. |
| Reassembly | Pass | Q1-Q5 together answer whether fields are inputs, outputs, evolving state, or MVL essence. |
| Tractability | Pass | Each piece is small enough for one focused pass. |
| Interface clarity | Pass | Key flows and feedback paths are explicit. |
| Balance | Pass | No single question absorbs all complexity. |
| Confidence | Pass | Top-down lifecycle decomposition matches bottom-up user concerns. |

## Decomposition Finding

The implementation-sensitive structure is:

```text
Target Alignment fields are lifecycle state.
Disciplines update that state when they actually change target-role understanding.
Final validation checks the answer against the stabilized state.
```

The strongest boundary is:

```text
Target Alignment is not a new runner.
It is not a pre-loop form.
It is not a final-only summary.
It is loop-state instrumentation for target alignment.
```
