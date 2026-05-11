# Decomposition: Advanced Navigation And Thinking Space UI

## User Input

`devdocs/inquiries/2026-04-28_09-42__advanced_navigation_and_thinking_space_ui/_branch.md`

## 1. Coupling Map

The whole problem has six major clusters:

1. **Current Navigation Maturity**
   - What current Navigation can do.
   - What it cannot yet do.
   - Whether its current process is enough for meta-loop-grade traversal.

2. **Advanced Navigation Levels**
   - Compute-aware depth levels.
   - Triggers for escalation.
   - Budget limits.

3. **Navigation Output Data**
   - Markdown map.
   - Structured sidecar.
   - Graph nodes and edges.
   - Outcome records.

4. **Thinking-Space UI**
   - Static artifact graph.
   - Interactive graph.
   - Live meta-loop dashboard.
   - Human selection surface.

5. **Meta-loop Integration**
   - Navigation as perception.
   - Selector as decision layer.
   - Meta-state as memory.
   - Loop activity as traversal trace.

6. **Evaluation and Evidence**
   - Dogfooding Navigation.
   - Measuring whether maps help.
   - Recording selected moves and outcomes.
   - Avoiding premature UI work.

### Coupling Gradients

- Strong coupling: advanced Navigation levels and compute constraints.
- Strong coupling: UI usefulness and graph-native data.
- Strong coupling: meta-loop integration and selected-move outcome records.
- Moderate coupling: Navigation spec depth and UI design.
- Moderate coupling: taxonomy cleanup and structured output schema.
- Weak coupling: polished visual design and current Navigation correctness.

## 2. Boundaries

### Boundary A - Navigation Depth vs Visualization

Navigation depth answers whether the map is good.

Visualization answers whether the map and artifact terrain are easier to inspect.

These must be separated because a UI cannot fix shallow Navigation.

### Boundary B - Markdown View vs Graph Data

Markdown is the human-readable view.

Graph data is the machine-readable representation.

These must be separated because a graph UI cannot reliably depend on prose parsing.

### Boundary C - Navigation Perception vs Selection

Navigation sees possible moves.

Selection chooses a move.

These must be separated because UI interaction can accidentally hide selection logic.

### Boundary D - Static Instrumentation vs Live Runner

A static graph visualizes existing artifacts.

A live dashboard shows running loops and traversal state.

These must be separated because static instrumentation can be built before a full runner exists.

### Boundary E - Current N1 vs Advanced N2/N3/N4

N1 is current taxonomy map.

N2 is deep map construction.

N3 is graph-native map output.

N4 is sub-inquiry escalation.

These must be separated because each level has different compute and implementation cost.

## 3. Bottom-Up Boundary Validation

### Atomic Elements

- "Read current inquiry output."
- "Assign Navigation type."
- "Generate guideline."
- "Explore non-obvious next move."
- "Understand blocker."
- "Decompose move dependencies."
- "Critique map completeness."
- "Represent inquiry as graph node."
- "Represent Navigation move as graph edge."
- "Show path in UI."
- "Record human selection."
- "Record later outcome."
- "Run next MVL+."

### Validation

- First seven atoms belong to Navigation depth.
- Graph node and edge atoms belong to structured data.
- Showing path belongs to UI.
- Recording selection/outcome belongs to evaluation/meta-state.
- Running next MVL+ belongs to meta-loop or human-selected workflow.

Top-down and bottom-up boundaries agree.

## 4. Question Tree

### Q1 - What is the honest current maturity of Navigation?

**Verification criteria:**

- [ ] Names current strengths.
- [ ] Names missing depth.
- [ ] Does not overstate current capability.

### Q2 - What should advanced Navigation levels be?

**Verification criteria:**

- [ ] Defines cheap and deep levels.
- [ ] Explains triggers for escalation.
- [ ] Avoids unlimited compute assumptions.

### Q3 - What data shape should Navigation produce before UI?

**Verification criteria:**

