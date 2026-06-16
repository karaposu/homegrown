# Route-Map — rlu_behavioral_spec_should_shouldnt_scenarios (exhaust run)

## User Input

territory: devdocs/inquiries/2026-06-13_09-25__rlu_behavioral_spec_should_shouldnt_scenarios/ (this inquiry's artifacts — _branch.md + the six discipline outputs). goal: "produce rlu's build-ready behavioral contract — should-do (lifecycle + invariants) / shouldn't-be (the single-decider + integrity scope fence) / scenarios (the 7 generative axes), governed by the three pillars, reconciled with the adopted design and the settled `_route_engagements.md` write-target — toward an implementable rlu and its onward steps". Save the route-map to .../routelister.md; the persistent index lives at .../_route.md (fresh).

## Map Header

- **Mode:** root / project-space (breadth) · **Entry:** fresh
- **Identities enumerated:** 13 · **High-priority:** 4 (build rlu v1; the row schema; the reason-code taxonomy; the single-writer-per-route precedence)

## Route Index

| # | Direction | grain | kind | engagement | Priority |
|---|---|---|---|---|---|
| 1 | build rlu v1 (the skill) | project-space | teleological | DEVELOP | **HIGH** |
| 2 | the `_route_engagements.md` row schema | project-space | teleological | DEVELOP | **HIGH** |
| 3 | the reason-code taxonomy | project-space | epistemic | CONSOLIDATE | **HIGH** |
| 4 | the single-writer-per-route precedence rule | project-space | teleological | DEVELOP | **HIGH** |
| 5 | the window-guard glob mechanism | project-space | teleological | DEVELOP | MED-HIGH |
| 6 | the `/aMVLwr` runner auto-mark integration (Enhancement 1) | project-space | teleological | DEVELOP | MED |
| 7 | the crowboy migration (hand-annotations → rows) | project-space | teleological | DEVELOP | MED |
| 8 | dogfood the contract on the next informal run | project-space | epistemic | TEST | MED-HIGH |
| 9 | the single-decider line as project canon | concept-space | epistemic | CONSOLIDATE | MED |
| 10 | the WAL/event-sourcing/pre-registration groundings as the "why" doc | concept-space | epistemic | CONSOLIDATE | MED |
| 11 | object-B (the Selector working-queue) | project-space | teleological | INVESTIGATE-FRONTIER | LOW (gated: Dispatcher) |
| 12 | project-level routelister engagement homing | project-space | teleological | INVESTIGATE-FRONTIER | LOW (gated: Navigator) |
| 13 | free-text / `unlinked` engagement | project-space | teleological | PURSUE-SEED | LOW (gated: unlinked common) |

## Per-Route Records

1. **build rlu v1** · Goal: an implementable rlu · project-space · teleological · **DEVELOP** · Movement: turn the contract into the actual skill — the 4-command surface (`start`/`done`/`park`/`list`), the append-only `_route_engagements.md` writer, the ↗-pointer stamp into `_route.md`, the route-resolve-and-ask, the glob-guard · WHY: the finding is the contract; this is its instantiation · Priority **HIGH** · Confidence HIGH · Guidance: lead use-first (commands first; the WAL/pillar framing is the "why" layer, per Critique C1).
2. **the `_route_engagements.md` row schema** · project-space · teleological · **DEVELOP** · Movement: pin the exact columns (route-ref · status · started/finished · artifact-pointer · one-line-outcome · source-map-ref [name-keyed]) + the closed reason-code set · WHY: the structural follow-up the Layer Commitment flagged (behavioral contract surfaced a schema decision worth its own pinning) · Priority **HIGH** · Confidence HIGH · Guidance: name-keyed source-map ref (not ordinal — survives map regen, per Critique C8).
3. **the reason-code taxonomy** · concept (the close-reason set) · epistemic · **CONSOLIDATE** · Movement: fix the closed set {done · parked · superseded · no-artifact-by-nature · abandoned} that the unified close-transition carries · WHY: Critique C4+C5 — the code (not free text) closes the loophole AND preserves the done/parked/superseded distinction inside one transition · Priority **HIGH** · Confidence HIGH.
4. **the single-writer-per-route precedence rule** · project-space · teleological · **DEVELOP** · Movement: specify that the `/aMVLwr` runner auto-marks a route ONLY IF no rlu row exists for it; rlu's row is authoritative; they never both write the same route · WHY: Critique C6 — two-mode rlu risks two writers of one file; precedence makes it clean · Priority **HIGH** · Confidence HIGH.
5. **the window-guard glob mechanism** · project-space · teleological · **DEVELOP** · Movement: implement "on first run-log, glob the project for any `_route_engagements.md`; if none AND pre-registration declared, state the irreversible consequence + ask (graded: stop-where-declared, warn-elsewhere)" · WHY: the placement finding re-attached the guard here; this is its determination mechanism · Priority MED-HIGH · Confidence HIGH.
6. **the `/aMVLwr` runner auto-mark integration** · project-space · teleological · **DEVELOP** · Movement: the runner appends the completion mark itself at CONCLUDE for loop-runs (the prior finding's Enhancement 1), gated by route 4's precedence · WHY: removes all ceremony from formal-loop runs; rlu stays the tool for informal runs · Priority MED · Confidence MED · Guidance: depends-on route 4 (precedence) + route 1 (rlu v1).
7. **the crowboy migration** · project-space · teleological · **DEVELOP** · Movement: split the existing hand-annotations — pointers stay in `_route.md`; status/progress lines become the first `_route_engagements.md` rows (per-folder, DOWN not OUT) · WHY: cures the live spec contradiction; the demand proof becomes the first real data · Priority MED · Confidence HIGH · Guidance: the user's go; per-folder.
8. **dogfood the contract on the next informal run** · project-space · epistemic · **TEST** · Movement: run the contract by hand on the next real route-engagement (even before rlu is built) — does the lifecycle + reason-code + row schema actually fit a live case? · WHY: cheapest validation of the contract against reality before committing code · Priority MED-HIGH · Confidence MED.
9. **the single-decider line as project canon** · concept-space · epistemic · **CONSOLIDATE** · Movement: lift "records-and-points, never decides" (the sharpened definition) into a project-canon note the future Selector/Dispatcher inherit as the decision-authority invariant · WHY: Critique's frame-premise + the loop-runner bright line — this is constitutional for the whole machine, not just rlu · Priority MED · Confidence MED · Guidance: canon must be self-contained (distill, no inquiry refs in the canon body).
10. **the groundings "why" doc** · concept-space · epistemic · **CONSOLIDATE** · Movement: capture the external groundings (P1=single-decision-authority invariant; P2=WAL/event-sourcing; P3=optimize-for-forgetful-human + logbook; window=clinical-trial pre-registration) as the durable rationale · WHY: makes the spec "an instance of understood disciplines," defensible to a future skeptic · Priority MED · Confidence MED.
11. **object-B (the Selector working-queue)** · project-space · teleological · **INVESTIGATE-FRONTIER** · Movement: the project-level forward-intent queue the Dispatcher fires from (the Pipeline finding's selections file) · WHY: the genuinely-project-level object rlu must NOT become · Priority LOW (gated: Dispatcher real) · Confidence MED.
12. **project-level routelister engagement homing** · project-space · teleological · **INVESTIGATE-FRONTIER** · Movement: decide where a Navigator (project-level) routelister route's engagement gets logged (axis A7) · WHY: the one scenario axis left open · Priority LOW (gated: Navigator real) · Confidence MED.
13. **free-text / `unlinked` engagement** · project-space · teleological · **PURSUE-SEED** · Movement: let rlu record an engagement against a free-text route not in any map, marked `unlinked`, reconciled later · WHY: Innovation's REMOVE-constraint seed — covers purely-informal work on never-listed routes · Priority LOW (gated: unlinked engagements become common) · Confidence LOW.

## Excluded (with reasons)

- **"Build rlu / migrate crowboy" as DECISIONS** — the GOs are the user's; routes 1/7 are the directions, not the acts.
- **Re-deciding the write-target / name / pillars** — settled this inquiry + the priors; not re-opened.
- **Specifying the Selector / Dispatcher / human-meta-loop behavior** — out of territory (rlu is not them; the NOT-list fences this).
- **"Conclude / next iteration / loop again"** — control-flow, not concept-directions (NOT-list §1.3).

## Telemetry

- Mode: root/breadth · Entry: fresh · Identities: 13 · teleological 9 / epistemic 4 · HIGH 4
- Individuations: 16 considered → 13 (lean-to-split kept: row-schema [2] separate from rlu-v1 [1] = structural-artifact vs the-skill; reason-code [3] separate from row-schema [2] = the closed vocabulary vs the columns that carry it; single-decider-canon [9] separate from the groundings-doc [10] = the constitutional invariant vs the rationale-set); uncertain-individuations: 1 (route 9 vs 10 could merge into one canon note — kept split: invariant-for-the-machine vs why-the-spec-holds); stale: n/a (fresh)
- Convergence: sweep cycle 2 yielded no new identities → converged
- Frontier flags: 3 gated frontier routes (object-B/Dispatcher, project-level-homing/Navigator, unlinked/if-common) — listed with gates, not dumped
- LAYER 1 checked: no over-merge; no under-coverage (the 3 deferred frontier axes carried, not dropped); identity-grain held (one route per onward identity); goal-bias preserved (every route serves "implementable rlu + onward steps"); types fit
- LAYER 2 checked: no selection-creep (GOs excluded as decisions; Priority attributive); no process-coupling (routes named from content, not from the loop); no description-collapse; no manifestation-dump
- Self-assessment: **PROCEED**
