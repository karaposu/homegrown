# Innovation — Discipline-corpus tidying application

## User Input

```
6 pieces. Q1 spec addendum first; then Q2-Q6 per-discipline plans. Be tight.
Q3 (sense-making) gets extra attention — highest accountability per user pushback.
```

---

## Intuition (Direction Seed)

**Context** — the prior inquiry's `enes/step_refinement.md` already exists; per-discipline plans must specify per-candidate decisions (lift/leave/restructure). Pattern B contract not yet shipped.

**Valuation** — the user wants concrete actions. Plans should be edit-ready; not abstract.

**Motivation** — produce something the user can decide on per-discipline ("apply this plan now" / "save for later" / "skip").

---

## Q1 — Spec Addendum

### Axis-coverage check

Two orthogonal axes:
- **Placement axis:** new section / inline addition / split across multiple sections
- **Content axis:** Three Forms only / Three Forms + lifting recipes / Three Forms + recipes + phase-fit precision

### Mechanism applications

| Mechanism | Variation | Candidate |
|---|---|---|
| Constraint Manipulation (focused) | "Don't reopen existing Two-Subtypes section" | **Q1.1:** Add new section "Three Forms of Refinement Content" AFTER the existing "Two Subtypes" section in `enes/step_refinement.md`. New section has 3 sub-sections (Form 1 / Form 2 / Form 3) + a "Lifting Recipes" sub-section for Form-2-to-Form-1. Plus a new section "Phase-fit precision" (or update existing Scope) clarifying the two-scope distinction. |
| Combination (focused) | Combine Three-Forms framing + Form-2 lifting recipes into one coherent block | **Q1.2:** As above, with the lifting recipes integrated into Form 2's sub-section (not a separate sub-section) so Form 2's description includes both definition and lifting recipes inline. |
| Domain Transfer (focused) | Mirror RFC "Updates" sections / software migration notes | **Q1.3:** Frame the addendum as "Forms and Migration" — explicit migration framing. Heavier rhetoric; less natural fit with the existing file's voice. |

### Test (5 criteria)

| Candidate | Novelty | Scrutiny | Fertility | Actionability | Mechanism Indep. | Verdict |
|---|---|---|---|---|---|---|
| Q1.1 (separate Three-Forms + Lifting + Phase-fit) | Low | Strong — clean separation; respects existing structure | Medium | High | 3 mechanisms (CM + Combination + DT) | **SURVIVE** (with Q1.2 integration) |
| Q1.2 (Three-Forms with integrated lifting) | Low | Strong — same as Q1.1 but tighter | Medium | High | 2 mechanisms | **SURVIVE — refined into Q1.1's structure** |
| Q1.3 (Migration framing) | Medium | Weak — rhetorical heaviness; doesn't match file voice | Low | Medium | 1 mechanism | KILL (voice mismatch) |

### Disposition

**Q1.1+Q1.2 (assembly) — ACTIONABLE.** Concrete artifact: add to `enes/step_refinement.md` (after the existing "Two Subtypes" section, before "Visual Marker"):

#### Proposed addendum content (sketch)

