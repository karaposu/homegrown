# Critique: Navigation Map Format And Guidelines Density

## User Input

Should Navigation map route records be reformatted into a more readable direction/goal card shape, and should Guidelines remain mandatory on every route or become adaptive to allow more direction coverage?

## Phase 0 - Dimensions and Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Readability | 5 | A human can scan many routes without parsing dense header syntax. |
| Route Completeness | 5 | Required continuation fields remain present and reliable. |
| Enumeration Coverage | 5 | The format does not crowd out meaningful routes. |
| Actionability | 4 | Routes that may be acted on still have enough guidance to proceed safely. |
| Boundary Safety | 4 | Navigation remains enumeration, not planning or automatic selection. |
| Feasibility | 4 | The change can be implemented as a spec/reference update without new tooling. |
| Elegance | 3 | The structure adds clarity without excessive ceremony. |

Critical dimensions: Readability, Route Completeness, Enumeration Coverage.

## Phase 1 - Fitness Landscape

### Viable Region

Solutions that improve scanability while preserving route-state fields and keeping Guidelines available at adaptive depth.

### Boundary Region

Solutions that improve readability but risk either losing actionability or adding too much output ceremony.

### Dead Region

Solutions that delete route-state fields, hide blocked/deferred routes, or require full Guidelines everywhere regardless of map size.

### Unexplored Region

Rendered UI/card tooling. This should remain unexplored until Markdown formatting is tested.

## Phase 2 and 3 - Candidate Verdicts

### Candidate A: Full Route Card As Default

**Prosecution:** It may make each route longer than the current compact format. If every route becomes a large card, map length can still be high.

**Defense:** The current compact format is only superficially short. It forces the reader to parse type, title, priority, status, and fields manually. A route card uses more vertical space but lowers cognitive cost and makes fields predictable.

**Collision:** Defense wins. The problem is not character count alone; it is scanability. Route cards preserve content and reduce parsing friction.

**Verdict:** SURVIVE.

**Constructive output:** Use route cards as the default Navigation map detail shape.

### Candidate B: Map Index Plus Detail Cards

**Prosecution:** Duplicates information and increases maintenance/output burden. For small maps, it may be unnecessary ceremony.

**Defense:** For large maps, an index lets users see the route landscape before reading details. It directly supports Navigation's enumeration purpose.

**Collision:** Both sides are valid. The candidate should be conditional.

**Verdict:** REFINE.

**Constructive output:** Use an index only for large maps, or when the user asks for a compact overview first. Suggested trigger: maps above 10 routes or when route cards exceed comfortable scan length.

### Candidate C: Compact Routes With No Guidelines

**Prosecution:** Strong on route count, weak on safe action. It may create shallow route records that are useful only as labels.

**Defense:** It maximizes enumeration and avoids premature advice.

**Collision:** Prosecution wins for default behavior. Navigation needs enough guidance for later materialization and safe follow-up. But an ultra-compact mode can survive as an explicit user-requested mode.

**Verdict:** KILL as default; DEFER as optional ultra-compact mode.

**Seed extracted:** A future `Navigation summary mode` could output only route index/state, but it must not replace canonical route maps.

### Candidate D: Adaptive Guidance Policy

**Prosecution:** Adaptive guidance can become inconsistent. Future agents may under-produce guidance and claim "compact mode" as an excuse.

**Defense:** Mandatory full guidance everywhere is too expensive and can reduce route coverage. Adaptive guidance can be made explicit with `Guidance mode` and telemetry.

**Collision:** Defense wins if telemetry tracks guidance allocation and if high/risky/selected routes get enough guidance.

**Verdict:** SURVIVE.

**Constructive output:** Add `Guidance mode: none | compact | full | expand-on-selection`. Default to compact. Require full guidance for selected routes and allow full guidance for high-risk or near-action routes.

### Candidate E: Telemetry Split

**Prosecution:** More telemetry can become bureaucratic. It might distract from the map.

**Defense:** Once guidance is adaptive, old telemetry that expects full Guidelines everywhere becomes wrong. The system needs to measure route coverage separately from guidance allocation.

**Collision:** Defense wins. Telemetry must match the new contract.

**Verdict:** SURVIVE.

**Constructive output:** Replace `Guideline depth: COMPLETE` with route coverage and guidance allocation metrics.

## Phase 3.5 - Assembly Check

### Assembly Candidate: Layered Navigation Map Contract

Combine:

- route card default;
- optional index for large maps;
- adaptive guidance modes;
- telemetry split.

**Prosecution:** The assembly adds more format rules and may make Navigation feel more procedural.

**Defense:** The rules mirror the actual reading layers: identity, state, meaning, guidance, memory. They reduce confusion without adding new conceptual machinery.

**Collision:** Defense wins. This is a presentation contract, not a new discipline or protocol.

**Verdict:** SURVIVE as ranked best answer.

## Phase 4 - Coverage and Convergence

### Coverage Map

- Readability: covered.
- Route completeness: covered.
- Guideline usefulness: covered.
- Route-count tradeoff: covered.
- Telemetry implications: covered.
- Optional large-map index: covered.

### Verdict Summary

| Candidate | Verdict | Rank |
|---|---|---:|
| Layered Navigation Map Contract | SURVIVE | 1 |
| Full Route Card As Default | SURVIVE | 2 |
| Adaptive Guidance Policy | SURVIVE | 3 |
| Telemetry Split | SURVIVE | 4 |
| Map Index Plus Detail Cards | REFINE | 5 |
| Compact Routes With No Guidelines | KILL as default | 6 |

### Killed

- Dense one-line header as canonical format.
- Mandatory 3-6 Guidelines on every route.
- Removing Guidelines entirely as default.
- Dropping routes to make room for advice.

## Signal

TERMINATE. The question is answered.

The output should be reformatted into readable route cards with separate Direction/Goal/Type/Status fields. Guidelines are useful, but they should become adaptive. They should not be removed entirely, and they should not remain mandatory at full depth for every route.

## Convergence Telemetry

- **Dimension coverage:** COMPLETE.
- **Adversarial strength:** STRONG.
- **Landscape stability:** STABLE.
- **Clean SURVIVE exists:** YES. Layered Navigation Map Contract.
- **Failure modes observed:** none.

Overall: PROCEED.
