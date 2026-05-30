## User Input

`devdocs/inquiries/2026-05-29_09-23__routeman_concept_as_route_identity/_branch.md` (prior outputs: surfacing.md, sensemaking.md, decomposition.md; workspace in context). Generate candidate IDENTITY STATEMENTS for "what routeman should do" (concept-as-route), binding concept+route-framing+goal-bias, plus alternative framings as foils. Meaning-layer; not the spec rewrite.

---

# Structural Innovation — Candidate Identity Statements for Routeman

## Phase 1 — Seed + Methodology-Mode Consideration

**Seed** (type: Question + Gap): "What is the one-sentence identity statement for what routeman should do, binding concept + route-framing + goal-bias — and what alternatives must it beat?"

**Methodology-mode consideration:**
- **Inherited mode:** generate candidate identity-statements + foils → **Generator-weighted exploration** (breadth of phrasings) with **Framers** producing the alternative framings (inversion → move-first / concept-only foils; constraint-removal → goal-less foil).
- **Alternative mode named:** Minimum-mechanism (1G+1F). Under it: fewer candidates, faster — but would under-cover the foils the user needs to choose against.
- **Decision:** full coverage (7 mechanisms), generator-weighted for the statement variants + framers for the foils. `Methodology-mode: full-coverage, generator-weighted; reason: the user wants candidate statements to choose among + foils to test against, which needs breadth (generators) and deliberate alternatives (framers).`

## Phase 2 — Generate (7 mechanisms)

### Lens Shifting (Framer)
- *generic (any-territory lens):* "Routeman draws the concepts latent in a territory into present attention as typed, prescriptive routes toward a goal." → **ID-A**
- *focused (the-transform lens):* "Routeman turns a territory's concepts into typed directions — taking each thing worth engaging and framing it as a prescriptive next-move toward a goal, without choosing among them." → **ID-C**
- *contrarian (status-quo lens):* keep the move-first framing → "Routeman enumerates the possible next moves from a state toward a goal, typed and reachability-checked." → **ID-F (foil)**

### Combination (Generator)
- Combine the existing §1.1 "enumerate toward a goal" + the concept unit + the route packaging → "From a state toward a goal, routeman enumerates the concepts worth engaging and emits each as a typed route (direction + how-to-engage + reachability + guidance), without selecting." → **ID-B**

### Inversion (Framer)
- Belief "routeman's unit is the move" → invert → "the unit is the concept; the move is an attribute of the concept's route." *Depth-check, system-level:* "routeman doesn't enumerate actions; it enumerates a territory's engageable concepts and types each by how it could be engaged." → supports **ID-A/ID-C** (concept-primary, move-as-attribute).
- Belief "the 'as routes' framing is needed for prescription" → invert → "what if concept-listing alone suffices?" → "Routeman identifies the concepts in a territory relevant to a goal." → **ID-D (foil: concept-only, no route-framing)**.

