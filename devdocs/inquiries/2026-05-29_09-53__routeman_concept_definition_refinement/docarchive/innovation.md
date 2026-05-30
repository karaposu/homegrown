## User Input

`devdocs/inquiries/2026-05-29_09-53__routeman_concept_definition_refinement/_branch.md` (prior outputs: surfacing.md, sensemaking.md, decomposition.md; workspace in context). Generate candidate FINAL concept definitions (two-axis + goal-relative bound + abstractness-license), plus foils. Meaning-layer; not the spec rewrite.

---

# Structural Innovation — Candidate Final Concept Definitions

## Phase 1 — Seed + Methodology-Mode Consideration

**Seed** (type: Question): "What is the best final wording of the concept definition binding the two axes + the goal-relative bound + the abstractness-license — and what alternatives must it beat?"

**Methodology-mode consideration:**
- **Inherited mode:** generate candidate definitions + foils → **Generator-weighted exploration** + Framers for the foils.
- **Alternative named:** Minimum-mechanism (1G+1F) — rejected: would under-cover the register question (declarative gloss vs imperative anti-skip rule) that turns out to matter.
- **Decision:** full coverage. `Methodology-mode: full-coverage, generator-weighted; reason: need wording variants + foils + the register split.`

## Phase 2 — Generate (7 mechanisms)

