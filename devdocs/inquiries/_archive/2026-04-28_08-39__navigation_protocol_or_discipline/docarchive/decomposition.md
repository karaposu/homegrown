# Decomposition: Navigation Protocol Or Discipline

## User Input

`devdocs/inquiries/2026-04-28_08-39__navigation_protocol_or_discipline/_branch.md`

## 1. Coupling Map

### Cluster A - Core Inquiry Engine

Elements:

- MVL.
- MVL+.
- Atomic bounded inquiry.
- CONCLUDE.
- `finding.md`.

Coupling: high. These elements work together to answer a question and produce a stable finding.

### Cluster B - Navigation Operation

Elements:

- Enumeration of next directions.
- 16-type taxonomy.
- Navigation Map.
- Per-item WHY.
- Per-guideline WHY.
- Navigation telemetry.
- Navigation failure modes.

Coupling: high. These elements form Navigation's distinct operation and artifact.

### Cluster C - Invocation Layer

Elements:

- Manual `/navigation [folder]`.
- Post-CONCLUDE MVL+ hook.
- Trigger reasons.
- Optional future protocol-style invocation contract.

Coupling: medium. These govern when Navigation runs, not what Navigation is.

### Cluster D - Selection And Meta-Loop

Elements:

- Human selection.
- Future selector.
- Meta-loop.
- `_meta_state.md`.
- Next MVL+ run.
- Branching and merge.

Coupling: high. These use Navigation output but should not be hidden inside Navigation.

### Cluster E - Protocol Wrapper Precedent

Elements:

- `loop_diagnose`.
- Correction-chain input contract.
- MVL+ diagnostic run.
- Normal diagnostic finding.

Coupling: medium. This is relevant as a comparison but structurally different from Navigation.

## 2. Boundary Detection

Natural boundaries:

1. **Identity boundary**
   - What Navigation is.

2. **Core-pipeline boundary**
   - Whether Navigation belongs inside E/S/D/I/C.

3. **Invocation boundary**
   - How Navigation is called.

4. **Selection boundary**
   - Who chooses from the Navigation Map.

5. **Protocol-wrapper comparison**
   - Why `loop_diagnose` is different.

6. **Cleanup boundary**
   - Small spec cleanup, such as taxonomy count mismatch.

## 3. Bottom-Up Boundary Validation

Obvious atoms:

- Navigation Map.
- Enumeration.
- Type taxonomy.
- Completed inquiry folder.
- Post-CONCLUDE hook.
- Meta-loop eyes.
- Human selector.
- `loop_diagnose.md`.
- MVL+ atomicity.

The atoms group cleanly. Navigation Map, enumeration, taxonomy, telemetry, and failure modes cluster together, which supports separate discipline identity. Manual invocation and post-CONCLUDE hook cluster separately, which supports treating invocation as a separate concern.

No atom requires Navigation to be rewritten as MVL+ with a protocol. The strongest counter-atom is "MVL+ is atomic," but this belongs to Cluster A and constrains where Navigation runs, not whether Navigation exists.

## 4. Question Tree

### Q1 - Does Navigation have a distinct cognitive operation?

Verification criteria:

- [ ] Identifies Navigation's operation as enumeration.
- [ ] Identifies Navigation's output as a Navigation Map.
- [ ] Checks whether this differs from MVL+ finding generation.

### Q2 - Should Navigation be part of the core MVL+ pipeline?

Verification criteria:

- [ ] Distinguishes boundary discipline from core discipline.
- [ ] Preserves E/S/D/I/C atomicity.
- [ ] Explains why required Navigation after every inquiry is bad.

### Q3 - Should Navigation be an MVL+ protocol wrapper like `loop_diagnose`?

Verification criteria:

- [ ] Explains `loop_diagnose` as a wrapper around MVL+.
- [ ] Explains Navigation as a distinct transform.
- [ ] Decides whether the analogy holds.

### Q4 - How should Navigation be invoked?

Verification criteria:

- [ ] Covers manual invocation.
- [ ] Covers optional post-CONCLUDE hook.
- [ ] Covers meta-loop consumption.
- [ ] Keeps invocation separate from identity.

### Q5 - Who selects from Navigation output?

Verification criteria:

- [ ] States that Navigation sees but does not choose.
- [ ] Keeps human selection or future selector separate.
- [ ] Avoids hidden selection inside Navigation confidence.

### Q6 - What practical changes should happen now?

Verification criteria:

- [ ] Says keep `homegrown/navigation/SKILL.md`.
- [ ] Says do not rewrite as protocol wrapper.
- [ ] Identifies taxonomy count cleanup.
- [ ] Recommends dogfooding or later hook.

## 5. Interface Map

| Source Piece | Target Piece | Flow |
|---|---|---|
| Q1 Navigation operation | Q3 Protocol wrapper comparison | Distinct operation determines whether wrapper analogy works. |
| Q2 Core pipeline | Q4 Invocation | Navigation cannot be core stage, so invocation must be boundary/hook/manual/meta-loop. |
| Q4 Invocation | Q5 Selection | Invocation produces a map; selection consumes the map. |
| Q5 Selection | Meta-loop | Selector turns map items into next MVL+ runs. |
| Q6 Cleanup | Future implementation | Taxonomy cleanup and dogfooding improve trust without changing identity. |

## 6. Dependency Order

1. Decide whether Navigation has a distinct operation.
2. Decide whether it belongs inside the core MVL+ pipeline.
3. Compare it to `loop_diagnose`.
4. Define invocation options.
5. Define selection boundary.
6. Recommend practical next changes.

Q1 must come first. If Navigation does not have a distinct operation, the rest collapses toward protocol wrapper. If it does, the rest becomes integration design.

## 7. Self-Evaluation

| Dimension | Result | Notes |
|---|---|---|
| Independence | Pass | Each question is separable after Q1. |
| Completeness | Pass | Covers identity, pipeline, wrapper analogy, invocation, selection, and practical changes. |
| Reassembly | Pass | Answering Q1-Q6 answers the original question. |
| Tractability | Pass | Each piece can be handled in a focused section. |
| Interface clarity | Pass | Identity, invocation, and selection are explicitly separated. |
| Balance | Pass | No single piece dominates the whole answer. |
| Confidence | High | Top-down clusters match bottom-up atoms. |

## Decomposition Verdict

**Overall: PROCEED**

- **Evidence:** The decomposition isolates the central decision: Navigation's identity is separate from invocation mechanics.
- **Risk:** The final finding should not imply Navigation is a core MVL+ stage just because MVL+ may invoke it after CONCLUDE.
- **Suggested routing:** Continue to Innovation and test candidate architectures.
