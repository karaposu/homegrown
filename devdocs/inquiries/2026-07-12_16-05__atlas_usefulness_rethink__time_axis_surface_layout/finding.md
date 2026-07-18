---
status: active
model: claude-fable-5
effort: unknown
refines: devdocs/inquiries/2026-07-12_14-50__venture_atlas_visualizer_design__loading_rendering_features/finding.md
---
# Finding: The Time-Road — what makes the atlas useful, and the layout that delivers it

## Changes from Prior
**Prior path:** devdocs/inquiries/2026-07-12_14-50__venture_atlas_visualizer_design__loading_rendering_features/finding.md
**Revision trigger:** the user's felt critique from actual use (with a screenshot) — the acceptance pass's first real signal.
**What's preserved:** the five-organ app; the data layer; the detail/reading organ; search/recent/anomalies; the ten-task method itself; grouping-optional; the edge policies.
**What's changed:** the scene's layout paradigm — the chains-ring/flat-cloud default is SUPERSEDED as the home view (position encoded arbitrary indexes; time was invisible); both survive as secondary lenses.
**What's new:** an eleventh usefulness task discovered by use; the Time-Road layout (time as position on a terrain ribbon); the globe proposal's adjudication with its transferable virtues; pleats, day-widening, furniture, LOD, and camera specs.
**Migration:** scene organ rewrite + small HUD hooks; nothing else changes.

## Question

The user, showing the running map: *"What makes this visualization useful after all? … I cannot have this holistic understanding of what's going on. Also, the time axis is kind of invisible, which is a big problem… maybe, still 3D, the nodes could follow some kind of 3D surface — like Google Maps… we can do the same thing for the time axis… and we will see what's built next and next, and we can go back. Or maybe some other better ideas you can generate."* The screenshot (the flat lens) confirmed it: a free-floating starfield with crossing lines, no landmarks, no time.

## Finding Summary

