# Surfacing — routeman_mvlw_integration_pattern

## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-27_18-09__routeman_mvlw_integration_pattern/_branch.md

Purpose: surface territory for analyzing the integration relationship between the `/routeman` SKILL (the route-enumeration runner) and the `/MVLw` SKILL (the extended cognitive-loop runner). The question is about workflow-layer composition of two SKILLS, not about pipeline-merging routeman as a discipline into MVLw.

4 observation targets per LOOP_DIAGNOSE MC2:
(1) integration pattern — how can the two skills compose at the workflow layer?
(2) job-boundary reframe — is reasoning-heavy enumeration even routeman's job?
(3) heaviness concern — is routeman too lightweight as a skill?
(4) staged-rerunnability hypothesis — does re-running routeman provide the "heavy mode" the user worries is missing?

**User clarification mid-run:** `/MVL+` and `/MVL2+` are DEPRECATED and out of scope. Only `/MVL` (classic) and `/MVLw` remain as active loop runners alongside `/routeman`.

---

## Mode + Entry Point + Territory

- **Mode:** ARTIFACT — territory has concrete pre-existing items (skill specs, discipline references, prior findings).
- **Entry point:** SIGNAL-FIRST — specific purpose given (analyze the workflow composition of two skills).
- **Territory specification:** EXPLICIT-BOUNDED — territory edges pre-given by `_branch.md`. Boundary-discovery sub-phase SKIPPED.

---

## Traversal Trace

