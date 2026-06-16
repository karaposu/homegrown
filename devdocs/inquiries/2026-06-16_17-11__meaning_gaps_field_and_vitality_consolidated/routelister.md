## User Input

territory: this inquiry's artifacts (`_branch.md` + the six discipline outputs).
goal: the consolidated **meaning-readiness gauge** — one feature (the meaning-gaps field + its nested vitality rubric, *uses-not-owns*), carried toward canon/spec adoption, scoped to the two findings (16-10 + 16-38).

---

# Onward Routes — Next Steps This Consolidation Opens

**How to read this file.** Each entry below is a **suggested next step** — *not* something that happens automatically, and *nothing here edits this inquiry's files*. For each one, the important lines are **Target** (the concrete thing you'd touch) and **What you'd do** (the action in plain words). Everything else is supporting detail.

*Tiny glossary for the tag line at the end of each route (ignore if you don't care):*
- *DEVELOP = build a described thing into a real instance · CONSOLIDATE = fold related things into one coherent doc · REFINE = sharpen an existing thing · TEST = check a claim against evidence · PURSUE-SEED = take up an idea raised but not developed · INVESTIGATE-FRONTIER = open an area we've only pointed at.*

## At a glance

| # | What you'd do | Target (what you'd touch) | Priority |
|---|---|---|---|
| **R1** | Add the meaning-gaps field + vitality rubric to the routelister spec | `cognitive_harness/routelister/references/routelister.md` (the route-record schema) | **HIGH** |
| R2 | Write the vitality rubric up as its own reusable tool | same spec file, a new standalone section | MED (later) |
| R3 | Distill the 5-finding chain into one canon doc | a new file under `docs/canon/` | MED |
| R4 | ~~Decide: a structured field, or just free text?~~ **RESOLVED → Guidance text** | settled (see R4 below) | ✓ done |
| R5 | Check the feature actually works once it's used | an observation to make later (no file yet) | MED (blocked) |
| R6 | Explore rating gaps by "upside" instead of "risk" | a future design idea (no file yet) | LOW |
| R7 | Mine past ratings to auto-tune the rubric | a future research project (no file yet) | LOW |

---

## The routes in full

### R1 — Put the feature into the routelister spec
- **Target (what you'd touch):** the routelister discipline's spec file — `cognitive_harness/routelister/references/routelister.md` — the **frame step (§3.3)** (where the authoring procedure lives) and the **route-record schema (§5.2)** (the field + its container), with a smaller note in the guidance sections.
- **What you'd do:** add the **meaning-gaps field** (and its **vitality rubric**) to that schema, as one unit — so that when `/routelister` runs, it actually produces this field.
- **Why it matters:** right now the feature only exists as a *description* in `finding.md`. The tool itself doesn't know about it. This step makes it real — the difference between "we wrote up an idea" and "the tool does it."
- **Priority:** HIGH (this is the main "make it real" step). **Confidence:** **HIGH — design complete.** Both of R1's open sub-pieces are now resolved: the **container** (R4 → structured Guidance text, `17-45`) AND the **authoring mechanism** (how routelister fills the field → `18-44`: the gaps are the itemized reasons behind a route's Confidence rating, named + rated in one glance). The depth-signal relationship is drawn too (the gaps are a multi-item depth-signal). Only the spec-write itself + empirical efficacy (a later TEST, not a design gap) remain — so this route is fully unblocked.
- **When you do it, keep these from the finding:** the usage-note and the "gaps are facets, not separate concepts" rule (write them as real content, not side-notes); the **container** = a labeled `Meaning-gaps:` block in Guidance (`17-45`); and the **authoring procedure** = at the frame step, the gaps are the itemized reasons a route's Confidence is less than full, named + rated in one glance, first-pass only, with the per-route fallback (`18-44`).
- *tags: whole-concept · goal-advancing · DEVELOP*

### R2 — Write the vitality rubric as its own reusable tool
- **Target (what you'd touch):** the same routelister spec, but a **separate, standalone section** for the vitality rubric (so the field just *references* it instead of embedding it).
- **What you'd do:** document the rubric (impact × likelihood, the three questions, the mapping) as a general severity tool that anything could use — not as something owned by the meaning-gaps field.
- **Why it matters:** the rubric is the project's general "how risky is this?" logic; it isn't specific to this field. Splitting it out keeps it reusable by other things later.
- **Priority:** MED, and **only when a second thing actually wants to use the rubric.** Until then, just keep it inside R1's text — splitting early adds needless indirection.
- *tags: whole-concept · goal-advancing · DEVELOP*

### R3 — Distill the chain into one canon doc
- **Target (what you'd touch):** a **new file under `docs/canon/`** (e.g. `meaning_readiness.md`).
- **What you'd do:** write one self-contained canon document explaining the whole feature, distilled from the five findings in this chain (`…06-12` → `…06-14` → `16-10` → `16-38` → this one).
- **Why it matters:** so a future reader learns the feature from one clean doc, instead of reading five inquiry findings in order.
- **Priority:** MED. **Important rule:** the canon doc must stand alone — plain explanation, **no links back to `devdocs/inquiries/…`** in its body (that's the project's canon-self-containment rule).
- **Do this after R1** (distil the settled spec, not a moving target).
- *tags: whole-concept · understanding-sharpening · CONSOLIDATE*

### R4 — Decide: a real schema field, or just text?
- **Status: RESOLVED** by `devdocs/inquiries/2026-06-16_17-45__container_choice_field_vs_guidance_text/finding.md` (a full `/traverse` inquiry).
- **The answer:** **structured Guidance text** — store the meaning-gaps content as a labeled `Meaning-gaps:` sub-block inside the existing Guidance field (`- <gap> — [low|mid|high] — <why>`), **not** a dedicated schema field.
- **The rule for when that changes:** promote to a typed field only when a consumer needs *reliable structured or cross-route-aggregate extraction* — a deterministic/non-LLM parser, or a heavy aggregator reading across many routes. An LLM reading one route's prose never fires it, so in this LLM-centric project text may be permanent.
- **Why text:** routelister keeps all its soft signals as text (never typed fields); a dedicated field would be null on most route-types; the inline `[vitality]` tag stays human-readable AND regex-parseable; and the convention — documented in the spec, written by one LLM — won't rot. Folds into R1: the container is now settled, so R1 can proceed.
- *tags: one-facet · understanding-sharpening · REFINE — ✓ DONE*

### R5 — Check it actually works (once it's in use)
- **Target (what you'd touch):** nothing to edit yet — this is an **observation to make later**, once the field is in the spec and the meta-loop is actually using it.
- **What you'd do:** check two things in practice — (a) do two different people rate the same gap the same low/mid/high? and (b) does the meta-loop actually act on the rating (deepen the high ones, build past the low ones)?
- **Why it matters:** we *believe* the feature is well-designed, but no one has used it yet. This is the honest "does it hold up in reality?" check.
- **Priority:** MED, but **blocked** — there's nothing to observe until the field exists and something consumes it.
- *tags: whole-concept · understanding-sharpening · TEST*

### R6 — Try rating gaps by "upside" instead of "risk"
- **Target (what you'd touch):** nothing now — a **future design idea**, parked.
- **What you'd do:** explore rating a gap by *what deepening it would unlock* (the upside) rather than *what skipping it risks* (the downside).
- **Why it matters:** it's an alternative lens that could help if the meta-loop ever wants to rank gaps by opportunity. Today the risk framing already covers what's needed.
- **Priority:** LOW. Revisit only if that need actually shows up.
- *tags: whole-concept · goal-advancing · PURSUE-SEED (a parked idea)*

### R7 — Mine past ratings to auto-tune the rubric
- **Target (what you'd touch):** nothing now — a **future research project**, parked.
- **What you'd do:** collect vitality ratings across many runs and look for patterns (e.g. "which kinds of gaps reliably come out high"), to tune the rubric from its own history.
- **Why it matters:** could eventually make the rubric self-calibrating.
- **Priority:** LOW, deliberately out of scope — it's heavy and multi-step, and would work against the "stay lightweight" goal if pulled in now.
- *tags: whole-concept · goal-advancing · INVESTIGATE-FRONTIER (a flagged, un-entered area)*

---

## Considered and deliberately NOT routed (with reasons)

- **Re-opening the two findings' decisions** (the field's shape, the rubric's axes) — already settled by `16-10` / `16-38`; the consolidation's job was to join them, not re-litigate them.
- **Re-arguing whether the field and rubric belong together** — this inquiry decided they do (one feature, the field *uses* the rubric). Closed.
- **Pulling the two earlier chain findings (`…06-12`, `…06-14`) in as inputs** — they're background context, not part of what's being consolidated.
- **A numeric / weighted vitality score, or splitting the rubric's impact question into several** — rejected earlier for breaking the "three quick yes/no questions" lightness.

---

## Summary

- **7 suggested next steps. 1 is high-priority (R1).** 1 is a parked research idea (R7).
- **Three actually touch a file:** R1 + R2 (the routelister spec) and R3 (a new canon doc). R4 is a decision made inside R1. R5/R6/R7 are observations or parked ideas with no file yet.
- **The honest open edge:** R5 — we won't know the feature truly works until it's in the spec and something uses it.
- *Self-assessment: PROCEED — the field of next steps is laid out; none is chosen for you.*
