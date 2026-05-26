---
status: active
model: claude-opus-4-7[1m]
effort: max
refines: devdocs/inquiries/2026-05-22_02-13__meaning_surfacing_output_correction_traverse_load_vs_inventory/finding.md
---
# Finding: Surfacing — Structural Spec Text Production

## Changes from Prior

**Prior paths (both synthesized):**
- `devdocs/inquiries/2026-05-22_01-25__meaning_surfacing_pure_discipline_clean_design/finding.md` — Surfacing: Pure Discipline Clean Design (16 committed decisions D1-D16; MEANING-layer characterization).
- `devdocs/inquiries/2026-05-22_02-13__meaning_surfacing_output_correction_traverse_load_vs_inventory/finding.md` — Surfacing: Output Correction (13 committed decisions RD1-RD13; refined the output specification to dual workspace + thin artifact).

**Revision trigger:** the user's request "lets do this" after recommendation to run a STRUCTURAL inquiry producing the actual runtime spec text for surfacing. Both prior MEANING-layer findings characterized what surfacing IS; this inquiry produces what its runtime spec LOOKS LIKE.

**What's preserved.** The 16 commitments from the pure-design finding (D1-D16) + the 13 from the output-correction finding (RD1-RD13). Total 29 inherited commitments; each accounted for in the `## Inherited Commitments Re-test` section below.

**What's changed.** Nothing in the MEANING-layer commitments. This inquiry adds a STRUCTURAL artifact (the spec text) that operationalizes those commitments + commits 6 inline PROCESS commitments (with default + refinement-trigger pattern) that the spec needs to be runnable.

**What's new.** The drafted spec text (`surfacing_spec.md` inside this inquiry's folder; also quoted in the Finding section below). The Loading-note path commitment (`cognitive_harness/surfacing/SKILL.md`). The 6 inline PROCESS commitments with defaults + refinement-triggers (within-Traversal component ordering; convergence criteria; Boundary-discovery gating predicate; workspace-overload threshold; relevance-attribution mechanism per-item operational steps; Output-shaping capture-at-moment-of-tagging rule). The anti-coupling verification protocol executed at Critique with zero forbidden-vocabulary matches.

**Migration.** The spec text is saved as `surfacing_spec.md` in this inquiry's folder during Innovation + Critique. At CONCLUDE, it is archived to `docarchive/` alongside the discipline outputs. The Finding section below quotes the spec text so the user can read both the rationale and the spec in one place. The user's next action: copy `surfacing_spec.md` to a chosen production path (e.g., `cognitive_harness/surfacing/references/surfacing.md`) + write a SKILL.md wrapper (user-discretion downstream).

## Question

Given the two settled MEANING-layer findings on the surfacing discipline (pure-design + output-correction), what is the **actual runtime spec text** for surfacing — as a single self-contained markdown spec consistent with the project's existing discipline-spec convention (loading-note + title + 5 numbered sections + Execute section, matching `cognitive_harness/sense-making/references/sensemaking.md`, `cognitive_harness/decompose/references/decompose.md`, etc.) — that operationalizes all 29 inherited commitments + commits the runtime PROCESS-level decisions the spec needs to be runnable + preserves the disciplines-self-contained principle + respects anti-coupling to current `/explore`'s content vocabulary?

## Finding Summary

- **The surfacing spec text was drafted and survives Critique clean** on 12 evaluation dimensions, including 2 CRITICAL dimensions (anti-coupling protocol compliance via actual grep verification; disciplines-self-contained principle preservation). The spec is **422 lines** (within the 400-450 line corpus-budget target).

- **The spec follows existing-disciplines convention** (Candidate A from Exploration): loading-note blockquote → title `# Structural Surfacing — A Thinking Discipline` → opening definition with bold-quote → 5 numbered top-level sections (1. Identity / 2. Components / 3. Process Model / 4. Quality / 5. Output) with sub-sections per Sensemaking SD2-SD6 → `---- NOW SOLID INSTRUCTIONS START ----` separator → `## Execute the Surfacing Process` with 6 numbered steps.

- **All 29 inherited commitments are accounted for.** 25 RE-TESTED (each present at its expected spec location per Sensemaking's pre-classification; verified at Critique) + 4 INHERITED-WITHOUT-RE-TEST with explicit reasons (D12 superseded by RD1+RD2; D15+D16 are verdict-level commitments that the spec uses without re-deriving; RD11 is a meta-level prior-inquiry's-own re-test record).

