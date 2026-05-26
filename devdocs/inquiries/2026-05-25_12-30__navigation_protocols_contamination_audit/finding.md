---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Navigation-protocols contamination audit on routeman design

## Question

Did `cognitive_harness/protocols/multi_resolution_navigation.md` and `cognitive_harness/protocols/navigation_context_intake.md` — both designed for the deprecated `/navigation` discipline before the 16-31 architecture correction and before the routeman rename — context-poison the routeman discipline generation process? If yes, what specifically was contaminated, and what corrective is needed at what scope (protocol-level / adoption-level / routeman-design-level)?

The Goal: a diagnostic with NAMED contamination vectors (per-artifact origin traces) + ACTIONABLE corrective recommendations (scoped per artifact intensity) + clarity on whether the corrective is needed at all (or whether the user's recent correction to make routeman.md a pure thinking discipline already mitigated). Layer Commitment: MEANING primary (structural + process layers treated as symptoms).

## Executive Summary

**The user's contamination concern is structurally validated.** Contamination IS real with 4 distinct vector types (Navigation vocabulary; budget-framing; tree-expansion / parent-child framing; warmup-routing). The intensity varies dramatically by artifact:

- The 2 source protocols are HEAVILY contaminated.
- The 24-00 adoption is PARTIALLY contaminated (surgical-at-filename without semantic re-test).
- The 11-00 structural-layer inquiry's Persistence Model section is PARTIALLY contaminated (RESTATE-WITH-CROSS-REFERENCE propagates contamination via restatement).
- The integration-layer document (route 8 from the readiness Route Map; not yet authored) is AT-RISK.
- The just-shipped `routeman/SKILL.md` + `routeman/references/routeman.md` are MOSTLY CLEAN — cold-read confirms the user's recent correction (making routeman.md a pure thinking discipline) was effective. One potential contamination flagged + cleared as false-positive via 14-39 chronological priority.

**The headline finding: routeman runtime files need NO corrective.** The contamination concern is real but lives in design-history artifacts + the not-yet-authored integration-layer document. The corrective is preventive (catch at integration-layer authoring time) + cleanup (deprecate source protocols + amend adoption finding).

**The META-mechanism of context-poisoning is "surgical adoption without semantic re-test"** — 24-00 self-described its adoption as "surgical" (filename-level aliasing); the gap is that semantic re-test was deferred and never performed. Future adoptions in the project should apply explicit semantic re-test step.

**PRIMARY action (do this first): author the integration-layer document PRE-authoring guidance (P6) BEFORE the integration-layer document author begins.** This catches contamination before propagation. Cheapest long-term corrective.

**Enabling actions (parallel or following): deprecate the two source protocols + author a NEW thin routeman-specific persistence spec extracting preservation-worthy content. Project surface area shrinks; orphan-status verification confirms zero active-disruption downside.**

**Closing action (lightweight): append a deprecation note to 24-00 finding documenting the protocol replacement.**

**No action needed on `routeman.md` + `SKILL.md` — already clean post-user-correction.**

## Finding Summary

- **Contamination IS real with 4 vector types.** (a) Capital-N "Navigation" vocabulary; (b) budget-framing (`coverage_mode` + `batch_size` + `expansion_policy` + `scheduling_policy` + budget-coupled status values like `deferred_by_budget`); (c) tree-expansion / parent-child framing (`parent_map` + `child_map_path` + `children/<id>/` folder + Step 7 Create Child Maps); (d) warmup-routing pattern (5 routing decisions → 5 deprecated warmup files). Each type maps to a different corrective tactic.

- **Contamination INTENSITY varies dramatically by artifact** (7-artifact scorecard). `multi_resolution_navigation.md` HEAVY; `navigation_context_intake.md` HEAVY + architecturally obsolete; 24-00 adoption PARTIAL; 11-00 structural-layer Persistence Model section PARTIAL; integration-layer document (not yet authored) AT-RISK; `routeman/references/routeman.md` CLEAN (post-user-correction); `routeman/SKILL.md` CLEAN.

- **The META-MECHANISM of context-poisoning is "surgical adoption without semantic re-test".** 24-00 self-described its adoption methodology as "surgical" (acknowledging narrowness — aliased filenames `_frontier.md` → `_navig.md` and `navigation.md` → `routeman.md`). The gap: semantic-content re-test (does this protocol's framings match routeman's corrected identity?) was deferred and never performed. The contamination is not "surgical adoption is bad" — it's "surgical adoption WITHOUT semantic re-test." The methodology candidate `surgical + semantic-re-test` (P9; revival-trigger-preserved) is the project-wide refinement that recurs at any future discipline rename.

- **CRUCIAL empirical anchor: orphan-status verification.** Grep across active code-paths (project root + `cognitive_harness/` + `docs/`) confirms BOTH source protocols are not actively referenced beyond deprecated/archived/design-history paths. `multi_resolution_navigation.md` referenced only by: project README catalog; `cognitive_harness/deprecated_navigation/warmup/` self-references; `archived_skills/bf4ae1f-hg/bf4ae1f-navigation/warmup/`. `navigation_context_intake.md` referenced only by: `cognitive_harness/deprecated_navigation/warmup/navigator-refresh.md`; `cognitive_harness/protocols/_archive/navigation_context_intake_my_version.md`. Active runners / disciplines / SKILL.md files referencing either: ZERO. Routeman runtime files referencing either: ZERO. **Orphan-status verification enables aggressive Layer 1 corrective with zero active-disruption downside.**

- **Routeman.md cold-read confirms cleanliness post-user-correction.** Grep audit of `routeman/references/routeman.md` for contamination patterns returns: 1 acceptable local-sense use ("per-mode pointer-count budget" at line 149 — local sense; not multi_resolution_navigation budget-framing); 1 acceptable local-sense use ("navigation/handoff product" at line 343 — generic word lowercase n; not discipline name); zero warmup-pattern occurrences; zero tree-expansion structural-field occurrences. **One potential contamination flagged and cleared as FALSE-POSITIVE: the reachability values `stale + superseded` overlap with multi_resolution_navigation status set BUT are independently named in 14-39 design memo (2026-05-23; chronologically prior to 24-00 adoption 2026-05-24); the overlap is not inheritance.** SKILL.md cold-read: CLEAN.

- **3-layer scoped corrective architecture** organized by intensity-per-artifact:
  - **Layer 1 — SOURCE-LEVEL** (feasible thanks to orphan status): deprecate `navigation_context_intake.md` entirely (architecturally obsolete + no reusable value); extract preservation-worthy content from `multi_resolution_navigation.md` into a NEW thin routeman-specific persistence spec; deprecate `multi_resolution_navigation.md` after extraction completes.
  - **Layer 2 — PREVENTIVE** (primary corrective): author guidance for integration-layer document (route 8 of the readiness Route Map) PRE-authoring. Guidance specifies what content can be RESTATED (preservation-worthy list) vs what MUST be STRIPPED (4 vector types).
  - **Layer 3 — AMENDMENT** (lightweight after Layer 1): append deprecation note to 24-00 finding documenting that the adopted `multi_resolution_navigation.md` has been replaced by the new thin spec.
  - **NOT-NEEDED at routeman-runtime level** (routeman/SKILL.md + routeman/references/routeman.md cold-read confirms cleanliness).

- **Preservation list** (content that survives any corrective, RESTATED in new thin spec + integration-layer document):
  - **Breadth Invariant** — "Breadth is desired at the discovery layer; a large route frontier is not a defect by itself." Aligns with routeman's enumerate-all identity.
  - **Frontier Ledger integrity** — protective rule that unexpanded candidates remain visible (rephrased for routeman as "preserves enumerate-all integrity across invocations").
  - **selection-boundary commitment** — the protocol does not select; aligns with routeman.
  - **"Unrun does not mean rejected. Out-of-policy does not mean nonexistent."** (rephrased for routeman as "Unrun does not mean rejected. Deferred does not mean nonexistent.")
  - **Structural schema fields**: `candidate_id`, `status`, `blocked_by`, `continuation_note` (domain-agnostic; reusable).
  - **Resume Note pattern** (cross-invocation continuity).
  - **Lifecycle commitments** (24-00 adopted): persistent + in-place evolution + append.
  - **Hybrid placement** (24-00 adopted): per-inquiry + project-scope.

- **Strip list** (content REMOVED from new thin spec + FORBIDDEN in integration-layer document):
  - Vector (a) Vocabulary: all Capital-N "Navigation" uses; "Navigation map"; "Navigation handoff"; "navigator-..." filenames; alias "multi-resolution Navigation".
  - Vector (b) Budget-framing: `coverage_mode: budgeted/exhaustive/sampled`; `batch_size`; `expansion_policy`; `scheduling_policy`; budget-coupled status values (`deferred_by_budget`, `out_of_policy`, `scheduled`); failure modes "Hidden Coverage Cap" + "Sampling Confused With Coverage"; Steps 5+6 (Select Coverage Mode + Schedule Current Batch).
  - Vector (c) Tree-expansion: `parent_map`, `parent_route`, `child_map_path` schema fields; `children/<route-id>/navigation.md` folder structure; Step 7 (Create Child Maps); `depth: integer >= 1` input contract; "Child-Map Sprawl" failure mode.
  - Vector (d) Warmup-routing: entire `navigation_context_intake.md` structure (5 routing decisions; warmup file references; warmup-centric Input Classification fields).

- **3 critique-committed refinements** form a unified OPERATIONAL ACTIONABILITY layer: R1 (P6 PRE-authoring guidance norm-based-process explicit + L1+ tooling seed documented); R2 (priority sequencing across 9 pieces — HIGHEST P6 PRIMARY; HIGH P4+P3+P5 enabling; MEDIUM P7 closing; FOUNDATIONAL P1+P2+P8+P9 in this finding); R3 (executive summary section — see top of this finding). These make the audit's correctives operator-actionable for bandwidth-constrained operators.

- **Research frontier (P9): the pattern may recur.** When a discipline is renamed (this audit is the N=1 instance for routeman/navigation), inherited project artifacts (protocols, schemas, conventions) that were designed for the OLD discipline carry forward without semantic re-test. The "surgical adoption WITHOUT semantic re-test" pattern is the META-mechanism that enables context-poisoning. The methodology candidate `surgical + semantic-re-test` (refining 24-00's "surgical" pattern by adding the missing step) is preserved as project-wide research-frontier with revival trigger "second discipline rename" — when triggered, this audit's findings inform the new rename's adoption methodology.

## Finding

### Context

The user, after seeing routeman's discipline files just authored, raised a sharp concern: two project protocols — `cognitive_harness/protocols/multi_resolution_navigation.md` (566 lines) and `cognitive_harness/protocols/navigation_context_intake.md` (259 lines) — were designed for the deprecated `/navigation` discipline before the architecture correction (16-31) and before the routeman rename. The user's question: did these protocols context-poison the routeman discipline generation process?

The concern is structurally important. The 24-00 finding ADOPTED `multi_resolution_navigation.md` as routeman's persistence protocol. The 11-00 structural-layer inquiry RESTATED multi_resolution_navigation content (per the RESTATE-WITH-CROSS-REFERENCE pattern). The user's recent correction (routeman.md must be pure thinking discipline) moved the restated content OUT of routeman.md, but the project-integration concerns remain to be authored in a separate integration-layer document (route 8 from the readiness Route Map). If the source protocols carry contamination, the inheritance chain may have propagated it through these subsequent design steps.

This audit operates on inheritance, not on identity. Routeman's identity is settled (14-39 + Q1-Q6 + Q10 resolutions). The audit measures whether the inherited content commits framings or semantics that no longer fit the corrected identity (enumerate-all + isolated-session + file-mediated + observe-only) — and what to do about it.

### 1. Diagnostic — 4 vector types + per-artifact intensity scorecard + META-mechanism + empirical verifications (P1)

#### 1.1 4 contamination vector types

**Vector (a) — Capital-N "Navigation" vocabulary.** Both source protocols use "Navigation" (capital N) as the active discipline name throughout. Examples from `multi_resolution_navigation.md`: "Navigation map" (estimated 30+ occurrences); "Navigation handoff"; "Navigation warm-up current-state brief"; protocol name "MULTI_RESOLUTION_NAVIGATION"; plain-language alias "multi-resolution Navigation". The vocabulary cements the protocols' coupling to the OLD discipline name. Mechanical search/replace fix.

**Vector (b) — Budget-framing.** `multi_resolution_navigation.md` is built around budget + scheduling + child-map-creation patterns. Input contract fields: `coverage_mode: budgeted/exhaustive/sampled`; `batch_size` (required when budgeted); `expansion_policy: all_eligible/expansion_needed/user_selected/high_priority/blocked_high/coverage_thin/custom`; `scheduling_policy: user_order/high_priority_first/blocked_high_first/coverage_thin_first/oldest_pending_first/custom`. Status values (10 total; 4+ budget-coupled): `queued`, `scheduled`, `expanded`, `deferred_by_budget`, `out_of_policy`, `blocked`, `skipped_with_reason`, `pending`, `stale`, `superseded`. Procedural steps centered on budget: Step 5 (Select Coverage Mode); Step 6 (Schedule Current Batch). Failure modes existing because of budget framing: "Hidden Coverage Cap"; "Sampling Confused With Coverage". This framing CONFLICTS with routeman's enumerate-all identity (asymmetric-failure principle: missing a possible move is structurally worse than enumerating an inapplicable one — no budget gating).

**Vector (c) — Tree-expansion / parent-child framing.** `multi_resolution_navigation.md` is also built around tree structure: schema fields `parent_map`, `parent_route`, `child_map_path`; output contract folder structure `output_root/children/<route-id>/navigation.md`; Step 7 (Create Child Maps) as central operation; `depth: integer >= 1` input contract for multi-resolution depth; failure mode "Child-Map Sprawl" existing because tree expansion exists. The tree framing has a constrained fit with routeman's 18-58 hierarchical Route Map (which IS hierarchical at stage-2 sub-route level) BUT the framing's PROCEDURAL emphasis (expand-with-budget; depth-as-input-contract) doesn't fit routeman's enumerate-all + observe-only.

**Vector (d) — Warmup-routing pattern.** `navigation_context_intake.md` is entirely organized around warmup-routing: 5 routing decisions ("Bounded Local Context"; "Cold Project-Level Session"; "Previously Warmed But Stale Session"; "Fresh Warmed Session"; "Global Boundary Changed Or Baseline Is Unreliable"; "Thin Context Accepted") → routing to 5 warmup files at `cognitive_harness/navigation/warmup/` (now `cognitive_harness/deprecated_navigation/warmup/`). Input Classification fields are warmup-centric: `prior_warmup_state: none|complete|partial|stale|unknown`; `freshness_anchor: none|path|timestamp|finding|navigation_map|warmup_output|user_statement`; `user_accepts_thin_context: true|false`. Under the corrected architecture (16-31: isolated-session + file-scanning), routeman scans inquiry folders for its inputs — the file system IS the persistent context; no warmup needed. The protocol is ARCHITECTURALLY OBSOLETE; deprecation has no replacement need.

#### 1.2 Per-artifact intensity scorecard

| Artifact | Intensity | Notes |
|---|---|---|
| `cognitive_harness/protocols/multi_resolution_navigation.md` | **HEAVY** | All 4 vector types present strongly. |
| `cognitive_harness/protocols/navigation_context_intake.md` | **HEAVY + architecturally obsolete** | Warmup-routing pattern entirely + nothing reusable beyond a few generic safety rules. |
| `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` (24-00 adoption) | **PARTIAL** | Inherited 13-base-field schema wholesale (including 4 budget-framed fields: `expansion_reason`, `eligibility`, `eligibility_reason`, `scheduling_reason`) without semantic re-test. "Surgical" adoption was at filename layer only. |
| `devdocs/inquiries/2026-05-24_11-00__routeman_structural_layer/finding.md` (11-00 structural-layer Persistence Model section) | **PARTIAL** | RESTATED multi_resolution_navigation content per RESTATE-WITH-CROSS-REFERENCE pattern. User's recent correction moved content OUT of routeman.md → into the integration-layer document (route 8, not yet authored). |
| Integration-layer document (route 8 from readiness Route Map; not yet authored) | **AT-RISK** | Inherits at authoring time if guidance not in place. |
| `cognitive_harness/routeman/references/routeman.md` (just-shipped) | **MOSTLY CLEAN** | Cold-read confirms 2 acceptable local-sense uses + 1 false-positive cleared. User's recent correction (routeman.md must be pure thinking discipline) was effective. |
| `cognitive_harness/routeman/SKILL.md` (just-shipped) | **CLEAN** | 40-line procedural orchestrator with no contamination surface. |

#### 1.3 META-mechanism naming

The mechanism of context-poisoning at the 24-00 adoption layer is **"surgical adoption without semantic re-test."**

24-00 self-described its adoption methodology as "surgical" — the finding used the word "surgical" 3+ times. The adopting commitment was at FILENAME LAYER (aliasing `_frontier.md` → `_navig.md`; `navigation.md` → `routeman.md`). 24-00's authors were aware the adoption was narrow.

The GAP: semantic-content re-test (does this protocol's framings still fit routeman's corrected identity? which inherited commitments survive vs need revision?) was DEFERRED and NEVER PERFORMED. The contamination is not "surgical adoption is bad" (surgical adoption is appropriate when source content is fully aligned with the adopting discipline's identity). The contamination is "surgical adoption WITHOUT semantic re-test" — the surgical step succeeded; the missing step is the one that would have filtered contamination.

The refined methodology candidate `surgical + semantic-re-test` (preserved as research frontier in P9) is the project-wide refinement that recurs at any future discipline rename.

#### 1.4 Empirical verifications

**Verification 1 — Orphan-status grep (C8).** Grep across active code-paths (project root + `cognitive_harness/` + `docs/`) for active references to both protocols. Results:
- `multi_resolution_navigation` referenced only by: project README catalog; `cognitive_harness/deprecated_navigation/warmup/navigator-prior-map-overlay.md`; `cognitive_harness/deprecated_navigation/warmup/navigator-refresh.md`; `archived_skills/bf4ae1f-hg/bf4ae1f-navigation/warmup/` (2 files).
- `navigation_context_intake` referenced only by: `cognitive_harness/deprecated_navigation/warmup/navigator-refresh.md`; `cognitive_harness/protocols/_archive/navigation_context_intake_my_version.md`.

**Active runners / disciplines / SKILL.md files referencing either: ZERO.** **Routeman runtime files referencing either: ZERO.** This is the load-bearing empirical anchor that enables Layer 1 corrective with zero active-disruption downside.

**Verification 2 — 14-39 chronological priority (A2).** The 14-39 design memo (route-card 16-attribute schema's Route State group) names status values `open / blocked / deferred / active / done / stale / superseded`. 14-39 was written 2026-05-23; multi_resolution_navigation adoption was 2026-05-24 (in the 24-00 finding). 14-39 PREDATES 24-00's mrn adoption. Therefore the `stale + superseded` reachability values that appear in routeman.md are independently named in 14-39, NOT inherited from multi_resolution_navigation. **This is the false-positive clearing for the only potential contamination flagged in routeman.md's cold-read.**

**Verification 3 — Other-7-protocols routeman cross-ref grep (SP7).** Routeman runtime files (`routeman/SKILL.md` + `routeman/references/routeman.md`) reference NONE of the other 7 project protocols at `cognitive_harness/protocols/` (artifact_materialization / branch_inquiry / conclude / loop_diagnose / outcome_review / resume / spec_governance). branch_inquiry was mentioned in 24-00's two-tier boundary commitment but didn't propagate into the just-shipped runtime spec. **No additional contamination vectors beyond user-named two.**

### 2. Filter specifications — preservation list + strip list (P2)

The filter rule governs all 3 corrective layers: design content from `multi_resolution_navigation.md` (and adjacent inheritances) is classified per the preservation list (RESTATE in new thin spec / integration-layer document / amendment) vs the strip list (REMOVE entirely; forbid in new authoring).

**Preservation list** (8 items; carries forward in all correctives):

1. **Breadth Invariant** — "Breadth is desired at the discovery layer; a large route frontier is not a defect by itself." (mrn line 23-30) Aligns DIRECTLY with routeman's enumerate-all identity + asymmetric-failure principle.
2. **Frontier Ledger integrity** — protective rule that unexpanded candidates remain visible. Rephrased for routeman as "preserves enumerate-all integrity across invocations."
3. **selection-boundary commitment** — the protocol does not select. (mrn Non-goal #1; required default `selection_boundary: no_final_selection`.) Aligns with routeman's "selection is out of scope."
4. **"Unrun does not mean rejected. Out-of-policy does not mean nonexistent."** (mrn line 41-43) Rephrased for routeman as "Unrun does not mean rejected. Deferred does not mean nonexistent."
5. **Structural schema fields**: `candidate_id`, `status`, `blocked_by`, `continuation_note` (domain-agnostic; reusable across persistence-ledger patterns).
6. **Resume Note pattern** — cross-invocation continuity instruction in `_frontier.md`. (mrn Step 11)
7. **Lifecycle commitments** (24-00 adopted): persistent + in-place evolution + append.
8. **Hybrid placement** (24-00 adopted): per-inquiry + project-scope.

**Strip list** (4 vector types per detailed enumeration above):
- Vector (a) Vocabulary terms (Navigation, etc.)
- Vector (b) Budget-framing terms (coverage_mode, batch_size, etc.)
- Vector (c) Tree-expansion terms (parent_map, child_map_path, etc.)
- Vector (d) Warmup-routing terms (entire nci structure)

**Constraint: every piece of mrn content MUST classify per preserve/strip.** No content escapes classification. This is the constraint that ensures complete filter application.

### 3. Layer 1 — SOURCE-LEVEL corrective (P3 + P4 + P5)

#### 3.1 Deprecate `navigation_context_intake.md` (P3)

Move to `cognitive_harness/protocols/_archive/navigation_context_intake.md` (or write deprecation note inline if file location unchanged). Deprecation note states:

- Architecturally obsolete per the 16-31 corrected isolated-session + file-scanning architecture (warmup-routing pattern no longer applies).
- Empirically orphaned (Verification 1 in Section 1.4: no active references beyond deprecated_navigation/ self-refs + archive).
- No reusable content warranting preservation (the few generic safety rules — "Missing-context warnings preserved"; "No route was selected by this controller" — are inherited by other disciplines OR generic enough not to require this file).
- Cross-reference to this contamination audit finding for the deprecation rationale.

Pre-edit verification: confirm orphan status (re-run grep at deprecation time; verify no new active references emerged).

#### 3.2 New thin routeman-specific persistence spec (P4)

Create new file at `cognitive_harness/protocols/routeman_persistence.md` (proposed location; final naming open). Length: ~150-250 lines (significantly shorter than mrn's 566 lines — reflects strip-list removal).

Sections:
- **Loading note** (load-trigger directive).
- **Identity** (this protocol's role: persistence ledger for routeman's enumerate-all Route Map across invocations).
- **Invariants:** Breadth Invariant + Frontier Ledger integrity + selection-boundary + "Unrun does not mean rejected. Deferred does not mean nonexistent." (preservation list items 1-4).
- **Schema:** structural fields (`candidate_id`, `status`, `blocked_by`, `continuation_note`) per preservation list item 5; status values aligned with routeman.md's reachability set (`open / blocked / deferred / active / done / stale / superseded`); NO budget-coupled status values.
- **Lifecycle:** persistent + in-place evolution + append (preservation item 7).
- **Placement:** hybrid by invocation scope (preservation item 8).
- **Resume Note pattern** (preservation item 6).
- **Non-goals:** explicit list stripping budget-framing, tree-expansion, Navigation vocabulary, warmup-routing.
- **Cross-references:** routeman.md (the discipline this protocol serves); NO references to mrn or nci.

Self-contained per project conventions (no design-history `devdocs/inquiries/` pointers within the spec). STRIP-list audit passes: `grep` for any strip-list term returns 0 matches.

#### 3.3 Deprecate `multi_resolution_navigation.md` (P5; depends on P4)

Move to `cognitive_harness/protocols/_archive/multi_resolution_navigation.md` (or write deprecation note inline). Deprecation note states:

- Replaced by the new thin spec at `cognitive_harness/protocols/routeman_persistence.md` (from P4).
- Replacement rationale: this file's design carried 4 contamination vectors inappropriate for routeman's corrected enumerate-all + file-scanning + isolated-session identity.
- Preservation-worthy content extracted to new thin spec (preservation list items 1-8).
- Stripped content (4 vector types per strip list).
- Cross-references: this contamination audit finding (P5 deprecation rationale); 24-00 finding amendment (P7); new thin spec (P4).

Pre-deprecation verification: confirm P4 ships first; P5 depends on P4 cross-reference.

### 4. Layer 2 — PREVENTIVE corrective: integration-layer document authoring guidance (P6; PRIMARY corrective)

Author guidance document at `devdocs/routeman/2026-05-25__integration-layer-authoring-guidance.md` (proposed location). This is the **PRIMARY corrective** — it catches contamination BEFORE the integration-layer document propagates it.

**Why PRE-authoring is primary:** the integration-layer document (route 8 of the readiness Route Map) has not yet been authored. When authored, it will RESTATE design content from multi_resolution_navigation per the RESTATE-WITH-CROSS-REFERENCE pattern (the 11-00 structural-layer inquiry's pattern, refined by R2 of 11-00's critique). The restated content carries forward contamination IF the author doesn't filter. Post-authoring remediation is harder than pre-authoring prevention.

**Sections of the guidance document:**

- **Purpose:** PRE-authoring rule document; ships BEFORE integration-layer document author begins; specifies content rules so contamination is filtered at source.
- **Diagnostic citation:** brief recap of this contamination audit's findings (Section 1 of this finding) so author understands WHY rules exist.
- **RESTATE rules:** the preservation list (Section 2) — what content from mrn (now deprecated; cross-reference to new thin spec from P4) can be RESTATED in the integration-layer document.
- **STRIP rules:** the strip list (Section 2) — what content MUST NOT appear in the integration-layer document (4 vector types).
- **Cross-reference rules:** when referring to persistence semantics, cross-reference NEW thin spec from P4 (`cognitive_harness/protocols/routeman_persistence.md`), NOT mrn.
- **Worked example:** sample integration-layer document section showing the rules applied (e.g., a "Persistence Model" section that RESTATES preservation-worthy content + STRIPS budget-framing + cross-references the new thin spec).
- **Verification at authoring time:** grep audit ("grep for strip-list terms in authored content; verify 0 matches").

**Norm-based-process character (R1 from critique):** PRE-authoring guidance is NORM-BASED at L0 — operator and reviewers self-check + verify; not auto-enforced. Future tooling (build-time grep check on the integration-layer document; CI-style validation) is preserved as L1+ refinement seed (the P6 ADD-TEST seed activates when integration-layer document ships).

### 5. Layer 3 — AMENDMENT corrective: append deprecation note to 24-00 (P7)

Append a subsequent-additions notice block to `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` per project convention (matches the pattern used in 14-39 design memo for subsequent additions).

Note content:
- Documents that the adopted `multi_resolution_navigation.md` has been deprecated per this contamination audit (cite this finding).
- Replaced by new thin spec at `cognitive_harness/protocols/routeman_persistence.md` (from P4).
- Inherited 24-00 commitments that SURVIVE via the new thin spec:
  - File naming (`_navig.md` + `routeman.md`)
  - Hybrid placement (per-inquiry vs project-scope)
  - Lifecycle (persistent + in-place evolution + append)
  - Structural schema fields (`candidate_id`, `status`, `blocked_by`, `continuation_note`)
  - Two-tier boundary with branch_inquiry (the structural boundary commitment survives; the tree-expansion / child-map procedural framing should be reframed in alignment with routeman's enumerate-all rather than mrn's tree-expansion — per FF-S2 frontier flag).
- Inherited 24-00 commitments that are STRIPPED (contaminated, not preserved):
  - Budget-framed schema fields (`expansion_reason`, `eligibility`, `eligibility_reason`, `scheduling_reason`) — replaced by simpler `status` + `blocked_by` structural fields.
  - Tree-expansion schema (`parent_map`, `parent_route`, `child_map_path` as load-bearing structural fields).
- The META-mechanism of context-poisoning ("surgical adoption without semantic re-test") is named; future adoptions in the project should apply explicit semantic re-test step.

24-00 finding's body content NOT rewritten — only the additions notice is appended (additive amendment, not re-do per A5 from Sensemaking).

### 6. Cold-read confirmation: routeman.md + SKILL.md NO corrective needed (P8)

**`cognitive_harness/routeman/references/routeman.md` cold-read scorecard:**

- Line 149 — "per-mode pointer-count budget" — LOCAL sense in adaptive-guidance mechanism (a budget for pointer counts per mode); NOT multi_resolution_navigation budget-framing (which is about routeman invocation coverage). ACCEPTABLE.
- Line 343 — "navigation/handoff product" (lowercase n) — generic word in sentence "the navigation/handoff product"; NOT discipline name. ACCEPTABLE.
- Reachability status values `stale + superseded` — FALSE-POSITIVE cleared (Empirical Verification 2 in Section 1.4: 14-39 chronological priority).
- Zero warmup-pattern occurrences. CLEAN.
- Zero tree-expansion structural-field occurrences. CLEAN.

**`cognitive_harness/routeman/SKILL.md` cold-read scorecard:** CLEAN (40-line procedural orchestrator with no contamination surface; grep returns 0 matches for strip-list terms).

**Explicit verdict: NO CORRECTIVE NEEDED at the routeman runtime artifact level.** Post-user-correction effectiveness confirmed.

### 7. Research frontier + methodology candidate (P9)

**FF-S6 research frontier:** the "legacy-protocols-contaminate-new-disciplines" pattern. When a discipline is renamed, inherited project artifacts (protocols, schemas, conventions) that were designed for the OLD discipline may carry forward without semantic re-test. The routeman/navigation case is N=1 instance. Revival trigger: a second discipline rename in the project (per 14-39's COULD-deferred "second rename" trigger; the user previously implied this is plausible when they said "one of them is about navigation"). When the trigger fires, this audit's findings inform the second rename's adoption methodology.

**Methodology candidate: `surgical + semantic-re-test`.** Refines 24-00's self-described "surgical" methodology by adding the missing semantic-re-test step:

- The "surgical adoption" pattern (24-00's self-description) is appropriate when the adoption preserves source-file integrity (filename-level aliasing; minimal source-file modification).
- The MISSING step is "semantic re-test" — does the adopted source content's framings still fit the adopting discipline's identity? If not, what survives vs strips?
- The refined methodology = "surgical + semantic-re-test": surgical at filename level + explicit semantic re-test step + per-content RESTATE-or-STRIP decision per the adopting discipline's identity.
- This methodology applies retroactively (this audit IS the retroactive semantic re-test on 24-00's adoption) OR proactively (future adoptions include the step at adoption-inquiry time).

Promotion principle: N=2 (current N=1; preserve as research-frontier; revive when second rename activates trigger). Respects the lesson-introduces-its-own-trap meta-pattern from 14-39 (avoid self-validation at N=1).

## Inherited Commitments Re-test

This finding's `_branch.md` declared a Synthesis Trigger listing 9 priors. Per CONCLUDE's Synthesis re-test enforcement, each prior's load-bearing commitment is RE-TESTED with cited evidence or explicitly INHERITED-WITHOUT-RE-TEST with reason.

- **Commitment:** `multi_resolution_navigation.md` — 566-line budget-framed tree-expansion protocol designed for /navigation with Navigation vocabulary throughout.
  - **Source:** `cognitive_harness/protocols/multi_resolution_navigation.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Surfacing identified the contamination vectors per section R1+R2+R3+R4; Sensemaking + Critique confirmed the diagnostic. The protocol's intended purpose (multi-resolution Navigation tree expansion) is INCOMPATIBLE with routeman's corrected enumerate-all + isolated-session identity. Preservation-worthy content (Section 2 preservation list) extracted via Layer 1 corrective.

- **Commitment:** `navigation_context_intake.md` — 259-line warmup-routing controller for /navigation's "full-warmup-needed" input mode.
  - **Source:** `cognitive_harness/protocols/navigation_context_intake.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Surfacing R5 identified that the protocol is structurally obsolete under the corrected isolated-session + file-scanning architecture (16-31). Sensemaking C8 verified empirical orphan status. Layer 1 corrective deprecates entirely with no replacement need.

- **Commitment:** `routeman/SKILL.md` (just-shipped) — short procedural orchestrator following 5-Core convention.
  - **Source:** `cognitive_harness/routeman/SKILL.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Cold-read audit (Section 6 above) confirms CLEAN — 40-line procedural orchestrator with no contamination surface. NO CORRECTIVE NEEDED.

- **Commitment:** `routeman/references/routeman.md` (just-shipped) — pure thinking discipline reference per user correction.
  - **Source:** `cognitive_harness/routeman/references/routeman.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Cold-read audit (Section 6 above) confirms MOSTLY CLEAN — 2 acceptable local-sense uses + 1 FALSE-POSITIVE cleared via 14-39 chronological priority (Empirical Verification 2). User's recent correction effectiveness confirmed; NO CORRECTIVE NEEDED.

- **Commitment:** 14-39 design memo — 3-layer identity + 10 features + 16-attribute schema (with `Status: open / blocked / deferred / active / done / stale / superseded`); chronologically prior to 24-00 mrn adoption.
  - **Source:** `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** 14-39's settled identity is the canonical anchor against which contamination is measured. 14-39's status-value naming (Empirical Verification 2 in Section 1.4) clears the routeman.md `stale + superseded` false-positive. Identity preservation confirmed; corrective architecture preserves 14-39's commitments without revision.

- **Commitment:** 15-20 frontier-questions finding — Q1-Q6 + Q10 resolutions consolidated.
  - **Source:** `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md`.
  - **Re-test status:** INHERITED-WITHOUT-RE-TEST.
  - **Reason:** the audit's scope is contamination from the 2 user-named protocols + routeman design artifacts. Q1-Q6 + Q10 resolutions are not contamination sources; they are settled meaning-layer commitments the audit operates on. Out-of-scope for re-test.

- **Commitment:** 16-31 isolated-session + file-scanning architecture correction — multi-head at WORKER level; routeman as singleton scanning across all worker folders.
  - **Source:** `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the corrected architecture is the load-bearing anchor for the obsolescence of `navigation_context_intake.md`'s warmup-routing pattern. Under isolated-session + file-scanning, routeman scans inquiry folders; no warmup needed. 16-31's commitment grounds the deprecation rationale.

- **Commitment:** 24-00 finding — adopted `multi_resolution_navigation.md` as routeman's persistence protocol; "surgical" adoption methodology with filename aliasing.
  - **Source:** `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the audit IS the retroactive semantic re-test on 24-00's adoption. 24-00's "surgical" framing was self-aware (acknowledged narrowness); the gap was that semantic re-test was deferred and never performed. META-mechanism of context-poisoning ("surgical adoption without semantic re-test") names the gap. Layer 3 amendment (P7) documents which 24-00 commitments survive via the new thin spec vs which are stripped.

- **Commitment:** 11-00 structural-layer finding — adopted multi_resolution_navigation cross-reference + RESTATE-WITH-CROSS-REFERENCE pattern for hybrid content; user-corrected to remove project-coupling from routeman.md.
  - **Source:** `devdocs/inquiries/2026-05-24_11-00__routeman_structural_layer/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** 11-00's Persistence Model section RESTATED mrn content. User's recent correction moved restated content OUT of routeman.md → integration-layer document (route 8, not yet authored). The RESTATE-WITH-CROSS-REFERENCE pattern ITSELF propagates contamination via restatement (FF-S3 frontier flag from Surfacing). Layer 2 PRE-authoring guidance (P6) catches this at integration-layer authoring time.

**9/9 RE-TESTED or INHERITED-WITHOUT-RE-TEST with explicit reason.** The audit's content is grounded in the priors' commitments via cited evidence per each item.

## Next Actions

### MUST

There are no MUST actions required for this finding's value to be realized. The deliverable is this audit document itself (containing the diagnostic + filter specs + cold-read confirmation + research frontier as P1+P2+P8+P9 FOUNDATIONAL pieces). Corrective implementation (P3+P4+P5+P6+P7) is the user's call — see COULD section below in priority order.

### COULD (in priority order from R2)

- **PRIORITY 1 (HIGHEST — PRIMARY CORRECTIVE):** Author integration-layer document PRE-authoring guidance per Section 4 above.
  - **What:** Create `devdocs/routeman/2026-05-25__integration-layer-authoring-guidance.md` with sections (purpose + diagnostic citation + RESTATE rules + STRIP rules + cross-reference rules + worked example + verification at authoring time).
  - **Who:** human author (likely the same actor who will subsequently author the integration-layer document).
  - **Gate:** condition-bound — BEFORE the integration-layer document (route 8 from readiness Route Map) is authored.
  - **Why:** catches contamination before propagation; cheapest long-term corrective; addresses D12 re-contamination-prevention.

- **PRIORITY 2 (HIGH — ENABLING):** Author new thin routeman-specific persistence spec per Section 3.2 above.
  - **What:** Create `cognitive_harness/protocols/routeman_persistence.md` (~150-250 lines) extracting preservation-worthy content from mrn; STRIP-list audit passes.
  - **Who:** human author.
  - **Gate:** condition-bound — paired with PRIORITY 1 or independently.
  - **Why:** replaces mrn as routeman's persistence source; unblocks integration-layer document cross-references.

- **PRIORITY 3 (HIGH — ENABLING; parallel to P4):** Deprecate `navigation_context_intake.md` per Section 3.1 above.
  - **What:** Move to `cognitive_harness/protocols/_archive/navigation_context_intake.md` + deprecation note.
  - **Who:** human author.
  - **Gate:** condition-bound — independent of P4; can ship in parallel.
  - **Why:** architecturally obsolete; orphan-status verified; project surface area reduction.

- **PRIORITY 4 (HIGH — sequential after P4):** Deprecate `multi_resolution_navigation.md` per Section 3.3 above.
  - **What:** Move to `cognitive_harness/protocols/_archive/multi_resolution_navigation.md` + deprecation note pointing to new thin spec.
  - **Who:** human author.
  - **Gate:** condition-bound — depends on PRIORITY 2 (new thin spec must exist for cross-reference).
  - **Why:** removes contamination source; orphan-status verified; pointer continuity preserved via new thin spec.

- **PRIORITY 5 (MEDIUM — CLOSING):** Append deprecation note to 24-00 finding per Section 5 above.
  - **What:** Subsequent-additions notice block appended to `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` per project convention.
  - **Who:** human author.
  - **Gate:** condition-bound — depends on PRIORITY 2 (new thin spec must exist for cross-reference) + PRIORITY 4 (mrn deprecation must happen for amendment to document the replacement).
  - **Why:** closes the adoption-level loop; lightweight; documents which 24-00 commitments survive vs strip.

### DEFERRED

- **What:** P6 ADD-TEST refinement seed — build-time grep test on integration-layer document for strip-list term presence.
  - **Gate:** observable revival trigger — when integration-layer document ships AND drift becomes a concern (initial authoring is grep-verified at authoring time per PRIORITY 1's guidance).
  - **Why (if revived):** runtime-verification layer enforces filter compliance over time; complements PRIORITY 1's PRE-authoring norm-based-process discipline.

- **What:** Project-wide protocol-rename-coordination methodology — explicit semantic-re-test step mandatory in any adoption inquiry.
  - **Gate:** condition-bound revival trigger — when a SECOND discipline rename is proposed (per 14-39's COULD-deferred "second rename" trigger + the user's previously-mentioned "one of them is about navigation").
  - **Why (if revived):** the "surgical + semantic-re-test" methodology candidate (P9) becomes project-canonical at N=2; pays off cross-discipline.

- **What:** Audit additional project protocols (other 7 at `cognitive_harness/protocols/`) for similar Navigation-discipline contamination if discovered.
  - **Gate:** observable revival trigger — if contamination is observed beyond the 2 user-named protocols.
  - **Why (if revived):** broader contamination surface than this audit's scope; FF-S6 pattern generalization.

- **What:** Cold-read audit repetition over time (drift detection on routeman.md + SKILL.md).
  - **Gate:** time-bound — every 6 months or after major routeman.md revision.
  - **Why (if revived):** future-proofing against contamination drift; complements the initial cleanliness verification.

## Reasoning

### Why this corrective architecture over alternatives

**Innovation killed 14 alternatives** at per-piece content-axis Inversion + intervention-shape-axis Inversion across 9 pieces. The KILLs and their reasons:

- **P1-Inv-1:** alternative META-mechanism naming "wholesale-adoption". KILLed: too general; doesn't capture 24-00's self-described surgical pattern; loses historical-naming anchor.
- **P2-Inv-1:** per-layer different filter rules. KILLed: creates inconsistency; filter must be uniform across layers.
- **P3-Inv-Shape-1:** DO-NOTHING on nci. KILLed: silent obsolescence harms future readers.
- **P3-Inv-Shape-2:** REPAIR nci. KILLed: warmup-routing structurally obsolete; nothing useful to repair into.
- **P4-Inv-Shape-1:** REPAIR mrn in place. KILLed: mrn's name itself contaminated; in-place repair carries forward.
- **P4-Inv-Shape-2:** REORGANIZE — absorb mrn content into existing project protocols. KILLed: mrn content is routeman-specific; absorbing creates cross-discipline contamination.
- **P5-Inv-Shape-1:** REPAIR mrn. KILLed per P4 analysis.
- **P5-Inv-Shape-2:** KEEP mrn + ADD-NOTICE. KILLed: silent inheritance persists.
- **P6-Inv-Shape-1:** ADD-TEST instead of PRE-authoring guidance. KILLed as primary; preserved as L1+ refinement seed (compliance test when integration-layer ships).
- **P6-Inv-Shape-2:** REORGANIZE — fold guidance into project conventions doc. KILLed: loses routeman/integration-layer-specific focus.
- **P7-Inv-Shape-1:** REPAIR 24-00. KILLed: over-broad (24-00 covered more than mrn adoption).
- **P7-Inv-Shape-2:** REVERT-REGRESSION 24-00. KILLed: 24-00's other content (hybrid placement; lifecycle; proposal evaluations) is sound.
- **P8-Inv-1:** counterfactual cold-read found contamination. Not realized.
- **P9-Inv-1:** methodology naming alternative ("scope-bounded adoption" or "semantic-aware adoption"). KILLed: "surgical + semantic-re-test" preserves historical anchor.

### Why the refinements R1+R2+R3 were committed

Critique's adversarial round produced 8 killer objections; defense balanced 5 (KO1 + KO3 + KO4 + KO7 + KO8). The other 3 KOs revealed real gaps requiring refinement:

- **R1 (P6 norm-based-process explicit + L1+ tooling seed documented)** addresses KO2: P6 guidance is norm-based; without explicit documentation of the norm + the L1+ tooling path, the reader could assume auto-enforcement.
- **R2 (priority sequencing across 9 pieces)** addresses KO5: the audit identifies correctives but doesn't sequence them against operator bandwidth. R2 ranks: HIGHEST P6 PRIMARY; HIGH P4+P3+P5 enabling; MEDIUM P7 closing; FOUNDATIONAL P1+P2+P8+P9 in this finding.
- **R3 (executive summary section)** addresses KO6: the user asked "what do you think?" with concern + intuition. The 9-piece architecture is complete but the user wanted operational recommendation. R3 surfaces the headline + PRIMARY action + enabling actions + closing action + empirical anchors as executive summary at the top of this finding.

The 3 refinements compose into a unified OPERATIONAL ACTIONABILITY layer — making the audit's correctives operator-actionable for bandwidth-constrained operators. Operator reads executive summary + executes R2's priority order without re-reading the full architecture.

### What survived

- **Assembled 9-piece corrective architecture** after R1+R2+R3 integration — SURVIVE on all 12 critique dimensions including 3 CRITICAL (D7 contamination-elimination-effectiveness + D8 preservation-value-survival + D12 re-contamination-prevention).
- **P6 ADD-TEST (build-time grep test on integration-layer document)** — DEFERRED to L1+ with revival trigger when integration-layer document ships.

### Why the user's concern is structurally validated

The user's framing identified the precise issue: protocols "designed many days ago for deprecated navigation" carry forward inherited commitments that may no longer fit the corrected architecture. The audit confirms with empirical grounding:
- Surfacing identified 4 vector types across 68 items.
- Sensemaking confirmed contamination + named the META-mechanism + empirically verified orphan status.
- Decomposition organized correctives into 3-layer architecture.
- Innovation generated per-piece deliverables with intervention-shape variants.
- Critique tested + refined with R1+R2+R3.

The user's intuition that the protocols "might have good value" matches the preservation-value principle. The audit confirms this intuition: Breadth Invariant + Frontier Ledger integrity + selection-boundary + "Unrun does not mean rejected" + structural schema fields + Resume Note pattern all survive via the new thin spec.

The user's correction (routeman.md must be pure thinking discipline) was structurally effective — cold-read of the just-shipped routeman.md confirms cleanliness. The correction's effectiveness DOES NOT eliminate the corrective need elsewhere (24-00 adoption + 11-00 restatement + integration-layer document at-risk) — but it eliminates the corrective need at the most-visible artifact (routeman runtime).

## Open Questions

### Monitoring

- **Whether the integration-layer document is authored with PRIORITY 1 guidance followed.** Observable when the integration-layer document (route 8) is authored. If guidance is followed, no contamination propagates. If guidance is skipped, contamination propagates → re-audit needed.
- **Whether other project artifacts (beyond the 2 named protocols) carry similar inheritance contamination.** Observable as discoveries arise; FF-S6 pattern generalization.
- **Whether routeman.md drift introduces contamination over time.** Observable via periodic cold-read repetition.

### Blocked

- **The P6 ADD-TEST seed** is blocked until the integration-layer document ships (at which point build-time grep test becomes meaningful).
- **The "surgical + semantic-re-test" methodology promotion to project-canonical** is blocked until a second discipline rename activates the N=2 revival trigger.

### Research Frontiers

- **Pattern generalization (FF-S6):** when does legacy-protocol-contamination occur at any discipline rename, and what project-wide methodology prevents it? The "surgical + semantic-re-test" candidate is the proposed methodology; N=2 promotion required.
- **The two-tier boundary with branch_inquiry (FF-S2)** — the tree-expansion / child-map procedural framing inherited via 24-00 from mrn needs separate re-evaluation against routeman's enumerate-all. Not addressed in this audit; future inquiry candidate.
- **Cold-read drift detection** — periodic re-verification of routeman.md cleanliness; how often + what trigger.

### Refinement Triggers

- **If the integration-layer document (route 8) is authored WITHOUT PRIORITY 1 guidance,** re-audit the integration-layer document for contamination + apply post-facto remediation.
- **If a second discipline rename is proposed,** revive the P9 methodology candidate; apply "surgical + semantic-re-test" methodology at the new rename's adoption inquiry.
- **If the new thin routeman-persistence spec drifts to re-introduce strip-list terms,** re-run the grep audit + revise back to compliance.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVLw
i am thinking maybe cognitive_harness/protocols/multi_resolution_navigation.md and cognitive_harness/protocols/navigation_context_intake.md context poisoned the routeman discipline generation process
bc these files might have good value but they were designed many days ago for deprecated navigaiton...

what do you think?
```

</details>
