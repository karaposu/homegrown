# Surfacing — the retro-venture-detection substrate

## User Input

PURPOSE: Bring into view what the retro-venture-detection assessment needs (per _branch.md): (A) ★THE TRACE INVENTORY — real reads + grep-counts over the inquiry folders (coverage of each venture-trace kind; the isolation rate; verification on known arcs incl. one messy one). (B) THE ADAPTER + TODAY'S BASELINE — which traces `inquiries2visualisationsJSONmaker.py` consumes, how the 34 groups derive, what nodes carry, schema. (C) THE CRITERION — the canon venture definition's detection-relevant clauses + the traversal_sample compile method. (D) THE SEEDS + LAWS in-session. Load-bearing = (A)+(B). Tag; don't adjudicate. TERRITORY: devdocs/inquiries via grep+samples (not 243 full reads); memory dir; the adapter + schema + data.json; the canon doc + sample; seeds index in-session.

- **Mode:** artifact (all four regions pre-exist on disk or in-session) · **Entry:** signal-first (purpose given)
- **Boundary-discovery:** skipped (explicit-bounded)

---

## Traversal Trace

### Region A — THE TRACE INVENTORY (grep-counts + arc verifications; load-bearing)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| A1 | **Folder census:** 244 inquiry folders (incl. this one); 241 have `_state.md`; 239 have `finding.md`; 118 have `_route.md`; 114 have `routelister*.md` | core | HIGH | mtime: live reads 2026-07-14 |
| A2 | **Relationships coverage: 233 of 241 `_state.md` files have `## Relationships`** (97%) — the chain-trace is near-universal, NOT sparse | core | HIGH | directly contradicts a "no traces exist" reading of the gap |
| A3 | **Relation-kind counts (file-wide grep):** 193 `CONTINUES FROM` · 516 `RELATED` · 58 `REFINES` · 17 `SUPERSEDES` · 1 `SUPERSEDED BY` | core | HIGH | file-wide, not section-scoped — see A12 for the prose-latency delta |
| A4 | **Routelister tick-receipts: 31 total (16 ✓ + 15 ◐), ALL dated 2026-07-10→07-14** — the consumer-mark practice is ~4 days old; where present it is a DATED thread-receipt (a route ticked BY a later inquiry, with pointer) | core | HIGH | thin-but-strong trace; recent vintage only |
| A5 | **Same-day bursts:** 40 distinct dates over the corpus; peaks 15 folders/day (07-05), 14 (06-10, 05-29), 12 (07-04) — session clustering is strong and machine-readable from ids alone | core | HIGH | temporal adjacency = candidate-generator, not identity-prover |
| A6 | **finding.md supersedes mentions:** 23 across findings (frontmatter + body) | sub | MED | overlaps _state SUPERSEDES partially |
| A7 | **Memory-file arc narrations:** 14 files in the assistant memory dir; rich NARRATED arcs for the July era (games thread, venture rephrase, the sample's mechanism catalog, atlas/json-contract, seed-harvest saga in MEMORY.md); May–June era sparse | sub | HIGH | coverage skew: recent arcs well-narrated, old arcs thin |
| A8 | **Isolation rates, two layers:** all-edge layer: only 4 of 231 nodes degree-0; chain layer (continues-from components): 56 of 231 ungrouped (as of the 07-12 snapshot) | core | HIGH | the record is CONNECTED; it is the chain layer that leaves 24% standalone |
| A9 | ★**Ground-truth fragmentation test (the sample venture):** the hand-verified ONE venture (2026-07-02→07-10; sample says ~60 runs; 85 in-window nodes) falls into **10 distinct groups + 23 standalones** under today's derivation. The standalones include the whole paper-dive campaign (`paper_seed_10..18 breakthrough_check` each chain-less) — the user's verbal glue sat exactly at those transitions | core | HIGH | the measured glue-invisibility; also the falsifiable acceptance test for any detector: reassemble THIS arc |
| A10 | **Games-thread verification:** 22-16 harvest `_state` carries `CONTINUES FROM 14-53` (+ RELATED protocol/index); 10-26 carries `CONTINUES FROM 14-53` — the thread IS chain-recorded (post-dates the 07-12 snapshot; will group on regeneration) | core | HIGH | recent practice records chains reliably |
| A11 | **Tagging-thread verification (messier):** 08-35 `CONTINUES FROM 06-55` + `RELATED 23-26` + `RELATED 21-48` — the four-inquiry venture reads as a 2-chain + 2 satellites: FRAGMENTED at the chain layer though thread-continuous in fact | core | HIGH | related-edges don't group (deliberate anti-blob), so genuine thread-members fall out |
| A12 | **Prose-latent REFINES:** 58 file-wide `REFINES` hits vs only 5 `refines` edges in data.json — most refines-language lives in History lines / prose, outside `## Relationships`, invisible to the adapter by design | core | HIGH | a recoverable latent trace for a dig pass |
| A13 | **Unresolved edge targets: 274 of 751 (36%)** — the adapter's `FOLDER_ID_RE` needs the full `YYYY-MM-DD_HH-MM__slug` form; our habitual ellipsized refs (`…2026-07-13_22-16…`) and prose targets fall to `targetRaw` | core | HIGH | large, mechanically-repairable trace loss |
| A14 | **Git commit clustering:** coarse (commits like "towards stabilization" batch many folders) — flagged only, not counted | side | LOW | weak trace; skip in first design |

### Region B — THE ADAPTER + TODAY'S BASELINE (read in full: 408-line adapter + schema)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| B1 | **Sources per folder (exactly):** folder name + `_state.md` + `finding.md`/`_branch.md` (body) + `routelister.md` (root, else docarchive) for route rows — nothing else read | core | HIGH | the 07-12 JSON-contract finding §4's 12 producer clauses |
| B2 | **Edges:** parsed ONLY from `_state.md ## Relationships` lines; 6-type map + open-enum verbatim pass-through; note kept; target duality: resolved `target` vs `targetRaw` (unresolved counted, never dropped) | core | HIGH | clauses 4–6 |
| B3 | ★**Groups = union-find over RESOLVED `continues-from` edges ONLY; components ≥2; standalones carry no group; label = root member's prettified slug + "×N"** — so today's "ventures as clusters" = recorded chain components, nothing more | core | HIGH | clause 8; `related` excluded deliberately (anti-blob) |
| B4 | **Nodes carry:** id/slug/title/status/flowType/createdAt/lastWorkedAt/events (History stamps)/body/openRoutes/group | core | HIGH | status from `## Status`, lowercased |
| B5 | ★**The anomalies ledger (honesty precedent):** dateOnlyStamps 372 · clampedLastWorked 51 · unresolvedEdgeTargets 274 · missingBodies 0 · skippedDirs 3 · unparsedRouteTables 24 — counted, surfaced, never silently dropped | core | HIGH | the exact pattern a detection layer's provenance should extend |
| B6 | **Schema `venture-atlas/1`;** pydantic validation BEFORE write ("an invalid file cannot be emitted"); no server, no LLM, deterministic re-runs | core | HIGH | "Every rendered word has a real author" — module docstring |
| B7 | **Snapshot staleness:** data.json generated 2026-07-12T17:58 (commit b6f9cc2): 231 nodes vs 244 folders today — 13 newer folders absent until regeneration | sub | HIGH | regenerate-before-render hygiene fact |
| B8 | **Counts:** routeRows 505, openRouteRows 492 (the open field) | sub | HIGH | matches the standing 492-door figure |

### Region C — THE CRITERION (canon + sample; verified verbatim today)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| C1 | **The three marks (canon):** specific purpose (makes the end judgeable) · particular thinking space · beginning-and-end — ends BY PURPOSE ("satisfied, deliberately abandoned, or handed off — never by timer; pauses are reversible" — the 32-day park recalled) | core | HIGH | canon doc line 19, 54–58 |
| C2 | ★**Identity = thread-continuity with TWO carriers:** "Continuity is carried by the record chain (the continues-from / refines / corrects links between inquiry folders) AND the navigator's returning intention. A deliberate pivot to an unrelated thread starts a new venture." — the second carrier is NOT on disk | core | HIGH | line 62; purpose-sharpening ≠ identity-break (non-stationary landscape) |
| C3 | **The pivot-boundary residual:** "its determination mechanism is structural-layer work, deferred" — the exact territory this inquiry enters | core | HIGH | line 66(i) |
| C4 | ★**The canon doc's own Refinement Trigger:** "If the first venture-run's record cannot carry thread-continuity (the chain-links prove insufficient to mark one venture) → the identity-clause re-opens at the structural layer; the blocking feature is the record-chain's expressiveness" — the user's observation in canon's own words | core | HIGH | line 230 |
| C5 | **Bar-(i), the recorded-selection venture:** every between-traverse selection + one-line rationale recorded — the FORWARD practice; a backfill is not bar-(i) and cannot become it retroactively (the selections weren't recorded when made) | core | HIGH | line 95 |
| C6 | **The sample's compile method (the honesty bar):** "compiled by re-checking the actual inquiry folders — every step below is a recorded `/traverse` (or MVL-family) run whose full output still exists on disk. Nothing here is reconstructed from conversation memory alone." + cause-attribution tags [user]/[loop]/[record] | core | HIGH | traversal_sample.md §1 |
| C7 | **The sample's cast table documents the glue:** navigator = the user; traversal memory = "mostly the user's head" — the missing-record claim is the sample's own §2 content | core | HIGH | also: the sample explicitly names only 15 folder-ids (phase-narrative, not a member roster) — ground-truth membership is partly implicit |

### Region D — SEEDS + LAWS (in-session, cited)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| D1 | ★**rx-S7 VENTURE-COMPILE (NASCENT):** "a venture's honest aggregate is a READ artifact — the VENTURE-COMPILE (per-venture consolidation document; close-out rubric = the two conditions: fed continuation? preserved its assembly?)" — trigger: "the venture structural-layer dive runs OR **a second venture-compile need arises**"; the hand-made traversal-sample compile = the named exemplar | core | HIGH | the user's "more samples" ask = the second-need arm arriving; consult-not-remint |
| D2 | **rx-S5 BREEDING-PACKAGE (NASCENT):** per-venture conversion-note (capabilities built vs consumed); trigger: "the venture structural-layer dive runs" | sub | HIGH | partially in scope if this counts as (a piece of) that dive |
| D3 | **gh-S4 VENTURE SPLITS / gh-S5 GOAP-composing:** stage-profiles a venture record COULD later carry; itinerary composition over routes — adjacent, not this dive's center | side | HIGH | design-vocabulary neighbors |
| D4 | **p29-S9 PROACTIVE RECORD-REPAIR (NASCENT, thin):** periodic sweep detecting+restoring broken structure ("dead cross-refs, dangling `_route` links, index entries pointing at moved files") — the 274 unresolved targets are exactly p29-S9-shaped decay | core | HIGH | repairing refs = its territory; distinct from venture-detection proper |
| D5 | **p25-S3 EVENTS-NOT-OUTCOMES:** automated interaction-histories as telemetry — the forward-recording cousin | side | MED | future venture records could carry events |
| D6 | **Laws (standing):** no-fabrication + the marker-provenance precedent (work-authored, fallible → detected ventures need provenance grades); THE MAP NEVER WRITES THE RECORD (dig pass = record-layer act, offline; render mechanical); no-LLM-at-render (dig OUTPUT = data — legal); counts-never-scores; the user = constitutive validator (only he can confirm the glue's intention); all record-writes user-gated | core | HIGH | in-session, standing |

---

## State Summary

- **Territory echo:** devdocs/inquiries (grep+samples) · memory dir · adapter+schema+data.json · canon venture doc + traversal_sample.md · seeds index in-session.
- **Purpose echo:** what the retro-venture-detection assessment needs — trace inventory, today's baseline mechanics, the criterion, the seeds/laws.
- **Coverage map:** Region A confirmed (counts exact; 3 arc verifications + the ground-truth fragmentation measurement); Region B confirmed (adapter read in full); Region C confirmed (verbatims re-verified today); Region D confirmed (in-session verbatims). Not read: the 244 folders individually (by design — grep+sample); git-log clustering (flagged A14, side).
- **Confirmed-absent:** no venture-record artifact exists anywhere (no registry, no per-venture files, no ventures field in schema/1) — the "official venture record" is genuinely absent, as the user says. No prior detection attempt found.
- **Concept-names:** the glue-invisibility (measured: A9) · chain-layer vs venture-layer (a group ≈ venture only when chain-links were written; a group lacks purpose/end-status/provenance regardless) · fragmentation-vs-braiding (one venture → many components AND one component possibly braiding threads) · prose-latent traces (A12) · ellipsized-ref unresolvability (A13) · the anomalies-ledger pattern (B5) · dated tick-receipts (A4) · the ground-truth acceptance test (A9+C6) · two-carriers asymmetry (C2: one carrier on disk, one in the navigator's head).
- **Recency distribution:** inquiry-folder traces span 2026-05-23→07-14 (40 dates); tick-receipts 07-10→07-14 only; memory narrations July-heavy; data.json snapshot 07-12 (stale by 13 folders).
- **Frontier flags:** (i) how many of the 274 unresolved targets are fuzzy-recoverable — unmeasured (a dig-pass question, not a surfacing gap); (ii) how many REFINES-prose mentions resolve to real folder pairs — unmeasured; (iii) May–June arc shapes (beyond the two ×10 routeman groups) unexamined — the detector design should not assume July-era trace quality holds backward; (iv) the sample's full member roster is implicit (15 explicit ids + phase prose) — ground-truth testing needs the user or a careful read to fix membership.
- **Workspace-populated:** {populated: true, populated-at: 2026-07-14_11-4x, extent: regions A–D complete at stated resolution}.

## Telemetry

- Mode: artifact · signal-first. Cycles: 4 (counts → adapter → arc verifications+ground-truth → seeds/laws verbatims).
- Items: 35 enumerated; tagged core 24 / sub 6 / side 4 / umbrella 0 (+1 confirmed-absent region).
- items_with_mtime: live-read disk items (all Region A/B); items_without_mtime: in-session citations (Region C/D verbatims re-verified today).
- Workspace-overload: not fired. Failure modes checked: missed-relevance (arc verification covered known + messy + ground-truth cases); surfaced-irrelevance (A14/D5 kept side); territory-mis-binding (none); recency-bias (old folders counted equally; May-era trace-quality flagged as frontier, not judged).
- **Self-assessment: PROCEED** (4 frontier flags for downstream, none blocking).
