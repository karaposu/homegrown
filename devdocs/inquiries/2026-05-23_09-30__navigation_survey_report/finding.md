---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Navigation Survey Report

## Question

(from `_branch.md`)

> Produce a survey-style report of the project's navigation-related work — covering all inquiry folders whose names match `navigation` / `navigate` / `wayfind` / `mapping`, plus the runtime navigation artifacts and stable-view docs — that traces (a) how the project's understanding of navigation has changed over time, (b) what alternatives were considered and which were rejected with reasoning, (c) where the project got stuck (recurring confusion, correction chains, unresolved threads), and (d) the most-recent open thread: whether navigation should include a "mapping" component, and what "mapping" actually means in this context.

The goal: a survey the reader can use to calibrate where navigation currently stands without spelunking through 55 inquiry folders.

## Finding Summary

- **Navigation's story has four phases** spanning April 27 – May 18, 2026. **Phase I (April 27–28)** established navigation as a separate boundary discipline, with the meta-loop framing it as "eyes" (perception, not selection) and the Navigation Observer architecture committing session-isolation. **Phase II (May 2–7)** built machinery — warmup, output contract, multi-resolution, frontier ledger, prior-map overlay. **Phase III (May 11–14)** ran the overlap debate against `/explore` and rejected the unification hypothesis via the `/MVL+` verification protocol. **Phase IV (May 12–18)** deepened the mapping concept (paradigm framework with 4+8 axes and 12 paradigms; CORRECTS-redo of a prior 7-kinds typology; cascade-correction into `/innovate`).

- **The clearest stuck point is the past-navigation-memory thread (May 6–7).** Five LOOP_DIAGNOSE findings landed within 36 hours — on index-vs-search, discovery-pressure, naming-boundary-drift, and file-index-feasibility — alongside a navigation_correction_chain_failure_inventory finding that itself meta-observes the cluster. No other navigation thread in the corpus has this density of correction-chain firings.

- **The most-debated alternative was "navigation is `/explore`-configured."** The hypothesis was advanced in conversation around May 11–13. The user invoked `/MVL+` to verify rather than accept the in-conversation argument. The verification at finding `verify_navigation_is_configured_explore` (May 14) returned a FALSE verdict: four residuals — Adaptive guidance generation (the load-bearing one), reachability/gates check, REVISIT sub-actions, auto-derivable-vs-human-judgment split — cannot be expressed as configuration of `/explore`. Five reductions DO hold (scan-signal-probe over next-move-space; 16-type taxonomy as per-paradigm labeling; 4-category completeness; priority + confidence per route; route-card record format) and explain why the overlap was tempting. The corpus' meta-lesson is named: in-conversation argument is insufficient grounding for spec-level decisions; verify via `/MVL+` before accepting unification hypotheses.

- **The mapping question is settled at the meta-level but the spec-side action is open.** Three findings in one day (May 13 — `is_mapping_required_core_of_explore`, `what_is_mapping_meta_paradigms`, `prior_mapping_understanding_was_wrong_redo`) progressed from a 7-observed-kinds typology to a meta-paradigm framework, then explicitly CORRECTED the typology and the framework's own REFINES framing in a single redo. The current canonical answer: mapping is a **purposive structure-preserving correspondence from a source to a target, specified by 4 primary axes (what-preserved / encoding-type / operational-act / purpose) and 8 secondary axes; 12 crystallized paradigms are clusters in that axis space; `/explore` produces 6 of the 12**. Whether this framework should be committed to `/explore`'s runtime spec (and where) is the open spec-side action.

- **Three threads are open at survey time** (recommended-but-not-yet-applied or aspirational): (1) the `/navigate` rename per finding `name_for_navigation_discipline` (May 16) — the runtime spec still lives at `cognitive_harness/navigation/`, not `cognitive_harness/navigate/`; (2) the R3 north-star vision per finding `explore_vs_navigation_overlap` (May 11) — described at `devdocs/nav_north_star.md`, structurally distinct from R2 (the existing discipline), not implemented; (3) the mapping-spec-side action — where the paradigm framework lives in `/explore`'s spec, deferred at finding `prior_mapping_understanding_was_wrong_redo`.

- **The navigation corpus cascaded into `/innovate`'s spec.** The May 18 LOOP_DIAGNOSE finding (`innovation_missed_corrects_on_mapping_redo`) traced WHY the May 13 12-15 finding missed the CORRECTS alternative (Innovation applied Combination + Absence Recognition at the relationship-label piece but not Inversion). The diagnostic produced a 5-piece refinement set for `/innovate` introducing Piece-Level Inversion at Meta-Decision Pieces — a structural addition to `/innovate` that came out of a navigation-related correction chain. This is a meta-pattern worth recording: the navigation corpus impacted a sibling discipline's spec through cascade-correction, not direct edit.

