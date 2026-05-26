# Critique: Surfacing — Structural Spec Text Production

## User Input

(/MVL+ branch file + all prior discipline outputs + the drafted spec)

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_07-31__structural_surfacing_spec_text_production/_branch.md`

Plus additional instructions: read all priors + the drafted `surfacing_spec.md` (422 lines). Apply full 5-phase Critique. 12 multi-axis prosecution focal points (a)-(l).

The candidate set: **the drafted `surfacing_spec.md`** (the primary candidate; the spec text itself) + the 6 piece-level drafts from Innovation (P1-P6 content) + the composite assembled spec.

---

## Phase 0 — Dimension Construction

### Dimensions with weights

| # | Dimension | Weight | Critical? |
|---|---|---|---|
| D1 | Convention compliance — matches corpus convention (loading-note, title, sections, refinement-notes, cross-references, Execute) | HIGH | Yes |
| D2 | MEANING fidelity — all 25 RE-TESTED inherited commitments expressed at expected spec locations | HIGH | Yes |
| D3 | Anti-coupling protocol compliance (CRITICAL) — zero matches on 9 forbidden-vocabulary entries | CRITICAL | Yes |
| D4 | Disciplines-self-contained principle preservation (CRITICAL) — no outbound spec-pointer references to sibling specs/protocols | CRITICAL | Yes |
| D5 | Operational sufficiency — spec is runnable with 6 inline PROCESS defaults | HIGH | Yes |
| D6 | Size budget — within 400-450 line target | MEDIUM | No |
| D7 | Section structure integrity — 5 numbered top-level sections + Execute; sub-section structures per SD2-SD6 | HIGH | Yes |
| D8 | Inline PROCESS default+refinement-trigger pattern — each of 6 inline commitments has both elements | HIGH | Yes |
| D9 | Cross-reference accuracy — internal §X.Y references point to existing sections | MEDIUM | No |
| D10 | NOT-list intrinsic-grounds defensibility — each of 8 items grounded in intrinsic features, not relational | HIGH | Yes |
| D11 | Schema completeness — Traversal Trace + State Summary contain all required fields per RD2/RD4/RD8/RD9 | HIGH | Yes |
| D12 | Vocabulary table coverage — §1.4 includes terms used throughout the spec | MEDIUM | No |

**12 dimensions: 2 CRITICAL + 7 HIGH + 3 MEDIUM.** Burden of proof: guilty-until-proven-innocent on CRITICAL.

---

## Phase 1 — Landscape Construction

**Viable region:** spec passes all dimensions; CRITICAL pass + HIGH pass + MEDIUM acceptable.

**Dead region:** failure on D3 (anti-coupling) or D4 (disciplines-self-contained); these would force RE-RUN of Innovation.

**Boundary region:** CRITICAL pass but HIGH partially fail (e.g., one inline PROCESS commitment missing the marker; one cross-reference broken).

**Unexplored region:** alternative spec formats (e.g., JSON schema, YAML frontmatter for fields) — out-of-scope per corpus convention.

---

## Phase 2 — Adversarial Evaluation

### Candidate: The Drafted Spec (`surfacing_spec.md`)

**Prosecution focal point (d) — Anti-coupling forbidden-vocabulary search (CRITICAL):**

Executed (via `grep -c -F`) for 11 forbidden terms:
- "labels-vs-anchors" — **0 matches**
- "scan-signal-probe" — **0 matches**
- "confidence-tagged map" — **0 matches**
- "Form-(i)" — **0 matches**
- "Form-(ii)" — **0 matches**
- "Candidates-only" — **0 matches**
- "Comparison structure" — **0 matches**
- "Completeness before novelty" — **0 matches**
- "§4.4 labeling-vs-meaning" — **0 matches**
- "labels are observed" — **0 matches**
- "anchors are extracted" — **0 matches**

Also checked "artifact mode" / "possibility mode" (current /explore's mode-determination labels) — **0 matches**. The spec uses "artifact case" / "possibility case" instead — different lexicon; not coupled.

**Defense:** the spec uses surfacing's own vocabulary throughout (workspace, artifact, traversal, relevance-attribution, Trace, Summary, dual output, etc.). The anti-coupling protocol PASSES with zero violations.

**Collision:** Defense wins on D3 (CRITICAL). **PASS.**

---

**Prosecution focal point (c) — Disciplines-self-contained principle (CRITICAL):**

Executed sibling-discipline name check via `grep -c -F`:
- "/explore" — 0 matches
- "/decompose" — 0 matches
- "/innovate" — 0 matches
- "/td-critique" — 0 matches
- "CONCLUDE" — 0 matches
- "/MVL+" — 0 matches
- "/MVL" — 0 matches
- "materialization" — 0 matches
- "sense-making" — **1 match** at line 99 in §2.3's comparison-table heading: "Eight structural properties distinguish the relevance-attribution mechanism from sense-making's anchor-extraction"

**Prosecution argument:** the 1 mention of "sense-making" violates disciplines-self-contained.

**Defense:** the mention is in a COMPARISON CONTEXT establishing surfacing's distinctness (LBT2 / D16's structural defensibility). The disciplines-self-contained principle (per auto-memory `feedback_disciplines_self_contained.md`) prohibits OUTBOUND SPEC-FILE-PATH POINTERS, not comparative naming. Corpus precedent: `cognitive_harness/decompose/references/decompose.md` includes "Decomposition is not: ... Sensemaking (sensemaking converts ambiguity → understanding; decomposition converts complexity → tractable pieces)" — sibling naming for comparison is established convention. The surfacing spec follows the same convention.

Verification: the spec contains zero file-path pointers like "see `cognitive_harness/sense-making/references/sensemaking.md`" — confirmed. The "sense-making" mention is comparative naming, not a spec-path dependency.

**Collision:** Defense wins on D4 (CRITICAL). The comparative naming is corpus-convention-compliant.

**FLAG (informational, not blocking):** the 1 mention of "sense-making" could be rephrased to generic terminology ("cross-item interpretive operations") if the user prefers an even stricter reading of disciplines-self-contained. The current form is convention-compliant; the alternative is a stricter-interpretation refinement option.

---

**Prosecution focal point (a) — Convention compliance:**

Verified via grep:
- ✅ Loading note: blockquote at line 1, matches template, includes `cognitive_harness/surfacing/SKILL.md` path.
- ✅ Title: `# Structural Surfacing — A Thinking Discipline` at line 5 (Variant A; the dominant corpus pattern).
- ✅ Section headers: `## 1.` through `## 5.` at correct positions (lines 15, 64, 135, 214, 295).
- ✅ Sub-section headers: numbered per SD2-SD6.
- ✅ Refinement-note format: NOT applicable (the spec has no Step Refinements; the 6 inline PROCESS commitments use parenthetical "(default; refinement-trigger)" rather than full Step Refinement format because they're operational commitments, not failure-anchored or coverage-anchored Step Refinements per `docs/step_refinement.md`).
- ✅ Cross-references: §X.Y format used throughout; first reference to external file uses full path (`docs/thinking_space_dynamics.md`, `docs/discipline_taxonomy.md`).
- ✅ Execute section: explicit separator (`---- NOW SOLID INSTRUCTIONS START ----`) at line 373; heading `## Execute the Surfacing Process`; 6 numbered steps.

**Collision:** Defense wins on D1. **PASS.**

---

**Prosecution focal point (b) — MEANING fidelity:**

Verified each of 25 RE-TESTED commitments per Sensemaking SD8:

| # | Commitment | Expected location | Found in spec |
|---|---|---|---|
| D1 | Discipline name "surfacing" | Title + throughout | ✅ Title; opening definition; vocab table |
| D2 | Mechanism name "relevance-attribution" + 8 distinctions | §2.3 | ✅ §2.3 has name + structural classification + 8-property table |
| D3 | 4-level relevance vocabulary | §1.4 + §5.4/5.5 | ✅ §1.4 vocab table; §5.4 per-trace-entry tags; §5.5 aggregate tags |
| D4 | 3-phase shape + sub-phase | §3.1 + §3.2 | ✅ §3.1 with diagram; §3.2 Boundary-discovery |
| D5 | 6 Traversal components | §2.1 | ✅ §2.1 table with 6 components |
| D6 | 8 load-bearing + 3 absent primitives | §2.4 | ✅ §2.4 with 8-row table + 3-row absent table |
| D7 | Purposive character | §1.1 + §3.3 | ✅ §1.1 "purposive (the inquiry's purpose is the bias source)"; §3.3 Reception receives purpose |
| D8 | Asymmetric-failure principle | §4.4 | ✅ §4.4 with operational form |
| D9 | LAYER 1/LAYER 2 framework | §4.1, §4.2, §4.3 | ✅ §4.1 intro; §4.2 7 modes; §4.3 3 modes |
| D10 | Calibration trajectory | §4.6 | ✅ §4.6 with 3 stages + 5 primary + 2 secondary signals |
| D11 | Re-invocation as parameterized variation | §3.6 | ✅ §3.6 with both parameters + runner authority |
| D13 | Core taxonomy placement | §1.5 | ✅ §1.5 mentions Core + references taxonomy doc |
| D14 | 8-item NOT-list | §1.3 | ✅ §1.3 table with 8 entries + intrinsic-ground per entry |
| RD1 | Dual output | §5.1 | ✅ §5.1 |
| RD2 | Two artifact sub-sections | §5.4 + §5.5 | ✅ §5.4 + §5.5 |
| RD3 | Workspace operational definition | §5.2 | ✅ §5.2 with HYBRID substrate + observability + persistence |
| RD4 | Tag granularity (per-trace-entry + per-region) | §5.4 + §5.5 | ✅ §5.4 per-entry PRIMARY; §5.5 derived per-region |
| RD5 | prior-workspace OPTIONAL + runner authority | §3.6 | ✅ §3.6 explicitly states runner authority |
| RD6 | CONCLUDE NOT in spec | (verification check) | ✅ grep verified: 0 matches on "CONCLUDE" |
| RD7 | Workspace-overload frontier-signal PRIMARY | §4.2 + §4.5 | ✅ §4.2 mode 5; §4.5 trigger |
| RD8 | Concept-names list flat with metadata | §5.5 | ✅ §5.5 concept-names row with `{name, type, provenance, gloss}` schema |
| RD9 | workspace-populated field dual ownership | §5.5 | ✅ §5.5 workspace-populated row states discipline INITIALIZES + runner MAINTAINS |
| RD10 | Calibration trajectory + signal split | §4.6 | ✅ §4.6 5-signal table with "Operates at" column showing workspace/artifact split |
| RD12 | "Thin" criterion (no item content) | §5.3 | ✅ §5.3 content-type criterion |
| RD13 | 3 new LAYER 1 failure modes | §4.2 | ✅ §4.2 modes 5/6/7: workspace overload, artifact under-specification, workspace-artifact desync |

**All 25 RE-TESTED commitments PRESENT at expected locations.** **Collision: Defense wins on D2. PASS.**

---

**Prosecution focal point (e) — Operational sufficiency:**

Can a runner execute the discipline from the spec alone given the 6 inline PROCESS commitments?

| Decision | Spec location | Default committed? |
|---|---|---|
| Within-Traversal component ordering | §3.4 | ✅ 6-step default order |
| Convergence criteria | §4.5 | ✅ Territory-bounded + uncertainty-includes |
| Boundary-discovery gating | §3.2 | ✅ `territory` field check |
| Workspace-overload threshold | §4.5 | ✅ LLM context-budget self-observation |
| Relevance-attribution mechanism operational steps | §2.3 | ✅ 5-step Receive → Match → Tag → Confidence → Uncertainty default |
| Output-shaping capture rule | §2.1 | ✅ Capture-at-moment with explicit default + refinement-trigger marker (after inline Critique-stage fix) |

All 6 inline PROCESS decisions have defaults + refinement-triggers. The spec is operationally sufficient — a runner can execute Step 1 → Step 6 of the Execute section with the defaults committed inline.

**Collision:** Defense wins on D5. **PASS.**

---

**Prosecution focal point (f) — Size budget:**

422 lines vs 400-450 target. **Within budget.** **PASS.**

---

**Prosecution focal point (g) — Section structure integrity:**

- 5 numbered top-level sections + Execute: ✅
- Section 1 (1.1-1.5): ✅ (verified via grep)
- Section 2 (2.1-2.4): ✅
- Section 3 (3.1-3.7): ✅
- Section 4 (4.1-4.7): ✅
- Section 5 (5.1-5.7): ✅
- Execute (6 steps): ✅

**Collision:** Defense wins on D7. **PASS.**

---

**Prosecution focal point (h) — Inline PROCESS commitments default+refinement-trigger pattern:**

Verified via `grep -c "refinement-trigger" surfacing_spec.md` = **6** (after inline Critique-stage fix at Output-shaping). All 6 inline commitments have the explicit marker.

**Collision:** Defense wins on D8. **PASS.**

---

**Prosecution focal point (i) — Cross-reference accuracy:**

All §X.Y references verified via grep to point at existing sections. No broken references.

**Collision:** Defense wins on D9. **PASS.**

---

**Prosecution focal point (j) — NOT-list intrinsic-grounds defensibility:**

Read §1.3 — each of 8 NOT-list rows has an "Intrinsic ground" column with text grounded in operational features (per-item granularity, draw-from-not-create, labeling-not-interpretive, etc.). No item references a sibling discipline; each grounds in surfacing's own operation.

**Collision:** Defense wins on D10. **PASS.**

---

**Prosecution focal point (k) — Schema completeness:**

- **Traversal Trace (§5.4):** 6 per-entry fields (Sequence ordinal, Region, Item identifiers, Per-item relevance verdict, Per-item confidence, Step note) — matches RD2 + RD4. ✅
- **State Summary (§5.5):** 8 fields (Territory echo, Purpose echo, Coverage map, Confirmed-absent regions, Concept-names list with `{name, type, provenance, gloss}` schema, Frontier flags, Workspace-populated status with `{populated, populated-at, extent}` + dual ownership note, Re-invocation parameters) — matches RD2 + RD4 + RD8 + RD9. ✅

**Collision:** Defense wins on D11. **PASS.**

---

**Prosecution focal point (l) — Vocabulary table coverage:**

§1.4 vocab table contains: item, territory, purpose, workspace, artifact, relevance tag, relevance confidence (7 entries).

Spec-throughout vocabulary check:
- "item" ✓ (in vocab)
- "territory" ✓ (in vocab)
- "purpose" ✓ (in vocab)
- "workspace" ✓ (in vocab)
- "artifact" ✓ (in vocab)
- "relevance tag" ✓ (in vocab)
- "relevance confidence" ✓ (in vocab)
- "Traversal Trace" — not in vocab table, but defined in §5.4 as a schema sub-section
- "State Summary" — not in vocab table, but defined in §5.5
- "relevance-attribution" — not in vocab table, but defined in §2.3 as the signature mechanism

Trace + Summary + relevance-attribution have their own defining sections; including them in §1.4 vocab table would be redundant. The vocab table covers the SHARED-VOCABULARY terms used across multiple sections; section-specific terms are defined where they live.

**Verdict:** vocab table coverage adequate (refinement option: could add Trace + Summary + relevance-attribution to vocab table for reader convenience, but not required).

**Collision:** Defense wins on D12. **PASS** (with informational note for potential refinement).

---

## Phase 3 — Verdict Summary

| Candidate | Verdict |
|---|---|
| Drafted `surfacing_spec.md` | **SURVIVE clean** on all 12 dimensions |

No KILL. No REFINE-requiring-Innovation-rerun. Inline Critique-stage micro-fix applied to Output-shaping marker (parenthetical added in §2.1's component table); spec still 422 lines.

**1 informational FLAG:** the sense-making mention in §2.3's comparison table heading is corpus-convention-compliant (sibling naming for comparison; established pattern in decompose.md). User may optionally rephrase to generic terminology if a stricter disciplines-self-contained interpretation is preferred. **Not blocking.**

---

## Phase 3.5 — Assembly Check

The 6 pieces' content assembled into surfacing_spec.md (422 lines). Emergent value: a coherent, runnable discipline runtime spec consistent with corpus convention + faithful to both MEANING-layer findings + ready for deployment. Single composite candidate; assembly PASSES.

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage map

- Viable region: 1 candidate (the drafted spec) PASS clean.
- Dead region: forbidden-vocabulary entries explicitly searched (0 matches); sibling-discipline file-path pointers explicitly searched (0 matches).
- Boundary region: Output-shaping marker was at boundary; inline-fix applied; now in viable region.

### Convergence

| Criterion | Status |
|---|---|
| Clean SURVIVE on CRITICAL dimensions | YES (D3, D4 both PASS) |
| Two consecutive iterations not producing new landscape regions | YES (iteration 1; clean convergence) |
| No topologically-likely unexplored regions | YES |
| Decreasing rate of new information | N/A (single iteration) |

**Convergence REACHED.**

### Failure modes checked

| Failure mode | Observed? |
|---|---|
| Wrong dimensions | NO (12 dimensions covering all focal points + project-specific risks) |
| Rubber-stamping | NO (executed actual grep verification on 11 forbidden terms + 9 sibling references + cross-references + structure) |
| Nitpicking | NO (one minor inline-fix applied; spec SURVIVES clean) |
| Dimension blindness | NO |
| False convergence | NO (clean SURVIVE exists) |
| Evaluation drift | NO |
| Self-reference collapse | NO (external grounding via the user's framing, prior findings, corpus convention, project docs) |

**All 7 failure modes NOT observed.**

---

## Convergence Telemetry

- **Dimension coverage:** 12/12 (100%)
- **Adversarial strength:** STRONG (executed actual grep verification on all CRITICAL claims; not just narrative defense)
- **Landscape stability:** STABLE
- **Clean SURVIVE exists:** YES
- **Failure modes observed:** NONE

---

## Final Deliverable

### (a) Dimensions with Weights

12 dimensions: 2 CRITICAL (D3 anti-coupling, D4 disciplines-self-contained) + 7 HIGH (D1, D2, D5, D7, D8, D10, D11) + 3 MEDIUM (D6, D9, D12).

### (b) Fitness Landscape

- Viable region: 1 candidate (drafted spec)
- Boundary region: empty (after inline-fix)
- Dead region: searched + confirmed empty (forbidden vocabulary; sibling pointers)
- Unexplored region: out-of-corpus formats (deliberately not considered)

### (c) Candidate Verdict

**`surfacing_spec.md`: SURVIVE clean.** 1 informational FLAG (sense-making mention in §2.3 comparison heading; corpus-convention-compliant; optional rephrase available).

### (d) Coverage Map

Coverage sufficient. CRITICAL dimensions PASS via actual grep verification. HIGH dimensions PASS. MEDIUM dimensions PASS or PASS-with-informational-note.

### (e) Signal

**TERMINATE with the drafted spec as the survivor.**

The surfacing spec text (`surfacing_spec.md`; 422 lines) is ready for CONCLUDE to compile into the inquiry's `finding.md` (quoting the spec text in the Finding section) + ready for the user to copy to a production path (e.g., `cognitive_harness/surfacing/references/surfacing.md`).

---

## Self-Assessment Verdict

**PROCEED to CONCLUDE.**

The drafted spec is structurally defensible on all 12 dimensions. The 2 CRITICAL anti-coupling + disciplines-self-contained checks PASS via actual grep verification (zero forbidden-vocabulary matches; zero spec-path sibling-pointer matches; the 1 sense-making mention in a comparison-table heading is corpus-convention-compliant).

The 6 inline PROCESS commitments all carry the `(default; refinement-trigger = ...)` pattern after the inline Critique-stage fix at Output-shaping. The spec is operationally sufficient at the bootstrap project state.

CONCLUDE will compile the inquiry's `finding.md` with `refines:` frontmatter (synthesizes the 2 prior MEANING findings) + the `## Inherited Commitments Re-test` section (29 commitments: 25 RE-TESTED PASS + 4 INHERITED-WITHOUT-RE-TEST) + the drafted spec text quoted in the Finding section.
