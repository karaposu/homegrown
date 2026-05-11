# Sensemaking: Navigation Map Format And Guidelines Density

## User Input

Should Navigation map route records be reformatted into a more readable direction/goal card shape, and should Guidelines remain mandatory on every route or become adaptive to allow more direction coverage?

## SV1 - Baseline Understanding

The current Navigation output is structurally good but visually dense. The user's proposed direction/goal layout points to a real usability problem: route records need to be more scannable. Guidelines are useful, but mandatory full Guidelines may consume too much output budget and reduce route coverage.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Navigation must enumerate route space, not choose one route.
- Route records must preserve Purpose, Movement, Status, Blocked by, Unlocks, WHY, and Continuation note.
- Blocked and deferred routes must remain visible.
- The output must be usable by a human scanning many directions.
- The map must remain useful as future continuation memory.

### Key Insights

- Semantic completeness is not the same as readability.
- The current one-line header hides too many concepts in a single visual unit.
- Direction, goal, type, priority, and status are different concepts and should not all compete in one line.
- Guidelines are valuable mainly near action, not equally across all route states.
- Removing Guidelines entirely would make maps more compact but less actionable and less safe.

### Structural Points

- Route identity should come before route state.
- Route state should be a compact, predictable block.
- Reasoning should be separate from guidance.
- Guidance should be depth-adaptive.
- Continuation note should remain because it is the durable memory field.

### Foundational Principles

- Navigation's first duty is complete route enumeration.
- Detail should not crowd out the route space.
- The artifact should support two reading modes: fast scan first, deeper reading second.
- Advice should scale with route importance, risk, and proximity to action.

### Meaning-Nodes

- Scanability.
- Direction/goal separation.
- Output budget.
- Adaptive detail.
- Continuation memory.
- Actionability.

## SV2 - Anchor-Informed Understanding

The issue is not that Navigation outputs too much information in general. The issue is that the information is not layered. The top layer should let the user scan directions quickly. The second layer should show state and evidence. The third layer should give guidance only where guidance is worth the space.

## Phase 2 - Perspective Checking

### Technical / Logical

The current route record has all required fields, but the header has overloaded syntax. A parser could handle it, but a human reader has to mentally split type, title, confidence, and status. A card layout would reduce parsing cost without losing fields.

### Human / User

The user's proposed structure is more readable because it makes the route's identity and goal explicit. It also avoids the "wall of route prose" effect. If every route has long Guidelines, the user may stop reading before seeing the full route space.

### Strategic / Long-Term

Navigation maps will become more important as continuation memory. If the format is hard to scan now with 13 routes, it will be worse after multiple maps accumulate. A layered format is a long-term requirement, not polish.

### Risk / Failure

If Guidelines are removed entirely, future agents may preserve many route names but lose important constraints about how to approach risky routes. If Guidelines remain full-depth on every route, maps may become too large and hide the route landscape under advice.

### Resource / Feasibility

Changing the output format is cheap: it is mostly a reference/spec patch. A full route graph engine is unnecessary. Adaptive Guidelines can be specified as output rules without new tooling.

### Definitional / Consistency

Navigation is defined as enumeration with route-state-aware reasoning and guidelines. That means Guidelines cannot be deleted from the concept entirely. But the definition does not require full-depth guidance for every route regardless of importance. The current "3-6 guidelines per route" rule is a policy choice, not an essence of Navigation.

## SV3 - Multi-Perspective Understanding

The stable framing is: make the route record format more layered and make Guidelines adaptive. The card-like format solves scanability. Adaptive Guidelines preserve actionability while allowing broader direction coverage.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Is the problem formatting or content volume?

**Strongest counter-interpretation:** The output is too large because it includes too many fields; formatting is only a surface symptom.

**Why the counter-interpretation fails:** The required fields each serve continuation memory: purpose, movement, status, blockers, unlocks, evidence, and continuation note. The problem appears when those fields are presented without enough visual hierarchy. Removing fields would damage the route contract.

**Confidence:** HIGH.

**Resolution:** The main problem is presentation hierarchy, not excessive required route-state content.

**What is now fixed?** Keep the route-state fields.

**What is no longer allowed?** Solving readability by deleting Purpose, Movement, Status, Blocked by, Unlocks, WHY, or Continuation note.

**What now depends on this choice?** Future format should reorganize fields, not weaken the route record.

**What changed in the conceptual model?** The map needs a layered card format.

