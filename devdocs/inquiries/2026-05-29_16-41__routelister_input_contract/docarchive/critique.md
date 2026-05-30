## User Input

`devdocs/inquiries/2026-05-29_16-41__routelister_input_contract/_branch.md` (problem context: sensemaking.md [the 3-axis verdict]; candidates: the verdict + foils F1–F5 in innovation.md; priors + workspace in context). Adjudicate routelister's input-contract verdict: flip-soundness, three-clause integrity, the meaning/process seam, the 15-48 re-test; render the verdict. Meaning-layer.

---

# Structural Critique — Routelister's Input-Contract Verdict

**Stakes: HIGH** (the verdict feeds routelister's spec + is inherited by downstream re-runs; hard to reverse once it propagates) → **burden of proof = guilty-until-proven-innocent**; the defense must demonstrate clear viability on every critical dimension.

## Phase 0 — Dimension Construction (extracted from Sensemaking)

| # | Dimension | What it asks | Extracted from | Weight |
|---|---|---|---|---|
| D1 | **Flip-soundness (Correctness)** | Is the no-flip verdict correct — is state→territory genuinely a generalization, not an overturn? | SV6 K2/K7; F4 | **CRITICAL** |
| D2 | **No-loss preservation** | Does the generalization preserve routeman's old "completed-cycle state" input (no silent drop)? | SV6 K2; Amb.1 | **CRITICAL** |
| D3 | **Identity-coherence** | Does the contract fit routelister's settled identity (intrinsic, perceive-by-enumerate, domain-agnostic)? | 12-44; routeman §1.3 NOT-list | **CRITICAL** |
| D4 | **Three-clause integrity (non-collapse)** | Is Axis-3 genuinely a distinct clause, or does it collapse into Axis-1? | F5; SV6 S1 | HIGH |
| D5 | **Completeness (OT-coverage)** | Does the verdict answer OT1 + OT2 + OT3(a,b,c)? | `_branch.md` observation targets | HIGH |
| D6 | **Non-sycophancy / re-test rigor** *(project-specific risk)* | Did the verdict actually RE-TEST 15-48's commitments, not parrot/affirm them? | Synthesis Trigger; Status-Quo-Bias guard | HIGH |
| D7 | **Layer-fidelity (meaning/process seam)** *(project-specific risk)* | Does it stay meaning-layer and correctly defer grain-SELECTION to process? | Layer Commitment; F3 | MED-HIGH |

**Project-specific risk dimension check:** candidate involves project artifacts (routelister's contract, the 15-48 finding) → D6 (non-sycophancy/re-test) + D7 (layer-fidelity) + D2 (no-loss) are the mechanism-oriented risk axes added beyond the content defaults. ✓ (guards Dimension-Blindness.)

## Phase 1 — Fitness Landscape

- **Viable region:** flip-sound (no-loss generalization) + identity-coherent + complete on OTs + Axis-3 stated as a *distinct-but-dependent* clause + meaning-layer with grain-SELECTION deferred.
- **Dead region:** (a) falsely claims a flip when it's a generalization [fails D1]; OR (b) silently drops routeman's old input [fails D2]; OR (c) re-imports folder-dependence [fails D3]; OR (d) over-claims three *independent* axes [fails D4]; OR (e) parrots 15-48 without re-test [fails D6].
- **Boundary region:** flip-sound + identity-coherent but imprecise on Axis-3's status (peer vs dependent) or on the meaning/process seam → REFINE territory.
- **Unexplored:** none material — the four problem axes (necessity / source / grain / relationship-to-prior) each have candidate variants (verdict + foils).

## Phase 2 — Adversarial Evaluation

### Candidate A — The 3-axis input-contract verdict (principal)

**Prosecution (strongest case against):**
- *P-a (flip charge, user-perspective — the F4 line):* "This is a flip dressed as a refinement. routeman consumed a *completed-cycle state* — a specific structured loop-output; routelister consumes *any territory*. routeman could only run post-cycle; routelister runs anywhere. That's a behavior change → an overturn, and 'generalization, no loss' is sleight-of-hand."
- *P-b (specific failure-case, D2):* "Exhibit the old input surviving. If routelister runs on raw text, where is the 'completed-cycle state' special case actually exercised? If never, 'no loss' is vacuous."
- *P-c (specification-gap probe, D7):* "Grain-KIND is meaning but grain-SELECTION is process-deferred — yet without the selection mechanism you can't know which input-KIND is required. So Axis-3 leaks process into the meaning-layer contract; the contract is operationally incomplete."
- *P-d (three-clause, D4):* "You concede Axis-3 is a 'dependent refinement' of Axis-1. A dependent refinement is a sub-clause, not a third axis. 'Three axes' over-structures the contract — it's really 15-48's two."

**Defense (strongest case for):**
- *D-a:* the no-flip verdict rests on a **set-theoretic fact**, not rhetoric: a completed cycle's artifacts ARE a bounded concept-bearing scope = a territory, so `completed-cycle-state ⊂ territory`. routeman's input is a *proper subset* of routelister's. A generalization that *contains* the prior case is the definition of refine-not-overturn. **External calibration:** contrast 19-00, which *negated* a verdict (wrong-tool → right-tool); here NO 15-48 claim is negated — each is widened. That contrast is the external yardstick for "what a real flip looks like."
- *D-b:* the old case IS exercised whenever routelister runs on a concluded inquiry's artifacts (a legitimate territory among many). "No loss" = "routeman's use case stays expressible" — which it does; not vacuous.
- *D-c:* a typed signature can state "this overload requires type T" (meaning) without stating "the dispatcher selects the overload by inspecting the call site" (mechanism). The contract states WHAT each axis requires; the runner states HOW the axis is chosen. The Layer Commitment scoped process out by design → principled deferral, not a leak.
- *D-d:* the claim is NOT three independent peers — Innovation's F5 already refined it to "**three clauses, Axis-3 dependent on Axis-1**." A two-clause statement genuinely cannot express "territory for breadth / concept-identity for depth"; Axis-3 carries content Axis-1 alone can't. Distinct clause, dependent relation — precisely stated.

**Collision:**
- P-a/P-b × D-a/D-b → **defense wins** on the literal containment (`state ⊂ territory`). The "behavior change" is a *widening of applicability* = generalization, not negation. P-a's "sleight of hand" fails because the containment is set-theoretic, not rhetorical; P-b's "vacuous" fails because the post-cycle territory is a real, exercisable case. **D1 + D2: PASS** (strongly).
- P-c × D-c → **defense wins** via the Layer Commitment + signature analogy. Residual valid point: the verdict MUST explicitly separate grain-KIND (meaning) from grain-SELECTION (process), or a reader could conflate them — and Innovation's F3 REFINE already builds that seam in. **D7: PASS**, conditional on the F3 seam-statement being present (it is).
- P-d × D-d → **closest collision.** Prosecution "dependent = sub-clause"; defense "distinct clause, expresses what Axis-1 can't." **Resolution: REFINE-into-verdict** — the verdict must NOT say three *independent* axes; it must say "three clauses, Axis-3 dependent." Innovation's F5 already lands exactly here. **D4: PASS as refined** (the "dependent" qualifier is load-bearing and must remain in the verdict text).

**Position:** **VIABLE region.** Passes all three CRITICAL dimensions (D1 flip-soundness, D2 no-loss, D3 identity-coherence) under the high-stakes burden, plus D5/D6/D7; D4 passes with the dependent-clause qualifier (already present in Innovation's output). No critical-dimension caveat remains.

### Candidates B — The foils (adjudicated as candidates-to-invalidate)

| Foil | Prosecution vs Defense | Verdict | Constructive output (seed / refinement) |
|---|---|---|---|
| **F1 (no-input)** | Defense collapses — collides with perceive-by-enumerate identity + the generate-from-nothing IS-NOT (D3). | **KILL** | Seed: the necessity-clause IS the boundary separating routelister from invention. Keep it explicit in the spec. |
| **F2 (folder-bound)** | Defense collapses — its negation = routeman's original loop-role-in-identity defect (D3). | **KILL** | Seed: folder-binding = the exact category error routelister was built to shed; a future re-run that "needs a folder" is regressing. |
| **F3 (grain = pure process)** | Partial truth — grain-SELECTION *is* process; but grain-KIND is meaning (D7). | **REFINE** | Refinement: state the meaning/process seam explicitly (grain-KIND in-contract; grain-SELECTION deferred). Folded into the verdict. |
| **F4 (this IS a flip)** | Defense (set-theoretic containment) defeats it on D1. | **KILL** | Seed (reusable test): a re-run *flips* only when it NEGATES a prior claim; it *refines* when it generalizes and CONTAINS the prior case. This kill is what licenses "refinement of 15-48." |
| **F5 (only two axes)** | Collision resolved to dependent-clause (D4). | **REFINE** | Refinement: "three clauses, Axis-3 dependent on Axis-1" — the precise framing. Folded into the verdict. |

## Phase 3 — Verdicts

- **Candidate A (the 3-axis verdict): SURVIVE** — passes all CRITICAL dimensions under high-stakes burden; D4 satisfied with the dependent-clause qualifier; D7 satisfied with the meaning/process seam. Both qualifiers were already present in Innovation's output (no new generation required).
- **F1, F2, F4: KILL** (boundary markers + the load-bearing F4 kill that licenses the refinement verdict).
- **F3, F5: REFINE** — already integrated into Candidate A.

## Phase 3.5 — Assembly Check

The SURVIVE verdict + the F3 seam-refinement + the F5 dependent-clause-refinement assemble into the **final contract statement** (the same assembly Innovation produced): *a typed input signature — required (scope, goal[fuzzy-ok]), source-agnostic/folder-independent-by-construction, with scope-KIND selected by traversal axis (territory⊥breadth / concept-identity⊥depth, grain-SELECTION process-deferred) — where 15-48's "state+goal" is the completed-cycle special case.* **Emergent property:** the F4 kill + D2 no-loss *together* are what license stating this as a **refinement of** 15-48 rather than a replacement — neither alone does. The assembly is itself VIABLE (it inherits A's passes and adds no new failure surface).

## Phase 4 — Coverage + Convergence

- **Coverage:** all four problem axes (necessity / source / grain / relationship-to-prior) evaluated; foils map the dead regions; no large unexplored region adjacent to viable.
- **Convergence:** a clean **SURVIVE** with no critical-dimension caveat exists (Candidate A); the F3/F5 refinements that sharpen it were already in Innovation's output, so they open no new landscape region; landscape stable.
- **Signal: TERMINATE** — coverage sufficient + convergence reached + a clean SURVIVE exists. The question is answered.

---

## Inherited Commitments Re-test (Synthesis-Trigger obligation)

| Prior commitment | Re-test result | Evidence |
|---|---|---|
| 15-48 Axis-1 (state+goal REQUIRED as concepts) | **SURVIVES, refined** → territory+goal | state ⊂ territory (D-a); goal-may-be-fuzzy folds in (09-53) |
| 15-48 Axis-2 (source-flexible, NOT folder-bound) | **CONFIRMED + STRENGTHENED** → by-construction | intrinsic any-territory identity (D3); Lens-Shift on raw-text-only territory holds |
| 15-48 LTBM ("no input→nothing" literally-true-but-misleading) | **HOLDS for routelister** | "needs a scope"=TRUE; "needs an inquiry folder"=FALSE |
| 12-44 routelister identity (intrinsic / concept-identity / two-axis) | **CONSISTENT** — contract doesn't violate it | necessity ≠ loop-binding; grain = the two axes |
| 11-43 mode-grain (territory breadth / concept-identity depth) | **RE-TESTED → it IS Axis-3** (dependent clause) | F5 collision (D4) |
| 09-53 fuzzy-goal (goal may be fuzzy) | **RE-TESTED → folded into Axis-1** | Constraint-ADD "crisp goal" breaks it → fuzzy required |

None parroted; each re-tested with cited evidence. **D6 (non-sycophancy): PASS.**

## Convergence Telemetry

- **Dimension coverage:** 7 dimensions (6 default-derived + project-specific D2/D6/D7); all applied.
- **Adversarial strength:** **STRONG** — prosecution constructed the flip-charge (P-a), a concrete failure-case (P-b), a specification-gap probe (P-c), and the collapse objection (P-d); the F4 attack was genuine, not token.
- **Landscape stability:** STABLE (refinements pre-existed in Innovation; no new region opened).
- **Clean SURVIVE exists:** YES (Candidate A, no critical-dimension caveat).
- **Failure modes observed:** **none.** Wrong-Dimensions guarded (extracted + project-specific axes); Rubber-stamping guarded (strongest objections incl. flip + spec-gap; 3 KILLs rendered); Nitpicking guarded (defense for every candidate; 2 REFINEs not all-KILL); Dimension-Blindness guarded (D2/D6/D7 added); False-Convergence guarded (clean SURVIVE, not stabilization-without-sufficiency); Evaluation-Drift N/A (single pass); **Self-Reference-Collapse guarded** — external reference points used: (1) the set-theoretic containment `state ⊂ territory` (a logical fact, not the verdict validating itself); (2) cross-check against routeman §1.3 NOT-list + 12-44 (external artifacts); (3) the 19-00 contrast (an external prior that genuinely flipped) calibrating "flip vs refine" so "refinement" isn't self-servingly applied.
- **Overall: PROCEED / TERMINATE** — the 3-axis input-contract verdict SURVIVES; the question is answered.

### Signal to the loop
**TERMINATE.** Ranked survivor: the **3-axis input-contract verdict** (confirm-refine-extend of 15-48, NOT a flip) — necessity (scope+goal[fuzzy-ok]; state→territory no-loss generalization) / source-flexibility (folder-independent by-construction) / mode-grain (territory⊥breadth, concept-identity⊥depth; a distinct-but-dependent clause; grain-SELECTION process-deferred). Ready for CONCLUDE.
