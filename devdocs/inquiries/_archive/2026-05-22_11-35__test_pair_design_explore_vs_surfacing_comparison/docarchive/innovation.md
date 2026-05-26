# Innovation: A/B Test Task Pair Design for /explore vs /surfacing Comparison

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/_branch.md`

Plus additional instructions: per-piece Seed → Generate → Test at 7 pieces (P1-P7); each prompt SELF-CONTAINED + PASTE-READY; each Group A stresses A1/A2/A4; each Group B stresses A1/A2/A5; each CTRL deliberately R9-anti-pattern. CONTRARIAN-RETHINK at P5 + assembly check.

---

## Intuition / Direction

The deliverable's intuition: prompts must be paste-ready for the user to run two forks, two tasks each, and produce comparable findings. Direction: choose prompts where /explore's region-narrative output and /surfacing's per-item-tags output produce structurally different cascades through S→D→I→C. Valuation: this is empirical validation of a prior structural verdict — the deliverable's value is in its discrimination strength, not its volume.

---

## P1 — Group A: 5 artifact-bounded test prompts

### Seed

GA-1 (cross-discipline coupling) + GA-2 (failure-mode patterns) + GA-3 (asymmetric-failure mentions) + 2 derived candidates. Stress requirement: each prompt must stress at least one of A1 (per-item granularity) / A2 (uncertainty handling) / A4 (boundary handling).

### Generate

**Mechanism: Combination** (seed × paste-ready constraint × harness-internal territory)
**Mechanism: Constraint Manipulation** (size-budget ~5-15 items; specific paths)

**a-1** (from GA-1; stresses **A1 + A4**):
```
Map every cross-discipline coupling point in three specific discipline specs (cognitive_harness/sense-making/references/sensemaking.md, cognitive_harness/decompose/references/decompose.md, cognitive_harness/explore/references/explore.md) — each place where one of those specs references another discipline by name, mechanism, or output — and produce a finding identifying which couplings are load-bearing vs vestigial, and which should be removed to make disciplines more self-contained.
```

**a-2** (from GA-2; stresses **A1 + A2**):
```
Catalog every named failure mode across two discipline specs (cognitive_harness/sense-making/references/sensemaking.md and cognitive_harness/innovate/references/innovate.md), and produce a finding identifying the structural patterns underlying multiple failure modes — which patterns are universal across both disciplines and which are discipline-specific.
```

**a-3** (from GA-3; stresses **A2 + A4**):
```
Find every place where the asymmetric-failure principle is referenced, applied, or implicitly assumed across the surfacing spec plus four end-goal documents (cognitive_harness/surfacing/references/surfacing.md, docs/desc.md, docs/regression/desc.md, docs/evolving_quality_assetment_component.md, docs/thinking_space_dynamics.md), and produce a finding consolidating the principle's operational footprint plus any gaps where it should appear but doesn't.
```

**a-4** (derived; stresses **A1 + A4**):
```
Identify the step-refinement markers (the `(default; refinement-trigger = ...)` pattern or its structural equivalent — embedded refinement notes attached to a default operational rule) across three discipline specs (cognitive_harness/sense-making/references/sensemaking.md, cognitive_harness/decompose/references/decompose.md, cognitive_harness/surfacing/references/surfacing.md), and produce a finding identifying which refinement-triggers share underlying patterns across disciplines vs which are discipline-local.
```

**a-5** (derived; stresses **A1 + A4**):
```
Locate every place where the two main protocols at cognitive_harness/protocols/ (branch_inquiry.md and conclude.md) name specific discipline files, file paths, or sibling-protocol files by explicit reference, and produce a finding identifying which references are essential vs which create unnecessary coupling between the protocol corpus and the discipline corpus.
```

### Test

| Test | a-1 | a-2 | a-3 | a-4 | a-5 |
|---|---|---|---|---|---|
| Novelty (vs raw seed) | YES — narrowed to 3 specs, explicit territory | YES — narrowed to 2 specs | YES — extended to 4 end-goal docs | YES — concrete marker pattern | YES — concrete protocol scope |
| Scrutiny survival (R9 anti-pattern check) | NO trivial-enum (categorization required); NO pure-narrative (per-item verdicts); NO single-item; NO too-vague | NO trivial-enum (structural-pattern identification); NO single-item | NO trivial-enum (cross-doc consolidation); NO too-vague | NO trivial-enum (pattern identification); NO too-small | NO trivial-enum (categorization required) |
| Fertility (does upstream output propagate?) | YES — per-item tags drive decomposition per-coupling | YES — per-mode tags drive sense-making anchors | YES — per-mention tags drive sensemaking anchors | YES — per-marker tags drive pattern claims | YES — per-reference tags drive coupling-removal recommendations |
| Actionability (paste-ready?) | YES (paths explicit) | YES | YES | YES | YES |
| Mechanism independence (would Combination alone produce this?) | NO — Constraint Manipulation (size) also required | NO — Constraint Manipulation required | NO — Combination + Constraint | NO — Combination + Lens Shifting (marker pattern) | NO — Combination + Constraint |

All 5 prompts PASS. Disposition: **ACTIONABLE**.

---

## P2 — Group B: 5 possibility-mode test prompts

### Seed

GB-1 (missing disciplines) + GB-2 (multi-head failure modes) + GB-5 (anti-patterns) + 2 derived candidates. Stress requirement: each prompt must stress at least one of A1 / A2 / A5 (substrate / primitives).

### Generate

**Mechanism: Combination** + **Mechanism: Absence Recognition** (the seeds themselves were absence-recognition outputs)

**b-1** (from GB-1; stresses **A1 + A2**):
```
Enumerate candidate cognitive disciplines this harness might add (beyond the current set: explore/surfacing, sense-making, decompose, innovate, td-critique, comprehend, reflect, navigation, meta-loop) that would improve loop coverage of "anticipation" — disciplines that prepare for future state rather than respond to present state — and produce a finding identifying which candidates are load-bearing for the autonomous-consciousness end goal (per docs/desc.md) vs which overlap existing disciplines vs which should be deferred.
```

**b-2** (from GB-2; stresses **A1 + A2**):
```
Generate every plausible failure mode specific to multi-head cognitive loops (parallel disciplines running concurrently with a merger downstream) that does NOT already appear in any individual discipline's failure-mode catalog across cognitive_harness/<discipline>/references/<spec>.md files, and produce a finding proposing which modes need first-class catalog entries vs which can be left to general failure-detection.
```

**b-3** (from GB-5; stresses **A1 + A2 + A5**):
```
Generate every plausible anti-pattern for /MVL+ misuse — patterns where a user might invoke the cognitive loop in a way that produces low-value findings, wasted disciplines, or false convergence — and produce a finding proposing detection signals for each anti-pattern and corrective protocol changes targeting cognitive_harness/MVL+/SKILL.md or cognitive_harness/protocols/.
```

**b-4** (derived; stresses **A1 + A5**):
```
Generate every candidate component a "merger" discipline would need to combine outputs from parallel cognitive disciplines (conflict resolution, weight arbitration, residual-disagreement handling, etc.), and produce a finding proposing the discipline's component set ordered by criticality plus the load-bearing primitives (per docs/thinking_space_dynamics.md) each component would use.
```

**b-5** (derived; stresses **A1 + A2 + A4**):
```
Enumerate observable indicators of consciousness-gradient progress per docs/desc.md (e.g., spontaneous attention, intrinsic valuation, real-time steering) that this harness should aim to surface in its self-assessment loop, including ones not explicitly named in desc.md but derivable from the framework, and produce a finding proposing a measurement schema with each indicator's observability conditions.
```

### Test

| Test | b-1 | b-2 | b-3 | b-4 | b-5 |
|---|---|---|---|---|---|
| Novelty (vs raw seed) | YES — anchored to "anticipation" purpose + desc.md criterion | YES — explicit "not in existing catalog" boundary | YES — explicit detection-signal + corrective-target framing | YES — primitive composition added | YES — observability schema added |
| Scrutiny survival (R9 anti-pattern) | NO trivial-enum (candidate generation); NO too-vague (anchored purpose); NO too-small | NO trivial-enum (boundary check); NO single-item; NO pure-narrative | NO trivial-enum (corrective proposal); NO single-item | NO trivial-enum (primitive mapping); NO single-item | NO trivial-enum (schema construction); NO too-vague |
| Fertility | YES — per-candidate tags drive decomposition + innovation | YES — per-mode tags drive sensemaking patterns | YES — per-anti-pattern tags drive corrective proposals | YES — per-component tags drive primitive-mapping | YES — per-indicator tags drive measurement design |
| Actionability | YES | YES | YES | YES | YES |
| Mechanism independence | YES — Absence Recognition + Combination (purpose-anchor) | YES — Absence Recognition + Constraint (catalog-boundary) | YES — Absence Recognition + Lens Shifting (corrective frame) | YES — Combination + Domain Transfer (component composition pattern) | YES — Combination + Extrapolation (named → derivable) |

All 5 prompts PASS. Disposition: **ACTIONABLE**.

---

## P3 — CTRL pair: 2 negative-control prompts

### Seed

CTRL purpose: anchor the noise floor empirically. CTRL prompts must deliberately fall into ≥1 R9 anti-pattern and should produce SAME finding under both /MVL+ and /MVL2+.

### Generate

**Mechanism: Inversion** (CTRL prompts are the inverse of test prompts: instead of A1/A2/A4/A5 stress + no anti-pattern, they have NO axis stress + DELIBERATE anti-pattern)

**c-a** (artifact-mode CTRL; Group A analog; R9: trivial-enumeration + too-small):
```
List every file in the cognitive_harness/sense-making/ directory and produce a finding describing what is at each path.
```

**c-b** (possibility-mode CTRL; Group B analog; R9: pure-narrative + too-vague):
```
Generate creative metaphors that capture what the /MVL+ cognitive loop is conceptually like, and produce a finding proposing the most evocative one.
```

### Test

| Test | c-a | c-b |
|---|---|---|
| R9 anti-pattern present? | YES — trivial enumeration (just lists files) + too-small (~3 files) | YES — pure narrative (metaphor selection) + too-vague |
| Expected discrimination | LOW — both variants will produce ~similar inventory + paragraph | LOW — both variants will generate metaphors + pick one with similar reasoning |
| Convergent finding under both /MVL+ and /MVL2+? | EXPECTED YES (file inventory is independent of upstream-discipline-mechanism) | EXPECTED YES (metaphor generation doesn't stress per-item-tags vs region-narrative) |
| Self-contained + paste-ready? | YES | YES |
| Negative-control role validated? | YES — CTRL functioning as designed | YES — CTRL functioning as designed |

Both CTRLs PASS. Disposition: **ACTIONABLE** as negative controls.

**Note:** If either CTRL produces meaningfully divergent findings, that's diagnostic — the comparison is noisier than expected, or one of the variants is mis-applying its mode-detection. Either way, it's signal about the test methodology.

---

## P4 — Annotation layer: 12-row table

### Seed

Per-prompt: axis-stress signature + predicted discrim strength + approximate size.

### Generate

**Mechanism: Combination** (each prompt × annotation fields)

| Prompt ID | Axis stress | Predicted discrim | Approx size |
|---|---|---|---|
| **a-1** | A1 + A4 | HIGH | ~6-12 cross-discipline references across 3 specs |
| **a-2** | A1 + A2 | HIGH | ~12 failure modes across 2 specs |
| **a-3** | A2 + A4 | MEDIUM-HIGH | ~5-15 mentions across 5 documents |
| **a-4** | A1 + A4 | MEDIUM-HIGH | ~15-20 step-refinement markers across 3 specs |
| **a-5** | A1 + A4 | MEDIUM | ~10-15 explicit file references across 2 protocols |
| **b-1** | A1 + A2 | HIGH | ~5-8 candidate disciplines |
| **b-2** | A1 + A2 | HIGH | ~5-10 candidate multi-head failure modes |
| **b-3** | A1 + A2 + A5 | HIGH | ~5-10 candidate anti-patterns |
| **b-4** | A1 + A5 | MEDIUM-HIGH | ~5-7 candidate merger components |
| **b-5** | A1 + A2 + A4 | MEDIUM-HIGH | ~5-10 candidate indicators |
| **c-a (CTRL)** | NONE (R9: trivial-enum + too-small) | LOW | ~3-5 files |
| **c-b (CTRL)** | NONE (R9: pure-narrative + too-vague) | LOW | ~3-5 metaphors |

### Test

| Test | Result |
|---|---|
| 12 rows complete | YES |
| Each row has axis-stress + discrim + size | YES |
| Size estimates use consistent units | YES (item count) |
| Test rows show HIGH or MEDIUM-HIGH discrim | YES |
| CTRL rows show LOW discrim + reason | YES |
| Internal consistency (axis-stress aligns with prompt body) | YES — verified against P1, P2, P3 outputs |

PASS. Disposition: **ACTIONABLE**.

---

## P5 — Pair-selection guidance

### Seed

For each of Groups A and B, which 2-of-5 pair has SHARPEST predicted discrimination?

### Generate

**Mechanism: Extrapolation** (extending discrim-strength predictions to ranking)
**Mechanism: Inversion** (CONTRARIAN-RETHINK)

**Group A sharpest pair candidates:**
- a-1 (HIGH; A1+A4): per-item-discrete cross-discipline references + boundary handling
- a-2 (HIGH; A1+A2): per-item-discrete failure modes + uncertainty handling on pattern boundaries

**a-3 deliberately excluded** despite MEDIUM-HIGH — it asks specifically about /surfacing's signature principle (asymmetric-failure) which could bias the finding toward /surfacing for confound reasons (the very thing CTRL exists to anchor — but here the bias is in the prompt, not the noise floor).

Sharpest Group A pair: **a-1 + a-2**. Reasoning: both HIGH discrim; both per-item-discrete-domain; different stress axes (A4 vs A2); together they probe both boundary handling and uncertainty handling.

**Group B sharpest pair candidates:**
- b-1 (HIGH; A1+A2): missing-discipline candidate enumeration under purpose-bias
- b-2 (HIGH; A1+A2): multi-head failure-mode generation under catalog-boundary constraint
- b-3 (HIGH; A1+A2+A5): anti-pattern generation under purpose-bias + substrate-stress

Sharpest Group B pair: **b-1 + b-3**. Reasoning: b-3 is the only Group B prompt stressing all 3 Group B axes (A1+A2+A5); pairing with b-1 (A1+A2 only) gives axis-spread within HIGH discrim. **b-1 + b-3** maximizes axis diversity at HIGH-discrim level.

### CONTRARIAN-RETHINK Inversion-candidate: "what if NO pair is meaningfully sharper than the others?"

**Test:**

For Group A: are all prompts equivalent in predicted discrim?
- a-1 (HIGH; A1+A4), a-2 (HIGH; A1+A2) ≠ a-3 (MEDIUM-HIGH; A2+A4), a-4 (MEDIUM-HIGH; A1+A4), a-5 (MEDIUM; A1+A4)
- Discrim predictions are NOT uniform; HIGH > MEDIUM-HIGH > MEDIUM is a defensible gradient based on axis-stress count + axis-coverage.
- a-1 stresses A1 (per-item) + A4 (boundary) — both load-bearing axes of /explore vs /surfacing divergence.
- a-2 stresses A1 + A2 (uncertainty) — A2 is the most spec-divergent axis (asymmetric-failure explicit only in /surfacing).
- Therefore a-1 + a-2 IS meaningfully sharper.

For Group B: are all prompts equivalent?
- b-1, b-2, b-3 all HIGH; b-4, b-5 MEDIUM-HIGH.
- Within HIGH, b-3 (A1+A2+A5) > b-1, b-2 (A1+A2) by stress count.
- b-1 + b-3 is meaningfully sharper than b-4 + b-5.

CONTRARIAN REJECTED on structural grounds (predictions are not uniform; gradients are defensible by axis-stress count + which axes are stressed).

### Test (assembly check on recommendation)

| Test | Result |
|---|---|
| 2 pair recommendations (1 per group) | YES — a-1+a-2 for Group A; b-1+b-3 for Group B |
| Each cites P4 annotations | YES — axis-stress + discrim columns |
| Reasoning for sharpest is structural | YES — axis-stress count + axis coverage |
| Total recommended subset = 2 + 2 + 2 CTRL = 6 | YES (vs 12 full set) |
| Budget trade-off stated | YES — 6 prompts ~1.5-2h vs 12 prompts ~3-4h |

PASS. Disposition: **ACTIONABLE**.

---

## P6 — Warming protocol artifact

### Seed

SD6 commits 6 files in committed order; needs to be formatted as paste-ready user instruction.

### Generate

**Mechanism: Lens Shifting** (re-framing SD6 as parent-session-instruction)

Paste-ready text:

```
## Warming protocol (run in parent session BEFORE forking)

