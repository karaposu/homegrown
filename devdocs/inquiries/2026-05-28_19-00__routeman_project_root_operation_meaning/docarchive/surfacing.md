# Surfacing — routeman_project_root_operation_meaning

## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-28_19-00__routeman_project_root_operation_meaning/_branch.md

Purpose: surface territory for diagnosing what routeman's cognitive operation IS at project root (Meaning layer). Four observation targets:
(1) Identity-across-scope;
(2) Three-sub-hypotheses adjudication (i wrong-tool, ii silently-two-operations, iii structural-collapse);
(3) 18-58 /comprehend connection;
(4) User's "concepts/features/directions" hypothesis.

---

## Mode + Entry Point + Territory

- **Mode:** ARTIFACT (routeman spec, /comprehend spec, prior findings, canon doc — all pre-existing).
- **Entry point:** SIGNAL-FIRST (specific Meaning-layer purpose).
- **Territory specification:** EXPLICIT-BOUNDED.

---

## Traversal Trace

### Region R1: Routeman spec §1 (Identity)

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 1 | `references/routeman.md` §1.1 verb-meaning (lines 17-25): *"To route is to enumerate possible next moves from a current state toward a goal or subgoal, type each by movement category, evaluate each for reachability and priority, and attach per-route prescriptive guidance — without selecting which move to take."* | **CORE** | HIGH | filesystem | The operation's identity is "enumerate possible next moves... type each by movement category." Output unit is the **route** — a TYPED next move, not a concept or a feature. The 16-type taxonomy is the typing space. |
| 2 | §1.2 upstream-precondition (line 29): *"Routeman is the boundary cognitive operation that **consumes the artifacts of a completed cognitive cycle** and produces the typed map of possible next moves. Without prior cognitive work producing a state worth enumerating from, **routeman has nothing to enumerate**."* | **CORE** | HIGH | filesystem | **DECISIVE for OT1.** The spec EXPLICITLY positions routeman as the boundary operation that consumes COMPLETED CYCLE ARTIFACTS. Project root content is not, in general, the artifact of a completed cognitive cycle — it's the project's working state. The "state worth enumerating from" presupposes prior cycle work. |
| 3 | §1.3 NOT-list, row 4 (line 42): *"The state being enumerated from — Routeman consumes the state as input; it does not produce the state. The cognitive work that produced the state is upstream."* | **CORE** | HIGH | filesystem | **DECISIVE for the structural-collapse hypothesis (iii).** Routeman does NOT model the state itself. At project root, the "concepts/features/directions" the user wants ARE the state's content — modeling that content is precisely what routeman explicitly excludes via its NOT-list. The operation that models the state is upstream of routeman, not routeman itself. |
| 4 | §1.3 NOT-list, row 7 (line 45): *"The goal or subgoal being served — Routeman receives the goal as input bias; the goal is exogenous. Generating the goal is upstream."* | **SUB** | HIGH | filesystem | Routeman does NOT generate the goal. At project root with a warmed-up navigation session, a goal must be supplied OR surfaced from the warmup context — but goal-generation is explicitly upstream of routeman. |
| 5 | §1.4 vocabulary — `current state`: *"The result of prior cognitive work that routeman enumerates from. Includes settled understanding, generated candidates, critique verdicts, telemetry, and unresolved openings. Received as input."* | **CORE** | HIGH | filesystem | The vocabulary entry for "current state" is RESULT-OF-PRIOR-COGNITIVE-WORK shaped. The shape lists *cycle artifacts* (settled understanding, generated candidates, critique verdicts) — not project artifacts (concepts, features, code modules). The state-vocabulary itself is cycle-shaped, not project-shaped. |
| 6 | §1.5 boundary placement (lines 65-66): *"Routeman is a boundary discipline — it operates **between cognitive cycles**, consuming what one cycle produced and producing the typed-next-moves field that selection or subsequent cycles consume."* | **CORE** | HIGH | filesystem | **DECISIVE.** Routeman's boundary placement is BETWEEN CYCLES, not at project root. The discipline's structural role presupposes there are cycles to be between. Project root isn't between cycles; it's the project's working state at any moment. |
| 7 | §2.2 movement-type taxonomy (16 types in 3 Families — Progression / Re-orientation / Coordination, lines 91-126). The types are: DEEPEN, REFINE, PURSUE-SEED, INVESTIGATE-FRONTIER, DEVELOP, TERMINATE, RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE, REVISIT (RESURRECT/INVALIDATE/REVERT), UNBLOCK, MERGE, TEST, CONSOLIDATE. | **CORE** | HIGH | filesystem | The taxonomy classifies MOVES (verbs of action). It does NOT classify concepts, features, or directions (nouns of state-content). At project root, asking "what features exist in this codebase?" doesn't map to any of the 16 types — features aren't moves. |

