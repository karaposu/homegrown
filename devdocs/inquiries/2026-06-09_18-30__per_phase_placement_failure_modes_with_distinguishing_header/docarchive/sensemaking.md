# Sensemaking — per_phase_placement_failure_modes_with_distinguishing_header

## User Input

```text
[branch from _branch.md + surfacing.md — 35 items; adjudicate per-phase vs Hybrid; resolve 5 ambiguities; produce ONE concrete recommendation]
```

---

## SV1 — Baseline Understanding

The user challenged the prior framework's catalog → Hybrid recommendation, arguing per-phase placement is the correct way for failure modes. Surfacing produced both sides' cases fairly: per-phase wins on locality (especially for an LLM iterating phase-by-phase during invocation); Hybrid wins on catalog-scan. The key surfaced insight: the `/td-critique` spec already uses per-phase placement for refinement notes. The likely answer is a refined recommendation that preserves the user's per-phase intuition while addressing catalog-scan loss via a thin overview.

---

## Phase 1 — Anchors

### Constraints

- **C1** The prior framework can be REFINED (carve out a content-type) without being overturned wholesale.
- **C2** LLM-consumption is load-bearing (inherited commitment).
- **C3** Cross-spec consistency: same content-type uses same pattern across disciplines.
- **C4** Backward compatibility with the existing refinement-note pattern (currently working).

### Key Insights

- **K1 — The spec already uses per-phase placement for refinement notes.** This is the load-bearing structural insight. The user's intuition is structural pattern-recognition: refinement notes and failure modes are both phase-affined; they should share placement strategy.
- **K2 — Refinement notes and failure modes are STRUCTURALLY SIMILAR** as phase-affined operational guidance. Both fire at specific phases; both have "what to recognize + what to do." 
- **K3 — But they differ in OPERATION MODE.** Refinement notes are positive checks the practitioner RUNS (an active action). Failure modes are patterns the practitioner WATCHES FOR (a monitoring state). Action-vs-monitoring is the structural sub-distinction.
- **K4 — 7 of 8 failure modes in `/td-critique` have clear single-phase affinity** (per surfacing Region 2 item 7). The data supports per-phase placement empirically.
- **K5 — #7 Self-Reference Collapse is the cross-cutting exception.** Per-phase placement must handle it as a special case.
- **K6 — Most sister disciplines (`/sense-making`, `/innovate`, `/decompose`) have phase-affined failure modes too.** Per-phase placement generalizes across the cognitive-harness. `/surfacing` LAYER 2 cross-cutting modes need the same special-case carve-out as `#7`.
- **K7 — The prior framework treated failure modes as PURE CATALOG content** (analogous to a glossary of terms). This was a content-type mis-classification: failure modes are NOT pure catalog; they are phase-affined operational guidance.
- **K8 — Catalog-scan need is real but secondary** for phase-affined content. Practitioners and LLMs spend most of their time AT a phase; catalog-scan is occasional. A thin overview suffices.

### Structural Points

