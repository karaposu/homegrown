# Exploration: Surfacing — Structural Spec Text Production

## User Input

(/MVL+ branch file)

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_07-31__structural_surfacing_spec_text_production/_branch.md`

Plus additional instructions: artifact-mode dominant (existing-disciplines spec corpus) + possibility-mode (candidate section structures). Frontier-first entry. 10 focal points.

---

## Mode and Entry Point

- **Territory-type-mode:** ARTIFACT (dominant; existing disciplines' spec files) + POSSIBILITY (candidate section structures for surfacing).
- **Entry-point:** FRONTIER-FIRST. Broad survey of the corpus first, then probe specifics.
- **Boundary-discovery sub-phase:** NOT FIRED (the territory bounds are explicit — the 5 existing discipline specs + the spec-anatomy template + the 2 placement-and-refinement convention docs).

---

## Territory Overview

14 regions surfaced, organized into 5 territories:

```
[CONVENTION TERRITORY — universal elements across all specs]
  ├── R1: Loading note convention (blockquote header)
  ├── R2: Title convention (variants observed)
  ├── R10: Refinement-note convention
  └── R11: Cross-reference convention

[SECTION-CONTENT TERRITORY — what each major section contains]
  ├── R3: Identity section convention
  ├── R4: Components section convention
  ├── R5: Process Model section convention
  ├── R6: Failure Modes section convention
  ├── R7: Output section convention
  └── R8: Saturation Indicators / Telemetry convention

[OPERATIONAL TERRITORY — runtime instructions]
  └── R9: Execute section convention

[STYLE TERRITORY — global conventions]
  ├── R12: Numbered vs unnumbered top-level sections
  └── R14: Spec size budget

[APPLICATION TERRITORY — surfacing-specific application]
  └── R13: Surfacing candidate section structures (3 candidates)
```

---

## Inventory by Region

### R1 — Loading note convention

**Universal across all 5 existing specs.** Every spec opens with a blockquote header before any section content:

```markdown
> **Loading note.** This file is loaded by `<discipline>/SKILL.md` at Step 0 and is intended to be read in full before the discipline executes. Every section below — framework, components, process, failure modes — is referenced by the protocol. Do not summarize or partial-load; the protocol's instructions assume all sections are in context.
```

The variable per discipline: the path to the discipline's SKILL.md (and sometimes design-history pointer, e.g., explore.md adds "Design history preserved at `enes/discipline_design_history/for_explore.md`").

**For surfacing:** the path will be `cognitive_harness/surfacing/SKILL.md` (or wherever the user places it). The loading-note header is mandatory.

### R2 — Title convention

**Two variants observed:**

- **Variant A: `# Structural <Discipline> — A Thinking Discipline`.** Used by sense-making, decompose, innovate, td-critique. The dominant pattern.
- **Variant B: `# /<command> — Structural Reference (accurate)`.** Used by explore.md only. Outlier; the "(accurate)" parenthetical signals a specific cleanup pass; not the canonical pattern.

**For surfacing:** Variant A is the canonical choice. Title: `# Structural Surfacing — A Thinking Discipline`. (Confidence: HIGH; 4 of 5 specs follow this pattern.)

### R3 — Identity section convention

**Pattern across specs:**

- **sense-making:** opens with a paragraph definition + a blockquote quote-line definition + "Sensemaking has two structural operations" sub-section + Key Components → numbered phases. No explicit "Identity" header.
- **decompose:** `## What Decomposition Is` section (heading-level definition) + "Decomposition is not:" 4-item contrasts list + "Decomposition is the scale operator" statement + "The Core Operation: Coupling Perception" sub-section.
- **innovate:** `## What Innovation Is` section + "Innovation is not:" 4-item contrasts list + "Innovation has two structural operations" sub-section + "Generators vs Framers" table.
- **td-critique:** `## What Critique Is` section + "Critique is not:" 5-item contrasts list + "Critique has two structural operations" sub-section + "## Critique's Role in the SIC Loop" sub-section.
- **explore:** `## 1. Identity` numbered section with 5 sub-sections: 1.1 Verb-meaning + 1.2 Upstream-precondition relationship + 1.3 NOT-list (table) + 1.4 Clarification + 1.5 Vocabulary (table).

**Common elements:** all have a verb-meaning definition; all have a contrasts-with-neighbors list; all distinguish what the discipline IS from what it is NOT.

