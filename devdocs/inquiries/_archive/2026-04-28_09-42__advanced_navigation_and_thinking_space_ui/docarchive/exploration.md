# Exploration: Advanced Navigation And Thinking Space UI

## User Input

`devdocs/inquiries/2026-04-28_09-42__advanced_navigation_and_thinking_space_ui/_branch.md`

## 1. Mode and Entry Point

**Mode:** Mixed artifact and possibility exploration.

- Artifact territory: current Navigation spec, Navigation prior findings, meta-loop spec, and existing Navigation outputs.
- Possibility territory: compute-aware advanced Navigation designs and visual thinking-space UI directions.

**Entry point:** Signal-first.

The user's signal is clear: the deep Navigation model is attractive, but current Navigation may not actually implement it. There is also a new possible direction: a Navigation Map may become a visual map of thinking space rather than only a markdown list.

## 2. Exploration Cycles

### Cycle 1 - Scan Current Navigation Artifacts

**Scanned:**

- `homegrown/navigation/SKILL.md`
- `homegrown/navigation/references/navigation.md`
- `devdocs/archive/how_navigation_discipline_works.md`
- `devdocs/archive/deprecated/navigation.md`
- prior finding `devdocs/inquiries/2026-04-28_09-19__navigation_depth_and_answer_production/finding.md`

**Found:**

- Current Navigation has a useful taxonomy, confidence markers, excluded reasoning, guideline structure, and telemetry.
- The source has a mismatch: installed/current references talk about 16 types, while some older docs and skill metadata still say 15.
- Current Navigation's process is mostly:
  1. read available outputs;
  2. assign taxonomy types;
  3. generate guidelines;
  4. assign confidence;
  5. check excluded types;
  6. format the map.
- It does not yet require a deep internal map-construction pass with position read, move-space exploration, blocker sensemaking, direction decomposition, direction generation, and map critique.
- There are no completed `navigation.md` outputs under `devdocs/inquiries/` yet, so the discipline has little real usage evidence.

**Signals detected:**

- Current Navigation is conceptually strong but operationally underpowered for the advanced role.
- Lack of real Navigation outputs is a bigger blocker than lack of theory.
- The "Navigation Map" is currently a markdown artifact, not a durable graph object.
- A UI cannot be meaningful until the data shape is stable enough to visualize.

**Resolution decision:** Zoom in on current maturity versus desired maturity.

**Probe:**

Current Navigation is not yet the advanced Navigation described in the prior corrective finding. It has the skeleton of a map, but not the full compute-aware reasoning process.

The current process can produce useful maps for simple cases, but it does not reliably force:

- non-obvious move generation;
- blocker and gate analysis beyond a reachability note;
- decomposition of move dependencies;
- explicit map critique;
- cross-inquiry graph awareness;
- outcome tracking from selected moves.

**Frontier state:** Advancing. Current state is known; advanced design space remains open.

**Confidence update:** Confirmed that current Navigation is not advanced enough yet.

### Cycle 2 - Scan Compute Constraints

**Scanned candidate compute models:**

1. Always run full advanced Navigation.
2. Always run current cheap Navigation.
3. Use budgeted Navigation tiers.
4. Let user manually request depth.
5. Let meta-loop escalate Navigation depth based on risk or uncertainty.

**Found:**

- Always-full Navigation is too expensive and will create too much artifact noise.
- Always-cheap Navigation will miss the user's intended power.
- Manual-only depth is safe but easy to forget.
- A tiered model fits the project: cheap maps by default, deeper maps when trigger signals exist.

**Signals detected:**

- Compute budget should be part of Navigation's contract.
- "Advanced Navigation" should not mean "max depth every time."
- Good Navigation should be adaptive: shallow when enough, deep when needed.

**Resolution decision:** Zoom in on tiered advanced Navigation.

**Probe:**

Possible levels:

- **N0: Pointer.** One-line "Navigation likely useful / not useful" signal after CONCLUDE.
- **N1: Current Map.** Existing taxonomy-based markdown map.
- **N2: Deep Map.** Internal map-construction pass: explore moves, sensemake blockers, decompose dependencies, generate non-obvious routes, critique the map.
- **N3: Graph Map.** Produce structured edges between inquiries, moves, blockers, branches, and outcomes.
- **N4: Sub-Inquiry Navigation.** Spawn MVL+ sub-inquiries for hard navigation blockers.

N2 is the next real target. N3 supports UI. N4 is deferred.

**Frontier state:** Stabilizing around tiered Navigation.

**Confidence update:** High confidence that tiering is necessary under compute limits.

### Cycle 3 - Scan Thinking-Space UI Possibility

**Scanned possible UI meanings:**

1. Pretty visualization of existing markdown maps.
2. Artifact graph browser for inquiries, findings, Navigation maps, and selected moves.
3. Live meta-loop dashboard showing currently running loops and their branch graph.
4. Cognitive terrain UI showing possible next moves as typed edges.
5. Evidence UI showing why a path exists, what supports it, and what blocked it.

**Found:**

