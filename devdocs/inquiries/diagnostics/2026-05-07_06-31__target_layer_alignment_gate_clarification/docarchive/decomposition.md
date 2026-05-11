# Decomposition: Target-Layer Alignment Gate Clarification

## Coupling Map

### Major Elements

1. **Field Meaning**
   - `evidence_domain`
   - `diagnosis_target`
   - `maintenance_target`
   - `implementation_target`
   - `out_of_scope_target`

2. **Conceptual Status**
   - whether the fields are failure modes;
   - whether they are new;
   - whether they extend existing Scope Check / alignment behavior.

3. **Failure Prevention**
   - target substitution;
   - wrong design axis;
   - branch-frame drift;
   - maintenance overreach;
   - evidence-domain salience leaking into implementation advice.

4. **Operational Placement**
   - MVL/MVL+ branch creation;
   - `_branch.md` Scope Check;
   - Critique target-fit check;
   - CONCLUDE final answer-target check;
   - optional Sensemaking clarification.

5. **Naming And Force**
   - Record;
   - Check;
   - Gate.

6. **Existing Homegrown Gate Semantics**
   - evaluation gates;
   - progression gates;
   - route/block gates;
   - alignment-control warning against turning every shared contract into a gate.

### Coupling Relationships

| Relationship | Coupling | Reason |
| --- | --- | --- |
| Field Meaning -> Conceptual Status | Strong | The mechanism cannot be classified until the fields are understood. |
| Conceptual Status -> Operational Placement | Strong | Failure modes belong in diagnosis taxonomy; target-role fields belong in framing/finalization. |
| Field Meaning -> Failure Prevention | Moderate | The fields expose several failures, but they are not those failures. |
| Operational Placement -> Naming And Force | Strong | "Gate" is only accurate if the placement can block or repair execution. |
| Existing Gate Semantics -> Naming And Force | Moderate | Existing usage constrains wording but does not decide placement alone. |
| Failure Prevention -> Operational Placement | Moderate | Prevented failures show why the mechanism matters, but not every discipline needs direct edits. |

### Natural Boundaries

The clean boundary is not by discipline. The clean boundary is by role:

- define the fields;
- classify what kind of mechanism they are;
- decide where the mechanism has authority;
- name it according to that authority.

This means the user's question should not be decomposed into "change Exploration / Sensemaking / Decomposition / Innovation / Critique." That cut would be too broad and would hide the real interface: the target role record should be shared context, while only framing and finalization need direct responsibility.

## Question Tree

### Q1. What does each category mean?

Verification criteria:

- [ ] Each field has a plain-language definition.
- [ ] Each field can be illustrated with the MVL self-maintenance/navigation-diagnostics case.
- [ ] No field is defined as a failure mode.

Answer shape:

| Field | Question It Answers |
| --- | --- |
| `evidence_domain` | What material are we using as evidence? |
| `diagnosis_target` | What failure, prior output, or behavior are we diagnosing? |
| `maintenance_target` | What system/process should become better? |
| `implementation_target` | Where would a future patch or rule change land? |
| `out_of_scope_target` | What nearby target must not become the answer? |

### Q2. Are these failure modes or a new mechanism?

Verification criteria:

- [ ] Distinguish exact field novelty from conceptual novelty.
- [ ] Explain relationship to existing Homegrown Scope Check / alignment behavior.
- [ ] Identify what failure modes the fields help prevent.

Answer shape:

The fields are new as an explicit record. The underlying problem is not new: Homegrown already has branch goals, scope checks, LOOP_DIAGNOSE framing, goal-advancement checks, and alignment-control vocabulary. The fields are a target-role alignment mechanism, not a failure-mode taxonomy.

### Q3. Where should it live?

Verification criteria:

- [ ] Identify primary, secondary, and optional surfaces.
- [ ] Avoid unnecessary discipline-wide changes.
- [ ] Preserve shared context without making every discipline duplicate ownership.

