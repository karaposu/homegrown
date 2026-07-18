# Surfacing — the label mechanics, the render-fix field, the identity-channel field

## User Input

PURPOSE per _branch.md: (A) the label mechanics as-built · (B) the render-fix technique field (possibility, real practice) · (C) the identity-channel field (the three directions + the semantic-objects grades) · (D) laws + demand facts. Tag; don't adjudicate. (Directive abridged; the branch carries the full framing.)

- **Mode:** artifact (A/D — code verified + in-context priors) + possibility (B/C) · **Entry:** signal-first · **Boundary-discovery:** skipped

---

## Traversal Trace

### Region A — THE LABEL MECHANICS AS-BUILT (verified)

| # | Item | Tag | Conf |
|---|---|---|---|
| A1 | Labels = single-line canvas-sprite chips (`makeChip`, scene.jsx:424 — measures text, one line, rounded rect); truncation at CALL SITES: settlements `truncate(label, 34)`, hover `truncate(title, 40)`, banners `truncate(…, 30)`. No wrapping, no fade, no zoom-adaptive length | core | HIGH |
| A2 | ★The banner-LOD leak's mechanism CONFIRMED: `farOnly` group's visibility is NEVER toggled — the band switch sets only `midGroup.visible` and `nearGroup.visible` (road.jsx animate). Banners + pylons + top-12 chips render at EVERY zoom. The fix is structurally trivial (one line + a fade); the design intent (FAR = the 30s layer) was never wired | core | HIGH |
| A3 | No label collision handling exists anywhere (chips render at fixed world positions; overlap freely). Hover shows a 40-char chip; full titles exist only in detail/search | core | HIGH |
| A4 | Nodes = uniform spheres: SHAPE, TEXTURE, ORIENTATION channels completely free (the 10-03 audit's fact); color = staleness ramp (owned); size = degree (rebind to built-on queued ①b); pennants = open routes; slabs = backing (①a, queued); pulse = active | core | HIGH |
| A5 | Authored text fields NO pixel uses: the finding's H1 title; the Finding Summary's FIRST BULLET (225/225 parse clean — the 21-48 census); the slug (what chips show now, prettified) | core | HIGH |

### Region B — THE RENDER-FIX FIELD (real practice; per-technique: what it fixes · cost · risk)

| # | Item | Tag | Conf |
|---|---|---|---|
| B1 | **Banner band-gating** — `farOnly.visible = (band === 'far')` + a radius-driven opacity fade; banners return to being the aerial layer. Fixes defect 7 outright. Cost: trivial | core | HIGH |
| B2 | **Two-line chips + end-fade** — makeChip gains wrap (2 lines × ~26 chars ≈ 52 chars) and an alpha-fade tail instead of "…"; mid-word cuts disappear visually. Fixes most of defect 5's pain. Cost: small | core | HIGH |
| B3 | **Zoom-adaptive label content ("semantic zoom" — the cartographic practice):** the SAME chip shows more text as you approach — FAR: nothing/banners · MID: first ~3 slug words · NEAR: full title (wrapped). Labels stop being one fixed string. Cost: medium (regenerate sprite per band change, cached per node per band) | core | HIGH |
| B4 | **Priority declutter (collision culling):** per frame (throttled), project chip screen-rects; on overlap, keep the higher-priority chip (settlement size, focus, hover), hide the rest with fade. The standard deconfliction all map engines do. Fixes defect 6. Cost: medium (screen-space test; ~40 chips at MID — cheap enough throttled) | core | HIGH |
| B5 | **Proximity labeling:** only label nodes within a world-radius of the camera target (the road's travel point) + focused/hovered + settlements — density self-limits by travel. Alternative/complement to B4. Cost: small | core | HIGH |
| B6 | **Leader lines / stacking:** offset colliding chips vertically with a thin line to their anchor. Classic, but adds visual noise at this density — enumerate, likely secondary | sub | MED |
| B7 | Chips as identity-crutch note: every render fix above still leaves TEXT as the only identity carrier — the fixes relieve symptoms; the user's directions attack the cause | core | HIGH |

### Region C — THE IDENTITY-CHANNEL FIELD (the three directions + the semantic-object grades)

| # | Item | Tag | Conf |
|---|---|---|---|
| C1 | **(a) TAGS:** the substrate is designed-unbuilt (08-35, awaiting the go) and START-EMPTY — tags accrue at future CONCLUDEs; the C2 citation-inference is the retro partner. The 10-03 reserve is exactly the consumer: **aboutness = SHAPE-family ≤6** (hue stays staleness's). Consequence: tag-driven form arrives GRADUALLY — an identity channel that starts blank | core | HIGH |
| C2 | **(b) AI SUMMARIES splits three ways:** (i) REALTIME at render — DEAD (no-LLM-at-render, absolute); (ii) ★PARSE THE AUTHORED — the H1 title + Summary first bullet already exist, authored, 100% coverage — no LLM needed; feeds hover/detail/NEAR-labels (B3's content source); (iii) OFFLINE GATED BATCH — 3–5-word DISPLAY NAMES per folder, generated once, the ENTIRE output a reviewable artifact (the tag_map pattern), provenance-marked (≈generated vs ✎authored — the marker-provenance precedent extends); legal, gated, useful specifically for chip-length text | core | HIGH |
| C3 | **(c) SEMANTIC OBJECTS — the substrate-graded decomposition (the 12-32 three-way split governs "semantic"):** | | |
| C3a | **G0 · IDENTITY-OBJECTS (buildable now):** a deterministic visual pattern per folder-id — the identicon family, 3D form: e.g. a small TOTEM (2–4 stacked primitive segments whose counts/proportions/angles derive from a hash of the id) — NOT hue (staleness owns color). Stable ✓ deterministic ✓ honest if DECLARED IDENTITY-ONLY ("the totem identifies; it does not describe"). Value: preattentive recognition + re-finding ("that twisted-top one") — WHICH without reading, not WHAT | core | HIGH |
| C3b | **G1 · STRUCTURAL GLYPHS (mostly ALREADY QUEUED):** form bound to real fields = the 10-03 semantic layer itself — slabs (backing), size (built-on), pennants (routes), tiers, pulse. The composite look of a node already fingerprints its structure once ①a/①b ship. The NEW piece here is only the READING: the node as one BODY, not five overlays | core | HIGH |
| C3c | **G2 · TOPICAL FAMILY (tags-gated):** the 10-03 shape≤6 reserve — silhouette family = aboutness CATEGORY (the R10 boundary holds: aboutness CONTENT stays text; category may be pixels) | core | HIGH |
| C3d | **G3 · embedding-driven form:** distant-gated (reshuffle + distance-lies; identity carried by an unstable form would un-learn itself — the stability rule bites hardest exactly here) | core | HIGH |
| C4 | ★**THE BODY-PLAN observation:** G0+G1+G2 compose on ONE body — foundation (slabs=backing) · body silhouette (tag family, later) · totem pattern (identity, now) · pennants (routes) · pulse (active) · size (built-on). The user's "semantic object" = the queued semantic layer + the reserve + one genuinely new channel (G0), SEEN AS ONE THING. The composition is the design contribution; most parts are already designed | core | HIGH |
| C5 | Theory ground for the instinct: object/shape recognition is preattentive and parallel (features pop out; words require serial reading) — the vis-theory reason identity-as-form beats identity-as-text at a glance; the 10-03 audit MEASURED the gap this attacks (identity+aboutness = zero pixels) | core | HIGH |
| C6 | Rail-risks specific to objects: a totem/glyph that LOOKS meaningful invites reading meaning in — the declare-half must say "identity-only" loudly (KEY row); G2 families must not exceed ~6 distinguishable silhouettes (the 10-03 cap); nothing orients/points (g-S4) | core | HIGH |

### Region D — LAWS + DEMAND FACTS

| # | Item | Tag | Conf |
|---|---|---|---|
| D1 | The rails: no-LLM-at-render · offline-output-is-data precedent · two-halves rule + justify-clause (every form feature reads a field or is declared identity-only/decorative) · KEY rows accumulate to ①a's backlog · stability/determinism ruled · g-S4 · counts-never-scores · R10 (content stays text) | core | HIGH |
| D2 | The measured demand: identity has ZERO pixels today (10-03); the chips are the only carrier and they truncate; hover + detail exist as the text fallback | core | HIGH |
| D3 | The queue: ①a first (KEY); the lens second; render fixes are DEFECT REPAIRS (kin to yesterday's ribbon pass — arguably fix-lane, still gated by word); identity-channel work = design offers | core | HIGH |

---

## State Summary

- **Territory/purpose echo:** as above. **Coverage:** A verified in code; B = the standard deconfliction/labeling practice, family-complete for this scale; C = the three directions + the graded object design; D standing.
- **Confirmed-absent:** no wrapping/fade/adaptive labels; no collision handling; no farOnly gating; no display-name field; no identity channel of any kind.
- **Concept-names:** semantic zoom (B3) · priority declutter (B4) · the display-name batch (C2-iii) · identity-objects/totems (G0) · the BODY-PLAN (C4) · the substrate grades G0–G3 · identity-only declaration (C6).
- **Frontier flags:** (i) totem aesthetics (what primitive vocabulary reads best) = build-time experimentation, not adjudication; (ii) B4's frame cost at 2x record — throttle parameters at build; (iii) whether display-names should ever REPLACE slugs on chips vs live beside them — for the gate.
- **Workspace-populated:** {populated: true, extent: A–D complete}.

## Telemetry

Mode: artifact + possibility · signal-first. Cycles: 3. Items: 22 (core 20 / sub 1 / side 1). Failure modes checked: missed-relevance (each direction has its law-fate + grade); territory-mis-binding (record-side acts appear only as gates). **Self-assessment: PROCEED** (3 frontier flags, none blocking).
