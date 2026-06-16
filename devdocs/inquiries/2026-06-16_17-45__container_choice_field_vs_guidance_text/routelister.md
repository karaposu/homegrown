## User Input

territory: this inquiry's artifacts (`_branch.md` + the six discipline outputs).
goal: the container decision — structured Guidance text now (a documented `Meaning-gaps:` convention block with an inline `[vitality]` tag), promote to a typed field only when a consumer needs reliable structured or cross-route-aggregate extraction — carried toward adoption.

---

# Onward Routes — Next Steps This Inquiry Opens

**How to read this file.** Each entry is a **suggested next step** — not automatic, and nothing here edits this inquiry's files. The two lines that matter are **Target** (the concrete thing you'd touch) and **What you'd do** (the action in plain words).

## At a glance

| # | What you'd do | Target (what you'd touch) | Priority |
|---|---|---|---|
| **R1** | Write the convention + promotion rule into the routelister spec | `cognitive_harness/routelister/references/routelister.md` (§5.2 Guidance) | **HIGH** |
| R2 | Consider "convention before schema" as a reusable design principle | a design note / canon (no file yet) | LOW |
| R3 | Watch for the promotion trigger to fire | an observation to make later (no file yet) | LOW (blocked) |

---

## The routes in full

### R1 — Write the convention + the promotion rule into the routelister spec
- **Target (what you'd touch):** `cognitive_harness/routelister/references/routelister.md` — the **Guidance field in §5.2**, plus a short promotion-rule note.
- **What you'd do:** document that the meaning-gaps content lives as a **labeled `Meaning-gaps:` sub-block inside Guidance** — `- <gap> — [low|mid|high] — <why>` lines — NOT a dedicated schema field; and write the **promotion rule**: upgrade to a typed field only when a consumer needs *reliable structured or cross-route-aggregate extraction* (a deterministic parser, or a heavy aggregator that can't reliably read per-route prose).
- **Why it matters:** this is the resolution of the consolidation's open R4. With it settled, the consolidation's R1 (write the whole feature to spec) can proceed — the container question no longer blocks it.
- **Priority:** HIGH (it unblocks the feature's spec adoption). **Confidence:** HIGH (the recommendation survived critique with refinements, not kills).
- **Carry these into the spec text (the critique's instructions):** keep the inline `[vitality]` tag (it's load-bearing — it makes the content regex-readable AND keeps a later field-migration cheap); document the convention so it's re-loaded each run (durability); state the call is *grounded in routelister's compactness* (it would differ for a parser-first schema).
- *tags: whole-concept · goal-advancing · DEVELOP*

### R2 — "Convention before schema" as a reusable design principle
- **Target (what you'd touch):** nothing yet — a possible **design note or canon entry** (e.g. under `docs/canon/`).
- **What you'd do:** capture the principle the inquiry surfaced — *match a container's strictness to its reader's strictness; default to a documented convention, promote to a typed schema only when a strict reader arrives.* It already explains routelister's own mix (grain/kind/engagement-type are typed because a strict enum-reader consumes them; Guidance and the depth-signal are loose text because an LLM reads them).
- **Why it matters:** it generalizes beyond this one field — it's a routelister (and project) design heuristic for any future field-vs-text call.
- **Priority:** LOW — useful but not urgent; don't over-reach it into a big artifact before more cases accumulate.
- *tags: whole-concept · understanding-sharpening · INVESTIGATE-FRONTIER (a candidate principle, parked)*

### R3 — Watch for the promotion trigger to fire
- **Target (what you'd touch):** nothing yet — an **observation to make later.**
- **What you'd do:** watch for a consumer that needs reliable structured or cross-route-aggregate extraction of vitality (a metrics dashboard counting high-vitality gaps; an aggregator across many routes). If one appears, promote the convention to a typed field.
- **Why it matters:** it's the one condition under which the recommendation flips. In an LLM-centric project it may never fire — text may be permanent.
- **Priority:** LOW, **blocked** — nothing to watch until the feature is in use and such a consumer is proposed.
- *tags: whole-concept · understanding-sharpening · TEST (a watch, parked)*

---

## Considered and deliberately NOT routed (with reasons)

- **Re-opening the field's content** (gaps, vitality) — settled by the `16-10` / `16-38` / `17-11` chain; this inquiry was only the container.
- **The dedicated-field-now option** — adjudicated and killed (parsimony + the sparse-field smell + YAGNI); a closed question, not a route.
- **The feature's efficacy quarantine** (cross-rater convergence + meta-loop consumption) — a real open question, but it belongs to the *feature* and is already routed in `17-11`; out of scope for this container-only inquiry.

---

## Summary

- **3 next steps. 1 is high-priority (R1)** — and it's the one that unblocks the consolidation's "write the feature to spec" step.
- **Only R1 touches a file** (the routelister spec). R2 is a parked principle; R3 is a parked watch.
- *Self-assessment: PROCEED — the onward field is laid out; none is chosen for you.*