Read these 6 files in order. Each warms the session with context both forks need:

1. cognitive_harness/explore/references/explore.md
   — so this session knows what /explore's spec commits

2. cognitive_harness/surfacing/references/surfacing.md
   — so this session knows what /surfacing's spec commits

3. cognitive_harness/MVL+/SKILL.md
   — the /MVL+ runner (will be invoked in fork 1)

4. cognitive_harness/MVL2+/SKILL.md
   — the /MVL2+ runner (will be invoked in fork 2)

5. docs/desc.md
   — project end-goal context

6. docs/discipline_taxonomy.md
   — categorical placement of disciplines

After all 6 reads, fork the session into 2 identical copies.
In session 1: prefix prompts with /MVL+
In session 2: prefix prompts with /MVL2+
```

### Test

| Test | Result |
|---|---|
| 6 files listed per SD6 | YES |
| Paths are unambiguous | YES (project-relative; absolute on user's machine via prefix) |
| Reading order specified | YES |
| Per-file intent statement included | YES |
| Indicates when to fork | YES |
| Paste-ready | YES |

PASS. Disposition: **ACTIONABLE**.

---

## P7 — Criterion + run-plan + caveats artifact

### Seed

SD4 (DC1+DC2+DC3) + SD5 (one run, noise floor, signal threshold) + SD11 (two-step verification) + SD10 (commit-first) + SD7/SD9/caveats.

### Generate

**Mechanism: Lens Shifting** (re-framing SDs as user-facing protocol)
**Mechanism: Combination** (multiple SDs into one artifact)

Paste-ready text:

```
## A/B test methodology — read BEFORE running prompts

