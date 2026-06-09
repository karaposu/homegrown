# Innovation — critique_kill_severity_meta_principle

## User Input

```text
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-09_08-14__critique_kill_severity_meta_principle/_branch.md

Input: _branch.md + surfacing.md + sensemaking.md (SV6 PURPOSE-FITNESS) + decomposition.md (12-piece tree, 4 tiers).
Layer Commitment: MEANING primary. Methodology mode: Standard default. Per-piece: 1 primary + 1 Inversion-candidate + 5-test cycle + disposition. Production-task mode (seed = piece-list).
```

---

## Seed-time methodology-mode consideration

**Inherited mode:** Standard default (per input). The framing signals "stabilized model with frontier extensions" → balanced 4G+3F seems right at the run level.

**Alternative mode considered:** Generator-weighted exploration. If applied, Innovation would push for novel articulations per piece (more candidates per piece, less Inversion-weight). Under that mode: more breadth, but the decomposition already constrains each piece's question + counter-question — generator-weighting would over-produce against already-scoped seeds.

**Decision:** use inherited (Standard default) mode. The decomposition has done the breadth-shaping; Innovation should run balanced per-piece generation. **Recording:** default decision used. No mode-switch needed.

---

## Per-piece Innovation outputs

For each piece: primary candidate (Generator-derived articulation) + Inversion-candidate (counter-question as seed) + 5-test cycle + disposition.

### P-META — What is the structural meta-principle of severity?

**Primary candidate (via Absence Recognition redesign-level + Combination):**

