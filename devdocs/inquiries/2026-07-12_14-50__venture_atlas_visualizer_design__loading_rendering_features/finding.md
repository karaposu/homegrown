---
status: active
model: claude-fable-5
effort: unknown
refines: devdocs/inquiries/2026-07-12_13-01__venture_atlas_json_contract__producible_vs_consumable/finding.md
---
# Finding: The Venture Atlas visualizer — how it loads, how it renders, and the features that make it useful

## Question

The user: *"it is time to — Now actual visualisation which loads the generated json and render the 3d thinking space and inquiry nodes … lets dive deep of how it should do this, what features are required to be useful."* Two halves of one design: the loading/rendering architecture, and the feature set that makes the map *useful* — with the build as the declared sequel.

## Finding Summary

- **"Useful" was made operational before features were picked:** ten concrete tasks derived from the project's four standing purposes — find inquiry X · what did I work on recently · what continues what · where am I · what's stale/aging · what's active now · did the parse drop anything · read THIS finding well, here · jump to the file in my editor · the space feels alive. **A feature is REQUIRED if and only if a task fails without it.**
- **The app is five organs in a small vite app** (proposed home `docs/visualisation/app/`): data/shim → scene → detail → HUD → plumbing, keeping the demo's liked interaction model and aesthetic. The demo stays what the correction made it — example code, reshaped freely at its joints.
- **The probes, not taste, set the render policies:** 180 continues-from edges always drawn; 505 related edges on selection only (three degree-16 hubs would hairball otherwise); the fourteen long-tail edge types in one default style; a staleness color ramp fitted to the corpus's REAL 0–50-day spread (the demo's fixed 90-day flag literally has nothing to flag); 34 group chips, never 228 labels; standalones as a quiet-but-fully-searchable outer dust shell; hub size honestly encodes degree.
- **Reading is the trust-critical organ, and it forced the one real implementation decision:** 47% of findings contain tables, 100% frontmatter, 97% `<details>`, 89% nested lists — none handled by the demo's mini-renderer. Settled: **marked + DOMPurify** (pinned), because the gate found real corpus edges (pipes inside code-spans in table cells; fenced code inside `<details>`) that double the hand-parser's honest cost exactly where mis-rendering means lying about an authored document.
- **The feature matrix: 13 MUST / 7 NICE / 4 LATER / 1 GATED.** MUST = loading with an honest error card · ranked search with fly-to · chain layout + chips · the edge policies · the relative ramp · status accents + active beacon · the faithful detail view · the edge list with full notes (file/prose targets listed, never drawn) · copy-repoPath · the anomalies panel · counts + snapshot age · recent-list. The knowledge lens stays a contentless enum slot behind the standing exercised-definition gate.
- **The build follows this finding immediately** — "it is time to" was adjudicated as standing authorization (the same shape as the schema and maker builds); the 0→5 sequence has a runnable checkpoint after each organ.

## Finding

### 1. Loading (the data organ)

State machine `loading → ready | error`. The canvas boots instantly with a small "loading the atlas… (7.7 MB)" chip; the parse takes ~100–200 ms. The schema-version check accepts `venture-atlas/1` only; anything else renders the **error card** — found-vs-expected version, whatever counts are readable, and the regeneration command — never a blank canvas. A file over ~15 MB adds a non-blocking hint quoting the contract's flip-trigger (`--path` mode exists). The shim is the contract's own, verbatim (~20 lines: `Date.parse` per ISO field; `body.text ?? fetch(body.href)`; counts from the envelope). Seven derived indexes form the internal data API: id→node map, degree, edges-by-type (drawable = resolved only), edges-by-node (both directions, raw-target edges included for the detail list), group membership, the fitted staleness domain, and the recent-10 list. Client-side derivation is deliberate — the data file stays record-truthful; views derive.

### 2. The scene (the map organ)

Group anchors on a golden-angle spiral ring (radius grows with √index; the 23-member giant gets a wider *local* sphere, not a wider ring slot); members on fibonacci spheres around their anchors; the 56 standalones as a thin outer dust shell — quiet placement encoding "unchained," with full search/fly-to/ramp participation (confirmed at the gate: quiet ≠ inaccessible). Node color = the relative staleness ramp (worked-today ember → oldest ash-blue, domain auto-fitted and re-fitted per regeneration); superseded at 40% opacity; the active node pulses (gracefully absent at zero); node size = 1 + 0.18·log₂(1+degree), capped. Three `LineSegments` sets carry the edge policy: continues-from always on; related and the long-tail types dark until a node is selected, then its local neighborhood lights (≤32 segments rebuilt — trivial). Labels: 34 group chips + hover + focus. Interactions are the demo's, kept: orbit/zoom, click = fly-to, double-click = detail, double-click empty = home — plus a `#node-id` deep-link. Two challengers were run and recorded: flat force-directed as default (killed — it dissolves the measured venture structure; survives as the `flat` lens) and dropping 3D entirely (killed on the user's explicit words and the enjoyment purpose; absorbed by keeping every text-critical surface in 2D DOM).

