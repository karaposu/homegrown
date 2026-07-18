---
status: active
model: claude-fable-5
effort: unknown
---
# Finding: the label-system fix + semantic identity objects

## Question

The road view's label system has three live defects (items 5–7 of the 2026-07-15 UI audit): chips truncate mid-word at ~30 characters, labels collide with labels with no decluttering, and the giant chapter banners leak through mid-zoom scenes. The user: "yes this needs a better fix" — offering three directions: tags, realtime AI summaries, or rendering each inquiry as a visually identifiable semantic object — "I think the latter is big breakthrough." The ask: fix the label system, adjudicate the three directions, develop the semantic-objects idea concretely, and grade the breakthrough claim honestly.

## Finding Summary

- **The better fix is two lanes.** Lane 1 repairs the three label defects now — presentation-only, buildable at your word, waiting on nothing. Lane 2 is the cause-fix your instinct pointed at: give every inquiry a visible BODY instead of a text caption.
- **Lane 1 is organized by a three-tier label hierarchy**: chapter banners own FAR (regions), settlement chips own MID (areas), full node titles own NEAR (points). Semantic zoom — labels growing as you approach — is the transition rule between tiers. Four and a half techniques implement it (banner band-gating, two-line chips with end-fade, per-band label content, priority decluttering with a hover-always-wins guarantee, and a nearest-N cap at NEAR).
- **Your three directions don't compete — they stack.** Tags feed the future aboutness silhouette. "Realtime AI summaries" is dead at render by your own no-LLM-at-render law, but survives in two legal forms: parsing the already-authored finding titles and summaries (free, no LLM), and an offline display-name batch (gated, reviewable, provenance-marked). Semantic objects consume both as substrates.
- **The semantic-objects idea lands as THE BODY-PLAN**: one composed object per inquiry with zoned channels — backing slabs below, aboutness silhouette on the body (later, from tags), route pennants at the side, activity in the pulse, weight in the size, and the genuinely new channel at the crown: an IDENTITY TOTEM, a small deterministic form derived from the folder's id, letting you recognize and re-find an inquiry without reading anything.
- **The critique fixed the totem's collision math**: ~576 widely-spaced forms assigned by deterministic chronological probing — every current folder gets a genuinely unique form, and the assignment never reshuffles.
- **The breakthrough claim, graded honestly**: not a new paradigm — the strongest available move on the record's measured weakest channel. Genuinely new: the identity channel and the composition law. Already designed elsewhere: most of the body's other channels — which is why this is buildable rather than speculative.
- **Delivery is staged**: totems appear first in the detail view and search results (small build, self-teaching, needs no legend), then on the in-scene crowns riding the queued KEY/legend build (①a).
- One seed recorded (the vocabulary-namespace principle); all builds remain gated on your word; the queue is untouched.

## Finding

The 2026-07-13 geometry audit (`devdocs/inquiries/2026-07-13_10-03__meaning_in_geometry__visual_semantics_for_holistic_ui/finding.md`) measured that identity and aboutness carry **zero pixels** in the current app — text chips are the only identity carrier, and the label audit showed those chips are truncated, colliding, and washed over by banners. So the question is really two questions: repair the words, and stop making the words carry everything. The answer is built accordingly.

### 1. Lane 1 — the label repair (buildable now)

The scene already has three kinds of labels; the repair gives each its own altitude band and stops them fighting:

- **FAR — region labels.** The chapter banners return to being the 30-second aerial layer. Mechanically this is one unwired line: the banner group (`farOnly` in road.jsx) is never hidden today; the fix sets its visibility to the FAR band only, with a short opacity fade so it never pops.
- **MID — area labels.** Settlement chips become two-line labels (~26 characters × 2) whose tails alpha-fade instead of cutting mid-word with "…". A throttled (6 Hz) screen-overlap test declutters them by priority — focused > hovered > settlement size > recency — and losers fade out rather than pop. **The hover guarantee is absolute:** whatever you point at always shows its full name; hover and focus labels are exempt from suppression.
- **NEAR — point labels.** Node labels appear only up close, as full wrapped titles. Today's source is the folder slug (always present); when the queued second content parse ships, the source upgrades to the finding's authored title. A nearest-N cap (~30) keeps the near field readable.

