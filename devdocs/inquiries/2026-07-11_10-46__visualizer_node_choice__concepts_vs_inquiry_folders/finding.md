---
status: active
model: claude-fable-5
effort: unknown
---
# Finding: The visualizer's node-unit — inquiry folders as substrate, concepts as a staged lens, extraction gated

*Revised 2026-07-12 on the user's correction: the demo's root → module → subnode tree is example-code structure that will be edited to fit the project — NOT a requirement. The "modules must be filled" framing is removed throughout; grouping is now framed as an optional design choice, and the previously-conditional flat-graph option is open (its named trigger fired — see Reasoning and Refinement Triggers).*

## Question

The user wants to point an "Atlas Nodemap Explorer" — a working ~700-line React + three.js component (a 3D map: one root, orange "module" spheres, pale "subnode" spheres; click flies to a node, double-click opens a detail view showing Created / Last-worked-on dates and a rendered markdown body per node) — at this project, and could not decide what the nodes should be:

- **Option A — concepts:** use the inquiry folder files as a source to *generate* a concept list and subconcepts, and visualize those.
- **Option B — inquiry folders:** the folders themselves as nodes — "native to how the project persists, no need for weird concept creation logic which is a challenge."

Asked directly: "what do you think? are there any alternatives?" The deliverable is advisory — a recommendation plus the option-field, mapped concretely onto the component's node data contract (`{id, kind, title, parentId, childIds, createdAt, lastWorkedAt, md}`). No build was requested.

## Finding Summary

- **Recommendation: Option B — inquiry folders as the map's base layer.** Every field the component needs is a parse rule over files the project's runners already write; nothing has to be generated, and the map grows by itself as inquiries accumulate.
- **The user's instinct about "weird concept creation logic" is vindicated — but only at one pole.** "Concepts" turned out to mean four different things, and three of them already exist as written artifacts (38 canon docs, 38 seeds in the global index, 490 per-inquiry route-map identities). Only the fourth — free-floating LLM extraction — needs the machinery the user dreads, and it ranks last, behind an explicit trigger.
- **Grouping is a choice, not a requirement — and if a grouped view is ever wanted, it's already in the data.** (Corrected 2026-07-12: the demo's module tier is example-code structure the user will edit, not a constraint to satisfy.) Measured this dive: the folders' own CONTINUES-FROM links organize **75% of the corpus into 33 chain-components** (sizes 23, 15, 10, 10, 10, 9, 9, 7, 7, 6, …) — venture-shaped in the project's canon vocabulary. A flat graph, a chain-grouped tree, or anything between are all buildable from the same parsed data; no grouping logic is *required*.
- **The winning shape is the "Venture Atlas," staged:** v1 = folder-nodes plus their native edges, parsed from exactly three sources (folder names, `_state.md`, `finding.md` with a `_branch.md` fallback), one static JSON, zero upkeep — with chain-grouping available as an optional, already-parsed lens rather than a requirement. v2 (earned by actual use) = a "knowledge lens" that adds canon docs and seeds as first-class nodes over 202 cross-links the corpus already carries. Extraction stays a named far-pole behind a concrete trigger.
- **Why staging is the answer and not a compromise:** the project's own measured record (the 2026-07-10 selections-ledger adjudication) shows parse-only derived views survive while generated-and-maintained artifacts die; and a between-loop tool must be cheap enough that going unused costs nothing (the suspicion-principle). A zero-upkeep v1 is the honest first move under both.
- **The map would render the canon model itself:** one folder = one traverse's record (canon-verbatim), a CONTINUES-FROM chain = a venture's thread-continuity (readable as containment in a grouped view or as plain connectedness in a flat one), and the detail body = the project's real distilled finding — text a human actually adjudicated, not a synthesized summary.

## Finding

The project's persistence layer is `devdocs/inquiries/` — one timestamped folder per traversal run, each holding `_state.md` (status, history timeline, typed relationship links), `_branch.md` (the question), and `finding.md` (the distilled answer). The question was whether a 3D map over the project should visualize *those folders* or *concepts generated from them*. This dive measured the corpus rather than guessing, and the measurements decide most of the question.

### 1. What the corpus actually offers (measured)

230 directories exist under `devdocs/inquiries/` (227 in the standard `YYYY-MM-DD_HH-MM__slug` form). Coverage of the fields the component needs:

