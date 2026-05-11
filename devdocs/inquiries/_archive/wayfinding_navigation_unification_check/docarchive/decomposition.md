# Decomposition: wayfinding_navigation_unification_check

## User Input

`devdocs/inquiries/wayfinding_navigation_unification_check/_branch.md`

Read _branch.md, exploration.md, sensemaking.md. Sensemaking concluded: DELETE /wayfinding.md with substance migration into /navigation.md (Path A.2 essential; A.1 comprehensive as defensible COULD). /navigation.md gets DIAGNOSE-as-16th-type, reachability/gates, REVISIT extension. Prior audit refined: B.1 target updated, D.1 reversed, others preserved. Stalled inquiries marked superseded.

Now decompose the actual decisions/actions into independently-answerable sub-questions with interfaces and dependency order. Goal: question tree where each piece is independently answerable; ordered by dependency; ready for innovation/critique.

---

## Step 1 — Coupling Topology

### Elements identified in the whole

The whole comprises 20+ atoms grouped by function:

**Decision atoms:**
- D1: Migration scope (A.2 vs A.1 vs incremental)
- D2: Artifact relationship between this finding and prior audit
- D3: MUST/COULD/DEFERRED partition

**Edit atoms (within /navigation.md):**
- E1: DIAGNOSE-as-16th-type — table row + trigger + auto-derivable status
- E2: Reachability/gates feature — placement + wording
- E3: REVISIT extension — sub-actions structure + threshold scope
- E4 (only if A.1): Comprehensive features — threshold self-adjustment + layer priority + failure modes absorption
- E5: Internal consistency check (15→16 types reflected throughout, auto-derivable list updated)

**Edit atoms (other files):**
- F1: /wayfinding.md deletion
- F2: thinking_disciplines/old_meta-search.md decommission
- F3: /inquiry.md B.1 wording change (target /navigation; reframe inline list)
- F4: Prior audit's other Steps (A.1, C.1, E.1, F.1, F.2) preserved
- F5: D.1 reversal — omit or rewrite the cross-reference paragraph
- F6: /MVL.md / /MVL+.md cross-reference check (existing references already point to /navigate)

**Housekeeping atoms:**
- H1: List of stalled inquiries to mark superseded (`wayfinding_fundamental_fix`, `sic_as_wayfinder`, possibly others)
- H2: Marking format (frontmatter `superseded_by:` field, `_state.md` History note, both)

### Coupling map

For each pair (subset shown — strong/moderate couplings):

| A | B | Coupling | Why |
|---|---|---|---|
| D1 (scope) | E1, E2, E3 (essentials) | STRONG (must include) | Scope determines essential vs comprehensive; essentials are scope-independent. |
| D1 (scope) | E4 (comprehensive) | STRONG (gates inclusion) | E4 only applies if A.1; gated by D1. |
| D1 (scope) | D3 (MUST/COULD partition) | STRONG | Scope determines what's MUST and what's COULD. |
| E1, E2, E3 (and E4) | E5 (consistency check) | STRONG | Adding types requires updating internal references in /navigation.md. |
| E1-E4 (edits) | F1 (deletion) | STRONG (sequential gate) | Edit before delete to preserve substance migration. |
| E1 (DIAGNOSE) | F5 (D.1 reversal) | STRONG | D.1 is about DIAGNOSE-uncovered; E1 adds DIAGNOSE; F5's reversal depends on E1's wording. |
| E1-E4 (edits) | F3 (B.1 wording) | MODERATE | B.1 references /navigation types; if E1 adds DIAGNOSE, B.1's inline list reflects 16 types. |
| F1 (delete) | F3 (B.1 wording) | WEAK | F3 references /navigation; F1 removes /wayfinding; both consistent post-edit but ordering between them is irrelevant once E1-E4 land. |
| F4 (other prior audit Steps) | All migration atoms | NO COUPLING | F4 is independent (CONCLUDE rename, Rules trim, /MVL cross-refs, protocols/desc.md cross-ref). |
| H1, H2 (stalled inquiries) | All migration atoms | NO COUPLING | Housekeeping; independent. |
| D2 (artifact relationship) | F3, F4, F5 (refinements to prior audit) | MODERATE | D2's choice (separate refining finding / edit-in-place / takes-precedence) affects how F3/F4/F5 are documented. |

