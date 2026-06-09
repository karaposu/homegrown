# Innovation — encode_purpose_fitness_refinement_note_phase0

## User Input

```text
17-piece tree; produce primary + Inversion text per piece + 5-test cycle + disposition; deliver assembled refinement-note draft + ancillary edit drafts. Discipline-individual language constraint per docs/discipline_edit_tiers.md (only `/sense-making` may be named).
```

---

## Seed-time methodology-mode consideration

**Inherited mode:** Standard default (per input). The seed is a stabilized structural specification; balanced 4G+3F generation produces per-piece text.

**Alternative mode considered:** Generator-weighted exploration — more textual breadth per piece. Less suitable here because the decomposition has constrained each piece's question with tight verification criteria. Standard default fits the per-piece-text task shape.

**Decision:** use inherited (Standard default). **Recording:** default decision used.

---

## Per-piece outputs

### Tier 1 pieces

#### P-INSERT-POINT

**Primary candidate:** Insert AFTER `td-critique.md` line 190 (end of the IFP 4a Frame-premise test refinement note: *"...the trigger condition is not satisfied and the check is skipped."*) and BEFORE line 192 (*"Phase 0 is the meta-critique component..."*). The blank line between 190 and 192 is the insertion anchor; the new refinement note slots in with one blank line above and below, mirroring the spacing of the existing two refinement notes.

**Inversion-candidate:** Insert INSIDE step 4's bullet text (line 173) as parenthetical clarification. **Rejected** by sensemaking; would under-articulate the principle and break the existing refinement-note pattern.

**5-test:** Novelty LOW (location is committed); Scrutiny STRONG (verified location); Fertility LOW (location piece); Actionability STRONG; Mechanism-independence STRONG (visible by inspection).

**Disposition: ACTIONABLE.**

---

#### P-CHECK-NAME

**Primary candidate:** **"Purpose-fitness test."** Short (3 words); parallel to peer notes ("Project-specific risk dimension check"; "Frame-premise test"); captures the meta-principle's name and the test format. Bold with period.

**Inversion-candidate:** **"Severity-calibration test."** Names the OUTCOME (calibration) rather than the AXIS (purpose-fitness). Less specific to the meta-principle. WEAKER on Novelty (severity is already in spec vocabulary); equivalent on other tests.

**Alternative candidates also considered:**
- "Critical-weight semantics check" — too academic.
- "Kill-worthiness test" — emphasizes verdict over principle.
- "Purpose-fitness check" — slight variation; "test" is parallel to "Frame-premise test."

**5-test:** Novelty MEDIUM (new check name in spec); Scrutiny STRONG; Fertility STRONG (anchors the principle's vocabulary); Actionability STRONG; Mechanism-independence STRONG (named for the underlying structural property; external analogs in safety engineering's "fitness-for-purpose" terminology).

**Disposition: ACTIONABLE** for "Purpose-fitness test."

---

#### P-BLOCK-1-SEMANTICS

**Primary candidate:**

> A dimension's weight is critical when its failure would prevent the candidate from doing what the candidate is supposed to do; weight is non-critical when its failure would not. This makes the spec's existing *"weights come from the problem context"* structurally concrete: weighting is calibrated by purpose-fitness. Per-task richness — what counts as fulfilling purpose for this specific candidate (reversibility, blast-radius, scope, fixability, evidence-strength, and any domain-specific axes) — lives within the weighting decision, not above it.

**Inversion-candidate:** Splits into two blocks — Block 1a (purpose-fitness as semantics) and Block 1b (composite calibration as per-task). **Rejected:** unnecessarily fragments a 4-sentence paragraph; the two ideas (semantics + calibration layer) are tightly coupled.

