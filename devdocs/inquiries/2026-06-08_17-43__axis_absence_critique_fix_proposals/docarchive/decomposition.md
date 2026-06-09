## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-08_17-43__axis_absence_critique_fix_proposals/_branch.md`

Plus the surfacing.md + sensemaking.md (SV6) in the same folder.

---

## Step 1 — Coupling Topology

### Elements in the proposal-design problem

| E# | Element | Description |
|---|---|---|
| E1 | Identity statement | Axis Absence essence + precondition-violation relationship to #4 + distinction from #1 |
| E2 | Sub-mechanism × location coverage map | 3 sub-mechanisms × 4 candidate spec locations with strength ratings |
| E3 | Tier-1 (Surgical) proposal | Concrete refinement-note-pattern edit |
| E4 | Tier-2 (Additional) proposal | Concrete new-failure-mode-entry edit |
| E5 | Tier-3 (Significant) proposal | Concrete hook-table-restructure edit |
| E6 | Per-proposal mechanism description | How each proposal traps Axis Absence |
| E7 | Per-proposal location specification | Which of 4 candidate spec locations |
| E8 | Per-proposal sub-mechanism coverage | Which of 3 sub-mechanisms addressed |
| E9 | Per-proposal trade-off analysis | Plus/minus per 5 trade-off axes |
| E10 | Per-proposal retroactive corpus test | Which of 9 corpus instances would it have caught |
| E11 | Per-proposal external-grounding citation | Corpus pair + codebase precedent references |
| E12 | Per-proposal nitpicking-creep mitigation | Statement of how it avoids identity-drift |
| E13 | Cross-proposal comparison | Adjudication table across all proposals |
| E14 | Picker recommendation | Per-scenario guidance for which proposal to pick |

### Coupling analysis

