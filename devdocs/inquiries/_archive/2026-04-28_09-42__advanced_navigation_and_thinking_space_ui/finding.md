---
status: active
refines: devdocs/inquiries/2026-04-28_09-19__navigation_depth_and_answer_production/finding.md
impacted_by:
  - devdocs/inquiries/2026-04-28_08-39__navigation_protocol_or_discipline/finding.md
  - devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/finding.md
  - devdocs/inquiries/2026-04-27_20-26__navigation_mvl_integration/finding.md
---
# Finding: Advanced Navigation And Thinking Space UI

## Changes from Prior

**What's preserved:** The prior finding `devdocs/inquiries/2026-04-28_09-19__navigation_depth_and_answer_production/finding.md` was right that Navigation should be a deep, answer-producing boundary discipline.

**What's changed:** This finding adds the current-state assessment: existing Navigation is not yet that advanced. It has a strong skeleton, but its process is still too close to taxonomy assignment plus guideline generation.

**What's new:** Advanced Navigation should be tiered by compute budget. The Navigation Map should also evolve toward a graph-native artifact that can later support a thinking-space UI.

**Migration:** Do not jump straight to a polished UI or always-deep Navigation. First patch Navigation toward N2 deep map construction, dogfood it on real inquiries, then add graph-native structure, then generate a simple visual graph.

## Question

Is current Homegrown Navigation advanced enough for the role being imagined, how should compute limits shape an "advanced Navigation" design, and is a visual thinking-space UI for Navigation Maps and loop activity a good direction?

The goal was to honestly assess the current Navigation discipline, decide what "advanced Navigation" should mean without assuming unlimited compute, evaluate whether a visual thinking-space UI is strategically valuable or premature, and recommend a staged path.

## Finding Summary

- Current Navigation is not advanced enough yet for the role now being imagined.

- Current Navigation has useful foundations: taxonomy, confidence, guidelines, excluded reasoning, and telemetry.

- Current Navigation does not yet force deep map construction: non-obvious move exploration, blocker sensemaking, dependency decomposition, map critique, graph awareness, or outcome tracking.

- Advanced Navigation should not mean "run maximum depth every time." Compute limits make that impractical.

- Advanced Navigation should be tiered:
  - N1: current taxonomy-based markdown map.
  - N2: deep map construction.
  - N3: graph-native map output.
  - N4: rare MVL+ sub-inquiry escalation.

- The thinking-space UI is a good idea if it is treated as instrumentation, not decoration.

- The UI should not be built as the next immediate polished app. It should follow real Navigation maps and structured graph data.

- The best path is: patch Navigation to N2, dogfood it, add minimal graph data, generate a static thinking-space graph, then consider interactive UI and live meta-loop dashboard.

## Finding

### 1. Current Navigation is a strong skeleton, not the mature version

Current Navigation has real structure. `homegrown/navigation/references/navigation.md` defines a map format, movement taxonomy, confidence labels, excluded reasoning, and telemetry.

That is valuable. It means Navigation is not just an informal "what next?" prompt.

But current Navigation is not yet the advanced discipline described in `devdocs/inquiries/2026-04-28_09-19__navigation_depth_and_answer_production/finding.md`.

The current process mostly does this:

```text
read outputs
-> assign movement types
-> generate guidelines
-> assess confidence
-> check excluded types
-> format map
```

That can produce a useful N1 map. It does not guarantee deep movement-space understanding.

The missing pieces are:

- non-obvious move exploration;
- blocker and gate sensemaking;
- dependency decomposition between moves;
- generation of new directions beyond taxonomy-derived ones;
- map critique for missing paths and shallow WHYs;
- graph awareness across multiple inquiry folders;
- selection and outcome tracking.

So the honest answer is: current Navigation is not advanced enough for meta-loop-grade traversal. It is the right starting structure, not the finished mechanism.

### 2. Advanced Navigation must be compute-aware

The project should not interpret "advanced Navigation" as "always run the deepest possible Navigation."

That would fail in practice. It would consume unnecessary compute, create artifact noise, and make Navigation feel too heavy to use.

The better concept is adaptive depth. Navigation should spend more reasoning only when the movement-space deserves it.

Good escalation triggers include:

- multiple plausible next moves;
- corrections or supersessions of prior inquiries;
- blockers or gates;
- strategic "what next?" questions from the user;
- inquiries that affect fundamentals;
- active meta-loop traversal;
- low confidence in a cheap map;
- many excluded directions;
- repeated correction chains.

This turns compute limits into a design feature. The system learns when shallow Navigation is enough and when deeper Navigation is justified.

### 3. A tiered Navigation ladder is the right shape

The best current ladder is:

```text
N0 Pointer
N1 Standard Map
N2 Deep Map
N3 Graph Map
N4 Sub-Inquiry Escalation
```

