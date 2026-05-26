# Critique — adaptive guidance generation mechanism

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/_branch.md`

---

## Phase 0 — Dimension Construction

### Derived dimensions

| # | Dimension | What it asks | Source | Weight |
|---|---|---|---|---|
| **D1** | **Resolves Q3** | Does the design make adaptive-guidance generation IMPLEMENTABLE? | Q3 framing + design memo F-prescr feature | **CRITICAL** |
| **D2** | **LAYER-2 detectability** | Does the design make Prescriptive-Without-Cycle-Context + Rename-Renders-Itself-Cosmetic + filler-meta-reasoning all DETECTABLE? | Sensemaking KI1+KI2 | **CRITICAL** |
| **D3** | **File-scanning architecture compatibility** | Bound to file-read; no in-context-pass | C1 + C7 (16-31) | **CRITICAL** (project-specific) |
| **D4** | **Prior-commitment preservation** | All 7 priors + canonical /navigation preserved | Synthesis Trigger | **CRITICAL** |
| **D5** | **Mechanism auditability** | Stage 1 deterministic; Stage 2 constrained by Stage 1 | KI6 + FP4 | **CRITICAL** (project-specific) |
| **D6** | **User-language alignment** | Design respects LLM-operational-design principle | FP2 (N=4 after this inquiry) | HIGH |
| **D7** | **Style fidelity** | Pointer style matches design memo (short imperative + conjunctive WHY) | C6 | HIGH |
| **D8** | **Graceful degradation** | Mechanism handles partial cycle-output without halting | Ambiguity 5 resolution | HIGH |
| **D9** | **Schema scope-fit** | Not over-specified; not under-specified | Goal's "what would fail" | HIGH |
| **D10** | **Routeman feature coverage** | Mechanism handles all 16 movement types | C2 + D1 mapping | HIGH |
| **D11** | **Extension path** | Accommodates W4 (/reflect) + M4 (/intuit) when shipped | P-STRAT-2 | MED |
| **D12** | **Performance** | O(N+M) reasonable for typical inquiry size | P1-F constraint | MED |

### Dimension validation

Project-specific risk axes: D3 (file-scanning compatibility) + D5 (auditability — load-bearing for LAYER-2 modes).

Cross-reference against Sensemaking perspectives: Technical (D1, D5, D12); Human (D6, D7); Strategic (D11); Risk (D2, D8, D5); Resource (D9, D12); Definitional (D2); Frame-exit (D4, D10); Phase/Calibration (D3). All 8 perspectives map to ≥1 dimension. **Dimension blindness check: PASS.**

Discriminating-power check across 18 candidates: dimensions discriminate. **PASS.**

---

## Phase 1 — Fitness Landscape

### Viable region

HIGH on D1+D2+D3+D4+D5 (all CRITICAL); HIGH/MED-HIGH on D6-D10+D12 (all HIGH).

### Dead region

Fails ANY CRITICAL dimension that defense can't overcome.

### Boundary region

Strong on CRITICAL but weak on HIGH dimensions — REFINE verdicts.

### Unexplored region

Innovation covered 6 orthogonal axes (content, shape, direction, time, order, performance). No structurally-likely unexplored regions remain.

---

## Phase 2 — Adversarial Evaluation

### P1 group (STAGE 1 MECHANISM)

#### P1-G (standard Stage 1 spec)

**Prosecution.** Fallback chain may silently degrade Routes to `none` when cycle-output is partial (in-progress inquiries with no critique.md yet → all DEEPEN/REFINE/PURSUE-SEED Routes fall back to W5 or `none`). On a fresh inquiry, the Route Map may have many `none`-mode Routes — degrading routeman's prescriptive value. User-perspective objection: user expects guidance per Route; many `none` Routes may feel like a routeman regression.

**Defense.** Drop-with-reason makes the degradation OBSERVABLE (rationale logged per drop); user can see WHY guidance is absent. `none` mode is STRUCTURALLY CORRECT when no anchor is available — emitting unanchored pointers would fire LAYER-2 mode. The Route's other content (WHY field for why-in-map; Continuation Note) is sufficient for `none`-mode Routes.

**Collision.** Defense wins on D2 (LAYER-2 detectability) + D8 (graceful degradation with observability). The "many `none` Routes" concern is a TELEMETRY signal (FLAG, not FAIL) — frequent `none` fallback indicates the inquiry's cycle hasn't matured enough to support guidance; that's accurate.

**Verdict: SURVIVE.**

#### P1-F (batch-mode optimization)

**Prosecution.** Batch-mode adds index-building overhead per invocation; for very small inquiries (1-3 Routes × 2 cycle-output files), the index-building cost may exceed savings. The O(N+M) claim assumes N+M scales meaningfully; for very small N+M, the constant factors dominate.

**Defense.** Typical inquiry has 5-15 Routes × 4-6 cycle-output files. Batch-mode reduces O(N×M) = 30-90 reads to O(N+M) = 9-21 reads — meaningful savings. For very small inquiries, per-Route reading is acceptable (low cost either way).

**Collision.** Defense wins for typical case; the very-small-inquiry case is a degenerate optimization point. Mitigation: label P1-F as DEFAULT for typical inquiry sizes; per-Route reading acceptable when N≤3.

**Verdict: SURVIVE-REFINE.** Label batch-mode as "default for typical inquiry size (N≥4 Routes); per-Route reading acceptable for very small inquiries."

#### P1-additional patch (multi-type Route)

**Prosecution.** Edge case; may not be common enough to spec now.

**Defense.** Preserves for SKILL.md authoring as candidate; doesn't bloat first ship.

**Collision.** Defense wins as deferred.

**Verdict: DEFER to NEW-FF-1** (matches Innovation).

#### P1-additional ADD constraint (O(N+M))

**Prosecution.** Constraint may be premature (performance not yet measured in practice).

**Defense.** Supports P1-F adoption; gives a measurable target for SKILL.md authoring.

**Collision.** Defense wins.

**Verdict: SURVIVE as verification note** supporting P1-F.

#### P1-additional REMOVE (drop fallback chain)

**Prosecution.** Loses graceful degradation; D8 (HIGH) fails — any Route whose primary anchor is absent immediately gets `none` mode without trying alternatives.

**Defense.** Simpler.

**Collision.** Prosecution wins on D8.

**Verdict: REJECTED.**

#### P1-C alternatives (REORGANIZE / ADD-TEST / REMOVE)

**Prosecution.** Each fails CRITICAL dimensions:
- REORGANIZE → couples adaptive-guidance to general scan; harder to audit independently → D5 fails.
- ADD-TEST → leaves mechanism implicit; spec is incomplete → D1 fails.
- REMOVE (Stage 1 dropped, all-LLM) → loses Stage 1 auditability → D5 fails.

**Defense.** Simpler spec / smaller surface area.

**Collision.** Prosecution wins on D5 CRITICAL for all three.

**Verdict: KILL with seeds.**

### P2 group (STAGE 2 MECHANISM)

#### P2-G (standard Stage 2 spec)

**Prosecution.** LLM-judgment in Stage 2 may produce style drift over many invocations (LLM variance). Format consistency depends on the template's strictness. Specification-gap probe: the exact template (NEW-FF-2) is deferred; first ship leaves the template shape to SKILL.md authoring.

**Defense.** Style enforcement + budget enforcement + A1 citation requirement provide constraints; if LLM drifts on style, A3 audit catches via A1 parsing failure. The deferred template shape is correctly scoped (NEW-FF-2).

**Collision.** Defense wins on the audit-catches-drift argument.

**Verdict: SURVIVE.**

#### P2-F (explicit ranking step)

**Prosecution.** Ranking rule (priority → specificity → recency) is heuristic; may not match all cases.

**Defense.** Explicit ranking is better than implicit; rule is calibratable per practice.

**Collision.** Defense wins.

**Verdict: SURVIVE-REFINE.** Label ranking rule as "first-ship default; calibratable per practice (the rule may be tuned at SKILL.md authoring if observed ranking decisions don't match user expectations)."

#### P2-C (single-stage REORGANIZE)

**Prosecution.** Loses Stage 1 auditability → D5 CRITICAL fails. The LLM may invent anchors that don't resolve.

**Defense.** Simpler; one spec section.

**Collision.** Prosecution wins on D5 CRITICAL.

**Verdict: KILL with seed.**

### P3 group (AUDIT SUBSTRATE)

#### P3-G (A1+A3 + LAYER-2 detectability)

**Prosecution.** Regex-based A1 parsing assumes consistent file-path format; LLM may produce variations ("per X" vs "from X" vs "see X").

**Defense.** Style enforcement (P2-G) keeps format consistent ("per <path> §<section>" specified); A3 catches non-conforming. If LLM uses different verb, the next-invocation audit flags + re-prompts.

**Collision.** Defense wins.

**Verdict: SURVIVE.**

#### P3-F (A2-lite structured prefix)

**Prosecution.** Prefix bloat in WHY text; design-memo style (conjunctive "bc...") doesn't use brackets. Introduces NEW style element conflicting with inherited style commitment (D7 fails).

**Defense.** Parseable without YAML/JSON; more reliable than regex.

**Collision.** Prosecution wins on D7 (style fidelity) at first ship; the trade-off may flip if audit infrastructure needs machine-parseability later.

**Verdict: DEFER to NEW-FF-3** (matches Innovation).

#### P3-C (post-generation audit)

**Prosecution.** Silent generation of unanchored pointers wastes work; preventive (Stage 1 drop) is more efficient.

**Defense.** Complements generation-time; could catch what slips through.

**Collision.** Defense wins as COMPLEMENT but not REPLACE.

**Verdict: DEFER with revival trigger** (if generation-time enforcement proves insufficient in practice).

### P4 group (MODE-SELECTION)

#### P4-G (MS1+MS5)

**Prosecution.** MS1+MS5 may be insufficient if autonomy register shows L2+; mode-selection at higher autonomy may differ (per FF-4's autonomy-axis candidate).

**Defense.** MS3 deferred to NEW-FF-4 when needed; MS1 is calibration-agnostic per design memo (works at any autonomy level).

**Collision.** Defense wins; MS1+MS5 is first-ship-appropriate.

**Verdict: SURVIVE.**

#### P4-F (calibratable threshold)

**Prosecution.** Labels threshold as calibratable but doesn't specify the calibration locus or trigger.

**Defense.** Explicit "calibratable" label IS the commitment (don't fix at arbitrary value); calibration locus is SKILL.md authoring or follow-up inquiry.

**Collision.** Defense wins with REFINE — name the calibration locus explicitly.

**Verdict: SURVIVE-REFINE.** Explicitly state: "calibration locus = SKILL.md authoring; revival trigger = observed override-rate (if MS5 fires too often or too rarely, recalibrate threshold)."

#### P4-C (mode follows Stage 1; data-driven mode)

**Prosecution.** Violates design memo's mode-allocation convention → D4 (prior-commitment preservation) fails.

**Defense.** Data-driven; reflects actual anchor availability.

**Collision.** Prosecution wins on D4 CRITICAL.

**Verdict: KILL with seed** (preserved as NEW-FF-4 secondary signal candidate — anchor-count could OVERRIDE MS1's selection when count grossly mismatches mode budget, but not REPLACE the primary rule).

### P5 (FF LIST)

**Verdict: SURVIVE.** D4 satisfied via FF preservation.

### P6 group (INHERITED COMMITMENTS RE-TEST)

#### P6-G (verdict table)

**Prosecution.** None substantive — D4 (prior-commitment preservation) covered.

**Defense.** All 7 priors + canonical /navigation enumerated with verdicts; no commitment silently dropped.

**Collision.** Defense wins.

**Verdict: SURVIVE.**

#### P6-C (direction-reversal: priors-shape-adoption)

**Prosecution.** "DERIVED-FROM" / "CONSTRAINS" verdicts may overstate. Not every choice was forced — some had degrees of freedom that priors merely informed.

**Defense.** The insight is structurally grounded (mechanism shape FORCED by LAYER-2 mode; W5 inclusion FORCED by 18-58; MS1 verbatim FORCED by design memo). Recording the derivation prevents future inquiries from treating choices as arbitrary preferences.

**Collision.** Prosecution has a point — calibrate language. "DERIVED-FROM" is appropriate where the prior directly created the design choice; "CONSTRAINED-BY" where the prior bounded but didn't determine; "INFORMED-BY" where the prior contributed but didn't force.

**Verdict: SURVIVE-REFINE.** Apply more precise language per prior:
- DERIVED-FROM: 14-39 (adaptive-guidance feature); 14-39 (LAYER-2 mode); 18-58 (LLM-operational-design principle).
- CONSTRAINED-BY: 14-39 (mode-allocation convention); 16-31 (file-scanning); 18-58 (meta-reasoning field).
- INFORMED-BY: 24-00 (persistence model); 24-40 (autonomy register).

---

## Phase 3 — Verdict Summary

| Candidate | Verdict | Action |
|---|---|---|
| P1-G | SURVIVE | Incorporate; the `none`-fallback observability is a feature, not a bug. |
| P1-F (batch-mode) | SURVIVE-REFINE | Default for N≥4 Routes; per-Route OK for very small inquiries. |
| P1-additional patch (multi-type) | DEFER to NEW-FF-1 | SKILL.md authoring handles. |
| P1-additional ADD (O(N+M)) | SURVIVE | Verification note supporting P1-F. |
| P1-additional REMOVE (drop fallback) | REJECTED | Loses graceful degradation. |
| P1-C (REORGANIZE / ADD-TEST / REMOVE) | KILL with seeds | All fail D5 CRITICAL. |
| P2-G | SURVIVE | Audit catches drift. |
| P2-F (ranking step) | SURVIVE-REFINE | Label rule as calibratable. |
| P2-C (single-stage) | KILL with seed | D5 fail. |
| P3-G | SURVIVE | A1+A3 substrate makes LAYER-2 detectable. |
| P3-F (A2-lite prefix) | DEFER to NEW-FF-3 | Conflicts with style commitment at first ship. |
| P3-C (post-generation audit) | DEFER with revival trigger | Complement, not replace. |
| P4-G | SURVIVE | MS1+MS5 calibration-agnostic. |
| P4-F (calibratable threshold) | SURVIVE-REFINE | Name calibration locus + revival trigger. |
| P4-C (mode follows Stage 1) | KILL with seed | D4 fail; preserved as secondary signal candidate. |
| P5-G | SURVIVE | FFs scoped. |
| P6-G | SURVIVE | D4 satisfied. |
| P6-C (direction-reversal) | SURVIVE-REFINE | Calibrate language per prior (DERIVED-FROM/CONSTRAINED-BY/INFORMED-BY). |

**Totals:**
- SURVIVE / SURVIVE-REFINE: 11
- KILL with seeds: 4
- DEFER: 3
- REJECTED: 1

---

## Phase 3.5 — Assembly Check

Combine SURVIVING + REFINED candidates:

```
FINDING SHAPE:

1. **Opening reframing** — Q3 RESOLVED-WITH-DESIGN. The design is DERIVED FROM and
   CONSTRAINED BY priors (per P6-C softened insight); the mechanism's correctness is
   GUARANTEED BY CONSTRUCTION (A1+A3 enforcement) rather than checked post-hoc.

2. **Stage 1 mechanism (P1-G + P1-F batch-mode-default note + P1-additional ADD perf-target)**:
   procedural steps + per-movement-type mapping + multi-source priority + graceful fallback +
   drop-with-reason + batch-mode for typical inquiry sizes (N≥4) with per-Route fallback for
   very small inquiries.

3. **Stage 2 mechanism (P2-G + P2-F calibratable-ranking)**:
   LLM-judgment refinement + style enforcement + per-mode budget + explicit ranking-and-drop
   rule (calibratable: priority → specificity → recency as first-ship default).

4. **Audit substrate (P3-G + derivation note from P6-C)**:
   A1 file-path-in-WHY-text + A3 generation-time drop-with-reason + LAYER-2 detectability
   statement (one substrate, three modes). Derivation note: "A1+A3 is DERIVED FROM
   LAYER-2 Prescriptive-Without-Cycle-Context mode's recognition signal — the substrate
   IS the mode's operational form."

5. **Mode-selection (P4-G + P4-F calibration-locus + derivation note from P6-C)**:
   MS1 verbatim + MS5 override with threshold ≥2 recalibrations (calibratable at
   SKILL.md authoring; revival trigger = observed override-rate mismatch).
   Derivation note: "MS1 verbatim is CONSTRAINED BY design memo's mode-allocation
   convention; this inquiry preserves rather than redesigns."

