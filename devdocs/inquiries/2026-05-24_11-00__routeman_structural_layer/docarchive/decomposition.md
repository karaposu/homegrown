# Decomposition — Routeman structural layer (spec organization + parts)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_11-00__routeman_structural_layer/_branch.md`

## Prerequisites

Sensemaking (sensemaking.md) clarified the whole: a 2-file routeman spec package at `cognitive_harness/routeman/` (SKILL.md ~50-100 lines + references/routeman.md ~500-800 lines) extending 5-Core discipline convention with 8 routeman-specific top-level sections inside references/routeman.md, self-containment + single-canonical-location via content-type partition, process-layer interface stub, migration artifacts at edit sites outside routeman folder, warmup folder dropped, lazy protocol loading. 5 layered commitments (COMMIT-1..5) + 8 routeman-specific sections + 8 frontier flags addressed.

---

## Step 1 — Coupling Map (Perceive Coupling Topology)

### Elements identified

From sensemaking's stabilized model (SV6), 25 structural-design elements compose the routeman structural artifact:

| ID | Element |
|---|---|
| E1 | SKILL.md file (short procedural orchestrator ~50-100 lines) |
| E2 | references/routeman.md file (long content reference ~500-800 lines) |
| E3 | 5-Core convention section preservation (Loading note + h1 + Identity + Components + Process Model + Failure Modes + Output + Telemetry + Execute + separator) |
| E4 | Discipline Contract section (14-39 REFINE #3) |
| E5 | Aggregation Protocol section (Q2 P1-P8 sub-sections) |
| E6 | Adaptive Guidance Mechanism section (Q3) |
| E7 | Validation Layer section (Q6) |
| E8 | LAYER-2 Audit Surface section (Q4) |
| E9 | Emission Policy section (Q10) |
| E10 | Persistence Model section (24-00) |
| E11 | Phase Activation Table section (cross-cutting Q1+Q2+Q3+Q4+Q5+Q6+Q10) |
| E12 | Process-layer interface stub (Execute section) |
| E13 | 16-type taxonomy embed (appendix-style; 01-30 Movement Family + 6 secondary attributes) |
| E14 | 17/18-attribute Route schema embed (Output section; 14-39 + 18-58 + 24-00) |
| E15 | Cross-references to protocols (Q5 file-system; Q6 contracts in Q5 file; Q4 audit; multi_resolution_navigation; branch_inquiry) |
| E16 | Cross-references to register/state files (docs/autonomy_level.md; docs/discipline_taxonomy.md) |
| E17 | Self-containment policy (no design-history pointers to `devdocs/inquiries/...`) |
| E18 | Single-canonical-location policy (no protocol duplication) |
| E19 | Content-type partition rule (restate design; cross-reference protocols/register) |
| E20 | Lazy protocol loading order (SKILL.md Step 0 loads references + register; protocols loaded at instruction steps that use them) |
| E21 | Migration artifact 1 — `cognitive_harness/MVL/SKILL.md` update (pipeline ref /navigation → /routeman) |
| E22 | Migration artifact 2 — `cognitive_harness/MVLw/SKILL.md` update (same) |
| E23 | Migration artifact 3 — install scripts updates (`install_for_claude.sh` + `install_for_codex.sh`) |
| E24 | Migration artifact 4 — `cognitive_harness/deprecated_navigation/_archive_note.md` write |
| E25 | Warmup folder drop decision (deprecated_navigation/warmup/ NOT carried forward to routeman/) |

### Coupling assessment (pairwise change-propagation)

- **(E1, E2):** STRONG. SKILL.md's Step 0 pre-reads references/routeman.md; change either's pre-read directive or content structure → other must adjust.
- **(E3, E1) + (E3, E2):** STRONG. 5-Core convention constrains both file structures (frontmatter + h1 + Step 0 in SKILL.md; Loading note + h1 + separator in references).
- **(E4-E11 mutual):** WEAK among themselves. 8 routeman-specific sections share the same FILE (references/routeman.md) and the same CONTAINING PIECE (extended-content layer) but each section's CONTENT is independent — changing the Aggregation Protocol content does not require changing the Adaptive Guidance Mechanism content.
- **(E11, E5-E10):** MODERATE. Phase Activation Table cross-references rows that correspond to each section in E5-E10; the table's column-per-section structure couples to which sections exist.
- **(E13, E14, E15, E16):** WEAK among themselves. Embedded content + cross-references coexist in the spec but each has its own location and content-type-partition assignment.
- **(E17, E18, E19):** STRONG. Content-type partition rule (E19) is the operational form of self-containment (E17) + single-canonical-location (E18). All three express the same policy at different granularities.
- **(E19, E13-E16):** STRONG. Content-type partition rule determines which of E13/E14 are embedded vs which of E15/E16 are cross-referenced.
- **(E20, E1):** STRONG. Lazy protocol loading is implemented IN SKILL.md's Instructions (each Instruction step loads the relevant protocol at that step).
- **(E12, E2):** STRONG. Process-layer interface stub lives inside references/routeman.md's Execute section.
- **(E21-E25 mutual):** WEAK. Migration artifacts are independent file edits; each can proceed in parallel.
- **(E21-E25, E1-E20):** WEAK. Migration artifacts are at edit sites OUTSIDE routeman folder; they do not couple to routeman's internal structure (they couple to runners + install scripts + deprecated_navigation, which are external to routeman).

### Coupling map (clusters)

**Cluster A — Two-file package + 5-Core convention + lazy loading**
- E1 (SKILL.md) + E2 (references/routeman.md) + E3 (5-Core convention) + E20 (lazy protocol loading)
- Bound by: file structure + canonical convention + load-discipline.

**Cluster B — 8 routeman-specific top-level sections (extended-content layer)**
- E4 (Discipline Contract) + E5 (Aggregation Protocol) + E6 (Adaptive Guidance Mechanism) + E7 (Validation Layer) + E8 (LAYER-2 Audit Surface) + E9 (Emission Policy) + E10 (Persistence Model) + E11 (Phase Activation Table)
- Bound by: shared file (references/routeman.md); shared structural role (extended-content layer).

**Cluster C — Content-type partition policy**
- E17 (self-containment) + E18 (single-canonical-location) + E19 (content-type partition rule)
- Bound by: shared policy expression at different granularities.

**Cluster D — Cross-reference list (protocols + register)**
- E15 (protocol cross-refs) + E16 (register/state cross-refs)
- Bound by: cross-reference role under content-type partition.

**Cluster E — Embedded content (design content restated)**
- E13 (16-type taxonomy) + E14 (17/18-attribute schema) + design content embedded in Cluster B sections (Q2 rules; Q3 mechanism; etc.)
- Bound by: embed role under content-type partition.

**Cluster F — Process-layer interface stub**
- E12 (interface stub in Execute section)
- Bound by: bridge to process-layer follow-up inquiry.

**Cluster G — Migration artifacts at edit sites OUTSIDE routeman folder**
- E21 (MVL SKILL.md update) + E22 (MVLw SKILL.md update) + E23 (install scripts updates) + E24 (deprecated_navigation/_archive_note.md write) + E25 (warmup folder drop decision)
- Bound by: shared role of completing the rename migration at edit sites outside routeman.

### Major boundaries (valleys of low coupling)

- **Boundary A-B:** between file/convention structure (Cluster A) and extended-content sections (Cluster B). Interface: file structure HOLDS the sections.
- **Boundary B-(C+D+E):** between section CONTAINERS (Cluster B) and section CONTENT POLICY (Cluster C content-type partition) + CONTENT SOURCES (Clusters D cross-refs + E embeds). Interface: content-type partition (C) directs whether content is in (D) or (E); (D) and (E) populate sections in (B).
- **Boundary all-F:** between routeman's main artifact (Clusters A-E) and the process-layer interface stub (Cluster F). Interface: stub lives in (B)'s Execute section but specifies external contract.
- **Boundary all-G:** between routeman folder internals (Clusters A-F) and external migration artifacts (Cluster G). Interface: NO routeman-internal coupling; G operates on external files.

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map, 8 natural cut points emerge as candidate pieces:

| Piece | Cluster | Candidate boundary |
|---|---|---|
| P1 | Cluster A | Two-file package structure (SKILL.md + references/routeman.md) + 5-Core convention preservation + lazy protocol loading order |
| P2 | Cluster A | Canonical 5-Core sections in references/routeman.md (Loading note + h1 + Identity + Components + Process Model stub + Failure Modes + Output + Telemetry + Execute + separator) with their canonical content from 14-39 + 18-58 + 24-00 + 06-00 + 24-01-30 |
| P3 | Cluster B | 8 routeman-specific top-level h2 sections in references/routeman.md (Discipline Contract + Aggregation Protocol + Adaptive Guidance Mechanism + Validation Layer + LAYER-2 Audit Surface + Emission Policy + Persistence Model + Phase Activation Table) with section ordering |
| P4 | Cluster C | Content-type partition rule (self-containment + single-canonical-location) with operational predicate + rule documentation location |
| P5 | Cluster D | Cross-reference list (protocols + register/state files) with specific cross-references at specific locations |
| P6 | Cluster E | Embedded content (16-type taxonomy + 17/18-attribute schema + 3-layer identity + 10 features + 11-mode failure framework + Q2/Q3/Q6/Q10 design embeds) with embed locations |
| P7 | Cluster F | Process-layer interface stub specification (inputs + outputs + cross-cutting concerns + revival trigger) |
| P8 | Cluster G | Migration artifacts at edit sites OUTSIDE routeman folder (4 specific edits) + warmup folder drop decision |

### Boundary refinement note

P1 and P2 both operate on Cluster A but represent different cut surfaces — P1 = the FILE-LEVEL structure (folder; 2 files; frontmatter; Step 0; Instructions; load order); P2 = the SECTION-LEVEL canonical structure inside references/routeman.md (which sections, with what canonical content). Splitting them as separate pieces preserves the FILE-vs-SECTION granularity distinction.

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atomic (irreducible) elements

- **Atom: `> Loading note` text** at top of references file — belongs to P2 (canonical section element).
- **Atom: `---- NOW SOLID INSTRUCTIONS START ----` separator** — belongs to P2 (canonical separator).
- **Atom: SKILL.md frontmatter (name + description)** — belongs to P1 (file structure).
- **Atom: SKILL.md Step 0 pre-read directive** — belongs to P1 (loading order).
- **Atom: SKILL.md numbered Instructions list** — belongs to P1 (procedural orchestrator) + each Instruction step references P3 sections + P5 cross-references.
- **Atom: 8 specific routeman-specific section names** — belong to P3 (extended-content layer).
- **Atom: Q2 P1-P8 sub-sections within Aggregation Protocol** — belong to P3 (sub-structure of Aggregation Protocol section).
- **Atom: Phase Activation Table rows × columns** — belong to P3 (table is the section's content).
- **Atom: 16-type taxonomy table** — belongs to P6 (embedded content) + located in P3's Components-adjacent section (the 16-type table lives in references/routeman.md as an appendix section).
- **Atom: 17/18-attribute schema table** — belongs to P6 (embed) + located in P2's Output section.
- **Atom: Each specific cross-reference path** (e.g., `cognitive_harness/protocols/inquiry_filesystem_protocol.md`) — belongs to P5 (cross-reference list).
- **Atom: Content-type partition rule text** (when to restate vs cross-reference) — belongs to P4 (policy).
- **Atom: Process-layer interface stub specification** (inputs/outputs/cross-cutting concerns/revival trigger) — belongs to P7.
- **Atom: Each migration commitment** (MVL edit; MVLw edit; install scripts; archive note) — belongs to P8.

### Boundary alignment check

- P1 atom-cluster: file structure + frontmatter + Step 0 + Instructions + lazy loading. Aligns with Cluster A's file-level cut. ✓
- P2 atom-cluster: canonical sections + their canonical content. Aligns with Cluster A's section-level cut. ✓ (Note: 17/18-attribute schema content lives in P2's Output section but is referenced by P6's embed policy. The atom is OWNED by P2 (section structure) with policy from P6 — interface flow.)
- P3 atom-cluster: 8 routeman-specific sections + sub-sub-sections + Phase Activation Table content. Aligns with Cluster B. ✓
- P4 atom-cluster: content-type partition rule + self-containment + single-canonical-location. Aligns with Cluster C. ✓
- P5 atom-cluster: 5+ protocol cross-refs + 2+ register/state cross-refs. Aligns with Cluster D. ✓
- P6 atom-cluster: 16-type taxonomy + 17/18-attribute schema + Q2/Q3/Q6/Q10 design embeds + 3-layer identity + 10 features + 11-mode failure framework. Aligns with Cluster E. ✓
- P7 atom-cluster: process-layer interface stub specification. Aligns with Cluster F. ✓
- P8 atom-cluster: 4 migration artifacts + warmup folder drop. Aligns with Cluster G. ✓

### Confidence

Top-down and bottom-up agree on all 8 piece boundaries. **HIGH confidence.** No splitting or merging required. The P1/P2 split (file-level vs section-level inside Cluster A) is confirmed by atom-grouping (different atoms cluster by file-level vs section-level granularity).

---

## Step 4 — Question Tree (Express as Questions with Verification Criteria)

### P1 — Two-file package structure + 5-Core convention + lazy protocol loading

**Question:** What is the file structure of routeman's spec artifact, and what loading discipline governs how SKILL.md interacts with references/routeman.md + lazy-loaded protocols?

**Verification criteria:**
- [ ] Folder: `cognitive_harness/routeman/`
- [ ] Two files: `cognitive_harness/routeman/SKILL.md` (short procedural orchestrator ~50-100 lines) + `cognitive_harness/routeman/references/routeman.md` (long content reference ~500-800 lines)
- [ ] SKILL.md frontmatter: `name: routeman` + `description: <one-paragraph description of routeman's identity + invocation triggers>`
- [ ] SKILL.md h1: `# /routeman — Cycle-consumer + Adaptive Guidance` (or equivalent identity h1)
- [ ] SKILL.md `## Step 0 — Mandatory pre-read` section with explicit pre-read directive: load `references/routeman.md` full + `docs/autonomy_level.md` register (per Q1's 3-tier read protocol)
- [ ] SKILL.md `## Additional Input/Instructions` section with `$ARGUMENTS` placeholder
- [ ] SKILL.md `## Instructions` numbered list (~6-10 steps) covering: load register + read inquiry folder paths + validate worker artifacts via Q6 (loads Q5 file's Q6 contract sections) + scan worker artifacts per Q5 (loads Q5 file) + aggregate per Q2 (in-spec; no protocol load) + apply Q3 mechanism per Route (in-spec; no protocol load) + emit per Q10 (in-spec; no protocol load) + emit telemetry + persist Route Map per 24-00 (loads multi_resolution_navigation protocol) + emit `routeman_status` field per Q5
- [ ] SKILL.md `## Reference loading during execution` note specifying lazy protocol loading: Q5 protocol at scan/validate step; Q4 audit protocol at invocation-end (when audit-hook surface is exposed); multi_resolution_navigation at persist step; branch_inquiry at route-to-inquiry promotion step (if path activates per 24-00 boundary)
- [ ] NO warmup folder at `cognitive_harness/routeman/warmup/` (architecturally obsolete per Sensemaking KI4)

### P2 — Canonical 5-Core sections in references/routeman.md

**Question:** Which canonical 5-Core convention sections does references/routeman.md contain, and what canonical content from 14-39 + 18-58 + 24-00 + 06-00 + 24-01-30 populates them?

**Verification criteria:**
- [ ] `> Loading note` at top of file (1-2 sentence directive: "This file is loaded by `cognitive_harness/routeman/SKILL.md` at Step 0 and is intended to be read in full before the discipline executes.")
- [ ] h1: `# Routeman — A Cycle-consumer Discipline with Adaptive Guidance` (or equivalent identity h1)
- [ ] `## Identity` section: 3-layer identity statement (paradigm-instantiation Navigational from 12-paradigm framework + prescriptive-extension 4 residuals [adaptive guidance + reachability/gates + REVISIT sub-actions + auto-vs-judgment split] + cycle-consumer file-scanning process layer per 14-39 + 16-31); the one-sentence identity statement is included verbatim from 14-39 (corrected)
- [ ] `## Components` section: 10 features (Enumerate / Type / Reachability-check / Generate adaptive guidance / Cross-cycle REVISIT / Apply graduated-autonomy / Assess priority + confidence / Mark Excluded / Emit telemetry / Consume corpus-limit-seeds per 14-39)
- [ ] `## Process Model` section: STUBBED with explicit pointer to Execute section's process-layer interface stub (note: "The runtime sequencing of the 10 components is specified in the Execute section's process-layer stub pending the process-layer follow-up inquiry.")
- [ ] `## Failure Modes` section: 11-mode 2-layer split (6 LAYER-1 inherited from canonical /navigation [Premature Filtering / Recency Bias / Action Bias / Enumeration Without Reasoning / Route State Omission / Scope Fixation] + 5 LAYER-2 [Rename-Renders-Itself-Cosmetic + Prescriptive-Without-Cycle-Context + Auto-vs-Judgment Calibration Drift from 14-39 + false depth + filler meta-reasoning from 18-58]); each mode's recognition signal documented
- [ ] `## Output` section: 17/18-attribute Route schema (12 base per 14-39 + 1 from 18-58 meta-reasoning = 13 top-level base; +1 from 18-58 parent-route = 14 sub-route base; + protocol's frontier-candidate-record fields per 24-00; + Q2 schema extensions [provenance_workers, aggregation_meta, worker_telemetry, dedup_evidence, aggregation_scope]); 6-purpose-group organization preserved; final per-Route attribute count documented; Route-Map-wrapper 4 fields (Map Header + Route Index + Excluded + Telemetry)
- [ ] `## Telemetry` section: per-invocation metrics (type coverage + category balance + route coverage + guidance allocation + modes used + route-state completeness + blocked-route visibility + excluded reasoning + seed-input metrics + total Route count + 5-tier aggregate verdict per P3 Aggregation Protocol)
- [ ] `---- NOW SOLID INSTRUCTIONS START ----` separator (literal text matching 5-Core convention)
- [ ] `## Execute the Following Process` section: contains process-layer interface stub per P7

### P3 — 8 routeman-specific top-level sections in references/routeman.md

**Question:** What are the 8 routeman-specific top-level h2 sections in references/routeman.md, in what order do they appear relative to canonical sections, and what content does each contain?

**Verification criteria:**
- [ ] Section ordering: canonical 5-Core sections FIRST (Loading note + h1 + Identity + Components + Process Model stub + Failure Modes + Output + Telemetry), then 8 routeman-specific sections (in the order below), then `---- NOW SOLID INSTRUCTIONS START ----` separator, then Execute section.
- [ ] **Section `## Discipline Contract`** (per 14-39 REFINE #3): explicit input contract (cycle's artifacts via file-scanning per Q5 + Q6 contracts; corpus-limit-seeds from /intuit Phase β+ when shipped; autonomy register `docs/autonomy_level.md`); output contract (singleton Route Map per invocation with 17/18-attribute Routes + 4 wrapper fields + 5-tier verdict + per-worker telemetry sub-block per Q2); invariants (singleton main navigator; file-mediated only; isolated session; enumerate-all; observe-only); preconditions (Q5 protocol satisfied; Q6 contracts conformant per L0 validation-without-enforcement).
- [ ] **Section `## Aggregation Protocol`** (per Q2 finding): 8 sub-h3 sections P1-P8 — Architectural Pre-conditions (P1) + Dedup-surface 3-tuple (P2 with movement_type + parent_route_id + Question_fingerprint normalization + R1 edge case documentation) + Per-Movement-Family Rules (P3 with 3 rule-types: Progression-Aggregation vote-count + Re-orientation-Aggregation diversity-preserving + Coordination-Aggregation per-type pre-condition + R2 disagreement-detection consumption contract with Q4 audit) + Telemetry Roll-up (P4 with 5-tier worst-case-wins + worker_telemetry sub-block + R3 FLAG/RE-RUN handling) + Schema Unification (P5 with 5 new fields + aggregation_scope as Q14 bridge-not-commitment) + Hierarchical Composition (P6 with two-axis orthogonal: cross-worker × stage-2 depth) + Phase Progression (P7 with explicit L0/L1+/L2+ activation table for aggregation behavior) + Spec Coherence (P8 with R1 drift-coordination extended to cross-worker schema).
- [ ] **Section `## Adaptive Guidance Mechanism`** (per Q3 finding): two-stage anchor-then-refine (Stage 1 deterministic per-movement-type chain + Stage 2 LLM-judgment-within-constraints) + per-movement-type chain table (5 movement types mapped to discipline-file source priority: DEEPEN ← critique SURVIVE + sensemaking Key-Insights → meta-reasoning fallback; REFINE ← critique REFINE + sensemaking Ambiguity-Collapse → meta-reasoning; PURSUE-SEED ← critique KILL-with-seed + telemetry → meta-reasoning; INVESTIGATE-FRONTIER ← sensemaking Constraints + finding Open-Questions → meta-reasoning; REVISIT ← prior-cycle critique + cross-cycle meta-reasoning; other types ← critique + sensemaking → meta-reasoning) + audit substrate (A1 file-path-in-WHY-text + A3 drop-with-reason at generation time) + MS1+MS5 mode-selection (MS1 design memo convention + MS5 per-mode override on multi-recalibration).
- [ ] **Section `## Validation Layer`** (per Q6 finding): parser walks markdown sections of worker artifacts + per-discipline dispatch table (one row per per-discipline contract: sensemaking SV1/SV6/Phase 1/Telemetry/User Input; innovation Mechanism Coverage Telemetry; critique Phase 3 + per-candidate SURVIVE/REFINE/KILL markers + Convergence Telemetry; decomposition Final Deliverable + Self-Evaluation; surfacing Traversal Trace + Telemetry; _state.md Flow-type/Pipeline/Progress/Iteration/Status/Next Discipline; _branch.md Question + Goal) + 3-tier emitter (INFO / WARN / ERROR — inherits 24-40 vocabulary) + validation-without-enforcement at L0 (warnings only; never halts) + L1+ progression hook for orphan-warning auto-escalation.
- [ ] **Section `## LAYER-2 Audit Surface`** (per Q4 finding): description of what routeman EXPOSES for audit consumption (per-mode substrate fields: file-path-in-WHY citations per A1; drop-reason records per A3; Stage-1 drop-rate per parent for false-depth substrate; pairwise meta-reasoning distinctness; secondary-attribute coordinate-uniformity per 01-30's 6-tuple; Stage-1-drop-rate per movement type for filler-meta-reasoning substrate; transition_history field reads for Calibration-Drift) + cross-reference to `cognitive_harness/protocols/layer2_audit.md` (the audit protocol owns the audit logic; routeman's surface is what the audit READS).
- [ ] **Section `## Emission Policy`** (per Q10 finding): Option 13 hybrid confidence-graduated emission + per-route-type-split (INVESTIGATE FRONTIER always-emit; REVISIT ≥3-prior-cycles natural-availability filter; per-sub-action REVISIT inherits REVISIT's policy uniformly at first ship) + D1 confidence labels (LOW per-discipline-N<20; MED 20≤N<30; HIGH N≥30) + per-discipline-N source first-ship LOW fallback + downstream-decides-via-metadata pattern + two-epoch framing (Epoch 1 first-ship with fallback active + variance dormant; Epoch 2 post-source with variance active).
- [ ] **Section `## Persistence Model`** (per 24-00 finding): `_navig.md` schema (frontier-candidate-record per multi_resolution_navigation 13 base fields + routeman extensions for `meta_reasoning_revision_history`; `mode_switch_log`; `routeman_invocation_id`) + `routeman.md` schema (the route-map content file) + hybrid placement (per-inquiry for inquiry-scoped invocations; `devdocs/navigation/<run-id>/` for project-scoped) + lifecycle (persistent + in-place evolution + append) + cross-reference to `cognitive_harness/protocols/multi_resolution_navigation.md` (protocol owns mechanism) + two-tier boundary with `cognitive_harness/protocols/branch_inquiry.md` (sub-route expansion uses multi_resolution_navigation child-map; route-to-inquiry promotion uses branch_inquiry).
- [ ] **Section `## Phase Activation Table`** (cross-cutting per Q1+Q2+Q3+Q4+Q5+Q6+Q10): L0/L1+/L2+ rows × 7 columns (Q1 register-read tier / Q2 multi-worker activation / Q3 mechanism stage / Q4 audit invocation / Q5 scan mode / Q6 validation enforcement / Q10 D1 calibration); per-cell explicit activation trigger (time-bound / condition-bound / observable); L0 row = current ship state; L1+ row = N>1 detection + per-tier activations; L2+ row = calibration + LLM-judgment fallbacks + Q14 activation if shipped.

### P4 — Content-type partition rule (self-containment + single-canonical-location)

**Question:** What is the operational rule for deciding which content is RESTATED in routeman vs CROSS-REFERENCED to canonical location, and where in the spec is the rule documented?

**Verification criteria:**
- [ ] Rule documented in references/routeman.md's Identity section (or as a brief preamble immediately after the Loading note) with the title `## Content-type Partition (Self-containment + Single-canonical-location)` or similar.
- [ ] Rule text: "Design content (taxonomies; schemas; identity claims; resolved-question commitments; failure-mode definitions) is RESTATED in this spec in self-contained form — the runtime spec is the canonical runtime location for design content. Protocol/register content (protocols at `cognitive_harness/protocols/`; registers at `docs/...`) is CROSS-REFERENCED — the protocol/register file is the canonical location; the spec points to it."
- [ ] Rule explicitly FORBIDS outbound pointers to `devdocs/inquiries/...` (design-history layer is not navigable from the runtime spec; "disciplines self-contained" per project feedback memory).
- [ ] Rule explicitly ALLOWS outbound pointers to: protocol files (`cognitive_harness/protocols/<name>.md`); register/state files (`docs/autonomy_level.md`; `docs/discipline_taxonomy.md`; `docs/thinking_space_dynamics.md`; `docs/desc.md`); sibling discipline specs (`cognitive_harness/<discipline>/SKILL.md` and `<discipline>/references/<discipline>.md`).
- [ ] Rule references the R1 drift-coordination meta-process (from Q6) — when a cross-referenced protocol/register file's heading text changes, the corresponding cross-reference in routeman MUST be updated in the same commit.
- [ ] Rule has explicit boundary clarification: protocol vs design content distinction — a piece of CONTENT (e.g., the dedup-surface 3-tuple) MAY have originated in a design memo (Q2 finding) but BECOMES design content once the runtime spec adopts it (then RESTATED in routeman; design memo becomes design history). PROTOCOL content (e.g., Q5 file-system protocol's atomic-write convention) stays in the canonical protocol file (then CROSS-REFERENCED from routeman).

### P5 — Cross-reference list (protocols + registers)

**Question:** What specific cross-references does routeman SKILL.md + references/routeman.md carry, and at what specific spec locations do they appear?

**Verification criteria:**
- [ ] **Q5 file-system protocol** `cognitive_harness/protocols/inquiry_filesystem_protocol.md` — cross-referenced from: SKILL.md Instruction "scan worker artifacts" step + references/routeman.md Aggregation Protocol P1 (Architectural Pre-conditions) paragraph + references/routeman.md Discipline Contract preconditions.
- [ ] **Q6 file-shape contracts** at `cognitive_harness/protocols/inquiry_filesystem_protocol.md` (Q6's 8 sections live IN the Q5 file per Q6 commitment) — cross-referenced from: SKILL.md Instruction "validate worker artifacts" step + references/routeman.md Validation Layer section (validation operates on the per-discipline contracts).
- [ ] **Q4 LAYER-2 audit protocol** `cognitive_harness/protocols/layer2_audit.md` — cross-referenced from: references/routeman.md LAYER-2 Audit Surface section (audit protocol owns the audit logic; routeman surface is the substrate audit reads).
- [ ] **multi_resolution_navigation protocol** `cognitive_harness/protocols/multi_resolution_navigation.md` — cross-referenced from: SKILL.md Instruction "persist Route Map" step + references/routeman.md Persistence Model section (protocol owns persistence mechanism; routeman commits to specific use).
- [ ] **branch_inquiry protocol** `cognitive_harness/protocols/branch_inquiry.md` — cross-referenced from: references/routeman.md Persistence Model section (two-tier boundary: sub-routes use multi_resolution_navigation child-map; route-to-inquiry promotion uses branch_inquiry).
- [ ] **Autonomy register** `docs/autonomy_level.md` — cross-referenced from: SKILL.md Step 0 pre-read directive + references/routeman.md Phase Activation Table section (register read per Q1's 3-tier protocol).
- [ ] **Discipline taxonomy** `docs/discipline_taxonomy.md` — cross-referenced from: references/routeman.md Identity section (forward-Boundary slot placement per 14-39).
- [ ] **Project end-goal description** `docs/desc.md` — cross-referenced from: references/routeman.md Discipline Contract or Identity section (autonomy ladder + multi-head trajectory per 14-39's endgame functions).
- [ ] All cross-references use project-root-relative paths (e.g., `cognitive_harness/protocols/inquiry_filesystem_protocol.md`, not absolute paths).
- [ ] R1 drift-coordination: any heading-text change in cross-referenced files triggers a same-commit update of routeman's cross-reference.

### P6 — Embedded content (design content restated)

**Question:** What design content is EMBEDDED in routeman (per the content-type partition rule), where in the spec does each embed live, and what is the self-contained form requirement?

**Verification criteria:**
- [ ] **3-layer identity statement** (per 14-39): embedded in references/routeman.md Identity section as the one-sentence statement: "Routeman is the cycle-consumer cognitive discipline that enumerates all possible next moves available after a completed cognitive cycle, producing each move as a typed, prescriptive route-card whose movement type, reachability state, and graduated-autonomy classification are derived from the cycle's artifacts (scanned from inquiry-folder files by routeman in its isolated session) and the project's current autonomy level." Plus the 3 structural layers explained (paradigm-instantiation Navigational + prescriptive-extension 4 residuals + cycle-consumer file-scanning).
- [ ] **10 features** (per 14-39): embedded in references/routeman.md Components section, each as a one-line description + derivation source from identity statement.
- [ ] **11-mode 2-layer failure framework** (per 14-39 + 18-58 + 06-00): embedded in references/routeman.md Failure Modes section as two sub-tables (LAYER-1 with 6 modes + LAYER-2 with 5 modes); each mode named + recognition signal.
- [ ] **17/18-attribute Route schema** (per 14-39 + 18-58 + 24-00 + Q2): embedded in references/routeman.md Output section as a structured table (purpose-group → field → content) with top-level Route attributes + sub-route additional attributes + Route-Map-wrapper fields.
- [ ] **16-type taxonomy** (per 14-39 + 01-30): embedded in references/routeman.md as an appendix-style section (e.g., `## 16-Type Movement Taxonomy Reference` near end of file or as a sub-section under Components) with: type name + Movement Family (Progression Moves 6 / Re-orientation Moves 5 / Coordination Moves 5) + 6 secondary attributes per type (direction, intent, autonomy_readiness_tier, auto_class, scope, has_sub_actions per 01-30).
- [ ] **Q2 aggregation rules**: embedded in references/routeman.md Aggregation Protocol section (per P3 verification criteria above).
- [ ] **Q3 adaptive-guidance mechanism**: embedded in references/routeman.md Adaptive Guidance Mechanism section (per P3 verification criteria above).
- [ ] **Q6 validation layer parser + dispatch + emitter**: embedded in references/routeman.md Validation Layer section (per P3 verification criteria above).
- [ ] **Q10 emission policy**: embedded in references/routeman.md Emission Policy section (per P3 verification criteria above).
- [ ] **Q4 audit surface description**: embedded in references/routeman.md LAYER-2 Audit Surface section (per P3 verification criteria above); audit logic CROSS-REFERENCED via P5.
- [ ] **24-00 persistence schemas + lifecycle**: embedded in references/routeman.md Persistence Model section; protocol mechanism CROSS-REFERENCED via P5.
- [ ] **Phase Activation Table content**: embedded in references/routeman.md Phase Activation Table section (per P3 verification criteria above); register CROSS-REFERENCED via P5.
- [ ] **All embeds in self-contained form** — no outbound pointers to `devdocs/inquiries/...` (the design memos are the ORIGIN; routeman is the CANONICAL RUNTIME LOCATION after restatement).
- [ ] **Embed self-containment audit** — `grep -r "devdocs/inquiries" cognitive_harness/routeman/` returns ZERO matches.

### P7 — Process-layer interface stub (Execute section)

**Question:** What does the process-layer interface stub specify in routeman's Execute section, and what revival trigger references the follow-up inquiry?

**Verification criteria:**
- [ ] Stub appears in references/routeman.md after the `---- NOW SOLID INSTRUCTIONS START ----` separator, as the body of the `## Execute the Following Process` section.
- [ ] Stub begins with explicit notice: "**Process-layer specification PENDING.** This section currently specifies the INTERFACE the process-layer follow-up inquiry will inherit. The runtime sequencing of components and procedural orchestration is OUT OF SCOPE for this version of the spec."
- [ ] Stub names INPUTS the process layer will receive:
  - The routeman spec context (this references/routeman.md file already loaded per Step 0).
  - Inquiry folder paths (one or more `devdocs/inquiries/<inquiry_id>/` paths to scan).
  - Autonomy register value (read from `docs/autonomy_level.md` per Q1's 3-tier protocol).
  - Q5 protocol file (loaded lazily at scan step).
  - Q6 contract sections (lazily via Q5 file at validate step).
  - Q4 audit protocol file (lazily at invocation-end audit-surface exposure).
  - multi_resolution_navigation protocol file (lazily at persist step).
  - branch_inquiry protocol file (lazily at route-to-inquiry promotion step if path activates).
- [ ] Stub names OUTPUTS the process layer must produce:
  - Aggregated Route Map per 24-00 schema with Q2 extensions: per-Route 17/18-attribute fields + 4 wrapper fields (Map Header + Route Index + Excluded + Telemetry) + Q2 schema extensions (provenance_workers + aggregation_meta + worker_telemetry + dedup_evidence + aggregation_scope).
  - 5-tier aggregate verdict (PROCEED / FLAG / RE-RUN / INFO / ERROR) per Q2 telemetry roll-up.
  - Per-worker telemetry sub-block (preserved verbatim per Q2).
  - Persistence-file writes: `_navig.md` + `routeman.md` per 24-00 schema + hybrid placement.
  - `routeman_status: COMPLETE` field per Q5 completion-emission shape.
- [ ] Stub names CROSS-CUTTING CONCERNS the process layer must address:
  - Phase Activation Table behavior per L0/L1+/L2+ (which behavior fires at the current autonomy level).
  - Failure Modes detection at runtime (operational LAYER-1 modes detectable via output observation; identity-eroding LAYER-2 modes exposed for the audit surface).
  - Telemetry emission per Telemetry section.
  - Self-containment policy compliance (no outbound design-history pointers introduced during runtime).
  - Single-canonical-location compliance (cross-references stay coherent per R1 drift-coordination).
- [ ] Stub names EXPLICIT REVIVAL TRIGGER: "The process-layer follow-up inquiry should be invoked via `/MVLw \"routeman process-layer — sequence the 10 components into runtime procedure\"` after this structural spec ships AND after Q5/Q6/Q4 protocol files are authored. The follow-up inquiry must honor the INPUTS/OUTPUTS/CROSS-CUTTING-CONCERNS interface declared above."
- [ ] Stub does NOT specify implementation (no procedural pseudocode; no concrete step sequences; no method-level signatures).

### P8 — Migration artifacts at edit sites + warmup folder drop

**Question:** What migration artifacts must be coordinated when routeman ships, and where do they live (with explicit edit-site enumeration)?

**Verification criteria:**
- [ ] **Edit 1:** `cognitive_harness/MVL/SKILL.md` modified — replace any reference to `/navigation` in pipeline definition with `/routeman`; specific edit location: the pipeline definition section that names disciplines.
- [ ] **Edit 2:** `cognitive_harness/MVLw/SKILL.md` modified similarly.
- [ ] **Edit 3:** `install_for_claude.sh` modified — install `cognitive_harness/routeman/` in place of `cognitive_harness/navigation/` (note: deprecated_navigation/ may still be archived without install).
- [ ] **Edit 4:** `install_for_codex.sh` modified similarly.
- [ ] **Edit 5:** `cognitive_harness/deprecated_navigation/_archive_note.md` created with: (a) rename rationale (1-paragraph: "the discipline at `cognitive_harness/deprecated_navigation/` has been renamed to `/routeman` and lives at `cognitive_harness/routeman/`. The rename is structural-not-cosmetic per the 14-39 design memo + the 6 resolved Tier-1 frontier questions Q1-Q6 + Q10 from the 15-20 frontier-questions finding."); (b) pointer to `cognitive_harness/routeman/` as the active discipline; (c) note that this folder is retained for historical reference and backwards-compat with any in-flight artifacts that may still reference the old name; (d) explicit policy: no new development on this folder; all changes go to routeman.
- [ ] **Warmup folder drop:** `cognitive_harness/deprecated_navigation/warmup/` exists (5 warmup-context files) — NOT carried forward to `cognitive_harness/routeman/warmup/`. Architecturally obsolete per Sensemaking KI4 (corrected isolated-session + file-scanning architecture from 16-31 makes prior-context warmup unnecessary because file system IS the persistent context).
- [ ] **No MIGRATION.md inside routeman folder** (migration coordination lives at edit sites + design-history layer, not in runtime spec per Sensemaking A4).
- [ ] **Backwards-compat:** deprecated_navigation folder retained until in-flight inquiries migrate (no forced deletion of deprecated content); the archive note explicitly states the policy.
- [ ] **Pre-edit verification:** before each edit, verify the target file currently contains the `/navigation` reference (or whatever the old form is); the edit is contingent on the old reference existing.

---

## Step 5 — Interface Map

For each connected piece pair, what flows and in which direction.

| From | To | What flows | Direction | Type |
|---|---|---|---|---|
| P1 | P2 | Step 0 pre-read mandate (loads references/routeman.md full); file structure that holds P2's sections | one-way | structural |
| P1 | P5 | Lazy-load Instructions (SKILL.md's Instructions cross-reference protocols on-demand at specific steps) | one-way | activation-rule |
| P2 | P3 | Section ordering (canonical sections first; 8 routeman-specific sections after; separator before Execute) | one-way | ordering |
| P2 | P6 | Output section is the content-host for the 17/18-attribute schema embed | one-way | content-host |
| P2 | P7 | Execute section is the content-host for the process-layer interface stub | one-way | content-host |
| P3 | P5 | Each section's content includes cross-references per the partition rule (e.g., Persistence Model cross-references multi_resolution_navigation) | one-way | cross-reference |
| P3 | P6 | Sections embed design content (e.g., Aggregation Protocol embeds Q2 design; Adaptive Guidance Mechanism embeds Q3 design; Phase Activation Table embeds the L0/L1+/L2+ table) | one-way | content-host |
| P4 | P3 / P5 / P6 | Content-type partition rule governs split decisions: which content embeds (P6) vs which cross-references (P5); applies to all sections in P3 | one-way | policy-constraint |
| P4 | P1 | Self-containment policy constrains P1's file content (no design-history pointers in SKILL.md or references) | one-way | policy-constraint |
| P5 | P3 | Cross-references appear inside P3 sections | one-way | data |
| P6 | P3 | Embedded design content appears inside P3 sections (and P2's Output section for the schema embed) | one-way | data |
| P7 | (process-layer follow-up inquiry) | Interface stub specifies what the process-layer must commit to (inputs/outputs/cross-cutting concerns) | one-way | contract |
| P8 | (external edit sites: MVL + MVLw + install scripts + deprecated_navigation) | Migration artifacts edit files outside routeman folder; no routeman-internal coupling | one-way | external-edit |

### Hidden-coupling check (Assumptions-not-data per Step 5 refinement)

- **P1 assumes P2 exists** (Step 0 pre-read of references/routeman.md). Explicit via Step 0 directive in P1's verification criteria.
- **P3 sections assume P4's content-type partition rule is documented.** Explicit via P4's preamble location in references/routeman.md (verifiable as P4 criterion).
- **P5 cross-references assume target protocol/register files exist (or will exist).** Hidden dependency: Q4 audit protocol at `cognitive_harness/protocols/layer2_audit.md` doesn't yet exist as a file (Q4 finding's COULD authoring action). Q5 protocol at `cognitive_harness/protocols/inquiry_filesystem_protocol.md` similarly (Q5 finding's COULD authoring action). Routeman ships with cross-references to PLANNED protocol files; the protocols must be authored alongside or before routeman ships. **Made explicit:** P5 verification criteria document the dependency; routeman SKILL.md authoring is gated on the protocols' authoring (or coordinated via parallel authoring).
- **P8 migration edits assume target files currently contain the old `/navigation` reference.** Hidden dependency: file content state. **Made explicit:** P8 verification criteria require pre-edit verification.
- **P7 stub assumes the process-layer follow-up inquiry will respect the interface.** Hidden dependency: future inquiry compliance. **Made explicit:** P7 verification criteria require the stub to declare the interface as a CONTRACT that the follow-up inquiry must honor.

No silent hidden coupling. All assumptions surface as explicit interface flows or explicit verification criteria.

---

## Step 6 — Dependency Order

### Dependencies derived from interfaces

- **P4 (content-type partition rule)** is foundational — governs P3/P5/P6 decisions. Wave 1.
- **P1 (two-file package structure + 5-Core convention + lazy loading)** is foundational — establishes the file/folder skeleton + load discipline. Wave 1 (parallel with P4).
- **P8 (migration artifacts at edit sites)** is INDEPENDENT of routeman folder internals. Wave 1 (parallel with P1 + P4).
- **P2 (canonical 5-Core sections)** depends on P1 (file structure) + P4 (policy constraint) + needs P6 content for the Output section. Wave 2.
- **P5 (cross-reference list)** depends on P4 (partition rule). Wave 2 (cross-ref locations populated during P3 authoring; the list itself can be enumerated in Wave 2).
- **P6 (embedded content)** depends on P4 (partition rule). Wave 2.
- **P3 (8 routeman-specific sections)** depends on P1 (file structure) + P4 (partition rule) + P5 (cross-references list) + P6 (embed content). Wave 3.
- **P7 (process-layer interface stub)** depends on P2 (Execute section location) + P3 (full section content known to specify interface inputs/outputs/cross-cutting concerns). Wave 4.

### Wave ordering

```
Wave 1: P1 (file structure + lazy loading)
        P4 (content-type partition rule)
        P8 (migration artifacts at edit sites — independent of routeman internals)
       │
       ▼
Wave 2: P2 (canonical 5-Core sections — depends on P1 + P4)
        P5 (cross-reference list — depends on P4)
        P6 (embedded content — depends on P4)
        — all parallel within Wave 2
       │
       ▼
Wave 3: P3 (8 routeman-specific sections — depends on P1 + P4 + P5 + P6; collects + organizes)
       │
       ▼
Wave 4: P7 (process-layer interface stub — depends on P2 + P3 full content)
```

No circular dependencies detected. Within Wave 1, the 3 pieces (P1 + P4 + P8) can proceed in parallel. Within Wave 2, the 3 pieces (P2 + P5 + P6) can proceed in parallel by exchanging interface contracts up-front (P4's partition rule + P1's file structure).

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions

| Dimension | Check | Result |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | **PASS.** P1 (file structure), P4 (policy), P8 (external edits) can be answered independently. P2/P3/P5/P6 depend on P4 + P1 interface contracts but their CONTENT is independently authorable once contracts are defined. P7 depends on P2/P3 location/content interfaces — answerable once those are known. |
| **Completeness** | Do the pieces cover the whole? | **PASS.** All 5 sensemaking commitments (COMMIT-1..5) mapped: COMMIT-1 (2-file package + single-file references at L0) → P1; COMMIT-2 (5-Core convention + 8 routeman-specific sections) → P2 + P3; COMMIT-3 (self-containment + single-canonical-location via content-type partition) → P4; COMMIT-4 (process-layer interface stub) → P7; COMMIT-5 (migration artifacts at edit sites + warmup dropped + lazy protocol loading) → P8 + P1. All 7 _branch.md sub-aspects mapped: SA1 (top-level structure) → P1 + P2 + P3; SA2 (reference file split) → P1 (single-file at L0); SA3 (embed vs cross-ref) → P4 + P5 + P6; SA4 (self-containment compliance) → P4; SA5 (resolved-question content location) → P3 + P6; SA6 (folder structure) → P1 + P8 (warmup drop); SA7 (migration artifact strategy) → P8. No gap. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS.** Given P1's file structure + P2's canonical sections + P3's 8 routeman-specific sections + P4's partition rule + P5's cross-references + P6's embedded content + P7's interface stub + P8's migration edits, the result is a complete routeman structural artifact at `cognitive_harness/routeman/` (SKILL.md + references/routeman.md) coordinated with migration at edit sites outside the folder. |

### Determination-mechanism piece check (per Step 7 refinement)

The Q-tree includes load-bearing concepts whose use depends on runtime determination:

- **"Lazy protocol loading"** — runtime determination of WHEN to load each protocol. Addressed by P1's verification criteria (each Instruction step references the relevant protocol; load happens at that step). ✓
- **"Content-type classification" (restate vs cross-reference)** — authoring-time determination per content type. Addressed by P4's operational predicate (design content vs protocol/register content). ✓
- **"Cross-reference target existence"** — verification-time determination of whether the cross-referenced file exists. Addressed by P5's verification criterion (cross-references targeting PLANNED protocol files; protocols must be authored alongside or before routeman ships); dependency documented. ✓
- **"Migration artifact pre-existence"** — verification-time determination of whether each target file currently contains the old `/navigation` reference. Addressed by P8 (pre-edit verification step). ✓
- **"Process-layer follow-up trigger"** — runtime determination of when to invoke the process-layer inquiry. Addressed by P7 (explicit revival trigger naming the invocation form `/MVLw "routeman process-layer dive-deep"`). ✓

All load-bearing runtime determinations have an addressing piece. **PASS.**

### Full 7-dimension evaluation

| Dimension | Result |
|---|---|
| Independence | PASS (per above) |
| Completeness | PASS (per above) |
| Reassembly | PASS (per above) |
| **Tractability** | PASS. Each piece is a single focused design decision tractable in one Innovation pass. P3 (8 sections + sub-sections) and P6 (multiple embeds across multiple sections) are the largest, but still tractable in one pass each. |
| **Interface clarity** | PASS. All 13 cross-piece flows explicit in Step 5 interface map with type (structural / activation-rule / ordering / content-host / cross-reference / policy-constraint / data / contract / external-edit). No hidden assumptions (hidden-coupling check surfaces no hidden dependencies; all assumptions made explicit). |
| **Balance** | PASS with note. P3 (8 sections) and P6 (multiple embeds) are larger than P1/P4/P5/P7 (single rule/policy/list each). Imbalance is structural — section-list pieces are intrinsically larger than single-rule pieces. P2 is medium (canonical sections with their canonical content). P8 is small-to-medium (4 specific edits + warmup drop). Not severe enough to require further decomposition. |
| **Confidence** | HIGH. Top-down clustering (7 clusters from coupling map; P1/P2 split inside Cluster A for file-vs-section granularity) + bottom-up atom-grouping align on all 8 piece boundaries. Step 3 validation passed with no boundary disagreements. |

### Failure-mode check

- **Premature Decomposition:** No. Sensemaking clarified the whole via SV6 stabilized model + 5 layered commitments. Coupling map built on that clarification.
- **Wrong Boundaries:** No. Cuts placed at low-coupling regions (between file/convention (A) and extended-content sections (B); between section containers (B) and content policy/sources (C/D/E); between routeman-internal (A-F) and external migration (G)).
- **Hidden Coupling:** No. Assumptions-not-data check in Step 5 surfaces all inter-piece assumptions as explicit interfaces or explicit verification criteria.
- **Missing Pieces:** No. Completeness check covers all 5 commitments + 7 sub-aspects. Determination-mechanism piece check covers all 5 runtime/authoring/verification determinations.
- **Over-Decomposition:** No. 8 pieces for a 7-sub-aspect inquiry is appropriate (the +1 = P1/P2 split inside Cluster A for file-vs-section granularity is structurally justified). Each piece tractable in one Innovation pass.
- **Ignoring Dependencies:** No. 4-wave ordering explicit; within-wave parallelism explicit; no circular dependencies.
- **Imbalanced Decomposition:** Mild imbalance (P3, P6 larger than others) — structurally appropriate, not a failure.

---

## Final Deliverable

### 1. Coupling Map

7 clusters: A (two-file package + 5-Core convention + lazy loading) + B (8 routeman-specific sections extended-content layer) + C (content-type partition policy) + D (cross-reference list) + E (embedded content) + F (process-layer interface stub) + G (migration artifacts at external edit sites). Each cluster has identified internal coupling + explicit boundaries with adjacent clusters.

### 2. Question Tree

8 pieces — P1 (file structure + 5-Core convention + lazy loading), P2 (canonical 5-Core sections), P3 (8 routeman-specific sections), P4 (content-type partition rule), P5 (cross-reference list), P6 (embedded content), P7 (process-layer interface stub), P8 (migration artifacts at edit sites + warmup folder drop). Each with question + verification criteria (above).

### 3. Interface Map

13 interfaces enumerated in Step 5 with type (structural / activation-rule / ordering / content-host / cross-reference / policy-constraint / data / contract / external-edit) and direction (all one-way). No hidden coupling.

### 4. Dependency Order

4 waves: Wave 1 (P1 ∥ P4 ∥ P8); Wave 2 (P2 ∥ P5 ∥ P6); Wave 3 (P3); Wave 4 (P7). Within-wave parallelism with interface contracts exchanged up-front.

### 5. Self-Evaluation

- Minimum 3 dimensions: Independence ✓, Completeness ✓, Reassembly ✓.
- Determination-mechanism piece check: PASS (5 runtime/authoring/verification determinations all addressed).
- Full 7 dimensions: all PASS (mild structural imbalance on P3/P6 size noted, not a failure).
- Failure-mode check: 7/7 clean.

**Overall: PROCEED**
