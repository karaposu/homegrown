# Surfacing — Come-Back-When: A Routelister Subfield, or a Wrong Assumption?

## User Input

`_branch.md` (this inquiry). Territory: the come-back-when assumption in the 18-12 finding + the routelister route-schema + the `blocked by` fact. Artifact case — GROUNDED in the real specs (read this session), because the whole inquiry pivots on facts about the routelister schema.

**Grounding read this session (all verified against real files):**
- routelister route schema (`~/.claude/skills/routelister/references/routelister.md` §5.2).
- routeman/navigation predecessor schemas (`cognitive_harness/non-active/routeman/…`, `…/deprecated_navigation/…`).
- the `2026-06-22_10-37__routelister_todo_md_third_output` finding.

---

## Cluster A — The ACTUAL routelister route schema (grounded)

- **A1 · The fields a routelister route carries** [FACT, §5.2]: Route Identity (**Direction** — *a self-explanatory noun-phrase, understandable without opening the record* · Goal · engagement-type) · Route Meaning (Move / Lands / optional Touches) · WHY (line of sight to what the goal gains) · Route Attribution (**Priority · Confidence · Essentiality** — all *attributive*, never a winner-ranking) · Guidance (+ optional Meaning-gaps).
- **A2 · There is NO `blocked by`, NO status, NO gate, NO revisit-condition** [FACT]. None of those fields exist in the routelister route record.
- **A3 · routelister DELIBERATELY EXCLUDES exactly this kind of structure** [FACT, §1.3]: it "never records concept A depends on concept B" (no dependency graph); "the *decision* to act / defer / drop is not routelisting's" (no disposition); control-flow moves like "clear a process gate" are excluded. A come-back-when/blocked-by condition is a *dependency + a disposition + a gate* — three things routelister is defined NOT to carry.
- **A4 · The matchable thing routelister DOES give us = `Direction`** [KEY]. The Direction is a *self-explanatory noun-phrase, designed to be understandable/scannable without opening the record.* This is precisely what a new traverse would match its candidate direction against. Routelister already produces the matchable field — it is just direction/topic, not a condition.

## Cluster B — Where the user's `blocked by` memory comes from (the OLD disciplines)

- **B1 · `Blocked By` is REAL — in routeman/navigation, the PREDECESSORS** [FACT]. The old `routeman` route schema (now `non-active/`) carried: Direction · Goal · Movement Type · Priority · **Status** (open/blocked/deferred/active/done/stale/superseded) · **Blocked By** ("the gate, missing evidence, missing artifact, or condition; **`none` when unblocked**") · Movement · **Unlocks** · WHY. The deprecated `navigation` had the same + an `UNBLOCK` route-type + reachability/gate analysis.
- **B2 · routelister REPLACED them and dropped it** [FACT]. The active enumerator (routelister) deliberately shed `Status`, `Blocked By`, and `Unlocks` — the whole gate/dependency/disposition apparatus — as part of its tighter "enumerate concept-directions only" discipline (A3). So the user remembers a real field, but from the predecessor, not the current spec.
- **B3 · Even the OLD field defaulted to `none`** [FACT, decisive for the premise]. `Blocked By` was "`none` when unblocked" — most routes carried no blocker *even when the field existed*. This empirically confirms the user's Objection 2: a knowable revisit-condition is the exception; unconditional is the default.

## Cluster C — The project ALREADY decided this (the 10-37 finding)

