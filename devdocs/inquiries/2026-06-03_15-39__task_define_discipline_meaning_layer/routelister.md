## User Input

`what are routes for devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md`

---

# Route-Map — Task-Define Meaning-Layer Finding (post-Itemize refinement)

**Territory:** `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` (the Task-Define meaning-layer finding, with the §2 Itemize description + §10 NOT-list category 4 disambiguation refined to the 17-01 version, plus the Open-Question / Refinement-Trigger updates that follow from default-keep-together).

**Goal (made explicit):** *advance Task-Define from settled meaning-layer design toward an authorable + invocable spec + downstream process layer, while sharpening the design's remaining unresolved aspects.*

**Run mode:** `root / project-space (breadth)` · **Entry point:** `fresh` (no prior `_route.md` for this finding's routes existed before this run).

## Map Header

- **Identities:** 14
- **High-priority:** 2
- **By kind:** teleological 6 · epistemic 8
- **By engagement-type:** DEVELOP 3 · CONSOLIDATE 1 · TEST 4 · REFINE 3 · PURSUE-SEED 1 · INVESTIGATE-FRONTIER 1 · REFRAME 1

## Route Index

| # | Direction | grain | kind | engagement | Priority |
|---|---|---|---|---|---|
| R1 | Author Task-Define runtime reference spec | project-space | teleological | DEVELOP | **HIGH** |
| R2 | Author Task-Define design-history file | project-space | teleological | DEVELOP | **HIGH** |
| R3 | Mark prior IE-arc findings as SUPERSEDED-BY | project-space | teleological | CONSOLIDATE | MED |
| R4 | Author Task-Define process layer | project-space | teleological | DEVELOP | MED |
| R5 | Empirically test Task-Define on real task statements | project-space | epistemic | TEST | MED |
| R6 | Test refined Itemize's bias-toward-keep-together boundary | project-space | epistemic | TEST | MED |
| R7 | Test 6-criteria lightweight enforcement during structural authoring | project-space | epistemic | TEST | MED |
| R8 | Test whether MQ canonical set sharpens with use | project-space | epistemic | TEST | LOW |
| R9 | Refine lightweight criteria if violations cluster | concept-space | epistemic | REFINE | LOW |
| R10 | Refine MQ extension rule bullet (a) if ambiguous | concept-space | epistemic | REFINE | LOW |
| R11 | Refine Exploration-dispatch signal interpretation | concept-space | epistemic | REFINE | LOW |
| R12 | Pursue meta-discipline of lightweight discipline-design | project-space | teleological | PURSUE-SEED | LOW |
| R13 | Decide where unifying analogs live (spec vs design-history) | concept-space | epistemic | REFRAME | LOW |
| R14 | Investigate per-item granularity × multi-head architecture | project-space | epistemic | INVESTIGATE-FRONTIER | LOW |

## Per-Route Records

### R1 — Author Task-Define runtime reference spec

- **Direction:** the runtime reference spec at `cognitive_harness/task-define/references/task-define.md`
- **Goal:** Task-Define authorable + invocable as a discipline
- **grain:** project-space · **kind:** teleological · **engagement-type:** DEVELOP
- **Movement:** instantiate the 12 meaning-layer commitments (identity / 5 operations / intra-discipline ordering / MQ canonical set / dynamic Task-Define-Exploration division / pipeline position / input contract + substrate / output shape / lightweight stance with 6 criteria / NOT-list with 5 categories + category-4 disambiguation / self-containment) into the project's standard discipline-spec structure (Identity / Components / Process Model / Quality / Output, following the sibling-discipline pattern at `cognitive_harness/surfacing/references/surfacing.md` and `cognitive_harness/sense-making/references/sensemaking.md`).
- **WHY:** the finding's Next Actions MUST item names this as the gate for any runner being able to invoke Task-Define; without it the meaning-layer settlement is paper.
- **Priority:** HIGH · **Confidence:** HIGH
- **Guidance Mode:** compact
  - Use the refined §2 Itemize description verbatim from the finding (perceive-default-keep-together; (subject, action, deliverable-shape) tuple test; worked positive + negative examples) — bc the prior wording was harmful (per the 2026-06-04_01-00 LOOP_DIAGNOSE finding).
  - Append the NOT-list category 4 disambiguation as written (multi-detection vs cross-item interpretation) — bc Itemize's count-perception must not be collapsed into the excluded relational-interpretation operation.
  - Defer final exact wording of MQ1/MQ2/MQ3 + extension-rule bullets to this authoring (the meaning layer commits to the questions and the rule; structural commits to wording).
- **Depth-link:** none (not yet drilled)

### R2 — Author Task-Define design-history file

- **Direction:** the design-history file at `docs/discipline_design_history/for_task-define.md`
- **Goal:** preserve load-bearing predecessor context for future readers without violating the runtime spec's self-containment
- **grain:** project-space · **kind:** teleological · **engagement-type:** DEVELOP
- **Movement:** write the predecessor-acknowledgement (Task-Define replaces the prior Inquiry-Elaboration arc spanning the 8 inquiries from `2026-05-31_22-30__inquiry_elaboration_discipline_or_not/` through `2026-06-01_15-28__inquiry_elaboration_process_layer/`); the acknowledgement does NOT live in the runtime spec.
- **WHY:** the finding's §11 + Next Actions MUST item; the predecessor-acknowledgement is an outbound pointer to design history, which the project's self-containment convention prohibits in runtime reference files but supports in the discipline-design-history file.
- **Priority:** HIGH · **Confidence:** HIGH
- **Guidance Mode:** compact
  - Author concurrent with R1 (the spec is the load-bearing reader of self-containment; without this parallel file the predecessor context has no home) — bc the finding's Reasoning section flags this as load-bearing.
- **Depth-link:** none

### R3 — Mark prior IE-arc findings as SUPERSEDED-BY

- **Direction:** the 8 prior IE-arc findings' `## Relationships` sections
- **Goal:** keep prior findings discoverable as historical record without future readers acting on superseded commitments
- **grain:** project-space (touches 8 prior findings) · **kind:** teleological · **engagement-type:** CONSOLIDATE
- **Movement:** edit each prior finding's `## Relationships` to add `SUPERSEDED BY: devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md`.
- **WHY:** finding's Next Actions MUST item; the supersession should be concrete (after R1) rather than aspirational.
- **Priority:** MED · **Confidence:** HIGH
- **Guidance Mode:** compact
  - Gate on R1 being authored so the supersession is to a runnable spec, not a paper design — bc finding's gate on this action requires Task-Define being invocable.
- **Depth-link:** none

### R4 — Author Task-Define process layer

- **Direction:** Task-Define's process layer (how runners invoke it; runner-side dispatch logic for conditional Exploration invocation; cross-runner adoption contract)
- **Goal:** complete the meaning → structural → process trio for Task-Define
- **grain:** project-space · **kind:** teleological · **engagement-type:** DEVELOP
- **Movement:** design a much-lighter process layer than the prior arc's 15-28 (no fidelity gate / no halt-tier semantics / no adoption protocol); replace with a simpler "pre-pipeline invocation; runner reads MQ2 answer to decide whether to call Exploration."
- **WHY:** finding's COULD item; gated by R1 + at least one runner wanting to invoke Task-Define in practice; the process-layer is also where the Exploration-dispatch-signal interpretation (R11) lands concretely.
- **Priority:** MED · **Confidence:** MED
- **Guidance Mode:** compact
  - The deferred items at finding §5 + §6 (HOW the runner reads MQ2 answers; HOW MVLw / MVL+ / future runners invoke Task-Define in their own pipelines) land here — bc finding explicitly defers these to process-layer.
- **Depth-link:** none

### R5 — Empirically test Task-Define on real task statements

- **Direction:** end-to-end empirical validation of Task-Define on three task-statement shapes
- **Goal:** validate that the design behaves as committed
- **grain:** project-space · **kind:** epistemic · **engagement-type:** TEST
- **Movement:** run Task-Define on (a) a multi-task statement (e.g., "fix the auth bug AND build the billing feature" — expected: Itemize emits 2); (b) a self-contained single-task statement (expected: Itemize emits 1; MQ2 indicates no external context); (c) a single-task statement needing external context (expected: Itemize emits 1; MQ2 indicates external context needed → Exploration runs).
- **WHY:** finding's COULD item; paper designs hide edge cases; the worked examples in the refined §2 give baseline cases to test against.
- **Priority:** MED · **Confidence:** HIGH
- **Guidance Mode:** compact
  - Gate on R1 (spec must exist and be loadable) — bc finding's gate on this action requires the spec.
  - Capture observed behavior in `devdocs/improvement_observations.md` (per /MVLw observation pattern) — bc empirical observations accumulate across inquiries.
- **Depth-link:** none

### R6 — Test refined Itemize's bias-toward-keep-together boundary

- **Direction:** the boundary between specifications-of-one-task and multiple-distinct-tasks in the refined Itemize
- **Goal:** verify the (subject, action, deliverable-shape) tuple test correctly bounds the ambiguous case
- **grain:** project-space · **kind:** epistemic · **engagement-type:** TEST
- **Movement:** observe whether the bias-toward-keep-together rule correctly handles the boundary cases; specifically (i) edge cases where one tuple could be read as two slightly-distinct ones (e.g., "explain it AND make a diagram of it"); (ii) edge cases with sequential dependency markers ("design the API, then implement it"); (iii) clear positive cases.
- **WHY:** finding's Monitoring open question explicitly names this as the empirical signal that will reveal whether the tuple test needs sharpening or whether default-one is correctly bounded.
- **Priority:** MED · **Confidence:** HIGH (the refined design has the baseline; the test is whether it holds in practice)
- **Guidance Mode:** compact
  - The refinement-trigger threshold (R9 / R10 / R11 generally; for this specifically the 2026-06-03_17-01 finding sets N=3 misses as the tightening trigger) — bc the finding's Refinement Triggers names this threshold.
- **Depth-link:** none

### R7 — Test 6-criteria lightweight enforcement during structural authoring

- **Direction:** the 6 lightweight criteria as a checklist during structural-layer authoring
- **Goal:** verify the criteria actually catch heaviness during authoring (so spec-authors can use as a real checklist)
- **grain:** project-space · **kind:** epistemic · **engagement-type:** TEST
- **Movement:** during R1 authoring, attempt at one point to add (deliberately or by accident) a verify-axis to Deconstruct; observe whether criterion (i) or (vi) flags it; observe whether the criteria can be silently violated.
- **WHY:** finding's Monitoring open question; the criteria's value is operational, not declarative.
- **Priority:** MED · **Confidence:** MED
- **Guidance Mode:** compact
  - The 6th criterion ("every output element must be load-bearing for at least one downstream actor's decision") is the load-bearing one for catching auxiliary-field exploit paths — bc finding's §9 Reasoning explicitly states this exploit was the reason for the 6th criterion.
- **Depth-link:** none

### R8 — Test whether MQ canonical set sharpens with use

- **Direction:** the open-with-extension Meta-question canonical set's evolution across many inquiries
- **Goal:** sharpen the canonical 3 (or expand to canonical 4-5) based on which extensions recur
- **grain:** project-space · **kind:** epistemic · **engagement-type:** TEST
- **Movement:** observe whether extensions stay marginal (canonical 3 are sufficient) or recur (suggesting some recurrents should be promoted to canonical); after ~10 inquiries, review the extension pattern.
- **WHY:** finding's Monitoring open question (long-horizon).
- **Priority:** LOW · **Confidence:** LOW (not yet observable)
- **Guidance Mode:** compact
  - This is a long-horizon test (>10 inquiries needed) — bc canonicalization patterns emerge over usage volume.
- **Depth-link:** none

### R9 — Refine lightweight criteria if violations cluster

- **Direction:** any of the 6 lightweight criteria whose wording allows repeated unintentional violations
- **Goal:** sharpen criterion wording to catch the violation pattern
- **grain:** concept-space (within R1's §9) · **kind:** epistemic · **engagement-type:** REFINE
- **Movement:** trigger = 3+ violations of the same criterion across the discipline's first 10 authoring/refactoring touches; the fix is wording-tightening of that specific criterion.
- **WHY:** finding's Refinement Triggers; conditional on R7 firing.
- **Priority:** LOW · **Confidence:** LOW (refinement-trigger nature)
- **Guidance Mode:** compact
  - Refinement-triggered, not pursued by default — bc the trigger is empirical.
- **Depth-link:** none

### R10 — Refine MQ extension rule bullet (a) if ambiguous in practice

- **Direction:** the bullet (a) of the MQ extension rule ("must be a question about the task's structure or framing — NOT requiring external state-gathering")
- **Goal:** disambiguate proposed extensions
- **grain:** concept-space (within R1's §4) · **kind:** epistemic · **engagement-type:** REFINE
- **Movement:** trigger = 2+ disagreements about whether a proposed extension qualifies; the fix = add worked-example clarification.
- **WHY:** finding's Refinement Triggers.
- **Priority:** LOW · **Confidence:** LOW (conditional)
- **Guidance Mode:** compact
  - Worked-example pattern (like the §2 Itemize positive/negative examples added in the recent refinement) is the precedent — bc finding shows worked examples disambiguate where prose can't.
- **Depth-link:** none

### R11 — Refine Exploration-dispatch signal interpretation

- **Direction:** the process-layer dispatch logic for reading MQ2 answers and deciding whether to invoke Exploration
- **Goal:** prescribe the dispatch logic prescriptively enough that runners don't disagree
- **grain:** concept-space (within R4) · **kind:** epistemic · **engagement-type:** REFINE
- **Movement:** trigger = 2+ runners disagreeing about whether Exploration should fire for the same MQ2 answer; the fix = process-layer authors more prescriptive dispatch rules.
- **WHY:** finding's Refinement Triggers; gated by R4.
- **Priority:** LOW · **Confidence:** MED
- **Guidance Mode:** compact
  - This refinement is downstream of R4 — bc the dispatch logic doesn't exist until process-layer is authored.
- **Depth-link:** none

### R12 — Pursue meta-discipline of lightweight discipline-design

- **Direction:** Task-Define's design pattern (from-scratch mandate + lightweight stance + intrinsic NOT-list grounding) as a template for future discipline-design inquiries
- **Goal:** formalize the pattern as a reusable template
- **grain:** project-space (new project-trajectory concept) · **kind:** teleological · **engagement-type:** PURSUE-SEED
- **Movement:** if Task-Define succeeds empirically (R5 baseline confirmed; R7 lightweight-criteria effective), articulate the meta-pattern as a documented template that future inquiries designing new disciplines can apply.
- **WHY:** finding's Research Frontiers section names this as a seed.
- **Priority:** LOW (speculative; gated by Task-Define succeeding) · **Confidence:** LOW
- **Guidance Mode:** compact
  - This is a PURSUE-SEED route — the seed is named but not yet developed — bc the finding flags it as research frontier not active commitment.
- **Depth-link:** none

### R13 — Decide where unifying analogs live (spec vs design-history)

- **Direction:** the journalism 5W+H + API-gateway-middleware analogs and where they belong
- **Goal:** make the spec maximally self-contained + readable
- **grain:** concept-space (within R1's §12) · **kind:** epistemic · **engagement-type:** REFRAME
- **Movement:** structural-layer author decides whether to include the analogs in the runtime spec (as pedagogical aid) or confine them to the design-history file (R2).
- **WHY:** finding's Research Frontiers names this as a judgment call.
- **Priority:** LOW · **Confidence:** MED
- **Guidance Mode:** compact
  - The analogs are not load-bearing — bc finding §12 explicitly says they are sensemaking devices, not part of the spec.
  - Prefer design-history placement to honor self-containment — bc the spec's self-containment principle is load-bearing per finding §11.
- **Depth-link:** none

### R14 — Investigate per-item granularity × multi-head architecture

- **Direction:** the interaction between Task-Define's per-item granularity and the project's multi-head + merging-loop trajectory
- **Goal:** design spawn-mechanics for multi-head when Itemize emits N>1
- **grain:** project-space (new investigation) · **kind:** epistemic · **engagement-type:** INVESTIGATE-FRONTIER
- **Movement:** investigate how Task-Define's per-item output feeds multi-head spawn at the runner level; design spawn-mechanics (the prior arc's 2026-06-01_15-28 process design had a spawn_set wrapper for this; Task-Define inherits the spawn-is-runner-action commitment but defers spawn-mechanics design).
- **WHY:** finding's Research Frontiers (memory `project_end_goal_loop_architecture`); spawn-mechanics design was DEFERRED in the 17-01 refinement's Next Actions.
- **Priority:** LOW · **Confidence:** LOW
- **Guidance Mode:** compact
  - Gated by Itemize actually emitting N>1 in a real inquiry (sequential-chain mechanics + parallel-set mechanics need a real fire-case to design against) — bc designing without an empirical case risks over-engineering.
- **Depth-link:** none

## Excluded

- **The Question / Goal / What would fail sections of the finding.** These are framing-meta for the inquiry, not directions one could take. Not routes.
- **The 12 unifying analogs (5W+H + API-gateway-middleware) as concepts of their own.** They are sensemaking devices, not engageable directions. The decision about their placement IS a route (R13), but the analogs themselves are not.
- **The Reasoning section's 8 sub-sections (why "from scratch", why "expand-to-define", etc.).** These are justifications for committed positions; engaging them would mean re-litigating the design, which the finding deliberately closes. Not routes.
- **The 5 operations as individual concepts (Itemize, Meta-question, Deconstruct, MultiScope, Rephrase).** Engaging each one = engaging R1 (authoring their description into the spec). Sub-concepts of R1 at project-space grain; would only become routes at concept-space (depth) grain in a depth run on R1.
- **The "verb-meaning sentence" as a concept of its own.** Sub-concept of R1; engaging it = authoring it into the spec's Identity section.
- **The Source Input section.** Verbatim user input preservation; not a direction.

## Telemetry

- **Mode:** root / project-space (breadth) · **Entry point:** fresh
- **Identities enumerated:** 14
- **Routes by kind:** teleological 6 · epistemic 8
- **High-priority count:** 2
- **Individuations made:** 14 (R7+R9 considered for merge — kept separate because the engagement-types differ: TEST monitors, REFINE acts on the trigger; same applies to R6+R9, R8+R10)
- **Uncertain-individuations flagged:** 0
- **Stale entries flagged:** 0 (fresh entry point)
- **Convergence:** reached at sweep cycle 1 (territory fully read; no new identities emerged on a re-scan)
- **Frontier flags:** none (the finding's territory is bounded; no sub-territories require drill-here signaling)
- **LAYER 1 failure modes checked:** Over-merge — mitigated by lean-to-split on R7/R9, R6/R9, R8/R10; Under-coverage — coverage map walks all 12 Finding body sections + Next Actions + Open Questions + Reasoning; Wrong-grain — most routes at project-space (identities not manifestations); 4 routes at concept-space (R9, R10, R11, R13 — within-identity refinements); Goal-loss — goal preserved throughout (every route's WHY ties to the goal); Type-misassignment — engagement-types verified against the 9-verb vocabulary; Index-drift — fresh entry point.
- **LAYER 2 failure modes checked:** Selection-creep — no winner ranked; Priority is attributive; Process-coupling — no references to MVLw/MVL+/runner-loop-position in route definitions (R4 + R11 reference process-layer as a future inquiry's target, not as a position-in-loop); Description-collapse — routes are prescriptive (Movement / Guidance), not descriptive; Manifestation-dump — breadth-only; manifestations not enumerated (the 5 operations and 12 finding sections appear as sub-concepts of R1, not as separate routes).
- **Self-assessment verdict:** **PROCEED** — territory swept at identity resolution; output ready.
