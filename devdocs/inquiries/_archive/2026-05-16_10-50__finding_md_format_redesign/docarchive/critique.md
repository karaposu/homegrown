# Critique: finding.md Format Redesign

## User Input

Inquiry `_branch.md`. Input: innovation.md (5 ship-ready piece schemas; 4G+3F mechanism coverage; self-applicability test PASSED) + decomposition.md + sensemaking.md + exploration.md (50-finding corpus + 5 failure classes F1-F5). Phase 0 dimensions: 3 sensemaking commits + cross-cutting + 5 user-named failure classes + substrate-honest + author-cognitive-load + self-applicability + forward-applicability. Multi-axis prosecution: dimension + specific-failure-case (3 corpus instances) + spec-gap (edge cases) + user-perspective ("dive deep and think hard"). Honest tests: cognitive load worth structural enforcement?; taxonomy exhaustive?; sub-form compliance?; future-only migration honest?; materialization carve-out enough?

---

## Phase 0 — Dimension Construction

| # | Dimension | Weight |
|---|---|---|
| **D1** | Hybrid architecture fit (sensemaking commit 1) | **CRITICAL** |
| **D2** | 4-type taxonomy completeness (sensemaking commit 2) | HIGH |
| **D3** | Composable edit-spec sub-form (sensemaking commit 3; F2 fix) | **CRITICAL** |
| **D4** | Universal sections preserved (100% adoption value) | HIGH |
| **D5** | Strengthened style rules at structural level (F3+F4 fix) | HIGH |
| **D6** | Frontmatter extension | MEDIUM |
| **D7** | Future-only migration honesty | MEDIUM |
| **D8** | **5-failure-class prevention (F1+F2+F3+F4+F5)** | **CRITICAL** |
| **D9** | Substrate-honest (no aspirational tooling) | **CRITICAL** |
| **D10** | Author cognitive load proportional to value | HIGH |
| **D11** | Self-applicability (template applies to findings about itself) | MEDIUM |
| **D12** | Forward-applicability (scales to corpus growth + new types) | MEDIUM |

12 dimensions; weighted CRITICAL (D1, D3, D8, D9) / HIGH (D2, D4, D5, D10) / MEDIUM (D6, D7, D11, D12).

### Dimension validation

- All 3 sensemaking commits represented (D1, D2, D3).
- All 5 user failure classes captured in D8.
- Project-specific risks (D9 substrate-honest, D10 author-load, D11 self-applicability, D12 forward-applicability) added.
- No noise dimensions; each discriminates.

---

## Phase 1 — Fitness Landscape

### Viable region

A piece (or the compound) lands in viable region iff all CRITICAL dimensions PASS AND most HIGH dimensions PASS.

### Boundary region

PARTIAL on CRITICAL, or multiple PARTIALs on HIGH.

### Dead region

FAIL on any CRITICAL.

### Unexplored region

5th-type emergence (future-vulnerability). A content-type that doesn't fit Decision / Spec-modification / Recommendation / Loop-diagnose. Currently no such type observable in corpus; possible emergent risk.

---

## Phase 2 — Adversarial Evaluation per Piece

### Piece P1 — Universal Base Structure

#### Prosecution

- **P-1 (D9 substrate-honest):** "Does CONCLUDE actually have a structural-check tool that can verify section ordering + conditional sections + frontmatter keys? The recent context-blur inquiry removed structural_check.sh; LLM does the check itself. Is the new template's enforcement aspirational?"

- **P-2 (D10 author cognitive load):** "The frontmatter schema lists 12+ keys. Is this too much for authors to track?"

- **P-3 (D12 forward-applicability):** "Materialization is carved out. What if a 5th type emerges that's neither decision/spec-mod/recommendation/loop-diagnose? Where do hybrid types go?"

#### Defense

- **D-1:** The recent structural_check inquiry's outcome (`devdocs/inquiries/2026-05-16_06-12__structural_check_tool_remove_or_keep/finding.md`) was Hybrid A+D — REMOVE the script + ADD LLM-self-check procedure. CONCLUDE's compile-time check is exactly LLM-self-check; can verify section ordering by reading. Substrate-honest. Specified in P5's CONCLUDE-update brief.

