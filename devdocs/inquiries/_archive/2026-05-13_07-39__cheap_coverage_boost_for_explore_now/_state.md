# State: Cheap Coverage Boost for /explore (Ship-Now)

## Flow-type
extended

## Pipeline
E → S → D → I → C (always)

## Progress
- [x] Exploration
- [x] Sensemaking
- [x] Decomposition
- [x] Innovation
- [x] Critique

## Iteration
1

## Status
COMPLETE

## Next Discipline
—

## Relationships
- RELATED: devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/finding.md (separate ship; not /staged-explore)
- RELATED: devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/finding.md (operational mechanism, not spec-language)

## History
- 2026-05-13: Created. Question: what's the simplest shippable enhancement to current /explore that guarantees better coverage, accepting extra context cost?
- 2026-05-13: Exploration complete. Mode: possibility; entry: signal-first; 3 cycles; jump-scan performed. 14 candidates across 7 regions (A tool-use mandates [A1 filesystem listing matches user's "tree" hint; A2/A3/A4 variants]; B read-set expansion [B1 read ≥N files matches "travel the codebase"; B2 surround-layer reads; B3 high-relevance reads]; C process enhancements [C1 default boundary-discovery; C2 ≥2 cycles; C3 inventory-first; C4 D2→D3; C5 enforced surround scan; C6 negative-space audit]; D telemetry [D1 tool-call log]; E rule-strengthening [E1 D0 check]; F jump-scan [F1 corpus-reuse; F2 git ls-files; F3 git-log recent]). Each candidate rated on coverage-guarantee + context cost + complexity. Self-Assessment: PROCEED. Manual structural check: PASS.
- 2026-05-13: Sensemaking complete. 8 perspectives ran. 2 ambiguities resolved HIGH: (1) A1 is the primary actionable; B1 is optional adjunct; 6 others deferred — "simple AND for-sure" forces minimum-sufficient resolution; (2) "for sure" requires hard MUST-mandate, not soft default. Load-bearing concept tests PASS on "coverage" + "for sure." Frame-exit Completeness analysis surfaced that A1 primarily improves LAYOUT mapping (per prior identity-refresh finding's typology); B1 covers concept mapping. Phase/Calibration-State analysis: architecture is calibration-independent; tool-fallback chain is environment-dependent. D1 (tool-call telemetry) re-classified as bundled-with-A1. Relationships: RELATED to both prior findings (not REFINES/SUPERSEDES). No failure modes. Manual structural check: PASS.
- 2026-05-13: Decomposition complete. 5 clusters via coupling perception (I A1 fully specified including bundled D1 telemetry + worked example; II B1 optional adjunct; III section placement; IV deferred items list; V relationship declarations). 5 top-level pieces with 19 sub-pieces. 1 hidden coupling surfaced (P1's §3.3-extension must reconcile mandatory artifact-mode trigger with the existing conditional boundary: unknown trigger) and converted to explicit P1.1 wording constraint. Dependency phases: Phase 1 parallel {P1, P2}, Phase 2 sequencing {P3 placement}, Phase 3 reflective {P4 deferred, P5 relationships}. Determination-mechanism piece check: PASS (P1.2 fallback chain IS the determination for "which tool to use"). Self-eval: PASS on all 7 dimensions; HIGH boundary confidence. No failure modes fired. Manual structural check: PASS.
- 2026-05-13: Innovation complete. 6/7 mechanisms applied (3G + 3F; Extrapolation N/A). Concrete spec-edit text generated for every piece. Assembly: "Filesystem Pre-Scan Mandate v1" — 10 ACTIONABLE survivors (P1.1-B mandate text; P1.2 fallback chain; P1.3 trigger; P1.4 opt-out with required reason; P1.5 3 telemetry fields; P1.6 worked example; P2 B1 optional adjunct; P3 placement; P4 deferred list; P5 relationships). 4 emergent properties (E1 compound coverage, E2 uniform telemetry section, E3 coherent spec narrative, E4 A1-alone is minimum-sufficient). 1 KILLED with seed (P1.1-C soft-default SHOULD fails "for sure"). 6 DEFERRED with revival triggers. Axis coverage: all 4 axes (wording, placement, fallback breadth, telemetry detail). Project-specific risks: duplicate-derivable-state LOW, operation-parsimony STRONG, phase-fit PASS, explicit-culture-fit PASS. Convergence YES — 3+ mechanisms point to mandate+chain+opt-out+telemetry architecture. No failure modes. Manual structural check: PASS.
- 2026-05-13: Critique complete. 12 dimensions (8 critical including D5 robustness and D12 specification-completeness surfaced by prosecution; 4 moderate). Multi-axis prosecution depth check applied at all 3 axes — surfaced 3 real spec gaps: (a) MUST is honor-system without audit check; (b) "success" in fallback chain undefined; (c) all-fail behavior unspecified. Each converted to pre-ship REFINE target. CCS Assembly: SURVIVE with 4 REFINE targets — (1) audit/structural check addition; (2) success criteria for fallback chain; (3) 5th fallback (Claude Code Read tool on directory) + all-fail behavior; (4) worked example for all-fail telemetry. All 8 critical dimensions PASS after refinements. No new KILLs (P1.1-C remains killed). Signal: TERMINATE with ranked survivors. No failure modes observed. Manual structural check: PASS.
- 2026-05-13: CONCLUDE. Answer: ship a mandatory filesystem-listing pre-scan at Step 0 of every artifact-mode /explore run. 5-entry fallback chain (tree → git ls-files → find → ls -R → Claude Code Read on directory). 3 telemetry fields make the mandate auditable. A structural-check addition converts MUST from honor-system to enforced. Narrow opt-out (skip-listing: true + required reason) for non-filesystem-mappable artifact territories. Optional adjunct B1 (minimum-N file reads) compounds layout coverage with concept coverage. ~45-60 min total spec-edit work. RELATED to both prior /explore findings (canonical-coverage architecture; identity-refresh spec-language); neither superseded. 6 items deferred with revival triggers. Discipline outputs archived. Status: COMPLETE.
