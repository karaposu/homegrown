# Articulate-Warm — the visualizer design (post-surfacing re-anchor)

## User Input

_branch.md + surfacing.md + articulate_simple.md of `devdocs/inquiries/2026-07-12_14-50__venture_atlas_visualizer_design__loading_rendering_features/` (WARM PASS — inline per the standing workaround; both reference specs in context from this session).

---

## Item 1 — warm bundle

### Re-anchored MQ2 (COMMITTED context-need)

The design bears on five facets, all now filled:

1. **The data shape, probed:** 34 groups (one 23-member giant, a long tail, 56 standalones); degree max 16 with three named hubs, median 5; the edge wilderness — 6 frequent types + 14 low-count types the open enum passed through (472 drawable resolved edges, 272 raw-target edges that are listable-not-drawable); staleness spread 0–50 days with an EMPTY >90d bucket; titles p50 43 chars; events 2–10.
2. **The reading requirements, measured:** real findings need frontmatter-stripping (100%), tables (47%), `<details>` (97%), nested lists (89%), h4 (9%) — none handled by the demo's mini-renderer; fenced code and blockquotes already handled.
3. **The keep-set and the lacks-list:** the demo's interaction model (orbit, fly-to, double-click detail, roll-up recency) is the liked base; the loudest lack at 228 nodes is SEARCH, then staleness/status visuals, edge-type styling, lenses, deep-links, error surface, open-in-editor.
4. **The inherited commitments in force:** the shim spec; inline 7.7 MB (parse ~100–200 ms — a loading-state fact); grouping optional (lenses chains/month/status); the four purposes; the exercised-definition gate (v2 kinds out; lens hook allowed); no-backend/no-LLM; anomalies counters and repoPath sitting in the data as ready display candidates.
5. **The open design slots:** edge-visibility policy (numbers now known); the relative staleness ramp; layout (giant + tail + standalone cloud); the renderer path (library vs ~60-line upgrade — a vite npm dep is legal; no-backend ≠ no-npm); app location (unnamed anywhere — a proposal is needed).

**Material-change judgment:** the committed need names the territory the first surface fetched — same target, filled. **FIXPOINT at round 0. No re-surface.**

### On-trigger re-runs

- **MQ4 (boundary — re-run, moved):** three data-driven additions:
  - `fixed-threshold staleness excluded` — the demo's 90-day flag has NOTHING to flag (empty bucket); the ramp must be relative/continuous or it renders a lie of uniform health.
  - `image-rendering excluded` — 0 images corpus-wide; skip the feature.
  - `empty-active-case` — the snapshot has 0 active nodes (usually 0–1 exist); any active-beacon design must be graceful at zero, not assume presence.
  - Standing exclusions carried unchanged (v2 kinds; no backend/LLM; no schema changes; dive-endpoint still open).
- **MQ1 / MQ3 / MultiDepth-WHY (skip — not moved):** the ask-kinds, endpoints, and motivations stand (the probes gave them content, not different identities).
- **MQA (not re-run):** only MQ4 re-ran.

### Conflict-detection (warm-only)

**identified-conflicts-list (one entry), severity MED — resolvable by re-anchoring:**

- **The "additive-only" sketch vs the measured reading requirements.** The priors' component-change list ("a JSON loader, two extra edge sets, the grouping parameter, slug truncation, one colorspace fix") did NOT include renderer work — and the census shows the reading purpose is unmet without it (about half of all findings would render garbled tables; every finding would print its frontmatter as text; 97% carry `<details>` tags the renderer would spit out raw). The premise isn't wrong — the changes remain additive — but the list was INCOMPLETE by one real item: a renderer path (library or upgrade). The re-anchor absorbs it: the renderer becomes a named design slot rather than a surprise mid-build. No formulated question needed (not severe). Both-ways guard: this does not reopen the shim spec (still ~20 lines of data conversion — the renderer is a different organ), and it does not indict the priors (they scoped the DATA layer; rendering fidelity is exactly this dive's territory).

### Refreshed Rephrase (considered articulations, probe vocabulary)

1. "Design the loading path: fetch data.json (7.7 MB, ~100–200 ms parse, loading state + schema-version check + visible error surface), run the ~20-line shim, build the scene — with the numbers stated."
2. "Set the render policies from the probe numbers: continues-from (180) always drawn; related (505) on hover/selection; the 14-type long tail styled as one default; hubs (deg ≤16) size-encoded; the 23-member giant + 56-standalone cloud in the layout; a RELATIVE staleness ramp over a 0–50-day spread."
3. "Fix the reading path to the census: frontmatter-strip + tables + `<details>` + nested lists + h4 — via a small md library (legal) or a ~60-line renderer upgrade — so every finding renders faithfully."
4. "Tier the features by the four purposes: search first (the loudest lack), then health visuals (ramp, active beacon, anomalies HUD), lenses, deep-links, open-in-editor — MUST/NICE/LATER with each tier's usefulness rationale."
5. "Specify v1 completely and build it in this dive ('it is time to'), in a proposed home (docs/visualisation/app/), leaving the v2 lens hook in place but empty."

### Carried unchanged

Itemize (count = 1) · Deconstruct tuple · MultiDepth literal-statement.

---

## Loop telemetry + verdict

- **Rounds:** 0 re-surfaces (fixpoint round 0) · anchor same-target-filled · no oscillation.
- **content-conflict:** MED, resolvable-by-re-anchor (the additive-only list gains the renderer slot; nothing reopened, nothing severe).
- **Self-assessment: MED-FLAG** (the resolvable conflict noted; zero LAYER 1 fires; low friction).
