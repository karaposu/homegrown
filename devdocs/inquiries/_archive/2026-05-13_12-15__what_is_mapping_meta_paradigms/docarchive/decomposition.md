# Decomposition — What is Mapping (Meta-Level Definition and Paradigms)

## Input recap

The work surface: produce a finding doc that materializes the 3-layer meta-paradigm model from sensemaking (minimum-core definition + 4 primary + 8 secondary axes + 12 crystallized paradigms) plus the REFINES relationship to the prior identity-refresh finding plus the optional `/explore` §1 Identity addition.

---

## Step 1 — Coupling Topology

### Elements identified in the whole

- **E1.** Minimum-core definition (single sentence)
- **E2.** 4 primary axes (what-preserved, encoding-type, operational-act, purpose) with names + one-liners
- **E3.** 8 secondary axes (scope, reference-frame, meta-level, origin, output-form, temporality, fidelity, viewpoint) with names + one-liners
- **E4.** 12 crystallized paradigms (CART, TAX, REL, FUNC, EMB, PROC, CONST, POSS, NAV, COV, REFL, ANALOG) with one-line description per paradigm
- **E5.** Vocabulary stack (definition / axis / paradigm / kind / instance) — short clarifying note
- **E6.** REFINES frontmatter (`refines:` field referencing the prior identity-refresh finding)
- **E7.** REFINES body section ("Changes from Prior" with preserve / add / reposition; meta-lesson about layer-shift)
- **E8.** Mapping table from prior 7-kinds onto meta-paradigms
- **E9.** Applied use to `/explore` — one-paragraph addition for `/explore`'s §1 Identity naming the 6-paradigm subset
- **E10.** Classification guidance — "how does a reader place a new mapping into the framework?"
- **E11.** Revisability clause — explicit note that the 12 paradigms is revisable; the 4 primary axes are stable-ish; the minimum-core definition is stable
- **E12.** Stability layering note — three stability tiers (definition / axes / paradigms)

### Coupling perception

Asking "if I change E_i, does E_j need to change?" for each pair:

- **E1 ↔ E2:** STRONG coupling. The 4 primary axes ARE the compositional parameters the definition leaves open ("specified by which structural feature is preserved, what target medium encodes it, what operation produces it, what purpose it serves"). Changing the definition's parameters would restructure the primary axes. Must stay together.

- **E2 ↔ E3:** MODERATE coupling. Secondary axes refine within primary axis cells but could be reorganized without breaking the primary set. Some boundary mobility (one axis could move from secondary to primary).

- **E1+E2 ↔ E4:** STRONG-TO-MODERATE coupling. Paradigms ARE clusters in axis space; changing the definition's parameters would re-define the axis space which would re-cluster the paradigms. But the named paradigms (CART, TAX, etc.) are stable across reasonable axis re-organizations because their literature is established independently.

- **E3 ↔ E4:** MODERATE. Some paradigms differ only on secondary axes (e.g., NAV vs CART differ on the viewpoint axis), so a change to secondary axes could change the paradigm enumeration.

- **E5 (vocabulary) ↔ All:** WEAK-CROSS-CUTTING. The vocabulary stack disambiguates terms across all pieces but doesn't constrain content. A change to vocabulary doesn't require content changes in pieces; it just requires consistent terminology.

- **E6 (frontmatter) ↔ E7 (body section):** STRONG. They both encode the REFINES relationship; the body elaborates what the frontmatter declares.

- **E7 ↔ E8 (kind-to-paradigm mapping):** STRONG. The mapping table is the structural justification for the REFINES claim ("the prior 7 kinds map onto these 6 of 12 paradigms"). Must stay together.

- **E6+E7+E8 ↔ E1+E2+E4:** ONE-WAY DEPENDENCY. The REFINES body needs the new model to exist before it can describe what's added; the new model is independent of the REFINES section.

- **E9 (`/explore` addition) ↔ E4:** STRONG. The addition names which 6 of 12 paradigms `/explore` produces; it depends on E4 existing.

- **E10 (classification guidance) ↔ E1+E2+E4:** STRONG. The guidance teaches how to use the framework, depending on the definition, axes, and paradigms being defined.

- **E11+E12 (revisability + stability) ↔ All:** WEAK-CROSS-CUTTING. These are meta-notes about stability tiers; cross-cutting; can ride along with any piece.

### Coupling map summary