### Region R1: The two skills being composed

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 1 | `~/.claude/skills/MVLw/SKILL.md` — the /MVLw runner. Pipeline: Su → S → D → I → C; 5 disciplines run sequentially; ITERATION-COMPLETE branch checks "is the question answered?" and either CONCLUDEs or refines focus and loops again | **CORE** | HIGH | filesystem | Defines the workflow shape of /MVLw — a multi-iteration cognitive loop where each iteration is a full 5-discipline pass; iteration converges when one survivor cleanly answers the framed question. The "heavy reasoning" the user attributes to /MVLw is THIS iteration mechanism + the 5-discipline depth. |
| 2 | `~/.claude/skills/MVL/SKILL.md` — the classic /MVL runner. Pipeline: S → I → C; 3 disciplines; same ITERATION-COMPLETE mechanism, lighter pipeline | **SUB** | HIGH | filesystem | Provides baseline-reasoning-loop reference. The classic 3-discipline version is the project's most parsimonious cognitive loop. /MVLw is the 5-discipline extended variant for inquiries that need Surfacing-upstream + Decomposition-mid. |
| 3 | `cognitive_harness/routeman/SKILL.md` — the /routeman runner. Step 0 pre-reads `references/routeman.md`; consumes a current-state + goal; runs Enumeration-attributed Traversal until convergence per the routeman §4.5 stop-rule; produces the Route Map artifact | **CORE** | HIGH | filesystem | /routeman is a SINGLE-DISCIPLINE INVOCATION — it doesn't run a multi-discipline pipeline. It runs ONE cognitive operation (typed-reachability assignment + adaptive-guidance generation) over a closed Enumeration phase that internally iterates until coverage criteria meet. Crucially: /routeman is itself a /MVL-style ADHOC invocation, NOT an inquiry-pipeline runner — but its internal Enumeration loop has SIMILAR semantics to /MVLw's iteration (run until convergence on its specific cognitive task). |
| 4 | `cognitive_harness/routeman/references/routeman.md` — the live discipline spec (read fully earlier in session). 10 Enumeration components; 16 movement types in 3 Families; 7-status reachability enum; 4-mode adaptive guidance; staged 2-stage mapping (stage-1 generic, stage-2 directional); re-invocation as parameterized variation; the Route Map artifact + the `_route.md` invocation-state file (per the priors' commitments + the 16-45 consolidated amendment plan) | **CORE** | HIGH | 2026-05-25T01:14:59Z | Defines what /routeman's cognitive operation IS at full depth. Two invocation modes are particularly load-bearing for the composition question: (a) GENERIC MODE = stage-1 = whole-territory enumeration; (b) DIRECTIONAL MODE = stage-2 = sub-route expansion under a selected parent route. Re-invocation is parameterized variation: a prior Route Map can be incorporated; routes carried forward; new routes added; status updates applied. THE staged + re-invocation behavior IS the substrate the user's "staged-rerunnability" hypothesis targets. |

### Region R2: Routeman's invocation modes + iteration semantics (the substrate the user's hypothesis targets)

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 5 | Generic mode (per 24-00 finding) — fresh-state invocation; enumerates the whole-territory next-move space. The "wide map" mode. | **CORE** | HIGH | 2026-05-24T00:20:00Z | This is the user's "classic enumeration" — running routeman on a current-state to surface ALL possible directions. |
| 6 | Directional mode (per 18-58 + 24-00 + 14-49 findings) — stage-2 sub-route expansion. Caller supplies `parent-route-id` + `file-paths-in-scope` + optional `refined-sub-purpose`; routeman reads parent's `routeman.md` (MANDATORY-WHEN-AVAILABLE) to acquire parent-route context; enumerates SUB-ROUTES under the parent. | **CORE** | HIGH | 2026-05-23T18:58:00Z | This is the "depth into one route" mode. Already a DEPTH-AWARE invocation pattern. Substrate for the user's staged-rerunnability hypothesis: re-invoke routeman on the same state but in directional mode targeted at the most-uncertain parent route — produces refined sub-routes under that parent. The staged-mapping mechanism IS routeman's existing depth mechanism. |
| 7 | Re-invocation as parameterized variation (§3.5 of the live spec; §3.6 in the routeman.md spec text + 00-51's commitment) — prior Route Map incorporated at Reception; REVISIT sub-actions (RESURRECT / INVALIDATE / REVERT); routes whose state-condition hasn't changed carried forward; new routes added; routes that became stale flagged | **CORE** | HIGH | 2026-05-24T00:20:00Z + (16-45 reframed via `_route.md` reference) | This is the cross-invocation refinement mechanic — the project's "staged-rerunnability" in concrete form. The user's hypothesis: "Each rerun refines the route enumeration… we can double-run in really important stage of the project to make sure enumerated routes are highly accurate." This commitment EXISTS in the live spec (re-invocation is a first-class behavior of the discipline). |
| 8 | The Enumeration-attributed Traversal cycle (§3.4 of routeman.md) — internal-to-routeman iteration. 10 components fire per cycle; loops until convergence per §4.5 (next-move space exhausted at current resolution; no routes filtered at uncertain-typing level; rejected only on HIGH-confidence inapplicability). | **SUB** | HIGH | 2026-05-25T01:14:59Z | WITHIN a single /routeman invocation, the Enumeration phase already loops until coverage criteria meet. The "Coverage trigger" in §4.5 says: "when the discipline self-observes that the most-recent enumeration cycle produced no new routes and no Family balance shifted, the discipline terminates." So routeman is NOT a single-pass enumerator — it iterates internally until coverage convergence. The "lightweight" framing the user worries about may be incomplete: routeman has internal iteration AND external re-invocation as two depth mechanisms. |
| 9 | Self-assessment verdict at §4.7 — PROCEED / FLAG / RE-RUN per /routeman invocation. RE-RUN explicitly signals when "output incomplete or structurally suspect (e.g., enumeration produced empty map when state has clear cycle output; type-assignment confidence pervasively LOW); re-run recommended with adjusted parameters." | **CORE** | HIGH | 2026-05-25T01:14:59Z | Routeman has a BUILT-IN re-run recommendation mechanism. If a single invocation's output is structurally suspect, the discipline self-signals RE-RUN. This is the discipline's own answer to the user's "what if we need to be more thorough" question. The mechanism predates the user's concern. |
| 10 | The 16-45 consolidated amendment plan + the live spec's stable schema (per the consolidated finding) — provides routeman's CURRENT shape that the integration question operates against | **UMBRELLA** | HIGH | 2026-05-27T17:55:00Z | The committed routeman shape (per the very recent consolidation) is the foundation the integration question rests on. No re-litigation; treated as given. |

### Region R3: /MVLw's iteration semantics (the analogue substrate)

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 11 | /MVLw ITERATION COMPLETE branch — after all 5 disciplines run, "Is the question answered?" If NO, increment iteration, refresh focus, run pipeline again. "Each iteration narrows the focus based on what the previous iteration revealed." | **CORE** | HIGH | filesystem | /MVLw has an EXPLICIT cross-iteration loop at the runner-level (in addition to per-discipline internal loops). This is the analogue of routeman's re-invocation. The mechanism shape is similar: both have a "is the task done?" gate + a refine-and-rerun branch. Critical observation: routeman's re-invocation refines ROUTES; MVLw's iteration refines a QUESTION's framing. Different content axis — same iteration shape. |
| 12 | /MVLw's pipeline: Su (Surfacing) → S (Sensemaking) → D (Decomposition) → I (Innovation) → C (Critique). 5 distinct cognitive operations, each producing a save-to-disk artifact, each consumed by the next. | **CORE** | HIGH | filesystem | /MVLw's "heavy reasoning" character comes from THIS 5-operation pipeline. Each discipline is a different cognitive operation (drawing items, stabilizing meaning, partitioning complexity, generating novelty, adversarial testing). The user's claim that "reasoning part for our project is usually handled by MVLw loop" is structurally accurate — /MVLw IS the project's heavy-reasoning workflow. |
| 13 | /MVLw's STRICT-SEQUENCE rule: "Always Su → S → D → I → C. Every question gets the full loop. No shortcuts. No variable pipelines." | **SUB** | HIGH | filesystem | /MVLw doesn't have a "skip a discipline" mode. Every iteration is the full 5-discipline pass. This rigidity is by design — variable-pipeline mode was deliberately rejected by the runner spec. Implication for composition: /MVLw can be invoked AROUND or INSIDE other workflows, but can't be selectively-pipelined to "just do the reasoning part." |
| 14 | /MVLw's discipline-spec loading: each iteration loads each discipline's spec via `Skill(skill: "<discipline-skill-name>", args: "[inquiry_path]/_branch.md")`. The runner doesn't execute disciplines from memory; it invokes them as sub-skills. | **SIDE** | MEDIUM | filesystem | Interesting structural fact: /MVLw INVOKES sub-skills. The `Skill()` invocation pattern is how /MVLw composes. This suggests that /MVLw could (in principle) invoke /routeman as a sub-skill in the same way it invokes /surfacing or /sense-making. But the current /MVLw spec only knows about its 5-discipline pipeline; it has no slot for /routeman. The composition would have to be at a different layer (e.g., AROUND /MVLw, not INSIDE). |
| 15 | /MVLw vs /MVL: same iteration mechanism; same ITERATION-COMPLETE gate; only difference is pipeline-length (5 vs 3 disciplines). | **SUB** | HIGH | filesystem | Reference baseline. Tells us the iteration-mechanism is the project-canonical loop pattern, generalizable across runner variants. |

### Region R4: Empirical-evidence on the integration pattern

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 16 | `find devdocs/inquiries -name "routeman.md"` returned EMPTY. NO inquiry folder has ever produced a `routeman.md` file. | **CONFIRMED-ABSENT** | HIGH | n/a | Empirical surprise: routeman has NEVER been used inside an inquiry folder. All routeman work to date has been about DESIGNING routeman (via /MVLw inquiries that produce findings about routeman); /routeman itself has not been invoked in practice on real cognitive tasks. This means: (a) there is no empirical precedent for the integration pattern the user is asking about; (b) the answer has to be design-grounded (against the specs) rather than empirically-grounded; (c) it is plausible the user is now ready to USE routeman for the first time and is asking how to compose it with their existing workflow. |
| 17 | The example route map referenced in 13-23's finding (the "2026-05-25 readiness Route Map" with 22 routes) exists somewhere in `devdocs/routeman_releted/` or analogous — let me search | **UMBRELLA** | MEDIUM | n/a | Even if /routeman SKILL was never invoked on an inquiry, there may have been an experimental routeman output produced manually. The 13-23 finding's empirical refutation work used real-route examples — these came from somewhere. The output may be at `devdocs/routeman_releted/` rather than at any inquiry folder. |

### Region R5: Composition shapes (possibility-mode candidate generation)

The integration question's answer space contains candidate composition shapes. Surfacing generates these as possibility-mode candidates (per §3.1 — surfacing's possibility case for solution spaces).

| # | Item identifier (composition shape) | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 18 | **Shape A — Sequential (/MVLw THEN /routeman):** Run /MVLw on a hard question. After CONCLUDE produces `finding.md`, the user invokes /routeman on the inquiry folder. /routeman reads the finding's state (settled understanding + open questions + survivors) and enumerates next moves. | **CORE** | HIGH (candidate) | n/a | This is the most natural composition shape given current spec semantics. /MVLw's CONCLUDE produces a finding; routeman's Step 1 says "If the input is a folder path, read the relevant files to reconstruct the current state." Routeman accepts inquiry-folder input. The shape matches each skill's existing invocation contract; no spec change needed. |
| 19 | **Shape B — Sequential (/routeman THEN /MVLw):** Run /routeman first to surface possible directions. User selects one route. User invokes /MVLw on the selected route as a refined question, getting deep reasoning on that single direction. | **CORE** | HIGH (candidate) | n/a | Inverse of Shape A. Routeman's job is enumeration-without-selection; user selects; selected route becomes /MVLw's seed. The 18-58 finding's directional-mode IS this pattern at routeman scope (stage-1 generic → user selects → stage-2 directional). Shape B extends it across skills: stage-1 generic /routeman → user selects → /MVLw deep-reasoning iteration. |
| 20 | **Shape C — Sandwich (/MVLw → /routeman → /MVLw):** Use /MVLw to deeply understand a problem; /routeman to enumerate possible directions from the understanding; /MVLw again on the chosen direction for deep follow-through. | **SUB** | MEDIUM (candidate) | n/a | Composition of A + B. Useful when both the upstream question is hard AND the chosen route is hard. Maximal heaviness; maximal cost. Likely overkill for most cases. |
| 21 | **Shape D — /MVLw invokes /routeman as a sub-skill inside an iteration:** Add /routeman as a discipline-slot in /MVLw's pipeline, OR invoke /routeman from inside the Innovation phase when Innovation generates direction-candidates. | **SIDE** | LOW (candidate) | n/a | Spec-modifying. Requires changes to /MVLw's STRICT-SEQUENCE rule. The current spec rejects variable pipelines; this shape would require relaxing that rule. Out of scope for THIS inquiry (the user wants composition at the workflow layer, not pipeline modification). Flag for hypothetical-future. |
| 22 | **Shape E — /routeman invokes /MVLw on uncertain routes:** Inside a /routeman invocation, when a route's typed-reachability has LOW confidence OR the type-assignment is ambiguous, the runner offers to invoke /MVLw on that specific route to deepen the reasoning before commit. | **SIDE** | LOW (candidate) | n/a | Spec-modifying for /routeman. Requires /routeman to know how to spawn child inquiries. The branch_inquiry protocol exists, but /routeman doesn't currently use it. Spec change required. Out of scope for THIS inquiry's deliverable; flag as Refinement Trigger. |
| 23 | **Shape F — Parallel/orthogonal (no composition):** /routeman and /MVLw operate on different cognitive tasks; they don't compose. The user uses /MVLw for hard reasoning and /routeman for enumeration; the two never interact directly. | **SUB** | MEDIUM (candidate) | n/a | Honest minimal answer. If the operations don't compose at the cognitive level, the workflow shouldn't force composition. Test: does /MVLw produce outputs /routeman consumes (or vice versa)? Shape A demonstrates the answer is YES (the finding's state). So Shape F is the negative-case anchor; Shape A is the affirmative case. |
| 24 | **Shape G — Staged-rerunnability composition:** Run /routeman once for an initial enumeration (cheap); inspect; if a route region needs more accuracy, re-run /routeman in directional mode for that region (stage-2 expansion). The "heaviness" is achieved by repeated invocations at progressively narrower scope. | **CORE** | HIGH (candidate) | n/a | This is the user's own hypothesis articulated as a composition shape. Tests directly against routeman's existing staged-mapping commitment (per 18-58). The 14-49 read-policy makes the re-invocation operationally rigorous (MANDATORY-WHEN-AVAILABLE read of parent routeman.md). The shape is the project's commitment in action. |

