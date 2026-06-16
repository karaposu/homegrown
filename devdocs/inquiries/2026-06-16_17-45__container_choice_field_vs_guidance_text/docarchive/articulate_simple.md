## User Input

> R4: should it be a dedicated schema field, or just structured Guidance text? — default text until a machine reads it).
>
> lets dive deep into it,

---
SAVE OUTPUT TO: /Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-16_17-45__container_choice_field_vs_guidance_text/articulate_simple.md

---

# Structural Articulation (Simple) — Output Bundle

**Context stance:** WARM. Session holds the consolidation finding (`17-11`) and its route R4 (the container decision), plus the two priors. The **meaning-gaps field** = a per-route, first-pass, low-confidence list of the target concept's descriptive gaps (gaps-not-identities), each with a low/mid/high vitality decided by a triage rubric; it is a *soft* readiness signal, never a gate. The **routelister route-record schema** (`cognitive_harness/routelister/references/routelister.md` §5.2) already has typed fields (Direction, Goal, grain, kind, engagement-type, Movement, WHY, Priority, Confidence, **Guidance** [Mode + Pointers-each-with-WHY], Depth-link). The **meta-loop** that consumes routes is currently a *human* (manual); an *automated* meta-loop is the stated future. routelister values **compactness / schema-parsimony**. The user's R4 phrasing already carries a candidate default ("text until a machine reads it"). Used in Rephrase + MQ2.

## Itemize

- **count:** 1
- **items:**
  - `I1` — "decide (and dive deep into) the container for the meaning-gaps content: a dedicated route-record schema field vs structured Guidance text — given the stated default 'text until a machine reads it'."

**Keep-together rationale:** "field vs text" and "the default/when-it-flips" are two facets of ONE container-decision procedure (the choice + the rule that governs it). "lets dive deep into it" is depth-of-treatment, not a second deliverable. Keep-together holds. count = 1.

---

## Item I1

**Item text:** the container decision for the meaning-gaps content — dedicated schema field vs structured Guidance text — and the rule/trigger governing it.

### Stage 2 — Meta-questions + MQA

**MQ1 (verdict-axis)** — *"What is the user asking for?"*
identified-ambiguities-list:
`[adjudicate-field-vs-text (pick the container) / validate-or-challenge-the-stated-default ("text until a machine reads it" — is that default right, and when exactly does it flip?) / specify-the-flip-trigger (what "a machine reads it" concretely means — the condition that turns text→field) / characterize-the-tradeoffs (what each container costs and buys — the dimensions the choice turns on)]`

**MQ2 (context-need axis)** — *"What context does the response need that isn't in the statement?"*
identified-ambiguities-list:
- `verdict:` the consolidation `17-11` R4 + the field's nature (first-pass, low-confidence, gaps-not-identities, per-gap vitality, soft-DoR); the **routelister route-record schema §5.2** (what a typed "field" is there) and what the existing **Guidance** field already is (Mode + Pointers, each with its own WHY); the **manual-now / automated-later** meta-loop timeline; routelister's **compactness / schema-parsimony** value.
- `kinds:` a structural/schema design decision; routelister spec design; reversibility/timing of a schema change.
- `stance:` a lightweight reversible call vs a canon-grade schema commitment. **Stays open.**

**MQ3 (intent-axis, WHAT)** — *"What is the user trying to accomplish?"* (action-endpoint)
identified-ambiguities-list:
`[decide-now-which-container (commit for the present manual state) vs define-the-decision-rule (a principled rule that selects the container, keyed to the trigger, so it's not arbitrary) vs understand-the-tradeoff-space (map what's at stake so the choice is informed)]`

**MQ4 (boundary-axis)** — *"What is the user explicitly excluding?"*
identified-ambiguities-list:
`[not-re-opening-the-field's-content (the field's shape + vitality are settled by 16-10 / 16-38 / 17-11 — this is ONLY the container) / not-over-engineering (the field is first-pass/lightweight; the container must respect that — no heavy schema) / respect-the-stated-default (engaging should test/refine "text until a machine reads it," not ignore it) / NOT code (a design decision / spec-input)]`

**MQA:** **reconcile.**
Joint axis between MQ1's *specify-the-flip-trigger* and MQ3's *define-the-decision-rule*: **"what is the principled decision RULE that selects field-vs-text — keyed to a concrete 'a machine reads it' trigger — rather than a one-time arbitrary pick?"** A strong answer (a) maps the tradeoffs, (b) states the rule keyed to the trigger, (c) sharpens what the trigger concretely is. The MQ2 `verdict`/`stance` sub-axes stay separate substrate.

### Stage 3 — Deconstruct + MultiDepth

