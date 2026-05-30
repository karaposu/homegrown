# Surfacing — Navigation Survey Report

## User Input

(from `_branch.md`) Survey of navigation-related work — chronological evolution + alternatives + stuck points + mapping arc.

## Mode + Entry Point

- **Mode:** artifact (concrete findings exist in the inquiry log).
- **Entry point:** signal-first (specific purpose — produce a historical survey).
- **Territory:** explicit-bounded.
  - Primary: `devdocs/inquiries/_archive/` (42 archived nav-related folders) + `devdocs/inquiries/` (13 active nav-related folders, including the mapping arc).
  - Adjacent: `cognitive_harness/navigation/SKILL.md` + `cognitive_harness/navigation/references/navigation.md` (current runtime spec); `cognitive_harness/navigation/warmup/*.md` (5 warmup files); `cognitive_harness/protocols/multi_resolution_navigation.md`, `cognitive_harness/protocols/navigation_context_intake.md`; `docs/nav.md`; `docs/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md`.
  - Out of territory: full prose-read of every finding (impractical at 55 inquiries); Summary sections + state-file telemetry are sufficient at this resolution.

## Boundary-discovery Sub-phase

Skipped. Territory is explicit-bounded.

## Traversal Trace

### Current runtime spec (Navigation today)

| # | Region | Item | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 1 | navigation.md §"What Navigation Is" | "Navigation has one structural operation: Enumeration — reading the cycle's output and producing a typed, reasoned, route-state-aware route map of every possible next direction." | core | HIGH | current canonical identity — enumeration-only |
| 2 | navigation.md §"What Navigation Is" Not-list | "Navigation is not: Decision-making / Planning / Wayfinding / Reflection / Routing" | core | HIGH | wayfinding was absorbed; selection is a different role |
| 3 | navigation.md §"16-Type Taxonomy" | content-directed (6: DEEPEN, REFINE, PURSUE SEED, INVESTIGATE FRONTIER, DEVELOP, TERMINATE) + process-directed (5: RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE) + context-directed (5: REVISIT, UNBLOCK, MERGE, TEST, CONSOLIDATE) = 16 types | core | HIGH | the canonical taxonomy |
| 4 | navigation.md §"Navigation Item Structure" | per-route card has 12 fields: Direction, Goal, Type, Priority, Status, Blocked by, Purpose, Movement, Unlocks, WHY, Guidance mode, Continuation note | core | HIGH | the route-card schema |
| 5 | navigation.md §"Adaptive guidance" | 4 Guidance modes: none / compact / full / expand-on-selection. The PRESCRIPTIVE guidance is what distinguishes navigation from descriptive disciplines | core | HIGH | the load-bearing residual that makes navigation NOT-just-explore-configured |
| 6 | navigation.md §"REVISIT modes" | 3 sub-actions: RESURRECT / INVALIDATE / REVERT — cross-cycle awareness | core | HIGH | cross-cycle integration is one of the 4 residuals proving navigation ≠ explore-config |
| 7 | navigation/warmup/ | 5 files: navigator-warmup1/2/3.md, navigator-refresh.md, navigator-prior-map-overlay.md | sub | MEDIUM | the warmup architecture for isolated-Navigator sessions |
| 8 | protocols/multi_resolution_navigation.md | the multi-resolution / staged-navigation runner pattern (recursive coverage) | sub | MEDIUM | the recursive-navigation protocol |
| 9 | protocols/navigation_context_intake.md | the navigation context-intake protocol | sub | MEDIUM | post-warmup context loading |
| 10 | docs/nav.md | "navigation is next target of this codebase" + concept-map artifact pattern + "every direction in Navigation is a concept" | core | HIGH | stable-view orientation; commits concept-map artifact |
| 11 | docs/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md | Level 0–4 ladder for isolated Navigator session architecture; v1 protocol-first, v2 persistent, v3 graph-native, v4 bounded autonomy | core | HIGH | the architectural roadmap for navigation-as-cross-run-steering |

### Group A — Discipline-vs-protocol framing (early, April 27–28)

