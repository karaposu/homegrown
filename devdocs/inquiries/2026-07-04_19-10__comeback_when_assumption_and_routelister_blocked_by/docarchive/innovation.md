# Innovation — Come-Back-When: A Routelister Subfield, or a Wrong Assumption?

## User Input

`_branch.md` + prior outputs. PROPORTIONATE default coverage (this is a grounded correction, not the max-effort battery). All 7 mechanisms fire (tested; kills recorded); core-3× at Q2+Q4; Piece-Level Inversion at Q2 and Q4. Plain language (standing preference). Seed = the 6-piece plan.

---

## Mechanism Coverage Ledger (7/7)

| # | Mechanism | Yield | Verdict |
|---|---|---|---|
| 1 | Combination | Direction-field + relevance-match + already-written directions = match by Direction; old-Blocked-By + 10-37-controller = the gate lives where routeman-era state always lived | SURVIVES → Q4/Q5 |
| 2 | Absence recognition | routelister carries NO condition (by design) + most directions HAVE no condition → build around absence; the real missing piece is a cross-traverse **index of Directions**, not a condition field | SURVIVES → Q2/Q4, E3 |
| 3 | Domain transfer | enumerator/controller = separation-of-concerns; match-by-Direction = tag/label retrieval (simple) vs condition-trigger = cron (heavy) | SURVIVES → Q2/Q5 |
| 4 | Extrapolation | add one controller-field → then Status → Unlocks → done-tracking → you've rebuilt **routeman** (the replaced predecessor) | SURVIVES → Q2, E2 (strong) |
| 5 | Lens shifting | "the direction has a come-back-when condition" → "the direction IS a topic, matched by topic" — the come-back-when framing was a **category error** | SURVIVES → E1 |
| 6 | Constraint manipulation | drop "conditions must be knowable at parking-time" → the design gets EASIER (relevance needs no foreknowledge) | SURVIVES → Q1/Q4 |
| 7 | Inversion | Q2 "add it anyway" → KILLED; Q4 "condition-firing primary" → KILLED (survives as the rare secondary) | see Inversions |

---

## Finding-Ready Pieces

### Q1 — Is come-back-when usually knowable? No — it's the exception
The 18-12 finding assumed each parked direction comes with a note saying when to revisit it. That's wrong for the majority, and grounding shows it twice over. Empirically: the old route schema that *did* have a "blocked by" field defaulted it to `none` — most routes carried no blocker even when the field existed. Structurally: the current route-lister carries no such condition at all. So the normal parked direction is simply *open* — a promising topic set aside, with no trigger. Dropping the assumption that conditions are known actually makes the design *easier*, because the alternative (matching by topic) needs no foreknowledge.

### Q2 — Should the route-lister get a `comeback-when` subfield? No, on two independent grounds [CENTER]
It would seem easier to attach the condition at the source. But it's the wrong move, and two separate grounds forbid it:

1. **The route-lister is defined not to carry this.** Its discipline explicitly excludes dependency structure ("never records concept A depends on concept B") and disposition decisions ("the decision to act / defer / drop is not its"). A come-back-when is exactly *defer-until-X over a dependency X* — two of the things the discipline is built to exclude. (It's also not a fourth attribute like Priority or Essentiality: those describe how loud / how load-bearing a route is without implying an action decision; a come-back-when *is* an action decision.)
2. **The project already decided this.** A prior inquiry asked almost the same question — "should the route-lister emit a third, editable file for tracking?" — and answered no: keep it a pure enumerator; tracking, gating, and done-state belong to a separate controller layer, never on the map (it even removed the done-checkmark column). Adding a come-back-when field is the same "enumerator picks up controller-state" move that inquiry rejected — harmful once several worker-traverses run at once.

And there's a slope worth naming: add one controller-field and you'll soon want Status, then Unlocks, then done-tracking — which is precisely the *predecessor* discipline (routeman/navigation) that the route-lister replaced for being too heavy. Adding the field is the first step back toward the thing already abandoned.

### Q3 — Does the route-lister already have `blocked by`? No — that's the old discipline
Your memory is real, but it points at the predecessor. The old routeman/navigation route schema *did* carry `Status` + `Blocked By` ("the gate, missing evidence, missing artifact, or condition; `none` when unblocked") + `Unlocks`. The current route-lister deliberately dropped all of it. So "blocked by" isn't a current subfield to reuse — it's a field the project consciously removed. But the instinct behind the memory is sound: it points at exactly where a genuine gate *should* live — the controller layer, which is where that routeman-era state always lived.

### Q4 — How do we match parked directions, if not by condition? By their Direction [CENTER]
The route-lister already writes the thing to match on: each route's **Direction** — a self-explanatory noun-phrase, meant to be understood without opening the record. So matching a new candidate direction against parked ones is **topic/relevance matching over those Direction phrases** — for the unconditional majority. This is what "come-back-when" should have been all along: not a condition to fire, but a *direction to match*. (This is not a return to the older "similarity" idea — that recomputed resemblance over the whole corpus. This matches against the already-written Directions of parked routes, which is the corrected-finding's own object.) For the rare genuinely-gated direction, add a small secondary check in the controller layer — "did the blocker clear?" — but that's the exception, not the mechanism.

