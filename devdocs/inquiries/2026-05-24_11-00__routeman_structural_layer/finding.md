---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Routeman's structural layer — spec organization + parts

## Question

How should routeman's structural artifact (the SKILL.md spec file + its loaded references file) be organized — what file structure, sections, embedded vs cross-referenced content, self-containment compliance, where each resolved-question commitment lives, folder structure, and migration artifact strategy — given that the meaning layer is largely solved by the 14-39 design memo + 6 resolved Tier-1 frontier questions (Q1-Q6) + Q10 + satellite findings (16-31, 18-58, 24-00, 24-01, 24-01-30, 24-40, Q2 at 10-00)?

The Goal: produce a SKILL.md-author-implementable design that fits the project's 5-Core discipline convention, complies with the "disciplines self-contained" feedback memory, honors the single-canonical-location commitment from Q5/Q6 R1 drift-coordination, and coheres with all 13 inherited priors. Layer Commitment: STRUCTURAL (meaning solved; process layer is a separate follow-up inquiry).

## Finding Summary

- **Routeman's structural artifact is a 2-file package at `cognitive_harness/routeman/`** — `SKILL.md` (short procedural orchestrator, ~50-100 lines following the 5-Core convention) + `references/routeman.md` (long content reference, ~500-800 lines comparable to /innovate's ~750 lines). The folder structure matches the 5 Core discipline conventions (`/surfacing`, `/sense-making`, `/decompose`, `/innovate`, `/td-critique`). No `warmup/` folder (the deprecated_navigation precedent is architecturally obsolete under the corrected isolated-session + file-scanning architecture from 16-31).

- **The references file preserves the 5-Core canonical sections + extends them with 8 routeman-specific top-level h2 sections.** Canonical sections preserved (with routeman's specific canonical content): `> Loading note` + h1 + Identity (3-layer per 14-39) + Components (10 features per 14-39) + Process Model (stubbed with pointer to Execute section's interface stub) + Failure Modes (11-mode 2-layer split: 6 LAYER-1 + 5 LAYER-2 per 14-39 + 18-58 + 06-00) + Output (17/18-attribute Route schema per 14-39 + 18-58 + 24-00 + Q2 schema extensions) + Telemetry + `---- NOW SOLID INSTRUCTIONS START ----` separator + Execute (with process-layer interface stub).

- **The 8 routeman-specific top-level sections** are: (1) Discipline Contract (per 14-39 REFINE #3); (2) Aggregation Protocol (per Q2 — with 8 sub-h3 sub-sections P1-P8); (3) Adaptive Guidance Mechanism (per Q3 — two-stage anchor-then-refine + per-movement-type chain + audit substrate); (4) Validation Layer (per Q6 — parser + per-discipline dispatch table + 3-tier emitter); (5) LAYER-2 Audit Surface (per Q4 — what routeman exposes + cross-reference to audit protocol); (6) Emission Policy (per Q10 — Option 13 hybrid + D1 confidence labels + per-route-type-split); (7) Persistence Model (per 24-00 — `_navig.md` + `routeman.md` schemas + hybrid placement + cross-reference to multi_resolution_navigation); (8) Phase Activation Table (cross-cutting — L0/L1+/L2+ rows × Q1+Q2+Q3+Q4+Q5+Q6+Q10 columns).

- **A content-type partition rule resolves the apparent tension between self-containment and single-canonical-location.** Design content (taxonomies; schemas; identity; resolved-question commitments; failure-mode definitions) is RESTATED in routeman in self-contained form — the runtime spec becomes the canonical runtime location after restatement. Protocol/register content (protocols at `cognitive_harness/protocols/`; registers at `docs/...`) is CROSS-REFERENCED — the protocol/register file remains the canonical location; routeman points to it. The two principles operate at different content-type scopes and don't conflict. The rule is documented in references/routeman.md's preamble. Hybrid content (BOTH design AND protocol — e.g., the 24-00 persistence schema) uses a RESTATE-WITH-CROSS-REFERENCE pattern: restate for self-containment + cross-reference for single-canonical-location.

- **8 cross-references** carry routeman's outbound pointers to canonical protocol + register/state files: Q5 file-system protocol at `cognitive_harness/protocols/inquiry_filesystem_protocol.md`; Q6 file-shape contracts (as sections in Q5's file); Q4 LAYER-2 audit protocol at `cognitive_harness/protocols/layer2_audit.md`; multi_resolution_navigation at `cognitive_harness/protocols/multi_resolution_navigation.md`; branch_inquiry at `cognitive_harness/protocols/branch_inquiry.md`; autonomy register at `docs/autonomy_level.md`; discipline taxonomy at `docs/discipline_taxonomy.md`; end-goal description at `docs/desc.md`. All use project-root-relative paths. R1 drift-coordination (inherited from Q6) extends to routeman ↔ protocol coordination — heading-text changes in cross-referenced files require same-commit updates to routeman's cross-references.

- **Self-containment is operationalized via a literal-path audit + a conceptual-content audit.** The literal-path audit: `grep -r "devdocs/inquiries" cognitive_harness/routeman/` returns 0 matches. The conceptual audit: each embed must read as STANDALONE design content (not as a summary of a design memo); the embed includes sufficient context (rationale + structural grounding + cross-discipline awareness) that the reader understands the embed WITHOUT consulting the original design memo.

- **Missing-protocol-file handling specifies degraded-functionality mode at L0.** Cross-referenced protocol files (Q4 audit; Q5 file-system; Q6 contracts in Q5) may not yet exist when routeman SKILL.md ships if Q4/Q5/Q6 protocol authoring is delayed. SKILL.md's lazy protocol load emits INFO (NOT ERROR) when target file is missing; routeman runtime continues with degraded functionality (no audit; no validation; etc. — whichever protocol is missing). The pattern matches Q6's validation-without-enforcement at L0. The routeman SKILL.md authoring COULD action explicitly coordinates with Q4 + Q5 + Q6 protocol-file authoring to minimize the missing-file case.

- **The process-layer is explicitly stubbed in the Execute section** with an interface specification (NOT implementation). The stub names: INPUTS (routeman spec context; inquiry folder paths; autonomy register value; the 5 cross-referenced protocol files); OUTPUTS (aggregated Route Map per 24-00 schema with Q2 extensions; 5-tier verdict; worker_telemetry sub-block; persistence-file writes; `routeman_status` field per Q5); CROSS-CUTTING CONCERNS (Phase Activation Table behavior; Failure Modes detection; Telemetry emission; self-containment compliance; single-canonical-location compliance); REVIVAL TRIGGER (`/MVLw "routeman process-layer — sequence the 10 components into runtime procedure"` after Q5/Q6/Q4 protocol files are authored). The stub is a CONTRACT the process-layer follow-up inquiry must honor.

- **Migration artifacts (4 commitments) live at edit sites OUTSIDE routeman folder, not centralized in a routeman MIGRATION.md.** (a) `cognitive_harness/MVL/SKILL.md` REPAIR (pipeline reference /navigation → /routeman); (b) `cognitive_harness/MVLw/SKILL.md` REPAIR (same); (c) `install_for_claude.sh` + `install_for_codex.sh` REPAIR (install routeman in place of navigation); (d) `cognitive_harness/deprecated_navigation/_archive_note.md` ADD-CONTENT (write archive note pointing to routeman + rename rationale; deprecated_navigation/ folder already exists per current project state). Pre-edit verification: each edit verifies the target file currently contains the old `/navigation` reference. Backwards-compat: deprecated_navigation folder retained for in-flight artifacts; no forced deletion.