- [ ] Preserves markdown readability.
- [ ] Adds graph-friendly structure.
- [ ] Supports nodes, edges, confidence, selection, and outcomes.

### Q4 - Is a thinking-space UI a good idea?

**Verification criteria:**

- [ ] Distinguishes instrumentation from decoration.
- [ ] Names what the UI should show.
- [ ] Places UI after schema and real maps.

### Q5 - What is the staged implementation path?

**Verification criteria:**

- [ ] Starts with spec/depth improvements.
- [ ] Includes dogfooding.
- [ ] Adds schema before UI.
- [ ] Defers live dashboard and automation until evidence exists.

### Q6 - How should usefulness be evaluated?

**Verification criteria:**

- [ ] Records whether maps lead to better next inquiries.
- [ ] Records selected moves and outcomes.
- [ ] Checks whether UI reduces human/agent context cost.

## 5. Interface Map

| Source | Target | Flow | Direction |
|---|---|---|---|
| Completed inquiry folder | Navigation N1/N2 | branch, state, finding, archived discipline outputs, telemetry | One-way |
| Navigation N2 | Navigation Map markdown | human-readable next-move analysis | One-way |
| Navigation N2/N3 | Graph data | nodes, edges, move types, confidence, blockers, status | One-way |
| Graph data | Static UI | artifact graph, filters, path view | One-way |
| Static UI | Human selector | visible options and context | One-way |
| Human selector | Meta-state | selected edge, selection reason, next question | One-way |
| Meta-state | Future UI/dashboard | loop path, branch graph, outcomes | One-way |
| Outcomes | Navigation evaluation | which directions were useful | One-way |

### Hidden Coupling Risks

- If UI parses prose instead of structured data, small wording changes break visualization.
- If Navigation confidence is treated as selection, hidden automation appears.
- If graph data is added before Navigation quality improves, the UI visualizes shallow maps.
- If N2 is too expensive, users stop running Navigation.
- If N3 schema is overdesigned before real maps exist, it becomes speculative.

## 6. Dependency Order

1. Fix current Navigation spec drift, including 15/16 taxonomy mismatch.
2. Add N2 deep map-construction phases to Navigation.
3. Run Navigation manually on at least five completed inquiries.
4. Review maps for missing blockers, non-obvious moves, excluded reasoning, and usefulness.
5. Add minimal graph-friendly structured output.
6. Generate a static artifact graph from existing inquiry folders and Navigation maps.
7. Use the static graph to decide whether an interactive UI is worth building.
8. Add live meta-loop dashboard only after a sequential meta-loop produces real traversal traces.

Parallel after step 2:

- Define Navigation depth triggers.
- Define selection/outcome logging fields.
- Clean old docs that still refer to 15 types if 16 remains current.

## 7. Self-Evaluation

### Independence - PASS

Each question covers a separate piece: maturity, levels, data, UI, staging, and evaluation.

### Completeness - PASS

The decomposition covers the full user prompt: current capability, compute limits, advanced Navigation, visual thinking space, and loop visualization.

### Reassembly - PASS

If Q1 through Q6 are answered, the project has a staged plan from current Navigation to advanced Navigation to graph/UI.

### Tractability - PASS

Each piece can be reasoned about without implementing the whole system.

### Interface Clarity - PASS

The major interfaces are explicit: inquiry artifacts into Navigation, Navigation into graph data, graph data into UI, selection into meta-state, outcomes back into evaluation.

### Balance - PASS

The largest pieces are advanced Navigation levels and data/UI staging, but no single piece dominates the whole problem.

### Confidence - HIGH

Top-down clusters and bottom-up atoms agree.

## Decomposition Telemetry

- **Primary boundary:** Navigation quality versus UI visualization.
- **Most important hidden coupling risk:** building UI before structured Navigation data exists.
- **Most important missing-piece risk avoided:** evaluation/outcome tracking is included, not assumed.
- **Output: PROCEED**