- **C1 · The 10-37 question was nearly identical** [FACT]: "should routelister output a third file (todo.md) that can be edited freely?" (i.e., attach mutable tracking/controller state to routelister).
- **C2 · The decision: NO — routelister stays a PURE two-file enumerator** [FACT]. Rejected because "the enumerator acquiring controller-state [is] actively harmful once multiple worker-heads run in parallel." It even resolved to REMOVE the `✓` done-column from the map (done-state belongs to the controller layer, "never on the map").
- **C3 · Tracking/gating/done state has a HOME — the controller layer** [FACT]: a human-owned travel-log / routelog (`route-id · why-selected · outcome`), separate from routelister. Blocked/deferred/done/parked state lives there, keyed by routelister's route-ids.
- **C4 · Direct consequence for THIS inquiry** [KEY]: adding a `comeback-when`/`blocked-by` subfield to routelister is the SAME "enumerator acquires controller-state" move C2 rejected. The come-back-when condition is a gate/disposition → controller-layer, not the enumerator's map. Objection 1 is answered by an existing decision.

## Cluster D — The premise-correction (the user's Objection 2, confirmed)

- **D1 · Come-back-when is usually ABSENT, not usually knowable** [confirmed by B3 + A2/A3]. The default parked direction is unconditional (`Blocked By: none`); routelister doesn't even carry the condition. The 18-12 finding's assumption ("each parked direction has a come-back-when note") is wrong for the majority.
- **D2 · Consequence for 18-12's matching** [correction]. 18-12 matched by "fire the come-back-when condition." For the unconditional majority there IS no condition to fire → matching must be by **Direction-relevance** (A4), not condition-firing. 18-12's mechanism only works for the rare gated minority.

## Cluster E — The two kinds of parked direction (grounded split)

