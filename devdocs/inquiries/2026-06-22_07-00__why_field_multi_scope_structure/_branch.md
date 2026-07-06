# Branch: WHY Field — Multi-Scope Structure

## Source Input

The user's raw request, preserved verbatim (also in `articulate_simple.md`'s `## User Input`):

```text
i feel like "why" quesetion could be structured as well, Why important + what benefit towards end goal
, current why is only giving narrow scope explanations, i would like it to be narrow + mid + big scope all listed there.

maybe simple

why narrow scope
why mid scope
why big  scope


sub fields makes sense? or maybe there is better organisation or maybe a different paradigm of axes that makes more sense? maybe with meta questions which are domain agnostic?
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-06-22_07-00__why_field_multi_scope_structure/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** `I1` — the multi-scope WHY-field proposal (observe WHY-is-too-narrow → propose narrow/mid/big sub-fields → ask verdict + better organization / different axis paradigm / domain-agnostic meta-questions)
- **Verdict:** HIGH-PROCEED
- **Flagged conditions (if any):** none

## Question

**(I1, literal restatement):** *"I feel the 'why' question could be structured too — why important + what benefit toward the end goal. The current why only gives narrow-scope explanations; I'd like narrow + mid + big scope all listed there. Maybe simply: why-narrow-scope / why-mid-scope / why-big-scope. Do sub-fields make sense, or is there a better organisation, or a different paradigm of axes that makes more sense — maybe with meta-questions that are domain-agnostic?"*

**What kinds of asks this carries (MQ1 verdict-axis — preserved as open):**
- a **verdict** on the proposed narrow/mid/big sub-fields (do they make sense?);
- a **better organization** (sub-fields vs something else);
- a **different axis paradigm** (is "scope" even the right axis to decompose WHY along?);
- **domain-agnostic meta-questions** that generate the WHY (explicitly invited);
- an **identity-check** — does a multi-scope WHY belong in routelister, or does it bloat the record?;
- a **spec-realization** — the deliverable may ultimately be a routelister-spec edit (as the prior inquiries were).

**What action-endpoints are plausible (MQ3 intent-axis, WHAT — preserved as open):**
- see a route's justification at **multiple zoom levels** (local reason + its contribution to the big goal);
- cure WHY's **myopia** (it currently only states the local reason);
- **connect every route to the end goal** explicitly (anti-drift);
- richer **decision-support** (a fuller why helps judge whether to take the route).

## Goal

**Deliverable shape (Deconstruct):** a **verdict** (do narrow/mid/big sub-fields make sense?) **+** a **design** (the best structure or axis-paradigm for the WHY field — possibly domain-agnostic meta-questions), realizable as a routelister-spec change. Kinds: a conceptual scheme (sub-field set OR meta-question set OR a re-axed paradigm) + a candidate edit to the §5.2 Route Reasoning field. Bounds: the routelister WHY field; attributive + lightweight + domain-agnostic + no-bloat; must reconcile with the just-added essentiality axis (no duplication); must not become a dependency graph.

**Motivations a good answer might serve (MultiDepth WHY-axis — preserved as open, not chosen):**
- **legibility** — wants a route's FULL justification visible (local reason AND its contribution to the goal), not just the myopic local one;
- **goal-alignment-assurance** — wants every route visibly tied to the end goal (anti-drift; the same motivation that drove essentiality);
- **decision-support** — a multi-scope why helps the reader judge whether to take the route;
- **downstream-consumer-need** — a meta-loop consumer (not just the human eye) may need the multi-scope rationale.

**Context the answer needs that isn't in the raw input (MQ2 context-need — preserved as open):**
- **verdict:** the CURRENT WHY field's definition (routelister §5.2 Route Reasoning = *territory-evidence + why-this-might-be-important*); the JUST-ADDED **essentiality** axis ("can the goal land without this route?") — its goal-relation may OVERLAP the user's "what benefit toward end goal"; the lean-record format the WHY lives in.
- **kinds:** WHAT "scope" means (narrow = the route itself / mid = its subsystem / big = the end goal?); is "scope" the right AXIS, or is the real axis a zoom/abstraction ladder, a consequence-chain (enables→enables→…→goal), a time-horizon, or a blast-radius?; "why important" vs "what benefit toward end goal" — are these TWO distinct things (importance vs goal-contribution) the user lumped?
- **stance:** lightweight/one-glance vs a heavier multi-line field; the explicitly-requested DOMAIN-AGNOSTIC META-QUESTIONS (the vitality/essentiality-rubric stance); human-readability vs machine-consumption.

**Negative spec / what would fail (MQ4 boundary-axis — extrinsic, from warm context):** the structure must stay **attributive + lightweight** (not a heavy multi-paragraph field) and must NOT bloat the record; big-scope-WHY must NOT **duplicate the just-added essentiality axis** (whether WHY should ABSORB the goal-relation or COMPLEMENT essentiality is itself open); a "consequence chain toward the goal" framing must NOT become a route↔route **dependency graph** (§1.3). *(No in-statement exclusion — "maybe there is better organisation" is an invitation, not a NOT.)*

**The load-bearing joint axis (MQA reconcile):** the relationship between the proposed **big-scope WHY** and the existing reasoning fields — does a "benefit toward the end goal" scope-band **duplicate the just-added essentiality axis** (which already encodes the goal-relation), or is WHY's job the *local/causal reasoning* while essentiality carries the *goal-coreness*? The "is scope the right axis?" question rides on this; it is the central adjudication.

## Considered Articulations

**Item I1 — the multi-scope WHY-field proposal:**
1. **Literal scope-band sub-fields.** WHY becomes three labeled lines — *why-narrow / why-mid / why-big* — each naming the route's justification at that scope band (the route → its subsystem → the end goal).
2. **Two-part WHY (importance vs goal-benefit).** Split WHY into the user's own two halves — *"why important (local)"* + *"what benefit toward the end goal (global)"* — a 2-level structure, mapping to the user's "Why important + what benefit towards end goal."
3. **Domain-agnostic meta-question set.** Replace fixed scope-bands with a small set of meta-questions that GENERATE the why at each level (e.g., "what does engaging this unblock?", "what does the end goal gain?", "what is lost if it's skipped?") — the explicitly-invited domain-agnostic meta-questions, same stance as the vitality/essentiality rubrics.
4. **Re-axed paradigm (ladder / consequence-chain instead of "scope").** Replace narrow/mid/big "scope" with a better axis — a *zoom/abstraction ladder* (route → neighbourhood → goal) or a *consequence chain* (what it enables → … → the goal) — if "scope" is the wrong frame.
5. **Reconcile-with-essentiality.** Recognize that "benefit toward the end goal" overlaps the just-added essentiality axis; structure WHY so it carries the *local/causal reasoning* and *complements* essentiality (which already carries the goal-coreness), rather than re-stating the goal-relation — avoiding duplication.

## Scope Check

Question covers goal: the Question (verdict + better structure/axis for a multi-scope WHY) and the Goal (a verdict + a structure design, spec-realizable, lightweight, domain-agnostic, non-duplicative of essentiality) align. The articulation widens the raw ask in two load-bearing ways the user invited ("better organisation / different paradigm of axes"): (a) **is "scope" the right axis** at all, or is a ladder / consequence-chain / meta-question set better; and (b) the **big-scope-WHY vs essentiality overlap** must be adjudicated (else WHY's big-scope band duplicates the axis just added). Both are in scope and central.

**Specific-vs-pattern check:** the user points at the routelister WHY field specifically, but the ask is the **broader pattern** — the right way to structure justification-at-multiple-scopes, decided meta-ly and domain-agnostically (consistent with how vitality, essentiality, and the route-record format were designed). Address the pattern, grounded in the real WHY field + real maps.

## Layer Commitment

**Primary layer: MEANING.** The correctness-determining adjudication is a meaning question — *what is the right AXIS along which to decompose a route's WHY (is "scope" the right frame, or a zoom-ladder / consequence-chain / meta-question set?), and does the "big-scope / benefit-toward-goal" end DUPLICATE the just-added essentiality axis or COMPLEMENT it?* If the meaning is settled wrong (e.g., "big-scope WHY" silently re-states essentiality, or "scope" is the wrong axis), any structural realization bloats the record or duplicates a field.

**Other layers considered, out of scope for THIS run:**
- **Structural** (the exact sub-field shape, labels, how it renders in the record) — real, but **sequenced second**: it can only be designed once Meaning fixes the axis and the essentiality boundary. If the verdict supports a structure, a follow-on structural inquiry/edit places it (mirroring the essentiality meaning→structural sequence).
- **Process** (how a downstream consumer reads the multi-scope WHY) — out: the user asked for a field structure, not a control-flow change.

**Order:** Meaning first (this inquiry — the axis + the essentiality boundary) → Structural realization second (a routelister-spec edit, if the verdict supports a structure) → Process only if a downstream consumer ever needs it. This mirrors the meaning-first sequence walked in the essentiality and vitality inquiries.

## Synthesis Trigger

*(Omitted — this inquiry does not consolidate two or more prior inquiry outputs as inputs. It is a fresh design question that draws on the routelister WHY field, the just-added essentiality axis, and real maps as substrate, not a roll-up of findings.)*
