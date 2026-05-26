# Sensemaking — routeman discipline design

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/_branch.md`

## SV1 — Baseline Understanding

The user proposes a new discipline called `routeman` whose stated job is "listing all possible next moves we can do, together with some movement types." It is presented as functionally equivalent to `/navigation` but renamed so the corpus baggage attached to "navigation" stops contaminating reasoning about the discipline. The user wants discussion of how routeman fits the endgoal, what features it should have, and what attributes it should have, with permission to borrow from canonical navigation where canon. First-impression read: this is a rename-driven redesign — the rename rationale is cognitive-hygiene, and the design space is whatever survives that rationale.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1** — Layer Commitment is MEANING (per `_branch.md`); structural/process layers are out of scope for this run.
- **C2** — Synthesis Trigger fires; CONCLUDE will enforce an `Inherited Commitments Re-test` section against 6 prior outputs.
- **C3** — Routeman's name and content must be articulable independently of the `/navigation` corpus, or the rename's whole rationale collapses.
- **C4** — The Boundary category in `docs/discipline_taxonomy.md` is 2-member-saturated (R backward + N forward) with admission rule "new temporal direction or it's not Boundary." Routeman cannot be a third Boundary; it must occupy the forward-Boundary slot by replacing `/navigation`.
- **C5** — Routeman is enumeration-first (per user's "listing all possible") and per the multi-head endgame architecture (memory + finding 57). Selection-first framings are eliminated.
- **C6** — Routeman has an input-dependency on aggregated cycle output (per finding 57 + canonical `/navigation` §"Step 1" + §"The Transform"). It cannot be a freestanding discipline.
- **C7** — Discipline runtime specs must not contain outbound pointers to design-history or theory folders (per the project's "disciplines self-contained" feedback memory). This bounds routeman's eventual SKILL.md but is structurally relevant here because it constrains how lineage decisions are encoded.

### Key Insights

- **KI1** — The rename act IS a structural commitment, not merely a cosmetic one. Under finding 56's strengthened diagnostic, naming a new discipline forces per-sub-claim re-test of the old discipline's content. A purely cosmetic rename would not solve the corpus-baggage problem (the corpus retrieval mechanism is structural, not naming-superficial); the rename only works if it carries structural-distinction criteria.
- **KI2** — The user's word "routeman" is suggestive: "route" + "man" (agent/operator). The "-man" suffix connotes an active operator on routes rather than a passive map. This subtly biases the discipline's framing toward "what an operator does with routes" rather than `/navigation`'s "what a map of routes looks like" — even though the user's stated job is enumerate. Note as a latent connotation, not a load-bearing commitment.
- **KI3** — Per finding 57's refined picture, the routeman ↔ /surfacing relation operates at two distinct abstraction levels: paradigm-instantiation (siblings — both are mapping-paradigm-instantiations) and process/input-dependency (consumer — routeman consumes /surfacing's output as part of aggregated cycle input). Both relations coexist; routeman inherits both.
- **KI4** — Per finding 58, the 4 confirmed residuals (F1 adaptive guidance, F2 reachability/gates, F4 REVISIT sub-actions, F5 auto-vs-judgment) are `/navigation`'s load-bearing identity beyond mere paradigm-membership. Without them, `/navigation` reduces to `/surfacing`-of-the-next-move-space — and the rationale for being a separate discipline collapses. Routeman inherits these 4 residuals or it ceases to have a separable identity.
- **KI5** — Per finding 57's meta-pattern (N=2): composite claims should be diagnosed PER SUB-CLAIM, not per composite. The routeman design itself is a composite claim — identity + endgame fit + features + attributes + lineage. Each sub-decision needs its own diagnostic application; a single composite verdict would mask per-piece errors.
- **KI6** — The multi-head architecture (memory + finding 57 + /wayfinding absorption history) makes enumeration-first specs end-goal-aligned. Routeman is end-goal-aligned BECAUSE it enumerates, not despite it. The rename doesn't change this — it preserves it.
- **KI7** — Per finding 56's meta-pattern "lesson-introduces-its-own-trap," the routeman rename itself is a vector for the failure mode it tries to fix: the new name could become a label under which `/navigation`'s content is preserved unchanged (preservation-for-preservation's-sake) OR a label under which load-bearing content is dropped because it was associated with the old name (over-correction). The diagnostic must be applied to lineage decisions explicitly to prevent both.
- **KI8** — The `/wayfinding`-absorption-into-/navigation precedent establishes what counts as a structural-not-cosmetic rename: `/wayfinding`'s single-direction-selection framing was identified as a single-head architectural artifact incompatible with the multi-head endgame; the absorption was structural. Routeman's rename needs an analogous structural argument; "the agent gets confused by stale references" is partial grounding (a real cognitive-hygiene mechanism) but needs to be paired with a structural-design distinction (the diagnostic-applied-per-sub-claim is that distinction).

### Structural Points

- **SP1** — Routeman occupies the forward-Boundary slot in the 4-category discipline taxonomy. The slot must remain filled (not a 3rd boundary; not empty; not migrated to Core or Situational).
- **SP2** — Routeman is a paradigm-instantiation of Navigational (per finding 55's Layer 3), possibly composed with Possibility (per finding 56's compositionality rule for enumeration-with-generation cases).
- **SP3** — Routeman is a cycle-consumer (per finding 57 process-level framing). Input contract = aggregated cycle output (`C verdicts; frontier questions; telemetry; scope check; original Q&G; R observations`) + corpus_limit_seeds from /intuit Phase β+ when present.
- **SP4** — Routeman's load-bearing identity has TWO structural layers: (a) the paradigm-membership layer (Navigational); (b) the four-residual prescriptive-extension layer (F1, F2, F4, F5). Removing either layer collapses the discipline's distinctness.
- **SP5** — Routeman pairs with `/reflect` under the canonical R→N→Select boundary-discipline flow (R backward / N forward / then selection). The R→N coupling is "optional enhancement" — N works without R, works better with R.
- **SP6** — Routeman's output is partially-thin in the surfacing-discipline sense: it has identifiers + metadata (thin) AND prescriptive content (Purpose / Movement / WHY / Guidance pointers / Continuation note — not thin). The thin/thick boundary cuts through the route-card. This is structurally distinct from /surfacing's strict no-item-content artifact.

### Foundational Principles

- **FP1** — "Depending on someone's output ≠ being a configuration of them." Process-level consumption doesn't subsume paradigm-level identity. (From finding 57.)
- **FP2** — "Enumeration-first specs are more end-goal-aligned than selection-first specs." Multi-head consumes enumerations. (From memory + finding 57.)
- **FP3** — "A discipline's identity at meaning layer = paradigm-instantiation + load-bearing operations that exceed pure paradigm-membership." (Synthesized from findings 55, 56, 58, 57.)
- **FP4** — "Renames must be structurally grounded, not cosmetic." (From /wayfinding absorption precedent + lesson-introduces-its-own-trap meta-pattern.)
- **FP5** — "Apply the strengthened diagnostic PER SUB-CLAIM, not per composite." (From finding 57's meta-pattern; N=2.)
- **FP6** — "The 11-primitive set and the 4-category discipline taxonomy check each other; a discipline's primitive composition must be derivable from its identity and consistent with the taxonomy." (From desc.md's "primitive set and end goal check each other.")
- **FP7** — "Discipline runtime specs are self-contained; no outbound pointers to design-history or theory folders." (From `feedback_disciplines_self_contained.md` memory.)

### Meaning-Nodes

- **MN1** — `routeman` — the proposed discipline being designed.
- **MN2** — `next-move-space` — the territory routeman operates on; derived from cycle output, not independent.
- **MN3** — `movement-type` — the category-label for a next-direction; user's term that maps to /navigation's "Type" field + the 16-type taxonomy.
- **MN4** — `cycle-consumer` — the process-level identity descriptor for routeman and for the broader Boundary category.
- **MN5** — `enumeration-first` — the operational signature distinguishing routeman from selection-first disciplines.
- **MN6** — `adaptive guidance` — the prescriptive load-bearing residual (F1) that distinguishes routeman from descriptive-labeling siblings like /surfacing.
- **MN7** — `graduated autonomy classification` — the F5 auto-vs-judgment split that positions routeman on the L0-L4 ladder.
- **MN8** — `rename-as-design-act` — the meta-concept under test in this inquiry: is routeman a structurally-distinct discipline or merely navigation under a new label?
- **MN9** — `corpus hygiene` — the meta-endgame capability the rename serves (cognitive-load reduction as the corpus grows).

### Meta-Inspection after SV2 (per Phase 1 cross-reference)

Hook H4 (concept names): `routeman` is coined; the structural distinctness is what we are about to test in Phase 3. `next-move-space`, `cycle-consumer`, `enumeration-first`, `adaptive guidance` are already structurally validated in prior findings. `rename-as-design-act` and `corpus hygiene` are coined HERE; flag for load-bearing concept test in Phase 3.

Hook H5 (motivating examples): the motivating example is /navigation specifically. The user implies a pattern by saying "one of them is about navigation" — suggesting other disciplines might face the same corpus-baggage problem. Flag for Specific-vs-pattern test in Phase 3.

## SV2 — Anchor-Informed Understanding

Routeman is not "/navigation cosmetically renamed." The rename act, under the strengthened diagnostic, is itself a structural commitment that forces per-sub-claim re-test of `/navigation`'s content. Routeman occupies the forward-Boundary slot (replacing /navigation) and inherits: (i) the Navigational paradigm-instantiation (per finding 55); (ii) cycle-consumer process position (per finding 57); (iii) four prescriptive-extension residuals beyond pure paradigm-membership (F1, F2, F4, F5 per finding 58); (iv) the enumeration-first operational signature (per memory + finding 57). Its endgame fit is dual: (a) preserves multi-head compatibility via enumeration-first; (b) provides L0-L4 positioning via auto-vs-judgment split. Lineage from /navigation will be per-component, adjudicated by the strengthened diagnostic.

---

## Phase 2 — Perspective Checking

### Technical / Logical

Routeman as a discipline must be a coherent unit — input contract, output schema, set of cognitive operations, failure modes, telemetry. Inheriting from /navigation gives most of this for free; the question is what to KEEP and what to CHANGE structurally. Each lineage decision is adjudicable. The Layer Commitment (MEANING) constrains this run to deciding identity + features + attributes + lineage decisions; process-step sequencing and SKILL.md sectioning are deferred. New anchor: routeman's spec at structural layer will need to express the inherited 5 reductions and 4 residuals without naming /navigation (to honor C3); this is a writing constraint deferred to the follow-up structural-layer inquiry.

### Human / User

The user explicitly flagged "old artifacts meddling with current renewed understanding and limiting innovations." This is an emotional / cognitive-load concern, not purely structural. The rename serves user-cognition: when the user runs `/MVL` and a discipline pulls /navigation-corpus reflexively, it limits what the user can do with the system. Routeman as a clean-slate label reduces this load. New anchor: routeman's design should resist over-engineering — the user wants a working discipline, not a meta-philosophical artifact. Discipline specs are self-contained per FP7; design memos (this inquiry) live in devdocs/.

### Strategic / Long-term

Routeman serves the endgame in three ways: (a) preserves enumeration-first identity required by multi-head; (b) provides the L0-L4 graduated-autonomy positioning via F5; (c) demonstrates corpus-hygiene-as-design-act, which is itself an autonomy capability (the system's ability to refactor its own corpus is an autonomy indicator). New anchor: (c) is a meta-endgame function that has not been articulated in any prior finding; it's specific to the rename-as-design-act under test here. Flag for load-bearing-concept test in Phase 3.

### Risk / Failure

- **Risk A** — Routeman becomes /navigation-with-cosmetic-rename. The new name confers no structural distinction; future agents still pull /navigation-corpus content reflexively. **Mitigation:** structural-distinction criteria must be explicit; the diagnostic-applied-per-sub-claim is the mechanism (per KI1, FP4, FP5).
- **Risk B** — Routeman drops load-bearing content from /navigation because the agent over-corrects. **Mitigation:** per-residual diagnostic application (FP5); the 4 residuals + 5 reductions are explicitly identified as canon-inheritable.
- **Risk C** — Routeman absorbs runner-level concerns (F3, F5-trigger, F8 per finding 58). **Mitigation:** explicit drop-decisions for these in the lineage list.
- **Risk D** — Routeman's primitive composition diverges from /navigation's in ways that contradict the taxonomy's primitive-profile distinctness requirement. **Mitigation:** FF-1 (the 11-primitive set) is deferred to follow-up; this run does not commit primitive composition.
- **Risk E** — The rename succeeds at corpus-cleansing but produces a worse spec because the redesign-from-scratch loses tacit knowledge in /navigation. **Mitigation:** explicit borrow/drop decisions per canonical section (Phase 3 Ambiguity 3).
- **Risk F** — The new name "routeman" itself becomes corpus-baggage in 6-12 months. **Mitigation:** the rename-as-design-act methodology is portable (per KI8); the same diagnostic applies recursively if routeman needs a second rename later. Plus the cognitive_fixes folder + the non-active archival pattern handle the long-running maintenance burden.

### Resource / Feasibility

Writing `cognitive_harness/routeman/SKILL.md` is a small follow-up effort. Updating runners (/MVL, /MVLw) to reference /routeman instead of /navigation is small. Migration is reversible: if routeman doesn't work, the spec can be moved to non-active/ and /navigation restored. The cost is bounded. New anchor: the install scripts (`install_for_claude.sh`, `install_for_codex.sh`) will need updating too — the rename touches build-system files, not just spec files. Flag for migration-plan-level inquiry (follow-up Path F per Phase 4).

### Ethical / Systemic

Internal to the project; no external impact. Systemic concern: does proliferating discipline names create a corpus-management burden that itself becomes the next "old artifact"? Real concern. **Mitigation:** the cognitive_fixes folder's kill conditions + the non-active/ archival pattern + the explicit rename-as-design-act methodology operationally address this. New anchor: the project already has the cognitive_fixes/README.md "reversibility commitment" pattern that applies here — routeman-as-rename is reversible.

### Definitional / Internal Consistency

Does routeman as designed contradict any prior anchor?

- `/navigation` spec: routeman would contradict it if it dropped load-bearing residuals; mitigated by inheriting F1/F2/F4/F5.
- Finding 58: routeman must preserve the 4 residuals to maintain the "/navigate ≠ /explore-configured" verdict; otherwise that verdict's structural argument collapses under routeman as well. Routeman's design DOES preserve F1/F2/F4/F5; verdict survives.
- Finding 57: routeman must preserve sibling-at-paradigm-level + consumer-at-process-level — both relations. Routeman's design DOES preserve both (paradigm = Navigational; process = cycle-consumer).
- Discipline taxonomy: routeman must occupy the forward-Boundary slot (no 3rd Boundary; the slot must be filled). Routeman's design satisfies this.
- `docs/desc.md`: routeman must serve enumeration-first + multi-head + graduated autonomy. Routeman's endgame-fit story includes all three.
- Internal-self-check: is "routeman" a coherent concept at meaning layer? The proposed identity (Navigational paradigm + 4 prescriptive extensions + cycle-consumer + enumeration-first) is internally consistent — each component is structurally grounded and non-redundant.

Verdict: routeman as designed does not contradict any prior anchor. Internal consistency passes.

### Definitional / Frame-exit Completeness

GATING PREDICATE: does the inquiry's commitments include terms inherited from prior findings, AND are those terms used across ≥2 distinct values/levels WITHIN the inquiry's own committed structures?

- Inherited terms: `mapping` / `Navigational paradigm` / `Boundary discipline` / `graduated autonomy` / `cycle-consumer` / `enumeration-first`.
- Distinct uses within this inquiry's commitments:
  - `Navigational paradigm` used at identity-level (what routeman IS) AND at the lineage-decision level (what to inherit from canonical /navigate).
  - `graduated autonomy` used at endgame-fit level AND at the F5 residual feature-decision level.
  - `cycle-consumer` used at identity-level AND at input-contract level.
- **GATING FIRES.**

#### Existence Enumeration (per category 1)

"What does `mapping` refer to project-wide, regardless of inquiry's frame?"

- mapping as the 12-paradigm cluster (per finding 55 Layer 3)
- mapping as the meta-cognitive operation (per finding 56's minimum-core definition)
- mapping as /explore-specific output (per finding 56's projection table for /explore)
- mapping as input to /innovate's Domain Transfer mechanism (per /innovate's spec — referenced via discipline_taxonomy)
- mapping as a meta-discipline concern (the framework itself)

Which does routeman's frame include? Routeman IS a paradigm-instantiation, so includes the paradigm-cluster sense + cognitive-operation sense. Does NOT include the mapping-as-meta-discipline-concern (that's the framework, not routeman).

"What does `Boundary discipline` refer to project-wide?"

- Boundary as the 4-category taxonomy slot (per discipline_taxonomy)
- Boundary as "operates between cycles" (per /navigation spec)
- Boundary as "consumes cycle output" (per finding 57)

All three coalesce in routeman's structural position; all three are in routeman's frame.

"What does `graduated autonomy` refer to project-wide?"

- The 5-level autonomy ladder L0-L4 (per desc.md)
- The 12/4 auto-vs-judgment partition for /navigation's types (per /navigation §"Auto-Derivable")
- The /intuit calibration ladder L0-L3 (per desc.md §"Intuition Ladder")

Routeman includes the first two; the /intuit calibration ladder is excluded.

#### Role Assessment (per category 2)

- Mapping-as-meta-discipline-concern excluded; role = grounds the paradigm vocabulary routeman uses. Doesn't require inclusion in routeman's frame; the framework is referenced by name but not redefined.
- /intuit's calibration ladder excluded; role = parallels routeman's auto-vs-judgment split but operates on different content (/intuit's per-primitive calibration vs routeman's per-route classification). Doesn't require inclusion; the parallel is noted at endgame-fit level only.

#### Verdict Rigor (per category 3)

Out-of-scope verdicts in this perspective:

- "Mapping framework itself is out of scope." Strongest counter: the framework's revisability clause (per finding 55/56) might be triggered by routeman's design (e.g., if routeman's residuals fit no paradigm cleanly, the 12-paradigm enumeration needs revision). Counter-to-counter: routeman's 4 residuals are PRESCRIPTIVE extensions to the Navigational paradigm-instantiation, NOT new paradigms. Per finding 56's compositionality rule + the "what is preserved" axis, prescriptive extensions live within a paradigm-instantiation. Verdict survives counter on structural grounds. **Confidence HIGH.**
- "/intuit-specific calibration ladder is out of scope." Strongest counter: the corpus_limit_seeds integration with /navigation (per discipline_taxonomy Boundary-notes) means /intuit's calibration affects routeman's input contract. Counter-to-counter: seeds-as-input-extension is a structural fact for routeman's input contract; the calibration ladder itself is /intuit's concern; routeman's auto-vs-judgment split operates on its own content. **Re-locate, not exclude:** /intuit integration is a structural fact at routeman's input layer; /intuit's calibration ladder is /intuit's concern. **Confidence HIGH.**

#### Residual / Coverage Justification (per category 4)

Any frame-exit concern not captured?

- The /reflect spec's behavior is excluded (FF-3 in surfacing). Role: /reflect feeds routeman optionally as guidelines; coupling contract is not committed in this inquiry. Verdict: re-locate to FF-3 follow-up.
- The non-active/ folder contents (FF-5) are excluded. Role: archival reasoning informs the lineage methodology; this inquiry uses the methodology but doesn't audit all archival reasoning. Verdict: re-locate to FF-5 follow-up.

Termination: applying the categories to /reflect coupling and non-active/ archival reasoning yields no new substantive findings beyond what FF-3 / FF-5 already capture.

### Phase / Calibration-State

Does routeman as a discipline depend on calibration the project doesn't yet have?

Routeman's operation itself does not depend on calibration — its features (enumerate, type, reachability-check, etc.) can run at L0 with human in the loop. The auto-vs-judgment split DOES depend on the project's autonomy level: at L0, the human handles all judgment; at L3+, the system handles more. But the split itself is a structural commitment fixed at author-time (the 12/4 partition in canonical /navigation); only the threshold for what counts as "judgment-required" shifts with phase.

Verdict: routeman is NOT a phase-dependent rule. The structural design is stable across phases; the runtime behavior calibrates as autonomy advances.

### Meta-Inspection after SV3

- **H1 (candidate set)** — The candidates being adjudicated are {inherit, drop, refine, defer} for each /navigation component. Convergence-recognition: could `inherit` and `refine` collapse? Risk if "refine" is interpreted as "inherit with minor wording change." Flag for Phase 3 Ambiguity 3 to define the boundary explicitly.
- **H2 (frame scope)** — In scope: routeman at MEANING layer. Out of scope: structural-layer (SKILL.md sections), process-layer (step sequencing), primitive-composition (FF-1), /reflect coupling (FF-3). Frame is consistent with `_branch.md`'s Layer Commitment.
- **H3 (question framing)** — Is "what is routeman?" the right framing? Alternative: "what is the cognitive operation served by the forward-Boundary slot under multi-head architecture?" The alternative is more endgame-grounded; the user's framing is rename-grounded. Both are valid; the user's framing is honored, with the alternative implicit in the endgame-fit reasoning.
- **H7 (phase/calibration state)** — Addressed in perspective above; no new concern.

## SV3 — Multi-Perspective Understanding

Routeman is the forward-Boundary discipline of the cognitive-cycle architecture, distinguished from /navigation by being articulated independently of the /navigation corpus (structural-not-cosmetic rename). Its identity at meaning layer is: a cycle-consumer enumeration-first discipline that produces the Navigational paradigm of mapping with four prescriptive extensions (F1 adaptive guidance, F2 reachability/gates, F4 REVISIT, F5 auto-vs-judgment). Its endgame fit is three-fold: (a) enumeration-first preserves multi-head compatibility; (b) auto-vs-judgment split positions on the L0-L4 ladder; (c) the rename-as-design-act demonstrates corpus-hygiene-as-meta-endgame-capability. Lineage decisions inherit 5 reductions + 4 residuals; exclude 3 runner-level mis-attributions; drop the "one structural operation" framing; refine the route-card-wrapper terminology. The primitive composition + /reflect coupling + cognitive_fixes-style input-contract fail-safe are deferred to follow-up runs.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — Is routeman structurally identical to /navigation under a new name, or structurally distinct?

**Strongest counter-interpretation:** routeman = /navigation renamed. The user's stated motivation ("AI wont get effected by old versions") is a cosmetic / cognitive-hygiene concern; the new name is sufficient to solve it; nothing in the user's input demands new structural commitments.

**Why the counter fails (structural grounds):** the rename act IS a structural commitment under finding 56's strengthened diagnostic — naming a new discipline forces per-sub-claim re-test of the old discipline's commitments. If routeman = /navigation cosmetically, then EITHER (a) the new name confers no structural value (cosmetic rename), in which case the corpus-baggage problem will recur — future agents will retrieve /navigation content under the new label because corpus retrieval is a structural mechanism (it operates on content-similarity, not name-novelty); OR (b) the new name confers structural value, which requires structural-distinction criteria. The user's motivation (corpus-baggage problem) is itself structural — corpus retrieval is a structural mechanism, not cosmetic. Mitigating it requires structural distinction; the diagnostic-applied-per-sub-claim is that mechanism. So the rename is structural; the counter fails.

**Confidence:** HIGH.

**Resolution:** routeman is structurally distinct from /navigation. The distinction is committed via four mechanisms: (i) identity articulated at meaning layer independently of /navigation's spec language; (ii) per-component lineage decisions adjudicated by the strengthened diagnostic; (iii) the 4 residuals + 5 reductions inherited; the 3 runner-level mis-attributions explicitly excluded; (iv) the spec's "one structural operation: Enumeration" framing dropped (per finding 58 COULD).

**What is now fixed:** routeman has its own meaning-layer identity statement, separate from /navigation's.
**What is no longer allowed:** claims like "routeman is just /navigation renamed" — these collapse the rationale and reproduce the corpus-baggage problem.
**What now depends on this choice:** features, attributes, lineage decisions all branch from the identity statement.
**What changed in the conceptual model:** routeman is redesign-from-scratch with selective inheritance, not relabeling.

---

### Ambiguity 2 — What is routeman's identity at meaning layer (one sentence)?

**Strongest counter-interpretation:** "Routeman is the discipline that enumerates next moves after a cognitive cycle." (Economical formulation, close to /navigation's existing identity statement.)

**Why the counter fails (structural grounds):** the counter omits three load-bearing commitments. (a) The paradigm-instantiation (Navigational, per findings 55/57). Without naming the paradigm, routeman could be confused with /surfacing-of-the-next-move-space, which lives in a different paradigm. (b) The prescriptive-extension layer (F1 adaptive guidance), which makes routeman prescriptive-not-descriptive. Without this, routeman is descriptive labeling, which is `/surfacing` not /navigation/routeman. (c) The cycle-consumer position (per finding 57), which makes routeman cycle-dependent. Without this, routeman could be confused with a freestanding direction-generator. The counter's economy comes at the cost of structural ambiguity at exactly the three points where /navigation/routeman differs from neighboring disciplines.

**Confidence:** HIGH.

**Resolution — the one-sentence MEANING-layer identity statement:**

> **Routeman is the cycle-consumer cognitive discipline that enumerates all possible next moves available after a completed cognitive cycle, producing each move as a typed, prescriptive route-card whose movement type, reachability state, and graduated-autonomy classification are derived from the cycle's aggregated output and the project's current autonomy level.**

**What is now fixed:** routeman's identity sentence.
**What is no longer allowed:** "routeman is a freestanding direction-generator" (it's cycle-dependent); "routeman is a descriptive labeler" (it's prescriptive via F1); "routeman selects one direction" (it enumerates).
**What now depends on this choice:** features (cognitive operations) derive from this sentence; attributes (output schema) derive from this sentence.
**What changed in the conceptual model:** routeman is now defined positively, not as "/navigation renamed" but as a specific cognitive operation with three load-bearing structural commitments (paradigm + prescriptive + cycle-consumer).

#### Load-bearing concept test (per refinement note)

Testing the identity sentence's load-bearing concepts:

- **`cycle-consumer`** — domain-property-vs-external-default: the project's actual property of routeman, anchored in finding 57's §3 + canonical /navigation §"Step 1" + §"The Transform." HIGH confidence. User-language alignment: user said "listing all possible next moves we can do" — implicit "current state" presupposition is there but not explicit. The term is loop-coined for precision; MEDIUM user-language alignment.
- **`prescriptive route-card`** — proxy-vs-structural: real structural distinction (per finding 58 F1). Discoverability: route-card schema is /navigation's existing 12-field structure; prescriptive component (Guidance) is specified at author-time. PASS. User-language alignment: user said "movement types" → Type field, but did NOT mention prescriptive guidance. **Flag: the prescriptive layer might be heavier than user wants. Critique should test whether the user might push back ("just list moves, don't tell me how to do them"); if the user values F1 less than the canonical framing implies, the prescriptive-extension status changes from "inherit" to "refine-or-drop."**
- **`graduated-autonomy classification`** — proxy-vs-structural: real structural distinction (F5 from finding 58; ties to L0-L4 ladder). Discoverability: partition is fixed at author-time; project's autonomy level determines runtime threshold. PASS. User-language alignment: not in user's input. **Flag: the auto-vs-judgment framing is endgame-derived, not user-stated. Critique should test whether this is a designer-imposed feature or genuinely load-bearing.**

#### Specific-vs-pattern recognition cue (per refinement note)

User motivated the rename by "old artifacts meddling with current renewed understanding." Is this specifically about /navigation, or about a pattern?

- User's input: "one of them is about navigation" — implies a class of cases.
- If a pattern, the rename-as-design-act methodology is portable to other disciplines.
- Frontier signal: **Research Frontier — pattern-portability of rename-as-design-act methodology** (out of scope for THIS inquiry which is about routeman specifically). The pattern-portability question should be tested separately when a 2nd discipline rename is proposed.

---

### Ambiguity 3 — Which canonical /navigation parts are "cannon" (inheritable) and which are not?

**Strongest counter-interpretation:** inherit everything. /navigation is the canonical spec; routeman is the rename; transferring content wholesale preserves work and avoids reinventing the wheel.

**Why the counter fails (structural grounds):** per finding 58, only 5 reductions (R1-R5) + 4 residuals (F1-F2-F4-F5) are load-bearing structural commitments of /navigation. The 3 mis-attributions (F3 freshness preflight, F5-trigger stall-signal, F8 boundary positioning) are runner-level concerns the canonical spec absorbed in error. The "one structural operation: Enumeration" framing is acknowledged in finding 58 COULD as oversimplified. Wholesale inheritance would propagate these errors under the new name — exactly the failure the rename is supposed to prevent. Selective inheritance per the strengthened diagnostic is the structural mechanism.

**Confidence:** HIGH.

**Resolution — lineage decisions (per-component):**

**INHERIT (canon-grounded, structurally validated by prior findings):**

| # | Component | Source-anchor | Why inherit |
|---|---|---|---|
| L-i1 | R1 Enumerate (scan-signal-probe over next-move-space) | finding 58 §"5 reductions" + canonical §"What Navigation Is" | Routeman's core verb; identity-sentence anchor. |
| L-i2 | R2 16-type movement-type taxonomy (3 categories) | finding 58 + canonical §"The 16-Type Taxonomy" | Routeman's "movement types" per user's language. |
| L-i3 | R3 4-category completeness check (content/process/context) | finding 58 + canonical §"Why Three Categories" | Completeness guarantee for enumeration; routeman inherits. |
| L-i4 | R4 Priority (HIGH/MEDIUM/LOW) + confidence | finding 58 + canonical §"Priority / Confidence" | Per-route ranking signal; inherited verbatim. |
| L-i5 | R5 Route-card record format (12 fields) | finding 58 + canonical §"Navigation Item Structure" | The output-schema substrate; refined at wrapper (Ambiguity 6). |
| L-i6 | F1 Adaptive Guidance (prescriptive) | finding 58 + canonical §"Adaptive guidance" | Load-bearing residual; routeman would collapse to /surfacing without it. |
| L-i7 | F2 Reachability/gates check | finding 58 + canonical §"Reachability check" | Load-bearing residual; cycle-consumer position presupposes state-evaluation. |
| L-i8 | F4 REVISIT sub-actions (RESURRECT/INVALIDATE/REVERT) | finding 58 + canonical §"REVISIT modes" | Load-bearing residual; cross-cycle awareness. |
| L-i9 | F5 Auto-vs-judgment split (12 auto + 4 judgment) | finding 58 + canonical §"Auto-Derivable vs Human-Judgment" | Load-bearing residual; L0-L4 positioning anchor. |
| L-i10 | 6 failure modes (Premature Filtering / Recency Bias / Action Bias / Enumeration Without Reasoning / Route State Omission / Scope Fixation) | canonical §"Failure Modes" | Operational; reusable verbatim; refined to 2-layer split (see L-r2). |
| L-i11 | R→N boundary-pairing | canonical §"Relationship to Other Disciplines" | Structural coupling; preserved verbatim. |
| L-i12 | Three invocation contexts (after SIC / independently / between branches in multi-headed) | canonical §"When to Navigate" | Multi-head context is end-goal-load-bearing. |
| L-i13 | corpus_limit_seeds extension from /intuit Phase β+ | discipline_taxonomy §"Boundary discipline notes" | Already-committed input-contract extension. |
| L-i14 | Telemetry skeleton (8 metrics) | canonical §"Telemetry" | Reusable verbatim; routeman extends to 10 (adding seed-related metrics — see F-seed in Ambiguity 5). |

14 inherited components.

**DROP (NOT inherited):**

| # | Component | Why drop |
|---|---|---|
| L-d1 | F3 freshness preflight | finding 58 mis-attribution: orchestration concern; belongs to runner, not discipline. |
| L-d2 | F5-trigger stall-signal detection (for DIAGNOSE) | finding 58 mis-attribution: cross-iteration concern; runner's territory. |
| L-d3 | F8 boundary positioning ("operates BETWEEN cycles") | finding 58 mis-attribution: when N fires is the runner's call. |
| L-d4 | "One structural operation: Enumeration" framing | finding 58 COULD: oversimplified; canonical spec contains multi-operation content under this label. |
| L-d5 | /wayfinding absorption narrative | History, not load-bearing for routeman's identity. The precedent informs FP4 but doesn't need to ship in routeman's spec. |

5 dropped components.

**REFINE (inherited with structural shift):**

| # | Component | What's refined | Why |
|---|---|---|---|
| L-r1 | Route-card / Navigation-Item wrapper terminology | "Navigation Item" → "Route"; "Navigation Map" → "Route Map" | Aligns with routeman's name + user's "movement types" framing; the 12 fields themselves unchanged (per L-i5). |
| L-r2 | Failure-mode framework | Refine from flat 6-mode list to 2-layer split (LAYER-1 operational + LAYER-2 identity-eroding), modeled on /surfacing's framework | Cleaner mental model for a redefined-from-scratch discipline; the 6 modes redistribute across the two layers (operational vs identity). |

2 refined components.

**DEFER (out of MEANING-layer scope):**

| # | Component | Why defer |
|---|---|---|
| L-f1 | Primitive composition (FF-1 from surfacing) | Belongs to structural-layer follow-up; needs `docs/thinking_space_dynamics.md` loaded. |
| L-f2 | /reflect coupling contract (FF-3 from surfacing) | Belongs to structural-layer or process-layer follow-up; needs /reflect spec loaded. |
| L-f3 | cognitive_fixes/01-style input-contract fail-safe (FF-4) | Belongs to structural-layer; pattern-portability question. |
| L-f4 | non-active/ archival-reasoning audit (FF-5) | Belongs to a separate pattern-portability inquiry. |

4 deferred components.

**Boundary between INHERIT and REFINE:** INHERIT preserves content + structure verbatim; REFINE preserves content but shifts wrapper/organization. The criterion is "is the load-bearing structural commitment preserved?" If yes and wording is unchanged → INHERIT. If yes and wording shifts → REFINE.

**Confidence:** HIGH.

**What is now fixed:** the per-component lineage list (14 inherit / 5 drop / 2 refine / 4 defer = 25 components addressed; comprehensive against canonical /navigation's structural surfaces).
**What is no longer allowed:** wholesale inheritance OR wholesale rejection.
**What now depends on this choice:** routeman's features list, attributes list, failure-mode framework.
**What changed in the conceptual model:** routeman is now a specifically-composed discipline with documented borrow/drop/refine/defer decisions, not an undifferentiated rename.

---

### Ambiguity 4 — How does routeman fit the endgame?

**Strongest counter-interpretation:** routeman is just a rename; endgame-fit doesn't change. `docs/desc.md` doesn't mention routeman; therefore routeman's endgame-fit is identical to /navigation's.

**Why the counter fails (structural grounds):** the rename serves three endgame-specific functions documented in desc.md + memory + finding 57:

(a) the multi-head architecture (memory `project_end_goal_loop_architecture` + finding 57 + /wayfinding absorption history) requires enumeration-first specs; routeman's identity preserves this because routeman's verb is "enumerate." If routeman were selection-first or some hybrid, the multi-head capability would degrade; routeman serves the endgame BY being enumeration-first.

(b) the graduated-autonomy ladder (`docs/desc.md` Levels 0-4) requires disciplines that can position on the L0-L4 ladder; routeman's F5 auto-vs-judgment split (inherited as L-i9) is that positioning mechanism. The 12-auto / 4-judgment partition is the L0/L1-shaped split today; as autonomy increases (L2/L3), the system handles more types automatically. Routeman thus encodes a trajectory point on the endgame's ladder.

(c) the rename-as-design-act ITSELF is an endgame function. The corpus-baggage problem (which motivated the rename) is a maintenance burden that grows as the system scales. Rename-as-design-act with structural grounding is a maintenance pattern for long-running self-improving systems. The system's ability to refactor its own corpus is itself an autonomy indicator (per desc.md's "spontaneous attention" indicator — noticing what should change unprompted). This is meta-endgame: the operational-discipline-design choice (routeman's rename methodology) is itself an autonomy capability.

The counter's claim "endgame-fit doesn't change" is true at the level of the autonomous-consciousness goal but FALSE at the level of the operational mechanisms producing that goal.

**Confidence:** HIGH.

**Resolution — endgame fit (three functions):**

- **EF-1 — Enumeration-first preserves multi-head compatibility.** Multi-head architecture (Level 3+ autonomy) consumes enumerations: each parallel head picks its own direction. Routeman's identity statement preserves the enumeration-first signature. Selection-first specs (like the absorbed /wayfinding) become awkward under multi-head; routeman avoids this awkwardness by inheriting /navigation's enumeration commitment.
- **EF-2 — Auto-vs-judgment split provides L0-L4 positioning.** Routeman's F5 partition (inherited via L-i9) declares which work the human must do vs which the system does automatically. At L0, the human handles all 4 judgment types + reviews the 12 auto types. At L3+, the system handles all 16. The partition is the autonomy ladder anchor.
- **EF-3 — Rename-as-design-act demonstrates corpus-hygiene autonomy.** Refactoring discipline names with structural grounding is a maintenance capability that scales with the corpus. The system that can refactor its own corpus (with diagnostic-applied-per-sub-claim) is exhibiting a higher-autonomy capability than one that cannot. Routeman is the first deliberate exercise of this capability; the methodology is portable to future renames.

**What is now fixed:** routeman has three documented endgame functions.
**What is no longer allowed:** framing routeman's endgame-fit as just "same as /navigation."
**What now depends on this choice:** the borrow/drop decisions, each of which must serve at least one of EF-1, EF-2, or EF-3.
**What changed in the conceptual model:** routeman's design is endgame-anchored, not just navigation-derived.

---

### Ambiguity 5 — What features should routeman have?

**Strongest counter-interpretation:** routeman's features = /navigation's 6 process steps verbatim. The process is already specified; inherit it; done.

**Why the counter fails (structural grounds):** per the Layer Commitment (MEANING), process-layer specification is out of scope. Listing 6 procedural steps conflates layers. What's needed at MEANING layer is the SET of cognitive operations routeman performs (derived from the identity statement), NOT the procedural ordering of those operations. The features list is a set, not a sequence.

**Confidence:** HIGH.

**Resolution — routeman's 10 features (cognitive operations, derived from identity statement):**

| # | Feature | Operation | Derivation |
|---|---|---|---|
| F-enum | **Enumerate next-move-space** | Produce the full set of possible next moves; no filtering, no selection. | From L-i1 (R1) + identity-sentence's "enumerates all possible." |
| F-type | **Type each move** | Assign a movement-type label from the 16-type taxonomy. | From L-i2 (R2) + identity-sentence's "typed." |
| F-reach | **Reachability-check each move** | Assign route state (open/blocked/deferred/active/done/stale/superseded) by evaluating gates against current state. | From L-i7 (F2) + identity-sentence's "reachability state." |
| F-prescr | **Generate adaptive guidance per move** | Decide Guidance mode (none/compact/full/expand-on-selection); produce mode-appropriate pointers; each pointer carries its own WHY. | From L-i6 (F1) + identity-sentence's "prescriptive." |
| F-revisit | **Cross-cycle REVISIT** | Generate RESURRECT/INVALIDATE/REVERT sub-actions when prior conditions warrant re-evaluation. | From L-i8 (F4). |
| F-autosplit | **Apply graduated-autonomy classification** | Partition moves into auto-derivable vs human-judgment per the project's autonomy level. | From L-i9 (F5) + identity-sentence's "graduated-autonomy classification." |
| F-priority | **Assess priority and confidence** | Per-move HIGH/MEDIUM/LOW. | From L-i4 (R4). |
| F-excluded | **Mark structurally-inapplicable types** | Add to Excluded section with reasoning; do not silently filter. | From L-i3 (R3 refined). |
| F-telem | **Emit telemetry** | Quality signal on the enumeration (type coverage, category balance, route coverage, guidance allocation, etc.). | From L-i14. |
| F-seed | **Consume corpus_limit_seeds** | When present, ingest /intuit Phase β+ seeds as NEW-INQUIRY-SEED items alongside the 16 types. | From L-i13. |

10 features. Each traceable to an inherited canon component OR an identity-statement clause OR an endgame requirement.

**What is now fixed:** routeman has exactly 10 cognitive features.
**What is no longer allowed:** features outside these 10 without endgame/identity justification.
**What now depends on this choice:** process-layer (sequencing) and structural-layer (spec organization) follow-up inquiries.
**What changed in the conceptual model:** features are derived from identity, not inherited wholesale.

---

### Ambiguity 6 — What attributes should routeman's output carry?

**Strongest counter-interpretation:** routeman's attributes = /navigation's 12 route-card fields verbatim. Schema is specified; transfer it; done.

**Why the counter fails (structural grounds):** wholesale transfer misses two structural opportunities. (a) Renaming for consistency: the Navigation-specific wrapper terminology ("Navigation Map" / "Navigation Item") contaminates routeman's clean-slate identity. The 12 fields themselves are inheritable verbatim (L-i5); the wrapper is refined (L-r1). (b) The per-route metadata should be explicitly grouped by purpose — /navigation's canonical spec already organizes the 12 fields into 6 implicit groups (route identity / route state / route meaning / reasoning / adaptive guidance / continuation memory); routeman's spec should name the groups explicitly to clarify what each attribute serves.

**Confidence:** HIGH.

**Resolution — routeman's output schema:**

**Output container:** a **Route Map** — a structured record produced per invocation.

**Per-Route attributes (12 fields, grouped into 6 purpose-categories):**

| Group | # | Attribute | Content |
|---|---|---|---|
| **Group 1 — Route Identity** | A1 | Direction | Human-readable route title. |
| | A2 | Goal | Compact target-state label. |
| | A3 | Movement Type | One of the 16 types in the taxonomy (L-i2). |
| **Group 2 — Route State** | A4 | Priority | HIGH / MEDIUM / LOW (L-i4). |
| | A5 | Status | open / blocked / deferred / active / done / stale / superseded. |
| | A6 | Blocked By | The gate, missing evidence, missing artifact, or condition preventing movement; `none` when unblocked. |
| **Group 3 — Route Meaning** | A7 | Purpose | What this route would serve, reveal, or unlock. |
| | A8 | Movement | Descriptive transition: current state → target state. |
| | A9 | Unlocks | Downstream routes / checks / decisions / artifacts; `unknown` when unclear. |
| **Group 4 — Reasoning** | A10 | WHY | Evidence from cycle output / telemetry / context that makes this direction worth considering. |
| **Group 5 — Adaptive Guidance** (the F1 prescriptive layer; from L-i6) | A11 | Guidance Mode | One of {none, compact, full, expand-on-selection}. |
| | A11a | Guidance Pointers | 0/1-2/3-5 pointers per the mode, each with its own WHY. |
| **Group 6 — Continuation Memory** | A12 | Continuation Note | What a future warm-up should remember about this route. |

**Route Map wrapper attributes (4 fields):**

| # | Attribute | Content |
|---|---|---|
| W1 | Map header | `## Route Map ([N] routes, [H] HIGH)` |
| W2 | Optional Route Index | A table with route number / direction / goal / type / priority / status / blocked-by; included when N > 10. |
| W3 | Excluded section | Structurally-inapplicable types with reasoning (F-excluded). |
| W4 | Telemetry block | 10 metrics (L-i14 plus seed-related additions for F-seed). |

