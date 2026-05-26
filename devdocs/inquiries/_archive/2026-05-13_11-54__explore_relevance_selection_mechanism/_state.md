# State: /explore Relevance-Selection Mechanism

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
- CORRECTS: devdocs/inquiries/2026-05-13_07-39__cheap_coverage_boost_for_explore_now/finding.md (listing is not the answer; relevance-selection is)
- RELATED: devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/finding.md (registry is one form of relevance declaration)
- RELATED: devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/finding.md (kinds-of-mapping typology frames relevance per type)

## History
- 2026-05-13: Created. Question: how does /explore identify and CONSUME relevant content (not just list)? User correction: the prior finding's listing-mandate was an incomplete answer; the real bottleneck is relevance-selection.
- 2026-05-13: Exploration complete. Mode: possibility; entry: frontier-first (deliberately not signal-first to avoid prior-finding-style fixation); 3 cycles. ~17 distinct candidates across 10 regions: A criteria-extraction (A1 Q/G-derived; A2 keyword+grep; A3 author-declared; A4 sub-question-bearing); B score-and-rank (B1 threshold; B2 top-N; B3 weighted multi-criteria); C multi-pass (C1 scan-score-read-rescore; C2 provisional+verification); D intuition-based (D1 /intuit embedded; D2 past-runs pattern-match); E force-read (E1 to D2; E2 within budget); F decompose-territory (F1 stratified; F2 per-sub-question); G lift signals (G1 promote §2.1 relevance to filter; G2 mandatory justification); H meta (H1 new cycle step "Relevance Selection"); I boundary clarifications (I1 filter vs annotation; I2 listing vs consumption); J jump-scan (J1 mid-flight steering; J2 inquiry-type defaults). Two orthogonal axes explicitly surfaced (filter/annotation; listing/consumption) — the prior finding conflated them. Anti-fixation discipline honored. Self-Assessment: PROCEED. Manual structural check: PASS.
- 2026-05-13: Sensemaking complete. 8 perspectives ran. 3 ambiguities resolved HIGH: (1) the answer is a cross-layer composition, NOT single-family fixation (which was the prior finding's failure mode); families operate at different LAYERS (L1 criteria production, L2 application, L5 spec hygiene) and the minimum-sufficient composes across all three; (2) the answer is FILTER-primary (gating reads), not annotation-primary — matches user's correction about "consumption"; annotation stays as §2.2 layer; (3) relationship to prior cheap-coverage-boost is CORRECTS (claim corrected: "listing IS the answer" was wrong) NOT supersedes (mechanism preserved-and-repositioned as supporting input). Recommended composition: A1 (Q/G-derived criteria at Step 0) + G1 (active §2.1 relevance filter) + I1 (filter-vs-annotation spec hygiene) + telemetry (3 fields). Optional extension: A3 (author-declared criteria; composes with prior canonical-source registry). Load-bearing concept tests passed on "relevance" + "filter." Meta-Inspection hooks H1/H3/H6/H8 applied. No failure modes (including the prior finding's single-family fixation, which was avoided by explicit cross-layer analysis). Manual structural check: PASS.
- 2026-05-13: Decomposition complete. 3 clusters via coupling perception (I criteria production = P1; II filter application = P2 [includes ride-along spec hygiene]; III CORRECTS declaration = P4). 3 top-level pieces with 12 sub-pieces. P2.1 (scoring mechanism) IS the determination-mechanism for the load-bearing "relevance score" concept; check PASSES. 1 hidden coupling surfaced (scoring-quality depends on item labeling-depth) and converted to explicit P2.1 wording. Dependency phases: Phase 1 parallel {P1, P4}, Phase 2 sequencing {P2 depends on P1}. Self-eval: PASS on all 7 dimensions; HIGH boundary confidence. Total ~50-55 min spec-edit work. No failure modes fired. Manual structural check: PASS.
- 2026-05-13: Innovation complete. Assembly: "Active Relevance Filter v1" = P1.1 MUST-sentence + P1.2 criteria output format + P2.1 3-level scoring (HIGH/MEDIUM/LOW) with depth-quality coupling note + P2.2 threshold default MEDIUM + P2.3 §2.1 strengthening + P2.4 filter-vs-annotation hygiene note + P2.5 three telemetry fields + P2.6 worked example + P4.1 `corrects:` frontmatter + P4.2 "Changes from Prior" body section (preserves meta-correction lesson). 6 generators+framers applied (Combination, Domain Transfer, Absence Recognition, Lens Shifting, Constraint Manipulation, Inversion); 3 mechanisms converged on cross-layer composition. 4-axis coverage check PASS. Project risk dimensions all PASS. 6 deferred items with revival triggers. Manual structural check: PASS.
- 2026-05-13: Critique complete. 15 dimensions extracted (6 default + 5 problem-derived + 4 project-specific risk). All HIGH-weight dimensions traced to sensemaking anchors or user's correction. Verdict: assembly SURVIVES with 2 small REFINEs: (R1) P2.1 boundary rubric — add applied heuristics for HIGH/MEDIUM/LOW distinction to close two-LLM inconsistency gap; (R2) P1.2 criteria-quality MUST-check — each derived criterion must reference a specific named subject from Question/Goal, to prevent bad-criteria failure mode. Adversarial: STRONG (prosecution surfaced 2 real concerns; defense neutralized structural objections). Landscape: STABLE. No failure modes fired. Signal: TERMINATE — apply both REFINEs at CONCLUDE. Manual structural check: PASS.
- 2026-05-13: CONCLUDE complete. Inquiry finished. Answer: `/explore` derives an explicit relevance criteria statement from Question + Goal at Step 0, then computes a 3-level relevance score (HIGH/MEDIUM/LOW) for each surfaced item against those criteria at §2.1 Signal Detection, and probes only items at or above threshold (default MEDIUM); active filter at §2.1 is the load-bearing operation. The two REFINEs from critique (calibration heuristic in scoring mechanism + criteria-quality MUST-check in derivation procedure) were baked into the spec-edit text in `finding.md`. Discipline outputs archived to `docarchive/`. Status COMPLETE.