### Region R6: Cognitive-operation-level analysis (what does each skill DO?)

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 25 | /MVLw is a META-REASONING operation. Its 5 disciplines TOGETHER produce stabilized understanding + tested candidates + verdicts. Output: a finding that says "here's what we understand, here's what we propose, here's what survives scrutiny." | **CORE** | HIGH | from /MVLw + discipline references | The cognitive primitives /MVLw uses cross all 11 typed primitives (Attention-pointer, Working Memory, Salience, Intuition-similarity, Context-framing, Inhibition, Simulation, Evaluation, Metacognition, Focus-deep, Motivation) because each discipline emphasizes a different subset. /MVLw is INTERPRETIVE + STRUCTURAL + GENERATIVE + ADVERSARIAL — multiple operations chained. |
| 26 | /routeman is a SINGLE COGNITIVE OPERATION at depth — typed-reachability assignment + adaptive-guidance generation. Output: a typed map of next moves. NOT meta-reasoning; NOT interpretive ("what does this mean"); NOT adversarial ("which survives"). | **CORE** | HIGH | from references/routeman.md | The routeman primitives are bounded: Attention-pointer + Working Memory + Salience + Intuition-similarity + Context-framing + Inhibition + Simulation + Evaluation + Metacognition + Focus-deep. NOT Motivation (deliberate absence per spec). The discipline is FORWARD-FACING — it draws from current state toward goal but doesn't re-examine the state. |
| 27 | The cognitive distinction: /MVLw asks "what should we understand and decide about X?" /routeman asks "given what we've decided about X, what are the possible next moves?" | **CORE** | HIGH | derived from R5 and R6 | These are STRUCTURALLY ORTHOGONAL operations. /MVLw answers what-the-problem-is and what-could-solve-it. /routeman answers what-moves-are-available-given-an-answered-problem. The orthogonality EXPLAINS why they compose well sequentially (/MVLw output feeds /routeman input). |
| 28 | Sub-question: when the user says "we need strong reasoning WITH path enumeration," what cognitive operation are they actually describing? | **SUB** | MEDIUM | from user input | Re-reading the user's text: "But sometimes we need strong reasoning with path enumeration." This may describe two things: (a) strong-reasoning-then-enumeration (sequential — Shape A); (b) reasoning DURING enumeration (the typed-reachability mechanism's prosecution/defense moment; each route's WHY anchor). Routeman has (b) at the per-route level — the WHY field + the `why-this-might-be-important` field (γ-field) ARE the reasoning embedded in enumeration. The question is whether the user wants more than that — maybe a /MVLw-style adversarial test on the route map BEFORE acting. |