12 per-Route attributes + 4 wrapper attributes = 16 total. The 12 fields inherit L-i5 verbatim at the field level; the 6-group organization makes implicit canonical structure explicit (L-r1 wrapper refinement).

**What is now fixed:** routeman's output schema (12 per-Route + 4 wrapper).
**What is no longer allowed:** omitting any of the 12 per-Route attributes; flattening the 6-group structure.
**What now depends on this choice:** the SKILL.md attribute-schema section; template generation for runtime invocation.
**What changed in the conceptual model:** schema is grouped by purpose; wrapper is explicitly enumerated; "Navigation Map" → "Route Map" terminology shift is named.

---

## SV4 — Clarified Understanding

Routeman is structurally distinct from /navigation, articulated at meaning layer independently of /navigation's spec language. Its identity is: a cycle-consumer enumeration-first discipline producing typed prescriptive route-cards with reachability state and graduated-autonomy classification. Its endgame fit is three-fold (enumeration-first / L0-L4 positioning / corpus-hygiene meta-capability). Its lineage from /navigation is per-component: 14 inherited components, 5 dropped, 2 refined, 4 deferred — totaling 25 decisions, each adjudicated by the strengthened diagnostic. Routeman has 10 features (cognitive operations) and 16 attributes (12 per-Route in 6 groups + 4 wrapper).

