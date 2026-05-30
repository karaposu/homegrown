## User Input

`devdocs/inquiries/2026-05-29_09-23__routeman_concept_as_route_identity/_branch.md` (prior output: surfacing.md; workspace in context — routeman spec, /comprehend spec, discipline taxonomy, prior diagnosis, sense-making spec, 19-00/20-35 findings)

Does "routeman should identify concepts and list them as routes" make sense as routeman's meaning-layer identity? Is "concept" the right unit (meta-enough + coverage)? Does "concept-as-route" stay prescriptive (routeman) or collapse into descriptive concept-listing (/comprehend, /surfacing)?

---

# Structural Sensemaking — Is "Concept-as-Route" the Right Routeman Identity?

## SV1 — Baseline Understanding

Initial read: the user proposes routeman's core operation is "identify concepts, list them as routes," with "concept" chosen for being meta + having coverage. On the surface this is appealing (concepts exist anywhere → standalone-friendly), but it brushes against the 19-00 inquiry's warning that "concepts/features aren't next-moves — that's /comprehend's territory." So the naive read is: "plausible, but risks collapsing routeman into a concept-lister."

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints:**
- C1 — Meaning-layer only; the fix (spec rewrite) is deferred. Output = understanding, not new spec text.
- C2 — The user accepts the OUTPUT TYPE (Route Map schema) as "more or less good" — so the answer must be compatible with the existing schema, not require replacing it.
- C3 — Must re-test, not parrot: the diagnosis (identity-relational), 20-35 (standalone), and especially 19-00 (concepts-aren't-next-moves).

**Key Insights:**
- K1 — Routeman's route schema (`cognitive_harness/routeman/references/routeman.md` §5.4) ALREADY pairs a **Direction** (human-readable route title — i.e., the concept/target) with a **Movement Type** (the verb: DEEPEN/DEVELOP/etc.). A route is already *concept + verb*. So "identify concepts" isn't foreign; it RE-WEIGHTS the existing pair to make the concept primary and the movement-type a secondary attribute.
- K2 — The substantive (hard) part of enumeration is identifying WHICH things in the territory are worth engaging. Movement-typing is downstream classification. So "identify concepts" names the generative core of what routeman already does; the verb-first framing ("enumerate moves") hides that the targets (concepts) are the real work.
- K3 — The same "concept" enters three disciplines, but the OPERATION differs: `/surfacing` tags it by **relevance** ("does this bear on the purpose?" — descriptive); `/comprehend` builds it into a predictive **model** ("how does this work?" — descriptive); `/routeman` frames it as a **route** ("what could you do with this toward the goal, and what to watch?" — prescriptive). The discriminator is the *operation on the concept*, not the concept.
- K4 — "Concept" is intrinsic to a territory; "the artifacts of a completed cognitive cycle" (the diagnosed relational identity) is not. A concept exists in a project, a codebase, an inquiry — any territory. So "identify concepts from a territory" is exactly the standalone/intrinsic framing the diagnosis called for.
- K5 — A concept "framed as a route" IS a next-move ("here is a concept you could move on next"). So concept-as-route preserves the next-move character — it just makes it noun-first (the thing) rather than verb-first (the action). Noun-first is MORE general: verb-first ("DEEPEN") presupposes ongoing work to deepen (loop-ish); noun-first works with or without prior work.

**Structural Points:**
- S1 — The proposal has three elements, not one: **concept** (the unit) + **route-framing** (the "as routes" packaging) + **goal-bias** (implicit — routes are toward a goal). They are separable but jointly necessary.
- S2 — Routeman's prescriptive residual (§2.4 adaptive-guidance; the LAYER-2 "Descriptive-Only Collapse" failure mode) is the load-bearing thing that "as routes" must carry. Drop it → routeman becomes a concept-lister (surfacing/comprehend).
- S3 — The movement-type taxonomy (16 types) does not disappear under the proposal; it becomes "how to engage the concept" — a per-route attribute rather than the primary unit.

**Foundational Principles:**
- P1 — Disciplines are distinguished by their OPERATION (the transform), not by their raw material. (Taxonomy: surfacing/comprehend/routeman can all touch "concepts"; what differs is what they DO.)
- P2 — A discipline's identity should be intrinsic (the operation on a territory), not relational (its loop-position). [from the diagnosis, re-tested below]

**Meaning-Nodes:**
- M1 — *concept-as-route* — a concept framed as a typed, prescriptive direction toward a goal.
- M2 — *descriptive-vs-prescriptive boundary* — the axis separating routeman (prescriptive) from comprehend/surfacing (descriptive).
- M3 — *noun-first vs verb-first enumeration* — concept-primary vs move-primary framing.
- M4 — *three-element jointness* — concept + route-framing + goal-bias must travel together.

### SV2 — Anchor-Informed Understanding

The proposal is not "list concepts" (which would be the 19-00 collapse). It is "identify concepts AND frame each as a route." The concept is the *raw material*; the route-framing is routeman's *operation* on it. Read this way, the proposal doesn't move routeman toward /comprehend — it keeps routeman prescriptive while making its unit (the concept) intrinsic to any territory. The existing route schema already supports it (Direction = concept; Movement Type = how to engage).

*Meta-Inspection (H4 concept-names, H5 motivating-examples): "concept" matches the user's exact word; flag for Phase-3 load-bearing-concept test (is it structural or an over-broad proxy?). The motivating example is one proposal from one user turn — but it's a design proposal, not a specific-instance generalization, so the specific-vs-pattern risk is low.*

---

## Phase 2 — Perspective Checking

**Technical / Logical (the specs):** Routeman §1.1 verb-meaning is "enumerate possible next moves… toward a goal." §5.4 route = Direction + Movement Type + reachability + guidance. The proposal maps cleanly: Direction becomes the identified concept; the rest is the route-framing. No schema conflict (consistent with C2). New anchor → **K6: the proposal is schema-compatible; it re-describes the unit, not the output.**

**Human / User:** The user explicitly says "list them as ROUTES" and explicitly accepts the route-map output. Compare to 19-00, where the user wanted "a list of concepts, features, project directions" (read as a descriptive inventory). The user has *internalized* the 19-00 lesson — they're no longer asking for a bare concept-list; they're asking for concepts-as-routes. New anchor → **K7: the "as routes" clause is the user's own correction of the 19-00 mistake, not a repeat of it.**

**Strategic / Long-term:** The project's end-goal (multi-head, standalone reuse) wants disciplines whose identity survives being lifted out of the loop. "Identify concepts in a territory" survives that lift; "consume a completed cycle's artifacts" does not. The proposal is end-goal-aligned.

**Risk / Failure (the collapse risk — the load-bearing perspective):** If "as routes" is dropped or treated as cosmetic, "identify concepts" IS /surfacing (relevance-tagged items) or /comprehend (modeled components). The risk is real and must be named in the answer: the prescriptive route-framing is non-negotiable; a bare concept-list is the collapse.

**Resource / Feasibility:** The change is a re-description of the unit, not a new mechanism — the enumeration, typing, reachability, and guidance machinery all survive. Low-cost at the meaning layer.

**Definitional / Internal Consistency:** Does "concept-as-route" contradict routeman's own §1.1? No — §1.1's "next moves toward a goal" is preserved (a concept-as-route IS a next move). It contradicts only the *relational* sections (§1.2/§1.5), which the diagnosis already flagged for change. So the proposal is consistent with the part of routeman that's sound and replaces the part that's broken. New anchor → **K8: concept-as-route is consistent with §1.1 and supersedes the diagnosed §1.2/§1.5 — it's the positive form of the diagnosis's fix.**

**Phase / Calibration-State:** Not phase-dependent (an identity question, not a calibration-contingent rule).

**Self-Reference (failure mode #6 — REQUIRED):** I'm using a discipline (sense-making) to evaluate routeman's identity. External anchors used: the actual routeman/comprehend/surfacing specs + the discipline taxonomy's primitive-profile distinctions (checkable text), and the user's own coherence across 19-00→now (historical). The descriptive-vs-prescriptive discriminator is grounded in the taxonomy's role descriptions, not in sense-making's vocabulary. Check passed.

### SV3 — Multi-Perspective Understanding

The proposal **makes sense and is stronger than "makes sense"**: it is the *positive, intrinsic re-identity* that resolves the diagnosed identity-relational problem. Routeman becomes: "identify the concepts in a territory that can be engaged as directions toward a goal, and frame each as a typed, prescriptive route." The collapse risk is real but is exactly what the "as routes" clause guards against — and the user already supplied that clause. The one precision to add: the three elements (concept + route-framing + goal-bias) are jointly load-bearing; "concept" alone over-generalizes.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — Does "identify concepts" collapse routeman into /comprehend or /surfacing? (the load-bearing test, OT2)

**Strongest counter-interpretation:** The 19-00 finding's position — "concepts/features/directions are NOT next-moves; they're artifact-modeling, which is /comprehend's territory." So "routeman identifies concepts" makes routeman do comprehend's job.

**Why the counter fails (structural grounds):** The 19-00 warning was against a *descriptive concept-model/inventory* (here-are-the-parts). The proposal is "concepts **as routes**" — a *prescriptive* framing (here's a concept you could move on, of this movement-type, reachable under these conditions, watch for this). The discriminator is the OPERATION, grounded in the discipline taxonomy: /surfacing tags concepts by relevance; /comprehend builds them into a predictive model; /routeman frames them as typed directions toward a goal with per-route guidance. Same raw material, different operation. The "as routes" clause is precisely the safeguard that keeps the operation prescriptive. So 19-00's worry is *satisfied* by the proposal's own wording, not violated by it.

**Confidence:** HIGH (the discriminator is grounded in the taxonomy's documented role distinctions + routeman's prescriptive residual §2.4, not in assertion).

**Resolution:** "Identify concepts" does NOT collapse routeman — provided "as routes" (the prescriptive framing) is treated as load-bearing, not cosmetic. A bare concept-list WOULD collapse; concept-as-route does not.
**What is now fixed:** the prescriptive route-framing is the non-negotiable discriminator.
**What is no longer allowed:** reading the proposal as "routeman outputs a concept inventory."
**Model change:** the concept is routeman's *input-target*; the route is its *output operation*.

### Ambiguity 2 — Is "concept" too broad (over-generalization into uselessness)?

**Counter-interpretation:** If everything is a "concept," the term gives no guidance on what to enumerate — coverage without discrimination, which is itself a failure.

**Why it fails (structural grounds):** Routeman doesn't enumerate ALL concepts — it enumerates concepts *that can be framed as routes toward the goal*. The **goal-bias** + the **route-framing** supply the discrimination that the bare noun "concept" lacks. "Concept" provides meta-ness + coverage (the user's two justifications, both correct); the goal + route-framing provide the edge. The term is right *as the unit*, paired with the framing that bounds it.

**Confidence:** HIGH. **Resolution:** "concept" is the right unit-term (meta + coverage), but it is load-bearing ONLY in the triple {concept + route-framing + goal-bias}. Concept alone = too broad (→ surfacing/comprehend); concept+route+goal = exactly routeman.
**What is now fixed:** the three elements are jointly necessary; the identity statement must bind them, not lead with "concept" alone.

### Ambiguity 3 — Does concept-primary weaken the movement-type taxonomy (routeman's signature)?

**Counter-interpretation:** Making concepts primary demotes the 16-type movement taxonomy, eroding routeman's typed character.

**Why it fails:** The taxonomy survives as a per-route attribute — "how to engage this concept" (DEEPEN it / DEVELOP it / INVESTIGATE it). The route schema already carries both Direction (concept) and Movement Type; the proposal re-weights which is primary, not which exists. Routeman's signature (typed + prescriptive + reachability-checked) is fully preserved.

**Confidence:** HIGH. **Resolution:** taxonomy preserved as per-route typing; concept-primary is a unit re-weighting, not a taxonomy removal.

### Ambiguity 4 — Load-bearing concept test on "concept" (user-language + proxy-vs-structural)

**Test:** Is "concept" a real structural unit or an incidental over-broad proxy? Does it match the user's language?

**Resolution:** It matches the user's exact language. It is structural (it names routeman's input-target = a thing in the territory engageable as a direction). But it is broad enough that the eventual identity statement should give it a tight gloss — e.g., "concept = a thing in the territory that could be engaged as a direction toward the goal" — to pre-empt the over-generalization reading. Confidence HIGH that "concept" is the right term; MEDIUM that the bare word suffices in the spec without that gloss. (Gloss design is structural-layer → flagged, not resolved here.)

### Ambiguity 5 — Re-test of inherited priors

- **Diagnosis (identity-relational → should be intrinsic):** RE-TESTED → concept-as-route IS the intrinsic re-identity (concept + goal exist in any territory). The diagnosis named the disease; this names the cure. AFFIRMED + extended.
- **20-35 (standalone, domain-agnostic):** RE-TESTED → concept-as-route is the standalone-compatible unit (concepts are domain-agnostic). Consistent.
- **19-00 (concepts aren't next-moves):** RE-TESTED → REFINED: a descriptive concept-model isn't routeman (19-00 correct); a prescriptive concept-as-route IS routeman (the "as routes" clause is the distinction 19-00 lacked under its pre-20-35 frame).

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:**
- Concept-as-route makes sense AND is the intrinsic re-identity that resolves the diagnosed identity-relational problem (not merely "plausible").
- The three elements {concept + route-framing + goal-bias} are jointly load-bearing.
- "As routes" (the prescriptive framing) is the non-negotiable discriminator from /comprehend (model) and /surfacing (relevance).
- The 16-type movement taxonomy survives as a per-route "how to engage" attribute.
- The existing Route Map schema already supports this (Direction = concept; Movement Type = verb), satisfying the user's "output type is good" premise.

**Eliminated:**
- "Concept-as-route collapses routeman into /comprehend" — KILLED (the as-routes prescriptive safeguard; same material, different operation).
- "Concept is too broad to be a useful unit" — KILLED (goal + route-framing supply the discrimination).
- "This repeats the 19-00 mistake" — KILLED (the user's "as routes" is the internalization of 19-00's lesson).
- "Concept-primary erases the movement taxonomy" — KILLED (taxonomy survives as a per-route attribute).

**Remaining viable (downstream; out of scope here):**
- Exact identity-statement wording + whether "concept" needs a tighter gloss term (structural layer).
- How movement-typing attaches to concepts procedurally (process layer).

### SV5 — Constrained Understanding

Yes, it makes sense. Precisely: routeman's intrinsic identity is "**identify the concepts in a territory that can be engaged as directions toward a goal, and frame each as a typed, prescriptive route.**" "Concept" is the right unit (meta + coverage) but only inside the triple {concept + route-framing + goal-bias}; the route-framing is what keeps routeman prescriptive and distinct from its descriptive neighbors. This is the positive form of the diagnosed fix: it replaces the relational identity (loop-position + cycle-input) with an intrinsic one (concepts in a territory + a goal).

---

## Phase 5 — Conceptual Stabilization

*Accommodation check: perspectives converged (the proposal + the diagnosis + the taxonomy + the existing schema all point the same way); no repeated model-patching. Stable.*

### SV6 — Stabilized Model

**The proposal makes sense — and more: it is the intrinsic re-identity that solves the problem the prior diagnosis found.**

Routeman's sound core (its §1.1 verb-meaning and its prescriptive route output) is preserved; what changes is the *unit of work*. Instead of "next move" (verb-first, which quietly presupposes a prior cycle to move on — the relational identity the diagnosis flagged), the unit becomes the **concept** (noun-first: a thing in the territory worth engaging), framed **as a route** (the prescriptive packaging: a typed direction toward a goal, with reachability and guidance). 

Three things travel together and all three are load-bearing:
1. **Concept** — gives the unit its meta-ness and coverage (anything in any territory can be a concept; this is what makes routeman standalone and domain-agnostic, satisfying the 20-35 commitment).
2. **Route-framing** ("as routes") — gives the prescriptive edge that distinguishes routeman from its descriptive neighbors: `/surfacing` tags concepts by relevance; `/comprehend` builds concepts into a predictive model; only `/routeman` frames concepts as typed, actionable directions. Drop this and routeman collapses into a concept-lister.
3. **Goal-bias** — gives discrimination: routeman doesn't enumerate all concepts, only those engageable as directions toward the goal. This is what stops "concept" from over-generalizing into uselessness.

The one caveat for the eventual fix (structural layer, not decided here): the identity statement must *bind the three together* and likely give "concept" a tight gloss ("a thing in the territory that could be engaged as a direction toward the goal"), because "concept" alone — without route-framing and goal-bias — would read as the descriptive concept-inventory the 19-00 inquiry correctly warned against.

This also resolves the 19-00 tension cleanly: 19-00 was right that a *descriptive concept-model* is `/comprehend`'s job, not routeman's; it was working before the 20-35 standalone overturn and without the "as routes" framing. With both, the synthesis is: **concepts are routeman's input-targets; concepts-as-routes are its prescriptive output.** The user's own phrasing already contains the safeguard.

**How SV6 differs from SV1:** SV1 saw a plausible-but-risky proposal that might collapse routeman into a concept-lister. SV6 sees the proposal as the *correct intrinsic re-identity* — with the collapse risk precisely located (it only fires if "as routes" is dropped) and the load-bearing precision named (the concept + route-framing + goal-bias triple, with a gloss to bound "concept").

---

## Saturation / Telemetry

- **Perspective saturation:** the last two perspectives (Phase/Calibration, Self-Reference) produced no new anchor types — approaching saturation.
- **Ambiguity resolution ratio:** 5/5 resolved (4 at HIGH, 1 at HIGH-unit/MEDIUM-bare-word); 0 left OPEN.
- **SV delta:** large (SV1 "plausible but risky" → SV6 "the correct intrinsic re-identity, with a precisely-located collapse risk and a three-element precision") — genuine shift.
- **Anchor diversity:** constraints, insights, structural points, principles, meaning-nodes across 7 perspectives — multi-dimensional; not one-pillar (rests on the descriptive-vs-prescriptive discriminator AND the schema-already-supports-it anchor AND the diagnosis-resolution AND the three-element jointness).
- **Failure modes checked:** Status Quo Bias (didn't reflex-defend "next-moves" NOR reflex-accept the user's proposal — tested both; the proposal won on grounds, and the existing §1.1 was preserved); Premature Stabilization (5 ambiguities with counter-interpretations); Anchor Dominance (multiple independent anchors); Perspective Blindness (the uncomfortable "is this a 19-00 regression?" checked head-on, Ambiguity 1 + K7); Clean Resolution Trap (the collapse risk tested structurally, not waved away — "as routes" must be load-bearing); Self-Reference Blindness (external anchors: specs + taxonomy + user's historical coherence).

**Handoff to Decomposition:** the stabilized understanding has visible structure to partition — (1) the "identify concepts" operation claim (OT1); (2) the "as routes" prescriptive discriminator vs the three descriptive neighbors (OT2); (3) the term "concept" — meta/coverage vs over-generalization + the gloss need (OT3); (4) the three-element jointness; (5) the diagnosis/19-00/20-35 re-test. Candidate sub-questions for /decompose.