```markdown
---
## Three Forms of Refinement Content

A Step Refinement appears in the corpus in one of three forms. All three share the
4-element shape; they differ in placement and integration with the surrounding
spine procedure.

### Form 1 — Standalone bolted-on subsection

A separate subsection at its canonical step / phase / component, with bold-prefix
name + body. The dominant form in the corpus today (8 of 10 catalogued instances).
The Visual Marker (italic prefix `*Refinement note (applies at [...]):*`) is the
recognizable surface for Form 1.

Examples: explore's "Type-Aware Probing" at the Probe component; sense-making's
"Load-bearing concept test" at Phase 3 Ambiguity Collapse.

### Form 2 — Scattered / orphaned

A rule with the 4-element shape positioned ambiguously rather than as a standalone
subsection. Form 2 has four observable sub-types:

- **FM-buried** — the rule lives inside a failure mode's "How to prevent" /
  "Corrective" sentence rather than at the canonical step. Example: explore's
  "jump scan" rule, currently inside False Confidence's Corrective.
- **Inline bullet** — the rule lives as one item inside a list (perspective list,
  step list) where it's structurally a bullet but semantically a refinement.
  Example: sense-making's "Phase / Calibration-State perspective."
- **Orphan** — the rule lives at a process-model level (between phases, in a
  general "process notes" section) rather than anchored to a specific phase.
  Example: sense-making's "Accommodation trigger."
- **Embedded** — the rule lives inside another component's or mechanism's
  description. Example: innovate's "Inversion depth check," embedded inside the
  Inversion mechanism's description.

Form 2 is observable but undesirable as the canonical form. The "Lifting Recipes"
section below describes how to migrate Form 2 instances to Form 1 during routine
maintenance passes.

### Form 3 — Absorbed into spine template

A refinement whose content has been integrated into a canonical procedure template
rather than placed as a separate subsection. The rule fires automatically as part
of the procedure; its prevention role is implicit in the procedure's structure.

Canonical example: sense-making's structured ambiguity entry template at Phase 3
Ambiguity Collapse. The template's individual fields (Strongest counter-interpretation;
Why-fails-on-structural-grounds; Confidence; Resolution; What-now-fixed) are the
prevention rules for Clean Resolution Trap (failure mode #5) — but they have been
integrated as the spine of how Ambiguity Collapse is performed, not left as a
separate refinement.

Form 3 is a legitimate alternative when the rule's content fits naturally as
spine procedure. Trade-offs: Form 3 is execution-hugging (the rule fires as part
of the mandatory procedure); Form 1 is more discoverable (the rule is visible as
a separate refinement; the failure-mode link is explicit).

This spec **acknowledges** Form 3; it does **not prescribe** when to choose Form 3
over Form 1. The choice is a per-rule judgment call by the spec author.

---

### Lifting Recipes (Form-2-to-Form-1)

Form-2-to-Form-1 lifting is the dominant tidying operation. Each Form-2 sub-type
has a recognizable recipe:

| Sub-type | Recipe |
|---|---|
| **FM-buried** | Extract the rule from the failure-mode Corrective sentence. Reformat as standalone subsection at canonical step with bold-prefix name + body + visual marker. Add symmetric back-reference from the failure-mode's Corrective to the new standalone subsection. |
| **Inline bullet** | Split: keep a short bullet in the original list (just the perspective / step / item header — no detail). Lift the trigger / action / failure-mode-link content to a standalone refinement after the list with the visual marker. |
| **Orphan** | Assign canonical phase (where the rule actually fires). Lift to standalone refinement at that phase. Resolve implicit anchor-link by either citing an existing failure mode or proposing a new one. |
| **Embedded** | Decide whether the rule applies to the mechanism / component (then keep with visual marker added; this is Form-1-at-component-level rather than at-step-level) or to the post-mechanism step (then lift to the step). |

Lifting is descriptive maintenance work, not mechanical enforcement. See the
phase-fit precision below.

---
```

Plus update the existing "Scope" section by appending:

```markdown

### Phase-fit precision

The "descriptive only" framing in this spec applies at two scopes:

- **Corpus-machinery scope** — no linters, no validators, no schema-validation
  tooling that blocks non-conforming inputs. This stays deferred.
- **Per-discipline maintenance scope** — active human-driven incremental tidying
  is the corpus's actual maintenance pattern (the user's "brushing teeth"
  framing). Lifting Form-2 instances to Form-1; adding visual markers to
  catalogued Form-1 instances; restoring failure-mode cross-reference
  symmetry — these are routine maintenance work, not mechanical enforcement.

These two scopes are simultaneously correct: defer mechanical enforcement; embrace
routine human-driven tidying.
```

---

## Q2 — `/explore` Plan (6 candidates)

### Per-candidate decisions

| Candidate | Form / sub-type | Decision | Recipe / Edit |
|---|---|---|---|
| Type-Aware Probing | Form 1 standalone (catalogued) | APPLY-VISUAL-MARKER | Prefix with `*Refinement note (applies at Probe component):*` on the line above the existing `**Type-Aware Probing.**` bold prefix |
| Coarse Scan in Layered Territories | Form 1 standalone (catalogued) | APPLY-VISUAL-MARKER | Prefix with `*Refinement note (applies at Resolution Progression):*` |
| jump scan | Form 2 FM-buried | LIFT | (a) Extract from False Confidence's Corrective sentence (the "before declaring convergence, do one deliberate scan in a completely different direction... 'jump scan'" content). (b) Reformat as standalone refinement at the Convergence Assessment step in "Execute the Exploration Process". (c) Bold-prefix name: `**Jump scan.**`. (d) Add symmetric cross-reference from False Confidence's Corrective: "For the jump-scan rule preventing this, see Execute → Assess Convergence → Jump scan." |
| completeness-before-novelty | Form 2 FM-buried | LIFT | (a) Extract from Completeness Bias in Possibility Mode's Corrective sentence (the "In possibility mode, explicitly scan for: (a) the obvious standard approach..." content). (b) Reformat as standalone refinement at the Scan component (specifically the possibility-mode portion). (c) Bold-prefix name: `**Completeness before novelty.**`. (d) Symmetric back-reference from Completeness Bias's Corrective. |
| per-cycle coverage minimum | Borderline (no name; spine guidance) | LEAVE | Stays as part of Coverage Strategy / Per-cycle coverage section. Not a discrete Step Refinement. |
| Resolution Management zoom rules | Borderline (component-internal) | LEAVE | Stays inside Resolution Management component description. Not a Step Refinement. |

