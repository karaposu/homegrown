# Surfacing — the JSON contract's field: producible vs consumable

## User Input

PURPOSE: Bring into view BOTH sides of the JSON contract: (A) what the inquiry folders can actually YIELD as JSON — per-field, edge cases, REAL probe values (read-only parse probes = surfacing's own enumeration, not the adapter build); (B) what the visualizer component CONSUMES field-by-field; (C) the BRIDGE items (transforms + the body-delivery axis); (D) stance + extensibility. Tag relevance; do NOT design the schema. Save to this inquiry's surfacing.md.

- **Mode:** artifact (A, B) + possibility (C, D) · **Entry:** signal-first · **Territory:** explicit-bounded

---

## Traversal Trace

| # | Region | Item identifier(s) | Relevance | Conf | Note | Recency |
|---|---|---|---|---|---|---|
| 1 | A | size probe: **226** finding.md files, **7.12 MB total**; sizes min 10.4 KB / p50 ~27.5 KB / p90 ~50 KB / **max 168 KB** (`2026-05-23_15-20__routeman…`) | core | HIGH | inline-all bodies ≈ 7.5–8 MB JSON after escaping — loadable locally; lazy-path variant ≈ sub-MB initial | `{source: filesystem, value: 2026-07-12 (live)}` |
| 2 | A | status specials: ACTIVE = only this inquiry itself; SUPERSEDED = `2026-07-07_18-59__finding_seeds…`; everything else COMPLETE | sub | HIGH | ACTIVE-fallback body rule touches ~1 folder at a time, confirmed again | same |
| 3 | A | non-standard dirs under `devdocs/inquiries/`: `_archive/`, `diagnostics/`, `diagnostics_from_other_projects/` | sub | HIGH | folder filter = `^20\d\d-\d\d-\d\d_\d\d-\d\d__` — clean include rule | same |
| 4 | A | ★History stamp variance MEASURED (the 10-46 R2 check, resolved here): **1,325** lines `- YYYY-MM-DD_HH-MM…` vs **372** lines date-only `- YYYY-MM-DD…` (May era) | core | HIGH | parser needs BOTH patterns; date-only → midnight truncation | same |
| 5 | A | ★the midnight-truncation BUG (probe-caught): May folder parsed to `lastWorkedAt 00:00` **earlier than** `createdAt 14:39` — clamp rule needed: `lastWorkedAt = max(createdAt, max(history stamps))` | core | HIGH | a real pre-build catch; the probe paid for itself | same |
| 6 | A | ★edge-type census (Relationships line-starts): RELATED **487** · CONTINUES FROM **180** · SYNTHESIZES FROM **14** + SYNTHESIZES **3** · GROUNDS IN **9** · BRANCH_OF **6** · SUPERSEDED BY **1** — **six native types**, not three | core | HIGH | the 10-46 dive under-counted the enum; schema needs the full set (open enum) | same |
| 7 | A | ★the "~24 unresolved" CONTINUES-FROM lines DECOMPOSED: mostly **file-targets** (`devdocs/how_articulate_simple_should_be.md`, `devdocs/sweeps/*.md`, `devdocs/top_7…`) and **prose-targets** ("the paper-harvest (papers 1,2,3…)"); exactly **1** genuinely missing folder (renamed: `2026-05-23_11-00__navigation_surfacing_unification_recheck`); 2 grep false-positives (History narrative lines) | core | HIGH | edges need a target-type duality: folder-id vs raw-text; nothing needs dropping | same |
| 8 | A | edge ANNOTATIONS: the parenthetical context on Relationships lines is rich prose (samples read; some >400 chars) — producible as edge labels/notes | core | HIGH | keep full in data; truncate in view | same |
| 9 | A | History event counts per folder: min 1 / p50 7 / max 10 (n=228) — a small per-node activity series (event stamps) is producible | sub | HIGH | supports future activity displays; tiny cost | same |
| 10 | A | ★two full PROTOTYPE-PARSES succeeded (one 2026-07 routed folder, one 2026-05 extended-surfacing folder): id/slug/title/status/flowType/createdAt/lastWorkedAt/events/body{file,path,bytes}/edges[{type,target,targetRaw,note}] all extracted by regex; real JSON instances in workspace | core | HIGH | the producible side is DEMONSTRATED, not argued; flowType = era info, free | same |
| 11 | A | wider extractable space (name-only): routelister.md route rows (373) · `_route.md` identities (490) · docarchive file lists · `_seed.md` (38) · Iteration counts · finding frontmatter (status/model/refines) · _branch Question text | sub | HIGH | producible-but-beyond-v1; extensibility targets | same |
| 12 | B | the node contract consumed by the demo: `{id, kind, title, parentId, childIds[], pos[3], createdAt, lastWorkedAt, md}`; **timestamps are epoch-ms NUMBERS** (`fmtDate`/`relDate` arithmetic; `NOW - t` day math) | core | HIGH | ISO strings must be converted (adapter or loader) — a named transform | `{source: none, value: null}` |
| 13 | B | consumption map: `effLast()` recursion reads `lastWorkedAt` over `childIds` (roll-up); DetailView reads kind badge · title · createdAt · eff.t + via-child-TITLE · childIds count · parent link · per-child {title, effLast} · `md` body STRING · slug chip; map view reads pos · kind (geometry/color) · chips (root+module) · parent→child edge pairs · COUNTS (HUD); interactions need id-addressable nodes | core | HIGH | from the 10-46 preserved contract | `{source: none, value: null}` |
| 14 | B | what the demo does NOT consume (= additive extension points): status · edge types beyond parent→child · groups/lenses · provenance paths · event series · flowType | core | HIGH | the consumable side is a REFERENCE, not a constraint — the component is editable (standing correction) | `{source: none, value: null}` |
| 15 | C | named transforms: ISO→epoch-ms · slug→title prettify+truncate · chain-component id (union-find; OPTIONAL group data per the correction) · kind mapping (`inquiry` now; `group`/`canon`/`seed` later) · pos (adapter-generated vs component layout — demo generates its own from data at build) · envelope counts (the user's "number of nodes" guess = HUD input) | core | HIGH | each is a bridge decision for downstream | `{source: none, value: null}` |
| 16 | C | ★THE BODY-DELIVERY FACT: the component is JSX/React — it runs under a bundler dev-server or static hosting in EVERY deployment (it is not a file:// artifact); `fetch()` of relative static paths therefore works wherever the component works at all. "No server" (the v1 doctrine) = no BACKEND/no maintained service — static file serving is already assumed. → path-based md is NOT structurally blocked; the real tradeoff = single-file atomic snapshot (~8 MB) vs lazy per-node fetch (sub-MB initial + N small requests). AND: path + inline can COEXIST (inline body for render, path for provenance/jump-to-editor) | core | HIGH | this unblocks the user's "full finding.md path" guess — it was never in conflict with the doctrine | `{source: none, value: null}` |
| 17 | D | stance/extensibility items (name-only): versioned envelope + generatedAt stamp · open kind enum (v2: canon/seed) + open edge-type enum (probe 6 shows why) · single JSON vs sidecar bodies dir · the 10-46 R1 Meaning-gaps (stamp-format = RESOLVED by probes 4–5; naming rule low; layout low) | core | HIGH | the schema must not need a breaking change at v2 | `{source: none, value: null}` |
| 18 | D | the four user guesses mapped to landing spots: number-of-nodes → envelope counts · titles → node.title (+ raw slug) · full finding.md path → node.body.path (provenance/lazy-ref; probe 16 makes it legal) · subnode-relevant info → edges + per-node child summaries (derivable client-side from edges, or nested) | core | HIGH | all four guesses land; none conflicts | `{source: none, value: null}` |

## State Summary

- **Territory echo:** (A) the folders' producible side (probed) · (B) the component's consumable side (from the preserved contract) · (C) bridge items · (D) stance/extensibility.
- **Purpose echo:** field-level view of both contract sides + the bridge facts; no schema designed here.
- **Coverage map:** A confirmed (probed live; 2 full prototype-parses); B confirmed (contract preserved in 10-46 `_branch.md`, in context); C confirmed (the body-delivery fact is a property of the component's own tech stack); D scanned (named).
- **Confirmed-absent:** no per-folder machine-readable manifest other than `_state.md` (it IS the manifest, in markdown); no existing JSON schema anywhere in the repo for this purpose (fresh design space); no CI/build tooling assumptions to inherit.
- **Concept-names:** the midnight-truncation clamp (trace 5) · target-type duality (trace 7) · the six-type edge enum (trace 6) · the body-delivery axis (trace 16) · epoch-ms transform (trace 12) · open-enum extensibility (trace 17).
- **Recency distribution:** region A live-probed today; B/C/D possibility items `source: none`.
- **Frontier flags:** none blocking — SYNTHESIZES-vs-SYNTHESIZES-FROM wording variance (trace 6) is a normalization detail for sensemaking; per-folder event-series precision (date-only era) capped at day-grain, noted.
- **Workspace-populated:** `{populated: true, populated-at: 2026-07-12_13-06, extent: A probed + 2 sample instances in workspace; B/C/D named}`.

## Telemetry

Mode artifact+possibility · signal-first · cycles: 4 (sizes/specials → stamp variance → edge census/unresolved → prototype-parses) · items: 18 traced (core 13 / sub 4 / side 0 / umbrella 1→0 after probes) · sub-phase: not fired · convergence: territory exhausted at this resolution; no uncertain-relevance item filtered · failure modes checked: territory-mis-binding (no), recency-as-verdict (no), interpretive-overstep (borderline at trace 16 — the body-delivery FACT is a property-statement about the component's stack, kept as labeling not design) · **Self-assessment: PROCEED.**