- **6 inline PROCESS commitments are committed with default + refinement-trigger pattern.** Within-Traversal component ordering (§3.4); convergence criteria (§4.5); Boundary-discovery gating predicate (§3.2); workspace-overload threshold (§4.5); relevance-attribution mechanism per-item operational steps (§2.3); Output-shaping capture-at-moment-of-tagging rule (§2.1). Each carries a default making the spec runnable + a refinement-trigger naming the empirical condition that would warrant revision via a future PROCESS inquiry.

- **The anti-coupling verification protocol passed via actual grep verification.** Zero matches on 11 forbidden vocabulary entries from current `/explore`'s distinctive lexicon (labels-vs-anchors, scan-signal-probe, confidence-tagged-map, Form-(i)/(ii), Candidates-only, Comparison-structure, Completeness-before-novelty, §4.4-labeling-vs-meaning, labels-are-observed, anchors-are-extracted, plus "artifact mode" and "possibility mode" as mode-determination labels). The spec uses surfacing's own vocabulary throughout (workspace, artifact, traversal, relevance-attribution, Trace, Summary, dual output, etc.).

- **The disciplines-self-contained principle is preserved.** Zero sibling-discipline spec-path references; zero CONCLUDE references; zero materialization references; zero runner-by-name references. One mention of "sense-making" appears in §2.3's comparison-table heading ("Eight structural properties distinguish the relevance-attribution mechanism from sense-making's anchor-extraction") — this is comparative naming for structural distinction, corpus-convention-compliant per the precedent in `cognitive_harness/decompose/references/decompose.md` (which uses identical sibling-discipline-naming-for-contrast).

- **2 CONTRARIAN-RETHINK Inversions were tested + rejected** at Innovation: (1) P1 — "omit the NOT-list because intrinsic-identity defense is sufficient" — REJECTED on convention + downstream-consumer-disambiguation + Domain-Transfer-convergence grounds. (2) P6 — "use prose Execute section instead of 6 numbered steps" — REJECTED on corpus-convention + LLM-operational-anchors + checkpointing grounds.

- **The spec is operationally sufficient at the bootstrap project state.** A runner / LLM can execute the discipline from the spec alone given the 6 inline PROCESS defaults. Future PROCESS inquiry may tighten the defaults based on empirical operation per each commitment's refinement-trigger.

- **The Loading-note path is `cognitive_harness/surfacing/SKILL.md`** — the natural location for the discipline's SKILL.md wrapper (which is a separate user-discretion downstream artifact; not produced by this inquiry).

- **A minor inline Critique-stage fix was applied** to add the explicit `(default; refinement-trigger = ...)` parenthetical to the Output-shaping component's description in §2.1 (matching the format used by the other 5 inline PROCESS commitments). After the fix: 6 refinement-trigger markers in the spec, matching SD9. Spec size: 422 lines unchanged.

## Finding

### Surrounding context (why we are even discussing this)

Two prior `/MVL+` inquiries produced MEANING-layer findings characterizing the surfacing discipline:

- **The pure-design finding** (2026-05-22_01-25) committed surfacing's intrinsic identity, the relevance-attribution mechanism, the 4-level relevance vocabulary, the 3-phase structural shape with optional Boundary-discovery sub-phase, the 6 Traversal components, the 8 load-bearing primitives + 3 deliberately absent, the LAYER 1 / LAYER 2 failure-mode framework, the calibration trajectory, the re-invocation as parameterized variation, the Core taxonomy placement, the 8-item intrinsic NOT-list, and the LBT verdicts (LBT1: "relevance" defensible at the inquiry-purpose level; LBT2: "sensemaking-LIKE-but-NOT-sensemaking" defensible on 8 structural grounds).

- **The output-correction finding** (2026-05-22_02-13) refined the output specification per the user's correction that putting items' content in the artifact is "crazy and weird and inefficient." The refinement committed: dual output (workspace + thin artifact), workspace operational definition (LLM context + explicit scope tags per Working Memory HYBRID delegation), artifact's two sub-sections (Traversal Trace + State Summary), three relevance-tag granularities (per-item / per-trace-entry / per-region), "thin" criterion (no item content), 3 new LAYER 1 failure modes (workspace overload / artifact under-specification / workspace-artifact desync), re-invocation parameter rename (prior-artifact + optional prior-workspace), workspace-populated field dual ownership, runner authority for session continuity, calibration signal split.

After these two findings settled the MEANING, the user asked: "do we know how to create this surfacing discipline? or i should run structural loop to make the design more materialisable?" — and accepted the recommendation to run a STRUCTURAL inquiry.