### Ambiguity: Should Guidelines be removed?

**Strongest counter-interpretation:** Yes. Removing Guidelines would let Navigation output more directions and avoid premature advice.

**Why the counter-interpretation fails:** Guidelines carry approach constraints and risk warnings, especially for high-risk, blocked, or near-action routes. Removing them entirely would make maps less actionable and weaker for materialization. But the counter succeeds against mandatory full-depth Guidelines on every route.

**Confidence:** HIGH.

**Resolution:** Guidelines should remain, but become adaptive in depth.

**What is now fixed?** Full Guidelines should not be mandatory for every route.

**What is no longer allowed?** Treating "no Guidelines" and "3-6 Guidelines everywhere" as the only options.

**What now depends on this choice?** Navigation needs guidance modes or per-route guideline depth rules.

**What changed in the conceptual model?** Guidelines become a budgeted layer, not a universal block of equal size.

### Ambiguity: Should the map optimize for more routes or better route guidance?

**Strongest counter-interpretation:** Better guidance is more important; a small number of well-guided routes is more useful than many shallow routes.

**Why the counter-interpretation fails:** Navigation's distinctive value is complete route enumeration. If guidance crowds out routes, Navigation starts behaving like planning or recommendation. The right answer is not shallow routes; it is broad route records with expandable/adaptive guidance.

**Confidence:** HIGH.

**Resolution:** Prefer route coverage first, then add guidance according to route importance and action proximity.

**What is now fixed?** Enumeration has priority over full advice depth.

**What is no longer allowed?** Letting Guidelines reduce route-space coverage.

**What now depends on this choice?** Telemetry should distinguish route coverage from guideline depth.

**What changed in the conceptual model?** Navigation output has a primary layer and optional/detail layers.

## SV4 - Clarified Understanding

The route-map contract should be refined, not replaced. Use a readable route card shape with explicit Direction and Goal. Keep all route-state fields. Make Guidelines adaptive: compact or omitted for low/deferred routes, fuller for high/risky/blocked/near-action routes, and expandable on demand for selected routes.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- Direction and Goal should be separated.
- Type should be a field/tag, not hidden in the title line.
- Status, priority, and blocked state should be easy to scan.
- Guidelines should stay in the system but become adaptive.
- Route coverage is more important than full guidance on every route.

### Eliminated

- Keeping the current dense header as the canonical shape.
- Removing Guidelines entirely.
- Keeping mandatory 3-6 Guidelines for every included route.
- Solving this by reducing route count.

### Viable Paths

- Card format with compact route-state block.
- Two-tier output: Map Summary + Detail Records.
- Guidance mode: none / compact / full.
- Default compact Guidelines, full Guidelines for high or selected routes.

## SV5 - Constrained Understanding

The preferred direction is a layered route record:

```text
### Route 1: Materialize post-v3 Navigation continuation handoff
Goal: durable continuation memory after warm-up
Type: DEVELOP
Priority: HIGH
Status: active

Purpose: ...
Movement: ...
Blocked by: ...
Unlocks: ...
Why this route exists: ...
Guidance: compact | full | on request
Continuation note: ...
```

This shape preserves the route contract while improving scanability and output-budget control.

## Phase 5 - Conceptual Stabilization

Navigation should produce route records in a reader-first hierarchy:

1. identity: route name and goal;
2. classification: type, priority, status;
3. route state: purpose, movement, blocker, unlocks;
4. evidence: why the route exists;
5. guidance: adaptive depth;
6. memory: continuation note.

## SV6 - Stabilized Model

The user's instinct is correct. The current Navigation map has the right content but the wrong visual hierarchy. It should move to a route-card format that separates direction, goal, type, priority, and status. Guidelines should not be removed; they should become adaptive so Navigation can preserve broad route coverage while still giving enough advice for high-value, risky, blocked, or selected routes.

Compared with SV1, the final model is sharper: this is not a choice between rich maps and short maps. It is a layering problem. Navigation needs compact route enumeration first and expandable/action-proximate guidance second.

## Telemetry

- **Perspective saturation:** HIGH. Technical, human, strategic, risk, feasibility, and definitional perspectives converged.
- **Ambiguity resolution ratio:** 3/3 resolved.
- **SV delta:** HIGH. The model moved from "format plus maybe remove Guidelines" to a layered route-record contract with adaptive guidance.
- **Anchor diversity:** HIGH.

Overall: PROCEED.