- **Adaptive Guidance is the load-bearing residual that protects navigation's separate identity.** Three independent findings (May 11-40 factoring; May 12-20-51 separate-discipline verdict; May 14 verification) cite this as the reason navigation does NOT collapse into `/explore`-configured. `/explore`'s annotation layers are descriptive (existence, confidence, relevance, adjacency, confirmed-absent); navigation's Guide layer with modes (`none` / `compact` / `full` / `expand-on-selection`) is prescriptive — it tells the future executor how to engage with the route. Folding navigation into `/explore` would force `/explore`'s identity from "purposive open-mode surfacing" to mixed descriptive+prescriptive — an identity change.

## Inherited Commitments Re-test

This inquiry consumed commitments across 55 navigation-related findings + runtime artifacts. Each finding's load-bearing commitment is grouped thematically and re-tested by the survey's narrative below. Per the Synthesis Trigger declaration, commitments are listed by group with a re-test status.

### Group A — Discipline-vs-protocol framing (April 27–28)

- **Commitment:** Navigation is a separate boundary discipline; not folded into MVL+ as a 6th stage; can have protocol-style invocation but identity stays discipline.
- **Source:** `devdocs/inquiries/_archive/2026-04-28_08-39__navigation_protocol_or_discipline/finding.md`.
- **Re-test status:** RE-TESTED. The commitment is the foundation of the survey's Phase I narrative and survives in the current runtime spec (`cognitive_harness/navigation/SKILL.md` lists navigation as a Boundary discipline; `cognitive_harness/MVL+/SKILL.md` does not include navigation in the E → S → D → I → C pipeline).
- **Evidence:** finding 14 (Surfacing) + current runtime spec inspection.

### Group B — Isolated Navigator session architecture (April 28; May 10)

- **Commitment:** Navigation Observer is artifact-first, session-isolated, protocol-first at v1, persistent at v2+, with a 4-level autonomy ladder.
- **Source:** `devdocs/inquiries/_archive/2026-04-28_10-18__navigation_observer_session_architecture/finding.md` + `devdocs/inquiries/2026-05-10_01-30__metaloop_navigator_session_relationship/finding.md` + `docs/towards_cross_run_cognitive_steering_with_isolated_navigator_session.md`.
- **Re-test status:** RE-TESTED. The commitment survives in `docs/towards_cross_run_cognitive_steering_with_isolated_navigator_session.md`; the warmup architecture (`cognitive_harness/navigation/warmup/` with 5 files) is the v1 operational form.
- **Evidence:** finding 17, 18, 11 (Surfacing).

### Group C — Warmup + context intake (May 2–4)

- **Commitment:** the 3-file warmup ladder + refresh + prior-map overlay; navigation_context_intake as a protocol.
- **Source:** multiple findings May 2-15-09 through May 4-17-49.
- **Re-test status:** RE-TESTED. The current `cognitive_harness/navigation/warmup/` folder has 5 files (`navigator-warmup1.md`, `navigator-warmup2.md`, `navigator-warmup3.md`, `navigator-refresh.md`, `navigator-prior-map-overlay.md`); `cognitive_harness/protocols/navigation_context_intake.md` exists.
- **Evidence:** filesystem inspection at Surfacing.

### Group D — Output contract + route map + multi-resolution (May 3–4)

- **Commitment:** 12-field route-card schema; 16-type taxonomy; 4 guidance modes (none/compact/full/expand-on-selection); multi-resolution runner protocol.
- **Source:** multiple findings May 3-14-19 through May 4-16-17.
- **Re-test status:** RE-TESTED. The current `cognitive_harness/navigation/references/navigation.md` commits the 12-field route-card, the 16-type taxonomy across 3 categories, and the 4 guidance modes. `cognitive_harness/protocols/multi_resolution_navigation.md` exists.
- **Evidence:** finding 3, 4, 5 (Surfacing); current spec inspection.

### Group E — Navigation memory / past-map index (May 6–7) — STUCK POINT

- **Commitment:** past-navigation-memory architecture; index-vs-search trade-off; the navigation_correction_chain_failure_inventory documents the stuck point itself.
- **Source:** 5 LOOP_DIAGNOSE findings in 36 hours.
- **Re-test status:** INHERITED-WITHOUT-RE-TEST.
- **Reason:** the corpus does not contain a clear post-stuck-point resolution finding. The current state has `navigator-prior-map-overlay.md` (a partial answer) but the broader past-memory-as-index question is not visibly settled in a later finding. The survey treats Group E as the stuck-point exemplar; whether the stuck point is closed or still latent is itself an open question the survey can't resolve.

### Group F — Overlap / unification debate (May 11–14)

