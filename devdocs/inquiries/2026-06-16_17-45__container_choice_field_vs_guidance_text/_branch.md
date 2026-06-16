# Branch: Container Choice — Dedicated Schema Field vs Structured Guidance Text

## Source Input

```text
R4: should it be a dedicated schema field, or just structured Guidance text? — default text until a machine reads it).

lets dive deep into it,
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-06-16_17-45__container_choice_field_vs_guidance_text/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** `I1`
- **Verdict:** HIGH-PROCEED
- **Flagged conditions (if any):** none

## Question

**(literal statement — preserved without contamination):** "Should the meaning-gaps content be a dedicated schema field on the route record, or just structured Guidance text — defaulting to text until a machine reads it? Dive deep into it."

*(Background for a fresh reader: the **meaning-gaps field** is a per-route, first-pass list of a target concept's under-understood facets, each tagged a low/mid/high **vitality** — settled in the `16-10` / `16-38` / `17-11` chain. The **routelister route-record schema** already has typed fields including a **Guidance** field. R4 — from the consolidation `17-11` — is the open question of WHERE this content lives: its own new schema field, or inside Guidance as structured text.)*

**What kind of ask this carries (MQ1, verdict-axis — preserved AS ambiguities):**
- **adjudicate-field-vs-text** — pick the container.
- **validate-or-challenge-the-stated-default** — is "text until a machine reads it" right, and when exactly does it flip?
- **specify-the-flip-trigger** — what "a machine reads it" concretely means (the condition that turns text → field).
- **characterize-the-tradeoffs** — what each container costs and buys (the dimensions the choice turns on).

**What action-endpoint is intended (MQ3, intent-axis WHAT — preserved AS ambiguities):**
- **decide-now-which-container** (commit for the present manual state) **vs**
- **define-the-decision-rule** (a principled rule that selects the container, keyed to the trigger) **vs**
- **understand-the-tradeoff-space** (map what's at stake so the choice is informed).

**The load-bearing question (MQA reconciled joint axis):** **what is the principled decision RULE that selects field-vs-text — keyed to a concrete "a machine reads it" trigger — rather than a one-time arbitrary pick?** (A strong answer maps the tradeoffs, states the rule keyed to the trigger, and sharpens what that trigger concretely is.)

## Goal

**Deliverable shape (Deconstruct tuple):** a **design decision / recommendation** — the container choice (dedicated schema field vs structured Guidance text) for the meaning-gaps content, with the tradeoffs and a **principled rule/trigger** for when (if ever) it flips. Candidate spec-input for R1 (writing the feature to the routelister spec). **Kinds:** prose analysis + the tradeoff dimensions (parseability, schema weight, maintenance, cross-route consistency, reversibility, lightness-fit) + a recommendation/rule + a concrete definition of the "machine reads it" trigger + grounding in the routelister schema + the manual/automated timeline. **Bounds:** scoped to the CONTAINER (how/where the content is stored on a route). NOT code.

**What motivations a good answer might serve (MultiDepth WHY-axis — preserved AS ambiguities):**
- **avoid-premature-schema-growth** — keep routelister lean; don't add a field before it's needed.
- **future-proof-for-the-automated-meta-loop** — a machine consumer will want structured, parseable data.
- **decide-principled-not-arbitrary** — a rule keyed to a real trigger, not a coin-flip.
- **consistency-maintainability** — same place on every route / don't fragment the schema.

**What context downstream needs (MQ2):**
- *verdict:* the `17-11` R4 + the field's nature (first-pass, low-confidence, gaps-not-identities, per-gap vitality, soft-DoR); the **routelister route-record schema §5.2** (what a typed field is) and the existing **Guidance** field (Mode + Pointers, each with a WHY); the **manual-now / automated-later** meta-loop timeline; routelister's **compactness / schema-parsimony** value.
- *kinds:* a structural/schema design decision; routelister spec design; reversibility/timing of a schema change.
- *stance:* a lightweight reversible call vs a canon-grade schema commitment. **Stays open.**

**What would explicitly fail (MQ4 — negative spec):**
- **Re-opening the field's content** — its shape and vitality are settled (`16-10` / `16-38` / `17-11`); this is ONLY the container.
- **Over-engineering** — the field is first-pass/lightweight; the container must respect that (no heavy schema).
- **Ignoring the stated default** — engaging must TEST/refine "text until a machine reads it," not silently drop it.
- **Code** — this is a design decision / spec-input.

## Considered Articulations

**Item I1 — the container decision (field vs text) + its governing rule:**
1. **Adjudicate-the-pick** — decide field vs text outright for the present (manual meta-loop) state, with the tradeoffs laid out.
2. **Define-the-decision-rule** — give the principled rule that selects field-vs-text, keyed to the "machine reads it" trigger, so the output is a *rule* (text-now / field-when-X), not a one-off pick.
3. **Sharpen-the-trigger** — make "a machine reads it" concrete (what exactly is the automated consumer; what observable signal flips text → field), since the whole default hinges on that condition being recognizable.
4. **Map-the-tradeoff-space** — characterize what each container costs and buys (parseability, schema weight, maintenance, cross-route consistency, reversibility, fit-with-the-field's-lightweight-nature).
5. **Challenge-the-default** — steelman the opposite of "text first": maybe a *lightweight* dedicated field from the start is cheaper/cleaner, OR maybe text *forever* (never a field). Test whether the stated default is right at all.

## Scope Check

**Question covers goal:** YES — the Deconstruct bounds (decide the container + the rule, scoped to storage-not-content) cover the Goal (the pick + tradeoffs + a principled trigger-keyed rule). The live openness is *which* endpoint dominates (a present pick vs a rule vs a tradeoff-map), preserved in Considered Articulations.

**Specific-vs-pattern:** the user asks the specific R4 choice (this feature's container), not a general "how should routelister store any field." Addressed at the specific-choice level, with the rule/trigger generalizing only as far as this field needs.

**Constraints made explicit (from MQ4):** container-only (the field's content is settled); no over-engineering (respect the lightweight nature); test-don't-inherit the stated default; not code.

*(Layer Commitment OMITTED — the question is Structural-flavored [field vs text = artifact shape] but does NOT meet the from-scratch-redefinition / rewrite trigger; the field's meaning is settled. Treat downstream as a Structural-layer container decision, not a Meaning re-opening.)*
