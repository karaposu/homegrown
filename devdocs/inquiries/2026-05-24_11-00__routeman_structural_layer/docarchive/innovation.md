# Innovation — Routeman structural layer (spec organization + parts)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_11-00__routeman_structural_layer/_branch.md`

## Phase 1 — Seed + Methodology-Mode Consideration

### Seed

8 pieces inherited from Decomposition (P1 file structure + 5-Core convention + lazy loading; P2 canonical 5-Core sections; P3 8 routeman-specific sections; P4 content-type partition rule; P5 cross-reference list; P6 embedded content; P7 process-layer interface stub; P8 migration artifacts at edit sites + warmup folder drop) plus SV6 stabilized model from Sensemaking (2-file routeman spec package extending 5-Core convention with 8 routeman-specific sections, self-containment + single-canonical-location via content-type partition, process-layer interface stub, migration at edit sites, warmup dropped, lazy protocol loading).

Production-task mode (seed = 8-piece list from Decomposition; Innovation generates text per piece).

### Inherited methodology mode

**Standard default** — balanced 4G+3F; elaborate the committed direction; produce confident ship-ready output. Text signals in seed framing: "design the structural artifact" + "produce a design with components and trade-offs" + the SKILL.md-author-implementable directly criterion from Goal.

### Alternative mode considered

**Generator-weighted exploration** — maximize novel-candidate breadth. What follows: Surfacing already enumerated 74 alternatives across 10 regions; Sensemaking already converged 5 ambiguities (FF-S4 dissolved; FF-S2 deferred). Generator-weighted exploration at per-piece level would mostly re-produce killed candidates (similar pattern to Q4/Q5/Q6/Q2 inquiries). Candidate space already explored upstream.

### Decision

**Default — Standard default mode.** Innovation proceeds with the inherited mode and runs mechanisms per piece accordingly.

---

## Phase 2 — Generate (Per-Piece Mechanism Application)

### P1 — Two-file package + 5-Core convention + lazy loading (PROPERTY (v) PIECE)

**Meta-decision classification:** properties (b) framing-semantic (the file structure frame other pieces operate under) + (e) intervention-shape commitment (ADD-CONTENT — new folder `cognitive_harness/routeman/`).

**Mechanisms applied:**

- **Combination (Generator):** combine 5-Core file pattern (SKILL.md + references/<discipline>.md) + lazy-loading discipline → 2-file routeman package with eager Step 0 pre-load of references + autonomy register, lazy load of protocols at instruction steps.
- **Domain Transfer (Generator; native-domain — software module system):** module/import systems use eager imports at module top vs lazy imports at function call time. SKILL.md's Step 0 pre-read = eager imports (references + register always loaded); protocol loads at Instruction steps = lazy function-call imports (load when used). Pattern maps directly.
- **Lens Shifting (Framer):** under the lens "what if SKILL.md were long and references/<name>.md were short?" — inverts 5-Core convention; loses the procedural-orchestrator + content-reference split that 5 Core disciplines follow. Convention-violation without justification. KILL the lens.
- **Constraint Manipulation ADD (Framer):** "SKILL.md MUST be <100 lines to enforce procedural-orchestrator role" → forces extended content into references/routeman.md; preserves 5-Core convention strictly.
- **Constraint Manipulation REMOVE (Framer):** "what if Step 0 pre-read were optional?" → loses guaranteed-loaded-context invariant; every Instruction step would need to check whether references were loaded. REJECTED.

**Intervention-shape-axis Inversion (per Intervention-Shape-Axis Inversion Rule; property v fires):**

Current shape: **ADD-CONTENT** (new folder + new files).

Alternative shape #1: **REVIVE-AND-REPAIR** — rename `cognitive_harness/deprecated_navigation/` to `routeman/` and REPAIR existing SKILL.md + references/navigation.md content. What follows: preserves git history of file lineage; less new-file creation. But: deprecated_navigation has 5 warmup files we're dropping (KI4) + canonical /navigation content we're partially keeping + content we're changing — net change is large; "REPAIR" is misleading. Also: `deprecated_navigation/` folder name is intentional history-marker; renaming would lose the "this was deprecated" signal. KILLed via 5-test.

Alternative shape #2: **REORGANIZE-WITHOUT-ADDING** — embed routeman INSIDE another discipline's folder (e.g., merge routeman content into another existing folder). Doesn't work: routeman is its own discipline; 5-Core convention is one-discipline-per-folder. KILLed via 5-test.

**ADD-CONTENT survives as the only viable intervention shape.**

**Principal candidate (P1-Cand-1):** create `cognitive_harness/routeman/SKILL.md` (~50-100 lines: frontmatter + h1 + Step 0 pre-read directive loading references/routeman.md + autonomy register + Additional Input/Instructions placeholder + numbered Instructions list ~6-10 steps + reference-loading-during-execution note for lazy protocol loads) + `cognitive_harness/routeman/references/routeman.md` (~500-800 lines). No warmup folder.

**Intervention-shape-axis Inversion-candidate (P1-Inv-Shape-1):** REVIVE-AND-REPAIR. KILLed.
**Intervention-shape-axis Inversion-candidate (P1-Inv-Shape-2):** REORGANIZE-WITHOUT-ADDING. KILLed.

