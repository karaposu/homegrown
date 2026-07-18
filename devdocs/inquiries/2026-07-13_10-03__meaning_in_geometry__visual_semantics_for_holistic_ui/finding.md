---
status: active
model: claude-fable-5
effort: unknown
refines: devdocs/inquiries/2026-07-12_16-05__atlas_usefulness_rethink__time_axis_surface_layout/finding.md
---
# Finding: meaning in geometry — the Venture Atlas's semantic layer

## Changes from Prior
**Prior path:** devdocs/inquiries/2026-07-12_16-05__atlas_usefulness_rethink__time_axis_surface_layout/finding.md (the Time-Road design — time as position on a terrain ribbon).
**Revision trigger:** the user's follow-up question — the road solved WHEN; meaning (what things are, how solid they are) still lives only in text, and "putting titles on each node is hardly a good way to make this UI state usable."
**What's preserved:** position = time, untouched; the terrain-elevation = weekly-effort read (the ribbon surface is unchanged); the staleness color ramp; the pennant flags; the lens architecture; every honesty rail.
**What's changed:** node size is re-adjudicated from raw connection count to "things built on this" (the 14-50 app-design finding committed size=degree; this finding re-opens that with grounds — see Inherited Commitments). Node vertical position gains a disclosed second component: nodes now STAND on their foundation stacks (terrain height + standing height, both meaningful).
**What's new:** the semantic layer — a phased binding table assigning the record's countable meanings to the scene's free geometric channels; the foundation encoding (the user's "altını doldurmak" made literal); the KEY (the app's first legend); named saved views; a 13th usefulness task, gated on its instrument.
**Migration:** none breaking — everything lands as gated offers; nothing here builds without the user's go.

## Question

The user, continuing from the built Time-Road: *"Let's dive deeper into what makes UI helpful and useful. The main focus: the UI helps us see things together and in various modes, and gives holistic understanding of the state of the project, ventures, and custom views. But the big question is how? In Turkish we have a saying — 'altını doldurmak,' filling underneath something, as in how solidly it is backed. Maybe something like this, and cubes instead? But the main issue: even with UI elements, the meaning is still in text. Putting titles on each node is hardly a good way to make this UI state usable or a good visualization. Yes — the question is clearer now: how can we represent meanings in a geometrical or visual way?"*

## Finding Summary

- **The complaint was measured before it was answered.** Auditing all 12 standing usefulness tasks against the built app's actual code: pixels today answer WHEN (position), HOW MUCH (elevation, size), HOW RECENT (color), and HOW CONNECTED (arcs) — while WHAT-IT-IS and WHAT-IT-SAYS live entirely in text. Identity and aboutness have zero pixel presence. The user's instinct is a measured fact.
- **The atlas already contains the answer's pattern, once.** The teal route-pennants (flag height ∝ open-route count) are a live meaning-in-geometry encoding. The whole design generalizes that one move into a SEMANTIC LAYER: a ten-row binding table assigning each countable meaning to a free visual channel, at a zoom level, in a data phase — nothing invented, everything a count.
- **The flagship is the user's own saying, made literal.** Under every node, a stack of flat stone-colored slabs — one slab per discipline record actually present in that inquiry's archive (0–7). The node STANDS on its stack: well-worked findings literally stand taller; an unworked note sits on bare ground. Discrete slabs = counts (honest by construction — the "cubes" intuition was right, and more literal than sketched). One naming rule binds it: the stack is called "worked-through" — process depth — never "solid = true," because a fully-processed finding can still be wrong.
- **Node size changes meaning (the one re-adjudication):** from raw connection count (noise-dominated — 487 of 746 edges are loose "related" links) to "how much was BUILT ON this" (inbound continuation/synthesis/grounding edges). Same channel, sharper meaning; the old number stays in the detail panel; the KEY discloses the change.
- **"See together, various modes, custom views" lands as composition, not new layouts:** meaning-layers ship always-on with a declutter tray (toggles remove, never rebind); "custom views" gets a first-class surface — NAMED SAVED VIEWS (save the current lens+filters+layers+sort state under a name; ~30 lines, no server). A runtime field-to-channel picker was killed for v1 — it invites dishonest bindings (a count on a color hue reads wrong) — with a named revival trigger.
- **The far-zoom story view gains its first non-text meaning:** venture settlements become tiered platforms (hamlet / town / city by member count, footprint spanning the venture's true time-extent) — the "holistic understanding of ventures" read, in pixels, where node-level glyphs are hidden by design.
- **Two obligations were discovered, not chosen:** THE KEY (the app's first legend — the existing ramp and pennants already ship unlabeled; a third unlabeled encoding tips the whole scene into decoration), and NO FALSE SIGNIFIERS (once geometry is semantic, arbitrary variation becomes a lie surface — the standalone markers' alternating roadside placement gets regularized; the key's last row states "road curve & lanes carry no meaning").
- **What geometry CANNOT carry is named out loud:** conclusions, the content of what a finding says, aboutness beyond family-membership, per-claim evidence. Those stay text, permanently; the already-offered summary-first reading surfaces (from the 21-48 generation-layer finding) remain that half's honest fix. Geometry gets exactly the countable meanings — which is what the measured gaps are.
- **Everything is phased to its data:** ships-now rows need one small adapter addition; deeper rows are pre-designed and wait on the second parse (re-tested-commitment footings) and on the freestyle tags (an aboutness shape-vocabulary, reserved at ≤6 families). The offers: ①a foundation+key (the recommended first, felt-channel-judgeable move) → ①b the refinement trio → ② settlement tiers → then the data rides.

## Finding

The Venture Atlas (the 3D map of the project's 230 inquiry folders at `docs/visualisation/app/`) got its time axis right yesterday: the Time-Road put position = time, and the story's SHAPE became readable at a glance. This dive answers the next complaint: the story's CONTENT — what anything is, what it concluded, how much stands behind it — still requires reading text. The user asked for meaning in geometry. The answer below is a design adjudication with mechanisms, landing as gated offers; nothing is built yet.

### 1. The measured gap (what pixels say today vs what they can't)

Reading the app's actual bindings from code: position-X carries time (true-scale, with folded quiet gaps); elevation carries weekly effort; node color carries recency (ember→ash) plus status accents; node size carries connection count; teal pennants carry open-route counts; arcs carry continuation. That set passes eight of the twelve standing usefulness tasks on pixels alone — but every task touching IDENTITY or ABOUTNESS (find X, read the finding, know what a venture is about, know how solid something is) requires text. Meanwhile the free channels sat unused: node shape (all spheres), texture (uniform), orientation, the lateral road axis (spent on collision-avoidance, not meaning), and — the empty slot the user's saying points at — the space UNDER each node.

### 2. The binding table (the design's core artifact)

Each row: a meaning → its exact data field → a channel → an honest form → a zoom band → a data phase. The form rules do the honesty work: quantities ride ordered channels (size, height, count-of-units); categories ride nominal channels (shape); every encoding is a count or a disclosed bin — never a blended score (the standing counts-never-scores rail).

**Ships-now rows (data already in `data.json` or one small adapter addition):**
- **Backing (support-below)** → the foundation stack (section 3) — one slab per discipline record in the folder's `docarchive/`, 0–7.
- **Built-on-ness (load-above)** → node size, re-bound from raw degree to inbound continuation/synthesis/grounding/branch edges, log-binned. Rationale: raw degree is dominated by loose "related" links (487 of 746 edges); "things that built on this" is strictly sharper on the same ordered channel. The raw number remains in the detail panel; the KEY row is mandatory at ship.
- **Open-route essentiality mix** → the pennants, refined from height-∝-count to ONE FLAG PER ROUTE stacked up the pole, core routes larger and brighter, capped at six with a condensed tip. This applies the design's own discrete-unit principle back onto the existing encoding.
- **Venture size and state (the far-zoom layer)** → tiered settlement platforms: footprint spans the venture's real time-extent; the tier bins by member count (2–4 / 5–9 / 10+, disclosed in the key); an accent glow marks ventures with an active member — the only far-zoom active signal, since individual nodes are hidden at that distance by design.
- **Work kind (flow-type)** → demoted to the detail panel: honestly low glance-value (the recent record is near-uniform on it), and demoting it keeps the shape channel free for the one nominal meaning that will deserve it (below).

**Pre-designed rows waiting on their data (slots, not builds):**
- **Re-tested commitments** (when the offered finding-section parse ships) → a second, darker course material stacked beneath the discipline slabs — verification acts as the deepest footing.
- **Verdict/section counts** (same parse) → numerals in the offered flyout surfaces (Watchtower, guidance shelf), NOT node geometry — counts that granular read better as numbers.
- **Aboutness families** (when the freestyle tags flow and the project-side tag map exists) → the RESERVED nominal channel: a node-shape vocabulary of at most six distinguishable forms, plus the already-offered hull overlay as the any-zoom reader. Shape was chosen over color-family because color is already spent on a working, learned, ordered encoding (recency) — demolishing a working channel to house a data feed that doesn't exist yet fails on both honesty and economy.

**Named OUT, permanently:** conclusions and prose content, aboutness beyond family membership, per-claim evidence. Geometry carries countable shadows; the record's sentences stay sentences. The summary-first detail view (offered in the 21-48 atlas-content finding) is that half's fix, and this design does not displace it.

### 3. The foundation — "altını doldurmak," literalized

The saying means filling in under something — how solidly it is backed. Its geometry here: flat square slabs (0.66 × 0.14 × 0.66 units, slight per-course inset, earth-stone palette distinct from the teal pennants), stacked from the terrain surface up; the node sphere rests on the top course. One slab per canonical discipline record present in that inquiry's `docarchive/` — a full traverse shows seven courses; a bare note sits directly on the ground. Absence looks like absence.

Three adjudications shaped it, all from the gate:

1. **The under-position survived its strongest challenger** ("underneath is the worst place on a terrain ribbon — it sinks into the ground"). The answer: the stack doesn't sink; it LIFTS. Nodes currently float a constant half-unit above the terrain; the stack occupies and extends that gap so the node stands on it. At the camera's low oblique angles stacks read as silhouettes against the ribbon; from overhead the square footprint separates backed from bare. And the lift is a free preattentive bonus: well-worked findings stand taller. Alternatives died on mechanics: a fill-level inside the node is sub-pixel at the zoom where it must read; a beside-the-node bar collides with the pennant pole.
2. **The vertical-axis worry was prosecuted and resolved by a surface/object split.** Elevation = weekly effort is the terrain SURFACE's meaning, and the surface is untouched; nodes are objects standing ON the ground, a frame nobody misreads (buildings don't confuse hill height). The scales are an order of magnitude apart (terrain varies ~8.5 units; lift caps at ~1.0), and within a settlement the smoothed terrain is locally flat — so exactly where nodes get compared, height differences read as pure backing. One requirement came out of the prosecution: the stack must be visually continuous from ground to node — no air gap — so the eye parses "object on ground," never "node at meaningful altitude."
3. **The naming rule.** A seven-course stack means the finding was WORKED THROUGH — every pipeline stage ran, including the adversarial gate. It does not mean the finding is TRUE. The key's wording is therefore count-true ("discipline records completed"), the finding language is "worked-through / process-backed," and "solid/trustworthy" is banned as the stack's gloss. The saying is served in its strongest honest reading: backed by work. When the parse ships, the re-test footings move the encoding one step closer to genuinely epistemic backing — re-tested commitments are verification acts.

The likely cold-viewer misread was checked: stacked plinths could read as "importance" (monument pedestals). The misread is adjacent rather than inverted (established ≈ backed), the masonry look cues construction stages, and the key corrects it in one line.

### 4. Modes and custom views — composition over layouts

"Various modes" and "custom views" do not mean new layouts. The standing overlay law (from the 23-26 tag finding: meaning arrives as overlays on the road, never as repositioning; position = time is the settled primary) was tested against this ask and held BY ITS OWN SCOPE: it governs the road; repositioning views have always been separate lenses (chains, flat). So:

- **Meaning-layers ship always-on** as the designed default; a LAYERS tray (road lens only) lets any layer be hidden — toggles remove, never rebind, so no toggle state creates a new meaning to learn.
- **NAMED SAVED VIEWS** is the custom-views surface: the URL hash already deep-links; extended to encode the full view state (lens, filters, layers, sort), plus a small named list in browser storage — "save this view," one click back. This came out of the gate: the user's own phrase deserved a first-class affordance, not a renamed-down "use bookmarks."
- **The runtime binding-picker was killed for v1** — letting a user bind any field to any channel invites the exact dishonesty the form rules exist to prevent (a count on a hue; a category on a size) and multiplies the legend. Revival trigger, named: more than six layers exist, or the user asks for a custom binding.
- **Small multiples deferred** (no current task needs side-by-side variable views; the scrub-strip proves the cheap 2D form if one arrives). **A position-rebound "solidity lens"** (road re-sorted by backing instead of time) is named as legitimate lens territory — not built; gate = the user asks.

### 5. The two discovered obligations

**THE KEY.** The app has never had a legend; the staleness ramp and the pennants ship unlabeled today and read as decoration to a cold viewer — which is precisely the user's complaint generalized. A `ⓘ KEY` flyout joins the HUD (one swatch row per live encoding, six words each; auto-opens once on first visit), and its last row is an honesty device: "road curve & lanes carry no meaning." A design rule rides it: every encoding must be GUESSABLE in-genre first (stacks = built-up; flags = posted notices; tiers = city size) — the key confirms a guess; it must never be needed to form one.

**NO FALSE SIGNIFIERS.** Once viewers learn that geometry means things, arbitrary variation starts lying. The audit found three: standalone markers alternate roadsides by index parity (arbitrary — regularized to one shoulder, a one-line change); the road's S-curve (kept — globally uniform, reads as structure, aids depth); lane assignment (kept — lanes separate temporally-overlapping ventures, which is quasi-meaningful concurrency).

### 6. What the design changes about "useful"

Re-running the twelve-task audit against the designed layer: two tasks partially flip from text to pixels — the 30-second story read gains venture size-class and built-up-ness as pure pixels (names stay text banners, honestly), and the open-field read gains the essentiality mix at mid-zoom without opening the flyout. Four tasks stay text forever (finding X by name, reading a finding, the numeric anomalies badge, the editor jump) — named, not hidden. And a THIRTEENTH task is born, gated on its instrument, following the frame's own precedent (the 12th task arrived with the route layer): **"spot what's well-backed at a glance"** — it exists the day the foundation ships.

## Inherited Commitments Re-test

- **Commitment:** position = the strongest channel, spent on time; "a primary dimension needs the primary channel."
  **Source:** the 16-05 Time-Road finding.
  **Re-test status:** RE-TESTED — commitment confirmed.
  **Evidence:** position-X untouched by every surviving candidate; the meaning-first redesign probe ("would position=time survive a from-scratch meaning-first design?") answered YES on the record's measured journey shape. The node-lift adds standing height ON the terrain (an object layer), not a rebind of the terrain's meaning — disclosed in the key.
- **Commitment:** the overlay law — meaning-groupings arrive as overlays on the road, never a repositioning.
  **Source:** the 23-26 tag finding (as amended by 08-35).
  **Re-test status:** RE-TESTED — commitment confirmed, scope stated.
  **Evidence:** all new geometry is in-place; the law's own text governs the road's grouping, and repositioning vehicles were always separate lenses (chains/flat precedent) — so the named solidity-lens shelf does not strain it.
- **Commitment:** the atlas-domain rule (render folder-resident content; other homes as names+counts) and counts-never-scores.
  **Source:** the 16-41 foreseer finding as clarified by 21-48.
  **Re-test status:** RE-TESTED — commitment confirmed, strengthened.
  **Evidence:** every table row names a folder-resident field; the tag map stays project-side; every encoding is a count or disclosed bin, and the discrete-unit principle even upgraded the existing pennant encoding from a scaled height to countable flags.
- **Commitment:** node size honestly encodes degree.
  **Source:** the 14-50 app-design finding (the feature matrix's scene organ).
  **Re-test status:** RE-TESTED — commitment found INVALID as stated; re-adjudicated.
  **Evidence:** the measured edge census shows raw degree is noise-dominated (487 loose "related" edges of 746 total); "inbound built-on count" is strictly more meaningful on the same channel. The re-bind ships only with its key row; raw degree remains visible in the detail panel.
- **Commitment:** the operational-task frame defines "useful" (a feature is required iff a task fails without it).
  **Source:** the 14-50 finding, extended by 16-05 (task 11) and the route build (task 12).
  **Re-test status:** RE-TESTED — commitment confirmed; the frame grew by its own rule.
  **Evidence:** the audit ran all twelve tasks before/after; task 13 arrives gated on its instrument, exactly as task 12 did.

## Next Actions

### MUST
- **What:** place the consumer marks on the four prior route-maps (16-05: the semantic layer + the y-disclosure; 14-50-family: the size re-adjudication; 21-48: two new parse consumers; 08-35/23-26: the tag/shape consumer) and mirror this landing to persistent memory.
  **Who:** this session. **Gate:** at this inquiry's close (now). **Why:** a re-adjudicated shipped encoding left unmarked misleads every future reader of the priors.

### COULD
- **What:** ①a THE FOUNDATION + THE KEY build — the flagship pair (slabs + node-lift + ground-continuity + the naming rule; the KEY flyout + first-visit auto-open). Data: one adapter field (docarchive count) + client derivations.
  **Who:** the assistant builds; the user gates. **Gate:** the user's go. **Why:** the saying on screen; task 13's instrument; one felt-channel-judgeable move — the recommended first.
- **What:** ①b the refinement trio (size re-bind + flag-per-route + one-shoulder + the LAYERS tray).
  **Who:** same. **Gate:** the user's go, after ①a's felt acceptance. **Why:** the layer's system claim — existing encodings brought to the same honesty standard.
  **Depends-on:** COULD item "①a the foundation + key" — GATED: the acceptance-pass discipline judges the flagship before the vocabulary grows.
- **What:** ② the settlement tiers (the far-zoom venture layer).
  **Who:** same. **Gate:** the user's go (can ride ①a or ①b). **Why:** "holistic understanding of ventures," in pixels, at the story zoom.
- **What:** NAMED SAVED VIEWS (~30 lines; rides any build or stands alone).
  **Who:** same. **Gate:** the user's go. **Why:** the user's "custom views," served first-class.

### DEFERRED
- **What:** the v2 course material (re-tested-commitment footings) + the flyout count surfaces. **Gate:** the second parse ships (the 21-48 finding's offer ①). **Why (if revived):** backing deepens from process-depth toward verification-depth.
- **What:** the aboutness shape vocabulary (≤6 families) + hull overlay. **Gate:** freestyle tags flow + the project tag map exists (the 08-35 finding's stack). **Why (if revived):** what-things-are-about becomes visible without reading.
- **What:** the solidity lens (position re-bound to backing). **Gate:** the user asks. **Why (if revived):** a legitimate separate vehicle, jurisdiction pre-settled.
- **What:** the runtime binding-picker; small multiples. **Gate:** >6 layers or an explicit ask; a task needing side-by-side variables. **Why (if revived):** composition beyond designed bindings, once honesty can be preserved.

## Reasoning

The kills, with their grounds: **continuous volume under nodes** (systematically misread in 3D and score-shaped — discrete slabs read as counts, which is also what the rails demand); **any composite "solidity index"** (blending counts into a score violates counts-never-scores; every channel carries ONE named count); **cubes as the nodes themselves** (conflates the nominal shape channel with a quantity — same-kind findings would look like different species at different backing); **re-binding node COLOR to a new meaning** (the recency ramp measurably serves two tasks on pixels alone; demolishing a learned, working, ordered encoding to free a channel for data that doesn't exist yet pays a re-learn cost for nothing); **the runtime binding-picker for v1** (invites dishonest bindings and legend churn; revival named); **per-node glyphs at far zoom** (nodes are hidden there by the LOD design — far meaning must ride aggregates, which is what the settlement tiers are); **warm-territory small multiples now** (no task demands them).

The survivals, and why they held at the gate: **the foundation** survived its strongest prosecution (the vertical-axis collision) through the surface/object split plus the ground-continuity requirement, and its misread risk proved adjacent-not-inverted; **the size re-bind** survived because the edge census (not taste) showed raw degree is noise; **the pennant refinement** survived because stacked discrete flags preserve magnitude while adding the essentiality read; **the tiers** survived with disclosed bins and a far-zoom-only active accent that is NOT redundant there (nodes hidden); **the key** survived its own inversion ("good encodings need no legend") by adopting the true half as the guessable-in-genre rule; **the frame itself** (a binding TABLE rather than one big move) survived the fewer-bigger-moves challenge by pushing the granularity into the offers (①a is exactly the one-big-move option, first).

The deepest challenger was run fairly: "a record of 230 prose findings is irreducibly textual — geometry can only carry thin countable shadows; the honest fix is better text surfaces." Its true half is IN the finding (the named-OUT list; four tasks text-forever; the summary-first reading surfaces un-displaced). The rest fails against the measurement: the gaps the audit found are precisely countable meanings — backing, essentiality, kind, venture size — which is geometry's native grain, and the design claims nothing beyond them.

## Open Questions

### Monitoring
- Occlusion at dense settlements (10+ nodes with stacks + flags + arcs at mid-zoom) — accepted by design analysis; judged for real at the acceptance pass.
- The guessability bet: do cold viewers read stacks as "worked-on" (intended) or "important" (adjacent misread) before opening the key?
- Does the always-on layer set stay under the legibility budget at 500 nodes (the record's ~3-month growth extrapolation), or does the LAYERS tray become load-bearing?

### Blocked
- The re-test footings and count surfaces wait on the second parse; the aboutness shapes wait on tags + the tag map.

### Refinement Triggers
- **The binding-picker revives** when >6 meaning-layers exist or the user asks for a custom binding.
- **The solidity lens opens** on the user's ask (jurisdiction pre-settled: a lens, not a road change).
- **The naming rule re-opens** only if a future countable genuinely measures verification (the re-test footings are the first step; a "gate-survival" count would be the second).
- **The shape-vocabulary cap (≤6 families)** re-opens only if the tag map's family roll-up proves coarser than the record's real aboutness structure — the specific blocking feature is shape-channel distinguishability, not the taxonomy.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
lets dive deeper into what makes UI helpful and useful 

and our main focus should be UI helps us see things together and in  various modes. and help us have holistic understanding of state of the project, ventures and custom views. 

but big question is how? 


in turkish we have a saying "altini doldurmak" which means filling underneath of sth as if how solid it is backed. Maybe sth like this and cubes instead ?  but still main issue we have is, even if we have representation using some UI elements, the meaning is still in text. putting titles on each node is hardly a good way to make this UI state usable or a good visualisation. 


Yes. the question is more clear now. How we can represnt meanings in geometrical or visual way.
```

</details>