> **Severity is purpose-fitness.** A defect in a candidate is **kill-worthy** IFF, left in place, the defect prevents the candidate from doing the thing the candidate is supposed to do. Severity is the structural test of whether a defect blocks purpose-fulfillment. The principle is single-axis at the meta-level: there is ONE structural property (purpose-fitness) that determines kill-worthiness. The principle is task-agnostic: every candidate has a purpose (what it's supposed to do), so the principle applies regardless of domain (software / research / business / spec-edit / etc.).

**Inversion-candidate (counter-question as seed):** What if severity is genuinely composite at the meta-level — i.e., no single property captures kill-worthiness?

> Severity is structurally composite at the meta-level: kill-worthiness emerges from the *interaction* of (severity-if-occurs × likelihood-of-occurring × blast-radius × reversibility × fixability), no single one of which is sufficient. Purpose-fitness collapses these into a folk-level summary but loses structural precision. Adopting this framing means the meta-principle is a 4-or-5-axis composition, and severity-calibration requires explicit per-axis judgment rather than a single yes/no test.

**5-test cycle:**

| Test | Primary candidate | Inversion candidate |
|---|---|---|
| Novelty | MEDIUM — purpose-fitness as a NAMED axis is new to the spec; the underlying intuition exists implicitly. | LOW — composite-decomposition is standard in safety engineering and decision theory; not novel as a framework. |
| Scrutiny survival | STRONG — sensemaking's verdict-rigor pass located the composite-counter at the application layer; purpose-fitness as meta-axis survives. | WEAK — collapses to per-task heuristic, violating C1 (task-agnostic) and C6 (practitioner-applicable). |
| Fertility | STRONG — generates the 1-question practitioner test (P-PRACTICIONER-TEST), the REFINE/KILL boundary (P-RKB), the calibration layer (P-COMP), the failure-mode unification (P-RNU), all from one source. | MEDIUM — would generate a 4-axis dashboard but each axis requires per-task calibration; spawns more work than it resolves. |
| Actionability | STRONG — reduces to "would the candidate still do its job?" — a single yes/no question. | WEAK — requires per-axis judgment per candidate; not a single-step verdict. |
| Mechanism independence | STRONG — confirmed via safety SIL ("does the system perform its safety function?"), software blast-radius ("does the change break consumers?"), Type II error reasoning ("did we miss a real fault?") — three external groundings pointing at "fitness-for-function." | MEDIUM — confirmed via safety SIL's composite (severity × likelihood); a single anchor only. |

**Verdict:** Primary candidate SURVIVES; Inversion candidate fails Scrutiny and Mechanism-independence on the task-agnostic axis. **Disposition: ACTIONABLE** for primary; **TERMINATE** for inversion (kept as recorded counter-argument; sensemaking's Ambiguity 1 already adjudicated this).

---

### P-PRACTICIONER-TEST — The 1-question practitioner form.

**Primary candidate (via Combination + Lens Shifting):**

> The practitioner-applicable form of the meta-principle is the single question: **"If this defect were left in place, would the candidate still do what it's supposed to do?"** YES → not kill-worthy (caveat-on-SURVIVE OR REFINE if there's a known better in-frame variant). NO → kill-worthy (REFINE if in-frame fix exists; KILL if requires frame-replacement). The question takes <30 seconds to answer per defect and produces a structural verdict (not a felt judgment).

**Inversion-candidate (counter-question as seed):** What if the practitioner-applicable form requires MULTIPLE questions to be operationally adequate?

> The practitioner needs a 3-question cascade: (1) "Is the candidate's purpose clear?" (if NO → escalate to upstream sensemaking re-pass); (2) "Does this defect block purpose-fulfillment?" (the core severity check); (3) "Is the block fixable within the candidate's frame?" (REFINE vs KILL). Compressing to 1 question loses operational adequacy when purpose is implicit-from-context.

**5-test cycle:**

| Test | Primary | Inversion |
|---|---|---|
| Novelty | MEDIUM — the single yes/no operationalization is novel; the underlying spec language is similar. | MEDIUM — 3-question cascade is more explicit; not novel as a structure. |
| Scrutiny survival | STRONG — passes the 4-domain test from sensemaking; works even when purpose is implicit-from-context (the practitioner infers purpose from the candidate's framing, then tests). | STRONG — also survives scrutiny; the cascade is more thorough but adds friction. |
| Fertility | STRONG — fertile across the spec's existing language (SURVIVE-caveat + REFINE + KILL); the single yes/no answer compresses to one of the three verdicts plus disposition. | MEDIUM — produces a richer audit trail but requires per-defect 3-step recording. |
| Actionability | STRONG — practitioners can apply at speed. | MEDIUM — slower per defect; potentially better quality. |
| Mechanism independence | STRONG — confirmed via software code review heuristic ("does the bug actually break anything?"); safety engineering's hazard analysis ("would this failure mode cause a hazard?"). | MEDIUM — partially independent: each cascade step has its own canonical analog (hazard analysis stages). |

**Verdict:** Both candidates survive. The Inversion is structurally honest (operational richness vs speed trade-off). **Disposition:** Primary = **ACTIONABLE**. Inversion = **DEFERRED with revival trigger** ("revive if practitioners report that the 1-question form is insufficient in N≥3 invocations, indicating purpose-implicitness is structurally common").

---

### P-REFINE-KILL-BOUNDARY — Fixability-within-frame distinction.

**Primary candidate (via Inversion + Lens Shifting):**

> The structural distinction between REFINE and KILL is **fixability-within-frame**. A defect is REFINE-worthy when the candidate's existing frame can be modified to fix the defect without replacing the candidate. A defect is KILL-worthy when fixing the defect requires replacing the candidate's frame entirely. Both verdicts presuppose the defect is purpose-blocking (per P-META); the question REFINE-vs-KILL asks WHERE the fix lives. The boundary is binary at the structural level: either the candidate's frame can absorb the fix or it can't.

**Inversion-candidate:** What if REFINE and KILL are positional on a CONTINUUM — i.e., the distinction is confidence in fix-availability rather than binary fixability?

> REFINE/KILL is a confidence-gradient: high-confidence-fix-exists → REFINE; low-confidence-fix-exists → KILL with seed extraction. The binary fixability-within-frame framing is a SIMPLIFICATION of a confidence-graded judgment. Under this reading, every KILL is potentially-REFINE-with-more-search.

**5-test cycle:**

| Test | Primary | Inversion |
|---|---|---|
| Novelty | MEDIUM — frame-replacement framing is novel; the spec's existing landscape language (boundary vs dead region) maps onto it. | MEDIUM — confidence-gradient framing is novel; reframes KILL as "we don't yet know how." |
| Scrutiny survival | STRONG — the binary holds across 4 domains: a bug fixable by adding error handling = REFINE (frame absorbs); a bug requiring architecture rewrite = KILL (frame must change). | WEAK — collapses REFINE/KILL into one verdict (REFINE-with-confidence-level); loses the spec's existing positional distinction. |
| Fertility | STRONG — naturally connects to the seed-extraction requirement (KILL's seed = articulation of the frame-failure). | MEDIUM — generates more search per candidate (look harder for an in-frame fix) but doesn't change the spec's verdict structure. |
| Actionability | STRONG — practitioners can ask "would fixing this require replacing the candidate?" | MEDIUM — practitioners must judge fix-search-confidence, a fuzzier criterion. |
| Mechanism independence | STRONG — confirmed via software refactoring vs rewrite distinction; research methodology fix vs hypothesis-rejection distinction; business strategy pivot vs scrap distinction. | LOW — confidence-gradient framing only confirmed by decision-theory anchors; less external grounding. |

**Verdict:** Primary survives strongly; Inversion fails Scrutiny on losing positional distinction. **Disposition:** Primary = **ACTIONABLE**. Inversion = **TERMINATE** (the candidate doesn't preserve the spec's existing verdict-positional structure, which violates spec-consistency constraint C3).

---

### P-COMPOSITE-CALIBRATION — Per-task composite layer.

**Primary candidate (via Domain Transfer from safety engineering + Constraint Manipulation):**

> The per-task composite (reversibility × blast-radius × scope × fixability × confidence) lives at the **application-calibration layer**, distinct from the meta-principle's single-axis structure. The two layers are explicitly named: META-LAYER = purpose-fitness (single-axis structural test); CALIBRATION-LAYER = per-task composite (multiple axes weighted by the task's stake structure). The calibration layer's axes are NAMED-but-NOT-MANDATED — each task selects its load-bearing axes. The composite is realized via the spec's existing "weights come from the problem context" commitment: dimension weighting AT Phase 0 IS the calibration. The meta-principle doesn't need to add a new structure; it clarifies that weighting is purpose-fitness calibration.

**Inversion-candidate:** What if the per-task composite IS the meta-principle (composite at all layers) and "single-axis at meta" was a premature collapse?

> Severity is structurally composite at all layers. Purpose-fitness is one summary heuristic among several (others: criticality, blast-radius, reversibility) and none alone is the meta-principle. The "single-axis at meta" framing chose purpose-fitness arbitrarily because it was rhetorically cleanest. Under this reading, the meta-principle is the composite ITSELF, and per-task calibration just selects which axes to weight.

**5-test cycle:**

| Test | Primary | Inversion |
|---|---|---|
| Novelty | MEDIUM — two-layer framing (meta-axis vs calibration-layer) is novel; composite-as-application is standard. | LOW — composite-as-meta was sensemaking's adjudicated alternative; already rejected with HIGH confidence. |
| Scrutiny survival | STRONG — the two-layer framing preserves task-agnostic META + per-task richness; doesn't smuggle stakes back as binary. | WEAK — fails task-agnostic constraint C1 (different domains weight different axes; no fixed N-axis composition holds across all). |
| Fertility | STRONG — connects to P-CALIBRATION-LOCUS (where calibration attaches); to P-CONFIDENCE-ORTHOGONALITY (confidence is one calibration axis, but orthogonal to the meta-axis). | MEDIUM — generates per-domain axis-selection work but no clear meta-articulation. |
| Actionability | STRONG — practitioners apply purpose-fitness at meta; weighting at Phase 0 for per-task. | LOW — requires per-task negotiation of which axes count; no clean operational test. |
| Mechanism independence | STRONG — confirmed via safety SIL (severity × likelihood × controllability = SIL level; the COMPOSITE IS the per-task calibration); software's blast-radius vs reversibility framing (composite for risk-assessment, not for the meta-question of "does this break things"). | LOW — composite-as-meta has no external canonical analog where the composite IS the structural property without a meta-summary above it. |

**Verdict:** Primary survives; Inversion fails Scrutiny and Mechanism-independence. **Disposition:** Primary = **ACTIONABLE**. Inversion = **TERMINATE** (sensemaking Ambiguity 1 already adjudicated this; recorded as counter-argument).

---

### P-CONSTRUCTIVE-OUTPUT-AS-TEST — Integral or orthogonal?

**Primary candidate (via Lens Shifting):**

> The constructive-output requirement (seed extraction) is **integral to the meta-principle**. A kill-worthy defect, by structural definition, has an extractable articulation of WHY the candidate's frame prevents purpose-fulfillment — and that articulation IS the seed. The requirement is therefore both SYMPTOM (kill-worthy defects produce seeds because their structural articulation IS the seed) and TEST (if no seed can be extracted, the KILL is structurally unsupported — either the defect is non-purpose-blocking, OR the practitioner doesn't yet understand the failure, indicating insufficient evidence). Inability to extract a seed is structural evidence the verdict is a nitpick or rubber-stamp masquerading as KILL.

**Inversion-candidate:** What if a kill-worthy defect can exist WITHOUT extractable fertility — a candidate is dead but the death doesn't generalize?

> Some defects are kill-worthy precisely because they're one-off, idiosyncratic failures. A candidate may fail purpose-fulfillment due to a specific combination of factors that doesn't generalize. Requiring fertility as a structural test over-constrains the verdict — the KILL is real, but no generalizable seed exists.

**5-test cycle:**

| Test | Primary | Inversion |
|---|---|---|
| Novelty | MEDIUM — "constructive-output as structural test" is novel framing; the requirement exists in spec but isn't named as a severity-test. | LOW — one-off-failure observation is standard; doesn't innovate. |
| Scrutiny survival | STRONG — even idiosyncratic failures can be ARTICULATED ("the candidate's frame can't handle situations where X+Y+Z combine") — articulation is what fertility requires, not generalization. | WEAK — confuses GENERALIZABILITY with ARTICULATION. Spec requires "what would fix it," not "this fix works in all future cases." |
| Fertility | STRONG — generates the practitioner test for unsupported KILLs ("can you articulate why?"); connects to the meta-principle's structural claim. | MEDIUM — surfaces one-off cases as a category but doesn't change verdict structure. |
| Actionability | STRONG — practitioners run the "can I extract a seed?" test as a self-check on KILL verdicts. | LOW — practitioners would need to distinguish generalizable-fertility from articulable-fertility per KILL, adding friction. |
| Mechanism independence | STRONG — confirmed via root-cause analysis (kill-worthy bugs have articulable root causes); failure-mode analysis (FMEA requires naming the failure cause). | LOW — confirmed only by single anecdotal counterexample reasoning. |

**Verdict:** Primary survives; Inversion's confusion (generalizability vs articulation) makes it WEAK. **Disposition:** Primary = **ACTIONABLE**. Inversion = **TERMINATE** (counter-question argument doesn't hold up structurally).

---

### P-CONFIDENCE-ORTHOGONALITY — Severity axis or orthogonal?

**Primary candidate (via Inversion + Constraint Manipulation REMOVE):**

> **Confidence is orthogonal to severity, not a severity-component.** Severity is purpose-fitness (binary at the structural level: defect blocks purpose or doesn't, given sufficient evidence). Confidence is evidence-strength: did the practitioner's investigation produce strong-enough evidence to render a verdict at all? A high-confidence small defect and a low-confidence small defect have THE SAME SEVERITY (both are non-purpose-blocking); they have DIFFERENT EVIDENCE-HANDLING ACTIONS (high-confidence → render verdict; low-confidence → gather more evidence or render INTERIM verdict). Confidence affects whether to render a verdict; severity affects which verdict to render.

**Inversion-candidate:** What if confidence is INHERENTLY entangled with severity (severity = impact × confidence)?

> Severity and confidence cannot be cleanly separated. A defect's effective kill-worthiness depends on BOTH whether it would block purpose AND how confident we are in that assessment. Cleanly orthogonalizing them is an artificial simplification; in practice, low-confidence assessments produce softer verdicts, and that's a feature, not a bug.

**5-test cycle:**

| Test | Primary | Inversion |
|---|---|---|
| Novelty | MEDIUM — explicit orthogonality framing is novel for /td-critique; familiar from statistical testing (effect-size vs confidence-interval are separate). | LOW — entanglement is the default-implicit reading; doesn't innovate. |
| Scrutiny survival | STRONG — separating evidence-strength from verdict structure cleanly maps to /innovate's DEFERRED disposition (a separate verdict category for thin evidence). | MEDIUM — survives in informal use but loses structural clarity; cleanly-entangled framings tend to under-articulate evidence handling. |
| Fertility | STRONG — directly seeds P-FRONTIER-INTERIM-VERDICT (the structural follow-up question). | MEDIUM — entanglement obscures the structural follow-up question; no clear next step. |
| Actionability | STRONG — practitioners explicitly handle insufficient-evidence cases separately from severity judgment. | LOW — practitioners produce "softer" verdicts without clear structural meaning. |
| Mechanism independence | STRONG — confirmed via statistical testing (Type I error rate ≠ effect size); risk management (impact × likelihood vs uncertainty about both); medical diagnostics (sensitivity/specificity is separate from disease severity). | LOW — entanglement framing only loosely supported by folk decision-making; no structural anchor. |

**Verdict:** Primary survives strongly; Inversion is structurally less clean. **Disposition:** Primary = **ACTIONABLE**. Inversion = **TERMINATE** (sensemaking Ambiguity 3 adjudicated).

---

### P-RUBBER-NITPICK-UNIFICATION — Are #2 and #3 unified?

**Primary candidate (via Combination + Lens Shifting):**

> **#2 Rubber-Stamping and #3 Nitpicking are opposite-direction violations of the same meta-principle (purpose-fitness).** Both arise from MISMATCH between defect-severity (under the purpose-fitness test) and the verdict rendered. #2 = severe defect (blocks purpose) under-killed (rendered as SURVIVE or non-critical caveat). #3 = non-severe defect (doesn't block purpose) over-killed (rendered as KILL). The OPERATIONAL distinction survives (#2 = prosecution-weakness; #3 = defense-weakness), but both share a STRUCTURAL ROOT (failure to anchor severity to purpose-fitness). Naming the unification in the spec's text would simplify prevention design: ONE structural test (purpose-fitness) prevents BOTH failure modes.

**Inversion-candidate:** What if #2 and #3 are genuinely independent failure modes (different mechanisms, different prevention surfaces)?

> #2 is a prosecution-construction failure (the practitioner doesn't construct strong enough objections). #3 is a defense-construction failure (the practitioner doesn't construct strong enough defenses). These are independent operational failures with different proximate causes; unifying them rhetorically obscures the distinct prevention work each requires.

**5-test cycle:**

| Test | Primary | Inversion |
|---|---|---|
| Novelty | STRONG — the unification is not currently named in the spec; the spec frames them as paired-opposites but doesn't claim structural unification. | LOW — independence framing is the spec's current state; doesn't innovate. |
| Scrutiny survival | STRONG — the unification PRESERVES the operational distinction (different proximate causes) while claiming the structural unity. Both can be true simultaneously. | MEDIUM — survives operationally but misses the underlying structural unity, which sensemaking Ambiguity 5 adjudicated with HIGH confidence. |
| Fertility | STRONG — connects to a simpler prevention design (one structural test prevents both); reinforces P-META's load-bearing role. | LOW — generates two parallel prevention designs (one for each), increasing spec complexity without structural payoff. |
| Actionability | MEDIUM — the unification's operational impact depends on whether the spec text gets updated (structural-layer follow-up). | STRONG — current spec design is already operational; no change needed. |
| Mechanism independence | STRONG — confirmed via medical diagnostics (false-negative + false-positive = same structural axis: mis-classification); statistical testing (Type I + Type II errors = same structural axis: error). | LOW — independent-failure-modes framing has no external canonical anchor; failure modes are typically grouped by structural root. |

**Verdict:** Primary survives strongly; Inversion misses structural unity. **Disposition:** Primary = **ACTIONABLE**. Inversion = **TERMINATE** (recorded as counter-argument).

---

### P-FRONTIER-AMBIGUOUS-PURPOSE — How does the principle handle fuzzy-purpose candidates?

**Primary candidate (via Lens Shifting + Constraint Manipulation):**

> For candidates with intentionally ambiguous purposes (exploratory ideation, research-frontier candidates), the meta-principle applies in a **layer-aware modification**: the purpose-fitness test becomes "would this candidate continue to support the exploratory inquiry?" rather than "would the candidate fulfill a fixed purpose?" The modification preserves the meta-principle's structural form (still a single yes/no test) but substitutes "support the inquiry" for "fulfill the fixed purpose" when the candidate's frame is exploratory rather than terminal. **The structural test for when the modification fires:** the candidate's framing names exploration/ideation/research-frontier as its scope. When the framing doesn't, the original purpose-fitness test applies.

**Inversion-candidate:** What if ambiguous-purpose candidates are NOT in critique's scope at all?

> Critique only evaluates candidates whose purpose is sufficiently defined. Ambiguous-purpose candidates belong to /innovate (where they were generated) or /sensemaking (where their purpose would be stabilized). Critique should DEFER on them rather than applying a modified test. The frontier is out of scope for /td-critique's severity principle.

**5-test cycle:**

| Test | Primary | Inversion |
|---|---|---|
| Novelty | MEDIUM — layer-aware modification is novel; the underlying structure (single yes/no test) is preserved. | MEDIUM — defer-out-of-scope is a clean architectural move; common in well-designed pipelines. |
| Scrutiny survival | MEDIUM — the modification works for typical exploratory candidates but blurs at the boundary (when is a candidate "exploratory enough"?). | STRONG — defer-out-of-scope is cleaner; eliminates boundary ambiguity. |
| Fertility | MEDIUM — produces a modification rule but adds spec complexity. | STRONG — produces a clean architectural separation; critique stays focused on terminal candidates. |
| Actionability | MEDIUM — practitioners need to judge when modification fires. | STRONG — practitioners simply check whether the candidate has a defined purpose; if not, defer. |
| Mechanism independence | MEDIUM — modification anchored mainly in critique-internal logic. | STRONG — defer-out-of-scope anchored in software pipeline design (each stage handles its own concerns) + cognitive-harness design (each discipline operates within its own frame). |

**Verdict:** Inversion candidate is actually STRONGER on Scrutiny and Mechanism-independence. **Disposition:** Primary = **DEFERRED with revival trigger** ("revive if practitioners encounter ambiguous-purpose candidates in /td-critique invocations frequently enough that defer-out-of-scope produces friction"). Inversion = **ACTIONABLE** as the preferred articulation. *This is one of the cases where the Inversion-candidate wins.*

---

### P-FRONTIER-INTERIM-VERDICT — Should there be a 4th verdict for insufficient evidence?

**Primary candidate (via Domain Transfer from /innovate's DEFERRED + Combination):**

> Critique should articulate an **INTERIM verdict** for cases where evidence is insufficient to render a confident SURVIVE/REFINE/KILL verdict. INTERIM = "the practitioner identified a potentially purpose-blocking defect but evidence is too thin to confidently confirm purpose-fitness failure." The trigger is operational: the practitioner's confidence (HIGH/MEDIUM/LOW) at the verdict-rendering step. INTERIM verdict carries an explicit gating condition for resolution: "re-run Phase 2 with more evidence on dimensions [X, Y]." This extends the SURVIVE/REFINE/KILL triplet to a 4-state structure analogous to /innovate's 4 disposition categories (ACTIONABLE / DEFERRED / RESEARCH FRONTIER / RE-TEST TRIGGER).

**Inversion-candidate:** What if adding a 4th verdict over-complicates the discipline — insufficient-evidence cases should trigger re-running Phase 2 (gather more evidence) rather than rendering a softer verdict?

> Critique should NOT add an INTERIM verdict. When evidence is insufficient, the right response is to RE-RUN PHASE 2 — gather more adversarial test data, deepen prosecution and defense — until the evidence supports a confident verdict. Adding INTERIM creates an escape hatch that practitioners will overuse to avoid the harder work of evidence gathering.

**5-test cycle:**

| Test | Primary | Inversion |
|---|---|---|
| Novelty | MEDIUM — INTERIM verdict is novel for /td-critique; the structure imports from /innovate. | MEDIUM — re-run-Phase-2-not-soft-verdict is also novel as an explicit principle. |
| Scrutiny survival | MEDIUM — INTERIM extends the verdict structure cleanly; risks over-use (practitioners default to INTERIM when uncertain). | STRONG — forces evidence gathering, preventing soft verdicts; preserves the existing 3-verdict crispness. |
| Fertility | STRONG — provides explicit structure for insufficient-evidence cases; connects to /innovate's verdict-shape. | MEDIUM — connects to existing Phase 2 re-run guidance but adds no new structure. |
| Actionability | MEDIUM — practitioners need to learn when INTERIM fires vs SURVIVE-with-caveats. | STRONG — practitioners just re-run; no new vocabulary needed. |
| Mechanism independence | STRONG — INTERIM is anchored in /innovate's DEFERRED, /sensemaking's anchor-confidence levels, statistical testing's "insufficient power" diagnostic. | MEDIUM — re-run-not-soft-verdict has anchors in scientific methodology (re-do the experiment if data is thin) but is less structurally crisp. |

**Verdict:** Both candidates have HIGH-MEDIUM strength; neither dominates. The structural question is whether the discipline benefits from a richer verdict-space or stricter evidence-gathering. **Disposition:** Both = **DEFERRED with revival trigger** ("decide in the structural-layer follow-up after the meta-principle is encoded; the choice depends on observed practitioner behavior — if SURVIVE-with-caveats is over-applied to insufficient-evidence cases, add INTERIM; if Phase 2 re-runs are under-triggered, add INTERIM as a forcing function; if neither pattern emerges, retain the 3-verdict structure"). This is a STRUCTURAL FOLLOW-UP DECISION, not resolvable at meaning-layer alone.

---

### P-CALIBRATION-LOCUS — Where in the process does calibration live?

**Primary candidate (via Lens Shifting + Combination):**

> Severity-calibration structurally lives at **Phase 0 / Dimension Construction / step 4 (Weight dimensions)**. The dimensions' weights ARE the severity calibration — a heavily-weighted dimension is purpose-critical (failure blocks purpose-fitness); a lightly-weighted dimension is purpose-non-critical (failure doesn't block). Phase 0 step 4 is the existing locus; the meta-principle CLARIFIES what weighting STRUCTURALLY MEANS (purpose-fitness) without relocating the calibration. Phase 1 maps the landscape FROM the weighted dimensions; Phase 2 applies the calibration via adversarial testing; Phase 4 observes convergence given the calibration. The composite calibration layer (P-COMPOSITE-CALIBRATION's axes) also lives at Phase 0 step 4 — the per-task selection of which axes to weight is part of dimension weighting.

**Inversion-candidate:** What if severity-calibration is NOT located in any single phase — distributed across Phase 0 (weighting) + Phase 2 (adversarial) + Phase 4 (convergence)?

> Severity-calibration is a distributed concern. Phase 0 sets the FORMAL weights; Phase 2's adversarial collision EVALUATES the weights against real candidates; Phase 4's convergence assessment OBSERVES whether the weights are discriminating (per the spec's "if a dimension produces only noise — no candidates fail or pass meaningfully on it — the dimension isn't discriminating"). Articulating a single locus misses the distributed structure.

**5-test cycle:**

| Test | Primary | Inversion |
|---|---|---|
| Novelty | LOW — Phase 0 step 4 is where the spec already lives; not innovative. | MEDIUM — distributed-locus framing is novel; spotlights the cross-phase nature. |
| Scrutiny survival | STRONG — single-locus encoding is structurally cleanest; the other phases APPLY/OBSERVE the calibration but don't SET it. | MEDIUM — distributed framing risks ambiguity (which phase OWNS calibration?); calibration's PRIMARY commitment is at Phase 0 step 4. |
| Fertility | STRONG — directly informs the structural-layer follow-up (a refinement note at Phase 0 step 4). | MEDIUM — generates distributed-spec-edit complexity; less actionable for follow-up. |
| Actionability | STRONG — practitioners and spec-editors know exactly where to attach. | MEDIUM — distributed framing requires per-phase clarification. |
| Mechanism independence | STRONG — confirmed by software design (configuration set in one place, applied in many); engineering design (parameters set at design time, applied at runtime). | MEDIUM — distributed framing matches certain runtime-tuning patterns but not setup-vs-application separation. |

**Verdict:** Primary survives strongly; Inversion's distributed framing is operationally less clean. **Disposition:** Primary = **ACTIONABLE**. Inversion = **DEFERRED** (preserve as a research-frontier observation: if monitoring of practitioner behavior shows confusion about phase-ownership, revive the distributed framing with explicit per-phase roles).

---

### P-SELF-APPLICABILITY-CHECK — Does the principle survive its own application?

**Primary candidate (via Inversion + Lens Shifting):**

> Apply the purpose-fitness test to THIS INQUIRY's output. This inquiry's purpose: produce a structurally articulated, task-agnostic meaning-layer meta-principle for severity in `/td-critique`. The output (the purpose-fitness meta-principle, the 12-piece decomposition, the per-piece candidates) does what the inquiry is supposed to do: (a) articulates the principle structurally (purpose-fitness); (b) is task-agnostic (4-domain test verified in sensemaking); (c) operates at meaning-layer (no spec edits proposed); (d) provides practitioner-applicable form (the 1-question test). No defect in this output blocks the inquiry from doing what it's supposed to do. The meta-principle SURVIVES its own application.

**Inversion-candidate:** What if the meta-principle's self-application is structurally trivial (tautological — any inquiry whose purpose is "produce an articulation" passes purpose-fitness once articulation is produced)?

> Self-application is tautological. The test fires the moment articulation exists; it doesn't actually adversarially evaluate the articulation's QUALITY. Calling self-application a "test" overstates the rigor — it's a check that articulation occurred, not that the articulation is correct.

**5-test cycle:**

| Test | Primary | Inversion |
|---|---|---|
| Novelty | LOW — self-applicability is a familiar self-test pattern. | MEDIUM — naming tautology-risk in self-application is somewhat novel. |
| Scrutiny survival | STRONG — the self-test isn't trivial because it forces the inquiry to articulate WHAT the inquiry was supposed to do, then check whether the output does it. This surfaces purpose-clarity failures. | STRONG — the tautology concern is valid: simple articulation-exists checks have low rigor. |
| Fertility | MEDIUM — surfacing the self-test pattern enables future inquiries to do similarly. | MEDIUM — naming tautology-risk enables better self-test design. |
| Actionability | STRONG — inquiry authors can self-test their own output. | MEDIUM — naming the risk doesn't resolve it. |
| Mechanism independence | STRONG — confirmed via dogfooding (software product-test against itself), peer review (self-tests are weak but not zero-signal). | MEDIUM — tautology-risk anchored in epistemology; less operationally crisp. |

**Verdict:** Both candidates have HIGH-MEDIUM strength on different axes. The Inversion is a VALID OBSERVATION about a limitation of self-tests, not a structural defeat of self-applicability. **Disposition:** Primary = **ACTIONABLE**. Inversion = **ACTIONABLE as observational caveat** — record that self-applicability is a weak-but-non-zero signal; not a substitute for external adversarial evaluation. **RE-TEST TRIGGER on Primary:** the next inquiry's critique should adversarially evaluate this inquiry's output against external grounding (corpus data; canonical frameworks), not rely solely on self-application.

---

### P-PICKER — What structural follow-up to prioritize?

**Primary candidate (via Combination + Extrapolation):**

> The structural-layer follow-up should prioritize in this order:
>
> **Priority 1 (REQUIRED for encoding):** Articulate the meta-principle (purpose-fitness) as a refinement note at Phase 0 step 4 — the locus is established (P-CALIBRATION-LOCUS). The refinement note should: (a) name purpose-fitness as the structural meaning of dimension-weighting; (b) provide the 1-question practitioner test (P-PRACTICIONER-TEST); (c) cross-reference the existing #2 Rubber-Stamping and #3 Nitpicking entries as unified violations (P-RNU).
>
> **Priority 2 (HIGH VALUE):** Decide on P-FRONTIER-INTERIM-VERDICT — should `/td-critique` add a 4th verdict for insufficient-evidence cases? This decision affects the verdict-triplet structure and should be made before encoding the refinement note (so the refinement can reference all verdicts including INTERIM if adopted).
>
> **Priority 3 (FRONTIER EXTENSION):** Articulate the layer-aware modification for ambiguous-purpose candidates (P-FRONTIER-AMBIGUOUS-PURPOSE) — or defer-out-of-scope. Per P-FAP's verdict, the defer-out-of-scope inversion candidate is structurally stronger; consider that the preferred option for the structural follow-up.
>
> **Pre-conditions:** the structural follow-up needs user confirmation on (a) whether to encode the unified failure-mode framing in spec text (P-RNU), and (b) whether the INTERIM verdict is desirable.

**Inversion-candidate:** What if no structural follow-up is needed — the existing spec's implicit calibration is operationally adequate?

> The existing spec already commits to weighting-by-stakes + constructive-output + burden-of-proof shift. The meta-principle (purpose-fitness) is the IMPLICIT structural meaning of those existing commitments. Naming it explicitly in spec text adds vocabulary without changing operational behavior. The structural follow-up recommendation is NO-ACTION; the meaning-layer articulation IS the deliverable, and the spec edit is optional.

**5-test cycle:**

| Test | Primary | Inversion |
|---|---|---|
| Novelty | MEDIUM — prioritized sequence is novel; each priority is grounded. | MEDIUM — NO-ACTION is a valid disposition; explicitly naming it as a candidate is novel. |
| Scrutiny survival | STRONG — the prioritization respects dependency order (encoding requires settling INTERIM first); is honest about pre-conditions. | MEDIUM — survives if practitioners don't actually struggle with the implicit calibration; if they do, NO-ACTION leaves the value un-captured. |
| Fertility | STRONG — generates concrete next-inquiry framings; connects all 12 pieces. | MEDIUM — saves spec-edit effort but leaves vocabulary unnamed. |
| Actionability | STRONG — the structural-layer follow-up has a clear scope. | STRONG — no action required; closes the inquiry cleanly. |
| Mechanism independence | STRONG — anchored in software product roadmapping (priorities by dependency), engineering project management. | MEDIUM — anchored in YAGNI-style principles (don't formalize what works implicitly). |

**Verdict:** Both candidates survive; they offer the user a clean choice. **Disposition:** Primary = **ACTIONABLE**. Inversion = **ACTIONABLE as alternative path** — explicitly preserved for the user to choose. The user's decision determines whether the structural follow-up runs or whether the inquiry closes with meaning-layer as final deliverable.

---

## Inherited Frame Audit

**Predicate.** Seed's central assumption: PURPOSE-FITNESS is the meta-principle of severity.

**Step (iii) Challenge scan:** P-META's Inversion-candidate explicitly challenges this assumption ("severity is genuinely composite at the meta-level"). The challenge was generated, tested via 5-test cycle, and rejected on Scrutiny + Mechanism-independence grounds. **The audit's predicate is SATISFIED.**

Additional piece-level audits:
- P-COMPOSITE-CALIBRATION's Inversion-candidate explicitly challenges the "single-axis at meta" assumption (re-asserting composite-at-meta). Also rejected, also recorded.
- P-CONFIDENCE-ORTHOGONALITY's Inversion-candidate explicitly challenges the orthogonality (entanglement framing). Also rejected, also recorded.
- P-RUBBER-NITPICK-UNIFICATION's Inversion-candidate explicitly challenges the unification (independent-failure-modes framing). Also rejected, also recorded.

**Conclusion:** the Inherited Frame Audit does NOT need to fire as a separate orchestration step. The challenges were embedded in piece-level Inversion-candidates per the decomposition's counter-questions. No frame-orthogonal alternative was missed.

---

## Assembly Check

After per-piece testing, examine the surviving primary candidates as a system. Does the assembly produce emergent structure none of the pieces have individually?

**Surviving primary candidates form a coherent meta-articulation:**

1. P-META names the principle (purpose-fitness).
2. P-PRACTICIONER-TEST operationalizes it (1-question form).
3. P-REFINE-KILL-BOUNDARY refines the verdict structure (fixability-within-frame).
4. P-COMPOSITE-CALIBRATION articulates the application layer (per-task composite).
5. P-CONSTRUCTIVE-OUTPUT-AS-TEST defines the integral fertility test.
6. P-CONFIDENCE-ORTHOGONALITY scopes evidence-strength as orthogonal.
7. P-RUBBER-NITPICK-UNIFICATION shows the prevention design is unified.
8. P-CALIBRATION-LOCUS attaches the principle to Phase 0 step 4.
9. P-SELF-APPLICABILITY-CHECK verifies the principle survives its own application.
10. P-PICKER articulates the structural-layer follow-up.

Plus two frontier pieces (P-FRONTIER-AMBIGUOUS-PURPOSE inverted to defer-out-of-scope; P-FRONTIER-INTERIM-VERDICT deferred to structural follow-up).

**Emergent observation:** the assembled meta-principle, when expressed as a single integrated paragraph, reads:

> Severity in `/td-critique` is purpose-fitness — a defect is kill-worthy iff, left in place, it prevents the candidate from doing what it's supposed to do. The practitioner-applicable test is the single question "would the candidate still do its job?" When the answer is NO, REFINE if the fix lives within the candidate's frame; KILL if it requires replacing the candidate's frame entirely. KILL requires extracting a seed (articulating the frame-failure); inability to extract a seed means the KILL is structurally unsupported. Confidence in the verdict is orthogonal to severity — insufficient evidence triggers re-evaluation (potentially via an INTERIM verdict; deferred). Per-task calibration of "what counts as doing its job" composes via dimension weighting at Phase 0 step 4 — the existing locus, now structurally grounded. #2 Rubber-Stamping (severe defect under-killed) and #3 Nitpicking (non-severe defect over-killed) are opposite-direction violations of the same principle; prevention is unified.

This integrated paragraph IS the meaning-layer deliverable.

**Assembly verdict: SURVIVES.** No defects in the assembly that prevent it from doing what it's supposed to do. Disposition: **ACTIONABLE** as the integrated meta-articulation.

---

## Self-applicability + Self-Reference Mitigation

Per Pattern A H8: this Innovation invocation generates candidates ABOUT severity-calibration in `/td-critique`. The candidates ARE candidates for /td-critique-style evaluation in the next Critique phase. Self-reference risk is real.

Mitigation applied throughout:
- Every candidate's Mechanism Independence test required EXTERNAL grounding (safety SIL / blast-radius / asymmetric loss / Type I/II errors / 4-domain test / corpus signal). Internal-logic-only candidates failed Mechanism Independence and were rejected.
- The Inherited Frame Audit's challenge scan was embedded in piece-level Inversion-candidates, not skipped.
- The self-applicability check (P-SAC) explicitly acknowledges its limitation (tautology risk) and recommends external adversarial evaluation at the next critique phase.

Self-reference present; externally grounded. Acceptable residual.

---

## Mechanism Coverage Telemetry

### Run-level coverage

- **Generators applied:** Combination (used in P-META, P-PRACTICIONER-TEST, P-RNU, P-FIV, P-CALIBRATION-LOCUS, P-PICKER), Absence Recognition (P-META at redesign-level), Domain Transfer (P-COMP from safety engineering; P-FIV from /innovate's DEFERRED), Extrapolation (P-PICKER for sequencing) → **4/4 Generators applied.**
- **Framers applied:** Inversion (P-COIA, P-CONF, P-RKB, P-SAC; plus every piece's Inversion-candidate), Lens Shifting (P-PRACT, P-COIA, P-CALIBRATION-LOCUS, P-FAP, P-SAC), Constraint Manipulation (P-COMP, P-CONF, P-FAP) → **3/3 Framers applied.**
- **Mechanism coverage: FULL (7/7).**

### Convergence signal

Multiple mechanisms converged on the purpose-fitness meta-principle: Combination (purpose + fitness anchors), Absence Recognition (the unnamed structural property in spec), Domain Transfer (safety SIL's "does the system perform its safety function"), Lens Shifting (re-framing severity from feeling to structural test). **4 mechanisms convergent.** HIGH confidence on the meta-principle.

### Test completion

- Surviving outputs tested: 12 primary + 12 inversion = 24 candidates. ALL TESTED via 5-test cycle.
- ACTIONABLE: 9 primary candidates + 2 inversions (P-FAP's inversion, P-PICKER's inversion).
- DEFERRED: 3 (P-PRACTICIONER-TEST's inversion, P-FIV both candidates, P-CALIBRATION-LOCUS's inversion).
- TERMINATED: 8 inversions where structural defeat was clear.
- RESEARCH FRONTIER: 0 (no candidate exceeds per-inquiry scope as research frontier).
- RE-TEST TRIGGER: 1 (P-SAC primary, flagged for the next critique phase to externally adversarially evaluate).

### Failure mode check

- Premature Evaluation: NO.
- Single-Mechanism Trap: NO (7/7 mechanisms used).
- Early Frame Lock: NO (every meta-decision piece had Inversion-candidate generated and tested).
- Innovation Without Grounding: NO (all candidates tested via 5-test cycle).
- Mechanism Exhaustion: NO (multiple candidates survived).
- Survival Bias: NO — the P-FAP outcome explicitly favored the INVERSION-candidate (defer-out-of-scope) over the modified-test primary, demonstrating that uncomfortable challenges DID survive.

### Production-task additional telemetry

- **Per-piece mechanism log:**
  - P-META: [Combination, Absence Recognition redesign-level, Domain Transfer (safety SIL); Inversion]
  - P-PRACTICIONER-TEST: [Combination, Lens Shifting; Inversion]
  - P-REFINE-KILL-BOUNDARY: [Inversion, Lens Shifting; Inversion (counter-question)]
  - P-COMPOSITE-CALIBRATION: [Domain Transfer (safety SIL), Constraint Manipulation; Inversion]
  - P-CONSTRUCTIVE-OUTPUT-AS-TEST: [Lens Shifting; Inversion]
  - P-CONFIDENCE-ORTHOGONALITY: [Inversion, Constraint Manipulation REMOVE; Inversion (counter-question)]
  - P-RUBBER-NITPICK-UNIFICATION: [Combination, Lens Shifting; Inversion]
  - P-FRONTIER-AMBIGUOUS-PURPOSE: [Lens Shifting, Constraint Manipulation; Inversion]
  - P-CALIBRATION-LOCUS: [Lens Shifting, Combination; Inversion]
  - P-FRONTIER-INTERIM-VERDICT: [Domain Transfer (/innovate DEFERRED), Combination; Inversion]
  - P-SELF-APPLICABILITY-CHECK: [Inversion, Lens Shifting; Inversion (counter-question)]
  - P-PICKER: [Combination, Extrapolation; Inversion]

- **Meta-decision-piece classification:** All 12 pieces fire meta-decision-piece property (b) framing-semantic or (c) lesson-vocabulary or (d) evaluation-criterion. All 12 classified meta-decision.

- **Piece-level Inversion compliance:** 12/12 satisfied (every piece had an Inversion-candidate generated and tested). 0 violated; 0 overridden.

### Overall verdict

**PROCEED.** Full coverage; multi-mechanism convergence on the meta-principle; all candidates tested; 0 failure modes observed; 12/12 piece-level Inversion compliance satisfied.

---

## Output disposition summary

| Piece | Primary disposition | Inversion disposition |
|---|---|---|
| P-META | ACTIONABLE | TERMINATE (recorded) |
| P-PRACTICIONER-TEST | ACTIONABLE | DEFERRED with revival trigger |
| P-REFINE-KILL-BOUNDARY | ACTIONABLE | TERMINATE (recorded) |
| P-COMPOSITE-CALIBRATION | ACTIONABLE | TERMINATE (recorded) |
| P-CONSTRUCTIVE-OUTPUT-AS-TEST | ACTIONABLE | TERMINATE (recorded) |
| P-CONFIDENCE-ORTHOGONALITY | ACTIONABLE | TERMINATE (recorded) |
| P-RUBBER-NITPICK-UNIFICATION | ACTIONABLE | TERMINATE (recorded) |
| P-FRONTIER-AMBIGUOUS-PURPOSE | DEFERRED with revival trigger | ACTIONABLE (preferred) |
| P-CALIBRATION-LOCUS | ACTIONABLE | DEFERRED |
| P-FRONTIER-INTERIM-VERDICT | DEFERRED (structural follow-up) | DEFERRED (structural follow-up) |
| P-SELF-APPLICABILITY-CHECK | ACTIONABLE (RE-TEST TRIGGER flagged) | ACTIONABLE as caveat |
| P-PICKER | ACTIONABLE | ACTIONABLE as alternative path |

ACTIONABLE survivors: 14 (12 primary + 2 inversions that won at their pieces).
DEFERRED with revival triggers: 4.
TERMINATE (recorded): 6.

Assembly: ACTIONABLE as integrated meta-articulation.
