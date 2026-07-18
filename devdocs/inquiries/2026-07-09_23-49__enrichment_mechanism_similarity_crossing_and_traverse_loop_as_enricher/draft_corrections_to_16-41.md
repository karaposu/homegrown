# DRAFT — corrections to the 16-41 finding + its edit-draft

**Status: PARTIALLY APPLIED (2026-07-10).** Corrections **1 and 5** — the ones targeting the 16-41 **finding** — were applied to `devdocs/inquiries/2026-07-09_16-41__…/finding.md` on user request (section 5 recast as two asymmetric inputs of one crossing; the Finding-Summary bullet updated to match; a Refined-by pointer added to Changes from Prior; a one-line consistency touch in the Reasoning section). Corrections **2, 3, 4** — the ones targeting the staged edit-draft `draft_seed_harvester_edits.md` — remain **NOT applied** (still user-gated). This realizes this dive's MUST.

**What this corrects, in one line:** the 16-41 finding's design is sound; three framings in it are over-stated or imprecise, and one piece of content (the radically-thin escalation) is missing. This dive found them by opening the actual files at the gate.

**Scope note.** These corrections sit *on top of* the 16-41 draft's existing edits (A, B, C, D, E, F, G). They do not remove any of them. Corrections 2–4 amend the wording/content of edits that draft already stages; correction 1 amends the 16-41 finding's prose.

---

## Correction 1 — the finding's "two levers" → two asymmetric inputs of one crossing

**Target:** `devdocs/inquiries/2026-07-09_16-41__advanced_seed_gen_source_expansion_enrichment/finding.md`, section 5 ("The sharpest distinction: anchor-indexed vs source-indexed") + the Finding-Summary bullet that states it.

**Current (the over-statement):** the section frames *source-indexed* and *anchor-indexed* as "two depth-**levers**," and says the shape-definition seed was "reachable **only** source-indexed," created a concept "from nothing."

**Corrected framing:**
- The two are the **two inputs of one crossing**, not two rival levers: walking the phenomenon *produces the source-concept list*; the existing project concepts *are the target list*; the match is the crossing (the seed-harvester's own §2, run at enrichment-time). The harvester's own anchor-requirement (§1 — a candidate that cannot name a real anchor is dropped) forbids a target-less "pure source-indexed" seed, so at seed-time both inputs are always present.
- Drop "reachable **only** source-indexed" and "from nothing." The target ("uncovering a shape") pre-existed — `a.md`'s opening sentence + the user's own account confirm it. The move was a source×target match.
- **Preserve, made precise:** the two inputs are **asymmetric**. The source-walk can run *first*, on the phenomenon's own terms, and can *mint a new target-concept* the project did not hold (which the anchor-side, iterating only over existing concepts, cannot). This asymmetry is the real content the "source-indexed lever" was pointing at — keep it. (It is visible in the draft's own §6.1 phase-1 line "walk the phenomenon's own aspects… and can reveal new anchors.")

**Character:** a precision-refinement, not an overturn. The 16-41 finding's core (richness-has-structure; the source contributes real structure) is untouched.

---

## Correction 2 — draft Edit F (§2) → describe the inputs as asymmetric

**Target:** the 16-41 draft's **Edit F** ("name the two depth-levers", §2 the crossing).

**Current:** Edit F names an "anchor-indexed" and a "source-indexed" depth-lever, one per crossing-input, as two levers.

