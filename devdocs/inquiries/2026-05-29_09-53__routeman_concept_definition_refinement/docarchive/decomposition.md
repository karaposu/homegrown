## User Input

`devdocs/inquiries/2026-05-29_09-53__routeman_concept_definition_refinement/_branch.md` (prior outputs: surfacing.md, sensemaking.md; workspace in context). Whole: the refined-definition understanding (two-axis, goal-relative bound, anti-skip, non-collapse) — partition for Innovation (candidate final wordings) + Critique.

---

# Structural Decomposition — Refined Concept Definition

## Step 1 — Coupling Map

Elements from sensemaking SV6:
- **(a)** Two-axis value: teleological (advances goal) + epistemic (sharpens the understanding the goal rests on); unifies fuzzy-goal + abstract-concept.
- **(b)** The goal-relative bound on the epistemic axis (the over-generalization guard; "understanding the goal rests on", not "definition of things").
- **(c)** The anti-skip license for abstract/epistemic concepts (LLM-operational; §4.4-alone insufficient; placement deferred).
- **(d)** Non-collapse: routeman enumerates "refine X" as a route, doesn't execute it (vs /sense-making, /comprehend).
- **(e)** The synthesized final definition wording (Innovation target) + the priors re-test.

Coupling: (a) is the core claim; (b) bounds (a)'s epistemic half; (c) licenses (a)'s abstract sub-case; (d) is an independent discriminator-preservation check; (e) synthesizes (a)+(b)+(c)+(d).

**Dominant structure:** one core claim {two-axis (a)} with two guards on it {bound (b), anti-skip (c)} + one independent boundary check {non-collapse (d)} → one synthesis {wording + re-test (e)}.

## Step 2 — Boundaries (top-down)

Five pieces: **P1** two-axis (a), **P2** goal-relative bound (b), **P3** anti-skip license (c), **P4** non-collapse (d), **P5** synthesis+re-test (e).

## Step 3 — Validate Boundaries (bottom-up)

Atoms: "teleological", "epistemic", "fuzzy-goal=abstract-concept unification" → **P1**; "goal-relative", "vs 'of things'", "over-generalization guard" → **P2**; "abstractness-not-grounds-to-exclude", "LLM-skip", "§4.4 insufficient", "placement deferred" → **P3**; "enumerate-not-execute", "vs sense-making/comprehend", "as-routes" → **P4**; "final wording", "priors re-test" → **P5**. No atom split; agreement top-down/bottom-up → **HIGH confidence** on all five.

## Step 4 — Question Tree

**P1 — Is a route's value two-axis (teleological + epistemic), and does that unify fuzzy-goal + abstract-concept?**
- [ ] States the two axes: advances the goal (teleological) vs sharpens the understanding the goal rests on (epistemic).
- [ ] Shows the two are direct/indirect paths to the *same* goal (not two unrelated endpoints).
- [ ] Shows the epistemic axis covers BOTH the fuzzy-goal case and the abstract-concept case (same underlying case: teleological-unclear/epistemic-high).

**P2 — How is the epistemic axis bounded so it doesn't over-generalize?**
- [ ] States the bound: goal-relative ("the understanding the goal rests on, including a fuzzy goal itself"), NOT free-floating ("definition of things").
- [ ] Confirms discrimination survives (not every concept's clarification serves the goal's foundations — only load-bearing ones).
- [ ] Names this as the refinement of the user's under-bounded wording.

