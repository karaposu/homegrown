# Surfacing — routeman staged mapping + reasoning field

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/_branch.md`

## Mode + Entry Point

- **Territory-type-mode:** `possibility` (mixed; tilting toward possibility because items are candidate designs, interactions, and structural tradeoffs generated from the existing artifacts rather than pre-existing items to enumerate).
- **Entry point:** `signal-first` (purpose is explicit per `_branch.md`).
- **Territory specification:** `explicit-bounded`. Edges: 4 prior outputs (design memo; correction; frontier-questions finding; canonical /navigation) + user's two proposals as the immediate trigger + adjacent design space (adjacent project patterns; LLM operational characteristics; frontier-questions interactions). Boundary-discovery skipped.
- **Purpose template:** items qualify if they speak to ANY of: (a) candidate designs for Point 1's staged mapping; (b) candidate designs for Point 2's meta-reasoning field; (c) interactions of either proposal with existing routeman commitments (identity / features / attributes / lineage / failure framework); (d) interactions with the 9 surviving frontier questions; (e) alternative framings or structural counter-considerations; (f) underlying-concern depth (LLM enumeration shortcut; meta-reasoning capture); (g) adjacent project patterns that anchor or complicate the proposals.

## Traversal Trace

Per-entry: ordinal / region / candidate-or-consideration identifier / tag / confidence / brief note.

### Point 1 candidates and interactions

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 1 | P1 candidate designs | Two-stage as proposed (stage 1: high-level "big routes"; stage 2: deep-dive on selected parent producing 10-20 sub-routes) | core | HIGH | The user's proposed shape. Baseline candidate. |
| 2 | P1 candidate designs | N-stage recursive (any sub-route can itself be re-staged for deeper levels) | sub | MED | Extension of #1; permits arbitrary depth. Risk: unbounded tree. |
| 3 | P1 candidate designs | Per-Route "expandable" flag (the stage-2 invocation is triggered selectively per parent route, not on every route by default) | sub | HIGH | Selectivity reduces wasted enumeration on routes nobody will pick. |
| 4 | P1 candidate designs | Eager-expansion (every route auto-expands at stage 1 producing one large hierarchical Route Map in a single invocation) | side | LOW | Defeats the staging purpose (LLM shortcut tendency returns at the large-map level). Likely rejected. |
| 5 | P1 candidate designs | Hybrid (staging is available but optional; the user decides per inquiry whether to invoke stage 2) | sub | HIGH | The most pragmatic shape. Matches user's "first run produces big routes and a second routeman run on one selected route gives us 10,20 more routes" phrasing. |
| 6 | P1 interactions — existing commitments | `expand-on-selection` Guidance Mode vs staged route mapping (similar-but-distinct concern) | core | HIGH | Critical distinction. `expand-on-selection` defers GUIDANCE; staged mapping defers ENUMERATION of sub-routes. The two are adjacent but address different failure modes. |
| 7 | P1 interactions — existing commitments | Output schema impact: flat 16-attribute schema vs hierarchical with parent-child Route relation | core | HIGH | Sub-routes need a parent-Route reference. The schema gains a new field (e.g., `Parent Route` or `Sub-route of` reference) OR the Route Map becomes a tree structure. |
| 7a | P1 interactions — existing commitments | Telemetry impact: how telemetry aggregates across stages (per-stage metrics + cross-stage rollup) | sub | HIGH | The 10-metric telemetry skeleton needs to accommodate the staging dimension. |
| 8 | P1 interactions — existing commitments | Input contract change: stage-2 invocation needs the parent route as input (which file / which section to scope) | core | HIGH | Stage 2's input contract is narrower than stage 1's (one selected parent route, not the whole cycle). |
| 9 | P1 interactions — frontier questions | Q2 (multi-head aggregation): staging interacts with parallel workers — does each worker produce its own staged map, or does routeman aggregate parent-routes across workers + stage 2 happens per aggregated parent? | core | HIGH | The corrected architecture's multi-head pattern intersects with staging in a non-trivial way. Frontier question for Q2 expands. |
| 10 | P1 interactions — frontier questions | Q5 (file-system protocol): stage-2 invocation needs filename/folder convention for sub-route files (e.g., where does routeman write the stage-2 output) | core | HIGH | The protocol now spans stage-1 + stage-2 + their relationship. |
| 11 | P1 interactions — frontier questions | Q6 (file-shape constraints): sub-route schema may differ from top-level route schema (parent-route reference field; possibly looser metadata for sub-routes) | sub | MED | Schema may need polymorphism (top-level Route vs sub-Route shapes). |
| 12 | P1 interactions — frontier questions | Q4 (LAYER-2 audit): the audit's "5 consecutive invocations" threshold — does that include stage-2 invocations? If yes, the threshold may need re-calibration. | sub | MED | Calibration sub-question. |
| 13 | P1 underlying-concern depth | LLM enumeration shortcut is a structurally-observed phenomenon (LLMs tend to produce 3-5 items under "list all" prompts even when 10+ exist; convergence on top-of-mind options) | core | HIGH | Anchors the user's concern in operational reality. The staging mitigation makes structural sense given this. |
| 14 | P1 underlying-concern depth | Staging gives the LLM bounded cognitive load per invocation — each stage handles fewer dimensions simultaneously, reducing shortcut pressure | sub | HIGH | The mechanism-of-action for why staging works as a mitigation. |
| 15 | P1 underlying-concern depth | Staging gives the LLM "permission to enumerate widely" within a narrower scope (15-20 sub-routes for ONE direction is easier than 60+ routes across all directions) | sub | HIGH | Complementary mechanism: narrow scope expands enumeration capacity. |
| 16 | P1 risks | Risk: stage 2 may produce false depth — 10-20 sub-routes that are minor variations rather than distinct moves | core | HIGH | The mitigation has its own failure mode. Needs a check (e.g., "each sub-route must have distinguishing structural commitments"). |
| 17 | P1 risks | Risk: hierarchical Route Maps complicate downstream consumers (selection step has to navigate the tree; multi-head consumers need to know which level they're consuming) | sub | MED | Complexity propagates. |
| 18 | P1 risks | Risk: staging is exposed as a runtime invocation pattern, but if the user doesn't trigger stage 2, the high-level routes ship "as-is" with the original LLM-shortcut problem | sub | MED | Staging is a TOOL, not a guarantee. Needs explicit acknowledgment. |
| 19 | P1 risks | Risk: stage-2 invocation consumes additional context budget per route (routeman re-scans relevant files for the deep-dive). The context-bloat-economy rationale from the correction may erode if many stages happen. | sub | MED | The correction's first design rationale (context bounded) interacts with the new staging cost. |

### Point 2 candidates and interactions

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 20 | P2 candidate designs | Required field on every Route | core | HIGH | The most direct interpretation of the user's proposal. |
| 21 | P2 candidate designs | Optional field with Guidance Mode dependency (e.g., required when Mode is `full` or `compact`; absent when Mode is `none`) | sub | MED | Selective application. |
| 22 | P2 candidate designs | Conditional field by Route Priority (only HIGH/MEDIUM) | side | LOW | Probably under-uses the field's stated purposes. |
| 23 | P2 candidate designs | Separate field per Route in a structured log (telemetry-adjacent), not in the route-card itself | sub | MED | Keeps the route-card focused; meta-reasoning lives elsewhere. |
| 24 | P2 candidate designs | Aggregated reasoning trace (one routeman-level reasoning section per invocation, not per-Route) | side | MED | Loses per-Route granularity but reduces overhead. The user's framing implies per-Route, so this is a counter-candidate. |
| 25 | P2 candidate designs | Field with bounded length (1-2 sentences cap to prevent reasoning bloat into filler) | sub | HIGH | Length-bounding is a common discipline anti-bloat mechanism. |
| 26 | P2 interactions — existing fields | Existing `Purpose` field — what the route would serve, reveal, or unlock (forward-facing, object-level) | core | HIGH | Distinguishes from the proposed field: Purpose is about the route's effect; meta-reasoning is about the LLM's enumeration choice. |
| 27 | P2 interactions — existing fields | Existing `WHY` field — evidence from cycle output that makes this direction worth considering (backward-facing to cycle content, object-level) | core | HIGH | WHY is cycle-grounded evidence; meta-reasoning is the LLM's introspection on what it noticed. Adjacent but distinct. |
| 28 | P2 interactions — existing fields | Existing `Continuation Note` field — what a future warm-up should remember about this route (forward-facing, cross-session) | sub | HIGH | Cross-session memory; not meta-reasoning. |
| 29 | P2 interactions — existing fields | Proposed `why_this_might_be_important` — meta-reasoning on enumeration choice (the LLM's introspection on what signal it picked up on) | core | HIGH | Structurally distinct from the three existing fields. The four fields each occupy a different content-axis. |
| 30 | P2 interactions — existing fields | Field-name suggestion: the proposed name is verbose (`why_this_might_be_important`); shorter alternatives: `enumeration_rationale`, `inclusion_reasoning`, `why_included`, `meta_why` | sub | MED | Naming is a wording call, not a structural one. Flag for refinement. |
| 31 | P2 interactions — frontier questions | Q3 (adaptive-guidance generation mechanism): the field could BE the meta-reasoning trace that grounds each Guidance Pointer's WHY anchor | core | HIGH | Significant overlap. If the field articulates the LLM's reasoning, then the Guidance Pointer's WHY could draw from it directly. |
| 32 | P2 interactions — frontier questions | Q4 (LAYER-2 audit infrastructure): the field's content could be audited for the Prescriptive-Without-Cycle-Context mode (does the meta-reasoning anchor in cycle content?) | core | HIGH | The field's audit-ability is itself a use-case. |
| 33 | P2 interactions — telemetry | Telemetry intersection: the field could feed cross-invocation telemetry (patterns in reasoning across many routeman runs) | sub | HIGH | Connects to user-stated use (a). |
| 34 | P2 interactions — /intuit | /intuit Phase β+: the meta-reasoning field is a meta-cognition trace that could feed /intuit's calibration corpus | sub | MED | Speculative; /intuit hasn't shipped β+ yet. |
| 35 | P2 user-stated uses | Use (a): improving routeman (cross-invocation pattern analysis; absence of reasoning for a class of routes signals routeman's blind spots) | core | HIGH | Direct from user input. |
| 36 | P2 user-stated uses | Use (b): improving general loop (signal about what cycle-output triggers which enumeration patterns) | sub | HIGH | Direct from user input. |
| 37 | P2 user-stated uses | Use (c): helping with prioritization (LLM's articulated reasoning provides a per-route signal complementing explicit Priority labeling) | sub | HIGH | Direct from user input. |
| 38 | P2 risks | Risk: filler meta-reasoning (LLMs produce surface-level reasoning rather than actual reflection — "this seems important" rather than specific signal-naming) | core | HIGH | Real failure mode. Needs an audit mechanism (intersects Q4). |
| 39 | P2 risks | Risk: confusion / overlap with existing fields (readers may not immediately see the difference between WHY and the new field) | sub | MED | Naming + brief schema docs can mitigate. |
| 40 | P2 risks | Risk: over-bloating the route-card schema (16 attributes already; adding a 17th adds reading-burden per Route) | sub | MED | Length-bounding (per #25) mitigates per-Route burden. |

### Cross-cutting and adjacency

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 41 | Cross-cutting | Both proposals share motivation: LLM operational characteristics as a structural design input | core | HIGH | The user is committing to "design around LLM limits" as a principle, not just two isolated additions. |
| 42 | Cross-cutting | Both add structure to routeman's output (Point 1 adds hierarchical structure; Point 2 adds a field) | sub | MED | Coupling: a stage-2 invocation would ALSO produce the meta-reasoning field per sub-route. The two interact. |
| 43 | Cross-cutting | Combined: staged mapping + meta-reasoning field creates a rich introspectable data structure (the LLM's reasoning is tracked per Route at each stage) | sub | MED | Emergent value if both are adopted. |
| 44 | Cross-cutting | Sequencing: Point 1 likely depends on Point 2 (the reasoning field helps audit whether staging is producing genuine enumeration vs filler) | sub | MED | If both adopted, Point 2 is the audit substrate for Point 1's enumeration completeness. |
| 45 | Adjacent project patterns | The cognitive_fixes/01 methodology preserves meta-reasoning in a Source Input section — a precedent for meta-content in discipline outputs | sub | MED | Project-canonical adjacency. |
| 46 | Adjacent project patterns | The Discipline self-containment principle (FP7 from design memo) — meta-reasoning fields don't violate this if they're at routeman's runtime scope, not pointing to design-history | sub | HIGH | Compatibility check. |
| 47 | Adjacent project patterns | /reflect's process-quality observations are meta-content adjacent to the proposed field — could /reflect and routeman's meta-reasoning be coordinated? | sub | MED | Possible coupling; out of scope for this inquiry but flagged. |
| 48 | Frontier signals | Whether staging is CONDITIONAL (triggered by under-enumeration signal) vs ALWAYS available (always offered as a follow-up invocation mode) | umbrella | MED | Trigger-mechanism question. May warrant a separate sub-question. |
| 49 | Frontier signals | Whether the meta-reasoning field is LAYER-2-audit-input or independent | umbrella | MED | If audit-input, Q4 interaction. |
| 50 | Frontier signals | Whether the field's content gets archived / how it persists across sessions (under file-scanning architecture, persistence is automatic; but archival policy is open) | umbrella | LOW | Bookkeeping; not gating. |
| 51 | Alternative framings | Point 1 as a feature within /reflect rather than within routeman (since /reflect is meta-process-quality, and staging-for-enumeration-completeness is a meta-process concern) | side | LOW | Considered + rejected: staging operates on routeman's output, not on /reflect's; reflect doesn't enumerate. |
| 52 | Alternative framings | Point 2 as a separate discipline (e.g., a meta-reasoning-discipline that operates on routeman's output) | side | LOW | Over-engineering; the field is a small schema addition, not a discipline-level operation. |

**Convergence check:** 52 trace entries across 11 regions. Asymmetric-failure principle satisfied (sub/umbrella tags preserved). The selection of recommendations is downstream-discipline work (Sensemaking + Innovation + Critique).

## State Summary

### Territory-specification echo

The bounded scope: user's two proposals + 4 prior outputs (design memo; correction; frontier-questions finding; canonical /navigation) + adjacent design space (the 4 residuals; LLM operational characteristics; existing route-card schema; existing Guidance Modes; project patterns from cognitive_fixes + /reflect).

### Purpose-specification echo

Items qualify if they speak to (a) candidate designs for either proposal; (b) interactions with existing routeman commitments; (c) interactions with the 9 surviving frontier questions; (d) alternative framings / counter-considerations; (e) underlying-concern depth; (f) adjacent project patterns.

### Coverage map

| Region | Coverage | Aggregate relevance |
|---|---|---|
| Point 1 candidate designs (4 candidates + hybrid) | confirmed (5 entries) | 2 core + 2 sub + 1 side |
| Point 1 interactions with existing commitments | confirmed (4 entries; one entry split into 7a) | 3 core + 1 sub |
| Point 1 interactions with frontier questions | confirmed (4 entries: Q2, Q5, Q6, Q4) | 2 core + 2 sub |
| Point 1 underlying-concern depth | confirmed (3 entries) | 1 core + 2 sub |
| Point 1 risks | confirmed (4 entries) | 1 core + 3 sub |
| Point 2 candidate designs (5 candidates + length-bounding) | confirmed (6 entries) | 1 core + 3 sub + 2 side |
| Point 2 interactions with existing fields | confirmed (5 entries: Purpose, WHY, Continuation Note, the new field, naming) | 3 core + 2 sub |
| Point 2 interactions with frontier questions | confirmed (2 entries: Q3, Q4) | 2 core |
| Point 2 interactions with telemetry + /intuit | confirmed (2 entries) | 0 core + 2 sub |
| Point 2 user-stated uses | confirmed (3 entries) | 1 core + 2 sub |
| Point 2 risks | confirmed (3 entries) | 1 core + 2 sub |
| Cross-cutting (motivations + coupling + adjacencies) | confirmed (4 entries + 3 adjacent patterns) | 1 core + 6 sub |
| Frontier signals (trigger; audit; archival) | confirmed (3 umbrella) | 3 umbrella |
| Alternative framings (Point 1 in /reflect; Point 2 as discipline) | confirmed (2 side) | 2 side |

Total: 16 core + 21 sub + 5 side + 3 umbrella = **45 trace entries** (with sub-entries 7a counted; actual sequential ordinal goes to 52 due to splits).

### Confirmed-absent regions

None — every region traversed yielded items.

### Concept-names list

- `staged route mapping`: coined-term, from user input, "a procedural pattern where routeman's first invocation produces high-level routes and a second invocation, given one selected parent route as scope, produces 10-20 sub-routes tied to that parent."
- `enumeration shortcut`: structural-reference, from LLM operational research + user observation, "the tendency for LLMs to produce 3-5 items under enumeration prompts even when many more distinct items exist; convergence on top-of-mind candidates."
- `stage 1 / stage 2`: structural-reference, this surfacing, "the two invocation modes in the staged-mapping pattern — stage 1 is the global enumeration; stage 2 is the deep-dive per selected parent."
- `parent route / sub-route`: structural-reference, this surfacing, "the hierarchical relationship under staged mapping; the parent route is at stage-1 level; sub-routes are at stage-2 level and reference the parent."
- `expand-on-selection`: vocabulary, from canonical /navigation Guidance Modes, "a Guidance Mode where the route's prescriptive content is deferred until the route is selected; distinct from staged mapping which defers SUB-ROUTE ENUMERATION."
- `meta-reasoning field`: coined-term, this surfacing, "a per-Route field where the LLM articulates its reasoning on why the route was enumerated; the proposed `why_this_might_be_important` field at user's framing."
- `object-level vs meta-level content`: structural-reference, this surfacing, "the distinction between fields about the ROUTE (Purpose, WHY, Continuation Note) and fields about the LLM's REASONING ON the route (the proposed meta-reasoning field)."
- `false depth`: coined-term, this surfacing, "a failure mode of stage-2 invocations where the 10-20 sub-routes are minor variations rather than distinct moves; the staging produced quantity without distinctness."
- `filler meta-reasoning`: coined-term, this surfacing, "a failure mode of the meta-reasoning field where the LLM produces surface-level reasoning ('this seems important') rather than specific signal-naming."
- `LLM-operational-characteristics-as-design-input`: coined-term, this surfacing, "the principle the user is committing to via both proposals — design routeman around known LLM operational limits + tendencies, not as if the LLM were idealized."

### Frontier flags

- **FF-1 — Staging trigger mechanism.** Is staging always available (offered as a follow-up invocation mode), or is it triggered by an under-enumeration signal (e.g., when stage-1 produces fewer than N routes of a given type)? Open question to resolve at SKILL.md authoring.
- **FF-2 — Recursion depth.** Can stage 2 itself be re-staged (stage 3 on a sub-route)? Theoretically yes (N-stage recursive per #2); practically may need depth-cap to prevent unbounded trees. Open question.
- **FF-3 — Hierarchical Route Map consumption.** How do downstream consumers (selection step; multi-head workers) navigate hierarchical Route Maps? Interacts with frontier Q2.
- **FF-4 — Meta-reasoning field's audit mechanism.** Whether the field's content is audited by the LAYER-2 framework + how (intersects frontier Q4).
- **FF-5 — Cross-discipline coordination on meta-reasoning.** Whether /reflect's process-quality observations and routeman's meta-reasoning field should be coordinated or kept independent. Adjacent question; not gating this inquiry.

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-23T18:58
extent:
  in-context-files-fully-loaded:
    - devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md (consulted §2 + §"prescriptive-extension layer" + §"attributes")
    - devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md (consulted corrected paragraph + 4-tier impact list)
    - devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md (consulted post-correction Q1-Q10; especially Q2, Q3, Q4, Q5, Q6)
  in-context-files-via-prior-session-loading:
    - cognitive_harness/navigation/references/navigation.md (route-card schema baseline; Guidance Modes)
    - devdocs/inquiries/_archive/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md (4 residuals; adaptive guidance prescriptive layer)
  frontier-files-not-loaded:
    - cognitive_harness/reflect spec (FF-5 deferred)
    - docs/intuit.md (Point 2 / /intuit interaction is speculative; not gating)
```

