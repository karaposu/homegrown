# Innovation: Decomposition Value Audit

## User Input

devdocs/inquiries/2026-05-09_11-54__decomposition_value_audit/_branch.md

```
lets a bit dwelve into what decomposition does. I want you to inspect last 10
inquiries in devdocs/inquiries and tell me if decomposition discipline step
produces any value or not much? what is the sense of decomposing after sensemaking,
does it help with anything substantial?
```

Innovation generates per-piece proposals across the decomposition's 4 pieces (Q1 with sub-pieces Q1.1/Q1.2/Q1.3; Q2; Q3; Q4). For each piece: ≥3 candidates spanning ≥3 axes + ≥1 inversion. Each candidate tagged with phase-fit + anchor/hypothesis classification + self-application risk where relevant.

**Tag legend:**
- *Phase-fit:* `desc-machinery` (descriptive in references/decompose.md) / `desc-protocol` (descriptive in skill protocol/maintenance) / `active-machinery` (gate at machinery; risky per `enes/step_refinement.md` phase-fit) / `active-maintenance` (gate at maintenance; preferred for active rules) / `structural` (architectural, large blast radius) / `decision` (no spec change; choose-and-document).
- *Anchor:* `GROUNDED` (corpus evidence directly supports) / `PARTIAL` (corpus partially supports) / `HYPOTHESIS` (proposed; would need future test to confirm).
- *Self-application risk:* flagged when the proposal could itself PASS-stamp under its own framework.

---

## Q1.1 — Sharpen self-eval against PASS-stamping

**Seed:** 10/10 self-evals returned PASS. Sensemaking left interpretation uncertain (broken-vs-well-shaped). Refining without disambiguating creates a real risk of replacing one PASS-stamp with another.

### Mechanisms applied

- **Absence Recognition:** missing — a measure of D's contribution beyond what S already produced. The audit's framework itself (HIGH/MEDIUM/LOW value tag) is the missing primitive.
- **Constraint Manipulation:** add a constraint that PASS requires concrete justification (not bare "yes").
- **Inversion (Level 1 → 3):** "Self-eval is checking something" → "It checks structural floor only" → "Replace structural-floor PASS with contribution-tag." System-level result: the value tag *is* the meaningful self-eval; PASS/FAIL is a structural prerequisite.
- **Domain Transfer:** code review's "what does this PR enable that wasn't possible before?" — D should answer "what does this piece enable that S didn't already provide?"
- **Lens Shifting:** reframe from "is PASS broken?" → "can we distinguish perfunctory PASS from legitimate PASS?" The 100% rate isn't the bug; the inability to tell is.
- **Combination:** honest-value-tag + per-PASS-justification = a self-eval that PASSes structurally and SHOWS contribution.
- **Extrapolation:** if the trend holds (100% PASS), the test is permanently a no-op. Trend forces decision: make it catch something or accept it as ceremony.

### Candidates

**Q1.1-a — Add an "honest value tag" requirement to Step 7.**
D rates its own contribution beyond S using HIGH/MEDIUM/LOW tag with one-sentence justification ("Q1's three sub-targets are genuine partitioning surfaced from exploration patterns; Q2/Q3 are mostly reformatting"). The tag joins the 3-dim check; structural PASS remains the floor.
- *Phase-fit:* `desc-machinery` (Step 7 addition)
- *Anchor:* GROUNDED (this audit's framework being prescribed back; this inquiry's D self-applied this)
- *Axis:* meta-loop axis (does D rate D itself?)
- *Self-application risk:* FLAG — could PASS-stamp as "HIGH because I worked hard." Mitigate by requiring the justification to name what S didn't surface.

**Q1.1-b — Require per-PASS justification.**
Each PASS in the 3-dim check must include one concrete sentence pointing to artifact (e.g., "Reassembly PASS because Q1+Q2+Q3+Q4 outputs reconstruct the SV6-named actionable space"). Bare PASS → FAIL.
- *Phase-fit:* `desc-machinery` (table addition)
- *Anchor:* HYPOTHESIS (corpus had no justified PASSes to compare; would change behavior)
- *Axis:* dimension-shape axis (binary stays, but PASS gains evidence requirement)
- *Self-application risk:* FLAG — justification can become formulaic; mitigate by requiring it to name a specific other piece or interface.