### Major clusters identified

- **CLUSTER M (Migration core):** D1 + E1 + E2 + E3 (+E4) + E5 + F1 + F2. The actual /wayfinding-to-/navigation migration.
- **CLUSTER R (Prior audit reconciliation):** F3 + F4 + F5 + D2. The integration with the prior audit's punch list.
- **CLUSTER H (Housekeeping):** H1 + H2. Stalled inquiries marked superseded.
- **CLUSTER P (Partitioning):** D3. The MUST/COULD/DEFERRED classification spanning all clusters.

### Major boundaries

- **CLUSTER M | CLUSTER R:** moderate boundary (E1 → F3 wording dependency; E1 → F5 reversal dependency). Each cluster has internal cohesion; the cross-cluster flows are limited and explicit.
- **CLUSTER M, R | CLUSTER H:** strong boundary (no shared substance; stalled-inquiry marking is independent of migration).
- **CLUSTER P spans all:** D3 classifies actions from M, R, H.

---

## Step 2 — Boundary Detection (Top-Down)

Natural cut points based on coupling map:

### Boundary 1: Decision/Edit (between deciding scope and applying edits)

Cut between D1 (scope decision) and E1-E4 (edits). Rationale: the decision is independent of the edit substance; once decided, edits proceed mechanically.

### Boundary 2: /navigation edits / /wayfinding deletion (sequential gate)

Cut between E1-E5 and F1 (file deletion). Rationale: edits must come first to avoid losing substance; deletion is mechanical once edits are confirmed.

### Boundary 3: Migration / Reconciliation (cluster boundary)

Cut between CLUSTER M and CLUSTER R. Rationale: reconciliation with prior audit is conceptually separate from the migration itself.

### Boundary 4: Reconciliation / Housekeeping

Cut between CLUSTER R and CLUSTER H. Rationale: stalled-inquiry marking is housekeeping with no substantive overlap.

### Boundary 5: Partition (cross-cutting)

Cut around D3 (MUST/COULD/DEFERRED). Rationale: D3 partitions actions across all clusters; logically lives at the punch-list assembly stage.

### Boundary 6: D2 (artifact relationship) within Reconciliation

Cut between D2 and F3/F4/F5 (the refinements). Rationale: D2 is a documentation-format decision; F3/F4/F5 are the substantive content. D2 affects documentation structure but not content.

---

## Step 3 — Boundary Validation (Bottom-Up)

### Atom-to-cluster check

| Atom | Cluster from Step 2 | Validation |
|---|---|---|
| D1 (scope) | Decision in M | ✓ Independent decision; consumed by edits. |
| E1, E2, E3 | Edits in M | ✓ Internally cohesive (all /navigation.md additions). |
| E4 | Edits in M (conditional on D1) | ✓ Conditional inclusion; clean dependency on D1. |
| E5 | Edits in M | ✓ Cohesive with E1-E4 (consistency follow-through). |
| F1 (delete /wayfinding) | M (post-edit) | ✓ Sequential after edits; clean boundary. |
| F2 (decommission old_meta-search) | M | ✓ Adjacent to F1; same kind of housekeeping within migration. |
| F3 (B.1 wording) | R | ✓ Reconciliation atom with /inquiry.md scope. |
| F4 (other prior audit Steps) | R | ✓ Reconciliation atom (preserves prior recommendations). |
| F5 (D.1 reversal) | R | ✓ Reconciliation atom (specific reversal of one prior step). |
| F6 (/MVL/MVL+ cross-refs) | R or M? | Border atom: technically a cross-reference check, but it's mostly verifying status quo. Place in R because it's about cross-references in other files. |
| H1, H2 (stalled inquiries) | H | ✓ Independent cluster. |
| D2 (artifact relationship) | R (decision) | ✓ Decision feeding R's documentation format. |
| D3 (MUST/COULD/DEFERRED) | P (cross-cutting) | ✓ Spans all clusters. |

All atoms map cleanly. No atom is split across cluster boundaries; no cluster groups atoms that don't belong together.

### Confidence scoring

