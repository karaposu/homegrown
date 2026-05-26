# Decomposition: Maintenance extension to the prior loop_diagnose's design

## User Input

`devdocs/inquiries/2026-05-15_02-05__loop_diagnose__three_explore_sources_faults/_branch.md` plus upstream `exploration.md` (27 candidates) and `sensemaking.md` (8 patterns consolidated to 5 sub-aspects + 2 new dimensions + 1 new attribution category; framework extended from 5 dim + 3 cat to 7 dim + 4 cat; maintenance composition: 2 new pieces + 5 sub-aspect refinements + 1 cross-iteration audit extension to the prior loop_diagnose's 5-piece + 3-sub-assembly + phase-0-audit design).

The whole to decompose: the 8-item maintenance extension produced by this loop_diagnose, layered on top of the prior loop_diagnose's existing maintenance design (which is established context, not re-decomposed here).

---

## Step 1 — Coupling Map

### Atomic elements identified in the maintenance extension

The 8 maintenance items from sensemaking, with their target attachment in the prior loop_diagnose's design:

| ID | Item | Targets prior piece |
|---|---|---|
| a1 | B5 refinement — vocabulary-absorption check during NOT-list restructure | Prior P2 (NOT-list restructure) |
| a2 | B1 refinement — anticipated-use-is-not-trigger-firing rule | Prior P3 (deferral-binding mechanism) |
| a3 | B2 refinement — cross-iteration scope of pipeline-elaboration bias | Prior P4 (self-reference + COULD-vs-MUST gating) |
| a4 | B7 refinement — cross-iteration scope of MUST/COULD drift | Prior P4 (same target as a3; both extend P4 cross-iteration) |
| a5 | B3 refinement — "convention-citation is not authority" note | Prior P5 (anatomy-as-template amendment) |
| a6 | P6 — Synthesis-re-test rule for spec-rewrite inquiries | New sub-section in deferred_governance.md (prior sub-assembly 1) |
| a7 | P7 — User-words-as-constraint default rule | New extension to pre-inquiry redefinition checklist (prior sub-assembly 2) |
| a8 | P-cross — Cross-iteration audit extension to phase-0 audit | New piece extending the prior phase-0 audit (AR-G) |

Plus cross-cutting concerns (per-piece evaluation gates, risk class, verification criteria) — distributed across each piece, not standalone.

### Coupling assessment (pairwise change-propagation)

For each pair: "if I change A, does B need to change?"

**Strong coupling clusters (within the extension):**

- **Cluster I (B1+B5+B3 refinements):** Each refines a DIFFERENT prior piece (P3, P2, P5 respectively). Internally weak coupling — they don't share targets. Group together as "single-target small refinements."
- **Cluster II (B2+B7 refinements):** Both refine prior P4 with cross-iteration scope. They CO-LOCATE and could be implemented as one combined cross-iteration scope addition OR two distinct items. Strong intra-cluster coupling.
- **Cluster III (P6 new piece):** Lives in deferred_governance.md (prior sub-assembly 1). Substrate-shares with prior P3 + P4.
- **Cluster IV (P7 new piece):** Lives in pre-inquiry redefinition checklist (prior sub-assembly 2). Substrate-shares with prior P1.
- **Cluster V (P-cross extension):** Extends prior phase-0 audit. Provides infrastructure that Cluster II's cross-iteration refinements may USE.

**Cross-cluster coupling assessment:**

| From → To | Coupling | Why |
|---|---|---|
| Cluster I (single-target refinements) → respective prior pieces | TIGHT (one-way: refinement attaches to target) | Each refinement is a small addition to one prior piece |
| Cluster II (B2+B7 cross-iteration P4 refinements) → prior P4 | TIGHT (one-way co-located refinements) | Both extend the same target with cross-iteration scope |
| Cluster III (P6) → prior deferred_governance.md (sub-assembly 1) | TIGHT substrate-share | P6 is a sibling sub-section to prior P3+P4 in same file |
| Cluster IV (P7) → prior pre-inquiry redefinition checklist (sub-assembly 2) | TIGHT substrate-share | P7 is a rule extension to the checklist |
| Cluster V (P-cross) → prior phase-0 audit | TIGHT extension | P-cross extends the audit pattern from one-shot to periodic |
| Cluster V (P-cross infrastructure) → Cluster II (B2+B7 cross-iter scopes) | MODERATE (one-way: P-cross provides; B2+B7 consume) | If B2/B7 cross-iter scopes need cumulative-state evidence, P-cross's audit provides it |
| Cluster I/II/III/IV/V → prior loop_diagnose design (UNIVERSAL) | UNIVERSAL PRECONDITION | All extensions assume the prior loop_diagnose's pieces and sub-assemblies have shipped or are shipping |

### Coupling topology summary

Five clusters with primarily tight coupling to their respective targets in the prior loop_diagnose's design (one-way attachment). Within-extension coupling is light except Cluster II (B2+B7 co-located in prior P4) and Cluster V→Cluster II (P-cross provides infrastructure for cross-iter refinements). The strongest cross-cluster coupling is the universal precondition (prior loop_diagnose's pieces and sub-assemblies must exist for these extensions to attach).

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map, the natural cuts:

| Cut | Between | Coupling across cut | Boundary type |
|---|---|---|---|
| B1 | Cluster I (single-target refinements: B1, B5, B3) ↔ Cluster II (P4 cross-iter refinements: B2+B7) | weak | Clean (different targets) |
| B2 | Cluster I ↔ Cluster III (P6 new piece) | weak | Clean (different scopes) |
| B3 | Cluster I ↔ Cluster IV (P7 new piece) | weak | Clean |
| B4 | Cluster I ↔ Cluster V (P-cross extension) | weak | Clean |
| B5 | Cluster II (B2+B7 P4 refinements) ↔ Cluster III (P6) | weak | Clean (P6 is new piece in deferred_governance.md; B2+B7 are refinements to prior P4 elsewhere) |
| B6 | Cluster II ↔ Cluster IV (P7) | weak | Clean |
| B7 | Cluster II ↔ Cluster V (P-cross) | MODERATE (P-cross provides infrastructure; B2+B7 consume) | One-way data: P-cross ships → B2+B7 cross-iter scopes can reference P-cross's audit output |
| B8 | Cluster III (P6) ↔ Cluster IV (P7) | weak | Clean |
| B9 | Cluster III (P6) ↔ Cluster V (P-cross) | weak | Clean |
| B10 | Cluster IV (P7) ↔ Cluster V (P-cross) | weak | Clean |

Five clusters; ten cluster-boundary cuts; the strongest within-extension cross-cluster edge is B7 (Cluster V provides infrastructure to Cluster II, one-way).

**Practical question:** does Cluster I (the 3 single-target refinements with different targets) merit being split into 3 separate pieces, or are they one umbrella piece?

If Cluster I were 3 separate pieces (one per target prior-piece), we'd have 7 pieces total. Each refinement is a 1-line or paragraph-sized addition. The decomposition reference's failure mode #5 (Over-Decomposition) flags "breaking into pieces so small they can't be understood or worked on in isolation." A 1-line refinement is at the edge.

**Decision:** group Cluster I as ONE piece "Refinements to existing prior-loop_diagnose pieces" with 3 sub-refinements documented within its verification criteria. Same logic for Cluster II (which has 2 sub-refinements both targeting prior P4). Total: 5 pieces in this decomposition (Cluster I umbrella; Cluster II umbrella; Clusters III/IV/V each one piece).

Wait — that gives 5 pieces. Let me reconsider whether umbrella'ing Clusters I and II is correct. They have different change-drivers per cluster:
- Cluster I: 3 refinements with 3 different change-drivers (each refines a different prior piece for a different sub-aspect).
- Cluster II: 2 refinements with the SAME target (prior P4) and SAME scope (cross-iteration).