Two adjudications recorded at the gate: varying label *amount* per band is presentation, not a new meaning-encoding — no legend row needed; and acceptance is two screenshots — re-shoot the user's exact reported camera pose (all three defects checkable in that one image) plus one zoomed-in shot for the NEAR titles.

This lane is presentation-only: no new data bindings, nothing waits on the queued legend build. It ships the way the ribbon visibility pass did — a fix-pass at your word.

### 2. Lane 2 — the body-plan and the identity totem

The cause of the label pain is that text is the only identity carrier. The fix is to give every inquiry node a **body** — one composed object whose zones each carry one channel:

| Zone | Channel | Status |
|---|---|---|
| below the node | backing slabs (evidence behind the node) | queued (the ①a build) |
| body silhouette | aboutness family, ≤6 shapes | reserved; arrives with tags |
| **crown** | **identity totem** | **new — this finding** |
| side | route pennants (open routes) | shipped |
| pulse | recent activity | shipped |
| size | built-on weight | queued |

Two rules make the composition honest. **The vocabulary namespace:** each zone's forms must be visually disjoint — a crown segment that resembled a slab or a pennant would read as backing or routes, a false signal by collision. **The gestalt requirement:** the features must read together as one object at a glance, not as five overlays to decode. The same body renders in every view (road and the queued lens alike).

**The totem** is the genuinely new channel. It is a small stack of 2–4 abstract primitives at the node's crown, derived deterministically from the folder's id — a real, permanent field, so this is a legal READ binding under the two-halves layout rule, with its legend row already worded: *"the crown pattern is derived from the folder's id — it identifies; it does not describe."* Totems never use hue (staleness owns color); they render in neutral warm grey, appear at NEAR and close-MID only, and never change once assigned.

Why a dedicated identity channel at all: the body's other features are low-cardinality (a few sizes, heights, flag counts) — among ~240 folders, structural look-alikes are guaranteed. Only the id can carry uniqueness. That argument satisfies the justify-clause adopted in the 2026-07-14 layout-paradigms finding — this is its first real exercise.