**Q1.1-c — Graded score per dimension (HIGH-PASS / MEDIUM-PASS / LOW-PASS / FAIL).**
Replaces binary PASS/FAIL. Allows "this PASSes but trivially." LOW-PASS forces D to acknowledge perfunctory cases.
- *Phase-fit:* `desc-machinery`
- *Anchor:* HYPOTHESIS
- *Axis:* dimension-shape axis (binary → graded)

**Q1.1-d — Reduce dimensions for trivial cases (couples to Q1.2).**
For Layer-0-only inquiries, run only 1 dimension (Reassembly). Don't run a full self-eval if the inquiry shape doesn't warrant it.
- *Phase-fit:* `desc-machinery`
- *Anchor:* PARTIAL (corpus showed Layer-0-only pattern)
- *Axis:* coverage-axis (full → reduced)
- *Coupling:* Q1.2 dependency

**Q1.1-e [INVERSION at component level] — Remove self-eval entirely; let critique handle quality.**
D produces the partition; quality assessment is critique's domain. Removes the PASS-stamping problem by removing the test.
- *Phase-fit:* `structural`
- *Anchor:* HYPOTHESIS
- *Axis:* responsibility-axis (D-self-checks → C-checks-D)
- *Self-application risk:* loses the safety net for D-runs without C; per always-pipeline rule, C always runs, so this is feasible but architectural.