- A UI can be more than display. It can become a working memory and selection surface for thinking-space traversal.
- The valuable UI is not a static mind map. It is an artifact graph: inquiries as nodes, navigation directions as edges, selected moves as thickened edges, outcomes as labels.
- Visualizing loops running through thinking space could make the meta-loop less abstract and easier to debug.
- The UI needs structured data first. Without stable node/edge data, the UI becomes manual drawing or decoration.

**Signals detected:**

- The UI idea is strategically good if treated as an instrumentation layer.
- It is premature if treated as the next implementation before Navigation produces structured data.
- The UI can reduce context cost for humans and agents by showing recency, branches, unresolved blockers, and repeated failure patterns.

**Resolution decision:** Probe minimal buildable UI path.

**Probe:**

The minimal useful UI should not start as a complex app. It should start as a generated artifact graph from existing folders:

- node: inquiry folder;
- node metadata: title, date, status, flow type, finding summary, confidence if available;
- edge: relationship links, Navigation directions, correction links, continues-from links, selected move links;
- edge metadata: type, confidence, selected/not selected, outcome unknown/success/failure.

The first UI could be a static HTML graph or compact local viewer, generated from markdown frontmatter and `_state.md`. The point is not aesthetics first. The point is to make thinking-space structure visible.

**Frontier state:** Stable around graph-first UI.

**Confidence update:** Medium-high confidence that a UI is valuable after structured map data exists.

### Jump Scan - Opposite Direction

**Scanned contrary possibility:** Maybe a thinking-space UI is a distraction, and all effort should go into text protocols and self-maintenance first.

**Found:**

This objection is partly right. Building a polished UI before data and workflows exist would be premature. It would consume implementation time and might produce a beautiful but low-value artifact.

But a minimal visualization is not just decoration. Homegrown is accumulating many inquiry folders. The system already has a navigation and meta-loop concept that depends on relationships between artifacts. A graph view can expose structure that text alone hides.

The UI should therefore be treated as a later instrumentation artifact, not as the immediate core build.

**Frontier result:** UI survives as a staged direction, not as immediate priority.

## 3. Convergence Assessment

- **Frontier stability:** Stable. Current Navigation maturity, compute-aware levels, and UI path are mapped.
- **Declining discovery rate:** Yes. Later scans clarified staging rather than adding new major options.
- **Bounded gaps:** Yes. Remaining gaps concern exact schema and implementation timing.

Exploration is complete for this inquiry.

## 4. Structural Map

### Territory Overview

The territory has five major regions:

1. **Current Navigation maturity:** strong taxonomy and format, weak internal depth and no real-use corpus.
2. **Advanced Navigation target:** adaptive, deep, movement-space analysis.
3. **Compute constraint:** depth must be budgeted by trigger, not run everywhere.
4. **Thinking-space UI:** valuable as an artifact graph and traversal dashboard, premature as a polished app.
5. **Data layer:** structured navigation output is prerequisite for good visualization.

### Inventory

| Region | What was found | Confidence |
|---|---|---|
| Current Navigation | Taxonomy, guidelines, confidence, excluded reasoning, telemetry | Confirmed |
| Current weakness | No forced deep map-construction pass; no Navigation outputs in inquiries | Confirmed |
| Compute strategy | Tiered Navigation is stronger than always-full or always-cheap | Confirmed |
| UI value | Useful if graph/instrumentation, weak if decorative | Scanned |
| UI prerequisite | Needs structured node/edge data from inquiries and Navigation Maps | Confirmed |
| Long-term possibility | Thinking-space UI may become a selection surface for meta-loop | Inferred |

### Signal Log

- **Strong signal:** Current Navigation is not advanced enough yet for the user's ambition.
- **Strong signal:** Advanced Navigation must be compute-aware and tiered.
- **Strong signal:** The first UI should visualize artifact relationships, not invent a separate visual world.
- **Medium signal:** Navigation Maps could become a new Homegrown innovation if they become graph-native and outcome-aware.
- **Medium signal:** UI should follow schema and dogfooding, not precede them.

### Confidence Map

- **Confirmed:** Current Navigation is underpowered relative to the newly stated advanced model.
- **Confirmed:** There is little usage data because no `navigation.md` outputs were found under current inquiry folders.
- **Confirmed:** Compute limits argue for adaptive tiers.
- **Scanned:** Static graph UI as a first visualization.
- **Inferred:** A later UI can become a human/selector workbench for meta-loop traversal.
- **Unknown:** Exact schema for Navigation Map as machine-readable graph.

### Frontier State

The main frontier is:

```text
How do we make Navigation deep enough to guide traversal,
cheap enough to use often, and structured enough to visualize?
```

### Gaps and Recommendations

- Sensemaking should clarify what "advanced Navigation" means under compute limits.
- Decomposition should separate protocol depth, data schema, UI, meta-loop integration, and evaluation.
- Innovation should generate staged architectures for Navigation levels and thinking-space UI.
- Critique should test whether UI is genuinely useful now or should wait.

## Exploration Telemetry

- **Mode:** Mixed artifact and possibility exploration.
- **Entry point:** Signal-first.
- **Cycles run:** 3 plus jump scan.
- **Convergence:** COMPLETE.
- **Primary failure avoided:** Completeness bias in possibility mode. The analysis included the boring staged path, not only the exciting UI idea.
- **Output: PROCEED**
