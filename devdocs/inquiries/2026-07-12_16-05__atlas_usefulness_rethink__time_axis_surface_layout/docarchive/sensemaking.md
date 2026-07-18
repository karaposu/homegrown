# Sensemaking — stabilizing the rethink

## User Input

devdocs/inquiries/2026-07-12_16-05__atlas_usefulness_rethink__time_axis_surface_layout/_branch.md — with surfacing.md + articulate_warm.md read fully; warm settled round 0, the sphere-as-vehicle conflict re-anchored. Stabilize: A1 usefulness re-grounding (the 11th task) · A2 the fixed requirements core R1–R8 · A3 the data-shape constraints · A4 the vehicle fact-set; collapse the 3 musts (which lens indicted; ten-task frame survival; the map↔detail relationship). Lean SV1–SV6.

---

## SV1 — Baseline

The map works mechanically and fails experientially. The user's instinct — anchor everything to a scrollable surface with time as the axis — sounds like a UI preference; the probes suggest it's actually the data's own shape asking to be drawn.

## Phase 1 — Anchors

**Constraints:** 3D stays (stated twice); data layer untouched; detail/search organs not indicted; the corpus grows ~90 nodes/month along an open-ended axis; bursts (15-node days) and gaps (9.8 days) are real and permanent features of the practice.

**Key insights:**
1. **The felt failure names a missing capability, not a broken feature:** the ten tasks never included "see the story at a glance." Every built feature passes its row while the map fails its user — the task list was incomplete, and the task-fails rule is exactly what makes this critique actionable now. **The 11th task, acceptance form:** a person opens the map cold and can narrate the last ~7 weeks in 30 seconds without one click.
2. **Position was spent on nothing.** The strongest visual channel (spatial position) encodes ring-index or fibonacci-index — arbitrary in both current lenses; the weakest channel for a primary dimension (color) was carrying time alone, and felt use proved it reads as decoration. The redesign is at bottom a *channel reallocation*: give position to time.
3. **The record IS a journey** (probed): venture-bursts of 0–4 days, one at a time (concurrency mean 1.1, max 3), beads on a line — so a time-primary layout doesn't fight the structure lens, it *absorbs* it: order the beads and the chains come along for free.
4. **The user's proposal decomposes into substance + vehicle:** the substance (surface anchor, scrub, LOD, orientation) is requirement-grade and vehicle-independent; the vehicle (a wrapping sphere) is one candidate among several and carries the wrap/hidden-half tests.
5. **"Clicking is unintuitive" indicts the map's muteness, not the detail view:** the fix is story-level information ON the map (labels, date markers, shapes readable at altitude), not a different click target.

**Structural points:** the fixed core R1–R8 (surface-anchored · position=time · scrub · constrained camera · LOD · always-oriented · gap/burst handling · 3D-inhabitable); the data constraints (beads; ≤3 local lanes; 56 interleaved standalones; a dense 68-node frontier; rightward growth); the vehicle fact-set (globe / time-road / helix / river / replay / heightfield / hybrid, each with decisive facts).

**Foundational principles:** felt evidence outranks built compliance (the acceptance pass exists precisely to produce corrections like this); position is the primary visual channel; honest encodings only (elevation/size/color must mean something measured).

**Meaning-nodes:** "the story" (what happened, in what order, what was big, where NOW is); "the scrub" (the user's own gesture: forward to what's next, back again); "vehicle vs substance."

### SV2 — Anchor-informed

The rethink is not "redesign because the user is unhappy" — it is: the 11th task was discovered by use; position must be reallocated to time; the paradigm choice reduces to picking the VEHICLE that carries the fixed substance over this data shape (beads on an open-ended, bursty line).

## Phase 2 — Perspectives

