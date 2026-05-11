# Decomposition: Meta Loop Whirl Navigation

## User Input

`devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/_branch.md`

## 1. Coupling Map

### Cluster A: Seed and Context Intake

Elements:

- Raw user question.
- Existing inquiry folder.
- Finding chain.
- Navigation map.
- Reflection output.
- Correction chain.
- Project-level context.

Coupling is strong inside this cluster because all possible starts must be normalized into a common state the runner can understand.

### Cluster B: Artifact Terrain

Elements:

- Inquiry folders.
- `_branch.md` and `_state.md`.
- `finding.md`.
- Archived discipline outputs.
- `navigation.md` maps.
- Reflection outputs.
- Relationship pointers.

Coupling is strong because the meta-loop traverses these as terrain. A change to artifact shape affects what the runner can perceive and remember.

### Cluster C: Perception

Elements:

- Navigation taxonomy.
- Reachability/gates.
- REVISIT modes.
- MERGE and CONSOLIDATE directions.
- Confidence levels.
- Excluded-type reasoning.

Coupling is strong with Artifact Terrain and moderate with Selection. Perception depends on artifacts; selection consumes perception.

### Cluster D: Selection and Valuation

Elements:

- Human selector.
- Future heuristic selector.
- Branch budget.
- Goal priority.
- Risk tolerance.
- Traversal-quality signals.

Coupling is strong with Perception and Execution. Selection turns possible movement into actual movement.

### Cluster E: Execution / Probe

Elements:

- MVL+ runs.
- New inquiry creation.
- Relationship tagging.
- Branch creation.
- Merge/consolidation inquiry creation.

Coupling is strong with Selection and Artifact Terrain. Execution writes the next terrain.

### Cluster F: Meta-State and Memory

Elements:

- Visited inquiry folders.
- Active fronts.
- Open questions.
- Selected Navigation items.
- Branch graph.
- Revisits/invalidation links.
- Stop/continue rationale.

Coupling is strong with all other clusters. Meta-state is the cross-run memory that makes the meta-loop more than isolated commands.

### Cluster G: Meaningful Traversal

Elements:

- Coverage.
- Convergence.
- Productivity.
- Directedness.
- Depth.
- Anti-spinning checks.
- Stop criteria.

Coupling is strong with Selection and Meta-State. It judges whether motion is worthwhile.

## 2. Boundary Detection

Natural boundaries:

1. **Input boundary:** many input types normalize into seed plus context.
2. **Perception/action boundary:** Navigation sees; MVL+ acts.
3. **Map/selection boundary:** Navigation enumerates; selector chooses.
4. **Run/memory boundary:** MVL+ creates artifacts; meta-state remembers across artifacts.
5. **Motion/judgment boundary:** the meta-loop can move; meaningful traversal judges whether movement is useful.
6. **Sequential/multi-head boundary:** v1 can move one step at a time; later versions branch and merge.

The most important boundary is perception/action. If Navigation acts, it becomes too large. If MVL+ perceives the whole path, it stops being atomic.

## 3. Bottom-Up Validation

Atomic elements:

- A seed starts traversal.
- A context packet bounds what can be read.
- Navigation produces a map.
- A selector chooses.
- MVL+ runs.
- Artifacts are written.
- Meta-state updates.
- Traversal quality is assessed.
- The runner stops, continues, revisits, branches, merges, or consolidates.

These atoms validate the top-down clusters. None of the atoms alone is the meta-loop; the meta-loop is their orchestration.

## 4. Question Tree

### Q1: What is the meta-loop's input?

Verification criteria:

- [ ] Names seed plus context.
- [ ] Allows artifact-native starts, not only user prompts.
- [ ] Identifies normalization as required.

Answer direction: flexible input normalized into a seed/context packet.

### Q2: What does the meta-loop do?

Verification criteria:

- [ ] Describes traversal rather than mere repetition.
- [ ] Includes forward, backward, branch, merge, consolidate, stop.
- [ ] Preserves MVL+ as the work unit.

