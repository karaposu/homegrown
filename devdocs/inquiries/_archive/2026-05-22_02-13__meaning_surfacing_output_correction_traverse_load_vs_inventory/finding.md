---
status: active
model: claude-opus-4-7[1m]
effort: max
refines: devdocs/inquiries/2026-05-22_01-25__meaning_surfacing_pure_discipline_clean_design/finding.md
---
# Finding: Surfacing — Output Correction (Traverse + Load vs Content-Bearing Inventory)

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-22_01-25__meaning_surfacing_pure_discipline_clean_design/finding.md` — Surfacing: Pure Discipline Clean Design (Meaning Layer). The prior finding produced a 9-section MEANING-layer characterization of the discipline "surfacing" and committed 16 structural decisions (D1-D16 in its Sensemaking phase).

**Revision trigger:** User correction on the prior finding's Section 3 (Vocabulary + Output). The user said: "yes there will be output of surfacing, but by no means we expect output to be fully relevant content. thats crazy and weird and inefficient. surfacing's job is to traverse relevant parts and read them, so llm will have that context in it's mind. and output might be how this traverse happens and concept names that discovered during surfacing maybe?"

**What's preserved.** Most of the prior finding's commitments are inherited unchanged: the discipline's name "surfacing" (D1); the relevance-attribution mechanism's name + per-item operation + 8 structural distinctions vs sensemaking-proper (D2); the 3-phase structural shape (Reception → Relevance-attributed Traversal → Assembly) + optional Boundary-discovery sub-phase (D4); the purposive character (D7); the discipline-taxonomy placement as Core (D13); the 8-item intrinsic NOT-list (D14); the LBT1 + LBT2 verdicts (D15, D16).

**What's changed.** The output specification (D12) is the central refinement target. The prior commitment to a "relevance-tagged inventory" with items carrying full labeling content (identifier + functional one-line + surface form + optional adjacency facts) is REPLACED by a dual-output commitment: (a) the LLM workspace (the substantive product; session-local) + (b) a thin artifact (the navigation/handoff product; persistent; carries NO item content). Cascading refinements: the relevance vocabulary now applies at three granularities (D3 refined); the Working Memory primitive's role is more explicitly load-bearing (D6 refined); the asymmetric-failure principle operates at the workspace layer (D8 refined); the failure framework gains 3 new LAYER 1 modes (D9 extended); the calibration signal split between workspace-level and artifact-level (D10 refined); the re-invocation parameter is renamed (D11 refined).

**What's new.** Three new LAYER 1 failure modes (workspace overload, artifact under-specification, workspace-artifact desync). The runner-vs-discipline ownership of the workspace-populated status field. The frontier-signal-PRIMARY workspace-overload mitigation (sampling SECONDARY, future PROCESS-layer addition).

**Migration.** This finding supersedes the prior finding's Section 3 (Vocabulary + Output) on the specific point of what surfacing produces as a written artifact. Sections 1, 2, 4, 5, 6, 7, 8, 9 of the prior finding remain valid as written, with refinements noted above. A downstream STRUCTURAL inquiry building the spec file at `cognitive_harness/surfacing/references/surfacing.md` (or equivalent path) should consume BOTH this finding (for the output specification) AND the prior finding (for everything else).

## Question

The user pointed at Section 3 of the prior finding (Surfacing: Pure Discipline Clean Design, at `devdocs/inquiries/2026-05-22_01-25__meaning_surfacing_pure_discipline_clean_design/finding.md`) which committed surfacing's output as a "relevance-tagged inventory" of items with full labeling content. The user's correction: "by no means we expect output to be fully relevant content. thats crazy and weird and inefficient. surfacing's job is to traverse relevant parts and read them, so llm will have that context in it's mind. and output might be how this traverse happens and concept names that discovered during surfacing maybe?"

**The question:** what is surfacing's actual output, given that the discipline's WORK is to traverse and read relevant content (loading the LLM workspace) and the prior commitment to a content-bearing inventory is structurally wasteful (duplicates content the LLM has already read; mis-frames the discipline's substantive product)?

**The goal:** a MEANING-layer refinement to the prior finding's output specification that:
1. Re-specifies surfacing's output as DUAL — workspace work-product + thin artifact work-product.
2. Inherits and re-tests the prior finding's 16 commitments per the `## Inherited Commitments Re-test` section (required per CONCLUDE enforcement).
3. Operationalizes the artifact-vs-workspace boundary, the runtime semantics under the split, the new failure modes, and the calibration signal adjustment.

## Finding Summary

