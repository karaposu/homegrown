# Critique — settling the visualizer spec

## User Input

devdocs/inquiries/2026-07-12_14-50__venture_atlas_visualizer_design__loading_rendering_features/innovation.md — read with sensemaking.md + decomposition.md + _branch.md fully. The gate settles: (1) the renderer slot; (2) tier confirmations (prosecute recent-list, anomalies panel, any inflated MUST); (3) dust-shell + status-as-color shapes; (4) the Inherited Commitments set; (5) frame-premise on the keep-set; (6) the assembly walked task-by-task. Save to critique.md.

---

## Phase 0 — Dimensions (weights)

| # | Dimension | Weight |
|---|---|---|
| D-A | Task-coverage (the ten tasks) | CRITICAL |
| D-B | Trust/honesty (faithful rendering; honest counters; no fabricated content) | CRITICAL |
| D-C | Build-cost-to-first-light ("it is time to" — afternoon-scale) | HIGH |
| D-D | Maintainability (five organs; zero-upkeep data; dependency posture) | HIGH |
| D-E | Portability (vite dev / static host / artifact-embed variant) | MED |
| D-F | Delight (purpose 4 is real) | MED |

**Frame-premise test (the keep-set inheritance):** premise = the user likes the demo's interaction model (they supplied the demo; both corrections targeted data authority, never interactions). What-if-wrong: taste drift is localized by the five-organ split (the scene organ swaps without touching data/detail/hud). HOLDS, with modularity as the hedge.

## Phase 1 — Landscape

Viable: the five-organ spec with the matrix's tiers. Dead: always-on related edges; 228 labels; fixed staleness thresholds; v2-content features; force-default. Boundary: the renderer fork (settled below); two tier rows prosecuted below. Unexplored non-blocking: timeline replay (Gource-style — logged far-LATER); hosted/shared deployment (noted, out of scope).

## Phase 2/3 — Verdicts

**THE RENDERER SLOT — SETTLED: the library path (marked + DOMPurify).**
- *Strongest case for the upgrade (stated fully):* zero dependencies; total look-control; the mini-renderer already covers 80% of constructs; the corpus is self-authored so the XSS threat model is "my own files"; 60 lines is reviewable in one sitting.
- *Prosecution of the upgrade (and it BIT):* the gate's independent walk of REAL corpus edges found the 60-line estimate optimistic by roughly 2×: markdown tables in our findings contain **pipes inside inline code spans** (e.g. `` `text ?? fetch(body.href)` `` sits in table cells of the contract finding) — a naive pipe-split mis-renders them, and code-span-aware cell splitting is the fiddly half of a real table parser; `<details>` blocks contain **nested markdown including fenced code** (every Source Input section) — passthrough needs block-level interleaving, not a tag whitelist. The hand parser lands ~100–120 lines of exactly the code that silently mis-renders on the trust-critical organ.
- *Defense of the library:* marked is pinned, massively exercised, and CommonMark-adjacent — the edge cases above are its bread; DOMPurify (allowing `details`/`summary`) closes the raw-HTML surface the lib path opens; the existing `.md` CSS applies to marked's standard tag output directly; frontmatter still gets the manual 5-line strip either way. Cost: two pinned deps, ~50 KB — invisible in a three.js app.
- *Collision:* on D-B (trust) the library wins outright — correctness on real corpus edges beats zero-dep purity exactly where mis-rendering is lying; on D-C it's faster to first light; on D-D a pinned dep beats bespoke parser upkeep. The upgrade's surviving virtue (look-control) is preserved anyway via CSS. **SETTLED: marked + DOMPurify, versions pinned; frontmatter stripped before parse; `details/summary` allowed; tested against the largest finding (168 KB) at build checkpoint 3.**

