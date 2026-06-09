# Critique — discipline_spec_text_organization_patterns_catalog

## User Input

```text
Adjudicate the integrated framework. Adversarial focus on: self-application vs circularity; LLM-friendliness empirical grounding; composability limit cross-check; cost articulation honesty; per-content-type consistency; picker adequacy; 3 frame-premise prosecutions; practical-effect axis check.
```

---

## Phase 0 — Dimension Construction

**Burden of proof:** medium-high stakes (framework, if adopted, shapes future spec edits). Guilty-until-proven-innocent on CRITICAL dimensions.

### Refinement notes applied at Phase 0

- **Project-specific risk dimension check** — risks include self-reference (this framework is structural-recommendation for structural docs), LLM-consumption claim under-grounding, composability-claim over-extension.
- **Frame-premise test** — three load-bearing inherited premises (see Premise Prosecutions below).
- **Purpose-fitness test (NEW from this session's just-adopted refinement note)** — does each candidate piece do what it's supposed to do? Applied per-piece.
- **Axis-completeness probe** — practical-effect axis (axis 5) explicitly considered for D5.
- **Substance-vs-Label success criteria** — for any pattern recommendation, the SUBSTANCE (does the pattern operationally work) must be tested not just the LABEL (does the pattern have a clean name).

### Dimensions

| # | Dimension | Weight | Asks |
|---|---|---|---|
| D1 | Framework completeness | CRITICAL | Does the framework cover the 5 content-types named in SV6? |
| D2 | LLM-consumption grounding | CRITICAL | Is the LLM-friendliness claim structurally grounded, not just rhetorical? |
| D3 | Composability-limit claim validity | CRITICAL | Is the 3-coord cap structurally supported across the pattern space, not just hook-tables? |
| D4 | Per-content-type consistency feasibility | CRITICAL | Is the cross-spec consistency rule operationally applicable given content-types may differ structurally across disciplines? |
| D5 | Practical-effect (would adoption improve practice?) | CRITICAL | Would adopting the framework actually change practitioner experience, or is it descriptive without operational change? |
| D6 | Cost articulation honesty | HIGH | Are costs named accurately or under-stated? |
| D7 | Self-application non-circularity | CRITICAL | Is self-application STRUCTURAL EVIDENCE or CIRCULAR REASONING? |
| D8 | Picker rule operability | HIGH | Are picker rules concrete enough that practitioners apply them consistently? |
| D9 | Frame-premise robustness | CRITICAL | Do the 3 inherited frame premises survive what-if-wrong prosecution? |
| D10 | Substance-not-just-label | HIGH | Each pattern's operational substance specified (not just name)? |

### Frame-premise prosecutions (D9 operationalization)

**Premise (a):** "LLM-consumption is load-bearing."
- *What-if-wrong:* practitioners read these specs more than LLMs consume them.
- *Evidence:* the user EXPLICITLY named it ("since these are prompts, relevant things being close to each other makes sense and make LLMs job easier"). The premise is user-given, not framework-assumed.
- *Verdict:* PASS. Premise is grounded in user input.

**Premise (b):** "Locality is the primary LLM-friendliness signal."
- *What-if-wrong:* explicit structural delimiters (headers; tables) are primary, regardless of locality.
- *Evidence:* both matter. Locality + delimiters compose; they aren't competitors. Markdown tables ARE locality-preserving structural delimiters.
- *Verdict:* PARTIAL PASS with refinement — locality and structural delimiters are NOT competing; the framework should acknowledge they cooperate. Markdown delimiters give the LLM hierarchy signals; locality gives content-adjacency. Both are part of LLM-friendliness; framing locality as PRIMARY is mildly imprecise.

**Premise (c):** "Composability limit at 3 coords is empirical."
- *What-if-wrong:* the 3-coord cap is an artifact of the specific meta-question formulations tested (LTSU + EGA), not a general property.
- *Evidence:* LTSU §8 + EGA confirmation both come from hook-table-based meta-questions. The cap may be specific to that pattern, not general.
- *Verdict:* PARTIAL PASS — the cap is empirically supported within the hook-table pattern family; extrapolating to all multi-coord structures is plausible but not directly tested. The framework should explicitly scope the claim to hook-table-family patterns.

**Aggregate:** 1 PASS + 2 PARTIAL → REFINE on premise scope-clarification.

---

## Phase 1 — Fitness Landscape

**Viable region:** the framework passes critical dimensions with HIGH/MEDIUM. Most pieces fall here.

**Dead region:** any piece whose pattern recommendation is structurally incoherent (e.g., recommends a pattern that violates its own LLM-friendliness criterion). No piece falls here.

**Boundary region:** premise (b) and (c) PARTIAL → REFINE on scope-clarification of LLM-friendliness and composability claims.

**Unexplored region:** empirical validation of LLM consumption (would actually-running cognitive-harness disciplines with the recommended patterns show measurable improvement?). Out of scope for this inquiry; structural follow-up.

---

## Phase 2 — Adversarial Evaluation (consolidated)

### Candidate A — The integrated framework (the assembly meta-articulation)

**Prosecution:**

- *Dim-level:* the framework claims LLM-friendliness via locality but doesn't empirically validate. Claim may be over-confident.
- *User-perspective:* user asked for "all alternatives" + "best version" + tidy + scalable + LLM-friendly. Framework delivers all four. Acceptable to user-perspective.
- *Specific failure-case:* a practitioner with a 6-entry catalog (just over the "small" threshold of 5) applies the hybrid pattern, adds maintenance overhead for marginal gain. The threshold may produce edge-case mis-application.
- *Specification-gap:* the framework specifies WHAT pattern per content-type but doesn't specify HOW to transition existing linear-deep-section content to hybrid (migration template missing).

**Defense:**

- *Structural strength:* framework is content-type → pattern mapping, not single-pattern-fits-all. Acknowledges per-content-type optimization. The mapping is well-justified per content-type.
- *Self-application as evidence (not circular):* if the framework recommended a pattern but used a DIFFERENT pattern in its own structure, THAT would be hypocrisy. Using the recommended pattern is consistency, not circularity. The framework's structure is evidence the pattern works for at-least-this-case (a meta-pattern document).
- *Cost articulation present:* P-COST-ARTICULATION names cost per recommendation; not pretending free.
- *Practical-effect:* framework operationalizes via concrete templates (catalog template; refinement-notes cluster-trigger; etc.), not just abstract guidance.

**Collision:**

- Self-application circularity prosecution is REJECTED: structural consistency between recommendation and recommendation's own form is non-trivial evidence (a meta-recommendation that violated its own rule would be hypocritical). The framework PASSES self-application non-circularity.
- LLM-friendliness empirical grounding prosecution is PARTIAL: the framework's LLM-friendliness is THEORETICALLY grounded (locality + structural delimiters; canonical reasoning) but not EMPIRICALLY tested. REFINE: scope claim as theoretical-and-canonical, flag empirical validation as future inquiry.
- Migration-template gap is REAL but bounded: the framework's purpose is meta-pattern selection, not per-discipline migration walkthrough. Migration is a separate inquiry. ACCEPTABLE residual.

**Dimension scores:**

| Dim | Score | Note |
|---|---|---|
| D1 Framework completeness | PASS | 5 content-types covered; 6 runners detailed; 4 axes scored. |
| D2 LLM-consumption grounding | PARTIAL → REFINE | Theoretical grounding strong; empirical pending. |
| D3 Composability-limit validity | PARTIAL → REFINE | Empirically supported within hook-table family; extrapolation needs scope-flag. |
| D4 Per-content-type consistency feasibility | PARTIAL → REFINE | Cross-spec rule valid but assumes content-types map cleanly across disciplines; needs explicit content-type definition. |
| D5 Practical-effect | PASS | Concrete templates given per content-type; operationally adoptable. |
| D6 Cost articulation honesty | PASS | Costs named per recommendation; adoption-cost specifically articulated. |
| D7 Self-application non-circularity | PASS | Structural consistency is evidence, not circularity. |
| D8 Picker operability | PARTIAL → REFINE | Thresholds are concrete (entry counts) but may need supplemental structural signals (sub-cluster presence; entry complexity). |
| D9 Frame-premise robustness | PARTIAL → REFINE | 1 PASS + 2 PARTIAL (premise b: locality+delimiters cooperate; premise c: cap is hook-table-specific). |
| D10 Substance-not-just-label | PASS | Each pattern has structural sketch, not just name. |

**Verdict:** **SURVIVE with REFINE** on D2, D3, D4, D8, D9 — five refinements, all of the same shape: SCOPE-CLARIFICATION rather than substance-rewrite.

### Bundle: per-piece verdicts (compressed)

All 20 Innovation pieces SURVIVE with the framework-level REFINEs above applied. None individually fails.

---

## Phase 3 — Verdicts with Constructive Output

**Aggregate:** the integrated framework SURVIVES with five REFINEs to apply at finding-time:

1. **REFINE D2 (LLM-consumption scope):** scope the LLM-friendliness claim as "theoretical + canonical-precedent-grounded, not empirically validated"; flag empirical validation as future-structural-follow-up inquiry.

2. **REFINE D3 (composability limit scope):** scope the 3-coord cap as "empirically supported within the hook-table pattern family (LTSU + EGA tested), plausibly general but not directly tested for other multi-coord structures"; flag for monitoring if non-hook-table multi-coord patterns are tried.

3. **REFINE D4 (cross-spec consistency):** add a content-type definition layer — explicitly name what counts as the same content-type across disciplines (e.g., "failure modes" in /td-critique and "hooks" in /sense-making are both ENUMERATED CATALOGS even though they look superficially different; the consistency rule applies because of the shared content-type, not despite the surface difference).

4. **REFINE D8 (picker richer signal):** supplement entry-count thresholds with STRUCTURAL signals — entry complexity (does an entry have ≥3 sub-mechanisms? → maybe hybrid even at 4 entries); sub-cluster naturalness (do entries fall into 2-4 natural groups? → mini-tables even at 8 entries).

5. **REFINE D9 (premise scope-flag):** in P-COST-ARTICULATION, explicitly add "premise scope" — locality and structural delimiters are cooperative not competitive; composability cap is hook-table-family-specific empirically.

### KILL candidates

None. No piece fails on a CRITICAL dimension severely enough to KILL.

### #3 Nitpicking self-check

The 5 REFINEs target STRUCTURAL premise-scope concerns, not minor wording. Per the just-applied purpose-fitness test: would the framework still do what it's supposed to do (provide guidance for structural decisions) if these REFINEs were ignored? Mostly yes — the framework is operationally sound; the REFINEs are scope-honesty improvements, not substance-fixes. So these are not Nitpicking-style KILLs; they are structurally appropriate REFINEs.

### #8 Axis Absence self-check

Did the dimension list miss the practical-effect axis? D5 explicitly addresses it. PASS.

---

## Phase 3.5 — Assembly Check

Applying the 5 REFINEs produces the **refined framework:**

> For cognitive-harness discipline-spec text organization, use a **content-type → pattern mapping**. The 5 content-types and their recommended patterns are: (1) Enumerated catalog → Hybrid overview+detail (with hybrid-overhead-justified-at ≥5 entries OR if entries have ≥3 sub-mechanisms each); (2) Process content → Linear deep sections; (3) Refinement notes at a phase → Peer-stacked with cluster-trigger at 5; (4) Vocabulary → Inline + glossary; (5) Large catalogs with sub-clusters → Mini-tables grouped by sub-coordinate.
>
> Apply **per-content-type consistency** across disciplines (`/td-critique`'s failure modes and `/sense-making`'s hooks are both ENUMERATED CATALOGS for cross-spec consistency purposes despite surface-shape differences).
>
> Avoid: 4+ coord cumulative hook-tables (empirically demonstrated past 3-coord composability limit *within the hook-table pattern family*), pure graph patterns, deep nesting >3 levels, XML-tag primary form, faceted as primary.
>
> **LLM-friendliness via locality + structural delimiters working cooperatively** (not locality alone; markdown headers + table syntax are structural delimiters that cooperate with locality). The framework is **theoretically grounded** in canonical precedents (locality of reference; chunking; multi-discipline locality-favoring docs); **empirical validation** of measurable improvement in practitioner-LLM-interaction is a future inquiry.
>
> Picker rules: entry-count thresholds (≤4 small / ≥5 hybrid / ≥10 with clusters → mini-tables) supplemented by **structural signals** (per-entry sub-mechanism count; natural sub-cluster presence).
>
> Honest cost: ~30-50% more text for hybrid; two-place maintenance per catalog entry; ~150-300 lines initial migration across cognitive-harness specs. Trivially reversible.

**Assembly verdict: SURVIVES.** Refined framework is structurally tighter than pre-critique version.

---

## Phase 4 — Coverage + Convergence Assessment

**Coverage map:**

| Region | Coverage | Notes |
|---|---|---|
| Viable | EXPLORED | Framework SURVIVES with 5 REFINEs absorbed into refined articulation. |
| Dead | EXPLORED (empirically empty) | No piece KILLed. |
| Boundary | EXPLORED + RESOLVED | 5 REFINEs name and resolve the boundary concerns. |
| Unexplored | NAMED | Empirical LLM-consumption validation; sensemaking's hooks vs critique's failure modes content-type-equivalence empirical test. Both deferred to structural follow-up. |

**Convergence criteria:**
- Clean SURVIVE exists: YES (framework with REFINEs applied).
- Two consecutive iterations: N/A (iteration 1).
- No unexplored regions topologically likely: PARTIAL (empirical validation deferred).
- Accumulator: decreasing new info ✓.

### Signal: **TERMINATE** with ranked survivor

The refined framework is the load-bearing deliverable.

### Failure modes observed: 0
- #1 Wrong Dimensions: NO; #2 Rubber-Stamping: NO (REFINEs produced); #3 Nitpicking: NO (REFINEs are structural, not minor); #4 Dim Blindness: NO; #5 False Convergence: NO; #6 Eval Drift: NO; #7 Self-Reference Collapse: NO — explicit handled via D7 + non-circularity defense; #8 Axis Absence: NO (D5 includes practical-effect).

### Overall: **PROCEED**