---

## Phase 4 — Degrees-of-Freedom Reduction

### What variables are now fixed

- Routeman's identity at meaning layer (one-sentence statement, committed).
- Routeman's category (forward-Boundary in 4-category taxonomy; replaces /navigation).
- Routeman's paradigm-instantiation (Navigational per finding 55; possibly composed with Possibility for enumeration-with-generation moves).
- Routeman's process position (cycle-consumer per finding 57).
- Routeman's input contract (aggregated cycle output + corpus_limit_seeds from /intuit Phase β+).
- Routeman's output shape (Route Map with 16 attributes — 12 per-Route in 6 groups + 4 wrapper).
- Routeman's load-bearing residuals (F1, F2, F4, F5 — all inherited via L-i6 to L-i9).
- Routeman's lineage decisions (14 inherit / 5 drop / 2 refine / 4 defer).
- Routeman's features (10 cognitive operations).
- Routeman's endgame fit (3 functions: EF-1, EF-2, EF-3).
- Routeman's failure-mode framework (refined to 2-layer split per L-r2; specific mode distribution = follow-up).

### What options are eliminated

- "Routeman = /navigation cosmetic rename" (Ambiguity 1).
- "Wholesale inheritance from /navigation" (Ambiguity 3).
- "Wholesale rejection of /navigation content" (Ambiguity 3).
- "Single-direction selection (routeman picks one)" (eliminated by enumeration-first + multi-head).
- "Routeman as freestanding discipline without cycle input" (eliminated by cycle-consumer).
- "Routeman as descriptive labeler without prescriptive layer" (eliminated by F1 inheritance).
- "Routeman as 3rd Boundary discipline alongside R+N" (eliminated by Boundary admission rule; routeman REPLACES /navigation in the forward-Boundary slot).
- "Adding F3 / F5-trigger / F8 to routeman's spec" (eliminated per L-d1, L-d2, L-d3).
- "Specifying primitive composition in this run" (deferred to FF-1 follow-up).
- "Specifying /reflect coupling in this run" (deferred to FF-3 follow-up).
- "Specifying input-contract fail-safe in this run" (deferred to FF-4 follow-up).
- "Auditing non-active/ archival reasoning in this run" (deferred to FF-5 follow-up).