- **Technical/Logical:** every requirement is implementable in the existing stack (a curved band mesh or sphere is ~50 lines of three.js; camera constraint = clamping the orbit target to a path; LOD = distance-gated visibility of label sprites — all idioms the scene organ already uses). The gap-handling has two honest forms: piecewise time scale (per-day slots, uniform per node-dense regions) or true-scale with compressed marked gaps ("· · · 10 quiet days · · ·" as a visible fold). New anchor: **gaps are content** — a visible fold tells the story better than silent compression.
- **Human/User:** the 30-second narration test is the design's real gate; scrubbing must feel like the user's description ("we will see what's built next and next, and we can go back") — inertia, snapping to bursts, a NOW terminus you return to. New anchor: **the map should OPEN at NOW** (the frontier), looking back down the road — orientation by default, not after navigation.
- **Strategic/Long-term:** the corpus grows rightward forever — the road extends; the globe re-grids; the helix grows taller. At ~1,300 nodes the road is ~6× longer (fine — roads are long); LOD carries the load. The chains-ring and flat cloud SURVIVE as lenses (structure view; free view) — supersede-vs-complement leans complement, gate to confirm.
- **Risk/Failure:** (a) burst days (15 nodes) = local pileups → local lane-splitting + LOD clustering at altitude; (b) the seam/wrap on the globe = false adjacency (May beside NOW) — a lie the no-lying norm forbids unless the wrap is MEANINGFUL; (c) scrub without landmarks = lost again → date pylons/week ticks are mandatory furniture (R6); (d) rebuilding the scene organ wholesale risks losing the liked aesthetic → the keep-set (fog, ember palette, chip sprites, fly-to feel) carries over as materials, not layout.
- **Resource/Feasibility:** the new scene is a layout + camera-constraint + furniture change inside the existing five-organ app; data/detail/HUD untouched; roughly the size of the original scene build.
- **Definitional/Internal consistency:** canon speaks of traversal, walks, and journeys — "the walk" is the Movement Frame's own object; a time-road literally renders the project's walk. No canon contradiction; the venture vocabulary (bursts of thread-continuity) matches the beads readout. Frame-exit: "useful" re-checked across referents — the navigational-session candidacy remains a kinship, not a requirement; no excluded referent.
- **Phase/Calibration:** nothing phase-gated in the redesign itself; the v2 knowledge-lens gate is untouched.

### SV3 — Multi-perspective

New anchors from four perspectives: gaps-as-content (visible folds) · open-at-NOW · the keep-set carries as materials · mandatory date furniture. The model sharpens: the redesign is a channel reallocation plus a vehicle choice, with the fixed core doing most of the deciding.

## Phase 3 — Ambiguity Collapse