| Contract field | Folder-node source | Status |
|---|---|---|
| `id`, `createdAt` | the folder name itself | parse-free, 227/227 |
| `title` | the slug (needs a prettify + ~40-char truncate rule) | parse-free + one cosmetic rule |
| `lastWorkedAt` | the last `- YYYY-MM-DD_HH-MM` stamp in `_state.md`'s History | parseable 227/227 (one caveat, §4) |
| `md` (detail body) | `finding.md` — present in 225 folders (~99%); `_branch.md`'s Question while a folder is ACTIVE | parse-free |
| status/kind | `_state.md`'s Status (225 COMPLETE / 1 ACTIVE / 1 SUPERSEDED) | parse-free |
| edges | `## Relationships` lines — present in 219 folders: 181 CONTINUES-FROM lines, 491 RELATED lines, 8 SUPERSEDED | parse-free |
| `parentId` (grouping, if any) | no native field — but grouping is OPTIONAL (see §2); chains are the native option when a grouped view is wanted | optional, not a gap |
| `pos` | always generated (layout) | not data, by design |

Two further facts matter. First, 202 of the RELATED lines point not at other folders but at canon docs and seed files — the corpus already carries cross-layer links to its concept artifacts. Second, the "concept" side has three layers that already exist as written, human-adjudicated artifacts: `docs/canon/` (38 files, each with a title and real prose body), `devdocs/seeds/_seed.md` (38 seeds with ids, dates, grades, anchors, cross-references), and the per-inquiry `_route.md` concept-maps (104 files, 490 discipline-individuated concept identities). None of these needs generating — they need parsing.

What does NOT exist natively, anywhere: a markdown body for a *free-floating extracted concept*. If extraction-based concept nodes were built, every detail view would render text nobody wrote — a standing fabrication surface — and the extractor would face the genuinely unsolved problem of recognizing the same concept across 227 folders that name it differently. That is exactly the "weird concept creation logic" the user flagged, and it is real — there, and only there.

### 2. Grouping — optional, and native when wanted