### What paths remain viable

- **Path A** — Author `cognitive_harness/routeman/SKILL.md` + `cognitive_harness/routeman/references/routeman.md` from this finding's deliverable. (Structural-layer follow-up; honors FP7 self-contained-disciplines.)
- **Path B** — Run a process-layer inquiry to specify the 10 features' sequencing.
- **Path C** — Load FF-1 (the 11-primitive set) and commit routeman's primitive composition.
- **Path D** — Load FF-3 (the /reflect spec) and commit routeman's coupling contract.
- **Path E** — Update `/MVL` and `/MVLw` runners to reference /routeman instead of /navigation; update `install_for_claude.sh` and `install_for_codex.sh`.
- **Path F** — Migration plan: archive /navigation to `cognitive_harness/non-active/` (with rename rationale documented); promote routeman to active.
- **Path G** — (Research Frontier) Test pattern-portability of rename-as-design-act methodology when a second discipline-rename is proposed.

These 7 paths are NOT executed in this inquiry; they are the consequence-paths enabled by the inquiry's deliverable.

---

## SV5 — Constrained Understanding

Routeman's design at MEANING layer is fully constrained. Identity sentence committed. Endgame fit committed (3 functions). Features committed (10). Attributes committed (16). Lineage decisions committed (25). Forward-Boundary slot occupied (replacing /navigation). 7 consequence-paths enabled. 4 deferred sub-questions explicitly flagged. The design is now sufficiently constrained to author `cognitive_harness/routeman/SKILL.md` without re-running this inquiry.

