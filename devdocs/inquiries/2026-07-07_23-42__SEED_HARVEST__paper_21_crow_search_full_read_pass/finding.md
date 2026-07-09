---
status: active
model: claude-fable-5
effort: unknown
---
# Finding: paper 21, the full-read pass — baseline confirmed, p21-S1 enriched

## Question

"Read `devdocs/paper_seed/21.md` fully and use `cognitive_harness/protocols/seed_harvester.md` with it." The baseline harvest (`devdocs/inquiries/2026-07-07_20-39__SEED_HARVEST__paper_21_crow_search_algorithm/finding.md`, hours earlier) had read the paper's method in full but deliberately left the six engineering-benchmark sections (~lines 400–1040, roughly 60% of the file) scanned-but-shallow, with a flag naming the skip. This pass completes the read and re-runs the protocol against the full text — a **delta pass**: is the baseline's yield (one nascent seed, p21-S1; ladder confirming-plus + mirror) confirmed, extended, or corrected?

## Finding Summary

- **The delta verdict: CONFIRMED + ENRICHED.** The full read (the paper is now covered end to end across the two passes) produced **no new claims, no verdict changes, and no new seeds** — and **one evidence-grade find** that enriches the existing seed's record.
- **The find: the AP=0 ablation.** The paper doesn't just *claim* its randomization parameter controls diversification — it *ablates* it: with AP = 0 (randomization removed entirely), performance collapses by orders of magnitude (Table 18: sphere best 125.28 at AP=0 vs ~2.90×10⁻¹⁶ at AP=0.05). This upgrades p21-S1's core premise from design-intent to **demonstrated load-bearing-ness** — and it was missed by the baseline for a precise, instructive reason: **the sentence straddled the read boundary** (its head at :965-970 sat inside the unread gap; the baseline had seen only its tail at :1056-1057).
- **The enrichment applied, edit-in-place:** p21-S1's source-support (in the baseline finding's `## Seeds` and the global index) gains the ablation line — with a precision bracket the gate insisted on (the PDF extraction drops exponent minus signs; 10⁻¹⁶ is reconstructed from context) and a provenance pointer to this pass. **Grade and trigger unchanged:** the ablation strengthens the lever's credibility *in CSA's domain*; the nascent cap rests on *our* decision-side (today's human-steered pipeline), which the full read produced no evidence against. No p21-S2, no new index entry — one germ, better evidence.
- **The read-depth policy, evidence-based:** the shallow scan missed no seeds and no verdicts — *and* demonstrably missed one evidence-grade line. Both halves are true, so the policy lands in the middle: **read sources fully by default; flagged-shallow is permitted when the skip is named** (the baseline's flag is exactly what made this pass cheap and targeted) **with straddle-awareness** (never cut inside a section — sentences cross line boundaries). Routed as a one-line protocol touch, the user's call.
- **The one probe was killed honestly.** The ablation's own crossing ("maybe we should ablation-test our own guards") folded at the novelty door: the harness already owns the pattern in specification — the innovate discipline's evaluation gate is literally a baseline-vs-experimental guard-ablation design. The honest residue, recorded as a remark: the pattern is *specified but has never yet been executed*.
- **Protocol acceptance n=2: clean.** The composition held again; the delta-framing and the completing-read pattern (read the flagged-shallow remainder against a baseline) are reusable moves; the gate again did visible work (one kill with quoted ownership evidence; one real verification catch — the exponent-sign extraction hazard).

## Finding

### What the completing read contained

The six benchmark sections are what the baseline predicted: application detail — objective functions, constraints, and comparison tables for the three-bar truss, pressure vessel, tension/compression spring, welded beam, gear train, and Belleville spring problems. Their texture *confirms* already-recorded claims in detail: one fixed two-parameter setting (fl=2, AP=0.1) serves all six problems with "no attempt… to optimize the parameter setting" (the parsimony claim, in practice); the results are honestly competitive rather than dominant (the pressure vessel is won by HPSO, (μ+λ)-ES and TLBO; ABC takes the gear-train mean; PSO takes the Griewank mean); the added §5.2 benchmark study is methodologically fair (equal function-evaluations) and shows CSA also runs faster. One absence noted: the paper never states how its discrete variables are handled (the gear train's integers come out exact with no described mechanism) — a method under-specification with nothing project-relevant to cross.

The exception — the one thing that was *not* mere texture — is the parameter study's ablation sentence: *"AP = 0 leads to weak performance of CSA since the diversification ability of the algorithm has been eliminated."* Its head sat at :965-970, inside the unread gap; the baseline had read the AP-tuning tables and the sentence's tail without registering that an *ablation* — the strongest evidence-form for a mechanism's necessity — had been run. Zero randomization doesn't just underperform; it collapses by orders of magnitude. Since p21-S1's whole premise is that CSA's escape-from-lock is load-bearing on randomness, this line belongs in its record.

### Why enrich without re-grading

The seed's nascent grade was set by a prosecution that won at the baseline's gate: in today's human-steered pipeline, no decision clearly turns on a stochastic selection lever — the human *is* the diversification mechanism. The ablation says nothing about that; it says the lever works *in CSA's numeric domain*. Source-side evidence strengthened, decision-side evidence unchanged → the record gets better support, the grade and the maturation-trigger stay. (The practical gain: when the trigger fires and a development dive picks this seed up, its record now carries empirical support, not just design rationale.)

### The gate's work this pass

Two things worth recording. First, the one candidate the delta admitted ("ablation-test our own guards and mechanisms") was generated honestly and killed honestly — the innovate discipline's evaluation gate already specifies exactly that comparison shape (a spec variant with the guard "hypothetically removed" vs present, matched pairs, marginal-value scoring); generalizing an owned pattern's scope routes no new development-action. The residue is a fair observation: those ablation-shaped evaluations are *written but have never been run* — parked with the improvement-observations, not dressed up as a seed. Second, verification caught a real hazard: the PDF text-extraction drops exponent minus signs ("2.90  1016"), so the enrichment's numbers carry an explicit reconstruction note rather than silent confidence — the source-support condition working at the digit level.

## Seeds

*(Per the seed_harvester protocol §7–8 — the delta form.)*

**No new seed records this pass.** One enrichment applied to an existing record:

- **p21-S1** (the stochastic selection lever, NASCENT — recorded by the baseline dive): `source-support` **gains** → *"ablation evidence: with AP = 0 (randomization removed) CSA's performance collapses by orders of magnitude (Table 18: sphere best 125.28 at AP = 0 vs 2.90×10⁻¹⁶ at AP = 0.05 — exponents reconstructed: the text extraction drops minus signs, context fixes 10⁻¹⁶; 'AP = 0 leads to weak performance of CSA since the diversification ability of the algorithm has been eliminated,' :965-970 + :1056-1057) — the diversification mechanism is demonstrated load-bearing, not just designed-in. (enriched by the full-read pass, the 23-42 dive)"* — applied edit-in-place to the baseline finding's `## Seeds` and the global index; grade/trigger unchanged; no new index entry.

**Gate telemetry:** candidates generated 1 · gated-in 0 · killed 1 (novelty door — owned practice, with quoted spec evidence) · enrichments verified-and-applied 1 · strongest-failed: the killed probe itself. Self-assessment: **PROCEED** (the crossing ran, minimal by honest design; the gate applied both ways; the record step lands the enrichment in both surfaces).

## Next Actions

### COULD
- **What:** The one-line read-depth addition to the protocol's §6 Surfacing row (read fully by default; flagged-shallow only with named skips; never cut inside a section — the straddle hazard).
  - **Who:** the user / a light protocol edit. **Gate:** before the next harvest dive. **Why:** the run's documented lesson, one line.
- **What:** Paper 22 under the protocol (n=3), inheriting the read-fully default.
  - **Who:** the next harvest dive. **Gate:** when the harvest resumes. **Why:** the acceptance series' third point.

### DEFERRED
- **What:** Actually execute one of the specified-but-never-run ablation evaluations (e.g. the innovate spec's evaluation-gate comparison).
  - **Gate:** the improvement-observations habit — when method-health work is next scheduled.
  - **Why (if revived):** the paper demonstrates how much a single ablation run reveals; ours exist only on paper.

## Reasoning

The pass's honesty pivoted on refusing two easy inflations: a delta-yield (the leading and actual outcome was zero new seeds — the one probe was killed on quoted ownership evidence, and the minimum-mechanism generation mode was chosen deliberately so a 7-mechanism sweep wouldn't manufacture candidates a single evidence item can't support) and a policy over-swing (neither "scanning is unsafe, mandate full always" nor "the scan cost nothing" — the evidence supports the middle: fully-by-default, flagged-shallow permitted, straddle-aware). The user's "fully" was right in kind — there *was* a miss — and small in consequence this time; both stated. The forecast discipline closed exactly in-band (0 new records, 1 enrichment, ladder untouched).

## Open Questions

### Monitoring
- p21-S1's maturation-trigger (unchanged — streak-recurrence / autonomy), now backed by ablation evidence in its record.
- Paper 22 (n=3): does the clean composition hold a third time under the read-fully default?

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
read devdocs/paper_seed/21.md fully and use cognitive_harness/protocols/seed_harvester.md with it
```

</details>