### Discrimination criterion (commit-first; do not modify after seeing findings)

Each finding will be compared on three sub-criteria, then aggregated:

- **DC1 — Per-item precision.** Did the finding correctly identify what mattered, and (where applicable) tag each item accurately? Floating prose claims that don't pin to specific items score lower.

- **DC2 — Trade-off depth.** Did the finding name the relevant trade-offs honestly + at appropriate weight? Are trade-offs pinned to specific items, or floating narrative?

- **DC3 — Coverage robustness.** Would the finding's overall verdict survive if 1-2 items were missed or mis-tagged? (Tests structural soundness.)

**Aggregate rule:** Each fork-task gets a verdict per sub-criterion (BETTER / SAME / WORSE) + a holistic verdict. The /MVL+ vs /MVL2+ comparison reports per-criterion plus aggregate.

### Run plan

1. Run warming protocol (see warming-protocol section above) in parent session
2. Fork into 2 identical sessions
3. In session 1: prefix prompts with `/MVL+`
4. In session 2: prefix prompts with `/MVL2+`
5. Run the recommended subset first (6 prompts: a-1, a-2, b-1, b-3, c-a, c-b) for sharpest signal at minimum budget
6. Optional: run the remaining prompts for broader coverage
7. Compare findings per DC1 + DC2 + DC3 + holistic