This inquiry produces the actual runtime spec text — the markdown file that a downstream STRUCTURAL build (the SKILL.md wrapper + skill install machinery) will reference as the discipline's runtime artifact. The spec is at `surfacing_spec.md` in this inquiry's folder (also quoted below in §"The spec text") and is ready for the user to copy to a production path of their choice.

### The spec text

The full surfacing spec, as drafted at Innovation and refined at Critique. (Identical to `surfacing_spec.md`; ~422 lines; quoted below for reader convenience.)

```markdown
> **Loading note.** This file is loaded by `cognitive_harness/surfacing/SKILL.md` at Step 0 and is intended to be read in full before the discipline executes. Every section below — identity, components, process, quality, output — is referenced by the protocol. Do not summarize or partial-load; the protocol's instructions assume all sections are in context.

---

# Structural Surfacing — A Thinking Discipline

A thinking discipline for drawing items from a bounded territory into the inquiry's present attention, each tagged with relevance to the inquiry's purpose. Surfacing produces the workspace content on which all downstream cognitive work depends.

> **Structural Surfacing is the cognitive operation by which items present in (or candidate-generable for) a bounded territory move from latent into present + relevance-tagged, biased by the inquiry's purpose.**

Surfacing has two structural outputs that emerge together but live at different layers: a workspace work-product (the items read into the present attention with per-item relevance tags) and a thin artifact work-product (a persistent record of the traversal and discoveries, carrying no item content). Both are load-bearing — the workspace is the substantive product consumed by same-session downstream cognition; the artifact is the navigation/handoff product sufficient for cross-session consumption.

## 1. Identity

[Sub-sections 1.1 Verb-meaning / 1.2 Upstream-precondition relationship / 1.3 NOT-list (8 items) / 1.4 Vocabulary (7-row table) / 1.5 Taxonomy placement (Core).]

## 2. Components

[Sub-sections 2.1 Six Traversal components / 2.2 Boundary-discovery sub-phase / 2.3 Relevance-attribution mechanism + 8-property table + 5-step operational procedure / 2.4 Primitive composition (8 load-bearing + 3 absent).]

## 3. Process Model

[Sub-sections 3.1 Three-phase shape with diagram / 3.2 Optional Boundary-discovery sub-phase + gating predicate / 3.3 Reception / 3.4 Relevance-attributed Traversal + default component ordering / 3.5 Assembly / 3.6 Re-invocation as parameterized variation + runner authority / 3.7 Idempotency.]

## 4. Quality

[Sub-sections 4.1 LAYER 1 / LAYER 2 framework intro / 4.2 LAYER 1 7 operational modes / 4.3 LAYER 2 3 identity modes / 4.4 Asymmetric-failure principle + operational form / 4.5 Coverage criteria + workspace-overload trigger / 4.6 Calibration trajectory + 5 primary + 2 secondary signals / 4.7 Self-assessment output (PROCEED / FLAG / RE-RUN).]

## 5. Output

[Sub-sections 5.1 Dual output / 5.2 Workspace work-product / 5.3 Thin artifact work-product / 5.4 Traversal Trace schema (PRIMARY granularity; 6 per-entry fields) / 5.5 State Summary schema (DERIVED; 8 aggregate fields) / 5.6 Telemetry / 5.7 Frontier.]

---- NOW SOLID INSTRUCTIONS START ----

## Execute the Surfacing Process

[Six numbered steps: 1. State Mode + Entry Point + Receive Input / 2. Fire Optional Boundary-discovery Sub-phase / 3. Run Reception → Traversal → Assembly Cycle / 4. Assess Convergence / 5. Emit Dual Output / 6. Self-Assessment Verdict.]
```

**Quote note:** the above is a structural outline of the spec. The full 422-line text is at `surfacing_spec.md` (and archived to `docarchive/surfacing_spec.md` at CONCLUDE). The full text is the authoritative source; this outline highlights the section structure for finding readers.

### Section structure rationale

The 5 numbered top-level sections + Execute pattern follows the explore.md model (Identity / Components / Process / Quality / Output), which is the structurally-richest pattern in the corpus. Surfacing has 29 MEANING-layer commitments to express + a richer output schema (Trace + Summary) + multi-granularity vocabulary application — matching this pattern's content scale. Alternative patterns (sense-making's unnumbered sections; decompose's mixed structure) would lose sub-section addressability for cross-reference; the numbered-sub-section pattern fits surfacing's complexity.

