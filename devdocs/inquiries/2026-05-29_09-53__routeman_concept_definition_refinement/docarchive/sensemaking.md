## User Input

`devdocs/inquiries/2026-05-29_09-53__routeman_concept_definition_refinement/_branch.md` (prior output: surfacing.md; workspace in context — the 09-23 gloss, routeman §2.2/§4.4, /comprehend, /sense-making, diagnosis)

Refine the concept gloss for fuzzy goals + abstract-but-necessary concepts; evaluate "concept = a thing in the territory engageable as a direction, towards a relevant goal, OR towards better/refined definition of things"; seek a better definition.

---

# Structural Sensemaking — Refining the Concept Definition

## SV1 — Baseline Understanding

Initial read: the prior gloss ("engageable as a direction toward the goal") is too strict in two cases the user names — a fuzzy goal (can't tell if a concept helps) and abstract-but-necessary concepts (an LLM skips them as not-obviously-goal-serving). The user proposes adding "or toward better/refined definition of things." Naively: a reasonable addition, but it smells like it could re-open the over-generalization the goal-bias was introduced to close.

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints:**
- C1 — Must NOT re-open over-generalization (the prior inquiry's goal-bias exists precisely to bound "concept" against "any noun").
- C2 — Must admit abstract-but-necessary concepts (the user's reported failure — false-negative skips).
- C3 — Meaning-layer only; the spec wording + WHERE the anti-skip rule lives (gloss vs §4.4) are structural, deferred.
- C4 — Must re-test, not parrot, the inherited "goal-bias provides the discrimination" commitment.

**Key Insights:**
- K1 — A route's value has **two axes**: *teleological* (does acting on the concept advance the goal?) and *epistemic* (does engaging/clarifying the concept sharpen the understanding?). The prior gloss captured only the teleological axis. The user's "or toward refined definition" is the **epistemic axis**. This is the structural core of the user's insight.
- K2 — **Abstract-but-necessary concepts are exactly the high-epistemic / low-obvious-teleological ones.** A foundational definition rarely "advances the goal" directly, but the goal *depends on* it. The strict teleological gloss filters these out; the epistemic axis admits them. The user's two concerns are one: cases where teleological value is unclear but epistemic value is high.
- K3 — **The fuzzy-goal case is the same case.** When the goal is fuzzy, teleological value is unreadable (you can't tell if a concept advances an unclear goal), but epistemic value is readable (does this sharpen the picture / the goal itself?). So under a fuzzy goal the epistemic axis becomes the PRIMARY discriminator, and the most valuable routes are goal-refining ones. Fuzzy-goal + abstract-concept unify under the epistemic axis — the enhancement is ONE addition, not two patches.
- K4 — **The epistemic clause must stay goal-relative or it over-generalizes.** "Refine the definition of *things*" (the user's wording) is unbounded — anything refines some understanding. The bound that preserves discrimination: refine the understanding **the goal (even a fuzzy one) rests on** — including the goal itself. This keeps the epistemic axis as an *indirect path to the goal*, not a free pass.
- K5 — **Admission vs classification.** routeman's §2.2 already has REFINE / REFRAME / DIAGNOSE movement types. So a "refine X" route is already *classifiable*. The gloss is the *admission gate* — it decides what becomes a route-candidate at all. A too-strict gloss means an abstract concept never passes admission, so its REFINE-route is never enumerated. Broadening the gloss (admission) is what lets the abstract concept through so the existing REFINE type (classification) can fire. The two are complementary, not redundant.
- K6 — **The "as routes" boundary still protects against collapse.** "Refine the definition of X" is what /sense-making (ambiguity→meaning) and /comprehend (build a model) DO. But routeman doesn't DO the refining — it ENUMERATES "you could refine X" as a prescriptive route. Executing it is a downstream discipline's job. So the epistemic axis adds a new kind of DIRECTION, not a new OPERATION; routeman stays prescriptive (propose, don't execute).

**Structural Points:**
- S1 — The anti-skip concern is an instance of the project's named **LLM-operational-characteristics-as-design-input** principle (old_routeman.md): the gloss must be designed around the LLM's known bias to drop abstract/non-obvious items.
- S2 — routeman's §4.4 asymmetric-failure rule ALREADY says "lean to inclusion; missing a move is worse." So why does the skip happen anyway? Because the gloss FRAMING ("toward the goal") biases the LLM to pattern-match concrete goal-servers and not even CONSIDER abstract ones — §4.4 fires only on candidates already in view. The fix needs the gloss to put abstract/epistemic concepts in-frame.
- S3 — Placement question (structural, deferred): the abstractness-license could live in the gloss, in §4.4, or both.

**Foundational Principles:**
- P1 — A discipline is distinguished by its OPERATION, not its raw material (so "refine" as a route-direction ≠ routeman becoming sense-making). [from the prior finding]
- P2 — Asymmetric failure: a false-negative (dropped necessary concept) is worse than a false-positive (included marginal one) — routeman's own §4.4. The anti-skip concern is this principle applied to abstract concepts.

**Meaning-Nodes:**
- M1 — *teleological vs epistemic direction* (the two value-axes).
- M2 — *goal-relative epistemic bound* (refine what the goal rests on, including the fuzzy goal itself).
- M3 — *admission-gate vs classification* (gloss admits; taxonomy classifies).
- M4 — *abstractness-is-not-grounds-to-exclude* (the LLM-operational anti-skip license).

### SV2 — Anchor-Informed Understanding

The user's enhancement is structurally sound: it adds the **epistemic value-axis** that the prior teleological-only gloss missed, and this single axis handles BOTH the fuzzy-goal and abstract-concept cases (they're the same case — teleological-value-unclear-but-epistemic-value-high). But the user's *wording* ("refined definition of things") is under-bounded and would re-open over-generalization; the fix is to make the epistemic clause goal-relative ("the understanding the goal rests on, including the goal itself"). The epistemic clause does NOT collapse routeman into sense-making/comprehend because routeman *enumerates* "refine X" as a route rather than *doing* the refinement.

*Meta-Inspection (H4 concept-names): "definition of things" flagged as the under-bounded term (Phase-3 load-bearing-concept test). H5: the motivating examples (fuzzy goal, abstract concept) are real cases, not a narrow-generalization risk.*

---

## Phase 2 — Perspective Checking

**Technical / Logical (the spec):** §2.2 REFINE = "improve precision of an existing artifact or claim" — definition-refinement is already a movement type. §4.4 = lean-to-inclusion. So the spec already supports refine-routes (classification) and inclusion (anti-skip); what's missing is the *admission* license in the gloss. New anchor → **K7: the spec is already 80% there; the gloss is the missing admission license.**

**Human / User:** The user's rationale is explicitly LLM-behavioral ("so LLM who lists routes won't skip them"). This is a design-for-the-actual-executor concern, not a theoretical-completeness concern — it should be honored as such (the gloss must work on a real LLM that drops abstract items). New anchor → **K8: the gloss is a prompt the LLM reads; it must counteract, not rely on, the LLM's defaults.**

**Strategic / Long-term:** A definition that admits epistemic/foundational routes is what makes routeman useful at the START of work (fuzzy goal, unclear territory) — exactly the standalone/any-territory use the prior inquiries established. Teleological-only routeman is only useful once the goal is crisp. So the epistemic axis extends routeman's reach to early/fuzzy situations. Strategically aligned.

**Risk / Failure (the over-generalization perspective — load-bearing):** If the epistemic clause is unbounded, routeman lists "refine basically anything" — the goal-bias's discrimination is lost and the map becomes noise. This is the real risk in the user's wording; the answer must bound the clause (goal-relative) explicitly.

**Resource / Feasibility:** The change is a gloss extension + (structurally) possibly a line in §4.4. Low-cost. The existing REFINE/REFRAME machinery absorbs the admitted concepts.

**Definitional / Internal Consistency:** Does the epistemic axis contradict routeman's identity (enumerate next moves toward a goal)? No — an epistemic route ("refine X, which the goal rests on") IS a next move toward the goal (indirect). And "without selecting/executing" is preserved (routeman lists it; doesn't do it). Consistent. But check the reverse: does it contradict the prior finding's "goal-bias bounds concept"? Only if unbounded — the goal-relative bound preserves the prior commitment. New anchor → **K9: goal-relative epistemic clause is consistent with the prior goal-bias (it's the indirect-path extension of it, not its abandonment).**

**Phase / Calibration-State:** Mildly relevant — the fuzzy-goal case is more common early (before goals crisp up). The epistemic axis is phase-robust (works fuzzy or crisp); no calibration dependency.

**Self-Reference (failure mode #6 — REQUIRED):** using a discipline to refine another discipline's definition. External anchors: routeman §2.2 (REFINE exists — text), §4.4 (inclusion rule — text), the /sense-making + /comprehend specs (the collapse-neighbors — text), the user's reported LLM behavior (empirical). The epistemic-vs-teleological distinction is grounded in the value a route serves, checkable against the taxonomy, not in sense-making vocabulary. Check passed.

### SV3 — Multi-Perspective Understanding

The user is right that the gloss needs the epistemic axis, and right about WHY (abstract-but-necessary + fuzzy-goal + LLM-skip). The refinement that's *better* than the user's wording: (1) frame it as two value-axes (advance the goal / sharpen the understanding the goal rests on) rather than two endpoints (goal / "definition of things"); (2) bound the epistemic clause goal-relative, including the fuzzy goal itself as a legitimate refinement target; (3) add an explicit abstractness-is-not-grounds-to-exclude license (the LLM-operational anti-skip), noting its structural home (gloss and/or §4.4) is deferred; (4) keep "as routes" (routeman enumerates "refine X", doesn't execute it) so it doesn't collapse into sense-making/comprehend.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — Does the epistemic clause re-open over-generalization? (the load-bearing test)

**Strongest counter-interpretation:** "Or toward better/refined definition of things" admits almost anything — everything refines *some* understanding — so the goal-bias's discrimination (the whole point of the prior inquiry) is lost.

**Why the counter is partly right and the fix:** The counter is correct about the user's *literal wording* ("of things" is unbounded). It fails against the *bounded* form: refine the understanding **the goal (even fuzzy) rests on**, including the goal itself. That keeps the epistemic clause as an *indirect path to the goal* — discrimination survives because not every concept's clarification serves the goal's foundations; only the load-bearing ones do. So the resolution is not "reject the clause" but "bound it goal-relative."

**Confidence:** HIGH. **Resolution:** the epistemic axis is admitted but **goal-relative** ("sharpens the understanding the goal rests on"), not free-floating ("definition of things"). The user's wording is refined, not rejected.
**What is now fixed:** the epistemic clause must be goal-anchored.
**What is no longer allowed:** an unbounded "refine anything" reading.

### Ambiguity 2 — Does "toward refined definition" collapse routeman into /sense-making or /comprehend? (sharper collapse test, F3)

**Counter-interpretation:** Refining definitions/understanding IS sense-making's job (ambiguity→meaning) and comprehend's (model-building). So the clause makes routeman do their work.

**Why it fails (structural grounds):** routeman *enumerates* "you could refine X" as a prescriptive route (movement-type REFINE/REFRAME); it does not *perform* the refinement. Performing it is the downstream discipline you'd invoke if you selected that route. The propose-don't-execute boundary (the prior inquiry's "as routes" line) holds on the epistemic axis exactly as it did on the teleological axis. routeman stays the discipline that lists directions; sense-making/comprehend are what you run when you take an epistemic direction.

**Confidence:** HIGH. **Resolution:** no collapse — the epistemic clause adds a new kind of *direction* (route-target), not a new *operation*. routeman remains enumerate-not-execute.

### Ambiguity 3 — Is the epistemic clause a NEW gloss element, or already covered by the REFINE movement type?

**Counter-interpretation:** REFINE/REFRAME already exist in §2.2, so the gloss doesn't need changing — definition-refining routes are already expressible.

**Why it fails:** the taxonomy *classifies* routes that have already been admitted; the gloss *admits* candidates. If the gloss is teleological-only, an abstract concept fails admission and never reaches the classification step — its REFINE-route is never enumerated. So the gloss broadening (admission) is genuinely needed AND complements the existing taxonomy (classification). Both are required; they operate at different stages.

**Confidence:** HIGH. **Resolution:** admission (gloss) and classification (taxonomy) are complementary; the gloss broadening is the missing admission license, not a duplicate of REFINE.

### Ambiguity 4 — Where does the anti-skip license belong — the gloss, or routeman's §4.4 enumerate-all rule?

**Counter-interpretation:** §4.4 already says "lean to inclusion; missing a move is worse" — so the anti-skip is already handled; no gloss change needed for it.

**Why it's insufficient (structural grounds):** §4.4 fires on candidates *already in view*. The skip happens earlier: the gloss's "toward the goal" framing biases the LLM to not even *generate* abstract candidates. So §4.4 alone can't catch what was never surfaced. The gloss must put epistemic/abstract concepts in-frame. WHERE the explicit "abstractness is not grounds to exclude" line lives (gloss, §4.4, or both) is a **structural placement question — deferred**; the meaning-level conclusion is that the *definition must license* abstract/epistemic concepts because the LLM won't self-supply that license.

**Confidence:** HIGH (meaning-level); placement deferred. **Resolution:** the definition must explicitly license epistemic/abstract concepts; structural placement is out of scope.

### Ambiguity 5 — Load-bearing concept test on the refined definition (user-language + boundedness)

**Test:** does the refined definition match the user's intent while staying bounded?

**Resolution:** it preserves the user's core insight (the epistemic axis; protect abstract concepts) and his rationale (LLM-skip), while bounding the part his wording left open ("of things" → "the understanding the goal rests on"). User-language alignment: high (his "relevant goal" + "definition" map to teleological + epistemic; his "abstract but needed" maps to the anti-skip license). Confidence HIGH.

### Ambiguity 6 — Re-test of inherited priors

- **09-23 "goal-bias provides discrimination":** RE-TESTED → PRESERVED + EXTENDED. The goal-bias still bounds; the epistemic clause is its *indirect-path* extension (goal-relative), not its abandonment. The three-element jointness (concept + route-framing + goal-bias) survives; the goal-bias element now has two sub-paths (direct/teleological + indirect/epistemic).
- **routeman §2.2 taxonomy:** RE-TESTED → CONSISTENT (REFINE/REFRAME classify the admitted epistemic routes).
- **§4.4 asymmetric-failure:** RE-TESTED → the anti-skip concern IS this principle; the gloss extension makes it bite at admission-time, not just candidate-time.

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:**
- The gloss needs the **epistemic axis** (the user's core insight is correct).
- It must be **goal-relative** ("sharpens the understanding the goal rests on, including a fuzzy goal itself"), NOT free-floating ("definition of things").
- Fuzzy-goal + abstract-concept **unify** under the epistemic axis (one addition, not two).
- The epistemic clause does **not** collapse routeman into sense-making/comprehend (enumerate-not-execute / "as routes" preserved).
- The definition must explicitly **license abstract/epistemic concepts** (anti-skip), an instance of LLM-operational-characteristics-as-design-input.
- Admission (gloss) **complements** classification (§2.2 REFINE), not duplicates.

**Eliminated:**
- "Reject the epistemic clause / keep goal-only" — KILLED (the user's skip-report is valid; goal-only is too strict).
- "Accept the user's wording as-is" — KILLED ("of things" is under-bounded → over-generalization).
- "The clause collapses routeman into sense-making/comprehend" — KILLED (enumerate-not-execute).
- "REFINE already covers it, no gloss change" — KILLED (admission ≠ classification).
- "§4.4 already handles the skip" — KILLED (§4.4 fires post-surfacing; the gloss frames what's surfaced).

**Remaining viable (downstream; out of scope):**
- Exact final wording (structural).
- WHERE the anti-skip license lives — gloss vs §4.4 vs both (structural).

### SV5 — Constrained Understanding

The refined definition adds a **goal-relative epistemic axis** to the teleological one, unifying the fuzzy-goal and abstract-concept cases, with an explicit abstractness-license — while preserving the goal-bias's discrimination (via the goal-relative bound) and routeman's enumerate-not-execute identity (via "as routes"). It is better than the user's wording because it bounds the part his "of things" left open.

---

## Phase 5 — Conceptual Stabilization

*Accommodation check: perspectives converged (the spec's existing REFINE+§4.4, the prior goal-bias, the collapse-neighbors, the user's rationale all point to "bounded epistemic axis"); no repeated patching. Stable.*

### SV6 — Stabilized Model

**Yes, the definition needs enhancing, and the user's instinct is right — with one bound added.** A concept's value as a route has **two axes**, and the prior gloss saw only one:

- **Teleological** — acting on the concept advances the goal (the prior gloss's "toward the goal").
- **Epistemic** — engaging/clarifying the concept sharpens the understanding the goal rests on (the user's "toward refined definition") — *including the goal itself when the goal is fuzzy.*

These are not two separate endpoints; they are the **direct and indirect paths to the same goal.** That framing is what keeps the epistemic clause from over-generalizing: it is bounded *goal-relative* ("the understanding the goal rests on"), not free-floating ("definition of things"). The user's wording carried the right insight but left the bound open; the refinement closes it.

This single epistemic axis handles **both** of the user's concerns at once, because they are the same underlying case — *teleological value unclear, epistemic value high*:
- **Fuzzy goal:** when the goal isn't crisp, you can't judge teleological value, but you can judge epistemic value; the most valuable routes sharpen the goal/understanding (and "including the goal itself" makes refining a fuzzy goal a legitimate route).
- **Abstract-but-necessary concepts:** these are exactly the low-obvious-teleological / high-epistemic concepts; the epistemic axis admits them.

The user's deeper worry — that an LLM enumerating routes will **skip** abstract concepts — is real and is an instance of the project's *LLM-operational-characteristics-as-design-input* principle (design the gloss around the LLM's known bias to drop non-obvious items). routeman's existing inclusion rule (§4.4: "missing a move is worse than including a marginal one; lean to inclusion") is necessary but **not sufficient**, because it acts on candidates already surfaced, whereas the skip happens earlier — the "toward the goal" framing biases the LLM to never surface the abstract candidate. So the definition must **explicitly license** abstract/epistemic concepts ("abstractness is not grounds to exclude"). Where that license is written — in the gloss, in §4.4, or both — is a structural placement question, deferred.

Crucially, the epistemic axis does **not** collapse routeman into /sense-making (which refines meaning) or /comprehend (which builds models): routeman *enumerates* "you could refine X" as a prescriptive route (movement-type REFINE/REFRAME/DIAGNOSE — already in §2.2); it does not *perform* the refinement. Propose, don't execute — the prior inquiry's "as routes" boundary holds on the epistemic axis exactly as on the teleological one. And admission (the gloss letting the concept in) complements classification (the REFINE type labeling it), so the spec's existing machinery absorbs the change.

**Best definition reached at this (meaning) layer** (exact wording is structural, deferred):
> *concept = a thing in the territory worth drawing in as a route — one whose engagement either **advances the goal** or **sharpens the understanding the goal rests on** (including a fuzzy goal itself). Abstractness is not grounds to exclude: a concept too abstract to obviously serve the goal is often the one the goal most depends on.*

**How SV6 differs from SV1:** SV1 saw "a reasonable addition that might over-generalize." SV6 sees the addition as the **goal-relative epistemic axis** — the correct second value-axis that unifies fuzzy-goal + abstract-concept, bounded so discrimination survives, licensed so the LLM won't skip, and non-collapsing because routeman proposes (not executes) refinement routes. The user's "of things" is tightened to "the understanding the goal rests on."

---

## Saturation / Telemetry

- **Perspective saturation:** last two perspectives (Phase/Calibration, Self-Reference) produced no new anchor types — saturating.
- **Ambiguity resolution ratio:** 6/6 resolved at HIGH (placement sub-question explicitly deferred, not left dangling).
- **SV delta:** clear (SV1 "reasonable but risky addition" → SV6 "goal-relative epistemic axis unifying two cases, bounded + licensed + non-collapsing").
- **Anchor diversity:** constraints/insights/structural-points/principles/meaning-nodes across 7 perspectives; not one-pillar (rests on two-axis framing AND goal-relative-bound AND admission-vs-classification AND enumerate-not-execute).
- **Failure modes checked:** Status Quo Bias (tested both the prior goal-only gloss and the user's wording; neither accepted whole — prior too strict, user's under-bounded); Premature Stabilization (6 ambiguities with counter-interpretations); Anchor Dominance (multiple independent anchors); Perspective Blindness (the uncomfortable over-generalization perspective checked head-on, Ambiguity 1); Clean Resolution Trap (the two-axis resolution tested against over-generalization on structural grounds, not waved); Self-Reference Blindness (external anchors: §2.2/§4.4 + collapse-neighbor specs + user's reported LLM behavior).

**Handoff to Decomposition:** structure to partition — (1) the two-axis claim (teleological + epistemic); (2) the goal-relative bound (vs the user's "of things"); (3) the fuzzy-goal/abstract-concept unification; (4) the anti-skip license + its deferred placement; (5) the non-collapse (enumerate-not-execute); (6) candidate final definition wording (Innovation's target) + the priors re-test. Candidate sub-questions for /decompose.