### Q5 — Where do conditions and tracking live, and does this break the "do it in the loop" goal?
Three homes, cleanly separated:
- **The route-lister (pure):** the Directions. Nothing else.
- **A shared index:** a projection of those Directions so a new traverse can look them up across traverses. Built *from* route-lister output, not *added to* it.
- **The controller layer (the travel-log):** which directions were picked up (the "done/spent" state), plus any genuine gate. This is controller-owned.

Your efficiency goal — do the work in the loop so the navigation session stays simple — still holds, because *which session does the work* is a different question from *which file holds the state*. The loop can publish its Directions into the shared index and append pick-up notes to the travel-log while its context is warm; none of that goes onto the route-lister's own map. (This also relocates the 18-12 "spent marker": it belongs in the controller-owned travel-log, not as loop-held state.)

### Q6 — What changes, and what doesn't
- **Confirmed from 18-12:** harvest the parked directions the project already writes — the real gap is that they're written and never read.
- **Corrected in 18-12:** the premise (conditions are the exception, not the rule); the matching (by Direction, not by firing a condition); the spent-marker's home (controller travel-log, not loop state).
- **Corrected fact:** "blocked by" is the old routeman field, deliberately dropped.
- **What actually changes:** the 18-12 finding. **Not** the route-lister — it is already correctly pure; the right answer to "add a field?" is "no, and here's why."

## Piece-Level Inversions

- **Q2 inverted — "add the field anyway; structure-at-source beats purity."** Tested: fails on the two grounds (the discipline excludes dependency+disposition; the prior inquiry rejected enumerator-state) *and* the slippery-slope (it rebuilds the replaced routeman) *and* the concrete harm (shared mutable state clashes once several traverses run at once). **KILLED.**
- **Q4 inverted — "condition-firing should be the primary matching."** Tested: fails because conditions are absent for the majority (Q1). **KILLED as primary; survives as the rare secondary** (the controller-side gate-cleared check for the gated minority).

## Assembly Check — Emergents

- **E1 · The come-back-when was a category error.** It treated a *topic* (a direction) as a *trigger* (a condition). The fix isn't a better condition field — it's recognizing that the object is a Direction, matched by relevance. This unifies Q1 + Q4: the whole "note the condition, fire on it" machinery dissolves once you see parked directions are topics, not gated tasks. [HIGH]
- **E2 · Adding the field would rebuild the abandoned predecessor.** routeman/navigation literally had Status + Blocked By + Unlocks and was replaced by the leaner route-lister. A come-back-when subfield is the first plank of that old, heavier schema going back in. The correction protects a past architectural decision, on the record. [HIGH]
- **E3 · The real missing piece is an index, not a field.** The route-lister writes Directions per-traverse; nothing gathers them across traverses for look-up. The buildable v1 is a cross-traverse **index of Directions** (plus relevance-matching against it) — which is the corrected version of 18-12's "file" step, with the condition-extraction removed. [MED-HIGH]

## Kills / Bounds
- **KILL** — a comeback-when/blocked-by subfield on the route-lister (Q2 inversion, two grounds + slope + parallel-heads harm).
- **KILL** — condition-firing as the primary matching (Q4 inversion; survives as the rare controller-side secondary).
- **KILL** — the "come-back-when note" framing itself (E1, category error).
- **BOUND** — the gate-cleared secondary check (real but small; controller-side; for the minority).
- **BOUND** — the travel-log is partly hypothetical (a prior inquiry seeded it at Level-0, gated for its full schema); route to it, don't assume it's fully built.

**Coverage: 7/7 mechanisms fired; both inversions killed (Q4 survives as secondary); 3 emergents (E1 category-error, E2 rebuilds-predecessor, E3 index-not-field). Proportionate to a grounded correction. Proceed to Critique.**