### FM cross-reference asymmetries

- Premature Depth → Coarse Scan in Layered Territories: ✓ already present
- Surface-Only Scanning → Type-Aware Probing: ✓ already present
- False Confidence → Jump scan: **ADD** new back-reference once jump-scan is lifted
- Completeness Bias → Completeness before novelty: **ADD** new back-reference once lifted

### Pattern B work

- Currently: NO verdict line; Convergence Criteria (qualitative).
- Proposed: at end of "Final Deliverable — The Structural Map" section, add: `**Verdict:** PROCEED [— optional descriptor: e.g., "all 3 convergence criteria met; jump scan corroborates"]`.
- Status: **DEFERRED-pending-contract** (`homegrown/contracts/discipline_output.md` doesn't exist yet from prior inquiry's deferred MUST).

### Disposition

**Q2 — ACTIONABLE.** 4 concrete edits (2 visual markers + 2 lifts + 2 cross-references); ~30 minutes focused work. Pattern B work deferred.

---

## Q3 — `/sense-making` Plan (5 candidates) — HIGHEST ACCOUNTABILITY

### Per-candidate decisions

| Candidate | Form / sub-type | Decision | Recipe / Edit |
|---|---|---|---|
| Load-bearing concept test | Form 1 standalone (catalogued) | APPLY-VISUAL-MARKER | Prefix with `*Refinement note (applies at Phase 3 Ambiguity Collapse):*` |
| Specific-vs-pattern recognition cue | Form 1 standalone (catalogued) | APPLY-VISUAL-MARKER | Prefix with `*Refinement note (applies at Phase 3 Ambiguity Collapse):*` |
| Phase / Calibration-State | Form 2 inline bullet | **SPLIT** (see expanded recipe below) | Keep short bullet in perspective list; lift detail to standalone refinement after the list |
| Accommodation trigger | Form 2 orphan | **LIFT + ANCHOR-LINK DECISION** (see expanded recipe below) | Assign to Phase 5 Conceptual Stabilization; anchor to Premature Stabilization (FM #2) with explicit rationale |
| Structured ambiguity entry template (Phase 3 Execute section) | Form 3 absorbed (borderline) | LEAVE-AS-FORM-3 | No edit to sense-making's spec. Cited as the canonical Form-3 example in Q1's spec addendum (the existing template stays as-is). |

### Expanded recipe — Phase / Calibration-State SPLIT

The current form is one long bullet inside Phase 2's perspective list:

> Phase / Calibration-State (when the inquiry involves rules that may behave differently in different project phases or calibration states) — Does this rule depend on calibration that the current project state has? If not, what should the early-stage default be? Is the rule's correctness contingent on a phase the project has not yet reached? Failing to apply this perspective when the inquiry involves phase-dependent rules is an instance of Perspective Blindness (failure mode #4) applied to the calibration-state axis.

**SPLIT recipe:**

(a) **Replace the inline bullet with a short bullet** matching the format of other perspective-list items:

> * Phase / Calibration-State — does this rule depend on calibration that the current project state has? See refinement below for when this perspective is required.

(b) **Lift the trigger / action / failure-mode-link content to a standalone refinement** placed after the perspective list, before the SV3 (Multi-Perspective Understanding) section header:

> *Refinement note (applies at Phase 2 Perspective Checking):*
>
> **Phase / Calibration-State perspective requirement.** When the inquiry involves rules that may behave differently in different project phases or calibration states, the Phase / Calibration-State perspective from the list above is required (not optional). Ask: does this rule depend on calibration that the current project state has? If not, what should the early-stage default be? Is the rule's correctness contingent on a phase the project has not yet reached? Failing to apply this perspective when the inquiry involves phase-dependent rules is an instance of Perspective Blindness (failure mode #4) applied to the calibration-state axis.

(c) The existing Perspective Blindness Corrective's back-reference (currently "see Phase 2 — Perspective Checking → Phase / Calibration-State (in the Execute section)") **stays valid** — it now points at the standalone refinement (which is at Phase 2 Perspective Checking) rather than at the inline bullet content. Update the cross-reference text to: "see Phase 2 — Perspective Checking → Phase / Calibration-State perspective requirement (refinement)" for precision.

### Expanded recipe — Accommodation trigger LIFT + ANCHOR-LINK

**Anchor-link decision:** the Accommodation trigger has no explicit failure-mode link in its current form. Three options were considered:

- **Option A:** Name a new failure mode "Accommodation Failure" or "Forced Stabilization" — adds a 7th failure mode to sense-making.
- **Option B:** Anchor to existing **Premature Stabilization (FM #2)** — Accommodation trigger fires when "the model itself is wrong"; this is structurally a form of Premature Stabilization (forcing stabilization when destabilization signals indicate the model is misfit).
- **Option C:** Anchor to existing **Anchor Dominance (FM #3)** — less close fit; Anchor Dominance is about one anchor doing too much work, distinct from model misfit.

**Recommendation: Option B (Premature Stabilization).** Accommodation trigger is a specific axis of Premature Stabilization — *model-misfit-induced* premature stabilization, distinct from but related to the *early-clarity-arrival-induced* premature stabilization the original Premature Stabilization rule addresses. Anchoring to FM #2 reuses an existing failure mode without adding a 7th, while preserving the rule's identity as a refinement at Phase 5.

**LIFT recipe:**

(a) **Remove from current location** (between phase list and Saturation Indicators in the Process Model section).

(b) **Place at Phase 5 Conceptual Stabilization** (the phase where the trigger fires — when stabilization is being attempted but the model keeps requiring revision). Specifically: after the Phase 5 description in the Process Model section.

(c) **Standalone refinement form:**

> *Refinement note (applies at Phase 5 Conceptual Stabilization):*
>
> **Accommodation trigger.** When new perspectives keep producing anchors that destabilize the current model — each perspective forces a revision, the model doesn't settle, you keep patching — the structural model itself may be wrong. Don't add exceptions. Drop back to Phase 2 and re-extract anchors using the destabilizing perspectives as primary sources. The problem isn't unresolved ambiguity — it's a structural model that doesn't fit the territory. Failing to recognize this and forcing stabilization is an instance of Premature Stabilization (failure mode #2) applied to the model-misfit axis (distinct from but related to the early-clarity-arrival axis the existing Premature Stabilization rule addresses).

(d) **Update Premature Stabilization's body** in the Failure Modes section to acknowledge the two axes (early-clarity-arrival; model-misfit) and add a back-reference: "For model-misfit-induced premature stabilization, see Phase 5 → Accommodation trigger refinement."

### FM cross-reference asymmetries

- Premature Stabilization → Load-bearing concept test: ✓ already present
- Premature Stabilization → Specific-vs-pattern recognition cue: **ADD** (asymmetry within catalogued — the cross-reference currently mentions only the first sister rule)
- Premature Stabilization → Accommodation trigger: **ADD** after lift (per recipe above)
- Perspective Blindness → Phase / Calibration-State perspective requirement: ✓ valid after split (text update for precision)

### Pattern B work — PILOT CANDIDATE

Per the prior inquiry's pilot rationale, sense-making is the hardest test for the hedging-allowed verdict format and is the recommended pilot discipline.

**Proposed addition** at the end of the Saturation Indicators section (or as a new "Self-Assessment" section after Phase 5 Conceptual Stabilization):

> **Verdict:** PROCEED [— optional qualitative descriptor reporting saturation state, e.g., "saturation moderate; perspective saturation reached at 4 perspectives; ambiguity resolution ratio 5/5; SV1→SV6 delta substantial; no failure modes observed."]
>
> *The verdict TYPE (PROCEED | FLAG | RE-RUN) is mandatory; the descriptor is free-form and may carry qualitative hedging consistent with this discipline's "Saturation Indicators are not gates" framing. The descriptor should report perspective-saturation count, ambiguity-resolution ratio, SV-delta substantiveness, and any failure-mode observations.*

**Status: PILOT-CANDIDATE-DEFERRED-pending-contract.** When `homegrown/contracts/discipline_output.md` ships, sense-making is the recommended first verdict-line addition.

### Disposition

**Q3 — ACTIONABLE.** 6 concrete edits (2 visual markers + 1 split + 1 lift-with-FM-update + 2 cross-reference fixes); ~60 minutes focused work. Pattern B work deferred but explicitly marked as pilot.

---

## Q4 — `/decompose` Plan (3 candidates)

### Per-candidate decisions

| Candidate | Form / sub-type | Decision | Recipe / Edit |
|---|---|---|---|
| Determination-mechanism piece check | Form 1 standalone (catalogued) | APPLY-VISUAL-MARKER | Prefix with `*Refinement note (applies at Step 7 Self-Evaluate):*` |
| Assumptions-not-data interface check | Form 2 FM-buried | LIFT | (a) Extract from Hidden Coupling's Corrective sentence ("Interface mapping (Step 5) must be thorough. Ask not just 'what data flows?' but 'what assumptions does each piece make about what the other provides?' Hidden coupling hides in assumptions, not in data."). (b) Reformat as standalone refinement at Step 5 Map Interfaces. (c) Bold-prefix name: `**Assumptions-not-data check.**`. (d) Body: "Interface mapping must ask not just 'what data flows?' but 'what assumptions does each piece make about what the other provides?' Hidden coupling hides in assumptions, not in data. Failing to check assumptions during interface mapping is an instance of Hidden Coupling (failure mode #3)." (e) Symmetric back-reference from Hidden Coupling's Corrective. |
| Confidence scoring at Step 3 (top-down/bottom-up agreement) | Borderline | LEAVE | Stays as part of Step 3 Validate Boundaries. Coverage-anchored if forced into Step Refinement form, but better as part of Step 3's spine. |

### FM cross-reference asymmetries

- Missing Pieces → Determination-mechanism piece check: ✓ already present
- Hidden Coupling → Assumptions-not-data check: **ADD** after lift

### Pattern B work

- Currently: NO verdict line; Self-Evaluation with per-dimension PASS/FAIL.
- Proposed: at end of Self-Evaluation Summary, add: `**Verdict:** PROCEED if all 3 minimum dimensions PASS; FLAG if any minimum dimension marginal; RE-RUN if any minimum dimension FAILS [— optional descriptor].`
- Status: **DEFERRED-pending-contract**.

### Disposition

**Q4 — ACTIONABLE.** 3 concrete edits (1 visual marker + 1 lift + 1 cross-reference); ~20 minutes focused work. Pattern B deferred.

---

## Q5 — `/innovate` Plan (4 candidates)

### Per-candidate decisions

| Candidate | Form / sub-type | Decision | Recipe / Edit |
|---|---|---|---|
| Output disposition categories | Form 1 standalone (catalogued) | APPLY-VISUAL-MARKER | Prefix with `*Refinement note (applies at Phase 3 Test):*` |
| Axis coverage check | Form 1 standalone (catalogued) | APPLY-VISUAL-MARKER | Prefix with `*Refinement note (applies at Phase 3 Test):*` |
| Inversion depth check | Form 2 embedded | KEEP-AT-COMPONENT (with visual marker) | The rule applies specifically to the Inversion mechanism (deciding when to stop inverting), not to a post-mechanism step. Keep at the Inversion mechanism's description. Add visual marker `*Refinement note (applies at Inversion mechanism):*` before the existing `**Depth check:**` bold prefix. This is the "embedded sub-type → keep" choice from the recipe. |
| Mechanism Exhaustion 3-step recovery | Borderline | LEAVE | Lives inside Mechanism Exhaustion's Corrective. Lifting would create a new "post-Phase-3 check" step that doesn't currently exist. Defer; not worth restructuring. |

### FM cross-reference asymmetries

- Catalogued rules are coverage-anchored without FM links — N/A
- Inversion depth check: anchor-link is implicit (preventing shallow component-level inversions). Not currently linked to a named FM. Leave anchor-link implicit; don't force a link.

### Pattern B work

- Currently: HAS verdict line ("Mechanism Coverage Telemetry" section ends with `* **Overall: PROCEED** ... / **FLAG** ... / **RE-RUN** ...`).
- Proposed prefix update: `**Overall:**` → `**Verdict:**` per the canonical form proposed in the prior inquiry's Pattern B contract.
- Status: **DEFERRED-pending-contract** (the contract's `**Overall:**` backward-compat note allows current form during transition; update happens when contract ships).

### Disposition

**Q5 — ACTIONABLE.** 3 concrete edits (3 visual markers); ~15 minutes focused work. Pattern B prefix update deferred.

---

## Q6 — `/td-critique` Plan (5 candidates)

### Per-candidate decisions

| Candidate | Form / sub-type | Decision | Recipe / Edit |
|---|---|---|---|
| Project-specific risk dimension check | Form 1 standalone (catalogued) | APPLY-VISUAL-MARKER | Prefix with `*Refinement note (applies at Phase 0 Dimension Construction):*` |
| Multi-axis prosecution depth check | Form 1 standalone (catalogued) | APPLY-VISUAL-MARKER | Prefix with `*Refinement note (applies at Phase 2 Adversarial Evaluation):*` |
| Constructive requirement | Form 2 has-bold-prefix-but-not-standalone (sub-type variant — embedded but already has bold prefix) | CONVERT-TO-STANDALONE (with visual marker + coverage-anchor explicit) | Currently appears as `**Constructive requirement:**` bold-prefix paragraph inside Phase 3 description. Add visual marker `*Refinement note (applies at Phase 3 Verdict + Constructive Output):*` on the line above. Make the coverage-anchored nature explicit by appending: "This refinement is coverage-anchored — it ensures every KILL or REFINE verdict carries downstream value (a seed or a refinement target) rather than terminating without classification." |
| Burden-of-proof shift by stake level | Borderline | LEAVE | Part of the Adversarial Structure spine. Structural feature of the discipline; not a refinement. |
| Severity-weighted KILL gate (from Nitpicking corrective) | Borderline | LEAVE | Currently inside Nitpicking's Corrective. Lifting would create a new "KILL gate" specification step that doesn't currently exist. Defer. |

### FM cross-reference asymmetries

- Dimension Blindness → Project-specific risk dimension check: ✓ already present
- Rubber-Stamping → Multi-axis prosecution depth check: ✓ already present
- (Constructive requirement is coverage-anchored without FM link; no asymmetry expected)

### Pattern B work

- Currently: HAS verdict line ("Convergence Telemetry" section ends with `**Overall: PROCEED** / FLAG / RE-RUN`).
- Same prefix update as `/innovate` — deferred per contract.
- Status: **DEFERRED-pending-contract**.

### Disposition

**Q6 — ACTIONABLE.** 3 concrete edits (2 visual markers + 1 convert-to-standalone with coverage-anchor explanation); ~20 minutes focused work. Pattern B prefix update deferred.

---

## Phase 3.5 — Assembly Check

### Survivors per piece

| Piece | Survivor | Disposition |
|---|---|---|
| Q1 | Spec addendum (Three-Forms section + Phase-fit precision) | ACTIONABLE |
| Q2 | `/explore` plan (4 edits) | ACTIONABLE |
| Q3 | `/sense-making` plan (6 edits + pilot Pattern B note) | ACTIONABLE — highest accountability |
| Q4 | `/decompose` plan (3 edits) | ACTIONABLE |
| Q5 | `/innovate` plan (3 edits) | ACTIONABLE |
| Q6 | `/td-critique` plan (3 edits) | ACTIONABLE |

### Cross-piece assembly

Combined application of Q1 + Q2-Q6 across the corpus produces:
- 1 spec file change (`enes/step_refinement.md`)
- 5 discipline spec edits (~22 total edits across the disciplines)
- ~5 failure-mode cross-reference fixes (back-references for newly-lifted rules)
- 5 Pattern B verdict-line additions deferred pending the contract

Total estimated work: ~3-4 hours of focused human-driven editing across the corpus, distributable per-discipline.

**Emergent observation:** the Pattern B work for all 5 disciplines is uniformly DEFERRED-pending-contract. This suggests creating `homegrown/contracts/discipline_output.md` (the prior inquiry's deferred MUST item) **before or alongside** the per-discipline tidy passes would let Pattern B work bundle with each per-discipline pass naturally. Otherwise Pattern B work happens as a separate sweep later. Recommend bundling — but that's a strategic note for the user, not a separate proposal for this inquiry.

### Axis-coverage check

The per-discipline plans cover the orthogonal axes:
- **Form-tag axis** — every candidate is tagged Form 1 / Form 2 (sub-type) / Form 3 / Borderline ✓
- **Decision axis** — APPLY-VISUAL-MARKER / LIFT / SPLIT / KEEP-AT-COMPONENT / CONVERT-TO-STANDALONE / LEAVE-AS-FORM-3 / LEAVE / DEFER all appear across the 5 plans ✓
- **Pattern-B axis** — verdict-line added (proposed) / prefix-update needed / deferred-pending-contract — all states present ✓

Axis coverage: complete.

---

## Phase 4 — Mechanism Coverage Telemetry

| Piece | Generators applied | Framers applied | Convergence | Survivors tested |
|---|---|---|---|---|
| Q1 | 2 (Combination, Domain Transfer) | 1 (Constraint Manipulation) | YES — 3 mechanisms converge on Q1.1+Q1.2 assembly | 3 candidates / 1 SURVIVE / 1 KILL / 1 refined-into |
| Q2-Q6 | (per-piece, varies) | (per-piece, varies) | Per-candidate decisions are deterministic given exploration audit + sensemaking sub-types | Per-candidate decisions tested against form-tag + decision criteria |
| Assembly | (cross-piece) | (cross-piece) | Bundle Pattern B with per-discipline passes (strategic note) | 1 emergent observation |

**Failure modes observed:** none.
- Premature evaluation avoided (mechanisms generated before testing).
- Single-mechanism trap avoided (Q1 has 3 mechanisms; per-discipline plans use deterministic decisions from sensemaking-fixed sub-type recipes).
- Early frame lock avoided (Q1.3 contrarian framing tested and killed for voice mismatch).
- Innovation without grounding avoided (every survivor has concrete edit description).
- Survival bias avoided (all KILL/LEAVE/DEFER decisions explained).

**Overall: PROCEED.** Sufficient coverage; all per-piece survivors actionable; cross-piece assembly observation surfaced.

---

## Output Summary (for Critique)

### ACTIONABLE proposals

1. **Q1** — Add "Three Forms" section + "Lifting Recipes" sub-section + "Phase-fit precision" Scope-update to `enes/step_refinement.md`. Sketch content drafted in this innovation.md.
2. **Q2 (`/explore`)** — 2 visual markers + 2 lifts (jump scan; completeness-before-novelty) + 2 FM back-references. ~30 min.
3. **Q3 (`/sense-making`) ★** — 2 visual markers + 1 SPLIT (Phase / Calibration-State) + 1 LIFT-with-anchor-decision (Accommodation trigger anchored to Premature Stabilization model-misfit axis) + 2 FM cross-reference fixes (within-catalogued + new). Borderline structured-ambiguity-template stays as Form-3 example. ~60 min. **HIGHEST ACCOUNTABILITY** per user pushback.
4. **Q4 (`/decompose`)** — 1 visual marker + 1 lift (assumptions-not-data) + 1 FM back-reference. ~20 min.
5. **Q5 (`/innovate`)** — 3 visual markers (incl. Inversion depth check kept-at-component). ~15 min.
6. **Q6 (`/td-critique`)** — 2 visual markers + 1 convert-to-standalone (Constructive requirement). ~20 min.

### DEFERRED (with revival triggers)

- **Pattern B verdict-line additions across all 5 disciplines.** Revival trigger: `homegrown/contracts/discipline_output.md` ships from the prior inquiry's deferred MUST. When that contract ships, bundle Pattern B work with each per-discipline pass.
- **`/sense-making` Pattern B as PILOT-CANDIDATE.** Specifically marked as the recommended first verdict-line addition once contract ships (per prior inquiry's pilot rationale).

### LEAVE / Borderline decisions

- Per-cycle coverage minimum (`/explore`); Resolution Management zoom rules (`/explore`); Confidence scoring at Step 3 (`/decompose`); Burden-of-proof shift (`/td-critique`); Severity-weighted KILL gate (`/td-critique`); Mechanism Exhaustion 3-step recovery (`/innovate`) — all kept as spine guidance / failure-mode correctives. Could be revisited if subsequent audits reveal them to be more rule-shaped than spine-shaped.
- Structured ambiguity entry template (`/sense-making`) — kept as Form-3 example. Cited in Q1's spec addendum.

### Cross-piece strategic note

Pattern B work is uniformly deferred. Recommend the user create `homegrown/contracts/discipline_output.md` (prior inquiry's MUST item) **before or alongside** these per-discipline tidy passes so Pattern B can bundle naturally. Otherwise it's a separate sweep later.
