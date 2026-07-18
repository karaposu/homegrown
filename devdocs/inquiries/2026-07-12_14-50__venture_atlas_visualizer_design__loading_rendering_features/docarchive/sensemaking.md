# Sensemaking — stabilizing the visualizer design's fact-base

## User Input

devdocs/inquiries/2026-07-12_14-50__venture_atlas_visualizer_design__loading_rendering_features/_branch.md — with surfacing.md + articulate_warm.md read fully; warm settled round 0, MED resolvable conflict absorbed (the renderer slot). Stabilize: A1 "useful" made operational · A2 render-policy fact-set · A3 loading/plumbing · A4 renderer decision material · A5 inherited-commitment re-test material; collapse the 3 musts (dive-endpoint; fork-vs-app; search shape). Lean SV1–SV6.

---

## SV1 — Baseline

The data layer works; now the app. First impression: fork the demo, feed it real data through the shim, add search and colors, done. The probes say it's closer to true than most first impressions — but "useful" needs defining before "features," and the reading path is quietly the hardest part.

## Phase 1 — Anchors

**Constraints:** every rendered word has a real author (the trust property — now extended to RENDERING fidelity: a garbled table is a lie about an authored document); no required parent (grouping optional); v2 kinds excluded (hook only); no backend/LLM; the contract consumed as-is.

**Key insights:**
1. **"Useful" is a task list, not a vibe** — ten concrete tasks derived from the four purposes (A1 below); a feature is REQUIRED iff a task fails without it. This converts the user's "what features are required to be useful" into a decidable question.
2. **The probes decide the render policies** — the numbers (180/505/14-type-tail edges; deg-16 hubs; 0–50-day staleness; 34 groups with a 23-giant and 56 standalones) are not inputs to taste; each policy has a constraint trail ending in a measurement.
3. **Reading is the trust-critical feature and the demo's weakest organ** — 47% tables, 100% frontmatter, 97% `<details>`, 89% nested lists, all unhandled; the map's whole premise ("every rendered word has a real author") fails at the exact moment someone reads a finding badly rendered.
4. **The staleness ramp must be relative** — the >90d bucket is EMPTY in a ~50-day-old corpus; any fixed threshold renders uniform health (a lie); the ramp auto-fits the data's own spread and re-fits at each regeneration.
5. **Nothing needs a backend, an index, or cleverness at this scale** — 228 nodes: substring search is instant, 744 edges draw trivially, the 7.7 MB parse is ~100–200 ms once.

**Structural points:** the app has FIVE organs — data/shim · scene (map view) · detail (reading view) · HUD/controls (search, lenses, filters, counts) · plumbing (loading/error). The feature list distributes across them.

**Foundational principles:** the keep-set is the demo's interaction model + aesthetic (liked, kept); the authority order (record → schema → shim → component) — views derive, data stays truthful; honesty surfaces (anomalies visible, drops stated).

**Meaning-nodes:** "useful" = task-supported; "the thinking space" = the record rendered inhabitable — the emotional target is real and named (see-it-finally).

### SV2 — Anchor-informed

The design question decomposes cleanly: an operational usefulness test (tasks) + probe-decided policies + five organs + one genuinely open implementation choice (the renderer path) + the endpoint question. Nothing discovered resists; the work is precision and tiering.

## Phase 2 — Perspectives

