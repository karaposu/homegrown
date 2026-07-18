# Surfacing — the visualizer design's field

## User Input

PURPOSE: what the visualizer design needs — (A) the real data's render-relevant distributions (probed); (B) real finding-markdown vs the demo's mini-renderer (probed); (C) the demo's feature inventory + 228-scale gaps; (D) inherited commitments in force; (E) the candidate-feature space per purpose (possibility case; no selection). Save to this inquiry's surfacing.md.

- **Mode:** artifact (A–D) + possibility (E) · **Entry:** signal-first · **Territory:** explicit-bounded

---

## Traversal Trace

| # | Region | Item identifier(s) | Relevance | Conf | Note | Recency |
|---|---|---|---|---|---|---|
| 1 | A | group sizes: 23, 15, 10, 10, 10, 9, 9, 7, 7, 6, 5, 5, … (34 groups) · **56 standalones** | core | HIGH | layout must handle one 23-member giant + a long tail + a standalone cloud | `{source: filesystem, value: 2026-07-12 (live)}` |
| 2 | A | degree: max **16** (three hubs: routeman-discipline-design, task-define meaning-layer, task-define process-layer) · median 5 · 224/228 nodes have ≥1 edge | core | HIGH | hub-emphasis is meaningful; all-edges-on = hairball around hubs | same |
| 3 | A | ★edge-type mix IN THE WILD: continues-from 180 · related 505 · synthesizes-from 17 · grounds-in 9 · targets 6 · refines 5 · diagnoses 3 · challenges 3 · corrects 2 + **11 more low-count types** (impacts, meta, unblocks, operationalizes, feeds, reconciles, compares-with, methodology-precedent, evaluates, supersedes, superseded-by) — the open enum caught **14 types beyond the six known**; the pass-through clause worked exactly as designed | core | HIGH | edge policy needs: distinct styles for the frequent types + ONE default style for the long tail; resolved 472 vs raw-target 272 (raw-target edges are LISTABLE in detail, not drawable to a node) | same |
| 4 | A | status mix: 227 complete · 1 superseded · **0 active in the snapshot** (generated before this inquiry existed; next regeneration adds it) | sub | HIGH | active-beacon feature has usually 0–1 targets — cheap, high-signal | same |
| 5 | A | ★staleness spread: ≤7d **67** · ≤30d 39 · ≤90d 122 · **>90d 0** — the corpus is ~50 days old | core | HIGH | the demo's fixed 90-day stale flag fits NOTHING here; the ramp must be continuous/relative (e.g., quantile- or days-based gradient) | same |
| 6 | A | title lengths: p50 43 / p90 59 / max 86 chars · events per node: 2–10 | sub | HIGH | chip truncation ~36–40 chars; events fit a tiny inline strip | same |
| 7 | B | ★markdown census over 227 real findings: **tables 107 (47%)** · **frontmatter 227 (100%)** · fenced code 225 (99%, handled) · blockquotes 91 (handled) · **`<details>` 221 (97%)** · nested lists **201 (89%)** · h4+ 21 · images 0 | core | HIGH | the mini-renderer handles code/quotes/flat-lists/h1-3 but NOT tables, NOT frontmatter, NOT `<details>`, NOT nested lists — the reading feature's real requirement set; without fixes, ~half of findings render garbled | same |
| 8 | C | demo HAS: orbit/zoom · click fly-to · double-click detail · detail panel (dates, roll-up via, subnode list, parent link) · mini md renderer · chips (root+modules) · HUD counts · hover highlight · focus pulse | core | HIGH | the keep-set; the interaction model users already liked | `{source: none, value: null}` |
| 9 | C | demo LACKS at 228 nodes: **search** (no way to find a node by name) · filters · staleness/status visuals · edge-type distinction · lens switching · deep-links · error surface · open-in-editor · per-node labels beyond hover | core | HIGH | the gap between demo and useful | `{source: none, value: null}` |
| 10 | C | code shape: single-file JSX component; module-level NODES global; `edgeLines()` takes arbitrary segment sets; `makeChip()` canvas sprites; `effLast()` recursion; `outputColorSpace` fix pending (r152+); positions generated at build from data | sub | HIGH | fork-friendly; the globals want a data-module boundary | `{source: none, value: null}` |
| 11 | D | inherited: the shim spec (ISO→ms · group→containment · synthetic root/group tiles · counts · `text ?? fetch(href)`) · inline default (7.7 MB — parse ~100–200 ms, state it in the loading design) · grouping OPTIONAL (lenses: chains default / month / status) · the four purposes · the exercised-definition gate (v2 kinds excluded; a lens HOOK allowed) · no-backend/no-LLM · **anomalies counters exist in the data** (display candidate) · **repoPath always** (open/copy-path candidate) | core | HIGH | the Synthesis-Trigger set, restated for re-test at S/C | `{source: none, value: null}` |
| 12 | E | orientation candidates: type-ahead **search** · fly-to by id · status/date filters · lens toggle (chains/month/status) · deep-link `#node-id` · breadcrumb · recent-list ("last N worked") · hub-size encoding | core | HIGH | search reads as the loudest gap (trace 9) | `{source: none, value: null}` |
| 13 | E | health candidates: continuous staleness color ramp (per trace 5) · active-inquiry beacon · **anomalies HUD panel** (the honesty counters made visible) · "stalest first" list | core | HIGH | health = purpose 2; the ramp needs the relative scale | `{source: none, value: null}` |
| 14 | E | reading candidates: detail view with REAL renderer coverage (frontmatter-strip + tables + `<details>` + nested lists + h4, per trace 7) · open-in-editor / copy-path (repoPath) · edge-note display on selection · within-doc find (browser ctrl-F may suffice — note, don't build) | core | HIGH | reading is where trust lives — every rendered word has a real author | `{source: none, value: null}` |
| 15 | E | structure candidates: edge-visibility policy (continues-from always; related on-hover/selection; long-tail types styled-as-one) · group labels (34 chips) · layout (ring-of-groups + local clusters vs force-directed toggle) · collapse/expand groups · standalone-cloud treatment | core | HIGH | policy numbers from traces 1–3 | `{source: none, value: null}` |
| 16 | E | enjoyment candidates: keep the demo's look (fog, glow, warm palette) · smooth flights · slow ambient rotation when idle · the space FEELING like a thinking space (group nebulae?) | sub | MED | purpose 4 is real but rides the others | `{source: none, value: null}` |
| 17 | E | plumbing candidates: loading state + **schema-version check + visible error surface** (never a blank canvas) · regeneration flow note (re-run the maker, refresh) · app location proposal (docs/visualisation/app/ vs tools/) · md library vs upgraded mini-renderer (a vite dep like marked+DOMPurify is LEGAL — no-backend ≠ no-npm; vs ~60 lines of renderer upgrades) | core | HIGH | the library-vs-upgrade choice is a real design slot downstream | `{source: none, value: null}` |

## State Summary

- **Territory echo:** A data shape (probed) · B markdown reality (probed) · C demo inventory/gaps · D inherited commitments · E feature-possibility space.
- **Purpose echo:** what the design needs to decide loading, rendering, and the useful-feature set; no tiering/selection here.
- **Coverage map:** A confirmed (live probes on the emitted data.json) · B confirmed (grep census, 227 files) · C confirmed (preserved contract) · D confirmed (the two priors, in context) · E scanned (candidates named per purpose).
- **Confirmed-absent:** no >90d staleness bucket exists (young corpus — fixed-threshold staleness has nothing to bite); 0 images in findings (image rendering can be skipped); no existing app/scaffold anywhere (fresh build site).
- **Concept-names:** the relative staleness ramp (trace 5) · the edge long-tail default style (trace 3) · the reading requirement set (trace 7) · the keep-set vs lacks-list (traces 8–9) · library-vs-upgrade slot (trace 17).
- **Frontier flags:** none blocking — E's candidates are deliberately unselected (downstream's job).
- **Workspace-populated:** `{populated: true, populated-at: 2026-07-12_14-55, extent: A+B probed w/ numbers; C–E enumerated}`.

## Telemetry

Mode artifact+possibility · signal-first · cycles: 3 (data probes → markdown census → inventory/possibility sweep) · items: 17 traced (13 core / 3 sub / 1 side→sub) · sub-phase: not fired · convergence: territory exhausted at this resolution; uncertainty-includes honored (within-doc find kept as note) · failure modes checked: territory-mis-binding (no), recency-as-verdict (no), interpretive-overstep (no — E names candidates without choosing) · **Self-assessment: PROCEED.**
