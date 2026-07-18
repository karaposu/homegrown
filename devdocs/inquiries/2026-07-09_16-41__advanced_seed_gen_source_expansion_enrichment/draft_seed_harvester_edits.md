# DRAFT — ready-to-apply edits to `cognitive_harness/protocols/seed_harvester.md`

**Status: DRAFT for approval. NOT applied.** This realizes the finding's MUST (Route 1). Nothing here has been written to the protocol — the edits are staged for you to approve **edit-by-edit**.

**Two parts, each independently approvable:**

- **OWNED-19-14** — the guided-expansion fix the 19-14 diagnosis (`devdocs/inquiries/2026-07-08_19-14__…richness_and_expansion/finding.md`) designed, recommended, and left unapplied. Approving *only* this subset reproduces that never-applied recommendation. **Edits A, B(owned), C, G.**
- **THIS-DIVE-EXTENSION** — the source-indexed aspect-depth completion designed in this dive. **Edits B(extension), D, E, F.**

Verified against the live protocol before drafting: it currently has the source-support gate (§3) and "read fully" (§6) but **no** guided-expansion pre-pass and **no** machinery-only-anchor failure mode — so the OWNED part is genuinely additive, not already present.

Total inserted protocol prose ≈ 22 lines (kept tight per the parsimony call).

---

## Edit A — repair the vague anchor instruction  ·  §6 GENERATE row  ·  **OWNED-19-14**

The GENERATE cell currently says surfacing "brings the project anchors into view" — unspecified, which is what let the machinery stand in as the anchor axis. Add the canon-grounding clause.

**Find (in the §6 table, GENERATE row):**
> Surfacing brings the source's claims AND the project anchors into view (both crossing-inputs) —

**Replace with:**
> Surfacing brings the source's claims AND the project anchors into view (both crossing-inputs) — **the anchor axis is built from the canon model the source bears on, surfaced fresh at dive start; the harness machinery is at most one column, never the whole axis** —

---

## Edit B — add the guided-expansion pre-pass  ·  new subsection after the §6 table  ·  **OWNED-19-14 + THIS-DIVE-EXTENSION**

Insert a new `### 6.1` subsection immediately after the §6 table (before the "The routelister exhaust runs as usual…" line).

**OWNED-19-14 (the pre-pass + both guards + the operator-salience note = Edit G):**

> ### 6.1 The guided-expansion pre-pass (thin sources)
>
> When a source is too sparse to yield multiple distinct claims (a bare pointer, a one-line metaphor), run a pre-pass **before** the crossing. **Interrogate the source against each canon anchor** — "what does this phenomenon say about *[anchor X]*? about *[anchor Y]*?" — so the elaboration is project-directed from the start. Two guards, both mandatory:
>
> - **Provenance guard:** every expanded claim carries honest support — established, checkable knowledge of the real phenomenon, or an explicit "this is my elaboration" marker. **Never fabricated behavior.**
> - **Source-worth containment:** expand *toward* the canon anchors; if no genuinely source-supported crossing emerges, the source is simply thin — **stop, do not manufacture.**
>
> *(Operator-salience note: the canon-surfacing must be an ACTIVE fresh step, not a passive reminder — whoever runs the harvest already has the harness machinery filling context, so machinery-anchors feel default; only a fresh surfacing lets the canon anchors compete.)*

**THIS-DIVE-EXTENSION (the two-phase structure — phase-1 source-indexed aspect-walk):**

> **Phase structure.** The pre-pass runs in two phases, phase 1 **before** phase 2:
>
> - **Phase 1 — source-indexed aspect-walk:** walk the phenomenon's OWN structural aspects — **{mechanics · dynamics-over-time · failure-modes · ordering/priority · scale-levels · boundaries/conditions}** — on their own terms, guarded by provenance + source-type (§3). This reaches structure the canon has no anchor-question for yet, and can **reveal new anchors** (not just fill known ones) — the frame-creating frontier where the deepest seeds live.
> - **Phase 2 — anchor-indexed crossing (UNCHANGED):** the canon-anchor interrogation above (aspect-stretched source-claims × canon-anchors, including any new anchors phase 1 surfaced) + the §3 gate.
>
> Phase 1 comes first because it enriches **both** crossing inputs (source-claims AND anchors). **Sizing:** the aspect-walk is load-bearing specifically at the **new-anchor frontier**; for aspects that map to anchors the canon already has, phase-2 interrogation alone reaches them (aspect-depth folds in there).

---

## Edit C — add the "machinery-only anchor axis" failure mode  ·  §9 table  ·  **OWNED-19-14**

Append as row 9 of the §9 failure-modes table:

> | 9 | **Machinery-only anchor axis** | the anchor columns are all harness plumbing (disciplines, gate, index, route-map) and more than half the grid goes cold | rebuild the anchor axis from the canon model the source bears on (§6.1); machinery is at most one column — this is the enforcement surface for Edit A |

---

## Edit D — add the "flat-expansion" failure mode  ·  §9 table  ·  **THIS-DIVE-EXTENSION**

Append as row 10 of the §9 failure-modes table:

> | 10 | **Flat-expansion** | a thin source expanded to many FEATURES but along ~1 aspect (quantity-rich, aspect-shallow — the count of source-claims grew, aspect-coverage did not) | re-run the phase-1 aspect-walk across the full aspect-kit (§6.1); a flat feature-list structurally cannot hold a process-dynamic, and the deepest (import-shaped) seeds live in the dynamics/failure/ordering aspects |

---

## Edit E — the source-type licensing pre-check  ·  §3 gate  ·  **THIS-DIVE-EXTENSION**

Fold in as a clarifying line right after the **Fabricated transfers** bullet (it sharpens the source-support floor's grain; it does not replace the per-claim check).

**Insert after the "Fabricated transfers" bullet:**

> - **Source-type (the aspect-expansion pre-check):** a source is aspect-expandable (§6.1 phase 1) only if it points at a **real external referent with its own structure** — a spider → real biology: yes; a memory paper → the real phenomenon of memory: yes; a **bare self-contained formal claim / definition → no** (its referent is exhausted by the text — "expanding" it would be fabrication). This is a **proactive** pre-check (is this source expandable at all?) complementing the **reactive** per-claim source-support check above (is this claim supported?).

---

## Edit F — name the two depth-levers  ·  §2 the crossing  ·  **THIS-DIVE-EXTENSION (optional — the sharpest conceptual yield; approve only if you want §2 to carry it)**

Insert after the "Foreignness gradient" paragraph:

> **Two depth-levers, one per crossing-input.** The **anchor** input has an *anchor-indexed* depth-lever — interrogate the source against each EXISTING canon anchor (§6.1 phase 2). The **source** input has a *source-indexed* one — walk the phenomenon's OWN aspects (§6.1 phase 1). Anchor-indexed interrogation can only fill anchors that already exist; source-indexed walking can surface structure the project has no anchor for yet, revealing NEW anchors. Deep, frame-creating seeds need the source-indexed lever; the two together populate the seed-bearing quadrant *deeply*, not just widely.

---

## Application note

If approved, each edit maps to one `Edit` call against `cognitive_harness/protocols/seed_harvester.md`. You can take:

- **the OWNED subset only** (A, B-owned, C, G) — ships the 19-14 fix that was gated and never applied;
- **OWNED + EXTENSION** (all of A–G) — adds the source-side aspect-depth completion;
- **any subset** — e.g. defer the optional §2 edit (F).

Say which subset to apply and I'll write them in. I will not apply anything without that go-ahead.