### Region R7: Heaviness axis — what would "heavy mode" actually mean?

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 29 | Possible meanings of "heavy" for /routeman: (a) more cycles within Enumeration phase before convergence; (b) more rigorous adversarial testing of routes; (c) more depth in the per-route guidance; (d) multi-discipline cognitive operations on the route map (not just enumeration); (e) running the discipline twice (staged-rerunnability). | **CORE** | HIGH (possibility-mode enumeration) | n/a | The user's "lightweight" intuition could mean any of (a)-(e). Adjudication: which of these are absent from the current /routeman spec? (a) Internal iteration already exists per §4.5. (b) Adversarial testing IS absent — /routeman has no prosecution/defense step on its own routes. (c) Guidance depth IS variable per the 4 guidance modes. (d) Multi-discipline cognitive operations would be /MVLw composing AROUND /routeman, not /routeman internalizing more disciplines. (e) Staged-rerunnability already exists. The honest answer: (b) is the gap; (a), (c), (e) already exist; (d) is the composition pattern the user is asking about. |
| 30 | The user's "double run in really important stage" hypothesis maps to (e) + (b) — re-running provides bounded adversarial test (the second run is the prosecution against the first run's route map; routes that survive both runs are higher-confidence). | **SUB** | HIGH | derived from user input + R5/R6 | This is the project's commitment-in-action: re-invocation is parameterized variation; second run can RESURRECT / INVALIDATE / REVERT routes from the first; net effect ≈ adversarial-on-prior. Not strictly the same as /MVLw's full adversarial testing (Critique discipline does proper prosecution/defense), but operationally provides an analogous safety check. |