- Boundary 1 (Decision/Edit): top-down + bottom-up agree. **HIGH confidence.**
- Boundary 2 (Edits/Deletion): top-down + bottom-up agree. **HIGH confidence.**
- Boundary 3 (Migration/Reconciliation): top-down + bottom-up agree, with one moderate cross-cluster flow (E1 → F3 wording, E1 → F5 reversal). **HIGH confidence with explicit interfaces.**
- Boundary 4 (Reconciliation/Housekeeping): top-down + bottom-up agree. **HIGH confidence.**
- Boundary 5 (Partition cross-cutting): D3 is genuinely cross-cutting; not a separate piece but a classification overlay. **HIGH confidence.**
- Boundary 6 (D2 within R): D2 is decision; F3/F4/F5 are substance. Clean separation. **HIGH confidence.**

---

## Step 4 — Question Tree

Nine pieces, each as a question with verification criteria.

### Piece 1: Migration scope

**Question:** What migration scope should be applied — A.2 (essential migration only: DIAGNOSE + reachability/gates + REVISIT extension), A.1 (comprehensive migration: A.2 + threshold self-adjustment + layer priority + failure modes absorption), or incremental (A.2 now, A.1 features added later as gates fire)?

**Verification:**
- [ ] Decision recorded in finding's Next Actions.
- [ ] Rationale articulated (e.g., A.2 if user prefers minimum viable migration; A.1 if comprehensive consolidation; incremental if user wants to observe whether A.1 features ever fire before committing).
- [ ] If A.2 or incremental: A.1's deferred features have explicit revival gates (time-bound / condition-bound / observable).
- [ ] If A.1: all comprehensive features have specific landing places in /navigation.md identified.

**Cluster:** M (migration). **Decision atom:** D1.

### Piece 2: /navigation.md edits package

**Question:** What specific edits to /navigation.md, with what wording, in what placement?

**Sub-questions (tightly coupled, answer together):**
- 2a: DIAGNOSE-as-16th-type — exact table row for Process category, trigger condition, auto-derivable status (auto from sensemaking-stall signals, or human-judgment like REFRAME)?
- 2b: Reachability/gates — what wording, placed in Step 1 (Read and assess) or new Step 0 (pre-enumeration awareness) or extended Excluded section?
- 2c: REVISIT extension — sub-actions (RESURRECT/INVALIDATE/REVERT) as sub-bullet under REVISIT, sub-table, or paragraph? Threshold-aware confidence scoped to REVISIT alone or all 16 types?
- 2d (only if A.1 from Piece 1): comprehensive features — threshold self-adjustment placement; layer-priority tiebreaker rule wording; which /wayfinding failure modes to absorb (gate blindness, layer conflict paralysis, missed RECONSIDER) and where in /navigation's failure modes section.
- 2e: Internal consistency follow-through — update "15-type taxonomy" mentions to "16-type taxonomy"; update auto-derivable list; update telemetry section's "fewer than 10" threshold if it should change; update /navigation's relationship-to-other-disciplines section (the explicit "Navigation REPLACES wayfinding" line stays as-is or gets adjusted now that /wayfinding is being deleted — likely adjusted to past tense).

**Verification:**
- [ ] DIAGNOSE row added to /navigation.md Process category table with concrete trigger and auto-derivable status.
- [ ] Reachability/gates feature placed and worded.
- [ ] REVISIT type extended with sub-actions in chosen format.
- [ ] (If A.1) comprehensive features added with explicit placements.
- [ ] /navigation.md remains internally consistent — type counts updated throughout, auto-derivable lists updated, prior "REPLACES wayfinding" line possibly past-tense.
- [ ] Final line count of /navigation.md +50-100 (A.2) or +150-250 (A.1).

**Cluster:** M. **Edit atoms:** E1, E2, E3, E4, E5.

### Piece 3: /wayfinding.md deletion + old_meta-search.md decommission

**Question:** What file changes retire /wayfinding cleanly?

**Sub-questions:**
- 3a: Delete commands/wayfinding.md outright.
- 3b: thinking_disciplines/old_meta-search.md decision — delete entirely (it already says "this is now edited and called wayfinding" — if /wayfinding is deleted, old_meta-search is doubly orphaned), OR keep with stronger note (e.g., "this is HISTORICAL; both meta-search and wayfinding have been superseded by /navigation").