### Constraint Manipulation (Framer) — both directions
- *REMOVE* the goal constraint → "Routeman identifies and lists all the concepts in a territory as routes." → **ID-E (foil: goal-less)**.
- *ADD* the constraint "must be standalone — name no loop/cycle" → forces the identity to reference a *territory* + *concept* + *route* + *goal* with zero loop-position → reinforces **ID-A** (and exposes that ID-B's "from a state" risks re-importing the §1.4 relational "current state" — see Test).

### Absence Recognition (Generator) — patch + redesign
- *patch-level (missing):* the current §1.1 says "next moves" but never names the *unit as a concept* — the explicit unit-naming is absent. → ID-A/B/C add it.
- *redesign-level (from scratch):* a fresh standalone discipline's identity would name territory + concept + route-transform + goal, no loop-position. → reinforces **ID-A**.
- *redesign-level (already-present-in-different-form):* routeman's route schema §5.4 **Direction** field already IS the concept — the redesign just *promotes* it from a schema field to the identity unit. (So this is recognition, not invention.)

### Domain Transfer (Generator) — native + different
- *native (software/UX):* a **menu** lists the dishes (concepts) you could order (routes), each with a description (guidance), without ordering for you. Names *things* framed as *choices*. → reinforces concept-as-route; suggests crisp phrasing.
- *different (cartography):* a **map** names places (concepts) and the typed paths to them (routes); you pick. Nuance surfaced: is a concept a *destination* or the *route*? The user's "list concepts AS routes" unifies them — the concept is the route's target/direction. → confirms concept and route are unified, not separate layers.

### Extrapolation (Generator)
- Extend to the multi-head / standalone end-goal: an identity naming "concepts in a territory" scales to any territory a parallel head operates on; "a completed cycle's artifacts" does not. → validation that the concept framing is the future-compatible one (not a new candidate).

## Inherited Frame Audit (between Generate and Test)

**Seed's central assumption (from sensemaking):** "concept-as-route is the right identity."
**Challenge scan:** challenged in the set? **YES** — ID-F (move-first) challenges from the not-far-enough side; ID-D (concept-only) from the too-far side; ID-E (goal-less) challenges the goal element. → **Audit does NOT fire** (the inherited frame is explicitly challenged from three directions).

## Phase 3 — Test (5-test cycle)

| Candidate | Novelty | Scrutiny survival | Fertility | Actionability | Mechanism independence | Disposition |
|---|---|---|---|---|---|---|
| **ID-A** "draws the concepts latent in a territory into present attention as typed, prescriptive routes toward a goal" | HIGH (intrinsic; names concept+route+goal; "territory" not "cycle") | Survives — binds all three; "typed, prescriptive routes" carries the discriminator; "territory" avoids the relational trap | HIGH (directly aims the spec rewrite) | HIGH | Lens-shift + Combination + Absence-redesign + Inversion converge | **SURVIVE (strong; the precision candidate)** |
| **ID-C** "turns a territory's concepts into typed directions… a prescriptive next-move toward a goal, without choosing" | HIGH (the "turn concepts into directions" transform is crisp + memorable) | Survives — "turns X into Y" names the operation cleanly; "without choosing" preserves the no-select NOT-list | HIGH | HIGH | Lens-shift + Domain-transfer (menu/map) | **SURVIVE (strong; the crisp candidate)** |
| **ID-B** "from a state toward a goal, enumerates the concepts worth engaging, emits each as a typed route…" | MED | **REFINE** — good, but "from a state" risks re-importing §1.4's relational "current state" (the diagnosed defect). Fix: replace "state" with "territory." Refines toward ID-A. | MED | MED | Combination | **REFINE → fold into ID-A** (drop "state", use "territory") |
| **ID-D** (foil) "identifies the concepts in a territory relevant to a goal" | — | **KILL** — no route-framing → collapses into /surfacing (relevance-tag) or /comprehend (model). Descriptive, not prescriptive. | — | — | Inversion | **KILL.** Seed: *confirms "as routes" is load-bearing.* |
| **ID-E** (foil) "identifies and lists all the concepts in a territory as routes" | — | **KILL** — no goal-bias → "all concepts" → over-generalizes; no discrimination. | — | — | Constraint-REMOVE | **KILL.** Seed: *confirms goal-bias is load-bearing.* |
| **ID-F** (foil) "enumerates the possible next moves from a state toward a goal, typed and reachability-checked" | LOW (the current identity) | **REFINE/partial** — not wrong, but verb-first ("moves") quietly presupposes prior work to move on (the relational flavor the diagnosis flagged); concept-first is more standalone + intrinsic | LOW | — | (status quo) | **REFINE → the thing being improved upon; concept-first (ID-A/C) supersedes it** |

*Survival-Bias guard:* the uncomfortable alternatives (ID-D concept-only, ID-F move-first, ID-E goal-less) were GENERATED and tested, not skipped. ID-F (the status-quo / don't-change-it option) was given a fair test and lost on standalone-ness, not on discomfort.

## Assembly Check

The two strong survivors (ID-A precision, ID-C crispness) are the **same identity in two registers**. The emergent assembly:

> **Routeman turns the concepts latent in a territory into typed, prescriptive routes toward a goal — drawing each thing worth engaging into present attention as a direction (with how-to-engage + reachability + guidance), without selecting which to take.** 
> (ID-C's "turns concepts into directions" transform + ID-A's precision on territory/concept/route/goal.)

**The emergent + non-obvious result:** the three foils each drop ONE of the three load-bearing elements and fail — ID-D drops route-framing (→ collapses to descriptive), ID-E drops goal-bias (→ over-generalizes), ID-F keeps move-first instead of concept-first (→ stays relational). So the foil set **empirically triangulates sensemaking's "three jointly load-bearing" claim**: each element is proven necessary by the failure of the candidate that omits it. The foils aren't waste — they ARE the validation of the three-element jointness.

## Mechanism Coverage (Telemetry)

- Generators applied: **4 / 4** (Combination, Absence Recognition [patch + both redesign directions], Domain Transfer [native + different], Extrapolation)
- Framers applied: **3 / 3** (Lens Shifting [3 variations], Constraint Manipulation [both directions], Inversion [2 beliefs, depth-checked])
- Convergence: **YES** — Lens-shift + Combination + Absence-redesign + Inversion converge on concept-as-route (ID-A/C) → HIGH confidence
- Survivors tested: 6 / 6 (2 SURVIVE, 2 REFINE, 2 KILL)
- Inherited Frame Audit: ran; did NOT fire (frame challenged by ID-D/E/F)
- Failure modes observed: **none** — Premature Evaluation avoided (generate-then-test); Single-Mechanism-Trap avoided (7); Early-Frame-Lock avoided (didn't stop at ID-A; produced ID-C + foils); Innovation-Without-Grounding avoided (all tested); Mechanism-Exhaustion N/A; **Survival Bias guarded** (foils generated + tested, incl. the status-quo ID-F)
- **Overall: PROCEED** — full coverage, convergence on concept-as-route, foils triangulate the three-element jointness.

**Handoff to Critique:** adjudicate the assembled identity statement (ID-A/C merged) — does it survive prosecution on the collapse axis (does "typed, prescriptive routes" genuinely hold the line against /comprehend + /surfacing)? Confirm the three foils' KILLs are correct (each element truly load-bearing). Confirm the statement resolves the diagnosis + refines 19-00 + preserves schema/taxonomy (P5). Render SURVIVE/REFINE/KILL + the final "what routeman should do" verdict.
