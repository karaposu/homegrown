# Surfacing — the layout-meaning paradigm field + substrates + standing positions

## User Input

PURPOSE: the paradigm field (real, named layout/spatialization paradigms — per family: what position encodes · substrate demanded · lying-risks · stability · determinism · which navigation mode served) + the substrate inventory (three grades) + the standing positions/live state + the two navigation modes as demand-facts. Load-bearing = (A)+(B). Tag; don't adjudicate. (Full directive in the invocation record.)

- **Mode:** A = possibility (candidate-generated from visualization practice, provenance floor, confidence flagged) · B/C/D = artifact (in-session verified facts + verbatims re-read today) · **Entry:** signal-first
- **Boundary-discovery:** skipped (explicit-bounded)

---

## Traversal Trace

### Region A — THE PARADIGM FIELD (13 families; load-bearing)

| # | Item (family — how it actually works) | Tag | Conf |
|---|---|---|---|
| A1 | **FORCE-DIRECTED / ENERGY** (Fruchterman–Reingold, ForceAtlas2; stress/Kamada–Kawai): position = an optimization equilibrium over edge forces. Encodes: nothing per-axis; proximity ~ connectivity, loosely. Substrate: edges only. Lying-risks: proximity READS as similarity but is partly solver artifact (the "hairball" critique); axes rotation-meaningless. Stability: new nodes perturb globally. Determinism: random-init unless seeded. Modes: weak focus-same-concept (emergent clusters), no follow-time. The meaning-free default the disputed clause was written FOR. | core | HIGH |
| A2 | **AXIS-BOUND ATTRIBUTE layouts** (scatterplot semantics; attribute-driven positioning): each axis READS a field. Encodes: whatever fields are bound (quantitative/ordinal/categorical). Substrate: per-node fields. Lying-risks: only scale/binning choices (declarable). Stability: perfect — a position moves only if its field changes. Deterministic. Modes: whichever fields bound (time→follow; category/similarity-derived field→focus). | core | HIGH |
| A3 | **TIMELINE / TEMPORAL** (timelines, Gantt; ★our Time-Road = a terrain-ribbon timeline): X reads time. Substrate: timestamps (we have real ones). Lying-risks: gap-folding must be declared (our pleats are). Stability: PERFECT AT THE PAST — growth appends at NOW, never re-positions history (the road's structural virtue; the globe died on the opposite). Deterministic. Mode: follow-over-time. | core | HIGH |
| A4 | **STORYLINE / NARRATIVE CHARTS** (the xkcd movie-narrative form; optimization literature e.g. Tanahashi & Ma): X READS time; Y is OPTIMIZED so related entities bundle while interacting. Encodes: time + relation-episodes. Substrate: timestamps + a relation stream. Lying-risks: the Y ORDER is semi-arbitrary within constraints (bundle membership real; vertical adjacency between bundles not). Stability: re-optimization reshuffles Y as data grows. Determinism: seeded-only. Modes: BOTH partially — the closest existing family to the user's "X=time + Z=concept" ask, with the bundling-axis honesty caveat. | core | HIGH (form) / MED (algorithm specifics) |
| A5 | **LAYERED / SUGIYAMA rank layouts** (DAG drawing): one axis = topological rank (DERIVED deterministically from edge direction — read-ish), the other = crossing-minimization (OPTIMIZED). Substrate: directed edges (our continues-from is DAG-like). Lying-risks: rank honest; sibling order arbitrary. Stability: mid (new edges can re-rank). Modes: follow-dependency (≈ follow-time for us — continues-from mostly tracks time). | core | HIGH |
| A6 | **SIMILARITY PROJECTIONS** (MDS / t-SNE / UMAP / SOM "semantic maps"): position = a low-dim arrangement preserving neighborhood structure of high-dim similarity. Encodes: proximity ≈ content similarity; ★the AXES themselves mean nothing (rotation-invariant). Substrate: vectors (embeddings, tag-vectors, edge-feature vectors). Lying-risks DOCUMENTED: t-SNE cluster SIZES and between-cluster DISTANCES are not meaningful; UMAP global geometry unreliable; readers over-trust the map. Stability: re-fit on new data reshuffles the world (incremental/parametric variants mitigate — MED conf). Determinism: fixed-seed per dataset only. Mode: focus-same-concept strongly (their whole point). | core | HIGH (risks are well-documented) |
| A7 | **SPACE-FILLING HIERARCHY** (treemap, circle-packing): position = containment slot in a tree. Substrate: a hierarchy (we have a shallow one at most: ventures→members). Lying-risks: within-level adjacency ~ arbitrary; area reads as importance. Stability: squarified treemaps notoriously reshuffle on data change (ordered/stable variants exist — MED). Mode: focus-by-group (containment IS grouping). | sub | HIGH |
| A8 | **REGION / GEOGRAPHY METAPHORS** (GMap: clusters drawn as countries; ThemeScape/IN-SPIRE: document terrain with theme peaks): position = cluster membership regionalized (+ within-region projection). Substrate: clusters/similarity. Lying-risks: crisp borders imply sharpness the data lacks; underlying projection risks inherited. Stability: low. Mode: focus-same-concept (regions ARE concepts). | sub | MED (tool specifics) |
| A9 | ★**HIVE PLOTS** (Krzywinski): nodes placed ON radial axes BY a category RULE; position ALONG the axis = a declared metric. Fully READ (no optimizer), deterministic, stable, cross-dataset comparable — published explicitly as the anti-hairball "rational layout." Lying-risks: low (rules declared); the cost is unfamiliarity. Modes: focus-by-category strongly; time can be the along-axis metric. The user's instinct has a named champion paradigm. | core | HIGH |
| A10 | ★**SEMANTIC SUBSTRATES** (Shneiderman & Aris): the plane divided into attribute-defined REGIONS (e.g., by type or status); within each region, layout by a separate rule (even force). Position = region membership (READ) + within-region residue (varies, declared per zone). Stability: region-stable. Modes: focus-by-attribute + whatever the within-rule adds. ★The hybrid pattern: bound where it matters, free where it doesn't — DECLARED PER ZONE. | core | HIGH |
| A11 | **RADIAL / SPIRAL TIME** (time-spiral; radial trees; chord): angle = time or category; radius = a metric. Substrate: fields. Lying-risks: angle is a weaker accuracy channel than position-on-common-scale (theory-backed). Stability: good. Mode: follow-time with periodicity emphasis (we have little periodicity need). | sub | HIGH |
| A12 | **MATRIX SERIATION** (adjacency matrix + row/column ordering from clustering): position = a derived ORDER; no node-link scene. Substrate: edges. Lying-risks: low when the ordering rule is declared. Deterministic-ish (tie-breaking declared). Mode: focus-clusters (density blocks). A different display genus — for us a 2D panel lens, not the 3D scene. | sub | HIGH |
| A13 | **FIXED-COORDINATE / GEOGRAPHIC**: needs real spatial coordinates; we have none — any use would fabricate geography (the 10-26 dungeon-dressing kill's cousin). Note-and-exclude. | side | HIGH |

**A14 — THE META-DIMENSIONS the families vary along (the paradigm-space's own axes)** — tag core, HIGH:
- **per-axis encoding type:** quantitative / ordinal / categorical / similarity-proximity / none;
- ★**READ vs OPTIMIZED** — the honesty spine: an axis that READS a real field is checkable (a position can be audited against data); a position an ALGORITHM optimized has no field that explains it (force equilibria, storyline-Y, projection coordinates) — the class the declare-or-avoid question governs. Hybrids declare per zone (A10) or per axis (A4, A5);
- **stability under growth** (does adding a folder move old nodes? — the globe-kill criterion);
- **determinism of re-runs** (regeneration must not reshuffle the world);
- **the dimensionality budget** (our scene is 3D: X + lateral + elevation, plus camera; a lens can respend all three);
- **grain** (point-position vs region/containment);
- **jurisdiction** (which of ours may host it: road amendment vs lens vs 2D panel).

### Region B — THE SUBSTRATE INVENTORY (three grades; verified fields)

| # | Item | Tag | Conf |
|---|---|---|---|
| B1 | **TODAY-DERIVABLE, deterministic:** time (createdAt / lastWorkedAt / events — real, stable; already X on the road); status + flowType (categorical); group membership (chain components; 34 today, venture registry designed as the upgrade); the typed-edge graph (751 edges → graph distance, neighborhoods, communities — ★FLAG: common community detection [Louvain] is randomized; determinism = an implementation obligation [fixed seed/order] before any axis reads it); openRoutes counts; docarchive counts (the 10-03 foundation field). | core | HIGH |
| B2 | **DESIGNED-UNBUILT:** freestyle `tags[]` at CONCLUDE (the 08-35 thread — design-complete, awaiting the user's go) → tag-overlap would be a READ concept-similarity substrate; canon-area mapping (the 21-48 C2 offer); second-parse fields (Open-Questions counts etc.). | core | HIGH |
| B3 | **GATED-COMPUTE:** offline embedding similarity over finding texts — legal in principle (no-LLM-at-render; the offline-output-is-data precedent set by today's retro-venture dig), but carries the projection lying-risks (A6) + re-run determinism + reshuffle-on-growth; would need pinned models/seeds + a declared staleness policy. | core | HIGH |
| B4 | **No spatial substrate exists** (no geography, no room geometry — standing since 10-26); concept overlap has NO direct field today — it is derivable (B1 edges), designed (B2 tags), or computed (B3), never free. | core | HIGH |

### Region C — STANDING POSITIONS + THE LIVE STATE (verbatims verified this session)

| # | Item | Tag | Conf |
|---|---|---|---|
| C1 | The road: **position IS time** (X, true-scale w/ declared pleats), elevation = weekly effort — settled primary (16-05). His "maybe time?" agrees with the settled law; the dispute is about the LENS and the remaining axes. | core | HIGH |
| C2 | **The lateral road axis is named FREE** — "spent on collision-avoidance, not meaning" (10-03) — the one unbound spatial axis on the home view; binding it = a road AMENDMENT (user-gated), not a lens. | core | HIGH |
| C3 | ★**The live dishonesty instance:** chains + flat lenses SHIPPED with position = arbitrary indexes ("golden-angle ring index; fibonacci index" — 16-05) and the KEY is UNBUILT (①a pending) — arbitrary positions render UNDECLARED today. The user's complaint has a live target beyond the queued Expedition Log lens. | core | HIGH |
| C4 | The disputed clause (10-26 §5): lens-scoped, queued, unbuilt — "node positions carry no meaning in this lens" — written for a force-directed sketch under no-false-signifiers. | core | HIGH |
| C5 | The overlay law's scope: the ROAD is never repositioned; repositioning views = LENSES (precedented: chains/flat); the position-rebound "solidity lens" already sanctioned (gate = the user asks); the runtime binding-picker KILLED for v1 w/ revival trigger (10-03). | core | HIGH |
| C6 | ★The STABILITY precedent: the 16-05 globe was killed partly because "monthly growth re-positions everything, un-learning the world" — stability-under-growth is a ruled criterion, not a preference. | core | HIGH |
| C7 | The project's own channel law: "position, the strongest visual channel, was spent on arbitrary indexes" + "a primary dimension needs the primary channel" (16-05 verbatims) — the user's instinct is the project's own lesson re-applied. | core | HIGH |
| C8 | Channel-ranking theory: position on a common scale tops the accuracy orderings for quantitative AND ordinal AND nominal data (Cleveland–McGill experiments; Mackinlay's rankings; Bertin's levels) — the theory-grade for "layout meaning is the most important": position is the highest-bandwidth channel; leaving it unbound spends the best channel on nothing. Counter-fact alongside: a WRONG position encoding misleads more strongly for the same reason (the channel's power cuts both ways). | core | HIGH |

### Region D — THE TWO NAVIGATION MODES (demand-facts)

| # | Item | Tag | Conf |
|---|---|---|---|
| D1 | **Follow-what-happened-over-time: SERVED** — the road is exactly this (zero-click narration was its acceptance task). | core | HIGH |
| D2 | ★**Focus-on-same-concept-things: the measured spatial gap** — today served only by text search, detail flyouts, and related-arcs on selection; NO live surface groups same-concept inquiries spatially. The user's Z-axis idea aims at exactly the unserved mode. | core | HIGH |

---

## State Summary

- **Territory echo:** visualization-practice paradigm field (knowledge, provenance-floored) + our substrate fields + the standing laws/verbatims + the demand facts.
- **Purpose echo:** what the layout-meaning adjudication needs — the honest paradigm map, the substrate grades, the standing positions, the two modes.
- **Coverage map:** A confirmed (13 families + meta-dimensions; the field is family-exhaustive to my knowledge — a NEW family would need a new position-encoding kind, none known omitted; flagged below); B confirmed (three grades; fields verified this session); C confirmed (verbatims re-read today); D confirmed.
- **Confirmed-absent:** no live spatial concept-grouping (D2); no direct concept-overlap field (B4); no real geography (A13/B4).
- **Concept-names:** READ-vs-OPTIMIZED (the honesty spine) · declare-or-avoid (the clause's honest generalization) · stability-under-growth (the globe criterion) · the dimensionality budget · per-zone declaration (semantic substrates) · the bundling-axis caveat (storyline-Y) · projection lying-risks · the live undeclared lenses (C3) · the free lateral axis (C2) · the channel's power cuts both ways (C8).
- **Frontier flags:** (i) storyline-algorithm and ThemeScape specifics at MED — enough for family-level adjudication, not for implementation claims; (ii) incremental/parametric projection stability at MED — if the gated-compute option is ever pursued, verify current tooling then; (iii) whether any further paradigm family exists outside these 13 — held open by construction (the enumeration claims family-coverage of known practice, not logical completeness).
- **Workspace-populated:** {populated: true, populated-at: 2026-07-14_12-3x, extent: regions A–D complete at stated resolution}.

## Telemetry

- Mode: possibility (A) + artifact (B/C/D) · signal-first. Cycles: 3 (families → meta-dimensions+substrates → standing+demand).
- Items: 27 enumerated (13 families + meta-dimensions + 4 substrate + 8 standing + 2 demand); tagged core 21 / sub 4 / side 1 / umbrella 0; confirmed-absent 3.
- items_with_mtime: 0 (knowledge + in-session citations); items_without_mtime: all (possibility case + verified verbatims).
- Workspace-overload: not fired. Failure modes checked: missed-relevance (the field swept by encoding-kind: quantitative/ordinal/categorical/similarity/containment/order/none — each kind has ≥1 family; A13 covers the no-substrate pole); surfaced-irrelevance (A13 kept side deliberately); territory-mis-binding (none); purpose-loss (every family characterized on the five adjudication attributes).
- **Self-assessment: PROCEED** (3 frontier flags, none blocking family-level adjudication).