- **Commitment 1:** R2 (existing /navigation discipline) vs R3 (north-star vision) distinction; the overlap-with-/explore concern concentrates in R3, not R2.
- **Source:** `devdocs/inquiries/_archive/2026-05-11_13-30__explore_vs_navigation_overlap/finding.md`.
- **Re-test status:** RE-TESTED. The current `cognitive_harness/navigation/` is R2; the survey verifies no `nav_north_star.md`-implementing folder exists, confirming R3 is still aspirational.

- **Commitment 2:** `/navigate` warrants being a separate discipline (3 grounds: substantial nav-specific content; pedagogical clarity; discrete reference in runner-taxonomy); current spec is over-engineered (~490 lines); REFINE as lean extension document (~280–330 lines).
- **Source:** `devdocs/inquiries/2026-05-12_20-51__navigate_warrants_separate_discipline/finding.md`.
- **Re-test status:** RE-TESTED. The current spec at `cognitive_harness/navigation/references/navigation.md` was inspected; lean rewrite recommended but not applied (the spec is still substantial; see Open Threads below for status).

- **Commitment 3:** Unification hypothesis (`/navigate = /explore`-configured) is FALSE; 4 residuals + 5 reductions; Adaptive Guidance is the load-bearing residual.
- **Source:** `devdocs/inquiries/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md`.
- **Re-test status:** RE-TESTED. The current navigation.md spec preserves the Guide layer + 16-type taxonomy + REVISIT sub-actions + Auto-vs-human-judgment partition that finding 58 names as residuals. The structural argument holds in the current state.

### Group G — Mapping arc (May 12–13) — USER NAMED FOCUS

- **Commitment 1:** Mapping IS core to `/explore` at user-language grain; `/explore` covers 7 observable kinds of mapping.
- **Source:** `devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/finding.md`.
- **Re-test status:** RE-TESTED via the CORRECTS-redo of the same day. The 7-kinds claim's CORE part ("mapping IS core to /explore") is preserved as Claim P; the typology part ("the 7 kinds ARE the typology") is CORRECTED.

- **Commitment 2:** Mapping = purposive structure-preserving correspondence from source to target, specified by 4 primary axes (what-preserved / encoding-type / operational-act / purpose) + 8 secondary axes; 12 crystallized paradigms are clusters; `/explore` produces 6 of 12.
- **Source:** `devdocs/inquiries/2026-05-13_12-15__what_is_mapping_meta_paradigms/finding.md` (content) + `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md` (which preserves the content while CORRECTING the framing).
- **Re-test status:** RE-TESTED. The framework content is the corpus's canonical answer to "what is mapping?" — survives the user's correction at finding 56.

- **Commitment 3:** Strengthened CORRECTS-vs-REFINES diagnostic (3-question structural check); "preservation-for-preservation's-sake" bias; "lesson-introduces-its-own-trap" meta-pattern.
- **Source:** `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md`.
- **Re-test status:** RE-TESTED. The diagnostic was applied at finding 58 (`verify_navigation_is_configured_explore`) and at the May 22 inquiry sequence the user has been running recently — the survey verifies cross-application in the project corpus.

### Group H — Late audit + naming + diagnostic (May 14–18)

- **Commitment 1:** `/navigate` rename (verb form; aligns with verb-cluster siblings; pairs with Navigator role-noun via verb→agent derivation).
- **Source:** `devdocs/inquiries/2026-05-16_15-18__name_for_navigation_discipline/finding.md`.
- **Re-test status:** RE-TESTED. The runtime spec still lives at `cognitive_harness/navigation/`. The rename is recommended-but-not-applied; preserved as Open Thread 1.

- **Commitment 2:** Piece-Level Inversion at Meta-Decision Pieces (5-piece refinement set for `/innovate`).
- **Source:** `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo/finding.md`.
- **Re-test status:** RE-TESTED. The 5-piece refinement is preserved as the meta-decision-piece criterion + piece-level Inversion rule + intervention-shape-axis Inversion in `/innovate`'s current spec at `cognitive_harness/innovate/references/innovate.md` (verified in earlier session context where the spec was read).

## Finding

### Where navigation stands at survey time (executive snapshot)

The project's navigation discipline lives at `cognitive_harness/navigation/`. The current spec — `references/navigation.md` plus the SKILL.md frontmatter plus the `warmup/` folder of 5 files — commits navigation to enumeration of typed next directions, organized via a 16-type taxonomy (6 content-directed + 5 process-directed + 5 context-directed) and emitted as route-cards with 12 per-route fields. The Adaptive Guidance layer (4 modes: none / compact / full / expand-on-selection) is the discipline's distinguishing feature — prescriptive content that other disciplines' annotation layers don't produce.

Two stable docs orient new readers: `docs/nav.md` (one-page concept-map framing) and `docs/towards_cross_run_cognitive_steering_with_isolated_navigator_session.md` (4-level autonomy ladder for the isolated-Navigator architecture). One protocol — `cognitive_harness/protocols/multi_resolution_navigation.md` — handles staged / depth-parameterized navigation runs.

