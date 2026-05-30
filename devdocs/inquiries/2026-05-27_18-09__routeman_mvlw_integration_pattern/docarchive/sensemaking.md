# Sensemaking — routeman_mvlw_integration_pattern

## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-27_18-09__routeman_mvlw_integration_pattern/_branch.md

Read in this order:
1. _branch.md (ordinary problem-solving inquiry; 4 observation targets — integration pattern + job-boundary reframe + heaviness concern + staged-rerunnability hypothesis)
2. surfacing.md (33 items / 8 regions; 8 frontier flags; KEY EMPIRICAL FINDING: zero precedent for /routeman + /MVLw composition; USER CLARIFICATION: /MVL+ and /MVL2+ deprecated; 7 candidate composition shapes A-G; 5 heaviness sub-axes enumerated)

Sensemaking purpose: stabilize understanding of:
(a) Which composition shape(s) survive structural analysis;
(b) Job-boundary verdict — whose job is reasoning-heavy enumeration;
(c) Heaviness adjudication — real gaps vs already-addressed;
(d) Staged-rerunnability hypothesis status;
(e) Empirical-precedent gap framing;
(f) Routeman's Boundary-discipline character doing structural work.

Honor inherited context: priors are given. No re-litigation. Bounded follow-ups stay out of scope.

---

## SV1 — Baseline Understanding

The user is asking how two skills — `/routeman` (the route-enumeration runner) and `/MVLw` (the extended cognitive-loop runner) — can be used together. Three sub-concerns surround the main question: (a) maybe reasoning-heavy enumeration isn't routeman's job at all; (b) maybe routeman is too lightweight and needs a heavy mode; (c) maybe staged re-runnability of routeman already provides the heaviness.

Surfacing revealed: zero empirical precedent (routeman has never been invoked on any inquiry); both skills already have iteration mechanisms (routeman has internal Enumeration loops + cross-invocation re-invocation; MVLw has cross-iteration refinement); routeman is by-design a Boundary discipline (operates BETWEEN cognitive cycles); 7 candidate composition shapes were generated.

