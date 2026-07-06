## User Input

territory: this inquiry's artifacts (`_branch.md` + the six discipline outputs).
goal: the route-map format verdict + redesign — lean the index (drop grain+kind), clarify the records (Movement → Move/Lands/Touches as a ceiling-not-floor; Touches preserves precision; Guidance formalized), is_done = a hand-editable + routelog-writable ✓, Direction = noun-phrase + gloss — carried toward adoption in the routelister spec.

*(This route-map is written in the PROPOSED new format — lean columns + Move/Lands/Touches — as a live demonstration.)*

---

# Onward Routes — Next Steps This Inquiry Opens

**How to read.** Each entry is a suggested next step (nothing here is automatic). The lines that matter: **Target** (what you'd touch) + **Move/Lands** (what the step does → what it lands).

## At a glance

| # | Direction | engagement | Priority | ✓ |
|---|---|---|---|---|
| **R1** | Write the lean-index + Move/Lands/Touches redesign into the routelister spec | DEVELOP | **HIGH** | |
| R2 | Give routelog the ability to stamp the route-map's `✓` column | DEVELOP | MED | |
| R3 | The advance/sharpen recovery (group-by-kind) as an option | REFINE | LOW | |

*(`grain` + `kind` columns dropped per the finding; `✓` is hand-editable + routelog-writable, default empty.)*

---

## The routes in full

### R1 — Write the redesign into the routelister spec
- **Target:** `cognitive_harness/routelister/references/routelister.md` — §5.1 (the Route Index table) + §5.2 (the record schema; the `Movement` field).
- **Move:** update the spec — drop `grain` + `kind` from the summary table (keep the fields in the type-signature); make `Direction` a noun-phrase + optional gloss and stop restating it in record headers; replace the single `Movement` field with **`Move:` + `Lands:` + optional `Touches:`** (with the *ceiling-not-floor* rule: collapse for short routes); formalize `Guidance` (Mode + Pointers-with-`(bc)`); add the `✓` column.
- **Lands:** routelister emits lean, scannable indexes and layered, readable records by default — the format a cold future reader can parse.
- **Touches:** §5.1 Route Index columns (`# · Direction · engagement · Priority · ✓`); §5.2 `Movement`→`Move`/`Lands`/`Touches`; a note that `Touches` carries each ref's load-bearing qualifier (the no-precision-loss rule); the `✓`-is-routelog-writable note.
- **Why it matters:** this is the make-it-real step — the verdict only changes future maps once the spec says so.
- **Priority:** HIGH. **Confidence:** HIGH — the redesign survived critique with refinements (no kills), validated against 4 real Movements.
- **Carry the critique's 6 instructions:** Move/Lands = ceiling-not-floor (don't tax short routes); Touches preserves precision; grain-drop-hard / kind-drop-but-recoverable; ✓ hand-editable + routelog-authoritative-not-exclusive; Direction = noun-phrase+gloss; honest not-bloat (index shrinks, records grow modestly-but-structured).
- *tags: whole-concept · goal-advancing · DEVELOP*

### R2 — Give routelog the ability to stamp the `✓`
- **Target:** the routelog spec (`cognitive_harness/routelog/…`) — its `done` / `park` actions.
- **Move:** extend routelog so that, alongside its existing `↗` stamp into `_route.md`, it also writes the route-map's `✓` (and optionally a 3-word note) on `done`/`park`.
- **Lands:** running a route via routelog ticks it in the same table the human reads — satisfying "edit the same table" with routelog as the authoritative writer (the human may also tick by hand).
- **Touches:** routelog `done`/`park`; the route-map `✓` column.
- **Why it matters:** completes the is_done resolution without routelister authoring done-state.
- **Priority:** MED. **Depends on R1** (the `✓` column must exist first).
- *tags: whole-concept · goal-advancing · DEVELOP*

### R3 — The advance/sharpen recovery (group-by-kind)
- **Target:** the routelister spec §5.1 (optional index presentation).
- **Move:** document the *optional* way to recover the teleological/epistemic split that dropping the `kind` column removes — group the index under `Teleological:` / `Epistemic:` sub-headers, OR keep `kind` as an optional column, when an author finds the advance-vs-sharpen triage valuable.
- **Lands:** the advance/sharpen lens is available on demand without a permanent redundant column.
- **Touches:** §5.1 (an optional grouping note).
- **Why it matters:** answers the one real steelman for keeping `kind` (the triage lens) without re-adding the column by default.
- **Priority:** LOW — a small optional add; only if the split proves wanted in practice.
- *tags: one-facet · understanding-sharpening · REFINE*

---

## Considered and deliberately NOT routed (with reasons)

- **Retro-fitting the 12 historical crowboy maps to the new format** — not a route: they're concluded onward-fields (write-once); migrating historical maps is churn for no gain. New maps use the new format.
- **Re-opening grain/kind as type-signature fields** — settled: the FIELDS stay in the §2.1 signature; only their summary DISPLAY is dropped. Not a route.
- **A wide is_done_note column in the summary** — killed: rich done-notes live in routelog's append-only log (don't duplicate as a wide column); the summary `✓` stays narrow.

---

## Summary

- **3 next steps. 1 is high-priority (R1)** — write the redesign into the routelister spec.
- **R1 + R3 touch the routelister spec; R2 touches the routelog spec.** R2 depends on R1 (the ✓ column must exist).
- *Self-assessment: PROCEED — the onward field is laid out (in the new format itself); none is chosen for you.*
