# Structural Decomposition — route_tracking_placement_per_inquiry_vs_project

## User Input

devdocs/inquiries/2026-06-13_07-24__route_tracking_placement_per_inquiry_vs_project/_branch.md

**The whole being decomposed** (from sensemaking SV5/SV6): the placement re-decision — "run-state" splits into two objects (per-inquiry RUN-LOG / project WORKING-QUEUE) + a derived overview; per-inquiry `_runs.md` is the run-log's source of truth; the project view is derived; the queue is deferred; the prior finding gets a corrigendum — with an explicit plus/minus weighing, the honest prior-finding re-test, the kind-distinction resolution, and "only object-A ships now."

---

## 1. Coupling Map

**Elements:** the two-objects+derived-third model (E1) · the source-of-truth vs derived-view reframe (E2) · the plus/minus table (E3) · the `_runs.md` concrete shape + the archiving/spec correction (E4) · the inquiry-level/project-level = object/scope cleavage (E5) · the prior-finding re-test + corrigendum (E6) · what-ships-now / deferral scoping (E7).

| Pair | Coupling | Why |
|---|---|---|
| E1 → E2 | strong | the reframe (source vs derived) presupposes the objects are separated (you can only make the overview "derived" once it's distinct from the run-log) |
| E1 ↔ E5 | identity | the inquiry/project routelister cleavage IS the object-A/object-B split seen from the run-mode angle — same line |
| E2 → E3 | one-way | the reframe is the row in the table that "takes both winning columns" — the table's punchline |
| E1/E2 → E4 | one-way | the `_runs.md` shape (root-level, append-only) is object-A's concrete form under the archiving/spec facts |
| E1/E2 → E6 | one-way | the re-test verdict (partially-flawed) and the corrigendum follow from the objects+reframe (the prior finding fused them / centralized truth) |
| E1–E6 → E7 | fan-in | "only A ships now" is the scoping conclusion the whole model licenses |

**Clusters:** {E1+E2+E5} the conceptual core (the split + the reframe + the cleavage — one insight, three faces) · {E3} the explicit weighing · {E4} the artifact shape · {E6} the prior-finding reconciliation · {E7} the scoping. **Valleys:** between the conceptual core and the table that displays it; between the model and the artifact that instantiates object-A; between the model and the corrigendum.

## 2. Boundary Set (top-down)

Five pieces: **P1 The conceptual core** (the two objects + derived third; the source-of-truth/derived-view reframe; the inquiry/project = object/scope cleavage — the dissolving insight, three faces) · **P2 The plus/minus table** (the explicit "weigh correctly" deliverable: locality / move-robustness / project-view-cost / queue-role / cross-inquiry / write-simplicity / no-mutation — and the take-both-columns punchline) · **P3 The `_runs.md` shape** (root-level underscore file; append-only; contents; "current state of route #7 = last line"; the cross-inquiry-route home; the archiving + spec corrections to the user's sibling-file) · **P4 The prior-finding re-test + corrigendum** (partially-fixed-not-fully on the lookup; the ↗-pointer's limits; amend with impacted_by + the write-target/role re-statement) · **P5 What ships now** (only object-A; object-B deferred behind the Dispatcher gate; the overview on-demand; rlu's v1 write-target updated).

## 3. Bottom-Up Validation

Atoms → pieces: run-log-vs-queue (temporal direction; reader; access pattern); derived-overview-as-third → **P1**. source-of-truth-flip; both-objections-dissolve; take-both-columns → P1/P2. the seven axes + verdicts → **P2**. root-level (archiving fact); not-_route.md (spec); append-only (crash-safe, ~10 rows); cross-inquiry homing; rlu-owned → **P3**. ↗-keyed-to-concepts; bare-breadcrumb; central-as-source-of-truth = the over-reach; impacted_by + corrigendum text → **P4**. only-A-new; B-deferred; overview-on-demand; rlu write-target change → **P5**. No atom homeless. **HIGH confidence.**

## 4. Question Tree

**P1 — The conceptual core.** *"What is run-state, really?"*
- [ ] Two objects: the per-route RUN-LOG (local; backward done-record) vs the Selector's WORKING-QUEUE (project; forward admitted-intent) — different direction, reader, access pattern
- [ ] The derived third: the project-wide done-OVERVIEW = a regenerable projection over the run-logs (a view, not a maintained object)
- [ ] The reframe: per-inquiry files = source of truth; project view = derived → both the 2000-lookup and reference-fragility dissolve (they're properties of querying centralized truth for local facts)
- [ ] The cleavage identity: inquiry-level routelister (concept-target mode) ↔ object-A; project-level routelister (root/project-space mode, the Navigator) ↔ object-B — the user's distinction = this split

**P2 — The plus/minus table.** *"Weigh it correctly."*
- [ ] Per-inquiry vs central across: locality of the local question · move/rename robustness · project-wide-view cost · the Selector/Dispatcher queue role · cross-inquiry routes · write simplicity · no-mutation
- [ ] The punchline: the source-vs-derived reframe takes the ✓✓ column of BOTH (per-inquiry truth + derived view); residual costs (overview-assembly = a cacheable scan; cross-inquiry homing) named, not hidden

**P3 — The `_runs.md` shape.** *"What's the file, exactly?"*
- [ ] Location: the INQUIRY ROOT, a new underscore state-class file (sibling to `_route.md`/`_state.md`/`_branch.md`) — NOT next to routelister.md (archived at CONCLUDE), NOT inside `_route.md` (spec: no process state)
- [ ] Write discipline: rlu-owned, append-only (crash-safe, audit-friendly; "current state of route #7" = last line mentioning it — trivial at ~10 routes); never archived
- [ ] Contents (sketch; full format gated like the selections schema): route-ref (map ordinal/name) · status (in-flight/done/parked) · started/finished · artifact pointer · one-line outcome
- [ ] Cross-inquiry route: the row lives in the ORIGINATING inquiry's `_runs.md`, pointing at where the work landed
- [ ] routelister writes nothing differently — its identity untouched

**P4 — Prior-finding re-test + corrigendum.** *"Was the prior finding wrong, and what do we fix?"*
- [ ] The honest verdict: Correction-1 was PARTIALLY right (run-state needs a home; project-wide "what's done" is a real question → the derived overview) and PARTIALLY over-reached (central file as SOURCE OF TRUTH for the local done-log; the ↗ `_route.md` pointer half-mitigated — keyed to concepts, a bare breadcrumb — but didn't fix the local lookup)
- [ ] The amendment: `impacted_by:` + a corrigendum banner on the prior finding — rlu's write-target → `_runs.md`; the central file's role → the deferred queue (object-B) + the derived overview; the ↗ pointer stays as the index's legal breadcrumb pointing at the run-log/artifacts
- [ ] On the user's go (it edits a committed finding)

**P5 — What ships now.** *"What do we build, and what waits?"*
- [ ] NEW now: object-A — the per-inquiry `_runs.md` (rlu writes it; the user's lightweight ask, correctly placed)
- [ ] DEFERRED: object-B (the Selector's working-queue) — behind its existing Dispatcher/parallel-want gate; not needed for the immediate "track what's run" need
- [ ] ON-DEMAND: the done-overview — `rlu list` assembling all `_runs.md` (no maintained file yet)
- [ ] rlu v1 (from the prior finding) updates: write-target = `_runs.md` (per-inquiry) instead of the central selections.md

## 5. Interface Map

| From → To | What flows | Direction |
|---|---|---|
| P1 → P2 | the objects + reframe the table compares and displays | one-way |
| P1 → P3 | object-A's identity that `_runs.md` instantiates | one-way |
| P1 → P4 | the split + reframe that judge the prior finding | one-way |
| P1–P4 → P5 | the model whose scoping yields "only A now" | fan-in |

*Assumptions-not-data check:* (a) `_runs.md`'s full format is sketch-level (gated, like the selections schema) — housed in P3; (b) object-B's queue design is the Pipeline finding's, deferred — housed in P5; (c) the corrigendum edits a committed finding on the user's go — housed in P4. All housed.

## 6. Dependency Order

```
Wave 1: P1 (the conceptual core — the dissolving insight)
Wave 2: P2 (the table — displays P1) · P3 (the file — instantiates object-A) · P4 (the re-test — judges via P1)
Wave 3: P5 (what-ships-now — the scoping conclusion)
```
Linear-ish; P1 is the hub everything else consumes.

## 7. Self-Evaluation (full 7 dimensions)

| Dimension | Verdict | Note |
|---|---|---|
| Independence | **PASS** | the core, the table, the file, the re-test, and the scoping are separable; the core is the shared hub (deliberate) |
| Completeness | **PASS** | the placement verdict (P1) + the explicit weighing (P2) + the prior-finding re-test (P4) + the kind-distinction (P1's cleavage) + the file shape (P3) + source-vs-derived (P1/P2) — every MQ3 endpoint; the WHY motives served (update-in-place → P3; local-and-cheap → P1/P2; robustness → P1/P3; weigh-correctly → P2) |
| Reassembly | **PASS** | P1–P5 = the dissolving model + the weighing + the artifact + the reconciliation + the scoping — the placement re-decision asked for |
| Tractability | **PASS** | each piece bounded by the six collapses |
| Interface clarity | **PASS** | three assumptions housed |
| Balance | PASS-with-note | P1 is the heaviest hub (the dissolving insight) — proportional (it's what makes the dispute not-a-contest) |
| Confidence | **HIGH** | top-down and bottom-up agree |

*Determination-mechanism piece check:* the runtime judgment — "which object does a given tracking need belong to (A local run-log vs B project queue)?" — housed in P1 (the temporal-direction + reader test: backward-done-record-read-locally → A; forward-admitted-intent-read-project-wide → B). PASS.

**Stopping decision:** no piece needs sub-decomposition (`_runs.md`'s full schema is gated; object-B's queue design is the Pipeline finding's, deferred).

**Next discipline input:** Innovation drafts the final texts — the two-objects+derived-view model, the source-vs-derived reframe, the plus/minus table with the take-both-columns punchline, the `_runs.md` shape (root-level, append-only, contents, cross-inquiry homing), the prior-finding re-test + corrigendum, and the ships-now scoping — honoring "weigh correctly," crediting the user's instinct AND the prior finding's correct part, and every edit on the user's go.