**Verification:**
- [ ] commands/wayfinding.md deleted.
- [ ] thinking_disciplines/old_meta-search.md handled (delete or kept with stronger deprecation note).
- [ ] No broken cross-references in other files (check via grep for "wayfinding" across project).

**Cluster:** M. **Atoms:** F1, F2.

### Piece 4: /inquiry.md B.1 wording update

**Question:** What's the new wording for the prior audit's B.1 (the wayfinding-table replacement in /inquiry.md)?

**Sub-questions:**
- 4a: Cross-reference target wording — change "see commands/wayfinding.md for the full move taxonomy and selection logic" to "see commands/navigation.md for the full type taxonomy and per-iteration enumeration logic" (or similar).
- 4b: Inline list reframed — should the inline list stay as the 6-name vocabulary (NARROW/BROADEN/SHIFT/DIAGNOSE/TERMINATE/RECONSIDER) for backward-recognition, OR shift to /navigation's vocabulary (DEEPEN/REFINE/PURSUE SEED/INVESTIGATE FRONTIER/DEVELOP/TERMINATE for Content; RE-RUN DEEPER/WIDEN/REFRAME/DIFFERENT APPROACH/DIAGNOSE for Process; ...)? Likely answer: shift to /navigation vocabulary since that's the canonical home post-migration.

**Verification:**
- [ ] B.1 wording proposed with cross-reference target = /navigation.
- [ ] Inline list reframed (no longer "wayfinding moves"; now "iteration-boundary /navigation types").
- [ ] Wording integrates with /inquiry.md's flow (replaces lines 173-216 of current inquiry.md per prior audit).

**Cluster:** R. **Atom:** F3.

### Piece 5: Prior audit's other punch-list steps (preserved)

**Question:** How are the prior audit's other punch-list steps applied (A.1, C.1, E.1, F.1, F.2)?

**Sub-questions:**
- 5a: A.1 (clean cuts in /inquiry.md) — apply as-is.
- 5b: C.1 (SYNTHESIZE rewrite with CONCLUDE rename) — apply as-is.
- 5c: E.1 (Rules trim 8→6) — apply as-is.
- 5d: F.1 (cross-ref from /MVL/MVL+ pointing to /inquiry for variable-pipeline) — apply as-is.
- 5e: F.2 (cross-ref in protocols/desc.md naming /inquiry as CONFIGURE implementation) — apply as-is.

**Verification:**
- [ ] All five steps applied per prior audit's specification.
- [ ] No content modifications needed (only B.1 and D.1 from prior audit were modified by this finding).
- [ ] Coordination clear: F4 applies independently and in parallel with this finding's M-cluster work.

**Cluster:** R. **Atom:** F4.

### Piece 6: D.1 reversal

**Question:** How to handle the prior audit's D.1 (the /navigation cross-reference paragraph noting DIAGNOSE-uncovered)?