Cluster II's umbrella is justified (same target + same scope). Cluster I's umbrella is more about avoiding over-decomposition than about shared change-driver. I'll go with the umbrella because the sub-refinements are tractable as one focused pass (each is small).

**Final boundary decision:** 5 pieces.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Pick atomic elements and check whether they group naturally into the same clusters Step 2 identified:

- **a3 + a4 (B2 + B7 cross-iter refinements):** both target prior P4. Bottom-up agrees: same cluster (Cluster II umbrella).
- **a1 + a2 + a5 (B5, B1, B3 single-target refinements):** target P2, P3, P5 respectively. Bottom-up agrees: separate change-drivers per refinement, but each is small enough that umbrella is acceptable — group as Cluster I.
- **a6 (P6) + a7 (P7):** different targets (deferred_governance.md vs pre-inquiry checklist), different scopes. Bottom-up agrees: separate pieces (Cluster III, Cluster IV).
- **a8 (P-cross):** distinct extension to phase-0 audit. Bottom-up agrees: separate piece (Cluster V).

**Confidence scoring:** Top-down and bottom-up agree on all cluster boundaries. The umbrella'ing of Cluster I is a structural choice driven by anti-over-decomposition; both alternatives (3 separate pieces vs 1 umbrella) work, umbrella chosen for tractability. **HIGH confidence overall.**

---

## Step 4 — Question Tree

5 pieces, each a question with verification criteria.

### Piece 1 — Cluster I umbrella: Single-target refinements to prior pieces P2, P3, P5

**Question:** What 1-paragraph-each refinements should be added to the prior loop_diagnose's pieces P2 (NOT-list restructure), P3 (deferral-binding mechanism), and P5 (anatomy-as-template amendment) to address the sub-aspect patterns surfaced in this loop_diagnose's exploration?

**Verification criteria:**