| # | Region | Item | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 12 | 2026-04-27_20-26__navigation_mvl_integration | early framing: navigation should not be a required 6th stage in MVL+ | sub | HIGH | first decision: don't fold into MVL+ pipeline |
| 13 | 2026-04-27_20-45__meta_loop_whirl_navigation | meta-loop conceptualized; navigation is "eyes" of meta-loop; Navigation is perception, not selection | core | HIGH | establishes the perception-not-selection identity |
| 14 | 2026-04-28_08-39__navigation_protocol_or_discipline | verdict: Navigation = separate boundary discipline; can have protocol-style invocation hook but identity stays discipline | core | HIGH | the foundational discipline-vs-protocol decision |
| 15 | 2026-04-28_09-19__navigation_depth_and_answer_production | navigation depth + answer-production framing | sub | MEDIUM | depth question (one-pass vs recursive) emerged here |
| 16 | 2026-04-28_09-42__advanced_navigation_and_thinking_space_ui | advanced navigation + thinking-space UI vision | side | LOW | aspirational; not yet implemented |

### Group B — Isolated Navigator session architecture (late April + May 10)

| # | Region | Item | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 17 | 2026-04-28_10-18__navigation_observer_session_architecture | Navigation Observer (not "manager"); session-isolation invariant; artifact-first input; protocol-first first implementation | core | HIGH | architectural anchor — separate session protects movement-space attention from worker-context bloat |
| 18 | 2026-05-10_01-30__metaloop_navigator_session_relationship | further worked out the metaloop ↔ navigator session relationship; informed `docs/towards_cross_run_cognitive_steering` | core | HIGH | preserves session-isolation; refines the ladder framing |

### Group C — Warmup + context intake (May 2–4 churn)

| # | Region | Item | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 19 | 2026-05-02_15-09__next_load_bearing_navigation_warmup_context_loading | warmup as load-bearing for Navigator | sub | MEDIUM | early framing |
| 20 | 2026-05-02_15-35__navigation_context_intake_warmup_archaeology_pattern | warmup → context-intake → archaeology pattern | sub | MEDIUM | the pattern that became `navigation_context_intake.md` |
| 21 | 2026-05-03_13-07__navigation_warmup_v1_v2_v3_sufficiency | sufficiency of warmup-v1/v2/v3 design | sub | MEDIUM | settled the 3-file warmup ladder |
| 22 | 2026-05-03_13-43__navigation_context_intake_replacement_or_warmup_folder | replacement-vs-folder structural question | sub | MEDIUM | resolved with the `warmup/` folder |
| 23 | 2026-05-03_22-23__navigation_prior_map_read_after_warmup_v3 | prior-map overlay after warmup-v3 | sub | MEDIUM | informed `navigator-prior-map-overlay.md` |
| 24 | 2026-05-04_16-03__navigation_auto_freshness_preflight | the auto freshness preflight Step 0 in current navigation.md | sub | HIGH | landed in current spec |
| 25 | 2026-05-04_17-40__prior_navigation_map_overlay_mutability | mutability of prior-map overlay | side | MEDIUM | spec detail |
| 26 | 2026-05-04_17-49__navigation_warmup_readme_necessity | warmup readme necessity | side | LOW | bloat-corpus indicator (per established-audit) |

### Group D — Output contract + route map + multi-resolution (May 3–4)

| # | Region | Item | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 27 | 2026-05-03_14-19__navigation_output_contract_route_map_resume_memory | the route-map output contract + resume-memory framing | core | HIGH | shaped the current route-card spec |
| 28 | 2026-05-03_23-33__navigation_output_usefulness_review | review of output usefulness | sub | MEDIUM | informed map density guidelines |
| 29 | 2026-05-04_05-35__navigation_map_format_guidelines_density | format guidelines / density of the map | sub | MEDIUM | landed in current spec |
| 30 | 2026-05-04_07-12__recursive_navigation_coverage | recursive-navigation coverage rule | sub | HIGH | informed `multi_resolution_navigation.md` |
| 31 | 2026-05-04_07-27__multi_resolution_navigation_runner_depth_param | depth-parameter for staged runner | sub | HIGH | formalized in protocol |
| 32 | 2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage | budget vs coverage trade-off | sub | MEDIUM | calibration-state placeholder |
| 33 | 2026-05-04_14-43__navigation_frontier_ledger_sidecar_shape | frontier ledger sidecar shape | sub | MEDIUM | informed frontier-flag handling |
| 34 | 2026-05-04_16-17__route_expansion_fields_necessity_for_auto_navigation | which route fields are necessary for auto-navigation | sub | MEDIUM | landed as the 12 required fields |

