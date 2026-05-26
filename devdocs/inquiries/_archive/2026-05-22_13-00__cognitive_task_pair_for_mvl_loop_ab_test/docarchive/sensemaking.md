# Sensemaking: Loop-Level Meaningful Task Pair Design for /MVL+ vs /MVL2+ Comparison

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_13-00__cognitive_task_pair_for_mvl_loop_ab_test/_branch.md`

Plus additional instructions: read `_branch.md` + `exploration.md`; apply SV1→SV6; resolve FQ1-FQ8 with explicit commitments; apply self-reference vigilance + Frame-exit Completeness + Specific-vs-pattern.

---

## SV1 — Baseline Understanding

The task is to take the exploration's 13-region territory map + 16 cognitive-task candidates + frame-error diagnosis (R13) and commit structural decisions that make the corrected loop-level test design operational. The deep risk is re-introducing the same frame error in subtler form — designing prompts that LOOK cognitive but functionally collapse downstream stages. The corrective requires committing not just nature-axis and seeds but ALSO a dual-level comparison rubric and per-prompt downstream-amplification predictions so the test design is verifiable per-prompt, not just per-corpus.

**Self-reference vigilance applies acutely here.** The same agent (Claude) drafted `/surfacing` in a prior inquiry, designed the prior test inquiry with the frame error, diagnosed that frame error at R13, and is now committing the corrected design. External grounding: the USER's explicit correction is the load-bearing external validation. The dual-level rubric is derived from loop architecture (R1), not from preference.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1** — 10 test prompts (5+5 by nature)
- **C2** — Cognitive tasks (decide/diagnose/design/strategize/analyze), not enumeration (find/identify/map/list)
- **C3** — All 5 stages must do substantive cognitive work per prompt
- **C4** — Dual-level comparison (upstream-output + finding) for corrected framing
- **C5** — Authorship-bias risk lower for cognitive tasks but still present for specific topics
- **C6** — Practical budget ~35-50 min per `/MVL+` run
- **C7** — 16 candidates available (8 D + 8 G from R5 + R6)
- **C8** — Frame-error diagnosis (R13) must be acknowledged in finding via Changes-from-Prior section
- **C9** — `corrects:` frontmatter required (refines/supersedes/corrects single prior finding from this session)

### Key Insights

- **KI1** — Cognitive tasks distribute work across all 5 stages; enumeration tasks concentrate it at upstream stage (this is R2's structural distinction)
- **KI2** — Diagnostic vs Generative-Design is genuine difference-in-KIND of cognitive operation (probe-existing-state vs construct-target-state)
- **KI3** — Cumulative-effect amplification can take Path A (/surfacing-style propagation), Path B (/explore-style propagation), or Path C (cascade normalization); the test must distinguish these
- **KI4** — Dual-level rubric (compare upstream-output level AND finding level) is the corrected framing's centerpiece
- **KI5** — Authorship-bias risk is meaningfully LOWER for cognitive tasks than enumeration tasks because the upstream-discipline is INSTRUMENT not SUBJECT; the cognitive task is about the project, not about /explore-vs-/surfacing
- **KI6** — Frame-error diagnosis (R13) identifies 3 concurring root causes — discrim-predictor bias + nature-axis-as-territory-type + discipline-vs-loop conflation — the corrective must address all three
- **KI7** — Negative controls for loop-level test are well-bounded cognitive tasks (lookup-shape) that bypass cognitive machinery; both forks converge on near-identical findings
- **KI8** — Cascade normalization (Path C) is itself a VALID empirical outcome; the test produces useful data even when amplification doesn't dominate
- **KI9** — "Meaningful" has triple meaning (user-meaningful + loop-meaningful + comparison-meaningful); good prompts satisfy all three
- **KI10** — Cumulative effect is operationalized as the COMPARISON between Level 1 divergence (upstream-output) and Level 2 divergence (finding) — concept is structural, not halo

### Structural Points

- **SP1** — 16 candidates → prune to 6 advancing seeds (3 D + 3 G); Innovation refines + derives to reach 5+5
- **SP2** — Dual-level rubric: 5 upstream dims (U1-U5) + 6 finding dims (F1-F6) = 11 sub-criteria
- **SP3** — Negative controls bypass cognitive machinery (so both forks converge)
- **SP4** — Self-reference vigilance applied via 4 explicit mitigations
- **SP5** — Frame-error diagnosis carries into finding's Reasoning section + Changes-from-Prior section

### Foundational Principles

- **FP1** — Test the LOOP with discipline-as-upstream, NOT the discipline alone
- **FP2** — Cumulative-effect dimension is the corrected framing's centerpiece
- **FP3** — Single-variable variation: hold task constant; vary upstream-discipline (the A/B variable)
- **FP4** — External grounding via user correction — the corrected framing is validated by USER, not by me
- **FP5** — Three concurring frame-error root causes must all be addressed simultaneously

### Meaning-Nodes

- **MN1** — "Loop-level test" = test where all 5 stages do substantive cognitive work
- **MN2** — "Cumulative effect" = how upstream choice propagates through the cascade to manifest at finding level
- **MN3** — "Meaningful cognitive task" = decide / diagnose / design / strategize / analyze — distinguishable from "find / identify / map / list / enumerate" by deliverable shape (reasoned conclusion vs categorized inventory)
- **MN4** — "Cumulative effect amplification path" = trajectory upstream-choice takes through downstream stages (Path A / Path B / Path C)
- **MN5** — "Frame error" = structural failure to distinguish "test the discipline" from "test the loop with the discipline as upstream"

---

## SV2 — Anchor-Informed Understanding

The selection problem decomposes into 8 sub-decisions (mapping to the 8 FQs from Exploration), each with explicit trade-offs. The dominant constraint is authorship-bias mitigation via cognitive-task framing (reduces risk vs enumeration framing) + dual-level rubric (operationalizes cumulative-effect dimension) + frame-error-acknowledgment in finding (visible correction to the user).

The 6 advancing seeds must satisfy: cognitive-task shape (not enumeration) + downstream-amplification across varied stages + low authorship-bias residual + harness-internal (evaluable) + within compute budget.

---

## Phase 2 — Perspective Checking

### Technical / Logical

Loop stages each have distinct operations; upstream choice affects downstream via specific propagation paths (R1+R3). Anchor: amplification path is task-specific (different prompts amplify at different stages). The dual-level rubric exposes this via per-stage observation.

### Human / User

User has experienced the frame error firsthand and explicitly corrected it. The corrective must be VISIBLE in the deliverable (Changes-from-Prior section) and the new prompts must actually be different in shape (verb-shape verification at Innovation). Anchor: visible correction is itself a deliverable.

### Strategic / Long-term

The cumulative-effect dimension is what the user actually cares about for production deployment. If cascade normalization (Path C) dominates, `/surfacing`'s structural advantage may not materialize operationally — that's a strategically important finding the test must be able to produce. Anchor: even Path C is a useful result.

### Risk / Failure

Four risks:
- **R-RISK-1** — Cognitive-task prompts inadvertently still bias toward upstream-stage work. **Mitigation:** per-prompt amplification prediction in annotation; verify the prediction names at least one DOWNSTREAM stage as primary amplification site.
- **R-RISK-2** — Negative controls fail to bypass loop machinery (loops are stubborn; they engage even on trivial inputs). **Mitigation:** explicit well-bounded design + lookup-shape territory.
- **R-RISK-3** — Authorship-bias residual in retained candidates larger than estimated. **Mitigation:** 4 bias-prone candidates excluded outright (D4, D5, D7, G8); retained candidates are about project-level concerns (not /explore-vs-/surfacing).
- **R-RISK-4** — Cascade normalization (Path C) dominates ALL test prompts, producing uniform "no difference." Would refute prior structural verdict. **Mitigation:** none needed — this is a valid outcome the test should be able to detect.

### Resource / Feasibility

~35-50 min per cognitive-task `/MVL+` run. Sharpest pair (2 + 2 controls = 4 prompts × 2 forks) ~3.7 hours. Full set ~13.5 hours. Anchor: sharpest pair is the recommended budget.

### Definitional / Internal Consistency

- "Diagnostic" vs "Generative-Design" — mutually exclusive? Some tasks mix (diagnose + design fix). Resolve: classify by PRIMARY deliverable shape. Diagnostic = primary deliverable is understanding-with-evidence; Generative-Design = primary deliverable is construction-with-components-and-trade-offs.
- "Cumulative effect" — measurable how? Via dual-level comparison: Level 2 divergence vs Level 1 divergence. If Level 2 ≈ Level 1, neutral; if Level 2 > Level 1, amplification; if Level 2 < Level 1, normalization.

### Definitional / Frame-exit Completeness

**Gating check.** Multi-value terms in inquiry's own committed structures: "loop-level," "cumulative effect," "meaningful," "amplification." All used across multiple distinct propositions. **GATING FIRES.**

**Existence Enumeration:**
- "Loop-level" — referents: single-loop (current MVL+/MVL2+) vs multi-head loop (future L4+); within-iteration vs across-iteration; pre-CONCLUDE vs post-CONCLUDE.
- "Cumulative effect" — referents: per-stage additive effect vs per-stage interaction (multiplicative).
- "Meaningful" — referents: meaningful TO USER (evaluable) + meaningful FOR LOOP (engages all stages) + meaningful FOR COMPARISON (produces discrimination).
- "Amplification" — referents: signal amplification (upstream effect grows) vs attenuation (shrinks) vs transformation (changes shape).

**Role Assessment:**
- Inquiry's frame includes single-loop, pre-CONCLUDE, per-stage additive, all three meanings of "meaningful," signal-amplification with Path C as attenuation. Multi-head and per-stage-interaction are explicitly out of scope (separate inquiries).
- Role of excluded referents: multi-head testing is a future concern; per-stage-interaction is a higher-order measurement we lack instrumentation for. Excluding both is intentional bounding, not silent omission.

**Verdict Rigor:**
- Counter on multi-head exclusion: "multi-head is the project's future direction; should the test design account for it?" Test on structural grounds: the test is for the user's CURRENT (single-loop) operational state. Multi-head testing requires multi-head runners + multi-head measurement — separate inquiry. Verdict survives.
- Counter on per-stage-interaction: "additive measurement might miss interaction effects." Test on structural grounds: per-stage-interaction requires controlled-variation testing impossible at this experimental design level (would need at least 4 conditions, not 2). Additive measurement is the right granularity for this design. Verdict survives.

**Residual / Coverage Justification:** No additional concerns identified.

### Phase / Calibration-State

`/surfacing` has zero deployment history; the test is part of its calibration. The criterion and negative controls should NOT assume `/surfacing` is well-calibrated (otherwise bias toward it). Test design observes outcomes; doesn't assume operational protocol-fidelity. Anchor: criterion measures output quality, not protocol-compliance.

### New anchors from perspectives

- **KI11** — Path C (cascade normalization) is empirically valid; test should detect it explicitly, not treat it as failure
- **KI12** — Verb-shape verification at Innovation: each prompt's body must start with cognitive-task verbs (Why, Should, Design, Diagnose, How, What strategy) NOT enumeration verbs (Map, Catalog, Find, Identify, Locate, Enumerate, Generate every)
- **KI13** — Frame-error correction is the deliverable's META-load — the user wants both (a) the new test design AND (b) acknowledgment that the prior was wrong

---

## SV3 — Multi-Perspective Understanding

The selection factors:

1. **Axis:** N1 (Diagnostic vs Generative-Design); 2×2 design (2 task-natures × 2 discipline-runners) at all 5 stages × CONCLUDE.

2. **6 advancing seeds:**
   - **Diagnostic prune (D7, D5, D4 excluded for authorship-bias; D1, D6 alternatives):**
     - D2 (frame-error diagnostic): HIGH discrim; cross-stage amplification; meta-cognitive
     - D3 (self-containedness violations diagnostic): HIGH discrim; cross-corpus pattern recognition
     - D8 (L4 multi-head failure anticipation): HIGH discrim; anticipatory diagnostic
   - **Generative-Design prune (G8 excluded; G3 flagged as alternative to G1):**
     - G1 (frame-error recovery protocol design): HIGH discrim; meta-protocol
     - G2 (merger discipline design): HIGH discrim; new-discipline design
     - G6 (regression-detection sub-system design): HIGH discrim; sub-system design

3. **Dual-level rubric committed:** U1-U5 (upstream-output dimensions) + F1-F6 (finding dimensions); aggregate per-level + holistic.

4. **Negative controls:** 2 lookup-shape tasks that bypass cognitive machinery.

5. **Carry-forward decisions** (from prior, refined where needed): warming protocol (6 files); harness-internal domain; commit-first criterion (now expanded to dual-level); one run per fork-task.

6. **Per-prompt amplification prediction** in annotation: names which downstream stage(s) will likely amplify the upstream-choice effect.

7. **Changes-from-Prior section** required (frontmatter `corrects:` declaration).

8. **Self-reference mitigations** = 4 (external grounding + structural frame-error diagnosis + bias-prone exclusions + rubric from architecture).

---

## Phase 3 — Ambiguity Collapse

### Ambiguity A1: Nature axis — N1 confirmed?

**Strongest counter-interpretation:** Tasks naturally MIX diagnostic and generative-design (diagnose problem → design fix). The N1 split is artificial.

**Why the counter-interpretation fails (structural grounds):** Tasks have a PRIMARY deliverable shape that classifies them cleanly. A task whose primary deliverable is understanding-with-evidence (and optional remediation note) is diagnostic. A task whose primary deliverable is construction-with-components-and-trade-offs (and implicit diagnosis) is generative-design. The test is applicable per-prompt; classification is unambiguous. Structural ground: deliverable-shape test discriminates cleanly even when tasks have mixed elements.

**Confidence:** HIGH.

**Resolution:** Commit **N1**. Per-prompt classification by PRIMARY deliverable shape.

### Ambiguity A2: 6 advancing seeds — correct prune?

**Strongest counter-interpretation:** D7 (asymmetric-failure principle difference) is the most DIRECT probe of `/explore` vs `/surfacing` structural divergence and could produce the sharpest discrimination signal. Excluding it gives up potential signal.

**Why the counter-interpretation fails (structural grounds):** D7's HIGH authorship-bias makes it NOISE rather than SIGNAL. The prior inquiry already had a similar prompt (a-3) flagged for the same reason, and Critique determined the flag warranted exclusion from the sharpest-pair recommendation. Including D7 in advancing seeds would repeat the prior mistake at the same load-bearing point. Structural ground: bias is bias regardless of which test variant carries it.

**Confidence:** HIGH.

**Resolution:** Commit **D2, D3, D8 + G1, G2, G6** as advancing seeds. **D7 explicitly excluded.** D4, D5, G8 also excluded (each had mild-to-medium authorship-bias flag in exploration). **G3** flagged as defensible alternative to G1 (Innovation may surface G3 as a variant).

### Ambiguity A3: Dual-level rubric — U1-U5 + F1-F6, or simpler?

**Strongest counter-interpretation:** 11 dimensions is a lot to apply per-prompt. A simpler rubric (e.g., 3+3) would be more usable in practice.

**Why the counter-interpretation fails (structural grounds):** The dual-level structure is the CORRECTED framing's centerpiece. Reducing to 3+3 loses operational specificity at one of the two levels. The 5 upstream dimensions (U1-U5) are minimal coverage of the prior comparative-evaluation's 5 operational-difference axes (R1 in prior exploration: granularity, uncertainty, output structure, boundary, substrate); fewer would underexpose the upstream-comparison. The 6 finding dimensions (F1-F6) extend the prior inquiry's DC1-DC3 with 3 additional dimensions (verdict shape, internal consistency, actionability) needed for cognitive-task evaluation. The user can prioritize sub-dimensions if needed during runs.

**Confidence:** HIGH.

**Resolution:** Commit **U1-U5 + F1-F6**. Per-criterion verdict per fork-task. Aggregate at level (per-level) + holistic.

### Ambiguity A4: Negative-control approach

**Strongest counter-interpretation:** Carry forward prior's controls (trivial-enum + pure-narrative). They worked there; reusing them simplifies.

**Why the counter-interpretation fails (structural grounds):** Prior's controls were anti-patterns for ENUMERATION test prompts. Reusing them in the CORRECTED loop-level test creates a category mismatch — the controls would still be anti-enumeration, but the test prompts are now cognitive tasks. The right anti-control for a LOOP-LEVEL test is a cognitive task that is so well-bounded that downstream stages have no substantive work. Lookup-shape (confirm a fact / read a small file / report a value) bypasses cognitive machinery for both forks.

**Confidence:** MEDIUM-HIGH (the negative-control design is conceptually clear but the empirical "does it actually bypass" verification only happens at run-time).

**Resolution:** Two controls — CTRL-1 (lookup) + CTRL-2 (status-confirm) — both deliberately bypass cognitive machinery. Innovation generates specific bodies.

### Ambiguity A5: Stochasticity + run plan — carry forward?

**Strongest counter-interpretation:** Cognitive tasks take longer (~35-50 min vs ~25-30 min for enumeration); one run per fork-task may not give enough signal.

**Why the counter-interpretation fails (structural grounds):** Same noise-floor logic applies regardless of compute-per-run. The CTRL pair anchors noise empirically. One run per fork-task is the practical optimum for budget; user can optionally double-run for stronger noise estimation (carry-forward option from prior).

**Confidence:** HIGH.

**Resolution:** Carry forward. One run per fork-task; ~5-10% noise floor hypothesis; >20% signal threshold; CTRL anchors empirically.

### Ambiguity A6: Dual-level guidance in finding — include explicit section?

**Strongest counter-interpretation:** Just include the prompts; let the user figure out comparison.

**Why the counter-interpretation fails (structural grounds):** The corrected framing's WHOLE POINT is to enable two-level comparison. Without explicit guidance, the user might default to finding-only comparison (the prior inquiry's framing) and miss the upstream-level signal. The finding must guide the user explicitly through both levels with operational instructions.

**Confidence:** HIGH.

**Resolution:** Include dedicated "Dual-level comparison rubric" section in finding (Section similar in shape to prior's Section 6 criterion section, but with both U-dims and F-dims).

### Ambiguity A7: Changes-from-Prior section — required by CONCLUDE; what content?

**Strongest counter-interpretation:** Brief acknowledgment is sufficient; detailed explanation bloats the finding.

**Why the counter-interpretation fails (structural grounds):** CONCLUDE's template explicitly requires "What's preserved / What's changed / What's new / Migration" sub-sections when `corrects:` is declared. The user explicitly identified the frame error and asked for a redo — the finding must visibly account for what was wrong, what changed, and how the user should treat the prior. Brief acknowledgment fails the "visible correction" requirement.

**Confidence:** HIGH.

**Resolution:** Required Changes-from-Prior section with all 4 sub-sections + revision-trigger field. Frame-error diagnosis (R13's 3 root causes) carried into the section.

### Ambiguity A8: Self-reference mitigations — sufficient?

**Strongest counter-interpretation:** External grounding via user correction is 1 data point; mitigations may be insufficient against authorship bias.

**Why the counter-interpretation fails (structural grounds):** The user's correction is OPERATIONALLY DECISIVE (user is the customer; the corrective is whatever the user accepts). Additional external grounding (academic literature on cognitive-task design; cross-discipline comparison) is unavailable for this specific project's loop architecture. The 4 mitigations (external + structural + exclusions + architecture-derived rubric) are the maximum available external grounding. Residual risk is acknowledged.

**Confidence:** HIGH on the mitigations being maximum-available; MEDIUM on residual risk being acceptable.

**Resolution:** Apply 4 mitigations explicitly. Acknowledge residual as honest cost in finding's caveats. Carry forward authorship-bias caveat from prior with refinement (cognitive-task framing meaningfully lower risk than enumeration framing).

### Load-bearing concept tests

**LBT1 — "Cumulative effect" — operational meaning or halo concept?**

- **Counter-interpretation:** "Cumulative effect" could be a halo concept that sounds rigorous but doesn't measure anything specific.
- **Why counter doesn't dominate:** Operationalized via dual-level rubric. Level 2 divergence (finding) vs Level 1 divergence (upstream output) — comparing the two reveals amplification (Level 2 > Level 1), neutral (Level 2 ≈ Level 1), or normalization (Level 2 < Level 1). This is a structural comparison with concrete observables, not a halo claim.
- **Confidence:** HIGH.
- **Resolution:** Concept has operational meaning. LBT1 PASS.

**LBT2 — "Meaningful cognitive task" — distinguishable from enumeration?**

- **Counter-interpretation:** The boundary is fuzzy; some tasks could be classified either way.
- **Why counter doesn't dominate:** Distinguishing test = "what does the deliverable look like?" Enumeration: categorized inventory; structured listing. Cognitive: decision-with-reasoning / diagnosis-with-evidence / design-with-components / strategy-with-trade-offs. Verb-shape secondary indicator: cognitive verbs (Why, Should, Design, Diagnose, How, What strategy) vs enumeration verbs (Map, Catalog, Find, Identify, Locate). Per-prompt classification is unambiguous.
- **Confidence:** HIGH.
- **Resolution:** Concept distinguishable via deliverable-shape test + verb-shape verification. LBT2 PASS.

### Specific-vs-pattern recognition cue

Per `_branch.md`'s Scope Check: SPECIFIC — the deliverable is 10 concrete cognitive-task prompts for this exact A/B comparison. Broader pattern (how to design loop-level tests for cognitive disciplines in general) flagged as Open Question, not foreground.

---

## SV4 — Clarified Understanding

The 8 ambiguities are resolved. The deliverable shape is now stable:

- 12 prompts total (5 Diagnostic + 5 Generative-Design + 2 negative controls)
- N1 axis primary; harness-internal domain; size-comparable across nature groups
- 6 advancing seeds: D2, D3, D8 + G1, G2, G6 (G3 flagged alternative)
- Dual-level rubric: U1-U5 upstream + F1-F6 finding; pre-committed (commit-first protocol)
- One run per fork-task; ~5-10% noise floor; >20% signal threshold; CTRL anchors empirically
- Warming protocol: 6 files (same as prior)
- Negative controls: 2 lookup-shape; bypass cognitive machinery
- Per-prompt amplification prediction in annotation
- Changes-from-Prior section + dual-level guidance section + frame-error diagnosis in Reasoning section
- Self-reference mitigations × 4

Excluded: D7 (HIGH authorship-bias); D4, D5, G8 (mild-to-medium authorship-bias); enumeration-shaped prompts (the frame error); mixed-mode prompts; external-domain; multi-head loop prompts.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed parameters

| # | Parameter | Value |
|---|---|---|
| F1 | Nature axis | N1 (Diagnostic vs Generative-Design) — PRIMARY |
| F2 | Total prompts | 12 (5 D + 5 G + 2 CTRL) |
| F3 | Advancing seeds | D2, D3, D8 + G1, G2, G6; G3 flagged alternative |
| F4 | Excluded candidates | D4, D5, D7, G8 (authorship-bias risk) |
| F5 | Dual-level rubric | U1-U5 (upstream) + F1-F6 (finding) |
| F6 | Aggregate rule | Per-level + holistic per fork-task |
| F7 | Commit timing | BEFORE runs (commit-first protocol) |
| F8 | Stochasticity | One run per fork-task |
| F9 | Noise floor | ~5-10% (hypothesis; CTRL-anchored) |
| F10 | Signal threshold | >20% per-item OR substantially-different aggregate verdict |
| F11 | Warming files | 6 files (same as prior: 2 specs + 2 runners + desc.md + discipline_taxonomy.md) |
| F12 | Anti-pattern check | Critique-stage probe for cognitive-task character + downstream-amplification validity |
| F13 | CTRL purpose | Negative control; lookup-shape; bypass loop machinery |
| F14 | Self-reference mitigations | 4 (user-correction external grounding; structural frame-error diagnosis; bias-prone exclusions; rubric from architecture) |
| F15 | Verb-shape verification | Each prompt body starts with cognitive verb (Why/Should/Design/Diagnose/How/What strategy) NOT enumeration verb (Map/Catalog/Find/Identify/Locate) |
| F16 | Changes-from-Prior section | Required (frontmatter `corrects:`); 4 sub-sections + revision trigger |
| F17 | Per-prompt amplification prediction | Required in annotation; names primary downstream stage(s) where amplification expected |
| F18 | Dual-level guidance section | Required in finding |
| F19 | Cumulative-effect interpretation | Path A / Path B / Path C; Path C is valid outcome |

### Eliminated paths

- Domain-mix (external-domain prompts) — same trade-off as prior; harness-internal commits
- Single-axis rubric (finding-only) — defeats corrected framing
- Two-run-per-fork-task — budget bloat; CTRL anchors sufficient
- Multi-head loop test prompts — out of scope
- Authorship-bias-HIGH advancing seeds — D7 excluded
- Enumeration-shaped prompts — the frame error being corrected
- 5+5 without negative controls — methodology requires noise anchor

### Remaining viable paths (handed to Innovation)

- Generate 5 specific diagnostic prompt bodies from 3 seeds (D2, D3, D8) + 2 derived
- Generate 5 specific generative-design prompt bodies from 3 seeds (G1, G2, G6) + 2 derived; consider G3 as alternative for G1
- Generate 2 negative control bodies (lookup-shape)
- Validate verb-shape (cognitive verbs only for test prompts)
- Annotate per-prompt with axis + amplification prediction + size + flags
- Pair-selection guidance (sharpest 2-of-5 per group + alternative)

---

## SV5 — Constrained Understanding

The Innovation stage has a constrained search space:
- 6 seeds → refine to 5 + 5 + 2 controls = 12 prompts
- Per prompt: ~150-250 word body; self-contained; paste-ready; harness-internal; cognitive-task-shape (NOT enumeration)
- Per-prompt annotation: nature (D/G) + downstream amplification prediction + approximate size + flag if applicable
- Verb-shape verification: cognitive verb start; not enumeration verb
- 2-of-5 pair recommendation per group + alternative
- Carry-forward elements: warming protocol; criterion structure; run plan

Critique has constrained probes:
- Cognitive-task character per prompt (does the task actually require downstream work? Or could /surfacing alone answer it?)
- Verb-shape verification (no enumeration verbs)
- Downstream-amplification prediction validity (does the predicted stage actually have substantive work for this task?)
- Dual-level rubric defensibility (are U1-U5 + F1-F6 each load-bearing? non-redundant?)
- Authorship-bias residual probe (re-applied to all 12 prompts)
- Negative-control validity (do controls actually bypass cognitive machinery?)
- Cascade-normalization concern (is the test design vulnerable to Path C dominating?)

The CONCLUDE stage produces the deliverable with:
- 12 prompts (paste-ready)
- Warming protocol
- Dual-level rubric (pre-committed)
- Run plan
- Negative-control role
- Caveats (authorship-bias + harness-internal + stochasticity)
- Changes-from-Prior section (preserved / changed / new / migration)
- Frame-error diagnosis in Reasoning section

---

## Phase 5 — Conceptual Stabilization

### The integrated model

The corrected A/B test design is a LOOP-LEVEL comparison (not a discipline-level comparison). 12 prompts (5 diagnostic + 5 generative-design + 2 negative controls) form a 2×2 design (2 task-natures × 2 discipline-runners) measured at TWO levels (upstream output + finding). The dual-level comparison rubric lets the user observe both:

- **Individual upstream-output differences** — `exploration.md` from `/MVL+` fork vs `surfacing.md` from `/MVL2+` fork; compared on U1-U5 dimensions (coverage, granularity, relevance discipline, uncertainty handling, boundary handling).
- **Cumulative effect on finding** — `finding.md` from each fork; compared on F1-F6 dimensions (verdict shape, per-item precision, trade-off depth, coverage robustness, actionability, internal consistency).

The cumulative-effect dimension is operationalized as the COMPARISON between Level 2 divergence (finding) and Level 1 divergence (upstream output):

- **Path A or Path B amplification** (Level 2 > Level 1) → upstream choice propagates with growth → cumulative effect is real
- **Neutral** (Level 2 ≈ Level 1) → upstream choice propagates without growth → cumulative effect equals individual effect
- **Path C normalization** (Level 2 < Level 1) → cascade absorbs upstream difference → cumulative effect smaller than individual effect

All three outcomes are valid empirical signals. Path C does NOT mean the test failed — it means the structural verdict from prior may not translate operationally.

**Frame-error correction** is the inquiry's meta-load:
- 3 concurring root causes diagnosed at R13 (discrim-predictor bias + nature-axis-as-territory-type + discipline-vs-loop conflation)
- All three corrected: nature axis is now task-KIND (not territory-type); seeds pruned on downstream-amplification-spread (not upstream-axis stress); test framed as loop-level (not discipline-level)
- Visible in finding via Changes-from-Prior section + Reasoning section

**Self-reference vigilance applied** through 4 mitigations:
- External grounding via user's explicit correction (the load-bearing external signal)
- Structural frame-error diagnosis (R13; 3 root causes; not narrative defense)
- 4 authorship-bias-prone candidates explicitly excluded (D4, D5, D7, G8)
- Dual-level rubric derived from loop architecture (R1), not from preference

### Accommodation trigger check

No perspective-driven destabilization observed. Model settled after 8 ambiguity-collapse pairs + 2 LBTs. No need to re-extract anchors.

---

## SV6 — Stabilized Model

### Committed Structural Decisions (SDs)

14 SDs to hand to Decomposition:

| SD | Decision |
|---|---|
| **SD1** | Nature axis = N1 (Diagnostic vs Generative-Design); primary 2×2 design (2 task-natures × 2 discipline-runners). |
| **SD2** | Deliverable = 12 prompts (5 D + 5 G + 2 negative controls). |
| **SD3** | 6 advancing seeds: **D2** (frame-error diagnostic), **D3** (self-containedness violations), **D8** (L4 multi-head failure anticipation), **G1** (frame-error recovery protocol design), **G2** (merger discipline design), **G6** (regression-detection sub-system design). **G3** (pre-loop framing protocol) flagged as defensible alternative to G1. |
| **SD4** | Excluded candidates: **D7** (HIGH authorship-bias — directly about /explore vs /surfacing); **D4, D5, G8** (mild-to-medium authorship-bias). |
| **SD5** | Dual-level rubric: **U1-U5** (upstream-output level — content coverage, granularity, relevance discipline, uncertainty handling, boundary handling) + **F1-F6** (finding level — verdict shape, per-item precision, trade-off depth, coverage robustness, actionability, internal consistency). |
| **SD6** | Aggregate rule: per-criterion verdict per fork-task; aggregate at level (per-level) + holistic. Pre-committed BEFORE runs (commit-first protocol). |
| **SD7** | Stochasticity policy: one run per fork-task; ~5-10% noise floor (hypothesis; CTRL-anchored); >20% signal threshold. |
| **SD8** | Warming protocol: same 6-file protocol from prior (carry forward: explore.md + surfacing.md + MVL+ SKILL.md + MVL2+ SKILL.md + docs/desc.md + docs/discipline_taxonomy.md). |
| **SD9** | Negative controls: 2 lookup-shape tasks that bypass loop's cognitive machinery (CTRL-1 lookup + CTRL-2 status-confirm). |
| **SD10** | Self-reference vigilance via 4 mitigations: external grounding (user correction); structural frame-error diagnosis (R13); bias-prone exclusions; rubric from architecture. |
| **SD11** | Per-prompt amplification prediction in annotation: names primary downstream stage(s) where upstream-choice effect expected most visibly. |
| **SD12** | Changes-from-Prior section required in finding: 4 sub-sections (preserved / changed / new / migration) + revision trigger. Frame-error diagnosis (R13's 3 root causes) carried in. |
| **SD13** | Dual-level guidance section required in finding: operational rubric for user (how to compare at both levels). |
| **SD14** | Verb-shape verification at Innovation: each prompt body starts with cognitive verb (Why / Should / Design / Diagnose / How / What strategy) NOT enumeration verb (Map / Catalog / Find / Identify / Locate / Enumerate / Generate every). This is the structural test against re-introducing the frame error. |

### How SV6 differs from SV1

SV1 framed the task as "commit decisions from exploration's territory." SV6 reframes it as "commit decisions that operationalize the frame-error correction such that the test design cannot regress into enumeration shape — including a verb-shape verification gate at Innovation, a dual-level rubric centerpiece, and explicit visible correction in the finding." The deliverable is no longer just "10 prompts" — it's "12 prompts + dual-level rubric + frame-error correction + verb-shape verification + cumulative-effect operationalization + Changes-from-Prior section."

---

## Saturation Indicators

| Indicator | Status |
|---|---|
| Perspective saturation | YES — 7 perspectives applied; Frame-exit Completeness FIRED on 4 multi-value terms ("loop-level", "cumulative effect", "meaningful", "amplification") + resolved; last perspectives added KI11 (Path C valid), KI12 (verb-shape verification), KI13 (visible correction as meta-load) |
| Ambiguity resolution ratio | 8/8 ambiguities resolved (100%); 2 LBTs both PASS |
| SV delta | SV1 (commit decisions task) → SV6 (12-prompt 2×2 + dual-level rubric + frame-error correction + 14 SDs) — clear structural shift |
| Anchor diversity | All 5 anchor types present (9 Constraints + 13 Key Insights + 5 Structural Points + 5 Principles + 5 Meaning-Nodes); 7 perspectives produced distinct anchors |

---

## Failure-mode check

| Failure mode | Status | Evidence |
|---|---|---|
| Status Quo Bias | NOT OBSERVED | Explicitly corrected prior's framing at R13 + planned Changes-from-Prior section |
| Premature Stabilization | NOT OBSERVED | 8 ambiguity pairs each with strongest-counter + structural-ground rebuttal |
| Anchor Dominance | NOT OBSERVED | Multiple anchors load-bearing; no single anchor pinning resolutions |
| Perspective Blindness | NOT OBSERVED | 7 perspectives; Frame-exit FIRED on 4 multi-value terms |
| Clean Resolution Trap | NOT OBSERVED | All 8 ambiguities had strongest-counter tested on structural grounds, not by precedent |
| Self-Reference Blindness | NOT OBSERVED | Explicitly acknowledged + 4 mitigations applied + external grounding via USER correction |

---

## Self-Assessment Verdict

**PROCEED to Decomposition with 14 committed structural decisions (SD1-SD14).**

The territory is stable. The Decomposition phase partitions the 12-prompt + dual-level-rubric + frame-error-correction deliverable into independent pieces with explicit interfaces. Each SD constrains the corresponding piece's work scope.