### Region R2: Routeman SKILL.md

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 8 | `cognitive_harness/routeman/SKILL.md` description (line 3): *"Enumerates all possible next moves from a current state toward a goal or subgoal, each tagged with movement type (from a 16-type taxonomy organized in three Families — Progression / Re-orientation / Coordination) and reachability, with per-route prescriptive guidance. Produces a Route Map that downstream selection picks from — routeman never selects. Use when the user asks 'what are the possible next moves,' 'list our options,' 'what could we do next,' or 'give me the directions to consider'; when a cognitive cycle has produced a state worth enumerating from; or before any selection-of-direction step that needs the full field of options enumerated, typed, and prioritized without commitment to one."* | **SUB** | HIGH | filesystem | "Give me the directions to consider" — interesting! The SKILL.md's description includes "directions" as a user-facing trigger phrase. This partially supports the user's hypothesis at the surface level. But the deeper definition (the §1 spec) constrains "directions" to MOVES toward a goal, not project-level conceptual directions. The surface phrasing is potentially misleading. |

### Region R3: /comprehend spec — the candidate operation

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 9 | `cognitive_harness/non-active/comprehend/SKILL.md` description (line 3): *"Transforms observable-but-opaque artifacts (codebases, systems, documents, designs) into tested working models with predictive power, through progressive model construction (CV1-CV5), perturbation testing, and adversarial self-verification. Use when the user asks to 'understand,' 'explain,' or 'model how X works,' when a codebase or system needs deep analysis before modification, when a design needs to be reverse-engineered, or when surface reading isn't enough and the model needs to predict untested behavior."* | **CORE** | HIGH | filesystem (non-active path) | **DECISIVE for OT3.** /comprehend's identity is EXACTLY what's needed at project root for the user's hypothesized output. "Codebases" and "designs" are explicitly named as comprehension targets. "Model how X works" is the question whose answer is concepts + components + relationships — the SUBSTANCE of "concepts, features, project directions." |
| 10 | `references/comprehend.md` lines 12-16: *"A thinking discipline for building internal working models of observable-but-opaque artifacts through progressive model construction, causal tracing, and falsifiable prediction testing. Comprehension is not reading — it's constructing a model that can predict behavior you haven't observed yet."* | **CORE** | HIGH | filesystem | The cognitive operation is **model construction** — building a representation of the artifact. This is artifact-modeling. Routeman's operation is candidate-adjudication (typed next-moves). The two are structurally distinct cognitive operations. |
| 11 | `references/comprehend.md` lines 22-30 (What Comprehension Is NOT): *"Comprehension is not: Reading (reading traverses the artifact; comprehension builds a model OF the artifact)... Sensemaking (sensemaking resolves ambiguity — choosing among competing interpretations)... Exploration (exploration maps what exists — an inventory of territory. Comprehension builds models of how the mapped things work)... Memorization... Analysis."* | **SUB** | HIGH | filesystem | /comprehend's NOT-list does NOT exclude what routeman explicitly produces (typed next-moves). The two operations are non-overlapping by definition. Confirmed: artifact-modeling and candidate-adjudication are structurally distinct. |
| 12 | `references/comprehend.md` lines 59-83 — Mechanistic vs Intent aspects: *"Mechanistic: How does this work?... Intent: Why was this built this way?... Mechanistic predicts behavior. Intent predicts design decisions."* | **SIDE** | HIGH | filesystem | /comprehend has two aspects, both producing model-content (concepts + relationships + design rationale). Neither produces movement-typed routes. The user's "concepts/features/directions" maps onto Mechanistic (concepts/features = model components) and partially Intent (directions = design rationale + project's intended trajectory). |

