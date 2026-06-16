## User Input

`devdocs/inquiries/2026-06-13_09-25__rlu_behavioral_spec_should_shouldnt_scenarios/_branch.md`

---

# Decomposition — rlu behavioral contract

## Step 1 — Coupling Map (topology)

Elements: the three pillars (P1 single-decider / P2 integrity / P3 mechanize); the lifecycle state-machine + row schema; the standing obligations (sweep, disambiguation, metadata); the NOT-list; the 7 generative scenario-axes + instantiated table; the runtime determinations (first-in-project? which-route? cross-inquiry?); the touches/interfaces; the day-1 command surface; the deferred frontier.

**Clusters & coupling:**
- **The pillars are the HUB** — strong coupling *outward* to everything (every behavior, prohibition, and obligation derives from a pillar), but the pillars cohere tightly with each other only loosely (three independent roots). → a piece (the WHY core).
- **Lifecycle ⇄ row-schema ⇄ obligations** are strongly coupled (the transitions write the rows; the obligations fire on the transitions). → one piece (the should-do).
- **NOT-list** couples *up* to the pillars (derivation) but is independently statable once the pillars exist. → a piece (the shouldn't-be), boundary = positive-vs-negative.
- **Scenario-axes ⇄ lifecycle** — moderate-strong (each axis flips a transition/behavior), but the *axis-set + coverage argument* is its own concern. → a piece (the scenarios), with the runtime determinations housed here + at the interface.
- **Touches/interfaces ⇄ command-surface** couple (commands write the touches; integrity P2 constrains them); the runtime determinations (glob, read) physically live here. → a piece (interfaces + day-1 surface).
- **Deferred frontier** couples weakly — the explicitly-bounded-out region (object-B, project-level homing, parallel concurrency). → a piece (the gates).

Low-coupling valleys (cut points): pillars↓rest; positive↔negative; behavior↔situation; spec-core↔deferred-frontier.

## Step 2–3 — Boundaries (top-down) + bottom-up validation

Six pieces. Bottom-up atoms check: the irreducible atoms (a single row write; the append rule; one NOT-list entry; one scenario-axis; the glob; one deferred item) group into exactly these six clusters — no atom is split across a boundary; no independent atoms are forced together. Confidence: **HIGH** on all six boundaries (top-down and bottom-up agree). The only moderate-confidence boundary is P2↔P4 (lifecycle vs scenarios share the transitions) — kept separate because the *coverage argument* (axes) and the *mechanism* (state-machine) are distinct concerns; the shared transitions become the explicit P2⇄P4 interface.

## Step 4 — Question Tree (pieces as questions + verification criteria)

**Q1 — The pillars: what principles govern rlu, and what does each generate?** (the WHY hub)
- [ ] P1 single-decider stated (rlu records-and-points; decision-authority stays single) + what it generates (the behavior-don'ts).
- [ ] P2 source-of-truth integrity stated (append-only; never-mutate-originals; truth-lives-locally + derived view) + what it generates (the touch-don'ts + invariants).
- [ ] P3 mechanize-or-it-won't-happen stated (grounded in zero-for-109) + what it generates (immediate start-row, sweep, degraded done, auto-metadata).
- [ ] Each downstream rule traceable to exactly one pillar (no orphan rules; no rule rooted in "taste").

**Q2 — The should-do: the lifecycle + the row + the standing obligations.** (positive spec)
- [ ] States defined: none → in-flight → done; parked; superseded.
- [ ] Transitions defined: `start` (none→in-flight), `done` (in-flight→done or none→done degraded), `park` (none→parked), reopen (done→in-flight via NEW appended row), supersede.
- [ ] Row schema defined: route-ref · status · started/finished · artifact-pointer · one-line-outcome · source-map-ref.
- [ ] Standing obligations defined: stale-in-flight sweep (every invocation), auto-metadata collection at done, "current state = last row mentioning the ref."
- [ ] Each obligation rooted in P3 (or P2).

**Q3 — The shouldn't-be: the scope fence.** (negative spec)
- [ ] Every prohibition listed AND rooted: behavior-don'ts → P1 (never choose, never launch, never judge-content-to-rank, never become object-B); touch-don'ts → P2 (never mutate the route-map, never write status into `_route.md`, never maintain a central truth-file).
- [ ] The active fence: the "point, don't judge" line specified (rlu may capture path + session-supplied one-liner; never reads-to-evaluate).
- [ ] The guard-don't: never silently pass the pre-registration window where declared.
- [ ] No prohibition is arbitrary (each maps to P1 or P2).

**Q4 — In what scenarios: the generative axes + the instantiated table.** (conditional spec; the coverage piece)
- [ ] The 7 axes stated: A1 was-there-a-start · A2 who-ran-it (formal/informal) · A3 where-it-ran (same/cross-inquiry) · A4 first-in-project? · A5 close-reason · A6 cardinality/concurrency · A7 route-level (inquiry/project).
- [ ] Important coordinates instantiated as a scenario→required-behavior table (the named scenarios S1–S16 placed as coordinates).
- [ ] Each row marked ships-now vs deferred (with gate).
- [ ] The runtime determinations named: "is this first-in-project?" (A4), "which route?" (disambiguation), "is this cross-inquiry?" (A3) — and *that they are decided*, with HOW pointed at Q5.
- [ ] Coverage argument explicit: the table is examples; the axes are the completeness guarantee.

**Q5 — Interfaces + the day-1 command surface: what rlu touches and how the determinations are made.** (the connect + mechanism piece)
- [ ] Writes: `_route_engagements.md` (append-only, root); the ↗ pointer into `_route.md`. Reads: route-map (read-only, to resolve a ref). Project-wide: the glob (guard + `list`).
- [ ] Determination MECHANISMS specified: first-in-project = glob for any `_route_engagements.md`; which-route = read route-map + match ordinal/fragment, ASK on ambiguity; cross-inquiry = compare run-location vs route-source.
- [ ] Day-1 command surface: `start` / `done` / `park` / `list` (the minimal four); the discoverable extras noted.
- [ ] `/aMVLwr` integration path noted (runner auto-marks formal-loop completion; rlu remains the tool for informal runs).

**Q6 — The deferred frontier: what's out of v1, behind what gate.** (the bounding piece)
- [ ] Object-B (the Selector working-queue) — deferred; gate: Dispatcher real; rlu must not pre-empt it (the P1 boundary).
- [ ] Project-level-route (Navigator) engagement homing — deferred; gate: Navigator real.
- [ ] Parallel-writer concurrency — deferred; gate: Dispatcher/parallel-want.
- [ ] superseded/removed close-reason vocabulary — ship-or-defer decision stated.
- [ ] Each deferral has a named, observable gate (no "eventually").

## Step 5 — Interface Map

| Source → Target | What flows | Direction |
|---|---|---|
| Q1 pillars → Q2, Q3, Q4, Q5 | the governing principles each rule derives from | one-way (down) |
| Q2 lifecycle ⇄ Q4 scenarios | the transitions scenarios trigger; the states scenarios reference | **bidirectional** (the moderate-coupling boundary made explicit) |
| Q2 → Q5 | the row schema commands write; the obligations commands fire | one-way |
| Q3 NOT-list → Q5 | the touch-don'ts that constrain which interfaces are legal | one-way |
| Q4 scenarios → Q5 | the runtime determinations (first-in-project / which-route / cross-inquiry) whose mechanism Q5 supplies | one-way (Q4 names them; Q5 implements) |
| Q4 → Q6 | the axis-coordinates that defer | one-way |
| Q1 → Q6 | the single-decider boundary (object-B is what rlu must not become) | one-way |

**Assumptions-not-data check (hidden coupling):** Q4 *assumes* Q5's determinations are deterministic and cheap (the glob, the ref-match) — made explicit so Q4's coverage argument can't silently depend on an unspecified mechanism. Q2 *assumes* the row schema (Q2's own) is what Q5's commands write — same piece, no cross-assumption leak. Q3 *assumes* the only legal `_route.md` touch is the ↗ pointer — stated in Q3 and honored in Q5. No hidden coupling remains.

## Step 6 — Dependency Order

1. **Q1 (pillars)** — FIRST; the hub everything derives from.
2. **Q2 (should-do)** and **Q3 (shouldn't-be)** — PARALLEL (both derive from Q1; independent of each other: positive vs negative).
3. **Q4 (scenarios)** — after Q2+Q3 (it triggers Q2's transitions and respects Q3's fence).
4. **Q5 (interfaces + commands)** — after Q2 (obligations/schema) + Q4 (names the determinations Q5 implements).
5. **Q6 (deferred frontier)** — after Q4 (which coordinates defer) + Q1 (object-B boundary); can run parallel to Q5.

No circular dependencies. The one bidirectional interface (Q2⇄Q4) is a contract (the transition-set), defined in Q2 and referenced by Q4 — not a build-order cycle.

## Step 7 — Self-Evaluation

**Minimum (3 dimensions):**

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each question answerable without reading siblings (except via interfaces)? | **PASS** — Q1 (principles), Q2 (lifecycle), Q3 (fence), Q4 (scenarios), Q5 (touches), Q6 (gates) each stand alone given the named interfaces. |
| **Completeness** | Do the pieces cover the whole (should + shouldn't + scenarios + reconcile)? | **PASS** — should=Q2; shouldn't=Q3; scenarios=Q4; the WHY=Q1; the connect=Q5; the bound=Q6. The finding-level Inherited Commitments Re-test (reconcile with the 5 priors) is a CONCLUDE obligation, not a spec piece — noted so it doesn't fall through. |
| **Reassembly** | Pieces + interfaces = the build-ready contract? | **PASS** — Q1 governs; Q2/Q3 give the positive/negative faces; Q4 gives the situations + coverage; Q5 gives the touches + determination mechanisms; Q6 bounds v1. Together = a build-ready, self-justifying spec. |

**Determination-mechanism piece check (Step 7 refinement):** the spec's load-bearing runtime determinations — "is this the project's first engagement-record?" (A4→guard), "which route does this ref mean?" (disambiguation), "is this cross-inquiry?" (A3→placement) — are NOT presupposed: **Q4 names them and Q5 supplies the mechanism** (glob / read-and-match-ask / location-compare). Reassembly does not fail for a missing determination piece. **PASS.**

**Balance:** Q4 (scenarios) is the heaviest, Q1 (pillars) the most central-but-compact; Q3/Q6 lighter. Proportional to the inquiry's weight (the user's emphasis is "in what scenarios" + "shouldn't be"). No single piece is 80% nor trivial. Acceptable.

**Self-assessment: PASS (minimum 3/3 + determination-mechanism check + balance).** Decomposition ready for Innovation.