**For surfacing:** Section 1 Identity with sub-sections covering: verb-meaning (from MEANING finding's Section 1); upstream-precondition relationship (Section 1 + the most-upstream commitment); NOT-list table (the 8-item NOT-list from Section 8); vocabulary table (from prior finding's terminology). Format follows explore.md's numbered-sub-section pattern (1.1, 1.2, 1.3, ...) for clarity since surfacing has many sub-elements.

### R4 — Components section convention

**Pattern across specs:**

- **sense-making:** `### Key Components` section with sub-sections per component (Cognitive Anchors, Boundary Construction Operations, Conceptual Structure). Anchors enumerated as 5-item bullet list; operations described in 3 sub-points (a/b/c).
- **decompose:** `## Key Components` section with sub-sections per component (Coupling Map, Boundaries, Pieces, Interfaces, Dependency Order). Each component described in 3-5 paragraphs.
- **innovate:** No separate Key Components section; instead `## The Seed` + `## The Seven Mechanisms` (mechanisms ARE the components). Each mechanism gets a sub-section (### N. Mechanism Name).
- **td-critique:** `## Key Components` section with sub-sections per component (Evaluation Dimensions, Fitness Landscape, Adversarial Structure, Verdicts, Accumulator). Each described in detail with tables where applicable.
- **explore:** `## 2. Components` numbered section with 3 numbered sub-sections: 2.1 Six core components (table) + 2.2 Annotation layers (table) + 2.3 Per-item content depth (table).

**Common patterns:** components enumerated + each component described. Tables used for compact representation when entries share fields. Sub-sections used for components needing prose explanation.

**For surfacing:** Section 2 Components with: 2.1 Three-phase structural shape overview (intro) + 2.2 Six Traversal components (table + brief per-component description) + 2.3 The Boundary-discovery sub-phase + 2.4 Primitive composition (table from MEANING finding's Section 5; 8 load-bearing + 3 absent).

### R5 — Process Model section convention

**Pattern across specs:**

- **sense-making:** `## Process Model` section + "Structural Sensemaking proceeds through five iterative phases" + 5 numbered phases (### Phase 1 - Signal Detection, ### Phase 2 - Anchor Extraction, ...). Each phase has bullets describing what fires + any saturation indicators.
- **decompose:** `## Process Model` section + "seven sequential steps" + 7 numbered steps (### Step 1 - Perceive Coupling Topology, ...). Each step has bullets + sometimes refinement notes embedded.
- **innovate:** `## The Process` section + "three phases that cycle" + Phase 1: Seed / Phase 2: Generate / Phase 3: Test. Phase 3 has refinement notes.
- **td-critique:** `## Process Model` section + "five phases" + Phase 0 (Dimension Construction) through Phase 4 (Coverage + Convergence). Each phase numbered + described.
- **explore:** `## 3. Process` numbered section with 5 numbered sub-sections: 3.1 Two operational modes + 3.2 Preliminary sub-phase + 3.3 Canonical cycle + 3.4 Idempotency + 3.5 Type-aware probing.

**Common patterns:** numbered phases or steps; each described; refinement notes embedded where applicable.

**For surfacing:** Section 3 Process Model with: 3.1 The 3-phase structural shape (overview) + 3.2 Boundary-discovery sub-phase (conditional pre-phase; gating predicate) + 3.3 Reception phase + 3.4 Relevance-attributed Traversal phase (iterative; 6 components fire within each cycle) + 3.5 Assembly phase + 3.6 Re-invocation as parameterized variation (D11 from MEANING) + 3.7 Idempotency within invocation.

### R6 — Failure Modes section convention

**Pattern across specs (universal):**

- Every spec has a `## Failure Modes` section.
- Each failure mode is numbered (### 1. Name).
- Each has Recognition (how to recognize) + Corrective (how to prevent / how to fix) sub-fields.
- Some have "Feels like" hint to capture the experiential signature.
- Refinement notes embedded where applicable.

**Examples:**
- sense-making: 6 failure modes (Status Quo Bias / Premature Stabilization / Anchor Dominance / Perspective Blindness / Clean Resolution Trap / Self-Reference Blindness).
- decompose: 7 failure modes.
- innovate: 6 failure modes.
- td-critique: 7 failure modes.
- explore: 10 failure modes.

**For surfacing:** Section 4 Quality with: 4.1 LAYER 1 + LAYER 2 failure-mode framework (introduction) + 4.2 LAYER 1 modes (7 modes: 4 prior from MEANING + 3 new from output-correction) + 4.3 LAYER 2 modes (3 modes from MEANING) + 4.4 Asymmetric-failure principle (operational form) + 4.5 Coverage criteria (when does the discipline stop traversing) + 4.6 Calibration trajectory + signals + 4.7 Self-assessment output (PROCEED / FLAG / RE-RUN convention from explore.md is universal across the corpus).

### R7 — Output section convention

**Pattern across specs (varies):**

- **sense-making, decompose, innovate, td-critique:** no explicit standalone Output section; output emerges from the Execute section's deliverable specification.
- **explore:** `## 5. Output` numbered section with sub-sections: 5.1 Transform (the confidence-tagged map) + 5.2 Progression (versioned snapshots) + 5.3 Telemetry (operational metrics) + 5.4 Frontier (open questions for downstream).

**Implication:** explore.md's pattern is more explicit + maps cleanly to surfacing's dual-output commitment. Surfacing has a richer output specification (workspace + artifact with 2 sub-sections) — a dedicated Output section is warranted.

**For surfacing:** Section 5 Output with: 5.1 The dual output (workspace + thin artifact overview) + 5.2 Workspace work-product (definition + observability + session-locality) + 5.3 Thin artifact work-product (definition + "thin" criterion) + 5.4 Traversal Trace schema (PRIMARY artifact sub-section; per-entry fields) + 5.5 State Summary schema (DERIVED artifact sub-section; aggregate fields) + 5.6 Telemetry (operational metrics) + 5.7 Frontier (open questions for downstream).

### R8 — Saturation Indicators / Telemetry convention

**Pattern across specs:**

- **sense-making:** `## Saturation Indicators (Telemetry)` standalone section between Process Model and Failure Modes.
- **decompose:** Embedded in Step 7 Self-Evaluate (no separate section; self-evaluation IS the telemetry).
- **innovate:** `## Mechanism Coverage (Telemetry)` standalone section at the end.
- **td-critique:** Embedded in Phase 4 Coverage + Convergence Assessment + "Convergence Telemetry" sub-section in Execute.
- **explore:** `## 5.3 Telemetry` sub-section within Output.

**Variation:** some have standalone Telemetry; others embed it. For surfacing, telemetry as a sub-section within Output (matching explore.md) is the cleanest fit because surfacing's primary signals (PS1-PS5) measure the output's quality + the calibration signals are part of the output's interpretive context.

**For surfacing:** Telemetry as Section 5.6 (within Output).

### R9 — Execute section convention

**Pattern across specs (universal):**

- A separator line is sometimes used: `---- NOW SOLID INSTRUCTIONS START ----` (sense-making, decompose) or simply `---` (most others).
- A heading: `## Execute the Following Process` (sense-making) or `## Execute the 7-Step Process Above` (decompose) or `## Execute the Exploration Process` (explore) or implicit "Standard Analysis Protocol" (alternative phrasing).
- The Execute section restates the process phases at operational depth — what to produce + what to check + what to output.
- For sense-making: the Execute section instantiates SV1 → SV6 + Phase 1 → Phase 5.
- For decompose: the Execute section instantiates Steps 1 → 7 + Final Deliverable.
- For innovate: the Execute section is integrated with the process explanation; the deliverable specification doubles as Execute.
- For td-critique: the Execute section is integrated with the 5-phase model; Phase 0-4 are the Execute section.
- For explore: explicit `---- NOW SOLID INSTRUCTIONS START ----` separator + `## Execute the Exploration Process` section + 4 numbered steps (State Mode → Run Cycles → Assess Convergence → Final Deliverable).

**For surfacing:** explicit separator + `## Execute the Surfacing Process` section + numbered steps. Surfacing's natural step sequence: 1. State Mode + Entry Point + Determine Territory Bounds + 2. Fire optional Boundary-discovery sub-phase + 3. Run Reception → Traversal → Assembly cycle + 4. Assess Convergence (within Traversal) + 5. Emit dual output (workspace populated + artifact saved) + 6. Self-Assessment Verdict.

### R10 — Refinement-note convention

**Pattern across specs (universal per `docs/step_refinement.md`):**

```markdown
*Refinement note (applies at [Step / Phase / Component]):*

**Rule name.** Description with trigger condition + required action + typed anchor-link (failure mode #N or coverage concern).
```

The italic prefix identifies the canonical anchor (step / phase / component). The bold-prefixed name names the rule. The body describes the rule + cites the failure-mode it prevents (failure-anchored) or the coverage concern it enforces (coverage-anchored).

**For surfacing:** if any refinement notes emerge during this STRUCTURAL inquiry's spec drafting, they follow this format. Currently, no committed refinements at MEANING level; the spec will have them only if the STRUCTURAL inquiry's drafting surfaces them.

### R11 — Cross-reference convention

**Pattern across specs (per `docs/discipline_rule_placement.md`):**

- First reference: full path + brief role description, e.g., "`cognitive_harness/sense-making/references/sensemaking.md` (the Structural Sensemaking discipline spec)."
- Subsequent references: bare filename or section, e.g., "sensemaking.md §3.3."
- Internal cross-references: by section number or sub-section name, e.g., "see §4.4."

**For surfacing:** the spec uses these conventions. References to `docs/thinking_space_dynamics.md` (the typed primitive set) and `docs/discipline_taxonomy.md` (the discipline taxonomy) are project-level references, not sibling-discipline references — allowed per the disciplines-self-contained principle.

### R12 — Numbered vs unnumbered top-level sections

**Pattern:**

- **explore.md** uses numbered top-level sections (`## 1. Identity / ## 2. Components / ## 3. Process / ## 4. Quality / ## 5. Output`).
- **sense-making, decompose, innovate, td-critique** use unnumbered top-level sections.

**For surfacing:** Choose numbered. Surfacing has many sub-sections per section (e.g., Section 5 Output has 7 sub-sections); numbered hierarchy makes cross-references precise + improves navigation. Convention-following: explore.md is the existing precedent for this richer structure; surfacing matches its pattern. (This is structural-convention copying; not content-coupling.)

### R13 — Surfacing candidate section structures

**Candidate A: explore.md-style 5 numbered sections.** (1) Identity / (2) Components / (3) Process / (4) Quality / (5) Output + Execute section. This is the structurally-richer pattern, matching surfacing's content complexity.

**Candidate B: sense-making.md-style unnumbered sections.** Identity / Key Components / Process Model / Saturation Indicators / Failure Modes / Standard Analysis Protocol + Execute section. Simpler but loses sub-section addressability for cross-reference.

**Candidate C: decompose.md-style mixed.** ## What X Is / ## Key Components / ## Process Model / ## Coverage Strategy / ## Failure Modes / ## Summary + Execute section. Mid-complexity.

**Preferred: Candidate A (explore.md-style).** Surfacing has 28 MEANING-layer commitments to express + a richer output schema (Trace + Summary) + multi-granularity vocabulary application. The 5-numbered-sections pattern with sub-sections is the right structural fit. (Sense-making's spec has roughly half the commitments to express + a flatter output schema; the unnumbered pattern fits that scale.)

### R14 — Spec size budget

**Pattern across specs (sampled by approximate line count):**

- sense-making.md: ~300 lines
- decompose.md: ~340 lines
- innovate.md: ~440 lines
- td-critique.md: ~380 lines
- explore.md: ~320 lines

Range: ~300-450 lines. Specs longer than 500 lines risk bloat (per `docs/discipline_design_history/for_explore.md`'s bloat-reframe). Specs shorter than ~250 lines risk under-specification.

**For surfacing:** budget ~400-450 lines. Surfacing has rich content (5 numbered sections × ~5-7 sub-sections each + Execute section). Aim for ~400-450 lines; refactor to ~350-400 if content is dense; flag bloat if approaching 500.

---

## Signal Log

| # | Signal | Type | Probed? | Result |
|---|---|---|---|---|
| **S1** | explore.md's 5-section numbered structure is the cleanest structural match for surfacing's content scale | structural-match | YES (R13) | Candidate A preferred |
| **S2** | Loading-note format is universal | convention | YES (R1) | Standard blockquote template; instantiate for surfacing |
| **S3** | Refinement-note format is universal | convention | YES (R10) | Italic prefix + bold-prefixed name + body |
| **S4** | Execute section is universal but with formatting variations | convention | YES (R9) | Use explicit separator + numbered steps (explore.md model) |
| **S5** | Cross-references prefer descriptive context over bare paths | convention | YES (R11) | Standard format |
| **S6** | Failure modes universally Recognition + Corrective per mode | convention | YES (R6) | Standard format; 7 LAYER 1 + 3 LAYER 2 for surfacing |
| **S7** | explore.md's Output section structure maps cleanly to surfacing's dual-output | structural-fit | YES (R7) | 5.1-5.7 structure for surfacing |
| **S8** | 3-phase + 6-component process fits Section 3 naturally | structural-fit | YES (R5) | 3.1-3.7 structure |
| **S9** | 8 primitives + 3 absent fits Section 2 (Components) | structural-fit | YES (R4) | 2.4 sub-section for primitive composition |
| **S10** | Calibration trajectory + signals fits Section 4 (Quality) | structural-fit | YES (R8) | 4.6 sub-section |
| **S11** | Numbered top-level sections enable precise cross-reference | navigability | YES (R12) | Numbered preferred for surfacing |
| **S12** | Spec size budget ~400-450 lines | size | YES (R14) | Acceptable for surfacing's complexity |

All signals probed. Convergence on structural choices.

---

## Confidence Map

| Region | Confidence |
|---|---|
| R1 — Loading note | **confirmed** |
| R2 — Title | **confirmed** (Variant A: `# Structural Surfacing — A Thinking Discipline`) |
| R3 — Identity section | **confirmed** (numbered sub-section pattern) |
| R4 — Components section | **confirmed** |
| R5 — Process Model section | **confirmed** |
| R6 — Failure Modes section | **confirmed** |
| R7 — Output section | **confirmed** (explore.md-style with sub-sections) |
| R8 — Saturation / Telemetry | **scanned** (sub-section within Output) |
| R9 — Execute section | **confirmed** (explicit separator + numbered steps) |
| R10 — Refinement-note | **confirmed** |
| R11 — Cross-reference | **confirmed** |
| R12 — Numbered top-level | **confirmed** (preferred for surfacing's complexity) |
| R13 — Candidate section structures | **confirmed** (Candidate A) |
| R14 — Size budget | **confirmed** (~400-450 lines target) |

**Confirmed-absent regions** (territories adjacent to spec production that were checked and confirmed absent from this STRUCTURAL inquiry's scope):

- The precise PROCESS semantics within Traversal (component-ordering; convergence criteria) — deferred to downstream PROCESS inquiry unless operational sufficiency requires inline commitment.
- The SKILL.md wrapper file — user-discretion downstream.
- The install script / migration plan — operational concern, not STRUCTURAL spec text.
- The MEANING-layer re-derivation — both prior findings are inherited; not re-derived.

---

## Frontier State

**Frontier state: stable** at the spec-anatomy resolution.

- 14 regions surfaced; 12 signals all probed; 0 deferred.
- Convergence criteria check:
  - **Frontier stability:** YES. Section structure candidates converged on Candidate A.
  - **Declining discovery rate:** YES. Last few scans (R13, R14) confirmed structural choices without surfacing new ones.
  - **Bounded gaps:** YES.
- **Jump-scan performed:** YES (R13 — Candidate B and C surfaced as alternatives; both rejected on structural-fit grounds).

---

## Gaps and Recommendations — Frontier Questions for Sensemaking

**FQ1 — Numbered top-level section structure commitment.** Confirm Candidate A (5 numbered sections matching explore.md pattern) vs Candidate B (sense-making unnumbered) vs Candidate C (decompose mixed). Sensemaking adjudicates.

**FQ2 — Output sub-section structure.** Confirm 5.1-5.7 sub-section breakdown for Section 5 Output (dual output overview / workspace / artifact / Trace schema / Summary schema / Telemetry / Frontier).

**FQ3 — Process sub-section structure.** Confirm 3.1-3.7 sub-section breakdown for Section 3 Process (3-phase overview / Boundary-discovery sub-phase / Reception / Traversal / Assembly / Re-invocation / Idempotency).

**FQ4 — Components sub-section structure.** Confirm 2.1-2.4 sub-section breakdown for Section 2 Components (3-phase shape overview / 6 Traversal components / Boundary-discovery / Primitive composition).

**FQ5 — Quality sub-section structure.** Confirm 4.1-4.7 sub-section breakdown for Section 4 Quality (failure framework intro / LAYER 1 modes / LAYER 2 modes / asymmetric-failure principle / coverage criteria / calibration / self-assessment).

**FQ6 — Identity sub-section structure.** Confirm 1.1-1.5 sub-section breakdown for Section 1 Identity (verb-meaning / upstream-precondition / NOT-list / clarifications / vocabulary).

**FQ7 — Inherited Commitments Re-test scope.** Pre-classify the 28 commitments (16 from pure-design + 12 from output-correction) as RE-TESTED (verify the spec text expresses the commitment) vs INHERITED-WITHOUT-RE-TEST (commitment is structurally untouched by spec production — e.g., the LBT verdicts; the disciplines-self-contained principle as a project-level invariant). Sensemaking pre-classifies; the spec text is the evidence of RE-TESTED status.

**FQ8 — PROCESS-level commitments that the STRUCTURAL inquiry should commit inline (because the spec is non-runnable without them).** Surface candidates:
- Within-Traversal component ordering (the MEANING finding said "no strict ordering"; runtime needs SOMETHING).
- Convergence criteria within Traversal (when to stop iterating).
- Gating predicate for Boundary-discovery sub-phase (when does it fire).
- Workspace-overload threshold (when does frontier-signal fire).
Sensemaking adjudicates which are committed inline (with defaults + refinement-triggers) vs deferred to downstream PROCESS inquiry.

**FQ9 — Anti-coupling verification.** The spec uses surfacing's own vocabulary; no current /explore distinctive vocabulary inherited. Sensemaking commits the verification protocol (search the drafted spec for forbidden vocabulary; ensure zero matches).

**FQ10 — Loading-note + Execute-section instantiation.** The Loading note's path should be `cognitive_harness/surfacing/SKILL.md` (the natural location). The Execute section's process-step count: Sensemaking commits the step count + the step names.

**Load-bearing concept tests for Sensemaking:**

**LBT1 — "Convention-following"** — is the spec's adherence to existing-disciplines convention structurally defensible (matches operational practice; reduces cognitive load for readers familiar with the corpus)? Or is convention-following over-constraining (the spec should have flexibility to deviate)?

**LBT2 — "Operational sufficiency"** — is the STRUCTURAL spec text actually runnable (a runner can execute the discipline from the spec alone)? Or does it need PROCESS-level operational specifics that this inquiry hasn't committed?

---

## Telemetry

- **Mode:** artifact-dominant (corpus reading) + possibility (section-structure candidates)
- **Entry-point:** frontier-first
- **Cycles run:** 3 (corpus survey → section-by-section probing → candidate-structure synthesis + jump-scan to size budget)
- **Candidates generated:** 14 regions; 12 signals; 10 frontier questions; 2 LBTs
- **Signals detected:** 12; **probed:** 12; **deferred:** 0
- **Frontier state:** stable
- **Discovery rate:** declining
- **Convergence criteria status:** Frontier stability YES; Declining discovery rate YES; Bounded gaps YES. All three pass.
- **Jump-scan performed:** YES (R13 — Candidate B + C considered + rejected)
- **Failure modes checked:**
  - Premature depth — NOT observed.
  - Surface-only scanning — NOT observed (each section probed).
  - False confidence — NOT observed.
  - Premature termination — NOT observed.
  - Re-exploration — NOT observed.
  - Completeness bias in possibility mode — NOT observed (Candidate A preferred only after comparing B + C).
  - Open→closed drift — NOT observed.
  - Silent boundary-discovery — NOT applicable.
  - Negative-space silent drop — NOT observed.
  - Inadequate per-item content depth — NOT applicable.

- **Anti-coupling vigilance:** The exploration consulted explore.md for spec-anatomy CONVENTION (section structure, formatting); did NOT inherit explore.md's CONTENT vocabulary (the prior findings' constraint). The candidate section structure uses explore.md's pattern (5 numbered sections + sub-sections) but populates with surfacing's MEANING content from the two prior findings.

---

## Self-Assessment Verdict

**PROCEED to Sensemaking.**

Convergence criteria all met. Frontier stable. 10 frontier questions + 2 LBTs handed off. Section structure Candidate A is the preferred choice; Sensemaking will adjudicate FQ1-FQ10 + the 2 LBTs and pre-classify the 28 inherited commitments.
