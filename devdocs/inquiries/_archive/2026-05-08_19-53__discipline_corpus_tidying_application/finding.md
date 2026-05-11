---
status: active
refines: devdocs/inquiries/2026-05-08_18-56__discipline_corpus_emerging_pattern/finding.md
---
# Finding: Discipline-corpus tidying application

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-08_18-56__discipline_corpus_emerging_pattern/finding.md`

**Revision trigger:** User pushback on the prior inquiry's per-discipline application scope. When asked to apply Pattern A (Step Refinement) to sense-making specifically, the prior inquiry's answer ("surgical 2 lines") was insufficient — the user correctly observed that "if Step Refinement is what we already have but scattered, we must fix the scattered parts." Re-running the loop with explicit attention to the application work surfaced what the prior loop missed.

**What's preserved:**
- The two named patterns (Step Refinement primitive + Discipline Output Contract) are fully preserved.
- The 4-element shape of Step Refinement (name + trigger + action + typed anchor-link) is preserved.
- The two anchor-link subtypes (failure-anchored, coverage-anchored) are preserved.
- The C3.4 visual marker convention (italic prefix `*Refinement note (applies at [...]):*`) is preserved.
- The Discipline Output Contract format (canonical verdict line with hedging-allowed descriptor; standardized structural sections; backward-compat with existing `**Overall:**` prefix) is preserved.

**What's changed:**
- The phase-fit reading is sharpened with precision. The prior inquiry's "descriptive only; existing rules align organically when next touched" conflated two scopes. The corrected reading: **descriptive-only at the corpus-machinery scope** (no linters, no validators, no blocking enforcement) AND **active tidying at the per-discipline maintenance scope** (human-driven incremental cleanup; the user's "brushing teeth" framing). Both apply simultaneously, just to different layers.

**What's new:**
- A **Three Forms framing** for refinement content. The prior inquiry's audit caught Form 1 (standalone bolted-on subsection); this inquiry adds Form 2 (scattered/orphaned, with 4 sub-types) and Form 3 (absorbed into spine template). The prior inquiry's audit caught ~43% of the corpus's clear refinement content; the missed 57% is mostly Form 2.
- **Five per-discipline tidy plans** — one each for `/explore`, `/sense-making`, `/decompose`, `/innovate`, `/td-critique`. Each plan tags every catalogued+missed+borderline candidate by Form / sub-type and specifies a concrete edit decision.
- A **Spec addendum** for `enes/step_refinement.md` (the file shipped from the prior inquiry) that adds the Three Forms framing + Form-2-to-Form-1 lifting recipes + Phase-fit precision section.

**Migration:** the prior inquiry's `enes/step_refinement.md` stays in place; this inquiry adds new sections to it. The five per-discipline plans are independent application work; user picks pace per discipline. Pattern B verdict-line work across all 5 disciplines is uniformly DEFERRED-pending-contract (waiting on `homegrown/contracts/discipline_output.md`, the prior inquiry's deferred MUST item). Strategic recommendation: bundle Pattern B with per-discipline passes when the contract ships.

---

## Question

What is the complete per-discipline tidying work needed to apply the prior inquiry's emerging-pattern verdicts (Step Refinement primitive + Discipline Output Contract proposal) across the 5 MVL+ relevant disciplines (`/explore`, `/sense-making`, `/decompose`, `/innovate`, `/td-critique`) — including (a) scattered instances the prior inquiry's audit might have missed, and (b) any reframing of the patterns themselves that application reveals?

**Goal:** produce per-discipline tidy plans the user can decide on independently (apply-now / apply-later / skip), plus surface any pattern-level reframings the application work reveals.

---

## Finding Summary

- **The prior inquiry's audit caught roughly 43% of the corpus's clear refinement content (10 catalogued out of 16 clear instances; an additional 7 borderline cases).** The missed 57% is overwhelmingly *scattered* — rules buried inside failure-mode "Corrective" sentences, masquerading as inline bullets in lists, orphaned at the process-model level rather than phase-level, or embedded inside another component's description. This is the load-bearing finding of this inquiry.

- **A Three Forms framing for refinement content is now named.** Form 1 (standalone bolted-on subsection — the prior inquiry's primary form, 8 of 10 catalogued instances). Form 2 (scattered/orphaned — 4 sub-types: FM-buried, inline bullet, orphan, embedded — accounts for the missed 57%). Form 3 (absorbed into spine template — 1 clear instance: sense-making's structured ambiguity entry template at Phase 3). The Three Forms framing extends the Step Refinement spec at `enes/step_refinement.md` without reopening its existing content.

- **Phase-fit conservatism is sharpened with precision.** The prior inquiry's "descriptive only; align organically when next touched" framing conflated two scopes. The corrected reading: **descriptive-only at corpus-machinery** (no linters, no validators, no blocking) AND **active tidying at per-discipline maintenance** (human-driven incremental cleanup — exactly the user's "brushing teeth" framing). Both simultaneously; different layers.

- **Five per-discipline tidy plans are produced** with concrete edits per candidate. Each plan tags every candidate by Form / sub-type and specifies a decision: APPLY-VISUAL-MARKER (surgical, for already-clean Form 1 instances), LIFT (for Form 2 instances, with sub-typed recipes), SPLIT (for inline-bullet sub-type — keep short bullet, lift detail to standalone refinement), KEEP-AT-COMPONENT (for embedded sub-type that genuinely belongs at the component level), CONVERT-TO-STANDALONE (for Form-2 instances that already have bold prefixes), LEAVE-AS-FORM-3 (for absorbed-form instances that fit naturally as spine), or LEAVE (for borderlines that are spine guidance not discrete refinements).

- **Sense-making is the highest-accountability plan** per the user's pushback. Specifically: the Phase / Calibration-State perspective (currently an inline bullet in the perspective list) gets a SPLIT recipe — keep a short perspective bullet; lift the trigger / action / failure-mode-link content to a standalone refinement after the list. The Accommodation trigger (currently orphaned at the process-model level) gets a LIFT recipe with anchor-link decision: anchor to Premature Stabilization (FM #2) on a "model-misfit axis" (distinct from but related to the existing "early-clarity-arrival axis"). A frontier flag is added to the anchor decision: revisit if N≥2 model-misfit instances emerge across the corpus.

- **The Step Refinement spec addendum (sketched in this finding's Next Actions)** adds three new sections to `enes/step_refinement.md`: (a) "Three Forms of Refinement Content" with sub-sections for Form 1, Form 2 (with 4 sub-types), Form 3 (with the Form-3-fit criterion); (b) "Lifting Recipes" describing the Form-2-to-Form-1 operation per sub-type; (c) "Phase-fit precision" section (or update to existing Scope) clarifying the two-scope distinction.

- **Pattern B verdict-line work is uniformly DEFERRED across all 5 disciplines** — pending the `homegrown/contracts/discipline_output.md` contract from the prior inquiry's deferred MUST. **Strategic recommendation:** bundle the contract creation with per-discipline tidy passes so the verdict-line additions ride along with the rule-tidying work, rather than running as a separate sweep later. Sense-making is the recommended pilot discipline (per prior inquiry's pilot rationale — its qualitative self-assessment is the hardest test for the hedging-allowed verdict format).

- **The prior inquiry's verdicts are preserved** (REFINES, not SUPERSEDES). The two named patterns + descriptive-formalization framing carry forward; this inquiry extends with three forms + phase-fit precision + per-discipline application scope. Together with the prior inquiry's `enes/step_refinement.md` and the proposed `homegrown/contracts/discipline_output.md`, these deliverables form the corpus's emerging discipline-spec maintenance toolkit.

---

## Finding

### Why this matters

The user asked the prior inquiry whether the homegrown discipline corpus was "pregnant to something new" — was an unnamed pattern emerging from the cumulative bolted-on refinements? The prior inquiry named two patterns (Step Refinement primitive; Discipline Output Contract) and shipped one artifact (`enes/step_refinement.md`). When applying that artifact to sense-making specifically, the prior inquiry's framing produced "surgical 2 lines" — which the user correctly identified as missing the actual scattered work. *"If Step Refinement is what we already have but scattered, we must fix the scattered parts."*

That pushback re-ran this loop with explicit attention to (a) what the prior audit missed, (b) whether the prior phase-fit reading was correct. Both were under-addressed. This finding produces the application work the prior inquiry described but didn't carry through.

The "brushing teeth" framing is the load-bearing constraint. The user wants routine maintenance — concrete actions per-discipline that take 15-60 minutes each — not heavy machinery. The deliverables here honor that: per-discipline plans are bounded; no mechanical enforcement; lifting recipes are descriptive guidance; existing rules align as their host disciplines are touched.

### 1. Three Forms of refinement content

Refinement content lives in three observable forms in the corpus:

**Form 1 — Standalone bolted-on subsection.** The prior inquiry's primary form. A separate subsection at its canonical step / phase / component, with bold-prefix name. 8 of 10 prior-catalogued instances are Form 1. Examples: explore's "Type-Aware Probing" at the Probe component; sense-making's "Load-bearing concept test" at Phase 3 Ambiguity Collapse. The visual marker (`*Refinement note (applies at [...]):*` italic prefix) is the recognizable surface for Form 1.

**Form 2 — Scattered / orphaned.** A rule with the 4-element shape but positioned ambiguously rather than as a standalone subsection. Form 2 has four observable sub-types:

- **FM-buried** — the rule lives inside a failure-mode's "How to prevent" / "Corrective" sentence rather than at the canonical step. Example: explore's "jump scan" rule, currently inside False Confidence's Corrective.
- **Inline bullet** — the rule lives as one item inside a list (perspective list, step list) where it's structurally a bullet but semantically a refinement. Example: sense-making's "Phase / Calibration-State" perspective.
- **Orphan** — the rule lives at a process-model level (between phases, in a general "process notes" section) rather than anchored to a specific phase. Example: sense-making's "Accommodation trigger."
- **Embedded** — the rule lives inside another component's or mechanism's description rather than as a separate refinement. Example: innovate's "Inversion depth check," inside the Inversion mechanism's description.

Form 2 is observable but not desirable as canonical. The Lifting Recipes (in the spec addendum) describe how to migrate Form 2 instances to Form 1 during routine maintenance.

**Form 3 — Absorbed into spine template.** A refinement whose content has been integrated into a canonical procedure template rather than placed as a separate subsection. The rule fires automatically as part of the procedure; its prevention role is implicit in the procedure's structure. Canonical example: sense-making's structured ambiguity entry template at Phase 3 Ambiguity Collapse — the template's individual fields (Strongest counter-interpretation; Why-fails-on-structural-grounds; Confidence; Resolution; What-now-fixed) are the prevention rules for Clean Resolution Trap (failure mode #5), but they have been integrated as the spine of how Ambiguity Collapse is performed, not left as a separate refinement.

Form 3 is a legitimate alternative when the rule's content fits naturally as spine procedure. **Form-3-fit criterion** (refinement added during critique): Form 3 fits when the rule's content can be integrated into the canonical procedure such that following the procedure naturally fires the rule, AND the rule's anchor-link is implicit in the procedure's structure rather than cited as a separate sentence.

Form 3 trade-offs: execution-hugging (rule fires as part of the mandatory procedure) but loses the explicit "this prevents [failure mode]" cross-reference. The spec addendum acknowledges Form 3 with the criterion above; it does not prescribe when to use Form 3 over Form 1. The choice is a per-rule judgment.

### 2. Phase-fit precision

The prior inquiry's "descriptive only; align organically when next touched" was correct in one scope and incorrect in another. The precision separates the two:

**Corpus-machinery scope:** descriptive only. No linters, no validators, no schema-validation tooling that blocks non-conforming inputs. The corpus stays human-readable; mechanical enforcement remains deferred. This part of the prior inquiry's framing is preserved.

**Per-discipline maintenance scope:** active tidying. Human-driven incremental cleanup is the corpus's actual maintenance pattern — the user's "brushing teeth" framing operationalized. Lifting Form-2 instances to Form-1; adding visual markers to catalogued Form-1 instances; restoring failure-mode cross-reference symmetry; closing verdict-line gaps when contracts ship. These are routine maintenance work, not enforcement automation. This is what the prior inquiry's framing missed.

Both scopes are simultaneously correct. The precision unblocks per-discipline tidy passes (which the user's pushback was asking for) without admitting machinery enforcement (which phase-fit conservatism rightly defers).

### 3. The audit gap

The prior inquiry's exploration phase caught 10 bolted-on rule instances across the 5 MVL+ disciplines. This inquiry's exploration phase, with explicit instruction to scan for missed scatter, found **6 additional clear instances + 7 borderlines = 23 candidates total**. The prior catch rate was approximately 43%.

The 6 missed instances are overwhelmingly Form 2 — usually FM-buried (rules whose content lives inside a failure-mode's Corrective sentence rather than at the canonical step). Specifically:

| Discipline | Missed | Form-2 sub-type |
|---|---|---|
| `/explore` | jump scan | FM-buried |
| `/explore` | completeness-before-novelty | FM-buried |
| `/sense-making` | Accommodation trigger | Orphan |
| `/decompose` | Assumptions-not-data interface check | FM-buried |
| `/innovate` | Inversion depth check | Embedded |
| `/td-critique` | Constructive requirement | Embedded-with-bold-prefix |

This audit gap was the trigger for the user's pushback. With the gap closed and the Three Forms framing named, future audits should be more systematic — every failure-mode Corrective sentence is a candidate-search location; every inline list bullet that's longer than its siblings is a candidate; every orphaned-at-process-level note is a candidate.

### 4. Five per-discipline tidy plans

Per-discipline plans are produced as part of the Next Actions section below. Each plan specifies:

- **Per-candidate decision** with form / sub-type tag and concrete edit description
- **FM cross-reference asymmetries** to fix
- **Pattern B (verdict-line) work** for the discipline (uniformly DEFERRED-pending-contract; with sense-making marked as PILOT-CANDIDATE per prior inquiry's rationale)
- **Estimated effort** (range from ~15 min for `/innovate` to ~60 min for `/sense-making`)

The plans are independent — user picks pace per discipline. Recommended ordering: Q1 (spec addendum) first to fix vocabulary; then any of Q2–Q6 in any order, with `/sense-making` (highest accountability per pushback) prioritized.

### 5. Strategic note on Pattern B

Pattern B (verdict-line addition + structural-sections compliance) is uniformly DEFERRED across all 5 disciplines because `homegrown/contracts/discipline_output.md` (the prior inquiry's deferred MUST item) doesn't yet exist. **Strategic recommendation:** bundle the contract creation with per-discipline tidy passes. This way:

- A single touch per discipline closes both the rule-tidying gap AND the Pattern B gap
- The contract gets validated against the pilot discipline (sense-making) during the pilot's tidy pass
- No separate "Pattern B sweep" is needed later

Alternative: ship per-discipline tidy passes without Pattern B; create the contract separately; do a second sweep for Pattern B work. Both strategies are valid; bundling is more efficient. The user decides.

---

## Next Actions

### MUST

- **What:** Add the Three Forms section + Lifting Recipes + Phase-fit precision to `enes/step_refinement.md`. Specifically: insert new sections AFTER the existing "Two Subtypes" section (Three Forms + Lifting Recipes) and update the existing "Scope" section with the Phase-fit precision paragraph. Include the Form-3-fit criterion: *"Form 3 fits when the rule's content can be integrated into the canonical procedure such that following the procedure naturally fires the rule, AND the rule's anchor-link is implicit in the procedure's structure rather than cited as a separate sentence."*
  **Who:** human-driven spec edit (or future materialization run via `homegrown/protocols/artifact_materialization.md`).
  **Gate:** apply once; verify the existing two-subtype section stays untouched; verify the addendum's voice matches the existing file.
  **Why:** names the Three Forms so per-discipline plans can reference them; closes the Form-3 specification gap; sharpens phase-fit so future contributors understand active tidying is permitted.

### COULD (per-discipline tidy plans)

These five plans are independent. The user picks any subset to apply now; the rest stay valid as DEFERRED with an "apply when convenient" trigger.

#### `/sense-making` plan ★ (highest accountability per user pushback; ~60 min)

Concrete edits to `homegrown/sense-making/references/sensemaking.md`:

| Candidate | Form / sub-type | Decision | Edit |
|---|---|---|---|
| Load-bearing concept test | Form 1 standalone | APPLY-VISUAL-MARKER | Prefix `*Refinement note (applies at Phase 3 Ambiguity Collapse):*` before the existing `**Load-bearing concept test.**` bold prefix |
| Specific-vs-pattern recognition cue | Form 1 standalone | APPLY-VISUAL-MARKER | Prefix `*Refinement note (applies at Phase 3 Ambiguity Collapse):*` |
| Phase / Calibration-State | Form 2 inline bullet | **SPLIT** | (a) Replace the long inline bullet in Phase 2's perspective list with a short bullet: "Phase / Calibration-State — does this rule depend on calibration that the current project state has? See refinement below for when this perspective is required." (b) Add a standalone refinement after the perspective list with `*Refinement note (applies at Phase 2 Perspective Checking):*` prefix and body covering the trigger / action / failure-mode-link from the original inline bullet |
| Accommodation trigger | Form 2 orphan | **LIFT** + anchor-decision | (a) Remove from current location (Process Model section between phase list and Saturation Indicators). (b) Place at Phase 5 Conceptual Stabilization. (c) Add visual marker `*Refinement note (applies at Phase 5 Conceptual Stabilization):*`. (d) Update body to cite Premature Stabilization (FM #2) on a "model-misfit axis" distinct from the existing "early-clarity-arrival axis." (e) **Frontier flag added during critique:** revisit this anchor decision if N≥2 model-misfit instances emerge across the corpus; consider promoting to a separate named failure mode (e.g., "Forced Stabilization") at that point |
| Structured ambiguity entry template (Phase 3 Execute section) | Form 3 absorbed | LEAVE-AS-FORM-3 | No edit. Cited as the canonical Form-3 example in the spec addendum (above MUST) |

**FM cross-reference fixes:**
- Update Premature Stabilization's Corrective to reference both Load-bearing concept test AND Specific-vs-pattern recognition cue (currently mentions only the first)
- Add Premature Stabilization → Accommodation trigger back-reference after lift
- Update Premature Stabilization's body to acknowledge two axes (early-clarity-arrival, model-misfit)
- Update Perspective Blindness's Corrective text for precision (still points to Phase / Calibration-State, now to the standalone refinement)

**Pattern B (PILOT-CANDIDATE):** DEFERRED-pending-contract. When `homegrown/contracts/discipline_output.md` ships, add at end of Saturation Indicators section: `**Verdict:** PROCEED [— optional descriptor: e.g., "saturation moderate; perspective saturation reached at N perspectives; ambiguity resolution ratio N/N; SV1→SV6 delta substantial; no failure modes observed."]`. Sense-making is the recommended pilot for the hedging-allowed verdict format.

#### `/explore` plan (~30 min)

| Candidate | Form / sub-type | Decision | Edit |
|---|---|---|---|
| Type-Aware Probing | Form 1 standalone | APPLY-VISUAL-MARKER | Prefix `*Refinement note (applies at Probe component):*` |
| Coarse Scan in Layered Territories | Form 1 standalone | APPLY-VISUAL-MARKER | Prefix `*Refinement note (applies at Resolution Progression):*` |
| jump scan | Form 2 FM-buried | LIFT | Extract from False Confidence's Corrective; reformat as standalone refinement at "Execute the Exploration Process" Step 3 (Assess Convergence); bold-prefix `**Jump scan.**`; add visual marker; add symmetric back-reference from False Confidence's Corrective |
| completeness-before-novelty | Form 2 FM-buried | LIFT | Extract from Completeness Bias in Possibility Mode's Corrective; reformat as standalone refinement at the Scan component (possibility-mode portion); bold-prefix `**Completeness before novelty.**`; add visual marker; symmetric back-reference |
| Per-cycle coverage minimum / Resolution-management zoom | Borderlines | LEAVE | Stays as spine guidance |

**Pattern B:** DEFERRED-pending-contract. When ships, add `**Verdict:** PROCEED` line at end of "Final Deliverable — The Structural Map."

#### `/decompose` plan (~20 min)

| Candidate | Form / sub-type | Decision | Edit |
|---|---|---|---|
| Determination-mechanism piece check | Form 1 standalone | APPLY-VISUAL-MARKER | Prefix `*Refinement note (applies at Step 7 Self-Evaluate):*` |
| Assumptions-not-data interface check | Form 2 FM-buried | LIFT | Extract from Hidden Coupling's Corrective; reformat at Step 5 Map Interfaces; bold-prefix `**Assumptions-not-data check.**`; add visual marker; symmetric back-reference |
| Confidence scoring at Step 3 | Borderline | LEAVE | Stays as Step 3 spine guidance |

**Pattern B:** DEFERRED-pending-contract. When ships, add `**Verdict:** PROCEED if all 3 minimum dimensions PASS; FLAG if marginal; RE-RUN if FAILS [— optional descriptor]` at end of Self-Evaluation Summary.

#### `/innovate` plan (~15 min)

| Candidate | Form / sub-type | Decision | Edit |
|---|---|---|---|
| Output disposition categories | Form 1 standalone | APPLY-VISUAL-MARKER | Prefix `*Refinement note (applies at Phase 3 Test):*` |
| Axis coverage check | Form 1 standalone | APPLY-VISUAL-MARKER | Prefix `*Refinement note (applies at Phase 3 Test):*` |
| Inversion depth check | Form 2 embedded | KEEP-AT-COMPONENT | Add visual marker `*Refinement note (applies at Inversion mechanism):*` before the existing `**Depth check:**` bold prefix; rule applies specifically to Inversion (component-level), keep there |
| Mechanism Exhaustion 3-step recovery | Borderline | LEAVE | Stays in failure-mode Corrective |

**Pattern B:** Already has verdict (`**Overall: PROCEED**` form). Prefix update (`**Overall:**` → `**Verdict:**`) DEFERRED-pending-contract — backward-compat handles transition.

#### `/td-critique` plan (~20 min)

| Candidate | Form / sub-type | Decision | Edit |
|---|---|---|---|
| Project-specific risk dimension check | Form 1 standalone | APPLY-VISUAL-MARKER | Prefix `*Refinement note (applies at Phase 0 Dimension Construction):*` |
| Multi-axis prosecution depth check | Form 1 standalone | APPLY-VISUAL-MARKER | Prefix `*Refinement note (applies at Phase 2 Adversarial Evaluation):*` |
| Constructive requirement | Form 2 has-bold-prefix-but-not-standalone | CONVERT-TO-STANDALONE | Add visual marker `*Refinement note (applies at Phase 3 Verdict + Constructive Output):*` before the existing `**Constructive requirement:**` bold; append note about coverage-anchored nature |
| Burden-of-proof shift / Severity-weighted KILL gate | Borderlines | LEAVE | Stay in spine / failure-mode Corrective respectively |

**Pattern B:** Already has verdict. Prefix update DEFERRED-pending-contract.

### DEFERRED

- **Pattern B verdict-line additions across all 5 disciplines.**
  **Gate:** when `homegrown/contracts/discipline_output.md` ships from the prior inquiry's deferred MUST item.
  **Why if revived:** closes the verdict-line gap that resume.md's backward-compat currently works around. Sense-making is the recommended pilot. Strategic recommendation: bundle Pattern B with per-discipline tidy passes when applying.

- **Promoting Accommodation trigger to a separate named failure mode** (e.g., "Forced Stabilization" or "Model Misfit").
  **Gate:** if N≥2 model-misfit instances emerge across the corpus (frontier flag added during critique).
  **Why if revived:** at N=1, anchoring under Premature Stabilization with axis distinction is the conservative choice. At N≥2, a separate failure mode becomes warranted.

- **Auto-generated audit table for Step Refinements** (carried forward from prior inquiry's DEFERRED list).
  **Gate:** when tooling exists to grep for the `*Refinement note:*` pattern across the corpus and emit a table.
  **Why if revived:** discoverability + maintenance backstop; hand-maintained audit drifts.

- **Cross-references in `enes/discipline_taxonomy.md`** linking the placement convention + Step Refinement + Discipline Output Contract as the corpus's discipline meta-spec cluster (carried forward from prior inquiry's DEFERRED list).
  **Gate:** after `enes/step_refinement.md` (with this finding's addendum) and `homegrown/contracts/discipline_output.md` are both shipped AND survive 30 days of use without re-edit.
  **Why if revived:** establishes the meta-spec cluster as a discoverable index point for future meta-spec primitives.

---

## Reasoning

### Why the audit gap was 57%

The prior inquiry's audit was systematic for Form 1 (standalone bolted-on subsections — easy to find by grep'ing for bold prefixes at canonical step locations). It missed Form 2 because Form-2 instances are deliberately not at canonical locations — they're inside failure-mode Corrective sentences, inside list items, at process-model level rather than phase-level, or embedded inside other components. Each Form-2 sub-type required different search heuristics (every FM Corrective; every long list bullet; every process-model-level note; every component description). Without the Three Forms framing, the prior audit's search heuristic was implicitly Form-1-shaped.

Naming Form 2 with its 4 sub-types gives future audits a complete search heuristic. The audit gap should be smaller in subsequent passes.

### Why anchor Accommodation trigger to Premature Stabilization rather than name a new failure mode

This was the load-bearing anchor-link decision. Three options were considered: (A) name a new failure mode "Forced Stabilization" or "Model Misfit"; (B) anchor to existing Premature Stabilization (FM #2) on a "model-misfit axis"; (C) anchor to existing Anchor Dominance (FM #3).

Option C is the loosest fit — Anchor Dominance is about one anchor doing too much work, distinct from model misfit. Eliminated.

Option A vs. B: at N=1 instance of model-misfit-induced premature stabilization, naming a new failure mode would be premature codification (a documented failure mode in the prior-prior inquiry's framework). Anchoring to existing Premature Stabilization with explicit axis distinction is the conservative choice — preserves the discipline's failure-mode catalog at 6 entries; documents the new sub-pattern; allows revisit if more instances accumulate.

The frontier flag added during critique is the safety valve: if N≥2 model-misfit instances emerge across the corpus, revisit and consider promoting to a new failure mode at that point.

### Why SPLIT for Phase / Calibration-State rather than full lift or leave

The Phase / Calibration-State item is currently both a perspective (one of several to check during Phase 2) AND a Step Refinement (with explicit failure-mode link). It serves two roles. Three options: (A) keep as inline bullet (current form, scattered); (B) full lift (replace inline bullet with standalone refinement + delete from perspective list); (C) split (keep short bullet for perspective-list visibility; lift trigger / action / link to standalone refinement).

Option A leaves it scattered (the user's pushback objected to this). Option B removes it from the perspective list, which damages the perspective-list's enumeration role (other perspectives don't have associated standalone refinements; removing this one doesn't add the others). Option C preserves both roles — the perspective remains in the list (visible during enumeration); the Step Refinement form is exposed (visible during refinement audit).

The visual asymmetry (only Phase / Calibration-State has a paired standalone refinement; other perspectives don't) IS the structural signal: this perspective is special because it doubles as a refinement. The visual marker `*Refinement note (applies at Phase 2 Perspective Checking):*` makes the dual role explicit.

### Why descriptive-only at machinery + active at maintenance

The prior inquiry's "descriptive only" framing was meant to defer mechanical enforcement (linters, validators, schema validation that blocks non-conforming inputs). That deferral is correct — corpus-machinery automation requires telemetry and calibration the corpus doesn't yet have.

But the framing was applied to ALL formalization activity, including the human-driven tidy work the user was asking for. That was the conflation. Active tidying — humans editing specs to lift Form-2 instances to Form-1, add visual markers, restore cross-reference symmetry — is not mechanical enforcement. It's routine human maintenance.

The precision (descriptive-at-machinery + active-at-maintenance) preserves the prior conservative reading at the right scope and unblocks the maintenance work at the right scope. Both apply simultaneously.

### Kills with prosecution (from innovation phase)

- **Q1.3 (Migration framing for spec addendum)** — killed for voice mismatch. The existing `enes/step_refinement.md` doesn't use migration-style rhetoric; adopting that framing would feel external.
- **Naming a new failure mode for Accommodation trigger now** — not formally killed but rejected as premature at N=1. Frontier flag preserves the option.
- **Lifting "completeness before novelty" as Form 3 instead of LIFT** — rejected on testing. The rule is currently in Completeness Bias's Corrective, not in Scan component's spine. Form 2 FM-buried tag is correct; LIFT is the right decision.
- **Lifting confidence scoring at Step 3 (decompose) as a refinement** — rejected. It's coverage-anchored if forced into refinement form, but better as part of Step 3's spine guidance about validation. Borderline LEAVE.
- **Lifting Mechanism Exhaustion 3-step recovery (innovate)** — rejected. Lifting would create a new "post-Phase-3 check" step that doesn't currently exist; not worth restructuring. Borderline LEAVE.

### Survives with reasons

- **Q1 (spec addendum)** — multi-mechanism convergent (Constraint Manipulation + Combination + Domain Transfer); consistent with existing file voice; the Form-3-fit criterion (added during critique) closes the specification gap.
- **Q2 (`/explore`)** — 4 edits, surgical + 2 lifts; Form-tag verifications pass; cross-reference fixes specified.
- **Q3 (`/sense-making`)** — directly addresses user's pushback; SPLIT recipe restores perspective-list flow; Accommodation-trigger anchor decision is conservative-defensible (frontier flag added during critique).
- **Q4 (`/decompose`)** — minimal scope; assumptions-not-data lift adds a real checkpoint distinct from existing flow-types guidance.
- **Q5 (`/innovate`)** — 3 visual markers; KEEP-AT-COMPONENT for Inversion depth check is correct (rule applies specifically to Inversion).
- **Q6 (`/td-critique`)** — 3 edits including CONVERT-TO-STANDALONE for Constructive requirement (which has 4-element shape; coverage-anchored).

### Contradictions reconciled across exploration / sensemaking / decomposition

The exploration phase produced 5 framings as candidates; sensemaking collapsed to 3 deliverables (spec addendum, per-discipline plans, REFINES amendment); decomposition partitioned into 6 pieces (Q1 + Q2-Q6) by collapsing the REFINES amendment into CONCLUDE's normal output. No contradictions emerged that required reconciliation across phases — the phase-by-phase outputs converged.

Innovation generated proposals per piece; critique validated them with two scope-clarification REFINEs (Form-3-fit criterion in Q1; anchor-link frontier flag in Q3). Both REFINEs are additions, not rework.

---

## Open Questions

### Monitoring

- After Q1 (spec addendum) ships, do future contributors actually reference the Three Forms framing when adding new bolted-on rules, or do they continue accreting Form-2 instances that need future tidying? Monitor the next 5–10 spec-edit events.
- After Q3 (sense-making plan) is applied, does the SPLIT for Phase / Calibration-State read naturally, or does the visual asymmetry confuse readers? Monitor by re-reading the perspective list with fresh eyes after a few weeks.
- After 30 days of `enes/step_refinement.md` (with this finding's addendum) being in use without re-edit, the deferred A1 (cross-references in `enes/discipline_taxonomy.md`, carried from prior inquiry) becomes triggered. Check whether it warrants action at that point.

### Blocked

- Pattern B verdict-line work across all 5 disciplines is blocked until `homegrown/contracts/discipline_output.md` ships from the prior inquiry's deferred MUST item.
- Promoting Accommodation trigger to a separate named failure mode is blocked until N≥2 model-misfit instances emerge across the corpus.

### Research Frontiers

- **Auto-generated audit + cross-reference maps.** A script that greps the `*Refinement note:*` pattern across the corpus and emits the failure-mode → preventing-rules inverse map (carried forward from prior inquiry).
- **Whether more disciplines have Form-3 (absorbed) instances waiting to be recognized.** The audit found 1 clear Form-3 example (sense-making's structured ambiguity entry template). Are there more in `/decompose`'s structured Q-tree generation, `/innovate`'s mechanism templates, `/td-critique`'s adversarial structure? An audit specifically scanning for Form-3 candidates would surface them.
- **The "discipline-spec maintenance toolkit" emergent property.** This inquiry's deliverables (Three Forms + Lifting Recipes + per-discipline plan template) plus the prior inquiry's named patterns plus the placement convention together form a maintenance toolkit. Whether to formalize this toolkit as a corpus-level concept (in `enes/discipline_taxonomy.md` or elsewhere) is a frontier observation; not promoted to artifact in this inquiry.

### Refinement Triggers

- **If a per-discipline tidy pass reveals a Form-2 sub-type not in the current 4 (FM-buried, inline bullet, orphan, embedded),** the spec addendum's sub-type list needs extension.
- **If the Form-3-fit criterion proves insufficient** (future contributors apply it incorrectly, or are unsure when Form 3 fits), refine the criterion with examples or counter-examples.
- **If the bundling strategic recommendation (Pattern B + per-discipline passes)** turns out to add too much per-touch scope, switch to separate sweeps.
- **If `homegrown/contracts/discipline_output.md` ships** with a different verdict format than this finding assumes, revisit the per-discipline Pattern B notes.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
we made many tiny additions to thinking disciplines, these additions were to prevent
certain failures. So maybe you can compare original versions of disciplines and how
they were changed and tell me if there is common pattern, a before undiscovered
dimension, paradigm, protocol regarding them?

one thing i can think of is, just like conclude protocol help creating finding.md,
maybe we need per discipline output protocol?

but this is just one idea, probably there are more solid ideas

in my understanding in development we need constant cleaning and refactors, like
brushing your teeth every morning. And this is what i want you to do. Inspect all
MVL+ relevant disciplines and tell me if our current structure is pregnant to
something new? or something new is already there but it is not named or it is not
tidied..

lets calculate this loop again. this time lets be more careful about what is being
asked and what next actions are needed
```

User's mid-prior-loop pushback that triggered the recalculation:

```text
i dont understand why pattern A Step Refinement doesnt cause reshaping of the
sensemaking discipline. the idea was we already have sth like Step Refinement but
it scattered no? if yes then we must fix the scattered parts no?
```

</details>