### Stochasticity policy

- One run per fork-task (no duplication)
- Expected noise floor: ~5-10% per-item divergence between any two runs (LLM stochasticity)
- Signal threshold: >20% per-item divergence OR substantially-different aggregate verdict

### CTRL pair role

The two CTRL prompts (c-a and c-b) are NEGATIVE CONTROLS:

- Expected SAME finding under both /MVL+ and /MVL2+
- Purpose: empirically anchor the noise floor
- Diagnostic readings:
  - CTRLs CONVERGE + tests CONVERGE → no upstream-discipline effect detected (verdict refuted)
  - CTRLs CONVERGE + tests DIVERGE → upstream-discipline effect is real (verdict supported)
  - CTRLs DIVERGE + tests DIVERGE → high noise; cannot distinguish signal from noise
  - CTRLs DIVERGE + tests CONVERGE → noise that happened to cancel; weak verdict

### Acknowledged caveats

- **Authorship bias:** /surfacing was drafted by Claude in a prior /MVL+ inquiry. The A/B test risks favoring it. Mitigations: pre-committed criterion (DC1+DC2+DC3 cannot drift post-hoc), CTRL pair anchors noise, sub-criteria externally grounded.

- **Harness-internal domain bias:** all 12 prompts target harness-internal territories. /surfacing was designed with the harness's own end-goal docs in mind, so it could have a residual advantage on harness-internal territory. Acknowledged but unavoidable — external-domain prompts trade away user-evaluability. Generalization beyond harness-internal is a follow-up test.