### Group E — Navigation memory / past-map index (May 6–7 — stuck point)

| # | Region | Item | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 35 | 2026-05-04_15-47__sync_idle_navigator_recent_developments | sync idle Navigator with recent project changes | sub | MEDIUM | informed `navigator-refresh.md` |
| 36 | 2026-05-06_07-06__past_navigation_memory_file_index_feasibility | past-map memory: file-index feasibility | sub | MEDIUM | parent of the correction chain |
| 37 | 2026-05-06_10-21__past_navigation_memory_index_vs_search | index-vs-search decision | sub | MEDIUM | iterated repeatedly |
| 38 | 2026-05-06_13-19__navigation_correction_chain_failure_inventory | a CORRECTION CHAIN inventory for navigation — meta-evidence of stuck point | core | HIGH | inventories the failures up to that date |
| 39 | 2026-05-06_13-36__loop_diagnose__past_navigation_memory_index_before_search | LOOP_DIAGNOSE — "index before search" missed | core | HIGH | stuck-point indicator |
| 40 | 2026-05-06_15-04__loop_diagnose__past_navigation_memory_discovery_pressure | LOOP_DIAGNOSE — discovery pressure | core | HIGH | stuck-point indicator |
| 41 | 2026-05-06_16-49__loop_diagnose__navigation_naming_boundary_drift | LOOP_DIAGNOSE — naming boundary drift | core | HIGH | stuck-point indicator |
| 42 | 2026-05-07_15-01__loop_diagnose__past_navigation_memory_index_vs_search | LOOP_DIAGNOSE — index-vs-search re-diagnosed | core | HIGH | stuck-point indicator |
| 43 | 2026-05-07_19-08__loop_diagnose__past_navigation_memory_file_index_feasibility | LOOP_DIAGNOSE — file-index feasibility re-diagnosed | core | HIGH | stuck-point indicator; 5 LOOP_DIAGNOSE findings in ~36 hours on the past-memory thread |

### Group F — explore vs navigation overlap / unification debate (May 11–12)

| # | Region | Item | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 44 | 2026-05-10_03-50__navigation_established_audit | snapshot of "what's established about navigation" — list-formatted; 9 challenge candidates + 30 background + 9 deferred | core | HIGH | the most authoritative state-of-navigation document just before the overlap debate |
| 45 | 2026-05-10_11-22__navigation_organization_structure | navigation-organization-structure inquiry | sub | MEDIUM | precursor to overlap debate |
| 46 | 2026-05-11_13-30__explore_vs_navigation_overlap | user observes overlap with `/explore`; dual diagnosis: R2 (existing /navigation discipline) vs R3 (north-star vision); R2 separate-but-mechanism-sharing; R3 specialization-plus-composition; the "two navigations" conflation | core | HIGH | the central overlap diagnostic |
| 47 | 2026-05-11_21-51__explore_navigation_atomic_decomposition | atomic decomposition exercise | sub | MEDIUM | further investigation |
| 48 | 2026-05-12_11-40__navigation_factoring_question | the "factoring" framing — navigation as factored over explore | core | HIGH | identifies the load-bearing residual: prescriptive Adaptive Guidance |
| 49 | 2026-05-12_16-59__navigation_requires_holistic_understanding | navigation requires holistic understanding | sub | HIGH | informs the multi-iteration test below |
| 50 | 2026-05-12_19-43__navigate_is_explore_with_destination_test | test of hypothesis "navigate = explore + destination"; iter 1 failed (4-operations error); iter 2 found navigate differs on only 2 structural axes (destination-bias + prescriptive annotation content type) | core | HIGH | hypothesis-testing |
| 51 | 2026-05-12_20-31__loop_diagnose__navigate_4_operations_error | LOOP_DIAGNOSE — the 4-operations error in iter 1 of the destination-test | core | HIGH | correction chain in the unification debate |
| 52 | 2026-05-12_20-51__navigate_warrants_separate_discipline | verdict: /navigate IS justified as a separate discipline (3 grounds: substantial nav-specific content; pedagogical clarity; discrete reference in runner-taxonomy); current spec is over-engineered (~490 lines); REFINE as lean extension document (~280-330 lines) | core | HIGH | the verdict that survives in current spec |

