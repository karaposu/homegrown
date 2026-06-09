# Critique — per_phase_placement_failure_modes_with_distinguishing_header

## User Input

```text
Adjudicate the integrated spec edit + framework refinement. Apply purpose-fitness + frame-premise + substance-vs-label tests.
```

---

## Phase 0 — Dimensions

**Burden of proof:** medium-high (spec edit; affects practitioner experience). Guilty-until-proven-innocent on CRITICAL.

### Refinement notes applied

- **Project-specific risk** — risks: silent content loss; Phase 0 overload; cross-reference breakage.
- **Frame-premise test** — three premises tested below.
- **Purpose-fitness test** — applied per-candidate.
- **Substance-vs-label** — verified substance-level not just label-level.

### Dimensions

| # | Dimension | Weight | Asks |
|---|---|---|---|
| D1 | Content preservation | CRITICAL | Do per-phase blocks use existing §4 text faithfully? |
| D2 | Phase 0 density acceptability | CRITICAL | Is 4 refinement notes + 3 failure modes practically readable? |
| D3 | Purpose-fitness | CRITICAL | Would adoption prevent `/td-critique` from doing its job? |
| D4 | Frame-premise robustness | CRITICAL | Do the 3 inherited premises survive prosecution? |
| D5 | Substance-not-just-label | CRITICAL | Concrete blocks specified, not just naming? |
| D6 | Cross-spec viability | HIGH | Does the pattern generalize to sister disciplines? |
| D7 | Framework refinement consistency | HIGH | Does new content-type carve-out contradict prior framework? |
| D8 | User-intent fidelity | CRITICAL | Does the recommendation honor the user's "distinguish them somehow" intent? |
| D9 | Inverse-pair preservation | MEDIUM | Is the #2↔#3 inverse relationship surfaced after split? |
| D10 | LLM-consumption benefit | HIGH | Does per-phase placement actually improve LLM-iteration locality? |

### Frame-premise prosecutions (D4)

**(a) "Failure modes are phase-affined."**
- *What-if-wrong:* some modes are phase-independent.
- *Evidence:* 7 of 8 are clearly phase-affined per substrate; #7 has explicit cross-cutting carve-out. #6 "Evaluation Drift" is at Phase 4 "cross-iteration" — borderline but located at the phase where iteration-state is checked.
- *Verdict:* PASS.

**(b) "Refinement-note prefix pattern is appropriate."**
- *What-if-wrong:* practitioners confused by "Failure mode" vs "Refinement note" labels.
- *Evidence:* the prefix word does load-bearing distinction work (positive check vs pattern watch); same italic+bold structure preserves visual consistency.
- *Verdict:* PASS.

**(c) "Thin §4 overview preserves catalog-scan."**
- *What-if-wrong:* the 4-column table is too thin for practitioner symptom-matching.
- *Evidence:* Name + Fires at + Inverse-of supports navigation but not symptom-matching. A one-line Recognition column would help. PARTIAL.
- *Verdict:* PARTIAL → REFINE — consider adding one-line Recognition summary column to the §4 overview (optional COULD).

**Aggregate:** 2 PASS + 1 PARTIAL → REFINE on overview enrichment.

---

## Phase 1 — Landscape

- **Viable:** the integrated edit + framework refinement; survives critical dimensions with HIGH/MEDIUM.
- **Dead:** none observed.
- **Boundary:** D4(c) PARTIAL on overview thinness (optional REFINE).
- **Unexplored:** empirical practitioner-experience data post-adoption.

---

## Phase 2 — Adversarial Evaluation

### Candidate A — The integrated edit (per-phase blocks + thin §4 + cross-cutting section)

**Prosecution:**
- *Content-loss risk:* Innovation's draft for #1 Wrong Dimensions Prevention DROPS the "Phase 0 (Dimension Construction)" prefix from current text. Is this silent content loss?
- *Density risk:* 7 inline structural blocks at Phase 0 hits Miller's upper edge; readability may degrade.
- *Bold-header alternative:* user's exact proposal was `**Failure modes preventable at this phase:**` (bold header introducing a section). Innovation chose italicized-prefix-per-block instead. Was the deviation justified?
- *Catalog-scan thinning:* the 4-column overview lacks Recognition summary; practitioners might still need to jump to per-phase block to match symptoms.

**Defense:**
- *Content preservation:* the "Phase 0 (Dimension Construction)" prefix is redundant when the block IS at Phase 0; dropping it eliminates redundancy, not content. Recognition + Prevention substance preserved.
- *Density:* italicized prefix words distinguish "Refinement note" vs "Failure mode" categories; reader's working memory can chunk by category, reducing cognitive load.
- *Bold-header alternative:* user's intent ("distinguish them somehow") is honored; the chosen mechanism is structurally cleaner because (1) mirrors existing refinement-note pattern; (2) per-block scope rather than per-section scope; (3) more LLM-friendly (each block self-delimited).
- *Catalog-scan thinning:* the overview's primary purpose is navigation (which phase to jump to). Symptom-matching is a SECONDARY use that the per-phase block handles in full. Trade-off accepted; optional REFINE available.

