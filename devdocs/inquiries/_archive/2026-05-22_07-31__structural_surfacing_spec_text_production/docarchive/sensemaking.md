# Sensemaking: Surfacing — Structural Spec Text Production

## User Input

(/MVL+ branch file + exploration output + 2 prior findings)

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_07-31__structural_surfacing_spec_text_production/_branch.md`

Plus additional instructions: read all priors. Apply SV1→SV6. Adjudicate FQ1-FQ10 + LBT1-LBT2. Pre-classify 29 inherited commitments (16 D1-D16 from pure-design + 13 RD1-RD13 from output-correction).

---

## SV1 — Baseline Understanding

The inquiry produces the actual runtime spec text for surfacing. Exploration mapped the existing-disciplines spec convention + surfaced Candidate A (5 numbered sections matching explore.md's pattern) as the preferred structural fit. 10 frontier questions + 2 LBTs need adjudication.

Initial reading: the spec text is feasible with Candidate A's structure; the 29 inherited commitments map to specific sections; a handful of PROCESS-level decisions need inline commitment to make the spec runnable; anti-coupling verification needs an explicit search-for-forbidden-vocabulary protocol.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1: Synthesis-Trigger obligation.** This inquiry's finding must include `## Inherited Commitments Re-test` with pre-classification of all 29 inherited commitments + RE-TEST status.
- **C2: Disciplines-self-contained principle (mandatory).** No outbound sibling-discipline or protocol references in the spec text.
- **C3: Anti-coupling to current /explore CONTENT.** Convention copied; vocabulary not coupled.
- **C4: Spec size budget.** ~400-450 lines target; flag bloat ≥500; flag under-specification ≤250.
- **C5: Operational sufficiency.** The spec must be runnable; PROCESS-level decisions committed inline only when required for runnability.

### Key Insights

- **K1: explore.md is the spec-anatomy reference (CONVENTION only); the 2 prior findings are the spec-content source.** Convention from one source; content from another; no leakage between.
- **K2: PROCESS-level inline commitments are necessary** for: within-Traversal component ordering, convergence criteria, sub-phase gating predicate, workspace-overload threshold operational handle, relevance-attribution mechanism's per-item operational steps, Output-shaping's capture-at-moment-of-tagging rule.
- **K3: Each inline PROCESS commitment carries a default + refinement-trigger.** Future PROCESS inquiry may tighten; current spec is operationally sufficient with defaults.
- **K4: The "Inherited Commitments Re-test" verification IS the spec text itself.** Each RE-TESTED commitment's evidence = the section where it appears.

### Structural Points

