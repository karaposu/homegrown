# Surfacing — Thin Artifact

## User Input

devdocs/inquiries/2026-06-09_21-47__discipline_specs_hidden_structural_abstraction/_branch.md

## Mode + Entry Point

- **Mode:** artifact (the territory is the existing spec corpus — concrete pre-existing files)
- **Entry point:** signal-first (purpose given: find hidden structural organization in the discipline specs; bias toward the corpus-scope and deliverable-depth axes held open in `_branch.md`)
- **Territory:** explicit-bounded — `cognitive_harness/` (active specs + runners + protocols + registries + prior-version files + non-active archive) PLUS the project's spec-organization convention docs (`docs/canon/thinking_disciplines/*`, `docs/discipline_edit_tiers.md`) PLUS same-topic recent inquiry findings. Boundary-discovery sub-phase: not fired (edges given).
- **Prior-workspace:** supplied (same-session continuity — the runner is the session-continuity authority). All seven active reference specs, all seven SKILL.md entry points, the three runners, and the three protocols were read IN FULL earlier this session; the convention docs likewise. This invocation re-confirmed them via structural-metric enumeration and drew in the previously-unread core items.

## Traversal Trace

| # | Region | Item identifiers | Relevance | Conf | Recency (mtime) | Note |
|---|---|---|---|---|---|---|
| 1 | R1: active SKILL.md entry points | `articulate_simple/SKILL.md` (42L), `decompose/SKILL.md` (36L), `innovate/SKILL.md` (38L), `routelister/SKILL.md` (40L), `sense-making/SKILL.md` (42L), `surfacing/SKILL.md` (46L), `td-critique/SKILL.md` (42L) | core | HIGH | 2026-04-26 → 2026-06-09 | All 7 share a near-identical 5-part shape (frontmatter → Step 0 pre-read → task line → $ARGUMENTS → numbered instructions → reference-loading footer); h2=3 in every file — strong template signal |
| 2 | R2: active reference specs | `sensemaking.md` (473L, 4 refnotes), `decompose.md` (344L, 2), `innovate.md` (752L, 15 refnotes + 9 override-patterns), `td-critique.md` (478L, 9), `surfacing.md` (437L, 1), `routelister.md` (332L, 0), `articulate_simple.md` (460L, 0) | core | HIGH | 2026-05-09 → 2026-06-09 (td-critique TODAY) | Two structural generations visible: older specs (sensemaking/decompose/innovate/td-critique) = prose + accreted refinement notes; newer specs (surfacing/routelister/articulate_simple) = numbered-§ Identity/Components/Process/Quality/Output schema with NOT-list + vocabulary table + LAYER 1/2 |
| 3 | R3: runners | `MVL/SKILL.md` (270L), `MVLw/SKILL.md` (351L), `aMVLw/SKILL.md` (420L) | core | HIGH | 05-16 / 06-01 / 06-07 | Massive copy-inheritance: Workspace Invariant, Transition Protocol, ITERATION COMPLETE, Resume, Rules blocks duplicated across all 3 with drift (MVL lacks timestamp policy + history-append rule that MVLw/aMVLw have) |
| 4 | R4: protocols | `conclude.md` (412L), `branch_inquiry.md` (669L), `loop_diagnose.md` (314L) | core | HIGH | 06-09 / 05-01 / 06-01 | Shared shape: Loading note → path contract → numbered steps → failure modes. conclude modified TODAY |
| 5 | R5: convention docs (prior art on this exact question) | `discipline_rule_placement.md`, `step_refinement.md`, `how_a_discipline_should_be.md`, `anatomy_of_disciplines.md`, `discipline_taxonomy.md`, `what_are_they.md`, `list_of_disciplines.md`, `docs/discipline_edit_tiers.md` | core | HIGH | (docs tree) | The project has ALREADY named: placement convention; Step Refinement primitive (4-element shape; Forms 1/2/3; lifting recipes); distillation doctrine; spec+output anatomy; edit tiers. These are committed conventions this inquiry must build on, not re-derive |
| 6 | R6: cognitive_fixes registry | `cognitive_fixes/README.md` (77L), `_template.md` (57L), `01__vague_instruction_decomposition.md` (97L) | core | HIGH | 05-22/23 | READ THIS CYCLE. An EXISTING cross-spec registry mechanism: loose template + index + staging gates (N≥5 promotion) + kill conditions + reversibility commitment. Direct precedent for any "extract shared thing to its own home" move |
| 7 | R7: same-topic recent findings | `2026-06-09_17-04__discipline_spec_text_organization_patterns_catalog/finding.md` (393L), `2026-06-09_18-30__per_phase_placement_failure_modes_with_distinguishing_header/finding.md` (306L) | core | HIGH | TODAY | READ THIS CYCLE. 17-04 commits a content-type → pattern mapping (6 content-types after 18-30's carve-out) for WITHIN-spec text organization; 18-30 commits per-phase placement for phase-affined guidance (already APPLIED to td-critique.md). This inquiry's territory is the layer ABOVE: cross-file/corpus-level abstractions |
| 8 | R8: prior spec versions | `td-critique/references/old_td-critique.md` (427L, mtime TODAY), `innovate/references/old_innovate.md` (442L), `sense-making/references/sensemaking_old.md` (409L) | sub | MED | 06-09 / 05-19 / 05-11 | Enumerated + metrics only; content NOT re-read (frontier). Evidence class: how specs structurally evolve (old kept beside new in same references/ dir — an implicit versioning convention) |
| 9 | R9: non-active archive | `non-active/` — comprehend, reflect, routeman, deprecated-explore, deprecated_navigation, meta-loop, MVL+, contracts/alignment_control.md, 7 loose protocol drafts | side | MED | — | Enumerated only (frontier). Extra sample size for template derivation + evidence that retirement = folder-move, preserving the SKILL.md+references shape |
| 10 | R10: snapshot archive | `archived_skills/bf4ae1f-hg/` + `install_bf4ae1f_for_claude.sh` | side | HIGH | — | Already understood via `docs/canon/stability_preservation_via_git.md`: name-prefix snapshot isolation. Relevant as the regression-safety mechanism any reorganization must stay compatible with (3-layer rename: folder / frontmatter / cross-refs) |
| 11 | R11: standardization worklist | `devdocs/editing_discpinlines.md` (54L) | core | HIGH | (devdocs) | READ THIS CYCLE. An in-flight cross-spec standardization effort (verdict-vocabulary `**Overall: PROCEED/FLAG/RE-RUN**`) — documents per-spec status drift (innovate DONE; td-critique partial; others TODO; paths stale: refers to `homegrown/` + `commands/`) — live evidence of the "same logic spread, drifting" problem |
| 12 | R12: structural-element classes (fine-grained items, enumerated via grep across R1-R4) | refinement notes (31 total: innovate 15, td-critique 9, sensemaking 4, decompose 2, surfacing 1, routelister 0, articulate_simple 0); Loading notes (11 — one per reference+protocol, near-identical wording); Step 0 pre-read blocks (7, near-identical); `NOW SOLID INSTRUCTIONS` divider (5 of 7 refs — absent in innovate + td-critique); override-record pattern `<rule>-marked-inapplicable:` (9, all in innovate); verdict vocabularies (PROCEED/FLAG/RE-RUN in surfacing+routelister+innovate; compound HIGH-PROCEED… in articulate_simple; absent in sensemaking+decompose; td-critique has Convergence Telemetry variant); NOT-lists (3 newer specs); vocabulary tables (3 newer specs); asymmetric-failure principles (4 specs, same shape: "X is structurally worse than Y → lean toward Z"); failure-mode frameworks (3 styles: named-list ×4 older, LAYER 1/2 ×3 newer, per-phase ×1 td-critique as of today) | core | HIGH | n/a (derived) | These element-classes ARE the repeated meta-pattern instances the purpose asks about; per-class counts captured at enumeration time |
| 13 | R13: edit-series findings (modified per git status) | `2026-06-08_19-10__inherited_frame_preservation…`, `2026-06-08_20-00__label_tested…`, `2026-06-08_20-42__external_grounding…`, `2026-06-09_08-14__critique_kill_severity…`, `2026-06-09_10-13__encode_purpose_fitness…` | sub | MED | 06-08/09 | NOT re-read (their distilled outputs are already IN td-critique.md + discipline_edit_tiers.md, both in workspace). Tagged for provenance |

## State Summary

**Territory echo:** `cognitive_harness/` corpus (7 active disciplines × [SKILL.md + references], 3 runners, 3 protocols, cognitive_fixes registry, old_* versions, non-active archive) + spec-organization convention docs + same-topic findings.

**Purpose echo:** surface everything bearing on "is there a hidden, content-preserving, significantly better organization latent in the spec corpus" — candidate directions: multi-file spread, common template, bundling of spread logic, unnamed mechanisms.

**Coverage map:**
| Region | Coverage | Aggregate relevance |
|---|---|---|
| R1 SKILL.md entry points | confirmed (full content in workspace + metrics) | core |
| R2 active references | confirmed (full content in workspace + metrics) | core |
| R3 runners | confirmed | core |
| R4 protocols | confirmed | core |
| R5 convention docs | confirmed | core |
| R6 cognitive_fixes | confirmed (read this cycle) | core |
| R7 same-topic findings (today) | confirmed (read this cycle) | core |
| R8 old_* versions | scanned-but-shallow (metrics only) | sub |
| R9 non-active | inferred (listing only) | side |
| R10 archived_skills | inferred (mechanism known from canon doc) | side |
| R11 editing_discpinlines | confirmed (read this cycle) | core |
| R12 element classes | confirmed (grep-enumerated) | core |
| R13 edit-series findings | inferred (distillates already in workspace) | sub |

**Confirmed-absent:** no machine-readable schema/manifest exists anywhere in the corpus (no JSON/YAML structure files; the only YAML is SKILL.md frontmatter); no include/import mechanism exists (every cross-file reference is prose + Read-at-runtime); `tools/structural_check.sh` referenced by all 3 runners does not exist.

**Concept-names list (discovered/confirmed; provenance = trace row):**
`Step Refinement (4-element shape; Forms 1/2/3; lifting recipes)` (R5) · `placement convention (Operation-or-Step-First with Scope-Of-Application)` (R5) · `distillation doctrine (dev-history ≠ runtime spec)` (R5) · `spec anatomy (Definition/Components/Process/FailureModes/Coverage) + output anatomy (Transform/Progression/Telemetry/Frontier)` (R5) · `edit tiers 1/2/3 + sub-axes (SS/CS, ADD/REPAIR, locus, persistence)` (R5) · `content-type → pattern mapping (6 content-types)` (R7) · `phase-affined operational guidance carve-out` (R7) · `cognitive_fixes registry pattern (index + loose template + staging gates + kill conditions + reversibility)` (R6) · `Loading-note preamble` (R12) · `Step 0 pre-read contract` (R12) · `SKILL.md 5-part entry-point shape` (R1) · `NOW SOLID INSTRUCTIONS divider (inconsistent: 5/7)` (R12) · `override-record pattern <rule>-marked-inapplicable (innovate-only)` (R12) · `verdict-vocabulary drift (3 styles + 2 absences)` (R11, R12) · `LAYER 1/LAYER 2 failure framework (newer specs)` vs `named-list` vs `per-phase` (R12) · `NOT-list` + `vocabulary table` + `asymmetric-failure principle` (newer-generation schema elements) (R2, R12) · `runner copy-inheritance drift (MVL lacks timestamp policy)` (R3) · `old_* same-dir versioning convention` (R8) · `name-prefix snapshot isolation (3 rename layers)` (R10) · `frontmatter inconsistency (MVL bare name: vs --- wrapped)` (R3)

**Recency distribution (per region, from per-item mtimes):**
- R2: newest 2026-06-09 (td-critique — per-phase edit applied today), oldest 2026-05-09 (decompose); no-mtime 0/7
- R3: newest 2026-06-07 (aMVLw), oldest 2026-05-16 (MVL)
- R4: newest 2026-06-09 (conclude), oldest 2026-05-01 (branch_inquiry)
- R6: 2026-05-22/23 (untouched since creation — registry stalled at N=1)
- R8: old_td-critique touched TODAY (kept current alongside the live edit)
- Signal (descriptive only, not a relevance verdict): td-critique + conclude are the active edit frontier; decompose + branch_inquiry are the longest-unrevised.

**Frontier flags (re-invocation suggestions):**
1. `old_* vs current structural diff` — refined-sub-purpose: "what structurally changed between spec generations (sections added/moved/renamed)" — evidence for which abstractions are ALREADY emerging through practice. (R8)
2. `non-active spec shapes` — refined-sub-purpose: "do retired specs instantiate the same meta-template (sample-size for template derivation)". (R9)
3. `dev-history docs` (`devdocs/how_articulate_simple_should_be.md`, `devdocs/how_articulate_simple_process_should_be` if present) — refined-sub-purpose: "what the meaning/structural/process 3-layer development pipeline implies for file layout". (not traversed)
4. `2026-06-08 edit-series findings` full read — only needed if Critique requires the original prosecution evidence behind td-critique's newest refinement notes. (R13)

**Workspace-populated:** `{populated: true, populated-at: 2026-06-09_21-50, extent: R1-R7 + R11-R12 full content in context; R8-R10, R13 enumerated/inferred}`

## Telemetry

- Mode: artifact | entry: signal-first | Boundary-discovery: not fired
- Cycles: 3 (re-confirmation sweep of prior-workspace + metric enumeration; unread-core draw-in [R6, R7, R11]; element-class enumeration [R12])
- Items enumerated: 27 corpus files + 8 convention docs + 3 registry files + 2 findings + 1 worklist + 10 element-classes ≈ 51
- Tags: core 36 · sub 9 · side 6 · umbrella 0
- items_with_mtime: 27 | items_without_mtime: ~24 (derived element-classes + docs not stat-ed)
- Workspace-overload trigger: approached (long session); handled per asymmetric-failure principle by frontier-flagging R8/R9 full reads instead of silently dropping them — no item filtered at uncertain relevance; rejections HIGH-confidence only (`.venv`, install scripts: not part of spec-structure territory)
- Failure modes checked: Missed-relevance (mitigated via grep-enumeration over whole corpus + git-status sweep), Surfaced-irrelevance (bounded), Over-coverage (tag distribution healthy), Territory-mis-binding (none), Workspace overload (frontier-flagged), Artifact under-specification (all entries carry identifiers + provenance), Workspace-artifact desync (tags captured at enumeration time), Recency-Equates-Idleness / Recency-Bias-Filter (recency reported as descriptive signal only; relevance tags content-driven)

## Self-Assessment

**PROCEED** — territory exhaustively traversed at structural-element resolution; all uncertain items included (as sub/side or frontier flags); only HIGH-confidence rejections; both work-products emitted.
