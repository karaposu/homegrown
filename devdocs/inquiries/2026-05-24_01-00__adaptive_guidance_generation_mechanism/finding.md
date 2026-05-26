---
status: active
model: claude-opus-4-7[1m]
effort: unknown
impacted_by:
  - devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md
---
# Finding: adaptive guidance generation mechanism

## Question

**From `_branch.md`:** What is the generation mechanism for routeman's adaptive guidance pointers (procedural steps + input-to-pointer mapping + mode-selection + budgeting), AND what is the WHY-anchor source (which file-content material grounds each pointer's WHY, single-source or multi-source), such that routeman's prescriptive-extension layer becomes implementable AND the LAYER-2 Prescriptive-Without-Cycle-Context mode becomes detectable rather than silently violated?

The user invoked this inquiry on Question 3 from the routeman frontier-questions finding (`devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md`) with the instruction "run full loop on this." Q3 was Tier-1: the adaptive-guidance feature is the load-bearing prescriptive residual that distinguishes routeman from descriptive-labeling siblings, and without a generation mechanism + WHY-anchor source, the LAYER-2 mode "Prescriptive-Without-Cycle-Context" silently fires.

For context: `routeman` is the renamed `/navigation` discipline. Per the design memo (`devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`), routeman emits per-Route adaptive guidance — Guidance Mode (`none` / `compact` / `full` / `expand-on-selection`) plus Guidance Pointers (short actionable recommendations, each with a per-pointer WHY). The mechanism was unspecified. The 16-31 correction bounded the WHY-anchor source to file-content (no in-context-pass). The 18-58 staged-mapping inquiry added a per-Route `why_this_might_be_important` meta-reasoning field as a 5th WHY-anchor candidate. This inquiry resolves the mechanism + source decision.

---

## Finding Summary

- **The mechanism is two-stage anchor-then-refine.** Stage 1 (deterministic per-movement-type anchor identification) reads cycle-output files via routeman's existing scan, identifies candidate WHY-anchors per Route using a per-type priority chain, and falls back gracefully when sources are absent. Stage 2 (LLM-judgment refinement) generates the pointer text + WHY text from Stage 1's anchors, respecting the design memo's style (short imperative + conjunctive "bc..." WHY) and per-mode pointer-count budget.

- **The WHY-anchor source is multi-source with per-movement-type priority.** Five candidate sources were considered (critique verdicts; sensemaking anchors; telemetry; /reflect observations when present; per-Route meta-reasoning field from `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md`). The committed priority chain assigns primary + fallback sources per movement type: DEEPEN ← critique SURVIVE + sensemaking Key-Insights → meta-reasoning; REFINE ← critique REFINE + sensemaking Ambiguity-Collapse → meta-reasoning; PURSUE-SEED ← critique KILL-with-seed + telemetry → meta-reasoning; INVESTIGATE-FRONTIER ← sensemaking Constraints + finding Open-Questions → meta-reasoning; REVISIT ← prior-cycle critique + cross-cycle meta-reasoning; other types ← critique + sensemaking → meta-reasoning. /reflect observations are integrated when present (additive). /intuit hunch projection deferred until /intuit Phase β ships.

- **The audit substrate makes the LAYER-2 mode detectable by construction.** The WHY field carries a human-readable file-path-and-section reference in the format `bc per <path> §<section> <reason>`. Stage 1 enforces that every pointer has a resolvable anchor; if no anchor resolves through the fallback chain, the pointer is dropped-with-reason and the Route's mode degrades to `none` with rationale logged. One audit substrate (A1 file-path-in-WHY-text + A3 drop-with-reason at generation) covers three LAYER-2 modes: Prescriptive-Without-Cycle-Context, Rename-Renders-Itself-Cosmetic, and filler-meta-reasoning (from 18-58).

