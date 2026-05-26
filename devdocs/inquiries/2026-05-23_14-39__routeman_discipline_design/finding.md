---
status: active
model: claude-opus-4-7[1m]
effort: max
corrected_by: devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md
impacted_by:
  - devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md
  - devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md
  - devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md
  - devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md
  - devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md
---
# Finding: routeman — design of a renamed forward-Boundary discipline replacing /navigation

> **📌 Subsequent additions notice (applied 2026-05-24 00:20; source inquiry: `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md`)**
>
> The source inquiry adjudicated a set of design proposals about routeman's persistence-and-invocation model. Most of the proposals were resolved by adopting an existing project protocol — `cognitive_harness/protocols/multi_resolution_navigation.md` — that already specifies routeman's persistence ledger, the route-map content file, the parent-map/child-map two-level expansion, the resume semantics across invocations, and the frontier-candidate-record schema. **The adoption is surgical: this memo's core commitments are PRESERVED; the source adds a protocol dependency plus specific naming, placement, and boundary commitments that this memo did not previously commit.**
>
> **What this memo's reader should know:**
>
> - **A protocol adoption is now committed.** Routeman uses `cognitive_harness/protocols/multi_resolution_navigation.md`'s mechanism for persistence, recalibration, and parent/child map expansion. Routeman's runtime is now a CONSUMER of this protocol (in addition to being a consumer of the cycle's artifacts, per this memo's cycle-consumer layer). The protocol's `_frontier.md` + `navigation.md` files are renamed in routeman contexts to `_navig.md` + `routeman.md` with an alias note documented in the protocol's spec.
>
> - **The "two invocation modes" the source discusses (generic discovery vs directional/topic-scoped) ARE the staged-mapping adoption's two stages from `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md`'s Point 1.** No new modes are introduced. The new commitment is cross-invocation continuity (the persistence model) layered on top of the existing two stages, not a new way to invoke routeman.
>
> - **The 17/18-attribute schema (post-18-58) is EXTENDED to incorporate the protocol's frontier-candidate-record fields plus routeman-specific extensions.** The protocol contributes 13 base fields (candidate_id; parent_map; parent_route; route_type; priority; status; expansion_reason; eligibility; eligibility_reason; scheduling_reason; child_map_path; blocked_by; continuation_note). Routeman-specific extensions (versioning of `why_this_might_be_important`; `meta_reasoning_revision_history`; `mode_switch_log`; `routeman_invocation_id` for future multi-head attribution) are flagged at FF-2 in the source's open-frontiers list and tracked as new Question 12 in the frontier-questions finding at `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md`. The concrete final schema lives in the SKILL.md authoring inquiry; this memo's 17/18 schema is the routeman-output-shape baseline that gains the protocol's frontier-record fields when persisted.
>
> - **Feature F-seed (consume corpus-limit-seeds) is EXTENDED on its input-contract side.** The source explicitly extends F-seed's input contract to include `_navig.md` files from prior routeman invocations as a seed source on re-invocation (the persistence model's read of prior persistence is the natural seed for recalibration). The feature's substance and the corpus-limit-seeds dependency on /intuit Phase β+ are unchanged.
>
> - **Feature F-revisit (cross-cycle REVISIT with RESURRECT / INVALIDATE / REVERT sub-actions) is ADJACENT to but distinct from the protocol's recalibration semantics.** F-revisit operates on cycle output across cycles (the cycle-consumer relation); the protocol's recalibration operates on routeman's own outputs across invocations. The two mechanisms are compatible — F-revisit's verbs can be expressed via the protocol's status vocabulary (RESURRECT ↔ pending; INVALIDATE ↔ stale or superseded; REVERT ↔ revision of prior status) — but they target different state spaces. The memo's F-revisit semantics are preserved.
>
> - **A new structural boundary commitment with `cognitive_harness/protocols/branch_inquiry.md` is added: a two-tier policy.** Sub-route expansion within a route map uses `multi_resolution_navigation`'s child-map convention (sub-routes are route-map entries, not full SIC inquiries). Route-to-inquiry promotion (when a specific route is selected for deep investigation as its own SIC inquiry) uses `branch_inquiry.md`. The two-tier policy is a FORCED MOVE — `branch_inquiry.md`'s runner-contract requirement (it requires a discipline pipeline to run on the child) excludes it from sub-route use, where sub-routes don't have a runner. The precise threshold for promotion is open (the source's FF-1; tracked as new Question 11 in the frontier-questions finding).
>
> - **Placement is hybrid by invocation scope.** Inquiry-scoped invocations (e.g., "what's next for THIS inquiry's route map") place `_navig.md` + `routeman.md` in the inquiry folder. Project-scoped invocations (generating top-level directions across the codebase) place them at `devdocs/navigation/<run-id>/` per the protocol's central convention. The hybrid is non-removable; one-location designs were verified dominated.
>
> - **The 10 features are unaffected at the substance level.** F-seed gains a `_navig.md` input source (above); F-revisit is structurally compatible with protocol recalibration (above). The other 8 features (Enumerate; Type from 16-type taxonomy; Reachability-check; Generate adaptive guidance; Graduated-autonomy classification; Priority and confidence assessment; Mark Excluded; Emit telemetry) are unchanged.
>
> - **The 9-mode failure framework is unchanged.** The persistence model does not introduce a new LAYER-2 mode. The existing audit substrate (this memo's 3 LAYER-2 modes + the 2 added by 18-58 = 5 total LAYER-2 modes) is enriched by `_navig.md` as a cross-invocation audit trail, but the framework's mode count is unchanged.
>
> - **The 26 lineage decisions are unaffected.** Both the protocol adoption and the branch_inquiry boundary are NEW structural commitments beyond the lineage list (which was decisions inherited / dropped / refined / deferred from canonical /navigation, not from these protocols). The lineage list is preserved.
>
> - **The LLM-operational-characteristics-as-design-input principle (named for routeman by 18-58; deferred to research frontier pending N≥2) has its EVIDENCE THRESHOLD UPDATED.** The source's hybrid-naming decision (`_navig.md` + `routeman.md` preferred over protocol-native `_frontier.md` + `navigation.md`) is an explicit application of this principle to a NEW decision class (naming under user-language alignment, distinct from 18-58's two original applications — staged enumeration to mitigate under-enumeration and meta-reasoning to mitigate filler). The N=2 promotion threshold is now met if "naming alignment" and "enumeration shape" are accepted as two distinct application types. Promotion from "named for routeman" to project-canonical principle is open for the appropriate future inquiry.
>
> **What is NOT changed in this memo:** routeman's 3-layer identity (paradigm-instantiation as Navigational; prescriptive-extension via 4 residuals; cycle-consumer at the process layer) survives unchanged. The discipline category (forward-Boundary slot replacing /navigation) is unchanged. The category placement, the lineage decisions, the 6-attribute-group organization (the protocol's frontier-record fields layer onto this organization rather than reorganizing it), the 6 LAYER-1 + 3 LAYER-2 = 9 failure modes (5 LAYER-2 after 18-58's audit extension), and the 10 features all stand.
>
> **5 new frontier flags** from the source (FF-1 promotion threshold; FF-2 routeman-specific schema extensions; FF-3 `_navig.md` lifecycle policy; FF-4 cross-inquiry aggregation; FF-5 `_navig.md` ↔ `_state.md` relationship) plus 1 new research frontier (generalization of `_navig.md` to other disciplines) are retroactively added to the frontier-questions finding's curated list as new Questions 11-15 plus a new Research Frontier entry.
>
> For the full structural reasoning + the adoption spec sketch + the hybrid-naming decision rationale + the inherited-commitments re-test, consult the source inquiry's finding.

> **📌 Subsequent additions notice (applied 2026-05-23 20:10; source inquiry: `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md`)**
>
> Two adoptions were committed in the source inquiry that affect commitments in this design memo. **Both adoptions are surgical additions, not re-litigations of this memo's settled commitments** — but readers should be aware of the extensions when consulting the relevant sections below.
>
> **What this memo's reader should know:**
>
> - **The 16-attribute schema is EXTENDED to 17 (top-level Routes) and 18 (sub-routes).** Point 2 of the source adds one required attribute per Route (`why_this_might_be_important` — a meta-reasoning field) placed in the "Reasoning" group of the schema. Point 1 of the source adds one optional attribute (`Parent Route` reference) on sub-routes only, introduced by the staged route mapping pattern. The 6-group organization absorbs the new attribute: the "Reasoning" group expands from `{WHY}` to `{WHY, why_this_might_be_important}`. The other 5 attribute groups are unchanged.
> - **The 9-mode failure framework is EXTENDED via LAYER-2 scope extension.** The source's audit-routing adds two new identity-eroding modes to the LAYER-2 layer: **false depth** (stage-2 sub-routes whose only distinguishing content is positional, without structural distinction) and **filler meta-reasoning** (meta-reasoning field content that is generic rather than naming specific cycle-content signals). The 2-layer split structure is unchanged; the audit's operational design is frontier Q4's responsibility per the source.
> - **Endgame fit EF-1 is STRENGTHENED.** The source's Point 1 staging makes enumeration genuinely complete rather than LLM-shortcut-bounded; this strengthens the EF-1 claim (enumeration-first preserves multi-head compatibility). EF-2 and EF-3 are unaffected.
> - **The 10 features are unaffected at the substance level.** Staging is a procedural pattern operating on existing features; the meta-reasoning field is a new attribute existing features populate.
> - **The 26 lineage decisions are unaffected.** Both source adoptions are extensions to the discipline beyond the lineage list.
> - **A new design principle is named for routeman: LLM-operational-characteristics-as-design-input.** The principle's pattern-portability to other disciplines is deferred to research frontier (N≥2 gate). When reading this memo, the principle frames why routeman is designed AROUND known LLM operational limits rather than as if the LLM were idealized.
> - **A 4-axis content distinction** is documented in the source for the route-card schema, distinguishing the new meta-reasoning field from the existing object-level fields (Purpose, WHY, Continuation Note). See the source finding for the canonical table; consult it when populating or reading route-card fields.
>
> **What is NOT changed in this memo:** routeman's 3-layer identity (paradigm-instantiation, prescriptive-extension, cycle-consumer) survives unchanged. The discipline category (forward-Boundary slot replacing /navigation) is unchanged. The lineage decisions, the existing 6-attribute-group organization, the 6 LAYER-1 failure modes, and the 3 LAYER-2 modes from this memo all stand.
>
> For full structural reasoning + the per-proposal recommendation memo + the 4-axis content distinction table + the sequencing recommendation, consult the source inquiry's finding.

> **⚠️ Correction notice (applied 2026-05-23 17:25 in-place; correction inquiry: `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md`)**
>
> A surgical CORRECTS has been applied to **the cycle-consumer process-layer operational sub-claim only**. The original wording described routeman as "consuming the cycle's aggregated output as input" — language that implied in-context data passing. The actual architecture (per user pushback): routeman runs in an **isolated session** that **scans worker-produced inquiry-folder artifacts** when prompted. The consumer relation is preserved structurally; the layer name "cycle-consumer" is preserved; only the operational shape is corrected.
>
> **What changed in this file:**
> - The identity sentence (in Finding Summary's first bullet AND in §2 below) — `"the cycle's aggregated output"` → `"the cycle's artifacts (scanned from inquiry-folder files by routeman in its isolated session)"`. Two-noun-phrase surgical revision; all other clauses preserved.
> - §2's "The cycle-consumer process layer" paragraph — replaced with the corrected paragraph (file-system-mediated scanning + isolated session + parallel workers + singleton navigator + 3 design rationales). The original wording is preserved at the end of this notice for traceability.
>
> **What is NOT changed:**
> - Identity at paradigm-instantiation level (Navigational paradigm) — unchanged.
> - Identity at prescriptive-extension level (4 residuals as structural commitments) — unchanged.
> - The "cycle-consumer" layer name — preserved (consumer relation is structural-level; operational shape is what was corrected).
> - Endgame fit (EF-1 strengthened by correction; EF-2, EF-3 unchanged).
> - Features (substance unchanged; operational descriptions shift to file-mediated mechanisms per the correction finding's Tier III).
> - Attribute schema (16 fields unchanged).
> - Failure framework + most lineage decisions + category placement — all unchanged.
>
> **Downstream impact on the follow-up frontier-questions finding** (`devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md`): Q4 (multi-head handoff), Q5 (runner-discipline contract), Q6 (cycle-output shape constraints) need substantive re-statement; Q11 (Continuation Note cross-inquiry persistence) is demoted out of frontier status; Q1, Q3 need minor re-statement. See the correction finding's 4-tier impact list for full details.
>
> **Original wording preserved for traceability (the text being corrected):**
> - Original identity sentence noun phrase: `"the cycle's aggregated output"`.
> - Original §2 process-layer paragraph: "Routeman operates downstream of a completed cognitive cycle, consuming the cycle's aggregated output as input: the candidate verdicts from /td-critique, frontier questions from all upstream disciplines, telemetry from those disciplines, scope-check results, the original question and goal, and the /reflect observations when /reflect ran before routeman. This input-dependency is structural, per the territory-dependency-recheck finding at `devdocs/inquiries/2026-05-23_11-30__navigation_surfacing_territory_dependency_recheck/finding.md`: depending on someone's output does not make routeman a configuration of any single upstream discipline; it makes routeman a consumer."

## Question

(from `_branch.md`)

The user proposed a new discipline named `routeman` whose stated job is "listing all possible next moves we can do, together with some movement types." The proposal's motivation: the corpus baggage attached to the word "navigation" is contaminating reasoning about the discipline, and a clean-slate name would let the agent reason about the discipline without being anchored by prior versions. The user asked the inquiry to discuss how routeman fits the project's endgoal, what features it should have, and what attributes it should have, with permission to borrow from canonical navigation when canon.

**Goal.** A discipline-design memo committing to (a) a one-sentence identity statement, (b) endgame-fit reasoning, (c) a features list (operations the discipline performs), (d) an attributes list (the output schema's fields and structure), (e) explicit borrow/drop decisions against the existing canonical /navigation spec at `cognitive_harness/navigation/references/navigation.md`. The deliverable is intended as the basis for a follow-up that authors `cognitive_harness/routeman/SKILL.md` without re-running this inquiry.

The inquiry operates at the MEANING layer (what routeman IS as a cognitive operation), not the structural layer (what its spec file looks like) or the process layer (what runtime steps it runs). Those layers are explicit follow-up work.

## Finding Summary

- **Routeman is the cycle-consumer cognitive discipline that enumerates all possible next moves available after a completed cognitive cycle, producing each move as a typed, prescriptive route-card whose movement type, reachability state, and graduated-autonomy classification are derived from the cycle's artifacts (scanned from inquiry-folder files by routeman in its isolated session) and the project's current autonomy level.** *[CORRECTED 2026-05-23 — noun phrase surgically revised per correction notice above; consumer relation preserved.]* This is the one-sentence MEANING-layer identity statement. The rename from /navigation to routeman is **structural-not-cosmetic**: under the strengthened diagnostic from the mapping-framework finding at `devdocs/inquiries/_archive/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md`, naming a new discipline forces per-sub-claim re-test of the old discipline's commitments. A purely cosmetic rename would not solve the corpus-baggage problem (because corpus retrieval is a structural mechanism, not a naming-superficial one); the new name confers value only when paired with per-component structural-distinction criteria.

- **Routeman has three load-bearing structural layers of identity, each anchored externally.** (i) Paradigm-instantiation: Navigational, per the 12-paradigm mapping framework at `devdocs/inquiries/_archive/2026-05-13_12-45.../finding.md`. (ii) Prescriptive-extension: four residuals beyond mere paradigm-membership — adaptive guidance (prescriptive content), reachability/gates (state-evaluation), REVISIT sub-actions (cross-cycle awareness), and the auto-vs-judgment split (graduated-autonomy metadata) — all four anchored in the verification finding at `devdocs/inquiries/_archive/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md`. (iii) Cycle-consumer process position, anchored in the territory-dependency recheck at `devdocs/inquiries/2026-05-23_11-30__navigation_surfacing_territory_dependency_recheck/finding.md`. Removing any of these three layers collapses routeman's separable identity.

- **Routeman occupies the forward-Boundary slot in the 4-category discipline taxonomy at `docs/discipline_taxonomy.md`, replacing /navigation.** The Boundary category is 2-member-saturated (reflect operates backward; navigation operates forward) with admission rule "new temporal direction or it's not Boundary." Routeman cannot be a third Boundary; it must fill the existing forward-Boundary slot. The reflect-routeman pairing (the canonical R-then-N flow before selection) is preserved.

- **Routeman's endgame fit has three documented functions, of which two are load-bearing and one is candidate-load-bearing pending validation.** The first (enumeration-first preserves multi-head compatibility) is load-bearing per the project's end-goal-loop-architecture: multi-head architecture consumes enumerations because each parallel head picks its own direction; selection-first specs become awkward under multi-head, while routeman's "enumerate all possible" verb preserves multi-head compatibility. The second (auto-vs-judgment split provides L0-L4 positioning on the autonomy ladder) is load-bearing per the autonomy-ladder description in `docs/desc.md`: routeman's 12-auto-derivable / 4-human-judgment partition is the ladder anchor. The third (rename-as-design-act demonstrates a corpus-hygiene autonomy capability) is **candidate-load-bearing pending N≥2 validation**: this inquiry is the first instance of the methodology; a second discipline-rename would validate pattern-portability before promotion.

- **Lineage from canonical /navigation is per-component, applying the strengthened diagnostic per sub-claim rather than per composite.** Of the 26 lineage decisions: 14 inherit (the 5 reductions plus the 4 residuals plus 5 supporting structures — failure-mode modes, reflect-routeman pairing, three invocation contexts, corpus-limit-seeds input extension, and the telemetry skeleton — all canon-validated by the navigation-vs-explore-configured verification finding); 5 drop (three runner-level mis-attributions identified by that same verification finding, the "one structural operation: Enumeration" framing acknowledged there as oversimplified, and the wayfinding absorption narrative which is history not load-bearing); 3 refine (the route-card wrapper terminology shifts from "Navigation Map" to "Route Map" and from "Navigation Item" to "Route"; the failure-mode framework refines from canonical /navigation's flat 6-mode list to a 2-layer split modeled on /surfacing's framework; AND a new explicit "Discipline Contract" section is extracted from canonical /navigation's currently-scattered input/output/invariant content, contributed by this inquiry's Innovation step); 4 deferred (the discipline's primitive composition, the reflect coupling contract, an input-contract fail-safe, and an audit of the non-active archival reasoning — each with a specific revival trigger).

- **Routeman has ten cognitive features, each derived from the identity statement or inherited canon.** The ten: Enumerate the next-move-space; Type each move from the 16-type movement-type taxonomy; Reachability-check each move (state-aware gate evaluation); Generate adaptive guidance per move (prescriptive); Cross-cycle REVISIT (RESURRECT / INVALIDATE / REVERT sub-actions); Apply graduated-autonomy classification (auto-vs-judgment partition); Assess priority and confidence per move; Mark structurally-inapplicable types as Excluded (with reasoning, not silently filtered); Emit telemetry on enumeration quality; Consume corpus-limit-seeds from the /intuit discipline when its Phase β+ ships (anticipatory feature, anchored in the discipline-taxonomy's existing Boundary-discipline-notes section).

- **Routeman's output schema has 16 attributes — 12 per-Route fields organized into 6 purpose-groups, plus 4 Route-Map-wrapper fields.** The per-Route fields are organized as: Route Identity (Direction, Goal, Movement Type); Route State (Priority, Status, Blocked By); Route Meaning (Purpose, Movement, Unlocks); Reasoning (WHY); Adaptive Guidance (Guidance Mode + Guidance Pointers); Continuation Memory (Continuation Note). The 12 per-Route fields inherit verbatim from canonical /navigation's existing route-card schema; the 6-group organization makes the canonical-but-implicit structure explicit. The 4 wrapper fields: a header counting Routes and HIGH-priority Routes; an optional Route Index table (included when Route count exceeds 10); an Excluded section listing structurally-inapplicable types with reasoning; a telemetry block (10 metrics).

- **Routeman's failure-mode framework has nine modes in a two-layer split.** Six modes inherited verbatim from canonical /navigation (Premature Filtering, Recency Bias, Action Bias, Enumeration Without Reasoning, Route State Omission, Scope Fixation) all populate the operational layer (Layer-1: detectable via output observation; recoverable via re-invocation). Three modes added specifically for routeman populate the identity-eroding layer (Layer-2: detectable via behavioral audit over time; erode the discipline's intrinsic character): "Rename-Renders-Itself-Cosmetic" (routeman's outputs lack the prescriptive layer for 50%+ of routes across 5 consecutive invocations, or routeman's route-cards collapse to descriptive-only labeling form — audit is absolute against routeman's own identity-statement, not differential against /navigation); "Prescriptive-Without-Cycle-Context" (routeman emits adaptive guidance without sufficient cycle context, producing pointers without anchored WHYs); "Auto-vs-Judgment Calibration Drift" (the 12/4 split is no longer calibrated to the project's autonomy level, with humans handling types the system should now handle, or system attempting judgment-required types prematurely).

- **The inquiry produces seven consequence-paths the user can take next.** Authoring the discipline's runtime spec at `cognitive_harness/routeman/SKILL.md`; specifying the runtime sequencing of the ten features; committing the primitive composition by loading the typed-primitive set at `docs/thinking_space_dynamics.md`; specifying the reflect-routeman coupling contract by loading the /reflect spec; updating the runners (/MVL and /MVLw) plus install scripts (`install_for_claude.sh` and `install_for_codex.sh`) to reference /routeman in place of /navigation; archiving the canonical /navigation directory to `cognitive_harness/non-active/`; and (a research frontier, not a path) testing pattern-portability of the rename-as-design-act methodology when a second discipline-rename is proposed.

## Finding

### Surrounding context (why we are even discussing this)

The project (an evolving thinking-engine under `cognitive_harness/`) contains a set of disciplines invoked as slash-commands during inquiries: /surfacing, /sense-making, /decompose, /innovate, /td-critique (the core cognitive operations), /reflect and /navigation (the two boundary disciplines that operate between cycles), and /intuit (the cross-cutting predictive-RC discipline). Over time, prior inquiries about /navigation accumulated a substantial corpus of findings, partial designs, and definitional attempts. When agents reason about /navigation today, they retrieve material from that prior corpus, and some of it carries framings or commitments that have since been corrected (for example, the "one structural operation: Enumeration" self-description was acknowledged as oversimplified in the verification finding at `devdocs/inquiries/_archive/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md`, and the "/navigate is just /explore configured" hypothesis was rejected there too). The user observes that this corpus baggage limits what new reasoning about the discipline can achieve: the agent keeps being anchored by old versions.

The user's proposed response: rename the discipline to escape the corpus-baggage problem. A new name (`routeman` — "route" + the active-operator suffix "-man") signals a clean slate; the agent reasoning about routeman is not (or less) anchored by prior /navigation material.

The inquiry's job is to test whether the rename is purely cosmetic (just a label swap) or structural (carrying new commitments), and either way produce a design memo sufficient for the follow-up that will author routeman's runtime spec. The Layer Commitment is MEANING: settle what routeman IS as a cognitive operation; the structural-layer artifact (the SKILL.md file) and the process-layer sequence (the runtime step ordering) follow from the meaning settled here.

### 1. The rename is structural-not-cosmetic, and that distinction is load-bearing

A cosmetic rename would substitute a new label for the old discipline while preserving the underlying spec content verbatim. A structural rename produces a discipline whose identity, lineage decisions, and design components are derived independently of the original spec's content, with explicit per-component criteria for what carries forward and what doesn't.

The corpus-baggage problem the user identified is itself a structural mechanism, not a cosmetic one. When an agent retrieves prior /navigation material, it does so on the basis of content similarity (e.g., "navigation," "next moves," "16 types," "adaptive guidance"), not on the basis of the label "/navigation" alone. A purely cosmetic rename (where routeman's spec content reproduces /navigation's content under a different label) would not solve the corpus-baggage problem; the agent would still retrieve the old material on content-similarity grounds. The rename's value depends on routeman's spec being structurally distinguishable from /navigation's — different commitments, different framings, different organization where appropriate.

The strengthened diagnostic from the mapping-framework finding at `devdocs/inquiries/_archive/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md` provides the per-component test: for each commitment carried forward from /navigation to routeman, three questions must hold (the commitment is true at its claimed level; the claimed level is coherent; the commitment survives external citation). Any NO defaults to a CORRECTS-equivalent — drop or refine the component. The diagnostic is applied per sub-claim, not per composite, per the recent territory-dependency-recheck finding at `devdocs/inquiries/2026-05-23_11-30__navigation_surfacing_territory_dependency_recheck/finding.md` which surfaced the abstraction-level-conflation meta-pattern.

This per-component, diagnostic-grounded approach is what makes the rename structural. The deliverable here is not "routeman is /navigation with a different label" but "routeman is a discipline whose specific identity, features, attributes, lineage decisions, and failure-mode framework are each derivable from the discipline's identity statement and traceable to specific anchors in prior findings or canonical content."

### 2. Routeman's identity at meaning layer (the one-sentence statement)

The identity statement *[noun phrase corrected 2026-05-23; see correction notice above]*:

> **Routeman is the cycle-consumer cognitive discipline that enumerates all possible next moves available after a completed cognitive cycle, producing each move as a typed, prescriptive route-card whose movement type, reachability state, and graduated-autonomy classification are derived from the cycle's artifacts (scanned from inquiry-folder files by routeman in its isolated session) and the project's current autonomy level.**

Three structural layers are committed by the sentence:

**The paradigm-instantiation layer.** Routeman instantiates the **Navigational paradigm** from the 12-paradigm mapping framework at `devdocs/inquiries/_archive/2026-05-13_12-45.../finding.md`. The Navigational paradigm preserves route structure from a viewpoint (literature: navigation systems, route planning, planning trees). Routeman's "enumerates all possible next moves from the current position" maps directly to the paradigm's preservation commitment. Routeman is permitted (per the framework's compositionality rule) to compose with the Possibility paradigm when its enumeration includes generative-rule construction of next moves (e.g., when no prior cycle-output names a next move directly and a candidate is generated from rules); the primary instantiation remains Navigational.

**The prescriptive-extension layer.** Routeman has four load-bearing residuals that exceed pure paradigm-membership, all anchored in the verification finding at `devdocs/inquiries/_archive/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md`:

- *Adaptive guidance* (prescriptive content). Routeman produces per-route prescriptive guidance pointers with adaptive guidance modes (none / compact / full / expand-on-selection) and continuation notes. Each pointer is a short, actionable recommendation ("Check against actual SIC/MVL runs", "Try domain transfer from manufacturing", "Watch for the trap where X masks Y"); each pointer carries its own WHY (the per-pointer reason — "bc real usage is the only valid test of completeness"). The **mode** controls how much guidance a particular route gets, scaling effort to the route's importance rather than producing uniform fluff or uniform overhead. The four modes:

  - **`none`** — zero pointers. The route's WHY field (why it's in the map) and the Continuation Note (what a future warm-up should remember about it) are sufficient. Used for LOW-priority routes or deferred routes preserved for memory but not in active consideration.
  - **`compact`** — 1-2 short pointers, each with a one-line WHY. The **default** for most routes. Enough to orient a future executor without overloading the map.
  - **`full`** — 3-5 pointers with more developed WHYs. Used when stakes are high enough that detailed hints earn their keep: HIGH-priority routes; blocked routes (the reader needs to know what would unblock them); risky routes (the reader needs to know what to watch for); near-action routes (the executor is about to do something and wants the field guide); the route actually selected for execution.
  - **`expand-on-selection`** — guidance is *deferred*. The route carries a one-line statement of what would be expanded if selected; the detailed pointers are produced on demand when (and only if) the route is picked. Used when guidance is expensive to produce and we don't yet know which routes the selector or the runner will choose.

  The typical mode-allocation convention (inherited from canonical /navigation): HIGH-priority / risky / blocked / near-action routes get `compact` or `full`; MEDIUM open/deferred routes get `compact`; LOW or deferred-for-memory routes get `none` or `compact`; the selected route gets `full` or `expand-on-selection`.

  The modes exist because routes warrant different amounts of attention. Without mode-scaling, the spec either pays full-guidance cost on every route (wasteful; forces fluff into low-stakes routes) or produces no guidance anywhere (collapsing to descriptive labeling). The modes are the calibration mechanism that keeps the prescriptive layer load-bearing without becoming overhead.

  This distinguishes routeman from descriptive-labeling siblings like /surfacing: descriptive labels say "here is what's there"; prescriptive guidance says "if you take this route, attend to X." Removing the prescriptive layer would collapse routeman to /surfacing-of-the-next-move-space — losing the discipline's separable identity.
- *Reachability and gates check.* Routeman evaluates whether each enumerated move is accessible from the current state and which are gated behind prerequisites; a gate has three parts (blocked region, condition, current state). This is state-evaluation, not territory-surfacing.
- *REVISIT sub-actions* (RESURRECT / INVALIDATE / REVERT). Cross-cycle awareness: a prior cycle's killed idea may become viable under new info (resurrect); a prior cycle's surviving idea may become dead (invalidate); a prior cycle's refinement may need reversion (revert).
- *Auto-vs-judgment classification.* Routeman partitions its 16 movement-types into 12 the discipline auto-derives from cycle output and 4 the human (or, at higher autonomy levels, the system itself) handles via judgment. This is graduated-autonomy positioning.

**The cycle-consumer process layer.** *[CORRECTED 2026-05-23 — paragraph replaced per correction notice above; original wording preserved at the top of this file for traceability.]* Routeman's cycle-consumer process layer is realized as file-system-mediated scanning. Routeman runs in an **isolated session**, separate from worker sessions where MVL pipelines execute and produce inquiry-folder artifacts. When prompted, routeman scans newly-written inquiry artifacts (the cycle's discipline outputs, telemetry, /reflect observations when present, and the inquiry's question + goal context) to reconstruct what happened in the cycles it enumerates next moves for. Three structural rationales motivate the architecture: **(a)** routeman's context stays bounded — it does not accumulate worker cycle outputs across iterations, preserving routeman's effective context budget across many cycles; **(b)** parallel workers can run multi-head while routeman remains the singleton main navigator, instantiating the multi-head loop architecture committed in the project's `project_end_goal_loop_architecture` memory and supporting Level 3+ autonomy capabilities per `docs/desc.md`; **(c)** the file-mediated pattern instantiates the existing project-canonical mechanism — `/MVL2+ [inquiry_path]/` reads `_state.md` to resume work across sessions; the cognitive_fixes Source Input section preserves raw input in a file region for future agents to read; the corrected routeman architecture applies the same pattern at the discipline level. The consumer relation (routeman depends on cycle output) is preserved structurally, per the territory-dependency-recheck finding at `devdocs/inquiries/2026-05-23_11-30__navigation_surfacing_territory_dependency_recheck/finding.md` — depending on someone's output does not make routeman a configuration of any single upstream discipline; it makes routeman a consumer. The operational shape of consumption is file-scanning, not in-context data passing.

The identity sentence is denser than ordinary prose because each clause encodes a structural commitment with an external anchor. Less density would either drop a load-bearing commitment (producing structural ambiguity at the boundary with neighboring disciplines, particularly /surfacing) or convert structural commitments into vague handwaving. The /surfacing discipline's own identity sentence (defined in `cognitive_harness/surfacing/references/surfacing.md`) carries similar density for the same reason: discipline identity sentences in this project encode commitments, not summaries.

### 3. Category placement: forward-Boundary slot, replacing /navigation

The 4-category discipline taxonomy at `docs/discipline_taxonomy.md` places disciplines into Core (the pipeline-sequential SIC-loop members), Cross-cutting (always-available infrastructure like /intuit), Boundary (between-cycle disciplines: /reflect operating backward, /navigation operating forward), and Situational (on-demand specialized disciplines). The Boundary category is 2-member-saturated with an explicit admission rule: a candidate for a third Boundary discipline would need a new temporal direction (neither backward nor forward) to be structurally justified; otherwise adding a third member would manufacture a gap.

Routeman occupies the existing forward-Boundary slot by replacing /navigation in that slot. This is not "adding a third Boundary"; it is "renaming the discipline that fills the forward-Boundary position." The reflect-routeman pairing (the canonical between-cycle sequence: /reflect operates first to observe what the just-completed cycle's process was like; routeman operates second to enumerate what could come next; then selection — by human at lower autonomy levels, by the system at higher levels — picks the direction) preserves the pattern that the canonical /navigation spec's "Relationship to Other Disciplines" section names.

### 4. Endgame fit: three functions, two load-bearing and one candidate-load-bearing

The project's endgame is the autonomous-consciousness goal described in `docs/desc.md`: a cognitive system progressively building its own consciousness layer, with the human's role monotonically decreasing across the 5-level autonomy ladder, and a Baldwin-cycle mechanism (predict at T0, calibrate against retrospective outcomes at T2+, refine specs on the delta) driving self-improvement. Routeman serves the endgame in three documented ways.

**The first endgame function (load-bearing): enumeration-first preserves multi-head compatibility.** The end-goal-loop-architecture trajectory (recorded in this project's persistent memory and referenced in the territory-dependency-recheck finding) commits to multi-head loops: parallel cognitive cycles that each pick their own next direction from a shared enumeration of possibilities. Selection-first specs (where the discipline produces a single recommended direction) become awkward under multi-head because each head needs its own choice. Routeman's "enumerate all possible next moves" verb preserves multi-head compatibility because enumerations are exactly the input shape multi-head consumes. The discipline's enumeration-first commitment is not inertia from /navigation; it is endgame-aligned design.

**The second endgame function (load-bearing): the auto-vs-judgment split provides L0-L4 positioning on the autonomy ladder.** Routeman's 16 movement-types are partitioned into 12 auto-derivable (from cycle output + telemetry + scope check) and 4 requiring human judgment (the types named REFRAME, REVISIT, DIFFERENT APPROACH, CONSOLIDATE in canonical /navigation, inherited verbatim by routeman). At autonomy Level 0 the human handles all 4 judgment types and reviews the 12 auto types. As autonomy advances (Levels 1, 2, 3, 4), the system handles progressively more of the partition. The split itself is fixed at design time; the threshold for what counts as "judgment-required at the project's current autonomy level" shifts with phase. This makes routeman directly the position on the autonomy ladder.

**The third endgame function (candidate-load-bearing, pending validation): the rename-as-design-act demonstrates a corpus-hygiene autonomy capability.** This function was coined during this inquiry; its status as load-bearing is contingent on external validation. The structural anchor: `docs/desc.md` describes "spontaneous attention" as one of six observable indicators of the system's emerging consciousness layer, defined as "noticing what should change unprompted." The system noticing that its own corpus has accumulated stale references and that a discipline rename with structural grounding is the structurally sound response is one concrete instance of spontaneous attention applied to the project's own corpus. The rename-as-design-act methodology — declare the rename, apply the strengthened diagnostic per component to decide what carries forward, write a new design memo independent of the old spec's language, then archive the old material — is what this inquiry exercises.

The corpus-hygiene function is **candidate-load-bearing pending N≥2 validation**: this inquiry is the first instance of the methodology. The risk is self-reference — coining a vocabulary that justifies the framing that introduces the vocabulary is exactly the "lesson-introduces-its-own-trap" meta-pattern named in the mapping-framework finding at `devdocs/inquiries/_archive/2026-05-13_12-45.../finding.md`. The diagnostic catches this risk explicitly. The promotion test: when a second discipline-rename is proposed (the user implied other instances exist when they said "one of them is about navigation"), apply the same methodology; if the methodology applies cleanly to the second case as well, corpus-hygiene-as-design-act earns load-bearing status with N=2 external grounding. Until then, the function is preserved as observation but not relied on for downstream commitments. If validation fails, the endgame story degrades gracefully to the two load-bearing functions (enumeration-first + autonomy-ladder positioning) without structural disruption.

### 5. Lineage from canonical /navigation: 26 per-component decisions

The lineage decisions adjudicate, per component of canonical /navigation's spec, whether that component carries forward to routeman (and how). The total: 14 inherit, 5 drop, 3 refine, 4 defer = 26 decisions. Each decision was tested against the strengthened diagnostic per sub-claim. The list:

**Inherited verbatim (14 components):**

- The Enumerate operation (scan-signal-probe over the next-move-space).
- The 16-type movement-type taxonomy organized into three categories (content-directed acting on what the cycle produced; process-directed acting on how the cycle ran; context-directed acting on information outside this cycle). *[2026-05-24: this canonical 3-category framing was made explicit and given action-noun names in `devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md` as the "Movement Family" axis — content-directed → **Progression Moves** (6 types: forward; advancing the work); process-directed → **Re-orientation Moves** (5 types: adjusting how/where work proceeds); context-directed → **Coordination Moves** (5 types: cross-cycle / cross-branch / validate / consolidate). The 3-category structure was already in canonical /navigation; the categorization inquiry surfaced + named it + added 6 secondary attributes per type for multi-axis richness.]*
- The 4-category completeness check that ensures each category is considered.
- The Priority (HIGH / MEDIUM / LOW) and per-route confidence labeling.
- The 12-field route-card record format (Direction, Goal, Type, Priority, Status, Blocked By, Purpose, Movement, Unlocks, WHY, Guidance Mode, Continuation Note).
- The adaptive guidance generation (the prescriptive layer that is routeman's load-bearing residual).
- The reachability / gates check (the state-evaluation residual).
- The REVISIT sub-actions (the cross-cycle awareness residual).
- The auto-vs-judgment split (the graduated-autonomy residual).
- The six failure modes that populate the operational layer of routeman's two-layer failure framework (Premature Filtering, Recency Bias, Action Bias, Enumeration Without Reasoning, Route State Omission, Scope Fixation).
- The reflect-routeman boundary-discipline pairing (reflect runs first, looking backward at process quality; routeman runs second, looking forward at next directions; their outputs feed selection by human or system).
- The three invocation contexts (after a completed cognitive cycle; independently when the user wants to see options without running a cycle first; between branches when multi-head execution is partially complete and re-evaluation is needed).
- The corpus-limit-seeds input-contract extension from the /intuit discipline's Phase β+ output, anchored in the discipline-taxonomy's existing Boundary-discipline-notes section.
- The telemetry skeleton (per-invocation metrics: type coverage, category balance, route coverage, guidance allocation, modes used, route-state completeness, blocked-route visibility, excluded reasoning).

**Dropped (5 components):**

- The freshness preflight (a check at canonical /navigation's Step 0 classifying the input into fresh / refresh-needed / full-warmup-needed categories). This is orchestration — deciding whether the discipline has the context it needs to run — and belongs to the runner, not the discipline. The verification finding at `devdocs/inquiries/_archive/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md` identified this as a runner-level mis-attribution absorbed into canonical /navigation's spec.
- The stall-signal detection trigger for the DIAGNOSE movement-type (the cross-iteration logic identifying when sensemaking-stall signals fire). The DIAGNOSE type itself stays in routeman's 16-type taxonomy; the trigger detection is cross-iteration awareness that belongs to the runner. Same source: the verification finding.
- The boundary discipline positioning self-description ("operates BETWEEN cycles, not within them"). The when-routeman-fires is the runner's call, not the discipline's. Same source.
- The "one structural operation: Enumeration" framing from canonical /navigation's "What Navigation Is" section. The verification finding flagged this as oversimplified: the canonical spec contains multi-operation content (Enumerate plus the four prescriptive-extension residuals) under that label. Routeman's identity sentence names the operations honestly.
- The /wayfinding absorption narrative (canonical /navigation contains a section explaining that the discipline absorbed an earlier /wayfinding discipline when /wayfinding's single-direction-selection framing was identified as a single-head architectural artifact incompatible with multi-head). This is history; it grounded the rename-must-be-structural precedent for this inquiry but doesn't need to ship in routeman's spec.

**Refined (3 components):**

- The route-card wrapper terminology. The 12 fields themselves inherit verbatim; the wrapper-level naming shifts: "Navigation Map" becomes "Route Map"; "Navigation Item" becomes "Route." This aligns with routeman's name (the "route" prefix) and the user's framing ("movement types"). The shift is wrapper-only; field semantics unchanged.
- The failure-mode framework. Canonical /navigation has a flat 6-mode list; routeman refines this to a two-layer split (operational layer for modes detectable via output observation and recoverable via re-invocation; identity-eroding layer for modes detectable via behavioral audit over time and not simply recoverable). The 2-layer architecture is modeled on the /surfacing discipline's failure-mode framework at `cognitive_harness/surfacing/references/surfacing.md`. The 6 canonical modes redistribute (all into the operational layer); 3 new modes specific to routeman populate the identity-eroding layer (described in section 7 below).
- An explicit Discipline Contract section. Canonical /navigation has the discipline's contract scattered across multiple sections ("The Transform" describes input and output; "When to Navigate" describes invocation triggers; "Reachability check" describes a state-evaluation invariant). Routeman's spec (in the follow-up structural-layer inquiry) will collect this content into a single explicit "Discipline Contract" section stating input contract, output contract, and invariants. This makes the implicit contract explicit, which is structurally cleaner. The refinement was contributed by this inquiry's Innovation step via convergence of two mechanisms (domain-transfer from software spec-evolution practices, which favor explicit contracts; and absence-recognition at the redesign level, which surfaced that the contract content is present in canonical /navigation but scattered).

**Deferred (4 components, each with a revival trigger):**

- The primitive composition (which of the project's 11 typed primitives from `docs/thinking_space_dynamics.md` are load-bearing for routeman; which are secondary; which are deliberately absent). Canonical /navigation has a primitive profile in `docs/discipline_taxonomy.md`'s summary table (load-bearing: Simulation + Evaluation + Intuition-similarity; secondary: Working Memory + Metacognition; deliberately absent: Inhibition). Whether routeman's profile differs requires loading the primitive set and adjudicating per-primitive. Revival trigger: when the structural-layer follow-up authors `cognitive_harness/routeman/SKILL.md` and the primitive profile is needed.
- The reflect-routeman coupling contract. The reflect discipline at `cognitive_harness/reflect/` (or wherever the spec is located) describes the R→N flow only partially from /navigation's side; the full coupling needs the reflect spec loaded. Revival trigger: when the follow-up structural-layer inquiry needs to specify the coupling.
- The cognitive-fixes-style input-contract fail-safe. The `cognitive_harness/cognitive_fixes/` folder contains a "Vague Instruction Decomposition" methodology (a five-meta-category check plus a structural-trigger fail-safe plus a Source Input section preserving raw input verbatim) that could apply to routeman's input contract. Revival trigger: when the SKILL.md is authored and input-contract robustness is needed.
- An audit of the `cognitive_harness/non-active/` folder's archival reasoning. Several disciplines (/wayfinding, /explore, /comprehend, /MVL+, and others) have been moved to non-active over time. The reasoning encoded in those archival decisions could inform routeman's lineage decisions if patterns recur. Revival trigger: when a second discipline-rename is proposed, making the methodology pattern-portability question relevant.

The lineage list addresses every structural surface of canonical /navigation. The 14 inherits preserve what was structurally validated; the 5 drops remove runner-level concerns and acknowledged oversimplifications; the 3 refines improve organization without changing field-level semantics; the 4 defers explicitly hand off to specific follow-ups.

### 6. Features: ten cognitive operations derived from the identity statement

The ten features are not procedural steps (the procedural sequencing is process-layer work, deferred). They are the cognitive operations routeman performs. Each is named with a one-line description and traced to its source:

- **Enumerate the next-move-space.** Produce the full set of possible next moves; no filtering, no selection. (Derived from the identity sentence's "enumerates all possible" and from canonical /navigation's inherited Enumerate operation.)
- **Type each move.** Assign a movement-type label from the 16-type taxonomy. (Derived from the identity sentence's "typed" and from the inherited 16-type taxonomy.) *[2026-05-24: the 16-type taxonomy now has named Movement Family categorization per `devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md` — 3 action-noun-named groups (Progression Moves / Re-orientation Moves / Coordination Moves) with 6 secondary attributes per type (direction, intent, autonomy_readiness_tier, auto_class, scope, has_sub_actions). The 16-type set is unchanged; the categorization is structural overlay.]*
- **Reachability-check each move.** Evaluate state-aware feasibility; assign a route state (open, blocked, deferred, active, done, stale, or superseded) by checking gates against the current state. (Derived from the identity sentence's "reachability state" and the inherited reachability/gates residual.)
- **Generate adaptive guidance per move.** Decide each move's Guidance Mode (none, compact, full, or expand-on-selection) and produce mode-appropriate pointers, each pointer carrying its own per-pointer WHY. (Derived from the identity sentence's "prescriptive" and the inherited adaptive-guidance residual.)
- **Cross-cycle REVISIT.** Generate RESURRECT / INVALIDATE / REVERT sub-actions when prior conditions warrant re-evaluation of prior cycle verdicts. (Derived from the inherited REVISIT residual.)
- **Apply graduated-autonomy classification.** Partition moves into auto-derivable vs human-judgment per the project's current autonomy level. (Derived from the identity sentence's "graduated-autonomy classification" and the inherited auto-vs-judgment residual.)
- **Assess priority and confidence per move.** HIGH / MEDIUM / LOW priority labeling. (Derived from the inherited priority residual.)
- **Mark structurally-inapplicable types as Excluded.** Add them to an Excluded section with reasoning; do not silently filter. (Derived from the inherited 4-category completeness check.)
- **Emit telemetry.** Quality signal on the enumeration (type coverage, category balance, route coverage, guidance allocation, modes used, route-state completeness, blocked-route visibility, excluded reasoning, seed-input metrics, and total Route count). (Derived from the inherited telemetry skeleton plus the seed-input extension.)
- **Consume corpus-limit-seeds.** When the /intuit discipline's Phase β+ ships and produces corpus-limit-seeds, routeman ingests them as NEW-INQUIRY-SEED items alongside the 16-type taxonomy. (Derived from the discipline-taxonomy's Boundary-discipline-notes section; anticipatory because /intuit Phase β+ has not yet shipped per current project state, but the input-contract commitment is canonical.)

The ten features map one-to-one to canonical /navigation's load-bearing structural content. They are a decomposition of /navigation's six process steps into discrete operations, not feature-creep: each step in canonical /navigation's Process Model is built from one or more of these operations.

### 7. Attributes: 16 fields organized by purpose

Routeman's output is a **Route Map** — a structured record produced per invocation. The schema has 12 per-Route fields organized into 6 purpose-groups, plus 4 Route-Map-wrapper fields. The 12 fields inherit verbatim from canonical /navigation's existing route-card schema; the 6-group organization makes the canonical-but-implicit structure explicit.

| Group | Field | Content |
|---|---|---|
| Route Identity | Direction | Human-readable route title. |
| | Goal | Compact target-state label. |
| | Movement Type | One of the 16 types in the inherited taxonomy. |
| Route State | Priority | HIGH / MEDIUM / LOW. |
| | Status | open / blocked / deferred / active / done / stale / superseded. |
| | Blocked By | The gate, missing evidence, missing artifact, or condition; `none` when unblocked. |
| Route Meaning | Purpose | What this route would serve, reveal, or unlock. |
| | Movement | Descriptive transition: current state → target state. |
| | Unlocks | Downstream routes / checks / decisions / artifacts; `unknown` when unclear. |
| Reasoning | WHY | Evidence from cycle output, telemetry, or context making this direction worth considering. |
| Adaptive Guidance | Guidance Mode | One of {none, compact, full, expand-on-selection}. |
| | Guidance Pointers | 0 / 1-2 / 3-5 pointers per the mode, each with its own WHY. |
| Continuation Memory | Continuation Note | What a future warm-up should remember about this route. |

Route-Map-wrapper fields (4):

- **Map Header.** A count of total Routes and HIGH-priority Routes (e.g., `## Route Map (12 routes, 4 HIGH)`).
- **Route Index (optional).** A table summarizing each Route by number / Direction / Goal / Movement Type / Priority / Status / Blocked By; included when total Route count exceeds 10.
- **Excluded Section.** A list of structurally-inapplicable types with reasoning for each exclusion.
- **Telemetry Block.** The 10-metric telemetry described in section 6 (Emit telemetry feature).

The schema honors the rename's structural commitment: terminology shifts ("Navigation Map" to "Route Map"; "Navigation Item" to "Route") signal that the wrapper is routeman's, not /navigation's; field-level inheritance preserves the canonical content the verification finding validated.

### 8. Failure-mode framework: nine modes in two layers

Routeman uses a two-layer failure-mode framework, refining canonical /navigation's flat 6-mode list. The two layers, modeled on the /surfacing discipline's framework at `cognitive_harness/surfacing/references/surfacing.md`:

- **Layer-1 — Operational failures.** Detectable via output observation. Recoverable via re-invocation. Six modes (all inherited from canonical /navigation):

| Mode | Recognition |
|---|---|
| Premature Filtering | Only obvious options shown; multiple cycle verdict types not represented in the map. |
| Recency Bias | Map dominated by content-directed types responding to this cycle; process-directed and context-directed types underweighted. |
| Action Bias | Only "do more" types in the map (DEEPEN / DEVELOP / INVESTIGATE); no "do differently" types (REFRAME / WIDEN / DIFFERENT APPROACH). |
| Enumeration Without Reasoning | Routes listed without per-item WHY, Guidance Mode, or appropriate guidance. |
| Route State Omission | Routes listed without explicit Direction, Goal, Movement Type, Priority, Status, Blocked By, or Continuation Note. |
| Scope Fixation | All Routes within the current question's scope; no Routes suggesting REFRAME or WIDEN. |

- **Layer-2 — Identity-eroding failures.** Detectable via behavioral audit over time. Erode the discipline's intrinsic character. Not simply recoverable. Three modes (added specifically for routeman):

| Mode | Recognition |
|---|---|
| Rename-Renders-Itself-Cosmetic | Routeman's outputs lack the prescriptive layer (Guidance Mode + Guidance Pointers content) for 50%+ of routes across 5 consecutive invocations; OR routeman's route-cards collapse to descriptive-only labeling form (missing the four residuals' content); OR adaptive guidance pointers carry no anchored WHYs. **The audit is absolute** (routeman against its own identity statement), **not differential** (routeman vs /navigation) — the absolute audit survives the eventual archive of /navigation. |
| Prescriptive-Without-Cycle-Context | Routeman emits adaptive guidance without sufficient cycle context: the prescriptive layer is the load-bearing residual that distinguishes routeman from descriptive labeling siblings; without anchored cycle context, the prescription degrades to filler. |
| Auto-vs-Judgment Calibration Drift | The 12/4 partition is no longer calibrated to the project's autonomy level: humans handle types the system should now handle (over-conservative drift) OR the system attempts judgment-required types prematurely (over-aggressive drift). |

The Rename-Renders-Itself-Cosmetic mode was specifically restated for absolute audit (not differential against /navigation) during the inquiry's critique step. The original recognition signal compared routeman outputs to /navigation outputs, but the canonical /navigation will be archived as part of the migration; without /navigation outputs available for comparison, the differential signal would degrade. The absolute signal (routeman against its own identity statement) survives the archive.

## Inherited Commitments Re-test

The `_branch.md` declared a Synthesis Trigger consuming six prior outputs. Each prior's load-bearing commitment is re-tested or explicitly flagged as inherited-without-re-test.

### Prior 1 — `devdocs/inquiries/_archive/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md`

- **Commitment 1:** the four confirmed residuals (adaptive guidance, reachability/gates, REVISIT sub-actions, auto-vs-judgment split) are /navigation's load-bearing structural commitments beyond mere paradigm-membership.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the routeman identity statement preserves all four as the "prescriptive-extension layer." Removing any one would collapse routeman to a sibling-paradigm-instance under the mapping framework (/surfacing-of-the-next-move-space under the Coverage paradigm), losing the discipline's separable identity. The residuals' load-bearing status is structurally re-confirmed by their role in routeman's identity statement.

- **Commitment 2:** the five reductions (Enumerate; 16-type taxonomy; 4-category completeness; priority+confidence; route-card record format) explain partial overlap with /surfacing without subsuming /navigation.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the lineage decisions inherit all five reductions verbatim. Their continued role in routeman's features and attributes confirms they are inheritable structural content.

- **Commitment 3:** three runner-level mis-attributions (freshness preflight, stall-signal trigger detection, boundary positioning) belong to the runner, not the discipline.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the lineage decisions drop all three explicitly. The mis-attribution analysis grounded the structural argument for why a clean rename should not propagate them.

- **Commitment 4:** the "one structural operation: Enumeration" framing in canonical /navigation is oversimplified.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the lineage decisions drop this framing explicitly. Routeman's identity sentence names multiple structural commitments rather than collapsing them into one operation label.

### Prior 2 — `devdocs/inquiries/_archive/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md`

- **Commitment 1:** mapping framework (minimum-core definition + 4 primary axes + 8 secondary axes + 12 paradigms; compositionality rule).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** routeman's identity statement names the Navigational paradigm explicitly, anchored in the framework's 12-paradigm enumeration. The framework's compositionality rule grounds the permission for routeman to compose with the Possibility paradigm when enumeration includes generative-rule construction.

- **Commitment 2:** strengthened CORRECTS-vs-REFINES diagnostic (claim-truth / level-coherence / external-citation; any NO defaults to CORRECTS).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the lineage decisions apply this diagnostic per sub-claim — each lineage decision tests the inherited commitment against the three questions. The diagnostic-applied-per-sub-claim methodology is the structural mechanism that makes the rename non-cosmetic.

- **Commitment 3:** the "lesson-introduces-its-own-trap" meta-pattern naming a failure mode where a vocabulary introduced in a meta-lesson becomes a vector for the failure it names.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the third endgame function (rename-as-design-act as corpus-hygiene autonomy) was specifically tested against this meta-pattern during the inquiry's critique step. The function is preserved as candidate-load-bearing pending N≥2 validation rather than promoted to load-bearing — exactly the prevention the meta-pattern prescribes (pair vocabulary with external grounding and a worked-example test before treating the vocabulary as load-bearing).

### Prior 3 — `devdocs/inquiries/_archive/2026-05-13_12-15__what_is_mapping_meta_paradigms/finding.md`

- **Commitment:** the 12-paradigm enumeration under mapping (Cartographic, Taxonomic, Relational, Functional, Embedding, Process-Behavioral, Constraint, Possibility, Navigational, Coverage, Reflexive, Analogical).
  - **Re-test status:** INHERITED-WITHOUT-RE-TEST (at the enumeration-completeness level) + RE-TESTED (at the routeman-instantiates-Navigational level).
  - **Reason for the split:** the 12-paradigm enumeration's completeness was not re-tested in this inquiry (out of scope; would re-litigate the framework finding). What was re-tested is the specific claim that routeman instantiates the Navigational paradigm (compositionally with Possibility when generative): the routeman identity statement names this anchor and the route-structure-from-a-viewpoint preservation matches the paradigm's definition.

### Prior 4 — `devdocs/inquiries/2026-05-23_11-30__navigation_surfacing_territory_dependency_recheck/finding.md`

- **Commitment 1:** the sibling-under-mapping framing at paradigm-instantiation level (Navigational and Coverage paradigms as distinct paradigm-instantiations).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** routeman's identity statement preserves the Navigational paradigm instantiation as structurally distinct from /surfacing's Coverage paradigm (plus Possibility plus partial Cartographic). The two disciplines are sibling paradigm-instantiations of the mapping meta-concept.

- **Commitment 2:** input-dependency on cycle output (the cycle-consumer position at process-level).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** routeman's identity statement names "cycle-consumer" as one of the three structural layers. The input contract (aggregated cycle output plus corpus-limit-seeds) is committed in the design.

- **Commitment 3:** the abstraction-level-conflation meta-pattern: composite claims should be diagnosed per sub-claim, not per composite.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** this finding's structural commitments are deliberately decomposed into per-sub-claim adjudications: identity is decomposed into three structural layers; endgame fit is decomposed into three functions (each tested independently for load-bearing status); lineage is decomposed into 26 per-component decisions. The composite verdicts are not assembled until each sub-claim has its own verdict.

### Prior 5 — `cognitive_harness/navigation/references/navigation.md`

- **Commitment:** the canonical /navigation discipline spec's content (identity, the 16-type taxonomy, the route-card schema, the 6-step process model, the 6 failure modes, the telemetry, the relationships to other disciplines, the auto-vs-judgment split, the invocation contexts).
  - **Re-test status:** RE-TESTED at per-component level via the lineage decisions.
  - **Evidence:** every structural surface of the canonical spec is addressed by one of the 26 lineage decisions (14 inherit, 5 drop, 3 refine, 4 defer). The per-component re-test is the inquiry's central work.

### Prior 6 — `docs/desc.md` (the autonomous-consciousness end-goal document)

- **Commitment 1:** the 5-level autonomy ladder (L0 human-bootstrap; L1 reviews-all-self-modifications; L2 reviews-uncertain; L3 sets-strategic-direction; L4+ optional-observer).
  - **Re-test status:** INHERITED-WITHOUT-RE-TEST.
  - **Reason:** the autonomy ladder's structural design is upstream of this inquiry and out of scope to re-test. The inquiry uses the ladder as the structural anchor for the second endgame function (auto-vs-judgment split positions routeman on the ladder) without re-litigating the ladder itself.

- **Commitment 2:** the multi-head architecture and merging-loops trajectory (parallel cognitive cycles consuming enumerations).
  - **Re-test status:** INHERITED-WITHOUT-RE-TEST at the trajectory-structure level + RE-TESTED at the enumeration-first-is-multi-head-aligned level.
  - **Reason for the split:** the multi-head architecture's structural design is upstream; what is re-tested is the specific claim that routeman's enumeration-first commitment serves multi-head compatibility, which the first endgame function articulates explicitly.

- **Commitment 3:** spontaneous attention as one of six observable autonomy indicators ("noticing what should change unprompted").
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the third endgame function (rename-as-design-act as corpus-hygiene autonomy) is grounded in this indicator: the system noticing that its own corpus has accumulated stale references and producing a structurally-grounded rename is one concrete instance of spontaneous attention applied to the project's own infrastructure. The grounding survives the candidate-load-bearing demotion: the indicator anchor is what makes the function plausible enough to preserve pending validation.

## Next Actions

### MUST

There are no MUST actions required for this finding's value to be realized at the MEANING layer. The deliverable is the design memo itself; structural-layer and process-layer follow-ups are the user's call.

### COULD

- **What:** Author `cognitive_harness/routeman/SKILL.md` (the runtime discipline spec) and `cognitive_harness/routeman/references/routeman.md` (the loaded reference) using this finding as the design source. Honor the project's "disciplines self-contained" feedback memory: the runtime spec must not contain outbound pointers to this design memo or other design-history folders; commitments inherited here must be rephrased in self-contained form in the spec.
  - **Who:** human author (or a follow-up inquiry).
  - **Gate:** condition-bound — when the user decides to ship routeman as an active discipline.
  - **Why:** the design memo enables the spec authoring without re-running this inquiry; without the spec, the discipline is documented as intended but not invokable.

- **What:** Update the runner specs at `cognitive_harness/MVL/SKILL.md` and `cognitive_harness/MVLw/SKILL.md` to reference /routeman in place of /navigation in the pipeline definitions, and update the install scripts at `install_for_claude.sh` and `install_for_codex.sh` to install routeman in place of navigation.
  - **Who:** human author.
  - **Gate:** condition-bound — paired with the routeman SKILL.md authoring; not before.
  - **Why:** without runner updates, routeman exists as a spec but is not invoked by any pipeline; the corpus-baggage problem persists because agents still pull /navigation through the runners.
  - **Depends-on:** the SKILL.md authoring COULD above. This COULD is GATED — do not act until the SKILL.md is authored. The runners cannot invoke routeman before the discipline spec exists.

- **What:** Archive the canonical /navigation directory to `cognitive_harness/non-active/`, with a brief archive note describing the rename rationale and pointing to this finding for the design.
  - **Who:** human author.
  - **Gate:** condition-bound — paired with the runner updates; not before. Archiving /navigation before the runners are updated would break invocation paths.
  - **Why:** corpus-hygiene closure: once routeman is operational and the runners reference it, /navigation should not remain in the active corpus where agents can still retrieve it.
  - **Depends-on:** the runner-update COULD above. This COULD is GATED — do not act until the runners reference /routeman.

- **What:** Specify the runtime sequencing of the ten features in routeman's SKILL.md (the process-layer work).
  - **Who:** the SKILL.md author (likely the same actor as the first COULD).
  - **Gate:** condition-bound — concurrent with or after the SKILL.md authoring.
  - **Why:** features are operations (committed in this design); the process layer specifies how they fire (sequencing). Without process-layer specification, the SKILL.md is incomplete for runtime invocation.
  - **Depends-on:** the SKILL.md authoring COULD above. This COULD is GATED — do not act until the SKILL.md skeleton exists.

- **What:** Commit routeman's primitive composition by loading the typed 11-primitive set at `docs/thinking_space_dynamics.md` and adjudicating per-primitive against routeman's identity statement.
  - **Who:** the SKILL.md author or a follow-up inquiry.
  - **Gate:** condition-bound — when the structural-layer work needs the primitive profile (some structural-layer authoring may be possible without it; runtime fidelity needs it).
  - **Why:** the primitive profile grounds routeman's load-bearing primitives in the project's typed primitive substrate, enabling cross-discipline primitive analysis at `docs/discipline_taxonomy.md`'s summary table.
  - **Depends-on:** the SKILL.md authoring COULD. GATED.

- **What:** Specify the reflect-routeman coupling contract by loading the /reflect spec and adjudicating the coupling.
  - **Who:** the SKILL.md author or a follow-up inquiry.
  - **Gate:** condition-bound — when the SKILL.md needs to describe the R→N flow precisely.
  - **Why:** canonical /navigation's "Relationship to Other Disciplines" section describes the coupling partially; routeman should preserve and clarify it.
  - **Depends-on:** the SKILL.md authoring COULD. GATED.

### DEFERRED

- **What:** Apply a cognitive-fixes-style input-contract fail-safe (a Source Input section preserving raw cycle output verbatim, plus a structural-trigger fail-safe checking that load-bearing input clauses are preserved) to routeman's input contract.
  - **Gate:** observable — when the structural-layer follow-up authors routeman's SKILL.md AND input-contract robustness becomes a concern (e.g., when an early invocation drops a load-bearing input clause).
  - **Why (if revived):** input-contract fail-safes preserve raw input for downstream audit; the cognitive-fixes/01 methodology demonstrates one pattern that may apply.

- **What:** Audit the `cognitive_harness/non-active/` folder's archival reasoning to extract patterns useful for routeman's lineage decisions or for future discipline renames.
  - **Gate:** condition-bound — when a second discipline-rename is proposed (the user implied this is plausible when they said "one of them is about navigation"; the implied second instance would activate this audit).
  - **Why (if revived):** the archival reasoning encoded in non-active/ may reveal recurring patterns relevant to the rename-as-design-act methodology's pattern-portability claim.

- **What:** Test pattern-portability of the rename-as-design-act methodology when a second discipline-rename is proposed.
  - **Gate:** observable — when a second discipline-rename inquiry is invoked. If the methodology applies cleanly to the second case, promote the corpus-hygiene-as-design-act endgame function from candidate-load-bearing to load-bearing. If the methodology fails to apply cleanly, drop the corpus-hygiene endgame function and reduce routeman's endgame story to the two load-bearing functions (enumeration-first + autonomy-ladder positioning) without structural disruption.
  - **Why (if revived):** N=1 instances are observations; N=2 instances become patterns. The promotion or demotion decision needs at least one additional case to operate on.

## Reasoning

This section explains why the design ended where it did, naming what was considered and rejected.

**Why the rename is structural-not-cosmetic.** The cosmetic-rename interpretation was tested in the inquiry's sensemaking step (as the "strongest counter-interpretation" against the structural reading) and rejected on structural grounds. The corpus-baggage problem is itself structural (corpus retrieval operates on content similarity, not label novelty); a cosmetic rename would not solve it because the agent would still retrieve old /navigation material on content-similarity grounds. The rename earns value only when paired with per-component structural distinction; the strengthened diagnostic is the mechanism that produces the distinction. This is the load-bearing structural argument for the entire design; if the rename is cosmetic, the design degenerates to relabeling and the corpus-baggage problem recurs.

**Why the identity has three layers, not two or four.** The two-layer alternative (paradigm-instantiation plus cycle-consumer; drop the prescriptive-extension layer) was tested in the inquiry's innovation step. Without the prescriptive-extension layer, routeman becomes confusable with a sibling-paradigm-instance of /surfacing under the Coverage paradigm (a /surfacing-of-the-next-move-space) — losing the discipline's separable identity. The four-layer alternative (add an emergent-runtime-identity layer) was tested too; emergent identity is hard to ground a priori, contradicts the rename-must-be-structurally-grounded principle, and admits no spec authoring. The three-layer commitment is the load-bearing minimum.

**Why three endgame functions, not two.** The two-function alternative (drop the rename-as-design-act-as-corpus-hygiene function) was tested in the inquiry's innovation step as a deliberate inversion. The drop avoids the lesson-introduces-its-own-trap self-reference risk entirely. But the function has an external anchor (the spontaneous-attention indicator from `docs/desc.md`) that the drop would lose. The compromise — preserve the function but demote it to candidate-load-bearing pending N≥2 validation — keeps the observation accessible without elevating it to a commitment, exactly the prevention the lesson-introduces-its-own-trap meta-pattern prescribes. The compromise is what the inquiry's critique step settled on.

**Why per-component lineage, not wholesale.** Wholesale inheritance was considered and rejected: it would propagate the verification finding's mis-attributions (three runner-level concerns absorbed into /navigation's spec) and the verification finding's acknowledged oversimplification ("one structural operation: Enumeration"). Wholesale rejection was considered and rejected too: it would lose the four residuals that are routeman's load-bearing identity beyond paradigm-membership. The per-component lineage with the strengthened diagnostic per sub-claim is the structurally sound middle path.

**Why 10 features, not 6.** The 6-feature alternative (use canonical /navigation's six process steps verbatim) conflates the meaning layer with the process layer. Features are operations; the canonical six are procedural steps that bundle multiple operations each. The 10-feature decomposition is structural elaboration of the canonical 6 process steps into discrete operations, each traceable to a load-bearing residual or reduction. The decomposition is not feature-creep.

**Why 16 attributes (12 + 4 wrapper), not 12 or 16-flat.** The 12-only alternative drops the wrapper structure (no Route Map header, no Route Index, no Excluded section, no Telemetry block); but the canonical /navigation has these wrapper structures already, and they're structurally load-bearing for runtime use. The 16-flat alternative drops the 6-group purpose organization; but the canonical /navigation has the purpose-grouping implicitly, and making it explicit improves spec readability without changing semantics. The 12-in-6-groups-plus-4-wrapper organization is the canonical structure made explicit.

**Why the failure-mode framework was refined to a 2-layer split.** Canonical /navigation has a flat 6-mode list; this conflates operational failures (recoverable by re-invocation) with identity-eroding failures (not simply recoverable). The /surfacing discipline has already solved this distinction with its 2-layer framework; routeman inherits that solution. The axes-not-layers alternative (treat operational, identity-eroding, and endgame as orthogonal axes a mode can score on) was tested in innovation and rejected on structural grounds: layers preserve the recoverability semantics that operational use depends on; axes lose them.

**Why the third Layer-2 mode (Rename-Renders-Itself-Cosmetic) was restated for absolute audit.** The original recognition signal compared routeman outputs to /navigation outputs; this signal degrades when /navigation is archived as part of the migration. The critique step caught the degradation and produced the refined absolute recognition (routeman against its own identity statement). The refined signal survives the archive.

**Why the inquiry does NOT propose MUST actions.** The deliverable is the design memo at MEANING layer; structural-layer authoring and runner updates are downstream consequence-paths the user chooses to pursue or not. Making any of them MUST would over-commit the inquiry's scope.

## Open Questions

### Monitoring

- **Whether the rename-as-design-act methodology applies to a second discipline.** Observable when (and if) a second discipline-rename is proposed. The user implied this is plausible by saying "one of them is about navigation." If the methodology applies cleanly to the second case (same structural argument; same per-component lineage approach; same strengthened diagnostic), the corpus-hygiene endgame function promotes from candidate-load-bearing to load-bearing.

- **Whether routeman's runtime behavior differs structurally from /navigation's behavior.** Observable after routeman is shipped: comparing actual Route Maps to the canonical /navigation Map outputs (preserved in archive) for the same cycle inputs. If the outputs are structurally identical, the rename was cosmetic in practice despite the structural commitments here; the design didn't hold up. If the outputs differ structurally (in attribute distributions, in adaptive guidance content, in auto-vs-judgment partition handling), the rename held.

- **Whether the abstraction-level-conflation meta-pattern recurs.** Observable in future inquiries that produce composite claims about routeman or about other disciplines. If a third instance appears (after the territory-dependency-recheck finding's first and this finding's second), the meta-pattern warrants promotion from research frontier to canonical project rule.

### Blocked

- **Whether the auto-vs-judgment split needs to change as autonomy advances.** Blocked until the project advances past Level 0 of the autonomy ladder. At higher autonomy levels, the system handles more of the partition; whether the partition itself should shift (e.g., reclassify REFRAME from judgment-required to auto-derivable) is unclear at L0.

- **Whether F-seed (consume corpus-limit-seeds) needs additional specification.** Blocked until the /intuit discipline's Phase β+ ships. Until then, the feature is anticipatory based on the discipline-taxonomy's Boundary-discipline-notes; the actual integration cannot be specified without /intuit's spec being available.

### Research Frontiers

- **Pattern-portability of the rename-as-design-act methodology.** N=1 instance here. The methodology — declare a rename, apply the strengthened diagnostic per component to decide what carries forward, write a new design memo independent of the old spec's language, archive the old material — may be a portable maintenance pattern for long-running self-improving systems. Validation requires N≥2 instances.

- **Emergent vs declared discipline identity.** This inquiry committed to declared identity; the emergent alternative (let identity emerge from observed runtime behavior across cycles rather than declaring it up-front) was rejected on grounding grounds. Whether emergent identity could work for some future discipline under different constraints is an open question.

- **Failure-mode framework as orthogonal axes rather than layers.** The 2-layer split inherits from /surfacing; the axes-alternative was tested and rejected. Whether axes (operational + identity-eroding + endgame, with overlap permitted) could improve the framework for some other discipline is open.

### Refinement Triggers

- **If the corpus-hygiene endgame function fails N≥2 validation** (i.e., when a second discipline-rename is proposed, the methodology does not apply cleanly), drop the function. The endgame story degrades to two load-bearing functions (enumeration-first + autonomy-ladder positioning).

- **If routeman's Layer-2 identity-eroding modes trigger in actual use** (specifically, Rename-Renders-Itself-Cosmetic fires because routeman's outputs lack the prescriptive layer in 50%+ of routes across 5 consecutive invocations), the design has failed in practice. Re-open the inquiry to diagnose whether the failure is in the design (the identity statement under-commits) or in the implementation (the SKILL.md doesn't operationalize the design).

- **If the discipline-taxonomy at `docs/discipline_taxonomy.md` is restructured to admit a third Boundary category** (e.g., a cross-cycle longitudinal direction), the category placement here reopens.

- **If a future inquiry promotes the axes-not-layers failure-mode framework** for any discipline, routeman's 2-layer split reopens for reconsideration.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
we have this problem of old artifacts meddling with current renewed understanding and limiting innovations.. 

one of them is about navigation. there are too many references using this word , this is why i am suggesting a new discipline , called routeman which has a job of  surfacing next actions, 

it is basically navigatino but with a new name so our AI wont get effected by old versions. 


but still , routeman does is listing all possible next moves we can do, together with some movement types.


and with the help of routeman (we can still borrow things from old navigation if they are cannon) lets discuss how it fits into our endgoal and which features it should have as well as which attributes it should have
```

</details>
