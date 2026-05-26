# Sensemaking — Routeman structural layer (spec organization + parts)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_11-00__routeman_structural_layer/_branch.md`

## Initial Sense Version (SV1 — Baseline Understanding)

Routeman's structural artifact must be authored as a SKILL.md + references file pair that follows project conventions (the 5 Core disciplines' pattern: `<discipline>/SKILL.md` + `<discipline>/references/<discipline>.md` with a `> Loading note` at the top of references and a `---- NOW SOLID INSTRUCTIONS START ----` separator before the Execute section) while accommodating routeman's expanded scope: 8 Q2 aggregation sections + Q6 validation layer + Q3 adaptive-guidance mechanism + Q4 LAYER-2 audit hooks + Q10 emission policy + Q1 autonomy register reads + 24-00 persistence model + 18-58 staged-mapping + 14-39's Discipline Contract refinement. The artifact must comply with the "disciplines self-contained" feedback (no outbound pointers to design-history `devdocs/inquiries/...`) while honoring the single-canonical-location commitment from Q5/Q6 R1 drift-coordination (no protocol duplication). Open: which sections live where; whether to split the references file; whether the warmup/ folder from deprecated_navigation is preserved; loading-order discipline for multiple protocol references; what format the process-layer stub takes since process layer is a separate follow-up inquiry.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1: 5-Core convention fit.** SKILL.md + `references/<discipline>.md` pattern with `> Loading note` + h1 identity + identity/components/process/failure/output/telemetry sections + `---- NOW SOLID INSTRUCTIONS START ----` separator + Execute section. Pattern observed across `/surfacing`, `/sense-making`, `/decompose`, `/innovate`, `/td-critique`.
- **C2: Self-containment principle.** No outbound pointers to design-history (`devdocs/inquiries/...`) from runtime spec files. Project feedback memory directive.
- **C3: Single-canonical-location principle.** Each protocol/contract has ONE home; routeman cross-references, does not duplicate. From Q5/Q6 R1 drift-coordination meta-process.
- **C4: Layer Commitment STRUCTURAL only.** Process layer is follow-up; structural artifact must leave process-layer placeholders (explicit, not silent).
- **C5: 13 inherited priors' commitments** must each be honored in the structural artifact (Q1-Q6 + Q10 + 14-39 + 16-31 + 18-58 + 24-00 + 24-01 + 24-01-30 + 24-40 + Q2).
- **C6: Existing project state.** Folder already renamed to `cognitive_harness/deprecated_navigation/` (per directory listing); migration is partially done.
- **C7: 14-39 REFINE #3 commitment.** Explicit "Discipline Contract" section MUST be added (extracts canonical /navigation's scattered input/output/invariant content into one section).
- **C8: 14-39's 26 lineage decisions** (14 inherit / 5 drop / 3 refine / 4 defer) must be honored at the structural level — inherited content embedded in references/routeman.md; dropped content absent from spec; refined content in updated form; deferred content marked with revival trigger.

### Key Insights

