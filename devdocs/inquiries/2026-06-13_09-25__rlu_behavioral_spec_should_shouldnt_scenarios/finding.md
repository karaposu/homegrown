---
status: active
model: claude-opus-4-8[1m]
effort: max
refines: devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/finding.md
---
# Finding: routelog's Behavioral Contract — A Write-Ahead Engagement Log Under a Single-Decider Limit (Should / Shouldn't / In-What-Scenarios)

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/finding.md` (the routelog design finding — ADOPT-retargeted), as amended by `devdocs/inquiries/2026-06-13_07-24__route_tracking_placement_per_inquiry_vs_project/finding.md` (the placement finding — write-target → per-inquiry `_route_engagements.md`).
**Revision trigger:** the user asked to "dive deep into how routelog should be and shouldn't be, what it must do in what scenarios" — a request to deepen the adopted design into a full behavioral contract.
**What's preserved:** everything the two priors settled — the two writing moments (`start`/`done`), the degraded `done`-without-`start`, `park`/`list`, the stale-in-flight sweep, the NOT-list scope fence, the graded pre-registration window guard, the per-inquiry `_route_engagements.md` write-target, the derived `routelog list` overview, the guard re-attachment to "the first `_route_engagements.md` anywhere." This finding adds depth; it overturns nothing.
**What's changed:** three sharpenings from this inquiry's Critique — (a) the close transition now carries a **reason-CODE from a closed set** (not free text); (b) the source-map back-reference is **name-keyed** (not ordinal); (c) the two-mode design gets a **single-writer-per-route precedence rule**.
**What's new:** the contract's *organizing structure* — three governing pillars, a lifecycle state-machine, and seven generative scenario-axes — plus external groundings (write-ahead log, event-sourcing, clinical-trial pre-registration, pilot's logbook) that make each pillar defensible.
**Migration:** none required; routelog is not yet built. This finding is the contract its v1 implements.

## Question

From `_branch.md`: deepen routelog — the route-engagement recorder — into a behavioral contract answering three faces: **how it should be** (positive obligations), **how it shouldn't be** (the NOT-list), and **what it must do in what scenarios** (situation→behavior). Goal: a build-ready, correct, coverage-complete, scope-fenced spec, reconciled with the adopted design and the settled `_route_engagements.md` write-target. (`routelog` = "routelist updater": the small skill that records which enumerated routes have been engaged and points at what each produced.)

## The concepts this finding uses (read this first)

- **A route** — one typed direction produced by `/routelister` (e.g., "DEVELOP the row schema"). A **route-map** (`routelister.md`) is the per-run list of routes; it is **archived to `docarchive/` at CONCLUDE and regenerated** if routelister re-runs. The **route index** (`_route.md`) is the living per-inquiry concept-map; its spec **forbids process/control-flow state** (statuses, verdicts) — only a within-concept "manifestation" pointer is legal.
- **An engagement** — taking up a route: running it, parking it (deciding-against), or otherwise closing it. Run-state = which routes were engaged and what came of each.
- **`_route_engagements.md`** — the per-inquiry, append-only file at the inquiry root (sibling to `_route.md`) where routelog records engagements. The source of truth for the local run-log (settled in the placement finding).
- **The derived overview** — `routelog list` with no argument globs all `_route_engagements.md` files and assembles the project-wide "what's been run" view on demand. Never a maintained second file.
- **object-B** — the Selector's project-level *forward-intent* working-queue (the Pipeline finding's selections file) that a future automated Dispatcher fires from. Distinct from routelog's backward done-log; **deferred** behind the Dispatcher.
- **The pre-registration window** — the native project's rule: before the project's first traversal record exists, a pre-registration file must exist first (its timestamp is the proof). routelog's window guard enforces this.

## Finding Summary

- **routelog, in one line: a write-ahead engagement log governed by a single-decider limit.** Every behavior derives from one of three pillars — **P1 single-decider** (routelog records and points; it never decides), **P2 source-of-truth integrity** (append-only; never mutate originals; truth lives locally + a derived project view), **P3 mechanize-or-it-won't-happen** (the closing step only happens if a tool does it — the measured "zero-for-109" lesson). The three faces of the question map onto these: *should-do* = the lifecycle + invariants; *shouldn't-be* = the P1/P2 scope fence; *scenarios* = the situations the lifecycle must survive.
- **Day-1 surface is four commands** — `routelog start`, `routelog done`, `routelog park`, `routelog list`. That is the whole interface a human touches. (The pillars and the external groundings below are the *why*, not extra surface — present them second, per this inquiry's Critique.)
- **Should-do (the lifecycle).** `start` writes an in-flight row *immediately* (before the work, so a crash leaves a recoverable record) and hands the session its work-contract; `done` completes the row (status, artifact pointer, one-line outcome) and stamps a ↗ pointer into `_route.md`; `park` records a deciding-against; `list` prints the table (per-inquiry) or the derived project overview (no-arg). A **stale-in-flight sweep** fires every invocation ("2 open runs — close them?"). All four close-actions are one transition carrying a **reason-code**.
- **Shouldn't-be (the scope fence, with every entry rooted).** From **P1**: never choose which route runs next; never launch a run; never read a finding to *judge or rank* it; never become the project forward-queue (object-B). From **P2**: never mutate the route-map; never write status words into `_route.md` (only the ↗ pointer is legal); never maintain a central done-file as a second source of truth. "Decide" is defined precisely: routelog may set mechanical defaults (a timestamp, the status implied by the verb invoked), but never anything that feeds route-selection.
- **In-what-scenarios (generated, not listed).** The situations routelog must handle are the cross-product of **seven axes**: (A1) was there a `start`? · (A2) who ran it — a formal `/aMVLwr` loop or an informal plain session? · (A3) where did it run — the same inquiry the route was listed in, or a different one? · (A4) is this the project's first engagement-record? · (A5) what's the close-reason? · (A6) one route, many, or parallel? · (A7) is the route inquiry-level or project-level? The named scenarios (forgot-to-start, crash mid-run, cross-inquiry, first-run, parked) are *coordinates* in this space — so coverage is a property of the axes, not of a list that might miss a case.
- **The forgiving design is first-class, not failure-assuming.** Because the human forgets and sessions die (P3), the degraded paths — `done` without a prior `start`, the sweep catching abandoned in-flight rows, retroactive rows — are first-class behaviors. But they do **not** demote the normal `start`→`done` path; both are first-class.
- **Each pillar has an external grounding**, so the contract is an instance of understood disciplines, not a homegrown quirk: P2's append-only-log = a **write-ahead log** (`start` = the WAL entry before the work; the sweep = WAL recovery) and **event-sourcing** ("current state of route N" = the last row mentioning N); P3 = a **pilot's logbook + pre-flight checklist**; the window guard = **clinical-trial pre-registration** (register before you collect data, or the result is suspect).
- **Two modes, one writer per route.** routelog is a **session-invoked skill** (it must read route-maps, disambiguate by asking, judge "first-in-project"). For formal `/aMVLwr` loops, the runner may auto-mark completion at CONCLUDE — but **only if no routelog row already exists for that route** (routelog's row is authoritative; the two never both write the same route).
- **What ships now vs later.** Now: the per-inquiry engagement log + the four commands + the scope fence + the scenario behaviors for axes A1–A6 (single/sequential). Deferred behind named gates: object-B (Dispatcher), project-level-route homing (A7; Navigator), parallel-writer concurrency (A6 extreme; Dispatcher), and free-text "unlinked" engagements (if they become common).

## Finding

*Context: `/routelister` lists routes well, but nothing records which ones actually got run — and the run happens in plain sessions where no tool is watching. The prior routelog finding adopted a recorder; the placement finding settled where it writes (`_route_engagements.md`, per-inquiry, with a derived project view). The user then asked to go deeper: not "where does it write" but "how should it behave — what must it do, what must it never do, and in which situations." This finding is that behavioral contract. It is organized so the day-1 reader sees four commands; the deeper reader sees why each behavior is forced.*

### 1. The four commands (what a human touches)

| Command | What it does | Writes |
|---|---|---|
| `routelog start <route-ref>` | Opens an engagement: writes an **in-flight** row immediately, hands the session its work-contract (the route's text + guidance), prints the close-out command. | a row to `_route_engagements.md` |
| `routelog done [<route-ref>]` | Closes an engagement: completes the row with a reason-code, an artifact pointer (or a coded no-artifact reason), and a one-line outcome; stamps a ↗ pointer into `_route.md`. Works **without** a prior `start` (creates the row retroactively). | completes/appends a row; stamps `_route.md` |
| `routelog park <route-ref>` | Records a deciding-against ("looked at it, not now, because…"). | a row with reason-code `parked` |
| `routelog list [<inquiry>]` | Prints the engagement table. No argument → globs all `_route_engagements.md` and assembles the **derived project overview**. With an inquiry → that folder's rows. | nothing (read-only) |

Everything below is the *why* behind these four. It is not additional surface.

### 2. The three pillars (the why)

Every routelog behavior derives from one of three pillars. This is what makes the contract non-arbitrary: a proposed behavior that roots in no pillar does not belong in routelog.

- **P1 — Single-decider.** routelog records and points; it never decides. *Grounding:* decision-authority in the larger machine must stay single (the human, later the Selector). If routelog also decided — chose the next route, ranked outcomes — the machine would have two minds and incoherent control. This is a *system invariant*, confirmed by inversion: splitting decision-authority is structurally incoherent, not merely untidy.
- **P2 — Source-of-truth integrity.** Append-only; never mutate originals; the truth lives locally (per-inquiry) and the project view is *derived*, never a maintained second copy. *Grounding:* this is a **write-ahead log** + **event-sourcing** design. `start` writes the entry *before* the work (crash-recoverable); the current state of a route is a fold over its append-only events (the last row that mentions it); a mutable shared file would re-introduce exactly the corruption and the central-lookup cost the placement finding eliminated.
- **P3 — Mechanize-or-it-won't-happen.** The closing step happens only if a tool does it. *Grounding:* measured evidence (the "zero-for-109" lesson — un-mechanized closing steps were performed zero times out of 109 opportunities) plus the pilot's-logbook discipline. This pillar forces the *immediate* start-row, the sweep, the degraded `done`, and automatic metadata capture.

### 3. Should-do — the lifecycle state-machine + invariants

routelog's behavior is a state-machine over the engagement lifecycle:

- **States:** `none` → `in-flight` → `closed`. (`closed` carries a reason-code; see §5.)
- **Transitions:** `start` (none→in-flight); `done` (in-flight→closed, or none→closed in the degraded case); `park` (none→closed:parked); **reopen** (closed→in-flight via a *new appended row*, never an edit).
- **Standing obligations (every invocation):** the **stale-in-flight sweep** (detect open rows, offer to close them); **automatic metadata capture** at `done` (the produced folder path, timestamps — this is *pointing*, not judging); the read rule **"current state = the last row mentioning the route."**

**Invariants (from P2):** append-only (never rewrite a row); never mutate the route-map or `_route.md` beyond the legal ↗ pointer; single-writer per file (routelog owns `_route_engagements.md`).

**Both paths first-class.** The normal `start`→`done` path is fully specified AND the degraded paths (`done`-without-`start`, the sweep recovering an abandoned in-flight row) are equal-status — routelog is *forgiving*, but it does not assume failure. This is the corrected form of the "optimize for the forgetful human" lens: design for the failure case without demoting the happy path.

### 4. Shouldn't-be — the scope fence, every entry rooted

The NOT-list is not a list of arbitrary taboos; each entry is a corollary of P1 or P2. That rooting is what lets a future maintainer test a proposed behavior ("which pillar forbids/permits this?").

**From P1 (single-decider) — behavior the recorder must never do:**
- Never **choose** which route runs next (that is the human's / the Selector's).
- Never **launch** a run (routelog records *around* a run; it does not fire one).
- Never **read a finding to judge or rank it.** routelog may capture a pointer + a session-supplied one-line outcome; it must never form an evaluative opinion that could feed selection. ("Point, don't judge" — the bright line.)
- Never become **object-B** (the project forward-intent queue).

**From P2 (integrity) — artifacts the recorder must never touch:**
- Never **mutate the route-map** (`routelister.md` — it is archived and regenerated; a mark written there would vanish).
- Never write **status/process words into `_route.md`** (its spec forbids process state; only the ↗ manifestation pointer is legal).
- Never maintain a **central done-file** as a second source of truth (the project overview is *derived*).

**"Decide," defined.** The fence is precise, not paralyzing: routelog *may* set mechanical defaults — a timestamp, the status implied by which verb was invoked — because those feed nothing. It must never do anything that feeds *route-selection*. The dividing line is "does this output influence which route gets run or how it's ranked?"

### 5. In-what-scenarios — the seven generative axes

The situations routelog must handle are generated by seven axes; the named scenarios are coordinates. This is the coverage guarantee: completeness is a property of the axes, not of an enumerable list.

| Axis | Question | Behavior it selects |
|---|---|---|
| **A1** | Was there a `start`? | yes → complete the in-flight row; no → degraded `done` creates the row retroactively |
| **A2** | Who ran it — formal `/aMVLwr` loop or informal plain session? | formal → runner may auto-mark (see §6); informal → the human runs routelog by hand (the original motivating case) |
| **A3** | Where did it run — same inquiry as the route, or different? | same → row in this folder; cross-inquiry → row lives **where the work ran**, carrying a name-keyed source-map back-reference to the originating route |
| **A4** | Is this the project's first engagement-record? | yes → the window guard fires (glob finds no `_route_engagements.md`; if a pre-registration program is declared, state the irreversible consequence and ask — graded: stop where declared, warn elsewhere) |
| **A5** | What's the close-reason? | one close transition carrying a **reason-code** from a closed set: `done` · `parked` · `superseded` · `no-artifact-by-nature` · `abandoned` |
| **A6** | One route, many, or parallel? | single/sequential → ships now (append-only handles many rows); parallel writers → deferred (Dispatcher gate) |
| **A7** | Inquiry-level or project-level (Navigator) route? | inquiry-level → ships now; project-level homing → deferred (Navigator gate) |

**The reason-code is a closed set, not free text** (this inquiry's Critique): a free-text "or some reason" escape would let every close say "did it" and the "what came of it" value would evaporate. The closed code keeps closes auditable while preserving the done/parked/superseded distinction inside one transition.

**The source-map back-reference is name-keyed, not ordinal** (this inquiry's Critique): route-maps are archived and regenerated, so an ordinal ("route #7") breaks on the next regeneration; the route's name + inquiry context survives. Residual name-collisions fall back to ask-on-ambiguity (already a P1 behavior).

### 6. Interfaces + the two-mode rule

- **Writes:** `_route_engagements.md` (append-only, inquiry root) and the ↗ pointer into `_route.md`. **Reads:** the route-map (read-only, to resolve a route-ref). **Project-wide:** the glob (for the guard and for `routelog list`).
- **Determination mechanisms** (how the runtime questions get answered): *first-in-project?* = glob the project for any `_route_engagements.md`; *which route?* = read the route-map and match an ordinal or name-fragment, **asking on ambiguity, never guessing** (a mis-bound mark corrupts the log); *cross-inquiry?* = compare where the work ran against where the route was listed.
- **Two modes, single-writer-per-route.** routelog is a session-invoked skill (it needs light reasoning + the ability to ask). For formal `/aMVLwr` loops, the runner may append the completion mark itself at CONCLUDE — **but only if no routelog row already exists for that route.** routelog's row is authoritative; the runner and routelog never both write the same route. This is the precedence rule that makes the two modes safe (this inquiry's Critique caught the two-writer race).

### 7. What ships now, what's deferred

**Ships now (routelog v1):** the per-inquiry engagement log; the four commands; the scope fence; the lifecycle + invariants; the scenario behaviors for axes A1–A6 (single/sequential); the window-guard glob; the name-keyed cross-inquiry rule.

**Deferred, each behind a named gate:**
- **object-B (the Selector working-queue)** — gate: the Dispatcher becomes real. routelog must not pre-empt it.
- **Project-level-route engagement homing (A7)** — gate: the project-level Navigator routelister becomes real.
- **Parallel-writer concurrency (A6 extreme)** — gate: the Dispatcher fires routes in parallel.
- **Free-text / `unlinked` engagements** — gate: engagements against never-listed routes become common.

## Inherited Commitments Re-test

This inquiry consumed five priors (Synthesis Trigger). Each commitment was re-tested, not absorbed.

- **Commitment:** routelog's mechanism — two writing moments (`start`/`done`), degraded `done`-without-`start`, `park`/`list`, the stale-in-flight sweep, the NOT-list scope fence, the graded window guard, ask-never-guess.
  - **Source:** `devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/finding.md`.
  - **Re-test status:** RE-TESTED — **confirmed, and given external grounding + three sharpenings.** **Evidence:** the two-moment design is a write-ahead log (Domain Transfer, confirmed by Inversion: `start`-before-work is crash-recovery); the sweep is WAL recovery; the NOT-list was shown to be *derivable* from P1/P2, not arbitrary (Sensemaking Ambiguity-1 rebutted anchor-dominance by finding two roots). Sharpenings from this inquiry's Critique: the close reason is a **code** not free text; the source-map ref is **name-keyed**; the two-mode design gets a **single-writer-per-route** precedence. The mechanism holds; it is now better-justified and tighter.
- **Commitment:** the write-target is per-inquiry `_route_engagements.md`; the project overview is a *derived* `routelog list` view; the guard re-attaches to "the first `_route_engagements.md` anywhere"; rows live where-the-work-ran.
  - **Source:** `devdocs/inquiries/2026-06-13_07-24__route_tracking_placement_per_inquiry_vs_project/finding.md`.
  - **Re-test status:** RE-TESTED — **confirmed and load-bearing.** **Evidence:** event-sourcing grounds the append-only + derived-view design (current-state = fold over events); Inversion of "per-inquiry" re-derived the central-file's 2000-lookup + reference-fragility costs the placement finding already killed, confirming the choice at system-level. The where-it-ran rule gained the name-keyed back-reference. No change to the placement decision.
- **Commitment:** `_route.md` excludes process/control-flow state; route-maps are archived and regenerated; the ↗ manifestation pointer is the legal way to reference a later-engagement artifact.
  - **Source:** `cognitive_harness/routelister/references/routelister.md`.
  - **Re-test status:** RE-TESTED — **confirmed and constraint-binding.** **Evidence:** the archiving fact forces the run-log into `_route_engagements.md` (not the route-map); the process-state exclusion forces the ↗ pointer to be the *only* `_route.md` touch (NOT-list entry, rooted in P2); the two run modes map onto axis A7 (inquiry-level vs project-level). The spec's constraints actively shape the contract.
- **Commitment:** the selections file = the Selector's project-level forward-intent working-queue the Dispatcher fires from (object-B).
  - **Source:** `devdocs/inquiries/2026-06-11_12-47__navigational_session_queue_dispatcher_possibilities/finding.md`.
  - **Re-test status:** RE-TESTED — **confirmed, scope held.** **Evidence:** object-B is the thing routelog must NOT become (NOT-list, rooted in P1); it stays deferred behind the Dispatcher gate. The Pipeline design is untouched; this contract only fences routelog away from it.
- **Commitment:** the pre-registration window — before the project's first traversal record exists, a pre-registration file must exist first (irreversible).
  - **Source:** `devdocs/inquiries/2026-06-11_16-45__sustrall_next_main_steps_and_alternatives/finding.md`.
  - **Re-test status:** RE-TESTED — **confirmed, externally grounded.** **Evidence:** the window guard *is* clinical-trial pre-registration (register the protocol before collecting data, or the result is suspect) — Domain Transfer made the rule defensible rather than arbitrary. The guard's determination mechanism (glob for the first `_route_engagements.md`) is specified in §6.

Pattern-note: five commitments, all confirmed — but none by default. Each was challenged (the Inherited Frame Audit forced Inversion on the load-bearing ones; the Critique frame-premise test prosecuted three) and each survived with either an external grounding or a sharpening. This is confirmation-after-challenge, not unchallenged inheritance.

## Next Actions

### MUST

*(none — this finding is a specification; it proposes no change that must land for its own value to be realized. The build is a COULD on the user's go.)*

### COULD

- **What:** Build routelog v1 — the four-command skill (`start`/`done`/`park`/`list`) implementing this contract: the append-only `_route_engagements.md` writer, the ↗-pointer stamp, route-resolve-with-ask, the glob window-guard, the sweep.
  **Who:** assistant, on your go. **Gate:** when you say build routelog. **Why:** turns the contract into the working tool; this finding is its spec.
- **What:** Pin the `_route_engagements.md` row schema + the closed reason-code set (a short structural note or the skill's own spec section).
  **Who:** assistant. **Gate:** with routelog v1. **Why:** the structural follow-up the Layer Commitment flagged; v1 needs the exact columns. **Depends-on:** the routelog-v1 COULD (same build).
- **What:** Dogfood the contract by hand on the next real route-engagement (before code), checking the lifecycle + reason-code + row schema against a live case.
  **Who:** you (or assistant when next engaging a route). **Gate:** the next informal route-engagement. **Why:** cheapest validation of the contract against reality.
- **What:** The crowboy migration — split existing hand-annotations (pointers stay in `_route.md`; status/progress lines become the first `_route_engagements.md` rows).
  **Who:** assistant, on your go. **Gate:** with/after routelog v1. **Why:** cures the live spec contradiction; turns the demand-proof into the first real data. **Depends-on:** the routelog-v1 COULD.

### DEFERRED

- **What:** object-B (the Selector working-queue). **Gate:** the Dispatcher becomes real. **Why (if revived):** the project forward-intent queue routelog is fenced away from.
- **What:** project-level-route engagement homing (axis A7); parallel-writer concurrency (axis A6 extreme). **Gate:** the Navigator / the Dispatcher becomes real. **Why (if revived):** the two scenario coordinates left open by design.
- **What:** free-text / `unlinked` engagements. **Gate:** engagements against never-listed routes become common. **Why (if revived):** covers purely-informal work on routes no map contains.

## Reasoning

**Why "a write-ahead engagement log under a single-decider limit" and not "a list of dos and don'ts."** The user asked for should/shouldn't/scenarios — three lists. Sensemaking found the deeper structure: the three faces are not three lists but three *spines* of one state-machine, and the NOT-list is *derivable* (from P1/P2) rather than enumerable. Deriving beats listing because a derived contract can answer "is this new behavior allowed?" by checking the pillars, where a list can only say "it's not on the list."

**Why the pillars get external groundings.** A freshly-invented tool's spec is most vulnerable to "is this just your preference?" Innovation's Domain Transfer found that each pillar is an instance of a well-understood discipline — WAL/event-sourcing (P2), pilot-logbook (P3), clinical-trial pre-registration (the guard), single-decision-authority (P1, confirmed by inversion). That reframing is the strongest available validation: the design is not a quirk, it is a named pattern.

**Significant challenges that shaped the contract (from Critique).** *The free-text "or reason" escape* — prosecuted as a loophole that would hollow out the log; refined to a closed reason-code set. *The two-mode design* — prosecuted for a two-writer race; refined to single-writer-per-route precedence. *The "optimize for the forgetful human" lens* — prosecuted for over-rotating the spec toward failure-handling; refined to "both paths first-class." *The ordinal source-map ref* — would break on route-map regeneration; refined to name-keyed. Each refinement folded into the contract above.

**Significant kills.** *A central maintained done-file* — killed (re-litigates the placement finding's 2000-lookup; the overview is derived). *routelog reading findings to summarize outcomes* — killed as a P1 violation (reading-to-judge makes it a second decider; it may point, not judge). *Collapsing done/parked/superseded into one undifferentiated close* — rejected; the unification is at the transition level only, the distinction lives in the reason-code. *Making routelog pure code* — rejected (it must disambiguate-by-asking and read prose maps), except the formal-loop auto-mark, which legitimately is a runner code-path.

**Self-reference handling.** routelog is our own tooling, and the contract uses our own record/decide vocabulary. The grounding is external: the crowboy field evidence (hand-written run-state proves the demand empirically) and the zero-for-109 measurement anchor P3 in observation, not in the framework's self-agreement; the WAL / pre-registration / logbook patterns are external references. Not circular.

## Open Questions

### Monitoring

- **Does the four-command surface stay genuinely small in use?** Observable: a real engagement closes with `done` in one step, no ceremony. If users need more than the four commands routinely, the surface grew.
- **Does the reason-code set stay closed?** Observable: if `abandoned`/`no-artifact-by-nature` start absorbing many closes, that signals either a missing code or a workflow problem.

### Blocked

- The single-writer-per-route precedence (§6) can only be fully validated once both routelog v1 and the `/aMVLwr` auto-mark path exist.
- object-B's interaction with routelog — blocked until the Dispatcher is real.

### Research Frontiers

- **routelog logs as Selector input.** If the engagement logs accumulate, a future Selector could read "which routes actually paid off" to inform ranking. No path yet (needs the Selector); preserved as an observation.

### Refinement Triggers

- **If cross-inquiry engagements turn out common**, the name-keyed back-reference may need a richer bidirectional convention — re-open §5's A3 rule.
- **If the derived `routelog list` view feels slow at scale**, the cacheable-assembly knob (deferred in the placement finding) earns its place.
- **If unlinked (never-listed) engagements become common**, promote the free-text engagement from DEFERRED.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
lets dive deep into how routelog should be and shouldnt be, what it must do in what scenarios
```

</details>