**5-test:**
- Novelty: LOW (5-Core convention established).
- Scrutiny: PASS.
- Fertility: HIGH (P1 is foundational; all other pieces depend).
- Actionability: HIGH (SKILL.md author can create files directly).
- Mechanism independence: PASS (Combination + Domain Transfer software-module + Constraint Manipulation ADD all converge).

**Disposition:** ACTIONABLE.

### P2 — Canonical 5-Core sections in references/routeman.md

**Meta-decision classification:** property (b) framing-semantic (the canonical-sections-preserved frame).

**Mechanisms applied:**

- **Combination (Generator):** combine 5-Core canonical section vocabulary (Identity / Components / Process Model / Failure Modes / Output / Telemetry) + routeman's specific canonical content sources (14-39 identity 3-layer; 14-39 features 10-list; 14-39 + 18-58 + 06-00 failure framework 11-mode 2-layer; 14-39 + 18-58 + 24-00 schema 17/18-attribute).
- **Absence Recognition patch-level (Generator):** what's missing from canonical sections for routeman? Process Model is stubbed because process-layer is follow-up (per Layer Commitment). That's an explicit absence-with-pointer per P7, not a missed absence.
- **Absence Recognition redesign-level (Generator):** "if designed from scratch, would canonical 5-Core sections all apply to routeman?" All apply (Identity / Components / Process Model / Failure Modes / Output / Telemetry). No missing canonical section.
- **Lens Shifting (Framer):** under the lens "what if canonical sections were collapsed/expanded for routeman?" — Identity + Components could merge; Output + Telemetry could merge. But these are CONVENTIONAL section names downstream consumers expect (LAYER-2 audit at 06-00 may parse on section names; the validation layer at Q6 parses section headings). KILL the collapse.
- **Piece-level Inversion (per Meta-Decision-Piece Rule):** "What if canonical 5-Core sections were NOT preserved — routeman uses entirely new section vocabulary?" → loses project-convention-fit; downstream consumers can't navigate; violates the FF-S5 acceptance ("use canonical 5-Core section vocabulary"). KILLed.

**Principal candidate (P2-Cand-1):** preserve canonical 5-Core section vocabulary (`> Loading note` + h1 + Identity + Components + Process Model stub + Failure Modes + Output + Telemetry + `---- NOW SOLID INSTRUCTIONS START ----` separator + Execute) with routeman's specific canonical content from 14-39 + 18-58 + 24-00 + 06-00 + 24-01-30.

**Inversion-candidate (P2-Inv-1):** entirely new section vocabulary. KILLed.

**5-test:**
- Novelty: LOW (canonical convention).
- Scrutiny: PASS.
- Fertility: HIGH (canonical sections host extended content + Output schema + Failure Modes).
- Actionability: HIGH.
- Mechanism independence: PASS.

**Disposition:** ACTIONABLE.

### P3 — 8 routeman-specific top-level sections in references/routeman.md

**Meta-decision classification:** property (d) evaluation-criterion (the 8 sections are the criterion for completeness of resolved-question commitments).

**Mechanisms applied:**

- **Combination (Generator):** combine 5-Core canonical sections + 8 routeman-specific extensions → ordered section list with canonical first, routeman-specific second.
- **Domain Transfer (Generator; software-spec native-domain):** API specification organization — public interface sections first (canonical contract), then extension-points/hooks second (vendor-specific). Routeman pattern matches: canonical 5-Core = public interface; 8 routeman-specific = extension/hook content.
- **Absence Recognition redesign-level (Generator):** "what's missing from the 8 sections?" Verification → Discipline Contract; Aggregation Protocol; Adaptive Guidance Mechanism; Validation Layer; LAYER-2 Audit Surface; Emission Policy; Persistence Model; Phase Activation Table. All 8 map to resolved-question commitments. No missing section.
- **Lens Shifting (Framer):** under the lens "what if Phase Activation Table were NOT cross-cutting — what if per-resolved-question phase rules lived in each section?" — loses cross-coordination view; phase progression across resolved questions becomes hard to read at a glance. KILL distributed-phase-rules.
- **Constraint Manipulation ADD (Framer):** "section ordering MUST be canonical-first" → enforces 5-Core convention adherence.
- **Constraint Manipulation REMOVE (Framer):** "what if Phase Activation Table were absent?" → loses cross-cutting coordination axis. REJECTED.
- **Piece-level Inversion (per Meta-Decision-Piece Rule):** "What if the 8 routeman-specific sections were merged into 1 or 2 mega-sections?" → loses navigability; sections downstream consumers parse separately (audit reads LAYER-2 Audit Surface; runner reads Aggregation Protocol) get conflated. KILLed.

