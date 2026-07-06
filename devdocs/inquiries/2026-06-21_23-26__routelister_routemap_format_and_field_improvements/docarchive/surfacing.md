## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-21_23-26__routelister_routemap_format_and_field_improvements/_branch.md`

(Territory = the 12 crowboy `routelister.md` route-maps [2026-06-20_01-32 … 2026-06-21_21-40] + the routelister spec. Measured facts: grain 153/153 "project" (0 "concept"); no map uses is_done; Movement = 270 fields, median 224 / max 483 chars, 27 over 350, single-line "+"-dumps; per-route records already carry Movement/WHY/Guidance[Mode+Pointers-with-bc]/Meaning-gaps; summary columns = # · Direction · grain · kind · engagement · Priority. Purpose = surface what bears on the 6 proposals + further, against the readability-vs-bloat balance. Save to surfacing.md.)

---

# Surfacing — Thin Artifact

**Mode:** artifact · **Entry point:** signal-first
**Territory:** 12 real crowboy route-maps + the routelister spec (§5.1 table, §5.2 records, compactness identity, no-process-coupling, routelog). Explicit-bounded.
**Purpose (relevance bias):** the meaning + formatting shortcomings bearing on the 6 named proposals + further, balanced against not-bloat.

## Traversal Trace

| # | Region | Item | Relevance | Conf | Note |
|---|---|---|---|---|---|
| 1 | summary table / real data | **`grain` column is DEAD: 153/153 routes = "project", 0 "concept"** across all 12 maps. | **core** | HIGH | the hardest data point — the column carries ZERO information in these maps. *Nuance:* grain = project-space vs concept-space; concept-space only appears in **depth (concept-target) runs**, which these breadth maps never are. So the COLUMN is dead in breadth maps; the FIELD still distinguishes run-modes. → drop the column, keep the concept where depth runs use it. |
| 2 | summary table | **`kind` is REDUNDANT with `engagement`.** kind (teleological/epistemic) is *derivable* from the engagement verb: DEVELOP/DEEPEN/PURSUE-SEED/INVESTIGATE-FRONTIER ⇒ teleological; REFINE/REFRAME/DIAGNOSE/TEST/CONSOLIDATE ⇒ epistemic. | **core** | HIGH | the user's "epistemic, so what?" is right — kind restates what engagement already says. The 9-verb engagement column is the informative one; kind is a derivable 2-way roll-up. |
| 3 | summary table | **`Direction` is inconsistent** — some are clear noun-phrases ("The proof-verdict console (operator grades the recording)"), some terse ("Funding / escrow-hold"); and it's **re-stated** verbatim in each per-route record header. | **core** | MED-HIGH | the user wants it "longer/explanatory" — but a long cell hurts table scannability. The real issue is *consistency* (always a clear what-it-is phrase) + the redundant restatement, not raw length. |
| 4 | is_done / routelog | **`is_done` collides with routelog.** routelog ALREADY owns done/parked tracking — in its own append-only `_route_engagements.md` + a `↗` stamp into `_route.md`. No map currently has an is_done column. | **core** | HIGH | the genuinely-contested proposal: an is_done column in the route-map would be a SECOND source of truth for done-ness (duplication/drift vs routelog), and routelog deliberately keeps an engagement *history* (start/done/park + artifact pointer + outcome), not a boolean. |
| 5 | identity boundary | **The no-process-state boundary is about `_route.md`, NOT the route-MAP.** `_route.md` (the persistent index) forbids process/engagement state; `routelister.md` (the per-run human map) is a snapshot. | **core** | HIGH | so an is_done column in `routelister.md` doesn't *technically* violate the `_route.md` boundary — but it still duplicates routelog. The clean reading: done-state belongs to routelog; the route-map can *display* a ✓ that routelog stamps, but routelister shouldn't *own/author* it. |
| 6 | Movement / real data | **Movement is the worst offender: dense single-line action-dumps.** median 224, max 483 chars, 27/270 over 350; "+"-concatenated, code-identifier-heavy. The quoted `Task.auto_release (…) + rule_jump caller-branch (…) + release_jump action + GET /admin/worklist/releases (…) + a release endpoint` is a perfect specimen. | **core** | HIGH | this is where the readability pain is real and measurable. It crams *what to do* + *code-level how* + *caveats* into one line. |
| 7 | Movement / meaning | **Many Movements are ACTIONS, not state-transitions.** "build the release engine…", "add a `require_capability` helper…", "decide the commission model…" — a DEVELOP/TEST/decide route's movement is a *build/act*, not a from-state→to-state. | **core** | HIGH | the user's "from-state / to-state" subfields fit *state-machine* routes but NOT build/test/decide routes. A subfield design must generalize (e.g., **before → after**, or **what it does / where it touches**), or it'll force a transition framing onto routes that aren't transitions. |
| 8 | Guidance / real data | **Guidance is already decent** — Mode (none/compact/full) + Pointers each with a `(bc …)` reason, in the better maps. | **sub** | MED | the "needs better subfields" is about *consistency/formalization* (always Mode + Pointers-with-bc, maybe a typed pointer for "reuse X" vs "avoid Y" vs "sequence after Z"), not a missing structure. Less broken than Movement. |
| 9 | records vs summary | **The per-route RECORDS already carry the richness** (Movement, WHY, Guidance, Meaning-gaps); the SUMMARY is the scannable index. | **core** | HIGH | THE framing for readability-vs-bloat: keep the **summary lean** (drop dead columns), put **richness in the records** (Movement subfields). The records are already detailed — bloat-fear is misplaced there; the summary should get *leaner*, not richer. |
| 10 | summary table | **Only `engagement` of {grain, kind, engagement} earns its summary slot.** Dropping grain (dead) + kind (redundant) shrinks the table to **# · Direction · engagement · Priority** — tighter and *more* scannable. | **core** | HIGH | the synthesis of proposals 1+2+3: a leaner summary is both the fix AND respects not-bloat. |
| 11 | meaning-gaps | **Meaning-gaps entries are in ACTIVE use** in the real maps (R2/R3/R4/R5 carry them, rated low/mid/high) — the feature works in practice. | side | HIGH | real-data validation; not a shortcoming. Confirms the per-route record is the richness surface. |
| 12 | further | **`Confidence` is in records but not the summary; the `Map Header` (count + high-priority + the gate) is useful; the `Excluded` section is well-used.** | sub | LOW-MED | minor: Confidence could join the summary or stay in records; Header + Excluded are working — leave them. |

## State Summary

- **Territory echo:** the 12 real route-maps (measured) + the spec. **Purpose echo:** the 6 proposals + further, vs not-bloat.
- **Coverage map:** grain (dead — measured) ✓; kind (redundant-with-engagement) ✓; Direction (inconsistent + restated) ✓; is_done (collides with routelog + the _route.md/route-map distinction) ✓; Movement (measured dense; action-not-transition) ✓; Guidance (already decent; consistency) ✓; the lean-summary/rich-records framing ✓.
- **Confirmed-absent:** no map uses **concept-space grain** (all breadth runs); no map uses **is_done**; no map **splits Movement** into subfields. (So three of the proposals are genuinely net-new.)
- **Concept-names discovered (provenance → trace #):**
  - `dead-grain-column` (#1) — 100% uniform; drop the column, the field survives for depth runs.
  - `kind-is-derivable-from-engagement` (#2) — the redundancy; engagement is the informative column.
  - `lean-summary / rich-records` (#9, #10) — the readability-vs-bloat resolution: shrink the summary, enrich the records.
  - `is_done-belongs-to-routelog` (#4, #5) — done-state is routelog's; the map may *display* a routelog-stamped ✓ but not *own* it.
  - `Movement-is-action-not-transition` (#7) — from→to fits only state-routes; subfields must generalize (before→after / what+where).
  - `Movement-density-is-measured` (#6) — median 224/max 483 — the real, quantified pain.
- **Frontier flags:** (a) the is_done↔routelog tension (own vs display) — for sensemaking/critique; (b) the Movement subfield design that handles BOTH state-routes and build/act-routes without bloat; (c) whether "lengthen Direction" is even right vs "make Direction a consistent clear phrase + stop restating it."
- **Workspace-populated status:** `{populated: true, populated-at: 2026-06-21_23-29, extent: 4 route-maps read in full + measured stats across all 12 + the routelister spec, in context}`.

## Telemetry

- Mode: artifact · entry: signal-first · cycles: 2 (read 4 maps in full + measured stats across all 12)
- Items: 12 · core 8 · sub 3 · side 1 (+ 3 confirmed-absent: no concept-grain, no is_done, no Movement-subfields)
- Real-data grounding: grain 153/153=project; Movement median 224/max 483/27-over-350; meaning-gaps in active use — all **measured**, not asserted.
- Convergence: reached — the signals converge on "lean the summary (drop grain + kind), enrich the records (Movement subfields, Guidance consistency), and treat is_done as routelog's, displayed-not-owned."
- Failure modes checked: Missed-relevance (no — every proposal + the routelog collision + the action-vs-transition nuance surfaced), Surfaced-irrelevance (no), Over-coverage (no), Territory-mis-binding (no — stayed on the route-map format, grounded in real files), Recency-bias (no — read across the full date range), Interpretive-overstep (held — the verdicts/redesign are NOTED as convergence; the actual adjudication is sensemaking/critique's).
- **Self-assessment verdict: PROCEED** — the shortcomings are surfaced and **measured against real data**; the load-bearing tensions (is_done↔routelog; from→to fits-only-state-routes; lean-summary-vs-rich-records) are explicit for sensemaking.
