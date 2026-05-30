## User Input

`devdocs/inquiries/2026-05-29_21-01__routelister_output_and_cross_run_behavior/_branch.md` (problem context: sensemaking.md [verdicts + cross-run model + DAG]; candidates: the 5 verdicts + the designed model + I1 + foils F1–F6 in innovation.md; priors + routeman §3.5/§5.8 in context). Adjudicate the verdicts, the cross-run model (esp. the inter-concept-graph boundary), the DAG, minimalism, and the self-reference. Process-layer.

---

# Structural Critique — Routelister Output + Cross-Run Behavior

**Stakes: HIGH** (feeds the spec + the design roadmap; designs a new persisted mechanism) → **burden = guilty-until-proven-innocent**. Two weighted risks: the **inter-concept-graph boundary** (does the cross-run index violate routelister's NOT-list?) and **self-reference** (the project designing its own discipline).

## Phase 0 — Dimension Construction (extracted from Sensemaking)

| # | Dimension | What it asks | Weight |
|---|---|---|---|
| D1 | **Verdict correctness** | Are the 5 per-question verdicts right (esp. OT5 not-defined, OT4 idempotent-at-fixpoint, OT3 defined)? | **CRITICAL** |
| D2 | **Cross-run model soundness + the NOT-list boundary** *(weighted risk)* | Is the index+3-ops model sound, and does it stay within-concept (NOT an inter-concept dependency graph — `18-17`/§1.3)? | **CRITICAL** |
| D3 | **Principle soundness** | idempotency-at-fixpoint + enrich-not-dump correct? | HIGH |
| D4 | **Routeman re-derivation** | "routeman doesn't define it; re-derive (same-map→cross-target, strip REVISIT)" — right? | HIGH |
| D5 | **DAG correctness** | Is the dependency order forced (individuation first; OT5 capstone)? | HIGH |
| D6 | **Minimalism / scope** *(project-specific risk)* | Is the model the lightest thing that composes the axes, or scope-creep toward a state engine? | HIGH |
| D7 | **Self-reference integrity** *(weighted risk)* | Designing routelister with project concepts — externally grounded; does the verdict gate (not inflate) the work? | **CRITICAL** |

## Phase 1 — Fitness Landscape

- **Viable:** correct verdicts + a sound, within-concept, minimal cross-run model + sound principles + correct re-derivation + a forced DAG + externally-grounded self-ref.
- **Dead:** (a) a verdict wrong [D1]; (b) the index is an inter-concept dependency graph [D2 — the NOT-list violation]; (c) idempotency/enrich-not-dump wrong [D3]; (d) routeman actually defines it [D4]; (e) the DAG order is arbitrary [D5]; (f) scope-creep into a state engine [D6]; (g) motivated/inflated self-ref [D7].
- **Boundary:** right but the index boundary-guard or the minimalism constraint left implicit → REFINE.

## Phase 2 — Adversarial Evaluation

### Candidate A — The answer-set (verdicts + cross-run model + DAG) (principal)

**Prosecution (strongest case against):**
- *P-a (D2 — the boundary, the sharpest):* "The cross-run index is the camel's nose for the forbidden inter-concept dependency graph. A root run that reads depth runs and 'integrates' them is one step from encoding how concepts relate — exactly §1.3's excluded 'dependency graphs across routes.' You've smuggled in what routelister's identity forbids."
- *P-b (D6 — minimalism):* "The model — index + 3 operations + discovery + registry — is a heavyweight state engine bolted onto a clean enumerator. You're rebuilding routeman's loop machinery under a new name."
- *P-c (D1 — the OT5 verdict):* "'OT5 not defined' is too harsh — the user described the behavior clearly; that IS a definition. You're manufacturing a gap to justify more inquiries."
- *P-d (D7 — self-ref):* "The project designing its own discipline; the 'cumulative endgoal' reframe is motivated — it inflates a cross-run feature into 'the core value' to justify the work."
- *P-e (D5 — DAG):* "Why must individuation be first? Define the cross-run behavior now, figure out individuation later."

**Defense (strongest case for):**
- *D-a (vs P-a — critical boundary defense):* the index maps each concept-identity → its OWN depth run (plus within-identity signals like its own README-vs-impl divergence). That is the within-concept identity↔manifestation containment routelister ALREADY permits (`11-43`), extended to identity↔its-own-depth-run. It does NOT encode inter-concept relations ("A depends on B"). The forbidden object (§1.3/`18-17`) is a graph of edges ACROSS concepts; the index is a per-identity lookup (a table), not a relationship graph. With the explicit guard — *the index stores identity→own-depth + within-identity signals only, never inter-concept edges* — the model stays inside routelister's identity. (The integrate step attaches a signal about A *to A*, never a link from A to B.)
- *D-b (vs P-b — minimalism):* the model is minimal — a lookup index + read/integrate/persist (which routeman already has as read-prior/recalibrate/add-new) + two guard-principles. It explicitly STRIPS the loop machinery (REVISIT, cross-cycle, branches/threads — per F4/`18-17`). What remains is the irreducible minimum to make depth runs feed breadth runs (the user's stated goal): you cannot do less and still have OT5. Stateless (F2) forfeits the goal; a DB/graph over-builds; index+3-ops+2-guards is the middle.
- *D-c (vs P-c — the OT5 verdict):* the user described the *requirement* (intent) clearly; a discipline behavior is *defined* when its *mechanism* is specified/derivable for the spec. OT5's mechanism depends on individuation (undefined), a persisted schema (un-authored), and a discovery mechanism (un-specified). Distinguishing "the user knows what they want" from "the discipline defines how" is the honest status, not a manufactured gap — and the verdict's payoff is a *design + a roadmap*, not "more inquiries for their own sake."
- *D-d (vs P-d — self-ref):* the "cumulative endgoal" reframe is grounded in the project's *stated* navigation endgoal (routelister "fits the navigation endgoal," `11-43`; the end-goal loop architecture), not invented. And the verdict *gates* the work (OT5 can't be next; do individuation first) — the opposite of inflation/make-work. Anchored on routeman's actual machinery + `11-43` + `18-17`.
- *D-e (vs P-e — DAG):* "integrate" REQUIRES matching the root's enumerated A to the prior A-run — and that matching IS individuation. So individuation is *logically* prior to the integrate operation, not arbitrarily first. You can state the principles (idempotency, enrich-not-dump) now; the mechanism waits on individuation.

**Collision:**
- P-a × D-a → **defense wins, REFINE required.** The index is within-concept (identity→own-depth), not an inter-concept graph — but the **boundary guard must be explicit in the design** (index stores identity→own-depth + within-identity signals only; never inter-concept edges). **D2: PASS as refined** (the sharpest risk, neutralized by the explicit guard).
- P-b × D-b → **defense wins, REFINE required.** Minimal, with loop-machinery stripped — but the **minimalism constraint must be stated** (a lookup index + 3 ops + 2 guards; no DB, no graph, no loop-control). **D6: PASS as refined.**
- P-c × D-c → **defense wins.** Requirement-clear ≠ mechanism-defined; the gap is honest. **D1 (OT5 row): PASS.**
- P-d × D-d → **defense wins.** Grounded in the stated endgoal; the verdict gates (doesn't inflate). **D7: PASS.**
- P-e × D-e → **defense wins.** Individuation is logically prior to integrate. **D5: PASS.**
- **D1 (other rows):** OT3 defined (grain), OT1/OT2 partial, OT4 idempotent-at-fixpoint — all hold. **PASS.**
- **D3:** idempotency-at-fixpoint (on unchanged input) + enrich-not-dump — hold (F3 refined them correctly). **PASS.**
- **D4:** same-map ≠ cross-target + REVISIT-built → re-derive. **PASS.**

**Position:** **VIABLE region.** Passes all CRITICAL dims (D1 verdicts, D2 model+boundary, D7 self-ref) under the high-stakes burden, plus D3/D4/D5/D6. Two REFINEs fold in: (i) the **index boundary guard** (within-concept only; never an inter-concept graph — neutralizing the NOT-list risk); (ii) the **minimalism constraint** (lightest-composing mechanism; no DB/graph/loop-control).

### Candidates B — The foils

| Foil | Verdict | Why |
|---|---|---|
| **F1 (verdicts wrong)** | **KILL** | OT3 grain-defined; OT5 neither chain nor routeman defines. |
| **F2 (stateless / no model)** | **KILL** | forfeits the cumulative endgoal + regresses below routeman. |
| **F3 (idempotency wrong)** | **REFINE** | idempotency is on unchanged input; accumulation happens via new input, bounded by the fixpoint. |
| **F4 (routeman covers it)** | **KILL** | same-map ≠ cross-target; REVISIT-built (doesn't transfer). |
| **F5 (build OT5 first)** | **KILL** | integrate requires individuation → gated; DAG order forced. |
| **F6 (over-engineering)** | **REFINE→minimal** | keep a lookup index + 3 ops + 2 guards; no DB/graph/loop-control. **The minimalism guard.** |
| **P-a boundary (new, from prosecution)** | **REFINE→within-concept guard** | index = identity→own-depth + within-identity signals; never inter-concept edges. **The NOT-list guard.** |

## Phase 3 — Verdicts

- **Candidate A (the answer-set): SURVIVE** with two REFINEs (the within-concept index boundary guard; the minimalism constraint). Passes all CRITICAL dims under the high-stakes, boundary-and-self-ref-weighted burden.
- **F1, F2, F4, F5: KILL.** **F3, F6: REFINE** (folded in). The prosecution's boundary attack (P-a) → the within-concept guard (the most valuable REFINE).

## Phase 3.5 — Assembly Check

The SURVIVE answer + the within-concept index guard + the minimalism constraint assemble into a **spec-ready design + roadmap**: the 5 verdicts (direct answers) + the minimal, within-concept cross-run memory model (the user's OT5, designed) + the two governing principles + the individuation-first DAG. **Emergent property:** the assembly shows routelister's cumulative value (depth feeding breadth across runs) is unlocked by ONE upstream item — **identity-individuation** — which both the cross-run model (P2) and the concept-listing HOW (OT1) depend on. So the single highest-leverage next inquiry is individuation; everything cumulative is gated on it. The assembly is VIABLE; the two REFINEs add guards, not failure surface.

## Phase 4 — Coverage + Convergence

- **Coverage:** all seven dimensions evaluated; the foils + the new boundary attack map the dead regions; no large unexplored region.
- **Convergence:** a clean **SURVIVE** with no critical-dimension caveat (the REFINEs are guards, not verdict-changes); landscape stable.
- **Signal: TERMINATE** — coverage sufficient + convergence reached + clean SURVIVE. The questions are answered.

---

## Inherited Commitments Re-test (Synthesis-Trigger obligation)

| Prior commitment | Re-test result | Evidence |
|---|---|---|
| `11-43`: two axes; breadth-compactness; identity-individuation = open frontier | **RE-TESTED → compactness = the enrich-not-dump guard; individuation = the DAG linchpin (CONFIRMED + ELEVATED)** | enrich-not-dump preserves compactness; individuation gates both OT1's HOW and OT5's matching → elevated from "open detail" to "gate on routelister's cumulative value." |
| `12-44`: consolidated definition; individuation the one open component | **RE-TESTED → individuation still open, now the #1 handle-next** | the DAG places it first; the cross-run model can't be built without it. |
| `18-17`: route-type; per-component loop-bound test; NOT-list excludes inter-concept relational graphs | **RE-TESTED → the loop-bound test applied to re-invocation machinery (routeman doesn't transfer wholesale); the NOT-list is the index boundary guard (D2)** | re-invocation is REVISIT-built → re-derive; the index must stay within-concept (identity→own-depth), never inter-concept edges. |
| `14-58`: root = breadth; Shape-H optional depth-enrichment | **RE-TESTED → the cross-run model is the cross-run analog of Shape-H** | a prior depth run enriches a future breadth route (vs Shape-H's inline depth-enrichment). |
| routeman `§3.5/§3.6/§5.8`: re-invocation + idempotency + `_route.md` state | **RE-TESTED → same-map partial template; re-derived** | generalized to a cross-target index; stripped of REVISIT/loop-control; idempotency-within-invocation extended to idempotency-at-fixpoint-across-invocations. |

None parroted; routeman's machinery is **re-derived (not carried)** and the chain's individuation-frontier is **elevated** (not just inherited). **D7 (self-reference): PASS** — the verdict gates the work and is anchored on external artifacts (routeman's actual §-text, the NOT-list, the stated endgoal).

## Convergence Telemetry

- **Dimension coverage:** 7 dimensions (default-derived + project-specific D2/D6/D7 weighted); all applied.
- **Adversarial strength:** **STRONG** — prosecution constructed the inter-concept-graph boundary attack (P-a, the sharpest), the over-engineering attack (P-b), the "gap is manufactured" attack (P-c), the motivated-self-ref attack (P-d), and the DAG-order attack (P-e); the boundary attack forced the load-bearing within-concept guard.
- **Landscape stability:** STABLE (the REFINEs add guards; no verdict-region change).
- **Clean SURVIVE exists:** YES.
- **Failure modes observed:** **none.** Wrong-Dimensions guarded (default + D2/D6/D7 weighted); Rubber-stamping guarded (4 KILLs + a load-bearing boundary attack); Nitpicking guarded (defense + 2-3 REFINEs, clean SURVIVE); Dimension-Blindness guarded (the inter-concept-graph boundary explicitly added as D2); False-Convergence guarded (clean SURVIVE); **Self-Reference-Collapse guarded** — external anchors (routeman's actual §3.5/§5.8 + the §1.3/`18-17` NOT-list + `11-43` + the stated navigation endgoal), and the verdict *gates* the work (individuation-first) rather than inflating it.
- **Overall: PROCEED / TERMINATE** — the answer-set SURVIVES; the 5 questions are answered and the cross-run model is designed (within guards).

### Signal to the loop
**TERMINATE.** Ranked survivor: the answer-set — **OT3 defined (grain); OT1/OT2 partial (meaning settled, mechanism/schema open); OT4 idempotent-at-fixpoint; OT5 NOT defined but sound + the capstone**; unified by a **minimal, within-concept cross-run memory model** (a workspace index of identity→own-depth + read-prior/integrate/persist), governed by **idempotency-at-fixpoint + enrich-not-dump**, with routeman's re-invocation a **same-map, REVISIT-built partial template to re-derive**; sequenced by the **individuation → enumeration/scoping → output-schema → cross-run-model DAG** (individuation the linchpin and the single highest-leverage next inquiry). Ready for CONCLUDE.