---

## Phase 5 — Conceptual Stabilization

### Accommodation trigger check

Did new perspectives keep producing destabilizing anchors that forced revision of the structural model?

- Technical/Logical: confirmed structure.
- Human/User: confirmed structure; added a "resist over-engineering" anchor that didn't destabilize anything.
- Strategic/Long-term: confirmed structure; sharpened EF-3 (corpus-hygiene-as-design-act).
- Risk/Failure: surfaced 6 risks, each with a structural mitigation already in the model. No revision forced.
- Resource/Feasibility: confirmed bounded cost; added Path E (install-script update) as a consequence-path. No revision forced.
- Ethical/Systemic: confirmed; the rename leverages existing reversibility patterns (cognitive_fixes, non-active/).
- Definitional/Internal Consistency: verdict survives — no contradictions with prior anchors.
- Definitional/Frame-exit Completeness: gating fired; the 4 meta-categories produced no new substantive findings beyond confirming the frame's scope is well-formed (the verdicts were "re-locate, not exclude" on /intuit calibration ladder and /reflect coupling — both already deferred).
- Phase/Calibration-State: routeman is phase-stable; structural design fixed across phases.

**Accommodation trigger did NOT fire.** The model accommodated each perspective by clarifying, not patching. Each phase ADDED structure rather than revising a broken structure.