```
                        +-----------+
                        | E1 + E2   |   strong internal coupling
                        | def + 4   |
                        | primary   |
                        +-----+-----+
                              | strong
                              v
              +---------------+----------------+
              |                                |
              v                                v
        +-----+-----+                    +-----+-----+
        |    E3     |       moderate     |    E4     |
        | 8 second- |<------------------>|    12     |
        | ary axes  |                    | paradigms |
        +-----------+                    +-----+-----+
                                               |
                                       +-------+-------+
                                       |               |
                                       v               v
                              +--------+----+   +-----+----+
                              | E7+E8       |   |   E9     |
                              | REFINES     |   | /explore |
                              | body + map  |   | addition |
                              +-------------+   +----------+
                                       ^
                                       | (frontmatter)
                                       |
                                       E6

      Cross-cutting (broadcast to all pieces):
      E5 vocabulary stack
      E10 classification guidance (attached to E4)
      E11 revisability clause
      E12 stability layering note
```

### Clusters

- **Cluster A:** E1 + E2 — strongly coupled; single piece (definition + primary axes).
- **Cluster B:** E3 — moderately coupled to A; can be its own piece (secondary axes).
- **Cluster C:** E4 + E10 — paradigms + classification guidance; classification guidance reads naturally as a sub-section right after paradigm enumeration.
- **Cluster D:** E6 + E7 + E8 — REFINES (frontmatter + body section + kind-to-paradigm mapping table).
- **Cluster E:** E9 — applied `/explore` addition.
- **Cross-cutting:** E5 (vocabulary), E11+E12 (revisability + stability layering).

---

## Step 2 — Detect Boundaries (Top-Down)

Five natural boundaries between clusters. Cuts proposed at the moderate-coupling valleys:

| Boundary | Cuts between | Coupling at cut | Notes |
|---|---|---|---|
| B1 | A and B | moderate | Primary axes are load-bearing; secondary axes are refinements. Clean cut. |
| B2 | A+B and C | moderate | Axes generate paradigm space; paradigms are clusters. Clean cut with explicit interface (axes → paradigms). |
| B3 | A+B+C and D | one-way | New model must exist before REFINES describes what's added. Clean dependency-based cut. |
| B4 | A+B+C and E | one-way | `/explore` addition depends on paradigms being defined. Clean dependency-based cut. |
| B5 (cross-cutting) | E5/E11/E12 vs all content pieces | weak-broadcast | Cross-cutting notes embedded in the finding's structure (vocabulary at top; stability tiering inline with each layer; revisability inline with the paradigm enumeration). No separate piece needed. |

### Pieces (top-down)

- **Piece 1 (P1):** Minimum-core definition + 4 primary axes
- **Piece 2 (P2):** 8 secondary axes
- **Piece 3 (P3):** 12 crystallized paradigms + classification guidance
- **Piece 4 (P4):** REFINES relationship (frontmatter + body section + kind-to-paradigm mapping)
- **Piece 5 (P5):** Applied use to `/explore` (the optional §1 Identity addition)

Cross-cutting: vocabulary stack at finding-top; stability + revisability inline.

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Irreducible atoms

- a1: the one-sentence definition of mapping
- a2: each of the 4 primary axis names + one-liners (4 atoms)
- a3: each of the 8 secondary axes (8 atoms)
- a4: each of the 12 paradigm names + one-liners (12 atoms)
- a5: the vocabulary stack note (1 atom)
- a6: the classification rule (1 atom)
- a7: the revisability clause (1 atom)
- a8: the stability layering note (1 atom)
- a9: the REFINES frontmatter (1 atom)
- a10: "what's preserved" statement (1 atom)
- a11: "what's added" statement (1 atom)
- a12: kind-to-paradigm mapping table (1 atom; 7 rows)
- a13: meta-lesson about layer-shift semantics (1 atom)
- a14: `/explore` addition paragraph (1 atom)
- a15: COULD-action note flagging this as optional secondary (1 atom)

### Bottom-up grouping

| Atom | Cluster |
|---|---|
| a1 + 4 of a2 | Cluster A → P1 |
| 8 of a3 | Cluster B → P2 |
| 12 of a4 + a6 + a7 | Cluster C → P3 |
| a9 + a10 + a11 + a12 + a13 | Cluster D → P4 |
| a14 + a15 | Cluster E → P5 |
| a5 + a8 | Cross-cutting |

The bottom-up grouping matches the top-down boundaries. **No atoms are split across pieces.** No atoms grouped together that are actually independent.

### Confidence

**HIGH — top-down and bottom-up agree on all 5 pieces.**

---

## Step 4 — Express as Question Tree

### P1. What IS mapping at the meta level, and what are the 4 primary axes that specify any specific mapping?