*(Corrected 2026-07-12: an earlier version of this section treated the demo's root → module → subnode tree as a requirement to satisfy. The user's correction stands — the component is example code that will be edited to fit the project's own needs; no tier is required. What follows is the grouping data that EXISTS if a grouped view is ever wanted; a flat node-and-edge graph is equally buildable from the same parse.)*

Measured this dive: building chains from the CONTINUES-FROM links (a union-find over 157 resolved folder→folder edges) yields **33 components covering 170 of 227 folders (75%)**, sizes 23, 15, 10, 10, 10, 9, 9, 7, 7, 6 and smaller, with 57 standalone folders. In canon vocabulary these components are venture-shaped — thread-continuity chains of runs.

What this buys, without obligating anything: the adapter can emit flat nodes plus typed edges and leave all structure to the view. If a grouped view is wanted (now or later), chains are the native semantic grouping — nameable after their earliest member's slug, with the 57 standalones in a residual bucket. By-month and by-status groupings compute from the same parsed fields as alternate lenses. If no grouping is wanted, the CONTINUES-FROM lines still render as ordinary edges, and the venture structure stays visible as connectedness rather than containment.

One advisory note survives from the original analysis, conditional on grouping being used at all: prefer chains over time-buckets as the default grouping — a month is not a unit of work, while a chain is.

### 3. The recommendation, staged

**v1 — the Venture Atlas base layer (recommended now).** Folder-nodes plus their native edges. The adapter is a ~100-line script that reads exactly three sources — folder names, `_state.md` (Status, Relationships, History stamps), and `finding.md`/`_branch.md` bodies — and emits one static JSON of flat nodes and typed edges, with each node also carrying its chain-component id so that a grouped view, a flat force-directed view, or anything between can be computed in the client without re-parsing. The component itself is example code to be edited freely (the 2026-07-12 correction); if useful, the smallest path to first light on the existing code is: a JSON loader in place of the dummy-data builder, edge sets for RELATED (thin) and SUPERSEDED (dashed), slug truncation, and one three.js deprecation fix (`outputEncoding`/`sRGBEncoding` were removed in r152+; use `outputColorSpace`). No server, no LLM, no upkeep: the map regenerates by re-running the parse, and every rendered word has a real author.

**v2 — the knowledge lens (earned, not scheduled).** When v1 has actually been used — concretely: opened on 3 or more separate days AND at least once used to decide what to work on or to locate a folder the user then opened — add canon docs and seeds as first-class node kinds over the 202 native cross-links, as a toggleable second view ("workyard" vs "knowledge") on the same data file. This delivers the concepts half of the user's question with zero generation machinery, because it visualizes concept artifacts the project already writes. (One layout caveat: the 38 canon docs are high-degree hubs and will need a spread rule.)

**The far pole — extraction (gated, not dead).** Free-floating concept extraction stays on the shelf behind a concrete trigger: *after the v2 knowledge lens has shipped and been used, the user can name three or more real questions they asked it that canon/seed nodes could not answer but extracted concepts would.* If that fires, the value-claim extraction rests on has become true, and the cost (an extraction protocol, cross-inquiry identity resolution, generated bodies, re-run scheduling) is worth adjudicating then. The strongest case FOR extraction — "folders are session artifacts; the user thinks in concepts; a concept map answers 'what do we believe?'" — was stated and defeated on structural grounds, not by doctrine: the semantic need is served cheaper and better by canon (the project's believed concepts, human-written); approximate identity-merges would render silently-wrong links on a tool whose entire function is trust in the record; and the 490 already-existing route-identities have zero consumers today, so the appetite for machine-made concepts is unproven.

**A legitimate override path.** The ranking above filters by survival-shape first and orders by purpose within the survivors. If the user's primary purpose is the knowledge-view or the sheer pleasure of the artifact, shipping the lens-toggle in v1 is a *knowing* override — the data is still all-native; only staging prudence is being overridden, and that is the user's call to make.

### 4. Honest caveats and one small verification

- **Chain over-merge (relevant only where chain-components are actually used — a grouped view or venture analytics):** a folder that CONTINUES-FROM two parents bridges two chains into one component. That is truthful to the record (the work genuinely continued from both), but if a fused component feels wrong in use, the fix is a lens variant (a directed forest using the first-listed parent), not a data change.
- **Timestamp variance:** all 227 `_state.md` files have at least one parseable History stamp, but May-era formats were not exhaustively checked; the adapter should fall back to the folder stamp where a History line does not parse. A ~10-minute verification (sample May folders; also eyeball the ~24 CONTINUES-FROM lines that did not resolve to existing folders) would harden both parse rules — worth running as the adapter's first dry-run check.
- **Scale:** at the current ~90 new folders/month the corpus reaches ~1,300 in a year; some grouping or level-of-detail choice becomes necessary for readability at that size (the chain data is one ready-made option), and that pass is v2+ work.
- **Kinships, named not claimed:** a working map is a natural candidate renderer for future per-venture telemetry (once recorded turns exist), and a candidate "eye" for the project's unbuilt navigational-session organ — both stay candidacies until exercised.

## Next Actions

### MUST
- **What:** Decide the build (v1 as specified — flat or grouped view, the same parsed data serves both / the knowing-override lens-first / not now).
  **Who:** the user.
  **Gate:** whenever the user wants a map — nothing else in this finding depends on urgency.
  **Why:** the recommendation only pays when acted on; every spec detail needed for the build is in this finding and `critique.md`'s Signal section.

### COULD
- **What:** Run the stamp-variance + unresolved-lines verification (~10 minutes) as the adapter's first dry-run output check.
  **Who:** the assistant, on ask — or it rides the v1 build automatically.
  **Gate:** at or before the v1 build.
  **Why:** hardens `lastWorkedAt` and the chain edge-set — the map's trustworthiness is its whole value.
- **What:** Mirror the landing into the assistant's cross-session memory (the ranked answer, the measured corpus facts, the staging boundaries and triggers).
  **Who:** the assistant.
  **Gate:** this session's wrap-up.
  **Why:** the next session consults the landing instead of re-deriving it.

### DEFERRED
- **What:** v2 — the knowledge lens (canon + seed nodes over the 202 native cross-edges, lens-toggle form).
  **Gate:** the exercised-definition — v1 opened on ≥3 separate days AND ≥1 real navigation event (used it to choose work or locate a folder then opened).
  **Why (if revived):** delivers the concepts view with zero generation machinery.
- **What:** Free-floating concept extraction (the original Option A).
  **Gate:** after the v2 lens is in use, the user can name ≥3 real questions it couldn't answer that extracted concepts would.
  **Why (if revived):** the one condition under which extraction's value-claim is true.
- **What:** The domain-grouping lens (folders grouped by canon domain) and any authoring-time concept-link convention that would make it parse-free.
  **Gate:** the user wants domain-grouping while using the knowledge lens; any folder-convention change is user-gated.
  **Why (if revived):** a knowledge-first module tier without extraction.

## Reasoning

**Why folders won the substrate:** the decision reduced to three axes — which existing layer becomes nodes, whether and how to group them (optional, per the 2026-07-12 correction), and parse-only versus generated-and-maintained. On the third axis the project has its own measured evidence (the 2026-07-10 selections-ledger adjudication): the habit-maintained record (routelog) died with zero uses while protocol-written records (`_seed.md`, the folders themselves) live — so anything requiring periodic regeneration or hand-upkeep was filtered out as a v1 foundation, which eliminated extraction-first and hand-kept domain mappings. On the first axis, folders are the only layer where every contract field, including the detail body, is native (canon lacks in-file timestamps; seeds are index-entries whose full records live inside findings; route-identities lack cross-inquiry identity). The archival-science parallel (group records by provenance, layer subject indexes on top — never re-classify the originals) supports the same order, imported strictly as an organizing heuristic, not an authority.

**Killed during the dive, then re-opened by its own trigger:** the pure-graph rewrite (drop the hierarchy, render a force-directed graph of everything) was killed because the demo's value-carrying interactions are spine-defined — with the kill explicitly *conditional* on the user keeping that interaction model. On 2026-07-12 the user stated the component is example code to be edited freely: the named condition fired, and the flat-graph rendering is now an open, legitimate view over the same parsed data — a rendering choice, neither recommended nor discouraged here. Its two useful fragments (cross-link edge rendering; a physics layout option) were already absorbed into v1.

**Folded/absorbed rather than killed:** "finding-files as the nodes" (identical to folder-nodes once the body rule exists); time and status groupings (demoted to toggle lenses); "no overlay ever" (it is just v1's scope, restated).

**Deferred with triggers (not killed):** extraction (§3's trigger); the canon-rooted substrate and domain-grouping (folded into the v2 lens family — the lens reaches their content cheaper); the `_route`-identity lens (research frontier: honest only as strictly-local decoration until cross-inquiry identity is solved).

**Survived and ranked:** the staged Venture Atlas assembly first — it was tested as its own candidate and passed collision with every stabilized constraint (the spine stays; the three axes; chains as default lens; parse-only v1; extraction gated) and with the component-fixedness reading of the user's message ("using below LIKE visualizer" — all changes additive). The gate's prosecution drew real blood along the way: the chain over-merge finding, the stamp-variance caveat, and the canon-hub layout caveat all came from attacking the winning candidates, and all three are carried as named caveats rather than smoothed over.

## Open Questions

### Monitoring
- If a chain-grouped view is used: does it reveal over-merged components (the multi-parent bridging)? If yes, add the directed-forest lens beside union-find.
- Does v1 meet the exercised-definition (≥3 days + ≥1 real navigation event)? That is v2's gate.

### Blocked
- The venture-telemetry rendering home (per-chain judged readouts on the map) — blocked until ventures run with recorded turns.
- The navigational-session candidacy (the map as that organ's orientation eye) — blocked until the map is exercised at all.

### Research Frontiers
- Cross-inquiry concept identity (the same concept under different names across 227 folders) — the one genuinely hard problem in the concept direction; nothing in this finding depends on solving it.
- Depth-4 leaves (rendering each folder's archived discipline files as child nodes) — noted from constraint-removal, deliberately out of v1.

### Refinement Triggers
- ~~The pure-graph kill re-opens only on one named blocking feature: the user abandoning this component's spine-defined interaction model~~ — **FIRED 2026-07-12:** the user confirmed the component is editable example code; the flat-graph option is open (recorded in Reasoning).
- The extraction deferral re-opens on its named trigger (≥3 unanswerable-by-lens questions), never on generic "context changes."

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
i am thinking using below like visualizer for homegrown project.  but there is something i cant decide

the nodes should be concepts? if yes then inquiry folder files can be used as a source to generate concept list and subconcepts and we can visualize them 
or lets make these nodes inquiry folders, it will be native to how project persists, no need for weird concept creation logic which is a challange, 

so what do you think ? are there any alternatives?
```

(Plus the ~700-line "Atlas Nodemap Explorer" React + three.js component, preserved in the /traverse invocation record; its data contract is quoted in the Question section above.)

</details>