The sub-section structures per section (1.1-1.5, 2.1-2.4, 3.1-3.7, 4.1-4.7, 5.1-5.7) place each MEANING-layer commitment at a precise location, enabling the Inherited Commitments Re-test (below) to verify each commitment's presence at its expected location.

### Inline PROCESS commitments

The 6 inline PROCESS commitments are necessary for runtime operational sufficiency. Each carries the format `(default; refinement-trigger = empirical condition)`. The defaults make the spec runnable now; the refinement-triggers flag empirical conditions that would warrant tightening via a future PROCESS inquiry.

1. **§2.3 — Relevance-attribution mechanism per-item operational steps.** Default: 5-step Receive → Match (Intuition-similarity) → Tag emission → Confidence assignment → Uncertainty handling (default to inclusion). Refinement-trigger: empirical observation of inconsistent or unreliable tags.

2. **§3.2 — Boundary-discovery sub-phase gating predicate.** Default: fires when input contract's `territory` field is `unbounded` or `discover`. Refinement-trigger: operational ambiguity in identifying discover cases.

3. **§3.4 — Within-Traversal default operational ordering.** Default: Scope-determination → Item-enumeration/generation → Relevance-attribution → Coverage-tracking → Absence-detection → Output-shaping. Refinement-trigger: empirical observation that a different order improves coverage or efficiency.

4. **§4.5 — Convergence criteria.** Default: territory exhaustively traversed at current resolution + no item filtered at uncertain-relevance + items rejected only on HIGH-confidence rejection. Refinement-trigger: empirical observation that termination is too eager or too late.

5. **§4.5 — Workspace-overload trigger.** Default: discipline self-observes LLM context-budget pressure during traversal; emits frontier flag when continued reading would saturate. Refinement-trigger: empirical observation that the trigger fires too early or too late.

6. **§2.1 — Output-shaping capture-at-moment-of-tagging rule.** Default: capture per-item tag AT THE MOMENT of emission during traversal (not retrospectively); artifact is the authoritative tag record. Refinement-trigger: empirical observation that capture-at-moment causes performance degradation or accuracy issues.

### Anti-coupling verification

Executed at Critique via actual `grep` (not narrative defense). Zero matches on all 11 forbidden vocabulary entries derived from current `/explore`'s distinctive lexicon:

