# Innovation: Advanced Navigation And Thinking Space UI

## User Input

`devdocs/inquiries/2026-04-28_09-42__advanced_navigation_and_thinking_space_ui/_branch.md`

## Seed

The seed is the collision between two truths:

- Navigation should be deep enough to guide future meta-loop traversal.
- Compute is limited, so Navigation cannot be deep in every case.

The secondary seed is the user's intuition that a Navigation Map may be a new kind of artifact: a visual thinking-space map showing where loops run, branch, revisit, and merge.

## Mechanism Outputs

### 1. Lens Shifting

**Generic:** View Navigation not as a command, but as a perception budget manager.

**Focused:** Navigation should decide how much map-construction work a situation deserves: cheap map for obvious paths, deep map for uncertainty, graph map for persistent traversal, sub-inquiry only for hard blockers.

**Contrarian:** Treat UI not as a display layer but as the externalized working memory of the meta-loop.

**Test:** Focused and contrarian outputs survive. They convert compute limits and UI into architectural constraints rather than side concerns.

### 2. Combination

**Generic:** Combine Navigation levels, graph schema, and meta-loop state.

**Focused:** Create a layered Navigation stack:

```text
N1 markdown map
N2 deep map construction
N3 graph-native map sidecar
N4 sub-inquiry escalation
UI over N3 + meta-state
```

**Contrarian:** Combine UI and selector: a human chooses directly on the graph, and the selected edge becomes the next MVL+ seed.

**Test:** The layered stack survives. The graph selector idea is fertile but must stay explicitly human-selected until selector policy exists.

### 3. Inversion

**Generic:** Instead of asking "how do we make Navigation advanced?", ask "how do we stop Navigation from becoming too expensive to use?"

**Focused:** Advanced Navigation should default cheap and escalate only when triggers fire.

**Contrarian:** Instead of UI showing the results of thinking, UI becomes the place where thinking-space pressure is detected: stale nodes, unresolved high-confidence frontiers, repeated corrections, dead branches.

**Test:** Focused inversion survives. Contrarian inversion survives as a future feature after graph data exists.

### 4. Constraint Manipulation

**Generic:** Add a compute budget field to Navigation.

**Focused:** Each Navigation run should declare `depth_mode: pointer | standard | deep | graph | escalation`.

**Contrarian:** Add a rule: no UI work until at least five real Navigation Maps exist.

**Test:** Focused output survives as practical. Contrarian output is a useful gate, though the threshold can be five maps rather than a permanent block.

### 5. Absence Recognition

**Generic:** Missing thing: Navigation has no durable graph representation.

**Focused:** Add a machine-readable sidecar such as `navigation.graph.json` after markdown output stabilizes.

**Contrarian:** Missing thing: selection and outcomes are not recorded, so the system cannot learn which Navigation paths were useful.

**Test:** Both survive. Graph data enables UI; selection/outcome records enable future selector learning.

### 6. Domain Transfer

**Generic:** Borrow from map systems: maps have layers, not one view.

**Focused:** Thinking-space UI should have layers:

- artifact layer: inquiries, findings, docs;
- movement layer: Navigation directions;
- status layer: active, complete, blocked, stale;
- evidence layer: WHY, confidence, source artifact;
- traversal layer: selected moves and outcomes.

**Contrarian:** Borrow from observability dashboards: the first UI should be diagnostics, not exploration. Show where the system is stuck, repetitive, or overloaded.

**Test:** Layered map survives. Observability framing is strong because it prevents decorative UI.

### 7. Extrapolation

**Generic:** As inquiry folders grow, text-only navigation becomes increasingly expensive.

**Focused:** Without graph/index/UI, the system will lose recency, branch relationships, corrections, and unresolved frontiers. Navigation quality will degrade because context retrieval becomes costly.

**Contrarian:** If graph UI exists too early, it may make weak structure look mature and mislead the user.

**Test:** Focused output survives. Contrarian output supports staged build order.

## Survivor Tests

### Survivor A - Tiered Navigation levels

Proposed levels:

- **N0 Pointer:** minimal signal that Navigation is or is not worth running.
- **N1 Standard Map:** current taxonomy-based markdown Navigation.
- **N2 Deep Map:** internal movement-space analysis with blockers, dependencies, non-obvious paths, and map critique.
- **N3 Graph Map:** N2 plus structured node/edge output for persistence and UI.
- **N4 Escalation:** Navigation triggers MVL+ sub-inquiries only when a responsible map cannot be made cheaply.

**Novelty:** Medium. The levels synthesize existing Navigation with compute budgeting.

**Scrutiny survival:** Strong. It directly handles limited compute.

**Fertility:** High. It creates a roadmap for spec changes, data schema, UI, and later meta-loop.

**Actionability:** High. N2 can be implemented in docs before code.