- **KI1: Self-containment + single-canonical-location are ORTHOGONAL via content-type partition.** Self-containment forbids outbound pointers to DESIGN-HISTORY (`devdocs/inquiries/...`). Single-canonical-location forbids duplicating PROTOCOL/CONTRACT content across files. The two principles operate at DIFFERENT scopes: routeman MUST restate inherited DESIGN content in self-contained form (e.g., the 16-type taxonomy from 14-39); routeman MUST cross-reference PROTOCOL content rather than duplicate (e.g., the Q5 file-system protocol file). No conflict.
- **KI2: Q2 finding's "8 new sections in routeman SKILL.md" actually means the routeman SPEC ARTIFACT.** The natural place for 8 sub-sections of an Aggregation Protocol is `references/routeman.md` (the long content file), not `SKILL.md` (the short procedural orchestrator at ~50 lines per 5-Core convention). Q2 finding used "SKILL.md" loosely; the structural interpretation places extended content in references.
- **KI3: Same applies to Q6 validation layer.** Q6 finding's "validation layer in routeman SKILL.md" → in references/routeman.md as a top-level section; SKILL.md Instructions step "validate worker artifacts" REFERENCES the section.
- **KI4: Warmup folder (FF-S1) is architecturally obsolete.** The deprecated_navigation `warmup/` folder existed for canonical /navigation's "full-warmup-needed" input mode (when the discipline needed prior-context loading from human). Under the corrected isolated-session + file-scanning architecture from 16-31, routeman scans inquiry folders for its inputs — the file system IS the persistent context; no warmup needed. Dropping the warmup folder is architecturally correct.
- **KI5: Process-layer stub specifies INTERFACE, not implementation.** The Execute section in references/routeman.md describes what the process layer will receive (inputs) + what it must produce (outputs per 24-00 schema + Q2 aggregation) + what cross-cutting concerns it must address (phase activation; failure modes; telemetry) + the explicit follow-up inquiry's revival trigger. The interface is structural (boundary); the implementation is process-layer (out of scope for this run).
- **KI6: Embed-vs-cross-reference rule (operational form of KI1):** PROTOCOL/REGISTER content lives in its canonical file and is CROSS-REFERENCED from routeman (Q5 file-system protocol; Q6 contracts in Q5 file; Q4 audit protocol; multi_resolution_navigation; branch_inquiry; `docs/autonomy_level.md`; `docs/discipline_taxonomy.md`). DESIGN-MEMO content MUST be RESTATED in self-contained form (14-39's 3-layer identity; 16-type taxonomy; 17/18-attribute schema; Q2 aggregation rules; Q3 mechanism; Q6 validation parser; Q10 emission policy; etc.).
- **KI7: Reference-file split decision (FF-S2) reduces to taxonomy-only.** The 16-type × 6-attribute table is the LARGEST single embed (~100 lines if fully rendered with Movement Family + 6 secondary attributes per type per 01-30). Other potential splits (aggregation rules; audit hooks; persistence model) are smaller content and more tightly coupled to the main reference file's narrative. The split decision reduces to: split route_taxonomy.md from main file YES vs NO. The L0 choice is single-file (5-Core convention); L1+ refactor can split if growth warrants.

### Structural Points

- **SP1: SKILL.md is the SHORT procedural orchestrator** (~50-100 lines per 5-Core convention). Contains: frontmatter (name + description) + h1 identity + Step 0 mandatory pre-read directive (loading references/routeman.md full) + Additional Input/Instructions placeholder (`$ARGUMENTS`) + numbered Instructions list (~6-10 steps including loading register + validating worker artifacts via Q6 + scanning per Q5 + aggregating per Q2 + emitting per Q10 + emitting telemetry + persisting via 24-00) + reference-loading-during-execution note (for lazy protocol loads).
- **SP2: `references/routeman.md` is the LONG content file** (~500-800 lines). Contains: `> Loading note` + h1 `# /routeman — Cycle-consumer + Adaptive Guidance` + canonical 5-Core sections + 8 routeman-specific top-level sections + Execute section with process-layer interface stub.
- **SP3: 8 routeman-specific top-level sections** in references/routeman.md:
  - **Discipline Contract** (14-39 REFINE #3): explicit input/output/invariants/preconditions in one section.
  - **Aggregation Protocol** (Q2): 8 sub-sections P1-P8 per Q2 finding (architectural pre-conditions; dedup-surface; per-Movement-Family rules; telemetry roll-up; schema unification + aggregation_scope; hierarchical composition; phase progression; spec coherence).
  - **Adaptive Guidance Mechanism** (Q3): two-stage anchor-then-refine + per-movement-type chain + audit substrate.
  - **Validation Layer** (Q6): parser + per-discipline dispatch table + 3-tier emitter (INFO / WARN / ERROR).
  - **LAYER-2 Audit Surface** (Q4): description of what routeman EXPOSES for audit + cross-reference to `cognitive_harness/protocols/layer2_audit.md`.
  - **Emission Policy** (Q10): Option 13 hybrid + D1 confidence labels + per-route-type-split + first-ship LOW fallback + two-epoch framing.
  - **Persistence Model** (24-00): `_navig.md` + `routeman.md` schemas + hybrid placement + lifecycle + cross-reference to multi_resolution_navigation protocol + branch_inquiry boundary.
  - **Phase Activation Table** (cross-cutting): L0/L1+/L2+ rows × per-resolved-question columns (Q1+Q2+Q3+Q4+Q5+Q6+Q10) showing which behavior activates when.
- **SP4: Canonical 5-Core sections preserved** in references/routeman.md: Identity (3-layer per 14-39) + Components (10 features per 14-39) + Process Model (stubbed with interface description) + Failure Modes (11-mode 2-layer split: 6 LAYER-1 + 5 LAYER-2 per 14-39 + 18-58 + 06-00) + Output (17/18-attribute schema per 14-39 + 18-58 + 24-00) + Telemetry + `---- NOW SOLID INSTRUCTIONS START ----` separator + Execute (with process-layer interface stub).
- **SP5: Migration artifacts (4) at edit sites OUTSIDE routeman folder:**
  - `cognitive_harness/MVL/SKILL.md` update (replace /navigation with /routeman in pipeline).
  - `cognitive_harness/MVLw/SKILL.md` update (same).
  - `install_for_claude.sh` + `install_for_codex.sh` update (install routeman in place of navigation).
  - `cognitive_harness/deprecated_navigation/_archive_note.md` write (archive note pointing to routeman + naming rename rationale; deprecated_navigation/ folder already exists per ls).
- **SP6: 16-type taxonomy table EMBEDDED** in references/routeman.md as appendix-style section at L0. Split to `references/route_taxonomy.md` deferred to L1+ refactor.
- **SP7: Loading-order discipline:** SKILL.md Step 0 pre-loads references/routeman.md (full) + `docs/autonomy_level.md` register (per Q1's 3-tier read protocol). Protocol files loaded LAZILY at the Instruction step that uses them (Q5 protocol at "scan worker artifacts" step; Q6 contracts via Q5 file at "validate worker artifacts" step; Q4 audit protocol surfaced at routeman invocation-end; multi_resolution_navigation at "persist Route Map" step; branch_inquiry at "promote route to inquiry" step if that path activates). Avoids 5+ protocol loads at every invocation.

### Foundational Principles

- **FP1: Convention fit preferred.** 5-Core pattern is the project's structural-convention baseline; routeman EXTENDS the convention (adds 8 sections + Phase Activation Table) rather than VIOLATES it (no replacement of canonical sections).
- **FP2: Self-containment + single-canonical-location operationalized via content-type partition.** Design content RESTATED in routeman; protocol/register content CROSS-REFERENCED. Two principles, two scopes, no conflict.
- **FP3: Single-canonical-location for protocols.** Each protocol file at `cognitive_harness/protocols/` has ONE home; routeman cross-references. R1 drift-coordination keeps cross-references coherent across commits.
- **FP4: Layer separation strict.** Structural artifact must NOT specify process-layer details; process-layer placeholders are EXPLICIT (process-layer interface stub), not silent or implicit.
- **FP5: Phase-progression cross-cutting axis.** L0/L1+/L2+ activation present in 7+ resolved questions (Q1+Q2+Q3+Q4+Q5+Q6+Q10); routeman SKILL.md surfaces this as its own top-level Phase Activation Table section.
- **FP6: Asymmetric-failure principle (from /surfacing).** Structural artifact must err toward EXPLICIT over IMPLICIT; over-coverage (too many sections) is recoverable; under-coverage (missing sections; silent stubs) requires re-design.

### Meaning-Nodes

- **MN1: SKILL.md** = short procedural orchestrator (~50-100 lines; frontmatter + h1 + Step 0 + Instructions + reference-loading note).
- **MN2: `references/routeman.md`** = long content reference (~500-800 lines; canonical 5-Core sections + 8 routeman-specific sections + Execute with process-layer interface stub).
- **MN3: `references/route_taxonomy.md`** = deferred L1+ split for the 16-type table.
- **MN4: Phase Activation Table** = cross-cutting top-level section for L0/L1+/L2+ activation rules per resolved-question.
- **MN5: Discipline Contract** = extracted top-level section (per 14-39 REFINE #3) collecting input/output/invariant content.
- **MN6: Migration artifacts** = 4 commitments living OUTSIDE routeman folder (MVL + MVLw SKILL.md + install scripts + archive note).
- **MN7: Self-containment** = restate design content in routeman; no outbound pointers to design-history.
- **MN8: Single-canonical-location** = cross-reference protocol/register content from canonical protocol/register files.
- **MN9: Process-layer interface stub** = explicit placeholder in references/routeman.md's Execute section specifying inputs/outputs/cross-cutting concerns of the (future) process-layer specification.
- **MN10: Embed-vs-cross-reference rule** = operational form of self-containment + single-canonical-location: design content embedded (restated); protocol/register content cross-referenced.

### Phase 1 Meta-Inspection (H4 concept names + H5 motivating examples)

- **H4 concept names check:** `SKILL.md`, `references/routeman.md`, `Discipline Contract`, `Aggregation Protocol`, `Validation Layer`, `Adaptive Guidance Mechanism`, `Emission Policy`, `LAYER-2 Audit Surface`, `Persistence Model` are inherited from 5-Core convention or resolved-question commitments. `Phase Activation Table`, `process-layer interface stub`, `embed-vs-cross-reference rule`, `content-type partition` are novel coined-terms — flagged for Phase 3 Load-bearing concept test.
- **H5 motivating examples check:** 5 Core discipline specs + deprecated_navigation are concrete INSTANCES of the structural pattern. The design targets the broader pattern (routeman's structure inheriting from + extending the convention), but specific instances inform the pattern. Risk: over-fitting to /surfacing's specific structure (recency-bias toward the most-recently-read instance during this session). Mitigation: explicit cross-reference to ALL 5 Core disciplines as the joint baseline, not just one; the convention is what survives across all 5, not what one happens to do uniquely.

### Sense Version 2 (SV2 — Anchor-Informed Understanding)

Routeman's structural artifact is a 2-file package: `SKILL.md` (short procedural orchestrator at ~50-100 lines) + `references/routeman.md` (long content reference at ~500-800 lines), with an optional `references/route_taxonomy.md` deferred to L1+. The artifact extends 5-Core convention by adding 7-8 routeman-specific top-level sections inside references/routeman.md (Discipline Contract / Aggregation Protocol / Adaptive Guidance Mechanism / Validation Layer / LAYER-2 Audit Surface / Emission Policy / Persistence Model / Phase Activation Table). Self-containment (restate design-history content) and single-canonical-location (cross-reference protocol content) are orthogonal rules with two scopes — no conflict. Process-layer stub specifies INTERFACE (inputs/outputs/cross-cutting concerns) pending follow-up inquiry. Migration artifacts (4) live OUTSIDE routeman folder at edit sites. Warmup folder dropped (architecturally obsolete). Loading order: SKILL.md Step 0 pre-loads references/routeman.md + autonomy register; protocols loaded lazily.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- **Tech-1:** 5-Core convention is the obvious structural inheritance. SKILL.md ~50 lines + references/<discipline>.md ~500 lines is the project-canonical shape. Routeman's expansion is additive (extra sections in references/routeman.md; possibly an additional reference file for the taxonomy at L1+).
- **Tech-2:** SKILL.md vs references split is load-pattern-driven. SKILL.md loaded at every invocation as procedural entry point; references/<discipline>.md loaded at Step 0 as the full reference per Loading note pattern. Routeman reproduces this split.
- **Tech-3:** Loading order — SKILL.md Step 0 mandates references/routeman.md full-load + autonomy register full-load. Protocol files loaded LAZILY at the Instruction step that uses them (Q5 protocol at scan step; Q6 contracts at validate step; Q4 audit at invocation-end; multi_resolution_navigation at persist step). Lazy loading avoids 5+ protocol-file loads per invocation while preserving cross-references for runtime use.
- **Tech-4:** The 16-type × 6-attribute table is ~100 lines if fully rendered with Movement Family + 6 secondary attributes per type. Moderate size — leans toward L0-embed (single-file references) with L1+ split option preserved.

### Human / User

- **Hum-1:** SKILL.md author needs to know WHERE in references/routeman.md to put each resolved-question commitment. The structural design must enumerate the section organization explicitly so the author doesn't re-design.
- **Hum-2:** Downstream consumers (the runner; the LAYER-2 audit at 06-00; the human Selector at L0; future system Selector at L2+) read different parts of routeman artifact. Multiple consumption modes supported: Selector reads aggregate verdict + Route Map; audit reads worker_telemetry sub-block per its per-mode dispatch; runner reads SKILL.md procedural Instructions; SKILL.md author reads references/routeman.md for full context.

### Strategic / Long-term

- **Strat-1:** Phase Activation Table is the long-term coordination point. As project advances L0→L1+→L2+, the activation table evolves; being a top-level section makes evolution surface-visible. If activation rules were nested per-resolved-question, cross-resolved-question phase coordination would be lost.
- **Strat-2:** Reference-file split decision has long-term implications. If routeman gains MORE resolved-question commitments (when Q11+Q12+Q13+Q14+Q15 resolve; when /reflect coupling spec lands; when /intuit Phase β+ ships F-seed extension), single-file references/routeman.md may grow unwieldy. Setting up file-split pattern early (with route_taxonomy.md) establishes precedent for future splits. But L0 ships single-file (convention-aligned); L1+ refactor when growth warrants.

### Risk / Failure

- **Risk-1: Process-layer stub becoming permanent.** If the follow-up inquiry is delayed, the stub may become de-facto specification. Mitigation: the stub MUST name the specific follow-up inquiry's revival trigger ("when the process-layer follow-up inquiry runs"); the stub describes the process-layer's INTERFACE (what it must specify), not its CONTENT (which awaits the inquiry). Future SKILL.md authors honor the interface.
- **Risk-2: Cross-reference drift.** If Q5 protocol or Q6 contracts change, routeman SKILL.md's cross-references may go stale. Mitigation: R1 drift-coordination meta-process (from Q6) extends to routeman ↔ protocol coordination; routeman SKILL.md authoring commits to R1.
- **Risk-3: Self-containment violation drift.** Over time, an author might add an outbound pointer to a design memo. Mitigation: explicit policy rule in routeman SKILL.md's preamble ("this spec is self-contained; no outbound pointers to devdocs/inquiries/"); audit can detect violations via simple grep.
- **Risk-4: 5-Core convention may not perfectly fit routeman's expanded scope.** Mitigation: routeman EXTENDS the convention (adds sections) rather than VIOLATES it (replaces canonical sections). Section vocabulary preserved; routeman adds.

### Resource / Feasibility

- **Res-1:** SKILL.md authoring effort is bounded — ~50-100 lines of procedural Instructions + ~500-800 lines of references. Structural design here determines the SKELETON; the content is largely inherited from 13 priors (restated in self-contained form).
- **Res-2:** Reference-file split (if chosen at L1+) adds one new file (`references/route_taxonomy.md`) — minimal cost.
- **Res-3:** Migration artifacts (4 commitments outside routeman folder) are small edits to existing files (runner specs + install scripts + archive note). Bounded effort.

### Definitional / Internal Consistency

- **Def-1: "SKILL.md" vs "spec artifact"** — Q2 finding said "8 new sections in routeman SKILL.md" but the natural place is references/routeman.md. KI2 tightens by recognizing the SKILL.md + references package as the "spec artifact"; Q2's terminology was loose.
- **Def-2: "Self-containment" vs "single-canonical-location"** — these are NOT in conflict per KI1; they operate at different scopes (design-history vs protocol-canonical).
- **Def-3: Internal consistency of the design:** SKILL.md + references file + optional taxonomy split + 8 routeman-specific sections + Phase Activation Table + cross-references to 5+ protocols + restatement of design-inherited content + migration artifacts — all compose without internal contradiction.

### Definitional / Frame-exit Completeness — GATING CHECK

**Gating predicate (i):** inquiry's commitments include terms inherited from prior findings — YES (13 priors).

**Gating predicate (ii):** those inherited terms used across ≥2 distinct values/levels WITHIN inquiry's committed structures — YES. Multiple inherited terms used at distinct values:
- **"Section"** — used as: SKILL.md top-level section; references/routeman.md top-level section; references/routeman.md sub-section; routeman-specific section (Aggregation Protocol / Validation Layer / etc.); canonical section (Identity / Components / Process Model). FIVE distinct STRUCTURAL ROLE values.
- **"Reference"** — used as: 5-Core references file (`references/<discipline>.md`); cross-reference to protocol; cross-reference to register; embedded reference table (16-type taxonomy); inheritance reference (design-history pointer, FORBIDDEN). FIVE distinct STRUCTURAL ROLE values; one explicitly forbidden.
- **"Protocol"** — used as: Q5 file-system protocol file; Q6 contracts (as sections in Q5 file); Q4 audit protocol file; multi_resolution_navigation protocol; branch_inquiry protocol; spec_governance protocol (etc.; 9 files in `cognitive_harness/protocols/`). MULTIPLE distinct TYPE values.
- **"Phase"** — used as: L0/L1+/L2+ project autonomy phase; design phase (meaning/structural/process layer per Layer Commitment); migration phase (deprecated_navigation phase / routeman phase). MULTIPLE distinct STRUCTURAL ROLE values.

**Gating fires. Apply 4 meta-categories:**

**1. Existence Enumeration:**
- **"Section" referents project-wide:** SKILL.md sections (frontmatter + h1 + Step 0 + Additional Input + Instructions + reference-loading note); references-file sections (Loading note + h1 + Identity + Components + Process Model + Failure Modes + Output + Execute); protocol-file sections (vary); contract sections (Q6's 8 sections in Q5 protocol file); routeman-specific sections (Aggregation Protocol / Validation Layer / etc.). All in-frame or relevant.
- **"Reference" referents project-wide:** discipline references files at `<discipline>/references/<discipline>.md`; protocol files at `cognitive_harness/protocols/`; project-state files at `docs/autonomy_level.md`, `docs/desc.md`, `docs/discipline_taxonomy.md`; contract files at `cognitive_harness/contracts/`; cognitive_fixes files at `cognitive_harness/cognitive_fixes/`; design-memo files at `devdocs/inquiries/...` (FORBIDDEN outbound-pointer target per self-containment). All relevant; one explicitly forbidden.
- **"Protocol" referents project-wide:** 9 protocol files in `cognitive_harness/protocols/` (artifact_materialization, branch_inquiry, conclude, loop_diagnose, multi_resolution_navigation, navigation_context_intake, outcome_review, resume, spec_governance) + Q4 audit protocol (planned at `layer2_audit.md`) + Q5 file-system protocol (planned at `inquiry_filesystem_protocol.md`). The routeman-relevant subset is 5-6 protocols (Q4 + Q5 + Q6-contracts-in-Q5 + multi_resolution_navigation + branch_inquiry); the broader 9-protocol set is project context.
- **"Phase" referents project-wide:** project autonomy phases (L0/L1+/L2+/L3+/L4+ per 24-40); design layers (meaning/structural/process per MVLw Layer Commitment); migration phases (current = partial migration with deprecated_navigation/ existing). All in-frame at different scopes.

**2. Role Assessment:**
- **Out-of-frame referent: design-memo references at `devdocs/inquiries/...`.** ROLE: design history that ROUTEMAN MUST NOT POINT TO (per self-containment). IS routeman's coherence preserved if these are forbidden? YES — the design content is RESTATED in self-contained form per KI1 + KI6. The forbidden-pointer rule is a structural commitment, not a coherence loss.
- **Out-of-frame referent: process-layer content.** ROLE: HOW routeman's features fire (sequencing; runtime mechanism; loop iteration). IS routeman's coherence preserved if process layer is deferred? YES — process is a separate inquiry; structural artifact stubs the Execute section with explicit INTERFACE placeholder per KI5. The structural design must SPECIFY the placeholder, not silently omit.
- **Out-of-frame referent: other 4 protocols in `cognitive_harness/protocols/`** (artifact_materialization, conclude, loop_diagnose, navigation_context_intake, outcome_review, resume, spec_governance — the non-routeman-relevant subset). ROLE: project protocols for other workflows. IS routeman's coherence preserved if these aren't referenced? YES if routeman doesn't depend on them. None are routeman dependencies (conclude is called by /MVLw at iteration-complete; resume is for cross-session resume of inquiries; spec_governance is for spec change-control; etc.). Confirmed out-of-frame.

**3. Verdict Rigor:**
- **Clean-boundary verdict: "Single-file references/routeman.md is correct at L0."** Strongest counter: maybe MULTIPLE splits are justified (route_taxonomy.md + aggregation_rules.md + audit_hooks.md + persistence_model.md), making routeman's references folder a richly-organized appendix collection. Test on structural grounds: each potential split has a cost (file load + cross-reference maintenance) and a benefit (navigability for that specific content). The 16-type table is the LARGEST embed (~100 lines); other potential splits are smaller and more tightly coupled to narrative. The single-split-deferred decision is sound; multi-split at L0 is premature.
- **Clean-boundary verdict: "Process-layer is out-of-scope for this run."** Strongest counter: maybe the structural artifact CANNOT be designed without knowing process. If process specifies that, e.g., the Aggregation Protocol fires AFTER scanning AND BEFORE Validation Layer, the structural section ordering may need to reflect this. Test on structural grounds: process-layer determines RUNTIME ordering; structural design determines DOCUMENT ordering. The two are independent — document sections can be ordered for reader navigability (canonical sections first; routeman-specific sections second; Execute last) while runtime ordering is the process-layer's responsibility. Layer Commitment holds.

**4. Residual / Coverage Justification:**
- Frame-exit concern not captured: TOOLING for self-containment compliance enforcement. Is there a project artifact that automatically enforces self-containment (build-time check; pre-commit hook)? Apply Existence Enumeration: I haven't observed such tooling in the project scan. The self-containment principle is currently a NORM (project feedback memory directive), not a TOOL (build-time check). Routeman SKILL.md AUTHORING is expected to comply manually; future tooling (a `grep -r "devdocs/inquiries" cognitive_harness/routeman/` build check) is out-of-scope for L0 structural design. Terminate recursion.

### Phase / Calibration-State (REQUIRED — phase-dependent rules)

Routeman's structural artifact IS phase-dependent. The Phase Activation Table commits to L0/L1+/L2+ activation rules per resolved-question (Q1+Q2+Q3+Q4+Q5+Q6+Q10). The structural design accommodates phase progression as a cross-cutting axis. Perspective is required and is a central structural design output (the Phase Activation Table section).

### Phase 2 Meta-Inspection (H1 candidate set + H3 question framing)

- **H1 candidate set check:** 74 items from surfacing. Structurally redundant items? I-R7-02 (warmup folder) and I-R7-03 (no warmup folder) are mutually exclusive — KI4 resolves toward I-R7-03 (architecture-aligned drop). I-R3-01 (single references file) and I-R3-02 (split with taxonomy) are competing options for the split decision — A2 resolves toward I-R3-01 at L0 with I-R3-02 deferred to L1+. I-R4-13 (embed-with-summary hybrid) is a sub-option of cross-references — could be applied selectively (e.g., for Q5 cross-reference: cross-ref + embed 1-paragraph compliance summary).
- **H3 question framing check:** Is the question biased? The "meaning layer is solved" framing pre-biases toward NOT re-litigating identity / features / lineage. Acceptable because the user explicitly said meaning is solved; structural inquiry inherits meaning-layer commitments. Risk: structural decision might hide a meaning-layer decision (e.g., "separate references/audit_hooks.md file" might hide "is LAYER-2 audit hooks intrinsic to routeman or external sibling concern?"). Audit: most structural decisions surfaced are genuinely structural (file organization; section ordering; cross-ref vs embed). The hidden-meaning-layer risk doesn't materialize.

### Sense Version 3 (SV3 — Multi-Perspective Understanding)

The structural design crystallizes around 5 layered commitments:
- **COMMIT-1:** 2-file package (SKILL.md + references/routeman.md) at L0; `references/route_taxonomy.md` split deferred to L1+ refactor.
- **COMMIT-2:** 5-Core convention as baseline + 8 routeman-specific top-level section extensions inside references/routeman.md (Discipline Contract + Aggregation Protocol + Adaptive Guidance Mechanism + Validation Layer + LAYER-2 Audit Surface + Emission Policy + Persistence Model + Phase Activation Table). Canonical section vocabulary preserved (Identity / Components / Process Model placeholder / Failure Modes / Output / Telemetry / Execute).
- **COMMIT-3:** Self-containment + Single-canonical-location as orthogonal rules via content-type partition. Design-history content RESTATED in routeman; protocol/register content CROSS-REFERENCED.
- **COMMIT-4:** Process-layer explicitly stubbed in references/routeman.md's Execute section pending follow-up inquiry; stub specifies INTERFACE (inputs/outputs/cross-cutting concerns), not implementation.
- **COMMIT-5:** Migration artifacts (4) live OUTSIDE routeman folder at edit sites (MVL + MVLw SKILL.md updates + install scripts updates + deprecated_navigation archive note). Warmup folder DROPPED (architecturally obsolete).

---

## Phase 3 — Ambiguity Collapse

### Ambiguity A1 — SKILL.md vs references/routeman.md content placement for routeman-specific sections

**Description:** Q2 finding said "8 new sections in routeman SKILL.md" — does that literally mean SKILL.md (short procedural orchestrator) or references/routeman.md (long content file)? Same question for Q6 validation layer ("validation layer in routeman SKILL.md"). (Specific-vs-pattern + Load-bearing concept test apply for the "SKILL.md" concept.)

**Strongest counter-interpretation:** Maybe Q2 + Q6 findings literally meant SKILL.md — the Aggregation Protocol's 8 sub-sections + validation layer parser + per-discipline dispatch + 3-tier emitter belong in SKILL.md as procedural Instructions, not in references/routeman.md as reference content.

**Why the counter fails (structural grounds):** SKILL.md per 5-Core convention is ~50 lines of procedural orchestration. Adding 8 sections (~200 lines of aggregation rules) + validation layer (~150 lines of parser + dispatch + emitter) + other resolved-question content would balloon SKILL.md to 500+ lines, violating the SKILL.md-as-short-orchestrator convention. The references file is where extended content lives; the procedural orchestrator just CALLS into the reference content. KI2 + KI3 articulate this: Q2/Q6 used "SKILL.md" loosely to mean "the routeman SPEC ARTIFACT" (which includes both files).

**Confidence:** HIGH (the 5-Core convention provides clear structural evidence for the split; SKILL.md = procedural orchestrator, references = content).

**Resolution:** Routeman-specific sections (Aggregation Protocol; Validation Layer; Adaptive Guidance Mechanism; Emission Policy; LAYER-2 Audit Surface; Persistence Model; Phase Activation Table; Discipline Contract) live in references/routeman.md as top-level h2 sections. SKILL.md contains procedural Instructions that REFERENCE the relevant section by name + the runtime invocation pattern.

**What is fixed:** SKILL.md as short orchestrator (~50-100 lines); references/routeman.md as long content (~500-800 lines).
**What is no longer allowed:** putting extended content in SKILL.md; making references file optional.
**What now depends:** the section-ordering decision in references/routeman.md; the Instruction-step mapping in SKILL.md (which Instruction steps reference which references-file sections).
**What changed:** Q2 + Q6 finding's "SKILL.md" terminology is interpreted as "routeman spec artifact" (= SKILL.md + references package).

### Ambiguity A2 — Reference file split: single vs taxonomy-split

**Description:** Should references/routeman.md be a single file (matching 5-Core convention) or split with a separate `references/route_taxonomy.md` for the 16-type table?

**Strongest counter-interpretation:** Single file (5-Core convention) is the safer, more familiar choice; the 16-type table at ~100 lines is moderate, not unwieldy. Splitting adds maintenance overhead (one more file to coordinate; cross-reference between main file and taxonomy file).

**Why the counter fails (structural grounds):** The counter is partially correct (single-file is convention-aligned). But the 16-type table is QUALITATIVELY DIFFERENT from prose-narrative content — it's reference-table material (16 rows × 7+ columns). The 5-Core disciplines DON'T have large reference tables of this kind; their references files are predominantly prose. Splitting matches the content-type difference; it's an extension of convention rather than violation.

**Confidence:** MEDIUM (single-file is HIGH convention-aligned; split-taxonomy is MEDIUM on content-type-driven grounds; neither unambiguously dominant).

**Resolution:** Ship single-file `references/routeman.md` AT L0 with the 16-type table embedded as an appendix-style section. PRESERVE the taxonomy-split option (FF-S2) as a future refactor if the table grows (e.g., if 24-01-30's longitudinal observation revival trigger fires and adds types) or if future Q11+Q12+Q13+Q14+Q15 resolutions add reference content that warrants split. L0 = single-file (conventional); L1+ may split.

**What is fixed:** single-file `references/routeman.md` at L0.
**What is no longer allowed:** premature split at L0 (only one split decision at L0; future splits are L1+ refactor).
**What now depends:** the routeman.md section ordering (16-type table position as appendix).
**What changed:** the split decision is L1+ deferred, not L0 baseline.

### Ambiguity A3 — Process-layer stub format

**Description:** How does the structural artifact specify the process-layer stub? Does the Execute section in references/routeman.md just say "[process-layer pending]" or does it specify the INTERFACE the process layer will commit to?

**Strongest counter-interpretation:** Just say "[process-layer pending]" — the structural design has no business specifying what the process-layer must do; that's the process-layer inquiry's responsibility.

**Why the counter fails (structural grounds):** A bare "[pending]" stub is structurally weak — it leaves the SKILL.md author without guidance on how to write procedural Instructions that interface with the (future) process-layer specification. The stub SHOULD specify the INTERFACE: what inputs the process-layer will receive (the routeman spec context + the inquiry folder paths + the autonomy register value), what outputs it must produce (the aggregated Route Map per 24-00 schema + the 4 wrapper fields + the Q2 aggregation_meta + worker_telemetry sub-block), and what cross-cutting concerns it must address (Phase Activation Table; Failure Modes; Telemetry). The interface is STRUCTURAL (what the process-layer COMMUNICATES WITH), not procedural (what the process-layer DOES). Specifying the interface is within structural scope.

**Confidence:** HIGH (the structural artifact's coherence depends on naming the process-layer interface; a bare stub is structurally underspecified).

**Resolution:** The Execute section in references/routeman.md contains a process-layer stub that names: (a) inputs to the process layer; (b) outputs the process layer must produce; (c) cross-cutting concerns the process layer must address; (d) explicit revival trigger for the process-layer follow-up inquiry. Stub is INTERFACE-LEVEL, not implementation-level.

**What is fixed:** process-layer stub specifies interface (inputs/outputs/cross-cutting concerns + revival trigger).
**What is no longer allowed:** bare "[pending]" stubs without interface specification.
**What now depends:** the process-layer follow-up inquiry inherits the interface as constraint.
**What changed:** the structural artifact has an explicit interface contract with the process layer.

### Ambiguity A4 — Migration artifact ownership: routeman folder vs edit sites

**Description:** Where do migration artifacts live? In routeman folder (e.g., `cognitive_harness/routeman/MIGRATION.md` enumerating commitments)? Or at edit sites (runner folders + project root + deprecated_navigation/)?

**Strongest counter-interpretation:** Routeman folder owns migration — put a `cognitive_harness/routeman/MIGRATION.md` file enumerating all migration commitments + naming runner-spec edits + install-script edits + archive note edits. This is single-responsibility for migration coordination.

**Why the counter fails (structural grounds):** The counter creates a coordination ARTIFACT inside routeman folder, but actual edits happen OUTSIDE. A coordination file in routeman that doesn't live with the edits creates drift risk (the file goes stale when actual edits change). Migration artifacts should live AT EDIT SITES: runner-spec edits in `cognitive_harness/MVL/SKILL.md` + `cognitive_harness/MVLw/SKILL.md`; install-script edits in `install_for_claude.sh` + `install_for_codex.sh`; archive note in `cognitive_harness/deprecated_navigation/_archive_note.md`. Routeman folder contains ROUTEMAN; migration coordination lives in this inquiry's finding (design-history layer) + the 14-39 design memo's COULD actions (also design-history) + at-edit-site commits.

**Confidence:** HIGH (single-responsibility: migration artifacts live at edit sites; routeman folder contains routeman; coordination is at the design-history layer, not in the runtime spec).

**Resolution:** Migration artifacts live OUTSIDE routeman folder at their respective edit sites (MVL SKILL.md edit; MVLw SKILL.md edit; install scripts edits; deprecated_navigation archive note). Structural design ENUMERATES migration commitments but doesn't centralize a MIGRATION.md inside routeman.

**What is fixed:** migration artifacts live at edit sites; no MIGRATION.md inside routeman.
**What is no longer allowed:** centralizing migration coordination inside routeman folder.
**What now depends:** SKILL.md authoring follow-up + runner-update follow-up + install-script-update follow-up + archive-note-writing follow-up.
**What changed:** 4 migration commitments enumerated explicitly with respective edit sites.

### Ambiguity A5 — Self-containment line for protocol cross-references (FF-S4)

**Description:** Self-containment forbids outbound pointers to design-history. Single-canonical-location forbids duplicating protocol content. These create apparent tension if a piece of routeman's commitment is BOTH inherited from design history AND committed by a protocol (e.g., the dedup-surface 3-tuple from Q2 finding is now committed in the Q2-resolution-derived 8 sections of routeman SKILL.md; should routeman SKILL.md reference the Q2 finding, or treat the design as self-contained?). (Load-bearing concept test applies for "self-containment" + "single-canonical-location" concepts.)

**Strongest counter-interpretation:** Q2 finding IS the canonical authority for the dedup-surface design; routeman SKILL.md should cross-reference Q2 finding to point to the canonical design. This violates self-containment but preserves single-canonical-location.

**Why the counter fails (structural grounds):** Self-containment is the LOAD-BEARING rule. Q2 finding is design history (`devdocs/inquiries/...`); pointing to it from routeman SKILL.md violates self-containment. The resolution: Q2 finding's design BECOMES routeman SKILL.md content (RESTATED in self-contained form). Q2 finding is the ORIGIN; routeman SKILL.md is the CANONICAL RUNTIME LOCATION. After the runtime spec is authored, Q2 finding becomes design history (not the canonical location). Single-canonical-location applies to PROTOCOL/CONTRACT content (which lives in dedicated protocol files at `cognitive_harness/protocols/`); it doesn't apply to DESIGN content (which is restated in the runtime spec). The two rules apply to different content TYPES, not the same content competing.

**Confidence:** HIGH (the two rules apply to different content types — protocol content vs design content — without conflict).

**Resolution:** routeman SKILL.md + references/routeman.md restate Q2 design content (the 8 aggregation sections) in self-contained form. Q2 finding becomes design history with the restated content moved to routeman's runtime spec as the canonical runtime location. For protocol content (Q5 file-system protocol file; Q6 contracts as sections in Q5 file; Q4 audit protocol file; multi_resolution_navigation; branch_inquiry; `docs/autonomy_level.md` register; `docs/discipline_taxonomy.md`), routeman cross-references the canonical protocol/register file.

**Operational rule:** PROTOCOL/REGISTER content → CROSS-REFERENCE (canonical location is the protocol/register file). DESIGN/MEMO content → RESTATE (canonical location becomes the runtime spec).

**What is fixed:** design content RESTATED; protocol/register content CROSS-REFERENCED. Rule applies based on content TYPE, not source.
**What is no longer allowed:** outbound pointers to design history; duplication of protocol content in routeman.
**What now depends:** the SKILL.md author's per-section decision (restate vs cross-reference based on content type).
**What changed:** the self-containment vs single-canonical-location tension is DISSOLVED via content-type partition.

### Sense Version 4 (SV4 — Clarified Understanding)

The 5 ambiguities resolve to a coherent design:
- SKILL.md (~50-100 lines short orchestrator) + references/routeman.md (~500-800 lines long content) at L0; route_taxonomy.md split deferred to L1+.
- Routeman-specific content lives in references/routeman.md as 8 new top-level h2 sections.
- Process-layer stub specifies INTERFACE (inputs/outputs/cross-cutting concerns/revival trigger), not implementation.
- Migration artifacts (4) at edit sites OUTSIDE routeman folder; no MIGRATION.md inside.
- Self-containment + single-canonical-location DISSOLVED via content-type partition: design content RESTATED in routeman; protocol/register content CROSS-REFERENCED.

5/5 ambiguities resolved (4 HIGH + 1 MEDIUM-on-split-decision-deferred). FF-S2 partially dissolved (split = L1+ deferred). FF-S4 DISSOLVED (content-type partition). FF-S7 partially addressed (lazy protocol loading at instruction steps).

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

- 2-file package: SKILL.md + references/routeman.md at L0; single-file references/routeman.md.
- SKILL.md ~50-100 lines (short procedural orchestrator); references/routeman.md ~500-800 lines (long content reference).
- 5-Core convention preserved (frontmatter + h1 + Step 0 + Additional Input + Instructions + Loading note + `---- NOW SOLID INSTRUCTIONS START ----` separator + Execute).
- 8 routeman-specific top-level h2 sections in references/routeman.md: Discipline Contract / Aggregation Protocol / Adaptive Guidance Mechanism / Validation Layer / LAYER-2 Audit Surface / Emission Policy / Persistence Model / Phase Activation Table.
- Canonical sections preserved: Identity (3-layer) / Components (10 features) / Process Model (stubbed) / Failure Modes (11-mode 2-layer split) / Output (17/18-attribute schema) / Telemetry / Execute (with process-layer interface stub).
- Self-containment: design content RESTATED in routeman; NO outbound pointers to `devdocs/inquiries/...`.
- Single-canonical-location: protocol/register content CROSS-REFERENCED to canonical files.
- 16-type table EMBEDDED in references/routeman.md as appendix-style section.
- Phase Activation Table as top-level cross-cutting section.
- Process-layer stub in Execute section specifies INTERFACE (inputs/outputs/cross-cutting concerns + revival trigger).
- Migration artifacts (4) at edit sites OUTSIDE routeman folder; no MIGRATION.md inside.
- Warmup folder DROPPED (architecturally obsolete).
- R1 drift-coordination meta-process extends to routeman ↔ protocol coordination.
- Lazy protocol loading at instruction steps (not Step 0 mega-load); Step 0 loads references/routeman.md + autonomy register only.

### Eliminated

- Ad-hoc embed/cross-reference decisions (A5 content-type partition rule).
- Premature reference-file split at L0 (A2 — deferred to L1+).
- Bare "[pending]" process-layer stub (A3 — interface specification required).
- Centralized MIGRATION.md inside routeman (A4 — edit-site ownership).
- Outbound pointers to design history (self-containment).
- Warmup folder at L0 (KI4 — architecturally obsolete).
- Multi-protocol Step-0 mega-load (Tech-3 — lazy loading at instruction steps).
- Putting routeman-extended content in SKILL.md (A1 — references file is the right location).

### Viable paths remaining

- The committed L0 structural design (2-file package; 5-Core convention + 8 routeman-specific sections; self-containment + single-canonical-location via content-type partition; process-layer interface stub; migration artifacts at edit sites; warmup dropped; lazy protocol loading).
- L1+ refactor: split references/routeman.md → routeman.md + route_taxonomy.md if growth warrants.
- L1+/L2+ activation: Phase Activation Table fills with per-tier behavior as autonomy register advances.
- Process-layer follow-up: separate inquiry honors the interface stub.

### Sense Version 5 (SV5 — Constrained Understanding)

The design is constrained to: a 2-file SKILL.md + references/routeman.md package at `cognitive_harness/routeman/` extending 5-Core convention with 8 routeman-specific top-level sections inside references/routeman.md (Discipline Contract + Aggregation Protocol + Adaptive Guidance Mechanism + Validation Layer + LAYER-2 Audit Surface + Emission Policy + Persistence Model + Phase Activation Table); self-containment + single-canonical-location via content-type partition (design content RESTATED; protocol/register content CROSS-REFERENCED); process-layer interface stub in Execute section; migration artifacts (4) at edit sites OUTSIDE routeman folder; warmup folder dropped; lazy protocol loading at instruction steps. ~80% convention-inheritance + design-content-restatement; ~20% novel routeman-specific structural extensions (the 8 sections + Phase Activation Table + process-layer interface stub format + content-type partition rule).

---

## Phase 5 — Conceptual Stabilization

The structural design is a 2-file routeman spec package at `cognitive_harness/routeman/` that mirrors 5-Core discipline convention. SKILL.md is the short procedural orchestrator (~50-100 lines); references/routeman.md is the long content reference (~500-800 lines). The references file extends canonical Core convention with 8 routeman-specific top-level sections capturing the resolved Q1-Q6 + Q10 + 14-39 + 16-31 + 18-58 + 24-00 + 24-01 + 24-01-30 + 24-40 commitments. The artifact is self-contained (design content restated; no design-history pointers) while honoring single-canonical-location (protocol/register content cross-referenced). Process-layer stub specifies interface, not implementation. Migration artifacts (4) live at edit sites outside routeman folder. Warmup folder dropped. Architecture invariants preserved (singleton + file-mediated + isolated + enumerate-all + observe-only).

### Phase 5 Meta-Inspection (H6 model fit)

**Accommodation trigger check:** Did the model require patching across 5 ambiguity collapses? A1, A3, A4, A5 resolved with HIGH confidence on first attempt — no patching. A2 resolved with MED confidence on the L0-single-file decision with L1+ deferred split — the model accommodated by deferring split rather than committing or rejecting; this was a re-framing (single-file at L0 + future refactor option), not a patch. Model fit is sound; Accommodation trigger does NOT fire.

### Final Sense Version (SV6 — Stabilized Model)

**Routeman's structural artifact is a 2-file package at `cognitive_harness/routeman/` consisting of a short procedural-orchestrator `SKILL.md` (~50-100 lines) + a long content-reference `references/routeman.md` (~500-800 lines), extending 5-Core discipline convention with 8 routeman-specific top-level h2 sections inside the references file:**

1. **Discipline Contract** (from 14-39 REFINE #3): explicit input/output/invariants/preconditions extracted into one section.
2. **Aggregation Protocol** (Q2): 8 sub-sections P1-P8 (architectural pre-conditions; dedup-surface 3-tuple; per-Movement-Family rules; telemetry roll-up; schema unification + aggregation_scope; hierarchical composition; phase progression; spec-coherence).
3. **Adaptive Guidance Mechanism** (Q3): two-stage anchor-then-refine + per-movement-type chain + audit substrate.
4. **Validation Layer** (Q6): parser + per-discipline dispatch table + 3-tier emitter (INFO / WARN / ERROR).
5. **LAYER-2 Audit Surface** (Q4): description of what routeman EXPOSES for audit + cross-reference to `cognitive_harness/protocols/layer2_audit.md`.
6. **Emission Policy** (Q10): Option 13 hybrid + D1 confidence labels + per-route-type-split + first-ship LOW fallback + two-epoch framing.
7. **Persistence Model** (24-00): `_navig.md` + `routeman.md` schemas + hybrid placement + lifecycle + cross-reference to multi_resolution_navigation protocol + branch_inquiry boundary.
8. **Phase Activation Table** (cross-cutting): L0/L1+/L2+ rows × per-resolved-question columns showing which behavior activates when.

**Canonical 5-Core sections preserved** in references/routeman.md: `> Loading note` + h1 + Identity (3-layer per 14-39) + Components (10 features per 14-39) + Process Model (stubbed with process-layer interface description) + Failure Modes (11-mode 2-layer split: 6 LAYER-1 + 5 LAYER-2 per 14-39 + 18-58 + 06-00) + Output (17/18-attribute schema per 14-39 + 18-58 + 24-00) + Telemetry + `---- NOW SOLID INSTRUCTIONS START ----` separator + Execute (with explicit process-layer interface stub specifying inputs/outputs/cross-cutting concerns + naming the follow-up inquiry's revival trigger).

**Self-containment + single-canonical-location DISSOLVED via content-type partition.** Design content (16-type taxonomy; 17/18-attribute schema; 3-layer identity; 10 features; Q2 aggregation rules; Q3 mechanism; Q6 validation layer parser; Q10 emission policy; etc.) is RESTATED in routeman in self-contained form. Protocol/register content (Q5 file-system protocol file; Q6 contracts as sections in Q5 file; Q4 audit protocol file; multi_resolution_navigation; branch_inquiry; `docs/autonomy_level.md` register; `docs/discipline_taxonomy.md`) is CROSS-REFERENCED. No outbound pointers to `devdocs/inquiries/...` (design history).

**Reference file split deferred:** single-file `references/routeman.md` at L0 (5-Core convention); split with `references/route_taxonomy.md` deferred to L1+ refactor if growth warrants.

**Migration artifacts (4) at edit sites OUTSIDE routeman folder:**
- (a) `cognitive_harness/MVL/SKILL.md` update (pipeline reference: /navigation → /routeman).
- (b) `cognitive_harness/MVLw/SKILL.md` update (same).
- (c) `install_for_claude.sh` + `install_for_codex.sh` updates (install routeman in place of navigation).
- (d) `cognitive_harness/deprecated_navigation/_archive_note.md` write (archive note pointing to routeman + naming rename rationale).

**Warmup folder DROPPED:** the deprecated_navigation `warmup/` folder is architecturally obsolete under the corrected isolated-session + file-scanning architecture from 16-31. Routeman scans inquiry folders; the file system IS the persistent context; no prior-context warmup needed.

**Loading-order discipline:** SKILL.md Step 0 mandates loading `references/routeman.md` full + `docs/autonomy_level.md` register (per Q1's 3-tier read protocol). Protocol files (Q4 audit, Q5 file-system, Q6 contracts in Q5 file, multi_resolution_navigation, branch_inquiry) loaded LAZILY at the Instruction step that uses them. This avoids 5+ protocol-file loads at every invocation while preserving cross-references.

**The design is ~80% convention-inheritance + design-content-restatement + ~20% novel routeman-specific structural extensions** (the 8 routeman-specific sections + Phase Activation Table cross-cutting + process-layer interface stub format + content-type partition rule). The pattern matches Q5 + Q6 + Q2 (three consecutive resolutions of structural extensions on routeman) at the meta-level: structural extensions inheriting from canonical pattern + small novel commitments.

### Difference from SV1

SV1 framed the question as "how should routeman be structured" — open and many-axis. SV6 commits to a specific 2-file package with 5-Core convention extension via 8 routeman-specific sections + content-type partition rule for self-containment/single-canonical-location + process-layer interface stub + migration artifacts at edit sites + warmup folder dropped + lazy protocol loading. Most of the structure is convention-inherited; the novel pieces are small and well-bounded. The 8 frontier flags from Surfacing are addressed:

- **FF-S1** (warmup folder): DROPPED at L0 per KI4 (architecturally obsolete under corrected architecture).
- **FF-S2** (reference file split): DEFERRED to L1+ per A2 (single-file at L0; split if growth warrants).
- **FF-S3** (Q2 aggregation section placement): top-level h2 sections inside references/routeman.md per A1 + COMMIT-1.
- **FF-S4** (self-containment vs single-canonical-location): DISSOLVED via content-type partition per A5.
- **FF-S5** (section vocabulary): canonical 5-Core preserved + 8 routeman-specific extensions per COMMIT-2.
- **FF-S6** (migration artifact ownership): at edit sites OUTSIDE routeman folder per A4 + COMMIT-5.
- **FF-S7** (loading-order discipline): SKILL.md Step 0 loads references + register; protocols loaded lazily at instruction steps per Tech-3 + SP7.
- **FF-S8** (process-layer interface): explicit interface stub specifying inputs/outputs/cross-cutting concerns + revival trigger per A3 + COMMIT-4.

## Telemetry

- **Phases run:** 5 (full SV1→SV6 progression).
- **Anchor types extracted:** 5 (Constraints, Key Insights, Structural Points, Foundational Principles, Meaning-Nodes).
- **Anchor counts:** 8 Constraints + 7 Key Insights + 7 Structural Points + 6 Foundational Principles + 10 Meaning-Nodes = 38 anchors.
- **Perspectives applied:** 9 (Technical/Logical, Human/User, Strategic/Long-term, Risk/Failure, Resource/Feasibility, Definitional/Internal Consistency, Definitional/Frame-exit Completeness [gated and fired with 4 meta-categories], Phase/Calibration-State [required and applied], Phase-2-Meta H1+H3).
- **Ambiguities collapsed:** 5 (A1 SKILL.md vs references placement = HIGH; A2 reference file split = MEDIUM-on-deferred; A3 process-layer stub format = HIGH; A4 migration artifact ownership = HIGH; A5 self-containment vs single-canonical-location = HIGH; FF-S4 DISSOLVED via content-type partition).
- **Frontier flags addressed:** 8/8 (FF-S1 through FF-S8 from surfacing all addressed). 1 dissolved (FF-S4); 1 deferred (FF-S2); 6 directly resolved.
- **Meta-inspection hooks fired:** H1 (candidate set; informal); H2 (frame scope; via Frame-exit Completeness with 4 meta-categories); H3 (question framing; informal); H4 (concept names; Phase 1 Meta + Phase 3 Load-bearing test for novel coined-terms); H5 (motivating examples; flagged recency-bias risk to /surfacing); H6 (model fit; Accommodation trigger checked, did not fire); H7 (phase/calibration state; required, applied).
- **Failure modes checked:** Status Quo Bias / Premature Stabilization / Anchor Dominance / Perspective Blindness / Clean Resolution Trap / Self-Reference Blindness — none triggered. Frame-exit Completeness and Phase/Calibration-State perspectives applied to satisfy Perspective Blindness corrective.
- **Saturation indicators:** Perspective saturation = met (last 2 perspectives — Phase/Calibration-State and Phase-2 Meta — produced no new anchor types beyond confirming existing). Ambiguity resolution ratio = 5/5 = 100%. SV delta = substantial (SV1 was open-and-many-axis; SV6 is specific-and-anchored-in-13-priors). Anchor diversity = 5 types × 9 perspectives = high.

**Overall: PROCEED**