- **E1 · UNCONDITIONAL (the majority — `Blocked By: none`)** — a promising direction set aside with no stated trigger. Matched by its **Direction** (topic/relevance). Lives as a routelister route (Direction + Priority + Essentiality). No condition to store.
- **E2 · CONDITIONAL / GATED (the minority — the old `Blocked By: <condition>`)** — a direction genuinely blocked on a specific thing ("revive when meaningful_traversal.md ships"). The condition is real and knowable. But it is *controller-state* (a gate/dependency/disposition) → it belongs in the controller layer (the travel-log / the finding's Next-Actions "Gate:" line), NOT on the routelister route. Matched by "did the blocker clear?" — a controller check.
- **E3 · The ratio** — B3 (`none` is the default) says E1 dominates; E2 is the exception. 18-12 built its whole matching around E2 and mis-cast it as the norm.

## Cluster F — The corrected matching (rehabilitates 17-45's relevance, partly)

- **F1 · Primary = Direction-relevance** [for E1, the majority]. Match a new candidate direction against the `Direction` noun-phrases of parked routes. This is topic/relevance matching — which is what 17-45 had and 18-12 DEMOTED. The user's objection partly rehabilitates it: relevance is PRIMARY for the unconditional majority.
- **F2 · Secondary = gate-cleared check** [for E2, the minority]. Where a genuine blocker was recorded (controller-layer), check whether it cleared. Small, secondary.
- **F3 · Honest non-over-correction** [stance]. This does NOT restore 17-45 wholesale: 18-12's real win — the recalled object is the ALREADY-WRITTEN parked direction (the ~391), not a fresh similarity computation over the corpus — STANDS. What's corrected is HOW you match them (by Direction, not by condition) and WHERE conditions live (controller, not routelister).

## Cluster G — The work-split, re-checked against the enumerator/controller boundary

- **G1 · 18-12's "File step in the loop"** wanted the loop to publish + tag + track. C2/C3 draw a sharper line: the ENUMERATOR (routelister, in the loop) produces `Direction`s; the CONTROLLER layer (navigation / travel-log) does matching, reactivation, and tracking (done/spent/gate state).
- **G2 · What can stay loop-side** — publishing the traverse's own `Direction`s so they're cross-findable is arguably still enumeration output (the Directions, indexed), not controller-state. That's fine.
- **G3 · What must be controller-side** — matching a new direction, deciding reactivation, and the "spent/picked-up" marker (18-12's Q4) are tracking/disposition = controller-state (like the travel-log's done-state, C3). 18-12 put the spent-marker loop-side; C2/C3 say tracking belongs to the controller. → a work-split correction consistent with 10-37.

## Cluster H — The delta-vs-18-12 (this inquiry's accounting)

- **H1 · CONFIRMS** — the object (harvest already-written parked directions; the ~391) stands.
- **H2 · CORRECTS (premise)** — come-back-when is usually ABSENT (`none`-default); matching is by Direction-relevance, not condition-firing.
- **H3 · CORRECTS (fact)** — `blocked by` is NOT in routelister (it's the old routeman/navigation field, deliberately dropped). The user remembers the predecessor.
- **H4 · CORRECTS (schema)** — do NOT add come-back-when to routelister; it's controller-state, already ruled off the pure enumerator (10-37). Objection 1 is the rejected anti-pattern.
- **H5 · LOCATES** — the rare genuine gates + the spent/tracking state live in the controller layer (travel-log / Next-Actions dispositions), not the enumerator.
- **H6 · REFINES the work-split** — enumerator publishes Directions (loop-side ok); controller matches/reactivates/tracks (not loop-side).

## Cluster I — Boundaries + costs (honesty)

- **I1 · NOT re-opening all of 18-12** — the object + the file/look-up/revive shape (renamed) + the append-only substrate stand; this targets the come-back-when assumption + the File-step + the schema question.
- **I2 · NOT the spec-slot definition** — still the operation/schema.
- **I3 · Don't over-correct** — relevance returns as PRIMARY, but the recalled-object win of 18-12 is kept; condition-matching survives as the E2 secondary.
- **I4 · The travel-log is Level-0 / partly hypothetical** — 10-37 seeded it as a human-owned habit, gated for the full schema. So "the controller layer" is partly aspirational; the correction should route to it, not assume it's fully built.

---

## Relevance Summary (thin artifact)

**HIGH / load-bearing:** A2/A3 (routelister has no blocked-by and deliberately excludes gate/dependency/disposition structure), A4 (Direction = the matchable field), B1-B3 (blocked-by is the OLD routeman field, defaulted to `none`), C1-C4 (10-37 already decided: pure enumerator, controller-state off the map — Objection 1 is the rejected anti-pattern), D1-D2 (premise confirmed: come-back-when usually absent → match by Direction), E1-E2 (the two kinds + where each lives).

**MEDIUM:** F1-F3 (Direction-relevance primary, rehabilitates 17-45 partly, no over-correction), G1-G3 (work-split vs the enumerator/controller boundary), H1-H6 (the delta ledger).

**BOUNDING:** I1-I4 (scope; don't over-correct; travel-log partly hypothetical).

**Deep pattern surfaced:** the user is RIGHT that come-back-when is usually unknowable — and the grounding shows *why* on two independent counts: (1) empirically, even the old `Blocked By` field defaulted to `none`; (2) architecturally, a revisit-condition is controller/gate/disposition state, which the project has *already decided* (10-37) does NOT belong on the routelister enumerator. So the answer to "add a comeback-when subfield?" is **no** — and not merely because conditions are rare, but because it's the already-rejected "enumerator acquires controller-state" move. The corrected fork-recall: match parked directions by **Direction-relevance** (routelister already writes the Direction) for the unconditional majority; the rare genuine gates + all tracking live in the **controller layer** (travel-log / Next-Actions), not the map. This partly rehabilitates 17-45's relevance matching while keeping 18-12's real win (harvest the already-written directions).

**For Sensemaking:** adjudicate — (1) is the premise-correction right (come-back-when usually absent)? [grounded YES]; (2) does the 10-37 decision truly settle Objection 1 (no comeback-when on routelister)? [grounded YES]; (3) is Direction-relevance the right primary matching, and does it over-correct back toward 17-45? [no — the object win stands]; (4) the enumerator/controller work-split for matching + spent-state; (5) the honest delta-vs-18-12 + what to actually change (the finding, not routelister).
