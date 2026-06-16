## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-16_17-45__container_choice_field_vs_guidance_text/_branch.md`

(Territory = the material bearing on the container choice, in context: the routelister route-record schema §5.2 (11 typed fields incl. **Guidance** = Mode + Pointers-each-with-WHY) + §5.3 `_route.md`; what Guidance already is; the meaning-gaps field's nature (first-pass, low-confidence, gaps-not-identities, per-gap vitality, soft-DoR); the manual-now/automated-later timeline; routelister's compactness value; the structured-field-vs-free-text tradeoff dimensions; the "a machine reads it" trigger. Purpose = surface what bears on deciding field-vs-text + the principled rule + the concrete flip-trigger; TEST the stated default. Save to surfacing.md.)

---

# Surfacing — Thin Artifact

**Mode:** artifact + possibility · **Entry point:** signal-first
**Territory:** the routelister schema (§5.2 / §5.3), the existing Guidance field, the meaning-gaps field's nature, the manual/automated timeline, routelister's compactness value, the tradeoff dimensions, the trigger. Explicit-bounded.
**Purpose (relevance bias):** what decides field-vs-text + the rule + the concrete "machine reads it" trigger.

## Traversal Trace

| # | Region | Item | Relevance | Conf | Note |
|---|---|---|---|---|---|
| 1 | schema §5.2 | **Guidance is ALREADY semi-structured** — Guidance Mode (none/compact/full/expand-on-drill) + **Pointers, each with its own WHY**. So "structured Guidance text" is not free prose; it is a place already shaped to hold a list-of-things-each-with-a-reason. | **core** | HIGH | the meaning-gaps content (gaps, each with a vitality + why) maps almost 1:1 onto Pointers-with-WHY → Guidance is the natural home |
| 2 | schema §5.2 | **The route record is already field-heavy** (11 fields). A dedicated meaning-gaps field is a 12th — a real schema-growth increment. | **core** | HIGH | the schema-weight dimension; routelister resists growth |
| 3 | field nature | **The content is first-pass / low-confidence / soft** ("a prompt, not a contract"). That matches Guidance's character, NOT the hard typed fields (grain/kind are enums; the content is prose-y). | **core** | HIGH | fit-with-nature: a soft list fits a soft container, not a new typed field |
| 4 | scope | **Only DEVELOP + CONSOLIDATE routes carry it** — it would be null/NA on most route-types (DEEPEN, REFRAME, TEST, …). A dedicated field present-everywhere-but-used-rarely is a **sparse-schema smell**. | **core** | HIGH | strong signal FOR text: a mostly-empty typed field bloats the compact map |
| 5 | §3.5 / identity | **routelister's compactness value** — one-route-per-identity, "enrich-not-dump," depth-signals not manifestation dumps. A dedicated always-present field cuts against this; Guidance text is opt-in per route. | **core** | HIGH | the parsimony principle favors opt-in text |
| 6 | trigger | **"A machine reads it" is under-specified — and decisive.** An automated meta-loop that is itself **LLM-based** reads structured prose fine (no field needed). Only a **deterministic / non-LLM parser** strictly needs a typed field. So the real trigger is "a non-LLM consumer that must parse without an LLM." | **core** | HIGH | SHARPENS the trigger; in an LLM-centric project the field may *never* be needed |
| 7 | reversibility | **text → field is a cheap, mechanical migration later** (the content already exists in structured text; promoting it = parse + relocate). The choice is **low-stakes / reversible**. | **core** | HIGH | reversibility favors the lighter option now (text); upgrading later is cheap |
| 8 | precedent | **routelister already carries within-concept meaning signals as TEXT/annotations** — the depth-signal ("has an unresolved README-vs-impl divergence") and the Frontier (concept-names discovered-but-not-interpreted). None is a typed field. | **core** | HIGH | the project's OWN pattern for soft signals is text-form (16-10 noted this) → precedent says text |
| 9 | tradeoffs | **The case FOR a field: consistency** — a dedicated field is in the SAME place on every applicable route; free text can drift in format. | **sub** | MED-HIGH | the honest steelman for "field"; answered by a *structured-text convention* (see #12) |
| 10 | field nature | **Vitality (low/mid/high) is enum-like** — like Priority/Confidence, which ARE attributive typed-ish tags. The *vitality marker* has a mild claim to typed treatment even if the gap text is prose. | **sub** | MED | suggests a possible HYBRID: prose gaps in Guidance, each tagged with a typed vitality marker |
| 11 | identity | **Schema-parsimony is a stated routelister identity value** — adding fields is exactly the growth it resists. | **sub** | HIGH | reinforces text-first |
| 12 | possibility | **The real option B is a *structured-text convention* inside Guidance** — e.g. a labeled `Meaning-gaps:` block with `- <gap> — <vitality> — <why>` lines. Structured enough to parse, light enough to skip the schema. | **core** | HIGH | this dominates "free prose"; it is the actual candidate against "dedicated field" |
| 13 | authoring | **Authoring cost is equal** — routelister is an LLM; writing structured text vs filling a typed field are both trivial for it. The real difference is all on the CONSUMER + schema side. | **sub** | MED | removes "ease of writing" as a discriminator |

## State Summary

- **Territory echo:** the schema (Guidance already semi-structured; 11 fields; compactness), the field's soft nature, the DEVELOP+CONSOLIDATE-only scope, the precedent (depth-signal/Frontier as text), reversibility, the trigger.
- **Purpose echo:** decide field-vs-text + the rule + the concrete trigger; test the default.
- **Coverage map:** schema structure — confirmed (items 1,2,5,9,11). Field nature/fit — confirmed (3,10). Scope sparseness — confirmed (4). Trigger — confirmed + sharpened (6). Reversibility — confirmed (7). Precedent — confirmed (8). The structured-text middle ground — confirmed (12). Authoring parity — confirmed (13).
- **Confirmed-absent:** **the schema has NO existing dedicated typed field for soft/first-pass content** — every soft signal (depth-signal, Frontier, Guidance pointers) is text/annotation form. A dedicated meaning-gaps field would be the *first* typed field for soft content — a departure from the schema's own pattern. (Strong signal for text.)
- **Concept-names discovered (provenance → trace #):**
  - `Guidance-as-the-natural-home` (#1, #12) — Guidance's Pointers-each-with-WHY already match the gaps-each-with-vitality+why shape.
  - `the sparse-field smell` (#4) — a typed field null on most route-types bloats the compact map.
  - `the sharpened trigger` (#6) — "a machine reads it" really means "a *non-LLM / deterministic* consumer parses it"; an LLM meta-loop reads structured text fine.
  - `the structured-text convention` (#12) — the actual option B: a labeled block inside Guidance, parseable, light.
  - `text-form precedent` (#8) — routelister's own soft signals (depth-signal, Frontier) are all text/annotation, not fields.
  - `reversible-low-stakes` (#7) — text→field is a cheap later migration, so default to the lighter now.
  - `the hybrid` (#10) — prose gaps + a typed vitality marker, if a middle option is wanted.
- **Frontier flags:** (a) the exact structured-text convention format (for decomposition/innovation); (b) whether to type *just* the vitality marker (the hybrid); (c) the precise trigger wording ("deterministic non-LLM consumer").
- **Workspace-populated status:** `{populated: true, populated-at: 2026-06-16_17-55, extent: routelister schema + field nature + tradeoff dimensions + trigger, all in context}`.

## Telemetry

- Mode: artifact + possibility · entry: signal-first · cycles: 2 (schema pass + tradeoff/trigger pass)
- Items: 13 · core 8 · sub 5 (+ 1 confirmed-absent: no existing typed field for soft content)
- Sub-phase fired: no (explicit-bounded)
- Convergence: reached — signals converge hard toward "structured Guidance text first" from multiple independent grounds (fit-with-nature, sparseness, compactness, precedent, reversibility, LLM-reads-text); the "field" case concentrates in consistency/deterministic-parseability, which is exactly what the trigger gates.
- Failure modes checked: Missed-relevance (no — both the text case and the field steelman surfaced), Surfaced-irrelevance (no), Over-coverage (no), Territory-mis-binding (no — stayed on the container, not the field's content), Purpose-loss (no — container-biased throughout), Interpretive-overstep (held — the convergence is *noted*; the actual recommendation is left for sensemaking/critique).
- **Self-assessment verdict: PROCEED** — the load-bearing structure (Guidance already fits; the sparse-field smell; the sharpened trigger; the structured-text convention; the text-form precedent; reversibility) is surfaced, and the default was tested rather than assumed.
