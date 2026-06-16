## User Input

`devdocs/inquiries/2026-06-13_09-25__rlu_behavioral_spec_should_shouldnt_scenarios/_branch.md`

Purpose (from `_branch.md`): produce rlu's behavioral contract — its positive obligations (should-do), its NOT-list (shouldn't-be), and a scenario→required-behavior mapping (must-do-in-what-scenarios) — reconciled with the adopted design and the settled `_route_engagements.md` write-target.

---

# Surfacing — rlu behavioral-contract design space

- **Mode:** possibility (behaviors / scenarios / exclusions are candidate-generated) with heavy **artifact substrate** (the prior findings, the routelister spec, the crowboy field record). **Entry:** signal-first. **Territory:** abstract-bounded (rlu's own behavior). Boundary-discovery: **skipped** (edges are clear — rlu's behavior, not the Selector/Dispatcher/human).
- **Recency annotation:** every item is possibility-mode candidate-generated → `{source: none, value: null}` for all (no filesystem backing). Stated once here per the per-item-mandatory rule; not repeated per row.
- **Asymmetric-failure:** leaned to inclusion — frontier/uncertain items carried at side/umbrella, not dropped.

## Workspace (substantive product — items + relevance tags)

### R1 — Identity anchors (what rlu IS; the seed for should/shouldn't)
- **I1** rlu = the **route-engagement recorder**: records which enumerated routes were engaged and what each produced. — `core / HIGH`
- **I2** Stance: **"records and points — never chooses, never launches"** ("I am the meta loop still"). — `core / HIGH`
- **I3** rlu **mechanizes a closing habit** that otherwise doesn't happen (the measured zero-for-109 lesson — un-mechanized steps get skipped). — `sub / HIGH`
- **I4** rlu is a **skill invoked inside an LLM session** (not a daemon, not pure code) — it runs where the work runs. — `sub / MED`

### R2 — Positive obligations (should-do)
- **O1** `rlu start <route-ref>` — write the **in-flight admission row** to `_route_engagements.md` IMMEDIATELY (route + why/goal + in-flight); hand the session its work-contract (route text + guidance, paste-able runner command when applicable); print the close-out command. — `core / HIGH`
- **O2** `rlu done [<route-ref>]` — **complete the row** (status, artifact pointer, one-line outcome) and stamp the **↗ manifestation pointer** into the route's `_route.md` row. — `core / HIGH`
- **O3** `rlu park <route-ref>` — record a **deciding-against** ("looked at it, not now, because…"). — `sub / HIGH`
- **O4** `rlu list [<inquiry>]` — print the table; **no-arg = glob + assemble the DERIVED project overview**; with-arg = that one inquiry's. — `core / HIGH`
- **O5** **stale-in-flight sweep** — every invocation, detect open in-flight rows ("2 open runs — close them?"). — `sub / HIGH`
- **O6** **route disambiguation** — accept ordinal or name-fragment; on ambiguity ASK, never guess. — `sub / HIGH`
- **O7** **window-guard fire on first run-log** — glob for any `_route_engagements.md`; if none AND pre-registration declared, state the irreversible consequence and ask once (graded: stop where declared, warn elsewhere). — `core / HIGH`
- **O8** **create `_route_engagements.md`** at the inquiry root on first write there; **append-only** thereafter. — `core / HIGH`
- **O9** **automatic metadata collection** at `done` (produced folder path, timestamps) — the user's "wrap the run" value. — `sub / MED`
- **O10** **degraded `done`-without-`start`** — create the row retroactively (covers forgotten starts + purely informal work). — `core / HIGH`

