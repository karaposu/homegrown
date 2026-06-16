# Structural Critique — coverage_control_and_self_improvement_edges

## User Input

devdocs/inquiries/2026-06-11_00-12__coverage_control_and_self_improvement_edges/_branch.md

**Inputs consumed:** surfacing.md (8 regions), sensemaking.md (SV6 + 5 collapses + 6 Synthesis re-tests), decomposition.md (4 pieces), innovation.md (4 ACTIONABLE + assembly + 3 kills + 3 special-attention items).

---

## Phase 0 — Dimension Construction

| # | Dimension | Weight | Source |
|---|---|---|---|
| D1 | **Un-absorbability** — does each edge truly resist a smarter model, or does the model just-get-better-at it? | CRITICAL | the inquiry's whole purpose + special-attention (a) |
| D2 | **Honesty / no-laundering** — coverage stays bounded (not infinite); self-improvement stays a hope (attemptability real, payoff hoped) | CRITICAL | C3 + C4 + the prior finding's discipline |
| D3 | **Anti-double-count / anti-bloat** — coverage fuses into provenance (not a 7th edge); self-improvement adds one category | HIGH | C2 |
| D4 | **Canon coherence** — slots into the governability spine + algorithm-family + meaningful-traversal + north-star without contradiction | HIGH | the Synthesis re-tests |
| D5 | **Precedent soundness** — the systematic-review/PRISMA analogy is apt, not strained | MED-HIGH | special-attention (b) |
| D6 | **Call-option soundness** — is the substrate REALLY built anyway (zero-marginal-cost), or does self-improvement need extra build? | MED-HIGH | special-attention (c) |

**Frame-premise test (fired on three premises):**
- **Premise (special-attention a): "provable coverage" is un-absorbable.** What-if-wrong: a future agentic model could emit a verifiable trace of its own search (tool-call logs, a recorded scratchpad) — so it CAN prove coverage, breaking the edge. Resolution: this is the sharpest attack and must be answered honestly. A model CAN emit a trace — but (i) the trace is of ITS process, self-defined and self-graded (what counts as "covered"? the model decides — the self-reference trap persists at the criterion level); (ii) the edge isn't "a record exists" but "an EXTERNAL, OPERATOR-DEFINED coverage criterion the search is held to" (explfine's declared territory + the operator's frontier definition) — the operator says what must be covered, the system shows it was, and neither is the model's own say-so. So the edge narrows honestly from "only we can produce a trace" to "the coverage criterion and its verification are operator-owned and external to the model" — which a single model call structurally can't provide (it would have to both define and grade its own exhaustiveness). Routed to the coverage edge.
- **Premise (special-attention c): the substrate is built anyway → self-improvement is a free option.** What-if-wrong: self-improvement may need a DEDICATED apparatus (an eval harness to measure whether a proposed change improves traversal; a safe rollback; a fitness signal) that ISN'T built for provenance/coverage — so it's not zero-marginal-cost. Resolution: partially true — the *recorded substrate* (the corpus, the metacognition theory, explfine) IS built anyway and IS the precondition; but turning it into actual self-improvement needs an improvement-evaluation loop that is EXTRA. So the claim softens from "zero-marginal-cost" to "low-marginal-cost: the expensive precondition (the persistent, theorized, recorded substrate) is built anyway; the incremental apparatus (an improvement-eval loop) is the only added cost." Still a strong call-option (the hard part is free), but not literally zero. Routed to the meta-edge.
- **Premise (special-attention b): the PRISMA/systematic-review precedent is apt.** What-if-wrong: a systematic review covers a FINITE corpus (published papers); thinking space is INFINITE — the analogy breaks at the boundedness. Resolution: the analogy holds at the RIGHT level — PRISMA's value isn't that the literature is finite, it's that the SEARCH STRATEGY is declared and the coverage is defensible (you state your inclusion/exclusion, show what you found and excluded). That maps exactly to explfine's declared-territory + frontier (bounded scope, defensible coverage, NOT infinite completeness). The analogy actually REINFORCES the bounded-coverage honesty (PRISMA covers a declared scope, not "all knowledge"). Apt, with the mapping stated at the search-strategy level. Routed to the precedent.

## Phase 1 — Fitness Landscape

- **Viable region:** operator-owned external coverage criterion; bounded/declared/resumable coverage; provable-not-thorough; self-improvement as attemptability-real/payoff-hoped with the hard-precondition-free framing; PRISMA at the search-strategy level.
- **Dead region:** "infinite coverage"; coverage as a 7th edge (double-count); self-improvement as a claimed/likely edge; "only we can emit a trace" (a model can too); "zero-marginal-cost" as literal.
- **Boundary region:** the provable-coverage edge's narrowing (to operator-owned criterion); the call-option's cost (low not zero); PRISMA's boundedness mapping.
- **Unexplored (named):** whether the improvement-eval loop (the extra self-improvement apparatus) is feasible; the actual cost of systematic coverage at scale.