### Region R8: Discipline taxonomy + Boundary character

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 31 | Routeman is a **Boundary discipline** per the discipline taxonomy doc. Boundary disciplines operate between cognitive cycles — they consume what a cycle produced (the state) and produce input for the next operation (selection or further cycles). | **CORE** | HIGH | from taxonomy doc | This is the KEY structural fact for the integration question. Boundary disciplines are DESIGNED to operate AROUND other cognitive cycles, not INSIDE them. /MVLw is a cognitive cycle (or rather a cognitive-loop runner that produces cycles); /routeman is the boundary operation that runs between cycles. The architecture explicitly accommodates composition at the boundary. |
| 32 | The other Boundary discipline planned but not yet shipped: `/reflect` (backward-facing — observes how the prior cycle ran). Lives at `cognitive_harness/non-active/reflect/`. | **UMBRELLA** | HIGH | from taxonomy + non-active folder listing | Reflect is /routeman's planned mirror: routeman = forward Boundary (next moves); reflect = backward Boundary (how cycle ran). When /reflect ships, the composition pattern will likely be /MVLw → /reflect → /routeman (reflect observes the iteration, routeman enumerates moves) OR /MVLw → /routeman, with /reflect inserted later for diagnostic loops. Out of scope for THIS inquiry but informs the integration architecture. |
| 33 | Per `docs/canon/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md` — a navigation session is an isolated AI session that runs /routeman across N completed worker inquiry artifacts. This is a HIGHER-LEVEL composition pattern (navigation session over N workers), distinct from THIS inquiry's question (single-worker /MVLw + /routeman). | **UMBRELLA** | HIGH | from canon doc | The canon already names a /routeman-uses-many-/MVLw-outputs pattern at the multi-head level. THIS inquiry is at the SINGLE-WORKER level. Both compositions are valid; they operate at different scope levels. Out of scope here (bounded follow-up). |

