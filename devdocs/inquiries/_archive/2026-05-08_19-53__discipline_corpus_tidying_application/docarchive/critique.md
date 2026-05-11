# Critique — Discipline-corpus tidying application

## User Input

```
Evaluate 6 ACTIONABLE proposals + Pattern B deferral + bundling note.
Phase 0 dimensions from sensemaking + project-specific (anchor-link quality).
Multi-axis prosecution per ACTIONABLE. Pay attention to: Q3 anchor-link decision;
Q3 SPLIT flow disruption; Pattern B deferral strategy; Q1 spec addendum length.
```

---

## Phase 0 — Dimension Construction

### Dimensions extracted

| Dimension | What it asks | Source | Weight |
|---|---|---|---|
| **Phase-fit precision compliance** | Does the proposal honor descriptive-at-machinery + active-at-maintenance? Does it avoid mechanical enforcement while embracing routine tidying? | Sensemaking SV6 | HIGH (kill if violated) |
| **Three-Forms framing alignment** | Does the proposal correctly tag candidates by Form / sub-type and apply the matching recipe? | Sensemaking SV6 | HIGH |
| **Placement-convention compliance** | Does the proposal respect `enes/discipline_rule_placement.md`'s one-canonical-home rule? | Corpus rule | HIGH |
| **Prior-inquiry preservation** | Does the proposal preserve the prior inquiry's verdicts (REFINES not SUPERSEDES)? | Inquiry framing | HIGH |
| **"Brushing teeth" responsiveness** | Does the proposal honor the user's framing — concrete actions, not heavy machinery? Specifically for Q3: does it address what was missed in the surgical-2-lines answer? | User's `_branch.md` + pushback | HIGH (user-perspective axis) |
| **Corpus coherence** | Does the proposal fit existing corpus voice and structure? | Standard | HIGH |
| **Feasibility** | Can the proposed edits be applied? | Standard | HIGH |
| **Anchor-link decision quality** | For Q3: is the Accommodation-trigger → Premature-Stabilization anchor sound, or does it conflate distinct failure modes? | Project-specific | HIGH (kill if conflation is severe) |

### Project-specific risk dimension check