**Deconstruct tuple:**
- `deliverable:` a **design decision / recommendation** — the container choice (dedicated schema field vs structured Guidance text) for the meaning-gaps content, with the tradeoffs and a **principled rule/trigger** for when (if ever) it flips. Candidate spec-input for R1 (writing the feature to the routelister spec). NOT code.
- `kinds:` prose analysis + the tradeoff **dimensions** (parseability, schema weight, maintenance, consistency, reversibility, lightness-fit) + a **recommendation/rule** + a **concrete definition of the "machine reads it" trigger** + grounding in the routelister schema + the manual/automated timeline.
- `bounds:` scoped to the CONTAINER (how/where the meaning-gaps content is stored on a route). OUT: re-opening the field's shape/vitality; over-engineering a heavy schema; code.

*Late-split check:* "field vs text" and "the governing rule/trigger" are facets of one container-decision procedure → one tuple. No late-split. count stays 1.

**MultiDepth literal-statement:**
"Should the meaning-gaps content be a dedicated schema field on the route record, or just structured Guidance text — defaulting to text until a machine reads it? Dive deep into it."

**MultiDepth purpose-motivation-ambiguities (WHY-axis):**
identified-ambiguities-list:
`[avoid-premature-schema-growth (keep routelister lean; don't add a field before it's needed) vs future-proof-for-the-automated-meta-loop (a machine consumer will want structured, parseable data) vs decide-principled-not-arbitrary (a rule keyed to a real trigger, not a coin-flip) vs consistency-maintainability (same place on every route / don't fragment the schema)]`

### Stage 4 — Rephrase (considered articulations)

Bounded by: deliverable (a container decision + governing rule) · the ambiguities (pick / rule / trigger / tradeoffs × the WHY) · MQ4 NOT-list (container-only; no over-engineering; respect the stated default; not code) · WARM substrate.

1. **Adjudicate-the-pick** — decide field vs text outright for the present (manual meta-loop) state, with the tradeoffs laid out.
2. **Define-the-decision-rule** — give the principled rule that selects field-vs-text, keyed to the "machine reads it" trigger, so the output is a *rule* (text-now / field-when-X), not a one-off pick.
3. **Sharpen-the-trigger** — make "a machine reads it" concrete (what exactly is the automated consumer; what observable signal flips text→field), since the whole default hinges on that condition being recognizable.
4. **Map-the-tradeoff-space** — characterize what each container costs and buys (parseability, schema weight, maintenance, cross-route consistency, reversibility, fit-with-the-field's-lightweight-nature) so the choice is informed rather than asserted.
5. **Challenge-the-default** — steelman the opposite of "text first": maybe a *lightweight* dedicated field from the start is actually cheaper/cleaner (less re-work later), OR maybe it should be text *forever* (never a field). Test whether "text until a machine reads it" is the right default at all.

---

## Statement-level fields

- **Itemize count:** 1 · **Per-item identifiers:** `I1` · **Self-assessment verdict:** **HIGH-PROCEED**

### Self-check (LAYER 1, single LIGHT pass)

| Mode | Fire? | Note |
|---|---|---|
| 1 — Premature Itemize split | no | one container-decision procedure |
| 2 — Late-detected multi-item | no | one Deconstruct tuple; "dive deep" is depth, not a 2nd item |
| 3 — MQ extension violates bounds | no | four canonical axes |
| 4 — Per-operation firing missed | no | all fields present |
| 5 — MQ2 missing preparation content | no | verdict/kinds/stance present |
| 6 — MQ2 missing kinds/stance | no | both present |
| 7 — 2-shape violation | no | the pick kept open (field/text not adjudicated); tradeoffs framed as openness |
| 8 — AMBIGUITY-NATURE conflation | no | MQ3 = WHAT endpoints; MultiDepth = WHY motivations |
| 9 — Considered-articulations drift | no | all 5 hold deliverable-shape, span the pick/rule/trigger/tradeoff dimensions, honor the NOT-list, stay in substrate |

**Fires:** 0. **Friction:** low — focused, well-scoped design question with a rich warm substrate (the field's nature + the routelister schema + the manual/automated timeline) and a user-supplied candidate default to test. → **HIGH-PROCEED.**

**Downstream notes for `_branch.md`:**
- **Synthesis Trigger OMITTED** — this dives into ONE open sub-decision (R4 from `17-11`); it does not roll up two or more prior findings. `17-11` enters as CONTEXT (the parent), not as a synthesized input.
- **Layer Commitment — borderline, OMITTED with a note.** The question is *structural-flavored* (a container/schema choice on the routelister route-record). But it does NOT meet the Layer Commitment trigger (no from-scratch redefinition / meta-restructure / fundamental rewrite of routelister — the field's *meaning* is settled; this is a narrow additive container choice). Note for downstream: treat it as a **Structural-layer** decision (artifact shape: field vs text) and explicitly NOT a Meaning re-opening.
- **The stated default is a candidate to TEST, not inherit.** "text until a machine reads it" must be steelmanned (Critique especially) against both "lightweight field from the start" and "text forever" — the inquiry's value is a *principled* rule + a concrete trigger, not a restatement of the default.
- **Relationship:** CONTINUES FROM `devdocs/inquiries/2026-06-16_17-11__meaning_gaps_field_and_vitality_consolidated` (R4 is its open sub-decision).