## Phase 2 + 3 — Adversarial Evaluation + Verdicts

**Burden:** an amendment to a committed finding — reversible (proposals), but it touches the top edge and the relevance verdict; care on D1/D2.

---

### The coverage edge (K1)

**Prosecution:** (a) the emit-a-trace attack (frame-premise a) — a model can produce its own coverage record. (b) Cost: systematic coverage is expensive; is the edge real if it's only worth it sometimes? (c) Does "coverage" still over-promise even bounded (a scoped territory can still be infinite — "all approaches to protein folding" is unbounded)?

**Defense:** (a) adopted — the edge narrows to **operator-owned, external coverage criterion** (the model can emit a trace, but can't be the one who DEFINES and GRADES what counts as covered — that's the self-reference trap at the criterion level; explfine's declared territory + the operator's frontier are external to the model). (b) accepted and turned into the domain rule's second condition (coverage is the edge where it's WORTH the cost — science/safety/audits — not everyday tasks); not a weakness, a scoping. (c) adopted — "scoped territory" means a *declared, operator-bounded* scope with an explicit frontier of what's deliberately not covered; the value is *defensibility of the declared scope*, never completeness of an open domain.

**Verdict: REFINE.** The edge is **operator-owned external coverage criterion + defensible declared scope** (not "only we can emit a trace," not "infinite coverage"); the cost-worth-it scoping is the domain rule's second condition.

### The self-improvement meta-edge (K2)

**Prosecution:** (a) the zero-cost attack (frame-premise c) — self-improvement needs an extra improvement-eval apparatus. (b) Does "attemptability is real and rare" overclaim rarity (other agentic frameworks also have persistent state)? (c) The hope could be presented too optimistically.

**Defense:** (a) adopted — **low-marginal-cost, not zero**: the expensive precondition (the persistent, theorized, recorded substrate) is built anyway; the incremental improvement-eval loop is the only added cost. The call-option holds (the hard part is free) but isn't literally free. (b) sharpened — rarity is relative to STATELESS FLAGSHIPS (the comparison class in the finding), not to all agentic frameworks; the claim is "a stateless model structurally can't; we and other stateful systems can attempt it" — honest about the comparison class. (c) the hope stays load-bearing — "near-zero if it fails" + "this is a hope" kept verbatim.

**Verdict: REFINE.** Low-marginal-cost (not zero); rarity scoped to the stateless-flagship comparison class; the hope verbatim.

### The amendment shape (K3)

