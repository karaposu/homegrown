# Surfacing — meaning in geometry: what the design adjudication needs

## User Input

PURPOSE: Bring into view what the meaning-in-geometry design adjudication needs (per _branch.md): (A) ★THE CHANNEL LEDGER (empirical, from the built app's code) — free vs taken, per zoom; (B) ★THE MEANING SUBSTRATE census (countables/parseables; which could honestly mean "how solidly BACKED" — the altını-doldurmak candidate); (C) ★THE TEXT-DEPENDENCE fact-check (which of the 12 tasks require reading text today); (D) VISUAL-ENCODING PRIOR ART (possibility case; honesty risks flagged); (E) THE MODES/CUSTOM-VIEWS architecture facts + the overlay principle's exact wording; (F) THE HONESTY RAILS. Load-bearing = (A)+(B)+(C). Tag; don't design. Save to this inquiry's surfacing.md.

---

## Traversal Trace

### Region A — THE CHANNEL LEDGER (artifact; road.jsx + scene.jsx + data.js + hud.jsx read in full; detail.jsx from session authorship, scanned-shallow)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| A1 | **Position X = TIME** (true-scale 2.2u/day, pleats, day-widening) — road.jsx buildTimeMap | core | HIGH | the law's channel; TAKEN |
| A2 | **Position Y (elevation) = weekly effort** (node count, cosine-smoothed) — makeElevation | core | HIGH | TAKEN; terrain |
| A3 | **Position Z = lane assignment + S-curve + shoulder parity** — placeNodes | core | HIGH | ★TAKEN-BUT-MEANINGLESS: lane = collision avoidance for overlapping venture footprints; standalone side = i%2 parity; the S-curve = aesthetics. The only positional axis NOT carrying meaning |
| A4 | **Node color = staleness ramp** (ember→ash, relative domain) + status accents (superseded 40% opacity; active emissive pulse) — nodeColor, road.jsx:426,737 | core | HIGH | TAKEN: color+opacity+animation all spent on recency/status |
| A5 | **Node size = log₂(degree)**, capped 0.84 — nodeSize | core | HIGH | TAKEN; weak semantics (edge count) |
| A6 | **Node SHAPE = sphere, uniform** (SphereGeometry for every node) | core | HIGH | ★FREE — the shape channel carries nothing |
| A7 | **Node material/texture = uniform** (same roughness 0.6/metalness 0.05 everywhere) | core | HIGH | ★FREE — texture/wear/material channels unused |
| A8 | **Under-node ground = bare ribbon** (nodes float 0.45–0.55 above elev) | core | HIGH | ★FREE — the altını-doldurmak slot is empty: nothing beneath any node |
| A9 | **Orientation = none** (spheres are orientation-blind) | sub | HIGH | FREE but requires non-sphere geometry to exist |
| A10 | **Pennant flags: open-route count → flag HEIGHT** (teal, MID zoom, InstancedMesh; h = 0.9+0.32·min(count,8)) — road.jsx:435-458 | core | HIGH | ★THE PRECEDENT: the one existing meaning-in-geometry encoding beyond position — a count riding pure geometry, color deliberately NOT spent (channel-separation note in code) |
| A11 | **Arcs: continues-from** — always drawn; span>18 = tall glowing back-arc (lift ∝ span) | core | HIGH | TAKEN: the relation channel; arc HEIGHT already encodes time-span |
| A12 | **Focus neighborhood: non-chain edges as lines on selection only** | sub | HIGH | on-demand relation channel |
| A13 | **Furniture: week/day ticks (lines), month pylons (geometry+TEXT), chapter banners (TEXT), pleat folds (lines)+caption (TEXT), NOW beacon (geometry+glow+pulse), horizon glows** | core | HIGH | the FAR narration layer: structure = pixels, content = TEXT |
| A14 | **LOD bands: far (radius>70) / mid (>25) / near** — road.jsx:719-725; ★nodes HIDDEN at FAR (lodHidden) | core | HIGH | ★at FAR the nodes don't exist visually — per-node encodings are MID/NEAR-only by construction; FAR meaning must ride terrain/aggregate/furniture |
| A15 | **Settlement chips (top-12 at FAR, rest MID) + hover chip + all flyouts/panels (search, OPEN FIELD, RECENT, anomalies, scrub labels)** — hud.jsx | core | HIGH | TEXT everywhere identity appears; the OPEN FIELD rows = text with colored essentiality badge |
| A16 | **detail.jsx = the reading organ** (title, chips, edge lists w/ notes, RouteList, body markdown, buttons) | sub | MEDIUM | text by design (the trust-critical organ); scanned-shallow — role established in session |
| A17 | **Orbital lenses (chains/flat): golden-angle ring + fibonacci spheres + dust shell; same color/size vocabulary** | sub | HIGH | position spent on arbitrary index (the 16-05 diagnosis, still true there); kept as structure views |
| A18 | **Free channels summary (derived from A1–A17):** shape · texture/material · under-node volume/fill · orientation · Z-semantics (reallocation) · per-node micro-geometry (facets, stacking) · aggregate/terrain skins at FAR · sound (out of scope) | core | HIGH | the design's supply side |

### Region B — THE MEANING SUBSTRATE (artifact; schema.py + data.js + the 21-48 census standing)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| B1 | **In data.json TODAY, per node:** status, flowType, createdAt/lastWorkedAt, events[] (count+span), edges by 6 types (in/out → degree), group membership, openRoutes[] (count, essentiality/priority/engagementType per row, ticked), body bytes | core | HIGH | encodable TONIGHT — no new parse |
| B2 | **Derived-but-unused today:** per-node event DENSITY (events/span), open-route essentiality MIX (core vs peripheral counts), inbound-vs-outbound edge split, chain depth (hops along continues-from), descendants count (what was built ON this) | core | HIGH | mechanical derivations of B1 — no new data needed |
| B3 | **Parseable but UNPARSED (offers pending):** finding sections (Summary, MUST/COULD/DEFERRED counts, Refinement Triggers count, Open Questions count, Inherited-Commitments presence+count), canon-citation counts (C2: 73/308/31), docarchive file count (0–7+ discipline outputs), _route identity count, iteration count, finding length | core | HIGH | rides the offered second parse (21-48 R1) |
| B4 | **Freestyle tags (08-35):** designed, UNSHIPPED — the only ABOUTNESS substrate in the pipeline; C2 citations = the only retroactive aboutness signal | core | HIGH | ★aboutness has NO shipped per-node data today |
| B5 | **"BACKING" candidates (altını doldurmak — which countable could honestly mean 'how solidly backed'):** (i) SUPPORT-BELOW reading: docarchive file count (pipeline completeness: 7 discipline outputs = full traverse), events count (work sessions), iteration count, Inherited-Commitments-Re-test presence/count, canon citations OUT (grounding in canon), probes/evidence — partially parseable; (ii) LOAD-ABOVE reading: inbound refinement edges (corrects/refines/supersedes pointing here = things BUILT ON it), consumer marks, canon promotion (17 exist), descendants count | core | HIGH | ★backing is TWO distinct countable directions — what supports it vs what rests on it; both honest counts; tagged, not adjudicated |
| B6 | **The composite-score temptation:** any single "solidity index" blending B5's counts = a SCORE (violates counts-never-scores); per-count channels or discrete-unit rendering stay honest | core | HIGH | the rail applied to the candidate — flagged for sensemaking |
| B7 | **Cross-node/aggregate countables:** per-venture (group) roll-ups — member count, span, open-route sum, status mix — the region-ledger offer's fields (21-48 ②) | sub | HIGH | the venture-level holistic instrument, offered |

### Region C — TEXT-DEPENDENCE (empirical; from A's ledger + the recovered 12-task list)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| C1 | **The 12 tasks recovered verbatim** (14-50: find inquiry X · recent work · what continues what · where am I · stale/aging · active now · parse drops · read THIS finding well · jump to editor · feels alive; 16-05: task 11 = 30s zero-click narration; 16-41/route-build: task 12 = see my open field) | core | HIGH | the audit frame |
| C2 | **Pixels-only audit:** PASS on pixels alone — where-am-I (beacon), stale (ash), active (pulse), continues (arcs), feels-alive (motion), recent-SPOT (ember); MIXED — narration-11 (structure=pixels, protagonists/content=TEXT banners), open-field-12 (spot=pennants, content=text rows), recent-IDENTITY (text); TEXT-REQUIRED — find-X (inherently named), read-finding (inherently text), parse-drops (numeric badge), jump-to-editor (button) | core | HIGH | ★THE MEASURED COMPLAINT: pixels answer WHEN / HOW-MUCH / HOW-RECENT / HOW-CONNECTED; TEXT answers WHAT-IT-IS and WHAT-IT-SAYS — identity and aboutness have zero pixel presence |
| C3 | **The FAR-zoom inventory:** pixels say effort-terrain, gaps (pleats), calendar skeleton (pylons), NOW; everything else at FAR is text sprites (banners, top-12 chips) over hidden nodes | core | HIGH | task 11's zero-click narration currently RIDES TEXT for all content |
| C4 | **What pixels CANNOT say today (the gap list):** what a thing is ABOUT · how SOLID/backed it is · what KIND of work (flow-type, engagement) · what it CONCLUDED · essentiality of its open routes (flag height = count only, mix invisible) · venture identity without reading its chip | core | HIGH | the demand side, measured |

### Region D — VISUAL-ENCODING PRIOR ART (possibility case; external-tradition supply, honesty risks flagged)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| D1 | **The visual-variable kit** (cartographic tradition): position, size, shape, value (light/dark), color hue, orientation, texture/grain — with the ORDERED/UNORDERED split: position/size/value read as MORE-LESS (quantitative); hue/shape read as DIFFERENT-KIND (nominal); orientation/texture in between | core | HIGH | the supply vocabulary; binding rule: quantity→ordered channel, category→nominal channel — mismatches produce misreads |
| D2 | **Preattentive channels** (<200ms, no serial scan): color pop-out, size, orientation, motion — what "at a glance" literally means | core | HIGH | the holistic-read mechanism |
| D3 | **Composite-glyph limits** (Chernoff-face failure): >3–4 channels per glyph read as noise, not meaning; unordered channel assignments unlearnable | core | HIGH | caps any per-node encoding plan |
| D4 | **Fill-level / gauge encodings:** fill-RATIO of a container reads reliably; absolute 3D VOLUME is systematically misread (power-law underestimation); ★DISCRETE STACKED UNITS (cubes, bricks) read as COUNTS — one unit = one thing, honest by construction | core | HIGH | ★"cubes" natively fit counts-never-scores: a stack of N cubes = a count, not a score; continuous volume = score-like and misread — the candidate's honest form |
| D5 | **Texture/wear as material honesty:** worn/eroded/weathered surfaces read as AGE/USE without labels | sub | MEDIUM | candidate for staleness redundancy or event-density |
| D6 | **Structural BACKING metaphors:** foundation pilings, plinths, bedrock-vs-stilts, scaffolding(temporary)-vs-masonry(permanent) — architecture's own vocabulary for "how solidly backed" | core | HIGH | the altını-doldurmak family; under-node = A8's free slot |
| D7 | **Small multiples:** same layout repeated, one variable per panel — the classic "see together in various modes" answer | core | HIGH | candidate architecture for modes |
| D8 | **Semantic zoom:** meaning-density grows with proximity (LOD already = its skeleton: far/mid/near) | core | HIGH | the existing LOD is半 the mechanism; what appears per band is the design question |
| D9 | **Redundant encoding:** the same variable on two channels boosts legibility (already practiced: pennant height + flyout count) | sub | HIGH | legitimizes double-carrying |
| D10 | **The legend/learnability cost:** every new encoding must be learned; a glyph key (legend) is the standard price; unlabeled encodings decay into decoration | core | HIGH | the counter-pressure against channel maximalism |
| D11 | **Known 3D honesty risks:** occlusion (things hide things), perspective size-distortion (near reads bigger), volume misread (D4), double-encoding drift | core | HIGH | the risk register for any 3D binding |
| D12 | **Cartographic symbolization** (the road's own genre): settlements/pylons/pennants are already GLYPHS — the road is a map, and maps solve meaning-without-reading via a symbol vocabulary + a legend | sub | HIGH | the genre-native framing of the whole ask |

### Region E — MODES / CUSTOM VIEWS (artifact)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| E1 | **The lens architecture as built:** scene.jsx router (road \| orbital); lens row [road/chains/flat]; status filters; lensGroups() derivation (grouping always view-side) | core | HIGH | modes today = 3 layouts × 3 status toggles |
| E2 | **The overlay principle verbatim (23-26, standing):** "groups by canon area as OVERLAYS on the Time-Road — hulls/tints plus a grouped flyout — NEVER a repositioning… position = time is the map's settled primary channel" | core | HIGH | the inherited commitment squarely in this dive's blast radius |
| E3 | **The position-law verbatim (16-05):** "a primary dimension needs the primary channel" — and its converse lesson: channels spent on meaningless coordinates read as waste | core | HIGH | the generalizing precedent the user's question extends |
| E4 | **"Custom views" architectural candidates:** (i) more designed lenses (code per view); (ii) overlay TOGGLES on the road (meaning-layers on/off — hulls, fills, glyph sets); (iii) a runtime BINDING-PICKER (user maps a data field → a channel; honest because fields are counts); (iv) small multiples (N mini-roads, one variable each); (v) saved filter+binding presets ("my views") | core | HIGH | enumerated, not adjudicated |
| E5 | **The region-ledger offer (21-48 ②)** — per-venture countable roll-ups; a holistic instrument already gated | sub | HIGH | the venture-level "state of the project" data feed |
| E6 | **The scrub-strip precedent:** a 2D mini-view mirroring the 3D world's proportions (weeks, pleats) — the app already runs a second synchronized representation | sub | MEDIUM | small-multiple-adjacent precedent in-house |

### Region F — HONESTY RAILS (artifact, quick)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| F1 | **Counts-never-scores** (21-48): render counts; never blend into indexes/ratings | core | HIGH | binds B6, D4 |
| F2 | **The atlas-domain rule** (16-41, clarified 21-48): RENDER folder-resident content; READ other homes as names+counts; CONTENT-render needs that home's lens+gate | core | HIGH | binds tag/canon-area rendering |
| F3 | **No-LLM-at-render; generate-time only** | core | HIGH | any semantic derivation happens in the adapter |
| F4 | **No fabrication:** every pixel mechanically derived from parsed record fields; "—" never invented (practiced in the route layer) | core | HIGH | the pixel-provenance rule |
| F5 | **The 08-35 tag stack (if shipped):** inline `tags: [a, b]` ≤7 at CONCLUDE → adapter normalization → optional tag_map→canon-areas + unmappedTags counter | sub | HIGH | the future aboutness feed's exact shape |

## State Summary

- **Territory echo:** the built app's source (5 files), the schema, the standing censuses/verdicts, the visual-encoding tradition (possibility case), the modes architecture, the rails.
- **Purpose echo:** supply the meaning→geometry design adjudication with the channel ledger, the substrate census, the measured text-dependence, prior-art supply, modes candidates, and rails.
- **Coverage map:** A confirmed (4 files read fully; detail.jsx scanned-shallow, role session-known) · B confirmed · C confirmed (task list recovered verbatim; audit complete) · D confirmed (possibility sweep, bounded) · E confirmed · F confirmed.
- **Confirmed-absent:** no per-node aboutness data in data.json today (B4); no under-node geometry of any kind (A8); no shape/texture variation (A6/A7); no existing legend/key UI anywhere in the app (D10's price is unpaid because nothing needed one — only the staleness ramp and pennants, both unlabeled).
- **Concept-names:** channel ledger (coined, A) · taken-but-meaningless Z (A3) · the pennant precedent (A10) · FAR-hides-nodes (A14) · support-below vs load-above backing (B5) · the composite-score temptation (B6) · ordered/unordered channels (D1) · discrete-units-read-as-counts (D4) · backing metaphors (D6) · semantic zoom (D8) · legend cost (D10) · binding-picker (E4) · pixels-say-when-text-says-what (C2).
- **Recency:** app files + schema mtime 2026-07-12 (built yesterday); findings 2026-07-12/13; prior-art possibility items source:none.
- **Frontier flags:** none blocking — one soft note: detail.jsx scanned-shallow (its text-organ role is not in question; re-open only if a design binds detail-side rendering).
- **Workspace-populated:** {populated: true, extent: all six regions in-context}.

## Telemetry

Mode: artifact (A/B/C/E/F) + possibility (D) · entry: signal-first. Cycles: 6 (one per region). Items: 54 enumerated → 40 core / 12 sub / 2 side-absorbed. Sub-phase: not fired (explicit-bounded). Convergence: territory exhausted at this resolution; uncertainty-includes honored (D5/E6 kept at MEDIUM). Workspace-overload: not approached. Failure modes checked: missed-relevance (the 12-task list was initially missing → recovered in-region, not deferred), surfaced-irrelevance, territory-mis-binding, workspace-artifact desync, recency-bias (none fired). items_with_mtime: 39 / without: 15 (possibility items).

**Verdict: PROCEED.**