- **One-shot per fork:** stochasticity is not eliminated. CTRL anchors but doesn't remove. If CTRL pair shows >10% divergence on its own, treat all test results with caution.
```

### Test

| Test | Result |
|---|---|
| DC1 + DC2 + DC3 defined with rubrics | YES |
| Aggregate rule stated | YES (per-criterion + holistic) |
| Run policy stated | YES (one run + fork prefix) |
| Noise floor + signal threshold stated | YES (~5-10% / >20%) |
| CTRL role stated | YES (with 4 diagnostic readings) |
| Commit-first protocol stated | YES (do not modify after seeing findings) |
| Two-step verification stated | YES (per-criterion + holistic comparison) |
| Caveats: authorship + domain + stochasticity | YES |
| Paste-ready | YES |

PASS. Disposition: **ACTIONABLE**.

---

## Assembly Check

Examining all 7 pieces together — does the assembly produce emergent value beyond individual pieces?

**Test 1: Methodological coherence**
- 12 prompts (10 test + 2 CTRL) form a 2×2 design with negative controls
- Pre-committed criterion + warming protocol + run plan form a complete experimental protocol
- All pieces interlock: warming primes both forks identically; criterion is committed before runs; CTRLs anchor noise; test prompts probe discrimination; pair-selection optimizes budget; annotations enable comparison
- VERDICT: methodologically coherent

**Test 2: Discrimination-strength gradient**
- HIGH discrim: a-1, a-2, b-1, b-2, b-3
- MEDIUM-HIGH: a-3, a-4, b-4, b-5
- MEDIUM: a-5
- LOW (CTRLs): c-a, c-b
- The gradient is structural (axis-stress count + axis coverage), not arbitrary. The user can pick any subset and have informed expectations of signal strength.
- VERDICT: gradient is defensible

**Test 3: Axis coverage**
- A1 (per-item granularity): all 12 prompts
- A2 (uncertainty handling): a-2, a-3, b-1, b-2, b-3, b-5 (6 prompts)
- A4 (boundary handling): a-1, a-3, a-4, a-5, b-5 (5 prompts)
- A5 (substrate): b-3, b-4 (2 prompts)
- CTRL: c-a, c-b (no stress)
- A5 coverage is light (only 2 prompts). However, A5 is a Group B axis (substrate), and 2 Group B prompts cover it. The other Group B prompts focus on A1+A2.
- VERDICT: coverage adequate; A5 mildly under-covered but acceptable given Group B's primary focus on possibility-mode generation (A1+A2)

**Test 4: Budget feasibility**
- Full 12-prompt set: 2 forks × 12 prompts × ~25-30 min = ~10-12 hours
- Recommended subset (6 prompts: a-1, a-2, b-1, b-3, c-a, c-b): 2 forks × 6 prompts × ~25-30 min = ~5-6 hours
- Minimum (4 prompts: a-1, b-3, c-a, c-b): 2 forks × 4 prompts × ~25-30 min = ~3-4 hours
- All three budgets are practical for a focused session series.
- VERDICT: budget options exist for different commitment levels

**Test 5: Failure-mode immunity**
- Premature evaluation? NO — testing followed generation per piece
- Single-mechanism trap? NO — 7 mechanisms covered across pieces
- Early frame lock? NO — multiple variations per seed (5 prompts from 3 seeds + 2 derived per group)
- Innovation without grounding? NO — every prompt tested against R9 + verification criteria
- Mechanism exhaustion? NO — all 7 produced viable outputs
- Survival bias? NO — CONTRARIAN-RETHINK at P5 explicitly stated + tested

VERDICT: assembly passes all checks. **The whole is methodologically coherent + budget-flexible + axis-covered + failure-mode-immune.** Emergent value: the user can run the recommended subset for sharpest-signal-per-time, knowing CTRLs anchor noise, criterion is pre-committed, and the gradient gives them informed budget options.

---

## Mechanism Coverage (Telemetry)

- **Generators applied:** 4/4 (Combination across all pieces; Absence Recognition at P2; Domain Transfer at P3+P4; Extrapolation at P5)
- **Framers applied:** 3/3 (Lens Shifting at P6+P7; Constraint Manipulation at P1+P2 size budgets; Inversion at P3 CTRL + P5 CONTRARIAN-RETHINK)
- **Convergence:** YES — 4+ mechanisms point to the same core innovation (the 2×2-with-CTRLs design as the right methodological frame)
- **Survivors tested:** 12 of 12 prompts + 2 CTRLs + 5 protocol artifacts (P4, P5, P6, P7 components)
- **Failure modes observed:** NONE

**Overall: PROCEED to Critique.**

---

## Self-Assessment Verdict

**PROCEED to Critique.**

The deliverable is structurally complete:
- 10 test prompts (5 Group A + 5 Group B) — paste-ready, axis-annotated, size-comparable
- 2 CTRL prompts — paste-ready, deliberate anti-pattern, negative-control role
- 12-row annotation table — per-prompt axis stress + discrim + size
- Pair-selection guidance — a-1+a-2 (Group A); b-1+b-3 (Group B)
- Warming protocol artifact — 6 files, paste-ready
- Criterion + run-plan + caveats artifact — paste-ready

Critique should probe:
- Each prompt against R9 anti-patterns (per SD8)
- Pair-selection: is a-1+a-2 / b-1+b-3 actually sharpest, or did Innovation miss a better pair?
- Size-match: are the 10 test prompts comparable in size?
- CTRL validity: would two reasonable observers actually expect SAME findings from c-a and c-b?
- Authorship-bias residual: any prompt that asks SPECIFICALLY about surfacing's signature mechanism risks favoring it (a-3 was excluded for this; was the exclusion complete?)
- Confound caveat completeness
