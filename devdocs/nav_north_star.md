# Navigation — North Star

This document captures the vision for how `/navigation` should run. It is a rephrasing of `devdocs/nav_should_be.md` — same intent, clearer structure.

Navigation has two ways to run: **whole-codebase** (no specific direction; survey the entire territory) and **directional** (point at source files; explore around them). Both run the same underlying logic; they differ in scope and in what they produce.

---

## 1. Whole-codebase navigation (no specific direction)

The user runs `/navigation` on the codebase without specifying any direction. The output is a map of the directions of work that exist in the codebase — what is being discovered, what is being explored, what is being chased.

### Output shape

The map is a set of **nodes** representing directions. Each node is a direction of work, not a precisely-defined concept. Directions are vague by nature; nodes are the right shape because the alternatives (precisely-bounded concepts; quantifiable areas) aren't really feasible at this level of analysis.

Nodes do not need to be sized differently. Same-size nodes are fine — we don't need to quantify "how big" a concept is. What matters is that the nodes capture the *directions* the work actually has.

### Concrete examples of directions

- How to run loops
- How to handle errors in loop outputs
- How to handle ambiguous loop ends (when a loop completes but the answer isn't clean)
- How to create disciplines / find new disciplines
- How to improve existing disciplines
- How to diagnose problems within a discipline

These are the kinds of directions a whole-codebase navigation run should surface.

### Staged iteration (the for-loop structure)

A single whole-codebase navigation run is heavy — it has to enumerate the codebase. LLMs are not good at producing one huge accurate output. The solution is to stage the work into iterations, using a for-loop-like structure:

- **First run** produces the big concepts in the codebase. Say it surfaces 10 high-level directions.
- **Second run** takes each of those 10 big concepts and discovers the smaller concepts around it. For each big concept, second-run navigation might find 5-10 sub-concepts. Total after the second round: maybe 50-100 nodes at finer resolution.
- **Third run** does the same one resolution deeper. Total might grow to ~200 nodes.

This is heavy in absolute work but achievable because each individual navigation call is bounded. The structure is "loop over the prior round's nodes; run a new navigation on each one."

### Manual-trigger v1 is acceptable

In the first version, the user is the one who triggers each navigation run, one by one. That is inefficient — there is no automatic orchestrator chaining the rounds. **That is fine for v1.** The point is that we need navigation for our work; the inefficiency is acceptable while we are building the capability. Once the artifacts and runs exist, we can improve both the codebase and the navigation discipline itself to make the chaining more efficient over time.

---

## 2. Directional navigation (point at source files)

The user is working on something specific. They want to know what to do next, what's around the area they're working in. They point `/navigation` at the relevant source files and run a directional query.

### Output shape

The output is an **update** — but local, not modifying the whole-codebase navigation map. Directional navigation creates local artifact files (markdown). It does not edit the big codebase-level navigation file.

The local artifact applies the same underlying logic as whole-codebase navigation, scoped to the area being explored:

- Find the concepts around the area
- Categorize them
- For each concept, record its status: how much it has been considered, how much it has been worked on, whether it is blocking other work, and any of the other usual fields we already understand (the 12-16 categories from prior work)

### Local artifacts may later contribute to the big map

The local artifact files can later be merged into the whole-codebase navigation map — that is a separate process and not the current concern. The directional run is complete on its own; the merge is opportunistic.

---

## How resolution emerges

Running navigation toward a direction produces a local map. The user picks a sub-concept from that map, works on it, and runs another navigation on that sub-concept. Each iteration creates **resolution** — it kills ambiguity about what exists in that part of the territory. The map progressively enlightens.

The more navigation runs accumulate, the more the territory settles. Local artifacts can be combined to form bigger navigation maps when they are mergeable — point an LLM at two related artifacts and have them merged into one larger map. Composition is straightforward when the artifacts share enough structural overlap.

---

## Future UI vision

Imagine navigation as a visualizable map. The user opens a UI showing the current nodes. They click on a part of the map and type "dive into this part" or "go this direction." The system then advances the work in that direction — it runs the broader MVL loops to do the actual thinking work, with `/navigation` running after them (or alongside) to map the new territory that the work surfaces. Creation and mapping happen together: the MVL loops create results in the chosen direction; navigation maps what the loops touch as they go.

The user traverses the thinking space through the UI without directly touching the codebase. Input is "go this direction" or "let's go here"; the system does the work underneath and updates the map as the work proceeds. The UI lets the user navigate by intent — the loops are doing real work below, not just deepening discovery.

---

## What this means for current work

The first thing to solve is **how whole-codebase navigation runs** (Section 1 above) — the staged for-loop structure with manual triggering for v1. The directional case (Section 2) and the future UI (above) build on top of that foundation. Get the whole-codebase staged-iteration model right; the rest follows.