**Corrected wording (replace Edit F's body):**

> **Two inputs, one crossing — asymmetric.** The crossing has two inputs. The **anchor** input is the project's existing concepts (the target list); interrogating the source against each is *anchor-indexed* engagement (§6.1 phase 2). The **source** input is the phenomenon's own aspects (the source-concept list); walking them is *source-indexed* engagement (§6.1 phase 1). The two are **not symmetric**: anchor-indexed engagement can only fill concepts that already exist, while source-indexed walking can run *first* and *surface a new concept the project has no anchor for yet*. Deep, frame-creating seeds need the source input's minting power; the two inputs together populate the seed-bearing crossing deeply, not just widely.

**Why:** the original "two levers" reading invites treating them as interchangeable alternatives; they are two inputs of one match, with the source input temporally and generatively prior.

---

## Correction 3 — draft Edit B (§6.1) → word the pre-pass as a directive over existing steps

**Target:** the 16-41 draft's **Edit B** (the "§6.1 guided-expansion pre-pass").

**The issue (not a redesign — a wording fix):** Edit B reads as if it introduces a *pre-pass* as a new thing. Read literally, its content — "walk the phenomenon's own aspects" (phase 1) and "interrogate the source against each canon anchor" (phase 2) — *is* the harvester's existing early steps (Surfacing + the crossing) run at depth. The gate confirmed there is no separate machinery here; the aspect-kit and the two guards are the only additive content. State that plainly so no future reader builds a separate enrichment engine.

**Corrected framing (add as the opening line of §6.1, keep the rest of Edit B as-is):**

> This pre-pass is **not new machinery** — it is a directive to run the harvest's own early steps at depth. Phase 1 (the aspect-walk) is Surfacing engaging the referent's own structure; phase 2 (the anchor interrogation) is the §2 crossing. What §6.1 *adds* over running those steps by default is only the **aspect-kit checklist** {mechanics · dynamics · failure-modes · ordering · scale · boundaries} and the **two guards** (provenance + source-worth containment). Do not build a separate enrichment pipeline; run the existing steps, guided by the checklist, on a source that points at a real referent.

**Why:** prevents the anti-inflation error the gate caught — reading a directive-plus-checklist as a bespoke pipeline, and then "replacing" it. Nothing to replace; just name it.

---

## Correction 4 — NEW draft edit: the radical-thinness escalation (a dedicated enrichment traverse)

**Target:** the 16-41 draft — a **new edit** (call it Edit H), appended to §6.1.

**Content to add:**

> **Radical thinness → a dedicated enrichment traverse.** The aspect-walk directive (above) handles a *moderately*-thin source — one that yields a few claims but points at a rich real referent. A **radically**-thin source (a bare pointer — e.g. a one-sentence metaphor — that needs `a.md`-scale enrichment) needs more than deeper surfacing: it needs *generation and iteration*, which is what a traverse loop provides and a single surfacing pass does not. For such a source, the harvester **recommends running a dedicated enrichment traverse first** — a generative-focused loop (Surfacing → Sensemaking → Innovation → iterate), sited as a **separate prior inquiry** (loop-composition is orchestrator-level; worker-loops do not spawn worker-loops — `docs/canon/sustained_traversal_loop_of_loops.md`). Its output becomes the enriched source the harvester then crosses.
>
> **Two conditions on the enrichment traverse:**
> - It is **gate-deferred**: it runs *no* seed-gate of its own — its output is gated downstream by the harvester's own §3 provenance check when the harvest crosses it.
> - It **carries the provenance marker in**: every enriched claim is marked *real-referent knowledge* vs *my elaboration* (the §6.1 provenance guard, applied inside the traverse). This is required because the harvester's §3 check, on an enriched source, must trace support to the **real phenomenon** — not to the enrichment traverse's own write-up (or a fabrication introduced during enrichment would count as "supported").
>
> **Trigger:** raw-yield below a few distinct claims **and** a bare-pointer source-type → escalate to the dedicated traverse; otherwise the aspect-walk directive suffices.

**Why:** this is the architecture answer to the user's question ("can we just run a traverse with an enrichment focus?") — yes, for radically-thin sources specifically. It is new content the 16-41 draft did not have.

---

## Correction 5 (optional) — the 16-41 finding frontmatter, if the finding itself is edited in place

If the 16-41 finding is edited (rather than only superseded by this one), add to its `## Changes from Prior` a forward-pointer noting this refinement:

> **Refined by:** `devdocs/inquiries/2026-07-09_23-49__enrichment_mechanism_similarity_crossing_and_traverse_loop_as_enricher/finding.md` — recasts the source/anchor-indexed distinction as two asymmetric inputs of one crossing, and adds the radically-thin enrichment-traverse escalation.

(Optional because this dive's own finding already carries the `refines:` link; the back-pointer is a convenience.)

---

## Application note

If approved, the corrections map to edits against two files:
- **Corrections 1, 5** → `devdocs/inquiries/2026-07-09_16-41__…/finding.md`.
- **Corrections 2, 3, 4** → `devdocs/inquiries/2026-07-09_16-41__…/draft_seed_harvester_edits.md` (which itself, when *its* edits are approved, applies to `cognitive_harness/protocols/seed_harvester.md`).

Take any subset. Corrections 1–3 are precision fixes (low risk); correction 4 is the substantive new content (the traverse-as-enricher path). **I will not apply anything without an explicit go-ahead.**
