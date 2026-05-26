# Critique: Rename td-critique

## User Input

Inquiry `_branch.md`. Input: innovation.md (6 finalists scored on 6 criteria; ranked top-3 adjudicate primary / vet alt-1 / critique alt-2; +weigh honorable mention; convergence STRONG on adjudicate; 4-tier migration plan) + decomposition.md + sensemaking.md + exploration.md. Phase 0 dimensions: 6 Innovation criteria + 3 project-specific (user-language alignment, cross-discipline coherence, decidability of recommendation). Multi-axis prosecution: dimension + specific-failure-case + spec-gap + user-perspective. Honest tests on adjudicate's legal-formality, user-language alignment, vet's distinctness from sift/assess, critique-no-prefix's Status Quo Bias, recommendation-packet format.

---

## Phase 0 — Dimension Construction

### Dimensions extracted from problem

| # | Dimension | Weight | What it asks | Source |
|---|---|---|---|---|
| **D1** | Operation-fit | **CRITICAL** | Name encodes adversarial-evaluation + verdict-rendering + contraction | Sensemaking commit 1; Innovation P1 |
| **D2** | Bare-verb form | HIGH | Matches modal cannon pattern (`explore`, `innovate`, `decompose`) | Sensemaking commit 2; Innovation P1 |
| **D3** | Baggage-avoidance | HIGH | Doesn't carry the 5 NOT-list connotations the spec explicitly rejects | Spec's "Critique is NOT" section; Innovation P1 |
| **D4** | Intelligibility | MEDIUM | New user can guess discipline's purpose within 5-word operation-context | Innovation P1 + Sensemaking U1 |
| **D5** | No-collision with spec-internal terms | HIGH | Doesn't reuse `Evaluation` (secondary op) or `Verdict` (output type) | Innovation P1 + Sensemaking R1 |
| **D6** | Migration cost | LOW | Bounded effort across ~20 active files | Innovation P1 + Sensemaking F1 |
| **D7** | **User-language alignment** | HIGH | Matches the user's natural conversational vocabulary about the discipline | Project-specific risk axis |
| **D8** | Cross-discipline coherence | MEDIUM | Composes with `explore`, `innovate`, `decompose`, `sense-making` without new ambiguity | Project-specific risk axis |
| **D9** | Decidability of recommendation | MEDIUM | The packet enables user to decide (not just see options) | Project-specific risk axis (response-format meta-check) |

### Dimension validation

- Sensemaking-perspective cross-reference: all 9 perspectives have ≥1 corresponding critique dimension. ✓
- Project-specific risk dimension check: candidates are artifacts (naming an existing discipline); project-specific risks captured by D7 (user-language alignment) + D8 (cross-discipline coherence) + D9 (decidability). ✓
- No noise dimensions: every dimension discriminates between candidates (PASS vs PARTIAL vs FAIL produces non-trivial distinctions across the 6 finalists). ✓

### Weight order

