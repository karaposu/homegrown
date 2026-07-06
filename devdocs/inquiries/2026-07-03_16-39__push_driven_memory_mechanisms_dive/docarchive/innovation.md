# Innovation — Push-Driven Memory: Mechanisms Dive

## User Input

```text
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-07-03_16-39__push_driven_memory_mechanisms_dive/_branch.md

(Production-task mode: (a) the mechanism paragraph; (b) the axes table; (c) the archetypes + anti-bundles + stacking; (d) the walls; (e) the two worked paths. Mandated inversions: the inbox's new-artifact identity; the Sentinel gauge-vs-watcher; the Sweeper's cost. Audit on SV6. Respect: no build; enumerate-don't-select; the walls. Save to innovation.md.)
```

## Seed & Mode (Phase 1)

**Seed:** the 5 pieces. **Methodology-Mode Consideration:** inherited = **Standard default**; alternative = Contrarian-rethink; decision: **default** — three mandated inversions + critique downstream. *(Named/named/what-follows/decision.)*

---

## Phase 2 — Generate (principal content + mandated inversions)

### The three inversions first (they reshape the pieces)

**Inversion (the inbox's identity):** *"`_inbox.md` at root is a NEW MAINTAINED ARTIFACT — acknowledgment mechanics, archiving, staleness rules; the 'another mess' the user feared."* Correct — and the chain's own answer applies: make alerts **dated view-class notes, not a maintained file.** Countable alerts ride the digest header (already shipping); semantic finds land as `devdocs/views/_alerts/<date>.md` — dated, pointed, quoted-basis, never-edited, **acknowledged by recency** (the warm-up reads alerts newer than the previous session's date; old alerts age out of the window naturally — no clearing mechanics, no upkeep). Zero new MAINTAINED artifacts; the mailbox becomes a dated-notes convention. *(Adopted; the residue: if an unacknowledged grave item ages out silently, the device-notification grain exists for exactly that class.)*

**Inversion (the Sentinel: gauge or watcher?):** *"A printed `frontier: N` is instrumentation, not U8 — the initiation-locus test disqualifies it."* Half right, and the split is clarifying: an ALWAYS-printed line is a **gauge** (the reader initiated by warming up; no relevance fired) — honest instrumentation, not U8. A **conditional line** — printed only when staleness>K or routes-aging>W — IS relevance-fired: the threshold decided, not the reader. **The Sentinel's identity: a gauge panel that becomes a watcher exactly where its lines go conditional.** *(Adopted; the archetype survives with its U8-membership located precisely in its conditional lines.)*

**Inversion (the Sweeper's cost):** *"A nightly LLM session on a mostly-quiet repo burns money for nothing."* Correct — the fix is a guard step, generalizable: **every scheduled watcher opens with a cheap did-anything-change check** (git log / find -newer since the last sweep-mark; exit in seconds when quiet; the LLM reads only when the guard says something landed). The cron fires nightly; the SESSION runs only on change. *(Adopted into the Sweeper's recipe as step 1.)*

### (a) The mechanism paragraph

> The contradiction is only apparent. "Something watches" does not require something RUNNING — a watcher decomposes into three parts, and all three exist here without a daemon: a **CHECK** that computes from artifacts (scripts for countables — frontier growth, staleness, aging routes; sessions for meaning — collisions, contradictions); a **MOMENT** it rides instead of residing (every warm-up is a moment; git events are wireable moments; cron sessions are schedulable moments — five fire-able moments exist on this machine today, zero currently wired); and an **INTERRUPT** that outlives its maker, materialized as an artifact (a dated alert-note; a conditional header line) or delivered at one of the three genuinely interruptive grains (a session's FIRST tokens via a SessionStart banner; a tool-boundary via wired hooks; your device via a real notification). "Uninvited" survives because the CONTENT chose itself — relevance fired before any reader existed; the reader's question played no part. Two honest namings: an alerts-notes-only design is *push-initiated, pull-delivered* (a hybrid, and we say so); and the exact ceiling — **nothing can break into a working session mid-thought**; interruption granularity is session-birth, tool-boundary, or your pocket — never finer.

### (b) The axes (the raw option/method variations)

| Axis | Options |
|---|---|
| **MOMENT** (when it runs) | boundary-fired (every warm-up) · event-fired (git/file hooks) · schedule-fired (cron sessions, guard-gated) · [threshold = a sub-mode riding any] · [human-fired = the boundary case, ≈pull] |
| **CHECKER** (what computes) | script-grade (greps/arithmetic; cheap; countables) · session-grade (LLM reads meaning; expensive) · hybrid (scripts gate the session) |
| **CHECK-CONTENT** (what fires) | countable: frontier growth · view staleness · open-routes aging · chain-quiet — semantic: new-finding-vs-old-constraint collisions · contradiction candidates · relitigation-in-progress |
| **DELIVERY** (how it lands) | conditional digest-header line · dated alert-note (`views/_alerts/`, recency-acknowledged) · SessionStart banner · device notification (graves only) · blocking gate (named: the fatigue cliff) |

### (c) The four archetypes (coherent bundles — marked, never selected; they stack)

1. **The Warm-up Sentinel** — boundary · script · conditional header lines. A gauge panel whose conditional lines are the watcher. Catches: countable drift (staleness, aging, growth). Costs: ~nothing (greps at warm-up). Walls: trivially compliant (prints numbers; recommends nothing).
2. **The Landing Check** — event (a hook fires when a finding lands) · script · one header/alert line. Catches: the new arrival breaking countable rules (e.g., a finding landing without frontmatter; a summary missing). Costs: one wired hook. Walls: compliant (reports, never blocks).
3. **The Nightly Sweeper** — schedule (cron, **guard-gated**: exits in seconds when nothing landed) · hybrid · dated alert-notes + banner. Catches: the semantic three (collisions, contradictions, relitigation) — the checks only a reader can run. Costs: one session per ACTIVE day. Walls: notes are view-class (pointer + quoted basis + date; the wall-sentence applies).
4. **The Deep Auditor** — sparse schedule (weekly/on-era) · session · alert-notes + device notification for graves. Catches: slow rot (mandate-coverage decay; chain contradictions across months). Costs: rationed by design. Walls: the only archetype allowed to reach your pocket, and only for graves.

**Anti-bundles (incoherent, named):** session-grade on every event (expensive noise) · blocking gates with low-precision checks (the fatigue cliff) · device notifications for non-grave items (trust-spending).
**Stacking note:** the four ride different moments and share the alert-note convention — a house can run all four without conflict; composition is a user choice, not a default.

### (d) The walls (every variation is bound)

1. **The valve, verbatim:** ceremonies remain user-declared; watchers RECOMMEND (write notes), never act — no self-initiated consolidations, builds, or view-generation; sessions never self-initiate off a metric.
2. **Pre-registration:** watcher outputs are view-class — dated, pointed, quoted-basis, subordinate, regenerated-never-edited. **The wall-sentence: watchers report what the territory shows; they never record what anyone chose about it.** (A collision-note passes; a pursue/dismiss record is the write-half — not the watcher's.)
3. **Fatigue:** precision before recall; conditional lines over standing noise; recency-acknowledgment over clearing mechanics; the device reserved for graves. Every false interrupt spends trust the family can't refund.

### (e) The two worked paths (illustration, not selection)

**Cheapest — the Warm-up Sentinel (zero wiring; extends the shipped header):**
1. At warm-up, the digest header computes its lines: `frontier: N` (ships already), `stalest-view: <concept> (<days>d behind its newest finding)`, `aging-routes: <count> open >30d`.
2. Lines print ALWAYS as gauges; each gains a conditional form (e.g., prints in caps with a pointer when past its threshold) — the conditional form is the watcher.
3. Nothing else. No files, no state; everything derived per run.

**Purest — the Nightly Sweeper (one cron session; guard-gated):**
1. Cron starts a session nightly. **Step 1 — the guard:** anything landed since the last sweep-mark (git log --since / find -newer)? If quiet: exit (seconds, ~free).
2. If something landed: run the countable greps; then read ONLY the landed findings' summaries against the standing constraints they touch (grep old bounds for the new terms).
3. Each real find becomes `devdocs/views/_alerts/<date>.md`: one entry = pointer + one line + the quoted basis. No selections recorded.
4. The next session's warm-up reads alerts newer than the previous session (recency-acknowledgment); a SessionStart banner can surface the newest alert's first line if wired.

---

## Inherited Frame Audit

**Seed central assumption:** SV6's four-archetype region is right. **Challenges present:** three inversions ran — one DISSOLVED the new-artifact risk (dated notes + recency-acknowledgment; no maintained inbox), one LOCATED the Sentinel's U8-membership precisely (conditional lines), one added the guard step (cost honesty). The region held; its edges sharpened. **Audit: does not fire.**

## Phase 3 — Test, dispositions, assembly

**Dispositions:** ACTIONABLE (into the finding): a–e as refined. DEFERRED: any wiring (hooks/cron) — build-gated; the stack choice — the user's.
**Assembly check:** the pieces compose; one emergent kept: **the gauge→watcher gradient** (instrumentation becomes push exactly where output goes conditional) — a clean membership test usable beyond this seat. **Axis coverage:** artifact-identity (maintained↔dated-notes), membership (gauge↔watcher), cost (always↔guard-gated) — ✓. **Shared-input check:** grounded in live infra checks + the chain's walls.

## Telemetry

- Generators: 3/4 (Combination — archetypes as axis-points; Absence — the guard step; Extrapolation — the stack) | Framers: 3/3 (Lens — moment-riding vs residing; Constraint — zero-maintained-artifacts; Inversion — all three)
- Convergence: YES | Survivors: all five pieces (reshaped by their inversions)
- Per-piece log: a [mechanism w/ namings] · b [axes table] · c [4 archetypes + anti + stack] · d [walls verbatim] · e [2 recipes w/ guard]
- Failure modes observed: none
- **Overall: PROCEED**