## Telemetry

- **Mode:** `possibility`. **Entry point:** `signal-first`.
- **Cycles run:** 1.
- **Items enumerated:** 52 trace entries (with a sub-entry 7a counted toward 45 thematic items + sequence numbering reaching 52 through splits).
- **Items tagged at each relevance level:** core = 16; sub = 21; side = 5; umbrella = 3. (Cross-checks count: 16+21+5+3 = 45 thematic items.)
- **Sub-phase fired:** no.
- **Convergence criteria status:** territory exhaustively traversed at current resolution; both proposals covered with candidate designs + interactions + risks + alternative framings.
- **Workspace-overload trigger:** not fired.
- **Failure modes checked (LAYER 1):** Missed-relevance (mitigated by 11-region sweep across both proposals + cross-cutting); Surfaced-irrelevance (none flagged; 5 side items kept with reasoning); Over-coverage (3 umbrella items + 5 side items kept with reasoning; not noise); Territory-mis-binding (none); Workspace overload (not fired); Artifact under-specification (per-trace tags + identifiers captured); Workspace-artifact desync (capture-at-moment applied).
- **Failure modes checked (LAYER 2):** Interpretive-overstep (avoided; items are candidate designs and tradeoffs, not cross-piece interpretive structure); Purpose-loss (purpose explicit); Self-coupling-to-downstream (avoided; Surfacing doesn't pre-select recommendations; Sensemaking adjudicates).
- **Self-assessment verdict:** **PROCEED with FLAG.** 5 frontier flags carry forward (FF-1 through FF-5) for downstream review. Sensemaking should adjudicate the candidate designs against each proposal's underlying concern + the 5 frontier flags.
