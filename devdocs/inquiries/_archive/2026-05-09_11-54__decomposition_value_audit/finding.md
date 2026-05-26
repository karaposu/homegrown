---
status: active
---
# Finding: Decomposition value audit

## Question

From `_branch.md`:

> Does the Decomposition discipline step in the MVL+ pipeline (E → S → **D** → I → C) produce substantial value across recent inquiries, or is it producing ceremony that could be folded into Sensemaking or skipped — and if it does produce value, what specifically is the value, and when (under what inquiry shapes) does it pay off vs. when does it not?

**Context for a reader new to this project.** This audit looks at the homegrown thinking-engine library at `/Users/ns/Desktop/projects/native/`, which defines a five-discipline cognitive loop called MVL+ (Exploration → Sensemaking → **Decomposition** → Innovation → Critique). Each discipline has a spec under `homegrown/<discipline>/references/<discipline>.md`. The user runs a discipline by saving its output as a markdown file inside an inquiry folder under `devdocs/inquiries/`. The user's question targets the third discipline (Decomposition; spec at `homegrown/decompose/references/decompose.md`), asking whether running it after Sensemaking earns its place in the loop.

**Goal of this finding.** Per `_branch.md`, the user should be able to read this and decide: leave the pipeline as E→S→D→I→C, or change something specific about D's role. This finding produces (1) an empirical value-tag distribution across the 10 audited inquiries, (2) a graded verdict with explicit precision-preserving categories, and (3) three concrete options + a recommendation.

---

## Finding Summary