The most recent settlements are: (a) navigation stays a separate discipline (May 14 verification verdict); (b) mapping is a purposive structure-preserving correspondence with a 4+8-axis paradigm framework, with the prior 7-kinds typology CORRECTED (May 13 12-45 finding); (c) the cross-discipline diagnostic chain produced a `/innovate` refinement (May 18 finding 60). Three threads remain open — the `/navigate` rename, the R3 north-star vision, and the mapping-spec-side action — and are named in §"Open threads" below.

### Phase I — Establishing navigation as a separate discipline (April 27–28)

The first navigation finding (`2026-04-27_20-26__navigation_mvl_integration` at `devdocs/inquiries/_archive/`) ruled out one option immediately: navigation should NOT be appended as a required 6th stage inside the MVL+ pipeline (where MVL+ already has E → S → D → I → C). That negative-space framing left two live options for the next finding to adjudicate.

The same day's `2026-04-27_20-45__meta_loop_whirl_navigation` re-framed the meta-loop as a "stateful traversal engine for thinking space," with navigation as the meta-loop's *eyes* (perception layer) — not its will (selection). That perception-vs-selection split is a foundational principle the corpus never overturns; later disciplines (Selector role, autonomy ladder) inherit it as boundary.

The next morning's `2026-04-28_08-39__navigation_protocol_or_discipline` (a REFINES of the 27-20-26 finding) adjudicated the open question via a clean split: Navigation's *identity* stays as a separate boundary discipline; Navigation's *invocation* can be protocol-like (a hook after CONCLUDE, a meta-loop call). This split keeps MVL+ atomic while keeping navigation usable. The verdict: keep `cognitive_harness/navigation/SKILL.md`; do not rewrite as a `cognitive_harness/protocols/navigation.md` MVL+ wrapper.

`2026-04-28_09-19__navigation_depth_and_answer_production` and `2026-04-28_09-42__advanced_navigation_and_thinking_space_ui` explored depth + UI aspirations on the same day; both are scanned-but-shallow in the corpus (the UI vision in particular is aspirational, not implemented).

The Phase I capstone is `2026-04-28_10-18__navigation_observer_session_architecture`: a separate Navigator session is the right shape for v1+ navigation; the better name is *Observer*, not *manager*; in v1 the Observer observes, maps, and recommends but does not autonomously launch the next MVL run. The Observer is artifact-first (reads `_branch.md`, `_state.md`, `finding.md`, archived discipline outputs) rather than chat-transcript-based. The first implementation should be protocol-first — produce a `navigation_observer.md` report before building a long-lived separate AI session. This Phase I architectural commitment is what later becomes the 4-level autonomy ladder in `docs/towards_cross_run_cognitive_steering_with_isolated_navigator_session.md`.

### Phase II — Machinery buildout, and the stuck point (May 2–7)

May 2–4 saw concentrated machinery work. The warmup architecture emerged through several findings — `2026-05-02_15-09__next_load_bearing_navigation_warmup_context_loading`, `2026-05-02_15-35__navigation_context_intake_warmup_archaeology_pattern`, `2026-05-03_13-07__navigation_warmup_v1_v2_v3_sufficiency`, `2026-05-03_13-43__navigation_context_intake_replacement_or_warmup_folder` (all in `_archive/`) — and landed in the current `cognitive_harness/navigation/warmup/` folder as 5 files. The warmup-v1/v2/v3 sufficiency question was settled into a 3-file ladder; the `navigator-refresh.md` and `navigator-prior-map-overlay.md` files added incremental and overlay-merge capabilities respectively.

In parallel, the output-contract work (`2026-05-03_14-19__navigation_output_contract_route_map_resume_memory`, `2026-05-03_23-33__navigation_output_usefulness_review`, `2026-05-04_05-35__navigation_map_format_guidelines_density`, `2026-05-04_16-17__route_expansion_fields_necessity_for_auto_navigation`) progressively built the 12-field route-card and the format conventions visible in the current spec.

May 4 also produced the multi-resolution work (`2026-05-04_07-12__recursive_navigation_coverage`, `2026-05-04_07-27__multi_resolution_navigation_runner_depth_param`, `2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage`, `2026-05-04_14-43__navigation_frontier_ledger_sidecar_shape`) which formalized in `cognitive_harness/protocols/multi_resolution_navigation.md`. The auto-freshness preflight (`2026-05-04_16-03`) landed in the current spec as Step 0.

**Then May 6–7 happened.** Five LOOP_DIAGNOSE findings landed within 36 hours, all clustered on the past-navigation-memory question:

- `2026-05-06_13-36__loop_diagnose__past_navigation_memory_index_before_search` — diagnosing the "index before search" miss.
- `2026-05-06_15-04__loop_diagnose__past_navigation_memory_discovery_pressure` — diagnosing discovery-pressure friction.
- `2026-05-06_16-49__loop_diagnose__navigation_naming_boundary_drift` — diagnosing naming-boundary drift.
- `2026-05-07_15-01__loop_diagnose__past_navigation_memory_index_vs_search` — re-diagnosing the same index-vs-search question.
- `2026-05-07_19-08__loop_diagnose__past_navigation_memory_file_index_feasibility` — re-diagnosing file-index feasibility.

The May 6 13:19 finding `navigation_correction_chain_failure_inventory` is the meta-evidence — it inventories the navigation-related correction chains and confirms that the past-memory thread is the densest cluster.

This is the project's clearest navigation stuck point on record. No other navigation thread in the corpus has 5 LOOP_DIAGNOSE findings in 36 hours. The past-memory question never landed in a single decisive resolution finding; the current state has `navigator-prior-map-overlay.md` (the prior-map overlay protocol) but the broader past-memory-as-index question is not visibly settled in a later finding. The survey treats Group E as the stuck-point exemplar and preserves the open question in `## Open Questions` below.

### Phase III — The overlap / unification debate (May 11–14)

The Phase III arc starts on May 10 with `2026-05-10_03-50__navigation_established_audit` — a snapshot of "what's established about navigation" as a scannable list of 9 challenge candidates + 30 background items + 9 deferred items. The audit was written specifically to support restructuring readiness; the user explicitly noted prior navigation attempts "got bloated really quick due to broken inner discipline works."

`2026-05-11_13-30__explore_vs_navigation_overlap` introduced the load-bearing R2/R3 distinction: "Navigation" in the project covers TWO structurally different operations. **R2** is the existing `/navigation` discipline at `cognitive_harness/navigation/` — post-SIC route enumeration with the 16-type taxonomy and 12-field route-cards. **R3** is the north-star navigation vision at `devdocs/nav_north_star.md` — whole-codebase iterative mapping + directional local mapping, not yet implemented. The user's overlap concern with `/explore` concentrated in R3, not R2. R2 and `/explore` are "separate but mechanism-sharing"; R3 vs `/explore` is "specialization + composition" — R3 specializes `/explore` to codebase-as-work-direction-territory + adds an assess overlay. The "two navigations conflation" is the umbrella explanation for the puzzlement.

`2026-05-11_21-51__explore_navigation_atomic_decomposition` continued the structural-decomposition exercise; `2026-05-12_11-40__navigation_factoring_question` identified the load-bearing residual that survives in the canonical answer below — Adaptive Guidance, the prescriptive annotation layer that distinguishes navigation from any descriptive-annotation discipline.

`2026-05-12_16-59__navigation_requires_holistic_understanding` raised the holistic-understanding precondition; `2026-05-12_19-43__navigate_is_explore_with_destination_test` then tested the unification hypothesis explicitly. Iteration 1 of that finding committed a 4-operations error (later diagnosed in `2026-05-12_20-31__loop_diagnose__navigate_4_operations_error`); iteration 2 found that `/navigate` differs from `/explore` on only TWO structural axes — destination-bias and prescriptive annotation content type.

`2026-05-12_20-51__navigate_warrants_separate_discipline` — the verdict that survives — committed three grounds for separate-discipline status: (1) substantial /navigate-specific content (~240 lines, including the 16-type taxonomy, the 12-field route-card structure, and the prescriptive Adaptive Guidance section); (2) pedagogical clarity (a discrete named operation is easier to teach than "/explore in next-move mode with destination-bias and prescriptive annotation"); (3) discrete reference in project structure. The same finding also flagged the current spec as over-engineered (~490 lines, of which ~180 are structural-anatomy boilerplate) and recommended a REFINE-lean rewrite to ~280–330 lines that transcludes `/explore`'s mechanics by reference.

The Phase III capstone is `2026-05-14_00-01__verify_navigation_is_configured_explore`. The user had observed an in-conversation argument that "navigation is just /explore configured (paradigm = Navigational, viewpoint = egocentric, purpose = routing/decision)" — and chose to verify the hypothesis via `/MVL+` rather than accept it. The verification returned FALSE. **Four residuals** were named:

- **F1 — Adaptive guidance generation (load-bearing).** `/navigation` produces per-route prescriptive guidance pointers; `/explore`'s annotation layers are descriptive. This is the residual the prior factoring finding (May 12-11-40) identified as `/navigation`'s unique contribution beyond /explore-of-routes; the verification confirms it.
- **F2 — Reachability / gates check.** State-aware evaluation; `/explore` operates on territories, not state-transitions.
- **F4 — REVISIT sub-actions** (RESURRECT / INVALIDATE / REVERT). Cross-cycle awareness; `/explore` §3.5 explicitly assigns cross-invocation work to the runner.
- **F5 — Auto-derivable-vs-human-judgment type split.** Graduated-autonomy metadata; positions the discipline on the L0–L3 ladder; not a cognitive operation.