### Lens Shifting (Framer)
- *generic (definitional lens):* the merged sensemaking statement → **CD-1**.
- *focused (LLM-enumerator's lens):* phrase it as an instruction the route-listing LLM reads → **CD-2** (imperative, with explicit "don't skip abstract").
- *contrarian (minimalist lens):* compress to a one-liner → **CD-3**.

### Combination (Generator)
- Combine the two axes + bound + license into one declarative sentence → **CD-1**: *"concept = a thing in the territory worth drawing in as a route — one whose engagement either advances the goal, or sharpens the understanding the goal rests on (including a fuzzy goal itself); abstractness is not grounds to exclude."*

### Inversion (Framer)
- Belief "include only goal-servers" → invert → "include goal-servers AND goal-clarifiers." *Depth-check, system-level:* the unit is "anything engageable as a *direction*, where direction = toward-the-goal OR toward-a-clearer-grasp-of-the-goal" — i.e., **the two axes are two senses of one word, "direction."** → tightens **CD-1/CD-3**.
- Belief "the definition is one declarative sentence" → invert → "maybe it's TWO artifacts: a declarative gloss + an imperative enumeration rule." → surfaces the **register split** (see Assembly).

### Constraint Manipulation (Framer) — both directions
- *ADD* "must be in the territory" → keeps the unit from generating-from-nothing (preserves routeman's NOT-list: no items beyond what's reachable). Retained in all candidates.
- *REMOVE* "must be obviously helpful" → this removed constraint IS the skip-cause; removing it is exactly the anti-skip license. → grounds **CD-2**'s "don't skip for abstractness."

### Absence Recognition (Generator) — patch + redesign
- *patch (missing from the user's wording):* the goal-relative bound + the explicit license. CD-1 adds both.
- *redesign (from scratch):* the definition is read AT ENUMERATION TIME by an LLM — so an **operational/imperative** form (CD-2) may serve better than a declarative gloss; the abstractness-license especially wants imperative register ("do not skip…").
- *already-present-in-different-form:* the "don't skip / lean to inclusion" content already exists in routeman §4.4 (asymmetric-failure) — so the license may belong THERE (as an enumeration rule), with the gloss carrying the two-axis+bound. (Placement = deferred-structural; flagged.)

### Domain Transfer (Generator) — native + different
- *native (research agenda):* a research agenda lists open *questions* (epistemic) alongside *tasks* (teleological); abstract open questions are first-class, not dropped. → reinforces the two-axis + anti-skip.
- *different (medical triage):* triage includes "needs more diagnosis" items (epistemic) alongside "treat now" items (teleological). → reinforces that epistemic items are legitimate routes.

### Extrapolation (Generator)
- As work gets earlier/fuzzier, the epistemic axis dominates (you mostly don't yet know the goal crisply). So the definition should present the epistemic axis as co-equal, not a footnote — front-load it for fuzzy-goal situations. → validates CD-1's structure.

## Inherited Frame Audit

**Seed's central assumption (from sensemaking):** "two-axis, goal-relative-bounded, abstractness-licensed."
**Challenge scan:** challenged? YES — foil CD-D (the user's literal under-bounded wording) and foil CD-E (goal-only revert) challenge from the loose and strict sides. → **Audit does NOT fire.**

## Candidate set

- **CD-1** (declarative gloss): *"a thing in the territory worth drawing in as a route — one whose engagement either advances the goal, or sharpens the understanding the goal rests on (including a fuzzy goal itself); abstractness is not grounds to exclude."*
- **CD-2** (operational/imperative, LLM-facing): *"When listing routes, treat as a concept anything in the territory you could take as a direction — because acting on it moves toward the goal, OR because clarifying it sharpens the goal or what the goal rests on. Do not skip a thing for being too abstract; the abstract ones are often the most load-bearing."*
- **CD-3** (compressed): *"a thing in the territory engageable as a direction — toward the goal, or toward a sharper grasp of the goal or what it rests on; abstract or concrete."*
- **CD-D** (foil — user's literal): *"…toward a relevant goal, or toward better/refined definition of things."*
- **CD-E** (foil — goal-only revert): *"…engageable as a direction toward the goal."*

## Phase 3 — Test (5-test cycle)

| Candidate | Novelty | Scrutiny survival | Fertility | Actionability | Mech. independence | Disposition |
|---|---|---|---|---|---|---|
| **CD-1** declarative | HIGH | Survives — binds both axes; goal-relative bound; license present; "as a route" keeps it prescriptive | HIGH (the gloss to drop in) | HIGH | Combination + Lens + Inversion converge | **SURVIVE (the definition)** |
| **CD-2** imperative | HIGH | Survives — best serves the anti-skip (it's an instruction to the enumerator) — BUT imperative is enumeration-RULE register, not definition register; its "do not skip" tail reads as a §4.4-style rule, not a gloss | HIGH | Lens + Absence-redesign + Constraint-REMOVE | **SURVIVE — but as the paired anti-skip RULE, not the gloss itself** |
| **CD-3** compressed | MED | Survives; clean one-liner; but drops the explicit abstractness-license (relies on the reader to infer "abstract or concrete" covers it) | MED | Lens + Inversion | **REFINE → good short form; keep the license explicit somewhere** |
| **CD-D** (foil) user's literal | — | **REFINE** — right insight, but "definition of things" is unbounded → over-generalizes (the prior goal-bias's discrimination is lost) | — | — | **REFINE → "of things" tightened to "the understanding the goal rests on"** |
| **CD-E** (foil) goal-only | — | **KILL/superseded** — too strict; skips abstract concepts (the failure the user reported) | — | — | **superseded by CD-1** |

*Survival-Bias guard:* the goal-only revert (CD-E, the "don't change anything" option) and the user's literal wording (CD-D) were both generated and tested, not skipped.

## Assembly Check

The strong survivors split by **register**, and that split is the emergent result:

> **The definition is best expressed as TWO paired artifacts:**
> - **The gloss (declarative — CD-1):** *concept = a thing in the territory worth drawing in as a route, whose engagement either advances the goal or sharpens the understanding the goal rests on (including a fuzzy goal itself).* (the two axes + the goal-relative bound)
> - **The paired anti-skip enumeration rule (imperative — CD-2's tail):** *Do not skip a thing for being too abstract; the abstract ones are often the most load-bearing.* (the license)

**Emergent + non-obvious:** the abstractness-license naturally takes *imperative* register (an instruction to the enumerating LLM), which is the register of an **enumeration rule**, not a **definition**. This partially answers the deferred placement question (P3): the two-axis+bound belongs in the **gloss**; the anti-skip license reads more naturally as an **enumeration rule paired with routeman's §4.4 asymmetric-failure principle** ("lean to inclusion") — extended to say "abstractness specifically is not a skip-reason." The final structural placement is still deferred, but innovation surfaces that the content wants two registers/homes, not one.

The foils confirm the gloss's two load-bearing parts: CD-D's failure (drop the bound) proves the **goal-relative bound** is necessary; CD-E's failure (drop the epistemic axis) proves the **epistemic axis** is necessary.

## Mechanism Coverage (Telemetry)

- Generators applied: **4 / 4** (Combination, Absence Recognition [patch + both redesign directions], Domain Transfer [native + different], Extrapolation)
- Framers applied: **3 / 3** (Lens Shifting [3], Constraint Manipulation [both directions], Inversion [2 beliefs, depth-checked — surfaced the register split])
- Convergence: **YES** — Combination + Lens + Inversion converge on CD-1 (the gloss); Absence-redesign + Constraint-REMOVE converge on CD-2 (the anti-skip rule) → HIGH confidence, with the two-artifact split as the emergent
- Survivors tested: 5 / 5
- Inherited Frame Audit: ran; did NOT fire (foils challenge from both sides)
- Failure modes observed: **none** — generate-then-test; 7 mechanisms; didn't lock on CD-1 (produced CD-2 + the register split); all tested; **Survival Bias guarded** (goal-only revert + user's literal both tested)
- **Overall: PROCEED** — full coverage, convergence on the gloss + paired rule, foils triangulate the bound + the axis.

**Handoff to Critique:** adjudicate the two-artifact result — is the gloss (CD-1) the right declarative definition (does the goal-relative bound genuinely prevent over-generalization while admitting abstract concepts)? Is splitting the anti-skip license into a paired enumeration rule (CD-2) sound, or does it belong in the gloss? Confirm the foils' verdicts (bound + epistemic axis each load-bearing). Confirm non-collapse + the priors re-test. Render the final definition verdict.