| Element pair | Coupling strength | Reasoning |
|---|---|---|
| E1 ↔ E2 | STRONG | Identity (precondition-violation) and coverage map (which sub-mechanism × location) co-define the substrate; co-evolve. |
| E1, E2 → E3, E4, E5 | STRONG (downstream) | All 3 tier-proposals must respect E1's distinction and use E2's coverage map. One-way flow. |
| E3 ↔ E4 ↔ E5 | MODERATE (mediated) | Tier-distinctness is mediated through shared tier definitions; not direct coupling to siblings' content. |
| E6, E7, E8, E9, E10, E11, E12 (within one proposal) | STRONG | Per-proposal facets are tightly coupled: mechanism determines location determines coverage determines trade-offs etc. |
| E6-E12 (across proposals) | WEAK | Tier-1's mechanism is independent of Tier-2's mechanism (they're different mechanism choices). |
| E3, E4, E5 → E13 | STRONG (aggregating) | Comparison can't be computed until all 3 proposals exist. |
| E13 → E14 | STRONG (sequential) | Picker recommendation depends on comparison results. |

### Coupling map (coarse)

```
                      ┌─────────────────────────┐
                      │  CLUSTER A — Substrate  │
                      │   E1 (Identity)         │
                      │   E2 (Coverage map)     │
                      │   E3-tier-shapes        │
                      └────────┬────────────────┘
                               │ substrate flow
                               ▼
        ┌────────────────────────────────────────────┐
        │  CLUSTER B — Per-tier Proposals (3 siblings)│
        │  ┌────────────┐ ┌─────────┐ ┌─────────────┐ │
        │  │  Surgical  │ │Additional│ │ Significant │ │
        │  │ (E3 + facets)│ │(E4+facets)│ │(E5+facets) │ │
        │  └────────────┘ └─────────┘ └─────────────┘ │
        └────────────────────────────────────────────┘
                               │ aggregation flow
                               ▼
                      ┌─────────────────────────┐
                      │  CLUSTER C — Adjudicate │
                      │   E13 (Comparison)      │
                      │   E14 (Picker guide)    │
                      └─────────────────────────┘
```

**3 clusters at high resolution; major boundaries between clusters; per-tier siblings within Cluster B share moderate coupling via tier-distinctness verification.**

### Tier-shape definitions piggybacking on Cluster A

The 3 tier-shape definitions (surgical = refinement-note; additional = new failure-mode entry; significant = hook-table restructure) are FIXED by codebase precedent, not freshly designed by this inquiry. They sit in Cluster A as substrate, not in Cluster B as content. This is critical for the boundary between A and B.

---

## Step 2 — Boundaries (Top-Down)

### Initial boundary set

| Boundary | Between | Crossing traffic |
|---|---|---|
| B1 | Cluster A ↔ Cluster B | Substrate flow (essence + distinction + coverage map + tier shapes); one-way A → B |
| B2 | Within Cluster B — between sibling proposals | Tier-distinctness verification (mediated through Cluster A's tier definitions); minimal direct cross-sibling traffic |
| B3 | Cluster B ↔ Cluster C | Aggregation flow (each proposal's facets); one-way B → C |
| B4 | Within Cluster C — between Comparison and Picker | Sequential flow (comparison → picker guidance); one-way E13 → E14 |

### Boundary quality

| Boundary | Low crossing? | Clear interface? | Hidden coupling? |
|---|---|---|---|
| B1 | YES (substrate is well-defined) | YES (essence + coverage map + tier shapes) | NONE detected |
| B2 | YES (each proposal internally coherent) | YES (tier-distinctness via shared tier shapes) | NONE detected (each proposal verifies via P2, not via siblings' content) |
| B3 | YES (proposals' facets are clean inputs to comparison) | YES (5 trade-off axes are the contract) | NONE detected |
| B4 | YES (sequential) | YES (comparison output is the picker's input) | NONE detected |

**All 4 boundaries pass the 3 quality criteria.**

---

## Step 3 — Boundaries (Bottom-Up Validation)

### Obvious atoms

- **A1** — A single refinement-note sentence (the surgical edit's actual text): atomic.
- **A2** — A single failure-mode table row (Mode | Recognition | Prevention): atomic.
- **A3** — A hook entry in a hook-table (Hook | Inspection point | Calibration): atomic.
- **A4** — Per-proposal corpus instance retroactive-test result (e.g., "Would this proposal have caught pair X? YES/NO/PARTIAL"): atomic.
- **A5** — Per-proposal trade-off entry (one cell in the 5-axis plus/minus matrix): atomic.
- **A6** — Essence statement (1-3 sentences): atomic.
- **A7** — Precondition-violation claim (one structural sentence): atomic.
- **A8** — Coverage map cell (one location × one sub-mechanism strength rating): atomic.

### Atom-cluster validation

- A1 belongs in the Surgical proposal (P3). A2 belongs in the Additional proposal (P4). A3 belongs in the Significant proposal (P5). These atoms are correctly partitioned into per-tier pieces. ✓
- A4 (corpus-test) and A5 (trade-off) are per-proposal facets, correctly inside each per-tier piece. ✓
- A6 + A7 (essence + precondition-violation) belong in Cluster A's P1 (Identity & Distinction). ✓
- A8 (coverage map cells) belong in Cluster A's P2 (Sub-mechanism × location map). ✓

**Top-down and bottom-up agree on boundaries.** All atoms group consistently with the cluster topology.

### Boundary confidence

- B1: HIGH (top-down + bottom-up agree)
- B2: HIGH (top-down + bottom-up agree)
- B3: HIGH (top-down + bottom-up agree)
- B4: HIGH (top-down + bottom-up agree)

---

## Step 4 — Question Tree

### P1 — Identity & Distinction

**Question:** What is Axis Absence's essence as a critique failure type, and how does it structurally differ from existing Wrong Dimensions (#1) and Dimension Blindness (#4)?

**Verification criteria:**
- [ ] Essence statement (1-3 sentences) capturing construction-vs-detection distinction
- [ ] Precondition-violation relationship to #4 articulated structurally
- [ ] Distinction test: stating the strongest counter-interpretation (axis absence is just dimension blindness) and refuting on structural grounds (silent prevention-precondition failure)
- [ ] 3-sub-mechanism naming with distinct loci (upstream / stage-local / intrinsic)

**Inversion-candidate (for Innovation):** Axis Absence is NOT structurally distinct from #4; the precondition-violation reading is over-engineering; #4's existing recognition wording can be edited to explicitly include the "sensemaking-under-covered" case, eliminating the need for a new failure type at all.

---

### P2 — Sub-mechanism × Location Coverage Map AND Tier-Shape Definitions

**Question:** What is the strength-rated coverage map of the 3 sub-mechanisms × 4 candidate spec locations, AND what structurally distinguishes the 3 edit tiers per codebase precedent?

**Verification criteria:**
- [ ] 3 × 4 coverage table with STRONG / MEDIUM / WEAK ratings per cell
- [ ] Per-tier shape definition (surgical = refinement-note pattern; additional = new failure-mode entry; significant = hook-table restructure)
- [ ] Per-tier codebase precedent cited (existing refinement-notes; surfacing modes 8+9; sensemaking Meta-Inspection)
- [ ] Per-tier mechanical constraint (what changes in spec; what doesn't)
- [ ] Test: would a hypothetical "very small significant rewrite" be tier-distinct from "very large surgical"? Resolve with structural argument.

**Inversion-candidate (for Innovation):** The 3 tiers are NOT structurally distinct — they're points on a continuum; the codebase precedent classification is arbitrary; a 4-tier or 2-tier or continuum framing would serve as well or better.

---

### P3 — SURGICAL Proposal (Tier 1)

**Question:** What is the concrete SURGICAL proposal — a refinement-note-pattern edit to td-critique.md — that addresses Axis Absence?

**Verification criteria:**
- [ ] Specific spec section + insertion point named (e.g., "Phase 0 § Dimension Construction, after sub-step 3 'validate dimensions'")
- [ ] Refinement-note text drafted at refinement-note style (trigger condition + sub-check wording)
- [ ] Sub-mechanism coverage map: which of (i) (ii) (iii) does it address, at what strength?
- [ ] Retroactive corpus test: which of 9 corpus instances would it have caught (cite ≥3)?
- [ ] Plus/minus per 5 trade-off axes (prevention-leverage / cost / coverage / extensibility / nitpicking-creep risk)
- [ ] Nitpicking-creep mitigation: explicit statement (e.g., "fires only when sensemaking output shows X")
- [ ] External grounding citation (≥1 corpus pair + ≥1 codebase precedent)

**Inversion-candidate (for Innovation):** DO NOT add a Phase 0 refinement-note — the existing "validate dimensions" wording is sufficient; any addition produces nitpicking-creep without proportionate prevention.

---

### P4 — ADDITIONAL Proposal (Tier 2)

**Question:** What is the concrete ADDITIONAL proposal — a new failure-mode entry in §4 — that addresses Axis Absence?

**Verification criteria:**
- [ ] New §4 failure-mode entry text drafted with Mode + Recognition + Prevention fields parallel to existing modes
- [ ] Failure-mode number decision (mode #8 / #10 / something else) with rationale
- [ ] SKILL.md description update implications named (the failure-modes enumeration list in `description:`)
- [ ] Sub-mechanism coverage map: which of (i) (ii) (iii) does it address, at what strength?
- [ ] Retroactive corpus test: which of 9 corpus instances would it have caught (cite ≥3)?
- [ ] Plus/minus per 5 trade-off axes
- [ ] Nitpicking-creep mitigation
- [ ] External grounding citation

**Inversion-candidate (for Innovation):** DO NOT add a new failure-mode entry — instead edit existing #4 Dimension Blindness's Recognition and Prevention text to make the precondition-violation case explicit; this stays within the existing 7-mode structure and avoids linear growth.

---

### P5 — SIGNIFICANT Proposal (Tier 3)

**Question:** What is the concrete SIGNIFICANT proposal — a restructuring of td-critique.md's organizing principle (e.g., adopting a hook-table pattern from sensemaking's Meta-Inspection) — that addresses Axis Absence?

**Verification criteria:**
- [ ] Restructured organizing principle named (e.g., "linear failure modes → hook-table with generative meta-question")
- [ ] Migration plan: which existing §4 modes absorb under which hooks (1, 2, 3, ..., 7 → H1, H2, ..., HN)
- [ ] Generative meta-question text drafted (e.g., "Does the dimension space span the failure space?" or analog)
- [ ] Axis Absence as a hook entry with sub-aspects (sub-mechanisms i, ii, iii)
- [ ] SKILL.md description update implications named
- [ ] Sub-mechanism coverage map at hook-table level
- [ ] Retroactive corpus test: which of 9 corpus instances would it have caught (cite ≥3)?
- [ ] Plus/minus per 5 trade-off axes including FUTURE-extensibility (sub-linear growth)
- [ ] Nitpicking-creep mitigation
- [ ] External grounding citation (sensemaking Meta-Inspection precedent is mandatory)

**Inversion-candidate (for Innovation):** DO NOT restructure §4 into a hook-table — the linear failure-mode pattern is appropriate for critique's smaller failure-mode count; the hook pattern is over-engineering at this scale. Hold the linear pattern.

---

### P6 — Comparative Adjudication & Picker Recommendation

**Question:** Across the 3 proposals, what is the comparative trade-off picture along the 5 trade-off axes, and what per-scenario picker recommendation helps the user choose?

**Verification criteria:**
- [ ] Cross-proposal comparison table: rows = 3 proposals, columns = 5 trade-off axes, cells = strength rating + 1-line justification
- [ ] Per-scenario picker recommendation (e.g., "if cost-constrained → P3; if future-extensibility valued → P5; if minimum-disruption + maximum-coverage → P4")
- [ ] Honest acknowledgment of which proposals dominate / are dominated on which axes
- [ ] Recommendation on whether any proposal "wins" overall vs. context-dependent

**Inversion-candidate (for Innovation):** DO NOT provide a picker recommendation — present all 3 proposals with equal weight and let the user decide; recommendation imposes the inquiry-author's bias on the user's context.

---

## Step 5 — Interface Map

### Interface contracts

| Source | Target | Flow type | Content |
|---|---|---|---|
| P1 (Identity) | P3, P4, P5 | Substrate, one-way | Axis Absence essence + precondition-violation relationship + distinction from #1/#4 |
| P2 (Coverage map + Tier shapes) | P3 | Tier shape constraint + coverage cells, one-way | Surgical tier shape (refinement-note pattern); Phase 0 coverage cells |
| P2 | P4 | Tier shape constraint + coverage cells, one-way | Additional tier shape (new failure-mode entry); §4 coverage cells |
| P2 | P5 | Tier shape constraint + coverage cells, one-way | Significant tier shape (hook-table restructure); all-location coverage cells |
| P3 | P6 | Proposal articulation, one-way | Mechanism + location + coverage + 5 trade-offs + corpus test |
| P4 | P6 | Proposal articulation, one-way | Mechanism + location + coverage + 5 trade-offs + corpus test |
| P5 | P6 | Proposal articulation, one-way | Mechanism + location + coverage + 5 trade-offs + corpus test |
| P3 ↔ P4 ↔ P5 | (each other, via P2) | Tier-distinctness verification, mediated | Each proposal checks its tier-distinctness against P2's tier definitions, not against siblings' content |

### Assumptions-not-data check (refinement note)

What ASSUMPTIONS do downstream pieces make about upstream?

| Assumption | Risk if violated |
|---|---|
| P3, P4, P5 assume P1's essence-statement is stable and won't shift during their articulation. | If P1 shifts, all 3 proposals lose grounding. Mitigation: P1 finalized before P3/P4/P5 start. |
| P3 assumes P2's surgical-tier mechanical constraint is precise enough to prevent drift into "actually this is additional-tier". | If P2's tier boundary is fuzzy, tier-distinctness verification fails. Mitigation: P2 cites codebase precedents per tier. |
| P3, P4, P5 assume the 5 trade-off axes from SV6 are stable across all proposals. | If trade-off axes vary per proposal, comparison (P6) becomes apples-vs-oranges. Mitigation: trade-off axes locked at SV6; carried into P6 unchanged. |
| P6 assumes all 3 proposals are complete and tier-distinct. | If one proposal collapses into another's tier, the comparison degenerates. Mitigation: tier-distinctness verification is per-proposal acceptance criterion. |
| P6 assumes the user has a context that picker recommendations can address. | If the user's context isn't named, recommendations are speculative. Mitigation: P6 explicitly says "if cost-constrained" / "if future-extensibility valued" etc., named scenarios not assumed contexts. |

**Hidden coupling check passes.** No hidden coupling detected; all assumptions surfaced and have mitigation pathways.

---

## Step 6 — Dependency Order

### Stage-by-stage order

| Stage | Pieces | Type | Dependencies |
|---|---|---|---|
| **Stage 1** | P1, P2 | Parallel | None (substrate definition) |
| **Stage 2** | P3, P4, P5 | Parallel | P1, P2 both complete |
| **Stage 3** | P6 | Sequential | P3, P4, P5 all complete |

### Circular dependency check

No circular dependencies. Tier-distinctness verification within Stage 2 is mediated through P2 (Stage 1), not through sibling content.

### Critical path

P1 → P3, P4, P5 (parallel) → P6. Critical path length = 3 stages.

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions

| Dimension | Check | Pass/Fail |
|---|---|---|
| **Independence** | Each piece's question answerable without reading sibling pieces (except via interfaces)? | PASS. P3 doesn't need to read P4 or P5; needs P1 + P2 substrate. |
| **Completeness** | Pieces cover the whole? | PASS. P1 (essence) + P2 (substrate map + tier shapes) + P3/P4/P5 (per-tier proposals) + P6 (comparison) covers the design problem. |
| **Reassembly** | Pieces + interfaces reconstruct the whole? | PASS. Given all 6 pieces answered + interfaces satisfied → the original problem ("≥3 tier-distinct proposals with mechanism + plus/minus + comparison") is solved. |

### Additional 4 dimensions

| Dimension | Check | Pass/Fail |
|---|---|---|
| **Tractability** | Each piece in single focused pass? | PASS. Each piece is one Innovation pass. P5 is largest but tractable. |
| **Interface clarity** | All cross-piece flows explicit? | PASS. 8 interfaces named; assumptions-not-data check applied. |
| **Balance** | Complexity proportional across pieces? | PARTIAL — P5 (significant rewrite) is heavier than P3 (surgical) because the artifact is larger. ACCEPTABLE: this is intrinsic to the problem (significant > additional > surgical in artifact size); not a decomposition flaw. |
| **Confidence** | Top-down + bottom-up agree? | PASS. All 4 boundaries HIGH confidence per Step 3. |

### Determination-mechanism piece check (refinement note)

Q-tree pieces reference "Axis Absence is recognized at runtime when [X]" in each proposal's mechanism description. Does any piece address HOW the recognition fires?

- P3's mechanism: refinement-note triggers at "validate dimensions" sub-step → recognition is in the proposal's refinement-note text itself
- P4's mechanism: failure-mode entry's Recognition field → recognition is in the entry text
- P5's mechanism: hook's calibration column → recognition is via the meta-question generative pattern

**Each proposal piece addresses HOW its recognition mechanism works.** No determination-mechanism piece missing. PASS.

### Piece-Level Inversion Rule check

Per `_branch.md` notes, this is a META-DECISION inquiry. Every piece needs an explicit Inversion-candidate:

| Piece | Inversion-candidate present? |
|---|---|
| P1 | YES — "Not structurally distinct from #4; edit #4's text instead" |
| P2 | YES — "Tiers are a continuum, not discrete shapes" |
| P3 | YES — "Don't add the refinement-note" |
| P4 | YES — "Don't add a new entry; edit existing #4" |
| P5 | YES — "Don't restructure; hold linear pattern" |
| P6 | YES — "Don't recommend; present neutrally" |

**All 6 pieces have explicit Inversion-candidates.** Innovation can test contrarian alternatives per piece.

### Failure modes check

| Mode | Triggered? | Evidence |
|---|---|---|
| 1. Premature decomposition | NO | Sensemaking SV6 stabilized substrate before decomposition started |
| 2. Wrong boundaries | NO | Bottom-up validates top-down at all 4 boundaries |
| 3. Hidden coupling | NO | Assumptions-not-data check applied; 5 assumptions surfaced with mitigations |
| 4. Missing pieces | NO | Determination-mechanism check passes; all proposals address recognition |
| 5. Over-decomposition | NO | 6 pieces is appropriate for the design problem's complexity |
| 6. Ignoring dependencies | NO | 3-stage dependency order explicit |
| 7. Imbalanced decomposition | PARTIAL-ACCEPTABLE | P5 heavier than P3, but this is intrinsic to the problem (artifact-size asymmetry across tiers); not a flaw to fix |

---

## Decomposition Verdict

**PROCEED.** 6 pieces with 8 explicit interfaces in 3-stage dependency order. All 4 boundaries HIGH-confidence. Min 3 + additional 4 self-evaluation dimensions evaluated: all PASS or PARTIAL-ACCEPTABLE. All 6 pieces have Inversion-candidates per the Piece-Level Inversion Rule. Failure modes checked; 0 active, 1 partial-acceptable (intrinsic balance).

Downstream Innovation receives:
- 6 pieces (P1-P6) with verification criteria
- 6 Inversion-candidates for contrarian testing
- 8 interfaces with assumption mitigations
- 3-stage parallel/sequential dependency order

---

## Structural Check (Manual)

- ✅ Step 1 — Coupling Map with elements + coupling analysis + cluster diagram
- ✅ Step 2 — Top-down boundary set with 4 boundaries + quality assessment
- ✅ Step 3 — Bottom-up validation with atoms + atom-cluster mapping + confidence
- ✅ Step 4 — Question Tree with 6 pieces, verification criteria, Inversion-candidates
- ✅ Step 5 — Interface Map with 8 interface contracts + assumptions-not-data check
- ✅ Step 6 — Dependency Order in 3 stages, no circular dependencies
- ✅ Step 7 — Self-Evaluation: min 3 dimensions PASS + additional 4 dimensions PASS or PARTIAL-ACCEPTABLE; determination-mechanism check PASS; Piece-Level Inversion Rule satisfied for all 6 pieces; failure modes evaluated
- ✅ Decomposition Verdict (PROCEED)

Structural check: 7/7 steps executed; 6 pieces with all required components; all 4 boundaries validated; all failure modes evaluated.