**Principal candidate (P3-Cand-1):** 8 routeman-specific top-level h2 sections in references/routeman.md, AFTER canonical sections + BEFORE separator. Ordering: Discipline Contract (per 14-39 REFINE #3) + Aggregation Protocol (Q2) + Adaptive Guidance Mechanism (Q3) + Validation Layer (Q6) + LAYER-2 Audit Surface (Q4) + Emission Policy (Q10) + Persistence Model (24-00) + Phase Activation Table (cross-cutting). Aggregation Protocol contains 8 sub-h3 sub-sections P1-P8 per Q2 finding's commitment.

**Inversion-candidate (P3-Inv-1):** merge 8 sections into 1-2 mega-sections. KILLed.

**5-test:**
- Novelty: MEDIUM (8 routeman-specific sections novel within routeman; extension pattern is software-spec native).
- Scrutiny: PASS.
- Fertility: HIGH (sections host all resolved-question commitments).
- Actionability: HIGH.
- Mechanism independence: PASS (Combination + Domain Transfer software-spec + Constraint Manipulation ADD all converge).

**Disposition:** ACTIONABLE.

### P4 — Content-type partition rule

**Meta-decision classification:** property (c) lesson-vocabulary (the "content-type partition" naming + the operational rule).

**Mechanisms applied:**

- **Combination (Generator):** combine self-containment principle (project feedback memory: "disciplines self-contained") + single-canonical-location principle (Q5/Q6 R1 drift-coordination) → content-type partition rule (design content RESTATE + protocol/register content CROSS-REFERENCE).
- **Absence Recognition redesign-level (Generator):** what's missing from the rule? Boundary case: sibling discipline specs (e.g., /reflect's SKILL.md when reflect-coupling described). Already addressed (rule allows outbound pointers to sibling discipline specs).
- **Domain Transfer (Generator; library-design native-domain):** public API vs internal API distinction — public API is RE-DECLARED in client code (or imported with adapter); internal API is OPAQUE (clients don't reach into internals). Adapted: protocol/register = public API (cross-reference); design content = internal-to-routeman (restate in self-contained form).
- **Lens Shifting (Framer):** under the lens "what if self-containment were less strict (some design-history pointers allowed for traceability)?" — defeats the "disciplines self-contained" feedback memory directive. Loses the structural commitment. KILL the lens.
- **Constraint Manipulation ADD (Framer):** "outbound pointers MUST be classified per content-type" → forces explicit decision per cross-ref.
- **Constraint Manipulation REMOVE (Framer):** "what if the rule were not documented in the spec itself?" → SKILL.md author may not know the policy; future authors maintaining the spec may add design-history pointers unaware. REJECTED — rule documented in spec preamble.
- **Piece-level Inversion (per Meta-Decision-Piece Rule):** "What if 'content-type partition' were renamed to 'Restate vs Cross-reference Rule'?" → more direct but loses the naming that compresses both rules (self-containment + single-canonical-location) under one frame. The "content-type partition" name names WHAT determines the choice (content type), not just WHAT the choice is. KILL the rename.

**Principal candidate (P4-Cand-1):** content-type partition rule documented in references/routeman.md preamble (after Loading note, before Identity h2). Rule: design content (taxonomies; schemas; identity claims; resolved-question commitments; failure-mode definitions) RESTATED in self-contained form; protocol/register content (protocols at `cognitive_harness/protocols/`; registers at `docs/...`) CROSS-REFERENCED. Forbids outbound pointers to `devdocs/inquiries/...` (design history). Allows outbound pointers to protocol files + register files + sibling discipline specs. R1 drift-coordination meta-process for cross-reference coherence.

**Inversion-candidate (P4-Inv-1):** rename to "Restate vs Cross-reference Rule". KILLed.

**5-test:**
- Novelty: MEDIUM (rule is novel articulation of two project commitments; synthesis is novel).
- Scrutiny: PASS.
- Fertility: HIGH (rule governs P3 + P5 + P6 decisions).
- Actionability: HIGH (SKILL.md author applies rule per section/content piece).
- Mechanism independence: PASS (Combination + Domain Transfer library-design + Constraint Manipulation ADD all support content-type partition).

**Disposition:** ACTIONABLE.

### P5 — Cross-reference list

**Meta-decision classification:** property (d) evaluation-criterion (which cross-references appear at which spec locations is the criterion for completeness).

**Mechanisms applied:**

- **Combination (Generator):** combine 5 protocol cross-refs (Q5 + Q6-in-Q5 + Q4 + multi_resolution_navigation + branch_inquiry) + 3 register/state cross-refs (autonomy_level + discipline_taxonomy + desc.md) + their specific spec locations → enumerated cross-reference list.
- **Absence Recognition patch-level (Generator):** what's missing? `docs/thinking_space_dynamics.md` (primitive composition reference per 14-39 COULD #5)? DEFERRED per 14-39 — cross-reference added when primitive profile is committed in a follow-up; not in L0 list. `cognitive_harness/contracts/` files? Not routeman-relevant per Sensemaking Frame-exit Completeness check. Both verified-absent.
- **Domain Transfer (Generator; software-imports native-domain):** explicit import list at top of file vs implicit imports as-needed. Lazy loading = implicit-imports-at-step. The P5 enumerated list = for spec authors and reviewers; the inline appearances at instruction steps + sections = operational form.
- **Lens Shifting (Framer):** under the lens "what if cross-references were inline-only (no enumerated list)?" — loses audit-ability of completeness; harder to verify all canonical cross-references present. KILL inline-only.
- **Constraint Manipulation ADD (Framer):** "cross-references MUST use project-root-relative paths" → forces consistent reference format.
- **Constraint Manipulation REMOVE (Framer):** "what if cross-references were absent entirely (embed all protocol content)?" → defeats single-canonical-location; introduces drift risk; duplicates content. REJECTED.
- **Piece-level Inversion (per Meta-Decision-Piece Rule):** "What if cross-references were avoided entirely (embed protocols too)?" → defeats single-canonical-location. KILLed.

**Principal candidate (P5-Cand-1):** enumerated cross-reference list with 8 total references (5 protocols + 3 register/state) at specific spec locations per P5 verification criteria + project-root-relative paths + R1 drift-coordination meta-process.

**Inversion-candidate (P5-Inv-1):** avoid cross-references; embed protocols. KILLed.

**5-test:**
- Novelty: LOW (cross-reference pattern conventional).
- Scrutiny: PASS.
- Fertility: HIGH (cross-references populate P3 sections + SKILL.md Instructions).
- Actionability: HIGH.
- Mechanism independence: PASS.

**Disposition:** ACTIONABLE.

### P6 — Embedded content

**Meta-decision classification:** property (d) evaluation-criterion (which design content embeds where is the criterion for completeness).

**Mechanisms applied:**

- **Combination (Generator):** combine design-inherited content from all 13 priors + content-type partition rule + restatement-in-self-contained-form requirement → embedded content list with embed locations.
- **Absence Recognition redesign-level (Generator):** "what design content is missing from embed list?" Verification: 3-layer identity (yes); 10 features (yes); 11-mode failure framework (yes); 17/18 schema (yes); 16-type taxonomy (yes); Q2/Q3/Q6/Q10/Q4-audit-surface/24-00-persistence/Phase-Activation-Table (yes). All design content from 13 priors embedded.
- **Domain Transfer (Generator; documentation-systems native-domain):** documentation can be normalized (write once, link many) vs denormalized (write inline at usage point). Self-containment forces denormalization for design content; single-canonical-location forces normalization for protocol content. Two different normalization rules per content type.
- **Lens Shifting (Framer):** under the lens "what if embeds were minimal (just key claims; details in cross-references)?" — defeats self-containment for design content; if details live in design memos at `devdocs/inquiries/...`, routeman can't point to them. Embeds MUST be full restatements. KILL minimal-embed.
- **Constraint Manipulation ADD (Framer):** "embeds MUST be verifiable in self-contained form (grep -r `devdocs/inquiries` returns 0 matches)" → forces self-contained restatement audit.
- **Constraint Manipulation REMOVE (Framer):** "what if 16-type taxonomy were cross-referenced to canonical /navigation's spec?" → canonical /navigation is being archived (deprecated_navigation); cross-reference would point to archived content. REJECTED.
- **Piece-level Inversion (per Meta-Decision-Piece Rule):** "What if embedded content were kept as cross-references to design memos?" → violates self-containment. KILLed.

**Principal candidate (P6-Cand-1):** embedded content per P6 verification criteria — all design content from 13 priors restated in self-contained form at specific spec locations + embed self-containment audit (grep returns 0 matches for `devdocs/inquiries`).

**Inversion-candidate (P6-Inv-1):** cross-reference design memos instead of embed. KILLed.

**5-test:**
- Novelty: LOW (content-restatement pattern is project-convention per self-containment).
- Scrutiny: PASS.
- Fertility: HIGH (embeds populate P3 + P2 sections).
- Actionability: HIGH.
- Mechanism independence: PASS.

**Disposition:** ACTIONABLE.

### P7 — Process-layer interface stub (PROPERTY (v) PIECE)

**Meta-decision classification:** properties (c) lesson-vocabulary (the "process-layer interface stub" naming + the format) + (e) intervention-shape commitment (ADD-CONTENT to Execute section).

**Mechanisms applied:**

- **Combination (Generator):** combine 5-Core Execute section pattern + Layer Commitment STRUCTURAL-only constraint + 13 priors' commitments-needing-runtime-procedure → interface stub specifying inputs/outputs/cross-cutting concerns/revival trigger.
- **Absence Recognition redesign-level (Generator):** "what's missing from the stub?" Verification: inputs (yes); outputs (yes); cross-cutting concerns (yes); revival trigger (yes). All elements present.
- **Domain Transfer (Generator; software-interfaces native-domain):** abstract base class with abstract methods vs concrete implementation. The stub IS the abstract base class — declares the interface; concrete implementation is the process-layer follow-up inquiry.
- **Lens Shifting (Framer):** under the lens "what if the stub were absent entirely?" → SKILL.md author has no guidance on Instructions interfacing with the (future) process layer; structural coherence lost. KILL absence.
- **Constraint Manipulation ADD (Framer):** "stub MUST name the revival trigger explicitly" → forces follow-up-inquiry coordination.
- **Constraint Manipulation REMOVE (Framer):** "what if the stub were implementation-level instead of interface-level?" → exceeds Layer Commitment STRUCTURAL-only scope. REJECTED.

**Intervention-shape-axis Inversion (per Intervention-Shape-Axis Inversion Rule; property v fires):**

Current shape: **ADD-CONTENT** (adding interface stub to Execute section).

Alternative shape #1: **DO-NOTHING** (no stub; just empty Execute section or absent Execute). Loses structural coherence (no guidance for SKILL.md author or process-layer follow-up inquiry). Scrutiny FAIL — KILLed.

Alternative shape #2: **ADD-TEST** (add a structural-test that the future process-layer must pass, rather than an interface stub). Tests vs interface are different — tests are checks on a candidate; interfaces are contracts the candidate must implement. Routeman's structural artifact needs the contract (interface), not just tests. KILL as primary; could preserve as L1+ refinement (process-layer-compliance tests added when process-layer ships).

**ADD-CONTENT survives.**

**Principal candidate (P7-Cand-1):** process-layer interface stub in Execute section specifying INPUTS (routeman spec context + inquiry folder paths + autonomy register + Q5/Q6/Q4/multi_resolution_navigation/branch_inquiry protocols) + OUTPUTS (aggregated Route Map per 24-00 schema with Q2 extensions + 5-tier verdict + worker_telemetry sub-block + persistence-file writes + routeman_status field) + CROSS-CUTTING CONCERNS (Phase Activation Table behavior + Failure Modes detection + Telemetry emission + self-containment compliance + single-canonical-location compliance) + REVIVAL TRIGGER (`/MVLw "routeman process-layer — sequence the 10 components into runtime procedure"` after Q5/Q6/Q4 protocol files are authored).

**Intervention-shape-axis Inversion-candidate (P7-Inv-Shape-1):** DO-NOTHING. KILLed.
**Intervention-shape-axis Inversion-candidate (P7-Inv-Shape-2):** ADD-TEST. KILLed as primary; preserved as L1+ refinement opportunity.

**5-test:**
- Novelty: MEDIUM (interface-stub pattern with explicit revival trigger novel within routeman; pattern is software-interfaces-native).
- Scrutiny: PASS.
- Fertility: HIGH (stub is contract for process-layer follow-up).
- Actionability: HIGH.
- Mechanism independence: PASS.

**Disposition:** ACTIONABLE.

### P8 — Migration artifacts at edit sites + warmup folder drop (PROPERTY (v) PIECE)

**Meta-decision classification:** property (e) intervention-shape commitment (REPAIR existing files + ADD-CONTENT new archive note + REMOVE warmup folder carry-forward decision).

**Mechanisms applied:**

- **Combination (Generator):** combine 14-39 COULD #2 (runner updates) + 14-39 COULD #3 (archive) + Sensemaking KI4 (warmup drop) + existing project state (deprecated_navigation already exists) → 4 edit sites + 1 drop decision.
- **Absence Recognition patch-level (Generator):** what's missing? Test scripts referencing /navigation? Documentation referencing /navigation? Verified via grep at SKILL.md authoring time (P8 verification criterion: pre-edit verification step).
- **Domain Transfer (Generator; software-migration native-domain):** rename migrations follow coordinated edit pattern — find-and-replace across multiple files + archive old artifact + update install/deploy scripts + write migration note. Pattern matches exactly.
- **Lens Shifting (Framer):** under the lens "what if migration were deferred (routeman ships but /navigation references not updated)?" → runners would still invoke /navigation; routeman would not be activated. Migration must coordinate with routeman authoring. KILL deferral.
- **Constraint Manipulation ADD (Framer):** "migration edits MUST verify old reference exists before editing (pre-edit verification)" → forces clean pre-edit state.
- **Constraint Manipulation REMOVE (Framer):** "what if no archive note were written?" → loses traceability for future readers of deprecated_navigation folder. REJECTED.

**Intervention-shape-axis Inversion (per Intervention-Shape-Axis Inversion Rule; property v fires):**

Current shape mix: **ADD-CONTENT** (write archive note) + **REPAIR** (edit existing MVL/MVLw SKILL.md + install scripts to replace /navigation with /routeman) + decision to NOT-carry-forward (effectively **REMOVE** the warmup-folder option).

Alternative shape #1: **REVERT-REGRESSION** — revert to a state before /navigation, then add routeman cleanly. Doesn't apply: no pre-/navigation state exists in project history. KILLed.

Alternative shape #2: **REORGANIZE-WITHOUT-ADDING** — restructure project so no migration artifacts needed (e.g., make /navigation an alias for /routeman without editing runners). Aliasing requires alias-resolution infrastructure; introduces hidden coupling. KILLed.

**ADD-CONTENT + REPAIR + REMOVE mix survives as the appropriate shape.**

**Principal candidate (P8-Cand-1):** 4 migration edits at edit sites OUTSIDE routeman folder + warmup folder NOT carried forward + pre-edit verification + backwards-compat (deprecated_navigation folder retained). Edits: `cognitive_harness/MVL/SKILL.md` REPAIR; `cognitive_harness/MVLw/SKILL.md` REPAIR; `install_for_claude.sh` + `install_for_codex.sh` REPAIR; `cognitive_harness/deprecated_navigation/_archive_note.md` ADD-CONTENT (write).

**Intervention-shape-axis Inversion-candidate (P8-Inv-Shape-1):** REVERT-REGRESSION. KILLed.
**Intervention-shape-axis Inversion-candidate (P8-Inv-Shape-2):** REORGANIZE-WITHOUT-ADDING (alias). KILLed.

**5-test:**
- Novelty: LOW (find-and-replace + archive note is conventional migration pattern).
- Scrutiny: PASS.
- Fertility: HIGH (migration enables routeman invocation by runners).
- Actionability: HIGH.
- Mechanism independence: PASS.

**Disposition:** ACTIONABLE.

---

## Inherited Frame Audit

**Step (i) — Seed-level central assumption:** "Routeman's structural artifact is a 2-file package extending 5-Core convention with 8 routeman-specific sections + content-type partition rule + process-layer interface stub + migration at edit sites + warmup drop" (from Sensemaking SV6).

**Step (ii) — Piece-level commitments:**
- P1: ADD-CONTENT new-folder intervention shape + framing-semantic (file structure).
- P2: canonical-section-preservation framing-semantic.
- P3: 8-routeman-specific-sections evaluation-criterion.
- P4: content-type partition rule lesson-vocabulary.
- P5: enumerated-cross-reference-list evaluation-criterion.
- P6: full-restatement embedded-content evaluation-criterion.
- P7: process-layer interface stub lesson-vocabulary + ADD-CONTENT intervention shape.
- P8: REPAIR+ADD-CONTENT+REMOVE migration intervention shape mix.

**Step (iii) — Challenge scan:**

- Seed-level central assumption challenged by P1-Inv-Shape-1 (REVIVE-AND-REPAIR — challenges new-folder ADD-CONTENT) + P1-Inv-Shape-2 (REORGANIZE-WITHOUT-ADDING — challenges separate-folder commitment). Both KILLed but explicit challenges present in candidate set. ✓
- P1 commitment challenged by P1-Inv-Shape-1 + P1-Inv-Shape-2. ✓
- P2 commitment challenged by P2-Inv-1 (entirely new section vocabulary). ✓
- P3 commitment challenged by P3-Inv-1 (merge 8 sections into mega-sections). ✓
- P4 commitment challenged by P4-Inv-1 (rename to "Restate vs Cross-reference Rule") + Lens Shifting on less-strict self-containment (rejected). ✓
- P5 commitment challenged by P5-Inv-1 (avoid cross-references; embed protocols). ✓
- P6 commitment challenged by P6-Inv-1 (cross-reference design memos). ✓
- P7 commitment challenged by P7-Inv-Shape-1 (DO-NOTHING) + P7-Inv-Shape-2 (ADD-TEST). ✓
- P8 commitment challenged by P8-Inv-Shape-1 (REVERT-REGRESSION) + P8-Inv-Shape-2 (REORGANIZE alias). ✓

**Step (iv) — Firing condition:** ALL assumptions/commitments have explicit challenges in the candidate set. **Audit does NOT fire.** Proceed to Phase 3 Test.

---

## Phase 3 — Test (Assembly Check)

### Individual candidate testing

8 principal candidates (P1-Cand-1 through P8-Cand-1). All passed 5-test per per-piece tests above. All ACTIONABLE.

### Assembly check

The 8 ACTIONABLE candidates assemble into a complete routeman structural artifact:

**File structure (P1) → Canonical sections (P2) → Routeman-specific sections (P3) ← Cross-references (P5) ← Embeds (P6); governed by Content-type partition (P4); Execute hosts Process-layer interface stub (P7); Migration coordinated at edit sites outside folder (P8).**

**Emergent properties of the assembly:**

1. **Convention-extension architecture.** The assembly EXTENDS 5-Core convention without violating it. The 8 routeman-specific sections (P3) add structurally to canonical sections (P2); lazy protocol loading (P1) respects 5-Core load-discipline; content-type partition (P4) operates within 5-Core's reference-file conventions. Emerges from P1 + P2 + P3 + P4 combined; no individual piece alone provides this.

2. **Self-containment + single-canonical-location via content-type partition.** The partition rule (P4) operates on P5 (cross-refs) + P6 (embeds), making the two policies orthogonal and both honored. Emerges from P4 + P5 + P6 combination.

3. **Process-layer interface stub as bridge.** P7 is the contract that the future process-layer inquiry inherits; structural artifact remains complete at L0 with explicit stub-not-implementation. Emerges from Layer Commitment STRUCTURAL + P7's specific stub format. The stub bridges between this inquiry's structural commitments and the process-layer follow-up's procedural commitments without coupling them.

4. **Migration at edit sites without internal coupling.** P8 operates entirely outside routeman folder; routeman's internal structure (P1-P7) is decoupled from migration coordination. Emerges from P8's edit-site ownership + the boundary between routeman-folder and external edit sites.

5. **80%-convention + 20%-novel pattern matches Q5+Q6+Q2 trilogy.** Same pattern across structural-layer extensions on routeman: most content inherits canonical convention + design-content restatement; small novel commitments at structural inflection points. Q5 (file-system protocol) + Q6 (file-shape contracts) + Q2 (multi-head aggregation) + this inquiry (structural artifact) all share the 80/20 framing. Emerges from cross-inquiry pattern coherence; not from any single piece.

### Axis coverage check

The candidate space varies along multiple orthogonal axes:

| Axis | Variants |
|---|---|
| File structure intervention shape | ADD-CONTENT (P1-Cand-1) vs REVIVE-AND-REPAIR (P1-Inv-Shape-1 KILLed) vs REORGANIZE-WITHOUT-ADDING (P1-Inv-Shape-2 KILLed) |
| Section vocabulary | canonical-preserved (P2-Cand-1) vs entirely-new (P2-Inv-1 KILLed) |
| Section count | 8 routeman-specific (P3-Cand-1) vs 1-2 mega-sections (P3-Inv-1 KILLed) |
| Content-type partition naming | "content-type partition" (P4-Cand-1) vs "Restate vs Cross-reference Rule" (P4-Inv-1 KILLed) |
| Self-containment line | strict (P4-Cand-1) vs lax (Lens Shifting alternative KILLed) |
| Cross-reference presence | enumerated (P5-Cand-1) vs inline-only (Lens KILLed) vs avoided-entirely (P5-Inv-1 KILLed) |
| Embed depth | full restatement (P6-Cand-1) vs minimal-with-pointers (Lens KILLed) vs cross-reference-to-memos (P6-Inv-1 KILLed) |
| Process-layer stub shape | interface (P7-Cand-1) vs DO-NOTHING (P7-Inv-Shape-1 KILLed) vs ADD-TEST (P7-Inv-Shape-2 KILLed-with-seed) |
| Migration shape | edit-sites-coordinated (P8-Cand-1) vs REVERT-REGRESSION (P8-Inv-Shape-1 KILLed) vs alias REORGANIZE (P8-Inv-Shape-2 KILLed) |

All 9 axes have at least one variant. PASS.

### Per-piece mechanism-trace check

- P1: [Combination + Domain Transfer-software-module + Lens Shifting + Constraint-Manipulation-ADD + Constraint-Manipulation-REMOVE + Inversion:intervention-shape (2 alternatives)] — meta-decision (b + e); compliance satisfied (intervention-shape axis fired).
- P2: [Combination + Absence-Recognition-patch + Absence-Recognition-redesign + Lens Shifting + Inversion:content] — meta-decision (b); compliance satisfied.
- P3: [Combination + Domain Transfer-software-spec + Absence-Recognition-redesign + Lens Shifting + Constraint-Manipulation-ADD + Constraint-Manipulation-REMOVE + Inversion:content] — meta-decision (d); compliance satisfied.
- P4: [Combination + Absence-Recognition-redesign + Domain Transfer-library-design + Lens Shifting + Constraint-Manipulation-ADD + Constraint-Manipulation-REMOVE + Inversion:content (rename)] — meta-decision (c); compliance satisfied.
- P5: [Combination + Absence-Recognition-patch + Domain Transfer-software-imports + Lens Shifting + Constraint-Manipulation-ADD + Constraint-Manipulation-REMOVE + Inversion:content] — meta-decision (d); compliance satisfied.
- P6: [Combination + Absence-Recognition-redesign + Domain Transfer-documentation-systems + Lens Shifting + Constraint-Manipulation-ADD + Constraint-Manipulation-REMOVE + Inversion:content] — meta-decision (d); compliance satisfied.
- P7: [Combination + Absence-Recognition-redesign + Domain Transfer-software-interfaces + Lens Shifting + Constraint-Manipulation-ADD + Constraint-Manipulation-REMOVE + Inversion:intervention-shape (2 alternatives)] — meta-decision (c + e); compliance satisfied (intervention-shape axis fired).
- P8: [Combination + Absence-Recognition-patch + Domain Transfer-software-migration + Lens Shifting + Constraint-Manipulation-ADD + Constraint-Manipulation-REMOVE + Inversion:intervention-shape (2 alternatives)] — meta-decision (e); compliance satisfied (intervention-shape axis fired).

### Shared-input detection (Mechanism Independence test)

Multiple mechanisms converged via shared inheritance from 13 priors + 5-Core convention. Is convergence INDEPENDENT or SPURIOUS?

- The 13 priors + 5-Core convention are established structural foundation.
- Convergence reflects multi-source agreement on structurally-grounded patterns, not tautological inheritance.
- Independent grounds: Domain Transfer (software module system + API specification organization + library design public-vs-internal + software imports + documentation normalization + software interfaces abstract base class + software migration coordinated edits — SIX distinct software-domain analogies) + Constraint Manipulation (multiple ADD/REMOVE direction outputs per piece) + Combination (specific pattern combinations per piece) + Inversion (each piece's alternative direction challenged).
- Conclusion: convergence is INDEPENDENT — multiple mechanisms operating on different software-domain grounds + multiple constraint manipulations per piece all support the principal candidates.

---

## Mechanism Coverage Telemetry

- **Generators applied:** 3/4 explicitly applied per-piece (Combination + Absence Recognition + Domain Transfer) + 1 (Extrapolation) inherited from Sensemaking A2 (future-growth → L1+ split as preparation; deferred not applied per-piece) — effectively 4/4 covered with Extrapolation handled at sensemaking level.
- **Framers applied:** 3/3 (Lens Shifting + Constraint Manipulation + Inversion).
- **Convergence:** YES — multiple mechanisms converge per piece (e.g., Combination + Domain Transfer + Constraint Manipulation ADD all support P1's 2-file ADD-CONTENT package; same triple supports P3's canonical-first ordering; same triple supports P4's content-type partition).
- **Survivors tested:** 8/8 principal candidates tested via 5-test cycle; all KILLed alternatives also tested. 0 deferred candidates (all alternatives either KILLed or KILLed-with-seed at piece level).
- **Failure modes observed:** none (Premature Evaluation not triggered; Single-Mechanism Trap not triggered — minimum 5 mechanisms per piece; Early Frame Lock not triggered — Inversion applied per piece; Innovation Without Grounding not triggered — every generation followed by 5-test; Mechanism Exhaustion not triggered — convergence achieved; Survival Bias not triggered — Inversion-candidate generation forced via Piece-Level Inversion Rule).

### Production-task additional telemetry

**Per-piece mechanism log:** see "Per-piece mechanism-trace check" above (8 piece logs with mechanism types per piece).

**Per-piece axis-distribution log:**

- P1: [Combination:content, Domain-Transfer:content, Lens-Shifting:content, Constraint-Manipulation-ADD:content, Constraint-Manipulation-REMOVE:content, **Inversion:intervention-shape**] — meta-decision (b + e); axes: content + intervention-shape (property v compliance satisfied).
- P2: [Combination:content, Absence-Recognition-patch:content, Absence-Recognition-redesign:content, Lens-Shifting:content, Inversion:content] — meta-decision (b); axes: content only.
- P3: [Combination:content, Domain-Transfer:content, Absence-Recognition-redesign:content, Lens-Shifting:content, Constraint-Manipulation-ADD:content, Constraint-Manipulation-REMOVE:content, Inversion:content] — meta-decision (d); axes: content only.
- P4: [Combination:content, Absence-Recognition-redesign:content, Domain-Transfer:content, Lens-Shifting:content, Constraint-Manipulation-ADD:content, Constraint-Manipulation-REMOVE:content, Inversion:content (rename)] — meta-decision (c); axes: content only (lesson-vocabulary rename axis tested via content Inversion).
- P5: [Combination:content, Absence-Recognition-patch:content, Domain-Transfer:content, Lens-Shifting:content, Constraint-Manipulation-ADD:content, Constraint-Manipulation-REMOVE:content, Inversion:content] — meta-decision (d); axes: content only.
- P6: [Combination:content, Absence-Recognition-redesign:content, Domain-Transfer:content, Lens-Shifting:content, Constraint-Manipulation-ADD:content, Constraint-Manipulation-REMOVE:content, Inversion:content] — meta-decision (d); axes: content only.
- **P7:** [Combination:content, Absence-Recognition-redesign:content, Domain-Transfer:content, Lens-Shifting:content, Constraint-Manipulation-ADD:content, Constraint-Manipulation-REMOVE:content, **Inversion:intervention-shape**] — meta-decision (c + e); axes: content + intervention-shape (property v compliance satisfied; 2 alternative shapes tested).
- **P8:** [Combination:content, Absence-Recognition-patch:content, Domain-Transfer:content, Lens-Shifting:content, Constraint-Manipulation-ADD:content, Constraint-Manipulation-REMOVE:content, **Inversion:intervention-shape**] — meta-decision (e); axes: content + intervention-shape (property v compliance satisfied; 2 alternative shapes tested).

**Meta-decision-piece classification:** 8/8 pieces classified as meta-decision; 3 fire property (v) (P1, P7, P8 — all intervention-shape commitments).

**Piece-level Inversion compliance:**

- P1: satisfied (intervention-shape axis Inversion fired with 2 alternative shapes — REVIVE-AND-REPAIR + REORGANIZE-WITHOUT-ADDING — both tested and KILLed).
- P2: satisfied (content-axis Inversion fired — entirely-new-section-vocabulary).
- P3: satisfied (content-axis Inversion fired — merge-to-mega-sections).
- P4: satisfied (content-axis Inversion fired — rename to "Restate vs Cross-reference Rule").
- P5: satisfied (content-axis Inversion fired — avoid-cross-references).
- P6: satisfied (content-axis Inversion fired — cross-reference-design-memos).
- P7: satisfied (intervention-shape axis Inversion fired with 2 alternative shapes — DO-NOTHING + ADD-TEST — both tested and KILLed; ADD-TEST preserved as L1+ refinement seed).
- P8: satisfied (intervention-shape axis Inversion fired with 2 alternative shapes — REVERT-REGRESSION + REORGANIZE-WITHOUT-ADDING — both tested and KILLed).

No violations; no FLAG conditions; no RE-RUN conditions.

**Overall: PROCEED**