**Collision:**
- Content-loss prosecution rejected — redundancy elimination is structurally acceptable.
- Density prosecution acknowledged — REFINE: monitor; if overload observed post-adoption, cluster under sub-themes (per prior framework's cluster-trigger pattern).
- Bold-header prosecution rejected — italicized prefix is structurally cleaner per three named reasons.
- Catalog-scan prosecution partial — REFINE: consider one-line Recognition column as COULD.

**Dimension scores:**

| Dim | Score | Note |
|---|---|---|
| D1 Content preservation | PASS | Redundancy elimination acceptable; substance preserved. |
| D2 Phase 0 density | PARTIAL → REFINE | Monitor; consider sub-theme clustering if overload observed. |
| D3 Purpose-fitness | PASS | Per-phase placement IMPROVES practitioner experience. |
| D4 Frame-premise robustness | PARTIAL → REFINE | 2 PASS + 1 PARTIAL (overview thinness). |
| D5 Substance-not-label | PASS | Concrete blocks drafted; substance specified. |
| D6 Cross-spec viability | PASS | Verified for /innovate (6 phase-affined), /sense-making (4 phase-affined + 2 cross-cutting), /decompose (7 step-affined). Pattern generalizes. |
| D7 Framework consistency | PASS | New content-type cleanly carves out; prior framework's self-application claim (meta-pattern catalog IS pure catalog, uses Hybrid) remains valid. |
| D8 User-intent fidelity | PASS | "Distinguish them somehow" honored via italicized prefix per block. |
| D9 Inverse-pair preservation | PASS | Overview's Inverse-of column surfaces #2↔#3 relationship. |
| D10 LLM-consumption benefit | PASS | LLM iterating phase-by-phase encounters failure modes inline; no jump needed. |

**Verdict:** **SURVIVE with two minor REFINEs:**
1. Monitor Phase 0 density post-adoption; cluster under sub-themes if reading feels overloaded.
2. Consider adding a one-line Recognition column to the §4 overview as optional COULD for stronger catalog-scan support.

### Candidate B — Framework refinement (Update Note + new content-type)

**Prosecution:** does adding a new content-type complicate the framework? Counter: the carve-out is structurally clean (phase-affined operational guidance is a real category that includes both refinement notes and failure modes).

**Defense:** the prior framework's catalog → Hybrid recommendation remains valid for pure-catalog content (meta-pattern catalogs; glossaries; non-phase-affined mechanism lists). The new content-type adds precision without contradicting.

**Dim scores:** all PASS.

**Verdict:** **SURVIVE.**

### Candidate C — Cross-spec extension plan

**Prosecution:** is the generalization actually clean for all sister disciplines? Tested above for D6.

**Defense:** mapping confirms 5 disciplines fit; carve-outs for cross-cutting modes are identified per discipline.

**Verdict:** **SURVIVE.**

---

## Phase 3 — Verdicts

| Candidate | Verdict | Notes |
|---|---|---|
| A Integrated edit | SURVIVE with REFINE | Monitor density; optional Recognition column. |
| B Framework refinement | SURVIVE | Clean carve-out. |
| C Cross-spec extension plan | SURVIVE | Generalizes. |
| Cluster A per-phase blocks (7 blocks) | SURVIVE | Content preserved with redundancy elimination. |
| Cluster B insertion points + overview | SURVIVE | Concrete; ready to apply. |
| Cluster C cross-references update | SURVIVE | Existing references continue to work; optional tightening. |
| Cluster D framework + cross-spec + cost | SURVIVE | Honest articulation. |

**0 KILLs. 2 REFINEs absorbed.**

### #3 Nitpicking self-check

The REFINEs target STRUCTURAL concerns (density management; overview enrichment), not minor wording. Per purpose-fitness self-test: the recommendation does what it's supposed to do (provide concrete per-phase blocks + framework refinement) without the REFINEs being applied. REFINEs are improvements, not gating fixes. Not Nitpicking.

### Axis-completeness check

Practical-effect axis included (D10 LLM-consumption + D3 purpose-fitness). No axis absence.

---

## Phase 3.5 — Assembly Check

The integrated deliverable post-REFINE:

> Apply the per-phase placement edit: 7 inline failure-mode blocks at their respective phases (Phase 0: 3; Phase 2: 2; Phase 4: 2) using the refinement-note prefix pattern with "Failure mode" word; a thin §4 overview table (# / Name / Fires at / Inverse-of); a cross-cutting `## Cross-cutting failure modes` end-section for #7. Apply the framework refinement: add new content-type "phase-affined operational guidance" to the prior framework finding via Update Note. Monitor Phase 0 density post-adoption (cluster if overload observed). Optionally add Recognition column to §4 overview if catalog-scan symptom-matching is operationally needed.

**Assembly verdict:** SURVIVES.

---

## Phase 4 — Convergence Telemetry

- **Dimension coverage:** 10/10. 8 CRITICAL + 2 HIGH.
- **Adversarial strength:** STRONG.
- **Landscape stability:** CHANGED (REFINEs absorbed; recommendation tightened).
- **Clean SURVIVE exists:** YES (multiple).
- **Failure modes observed:** 0 (#1 Wrong Dim — D1 calibrated correctly; #2 Rubber-Stamping — prosecution produced REFINEs; #3 Nitpicking — self-check passed; #4 Dim Blindness — practical-effect included; #5 False Convergence — N/A iteration 1; #6 Eval Drift — N/A; #7 Self-Reference Collapse — mitigated via cross-discipline generalization grounding; #8 Axis Absence — checked).

### Signal: **TERMINATE** with ranked survivor

The integrated edit + framework refinement is ready to apply.

### Overall: **PROCEED**
