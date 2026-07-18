---
status: active
model: claude-fable-5
effort: unknown
refines: devdocs/inquiries/2026-07-11_10-46__visualizer_node_choice__concepts_vs_inquiry_folders/finding.md
---
# Finding: The Venture Atlas JSON contract — what folders can produce, what the visualizer takes, and the schema that joins them

## Changes from Prior
**Prior path:** devdocs/inquiries/2026-07-11_10-46__visualizer_node_choice__concepts_vs_inquiry_folders/finding.md
**Revision trigger:** the user's next step ("first thing we should dive deep tho is … what kind of JSON") — this finding designs the data contract the prior finding's v1 recommendation sketched.
**What's preserved:** folder-nodes as the substrate; grouping optional (the prior's 2026-07-12 correction is honored in the schema itself — no node requires a parent); parse-only, no LLM, no upkeep.
**What's changed:** the prior's rough v1 sketch ("~100-line adapter, one static JSON") is now a precise contract — and two of its beliefs were corrected by measurement: the edge enum has SIX native types, not three; and "no server" turned out not to block path-based bodies (it means no *backend* — static file serving exists wherever the component runs at all).
**What's new:** the venture-atlas/1 schema (drafted, instantiated on real folders, gate-settled); twelve testable producer clauses; the ~20-line loader-shim spec; measured probe facts (sizes, stamp variance, the midnight-truncation bug).
**Migration:** none required — this extends the prior; the prior's build route (its R1) is now spec'd by this finding.

## Question

The user, on the prior finding's v1 recommendation: *"first thing we should dive deep tho is more fundamental understanding of what kind of JSON can be produced from inquiry folders and what kind of JSON can be input for this visualizer — this is our base question. I guess this json should include number of nodes, titles, full finding.md path, subnode relevant node information so they can be showed."*

Two sides of one contract: what the persistence layer (one timestamped folder per traversal run, holding `_state.md`, `_branch.md`, `finding.md`) can *yield*, and what the Atlas Nodemap component (the ~700-line React + three.js demo) can *take* — with the user's four guessed fields as hypotheses, and the standing bound that grouping is optional (the demo's module tier is example-code structure, not a requirement).

## Finding Summary

- **The contract is one schema, not two** — `venture-atlas/1`: a versioned envelope with honesty counters, flat nodes, typed edges, and an *optional* groups array. The producible inventory (what folders yield) and the consumable requirements (what any input must have) are the two bodies of evidence behind it, not separate schemas.
- **Everything the visualizer needs is a regex away, demonstrated** — two real folders (one from each era) were parsed end-to-end into valid node JSON during the dive. Three catches came out of the probes *before any code exists*: History stamps have TWO formats (1,325 date+time vs 372 date-only May-era lines — the date-only ones truncate to midnight and can make `lastWorkedAt` earlier than `createdAt`, so a clamp rule is required); the relationship enum has SIX types (related 487 · continues-from 180 · synthesizes-from 17 · grounds-in 9 · branch-of 6 · superseded-by 1); and edge targets need a duality (some point at folders, some at files or prose — all kept as data, not dropped).
- **All four of the user's guessed fields land, two sharpened:** number of nodes → `counts` in the envelope (the HUD reads it) · titles → `node.title` (prettified) plus the raw `slug` · **full finding.md path → `body.repoPath`, ALWAYS present as provenance — sharpened: the *fetchable* URL is a separate optional `body.href`, because a repo path is not what a browser can load** · subnode-relevant info → **free**: since all nodes ship in one file, per-child titles and dates are an id-lookup away — no nested duplication needed.
- **The body-delivery question dissolved:** the component is JSX — it runs under a bundler or static hosting in every deployment, so fetching static paths was never blocked ("no server" means no backend). Settled: **inline by default** (`body.text` present; one ~8 MB file; atomic; works even inside a fetch-blocked claude.ai artifact embed), with a `--path` mode in the same shape (bodies copied to `public/bodies/`, sub-MB data file) and a named flip-trigger: switch when the file passes ~15 MB or the corpus nears ~600 folders.
- **The consumer side is a thin shim, not a component rewrite:** ~20 lines convert ISO stamps to the demo's epoch-ms, derive containment from group ids when a grouped view is on, synthesize the root/group display tiles (mechanical member-lists — never fabricated prose), and read counts from the envelope.
- **The gate caught three defects in our own draft** — the missing `href` field, a factually wrong group value on a real example (the prior inquiry has only RELATED links, so it is chain-standalone — the illustrative value was corrected to absent), and the synthetic-tiles precision. The contract ships gate-verified, with twelve testable producer clauses.