- **The critique decodes into one discovered task and one channel misallocation.** The discovered task — **task 11: see the story at a glance** (open the map cold and narrate the last ~7 weeks in 30 seconds, without one click) — was missing from the ten-task usefulness test; the built map passes all ten old tasks and fails this one. The misallocation: **position, the strongest visual channel, was spent on arbitrary indexes** (ring order, fibonacci order) while time — the ordering the user actually thinks in — was carried by color alone, which reads as decoration.
- **The probes turned the layout question from taste into fact:** ventures are 0–4-day BURSTS (median span 0 days), essentially one at a time (concurrency mean 1.1, max 3); the weeks are wildly uneven ([48, 30, 48, 8, 5, 17, 69, 4] nodes; a 9.8-day silence; a 15-node day). **The record is a journey — beads on a line — not a braid.** The user's scroll-a-surface instinct fits this shape almost perfectly.
- **The user's Google-Maps proposal was split into substance and vehicle.** The substance became the design's fixed requirements: everything anchored to a surface, time carried by position, the scrub (forward/back along time) as the primary gesture, a constrained camera, level-of-detail, always-oriented. The vehicle (a sphere) was developed in its best form — a spiral-meridian globe — and **killed on ruled tests, with full honors**: from any viewpoint half the story hides behind the horizon (fatal for a zero-click narration; the only cure is an unrolled inset, which concedes the point), adjacent windings whisper false adjacency, and monthly growth re-positions everything, un-learning the world. Its **soul transfers**: the spin-feel inertia, the planet-grade materials, the aerial opening, the "world you own" framing.
- **The winner: the TIME-ROAD.** A terrain ribbon running past→NOW where position IS time — true-scale, with quiet stretches folded into visible pleats ("· 10 quiet days ·") and crowded days visibly widened; weekly effort as literal elevation (the burst weeks become mountains); ventures as settlements at their dates; standalones as roadside markers; week ticks, month pylons, mechanical chapter banners (the biggest venture's name per week — derived, never written), and the NOW beacon at the road's end. The camera opens on an aerial with NOW in the near field and travels by inertial dolly. From altitude, the story reads with zero clicks: two early towns, the long June ridge with its valley, the July mountain running into the beacon.
- **What survives around it:** the chains ring and flat cloud as secondary lenses; replay as a play control that drives the scrub; a 2D scrub-strip minimap (also the small-window fallback); the detail view, search, recent, anomalies — untouched. Grouping stays optional to the bone: with no groups the road still renders, just without settlements.
- **The endpoint is honest to the ask:** "dive deep" authorized the design, not the build — **the build is hereby offered**; one word starts it.

## Finding

### 1. What makes the map useful — re-grounded

The prior design operationalized "useful" as ten tasks, and that method is what made this critique actionable: the felt failure ("I can't get a holistic understanding") names a MISSING task, not a vague vibe. **Task 11 — see the story at a glance** — joins the list with a hard acceptance form: *a person opens the map cold and can narrate the project's last ~7 weeks in ~30 seconds without one click: what happened, in what order, what was big, where the work is now.* Additionally, the existing where-am-I task is re-graded: its real content is TEMPORAL orientation ("where in the story am I"), served by visible date furniture and a NOW marker, not by memorized geometry. The clicking complaint, examined, indicts the map's muteness — clicking was the ONLY path to any understanding — not the detail view, which stays as praised.

### 2. Why the current layout fails (and the encoding lesson)

Both current lenses spend position — the strongest visual channel — on meaningless coordinates (golden-angle ring index; fibonacci index), and both carry time only as a color ramp, which felt use has now shown reads as *decoration*, not as an axis. The lesson generalizes: **a primary dimension needs the primary channel.** Time moves to position; the ramp stays as an honest secondary (redundant) cue.

### 3. Why the road, specifically (the data's own testimony)

The probes: chain time-spans min 0 / median 0 / max 4 days; chain concurrency max 3, mean 1.1; weeks [48, 30, 48, 8, 5, 17, 69, 4]; densest day 15 nodes; longest gap 9.8 days; 68 nodes touched in the last 7 days. So: ventures are short intense episodes, run essentially one at a time — **the record already IS a journey**, and a road draws it without distortion. Parallel-lane architectures (swimlanes, git-graph braids) were killed by measurement — there is nothing to braid. The helix (one revolution = one week) was killed because the practice shows no weekly rhythm — aligned weekdays would display a periodicity that does not exist (revival trigger: if the practice ever adopts a weekly cadence). Replay survives as a *mode* (a play control), not a home — a paused replay is the mute map again. A radial growth-ring poster and a week-archipelago skin were killed for home (scrub mismatch; re-quantized time) and shelved as optional later modes.

### 4. The Time-Road specification

- **Geometry:** a ribbon ~24 units wide, gently S-curved, running left (May 23) → right (NOW); **elevation = smoothed weekly node-count** — the effort profile as literal terrain; mist at the pre-May end, void beyond NOW.
- **Time mapping:** true scale (~2.2 units/day) with two honest corrections, both VISIBLE: gaps > 3 days fold into marked pleats ("· 10 quiet days ·" — pauses are part of the story), and crowded days widen boundedly (`dayWidth = 2.2 + 0.5·max(0, nodes−4)`), the stretch made visible by the day-tick spacing. Slot-scale (uniform day slots) was rejected: it tells slot-truth, and the narration needs pace-truth.
- **Placement:** each venture's members cluster as a settlement arc at its date footprint (internal order = creation); up to 3 gentle parallel tracks where bursts overlap (the measured maximum); standalones as single markers on alternating shoulders; the 23-member giant is the largest town and may switchback.
- **Furniture (the narration layer):** week tick-lines; month pylons (MAY · JUNE · JULY) readable from altitude; **chapter banners** — per week, the largest venture's existing prettified name as a faint banner (mechanical derivation; no fabricated text anywhere); the **NOW beacon** at the road's end (the active-inquiry pulse lives there).
- **Camera:** primary gesture = **dolly along the road** (wheel / drag / arrows) with globe-feel inertia and soft snap to settlements; orbit constrained to a cone around the current road point; zoom 6–140; **opens on a three-quarter aerial over the last two weeks, NOW in the near field, looking back down the road**; double-click empty returns to the opening; deep-links fly along the road.
- **LOD:** FAR = terrain profile + pylons + top-12 venture chips + the beacon (this IS the 30-second layer); MID = all settlements + chips + ticks + markers; NEAR = nodes + hover titles + selection neighborhoods.
- **Edges:** continues-from as short warm arcs inside settlements — and the rare **long back-arc** (a venture reaching weeks back) as a tall glowing arch over the road: visible story. Related/long-tail types stay on-selection; file/prose targets stay in the detail panel.
- **Materials:** the liked look carries — fog, ember palette, chips, glow — plus the globe's inheritance: horizon glow at the road's ends, atmospheric depth, the spin-like inertia.

### 5. Migration and fates

Scope: rewrite `scene.jsx` (layout, camera, furniture); HUD gains the `road` default lens, a thin 2D scrub-strip minimap (week bars + a cursor — also the small-window fallback), and a play control (replay = driven scrub). Untouched: data layer, detail view, search, recent list, anomalies panel. Lens fates: `road` default · `chains` kept (the structure view) · `flat` kept · `month` retired (the pylons carry it positionally). Grouping-optional is newly exercised: the road renders even with `--no-groups` data — settlements are an enrichment, never a requirement.

## Inherited Commitments Re-test

- **Commitment:** the ten-task usefulness operationalization. **Source:** the 14-50 finding. **Re-test status:** RE-TESTED — commitment confirmed but frame revised. **Evidence:** the frame caught its own gap (a nameable missing task) — kept, amended to eleven tasks + the re-graded where-am-I.
- **Commitment:** the chains-ring layout as the default view. **Source:** the 14-50 finding §2/§5. **Re-test status:** RE-TESTED — commitment found INVALID as the default. **Evidence:** felt use + the screenshot: position encoded arbitrary index; time invisible; task 11 unserved. Superseded by the road; survives as the `chains` lens.
- **Commitment:** grouping optional / no required parent. **Source:** the 10-46 correction. **Re-test status:** RE-TESTED — commitment confirmed and newly exercised. **Evidence:** the road renders without groups (nodes at dates, no settlements).
- **Commitment:** the venture-atlas/1 data layer. **Source:** the 13-01 finding. **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** the road consumes existing fields only (createdAt, lastWorkedAt, group, edges); zero schema changes.
- **Commitment:** the four purposes (orientation, health, knowledge-later, enjoyment). **Source:** the 10-46 finding. **Re-test status:** INHERITED-WITHOUT-RE-TEST. **Reason:** unchallenged by the critique; the delight motive was actively re-confirmed by the user's Google-Maps framing.

## Next Actions

### MUST
- **What:** The user's build decision — say go, and the road gets built (scene rewrite + HUD hooks; everything else untouched).
  **Who:** the user decides; the assistant builds.
  **Gate:** the user's word ("dive deep" authorized this design; the build is offered, not presumed).
  **Why:** the design pays only when drawn; the spec is complete down to parameters.

### COULD
- **What:** The re-acceptance pass after the build — the 30-second narration live + the amended task walk.
  **Who:** the user (the felt channel that produced this critique).
  **Gate:** on the build's completion.
  **Why:** the amendment was discovered by use; only use can accept it.
- **What:** Mirror the landing into cross-session memory.
  **Who:** the assistant. **Gate:** this session's wrap-up. **Why:** the design compounds only if findable warm.

### DEFERRED
- **What:** The lane-model revisit. **Gate:** sustained chain-concurrency ≥ 5 (C4's named trigger). **Why (if revived):** the braid returns only if the practice starts braiding.
- **What:** The globe / helix revivals. **Gate:** a genuinely cyclic practice (annual rhythm → globe; weekly cadence → helix). **Why (if revived):** the kills hold only while their grounds hold.
- **What:** The radial growth-ring poster + week-archipelago skin. **Gate:** explicit appetite. **Why (if revived):** delight modes without paradigm cost.

## Reasoning

**Why the globe lost (with full honors):** it received its best form — a spiral meridian winding pole to pole, one revolution ≈ two weeks, the record as a planet you spin — and was killed on three ruled tests, not on taste: the hidden half breaks the zero-click narration (the only cure is an unrolled inset — a road, conceding the point); neighboring windings place weeks-apart work side by side (a persistent soft false-adjacency); and monthly growth re-parameterizes the spiral, so the learnable world — the globe's deepest virtue — un-learns itself. What was true in the user's image is kept: the surface, the scrub, the constrained camera, the LOD, the inhabitable feel — and the globe's specific soul (inertia, materials, the aerial opening) is grafted onto the road by name.

**Why the road is not "just a fancy timeline":** the prosecution was run — and the 3D earns itself four concrete ways: elevation is a data channel (weekly effort as terrain), travel is the delight motive's actual content (being IN the record), depth layering fits three tracks plus shoulders plus furniture without clutter, and the long back-arcs are a 3D-native story device. Conventionality, meanwhile, is a feature on a 30-second test: conventions read fast.

**Kills, briefly:** minimal-fix of the old scene (time-sorted ring = ordinal-not-metric + a wrap seam — structurally worse than the road for the same effort) · parallel lanes (nothing to braid — measured) · helix (false periodicity — no weekly rhythm exists) · replay-as-home (mute at rest) · radial-as-home (the scrub becomes an awkward outward zoom) · archipelago-as-home (re-quantizes time) · color-as-primary-time (felt-tested and failed).

**The gate's parameter catch:** at true scale a 15-node day physically overlaps its spheres; the bounded day-widening rule (visible via tick spacing) was added at critique — honest local stretching rather than silent overlap or silent slotting.

## Open Questions

### Monitoring
- Does the built road pass the 30-second narration live? (The re-acceptance pass — the same felt channel that caught this.)
- Do the pleats and widened days read as honest, or do they need stronger marking in practice?

### Blocked
- The v2 knowledge lens — still behind the exercised-definition gate (untouched by this dive).

### Refinement Triggers
- The lane model re-opens at sustained concurrency ≥ 5 (named at sensemaking C4).
- The globe re-opens on a genuinely cyclic practice; the helix on an adopted weekly cadence (named at the gate).
- The road's parameters (day-unit, fold threshold, widening rule) are knobs — they re-open on felt evidence at the re-acceptance pass, not before.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
So, as I show you the image, right now this visualization works, but I have one main concern about usefulness. What makes this visualization useful after all? Because it's really unintuitive to, like, click these nodes, and then I see some information, but it is not really, like, I cannot have this holistic understanding of what's going on. Also, the time axis is kind of invisible, which is a big problem. I think that's one of the main things that we can order these nodes. And I was thinking maybe instead of, like, it can be still 3D, but instead of, like, nodes that's, like, free on the space, it can be that these nodes are following some kind of 3D surface. A good example of that will be maybe Google Maps. Basically, there is the shape of Earth. On top of the shape of Earth, there are things that you can follow, you can scroll the Earth, and you can just, like, you're moving the, you know, like, some non-time axis there, but we can do the same thing for time axis. And we can just move, and we will see what's built next and next, and we can go back. And it can be still 3D, but following the surface of the sphere like Google Maps. Or maybe like some other better ideas you can generate. So I want to dive deep into this.
```

(Plus the screenshot of the running app on the flat lens, read and described in the articulation bundle.)

</details>