The baseline interpretation: the user wants a workflow recommendation — when they have a high-stakes inquiry that needs both reasoning and enumeration, how should they sequence the two skills?

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1.** No re-litigation of inherited routeman commitments. The 16-45 consolidation + the 4 priors define routeman's current committed shape; this inquiry uses that shape as a given.
- **C2.** Composition is at the WORKFLOW LAYER (skill-to-skill), per the user's clarification. NOT pipeline-merging routeman as a discipline inside /MVLw, NOT spec-modifying either skill.
- **C3.** /MVL+ and /MVL2+ are deprecated per the user's clarification; only /MVL (classic) and /MVLw are active loop runners.
- **C4.** Both skills' existing invocation contracts are honored. /routeman accepts folder-path input (reads files to reconstruct state). /MVLw accepts question-or-folder-path input. The composition uses these contracts as-is.
- **C5.** Bounded follow-ups stay out of scope: navigation-session aggregation (multi-head scope), meta-loop runtime (L2+ scope), multi-head concurrency on directional mode (concurrent-workers scope), /reflect revival (a separate Boundary discipline).
- **C6.** The answer must address 4 observation targets distinctly (per LOOP_DIAGNOSE MC2): integration pattern + job-boundary reframe + heaviness concern + staged-rerunnability hypothesis.
- **C7.** Empirical evidence is absent (zero prior /routeman invocations on inquiries). The answer is design-grounded against the specs, not runtime-grounded. Honesty about this distinction is required (analogous to 14-03's design-vs-runtime flag).

### Key Insights

- **K1.** **/MVLw and /routeman answer structurally orthogonal questions.** /MVLw asks "what should we understand and decide about X?" /routeman asks "given that we've understood-and-decided X, what moves are available?" The orthogonality explains why they compose sequentially: /MVLw's output is the state /routeman consumes.
- **K2.** **Routeman is by-design a Boundary discipline.** The discipline taxonomy at `docs/canon/thinking_disciplines/anatomy/discipline_taxonomy.md` classifies routeman as a Boundary discipline — operates BETWEEN cognitive cycles, consuming the prior cycle's state and producing the typed-next-moves field for the next operation. The integration pattern with /MVLw isn't a new idea — it's what the discipline taxonomy already prescribes. /MVLw produces a cycle's output (finding.md); /routeman is the Boundary operation after that cycle.
- **K3.** **Routeman has BUILT-IN depth mechanisms.** Internal Enumeration loop (§3.4 + §4.5 — iterates until coverage convergence); generic + directional modes (per 18-58 — stage-1 whole-territory + stage-2 sub-route expansion); re-invocation as parameterized variation (§3.5 + 14-49 read-policy — prior Route Map incorporated; REVISIT sub-actions; routes carried forward); self-assessment RE-RUN signal (§4.7 — flags structurally suspect output and recommends re-run). The "lightweight" framing the user worries about is partial — these depth mechanisms already exist.
- **K4.** **The staged-mapping mechanism IS the user's staged-rerunnability hypothesis materialized.** The 18-58 finding committed to a two-stage route mapping: stage-1 = generic mode (whole-territory enumeration); stage-2 = directional mode (sub-route expansion under a selected parent route). The user's hypothesis ("each rerun refines the route enumeration… we can double-run in really important stage") IS this staged mechanism in concrete form. The user may not have recognized the existing commitment satisfies their hypothesis.
- **K5.** **The one real heaviness gap is adversarial testing on routes.** Of the 5 heaviness sub-axes (internal iteration / adversarial testing / guidance depth / multi-discipline operations / staged-rerunnability), (a) (c) (e) already exist in routeman; (d) IS exactly what /MVLw composing around /routeman provides; (b) — adversarial prosecution/defense on routes — is genuinely absent from routeman as a discipline. But the gap is filled by Shape A (/MVLw on the routeman output applies Critique adversarial test).
- **K6.** **Shape A is the natural answer because both invocation contracts already support it.** Routeman's Step 1 explicitly says "If the input is a folder path, read the relevant files to reconstruct the current state." /MVLw's CONCLUDE produces finding.md + the inquiry folder. So: run /MVLw on a hard question → inquiry folder contains finding.md + supporting outputs → invoke /routeman pointed at that folder → routeman reads the finding's state and enumerates next moves. No spec change required; no orchestration layer required.
- **K7.** **Shape G is Shape A with a re-run-on-uncertainty loop.** When the user's first /routeman invocation produces routes with LOW confidence on type-assignment OR with the §4.7 RE-RUN self-signal, the user re-invokes /routeman (parameterized variation per §3.5) — possibly in directional mode on the most-uncertain parent route (per 18-58 stage-2). This achieves "double-run for really important stages" without any new spec. Shape G is therefore not separate from Shape A; it's Shape A's continuation pattern when the initial routeman output is structurally suspect.
- **K8.** **Reasoning-heavy enumeration is NOT routeman's job — and that's the architecture working as designed.** /MVLw does the heavy reasoning (5-discipline pipeline produces stabilized understanding + tested candidates + verdicts). /routeman does the enumeration (typed-reachability + adaptive-guidance over the resulting state). Trying to put reasoning INSIDE /routeman would erode its Boundary character and conflict with its LAYER-2 identity-failure mode "Descriptive-Only Collapse" (routes without grounded WHYs) — except in the opposite direction: routeman risks GENERATIVE-OVERSTEP if it tried to do meaning-stabilization itself.

### Structural Points

- **SP1.** **Two-layer iteration architecture exists.** Both skills have iteration mechanisms but at different layers: routeman has WITHIN-INVOCATION iteration (Enumeration phase loops until coverage) + ACROSS-INVOCATION re-invocation (parameterized variation). /MVLw has WITHIN-ITERATION discipline-pipeline iteration (5 disciplines per pass) + ACROSS-ITERATION refine-and-rerun. The two iteration architectures are analogous but operate at different cognitive scales.
- **SP2.** **The folder-path invocation contract is the composition substrate.** Both /MVLw (when resuming) and /routeman (when given a state) accept a folder path. The inquiry folder + the finding.md + the supporting artifacts ARE the composition substrate. Each skill reads/writes against the folder; the folder is the persistent shared state.
- **SP3.** **Composition can be sequenced in 3 patterns from the surviving candidates:** A (/MVLw → /routeman: reason then enumerate), B (/routeman → /MVLw: enumerate then deep-reason on selected route), C (/MVLw → /routeman → /MVLw: maximal sandwich). Shape D + E (spec-modifying) are out-of-scope per C2. Shape F (no composition) is the negative anchor — used as the "would not-composing make more sense?" test, not as a recommendation. Shape G is Shape A's continuation pattern.
- **SP4.** **The Boundary discipline character drives the recommendation order.** Routeman as Boundary discipline runs BETWEEN cycles. Therefore: the natural order is cycle (/MVLw) → boundary (/routeman) → next cycle (/MVLw on selected route, if needed). Shape A is the forward-Boundary use; Shape B is the inverse (route-then-cycle) which is structurally less natural (running enumeration BEFORE the state is stabilized risks Premature-Filtering or Action-Bias failure modes per routeman's LAYER 1 list).
- **SP5.** **The directional-mode-as-zoom-in pattern.** When /routeman produces a Route Map and the user wants to explore one route in depth, two patterns work: (1) invoke /MVLw on the route (Shape B-like — pull the route into a full cognitive cycle); (2) re-invoke /routeman in directional mode with that route as parent (Shape G — stage-2 expansion under the parent). Both are valid; they answer different questions: (1) does deep reasoning on the route's substance; (2) enumerates sub-routes under the route. They're complementary, not alternatives.

### Foundational Principles

- **FP1.** Routeman never selects; it always emits the full enumeration. Selection is a downstream operation. (Per routeman.md §1.1 — settled meaning-layer commitment.)
- **FP2.** /MVLw never enumerates; it produces stabilized understanding + tested candidates + verdicts. Selection at the answer-level is via Critique's SURVIVE verdicts; enumeration of NEXT MOVES is not Critique's job. (Per /MVLw spec.)
- **FP3.** The Boundary discipline pattern: forward-Boundary disciplines (routeman) run between a completed cycle and the next selection; backward-Boundary disciplines (/reflect when revived) run between a completed cycle and the cycle's own retrospective. (Per discipline taxonomy doc.)
- **FP4.** Both skills favor INCLUSION under uncertainty (asymmetric-failure principle). Routeman emits uncertain routes with LOW confidence rather than dropping; /MVLw iterates rather than premature-concluding.
- **FP5.** Spec-stability principle: the inquiry's answer should not require modifying either skill's spec. Workflow-layer composition operates on existing contracts.

### Meaning-Nodes

- **MN1.** **Workflow-layer composition** — the user's clarification frame. Composition of two skills using their existing invocation contracts, no spec modification.
- **MN2.** **Cognitive-operation orthogonality** — /MVLw answers what-should-we-understand-and-decide; /routeman answers what-moves-are-available. Different cognitive operations operating on adjacent layers of the same workflow.
- **MN3.** **Staged-rerunnability** — routeman's existing re-invocation mechanism as parameterized variation. The user's hypothesis for "heavy mode" maps to this existing mechanism (plus directional mode for depth-on-selected-route).
- **MN4.** **Boundary discipline as architectural slot** — routeman occupies the between-cycles slot by design; /MVLw produces the cycles. The integration is the architecture's slots being filled as intended.
- **MN5.** **Design-grounded answer (vs runtime-grounded)** — zero empirical precedent means the answer can only be structurally tested against the specs, not against observed behavior. Honesty about this is required.

---

### Meta-Inspection at H4 (concept names) and H5 (motivating examples) after SV2:

- **H4 check** — concept names introduced here: "workflow-layer composition" (user's term, preserved); "cognitive-operation orthogonality" (project-coined; structurally distinct concept); "staged-rerunnability" (the user's term, preserved); "Boundary discipline as architectural slot" (project canon term, structurally precise); "design-grounded answer" (analogue of 14-03's framing, structurally distinct). All 5 hold the proxy-vs-structural test. The 7 composition shapes (A-G) are letter-labels not load-bearing concept names; they're working-tags.
- **H5 check** — the motivating example is the user's question: "when we have a high-stakes inquiry needing both reasoning AND enumeration." This is ONE motivating case. Does this represent the broader pattern, or only this case? Reasoning: the pattern generalizes to ANY case where the user has both an understanding-question and an enumeration-question on adjacent layers. The example is representative; the pattern is broader. Specific-vs-pattern test below addresses this further at Phase 3.

---

## SV2 — Anchor-Informed Understanding

The integration question reframes from "how do we make these two skills work together" to "the architecture already prescribes their composition; what's the workflow recommendation given each skill's existing contract."

Key shifts from SV1:
- The "heavy mode" concern dissolves into: (a) what mechanisms already exist in routeman (internal iteration + staged-mapping + re-invocation + RE-RUN signal); (b) the one real gap (adversarial-on-routes) is filled by /MVLw composing around /routeman, not by adding to routeman.
- The "staged-rerunnability gives us this already" hypothesis is structurally supported by the 18-58 commitment + the 14-49 read-policy: the user's hypothesis IS the existing commitment.
- The integration pattern (Shape A primarily; Shape G as the continuation; B as an alternative for narrow questions) is what falls out of the Boundary-discipline architecture.

The job-boundary verdict: reasoning-heavy enumeration is /MVLw's job + /routeman's job AT DIFFERENT STEPS — /MVLw does the reasoning, /routeman does the enumeration AFTER. The user's intuition that "reasoning part is usually handled by MVLw" is structurally correct.

---

## Phase 2 — Perspective Checking

### Technical / Logical perspective

- **TA1.** Routeman's Step 1 spec explicitly handles folder-path input: "If the input is a folder path, read the relevant files to reconstruct the current state." This is the technical hook for Shape A. No new mechanism needed; the spec supports the composition.
- **TA2.** /MVLw produces an inquiry folder with finding.md + supporting outputs. The folder is a self-contained representation of the cycle's output. Routeman reading the folder reconstructs the state with full fidelity (the discipline operates on what's on disk; per discipline-design conventions).
- **TA3.** Routeman's per-Route Status field updates across invocations (per 16-45 + 13-23: open / blocked / deferred / active / done / stale / superseded). Re-invocation can update Status to reflect what the user (via /MVLw between routeman calls) has confirmed. This is technically the cross-invocation memory mechanism the user's hypothesis assumes.

### Human / User perspective

- **HA1.** The user explicitly worries about routeman being "too lightweight." Even if our structural analysis shows the depth mechanisms exist, the user's perception matters operationally. The answer should EXPLICITLY surface the depth mechanisms (internal iteration, generic/directional modes, re-invocation, RE-RUN signal) — making them visible means the user can rely on them.
- **HA2.** The user's hypothesis ("each rerun refines the route enumeration; we can double-run") suggests they're already thinking pragmatically about workflow patterns. The answer should validate the hypothesis (it's correct per 18-58 + 14-49) rather than reframe it.
- **HA3.** The user's framing "But also i am worried about routeman being too light weight" is a HONESTY-INVITING signal. The user wants to know if there's a real gap. The honest answer is: there is no missing "heavy mode" spec because the heaviness is supplied by composition with /MVLw (or by directional-mode re-run for narrower depth) — both of which exist.
- **HA4.** The user asked the inquiry partly because they've never used /routeman in practice (per the empirical-zero-precedent finding). The answer should be USAGE-RECOMMENDATION-shaped, not just structural-analysis-shaped — the user wants to know what to actually do.

### Strategic / Long-term perspective

- **SA1.** As /routeman becomes used in practice (the first invocations after the 16-45 consolidation lands), the composition pattern this inquiry recommends will be the project's first composition exemplar. The recommendation sets precedent for future Boundary-discipline use (e.g., /reflect when revived) — Shape A becomes the prototype pattern.
- **SA2.** The cross-discipline pattern (Boundary discipline after cognitive cycle) generalizes beyond routeman. Once /reflect ships, the workflow becomes: /MVLw → /reflect (backward-Boundary, what just happened) + /routeman (forward-Boundary, what's next). The composition is generalizable.
- **SA3.** The empirical-precedent gap will close after the first few real uses. Monitor: does Shape A work in practice, or do operational issues surface? Flag as Open Question — the design-grounded answer needs runtime validation.

### Risk / Failure perspective

- **RA1.** Risk: the answer is over-confident given zero empirical precedent. Mitigation: explicit design-grounded-only flag (analogous to 14-03's distinction). Reserve the answer's strength to "structurally well-supported by both specs" rather than "proven."
- **RA2.** Risk: the user expects a NEW design (heavy-mode spec) and the answer says "no new design needed, just composition." If the user reads this as dismissive of their concern, the relationship suffers. Mitigation: explicit acknowledgment that the lightweight concern is RATIONAL — and that the heaviness IS achieved via composition rather than spec-internalization. The user is right that more is needed; the more comes from /MVLw, not from a heavier /routeman.
- **RA3.** Risk: Shape A's folder-input mechanism breaks down if /MVLw's finding.md isn't structured the way /routeman expects. Verification: routeman expects "current state" — artifacts and verdicts from prior cognitive work, what's understood/generated/critiqued, what's open/blocked/pending, telemetry. /MVLw's finding.md template (per CONCLUDE) includes: Question + Finding Summary + Finding + Inherited Commitments + Next Actions + Reasoning + Open Questions + Source Input. The "current state" for routeman maps cleanly to: Finding (what's understood) + Next Actions (open/active items) + Open Questions (frontier). Compatibility holds.
- **RA4.** Risk: user invokes /routeman in directional mode without first running generic mode. If no parent Route Map exists, the MANDATORY-WHEN-AVAILABLE policy in 14-49 says routeman FLAGs and (if no caller-inline-info) HALTs. Workflow recommendation should clarify: always run generic mode first; directional mode is for ZOOM-IN after generic mode produces a parent map.
- **RA5.** Risk: user re-runs /routeman naively expecting "more thoroughness" without changing parameters. Routeman is IDEMPOTENT within a single invocation (same input + same goal → same Route Map). Re-running with identical parameters produces no new information. Workflow recommendation should clarify: re-runs are valuable when (a) state has evolved (new finding, status changes), (b) refined-sub-goal narrows the focus, (c) directional mode targets a sub-region. Naive re-run with no parameter change is wasted work.

### Resource / Feasibility perspective

- **FA1.** Shape A is the lowest-cost composition: one /MVLw run + one /routeman run. No spec changes; no orchestration layer; no new infrastructure. Tractable for any user.
- **FA2.** Shape C (sandwich) is the highest-cost composition: two /MVLw runs + one /routeman run. Reserve for genuinely high-stakes inquiries where the chosen route has its own complexity.
- **FA3.** Shape G (staged-rerunnability) adds N additional /routeman invocations on top of Shape A, where N is determined by how many routes need narrower-depth examination via directional mode. Cost scales linearly; bounded.

### Definitional / Internal Consistency perspective

- **DA1.** Shape A is internally consistent with both skills' specs: /MVLw produces finding.md + folder; /routeman reads folder. No definitional conflict.
- **DA2.** Shape G is internally consistent with routeman's commitment to re-invocation as parameterized variation (§3.5) + the 18-58 staged-mapping + the 14-49 read-policy. No new definition introduced.
- **DA3.** The "no heavy mode needed" verdict is internally consistent with routeman's existing depth mechanisms. The depth IS supplied by: (a) internal iteration; (b) staged-mapping generic+directional; (c) re-invocation; (d) external composition with /MVLw. Adding a fifth "heavy mode" would create redundant capability.

### Definitional / Frame-exit Completeness perspective

**Gating predicate check:**

- (i) Does the inquiry's commitments include terms inherited from prior findings? **YES** — terms like "Boundary discipline," "staged-mapping," "directional mode," "re-invocation as parameterized variation," "Route Map," "Status enum," "WHY field," "γ-field," "MANDATORY-WHEN-AVAILABLE," "iteration" are inherited from routeman priors + /MVLw spec + canon docs.
- (ii) Are those terms used across ≥2 distinct values/levels within the inquiry's own committed structures?

The inquiry's primary output is the integration pattern. The composition shapes A-G use terms like "/MVLw" and "/routeman" but these aren't multi-row tables yet — at this point in the analysis, the candidate set is the 7 shapes which use each skill's name once-per-shape. **GATING DOES NOT FIRE** at the current depth.

However, the deliverable's eventual finding will have a per-shape table comparing shapes on multiple axes (cost / use case / coverage). If we anticipate that table, it would be a multi-row structure with /MVLw and /routeman as repeated terms. Even so, the GATING fires on terms used to assert DIFFERENT propositions in different rows. The shape-table rows assert each shape's properties — different content per shape, but "/MVLw" plays the same propositional role across rows (the skill being invoked at that step). Not a multi-value semantic axis for the gated terms.

**GATING DOES NOT FIRE.** Skip the 4 meta-categories.

### Phase / Calibration-State perspective

**Required?** The inquiry involves the integration pattern, not a calibration-dependent rule. Does the answer's correctness depend on a project phase the project hasn't reached?

- Shape A operates at any phase — generic and directional modes both work in single-worker context.
- Shape G operates at any phase — staged-rerunnability is a single-worker mechanism.
- Bounded follow-ups (navigation-session, meta-loop) are L2+ phase-dependent; they're OUT OF SCOPE per C5.

No phase-dependent rule firing in this inquiry's scope. **SKIP.**

---

### Meta-Inspection at H1, H2, H3, H7 after SV3:

- **H1 (candidate set):** The candidate set is the 7 composition shapes A-G. Are they complete? Are some redundant? Reasoning: Shape A is the natural answer; B is the inverse; C is the sandwich (compositional); D + E are spec-modifying (out of scope per C2); F is the negative-case anchor; G is Shape A's continuation. The set covers: sequential composition (A, B, C), spec-modifying (D, E), no-composition (F), and re-run pattern (G). No major shape missing; D + E correctly out of scope.
- **H2 (frame scope):** Workflow-layer composition; no spec modifications; bounded follow-ups out of scope; design-grounded answer. Frame appropriate.
- **H3 (question framing):** The user's framing was clarified mid-run (composition is at WORKFLOW layer, not pipeline-merging). Sensemaking honors the clarification. Framing is now correct.
- **H7 (phase/calibration state):** Already checked above — does not fire. SKIP.

---

## SV3 — Multi-Perspective Understanding

The integration pattern crystallizes further. Across all 6 lateral perspectives + Definitional + Frame-exit Completeness (gating skipped), the analysis converges on:

- **Shape A is the primary integration pattern** (sequential /MVLw → /routeman; folder-input contract supports it; no spec change).
- **Shape G is Shape A's continuation pattern** (staged-rerunnability via directional mode for narrower-depth on selected routes).
- **Shape B is a valid but secondary pattern** (when the user wants to enumerate options FIRST before deep-reasoning on one).
- **Shape C is the maximal pattern** for highest-stakes inquiries; high cost.
- **Shape F is the negative anchor** (no-composition); useful for verifying that A is actually doing work.
- **Shapes D + E are spec-modifying** and out of scope.

The "heavy mode" gap is illusory at the spec level. Routeman's existing depth mechanisms (internal iteration, generic/directional modes, re-invocation, RE-RUN signal) PLUS composition with /MVLw cover all the heaviness sub-axes. The one structural gap (adversarial-on-routes) is filled by /MVLw composing around /routeman, not by a heavy /routeman mode.

The job-boundary is clean: reasoning-heavy enumeration is the COMPOSITION's job — /MVLw does reasoning, /routeman does enumeration AFTER. Not routeman alone; not /MVLw alone.

The staged-rerunnability hypothesis is structurally validated by the 18-58 + 14-49 commitments. The user's hypothesis IS the existing commitment.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: What does "use them together" actually mean — sequential composition, parallel coordination, or orchestrated workflow?

**Strongest counter-interpretation:** "Use them together" could mean ORCHESTRATED WORKFLOW — a wrapper script or higher-level skill that invokes both in coordinated steps with state-passing rules. This would be a NEW orchestration layer, not just sequential composition. Maybe the user wants a `/routeman-MVLw-combined` skill.

**Why the counter fails (structural grounds):** No such orchestration layer is implied by either spec; the user's language ("how can routeman be used WITH MVLw skill") permits the simpler reading (workflow-layer composition via folder-passing). The user also explicitly said "I am asking how these 2 skills can be combined" — combination, not orchestration. Adding orchestration would be a SPEC ADDITION beyond C2 (no spec modifications). The folder-path-as-shared-state mechanism is what makes the sequential reading work without orchestration; the simpler reading is the structurally-grounded one.

**Confidence:** HIGH.

**Resolution:** "Use them together" = SEQUENTIAL WORKFLOW-LAYER COMPOSITION, with the folder path as the shared state. The user invokes one skill; reads/checks its output; invokes the next skill on the resulting folder.

**What is now fixed:** The composition is sequential. No orchestration layer is proposed.

**What is no longer allowed:** Treating the answer as requiring a new orchestrator skill or wrapper.

**What now depends on this:** Innovation's deliverable shape is a workflow recommendation with sequential patterns, not a new orchestrator design.

**Conceptual model shift:** The answer is workflow-pattern recommendation, not new-design.

### Ambiguity 2: Are Shape A and Shape G distinct shapes, or is G just a sub-case of A?

**Strongest counter-interpretation:** Shape G (staged-rerunnability) is a CONTINUATION pattern after Shape A. A user who runs Shape A and finds the routeman output structurally suspect re-runs /routeman with refined parameters — that's just Shape A repeated. G is not a separate shape.

**Why the counter holds (structural grounds):** The counter is correct. Shape G is Shape A's continuation pattern. Both use /MVLw → /routeman; G adds "re-run /routeman with refined parameters when first output is suspect." This is one shape with a re-run sub-pattern, not two shapes.

**Confidence:** HIGH (the counter wins).

**Resolution:** Merge Shape G into Shape A as A's continuation pattern. The integration recommendation has TWO primary shapes (A + B) + one maximal shape (C) + Shape A's re-run continuation pattern.

**What is now fixed:** The shape inventory simplifies. A (with continuation) + B + C, plus F as negative anchor and D + E as out-of-scope.

**What is no longer allowed:** Treating G as a separate composition shape.

**What now depends on this:** Innovation's per-shape work covers A (with continuation) + B + C; doesn't need to produce separate G output.

**Conceptual model shift:** Three primary composition shapes, not seven.

### Ambiguity 3: When the user says "heavy version," do they mean a new INVOCATION MODE in /routeman, or a different USAGE PATTERN around /routeman?

**Strongest counter-interpretation:** The user means a new invocation mode in /routeman — a separate `--heavy` flag or a parallel-spec routeman-heavy that does more cycles, more adversarial testing, more depth. This would be a SPEC ADDITION (a new mode in references/routeman.md and SKILL.md).

**Why the counter fails (structural grounds):** The user's own hypothesis ("staged runnability of routeman gives us this already") points to a USAGE PATTERN, not an invocation mode. The user is testing whether the heaviness can be achieved without a new mode. The structural analysis confirms: yes, via composition with /MVLw (which IS adversarial via Critique) + staged-mapping (which IS depth via directional mode) + re-invocation (which IS refinement via parameterized variation). A new "heavy mode" would be redundant.

Additionally per FP5 (spec-stability principle), the answer prefers usage-pattern over spec-addition when both achieve the same goal.

**Confidence:** HIGH.

**Resolution:** "Heavy version" = USAGE PATTERN (workflow-layer composition + staged-rerunnability), NOT a new invocation mode. The answer is a workflow recommendation; no spec change to /routeman is proposed.

**What is now fixed:** The deliverable doesn't propose a new /routeman mode. The heaviness comes from composition and staging.

**What is no longer allowed:** Proposing a "heavy mode" spec change in the finding.

**What now depends on this:** The finding's Next Actions section has NO MUST for new mode design; it has a COULD for "monitor whether composition genuinely covers the heaviness" with a refinement trigger if it doesn't.

**Conceptual model shift:** Heaviness via composition, not heaviness via spec-expansion. This is consistent with the "Disciplines self-contained" memory and the project's iteration-on-existing-mechanisms pattern.

### Ambiguity 4: Is "strong reasoning with path enumeration" describing ONE operation or TWO operations?

**Strongest counter-interpretation:** ONE operation — reasoning AND enumeration happening together at the per-route level. Routeman's per-Route WHY field + the `why_this_might_be_important` field (γ-field) ARE reasoning embedded in enumeration. Maybe the user is asking for MORE such embedded reasoning, not for composing with /MVLw.

**Why the counter has partial merit:** Routeman's WHY + γ-field ARE per-route reasoning. The 13-23 + 00-51 commitments preserve them with the γ-field REPAIR rule (1-sentence cycle-anchor + filler-fails-spec). Per-route reasoning IS embedded in enumeration. So the "strong reasoning with enumeration" claim is partially true within routeman alone.

**Why the counter is incomplete (the FULL structural answer):** Per-route WHY + γ-field reasoning is BOUNDED reasoning. The reasoning anchors each route in cycle-content evidence; it does NOT do meaning-stabilization across routes, NOR adversarial prosecution/defense on the route map, NOR exploration of alternative framings. These deeper reasoning operations belong to other disciplines: Sensemaking (meaning-stabilization), Critique (adversarial), Innovation (alternative framings). These compose via /MVLw, not within /routeman.

So: "strong reasoning with path enumeration" maps to BOTH levels:
- **Per-route reasoning** inside /routeman (WHY + γ-field; existing capability).
- **Cross-route deep reasoning** outside /routeman (via /MVLw composition; not in /routeman's job description).

**Confidence:** HIGH (the resolution is dual-level).

**Resolution:** The user's "strong reasoning with path enumeration" is dual-level. Both levels are addressed: per-route reasoning is /routeman's existing per-Route fields; cross-route deep reasoning is /MVLw composing around /routeman.

**What is now fixed:** The reasoning question is two-tier. Per-route reasoning lives in routeman (WHY + γ-field per route). Cross-route reasoning lives in /MVLw (the full 5-discipline cycle on the routeman output).

**What is no longer allowed:** Treating "strong reasoning with enumeration" as a single operation; treating per-route reasoning as either absent or sufficient on its own.

**What now depends on this:** The finding distinguishes per-route reasoning (already supported) from cross-route reasoning (requires composition). This clarifies the heaviness story.

**Conceptual model shift:** Two reasoning tiers. Per-route reasoning is internal to /routeman; cross-route reasoning is the /MVLw composition.

### Ambiguity 5: Does "double run in really important stage" mean two /routeman runs back-to-back, or /routeman run twice with /MVLw between?

**Strongest counter-interpretation:** Two back-to-back /routeman runs — the second one re-running on the same state with no intervening cognitive work. This is what the user literally said ("double-run").

**Why the counter fails (structural grounds):** Per RA5 — routeman is idempotent within an invocation. Identical parameters → identical Route Map. Naive double-run with no parameter change produces no new information. The "double run" must therefore mean: (a) run /routeman, (b) something changes between runs (state evolves; refined-sub-goal narrows; directional mode targets a sub-region; manual review identifies a route region needing depth), (c) run /routeman again with the change. The "something between" can be: manual review by user; /MVLw cycle producing new finding; status update from external action; selection of a sub-region for directional mode.

So the user's "double run" really means: ITERATED-WITH-CHANGE re-invocation, not naive duplication. The most likely changes between runs are: (a) state evolved via a /MVLw cycle (Shape A + re-run); (b) directional-mode zoom-in on an uncertain route (Shape A's continuation pattern in directional form).

**Confidence:** HIGH.

**Resolution:** "Double run in really important stage" = iterated-with-change re-invocation, supported by either (a) state evolution via /MVLw between routeman calls, or (b) directional-mode zoom-in for narrower depth.

**What is now fixed:** Re-running /routeman without parameter change is wasted work. Meaningful re-run requires either state evolution (composition with /MVLw) or refined parameters (directional mode).

**What is no longer allowed:** Recommending naive double-run; treating "rerun" as a magic-thoroughness button.

**What now depends on this:** The finding's recommendation explicitly distinguishes meaningful re-run (state-evolved or parameter-refined) from naive re-run (wasted work).

**Conceptual model shift:** Re-run is meaningful only when something changes between runs. Identity-invocation is idempotent.

### Load-bearing concept test:

Test each load-bearing concept stabilized so far:

- **"Workflow-layer composition"** — proxy-vs-structural test: is the workflow-layer-vs-pipeline-merging distinction REAL? YES, structurally — workflow-layer means folder-passing between skill invocations (existing contracts); pipeline-merging means adding /routeman as a discipline in /MVLw's pipeline (spec change). Different mechanisms. Real distinction.
- **"Cognitive-operation orthogonality"** — discoverability test: can someone determining where to invoke each skill use this concept to decide? YES — if the question is "what should we understand," invoke /MVLw; if the question is "given understanding, what moves are available," invoke /routeman. The concept generates the invocation decision.
- **"Boundary discipline as architectural slot"** — user-language alignment test: does this match the user's language? PARTIAL — the user used "skill" not "discipline" or "Boundary." But the user's actual operational language is "use them together"; the architectural-slot framing is the deeper-truth that explains why they compose. Acceptable: not the user's term, but the project's canonical term that justifies the answer structurally.
- **"Staged-rerunnability"** — user-language alignment: the user used "staged runnability" verbatim. PRESERVED.
- **"Design-grounded answer (vs runtime-grounded)"** — proxy-vs-structural test: is the distinction load-bearing for the finding's confidence claims? YES — without empirical precedent, the finding can only claim structural soundness, not operational validation. The distinction calibrates confidence.

All 5 load-bearing concepts hold.

### Specific-vs-pattern recognition cue:

The motivating example: the user's hypothetical "high-stakes inquiry needing both reasoning and enumeration." The Sensemaking output generalizes to ANY inquiry where the upstream operation is meaning-stabilization (/MVLw's job) and the downstream operation is next-move-enumeration (/routeman's job). The pattern is the broader case; the user's specific case is one instance.

Should the inquiry address ONLY the high-stakes case or the BROADER PATTERN? Per the runner's default + the scope check's note, address the broader pattern. The high-stakes case is the motivating example; the broader pattern is the recommendation's scope.

---

## SV4 — Clarified Understanding

After ambiguity collapse, the integration question stabilizes:

**Composition shapes (final inventory after merging G into A):**
- **Shape A — /MVLw THEN /routeman.** The natural sequential composition. /MVLw produces an inquiry folder with finding.md + supporting outputs; /routeman reads the folder as state input and enumerates next moves. No spec change. Continuation pattern: if routeman's output is structurally suspect (LOW confidence, RE-RUN signal), re-invoke routeman with refined parameters (directional mode on the most-uncertain parent route; refined-sub-goal narrowing the scope; or after state has evolved via another /MVLw cycle).
- **Shape B — /routeman THEN /MVLw.** The inverse: enumerate options first, user selects one, /MVLw on the selection. Useful when the question is "what options do we have for X" and one option needs deep follow-through.
- **Shape C — /MVLw → /routeman → /MVLw.** The sandwich. Maximal pattern; high cost; reserved for genuinely high-stakes inquiries where the chosen route is itself complex enough to warrant a second cycle.
- **Shape F — Negative anchor (no composition).** Used as the verification that A is actually doing work. If the inquiry's question is fully answered by /MVLw alone (no next-moves question) OR fully answered by /routeman alone (no understanding question), composition is not the answer.
- **Shapes D + E — Out of scope** (spec-modifying; not addressed per C2).

**Job-boundary verdict:**
- /MVLw does the heavy reasoning (5-discipline cognitive cycle).
- /routeman does the next-move enumeration (typed-reachability + adaptive-guidance).
- Per-route reasoning lives inside /routeman (WHY + γ-field per route).
- Cross-route reasoning lives in /MVLw (compose around /routeman).
- Reasoning-heavy enumeration is the COMPOSITION'S job, not either skill's job alone.

**Heaviness adjudication:**
- Heaviness sub-axis (a) — internal iteration: EXISTS in routeman.
- Heaviness sub-axis (b) — adversarial testing on routes: ABSENT from routeman's discipline, but FILLED by /MVLw composing around /routeman.
- Heaviness sub-axis (c) — guidance depth: EXISTS via 4 guidance modes.
- Heaviness sub-axis (d) — multi-discipline operations: IS the /MVLw composition pattern.
- Heaviness sub-axis (e) — staged-rerunnability: EXISTS via re-invocation + directional mode.

**No new "heavy mode" spec is needed.** The heaviness is supplied by composition + the existing depth mechanisms.

**Staged-rerunnability verdict:** The user's hypothesis is structurally supported by the 18-58 + 14-49 commitments. Meaningful re-run requires either state evolution (between runs via /MVLw) or parameter refinement (directional mode targeting a parent route + refined-sub-goal). Naive identical-parameter re-run is idempotent and wasted.

**Empirical-precedent gap:** Zero prior /routeman invocations on inquiries. The answer is design-grounded only; honesty flagged. Monitor: when /routeman is first used in practice, does Shape A work, or do operational issues surface?

**Boundary-discipline architectural pattern:** The integration is the architecture working as designed. /routeman is the forward-Boundary discipline; /MVLw is the cognitive cycle. Composition between cycles is the slot the architecture provides.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed variables

- **F1.** Workflow-layer composition is the answer's primary mechanism (per Ambiguity 1).
- **F2.** Three composition shapes: A (with continuation) + B + C. Plus F as negative anchor.
- **F3.** No heavy-mode spec change to /routeman (per Ambiguity 3 + FP5).
- **F4.** Per-route reasoning is /routeman's job; cross-route reasoning is /MVLw's job (per Ambiguity 4).
- **F5.** Meaningful re-run requires change between runs (per Ambiguity 5).
- **F6.** Bounded follow-ups stay out of scope (per C5).
- **F7.** Empirical-precedent gap honestly flagged (per RA1).

### Eliminated options

- **E1.** Shape G as a separate shape (merged into A's continuation pattern).
- **E2.** New "heavy mode" spec for /routeman.
- **E3.** Orchestration-layer wrapper that coordinates /MVLw + /routeman.
- **E4.** Pipeline-merging routeman as a discipline inside /MVLw (per C2).
- **E5.** Naive identical-parameter re-run as a recommendation.
- **E6.** Treating "strong reasoning with enumeration" as a single operation.

### Remaining viable paths

- **V1.** The integration answer is a workflow recommendation with 3 primary composition shapes (A with continuation, B, C) + 1 negative anchor (F).
- **V2.** Per-shape: cost analysis + use case + when-to-apply guidance.
- **V3.** Heaviness verdict: no spec change; heaviness via composition + existing depth mechanisms.
- **V4.** Staged-rerunnability verdict: user's hypothesis structurally validated; meaningful re-run mechanic clarified.
- **V5.** Architectural framing: Boundary discipline + cognitive cycle = the prescribed composition pattern.
- **V6.** Open Questions: empirical-precedent gap; whether composition genuinely covers the heaviness; whether per-route reasoning + γ-field-REPAIR rule is sufficient.

The remaining path is singular per integration question — there is ONE integration answer with multiple supporting verdicts. Innovation will produce the per-piece content.

---

## SV5 — Constrained Understanding

The inquiry's solution space is narrow:

- ONE integration answer.
- THREE primary composition shapes (A with continuation, B, C) + ONE negative anchor (F).
- FIVE verdicts: integration pattern + job-boundary + heaviness + staged-rerunnability + Boundary-discipline architectural framing.
- ZERO new spec changes proposed; existing mechanisms suffice.
- ONE honesty flag: design-grounded; empirical-precedent gap.

Innovation will produce piece-level content for: composition shapes (A/B/C with cost + use-case + when-to-apply), per-route vs cross-route reasoning distinction, staged-rerunnability mechanism explanation, Boundary-discipline architectural framing, design-grounded honesty section, Open Questions for empirical validation.

Decomposition will partition these into independent piece-production work units.

---

## Phase 5 — Conceptual Stabilization

### Accommodation trigger check

Did new perspectives keep producing destabilizing anchors? Did the model require repeated patching?

- Phase 2 perspectives produced anchors that REINFORCED the model (TA1-TA3, HA1-HA4, SA1-SA3, RA1-RA5, FA1-FA3, DA1-DA3). None destabilized the structure.
- Frame-exit Completeness gating did NOT fire. No expansion needed.
- Phase 3 ambiguity collapses (A1-A5) all resolved with HIGH confidence. None required model revision.

No accommodation trigger fires. The model fits the territory.

### Synthesis

The integration of /routeman and /MVLw is a workflow-layer sequential composition, with the folder-path as shared state. The primary pattern is Shape A (/MVLw → /routeman). Shape A has a continuation pattern: when /routeman's output is suspect, re-invoke routeman with refined parameters (directional mode + refined-sub-goal). Shapes B and C are secondary patterns for specific use cases.

The "heavy mode" the user worries is missing is structurally covered by: (a) /routeman's existing depth mechanisms (internal iteration + staged-mapping + re-invocation + RE-RUN signal); (b) composition with /MVLw, which supplies the adversarial reasoning routeman as a discipline does not internalize. No new spec is needed.

The user's staged-rerunnability hypothesis is structurally validated by routeman's existing commitments (18-58 staged-mapping + 14-49 read-policy + 16-45 consolidated shape). The hypothesis IS the existing architecture; the user may not have recognized that the 18-58 directional-mode mechanism already implements their idea.

The cognitive-operation orthogonality + the Boundary-discipline architectural pattern together explain why the composition is structurally clean — it's not a new design, it's the architecture's slots being filled as intended.

The empirical-precedent gap is honest: zero prior /routeman invocations on inquiries means the answer is design-grounded. Operational validation awaits the first real uses.

---

## SV6 — Stabilized Model

```
┌────────────────────────────────────────────────────────────────────┐
│  /routeman + /MVLw integration                                     │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  Shape: workflow-layer sequential composition                      │
│  Substrate: inquiry folder as shared state                         │
│  Spec changes: NONE (existing contracts suffice)                   │
│                                                                    │
│  Composition shapes:                                               │
│    A (primary)  — /MVLw → /routeman                                │
│      Continuation: re-invoke /routeman with refined params         │
│                    (directional mode + refined-sub-goal) when      │
│                    output is suspect or state evolves              │
│    B (secondary) — /routeman → /MVLw (on selected route)           │
│    C (maximal)   — /MVLw → /routeman → /MVLw (sandwich)            │
│    F (anchor)    — no composition (negative case)                  │
│                                                                    │
│  Job boundary:                                                     │
│    Heavy reasoning      → /MVLw                                    │
│    Next-move enumeration → /routeman                               │
│    Per-route reasoning   → /routeman's WHY + γ-field (internal)    │
│    Cross-route reasoning → /MVLw composition (external)            │
│                                                                    │
│  Heaviness sub-axes:                                               │
│    (a) internal iteration       — EXISTS in /routeman              │
│    (b) adversarial on routes    — supplied by /MVLw composition    │
│    (c) guidance depth           — EXISTS via 4 guidance modes      │
│    (d) multi-discipline ops     — IS the /MVLw composition         │
│    (e) staged-rerunnability     — EXISTS via re-invocation +       │
│                                   directional mode                 │
│                                                                    │
│  Staged-rerunnability verdict:                                     │
│    Hypothesis STRUCTURALLY VALIDATED.                              │
│    Existing commitments (18-58 staged-mapping + 14-49 read-policy  │
│    + 16-45 consolidation) implement the pattern.                   │
│    Meaningful re-run requires state-evolution OR parameter-refine. │
│    Naive identical-param re-run is idempotent and wasted.          │
│                                                                    │
│  Architectural framing:                                            │
│    /routeman = forward-Boundary discipline (operates BETWEEN       │
│                cognitive cycles).                                  │
│    /MVLw     = cognitive-cycle runner.                             │
│    Composition between cycles = architecture's prescribed slot.    │
│                                                                    │
│  Empirical-precedent gap:                                          │
│    Zero prior /routeman invocations on inquiries.                  │
│    Answer is design-grounded; operational validation pending.      │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

**Difference from SV1:** SV1 framed the question as "how do we make these two skills work together." SV6 stabilizes that the architecture ALREADY prescribes the composition pattern (Boundary discipline + cognitive cycle), the existing depth mechanisms cover the heaviness concern, and the user's staged-rerunnability hypothesis is the existing architecture in action. The integration isn't a new design; it's the architecture working as designed.

---

## Saturation Indicators (Telemetry)

- **Perspective saturation:** 6 lateral perspectives + Definitional/Internal Consistency + Definitional/Frame-exit Completeness (gating skipped). The last 2 perspectives confirmed existing anchors without introducing new TYPES. Approaching saturation.
- **Ambiguity resolution ratio:** 5 / 5 ambiguities resolved with HIGH confidence. Ratio = 1.0.
- **SV delta:** SV1 (workflow recommendation needed) → SV6 (architecture's prescribed pattern; no new design). Structural shift from "what do we design" to "what does the architecture already prescribe." Healthy delta.
- **Anchor diversity:** anchors from 5 types (Constraints / Key Insights / Structural Points / Foundational Principles / Meaning-Nodes) and 7 perspectives. Diverse.

### Failure-mode check:

- **#1 Status Quo Bias:** the inquiry takes priors as given (per C1) but does NOT defend either skill's existing spec from legitimate challenge. The user's "lightweight" concern was tested structurally; the conclusion is that the existing mechanisms cover the heaviness, which is a structurally-grounded defense, not status-quo protection. NO BIAS.
- **#2 Premature Stabilization:** SV4 reached after 5 ambiguities resolved across 8 perspectives. The model was tested from multiple angles. Accommodation trigger checked and did not fire. NO PREMATURE STABILIZATION.
- **#3 Anchor Dominance:** the model rests on multiple anchors (K1 orthogonality, K2 Boundary discipline, K3 depth mechanisms, K6 folder contract, K8 architecture-as-designed). Removing any one wouldn't collapse the model. NO ANCHOR DOMINANCE.
- **#4 Perspective Blindness:** the uncomfortable perspective is "maybe the user is right and routeman IS too lightweight" — addressed in HA3 (the user's concern is rational; heaviness comes from composition, not spec-expansion). The "maybe a heavy mode is genuinely needed" perspective was tested and structurally refuted via the 5 heaviness sub-axes. NO BLINDNESS.
- **#5 Clean Resolution Trap:** all ambiguity resolutions had explicit counter-interpretations + structural-grounds reasoning. Ambiguity 4 explicitly accepted PARTIAL counter-merit (per-route reasoning IS inside routeman) and revised the resolution to dual-level. None survived on elegance alone. NO TRAP.
- **#6 Self-Reference Blindness:** the inquiry uses Sensemaking to evaluate a composition involving Sensemaking's own host discipline pipeline (/MVLw runs Sensemaking). SOME self-reference risk. Mitigated by external grounding: the live specs (cognitive_harness/routeman/SKILL.md + ~/.claude/skills/MVLw/SKILL.md) are the structural authorities; the discipline-taxonomy doc is canon; the verdict is grounded in explicit invocation contracts and specifications, not in Sensemaking-internal reasoning. EXTERNAL GROUNDING PRESENT.

### Self-assessment:

**PROCEED.** Saturation indicators show healthy completion. All 6 failure modes checked and absent (or grounded). Stabilized model fits territory.

Next: Decomposition.