## Finding

### 1. What inquiry folders can produce (measured, layered)

**The v1 slice — every field with its source and its coverage:**

| Field | Source & rule | Coverage / probe fact |
|---|---|---|
| `id`, `createdAt` | the folder name (`^20\d\d-\d\d-\d\d_\d\d-\d\d__` filter) | 227/227; the filter cleanly excludes `_archive/`, `diagnostics/`, `diagnostics_from_other_projects/` |
| `slug`, `title` | the name's tail; prettify `__`→" — ", `_`→" " (chip truncation stays in the view) | 227/227 |
| `status` | `_state.md` `## Status`, lowercased | 225 complete · 1 active · 1 superseded |
| `flowType` | `_state.md` `## Flow-type` | era information, free |
| `lastWorkedAt` | last History stamp — BOTH patterns (`- YYYY-MM-DD_HH-MM` and date-only `- YYYY-MM-DD`) — **clamped**: `max(createdAt, stamps)` | 1,325 + 372 lines; the clamp fixes the midnight-truncation bug found live |
| `events[]` | all History stamps (the activity series) | min 1 / median 7 / max 10 per folder; day-grain in the May era, kept honestly |
| `body` | `finding.md`; `_branch.md` Question while ACTIVE | 226 findings; total 7.12 MB (median 27.5 KB, max 168 KB) |
| `edges[]` | `## Relationships` lines: six types + the target duality + full parenthetical notes | ~700 lines; targets = folder-ids OR files (`devdocs/seeds/_seed.md`) OR prose ("the paper-harvest…"); exactly 1 renamed-folder miss corpus-wide |
| `groups[]` *(optional)* | union-find over resolved CONTINUES-FROM edges, only when asked | 33 components / 75% coverage / 57 standalones (measured in the prior dive) |

**The wider producible space (catalogued name-only; v2 material, additive by design):** routelister route rows (373) · `_route.md` concept identities (490) · `_seed.md` records (38) · finding frontmatter (status/model/refines) · docarchive file lists · `_branch.md` Question texts. All parseable today; staged per the prior finding.

One redesign-check worth stating: if the folders were designed for tooling from scratch, each would carry a machine-readable manifest — *they already do*: `_state.md` is that manifest in markdown. **The adapter is `_state.md`'s compiler; zero changes to the record layer are needed.**

### 2. What the visualizer takes (requirements vs demo habits)

**Any input must provide:** id-addressable nodes · a display title · two dates (created, last-worked) · a renderable body per node · edges as id pairs. That is the whole hard requirement set.

**Demo-specific habits (derivable, so NOT required of the data):** epoch-ms number timestamps · `root|module|sub` kinds · `parentId`/`childIds` containment · `pos` baked in data · the single `NODES` object. Each is produced by the **loader shim (~20 lines)**: `Date.parse` per ISO stamp; group→parent/children derivation when a grouped lens is on; kind mapping; counts from the envelope; `body.text ?? fetch(body.href)`. The demo's root and module tiles are node *objects* in its dummy data — in this contract they are **synthesized by the shim at view time** (root = envelope summary; group tiles = member lists — mechanical rollups, never fabricated prose in data).

The authority order stands as the prior correction set it: **record → schema → shim → component.** The data tells the truth; the component (example code, freely editable) adapts.

### 3. The contract — venture-atlas/1

```jsonc
{
  "schema": "venture-atlas/1",
  "generatedAt": "2026-07-12T13:20:00",
  "source": { "root": "devdocs/inquiries", "commit": "0e642b1" },      // commit: default-on, dropped silently outside git
  "counts": { "nodes": 227, "edges": 697, "groups": 33, "bodies": 226 },
  "anomalies": {                                                        // the honesty counters — the map never lies by omission
    "dateOnlyStamps": 372, "clampedLastWorked": 0,
    "unresolvedEdgeTargets": 22, "missingBodies": 1,
    "skippedDirs": ["_archive", "diagnostics", "diagnostics_from_other_projects"]
  },
  "nodes": [ { /* node records, below */ } ],
  "edges": [ { /* edge records, below */ } ],
  "groups": [ { /* OPTIONAL — absent entirely when grouping is off */ } ]
}
```