**Q1.1-f [META-INVERSION at system level] — Replace structural PASS/FAIL with the honest value tag as PRIMARY output of Step 7.**
3-dim check becomes structural floor (yes/no, no narrative). Value tag becomes the meaningful contribution-statement. Combines Q1.1-a with Q1.1-e's spirit but keeps the structural check. (This inquiry's D output uses this pattern.)
- *Phase-fit:* `desc-machinery`
- *Anchor:* GROUNDED (this inquiry's D self-applied)
- *Axis:* primary-output axis (binary check → contribution statement)

### Convergence
Q1.1-a and Q1.1-f both surface "honest value tag" as primary contribution-measure. Q1.1-b and Q1.1-c both push "evidence required for PASS." These two convergence directions are orthogonal — they could combine.

---

## Q1.2 — Reduce perfunctory machinery for Layer-0-only inquiries

**Seed:** 8/10 inquiries had Layer-0-only structure (no nested sub-pieces, read-only flows, no cross-piece dependencies). Steps 5-6 (interface map, dependency order) were perfunctory.

### Mechanisms applied

- **Absence Recognition:** missing — an explicit "Layer-0-only inquiry" trigger condition. Without it, every D produces full machinery regardless of need.
- **Constraint Manipulation:** add "if Layer-0-only, machinery is reduced" OR remove the implicit "all inquiries get full machinery" default.
- **Domain Transfer:** software's "if no cross-module dependencies, you don't need a dependency graph." Same logic.
- **Lens Shifting:** from "produce all machinery" → "produce what's load-bearing for this inquiry."
- **Inversion:** "always full" → "default minimal, opt up to full when triggered."
- **Extrapolation:** if 80% of inquiries continue Layer-0-only, the spec accumulates ceremony. Trend forces explicit handling.

### Candidates

**Q1.2-a — Trigger condition: "If all pieces are Layer-0 with no cross-piece interfaces, Steps 5-6 are optional."**
Add a guard at Steps 5 and 6: declared explicitly, not assumed.
- *Phase-fit:* `desc-machinery`
- *Anchor:* GROUNDED (8/10 corpus pattern)
- *Axis:* trigger-where axis (Step 5/6 entry point)

**Q1.2-b — Default-Layer-0 with opt-up trigger.**
Reverse the default: D produces minimal machinery (Steps 1-4 + 7) unless cross-piece coupling is detected at Step 1, which triggers Steps 5-6.
- *Phase-fit:* `structural` (default change)
- *Anchor:* HYPOTHESIS (would need re-application to confirm coverage)
- *Axis:* default-direction axis (full→reduce vs minimal→opt-up)

**Q1.2-c — "Optional sections" annotation in spec.**
Steps 5 and 6 marked "optional when no cross-piece interfaces detected at Step 1." Lightweight spec edit; no behavioral change unless D-runs notice.
- *Phase-fit:* `desc-machinery`
- *Anchor:* GROUNDED
- *Axis:* trigger-where axis

**Q1.2-d — Coupling-density threshold.**
If average inter-piece coupling is below threshold T (count of cross-piece interfaces / number of piece-pairs), skip interface map. T defined empirically from corpus.
- *Phase-fit:* `desc-machinery`
- *Anchor:* HYPOTHESIS (T is unproven; needs calibration)
- *Axis:* trigger-criterion axis (binary presence → quantitative threshold)

**Q1.2-e [INVERSION] — Always do full machinery; document the rationale.**
Argument: ceremony is cheap; missing dependency surfaces is expensive when it happens. Document why we keep full.
- *Phase-fit:* `decision` (no spec change)
- *Anchor:* PARTIAL (current state; corpus shows no observed cost from missing dependencies — but absence-of-evidence is not evidence-of-absence)
- *Axis:* default-direction axis (anchor end)

### Convergence
Q1.2-a and Q1.2-c are near-identical in spec impact (annotation vs guard); Q1.2-b is the more invasive variant. Q1.2-d adds quantitative rigor at calibration cost. Q1.2-e is the explicit do-nothing inversion.

---

## Q1.3 — Fix determination-mechanism check non-firing

**Seed:** Recent tidying-application added the determination-mechanism piece check at Step 7 (visual marker). Fires 0/10 in corpus.

### Hypotheses for non-firing

- **H1 — Trigger wrong:** "load-bearing concept whose use depends on a runtime determination" never matches anything in this corpus.
- **H2 — Wording wrong:** the trigger phrasing is opaque; D doesn't recognize when it applies even if cases exist.
- **H3 — True zero:** corpus genuinely has no determination-mechanism cases (corpus is meta-design biased; runtime-determination questions don't appear here).
- **H4 — Detection latency / silent PASS:** the check is correctly silent; PASS is the right answer; the visualization makes it look broken.

### Mechanisms applied

- **Absence Recognition:** missing — the spec lacks an example showing when the check fires AND when it doesn't.
- **Inversion:** "fires too rarely" → "correctly silent for this corpus shape." If H3, no fix needed.
- **Constraint Manipulation:** add — must fire visibly with a reason. Currently it's silent, so we can't distinguish hypotheses.
- **Domain Transfer:** linters with "no findings = clean code OR linter is off" — same disambiguation problem; solution is force explicit reason output.
- **Combination:** force-explicit + add-example + loosen-trigger could combine.

### Candidates

**Q1.3-a — Force explicit firing with reason (PASS or FAIL with one-sentence rationale).**
Self-eval section MUST include: "Determination-mechanism check: PASS — no load-bearing runtime-determination concept identified" OR "PASS — concept X has determination mechanism in piece Y" OR "FAIL — concept X requires determination, no piece addresses it."
- *Phase-fit:* `desc-machinery`
- *Anchor:* GROUNDED (corpus revealed silent non-firing)
- *Axis:* fix-action axis (silence → explicit) + hypothesis-target (disambiguates H1/H2/H3)
- *Disambiguation value:* allows future audits to distinguish H3 (always PASS-no-concept) from H1/H2 (PASS but actually a missed FAIL).

**Q1.3-b — Add an example to the spec.**
Add 2 lines showing a triggering case (e.g., "if Q-tree presupposes 'this is a Layer-0-only inquiry' but no piece defines Layer-0-only — FAIL") and a non-triggering case.
- *Phase-fit:* `desc-machinery`
- *Anchor:* GROUNDED (sensemaking has examples; decompose lacks one)
- *Axis:* hypothesis-target (addresses H2)

**Q1.3-c — Reformulate trigger as a question.**
Replace "load-bearing concept whose use depends on runtime determination" with: "Is there any concept the Q-tree presupposes is determinable, but no piece says HOW to determine it?" Active phrasing, lower abstraction.
- *Phase-fit:* `desc-machinery`
- *Anchor:* HYPOTHESIS (addresses H2)
- *Axis:* hypothesis-target (H2)

**Q1.3-d — Loosen trigger.**
Lower the bar: fires when "concept is referenced in 2+ pieces OR in 1 piece's verification criteria without an explicit determination clause."
- *Phase-fit:* `desc-machinery`
- *Anchor:* HYPOTHESIS (addresses H1)
- *Axis:* hypothesis-target (H1)

**Q1.3-e [INVERSION-A] — Remove the check.**
N=10 with 0 firings is evidence the check isn't earning its place; ceremony.
- *Phase-fit:* `structural`
- *Anchor:* HYPOTHESIS
- *Axis:* fix-action (delete)
- *Self-application risk:* premature; loses the safety net for H3+H4 combined cases when they appear.

**Q1.3-f [INVERSION-B] — Leave it alone.**
N=10 too thin; corpus is meta-design biased; check is for runtime-determination cases that haven't appeared. Wait for re-audit (couples to Q3).
- *Phase-fit:* `decision`
- *Anchor:* GROUNDED (sample-bias is real)
- *Axis:* fix-action (no-op)

### Convergence
Q1.3-a (force-explicit) is a meta-fix that disambiguates the hypothesis space — it makes future audits able to choose between H1/H2/H3. Q1.3-b/c/d address H1/H2 directly. Q1.3-e/f are the inversions on opposite ends. Strong convergence: "the spec needs the check to be visibly diagnostic, not silent."

---

## Q2 — Pipeline-rule inquiry seeding

**Seed:** SV6 named pipeline-rule inquiry as Option 2; this audit can't justify pipeline-level changes alone, but a separate inquiry could.

### Mechanisms applied

- **Lens Shifting:** under what conditions is the always-rule the right default vs the wrong default? At simple-inquiry conditions, the rule looks like ceremony; at complex-inquiry conditions, the rule looks load-bearing.
- **Inversion:** "pipeline is fixed" → "pipeline is conditional" (blocked from this inquiry but is the inquiry's seed).
- **Absence Recognition:** missing — an inquiry-shape vocabulary. "Simple inquiries" needs operationalization before "conditional D" can be defined.
- **Combination:** pipeline-rule + audit-evidence + shape-vocabulary → seedable inquiry.
- **Constraint Manipulation:** add the constraint "must define inquiry-shape signal first" → forces the question into shape-detector design.

### Candidates

**Q2-a — Question framing A (narrow / D-only):**
"Should D be conditional in the always-E→S→D→I→C pipeline based on inquiry-shape signals (e.g., Layer-0-only / no cross-piece coupling), and what would 'conditional' mean operationally — skip-D, abbreviated-D, or D-runs-but-self-skips?"
- *Goal:* verdict on whether to permit conditional D + operational form.
- *Seed input:* this audit's MEDIUM-value finding + Layer-0-only pattern + Q1.2 trigger candidate.
- *Trigger:* open after audit-again confirms pattern with diversity.
- *Phase-fit:* meta-design inquiry (its own discipline runs apply)
- *Anchor:* GROUNDED
- *Axis:* scope-narrow

**Q2-b — Question framing B (broad / all-disciplines):**
"Should the always-E→S→D→I→C rule be loosened across all five disciplines, with conditional execution based on inquiry-shape signals, or is the always-rule itself load-bearing for cognitive consistency?"
- *Goal:* verdict on the rule as architecture.
- *Seed input:* this audit + future audits of E/S/I/C.
- *Trigger:* open after audit-each-discipline (scope expansion).
- *Phase-fit:* meta-design inquiry
- *Anchor:* HYPOTHESIS (likely over-scoped for current evidence)
- *Axis:* scope-broad

**Q2-c — Question framing C (focused on signal-detector):**
"Is there a reliable signal (e.g., S's SV6 already names a partition; no cross-piece coupling) that would safely allow D to abbreviate or skip, and how would the loop detect it?"
- *Goal:* detector design.
- *Seed input:* audit's pattern findings.
- *Trigger:* open now, low cost.
- *Phase-fit:* meta-design inquiry
- *Anchor:* PARTIAL
- *Axis:* scope-focused-signal

**Q2-d — Seed-mode A:** This audit's findings as primary seed (sufficient if Q2-a; insufficient if Q2-b).
**Q2-e — Seed-mode B:** This audit + 2-3 future audits.
**Q2-f — Seed-mode C:** Broader-corpus inspection (all inquiries to date; not just last 10).

**Q2-g — Trigger A:** Open now (low-cost meta-design inquiry).
**Q2-h — Trigger B:** Open after audit-again confirms pattern (couples to Q3).
**Q2-i — Trigger C:** Never until X conditions met (e.g., D produces NEGATIVE somewhere; corpus has 30+ inquiries).

**Q2-j [INVERSION] — Don't open it.**
The always-rule has earned default status by being simple, predictable, and not visibly broken (audit found 0 NEGATIVE D outputs). Open only if D produces NEGATIVE value somewhere, not just MEDIUM.
- *Phase-fit:* `decision`
- *Anchor:* GROUNDED (audit found 0 NEGATIVE)
- *Axis:* trigger-axis (never)

### Axis coverage
- *Scope axis:* a (narrow), b (broad), c (focused-signal). 3 variants.
- *Seed-mode axis:* d, e, f. 3 variants.
- *Trigger axis:* g, h, i, j. 4 variants including inversion.

---

## Q3 — Audit-again-with-diversity protocol

**Seed:** Re-audit later with diverse shapes; how to operationalize "diversity," when to fire, and what threshold determines "enough."

### Mechanisms applied

- **Absence Recognition:** missing — shape-vocabulary. Audit named meta-design / LOOP_DIAGNOSE / application; what else? Unknown until corpus accumulates.
- **Constraint Manipulation:** add "must include ≥N inquiries of each named shape" → stratified sampling.
- **Domain Transfer:** statistics → stratified sampling; medical trials → effect-size threshold (Cohen's d).
- **Inversion:** don't audit-again — this audit is enough.
- **Extrapolation:** if pattern holds in re-audit, verdict strengthens; if broken, verdict needs revision.
- **Combination:** shape-stratification + signal-trigger + revision-protocol → composite re-audit definition.

### Candidates

**Q3-a — Shape-defined diversity (stratified):**
Re-audit triggers when corpus has accumulated ≥3 application inquiries AND ≥3 LOOP_DIAGNOSE inquiries since this audit. Threshold: at least 6 non-meta-design inquiries.
- *Phase-fit:* `desc-protocol` (re-audit protocol document; not in /decompose spec)
- *Anchor:* GROUNDED (sample-bias finding)
- *Axis:* diversity-definition (shape-stratified) + trigger (count of non-meta-design)

**Q3-b — Count-based (every N):**
Re-audit every N=10 inquiries regardless of shape.
- *Phase-fit:* `desc-protocol`
- *Anchor:* HYPOTHESIS (no shape-weighting; ignores sample-bias signal)
- *Axis:* diversity-definition (none) + trigger (uniform count)

**Q3-c — Signal-based:**
Re-audit triggers when (a) a NEGATIVE D appears (D actively slowing the loop) OR (b) 2+ HIGH Ds appear (D producing real partitioning) OR (c) a D scores HIGH-PASS on Q1.1-c's graded scoring.
- *Phase-fit:* `active-maintenance` (signal detection at C or post-C)
- *Anchor:* HYPOTHESIS
- *Axis:* diversity-definition (signal) + trigger (event-driven)

**Q3-d — Threshold for "enough diversity to revise verdict":**
Re-audit produces ACTIONABLE-revision if:
- (i) new shape produces HIGH or NEGATIVE D; OR
- (ii) corpus-wide MEDIUM rate changes by ≥20 percentage points; OR
- (iii) PASS-stamping behavior changes (if Q1.1 implemented and PASS-rate stops being 100%).
- *Phase-fit:* `desc-protocol`
- *Anchor:* HYPOTHESIS
- *Axis:* threshold-shape (multi-condition disjunction)

**Q3-e — Verdict-revision protocol:**
Re-audit can:
- CONFIRM (verdict unchanged; corpus pattern holds);
- REFINE (verdict adjusted on one axis; e.g., inquiry-shape variance moves from "suggestive" to "confirmed");
- REVISE (verdict's main claim changes; e.g., MEDIUM-typical becomes LOW-typical or HIGH-typical).
- *Phase-fit:* `desc-protocol`
- *Anchor:* HYPOTHESIS
- *Axis:* outcome-shape

**Q3-f [INVERSION-A] — Don't audit-again.**
This audit is itself a corpus-internal artifact; further audits are diminishing-returns ceremony. Verdict is solid for what it claims (corpus-internal scope).
- *Phase-fit:* `decision`
- *Anchor:* HYPOTHESIS
- *Axis:* outcome-shape (no re-audit)

**Q3-g [INVERSION-B] — Mechanical re-audit on every Nth inquiry, no diversity weighting.**
Couples to Q3-b. Argument: don't pre-judge diversity; let aggregate trends emerge.
- *Phase-fit:* `desc-protocol`
- *Anchor:* HYPOTHESIS
- *Axis:* diversity-definition (none) + trigger (uniform)

### Axis coverage
- *Diversity-definition axis:* shape-stratified / count-based / signal-based / none. 4 variants.
- *Trigger axis:* count / event / uniform / never. 4 variants.
- *Outcome axis:* CONFIRM/REFINE/REVISE / no-re-audit. 2 variants.

---

## Q4 — Verdict communication artifact

**Seed:** User reads something to decide which option(s). Graded verdict has 3-4 precisions: formalization-yes / validation-unknown / discovery-no / inquiry-shape-suggestive.

### Mechanisms applied

- **Absence Recognition:** missing — a "graded verdict" subsection in finding.md template that preserves the precisions.
- **Combination:** finding.md + decision-table + option-cards.
- **Lens Shifting:** frame as "what does the user need to decide?" rather than "what did we find?"
- **Inversion:** no separate artifact; the audit's existence is the communication.
- **Constraint Manipulation:** add "must include 'do nothing now' as legitimate decision-action."

### Candidates

**Q4-a — finding.md alone (default per CONCLUDE protocol).**
Use the existing finding.md template. Add a "Graded verdict" subsection preserving 4 precisions. Add a "Decision options" subsection listing Q1/Q2/Q3 + "do nothing now" lowest-action.
- *Phase-fit:* `desc-protocol` (default path)
- *Anchor:* GROUNDED
- *Axis:* artifact-shape (single-doc) + weight (medium)

**Q4-b — Decision-table embedded in finding.md.**
Markdown table: rows = options (Q1, Q2, Q3, do-nothing), columns = pros / cons / cost / verdict-impact / recommendation.
- *Phase-fit:* `desc-protocol`
- *Anchor:* HYPOTHESIS
- *Axis:* artifact-shape (single-doc + table) + weight (medium-high)

**Q4-c — Option-card-per-option subsections.**
Each of the 3 options gets its own subsection: trigger-to-act-now / candidate-implementation / risk / recommendation.
- *Phase-fit:* `desc-protocol`
- *Anchor:* HYPOTHESIS
- *Axis:* artifact-shape (single-doc + structured cards) + weight (high)

**Q4-d — Minimal one-paragraph verdict.**
3-4 sentences preserving graded precision (formalization vs validation vs discovery), naming 3 options + do-nothing, handing user the decision.
- *Phase-fit:* `desc-protocol`
- *Anchor:* HYPOTHESIS
- *Axis:* artifact-shape (paragraph) + weight (low)

**Q4-e — Two-tier artifact:**
finding.md as full record; "decision-card" at top of finding.md = 1-paragraph + option-list distillation. Combines Q4-a and Q4-d.
- *Phase-fit:* `desc-protocol` (template addition)
- *Anchor:* HYPOTHESIS
- *Axis:* artifact-shape (tiered) + weight (variable per reader)

**Q4-f [INVERSION] — No separate artifact.**
finding.md is generic per CONCLUDE; the audit sits in devdocs/inquiries/ as the artifact; user reads it as one would any other inquiry. Argument: separate artifact is ceremony.
- *Phase-fit:* `decision` (do-nothing on artifact-design)
- *Anchor:* PARTIAL (existing pattern; works for other inquiries)
- *Axis:* artifact-shape (none) + weight (zero)

### Axis coverage
- *Artifact-shape axis:* single-doc / table / cards / paragraph / tiered / none. 6 variants.
- *Weight axis:* zero / low / medium / medium-high / high / variable. Full spread.

---

## Cross-Piece Convergence

After applying mechanisms across all 6 piece-tracks (Q1.1, Q1.2, Q1.3, Q2, Q3, Q4), three cross-piece patterns emerged:

### Convergence 1 — "Explicit signaling over implicit PASS"

Pieces converging:
- Q1.1-a/b/f (force value tag and per-PASS justification)
- Q1.3-a (force explicit firing with reason)
- Q3-c (signal-based re-audit trigger)

Common structure: replace silent/implicit/binary states with explicit, diagnostic, evidence-bearing outputs. **3+ mechanisms converge on this** — high confidence.

### Convergence 2 — "Inquiry-shape vocabulary as cross-cutting primitive"

Pieces converging:
- Q1.2-a/b/d (Layer-0-only / cross-piece-coupling triggers)
- Q2-a/c (D-conditional based on inquiry-shape signals; signal-detector design)
- Q3-a (shape-defined diversity for re-audit)

Common structure: corpus needs a shared vocabulary for inquiry-shape categorization (Layer-0-only / cross-piece-coupled / meta-design / LOOP_DIAGNOSE / application). Multiple pieces would benefit from the SAME primitive. **3+ mechanisms converge** — high confidence; potential ACTIONABLE for the user.

### Convergence 3 — "Conservative do-nothing as legitimate option"

Pieces converging:
- Q1.1-d / Q1.2-e / Q1.3-f / Q2-j / Q3-f / Q4-f (all the inversions)

Each piece has a legitimate "don't act" position. The convergence isn't accidental — it's the audit's own conservative-default reflected per piece. **6 inversions converge** — strongest convergence; the user genuinely has the option to take no action and the audit's verdict stands.

---

## Assembly Check

If we combined the surviving candidates from each piece, what assembly emerges?

**Assembly A — "Self-honesty thread":**
- Q1.1-f (value tag as primary contribution)
- Q1.3-a (explicit firing with reason)
- Q3-c (signal-based re-audit trigger)
- Q4-a or Q4-d (lightweight finding.md presentation)

Architecture: makes D self-honest about contribution, makes the determination check visibly diagnostic, makes re-audit fire on observable signals, presents the verdict in lightweight form. *Emergent value:* the discipline becomes self-diagnosing without adding heavy machinery.

**Assembly B — "Shape-vocabulary thread":**
- Q1.2-a or Q1.2-c (Layer-0-only trigger in spec)
- Q2-c (focused-signal inquiry on shape detector)
- Q3-a (shape-stratified re-audit)
- Q4-b (decision-table presentation)

Architecture: invests in a shared inquiry-shape vocabulary that pays dividends across multiple pieces. *Emergent value:* a primitive (shape-categorization) that wasn't named in upstream stages but unlocks coordinated refinements.

**Assembly C — "Conservative do-nothing thread":**
- All inversions from each piece (Q1.1-e or null, Q1.2-e, Q1.3-f, Q2-j, Q3-f, Q4-f)

Architecture: the audit is itself the action; nothing changes downstream. *Emergent value:* preserves the always-pipeline rule + "brushing teeth" disposition + acknowledges N=10 sample-bias. The audit's verdict survives without spec changes.

The three assemblies are *not* mutually exclusive — Assembly A and B can run simultaneously; Assembly C is the no-op baseline.

---

## Axis Coverage Check

Per piece, axes covered:

| Piece | Axes identified | Variants covered | Inversion? |
|---|---|---|---|
| Q1.1 | meta-loop, dimension-shape, coverage, responsibility, primary-output | 6 candidates across 5 axes | YES (Q1.1-e, Q1.1-f) |
| Q1.2 | trigger-where, default-direction, trigger-criterion | 5 candidates across 3 axes | YES (Q1.2-e) |
| Q1.3 | hypothesis-target (4 H), fix-action | 6 candidates, hypotheses each addressed | YES (Q1.3-e, Q1.3-f) |
| Q2 | scope, seed-mode, trigger | 10 candidates across 3 axes | YES (Q2-j) |
| Q3 | diversity-definition, trigger, outcome | 7 candidates across 3 axes | YES (Q3-f, Q3-g) |
| Q4 | artifact-shape, weight | 6 candidates across 2 axes | YES (Q4-f) |

**Multi-axis check:** Each piece has ≥2 orthogonal axes with ≥1 variant each. Single-axis bias not detected. PASS.

---

## Output Disposition (per innovate.md disposition categories)

| Candidate cluster | Evidence shape | Disposition |
|---|---|---|
| Convergence 1 (explicit signaling) | 3+ mechanisms; multi-piece | ACTIONABLE — propose to critique |
| Convergence 2 (shape vocabulary) | 3+ mechanisms; multi-piece | ACTIONABLE — propose to critique |
| Convergence 3 (conservative do-nothing) | 6 inversions converge | ACTIONABLE — propose as baseline |
| Q1.1-a (honest value tag) | Single-mechanism on this audit; but corpus-grounded | ACTIONABLE-DEFERRED — revival trigger: implement after Q4 verdict ships |
| Q1.1-c (graded scoring) | HYPOTHESIS, single-mechanism | DEFERRED — revival trigger: if Q1.1-a implemented and 5+ runs still PASS-stamp, escalate to graded |
| Q1.3-a (force explicit firing) | GROUNDED, multi-piece convergent | ACTIONABLE |
| Q2-* (pipeline-rule inquiry) | Meta-action; needs user decision | ACTIONABLE-DEFERRED — revival trigger: open if user chooses Option 2 |
| Q3-a (shape-stratified diversity) | GROUNDED, multi-piece convergent | ACTIONABLE-DEFERRED — revival trigger: re-audit fires per the rule itself |
| Q4 candidates | One must be picked for finding.md ship | ACTIONABLE — pick one |
| Inversions per piece (Q1.1-e, Q1.2-e, Q1.3-e/f, Q2-j, Q3-f/g, Q4-f) | Conservative; preserve user's right to no-act | ACTIONABLE — present as legitimate options |

---

## Telemetry

**Mechanism coverage:**
- Generators applied: 4 / 4 (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- Framers applied: 3 / 3 (Lens Shifting, Constraint Manipulation, Inversion)
- Full coverage: ALL 7 mechanisms applied across pieces

**Convergence signal:**
- 3+ mechanisms converge on Convergence 1 (explicit signaling) ✓
- 3+ mechanisms converge on Convergence 2 (shape vocabulary) ✓
- 6 inversions converge on Convergence 3 (conservative do-nothing) ✓
- HIGH confidence on the assembly threads.

**Survivors tested (5-test cycle, summary):**
- Novelty: most candidates are novel relative to current /decompose spec; some (Q1.1-a, Q1.3-a) explicitly grounded in corpus evidence
- Scrutiny survival: each candidate has at least one named risk or counter-position; inversions provide adversarial pressure
- Fertility: Convergences 1 and 2 open territory beyond their immediate piece (cross-cutting primitives)
- Actionability: most candidates are spec-level edits or document-level decisions; ACTIONABLE-DEFERRED ones have explicit revival triggers
- Mechanism independence: the convergent threads are reached by ≥3 mechanisms each — high robustness

**Failure modes observed:** None visible in this run.
- Premature evaluation: avoided by separating generation from per-candidate testing.
- Single-mechanism trap: avoided by 7-mechanism coverage.
- Early frame lock: convergences emerged late in the run, after multiple mechanisms applied.
- Innovation without grounding: each candidate has anchor/hypothesis tag; corpus grounding explicit where it exists.
- Mechanism exhaustion: all 7 produced output; no exhaustion.
- Survival bias: inversions deliberately included per piece; Convergence 3 ensures the comfortable-do-nothing path is preserved AS an option (not as the default).

**Self-application risks flagged:**
- Q1.1-a/b/f could PASS-stamp under their own framework; mitigations named.
- Q1.3-a could itself become formulaic (e.g., always PASS-no-concept); mitigation: future audit checks whether the explicit firings actually disambiguate hypotheses.

**Overall: PROCEED.** Sufficient coverage + convergence + tested survivors. Critique to evaluate per piece against constraints (phase-fit conservatism, always-pipeline rule, "brushing teeth" disposition, self-reference scope, feasibility).
