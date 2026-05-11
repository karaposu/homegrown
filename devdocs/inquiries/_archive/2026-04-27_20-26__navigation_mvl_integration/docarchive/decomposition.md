# Decomposition: Navigation MVL Integration

## User Input

`devdocs/inquiries/2026-04-27_20-26__navigation_mvl_integration/_branch.md`

## 1. Coupling Map

### Cluster A: Atomic Loop Integrity

Elements:

- MVL and MVL+ fixed discipline sequences.
- CONCLUDE as finding compiler.
- `_state.md` as loop-local progress record.
- Discipline outputs as answer-production artifacts.

Coupling is strong inside the cluster. Changing the loop sequence changes how every inquiry runs and risks weakening the atomic-loop model.

### Cluster B: Boundary Signals

Elements:

- Partial answer.
- Open questions.
- Multiple survivor paths.
- Failure to converge after repeated iterations.
- Explicit user request.
- Relationship return pointers such as CONTINUES FROM / RELATED.

Coupling is moderate with Cluster A. These signals are emitted by a completed or stalled loop, but they should not alter the loop's internal reasoning sequence.

### Cluster C: Navigation Map Production

Elements:

- `homegrown/navigation` taxonomy.
- Content/process/context next-direction categories.
- Navigation confidence levels.
- Per-direction guidelines and WHY.
- Excluded-type reasoning.

Coupling is strong with Cluster B because Navigation needs loop signals as input.

### Cluster D: Selection

Elements:

- Human choice.
- Highest-confidence heuristic.
- Branch budget.
- Risk/goal priorities.
- Autonomous mode.

Coupling is moderate with Cluster C. Selection consumes the Navigation map but is not the same operation as producing it.

### Cluster E: Meta-Loop Orchestration

Elements:

- Meta-state across multiple MVL+ runs.
- Launching next MVL+ inquiry.
- Branching multiple heads.
- Merging/comparing findings.
- Meaningful-traversal signals.
- Termination across a sequence of loops.

Coupling is strong with Cluster D and weak-to-moderate with Cluster A. The meta-loop treats MVL+ as a callable unit.

## 2. Boundary Detection

Natural boundaries:

1. **Core-loop boundary:** MVL/MVL+ reasoning sequence ends before Navigation.
2. **Signal boundary:** loop outputs emit conditions that may justify Navigation.
3. **Map/selection boundary:** Navigation enumerates; a separate selector chooses.
4. **Single-loop/meta-loop boundary:** MVL+ does one inquiry; meta-loop controls many inquiries.
5. **Sequential/multi-head boundary:** v1 can select one next loop; v2+ can dispatch several heads.

The most important boundary is map/selection. If Navigation quietly selects, it becomes an unexamined decision-maker and contradicts its own spec.

## 3. Bottom-Up Validation

Atomic elements:

- `Critique verdicts` are loop-local.
- `Open Questions` are loop-local but point outward.
- `Navigation map` is boundary artifact.
- `Human selection` currently happens outside files.
- `Meta-state` does not exist yet.
- `Meaningful traversal` exists as concept, not runtime mechanism.

These atoms validate the top-down boundary set. The map exists; the selector and meta-state do not.

## 4. Question Tree

### Q1: What should MVL/MVL+ own?

Verification criteria:

- [ ] Answer preserves atomic loop integrity.
- [ ] Answer does not insert Navigation into the core discipline sequence.
- [ ] Answer explains whether MVL and MVL+ differ.

Answer direction: MVL/MVL+ own one bounded inquiry. MVL+ may own a boundary trigger, but not recurrence.

### Q2: When should Navigation run?

Verification criteria:

- [ ] Trigger conditions are named.
- [ ] Unconditional invocation is evaluated.
- [ ] Manual invocation remains available.

Answer direction: conditionally at first, with explicit triggers.

### Q3: Who selects from the Navigation map?

Verification criteria:

- [ ] Human selection is named as current default.
- [ ] Autonomous heuristic is separated from Navigation.
- [ ] Future selector complexity is deferred.

Answer direction: human now; simple heuristic later; richer selector after empirical data.

### Q4: What belongs to the larger loop?

Verification criteria:

- [ ] Meta-state is named.
- [ ] Recurrence is separated from MVL+.
- [ ] Multi-head dispatch is deferred but interface-compatible.

Answer direction: continuous-loop runner owns recurrence, selection mode, branch dispatch, merge, and traversal-quality tracking.

### Q5: What should be built next?

Verification criteria:

- [ ] Next step is small enough to implement.
- [ ] It produces real usage data for Navigation.
- [ ] It does not pretend to be full autonomy.

Answer direction: add conditional Navigation invocation to MVL+ or run it manually on completed inquiries before building the runner.

## 5. Interface Map

| Source Piece | Target Piece | Flow | Direction |
|---|---|---|---|
| MVL+/CONCLUDE | Boundary signals | Finding summary, open questions, convergence status, relationships | One-way |
| Boundary signals | Navigation | Trigger condition and folder path | One-way |
| Navigation | Selector | Navigation map with typed options and confidence | One-way |
| Selector | MVL+ | Next inquiry question or branch set | One-way |
| Meta-loop | MVL+ | Invocation, state, mode, branch context | One-way |
| MVL+ | Meta-loop | Finding, status, telemetry, open questions | One-way |
| Meta-loop | Meaningful traversal | Coverage/convergence/productivity/directedness observations | One-way |

## 6. Dependency Order

For architecture:

1. Preserve MVL+/CONCLUDE atomicity.
2. Define boundary triggers.
3. Produce Navigation maps.
4. Select from maps.
5. Store meta-state.
6. Launch next MVL+ run.
7. Add branch/merge for multi-head.
8. Add meaningful-traversal termination.

For implementation:

1. Manual Navigation usage on real completed inquiries.
2. Conditional Navigation invocation in MVL+.
3. Simple manual selector.
4. Continuous-loop runner v1.
5. Meaningful traversal spec/runtime.
6. Multi-head dispatch and merge.

## 7. Self-Evaluation

| Dimension | Result | Reason |
|---|---|---|
| Independence | PASS | Core loop, trigger, map, selector, and meta-loop can be described separately. |
| Completeness | PASS | Covers MVL inclusion, Navigation purpose, selector, larger loop, and multi-head future. |
| Reassembly | PASS | Pieces reconstruct full architecture from single MVL+ run to future multi-head orchestration. |
| Tractability | PASS | Each question can be answered in one focused pass. |
| Interface clarity | PASS | Interfaces name what flows and direction. |
| Balance | PASS | No single piece hides the entire problem; meta-loop is largest but correctly deferred. |
| Confidence | HIGH | Top-down boundaries match bottom-up artifacts and prior findings. |

## Decomposition Output

The architecture has five pieces:

1. **Atomic MVL/MVL+ loop** - one bounded inquiry.
2. **Boundary trigger** - decides whether Navigation should run.
3. **Navigation map** - enumerates possible next directions.
4. **Selector** - human or heuristic chooses one or more directions.
5. **Meta-loop runner** - repeats/branches MVL+ runs and measures traversal.

Only piece 2 belongs near MVL+ now. Pieces 3-5 should remain explicit and separate.