**Tier prosecutions (scope honesty):**
- *recent-list (MUST — SURVIVES, narrowly; recorded honestly):* prosecution — the ramp already shows recency as brightness; hovering the bright nodes answers "what did I work on recently," so the task degrades rather than fails. Defense — it is a GLANCE task (C4's glanceability clause: glance-value counts as task-support), and multi-hover over spatially scattered dots is the glance form failing; the list is already computed in P1's indexes, so the cost is one flyout. Collision: MUST holds *on the glanceability clause*, not comfortably — recorded so a future trim knows where the seam is.
- *anomalies panel (MUST — CONFIRMED):* prosecution — "did the parse drop anything" is an engineer's-conscience task, not a user task. Defense — it is the project's own no-silent-drops norm surfacing at the UI layer; the counters exist in the data precisely to be seen; invisible counters = silent at the last mile. One badge + one table. MUST stands on doctrine grounds that are the user's own.
- *Sweep of the remaining 11 MUSTs:* each re-checked against the task-fails rule — no inflation found (the edge policies are zero-marginal-cost policy rows; the beacon serves active-now which fails without SOME indicator; counts/generatedAt is trivial and serves snapshot-staleness). **13 MUST confirmed.** NICE/LATER spot-checks: lens toggle NICE confirmed (chains-default alone serves every ✓-task); deep-link, hub-sizing NICE confirmed; the four LATERs have no failing task — confirmed.

**Shape confirmations:**
- *Standalone dust shell — CONFIRMED with one refinement:* visually quiet must not mean inaccessible — the 56 standalones remain fully searchable, fly-to-able, and ramp-colored (a bright recent standalone pops against the dust by design); the shell placement encodes "unchained," not "unimportant."
- *Status-as-color (not grouping) — CONFIRMED:* the distribution (227 complete / 1 superseded / 0–1 active) makes status-grouping a one-group absurdity; color + filter carries all the information.

## Inherited Commitments Re-test (the Synthesis Trigger set, verified here for the finding)

- **The shim spec** (13-01): RE-TESTED — survives contact intact; the renderer conflict resolved in a different organ; the shim stays ~20 lines of data conversion.
- **Grouping-optional / no required parent** (10-46 correction): RE-TESTED — the flat lens exists; month-groups are client-side derivations; nothing in the spec requires a parent.
- **The exercised-definition gate** (10-46): RE-TESTED — the knowledge lens ships as a contentless enum slot; no v2-kind feature appears in any tier above GATED.
- **Inline default + flip-trigger** (13-01): RE-TESTED — the loading spec quotes the real numbers (7.7 MB, ~100–200 ms); the >15 MB hint carries the trigger verbatim; the artifact-embed variant is a build-flag note, not a schema or default change.

## Phase 3.5 — Assembly: the whole spec vs the ten tasks

find-X → search+fly-to ✓ · recent → recent-list (+ramp) ✓ · continues-what → chain layout + always-on continues edges + the detail edge list ✓ · where-am-I → group chips + HUD + (NICE) deep-link ✓ · stale-aging → the relative ramp ✓ · active-now → the beacon (graceful at zero) ✓ · anomalies-visible → the badge+table ✓ · read-here-well → marked+DOMPurify + meta chips + faithful tables/details ✓ · jump-to-editor → copy-repoPath (+ NICE vscode:// via basePath config) ✓ · feels-alive → the keep-set aesthetic + flights + the ramp's ember glow ✓. **Ten of ten served; the acceptance statement is verifiable live.** *Assembly prosecution:* "13 MUSTs is a big v1." *Defense:* five are policies or one-widget rows (edge policies, accents, counts, badge, copy button); the build sequence has a runnable checkpoint after each organ — scope is honest, not minimal-for-show. **SURVIVE — the spec is the answer.**

## Coverage map

Both renderer branches fully costed and collided; every tier row confirmed or prosecuted; both shape questions confirmed; all four inherited commitments re-tested; the frame premise tested; the assembly walked task-by-task. Unexplored non-blocking: timeline replay; hosted deployment; the ~1,300-node LOD work (LATER by extrapolation, aligned with the contract's flip-trigger).

## Signal — TERMINATE

**The settled spec:** the five-organ vite app at the proposed home (`docs/visualisation/app/`), the demo's interaction model and aesthetic kept; P1's honest loading pipeline + seven derived indexes; P2's probe-decided scene (golden-angle chain ring, fibonacci member spheres, standalone dust shell, three edge sets with the visibility policy, relative staleness ramp, 34-chip label economy, degree-honest hub sizing); P3's reading organ on **marked + DOMPurify** with meta chips, the full edge list (raw-targets listed, never drawn), copy-path always; P4's controls (ranked substring search with `/`, lenses chains/month/status-color/flat, recent-list, the anomalies badge, counts + generatedAt); the 13/7/4/1 tier matrix confirmed; the 0→5 build sequence with runnable checkpoints; acceptance = the ten tasks live or cited-deferred. **The build follows as the user's already-declared act.**

## Convergence telemetry

Dimensions 6/6 applied and discriminating (D-B settled the renderer; D-A ran the assembly walk; D-C shaped the tier prosecution). Adversarial strength: **STRONG** — the gate found the upgrade path's real cost (~2× the estimate, on pipe-in-code-span and details-with-nested-md — corpus-anchored, quoted), narrowed recent-list's survival to its actual clause, and stated the 13-MUST scope prosecution rather than waving it. Landscape STABLE. Clean SURVIVE exists (the assembled spec). External anchors: probe numbers, the corpus's own table cells, the user's phrasing, the priors' text — mechanism-independence validated, no quarantine. Failure modes: none observed. **PROCEED.**
