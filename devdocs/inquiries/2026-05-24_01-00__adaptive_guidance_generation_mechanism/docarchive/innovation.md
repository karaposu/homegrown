# Innovation — adaptive guidance generation mechanism

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/_branch.md`

---

## Phase 1 — Seed

**Seed:** Decomposition's 6 pieces (P1 Stage 1 mechanism; P2 Stage 2 mechanism; P3 audit substrate; P4 mode-selection; P5 FF list; P6 re-test). Production-task mode.

### Methodology-Mode Consideration

- **Inherited mode:** Standard default (balanced 4G+3F; elaborate the committed direction per piece).
- **Alternative considered:** Contrarian-rethink (Framer-weighted). What follows: would re-litigate whether M6 two-stage is the right shape; whether A1+A3 is sufficient. Sensemaking stabilized; the per-piece Inversion already provides per-piece contrarian alternatives. DEFAULT serves.
- **Decision:** DEFAULT.

### Meta-Decision-Piece Classification

| Piece | Properties fired | Meta-decision? |
|---|---|---|
| **P1** (Stage 1) | (d) per-movement-type rules; (e) intervention-shape = ADD-CONTENT | **YES** + property (v) fires |
| **P2** (Stage 2) | (d) style + budget enforcement; (e) intervention-shape = ADD-CONTENT | **YES** + property (v) fires |
| **P3** (audit) | (b) LAYER-2 detectability framing; (c) audit-substrate-as-recognition vocabulary; (d) A1+A3 rules | **YES** |
| **P4** (mode-selection) | (d) MS1+MS5 rules | **YES** |
| **P5** (FF LIST) | none | content production |
| **P6** (re-test) | (a) relationship-label = verdicts; (d) verdict taxonomy | **YES** |

5 meta-decision pieces require Piece-Level Inversion. **P1 + P2 additionally fire property (v) → Intervention-Shape-Axis Inversion required for both.**

---

## Phase 2 — Generate

### Coverage plan

| Piece | Generators | Framers | Inversion-candidate |
|---|---|---|---|
| P1 | Domain Transfer (native+cross), Absence Recognition (patch+redesign) | Constraint Manipulation (ADD+REMOVE) | Inversion (intervention-shape: ADD-CONTENT vs REORGANIZE) |
| P2 | Combination | Lens Shifting | Inversion (intervention-shape: ADD-CONTENT vs REORGANIZE = single-stage) |
| P3 | Combination | — | Inversion (content-axis: generation-time vs post-generation audit) |
| P4 | Combination | — | Inversion (content-axis: pre-Stage-1 vs post-Stage-1 mode-selection) |
| P5 | (content production) | — | — |
| P6 | Combination, Extrapolation | — | Inversion (content-axis: direction-reversal) |

Mechanism totals: Generators 4/4 (Combination ×3, Absence Recognition, Domain Transfer, Extrapolation); Framers 3/3 (Lens Shifting, Constraint Manipulation ×1 with both directions, Inversion ×5). **Full coverage.**

---

### P1 — STAGE 1 MECHANISM SPEC

#### P1-G (Generic)

> **Mechanism: Domain Transfer.** Native source — compiler lexer (deterministic token-to-type mapping table; each token has a source citation in the lexer's input stream). Cross-domain source — librarian's index card (each entry has explicit source citation for each fact).

```
STAGE 1 PROCEDURE (deterministic per-movement-type anchor identification)

For each Route in routeman's enumeration:
  1. RECEIVE: Route record (movement_type, priority, status, meta_reasoning_field) + selected mode (from P4).
  2. LOOK UP: per-movement-type rule from D1 mapping table.
  3. ITERATE sources in priority order:
       - DEEPEN     ← [W1 SURVIVE verdicts] → [W2 Key-Insights/Constraints] → [W5 meta-reasoning]
       - REFINE     ← [W1 REFINE verdicts] → [W2 Ambiguity-Collapse] → [W5]
       - PURSUE-SEED ← [W1 KILL-with-seed] → [W3 telemetry coverage gaps] → [W5]
       - INVESTIGATE-FRONTIER ← [W2 Constraints/Key-Insights] → [finding Open-Questions] → [W5]
       - REVISIT     ← [prior-cycle W1] → [W5 cross-cycle meta-reasoning]
       - OTHER types ← [W1] → [W2] → [W5]
  4. AT EACH SOURCE: search source file (e.g., critique.md, sensemaking.md) for content matching the per-type rule.
  5. IF MATCH FOUND: emit candidate anchor record {anchor_text_excerpt, source_path, source_section}.
  6. IF NO MATCH AT THIS PRIORITY: continue to next priority source.
  7. IF NO MATCH AT ANY PRIORITY (all sources exhausted):
       - Log drop-with-reason ("no resolvable anchor for Route X movement_type Y; sources tried: [list]")
       - Force Route's mode to `none` (override P4's selection) with rationale.
  8. OUTPUT: list of anchor records per Route, plus (possibly overridden) mode.