6. **FF list (P5-G)** — 4 new + 2 deferred + 3 KILL-with-seeds revival-triggered.

7. **Inherited commitments re-test (P6-G + P6-C softened)** — verdict table + softened
   bidirectional note using DERIVED-FROM / CONSTRAINED-BY / INFORMED-BY precisely.

8. **Deferred candidates section** — P3-F A2-lite prefix; P3-C post-generation audit;
   P4-C anchor-count secondary signal; P1-C/P2-C alternative shapes; P1-additional
   multi-type Route patch.
```

### Assembly evaluation against dimensions

| Dimension | Score | Reason |
|---|---|---|
| D1 (Resolves Q3) | HIGH | Q3 RESOLVED-WITH-DESIGN. |
| D2 (LAYER-2 detectability) | HIGH | A1+A3 + LAYER-2 statement makes three modes detectable. |
| D3 (File-scanning compat) | HIGH | Mechanism reads files via existing scan; no new I/O. |
| D4 (Prior-commitment preservation) | HIGH | Re-test covers all priors. |
| D5 (Mechanism auditability) | HIGH | Stage 1 deterministic; Stage 2 constrained by Stage 1. |
| D6 (User-language alignment) | HIGH | "anchors each pointer's WHY" preserved; pointer style respected. |
| D7 (Style fidelity) | HIGH | Inherited from design memo verbatim. |
| D8 (Graceful degradation) | HIGH | Fallback chain + drop-with-reason. |
| D9 (Schema scope-fit) | HIGH | 6 commitments + deferred FFs; not over-spec'd. |
| D10 (Feature coverage) | HIGH | 16 movement types covered via D1 mapping (per-type + default rule). |
| D11 (Extension path) | HIGH | M4 + W4 + MS3 deferred with revival triggers. |
| D12 (Performance) | HIGH | O(N+M) committed via P1-F. |

**Assembly verdict: SURVIVE.** All 12 dimensions HIGH.

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage

- **Per-candidate:** 18/18 evaluated with prosecution + defense + collision.
- **Per-solution-space:** 6 axes from Innovation (content, shape, direction, time, order, performance) all addressed.

### Convergence

- Clean SURVIVE assembly emerges (all 12 dimensions HIGH).
- No new candidates land in unmapped regions.
- Landscape STABLE.

### Convergence criteria

- [✓] At least one candidate has SURVIVE verdict with no caveats on CRITICAL dimensions.
- [✓] No new candidates in new regions.
- [✓] No unexplored regions likely to contain viable candidates.
- [✓] Accumulator shows convergence.

### Signal: TERMINATE with ranked survivors

**Ranked survivors:**
1. **Assembled finding shape** (combined refined candidates) — the finding's full shape.
2. P1-G + P1-F + P1-additional ADD — Stage 1 mechanism.
3. P2-G + P2-F — Stage 2 mechanism.
4. P3-G — Audit substrate.
5. P4-G + P4-F — Mode-selection.
6. P5-G — FF list.
7. P6-G + P6-C softened — Re-test.

**Deferred (revival triggers preserved):**
- P3-F A2-lite prefix (NEW-FF-3).
- P3-C post-generation audit.
- P1-additional multi-type Route patch (NEW-FF-1).

**Killed with seeds:**
- P1-C alternatives (REORGANIZE / ADD-TEST / REMOVE).
- P2-C single-stage.
- P4-C mode-follows-Stage-1.

**Rejected:**
- P1-additional REMOVE (drop fallback) — D8 fail.

---

## Convergence Telemetry

- **Dimension coverage:** 12 dimensions; 8 sensemaking perspectives mapped; project-specific risk axes (D3 file-scanning + D5 auditability) included.
- **Adversarial strength:** STRONG — prosecution constructed user-perspective objection (P1-G `none`-fallback may feel like regression), specification-gap probe (P2-G template deferred to NEW-FF-2), failure-case scenarios (P3-G regex assumes consistent format; LLM may vary).
- **Landscape stability:** STABLE.
- **Clean SURVIVE exists:** YES.
- **Failure modes observed:** none of the 7.
  - Wrong dimensions: validated against Sensemaking perspectives; PASS.
  - Rubber-stamping: 4 KILLs + 1 REJECT + 3 DEFERs (not all SURVIVEs); PASS.
  - Nitpicking: 11+ SURVIVEs; KILLs are on CRITICAL dimensions only; PASS.
  - Dimension blindness: project-specific axes included; PASS.
  - False convergence: clean SURVIVE; PASS.
  - Evaluation drift: single iteration; dimensions fixed; PASS.
  - Self-reference collapse: target is files+protocols; PASS.

**Overall: PROCEED.**

---

## Handoff to CONCLUDE

CONCLUDE's task:
1. Assemble the finding per Assembly Check shape.
2. Include `## Inherited Commitments Re-test` section per Synthesis Trigger (P6-G + P6-C softened).
3. Apply Critique refinements: P1-F batch-mode default-for-N≥4; P2-F calibratable ranking; P4-F calibration-locus + revival trigger; P6-C precise language (DERIVED-FROM / CONSTRAINED-BY / INFORMED-BY).
4. Mark Q3 RESOLVED-WITH-DESIGN in frontier-questions finding (CONCLUDE-side cross-doc impact).
5. Note for design memo: the LAYER-2 modes (Prescriptive-Without-Cycle-Context + Rename-Renders-Itself-Cosmetic) now have audit substrate (A1+A3); the 18-58 filler-meta-reasoning mode is also covered.
6. Move discipline outputs to docarchive/ per CONCLUDE protocol.