Answer shape:

Primary:

- MVL/MVL+ runner/framing;
- branch creation;
- `_branch.md` Scope Check for meta, diagnostic, and self-maintenance inquiries where targets can diverge.

Secondary:

- Critique target-fit check;
- CONCLUDE final answer-target check.

Optional:

- Sensemaking may infer or clarify the record if the branch did not define it.

Not first:

- adding the five fields to every discipline output.

### Q4. Should it be called a gate?

Verification criteria:

- [ ] Compare "gate" with existing Homegrown usage.
- [ ] Separate data record from validation check and blocking behavior.
- [ ] Give a naming recommendation that maps to operational force.

Answer shape:

Use three terms:

- **Target-Layer Alignment Record**: the field block.
- **Target-Layer Alignment Check**: the validation step.
- **Target-Layer Alignment Gate**: only the behavior where mismatch blocks conclusion, forces branch repair, or marks the target deferred.

### Q5. Why does this matter for the concrete failure?

Verification criteria:

- [ ] Explain how the earlier MVL prioritization answer became Navigation-focused.
- [ ] Show how the record would have separated evidence topic from repair target.
- [ ] Avoid claiming the record alone fixes reasoning quality.

Answer shape:

In the prior failure, the evidence domain was Navigation discussions and diagnostics, but the maintenance target was MVL self-maintenance. Without explicit target roles, the loop let the evidence topic become the answer topic. The record would have made "Navigation" visible as evidence/out-of-scope implementation, while "MVL self-maintenance" stayed the repair target.

## Interface Map

| Source Piece | Target Piece | Flow | Direction |
| --- | --- | --- | --- |
| Q1 Field meanings | Q2 Conceptual status | definitions constrain classification | one-way |
| Q2 Conceptual status | Q3 Placement | mechanism type determines ownership | one-way |
| Q2 Conceptual status | Q5 Concrete failure | classification explains what went wrong | one-way |
| Q3 Placement | Q4 Naming | authority level determines whether "gate" is valid | one-way |
| Existing gate semantics | Q4 Naming | vocabulary precedent and constraints | one-way |
| Q5 Concrete failure | Q3 Placement | observed failure confirms framing/finalization placement | feedback |

Hidden interface to watch:

- If the record is added only as documentation, it cannot honestly be called a gate.
- If the record is added as a hard gate everywhere, it becomes ceremony and may create the same abstraction confusion the user is objecting to.

## Dependency Order

1. Define the five fields.
2. Classify the fields as target-role categories, not failure modes.
3. Decide the mechanism's placement.
4. Decide naming based on placement and force.
5. Explain the concrete prior failure using the clarified model.

Parallelizable after step 2:

- failure-prevention explanation;
- existing gate terminology comparison.

Must wait:

- final naming must wait until placement/force is known.
- implementation advice must wait until the mechanism is classified.

## Self-Evaluation

| Dimension | Result | Notes |
| --- | --- | --- |
| Independence | Pass | Each question can be answered with explicit inputs from prior pieces. |
| Completeness | Pass | Covers all user asks: category meaning, failure-mode relation, novelty, discipline surface, "gate" naming, and existing gates. |
| Reassembly | Pass | Answering Q1-Q5 reconstructs the full requested clarification. |
| Tractability | Pass | Each piece is small enough for one focused pass. |
| Interface clarity | Pass | The key hidden interface is naming force: record/check/gate must not be collapsed. |
| Balance | Pass | No single piece contains most of the complexity. |
| Confidence | Pass | Top-down role boundaries match bottom-up user questions. |

## Decomposition Finding

The natural decomposition confirms the Sensemaking result:

```text
Target-Layer Alignment should be treated as a target-role record plus a finalization check.
"Gate" should name only the blocking/repair behavior.
The mechanism belongs mainly in MVL/MVL+ framing and finalization, not every discipline.
```