Answer direction: stateful traversal over artifact terrain.

### Q3: What role does Navigation play?

Verification criteria:

- [ ] Names Navigation as perception.
- [ ] Explains why current Navigation fits.
- [ ] Names what Navigation lacks.

Answer direction: Navigation is eyes, not memory, selector, or will.

### Q4: Should the meta-loop discover all thinking space?

Verification criteria:

- [ ] Rejects literal total discovery.
- [ ] Replaces it with bounded meaningful traversal.
- [ ] Explains why open-ended artifact creation makes total discovery impossible.

Answer direction: goal-bounded traversal, not exhaustive total mapping.

### Q5: What first implementation follows from the concept?

Verification criteria:

- [ ] Names a narrow v1.
- [ ] Does not overbuild multi-head.
- [ ] Identifies first state fields.

Answer direction: sequential meta-loop runner with human selector and `_meta_state.md`.

## 5. Interface Map

| Source Piece | Target Piece | Flow | Direction |
|---|---|---|---|
| Input | Meta-state | Seed artifact, context scope, initial goal | One-way |
| Artifact terrain | Navigation | Completed findings, questions, branch relations, reflections | One-way |
| Navigation | Selector | Typed movement options with confidence and guidelines | One-way |
| Selector | MVL+ | Chosen direction transformed into next inquiry question | One-way |
| MVL+ | Artifact terrain | New inquiry folder and finding | One-way |
| MVL+ | Meta-state | Completed run status, output path, relationship metadata | One-way |
| Meta-state | Navigation | Current active fronts, visited paths, known blockers | One-way |
| Meta-state | Meaningful traversal | Cross-run history and movement pattern | One-way |
| Meaningful traversal | Selector | Continue/stop/branch/merge pressure | One-way |
| Selector | Meta-state | Selected direction and selection rationale | One-way |

## 6. Dependency Order

Conceptual dependency:

1. Define seed plus context.
2. Define artifact terrain.
3. Use Navigation to perceive movement options.
4. Add explicit selection.
5. Execute MVL+ as probe.
6. Persist meta-state.
7. Assess meaningful traversal.
8. Add branch/merge dynamics.

Implementation dependency:

1. Manual workflow: run Navigation on existing findings and manually start next MVL+.
2. Sequential runner v1: seed -> MVL+ -> Navigation -> human select -> next MVL+.
3. `_meta_state.md` v1: paths, selected directions, open questions, stop rationale.
4. Meaningful traversal placeholders: coverage, convergence, productivity.
5. Revisit support: link later findings back to earlier affected findings.
6. Branch graph support.
7. Multi-head dispatch.
8. Merge/consolidation logic.

## 7. Self-Evaluation

| Dimension | Result | Reason |
|---|---|---|
| Independence | PASS | Input, perception, selection, execution, memory, and traversal judgment are separate roles. |
| Completeness | PASS | Covers what the meta-loop consumes, sees, does, remembers, judges, and outputs. |
| Reassembly | PASS | The pieces reassemble into a stateful traversal runner. |
| Tractability | PASS | Each piece can be designed in a separate inquiry. |
| Interface clarity | PASS | Main flows are explicit. |
| Balance | PASS | Meta-state and meaningful traversal are heavier, but correctly isolated. |
| Confidence | HIGH | Boundaries match Navigation spec, prior finding, and meaningful-traversal note. |

## Decomposition Output

The meta-loop has six functional pieces:

1. **Input normalizer:** turns any start point into seed plus context.
2. **Artifact terrain reader:** knows what inquiry artifacts exist.
3. **Navigation/perception layer:** maps possible movements.
4. **Selector/valuation layer:** chooses one or more movements.
5. **MVL+ execution layer:** probes selected movements and creates artifacts.
6. **Meta-state/traversal layer:** remembers movement and judges whether the traversal is meaningful.

Only pieces 1-3 are conceptually clear enough now. Pieces 4-6 are the next design frontier.