**Five reductions DO hold** and explain the partial overlap: scan-signal-probe over next-move-space (Enumerate); 16-type taxonomy as per-paradigm labeling; 4-category completeness; priority + confidence per route; route-card record format (partial reduction). These are real overlaps; they explain why the unification hypothesis was tempting.

The verification's meta-lesson, named in finding 58: **in-conversation argument is insufficient grounding for spec-level decisions; verify via `/MVL+` before accepting unification-of-disciplines hypotheses.** The user's verification-instinct caught what in-conversation reasoning would have committed.

### Phase IV — The mapping deepening + late audit (May 12–18)

May 12 evening: `2026-05-12_22-25__pre_mvl_mapping_or_explore_enhancement` raised the "mapping-or-explore-enhancement" question in a generic-not-discipline-specific framing — canonical-source content can be missed for any project entity, not just disciplines. The framing reset the question from "navigation vs explore" to "what's the right entity-analysis pattern."

#### The mapping deep dive — May 13 (three findings in one day)

**Finding 54** (`2026-05-13_07-16__is_mapping_required_core_of_explore`) — the first answer to "what is mapping?" It committed:
- YES, mapping IS the core of `/explore` at the level the user is asking.
- The answer hinges on **granularity**: at user-language grain, mapping IS the whole operation; at spec-internal grain, `/explore`'s spec distinguishes the verb form ("open-mode surfacing"), the noun output (the confidence-tagged map), and six mechanism components.
- `/explore` covers **7 observable types of mapping** (already in the spec but scattered): layout, concept, status, coverage/confidence, frontier, possibility, and a partly-excluded relational type (full relational meaning belongs to sensemaking per `/explore`'s NOT-list §1.3).
- The shippable answer is a small `/explore` spec refresh — the "Identity Refresh v1" — in three section edits.

**Finding 55** (`2026-05-13_12-15__what_is_mapping_meta_paradigms`) — the meta-paradigm framework. Five hours later the question deepened from "is mapping core" to "what IS mapping in general." The framework committed three layers:

- **Layer 1 — Minimum-core definition.** Mapping is a **purposive structure-preserving correspondence from a source to a target**, specified by which structural feature of the source is preserved, what target medium encodes it, what operation produces it, and what purpose it serves. This applies universally across paradigms and is stable across revisions.
- **Layer 2 — Four primary axes + eight secondary axes.** Primary: **what-preserved / how-encoded / what-operation / what-purpose**. Secondary: scope, reference-frame, meta-level, origin, output-form, temporality, fidelity, viewpoint.
- **Layer 3 — Twelve crystallized paradigms.** Recognizable clusters in the axis space, each grounded in established literature: Cartographic, Taxonomic, Relational, Functional, Embedding, Process/Behavioral, Constraint/Boundary, Possibility/Generative, Navigational, Coverage/Field, Reflexive/Self/Meta, Analogical/Cross-domain. **`/explore` produces 6 of the 12** — Cartographic, Taxonomic, Relational, Coverage, Constraint, Possibility. The other 6 (Functional, Embedding, Process/Behavioral, Navigational, Reflexive, Analogical) are scoped out by `/explore`'s NOT-list and belong to other disciplines or specializations.

The framework also committed a **classification with compositionality** rule: a reader places a new mapping by asking the four primary-axis questions in order; if the axes diverge, the mapping is the composition of the paradigms they point to.

Finding 55 declared its relationship to finding 54 as REFINES with "layer-shift" semantics — the prior's 7-kinds was preserved as a `/explore`-scoped projection of meta-paradigms.

**Finding 56** (`2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo`) — the CORRECTS-redo. The user directly corrected finding 55's layer-shift framing: *"i ddisagree, you shouldnt have preserve the prior understanding just for the sake of preserving it, it tried to understand mapping but it was wrong. redo this."* The redo finding makes two structural moves:

- The relationship-declaration in finding 55's frontmatter (refines → corrects). The original 7-kinds typology was not right-at-its-level but wrong-at-its-level — it claimed to be a typology of mapping kinds, but the enumeration was empirical (`/explore` observations) without structural grounding. Preserving it under layer-shift was the failure mode named in finding 55's OWN meta-lesson — and committed within the same artifact that introduced the lesson.
- The meta-lesson is **strengthened with an obligatory diagnostic** — a 3-question structural check before declaring REFINES: (1) Claim-truth test; (2) Level-coherence test; (3) External-citation test. Any NO answer → CORRECTS; any UNCLEAR answer → CORRECTS (default-to-CORRECTS rule). The bias is named — **preservation-for-preservation's-sake**. The meta-pattern is named — **lesson-introduces-its-own-trap**: a new vocabulary in a meta-lesson becomes a vector for the failure mode the lesson names.

The framework content of finding 55 (the minimum-core definition + axes + 12 paradigms + classification + revisability) is preserved unchanged; only the framing, the relationship-declaration, and the meta-lesson are revised. Finding 56 also CORRECTS finding 54's typology claim while preserving the 7 observations as DATA.

#### The late audit + naming + cascade — May 14–18

**Finding 58** is the verification-of-unification-hypothesis covered in Phase III above; chronologically it sits in this phase as the structural settlement of the unification debate.

**Finding 59** (`2026-05-16_15-18__name_for_navigation_discipline`) — the naming verdict. Recommendation: **rename `/navigation` → `/navigate`**. The one-letter change is structural, not cosmetic: it moves the discipline from the noun-form sibling cluster (`/sense-making`, `/td-critique`, `/meta-loop`) into the verb-form cluster (`/innovate`, `/explore`, `/decompose`, `/comprehend`, `/reflect` — five of eleven disciplines). It also pairs cleanly with the autonomy-ladder's role-noun "Navigator" via standard English verb→agent-noun derivation (navigate → Navigator, same shape as explore → Explorer). The alternative `/directions` won on precision-to-essence (the discipline's output unit is a route-card with a "Direction" field) but lost on cross-layer pairing.

