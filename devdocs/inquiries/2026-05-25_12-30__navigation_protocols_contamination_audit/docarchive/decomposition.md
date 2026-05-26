# Decomposition — Navigation-protocols contamination audit on routeman design

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-25_12-30__navigation_protocols_contamination_audit/_branch.md`

## Prerequisites

Sensemaking (sensemaking.md) clarified the whole: contamination IS real with 4 vector types + per-artifact intensity variation (sources HEAVY; adoption PARTIAL; runtime CLEAN; integration-layer-doc AT-RISK); 3-layer scoped corrective architecture (Layer 1 SOURCE deprecate + extract; Layer 2 PREVENTIVE authoring guidance; Layer 3 AMENDMENT lightweight note); orphan-status verified empirically → Layer 1 feasible; META-mechanism = "surgical adoption without semantic re-test"; routeman.md / SKILL.md NO corrective needed; 1 false-positive cleared (`stale + superseded`); research-frontier flag for cross-discipline methodology.

---

## Step 1 — Coupling Map (Perceive Coupling Topology)

### Elements identified

From SV6 stabilized model, 17 design elements compose the audit deliverable + corrective architecture:

| ID | Element |
|---|---|
| E1 | Contamination diagnostic — 4 vector types named (Vocabulary / Budget-framing / Tree-expansion / Warmup-routing) |
| E2 | Per-artifact intensity scorecard — 7 artifacts measured (mrn / nci / 24-00 / 11-00 / integration-layer-doc / routeman.md / SKILL.md) |
| E3 | Deprecate `navigation_context_intake.md` (Layer 1) |
| E4 | Extract preservation-worthy content from `multi_resolution_navigation.md` (Layer 1; sub-action of P4 below) |
| E5 | Author NEW thin routeman-specific persistence spec (Layer 1; consumes E4 extraction) |
| E6 | Deprecate `multi_resolution_navigation.md` after extraction (Layer 1) |
| E7 | Author integration-layer document authoring-guidance (Layer 2 PREVENTIVE — primary corrective) |
| E8 | Append deprecation note to 24-00 finding (Layer 3 AMENDMENT) |
| E9 | Routeman.md cold-read confirmation (no corrective needed; document the cleanliness audit) |
| E10 | SKILL.md cold-read confirmation (no corrective needed) |
| E11 | META-mechanism naming — "surgical adoption without semantic re-test" |
| E12 | Preservation value content list (Breadth Invariant + Frontier Ledger integrity + selection-boundary + "unrun does not mean rejected" + structural schema fields + Resume Note pattern) |
| E13 | Strip-list content (4 vector types per artifact) |
| E14 | Orphan-status verification result documentation (empirical grep evidence) |
| E15 | 14-39 chronological priority verification (status-value false-positive cleared) |
| E16 | Pattern generalization research-frontier (FF-S6 — cross-discipline methodology) |
| E17 | "Surgical + semantic-re-test" methodology candidate description (refinement of 24-00's pattern) |

### Coupling assessment (pairwise change-propagation)

- **(E1, E11, E14, E15):** STRONG. All are DIAGNOSTIC content — the contamination naming + meta-mechanism + empirical verifications form a coherent diagnostic narrative. Change any → ripple through the audit's findings.
- **(E2, E1):** STRONG. Per-artifact intensity scorecard depends on the vector types being defined first.
- **(E12, E13):** STRONG. Preservation list + strip list are complementary — together they specify the FILTER rule that drives correctives.
- **(E3, E4, E5, E6):** STRONG within Layer 1. E4 extraction feeds E5 new spec; E5 must ship before E6 deprecates mrn (so the deprecation note can point to E5's new spec). E3 (deprecate nci) is independent of E4/E5/E6 within Layer 1.
- **(E5, E7):** MODERATE. E7 (authoring guidance) cross-references E5's new thin spec; E7 must know E5 exists.
- **(E5, E8):** MODERATE. E8 (24-00 amendment) cross-references E5's new thin spec; amendment note documents the protocol replacement.
- **(E12, E5/E7/E8):** STRONG. The preservation list drives all 3 correctives' content decisions.
- **(E13, E5/E7):** STRONG. The strip list drives Layer 1 extraction (what NOT to include in new spec) + Layer 2 authoring guidance (what NOT to restate in integration-layer document).
- **(E9, E10):** WEAK between themselves. Cold-read confirmations are independent.
- **(E16, E17):** STRONG within research-frontier cluster. Pattern generalization + methodology candidate are paired observations.

### Coupling map (clusters)

**Cluster A — DIAGNOSTIC CONTENT** (E1 + E2 + E11 + E14 + E15)
- Bound by: shared role of producing the audit's diagnostic findings; mutual citation in correctives.

**Cluster B — FILTER SPECIFICATIONS** (E12 + E13)
- Bound by: complementary rules (preserve vs strip) that drive all 3 corrective layers' content decisions.

**Cluster C — LAYER 1 SOURCE-LEVEL CORRECTIVES**
- Sub-cluster C1: E3 (deprecate nci) — standalone within Layer 1.
- Sub-cluster C2: E4 + E5 (extract + new spec) — paired; extraction is sub-action of new spec authoring.
- Sub-cluster C3: E6 (deprecate mrn) — depends on E5.

**Cluster D — LAYER 2 PREVENTIVE CORRECTIVE** (E7)
- Bound by: standalone deliverable; primary corrective per Sensemaking SV6.

**Cluster E — LAYER 3 AMENDMENT CORRECTIVE** (E8)
- Bound by: standalone deliverable; lightweight after Layer 1.

**Cluster F — COLD-READ CONFIRMATION** (E9 + E10)
- Bound by: no-action verifications for routeman.md + SKILL.md.

**Cluster G — RESEARCH FRONTIER** (E16 + E17)
- Bound by: cross-discipline pattern + methodology candidate.

### Major boundaries (valleys of low coupling)

- **Boundary A-B:** between diagnostic content (A) and filter specifications (B). Interface: B's preservation/strip lists are derived from A's vector type naming.
- **Boundary A/B-(C+D+E):** between diagnostic/filter content (A+B) and corrective deliverables (C+D+E). Interface: content drives correctives.
- **Boundary C-D-E:** between Layer 1 (source) and Layer 2 (preventive) and Layer 3 (amendment). Interface: each layer is a separate deliverable; share filter specs but produce independent artifacts.
- **Boundary A-F:** between diagnostic (A) and cold-read confirmation (F). Interface: F is essentially diagnostic-extension for the no-corrective artifacts.
- **Boundary all-G:** between core audit (A-F) and research-frontier (G). Interface: G emerges from the audit's findings but is preserved as future work.

---

## Step 2 — Detect Boundaries (Top-Down)

9 natural pieces:

| Piece | Cluster | Candidate boundary |
|---|---|---|
| P1 | Cluster A | Contamination diagnostic (4 vector types + per-artifact intensity scorecard + META-mechanism naming + empirical verifications) |
| P2 | Cluster B | Filter specifications (preservation list + strip list) |
| P3 | Cluster C1 | Deprecate `navigation_context_intake.md` (Layer 1) |
| P4 | Cluster C2 | Author NEW thin routeman-specific persistence spec (Layer 1; consumes extraction of preservation-worthy mrn content) |
| P5 | Cluster C3 | Deprecate `multi_resolution_navigation.md` after P4 ships (Layer 1) |
| P6 | Cluster D | Integration-layer document authoring-guidance (Layer 2 PREVENTIVE) |
| P7 | Cluster E | Append deprecation note to 24-00 finding (Layer 3 AMENDMENT) |
| P8 | Cluster F | Cold-read confirmation documentation (routeman.md + SKILL.md no-corrective) |
| P9 | Cluster G | Research frontier + "surgical + semantic-re-test" methodology candidate |

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atomic elements

- **Atom: 4 vector type names** (Navigation vocabulary; budget-framing; tree-expansion / parent-child framing; warmup-routing). Belongs to P1.
- **Atom: 7 per-artifact intensity assessments** (HEAVY / PARTIAL / CLEAN / AT-RISK / N-A per artifact). Belongs to P1.
- **Atom: META-mechanism statement** ("surgical adoption without semantic re-test"). Belongs to P1.
- **Atom: 3 empirical verifications** (orphan-status grep; 14-39 chronological priority; other-7-protocols routeman cross-ref). Belongs to P1.
- **Atom: 6+ preservation-list items** (Breadth Invariant; Frontier Ledger integrity; selection-boundary; "unrun does not mean rejected"; structural schema fields; Resume Note pattern). Belongs to P2.
- **Atom: strip-list items per vector type** (vocabulary words; budget fields; tree-expansion fields; warmup-routing structure). Belongs to P2.
- **Atom: nci deprecation note text** — belongs to P3.
- **Atom: new thin spec sections** (Identity + invariants + Frontier Ledger semantics + structural schema + lifecycle + hybrid placement + Resume Note). Belongs to P4.
- **Atom: mrn deprecation note text** — belongs to P5.
- **Atom: authoring-guidance document sections** (preface + diagnostic citation + RESTATE rules + STRIP rules + cross-reference rules + worked example). Belongs to P6.
- **Atom: 24-00 deprecation note text** — belongs to P7.
- **Atom: routeman.md scorecard + SKILL.md scorecard + status-value false-positive evidence** — belongs to P8.
- **Atom: FF-S6 frontier flag statement + "surgical + semantic-re-test" methodology description**. Belongs to P9.

### Boundary alignment check

- P1 atom-cluster: 4 vectors + 7 intensities + meta-mechanism + 3 verifications. Aligns with Cluster A. ✓
- P2 atom-cluster: preservation list + strip list. Aligns with Cluster B. ✓
- P3 atom-cluster: nci deprecation note. Aligns with Cluster C1. ✓
- P4 atom-cluster: new thin spec sections + extracted content. Aligns with Cluster C2. ✓
- P5 atom-cluster: mrn deprecation note. Aligns with Cluster C3. ✓
- P6 atom-cluster: authoring-guidance document sections. Aligns with Cluster D. ✓
- P7 atom-cluster: 24-00 deprecation note. Aligns with Cluster E. ✓
- P8 atom-cluster: 2 scorecards + false-positive evidence. Aligns with Cluster F. ✓
- P9 atom-cluster: frontier flag + methodology description. Aligns with Cluster G. ✓

### Confidence

Top-down and bottom-up agree on all 9 piece boundaries. **HIGH confidence.** No splitting or merging required.

---

## Step 4 — Question Tree (Express as Questions with Verification Criteria)

### P1 — Contamination diagnostic

**Question:** What is the contamination diagnostic — the 4 vector types per artifact, per-artifact intensity scorecard, META-mechanism naming, and empirical verifications?

**Verification criteria:**
- [ ] 4 vector types named: (a) Capital-N "Navigation" vocabulary; (b) budget-framing (`coverage_mode` + `batch_size` + `expansion_policy` + `scheduling_policy` + budget-coupled status values); (c) tree-expansion / parent-child framing (`parent_map` + `child_map_path` + `children/<id>/` folder + `depth` field + Step 7 Create Child Maps); (d) warmup-routing (5 routing decisions → 5 deprecated warmup files).
- [ ] Per-artifact intensity scorecard (7 artifacts): `multi_resolution_navigation.md` HEAVY; `navigation_context_intake.md` HEAVY + obsolete; 24-00 adoption PARTIAL; 11-00 structural-layer Persistence Model PARTIAL; integration-layer document (route 8, not yet authored) AT-RISK; `routeman.md` CLEAN (post-user-correction); `routeman/SKILL.md` CLEAN.
- [ ] META-mechanism named: "surgical adoption without semantic re-test" — the 24-00 self-described "surgical" pattern + the missing semantic-re-test step.
- [ ] Empirical verification 1: orphan-status grep result (C8) — mrn + nci NOT actively referenced beyond deprecated/archived/design-history paths.
- [ ] Empirical verification 2: 14-39 chronological priority (A2) — `stale + superseded` status values named in 14-39 (2026-05-23), predating mrn adoption (24-00 at 2026-05-24); status-value overlap is independent, NOT inheritance.
- [ ] Empirical verification 3: other-7-protocols routeman cross-ref grep (SP7) — routeman runtime files reference NONE of the other 7 project protocols; no additional contamination vectors beyond user-named two.

### P2 — Filter specifications

**Question:** What content survives in correctives (preservation list) vs what content is stripped (strip list), and where does each list apply?

**Verification criteria:**
- [ ] **Preservation list** (content to RESTATE in new thin spec / authoring guidance / amendment):
  - Breadth Invariant ("Breadth is desired at the discovery layer; a large route frontier is not a defect by itself")
  - Frontier Ledger integrity ("prevents budgeted traversal from erasing coverage"; rephrased for routeman as "preserves enumerate-all integrity across invocations")
  - selection-boundary commitment ("does not select the final route")
  - "Unrun does not mean rejected. Out-of-policy does not mean nonexistent." (rephrased for routeman as "Unrun does not mean rejected. Deferred does not mean nonexistent.")
  - Structural schema fields: `candidate_id`, `status`, `blocked_by`, `continuation_note` (domain-agnostic; reusable)
  - Resume Note pattern (cross-invocation continuity instruction)
  - Lifecycle commitments: persistent + in-place evolution + append (24-00's adopted commitment)
  - Hybrid placement: per-inquiry + project-scope (24-00's adopted commitment)
- [ ] **Strip list** (content to REMOVE from new thin spec / forbid in authoring guidance):
  - Vector (a) Vocabulary: all Capital-N "Navigation" uses; "Navigation map"; "Navigation handoff"; "navigator-..." filenames; alias "multi-resolution Navigation".
  - Vector (b) Budget-framing: `coverage_mode: budgeted/exhaustive/sampled`; `batch_size`; `expansion_policy`; `scheduling_policy`; budget-coupled status values (`deferred_by_budget`, `out_of_policy`, `scheduled`); failure modes "Hidden Coverage Cap" + "Sampling Confused With Coverage"; Steps 5 + 6 (Select Coverage Mode + Schedule Current Batch).
  - Vector (c) Tree-expansion: `parent_map`, `parent_route`, `child_map_path` schema fields; `children/<route-id>/navigation.md` folder structure; Step 7 (Create Child Maps); "depth: integer >= 1" input contract; "Child-Map Sprawl" failure mode.
  - Vector (d) Warmup-routing: entire nci structure (5 routing decisions; warmup file references; warmup-centric Input Classification fields).
- [ ] Filter rule applies across: P4 (extraction at new thin spec); P6 (authoring guidance for integration-layer document); P7 (amendment to 24-00).

### P3 — Deprecate navigation_context_intake.md

**Question:** How is `navigation_context_intake.md` deprecated, and where does the deprecation marker live?

**Verification criteria:**
- [ ] Decision: deprecation note inline (top of existing file) vs file move to `cognitive_harness/protocols/_archive/`. Recommend: move to `_archive/` since the file is architecturally obsolete + has no reusable value worth preserving (per Sensemaking R6).
- [ ] If moved: file becomes `cognitive_harness/protocols/_archive/navigation_context_intake.md` (existing `_archive/navigation_context_intake_my_version.md` already exists as alternate version; coexists with this archival).
- [ ] Deprecation note (either inline or as separate `_archive_note.md`) states:
  - Architecturally obsolete per 16-31 corrected isolated-session + file-scanning architecture (warmup-routing pattern no longer applies).
  - Empirically orphaned (grep verification: no active references beyond deprecated_navigation/ self-refs + this archive).
  - No reusable content warranting preservation (the few generic safety rules — "Missing-context warnings preserved"; "No route was selected by this controller" — are already inherited by other disciplines OR generic enough not to require this file).
  - Cross-reference to this contamination audit finding for the deprecation rationale.
- [ ] Pre-edit verification: confirm orphan status (re-run grep at deprecation time).

### P4 — Author new thin routeman-specific persistence spec

**Question:** What is the new thin spec, where does it live, what content does it contain (extracted from mrn per preservation list, structured for routeman's enumerate-all identity)?

**Verification criteria:**
- [ ] New file at `cognitive_harness/protocols/routeman_persistence.md` (proposed location; final naming open to refinement).
- [ ] Length: ~150-250 lines (significantly shorter than mrn's 566 lines; reflects strip-list removal).
- [ ] Sections:
  - **Loading note** (load-trigger directive).
  - **Identity** (this protocol's role: persistence ledger for routeman's enumerate-all Route Map across invocations).
  - **Invariants:** Breadth Invariant + Frontier Ledger integrity + selection-boundary + "Unrun does not mean rejected. Deferred does not mean nonexistent." (preservation list items 1-4).
  - **Schema:** structural fields (`candidate_id`, `status`, `blocked_by`, `continuation_note`) per preservation list item 5; status values aligned with routeman.md's reachability set (`open / blocked / deferred / active / done / stale / superseded`); NO budget-coupled status values.
  - **Lifecycle:** persistent + in-place evolution + append (24-00 commitment; preservation item 7).
  - **Placement:** hybrid by invocation scope (per-inquiry vs project-scope; 24-00 commitment; preservation item 8).
  - **Resume Note pattern** (preservation list item 6).
  - **Non-goals:** explicit list stripping budget-framing, tree-expansion, Navigation vocabulary, warmup-routing.
  - **Cross-references:** routeman.md (the discipline this protocol serves); NO references to mrn or nci.
- [ ] Self-contained per project conventions (no design-history `devdocs/inquiries/` pointers within the spec).
- [ ] STRIP-LIST audit passes: no occurrences of any strip-list term in the new spec (grep verification).

### P5 — Deprecate multi_resolution_navigation.md

**Question:** How is `multi_resolution_navigation.md` deprecated after P4 ships, and where does the pointer to the new thin spec live?

**Verification criteria:**
- [ ] Decision: deprecation note inline (top of existing file) vs file move to `cognitive_harness/protocols/_archive/`. Recommend: move to `_archive/` (consistent with P3 nci handling).
- [ ] If moved: `cognitive_harness/protocols/_archive/multi_resolution_navigation.md`.
- [ ] Deprecation note (inline or `_archive_note.md`) states:
  - Replaced by the new thin spec at `cognitive_harness/protocols/routeman_persistence.md` (from P4).
  - Replacement rationale: this file's design carried 4 contamination vectors (Navigation vocabulary + budget-framing + tree-expansion + warmup-routing-adjacent assumptions) inappropriate for routeman's corrected enumerate-all + file-scanning + isolated-session identity.
  - Preservation-worthy content extracted to new thin spec: Breadth Invariant, Frontier Ledger integrity, selection-boundary, "Unrun does not mean rejected", structural schema fields, Resume Note pattern, lifecycle, hybrid placement.
  - Stripped content (4 vector types per strip list).
  - Cross-reference to this contamination audit finding for full diagnostic.
  - Cross-reference to 24-00 finding amendment (P7) for the adoption-level corrective.
- [ ] Pre-deprecation verification: confirm P4's new thin spec exists and contains the preservation-worthy content (P5 depends on P4 per dependency order).

### P6 — Integration-layer document authoring guidance

**Question:** What pre-authoring guidance does the integration-layer document author (route 8 from readiness Route Map) need to filter contamination?

**Verification criteria:**
- [ ] Guidance document at `devdocs/routeman/2026-05-25__integration-layer-authoring-guidance.md` (or appropriate location).
- [ ] Sections:
  - **Purpose:** this guidance is PRE-AUTHORING — ships before the integration-layer document author begins; specifies content rules so contamination is filtered at source.
  - **Diagnostic citation:** brief recap of the contamination audit's findings (P1 diagnostic) so author understands WHY rules exist.
  - **RESTATE rules:** the preservation list (P2) — what content from mrn (now deprecated; see new thin spec at P4) can be RESTATED in the integration-layer document.
  - **STRIP rules:** the strip list (P2) — what content MUST NOT appear in the integration-layer document (4 vector types).
  - **Cross-reference rules:** when referring to persistence semantics, cross-reference NEW thin spec (P4), NOT mrn.
  - **Worked example:** sample integration-layer document section showing the rules applied (e.g., a "Persistence Model" section that RESTATES preservation-worthy content + STRIPS budget-framing + cross-references new thin spec).
  - **Verification at authoring time:** grep audit ("grep for strip-list terms in authored content; verify 0 matches").
- [ ] Author can read this guidance + author integration-layer document without further contamination-audit inquiry.

### P7 — Amendment to 24-00 finding

**Question:** How is the 24-00 finding amended with a deprecation note documenting that mrn has been replaced?

**Verification criteria:**
- [ ] Note format: standard project pattern — append a "📌 Subsequent additions notice (applied 2026-05-25; source inquiry: this contamination audit)" block to 24-00 finding (matches the pattern used in 14-39 design memo for subsequent additions).
- [ ] Note content:
  - Documents that the adopted `multi_resolution_navigation.md` has been deprecated per this contamination audit (cite this finding).
  - Replaced by new thin spec at `cognitive_harness/protocols/routeman_persistence.md` (P4).
  - Inherited 24-00 commitments that SURVIVE via the new thin spec:
    - File naming (`_navig.md` + `routeman.md`)
    - Hybrid placement (per-inquiry vs project-scope)
    - Lifecycle (persistent + in-place evolution + append)
    - Structural schema fields (`candidate_id`, `status`, `blocked_by`, `continuation_note`)
    - Two-tier boundary with branch_inquiry (sub-routes via child-map mechanism — note: this needs separate re-evaluation per FF-S2; the boundary survives but the tree-expansion framing of "child-map" should be aligned with routeman's enumerate-all rather than mrn's tree-expansion)
  - Inherited 24-00 commitments that are STRIPPED (contaminated and not preserved):
    - Budget-framed schema fields (`expansion_reason`, `eligibility`, `eligibility_reason`, `scheduling_reason`) — replaced by simpler `status` + `blocked_by` structural fields
    - Tree-expansion schema (`parent_map`, `parent_route`, `child_map_path` as load-bearing structural fields)
  - The META-mechanism of context-poisoning ("surgical adoption without semantic re-test") is named; future adoptions in the project should apply explicit semantic re-test step.
- [ ] 24-00 finding's body content NOT rewritten — only the additions notice is appended (additive amendment, not re-do per A5).

### P8 — Cold-read confirmation

**Question:** What documents that routeman.md + SKILL.md need no corrective + the status-value false-positive is cleared?

**Verification criteria:**
- [ ] Routeman.md cold-read scorecard documented:
  - Line 149 "per-mode pointer-count budget" — local sense in adaptive-guidance; NOT multi_resolution_navigation budget-framing. ACCEPTABLE.
  - Line 343 "navigation/handoff product" (lowercase n) — generic word, not discipline name. ACCEPTABLE.
  - `stale + superseded` reachability values — FALSE-POSITIVE cleared (P1 empirical verification 2: 14-39 chronological priority).
  - Zero warmup-pattern occurrences; zero tree-expansion structural-field occurrences. CLEAN.
- [ ] SKILL.md scorecard: CLEAN (40-line procedural orchestrator with no contamination surface; grep returns 0 matches for strip-list terms).
- [ ] Explicit verdict: NO CORRECTIVE NEEDED at the routeman runtime artifact level (post-user-correction effectiveness confirmed).
- [ ] Documentation lives in this audit's finding (as part of the audit deliverable; not a separate file).

### P9 — Research frontier + methodology candidate

**Question:** What pattern emerges for cross-discipline protocol-rename coordination + what methodology candidate refines 24-00's "surgical" pattern?

**Verification criteria:**
- [ ] FF-S6 documented as research frontier: "legacy-protocols-contaminate-new-disciplines pattern" — when a discipline is renamed, project artifacts (protocols, schemas, conventions) designed for the OLD discipline may carry forward without semantic re-test. The routeman/navigation case is N=1 instance. Revival trigger: a second discipline rename in the project (per 14-39's COULD-deferred "second rename" trigger; the user previously implied this is plausible).
- [ ] "Surgical + semantic-re-test" methodology candidate described:
  - The "surgical adoption" pattern (24-00's self-description) is appropriate when the adoption preserves source-file integrity (filename-level aliasing; minimal source-file modification).
  - The MISSING step is "semantic re-test" — does the adopted source content's framings still fit the adopting discipline's identity? If not, what survives vs strips?
  - The refined methodology = "surgical + semantic-re-test": surgical at filename level + explicit semantic re-test step + per-content RESTATE-or-STRIP decision per the adopting discipline's identity.
  - This methodology can be applied retroactively (this audit IS the retroactive semantic re-test on 24-00's adoption) or proactively (future adoptions include the step at adoption-inquiry time).
- [ ] Cross-references to current routeman/navigation case as the N=1 instance grounding the pattern.
- [ ] Preserved as Open Questions in finding (revival trigger: second discipline rename).

---

## Step 5 — Interface Map

| From | To | What flows | Direction | Type |
|---|---|---|---|---|
| P1 | P2 | Vector type definitions (P1 names 4 types) drive the strip list in P2 | one-way | content-derivation |
| P1 | P3 | Diagnostic cited in P3's deprecation note (architecturally-obsolete reasoning) | one-way | cross-reference |
| P1 | P4 | Diagnostic cited in P4's new thin spec preface (replacement rationale) | one-way | cross-reference |
| P1 | P5 | Diagnostic cited in P5's deprecation note (replacement rationale) | one-way | cross-reference |
| P1 | P6 | Diagnostic cited in P6's authoring guidance (WHY rules exist) | one-way | cross-reference |
| P1 | P7 | META-mechanism cited in P7's amendment note (the "surgical without semantic re-test" pattern) | one-way | cross-reference |
| P1 | P8 | Empirical verifications referenced in P8 cold-read scorecard | one-way | data |
| P1 | P9 | Pattern emerges from P1 diagnostic | one-way | data |
| P2 | P4 | Preservation list drives new thin spec content | one-way | content-derivation |
| P2 | P4 | Strip list determines what NOT to include in new thin spec | one-way | content-derivation |
| P2 | P6 | Both lists drive authoring guidance's RESTATE / STRIP rules | one-way | content-derivation |
| P2 | P7 | Preservation list determines what 24-00 commitments SURVIVE via new thin spec | one-way | content-derivation |
| P4 | P5 | P5 deprecation note must cross-reference P4's new spec; P4 must ship FIRST | one-way | dependency |
| P4 | P6 | P6 authoring guidance cross-references new thin spec from P4 | one-way | dependency |
| P4 | P7 | P7 amendment cites new thin spec from P4 | one-way | dependency |
| P9 | (future-inquiry) | Research-frontier flag for cross-discipline methodology | one-way | research-pointer |

### Hidden-coupling check (Assumptions-not-data per Step 5 refinement)

- **P4 assumes location convention** for new thin spec. Decision needed: `cognitive_harness/protocols/routeman_persistence.md` is the proposed location. Made explicit in P4 verification criteria.
- **P6 assumes integration-layer document hasn't been authored yet.** Verified: route 8 status is "open" in the readiness Route Map. Made explicit in P6 verification criteria.
- **P5 + P3 assume nothing breaks when source protocols are deprecated** — orphan status verified (C8) in P1 empirical verification 1. Made explicit.
- **P7 assumes 24-00 finding is amendable in-place** — project convention: design-history findings are amendable via subsequent notice blocks (14-39 has multiple). Made explicit.
- **P6 assumes future integration-layer document author will follow the guidance.** Norm-based assumption (process discipline; not auto-enforced). Acceptable at L0; future tooling (build-time grep check on integration-layer document) is L1+ refinement.

No silent hidden coupling. All assumptions surface as explicit interface flows or verification criteria.

---

## Step 6 — Dependency Order

### Dependencies derived from interfaces

- **P1 (diagnostic)** — foundational; no dependencies. Wave 1.
- **P2 (filter specs)** — depends on P1 (vector type naming). Wave 1 (can start in parallel with P1; P2 finalizes once P1 is complete).
- **P8 (cold-read confirmation)** — depends on P1 (empirical verifications + diagnostic context). Wave 1 (in parallel; minimal content beyond P1's evidence).
- **P9 (research frontier)** — depends on P1 (pattern emerges from diagnostic). Wave 1 (in parallel).
- **P3 (deprecate nci)** — depends on P1 (deprecation rationale). Wave 2.
- **P4 (new thin spec)** — depends on P1 + P2 (extraction uses preservation list; strip-list determines what to exclude). Wave 2.
- **P5 (deprecate mrn)** — depends on P4 (must cross-reference new thin spec); also depends on P1 + P2. Wave 3.
- **P6 (authoring guidance)** — depends on P1 + P2 + P4 (cross-references new thin spec). Wave 3.
- **P7 (24-00 amendment)** — depends on P1 + P2 + P4 (cites new thin spec). Wave 3.

### Wave ordering

```
Wave 1: P1 (diagnostic) ∥ P2 (filter specs — finalizes once P1 done) ∥ P8 (cold-read confirmation) ∥ P9 (research frontier)
       │
       ▼
