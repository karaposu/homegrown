# Branch: routeman_discipline_design

## Question

**Subject** — `routeman`, a proposed new discipline whose stated job is "listing all possible next moves we can do, together with some movement types." It functionally inherits from `/navigate`, but is intentionally renamed to escape the corpus baggage attached to the word "navigation" so the agent is not anchored by prior versions when reasoning about it.

**Action** — design from scratch (define what routeman IS as a cognitive operation, then determine features and attributes). This is a from-scratch redefinition of a discipline artifact, so it operates primarily at the MEANING layer.

**Level** — discipline-level (the inquiry's primary unit is one discipline's identity and spec shape). Endgame-fit reasoning will reach into loop-level and runner-level to check coherence, but the deliverable is bounded to one discipline.

**Observation targets** — preserve as separate items because the user's framing contains four distinct aspects joined by "and" / "as well as" / "still":
1. **Endgame fit** — how routeman fits into the project's endgame (autonomous-consciousness goal, Baldwin cycles, meta-loop architecture per `docs/desc.md` and the end-goal-loop-architecture memory).
2. **Features** — what operations / process steps routeman performs.
3. **Attributes** — what properties its output carries (schema, fields, format).
4. **Lineage from navigation** — which parts of the canonical `/navigate` corpus to borrow forward, and which to drop; what is "cannon" enough to inherit.

**Deliverable shape** — a discipline-design memo: identity statement (what routeman IS, at the meaning layer), endgame-role section, features list (operations), attributes list (output schema), and lineage notes (what was borrowed from `/navigate`, what was dropped, and why).

**Stated question:** What is `routeman` as a cognitive discipline, how does it fit the project's endgame, what features should it have, what attributes should its output carry, and which canonical parts of the existing `/navigate` discipline should it borrow forward?

## Goal

- **Criterion** — a good answer commits to (a) a single sentence defining routeman at the meaning layer, (b) a finite features list with each feature traceable to either an endgame requirement or an inherited-from-navigation justification, (c) a finite attributes list specifying output shape, (d) explicit borrow/drop decisions against canonical navigation content with reasons, and (e) explicit endgame-fit reasoning that connects routeman's operation to the autonomous-consciousness / Baldwin-cycle / meta-loop framing. Completeness over speculation: it is acceptable to mark a feature "deferred" with a reason rather than over-specify.
- **Use case** — the user will use the answer as the basis for writing `cognitive_harness/routeman/SKILL.md` (and possibly a `cognitive_harness/routeman/references/routeman.md` reference file) without re-running this inquiry. Decisions made here will close the open naming question that was left after the navigation-surfacing-territory-dependency-recheck inquiry on 2026-05-23 at 11:30.
- **Desired outcome** — the project has a clean, named, identity-stable discipline to load via runners (replacing `/navigate` invocations in `/MVL+` / `/MVLw` pipelines) whose definition is not contaminated by prior-corpus references to "navigation."
- **What would fail** — an answer that (i) bundles features + attributes + endgame fit without committing to a single-sentence identity statement (process-layer drift from meaning-layer question); (ii) inherits everything from canonical navigation under "borrowed" without diagnosis (which defeats the rename motivation); (iii) inherits nothing from canonical navigation (which loses load-bearing prior work like the 4-residual analysis and the 5 reductions); (iv) treats routeman as a fresh sibling without re-testing the sibling-under-mapping placement from the 2026-05-23_11-30 finding; (v) over-specifies attributes (locks routeman to one output format before features stabilize) or under-specifies endgame fit (treats endgame as a checkbox rather than a coherence test).

## Source Input

Preserved verbatim from the user's `/MVL2+` invocation:

```text
we have this problem of old artifacts meddling with current renewed understanding and limiting innovations.. 

one of them is about navigation. there are too many references using this word , this is why i am suggesting a new discipline , called routeman which has a job of  surfacing next actions, 

it is basically navigatino but with a new name so our AI wont get effected by old versions. 


but still , routeman does is listing all possible next moves we can do, together with some movement types.


and with the help of routeman (we can still borrow things from old navigation if they are cannon) lets discuss how it fits into our endgoal and which features it should have as well as which attributes it should have
```

## Scope Check

Question covers goal: YES with one specific-vs-pattern note.