**Mechanism independence:** Strong. Lens shifting, inversion, constraint manipulation, and extrapolation converge.

**Verdict: SURVIVE**

### Survivor B - Navigation Map as graph-native artifact

The markdown map remains the human-readable view, but Navigation should eventually emit a structured representation:

```text
nodes: inquiries, findings, moves, blockers, branches, outcomes
edges: continues_from, corrects, navigates_to, selected, blocked_by, tests, merges
edge metadata: type, confidence, evidence, selected, outcome
```

**Novelty:** High in this project context. It turns Navigation Map into a data artifact, not only prose.

**Scrutiny survival:** Strong if introduced after real maps exist.

**Fertility:** Very high. It supports UI, selector training, and meta-loop memory.

**Actionability:** Medium now, high after N2 dogfooding.

**Mechanism independence:** Strong. Absence recognition, domain transfer, and extrapolation converge.

**Verdict: SURVIVE**

### Survivor C - Static thinking-space graph as first UI

Generate a local static graph from inquiry folders and Navigation outputs.

Show:

- inquiry nodes;
- relationship edges;
- Navigation move edges;
- correction chains;
- selected moves;
- blocked/open/completed status;
- confidence and dates.

**Novelty:** Medium.

**Scrutiny survival:** Strong. It is simple enough and directly useful.

**Fertility:** High. Can evolve into interactive UI.

**Actionability:** Medium. Needs graph schema first, but not a full app.

**Mechanism independence:** Strong.

**Verdict: SURVIVE**

### Survivor D - Live meta-loop dashboard

Show active loops running through thinking space in real time.

**Novelty:** High.

**Scrutiny survival:** Medium. Valuable, but depends on a real meta-loop runner and live state.

**Fertility:** High.

**Actionability:** Low now.

**Mechanism independence:** Moderate.

**Verdict: REFINE / DEFER**

Revival condition: after a sequential meta-loop has produced at least three traversal traces.

### Survivor E - Polished visual UI immediately

Build the visual thinking-space interface now.

**Novelty:** Medium.

**Scrutiny survival:** Weak. It would precede stable data and real maps.

**Fertility:** Medium.

**Actionability:** Medium, but likely wasteful.

**Mechanism independence:** Weak.

**Verdict: KILL**

Constructive seed: build a generated static graph later, after N2 maps and minimal graph data.

### Survivor F - Always-run deep Navigation

Every completed inquiry gets N2 or deeper Navigation.

**Novelty:** Low.

**Scrutiny survival:** Weak. It ignores compute and artifact noise.

**Fertility:** Medium.

**Actionability:** High but inefficient.

**Mechanism independence:** Weak.

**Verdict: KILL**

Constructive seed: use trigger-based escalation.

## Assembly Check

The strongest assembly is:

```text
Upgrade Navigation in levels:
  N1 current map
  N2 deep map construction
  N3 graph-native map
  N4 rare sub-inquiry escalation

Dogfood N2 before UI.
Add minimal graph data before visualization.
Build static graph UI before interactive dashboard.
Record selections and outcomes from the start.
```

This assembly solves the user's concern without pretending compute is unlimited.

## Proposed First Design

### N2 Deep Map Construction

Add these required phases to Navigation:

1. **Position read**
2. **Move-space exploration**
3. **Blocker sensemaking**
4. **Direction decomposition**
5. **Direction generation**
6. **Map critique**
7. **Map output**

### Depth Triggers

Escalate from N1 to N2 when:

- there are multiple plausible next moves;
- the finding corrects or supersedes a prior inquiry;
- blockers or gates are present;
- the user asks strategic "what next?" questions;
- the inquiry affects fundamentals;
- meta-loop traversal is active;
- the cheap map has low confidence or too many excluded paths.

### N3 Graph Fields

Possible minimal graph sidecar:

```json
{
  "source_inquiry": "...",
  "nodes": [
    {"id": "...", "kind": "inquiry|move|blocker|outcome", "label": "..."}
  ],
  "edges": [
    {"from": "...", "to": "...", "kind": "navigates_to|blocked_by|selected|corrects", "confidence": "high|medium|low"}
  ]
}
```

### First UI

Start with a generated static graph:

- left: inquiry list/filter by date/status/type;
- center: graph of nodes and edges;
- right: selected node details with finding summary and Navigation items;
- edge colors by movement type;
- edge thickness for selected paths;
- badges for blocked, open, complete, corrected, superseded.

## Mechanism Coverage

- **Generators applied:** 4 / 4
- **Framers applied:** 3 / 3
- **Convergence:** YES. Five mechanisms converge on tiered Navigation plus graph-native output before UI.
- **Survivors tested:** 6 / 6
- **Failure modes observed:** None severe. Survival bias was checked by testing the exciting immediate UI idea and killing it.
- **Overall: PROCEED**