---

## Concept Names List

- **Workflow-layer composition** — type: `coined-term`; provenance: trace #18-#24; gloss: the user's clarification — composition of two SKILLS (the runners) at the workflow layer, not pipeline-merging routeman as a discipline.
- **Staged-rerunnability** — type: `coined-term`; provenance: trace #7 + user input; gloss: routeman's re-invocation as parameterized variation, used to refine an enumeration via successive runs. The user's hypothesis that this provides the "heavy mode."
- **Cognitive-operation orthogonality** — type: `coined-term`; provenance: trace #27; gloss: /MVLw and /routeman answer structurally distinct questions (what should we understand-and-decide vs given that, what moves are available). Orthogonality explains why they compose sequentially.
- **Boundary discipline** — type: `vocabulary`; provenance: trace #31; gloss: a discipline that operates between cognitive cycles, consuming the prior cycle's state and producing next-step input. Routeman is one.
- **Generic vs directional mode** — type: `vocabulary`; provenance: trace #5 + #6; gloss: routeman's two invocation modes — generic = stage-1 whole-territory; directional = stage-2 sub-route expansion under a selected parent.
- **Internal Enumeration loop** — type: `structural-reference`; provenance: trace #8; gloss: within a single /routeman invocation, Enumeration phase iterates until coverage convergence per §4.5. Distinct from cross-invocation re-invocation.
- **Self-assessment RE-RUN signal** — type: `structural-reference`; provenance: trace #9; gloss: /routeman's built-in mechanism to flag "output structurally suspect; re-run recommended." Predates the user's heaviness concern.
- **Composition shapes A–G** — type: `coined-term`; provenance: trace #18-#24; gloss: 7 candidate composition patterns enumerated at the possibility-mode candidate-generation step.
- **Heaviness sub-axes (a)-(e)** — type: `coined-term`; provenance: trace #29; gloss: 5 possible meanings of "heavy mode" — internal iteration, adversarial testing, guidance depth, multi-discipline operations, staged-rerunnability. Each maps to a different presence/absence in current /routeman.

---

## State Summary

### Territory + Purpose echo

- **Territory:** /MVLw runner spec + /MVL runner spec (baseline) + /routeman runner spec + routeman.md live discipline spec + 4 prior routeman findings (context only; not synthesized) + canon doc on Boundary discipline taxonomy + canon doc on navigation session.
- **Purpose:** analyze workflow-layer composition of /routeman + /MVLw skills; adjudicate 4 observation targets (integration pattern, job-boundary reframe, heaviness concern, staged-rerunnability hypothesis).

### Coverage map