The question targets a specific discipline (routeman) but its reasoning depends on a pattern: how a discipline ought to be defined, how endgame-fit ought to be argued, how lineage decisions ought to be made. The inquiry stays bounded to routeman as the deliverable (the user asked about routeman specifically), but the discipline's design must be coherent with the meta-loop / Baldwin / autonomous-consciousness framing, so endgame-fit reasoning is unavoidably pattern-shaped. This is acceptable: the deliverable is routeman, not a general discipline-design theory.

## Layer Commitment

**Primary layer: MEANING.** The user's question is "what is routeman as a cognitive operation," not "what should routeman's spec sections be" (structural) and not "what steps should routeman run" (process). The features and attributes asks are downstream questions: until routeman's identity at the meaning layer is settled, any feature or attribute list is arbitrary.

**Other-layer alternatives considered and explicitly out of scope for THIS run:**
- **Structural** — sections / schema of `cognitive_harness/routeman/SKILL.md`. Out of scope because the spec artifact shape is downstream of identity. The deliverable here is the discipline-design memo, not a SKILL.md draft.
- **Process** — the step-by-step sequence routeman would run when invoked. Out of scope as the primary frame. Features (operations) WILL be enumerated as deliverables, but they are derived from identity, not asserted independently.

**Sequential multi-layer plan (declared, not executed in this run):**
1. THIS run — settle meaning. Output: identity statement + endgame fit + features (derived from identity) + attributes (output schema, derived from features) + lineage decisions.
2. Follow-up run (if needed) — author `cognitive_harness/routeman/SKILL.md` from this inquiry's deliverable (structural layer).
3. Follow-up run (if needed) — verify the process layer by running routeman on a real next-action question and seeing whether the meaning settled here produces useful output.

## Synthesis Trigger

This inquiry consumes prior inquiry outputs and inherits commitments from them. The finding MUST include an `## Inherited Commitments Re-test` section per CONCLUDE's enforcement.

**Prior outputs synthesized:**

- `devdocs/inquiries/_archive/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md` — commits to: (a) the 5 reductions R1–R5 (Enumerate; 16-type taxonomy as labeling; 4-category completeness; priority+confidence; route-card format), (b) the 4 residuals F1 Adaptive Guidance, F2 Reachability/gates, F4 REVISIT sub-actions, F5 Auto-vs-human-judgment split, (c) the verdict that `/navigate` is NOT just `/explore`-configured.
- `devdocs/inquiries/_archive/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md` — commits to: (a) the strengthened CORRECTS-vs-REFINES diagnostic (claim-truth / level-coherence / external-citation), (b) the mapping framework's minimum-core definition + 4 primary axes + 8 secondary axes + 12 paradigm crystallizations.
- `devdocs/inquiries/_archive/2026-05-13_12-15__what_is_mapping_meta_paradigms/finding.md` — commits to: the 12-paradigm taxonomy under mapping (Cartographic / Taxonomic / Relational / Functional / Embedding / Process-Behavioral / Constraint / Possibility / Navigational / Coverage / Reflexive / Analogical).
- `devdocs/inquiries/2026-05-23_11-30__navigation_surfacing_territory_dependency_recheck/finding.md` — commits to: (a) `/navigate` is sibling-under-mapping with `/surfacing` (Navigational and Coverage paradigms respectively), (b) input-dependency: `/navigate` consumes cycle output (verdicts + frontier questions + telemetry + scope check + original Q&G + R observations), (c) metadata-as-signal-not-verdict principle, (d) abstraction-level-conflation meta-pattern (N=2).
- `cognitive_harness/navigation/references/navigation.md` — current canonical `/navigate` spec; the corpus this inquiry is partially trying to escape AND partially trying to inherit.
- `docs/desc.md` — endgame doc (autonomous-consciousness, Baldwin cycles, meta-loop).
- Memory `project_end_goal_loop_architecture.md` — multi-head loops + merging loops trajectory.

**Each commitment will be re-tested in CONCLUDE's `## Inherited Commitments Re-test` section.** Sensemaking and Critique are responsible for the actual re-test work; CONCLUDE only enforces the section exists and references the re-test. Inheritance without re-test must be explicitly flagged with a reason.