| Forbidden term | Match count |
|---|---|
| labels-vs-anchors | 0 |
| scan-signal-probe | 0 |
| confidence-tagged map | 0 |
| Form-(i) | 0 |
| Form-(ii) | 0 |
| Candidates-only | 0 |
| Comparison structure | 0 |
| Completeness before novelty | 0 |
| §4.4 labeling-vs-meaning | 0 |
| labels are observed | 0 |
| anchors are extracted | 0 |
| artifact mode (current /explore's mode-determination label) | 0 |
| possibility mode (current /explore's mode-determination label) | 0 |

The spec uses surfacing's own vocabulary throughout. Convention-following at the spec-anatomy level (numbered sections, refinement-note format, cross-reference format) does NOT entail content-vocabulary coupling.

### Sibling-discipline reference audit

Executed at Critique. Zero file-path references to sibling-discipline specs or protocols (e.g., no `cognitive_harness/sense-making/references/sensemaking.md` pointers). Zero references to runners by name (`/MVL+`, `/MVL`). Zero references to CONCLUDE. Zero references to the materialization lifecycle.

One mention of "sense-making" at §2.3's comparison-table heading: "Eight structural properties distinguish the relevance-attribution mechanism from sense-making's anchor-extraction." This is comparative naming establishing structural distinction (LBT2 from the pure-design finding), corpus-convention-compliant per the precedent in `cognitive_harness/decompose/references/decompose.md` ("Decomposition is not: ... Sensemaking — sensemaking converts ambiguity → understanding; decomposition converts complexity → tractable pieces ... sensemaking is prerequisite"). The disciplines-self-contained principle (per the project's auto-memory) prohibits OUTBOUND SPEC-FILE-PATH POINTERS or DEPENDENCIES; it does not prohibit COMPARATIVE NAMING for structural-distinction purposes. The surfacing spec follows the corpus convention.

## Inherited Commitments Re-test

This inquiry synthesizes two prior findings (the pure-design + the output-correction). Per CONCLUDE's enforcement, each inherited commitment is either RE-TESTED with cited evidence OR flagged as INHERITED-WITHOUT-RE-TEST with a reason.

Total inherited commitments: **29** (16 from pure-design D1-D16 + 13 from output-correction RD1-RD13). The RE-TEST evidence for each RE-TESTED commitment is the spec text at its expected location (verified at Critique via the convention-compliance + MEANING-fidelity grep checks).

### RE-TESTED commitments (25)

| # | Commitment (short) | Spec location | Re-test status |
|---|---|---|---|
| D1 | Discipline name "surfacing" | Title + §1.4 vocab + throughout | **RE-TESTED — PASS.** Title uses "Surfacing"; vocab table includes it. |
| D2 | Mechanism name "relevance-attribution" + 8 distinctions | §2.3 | **RE-TESTED — PASS.** Mechanism named; structural classification stated; 8-property comparison table present. |
| D3 | 4-level relevance vocabulary | §1.4 + §5.4 + §5.5 | **RE-TESTED — PASS.** Vocab table includes "relevance tag" at 4 levels (core/sub/side/umbrella); §5.4 carries per-trace-entry tags; §5.5 derives per-region aggregate. |
| D4 | 3-phase structural shape + sub-phase | §3.1 + §3.2 | **RE-TESTED — PASS.** §3.1 diagram shows Reception → Traversal → Assembly; §3.2 commits sub-phase with gating predicate. |
| D5 | 6 Traversal components | §2.1 | **RE-TESTED — PASS.** Table with 6 components + role descriptions. |
| D6 | 8 load-bearing primitives + 3 deliberately absent | §2.4 | **RE-TESTED — PASS.** Table with 8 primitives + role per primitive + 3-row absent table with intrinsic reasons. |
| D7 | Purposive character (intrinsic) | §1.1 + §3.3 | **RE-TESTED — PASS.** §1.1 names purposive as intrinsic property; §3.3 Reception receives purpose. |
| D8 | Asymmetric-failure principle | §4.4 | **RE-TESTED — PASS.** Principle stated; operational form (territory-bounded + uncertainty-includes) committed. |
| D9 | LAYER 1 / LAYER 2 framework | §4.1 + §4.2 + §4.3 | **RE-TESTED + EXTENDED — PASS.** Framework intro at §4.1; §4.2 LAYER 1 includes 4 prior modes + 3 new (per RD13) = 7 total; §4.3 LAYER 2 includes 3 modes unchanged. |
| D10 | Calibration trajectory + signals | §4.6 | **RE-TESTED — PASS.** 3-stage trajectory (bootstrap → early → mature); 5 primary signals + 2 secondary; signal-split per RD10. |
| D11 | Re-invocation as parameterized variation | §3.6 | **RE-TESTED — PASS.** Parameter rename per RD5 (prior-artifact + optional prior-workspace + refined-sub-purpose); runner authority explicit. |
| D13 | Core taxonomy placement | §1.5 | **RE-TESTED — PASS.** §1.5 names placement = Core; references `docs/discipline_taxonomy.md`. |
| D14 | 8-item intrinsic NOT-list | §1.3 | **RE-TESTED — PASS.** Table with 8 entries + per-entry "Intrinsic ground" column grounded in operational features. |
| RD1 | Dual output | §5.1 | **RE-TESTED — PASS.** §5.1 names workspace + thin artifact as dual. |
| RD2 | Two artifact sub-sections (Trace + Summary) | §5.4 + §5.5 | **RE-TESTED — PASS.** §5.4 Traversal Trace schema; §5.5 State Summary schema (derived). |
| RD3 | Workspace operational definition | §5.2 | **RE-TESTED — PASS.** §5.2 defines workspace as LLM in-context + explicit scope tags + HYBRID substrate + observability + persistence. |
| RD4 | Tag granularity at three levels | §1.4 + §5.4 + §5.5 | **RE-TESTED — PASS.** Per-item (workspace) tags via the relevance-attribution mechanism's operational step in §2.3; per-trace-entry (artifact PRIMARY) in §5.4; per-region aggregate (artifact DERIVED) in §5.5. |
| RD5 | prior-workspace OPTIONAL + runner authority | §3.6 | **RE-TESTED — PASS.** §3.6 explicitly states optional prior-workspace + runner is session-continuity authority. |
| RD6 | CONCLUDE NOT in spec | (grep verification) | **RE-TESTED — PASS.** grep on "CONCLUDE" = 0 matches. |
| RD7 | Workspace-overload frontier-signal PRIMARY | §4.2 (mode 5) + §4.5 | **RE-TESTED — PASS.** §4.2 mode 5 has PRIMARY (frontier-signal) + SECONDARY (sampling future) split; §4.5 commits the trigger default. |
| RD8 | Concept-names list flat with metadata | §5.5 | **RE-TESTED — PASS.** §5.5 concept-names row with `{name, type ∈ {vocabulary, structural-reference, coined-term}, provenance, gloss}` schema. |
| RD9 | workspace-populated field dual ownership | §5.5 | **RE-TESTED — PASS.** §5.5 row explicitly states discipline INITIALIZES + runner MAINTAINS. |
| RD10 | Calibration signal split (workspace-level + artifact-level) | §4.6 | **RE-TESTED — PASS.** §4.6 signal table has "Operates at" column showing workspace/artifact split per signal. |
| RD12 | "Thin" criterion (no item content) | §5.3 | **RE-TESTED — PASS.** §5.3 explicitly states content-type criterion; size is consequence. |
| RD13 | 3 new LAYER 1 failure modes | §4.2 | **RE-TESTED — PASS.** §4.2 includes workspace overload (mode 5), artifact under-specification (mode 6), workspace-artifact desync (mode 7). |

### INHERITED-WITHOUT-RE-TEST commitments (4)

| # | Commitment | Reason |
|---|---|---|
| D12 | Original output specification (relevance-tagged inventory with full labeling content) | **INHERITED-WITHOUT-RE-TEST.** Superseded by RD1+RD2 in the output-correction finding. The surfacing spec implements RD1+RD2 (dual output + two artifact sub-sections); the original D12 commitment is inherited-because-replaced, not re-tested at the spec level. The spec deliberately does NOT implement D12; it implements its replacement. |
| D15 | LBT1 ("relevance" structurally defensible at inquiry-purpose level) | **INHERITED-WITHOUT-RE-TEST.** Verdict-level commitment from the pure-design finding's Sensemaking phase. The surfacing spec USES "relevance" as the discipline's tag concept (per D3) but does not re-derive LBT1's verdict. The verdict's structural defensibility is a Sensemaking-level test; the spec inherits the outcome. |
| D16 | LBT2 ("sensemaking-LIKE-but-NOT-sensemaking" structurally defensible on 8 grounds) | **INHERITED-WITHOUT-RE-TEST.** Verdict-level commitment from the pure-design finding's Sensemaking phase. The surfacing spec includes the 8-property comparison table at §2.3 (per D2's RE-TEST) but does not re-derive LBT2's verdict. The verdict's structural defensibility is a Sensemaking-level test; the spec inherits the outcome. |
| RD11 | Inherited Commitments pre-classification (from the output-correction finding's own re-test) | **INHERITED-WITHOUT-RE-TEST.** Meta-level commitment recording the prior inquiry's own RE-TEST outcomes. The surfacing spec does not include this content; it is an inquiry-meta record, not spec content. |

### Synthesis

**Counts:** 25 RE-TESTED (all PASS via Critique grep verification + section-presence checks) + 4 INHERITED-WITHOUT-RE-TEST (each with explicit reason). Total: 29 commitments accounted for.

The 4 INHERITED-WITHOUT-RE-TEST entries use the intentional-friction format from CONCLUDE's protocol — each requires an explicit reason (not silent inheritance). The reasons document why each is not re-tested at the spec-text level (D12 superseded; D15+D16 verdict-level; RD11 meta-level).

## Next Actions

### MUST

- **What:** Copy the spec text from `surfacing_spec.md` (in this inquiry's `docarchive/` after CONCLUDE) to a chosen production path.
  - **Who:** The user.
  - **Gate:** Observable — the user decides to deploy surfacing as a callable discipline. Suggested production path: `cognitive_harness/surfacing/references/surfacing.md` (matching corpus convention).
  - **Why:** The spec text is ready; deployment requires a production path the user picks (the rename/coexist-with-current-/explore decision is the user's per-prior-finding's open question).

### COULD

- **What:** Write a `SKILL.md` wrapper at `cognitive_harness/surfacing/SKILL.md` referencing the spec at `references/surfacing.md`.
  - **Who:** A future small materialization run, OR the user directly (the SKILL.md wrapper is a thin file following the corpus pattern; can be written by hand).
  - **Gate:** Observable — when the user wants surfacing to be a callable skill via the project's skill-install machinery.
  - **Why:** SKILL.md is the loader; without it, the spec is a runtime reference but not an invokable skill.
  - **Depends-on:** MUST item "Copy the spec text to a production path." This COULD is GATED — do not act until the MUST resolves.

- **What:** Decide whether to rename current `/explore` to `/surfacing`, or have them coexist as separate skills, or migrate over time.
  - **Who:** The user.
  - **Gate:** Observable — after the surfacing spec is in production and the user has compared it against current `/explore` in practice.
  - **Why:** This decision was deferred at the prior MEANING-layer findings; it remains user-discretion. The surfacing spec's existence does not force the decision; both options remain viable.
  - **Depends-on:** MUST item "Copy the spec text to a production path." This COULD is GATED — do not act until the MUST resolves.

- **What:** Run a downstream PROCESS inquiry tightening the 6 inline PROCESS commitments based on operating data.
  - **Who:** A future `/MVL+` inquiry with PROCESS Layer Commitment.
  - **Gate:** Condition-bound — when surfacing has been invoked in roughly 10-20 inquiries and refinement-trigger empirical conditions have been observed (per each commitment's refinement-trigger).
  - **Why:** The current spec's inline defaults make it runnable now; empirical operation may refine the defaults. A future PROCESS inquiry adjudicates.
  - **Depends-on:** MUST item "Copy the spec text to a production path." This COULD is GATED — do not act until the MUST resolves AND empirical operating data accumulates.

### DEFERRED

- **What:** Optionally rephrase the sense-making mention in §2.3 to generic terminology ("cross-item interpretive operations") if a stricter disciplines-self-contained interpretation is preferred.
  - **Gate:** Observable — the user opts for stricter principle interpretation; OR a corpus-wide consistency pass on disciplines-self-contained tightens the convention.
  - **Why if revived:** The current comparative naming is corpus-convention-compliant (per decompose.md precedent) but a stricter reading would prefer generic terminology. Not blocking; optional refinement.

- **What:** Specify the broader pattern — a methodology for STRUCTURAL operationalization of any cognitive discipline's MEANING-layer commitments.
  - **Gate:** Condition-bound — when another cognitive discipline goes through the same MEANING-then-STRUCTURAL inquiry chain.
  - **Why if revived:** This inquiry's path (MEANING findings → STRUCTURAL spec-text production with corpus-convention + inheritance handling + anti-coupling) might be generalizable. A future inquiry could test.

## Reasoning

### Why the explore.md-style 5 numbered sections over alternatives

The exploration identified 3 candidate section structures: Candidate A (explore.md-style: 5 numbered top-level sections + sub-sections); Candidate B (sense-making-style: unnumbered sections); Candidate C (decompose-style: mixed). Candidate A was preferred at Sensemaking based on structural-fit with surfacing's 29-commitment content scale. Surfacing has more sub-sections per top-level section than sense-making or decompose; numbered hierarchy enables precise cross-reference (§5.4 vs §5.5; §3.4's component ordering referenced by Execute Step 3). The alternative patterns (unnumbered; mixed) would lose this addressability.

### Why the 6 inline PROCESS commitments

The spec is STRUCTURAL primary (the artifact's shape) but cannot be runnable without certain PROCESS-level decisions: the runner needs to know when each Traversal component fires, when Boundary-discovery sub-phase activates, when to stop iterating, when to emit frontier-signal, how the relevance-attribution mechanism operates per item, when Output-shaping captures tags. Each commitment carries a default (making the spec runnable now at the bootstrap project state) + a refinement-trigger (naming the empirical condition for future PROCESS-level refinement). This is the right scope balance — STRUCTURAL primary + minimum operational PROCESS commitments + deferral of fine-grain semantics to a future PROCESS inquiry.

### What survived (the 6 piece-level drafts from Innovation + the composite spec)

All 6 pieces (P1 Identity / P2 Components / P3 Process Model / P4 Quality / P5 Output / P6 Execute) survived Critique on 12 dimensions. The composite spec survived as the assembled deliverable. No KILL. No REFINE-requiring-Innovation-rerun. One inline Critique-stage micro-fix (Output-shaping marker convention) applied; spec at 422 lines.

### CONTRARIAN-RETHINK Inversions rejected

Two Inversions explicitly tested + rejected at Innovation:

1. **P1: "Omit the NOT-list because the intrinsic-identity statement is sufficient"** — REJECTED. The NOT-list is a corpus convention serving downstream consumers + future spec authors who don't have inquiry context; intrinsic-identity defense alone leaves ambiguity. Domain Transfer (importing from API design — explicit "this endpoint does not support X" lists prevent misuse) confirmed the pattern.

2. **P6: "Use prose Execute section instead of 6 numbered steps"** — REJECTED on corpus convention + LLM-operational-anchors + checkpointing grounds. Every existing discipline spec uses numbered steps in Execute; LLMs perform better with explicit step labels; checkpointing requires step addressability.

### Convention-following defensibility

Following existing-disciplines convention serves operational consistency (corpus readers expect the section pattern; deviation requires justification). The convention is GENERIC — it accommodates surfacing's content cleanly without forcing the spec into an unnatural shape. LBT1 at Sensemaking confirmed convention-following as structurally defensible at HIGH confidence.

### Operational sufficiency

LBT2 at Sensemaking confirmed operational sufficiency at MEDIUM-HIGH confidence (the spec is runnable with the 6 inline PROCESS defaults; future PROCESS inquiry may refine). The MEDIUM-HIGH (not HIGH) confidence reflects that some operational specifics may emerge during real use — the refinement-triggers per inline commitment are the explicit handles for that future refinement.

### Anti-coupling preservation

The spec follows existing-disciplines convention at the spec-anatomy level (loading-note, numbered sections, refinement-note format, cross-reference format, Execute section) — but does NOT inherit current `/explore`'s content vocabulary. The grep verification at Critique confirmed zero matches on 11 forbidden vocabulary entries. The surfacing spec stands on its own terms with its own lexicon (workspace, artifact, traversal, relevance-attribution, Trace, Summary).

## Open Questions

### Monitoring

- **Will the 6 inline PROCESS defaults survive empirical operation?** Observable after surfacing has been invoked in roughly 10-20 inquiries. Each commitment's refinement-trigger names the empirical condition that would warrant revision. If any trigger fires, a downstream PROCESS inquiry adjudicates.

- **Will the workspace-overload trigger fire frequently enough in practice to be useful, or will it under-fire (allowing saturation)?** Observable in inquiries with large territories. Per RD7 from the output-correction finding, the trigger is the primary mitigation; effectiveness needs empirical validation.

- **Will the disciplines-self-contained principle's strict reading vs the corpus-convention-compliant comparative-naming reading converge or diverge over time?** Observable as the corpus evolves. The current spec uses corpus-convention-compliant naming (§2.3's sense-making mention); a future corpus-wide tightening might prefer stricter generic terminology.

### Blocked

- **The user-discretion decisions** (rename / coexist / migrate; production path; SKILL.md wrapper; install timing) are blocked on the user's choice. None of these block the spec text itself.

- **A future PROCESS inquiry's refinement of the 6 inline commitments** is blocked on empirical operating data accumulating.

### Research Frontiers

- **Broader pattern: STRUCTURAL operationalization methodology** for any cognitive discipline. This inquiry's path (MEANING → STRUCTURAL with corpus-convention + inheritance handling + anti-coupling + grep verification) might be generalizable. A future inquiry could test.

- **The relationship between corpus-convention-following and discipline-innovation** — when does following convention become over-constraining? Currently, surfacing's convention-following is defensible per LBT1; a future cognitive discipline might surface a content structure that doesn't fit the existing convention, surfacing this as a research direction.

- **Calibration trajectory empirical progression** — surfacing's calibration trajectory (bootstrap → early → mature per the prior findings' D10 + RD10) is preserved unchanged in this spec. The actual rate of progression depends on operating data. A future calibration buildout inquiry would track + refine.

### Refinement Triggers

- **Re-open the section structure choice** (Candidate A vs B vs C) if a future cognitive discipline's content STRUCTURE is incompatible with explore.md-style numbered sections. Observable: if a downstream surfacing-related inquiry surfaces a content gap not addressable within Sections 1-5.

- **Re-open the 6 inline PROCESS commitment defaults** if a downstream PROCESS inquiry surfaces empirical evidence warranting tightening. Per each commitment's refinement-trigger.

- **Re-open the sense-making mention in §2.3** if a stricter disciplines-self-contained corpus-wide consistency pass tightens the convention. Optional refinement; not blocking currently.

- **Re-open the spec size budget** if future spec additions (new Step Refinements; expanded failure modes) push the spec past 500 lines. Per `docs/discipline_design_history/for_explore.md`'s bloat-reframe.

## Source Input

<details>
<summary>Raw user input for this inquiry</summary>

```text
/MVL+

Recommendation: yes, run a STRUCTURAL inquiry next. That inquiry produces the actual surfacing.md spec text — taking the MEANING     
  commitments as input, looking at how other disciplines' runtime specs are organized (e.g.,                                           
  cognitive_harness/sense-making/references/sensemaking.md, cognitive_harness/decompose/references/decompose.md), and committing the   
  section structure + schemas + Execute section.                                                                                       
                                                            
  The STRUCTURAL inquiry will probably surface PROCESS-level questions (component ordering, thresholds)

lets do this
```

</details>