#### C1: Which lens does the critique indict?
**Counter-interpretation:** only the flat lens (that's what the screenshot shows); the chains lens with chips already answers the critique.
**Why the counter fails (structural):** the critique's content — "nodes free on the space," time invisible, no holistic story — is true of BOTH lenses: the chains ring gives position to ring-index (arbitrary), shows no time, and answers "where am I" with nothing learnable; chips alone don't narrate. The screenshot's lens choice localizes the WORST case, not the only one.
**Confidence:** HIGH. **Resolution:** the PARADIGM is indicted; both current lenses survive only as secondary views. **Fixed:** the redesign targets the default view, not a patch to flat.

#### C2: Does the ten-task frame survive its own failure?
**Counter-interpretation:** the frame mis-predicted usefulness once — discard it and design by feel.
**Why the counter fails (structural):** the frame did exactly what an operational test should: it made the failure NAMEABLE (a missing task, a failing task) instead of a vibe; designing by feel removes the mechanism that caught this. The amendment is additive: **task 11 = see-the-story (30-second narration, zero clicks)**; **where-am-I re-graded as temporal orientation** ("where in the story").
**Confidence:** HIGH. **Resolution:** frame survives, amended. **Depends on this:** the gate ranks vehicles BY the amended task list + R1–R8.

#### C3: What does "clicking is unintuitive" actually indict?
**Counter-interpretation:** the detail view is bad — redesign the reading experience.
**Why the counter fails (structural):** the user's sentence locates the problem before the click pays off — "I see some information, but I cannot have this holistic understanding": the reading view delivers information; what's missing is understanding WITHOUT clicking. The detail organ was explicitly praised territory in the acceptance-era design and is not named as failing.
**Confidence:** HIGH. **Resolution:** the fix is story-level information ON the map (venture labels at altitude, date furniture, readable shapes); the detail view is untouched. **No longer allowed:** spending this redesign on the reading organ.

#### C4 (load-bearing test on insight 3): Is "the record is a journey" the data's property or a romantic frame?
**Counter-interpretation:** the beads readout is an artifact of CONTINUES-FROM being sparse — with richer linking the record would braid, and the journey frame would mislead the layout.
**Why the counter fails (structural, today):** the layout must draw the record that EXISTS: measured spans (p50 0 days), measured concurrency (mean 1.1) — the journey is what 50 days of actual practice look like. The counter names a real FUTURE risk, not a present fact — carried as a refinement trigger (if concurrency grows ≥5 sustained, revisit the lane model), not a design input.
**Confidence:** HIGH with the named trigger.

### SV4 — Clarified

Fixed: the 11th task + its acceptance form; the requirements core R1–R8; the channel reallocation (position=time; ramp secondary); the indictment scope (paradigm, both lenses); the fix location (the map's muteness, not the detail view); gaps-as-content; open-at-NOW; the keep-set as materials. Open by design: the vehicle (gate), lane/elevation params, supersede-vs-complement confirmation, build-endpoint.

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:** R1–R8 as the ranking dimensions' source; the amended task list as the acceptance test; beads/≤3-lanes/56-standalones/dense-frontier/rightward-growth as the fit constraints; date furniture mandatory; open-at-NOW default; gaps rendered as visible folds (leading option) or slotted scale (alternative) — a parameter pair for the gate.
**Eliminated:** parallel-lane architectures (nothing to braid); color-as-primary-time; 2D rewrites; detail-view surgery; silent gap compression (hides story).
**Open for I/C:** the vehicle (globe · time-road · helix · replay-mode · hybrid combinations); the gap-handling pick; local lane/elevation/label parameters; whether the new view supersedes or complements the old lenses (leaning complement).

### SV5 — Constrained

One requirements core, one amended acceptance test, one data shape — and a small vehicle field to settle. Innovation develops each vehicle against R1–R8 honestly (the user's globe first-class); Critique picks.

## Phase 5 — Conceptual Stabilization (SV6)

**The stabilized model:** The felt critique decodes into one discovered task and one channel reallocation. The discovered task — *see the story at a glance* (narrate seven weeks in 30 seconds, zero clicks) — was missing from the operational usefulness list, and the built map, compliant with all ten old tasks, fails it. The channel reallocation: position, currently spent on arbitrary indexes, must carry TIME; color returns to a supporting role. The user's Google-Maps proposal, decomposed, contributes the requirement core (surface-anchored, scrub-as-primary-gesture, constrained camera, LOD, always-oriented) independent of its sphere vehicle — and the probed data shape (venture-bursts as beads on a mostly-single-file line, bursty weeks, real gaps, a dense NOW) is unusually friendly to exactly that core: the record already IS a journey; the map's job is to draw the road. What remains is the vehicle choice (globe with its wrap-and-hidden-half tests, the no-wrap time-road, the deliberate-wrap helix, replay-as-mode, hybrid arrangements), the gap-handling form, and whether the old lenses survive as secondary views (leaning yes).

**Delta from SV1:** SV1 heard a UI preference; SV6 has a discovered task with an acceptance form, a measured data shape that independently wants the user's substance, a vehicle/substance split that lets the sphere be tested rather than obeyed or dismissed, and a small, decidable remainder.

---

## Saturation telemetry

Perspective saturation: reached. Ambiguity resolution: 4/4 collapsed structurally (C4 with a named future trigger). SV delta: substantial (preference → discovered-task + reallocation + vehicle choice). Anchor diversity: all five types. Failure modes checked: status-quo (the built design did NOT win by being built — its paradigm is indicted); premature stabilization (four perspectives added anchors first); anchor dominance (removing the journey anchor leaves the 11th task + channel reallocation standing); clean-resolution (counters stated, incl. the braid-future risk); self-reference (external grounding = probes + the screenshot + the user's words). **PROCEED.**