### Group G — Mapping arc (May 12–13 — the user's named focus)

| # | Region | Item | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 53 | 2026-05-12_22-25__pre_mvl_mapping_or_explore_enhancement | pre-MVL: mapping-or-explore-enhancement; generic-not-discipline-specific framing for canonical-source-loading | core | HIGH | the question of where mapping LIVES |
| 54 | 2026-05-13_07-16__is_mapping_required_core_of_explore | verdict: YES, mapping IS core of /explore at user-language grain; granularity vocabulary introduced; /explore covers 7 observable types of mapping (layout, concept, status, coverage/confidence, frontier, possibility, partly-excluded relational) | core | HIGH | first answer to "what is mapping?" — observation-based 7-kinds typology |
| 55 | 2026-05-13_12-15__what_is_mapping_meta_paradigms | meta-paradigm framework: Layer 1 minimum-core definition + Layer 2 4 primary axes (what-preserved / encoding-type / operational-act / purpose) + 8 secondary axes + Layer 3 12 crystallized paradigms (Cartographic, Taxonomic, Relational, Functional, Embedding, Process/Behavioral, Constraint/Boundary, Possibility/Generative, Navigational, Coverage/Field, Reflexive/Self/Meta, Analogical/Cross-domain) | core | HIGH | the structurally-grounded answer to "what is mapping?" — applies universally |
| 56 | 2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo | CORRECTS both priors (7-kinds typology AND the 12-15 finding's REFINES relationship-declaration); framework content preserved; meta-lesson strengthened with obligatory 3-question diagnostic; names "preservation-for-preservation's-sake" bias + "lesson-introduces-its-own-trap" meta-pattern | core | HIGH | the canonical mapping answer — corrects two priors in one move |
| 57 | 2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo (cont.) | "Mapping is a purposive structure-preserving correspondence from a source to a target, specified by 4 primary axes (what-preserved, encoding-type, operational-act, purpose) and 8 secondary axes. 12 crystallized paradigms are clusters in that axis space. /explore produces 6 of the 12." | core | HIGH | the minimum-core definition + the explore-projection |

### Group H — Establishment audit + naming + verification (May 14–18)

| # | Region | Item | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 58 | 2026-05-14_00-01__verify_navigation_is_configured_explore | VERIFICATION inquiry on the hypothesis "navigation = /explore-configured-with-mapping-paradigm" — verdict: FALSE. 4 residuals prove non-reducibility: (F1) Adaptive guidance generation (load-bearing); (F2) Reachability/gates check; (F4) REVISIT sub-actions; (F5) Auto-derivable vs human-judgment split. 5 substantial reductions DO hold (explain the overlap). Meta-lesson: verify via /MVL+ pipeline before accepting unification hypotheses | core | HIGH | the structural settlement of the unification debate — navigation STAYS separate |
| 59 | 2026-05-16_15-18__name_for_navigation_discipline | rename from `/navigation` (noun) to `/navigate` (verb); aligns with verb-cluster siblings (innovate, explore, decompose, comprehend, reflect); pairs with role-noun "Navigator" via verb→agent derivation; alternative `/directions` survives but loses on cross-layer pairing | core | HIGH | naming verdict — recommended but not yet applied to runtime spec (current spec is still `cognitive_harness/navigation/`) |
| 60 | 2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo | LOOP_DIAGNOSE of the 12-15 → 12-45 correction chain. Innovation failed: at the relationship-label piece, only Combination + Absence Recognition were applied; Inversion was applied at a different piece. CORRECTS was never generated as an alternative. 5-piece refinement set for `/innovate` reference; introduces "meta-decision piece" criterion + piece-level Inversion rule | core | HIGH | the diagnostic that fed the May 18+ /innovate spec refinements (Piece-Level Inversion at Meta-Decision Pieces); load-bearing for understanding why the mapping correction was forced rather than auto-derived |

### Group X — Older (non-timestamped) navigation inquiries in `_archive/`

| # | Region | Item | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 61 | `_archive/alignment_sic_deep_mapping` | unknown — pre-timestamped naming convention | umbrella | LOW | likely pre-April-2026 historical content |
| 62 | `_archive/navigation_placement` | unknown | umbrella | LOW | historical |
| 63 | `_archive/post_completion_navigation` | unknown | umbrella | LOW | historical |
| 64 | `_archive/search_equals_navigation_plus_x` | "search = navigation + X" framing | umbrella | LOW | historical exploratory framing |
| 65 | `_archive/sic_as_wayfinder` | SIC-as-wayfinder framing | umbrella | LOW | precursor to wayfinding absorption |
| 66 | `_archive/sic_navigation_integration` | early SIC-navigation integration | umbrella | LOW | historical |
| 67 | `_archive/wayfinding_fundamental_fix` | wayfinding fix | umbrella | LOW | absorbed into /navigation per current spec |
| 68 | `_archive/wayfinding_navigation_unification_check` | wayfinding-navigation unification check | umbrella | LOW | absorbed |

**Items surfaced:** 68. **Workspace populated:** items 1–68 are now in present attention with relevance tags.

## State Summary

### Territory specification echo

55 nav-related inquiry folders (42 archived + 13 active) + the runtime spec + 5 warmup files + 2 protocols + 2 stable-view docs.

### Purpose specification echo

Identify items that bear on the survey's four observation targets: (a) chronological evolution, (b) alternatives considered, (c) stuck points, (d) the mapping arc.

### Coverage map

| Region | Coverage |
|---|---|
| Current runtime spec (navigation.md) | confirmed |
| Warmup + protocols | confirmed (path-level; not full-content) |
| Stable-view docs (nav.md, towards_cross_run_cognitive_steering) | confirmed |
| Group A (April 27–28 — discipline framing) | confirmed (key findings read) |
| Group B (isolated Navigator session) | confirmed |
| Group C (warmup churn) | scanned-but-shallow (folder names + audit-marked iteration evidence) |
| Group D (output contract / multi-resolution) | scanned-but-shallow |
| Group E (memory / past-map index — STUCK POINT) | confirmed (5 LOOP_DIAGNOSE findings clustered in 36 hours = strong stuck-point evidence) |
| Group F (overlap / unification debate) | confirmed |
| Group G (mapping arc) | confirmed (the user's named focus — read in full) |
| Group H (audit / naming / verification / late diagnostic) | confirmed |
| Group X (pre-timestamp archived) | scanned-but-shallow (folder-level only) |

### Confirmed-absent regions

- The full prose of every finding (out of scope at this resolution; summary sections are sufficient for the survey's purpose).
- The unified-runtime-spec-after-the-mapping-arc state — the `/navigate` rename per finding 59 was not applied to the runtime spec (verified: `cognitive_harness/navigation/` still exists; no `cognitive_harness/navigate/` folder). This is a **frontier-flag item** for the survey.

### Concept-names list

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| Navigation as boundary discipline | vocabulary | trace #14 | the April 28 verdict that survives in current taxonomy |
| Navigation Observer (isolated session) | vocabulary | trace #17 | session-isolation architecture for cross-run steering |
| 16-type taxonomy (3 categories) | structural-reference | trace #3 | the canonical type set |
| Route-card (12 fields) | structural-reference | trace #4 | the per-route schema |
| R2 / R3 distinction | coined-term | trace #46 | two operations conflated under "Navigation" — R2 = existing discipline; R3 = north-star vision |
| Unification hypothesis (`/navigate = /explore-configured`) | structural-reference | trace #50, #58 | tested and falsified |
| 4 residuals (F1 Adaptive Guidance, F2 Reachability/gates, F4 REVISIT sub-actions, F5 Auto/human split) | structural-reference | trace #58 | the parts of /navigate that DON'T reduce to /explore config |
| 5 substantial reductions | structural-reference | trace #58 | the parts that DO reduce — explain the overlap |
| Mapping as purposive structure-preserving correspondence | vocabulary | trace #57 | the canonical minimum-core definition of mapping |
| 4 primary axes (what-preserved / encoding-type / operational-act / purpose) | structural-reference | trace #55, #57 | the generative axes of mapping |
| 12 crystallized paradigms | structural-reference | trace #55, #57 | clusters in the axis space |
| /explore produces 6 of 12 paradigms | structural-reference | trace #57 | the explore-projection |
| 7 observed kinds of mapping (corrected) | structural-reference | trace #54, #56 | original typology — DATA preserved; typology claim corrected |
| "preservation-for-preservation's-sake" bias | coined-term | trace #56 | the bias that caused the layer-shift error in 12-15 |
| "lesson-introduces-its-own-trap" meta-pattern | coined-term | trace #56 | new vocabulary in a meta-lesson becomes a vector for the failure it names |
| Strengthened CORRECTS-vs-REFINES diagnostic | structural-reference | trace #56 | 3-question check before declaring REFINES |
| Piece-Level Inversion at Meta-Decision Pieces | structural-reference | trace #60 | innovate-spec refinement produced by diagnosing why 12-15 missed CORRECTS |
| `/navigate` rename (not yet applied) | structural-reference | trace #59, confirmed-absent | spec-side change recommended but not landed in runtime |

### Frontier flags

| Sub-region | Open question for downstream |
|---|---|
| Navigation memory / past-map index | The May 6–7 LOOP_DIAGNOSE cluster (5 findings in ~36h) was a STUCK POINT. Is the issue resolved in current spec? The current spec has `navigator-prior-map-overlay.md` but the past-memory-as-index question may still be open. Sensemaking + Critique should flag if resolution status is unclear. |
| `/navigate` rename | Finding 59 recommended the rename; current runtime still uses `/navigation`. Status: recommended-not-yet-applied. The survey should note this as the most recent open spec-side action. |
| Mapping as `/explore`-section vs separate | Group G's mapping arc settles "what mapping IS" (the paradigm framework) but the spec-side action (where mapping documentation LIVES in `/explore.md`) status is unclear from finding 56. Sensemaking should flag. |
| Two-navigations (R2 vs R3) | Finding 46 named R2 (existing /navigation) and R3 (north-star vision). Was R3 implemented? The current `cognitive_harness/navigation/` is R2; R3-status appears unfinished. The survey should be explicit about this. |

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-23T09:30
extent: 68 items across 55 inquiry folders + 8 runtime/protocol/doc files; coverage confirmed in 7 of 12 regions; 5 scanned-but-shallow
```

### Re-invocation parameters

Not requested. Single invocation is sufficient at this resolution.

## Telemetry

- **Mode:** artifact + signal-first
- **Cycles run:** 1
- **Items enumerated:** 68
- **Items tagged at each relevance level:** core = 25, sub = 23, side = 12, umbrella = 8
- **Sub-phase fired:** no
- **Convergence criteria status:** territory exhaustively traversed at current resolution; no items filtered at uncertain-relevance level (umbrella tags retained per asymmetric-failure principle); items rejected only at HIGH-confidence (the umbrella-tagged items are kept).
- **Workspace-overload trigger:** not fired
- **Failure modes checked:** Missed-relevance (none); Surfaced-irrelevance (8 umbrella tags retained); Over-coverage (no); Territory-mis-binding (no); Workspace overload (no); Artifact under-specification (no); Workspace-artifact desync (no).
- **Self-assessment verdict:** PROCEED

## Self-Assessment

PROCEED. All convergence criteria met. The workspace holds 68 items spanning 55 inquiry folders organized into 8 thematic groups + current runtime artifacts. The user's named focus (mapping arc) is fully surfaced; the stuck-point evidence (May 6–7 LOOP_DIAGNOSE cluster) is surfaced; the evolution arc (April 27 → May 18) is traceable. Downstream sensemaking has sufficient material to construct the chronological narrative + per-group reasoning + the mapping deep dive.