**Finding 60** (`2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo`) — the diagnostic that cascaded into `/innovate`. The diagnostic traced WHY finding 55 missed the CORRECTS alternative: at the relationship-label piece, Innovation applied only Combination + Absence Recognition; Inversion was applied at a different piece (the classification-guidance piece). No Inversion-candidate was generated at the load-bearing piece; CORRECTS was therefore never produced as an alternative. The finding produced a **5-piece refinement set for `/innovate`** that introduces "meta-decision piece" criterion + a piece-level Inversion rule + an intervention-shape-axis Inversion + failure-mode-prevention refinements + telemetry extension. This refinement set later landed in `/innovate`'s current spec at `cognitive_harness/innovate/references/innovate.md` (the Piece-Level Inversion at Meta-Decision Pieces section).

### Open threads

Three threads are open at survey time. Each is presented descriptively, with a "what closure would look like" note for each. The survey does not recommend an order of pursuit.

#### Open Thread 1 — The `/navigate` rename

**Status:** recommended at finding 59 (May 16); not yet applied. The runtime spec still lives at `cognitive_harness/navigation/` (verified by `ls` at Surfacing time). The SKILL.md frontmatter still declares the skill name as `navigation`.

**What closure would look like:** the spec folder renamed to `cognitive_harness/navigate/`; SKILL.md `name:` field updated; cross-references in MVL+/MVL2+/meta-loop SKILL.md files updated; install scripts updated.

**What's at stake:** finding 59 estimated ~15 minutes of mechanical work + ongoing reduction of the verb/noun mismatch friction. The rename is fully reversible via git.

#### Open Thread 2 — The R3 north-star vision

**Status:** described at `devdocs/nav_north_star.md` and structurally analyzed at finding 46 (May 11) as a separate operation from R2; never implemented. The current `cognitive_harness/navigation/` IS R2.

**What closure would look like:** either a runtime spec is built for R3 (whole-codebase iterative mapping + directional local mapping) — likely as a separate command or a new protocol — OR the vision is explicitly retired with reasoning recorded.

**What's at stake:** finding 46 named "Hybrid" as a soft recommendation (technical home `/explore` + colloquial "navigation" naming preserved). The R3 vision is the most ambitious unfinished work in the navigation corpus.

#### Open Thread 3 — Mapping-spec-side action

**Status:** finding 56's framework (minimum-core definition + 4+8 axes + 12 paradigms) is committed as the canonical answer to "what is mapping?" Where this framework lives in `/explore`'s runtime spec is open. Finding 54's "Identity Refresh v1" proposed a small `/explore` spec refresh (three section edits); finding 55 added the `/explore` §1.7 framework-projection; finding 56 corrected the typology claim and preserved the framework content unchanged.

**What closure would look like:** the framework either committed as a section in `cognitive_harness/explore/references/explore.md` (or its institutional-memory file at `docs/discipline_design_history/for_explore.md`), OR a documented reason for not committing recorded.

**What's at stake:** the mapping framework is the corpus's best meta-level answer; deferring spec-side commitment risks future inquiries re-deriving it.

### Cross-discipline cascade observation

The navigation corpus produced an impact on `/innovate`'s spec through cascade-correction. The May 18 finding (`innovation_missed_corrects_on_mapping_redo`) diagnosed why the May 13 12-15 finding missed the CORRECTS alternative and produced a 5-piece refinement set for `/innovate`'s spec. The refinement is a structural addition (Piece-Level Inversion at Meta-Decision Pieces) that came out of a mapping-correction chain, not a direct edit of `/innovate` from a navigation finding.

