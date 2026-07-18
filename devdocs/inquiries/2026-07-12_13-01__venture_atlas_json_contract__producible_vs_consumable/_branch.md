# Branch: the Venture Atlas JSON contract — producible vs consumable

## Source Input
[The user's raw request, preserved verbatim. Also lives in articulate_simple.md's `## User Input` section; both copies are authoritative for transcription audit.]

```text
v1 — the Venture Atlas base layer (recommended now). Folder-nodes on chain-modules. The adapter is a ~100-line script that reads exactly three sources — folder names, _state.md (Status, Relationships, History stamps), and finding.md/_branch.md bodies — and emits one static JSON the component loads in place of its dummy-data builder. Component changes are additive only: a JSON loader, two extra edge sets (RELATED thin lines, SUPERSEDED dashed), the grouping parameter, slug truncation, and one three.js deprecation fix (outputEncoding/sRGBEncoding were removed in r152+; use outputColorSpace). No server, no LLM, no upkeep: the map regenerates by re-running the parse, and every rendered word has a real author.


i think this is cool idea, 

first thing we should dive deep tho is more fundamental understanding of what kind of JSON can be produced from inquiry folders and what kind of JSON can be input for this visualizer 

this is our base question. I guess this json should include number of nodes, titles, full finding.md path ,  subnode relevant node information so they can be showed. 

lets dive deeper
```

[Standing correction that bounds this question: the quoted "v1" paragraph is the 10-46 finding's PRE-correction wording. Per the user's 2026-07-12 correction, the demo's module tier is example-code structure, NOT a requirement — grouping is optional, and the component will be edited to the project's own needs.]

## Articulation Reference

- **File:** `devdocs/inquiries/2026-07-12_13-01__venture_atlas_json_contract__producible_vs_consumable/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** item-1
- **Verdict:** HIGH-PROCEED
- **Flagged conditions:** none

## Question

**Item 1 (literal-statement):** "Before anything else, we should dive deep into a more fundamental understanding of what kind of JSON can be produced from the inquiry folders and what kind of JSON can be input for this visualizer — this is our base question. My guess: the JSON should include the number of nodes, titles, the full finding.md path, and subnode-relevant node information so they can be shown. Let's dive deeper."

**What kinds of ask this carries (MQ1, preserved as ambiguities):** `dual-schema-mapping` (both sides + the bridge) · `concrete-schema-design` (an actual schema draft) · `feasibility-inventory` (the full extractable space) · `hypothesis-check` (the four guessed fields).

**Plausible action-endpoints (MQ3, preserved):** `spec-then-build` (settle the contract so the adapter is next) · `understand-the-space` (map what's possible first) · `validate-guesses` (test the four fields against both sides).

## Goal

**Deconstruct tuple:** (deliverable: a fundamental understanding that LANDS as a concrete JSON contract — both sides characterized (the producible field-space; the consumable needs) plus a recommended schema draft with real example instances; kinds: field-inventory tables + a schema draft + parsed-from-real-folders examples + the bridge decisions with their constraint trails; bounds: the v1 Venture Atlas data layer — inquiry folders as source, this visualizer (as an editable base) as consumer; NOT the adapter build itself; NOT the v2 concept-layer schema beyond extensibility hooks).

**WHY-axis motivations (preserved as ambiguities):** `design-foundation` (contract right once → rework-free build) · `comprehension` (the record layer's data space itself, beyond this tool) · `de-risking` (find producer/consumer mismatches before code) · `momentum` (a concrete next artifact while the idea is hot).

**Context the answer needs (MQ2, preserved):**
- *verdict:* the component's field-by-field consumption (recoverable from the 10-46 inquiry's preserved contract: `{id, kind, title, parentId, childIds, pos, createdAt, lastWorkedAt, md}` + `effLast` roll-up + HUD counts + detail-view fields); the folders' per-field yield INCLUDING edge cases (ACTIVE folder without finding.md · SUPERSEDED · 3 non-standard dirs · May-era stamp variance · ~24 unresolved CONTINUES-FROM lines) — checkable by parsing real folders; ★the body-delivery question — the user's guess says "full finding.md path," the demo inlines `md` as a string, and path-based loading implies runtime fetch that collides with the quoted "no server" stance — surface, don't assume.
- *kinds:* the JSON kinds in play — file ENVELOPE (counts/metadata/version) · NODE records · EDGE records (3 native types) · optional GROUP records (grouping optional per the correction) · the BODY-DELIVERY mode (inline/path/both).
- *stance:* static-file-no-server vs dev-server allowance (lazy md fetch); single-file vs multi-file; forward-extensibility (v2 concept-kinds fit without breaking); prototype-parse in-scope-as-evidence vs out-as-premature-build.

**What would explicitly fail (MQ4, preserved):** a schema that HARD-REQUIRES a module tier (grouping must be optional — the standing correction); treating the adapter build as this dive's deliverable ("first thing we should dive deep" = understanding first; whether a small prototype-parse counts as evidence or as build is itself ambiguous — preserved); silently assuming the "no server / no LLM / no upkeep" bounds are fixed OR re-decidable — the body-delivery axis must be settled explicitly, not inherited.

## Considered Articulations

**Item item-1 — the JSON contract question:**
1. "Inventory both sides field-by-field — everything parseable from an inquiry folder vs everything the component's two views consume — and produce the mapping table with gaps and transforms marked."
2. "Design the concrete v1 JSON schema the adapter should emit — envelope + nodes + edges + optional groups — with a real example instance parsed from actual folders."
3. "Validate the user's four guessed fields (node count · titles · full finding.md path · subnode info) against both sides — including the inline-content-vs-path decision the 'path' guess raises under the no-server stance."
4. "Characterize the producible SPACE first — all folder-extractable data, including what v1 wouldn't use — as the fundamental layer, then mark the v1 slice the visualizer consumes."
5. "Settle the bridge decisions the contract hangs on — md inline vs path, single-file vs multi-file, the optional-grouping shape, the extensibility envelope for v2 node-kinds — each with its constraint trail stated."

## Scope Check

Question covers goal. The Deconstruct bounds (the v1 data layer: folders → this editable visualizer) contain everything the Goal asks; the MQ4 exclusions are carried in Goal.

**Specific-vs-pattern check:** the question points at THIS visualizer's input, but the user's own words ("more fundamental understanding") explicitly widen the producible side to the folders' data space as such — so the inquiry addresses the fundamental space (what folders can express as JSON) AND the specific consumable slice (what this component needs), with the schema draft as their intersection. Both readings are served by the same structure; no user check-in needed.
