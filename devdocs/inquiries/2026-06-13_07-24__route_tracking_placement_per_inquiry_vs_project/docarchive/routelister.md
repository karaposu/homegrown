# Route-Map — route_tracking_placement_per_inquiry_vs_project (exhaust run)

## User Input

territory: devdocs/inquiries/2026-06-13_07-24__route_tracking_placement_per_inquiry_vs_project/ (this inquiry's artifacts — _branch.md + the six discipline outputs). goal: "settle WHERE route run-state lives (per-inquiry _runs.md as source of truth + a derived project view; the Selector queue deferred) and reconcile it with the prior rlu finding + the launch checklist — toward trackable route-fields without a central-file lookup or fragile references". Save the route-map to devdocs/inquiries/2026-06-13_07-24__route_tracking_placement_per_inquiry_vs_project/routelister.md; the persistent index lives at devdocs/inquiries/2026-06-13_07-24__route_tracking_placement_per_inquiry_vs_project/_route.md (create it — fresh; no prior index).

## Map Header

- **Mode:** root / project-space (breadth) · **Entry:** fresh
- **Identities enumerated:** 11 · **High-priority:** 3 (the `_runs.md` spec; the prior-finding corrigendum; the rlu v1 write-target update)

## Route Index

| # | Direction | grain | kind | engagement | Priority |
|---|---|---|---|---|---|
| 1 | the `_runs.md` per-inquiry file spec | project-space | teleological | DEVELOP | **HIGH** |
| 2 | the prior-rlu-finding corrigendum | concept-space | epistemic | REFINE | **HIGH** |
| 3 | rlu v1 write-target update (central → `_runs.md`) | project-space | teleological | DEVELOP | **HIGH** |
| 4 | the `rlu list` derived-view (scan-all-`_runs.md`) | project-space | teleological | DEVELOP | MED-HIGH |
| 5 | the window-guard re-attachment (first-run-log glob) | project-space | teleological | DEVELOP | MED-HIGH |
| 6 | the launch-checklist re-test (count/queue/window separation) | concept-space | epistemic | TEST | MED-HIGH (gated: own inquiry) |
| 7 | the crowboy migration (status lines → per-folder `_runs.md`) | project-space | teleological | DEVELOP | MED |
| 8 | the where-it-RAN row-placement + source-map back-ref rule | project-space | teleological | DEVELOP | MED |
| 9 | the object-B Selector working-queue (deferred) | project-space | teleological | INVESTIGATE-FRONTIER | LOW (gated: Dispatcher) |
| 10 | the field-vs-selections-vs-runs canon note | concept-space | epistemic | CONSOLIDATE | MED |
| 11 | the assembled-view caching (scale knob) | project-space | epistemic | TEST | LOW (gated: large N) |

## Per-Route Records

1. **the `_runs.md` per-inquiry file spec** · Goal: trackable route-fields · project-space · teleological · **DEVELOP** · Movement: pin the file — root-level underscore (the `_route.md` sibling pattern), append-only, self-documenting header, columns (route-ref · status · started/finished · artifact-pointer · one-line outcome), "current state = last line mentioning the ref" · WHY: the verdict's source-of-truth artifact; everything else references it · Priority **HIGH** · Confidence HIGH · Guidance: keep columns minimal (full format gated like the selections schema).
2. **the prior-rlu-finding corrigendum** · concept-space (one finding's manifestations) · epistemic · **REFINE** · Movement: add `impacted_by:` + a banner to `devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/finding.md` — write-target → `_runs.md`; central-file role → deferred queue (object-B) + derived overview; 90% (mechanism/moments/NOT-list/guard) preserved · WHY: the prior finding's Correction-1 is partially superseded; unmarked, the next reader builds rlu against the wrong target · Priority **HIGH** · Confidence HIGH · Guidance: surgical — two changed things only.
3. **rlu v1 write-target update** · project-space · teleological · **DEVELOP** · Movement: rlu writes the per-inquiry `_runs.md` (not the central selections.md); `rlu start`/`rlu done` append there · WHY: the verdict's operational change to the prior rlu design · Priority **HIGH** · Confidence HIGH · Guidance: the rest of rlu v1 (two moments, NOT-list) unchanged.
4. **the `rlu list` derived-view** · project-space · teleological · **DEVELOP** · Movement: `rlu list` (no path) globs + assembles all `_runs.md` into the project-wide done-overview (read-only, regenerable, never a maintained file); `rlu list <inquiry>` = that folder's · WHY: the project-wide question, derived not maintained — dissolves the 2000-lookup · Priority MED-HIGH · Confidence HIGH.
5. **the window-guard re-attachment** · project-space · teleological · **DEVELOP** · Movement: on first run-log, rlu globs the project for any `_runs.md`; if none AND a pre-registration program is declared, fire the graded guard (the distributed analogue of the central-creation guard) · WHY: distributing truth removed the single creation event; the irreversible window must still be protected · Priority MED-HIGH · Confidence HIGH · Guidance: the glob is cheap, once-per-project-first-log.
6. **the launch-checklist re-test** · concept-space (the checklist finding) · epistemic · **TEST** · Movement: re-point the launch checklist's "Turn 1 = the central selections file" using the THREE-WAY separation — turn-COUNT = the derived view; the QUEUE = object-B; the FIRST-record window = the first `_runs.md` · WHY: the checklist made a single-central-ledger assumption; the gate logic survives but the wording needs precise re-pointing · Priority MED-HIGH (gated: that finding's own re-test) · Confidence HIGH (that it holds).
7. **the crowboy migration** · project-space · teleological · **DEVELOP** · Movement: move crowboy's hand-written status/progress lines DOWN into each inquiry's own `_runs.md` (pointers stay in `_route.md`); smaller than the prior finding's central-seed · WHY: cures the live spec contradiction; the migration shrank under this verdict · Priority MED · Confidence HIGH · Guidance: per-folder, the user's go.
8. **the where-it-RAN row-placement rule** · project-space · teleological · **DEVELOP** · Movement: pin the rule — a run-log row lives where the WORK ran (the cwd/produced inquiry), with a source-map back-reference to where the route came from; resolves cross-inquiry routes · WHY: cross-inquiry ambiguity needs a deterministic home · Priority MED · Confidence HIGH.
9. **the object-B Selector working-queue** · project-space · teleological · **INVESTIGATE-FRONTIER** · Movement: when the Dispatcher becomes real, build the project-level forward-intent queue (the Pipeline finding's selections file, scoped to admitted-intent) · WHY: the genuinely-project-level object, distinct from the done-log · Priority LOW (gated: Dispatcher/parallel-want) · Confidence MED.
10. **the field-vs-selections-vs-runs canon note** · concept-space · epistemic · **CONSOLIDATE** · Movement: one note reconciling the three layers — `routelister.md`/`_route.md` (could-do, perception) / `_runs.md` (decided-about-and-done, per-inquiry) / the queue (decided-about-and-committed, project) · WHY: three living artifacts now; a reader needs the one-glance map to not re-conflate · Priority MED · Confidence MED.
11. **the assembled-view caching** · project-space · epistemic · **TEST** · Movement: if/when N inquiries is large, cache the `rlu list` assembly (regenerable; never a source of truth) · WHY: the only scale concern, and it's a read-optimization, not an architecture change · Priority LOW (gated: large N) · Confidence MED.

## Excluded (with reasons)

- **"Build `_runs.md` / write the corrigendum" as decisions** — the GOs are the user's; routes 1–3 are the directions, not the acts.
- **A maintained central done-file** — killed in the inquiry (a second drifting source of truth); the overview is DERIVED (route 4), not maintained.
- **Re-deciding rlu's mechanism / two-moments / NOT-list** — settled in the prior finding (90% preserved); not re-opened here.
- **Redesigning routelister or `_route.md`** — their identity is the constraint, not the subject; route 1 ADDS a sibling, it doesn't touch them.
- **"Conclude / next iteration"** — control-flow, not concept-directions (NOT-list).

## Telemetry

- Mode: root/breadth · Entry: fresh · Identities: 11 · teleological 7 / epistemic 4 · HIGH 3
- Individuations: 14 considered → 11 (lean-to-split kept: the guard-re-attachment separate from the `_runs.md` spec [cross-project policy vs file format]; the where-it-ran rule separate from the spec [placement logic vs columns]; the caching separate from the derived-view [scale-opt vs the view itself]); uncertain-individuations: 1 (route 10 the canon note could fold into route 2's corrigendum — kept split: project-canon vs prior-finding-fix); stale: n/a (fresh)
- Convergence: sweep cycle 2 yielded no new identities → converged
- Frontier flags: none (territory = one inquiry's artifacts)
- LAYER 1 checked: no over-merge; no goal-loss (every route serves the placement verdict / its reconciliation); grain marked (routes 2/6/10 concept-space)
- LAYER 2 checked: no selection-creep (GOs excluded as decisions; Priority/Confidence attributive); no process-coupling (routes named from content); no description-collapse; no manifestation-dump
- Self-assessment: **PROCEED**