### R3 — NOT-list (shouldn't-be)
- **N1** Never **choose/select** which route to run (Selector/human's job). — `core / HIGH`
- **N2** Never **launch/execute** a run (records around a run; doesn't fire it). — `core / HIGH`
- **N3** Never **edit/mutate the route-map** (`routelister.md` — archived/regenerated; marks would vanish). — `core / HIGH`
- **N4** Never write **status/process words into `_route.md`** (spec forbids process state there; only the ↗ manifestation pointer is legal). — `core / HIGH`
- **N5** Never become the **project working-queue / Selector ledger** (object-B). — `core / HIGH`
- **N6** Never maintain a **central done-file as source of truth** (the overview is DERIVED, regenerable). — `sub / HIGH`
- **N7** Never **judge/evaluate the produced finding's content** (it points to the artifact; reading-to-judge would make it a second decider). — `sub / MED`
- **N8** Never **silently proceed** past the pre-registration window where declared. — `sub / HIGH`

### R4 — Scenario inventory (the coverage-critical region — "in what scenarios")
- **S1** Formal `/aMVLwr` run — a route engaged via a full loop inquiry. — `core / HIGH`
- **S2** **Informal plain-session run** — a route developed in a bare LLM session, no homegrown skill (the user's original motivating gap). — `core / HIGH`
- **S3** **Forgotten `start`** — work done without `rlu start`; `done` must work retroactively. — `core / HIGH`
- **S4** **Crash/abandon mid-run** — an in-flight row never closed; the sweep surfaces it. — `core / HIGH`
- **S5** **Cross-inquiry route** — surfaced in inquiry X, run as inquiry Y; row lives where-it-ran + source-map back-ref. — `core / HIGH`
- **S6** **First-run-in-project** — no `_route_engagements.md` anywhere yet; the window guard fires. — `core / HIGH`
- **S7** **Parked/decided-against route** — `rlu park`. — `sub / HIGH`
- **S8** **Multi-route inquiry** — ~10 routes in one field; multiple rows in one `_route_engagements.md`. — `sub / HIGH`
- **S9** **Ambiguous route reference** — ordinal/name collision; ask. — `sub / HIGH`
- **S10** **Re-engaging a done route** — a route run again later; append a new row (append-only history). — `sub / MED`
- **S11** **Engagement spawns sub-routes** — running a route produces new routes (the recursion); rlu records the engagement, routelister/the branch owns the new routes. — `sub / MED`
- **S12** **Project-level (Navigator) routelister route** vs an inquiry-level route — where does a project-level route's engagement get logged? — `side / MED` (frontier)
- **S13** **Route invalidated/superseded** (not parked-for-later, but no-longer-relevant) — a distinct close reason. — `sub / MED`
- **S14** **Concurrent/parallel runs** of several routes (future Dispatcher) — multiple in-flight rows; append-only helps, but parallel writers to one file? — `side / MED` (frontier)
- **S15** **`list` across a large project** (≈2000 routes) — the derived-view scale; cacheable. — `side / LOW` (settled-deferred)
- **S16** **Resumed session days later** — `_route_engagements.md` persists; `rlu list <inquiry>` re-orients. — `sub / MED`

### R5 — Decision-rules & invariants
- **D1** **Append-only** — never rewrite; "current state of route N" = the last line mentioning N. — `core / HIGH`
- **D2** **Never mutate originals** — route-map and `_route.md` (beyond the legal ↗ pointer). — `core / HIGH`
- **D3** **Which-object rule** — a tracking need is object-A (`_route_engagements.md`) if it's a local backward done-record; object-B (deferred) if forward cross-inquiry intent. — `sub / HIGH`
- **D4** **Row-placement rule** — the row lives where the work ran, carrying a source-map back-ref to the originating route-map. — `sub / HIGH`
- **D5** **Single-writer** — rlu owns `_route_engagements.md`. — `sub / MED`
- **D6** **Graded guard** — hard-STOP where a pre-registration program is declared; warn-and-proceed elsewhere. — `sub / HIGH`

### R6 — Lifecycle / state model
- **L1** States: **none → in-flight → done**; plus **parked**; plus (candidate) **superseded/removed**. — `core / HIGH`
- **L2** Transitions: `start` (none→in-flight); `done` (in-flight→done, or none→done degraded); `park` (none→parked); **reopen** (done→in-flight via a NEW appended row). — `sub / HIGH`
- **L3** Row schema (load-bearing for behavior): `route-ref · status · started/finished · artifact-pointer · one-line-outcome · source-map-ref`. — `core / HIGH`

### R7 — Interfaces / touchpoints
- **T1** Writes `_route_engagements.md` (inquiry root, append-only) — the source of truth. — `core / HIGH`
- **T2** Writes the **↗ pointer** into `_route.md` (manifestation reference — the only legal touch). — `sub / HIGH`
- **T3** **Reads** the route-map / `_route.md` to resolve a route-ref (read-only). — `sub / HIGH`
- **T4** **Globs** the project for `_route_engagements.md` (guard + `list`). — `sub / HIGH`
- **T5** Optional `/aMVLwr` integration — the runner appends the completion mark itself at CONCLUDE for loop-runs (Enhancement 1); rlu remains the tool for informal runs. — `side / MED`

### R8 — Open / deferred / frontier
- **F1** Window-guard **re-attachment mechanics** (glob cost; exactly when it fires). — `sub / MED`
- **F2** Cross-inquiry **row-placement convention** richness (bidirectional link?). — `side / MED`
- **F3** **Object-B (the queue)** — deferred; rlu must not pre-empt it. — `side / MED`
- **F4** **Concurrency / parallel writers** to one `_route_engagements.md`. — `side / LOW` (frontier)
- **F5** **Project-level routelister** engagement logging home. — `side / MED` (frontier; ties S12)
- **F6** The **`superseded/removed` close-reason** vocabulary. — `sub / MED`

### R9 — Field evidence (demand proof + migration)
- **E1** crowboy `_route.md` files carry hand-written run-state ("DEVELOPED via /aMVLwr", "IN PROGRESS §1–§4, 119 tests green", "DONE", "RATIFICATION PENDING") — the demand proof. — `sub / HIGH`
- **E2** The hand-annotation **split**: pointers stay in `_route.md`; status/progress lines become `_route_engagements.md` rows (the migration). — `sub / HIGH`
- **E3** The **zero-for-109 lesson** (un-mechanized closing steps don't happen) — grounds the two-moment + sweep design. — `sub / MED`

## Thin Artifact

### Traversal Trace (identifiers + tags; no item content — content lives in Workspace above)

| # | Region | Items | Aggregate verdict | Note |
|---|---|---|---|---|
| 1 | R1 Identity anchors | I1–I4 | core×2, sub×2 | settled by priors; seeds should/shouldn't |
| 2 | R2 Positive obligations | O1–O10 | core×5, sub×3, med×2 | the should-do face; O1/O2/O4/O7/O8/O10 core |
| 3 | R3 NOT-list | N1–N8 | core×5, sub×3 | the shouldn't-be face; scope fence |
| 4 | R4 Scenario inventory | S1–S16 | core×6, sub×6, side×4 | coverage-critical; S1–S6 core scenarios |
| 5 | R5 Decision-rules | D1–D6 | core×2, sub×4 | append-only + never-mutate are core |
| 6 | R6 Lifecycle | L1–L3 | core×2, sub×1 | the state model + row schema |
| 7 | R7 Interfaces | T1–T5 | core×2, sub×3, side×1 (T5) | what rlu reads/writes |
| 8 | R8 Frontier | F1–F6 | sub×3, side×3 | deferred + open questions |
| 9 | R9 Field evidence | E1–E3 | sub×3 | demand proof + migration |

### State Summary

- **Territory echo:** rlu's own behavioral design space (abstract-bounded).
- **Purpose echo:** produce rlu's behavioral contract (should / shouldn't / scenarios), reconciled with the adopted design.
- **Coverage map:** R1 confirmed · R2 confirmed · R3 confirmed · R4 confirmed (scenario hunt ran two sweeps; S10–S16 are the second-sweep additions beyond the named seeds) · R5 confirmed · R6 confirmed · R7 confirmed · R8 scanned (frontier — intentionally open) · R9 confirmed.
- **Confirmed-absent regions:** none (every region yielded relevant items). One *deliberately-excluded* region: the Selector/Dispatcher/human-meta-loop behavior — out of territory (rlu is not them), per the NOT-list, not "absent."
- **Concept-names list:** route-engagement recorder; in-flight admission row; work-contract; close-out moment; stale-in-flight sweep; window guard (graded); derived overview; append-only; ↗ manifestation pointer; degraded done-without-start; cross-inquiry source-map back-ref; which-object rule; route-engagement lifecycle (none/in-flight/done/parked/superseded); single-writer; reopen-as-new-row.
- **Frontier flags:** (a) cross-inquiry & project-level routelister engagement homing (S12/F5); (b) concurrency / parallel writers (S14/F4); (c) the superseded/removed close-reason vocabulary (S13/F6); (d) window-guard glob mechanics (F1). These feed Decomposition/Critique, not this step.
- **Workspace-populated status:** `{populated: true, populated-at: 2026-06-13_09-32, extent: 9 regions / ~55 items}`.

## Telemetry

- Mode: possibility (artifact-substrate-heavy) · Entry: signal-first
- Cycles run: 2 (sweep 1 = named seeds + adopted-design items; sweep 2 = unnamed-scenario hunt → S10–S16, N7, S13/S14 frontier) · Items enumerated: ~55 · Tags: core 24 / sub 23 / side 8 / umbrella 0
- Sub-phase fired: no (abstract-bounded)
- Convergence: territory exhausted at current resolution; no item filtered at uncertain-relevance; sweep 2 yielded only frontier-level new items → converged
- Failure modes checked: Missed-relevance (mitigated by 2-sweep scenario hunt), Surfaced-irrelevance (bounded; downstream filters), Over-coverage (acceptable; lean-to-inclusion), Territory-mis-binding (guarded — Selector/Dispatcher held out of scope), Purpose-loss (no — every tag traces to should/shouldn't/scenario)
- items_with_mtime: 0 · items_without_mtime: ~55 (all possibility-mode)
- **Self-assessment: PROCEED** (frontier flags raised for Decomposition/Critique, but coverage of the core should/shouldn't/scenario faces is complete).
