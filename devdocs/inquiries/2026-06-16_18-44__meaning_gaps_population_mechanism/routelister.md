## User Input

territory: this inquiry's artifacts (`_branch.md` + the six discipline outputs).
goal: the population mechanism for the meaning-gaps field — extend routelister's framing step; the gaps are the itemized reasons behind a route's Confidence rating, named + rated in one glance, first-pass-bounded, with a per-route degradation fallback — carried toward adoption (it unblocks the consolidation's R1).

---

# Onward Routes — Next Steps This Inquiry Opens

**How to read this file.** Each entry is a **suggested next step** — not automatic; nothing here edits this inquiry's files. The two lines that matter are **Target** (the concrete thing you'd touch) and **What you'd do**.

## At a glance

| # | What you'd do | Target (what you'd touch) | Priority |
|---|---|---|---|
| **R1** | Write the population mechanism into the routelister spec | `cognitive_harness/routelister/references/routelister.md` (§3.3 frame + §5.2 schema) | **HIGH** |
| R2 | Watch whether the first-pass gap-lists are consistently useful | an observation to make later (no file yet) | LOW (blocked) |
| R3 | Consider routelister's "perception-exhaust" as a unifying layer | a future design idea (no file yet) | LOW |

---

## The routes in full

### R1 — Write the population mechanism into the routelister spec
- **Target (what you'd touch):** `cognitive_harness/routelister/references/routelister.md` — the **frame step (§3.3)** and a note in the **route-record schema (§5.2)**.
- **What you'd do:** specify that, when framing a DEVELOP/CONSOLIDATE route, routelister produces the meaning-gaps as a **by-product of assigning the route's Confidence** — *the gaps are the itemized reasons the route's Confidence is less than full* — naming each facet and rating it with the 3 vitality booleans **in the same glance**, emitting the `Meaning-gaps:` block. First-pass only (no full `/decompose`). Fallback: if routelister can't confidently name gaps, emit just the bare "meaning-unready" flag; if it can't assess at all, nothing.
- **Why it matters:** this is the procedure that makes the feature **operative** rather than a passive slot — it is what takes the consolidation's R1 (and thus the whole feature's spec adoption) from MED to HIGH.
- **Priority:** HIGH (unblocks the consolidation's R1). **Confidence:** HIGH — the mechanism survived critique with the Confidence-grounding refinement, not kills.
- **Carry these (the critique's instructions):** anchor the procedure to the **Confidence field** (gaps = the reasons for the route's Confidence — this is what makes it operative + identity-clean); use the compiler-warning analogy only as intuition (disclaim completeness); cite the `16-38` rubric for the one-glance rating; keep the per-route fallback distinct from the global "is the feature working?" monitor (R2); position the first-pass list as complementary to a downstream `/decompose` (which the field defers to).
- *tags: whole-concept · goal-advancing · DEVELOP*

### R2 — Watch whether the gap-lists are consistently useful
- **Target (what you'd touch):** nothing yet — an **observation to make later**, once the feature is in use.
- **What you'd do:** watch, across many routes, whether the first-pass gap-lists are useful or mostly noise. If consistently wrong, drop the feature to its lighter form (the bare meaning-unready flag) globally.
- **Why it matters:** this is the **global** quality guard (distinct from the per-route fallback in R1) — the empirical "does the by-product actually produce useful gaps?" check. It's the same efficacy quarantine inherited from the vitality-rubric inquiry (`16-38`).
- **Priority:** LOW, **blocked** — nothing to watch until the feature is in use across several routes.
- *tags: whole-concept · understanding-sharpening · TEST*

### R3 — Routelister's "perception-exhaust" as a unifying layer
- **Target (what you'd touch):** nothing now — a **future design idea**, parked.
- **What you'd do:** notice that several routelister outputs are by-products of perception it already does (the meaning-gaps, the depth-signal, the Frontier of un-interpreted names, the Excluded section). Consider whether they form one coherent "things I noticed but didn't route" layer worth naming.
- **Why it matters:** a possible simplification/unification of routelister's by-product outputs; not needed for the feature.
- **Priority:** LOW, parked — out of scope for adopting the feature.
- *tags: whole-concept · understanding-sharpening · INVESTIGATE-FRONTIER (a parked idea)*

---

## Considered and deliberately NOT routed (with reasons)

- **Re-opening the field's content / container / vitality rubric** — settled by the `16-10` / `16-38` / `17-11` / `17-45` chain; this inquiry was only the authoring mechanism.
- **The dedicated mini-`/decompose` pass** — adjudicated and killed as a *separate* pass (wrong confidence for a first-pass field + weight + re-perceives what framing already saw); a closed question. (The systematic version IS `/decompose`, downstream, which the field defers to.)
- **A two-pass generate-then-rate** — killed (the `16-38` rubric is glance-decidable; one pass is correct).

---

## Summary

- **3 next steps. 1 is high-priority (R1)** — and it is the one that makes the feature operative and **unblocks the consolidation's R1**.
- **Only R1 touches a file** (the routelister spec). R2 is a parked watch; R3 a parked idea.
- *Self-assessment: PROCEED — the onward field is laid out; none is chosen for you.*