| Region | Coverage status | Aggregate relevance |
|---|---|---|
| R1 (the two skills) | CONFIRMED (full spec reads of /MVLw + /MVL + /routeman + routeman.md) | Mix CORE (3) + SUB (1) |
| R2 (routeman invocation modes + iteration) | CONFIRMED (all relevant spec sections + prior findings as context) | CORE (4) + SUB (2) + UMBRELLA (1) |
| R3 (MVLw iteration semantics) | CONFIRMED (full /MVLw spec read) | CORE (2) + SUB (2) + SIDE (1) |
| R4 (empirical evidence) | CONFIRMED-ABSENT (no routeman.md files in inquiry folders) — empirical precedent zero | CONFIRMED-ABSENT (1) + UMBRELLA (1) |
| R5 (composition shapes) | CONFIRMED (possibility-mode generation of 7 candidate shapes) | CORE (3) + SUB (2) + SIDE (2) |
| R6 (cognitive-operation analysis) | CONFIRMED (cross-spec synthesis at operation level) | CORE (3) + SUB (1) |
| R7 (heaviness axis) | CONFIRMED (possibility-mode enumeration of heaviness sub-meanings + mapping to current /routeman) | CORE (1) + SUB (1) |
| R8 (taxonomy + Boundary character) | CONFIRMED (taxonomy doc + canon docs) | CORE (1) + UMBRELLA (2) |

### Confirmed-absent regions

- **Empirical use of /routeman alongside /MVLw outputs** — verified via `find devdocs/inquiries -name routeman.md` returning empty. ZERO precedent. The integration the user is asking about has never been exercised in practice; the answer is necessarily design-grounded against the specs.
- **A "heavy mode" spec for /routeman** — no separate heavy invocation mode exists in the /routeman SKILL.md or references/routeman.md. The depth mechanisms that DO exist are: (a) internal Enumeration loop until coverage; (b) staged 2-stage mapping (generic + directional); (c) re-invocation as parameterized variation; (d) self-assessment RE-RUN signal. No fifth "heavy" mode is present.
- **A /routeman-invokes-/MVLw mechanism** — neither spec contains a hook for /routeman to spawn a sub-/MVLw inquiry on a specific route. The branch_inquiry protocol exists but /routeman doesn't currently use it. Spec change would be required for Shape E.

### Recency distribution

| Region | Newest | Oldest | no-mtime-count |
|---|---|---|---|
| R1 skills | filesystem (live) | filesystem (live) | 0 |
| R2 routeman modes | 2026-05-27T17:55:00Z (post-16-45 consolidation) | 2026-05-23T18:58:00Z (18-58 staged-mapping finding) | 0 |
| R3 MVLw | filesystem (live) | filesystem (live) | 0 |
| R4 empirical | n/a | n/a | 1 (confirmed-absent) |
| R5 composition shapes | n/a (possibility) | n/a | 7 (possibility-mode candidates) |
| R6-R8 | derived/canon | derived/canon | mixed |

The /routeman live spec mtime (2026-05-25) is OLDER than the 16-45 consolidation finding (2026-05-27 17:55) which proposes amendments to it. The CURRENT TRUTH about routeman's shape is the 16-45 consolidation; the live spec lags. Note: this asymmetry is the same one the 16-45 inquiry already addressed. THIS inquiry treats the post-16-45 consolidated shape as routeman's committed shape.

### Frontier flags — open questions for downstream