- **Empirical answer.** Across the 10 most recent inquiries audited (each one's `decomposition.md`, with corresponding `sensemaking.md` and `innovation.md` consulted as ground-truth), Decomposition's value distribution was 0 HIGH / 5 MEDIUM / 2 LOW-MEDIUM / 3 LOW / 0 NEGATIVE. **No inquiry scored HIGH.** D's role in this corpus is formalization-of-S's-already-implicit-partition, not discovery of new partitions.

- **Graded verdict (not binary).** The user's question ("substantial or not much?") translates to four precisions, each with confidence:
  - *Discovery sense:* **No, not substantial** (HIGH confidence) — D does not surface partitions Sensemaking didn't already make implicit.
  - *Formalization sense:* **Yes, modest value** (HIGH confidence) — pieces are uniformly shaped, verification criteria define done, Innovation consumes them cleanly.
  - *Validation sense:* **Unknown** (HIGH confidence on the unknownness) — every D in the corpus self-evaluated as PASS (10/10), which doesn't disambiguate "broken self-eval" from "genuinely well-shaped decompositions."
  - *Inquiry-shape variance:* **Suggestive but unconfirmed** (MEDIUM confidence) — the 2 non-meta-design inquiries (one LOOP_DIAGNOSE inquiry, one application inquiry) earned MEDIUM with qualitatively different value-shapes; N=2 too thin to confirm.

- **Self-reference scope.** The verdict is **corpus-internal**, not universal — 8/10 audited inquiries are meta-design inquiries (about /decompose itself or other discipline tidying), so the sample is biased toward the inquiry-shape that least benefits from D. This inquiry's own D-output (the partition that produced this finding) scored MEDIUM under the same audit framework — consistent with the corpus median, not undermining the verdict.

- **Recommended action: Assembly A (Self-honesty thread) + Q1.2-a-mitigated as cheap companion.** Five small, descriptive edits to `homegrown/decompose/references/decompose.md` (the Structural Decomposition discipline spec) plus a re-audit signal:
  - **Q1.1-f** — Add an honest value tag (HIGH/MEDIUM/LOW) to the Step 7 self-evaluation, with the requirement that the tag's justification name what Sensemaking didn't already surface.
  - **Q1.3-a** — Force the Determination-mechanism check (added to Step 7 in the prior `discipline_corpus_tidying_application` inquiry) to fire explicitly with a one-sentence reason, instead of being silent when no concept is identified.
  - **Q1.3-b** — Add a 2-line example to the spec showing when the Determination-mechanism check fires vs when it doesn't.
  - **Q1.2-a-mitigated** — When all decomposition pieces are Layer-0 with no cross-piece interfaces, mark Steps 5 (Map Interfaces) and 6 (Order by Dependency) as optional, with a required explicit declaration when D chooses to skip them.
  - **Q3-c (signal-based re-audit trigger)** — Once the value tag exists, the next audit fires when a NEGATIVE tag appears or when ≥2 HIGH tags accumulate (whichever comes first). This is a maintenance-side hook, not a machinery-side gate.

- **Two alternatives the user should consider against the recommendation.**
  - *Option B (deferred):* Assembly B (Shape-vocabulary thread) — open a separate inquiry on whether the always-E→S→D→I→C rule should permit conditional D for Layer-0-only inquiries. Trigger: after a re-audit confirms the Layer-0 pattern with diverse shapes. Medium cost; defers the pipeline-rule question.
  - *Option C (do nothing):* The audit's verdict stands as a corpus-internal observation. No spec changes. Re-audit later if the pattern shifts. Costs zero and preserves the always-pipeline rule + the user's stated "brushing teeth" disposition (favor low-cost ongoing refinement). Legitimate option if the user prefers to act only when D produces NEGATIVE value, not just MEDIUM.

- **Why not "remove D from the pipeline."** The always-E→S→D→I→C rule is a hard constraint within this audit's scope. Pipeline-level changes belong to Option B's deferred inquiry. Also: 0 NEGATIVE D-outputs across the 10 inquiries is meaningful counter-evidence against removal; D earns marginal value uniformly, never costs negative.

---

## Finding

### Why this audit ran

The user has been refining the homegrown thinking-engine project across multiple inquiries this week. The most recent ones (`devdocs/inquiries/2026-05-08_*` series) had been auditing each discipline's spec for bloat, naming a shared "Step Refinement" primitive (canonical home at `enes/step_refinement.md`), and applying per-discipline tidy plans. The /decompose discipline received its own tidy in the `discipline_corpus_tidying_application` inquiry. Then the user asked: setting aside the spec's tidiness, does running Decomposition after Sensemaking actually do useful work? The audit looked at the last 10 inquiries' `decomposition.md` outputs to answer empirically.

### What the empirical inspection found

The Exploration step read all 10 `decomposition.md` files plus 1 corresponding `sensemaking.md` and 3 corresponding `innovation.md` files for ground-truth comparison. Five cross-inquiry patterns emerged:

1. **A common template (Rule / Failure / Cross-reference / Visual marker, abbreviated R/F/C/V) dominates rule-extraction inquiries.** 5 of 10 inquiries used this template structure for D's pieces.
2. **Self-evaluation is universal PASS.** 10/10 self-evals in the corpus came back PASS on the 3 minimum dimensions (Independence, Completeness, Reassembly).
3. **The Determination-mechanism check fires 0/10.** This check (added to Step 7 in the recent tidying inquiry) didn't fire once across the 10 audited Ds. The check is silent when no triggering concept is identified, so we cannot tell whether the check is correctly silent (no triggering cases existed in the corpus), wrongly silent (triggering cases existed but the check didn't recognize them), or somewhere in between.
4. **Interface/dependency machinery is mostly perfunctory.** 8 of 10 audited Ds had Layer-0-only pieces (no nested sub-pieces, no cross-piece interfaces, read-only flows). The full Step 5 (Map Interfaces) and Step 6 (Order by Dependency) machinery was produced but did no observable work in those cases.
5. **Innovation consumes D's pieces 1:1.** In the sampled `innovation.md` files, proposals organized per-piece following D's question tree, but Innovation's content didn't visibly require D's specific structuring — coherent proposals would have emerged from S's SV6 directly in those samples.

### What Sensemaking stabilized

Sensemaking's six ambiguity-collapse steps produced a graded model with these key precisions:

- **D's contribution is two-component.** A primary contribution (formalization — observable across all 10 inquiries) and a secondary contribution (validation, via the self-evaluation — unknown because of the 100% PASS rate).
- **PASS-stamping is observable; interpretation is uncertain.** The 10/10 PASS rate could mean the self-eval is a no-op, OR it could mean the decompositions are genuinely well-shaped. The sample doesn't disambiguate. Refining the self-eval is a robust action under either interpretation.
- **Inquiry-shape variance is suggestive at N=2.** The two non-meta-design inquiries (one LOOP_DIAGNOSE, one application) earned MEDIUM and showed qualitatively different value-shapes — but two data points cannot confirm a pattern across the broader space of inquiry shapes.
- **Verdict-shape is graded, not binary.** The user's binary phrasing translates cleanly to "modest formalization-value; not substantial in the discovery sense; some inquiry shapes get more."
- **Self-reference risk is real.** The verdict scope is corpus-internal; this inquiry's own D will be audited under the same framework. External validation is deferred.
- **Pipeline-level changes are blocked by the always-E→S→D→I→C rule** within this inquiry's scope. Within-D-spec refinements + audit-again-later are the available moves.

### What Decomposition partitioned (the actionable space)

After Sensemaking, the actionable space had four regions: (1) within-D-spec refinements, (2) a possible separate inquiry on the pipeline rule, (3) an audit-again-with-diversity protocol, and (4) the verdict-communication artifact (this finding). Decomposition partitioned this space into 4 pieces (Q1, Q2, Q3, Q4), with Q1 having three sub-pieces for the three named within-D-spec problems (PASS-stamping; perfunctory machinery for Layer-0-only inquiries; the silent Determination-mechanism check). The piece order was {Q1, Q2, Q3} in parallel, then Q4 as synthesis sink.

This decomposition's own honest value tag (per the framework being prescribed back to D) was MEDIUM. The Q1 sub-piece partitioning into three named problems was the genuine partitioning work — those three problems weren't separated explicitly in Sensemaking's three-options framing. Q2/Q3/Q4 were mostly reformatting Sensemaking's outputs with verification criteria added.

### What Innovation generated (the possibility space, organized per piece)

Innovation applied all seven mechanisms (4 generators: Combination, Absence Recognition, Domain Transfer, Extrapolation; 3 framers: Lens Shifting, Constraint Manipulation, Inversion) and produced 40 candidate proposals across the 6 piece-tracks (Q1.1, Q1.2, Q1.3, Q2, Q3, Q4). Three cross-piece convergences emerged:

1. **Explicit-signaling-over-implicit-PASS.** Q1.1 (require justified value tag), Q1.3 (force the Determination check to fire visibly), and Q3-c (signal-based re-audit trigger) all push the same direction: replace silent or implicit states with explicit, evidence-bearing outputs. Three or more mechanisms converge on this thread.
2. **Inquiry-shape-vocabulary as cross-cutting primitive.** Q1.2 (Layer-0-only trigger), Q2 (D-conditional based on inquiry-shape signals), and Q3-a (shape-stratified re-audit) all need the same primitive: a settled vocabulary for inquiry shapes. Three or more mechanisms converge.
3. **Conservative do-nothing as legitimate option.** Each piece's inversion (don't change the spec at this piece) reflects the audit's own conservative-default. Six inversions converge on this thread; the user's right to take no action is preserved.

### What Critique evaluated (and which candidates survived)

Critique constructed 10 evaluation dimensions (6 default — Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance — plus 4 project-specific: Phase-fit, Self-reference robustness, Pipeline-rule respect, Corpus-grounding). Pipeline-rule respect operated as a VETO: any candidate proposing to remove D from the pipeline within this inquiry's scope was automatically killed.

After per-candidate adversarial testing (prosecution + defense + collision per candidate, with multi-axis prosecution depth applied where relevant): 11 candidates were KILLED (with seeds extracted), 12 were REFINED (with merge-targets or mitigations named), 14 SURVIVED, and 3 were DEFERRED with explicit revival triggers.

Critique then ran the assembly check across surviving candidates. Three coherent assemblies emerged:

- **Assembly A — Self-honesty thread** (Q1.1-f honest value tag + Q1.3-a explicit firing of the Determination-mechanism check + Q1.3-b spec example + Q3-c signal-based re-audit + Q4-a-with-lead-paragraph-and-table for finding.md presentation). All edits descriptive at the discipline machinery file (low risk per the Step Refinement primitive's phase-fit rule), multi-mechanism convergent, and corpus-grounded. Assembly A SURVIVED Critique.
- **Assembly B — Shape-vocabulary thread** (Q1.2-a-mitigated Layer-0-only trigger + Q2-a or Q2-c deferred separate-inquiry framing + Q3-a-mitigated shape-stratified re-audit protocol + Q4-b folded into Q4-a). Higher activation cost because the inquiry-shape vocabulary doesn't exist as a settled primitive yet. Assembly B was REFINED with staging guidance: ship Q1.2-a now (with the explicit-declaration mitigation); ship Q3-a as a re-audit protocol document; defer Q2.
- **Assembly C — Conservative do-nothing** (the union of the six inversions). Assembly C SURVIVED as a baseline option, not as the recommendation.

### Why Assembly A is the recommended action

Assembly A is the cheapest direct response to the audit's named findings. Each of its components addresses one specific corpus-observed problem:

- *Q1.1-f addresses PASS-stamping* by adding a value tag with required justification. The mechanism is empirically demonstrated by this inquiry's own decomposition output, which produced an honest MEDIUM tag with explicit reasoning rather than reflexively claiming HIGH. The mitigation (justification must name what Sensemaking didn't surface) gives downstream audits a falsifiable check against the tag becoming formulaic.
- *Q1.3-a addresses the silent Determination-mechanism check* by forcing it to fire explicitly with a one-sentence reason in every D's Step 7 output. Without this change, future audits cannot distinguish among the four hypotheses for the 0/10 firing rate (trigger wrong, wording wrong, true zero, silent PASS). With it, the explicit firings accumulate as data — even if every future firing is "PASS — no concept," that uniformity itself is informative.
- *Q1.3-b adds a concrete example to the spec*, which costs little and complements Q1.3-a by helping operators recognize triggering cases.
- *Q1.2-a-mitigated addresses perfunctory machinery* for the 8/10 Layer-0-only pattern by marking Steps 5 and 6 optional when the pieces have no cross-piece interfaces, with a required explicit declaration when the D-runner skips them. The declaration mitigation prevents silent under-decomposition (per /decompose's own failure mode #4: missing pieces).
- *Q3-c is a signal-based re-audit trigger*, conditional on Q1.1-f shipping (the value tag becomes the signal). Phase-fit at maintenance, not at the discipline machinery file — preferred per the Step Refinement primitive's phase-fit rule.

All five edits are descriptive at the machinery file (low risk per phase-fit), aligned with the user's "brushing teeth" disposition (low-cost ongoing refinement over redesign), and respect the always-pipeline rule (no candidate proposes removing D). The Step Refinement primitive's Three Forms framework (`enes/step_refinement.md`) absorbs the additions cleanly — each is a Form 1 standalone refinement rule with explicit type tag.

### Why not Assembly B as primary action

Assembly B has higher activation cost because inquiry-shape vocabulary doesn't yet exist as a named primitive. Assembly B's pieces benefit from a primitive that has to be built across multiple inquiries before it's settled. Q1.2-a from Assembly B (the Layer-0-only trigger) is cheap and survives independently — it's already in the recommendation. The remaining Assembly B pieces (Q2 separate inquiry on pipeline rule; Q3-a shape-stratified re-audit) are deferred until a re-audit confirms the Layer-0 pattern with diverse shapes.

### Why not Assembly C (do nothing)

Assembly C is the legitimate baseline. The audit's verdict is graded MEDIUM, not NEGATIVE — there is no urgent failure. Assembly C is the right choice if the user prefers to act only when D produces NEGATIVE value or HIGH-confidence inquiry-shape findings. The five Assembly A edits are small enough that ignoring them isn't a clear loss; they're improvements at the margin, not corrections of an active failure.

The one consideration against pure Assembly C: the silent Determination-mechanism check costs nothing per individual inquiry, but as inquiries accumulate, the silence prevents future audits from improving. Q1.3-a alone (force-explicit firing) is the cheapest single edit that preserves diagnostic value over time. If the user picks Assembly C overall, Q1.3-a is the smallest-step recommendation that still avoids the diagnostic-blindness cost.

---

## Next Actions

### MUST

- **What:** Add an honest value tag (HIGH/MEDIUM/LOW) to Step 7 of `homegrown/decompose/references/decompose.md`, with the requirement that the tag's justification name what Sensemaking didn't already surface (Q1.1-f).
  - **Who:** A small edit to the discipline spec; ships as part of a coordinated edit referencing this audit.
  - **Gate:** Condition-bound — ships when the user accepts Assembly A as the recommended action.
  - **Why:** Addresses the corpus's 10/10 PASS-stamping observation; gives downstream audits a falsifiable check on the tag's calibration. Low risk because phase-fit is descriptive at the machinery file.

- **What:** Force the Determination-mechanism check at Step 7 to fire explicitly with a one-sentence reason in every D output (Q1.3-a).
  - **Who:** Same coordinated edit to `homegrown/decompose/references/decompose.md`.
  - **Gate:** Same condition-bound trigger as Q1.1-f.
  - **Why:** Disambiguates the four hypotheses for the 0/10 firing rate; even uniform "PASS — no concept" reports across future inquiries become useful data.

- **What:** Add a 2-line example to `homegrown/decompose/references/decompose.md` showing one case where the Determination-mechanism check fires (FAIL) and one where it doesn't (PASS) (Q1.3-b).
  - **Who:** Same coordinated edit.
  - **Gate:** Same trigger.
  - **Why:** Helps D-runners recognize the triggering case shape; complements Q1.3-a.

- **What:** Mark Steps 5 (Map Interfaces) and 6 (Order by Dependency) as optional in `homegrown/decompose/references/decompose.md` when all decomposition pieces are Layer-0 with no cross-piece interfaces, with a required explicit declaration when the D-runner chooses to skip them (Q1.2-a-mitigated).
  - **Who:** Same coordinated edit.
  - **Gate:** Same trigger.
  - **Why:** Addresses the corpus's 8/10 perfunctory-machinery observation; the explicit-declaration mitigation prevents silent under-decomposition (failure mode #4: missing pieces) from sneaking in.

### COULD

- **What:** Add a signal-based re-audit trigger at the maintenance level: re-audit fires when a NEGATIVE value tag appears OR when ≥2 HIGH value tags accumulate (Q3-c).
  - **Who:** Maintenance-side hook, not in the discipline machinery file. Could live in a re-audit protocol document under `devdocs/protocols/` or in the user's memory system.
  - **Gate:** Conditional on Q1.1-f shipping (the value tag is the signal).
  - **Why:** Catches inquiry-shape shifts via outliers; cheaper than a calendar-based re-audit; preferred phase-fit (active at maintenance, not at machinery).

### DEFERRED

- **What:** Open a separate inquiry on whether the always-E→S→D→I→C pipeline rule should permit conditional D for Layer-0-only inquiries (Q2-a or Q2-c framing).
  - **Gate:** Observable trigger — open after a re-audit confirms or refines the Layer-0-only pattern with non-meta-design inquiries (≥3 application inquiries AND ≥3 LOOP_DIAGNOSE inquiries accumulated since this audit).
  - **Why (if revived):** Provides architectural latitude for the rare cases where D actively wastes effort (which the audit did not observe — 0/10 NEGATIVE — but might emerge under different inquiry shapes).

- **What:** Define a coupling-density threshold for Steps 5/6 skip-decisions in /decompose (Q1.2-d).
  - **Gate:** Observable trigger — revisit if Q1.2-a-mitigated ships and produces ≥3 ambiguous Layer-0-vs-Layer-1 cases where the binary trigger felt too coarse.
  - **Why (if revived):** Quantitative threshold could replace the binary trigger if calibration data emerges.

- **What:** Consider loosening the trigger for the Determination-mechanism check to fire when a load-bearing concept is referenced in 2+ pieces or in 1 piece's verification criteria without an explicit determination clause (Q1.3-d).
  - **Gate:** Observable trigger — revisit if Q1.3-a ships and ≥3 explicit-PASS-no-concept reports come back where the concept was actually load-bearing but the check missed it.
  - **Why (if revived):** Fixes the trigger's recognition rate after Q1.3-a's diagnostic data exposes the gap.

- **What:** Build a shape-stratified re-audit protocol document with diversity thresholds (Q3-a) and verdict-revision rules (CONFIRM / REFINE / REVISE) (Q3-d, Q3-e folded in).
  - **Gate:** Time-bound or observable — once corpus has accumulated ≥3 application inquiries AND ≥3 LOOP_DIAGNOSE inquiries since this audit (the diversity threshold). Or signal-bound: any NEGATIVE D output triggers immediately.
  - **Why (if revived):** The current verdict's sample-bias caveat (8/10 are meta-design) gets resolved by re-auditing with the missing shapes; a settled protocol prevents the next re-audit from re-deriving the methodology.

---

## Reasoning

### What was killed and why

- **Q1.1-c (graded score per dimension HIGH-PASS / MEDIUM-PASS / etc.)** was killed as redundant with Q1.1-f (the value tag does the contribution rating better; structural PASS should stay binary). Seed: structural PASS belongs to the structural axis; graded scoring belongs to the contribution axis.

- **Q1.1-e (remove self-eval entirely; let Critique handle quality)** was killed on stakes + honesty grounds. The audit's finding was "uncertain interpretation," not "the test is broken." Removing the test preempts disambiguation rather than enabling it. The 3-dimension structural floor might still be doing real work even at 100% PASS — removal would lose the floor without replacement.

- **Q1.2-b (default-Layer-0 with opt-up trigger)** was killed on stakes + robustness. Reversing the default means coupling-aware D becomes opt-in, which inverts /decompose's safety prior and risks under-decomposition (failure mode #4: missing pieces). Q1.2-a achieves the cost reduction without inverting the default.

- **Q1.3-e (remove the Determination-mechanism check)** was killed on stakes + sample-bias. N=10 with 0 firings is too thin to justify deletion. This inquiry's own D used the check; removing it would have removed part of this D's self-eval.

- **Q1.3-f (leave the Determination-mechanism check alone — N=10 too thin)** was killed as dominated by Q1.3-a. Q1.3-a is so cheap (one extra line per D output) that "do nothing" loses to "force explicit firing" on cost-benefit. The defensible "do nothing" position only holds if Q1.3-a doesn't ship.

- **Q2-b (broad / all-disciplines pipeline-rule inquiry)** was killed as out-of-scope. Auditing only D doesn't justify a broad pipeline-rule inquiry; the broader inquiry would need audits of E, S, I, C as seed input first.

- **Q2-f (broader-corpus inspection as seed mode)** was killed as over-scope for the deferred inquiry's seed; this audit's narrow seed is sufficient if the deferred inquiry stays narrow.

- **Q3-b and Q3-g (count-based / mechanical re-audit, no diversity weighting)** were killed as regressions on the audit's main lesson. The audit found sample-bias was the load-bearing limitation; re-auditing without diversity weighting would just reproduce the same bias.

- **Q4-c (option-card-per-option subsections in finding.md)** was killed as heavyweight. Three options with one baseline doesn't warrant card-per-option structure; a small table or a paragraph suffices and respects the user's "brushing teeth" disposition.

- **Q4-e (two-tier artifact: separate decision-card + finding.md)** was killed as dominated by Q4-a-with-lead-paragraph (a single artifact achieves the same outcome with less coordination cost).

### What survived and why

- **Assembly A (Self-honesty thread)** survived as the primary recommendation. Multi-mechanism convergence (3+ mechanisms point to "explicit signaling over implicit PASS"). All components descriptive at the discipline machinery file (low phase-fit risk). Each component corpus-grounded (pattern observed in the audit) or hypothesis-with-mitigation. The empirical demonstration — this inquiry's own D produced an honest MEDIUM tag with explicit reasoning, not a reflexive HIGH — provides external grounding against the self-reference-collapse failure mode.

- **Q1.2-a-mitigated** survived independently and was added to the recommendation as a cheap companion. Corpus-grounded by the 8/10 Layer-0-only pattern. The mitigation (explicit declaration when sections skipped) parallels Q1.3-a's force-explicit pattern, making it part of the same convergence thread.

- **Assembly B (Shape-vocabulary thread)** survived with staging guidance. Q1.2-a is in the recommendation; Q3-a is in DEFERRED with a clear revival trigger; Q2 is in DEFERRED with a clear revival trigger. The bundle doesn't ship as-is because activation cost is higher than its near-term value.

- **Assembly C (Conservative do-nothing)** survived as the baseline. Six inversions converged on this thread; the audit's verdict (graded MEDIUM, not NEGATIVE) does not force action. The user can pick Assembly C and the audit's findings remain valid as a corpus-internal observation.

### Contradictions reconciled across the pipeline

- **Exploration found 0 HIGH; Decomposition asked whether D's value can be HIGH self-applied.** This decomposition's own self-eval scored MEDIUM, consistent with the corpus median rather than self-validating. The contradiction (does this inquiry's own D refute the audit?) was resolved by accepting the MEDIUM tag honestly: the audit's findings hold under self-application; the verdict is corpus-internal scope.

- **Sensemaking concluded "PASS-stamping uncertain"; Innovation produced refinements that themselves risk PASS-stamping.** Critique enforced the honesty test, requiring each refinement (Q1.1-a, Q1.1-b, Q1.1-f, Q1.3-a) to carry a mitigation that would prevent it from becoming formulaic. Q1.1-f's mitigation (justification must name what S didn't surface) survived; Q1.1-a was kept as a folded-in component with the same mitigation.

- **Innovation found "remove the silent check" as an inversion (Q1.3-e); Critique required preserving sample-bias caveat.** Resolved by killing Q1.3-e on stakes (N=10 too thin for deletion) and surviving Q1.3-a (force explicit firing, which preserves the check while making it diagnostic). The kill seed — "the check might be valid but silent; force explicit firing before considering deletion" — re-enters as the path to future evidence.

---

## Open Questions

### Monitoring

- **Will future audits' value tag distribution shift after Assembly A ships?** Specifically: does the 0 HIGH / 5 MEDIUM / 2 LOW-MEDIUM / 3 LOW / 0 NEGATIVE distribution change once D-runners are required to produce honest tags with justified contribution? Observable after ≥10 future inquiries with Assembly A in effect. If the new distribution shows similar MEDIUM-dominance with non-formulaic justifications, the verdict is confirmed; if HIGHs start appearing, D's value-shape was being under-counted by the silent self-eval; if LOWs/NEGATIVEs appear, conditional D becomes a more pressing question.

- **Will the Determination-mechanism check's explicit firings reveal a hypothesis among H1/H2/H3/H4?** Specifically: across the next 10 D outputs with Q1.3-a in effect, are the explicit firings uniformly "PASS — no concept" (suggesting H3 — true zero in this corpus shape), or do FAILs start appearing (suggesting H1 or H2 — trigger or wording was wrong)? Observable as the explicit firings accumulate.

### Blocked

- **Whether D should be conditional in the always-E→S→D→I→C pipeline.** Cannot be answered until a re-audit with diverse inquiry shapes (≥3 application + ≥3 LOOP_DIAGNOSE inquiries since this audit) provides the missing sample. The deferred separate inquiry (Q2-a or Q2-c) ships when that condition is met.

### Research Frontiers

- **Inquiry-shape vocabulary as a cross-cutting primitive.** This audit showed three pieces (Q1.2 trigger, Q2 conditional-D, Q3 stratified re-audit) all need a shared vocabulary for inquiry shapes. The vocabulary doesn't exist as a settled primitive yet; it would emerge organically as Assembly A ships and inquiry-shape signals (Layer-0-only declarations; value tags) accumulate. No known forced path; requires patience and observation.

### Refinement Triggers

- **Q1.2-a's binary trigger** re-opens to graded-threshold (Q1.2-d) if ≥3 ambiguous Layer-0-vs-Layer-1 cases appear after Q1.2-a-mitigated ships.

- **Q1.3-a's wording** re-opens to loosened-trigger (Q1.3-d) if ≥3 explicit-PASS-no-concept reports come back where the concept was actually load-bearing but missed.

- **The verdict's "MEDIUM-typical" claim** re-opens if the next re-audit's distribution shifts by ≥20 percentage points on any value-tag bucket OR if a NEGATIVE D appears.

- **The "always-pipeline rule" hard constraint** re-opens via Q2's deferred inquiry if its revival trigger fires (≥3 application + ≥3 LOOP_DIAGNOSE inquiries accumulated).

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
lets a bit dwelve into what decomposition does. I want you to inspect last 10
inquiries in devdocs/inquiries and tell me if decomposition discipline step
produces any value or not much? what is the sense of decomposing after sensemaking,
does it help with anything susbtential?
```

</details>