**The collision fix (from this dive's critique).** The draft design offered ~144 quantized forms and called collisions "rare" — false by pigeonhole with ~240 folders. The corrected mechanism: widen to ~576 widely-spaced forms (five quantized parameters — segment count, profile, twist, cap, spacing — each with few, clearly distinct steps, because perceptual distance beats parameter smoothness; this is the known pitfall of GitHub-style identicons, which go samey at scale). Assign forms by **deterministic chronological probing**: process folder ids in their own timestamp order (the corpus is append-only), and on a hash collision, step to the nearest free form. Old assignments never move; new folders route around taken forms. Every current folder gets a genuinely unique totem, and the scheme stays deterministic and stable. Beyond ~576 folders reuse begins — the totem is an identity *aid*; the id remains the key.

**The honest expectation:** on day one totems read as ornament. Recognition compounds with use — the payoff is re-finding ("the twisted-top one") and tracking a thing across views. The learning loop is built in: the detail view shows the totem LARGE beside the title, and search results show a small totem before each name — the association forms where names are read.

### 3. The three directions, adjudicated

- **Tags** (the completed 2026-07-13 freestyle-tags design, awaiting your go) are the substrate for the body's aboutness silhouette — the ≤6 shape families the geometry audit reserved — plus richer hover text. Start-empty, arriving gradually.
- **"Realtime AI summaries" is dead at render — by your own standing law** (no LLM calls while the map renders). What survives: **parse-the-authored** — the finding's title plus its Finding Summary's first bullet, which already exist for every finding (the 2026-07-12 census verified all 225 summaries parse; title presence is by construction and gets a one-grep verify at build) — zero LLM, feeds the NEAR labels, hover, and detail; and the **offline display-name batch** — 3–5-word chip names generated once at build time as a single reviewable artifact, every generated name carrying a "≈" provenance mark, with "replace the slug or sit beside it" decided at that batch's own gate.
- **Semantic objects** are not a third rival: they are the body that consumes both substrates.

### 4. The breakthrough grade

"A big breakthrough?" Honestly sized: the instinct aims at the record's *measured* weakest channel (identity and aboutness at zero pixels) and lands on the right mechanism — object recognition is parallel and pre-attentive; reading is serial. What is genuinely NEW here is two things: the **identity channel** (the totem — nothing in any prior design lets you recognize an inquiry without reading) and the **body-plan itself** (the zoning and one-glance composition rules that make five channels read as one object; no prior artifact states a composition law — the geometry audit binds channels separately). The rest of the body was already designed: the slabs and sizes are queued, the aboutness silhouette was already reserved, the semantic half arrives with tags. That is not a deflation — it is why this is BUILDABLE now rather than speculative. **Verdict: not a new paradigm — the strongest available move on the identity channel, and the frame that makes the queued semantic layer cohere.**

### 5. Delivery and offers (all at your word; the queue untouched)

1. **The lane-1 fix-pass** — repairs defects 5–7 now; two-screenshot acceptance. Parallel-legal like the ribbon pass.
2. **Totem-in-detail-first** — totems only in the detail view + search results; the title pairing teaches what they are, so no legend is needed yet. Small build, parallel-legal (the replay-button precedent).
3. **Totems in-scene** — the crowns; rides the queued ①a KEY build (its legend row joins that backlog). Never before ①a — an in-scene totem cannot label itself.
4. **The display-name batch** — offline, gated at its own gate, one reviewable artifact.
5. **G2 silhouettes** — designed when tags exist on ~15+ folders.

Nothing here re-orders the standing queue (①a first, then the Expedition Log lens); lane 1 and the detail-first totems are parallel-legal additions.

## Seeds

One seed passed the gate this dive:

- **bp-S1 — the vocabulary-namespace principle.** Hypothesis: *maybe any surface that composes multiple visual channels on one body needs explicitly zoned, visually disjoint vocabularies per channel — assign each channel a zone and forbid form-overlap across zones.* Type: inspiration (design-rule). Anchor: the project's multi-channel visual designs (next consumers: the Expedition Log lens's stubs/badges/markers; the era-gated supervision card; any future glyph system). Source + support: heraldry's rule-bound role separation (field/charge/crest — disjoint vocabularies per role is what makes arms readable at a glance), crossed with this dive's near-miss (a totem lobe resembling a pennant would read as a route — a false signal by collision). Door: novelty (no prior artifact states a composition law; the geometry audit binds channels separately — kin-checked). Grade: **nascent**. Maturation trigger: the next design that composes ≥2 form channels on one surface — apply the zoning explicitly and record whether it prevented a collision.