**P3 — Does the definition license abstract/epistemic concepts against LLM-skip, and where?**
- [ ] States the license: "abstractness is not grounds to exclude" — the abstract concept is often the one the goal most depends on.
- [ ] Grounds it in LLM-operational-characteristics-as-design-input (the LLM won't self-supply the license).
- [ ] States why §4.4-alone is insufficient (it fires on surfaced candidates; the gloss framing controls what gets surfaced) and flags the gloss-vs-§4.4 placement as deferred-structural.

**P4 — Does the epistemic axis keep routeman non-collapsing (distinct from /sense-making and /comprehend)?**
- [ ] States routeman ENUMERATES "refine X" as a prescriptive route (movement-type REFINE/REFRAME); it does not PERFORM the refinement.
- [ ] Confirms performing it is the downstream discipline's job (sense-making/comprehend, invoked if the route is taken).
- [ ] Confirms the "as routes" / enumerate-not-execute boundary holds on the epistemic axis as on the teleological one.

**P5 — What is the best final definition, and does it hold against the priors?** (Innovation's target + Synthesis re-test)
- [ ] Produces candidate final definition wording(s) binding the two axes + the goal-relative bound + the abstractness-license, PLUS at least one alternative to test against (e.g., the user's literal wording; a goal-only revert).
- [ ] Re-tests: 09-23 goal-bias (preserved+extended as the indirect path?), §2.2 taxonomy (REFINE classifies admitted epistemic routes?), §4.4 (anti-skip = this principle at admission-time?).
- [ ] Confirms admission (gloss) complements classification (§2.2), not duplicates.

## Step 5 — Interface Map

| Source → Target | What flows | Direction |
|---|---|---|
| P1 → P2 | the epistemic axis (the thing to bound) | one-way |
| P1 → P3 | the abstract/epistemic sub-case (the thing to license) | one-way |
| P1 → P5 | the two-axis core | one-way |
| P2 → P5 | the goal-relative bound | one-way |
| P3 → P5 | the abstractness-license | one-way |
| P4 → P5 | the non-collapse constraint | one-way |
| priors (09-23 / §2.2 / §4.4) → P5 | inherited commitments to re-test | one-way |

**Assumptions-not-data check:** P2 and P3 both assume P1's two-axis frame (explicit). P5 assumes P1–P4 settled before synthesizing (explicit). No hidden coupling.

## Step 6 — Dependency Order

- **Wave 1 (parallel):** P1 (two-axis core), P4 (non-collapse — independent discriminator check).
- **Wave 2:** P2 (bound on P1's epistemic axis), P3 (license on P1's abstract sub-case).
- **Wave 3:** P5 — synthesize wording from P1+P2+P3+P4 and re-test priors.

No circular dependencies.

## Step 7 — Self-Evaluation

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each answerable via interfaces only? | PASS — P1/P4 independent; P2/P3 depend only on P1; P5 via declared interfaces. |
| **Completeness** | Cover the SV6 model? | PASS — two-axis (P1) + bound (P2) + anti-skip (P3) + non-collapse (P4) + wording/re-test (P5) covers OT1 (fuzzy via P1/P2), OT2 (abstract via P1/P3), OT3 (evaluate+better via P5), + the Synthesis obligation. |
| **Reassembly** | Pieces + interfaces reconstruct "what's the best refined definition?" | PASS. |
| **Interface clarity** | Flows explicit? | PASS — 7 interfaces + assumptions check. |
| **Balance** | Proportional? | PASS — P5 (synthesis) heaviest; P1–P4 medium; none dominates. |
| **Determination-mechanism** | Is the "is this concept worth drawing as a route?" runtime determination given a piece? | PASS — it IS the two-axis test (P1) + bound (P2) + license (P3); the Q-tree addresses HOW the determination is made. |
| **Confidence** | top-down/bottom-up agree? | PASS — all 5. |

**Failure-mode scan:** Premature decomposition avoided (sensemaking stabilized first); wrong boundaries — cut at claim/guard/check/synthesis valleys; hidden coupling surfaced (P2/P3←P1, P5←all); missing pieces — fuzzy-goal folded into P1/P2 (it's the epistemic axis's motivating case, not a separate piece), placement folded into P3 (deferred); over-decomposition avoided (5, not 6 — folded fuzzy-goal + placement); dependencies ordered; balance checked.

**Handoff to Innovation:** P5 is the generative target — produce candidate final concept definitions binding the two axes + goal-relative bound + abstractness-license, plus foils (the user's literal "of things" wording; a goal-only revert) so Critique chooses. P1–P4 are the constraints each candidate must satisfy.