- **S1 — Content-type refinement: introduce "phase-affined operational guidance" as a distinct content-type.** Failure modes + refinement notes both fall under it.
- **S2 — Within phase-affined guidance, two sub-types: positive checks (refinement notes) and pattern-watch-for (failure modes).** Distinguishable via italic prefix wording.
- **S3 — Cross-cutting modes belong in a separate end-section.** Not at any single phase.
- **S4 — Thin §4 overview preserves catalog-scan.** A 4-column table (# / Name / Fires at / Inverse-of) pointing to per-phase locations; no per-entry detail at §4.

### Foundational Principles

- **F1 — Co-locate guidance with the phase where it applies.** Locality-where-it-matters principle.
- **F2 — Pattern consistency across structurally-similar content-types.** Refinement notes and failure modes share placement strategy.
- **F3 — Acknowledge the special case explicitly.** Cross-cutting modes get their own home; don't force them into a phase.

### Meaning-Nodes

- **M1 — Phase-affined operational guidance** (new content-type)
- **M2 — Positive-check sub-type** (refinement notes)
- **M3 — Pattern-watch sub-type** (failure modes)
- **M4 — Cross-cutting failure modes** (special case end-section)
- **M5 — Thin catalog overview** (catalog-scan substitute)
- **M6 — Italicized prefix pattern** (visual distinguisher)

### SV2 — Anchor-Informed Understanding

The user's intuition is structurally correct: failure modes are phase-affined operational guidance, structurally similar to refinement notes which the spec already places per-phase. The prior framework's catalog → Hybrid recommendation mis-classified failure modes as pure catalog; this inquiry refines the framework with a new content-type. The catalog-scan concern (real but secondary) is addressed via a thin §4 overview. Cross-cutting modes (#7) get a separate end-section. The framework's general catalog → Hybrid rule still applies to non-phase-affined catalogs.

---

## Phase 2 — Perspectives

### Practitioner-at-phase perspective

A practitioner running `/td-critique` Phase 0 wants Phase-0-relevant guidance THERE: the validate-dimensions step + Project-specific risk + Frame-premise test + Purpose-fitness + Substance-vs-Label + the Phase-0-firing failure modes (#1 Wrong Dimensions, #4 Dim Blindness, #8 Axis Absence). Scrolling to §4 breaks the practitioner's local context. **Strongly favors per-phase placement.**

### Practitioner-learning perspective

A new practitioner reading the spec top-to-bottom learns each phase WITH its checks AND failure modes co-located. The conceptual map builds progressively. **Acceptable for learning mode.** The thin §4 overview still serves the "show me all failure modes" question for advanced learners building the catalog map.

### LLM-consumption perspective

When the LLM applies `/td-critique`, it iterates through phases in order. At each phase, the LLM reads phase body + refinement notes + (under per-phase) failure modes. The LLM doesn't need to jump to §4 mid-invocation. **Strong per-phase win for LLM consumption** — locality of related items maximized at the phase the LLM is currently processing.

### Cross-spec consistency perspective

`/sense-making`, `/innovate`, `/decompose` all have phase-affined failure modes (per surfacing Region 5). If per-phase wins for `/td-critique`, the cross-spec rule says other disciplines should follow. The `/surfacing` LAYER 2 cross-cutting modes get the cross-cutting-section carve-out (analogous to `#7` in `/td-critique`). **Generalizes cleanly.**

### Refinement-note unification perspective

Failure modes and refinement notes both appear at phases as operational guidance. Using the same placement pattern (per-phase) maximizes structural coherence. The sub-distinction (positive check vs pattern-watch) goes in the italicized prefix:

- Refinement notes: `*Refinement note (applies at Phase X):*` + `**Check name.**`
- Failure modes: `*Failure mode (recognizable at Phase X):*` + `**Mode name.**`

Same structural shape; different prefix wording. **Maximum coherence.**

### Frame-exit completeness perspective

Are project-wide referents excluded? Cross-cutting modes — covered with end-section carve-out. Vocabulary/glossary terms (not phase-affined) — still served by the prior framework's Inline + glossary recommendation; no conflict. Summary tables — preserved as catalog-scan substitutes. No frame-exit issues. ✓

### Definitional / Internal-Consistency perspective

Does the refined approach contradict any existing /td-critique commitment? Cross-check:
- Linear deep sections for phase process → preserved ✓
- Refinement notes inline at phase → preserved + extended to failure modes ✓
- §4 Failure Modes section → THINNED to overview table (still exists; no longer detail) ✓
- §6 Summary table → unchanged ✓

**No contradiction.**

### SV3 — Multi-Perspective Understanding

All six perspectives applied; all converge on per-phase placement + thin §4 overview + cross-cutting end-section + refinement-note-mirror prefix. The user's intuition is structurally vindicated; the prior framework's catalog-scan concern is addressed via thin overview; the cross-cutting concern is addressed via end-section. The refinement-note unification perspective adds the structurally cleanest header pattern (V5/H5).

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Variant choice (V1-V5)

**Counter:** V1 Pure per-phase (no §4) — maximum locality; trust that catalog-scan can be served by external means (file search).

**Why counter fails:** catalog-scan is a real use mode (especially for new practitioners building the conceptual map). External search is operationally fragile. A thin §4 overview costs <20 lines; the dual-locality benefit is worth it.

**Confidence:** HIGH.

**Resolution:** **V3 hybrid — per-phase placement + thin §4 overview table.** Failure modes appear inline at each phase as italicized-prefix blocks; §4 becomes a 4-column overview table only.

### Ambiguity 2: Header choice (H1-H5)

**Counter:** H1 (user's exact proposal) — `**Failure modes preventable at this phase:**` is direct and clear.

**Why counter fails:** H1 introduces a NEW header style not currently in the spec. H5 reuses the EXISTING refinement-note prefix pattern verbatim (italicized + parenthetical + bold name). Pattern unification beats introducing new styling.

**Confidence:** HIGH.

**Resolution:** **H5 — italicized per-block prefix.** Format: `*Failure mode (recognizable at Phase X):*` + blank + `**Mode name.**` + body (Recognition + Prevention) + closing cross-reference paragraph. Mirrors refinement-note pattern exactly; distinguishes via "Failure mode" vs "Refinement note" word.

### Ambiguity 3: Cross-cutting mode handling

**Counter:** Place #7 Self-Reference Collapse at Phase 4 (Coverage + Convergence Assessment) since self-reference is most visible at convergence.

**Why counter fails:** #7 fires during ANY phase where critique-on-critique is happening. Placing it at one specific phase mis-frames it as phase-affined when it isn't.

**Confidence:** HIGH.

**Resolution:** **Separate `## Cross-cutting failure modes` section** placed after Phase 4 (before §6 Summary). Uses the same prefix pattern: `*Failure mode (cross-cutting; applies across phases):*` + `**Self-Reference Collapse.**` + body.

### Ambiguity 4: Catalog-scan handling

**Counter:** Use the §6 Summary table's existing "Failure modes" row as the catalog substitute; eliminate §4 entirely.

**Why counter fails:** §6 Summary lists names + count; it doesn't give "Fires at" or "Inverse-of" which are the structurally useful catalog-scan columns. A dedicated thin §4 overview better serves this purpose.

**Confidence:** HIGH.

**Resolution:** **§4 retained but THINNED to overview-only.** 4-column table: # / Name / Fires at / Inverse-of. Each row links to the per-phase location ("see Phase X" in the Fires at column). One additional row for #7 → "Cross-cutting" linking to the end-section.

### Ambiguity 5: Framework refinement

**Counter:** No framework refinement needed; per-phase wins via the framework's existing picker rule ("process content with multiple parallel branches → augment with overview table").

**Why counter fails:** the picker rule was about PROCESS content augmentation. Failure modes aren't process content; they're guidance about process content. They deserve their own content-type recognition, not picker-rule shoehorning.

**Confidence:** HIGH.

**Resolution:** **REFINE the prior framework.** Add new content-type **"phase-affined operational guidance"** with recommended pattern: **per-phase placement + thin overview table at central section + cross-cutting end-section**. The general catalog → Hybrid recommendation still holds for non-phase-affined catalogs (e.g., the Innovation discipline's 7 mechanisms which are NOT phase-affined). Refinement notes also fall under this new content-type, validating the existing per-phase placement they already use.

---

### SV4 — Clarified Understanding

The resolved structural answer:

**Pattern recommendation for `/td-critique` §4 Failure Modes:**

1. **Per-phase placement** of each phase-affined failure mode using the refinement-note prefix pattern: `*Failure mode (recognizable at Phase X):*` + `**Mode name.**` + body + cross-reference.
2. **Thin §4 overview table** (# / Name / Fires at / Inverse-of) preserving catalog-scan.
3. **`## Cross-cutting failure modes` end-section** for `#7 Self-Reference Collapse`.
4. **§6 Summary table** unchanged.

**Per-phase distribution (concrete):**
- **Phase 0 Dimension Construction:** add failure-mode blocks for #1 Wrong Dimensions, #4 Dimension Blindness, #8 Axis Absence.
- **Phase 1 Landscape Construction:** no failure modes apply directly.
- **Phase 2 Adversarial Evaluation:** add #2 Rubber-Stamping, #3 Nitpicking.
- **Phase 3 Verdict + Constructive Output:** no failure modes apply directly.
- **Phase 4 Coverage + Convergence Assessment:** add #5 False Convergence, #6 Evaluation Drift.
- **Cross-cutting section:** #7 Self-Reference Collapse.

**Framework refinement:** add new content-type "phase-affined operational guidance" with the above pattern. Refinement notes and failure modes both qualify.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

- New content-type: phase-affined operational guidance.
- Recommended pattern: per-phase placement + thin overview + cross-cutting end-section.
- Header pattern: italicized prefix + bold name (mirrors refinement-note).
- Cross-cutting mode placement: separate end-section after Phase 4.
- §4 retained but thinned to overview-only.
- Framework refined (not contradicted) with new content-type carve-out.

### Eliminated

- V1 Pure per-phase without §4 (catalog-scan loss not justified).
- V2 User's exact proposal alone (catalog-scan loss).
- V4 End-glossary only (§4 is the natural home for the overview).
- H1/H2/H4 headers (rejected in favor of H5 refinement-note mirror).
- Forcing all catalogs to use Hybrid (failure modes are phase-affined operational guidance, not pure catalog).
- Cross-cutting modes placed at a specific phase.

### Viable runners (for Innovation to detail)

1. **Per-phase failure-mode block template** (italicized prefix + bold name + body + cross-reference).
2. **Thin §4 overview table** (4-column with per-phase links).
3. **Cross-cutting end-section** (#7 only currently).
4. **Framework refinement** (new content-type carve-out).
5. **Cross-spec extension plan** (apply same pattern to `/sense-making`, `/innovate`, `/decompose`, `/surfacing`).

---

## Phase 5 — Conceptual Stabilization

### Accommodation trigger check

Did new perspectives destabilize? SV1 → SV2 (anchors revealed refinement-note unification) → SV3 (6 perspectives all converged) → SV4 (5 ambiguities resolved HIGH) → SV5 (constrained design).

The model SETTLED. No accommodation trigger fires.

### Self-Reference Blindness check

This inquiry adjudicates spec-structure recommendations against the SAME spec we just edited. Mitigation:
- Anchored in concrete patterns (refinement-note pattern already in spec; cross-spec generalization signals; LLM-iteration reasoning).
- Explicit re-test of prior framework's commitments (catalog-scan concern; cross-cutting concern).
- Honest acknowledgment that per-phase placement was Runner #5 in the prior framework — not invented here.

Acceptable residual.

### Status Quo Bias check

Did the analysis defend the prior framework because it's documented? Review:
- The analysis REFINES the prior framework (carves out a new content-type).
- The user's challenge is RESPECTED, not dismissed.
- The recommendation involves SUBSTANTIAL change (relocate failure-mode detail from §4 to per-phase).

Not status-quo-defensive.

### SV6 — Stabilized Model

**The recommendation:**

> For `/td-critique`'s failure modes (and by extension, similar phase-affined failure modes in other cognitive-harness disciplines), use **per-phase placement** with the refinement-note prefix pattern (`*Failure mode (recognizable at Phase X):*` + `**Mode name.**` + body), preserve a **thin §4 overview table** (# / Name / Fires at / Inverse-of) for catalog-scan, and place cross-cutting modes in a separate **`## Cross-cutting failure modes` end-section** before §6 Summary.
>
> Refine the prior framework with a new content-type **"phase-affined operational guidance"** which includes both refinement notes and failure modes. The general catalog → Hybrid recommendation still holds for non-phase-affined catalogs.
>
> The user's intuition was structurally correct; the prior framework mis-classified failure modes as pure catalog content. The refinement makes the framework more precise without contradicting its general catalog rule.

**Differences from SV1:**

| | SV1 | SV6 |
|---|---|---|
| Recommendation source | One of V1-V5 + H1-H5 | V3 + H5 (refined hybrid) |
| Catalog-scan | Open | Thin §4 overview |
| Cross-cutting mode | Open | Separate end-section |
| Framework | Possibly overturned | Refined with content-type carve-out |
| Pattern unification | Open | Refinement-note prefix mirror |

### Telemetry

- **Perspective saturation:** 7 perspectives applied; all converged. PASSING.
- **Ambiguity resolution ratio:** 5/5 resolved HIGH confidence.
- **SV delta:** SUBSTANTIAL — from "open adjudication" to "specific concrete recommendation with framework refinement."
- **Anchor diversity:** 4 constraints + 8 key insights + 4 structural points + 3 principles + 6 meaning-nodes. Multi-type, multi-perspective.

### Self-Assessment

**PROCEED.** SV6 stabilized; 5 ambiguities resolved HIGH; all 7 perspectives converged; no accommodation trigger; status quo bias not active; self-reference adequately mitigated. Downstream Decomposition can partition the recommendation into pieces for Innovation to detail.
