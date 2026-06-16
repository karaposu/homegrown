---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: Container for the Meaning-Gaps Content — Structured Guidance Text, Promote on Demand

## Question

This inquiry resolves one open sub-decision left by the consolidation finding `devdocs/inquiries/2026-06-16_17-11__meaning_gaps_field_and_vitality_consolidated/finding.md` (its route **R4**).

Background a fresh reader needs. The **routelister** discipline turns a finished piece of work into a map of typed **routes** (onward directions). Each route is a record with typed fields — among them **Guidance** (a Mode plus a list of *Pointers, each with its own WHY*). A recent feature adds, to DEVELOP and CONSOLIDATE routes, a list of the target concept's under-understood **meaning-gaps**, each tagged a low/mid/high **vitality**. The open question: **where does that content live** — as its own dedicated typed field on the route record, or as structured text inside the existing Guidance field? The user offered a candidate default — *"text until a machine reads it"* — and asked to dive deep into it.

The goal: a container decision plus a *principled rule* for when (if ever) it changes — not an arbitrary pick.

## Finding Summary

- **Recommendation: structured Guidance text now — not a dedicated schema field.** Store the meaning-gaps content as a clearly **labeled `Meaning-gaps:` sub-block inside the existing Guidance field**, one line per gap.

- **The user's default was right, but its trigger was fuzzy — and sharpening the trigger is this inquiry's real contribution.** "Until a machine reads it" reads as "until any automation," which would fire almost immediately. The correct gate is narrower: promote to a typed field **only when a consumer needs *reliable structured or cross-route-aggregate extraction*** — a deterministic (non-LLM) parser always needs that; a heavy aggregator reading across many routes may need it even if it's LLM-based. An LLM reading *one* route's prose does not.

- **This is a parsimony call grounded in routelister's specific economy, not a universal "text beats fields."** routelister is built to stay a compact, scannable map (one route per identity), and it already carries *all* its soft, first-pass signals as text/annotation (the depth-signal, the Frontier) — never as typed fields. A typed meaning-gaps field would be the first exception, and it would sit empty on every route-type except DEVELOP and CONSOLIDATE — a sparse-field smell. (For a parser-first schema the answer would flip.)

- **The format carries a small machine-affordance for free.** Each line is `- <gap> — [low|mid|high] — <why>`. The inline `[vitality]` tag is hashtag-like: a human reads it, and a regex extracts it. That tag is **load-bearing**, not decoration — it is what keeps the content usable by any simple reader *and* what keeps a future migration-to-a-field cheap.

- **The convention will not rot in practice, because it is documented and single-authored.** Format rot comes from many uncoordinated hands; here the sole writer is routelister (one LLM), and the convention is written into the spec — which routelister re-reads every run. Minor drift (`[high]` vs `high`) is harmless while the reader is an LLM, and promotion-to-a-field is itself the rot-fix when a strict reader finally needs it.

- **The underlying principle (offered lightly, not as machinery): match a container's strictness to its reader's strictness.** A loose reader (a human, an LLM) is well served by a documented convention; a strict reader (a deterministic parser) needs a typed schema. This already explains routelister's own mix — `grain` / `kind` / `engagement-type` *are* typed fields because a strict, fixed-vocabulary reader consumes them, while Guidance and the depth-signal are loose text because an LLM reads them.

## Finding

### The recommendation

Store the meaning-gaps content as a **labeled sub-block inside the existing Guidance field**, like this:

```
Guidance:
  · <existing how-to-engage pointers...>
  Meaning-gaps:
    - <gap description> — [low|mid|high] — <why it matters>
    - ...
```

Do **not** add a dedicated `meaning-gaps` field to the route-record schema — for now, and quite possibly ever.

### Why text-in-Guidance (the grounds)

Four grounds, each checked against routelister's actual schema and economy:

1. **Guidance fits — as a labeled sub-block.** A Guidance Pointer is structurally "an item plus a WHY"; a meaning-gap is "an item plus a vitality plus a WHY" — the same shape with one inline tag. The important qualifier (and the reason this isn't sloppy): a meaning-gap is *not* the same kind of thing as a how-to-engage pointer, so it must live in its **own labeled `Meaning-gaps:` block**, visibly separated from the pointers. With that label, it is a clean sub-section of guidance, not a category-mix.

2. **It matches routelister's own treatment of soft signals.** routelister already carries within-concept, first-pass signals — the depth-signal ("has an unresolved README-vs-impl divergence") and the Frontier (concept-names discovered but not yet interpreted). Every one of them is **text/annotation, never a typed field.** A typed meaning-gaps field would be the first typed field for soft content — inconsistent with how the schema already works.

3. **A dedicated field would be sparse.** Only DEVELOP and CONSOLIDATE routes carry meaning-gaps; on every other route-type the field would be null. A mostly-empty typed slot cuts against routelister's stated value of a compact, scannable map.

4. **The change is reversible — cheaply — *because of the inline tag*.** Promoting text to a typed field later is a mechanical reformat, and an LLM does it reliably since the `[vitality]` tag is regex-extractable; routelister also re-perceives each run, so a migration can happen incrementally rather than as a big-bang reformat. (Note the dependency: this reversibility holds *because* the format carries the inline tag. A free-prose convention with no tag would be expensive to migrate — which is one more reason the tag is load-bearing.)

These grounds are routelister-specific. The recommendation is a parsimony call inside *this* schema's economy; it is not a claim that text always beats fields. For a schema whose primary reader is a strict parser, the same analysis would favor a field.

### The promotion rule and its trigger

The recommendation is a **rule, not a one-time pick**: *text now; a typed field if and only if the trigger fires.*

The trigger needs to be stated precisely, because the user's phrasing ("until a machine reads it") is the one fuzzy spot — and getting it wrong is the live failure mode (someone builds the field at the first mention of "automation," paying schema cost for nothing). The sharpening:

> **Promote to a dedicated typed field when a consumer needs reliable structured or cross-route-aggregate extraction of the vitality data** — i.e. a deterministic / non-LLM parser (which always needs it), or a consumer aggregating vitality across many routes (which may need it even if it is LLM-based, because reading 100 prose blocks reliably is hard).

The key correction is twofold. First, **an LLM reading a single route's prose is not such a consumer** — it reads `Meaning-gaps:` lines fine — so the trigger is *not* fired merely by "the meta-loop became automated." In this project the automation is LLM-based, so the trigger may never fire and text may be the permanent answer. Second, the gate is not purely "non-LLM"; it is "**needs reliable structured or cross-route extraction**," which a deterministic parser always does and a heavy aggregator sometimes does. Until such a consumer is actually proposed, stay with text.

### Durability — why the convention won't rot

The standard objection to "a convention in a free-text field" is that it rots — formats drift, tags get mangled, nothing enforces it. Here that risk is low for two concrete reasons. The convention is **documented in the routelister spec**, and routelister re-reads its own spec on every run (its mandatory pre-read), so the format is reloaded each time rather than remembered-and-forgotten. And the **sole author is one LLM** following that documented convention — rot is a many-uncoordinated-hands problem, which this isn't. Where minor drift does occur (`[high]` vs `high`), it is harmless precisely while the reader is an LLM; and the moment a strict reader needs exactness, that is the trigger to promote to a field — so promotion doubles as the rot-fix. **Document the convention in the spec** is therefore a required part of adopting this.

### The principle, lightly

If a one-line handle helps: **convention before schema** — match a container's strictness to its reader's strictness, and only pay for a typed schema when a strict reader arrives. It is offered as a memory aid, not as extra process. Its one piece of real evidence that it is a principle and not a post-hoc rationalization: it correctly predicts routelister's *existing* mix — `grain`, `kind`, and `engagement-type` are typed fields because a strict, fixed-vocabulary reader consumes them; Guidance and the depth-signal are loose text because an LLM reads them. The meaning-gaps content has an LLM reader today, so it goes with the loose ones.

## Next Actions

### MUST

- **What:** When the meaning-gaps feature is written into the routelister spec, store it as the labeled `Meaning-gaps:` sub-block inside Guidance (format: `- <gap> — [low|mid|high] — <why>`), and document both the convention and the promotion rule.
  **Who:** the routelister-spec edit — `cognitive_harness/routelister/references/routelister.md` (§5.2 Guidance), plus a short promotion-rule note.
  **Gate:** condition-bound — at the consolidation's R1 (writing the feature to spec); this finding resolves the container question that R1 was waiting on.
  **Why:** unblocks the feature's spec adoption with the container settled; keeps the inline tag (load-bearing) and the documented convention (durability).

### COULD

- **What:** Capture "convention before schema / match container strictness to reader strictness" as a small reusable design note.
  **Who:** a design note (e.g. under `docs/canon/`). **Gate:** condition-bound — once a second field-vs-text case appears to confirm the pattern generalizes. **Why:** a reusable heuristic for future schema-growth calls.
  **Depends-on:** none (independent of the MUST), but low value until a second case exists.

### DEFERRED

- **What:** Watch for the promotion trigger to fire — a consumer needing reliable structured or cross-route-aggregate extraction of vitality — and promote text → field if one appears.
  **Gate:** observable — when such a consumer (a metrics dashboard, a cross-route aggregator) is actually proposed. **Why (if revived):** it is the one condition under which the recommendation flips; in an LLM-centric project it may never arrive.

## Reasoning

**Why not a dedicated field now.** A field is self-documenting and consistent, and optional-null fields are normal in general schemas — that steelman is real. But it loses inside routelister's *specific* economy: routelister is designed to stay a compact map and already stores every soft signal as text, so a typed field for soft content is both a sparse slot (null on most route-types) and the first exception to the schema's own pattern. The field's advantages are real-in-general and neutralized-here.

**Why the trigger was the crux.** The whole recommendation hinges on *when* text stops being enough. The naive reading ("when it's automated") would fire immediately and waste the analysis. The corrected reading — a reader that needs reliable structured or cross-route extraction — is what makes "text now" safe rather than naive, because the project's own automation (LLM-based) does not meet it.

**What critique changed.** Two refinements were adopted from adversarial testing, not assumed: (1) "Guidance fits" holds only *as a labeled sub-block* — gaps and how-to pointers are distinct kinds, and an undemarcated dump would be a category-mix; the label is load-bearing. (2) The trigger was *broadened* from "a non-LLM consumer" to "a consumer needing reliable structured **or cross-route-aggregate** extraction" — because an LLM aggregating vitality across many routes is a borderline case that may justify a field even though it reads prose per-route.

**Significant rejections.** Dedicated-field-now — killed (parsimony + sparse-field + YAGNI). Text-forever-as-an-absolute — killed (over-commits against a possible future strict consumer; the trigger-keyed rule keeps the door open). A separately-typed vitality marker (the hybrid) — dominated (the inline `[vitality]` tag delivers parseable vitality without splitting one logical thing across a prose part and a typed part). Storing nothing and recomputing each run — killed (the route record is persisted across runs).

## Open Questions

### Blocked

- **Will the promotion trigger ever fire?** It depends on a consumer that needs reliable structured or cross-route extraction actually being built. Unobservable until the feature is in use and such a consumer is proposed; in an LLM-centric project it may never fire.

### Research Frontiers

- **Does "convention before schema" generalize into a project design principle?** It explains routelister's current typed-vs-loose mix, but confirming it as a reusable heuristic needs more field-vs-text cases to accumulate.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
R4: should it be a dedicated schema field, or just structured Guidance text? — default text until a machine reads it).

lets dive deep into it,
```

</details>
