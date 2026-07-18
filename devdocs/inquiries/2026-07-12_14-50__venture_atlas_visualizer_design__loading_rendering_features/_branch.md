# Branch: the visualizer design — loading, rendering, useful features

## Source Input
[The user's raw request, preserved verbatim. Also lives in articulate_simple.md's `## User Input` section; both copies are authoritative for transcription audit.]

```text
it is time to
  Now actual visualisation which loads the generated json and render the 3d thinking space and inquiry nodes

────────────────────────────

lets dive deep of how it should do this, what features are required to be useful
```

[Standing context: venture-atlas/1 is built and verified (schema.py + inquiries2visualisationsJSONmaker.py; real run 228 nodes / 744 edges / 34 groups / 7.7 MB inline). Component base = the Atlas Nodemap demo (editable example code; grouping optional — the 2026-07-12 correction). This dive = the 13-01 inquiry's R2 route widened into a design dive.]

## Articulation Reference

- **File:** `devdocs/inquiries/2026-07-12_14-50__venture_atlas_visualizer_design__loading_rendering_features/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** item-1
- **Verdict:** HIGH-PROCEED
- **Flagged conditions:** none

## Question

**Item 1 (literal-statement):** "It is time for the actual visualisation — the one that loads the generated JSON and renders the 3D thinking space and inquiry nodes. Let's dive deep into how it should do this, and what features are required for it to be useful."

**What kinds of ask this carries (MQ1, preserved):** `design-spec` (the loading/rendering architecture) · `feature-requirements` (the prioritized useful-feature set) · `build-now` ("it is time to" reads as build-intent) · `usefulness-definition` (useful for which purpose/task — itself open).

**Plausible action-endpoints (MQ3, preserved):** `design-then-build-next` · `build-in-dive` · `feature-triage`.

## Goal

**Deconstruct tuple:** (deliverable: a design concrete enough to build from immediately — architecture + prioritized features with usefulness rationale + the render policies real data forces — with the build as the plausible immediate sequel (endpoint ambiguity preserved); kinds: architecture sketch · feature tiers MUST/NICE/LATER · purpose→feature mapping · render policies (edges/labels/layout at 228-node scale) · loading/shim plan · an app-location proposal; bounds: the v1 app over venture-atlas/1 AS-IS — no v2 kinds, no schema changes, no backend/LLM).

**WHY-axis motivations (preserved):** `use-it-daily` (a working orientation/health instrument) · `see-it-finally` (the payoff moment; enjoyment is real) · `validate-the-stack` (consume the contract end-to-end) · `foundation` (v1's shape lets v2 lenses land without rework).

**Context the answer needs (MQ2, preserved):**
- *verdict:* the settled contract + shim spec (13-01 finding); the demo's interaction model + code shape (10-46 preserved contract); ★the REAL data's render-relevant distributions (group sizes, node degrees, edge-type mix, title lengths, status/staleness mix) — probeable from the emitted data.json; the four purposes defining "useful"; WHERE the app lives (nowhere named).
- *kinds:* feature kinds — navigation · health · reading (REAL findings: tables, frontmatter, long docs) · structure (lenses, edge policy, layout) · aesthetics · plumbing (loading, error surface, regeneration).
- *stance:* v1-now vs v2-gated; fork-in-place vs small-app restructure; design-only vs design+build; app location (docs/visualisation/app/ vs tools/ vs user's pick).

**What would explicitly fail (MQ4, preserved):** features depending on v2 kinds (canon/seed wait on the exercised-definition — the lens HOOK may exist, its content may not); any backend or LLM; any silent schema change (gaps found = finding notes, the contract is settled); guessing the dive-endpoint instead of preserving it (design-only vs design+build stays open until the pipeline resolves or the user says).

## Considered Articulations

**Item item-1 — the visualizer design:**
1. "Design the loading/rendering pipeline: fetch + shim per the settled contract, scene construction for 228 nodes / 744 edges / 34 groups, layout and scale policies — the HOW."
2. "Derive the required-feature set from the four purposes (orientation, record-health, knowledge-view-later, enjoyment): which features each purpose demands, tiered MUST / NICE / LATER."
3. "Adjudicate the render policies the real data forces: edge visibility (744 edges can't all be on), label decluttering at 228 nodes, group layout, staleness color, real-finding markdown rendering."
4. "Specify v1 completely (architecture + features + policies), then BUILD it in this dive — 'it is time to' taken as the endpoint."
5. "Define 'useful' operationally first — the tasks the map must serve (find X; what's stale; what continues what; read the finding here) — and let the features fall out as task-support."

## Scope Check

Question covers goal. The bounds (v1 app over venture-atlas/1 as-is) contain everything the Goal asks; the MQ4 exclusions are carried in Goal.

**Specific-vs-pattern check:** the question targets THIS app over THIS data — inherently specific; the "features required to be useful" half generalizes only as far as the four named purposes, which are already the project's own. No widening needed.

## Synthesis Trigger

This inquiry consumes two prior findings as inputs:
- `devdocs/inquiries/2026-07-12_13-01__venture_atlas_json_contract__producible_vs_consumable/finding.md` — commits the venture-atlas/1 contract (schema, 12 clauses, the shim spec, inline default, id-lookup subnode insight).
- `devdocs/inquiries/2026-07-11_10-46__visualizer_node_choice__concepts_vs_inquiry_folders/finding.md` (as corrected 2026-07-12) — commits folder-substrate, grouping-OPTIONAL, the editable-component authority order, the four purposes, the v2 exercised-definition gate.

CONCLUDE will require an `## Inherited Commitments Re-test` section; Sensemaking and Critique must actually re-test the load-bearing inheritances against this dive's own evidence (notably: does the shim spec survive contact with real render needs; does grouping-optional shape the lens design; does the exercised-definition gate hold against feature temptation).