- CRITICAL: D1 — a candidate FAILing here is dead regardless of other scores
- HIGH: D2, D3, D5, D7 — strong dimensions; significant penalty for FAIL or even PARTIAL
- MEDIUM: D4, D8, D9 — tiebreakers among similarly-scoring finalists
- LOW: D6 — explicit deprioritization (Sensemaking's commit)

---

## Phase 1 — Fitness Landscape

### Viable region

A candidate lands in the viable region iff:
- D1 PASS (CRITICAL)
- D3 PASS, D5 PASS, D7 PASS (HIGH)
- D2 PASS
- Other dimensions PASS or PARTIAL

Only **adjudicate** is a clean inhabitant.

### Boundary region (REFINE territory)

Candidates with PARTIAL on a CRITICAL or HIGH dimension, with strong compensating scores elsewhere:
- **vet** — PARTIAL on D1 (operation-fit), PASS elsewhere. Lives at boundary; right pick under conditional weighting.
- **weigh** — same profile as vet; PARTIAL on D1, PASS elsewhere.
- **critique** (no prefix) — FAIL on D3 (baggage), PASS on D6 (migration cost). FAIL on a HIGH dimension is unusual for boundary; lives at the edge of viable/dead because compensating advantage (lowest migration) is real.
- **assess** — PARTIAL on D1; weaker compensating profile than vet/weigh.
- **sift** — PARTIAL on D1 AND D4; weakest of the partial-fit set.

### Dead region

Any candidate that:
- FAILS on D1 (operation-fit): none of the 6 finalists fail outright; all capture at least one aspect
- FAILS on D5 (collision): `evaluate` was disqualified pre-Critique by this dimension
- Carries NOT-list rejection on D3: `validate`, `verify`, `review`, `judge` — disqualified pre-Critique

The candidate-set was already filtered before Critique; the 6 finalists are all at-least-boundary-viable.

### Unexplored region

- New coinages or compound forms not yet surveyed — possibly viable, but exploration's enumeration was systematic across 6 dimensions and Innovation added one emergent candidate (`weigh`) from Domain-Transfer; no further dimensions are likely productive.
- Verdict on unexplored region: NOT-LIKELY-PRODUCTIVE. Coverage is sufficient.

---

## Phase 2 — Adversarial Evaluation

### Candidate 1: `adjudicate`

**Prosecution**

- **P-1 (D4 intelligibility):** "Formal/legal connotation is jarring in daily conversation. 'Let's run the adjudicate step' sounds heavier than the discipline really is in practice."
- **P-2 (D7 user-language; user-perspective):** "The user said `td-critique` naturally. Adjudicate is imposed-from-spec rather than the user's spontaneous vocabulary."
- **P-3 (D7 deeper):** "Does the user use 'adjudicate' in daily speech? Unlikely — it's a less common word than vet or assess."
- **P-4 (D8 cross-discipline):** "Tonal comparison: explore (2 syllables), innovate (3), decompose (3), sense-making (4), adjudicate (4). The most formal of the set."

**Defense**

- **D-1 (against P-1):** The spec's adversarial structure (prosecution + defense + collision + verdict) IS legal-procedure-shaped. The discipline produces formal verdicts (SURVIVE / REFINE / KILL). 'Heavier' is accurate description, not stylistic mismatch.
- **D-2 (against P-2):** The user said `td-critique` because that's the current name. The user is asking what to RENAME to — implicitly accepting that the name will change. The user-language test should be: "will this name FIT once adopted?" not "does the user already use it?"
- **D-3 (against P-3):** User-language alignment isn't about pre-existing vocabulary; it's about whether the user accepts the name as describing their operation. The user clearly understands the operation (they invoke /MVL+ with td-critique knowingly). Adoption requires acceptability, not pre-existence.
- **D-4 (against P-4):** Tonal variation already exists across siblings (sense-making is hyphenated; lengths range 2-4 syllables). Tonal coherence isn't uniformity; it's the absence of jarring collision. Adjudicate adds no new ambiguity.

**Collision**

Defense survives all 4 prosecution lines. P-2 + P-3 (user-language) leave a soft residual — adjudicate is less common than vet in daily speech — but this is preference-territory, not structural failure. The discipline's mechanism IS legal-procedure-shaped; the name reflecting that is identity alignment.

**Verdict: SURVIVE** as primary recommendation. Caveat: some users may prefer a more conversational name; this is preference-resolvable via the alternatives.

---

### Candidate 2: `critique` (drop prefix only)

**Prosecution**

- **P-5 (D3 baggage):** "The spec's 5 NOT-list items are permanent textual evidence the word doesn't fit. Keeping it preserves negative work the spec has to keep doing."
- **P-6 (D1 operation-fit):** "Critique partially captures evaluation; misses adversarial structure (prosecution + defense are explicitly NOT what 'critique' connotes in everyday usage)."
- **P-7 (Status Quo Bias check):** "Keeping 'critique' because it's familiar is the failure mode the discipline guards against. Status Quo Bias dressed as 'minimal migration.'"

**Defense**

- **D-5 (against P-5):** Every discipline name in cognitive science requires some boundary work (e.g., sense-making distinguishes from 'understanding' and 'comprehension'). The NOT-list is bounded; it doesn't grow over time.
- **D-6 (against P-6):** Familiarity has real value. 266 references already use "critique"; dropping just the prefix preserves continuity. The migration cost is genuinely lower than alternatives.
- **D-7 (against P-7):** Status quo is a real position to test, not a default to reject. The decision is: does the operation-fit improvement of adjudicate outweigh the migration of critique-no-prefix? Sensemaking said yes (on operation-fit grounds); but critique remains a defensible second-best for users who weight migration higher.

**Collision**

P-5 is structurally load-bearing. The NOT-list IS persistent evidence the word doesn't fit; this can't be defeated by familiarity arguments. BUT — the defense correctly notes that the NOT-list cost is already paid (the spec is already written with the distancing). The marginal additional cost of "critique" is essentially zero; the real cost is opportunity cost (vs adjudicate's operation-fit improvement).

P-7 (Status Quo Bias) is honest — the inquiry's primary recommendation is to replace, but critique remains in the alternative tier because the migration-cost tradeoff is genuinely meaningful for some user weighting.

**Verdict: SURVIVE-AS-ALTERNATIVE** for the user who weights migration cost (D6) higher than operation-fit (D1). The framing is conditional, not endorsement-of-equivalence.

---

### Candidate 3: `vet`

**Prosecution**

- **P-8 (D1 operation-fit):** "Vet captures fitness-testing but completely misses verdict-rendering AND the prosecution-defense-collision structure. The user reading 'vet the candidates' won't infer 'produces SURVIVE/REFINE/KILL verdicts with adversarial reasoning.'"
- **P-9 (specific-failure-case):** "Concrete conversation: 'we need to vet the candidates from innovation' — fine. But: 'the vet returned a KILL verdict on candidate X' — sounds odd; vet doesn't naturally take 'verdict' as object."
- **P-10 (D8 cross-discipline):** "Vet is military / hiring / clearance vocabulary; tonally different from the philosophical-sounding `explore` / `innovate` / `decompose` / `sense-making`."

**Defense**

- **D-8 (against P-8):** Vet's PARTIAL on D1 is acknowledged honestly. The CRITICAL designation of D1 doesn't mean PARTIAL is FAIL — it means a CRITICAL-FAIL is fatal. PARTIAL with strong compensating profile is boundary-viable. Vet's strengths on D4 (intelligibility) and D7 (user-language) are the compensation.
- **D-9 (against P-9):** The 'vet returned a verdict' phrasing is unusual but parseable. The discipline's mechanism is in the spec body; the name doesn't have to encode every aspect.
- **D-10 (against P-10):** Tonal variation already exists. Cross-discipline coherence isn't tonal uniformity — it's no-collision and no-new-ambiguity. Vet introduces neither.

**Collision**

P-8 is the load-bearing prosecution. Vet's miss on D1 (CRITICAL) is real and structural; the name doesn't evoke the discipline's mechanism. The defense correctly contains the damage — D1 PARTIAL ≠ D1 FAIL — but the gap remains. P-9's specific-failure-case strengthens this: "the vet returned a verdict" reveals the naming mismatch in concrete use.

**Verdict: REFINE-AS-CONDITIONAL-SURVIVE** — viable secondary choice if the user weights D7 (user-language / daily-language) higher than D1 (operation-fit precision). Constructive output: the user-decision condition is the trade-off between operation-name-precision and daily-language-comfort. Vet is the right pick under one weighting; adjudicate is the right pick under another.

---

### Candidate 4: `weigh`

**Prosecution**

- **P-11 (D1 operation-fit):** "Weighing is one sub-step of adjudication; it's not the whole operation. Innovation's framing as 'multi-dimensional weighing on the fitness landscape' is partially right but the discipline ALSO has prosecution-defense-collision and verdict-rendering."
- **P-12 (D4 intelligibility):** "'Weigh the options' is universal but doesn't tell the user the discipline produces verdicts."
- **P-13 (D7 user-language):** "Did the user say 'weigh' in conversation? Probably not. Like adjudicate, it's a spec-derived candidate."

**Defense**

- **D-11 (against P-11):** Multi-dimensional weighing IS what happens on the fitness landscape per the spec (criterion-by-candidate scoring). The legal scales-of-justice imagery aligns with adjudicate's adjacent territory but with a less formal tone — it captures the "weighing arguments" half of the legal procedure.
- **D-12 (against P-12):** Same as vet; partial-fit on operation but compensates on D4 intelligibility.
- **D-13 (against P-13):** Same as adjudicate; the user doesn't need to already use the word; they need to accept it on adoption. Weigh is closer to daily speech than adjudicate.

**Collision**

Similar profile to vet. PARTIAL on D1; PASS on most others. Weigh is essentially a less-formal variant of adjudicate that loses the legal-etymology precision but gains daily-language accessibility. The tradeoff is real but not dominantly better than vet on its own dimension.

**Verdict: REFINE-AS-HONORABLE-MENTION** — viable, but offers a similar value proposition to vet without dominating it. The user can consider weigh as a third alternative if neither vet nor adjudicate fits.

---

### Candidate 5: `assess`

**Prosecution**

- **P-14 (D1 operation-fit):** "Assess is too generic — every discipline assesses something. Innovation assesses possibilities; Sense-making assesses inputs; Critique assesses candidates. The name carries no identity-information specific to THIS discipline."
- **P-15 (D9 decidability):** "If a user picked assess, they'd be choosing the least informative name. The recommendation should signal this."

**Defense**

- **D-14 (against P-14):** Plain language; broad applicability.

**Collision**

P-14 is hard to overcome. "Assess" is too generic to encode discipline-identity at the name level. Defense is weak — "plain language" is acknowledged but doesn't address the genericity problem.

**Verdict: REFINE-DOMINATED** — viable in absolute terms but dominated by vet and weigh, which carry more identity-information at the same daily-language tier. Not recommended even as an alternative; would only fit if the user explicitly preferred neutrality over precision.

---

### Candidate 6: `sift`

**Prosecution**

- **P-16 (D1 operation-fit):** "Sift captures contraction (one aspect) but misses adversarial structure AND verdict-rendering. The agricultural sieve metaphor is more passive than adjudication."
- **P-17 (D4 intelligibility):** "'Sift the candidates' is intuitive but the verdict-and-reasoning aspect doesn't carry through the metaphor."

**Defense**

- **D-16 (against P-16):** Contraction is real and the spec calls itself 'the contraction force.' Sift names this honestly.
- **D-17 (against P-17):** Same as vet/weigh/assess; partial-fit on operation, compensated by intelligibility.

**Collision**

Sift has TWO PARTIAL ratings (D1 AND D4), making it strictly weaker than vet (1 PARTIAL) and weigh (1 PARTIAL). Innovation correctly placed it tertiary.

**Verdict: REFINE-DOMINATED** by vet and weigh. Not recommended as alternative.

---

### Multi-axis prosecution checks (across the response packet itself)

**User-perspective objection on response format:** "The user said 'what should we rename td-critique to?' — they asked for a single name. Why is the inquiry returning a ranked list of 3?"

Defense: The decision involves a real tradeoff (operation-fit vs daily-language vs migration cost). Returning a single name would impose the inquiry's weighting on the user. Returning a ranked list with conditional reasoning ("right pick when ...") respects the user's judgment. AND the list is clearly labeled with a PRIMARY recommendation — the user who wants single-pick can pick the primary (adjudicate) without further deliberation; the user who wants to weigh trade-offs gets the alternatives.

**Verdict on response format:** SURVIVE. Ranked top-3 with explicit primary + alternatives is the right format.

**Spec-gap probe:** "Does the rename require updating files we haven't enumerated? Hidden references?"

Innovation's migration plan tiers files: Tier 1 (folder + registry), Tier 2 (5 runtime specs), Tier 3 (~10-15 docs/), Tier 4 (frozen artifacts). The 266-file grep count is bounded by these tiers; ~230+ are Tier 4 (frozen). Hidden references that aren't in these tiers? — possible but bounded. The user's broader README files (`README.md`, `README2.md`) at project root are NOT explicitly listed; they may or may not reference `td-critique`. Quick check warranted: Tier 2-or-3 should include project README files if they mention the discipline.

**Mini-spec-gap finding:** Add project README files (`README.md`, `README2.md`) to the Tier 3 list if they reference `td-critique`. Otherwise no hidden references identified.

---

## Phase 3 — Verdicts (Summary Table)

| Candidate | Verdict | Position | Constructive output |
|---|---|---|---|
| **adjudicate** | **SURVIVE-PRIMARY** | Viable region center | Recommended primary; carry forward to finding |
| **critique** (no prefix) | **SURVIVE-AS-ALTERNATIVE** | Boundary (D3 FAIL but D6 PASS) | Right pick if user weights migration cost > operation-fit; conditional |
| **vet** | **SURVIVE-AS-ALTERNATIVE** | Boundary (D1 PARTIAL) | Right pick if user weights daily-language > operation-precision; conditional |
| **weigh** | REFINE-HONORABLE-MENTION | Boundary (D1 PARTIAL) | Similar value to vet; less-formal variant of adjudicate; user-optional |
| **assess** | REFINE-DOMINATED | Boundary, dominated | Not recommended; vet/weigh dominate at same tier |
| **sift** | REFINE-DOMINATED | Boundary, dominated by vet+weigh | Not recommended |

### Constructive outputs for the finding

- **Recommended primary:** adjudicate
- **Alt-1 (daily-language pick):** vet — for the user weighting D7 over D1
- **Alt-2 (status-quo / min-migration pick):** critique-no-prefix — for the user weighting D6 over D1
- **Honorable mention:** weigh — less-formal variant of adjudicate
- **User-decision question:** explicit in finding; primary is recommended but alternatives are valid under different weightings

### Re-ranking note

Critique's ranking matches Innovation's. The 4-mechanism convergence on adjudicate (Domain Transfer + Combination + Lens Shifting + Inversion) is structurally validated by adversarial testing. No re-ranking needed.

### Migration plan addition

Add to Tier 3: `README.md` and `README2.md` at project root, IF they reference `td-critique`. Quick check needed before executing the migration plan.

---

## Phase 3.5 — Assembly Check

The naming choice is singular — the user picks one. Standard assembly (combining multiple survivors into an emergent architecture) doesn't apply.

But the RECOMMENDATION PACKET itself is an assembly:
- adjudicate (primary) + critique (status-quo alt) + vet (daily-language alt) covers three distinct user priority weightings.
- The packet's emergent property: it serves as both a recommendation AND a decision template — if the user later wants to evaluate a different candidate, the criteria + scoring structure transfers.

**Packet assembly verdict:** SURVIVE — provides decidability across three plausible user priority weightings.

---

## Phase 4 — Coverage + Convergence

### Coverage

**Per-candidate:** All 6 finalists evaluated against all 9 dimensions. ✓
**Per-prosecution-axis:** 4 axes applied (dimension-level / specific-failure-case / spec-gap / user-perspective). 17 prosecution lines total across candidates. ✓
**Per-solution-space:** Viable region (adjudicate) + boundary region (vet, weigh, critique, assess, sift) + dead region (pre-filtered) + unexplored region (not-likely-productive). ✓

### Convergence

- **Clean SURVIVE-as-primary exists:** adjudicate, with no critical-dimension caveat. ✓
- **Landscape stable:** No new regions emerged from assembly check; no new candidates surfaced. ✓
- **No unexplored region likely to contain better candidate:** Coverage is sufficient; further dimensions unlikely to surface a new structurally-better candidate. ✓
- **4-mechanism convergence on adjudicate** (Domain Transfer + Combination + Lens Shifting + Inversion all point to it; Critique's adversarial test confirms). ✓

All convergence criteria met.

### Failure-Mode Self-Check

| Mode | Status |
|---|---|
| 1. Wrong Dimensions | ✗ avoided — dimensions extracted from sensemaking commits + Innovation criteria + project-specific risks |
| 2. Rubber-stamping | ✗ avoided — 17 prosecution lines; multi-axis depth |
| 3. Nitpicking | ✗ avoided — defense applied per candidate; severity-weighted |
| 4. Dimension Blindness | ✗ avoided — project-specific risk dimensions (D7-D9) added |
| 5. False Convergence | ✗ avoided — clean SURVIVE; 4-mechanism convergence empirically validated |
| 6. Evaluation Drift | ✗ avoided — single iteration; dimensions fixed in Phase 0 |
| 7. Self-Reference Collapse | ✗ avoided — external grounding via spec NOT-list + sibling pattern + legal etymology + user-perspective objection |

---

## Signal

**TERMINATE with ranked survivors.**

**Primary survivor:** **adjudicate** — viable region center; all dimensions PASS or PARTIAL-with-compensation. The 4-mechanism convergence (Innovation) + 4-axis adversarial testing (Critique) jointly validate.

**Alternative survivors (conditional):**
- **critique-no-prefix** — survives as the migration-cost-dominant pick
- **vet** — survives as the daily-language-pick

**Honorable mention:** weigh.

**Killed-by-domination:** assess, sift — viable but strictly dominated; not recommended.

### Convergence Telemetry

- Dimension coverage: 9/9
- Adversarial strength: STRONG (17 prosecution lines; multi-axis depth)
- Landscape stability: STABLE (no new regions in assembly check)
- Clean SURVIVE: YES (adjudicate, no critical caveat)
- Failure modes observed: NONE
- **Overall: PROCEED**

### Constructive Outputs

To finding's Next Actions:
- Primary recommendation: adjudicate
- Conditional alternatives: vet (daily-language pick), critique-no-prefix (migration-cost pick)
- Honorable mention: weigh
- Pre-migration check: scan `README.md` + `README2.md` at project root for `td-critique` references; add to Tier 3 list if found

To finding's Open Questions:
- User adjudication: which of the top-3 (or honorable mention, or other) does the user commit to?
- Future-vulnerability: if Claude Code introduces a discipline-naming convention or registration mechanism, re-evaluate.

To finding's Reasoning:
- The four killed/dominated candidates (assess, sift, plus the pre-filtered evaluate/validate/verify/review/judge) are kept in Reasoning with their kill rationales for audit trail.