This is a meta-pattern worth surfacing: corpus-level work on one discipline (navigation) can refine sibling disciplines (`/innovate`) through correction-chain diagnostics, without crossing the "disciplines self-contained" boundary. Whether this pattern generalizes (corpus of any discipline systematically cascades into refinements of sibling disciplines) is preserved as a research-frontier observation, not a verdict.

## Next Actions

This finding produces no MUST / COULD / DEFERRED items. The survey is descriptive by design. Open threads are named in §"Open threads" above; pursuing them is the user's decision.

## Reasoning

### Why a chronological 4-phase narrative

The corpus has natural settlement boundaries — April 28 (discipline framing); May 7 (stuck-point cluster end); May 14 (unification verdict); May 18 (cascade). Any other phase-count would split or merge a settlement boundary unnaturally. The 4 phases each contain at least one load-bearing settlement; the narrative arc is the connective tissue between settlements.

### Why a dedicated mapping deep-dive section

The user explicitly named mapping as the focus thread ("i think one of the last ones was about navigation should include mapping component or not, and what is mapping , this was what we were trying to solve to understand better"). Burying the May 13 three-finding sequence in the chronology would scatter the arc; a dedicated section gives the framework + the correction + the cascade their own narrative space.

### Why no recommendation

The user said "create a survey like report," not "recommend an action." The `_branch.md` Goal section's negative spec explicitly rules out "a survey that produces a NEW DESIGN for navigation." The survey is descriptive; the user uses it for calibration, then decides what to pursue.

### Why "stuck point" is concentrated in Group E

Group E has 5 LOOP_DIAGNOSE findings in 36 hours — the densest correction-chain cluster in the navigation corpus. Other LOOP_DIAGNOSE findings exist (May 12 `loop_diagnose__navigate_4_operations_error`; May 18 `loop_diagnose__innovation_missed_corrects_on_mapping_redo`) but neither forms a cluster. The Group E density is the structural signature of the project getting stuck on a single thread; calling it the stuck-point exemplar honors the user's "where we got stuck" framing.

### Why the cross-cascade observation is brief

The user did not name it. The observation is worth surfacing (the pattern is meta-level and could repeat), but not deep-diving (the user can request a follow-up inquiry if interested). Brief paragraph honors the descriptive constraint.

## Open Questions

### Monitoring

- **Will the past-memory stuck point (Group E) eventually be resolved in a later finding, or has the corpus moved on?** Observable if a future inquiry explicitly closes the past-navigation-memory question. The current spec has `navigator-prior-map-overlay.md` as a partial answer.

- **Will the `/navigate` rename happen?** Observable in the filesystem (folder rename, frontmatter update).

- **Will the mapping framework be committed to `/explore`'s spec or to `docs/discipline_design_history/for_explore.md`?** Observable when the canonical spec file is next edited.

### Blocked

- **The R3 north-star vision's implementation status** — blocked on a decision about whether to build it as a separate command or to retire the vision with reasoning recorded.

- **Whether the cross-discipline cascade pattern generalizes** — blocked on accumulating multiple cascade observations across disciplines (this is one data point; the pattern needs more evidence).

### Research Frontiers

- **Pass-rigor vs output-quality decoupling across discipline corpora.** This survey observed that the navigation corpus produced impacts on `/innovate`'s spec via cascade. Whether other corpus pairs (e.g., sensemaking ↔ innovate; explore ↔ decompose) show similar cross-discipline cascade patterns is open.

- **The R2/R3 distinction as a general structural device.** The corpus needed to name R2 and R3 to resolve the overlap puzzlement. Whether other disciplines have similar "two operations conflated under one name" structures is open.

### Refinement Triggers

- **Group E's stuck-point characterization re-opens** if a future finding closes the past-memory thread; the survey would then need updating to reflect the resolution.

- **Open Thread 2 (R3 north-star) re-opens** if the user commits a decision (build or retire); the survey's status note would need updating.

- **The mapping framework's commitment status re-opens** if the framework is committed to `/explore`'s spec; the survey would then need updating to reflect the landing.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
lets go and find all related to navigation in this codebase and create a survey like report, explaining how our understanding changed, what alternatives we considered, where we got stuck in general, 
i think one of the last ones was about navigation should include mapping componenet or not, and what is mapping , this was what we were trying to solve to understand better
```

</details>

## Appendix — Chronology table (all 68 surfaced items)

The full chronology table is preserved in this inquiry's `docarchive/surfacing.md` (after CONCLUDE). Each item carries date, slug, one-line description, thematic group (A–H, X-historical), and citation path. For the canonical list of 55 navigation-related inquiry folders, see `devdocs/inquiries/_archive/` (42 folders) and `devdocs/inquiries/` (13 folders, names matching `navigation` / `navigate` / `mapping`).