**Verification criteria:**
- [ ] Minimum-core definition written as one clear sentence
- [ ] All 4 primary axes named (what-preserved, encoding-type, operational-act, purpose) with one-line description each
- [ ] Stability note: definition is stable across paradigms
- [ ] No external references needed to read this piece (self-contained)

**Sub-pieces:**
- **P1.1** Minimum-core definition sentence
- **P1.2** Four primary axes named with one-liners
- **P1.3** Stability note (this layer is stable)

### P2. What 8 secondary axes refine the paradigm space within primary axis cells?

**Verification criteria:**
- [ ] All 8 secondary axes named (scope, reference-frame, meta-level, origin, output-form, temporality, fidelity, viewpoint) with one-line description each
- [ ] Note on relationship to primary axes (secondary axes refine, do not generate)
- [ ] Note on calibration-state (stable-ish; some axes could be promoted or demoted)

**Sub-pieces:**
- **P2.1** Eight secondary axes named with one-liners
- **P2.2** Relationship-to-primary note

### P3. What named mapping paradigms exist at this meta level, and how does a reader classify a new mapping into the framework?

**Verification criteria:**
- [ ] All 12 paradigms named with one-line "what's preserved" descriptions
- [ ] Each paradigm grounded in established literature (named domain)
- [ ] Classification guidance: a procedure for placing a new mapping into one or more paradigms
- [ ] Revisability clause: the 12-paradigm enumeration is empirical; new paradigms may surface; some may merge under finer analysis
- [ ] Note on compositionality: real mappings often compose multiple paradigms (e.g., a process map IS process + relational)

**Sub-pieces:**
- **P3.1** Twelve paradigms named with one-liners + literature-grounding tags
- **P3.2** Classification guidance (the rule for placing a new mapping)
- **P3.3** Revisability clause + compositionality note

### P4. How does this finding relate to the prior identity-refresh finding, and what is preserved vs added?

**Verification criteria:**
- [ ] Frontmatter `refines:` field referencing the prior path
- [ ] Body "Changes from Prior" section with: revision trigger, what's preserved, what's added (no "what's corrected" because nothing is corrected — this is layer-shift, not lateral revision), what's repositioned (the prior 7-kinds becomes a `/explore`-scoped projection of meta-paradigms)
- [ ] Mapping table: each prior kind → which meta-paradigm(s) it maps onto
- [ ] Meta-lesson preserved: layer-shift semantics — REFINES = preserves at original level + adds deeper level

**Sub-pieces:**
- **P4.1** Frontmatter declaration (`refines:`)
- **P4.2** Body "Changes from Prior" section
- **P4.3** Kind-to-paradigm mapping table

### P5. How does this framework apply specifically to `/explore`, as an optional secondary deliverable?

**Verification criteria:**
- [ ] One-paragraph addition for `/explore` §1 Identity naming the 6-paradigm subset (CART, TAX, REL, COV, CONST, POSS) that `/explore` produces
- [ ] Explicit NOT-list-scoping note for the other 6 paradigms (FUNC, EMB, PROC, NAV, REFL, ANALOG belong to other disciplines or specializations)
- [ ] COULD-action note flagging this as optional secondary deliverable (the primary deliverable is the meta-doc itself)
- [ ] Reference to `/explore`'s §1.3 NOT-list as the scoping mechanism

**Sub-pieces:**
- **P5.1** The addition paragraph (drop-in spec text)
- **P5.2** COULD-action note (optional secondary)

### Cross-cutting (no top-level piece; embedded across pieces)

- **CC1** Vocabulary stack at finding-top — definition / axis / paradigm / kind / instance terminology hierarchy
- **CC2** Stability layering — inline notes on each layer's stability tier

---

## Step 5 — Interface Map

### Inter-piece interfaces