- **Technical/Logical:** all policies implementable in the demo's own idioms (`edgeLines()` already takes arbitrary segment sets → per-type edge sets are free; `makeChip()` → group chips; the golden-angle ring generalizes the demo's module ring). New anchor: **per-type edge GROUPS as separate `LineSegments` objects** — visibility toggling = `.visible`, no rebuild; selection-local edges rebuilt on click (~16 segments max — trivial).
- **Human/User:** the ten tasks are the user's actual moments ("where was that routelister dive?" → search; "what was I doing this week?" → recency; "read it here" → the renderer). New anchor: **the detail view is where the user will spend most non-flying time** — its quality budget should exceed the map's.
- **Strategic/Long-term:** the five-organ split makes the v2 lens a new data kind + a lens entry, not a rewrite; the relative ramp survives corpus aging automatically; per-type edge sets absorb future edge vocabulary (the open enum's UI mirror is a style DEFAULT, not a style TABLE that breaks).
- **Risk/Failure:** (a) blank-canvas failure — mitigated by the error card + schema check; (b) renderer XSS if a library renders raw HTML from findings (`<details>` is IN the corpus — sanitize or whitelist; DOMPurify if lib); (c) hairball regression if related-edges default on — policy already set; (d) the 23-giant group visually swamping — radius scaling + maybe intra-group spiral; (e) scope creep past useful — the task list IS the scope fence.
- **Resource/Feasibility:** the whole v1 is a few hundred lines over the demo + a vite scaffold; the shim is spec'd; deps: react, three, (maybe marked+DOMPurify). An afternoon-to-a-day of build.
- **Definitional/Internal consistency:** "render the 3d thinking space" (the user's words) = the canon picture family's object rendered — the map shows traverse-records chained into ventures; the detail shows the finding (the record's distilled voice). No canon contradiction; the anomalies-visible principle extends the project's no-silent-drops norm INTO the UI. Frame-exit: the term "useful" checked across referents (useful-to-user-now vs useful-to-the-project's-instruments later — the navigational-session candidacy) — the latter is explicitly a named kinship, not a v1 requirement; no excluded referent beyond it.
- **Phase/Calibration:** the exercised-definition gate is phase-dependent and HONORED (v2 hook empty); nothing else phase-bound.

### SV3 — Multi-perspective

New anchors from three perspectives (per-type edge sets as visibility groups; detail-view quality budget; the style-default-not-table rule for the open enum). The model shapes into: five organs, ten tasks, probe-decided policies, one open renderer choice, one endpoint statement.

## Phase 3 — Ambiguity Collapse

#### C1: The dive-endpoint (design-only vs design+build)
**Counter-interpretation:** "lets dive deep" means analysis only; building without a fresh go-ahead oversteps.
**Why the counter fails (structural):** the user's own opening line is "it is time to — Now actual visualisation which loads… and render…" — a build declaration preceding the dive ask; the dive refines HOW, not WHETHER. And the pattern is established this session: the schema and the maker were both built on exactly this shape of ask ("can u make this official…?", "maybe we can have a …maker?"). The honest reading: the dive lands the build-ready spec, and the build follows as the already-authorized next act.
**Confidence:** HIGH. **Resolution:** deliverable = the build-ready spec; the build proceeds immediately after CONCLUDE unless the user redirects; the finding states this explicitly. **Now fixed:** no re-ask before building. **No longer allowed:** treating the build as needing a new permission round.

#### C2: Fork-in-place vs a small app
**Counter-interpretation (stay single-file):** fastest path; the demo is one file; keep it one file.
**Why the counter fails (structural):** the census-driven renderer work + search + lenses + HUD + loading/error onto a 700-line single file crosses the maintainability line this project measures elsewhere (the record layer favors parse-only precisely because hand-tended monoliths decay); and the five organs have natural module boundaries (data/shim · scene · detail · hud · plumbing) that cost nothing at build time. The counter's real content — speed — is preserved: the modules are the SAME code cut at its joints.
**Confidence:** HIGH. **Resolution:** a small vite app at **`docs/visualisation/app/`** (proposal — keeps the visualisation family in one place; user may re-home), five modules, the demo's interaction model and aesthetic kept. **Depends on this:** the build plan's file list.

#### C3: Search shape
**Counter:** fuzzy search needs a library (fuse.js).
**Why the counter fails:** 228 items; case-insensitive substring over title+slug+id, ranked by (prefix match > word-boundary > substring, then recency), is instant, dependency-free, and matches how the user actually recalls inquiries (fragments of slugs). Fuzzy adds tolerance the corpus doesn't need (slugs are distinctive).
**Confidence:** HIGH (revisit only if search FEELS misses — an observable trigger). **Resolution:** client-side substring+rank; no dep.

#### C4 (load-bearing test on insight 1): Is the task list the right operationalization of "useful," or a frame smuggled in?
**Counter-interpretation:** "useful" might mean something the task list misses — e.g., ambient awareness (the map as a living dashboard you glance at), not task completion.
**Why the counter fails AS A COUNTER (and what it adds):** the four purposes are the user's own preserved WHY-axis (both priors carry them); the task list is their direct operationalization, and the ambient reading is INSIDE purpose 4 + the health purpose (glanceability = staleness ramp + active beacon + recent-list — all present as candidates). The counter adds a check, not a defeat: at tiering time, glance-value counts as task-support (the "what's stale" task IS ambient).
**Confidence:** HIGH with the glanceability note carried to tiering.

### SV4 — Clarified

Clear now: the deliverable (build-ready spec; build follows), the home (docs/visualisation/app/, proposed), the organs, the task-test for features, the probe-decided policies, search's shape. Open by design: the feature tiers (D/I/C), the renderer path (Critique settles A4), layout parameters (build-time tunables).

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:** the ten-task usefulness test; the five-organ architecture; the keep-set; edge policy (continues-always / related-on-selection / long-tail-default-style / raw-targets-listed-not-drawn); the relative staleness ramp (auto-fit, re-fit per regeneration); label policy (34 chips + hover + focus, never 228); hub encoding honest (degree = meaning); loading/error plumbing (state + version check + error card); search = substring+rank; the shim verbatim from the contract; the app home proposal.
**Eliminated:** fixed staleness thresholds; always-on related edges; 228 always-on labels; single-file accretion; fuzzy-search deps; image rendering; any v2-kind feature content; any backend.
**Open for I/C:** the feature TIERS (MUST/NICE/LATER against the task list); the renderer path (lib vs upgrade); layout tunables (radii, spread, giant handling); enjoyment extras (ambient rotation, nebulae) — cheap-but-optional.

### SV5 — Constrained

The solution space is one architecture with one open implementation choice (renderer), one tiering exercise (features vs tasks), and cosmetic tunables. Innovation generates the tiered feature spec + the renderer options' full case; Critique settles.

## Phase 5 — Conceptual Stabilization (SV6)

**The stabilized model:** The visualizer is a small five-organ vite app (proposed home `docs/visualisation/app/`) that keeps the demo's liked interaction model and aesthetic, consumes venture-atlas/1 verbatim through the contract's own shim, and is *useful* in an operational sense: ten named tasks from the four purposes, each covered by a feature or explicitly deferred. The probes, not taste, set the render policies — 180 continues-from edges always visible, 505 related edges on selection, fourteen long-tail types in one default style, a staleness ramp fitted to the corpus's real 0–50-day spread, 34 group chips (never 228), degree-honest hub emphasis. The reading path is the trust-critical organ and gets the quality budget: frontmatter stripped, tables/`<details>`/nested lists rendered faithfully — via a path Critique picks (library vs ~60-line upgrade). Loading is stated honestly (a visible loading state for the ~150 ms parse, a schema-version check, an error card — never a blank canvas), and the envelope's honesty counters get a UI surface. The dive ends in a build-ready spec; the build follows as the user's already-declared next act.

**Delta from SV1:** SV1's "fork it, add search, done" gained: an operational definition of useful (the task test), a measured renderer requirement SV1 didn't suspect, probe-decided policies replacing taste, a five-organ boundary replacing the single file, and an explicit endpoint statement replacing an assumption.

---

## Saturation telemetry

Perspective saturation: reached. Ambiguity resolution: 4/4 collapsed with structural counters. SV delta: substantial. Anchor diversity: all five types. Failure modes checked: status-quo (the single-file demo did NOT win by incumbency — C2); premature stabilization (three perspectives added anchors before collapse); anchor dominance (removing the task-list anchor leaves the probe-policies and organs standing); clean-resolution (C1's counter defeated on the user's own words, not convenience); self-reference (external grounding = live probes + the demo's code + the user's phrasing). **PROCEED.**
