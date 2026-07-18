# Innovation — the visualizer spec: organ content, option slots, the feature matrix

## User Input

devdocs/inquiries/2026-07-12_14-50__venture_atlas_visualizer_design__loading_rendering_features/decomposition.md — read with sensemaking.md fully. Production-task mode over P1–P5: concrete spec content per organ + the option-slots Critique settles + the feature×task tiering proposal; required inversions incl. the 3D-frame challenger; CM both directions; DT native+different; Absence both levels; Extrapolation at ~1,300. Save with logs + audit + telemetry.

---

## Seed + methodology mode (Phase 1)

**Seed:** the five-piece list (P1 data → P2 scene → P3 detail → P4 hud → P5 plan). **Inherited mode:** Standard default, generator-weighted toward concrete spec text. **Alternative considered:** Contrarian-rethink (Framer-weighted — center on attacking the 3D/chains/keep-set inheritances); rejected as the run mode (the inheritances are one-to-two days old, user-stated, and already counter-tested), but its two sharpest challengers are GENERATED below (flat-force default; no-3D). **Decision: default.**

---

## P1 — Loading & data (principal spec + one inversion)

**P1-A (principal).** State machine `loading → ready | error`. Loading: the canvas boots immediately with a subtle "loading the atlas… (7.7 MB)" chip; parse runs `await fetch → res.json()` (~100–200 ms — one frame hitch acceptable, no worker needed at this size). Version check: `data.schema !== "venture-atlas/1"` → the **error card**: full-screen, warm-styled, shows the found version, the expected version, the counts if parseable, and the regeneration command (`python3 docs/visualisation/inquiries2visualisationsJSONmaker.py --out app/public/data.json`); file >15 MB → a non-blocking hint quoting the flip-trigger (`--path` mode exists). Never a blank canvas. The shim verbatim from the contract: `Date.parse` per ISO field; `body.text ?? fetch(body.href)`; counts from envelope. **Derived indexes (the internal data API):** `byId: Map` · `degree: Map` · `edgesByType: {continuesFrom[], related[], other[]}` (drawable = resolved only) · `edgesByNode: Map` (both directions, incl. raw-target edges for the detail list) · `memberOf/groupById` · `staleDomain: [minDays, maxDays]` fitted at load · `recent: top-10 by lastWorkedAt`.
*Tests:* actionable immediately; every element traces to a task or a probe. **Principal.**

