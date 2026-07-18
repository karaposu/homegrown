# Branch: the atlas usefulness rethink — time axis + surface layout

## Source Input
[The user's raw request, preserved verbatim. Also lives in articulate_simple.md's `## User Input` section; both copies are authoritative for transcription audit.]

```text
So, as I show you the image, right now this visualization works, but I have one main concern about usefulness. What makes this visualization useful after all? Because it's really unintuitive to, like, click these nodes, and then I see some information, but it is not really, like, I cannot have this holistic understanding of what's going on. Also, the time axis is kind of invisible, which is a big problem. I think that's one of the main things that we can order these nodes. And I was thinking maybe instead of, like, it can be still 3D, but instead of, like, nodes that's, like, free on the space, it can be that these nodes are following some kind of 3D surface. A good example of that will be maybe Google Maps. Basically, there is the shape of Earth. On top of the shape of Earth, there are things that you can follow, you can scroll the Earth, and you can just, like, you're moving the, you know, like, some non-time axis there, but we can do the same thing for time axis. And we can just move, and we will see what's built next and next, and we can go back. And it can be still 3D, but following the surface of the sphere like Google Maps. Or maybe like some other better ideas you can generate. So I want to dive deep into this.
```

[ATTACHED SCREENSHOT, read: the Venture Atlas on the **flat lens** — a free-floating cloud, accidental index-order color gradient, crossing edge lines, no chips, no time markers, no landmarks. The felt critique visually confirmed. Context: this is the acceptance pass's first real signal — "where am I / holistic" failing in actual use; the 14-50 layout paradigm challenged on felt evidence.]

## Articulation Reference

- **File:** `devdocs/inquiries/2026-07-12_16-05__atlas_usefulness_rethink__time_axis_surface_layout/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** item-1
- **Verdict:** HIGH-PROCEED
- **Flagged conditions:** none

## Question

**Item 1 (literal-statement):** "The visualization works, but what makes it useful after all? Clicking nodes shows information, but I can't get a holistic understanding of what's going on, and the time axis is invisible — a big problem, since time is one of the main orderings. Maybe, still in 3D, the nodes could follow a 3D surface instead of floating free — like Google Maps: things sit on the Earth's shape, you scroll the surface; we could do the same with a time axis, moving forward to see what was built next and back again. Or generate better ideas. Dive deep."

**What kinds of ask this carries (MQ1, preserved):** `usefulness-diagnosis` (re-ask the foundational question against felt evidence) · `layout-paradigm-redesign` (surface-constrained, time-primary) · `proposal-evaluation` (the Google-Maps/sphere idea, seriously) · `alternative-generation` ("other better ideas").

**Plausible action-endpoints (MQ3, preserved):** `redesign-the-scene` (a buildable new layout spec) · `re-derive-usefulness` (foundations first, layout follows) · `evaluate-and-extend` (test the sphere idea; produce stronger alternatives).

## Goal

**Deconstruct tuple:** (deliverable: a re-grounded usefulness account + a settled layout-paradigm redesign — the user's surface/time idea evaluated seriously, alternatives generated, ONE recommended concretely enough to build; kinds: felt-failure diagnosis + paradigm option-field with trails + the recommended design (surface geometry, time encoding, camera/navigation, LOD/landmark policy) + migration notes (what survives); bounds: the VIEW layer — the scene organ + its HUD hooks — over the existing data; 3D retained; not a data-layer change; not the detail/search organs).

**WHY-axis motivations (preserved):** `make-it-actually-useful` (the acceptance pass's first felt test is failing) · `narrative-comprehension` (SEE the story: what happened, in what order, what grew) · `temporal-orientation` ("what was built next and next") · `exploratory-delight` (the Google-Maps feel — an inhabitable, scrollable world).

**Context the answer needs (MQ2, preserved):**
- *verdict:* the screenshot shows the FLAT lens specifically (the chains lens has chips/clusters — whether the critique indicts both needs care); ★the corpus's TIME distributions (per-day/week counts, burstiness, per-chain time spans and overlaps — they decide whether time-primary layouts breathe or clump) — probeable from data.json; which of the ten tasks are failing in felt use; ★the sphere-wrap question (time is linear; a sphere wraps) and which Google-Maps qualities actually transfer (surface anchor · constrained camera · LOD · always-oriented); what of the current app is NOT indicted.
- *kinds:* paradigm kinds — globe/sphere · terrain band/valley · cylinder/helix · river/stream-flow · strata · replay/animation · hybrid time-lens; time-encoding kinds — position=time vs animation=time vs color=time (the current sole encoding, felt as invisible).
- *stance:* replace-the-scene vs add-a-lens; organ scope (scene only?); design-then-offer vs build-in-dive ("dive deep" = design ask; no "it is time to" this time).

**What would explicitly fail (MQ4, preserved):** dropping 3D (stated twice: "it can be still 3D"); touching the data layer (settled; a VIEW rethink); treating detail/search as indicted (they are not named — though the holistic gap may implicate the map↔detail relationship); guessing which lens is indicted (flat shown; "free on the space" plausibly covers the chains ring too — preserved); assuming build authorization (not stated this time — preserved).

## Considered Articulations

**Item item-1 — the usefulness rethink:**
1. "Re-derive what makes the map useful from the felt failures (no holistic read; time invisible), and let the layout redesign follow from that account."
2. "Evaluate the user's proposal on its merits — nodes constrained to a 3D surface, Google-Maps navigation, time as the scrollable axis — including the sphere-wrap question and which Google-Maps qualities actually transfer."
3. "Generate the paradigm field — globe, terrain band, helix/cylinder, river-flow, strata, replay, hybrid time-lens — and settle one concretely with trails."
4. "Diagnose the current scene's specific readability failures (the flat-lens hairball, chip-less states, the accidental gradient, no landmarks) and fix the minimal set inside the existing paradigm."
5. "Design the time-primary surface layout as scene-v2, with a migration path that keeps the data/detail/HUD organs intact."

## Scope Check

Question covers goal. The bounds (the view layer over existing data, 3D retained) contain the Goal's demands; MQ4's exclusions are carried above.

**Specific-vs-pattern check:** the critique is about THIS map, and the proposal is one concrete idea — but the user explicitly invites the broader pattern ("or maybe like some other better ideas you can generate"), so the inquiry addresses the PATTERN (the paradigm field) with the user's proposal as a first-class member, and lands ONE concrete recommendation.

## Synthesis Trigger

This inquiry consumes prior finding(s) as inputs:
- `devdocs/inquiries/2026-07-12_14-50__venture_atlas_visualizer_design__loading_rendering_features/finding.md` — commits the ten-task usefulness test, the five-organ architecture, the probe-decided render policies, and the chains-ring layout now being challenged on felt evidence.
- `devdocs/inquiries/2026-07-11_10-46__visualizer_node_choice__concepts_vs_inquiry_folders/finding.md` (corrected) — commits folder-substrate + grouping-optional + the four purposes.

CONCLUDE will require an `## Inherited Commitments Re-test`; the load-bearing re-tests: does the ten-task operationalization survive (the felt failure suggests a MISSING task or a failed one, not necessarily a wrong list)? does the chains-ring layout stand as A lens while a time-primary view becomes the default (supersede-vs-complement)? does grouping-optional shape the new paradigm too?