Per the bolted-on rule: when candidates touch project artifacts (here: 5 disciplines + 1 spec file + the failure-mode catalog of each discipline), include risk axes specific to those artifacts. The two most load-bearing project-specific risks are: **anchor-link decision quality** (does anchoring conflate distinct failure modes?) and **prior-inquiry preservation** (does this loop's REFINES claim hold up under inspection?). Both included as HIGH-weight.

### Validation

If a candidate passed all 8 dimensions, would the inquiry's deliverable (per-discipline tidy plans + spec addendum) actually be implementable and aligned with sense-making's stabilized model? Yes — the dimensions span goal achievement, corpus fit, framing alignment, and the specific technical risks (anchor-link). No dimension blindness detected.

---

## Phase 1 — Landscape Construction

### Viable region

Proposal honors phase-fit precision + Three-Forms framing + placement convention + prior-inquiry preservation + "brushing teeth" + corpus coherence + feasibility + sound anchor-link decisions.

### Dead region

Proposals that violate phase-fit (mechanical enforcement) OR mistag forms (e.g., calling Form 3 a Form 2 and lifting it inappropriately) OR conflate distinct failure modes in anchor-link decisions.

### Boundary region

Technically valid but with refinement targets — usually around scope clarification, additional criteria, or anchor-link soundness.

### Unexplored region

The Pattern B uniform deferral and the bundling-with-contract strategic note are interrelated; whether to bundle vs. separate is a strategic decision that this critique evaluates but doesn't prescribe.

---

## Phase 2 — Adversarial Evaluation

### Q1 — Spec addendum (Three Forms + Lifting Recipes + Phase-fit precision)

**Prosecution (multi-axis):**

| Axis | Strongest objection |
|---|---|
| Dimension-level (length / corpus coherence) | The addendum adds ~80-120 lines to a 173-line file. Doubling its size is closer to renovation than brushing-teeth maintenance |
| User-perspective ("brushing teeth") | The user said "brushing teeth, every morning." Adding a 100-line addendum to a spec file is multiple sessions of brushing, not one. Risk of "scope creep" reading |
| Specific failure-case scenario | A future contributor reads `enes/step_refinement.md` and sees Three Forms / 4 sub-types / 4 lifting recipes / Phase-fit precision. Information overload? Or right level of detail? |
| Specification-gap probe | The addendum says "this spec acknowledges Form 3; it does not prescribe when to choose Form 3 over Form 1." A future contributor needs criteria for HOW to recognize Form 3 fit. The acknowledge-don't-prescribe stance leaves them without guidance |

**Defense:**

- The existing file uses multi-section format with detailed sub-sections (the existing "The 4-Element Shape" has 4 sub-sections, one per element; "Two Subtypes" has 2 sub-sections). Three Forms + 4 sub-types is structurally consistent with this voice. The length objection underweights the file's existing conventions.
- The addendum is descriptive, not prescriptive. Future contributors who don't need the lifting recipes can skip them; the recipes are reference material, not mandatory reading.
- The Form-3 specification-gap is real but narrow. Adding a brief criterion sentence (e.g., "Form 3 fits when the rule's content can be integrated as part of the canonical procedure such that following the procedure naturally fires the rule") closes the gap without much added length.
- Phase-fit precision is one paragraph; not heavy.

**Collision:**

The length objection has weight but the value-per-line is high — each section names a real corpus phenomenon contributors will encounter. The specification-gap concern is real and bounded; can be addressed by a small criterion addition.

**Verdict: SURVIVE with REFINE.** Add a brief Form-3-fit-criterion sentence to close the specification gap.

**Refine target:** in the Form 3 sub-section, add: *"Form 3 fits when the rule's content can be integrated into the canonical procedure such that following the procedure naturally fires the rule, and the rule's anchor-link is implicit in the procedure's structure rather than cited as a separate sentence."* This acknowledges Form 3 without prescribing when to choose it, while giving contributors a recognition criterion.

---

### Q2 — `/explore` plan (4 edits)

**Prosecution:**

| Axis | Strongest objection |
|---|---|
| Dimension-level (Form tagging) | Is "completeness before novelty" really Form 2 (FM-buried) — or is it Form 3 (absorbed into Scan component's possibility-mode spine)? The decision affects whether to LIFT or LEAVE-AS-FORM-3 |
| User-perspective | 4 edits, ~30 min — well-matched to "brushing teeth" framing |
| Specific failure-case scenario | After lifting jump scan to Phase 4 Convergence Assessment, the False-Confidence failure mode's Corrective sentence becomes shorter (just a back-reference). Is the failure-mode body still self-explanatory? |
| Specification-gap probe | LIFT recipes specify location, name, and back-reference. Body content for the new standalone refinements is described but not fully written out — innovation gave the structure, not the final wording |

**Defense:**

- The Form-tag question is testable: "completeness before novelty" content is currently in Completeness Bias's Corrective sentence — buried in a failure-mode section, not in the Scan component's spine. Form 2 FM-buried is the correct tag. (Form 3 would require it being IN Scan's spine procedure.)
- The False-Confidence body remains self-explanatory because the corrective still describes the recognition signal + general remediation; only the specific "jump scan" rule is lifted out.
- Body wording for new standalone refinements can be drafted during application; the structure is fixed.

**Collision:**

The Form-tag concern doesn't survive testing. Specification-gap is small (body wording) and resolvable at application time.

**Verdict: SURVIVE.**

---

### Q3 — `/sense-making` plan (6 edits, highest accountability)

**Prosecution (multi-axis, deeper than other plans):**

| Axis | Strongest objection |
|---|---|
| Anchor-link decision quality | The plan anchors Accommodation trigger to **Premature Stabilization (FM #2) "model-misfit axis"**. But Premature Stabilization fires when stabilization happens TOO EARLY (fewer than 3 perspectives produced surprises) — a *quantity-of-testing* failure. Accommodation trigger fires when stabilization is ATTEMPTED but the model keeps requiring revision (multiple perspectives DO produce destabilizing anchors) — a *quality-of-model* failure. **The corrective is also different:** PS corrective = "test more perspectives"; Accommodation corrective = "rebuild model from anchor extraction." Anchoring conflates distinct failures. |
| Dimension-level (SPLIT flow disruption) | Splitting Phase / Calibration-State into a short bullet + a standalone refinement creates visual asymmetry in the perspective list. Other perspectives don't have standalone refinements. A reader unfamiliar with the corpus might read this as "Phase / Calibration-State is more important than other perspectives" rather than "Phase / Calibration-State is a Step Refinement." |
| User-perspective ("brushing teeth" + pushback responsiveness) | This plan is the highest-accountability piece. Specifically test: does it address what the prior inquiry's surgical-2-lines answer missed? |
| Specific failure-case scenario | After SPLIT, the bullet says "Phase / Calibration-State (when the inquiry involves rules that may behave differently in different project phases or calibration states)" — and the standalone refinement says the same thing more verbosely. Risk of redundancy. |
| Specification-gap probe | The Accommodation trigger's failure-mode link rationale is documented; the SPLIT recipe is fully specified. But the rule for how to update Premature Stabilization's body to acknowledge "two axes" (early-clarity-arrival + model-misfit) is described in prose, not as an explicit edit |

**Defense:**

- **Anchor-link quality (the load-bearing concern):** Premature Stabilization's existing body acknowledges that the failure has multiple recognition signals. The plan explicitly adds the model-misfit axis as a distinct sub-pattern under PS. Anchoring under a unified failure mode (with explicit axis distinction) is the conservative call given N=1 instance of model-misfit-induced premature stabilization. Naming a NEW failure mode from N=1 would be premature codification — the same trap the prior-prior inquiry warned against. **However** — the conflation concern is real enough that critique should add a frontier flag: if more model-misfit instances accumulate (across other disciplines), revisit and consider promoting to a new failure mode.
- **SPLIT visual asymmetry:** the asymmetry IS the point. Phase / Calibration-State is the ONLY perspective in the list that's also a Step Refinement; the others are pure perspective definitions. The visual marker `*Refinement note (applies at ...):*` is the signal. Future contributors who know the spec recognize the marker. The asymmetry signals correctly: this perspective is special because it doubles as a refinement.
- **User-perspective accountability:** the plan addresses everything the prior surgical-2-lines answer missed — Phase/Calibration-State SPLIT (was pure visual-marker before), Accommodation trigger LIFT (was unmentioned before), Form-3 acknowledgment for the structured ambiguity entry template (was unaddressed before). Direct response to the user's pushback.
- **SPLIT redundancy:** the bullet and the refinement are NOT identical. Bullet = perspective name + trigger condition (one sentence). Refinement = trigger condition + required action + failure-mode-link sentence (multi-sentence). They share the trigger condition; the refinement adds the action and the link. Light overlap, not redundancy.
- **PS body update specification:** the prose description in innovation is sufficient; explicit edit can be drafted at application time. Specification-gap is small.

**Collision:**

The anchor-link conflation concern is the strongest. It would be more cleanly resolved by naming a new failure mode, but doing so from N=1 violates phase-fit conservatism. The plan's anchor-to-PS-with-axis-distinction is the right conservative call **provided** the frontier flag is added: revisit if more model-misfit instances emerge.

**Verdict: SURVIVE with REFINE.** Add a frontier flag to the Accommodation-trigger anchor decision.

**Refine target:** append to the plan: *"Frontier flag: if other disciplines reveal model-misfit-induced premature-stabilization instances (N≥2 across the corpus), revisit this anchor decision and consider promoting Accommodation trigger to a separate named failure mode (e.g., 'Forced Stabilization' or 'Model Misfit'). Until then, anchor-to-Premature-Stabilization-with-axis-distinction is the conservative choice."*

---

### Q4 — `/decompose` plan (3 edits)

**Prosecution:**

| Axis | Strongest objection |
|---|---|
| Dimension-level (redundancy) | The lifted "Assumptions-not-data check" at Step 5 might be redundant with Step 5's existing guidance ("Trace what flows between pieces... Is the flow data, a dependency, a prerequisite, a resource, information?") |
| User-perspective | 3 edits, ~20 min — minimal "brushing teeth" |
| Specific failure-case scenario | A reader at Step 5 sees both the existing flow-types list AND the new Assumptions-not-data refinement. Do they overlap? |
| Specification-gap probe | LIFT recipe + body text + cross-reference all specified. Adequate. |

**Defense:**

- The existing Step 5 guidance asks "what flows" — types of flows (data / dependency / prerequisite / resource / information). The Assumptions-not-data refinement is about the **assumption layer** — "what assumptions does each piece make about what the other provides?" Assumptions are different from flows; the existing guidance doesn't cover them. The lift adds a real checkpoint, not a duplicate.
- The original Hidden Coupling failure-mode body explicitly distinguishes assumptions from flows ("Hidden coupling hides in assumptions, not in data"). Lifting this to a Step-5 refinement makes the distinction structural, not just documented in the failure-mode section.

**Collision:**

The redundancy objection doesn't survive — assumption-checking is genuinely distinct from flow-type-checking.

**Verdict: SURVIVE.**

---

### Q5 — `/innovate` plan (3 visual markers)

**Prosecution:**

| Axis | Strongest objection |
|---|---|
| Dimension-level (Inversion depth check placement) | The visual marker for Inversion depth check says "applies at Inversion mechanism." Should it say "applies at Phase 2 Generate" (where mechanisms are applied)? |
| User-perspective | 3 edits, ~15 min — pure surgical maintenance |
| Specific failure-case scenario | None significant — visual markers are non-disruptive |
| Specification-gap probe | All 3 markers specified by location |

**Defense:**

- Inversion depth check applies SPECIFICALLY to the Inversion mechanism (other mechanisms — Combination, Domain Transfer, etc. — don't have a depth check). Component-level placement ("Inversion mechanism") is more precise than phase-level ("Phase 2 Generate"). The Step Refinement spec's 4-element shape allows component-level anchoring.

**Collision:**

The placement question is settled by precision. Component-level wins.

**Verdict: SURVIVE.**

---

### Q6 — `/td-critique` plan (3 edits)

**Prosecution:**

| Axis | Strongest objection |
|---|---|
| Dimension-level (CONVERT-TO-STANDALONE for Constructive requirement) | Is Constructive requirement really a Step Refinement, or is it part of Phase 3's spine (a meta-rule about how the verdict types work)? |
| User-perspective | 3 edits, ~20 min — bounded |
| Specific failure-case scenario | After CONVERT-TO-STANDALONE, the Constructive requirement appears as a separate refinement after the SURVIVE/REFINE/KILL descriptions. Does this break Phase 3's narrative flow? |
| Specification-gap probe | All 3 edits specified |

**Defense:**

- Constructive requirement has the 4-element shape: name (Constructive requirement); trigger (every KILL or REFINE verdict); action (must include constructive output — seed for KILL; direction for REFINE); anchor-link (coverage-anchored — preventing kills-without-seeds and refines-without-direction). It's a discrete rule that meta-applies to all three verdict types. Form 1 standalone is correct.
- Phase 3's narrative flow: SURVIVE → REFINE → KILL → Constructive requirement (which references all three). The rule already appears AFTER the verdict-type descriptions; CONVERT-TO-STANDALONE just adds the visual marker, not relocating. Flow preserved.

**Collision:**

Both objections resolved.

**Verdict: SURVIVE.**

---

### Cross-piece — Pattern B uniform deferral + bundling note

**Prosecution:**

The Pattern B uniform deferral assumes `homegrown/contracts/discipline_output.md` will ship later. If it never ships, the verdict-line gap stays open indefinitely across all 5 disciplines. The bundling strategic note recommends creating the contract alongside per-discipline passes — but the user might do per-discipline passes WITHOUT creating the contract, leaving the gap open.

**Defense:**

- The contract is the prior inquiry's deferred MUST item; the user already knows it's needed. The strategic note surfaces the bundling option but doesn't gate per-discipline passes on contract creation. Per-discipline passes can ship without Pattern B; Pattern B work can be a separate sweep later.
- Worst case: per-discipline passes ship without Pattern B; verdict-line gap stays open; user runs a separate Pattern B sweep when contract ships. Total work is the same; just split into two phases instead of one. Phase-fit conservatism allows this.

**Collision:**

The deferral is acceptable; the bundling note is a useful strategic recommendation. Neither requires changes.

**Verdict: SURVIVE** (no changes; strategic note stays as-is).

---

## Phase 3.5 — Assembly Check

### Survivors

| Proposal | Verdict |
|---|---|
| Q1 (spec addendum) | SURVIVE with REFINE — add Form-3-fit-criterion sentence |
| Q2 (`/explore` plan) | SURVIVE |
| Q3 (`/sense-making` plan) | SURVIVE with REFINE — add anchor-link frontier flag |
| Q4 (`/decompose` plan) | SURVIVE |
| Q5 (`/innovate` plan) | SURVIVE |
| Q6 (`/td-critique` plan) | SURVIVE |
| Pattern B deferral + bundling note | SURVIVE |

### Assembly emergent

Combined application of Q1+Q2-Q6 produces: 1 spec file change + 5 discipline spec edits + ~5 cross-reference fixes + 5 deferred Pattern B verdict-line additions. **Total ~22 concrete edits** across the corpus, distributable per-discipline at the user's pace.

**Emergent property:** the per-discipline plans plus the Q1 spec addendum plus the prior inquiry's `enes/step_refinement.md` together form the corpus's **discipline-spec maintenance toolkit**. Future tidy passes (whether for the disciplines tidied here or for new disciplines) follow the same pattern: audit (catalog candidates) → tag (Form 1/2/3 + sub-type) → decide (lift / leave / restructure) → edit (visual marker + body + cross-reference). The toolkit emerges; this inquiry's deliverables formalize it.

This emergent property is worth noting but not promoting to a new artifact in this inquiry. Future tidying passes can reference these deliverables as the canonical worked example.

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage

All 6 ACTIONABLE proposals + the Pattern B / bundling note evaluated. Coverage complete.

### Convergence

- 4 clean SURVIVEs (Q2, Q4, Q5, Q6) + 2 REFINEs (Q1 with Form-3 criterion; Q3 with anchor-link frontier flag) + 1 SURVIVE on Pattern B / bundling.
- Adversarial testing was strong (multi-axis prosecution per ACTIONABLE; deeper for Q3 per accountability flag).
- Landscape did not change during Phase 2.

**Signal: TERMINATE with ranked survivors.** The two REFINEs are scope clarifications, not rework.

---

## Final Deliverable

### (a) Dimensions with weights

| Dimension | Weight |
|---|---|
| Phase-fit precision compliance | HIGH (kill if violated) |
| Three-Forms framing alignment | HIGH |
| Placement-convention compliance | HIGH |
| Prior-inquiry preservation | HIGH |
| "Brushing teeth" responsiveness | HIGH |
| Corpus coherence | HIGH |
| Feasibility | HIGH |
| Anchor-link decision quality | HIGH (project-specific) |

### (b) Fitness Landscape

- **Viable region:** Q2, Q4, Q5, Q6 (clean SURVIVEs); Pattern B + bundling note (clean SURVIVE)
- **Boundary region:** Q1 (REFINE — Form-3 criterion); Q3 (REFINE — anchor-link frontier flag)
- **Dead region:** none — innovation already killed contrarian options before critique
- **Unexplored region:** alternative anchor for Accommodation trigger (a new failure mode "Model Misfit" or "Forced Stabilization") — deferred behind the frontier flag in Q3's REFINE

### (c) Candidate Verdicts

| ID | Candidate | Verdict | Constructive output |
|---|---|---|---|
| Q1 | Spec addendum | **SURVIVE / REFINE** | Add Form-3-fit-criterion sentence to Form 3 sub-section: "Form 3 fits when the rule's content can be integrated into the canonical procedure such that following the procedure naturally fires the rule, and the rule's anchor-link is implicit in the procedure's structure rather than cited as a separate sentence." |
| Q2 | `/explore` plan | **SURVIVE** | Apply 4 edits as specified. |
| Q3 | `/sense-making` plan | **SURVIVE / REFINE** | Apply 6 edits as specified. Add frontier flag to Accommodation-trigger anchor decision: "if N≥2 model-misfit instances emerge across the corpus, revisit and consider promoting to a separate named failure mode (e.g., 'Forced Stabilization' or 'Model Misfit')." |
| Q4 | `/decompose` plan | **SURVIVE** | Apply 3 edits as specified. |
| Q5 | `/innovate` plan | **SURVIVE** | Apply 3 visual markers as specified. |
| Q6 | `/td-critique` plan | **SURVIVE** | Apply 3 edits as specified. |
| Cross | Pattern B deferral + bundling note | **SURVIVE** | Strategic recommendation stays as-is; user decides whether to bundle or sweep separately. |

### (d) Coverage Map

| Inquiry deliverable | Verdict | Refinement target |
|---|---|---|
| Step Refinement spec addendum | SURVIVE / REFINE | Form-3-fit criterion |
| `/explore` tidy plan | SURVIVE | none |
| `/sense-making` tidy plan ★ | SURVIVE / REFINE | Anchor-link frontier flag |
| `/decompose` tidy plan | SURVIVE | none |
| `/innovate` tidy plan | SURVIVE | none |
| `/td-critique` tidy plan | SURVIVE | none |
| Pattern B deferral + bundling note | SURVIVE | none |

### (e) Signal

**TERMINATE.** All 6 proposals + cross-piece note ranked; convergence reached; 2 REFINEs are scope clarifications resolvable at application time.

---

## Convergence Telemetry

| Telemetry item | Result |
|---|---|
| Dimension coverage | 8 dimensions extracted from sensemaking + project-specific risk; all applied where relevant per proposal |
| Adversarial strength | **STRONG** — multi-axis prosecution including specification-gap probes and the project-specific anchor-link quality dimension; identified real refinement targets (Q1 Form-3 criterion; Q3 anchor-link frontier flag); deeper testing on Q3 per accountability flag |
| Landscape stability | **STABLE** — no new regions emerged during Phase 2 |
| Clean SURVIVE exists | **YES** — 4 clean SURVIVEs (Q2, Q4, Q5, Q6) + 1 cross-piece SURVIVE; 2 REFINEs are scope clarifications, not rework |
| Failure modes observed | **None** — no rubber-stamping (REFINEs identified real gaps); no nitpicking (concerns are real, not manufactured); no dimension blindness (anchor-link quality dimension included as project-specific); no false convergence (all critical dimensions had at least one survivor); no evaluation drift (dimensions fixed at Phase 0); no self-reference collapse (external grounding via prior inquiry, placement convention, user pushback); no wrong dimensions (validated against sensemaking model) |

**Overall: PROCEED** (sufficient coverage + convergence + tested survivors with two scope-clarification REFINEs).
