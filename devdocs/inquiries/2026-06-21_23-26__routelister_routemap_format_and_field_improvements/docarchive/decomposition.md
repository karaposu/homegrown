## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-21_23-26__routelister_routemap_format_and_field_improvements/_branch.md`

(Prior outputs consumed: surfacing.md, sensemaking.md. Whole = the SV6 verdict + redesign. Decompose into finding-shaped pieces; surface that the bloat-resolution framing licenses both the lean-index and the rich-records, and that is_done depends on routelog's ownership. Save to decomposition.md.)

---

# Structural Decomposition — The Route-Map Format Verdict + Redesign

**The whole (one paragraph, premature-decomposition guard):** The finding must give a real-data verdict on the route-map's shortcomings and a coherent improved format. Sensemaking stabilized it: the map has **two surfaces with opposite needs** — the **index** (summary table) wants to be lean+scannable, the **records** want to be clear — and **bloat is unstructured cramming, not content**, so the fix is to *remove what never informs* (lean the index) and *reflow dense fields into subfields* (clarify the records), with **done-state owned by routelog** (display-not-author). The pieces are: the unifying framing, the index changes, the record changes, the is_done resolution, the per-proposal verdict the user asked for, and the further improvements.

---

## 1. Coupling Map

| Pair | Coupling | Why |
|---|---|---|
| framing (P1) → index (P2) | **strong (licenses)** | "lean the index / bloat-is-cramming" is the *why* for dropping grain+kind |
| framing (P1) → records (P3) | **strong (licenses)** | "clarify the records / reflow-not-inflate" is the *why* for subfielding Movement |
| index (P2) ↔ records (P3) | **weak (different surfaces)** | the two moves act on *different* surfaces — low cross-coupling, which is the point (the cut is clean) |
| is_done (P4) ↔ index (P2) | **moderate** | is_done ADDS a column to the index — it touches P2's table |
| is_done (P4) → routelog | **external dependency** | the resolution rests on routelog *already owning* done-state (routelog writes the ✓) |
| verdict-table (P5) ← P2,P3,P4 | **strong (tabulates)** | the per-proposal verdict IS the decisions in P2/P3/P4, mapped to the user's 6 named proposals |
| further (P6) ← whole | **weak (residue)** | the beyond-the-six items |

**Topology:** a **framing spine** (P1) that licenses **two surface-moves** (P2 index, P3 records, weakly coupled to each other), an **is_done resolution** (P4) that adds a column to the index and leans on routelog, a **per-proposal verdict view** (P5) that tabulates P2/P3/P4 against the user's six proposals, and a **further tail** (P6).

---

## 2. Boundaries (Top-Down)

Six pieces:
- **P1 — The unifying framing** (two surfaces; bloat = cramming not content).
- **P2 — The index changes** (drop grain, drop kind, Direction = consistency).
- **P3 — The record changes** (Movement → Move/Lands/Touches; Guidance formalize).
- **P4 — The is_done resolution** (routelog-owned ✓).
- **P5 — The per-proposal verdict** (each of the user's 6 → yes/no/modified + real-data reason).
- **P6 — Further improvements**.

**The load-bearing cut is the index|records boundary** (P2 vs P3) — it's the *two-surface* split, the genuine articulation point (the surfaces have opposite needs and low cross-coupling).

**Rejected boundary (recorded):** organizing by the user's 6 proposals as 6 top-level pieces. Rejected — the proposals cross-cut the surfaces (grain/kind/Direction are all index; Movement/Guidance are all records), so a per-proposal partition would scatter the two coherent moves; the verdict-per-proposal is better as a *view* (P5) over the surface-organized redesign.

---

## 3. Boundaries (Bottom-Up Validation)

| Atom | Groups into |
|---|---|
| "two surfaces, opposite needs"; "bloat = cramming not content"; "lean index / clarify records" | P1 |
| "drop grain (153/153, dead)"; "drop kind (derivable)"; "Direction = consistent phrase + no-restate" | P2 |
| "Movement → Move/Lands/Touches"; "Guidance = formalize Mode+Pointers-with-bc" | P3 |
| "is_done ✓ column, default empty, routelog-written not routelister-authored; notes in routelog's log" | P4 |
| "grain→drop · Direction→consistency · kind→drop · is_done→routelog-✓ · Movement→Move/Lands · Guidance→formalize" | P5 |
| "Confidence in summary?; restatement removal; Touches↔Guidance boundary" | P6 |

**Agreement:** atoms cluster cleanly into the six pieces. The atom that *spans* — "is_done adds a column" — is the P4↔P2 interface (is_done is decided in P4 but lands in P2's table); surfaced in §5. **Confidence:** HIGH (the two-surface topology is unusually clean).

---

## 4. Question Tree (Pieces as Questions + Verification)

**P1 — The unifying framing**
> *What is the one principle that organizes all the fixes?*
- [ ] States the **two surfaces** (index = scannable; records = clear) with opposite needs.
- [ ] States **bloat = unstructured cramming, not content** → the fix *removes what never informs* and *reflows dense fields*, raising readability at neutral length.
- [ ] Frames the six proposals as instances of this, not a grab-bag.

**P2 — The index changes**
> *How should the summary table change?*
- [ ] **Drop `grain`** — measured 153/153 "project" (dead); keep the field for depth runs / show the column only when grains mix.
- [ ] **Drop `kind`** — derivable from `engagement`; keep it in the type-signature, not the display.
- [ ] **`Direction` = consistent self-explanatory phrase** (not "longer") + **stop restating** it in the record header.
- [ ] Net: `# · Direction · engagement · Priority` (+ the ✓ from P4).

**P3 — The record changes**
> *How should the per-route record fields change?*
- [ ] **`Movement` → `Move:` (plain action) + `Lands:` (resulting state) + optional `Touches:` (code/artifact identifiers)** — generalizing the user's from→to and quarantining the code-noise out of the prose; *reflow, not inflate*.
- [ ] **`Guidance` = formalize the existing shape** (Mode + Pointers-each-with-`(bc …)`; optionally type the pointer) — consistency, not a new structure.

**P4 — The is_done resolution**
> *Where does done-state live, and how is the user's "edit the same table" met?*
- [ ] Add a **narrow `✓` column** to the summary, **default empty**.
- [ ] It is **routelog-owned and routelog-written** — routelister never authors it (authoring done-state = process-coupling; the map is written-once).
- [ ] **Rich done-notes stay in routelog's append-only log** (don't duplicate as a wide column); single-source-of-truth = routelog.

**P5 — The per-proposal verdict (the user's direct answer)**
> *For each of the user's six named proposals, what's the verdict + the real-data reason?*
- [ ] A compact table: each proposal → **yes / no / modified** + the measured reason.
- [ ] Covers all six (grain · Direction · kind · is_done · Movement · Guidance).

**P6 — Further improvements**
> *What beyond the six makes sense?*
- [ ] `Confidence` in the summary (or kept in records); the Direction-restatement removal; the `Touches`↔`Guidance` boundary (code-refs vs build-pointers); any other measured-from-the-corpus item.

---

## 5. Interface Map

| Source → Target | What flows | Direction | Notes / hidden coupling |
|---|---|---|---|
| P1 → P2 | the lean-index licence | one-way | "remove what never informs" justifies dropping grain+kind |
| P1 → P3 | the reflow-not-inflate licence | one-way | "bloat = cramming" justifies the Movement subfields |
| P4 → P2 | the ✓ column | one-way | is_done is *decided* in P4 but *lands* in P2's table — explicit, not hidden |
| P4 → routelog | the ownership dependency | external | the resolution **assumes** routelog owns done-state + can stamp the map |
| P2,P3,P4 → P5 | the decisions to tabulate | one-way | the verdict-table is a *view* of the surface-moves against the 6 proposals |
| whole → P6 | the residue | one-way | beyond-the-six |

No circular interfaces. The two watch-points (P1's licensing of both moves; P4's routelog dependency + index-landing) are explicit.

---

## 6. Dependency Order

```
P1 (framing) → P2 (index) + P3 (records) → P4 (is_done) → P5 (verdict view) → P6 (further)
```

- **P1 first** — the principle the rest instantiate.
- **P2 + P3** — the two moves (independent of each other; both rest on P1).
- **P4 after P2** — it adds a column to the index.
- **P5 after P2+P3+P4** — it tabulates their decisions (presented early in the finding as the user's direct answer, but finalized after the moves).
- **P6 last** — the tail.

No circular dependencies.

---

## 7. Self-Evaluation

| Dimension | Verdict | Evidence |
|---|---|---|
| **Independence** | **PASS** | each piece answerable through its interface; P5 needs only P2/P3/P4's decisions |
| **Completeness** | **PASS** | all SV6 content mapped (framing, index, records, is_done, verdict-view, further); the user's 6 proposals all land in P5 |
| **Reassembly** | **PASS** | P1+P2+P3+P4+P5+P6 = the assessment-redesign finding (principle + two moves + is_done + the per-proposal answer + further) |
| **Interface clarity** | **PASS** | P1→P2/P3 licensing, P4→routelog+index, P5-tabulates surfaced with assumptions |
| **Balance** | **PASS** | P2 & P3 heaviest (the substance), P1/P4/P5/P6 medium-light; no single 80% piece |
| **Confidence** | **HIGH** | the index|records two-surface cut is the natural articulation point; bottom-up agrees |

**Determination-mechanism check:** the runtime determinations — "who writes is_done?" (routelog, P4) and "when show the grain column?" (only when grains mix, P2) — are each addressed by a piece. No missing determination-mechanism piece. **PASS.**

**Failure modes checked:** Premature-decomposition (no — sensemaking clarified first); Wrong-boundaries (the index|records two-surface cut is the genuine articulation point; rejected the per-proposal partition that would scatter the moves); Hidden-coupling (P5-tabulates + P4-routelog/index surfaced as interfaces); Missing-pieces (the per-proposal verdict = P5; further = P6); Over-decomposition (6 pieces for a multi-proposal assessment+redesign — appropriate, not fragmented); Ignoring-dependencies (linear order with P5's late-finalize noted); Imbalanced (balance passed).

**Decomposition verdict: COMPLETE — DV1 sufficient.** Six pieces; the index|records two-surface split is the load-bearing cut; the verdict-table (P5) is the user's direct answer tabulating the surface-moves; ready for Innovation to crystallize the framing/name.