**Prosecution:** does fusing coverage into provenance HIDE it (a reader misses the new edge because it's folded into an existing one)? 

**Defense:** the fusion is explicit — the top edge is RENAMED ("auditable, portable, **and exhaustive** provenance") and coverage gets its own named treatment (sampling-vs-surveying, the domain rule) UNDER that edge, so it's visible without being double-counted. The meta-edge gets its own section. Visible, not hidden.

**Verdict: SURVIVE.** The fusion is explicit (the top edge renamed + coverage named under it); anti-bloat held.

### The PRISMA precedent (within K1)

**Prosecution:** the boundedness mismatch (frame-premise b) — systematic review covers finite literature; thinking space is infinite.

**Defense:** adopted — the analogy is mapped at the **search-strategy level** (declared strategy + defensible coverage of a declared scope), which is exactly explfine's claim; PRISMA itself covers a *declared scope*, not all knowledge, so it reinforces the bounded-coverage honesty rather than breaking it.

**Verdict: REFINE.** Map PRISMA at the search-strategy/declared-scope level (it reinforces bounded-coverage, doesn't claim infinity).

### The Synthesis re-tests (D4)

All six re-tested in sensemaking and held; critique spot-checks the two load-bearing ones:
- **Governability spine:** coverage as governability-applied-to-exploration — CONFIRMED, extended (coverage needs control; it's the spine's killer app). ✔
- **The prior "harness loses on per-answer quality":** the point-vs-map rule QUALIFIES it (loses on points, wins on maps) — CONFIRMED, sharpened, not contradicted. ✔

**Verdict: SURVIVE** (the re-tests hold).

### The assembly

**Prosecution:** post-refinement coherence — operator-owned-criterion + low-marginal-cost + PRISMA-at-search-level: consistent? Checked: the operator-owned coverage criterion is the same operator-ownership that runs through governability (the prior finding's third-party-neutral stance); the low-marginal-cost call option fits the substrate-built-anyway logic; PRISMA-bounded reinforces the declared-scope honesty. Consistent.

**Verdict: SURVIVE.** Consolidation note: every refinement this round NARROWED an overclaim to its defensible core (provable→operator-owned-criterion; zero→low marginal cost; coverage→declared-scope; PRISMA→search-strategy-level) — the amendment is honest about exactly how far each edge reaches, which is the prior finding's own discipline applied to its extension.

## Phase 3.5 — Assembly Check

No new emergent candidate. Innovation's four emergents survive, three narrowed (provable-coverage → operator-owned-criterion; the free option → low-marginal-cost; PRISMA → search-strategy-level); the two-edges-connect (self-improve the surveyor) stands.

## Phase 4 — Coverage + Convergence

**Accumulator:**
- Evaluation log: 4 candidates + the PRISMA precedent + the re-tests + the assembly across D1–D6; all three special-attention items adjudicated (provable→operator-owned external criterion; zero→low marginal cost; PRISMA→search-strategy-level).
- Kill record: none new; innovation's three stand (search-engine analogy; drop-bounded-honesty; drop-meta-edge).
- Refinement record: **the coverage edge narrowed to operator-owned external criterion + defensible declared scope** (the round's most important catch — it answers the emit-a-trace attack by moving the edge from "we have a record" to "the coverage criterion is external to and ungameable by the model"); **the call-option softened to low-marginal-cost** (the hard precondition is free, the improvement-eval loop is extra); **PRISMA mapped at the search-strategy level** (reinforces bounded-coverage); **rarity scoped to stateless flagships**. All in-frame.
- Coverage map: viable fully adjudicated; boundary resolved (the narrowing; the cost; PRISMA); dead empty; unexplored named (the improvement-eval loop's feasibility; coverage cost at scale).
- Convergence trend: stable.
- Mechanism-independence: validated — the coverage edge rests on the operator-owned-criterion argument + the PRISMA precedent + the value-curve; the meta-edge on the substrate-built-anyway logic + the stateless-comparison; the emit-a-trace and zero-cost adversaries cut against and were absorbed by narrowing.

**Signal: TERMINATE — ranked survivors:**
1. **The coverage edge, refined** — the top edge sharpened to "auditable, portable, exhaustive provenance"; sampling-vs-surveying (lottery-vs-census); the point-vs-map domain rule (two conditions: open space AND coverage-worth-the-cost); **the un-absorbable core = operator-owned, external coverage criterion** (the model can emit a trace but can't define+grade its own exhaustiveness); defensible declared scope (not infinite); "brute force + engineering" = precision-at-search-level; PRISMA (search-strategy level) as the precedent; Tier-1; go-to-market = map-tasks.
2. **The self-improvement meta-edge, refined** — attemptability (real; rare vs stateless flagships) vs payoff (hoped, verbatim); the **low-marginal-cost call option** (the substrate is built anyway; the improvement-eval loop is the only extra); above the tiers; first target = self-improve the surveyor; bounded downside.
3. **The amendment shape** (SURVIVE) — fuse-and-sharpen (coverage, explicitly named under the renamed top edge) + add-one-category (the meta-edge); anti-bloat held.
4. **The prior-finding edits** — concrete, paste-ready, honest-status-tagged.

## Convergence Telemetry

- Dimension coverage: 6/6; both critical dimensions per candidate
- Adversarial strength: **STRONG** — the emit-a-trace attack (the sharpest possible, since it threatens the un-absorbability the whole inquiry rests on) forced the coverage edge to its true core (operator-owned external criterion, not "we have a record"); the zero-cost claim was softened to low-cost honestly; the PRISMA boundedness mismatch was caught and turned into reinforcement
- Landscape stability: STABLE
- Clean SURVIVE exists: YES (the amendment shape; the assembly)
- Failure modes: none firing — Rubber-Stamping (the inquiry's most exciting claims — "provable coverage," "free option," the PRISMA precedent — were each narrowed); Self-Reference Collapse (the system arguing for its own edge — countered by the operator-owned-criterion move, which explicitly removes the MODEL's self-grading, and by keeping self-improvement a hope); Nitpicking (each refinement guards un-absorbability or honesty); Axis Absence (the emit-a-trace attack caught at the un-absorbability plane the inquiry rests on)

**Overall: PROCEED**

**Next step input (for ITERATION COMPLETE):** the user's two points are answered and slotted honestly — (1) coverage as the top edge's killer app (operator-owned external coverage criterion; sampling-vs-surveying; point-vs-map domain rule; PRISMA precedent; defensible declared scope; brute-force=precision-at-search), and (2) self-improvement as a low-marginal-cost call-option meta-edge above the tiers (attemptability real / payoff hoped) — fuse-and-sharpen + add-one-category, the governability spine intact, every overclaim narrowed to its defensible core.
