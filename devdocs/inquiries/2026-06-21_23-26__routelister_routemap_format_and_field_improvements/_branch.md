# Branch: Routelister Route-Map Format & Field Improvements (Real-Data Audit)

## Source Input

```text
i want u to read routelister.md files from different project /Users/ns/Desktop/projects/crowboy/devdocs/inquiries/2026-06-20_01-32__project-progress-gaps-priorities till /Users/ns/Desktop/projects/crowboy/devdocs/inquiries/2026-06-21_21-40__deferred-role-authority-backend and understand what are shortcomings , in meaning and in formatting

my understanding , in summary  table parts grain = project part is not useful. they all are project after all , also in summary table part Direction column  is too short, it should be a bit longer and explanatory,

kind column doesnt give me any info becase epistemic or teleological doesnt tell me anything useful. like if a route is epistemic, so what? maybe it is useful to make it visible there but idk.

i think we shoudl have is_done column whcih has default empy , this would be easy for later on editing things with routelog we dont need to create new table, we can just edit same table's is done column as well as is done note column for extra info , but i am not sure if this is indeed goood or not.

other than tables i think we have an issue in movement fields in routes. they are so compact. a movement suppose to desc "from state" and "to state", and i think each movement shoudl have these 2 subfields and they should be explainin decently, short but with understandable language too.

one bad example is

Movement: Task.auto_release (stamped at funding from global SETTLEMENT_AUTO_RELEASE = manual at launch) + rule_jump caller-branch (auto→settle inline, manual→defer-mark-VERIFIED) + release_jump action + GET /admin/worklist/releases (VERIFIED jumps with no Settlement) + a release endpoint.

this just too compact for human. somehow we shoudl find a way to how to make this not so compcat but not bloat as well.

and one last from me is this

Guidance field also needs better subfields,

inspect all these things, tell me your verdict based on real data and also tell me what else improvements also makes sense
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-06-21_23-26__routelister_routemap_format_and_field_improvements/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** `I1`
- **Verdict:** HIGH-PROCEED
- **Flagged conditions (if any):** none

## Question

**(literal statement — preserved without contamination):** "Read the crowboy project's `routelister.md` files across the named inquiry range, find their shortcomings in meaning and formatting, and give a verdict — assessing the user's specific proposals (drop/keep `grain` column; lengthen `Direction`; reconsider `kind`; add `is_done` + `is_done_note` columns editable by routelog; give `Movement` from-state/to-state subfields; give `Guidance` better subfields; keep it readable but not bloated) plus any further improvements that make sense."

*(The named data range is the 12 crowboy inquiries from `2026-06-20_01-32__project-progress-gaps-priorities` to `2026-06-21_21-40__deferred-role-authority-backend`; each has a `routelister.md` route-map. The discipline under assessment is **routelister** in the native project — its Route Index summary table (§5.1) and per-route record schema (§5.2).)*

**What kind of ask this carries (MQ1, verdict-axis — preserved AS ambiguities):**
- **assess-shortcomings-from-real-data** — read the crowboy route-maps; name the meaning + formatting shortcomings.
- **adjudicate-the-six-named-proposals** — per proposal: good / bad / modified, with evidence.
- **design-the-improved-route-map-format** — the concrete new summary-table columns + `Movement` & `Guidance` subfield templates.
- **discover-further-improvements** — "what else makes sense."

**What action-endpoint is intended (MQ3, intent-axis WHAT — preserved AS ambiguities):**
- **produce-a-verdict-per-proposal** (judge each named change) **vs**
- **redesign-the-route-map-format** (deliver the new table + field templates) **vs**
- **make-route-maps-more-human-readable** (the underlying aim — less compact, more parseable, without inflating).

**The load-bearing question (MQA reconciled joint axis):** **from the real crowboy route-maps, produce a concrete improved route-map format — summary-table columns + `Movement` (from→to) and `Guidance` subfields — that raises human-readability WITHOUT bloat, while honoring routelister's identity (compact, enumerate-don't-decide, no process-coupling).**

## Goal

**Deliverable shape (Deconstruct tuple):** an **assessment + format design** — (a) a real-data verdict on the route-map's *meaning* and *formatting* shortcomings; (b) a **per-proposal adjudication** of the six named changes (good/bad/modified, with evidence + the routelog/identity checks); (c) a **concrete improved route-map format** (summary-table column set + a `Movement` from→to subfield template + a `Guidance` subfield template); (d) **further improvements** that make sense. Candidate spec-input for the routelister spec (§5.1 / §5.2). NOT code.

**What motivations a good answer might serve (MultiDepth WHY-axis — preserved AS ambiguities):**
- **human-readability** — the route-maps are too compact for a human to parse (the core pain, esp. the Movement example).
- **in-place-editability/tracking** — the `is_done` idea: track done-ness in the same table, no new artifact.
- **signal-usefulness** — drop columns that don't inform (`grain`); question `kind`.
- **not-bloat** — raise readability without inflating the map (the constant tension).
- **ground-in-evidence** — decide from real usage, not taste.

**What context downstream needs (MQ2):**
- *verdict:* the ACTUAL crowboy `routelister.md` files (must be read); the routelister spec (Route Index table §5.1, record schema §5.2, Guidance = Mode+Pointers-each-with-WHY, Movement, grain/kind/engagement-type); **routelog** (does it already own done-tracking? would `is_done` duplicate/conflict with its separate `_route_engagements.md`?); routelister's **compactness** identity + the **not-bloat** constraint; the **LAYER-2 no-process-coupling** boundary (`is_done` is engagement *state*).
- *kinds:* a discipline-spec format/schema redesign + real-data critique + per-proposal verdicts + the routelog interaction.
- *stance:* a light touch-up vs a schema redesign of the route-map. **Stays open.**

**What would explicitly fail (MQ4 — negative spec):**
- **Bloat** — the user explicitly wants "not so compact but not bloat as well"; every change must respect this tension.
- **Breaking routelister identity** — compactness, enumerate-don't-decide, **no-process-coupling**. The `is_done` idea must be checked against the no-process-state boundary and routelog's ownership of engagement state; `grain`/`kind` may be load-bearing in the *type-signature* even if useless in the *summary table* ("drop the column" ≠ "drop the field").
- **Abstract taste** — the verdict must be grounded in the real route-maps.
- **Scope creep** — scoped to the route-map format + `Movement`/`Guidance` fields + the `is_done` idea; not a re-architecture of the sweep→individuate→frame core. NOT code.

## Considered Articulations

**Item I1 — assess + improve the route-map format:**
1. **Verdict-per-proposal** — walk the six named changes one at a time, each adjudicated good/bad/modified with real-data evidence (incl. `is_done`→routelog and `grain`/`kind`→type-signature checks).
2. **Holistic-format-redesign** — deliver one coherent improved route-map format (the new summary table + the `Movement` from→to template + the `Guidance` subfield template) as a single design.
3. **Readability-vs-bloat-balance** — frame the whole as resolving the compact-vs-bloat tension: which surface carries richness (likely the per-route records get subfields) and which stays scannable (the summary table).
4. **Identity-guard** — test each change against routelister's identity: `is_done` vs the no-process-coupling / routelog-owns-engagement-state boundary; `grain`/`kind` vs their load-bearing role in the type-signature; the summary table vs compactness.
5. **Discover-further** — beyond the six: the Map Header's usefulness, the Excluded section, the `WHY` / `Priority`/`Confidence` columns, the division of labour between the summary table and the per-route records, the `routelog`↔route-map integration the `is_done` idea opens.

## Scope Check

**Question covers goal:** YES — the Deconstruct bounds (assess the real route-maps + adjudicate the 6 + design the improved format + discover further, scoped to the route-map format) cover the Goal. The live openness is the endpoint emphasis (per-proposal verdicts vs a holistic redesign vs the readability aim) and the stance (light touch-up vs redesign), preserved in Considered Articulations.

**Specific-vs-pattern:** the user names six specific proposals AND asks "what else makes sense" — so the inquiry addresses **both** the specific proposals AND the broader pattern (the route-map's overall readability/schema). The six named examples illustrate a wider readability/format problem; address the pattern, using the six as the anchored evidence.

**Constraints made explicit (from MQ4):** not-bloat; respect routelister identity (compactness, enumerate-don't-decide, no-process-coupling; routelog owns engagement state); real-data-grounded; format-scope (not a core re-architecture); not code.

## Layer Commitment

**Primary layer: Structural** — the question targets the routelister discipline's **route-map artifact shape**: the Route Index summary-table columns (drop `grain`, lengthen `Direction`, reconsider `kind`, add `is_done`/`is_done_note`), and the `Movement` and `Guidance` **field sub-schemas**. This is "what the route-map LOOKS LIKE," squarely Structural.

**Other layers considered, out of scope as primary (but touched):**
- **Meaning** — two facets carry meaning weight: whether `kind` (epistemic/teleological) *informs* at all, and whether `Movement` IS essentially a from→to *transition*. These are adjudicated here as presentation/format decisions, not as redefinitions of what grain/kind/Movement ARE. Touched, not primary.
- **Process** — mostly out (the sweep→individuate→frame core is unchanged). Lightly touched by richer `Movement` subfields (what framing emits) and by `is_done` (where engagement state lives — but that is a routelog/identity question, handled under the identity-guard, not a process redesign).

**Sequential note:** Structural is the right and sufficient primary layer; the Meaning touches (kind-usefulness, Movement-as-transition) are resolved inside the structural redesign, and the one identity question (`is_done` vs routelog/no-process-state) is a guard the Structural design must pass, not a separate layer-inquiry.
