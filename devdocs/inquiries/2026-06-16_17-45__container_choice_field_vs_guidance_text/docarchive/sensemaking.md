## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-16_17-45__container_choice_field_vs_guidance_text/_branch.md`

(Prior outputs consumed: surfacing.md, articulate_simple.md. Whole = the container decision (dedicated schema field vs structured Guidance text) → a recommendation + a principled rule keyed to a concrete trigger. Test the stated default ("text until a machine reads it") on structural grounds — steelman both "field from the start" and "text forever." Self-reference case (routelister's own schema) — ground in the actual schema. Layer = Structural. Save to sensemaking.md.)

---

# Structural Sensemaking — The Container Decision

## SV1 — Baseline Understanding

Pick a field or text. A dedicated field looks cleaner — it's structured data, in the same place every time — so probably make it a field.

## Phase 1 — Cognitive Anchor Extraction

**Constraints:** container-only (the field's content is settled); no over-engineering (the content is lightweight/first-pass); test the stated default, don't inherit it; honor routelister's compactness.

**Key Insights:**
- **Guidance already fits.** The existing Guidance field is *Mode + Pointers, each with its own WHY* — a list of items each carrying a reason. A meaning-gap is *a gap + a vitality + a why* — the same shape plus one inline tag.
- **Sparse-field smell.** Only DEVELOP + CONSOLIDATE routes carry this content; a dedicated field would be null/NA on every other route-type — a mostly-empty schema slot.
- **Text-form precedent.** routelister's *other* soft, within-concept signals — the depth-signal ("has an unresolved README-vs-impl divergence") and the Frontier (concept-names discovered-but-not-interpreted) — are all carried as **text/annotation, never as typed fields.**
- **Reversibility.** text → field later is a cheap, mechanical migration (the content already exists structured; promoting it = parse + relocate).
- **The trigger is mis-stated.** "A machine reads it" is too loose: an LLM-based consumer reads structured prose fine. The real trigger is "a *deterministic / non-LLM* consumer must parse it without an LLM."

**Structural Points:** the schema (11 fields, Guidance among them); the option space = { dedicated field now · structured-text-in-Guidance · hybrid (prose gaps + a typed vitality marker) · text forever }.

**Foundational Principles:** parsimony (don't add a field before it's needed); reversible decisions go light first; YAGNI (you aren't gonna need it until a consumer needs it).

**Meaning-Node:** *"the container is a parsimony-vs-parseability tradeoff, and parseability is gated by a trigger that an LLM consumer never fires."*

### SV2 — Anchor-Informed Understanding

The decision isn't "a field is cleaner." It's: **use the lightest container that holds the content, and add structure only when a consumer actually needs it.** Right now, structured Guidance text holds it — and routelister's own pattern for soft signals is text, not fields.

*Meta-inspection (H4 concept-names, H5 motivating-examples): "structured-text convention," "sparse-field smell," "sharpened trigger" are grounded in the schema + surfacing, not loop-coined. The depth-signal/Frontier precedent is real routelister features, not a thin sample.*

## Phase 2 — Perspective Checking

- **Technical / logical:** Guidance (Mode + Pointers-each-with-WHY) can structurally hold a labeled meaning-gaps block. A dedicated field would be a new typed slot. Both work; the field adds a schema entry the content doesn't require.
- **Human / user (the meta-loop is a human today):** a person reading the route-map sees a `Meaning-gaps:` block in Guidance perfectly well. A human needs no typed field.
- **Strategic / long-term (the uncomfortable one):** *when* does the automated meta-loop arrive, and is it LLM or deterministic? In this project **everything is LLM-driven** (the disciplines are LLM specs). So the automated meta-loop is overwhelmingly likely LLM-based → it reads structured prose → **the typed-field trigger may never fire.**
- **Risk / failure:** text's risk = format drift across routes → cheaply mitigated by a *convention*. Field's risk = premature schema growth + a mostly-null field + a stickier change. The asymmetry favors text (its failure is cheaper to fix).
- **Definitional / internal-consistency:** does "add a typed field for soft, first-pass content" contradict routelister's own pattern? **Yes** — every soft signal it carries (depth-signal, Frontier, Guidance pointers) is text/annotation. A typed meaning-gaps field would be the *first* typed field for soft content — internally inconsistent with how the schema already treats soft signals.
- **Self-reference (H8):** evaluating routelister's own schema — grounded in the actual §5.2 text (Guidance = Mode + Pointers-each-with-WHY) and the depth-signal/Frontier being text, not in the discipline's authority.

### SV3 — Multi-Perspective Understanding

The choice is **principled, not a coin-flip**: routelister treats soft, opt-in, first-pass signals as text/annotation, values parsimony, and the content fits Guidance's existing shape. So structured Guidance text is the *consistent* choice. The only thing that would justify a typed field is a consumer that can't parse prose — and in an LLM project that consumer may never exist.

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — Is "text until a machine reads it" the right default?
**Strongest counter-interpretation (A — field from the start):** a dedicated field is in the same place every route (no format drift) and adding it now is cheap, saving a later migration.
**Why A fails (structural):** (i) the field is null on most route-types → a sparse, mostly-empty slot that bloats the compact map routelister explicitly values; (ii) it contradicts the schema's own all-text treatment of soft signals; (iii) "saves a later migration" assumes the migration happens, but the typed-field trigger (a non-LLM consumer) may never fire — you'd pay permanent schema cost for a migration you never need. Format drift is real but cheaply fixed by a convention. A loses on parsimony + consistency + YAGNI.
**Strongest counter-interpretation (B — text forever, never a field):** the trigger never fires, so commit to text permanently.
**Why B is right-but-too-strong:** B correctly sees the trigger may never fire — but "never a field" over-commits. If a *deterministic non-LLM* consumer ever appears (a metrics dashboard counting high-vitality gaps, say), a typed field becomes genuinely warranted. The honest position keeps that door open.
**Confidence:** HIGH.
**Resolution:** the default is **right but needs sharpening**. Structured Guidance text now; promote to a typed field *only if* a deterministic/non-LLM consumer needs to parse it. The trigger is not "a machine reads it" but "a non-LLM consumer must parse it without an LLM."
**Now fixed:** text-in-Guidance now; a trigger-keyed upgrade rule; the trigger's real meaning.
**No longer allowed:** a dedicated field now; "text forever" as an absolute.

### Ambiguity 2 — Does "structured Guidance text" actually fit, or is that hand-waving?
**Counter:** the gaps-with-vitality list may not fit Guidance's Pointers and need its own structure anyway.
**Why it fails (structural):** Guidance is *Pointers, each with its own WHY* — a list where each item carries a reason. A meaning-gap is `<gap> — <vitality> — <why>` — an item with a reason plus one tag. So a labeled `Meaning-gaps:` block of `- <gap> [vitality]: <why>` lines fits Guidance's existing shape with a single inline tag added. A near-exact match, not hand-waving. **Confidence: HIGH.**
**Resolution:** the structured-text option is a labeled convention block inside Guidance (exact format = a forward item for decomposition/innovation).

### Ambiguity 3 — Should the vitality marker be a typed field even if the gaps are prose (the hybrid)?
**Counter:** vitality (low/mid/high) is enum-like, like Priority/Confidence which ARE attributive fields — so type it.
**Why it's real but subordinate:** typing just the vitality marker splits one logical thing (a gap + its vitality) across a prose part and a typed part — awkward — and re-introduces schema growth for the marker. An **inline tag** (`[high]`) in the convention is both human-readable AND trivially parseable (even a regex finds `[high]`), delivering the hybrid's only benefit (parseable vitality) without a typed field. **Confidence: MED-HIGH** (a reasonable option, just dominated).
**Resolution:** no separate typed vitality field; an inline vitality tag gives the parseability for free.

### SV4 — Clarified Understanding

The decision is clear: **structured Guidance text now** (a labeled `Meaning-gaps:` block with an inline vitality tag), **promote to a typed field only if a deterministic/non-LLM consumer appears.** The stated default is confirmed but its trigger is sharpened. No longer viable: a dedicated field now (sparse, schema-inconsistent, premature); "text forever" as an absolute (over-commits against a possible future non-LLM consumer); a separately-typed vitality marker (dominated by an inline tag).

## Phase 4 — Degrees-of-Freedom Reduction

- **Fixed:** structured Guidance text now; a labeled-block convention with an inline vitality tag; a trigger-keyed promotion rule; the trigger = a non-LLM/deterministic consumer.
- **Eliminated:** a dedicated field now; "text forever" as an absolute; a separate typed vitality field.
- **Viable:** the convention + the rule. **Open (forward):** the exact convention format.

### SV5 — Constrained Understanding

Collapses to: text-in-Guidance via a labeled convention (with an inline vitality tag), governed by a trigger-keyed upgrade rule; the trigger sharpened to "a non-LLM/deterministic consumer"; the exact format is the one forward item.

## Phase 5 — Conceptual Stabilization

*Accommodation check (H6): no patching — each perspective added a compatible anchor (fit, sparseness, precedent, reversibility, the trigger). The model settled on the first stabilization. Earned.*

### SV6 — Stabilized Model

**The container decision resolves to *structured Guidance text now, governed by a principled trigger-keyed upgrade rule* — not an arbitrary pick.**

Concretely:

- **Store the meaning-gaps content as a labeled convention block inside the existing Guidance field** — e.g. a `Meaning-gaps:` block of `- <gap> — [vitality] — <why>` lines — because: (a) **Guidance already fits** (it is a list of items each with a WHY; a gap adds one inline vitality tag); (b) **routelister treats all its soft/first-pass signals as text/annotation** (the depth-signal and Frontier precedent) — a typed field here would be the first typed field for soft content, inconsistent with the schema's own pattern; (c) a **dedicated field would be null on most route-types** — a sparse-schema smell against routelister's compactness value; (d) the change is **reversible** (text → field later is a cheap mechanical migration), so the parsimonious option is correct by default (YAGNI).

- **Promote to a dedicated typed field only when the trigger fires — and the trigger is sharper than "a machine reads it."** An LLM-based meta-loop reads structured prose fine, so the real trigger is **"a deterministic / non-LLM consumer must parse the content without an LLM"** (e.g. a metrics dashboard counting high-vitality gaps across routes). In an LLM-centric project that consumer may never appear, so **text may be the permanent answer** — but the rule keeps the door open without paying schema cost now.

- **The hybrid (a separately-typed vitality marker) is dominated:** an inline `[vitality]` tag in the convention is both human-readable and trivially parseable, delivering the hybrid's only benefit without schema growth.

**So the user's stated default was right — but it was fuzzy in exactly one place, the trigger.** "Text until a machine reads it" reads as "until *any* automated consumer," which would fire almost immediately; sharpened, it is "until a *non-LLM/deterministic* consumer needs to parse it," which in this project may be never. That sharpening is the inquiry's real contribution.

**Distance from SV1:** SV1 = "a field is cleaner (structured data)." SV6 = "the lightest sufficient container is text-in-Guidance via a convention; a dedicated field is sparse + schema-inconsistent + premature; the upgrade is gated by a trigger an LLM consumer never fires — the stated default was correct but its trigger needed sharpening."

---

## Saturation / Telemetry

- **Perspective saturation:** 6 perspectives; saturated after Strategic + Definitional (the last perspectives confirmed/sharpened rather than adding new anchor-types).
- **Ambiguity resolution ratio:** 3/3 resolved (the exact convention format is a deliberate forward item, not an unresolved ambiguity).
- **SV delta:** moderate-high ("a field is cleaner" → "text-via-convention with a sharpened trigger; a field is sparse + premature").
- **Anchor diversity:** 5 types across 6 perspectives; the model rests on several independent grounds (precedent · sparseness · fit · reversibility · the trigger) — not one pillar.
- **Failure modes checked:** Status-Quo-Bias (tested the user's stated default rather than rubber-stamping it — and sharpened it), Premature-Stabilization (load-bearing tests run on the default, the fit, and the hybrid), Anchor-Dominance (multiple independent anchors), Perspective-Blindness (the uncomfortable Strategic perspective — *when/what is the automated consumer* — is what sharpened the trigger), Clean-Resolution-Trap (the "text wins" resolution tested against field-now / text-forever / hybrid on structural grounds, not precedent), Self-Reference-Blindness (grounded in the actual §5.2 schema text).
- **Verdict:** STABLE — high-confidence; structured Guidance text now via a labeled convention with an inline vitality tag, a trigger-keyed upgrade rule, the trigger sharpened to "a non-LLM/deterministic consumer"; the exact format carried as the one forward item.