**Sub-questions:**
- 6a: Omit the cross-reference paragraph entirely (DIAGNOSE will be IN /navigation post-Piece-2).
- 6b: Replace with different wording (e.g., the "Relationship with /wayfinding" paragraph from the prior audit's D.1 proposal, but now reframed as "/wayfinding has been superseded; its substance lives in /navigation" — a deletion note rather than a coverage-gap note).
- 6c: Decide based on whether /navigation needs ANY note about the wayfinding history (likely NOT — clean deletion is preferable to historical breadcrumbs for the canonical spec).

**Verification:**
- [ ] Decision made (omit OR replace with deletion-history note).
- [ ] If replace: new wording proposed.
- [ ] If omit: noted in finding's Reasoning section that D.1 is reversed and why.

**Cluster:** R. **Atom:** F5.

### Piece 7: Artifact relationship — this finding vs prior audit

**Question:** How is this finding's relationship to `inquiry_md_remaining_value_audit/finding.md` expressed in metadata and structure?

**Sub-questions:**
- 7a: Relationship type — REFINES (most punch list preserved with targeted updates) vs CORRECTS (the prior had an error) vs SUPERSEDES (this replaces the prior). Sensemaking concluded "refined, not rejected"; REFINES fits, but the wayfinding-vs-navigation verdict reversal might justify CORRECTS for that specific point.
- 7b: Structure — should this finding's frontmatter use `refines: devdocs/inquiries/inquiry_md_remaining_value_audit/finding.md` (signaling targeted refinement) OR `corrects: ...` (signaling specific error fix) OR both?
- 7c: Should the prior audit's finding be edited in-place to add a note ("REFINED BY: devdocs/inquiries/wayfinding_navigation_unification_check/finding.md — the wayfinding-vs-navigation verdict was reversed"), OR left as-is with this finding's `refines:` providing the linkage?

**Verification:**
- [ ] Relationship type chosen (REFINES / CORRECTS / both).
- [ ] Frontmatter format applied.
- [ ] Decision on whether to edit prior in-place or leave as-is.
- [ ] Rationale documented.

**Cluster:** R (decision). **Atom:** D2.

### Piece 8: Stalled-inquiry-marked-superseded

**Question:** Which stalled inquiries get marked as superseded by this inquiry, and in what format?

**Sub-questions:**
- 8a: List of stalled inquiries — `wayfinding_fundamental_fix` (definitely; its diagnosed fix is moot post-deletion), `sic_as_wayfinder` (definitely; its premise is null post-deletion), `navigation_placement` (probably not — its conclusions stand), `sic_navigation_integration` (probably not — its conclusions stand), `search_equals_navigation_plus_x` (probably not — its conclusions stand). Decide which to mark.
- 8b: Marking format — frontmatter `superseded_by:` field added to each stalled inquiry's `_branch.md` or `_state.md`, OR a History entry in each `_state.md`, OR both.
- 8c: For each stalled inquiry to mark: apply the marking.

**Verification:**
- [ ] List finalized.
- [ ] Format chosen.
- [ ] Marking applied to each.

**Cluster:** H. **Atoms:** H1, H2.

### Piece 9: MUST/COULD/DEFERRED partition

**Question:** Which actions are MUST for the verdict to be realized, which are COULD, which are DEFERRED?

**Sub-questions:**
- 9a: Tentative MUST list (subject to user judgment): Piece 2 essentials (E1+E2+E3+E5), Piece 3 (deletion), Piece 4 (B.1 update), Piece 6 (D.1 reversal), Piece 7 (artifact relationship — at minimum, frontmatter `refines:` link).
- 9b: Tentative COULD list: Piece 2 comprehensive (E4 if A.1), Piece 8 (stalled-inquiry marking — useful but not blocking).
- 9c: Tentative DEFERRED list: empirical observation of whether A.1's deferred features ever fire in practice; periodic re-examination of /navigation's growing complexity.
- 9d: Each DEFERRED item has a gate (time-bound, condition-bound, or observable).

**Verification:**
- [ ] All actions classified.
- [ ] DEFERRED items have explicit gates per finding template's style rules.
- [ ] MUST list is minimal sufficient for verdict realization.

**Cluster:** P (cross-cutting). **Atom:** D3.

---

## Step 5 — Interface Map

| From | To | What flows | Direction | Type |
|---|---|---|---|---|
| Piece 1 (scope) | Piece 2 (/navigation edits) | Scope choice ∈ {A.2, A.1, incremental} | One-way | Constraint |
| Piece 1 (scope) | Piece 9 (MUST/COULD partition) | Scope-dependent classification | One-way | Constraint |
| Piece 2 (/navigation edits) | Piece 3 (deletion) | Confirmation that substance is migrated; concretely: /navigation.md has DIAGNOSE/reachability/REVISIT-extended | One-way | Sequential gate |
| Piece 2 (/navigation edits) | Piece 4 (B.1 wording) | List of /navigation types post-edit (15+1 = 16; or expanded auto-derivable list per A.1) | One-way | Data |
| Piece 2 (/navigation edits) | Piece 6 (D.1 reversal) | Confirmation DIAGNOSE is now a type in /navigation | One-way | Sequential gate |
| Piece 7 (artifact relationship) | Pieces 4, 5, 6 (R-cluster substance) | Documentation format choice | One-way | Format constraint |
| Piece 7 (artifact relationship) | Prior audit's finding | Possible in-place edit (REFINED BY note) | One-way | Cross-artifact write |
| Piece 9 (MUST/COULD/DEFERRED) | All pieces | Action priority classification | One-way | Metadata overlay |

### No circular dependencies

Verified: all interfaces flow in a partial order. Piece 1 → Piece 2 → Piece 3, 4, 6 → no further dependencies on other pieces. Piece 5 is independent. Pieces 7, 8, 9 are documentation/housekeeping with one-way flows.

### Hidden coupling check

Potential hidden coupling identified and explicitly captured:
- **Piece 2's E5 (consistency check)** — implicit dependency on which features get added in E1-E4. Captured as part of Piece 2's verification (internal consistency follow-through).
- **Piece 4's wording** — could implicitly reference Piece 6's D.1 reversal (if /inquiry.md's wording assumes D.1's paragraph exists, it must be reworded). Captured: Piece 4 should NOT reference D.1's paragraph since D.1 is being reversed; the cross-reference target is /navigation directly.
- **Piece 7's artifact relationship** — could imply edits to the prior audit's finding file. Captured: Piece 7 explicitly decides whether to edit in-place or leave as-is.

---

## Step 6 — Dependency Order

### Phase 0: Decisions (foundational, must come first)

- **Piece 1** — migration scope decision (A.2 vs A.1 vs incremental).
- **Piece 7** — artifact relationship decision (REFINES vs CORRECTS vs both; in-place edit vs frontmatter only).
- **Piece 9** — MUST/COULD/DEFERRED partition (depends on Piece 1; can be drafted in parallel with Piece 1's finalization).

These three pieces produce the decisions that constrain all subsequent work.

### Phase 1: Editing (depends on Phase 0; pieces can run in parallel)

- **Piece 2** — /navigation.md edits (A.2 essentials and possibly A.1 comprehensive). The substantive work; ~30-90 min.
- **Piece 5** — Prior audit's other Steps (A.1, C.1, E.1, F.1, F.2 of the prior audit). Independent of Piece 2; ~30-45 min.
- **Piece 8** — Stalled-inquiry marking (housekeeping). Independent of Pieces 2 and 5; ~5-15 min.

These three pieces can proceed in parallel.

### Phase 2: Post-edit reconciliation (depends on Phase 1's Piece 2)

- **Piece 3** — /wayfinding.md deletion + old_meta-search.md decommission. Sequential after Piece 2.
- **Piece 4** — /inquiry.md B.1 wording update. Sequential after Piece 2 (B.1 references /navigation post-edit).
- **Piece 6** — D.1 reversal. Sequential after Piece 2 (D.1 reversal depends on DIAGNOSE being a type).

These three can run in parallel after Piece 2 lands.

### Total ordering (with parallel-feasibility)

```
Phase 0 (decisions, parallel):
  ├── Piece 1 (scope)
  ├── Piece 7 (artifact relationship)
  └── Piece 9 (MUST/COULD/DEFERRED partition; depends on Piece 1 but draftable in parallel)

Phase 1 (edits, parallel after Phase 0):
  ├── Piece 2 (/navigation edits) — heaviest
  ├── Piece 5 (other prior audit Steps) — independent
  └── Piece 8 (stalled-inquiry marking) — independent housekeeping

Phase 2 (reconciliation, parallel after Piece 2):
  ├── Piece 3 (/wayfinding deletion + old_meta-search decommission)
  ├── Piece 4 (/inquiry.md B.1 update)
  └── Piece 6 (D.1 reversal)
```

**Total estimated time: 1.5-2.5 hours of focused editing across 9 pieces.** A.2 path: ~1.5h. A.1 path: ~2.5h.

---

## Step 7 — Self-Evaluation

### Minimum 3-dimension check

| Dimension | Pass/Fail | Reasoning |
|---|---|---|
| **Independence** | ✓ PASS | Each piece's question is answerable without reading sibling pieces beyond their interface contracts. Piece 1's decision is self-contained. Piece 2's editing actions are self-contained given Piece 1's input. Piece 8's housekeeping is fully independent. |
| **Completeness** | ✓ PASS | The 9 pieces cover the full implementation of the verdict — migration scope decision, /navigation edits, /wayfinding deletion, /inquiry.md updates, prior audit reconciliation, stalled-inquiry marking, MUST/COULD/DEFERRED partition. Reassembly check: given all answered → verdict realized. |
| **Reassembly** | ✓ PASS | Given Piece 1's scope + Piece 2's edits + Piece 3's deletion + Piece 4's wording + Piece 5's other Steps + Piece 6's reversal + Piece 7's documentation format + Piece 8's marking + Piece 9's classification → the migration is complete, /wayfinding is gone, the prior audit is integrated, and stalled inquiries are clean. |

### Full 7-dimension check

| Dimension | Score | Reasoning |
|---|---|---|
| Independence | ✓ HIGH | See above. |
| Completeness | ✓ HIGH | See above. |
| Reassembly | ✓ HIGH | See above. |
| Tractability | ✓ HIGH | Each piece is 5-90 min of focused work. Piece 2 is heaviest at 30-90 min depending on scope; others are 5-45 min. |
| Interface clarity | ✓ HIGH | All interfaces explicit in Step 5; hidden coupling check passed. |
| Balance | ⚠ ACCEPTABLE | Piece 2 is heaviest (~30-90 min); Pieces 7 and 8 are lightest (~5-15 min each). Imbalance is proportional to substantive editing work; acceptable. |
| Confidence | ✓ HIGH | Top-down + bottom-up agree on all 6 boundaries. |

### Failure mode self-check

- **Premature decomposition?** No — sensemaking already clarified the whole.
- **Wrong boundaries?** No — boundaries cut at low-coupling regions (decision/edit; migration/reconciliation; substance/housekeeping).
- **Hidden coupling?** Checked and captured: E5 (consistency), Piece 4 wording's relationship to D.1, Piece 7's potential in-place edits.
- **Missing pieces?** No — reassembly check passes.
- **Over-decomposition?** 9 pieces for ~10-15 actions is reasonable density (~1 piece per 1-2 actions).
- **Imbalanced?** Piece 2 is heaviest but proportional to substantive editing.
- **Ignoring dependencies?** No — Phase 0/1/2 ordering is explicit; sequential gates and parallel-feasibility marked.

---

## Final Deliverable

### Coupling Map (summary)

- **CLUSTER M (Migration core):** Piece 1 (scope) + Piece 2 (/navigation edits) + Piece 3 (deletion). Strongly coupled internally; sequential ordering required.
- **CLUSTER R (Reconciliation):** Piece 4 (B.1) + Piece 5 (other prior audit Steps) + Piece 6 (D.1 reversal) + Piece 7 (artifact relationship). Moderately coupled; some parallelism possible.
- **CLUSTER H (Housekeeping):** Piece 8 (stalled-inquiry marking). Independent.
- **CROSS-CUTTING:** Piece 9 (MUST/COULD/DEFERRED partition) classifies actions across all clusters.

### Question Tree (9 pieces)

1. What migration scope (A.2 vs A.1 vs incremental)?
2. What edits to /navigation.md (DIAGNOSE-as-16th-type + reachability/gates + REVISIT extension + (if A.1) comprehensive features + consistency follow-through)?
3. What file changes retire /wayfinding (deletion + old_meta-search handling)?
4. What's the new wording for the prior audit's B.1 (/inquiry.md cross-reference target update)?
5. How are the prior audit's other Steps (A.1, C.1, E.1, F.1, F.2) applied (preserved as-is)?
6. How to handle the prior audit's D.1 (omit or rewrite)?
7. How is this finding's relationship to the prior audit expressed?
8. Which stalled inquiries get marked superseded, and in what format?
9. How are actions partitioned into MUST/COULD/DEFERRED?

### Interface Map (summary)

Piece 1 → Pieces 2, 9 (scope constrains edits and partition).
Piece 2 → Pieces 3, 4, 6 (post-edit substance enables deletion, wording reference, reversal).
Piece 7 → Pieces 4, 5, 6 (documentation format constrains R-cluster substance).
Piece 9 → All pieces (classification overlay).
No circular dependencies.

### Dependency Order

Phase 0 (decisions): Piece 1, Piece 7, Piece 9 (parallel).
Phase 1 (edits, parallel after Phase 0): Piece 2, Piece 5, Piece 8.
Phase 2 (reconciliation, parallel after Piece 2): Piece 3, Piece 4, Piece 6.

### Self-Evaluation

3-dimension minimum check: PASS on independence, completeness, reassembly.
7-dimension full check: PASS on all 7 (HIGH on 6, ACCEPTABLE on balance).
No failure modes detected.

**Decomposition is committed. Innovation will propose concrete designs for each piece; critique will evaluate.**
