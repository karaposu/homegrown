# Branch: Routelister `todo.md` — A Third, Decoupled, Editable Output

## Source Input

The user's raw request, preserved verbatim (also in `articulate_simple.md`'s `## User Input`):

```text
u mentioned that we shuldnt edit routelister.md file as design. what if when we run routelister discipline , it should output 3 items instead of 2, it should also output todo.md which can be edited freely without touching the routlister.md ? and todo.md should be just the table part not full routelister.md copy ? does this makes sense?  this would help docouple things. but lets dive  deep if this even worht it or not, we should also consider how this would be useful for future endgoals mentioned in docs/canon/minimum_viable_loop.md
docs/canon/project_north_star.md and highly docs/canon/sustained_traversal_loop_of_loops.md and highly docs/canon/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md goals
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-06-22_10-37__routelister_todo_md_third_output/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** `I1` — the third-output `todo.md` proposal (3 files not 2; `todo.md` = just the table, freely editable, decoupled; assess worth-it + end-goal fit)
- **Verdict:** HIGH-PROCEED
- **Flagged conditions (if any):** none — but the articulation flags that the worth-it verdict **cannot be settled until the four canon docs are read** (the load-bearing MQA axis depends on them).

## Question

**(I1, literal restatement):** *"When routelister runs, have it emit a THIRD output `todo.md` (alongside `routelister.md` + `_route.md`) — `todo.md` is just the table part (the Route Index), freely editable without touching the write-once `routelister.md`, to decouple a mutable working-surface from the regenerated route-map. Does this make sense, is it worth it, and how would it serve the end-goals in the four named canon docs?"*

**What kinds of asks this carries (MQ1 verdict-axis — preserved as open):**
- a **verdict** on the 3-output / `todo.md` proposal (does it make sense?);
- a **worth-it** cost/benefit assessment ("dive deep if it's even worth it");
- a **design** of `todo.md` (just the Route Index table? editable by whom? seeded how?);
- an **end-goal-fit** assessment against the four canon docs (esp. the two flagged "highly");
- an **identity-check** — does routelister emitting a *freely-editable, consumer-owned* file fit its enumerate-don't-decide, write-once identity (it owns `_route.md`; a human-edited `todo.md` is a different ownership category)?;
- a **spec-realization** — edit the routelister output contract to emit three files.

**What action-endpoints are plausible (MQ3 intent-axis, WHAT — preserved as open):**
- **decouple** the editable todo from the write-once route-map (the stated intent);
- give the consumer a **freely-editable working surface**;
- enable **cross-run / between-run steering** (the canon-goal endpoint — a mutable surface that persists and steers across runs);
- cleanly **resolve the ✓-in-regenerated-map futility**.

## Goal

**Deliverable shape (Deconstruct):** a **verdict** + a **worth-it judgment** (dived-deep) + (if worth it) a **design** of the third output + an **end-goal-fit analysis** against the four canon docs — realizable as a routelister output-contract (§5) change. Bounds: must reconcile with routelog + `_route.md`; respect enumerate-don't-decide + write-once + self-containment; serve (or at least not obstruct) the four canon end-goals; table-only (per the in-statement exclusion); no bloat.

**Motivations a good answer might serve (MultiDepth WHY-axis — preserved as open, not chosen):**
- **decoupling-hygiene** — separate the write-once perception from the mutable working-state (clean architecture for its own sake);
- **workflow-ergonomics** — a freely-editable todo the human can check off without it being wiped by regeneration;
- **end-goal-enablement** — a stepping-stone toward sustained loop-of-loops + cross-run cognitive steering (the mutable, persistent between-run surface those goals may require);
- **resolve-the-✓-tension** — the clean architectural fix for the futile ✓ column.

**Context the answer needs that isn't in the raw input (MQ2 context-need — preserved as open):**
- **verdict:** the CURRENT 2-file output contract (`routelister.md` + `_route.md`, §5); the REGENERATION property (the route-map is rewritten each run → a hand-tick is wiped — the ✓-futility this proposal responds to); routelog's EXISTING done/parked tracking — **the central need-to-know is whether `todo.md` duplicates routelog**; **the FOUR canon docs' actual goals — especially the two flagged "highly" (`sustained_traversal_loop_of_loops.md`, `towards_cross_run_cognitive_steering_with_isolated_navigation_session.md`) — which MUST be read downstream to judge end-goal fit.**
- **kinds:** WHAT `todo.md` IS (consumer-owned editable scratch vs routelister-authored data; table-only or table + done-state + notes); WHO owns/writes it (routelister seeds once then never touches? human edits? routelog writes?); the RELATIONSHIP to routelog (forward-plan vs backward-log, or overlap?) and to `_route.md` (a third persistence layer?).
- **stance:** decoupling-as-the-value; the canon END-GOALS as the evaluative lens (stepping-stone vs local convenience); lightweight vs heavy; human-readability vs machine/agent (a navigation/steering session reading it across runs).

**Negative spec / what would fail (MQ4 boundary-axis — extrinsic + one in-statement):** a human-edited `todo.md` must be **consumer-owned** — routelister may seed it but must not own/decide its mutable state (else Selection-creep / Process-coupling); whether routelister should write a file it doesn't own is itself open (it owns `_route.md`; `todo.md` is a different category); `todo.md` must NOT silently **duplicate routelog**; must not **bloat** (a 3rd file is net-new surface); **in-statement exclusion:** `todo.md` is "just the table part, NOT a full routelister.md copy."

**The load-bearing joint axis (MQA reconcile):** the relationship between a proposed editable `todo.md` and (a) the existing **routelog** done-tracking and (b) the canon **end-goals of cross-run / between-run steering** — is `todo.md` a redundant *third* surface (overlapping routelog), or is it the missing *mutable between-run steering surface* the two "highly"-flagged canon docs point at? The worth-it verdict and the table-only-vs-richer question both ride on this — and it **cannot be settled without reading the canon docs.**

## Considered Articulations

**Item I1 — the third-output `todo.md` proposal:**
1. **Literal table-only seeded-once `todo.md`.** routelister emits a third file = the Route Index table only, seeded once at run-time then human-owned/freely-editable; never re-touched on regeneration (decoupling the mutable working-surface from the write-once map).
2. **`todo.md` as the between-run steering surface.** Frame it not as a mere "todo" but as the *mutable working-state layer* the canon's cross-run steering / loop-of-loops needs — a persistent, editable surface a navigation/steering session reads and updates across runs (the richer reading tied to the two "highly" goals).
3. **Reconcile-with-routelog.** Place `todo.md` against routelog: subsume it, *complement* it (todo = forward-looking editable plan; routelog = backward-looking engagement log), or find it redundant — adjudicate the boundary before adding a surface.
4. **Don't add a file — extend an existing surface.** Put the editable working-state in routelog's surface or a mutable section of `_route.md`, rather than a net-new `todo.md` (the leaner alternative).
5. **Not-worth-it / drop instead.** The decoupling is real but minor; the cleaner fix is to drop the ✓ column and lean on `routelog list` — a third file is standing overhead unless the canon end-goals specifically require a mutable between-run surface (which the surfacing must verify).

## Scope Check

Question covers goal: the Question (verdict + worth-it + design + end-goal-fit for a decoupled editable `todo.md`) and the Goal align. The articulation widens the raw ask in two load-bearing ways the user invited ("dive deep if worth it" + "consider the end-goals"): (a) the **`todo.md`-vs-routelog** boundary must be adjudicated (else it's a redundant third surface), and (b) the **canon end-goal fit** must be assessed by actually reading the four docs (especially the two "highly"). Both are in scope and central.

**Specific-vs-pattern check:** the user points at a specific mechanism (a 3rd file `todo.md`), but the ask is the **broader pattern** — whether routelister should own a mutable, decoupled, consumer-editable working-surface at all, and how that serves the project's cross-run end-goals. Address the pattern (the surface and its identity/ownership), grounding the verdict in the real routelister/routelog specs **and the four canon docs**, not just the literal file.

## Layer Commitment

**Primary layer: MEANING.** The correctness-determining adjudication is a meaning question — *what IS `todo.md` (a mutable consumer-owned working-state surface vs routelister-authored data), does a write-once / enumerate-don't-decide / self-contained discipline emitting a file it does not own fit its identity, and is this the canon's missing "between-run steering surface" or a redundant third surface overlapping routelog and `_route.md`?* If the meaning is settled wrong (e.g., `todo.md` silently duplicates routelog, or routelister "owns" a mutable file in violation of write-once), any output-contract realization is incoherent.

**Other layers considered, out of scope for THIS run:**
- **Structural** (the exact `todo.md` shape — columns, where it lives, the emit mechanism) — real, but **sequenced second**: designable only once Meaning fixes what `todo.md` is, who owns it, and its boundary with routelog/`_route.md`.
- **Process** (the cross-run steering / loop-of-loops mechanism that would *consume* `todo.md` across runs) — **the evaluative lens, READ not designed here.** The four canon docs describe these process end-goals; this inquiry reads them to judge `todo.md`'s fit, but does not design the steering process itself (that is a downstream/separate concern).

**Order:** Meaning first (this inquiry — what `todo.md` is, its identity-fit, its boundary with routelog, its end-goal fit) → Structural realization second (an output-contract edit, if the verdict supports it) → Process (the cross-run steering that consumes it) only if/when the canon goals are actively built. Meaning-first mirrors the prior routelister field inquiries.

## Synthesis Trigger

*(Omitted — this inquiry does not consolidate/roll up the four canon docs into a synthesized output; it ASSESSES a proposal against them as an evaluative lens. The canon docs are required reading (named in the Goal + Scope Check) and the sensemaking/critique will engage their commitments substantively, but the deliverable is a verdict on the `todo.md` proposal, not a canonical synthesis of the docs.)*