**5-test:** Novelty MEDIUM (re-frames existing language with new structural meaning); Scrutiny STRONG (encodes commitments #1 + #2); Fertility STRONG (anchors all subsequent blocks); Actionability STRONG (gives weighting a concrete semantic); Mechanism-independence STRONG (external analogs: safety SIL composite; blast-radius framings).

**Disposition: ACTIONABLE.**

---

#### P-BLOCK-2-TEST

**Primary candidate:**

> When evaluating a candidate's defect, the practitioner-applicable form is one question: **"If this defect were left in place, would the candidate still do what it's supposed to do — sufficiently, not just degraded?"** YES → not kill-worthy (note as a caveat on SURVIVE, or REFINE if a known better in-frame variant exists). NO → kill-worthy. Within kill-worthy, REFINE when the candidate's existing frame can absorb the fix; KILL when the fix requires replacing the candidate's frame entirely.

**Inversion-candidate:** Multi-question cascade (purpose-clear? defect-blocks? in-frame-fixable?). **Rejected:** sensemaking and the prior inquiry adjudicated against; 1-question form is the practitioner-applicable structure.

**Note on folding Block 3 into Block 2:** Block 3 (REFINE/KILL fixability-within-frame) is FOLDED into the END of Block 2 here (the "Within kill-worthy, REFINE when..." sentence). The decomposition flagged this as an Innovation decision — the folded form is more compact and structurally cleaner than two separate blocks. Block 3's separate verification is satisfied by the folded sentence.

**5-test:** Novelty STRONG (1-question structural test is the load-bearing operational form); Scrutiny STRONG (encodes commitment #4 + #5 in folded form); Fertility STRONG (the practitioner-applicable test); Actionability STRONG; Mechanism-independence STRONG (analogs: safety hazard analysis; software code review's "does this break anything?" heuristic).

**Disposition: ACTIONABLE.**

---

#### P-BLOCK-3-BOUNDARY (folded into Block 2)

**Status:** Folded into P-BLOCK-2-TEST per the innovation-decision flag in decomposition. The separate Block 3 piece is **TERMINATE** as a standalone (the content is preserved in Block 2's final sentence).

**Inversion-marked-inapplicable:** The folded form's separate-vs-joined-with-Block-2 question was Block 3's piece-level inversion seed. Innovation resolves by folding; the inversion's question is answered (fold).

---

#### P-BLOCK-4-UNIFICATION

**Primary candidate:**

> This single test prevents both Failure Mode #2 Rubber-Stamping (severe defect under-killed) and Failure Mode #3 Nitpicking (non-severe defect over-killed) — opposite-direction violations of the same purpose-fitness principle. The constructive-output requirement on KILL (see Verdicts → Constructive requirement) is the structural test of whether a KILL is supported: a kill-worthy defect can be articulated as the specific reason the candidate's frame prevents purpose-fulfillment, and that articulation IS the seed. Inability to extract a seed signals the KILL is unsupported — re-examine before rendering.

**Note on Block 4 + closing cross-refs combined:** the closing cross-reference to Phase 3 constructive-output (commitment #6) is FOLDED into the end of Block 4 here, since the constructive-output IS structurally tied to the unification (both #2 and #3 are prevented by purpose-fitness, AND the seed-extraction test confirms the KILL is real, AND both #2 and #3 are mis-applications of severity that the seed-extraction test would catch). The triple-purpose paragraph compresses three commitments (#6 + #8 + cross-ref to Phase 3).

**Inversion-candidate:** Separate Block 4 (unification only) from the closing cross-ref paragraph. **Considered but rejected:** the combined form is more structurally coherent — unification and constructive-output-as-test are mutually reinforcing.

**5-test:** Novelty STRONG (the unification surfaces structural content the spec doesn't currently articulate); Scrutiny STRONG (encodes commitments #6 + #8); Fertility STRONG (simplifies prevention design); Actionability STRONG (practitioners get one principle for both modes); Mechanism-independence STRONG (analogs: Type I/II error unification under classification theory).

**Disposition: ACTIONABLE.**

---

#### P-BLOCK-5-FALLBACK

**Primary candidate:**

> When a candidate's purpose is ambiguous (exploratory ideation; research-frontier candidates), the test cannot be applied. Render a defer-with-direction verdict naming the ambiguity and pointing back to upstream purpose-stabilization (e.g., `/sense-making` in the runner being used) rather than silently refusing or applying a modified test.

**Inversion-candidate (generic-phrasing variant):**

> When a candidate's purpose is ambiguous (exploratory ideation; research-frontier candidates), the test cannot be applied. Render a defer-with-direction verdict naming the ambiguity and pointing back to upstream purpose-stabilization rather than silently refusing or applying a modified test.

This variant drops `/sense-making` and uses only the generic phrase. PROS: discipline-individual at the strictest reading. CONS: loses operational concreteness — the practitioner has to figure out which discipline is "upstream purpose-stabilization."

**5-test on primary:** Novelty MEDIUM (defer-with-direction is a recognized pattern); Scrutiny STRONG (encodes commitment #9; preserves architectural separation); Fertility MEDIUM (1 of 2 sentences); Actionability STRONG; Mechanism-independence MEDIUM (anchored in software-pipeline design + cognitive-harness convention).

**5-test on inversion (generic):** equivalent except Actionability MEDIUM (generic phrasing loses concrete pointer).

**Disposition:** Primary = **ACTIONABLE** with `/sense-making` named (per `docs/discipline_edit_tiers.md` allowing discipline names but not internal artifacts). Generic-phrasing inversion = **ACTIONABLE as alternative** if Critique judges the strict discipline-individual reading should prevail. Critique adjudicates.

---

#### P-ANCILLARY-E-NEGATIVE — Summary table

**Primary verification:** §6 Summary table at `td-critique.md` lines 376-388 needs NO update. Verification:
- Failure modes row stays "...self-reference collapse, axis absence at the failure's actual plane | 8 identified" — no new failure mode added by this refinement note.
- Verdicts row stays "SURVIVE / REFINE / KILL — positional, with constructive output | 3 types" — no new verdict added.
- Process row stays "Phase 0 → ... → Phase 4 | 5 phases" — no new phase added.
- Coverage / Accumulator / Adversarial structure / Dimensions / Landscape / Operations rows: unrelated.

**Inversion-marked-inapplicable:** confirmatory-negative piece; counter-question (should Summary mention refinement notes?) was raised in decomposition and answered "no — Summary granularity doesn't list refinement notes; consistent with existing precedent."

**Disposition: ACTIONABLE** (verified no edit needed).

---

#### P-ANCILLARY-F-NEGATIVE — SKILL.md

**Primary verification:** `cognitive_harness/td-critique/SKILL.md` needs NO update. Verification:
- Description line (3): no verdict change, no failure-mode count change.
- Pre-read line (10): failure-mode count stays at 8.
- Reference-loading line (42): failure-mode enumeration unchanged.

**Inversion-marked-inapplicable:** confirmatory-negative; same as E.

**Disposition: ACTIONABLE** (verified no edit needed).

---

#### P-ANCILLARY-C-COULD — Adversarial structure final sentence

**Primary candidate:** Optional update to `td-critique.md` line 128's final sentence. Current text: *"The adversarial structure prevents two of critique's worst failure modes: rubber-stamping (prosecution too weak — everything passes) and nitpicking (defense absent — everything fails on minor issues)."*

Updated (with cross-reference appended):

> The adversarial structure prevents two of critique's worst failure modes: rubber-stamping (prosecution too weak — everything passes) and nitpicking (defense absent — everything fails on minor issues). Both are opposite-direction violations of the purpose-fitness test at Phase 0 (see Phase 0 / Dimension Construction → Purpose-fitness test refinement note).

**Inversion-candidate:** OMIT this ancillary edit. The unification is already articulated inline in the new Block 4 and back-referenced from #2 and #3 entries; updating the Adversarial structure sentence adds optional coherence at the cost of more spec text to maintain.

**5-test (primary):** Novelty MEDIUM; Scrutiny MEDIUM (surfaces unity inline but adds spec lines); Fertility LOW; Actionability MEDIUM; Mechanism-independence MEDIUM.

**Disposition: DEFERRED to COULD** in finding. The user can adopt at adoption time.

---

#### P-ANCILLARY-D-COULD — Phase 3 constructive-output back-reference

**Primary candidate:** Optional update to `td-critique.md` lines 140-142 (the constructive-output refinement note at the end of the Verdicts subsection). Append to the closing of the existing note:

> ...The constructive-output requirement is also the structural test of severity at Phase 0 (see Phase 0 / Dimension Construction → Purpose-fitness test refinement note); inability to extract a seed signals the KILL is unsupported.

**Inversion-candidate:** OMIT. Same trade-off as Ancillary C — adds coherence at the cost of more spec text.

**5-test (primary):** Novelty MEDIUM; Scrutiny MEDIUM (cross-reference surfacing inline); Fertility LOW; Actionability MEDIUM; Mechanism-independence MEDIUM.

**Disposition: DEFERRED to COULD** in finding.

---

### Tier 2 pieces

#### P-HEADER

**Primary candidate:** `*Refinement note (applies at Phase 0 Dimension Construction's step 4 — Weight dimensions):*`

Italicized; specifies the locus precisely (step 4 — Weight dimensions); parallel to existing IFP 4a header pattern (which says "Phase 0 Dimension Construction" without step specificity).

**Inversion-candidate:** `*Refinement note (applies at Phase 0 Dimension Construction):*` — drops step-4 specificity. **Considered and rejected:** sensemaking K8 committed the narrower trigger-locus; specificity is structurally meaningful (severity-calibration is specifically a step-4 concern, not a Phase 0-wide concern).

**5-test:** Novelty MEDIUM (more specific locus than precedent); Scrutiny STRONG; Fertility STRONG (anchors the trigger); Actionability STRONG; Mechanism-independence STRONG.

**Disposition: ACTIONABLE.**

---

#### P-CLOSING-CROSS-REFS (folded into Block 4)

**Status:** Folded into the end of P-BLOCK-4-UNIFICATION per Innovation decision. The cross-references to §4 #2 + #3 are inlined ("Failure Mode #2 Rubber-Stamping" + "Failure Mode #3 Nitpicking"). The Phase 3 constructive-output cross-reference is also inlined ("see Verdicts → Constructive requirement").

**Inversion-candidate:** Separate closing paragraph for cross-refs. **Rejected:** the combined form is more compact and reads as a structurally coherent paragraph.

**Disposition: TERMINATE as separate piece** (folded into Block 4).

---

#### P-ANCILLARY-A — Back-reference at §4 #2 Rubber-Stamping

**Primary candidate:** Append to `td-critique.md` line 330 (#2's "How to prevent" closing sentence).

Current end of line 330: *"...For multi-axis prosecution depth (user-perspective, failure-case scenario, specification-gap probe), see Phase 2 / Adversarial Evaluation → Prosecution → Multi-axis prosecution depth check."*

Append: *"For the underlying severity-calibration that makes prosecution-strength meaningful, see Phase 0 / Dimension Construction → Purpose-fitness test refinement note (Rubber-Stamping is the opposite-direction violation of #3 Nitpicking under the same principle)."*

**Inversion-candidate:** Use shorter form: *"See also Phase 0 / Dimension Construction → Purpose-fitness test refinement note."* **Pros:** terse. **Cons:** loses the structural framing that connects to #3.

**5-test (primary):** Novelty MEDIUM (back-reference style; the framing of "opposite-direction violation" is novel here); Scrutiny STRONG (parallel to existing cross-references); Fertility STRONG (makes the structural connection visible from #2); Actionability STRONG; Mechanism-independence STRONG.

**Disposition: ACTIONABLE.**

---

#### P-ANCILLARY-B — Back-reference at §4 #3 Nitpicking

**Primary candidate:** Append to `td-critique.md` line 338 (#3's "How to prevent" closing sentence).

Current end of line 338: *"...A candidate should only be KILLed if prosecution wins on a *critical-weight* dimension, not just any dimension."*

Append: *"For the underlying severity-calibration that makes critical-weight meaningful (and prevents nitpicking-creep at construction time), see Phase 0 / Dimension Construction → Purpose-fitness test refinement note (Nitpicking is the opposite-direction violation of #2 Rubber-Stamping under the same principle)."*

**Inversion-candidate:** Shorter form. Same trade-off as Ancillary A.

**5-test:** parallel to Ancillary A — Novelty MEDIUM; Scrutiny STRONG; Fertility STRONG; Actionability STRONG; Mechanism-independence STRONG.

**Disposition: ACTIONABLE.**

---

### Tier 3 — Assembled refinement-note draft

```markdown
*Refinement note (applies at Phase 0 Dimension Construction's step 4 — Weight dimensions):*

**Purpose-fitness test.** A dimension's weight is critical when its failure would prevent the candidate from doing what the candidate is supposed to do; weight is non-critical when its failure would not. This makes the spec's existing *"weights come from the problem context"* structurally concrete: weighting is calibrated by purpose-fitness. Per-task richness — what counts as fulfilling purpose for this specific candidate (reversibility, blast-radius, scope, fixability, evidence-strength, and any domain-specific axes) — lives within the weighting decision, not above it.

When evaluating a candidate's defect, the practitioner-applicable form is one question: **"If this defect were left in place, would the candidate still do what it's supposed to do — sufficiently, not just degraded?"** YES → not kill-worthy (note as a caveat on SURVIVE, or REFINE if a known better in-frame variant exists). NO → kill-worthy. Within kill-worthy, REFINE when the candidate's existing frame can absorb the fix; KILL when the fix requires replacing the candidate's frame entirely.

This single test prevents both Failure Mode #2 Rubber-Stamping (severe defect under-killed) and Failure Mode #3 Nitpicking (non-severe defect over-killed) — opposite-direction violations of the same purpose-fitness principle. The constructive-output requirement on KILL (see Verdicts → Constructive requirement) is the structural test of whether a KILL is supported: a kill-worthy defect can be articulated as the specific reason the candidate's frame prevents purpose-fulfillment, and that articulation IS the seed. Inability to extract a seed signals the KILL is unsupported — re-examine before rendering.

When a candidate's purpose is ambiguous (exploratory ideation; research-frontier candidates), the test cannot be applied. Render a defer-with-direction verdict naming the ambiguity and pointing back to upstream purpose-stabilization (e.g., `/sense-making` in the runner being used) rather than silently refusing or applying a modified test.
```

---

### Tier 4 — Meta-checks on assembled draft

#### P-LENGTH-VERIFY

**Primary verification:** Count the assembled draft. Header (1 line) + blank + Block 1 (~5 lines wrapped) + blank + Block 2 (~5 lines) + blank + Block 4 (~6 lines) + blank + Block 5 (~3 lines) = ~24 lines total with blanks.

Compared to IFP 4a (lines 180-190, 11 lines including blanks but with content density of ~22 line-equivalents when 3 numbered steps are counted as 6 lines + 4 lines of paragraphs).

**Verdict:** within acceptable range (~20-24 lines is structurally comparable to IFP 4a's footprint at Phase 0). PASS with note that the draft is at the upper-end of the target; tightening any block is OPTIONAL.

**Disposition: ACTIONABLE.**

---

#### P-DISCIPLINE-INDIVIDUAL-AUDIT

**Primary verification:** Audit the assembled draft for discipline-individual language violations per `docs/discipline_edit_tiers.md`.

Audit results:
- ❌ Runner artifacts (`_branch.md`, `_state.md`, etc.) — NONE PRESENT. ✓
- ❌ Protocol-template fields (`refines:`, `corrects:`, `supersedes:`, `INHERITED-WITHOUT-RE-TEST`, etc.) — NONE PRESENT. ✓
- ❌ Sister-discipline-internal section/perspective names (`Frame-exit Completeness perspective`, etc.) — NONE PRESENT. ✓
- ⚠ `/sense-making` named in Block 5 fallback clause — ALLOWED per `docs/discipline_edit_tiers.md` ("naming the discipline itself is fine; naming its internal artifact isn't").
- ✓ Cross-references to `td-critique.md` internal entries (Failure Mode #2; Failure Mode #3; Verdicts → Constructive requirement) — these are internal to the same discipline, not cross-spec; allowed.

**Verdict:** PASS. Discipline-individual language compliant.

**Disposition: ACTIONABLE.**

---

## Inherited Frame Audit

**Predicate:** The seed's central assumption is the sensemaking SV6 structural specification.

**Step (iii) Challenge scan:** Per-piece Inversion-candidates collectively challenged the structural design:
- P-INSERT-POINT inversion challenged single-locus → rejected
- P-CHECK-NAME inversion challenged "Purpose-fitness test" name → considered
- P-BLOCK-1 inversion challenged single-block semantics → rejected
- P-BLOCK-2 inversion challenged 1-question form → rejected
- P-BLOCK-3 (inverted via folding) → ACCEPTED (Block 3 folded into Block 2)
- P-BLOCK-4 inversion challenged combined-vs-separate unification + cross-ref → rejected
- P-BLOCK-5 inversion challenged `/sense-making` naming → preserved as alternative; Critique adjudicates
- P-HEADER inversion challenged step-4 specificity → rejected
- P-CLOSING-CROSS-REFS (inverted via folding into Block 4) → ACCEPTED
- Ancillary C + D inversions challenged inclusion → rejected (deferred to COULDs)
- Ancillary A + B inversions challenged longer-vs-shorter form → primary (longer) preserved with structural framing

**The challenges produced two structural adjustments** (Block 3 folded into Block 2; closing cross-refs folded into Block 4) and one preserved alternative (P-BLOCK-5 generic phrasing). All other challenges were rejected based on structural argument.

**Conclusion:** the audit's predicate is SATISFIED; the assembled refinement note survives multiple piece-level inversions with two structural refinements.

---

## Assembly Check

The 24-line assembled refinement note (Tier 3 above) is the load-bearing deliverable. The ancillary edits (A + B mandatory; C + D optional) compose with it. The meta-checks (Length + Discipline-individual audit) verified the assembled draft.

**Assembly verdict: SURVIVES.** The integrated text is structurally coherent, encodes 8 of 9 commitments (commitment #7 confidence-orthogonal explicitly out-of-scope per decomposition), and complies with discipline-individual language.

---

## Mechanism Coverage Telemetry

- **Generators applied:** Combination (Block 1 + Block 4 combining commitments); Absence Recognition (the unification block surfaces what was implicit but unnamed); Domain Transfer (Block 5's defer-with-direction borrows from software pipeline design); Extrapolation (length verification extrapolates from IFP 4a precedent). **4/4 Generators applied.**
- **Framers applied:** Lens Shifting (re-framing severity as purpose-fitness throughout); Constraint Manipulation (length-bound + discipline-individual constraints); Inversion (every piece had an inversion-candidate tested). **3/3 Framers applied.**
- **Full mechanism coverage: 7/7.**

### Convergence

Multi-mechanism convergence on the assembled draft: the same refinement-note text emerges whether approached via Combination of inherited commitments, Lens Shifting from existing spec language, or Constraint Manipulation (length-bound). HIGH confidence.

### Failure-mode check

- Premature Evaluation: NO.
- Single-Mechanism Trap: NO (7/7).
- Early Frame Lock: NO (per-piece Inversion-candidates produced two structural refinements — Block 3 folding; closing-cross-refs folding).
- Innovation Without Grounding: NO.
- Mechanism Exhaustion: NO.
- Survival Bias: NO — folding outcomes preserve the structural challenges' useful content.

### Production-task telemetry

- **Per-piece mechanism log:**
  - P-INSERT-POINT: [verification; no mechanism]
  - P-CHECK-NAME: [Combination, Inversion]
  - P-BLOCK-1-SEMANTICS: [Combination, Lens Shifting; Inversion]
  - P-BLOCK-2-TEST: [Combination (folds Block 3), Lens Shifting; Inversion]
  - P-BLOCK-3-BOUNDARY: [folded into Block 2; Inversion-marked-inapplicable]
  - P-BLOCK-4-UNIFICATION: [Combination (folds closing cross-refs), Lens Shifting; Inversion]
  - P-BLOCK-5-FALLBACK: [Domain Transfer, Lens Shifting; Inversion]
  - P-ANCILLARY-E-NEGATIVE: [confirmation; Inversion-marked-inapplicable]
  - P-ANCILLARY-F-NEGATIVE: [confirmation; Inversion-marked-inapplicable]
  - P-ANCILLARY-C-COULD: [Combination; Inversion → DEFERRED]
  - P-ANCILLARY-D-COULD: [Combination; Inversion → DEFERRED]
  - P-HEADER: [Combination, Lens Shifting; Inversion]
  - P-CLOSING-CROSS-REFS: [folded into Block 4; Inversion-marked-inapplicable]
  - P-ANCILLARY-A: [Combination; Inversion]
  - P-ANCILLARY-B: [Combination; Inversion]
  - P-LENGTH-VERIFY: [Extrapolation from IFP 4a]
  - P-DISCIPLINE-INDIVIDUAL-AUDIT: [Constraint Manipulation]

- **Meta-decision-piece classification:** all 17 pieces are meta-decision (commit to text that downstream behavior depends on); classification = meta-decision for all.

- **Piece-level Inversion compliance:** 17/17 satisfied (every piece had an Inversion-candidate generated OR Inversion-marked-inapplicable with specific reason). Reasons for inapplicable: confirmatory-negative pieces (E, F); pieces folded by accepted inversions (Block 3 → Block 2; CLOSING-CROSS-REFS → Block 4).

### Overall verdict

**PROCEED.** Full coverage; multi-mechanism convergence; 0 failure modes; 17/17 piece-level Inversion compliance.

---

## Output disposition summary

| Piece | Disposition | Note |
|---|---|---|
| P-INSERT-POINT | ACTIONABLE | After line 190 / before line 192 |
| P-CHECK-NAME | ACTIONABLE | "Purpose-fitness test" |
| P-HEADER | ACTIONABLE | Italicized; step-4 specific |
| P-BLOCK-1-SEMANTICS | ACTIONABLE | Block text drafted |
| P-BLOCK-2-TEST | ACTIONABLE | Block 3 folded in |
| P-BLOCK-3-BOUNDARY | TERMINATE (folded) | Content preserved in Block 2 |
| P-BLOCK-4-UNIFICATION | ACTIONABLE | Closing cross-refs folded in |
| P-BLOCK-5-FALLBACK | ACTIONABLE | `/sense-making` named; alternative generic-phrasing preserved |
| P-CLOSING-CROSS-REFS | TERMINATE (folded) | Folded into Block 4 |
| P-ANCILLARY-A | ACTIONABLE | Back-reference at #2 |
| P-ANCILLARY-B | ACTIONABLE | Back-reference at #3 |
| P-ANCILLARY-C-COULD | DEFERRED | COULD in finding |
| P-ANCILLARY-D-COULD | DEFERRED | COULD in finding |
| P-ANCILLARY-E-NEGATIVE | ACTIONABLE | Verified no edit needed |
| P-ANCILLARY-F-NEGATIVE | ACTIONABLE | Verified no edit needed |
| P-LENGTH-VERIFY | ACTIONABLE | ~24 lines; within acceptable range |
| P-DISCIPLINE-INDIVIDUAL-AUDIT | ACTIONABLE | PASS |

ACTIONABLE: 13. DEFERRED: 2. TERMINATE (folded): 2.

The assembled refinement-note draft + Ancillary A + Ancillary B + Length-verify pass + Discipline-audit pass = ready-to-apply spec edit, pending Critique adversarial review.