### Meta-Inspection after SV6 (H6 model fit)

The model's evolution from SV1 → SV6 is a series of clarifications, not patches:

- SV1: thin (rename rationale only).
- SV2: added structural commitments (identity-statement skeleton + 4-residual inheritance + cycle-consumer + paradigm).
- SV3: added perspective-specific anchors (risks, resource, internal-consistency, frame-exit, phase/calibration).
- SV4: collapsed ambiguities to per-decision verdicts (6 ambiguities; 6 resolutions; HIGH confidence on all 6).
- SV5: fixed degrees of freedom (10 features, 16 attributes, 25 lineage decisions, 7 consequence-paths, 4 deferred items).
- SV6: integrates into the final stabilized model.

Each transition added definition; none required reversing a prior commitment. H6 (model fit) is satisfied — pattern is refinement, not patching.

---

## SV6 — Stabilized Model

**Routeman's stabilized model:**

> **Routeman is the cycle-consumer cognitive discipline that enumerates all possible next moves available after a completed cognitive cycle, producing each move as a typed, prescriptive route-card whose movement type, reachability state, and graduated-autonomy classification are derived from the cycle's aggregated output and the project's current autonomy level.**

**Structural identity (three load-bearing layers):**

1. **Paradigm-instantiation layer** — Navigational paradigm (per finding 55's Layer 3), possibly composed with Possibility for enumeration-with-generation moves (per finding 56 compositionality rule).
2. **Prescriptive-extension layer (4 residuals)** — F1 adaptive guidance (prescriptive content), F2 reachability/gates (state-evaluation), F4 REVISIT sub-actions (cross-cycle awareness), F5 auto-vs-judgment (graduated-autonomy positioning). Removing this layer collapses routeman to a sibling-paradigm-instance of /surfacing under the Coverage paradigm; the discipline's separable identity is destroyed.
3. **Cycle-consumer process layer** — input contract = aggregated cycle output (C verdicts + frontier questions + telemetry + scope check + original Q&G + R observations) + corpus_limit_seeds from /intuit Phase β+ when present.

**Category placement:** forward-Boundary in the 4-category discipline taxonomy. Replaces /navigation in that slot. R→N (= R→routeman) boundary-pairing preserved.

**Endgame fit (three functions):**

- **EF-1** Enumeration-first preserves multi-head compatibility (memory + finding 57 anchor).
- **EF-2** Auto-vs-judgment split provides L0-L4 positioning (desc.md anchor).
- **EF-3** Rename-as-design-act demonstrates corpus-hygiene as a meta-endgame autonomy capability (novel anchor; coined in this inquiry; flagged for pattern-portability research).

**Features (10 cognitive operations, derived from identity sentence):**

F-enum / F-type / F-reach / F-prescr / F-revisit / F-autosplit / F-priority / F-excluded / F-telem / F-seed.

**Attributes (16 fields, derived from feature set):**

12 per-Route attributes in 6 purpose-groups (Identity / State / Meaning / Reasoning / Guidance / Continuation) + 4 wrapper attributes (count-header / optional Route Index / Excluded section / Telemetry block).

**Lineage from canonical /navigation (25 components addressed):**

- 14 INHERIT (5 reductions + 4 residuals + 6 failure modes + R→N pairing + 3 invocation contexts + corpus_limit_seeds + telemetry skeleton).
- 5 DROP (3 mis-attributions + "one operation" framing + /wayfinding absorption narrative).
- 2 REFINE (route-card-wrapper terminology + failure-mode 2-layer split).
- 4 DEFER (primitive composition + /reflect coupling + cognitive_fixes-style fail-safe + non-active archival reasoning audit).

**Consequence-paths enabled (7):** Path A (SKILL.md authoring) through Path G (pattern-portability research).

### How SV6 differs from SV1

- **SV1:** "routeman = /navigation renamed to escape corpus baggage; new name = clean slate."
- **SV6:** "routeman = structurally-distinct discipline with documented identity statement (one sentence, three load-bearing layers), three endgame functions (one of which is novel-to-this-inquiry), ten cognitive features, sixteen attributes, twenty-five lineage decisions, and seven consequence-paths — all derived from the rename's structural-not-cosmetic motivation, with the strengthened diagnostic applied per sub-claim."

The rename motivation is preserved; the structural mechanism that makes the rename non-cosmetic (diagnostic-applied-per-sub-claim) is named; the design is end-to-end derived from the rename rationale's structural reading.

### Saturation indicators

- **Perspective saturation:** approaching — the last 3 perspectives (Resource/Feasibility, Ethical/Systemic, Phase/Calibration-State) confirmed existing anchors without producing NEW types of anchors. The Frame-exit perspective surfaced one structural verdict (re-locate /intuit calibration, not exclude) that confirmed rather than overturned structure. ≈80% saturated.
- **Ambiguity resolution ratio:** 6 ambiguities identified; 6 resolved with HIGH confidence; 100% resolution.
- **SV delta:** SV1 → SV6 is a structural shift from rename-rationale-only to full design memo with 25 lineage decisions. Clear evolution.
- **Anchor diversity:** anchors span all 5 types (Constraints C1-C7; Key Insights KI1-KI8; Structural Points SP1-SP6; Foundational Principles FP1-FP7; Meaning-Nodes MN1-MN9) and 8 perspectives (technical / human / strategic / risk / resource / ethical / definitional-consistency / definitional-frame-exit / phase-calibration). Multi-dimensional.

### Self-assessment

**PROCEED.** Sensemaking has produced a stabilized model. Three flags carry forward to Critique:

- **Flag-1** (from H4 Load-bearing concept test): user-language alignment is MEDIUM on `cycle-consumer` and LOW on `graduated-autonomy classification` + `prescriptive route-card`. Critique should adversarially test whether routeman's design over-imposes structural commitments the user didn't request (specifically: does the user actually want the F1 prescriptive layer? does the F5 auto-vs-judgment split match user's intent or designer's endgame-bias?).
- **Flag-2** (from H5 Specific-vs-pattern): the rename-as-design-act methodology is pattern-portable but its portability is untested. Critique should not over-claim the methodology's generality (N=1 is one instance, not validation).
- **Flag-3** (EF-3 is novel-to-this-inquiry): the corpus-hygiene-as-endgame-function anchor is coined in Strategic/Long-term perspective; it has no prior structural grounding. Critique should test whether EF-3 is load-bearing or decoration. If it survives critique, the anchor advances; if not, drop it and the endgame-fit story reduces to EF-1 + EF-2 (still defensible).