- **SP1: 5 numbered top-level sections** (matching explore.md): 1. Identity / 2. Components / 3. Process Model / 4. Quality / 5. Output + Execute section.
- **SP2: Components section holds the relevance-attribution mechanism** (the discipline's signature) as Section 2.4 — alongside Traversal components (2.1), Boundary-discovery sub-phase (2.2), primitive composition (2.3).

Wait — let me re-think Section 2 ordering. Cleanest:
- 2.1: The 6 Traversal components (the discipline's working units)
- 2.2: The Boundary-discovery sub-phase (a conditional pre-phase component)
- 2.3: The relevance-attribution mechanism (the discipline's signature internal capability; what fires within Relevance-attribution component)
- 2.4: Primitive composition (the cognitive substrate the components draw on)

- **SP3: Process Model holds the pipeline structure** as Section 3 — 3-phase shape (3.1), Reception (3.2), Relevance-attributed Traversal iterative cycle (3.3), Assembly (3.4), Re-invocation (3.5), Idempotency (3.6).
- **SP4: Quality holds the failure framework + calibration** as Section 4 — failure-framework intro (4.1), LAYER 1 modes (4.2; 7 modes), LAYER 2 modes (4.3; 3 modes), asymmetric-failure principle (4.4), coverage criteria (4.5), calibration trajectory + signals (4.6), self-assessment output (4.7).
- **SP5: Output holds the dual output schema** as Section 5 — dual output overview (5.1), workspace work-product (5.2), thin artifact work-product (5.3), Traversal Trace schema (5.4), State Summary schema (5.5), Telemetry (5.6), Frontier (5.7).

### Foundational Principles

- **FP1: Each Inherited Commitment that is RE-TESTED is RE-TESTED by being EXPRESSED in the spec text.** Test result: PASS if the spec text contains the commitment's content at the appropriate section; FAIL otherwise. Critique runs the verification.
- **FP2: PROCESS-level inline commitments use the default + refinement-trigger pattern.** This honors the STRUCTURAL Layer Commitment (spec text is committed) while flagging operational specifics for downstream PROCESS refinement.
- **FP3: The spec's vocabulary is surfacing's own.** Cross-checked against forbidden /explore-content vocabulary list. No vocabulary inheritance.

### Meaning-Nodes

- **MN1: The spec text IS the discipline's runtime artifact.** Saved to `cognitive_harness/surfacing/references/surfacing.md` (or user-chosen path); loaded by SKILL.md at Step 0; read in full before discipline execution.
- **MN2: Convention-following.** The spec follows existing-disciplines conventions (loading-note, numbered sections, refinement-note format, cross-reference format, Execute section pattern).
- **MN3: PROCESS-level operational sufficiency.** Inline commitments with defaults make the spec runnable; refinement-triggers flag what's deferrable.

---

## SV2 — Anchor-Informed Understanding

The surfacing spec follows Candidate A (5 numbered sections + Execute) with sub-section structure committed per SP1-SP5. The 29 inherited commitments map to specific sections; the spec text IS the re-test evidence. PROCESS-level inline commitments use default + refinement-trigger pattern. Anti-coupling protected by forbidden-vocabulary check at Critique.

---

## Phase 2 — Perspective Checking

### Technical / Logical perspective

The spec needs precise inputs/outputs/components. The 5-section structure provides natural placement for each. The Execute section operationalizes the discipline as numbered steps. **PASS.**

### Human / User perspective

The user requested "the actual spec text" to be ready for copy to production. The 5-section + Execute + drafted-and-saved-as-surfacing_spec.md approach meets this. **PASS.**

### Strategic / Long-term perspective

The spec supports downstream STRUCTURAL refinements (e.g., later inquiries might add refinement notes; the convention's refinement-note format accommodates this). Multi-head architecture, consciousness substrate role — both addressed in prior findings as Open Questions; not in this spec. **PASS.**

### Risk / Failure perspective

Main risks: (1) bloat (spec exceeds 500 lines); (2) anti-coupling violation (current /explore vocabulary leaks in); (3) operational under-specification (spec isn't runnable). Mitigations: size budget enforced; forbidden-vocabulary check; PROCESS-level inline commitments. **PASS.**

### Resource / Feasibility perspective

Spec text production is feasible in one Innovation phase + Critique. Size + convention-compliance are tractable. **PASS.**

### Definitional / Internal-Consistency perspective

- The relevance-attribution mechanism lives in Section 2.3 (Components); how it FIRES during Traversal is in Section 3.3 (Process Model). Consistency: the mechanism's existence + classification is structural (Components); its temporal firing is procedural (Process Model). No contradiction.
- The 4-level vocabulary applies at three granularities — per-item (workspace, in Section 5.2), per-trace-entry (Trace schema, Section 5.4), per-region aggregate (Summary coverage map, Section 5.5). Consistency: same vocabulary, applied at different artifact-vs-workspace layers. **PASS.**

### Frame-exit Completeness perspective

**Gating predicate evaluation:** the inquiry inherits "spec," "section," "Execute," "convention" terms from project + corpus; uses across ≥2 distinct values. **GATING FIRES.**

**1. Existence Enumeration:**
- "spec" — TYPE: runtime spec (surfacing's), SKILL spec, project meta-spec. LAYER: per-discipline, project-wide.
- "section" — TYPE: top-level section, sub-section, sub-sub-section.
- "Execute" — TYPE: Execute section in spec, Execute-the-following-process heading variants.
- "convention" — TYPE: spec-anatomy convention, refinement-note convention, cross-reference convention.

**2. Role Assessment:** out-of-frame referents — SKILL spec (`SKILL.md` wrapper); project meta-spec (`docs/discipline_taxonomy.md`); cross-spec conventions (refinement-note format originating in `docs/step_refinement.md`). Operation's coherence preserved if ignored? PARTIAL — the SKILL.md is user-discretion downstream (correctly out of scope); the meta-spec is project-level (correctly referenced as project doc); cross-spec conventions are inputs to the surfacing spec (already incorporated via R10/R11 from Exploration). **No load-bearing concerns missed.**

**3. Verdict Rigor:** "out of scope" verdicts on SKILL.md + materialization plan — both are downstream user-discretion. Counter: "spec text without SKILL.md is incomplete because SKILL.md tells the runner how to invoke the spec." Why this fails structurally: SKILL.md's content is the loader, not the spec; the spec is self-contained when read on its own. The runner uses SKILL.md to LOAD the spec; the spec doesn't need to know about its loader. **Verdict survives.**

**4. Residual:** Frame-exit concerns not yet captured — none load-bearing.

**Frame-exit Completeness produced no model-altering content.** SV2 survives intact.

### Phase / Calibration-State perspective

The spec is for project's current bootstrap state. Calibration signals split (per output-correction finding's RD10) are committed in the spec; calibration trajectory is project-level (preserved from pure-design finding). The spec is bootstrap-stage-appropriate. **PASS.**

---

## SV3 — Multi-Perspective Understanding

Spec structure committed (Candidate A; 5 numbered sections; sub-sections per SP1-SP5). Each section's sub-structure resolved. PROCESS-level inline commitments identified (6 areas requiring inline operationalization with default + refinement-trigger). Anti-coupling protocol committed (forbidden-vocabulary check). Frame-exit Completeness fired and produced no model-altering content.

---

## Phase 3 — Ambiguity Collapse

### A1 — Section 2 sub-section ordering

**Ambiguity:** within Section 2 Components, what's the right order — 6 Traversal components first, or primitive composition first?

**Strongest counter:** primitive composition first (substrate before structure).

**Why fails structurally:** the primitives ARE substrate-level building blocks; the Traversal components ARE the discipline's working units. Reading a discipline's spec, a reader is more interested in WHAT the discipline DOES (Traversal components) before WHAT IT COMPOSES FROM (primitives). The corpus convention supports working-units-first.

**Confidence:** HIGH.

**Resolution:** **2.1 Six Traversal components / 2.2 Boundary-discovery sub-phase / 2.3 The relevance-attribution mechanism / 2.4 Primitive composition.**

### A2 — Where does the relevance-attribution mechanism live: Section 1, 2, or 3?

**Ambiguity:** identity (Section 1), components (Section 2), or process (Section 3)?

**Strongest counter:** Section 1 — the mechanism is identity-substantive (LBT2 from pure-design finding committed it as the discipline's signature).

**Why fails structurally:** Section 1 is for verb-meaning + intrinsic identity; the mechanism is a sub-component of the discipline, not the discipline itself. Per the corpus convention, signature mechanisms live in Components (innovate's seven mechanisms; td-critique's adversarial structure; sensemaking's anchors + boundary construction operations). Section 2 is the right place.

**Confidence:** HIGH.

**Resolution:** **Section 2.3.** The mechanism's name + structural classification + 8 distinctions table live here. The Identity section (Section 1) mentions the mechanism by name in passing (as the discipline's signature internal capability) but does not detail it.

### A3 — Process Model sub-section structure

**Ambiguity:** how granular?

**Resolution:** **3.1 The 3-phase shape (overview) / 3.2 Reception / 3.3 Relevance-attributed Traversal (with cycle structure + component ordering) / 3.4 Assembly / 3.5 Re-invocation as parameterized variation / 3.6 Idempotency within invocation.**

The Boundary-discovery sub-phase: where? It's a CONDITIONAL PRE-PHASE — operates before Reception when territory is implicit. Two options:
- (a) Inside Section 3.2 Reception (sub-section of Reception)
- (b) Standalone 3.x (between Reception and Traversal)

The MEANING finding called it "a conditional pre-phase" — separate operational identity. Per corpus convention (explore.md §3.2 is a standalone "Preliminary sub-phase"), make it standalone. **Resolution refined:**

**Section 3 sub-structure: 3.1 The 3-phase shape (overview) / 3.2 Optional Boundary-discovery sub-phase / 3.3 Reception / 3.4 Relevance-attributed Traversal / 3.5 Assembly / 3.6 Re-invocation / 3.7 Idempotency.**

### A4 — Quality sub-section structure

**Resolution:** **4.1 Failure-mode framework (LAYER 1/LAYER 2 intro) / 4.2 LAYER 1 — Operational failures (7 modes) / 4.3 LAYER 2 — Identity failures (3 modes) / 4.4 Asymmetric-failure principle + operational form / 4.5 Coverage criteria (stop-rule for Traversal) / 4.6 Calibration trajectory + signals / 4.7 Self-assessment output.**

### A5 — Output sub-section structure

**Resolution:** **5.1 The dual output (overview) / 5.2 Workspace work-product / 5.3 Thin artifact work-product / 5.4 Traversal Trace schema (PRIMARY artifact sub-section) / 5.5 State Summary schema (DERIVED) / 5.6 Telemetry / 5.7 Frontier (open questions for downstream).**

### A6 — Identity sub-section structure

**Resolution:** **1.1 Verb-meaning (the cognitive operation) / 1.2 Upstream-precondition relationship / 1.3 NOT-list (8 items) / 1.4 Vocabulary (key terms used throughout the spec) / 1.5 Discipline-taxonomy placement (Core; brief).**

### A7 — Inherited Commitments pre-classification (FQ7)

**29 commitments: 16 (D1-D16 from pure-design) + 13 (RD1-RD13 from output-correction).**

**Note on count:** the inquiry's _branch.md said "28" — the actual count is 29 (16 + 13). This is the correct number.

**Pre-classification:**

| # | Commitment | Status | Expected spec location (evidence for RE-TESTED) |
|---|---|---|---|
| D1 | Discipline name "surfacing" | RE-TESTED | Section 1.1; title; throughout |
| D2 | Mechanism name "relevance-attribution" + 8 distinctions | RE-TESTED | Section 2.3 |
| D3 | 4-level relevance vocabulary | RE-TESTED | Section 1.4 + Section 5.4/5.5 (where vocabulary applies) |
| D4 | 3-phase structural shape + sub-phase | RE-TESTED | Section 3.1 + 3.2 |
| D5 | 6 Traversal components | RE-TESTED | Section 2.1 |
| D6 | 8 load-bearing primitives + 3 absent | RE-TESTED | Section 2.4 |
| D7 | Purposive character | RE-TESTED | Section 1.1 (verb-meaning includes purposive) + Section 3.3 (Reception receives purpose) |
| D8 | Asymmetric-failure principle | RE-TESTED | Section 4.4 |
| D9 | LAYER 1 / LAYER 2 framework | RE-TESTED | Sections 4.1, 4.2, 4.3 |
| D10 | Calibration trajectory | RE-TESTED | Section 4.6 |
| D11 | Re-invocation as parameterized variation | RE-TESTED | Section 3.6 |
| D12 | Output specification (REPLACED by RD1-RD2 dual output) | INHERITED-WITHOUT-RE-TEST | Status: superseded by RD1-RD2; the surfacing spec implements the refined output |
| D13 | Core taxonomy placement | RE-TESTED | Section 1.5 |
| D14 | 8-item NOT-list | RE-TESTED | Section 1.3 |
| D15 | LBT1 ("relevance" defensible) | INHERITED-WITHOUT-RE-TEST | Verdict-level commitment; the spec uses "relevance" without re-deriving its defensibility |
| D16 | LBT2 ("sensemaking-LIKE-but-NOT-sensemaking" defensible) | INHERITED-WITHOUT-RE-TEST | Verdict-level commitment; the spec describes the mechanism without re-deriving its distinctiveness |
| RD1 | Dual output | RE-TESTED | Section 5.1 |
| RD2 | Two artifact sub-sections | RE-TESTED | Sections 5.4 + 5.5 |
| RD3 | Workspace operational definition | RE-TESTED | Section 5.2 |
| RD4 | Tag granularity (per-trace-entry + per-region aggregate) | RE-TESTED | Sections 5.4 + 5.5 |
| RD5 | prior-workspace OPTIONAL + runner authority | RE-TESTED | Section 3.6 |
| RD6 | CONCLUDE NOT in spec | RE-TESTED | Verification: spec text contains zero mentions of CONCLUDE |
| RD7 | Workspace overload mitigation (frontier-signal PRIMARY) | RE-TESTED | Section 4.2 (failure mode entry) + Section 4.5 (coverage criteria) |
| RD8 | Concept-names list flat with metadata | RE-TESTED | Section 5.5 |
| RD9 | workspace-populated field dual ownership | RE-TESTED | Section 5.5 |
| RD10 | Calibration trajectory + signal split | RE-TESTED | Section 4.6 |
| RD11 | Inherited Commitments pre-classification (16-row table from prior inquiry) | INHERITED-WITHOUT-RE-TEST | Meta-level commitment from prior inquiry's own re-test; the surfacing spec doesn't include this content |
| RD12 | "Thin" criterion (no item content) | RE-TESTED | Section 5.3 |
| RD13 | 3 new LAYER 1 failure modes | RE-TESTED | Section 4.2 |

**Counts:**
- **RE-TESTED:** 25 commitments (D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11, D13, D14, RD1, RD2, RD3, RD4, RD5, RD6, RD7, RD8, RD9, RD10, RD12, RD13).
- **INHERITED-WITHOUT-RE-TEST:** 4 commitments (D12, D15, D16, RD11).

D12's status as INHERITED-WITHOUT-RE-TEST: the original D12 (content-bearing inventory) was REPLACED by RD1+RD2 in the output-correction finding. This inquiry's spec implements RD1+RD2; D12 is inherited-because-replaced, not re-tested as a standalone.

### A8 — PROCESS-level inline commitments (FQ8)

**Resolution:** **6 inline PROCESS commitments** with default + refinement-trigger pattern. Each is in the spec text:

| # | PROCESS commitment | Spec location | Default | Refinement-trigger |
|---|---|---|---|---|
| 1 | Within-Traversal component ordering | Section 3.4 | Scope-determination → Item-enumeration/generation → Relevance-attribution → Coverage-tracking → Absence-detection → Output-shaping (natural causal order) | Empirical observation that a different ordering improves coverage or efficiency |
| 2 | Convergence criteria within Traversal | Section 4.5 | Territory exhaustively traversed at current resolution + no item filtered at uncertain-relevance (per asymmetric-failure principle) | Empirical observation that termination is too eager or too late |
| 3 | Gating predicate for Boundary-discovery sub-phase | Section 3.2 | Fires when input contract's `territory` field is "unbounded" or "discover" (not "explicit-bounded") | Operational ambiguity in identifying "discover" cases |
| 4 | Workspace-overload threshold (frontier-signal trigger) | Section 4.5 | Discipline self-observes LLM context-budget pressure during traversal; emits frontier flag when continued reading would saturate context | Empirical observation that the trigger fires too early or too late |
| 5 | Relevance-attribution mechanism per-item operational steps | Section 2.3 | Receive (purpose + item) → Match (Intuition-similarity against purpose template) → Tag emission (one of core / sub / side / umbrella) + Confidence assignment (HIGH / MEDIUM / LOW) | Empirical observation that mechanism produces inconsistent or unreliable tags |
| 6 | Output-shaping capture-at-moment-of-tagging | Section 2.1 (Output-shaping component description) + Section 5.4 (Traversal Trace per-entry recording) | Capture per-item tag at the moment of emission during traversal; do not retrospectively re-tag at Assembly | Empirical observation that capture-at-moment causes performance degradation or accuracy issues |

### A9 — Anti-coupling verification protocol (FQ9)

**Resolution:** **Forbidden-vocabulary search.** After drafting the spec, search for:

- "labels-vs-anchors" / "labels are observed" / "anchors are extracted"
- "scan-signal-probe-cycle" / "scan-signal-probe"
- "confidence-tagged map"
- "Form-(i)" / "Form-(ii)" / "Candidates-only" / "Comparison structure"
- "Completeness before novelty"
- "§4.4 labeling-vs-meaning heuristic" / "labeling-vs-meaning heuristic"
- "artifact mode" / "possibility mode" (in the explore.md mode-determination sense)
- "§1.5 declared identity"
- "§1.3 NOT-list" (explore.md's NOT-list; surfacing has its own)

Any match: refine to use surfacing's own vocabulary. Critique runs the verification + reports.

Allowed shared vocabulary (project-level; not /explore-specific):
- "relevance" / "relevant" / "purpose" / "territory" / "item" / "candidate" / "primitive" / "discipline" / "convergence" / "frontier" / "coverage"

### A10 — Loading-note + Execute-section instantiation (FQ10)

**Loading-note path:** `cognitive_harness/surfacing/SKILL.md` (instantiated for surfacing). The blockquote header matches corpus template exactly.

**Execute-section step count + names:** **6 numbered steps.**

1. **State Mode + Entry Point + Receive Input.** Mode: artifact (territory has pre-existing items) vs possibility (territory is conceptual; items must be candidate-generated). Entry point: signal-first (the inquiry's purpose is a strong signal — surfacing is always purposive) vs frontier-first (territory survey before purpose-biased traversal — typically when boundary-discovery fires). Receive: purpose, territory specification, optional prior-artifact, optional prior-workspace, optional refined-sub-purpose.

2. **Fire optional Boundary-discovery sub-phase if territory is implicit.** Apply the gating predicate (per Section 3.2). Sub-phase produces territory specification for the main cycle.

3. **Run Reception → Relevance-attributed Traversal → Assembly cycle.** Reception: receive inputs + initialize workspace. Traversal: iterative cycle with 6 components firing per iteration (per Section 3.4); each iteration produces per-item relevance tags into workspace + per-trace-entry tags into in-progress artifact. Assembly: compile the thin artifact (Traversal Trace + State Summary) + initialize workspace-populated field.

4. **Assess Convergence.** Apply Section 4.5 stop-rule: territory exhaustively traversed at current resolution + no item filtered at uncertain-relevance. If workspace-overload threshold approached: emit frontier flag.

5. **Emit dual output.** Workspace: populated as side effect of traversal (LLM in-context content + explicit scope tags). Artifact: save thin artifact to inquiry folder per the markdown rendering of the Trace + Summary schemas.

6. **Self-Assessment Verdict.** PROCEED (output ready) / FLAG (output produced but flag for downstream review) / RE-RUN (output incomplete; recommend re-invocation with refined parameters).

### Load-bearing concept tests

**LBT1: "Convention-following"** — is following existing-disciplines convention structurally defensible?

**Ambiguity:** convention could over-constrain.

**Counter:** surfacing might need an unusual section structure that explore.md's pattern doesn't accommodate.

**Why counter fails:** the 5-section pattern (Identity / Components / Process / Quality / Output) is GENERIC across cognitive disciplines; it accommodates surfacing's content cleanly per A1-A6. No section is forced; the pattern fits naturally. Convention-following also serves operational consistency (corpus readers expect the pattern). **PASS.**

**Confidence:** HIGH.

**LBT2: "Operational sufficiency"** — is the STRUCTURAL spec runnable, given the 6 inline PROCESS commitments?

**Ambiguity:** maybe more PROCESS-level commitments are needed.

**Counter:** the spec might still leave a runner stuck on some operational decision.

**Why counter fails:** the 6 inline PROCESS commitments cover the operationally-load-bearing decisions:
- Component ordering (so the runner knows when each component fires)
- Convergence criteria (so the runner knows when to stop Traversal)
- Sub-phase gating (so the runner knows when Boundary-discovery fires)
- Workspace-overload threshold (so the runner knows when to emit frontier-signal)
- Mechanism operational steps (so the runner knows how to perform relevance-attribution)
- Output-shaping capture rule (so the runner knows when to capture tags)

With these defaults committed, the runner can execute the discipline end-to-end. Refinement-triggers flag empirical adjustments for future PROCESS inquiry. **PASS at MEDIUM-HIGH** (some operational specifics may emerge during real use; the spec is bootstrap-stage-runnable).

**Confidence:** MEDIUM-HIGH (PASS with caveat that empirical operation will refine).

### Specific-vs-pattern recognition cue

**Specific:** the surfacing spec text. **Broader pattern:** STRUCTURAL operationalization methodology for cognitive disciplines.

**Resolution:** commit SPECIFIC (the spec text). Broader pattern surfaces as Open Question.

---

## SV4 — Clarified Understanding

After ambiguity collapse:

- **Section structure committed:** 5 numbered top-level sections + Execute. Sub-sections per A1-A6.
- **Section 2 sub-structure:** 2.1 6 Traversal components / 2.2 Boundary-discovery sub-phase / 2.3 Relevance-attribution mechanism / 2.4 Primitive composition.
- **Section 3 sub-structure:** 3.1 3-phase shape / 3.2 Optional Boundary-discovery sub-phase / 3.3 Reception / 3.4 Relevance-attributed Traversal / 3.5 Assembly / 3.6 Re-invocation / 3.7 Idempotency.
- **Section 4 sub-structure:** 4.1 Failure framework intro / 4.2 LAYER 1 modes / 4.3 LAYER 2 modes / 4.4 Asymmetric-failure principle / 4.5 Coverage criteria / 4.6 Calibration trajectory / 4.7 Self-assessment.
- **Section 5 sub-structure:** 5.1 Dual output overview / 5.2 Workspace / 5.3 Thin artifact / 5.4 Trace schema / 5.5 Summary schema / 5.6 Telemetry / 5.7 Frontier.
- **Section 1 sub-structure:** 1.1 Verb-meaning / 1.2 Upstream-precondition / 1.3 NOT-list / 1.4 Vocabulary / 1.5 Taxonomy placement.
- **29 inherited commitments pre-classified:** 25 RE-TESTED + 4 INHERITED-WITHOUT-RE-TEST.
- **6 inline PROCESS commitments** with defaults + refinement-triggers.
- **Anti-coupling verification protocol:** forbidden-vocabulary search.
- **Loading-note path + Execute step count + names** committed.
- **LBT1 PASS HIGH.** Convention-following structurally defensible.
- **LBT2 PASS MEDIUM-HIGH.** Spec runnable with the 6 inline PROCESS commitments.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Now fixed

- 5 numbered top-level sections + Execute section.
- Sub-section structures per A1-A6.
- 29 commitments pre-classified.
- 6 inline PROCESS commitments.
- Anti-coupling verification protocol.
- Loading-note path + Execute step count.

### Now eliminated

- Unnumbered or fewer-numbered top-level sections.
- Mechanism placement in Section 1 (Identity) or Section 3 (Process).
- Boundary-discovery sub-phase as a sub-section of Reception (vs standalone).
- Re-testing every commitment regardless of spec inclusion.
- PROCESS-level under-specification (spec being non-runnable).
- Direct content-vocabulary inheritance from current /explore.

### Paths that remain viable

- The drafted spec text per the structure + commitments above.
- Downstream PROCESS inquiry tightening the 6 inline commitments.
- User-discretion: rename / coexist decision; SKILL.md wrapper; install plan.

---

## SV5 — Constrained Understanding

The spec text is fully scaffolded. Each section + sub-section has a content target derived from the 2 prior findings + the 6 inline PROCESS commitments. Anti-coupling protocol is committed. Inheritance pre-classification is done. Decomposition will partition the spec into pieces for Innovation to draft.

---

## Phase 5 — Conceptual Stabilization

### Accommodation trigger check

Did perspectives produce destabilizing anchors? **NO.** Perspectives produced refining-not-destabilizing anchors. Frame-exit Completeness produced no model-altering content. SV2 survived intact.

### Self-reference vigilance check

Sensemaking is evaluating a STRUCTURAL spec for a sibling discipline. External grounding applied: user's correction (operational-not-aesthetic per prior findings); 2 prior findings (28-commitment inheritance); existing-disciplines corpus (convention reference); project-level docs (taxonomy, primitive set, anatomy template). **PASS.**

### Status quo bias check

The spec follows existing-disciplines convention; this is convention-following on STRUCTURAL choice, not defending a position. The convention is structurally defensible per LBT1. **PASS.**

### Anchor dominance check

Multi-anchored: structural-fit (5-section pattern) + content-inheritance (28 commitments) + operational sufficiency (6 inline PROCESS commitments) + anti-coupling (forbidden-vocabulary check). No single anchor dominates. **PASS.**

### Perspective blindness check

Multiple perspectives produced substantive content (Technical: 5-section structure works; Risk: 3 mitigations; Frame-exit Completeness: out-of-frame referents correctly positioned). **PASS.**

### Clean resolution trap check

Each A1-A10 counter tested on structural grounds. **PASS.**

### Final stabilization

SV6 integrates all surviving anchors.

---

## SV6 — Stabilized Model

The surfacing spec is structured as **5 numbered top-level sections + Execute section**, following existing-disciplines convention (Candidate A from Exploration; explore.md pattern for numbered sections, sense-making/decompose/innovate/td-critique for unnumbered idiomatic content patterns).

**Section structure:**

- **Section 1 — Identity** (1.1 Verb-meaning / 1.2 Upstream-precondition relationship / 1.3 NOT-list / 1.4 Vocabulary / 1.5 Taxonomy placement)
- **Section 2 — Components** (2.1 Six Traversal components / 2.2 Boundary-discovery sub-phase / 2.3 Relevance-attribution mechanism / 2.4 Primitive composition)
- **Section 3 — Process Model** (3.1 3-phase shape / 3.2 Optional Boundary-discovery sub-phase / 3.3 Reception / 3.4 Relevance-attributed Traversal / 3.5 Assembly / 3.6 Re-invocation / 3.7 Idempotency)
- **Section 4 — Quality** (4.1 Failure framework intro / 4.2 LAYER 1 — Operational failures / 4.3 LAYER 2 — Identity failures / 4.4 Asymmetric-failure principle / 4.5 Coverage criteria / 4.6 Calibration trajectory + signals / 4.7 Self-assessment output)
- **Section 5 — Output** (5.1 Dual output / 5.2 Workspace work-product / 5.3 Thin artifact work-product / 5.4 Traversal Trace schema / 5.5 State Summary schema / 5.6 Telemetry / 5.7 Frontier)
- **Execute the Surfacing Process** (6 numbered steps, after separator)

**29 inherited commitments pre-classified:** 25 RE-TESTED (each with expected spec location) + 4 INHERITED-WITHOUT-RE-TEST.

**6 inline PROCESS commitments** with default + refinement-trigger pattern: within-Traversal component ordering; convergence criteria; Boundary-discovery gating predicate; workspace-overload threshold; relevance-attribution mechanism operational steps; Output-shaping capture-at-moment-of-tagging.

**Anti-coupling protocol:** forbidden-vocabulary search at Critique covering 9 specific current-/explore content vocabulary entries; zero matches required.

**Loading-note instantiation:** path `cognitive_harness/surfacing/SKILL.md`.

**Execute section:** 6 numbered steps (State Mode + Receive → Boundary-discovery → Cycle → Convergence → Emit → Verdict).

**Size budget:** ~400-450 lines target.

**LBT1 PASSES HIGH:** convention-following is structurally defensible.

**LBT2 PASSES MEDIUM-HIGH:** spec is runnable with the 6 inline PROCESS commitments; future PROCESS inquiry may refine.

---

## Decisions Committed (for Decomposition)

| # | Decision | Source |
|---|---|---|
| **SD1** | 5 numbered top-level sections (Candidate A) | Exploration FQ1 + A1 |
| **SD2** | Section 1 sub-structure (1.1-1.5) | A6 |
| **SD3** | Section 2 sub-structure (2.1-2.4) | A1+A2 |
| **SD4** | Section 3 sub-structure (3.1-3.7) | A3 |
| **SD5** | Section 4 sub-structure (4.1-4.7) | A4 |
| **SD6** | Section 5 sub-structure (5.1-5.7) | A5 |
| **SD7** | Execute section: 6 numbered steps | A10 |
| **SD8** | 29 inherited commitments pre-classified (25 RE-TESTED + 4 INHERITED-WITHOUT-RE-TEST) with expected spec location per RE-TESTED | A7 |
| **SD9** | 6 inline PROCESS commitments with default + refinement-trigger | A8 |
| **SD10** | Anti-coupling protocol: forbidden-vocabulary search (9 entries) at Critique | A9 |
| **SD11** | Loading-note instantiation: `cognitive_harness/surfacing/SKILL.md` | A10 |
| **SD12** | Size budget ~400-450 lines | C4 from Exploration |
| **SD13** | LBT1 PASS HIGH (convention-following defensible) | LBT1 |
| **SD14** | LBT2 PASS MEDIUM-HIGH (operational sufficiency with 6 inline commitments) | LBT2 |

### Telemetry summary

- SV1 → SV6 delta: large structural shift; SV1 was coarse; SV6 commits 14 structural decisions.
- Perspective saturation: 7 perspectives applied; Frame-exit Completeness fired; no new content from later perspectives.
- Ambiguity resolution ratio: 10/10 + 2/2 LBTs adjudicated at HIGH (LBT2 at MEDIUM-HIGH with acknowledged caveat).
- 6 failure-mode checks all PASS.

### Self-Assessment Verdict

**PROCEED to Decomposition with 14 committed structural decisions.**

Decomposition will partition the spec text production into pieces for Innovation. Each piece corresponds to one or more sections of the spec; Innovation drafts the actual markdown content.