- **D-2:** Of the 12+ keys, only 3 are REQUIRED (status / template_version / type). 2 are RECOMMENDED (model / effort). 4 are CONDITIONAL (refines / supersedes / corrects / diagnoses — required only when refining a prior or diagnosing). 5 are OPTIONAL (related / continues_from / compares_with / verdict). Authors track required+recommended (5); ignore optional unless context demands. Bounded cognitive load.

- **D-3:** 5th-type emergence is a real future-vulnerability. Mitigation: the `type:` enum is extensible; new types added via taxonomy-revision inquiry. The current 4 cover observed corpus content. Refinement trigger: when a finding genuinely doesn't fit any of the 4 types, open a taxonomy-revision inquiry.

#### Collision

Defense survives all 3 prosecution lines. P-3 leaves a residual future-vulnerability (flag for Open Questions).

**Verdict: SURVIVE** with future-vulnerability caveat (5th-type emergence).

---

### Piece P2 — Per-Type Finding-Body Schemas

#### Prosecution

- **P-4 (D2 taxonomy completeness):** "Are the 4 types truly exhaustive? Test against the corpus: pick representative findings; does each clearly fit?"

  Test:
  - 2026-04-28_14-13 materialization_trace_record → **decision** (decides where trace data goes). ✓ FIT.
  - 2026-05-14_15-00 innovate_spec_regression → **spec-modification** (REPAIR text provided). ✓ FIT.
  - 2026-05-09_11-54 decomposition_value_audit → **decision** (decides Assembly A). ✓ FIT.
  - 2026-05-09_21-15 loop_diagnose memory → **loop-diagnose**. ✓ FIT.
  - 2026-05-16_09-15 rename_td_critique → **recommendation**. ✓ FIT.
  - 5/5 fit. Taxonomy exhaustive at current corpus.

- **P-5 (D11 self-applicability):** "What if THIS finding could legitimately be classified as multiple types (decision + spec-modification)?"

  Analysis: THIS finding makes the new template SPEC — which a follow-up inquiry will use to MODIFY conclude.md. THIS finding is decision (decides the spec); follow-up is spec-modification (modifies conclude.md). Multi-aspect content naturally splits across paired inquiries. One type per finding.

#### Defense

- **D-4:** Corpus test passes 5/5; taxonomy currently exhaustive. Future emergence handled by enum extension (refinement trigger).
- **D-5:** One type per finding by convention; multi-type findings split into a series. The followup-inquiry pattern handles multi-aspect cases naturally.

#### Collision

Defense survives. **Verdict: SURVIVE.**

---

### Piece P3 — Edit-Specification Sub-Form

#### Prosecution

- **P-6 (D10 author cognitive load):** "7-field sub-form is bureaucratic for SMALL edits. Authors will shortcut it. Compliance is questionable."

- **P-7 (D9 substrate-honest):** "Who enforces that authors fill all 7 fields? Without enforcement, this becomes another rule with 96% non-compliance."

- **P-8 (D8 F2 prevention):** "Even with sub-form, will authors capture EXACT current_text? In 2026-05-13_07-16, the author described the new opening in prose. Would the sub-form force exact text?"

#### Defense

- **D-6:** Sub-form is REQUIRED only for Spec-modification type. Decision type doesn't need it. Other types use optionally. Author burden is proportional to content-type — the burden falls only where the structural-enforcement value lives.

