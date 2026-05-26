# Branch: explore — project-end-goal-aware design

## Question

Given the project's end-goal definition (`README.md` + `enes/desc.md`) and the staged multi-resolution iteration pattern described for navigation in `devdocs/nav_north_star.md`, **what attributes must `/explore` have** — and how should it be designed — to (a) serve the project's MVL+ loop and the trajectory toward autonomous self-improvement, (b) explicitly support the staged for-loop pattern of mapping a territory at progressively finer resolutions, and (c) be cleanly distinguished from `/navigation`?

## Goal

A `/explore` redesign (or refinement on top of the iter-2 meaning-definition) that:

- Names the attributes `/explore` must have so that the **MVL+ loop and the project's Baldwin-cycle self-improvement trajectory** work as intended (per `README.md`'s ignition/loop framing and `enes/desc.md`'s autonomy ladder + Predictive RC substrate).
- Explicitly supports the **staged multi-resolution iteration pattern** that `nav_north_star.md` calls "whole-codebase navigation" but appears to actually be `/explore`'s territory (first pass surfaces ~10 high-level items; second pass drills each of those at finer resolution → ~50–100 nodes; third pass → ~200 nodes; for-loop over prior round's nodes).
- Maintains a **clean boundary against `/navigation`**, resolving whether `nav_north_star.md`'s staged-iteration pattern belongs to `/explore` or `/navigation` (the user's hypothesis is that it belongs to /explore).
- Preserves the iter-2 meaning-definition (*to explore = purposive open-mode surfacing*) and the iter-1 5-section skeleton + tiered evolution path; this inquiry adds the project-end-goal lens and the staged-iteration explicit support.

A good answer lets the user (i) understand which attributes are load-bearing for the project's trajectory, (ii) confirm or revise the staged-iteration belongs to `/explore`, and (iii) decide what edits to `references/explore.md` and `SKILL.md` follow from the prior iter-2 assembly + this inquiry's additions.

## Scope Check

**Question covers goal:** YES — the question asks (a) end-goal-relevant attributes, (b) staged-iteration support, (c) explore-vs-navigation boundary, which are the three goal components.

**Specific-vs-pattern check:** the staged 10→50–100→~200 nodes example is specific (from `nav_north_star.md`'s codebase-navigation context). The underlying pattern is "staged multi-resolution exploration that builds on prior outputs." Default applies: address the broader pattern; the specific example anchors the staged-iteration discussion but the inquiry's design should generalize beyond codebase-navigation.

## Operative constraints

1. **The iter-2 meaning-definition is inherited:** `/explore = purposive open-mode surfacing`. Iteration 2's finding (`finding.md` in the prior inquiry, REFINES `finding_iter1.md`) is the prior commitment. This inquiry does not re-derive that — it builds on it.

2. **The iter-1 5-section skeleton is inherited:** Identity / Components / Process / Quality / Output. This inquiry may add new attributes or sections but does not restructure the skeleton.

3. **The iter-2 tiered evolution path is inherited:** SK-STD+ × 3 + SK-MAX-1..4 + SK-MODE-DECLARED + SK-D + SK-B + SK-PERSISTENT remain as DEFERRED / RESEARCH FRONTIER items. This inquiry may activate them or add new items, but does not re-test the existing ones.

4. **`/navigation` is the comparator at the discipline level this iteration** (in addition to `/comprehend` from iter-2). The user's hypothesis to test: `nav_north_star.md`'s staged-iteration pattern actually belongs to `/explore`, not `/navigation`. If true, what edits clarify the boundary?

5. **Referenced input files:**
   - `/Users/ns/Desktop/projects/native/README.md` — project framing: thinking-engine, ignition + loop, disciplines as building blocks of autonomous loop.
   - `/Users/ns/Desktop/projects/native/enes/desc.md` — north-star: autonomy ladder, Baldwin cycles, Predictive RC substrate, observable indicators.
   - `/Users/ns/Desktop/projects/native/devdocs/nav_north_star.md` — staged for-loop pattern, whole-codebase vs directional modes, composable local artifacts.

## Working hypotheses (to be tested)

- **H1:** `nav_north_star.md`'s "whole-codebase navigation" is properly `/explore` territory. `/explore` surfaces the map; `/navigation` (in its iter-1-and-earlier sense) enumerates next moves from an already-surfaced map.
- **H2:** The staged for-loop pattern (first pass = 10 items → second pass = 50–100 nodes → third pass = ~200) is a NATURAL execution mode of `/explore`'s resolution-management component, made explicit. It is not a new mode; it is an explicit-staging refinement of the existing cycle structure.
- **H3:** Project-end-goal-relevant attributes for `/explore` include: composable outputs (local maps merge into bigger maps); telemetry that supports Baldwin-cycle calibration; runnable at Level 0 (manual trigger) with a clear path to higher autonomy levels (autonomous staging, autonomous resolution-selection); produces output that downstream `/intuit` (Predictive RC) can compose.
- **H4:** `nav_north_star.md`'s "directional navigation" (pointing at source files, exploring around them, producing local artifacts) may also be `/explore` territory at a different scope — the resolution is just smaller and the territory is named (signal-first entry to the iter-2 meaning).