### Region R4: 18-58 finding — the candidate-adjudication vs artifact-modeling distinction

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 13 | `devdocs/inquiries/2026-05-27_18-58__next_focus_understand_discipline_evaluation/finding.md` — the deferred-revival reasoning (recalled from this session's prior context). The 18-58 finding committed the cognitive-operation distinction: **routeman = candidate-adjudication** (enumerating typed next-moves over a settled state); **/comprehend = artifact-modeling** (building a predictive model of an opaque artifact). Shape H (`/comprehend → /routeman`) was identified as the composition that activates when the task is artifact-modeling-before-enumeration. The revival was DEFERRED pending an audit of /comprehend's deprecation reason. | **CORE** | HIGH | session context (today) | **DECISIVE for OT3.** The 18-58 finding explicitly distinguishes the two operations and identifies the composition pattern. This current inquiry IS the case the 18-58 finding anticipated: a user wanting artifact-modeling output (concepts/features/directions) at a scope (project root) where the upstream artifact-modeling step has not yet happened. Per 18-58's distinction, this is /comprehend's territory, not routeman's. |
| 14 | The 18-58 finding's "before /routeman" placement proposal (Shape H — `/comprehend → /routeman`): when the task is artifact-modeling-before-enumeration, the artifact is first comprehended (concepts + relationships + design rationale), then routeman enumerates moves OVER that comprehension's output as the state. | **CORE** | HIGH | session context | Confirms the composition pattern: at project root, the right sequence is /comprehend (build the model of the project) THEN /routeman (enumerate next moves toward project goals, using the comprehended model as state). Routeman alone at project root skips the artifact-modeling step. |

### Region R5: 15-48 finding — the source-flexibility frame

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 15 | `devdocs/inquiries/2026-05-28_15-48__routeman_input_dependency_question/finding.md` — Axis 2 (source flexibility): routeman accepts any folder path or raw text per `SKILL.md` Step 1; project root IS a spec-supported input shape. | **SIDE** | HIGH | session context (today) | Project-root invocation is INPUT-SHAPE-LEGAL per the 15-48 verdict. But INPUT-SHAPE-LEGALITY ≠ OUTPUT-OPERATION-APPROPRIATENESS. The 15-48 verdict says "you CAN invoke routeman at project root"; this inquiry asks "what cognitive operation HAPPENS when you do." They are distinct questions. The 15-48 verdict doesn't determine the answer to this one. |
| 16 | 15-48 Axis 1 (cognitive necessity): state + goal as concepts are REQUIRED. At project root, state IS the project's content (concepts + features); goal is implicit (must be surfaced). The 15-48 verdict on Axis 1 leaves OPEN the question of what shape state + goal must take to satisfy the cognitive requirement. | **SUB** | HIGH | session context | If state at project root means "the project's concepts + features as currently extant" — that's exactly the artifact-modeling output. Routeman's spec presupposes state arrives reconstructable, not state-to-be-built. The reconstructability gap at project root is precisely the artifact-modeling gap. |

### Region R6: Canon navigation-session doc

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 17 | `docs/canon/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md` (from prior session grep): the navigation session's role is to *"steer movement across many inquiries"* — operating ACROSS prior worker outputs, not at a fresh project root with no prior cycle work. The session is described as reading inquiry artifacts. | **SIDE** | HIGH | filesystem | The canon doc's navigation-session role is cross-INQUIRY steering, not fresh-project comprehension. The user's scenario ("just one inquiry, mostly project content") doesn't match the navigation-session's primary use case. This SUPPORTS sub-hypothesis (i) — at fresh project root, the navigation session has no inquiry corpus to steer across; the right operation is to BUILD the model first. |
| 18 | The canon doc terminology note (line 3): *"'Navigation session' is the session-role described here — an isolated AI session that runs `/routeman` against completed inquiry artifacts."* | **UMBRELLA** | HIGH | filesystem | The navigation-session role is explicitly defined as running routeman against COMPLETED INQUIRY ARTIFACTS. Project root content (without inquiry artifacts) is OUTSIDE this defined scope. |

### Region R7: User's hypothesis verbatim

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 19 | User's verbatim hypothesis: *"so routeman, if run in root should give us list of concepts features, project directions? does this makes sense?"* | **CORE** | HIGH | this conversation | The user's hypothesized output: a LIST of three things (concepts, features, directions). None of these are typed next-moves per the 16-type taxonomy. "Concepts" and "features" are state-content (artifact-modeling output). "Directions" is ambiguous — could mean route-directions (routeman territory) or project-trajectory (artifact-modeling / Intent comprehension territory). |
| 20 | The user's hypothesis FAILS the type-taxonomy test: features and concepts don't map to any of the 16 movement types. The "directions" word in the SKILL.md description ("give me the directions to consider") refers to MOVE directions (routes), not project directions (trajectories). Surface vocabulary overlap; structural semantic divergence. | **CORE** | HIGH | derived | The user's hypothesis is operationally COHERENT — it describes a useful output — but the operation that produces it is NOT routeman per the spec. The operation is artifact-modeling (/comprehend). |
| 21 | The user's intuition that "running routeman a second time should give sth more accurate" maps to either: (a) routeman's re-invocation-as-parameterized-variation (§3.5) if the state has evolved between runs — but at project root with no MVL loops, state hasn't evolved unless the user manually changed code; OR (b) /comprehend's CV1→CV5 progressive depth model where each pass deepens the model. The "more accurate on second run" intuition matches (b) — /comprehend's progressive deepening — better than (a) — routeman's state-evolution-driven re-run. | **SUB** | HIGH | derived from /comprehend spec lines 35 | Additional evidence that the user's intuition tracks /comprehend's CV depth-hierarchy, not routeman's re-invocation pattern. |

---

## Concept Names List

- **Candidate-adjudication vs artifact-modeling** — type: `vocabulary`; provenance: trace #13 (18-58 finding); gloss: the structural distinction between routeman's operation (enumerating typed next-moves over a settled state) and /comprehend's operation (building a predictive model of an opaque artifact). Already committed by 18-58.
- **Cycle-shaped state-vocabulary** — type: `coined-term`; provenance: trace #5; gloss: routeman's §1.4 vocabulary for "current state" enumerates CYCLE artifacts (settled understanding, generated candidates, critique verdicts) — not project artifacts (concepts, features, code modules). The state-vocabulary structurally presupposes cycle work.
- **Boundary-between-cycles placement** — type: `vocabulary`; provenance: trace #6 (§1.5); gloss: routeman's structural role is BETWEEN cognitive cycles. Project root isn't between cycles; the placement doesn't fit.
- **Input-legality vs operation-appropriateness** — type: `coined-term`; provenance: trace #15; gloss: the 15-48 verdict that project-root is a spec-supported INPUT SHAPE doesn't determine that routeman's OPERATION fits at project root. The two axes are independent.
- **Shape H (`/comprehend → /routeman`) composition** — type: `vocabulary`; provenance: trace #14 (18-58 finding); gloss: the composition the 18-58 finding identified for artifact-modeling-before-enumeration; this inquiry's scenario directly activates Shape H.
- **Surface-vocabulary-overlap-with-structural-divergence** — type: `coined-term`; provenance: trace #20; gloss: routeman's SKILL.md says "give me the directions to consider" (route-directions); the user's hypothesis says "project directions" (trajectory-directions). The same word; different referents; the surface-overlap may have contributed to the user invoking routeman for an artifact-modeling task.

---

## State Summary

### Territory + Purpose echo

- **Territory:** routeman spec §1 + §2.2 + SKILL.md description; /comprehend spec; 18-58 finding's candidate-adjudication-vs-artifact-modeling distinction; 15-48 source-flexibility verdict; canon navigation-session doc; user's verbatim hypothesis.
- **Purpose:** diagnose what cognitive operation IS happening when routeman is invoked at project root.

### Coverage map

| Region | Coverage | Aggregate relevance |
|---|---|---|
| R1 Routeman §1 identity | CONFIRMED (§1.1-§1.5 read in full) | CORE-dominated (6 CORE + 1 SUB) |
| R2 Routeman SKILL.md | CONFIRMED (description verbatim) | SUB |
| R3 /comprehend identity | CONFIRMED (SKILL.md + references first 100 lines) | CORE × 2 + SUB + SIDE |
| R4 18-58 finding | CONFIRMED (cognitive-operation distinction + Shape H) | CORE × 2 |
| R5 15-48 source-flexibility | CONFIRMED (input-legality vs operation-appropriateness) | SIDE + SUB |
| R6 Canon navigation-session | CONFIRMED (cross-inquiry-steering scope) | SIDE + UMBRELLA |
| R7 User's hypothesis | CONFIRMED (verbatim + derivation) | CORE × 2 + SUB |

### Confirmed-absent regions

- **No spec language extending routeman's operation to artifact-modeling.** Grep on routeman.md for "model," "concept," "feature," "artifact-modeling": returns no input-contract or output-shape commitments to model-construction.
- **No 16-type-taxonomy entry classifying concepts/features as routes.** Verified: features and concepts are not typed in the taxonomy.
- **No spec language saying routeman generates the state.** §1.3 NOT-list row 4 explicitly excludes state-generation.
- **No 18-58 commitment that routeman covers artifact-modeling.** The 18-58 finding committed the OPPOSITE — routeman is candidate-adjudication; /comprehend is artifact-modeling.

### Recency distribution

| Region | Newest | Oldest |
|---|---|---|
| R1-R2 routeman spec | 2026-05-28 (post-amendments) | spec mtime |
| R3 /comprehend spec | filesystem (non-active path; not recently amended) | filesystem |
| R4 18-58 finding | 2026-05-27 | 2026-05-27 |
| R5 15-48 finding | today | today |
| R6 canon doc | filesystem | filesystem |
| R7 user hypothesis | this conversation | this conversation |

### Frontier flags — open questions for downstream

- **FF-Su1 — Sub-hypothesis (i) WRONG-TOOL is strongly supported by the spec evidence.** Routeman's §1.1 verb-meaning + §1.2 upstream-precondition + §1.3 NOT-list + §1.4 cycle-shaped state-vocabulary + §1.5 between-cycles placement + §2.2 taxonomy all converge: routeman's operation is candidate-adjudication over a settled cycle-state, not artifact-modeling of project content. Sensemaking should test this with structural rigor — does ANY spec evidence support sub-hypotheses (ii) or (iii)?
- **FF-Su2 — Sub-hypothesis (iii) STRUCTURAL-COLLAPSE fails the taxonomy test.** Features and concepts don't map to any of the 16 movement types. The user's hypothesized output shape is not a Route Map; it's a model-content list. (iii) cannot hold without expanding the taxonomy, which would be a Layer-Process or Layer-Structural amendment, not a Meaning-layer reading.
- **FF-Su3 — Sub-hypothesis (ii) SILENTLY-TWO-OPERATIONS has no spec evidence.** The spec is consistent — one operation, one output shape. Sensemaking should confirm the absence of dual-mode signals + adjudicate why the user might have inferred routeman does both.
- **FF-Su4 — 18-58 /comprehend revival reactivates.** Per the 18-58 finding's deferred-revival framework, sub-hypothesis (i) winning directly promotes /comprehend revival to the front of the queue. Sensemaking + Decomposition should route this consequence explicitly (the inquiry's verdict has a downstream consequence beyond the immediate Meaning-layer question).
- **FF-Su5 — The user's hypothesis is OPERATIONALLY COHERENT but ROUTED TO THE WRONG DISCIPLINE.** "Concepts, features, project directions" is a USEFUL output — it's just /comprehend's output, not routeman's. The corrective should honor the user's underlying intuition (something useful comes from project-root invocation in a warmed-up session) while re-routing the operation to /comprehend.
- **FF-Su6 — Shape H (`/comprehend → /routeman`) is the composition pattern that fits the user's actual scenario.** First /comprehend builds the model of the project (concepts + features + design directions); then /routeman enumerates next-moves over that model. The "second invocation, more accurate" intuition fits /comprehend's CV depth-hierarchy (CV1→CV5), not routeman's state-evolution re-run.

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-28T19:10:00Z
extent: "Routeman spec §1 + §2.2 + SKILL.md description read in full; /comprehend SKILL.md + references/comprehend.md first 100 lines read; 18-58 finding's candidate-adjudication-vs-artifact-modeling distinction confirmed from session context; 15-48 source-flexibility verdict confirmed from session context; canon navigation-session doc framing recalled; user's verbatim hypothesis preserved + derivation logged."
```

---

## Telemetry

- Mode: `artifact` + entry point: `signal-first`
- Cycles run: 1 (single-pass; territory was focused on identity-defining sections)
- Items enumerated: 21 (R1: 7 + R2: 1 + R3: 4 + R4: 2 + R5: 2 + R6: 2 + R7: 3)
- Items tagged: CORE = 12 + SUB = 6 + SIDE = 4 + UMBRELLA = 1
- Sub-phase fired: NO (territory was explicit-bounded)
- items_with_mtime: 17 (filesystem); items_without_mtime: 4 (session-context recall + derivation items)
- Convergence criteria status: MET — identity-defining sections traversed; /comprehend's identity verified as distinct; 18-58 distinction confirmed; user's hypothesis tested against the taxonomy.
- Failure modes checked: Missed-relevance (PASS); Surfaced-irrelevance (PASS); Over-coverage (PASS); Territory-mis-binding (PASS — stayed within identity scope); Recency-Equates-Idleness (PASS); Recency-Bias-Filter (PASS); Workspace overload (PASS — bounded territory).
- Self-assessment verdict: **PROCEED**

---

## Frontier — open questions for downstream

The 6 frontier flags route to Sensemaking:

1. (Sensemaking) Test sub-hypothesis (i) WRONG-TOOL with structural rigor; six spec anchors converge against routeman at project root.
2. (Sensemaking) Confirm sub-hypothesis (iii) STRUCTURAL-COLLAPSE fails the taxonomy test.
3. (Sensemaking) Confirm sub-hypothesis (ii) SILENTLY-TWO-OPERATIONS has no spec evidence; diagnose why the user might have inferred it.
4. (Sensemaking + Decomposition) Route the 18-58 /comprehend revival consequence explicitly.
5. (Sensemaking + Innovation) Honor the user's underlying intuition (something useful comes from warmed-up project-root invocation) while re-routing the operation.
6. (Sensemaking + Innovation) Position Shape H (`/comprehend → /routeman`) as the composition pattern that fits the scenario.

---

## Structural check (manual; structural_check.sh absent)

- Required sections present: ✓ Mode/Entry-point/Territory; ✓ Traversal Trace (per-entry tags + confidence + recency); ✓ Concept Names List; ✓ State Summary (coverage / confirmed-absent / recency / frontier / workspace-populated); ✓ Telemetry; ✓ Frontier routing.
- Workspace work-product present: ✓.
- "Thin" artifact criterion: ✓ (no full file content reproduced; only brief verbatim quotes load-bearing for the diagnosis).
- No `[FAIL]` lines.

PROCEED to Sensemaking.