(Two stronger-looking candidates — the body-plan itself and the identity channel — were killed as elements: they are this finding's own committed design content; recording them as seeds would double-record the finding.)

## Inherited Commitments Re-test

- **Commitment:** identity + aboutness carry zero pixels in the shipped app. **Source:** `devdocs/inquiries/2026-07-13_10-03__meaning_in_geometry__visual_semantics_for_holistic_ui/finding.md` (the channel audit). **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** the label audit's own screenshot (text chips as sole identity carrier, truncated); nodes remain uniform spheres in road.jsx.
- **Commitment:** aboutness may become a SHAPE family of ≤6, gated on tags; aboutness CONTENT stays text (the R10 boundary). **Source:** same finding. **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** the body-plan reserves the body zone for exactly this and renders nothing there until tags arrive; no design element here carries content as pixels.
- **Commitment:** every form feature READS a real field or is DECLARED, and a read binding must justify why its field earns a dedicated channel (the two-halves rule + adopted justify-clause). **Source:** `devdocs/inquiries/2026-07-14_12-32__layout_meaning_paradigms_for_atlas_axes/finding.md`. **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** the totem is a READ binding on the folder id with its justification written (the fingerprint-collision argument) — the justify-clause's first real exercise since adoption.
- **Commitment:** identity-bearing forms must be stable and deterministic. **Source:** same 12-32 finding. **Re-test status:** RE-TESTED — commitment confirmed and strengthened. **Evidence:** the chronological-probing assignment preserves determinism and stability even under hash collisions (append-only id order; old assignments never move).
- **Commitment:** the freestyle tags[] design is complete and awaits the user's go; the LLM-pass pattern (offline batch, one reviewable artifact) is the legal shape for generated text. **Source:** `devdocs/inquiries/2026-07-13_08-35__decoupled_tagging__portable_loop_freestyle_tags_consumer_grouping/finding.md`. **Re-test status:** INHERITED-WITHOUT-RE-TEST. **Reason:** out of this dive's scope to re-verify the tag design's internals; consumed as the declared substrate only.
- **Commitment:** all 225 Finding Summaries parse cleanly (the census). **Source:** `devdocs/inquiries/2026-07-12_21-48__atlas_content_generation_for_the_five_operations/finding.md`. **Re-test status:** RE-TESTED — commitment confirmed but frame revised. **Evidence:** the census stands, but this dive's critique narrowed a claim that leaned on it: the census covers SUMMARIES; finding-title presence is by construction and needs its own one-grep verify at build.
- **Commitment:** defects 5–7's mechanics as reported (truncation at call sites; no decluttering; the banner group never hidden). **Source:** the 2026-07-15 UI audit (in-session). **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** code-verified at this dive's surfacing — `farOnly.visible` is never toggled in road.jsx; makeChip is single-line with truncate at call sites.

## Next Actions

### MUST
- **What:** record the wrap set — append bp-S1 to the global seed index, mark the 10-03 route-map's shape-reserve row with the body-plan frame, update the session memory (contract memory section + index line). **Who:** this session's wrap (Claude). **Gate:** immediately after this finding is written. **Why:** the finding declares; the indexes accumulate — without the marks, the next session re-derives.

### COULD
- **What:** build the lane-1 fix-pass (offer 1). **Who:** Claude, in road.jsx/hud. **Gate:** the user's go. **Why:** repairs all three live defects; owed regardless of any identity-channel decision.
- **What:** build totem-in-detail-first (offer 2). **Who:** Claude (detail.jsx, hud search rows, a totem module). **Gate:** the user's go. **Why:** starts the recognition loop with zero scene ambiguity and no legend dependency.
- **What:** run the display-name batch (offer 4). **Who:** an offline generate-time pass producing one reviewable artifact. **Gate:** the user's go at that batch's own gate. **Why:** short readable MID names without violating the no-LLM-at-render law.

### DEFERRED
- **What:** totems in-scene on the crowns (offer 3). **Gate:** ships WITH the ①a FOUNDATION+KEY build (its legend row joins that backlog). **Why (if revived):** the identity channel goes live in-scene, correctly declared.
- **What:** the G2 silhouette arrival design (offer 5). **Gate:** tags exist on ~15+ folders. **Why (if revived):** fills the body's aboutness zone; "semantic object" becomes fully true.
- **What:** the NEAR title-source upgrade (slug → authored title + summary into hover/detail). **Gate:** the 21-48 second content parse ships. **Why (if revived):** NEAR labels read as authored titles at zero generation cost.

## Reasoning

**Killed at innovation (with grounds):**
- *Realtime AI summaries at render* — dead on the user's own standing law (no LLM calls at render); said plainly rather than soft-pedaled, since the direction survives in two legal forms.
- *The whole node as the totem* (identity on the body instead of the crown) — burns the body zone reserved for aboutness, and breaks the uniform sphere surface that makes the staleness color ramp readable across the field.
- *No totem at all* ("the composed structure already fingerprints nodes") — fails on cardinality: a few sizes and flag counts cannot distinguish ~240 folders; this inversion's failure became the totem's written justification.
- *One technique suffices* (semantic zoom alone) — its true half was adopted: zoom is the spine; but zoom alone leaves MID chip collisions and the banner leak untouched, so band-gating and decluttering stay, and proximity labeling was demoted to a NEAR cap.
- *The over-engineering challenger* ("labels were fine; density is rare") — killed on the screenshot: the pile-up is the current state at an ordinary camera pose. Its true half (cost discipline) survives as the 6 Hz declutter throttle.
- *A three-way comparison format* for the user's three suggestions — rejected because the directions aren't rivals; a comparison would fabricate a contest the substrate doesn't contain.

**Refined at critique (the gate bit twice, both anti-inflation):**
- The totem spec's claim "collisions rare" was FALSE at its own numbers (~240 ids into ~144 forms guarantees common collisions — pigeonhole). Fixed in this finding: ~576 forms + deterministic chronological probing + the honest overflow rule.
- "Parse-the-authored: 100% coverage" leaned the whole claim on a census that covers summaries only. Fixed: scope split (summaries censused; titles by construction, verified at build).

**Survived clean:** the lane-1 spec (with the presentation-not-binding and two-screenshot adjudications recorded) and the wrap materials (the staged totem delivery confirmed as the strongest shape; the detail-first stage parallels the self-labeling precedent — the title beside the totem IS its declaration).

## Open Questions

### Monitoring
- Does totem recognition actually form? Observable after the detail-first stage ships plus ~2 weeks of use: do "that twisted-top one"-style handles appear in how the user refers to inquiries?
- Declutter behavior at scale: re-check the 6 Hz overlap pass when the corpus reaches ~500 nodes.

### Blocked
- The body's aboutness silhouette — blocked until tags exist (start-empty by design).
- In-scene crown totems — blocked until the ①a KEY build ships (an in-scene totem cannot self-label).
- NEAR authored titles — blocked until the second content parse ships.

### Refinement Triggers
- **The ~576-form space** re-opens when the corpus approaches ~500 folders — the blocking feature is the quantized space's capacity; widen with a sixth parameter or accept declared reuse.
- **The totem vocabulary** re-opens if the detail-first stage shows samey-ness in practice — the blocking feature is the wide-spacing assumption (quantized steps = perceptually distinct); if forms blur, re-quantize with fewer, larger steps.
- **The ≤6 silhouette-family cap** re-opens only on perceptual evidence (families remain distinguishable beyond 6 in real use), never on style preference.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
The label system (three distinct defects)

5. Truncation kills identity. Nearly every chip clips at ~30 characters — "routeman input dependency questio…", "task define two pass with surfaci…". Identity was already the record's weakest visual channel; the chips are its only carrier and they're all cut mid-word.
6. Labels collide with labels. Chips overlap each other and sit on top of other chips ("routeman input…" behind "routeman identity…"; the mq2 chip over the discipline-meaning chip). There is no label collision avoidance or decluttering — at this density the text layer is a pile-up.
7. The giant chapter banners wash over everything. "TASK DEFINE DISCIPLINE MEANIN…" — huge, ~40% opacity, also truncated — renders through the mid-scene chips on the same visual plane. That's an LOD leak: FAR furniture (banners) and MID labels are on simultaneously and fight each other. Banners were designed as the 30-second aerial layer, not a mid-zoom watermark.


yes this needs a better fix. 

maybe using tags is one good option? maybe we should render realtime AI summaries? 

Or it would be better to render a meaningful representation of them as visuably identifible semantic objects. I think the latter is big breakthrough
```

</details>