- **Mode-selection adopts the design memo's convention verbatim plus one override.** MS1 (HIGH/risky/blocked/near-action → compact or full; MEDIUM → compact; LOW → none or compact; selected → full or expand-on-selection) is inherited unchanged. MS5 adds a per-mode override: when a Route's `meta_reasoning_revision_history` (per `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md`'s schema) shows ≥2 prior recalibrations, the mode is overridden to `expand-on-selection` (defer guidance to selection moment when latest context is available). The ≥2 threshold is labeled calibratable.

- **Cycle-output-absent is handled via graceful fallback.** When primary anchor source for a Route is absent (e.g., `critique.md` not yet written for an in-progress inquiry), Stage 1 walks the fallback chain (W1 critique → W2 sensemaking → W5 meta-reasoning → `none` mode). The fallback decision is logged per Route. This lets routeman emit a Route Map even on inquiries that haven't reached Critique yet, with `none` mode being the explicit signal that "no anchors are available for this Route at this time."

- **Stage 1 uses batch-mode I/O optimization for typical inquiry sizes.** When the inquiry has ≥4 Routes, Stage 1 reads each cycle-output file once and indexes anchors by movement type, then iterates Routes querying the index. For very small inquiries (≤3 Routes), per-Route reading is acceptable. The performance commitment is O(N+M) where N=Routes and M=cycle-output-files.

- **The design is heavily DERIVED FROM and CONSTRAINED BY priors, not arbitrary.** The two-stage mechanism shape is DERIVED FROM the LAYER-2 mode's recognition signal ("pointers without anchored WHYs") — the substrate is the mode's operational form. The mode-allocation convention (MS1) is CONSTRAINED BY the design memo. The file-mediated source is CONSTRAINED BY `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md`. The meta-reasoning field's inclusion (W5) is CONSTRAINED BY 18-58. The user-language alignment (conjunctive "bc..." WHY format) is DERIVED FROM the LLM-operational-design principle (now at N=4 evidence). Recording these derivations in the spec prevents future inquiries from treating the design as a free choice.

- **Question 3 from the frontier-questions finding is RESOLVED-WITH-DESIGN.** Routeman's prescriptive-extension layer becomes IMPLEMENTABLE. The LAYER-2 Prescriptive-Without-Cycle-Context mode + Rename-Renders-Itself-Cosmetic mode + filler-meta-reasoning mode (from 18-58) all become DETECTABLE via one substrate.

- **4 new frontier flags remain open** for follow-up (SKILL.md authoring or further design work): NEW-FF-1 (exact per-movement-type parsing rules for `critique.md`/`sensemaking.md`/meta-reasoning field, including the multi-type Route edge case); NEW-FF-2 (exact Stage 2 LLM template); NEW-FF-3 (A2 structured substructure elevation and A4 type-coherence check if audit infrastructure demands); NEW-FF-4 (MS3 autonomy-axis mode-selection extension; MS2 complexity-axis; MS4 selection-probability-axis; the anchor-count-secondary-signal seed from P4-C kill). Plus 2 carried-forward FFs (FF-7 /intuit M4 projection when Phase β ships; FF-8 /reflect W4 integration shape when /reflect coupling lands).

---

## Finding

A short orientation before the design. The inquiry's question came in as Q3 from the routeman frontier-questions finding — the question about how routeman generates adaptive guidance pointers and what anchors each pointer's WHY. The frontier-questions finding's source-question named 4 candidate mechanism shapes (cycle-output-derivation rule; LLM-direct with template; /intuit-hunch projection; hybrid) and 4 candidate WHY-anchor sources (critique verdicts; sensemaking anchors; telemetry; /reflect observations). The 18-58 staged-mapping inquiry added a 5th WHY-anchor candidate (the per-Route meta-reasoning field) and noted that Q3's resolution path now includes "use the meta-reasoning field as anchor source."

Surfacing expanded the option space (6 mechanism shapes including 2 newly-surfaced: M6 two-stage anchor-then-refine; M7 mandatory-source-citation; plus 4 candidate audit substrates A1-A4). Sensemaking's central insight collapsed the 6×5×4 candidate space: **the LAYER-2 audit's recognition signal IS the design constraint.** The mode "Prescriptive-Without-Cycle-Context" fires on "pointers without anchored WHYs," so the mechanism must make un-anchored pointers impossible by construction. That filter eliminated mechanisms that allow LLM-judgment to invent anchors (M2 alone, M3 alone, single-stage variants) and elevated mechanisms with deterministic anchor identification + enforcement (M6 two-stage). The rest of the design follows from this central insight plus the inherited commitments.

### 1. Stage 1 mechanism — deterministic anchor identification

Stage 1 runs once per Route during routeman's enumeration. For each Route it:

1. Receives the Route record (movement_type, priority, status, meta_reasoning_field) plus the selected mode (from Mode Selection).
2. Looks up the per-movement-type rule (see §2).
3. Iterates source files in the per-type priority order, searching for content matching the rule (e.g., DEEPEN looks for SURVIVE verdicts in `critique.md`; INVESTIGATE-FRONTIER looks for Constraints / Key-Insights in `sensemaking.md`).
4. When a match is found, emits a candidate anchor record `{anchor_text_excerpt, source_path, source_section}`.
5. When no match is found at the current priority, falls back to the next source in the chain.
6. When all sources are exhausted, logs a drop-with-reason and forces the Route's mode to `none` with rationale.
7. Outputs the list of anchor records per Route, plus the (possibly overridden) mode.

**Batch-mode I/O optimization (default for typical inquiry sizes; per-Route reading acceptable for ≤3 Routes):** Stage 1 reads each cycle-output file once at the start, indexes anchors by movement type, then iterates Routes querying the index. Performance: O(N+M) where N=Routes and M=cycle-output-files. For very small inquiries the constant factors dominate and per-Route reading is fine.

**Drop-with-reason enforcement** is the mechanism's correctness guarantee. When Stage 1 cannot find a resolvable anchor for a Route after walking the fallback chain, the drop is LOGGED (rationale specifies which sources were tried and why each failed) and the Route's mode is downgraded to `none`. This makes the LAYER-2 mode detectable: a high frequency of `none`-mode fallbacks across invocations signals either un-mature inquiries (acceptable; cycle hasn't matured to support guidance) or a structural problem in upstream cycle-output (worth investigating).

### 2. Per-movement-type input-to-pointer mapping

For each of the 16 movement types in routeman's taxonomy, Stage 1 uses this priority chain:

| Movement type | Primary sources | Fallback |
|---|---|---|
| **DEEPEN** | critique SURVIVE verdicts + sensemaking Key-Insights / Constraints | meta-reasoning field |
| **REFINE** | critique REFINE verdicts + sensemaking Ambiguity-Collapse entries | meta-reasoning field |
| **PURSUE-SEED** | critique KILL-with-seed + telemetry coverage-gap signals | meta-reasoning field |
| **INVESTIGATE-FRONTIER** | sensemaking Constraints / Key-Insights + finding Open-Questions / Research-Frontiers | meta-reasoning field |
| **REVISIT (RESURRECT / INVALIDATE / REVERT)** | prior-cycle critique verdicts + cross-cycle meta-reasoning | meta-reasoning field |
| **Other types** (WIDEN, DEVELOP, DIFFERENT-APPROACH, DIAGNOSE, RE-RUN DEEPER, REFRAME, UNBLOCK, MERGE, TEST, CONSOLIDATE, TERMINATE) | critique + sensemaking | meta-reasoning field |
| **All types** (when present) | /reflect observations are integrated additively when /reflect ran before routeman | n/a (additive only) |

The exact parsing rules for each source file's content (how Stage 1 identifies a SURVIVE verdict in `critique.md`; how it identifies a Key-Insight in `sensemaking.md`) are deferred to NEW-FF-1 (SKILL.md authoring decision). The multi-type Route edge case (a Route serving multiple movement types) is also deferred to NEW-FF-1.

*[2026-05-24: per `devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md`, the 16 movement types now have a named Movement Family categorization (Progression Moves / Re-orientation Moves / Coordination Moves). The per-movement-type rules above can be re-presented as per-family rules at SKILL.md authoring time — Progression Moves (DEEPEN, REFINE, PURSUE-SEED, INVESTIGATE-FRONTIER, DEVELOP, TERMINATE) tend to anchor to critique verdicts + sensemaking anchors; Re-orientation Moves (RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT-APPROACH, DIAGNOSE) follow a similar critique + sensemaking pattern; Coordination Moves (REVISIT, UNBLOCK, MERGE, TEST, CONSOLIDATE) anchor to prior-cycle critique + cross-cycle meta-reasoning. Re-presentation reduces the SKILL.md per-type rule list to ~3 family-level rules with per-type refinements, without changing the runtime mechanism. The above per-type table remains the authoritative specification; the family-level form is a SKILL.md presentation option.]*

### 3. Stage 2 mechanism — LLM-judgment refinement

Stage 2 receives Stage 1's anchor records + the selected mode per Route, then:

1. If mode is `none`, emits an empty Guidance Pointer list (zero pointers).
2. Otherwise, computes the pointer-count budget (`compact`=1-2; `full`=3-5; `expand-on-selection`=1 statement of what would be expanded).
3. For each anchor (up to the budget), applies an LLM template that generates:
   - A short imperative pointer text ("Check against actual SIC/MVL runs"; "Try domain transfer from manufacturing"; "Watch for the trap where X masks Y" — style from the design memo).
   - A WHY text containing a file-path-and-section reference in the format: `bc <reason> per <source_path> §<source_section>` (the per-pointer reason in conjunctive "bc..." shorthand, followed by the cycle-output citation).
4. For `expand-on-selection` mode, generates a one-line statement of what would be expanded if the Route is selected.
5. When Stage 1's anchor count exceeds the mode's budget, ranks the anchors and drops the surplus with reason logged. The ranking rule (first-ship default; calibratable per practice at SKILL.md authoring): priority order from §2 > specificity (anchor citing specific section > anchor citing whole file) > recency (current cycle > prior cycle, for REVISIT).
6. Outputs Guidance Pointer records `{pointer_text, why_text_with_citation}` per Route.

The exact LLM template (prompt structure) is deferred to NEW-FF-2 (SKILL.md authoring decision).

### 4. Audit substrate

The audit substrate is the operational form of the LAYER-2 modes' recognition signal. Two components:

**A1 — file-path-and-section citation in WHY text.** Every WHY contains a substring matching the pattern `per <relative_path> §<section_identifier>`. The audit parses this via regex; the citation must resolve to actual content in the cited file's cited section. The design memo style (conjunctive "bc..." WHY) accommodates the citation naturally: "bc real-usage testing is the bottleneck per `devdocs/inquiries/X/critique.md` §Phase 3 the SURVIVE verdict on Q5 identifies this as load-bearing."

**A3 — drop-with-reason enforcement at generation time.** Stage 1 enforces that every pointer has a resolvable anchor before it reaches Stage 2; if no anchor resolves through the fallback chain, the pointer is dropped and the Route's mode degrades to `none`. Stage 2 enforces that the LLM's generated WHY text contains the A1 citation; if the LLM fails to embed it, a single re-prompt is attempted, then the pointer is dropped with reason.

**LAYER-2 detectability statement.** One audit substrate (A1+A3) covers three LAYER-2 modes:

- **Prescriptive-Without-Cycle-Context** (from design memo): detected when WHY text lacks parseable file-path reference or reference doesn't resolve.
- **Rename-Renders-Itself-Cosmetic** (from design memo): detected when ≥50% of Routes have empty Guidance Pointers OR all WHYs lack A1 citations across 5 consecutive invocations.
- **filler-meta-reasoning** (from 18-58): detected when meta-reasoning field content consistently fails to anchor downstream Stage 1 (high frequency of "W5 unresolved" drop-reasons across invocations).

**Derivation note.** The A1+A3 substrate is DERIVED FROM the LAYER-2 Prescriptive-Without-Cycle-Context mode's recognition signal — the substrate IS the mode's operational form. Without this enforcement, the mode is documentation-only; with it, the mode fires automatically when pointers fail anchor-grounding.

**Deferred elevations.** A2 (structured substructure in WHY field beyond the file-path text) and A4 (type-coherence check between pointer movement-type and anchor source-type) are CANDIDATES for NEW-FF-3, to be elevated at SKILL.md authoring if the audit infrastructure demands machine-parseable input or if observed pointer-type/anchor-type misalignment occurs.

### 5. Mode-selection

Mode-selection runs per Route before Stage 1 (so Stage 1 knows whether to skip anchor identification for `none`-mode Routes).

**MS1 — design memo convention, cited verbatim:**
- HIGH-priority / risky / blocked / near-action routes → `compact` or `full`
- MEDIUM open/deferred routes → `compact`
- LOW or deferred-for-memory routes → `none` or `compact`
- selected route → `full` or `expand-on-selection`

**MS5 — per-mode override on multi-recalibration.** When a Route's `meta_reasoning_revision_history` (per `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md`'s schema extensions) shows ≥2 prior recalibrations, override MS1's selection to `expand-on-selection` (defer guidance to selection moment when latest context is available). The ≥2 threshold is **calibratable** at SKILL.md authoring; revival trigger = observed override-rate mismatch (if MS5 fires too often or too rarely, recalibrate).

**Derivation note.** MS1's verbatim adoption is CONSTRAINED BY the design memo's mode-allocation convention; this inquiry preserves rather than redesigns. The MS5 override is the only added rule and is rooted in the persistence inquiry's revision-history field.

**Deferred extensions (NEW-FF-4):**
- MS2 (complexity-of-derivation axis) — escalate to `expand-on-selection` for routes whose anchors require deep cross-cycle context.
- MS3 (autonomy-level axis from `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md`'s autonomy register) — at L0, more conservative mode-selection; at L2+, more aggressive.
- MS4 (selection-probability axis) — Routes likely to be selected get `full`; others get `compact`.
- Anchor-count-secondary-signal (P4-C kill seed) — override MS1 when Stage 1's anchor count grossly mismatches mode budget.

### 6. Boundaries and integration

The mechanism operates within routeman's existing isolated-session + file-scanning architecture (no new I/O primitive; no new sidecar file). It reads existing inquiry artifacts that routeman already scans (`critique.md`, `sensemaking.md`, finding-level sections, the per-Route meta-reasoning field from 18-58's schema, the `meta_reasoning_revision_history` from 24-00's schema extensions). It writes pointers into the Route Map's per-Route Adaptive Guidance group (Guidance Mode + Guidance Pointers) per canonical /navigation's route-card schema unchanged.

The mechanism integrates with adjacent inquiries:
- **Persistence model (24-00):** On re-invocation, the persistence model's recalibration semantics extend to adaptive-guidance pointers — Stage 1 + Stage 2 RE-GENERATE pointers when inputs have changed (new critique.md content; updated sensemaking anchors). The persistence model's `_navig.md` ledger tracks the regeneration.
- **Autonomy register (24-40):** MS3 (autonomy-axis mode-selection) is deferred to NEW-FF-4; the register's substrate is available when needed, and the deferred candidate can read `current_level` to inform mode-selection.
- **Staged mapping (18-58):** Stage 2 (sub-route) Routes have finer-grained anchors than Stage 1 (parent) Routes — sub-route pointers may cite specific critique-entries while parent pointers cite critique-clusters. Anchor-granularity scales with Route granularity.

### 7. Frontier flags (residual opens)

Four new flags from this inquiry + two carried-forward:

- **NEW-FF-1 — Stage 1 parsing rules.** Exact per-movement-type parsing of `critique.md` Phase 3 verdicts, `sensemaking.md` Phase 1 anchors and Phase 3 ambiguity-collapse entries, and the meta-reasoning field. Includes the multi-type Route edge case (Route serving multiple movement types). Downstream consumer: SKILL.md authoring. Revival trigger: when SKILL.md is written.

- **NEW-FF-2 — Stage 2 LLM template.** Exact prompt structure for LLM-judgment refinement (per-Route prompt vs per-anchor prompt; examples vs no examples; explicit drop-instructions vs implicit). Downstream consumer: SKILL.md authoring. Revival trigger: same as NEW-FF-1.

- **NEW-FF-3 — A2/A4 audit-substrate elevation.** A2 (structured substructure beyond file-path text in WHY) and A4 (type-coherence check between pointer movement-type and anchor source-type). Downstream consumer: SKILL.md authoring OR audit-infrastructure follow-up inquiry. Revival trigger: when audit infrastructure demands machine-parseable input OR observed pointer-type/anchor-type misalignment in practice.

- **NEW-FF-4 — Mode-selection extensions.** MS2 (complexity-of-derivation axis); MS3 (autonomy-level axis using `docs/autonomy_level.md` from 24-40); MS4 (selection-probability axis); anchor-count-secondary-signal (override MS1 when Stage 1 anchor count grossly mismatches mode budget — the P4-C kill seed). Downstream consumer: follow-up inquiry on mode-selection refinement. Revival trigger: when mode-selection extension becomes load-bearing in practice.

- **FF-7 (carried forward) — /intuit M4 hunch projection.** Revival when /intuit Phase β ships and hunches become available as file-mediated input.

- **FF-8 (carried forward) — /reflect W4 integration shape.** Revival when /reflect coupling spec lands; the mechanism is already W4-receptive (additive integration noted in §2 mapping table).

### 8. Deferred candidates and KILL-with-seed entries

Three KILL-with-seeds preserve alternatives for revival:
- **P3-F A2-lite structured prefix in WHY text** — DEFERRED to NEW-FF-3 (currently conflicts with design memo style commitment).
- **P3-C post-generation audit pass** — DEFERRED with revival trigger (complement to generation-time enforcement if generation-time proves insufficient in practice).
- **P4-C anchor-count-driven mode-selection** — KILL-with-seed; preserved as secondary signal candidate for NEW-FF-4.

Plus alternative shapes preserved as research-frontier seeds:
- **P1-C alternative shapes (REORGANIZE / ADD-TEST / REMOVE)** — KILL with seeds; each preserved for a different-architecture or test-only follow-up.
- **P2-C single-stage mechanism** — KILL with seed; preserved as simpler-mechanism candidate if Stage 1 auditability turns out to be unneeded.

---

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger listing 7 prior outputs + canonical /navigation. Each commitment is re-tested below. The P6-C bidirectional check (priors-shape-adoption) applies precise language: DERIVED-FROM (prior directly created the design choice); CONSTRAINED-BY (prior bounded but didn't determine); INFORMED-BY (prior contributed but didn't force).

### From `devdocs/inquiries/2026-05-23_11-30__navigation_surfacing_territory_dependency_recheck/finding.md`

- **Commitment:** Routeman is a cycle-consumer; depending on someone's output ≠ being a configuration of them.
- **Re-test status:** RE-TESTED.
- **Evidence:** Stage 1 reads cycle-output as input; the read is consumer-shaped (same framing as the autonomy-register read in 24-40). Bidirectional: adoption SURVIVES this commitment unchanged.

### From `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`

- **Commitment:** Adaptive-guidance feature definition (per-Route prescriptive content with Guidance Mode + Guidance Pointers + per-pointer WHY).
- **Re-test status:** RE-TESTED + IMPLEMENTED.
- **Evidence:** The design memo defines the feature; this inquiry's two-stage mechanism implements it. The feature's substance is unchanged. Bidirectional: adoption is DERIVED FROM this feature definition.

- **Commitment:** Mode definitions + per-mode budgets + mode-allocation convention.
- **Re-test status:** RE-TESTED — INHERITED VERBATIM.
- **Evidence:** Modes (`none`/`compact`/`full`/`expand-on-selection`) and budgets (0/1-2/3-5/deferred) inherited unchanged. MS1 convention preserved verbatim. Bidirectional: adoption is CONSTRAINED BY the mode-allocation convention.

- **Commitment:** LAYER-2 Prescriptive-Without-Cycle-Context mode.
- **Re-test status:** RE-TESTED + MADE DETECTABLE.
- **Evidence:** The mode's recognition signal ("pointers without anchored WHYs") was previously documentation-only; A1+A3 substrate makes it operational. Bidirectional: A1+A3 is DERIVED FROM this mode's recognition signal — the substrate IS the mode's operational form.

- **Commitment:** LAYER-2 Rename-Renders-Itself-Cosmetic mode.
- **Re-test status:** RE-TESTED + MADE DETECTABLE.
- **Evidence:** Same A1+A3 substrate covers this mode (detected when ≥50% of Routes have empty Guidance Pointers OR all WHYs lack A1 citations across 5 consecutive invocations).

### From `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md`

- **Commitment:** Question 3 (adaptive-guidance generation mechanism + WHY-anchor source) as Tier-1 frontier.
- **Re-test status:** RE-TESTED — RESOLVED-WITH-DESIGN.
- **Evidence:** This inquiry is the resolution. Q3 in the frontier-questions finding should be marked RESOLVED-WITH-DESIGN with a link to this finding (CONCLUDE-side cross-doc impact).

### From `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md`

- **Commitment:** Isolated-session + file-scanning architecture; in-context-pass off the table.
- **Re-test status:** RE-TESTED.
- **Evidence:** All WHY-anchor sources are file-content. Stage 1 reads files via routeman's existing scan; no new I/O primitive. Bidirectional: adoption is CONSTRAINED BY this architecture — it eliminated in-context-pass options for WHY-anchor sources.

### From `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md`

- **Commitment:** Per-Route `why_this_might_be_important` meta-reasoning field (required + length-bounded).
- **Re-test status:** RE-TESTED + INTEGRATED.
- **Evidence:** The field is W5 in the multi-source priority chain (fallback for most movement types; cross-cycle anchor for REVISIT). Bidirectional: W5's inclusion is CONSTRAINED BY this commitment — the field exists, so the mechanism uses it.

- **Commitment:** LAYER-2 filler-meta-reasoning mode.
- **Re-test status:** RE-TESTED + MADE DETECTABLE.
- **Evidence:** Same A1+A3 substrate covers this mode (detected via high frequency of "W5 unresolved" drop-reasons across invocations).

- **Commitment:** LLM-operational-characteristics-as-design-input principle.
- **Re-test status:** RE-TESTED + APPLIED.
- **Evidence:** The user-language-aligned conjunctive WHY format ("bc...") preserves the design memo's style; the principle is applied to this inquiry's mechanism design. The principle is now at N=4 evidence (18-58 originated; 24-00 hybrid-naming; 24-40 register-naming; this inquiry's pointer-style preservation). Bidirectional: adoption is DERIVED FROM this principle.

### From `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md`

- **Commitment:** Hybrid placement-by-scope + persistence model.
- **Re-test status:** RE-TESTED + INTEGRATED.
- **Evidence:** No new sidecar; mechanism operates within existing file-scan. The persistence model's recalibration semantics extend naturally to adaptive-guidance pointers (regenerate when inputs change). Bidirectional: INFORMED-BY (the persistence model made cross-invocation regeneration a coherent concept).

- **Commitment:** The `meta_reasoning_revision_history` field (FF-2 candidate from 24-00 schema extensions).
- **Re-test status:** RE-TESTED + USED.
- **Evidence:** MS5 (per-mode override) reads this field to detect multi-recalibration. The schema extension's purpose is now load-bearing.

### From `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md`

- **Commitment:** Autonomy register at `docs/autonomy_level.md` with read protocol.
- **Re-test status:** INHERITED-WITHOUT-RE-TEST.
- **Reason:** The autonomy register's substrate is AVAILABLE; this inquiry chose NOT to consume it at first ship (MS3 deferred to NEW-FF-4). The register's commitments aren't affected by this inquiry's choices. Re-test deferred until NEW-FF-4 elevates MS3.

### From `cognitive_harness/navigation/references/navigation.md` (canonical /navigation)

- **Commitment:** Route-card schema (Guidance Mode + Guidance Pointers per-pointer-WHY).
- **Re-test status:** RE-TESTED — INHERITED VERBATIM.
- **Evidence:** Schema unchanged. The mechanism produces records conforming to the schema. Bidirectional: adoption is CONSTRAINED BY the canonical schema.

---

## Next Actions

### MUST

- **What:** Update `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` to mark Question 3 as RESOLVED-WITH-DESIGN, citing this finding.
  - **Who:** CONCLUDE-side (this finding's follow-up).
  - **Gate:** Observable — when this finding is committed.
  - **Why:** The frontier-questions finding still labels Q3 as Tier-1 unresolved; readers should know it's been resolved.

- **What:** Update the routeman design memo (`devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`) with a notice that the LAYER-2 modes (Prescriptive-Without-Cycle-Context + Rename-Renders-Itself-Cosmetic) now have audit substrate via A1+A3, and the 18-58 filler-meta-reasoning mode is covered by the same substrate.
  - **Who:** CONCLUDE-side.
  - **Gate:** Observable — when this finding is committed.
  - **Why:** The design memo's LAYER-2 framework was documentation-only; this inquiry makes the modes operational. Readers of the design memo should know.

### COULD

- **What:** Open the SKILL.md authoring inquiry for routeman, taking this finding's mechanism design as input for the adaptive-guidance section.
  - **Who:** Any runner spawning a new inquiry.
  - **Gate:** Condition-bound — when SKILL.md authoring is queued.
  - **Why:** Turns the mechanism design into actual SKILL.md content; finalizes NEW-FF-1 (Stage 1 parsing rules) and NEW-FF-2 (Stage 2 LLM template).

### DEFERRED

- **What:** Open the audit-substrate elevation inquiry (NEW-FF-3) on A2 structured substructure + A4 type-coherence check.
  - **Gate:** Observable — when audit infrastructure demands machine-parseable input OR observed pointer-type/anchor-type misalignment in practice.
  - **Why (if revived):** A1's regex-based parsing may prove insufficient as the audit infrastructure matures; A2/A4 give machine-parseable depth.

- **What:** Open the mode-selection extension inquiry (NEW-FF-4) on MS3 autonomy-axis + MS2/MS4 + anchor-count-secondary-signal.
  - **Gate:** Observable — when mode-selection extension becomes load-bearing.
  - **Why (if revived):** MS3 in particular becomes useful when autonomy levels other than L0 are reached.

- **What:** Open the /intuit-hunch projection inquiry (FF-7) when /intuit Phase β ships.
  - **Gate:** Condition-bound — /intuit Phase β availability.
  - **Why (if revived):** Adds a fifth+ WHY-anchor source for PURSUE-SEED and INVESTIGATE-FRONTIER pointer generation.

- **What:** Open the /reflect integration inquiry (FF-8) when /reflect coupling spec lands.
  - **Gate:** Condition-bound — /reflect coupling spec availability.
  - **Why (if revived):** /reflect observations (W4) become available as additive WHY-anchor source.

---

## Reasoning

### Why this finding over the alternatives

The inquiry started with a 6×5×4 candidate space (6 mechanism shapes × 5 WHY-anchor sources × 4 audit substrates). Sensemaking's central insight collapsed it: **the LAYER-2 mode's recognition signal IS the design constraint.** Once that filter was applied:

- Mechanism shapes that allow LLM-invented anchors (M2 alone; M3 alone; single-stage variants) were eliminated — they cannot satisfy "pointers carry anchored WHYs" by construction.
- Mechanism shapes with deterministic anchor identification + enforcement at generation time (M6 two-stage) survived because they make un-anchored pointers impossible.
- The audit substrate question reduces to "what form does the anchor citation take" (A1 text vs A2 structured) and "where does the enforcement fire" (A3 generation-time vs post-generation).

The major design decisions and their alternatives:

**Mechanism shape (intervention-shape axis).** Four shapes considered: M6 two-stage (adopted); M1 alone (deterministic Stage 1 without LLM Stage 2 — too rigid; couldn't adapt pointer wording to context); M2 alone (LLM-direct without deterministic anchor identification — fails LAYER-2 audit); M3 alone (meta-reasoning projection — propagates filler if meta-reasoning is filler). M6 absorbs M1's auditability into Stage 1 and M2's flexibility into Stage 2, eliminating both weaknesses.

**WHY-anchor source.** Two shapes considered: single-source W1 (critique-verdicts only — coverage gaps; INVESTIGATE-FRONTIER and REVISIT routes have no critique-verdict anchors); multi-source per-movement-type priority (adopted — each type has its natural anchor sources with fallback chain).

**Audit substrate.** Three shapes considered: A1 file-path-in-WHY-text + A3 drop-with-reason (adopted at first ship); A2 structured substructure (deferred — conflicts with design memo's "bc..." conjunctive style); post-generation audit only (rejected as first-ship — silent generation wastes work).

**Mode-selection.** Two shapes considered: MS1 (design memo convention) + MS5 (multi-recalibration override) adopted; MS3 (autonomy-axis using the autonomy register) deferred because MS1 is calibration-agnostic and works at any autonomy level.

**Cycle-output-absent handling.** Two shapes considered: halt+flag (rejected — too restrictive; an in-progress inquiry without critique.md would get zero guidance); graceful degradation via fallback chain (adopted — Stage 1 walks W1→W2→W5→`none` with rationale logged per drop).

### How priors constrain the answer

The derivation notes in Findings §4, §5, and the Inherited Commitments Re-test make this explicit:

- The mechanism shape (two-stage M6) is DERIVED FROM the LAYER-2 Prescriptive-Without-Cycle-Context mode's recognition signal — the design's correctness IS the mode's operational form.
- The mode-allocation convention (MS1 verbatim) is CONSTRAINED BY the design memo.
- The file-mediated source rule is CONSTRAINED BY 16-31's isolated-session + file-scanning architecture.
- The meta-reasoning field's inclusion (W5) is CONSTRAINED BY 18-58's required field commitment.
- The user-language-aligned pointer style is DERIVED FROM the LLM-operational-design principle (now at N=4 evidence; promotion to project-canonical principle is open for an appropriate future inquiry).

These forced moves mean the design has few free parameters. Where it does (Stage 1 exact parsing rules; Stage 2 LLM template shape; A2 elevation timing; MS3 autonomy-axis extension), they are explicitly deferred to follow-up flags (NEW-FF-1 through NEW-FF-4) rather than committed prematurely.

### What was tested but did not become the verdict

- **Single-stage mechanism (M2 / M7 / P2-C REORGANIZE)** — killed for loss of Stage 1 auditability. Preserved as KILL-with-seed.
- **Mode-selection follows Stage 1 (P4-C; data-driven anchor-count-based mode-selection)** — killed for violating design memo's mode-allocation convention. Preserved as NEW-FF-4 secondary-signal candidate.
- **Post-generation audit pass (P3-C)** — deferred as complement-not-replace for generation-time enforcement.
- **A2-lite structured prefix (P3-F)** — deferred to NEW-FF-3 (conflicts with design-memo style at first ship; may be elevated later).
- **Multi-type Route patch (P1-additional)** — deferred to NEW-FF-1.

### The mechanism's correctness guarantee

The most important property of this design is that the LAYER-2 audit's recognition signal is satisfied BY CONSTRUCTION, not by post-hoc check. A1+A3 enforcement at Stage 1 makes it impossible for the mechanism to produce un-anchored pointers — Stage 1 either finds a resolvable anchor through the priority chain or drops the pointer with reason and downgrades the Route to `none` mode. Stage 2 cannot invent anchors because Stage 1's output IS the anchor set Stage 2 must work with. This guarantee is the inquiry's primary structural contribution.

---

## Open Questions

### Refinement Triggers

The 6 frontier flags in Finding §7 are refinement triggers — each is a condition under which a deferred decision re-opens:

- **NEW-FF-1 re-opens** when SKILL.md authoring needs Stage 1's exact parsing rules; the per-movement-type mapping table is the framework, the exact parsing of each source's content is the detail.
- **NEW-FF-2 re-opens** when SKILL.md authoring needs Stage 2's exact LLM template.
- **NEW-FF-3 re-opens** when audit infrastructure demands machine-parseable input OR pointer-type/anchor-type misalignment becomes observable.
- **NEW-FF-4 re-opens** when mode-selection extension (MS3 autonomy-axis especially) becomes load-bearing.
- **FF-7 re-opens** when /intuit Phase β ships.
- **FF-8 re-opens** when /reflect coupling spec lands.

### Research Frontiers

- **Generalization of the two-stage anchor-then-refine pattern to other disciplines.** /intuit Phase β+ hunch presentation may have analogous mechanism needs. Out of scope for this inquiry; flagged for observation when a second discipline needs analogous design.

- **LLM-operational-characteristics-as-design-input principle promotion to project-canonical.** At N=4 evidence (18-58 origination; 24-00 hybrid-naming; 24-40 register-naming; this inquiry's pointer-style preservation), the principle is solidly evidenced. An appropriate future inquiry can promote.

### Monitoring

- **Whether `none`-mode fallback frequency is acceptable in practice.** If a high percentage of Routes fall back to `none`, the inquiry should investigate whether the cycle-output is genuinely incomplete (acceptable signal) OR the per-movement-type priority chain is mis-calibrated.

- **Whether the optional MS5 threshold (≥2 recalibrations) calibrates correctly.** If MS5 fires too often or too rarely, recalibrate.

- **Whether the LAYER-2 modes actually fire when violated.** The audit substrate is in place; the audit MECHANISM (who runs the audit, at what cadence) is frontier Q4 from `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` — still open.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
##### Question 3 — What is the generation mechanism for adaptive guidance pointers, and what anchors each pointer's WHY?

> *[Tier II minor re-statement applied 2026-05-23 per correction notice above. The question's substance is unchanged; the WHY-anchor source clarifies as file content (read by routeman from inquiry-folder artifacts during its scan), not in-context content.]*

The adaptive guidance feature is the load-bearing prescriptive residual that distinguishes routeman from descriptive-labeling sibling disciplines like /surfacing. Canonical /navigation describes the route-card structure including Guidance Mode and Guidance Pointers with per-pointer WHY, but does not specify how the pointers are generated or what anchors the WHY. The design memo names the feature without committing to the mechanism.

**Why this is a frontier.** No current answer. Gating: the load-bearing residual is the discipline's separability anchor; without a mechanism, the prescriptive layer degrades to filler and the LAYER-2 identity-erosion mode named "Prescriptive-Without-Cycle-Context" fires. Net-new: the design memo names the feature without specifying its operational mechanism.

**What it gates.** The SKILL.md's procedural specification for adaptive guidance generation. *[Post-correction:]* under the corrected file-scanning architecture, the WHY-anchor source is file content — specifically, the cycle-output artifacts routeman reads during its scan (critique verdicts written to file; sense-making anchors; telemetry; /reflect observations when present). The mechanism question (how pointers are generated from those file-content anchors) is unchanged; the source is clarified. Without commitment, the spec leaves the mechanism implicit, and the LAYER-2 audit cannot detect failure without an anchored-WHY check.

**Hardness.** Breadth high (every Route's prescriptive content depends on it; failure triggers a Layer-2 mode). Depth high (no mechanism specified; design from scratch). Articulation medium.

**Candidate resolution path.** A new /MVL2+ inquiry framed as "design the adaptive-guidance generation mechanism for routeman, including the WHY-anchor source from inquiry-folder file content." Likely options to evaluate: a cycle-output-derivation rule mapping file-read critique verdicts to DEEPEN/REFINE/PURSUE-SEED guidance pointers (with the cycle-output coming from `critique.md` or equivalent in the worker's inquiry folder); projection from /intuit Phase-β-or-later hunches (which would also be file-mediated); LLM-direct generation reading file content with a structural template; or a hybrid. *Post-correction, all options operate on file-read content; the in-context-pass option is off the table.* The inquiry must commit to one option and test against the LAYER-2 Prescriptive-Without-Cycle-Context failure mode.

run full loop on this
```

</details>