### 3. The detail view (the reading organ — the quality budget lives here)

Left panel: kind badge (INQUIRY / VENTURE for group tiles / ATLAS for the root) · title · meta chips from frontmatter + node fields (status, flowType, created, last-worked relative) · a 10-dot events strip · **the edge list grouped by type, each edge with its FULL parenthetical note** — resolved targets clickable, file/prose targets listed with a marker (this is where the 272 undrawable edges live honestly) · group membership (click = fly-to) · **copy-repoPath always**, plus an optional `vscode://` link when a basePath is configured (app config — no schema change). Right panel: the body through **marked + DOMPurify** (frontmatter stripped first; `details`/`summary` allowed — the Source Input blocks render as native collapsibles; styles bridged to the existing `.md` CSS; smoke-tested against the 168 KB largest finding). Synthetic tiles are the shim's, mechanical only: the root tile renders the envelope (counts, anomalies, generatedAt, commit) — the atlas's honest cover page; a group tile renders its member table and the one-line venture reading.

### 4. The HUD (the command organ)

Search: `/` focuses; ranking prefix > word-boundary > substring over title+slug+id, ties by recency; ≤12 results with title + relative date + group; Enter flies. Lenses: chains (default) / month (client-derived synthetic groups — grouping stays optional all the way down) / status (color+filter only — 227/1/0 makes status-grouping absurd) / flat. Recent: the last-10 flyout (the "what did I work on recently" task's direct answer — it survived MUST narrowly, on the glanceability clause, and that seam is recorded). Anomalies: a small ⚠ badge opening the counters table — the no-silent-drops norm surfacing in UI for the first time, end-to-end from the adapter's counters. Counts + "snapshot N days old" round out the HUD.

### 5. The feature matrix (the tier rule applied)

**MUST (13):** load+shim+error card · search+fly-to · chain layout+chips · continues-always · related-on-selection · relative ramp · status accents+beacon · faithful detail renderer · edge list w/ notes+raw-targets · copy-repoPath · anomalies panel · counts+snapshot-age · recent-list. **NICE (7):** the lens toggle · deep-link · hub sizing · events strip · vscode:// link · keyboard nav beyond `/` · idle ambient rotation. **LATER (4, each with its trigger):** date-range filter · group collapse/expand (graduates at ~600 nodes) · physics polish for the flat lens · within-doc find (browser find suffices). **GATED (1):** the knowledge lens (canon/seed nodes) — a contentless enum slot until the exercised-definition fires (map opened ≥3 days + ≥1 real navigation event).

### 6. The build plan

Sequence 0→5, runnable after each: scaffold (boots to the error card) → data organ (real data.json loads; indexes verified) → scene (the space renders; fly-to works) → detail (read a real, table-heavy finding well) → HUD (search/lenses/recent/anomalies) → polish. Deps pinned: react, three, marked, dompurify. `data.json` regenerates into `app/public/` via the existing maker. Acceptance = the ten tasks demonstrated live or explicitly deferred with their tier rows cited. An artifact-embed variant (bundle the JSON via import) is a one-line build flag, noted not built.

## Inherited Commitments Re-test

- **Commitment:** the ~20-line loader shim spec. **Source:** the 13-01 contract finding §3. **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** the design consumed it verbatim; the one mid-dive conflict (the renderer) resolved in a different organ — the shim never grew.
- **Commitment:** grouping optional; no required parent. **Source:** the 10-46 finding (2026-07-12 correction). **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** the flat lens exists; month-groups are client-side derivations; no spec element requires a parent.
- **Commitment:** the exercised-definition gate for v2 kinds. **Source:** the 10-46 finding §3. **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** the knowledge lens appears only as a contentless enum slot; no tier above GATED references v2 content.
- **Commitment:** inline default + the ~15 MB flip-trigger. **Source:** the 13-01 finding. **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** the loading spec quotes the real numbers; the >15 MB hint carries the trigger verbatim.
- **Commitment:** "component changes are additive only" (the early v1 sketch's list). **Source:** the 10-46 finding §3, carried into 13-01. **Re-test status:** RE-TESTED — commitment confirmed but frame revised. **Evidence:** the census (tables 47%, frontmatter 100%, `<details>` 97%, nested lists 89%) showed the original list omitted one real item — the renderer path; the additive spirit holds, the enumeration was incomplete; the renderer is now a settled organ decision (marked+DOMPurify), not a mid-build surprise.

## Next Actions

### MUST
- **What:** Execute the v1 build (the 0→5 sequence at `docs/visualisation/app/`).
  **Who:** the assistant — authorized by the user's "it is time to" (adjudicated as standing authorization, C1); proceeds immediately after this finding unless redirected.
  **Gate:** now.
  **Why:** the spec pays at first light; every decision it needs is settled above.
- **What:** The acceptance pass — walk the ten tasks live and record served/deferred.
  **Who:** assistant demonstrates; the user judges.
  **Gate:** on the build's completion.
  **Why:** "required to be useful" closes only by demonstration.

### COULD
- **What:** The NICE tier (lenses, deep-link, hub sizing, events strip, vscode:// basePath, keyboard, idle rotation).
  **Who:** the assistant, as appetite allows.
  **Gate:** post-acceptance.
  **Why:** each improves a served task; none blocks usefulness.
- **What:** Mirror the settled spec into cross-session memory.
  **Who:** the assistant. **Gate:** this session's wrap-up. **Why:** three design dives compound only if findable warm.

### DEFERRED
- **What:** The v2 knowledge lens (canon + seed nodes over the 202 native cross-edges).
  **Gate:** the exercised-definition — the map opened on ≥3 separate days AND ≥1 real navigation event.
  **Why (if revived):** the concepts view over already-written artifacts, as the node-choice finding staged it.
- **What:** Group collapse/expand + label LOD.
  **Gate:** ~600 folders (aligned with the contract's flip-trigger neighborhood).
  **Why (if revived):** the design ages on its named trigger instead of prebuilding.

## Reasoning

**Why tasks before features:** "what features are required to be useful" is undecidable as a taste question and decidable as a task question; the ten tasks are the four preserved purposes made concrete, and the tier rule (a task fails without it) let the gate prosecute tier inflation honestly — recent-list survived only on the glanceability clause (recorded), the anomalies panel survived on the project's own no-silent-drops doctrine, and no MUST was found inflated beyond those two prosecutions.

**Why marked+DOMPurify beat the zero-dep upgrade:** the corpus itself testified — table cells containing pipes inside inline code spans and `<details>` blocks containing fenced markdown are exactly the edges a ~60-line hand parser mishandles, and the honest estimate doubled on inspection; on the trust-critical organ, correctness-on-real-edges outranks dependency purity, and the look-control argument dissolves because marked emits standard tags the existing CSS styles directly.

**Killed, with grounds:** flat-force as default (dissolves the measured 34-chain structure; survives as a lens) · dropping 3D (against the user's explicit words and a named purpose; its usefulness point absorbed by keeping all text surfaces in 2D DOM) · fixed staleness thresholds (an empty >90d bucket means a fixed flag renders uniform health — a lie) · always-on related edges (505 edges around degree-16 hubs = hairball) · 228 always-on labels (the star-atlas labeling economy: many points, few labels) · adapter-side index precomputation (views derive; data stays record-truthful) · fuzzy-search dependency (228 distinctive slugs need substring+rank, nothing more) · status-as-grouping (227/1/0).

**The one scope honesty note:** 13 MUSTs is a big-sounding v1, but five are policies or one-widget rows; the build sequence's per-organ checkpoints keep it demonstrably on rails.

## Open Questions

### Monitoring
- Does search FEEL like it misses? (the substring+rank revisit-trigger — observable in use.)
- Does any union-find chain read over-merged on the map? (the directed-forest lens variant waits on felt evidence.)

### Blocked
- The v2 knowledge lens — blocked on the exercised-definition.
- The navigational-session candidacy — blocked on the map being exercised at all.

### Refinement Triggers
- The renderer decision re-opens only if marked+DOMPurify demonstrably mis-renders a finding construct (named feature: CommonMark divergence on our corpus) — not on dependency taste.
- The LATER tier's rows each carry their own trigger (~600 nodes; explicit appetite).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
it is time to
  Now actual visualisation which loads the generated json and render the 3d thinking space and inquiry nodes

────────────────────────────

lets dive deep of how it should do this, what features are required to be useful
```

</details>
