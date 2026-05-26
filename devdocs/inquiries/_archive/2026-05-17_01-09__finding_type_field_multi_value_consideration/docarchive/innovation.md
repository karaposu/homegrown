# Innovation — Finding Type-Field Multi-Value Consideration

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-17_01-09__finding_type_field_multi_value_consideration/_branch.md
```

## Seed

Sensemaking settled on a 2-verdict frontier: **W1** (clarifying note + single-value `type:` preserved) as default; **W3** (clarifying note + list-valued `types:`) as deferred-with-revival-trigger. The empirical multi-type claim from Exploration collapsed under the strict body-shape reading. Innovation's job: surface hybrids between W1 and W3, and test whether new mechanisms produce schemas Sensemaking missed.

## Direction (Intuition Signals)

- **Context.** Prior finding's universal-base + typed-variant architecture; reading-(b) committed; 6 prior schema candidates (A1–A6) already surveyed in Exploration.
- **Valuation.** Minimize spec change; preserve compatibility; address user's question directly.
- **Motivation.** Close the gap cleanly — the user pointed at a real silent assumption; the answer should explicitly resolve it.

---

## Phase 2 — Generate (apply all 7 mechanisms)

### 1. Lens Shifting (Framer)

**LS-Generic.** Reframe under "what does the corpus actually look like under audit?" The verdict depends on empirical evidence we don't have. Make the audit the immediate next move; let evidence drive schema choice.

**LS-Focused.** Reframe under "what would a future cold reader hitting the same ambiguity see?" The clarifying note's job is pre-emption. Defensive clarification.

**LS-Contrarian.** Reframe under "why was multi-type so plausible to a reader?" The schema is ambiguous-by-design. Fixing the ambiguity is the move; the verdict is "design `type:` to be unambiguous in either reading."

### 2. Combination (Generator)

Concepts in proximity: W1's clarifying note; W3's list-valued schema; the prior finding's `related` key; the variant-body taxonomy; the audit move.

**CB-Generic.** W1 + corpus audit = clarifying note + an audit MUST item. Clarification AND empirical follow-up.

**CB-Focused.** W1 + a separate `intent:` field. Keep `type:` single-valued (body-shape) AND add an optional `intent:` field (single-valued, author-intent). Two fields with different roles, both single-valued.

**CB-Contrarian.** Drop `type:` entirely; let body-shape be self-describing via section presence. Schema-less.

### 3. Inversion (Framer)

**IV-Level-1.** Inverted — "the schema's job is to FORCE clarity, not capture reality." Single-value `type:` is a discipline.

**IV-Level-2 (system).** Inverted — "the apparent multi-type case is a SCOPE VIOLATION at the inquiry level." A finding that does decision AND spec-modification body shape might be addressing two primary questions. Fix at inquiry level, not schema level.

**IV-Contrarian.** Inverted — "the four variants might be the wrong count." Revisit the taxonomy itself.

### 4. Constraint Manipulation (Framer)

**CM-Generic.** Remove "minimize spec change" constraint — full migration to W3 with rewrites.

**CM-Focused.** Add: "any clarification must be ≤3 sentences." Forces W1's note to be terse.

**CM-Contrarian.** Add: "the field name itself should imply the reading." Rename `type:` → `body_variant:`.

### 5. Absence Recognition (Generator)

**AR-Gap (Generic).** Missing definition: "the variant is determined by Finding-body sections, not MUST sections." Add this definition.

**AR-Gap (Focused).** Missing artifact: a frontmatter-key glossary in the prior finding.

**AR-Gap (Contrarian).** The prior finding's corpus analysis didn't validate per-finding body-section-shape against the assigned `type:`. Missing artifact: per-finding type-assignment with body-section justification.

**AR-Redesign.** A new concept: **variant derived from body-section presence**. CONCLUDE derives type from actual sections; no frontmatter declaration.

### 6. Domain Transfer (Generator)

**DT-Programming-Language (tagged unions).** Sum types have ONE tag; the body is the payload. Single-tag is structural. **Supports W1.**

**DT-Database (strict + soft schema).** Strict `type:` (single, required) + optional `also:` for soft additions. **Supports CB-Focused.**

**DT-Documentation (faceted classification).** When items span subject areas, facets capture multiple memberships. **Supports W3 / faceted (A5 from Exploration).**

**DT-Linguistics (primary + secondary senses).** Primary sense is canonical lookup; secondary noted separately. **Supports CB-Focused.**

### 7. Extrapolation (Generator)

**EX-1-month.** Corpus grows to ~70 findings. Hybrid-body existence becomes empirically observable. Verdict should not commit to multi-value schema before evidence.

**EX-6-months.** Corpus at ~200. If hybrid bodies appear, multi-value becomes necessary. If they don't, single-value remains sufficient.

**EX-10-years.** Spec-evolution protocol matures; schemas evolve via workshop pattern (recently demonstrated by sensemaking-spec-comparison promotion). Schema decision is reversible.

---

## Phase 3 — Test

### Consolidated candidate set

| Candidate | Origin |
|---|---|
| **W1** | Sensemaking default — clarifying note + single-value preserved |
| **W3** | Sensemaking deferred — clarifying note + list-valued schema |
| **N1** | CB-Generic + EX-1-month — W1 + corpus audit MUST item |
| **N2** | CB-Focused + DT-Database-soft + DT-Linguistics — `type:` + optional `intent:` field |
| **N3** | IV-Level-2 — fix at inquiry level (scope-violation reframe) |
| **N4** | CM-Contrarian — rename `type:` → `body_variant:` |
| **N5** | CB-Contrarian + AR-Redesign — drop `type:` field; derive from body sections |
| **N6** | LS-Contrarian — generalize the lesson: add an Anti-Ambiguity Discipline note for schema-defining findings |

### Tests per candidate

| Candidate | Novelty | Scrutiny survival | Fertility | Actionability | Mechanism independence | Disposition |
|---|---|---|---|---|---|---|
| **W1** | Low (Sensemaking) | Strong defense — DT-Programming-Language (tagged unions), DT-Database-strict converge | Low (closes question) | HIGH (small edit) | HIGH (multi-mech: DT + EX-1-month + IV-Level-1) | **ACTIONABLE** |
| **W3** | Medium | Counter: spec change without empirical evidence. Defense: forward-flexibility | Medium | Medium (schema + migration) | Medium (DT-Documentation faceted + CM-Generic) | **ACTIONABLE-deferred** per Sensemaking's revival trigger |
| **N1** | Medium | Counter: audit adds work. Defense: audit is small (read 50 finding bodies); produces validation evidence | **HIGH** (audit results inform future) | HIGH | MEDIUM (CB-Generic + EX-1-month) | **ACTIONABLE — natural pairing with W1** |
| **N2** | Medium-High | Counter: 2 fields where 1 suffices; intent-capture need is unproven | Medium | Medium (extra field maintenance) | MEDIUM (CB-Focused + DT-Database-soft + DT-Linguistics) | **REFINE — interesting but premature; defer until intent-capture need demonstrated** |
| **N3** | HIGH (problem-reframe) | Counter: the 3 recent findings (R1a/b/c) addressed single primary questions; they're NOT scope violations. The IV-Level-2 reframe mis-diagnoses the empirical cases | HIGH if true; LOW if mis-diagnosed | Medium (would change /MVL+ rules) | Single (IV-Level-2 only) | **REFINE — inversion interesting but diagnosis wrong** |
| **N4** | Medium | Counter: rename cost; existing findings need migration. Defense: field name self-documents reading | Medium | Medium | Single (CM-Contrarian only) | **REFINE — clarifying note in W1 achieves similar clarity at lower cost** |
| **N5** | HIGH (eliminates `type:` field) | Counter: section-recognition logic in CONCLUDE is complex; fragile parsing risk | HIGH | LOW (CONCLUDE rewrite) | MEDIUM (CB-Contrarian + AR-Redesign) | **RESEARCH FRONTIER — long-term interesting; premature now** |
| **N6** | HIGH (generalizes the lesson) | Counter: scope creep — this inquiry was about `type:`, not all schema fields. Defense: separable follow-on; doesn't expand THIS finding's scope | **VERY HIGH** (prevents future occurrences across all schema-defining findings) | Medium | Single (LS-Contrarian) | **ACTIONABLE as separable follow-on** |

### Assembly check

**Assembly X — W1 + N1** (clarifying note + corpus audit MUST item)
- Prosecution: combines two refinements.
- Defense: the audit IS Sensemaking's revival trigger for W3; making it explicit as a MUST item is cheap and high-value. Without the audit, W3's revival is theoretical; with the audit, it's measurable.
- Verdict: **SURVIVE — natural top assembly.**

**Assembly Y — Assembly X + N6** (W1 + audit + anti-ambiguity discipline note)
- Prosecution: scope creep (this inquiry was about `type:`).
- Defense: N6 is separable; it can ship as a COULD in this finding's Next Actions, not as a MUST.
- Verdict: **SURVIVE — N6 offered as separate COULD**, not part of the primary refinement.

**Assembly Z — W1 + N1 + N6 + DEFERRED-W3**
- Most complete option. Survives but the marginal value of N6 over the audit (N1) is small in the short term.
- Verdict: **SURVIVE** as an extended option for users who want the full meta-improvement.

### Axis coverage

| Axis | Variants |
|---|---|
| **Schema shape** | W1 (single), W3 (list), N2 (dual single), N4 (renamed single), N5 (none) |
| **Evidence-handling** | N1 (audit), W1 (no audit needed) |
| **Scope of fix** | W1/W3/N2/N4 (schema), N3 (inquiry-level), N6 (discipline-level) |
| **Reversibility** | All reversible via git |
| **Cost** | W1 lowest; W3/N4 medium; N5 highest |

All axes covered.

### Failure-mode self-check

- **Premature evaluation:** No.
- **Single-mechanism trap:** No (7 mechanisms applied).
- **Early frame lock:** No (IV-Level-2, LS-Contrarian, AR-Redesign explored alternative frames).
- **Innovation without grounding:** No (8 candidates tested).
- **Mechanism exhaustion:** No.
- **Survival bias:** Flag — W1 is the comfortable answer. Tested against N5 (uncomfortable, eliminate `type:`). N5 survives independently on AR-Redesign + CB-Contrarian mechanisms; its disposition (RESEARCH FRONTIER) is on COST grounds, not comfort. W1's survival is on multi-mechanism convergence (4 mechanisms), not comfort.

---

## Telemetry

- **Generators applied:** 4 / 4
- **Framers applied:** 3 / 3
- **Mechanism coverage:** FULL (7/7)
- **Convergence:**
  - 4 mechanisms → W1 (DT-Programming-Language + DT-Database-strict + EX-1-month + IV-Level-1)
  - 2 mechanisms → N1 (CB-Generic + EX-1-month)
  - 3 mechanisms → N2 (CB-Focused + DT-Database-soft + DT-Linguistics)
- **Survivors tested:** 8 / 8
- **Dispositions:** 3 ACTIONABLE (W1, N1, N6), 1 ACTIONABLE-deferred (W3), 3 REFINE (N2, N3, N4), 1 RESEARCH FRONTIER (N5)
- **Emergent assembly:** **Assembly X (W1 + N1)** as natural top; Assembly Y/Z as extended options.
- **Failure modes:** None visibly (Survival Bias flag-checked and resolved).
- **Overall:** PROCEED.

## Hand-off to Critique

Decisive comparisons for Critique:
1. **Assembly X (W1 + N1) vs W1 alone** — does the audit MUST item add proportional value, or is it ceremony?
2. **W1 vs W3** — Sensemaking's deferral verdict for W3: does it survive Critique's adversarial test, or should W3 be killed outright?
3. **N6 (Anti-Ambiguity Discipline) as COULD** — is the meta-improvement worth surfacing, or scope creep?
4. **N3 (inquiry-level fix) vs schema-level fix** — Critique should test whether the empirical cases are actually scope violations or genuine single-question inquiries.