**P1-inv — "precompute the indexes in the adapter" (Inversion at the data boundary).** *Tests:* fails on the settled authority order — the contract emits what the record SAYS (data-truthful); degree/membership/staleness-domain are VIEW derivations that would stale the moment a lens changes or a node filters; and client cost is ~5 ms for 228 nodes. Killed with the stated why. (One nuance kept: `group` ids ARE in the data — that's record-derived chain fact, not view state; the boundary holds.)

## P2 — Scene (principal spec + the two required challengers)

**P2-A (principal).**
- **Layout:** group anchors on a golden-angle spiral ring (`angle = i * 2.39996 rad`, `radius = R0 + R1·sqrt(i)`, `y = jitter(±4)`), anchor radius ∝ `2 + 1.2·sqrt(members)` (the 23-giant gets a wider local sphere, not a wider ring slot); members on a fibonacci sphere around their anchor (`r = 2.5 + 0.35·sqrt(members)`); the 56 standalones as a **thin outer dust shell** (they read as "context, unclustered" — putting them center-stage would over-weight the least-connected; DT-planetarium supports: faint stars at the field's edge). Tunables named: R0=14, R1=6, jitter, local radii — build-time constants.
- **Node visuals:** color = the **relative staleness ramp** — `t = clamp(days/staleDomain.max)` lerped warm-ember (worked-today) → cool ash-blue (oldest); superseded at 40% opacity; ACTIVE gets a slow pulse beacon (graceful at zero — no special-casing needed, it's just a per-status material); hub size = `0.42 · (1 + 0.18·log2(1+degree))` capped ×2 (degree IS meaning — count of recorded relationships).
- **Edge sets:** three `LineSegments` objects — `continuesFrom` (solid, warm, always visible), `related` (thin, cool, `visible=false` by default → ON for the selected node's neighborhood via a small selection-local rebuild ≤32 segments), `other` (the 14-type long tail: one dashed default style, same on-selection policy; type name shown in the detail edge list). Raw-target edges: never drawn; listed in detail.
- **Labels:** 34 group chips (the demo's `makeChip`, truncated ~36 chars) + one hover sprite + the focused node's label. Never 228.
- **Interactions:** the keep-set verbatim (orbit/zoom; click = fly-to; double-click = detail; double-click empty = home) + `#node-id` deep-link (set on focus, honored on load with a fly-to).
*Tests:* every policy carries its probe number; scrutiny survives (the hairball and label-noise failure modes are the policies' explicit targets). **Principal.**

**P2-inv1 — flat force-directed as the DEFAULT view (challenges the chains-default inheritance).** *Tests:* generated honestly — force layouts are the graph-tool default (DT-native: Obsidian) and need zero grouping logic. Killed for DEFAULT on three grounds: (a) the corpus HAS semantic structure (34 measured chains) a force layout dissolves into degree-blobs; (b) the roll-up/venture reading (the map's canon meaning) needs the group spine; (c) the keep-set's fly-to/chip model presupposes stable anchors — force positions churn per load. **Survives as the `flat` LENS** (already in the lens set — where it is honest: "show me pure connectedness").

**P2-inv2 — "drop 3D; a 2D canvas is more useful" (system-level frame challenger, required by the audit).** *Tests:* genuinely stated — 2D wins on label density, scanability, and dev speed; most graph tools are 2D for reasons. Killed against THIS ask on the user's own words ("render the 3d thinking space" — the 3D-ness is explicit) and the enjoyment purpose (the inhabitable-space feeling is a named motivation, not decoration); the usefulness gap 2D targets is closed instead by the HUD organ (search/recent/anomalies are 2D overlays already). Recorded as an honest trade acknowledged, not a dodge: the design puts every text-critical surface (search, lists, detail) in 2D DOM and keeps 3D for the space itself. **Killed-with-absorption.**

## P3 — Detail (principal spec + the renderer slot both-costed)

**P3-A (principal).** Layout keeps the demo's two-panel shape. Left: kind badge (INQUIRY / VENTURE for group tiles / ATLAS for root) · title · **meta chips from frontmatter + node fields** (status, flowType, created, last-worked w/ relative form) · the events strip (a tiny 10-dot activity row) · **the edge list**: grouped by type, each edge showing its full note (the parenthetical annotations are exactly this panel's content), resolved targets clickable (fly-to), raw-target edges listed with a 📄 file / ✏ prose marker, un-drawable stated honestly · group membership panel (members, id-lookup, click = fly-to) · **open-in-editor**: a copy-`repoPath` button always + an optional `vscode://file/{basePath}/{repoPath}` link when a `basePath` app-config is set (NO schema change — the absolute prefix is app config, stated). Right: the rendered body.
**The renderer slot (Critique settles) — both options fully costed:**
- **(a) Library:** `marked` (or markdown-it) + `DOMPurify`. Covers tables/`<details>`/nested/h4 natively; frontmatter still needs the manual strip (a 5-line fn either way); style bridged to the existing `.md` CSS (one class pass); costs two deps (~50 KB) and a sanitize step (findings are self-authored, but `<details>` passthrough means the lib path renders arbitrary HTML — DOMPurify closes it).
- **(b) Upgrade the demo's mini-renderer (~60 lines):** frontmatter-strip fn (5) · a table block (pipe-split rows into `<table>`, ~20) · `<details>/<summary>` passthrough rendered as a native collapsible (~10) · nested-list indent stack (~15) · h4 (~2) · keep everything else. Zero deps, full look-control, no raw-HTML rendering beyond the whitelisted `<details>` (XSS surface stays nil).
**Synthetic tiles:** root = the envelope rendered (counts, anomalies, generatedAt, source.commit) — the atlas's own honest cover page; group tile = label, root, member table (title + last-worked), the venture reading in one line ("a thread-continuity chain of N traverses").
*Tests:* the trust property is the panel's spine — every element is authored data or labeled-mechanical. **Principal; slot open.**

## P4 — HUD / controls (principal spec)

**P4-A (principal).** **Search:** an input top-center; `/` focuses; ranks `prefix > word-boundary > substring` over title+slug+id, ties by recency; a dropdown of ≤12 results (title + relDate + group); Enter/click = fly-to; Esc clears. **Lenses:** a segmented control — `chains` (default) / `month` (synthetic month-groups derived client-side — grouping-optional honored: a derivation, not data) / `status` (color-grouping only — regrouping by 2 statuses is spatial noise; tested and shaped down to a color/filter mode) / `flat` (no groups; P2-inv1's honest home). **Filters:** status toggles (complete/active/superseded); date-range slider deferred (LATER — no task fails without it; the recent-list + ramp cover recency tasks). **Recent:** a "last 10 worked" flyout list (click = fly-to) — the "what did I work on recently" task's direct answer. **Anomalies:** a small ⚠ n badge by the counts; click opens the counters table (dateOnlyStamps, clamped, unresolved, missingBodies, skippedDirs) — the honesty surface, one click deep. **Counts HUD:** nodes · edges · groups + generatedAt (staleness of the SNAPSHOT itself is information).
*Tests:* every control answers a named task; nothing here needs 3D. **Principal.**

## P5 — Tiering + build plan (the matrix + sequence)

**The feature×task matrix (rows = all candidates; ✓ = the task fails without it / ○ = improves it):**

| Feature | find-X | recent | continues-what | where-am-I | stale-aging | active-now | anomalies | read-well | jump-editor | feels-alive | TIER |
|---|---|---|---|---|---|---|---|---|---|---|---|
| load+shim+error card | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **MUST** (P1) |
| search + fly-to | ✓ | | | ○ | | | | | | | **MUST** |
| group layout + chips (chains default) | | | ✓ | ✓ | | | | | | ○ | **MUST** |
| continues-from edges always-on | | | ✓ | ○ | | | | | | | **MUST** |
| related/other on-selection | | | ○ | | | | | ○ | | | **MUST** (policy, not extra work) |
| staleness ramp (relative) | | ○ | | | ✓ | | | | | ○ | **MUST** |
| status accents + active beacon | | | | | ○ | ✓ | | | | | **MUST** (cheap) |
| detail view w/ faithful renderer | | | ○ | | | | | ✓ | | | **MUST** (the quality-budget organ) |
| edge list w/ notes + raw-targets | | | ✓ | | | | ○ | ○ | | | **MUST** |
| copy-repoPath | | | | | | | | | ✓ | | **MUST** (one button) |
| anomalies panel | | | | | | | ✓ | | | | **MUST** (one badge + table) |
| counts + generatedAt HUD | | | | ○ | ○ | | ○ | | | | **MUST** (trivial) |
| recent-list | | ✓ | | | | | | | | | **MUST** |
| lens toggle (month/status/flat) | | | | ○ | ○ | | | | | ○ | **NICE** (chains alone serves the ✓-tasks; lenses improve) |
| deep-link #id | ○ | | | ○ | | | | | | | **NICE** (tiny) |
| hub sizing | | | ○ | ○ | | | | | | ○ | **NICE** (tiny) |
| events strip in detail | | ○ | | | ○ | | | | | | **NICE** |
| vscode:// link (basePath config) | | | | | | | | | ○ | | **NICE** (copy-path already MUST) |
| keyboard nav beyond `/` | ○ | | | | | | | | | | **NICE** |
| ambient idle rotation | | | | | | | | | | ○ | **NICE** (taste) |
| date-range filter slider | | ○ | | | ○ | | | | | | **LATER** (no failing task) |
| group collapse/expand | | | ○ | ○ | | | | | | | **LATER** (revisit at ~1,300 — extrapolation says it becomes NICE/MUST then) |
| force-layout physics polish | | | | | | | | | | ○ | **LATER** (the flat lens ships static) |
| within-doc find | | | | | | | | ○ | | | **LATER** (browser ctrl-F suffices — noted) |
| knowledge lens (canon/seeds) | | | | | | | | | | | **GATED v2** (exercised-definition; hook = the lens enum's open slot) |

Glanceability honored: the ramp + beacon + recent-list + counts ARE the ambient layer (C4's note) — all MUST/cheap-NICE.

**Build sequence (runnable checkpoint after each):** 0 scaffold (vite + react + three; the app boots with the error card showing "no data") → 1 P1 data (loads real data.json; console-verified indexes) → 2 P2 scene (the space renders; fly-to works) → 3 P3 detail (read a real finding well) → 4 P4 hud (search/lenses/recent/anomalies) → 5 polish (deep-link, hub sizing, events strip, idle rotation as time allows). **v2 hook:** the lens enum + node-kind switch ship open but contentless. **Acceptance:** each of the ten tasks demonstrated live or explicitly deferred with its tier row cited.

## Mechanism evidence

- **DT-native (Obsidian/GitHub-graph/Gource/three.js examples):** file-as-node graphs at this scale run flat force by default — which is exactly why P2-inv1 was generated seriously; their lesson ADOPTED: labels-on-demand (hover), not always-on. Gource's contribution: time-as-motion is evocative but a different tool (timeline replay logged as a far-LATER idea, not tiered).
- **DT-different (planetarium/star-atlas):** constellations = named groups drawn as faint connective lines with the NAME on the constellation, not every star = exactly the 34-chips-not-228 policy; magnitude = degree (hub sizing); the atlas's labeling economy is centuries-tested for "many points, few labels." Supporting illustration (theorems-never rider).
- **Absence, patch-level:** the error card, the anomalies badge, the generatedAt display — all absent from the demo, all cheap, all honesty-surfaces. Redesign-level both directions: (missing) a "map health" concept — the map itself telling you the snapshot is stale (generatedAt vs today — one comparison, added to the counts HUD as a subtle "snapshot N days old" line, NICE); (already-present) the demo's effLast roll-up IS the venture-recency feature — no new work, just real data.
- **CM-ADD ("must work in a fetch-blocked artifact embed"):** the inline body default already covers bodies; data.json itself would need bundling (`import data from './data.json'` at build) — one line of difference, noted in the build plan as a build-variant flag, not a v1 requirement.
- **CM-REMOVE ("single user"):** shared/hosted (a static host serving the app + data) — nothing in the design blocks it; auth/privacy out of scope (the record is personal) — noted only.
- **Extrapolation (~1,300 nodes, 12+ months):** the ring accommodates ~150 groups before crowding (radius formula grows sqrt); group collapse/expand and label LOD graduate LATER→NICE/MUST around ~600 (aligned with the contract's flip-trigger); the staleness domain self-adjusts by construction; search unaffected. The design ages without migration.

## Inherited Frame Audit

Central inheritances: chains-default (challenged by P2-inv1 — killed for default, survives as lens) · the 3D frame itself (challenged by P2-inv2 — killed on the user's explicit words + purpose 4, with the text-surfaces-in-2D absorption) · the adapter-side/client-side boundary (challenged by P1-inv — killed on the authority order) · the keep-set (challenged implicitly by both inversions; survives as the liked base). Every load-bearing commitment has a generated-and-tested challenger → **the audit does not fire.** Piece-level inversions: P1 ✓ (P1-inv) · P2 ✓ (two) · P3 ✓ (the slot itself is a genuine both-costed fork; plus the lib-vs-upgrade XSS inversion inside it) · P4 ✓ (status-lens-as-grouping inverted to color-only — recorded above) · P5 ✓ (tier-by-taste inverted to tier-by-task-failure — the rubric IS the inversion of the default).

## Assembly check

The five organ specs + the matrix + the sequence compose into **one buildable app** with emergent properties none carries alone: the honesty pipeline runs END-TO-END (adapter counters → envelope → anomalies badge → detail's raw-target listings — the no-silent-drops norm has a UI for the first time); the trust property closes its loop (authored data → faithful renderer → provenance path back to the file); and the ten tasks map onto organs with no orphan task and no featureless organ. **RE-TEST TRIGGER check:** no survivor contradicts a collapse; the renderer slot remains the single open fork, both branches fully specified for the gate.

## Telemetry

Generators 4/4 (Combination = the organ specs · Absence patch+redesign-both · DT native+different · Extrapolation) · Framers 3/3 (Lens = glanceability/debugging reads · CM ADD artifact-embed + REMOVE single-user · Inversion ×5 incl. one system-level [no-3D]). Convergence: YES — the matrix's MUST tier emerged identically from task-analysis, probe-policies, and the honesty-pipeline reading (3 independent grounds). Survivors tested 24/24 light. Per-piece log: P1 [Comb, Inv] ✓ · P2 [Comb, DT×2, Inv×2] ✓ · P3 [Comb, Inv(slot+XSS)] ✓ · P4 [Comb, Inv(status-lens)] ✓ · P5 [Comb, Lens, Inv(rubric)] ✓ — all meta-decision pieces inversion-satisfied. Failure modes: none observed (the uncomfortable challengers — no-3D, flat-default — were generated and tested, not skipped; no early frame lock — the renderer fork is deliberately left open for the gate). **Overall: PROCEED.** Slots to Critique: the renderer path (a/b) · confirm the tier assignments · confirm the standalone-dust and status-lens-as-color shapes.
