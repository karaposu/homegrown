# Surfacing — Push-Driven Memory: Mechanisms Dive

## User Input

```text
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-07-03_16-39__push_driven_memory_mechanisms_dive/_branch.md

(Territory = (1) the house infra at the letter; (2) the WATCHER-MOMENT axis; (3) the CHECK-CONTENT axis; (4) the INTERRUPT-DELIVERY axis; (5) the binding constraints verbatim. Purpose = the feasibility ground; the axes WIDE; the constraints; any existing push precedent. Mixed artifact+possibility case. Save to surfacing.md.)
```

**Mode:** mixed (infra = artifact; axes = possibility). **Entry:** signal-first. **Territory:** the U8 seat's mechanism-space, grounded in this machine.

---

## Traversal Trace

| # | Region | Item(s) — checked where checkable | Relevance | Conf | Note |
|---|---|---|---|---|---|
| T1 | The infra, at the letter | **Available but unwired:** platform cron (CronCreate — scheduled sessions that start themselves); Claude Code hooks (configurable to fire on session events — none configured: `.claude/settings.local.json` carries permissions only); git hooks (zero non-sample in `.git/hooks/`); ScheduleWakeup (same-session wakeups); PushNotification (a real deliver-to-human tool). **Always present without wiring:** the session boundary (every session passes a warm-up moment); the human's own rhythm (daily invocations). | **core** | HIGH | Feasibility ground: FIVE fire-able moments exist on this machine today; none is currently used for memory. |
| T2 | Push precedent scan (honest) | NONE built: no hook fires on anything; `improvement_observations.md` — the one designed feedback-accumulator — has never even been created; the only push-ish surfaces are designs (the digest-header metric, unbuilt) and within-session checkpoint displays (narration, not memory-push). Canon's "nothing watches between inquiries yet" verified at the letter. | **core** | HIGH | The seat is empty all the way down — this dive designs from zero, honestly. |
| T3 | **The key mechanism: push without a daemon** | Nothing needs to RUN continuously for push to exist. A watcher is (i) a CHECK that computes from artifacts + (ii) a MOMENT it rides + (iii) an INTERRUPT it leaves. Since sessions and hooks are the only compute, interrupts must be MATERIALIZED — the mailbox pattern: the watcher writes `_inbox.md` (or a digest-header line), and the next warm-up MUST read it. "Uninvited" is preserved: the WORKER never asked; the arrival was decided elsewhere/earlier. | **core** | HIGH | The feasibility answer in one move: push = deferred interrupt via artifact + a mandatory read at the next moment. |
| T4 | Axis A — the MOMENT (when a watcher runs) | **A1 schedule-fired:** a cron session (nightly/weekly) sweeps and writes the inbox. **A2 event-fired:** a git/file hook fires on commit/finding-landing → runs the check script (or queues a cron-soon session). **A3 boundary-fired:** every warm-up's step 0.5 runs cheap checks inline (the digest header's frontier count IS this, designed). **A4 threshold-fired:** a derived number crossing (frontier>N; view-staleness delta>K) — computed AT a moment from A1–A3, so a sub-mode, not a peer. **A5 human-fired:** the user asks for a sweep (degenerates to pull — kept for honesty as the boundary case). | **core** | HIGH | Three true peers (schedule/event/boundary) + one sub-mode (threshold rides them) + one boundary case (human-fired ≈ pull). |
| T5 | Axis B — the CHECKER (who computes) | **B1 script-grade:** pure grep/arithmetic (frontier count; staleness deltas; routes aging; chain-quiet detection) — cheap, dumb, high-precision on countables. **B2 session-grade:** an LLM session reads new findings against old constraints (collision/contradiction detection — the semantic checks scripts can't do) — expensive, scheduled sparsely. **B3 hybrid:** script-grade triggers decide WHEN a session-grade check is worth its cost (the script watches numbers; the session reads meaning only when numbers move). | **core** | HIGH | The checker-grade split is the cost lever: scripts always-affordable; sessions rationed. |
| T6 | Axis C — the CHECK-CONTENT (what fires relevance) | countable: frontier growth; view staleness (view date vs newest finding in its hit-set); open routes aging (unchecked ✓ older than K weeks); chain-quiet (no refiner in K weeks on a hot topic). semantic: new-finding-vs-old-constraint collision (a fresh claim touching an old bound); contradiction candidates (two live findings claiming differently); relitigation-in-progress (a new inquiry resembling a killed route). | **core** | HIGH | Countables are script-grade; the semantic three are session-grade — the axis pairs with T5's split. |
| T7 | Axis D — the DELIVERY (how the interrupt lands) | **D1 inbox file** (`_inbox.md` at repo root or in the digest's folder; the warm-up's step 0 reads it; entries cleared-by-acknowledgment [moved to an archive] — else fatigue accumulates); **D2 digest-header lines** (the shipped pattern: `frontier: N` — one-line signals, no separate artifact); **D3 platform notification** (PushNotification → the human's device — for HUMAN-urgent items only); **D4 session-opening banner** (a SessionStart hook prints the inbox head — makes D1 unmissable without blocking); **D5 blocking gate** (refuse work until acknowledged — heavy; the fatigue axis's danger zone). | **core** | HIGH | D1+D4 compose naturally (artifact + unmissable surfacing); D3 is the only true human-push; D5 flagged as the fatigue cliff. |
| T8 | The binding constraints, verbatim | **The valve:** "ceremonies remain user-declared; sessions never self-initiate ceremonies or view-generation off the metric; the number is for the user's eyes" — a watcher RECOMMENDS (writes a note), never RUNS (no auto-consolidation, no auto-build). **Pre-registration physics:** the indicator-criteria file must predate the first traversal-memory trace — a watcher's outputs must be DERIVED-FROM-ARTIFACTS observations (grep results, dates, collisions found — territory-derived, like views); the moment a watcher records SELECTIONS or judgments-about-choices it becomes the write-half, which is the user's open decision. **Alert fatigue:** the family's own failure mode — interrupts must be few and precise (the CI lesson: precision beats recall; every false interrupt spends trust). | **core** | HIGH | The three walls any variation must respect; checked per-option at critique. |
| T9 | The U8/U9 boundary carried | Watching = REACTING to what happened (a finding landed; a number crossed). Predicting = GUESSING what's next (the brief). Every option here must be reactive; a "watcher" that infers tomorrow's task is U9 wearing U8's coat. | **core** | HIGH | The boundary test for critique's per-option pass. |

## State Summary

- **Territory echo:** infra checked live; the seat's emptiness verified; the mechanism named; four axes populated; constraints verbatim.
- **Purpose echo:** feasibility ground + wide options + constraints + honest precedent-absence — all four delivered.

**Coverage map:** infra (5 fire-able moments, 0 wired) · precedent (none — verified) · the mechanism (deferred-interrupt-via-artifact) · Axis A moments (3 peers + 1 sub + 1 boundary) · Axis B checkers (script/session/hybrid) · Axis C contents (4 countable + 3 semantic) · Axis D deliveries (5, composable) · constraints (3 walls) · the U8/U9 test. All core.

**Confirmed-absent:** any existing watcher, hook, inbox, or notification wiring; any improvement_observations.md.

**Concept-names list:**
- `the mailbox pattern` (T3) — push materialized as an artifact read at the next mandatory moment.
- `the three moments` (T4) — schedule / event / boundary; threshold rides them.
- `the checker-grade split` (T5) — scripts watch numbers; sessions read meaning; hybrid rations the expensive one.
- `the three walls` (T8) — valve · pre-registration · fatigue.
- `reactive-only` (T9) — the U8/U9 boundary test.

**Frontier flags:** whether hook-wiring is acceptable to the user (a settings change — build-gated like everything); the inbox's acknowledgment mechanics (cleared-by-move vs cleared-by-read).

**Workspace-populated:** `{populated: true, populated-at: 2026-07-03 (this run), extent: live infra checks + four-axis generation}`

## Telemetry

- Mode: mixed | entry: signal-first | Cycles: 4 | items: 9 trace entries | tags: core 9
- Convergence: the four axes stable on a second pass; no fifth axis found (WHO-benefits folded into delivery)
- Failure modes checked: Missed-relevance (the precedent scan run honestly — zero found and SAID), Territory-mis-binding (infra checked live, not assumed), Candidate-collapse (threshold kept as sub-mode with its reason)
- **Self-assessment: PROCEED**