- [ ] **B5 refinement** in prior P2 (NOT-list restructure): when restructuring `homegrown/explore/references/explore.md`'s NOT-list, also check for vocabulary-debt-absorption patterns (terminology, naming, cross-discipline references absorbed from ambient project documents). Specifies what to look for and what to do (e.g., move absorbed vocabulary to project-taxonomy notes alongside the NOT-list).
- [ ] **B1 refinement** in prior P3 (deferral-binding): the determination mechanism for "has the revival trigger fired?" explicitly distinguishes (a) trigger objectively fired (e.g., observable count met, condition documented) from (b) anticipated-use justification (e.g., "the new feature requires it operationally"). Anticipated-use is NOT trigger-firing; promotion requires (a). Add this distinction as a 1-paragraph rule in the deferral-binding mechanism.
- [ ] **B3 refinement** in prior P5 (anatomy-flexibility amendment): add a "convention-citation is not authority" note. When a spec-edit cites "N/M references follow X" as load-bearing argument for adoption, treat this as Status Quo Bias evidence requiring justification on /explore-specific (or discipline-specific) grounds. Convention compliance is a starting hint, not a decision.
- [ ] All 3 refinements have evaluation gates (per the calibration constraint: "after the next 3 spec rewrites"-style observable counts).
- [ ] All 3 refinements are documented as additive (do not change the prior piece's primary function).

### Piece 2 — Cluster II umbrella: Cross-iteration scope refinements to prior P4

**Question:** What cross-iteration scope additions should be added to the prior loop_diagnose's piece P4 (self-reference + COULD-vs-MUST gating) so that pipeline-elaboration bias and MUST/COULD drift are tracked across iterations on the same target, not just per-iteration?

**Verification criteria:**

- [ ] **B2 refinement**: prior P4's pipeline-elaboration-bias check fires per-iteration; add cross-iteration tracking that monitors cumulative spec growth across iterations on the same target (e.g., `homegrown/explore/`). Specifies trigger condition (e.g., cumulative spec growth >2× baseline triggers review).
- [ ] **B7 refinement**: prior P4's COULD-vs-MUST gating fires per-iteration; add cross-iteration tracking that monitors MUST resolution across iterations. If 3+ iterations on the same target accumulate unresolved MUSTs, escalate to user review.
- [ ] Both refinements use prior P-cross's audit infrastructure as evidence source (interface to Piece 4 below).
- [ ] Both refinements have evaluation gates ("after 3 iterations on the same target"-style).
- [ ] Both refinements are documented as additive (per-iter behavior unchanged; cross-iter behavior added).

### Piece 3 — New piece P6: Synthesis-re-test rule for spec-rewrite inquiries

**Question:** What new sub-section in `homegrown/protocols/deferred_governance.md` (the prior loop_diagnose's sub-assembly 1) implements the Synthesis-as-Validation fault dimension's maintenance — requiring that spec-rewrite inquiries which synthesize prior outputs include an independent re-test step on inherited commitments?

**Verification criteria:**

- [ ] Synthesis-re-test rule specified: when a spec-rewrite inquiry synthesizes prior outputs (e.g., "this rewrite integrates 11 commitments from 4 prior findings"), the inquiry must include an independent re-test step that exercises each inherited commitment against the inquiry's own evidence — NOT treat synthesis coherence as evidence for adoption.
- [ ] Detection mechanism specified: how the rule fires. Heuristic candidates: (a) inquiry's `_branch.md` mentions synthesizing prior outputs by count or names; (b) `finding.md` lists N inherited commitments. If either fires, the re-test step is required.
- [ ] Re-test step format specified: what counts as "independent re-test"? Each inherited commitment gets one ambiguity-collapse pair (per sense-making's Phase 3 format) with a counter-interpretation tested on structural grounds.
- [ ] Locates as third sub-section in `homegrown/protocols/deferred_governance.md`, sibling to prior P3 (deferral-binding) and prior P4 (COULD-vs-MUST gating). Substrate-share with the existing two sub-sections is acknowledged.
- [ ] Evaluation gate: after the next spec-rewrite inquiry that synthesizes 3+ prior outputs, verify the synthesis-re-test step was performed and produced ambiguity-collapse pairs for each inherited commitment.
- [ ] Risk class: MEDIUM (touches CONCLUDE behavior for spec-rewrite inquiries; doc + protocol edit).

### Piece 4 — New piece P7: User-words-as-constraint-not-permission default rule

**Question:** What new rule in the pre-inquiry redefinition checklist (the prior loop_diagnose's sub-assembly 2) implements the Speculative Tooling on User Permission fault dimension's maintenance — making "constraint" the default interpretation when the user's `_branch.md` Source Input contains permissive statements?

**Verification criteria:**

- [ ] User-words-as-constraint-default rule specified: when the user's `_branch.md` Source Input contains a permissive statement (e.g., "manual-trigger v1 is acceptable"; "this can wait"; "we can defer"), the spec-author treats it as CONSTRAINT TO DEFER (the user said acceptable; therefore don't build) rather than PERMISSION TO BUILD (the user OK'd manual; therefore build automation).
- [ ] Detection mechanism specified: how to identify "permissive statements" in user input. Heuristic candidates: words like "acceptable," "OK," "fine," "manual is enough," "we can defer," "can wait" combined with a deferral candidate. If matches, treat as constraint-not-permission.
- [ ] Override path specified: if the spec-author believes the maximal interpretation (build) is correct despite the user's permissive statement, the inquiry must include an explicit "interpretive justification" subsection in `_branch.md` that names why constraint-reading is wrong here. Default-to-constraint with explicit-override-with-reason.
- [ ] Locates as a new item in the pre-inquiry redefinition checklist (sub-assembly 2 from prior loop_diagnose). Substrate-share with the existing checklist items is acknowledged.
- [ ] Evaluation gate: after the next 3 inquiries with permissive user statements in `_branch.md`, verify each treated the statement as constraint OR included an explicit interpretive justification.
- [ ] Risk class: MEDIUM (changes pre-pipeline interpretation; doc edit to checklist).

### Piece 5 — New piece P-cross: Cross-iteration audit extension to phase-0 audit

**Question:** What extension to the prior loop_diagnose's phase-0 audit (AR-G) implements the CHAIN-AMPLIFIED attribution category's maintenance — providing periodic cross-iteration audit infrastructure beyond the one-shot baseline audit?

**Verification criteria:**

- [ ] Periodic-pattern specified: phase-0 audit extends from one-shot (the bf4ae1f baseline audit) to a periodic pattern. Trigger condition: every N spec rewrites of the same target (recommended N=3 per the calibration constraint).
- [ ] Audit scope per fire specified: what to track across iterations. Recommended cumulative state to track: (a) cumulative spec growth (size; section count); (b) deferred-vs-active state changes (which deferred items activated, with what evidence); (c) MUST resolution state across iterations (how many MUSTs remain unresolved cumulatively); (d) framework-or-convention citations used as load-bearing arguments.
- [ ] Output format specified: the periodic audit produces a cumulative-state report (markdown file in `devdocs/audits/<target>__<date>.md`) consumed by Pieces 1 (B2/B7 refinements) and 2 (Cluster II) as evidence source.
- [ ] Detection mechanism specified: HOW the audit determines cumulative drift. Reference baseline = original (e.g., bf4ae1f) or last-audit-baseline (e.g., previous periodic audit).
- [ ] Locates as an extension to the phase-0 audit specification (separate from one-shot AR-G but in the same conceptual layer). Could be documented in the same place as AR-G or as a sibling note.
- [ ] Evaluation gate: after the next 3 spec rewrites of `homegrown/explore/`, verify the periodic audit was performed and produced cumulative-state reports.
- [ ] Risk class: MEDIUM (new audit infrastructure; could be lightweight if implemented as a scheduled MVL+ inquiry rather than a script).

---

## Step 5 — Interface Map

| # | Source piece | Target piece | What flows | Direction | Type |
|---|---|---|---|---|---|
| I1 | Piece 1 (Cluster I refinements) | Prior P2, P3, P5 (existing pieces) | Refinement text additions (each refinement attaches to its target prior piece) | One-way | Doc-attachment |
| I2 | Piece 2 (Cluster II cross-iter refinements) | Prior P4 (existing piece) | Refinement text additions (cross-iteration scope extension) | One-way | Doc-attachment |
| I3 | Piece 3 (P6 Synthesis-re-test) | Prior deferred_governance.md (sub-assembly 1) | New sub-section colocated with prior P3 + P4 | One-way (additive) | Substrate-share |
| I4 | Piece 4 (P7 User-words-as-constraint) | Prior pre-inquiry redefinition checklist (sub-assembly 2) | New checklist item with detection heuristic | One-way (additive) | Substrate-share |
| I5 | Piece 5 (P-cross periodic audit) | Prior phase-0 audit (AR-G) | Extension from one-shot to periodic; produces cumulative-state reports | One-way (extension) | Pattern-extension |
| I6 | Piece 5 (P-cross audit reports) | Piece 2 (Cluster II cross-iter refinements) | Cumulative-state evidence consumed by B2 and B7 refinements | One-way data | Evidence flow |
| I7 | All 5 pieces → Prior loop_diagnose's design (UNIVERSAL) | Universal precondition: prior loop_diagnose's pieces and sub-assemblies must exist | One-way (precondition) | Dependency |

### Assumptions-not-data check (per Step 5 refinement)

For each interface, what assumptions does the target piece make about the source's output?

- **I1 (Cluster I refinements → prior pieces P2, P3, P5):** Each refinement assumes the target prior piece SHIPS or IS SHIPPING. If a prior piece doesn't ship, its refinement has nothing to attach to. Documented as part of the universal precondition (I7).
- **I2 (Cluster II refinements → prior P4):** Same as I1; assumes prior P4 ships.
- **I3 (P6 → deferred_governance.md sub-assembly):** Assumes deferred_governance.md exists (created via prior loop_diagnose's sub-assembly 1). If it doesn't exist, P6 needs to ship together with sub-assembly 1 OR live elsewhere as a standalone file.
- **I4 (P7 → pre-inquiry redefinition checklist sub-assembly):** Assumes the checklist exists (created via prior loop_diagnose's sub-assembly 2). Same fallback as I3.
- **I5 (P-cross → phase-0 audit):** Assumes the phase-0 audit AR-G has been performed at least once (provides the baseline). If AR-G hasn't run, P-cross's first periodic fire IS the baseline (degenerate case).
- **I6 (P-cross audit reports → Cluster II refinements):** Cluster II refinements reference P-cross's audit reports as evidence source. If P-cross hasn't shipped, Cluster II refinements can ship as documentation-only (the trigger conditions are documented but evidence-gathering depends on P-cross).
- **I7 (universal precondition):** All 5 pieces in this decomposition assume the prior loop_diagnose's pieces and sub-assemblies exist or are shipping. If the prior loop_diagnose's design hasn't shipped, this loop_diagnose's extension is documentation-only until the prior ships.
- **Hidden coupling check:** No silent runtime dependencies between the 5 pieces beyond what's documented. The strongest within-extension coupling is I6 (P-cross provides evidence for Cluster II); explicitly documented.

---

## Step 6 — Dependency Order

```
                  Prior loop_diagnose's design (UNIVERSAL precondition I7)
                                    │
            ┌───────┬───────────────┼───────────────┬─────────┐
            ▼       ▼               ▼               ▼         ▼
       Piece 1  Piece 2         Piece 3         Piece 4    Piece 5
       (Cluster (Cluster        (P6 Synthesis-  (P7 User-  (P-cross
       I refins) II cross-iter  re-test rule    words-as-  periodic
                refins)         in deferred_    constraint  audit)
                                governance.md)  rule in     │
                                                checklist)  │ (provides
                                                            │  evidence
                                                            ▼
                                                      Piece 2
                                                      consumes
                                                      (I6)
```

**Sequential order (recommended):**

All 5 pieces depend on the prior loop_diagnose's design having shipped (or shipping in parallel). Within this decomposition's 5 pieces:

1. **Pieces 1, 3, 4, 5 — can ship in parallel** (no inter-dependencies). All depend only on prior loop_diagnose's relevant target pieces existing.
2. **Piece 2 (Cluster II cross-iter refinements) — ideally ships AFTER Piece 5 (P-cross)** so the cross-iter scope refinements can reference P-cross's audit infrastructure as evidence source. If shipping in parallel, Piece 2's refinements ship as documentation-only with placeholders for P-cross's evidence flow.

**Three-phase practical sequencing (within this decomposition):**

- **Phase 1 (immediate, doc-only edits):** Piece 1 (single-target refinements to prior P2, P3, P5) — small additive doc edits; each touches one prior piece.
- **Phase 2 (after Phase 1, new infrastructure):** Piece 3 (P6 Synthesis-re-test in deferred_governance.md), Piece 4 (P7 User-words-as-constraint in checklist), Piece 5 (P-cross periodic audit extension) — can ship in parallel; each is independent.
- **Phase 3 (after Phase 2, infrastructure-dependent refinements):** Piece 2 (Cluster II cross-iter refinements) — ships after P-cross (Piece 5) so the cross-iter refinements can reference P-cross's audit reports.

**Parallelization:** Phases 1, 2, and 3 within this decomposition can all overlap with the prior loop_diagnose's own phases. If prior loop_diagnose's Phase 1 ships P5 (anatomy-flex), this decomposition's B3 refinement (Cluster I) can ship right after. Similarly for other prior pieces.

**No circular dependencies.** I6 (Piece 5 → Piece 2) is the only intra-decomposition dependency.

---

## Step 7 — Self-Evaluation

### Minimum (3 dimensions)

| Dimension | Result | Notes |
|---|---|---|
| **Independence** | PASS | Each piece is independently designable. Piece 1's refinements distribute across 3 prior pieces; Piece 2's refinements co-locate in prior P4; Pieces 3, 4, 5 are independent of each other. The strongest intra-decomposition dependency is I6 (Piece 5 provides evidence for Piece 2); this is one-way and accommodated via doc-only fallback if Piece 5 hasn't shipped. |
| **Completeness** | PASS | The 8 maintenance items from sensemaking distribute as: 3 single-target refinements (Cluster I umbrella in Piece 1) + 2 cross-iter refinements (Cluster II umbrella in Piece 2) + 1 new piece P6 (Piece 3) + 1 new piece P7 (Piece 4) + 1 cross-iter audit extension P-cross (Piece 5) = 8 items in 5 pieces. ✓ |
| **Reassembly** | PASS | If all 5 pieces' verification criteria are met + interfaces honored (and prior loop_diagnose's design has shipped), the resulting maintenance state is: prior 5-piece + 3-sub-assembly + phase-0-audit design extended with 3 single-target refinements + 2 cross-iter refinements + 2 new pieces + 1 cross-iter audit extension. The framework extension (7 dims + 4 categories) is operationalized. Determination-mechanism check: 5/5 load-bearing concepts with runtime determinations have explicit pieces or refinements (Synthesis was used as validation → P6; user-words-as-permission-vs-constraint → P7; anticipated-use vs trigger-firing → B1 refinement in P3; convention-citation as authority → B3 refinement in P5; cumulative state in cross-iteration → P-cross). ✓ |

### Full evaluation (7 dimensions; high-stakes decomposition since it shapes maintenance for diagnostic findings)

| Dimension | Result | Notes |
|---|---|---|
| Independence | PASS | (above) |
| Completeness | PASS | (above) |
| Reassembly | PASS | (above) |
| **Tractability** | PASS | Each piece is sized for a focused pass. Piece 1 has 3 small refinements (still one-pass); Piece 2 has 2 cross-iter refinements with shared scope; Pieces 3, 4 are individual maintenance pieces; Piece 5 is a single audit extension. |
| **Interface clarity** | PASS | All cross-piece flows explicit (I1–I7). The strongest within-extension coupling (I6 P-cross → Piece 2) is documented. Universal precondition (I7 prior loop_diagnose's design) is explicit. Assumptions-not-data check captured per interface. |
| **Balance** | ACCEPTABLE imbalance | Piece 1 has 3 sub-refinements, Piece 2 has 2 sub-refinements, Pieces 3-5 each have 1 main item. Not 80% in one piece; balanced enough for this decomposition's scope. |
| **Confidence** | HIGH | Top-down (Step 2) and bottom-up (Step 3) agreed on cluster boundaries. The umbrella'ing of Cluster I (3 single-target refinements as one piece) was a structural choice; both alternatives (3 separate pieces vs 1 umbrella) work; umbrella chosen for tractability. |

### Failure-mode self-check

| Failure mode | Observed? | Notes |
|---|---|---|
| Premature decomposition | No | Sensemaking SV1→SV6 stabilized the 8-item framework before this decomposition began. |
| Wrong boundaries | No | Cuts follow target-piece coupling; one-way attachments are clean. |
| Hidden coupling | Caught | I6 (Piece 5 → Piece 2) is documented; I7 (universal precondition) is documented. |
| Missing pieces | No | Determination-mechanism check passed (5/5 load-bearing concepts have explicit mechanisms). |
| Over-decomposition | Avoided via umbrella | 3 single-target refinements grouped as one umbrella piece; 2 cross-iter refinements grouped as one umbrella piece. Without these umbrellas, we'd have 8 pieces of 1-paragraph each — over-decomposition. |
| Ignoring dependencies | No | Universal precondition (I7) + intra-decomposition dependency (I6) explicit. |
| Imbalanced decomposition | No | Pieces are balanced by item count and complexity. |

**Overall: PROCEED** — decomposition passes minimum 3 dimensions and full 7 dimensions; no failure modes triggered; all load-bearing concepts have explicit determination mechanisms; ready for innovation to generate concrete spec-edit candidates within each piece.