**Node record — a real instance (parsed from the prior inquiry's folder):**

```jsonc
{
  "id": "2026-07-11_10-46__visualizer_node_choice__concepts_vs_inquiry_folders",
  "kind": "inquiry",                       // open enum — v2 adds "canon", "seed" without renaming anything
  "slug": "visualizer_node_choice__concepts_vs_inquiry_folders",
  "title": "visualizer node choice — concepts vs inquiry folders",
  "status": "complete",
  "flowType": "articulated-surfacing-routed",
  "createdAt": "2026-07-11T10:46:00",      // ISO-8601, local wall-clock (no offset was ever recorded) — loader converts to ms
  "lastWorkedAt": "2026-07-12T12:59:00",
  "events": ["2026-07-11T10:49:00", "…", "2026-07-12T12:59:00"],
  "body": {
    "repoPath": "devdocs/inquiries/2026-07-11_10-46__visualizer_node_choice__concepts_vs_inquiry_folders/finding.md",
    "file": "finding.md",                  // or "_branch.md" for the ACTIVE fallback
    "bytes": 20293,
    "text": "…full markdown…"              // inline mode; in --path mode replaced by "href": "bodies/<id>.md"
  }
  // NOTE: no "group" field here — this folder has only RELATED links, so it is chain-standalone
  //       (the gate corrected an earlier illustrative value; once THIS inquiry concludes, its
  //        CONTINUES-FROM line chains them — the next regeneration picks that up, by design)
}
```

**The second instance (May era) demonstrates the clamp:** `2026-05-23_14-39__routeman_discipline_design` parses date-only stamps → raw max would be `2026-05-23T00:00:00`, *earlier than* creation at 14:39 — the clamp sets `lastWorkedAt = 2026-05-23T14:39:00`; its `events` stay day-grain (honest precision).

**Edge records — real instances showing the duality:**

```jsonc
{ "type": "related",                       // open enum: continues-from | related | superseded-by
  "source": "2026-07-11_10-46__…",         //            | synthesizes-from | grounds-in | branch-of
  "target": "2026-07-10_15-30__selections_ledger_challenge__central_log_vs_inquiry_folders",
  "targetRaw": null,
  "note": "the folder-native record + derived-on-demand-view adjudication — the same substrate this visualizer would read" }

{ "type": "related", "source": "2026-07-11_10-46__…",
  "target": null, "targetRaw": "devdocs/seeds/_seed.md",   // a FILE target — kept as data, rendered differently
  "note": "adjacent seeds: p29-S1 structure-propagation retrieval…" }
```

**Group record (only when grouping is requested):** `{ "id": "g:2026-05-23_09-30", "label": "navigation survey report ×23", "members": [ …ids… ], "root": "2026-05-23_09-30__navigation_survey_report" }` — plus `"group": "g:…"` carried on member nodes (both emitted by one generator in one pass; consistency by construction).

**The settled decisions and why (each was prosecuted both ways at the gate):**
- **Delivery — inline default, both-capable shape.** Inline: one atomic ~8 MB file, zero async code in the component, works even inside a fetch-blocked artifact embed. Path mode (same schema, `text`→`href`, bodies copied to `public/bodies/`): sub-MB data file, clean diffs — **flip-trigger: file > ~15 MB or corpus ≳ 600 folders.**
- **Timestamps — ISO strings, loader converts.** Humans read and debug this file; `"2026-05-23T14:39:00"` beats `1779882540000`; the cost is one `Date.parse` line that lives in the shim anyway.
- **Groups — node-carried id AND groups array, both optional.** O(1) lens checks in the render loop + a home for labels/membership; single-generator consistency; *neither appears when grouping is off* — no node ever requires a parent.
- **Subnode info — none duplicated.** All nodes ship together; the detail view's every field (walked one-by-one at the gate) resolves by id-lookup over nodes/edges/groups.
- **Events — full stamp array kept** (≈15 KB corpus-wide; honest record data; count is derivable from it, not vice versa).
- **Envelope — counts + anomalies mandatory.** The map must be able to say what it skipped, clamped, and couldn't resolve — the no-silent-drops norm, in the file format itself.
- **Carrier — one JSON file, now by argument:** the inversion chain (ndjson → SQLite → live-parse-no-file) was run; the snapshot's virtues (regenerable, diffable, embeddable) plus the user's explicit ask keep JSON standing.

### 4. The twelve producer clauses (the adapter's testable contract)

1. Include only dirs matching `^20\d{2}-\d{2}-\d{2}_\d{2}-\d{2}__`; count the rest into `anomalies.skippedDirs`.
2. Parse History stamps with BOTH patterns; date-only → midnight; count into `dateOnlyStamps`.
3. Clamp: `lastWorkedAt = max(createdAt, max(stamps))`; count clamps.
4. Parse Relationships into the six-type enum; pass unknown types through verbatim (open enum).
5. Resolve edge targets to folder-ids where they match; else keep `targetRaw`; count unresolved.
6. Keep edge notes FULL — truncation is the view's job.
7. Prettify titles (`__`→" — ", `_`→" "); chip truncation stays in the component.
8. Union-find groups over RESOLVED continues-from edges only; emit `groups[]` + `node.group` ONLY when the grouping flag asks.
9. Body = `finding.md`, else `_branch.md`; count `missingBodies` when neither exists.
10. Every envelope number is computed from what was actually emitted — never estimated.
11. Delivery: `--inline` (default) sets `body.text`; `--path` copies bodies to `public/bodies/<id>.md` and sets `body.href`; `repoPath` is ALWAYS present (provenance, not a fetch mechanism).
12. Normalize: status lowercased; stamps emitted as offset-less local ISO; `events[]` comes from clause 2's parse.

## Inherited Commitments Re-test

- **Commitment:** folder-nodes as the substrate (every contract field a parse of runner-written files).
  **Source:** the prior finding, §1 + §3.
  **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** two full prototype-parses this dive (both eras) extracted every field; the catalog in §1 carries per-field coverage numbers.
- **Commitment:** grouping is optional; no module tier is required (the user's 2026-07-12 correction).
  **Source:** the prior finding, revision note + §2.
  **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** the schema makes it structural — `groups[]` and `node.group` are optional and absent entirely when grouping is off; no node carries a required parent.
- **Commitment:** "no server, no LLM, no upkeep" as the v1 bounds.
  **Source:** the prior finding, §3 (v1 spec).
  **Re-test status:** RE-TESTED — commitment confirmed but frame revised. **Evidence:** the component's own stack (JSX → bundler/static hosting everywhere) shows "no server" means no *backend/maintained service* — static file fetch was never excluded; the bound survives as no-backend + no-LLM + no-upkeep, and the path delivery mode is legal under it.
- **Commitment:** the native edge set = CONTINUES-FROM / RELATED / SUPERSEDED (three types).
  **Source:** the prior finding, §1 (edges row).
  **Re-test status:** RE-TESTED — commitment found INVALID (undercounted). **Evidence:** the line-start census over all `_state.md` files found SIX types (adds synthesizes-from 17, grounds-in 9, branch-of 6); the schema carries the full open enum, and the prior finding's row is corrected by this one (this finding `refines:` it — the prior stands as written history; consumers should read the six-type enum from here).
- **Commitment:** the adapter reads exactly three sources (folder names, `_state.md`, bodies).
  **Source:** the prior finding, §3 (v1 boundary).
  **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** every clause in §4 reads only those sources (+ one optional `git rev-parse` for the envelope's commit stamp, which is metadata about the snapshot, not a fourth record source — noted rather than smuggled).

## Next Actions

### MUST
- **What:** Decide whether to build now — the adapter (clauses above, ~100 lines) and/or the component fork + shim (~20 lines; can start on a hand-made 3-node fixture even before the adapter).
  **Who:** the user (I build on ask).
  **Gate:** whenever the map should exist; nothing else waits on it.
  **Why:** the contract is the build's full spec; first light is an afternoon away.

### COULD
- **What:** The fixture + clause-tests (2–3 synthetic mini-folders exercising clamp / date-only / duality / fallback; assert the emitted JSON).
  **Who:** rides the adapter build.
  **Gate:** at or immediately after the adapter.
  **Why:** makes the honesty counters provably honest; regression safety for free.
- **What:** A formal `venture-atlas.schema.json` or TypeScript types generated from this contract.
  **Who:** the assistant, on ask.
  **Gate:** when a second consumer appears (jq/CLI/another view).
  **Why:** multi-consumer safety; editor support.
  **Depends-on:** MUST item "the build decision". This COULD is GATED — types for a schema nobody emits yet are furniture.
- **What:** Mirror the settled contract into cross-session memory.
  **Who:** the assistant.
  **Gate:** this session's wrap-up.
  **Why:** the next session builds from the landing, not from re-derivation.

### DEFERRED
- **What:** Flip inline → path.
  **Gate:** emitted file > ~15 MB or corpus ≳ 600 folders.
  **Why (if revived):** same schema, lighter file; no migration.
- **What:** The shared-record-API frontier (jq one-liners, a "what's stale?" CLI, other views over the same file).
  **Gate:** data.json exists and the map is in use.
  **Why (if revived):** the file may be the record layer's read-API, not just map input.
- **What:** v2 node kinds (canon, seed) + their edges.
  **Gate:** the prior finding's exercised-definition (v1 used ≥3 days + ≥1 real navigation event).
  **Why (if revived):** additive under the open enums — no breaking change by design.

## Reasoning

**Why one schema and not two:** a contract living as two documents (producer-side, consumer-side) is how drift happens — each side conforms to its own copy. The two INVENTORIES are real and kept (sections 1 and 2), but they justify one interface object; the component's wants live as shim expectations derived from it.

**Why the demo's shape lost (re-checked, not inherited):** emitting exactly what the demo eats (nested containment, ms numbers, baked positions) was re-prosecuted as an explicit challenger rather than dismissed by yesterday's collapse — and re-killed on three grounds: containment-as-data hard-codes one grouping against the user's standing correction (the decisive, user-stated ground); ms + baked pos make the file unreadable and freeze layout into data; and its one prize (zero component changes) is worth ~20 lines — the shim — while its cost is a data file that lies about optionality.

**Why the JSON file stands (not habit):** the carrier inversion was driven to system level — ndjson (streamability irrelevant at 227–1,300 records), SQLite (breaks browser-native loading and the no-backend bound), and live-parse-no-file (kills the snapshot's virtues: regenerable, diffable, embeddable). The file is a *snapshot decision*, and the snapshot is what the map's trust rests on. The user's ask ("emits one static JSON") is honored by argument, not deference.

**Kills, briefly:** per-node JSON files (227 requests, no benefit) · nested child summaries (duplicate ~450 strings for zero information — all nodes ship together) · envelope-without-anomalies (fails the no-silent-drops norm) · ms-only stamps (unreadable) · raw-unnormalized-emit (moves regexes into UI code; breaks the multi-consumer reading).

**The gate's catches on our own draft (kept, not smoothed):** the missing `body.href` (a repo path is provenance, not a URL a scoped dev server will serve — path mode needs copies + hrefs); the factually wrong `group` value on the 10-46 instance (RELATED lines don't chain; corrected to absent, with the forward note that this very inquiry's CONTINUES-FROM will chain them at the next regeneration); the synthetic-tiles precision (root/group display objects are the shim's mechanical rollups, never data). Three catches, all inside the project's own honesty norms.

## Open Questions

### Monitoring
- The flip-trigger (file size / corpus count) — checked at each regeneration.
- Whether the day-grain May-era events ever mislead a display enough to warrant a per-node `precision` marker (none needed now; the data is honest as parsed).

### Blocked
- v2 kinds (canon/seed nodes) — blocked on the prior finding's exercised-definition.
- The shared-record-API candidacies — blocked on data.json existing.

### Refinement Triggers
- The inline default re-opens ONLY on its named trigger (~15 MB / ~600 folders) — never on generic "feels heavy."
- The six-type edge enum re-opens if the corpus ever shows a NEW relationship line-type (the open-enum clause already passes it through; the schema doc just gains a row).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
v1 — the Venture Atlas base layer (recommended now). Folder-nodes on chain-modules. The adapter is a ~100-line script that reads exactly three sources — folder names, _state.md (Status, Relationships, History stamps), and finding.md/_branch.md bodies — and emits one static JSON the component loads in place of its dummy-data builder. Component changes are additive only: a JSON loader, two extra edge sets (RELATED thin lines, SUPERSEDED dashed), the grouping parameter, slug truncation, and one three.js deprecation fix (outputEncoding/sRGBEncoding were removed in r152+; use outputColorSpace). No server, no LLM, no upkeep: the map regenerates by re-running the parse, and every rendered word has a real author.


i think this is cool idea, 

first thing we should dive deep tho is more fundamental understanding of what kind of JSON can be produced from inquiry folders and what kind of JSON can be input for this visualizer 

this is our base question. I guess this json should include number of nodes, titles, full finding.md path ,  subnode relevant node information so they can be showed. 

lets dive deeper
```

(The quoted "v1" paragraph is the prior finding's PRE-correction wording; the 2026-07-12 correction — grouping optional, component editable — is honored throughout this contract.)

</details>