```

#### P1-F (Focused — batch-mode optimization)

> **Mechanism: Absence Recognition (redesign-level).** What's missing: a single-pass-over-cycle-output-files optimization. If multiple Routes need the same source (e.g., 10 DEEPEN Routes all reading critique.md), Stage 1 currently reads critique.md 10 times. Batch-mode reads each cycle-output file ONCE, indexes anchors by movement type, then iterates Routes querying the index.

```
BATCH-MODE OPTIMIZATION (additive to P1-G; doesn't replace)

PRE-PASS: for each cycle-output file in scan-scope:
  - Read file once.
  - Parse all anchors (SURVIVE/REFINE/KILL verdicts; Phase-1 anchors; ambiguity-collapse entries; telemetry).
  - Index anchors by {movement_type_relevance, source_path, source_section, content_excerpt}.

MAIN PASS: for each Route:
  - Look up per-movement-type rule.
  - Query the pre-built index for matching anchors.
  - Emit anchor records (faster than re-reading files per Route).

Performance: O(N + M) where N=Routes and M=cycle-output-files, vs O(N×M) without batching.
```

Trade-off: batch-mode requires holding the index in memory; for very large inquiries, may approach context limits. Worth it for typical inquiries (≤10 routes × ≤6 cycle-output files).

#### P1-additional (Absence Recognition — patch level)

> **Patch-level absence:** missing handling for Route with multiple valid movement types (rare but possible — a Route may serve both DEEPEN and INVESTIGATE-FRONTIER). The per-movement-type rule assumes one type per Route. Mitigation: apply each type's rule independently, merge anchors, deduplicate. Captured as candidate for NEW-FF-1 (Stage 1 parsing rules) at SKILL.md authoring.

#### P1-additional (Constraint Manipulation — both directions required)

> **ADD constraint:** "must complete in O(N+M) where N=Routes, M=cycle-output-files." Implication: batch-mode (P1-F) is needed; per-Route file-reading violates the constraint. **PASS — adopt P1-F.**

> **REMOVE constraint:** "remove the fallback chain — would the mechanism still work?" Implication: without fallback, any Route whose primary anchor source is absent gets `none` mode immediately. Routes for in-progress inquiries (no critique.md yet) all get `none`. Coverage drops. **REMOVE FAILS — fallback chain is load-bearing for graceful degradation.**

#### P1-C (Contrarian — Inversion intervention-shape REQUIRED per property-(v))

> **Mechanism: Inversion (intervention-shape axis).** Current shape: **ADD-CONTENT** (write new Stage 1 procedural spec). Alternative shapes:

> **Alternative shape 1: REORGANIZE-WITHOUT-ADDING.** Don't write a separate Stage 1 spec; incorporate the per-movement-type mapping into routeman's existing general file-scan spec section. One less spec section to maintain.
> Cons: couples adaptive-guidance to the general scan; harder to audit the adaptive-guidance behavior independently; the LAYER-2 mode's recognition becomes tangled with general scan failure modes.

> **Alternative shape 2: ADD-TEST.** No Stage 1 spec; add a test that verifies anchor-grounding (post-hoc audit only). Mechanism is unspecified; only the audit is.
> Cons: leaves the mechanism implicit (LLM must figure it out from the test); violates the design memo's commitment that the mechanism is specified.

> **Alternative shape 3: REMOVE (drop Stage 1).** Do everything in one LLM pass (Stage 2 only).
> Cons: loses auditability of anchor identification (the LLM may invent anchors); fails LAYER-2 detection.

> **Verdict:** ADD-CONTENT (P1-G) survives all structural tests. Alternatives fail on auditability or scope.

---

### P2 — STAGE 2 MECHANISM SPEC

#### P2-G (Generic)

> **Mechanism: Combination.** Combine "LLM template" + "style enforcement" + "budget" → standard Stage 2 spec.

```
STAGE 2 PROCEDURE (LLM-judgment refinement)

For each Route with Stage 1's anchor records + mode:
  1. RECEIVE: Route + anchor records + (possibly overridden) mode.
  2. IF mode = `none`: emit empty Guidance Pointer list (zero pointers).
  3. ELSE:
     - Compute pointer-count budget:
         `compact`=1-2; `full`=3-5; `expand-on-selection`=1 (the deferral statement).
     - Apply LLM template to each anchor (up to budget):
         "Generate one pointer in style 'VERB OBJECT' (short imperative).
          Generate one WHY in style 'bc REASON per SOURCE_PATH §SOURCE_SECTION'."
     - For `expand-on-selection`: generate ONE statement of what would be expanded
         (e.g., "Detailed guidance deferred; if selected, expand from [anchor]").
  4. IF anchor count > budget: rank anchors by priority order from D1; drop surplus
     with reason ("dropped lower-priority anchor X; budget Y allows N").
  5. OUTPUT: Guidance Pointer records {pointer_text, why_text_with_citation} per Route.
```

#### P2-F (Focused — explicit ranking step)

> **Mechanism: Lens Shifting.** Under conditions where Stage 1 produces few anchors (e.g., 1-2), ranking is trivial. Under conditions where it produces many (e.g., 5+ from W1 + W2 + W5 each contributing), Stage 2 must rank-and-drop. The ranking rule must be explicit.

```
RANKING RULE (additive to P2-G):

When Stage 1's anchors > budget for the selected mode:
  RANK by:
    (1) Source priority per D1's per-movement-type rule (primary > fallback).
    (2) Specificity (anchor citing specific section/line > anchor citing whole file).
    (3) Recency (anchor from current cycle > anchor from prior cycle, for REVISIT).
  KEEP top-N where N=budget upper bound.
  DROP rest with reason logged ("dropped anchor X: lower priority/less specific/older than retained").
```

#### P2-C (Contrarian — Inversion intervention-shape REQUIRED per property-(v))

> **Mechanism: Inversion (intervention-shape axis).** Current shape: **ADD-CONTENT** (separate Stage 2 spec). Alternative shapes:

> **Alternative shape 1: REORGANIZE-WITHOUT-ADDING (single-stage).** Combine Stage 1 + Stage 2 into one LLM pass with a single template ("For each Route, identify anchors AND generate pointers in one shot"). One spec section, not two.
> Cons: loses Stage 1's deterministic auditability — the LLM may invent anchors and not properly cite them. The LAYER-2 audit's recognition signal becomes harder to fire (the LLM may produce plausible-looking citations that don't resolve).

> **Alternative shape 2: ADD-TEST.** No Stage 2 spec; only a test enforcing style + budget. LLM must figure out the template.
> Cons: same issue as P1-C ADD-TEST; the mechanism becomes implicit.

> **Verdict:** ADD-CONTENT (P2-G) survives. Stage 1+Stage 2 separation IS the design's correctness guarantee — collapsing loses auditability.

---

### P3 — AUDIT SUBSTRATE SPEC

#### P3-G (Generic)

> **Mechanism: Combination.** A1 format + A3 enforcement + LAYER-2 detectability statement.

```
AUDIT SUBSTRATE SPEC

A1 FORMAT (WHY field's file-path-and-section citation):
  WHY text MUST contain a substring matching the pattern:
    "per <relative_path> §<section_identifier>"
  Example: "bc per devdocs/inquiries/2026-05-23_14-39__.../finding.md §2 the LAYER-2 mode
            recognition signal demands anchor-grounding"
  Parser: regex on "per " token followed by path and section marker.

A3 ENFORCEMENT (drop-with-reason at Stage 1):
  Stage 1 must produce at least one resolvable anchor per Route (or fall back through
  the chain to `none` mode). If no anchor resolves at ANY priority:
    - Log drop-reason ("Route X movement_type Y: no resolvable anchor; sources tried [list];
       degraded to mode `none`")
    - Set Route's mode to `none`.
  Stage 2 must produce WHY text containing the A1 citation. If LLM fails to embed citation:
    - Re-prompt with explicit instruction (single retry).
    - If second attempt also fails, drop the pointer with reason logged.

LAYER-2 DETECTABILITY STATEMENT:
  One audit substrate (A1+A3) covers three LAYER-2 modes:
    - Prescriptive-Without-Cycle-Context: detected via WHY text lacking parseable
      file-path reference OR reference doesn't resolve to real file content.
    - Rename-Renders-Itself-Cosmetic: detected via ≥50% of Routes having empty
      Guidance Pointers OR all WHYs lacking A1 citations across 5 consecutive invocations.
    - filler-meta-reasoning (from 18-58): detected via meta-reasoning field
      consistently failing to anchor downstream Stage 1 (high frequency of
      "W5 unresolved" drop-reasons across invocations).

DEFERRED ELEVATIONS:
  A2 (structured substructure) — if audit infrastructure later demands machine-parseable
    fields beyond regex-on-text, elevate to {anchor_type, source_path, source_section}
    sub-object in WHY field.
  A4 (type-coherence check) — if observed misalignment between pointer movement_type and
    anchor source type, add per-type expected-source check.
```

#### P3-F (Focused — A2-lite structured prefix)

> **Mechanism: Combination.** Adds compactly-structured prefix to A1 that's both human-readable and machine-parseable.

```
A2-LITE STRUCTURED PREFIX (candidate for FF-3 elevation):

WHY text format with structured prefix:
  "[critique.md §Q5] bc real-usage testing is the bottleneck per the SURVIVE verdict"
  ^^^^^^^^^^^^^^^^^^^ prefix in [brackets]
                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ human-readable continuation

Pros: parseable by simple bracket-extraction; readable; doesn't require full YAML/JSON substructure.
Cons: prefix bloat in WHY text; may conflict with existing style.

Disposition: CANDIDATE for SKILL.md authoring decision; not committed at first ship.
```

#### P3-C (Contrarian — Inversion content-axis)

> **Mechanism: Inversion.** Assumption reversed: "audit is at generation time (Stage 1's drop-with-reason)." → Reversed: "audit is after generation; a separate audit pass verifies anchor-grounding."

> **Alternative shape:** post-generation audit pass. Mechanism generates pointers freely; separate audit step runs after, rejects unanchored ones, regenerates if needed.

> **Cons:** silent generation of unanchored pointers wastes work; preventive (Stage 1 drop) is more efficient. Post-generation may complement generation-time but doesn't replace.

> **Verdict:** DEFER. Preserve as audit-pass enhancement for SKILL.md authoring if generation-time enforcement proves insufficient in practice.

---

### P4 — MODE-SELECTION SPEC

#### P4-G (Generic)

> **Mechanism: Combination.** MS1 verbatim + MS5 override.

```
MODE-SELECTION SPEC

MS1 (design memo convention, cited verbatim):
  - HIGH-priority / risky / blocked / near-action routes → `compact` or `full`
  - MEDIUM open/deferred routes → `compact`
  - LOW or deferred-for-memory routes → `none` or `compact`
  - selected route → `full` or `expand-on-selection`

MS5 (per-mode override on multi-recalibration):
  When a Route's `meta_reasoning_revision_history` (per 24-00 persistence schema) shows
  ≥2 prior recalibrations:
    - Override MS1's mode-selection to `expand-on-selection`.
    - Rationale: multi-recalibrated routes warrant deferred guidance (context still
      shifting; commit guidance at selection moment when latest context available).

DEFERRED ELEVATIONS (preserved as NEW-FF-4 candidates):
  MS2 (complexity-of-derivation axis) — escalate to `expand-on-selection` for routes
    whose anchors require deep cross-cycle context.
  MS3 (autonomy-level axis from 24-40 autonomy register) — at L0, more conservative
    mode-selection; at L2+, more aggressive.
  MS4 (selection-probability axis) — Routes the Selector is likely to pick get `full`;
    others get `compact`.
```

#### P4-F (Focused — calibratable MS5 threshold)

> **Mechanism: Combination (refinement).** The MS5 threshold "≥2 prior recalibrations" is an arbitrary heuristic. Label as calibratable.

```
MS5 threshold note: "≥2 prior recalibrations" is the default heuristic for first ship.
The threshold is CALIBRATABLE — if practice shows the override fires too often or too
rarely, the threshold is adjusted at SKILL.md authoring or in a follow-up inquiry.
```

#### P4-C (Contrarian — Inversion content-axis)

> **Mechanism: Inversion.** Assumption reversed: "mode-selection precedes Stage 1." → Reversed: "mode-selection FOLLOWS Stage 1 (decide mode based on anchor count found)."

> **Alternative shape:** Stage 1 identifies anchors; mode is set based on anchor count:
> - 0 anchors → `none` mode
> - 1-2 anchors → `compact`
> - 3-5 anchors → `full`
> - ≥6 anchors → `expand-on-selection`

> **Pros:** mode is data-driven; reflects actual anchor availability.
> **Cons:** violates design memo's mode-allocation convention which is priority/state-based; the convention is the inherited commitment that this inquiry preserves; reordering ignores it.

> **Verdict:** KILL with seed. Seed: "anchor-count-based mode-selection may be useful as a SECONDARY signal (override MS1 when anchor count grossly mismatches selected mode), but it shouldn't be primary. Capture as NEW-FF-4 sub-candidate."

---

### P5 — FF LIST

#### P5-G (Generic — content production)

```
FF LIST (4 new + 2 deferred)

NEW-FF-1 — Stage 1 parsing rules.
  Scope: exact per-movement-type parsing of critique.md verdicts, sensemaking.md
  anchor sections, meta-reasoning field.
  Consumer: SKILL.md authoring inquiry.
  Revival: when SKILL.md is being written.

NEW-FF-2 — Stage 2 LLM template.
  Scope: the exact prompt structure for LLM-judgment refinement.
  Consumer: SKILL.md authoring inquiry.
  Revival: same as NEW-FF-1.

NEW-FF-3 — A2 structured substructure elevation (and A4 type-coherence check).
  Scope: machine-parseable WHY-field substructure.
  Consumer: SKILL.md authoring OR audit-infrastructure follow-up inquiry.
  Revival: when audit infrastructure demands machine-parseable input OR observed
  pointer-type/anchor-type misalignment in practice.

NEW-FF-4 — MS3 autonomy-axis mode-selection extension (and MS2 complexity-axis, MS4
  selection-probability-axis, anchor-count-secondary-signal from P4-C seed).
  Scope: mode-selection extensions beyond MS1+MS5.
  Consumer: follow-up inquiry on mode-selection refinement.
  Revival: when mode-selection extension becomes load-bearing in practice.

FF-7 (carried forward from previous frontiers) — /intuit M4 hunch projection.
  Revival: when /intuit Phase β ships.

FF-8 (carried forward) — /reflect W4 integration shape.
  Revival: when /reflect coupling spec lands.
```

---

### P6 — INHERITED COMMITMENTS RE-TEST

#### P6-G (Generic — verdict table)

> **Mechanism: Combination.** Verdict taxonomy + evidence + downstream-impact.

```
| Prior | Commitment | Verdict | Reason / Impact |
|---|---|---|---|
| 2026-05-23_11-30 | Input-dependency anchor | PRESERVED | Stage 1 reads cycle-output as input; same structural framing |
| 2026-05-23_14-39 | Adaptive-guidance feature definition | PRESERVED + IMPLEMENTED | Design memo defines feature; this inquiry's M6 implements it |
| 2026-05-23_14-39 | Mode definitions + budgets + mode-allocation convention | PRESERVED VERBATIM | Inherited unchanged |
| 2026-05-23_14-39 | LAYER-2 Prescriptive-Without-Cycle-Context mode | PRESERVED + MADE DETECTABLE | A1+A3 substrate makes recognition operational |
| 2026-05-23_14-39 | LAYER-2 Rename-Renders-Itself-Cosmetic mode | PRESERVED + MADE DETECTABLE | Same substrate covers it |
| 2026-05-23_15-20 | Q3 (adaptive-guidance generation mechanism) | RESOLVED-WITH-DESIGN | This inquiry resolves Q3 |
| 2026-05-23_16-31 | Isolated session + file-scanning architecture | PRESERVED | All WHY-anchor sources are file-content; Stage 1 reads files via existing scan |
| 2026-05-23_18-58 | Per-Route `why_this_might_be_important` meta-reasoning field | PRESERVED + INTEGRATED | Field is W5 in multi-source priority chain |
| 2026-05-23_18-58 | LAYER-2 filler-meta-reasoning mode | PRESERVED + MADE DETECTABLE | A1+A3 substrate covers third mode (one substrate, three modes) |
| 2026-05-23_18-58 | LLM-operational-characteristics-as-design-input principle | PRESERVED + APPLIED | User-language alignment in WHY format (conjunctive "bc" shorthand from design memo) preserves the principle; N=4 evidence after this inquiry's application |
| 2026-05-24_00-20 | Hybrid placement-by-scope + persistence model | PRESERVED + INTEGRATED | Meta-reasoning field's revision_history (from 24-00's schema extension) feeds MS5 override; no new sidecar; mechanism operates within existing file-scan |
| 2026-05-24_00-40 | Autonomy register design | PRESERVED + INTEGRATED | MS3 (autonomy-axis mode-selection) deferred to NEW-FF-4; register substrate is available when needed |
| canonical /navigation | Route-card schema (Guidance Mode + Guidance Pointers) | PRESERVED VERBATIM | Schema inherited unchanged |
```

#### P6-C (Contrarian — Inversion direction-reversal)

> **Mechanism: Inversion.** Assumption reversed: "test priors against adoption." → Reversed: "test adoption against priors — does adoption SURVIVE each prior?"

```
COUNTER-DIRECTION: does the adoption SURVIVE each prior?

| Prior commitment | Does adoption SURVIVE? | Note |
|---|---|---|
| Input-dependency (11-30) | SURVIVES | Stage 1 cycle-output reading is consumer-shaped |
| Adaptive-guidance feature (14-39) | DERIVED-FROM | The feature DEFINES the mechanism's target; mechanism is shaped to fulfill the feature |
| LAYER-2 Prescriptive-Without-Cycle-Context (14-39) | DERIVED-FROM | The mode's recognition signal IS the design constraint; A1+A3 designed to satisfy it |
| Mode-allocation convention (14-39) | CONSTRAINS | MS1 preserved verbatim because mode-allocation is design-memo commitment |
| File-scanning architecture (16-31) | CONSTRAINS | All WHY-anchors must be file-mediated; eliminated in-context-pass options |
| Meta-reasoning field (18-58) | CONSTRAINS | W5 source exists because of 18-58; M3-as-standalone killed because of W5's role |
| LLM-operational-design principle (18-58) | DERIVED-FROM | User-language alignment (conjunctive WHY format) applies principle |
```

> **What this reveals:** the design is HEAVILY SHAPED BY priors. The mechanism shape (M6), the WHY-anchor sources (W5 inclusion), the audit substrate (A1+A3), and the mode-selection (MS1 verbatim) are all FORCED MOVES from prior commitments. Recording the derivation prevents future inquiries from treating these as arbitrary preferences.

> **Disposition:** RE-TEST TRIGGER. P6-C's insight implies P3's audit-substrate spec and P4's mode-selection should carry derivation notes:
> - P3's A1+A3 substrate is DERIVED FROM LAYER-2 Prescriptive-Without-Cycle-Context mode's recognition signal — the substrate IS the mode's operational form.
> - P4's MS1 verbatim is CONSTRAINED BY design memo's mode-allocation convention.

---

## Inherited Frame Audit (between Phase 2 and Phase 3)

### Seed-level central assumption

"M6 two-stage anchor-then-refine + multi-source per-movement-type priority + A1+A3 audit substrate + MS1+MS5 mode-selection + graceful fallback chain is the right design."

**Challenge scan:**
- **P1-C** (REORGANIZE / ADD-TEST / REMOVE): challenges intervention-shape (whether ADD-CONTENT is right). ✓
- **P2-C** (single-stage REORGANIZE): challenges Stage 1+Stage 2 separation. ✓
- **P3-C** (post-generation audit): challenges generation-time enforcement. ✓
- **P4-C** (mode-selection follows Stage 1): challenges mode-selection ordering. ✓
- **P6-C** (direction-reversal): doesn't challenge central assumption; reveals derivation.

**Verdict:** Central assumption EXPLICITLY CHALLENGED at multiple piece levels via P1-C, P2-C, P3-C, P4-C. Audit does NOT fire. ✓

### Piece-level commitments

| Piece | Load-bearing commitment | Challenged? |
|---|---|---|
| P1 (d/e) | ADD-CONTENT shape + per-movement-type rules + fallback | P1-C challenges shape; P1-additional REMOVE challenges fallback |
| P2 (d/e) | ADD-CONTENT shape + style + budget enforcement | P2-C challenges separation from Stage 1 |
| P3 (b/c/d) | A1+A3 generation-time enforcement | P3-C challenges with post-generation alternative |
| P4 (d) | MS1+MS5 with pre-Stage-1 ordering | P4-C challenges ordering |
| P6 (a/d) | PRESERVED/EXTENDED verdict taxonomy | P6-C direction-reverses |

All meta-decision piece commitments explicitly challenged. **Audit does NOT fire at piece level.**

---

## Phase 3 — Test

### 5-test cycle per candidate

| Candidate | Novelty | Survival | Fertility | Action | Independence | Disposition |
|---|---|---|---|---|---|---|
| P1-G | LOW (standard) | HIGH (grounded in Sensemaking) | HIGH (enables SKILL.md) | HIGH | YES | **ACTIONABLE** |
| P1-F (batch-mode optimization) | MED | HIGH (perf-preserving correctness) | MED | MED | YES | **ACTIONABLE as optimization note** |
| P1-additional patch (multi-type Route) | LOW | MED (edge case) | LOW | MED | YES | **DEFERRED to NEW-FF-1** |
| P1-additional ADD constraint (O(N+M)) | LOW | HIGH | LOW | HIGH | YES | **ACTIONABLE as verification note (supports P1-F)** |
| P1-additional REMOVE constraint (drop fallback) | LOW | LOW (loses graceful degradation) | LOW | LOW | NO | **REJECTED** |
| P1-C (REORGANIZE / ADD-TEST / REMOVE) | MED | LOW (loses auditability or scope) | LOW | LOW | NO | **KILL with seed** |
| P2-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P2-F (explicit ranking) | MED | HIGH | HIGH | HIGH | YES | **ACTIONABLE as companion** |
| P2-C (single-stage) | MED | LOW (loses Stage 1 auditability) | LOW | MED | NO | **KILL with seed** |
| P3-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P3-F (A2-lite structured prefix) | MED | HIGH | MED | HIGH | YES | **DEFERRED to NEW-FF-3** (preserved as candidate for SKILL.md authoring) |
| P3-C (post-generation audit) | MED | MED | MED | MED | NO | **DEFERRED with revival trigger** (if generation-time proves insufficient) |
| P4-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P4-F (calibratable threshold) | LOW | HIGH | LOW | HIGH | YES | **ACTIONABLE as refinement** |
| P4-C (mode follows Stage 1) | MED | LOW (violates design memo convention) | LOW | MED | NO | **KILL with seed** (preserved for NEW-FF-4 as secondary signal) |
| P5-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P6-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P6-C (direction-reversal) | HIGH | HIGH | HIGH | MED | NO | **RE-TEST TRIGGER** → adds derivation notes to P3 + P4 |

### Test summary

- 18 candidates produced.
- 9 ACTIONABLE (including 3 companions + 1 verification note).
- 1 ACTIONABLE-as-refinement (P4-F).
- 3 DEFERRED (P1-additional patch → NEW-FF-1; P3-F → NEW-FF-3; P3-C with revival trigger).
- 4 KILL with seeds (P1-C variants; P2-C; P4-C).
- 1 REJECTED (P1-additional REMOVE constraint).
- 1 RE-TEST TRIGGER (P6-C → derivation notes).

### Artifact-grounding (6th conditional test)

Categorical claims about project state requiring artifact check:
- P3-G's claim "critique.md has Phase 3 verdicts" — verified via this session's own critique.md outputs.
- P3-G's claim "sensemaking.md has Phase 1 anchors and Phase 3 ambiguity-collapse entries" — verified via this session's own sensemaking outputs.
- P1-G's claim "meta_reasoning_revision_history field per 24-00's schema" — verified via 24-00 inquiry's finding (FF-2 named the field as a candidate extension).

All categorical claims verified. **PASS.**

### Axis coverage check

Orthogonal axes addressed:
1. **Content axis:** P1-G/P2-G/P3-G/P4-G + companions.
2. **Shape axis (intervention-shape):** P1-C + P2-C (REORGANIZE alternatives).
3. **Direction axis:** P6-C direction-reversal.
4. **Time axis (when audit fires):** P3-C generation-time vs post-generation.
5. **Order axis (mode-selection ordering):** P4-C.
6. **Performance axis (efficiency):** P1-F batch-mode.

6 axes covered. **PASS.**

### Mechanism Independence shared-input check

P1-G + P2-G + P3-G + P4-G all derive from Sensemaking SV6 — same upstream. Convergence may appear SPURIOUS. Counter: P1-C, P2-C, P3-C, P4-C explicitly challenge SV6's commitments; convergence isn't blind. Shared-input is legitimate per Sensemaking's job. PASS with note.

---

## Assembly Check

Combine ACTIONABLE candidates:

**Emergent finding-shape:**

```
1. **Opening reframing** — Q3 RESOLVED-WITH-DESIGN. The design is DERIVED FROM priors
   (per P6-C insight) — M6's shape forced by LAYER-2 mode's recognition signal;
   A1+A3 substrate forced by mode-detection requirement; MS1 verbatim forced by
   design memo's mode-allocation convention.

2. **Stage 1 mechanism (P1-G + P1-F batch-mode + P1-additional ADD constraint note)** —
   procedural steps + per-movement-type mapping + multi-source priority + fallback chain
   + drop-with-reason + batch-mode optimization for O(N+M) performance.

3. **Stage 2 mechanism (P2-G + P2-F ranking)** — LLM-judgment refinement + style enforcement
   + per-mode budget + explicit ranking-and-drop rule when anchors exceed budget.

4. **Audit substrate (P3-G + derivation note from P6-C)** — A1 format + A3 enforcement
   + LAYER-2 detectability statement (one substrate, three modes). Derivation note:
   "A1+A3 is DERIVED FROM LAYER-2 Prescriptive-Without-Cycle-Context mode's recognition
   signal — the substrate IS the mode's operational form."

5. **Mode-selection (P4-G + P4-F calibratable threshold + derivation note from P6-C)** —
   MS1 verbatim + MS5 override with calibratable threshold. Derivation note:
   "MS1 verbatim is CONSTRAINED BY design memo's mode-allocation convention; this
   inquiry preserves rather than redesigns."

6. **FF list (P5-G)** — 4 new + 2 deferred FFs.

7. **Inherited commitments re-test (P6-G + P6-C bidirectional note)** — verdict table
   + priors-shape-adoption bidirectional note.

8. **Deferred candidates section** — P3-F A2-lite prefix; P3-C post-generation audit;
   P4-C anchor-count secondary signal; P1-C/P2-C alternative shapes; P1-additional
   multi-type Route patch.
```

**Cross-piece coherence:** opening reframing coheres with derivation notes (P3, P4) and re-test (P6-G + P6-C). The KILL-with-seeds preserve falsifiability without cluttering the main spec.

**Emergent insight:** the inquiry's PRIMARY CONTRIBUTION is making the LAYER-2 mode's recognition signal OPERATIONAL — the design's correctness is GUARANTEED BY CONSTRUCTION (A1+A3 enforcement) rather than checked POST-HOC. The mechanism + audit are unified.

---

## Telemetry

### Mechanism Coverage

- **Generators applied:** 4/4 (Combination ×3, Absence Recognition, Domain Transfer, Extrapolation).
- **Framers applied:** 3/3 (Lens Shifting, Constraint Manipulation both-directions, Inversion ×5).
- **Convergence:** YES — 3+ mechanisms converge on "M6 two-stage with A1+A3 enforced at Stage 1" (Combination → spec; Domain Transfer → compiler-lexer analogue; Absence Recognition → batch-mode + multi-type edge; Inversion → KILL seeds confirm no superior alternative).
- **Survivors tested:** 18/18 (5-test cycle on all).
- **Failure modes observed:** none of the 6.
- **Inherited Frame Audit:** central assumption + 5 piece-level commitments all challenged; audit does NOT fire.
- **RE-TEST TRIGGER:** 1 firing (P6-C → derivation notes to P3 + P4).

### Production-task additional telemetry

| Piece | Mechanism log | Meta-decision classification | Piece-level Inversion compliance |
|---|---|---|---|
| P1 | [Domain Transfer:native+cross, Absence Recognition:patch+redesign, Constraint Manipulation:ADD+REMOVE, Inversion:intervention-shape] | meta-decision (d, e); property (v) fires | satisfied (P1-C names REORGANIZE/ADD-TEST/REMOVE as alternatives on intervention-shape axis) |
| P2 | [Combination, Lens Shifting, Inversion:intervention-shape] | meta-decision (d, e); property (v) fires | satisfied (P2-C names single-stage REORGANIZE on intervention-shape axis) |
| P3 | [Combination, Inversion:content-axis] | meta-decision (b, c, d) | satisfied (P3-C is Inversion-candidate) |
| P4 | [Combination, Inversion:content-axis] | meta-decision (d) | satisfied (P4-C is Inversion-candidate) |
| P5 | [content production] | content-production | n/a |
| P6 | [Combination, Extrapolation, Inversion:content-axis] | meta-decision (a, d) | satisfied (P6-C direction-reversal) |

**Verdict: PROCEED.**
- Sufficient coverage (4G + 3F).
- Convergence YES.
- All survivors tested.
- No failure modes.
- All 5 meta-decision pieces satisfy Piece-Level Inversion.
- P1 + P2 both satisfy Intervention-Shape-Axis Inversion (REORGANIZE alternatives explicitly named with what-follows).

---

## Handoff to Critique

Critique's task: evaluate the assembled finding shape against:
1. Whether M6 two-stage is correctly preserved as the central design (P1-C and P2-C KILLs justified by auditability).
2. Whether the batch-mode optimization (P1-F) is correctly scoped (not over-claiming perf benefits).
3. Whether A1+A3 is sufficient at first ship without A2-lite prefix (P3-F deferred correctly).
4. Whether MS5's "≥2 recalibrations" threshold is correctly labeled calibratable (P4-F).
5. Whether the derivation notes (P3, P4 per P6-C) are appropriately specific or risk overclaim.
6. Whether the LAYER-2 detectability statement (P3-G) correctly maps one substrate to three modes without over-extending.
7. Whether NEW-FF-1 through NEW-FF-4 are correctly scoped vs collapsed into fewer flags.