**N0 Pointer** is a minimal signal: Navigation is likely useful or not useful after a finding.

**N1 Standard Map** is current Navigation: taxonomy-based markdown map with WHYs, confidence, guidelines, excluded directions, and telemetry.

**N2 Deep Map** is the next real target. It adds the deeper internal work:

- position read;
- move-space exploration;
- blocker sensemaking;
- direction decomposition;
- direction generation;
- map critique;
- map output.

**N3 Graph Map** adds structured node/edge data so Navigation Maps can persist across runs and feed a UI or meta-loop memory.

**N4 Sub-Inquiry Escalation** lets Navigation spawn or request an MVL+ sub-inquiry only when a responsible map cannot be made without more information.

The immediate target should be N2. N3 should follow real maps. N4 should stay deferred.

### 4. Navigation Map can become a real innovation

The user's UI intuition points at something important.

A Navigation Map does not have to remain only a markdown list. Long-term, it can become a graph-native artifact: a representation of thinking space.

In that graph:

- inquiry folders are nodes;
- findings are nodes or node details;
- Navigation moves are edges;
- selected moves are marked edges;
- blockers are nodes or edge conditions;
- correction chains are edges;
- outcomes are edge or node annotations;
- confidence and evidence are metadata.

That would make Navigation Maps more than reading material. They become the substrate for meta-loop memory, selector training, and visual traversal.

This is potentially a distinct Homegrown innovation: not just prompting agents to reason, but externalizing their reasoning-space traversal as a durable graph.

### 5. The UI idea is good, but the first UI should be humble

A visual thinking-space UI is a good direction if it is treated as instrumentation.

It should help answer:

- Where has the project already thought?
- Which inquiries corrected older inquiries?
- Which branches are open?
- Which Navigation moves were proposed?
- Which move was selected?
- Which selected moves later worked?
- Which regions are blocked, stale, or repeatedly corrected?
- Where is the meta-loop currently moving?

That is not decoration. It can reduce human and agent context cost.

But a polished UI now would be premature. The project does not yet have enough real Navigation Maps, selected moves, outcomes, or graph data.

The first visual artifact should be generated and local:

```text
inquiry folders + _state.md + finding.md + navigation maps
-> graph data
-> static HTML graph or compact local viewer
```

The first UI should show:

- inquiry nodes;
- relationship edges;
- correction and refinement chains;
- Navigation move edges;
- selected paths;
- blocked/open/complete status;
- dates and confidence.

It should not require manual maintenance.

### 6. Build order matters

The recommended order is:

1. Fix current Navigation spec drift, including the 15-type versus 16-type mismatch.
2. Patch Navigation with N2 deep map-construction phases.
3. Run Navigation manually on at least five completed inquiries.
4. Review whether those maps contain blockers, non-obvious moves, excluded reasoning, and useful confidence.
5. Add minimal graph-friendly structured output.
6. Generate a static thinking-space graph from inquiry folders and Navigation outputs.
7. Use that graph to decide whether interactive UI is worth building.
8. Add a live meta-loop dashboard only after a sequential meta-loop produces real traversal traces.

This path keeps momentum without pretending the whole system is ready.

## Next Actions

### MUST

- **What:** Patch Navigation toward N2 deep map construction.
  **Who:** `homegrown/navigation/SKILL.md` and `homegrown/navigation/references/navigation.md`.
  **Gate:** Before adding automatic Navigation hooks, graph UI, or meta-loop dashboard.
  **Why:** Current Navigation is underpowered for the role being imagined.

- **What:** Keep Navigation depth adaptive.
  **Who:** Navigation spec.
  **Gate:** Any future edit that makes deep Navigation mandatory for every inquiry.
  **Why:** Prevents compute waste and artifact noise.

- **What:** Dogfood N2 Navigation on real completed inquiries.
  **Who:** Human user or agent when asked to navigate.
  **Gate:** At least five completed inquiries before graph schema or UI work.
  **Why:** Produces the evidence needed to avoid designing in the abstract.

- **What:** Keep UI downstream of data.
  **Who:** Future UI or graph work.
  **Gate:** Do not build a polished UI until real maps and a minimal graph schema exist.
  **Why:** Prevents visualizing weak or unstable structure.

### COULD

- **What:** Add a minimal `depth_mode` field to Navigation outputs.
  **Who:** Navigation spec.
  **Gate:** When N2 is patched.
  **Why:** Makes compute budget explicit.

- **What:** Add a graph sidecar after dogfooding.
  **Who:** Navigation or a future graph exporter.
  **Gate:** After five N2 Navigation Maps exist.
  **Why:** Enables static graph visualization without prose parsing.

- **What:** Build a generated static thinking-space graph.
  **Who:** Future implementation pass.
  **Gate:** After minimal graph data exists.
  **Why:** Gives the user and agents a low-maintenance view of inquiry terrain.