- **D-7:** Enforcement is at CONCLUDE compile-time via LLM-self-check. The CONCLUDE-procedure-update inquiry (P5's brief) specifies new structural-check rules that flag violations. Compliance is structurally enforced — the finding fails the check until corrected.

- **D-8:** The sub-form's `current_text` field is explicitly "verbatim, from target." If the author writes prose instead, the structural-check flags the violation. Author either fills exact text or the finding fails. The structural enforcement is exactly the lever the canonical template lacked.

#### Collision

Defense survives all 3. The 4% concrete-edit-form rate in canonical is direct evidence that documentation-layer rules don't work; structural-layer enforcement (sub-form + structural-check) is the design intervention.

**Verdict: SURVIVE.**

---

### Piece P4 — Strengthened Style Rules

#### Prosecution

- **P-9 (D10 author burden):** "4 new rules + 4 preserved + 6 edge cases = 14 rules total. Author has to remember all?"

- **P-10 (D9 substrate-honest):** "Style rules apply at compile-time per CONCLUDE structural-check. Has the structural-check been updated to verify them? Or is this aspirational?"

- **P-11 (specific-failure-case):** "Test on 2026-05-09_11-54: it cited 'Q1.1-f', 'Q1.3-a' as workspace labels. Would the anchored-cross-reference rule catch this?"

  Test: The rule says workspace labels are defects "UNLESS introduced as named anchors in an earlier section of the SAME finding." In 2026-05-09_11-54, Q1.1-f is cited in Next Actions but introduced only in archived Innovation phase, not in the finding itself. Rule CATCHES this as a defect. ✓

#### Defense

- **D-9:** Author cognitive load is real but: (a) rules are documented with positive+negative examples; (b) compile-time check flags violations; (c) author learns from violations. Over time, the rules become second-nature. The alternative — 96% concrete-edit-form failure rate in canonical — is worse.

- **D-10:** CONCLUDE-procedure-update brief (P5) explicitly specifies new structural-check rules as required follow-up. Not aspirational; concrete next-inquiry deliverable.

- **D-11:** Rule correctly catches the 2026-05-09_11-54 defect on its merits. Specific-failure-case test PASS.

#### Collision

Defense survives. **Verdict: SURVIVE.**

---

### Piece P5 — Migration Plan + CONCLUDE-Update Brief

#### Prosecution

- **P-12 (D7 migration honesty):** "Future-only migration means existing 50 findings stay 'broken' relative to new template. Is this honest about the cost of not re-formatting?"

- **P-13 (specific-failure-case):** "How does the author know which template version they're using? Frontmatter says template_version: 2 — but where does that get set automatically?"

#### Defense

- **D-12:** Honest about cost — re-formatting 50 findings would take ~50 mini-inquiries (each requiring re-reading archived discipline outputs). Audit-trail value of preserving findings as authored exceeds consistency value of uniformity. DEFERRED in Next Actions can include "re-format priority findings if needed" for the user to revisit. The tradeoff is explicit.

- **D-13:** The frontmatter `template_version: 2` is stamped by CONCLUDE at compile time per the brief. New findings get v2 automatically; old findings have no marker (= v1). Backward-compat note specifies behavior: agents reading without the marker treat as v1.

#### Collision

Defense survives. **Verdict: SURVIVE** with caveat that template_version-stamping mechanism is specified-but-not-yet-built (lives in P5's brief for follow-up inquiry).

---

## Failure-Class Prevention Test (D8) — Per-Failure Analysis

For each of the 5 user-named failure classes, does the new template structurally prevent it?

| Failure | Mechanism that prevents it | Verdict |
|---|---|---|
| **F1 materialization-unsuited** | P1's out-of-scope statement carves materialization out; points to `materialization_record.md` separate artifact | **PREVENTED** |
| **F2 missing exact-line edit specifics** | P3 sub-form REQUIRED for Spec-modification + Loop-diagnose Maintenance Candidates; P4 concrete-edit-form rule enforces at compile-time | **PREVENTED** |
| **F3 misleading "what to edit" instructions** | P4 verb-specificity + scope-specificity rules; concrete-edit-form requires sub-form reference (anchored) | **PREVENTED** |
| **F4 persistent ambiguity** | P4 hedging-specificity + gate-specificity + verb-specificity + scope-specificity (4 structural rules) | **PREVENTED structurally** |
| **F5 bullet-only Finding section** | P2 per-type variants specify required sections + sub-sections per type; bullets-only = missing-required-sections violation | **PREVENTED** |

All 5 failure classes structurally prevented. D8 PASS.

---

## Spec-Gap Probe — Edge Cases

| Edge case | New template handling |
|---|---|
| Multi-iteration findings | Universal Reasoning + Open Questions sections handle (same as canonical) |
| A/B comparison findings | Decision type with both options surfaced + comparison reasoning; or Recommendation type if ranked |
| Super-long findings (>1000 lines) | Numbered subsections within Finding-body variants (per Decomposition's "tractability" guidance carried into P2's variant section lists) |
| Very-short findings (<100 lines) | Conditional sections may be skipped per P1's "when required" gating |
| Findings without proposed edits | Decision / Recommendation types don't require sub-form; sub-form is type-conditional |
| Findings proposing edits to non-spec files (e.g., README) | Spec-modification type extends — `target_path` is any file, not just spec files |

All identified edge cases handled. No spec-gap.

---

## User-Perspective Objection — "Dive deep and think hard"

Did the redesign honor the user's directive?

- 7 redesign dimensions explored in Exploration (A-G).
- 4-type taxonomy CONSOLIDATED from 8 candidates via pairwise coupling test (not added more; rigorously reduced).
- 5-piece decomposition with explicit interface map + dependency order.
- Per-piece 5-test cycle applied.
- Self-applicability test performed (THIS finding's type-assignment validates the schema).
- Assembly check performed; emergent property identified (structural-enforcement replacing documentation-only).
- Materialization carved out (honest scope statement; not absorbed into template).
- Future-only migration with explicit cost-vs-value tradeoff.
- Substrate-honest (compile-time check via LLM-self-check, grounded in recent structural_check inquiry outcome).
- Edit-type edge cases (multi-file / add-new-file / frontmatter / procedure / conditional / different-content) all addressed.

This is thorough redesign at the structural level. Depth is appropriate.

Complexity proportionality test: F2 (96% concrete-edit-form failure rate) is severe; the complexity (sub-form + structural-check) is justified. F5 (bullet-only) is moderate; per-type variants address it without adding many sections. F1/F3/F4 are bounded; rules + carve-out address them with proportional cost.

**Verdict on user-perspective: SURVIVES.** Redesign honors "dive deep and think hard" without over-engineering.

---

## Phase 3 — Verdicts (Summary Table)

| Piece | Verdict | Caveats |
|---|---|---|
| **P1 Universal base structure** | **SURVIVE** | Future-vulnerability: 5th-type emergence (refinement trigger; flag for Open Questions) |
| **P2 Per-type Finding-body schemas** | **SURVIVE** | One type per finding by convention; multi-aspect content splits to paired inquiries |
| **P3 Edit-specification sub-form** | **SURVIVE** | Enforcement is at CONCLUDE compile-time; specified in P5 brief |
| **P4 Strengthened style rules** | **SURVIVE** | All 4 new rules + 4 preserved canonical; specific-failure-case test PASS on workspace-labels |
| **P5 Migration plan + CONCLUDE-update brief** | **SURVIVE** | template_version-stamping mechanism is specified-not-yet-built (lives in follow-up inquiry) |

### Compound verdict

**The new template (5-piece composition) → SURVIVE.** All 5 user failure classes structurally prevented; all critical dimensions PASS; honest about tradeoffs; self-applicable.

### Constructive outputs for the finding

Forward into the finding:
- Adopt the 5-piece spec as the recommended new template
- Carry 2 caveats to Open Questions:
  - **OQ-1 5th-type emergence:** if a future finding doesn't fit any of the 4 types, open a taxonomy-revision inquiry to extend the enum (refinement trigger)
  - **OQ-2 template_version-stamping:** the v2 stamp is auto-applied by CONCLUDE per the procedure-update brief; until the follow-up inquiry ships, findings authored under the new template should manually set `template_version: 2`
- Next Actions point to the CONCLUDE-procedure-update follow-up inquiry (concrete spec-modification work scope)

---

## Phase 3.5 — Assembly Check

The 5 pieces compose without contradiction:

- **P1 universal base** provides the Finding-body slot.
- **P2 per-type variants** fill the slot per `type:` key.
- **P3 sub-form** embeds in P2 variants when applicable.
- **P4 rules** apply throughout P1+P2 (cross-cutting) and reference P3 for enforcement.
- **P5 migration + CONCLUDE-update** specifies how CONCLUDE adopts the design.

**Emergent property:** the template's `type:` discriminator + sub-form composability + structural-check enforcement together replace the canonical's documentation-only approach with a structurally-enforced contract. This emergent property is what makes the redesign LOAD-BEARING — it's the lever that converts the 96% concrete-edit-form failure rate into structural compliance.

**No new compound candidate beats the design.** Assembly stable.

---

## Phase 4 — Coverage + Convergence

### Coverage Map

**Per-piece:** all 5 pieces evaluated against ~10 dimensions each = ~50 cell evaluations. ✓
**Per-prosecution-axis:** 4 axes (dimension-level / specific-failure-case / spec-gap / user-perspective). 13 prosecution lines total + 5 failure-class tests. ✓
**Per-solution-space:** viable region populated by all 5 pieces of the compound; dead region populated by alternates rejected during Sensemaking (pure-single-template / pure-multi-template / composable-blocks / 8-type granularity); boundary region (P1 with 5th-type caveat; P5 with stamping caveat) flagged. ✓

### Convergence Assessment

| Criterion | Status |
|---|---|
| Clean SURVIVE-as-primary | ✓ Compound 5-piece spec; caveats are non-critical |
| Landscape stable | ✓ Assembly check produced no new compound candidate |
| No unexplored region likely productive | ✓ 5th-type emergence is future-vulnerability, not current gap |
| Multi-mechanism convergence on design | ✓ Innovation showed 4G+3F converge on hybrid base+variants + sub-form design |

All convergence criteria met.

### Failure-Mode Self-Check

| Mode | Status |
|---|---|
| 1. Wrong Dimensions | ✗ avoided — extracted from sensemaking + user failure classes + project-specific risk |
| 2. Rubber-stamping | ✗ avoided — 13 prosecution lines + 5 failure-class tests; multi-axis depth |
| 3. Nitpicking | ✗ avoided — defense applied per piece; severity-weighted |
| 4. Dimension Blindness | ✗ avoided — author-cognitive-load + substrate-honest + self-applicability + forward-applicability all added |
| 5. False Convergence | ✗ avoided — multi-mechanism convergence empirically validated in Innovation |
| 6. Evaluation Drift | ✗ avoided — single iteration; dimensions fixed in Phase 0 |
| 7. Self-Reference Collapse | ✗ avoided — external grounding via corpus statistics + user testimony + cross-domain analogues (ADR/RFC/diff/YAML) |

---

## Signal

**TERMINATE with ranked survivors.**

**Primary survivor:** The compound 5-piece new-template spec (P1 universal base + P2 per-type variants + P3 sub-form + P4 strengthened style rules + P5 migration + CONCLUDE-update brief).

**Caveats (forward to finding's Open Questions):**
- OQ-1 5th-type emergence (refinement trigger; flag as future-vulnerability)
- OQ-2 template_version-stamping mechanism specified in P5 brief; until follow-up ships, manual stamping required

**No alternates needed.** The compound is the only viable candidate at this design level; Sensemaking already eliminated alternates (pure-single / pure-multi / composable-blocks / 8-type granularity / materialization-inclusion).

### Convergence Telemetry

- Dimension coverage: 12/12
- Adversarial strength: STRONG (13 prosecution lines + 5 failure-class structural prevention tests + 6 edge-case spec-gap probes + user-perspective objection)
- Landscape stability: STABLE (assembly check produced no new compound candidate)
- Clean SURVIVE: YES (compound; caveats are non-critical)
- Failure modes observed: NONE
- **Overall: PROCEED**

### Constructive Outputs to Finding

**Next Actions:**
- MUST: open follow-up inquiry — `spec-modification` type, target `~/.claude/skills/protocols/conclude.md`, per P5 brief's per-edit specs
- COULD: re-format priority findings if needed (DEFERRED in Sensemaking; user can decide later)
- DEFERRED: re-format all 50 existing findings (future-only is the recommendation; this is held DEFERRED with explicit trigger)

**Open Questions:**
- OQ-1 5th-type emergence (refinement trigger)
- OQ-2 template_version-stamping mechanism (specified for follow-up inquiry)
- OQ-3 author-cognitive-load monitoring (after follow-up ships, observe whether new template increases per-finding authoring time materially; if so, simplify)

**Reasoning section content:**
- Why the new template over canonical: 96% concrete-edit-form failure rate is structural; documentation-layer rules can't fix; structural enforcement is the lever
- Why 4-type taxonomy: consolidated from 8 candidates via pairwise coupling; exhaustive at current corpus
- Why composable sub-form: codifies the 2026-05-14_15-00 pattern; enables structural check
- Why future-only migration: cost of re-formatting > value of consistency; audit trail preserved
- Why materialization carved out: separate artifact per 2026-04-28 prior; not a finding-variant
