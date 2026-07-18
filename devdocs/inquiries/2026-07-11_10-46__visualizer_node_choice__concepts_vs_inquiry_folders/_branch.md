# Branch: visualizer node-choice — concepts vs inquiry folders

## Source Input
[The user's raw request, preserved verbatim. Also lives in articulate_simple.md's `## User Input` section; both copies are authoritative for transcription audit.]

```text
i am thinking using below like visualizer for homegrown project.  but there is something i cant decide

the nodes should be concepts? if yes then inquiry folder files can be used as a source to generate concept list and subconcepts and we can visualize them 
or lets make these nodes inquiry folders, it will be native to how project persists, no need for weird concept creation logic which is a challange, 

so what do you think ? are there any alternatives?
```

[ATTACHED: "Atlas Nodemap Explorer" — a ~700-line React + three.js component on dummy data. View 1 = 3D nodemap (root + modules + subnodes; orbit/zoom; click = fly-to; double-click = detail). View 2 = node detail (kind badge · title · Created · "Last worked on" with subnode roll-up via `effLast()` · subnode list · parent link | a rendered markdown body per node). Node data contract: `{ id, kind: root|module|sub, title, parentId, childIds[], pos[3], createdAt, lastWorkedAt, md }`; edges = parent→child lines only; strict 3-level tree; every node needs a markdown body. Full source preserved in the /traverse invocation record; dummy-data builder + CSS omitted as non-load-bearing (stated extraction, not a silent drop).]

## Articulation Reference

- **File:** `devdocs/inquiries/2026-07-11_10-46__visualizer_node_choice__concepts_vs_inquiry_folders/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** item-1
- **Verdict:** HIGH-PROCEED
- **Flagged conditions:** none

## Question

**Item 1 (literal-statement):** "I'm thinking of using the attached Atlas-style 3D nodemap visualizer for the homegrown project, but I can't decide: should the nodes be concepts — with inquiry folder files used as the source to generate a concept list and subconcepts — or should the nodes be the inquiry folders themselves, which is native to how the project persists and avoids concept-creation logic, which is a challenge? What do you think? Are there any alternatives?"

**What kinds of ask this carries (MQ1, preserved as ambiguities):** an `advice-verdict` (recommend between the two) · an `alternative-enumeration` (widen beyond the binary) · a `feasibility-assessment` (is concept-generation really that costly?) · a `contract-mapping` (how would each option concretely feed the component's node data contract).

**Plausible action-endpoints (MQ3, preserved):** `pick-and-build` (settle it so wiring to real data can start) · `map-the-option-space` (see alternatives before committing) · `validate-the-lean` (the statement leans folder-native; stress-test that lean).

## Goal

**Deconstruct tuple:** (deliverable: a design recommendation + an enumerated option-field — advisory analysis, no build requested; kinds: assessment prose + alternatives list + a concrete mapping of each candidate node-unit onto the component's data contract; bounds: the node-unit choice for THIS visualizer over THIS project's persistence layer — not a component rewrite, not general knowledge-graph theory).

**WHY-axis motivations a good answer might serve (preserved as ambiguities):** `orientation/navigation` (see the territory to move in it — the project's open "navigational session" need) · `monitoring/health` (recency/staleness surveillance — a record-health instrument) · `comprehension/knowledge-view` (see what the project thinks about, not just where work happened) · `enjoyment/presentation` (a beautiful artifact of one's own project).

**Context the answer needs that isn't in the statement (MQ2, preserved):**
- *verdict:* what inquiry folders ACTUALLY offer as node data (ids, parseable timestamps, md bodies, relationship links); whether concept-grade artifacts ALREADY exist in the project (`_route.md` concept-maps, `_seed.md`, docs/canon); the corpus's real scale + edge-density (countable in-repo).
- *kinds:* candidate node-unit kinds — inquiry folders / extracted concepts / seeds / canon docs / thread-chains / mixed.
- *stance:* throwaway prototype vs standing instrument (a standing between-loop support falls under the suspicion-principle / designed-or-dead evidence); read-only derived view vs maintained artifact.

**What would explicitly fail (MQ4, preserved):** treating "weird concept creation logic" as settled either way — its status (hard exclusion vs weighted con) is itself ambiguous and the answer must respect the flagged aversion; likewise ambiguous whether the component is fixed (only the data source open) or adaptable (its strict tree / parent→child-only edges modifiable).

## Considered Articulations

**Item item-1 — the node-unit decision:**
1. "Recommend which node-unit — extracted concepts or inquiry folders — best feeds the attached nodemap's data contract `{id, kind, title, parent/children, createdAt, lastWorkedAt, md}`, and say why."
2. "Enumerate the full option-field of node-units the project's persistence already offers (inquiry folders, extracted concepts, seeds, canon docs, thread-chains), with the cost each carries, then give a ranked opinion."
3. "Stress-test the folder-native lean: confirm or refute that concept-generation can be avoided without losing what makes the map worth having."
4. "Map each candidate node-unit onto the component's contract: which fields come free from existing files, which must be generated, and what fills the demo's 'module' middle level over a flat pile of inquiry folders."
5. "Decide by purpose first — what the map is FOR (navigation vs record-health vs knowledge-view) — and derive the node-unit from the purpose rather than from data convenience."

## Scope Check

Question covers goal. The Deconstruct bounds (this visualizer × this project's persistence) contain everything the Goal asks for; the MQ4 aversion-flag and component-fixedness ambiguity are carried in Goal.

**Specific-vs-pattern check:** the question points at a specific artifact (the attached component). The broader pattern would be "how should this project be visualized at all." The user explicitly anchored on "using below like visualizer" — so the inquiry addresses the node-unit decision FOR this component's shape, while permitting the answer to note where the component's shape itself (strict tree, 3 levels) fights the data — that boundary-note falls inside `contract-mapping`, not outside scope.