- **Surfacing produces TWO work-products with distinct roles.** The workspace work-product (the LLM session's in-context content + explicit scope tags) is the substantive product, session-local, consumed by same-session downstream disciplines. The thin artifact work-product (a persistent record saved to the inquiry folder) is the navigation/handoff product, cross-session-sufficient, consumed by cross-session downstream disciplines or as the in-session record.

- **The artifact is "thin" in the operational sense of containing NO ITEM CONTENT.** Item content lives in the workspace. The artifact carries metadata about the traversal: item identifiers (not content), per-item relevance tags, concept-names discovered, coverage map, confirmed-absent regions, frontier flags, territory-specification echo, workspace-populated status. "Thin" is a content-type criterion, not a size criterion — the artifact may grow with more traversal entries or concept-names without becoming "fat."

- **The artifact has two top-level sub-sections.** Traversal Trace (chronological; per-entry record with item identifiers + relevance verdicts) is the PRIMARY granularity for cross-session resume. State Summary (aggregate, mechanically derived from the trace) carries the coverage map, the concept-names list, the confirmed-absent regions, the frontier flags, the territory echo, and the workspace-populated status.

- **The 4-level relevance vocabulary (core/sub/side/umbrella, committed in the prior finding) now applies at three granularities.** Per-item in the workspace (the LLM holds per-item tags via explicit scope tagging during reading). Per-trace-entry in the artifact's Traversal Trace (PRIMARY artifact granularity). Per-region aggregate in the artifact's State Summary coverage map (DERIVED from per-trace-entry tags).

- **The asymmetric-failure principle operates primarily at the workspace layer.** Lean-toward-inclusion means the workspace must include relevant content under uncertainty; the artifact records what was tagged. The operational stop-rule (territory-bounded traversal + uncertainty-includes filtering) is preserved from the prior finding's D8.

- **Three new LAYER 1 failure modes extend the prior finding's framework.** Workspace overload (LLM context budget pressure during traversal). Artifact under-specification (insufficient metadata for cross-session resume). Workspace-artifact desync (artifact tags drift from workspace tags due to context drift). All three are LAYER 1 (operational, recoverable). LAYER 2 (identity-eroding) failures from the prior finding are unchanged.

- **Workspace overload mitigation is frontier-signal PRIMARY.** When the territory is large, the discipline traverses what it can within a reasonable budget, tags items at the appropriate relevance level, and emits a frontier flag signaling "this sub-region is incomplete; re-invoke to cover it." This preserves the asymmetric-failure principle (lean toward inclusion; signal incompleteness rather than silently drop). Sampling is SECONDARY — reserved for genuinely huge territories with explicit purpose-permission (a future PROCESS-layer parameter not committed at MEANING-layer).

- **The runner is the session-continuity authority.** The discipline cannot reliably detect whether a prior LLM session continues; this is the runner's domain (e.g., /MVL+ manages session lifecycle). Re-invocation: parameter renamed from "prior-inventory" to **`prior-artifact`** (always available; persisted to disk) + optional **`prior-workspace`** (supplied by the runner when same-session continues). The refined-sub-purpose parameter is unchanged from the prior finding's D11.

- **The workspace-populated status field has dual ownership.** The discipline INITIALIZES the field at Assembly (writes "populated: true; populated-at: <timestamp>; extent: <coverage-summary>"). The runner MAINTAINS the field's still-valid status over time (updates to "populated: false" when the session ends or the workspace is otherwise invalidated).

- **The calibration trajectory is preserved unchanged.** The bootstrap → early operation → mature operation stages from the prior finding's D10 are unchanged; the trajectory describes WHEN signals become trustworthy. Under the new output, signals split between workspace-level (PS1 coverage of obvious items via LLM introspection; PS4 coverage of obvious-misses via downstream-naive reviewer hybrid) and artifact-level (PS2 confirmed-absent coverage via re-examination; PS3 internal tag consistency via tag-consistency check; PS5 edge items via tag-ratio observation). All 5 primary signals are operationally feasible at bootstrap.

- **The Inherited Commitments Re-test pre-classification: 8 RE-TESTED + 8 INHERITED-WITHOUT-RE-TEST.** RE-TESTED (each tests PASS): D3 (vocabulary at three granularities); D5 (Output-shaping component refines its product); D6 (Working Memory primitive's role more explicit); D8 (asymmetric-failure at workspace layer); D9 (failure framework extended with 3 new LAYER 1 modes); D10 (calibration signal split); D11 (re-invocation parameter renamed); D12 (output specification — central refinement). INHERITED-WITHOUT-RE-TEST (reason: structurally untouched by the output refinement): D1 (discipline name), D2 (mechanism name), D4 (3-phase shape), D7 (purposive character), D13 (Core taxonomy placement), D14 (8-item NOT-list), D15 (LBT1 "relevance" defensible), D16 (LBT2 "sensemaking-LIKE-but-NOT-sensemaking" defensible).

- **The disciplines-self-contained principle is preserved.** This finding does NOT name CONCLUDE, the /MVL+ runner, or any sibling discipline in spec-coupling form. References to the runner are operational ("the runner determines session continuity"), not spec-coupling ("see runner X for session protocol"). CONCLUDE consumption of the artifact + workspace is downstream of surfacing's commitment scope, handled by `cognitive_harness/protocols/conclude.md`.

## Finding

### Surrounding context (why we are even discussing this)

The prior finding (Surfacing: Pure Discipline Clean Design at `devdocs/inquiries/2026-05-22_01-25__meaning_surfacing_pure_discipline_clean_design/finding.md`) characterized surfacing as a from-scratch cognitive discipline — the most upstream operation in any cognitive loop, producing what every other discipline presupposes (items being claimed to exist in the inquiry's view). The prior finding committed 16 structural decisions: the discipline's identity, the relevance-attribution mechanism, the 4-level relevance vocabulary, the 3-phase structural shape with optional Boundary-discovery sub-phase, the 8 load-bearing primitives, the asymmetric-failure principle with its LAYER 1 / LAYER 2 failure framework, the calibration trajectory, the re-invocation as parameterized variation, the Core taxonomy placement, the 8-item intrinsic NOT-list, and the LBT verdicts.

Section 3 of the prior finding (Vocabulary + Output) committed surfacing's output as a "relevance-tagged inventory" — items each carrying labeling content (identifier + functional one-line + surface form + optional adjacency facts) plus the relevance tag, plus confirmed-absent regions, plus a coverage map, plus frontier flags.

The user read this and corrected: putting items' full content in the artifact is "crazy and weird and inefficient." The discipline's actual work is to traverse the relevant parts of the territory + read them, so the LLM has that context loaded in its working memory. The persistent output ("artifact") should be a thin record of HOW the traversal happened and WHAT concept-names were discovered during it — not a duplicate of the content the LLM has already read.

This refinement-finding operationalizes the user's correction. It preserves most of the prior finding's commitments and refines the output specification (Section 3) + a small set of cascading commitments (calibration signals, re-invocation parameter, failure framework). The Inherited Commitments Re-test section below names each prior commitment + its status under this refinement.

### 1. The dual output: workspace + thin artifact

Surfacing's output is **dual**. Both products are load-bearing; neither alone is sufficient.

**(a) The workspace work-product.** The LLM session's in-context content (items read from the bounded territory during traversal) plus explicit scope tags (per-item relevance verdicts emitted by the relevance-attribution mechanism during reading). The substrate is the Working Memory primitive's HYBRID delegation per `docs/thinking_space_dynamics.md` (the Thinking-Space Dynamics architectural reference): "LLM context native + explicit scope tagging." The workspace is observable via LLM introspection — a same-session reviewer can query the LLM about what was read and how it was tagged. The artifact's traversal trace serves as an external corroboration record for the introspection.

The workspace is **session-local**. It persists only within the LLM session that produced it. When the session ends, the workspace is gone (the LLM no longer holds the content in its context). Downstream disciplines operating in the same session consume the workspace by querying the LLM directly for item content. Downstream disciplines in a new session do not have access to the workspace; they must operate from the artifact alone, or re-read items from the territory as needed.

**(b) The thin artifact work-product.** A persistent record saved to the inquiry folder per the project's artifact convention (`docs/runtime_environment/folder_based.md` — the Folder-Based Inquiry System convention). The artifact contains METADATA about the traversal: item identifiers (not content), per-item relevance tags within the traversal trace, concept-names discovered during reading, a coverage map per region, confirmed-absent regions, frontier flags, the territory specification echoed back, and the workspace-populated status.

**"Thin" is operationally defined as NO ITEM CONTENT.** Item content (the actual read text of the items the discipline judged relevant) lives in the workspace; the artifact does not duplicate it. This is a content-type criterion, not a size criterion. A traversal across 50 regions with 200 concept-names will produce a larger artifact than one across 5 regions with 20 concept-names — but both are "thin" because neither contains item content. A 5-region artifact that included full item content would be "fat" — violating the criterion regardless of byte count.

**Why the dual structure.** The user's correction is grounded in operational efficiency:
- Duplicating workspace content into the artifact would WASTE storage and computational effort (the LLM has already read the content; encoding it externally adds no value the discipline doesn't already have access to).
- It would mis-frame the discipline's substantive product (the discipline's WORK is the workspace load, not the artifact; the artifact RECORDS the work but is not the work itself).
- It would couple the artifact to one specific LLM session's reading (different sessions may render the content differently in their context; the artifact would inherit this session-specific framing).

The dual structure separates the SUBSTANTIVE product (workspace; rich; session-local) from the NAVIGATION/HANDOFF product (artifact; thin; cross-session-sufficient). Each serves its downstream needs at its appropriate granularity.

**LBT1** (workspace work-product is operationally defensible): PASSES at MEDIUM-HIGH confidence. The Working Memory primitive's HYBRID delegation grounds the workspace concept; LLM introspection grounds the observability. Confidence is MEDIUM-HIGH (not HIGH) because LLM introspection is imperfect — the model's recall is not guaranteed to be exhaustive. The HYBRID delegation's "explicit scope tagging" mitigates this by giving the discipline a handle to verify what was tagged.

**LBT2** ("thin artifact" is operationally defensible): PASSES at HIGH confidence. The no-item-content criterion is content-type-based; it does not depend on byte counts.

### 2. The artifact's internal structure

The thin artifact has two top-level sub-sections.

**(I) Traversal Trace** — chronological record of the discipline's traversal. Per entry:

| Field | Content per entry |
|---|---|
| Sequence ordinal | Position in the traversal (1, 2, 3, ...) |
| Region (or sub-region) visited | Identifier of the territory region operated on at this step |
| Item identifier(s) enumerated | The identifiers (file paths / function names / candidate names) of items the discipline enumerated or generated at this step — NOT content |
| Relevance verdict per item | Tag at the 4-level vocabulary (core / sub / side / umbrella) per item enumerated |
| Relevance confidence | HIGH / MEDIUM / LOW per item |
| Step note (optional brief) | Any one-line note the discipline emits during the step (e.g., "high signal density"; "boundary edge reached") |

The Traversal Trace is the PRIMARY granularity for cross-session resume. A new LLM session reading the trace can re-construct what was traversed (which items were enumerated, in which order, at which relevance level), then decide what to re-read if it needs item content.

**(II) State Summary** — aggregate view, mechanically derived from the trace:

| Field | Content |
|---|---|
| Territory-specification echo | The bounded territory the discipline operated on (echoed back from the invocation input for reference) |
| Purpose-specification echo | The inquiry's purpose biasing relevance-attribution |
| Coverage map | Per-region aggregate: each region tagged with one of confirmed / scanned-but-shallow / inferred / unknown (the coverage confidence); aggregate relevance verdict per region (derived from per-trace-entry tags in that region) |
| Confirmed-absent regions | Regions traversed where no relevant items were found (a productive output, not a gap) |
| Concept-names list | Flat list; per-entry: `{name: <string>, type: <vocabulary \| structural-reference \| coined-term>, provenance: <trace-entry-id where discovered>, gloss: <optional one-line>}` |
| Frontier flags | Self-signaled requests for re-invocation; suggested refined-sub-purposes for each |
| Workspace-populated status | `{populated: <bool>, populated-at: <timestamp>, extent: <coverage-summary>}` — initialized by the discipline at Assembly; maintained by the runner over time |
| Re-invocation parameters (optional) | If the discipline self-signals re-invocation, suggested input parameters for the re-invocation |

**Tag granularities at three levels.** The 4-level relevance vocabulary (core / sub / side / umbrella) applies at three granularities:

1. **Per-item (workspace)** — the LLM holds per-item relevance tags via explicit scope tagging during reading. Not in the artifact; lives in the workspace.
2. **Per-trace-entry (artifact Traversal Trace)** — PRIMARY artifact granularity. Each entry in the chronological trace records the verdict per item at the moment of tagging.
3. **Per-region aggregate (artifact State Summary coverage map)** — DERIVED from per-trace-entry tags within each region. Quick-lookup granularity for downstream consumers who don't want to parse the trace.

The per-item granularity at workspace + the per-trace-entry granularity at artifact correspond — each item tagged in the workspace has a corresponding trace entry with the same tag. The per-region aggregate is computed at Assembly by aggregating the per-trace-entry tags within each region.

**Concept-names list structure.** Flat list (not grouped by type or by region). Each entry carries `{name, type, provenance, optional gloss}`. The `type` distinguishes:

- **vocabulary** — load-bearing terms the inquiry should know (e.g., domain-specific terminology encountered in the read content).
- **structural-reference** — file paths, function names, named concepts (entities downstream may need to reference by name).
- **coined-term** — project-internal vocabulary the inquiry team has not previously used (e.g., a phrase coined in a prior inquiry that the discipline encountered).

The `provenance` field cites the traversal-trace entry where the name was discovered (enabling cross-session re-derivation). The optional `gloss` is a brief one-line description of the name (not full content; just enough for downstream to recognize what the name refers to).

### 3. Runtime and session dynamics

**Re-invocation: parameterized variation of the same operation.** The prior finding's D11 committed re-invocation as a parameterized variation; this refinement renames and splits the parameter:

- **`prior-artifact`** — always available (persisted to disk from a prior invocation). The thin artifact's Traversal Trace + State Summary serve as the reference for what was previously traversed.
- **`prior-workspace`** — OPTIONAL. Supplied by the runner ONLY when the same LLM session continues from a prior invocation. If absent, the discipline operates from `prior-artifact` alone (or from scratch if no prior).
- **`refined-sub-purpose`** — unchanged from the prior finding's D11. A refined purpose for the re-invocation.

**Re-invocation behavior:** Reception incorporates `prior-artifact` ALWAYS + `prior-workspace` IF AVAILABLE. Traversal can skip items already in the prior-artifact's Traversal Trace (using the trace as an exclusion filter) — UNLESS the refined-sub-purpose changes the relevance assessment for previously-traversed items. Assembly merges new traversal results with the prior artifact (extending the trace + the State Summary) and updates the workspace.

**Runner authority for session continuity.** The discipline cannot reliably detect whether the same LLM session persists from a prior invocation. Session continuity is the **runner's domain** (the runner — e.g., /MVL+ — manages the LLM session's lifecycle: when it starts, when it ends, when it's invalidated). The discipline's interface accepts `prior-workspace` when the runner supplies it; the discipline does NOT try to detect session continuity itself.

**Workspace overload mitigation.** When the territory is large enough that the LLM context window saturates during traversal, the discipline applies the following mitigations:

| Mitigation | Status |
|---|---|
| **Self-signal frontier-for-re-invocation** | PRIMARY. The discipline traverses what it can within reasonable budget, tags items at the appropriate relevance level, and emits a frontier flag saying "this sub-region is incomplete; re-invoke to cover it." Downstream knows the gap exists; downstream can choose to re-invoke or to operate without the gap (and document the limitation). |
| **Self-throttle via sampling** | SECONDARY. Reserved for genuinely huge territories AND only when the inquiry's purpose explicitly permits sampling. Sampling is a future PROCESS-layer parameter (not committed at MEANING-layer); the discipline does NOT support sampling by default. |

**Why frontier-signal is primary.** Sampling silently drops items; downstream cannot recover what was sampled out. The asymmetric-failure principle (preserved from the prior finding's D8) says: under uncertainty about whether an item is relevant, INCLUDE it. Sampling is incompatible with this. Frontier-signal preserves the principle by completing the budget-allowed work and explicitly flagging incompleteness for re-invocation.

**workspace-populated status field — dual ownership.**

| Owner | When | Action |
|---|---|---|
| **Discipline** | At Assembly (end of invocation) | INITIALIZES the field: writes `{populated: true, populated-at: <timestamp>, extent: <coverage-summary>}` |
| **Runner** | Over time (session lifecycle events) | MAINTAINS the field: updates `populated` to `false` when the session ends or the workspace is otherwise invalidated; updates the `extent` if other disciplines further populate the workspace within the same session |

This split ownership reflects the operational reality: the discipline KNOWS the workspace was populated at the moment of Assembly; the runner KNOWS whether the population still holds at later moments.

### 4. The failure framework extension

The prior finding's D9 committed a LAYER 1 / LAYER 2 framework for surfacing's failure modes. LAYER 1 (operational; recoverable via re-invocation): missed-relevance, surfaced-irrelevance, over-coverage, territory-mis-binding. LAYER 2 (identity-eroding; not simply recoverable): interpretive-overstep, purpose-loss, self-coupling-to-downstream.

This refinement EXTENDS LAYER 1 with three new modes specific to the artifact-vs-workspace split. LAYER 2 is unchanged.

| New LAYER 1 mode | Recognition | Mitigation |
|---|---|---|
| **Workspace overload** | The LLM session reads so much content during traversal that the context window saturates; later cognitive operations within the same session have degraded performance (the LLM cannot hold all of the content + the inquiry's earlier reasoning simultaneously) | PRIMARY: self-signal frontier-for-re-invocation (per Section 3). SECONDARY: sampling (future PROCESS-layer addition). |
| **Artifact under-specification** | The artifact is too thin for cross-session resume; a new LLM session reading the artifact cannot determine what to re-read (item identifiers missing; concept-names provenance missing; coverage map absent or unclear) | Required minimum fields enforced at Assembly's Output-shaping component: every Traversal Trace entry must have item identifiers; every concept-name must have provenance; the coverage map must be complete for traversed regions. |
| **Workspace-artifact desync** | The artifact claims item X was tagged core, but the workspace LLM lost track due to context drift over time; the artifact and workspace disagree on tags | The Output-shaping component captures per-item tags AT THE MOMENT of tagging during traversal, not retrospectively. The artifact is the authoritative record of what tags were emitted; if the workspace later diverges, the artifact remains canonical. |

**Total LAYER 1 modes after extension:** 4 prior + 3 new = 7.

**LAYER 2 (identity-eroding) modes unchanged:** interpretive-overstep, purpose-loss, self-coupling-to-downstream (3 modes from the prior finding's D9). None of the new operational concerns rise to identity-eroding level — each is recoverable via operational adjustment within the discipline.

### 5. Calibration trajectory + signal split

The prior finding's D10 committed a 3-stage calibration trajectory (bootstrap → early operation → mature operation) + 5 primary self-contained signals (PS1-PS5) + 2 secondary downstream-augmented signals (SS1, SS2).

**The trajectory is preserved unchanged.** The stages describe WHEN signals become trustworthy as sufficient data accumulates; the refinement does not affect WHEN, only WHERE each signal operates.

**The signals split between workspace-level and artifact-level operation:**

| Signal | Operates at | Observation method under the refined output |
|---|---|---|
| **PS1** — coverage of obvious items | WORKSPACE | LLM introspection: query the discipline's session — "did you load the obvious items for this purpose-type?" The session can recall what was read. Cross-session proxy: the artifact's concept-names list — did the obvious items' concept-names appear during traversal? |
| **PS2** — coverage of confirmed-absent regions | ARTIFACT | The artifact's State Summary explicitly lists confirmed-absent regions; re-examination verifies accuracy. |
| **PS3** — internal consistency of relevance tags | ARTIFACT | The artifact's Traversal Trace tags + per-region aggregate tags in State Summary can be checked for internal consistency. |
| **PS4** — coverage of obvious-misses given purpose | WORKSPACE + ARTIFACT (hybrid) | Downstream-naive reviewer asks the discipline's LLM session about content (workspace channel) AND reads the artifact's concept-names list (artifact channel); checks for obvious associations. |
| **PS5** — coverage of edge items via sub/side-to-core ratio | ARTIFACT | Count Traversal Trace entries tagged sub/side vs core; observe ratio. |

**Self-containment preserved.** Primary signals (PS1-PS5) do not require downstream verdicts. The workspace-level signals use LLM introspection; the artifact-level signals use artifact inspection. Secondary signals (SS1 relevance-confidence-vs-downstream-confirmed-relevance frequency; SS2 re-invocation-rate per inquiry) require downstream observation and remain self-contained-augmentation only.

**Phase-state-awareness commitment.** The project is at Stage 1 (Bootstrap; Level 0 autonomy; no calibration data yet). All 5 primary signals are operationally feasible NOW:
- PS1 (LLM introspection): feasible — the LLM can recall what it read.
- PS2 (confirmed-absent re-examination): feasible — the artifact lists these regions.
- PS3 (tag consistency): feasible — automated check on each artifact.
- PS4 (downstream-naive reviewer): feasible — human reviewer at Level 0 autonomy.
- PS5 (tag ratio): feasible — observable per inventory.

## Inherited Commitments Re-test

This finding refines the prior finding (`devdocs/inquiries/2026-05-22_01-25__meaning_surfacing_pure_discipline_clean_design/finding.md` — Surfacing: Pure Discipline Clean Design) and inherits N≥3 commitments from it. Per CONCLUDE's enforcement, each commitment is either RE-TESTED with cited evidence OR explicitly flagged as INHERITED-WITHOUT-RE-TEST with a reason.

The prior finding committed 16 structural decisions in its Sensemaking phase (D1-D16). Pre-classification:

### RE-TESTED commitments

**D3 — 4-level relevance vocabulary (core / sub / side / umbrella).**
- **Source:** Prior finding, Section 3 + Sensemaking D3.
- **Re-test status:** RE-TESTED.
- **Evidence:** Under the refined output, the vocabulary applies at THREE granularities — per-item (workspace), per-trace-entry (artifact PRIMARY), per-region aggregate (artifact DERIVED). The four levels themselves (core / sub / side / umbrella) are unchanged; the multi-granularity application is the refinement. The 4-level vocabulary's structural defensibility (umbrella + 3 distinct subtypes per the prior finding's A1) holds at each granularity. **PASS.**

**D5 — 6 Traversal components (Scope-determination, Item-enumeration/generation, Relevance-attribution, Coverage-tracking, Absence-detection, Output-shaping).**
- **Source:** Prior finding, Section 4 + Sensemaking D5.
- **Re-test status:** RE-TESTED.
- **Evidence:** The 6 components are preserved. **Output-shaping's product refines** — it now shapes the thin artifact (Traversal Trace + State Summary), not a content-bearing inventory. The other 5 components operate as before. **PASS.**

**D6 — 8 load-bearing primitives.**
- **Source:** Prior finding, Section 5 + Sensemaking D6.
- **Re-test status:** RE-TESTED.
- **Evidence:** The 8 primitives are preserved (Attention-pointer, Working Memory, Salience, Intuition-similarity, Context-framing, Inhibition, Metacognition, Focus-deep). The **Working Memory primitive's role is now MORE EXPLICITLY load-bearing** — the workspace IS the substantive product, and Working Memory's HYBRID delegation (LLM context native + explicit scope tagging) is the workspace substrate. The 3 deliberately-absent primitives (Simulation, Evaluation-as-multi-axis-ranking, Motivation) are also unchanged. **PASS.**

**D8 — Asymmetric-failure principle (operational form).**
- **Source:** Prior finding, Section 6 + Sensemaking D8.
- **Re-test status:** RE-TESTED.
- **Evidence:** The principle (territory-bounded + uncertainty-includes) is preserved. **The operational form now applies primarily at workspace level** — the workspace must include relevant content under uncertainty. The workspace-overload mitigation choice (frontier-signal PRIMARY; sampling SECONDARY) preserves the principle (sampling would violate it; frontier-signal preserves it). **PASS.**

**D9 — LAYER 1 / LAYER 2 failure framework.**
- **Source:** Prior finding, Section 6 + Sensemaking D9.
- **Re-test status:** RE-TESTED + EXTENDED.
- **Evidence:** The framework is preserved. **3 new LAYER 1 failure modes added:** workspace overload, artifact under-specification, workspace-artifact desync. Each was tested for layer placement (LAYER 1 not LAYER 2) — each is operational and recoverable, not identity-eroding. **LAYER 2 (identity) failures unchanged:** interpretive-overstep, purpose-loss, self-coupling-to-downstream. **Total LAYER 1 modes after extension:** 7 (4 prior + 3 new). **PASS.**

**D10 — Calibration trajectory + 5 primary self-contained signals + 2 secondary downstream-augmented signals.**
- **Source:** Prior finding, Section 7 + Sensemaking D10.
- **Re-test status:** RE-TESTED.
- **Evidence:** The trajectory (bootstrap → early operation → mature operation) is preserved unchanged. **Signal observation methods refined** — signals now split between workspace-level (PS1, PS4) and artifact-level (PS2, PS3, PS5) operation. All 5 primary signals are operationally feasible at the current project state (Stage 1 Bootstrap). Secondary signals (SS1, SS2) unchanged. **PASS.**

**D11 — Re-invocation as parameterized variation.**
- **Source:** Prior finding, Section 4 + Sensemaking D11.
- **Re-test status:** RE-TESTED.
- **Evidence:** Re-invocation is still a parameterized variation of the same 3-phase operation. **Parameter renamed:** `prior-inventory` → `prior-artifact` (always available) + optional `prior-workspace` (supplied by runner when same-session continues). `refined-sub-purpose` unchanged. **Runner is the session-continuity authority.** **PASS.**

**D12 — Output specification.**
- **Source:** Prior finding, Section 3 + Sensemaking D12.
- **Re-test status:** RE-TESTED + CENTRALLY REFINED.
- **Evidence:** **This IS the refinement target.** The prior commitment to a "relevance-tagged inventory" with items carrying full labeling content (identifier + functional one-line + surface form + optional adjacency facts) is REPLACED by the dual output (workspace + thin artifact). The relevance-tagged-inventory framing is replaced by the workspace-load + thin-artifact framing (the workspace IS the rich product; the artifact is thin per the no-item-content criterion). **NEW COMMITMENT supersedes prior D12 on the output specification.**

### INHERITED-WITHOUT-RE-TEST commitments

**D1 — Discipline name "surfacing."**
- **Source:** Prior finding, Section 1 + Sensemaking D1.
- **Re-test status:** INHERITED-WITHOUT-RE-TEST.
- **Reason:** The output refinement does not affect the discipline's name. The name is identity-substantive, not output-substantive. There is no mechanism by which a refinement to the output specification could change the discipline's name.

**D2 — Mechanism name "relevance-attribution" + 8 structural distinctions vs sensemaking-proper.**
- **Source:** Prior finding, Section 2 + Sensemaking D2.
- **Re-test status:** INHERITED-WITHOUT-RE-TEST.
- **Reason:** The mechanism's per-item operation is preserved unchanged. The output refinement changes WHERE per-item tags are persisted (workspace at per-item granularity + artifact at per-trace-entry granularity), not the mechanism's name, classification, or 8 structural distinctions.

**D4 — 3-phase structural shape + optional Boundary-discovery sub-phase.**
- **Source:** Prior finding, Section 4 + Sensemaking D4.
- **Re-test status:** INHERITED-WITHOUT-RE-TEST.
- **Reason:** The 3-phase shape (Reception → Relevance-attributed Traversal → Assembly) plus optional Boundary-discovery sub-phase is preserved unchanged. The refinement affects Assembly's PRODUCT (lighter; thin artifact), not the phase count or shape.

**D7 — Purposive character (intrinsic).**
- **Source:** Prior finding, Section 1 + Sensemaking D7.
- **Re-test status:** INHERITED-WITHOUT-RE-TEST.
- **Reason:** The discipline is intrinsically purposive (the inquiry's purpose is the relevance-bias source). The output refinement does not affect the purposive character.

**D13 — Core taxonomy placement (pipeline-sequential at the upstream loop step).**
- **Source:** Prior finding, Section 1 + Sensemaking D13.
- **Re-test status:** INHERITED-WITHOUT-RE-TEST.
- **Reason:** The discipline operates pipeline-sequentially at the upstream loop step per `docs/discipline_taxonomy.md` Core admission rule. The output refinement does not change the placement.

**D14 — 8-item intrinsic NOT-list.**
- **Source:** Prior finding, Section 8 + Sensemaking D14.
- **Re-test status:** INHERITED-WITHOUT-RE-TEST.
- **Reason:** The NOT-list items (does not produce stable conceptual structure; does not adjudicate next action; does not generate beyond territory; does not partition; does not evaluate correctness; does not construct interpretive meaning; does not maintain cross-inquiry memory; does not choose own purpose) are all OUTPUT-INDEPENDENT. Each grounds in intrinsic features of the operation (per-item granularity; draw-from-not-create; labeling-not-interpretive; per-invocation-not-cross-inquiry; exogenous-purpose). The output refinement does not touch any item.

**D15 — LBT1 ("relevance" defensible at the inquiry-purpose level).**
- **Source:** Prior finding, Section 2 + Sensemaking D15.
- **Re-test status:** INHERITED-WITHOUT-RE-TEST.
- **Reason:** The relevance concept's defensibility at the inquiry-purpose level is unaffected by the output refinement. The vocabulary (core / sub / side / umbrella) is unchanged; only the granularities at which the vocabulary applies are refined.

**D16 — LBT2 ("sensemaking-LIKE-but-NOT-sensemaking" defensible on 8 structural grounds).**
- **Source:** Prior finding, Section 2 + Sensemaking D16.
- **Re-test status:** INHERITED-WITHOUT-RE-TEST.
- **Reason:** The 8 structural properties distinguishing the relevance-attribution mechanism from sensemaking-proper (operation scope, output shape, temporal positioning, granularity, speed/depth posture, primitive emphasis, failure-mode set, calibration target) are unaffected by the output refinement. The mechanism's per-item operation, output shape (per-item tag), temporal positioning (during traversal), and other properties are all preserved.

### Inheritance summary

- **RE-TESTED:** 8 commitments (D3, D5, D6, D8, D9, D10, D11, D12). All test results: PASS.
- **INHERITED-WITHOUT-RE-TEST:** 8 commitments (D1, D2, D4, D7, D13, D14, D15, D16). All flagged with explicit reason (structurally untouched by the refinement).

The pre-classification respects the disciplines-self-contained principle and avoids the wasteful-scope-expansion failure mode (re-testing every commitment regardless of whether the refinement touches it).

## Next Actions

### MUST

- **What:** Acknowledge whether to proceed with a downstream STRUCTURAL inquiry on the surfacing spec file (informed by both the prior finding + this refinement-finding), or whether the MEANING-layer is sufficient discussion for now.
  - **Who:** The user.
  - **Gate:** Observable — the user signals the next step explicitly.
  - **Why:** The MEANING-layer commitment is now stable (prior finding's identity + mechanism + structural shape + primitives + NOT-list + taxonomy placement, refined per this finding's output specification). The natural next step is STRUCTURAL operationalization; whether to proceed is user-discretion.

### COULD

- **What:** Run a downstream STRUCTURAL inquiry on surfacing's spec file organization, with both findings (prior + this refinement) as input.
  - **Who:** A future `/MVL+` inquiry invoked with a STRUCTURAL Layer Commitment.
  - **Gate:** Observable — the user decides to commit to building the discipline.
  - **Why:** Operationalizes the MEANING-layer commitment into a runnable spec. The STRUCTURAL inquiry would commit the spec's section organization, the precise Process Model step granularity, the Telemetry list, the Frontier-section structure, the Progression versioning, and the new failure modes' integration with the failure-modes section.
  - **Depends-on:** MUST item "Acknowledge whether to proceed." This COULD is GATED — do not act until the MUST resolves.

- **What:** Run a downstream PROCESS inquiry on the sampling parameter + session-continuity protocol details.
  - **Who:** A future `/MVL+` inquiry invoked with a PROCESS Layer Commitment.
  - **Gate:** Condition-bound — when surfacing is being implemented as a callable skill AND the user wants to commit the sampling parameter or formalize the session-continuity protocol.
  - **Why:** Operationalizes the SECONDARY workspace-overload mitigation (sampling) + the runner-vs-discipline session-continuity protocol detail. These were deferred at MEANING-layer scope.
  - **Depends-on:** MUST item "Acknowledge whether to proceed." This COULD is GATED — do not act until the MUST resolves.

- **What:** Begin Tier-1 calibration measurements at the current bootstrap stage (PS1-PS5 per Section 5 above).
  - **Who:** A future small materialization run (per `docs/materialization_lifecycle.md` — the materialization lifecycle).
  - **Gate:** Condition-bound — when surfacing is being invoked in actual inquiries (the calibration data accumulates with use).
  - **Why:** PS1-PS5 are operational at bootstrap; beginning the measurements now produces baseline data for the early-operation stage's transition.
  - **Depends-on:** MUST item "Acknowledge whether to proceed." This COULD is GATED — do not act until the MUST resolves.

### DEFERRED

- **What:** Operationalize the secondary calibration signals (SS1, SS2) at mature operation.
  - **Gate:** Condition-bound — when surfacing has been invoked in 30+ inquiries per purpose-type, per the N≥30 threshold from `docs/thinking_space_dynamics.md`.
  - **Why if revived:** Mature operation introduces the secondary signals as refinement of the primary calibration.

- **What:** Specify the broader pattern (artifact-vs-workspace as a design principle for cognitive disciplines whose work-product lives partly in the LLM session).
  - **Gate:** Condition-bound — when another cognitive discipline (e.g., comprehend) is being characterized and shows the same dual-output structure.
  - **Why if revived:** Would establish the dual-output pattern as a general design principle, enabling reuse across disciplines.

- **What:** Specify the multi-head architecture coordination for parallel surfacing instances.
  - **Gate:** Condition-bound — when the meta-loop reaches Level 4 autonomy per `docs/autonomy_ladder.md` (the meta-loop autonomy ladder).
  - **Why if revived:** Multi-head loops need per-head surfacing coordination; this refinement does not specify the coordination details.

## Reasoning

### Why this refinement over alternatives

The user's correction was specific and operationally grounded: "by no means we expect output to be fully relevant content. thats crazy and weird and inefficient. surfacing's job is to traverse relevant parts and read them, so llm will have that context in it's mind." The refinement operationalizes this correction as a dual-output commitment + minimum cascading adjustments.

Two CONTRARIAN-RETHINK Inversion-candidates were generated + rejected on structural grounds during Innovation:

**Inversion 1 (at Section 1 — Dual Output): "What if there is NO artifact at all; the LLM workspace IS the only output?"**

REJECTED on three grounds:
- Cross-session resume is structurally required by the project's `_state.md`-based folder architecture (per `docs/runtime_environment/folder_based.md`). Without a persistent artifact, a new LLM session resuming the inquiry has no input from surfacing; downstream operations cannot proceed.
- The runner's contract supports cross-session resume; eliminating the artifact would invalidate the runner's contract.
- Domain Transfer (importing from operating-system process trace patterns — every process produces a persistent trace, not just runtime state) confirms the artifact is necessary.

**Inversion 2 (at Inherited Commitments Re-test): "What if ALL 16 prior commitments should be RE-TESTED rather than 8?"**

REJECTED on three grounds:
- Re-testing unrelated commitments is wasteful — it produces a finding that artificially re-derives commitments already settled by the prior inquiry.
- The 8 INHERITED-WITHOUT-RE-TEST commitments (D1, D2, D4, D7, D13, D14, D15, D16) are STRUCTURALLY UNTOUCHED by the output refinement; there is no mechanism by which the refinement could affect e.g., the discipline's name or the 8-item NOT-list.
- The CONCLUDE protocol's `## Inherited Commitments Re-test` section's intentional friction (`INHERITED-WITHOUT-RE-TEST` with reason) is FOR commitments where the refinement leaves the commitment alone; misusing the friction for all 16 defeats its purpose.

### What survived (the 7 candidate pieces from Innovation + the assembled refinement)

All 7 pieces (P1-P7) plus the composite refinement-finding survived Critique's adversarial testing on 14 dimensions — 4 CRITICAL + 8 HIGH + 2 MEDIUM. No piece was killed. No piece was sent back for refinement. The convergence was clean.

### Compatibility with prior finding's preserved commitments

The compatibility audit confirmed: 13 of 16 prior commitments are preserved unchanged; 3 are refined (D3 + D6 + D8 + D9 extended); 1 is centrally refined (D12); 2 receive minor refinement (D10 + D11). The refinement is targeted, not destabilizing.

The anti-coupling check (searching the refinement-finding for current `/explore`'s distinctive vocabulary: "labels-vs-anchors," "scan-signal-probe," "confidence-tagged map," "Form-(i)/(ii)," "Completeness-before-novelty," "§3.1 mode-determination," "§4.4 labeling-vs-meaning heuristic") found zero matches. The refinement-finding uses its own vocabulary: workspace, artifact, traversal trace, state summary, concept-names, coverage map, frontier flags, workspace-populated, prior-artifact, prior-workspace, frontier-signal, workspace overload, artifact under-specification, workspace-artifact desync. Independence from current `/explore` is preserved.

### How the conclusion holds

The refinement holds because:

1. **The dual-output framing operationalizes the user's correction precisely.** Workspace = substantive product (rich; LLM in-context); artifact = navigation/handoff product (thin; cross-session-sufficient). No item content in the artifact; item content in the workspace.

2. **The artifact's two-sub-section structure (Traversal Trace + State Summary) serves different downstream needs.** Trace = fine-grained chronological (for cross-session re-read decisions); Summary = coarse-grained aggregate (for quick lookup).

3. **The three-granularity vocabulary application is structurally sound.** Per-item (workspace) + per-trace-entry (artifact PRIMARY) + per-region aggregate (artifact DERIVED) correspond — each level is derivable from the level above.

4. **The workspace-overload mitigation choice preserves the asymmetric-failure principle.** Frontier-signal PRIMARY (preserves principle); sampling SECONDARY (would violate principle; reserved for future PROCESS-layer permission).

5. **The runner-vs-discipline ownership of session continuity reflects operational reality.** The discipline populates the workspace; the runner manages the session's lifecycle.

6. **The 3 new LAYER 1 failure modes correctly fit LAYER 1 (operational), not LAYER 2 (identity-eroding).** Each is recoverable via operational adjustment; none redefines what surfacing IS.

7. **The calibration trajectory is preserved while signal observation methods refine.** The trajectory describes WHEN; the signal split describes WHERE — orthogonal axes.

8. **The 8/8 Inherited Commitments split is structurally defensible.** Each preserved commitment is named with a specific reason (output-independence); each RE-TESTED commitment has a test result (all PASS).

## Open Questions

### Monitoring

- **Will the per-trace-entry granularity (artifact's PRIMARY granularity) prove operationally sufficient for cross-session resume in practice?** Observable across the next 5-10 cross-session inquiries that use surfacing. If new LLM sessions consistently struggle to re-read items from the trace alone, the granularity may need refinement (e.g., more metadata per entry).

- **Will the workspace-overload mitigation (frontier-signal PRIMARY) actually fire frequently enough to prevent context saturation, or will it under-fire (allowing saturation to occur)?** Observable in inquiries with large territories. If saturation occurs despite frontier-signal mitigation, the discipline may need a coverage-budget parameter or sampling permission.

- **Will the workspace-artifact desync failure mode actually occur in practice, or is it a theoretical concern?** Observable as the discipline operates. If the LLM's context drift causes desync, the capture-at-moment-of-tagging mitigation may need tightening (e.g., per-step artifact updates rather than at-Assembly aggregation).

### Blocked

- **The spec section organization for the new dual-output structure** is blocked on a downstream STRUCTURAL inquiry.

- **The sampling parameter's specification** is blocked on a downstream PROCESS inquiry + operating data revealing whether sampling is genuinely needed.

- **The decision to rename current `/explore` to `/surfacing`** is unchanged from the prior finding — still blocked on a downstream STRUCTURAL inquiry producing a spec the user can compare against current `/explore`.

### Research Frontiers

- **The broader pattern: artifact-vs-workspace as a design principle.** Does every cognitive discipline that reads content during its operation produce a dual workspace + artifact output? Maybe (comprehend would be a natural test case); maybe not (some disciplines like decompose may not need a workspace component because their work-product is purely structural). A future inquiry could test this.

- **The relationship between surfacing's workspace and consciousness-gradient indicators.** Per `docs/desc.md`, consciousness-gradient indicators (spontaneous attention, intrinsic curiosity) operate on workspace content. Surfacing's quality investment in the workspace is therefore load-bearing for the project's end-goal. The detailed role + impact is a research frontier.

### Refinement Triggers

- **Re-open the dual-output commitment** if a future inquiry surfaces an operational case where the workspace + thin artifact is insufficient (e.g., a disciplinary need that the artifact's metadata doesn't support).

- **Re-open the per-trace-entry granularity** if cross-session resume in practice requires more metadata per entry. Observable across 5-10 cross-session inquiries.

- **Re-open the workspace-overload mitigation** if frontier-signal under-fires in practice (saturation occurs despite the mitigation). Observable across inquiries with large territories.

- **Re-open the calibration signal split** if a future inquiry shows that workspace-level signals are unreliable due to LLM introspection imperfection. Observable when calibration data accumulates at mature operation.

## Source Input

<details>
<summary>Raw user input for this refinement</summary>

```text
/MVL+

in devdocs/inquiries/2026-05-22_01-25__meaning_surfacing_pure_discipline_clean_design/finding.md

u said

It produces a relevance-tagged inventory — items with labeling content (identifier + functional one-line + surface form + optional adjacency facts) and a relevance tag at the 4 levels, plus confirmed-absent regions (a productive output, not a gap), plus a coverage map, plus frontier flags for re-invocation. Output is markdown by default; a typed-record schema is a forward-tied addition activated when downstream automation consumers exist.


yes there will be output of surfacing, but by no means we expect output to be fully relevant content. thats crazy and weird and inefficient

surfacing's job is to traverse relevant parts and read them, so llm will have that context in it's mind.

and output might be how this traverse happens and concept names that discovered during surfacing maybe ?
```

</details>