- **Loading-order discipline: eager pre-load of self + register at Step 0; lazy load of protocols at Instruction steps.** SKILL.md Step 0 mandates loading `references/routeman.md` full + `docs/autonomy_level.md` register (per Q1's 3-tier read protocol). Protocol files (Q4 audit, Q5 file-system, Q6 contracts in Q5 file, multi_resolution_navigation, branch_inquiry) load LAZILY at the Instruction step that uses them. This avoids 5+ protocol-file loads at every routeman invocation while preserving cross-references for runtime use.

- **The reference-file split decision is deferred to L1+.** Single-file `references/routeman.md` at L0 matches the 5-Core convention. The optional `references/route_taxonomy.md` split (for the 16-type table with Movement Family + 6 secondary attributes per type from 01-30) is preserved as an L1+ refactor if the references file grows beyond comfortable comprehension (revival trigger: file size or additional reference content from Q11+Q12+Q13+Q14+Q15 resolutions).

- **The design is ~80% convention-inheritance + design-content-restatement + ~20% novel routeman-specific structural extensions.** Novel pieces: the 8 routeman-specific top-level sections (extending 5-Core convention); the content-type partition rule (synthesizing self-containment + single-canonical-location); the process-layer interface stub format; the migration-at-edit-sites coordination pattern. The 80/20 pattern matches Q5 (07-30) + Q6 (09-00) + Q2 (10-00) — four consecutive structural-extension findings on routeman.

- **3 critique-committed refinements (R1 + R2 + R3) form a robustness architecture.** R1 (missing-protocol-file degraded-functionality handling) mitigates the planned-protocol-files-not-yet-existing risk. R2 (hybrid-content RESTATE-WITH-CROSS-REFERENCE clause) resolves classification ambiguity for content that is BOTH design AND protocol. R3 (conceptual self-containment check beyond literal-path audit) ensures embeds read as standalone design content. The three refinements compose into a unified robustness layer mitigating prosecution-identified gaps without introducing new dependencies.

## Finding

### Context

Routeman is the discipline that replaces canonical /navigation — formerly at `cognitive_harness/navigation/`, now at `cognitive_harness/deprecated_navigation/` per the partial migration. The 14-39 design memo settled the meaning layer (3-layer identity + 10 features + 16/17/18-attribute Route schema + 11-mode 2-layer failure framework + 26 lineage decisions + 3 endgame functions + forward-Boundary slot in 4-category discipline taxonomy). Subsequent inquiries resolved 6 Tier-1 frontier questions (Q1 autonomy register + Q2 multi-head aggregation + Q3 adaptive-guidance generation + Q4 LAYER-2 audit + Q5 file-system protocol + Q6 file-shape contracts) and Q10 (emission policy), plus 6 satellite findings (16-31 isolated-session correction + 18-58 staged-mapping + 24-00 persistence + 24-01-30 taxonomy categorization + 24-40 autonomy register + Q4 24-00 onwards).

The meaning layer is, per the user's framing, "solved in high degree." The structural layer is now the open question: how should the runtime spec — the SKILL.md file the runner invokes + the references file loaded at Step 0 — be ORGANIZED? What sections? What folder structure? What lives where? How are 13 inherited priors honored in the artifact without violating either self-containment or single-canonical-location?

This finding's design is the answer.

### 1. File structure + 5-Core convention + lazy protocol loading (P1)

Routeman's spec is a 2-file package at `cognitive_harness/routeman/`:

- **`cognitive_harness/routeman/SKILL.md`** (~50-100 lines): a short procedural orchestrator following the exact 5-Core convention seen across /surfacing, /sense-making, /decompose, /innovate, /td-critique. The file contains:
  - **Frontmatter** (`name: routeman` + `description: <one-paragraph description of routeman's identity + invocation triggers>`).
  - **h1** `# /routeman — Cycle-consumer + Adaptive Guidance` (identity name + key role).
  - **`## Step 0 — Mandatory pre-read`** with an explicit directive: load `references/routeman.md` full + `docs/autonomy_level.md` register (per Q1's 3-tier read protocol). This is the EAGER load discipline.
  - **`## Additional Input/Instructions`** with `$ARGUMENTS` placeholder (matching 5-Core convention).
  - **`## Instructions`** numbered list (~6-10 steps) covering: load register; read inquiry folder paths; validate worker artifacts per Q6 (lazy-loads Q5 file's Q6 contract sections); scan worker artifacts per Q5 (lazy-loads Q5 protocol file); aggregate per Q2 (in-spec; no protocol load); apply Q3 adaptive-guidance mechanism per Route (in-spec; no protocol load); emit per Q10 emission policy (in-spec; no protocol load); emit telemetry; persist Route Map per 24-00 (lazy-loads multi_resolution_navigation protocol); emit `routeman_status: COMPLETE` field per Q5.
  - **`## Reference loading during execution`** note specifying LAZY protocol loading: Q5 protocol at scan/validate step; Q4 audit protocol at invocation-end (when audit-hook surface is exposed); multi_resolution_navigation at persist step; branch_inquiry at route-to-inquiry-promotion step (if that path activates per 24-00 boundary).

- **`cognitive_harness/routeman/references/routeman.md`** (~500-800 lines): a long content reference file, comparable in size to /innovate's ~750-line references file. Contains the canonical 5-Core sections + 8 routeman-specific top-level sections + the Execute section with process-layer interface stub. Full structure detailed in Sections 2 and 3 below.

- **NO `cognitive_harness/routeman/warmup/` folder.** The deprecated_navigation `warmup/` folder (5 warmup-context files for canonical /navigation's full-warmup-needed input mode) is architecturally obsolete under the corrected isolated-session + file-scanning architecture from 16-31. Under that architecture, routeman scans inquiry folders for its inputs — the file system IS the persistent context; no prior-context warmup needed.

**Loading-order discipline:** SKILL.md's Step 0 eager-loads `references/routeman.md` + the autonomy register; all 5 protocol cross-references are LAZY-loaded at the Instruction step that uses them. The eager/lazy split avoids 5+ protocol-file loads at every routeman invocation while preserving full cross-reference availability for runtime use.

**Missing-protocol-file handling (R1 from critique):** When a cross-referenced protocol file doesn't yet exist (e.g., Q4 audit protocol at `cognitive_harness/protocols/layer2_audit.md` if Q4 protocol authoring is delayed), the lazy load emits INFO (NOT ERROR) and routeman runtime continues with degraded functionality — no audit; no validation; etc. depending on which protocol is missing. The pattern matches Q6's validation-without-enforcement at L0. The routeman SKILL.md authoring COULD action explicitly coordinates with Q4 + Q5 + Q6 protocol-file authoring inquiries to minimize the missing-file case.

### 2. Canonical 5-Core sections in references/routeman.md (P2)

The references file preserves the canonical section vocabulary shared across the 5 Core disciplines. Section ordering: canonical sections first; 8 routeman-specific sections second; separator; Execute section last.

- **`> Loading note`** at the top: a 1-2 sentence directive matching the 5-Core convention ("This file is loaded by `cognitive_harness/routeman/SKILL.md` at Step 0 and is intended to be read in full before the discipline executes.").

- **h1 `# Routeman — A Cycle-consumer Discipline with Adaptive Guidance`** (or equivalent identity h1).

- **`## Identity`** — the 3-layer identity statement from 14-39 (corrected per 16-31): the one-sentence identity ("Routeman is the cycle-consumer cognitive discipline that enumerates all possible next moves available after a completed cognitive cycle, producing each move as a typed, prescriptive route-card whose movement type, reachability state, and graduated-autonomy classification are derived from the cycle's artifacts (scanned from inquiry-folder files by routeman in its isolated session) and the project's current autonomy level.") + the 3 structural layers explained (paradigm-instantiation = Navigational; prescriptive-extension = 4 residuals [adaptive guidance + reachability/gates + REVISIT sub-actions + auto-vs-judgment split]; cycle-consumer file-scanning process layer).

- **`## Components`** — the 10 features from 14-39 (Enumerate the next-move-space; Type each move from the 16-type taxonomy; Reachability-check each move; Generate adaptive guidance per move; Cross-cycle REVISIT; Apply graduated-autonomy classification; Assess priority and confidence; Mark structurally-inapplicable types as Excluded; Emit telemetry; Consume corpus-limit-seeds from /intuit Phase β+). Each feature with a one-line description + derivation source from the identity statement.

- **`## Process Model`** — STUBBED with explicit pointer: "The runtime sequencing of the 10 components is specified in the Execute section's process-layer interface stub pending the process-layer follow-up inquiry."

- **`## Failure Modes`** — the 11-mode 2-layer split: 6 LAYER-1 (operational; detectable via output observation; recoverable via re-invocation): Premature Filtering / Recency Bias / Action Bias / Enumeration Without Reasoning / Route State Omission / Scope Fixation — all inherited from canonical /navigation. 5 LAYER-2 (identity-eroding; detectable via behavioral audit over time; not simply recoverable): Rename-Renders-Itself-Cosmetic / Prescriptive-Without-Cycle-Context / Auto-vs-Judgment Calibration Drift (3 from 14-39) + false depth / filler meta-reasoning (2 from 18-58). Each mode named + recognition signal documented.

- **`## Output`** — the 17/18-attribute Route schema: top-level Route 17 attributes (12 base from 14-39 + 1 meta-reasoning from 18-58 + Q2 schema extensions provenance_workers + aggregation_meta + worker_telemetry + dedup_evidence + aggregation_scope as needed at top-level vs Route-Map-level); sub-route 18 attributes (top-level 17 + parent-route reference from 18-58). The 6-purpose-group organization preserved: Route Identity (Direction, Goal, Movement Type) + Route State (Priority, Status, Blocked By) + Route Meaning (Purpose, Movement, Unlocks) + Reasoning (WHY, why_this_might_be_important) + Adaptive Guidance (Guidance Mode, Guidance Pointers) + Continuation Memory (Continuation Note). Route-Map-wrapper 4 fields: Map Header (count of Routes and HIGH-priority Routes) + Route Index (optional, when total Route count exceeds 10) + Excluded Section (structurally-inapplicable types with reasoning) + Telemetry Block.

- **`## Telemetry`** — per-invocation metrics (type coverage + category balance + route coverage + guidance allocation + modes used + route-state completeness + blocked-route visibility + excluded reasoning + seed-input metrics + total Route count from 14-39 telemetry skeleton + 5-tier aggregate verdict from Q2 telemetry roll-up).

- **`---- NOW SOLID INSTRUCTIONS START ----`** separator (literal text matching 5-Core convention).

- **`## Execute the Following Process`** section: contains the process-layer interface stub (detailed in Section 7 below).

### 3. 8 routeman-specific top-level sections in references/routeman.md (P3)

After the canonical 5-Core sections and before the separator, references/routeman.md contains 8 routeman-specific top-level h2 sections — each capturing a resolved-question commitment or a 14-39 design memo refinement.

**3.1. `## Discipline Contract`** (per 14-39 REFINE #3) — extracts canonical /navigation's scattered input/output/invariant content into one explicit section. Names: input contract (cycle's artifacts via file-scanning per Q5 + Q6 contracts; corpus-limit-seeds from /intuit Phase β+ when shipped; autonomy register `docs/autonomy_level.md`); output contract (singleton Route Map per invocation with 17/18-attribute Routes + 4 wrapper fields + 5-tier verdict + per-worker telemetry sub-block per Q2); invariants (singleton main navigator; file-mediated only; isolated session; enumerate-all; observe-only); preconditions (Q5 protocol satisfied; Q6 contracts conformant per L0 validation-without-enforcement).

**3.2. `## Aggregation Protocol`** (per Q2) — 8 sub-h3 sub-sections P1-P8 per Q2 finding's commitment:
- P1 Architectural Pre-conditions (singleton + file-mediated + isolated + enumerate-all + observe-only).
- P2 Dedup-surface 3-tuple `(movement_type, parent_route_id, Question_fingerprint)` with normalization rule + R1 edge case (top-level vs sub-route classification divergence → over-coverage per asymmetric-failure principle).
- P3 Per-Movement-Family Aggregation Rules (3 rule-types: Progression-Aggregation vote-count by D1 confidence; Re-orientation-Aggregation diversity-preserving; Coordination-Aggregation per-type pre-condition + per-Family default) + per-discipline dispatch + R2 disagreement-detection consumption contract with Q4 audit.
- P4 Telemetry Roll-up (5-tier worst-case-wins + worker_telemetry sub-block + R3 FLAG/RE-RUN handling: contribution INCLUDED per observe-only; aggregation does NOT halt).
- P5 Schema Unification (5 new fields: provenance_workers + aggregation_meta + worker_telemetry + dedup_evidence + aggregation_scope as Q14 bridge-not-commitment).
- P6 Hierarchical Composition (two-axis orthogonal: cross-worker width × stage-2 sub-route depth).
- P7 Phase Progression Activation (L0/L1+/L2+ activation table for aggregation behavior).
- P8 Spec Coherence (R1 drift-coordination extended to cross-worker schema additions).

**3.3. `## Adaptive Guidance Mechanism`** (per Q3) — two-stage anchor-then-refine mechanism + per-movement-type chain (DEEPEN ← critique SURVIVE + sensemaking Key-Insights → meta-reasoning fallback; REFINE ← critique REFINE + sensemaking Ambiguity-Collapse → meta-reasoning; PURSUE-SEED ← critique KILL-with-seed + telemetry → meta-reasoning; INVESTIGATE-FRONTIER ← sensemaking Constraints + finding Open-Questions → meta-reasoning; REVISIT ← prior-cycle critique + cross-cycle meta-reasoning; other types ← critique + sensemaking → meta-reasoning) + audit substrate (A1 file-path-in-WHY-text + A3 drop-with-reason at generation time) + MS1+MS5 mode-selection (design memo convention + per-mode override on multi-recalibration).

**3.4. `## Validation Layer`** (per Q6) — parser walks markdown sections of worker artifacts + per-discipline dispatch table (one row per per-discipline contract: sensemaking SV1/SV6/Phase 1/Telemetry/User Input; innovation Mechanism Coverage Telemetry; critique Phase 3 + per-candidate SURVIVE/REFINE/KILL markers + Convergence Telemetry; decomposition Final Deliverable + Self-Evaluation; surfacing Traversal Trace + Telemetry; _state.md Flow-type/Pipeline/Progress/Iteration/Status/Next Discipline; _branch.md Question + Goal) + 3-tier emitter (INFO / WARN / ERROR — inherits 24-40 vocabulary) + validation-without-enforcement at L0 (warnings only; never halts) + L1+ progression hook for orphan-warning auto-escalation.

**3.5. `## LAYER-2 Audit Surface`** (per Q4) — description of what routeman EXPOSES for audit consumption: per-mode substrate fields (file-path-in-WHY citations per A1; drop-reason records per A3; Stage-1 drop-rate per parent for false-depth substrate; pairwise meta-reasoning distinctness; secondary-attribute coordinate-uniformity per 01-30's 6-tuple; Stage-1-drop-rate per movement type for filler-meta-reasoning substrate; transition_history field reads for Calibration-Drift) + cross-reference to `cognitive_harness/protocols/layer2_audit.md` (the audit protocol owns the audit logic; routeman's surface is what the audit READS).

**3.6. `## Emission Policy`** (per Q10) — Option 13 hybrid confidence-graduated emission + per-route-type-split (INVESTIGATE FRONTIER always-emit; REVISIT ≥3-prior-cycles natural-availability filter; per-sub-action REVISIT inherits REVISIT's policy uniformly at first ship) + D1 confidence labels (LOW per-discipline-N<20; MED 20≤N<30; HIGH N≥30) + per-discipline-N source first-ship LOW fallback + downstream-decides-via-metadata pattern + two-epoch framing (Epoch 1 first-ship with fallback active + variance dormant; Epoch 2 post-source with variance active).

**3.7. `## Persistence Model`** (per 24-00) — `_navig.md` schema (frontier-candidate-record per multi_resolution_navigation 13 base fields + routeman extensions for `meta_reasoning_revision_history`, `mode_switch_log`, `routeman_invocation_id` — per Q12 frontier obligation) + `routeman.md` schema (the route-map content file) + hybrid placement (per-inquiry folder for inquiry-scoped invocations; `devdocs/navigation/<run-id>/` for project-scoped) + lifecycle (persistent + in-place evolution + append) + cross-reference to `cognitive_harness/protocols/multi_resolution_navigation.md` (protocol owns mechanism) + two-tier boundary with `cognitive_harness/protocols/branch_inquiry.md` (sub-route expansion uses multi_resolution_navigation child-map; route-to-inquiry promotion uses branch_inquiry). Uses RESTATE-WITH-CROSS-REFERENCE pattern (R2 hybrid-content clause): the schema is RESTATED in self-contained form + the protocol is CROSS-REFERENCED as authoritative.

**3.8. `## Phase Activation Table`** (cross-cutting per Q1+Q2+Q3+Q4+Q5+Q6+Q10) — L0/L1+/L2+ rows × 7 columns (Q1 register-read tier / Q2 multi-worker activation / Q3 mechanism stage / Q4 audit invocation / Q5 scan mode / Q6 validation enforcement / Q10 D1 calibration); per-cell explicit activation trigger (time-bound / condition-bound / observable); L0 row = current ship state (N=1 degenerate; per-discipline LOW fallback; full scan; validation-without-enforcement; audit invocation-end pending Q4 protocol; mechanism Stage 1 deterministic); L1+ row = N>1 detection + per-tier activations; L2+ row = calibration + LLM-judgment fallbacks + Q14 activation if shipped.

### 4. Content-type partition rule (P4)

The rule resolves the apparent tension between self-containment (project feedback memory: "disciplines self-contained — no outbound pointers to design-history") and single-canonical-location (Q5/Q6 R1 drift-coordination: protocol/contract content has ONE home; no duplication). The rule operates on content TYPE, not source.

The rule is documented in references/routeman.md's preamble (immediately after the Loading note, before the h1 Identity section) under the title `## Content-type Partition (Self-containment + Single-canonical-location)`.

**Rule text:**

> Design content (taxonomies; schemas; identity claims; resolved-question commitments; failure-mode definitions) is RESTATED in this spec in self-contained form — the runtime spec is the canonical runtime location for design content. Protocol/register content (protocols at `cognitive_harness/protocols/`; registers at `docs/...`) is CROSS-REFERENCED — the protocol/register file is the canonical location; the spec points to it.
>
> **Hybrid-content clause (R2):** when content is BOTH design AND protocol (e.g., the 24-00 persistence schema is routeman's design commitment AND multi_resolution_navigation's frontier-candidate-record schema), the rule is RESTATE-WITH-CROSS-REFERENCE — restate for self-containment + cross-reference for single-canonical-location. Both rules are honored simultaneously.
>
> **Forbidden:** outbound pointers to `devdocs/inquiries/...` (design history). The design-history layer is not navigable from the runtime spec; design memos are the ORIGIN, the runtime spec is the CANONICAL RUNTIME LOCATION after restatement.
>
> **Allowed:** outbound pointers to (a) protocol files at `cognitive_harness/protocols/<name>.md`; (b) register/state files at `docs/<name>.md`; (c) sibling discipline specs at `cognitive_harness/<discipline>/SKILL.md` or `<discipline>/references/<discipline>.md`.
>
> **R1 drift-coordination meta-process (from Q6):** when a cross-referenced protocol/register file's heading text changes, the corresponding cross-reference in routeman MUST be updated in the same commit.

### 5. Cross-reference list (P5)

Routeman SKILL.md + references/routeman.md carry 8 outbound cross-references to canonical protocol + register/state files. All use project-root-relative paths.

| Target | Path | Cross-referenced from |
|---|---|---|
| Q5 file-system protocol | `cognitive_harness/protocols/inquiry_filesystem_protocol.md` | SKILL.md "scan worker artifacts" Instruction step + references/routeman.md Aggregation Protocol P1 + Discipline Contract preconditions |
| Q6 file-shape contracts | `cognitive_harness/protocols/inquiry_filesystem_protocol.md` (sections in Q5 file) | SKILL.md "validate worker artifacts" Instruction step + references/routeman.md Validation Layer section |
| Q4 LAYER-2 audit protocol | `cognitive_harness/protocols/layer2_audit.md` | references/routeman.md LAYER-2 Audit Surface section |
| multi_resolution_navigation | `cognitive_harness/protocols/multi_resolution_navigation.md` | SKILL.md "persist Route Map" Instruction step + references/routeman.md Persistence Model section |
| branch_inquiry | `cognitive_harness/protocols/branch_inquiry.md` | references/routeman.md Persistence Model section (two-tier boundary) |
| Autonomy register | `docs/autonomy_level.md` | SKILL.md Step 0 pre-read directive + references/routeman.md Phase Activation Table section |
| Discipline taxonomy | `docs/discipline_taxonomy.md` | references/routeman.md Identity section (forward-Boundary slot) |
| End-goal description | `docs/desc.md` | references/routeman.md Identity section or Discipline Contract (autonomy ladder + multi-head trajectory) |

R1 drift-coordination: any heading-text change in cross-referenced files triggers a same-commit update of routeman's cross-references.

**Missing-protocol-file handling (R1 from critique):** Q4 audit protocol at `cognitive_harness/protocols/layer2_audit.md` doesn't yet exist; Q5 file-system protocol at `cognitive_harness/protocols/inquiry_filesystem_protocol.md` doesn't yet exist. Cross-references target PLANNED files. The lazy-load behavior at the Instruction step emits INFO (NOT ERROR) when target file is missing; routeman runtime continues with degraded functionality (no audit; no validation; etc.). Pattern matches Q6's validation-without-enforcement at L0.

### 6. Embedded content (P6)

Per the content-type partition rule, design content is RESTATED in routeman in self-contained form. The following design content is embedded at specific spec locations:

- **3-layer identity statement** (per 14-39): embedded in references/routeman.md Identity section as the one-sentence statement + 3 structural layers explained.
- **10 features** (per 14-39): embedded in references/routeman.md Components section, each with one-line description + derivation source.
- **11-mode 2-layer failure framework** (per 14-39 + 18-58 + 06-00): embedded in references/routeman.md Failure Modes section as two sub-tables (LAYER-1 with 6 modes + LAYER-2 with 5 modes); each mode named + recognition signal.
- **17/18-attribute Route schema** (per 14-39 + 18-58 + 24-00 + Q2): embedded in references/routeman.md Output section as a structured table (purpose-group → field → content) with top-level Route attributes + sub-route additional attributes + Route-Map-wrapper fields.
- **16-type taxonomy** (per 14-39 + 01-30): embedded in references/routeman.md as an appendix-style section (e.g., `## 16-Type Movement Taxonomy Reference` near end of file or as a sub-section under Components) with: type name + Movement Family (Progression Moves 6 / Re-orientation Moves 5 / Coordination Moves 5) + 6 secondary attributes per type (direction, intent, autonomy_readiness_tier, auto_class, scope, has_sub_actions).
- **Q2 aggregation rules**: embedded in references/routeman.md Aggregation Protocol section (per Section 3.2 above).
- **Q3 adaptive-guidance mechanism**: embedded in references/routeman.md Adaptive Guidance Mechanism section (per Section 3.3 above).
- **Q6 validation layer parser + dispatch + emitter**: embedded in references/routeman.md Validation Layer section (per Section 3.4 above).
- **Q4 audit surface description**: embedded in references/routeman.md LAYER-2 Audit Surface section (per Section 3.5 above); audit protocol logic CROSS-REFERENCED.
- **Q10 emission policy**: embedded in references/routeman.md Emission Policy section (per Section 3.6 above).
- **24-00 persistence schemas + lifecycle**: embedded in references/routeman.md Persistence Model section (per Section 3.7 above) using RESTATE-WITH-CROSS-REFERENCE pattern.
- **Phase Activation Table content**: embedded in references/routeman.md Phase Activation Table section (per Section 3.8 above); register CROSS-REFERENCED.

**Embed self-containment audit (two-part):**

- **Literal-path audit:** `grep -r "devdocs/inquiries" cognitive_harness/routeman/` returns ZERO matches. The design memos are the ORIGIN; routeman is the CANONICAL RUNTIME LOCATION after restatement.

- **Conceptual self-containment check (R3 from critique):** each embed must include sufficient context (rationale + structural grounding + cross-discipline awareness) that the reader can understand the embed WITHOUT consulting the original design memo. The embed text must read as STANDALONE design content — not as "a summary of design memo X." Verification by author at SKILL.md authoring time: read each embed as if seeing routeman spec for the first time; check that the embed makes sense without external reference. If conceptual context is missing (the embed reads as a summary rather than as standalone content), add the missing context.

### 7. Process-layer interface stub (P7)

The Execute section in references/routeman.md (after the `---- NOW SOLID INSTRUCTIONS START ----` separator) contains a process-layer interface stub. The stub is a CONTRACT specifying WHAT the (future) process-layer must commit to, NOT HOW the process-layer will run (which is the follow-up inquiry's responsibility).

**Stub format:**

> **Process-layer specification PENDING.** This section currently specifies the INTERFACE the process-layer follow-up inquiry will inherit. The runtime sequencing of components and procedural orchestration is OUT OF SCOPE for this version of the spec.
>
> **INPUTS the process layer will receive:**
> - The routeman spec context (this references/routeman.md file already loaded per Step 0).
> - Inquiry folder paths (one or more `devdocs/inquiries/<inquiry_id>/` paths to scan).
> - Autonomy register value (read from `docs/autonomy_level.md` per Q1's 3-tier protocol).
> - Q5 file-system protocol file (lazy-loaded at scan step).
> - Q6 contract sections (lazy via Q5 file at validate step).
> - Q4 audit protocol file (lazy at invocation-end audit-surface exposure).
> - multi_resolution_navigation protocol file (lazy at persist step).
> - branch_inquiry protocol file (lazy at route-to-inquiry promotion step if path activates).
>
> **OUTPUTS the process layer must produce:**
> - Aggregated Route Map per 24-00 schema with Q2 extensions: per-Route 17/18-attribute fields + 4 wrapper fields (Map Header + Route Index + Excluded + Telemetry) + Q2 schema extensions (provenance_workers + aggregation_meta + worker_telemetry + dedup_evidence + aggregation_scope).
> - 5-tier aggregate verdict (PROCEED / FLAG / RE-RUN / INFO / ERROR) per Q2 telemetry roll-up.
> - Per-worker telemetry sub-block (preserved verbatim per Q2).
> - Persistence-file writes: `_navig.md` + `routeman.md` per 24-00 schema + hybrid placement.
> - `routeman_status: COMPLETE` field per Q5 completion-emission shape.
>
> **CROSS-CUTTING CONCERNS the process layer must address:**
> - Phase Activation Table behavior per L0/L1+/L2+ (which behavior fires at the current autonomy level).
> - Failure Modes detection at runtime (operational LAYER-1 modes detectable via output observation; identity-eroding LAYER-2 modes exposed for the audit surface).
> - Telemetry emission per Telemetry section.
> - Self-containment policy compliance (no outbound design-history pointers introduced during runtime).
> - Single-canonical-location compliance (cross-references stay coherent per R1 drift-coordination).
>
> **REVIVAL TRIGGER:** the process-layer follow-up inquiry should be invoked via `/MVLw "routeman process-layer — sequence the 10 components into runtime procedure"` after this structural spec ships AND after Q5/Q6/Q4 protocol files are authored. The follow-up inquiry must honor the INPUTS/OUTPUTS/CROSS-CUTTING-CONCERNS interface declared above.

The stub does NOT specify implementation — no procedural pseudocode; no concrete step sequences; no method-level signatures. Those belong to the process-layer follow-up inquiry.

### 8. Migration artifacts at edit sites + warmup folder drop (P8)

Migration artifacts (4 commitments) live at edit sites OUTSIDE the routeman folder. No centralized `MIGRATION.md` inside routeman folder; coordination lives at edit sites + this finding (design-history layer).

**Edit 1: `cognitive_harness/MVL/SKILL.md`** modified — replace any reference to `/navigation` in pipeline definition with `/routeman`. Specific edit location: the pipeline definition section that names disciplines. **Pre-edit verification:** verify the file currently contains `/navigation` reference.

**Edit 2: `cognitive_harness/MVLw/SKILL.md`** modified similarly.

**Edit 3: `install_for_claude.sh`** modified — install `cognitive_harness/routeman/` in place of `cognitive_harness/navigation/` (note: deprecated_navigation/ folder may still be archived without install). Also `install_for_codex.sh` similarly.

**Edit 4: `cognitive_harness/deprecated_navigation/_archive_note.md`** created with:
- **Rename rationale** (1 paragraph): "The discipline at `cognitive_harness/deprecated_navigation/` has been renamed to `/routeman` and lives at `cognitive_harness/routeman/`. The rename is structural-not-cosmetic per the 14-39 design memo + the 6 resolved Tier-1 frontier questions Q1-Q6 + Q10 from the 15-20 frontier-questions finding."
- **Pointer** to `cognitive_harness/routeman/` as the active discipline.
- **Backwards-compat note:** "This folder is retained for historical reference and backwards-compat with any in-flight artifacts that may still reference the old name."
- **Policy:** "No new development on this folder; all changes go to routeman."

**Warmup folder drop:** `cognitive_harness/deprecated_navigation/warmup/` (5 warmup-context files) is NOT carried forward to `cognitive_harness/routeman/warmup/`. Architecturally obsolete per Sensemaking KI4 (corrected isolated-session + file-scanning architecture from 16-31 makes prior-context warmup unnecessary because file system IS the persistent context).

**Backwards-compat:** deprecated_navigation folder retained until in-flight inquiries migrate (no forced deletion of deprecated content); the archive note explicitly states the policy.

## Inherited Commitments Re-test

This finding's `_branch.md` declared a Synthesis Trigger listing 13 priors. Per CONCLUDE's Synthesis re-test enforcement, each prior's load-bearing commitment is RE-TESTED with cited evidence or explicitly INHERITED-WITHOUT-RE-TEST with reason.

- **Commitment:** 14-39 design memo — 3-layer identity + 10 features + 16/17/18-attribute Route schema + 11-mode 2-layer failure framework + 26 lineage decisions + 3 endgame functions + forward-Boundary slot + REFINE #3 Discipline Contract section.
  - **Source:** `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** All commitments embedded in references/routeman.md sections — 3-layer identity in Identity section (Section 2); 10 features in Components section; 11-mode framework in Failure Modes; 17/18-attribute schema in Output section; Discipline Contract as its own top-level section (Section 3.1 per 14-39 REFINE #3 commitment). Forward-Boundary slot referenced in Identity section via cross-reference to `docs/discipline_taxonomy.md`. 26 lineage decisions honored at structural level (inherited content embedded; dropped content absent; refined content in updated form; deferred content marked with revival triggers in Open Questions).

- **Commitment:** 15-20 frontier-questions finding — Q1-Q6 + Q10 resolutions all consolidated into structural artifact.
  - **Source:** `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Each resolved-question commitment placed in a specific routeman-specific section per Section 3 above — Q1 autonomy register in Phase Activation Table + cross-reference at Section 5; Q2 aggregation in Aggregation Protocol (3.2); Q3 mechanism in Adaptive Guidance Mechanism (3.3); Q4 audit in LAYER-2 Audit Surface (3.5); Q5 protocol cross-referenced at Section 5; Q6 validation layer in Validation Layer (3.4); Q10 emission policy in Emission Policy (3.6). All commitments honored in structural artifact.

- **Commitment:** 16-31 isolated-session + file-scanning architecture; multi-head realized at WORKER level; routeman as singleton scanning across all worker folders.
  - **Source:** `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Architecture preserved in invariants (Discipline Contract section 3.1 + Identity section). Specifically: singleton main navigator + file-mediated only + isolated session + enumerate-all + observe-only — all named as invariants in Discipline Contract. Warmup folder dropped per architecturally-obsolete rationale (KI4 from Sensemaking, derived from 16-31 architecture). SKILL.md Instructions step "scan worker artifacts" per Q5 protocol implements file-mediated input contract.

- **Commitment:** 18-58 staged-mapping + meta-reasoning field + 17/18-attribute schema + LLM-operational-characteristics-as-design-input principle.
  - **Source:** `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** 17/18-attribute schema embedded in Output section (Section 2). Staged-mapping (FF-3 hierarchical Route Map) is honored in Aggregation Protocol P6 sub-section (Section 3.2) — two-axis composition with stage-2 sub-route depth. Meta-reasoning field embedded as part of Route schema's "Reasoning" purpose-group. 2 LAYER-2 modes from 18-58 (false depth + filler meta-reasoning) embedded in Failure Modes section.

- **Commitment:** 24-00 persistence model + `_navig.md` + `routeman.md` schemas + hybrid placement + multi_resolution_navigation protocol adoption + branch_inquiry boundary.
  - **Source:** `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Persistence Model section (3.7) embeds the schema + hybrid placement + lifecycle in self-contained form (RESTATE per content-type partition); multi_resolution_navigation protocol cross-referenced (CROSS-REFERENCE per partition); branch_inquiry protocol cross-referenced for two-tier boundary. Uses RESTATE-WITH-CROSS-REFERENCE pattern per R2 hybrid-content clause (the persistence schema is both routeman design AND multi_resolution_navigation protocol field set).

- **Commitment:** 24-40 autonomy register + 3-tier failure handling + transition_history.
  - **Source:** `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Phase Activation Table (3.8) implements L0/L1+/L2+ per autonomy register. SKILL.md Step 0 pre-loads `docs/autonomy_level.md` per Q1's 3-tier read protocol. 3-tier failure vocabulary (INFO/WARN/ERROR per 24-40 + Q6) implements throughout (Validation Layer 3.4 emits 3-tier; missing-protocol R1 handling emits INFO).

- **Commitment:** 24-01 adaptive-guidance two-stage mechanism + per-movement-type chain + audit substrate + MS1+MS5 mode-selection.
  - **Source:** `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Adaptive Guidance Mechanism section (3.3) embeds the two-stage mechanism + per-movement-type chain + A1+A3 audit substrate + MS1+MS5 mode-selection in self-contained form. LAYER-2 Audit Surface section (3.5) references the audit substrate that 24-01 supplied for 3 LAYER-2 modes.

- **Commitment:** 24-01-30 Movement Family categorization + 6 secondary attributes per type.
  - **Source:** `devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** 16-type taxonomy embedded in references/routeman.md as appendix-style section per Section 6 — with Movement Family (Progression 6 / Re-orientation 5 / Coordination 5) + 6 secondary attributes per type (direction, intent, autonomy_readiness_tier, auto_class, scope, has_sub_actions). Per-Movement-Family rules in Aggregation Protocol P3 sub-section inherit the categorization structurally.

- **Commitment:** 02-00 Option 13 hybrid + D1 confidence labels + per-route-type-split + first-ship LOW fallback + two-epoch framing.
  - **Source:** `devdocs/inquiries/2026-05-24_02-00__investigate_frontier_revisit_emission_policy/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Emission Policy section (3.6) embeds Option 13 hybrid + D1 confidence labels + per-route-type-split + first-ship LOW fallback + two-epoch framing in self-contained form. Per-route-type-split principle also extends to Aggregation Protocol P3 (Per-Movement-Family Aggregation Rules) per Q2 inheritance.

- **Commitment:** 06-00 LAYER-2 audit protocol + per-mode dispatch + 5-tier verdict + spec-coherence check.
  - **Source:** `devdocs/inquiries/2026-05-24_06-00__layer2_audit_mechanism_design/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** LAYER-2 Audit Surface section (3.5) describes what routeman exposes for audit consumption (per-mode substrate fields); cross-references `cognitive_harness/protocols/layer2_audit.md` (the audit protocol owns the audit logic). 5-tier verdict vocabulary inherited in Telemetry section + Aggregation Protocol P4 (Telemetry Roll-up). Spec-coherence check via R1 drift-coordination (Q6 inheritance extended).

- **Commitment:** Q5 file-system protocol + folder topology + atomic-write + verdict-line + scan-detection + completion-emission + partial-failure handling.
  - **Source:** `devdocs/inquiries/2026-05-24_07-30__file_system_protocol_workers_routeman_runners/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Q5 protocol cross-referenced at Section 5 (multiple cross-reference locations). Architecture pre-conditions in Aggregation Protocol P1 (Section 3.2) document inheritance. SKILL.md "scan worker artifacts" Instruction step uses Q5 protocol; Aggregation Protocol P7 sub-section + Section 7 process-layer stub honor Q5's verdict-line + completion-emission shapes. Missing-protocol R1 handling inherits Q5's partial-failure pattern (3-tier vocabulary).

- **Commitment:** Q6 file-shape contracts + per-discipline contracts + validation layer in routeman SKILL.md + validation-without-enforcement at L0 + R1 drift-coordination meta-process.
  - **Source:** `devdocs/inquiries/2026-05-24_09-00__file_shape_contracts_upstream_artifacts/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Validation Layer section (3.4) embeds parser + per-discipline dispatch table + 3-tier emitter + validation-without-enforcement at L0. Q6 contracts (as sections in Q5 file) cross-referenced at Section 5. R1 drift-coordination meta-process EXTENDED to routeman ↔ protocol coordination (Section 4) — the meta-process applies to routeman's outbound cross-references when neighbor specs change.

- **Commitment:** Q2 multi-head aggregation protocol + 8 sections in routeman SKILL.md + dedup-surface 3-tuple + per-Movement-Family rules + aggregation_scope hook + R1/R2/R3 refinements + L0/L1+/L2+ activation table.
  - **Source:** `devdocs/inquiries/2026-05-24_10-00__multi_head_aggregation_routeman/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Q2's 8 sections live in routeman SPEC ARTIFACT (= SKILL.md + references package per KI2 from Sensemaking) as Aggregation Protocol top-level section (3.2) with 8 sub-h3 sub-sections P1-P8. Dedup-surface 3-tuple + per-Movement-Family rules + aggregation_scope hook + Q2's R1/R2/R3 refinements all embedded. Phase Activation Table (3.8) includes Q2's L0/L1+/L2+ activation column.

**13/13 RE-TESTED.** None inherited-without-re-test. The structural artifact's content is grounded in the priors' commitments via cited evidence per each item.

## Next Actions

### MUST

There are no MUST actions required for this finding's value to be realized at the STRUCTURAL layer. The deliverable is the structural design memo itself; the SKILL.md authoring follow-up + process-layer follow-up + migration follow-ups are the user's call.

### COULD

- **What:** Author `cognitive_harness/routeman/SKILL.md` + `cognitive_harness/routeman/references/routeman.md` per the structural design in this finding (Sections 1-8). Honor R1/R2/R3 refinements (missing-protocol handling; hybrid-content RESTATE-WITH-CROSS-REFERENCE; conceptual self-containment check).
  - **Who:** human author or follow-up authoring inquiry.
  - **Gate:** condition-bound — when the user decides to ship routeman as an active discipline.
  - **Why:** the structural design enables SKILL.md authoring without re-running this inquiry; without the SKILL.md + references files, the discipline is documented as intended but not invokable.

- **What:** Coordinate the authoring of Q4 + Q5 + Q6 protocol files BEFORE or ALONGSIDE routeman SKILL.md authoring, to minimize the missing-protocol-file degraded-functionality case at routeman first-ship.
  - **Who:** human author coordinating multiple authoring inquiries (Q4 audit protocol; Q5 file-system protocol; Q6 contracts as sections in Q5 file; multi_resolution_navigation already exists; branch_inquiry already exists; autonomy_level register already exists).
  - **Gate:** condition-bound — paired with the routeman SKILL.md authoring above.
  - **Why:** if protocols don't exist when routeman ships, the lazy-load emits INFO and runs with degraded functionality (no audit; no validation); coordinated authoring avoids this temporary state.
  - **Depends-on:** the SKILL.md authoring COULD above (paired coordination, not sequential).

- **What:** Specify the runtime sequencing of the 10 components in routeman's SKILL.md (the process-layer follow-up inquiry). Invocation: `/MVLw "routeman process-layer — sequence the 10 components into runtime procedure"`.
  - **Who:** the process-layer follow-up inquiry (which honors the interface stub from Section 7 above).
  - **Gate:** condition-bound — after the structural artifact ships AND after Q5/Q6/Q4 protocol files are authored.
  - **Why:** the structural artifact specifies the INTERFACE; the process-layer specifies HOW the components fire. Without process-layer specification, the SKILL.md Instructions list cannot be fully populated.
  - **Depends-on:** SKILL.md authoring COULD + protocol-files-authoring COULD above. GATED.

- **What:** Edit `cognitive_harness/MVL/SKILL.md` + `cognitive_harness/MVLw/SKILL.md` to reference `/routeman` in place of `/navigation` in pipeline definitions.
  - **Who:** human author.
  - **Gate:** condition-bound — paired with the SKILL.md authoring COULD above; not before.
  - **Why:** without runner updates, routeman exists as a spec but is not invoked by any pipeline.
  - **Depends-on:** SKILL.md authoring COULD above. GATED.

- **What:** Edit `install_for_claude.sh` + `install_for_codex.sh` to install routeman in place of navigation.
  - **Who:** human author.
  - **Gate:** condition-bound — paired with the runner updates.
  - **Why:** without install-script updates, routeman is not deployed.
  - **Depends-on:** runner-updates COULD above. GATED.

- **What:** Write `cognitive_harness/deprecated_navigation/_archive_note.md` per Section 8 above (rename rationale + pointer to routeman + backwards-compat policy).
  - **Who:** human author.
  - **Gate:** condition-bound — paired with the routeman SKILL.md authoring.
  - **Why:** completes the migration by documenting why deprecated_navigation is retained.
  - **Depends-on:** SKILL.md authoring COULD. GATED.

- **What:** Commit routeman's primitive composition by loading the typed 11-primitive set at `docs/thinking_space_dynamics.md` and adjudicating per-primitive (per 14-39 deferred COULD #5).
  - **Who:** SKILL.md authoring follow-up or a separate primitive-composition inquiry.
  - **Gate:** condition-bound — when the structural-layer work needs the primitive profile.
  - **Why:** the primitive profile grounds routeman's load-bearing primitives in the project's typed primitive substrate; deferred per 14-39 until needed.
  - **Depends-on:** SKILL.md authoring COULD above. GATED.

- **What:** Specify the /reflect-routeman coupling contract by loading the /reflect spec (per 14-39 deferred COULD #6) when /reflect becomes canonical.
  - **Who:** SKILL.md authoring follow-up or a separate coupling-inquiry.
  - **Gate:** condition-bound — when /reflect's spec becomes canonical (per 14-39 deferred trigger).
  - **Why:** canonical /navigation's reflect-routeman pairing described the coupling partially; routeman should clarify it when /reflect ships.
  - **Depends-on:** /reflect becoming canonical (external dependency).

### DEFERRED

- **What:** Reference-file split — `references/route_taxonomy.md` for the 16-type table (per Sensemaking A2 + FF-S2).
  - **Gate:** observable — when references/routeman.md grows beyond comfortable comprehension OR when future Q11+Q12+Q13+Q14+Q15 resolutions add reference content that warrants split.
  - **Why (if revived):** preserves single-file 5-Core convention at L0; opens split path at L1+ refactor if growth warrants.

- **What:** P7 ADD-TEST process-layer-compliance tests (L1+ refinement seed from Innovation + Critique).
  - **Gate:** condition-bound — when the process-layer follow-up inquiry ships; the compliance tests check that the process-layer's runtime sequencing honors the interface stub from Section 7.
  - **Why (if revived):** adds a runtime-verification layer that the process-layer commitment matches the structural interface contract.

- **What:** Pre-commit / build-time tooling for self-containment + R1 drift-coordination enforcement (per Sensemaking R10-04 + Critique KO6).
  - **Gate:** observable — when self-containment violations or cross-reference drift are observed in practice ≥3 times.
  - **Why (if revived):** automated enforcement of policies currently enforced via process discipline.

- **What:** Audit the `cognitive_harness/non-active/` folder's archival reasoning to extract patterns for routeman's lineage decisions or for future discipline renames (per 14-39 deferred COULD).
  - **Gate:** condition-bound — when a second discipline-rename is proposed.
  - **Why (if revived):** archival reasoning may reveal recurring patterns relevant to the rename-as-design-act methodology's pattern-portability claim.

## Reasoning

### Why this design over alternatives

**Innovation killed 11 alternatives across the 8 pieces** at per-piece Inversion + intervention-shape-axis Inversion. The KILLs and their reasons:

- **P1-Inv-Shape-1: REVIVE-AND-REPAIR (rename deprecated_navigation to routeman).** KILLed: deprecated_navigation has 5 warmup files we're dropping + canonical content we're partially changing + content we're keeping — net change is large; "REPAIR" misleading. Also: deprecated_navigation folder name is intentional history-marker; renaming loses the "this was deprecated" signal.
- **P1-Inv-Shape-2: REORGANIZE-WITHOUT-ADDING (embed routeman inside another discipline's folder).** KILLed: routeman is its own discipline; 5-Core convention is one-discipline-per-folder.
- **P2-Inv-1: entirely new section vocabulary (replace canonical 5-Core sections).** KILLed: loses project-convention-fit; downstream consumers (validation layer at Q6; LAYER-2 audit at 06-00) parse on canonical section names.
- **P3-Inv-1: merge 8 routeman-specific sections into 1-2 mega-sections.** KILLed: loses navigability; sections downstream consumers parse separately get conflated.
- **P4-Inv-1: rename "content-type partition" to "Restate vs Cross-reference Rule".** KILLed: the content-type partition name compresses both rules + names WHAT determines the choice (content type); the alternative names only WHAT the choice is.
- **P5-Inv-1: avoid cross-references entirely (embed protocols too).** KILLed: defeats single-canonical-location; introduces drift risk; duplicates content.
- **P6-Inv-1: cross-reference design memos instead of embed.** KILLed: violates self-containment ("disciplines self-contained" feedback memory).
- **P7-Inv-Shape-1: DO-NOTHING (no process-layer stub).** KILLed: loses structural coherence; no guidance for SKILL.md author or process-layer follow-up.
- **P7-Inv-Shape-2: ADD-TEST (compliance tests instead of interface stub).** KILLed as primary; preserved as L1+ refinement seed for when process-layer ships.
- **P8-Inv-Shape-1: REVERT-REGRESSION (revert to pre-/navigation state).** KILLed: no pre-/navigation state exists.
- **P8-Inv-Shape-2: alias REORGANIZE (no edits; make /navigation alias /routeman).** KILLed: aliasing requires alias-resolution infrastructure; introduces hidden coupling.

### Why the refinements R1+R2+R3 were committed

Critique's adversarial round produced 8 killer objections; defense balanced 5 (KO1 + KO2 + KO5 + KO6 + KO7). The other 3 KOs (KO3 + KO4 + KO8) revealed real gaps requiring refinement:

- **R1 (missing-protocol-file degraded-functionality handling)** addresses KO3: cross-references target PLANNED protocol files (Q4 + Q5 + Q6) that may not exist at routeman first-ship. The lazy-load must emit INFO (NOT ERROR) when target file is missing; runtime continues with degraded functionality. Pattern matches Q6's validation-without-enforcement at L0.

- **R2 (hybrid-content RESTATE-WITH-CROSS-REFERENCE clause)** addresses KO4: the 24-00 persistence schema is BOTH design AND protocol; the content-type partition rule needed an edge-case clause. The hybrid pattern restates for self-containment + cross-references for single-canonical-location, honoring both rules simultaneously.

- **R3 (conceptual self-containment check)** addresses KO8: the literal `grep -r "devdocs/inquiries"` check verifies path absence, not conceptual self-containment. Each embed must read as STANDALONE design content (not as a summary of a design memo) — author verification at SKILL.md authoring time.

The three refinements compose into a unified ROBUSTNESS architecture (post-refinement emergent property 6) under the asymmetric-failure principle: missing files → degraded-not-failed; hybrid content → both-rules-honored; embeds → conceptually-self-contained.

### What survived

- **Assembled structural design (8 piece principal candidates)** after R1+R2+R3 integration — SURVIVE on all 12 critique dimensions including both CRITICAL dimensions (D7 5-Core convention fit + D8 self-containment compliance).
- **P7-Inv-Shape-2 (ADD-TEST process-layer-compliance tests)** — DEFERRED with revival trigger when process-layer ships.

### Why ~80% convention + ~20% novel

The pattern matches Q5 (07-30) + Q6 (09-00) + Q2 (10-00) — four consecutive structural-extension findings on routeman following the same shape. The 13 inherited priors + 5-Core convention provide most of the substrate (file structure; section vocabulary; failure-mode framework; output schema; persistence model; aggregation protocol; etc.). Routeman's novel pieces are small and well-bounded: the 8 routeman-specific top-level sections (extending convention); the content-type partition rule (synthesizing self-containment + single-canonical-location); the process-layer interface stub format; the migration-at-edit-sites coordination pattern. The pattern's consistency across Q5/Q6/Q2/this-inquiry is structural evidence of fit — four structural extensions on routeman naturally compose by inheriting + extending the established substrate rather than re-inventing.

## Open Questions

### Monitoring

- **Whether the missing-protocol-file degraded-functionality mode fires in practice.** Observable when routeman first ships and one or more of Q4/Q5/Q6 protocol files have not been authored. If degraded-functionality fires for an extended period, the protocol-file authoring backlog signals priority.
- **Whether references/routeman.md grows beyond comfortable comprehension.** Observable after SKILL.md authoring + subsequent additions (new resolved-question commitments; reference content from Q11+Q12+Q13+Q14+Q15 resolutions). If the file size approaches LLM comprehension threshold, the L1+ reference-file split (`references/route_taxonomy.md`) becomes appropriate.
- **Whether R1 drift-coordination is honored in practice across cross-references.** Observable via cross-reference cross-checks at commit time. If drift occurs (cross-referenced file's heading text changes but routeman's cross-reference doesn't update), the L1+ tooling becomes warranted.
- **Whether the conceptual self-containment check (R3) catches embeds that read as memo summaries.** Observable at SKILL.md authoring time + during downstream consumer reads. If readers report needing to consult design memos for embed comprehension, the embeds need additional context.

### Blocked

- **The process-layer follow-up inquiry.** Blocked on (a) this structural artifact shipping AND (b) Q4 + Q5 + Q6 protocol files being authored. The follow-up will inherit the interface stub from Section 7 as a contract.
- **Primitive composition specification (14-39 deferred COULD #5).** Blocked until SKILL.md authoring needs the primitive profile (some authoring possible without; runtime fidelity needs it).
- **/reflect coupling contract (14-39 deferred COULD #6).** Blocked until /reflect becomes canonical.

### Research Frontiers

- **Pattern-portability of the structural design pattern.** This is the 4th structural-extension finding on routeman following the 80%-convention + 20%-novel pattern (Q5 + Q6 + Q2 + this inquiry). If a 5th instance emerges and follows the same pattern, the pattern earns promotion to project-canonical structural-extension methodology.
- **Automated self-containment + R1 drift-coordination enforcement tooling.** Currently process discipline; future tooling (pre-commit hook; build-time check) is observable-revival research.
- **Discipline-spec extensibility framework.** The 5-Core convention currently allows extension by observed pattern (each discipline extends in its own way). A formal extensibility framework (canonical extension points; extension vocabulary; cross-discipline extension coordination) is a longer-horizon question.

### Refinement Triggers

- **If missing-protocol-file degraded-functionality mode fires for ≥3 invocations,** prioritize protocol-file authoring + consider whether routeman should HALT (not just degrade) on missing critical protocols at L1+.
- **If references/routeman.md exceeds 1000 lines OR file size impacts comprehension,** activate the L1+ refactor (route_taxonomy.md split).
- **If R1 drift-coordination is violated 3+ times,** prioritize the L1+ automated-enforcement tooling.
- **If conceptual self-containment check fails on 3+ embeds,** revisit the embed-authoring guidance (perhaps add a checklist or template).
- **If a 5th structural-extension finding on routeman follows the same 80%/20% pattern,** promote the pattern to project-canonical methodology.
- **If the process-layer follow-up inquiry diverges from the interface stub contract,** revisit the interface stub's specificity (Section 7).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVLw
based on both devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md 

devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md
(reread them both fully now)

mean layer of routeman is solved in high degree, 

lets focus how it should be structured, consists of what parts etc.
```

</details>