Wave 2: P3 (deprecate nci) ∥ P4 (new thin spec)
       │
       ▼
Wave 3: P5 (deprecate mrn) ∥ P6 (authoring guidance) ∥ P7 (24-00 amendment)
```

No circular dependencies. Within each wave, pieces can proceed in parallel by exchanging interface contracts up-front.

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions

| Dimension | Check | Result |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | **PASS.** P1 + P2 + P8 + P9 are independently answerable. P3 depends on P1 + P2 interface contracts (deprecation rationale + strip list); content is independent. P4 depends on P1 + P2 interface contracts; content is independent. P5/P6/P7 depend on P4 cross-reference contract; content is independent. |
| **Completeness** | Do the pieces cover the whole? | **PASS.** All 7 _branch.md sub-aspects mapped: SA1 mrn analysis → P1 + P5; SA2 nci analysis → P1 + P3; SA3 24-00 adoption re-test → P1 (meta-mechanism) + P7; SA4 Navigation vocabulary → P1 vector + P4 strip + P6 strip rule; SA5 routeman.md cold-read → P8; SA6 integration-layer document audit → P6; SA7 corrective scope decisions → P3 + P4 + P5 + P6 + P7 + P8 + P9. All 5 sensemaking commitments mapped: COMMIT-1 4 vector types → P1; COMMIT-2 per-artifact intensity → P1; COMMIT-3 corrective scope follows intensity → P3-P9 distribution; COMMIT-4 preservation must survive → P2 + P4; COMMIT-5 meta-mechanism → P1 + P9. No gap. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS.** Given P1 diagnostic + P2 filter specs + P3 nci deprecation + P4 new thin spec + P5 mrn deprecation + P6 authoring guidance + P7 24-00 amendment + P8 cold-read confirmation + P9 research frontier, the result is a complete audit deliverable: diagnostic + filter specs + 3-layer corrective architecture + cold-read no-action confirmation + research frontier for cross-discipline methodology. |

### Determination-mechanism piece check (per Step 7 refinement)

The Q-tree includes load-bearing concepts whose use depends on runtime determination:

- **"Orphan status verification" (P1 empirical verification 1)** — runtime/verification-time check via grep. Mechanism explicit. ✓
- **"Filter rule application" (P2)** — authoring-time check at each corrective. Mechanism explicit via filter spec + grep at content authoring time. ✓
- **"Integration-layer document existence" (P6)** — runtime check of whether route 8 has been authored. Mechanism explicit: P6 ships PRE-authoring; trigger is "before integration-layer document author starts." ✓
- **"Pattern recurrence" (P9)** — observable check over time. Mechanism explicit: revival trigger is "second discipline rename in the project." ✓

All load-bearing runtime determinations have an addressing piece. **PASS.**

### Full 7-dimension evaluation

| Dimension | Result |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| **Tractability** | PASS. Each piece is a single focused deliverable. P1 (diagnostic) + P4 (new thin spec) are the largest; both tractable in one pass each. |
| **Interface clarity** | PASS. 16 interfaces enumerated with type (content-derivation / cross-reference / data / dependency / research-pointer). Hidden-coupling check surfaces all assumptions as explicit interfaces or verification criteria. |
| **Balance** | PASS with note. P1 + P2 + P4 + P6 are larger (content-pieces); P3 + P5 + P7 + P8 + P9 are smaller (note/scorecard pieces). Imbalance is structural — content pieces are intrinsically larger than note/scorecard pieces. Not severe. |
| **Confidence** | HIGH. Top-down clustering (7 clusters with sub-clusters in Cluster C) + bottom-up atom-grouping align on all 9 piece boundaries. Step 3 validation passed with no boundary disagreements. |

### Failure-mode check

- **Premature Decomposition:** No (sensemaking clarified the whole via SV6 stabilized model + 5 commitments + orphan-status empirical anchor).
- **Wrong Boundaries:** No (cuts at low-coupling regions: diagnostic vs filter vs correctives vs cold-read vs research-frontier).
- **Hidden Coupling:** No (assumptions-not-data check surfaces all assumptions as explicit interfaces or verification criteria).
- **Missing Pieces:** No (Completeness check covers all 7 sub-aspects + 5 commitments; Determination-mechanism check covers all 4 runtime determinations).
- **Over-Decomposition:** No (9 pieces for a 7-sub-aspect audit is appropriate; the +2 = filter specs as separate piece + research frontier as separate piece — both structurally justified).
- **Ignoring Dependencies:** No (3-wave ordering explicit; within-wave parallelism explicit; no circular dependencies).
- **Imbalanced Decomposition:** Mild imbalance (content pieces vs note/scorecard pieces) — structurally appropriate, not a failure.

---

## Final Deliverable

### 1. Coupling Map

7 clusters: A (DIAGNOSTIC CONTENT) + B (FILTER SPECIFICATIONS) + C (LAYER 1 SOURCE-LEVEL CORRECTIVES with sub-clusters C1/C2/C3) + D (LAYER 2 PREVENTIVE) + E (LAYER 3 AMENDMENT) + F (COLD-READ CONFIRMATION) + G (RESEARCH FRONTIER).

### 2. Question Tree

9 pieces — P1 (diagnostic) + P2 (filter specs) + P3 (deprecate nci) + P4 (new thin spec) + P5 (deprecate mrn) + P6 (authoring guidance) + P7 (24-00 amendment) + P8 (cold-read confirmation) + P9 (research frontier). Each with question + verification criteria (above).

### 3. Interface Map

16 interfaces enumerated in Step 5 with type (content-derivation / cross-reference / data / dependency / research-pointer) and direction (all one-way). No hidden coupling.

### 4. Dependency Order

3 waves: Wave 1 (P1 ∥ P2 ∥ P8 ∥ P9); Wave 2 (P3 ∥ P4); Wave 3 (P5 ∥ P6 ∥ P7). Within-wave parallelism with interface contracts up-front.

### 5. Self-Evaluation

- Minimum 3 dimensions: Independence ✓, Completeness ✓, Reassembly ✓.
- Determination-mechanism piece check: PASS (4 runtime determinations all addressed).
- Full 7 dimensions: all PASS (mild structural imbalance on content vs note pieces; not a failure).
- Failure-mode check: 7/7 clean.

**Overall: PROCEED**
