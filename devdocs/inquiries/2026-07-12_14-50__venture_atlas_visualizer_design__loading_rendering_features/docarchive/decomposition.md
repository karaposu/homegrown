# Decomposition — the visualizer spec's piece-set

## User Input

devdocs/inquiries/2026-07-12_14-50__venture_atlas_visualizer_design__loading_rendering_features/ — read sensemaking.md (SV6 + C1–C4 + the ten tasks + five organs) + _branch.md. Lean; pieces P1 loading/data · P2 scene · P3 detail · P4 hud/controls · P5 tiering + build plan; granularity checks as given.

---

## Step 1 — Coupling map (coarse)

Elements: fetch/loading/error plumbing · the shim · derived indexes · layout · node visuals · edge sets · labels · interactions · deep-links · the renderer path · frontmatter handling · edge-list display · open-in-editor · search · lenses · filters · recent-list · anomalies panel · the tier rubric · the build sequence · the aesthetic keep-set.

Coupling: plumbing↔shim↔indexes STRONG (one data pipeline) → P1. Layout↔node-visuals↔edge-sets↔labels↔interactions STRONG (one scene graph) → P2. Renderer↔frontmatter↔edge-list↔editor-links STRONG (one reading surface) → P3. Search↔lenses↔filters↔recent↔anomalies MODERATE-strong (one control surface; all consume P1's indexes) → P4. Tiering↔build-order WEAK to each organ's internals but strong to their feature ROWS → P5 (cross-cutting consumer). The aesthetic keep-set: a property riding P2/P3 (not a piece). The ten-task test: P5's rubric (not a piece). The renderer decision: P3's central option-slot (not a piece). Valleys: data→views (indexes as API); map-view→reading-view (different surfaces, linked by selection); organs→plan (rows flow up).

## Step 2 — Boundaries (top-down)

Five pieces: **P1 loading & data** · **P2 scene** · **P3 detail** · **P4 hud/controls** · **P5 tiering + build plan**.

## Step 3 — Validate (bottom-up)

Atoms: loading state, version check, error card, shim lines, index builders (→P1); ring/cluster/cloud layout, ramp, accents, hub sizing, three edge sets, chips/hover/focus labels, orbit/fly-to/detail-open, #deep-link (→P2); renderer options, meta chips, edge list incl. raw-targets, copy/open path, id-lookup panels, synthetic tiles (→P3); search box+rank, lens switch, status filter, recent list, anomalies panel, counts (→P4); the feature×task matrix, MUST/NICE/LATER, scaffold→…→polish order, v2 hook note, acceptance line (→P5). No atom split across boundaries; none grouped wrongly. **Agreement — high confidence.**

## Step 4 — Question tree

- **P1 — Loading & data:** *How does the app get from `fetch('data.json')` to render-ready structures, honestly?*
  Verify: [ ] loading state during the ~150 ms parse; [ ] schema-version check (`venture-atlas/1` only) + visible error card (never blank); [ ] the shim verbatim from the contract (ISO→ms · counts · `text ?? fetch(href)`); [ ] derived indexes specified: id→node Map, degree, per-type edge arrays, group membership, staleness domain (min/max days, auto-fit, re-fit per load); [ ] no schema mutation anywhere.
- **P2 — Scene:** *How does the map render 228 nodes / 34 groups / 744 edges legibly and likably?*
  Verify: [ ] layout rule (golden-angle group ring, radius ∝ member count incl. the 23-giant, local member clusters, standalone cloud) with tunables named; [ ] node visuals (relative staleness ramp; superseded dimmed; active beacon graceful-at-zero; hub size ∝ degree); [ ] the three edge sets as separate `LineSegments` with visibility policy (continues always / related on-selection / long-tail one default style); [ ] labels: 34 group chips + hover + focus only; [ ] keep-set interactions + `#node-id` deep-link.
- **P3 — Detail:** *How does the reading view render a REAL finding faithfully and connect it onward?*
  Verify: [ ] the renderer slot with BOTH options fully stated (lib: marked+DOMPurify, frontmatter still stripped, ~40 KB; upgrade: ~60 lines for tables/`<details>`/nested/h4 + frontmatter-strip, zero deps) — Critique settles; [ ] frontmatter → meta chips (status/model), never rendered as text; [ ] the edge list with full notes, raw-target edges listed (not drawn); [ ] open-in-editor/copy `repoPath`; [ ] group/subnode panels via id-lookup; [ ] synthetic root/group tiles (mechanical bodies).
- **P4 — HUD/controls:** *How does the user command the space?*
  Verify: [ ] search (substring+rank over title/slug/id; keyboard `/` focus; Enter = fly-to); [ ] lens toggle (chains default / month / status / flat); [ ] status filter + recent-list ("last 10 worked"); [ ] anomalies panel (the envelope's honesty counters, one click away); [ ] counts in HUD; [ ] every control consumes P1's indexes only.
- **P5 — Tiering + build plan:** *Which features are MUST/NICE/LATER against the ten tasks, and in what order does the build proceed?*
  Verify: [ ] the feature×task matrix covers every candidate from surfacing region E; [ ] MUST = a task fails without it (with the glanceability note honored); [ ] the build sequence (scaffold → P1 → P2 → P3 → P4 → polish) with a runnable checkpoint after each; [ ] the v2 lens hook placed but contentless; [ ] acceptance = the ten tasks demonstrably served or explicitly deferred.

## Step 5 — Interface map

| From → To | What flows | Direction |
|---|---|---|
| The 13-01 contract → P1, P3 | the shim spec; body text/href semantics; anomalies fields; repoPath | one-way, upstream constant |
| Sensemaking C1–C4 → all | endpoint (build follows); the app home; organ boundaries; search shape; policies | one-way |
| P1 → P2, P3, P4 | the derived indexes (the internal data API: node Map, degree, edge arrays, groups, staleness domain) | one-way |
| P2 ↔ P3 | selection state (click → detail; detail links → fly-to) | bidirectional, one small state object |
| P4 → P2 | lens/filter/search commands (visibility + camera) | one-way |
| P1–P4 → P5 | their feature rows for tiering; their build chunks for ordering | one-way |

Assumptions check: P2 assumes the staleness domain comes fitted from P1 (stated); P3 assumes `body.text` present in inline mode with the `href` fallback (contract); P4 assumes all nodes in memory (inline default — true; in path mode search still works, only bodies lazy); P5 assumes organ specs are final before ordering (order enforces). No hidden coupling found.

## Step 6 — Dependency order

**P1 → P2 → P3 → P4 → P5** (P2/P3/P4 could partially parallel after P1, but lean sequential kept — P3's edge-list reads sharper after P2's edge policy; P4's commands need P2's camera/visibility surface). Critique then settles P3's renderer slot and ranks P5's tiers.

## Step 7 — Self-evaluation (minimum 3)

| Dimension | Verdict |
|---|---|
| Independence | PASS — each organ's question answerable from sensemaking + its stated interfaces |
| Completeness | PASS — the deliverable's parts map: HOW-it-loads (P1), HOW-it-renders (P2+P3), features (P2–P4 rows), required-vs-nice (P5), build plan (P5); the aesthetic rides P2/P3; nothing in _branch.md's Goal unowned |
| Reassembly | PASS — P1's pipeline + P2/P3/P4's surfaces + P5's tiers and order = the build-ready spec answering both halves of the user's question (how it should do this; what features are required to be useful). Determination-mechanism check: P3's renderer slot is settled by Critique BEFORE the build plan finalizes (P5 consumes the settled slot) — provided, not presupposed |

No failure modes observed (five pieces proportionate to five organs; P5 is the only cross-cutting piece and is a consumer, not a god-piece). **PROCEED.** Next: Innovation generates the tiered feature spec + per-slot options; Critique settles.