| Source | Target | What flows | Direction | Type |
|---|---|---|---|---|
| P1 | P2 | The 4 primary axes (P2's secondary axes refine within primary axis cells) | one-way | conceptual prerequisite |
| P1 | P3 | The compositional structure (a paradigm = coherent cluster of axis-values) | one-way | conceptual prerequisite |
| P2 | P3 | Secondary axes (some paradigms differ on secondary axes only — e.g., NAV vs CART differ on viewpoint axis C2 vs C1) | one-way | conceptual prerequisite |
| P1+P2+P3 | P4 | The new model (REFINES's "What's added" cannot be stated without the new model articulated) | one-way | content prerequisite |
| P3 | P5 | The 12 paradigms (P5's `/explore`-subset claim depends on all 12 being enumerated) | one-way | content prerequisite |
| P4 | P5 (weak) | The REFINES context (P5's framing benefits from the prior-relationship context but does not strictly require it) | one-way | weak/optional |
| CC1 (vocabulary) | P1, P2, P3, P4, P5 | Terminology consistency | broadcast | cross-cutting |
| CC2 (stability) | P1, P2, P3 | Stability tier per layer | broadcast | cross-cutting |

### Hidden coupling — assumptions check (per Step 5 refinement)

For each interface, what assumptions does each piece make about what the other provides?

- **P1 ↔ P3:** P1 assumes "paradigm = cluster in axis-space"; P3 must use the SAME framing. **Risk:** if P3 describes paradigms as something other than axis-clusters (e.g., as cognitive prototypes), P1's primary-axes framing becomes ungrounded.  
  **Mitigation:** P1 wording explicitly names the assumption: "...specified by which structural feature is preserved, what target medium encodes it, what operation produces it, what purpose it serves." P3 wording confirms: "Each paradigm is a coherent cluster of axis-values that historically appears together as a recognizable way of mapping."

- **P3 ↔ P5:** P3 says "12 paradigms"; P5 says "`/explore` produces 6 of 12." **Risk:** if P3 changes count (paradigms merge or new ones surface), P5's "6 of N" must update.  
  **Mitigation:** P5's wording uses NAMES not COUNTS — "/explore produces Cartographic, Taxonomic, Relational, Coverage, Constraint, Possibility paradigms; it does not produce Functional, Embedding, Process/Behavioral, Navigational, Reflexive, or Analogical paradigms (these belong to other disciplines per the NOT-list)." Robust against count changes.

- **P4 ↔ Prior finding:** P4's "what's preserved" assumes the prior finding's 7-kinds claims map onto the meta-paradigms cleanly. **Risk:** if the mapping is contested (e.g., "concept-mapping" doesn't cleanly fit one paradigm), P4's claim weakens.  
  **Mitigation:** P4.3 (kind-to-paradigm mapping) is its own sub-piece; it makes the mapping explicit and addressable. Multi-paradigm overlaps are named (e.g., "concept-mapping → primarily Taxonomic + Relational depending on whether concept-membership or concept-relations is the focus").

- **P5 ↔ `/explore` spec:** P5's addition assumes `/explore`'s §1 Identity and §1.3 NOT-list exist and are stable. **Risk:** if `/explore`'s spec is undergoing restructure, the addition's target location may shift.  
  **Mitigation:** P5 is flagged as COULD (optional secondary); if `/explore` restructures, the addition can re-target without invalidating the primary meta-doc.

No hidden coupling not addressed.

---

## Step 6 — Dependency Order

### Phase 1 (foundation)

- **P1** — Minimum-core definition + 4 primary axes
  - Standalone; no dependencies on other pieces
  - Must be drafted first

### Phase 2 (axes refinement + paradigms in sequence)

- **P2** — 8 secondary axes — depends on P1 (refines primary axes)
- **P3** — 12 paradigms + classification + revisability — depends on P1 + P2

P2 and P3 are sequential because P3 references P2 (some paradigms differ on secondary axes); but they're close enough in cognitive proximity that drafting them as one focused pass is feasible. The decomposition allows either parallel-P2-and-P3 or sequential.

### Phase 3 (relationship + applied — parallelizable)

- **P4** — REFINES relationship — depends on P1+P2+P3
- **P5** — `/explore` addition — depends on P3

P4 and P5 can be drafted in parallel.

### Cross-cutting (any time)

- **CC1** Vocabulary stack — drafted alongside P1
- **CC2** Stability layering — inline with each layer; drafted alongside P1/P2/P3

### Dependency diagram

```
P1 (def + primary axes)
  ├── P2 (secondary axes)
  │     └── P3 (paradigms + classification + revisability)
  │           ├── P4 (REFINES) ----- parallel ----- P5 (/explore addition)
  │           |
  │           (CC1 vocabulary, CC2 stability layering — embedded)
```

No circular dependencies. Sequential bottleneck: P1 → P2 → P3 must complete before P4 || P5.

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each piece's question answerable without sibling pieces (except through interfaces) | **PASS.** P1 is self-contained. P2, P3 reference earlier pieces but can be drafted given their interfaces are satisfied. P4, P5 depend on prior content via declared interfaces. |
| **Completeness** | No aspect of the finding falls through gaps | **PASS.** Five pieces cover: definition, primary axes (in P1); secondary axes (P2); paradigms + classification + revisability (P3); prior-relationship (P4); applied use to /explore (P5). Cross-cutting vocabulary + stability layering embedded. |
| **Reassembly** | Pieces + interfaces reconstruct the whole | **PASS.** A reader reading P1 → P2 → P3 → P4 → P5 (with CC1, CC2 embedded) acquires: what mapping IS, what the generative axes are, what named paradigms exist with how-to-classify guidance, how this finding relates to the prior, and the optional `/explore` addition. The framework is fully reconstructable. |

### Determination-mechanism piece check (Step 7 refinement)

Load-bearing concepts: "paradigm" and "the 12 crystallized paradigms."

Neither depends on a runtime determination — this is a meta-theoretical/descriptive finding, not an operational one. The check at "runtime" is N/A.

**However**, the framework's USE involves a use-time classification: a reader who has a new mapping in hand asks "which paradigm is this an instance of?" This is the structural analog of a runtime determination. The Q-tree must address how the classification is performed.

**P3.2 (Classification guidance) is the piece that addresses this.** It states the rule for placing a new mapping into one or more paradigms (e.g., "identify which structural feature the mapping preserves; locate that feature in the primary axis Region A; the paradigm whose preserved-structure matches is the classification").

**Check PASSES** — the Q-tree includes a piece addressing the classification mechanism. If P3.2 were omitted, the check would fail (Missing Pieces).

### Full evaluation (7 dimensions)

| Dimension | Verdict | Notes |
|---|---|---|
| Independence | PASS | All pieces independently draftable given interfaces |
| Completeness | PASS | No gaps in the meta-paradigm framework |
| Reassembly | PASS | Pieces + interfaces reconstruct the whole; classification guidance addresses use-time determination |
| Tractability | PASS | Each piece small enough for one focused pass. Estimated effort: P1 ~15 min, P2 ~10 min, P3 ~25 min (largest), P4 ~10 min, P5 ~5 min. Total ~65 min. |
| Interface clarity | PASS | All inter-piece interfaces explicit; assumptions named in the interface table; hidden-coupling mitigations spelled out |
| Balance | PASS | P3 (paradigms + classification + revisability) is largest because it has 12 paradigm one-liners; this is proportional content, not imbalance. Other pieces are 5-15 min each. |
| Confidence | HIGH | Top-down and bottom-up boundaries agreed on all 5 pieces |

### Failure mode check

- **Premature decomposition:** No — sensemaking produced a stable 3-layer model with 4 adjudications resolved before decomposition began.
- **Wrong boundaries:** No — boundaries cut at moderate-coupling valleys (between definition+primary-axes / secondary-axes / paradigms / REFINES / /explore-addition); high-coupling clusters (E1+E2; E7+E8) preserved within single pieces.
- **Hidden coupling:** Addressed — 4 hidden-coupling assumptions surfaced (P1↔P3 axis-cluster framing; P3↔P5 count vs names; P4↔prior 7-kinds-to-paradigms mapping; P5↔`/explore` spec stability) and mitigated.
- **Missing pieces:** Addressed — P3.2 (classification guidance) explicitly added to handle the use-time determination check.
- **Over-decomposition:** No — 5 pieces with 2-3 sub-pieces each is appropriate for a 5-section finding. No piece is trivially small.
- **Ignoring dependencies:** Addressed — explicit dependency order (P1 → P2 → P3 → {P4 || P5}).
- **Imbalanced decomposition:** No — P3 is largest (12 paradigm one-liners) but content-proportional, not effort-disproportional.

**No failure modes fire.**

---

## Final Deliverable Summary

### Coupling map

5 clusters (Cluster A: definition+primary axes; Cluster B: secondary axes; Cluster C: paradigms+classification; Cluster D: REFINES; Cluster E: `/explore` addition) with 2 cross-cutting elements (vocabulary stack, stability layering).

### Question tree

5 top-level pieces:
- P1: What IS mapping + 4 primary axes?
- P2: What 8 secondary axes refine the space?
- P3: What 12 paradigms exist + classification + revisability?
- P4: How does this REFINE the prior identity-refresh finding?
- P5: How does this apply to `/explore` (optional)?

13 sub-pieces total (P1: 3, P2: 2, P3: 3, P4: 3, P5: 2).

### Interface map

7 inter-piece interfaces + 2 cross-cutting broadcasts. All explicit; hidden-coupling assumptions named.

### Dependency order

- Phase 1: P1
- Phase 2: P2, then P3 (sequential; P3 depends on P2 for some paradigms)
- Phase 3: P4 || P5 (parallelizable)
- Cross-cutting: drafted alongside

### Self-evaluation

- Minimum 3 dimensions: PASS / PASS / PASS
- Determination-mechanism check: PASS (P3.2 addresses use-time classification)
- Full 7 dimensions: PASS on all
- Failure modes: none firing
- Confidence: HIGH

**Output: PROCEED to Innovation.**