### DEFERRED

- **What:** Build polished interactive UI.
  **Gate:** After the static graph demonstrates real value in at least three navigation or review sessions.
  **Why if revived:** Interaction becomes worth the cost only after the static view proves that graph visibility changes decisions.

- **What:** Build live meta-loop dashboard.
  **Gate:** After a sequential meta-loop produces at least three traversal traces.
  **Why if revived:** Live dashboard needs real runner state.

- **What:** Add N4 sub-inquiry escalation.
  **Gate:** After five N2 Navigation Maps, and only if at least two maps cannot be responsibly produced without a sub-inquiry.
  **Why if revived:** Prevents recursive complexity before evidence shows it is needed.

- **What:** Add autonomous selector.
  **Gate:** After at least ten Navigation Maps with selected moves and later outcomes.
  **Why if revived:** Selector needs outcome evidence, not just confidence labels.

## Reasoning

Exploration found that current Navigation is a real but incomplete mechanism. It has taxonomy, confidence, guidelines, excluded reasoning, and telemetry. It does not yet enforce deep movement-space construction.

Exploration also found no `navigation.md` outputs under current inquiry folders. That means the project lacks real usage evidence. This is a practical blocker.

Sensemaking resolved the main ambiguity: advanced Navigation should be adaptive, not uniformly expensive. Under compute limits, depth must be triggered by uncertainty, risk, branching, correction, or strategic value.

Sensemaking also clarified the UI idea. A thinking-space UI is good if it is instrumentation over real artifacts. It is bad if it becomes a polished visualization before the data layer exists.

Decomposition separated Navigation quality from visualization. A UI cannot fix shallow maps. Graph data must sit between markdown maps and UI. Selection must remain separate from Navigation and UI.

Innovation produced the tiered ladder: N0 pointer, N1 standard map, N2 deep map, N3 graph map, and N4 sub-inquiry escalation. N2 is the next actionable target.

Innovation also produced the graph-native Navigation Map idea. That survived because it supports UI, meta-loop memory, selector training, and outcome tracking.

Critique killed the claim that current Navigation is already advanced enough. The existing process can format a structured map, but it does not guarantee deep understanding of movement-space.

Critique killed always-running deep Navigation. That ignores the user's compute constraint.

Critique killed immediate polished UI. It would precede stable data and make immature structure look mature.

Critique refined dogfooding. The project should not only dogfood the current underpowered Navigation. It should first add a small N2 depth patch, then dogfood.

The surviving answer is staged: deepen Navigation first, make maps graph-ready second, visualize third.

## Open Questions

### Monitoring

After five N2 Navigation Maps, check whether they include real blockers, non-obvious moves, excluded reasoning, confidence, and useful next inquiry seeds.

After the first static graph, check whether it helps the user or agent find relevant prior inquiries faster than folder search.

After three static graph uses, check whether the graph changes actual decisions, not only presentation.

### Blocked

The graph schema is blocked until several real Navigation Maps show what data needs to persist.

The live dashboard is blocked until sequential meta-loop traces exist.

The selector is blocked until selected moves and later outcomes are recorded.

### Research Frontiers

The main research frontier is whether visual thinking-space representations improve reasoning quality or only improve navigation convenience.

Another research frontier is whether Navigation confidence predicts useful next moves once enough outcomes exist.

### Refinement Triggers

Reopen this decision if N2 Navigation proves too expensive to run manually on five inquiries.

Reopen this decision if static graph generation cannot be done without brittle prose parsing.

Reopen this decision if the first five Navigation Maps are useful as prose but do not contain stable graph-shaped data.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 

A serious Navigation run should do internal work that resembles the pressures in MVL+:

Position read: Read the completed inquiry, goal, state, critique verdicts, telemetry, prior context, and optional reflection or diagnosis.
Move-space exploration: Enumerate obvious, boring, non-obvious, and contrarian next moves.
Blocker sensemaking: Understand gates, unresolved ambiguity, dependencies, and goal pressure.
Direction decomposition: Separate content moves, process moves, context moves, reachability, and prerequisites.
Direction generation: Create or refine non-obvious paths, not only taxonomy-derived paths.
Map critique: Check for premature filtering, action bias, recency bias, hidden selection, shallow WHYs, missing blockers, and missing excluded reasoning.
Map output: Produce a Navigation Map with evidence, confidence, guidelines, excluded directions, and telemetry.
This is not shallow. It is a disciplined movement-space analysis.


yes.... 

but current navigation is this advnaced ? we dont have unlimited compute , and there fore we shuold have advanced navigation


and what u call navigation map, it is can be completely new innovation from our side. maybe we can try to visualize thinking space in a UI, and how our loops are running there too. do you think this is good idea?
```

</details>
