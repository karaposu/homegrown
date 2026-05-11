# Decomposition: Next Load-Bearing Navigation vs Materialization

## Input

`devdocs/inquiries/2026-05-02_12-20__next_load_bearing_navigation_vs_materialization/_branch.md`

Reads: `_branch.md`, `exploration.md`, and `sensemaking.md`.

## 1. Coupling Map

### Major Elements

- **A. Immediate cognitive relief:** the user needs help deciding where to move next.
- **B. Safe artifact creation:** Homegrown needs a governed bridge from accepted decisions to concrete files.
- **C. Navigation improvement artifacts:** Navigation Observer/report, navigation memory, or Navigation integration improvements.
- **D. Feedback/calibration:** outcome review records whether built artifacts actually reduce burden.
- **E. Future scale mechanisms:** multihead, persistent observer session, state comprehension, ARC harness work.

### Coupling Topology

| Pair | Coupling | Reason |
| --- | --- | --- |
| A -> C | Strong | Navigation relief is likely delivered through Navigation-related artifacts. |
| B -> C | Strong | Durable Navigation improvements require controlled materialization. |
| B -> D | Moderate | Materialization traces should provide later outcome-review hooks. |
| C -> D | Strong | Navigation-relief artifacts must later be checked against actual burden reduction. |
| A -> B | Moderate | A Navigation session can select/prioritize the first materialization target. |
| E -> A/B/C/D | Weak-to-moderate | Future scale depends on these foundations but should not drive v1. |

### Natural Boundaries

The natural boundary is between **use now** and **build now**:

- Use Navigation now to reduce choice burden.
- Build materialization now to reduce unsafe implementation burden.
- Then use materialization to build the first Navigation-relief artifact.

This boundary is strong because Navigation use does not require new files, while Navigation architecture does.

## 2. Boundary Validation

### Top-Down Boundaries

1. Session/use layer.
2. Artifact/protocol layer.
3. Dogfood/application layer.
4. Outcome/calibration layer.
5. Deferred scale layer.

### Bottom-Up Atoms

- `homegrown/navigation/` is already usable.
- `homegrown/protocols/artifact_materialization.md` is absent.
- `enes/materialization_lifecycle.md` provides source theory.
- `homegrown/protocols/outcome_review.md` exists.
- `homegrown/protocols/branch_inquiry.md` exists.
- `homegrown/meta-loop/SKILL.md` exists, but requires human selection.

Top-down and bottom-up agree: the absent artifact materialization protocol is a concrete missing atom, while Navigation is already usable as a session.

## 3. Question Tree

### Q1. What should be done immediately to reduce the user's current decision burden?

Verification criteria:

- [ ] Distinguishes immediate cognitive relief from durable system development.
- [ ] Uses existing capabilities where possible.
- [ ] Does not create a new persistent observer runtime.

Likely answer direction: run a Navigation-style session/report over current project state.

### Q2. What is the next protocol artifact that increases Homegrown's ability to build itself safely?

Verification criteria:

- [ ] Names an explicit file target.
- [ ] Explains source authority.
- [ ] Explains why it is load-bearing for later artifacts.
- [ ] Handles bootstrap exception without turning it into general direct-edit permission.

Likely answer direction: create `homegrown/protocols/artifact_materialization.md`.

### Q3. What should be the first dogfood artifact after artifact materialization exists?

Verification criteria:

- [ ] Directly addresses the user's Navigation burden.
- [ ] Is small enough to materialize safely.
- [ ] Produces a usable artifact, not only another theory note.
- [ ] Has an outcome-review gate.

Likely answer direction: materialize a Navigation Observer/report protocol or navigation-memory/report convention.

### Q4. How should the sequence feed learning back into Homegrown?

Verification criteria:

- [ ] Uses materialization trace.
- [ ] Uses outcome review after real use.
- [ ] Produces maintenance/navigation evidence.
- [ ] Avoids immediate automation from one result.

Likely answer direction: every dogfood materialization should include a follow-up outcome review gate.

### Q5. What should explicitly not be next?

Verification criteria:

- [ ] Names deferred tempting options.
- [ ] Gives gate for revival.
- [ ] Does not kill future value permanently.

Likely answer direction: defer multihead, persistent observer, autonomous selector, state-comprehension controller, and ARC execution harness until the materialization/navigation/outcome loop has evidence.

## 4. Interface Map

| Source Piece | Target Piece | Flow | Direction |
| --- | --- | --- | --- |
| Q1 Immediate Navigation | Q2 Materialization Protocol | selected first artifact target and priority rationale | one-way |
| Q2 Materialization Protocol | Q3 Dogfood Artifact | mode selection, write-set, validation, trace contract | one-way |
| Q3 Dogfood Artifact | Q4 Learning Loop | materialization trace, use context, expected burden reduction | one-way |
| Q4 Learning Loop | Future Navigation | outcome evidence, maintenance candidates, route calibration | one-way |
| Q5 Deferrals | Q1-Q4 | negative scope constraints and revival gates | one-way |

No circular dependency is necessary if the bootstrap materialization is treated as an explicit exception:

```text
bootstrap artifact_materialization.md
  -> use artifact_materialization.md for later artifacts
```

## 5. Dependency Order

### First

1. **Q1 - Immediate Navigation use**
   - Can happen with existing Navigation.
   - Produces immediate relief and can select/confirm the first materialization target.

2. **Q2 - Bootstrap artifact materialization protocol**
   - Must happen before durable Navigation Observer/report artifacts are created under Homegrown process.

### Second

3. **Q3 - Dogfood materialization on a Navigation-relief artifact**
   - Depends on Q2.
   - Should serve Q1's user-burden problem.

### Third

4. **Q4 - Outcome review after use**
   - Depends on the dogfood artifact being used.

### Continuous Constraint

5. **Q5 - Deferrals and gates**
   - Applies throughout.
   - Prevents premature multihead/autonomy/state-controller expansion.

## 6. Reassembly Test

If Q1-Q5 are answered:

- the user gets immediate Navigation help;
- Homegrown gains a controlled artifact materialization protocol;
- the first use of that protocol targets the user's Navigation burden;
- after-use feedback records whether the artifact helped;
- high-complexity future paths remain gated.

This reconstructs the original goal: reduce developer burden without building more than the system can carry.

## 7. Self-Evaluation

| Dimension | Result | Notes |
| --- | --- | --- |
| Independence | PASS | Each piece can be reasoned about separately once interfaces are known. |
| Completeness | PASS | Covers immediate relief, protocol artifact, dogfood, learning, and deferrals. |
| Reassembly | PASS | Pieces reassemble into a practical next-development sequence. |
| Tractability | PASS | Each question can be answered in one focused pass. |
| Interface clarity | PASS | Main flows are explicit: Navigation selection -> materialization -> dogfood -> outcome review. |
| Balance | PASS | Q2 and Q3 are heavier, but not overwhelmingly so. |
| Confidence | HIGH | Boundaries align with concrete artifact state and prior findings. |

## Decomposition Output

The innovation step should design candidates for this sequence:

```text
Immediate Navigation session
  -> bootstrap artifact_materialization.md
  -> dogfood on Navigation-relief artifact
  -> outcome_review after use
  -> defer scale/autonomy until evidence exists
```

## Verification Gap

`tools/structural_check.sh` is absent, so automated structural validation could not be run.
