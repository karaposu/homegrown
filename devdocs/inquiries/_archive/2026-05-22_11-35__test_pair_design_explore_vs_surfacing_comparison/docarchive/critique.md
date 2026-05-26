# Critique: A/B Test Task Pair Design for /explore vs /surfacing Comparison

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/_branch.md`

Plus additional instructions: read priors; apply full 5-phase Critique with focal probes (SD8 anti-pattern + pair-selection + size-match + CTRL-validity + authorship-bias-residual + annotation-consistency + confound-completeness) + 3 standard prosecution probes (methodology + pair + CTRL adequacy).

---

## Phase 0 — Dimension Construction

Dimensions extracted from Sensemaking's 12 SDs + Decomposition's flagged risks + exploration's R9 anti-patterns + the authorship-bias mitigation principle (FP4):

### 10 evaluation dimensions

| # | Dimension | Weight | Source |
|---|---|---|---|
| **VD1** | R9 anti-pattern avoidance (test prompts) / deliberate inclusion (CTRLs) | **CRITICAL** | Sensemaking SD8 + Exploration R9 |
| **VD2** | Discrimination strength (predicted finding divergence under /MVL+ vs /MVL2+) | **CRITICAL** | Sensemaking FP3 + Exploration R5 |
| **VD3** | Authorship-bias residual (no prompt should specifically favor /surfacing's signature mechanisms) | **CRITICAL** | Sensemaking FP4 + SD10 commit-first |
| **VD4** | Methodological coherence (CTRL functions; criterion pre-committable; warming sufficient) | HIGH | Default (coherence) + SD9 |
| **VD5** | Paste-readiness (self-contained; explicit paths; user adds prefix only) | HIGH | Default (actionability) + SD MN4 paste-ready |
| **VD6** | Size-match across test prompts (size doesn't confound nature-difference) | HIGH | Sensemaking KI8 + FP5 |
| **VD7** | Annotation consistency (P4 discrim-strength calibrated across rows) | HIGH | Decomposition soft-risk flag |
| **VD8** | Confound caveat completeness (P7 names all relevant confounds) | MEDIUM | Default (completeness) + SD7 |
| **VD9** | Budget feasibility (total compute fits typical session series) | MEDIUM | Default (feasibility) + Exploration R7 |
| **VD10** | Pair-selection defensibility (alternative pair selections considered) | MEDIUM | Decomposition P5 question |

### Project-specific risk dimension check

Per refinement note: when candidates involve project artifacts/operations/state, check that dimension list includes project-specific risk axes.

- **R9 anti-pattern compliance** ✓ (VD1 — project-specific from exploration's R9)
- **Authorship-bias residual** ✓ (VD3 — project-specific given I drafted /surfacing)
- **Annotation consistency** ✓ (VD7 — project-specific from Decomposition's flagged soft risk)

Project-specific risk axes COVERED. No missing axes flagged.

### Burden of proof

This is **high-stakes** (the test design influences whether the prior comparative-evaluation verdict gets validated). Defense must demonstrate viability on CRITICAL dimensions; default = block if defense doesn't survive prosecution on any CRITICAL dimension.

---

## Phase 1 — Fitness Landscape

**Viable region:** PASSES all 3 CRITICAL (VD1+VD2+VD3) + PASSES most HIGH (VD4+VD5+VD6+VD7) + acceptable on MEDIUM (VD8+VD9+VD10).

**Boundary region:** PASSES CRITICAL but has soft issues on HIGH or fails on MEDIUM.

**Dead region:** FAILS any CRITICAL dimension. e.g., test prompt containing R9 anti-pattern; CTRL without R9 anti-pattern; prompt biased toward /surfacing's signature mechanisms.

**Unexplored region:** Hybrid prompts (artifact + possibility combined) — explicitly out of scope per SD1; external-domain prompts — explicitly out of scope per SD7.

---

## Phase 2 — Adversarial Evaluation (per candidate)

### Test prompts (Group A)

#### a-1 (Map cross-discipline coupling, 3 specs)

**Prosecution:** Per-item discrete categorization is /surfacing's signature mechanism. Doesn't this bias?
**Defense:** The prompt stresses A1+A4 axes which IS the structural difference — exercising the difference is the test, not biasing. The prompt doesn't ask in /surfacing's vocabulary or about /surfacing's spec; it asks about coupling identification in 3 spec files. Both /explore and /surfacing can attempt; structural difference is what we want measured.
**Collision:** Defense wins. Stressing the structural difference ≠ authorship bias.

| Dim | Pass | Notes |
|---|---|---|
| VD1 R9 | ✓ | Categorization required; not trivial-enum; not pure narrative; not too-small (~9-12 items); not too-vague; not one-passage |
| VD2 Discrim | ✓ HIGH | A1+A4 stress |
| VD3 Authorship-bias | ✓ | Exercises structural difference; not biased toward /surfacing-specific |
| VD4 Methodology | ✓ | Part of coherent 12-set |
| VD5 Paste-ready | ✓ | Paths explicit; self-contained |
| VD6 Size | ✓ | ~9-12 items; mid-range for Group A |
| VD7 Annotation | ✓ | Annotation matches prompt |

**Verdict: SURVIVE clean.**

#### a-2 (Catalog failure modes across 2 specs)

**Prosecution + Defense + Collision:** Same structural reasoning as a-1. The task is pattern identification across modes; not biased.

| Dim | Pass |
|---|---|
| VD1-VD7 | All ✓ |

**Verdict: SURVIVE clean.**

#### a-3 (Asymmetric-failure principle mentions across 5 docs)

**Prosecution:** This prompt SPECIFICALLY asks about the asymmetric-failure principle, which is **/surfacing's signature explicit-mechanism** (named in §4.4 of /surfacing's spec; NOT in /explore's spec). Run on /surfacing's variant, the discipline knows this principle is explicit; run on /explore's variant, the discipline encounters it as a project-level concept it must derive from end-goal docs. The starting position is asymmetric.

**Defense:** The task is to find mentions across the project — both forks read the SAME 5 documents. The asymmetric-failure principle appears in those documents regardless of which upstream-discipline is running. The discipline doesn't need to know the principle is "its own" to find it; both should find roughly the same mentions.

**Collision:** Defense partially survives, but the asymmetric starting position is real — under /MVL2+, the discipline running /surfacing already "knows" the principle as load-bearing for its own operation; under /MVL+, /explore must rediscover it from end-goal docs. The finding could over-favor /MVL2+ for reasons unrelated to upstream-discipline quality (i.e., its spec happens to highlight this specific concept).

| Dim | Pass | Notes |
|---|---|---|
| VD1 R9 | ✓ | Cross-doc consolidation; not anti-pattern |
| VD2 Discrim | ✓ MEDIUM-HIGH | Annotation accurate |
| VD3 Authorship-bias | ⚠ | **MEDIUM-HIGH residual risk** |
| VD4-VD7 | ✓ | |

**Verdict: SURVIVE-with-FLAG.** Constructive output: flag in annotation that a-3 has mild authorship-bias residual; advise deprioritization from pair-selection (Innovation already excluded it from the recommended pair — correctly).

#### a-4 (Step-refinement markers across 3 specs)

**Prosecution:** Step-refinement is a convention used by /surfacing's spec + multiple others. Not bias.
**Defense:** Convention is project-wide; both forks should find markers symmetrically.
**Collision:** Defense wins.

| Dim | Pass |
|---|---|
| VD1-VD7 | All ✓ |

**Verdict: SURVIVE clean.**

#### a-5 (Protocol-corpus references)

**Prosecution + Defense + Collision:** protocols reference disciplines by name in symmetric fashion; both forks find symmetric references. No bias.

| Dim | Pass |
|---|---|
| VD1-VD7 | All ✓ |

**Verdict: SURVIVE clean.**

### Test prompts (Group B)

#### b-1 (Missing disciplines for "anticipation")

**Prosecution:** /surfacing's asymmetric-failure principle (lean toward inclusion under uncertainty) could give it an edge in generating candidates.
**Defense:** Stressing A2 (uncertainty handling) IS the test. /explore's completeness-favoring under possibility-mode is its operational analog; both should generate candidates.
**Collision:** Stressing axis ≠ biasing. Defense wins.

| Dim | Pass |
|---|---|
| VD1-VD7 | All ✓ |

**Verdict: SURVIVE clean.**

#### b-2 (Multi-head failure modes not in existing catalog)

Same reasoning as b-1.

**Verdict: SURVIVE clean.**

#### b-3 (Anti-patterns for /MVL+ misuse)

**Prosecution:** The prompt mentions /MVL+ specifically (the /explore-variant runner) but the user runs in BOTH forks; should be symmetric.
**Defense:** /MVL+ is named generically; same prompt runs under both runners; both find anti-patterns. Not biased.

| Dim | Pass |
|---|---|
| VD1-VD7 | All ✓ |

**Verdict: SURVIVE clean.**

#### b-4 (Merger discipline components + primitive mapping)

**Prosecution:** The prompt asks for "load-bearing primitives... each component would use." Primitives are explicitly catalogued in /surfacing's spec (§2.4 — 8 primitives + 3 deliberately absent); /explore's spec does NOT model primitives. Under /MVL2+, the discipline running /surfacing already has primitives as a load-bearing concept; under /MVL+, /explore must rediscover them from `docs/thinking_space_dynamics.md`. Starting position is asymmetric.

**Defense:** Primitives are a PROJECT-level concept (in docs/thinking_space_dynamics.md), not a surfacing-specific concept. Both forks read the doc during the discipline's operation. The asymmetry is no greater than a-3's.

**Collision:** Defense partially survives; b-4 has similar (mild) authorship-bias residual as a-3.

| Dim | Pass | Notes |
|---|---|---|
| VD1 R9 | ✓ | |
| VD2 Discrim | ✓ MEDIUM-HIGH | |
| VD3 Authorship-bias | ⚠ | **MEDIUM-HIGH residual risk** |
| VD4-VD7 | ✓ | |

**Verdict: SURVIVE-with-FLAG.** Constructive output: flag in annotation as mild authorship-bias risk.

#### b-5 (Consciousness-gradient indicators per desc.md)

**Prosecution:** /surfacing's spec mentions consciousness-substrate connection explicitly (§5.2 — workspace IS the consciousness-substrate); /explore's spec does not. Similar asymmetric starting position as a-3 + b-4.

**Defense:** Consciousness-gradient indicators are in docs/desc.md (project end-goal doc), not in /surfacing's spec. Both forks read desc.md during the discipline's operation. Asymmetry is mild.

**Collision:** Defense partially survives; b-5 has mild authorship-bias residual.

| Dim | Pass | Notes |
|---|---|---|
| VD1 R9 | ✓ | |
| VD2 Discrim | ✓ MEDIUM-HIGH | |
| VD3 Authorship-bias | ⚠ | **MEDIUM residual risk** (anchored in desc.md, lower than a-3/b-4) |
| VD4-VD7 | ✓ | |

**Verdict: SURVIVE-with-FLAG.** Constructive output: flag in annotation as mild authorship-bias risk.

### CTRL prompts

#### c-a (artifact-mode CTRL: list files in cognitive_harness/sense-making/)

**Probe (CTRL validity):** Would two reasonable observers expect SAME finding from both /MVL+ and /MVL2+?
- /explore on this: scan → find 2-3 files → trivial inventory → finding describes the directory.
- /surfacing on this: scope-determination → enumerate items → all relevant (per the prompt) → workspace populated → thin artifact lists files.
- Both produce ~similar findings. Expected convergence.

| Dim | Pass | Notes |
|---|---|---|
| VD1 (CTRL: ≥1 R9) | ✓ | Trivial-enum + too-small (intended) |
| VD2 (Low discrim) | ✓ | Annotation matches |
| VD3 Authorship-bias | ✓ | Not biased |
| CTRL validity probe | ✓ | Convergence expected |

**Verdict: SURVIVE.** Functioning as negative control.

#### c-b (possibility-mode CTRL: creative metaphors for /MVL+)

**Probe (CTRL validity):**
- /explore on this: possibility-mode → generate 5 metaphors → signal-detect for resonance.
- /surfacing on this: relevance-attribution on generated metaphors with bias = "evocative" → 5 metaphors with relevance tags.
- Both produce ~similar findings. Expected convergence.

| Dim | Pass | Notes |
|---|---|---|
| VD1 (CTRL: ≥1 R9) | ✓ | Pure-narrative + too-vague (intended) |
| VD2 (Low discrim) | ✓ | |
| VD3 Authorship-bias | ✓ | |
| CTRL validity probe | ✓ | |

**Verdict: SURVIVE.** Functioning as negative control.

### Protocol artifacts

#### P4 (Annotation table)

**Annotation-consistency probe:** Per Decomposition's soft-risk flag, are discrim-strength predictions calibrated consistently across all 12 rows?

Checking gradients:
- HIGH: a-1, a-2, b-1, b-2, b-3 (5 prompts) — all have ≥2 axes stressed + concrete territory + per-item-discrete items
- MEDIUM-HIGH: a-3, a-4, b-4, b-5 (4 prompts) — varies
- MEDIUM: a-5 (1 prompt) — protocol references, simpler

The gradient is defensible but the discrim-strength differences depend on MULTIPLE factors (axis count + axis identity + item-discreteness + uncertainty exposure). No single-axiom rule. A reader could plausibly question why a-4 (MEDIUM-HIGH) is below a-2 (HIGH) when both stress 2 axes — answer requires reasoning about A2 vs A4 stress strength.

**Verdict: REFINE.** Constructive output: in CONCLUDE, add a brief footnote or column note in the annotation table explaining what differentiates HIGH from MEDIUM-HIGH from MEDIUM (axis count + axis identity + item-discreteness + uncertainty exposure).

#### P5 (Pair-selection)

**Pair-selection probe:** Did Innovation miss a sharper pair?

**Group A pairs:** 10 possible pairs. Two-HIGH combinations: only **a-1+a-2** (HIGH×HIGH). Axis spread: a-1 stresses A1+A4; a-2 stresses A1+A2; combined A1+A2+A4. Innovation's pick is structurally optimal — no sharper pair exists. Plus a-3 is appropriately excluded for authorship-bias.

**Group B pairs:** 10 possible pairs. Three two-HIGH combinations: b-1+b-2, b-1+b-3, b-2+b-3.
- b-1+b-2: axis spread A1+A2 (same axis profile twice)
- b-1+b-3: axis spread A1+A2+A5 (Innovation's pick)
- b-2+b-3: axis spread A1+A2+A5 (alternative)

b-1+b-3 vs b-2+b-3: both yield axis spread A1+A2+A5. b-1's "purpose-bias toward anticipation" is a cleaner purpose-bias test; b-2's "absence relative to existing catalog" is more memory-dependent. Either pair is defensible.

**Verdict: REFINE.** Constructive output: note in CONCLUDE that **b-2+b-3** is an equally defensible alternative pair for Group B. User can pick either. Also: explicitly advise deprioritizing a-3 from pair-selection given the authorship-bias flag.

#### P6 (Warming protocol)

| Dim | Pass |
|---|---|
| Self-contained | ✓ |
| 6 files in order | ✓ |
| Paste-ready | ✓ |
| Sufficient for fork-identicality | ✓ |

**Verdict: SURVIVE clean.**

#### P7 (Criterion + run-plan + caveats artifact)

**Confound-completeness probe:** Are all relevant confounds named?

P7 names: authorship bias, harness-internal domain bias, stochasticity.

Missing (per exploration's R4):
- Model version + effort level (both forks must use SAME model + effort)
- Time-of-conversation pressure (late-session degradation could hit one fork harder)
- Project working directory state (uncommitted changes might be read differently)

**Verdict: REFINE.** Constructive output: in CONCLUDE, add an explicit "session identicality checklist" to P7's caveats — items the user must verify are identical across forks (model, effort, time-of-day, working-dir state). Also note: CTRL pair is QUALITATIVE noise anchor (N=1 per mode); user could optionally double-run CTRL pair to get N=2 for stronger noise estimation at modest extra cost.

---

## Phase 2 — Standard Prosecution Probes

### Prosecution probe 1: Methodology

**Strongest counter:** "The 2×2 design doesn't actually isolate upstream-discipline; mid-cascade effects could swamp the upstream signal."

**Defense:** The point of measuring at the FINDING level is exactly to test whether upstream choice matters end-to-end. If mid-cascade normalization happens (Sensemaking + Decomposition + Innovation + Critique converge regardless of upstream output), that's an EMPIRICAL FINDING — surfacing's structural advantage doesn't translate operationally. If divergence shows, the cascade preserves the upstream effect. The 2×2 design + CTRL pair CAN distinguish these scenarios:
- Tests CONVERGE + CTRLs CONVERGE → cascade normalizes → verdict refuted by test (valid signal!)
- Tests DIVERGE + CTRLs CONVERGE → upstream effect preserved → verdict supported
- Tests CONVERGE + CTRLs DIVERGE → high noise, can't conclude
- Tests DIVERGE + CTRLs DIVERGE → noisy but possible upstream effect

**Collision:** Defense survives. The test design CAN distinguish these scenarios; that's its value. **Prosecution does NOT win.**

### Prosecution probe 2: Recommended pair

**Strongest counter:** "The sharpest predicted pair (a-1+a-2 for Group A; b-1+b-3 for Group B) is biased toward /surfacing's signature mechanisms (per-item-discrete categorization)."

**Defense:** Per-item-discrete IS the load-bearing structural difference between specs (A1 axis in exploration R1). Choosing prompts that stress this axis IS the test, not bias. Bias would be a prompt asking in /surfacing's vocabulary or about /surfacing's spec. Neither prompt does that — they ask about substantive harness territory (cross-discipline couplings, failure-mode patterns, anti-patterns, missing disciplines). The recommendation maximizes signal on the structural axis the comparison is designed to test.

**Collision:** "Stressing the structural difference" ≠ "biased toward surfacing." Defense wins. **Prosecution does NOT win.**

### Prosecution probe 3: CTRL adequacy

**Strongest counter:** "2 CTRLs aren't enough to empirically anchor the noise floor. Statistical noise estimation needs N≥3 replicates."

**Defense:** Correct that N=1 per mode isn't statistical noise estimation. The CTRL pair is QUALITATIVE noise anchor — it detects gross noise (CTRLs DIVERGE → high noise; CTRLs CONVERGE → low noise) but doesn't estimate confidence intervals. With qualitative-only, the 4 diagnostic readings in P7 still work; they just have lower statistical power.

**Collision:** Defense partially survives. The CTRL pair is methodologically minimal but functional. User can optionally double-run CTRL pair to get N=2 per mode at modest extra cost — this is a budget-vs-rigor trade-off the user can make.

**Verdict on this probe:** PARTIAL — defense survives, REFINE constructive output: P7 should explicitly note CTRL is qualitative (not quantitative) noise anchor + offer the double-run option.

---

## Phase 3 — Verdict + Constructive Output

### Per-candidate verdicts

| Candidate | Verdict | Notes |
|---|---|---|
| a-1 | SURVIVE clean | |
| a-2 | SURVIVE clean | |
| a-3 | SURVIVE-with-FLAG | Mild authorship-bias residual (asks about /surfacing's signature principle) |
| a-4 | SURVIVE clean | |
| a-5 | SURVIVE clean | |
| b-1 | SURVIVE clean | |
| b-2 | SURVIVE clean | |
| b-3 | SURVIVE clean | |
| b-4 | SURVIVE-with-FLAG | Mild authorship-bias residual (primitive-mapping advantages /surfacing) |
| b-5 | SURVIVE-with-FLAG | Mild authorship-bias residual (consciousness-substrate; anchored in desc.md so lower) |
| c-a | SURVIVE | CTRL functioning |
| c-b | SURVIVE | CTRL functioning |
| P4 (annotation) | REFINE | Add discrim-gradient explanation footnote |
| P5 (pair-selection) | REFINE | Note b-2+b-3 alternative for Group B; advise deprioritize a-3 |
| P6 (warming) | SURVIVE clean | |
| P7 (criterion + run-plan) | REFINE | Add session-identicality checklist + note CTRL is qualitative |

### Aggregate

- 12 SURVIVE clean
- 3 SURVIVE-with-FLAG (a-3, b-4, b-5 — all annotated)
- 3 REFINE (P4 annotation; P5 pair-selection; P7 caveats) → constructive outputs handed to CONCLUDE

**0 KILLs.** No candidate fails on any CRITICAL dimension.

---

## Phase 3.5 — Assembly Check

After per-candidate verdicts, the surviving set + refinements forms:
- 12 prompts (with 3 carrying annotation-level flags)
- Annotation table (refined with gradient-explanation footnote)
- Pair-selection guidance (refined with b-2+b-3 alternative + a-3 deprioritization)
- Warming protocol (unchanged)
- Criterion + run-plan (refined with session-identicality checklist + CTRL-qualitative note)

**Assembly verdict:** SURVIVE. The architecturally-coherent test design holds. The 4 REFINE outputs are surface-level additions that strengthen but don't restructure the assembly.

Emergent value:
- The 12-prompt set + flagged subset (a-3, b-4, b-5) gives the user a tiered choice: run the unflagged prompts for cleanest signal, OR include flagged prompts for broader coverage knowing the residual bias.
- The b-2+b-3 alternative for Group B gives the user choice within the pair-selection (a-1+a-2 firmly for Group A; b-1+b-3 OR b-2+b-3 for Group B).

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage

- **Dimension coverage:** 10 dimensions × 12 prompts × full evaluation = 120 dimension-candidate evaluations
- **Solution-space coverage:** all 12 prompts + 4 protocol artifacts evaluated; no unevaluated candidates
- **Adversarial coverage:** 3 standard prosecution probes (methodology + pair + CTRL) substantively constructed + defended + collision-adjudicated

### Convergence

- **At least one clean SURVIVE on critical dimensions:** YES — 6 clean SURVIVEs on test prompts (a-1, a-2, a-4, a-5, b-1, b-2, b-3 — actually 7) plus protocol artifacts
- **Landscape stability:** STABLE — no candidate moved between regions during evaluation
- **No critical unexplored region with viable-likely topology:** confirmed — hybrid and external-domain are explicitly out of scope; no other unexplored regions

### Failure-mode check

| Failure mode | Status | Evidence |
|---|---|---|
| Wrong Dimensions | NOT OBSERVED | 10 dimensions extracted from Sensemaking + Decomposition flagged risks + R9 + authorship-bias; project-specific risk axes covered |
| Rubber-Stamping | NOT OBSERVED | 3 REFINE verdicts + 3 SURVIVE-with-FLAG; not everything passed clean |
| Nitpicking | NOT OBSERVED | 0 KILLs; REFINEs are targeted with constructive output |
| Dimension Blindness | NOT OBSERVED | Project-specific risk axes (R9 + authorship-bias + annotation-consistency) included |
| False Convergence | NOT OBSERVED | Clean SURVIVE exists AND landscape stable AND no viable-unexplored region |
| Evaluation Drift | NOT OBSERVED | First critique pass; dimensions fixed in Phase 0 |
| Self-Reference Collapse | NOT OBSERVED | External grounding: dimensions from Sensemaking (which cited end-goal docs) + project-specific R9 + Decomposition's flagged soft risk; burden-of-proof shifted on authorship-bias dimension; CRITICAL gating on authorship-bias forced 3 prompts to SURVIVE-with-FLAG rather than clean SURVIVE |

---

## Convergence Telemetry

- **Dimension coverage:** 10/10 dimensions applied to relevant candidates
- **Adversarial strength:** STRONG (3 substantive prosecution probes + 7 candidate-level adversarial collisions)
- **Landscape stability:** STABLE
- **Clean SURVIVE exists:** YES (multiple)
- **Failure modes observed:** NONE

**Overall: PROCEED to CONCLUDE.**

---

## Constructive Outputs for CONCLUDE (4 REFINE items)

CONCLUDE should incorporate these into the final finding:

1. **Annotation table (P4)** — add a footnote or column note explaining the discrim-gradient: HIGH = ≥2 axes stressed + concrete territory + per-item-discrete; MEDIUM-HIGH = 2 axes OR varied territory; MEDIUM = 1 strong axis + simpler territory.

2. **Pair-selection (P5)** — note that **b-2+b-3** is an equally defensible alternative pair for Group B (same A1+A2+A5 axis spread as b-1+b-3). Also: explicitly advise the user to DEPRIORITIZE **a-3** in pair-selection given the authorship-bias flag.

3. **Annotation flags for a-3, b-4, b-5** — add a "bias-flag" column to the annotation table indicating mild authorship-bias residual for these three prompts. User running them should weight their findings less heavily in the comparison.

4. **Criterion + run-plan artifact (P7)** — add:
   - **Session-identicality checklist** — items the user must verify are identical across forks: same model + effort level (e.g., both Opus 4.7 1M), same time-of-day window (don't run one fork at session-fresh and one at session-fatigued), same working-directory state (commit-or-stash any in-progress changes before forking).
   - **CTRL adequacy note** — CTRL pair is QUALITATIVE noise anchor (N=1 per mode), not statistical noise estimation. Optional: user can double-run the CTRL pair (4 CTRL runs total instead of 2) for N=2 per mode at modest extra compute cost (~30-60 min).

---

## Self-Assessment Verdict

**PROCEED to CONCLUDE.**

The test design SURVIVES adversarial evaluation across 10 dimensions and 3 prosecution probes. 12 prompts (3 with bias flags) + protocol artifacts (3 with REFINE updates) form a methodologically-coherent A/B test the user can run. The 4 constructive outputs strengthen the deliverable without restructuring it. Authorship-bias residual is acknowledged + mitigated (commit-first criterion + CTRL pair + 3 flagged prompts) but not eliminated; the residual is honestly priced into the final deliverable.