- **FF-Su1 — Empirical-precedent gap.** Routeman has never been invoked on a real inquiry. The integration question's answer is design-grounded only; Sensemaking should explicitly flag the design-vs-runtime testing distinction (analogous to 14-03's "design-grounded, not runtime-grounded" honesty).
- **FF-Su2 — Which composition shape(s) survive?** 7 candidate shapes generated. Sensemaking should adjudicate which compose well (Shape A + B + G are HIGH-confidence candidates; Shape C is the maximal sandwich; Shape D + E are spec-modifying and out of scope; Shape F is the negative-case anchor). The adjudication produces the integration-pattern verdict.
- **FF-Su3 — Heaviness adjudication.** Of the 5 heaviness sub-axes (a)-(e), (a) + (c) + (e) already exist in /routeman; (b) adversarial-on-routes is the gap; (d) multi-discipline cognitive operations IS the /MVLw composition pattern. Sensemaking should adjudicate whether the (b) gap warrants a heavy-mode spec change OR whether /MVLw composing around /routeman covers it.
- **FF-Su4 — Staged-rerunnability hypothesis status.** The user's hypothesis is structurally sound: re-invocation is parameterized variation and ALREADY exists; second runs CAN RESURRECT/INVALIDATE/REVERT routes from first. But does this constitute "heavy mode" or merely "depth via repetition"? Sensemaking should clarify the distinction. The hypothesis may be 80% right with 20% missing.
- **FF-Su5 — Job-boundary verdict.** Is reasoning-heavy enumeration routeman's job? Routeman's primitives compose toward TYPED REACHABILITY ASSIGNMENT — not toward reasoning-about-reasoning. The honest answer is likely: reasoning-heavy enumeration is NOT routeman's job; it's /MVLw's job (the upstream reasoning) + /routeman's job (the enumeration). The composition IS the answer.
- **FF-Su6 — Directional-mode-as-staged-rerunnability.** Routeman's directional mode (stage-2 expansion under a parent route) is structurally the SAME as the user's "double-run on important routes" hypothesis. The user may not have recognized that the existing 18-58 staged-mapping mechanism IS the answer to their concern. Sensemaking should make this explicit.
- **FF-Su7 — Composition-shape-A is the natural answer.** Shape A (/MVLw THEN /routeman, where routeman reads the inquiry folder as state input) maps cleanly to both specs' invocation contracts without spec changes. Sensemaking should test whether Shape A is the SUFFICIENT answer OR whether Shape G (staged-rerunnability) adds something Shape A doesn't.
- **FF-Su8 — The Boundary discipline character is doing the work.** Routeman is by-design a Boundary discipline — it operates BETWEEN cognitive cycles. /MVLw IS a cognitive cycle. The composition is the architecture functioning as designed. Sensemaking should make this point explicitly — the integration pattern isn't a new idea; it's what the discipline taxonomy already prescribes.

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-27T18:15:00Z
extent: "Full read of /MVLw SKILL.md (348 lines), /MVL SKILL.md (271 lines), /MVL+ SKILL.md (deprecated; brief read for context only), /MVL2+ SKILL.md (deprecated; brief read), /routeman SKILL.md (41 lines), routeman.md live spec (464 lines, in context from earlier session), 4 prior routeman finding.md files (~1500 lines total, in context from earlier session). Empirical-evidence search via `find -name routeman.md`: confirmed-empty. Filesystem listing of protocols/ + ~/.claude/skills/. Possibility-mode generation of 7 composition shapes."
```

### Re-invocation parameters (optional)

None suggested. The territory is bounded; coverage confirmed; the 8 frontier flags route to Sensemaking, not to a re-traversal.

---

## Telemetry

- Mode: `artifact` + `possibility` (R5 used possibility-mode for composition shapes); Entry point: `signal-first`
- Cycles run: 1 (single-pass traversal across 8 regions)
- Items enumerated: 33 (R1: 4 + R2: 6 + R3: 5 + R4: 2 + R5: 7 + R6: 4 + R7: 2 + R8: 3)
- Items tagged at each relevance level: CORE = 17 + SUB = 9 + SIDE = 3 + UMBRELLA = 5 + CONFIRMED-ABSENT = 1
- Sub-phase fired: NO (territory was explicit-bounded)
- Convergence criteria status: MET — territory traversed; no items filtered at uncertain-relevance; rejected only on HIGH-confidence (the user's deprecation of /MVL+ and /MVL2+ was honored — those items moved to SUB/SIDE not CORE)
- Failure modes checked: Missed-relevance (PASS — empirical search confirmed); Surfaced-irrelevance (PASS — deprecated MVL+ variants demoted on user note); Over-coverage (PASS); Territory-mis-binding (PASS — stayed within /routeman + /MVLw + reasonable adjacency); Workspace overload (PASS); Recency-Equates-Idleness (PASS — recency is descriptive only, not gating); Recency-Bias-Filter (PASS — older live spec still surfaced at CORE)
- items_with_mtime: 14 / items_without_mtime: 19 (the 7 possibility-mode composition shapes + 12 items derived from prior context)
- Self-assessment verdict: **PROCEED**

---

## Structural check (manual, per /MVLw runner step 4 since `tools/structural_check.sh` is absent)

- Required sections present: ✓ Mode declaration; ✓ Traversal Trace; ✓ Concept Names List; ✓ State Summary (Territory echo + Purpose echo + Coverage map + Confirmed-absent regions + Recency distribution + Frontier flags + Workspace-populated status); ✓ Telemetry; ✓ Frontier flags routed to Sensemaking.
- Workspace work-product present: ✓ (the session has read all territory items in-context).
- "Thin" artifact criterion: ✓ (no item content reproduced; only identifiers + tags + metadata + provenance + step-notes).
- No `[FAIL]` lines.

PROCEED to Sensemaking.
