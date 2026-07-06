# Branch: Route Essentiality Tags

## Source Input

The user's raw request, preserved verbatim (also in `articulate_simple.md`'s `## User Input`):

```text
there is also another thing regarding routlister.md routes,  there are many paths but some routes are periphreals and some are core and many times i see 10 routes mids and highs and idk if they are essential to what we are trying to build or not, or essential immediately, so i think we need tags on routes

maybe like , peripheral, essential immediate , essential ,


does this makes sense? maybe u can come up with better categorisation ?
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-06-22_00-20__route_essentiality_tags/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** `I1` — the route-essentiality-tag proposal (observe-overload → propose tags → ask verdict + ask for a better scheme)
- **Verdict:** HIGH-PROCEED
- **Flagged conditions (if any):** none

## Question

**(I1, literal restatement):** *"There are many routes; some peripheral, some core; I often see ~10 mid/high routes and can't tell which are essential to what we're building or essential immediately. So I think we need tags on routes — maybe peripheral, essential-immediate, essential. Does this make sense? Maybe you can come up with a better categorization."*

**What kinds of asks this carries (MQ1 verdict-axis — preserved as open):**
- a **verdict** on the proposed tags (does peripheral / essential-immediate / essential make sense as-is?);
- a **design** of a better categorization (explicitly invited — "maybe u can come up with better categorisation?");
- **both** (verdict first, then the improved scheme);
- an **identity-check** — does ANY essentiality tag belong in routelister at all, given its enumerate-don't-decide identity?;
- a **spec-realization** — the prior inquiries in this chain ended in a routelister-spec edit; the deliverable may ultimately be a spec change.

**What action-endpoints are plausible (MQ3 intent-axis, WHAT — preserved as open):**
- **filter the list** (know which of ~10 routes are worth engaging at all);
- **sequence the work** (know which are essential NOW / immediately);
- **scope clarity** (know which routes are core-to-the-build vs nice-to-have peripheral);
- **reduce decision cost** (collapse a 10-route scan into a small must-act set).

## Goal

**Deliverable shape (Deconstruct):** a **verdict** (does the proposed tagging make sense?) **+** a **categorization design** (the best scheme), realizable as a routelister-spec change. Kinds: a conceptual scheme (tag vocabulary + the axis/axes it rides) + a candidate edit to the route-record (§5.2) / Route Index (§5.1) schema. Bounds: must respect enumerate-don't-decide (attributive only); lightweight + domain-agnostic + meta-decided (the vitality-rubric precedent); must not bloat (the just-settled lean-index redesign).

**Motivations a good answer might serve (MultiDepth WHY-axis — preserved as open, not chosen):**
- **triage-overload-relief** — ~10 mid/high routes is too many to act on; cut the decision cost;
- **build-alignment-anxiety** — wants assurance the routes actually serve "what we're trying to build", not drift;
- **sequencing-need** — wants to know what must be done first / now;
- **downstream-consumer-need** — a meta-loop route-selector (not just the human eye) may need essentiality to choose the next route.

**Context the answer needs that isn't in the raw input (MQ2 context-need — preserved as open):**
- **verdict:** routelister already carries **Priority** (HIGH/MED/LOW = salience) and **Confidence** (= formed-ness); the load-bearing need-to-know is whether "essential" duplicates or re-slices Priority. Plus the real crowboy maps where "10 mid/high routes" actually occurs (is the overload a Priority-compression problem or a missing-axis problem?).
- **kinds:** WHICH notion of essential — to-the-goal / to-the-build's-viability / as-a-dependency-others-need; and **immediacy (now ↔ later) is a SEPARATE axis from essentiality (core ↔ peripheral)** — the user's middle tag "essential immediate" fuses two axes into one label.
- **stance:** lightweight-always-on descriptor (like meaning-gaps / one-glance vitality) vs heavier triage instrument; human-readability (the solo user scanning the map) vs machine-consumption (a downstream selector).

**Negative spec / what would fail (MQ4 boundary-axis — extrinsic, from routelister identity):** a tag that ranks "essential" must remain **attributive/descriptive** (a property OF a route, like Priority) and must NOT cross into routelister **selecting** which route to take — that would trip the LAYER-2 Selection-creep failure. Whether the user wants a pure descriptor or an active decision-aid is itself open (flagged, not committed). *(No in-statement exclusion — "maybe u can come up with better categorisation" is an invitation, not a NOT.)*

**The load-bearing joint axis (MQA reconcile):** how the proposed essentiality/immediacy tag relates to routelister's existing attributive fields — **is essentiality a third independent attributive axis (orthogonal to Priority=salience, Confidence=formed-ness), or a re-slicing of Priority** that the existing field should already carry? The immediacy/essentiality split rides on this; it is the central adjudication.

## Considered Articulations

**Item I1 — the route-essentiality-tag proposal:**
1. **Third attributive axis.** Add an **essentiality** tag (core / peripheral) — a third attributive axis orthogonal to Priority (salience) and Confidence (formed-ness) — saying whether the route is load-bearing for the goal, decided the same lightweight one-glance way Priority is.
2. **Two axes, not one label.** Split the proposal into **two independent axes** — essentiality (core ↔ peripheral) AND immediacy (now ↔ later) — because "essential immediate" fuses two distinct properties; surface both the way Priority and Confidence are two separate fields.
3. **Sharpen Priority instead of adding a field.** Reject a new tag; **re-define/sharpen Priority** so what the user means by "essential" IS what Priority HIGH should already encode (essentiality-to-goal, not vague urgency) — the overload is a Priority-meaning problem, not a missing-field problem.
4. **Goal-dependency descriptor.** Tag each route by its relation to the build's target in the **goal-dependency structure** — essential (the goal can't land without it) / supporting (enables but not required) / peripheral (optional) — a goal-relative descriptor rather than a felt-importance label.
5. **Selector-facing field.** Treat essentiality as a **decision-aid for the meta-loop's route-selector** — a (possibly machine-readable) field the downstream next-route chooser consumes, kept distinct from the human-facing Priority.

## Scope Check

Question covers goal: the Question (verdict + better categorization for an essentiality/immediacy tag) and the Goal (a verdict + a categorization design, spec-realizable, identity-clean, lightweight) align. The articulation widens the raw ask in two load-bearing ways the user invited ("does this make sense / better categorisation"): (a) the **essentiality-vs-Priority** relationship must be adjudicated before any tag is added (else it duplicates an existing field), and (b) the user's **"essential immediate" is two axes fused** — essentiality (core/peripheral) and immediacy (now/later) — which a better categorization should separate. Both are in scope and central.

**Specific-vs-pattern check:** the user points at a felt instance ("10 routes mids and highs") but the ask is the **broader pattern** — a general route-tagging scheme for routelister, decided meta-ly and domain-agnostically (consistent with how Priority/Confidence/vitality were designed). Address the pattern, not just the one 10-route map.

## Layer Commitment

**Primary layer: MEANING.** The correctness-determining adjudication is a meaning question — *does an "essentiality" property exist that is genuinely distinct from the existing Priority (salience) and Confidence (formed-ness) attributes, and what are its true axes (is "essential immediate" actually two properties — coreness and immediacy)?* If the meaning is settled wrong (e.g., "essential" silently = Priority HIGH), any structural realization just duplicates a field. The MQA joint axis (essentiality-vs-Priority) and the MQ2 kinds-axis (essentiality ≠ immediacy) are both Meaning adjudications.

**Other layers considered, out of scope for THIS run:**
- **Structural** (which column/field in §5.1/§5.2, how displayed, default value) — real, but **sequenced second**: it can only be designed once Meaning fixes what the tag IS and how many axes it has. If this inquiry's Meaning verdict is "yes, a distinct property," the follow-on structural inquiry/edit places it (mirroring how the vitality rubric's meaning was settled, then written into the schema).
- **Process** (how the meta-loop's selector consumes the tag, any gating) — out: the user asked for a descriptor/tag, not a control-flow change; and routelister's identity forbids the tag driving selection inside the discipline.

**Order:** Meaning first (this inquiry) → Structural realization second (a routelister-spec edit, if the verdict supports a tag) → Process (selector consumption) only if a downstream consumer ever needs it. This mirrors the meaning-gaps → vitality-rubric → spec-write sequence already walked in this chain.

## Synthesis Trigger

*(Omitted — this inquiry does not consolidate two or more prior inquiry outputs as inputs. It is a fresh design question that draws on the routelister spec and real maps as substrate, not a roll-up of findings.)*
