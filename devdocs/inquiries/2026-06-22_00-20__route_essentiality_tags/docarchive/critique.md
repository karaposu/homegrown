## User Input

`_branch.md` + `surfacing.md` + `sensemaking.md` + `decomposition.md` + `innovation.md` (this inquiry). Adversarially test the essentiality-axis design grounded in the REAL DATA (the 12 crowboy maps) + the routelister spec + routelog's spec. Self-reference case (routelister's own schema) → external grounding required: apply the design LITERALLY to real routes, don't reason from the framework alone.

---

# Structural Critique — Route Essentiality Tags

## Phase 0 — Dimensions (weighted; extracted from sensemaking + project risk axes)

| # | Dimension | Weight | Success criterion | Type |
|---|---|---|---|---|
| D1 | **Correctness** | critical | a route's essentiality reads independently of Priority; the user can pick the "must-not-skip" routes at a glance | — |
| D2 | **Distinctness-from-Priority** | critical | essentiality dissociates from Priority on enough REAL routes to add information (not 2 outliers) | external-anchor + substance |
| D3 | **Identity: Selection-creep** | critical | the tag (esp. the phase-qualifier) stays attributive — never decides act/defer/drop | project-risk |
| D4 | **Identity: no-dependency-graph** | critical | "can the goal land without this route?" stays route↔GOAL, not route↔route | project-risk |
| D5 | **Glance-decidability / lightweight** | critical | the rubric is one-glance + domain-agnostic (incl. the "supporting" middle) | project-risk |
| D6 | **Lean / no-bloat** | critical | net add is the leanest realization vs the just-finished lean-index | project-risk |
| D7 | **Coherence with routelog** | non-crit | does NOT collide with routelog's ownership the way the ✓ column did | external-anchor |
| D8 | **Elegance** | non-crit | simplest sufficient form | — |

