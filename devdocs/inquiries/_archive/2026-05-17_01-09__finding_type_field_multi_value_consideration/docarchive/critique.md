# Critique — Finding Type-Field Multi-Value Consideration

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-17_01-09__finding_type_field_multi_value_consideration/_branch.md
```

## Phase 0 — Dimension Construction

### Extracted from upstream

- Sensemaking committed to **reading (b)** — `type:` denotes body-section-shape variant. Exploration's "3/3 multi-typed" claim collapsed under reading (b).
- Sensemaking's 2-verdict frontier: W1 default (clarifying note + single-value); W3 deferred (clarifying note + list-valued).
- Innovation expanded to 8 candidates + 3 assemblies; convergence: 4 mech → W1, 2 mech → N1, 3 mech → N2.
- Project-specific risk axis (per Phase 0 refinement note): anti-Status-Quo-Bias (the user pointed at a real gap; verdict must close it without merely defending the prior finding) AND internal-consistency-with-strict-reading commitment.

### Dimensions with weights

| # | Dimension | What it asks | Weight |
|---|---|---|---|
| **D1** | Addresses the user's question | Does the verdict actually answer "should `type:` allow multi-value?" | **HIGH** |
| **D2** | Preserves prior finding's architecture | Minimize spec change; honor universal-base + typed-variant | MEDIUM |
| **D3** | Empirical-evidence fit | Under reading (b), what does the corpus actually support? | **HIGH** |
| **D4** | Actionability | Concrete first step nameable | **HIGH** |
| **D5** | Switching cost | (Lower = better) | MEDIUM |
| **D6** | Forward-flexibility | Handles future hybrid bodies if they emerge | MEDIUM |
| **D7** | Anti-Status-Quo-Bias | Verdict survives without "preserve prior finding because it's there" defense | MEDIUM |
| **D8** | **Internal consistency with reading-(b) commitment** *(project-specific)* | Aligned with Sensemaking's structural reading commitment | MEDIUM-HIGH |

**Validation:** if a candidate passed all 8 perfectly — answers the question + preserves architecture + matches empirical reading + actionable + cheap + forward-flexible + survives anti-bias + internally consistent — it would be the unambiguous right answer. Right axes.

---

## Phase 1 — Landscape Construction

### Viable region
HIGH on D1 + D3 + D4; acceptable on others.

### Dead regions
- LOW D1 (doesn't address the user's question) → dead.
- LOW D3 (mismatches empirical reading-(b)) → dead.
- LOW D8 (contradicts the reading-(b) commitment) → dead.

### Boundary regions
- HIGH D6 + LOW D3 → boundary (forward-flexible but empirically unjustified).
- HIGH D2 + LOW D6 → boundary (preserves architecture but doesn't anticipate future).

---

## Phase 2 — Adversarial Evaluation

### W1 — clarifying note + single-value `type:` preserved

**Prosecution:**
- *D6 LOW:* doesn't anticipate hybrid bodies; if they emerge later, schema needs revisit.
- *D7 risk:* could appear to be "preserve prior finding" rationale.
- *Specification gap:* what exact wording does the clarifying note use? Where does it live?

**Defense:**
- *D1 HIGH:* directly answers the user's question by clarifying the silent assumption.
- *D2 HIGH:* preserves architecture.
- *D3 HIGH:* matches reading-(b).
- *D4 HIGH:* small edit.
- *D5 ZERO–small.*
- *D7 survives:* structural argument is genuine, not inertial (multi-mech: DT-Programming-Language tagged-unions, DT-Database-strict, EX-1-month, IV-Level-1 all converge).
- *D8 HIGH:* aligned with reading-(b) commitment.

**Collision:** Defense dominates on critical dimensions. The D6 concern is real but defensible (defer until empirical pressure). The specification gap is small (the prior finding's Variants section is the natural location; wording will be drafted in CONCLUDE).

**Verdict: SURVIVE.**

---

### W3 — clarifying note + list-valued `types:` schema

**Prosecution:**
- *D3 VIOLATION:* applies multi-value where reading-(b) does not require it. Premature given current evidence.
- *D5 medium:* schema change cost (key rename `type:` → `types:`; existing findings need updates; CONCLUDE updates).
- *D8 weakening:* inconsistent with the strict reading-(b) commitment (multi-value implies content-mention reading is also valid).

**Defense:**
- *D6 HIGH:* future-flexible if hybrid bodies emerge.
- *D1 OK:* addresses the user's question by adopting their framing.

**Collision:** D3 violation is decisive. Adopting multi-value without empirical evidence violates the project's "simplicity beats generality without evidence" principle. W3 survives only with empirical trigger (per Sensemaking's deferral).

**Verdict: REFINE → defer with revival trigger** (= ≥1 hybrid-body finding identified in corpus audit).

**Constructive output:** W3 is preserved as the right answer if/when empirical evidence appears; the audit MUST item (N1) is the mechanism that produces or rules out that evidence.

---

### N1 — W1 + corpus audit MUST item

**Prosecution:**
- *D5:* adds audit work.
- *Risk:* the audit might be deferred indefinitely if the MUST is not time-bound.
- *Specification gap:* what does "hybrid-body finding" look like operationally? What's the audit's pass/fail criterion?

**Defense:**
- *D3 HIGH:* the audit produces empirical evidence that EITHER validates W1 (no hybrid bodies) OR triggers W3 revival.
- *D6 medium-high:* turns the deferred W3 from theoretical-deferral into measurable-deferral.
- *D1:* addresses the user's question with both clarification AND validation.
- *D4 HIGH:* the audit IS a small inquiry (read ~50 finding bodies; classify each by section-shape; flag any that contain variant-distinguishing sections from two variants).

**Collision:** Prosecution's "deferred-indefinitely" concern is mitigated by making the audit time-bound (e.g., within 2 weeks of the finding's publication). Defense's empirical-validation argument is strong; the audit cost is small.

**Verdict: SURVIVE.**

**Constructive output:** the audit MUST item must specify (a) the time-bound gate, (b) the operational criterion for "hybrid-body" (a finding whose Finding-body section contains variant-distinguishing sections from two of the four variants — not just MUST-section Edit-Specifications, which are universal-base), (c) the trigger if ≥1 hybrid-body is found (revive W3).

---

### N2 — `type:` + optional `intent:` dual fields

**Prosecution:**
- *D2:* introduces a new frontmatter field; spec creep.
- *D3:* the empirical case for capturing author-intent SEPARATELY from body-shape is unproven; no recent finding has needed an `intent:` distinct from `type:`.
- *D4:* not actionable today (no immediate use case).

**Defense:**
- *D6:* captures the multi-role nature of `type:` (body-shape AND intent).

**Collision:** Prosecution wins on D2 + D3. The intent-capture concept may be valuable but is speculative.

**Verdict: REFINE → defer** with revival trigger (= when intent-capture demonstrates a concrete need, e.g., a future inquiry that surfaces intent-vs-body-shape disagreement).

---

### N3 — Inquiry-level fix (scope-violation reframe)

**Prosecution:**
- *D3 EMPIRICAL MISMATCH:* the 3 recent findings (sensemaking-spec-comparison, biggest-next-gain, name-for-navigation) are NOT scope violations; each addressed a single primary question. Their MUST sections contained Edit-Specifications because the answer required spec edits — not because the inquiry had multiple primary questions.
- *D1:* doesn't address the user's question (which was about the type-field schema, not inquiry scope).

**Defense:**
- Conceptual elegance: the reframe is interesting in principle.

**Collision:** Prosecution decisive. N3 mis-diagnoses the empirical cases.

**Verdict: KILL.**

**Constructive seed:** the IV-Level-2 reframe's intuition ("multi-type appearance might be inquiry-scope problem") is not entirely wrong — there COULD be future inquiries that genuinely have multiple primary questions and need to be split. But for the current empirical cases, N3's diagnosis is wrong. If a future inquiry actually does have multiple primary questions, the right fix at THAT point is splitting via `/MVL+`'s branch_inquiry protocol — not changing the type schema.

---

### N4 — Rename `type:` → `body_variant:`

**Prosecution:**
- *D5 medium-high:* rename cost (existing findings need updates; cross-references update; auto-memory update).
- *D2:* invasive to prior finding's schema.
- *Lower-cost alternative exists:* W1's clarifying note achieves similar disambiguation at near-zero cost.

**Defense:**
- Self-documenting field name eliminates a future ambiguity surface.

**Collision:** W1 dominates on cost-adjusted disambiguation value. Renaming a field everywhere just to make it self-documenting is over-engineered when a 2–3 sentence clarification produces the same understanding.

**Verdict: REFINE → keep as future option** if W1's note proves insufficient.

**Revival trigger:** ≥3 future cases of `type:` misreading despite the clarifying note being in place.

---

### N5 — Drop `type:` field; derive from body sections

**Prosecution:**
- *D5 HIGH:* significant CONCLUDE rewrite (section-recognition logic).
- *D2 violation:* invasive to prior finding's architecture.
- *Risk:* fragile parsing — variant section names must be matched exactly; any author drift in section naming would break the type-derivation.
- *D4 LOW:* not actionable in short term.

**Defense:**
- Eliminates the ambiguity surface entirely (no `type:` field, no `type:` misreading).
- Self-consistent (the type IS what the sections say).

**Collision:** Cost-and-risk dominate. The "eliminate the ambiguity surface" defense is real but expensive.

**Verdict: RESEARCH FRONTIER.**

**Constructive output:** preserved as a long-term option for a future spec-evolution inquiry on CONCLUDE's pipeline-detection mechanism. Not actionable now.

---

### N6 — Anti-Ambiguity Discipline (generalize the lesson)

**Prosecution:**
- *D2 scope creep:* this inquiry was about `type:`, not all schema-defining findings.
- *D1:* addresses the user's question only INDIRECTLY (by preventing future occurrences, not by answering THIS occurrence).

**Defense:**
- *D6 VERY HIGH:* prevents future occurrences of the same gap across all schema-defining findings.
- *D4 medium:* actionable as a small note added to /MVL+ rules or to the spec-modification variant template ("schema-defining findings must explicitly state which reading their schema fields use").

**Collision:** scope-creep concern is real but small. N6 can ship as a COULD (not MUST), keeping the inquiry's primary scope on `type:` while still offering the meta-improvement.

**Verdict: SURVIVE-as-COULD.**

**Constructive output:** offer N6 as a separable COULD action in this finding's Next Actions section. Its value is preventive (avoid future findings having the same gap); its scope is bounded (does not expand THIS finding's primary verdict).

---

### Assembly X — W1 + N1

**Prosecution:**
- Adds the audit-MUST work to W1's single-edit.
- Slightly larger scope than W1 alone.

**Defense:**
- Combines clarification (W1) with empirical validation (audit via N1).
- Makes Sensemaking's deferred W3 measurable rather than theoretical.
- Multi-mechanism convergence: W1's 4 mechanisms + N1's 2 mechanisms = 6 mechanisms support the assembly.

**Collision:** Assembly X's marginal-value-over-W1 is real (the audit produces evidence). The marginal cost (audit work) is small.

**Verdict: SURVIVE — top recommended assembly.**

---

### Assembly Y — X + N6 as separate COULD

**Prosecution:**
- Slight scope creep (N6 generalizes the lesson).

**Defense:**
- N6 as COULD doesn't expand the primary verdict; it's a separable forward-looking improvement.

**Collision:** Y dominates X if the user values the meta-improvement; otherwise Y = X (the COULD is optional).

**Verdict: SURVIVE — Y is X-with-optional-meta-improvement.**

---

### Assembly Z — Y + DEFERRED-W3 explicit

**Prosecution:**
- Kitchen-sink concern.

**Defense:**
- Each component independently justified.
- The DEFERRED-W3 is already implicit in Y (the audit's revival trigger is W3); making it explicit clarifies the lifecycle.

**Collision:** Z's marginal value over Y is documentation clarity. Worth it for the explicit lifecycle.

**Verdict: SURVIVE — Z is the most complete option.**

---

## Phase 3.5 — Assembly Check

Three viability tiers along the effort axis:

| Tier | Composition | Profile |
|---|---|---|
| **T1 — Minimum** | W1 alone | Tiny edit; closes the immediate question |
| **T2 — Default** | Assembly X (W1 + N1) | Small edit + small audit work; produces empirical validation |
| **T3 — Extended** | Assembly Y (X + N6 COULD) | T2 + meta-improvement to prevent future occurrences |
| **T4 — Full** | Assembly Z (Y + explicit DEFERRED-W3) | T3 + explicit revival lifecycle for W3 |

User picks tier by effort budget. T2 (X) is the recommended default — small effort with empirical validation.

---

## Coverage Map

| Region | Status | Candidates |
|---|---|---|
| Viable (HIGH D1+D3+D4, acceptable D2/D5/D6/D7/D8) | Mapped, populated | W1, N1, N6, Assemblies X/Y/Z |
| Boundary — HIGH D6 + LOW D3 | Mapped, populated | W3 (refined to deferred with empirical revival) |
| Boundary — high cost, low immediate D1 | Mapped, populated | N2 (refined to deferred), N4 (refined to future option), N5 (research frontier) |
| Dead — empirical mis-diagnosis | Confirmed populated | N3 (KILLed) |
| Unexplored | None identified | n/a |

---

## Phase 4 — Coverage + Convergence Assessment

### Accumulator state

- **Candidates evaluated:** 11 (W1, W3, N1, N2, N3, N4, N5, N6, Assemblies X, Y, Z)
- **Verdicts:**
  - **SURVIVE-clean** (1): Assembly X (W1 + N1) — top recommended
  - **SURVIVE** (4): W1, N1, N6-as-COULD, Assembly Y, Assembly Z
  - **REFINE-deferred** (3): W3 (revive on hybrid-body evidence), N2 (revive on intent-capture need), N4 (revive if W1's note proves insufficient)
  - **RESEARCH FRONTIER** (1): N5 (eliminates `type:` field; future spec-evolution inquiry)
  - **KILL** (1): N3 (mis-diagnoses the empirical cases)

### Convergence criteria

| Criterion | Met? |
|---|---|
| ≥1 SURVIVE with no critical-dim caveats | ✓ — Assembly X |
| Landscape stable | ✓ — all candidates land in mapped regions |
| No likely-viable unexplored regions | ✓ |
| Decreasing rate of new information | ✓ — Phase 3.5 confirmed the tier structure |

**All convergence criteria met.**

### Failure-mode check

| Failure mode | Observed? |
|---|---|
| Wrong dimensions | No — dimensions extracted from Sensemaking + project-specific D7/D8 |
| Rubber-stamping | No — N3 KILLed; W3/N2/N4 refined; not everything survived |
| Nitpicking | No — verdicts use weighted dimensions |
| Dimension blindness | No — D7 anti-Status-Quo-Bias added explicitly |
| False convergence | No — Assembly X has clean SURVIVE |
| Evaluation drift | No — dimensions held constant |
| Self-Reference Collapse | **FLAG** — using `/td-critique` to critique a finding-format spec. External grounding: (i) linguistic argument (body-shape vs content-mention distinction is meta-linguistic); (ii) the prior finding's own structural design forces reading (b); (iii) empirical evidence (3 recent findings) is independent observable; (iv) multi-mechanism convergence (6 mechanisms support Assembly X). Survives. |

---

## Signal — TERMINATE

### Rank 1 — Assembly X (default recommendation)

**W1 (clarifying note in the prior finding) + N1 (corpus audit MUST item with time-bound gate).**

Operationally:

1. Edit the prior finding (`2026-05-16_10-50__finding_md_format_redesign/finding.md`) to add a clarifying note in its Variants section: "`type:` denotes the body-section-shape variant. Edit-Specifications in the universal MUST section are universal-base content and do not multi-type a finding; a decision-typed finding whose MUST contains spec edits remains type: decision. A finding has exactly one `type:` value because its Finding-body section has exactly one variant shape."

2. Add an audit MUST item to the new finding's Next Actions: "Within 2 weeks, audit the ~50 corpus findings under `devdocs/inquiries/**/finding.md`. For each finding, identify its Finding-body section (separate from universal MUST) and check whether it contains variant-distinguishing sections from two or more of the four variants. If ≥1 hybrid-body finding is identified, revive verdict W3 (list-valued schema)."

### Rank 2 — Assembly Y (default + meta-improvement)

Assembly X plus N6 as a separate COULD: add to /MVL+ rules or to the spec-modification variant template an Anti-Ambiguity Discipline note: "Schema-defining findings must explicitly state which reading their schema fields use (e.g., 'this field denotes body-shape, not content-mention')."

### Rank 3 — W1 alone (minimum)

If the user prefers the smallest commitment: just the clarifying note. The audit is deferred informally; W3 revival depends on ad-hoc evidence.

### Killed / deferred

- **N3** (KILL): mis-diagnoses the empirical cases.
- **W3** (DEFERRED): revival on hybrid-body evidence from the audit.
- **N2** (DEFERRED): revival when intent-capture demonstrates need.
- **N4** (DEFERRED): revival if W1's note proves insufficient.
- **N5** (RESEARCH FRONTIER): future spec-evolution inquiry.

---

## Convergence Telemetry

- **Dimensions:** 8 / 8 applied; D7 (anti-Status-Quo-Bias) and D8 (reading-(b) consistency) added per project-specific Phase 0 refinement.
- **Adversarial strength:** **STRONG** — prosecution KILLed N3, REFINED 3 candidates, surfaced specification gaps on W1 and N1.
- **Landscape stability:** **STABLE** — all candidates land in mapped regions; Phase 3.5 confirmed tier structure without surfacing new candidates.
- **Clean SURVIVE:** **YES** — Assembly X.
- **Failure modes:** None observed; Self-Reference Collapse flagged with external grounding applied (6-mechanism convergence + linguistic argument + empirical evidence).
- **Overall:** **PROCEED.**
