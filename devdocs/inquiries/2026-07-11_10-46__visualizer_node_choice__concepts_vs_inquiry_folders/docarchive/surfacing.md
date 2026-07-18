# Surfacing — the node-unit decision's field

## User Input

PURPOSE: Bring into view everything the node-unit decision needs (per _branch.md of this inquiry): what the project's persistence layer ACTUALLY offers as visualizer node-data, which concept-grade artifacts already exist (so "concepts" doesn't presume fresh generation machinery), what the attached component's data contract demands, and which project purposes/consumers the map would serve. Enumerate + tag relevance; do NOT decide the node-unit. Territory = four regions: (A) the inquiry-folder corpus (empirical counts required) · (B) the existing concept-grade artifacts (empirical) · (C) the component's data contract · (D) the consumers + adjacent owned territory (possibility case). Save to this inquiry's surfacing.md.

- **Mode:** artifact (A, B, C) + possibility (D) · **Entry:** signal-first · **Territory:** explicit-bounded (no boundary-discovery)

---

## Traversal Trace

| # | Region | Item identifier(s) | Relevance | Conf | Note | Recency |
|---|---|---|---|---|---|---|
| 1 | A | corpus size: **230** dirs under `devdocs/inquiries/` (227 standard-stamped `YYYY-MM-DD_HH-MM__slug` + 1 `_archiv…` + 2 `diagnos…` non-standard) | core | HIGH | counted, not estimated | `{source: filesystem, value: 2026-07-11 (live count)}` |
| 2 | A | file coverage: `_state.md` **227** · `_branch.md` **227** · `finding.md` **225** · `docarchive/` **225** · `routelister.md` **100** · `_route.md` **104** | core | HIGH | finding coverage ≈ 99% of standard folders — the md-body field is essentially free | same |
| 3 | A | timestamps: folder-name stamp parseable in **227/227**; `_state.md` has ≥1 parseable `- YYYY-MM-DD_HH-MM` History line in **227/227** | core | HIGH | createdAt AND lastWorkedAt both derivable by regex — no generation needed | same |
| 4 | A | Status field distribution: **225 COMPLETE · 1 ACTIVE · 1 SUPERSEDED** | sub | HIGH | detail-body rule (finding.md when COMPLETE / _branch.md while ACTIVE) touches ~1 live folder at a time | same |
| 5 | A | native edges: `## Relationships` present in **219/227** · CONTINUES FROM in **157** files (**181** lines; **158** pointing at `inquiries/` paths) · RELATED in **199** files (**491** lines; **289** → `inquiries/`, **202** → canon/seeds/other files) · SUPERSEDED in **8** | core | HIGH | ~450 folder→folder typed edges + ~200 folder→canon/seed cross-layer edges — a real graph, not a dust cloud | same |
| 6 | A | time distribution: 2026-05: **53** · 2026-06: **86** · 2026-07: **88** | sub | HIGH | month-buckets = only 3 fat modules; week-grain ≈ 10–13 | same |
| 7 | A | anatomy for the contract: id = folder name · title = slug · createdAt = folder stamp · lastWorkedAt = last History stamp · md = finding.md (COMPLETE) / _branch.md Question (ACTIVE) · kind/status = Status field · edges = Relationships lines | core | HIGH | every contract field except `parentId/pos` is a regex-parse of existing runner-written files | same |
| 8 | B | `docs/canon/`: **38** md files (25 top-level + 13 in subdirs), each with an H1 title; no in-file created/lastWorked (git log could derive); cross-refs exist in prose | core | HIGH | the curated stable concept layer — native md bodies, weak native timestamps | `{source: filesystem, value: 2026-07-11}` |
| 9 | B | `devdocs/seeds/_seed.md`: **38** distinct seed ids in one global index; entries carry dates, anchors, grades, cross-refs; full §7 record bodies live inside origin findings | core | HIGH | concept-like entities that ALREADY have identity + dates + links; md body = index entry + pointer | same |
| 10 | B | `_route.md` across inquiries: **104** files; **490** concept-identity bullets (`- **name** — depth… First-seen: <stamp>`); per-identity first-seen/last-touched stamps present (verified in 1 sample; format uniformity across all 104 unverified — LOW-flag) | core | MEDIUM | disciplined per-inquiry concept individuation ALREADY EXISTS — routelister does it; cross-inquiry identity (same concept, different names/files) is the unsolved half | same |
| 11 | B | `routelister.md` across inquiries: **373** typed route rows (R-numbered) | sub | HIGH | routes = directional concepts; another existing individuation layer | same |
| 12 | B | `devdocs/*.md` loose layer: ~21 uncatalogued files (traversal_sample.md, next_steps_for_sustrall.md, …) | side | MEDIUM | visualizable but uncurated; no uniform schema | same |
| 13 | C | the contract: `{id, kind: root\|module\|sub, title, parentId, childIds[], pos[3], createdAt, lastWorkedAt, md}` · strict 3-level tree · parent→child lines ONLY (no cross-link rendering in the demo) · `effLast()` roll-up · every node needs an md body · `pos` is generated (layout), not data | core | HIGH | from _branch.md Source Input | `{source: none, value: null}` |
| 14 | C | the middle level: the demo's "module" tier has NO native counterpart in a flat inquiry pile — candidate fillers: CONTINUES-FROM thread-chains (venture-shaped) / time buckets / topic clusters / canon-domain assignment | core | HIGH | the REAL design gap; the binary A-vs-B question doesn't touch it | `{source: none, value: null}` |
| 15 | C | mismatch note: inquiry Relationships form a cross-linked DAG, not a tree — the demo renders tree edges only; adaptation (extra edge lines) is small (the `edgeLines()` helper already draws arbitrary segment sets) | sub | HIGH | component-fixedness ambiguity from MQ4 — flagged, not decided | `{source: none, value: null}` |
| 16 | C | tech side-note: `THREE.sRGBEncoding`/`outputEncoding` removed in three.js r152+ (→ `outputColorSpace`); the `\!==`/`\!/` sequences in the pasted source are shell-escape artifacts, not code bugs | side | HIGH | one-line fix at build time | `{source: none, value: null}` |
| 17 | D | WHY-purposes (from _branch): navigation/orientation (the unbuilt "isolated navigational session" organ) · monitoring/health (staleness; the demo's 90-day flag) · knowledge-view · enjoyment | core | HIGH | purpose determines node-unit fit; preserved open | `{source: none, value: null}` |
| 18 | D | the 2026-07-10_15-30 selections-ledger adjudication: folder-native record + DERIVED-ON-DEMAND VIEW pattern; the writer-scale (runner-mechanical > protocol-LLM > habit-run) predicts record survival | core | HIGH | a visualizer that PARSES runner-written files = a derived view at the mechanical end; one that needs periodic LLM regeneration = the habit end | `{source: none, value: null}` |
| 19 | D | the suspicion-principle: a standing between-loop support is designed-or-dead until exercised; trust is gated, activity isn't | core | HIGH | applies to the visualizer itself AS a build | `{source: none, value: null}` |
| 20 | D | adjacent seeds as consumers/kin: p29-S1 (structure-propagation retrieval over the `_route` link-graph) · p25-S2 (recall-marks / staleness-visibility) · rx-S7 (venture-compile — a chain-level md body would BE one) · rx-S1 (medium-preservation signal — a map that shows record health) | sub | HIGH | name-only; no development here | `{source: none, value: null}` |
| 21 | D | venture vocabulary (canon): one inquiry folder = one traverse's record (canon-verbatim); venture = thread-continuity chain → CONTINUES-FROM chains are venture-shaped groupings | core | HIGH | gives the middle level a project-native NAME | `{source: none, value: null}` |

## State Summary

- **Territory echo:** (A) inquiry corpus · (B) existing concept-grade artifacts · (C) the component contract · (D) consumers + adjacent owned territory.
- **Purpose echo:** what the persistence layer offers as node-data; which concepts already exist; what the contract demands; what the map would be for. No node-unit decision here.
- **Coverage map:** A confirmed (counted) · B confirmed (counted; one LOW-flag on `_route.md` format uniformity) · C confirmed (from Source Input) · D scanned (possibility-case naming, warm-context sourced).
- **Confirmed-absent:** no per-concept markdown bodies exist anywhere for FREE-FLOATING extracted concepts (the would-be "concept node" md field has no native source — canon/seed/route entries are the only concept-shaped things with native text); no native "module" tier exists in the flat corpus.
- **Concept-names:** venture-shaped grouping (canon vocabulary, trace 21) · derived-on-demand view (trace 18) · writer-scale (trace 18) · cross-inquiry concept identity (trace 10, the unsolved half) · the middle-level gap (trace 14).
- **Recency distribution:** region A/B live-counted today; C/D possibility items `source: none`.
- **Frontier flags:** (1) `_route.md` stamp-format uniformity across all 104 files unverified (sampled 1) — matters only if `_route` identities become nodes; (2) History-stamp format variance in the oldest (May) folders unverified beyond ≥1-parseable — matters for lastWorkedAt precision, LOW risk.
- **Workspace-populated:** `{populated: true, populated-at: 2026-07-11_10-49, extent: A+B counted, C+D named}`.

## Telemetry

Mode artifact+possibility · signal-first · cycles: 4 (A counts → B counts → edge-target honesty check → C/D naming) · items: 21 traced (core 12 / sub 5 / side 3 / umbrella 0) · sub-phase: not fired · convergence: territory exhausted at this resolution; no uncertain-relevance item filtered; workspace-overload not approached · failure modes checked: territory-mis-binding (no), recency-as-verdict (no — counts are data, not relevance), interpretive-overstep (adjacency facts only; the "real graph not dust cloud" note is a count-reading, borderline-kept as step note) · **Self-assessment: PROCEED** (two LOW frontier flags carried).