**Frame-premise test** (the candidate-space rests on SV6's inherited commitments). Load-bearing premises:
- **P-a — "Priority is overloaded."** What-if-wrong: if Priority already cleanly means coreness, essentiality duplicates it. Prosecute via D2 against the real corpus.
- **P-b — "essentiality is glance-decidable + route↔goal."** What-if-wrong: if deciding core/supporting/peripheral requires tracing the goal's route-network, it imports a dependency graph (forbidden) and isn't a glance. Prosecute via D4+D5.
- **P-c — "the phase-qualifier stays attributive."** What-if-wrong: "@real-money" read as "defer to real-money" = a disposition. Prosecute via D3.

## Phase 1 — Landscape

- **Viable region:** an attributive token that dissociates from Priority on real routes, decides in a glance, rides existing structure, and never selects.
- **Dead region:** a token that (a) merely restates Priority, or (b) requires route↔route dependency reasoning, or (c) reads as a do-it-now disposition, or (d) adds an index column.
- **Boundary:** the "supporting" middle (fuzzier than core/peripheral) and the phase-qualifier (attributive-but-disposition-adjacent) — viable only with explicit framing.

## Phase 2 — Adversarial Evaluation (grounded: essentiality applied LITERALLY to all 13 routes of map `01-32`)

**The substance/external-anchor test — essentiality assigned to every route, compared to its real Priority:**

| Route | Real Priority | Essentiality (by "can the goal land without it?") | Dissociates? |
|---|---|---|---|
| R1 launch-stance OPEN | HIGH | **core** (gates real-money) | aligned |
| R2 ProofVerdict seam | HIGH | **core** (the contract settlement rests on) | aligned |
| R3 settlement vs stub | HIGH | **core** (highest-correctness build) | aligned |
| **R4 funding/escrow-hold** | **MED** | **core** ("no money to settle without it") | **YES** ✦ |
| R5 money state machine + notifs | MED | **supporting** ("connective tissue… legible") | mild |
| R6 proof-verdict console | HIGH | **core** ("load-bearing human-in-the-loop") | aligned |
| **R7 recording pipe** | **MED** | **core · @post-stub** ("sequenced AFTER stub-loop") | **YES** ✦ |
| R8 points pilot | HIGH | **core** ("M1's proof-of-life") | aligned |
| R9 proof→verdict integration | HIGH | **core** ("owed before real-money launch") | aligned |
| **R10 dispute path** | **MED** | **core · @real-money** ("load-bearing the moment real money flows") | **YES** ✦ |
| **R11 M2 real-money delta** | **HIGH (gated)** | **core · @real-money** | **partial** (the qualifier carries the "GATED" the WHY hand-noted) |
| R12 auto-release-unless-disputed | LOW | **peripheral** ("KILLED as launch default… scale optimization") | aligned |
| R13 trust-first direction | LOW | **peripheral** ("off the money-loop critical path") | aligned |

**Two measured results that settle the frame-premise prosecution:**
1. **Essentiality assigns cleanly to ALL 13 routes — zero awkward/empty cases.** It generalizes across DEVELOP / DEEPEN / TEST / INVESTIGATE-FRONTIER. (Defeats "does it have empty cells?")
2. **~4–5 of 13 routes (≈35%) show meaningful Priority↔essentiality dissociation** (R4, R7, R10, R11, mild R5) — NOT two outliers. On a third of routes, essentiality carries information Priority hides. **P-a (Priority overloaded) HELD on external evidence.**

### Candidate verdicts

**C1 — The essentiality axis {core/supporting/peripheral}.** **Prosecution:** "it's just Priority." **Defense + collision:** refuted by the table — 35% dissociation, measured; and essentiality assigns where Priority is silent (R4 reads skippable at MED, essentiality says core). **Verdict: SURVIVE** (D1, D2 pass; external-anchor validated).

**C2 — D4 no-dependency-graph (the load-bearing identity prosecution).** **Prosecution:** "can the goal land without this route?" can be ANSWERED by dependency reasoning — "the goal needs X, X needs this route" — which is exactly the forbidden route↔route graph (§1.3). Deciding R1=core could route through "R11 is gated on R1." **Defense:** in assigning all 13, the essentiality judgment used the DIRECT goal-relation ("is the goal itself load-bearing on this?") perceived in a glance — the R1→R11 gating link was NOT needed to see R1 is core (the goal's real-money phase needs the stance decided). **Collision:** the design survives, BUT the prosecution exposes a real ambiguity — the rubric COULD be read as transitive-dependency computation. **Verdict: SURVIVE + REFINE #1 (LOAD-BEARING):** the spec must state essentiality is the **direct** goal-relation, perceived in one glance — NOT a transitive route↔route dependency trace. This is the no-dependency-graph guard made explicit.

**C3 — The phase-qualifier `core · @<goal-phase>`.** **Prosecution (D3):** "@real-money" will be read/used as "defer until real-money" — a disposition (Selection-creep). **Defense:** applied to R7/R10/R11, the qualifier describes WHICH goal-phase the route's coreness activates in — the goal (crowboy) HAS explicit phases (stub→real-money), so it reads the goal's phase structure and attributes the route to it; R10's own WHY states it attributively ("becomes load-bearing the moment real money flows"), not as a command; a consumer may still build R10 now. **Collision:** attributive reading holds, but disposition-misuse is a live risk. **Verdict: SURVIVE + REFINE #2:** frame the qualifier as "the goal-phase in which this route's coreness activates" (a fact about the goal's phases), explicitly NOT "when to do it"; model the wording on R10.

**C4 — The "supporting" middle.** **Prosecution (D5):** core/peripheral are crisp; "supporting" is fuzzy — R5 took a beat to decide, and it risks becoming the "I'm not sure" dumping ground. **Defense:** 3-value scales (low/mid/high vitality) already work in the project; the middle is always fuzziest but still informative; only 1 of 13 routes landed there (not a dumping ground in practice). **Collision:** keep it, but bound the fuzz. **Verdict: SURVIVE + REFINE #3:** give "supporting" its test ("the goal is weaker/rougher without it but still lands") AND an asymmetric-failure lean (under core-vs-supporting doubt, lean **core** — missing a core route is the worse failure).

**C5 — The name "Loudness vs Load-bearing."** **Prosecution (D8/substance):** Priority isn't PURELY loudness today — it's defined as "salience/importance," and "importance" is partly the coreness essentiality takes. So the name slightly overstates the current state. **Defense:** it's a precise teaching device for the TARGET state and maps to a measured case (R4 quiet-but-load-bearing). **Verdict: SURVIVE + REFINE #4:** present the name as the **target** — essentiality LETS Priority shed coreness to become loudness/pressingness; today they're fused (consistent with sensemaking Ambiguity 5: Priority re-documentation is a flagged structural choice, not done).

**C6 — D7 routelog coherence.** **Prosecution:** does essentiality collide with routelog the way the ✓ column did (the prior inquiry's mis-design)? **Defense + collision:** NO — the ✓ was *done-state* (engagement state, which routelog OWNS). Essentiality is an **authored attributive descriptor** produced at routelisting-time, exactly like Priority/Confidence — routelog has no claim on it; nothing to collide with. **Verdict: SURVIVE** (and worth stating explicitly to preempt the parallel worry — REFINE #6).

**C7 — D6 lean/no-bloat.** **Prosecution:** it adds a token per route + a sometimes-qualifier + a Header count — after we just dropped two columns. **Defense:** the token rides the EXISTING `tags:` line (or joins the Priority/Confidence Attribution line) → **no new index column**, the index stays lean; the record gains one token. **Collision/honest accounting:** not zero — one token + optional qualifier + a header number — but it is the leanest realization and rides existing structure. **Verdict: SURVIVE + REFINE #5:** state the honest accounting (not zero, but no new column; leanest home is the tags-line).

## Phase 3.5 — Assembly Check

The survivors assemble into **the coreness layer**: one attributive token (C1) on the existing tags-line (C7), decided by the direct-goal-relation glance (C2), with an optional attributive phase-qualifier (C3) and a Header essential-count — orthogonal to Priority (which it lets shed coreness, C5) and to routelog (C6). The assembly is coherent and adds a scannable "what's core?" the WHY prose buried. No emergent KILL.

## Phase 4 — Coverage + Convergence

- **All 8 dimensions evaluated; all candidates SURVIVE** (6 with REFINEs; no KILL).
- **Mechanism-independence: VALIDATED (not quarantined)** — evidence cites external anchors: the 13 real routes of map `01-32` (empirical artifact), the routelister spec §1.3/§2.2 (canonical source), routelog's ownership boundary (cross-spec). The verdict does not rest on framework self-agreement (Self-Reference-Collapse guard satisfied).
- **Frame-premise verdicts:** P-a HELD (35% measured dissociation); P-b HELD + REFINE (direct-not-transitive; supporting bounded); P-c HELD + REFINE (attributive phase framing).
- **Failure modes:** none. Not Rubber-Stamping (REFINEs are substantive, one LOAD-BEARING); not Nitpicking (no KILL on minor issues — the design's core passed the critical dimensions); not Self-Reference-Collapse (external-anchored).
- **Verdict: PROCEED** — the design SURVIVES with **six REFINE instructions** to carry into the routelister exhaust + the finding:

  1. **[LOAD-BEARING] D4 guard:** essentiality = the **direct** goal-relation ("is the goal load-bearing on this route?"), one glance — NOT a transitive route↔route dependency trace.
  2. **phase-qualifier framing:** `@<goal-phase>` = the goal-phase the coreness activates in (a goal-phase fact), explicitly NOT "when to do it."
  3. **"supporting" bounded:** test = "goal weaker/rougher without it but still lands"; under core-vs-supporting doubt, lean **core** (asymmetric-failure).
  4. **name = target state:** essentiality LETS Priority shed coreness (loudness vs load-bearing is the target; today fused).
  5. **honest bloat accounting:** not zero, but no new index column — rides the existing tags-line.
  6. **routelog contrast (positive):** essentiality is an authored attributive descriptor (routelisting-time, like Priority) — routelog does NOT own it; no ✓-style collision.

Structural check: manual PASS (dimensions+weights, landscape, per-candidate prosecution/defense/collision, assembly, coverage+convergence all present; external-anchored). Next: Routelister (exhaust).
