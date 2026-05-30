## User Input

`devdocs/inquiries/2026-05-29_09-23__routeman_concept_as_route_identity/_branch.md` (problem context: sensemaking.md; candidates: the identity statements + foils in innovation.md; priors + workspace in context). Adjudicate the merged identity statement, confirm the foils, render the "what routeman should do" verdict.

---

# Structural Critique — Adjudicating Routeman's Concept-as-Route Identity

## (a) Dimensions (Phase 0)

Extracted from the `_branch.md` goal + sensemaking. Candidates are competing *identity statements* for what routeman should do.

| # | Dimension | What it asks | Weight |
|---|---|---|---|
| D1 | **Intrinsicness** | Defines routeman by the operation (intrinsic), not loop-position/cycle-input (relational)? — resolves the diagnosis | **CRITICAL** |
| D2 | **Discrimination / non-collapse** | Keeps routeman distinct from /comprehend (predictive model) + /surfacing (relevance-tag)? — the OT2 collapse test | **CRITICAL** |
| D4 | **Operational fidelity** | Preserves routeman's actual operation (enumerate-all + type + reachability + guidance + no-select)? Not a redefinition that breaks the discipline | **CRITICAL** |
| D3 | **Coverage + boundedness** | "concept" gives meta-ness/coverage WITHOUT over-generalizing (goal-bias bounds it)? — OT3 | HIGH |
| D5 | **Preservation of the good** | Preserves the Route Map schema + 16-type taxonomy (the user's "output type is good" premise)? — P5 | HIGH |
| D7 | **Disciplines-as-individuals fit** *(project axis)* | Makes routeman a clean standalone individual per canon line 109? | HIGH |
| D6 | **Prior-fidelity** | Resolves the diagnosis, refines (not re-violates) 19-00, consistent with 20-35? — Synthesis re-test | MED-HIGH |

**Stakes:** medium-high (the identity will drive a spec rewrite of a core discipline). Burden-of-proof for the promoted identity = **guilty-until-proven**.

*Dimension-blindness guard:* D2 (collapse/OT2), D5 (preservation/user-premise), D7 (project axis) are the dimensions a naive critique would omit; all included.

## (b) Fitness Landscape (Phase 1)

- **Viable:** high D1 + D2 + D4 (intrinsic, non-collapsing, faithful) + adequate D3/D5/D6/D7.
- **Dead:** fails any CRITICAL — collapses into a neighbor (D2), breaks the operation (D4), or stays relational (D1).
- **Boundary:** re-imports relational flavor, or is the verb-first status quo, or under-specifies the determination mechanism.

## (c) Candidate Verdicts (Phase 2 → Phase 3)

### Merged identity (ID-A precision + ID-C crispness) — **SURVIVE (with 2 REFINEs) → the verdict**

> *"Routeman turns the concepts latent in a territory into typed, prescriptive routes toward a goal — drawing each thing engageable toward the goal into present attention as a direction (with how-to-engage + reachability + guidance), without selecting which to take."*

- **Prosecution (strongest against):**
  - *(a) Collapse axis (D2):* "/comprehend also produces typed, structured output about concepts (CV models with components). What truly separates 'concept-as-route' from 'concept-in-a-model'?"
  - *(b) User-perspective objection (the Source Input concern):* does this deliver the user's plain "identify concepts, list as routes," or over-qualify it into something they didn't ask for?
  - *(c) Specification-gap probe:* "concepts… engageable toward the goal" — does it specify HOW routeman decides which concepts qualify, or presuppose it?
  - *(d) Operational fidelity (D4):* does "turns concepts… engageable" imply *filtering*, violating routeman's enumerate-all / asymmetric-failure-toward-inclusion character?
- **Defense:**
  - *(a)* The discriminator is grounded in the specs' **output-types**, not assertion: /comprehend builds a **predictive model** answering "how does this work?" (predicts behavior); routeman emits a **route map** answering "what could you do next toward the goal?" (prescribes directions, "without selecting"). "Toward a goal" + "prescriptive" + "without selecting" + "how-to-engage/reachability/guidance" are all absent from /comprehend's identity. Different question, different output type. The line holds.
  - *(b)* The statement IS "identify concepts, list as routes" — "turns concepts into routes." The qualifiers (territory, goal, prescriptive, no-select) are routeman's *already-committed* properties (§1.1, §2.4, NOT-list), not new impositions. Faithful, made precise.
  - *(c)* The determination = the goal-bias + route-framing (a concept qualifies if it can be framed as a direction advancing the goal) — this is the gloss sensemaking flagged. **Closing it requires REFINE-1: state the gloss inline** ("engageable as a direction toward the goal"), which the merged statement now does.
  - *(d)* "without selecting" preserves no-select; but to avoid a filtering read, **REFINE-2: make the enumerate-all/inclusion character explicit** (routeman draws *all* concepts engageable toward the goal, leaning to inclusion under uncertainty — per routeman's asymmetric-failure principle §4.4).
- **Collision:** Survives on all three CRITICAL axes (D1 intrinsic — "territory" not "cycle"; D2 non-collapse — grounded in output-type difference; D4 fidelity — "without selecting" + the inclusion REFINE). Two REFINEs close the spec-gap (c) and the filtering risk (d). With them, clean SURVIVE.
- **Verdict: SURVIVE.** Caveats → the two REFINEs (inline gloss + explicit enumerate-all), both meaning-level clarifications, not structural rewrites.

### ID-B (enumerate "from a state toward a goal") — **REFINE → fold into the winner**
- **Prosecution:** "from a state" re-imports §1.4's relational "current state" (the diagnosed defect).
- **Defense:** preserves §1.1's familiar phrasing.
- **Collision:** the relational re-import outweighs the familiarity. Replace "state" with "territory."
- **Verdict: REFINE → folded** (the winner uses "territory").

### ID-D (concept-only, no route-framing) — **KILL confirmed**
- Fails D2 (collapses to /surfacing relevance-tag or /comprehend model — descriptive, not prescriptive) and D4 (drops the prescriptive operation). Defense (it's simpler) cannot overcome the collapse. **KILL.** *Seed (kept):* confirms route-framing is load-bearing.

### ID-E (goal-less, "all concepts as routes") — **KILL confirmed**
- Fails D3 (no goal → no discrimination → over-generalization) and D4 (no goal-bias breaks the toward-a-goal operation). **KILL.** *Seed:* confirms goal-bias is load-bearing.

### ID-F (move-first, the status quo) — **REFINE → superseded**
- **Prosecution:** verb-first ("next moves") presupposes a trajectory you're already moving along (prior work) — the relational flavor the diagnosis flagged. Fails D1 partially.
- **Defense (steelman):** "next moves toward a goal" *could* be read standalone.
- **Collision:** the grain of truth (moves-toward-a-goal isn't fully relational) doesn't beat concept-first's cleaner intrinsicness — "concepts in a territory" presupposes no prior movement. **REFINE → superseded** by the winner (not wrong, just less standalone). It is the thing being improved upon, not a competitor.

## Phase 3.5 — Assembly Check

Evaluate the **foil-triangulation** as a validation result: the three foils each drop ONE of {concept, route-framing, goal-bias} and fail (ID-D drops route-framing → collapses; ID-E drops goal-bias → over-generalizes; ID-F keeps move-first over concept → stays relational).
- **Prosecution:** "Circular — you built foils designed to fail."
- **Defense:** each foil is a real alternative someone has actually proposed or held — concept-only = the 19-00 reading; goal-less = a naive "list everything"; move-first = the *current shipping identity*. Their failures are structural (collapse / over-generalize / stay-relational), not rigged. So the triangulation genuinely validates sensemaking's three-element jointness by construction.
- **Verdict: SURVIVE** — the triangulation is a real validation; each of the three elements is proven necessary by the failure of the candidate omitting it.

**Inherited-claim re-test (D6 — Synthesis obligation):**
- **Diagnosis (01-11):** the winner RESOLVES it — "concepts latent in a territory… toward a goal" is intrinsic (territory + goal exist anywhere). This inquiry produces the positive cure to the diagnosis's named disease. AFFIRMED + fulfilled.
- **19-00:** REFINED correctly, not re-violated — the winner's "prescriptive routes… toward a goal… without selecting" is exactly the distinction 19-00 lacked: a descriptive concept-*model* is /comprehend (19-00 right); a prescriptive concept-*as-route* is routeman.
- **20-35:** consistent — "territory" (any) + domain-agnostic "concept" = standalone.

## (d) Coverage Map (Phase 4)

- **Evaluated:** the merged winner + ID-B + 3 foils + the assembly; dimensions span intrinsicness / non-collapse / operational-fidelity / coverage-boundedness / preservation / disciplines-as-individuals / prior-fidelity.
- **Viable region:** the merged identity (with 2 REFINEs). **Dead:** ID-D, ID-E. **Boundary→folded/superseded:** ID-B, ID-F.
- **Unexplored:** none likely to hold a better identity — the 7-mechanism innovation + this adversarial pass converge; the status-quo (ID-F) and the collapse-direction (ID-D) were both tested, so neither edge is skipped.

## (e) Signal

**TERMINATE** with a clean SURVIVE. Ranked survivor: **the merged concept-as-route identity (with the 2 REFINEs applied).**

> **What routeman should do (verdict):** Routeman should **identify the concepts in a territory that can be engaged as directions toward a goal, and frame each as a typed, prescriptive route — enumerating all such concepts (leaning to inclusion), without selecting which to take.** "Concept" is the right unit (meta + coverage → standalone), bounded by the goal so it doesn't over-generalize. The "as routes" prescriptive framing is the load-bearing line that keeps routeman distinct from /comprehend (which builds descriptive models) and /surfacing (which tags by relevance). This is the intrinsic identity that resolves the prior diagnosis; the Route Map schema and the 16-type movement taxonomy survive (the taxonomy becomes the per-route "how to engage" attribute), honoring the user's "output type is good" premise.

So: **yes, the user's framing makes sense** — and it is the correct intrinsic re-identity, with two refinements (state the "engageable toward the goal" gloss inline; make the enumerate-all character explicit) and one load-bearing constraint (the prescriptive "as routes" framing is non-negotiable).

## (f) Convergence Telemetry

- **Dimension coverage:** 7 dimensions incl. project-specific (D7) + collapse (D2) + preservation (D5). No critical dimension missing.
- **Adversarial strength:** STRONG — 2 KILLs, 2 REFINE/supersede, and the winner itself took 2 REFINEs (not rubber-stamped); the collapse axis + user-perspective + spec-gap + fidelity were all prosecuted.
- **Landscape stability:** STABLE — matches innovation's convergence (concept-as-route); critique added the 2 REFINEs + confirmed the foil-triangulation without moving the verdict.
- **Clean SURVIVE exists:** YES — the merged identity, no critical-dimension caveat after the 2 REFINEs.
- **Failure modes observed:** none. *Self-Reference Collapse guarded* — the collapse-discriminator rests on the specs' documented output-types (model vs route-map) + the taxonomy + the user's framing, not on critique vocabulary; "does it help the user drive the fix?" → yes (it gives a ready identity statement + the load-bearing constraint). Rubber-stamping/nitpicking avoided (mixed verdicts; the winner refined, not waved through).
- **Overall: PROCEED** (→ TERMINATE; the question is answered).
