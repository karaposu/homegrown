---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: /routeman + /MVLw integration pattern — workflow-layer sequential composition with the Boundary-discipline architectural slot supplying the WHY; three primary shapes with the user's "heavy mode" concern resolved via composition + existing depth mechanisms, not new spec

## Question

(from `_branch.md`)

**Stated question:** Can `/routeman` (the route-enumeration runner) and `/MVLw` (the extended cognitive-loop runner) be used together when route enumeration needs strong reasoning, and if so how — OR is reasoning-heavy enumeration not routeman's job at all (the boundary belongs elsewhere) — AND is routeman currently too lightweight to handle serious enumeration tasks, OR does staged re-runnability already provide the heavy-mode the user is worried is missing?

Four observation targets, preserved as distinct adjudications per LOOP_DIAGNOSE MC2:
1. **Integration pattern** — how the two skills can compose at the workflow layer.
2. **Job-boundary reframe** — whether reasoning-heavy enumeration is routeman's job.
3. **Heaviness concern** — whether routeman is too lightweight without a heavy mode.
4. **Staged-rerunnability hypothesis** — whether re-running routeman provides the heavy mode.

User clarification mid-run: `/MVL+` and `/MVL2+` are DEPRECATED; only `/MVL` (classic) and `/MVLw` are active. Composition is at the WORKFLOW layer (skill-to-skill), not pipeline-merging routeman as a discipline inside /MVLw.

Goal: a workflow recommendation the user can apply when they have an inquiry that needs both reasoning and enumeration; a verdict on the heaviness concern; a structural verdict on the staged-rerunnability hypothesis.

## Finding Summary

- **The integration is workflow-layer sequential composition.** The two skills compose via the inquiry folder as shared state: /MVLw's CONCLUDE produces `finding.md` + supporting outputs in an inquiry folder; /routeman's SKILL.md Step 1 accepts a folder path and reads it to reconstruct the state. No spec change in either skill is required.

- **Three primary composition shapes exist** (plus one negative anchor for verification). **Shape A** is the natural primary: /MVLw → /routeman (reason then enumerate). **Shape B** is the inverse for already-stabilized states: /routeman → /MVLw (enumerate then deep-reason on the selected route). **Shape C** is the maximal sandwich for genuinely high-stakes inquiries: /MVLw → /routeman → /MVLw (reason, enumerate, deep-reason on the selected route). **Shape F** is the negative anchor — no composition needed when the inquiry is fully answered by either skill alone.

- **The Boundary-discipline architectural framing supplies the WHY.** Routeman is by-design a Boundary discipline per `docs/canon/thinking_disciplines/anatomy/discipline_taxonomy.md` — it operates BETWEEN cognitive cycles, consuming what a cycle produced and producing typed-next-moves for what follows. /MVLw is a cognitive-cycle runner. The composition is not a new design; it is the architecture's prescribed slot being filled as intended.

- **Job-boundary verdict.** Heavy reasoning is /MVLw's job (its 5-discipline pipeline produces stabilized understanding + tested candidates + adversarial verdicts). Next-move enumeration is /routeman's job (typed-reachability assignment + adaptive-guidance per route). Reasoning-heavy enumeration is the COMPOSITION'S job, neither skill alone.

- **Reasoning lives at two tiers** in this composition. Per-route reasoning is INSIDE /routeman (each route's WHY field anchors in cycle-evidence; the γ-field `why_this_might_be_important` carries per-route meta-introspection under the 13-23 + 00-51 + 16-45 REPAIR rule). Cross-route reasoning is OUTSIDE /routeman, via /MVLw composition (the 5-discipline pipeline can perform meaning-stabilization, alternative framings, and adversarial prosecution on the route map itself).

- **No new "heavy mode" spec for /routeman is needed.** Of five possible meanings of "heavy" — more internal cycles / adversarial testing on routes / guidance depth / multi-discipline cognitive operations / staged-rerunnability — four are either already present in /routeman or filled by composition. Internal iteration exists (§4.5 stop-rule iterates until coverage convergence). Guidance depth exists via the four guidance modes. Multi-discipline operations IS the /MVLw composition pattern. Staged-rerunnability exists via re-invocation + directional mode. The one structural gap (adversarial testing on routes as a discipline-internal operation) is filled by /MVLw composing AROUND /routeman — its Critique discipline performs adversarial prosecution/defense on whatever it's pointed at. Adding a parallel "heavy mode" invocation flag would create redundant capability.

- **The user's staged-rerunnability hypothesis is structurally validated.** The user proposed: "each rerun refines the route enumeration; double-run in really important stages of the project." This IS the existing architecture: the 2026-05-23 18-58 finding committed to a two-stage route mapping (stage-1 generic = whole-territory; stage-2 directional = sub-route expansion under a selected parent route). The 2026-05-27 14-49 finding committed to the operational read-policy for re-invocation (parent's `routeman.md` is MANDATORY-WHEN-AVAILABLE; prior `_route.md` is SHOULD). The 2026-05-27 16-45 consolidated amendment plan preserves both commitments. The hypothesis is the project's existing commitment in action; the user may not have recognized that the 18-58 directional-mode mechanism already implements their idea.

- **Caveat — meaningful re-run requires CHANGE between runs.** Routeman is idempotent within a single invocation (same input + same goal → same Route Map per §3.6). A naive double-run with identical parameters produces no new information; it is wasted work. Meaningful re-run requires one of: state evolution between runs (typically via a /MVLw cycle that updates understanding), parameter refinement (directional mode with a parent-route-id + refined-sub-goal), or cross-invocation status update (a route's Status changes between runs).

- **Design-grounded honesty.** Zero `routeman.md` files exist in any inquiry folder (verified via `find devdocs/inquiries -name routeman.md`). /routeman has NEVER been invoked on a real inquiry; the integration pattern this finding recommends has zero operational precedent. The recommendation is design-grounded (against routeman's reference spec + /MVLw's runner spec + the discipline taxonomy + the priors' commitments), not runtime-grounded. Operational validation awaits the first real uses. Same posture as the 14-03 finding's design-vs-runtime distinction.

## Finding

### Where the user is coming from

The user has spent the past day in a series of /MVLw inquiries DESIGNING the routeman discipline — the most recent (16-45) consolidated 4 prior findings into a 30-row amendment plan for the live spec. None of those design inquiries used /routeman as a skill; the discipline has been a TARGET of design, never an INVOKED workflow operation. The user is now asking a forward-looking question: "given everything we've decided about routeman, how do I actually USE it alongside the /MVLw cognitive loop?"

The question has structural depth — the user is not asking for a list of commands; they're testing whether routeman and /MVLw cleanly compose, whether the reasoning-heavy enumeration use case is even routeman's job, whether routeman has hidden lightness that requires a heavy mode, and whether their own intuition (staged-rerunnability for important inquiries) is structurally supported. The user's "Lets dice deep into this" invitation is genuine; they want the architectural reasoning, not just a surface-level pattern.

### The architectural slot

Routeman is a **Boundary discipline** per `docs/canon/thinking_disciplines/anatomy/discipline_taxonomy.md` (the project's discipline-classification doc that organizes disciplines into Core / Boundary / Structural / Situational categories). Boundary disciplines operate BETWEEN cognitive cycles — they consume what a cycle produced (the settled state, the verdicts, the open questions, the next-step seeds) and produce the typed-next-moves field that downstream selection or subsequent cycles consume. Currently routeman is the only shipped Boundary discipline; the planned mirror is `/reflect` (backward-Boundary, observes how the prior cycle ran), preserved at `cognitive_harness/non-active/reflect/` for eventual revival.

`/MVLw` is the project's heavy-reasoning workflow. Its 5-discipline pipeline (Surfacing → Sensemaking → Decomposition → Innovation → Critique) produces stabilized understanding + tested candidates + adversarial verdicts as a complete cognitive cycle. The pipeline's outputs (`finding.md` + supporting artifacts in the inquiry folder) ARE the cycle's deliverable.

The composition of /MVLw → /routeman is what the architecture already prescribes. /MVLw produces a cycle; routeman runs BETWEEN cycles. The user's question — "how do these compose?" — finds its answer in the slot the architecture already provides. The integration is not a new design; it is the architecture's slots being filled as intended.

### The cognitive-operation orthogonality

/MVLw and /routeman answer structurally orthogonal questions:

- **/MVLw asks:** "What should we understand and decide about X?" Its output is a finding that says "here's what we understand; here's what we propose; here's what survives scrutiny."
- **/routeman asks:** "Given that we've understood-and-decided X, what moves are available?" Its output is a typed Route Map: each route tagged with movement type, reachability, priority, confidence, and per-route guidance.

Neither subsumes the other. They operate on adjacent layers of the same workflow — /MVLw produces the state /routeman consumes. The orthogonality explains why the composition is structurally clean: there is no conflict at the cognitive-operation level, only a sequence at the workflow level.

### Reasoning at two tiers

When the user says "we need strong reasoning with path enumeration," they describe TWO cognitive operations at different scales:

- **Per-route reasoning** lives INSIDE /routeman. Each route in the Route Map carries a `WHY` field (cycle-evidence anchor making this direction worth considering — e.g., "critique's KILL seed on X explicitly asks how to make Y work"). Each route may also carry a `why_this_might_be_important` field — the γ-field per the 13-23 + 00-51 commitments + 16-45 REPAIR rule (1-sentence cap, cycle-anchor required, generic filler fails the spec). Both fields are per-route reasoning embedded in enumeration. This reasoning is at route-granularity, not cross-route.

- **Cross-route reasoning** lives OUTSIDE /routeman, via /MVLw composition. Meaning-stabilization across the route set (does the route map represent the actual next-move space?), alternative framings (could this route map be reorganized?), and adversarial prosecution (which routes survive critical scrutiny?) all require cross-route relational structure. Routeman as a discipline operates at route-granularity; cross-route operations are explicitly excluded from its NOT-list (per routeman.md §1.3).

The "strong reasoning with enumeration" the user is asking about is therefore two-tier. Per-route reasoning is /routeman's existing capability (the WHY + γ-field per route, with the recent REPAIR commitments tightening the γ-field's content). Cross-route reasoning requires the composition pattern.

### Shape A — the primary composition (/MVLw → /routeman)

**Pattern.** Run /MVLw on the upstream question. /MVLw produces an inquiry folder containing `finding.md` (the cycle's deliverable) + `_branch.md` (the question's framing) + `docarchive/` (the 5 archived discipline outputs). User invokes `/routeman` pointed at that folder. Routeman reads the folder per its Step 1 explicit contract ("If the input is a folder path, read the relevant files to reconstruct the current state") and enumerates next moves based on the state.

**Why Shape A is the natural composition.** Both skills' existing invocation contracts already support it without modification. /MVLw's CONCLUDE produces a self-contained folder representation of the cycle's output. /routeman accepts a folder path as input. No orchestration layer is needed; no spec modification is required.

**Cost.** One /MVLw run (typically 1-2 iterations of the 5-discipline pipeline, depending on iteration-complete behavior) + one /routeman invocation (one Enumeration phase running until §4.5 coverage convergence) + optionally N additional /routeman re-invocations if the continuation pattern fires.

**Use case.** The standard high-stakes inquiry pattern. You have a hard question; you need understanding before you can act; you want to enumerate next moves AFTER understanding stabilizes. Most inquiries that produce a `finding.md` should follow this pattern when next-step enumeration is needed.

**Continuation pattern — directional-mode re-run for important parents.** Shape A's continuation pattern fires when the first routeman invocation produces output that needs deeper attention. Trigger conditions:

- /routeman's §4.7 self-assessment emits RE-RUN (the discipline itself flags the output as structurally suspect — empty map when state has clear cycle output; type-assignment confidence pervasively LOW; etc.).
- One or more specific routes in the Route Map have LOW confidence on type-assignment or reachability.
- The user wants depth on a specific parent route (the "really important stage" the user described).

When the continuation fires, the user re-invokes /routeman with refined parameters:

- **Directional mode** with `parent-route-id` set to the parent route needing depth + `file-paths-in-scope` for the parent's content + optional `refined-sub-purpose` narrowing the directional goal. This is the 18-58 stage-2 mechanism in action; per the 14-49 read-policy, routeman MANDATORILY-WHEN-AVAILABLE reads the parent's `routeman.md` to acquire parent-route context.
- **Refined-sub-goal** narrowing the goal for a generic-mode re-run (e.g., second run goal: "find next-move options that specifically address Frontier #3 from the prior run").

The continuation produces a refined Route Map at the targeted scope. Status updates carry forward; routes that survive both runs are higher-confidence. The continuation is also the operational form of the user's "double-run in really important stages" hypothesis.

**Concrete worked example.** Suppose you ran /MVLw on the question "What structural changes are needed to fix routeman's output handling?" (the actual 16-45 inquiry). The CONCLUDE output is the 30-row consolidated amendment delta in the inquiry folder's `finding.md`. The Next Actions section names MUST (apply the delta), COULD (institutional memory authoring + non-active doc update + LAYER-2 audit protocol authoring), and DEFERRED (bounded follow-ups, γ-field cut promotion, cross-discipline pattern formalization). Now you want to enumerate the next-move options.

You invoke `/routeman` pointed at the 16-45 inquiry folder. Routeman reads `_branch.md` (the question + goal context), `finding.md` (the stabilized understanding + the next-actions inventory + the open questions), and the discipline outputs in `docarchive/` (the supporting cognitive work). Routeman enumerates routes such as:

- **Route 1.** Apply the 30-row delta to the live routeman spec. Movement Type: DEVELOP. Status: open. Priority: HIGH. WHY: this is the MUST action from the 16-45 finding; until applied, the priors' commitments don't land.
- **Route 2.** Author the institutional memory file `docs/discipline_design_history/for_routeman.md`. Movement Type: PURSUE-SEED. Status: open. Priority: MEDIUM.
- **Route 3.** Author the LAYER-2 audit protocol for routeman's filler-meta-reasoning failure mode. Movement Type: INVESTIGATE-FRONTIER. Status: blocked-by (Q4 from the 2026-05-23 15-20 frontier-questions inquiry). Priority: MEDIUM.
- **Route 4.** Spawn bounded follow-up #1 (nav-session aggregation output design). Movement Type: INVESTIGATE-FRONTIER. Status: deferred (gated on L2+ readiness per 14-03). Priority: LOW.
- **Route 5.** Update `cognitive_harness/non-active/multi_resolution_navigation.md` to record routeman is no longer a consumer. Movement Type: CONSOLIDATE. Status: blocked-by (Route 1 — applies after the consolidated amendment lands). Priority: LOW.
- ... and so on, with the rest of the routes covering the 7 DEFERRED items.

The Route Map gives you a typed, prioritized, reachability-aware enumeration of next moves. The continuation pattern fires if you want depth on, say, Route 3 (which is blocked by an unrelated frontier inquiry) — invoke /routeman in directional mode on Route 3 to expand it into sub-routes (sub-routes for unblocking the Q4 frontier, sub-routes for proceeding-without-the-audit, etc.).

**Shape F — the negative anchor.** Shape A is doing work when /MVLw's finding has enumeration content the user wants typed. Verification: if the inquiry is fully answered by /MVLw alone (no "what next?" remains; e.g., a synthesis inquiry that consolidates priors into a settled decision), Shape A's second step adds no value. Stop after /MVLw. Conversely, if the inquiry is fully answered by /routeman alone (a pure "what are our options for X" question with no understanding-question and a state already stabilized), Shape A's first step adds no value — see Shape B.

### Shape B — the inverse composition (/routeman → /MVLw)

**Pattern.** Run /routeman first on a current-state to enumerate options. User selects one route. /MVLw runs on the selected route as a refined question. The enumeration is the upstream question; the selected route's depth is the downstream question.

**Use case.** When the inquiry's question is "what are our options for X?" and one option needs deep follow-through, and the state IS already stabilized.

Examples:
- "What are the possible next steps for the project?" — invoke /routeman → user picks the most promising option → /MVLw on the picked step.
- "What movement types make sense given the current state?" — /routeman produces a Route Map → user selects a Movement Type → /MVLw on what to do under that type.

**Stabilization criterion** (per Critique's REFINE direction #2). Use Shape B (or directly invoke /routeman without a prior /MVLw cycle) ONLY when ALL of the following hold:

- The current state can be described in one clear paragraph that names what's understood + what's open + what's pending.
- The user can articulate the goal or sub-goal that biases enumeration.
- There is no significant disagreement or open meaning-question that would change the route enumeration if resolved.

If any of these fail, the state is NOT stabilized; use Shape A instead — /MVLw first stabilizes the state via Sensemaking, then routeman enumerates.

**Caveat — structural risks if state is unstable.** Running enumeration BEFORE the state is stabilized risks routeman's LAYER 1 failure modes:

- **Premature Filtering** (routeman.md §4.2 mode #1): only obvious routes shown; multiple cycle-verdict types not represented. This fires when the upstream state isn't stable enough for the full route space to surface.
- **Action Bias** (routeman.md §4.2 mode #3): only "do more" routes (DEEPEN / DEVELOP / INVESTIGATE-FRONTIER) in the map; no "do differently" routes (REFRAME / WIDEN / DIFFERENT APPROACH). This fires when the user hasn't yet sense-made the problem, so reframe-style options don't surface.

The stabilization criterion above is the structural guard against these failure modes.

**Cost.** One /routeman invocation + one /MVLw run. Comparable to Shape A's cost; the ordering differs.

**Concrete worked example.** Suppose you're mid-project, have a stable understanding of the project's current state (you can write a clear "current state" paragraph naming the 16-45 consolidated amendment as applied, the open frontier inquiries, the pending COULD items), and want to ask "what should I work on next?" You invoke `/routeman` pointed at the project root (or a state-summary file you wrote — e.g., a brief `_state_summary.md` listing the project's current commitments, open work, and pending decisions). Routeman enumerates routes — Route 1: apply the not-yet-applied consolidated amendment; Route 2: author institutional memory; Route 3: author the LAYER-2 audit; Route 4: spawn nav-session aggregation follow-up; etc. You inspect the Route Map and select Route 3 (LAYER-2 audit) because it unblocks the most downstream work (the γ-field cut revival path + filler-meta-reasoning monitoring). Now you invoke `/MVLw` on the refined question: "How do I author the LAYER-2 audit protocol for routeman's filler-meta-reasoning failure mode?" /MVLw's 5-discipline pipeline produces the protocol design as a finding.

**When NOT to use Shape B.** When the stabilization criterion fails (any of its three conditions is violated). Symptom: you can't write a clear "current state" paragraph that routeman could use as Reception input. In that case, your upstream problem is meaning-stabilization, not enumeration; use Shape A.

### Shape C — the maximal sandwich (/MVLw → /routeman → /MVLw)

**Pattern.** Three-step composition: /MVLw on the upstream question → /routeman on the resulting state to enumerate next-move options → user selects one route → /MVLw on the selected route for deep follow-through.

**Cost.** Two /MVLw runs + one /routeman invocation (+ continuation re-runs if needed). Roughly 2x the cost of Shape A.

**Cost-justification criterion** (per Critique's REFINE direction #3). Shape C's 2x /MVLw cost is justified ONLY when BOTH of the following hold:

- The upstream question requires the full 5-discipline /MVLw cycle to settle (it's not a simple synthesis or recall; it requires Sensemaking + Critique on its own substance).
- The chosen route from the routeman output IS ITSELF complex enough to require its own full cycle (e.g., it would warrant its own MUST in another inquiry's Next Actions; the route requires its own Sensemaking + Critique to settle, not just direct action).

If either condition fails, Shape C is over-specified; Shape A with the continuation pattern (cheaper) or simply Shape A (cheapest) suffices.

**When NOT to use Shape C.** When the chosen route can be acted on directly without further reasoning (e.g., the route is "apply the consolidated amendment delta" — no second /MVLw needed; just execute the spec edits). Most routes fall into this category — Shape C is for the rare case where a chosen route's substance is its own complex inquiry.

**Concrete worked example.** Suppose the upstream question is genuinely deep — a hypothetical version of the 14-03 finding's bounded follow-up #2: "Should the project adopt a meta-loop runtime architecture, and if so what is its concrete design?" This is an architecture-design question that produces multiple implementation routes, each requiring deep design itself. Shape C would be:

- First /MVLw run on the architecture question → finding.md proposes meta-loop runtime design at architecture-only level + identifies several open implementation routes (Route 1: build the runtime; Route 2: defer to L2+ readiness; Route 3: simplify the proposed architecture; Route 4: spawn a sub-inquiry on the `_meta_state.md` schema).
- /routeman on the resulting inquiry folder → enumerates the routes as a typed Route Map.
- User selects Route 1 (build the meta-loop runtime).
- Second /MVLw run on Route 1 as the refined question ("How do I implement the meta-loop runtime?") → finding.md produces a concrete implementation plan with phases + deliverables.

The two /MVLw runs answer structurally distinct questions; routeman's middle step routes the work from the high-level decision (which implementation route?) to the implementation decision (how to build that route?). The pattern is composable iteratively (further Shape C nesting is possible), but the cost-gate must justify each additional cycle.

### Routeman's depth mechanisms

The user's concern that "routeman is too lightweight" deserves serious structural engagement. Routeman is NOT a single-pass operator. The discipline has FOUR depth mechanisms built into its current spec:

1. **Internal Enumeration loop.** Per `references/routeman.md` §3.4 + §4.5, within a single invocation the Enumeration phase iterates: 10 components fire per cycle (state perception, goal framing, enumeration, movement-typing, reachability evaluation, cross-cycle revisitation, autonomy classification, priority + confidence assessment, adaptive guidance generation, excluded marking); the cycle loops until §4.5's coverage criteria meet (next-move space exhausted at current resolution; no routes filtered at uncertain-typing level; rejections only on HIGH-confidence inapplicability). The discipline self-terminates internally when "the most-recent enumeration cycle produced no new routes and no Family balance shifted."

2. **Staged 2-stage mapping.** Per the 2026-05-23 18-58 finding, routeman has two invocation modes. **Generic mode** = stage-1 = whole-territory enumeration; produces a parent Route Map. **Directional mode** = stage-2 = sub-route expansion under a selected parent route; produces refined sub-routes that inherit context from the parent (parent's Movement Type, parent's Goal, parent's Direction).

3. **Re-invocation as parameterized variation.** Per `references/routeman.md` §3.5 + the 2026-05-24 00-20 + 2026-05-27 14-49 commitments + 16-45 consolidation, across invocations the prior Route Map is incorporated at Reception. Enumeration may RESURRECT (prior-killed route now viable), INVALIDATE (prior-surviving route now dead), or REVERT (prior refinement now needs undoing) — the REVISIT sub-actions in the Coordination Family of the 16-type movement taxonomy. Routes whose state-condition hasn't changed are carried forward unchanged. The 14-49 read-policy makes this operationally rigorous: prior `routeman.md` is read as MANDATORY-WHEN-AVAILABLE in directional mode; prior `_route.md` (invocation-state file) is read as SHOULD.

4. **Self-assessment RE-RUN signal.** Per §4.7, at the end of each invocation routeman emits one of three verdicts: PROCEED / FLAG / RE-RUN. RE-RUN explicitly fires when the output is structurally suspect (enumeration produced empty map when state has clear cycle output; type-assignment confidence pervasively LOW; etc.); the discipline itself recommends a re-run with adjusted parameters.

Together, these four mechanisms supply substantial depth. A high-stakes inquiry can use generic mode for the whole picture + directional mode for narrower depth on uncertain parents + re-invocation across state-evolved invocations + RE-RUN responses when the output flags itself as suspect.

### Heaviness adjudication — the five sub-axes

When the user worries "routeman is too lightweight," the concern could mean any of five things. Per-axis verdict:

| Sub-axis | Verdict | Reasoning |
|---|---|---|
| (a) More cycles within Enumeration phase before convergence | **EXISTS** | Internal iteration in §4.5 already does this; convergence is content-driven, not preset. |
| (b) More rigorous adversarial testing on routes | **GAP — supplied by composition** | Routeman as a discipline does not have a Critique-style prosecution/defense step on its own routes. This is a real structural gap. It is filled by /MVLw composing AROUND /routeman — /MVLw's Critique discipline performs adversarial prosecution + defense on whatever it's pointed at, including a Route Map. No spec change in routeman is needed; the composition supplies the adversarial layer. |
| (c) More depth in per-route guidance | **EXISTS** | Routeman has four guidance modes (none / compact / full / expand-on-selection). High-priority routes get `full` mode (3-5 pointers with developed WHYs); low-priority routes get `compact` or `none`. Depth is allocated per-route, not uniform. |
| (d) Multi-discipline cognitive operations on the route map | **IS the /MVLw composition pattern** | What multi-discipline operations would do — meaning-stabilization, alternative-framing generation, adversarial testing — IS what /MVLw provides when composed around /routeman. Spec-internalization would erode routeman's Boundary-discipline character (per the LAYER-2 identity-failure modes in routeman.md §4.3). |
| (e) Running the discipline twice (staged-rerunnability) | **EXISTS** | Re-invocation as parameterized variation + directional mode + the 14-49 read-policy together implement this. |

**Conclusion: no new "heavy mode" spec for /routeman is needed.** Four of the five heaviness sub-axes already exist; the fifth (adversarial-on-routes) is filled by /MVLw composing around /routeman. Adding a parallel "heavy mode" invocation flag would create redundant capability — anything a heavy mode would do, the existing mechanisms + composition pattern already do.

### Staged-rerunnability — the user's hypothesis structurally validated

The user proposed: "Each rerun refines the route enumeration. We can double-run in really important stages of the project to make sure enumerated routes are highly accurate."

This hypothesis is structurally supported by routeman's existing commitments:

- The 2026-05-23 18-58 staged-mapping mechanism IS staged rerun in concrete form: stage-1 generic run produces a parent Route Map; user selects an important parent route; stage-2 directional run produces refined sub-routes under that parent. The "important stage" the user wants double-attention on is exactly the directional-mode invocation target.

- The `references/routeman.md` §3.5 re-invocation mechanism is the cross-invocation refinement substrate: the prior Route Map is incorporated; routes can be RESURRECT/INVALIDATE/REVERTed; status updates carry forward.

- The 2026-05-27 14-49 read-policy makes the re-run operationally rigorous: it specifies WHICH files routeman reads on re-invocation (parent's `routeman.md` MANDATORY-WHEN-AVAILABLE; prior `_route.md` SHOULD), so the second run is not isolated — it builds on the first.

The user's hypothesis IS the existing architecture. The user may not have recognized that the 18-58 directional-mode mechanism already implements what they're proposing.

**Caveat — meaningful re-run requires CHANGE between runs.** Routeman is IDEMPOTENT within a single invocation: same input + same goal → same Route Map (per §3.6). A naive double-run with identical parameters produces no new information; it is wasted work.

Meaningful re-run requires one of:

- **State evolution between runs** (typically via a /MVLw cycle that updates the inquiry's understanding or settles open questions). The second routeman run operates on a different state and produces different routes.
- **Parameter refinement** — invoking in directional mode with a parent-route-id (zoom-in on a specific parent) OR with a refined-sub-goal (narrower goal for the second run).
- **Cross-invocation status update** — between runs, the user might have closed a route (status: done) or surfaced new evidence; the second run incorporates that.

Naive identical-parameter re-run is wasted; iterated-with-change re-run is the depth mechanism the user's hypothesis assumes.

### Design-grounded honesty

This finding's recommendation is **design-grounded**, not runtime-grounded. The verification: `find devdocs/inquiries -name routeman.md` returns empty across the project's inquiry history. /routeman has never been invoked on any inquiry; the integration pattern this finding recommends has zero operational precedent. All routeman-related work to date has been about DESIGNING routeman (via /MVLw inquiries that produced findings about routeman's shape, schema, read policy, end-goal compatibility, and the most recent consolidated amendment plan); /routeman itself has not been used to enumerate next moves on a real cognitive task.

This matters for confidence calibration. A design-grounded recommendation tests proposed patterns against the specs (routeman's reference doc + /MVLw's SKILL.md + the discipline taxonomy + the priors' commitments). It does NOT test against operational behavior — there isn't any to test against yet. The patterns this finding recommends are structurally well-supported by the specs but unvalidated by use.

This is the same posture the 14-03 finding adopted when answering whether the committed routeman shape was end-goal-compatible: "design-grounded testing is the appropriate testing for design-stage capabilities. Runtime-grounded testing requires the runtimes to exist, which they don't yet." This finding inherits the same posture.

When /routeman is first invoked on a real inquiry, Shape A's folder-input mechanism + the continuation pattern + the staged-rerunnability mechanic will be exercised in practice. Operational issues may surface that the design-grounded analysis didn't anticipate. The recommendation may need adjustment. Throughout this finding, statements like "Shape A is the primary pattern" should be read with the design-grounded qualifier: structurally well-supported by both specs and the architectural taxonomy; operational validation pending.

## Next Actions

### MUST

None required. The finding is a recommendation; the user applies the workflow patterns at their discretion. Without applying any specific pattern, the finding's value is the framework for thinking about the composition (when the architectural-slot composition fires, what reasoning lives where, what the heaviness story is, what staged-rerunnability already provides).

### COULD

- **Try Shape A on a real high-stakes inquiry.** First operational validation of the integration pattern.
  - **Who:** the user.
  - **Gate:** condition-bound — when a hard inquiry that needs both reasoning and enumeration arises.
  - **Why:** closes the empirical-precedent gap; provides operational signal for the monitoring items in Open Questions. Most likely candidate: invoke /routeman on the 16-45 inquiry folder once the consolidated amendment delta is applied (Route 1 of the example Route Map in this finding).

- **Author the institutional memory file `docs/discipline_design_history/for_routeman.md`.** Record routeman's design history through the inquiry chain (14-39 design memo → 18-58 staged-mapping → 24-00 persistence-and-invocation-modes → 27_00-51 output simplification → 27_13-23 schema refinement → 27_14-03 end-goal compatibility → 27_14-49 directional read policy → 27_16-45 consolidated amendment plan → THIS integration-pattern finding).
  - **Who:** any inquiry runner.
  - **Gate:** condition-bound — user decision to author institutional memory.
  - **Why:** routeman is the project's only shipped Boundary discipline; institutional memory aids future Boundary disciplines (e.g., /reflect when revived). Independent of the integration question per se; carry-over COULD from the 16-45 finding.

### DEFERRED

- **Spec-modifying composition shapes (Shape D: /routeman as discipline-slot in /MVLw; Shape E: /routeman invokes /MVLw on uncertain routes).**
  - **Gate:** observable — if Shape A composition demonstrably fails to cover heaviness across ≥2 real high-stakes inquiries AND the gap traces to absent adversarial-on-routes reasoning that /MVLw's Critique discipline alone can't supply.
  - **Why (if revived):** spec changes are higher-cost than workflow composition; reserve for when composition proves insufficient. The 4-tier read-policy vocabulary discussion in 14-49 may inform if Shape E is ever revived.

- **/reflect revival as the backward-Boundary discipline.**
  - **Gate:** user decision to revive `/reflect` from `cognitive_harness/non-active/reflect/`.
  - **Why (if revived):** when /reflect ships, this finding's composition pattern generalizes to /MVLw → /reflect (backward-Boundary, observe how cycle ran) + /MVLw → /routeman (forward-Boundary, enumerate next moves). The cross-discipline pattern (Boundary + cognitive cycle composition) becomes N=2 instance, supporting OQ9 promotion.

- **Bounded follow-ups from the 2026-05-27 14-03 finding.** Nav-session aggregation output design (gate: multi-head capability designed or operationally needed) + meta-loop runtime design (gate: L2-3 readiness + follow-up #1 done). Out of scope for this inquiry; preserved per the 14-03 finding's revival triggers.

- **Cross-discipline composition pattern formalization.** If the Boundary-discipline + cognitive-cycle composition reaches N≥3 instances (currently N=1; N=2 when /reflect revives), promote to project-canonical principle.

- **Design-vs-runtime confidence pattern formalization.** Currently N=3 instances (14-03, 16-45, this finding). At N=5+, promote to project-canonical confidence-framing pattern.

## Reasoning

### Why workflow-layer sequential composition over alternatives

Sensemaking adjudicated five ambiguities at the framing level. The relevant one for the integration pattern: Ambiguity 1 (is "use them together" sequential composition, parallel coordination, or orchestrated workflow?). The verdict was sequential composition via folder-path-as-shared-state, because both skills' invocation contracts already support this with zero spec change. Orchestration would have been a new design (a wrapper skill that coordinates both); the simpler reading is the structurally-grounded one.

### Why Shape G merges into Shape A's continuation pattern

Sensemaking Ambiguity 2 tested whether the user's "staged-rerunnability" was a distinct composition shape (originally surfaced as Shape G in surfacing). The verdict: it is Shape A's continuation pattern — same upstream skill (/MVLw), same downstream skill (/routeman), with a re-run on /routeman when the output is structurally suspect. Treating G as a separate shape would have over-counted the inventory.

### Why "heavy mode" is usage pattern, not new invocation mode

Sensemaking Ambiguity 3 tested whether the user's "heavy version" referred to a new spec-level invocation mode for /routeman or a workflow-layer usage pattern. The verdict was usage pattern, because: (a) the user's own hypothesis (staged-rerunnability) IS already a usage pattern not a spec addition; (b) the heaviness sub-axes are 4/5 already-present or composition-supplied, with the 5th being routeman's existing staged-rerunnability mechanism; (c) the project's spec-stability principle favors usage-pattern over spec-expansion when both achieve the same goal.

### Why reasoning is dual-tier

Sensemaking Ambiguity 4 tested whether "strong reasoning with path enumeration" was one operation or two. The verdict was two: per-route reasoning (inside /routeman, via WHY + γ-field per route, with the 13-23 + 00-51 + 16-45 REPAIR commitments) AND cross-route reasoning (via /MVLw composition). Treating it as one operation would either over-load /routeman (cross-route reasoning belongs to other disciplines) or under-load /routeman (per-route reasoning IS embedded in enumeration).

### Why naive re-run is wasted

Sensemaking Ambiguity 5 tested whether the user's "double run" meant identical-parameter repetition or iterated-with-change. The verdict was iterated-with-change, because routeman is idempotent within an invocation. Naive identical re-run produces no new information.

### Why the Boundary-discipline framing is load-bearing

Critique's D8 prosecution tested whether the architectural framing (routeman as Boundary discipline; /MVLw as cognitive cycle) was post-hoc justification or genuinely supplying the WHY. Removing the framing from the recommendation weakens Shape A's reasoning — without the architectural context, the recommendation reduces to "/routeman accepts folder input, so this contract works," which is a contract-level explanation, not a structural one. The framing supplies the structural reason for the order: routeman is by-design a between-cycles operation; /MVLw is the cycle. The composition order IS the architecture functioning as designed.

### Strongest prosecution against the recommendation

The strongest counter-argument: "The user is right that routeman is too lightweight. The recommendation dismisses their concern by saying composition supplies the heaviness, but heaviness-via-composition is a workflow burden, not a discipline capability. A real heavy mode in routeman would be more valuable to the user than a workflow recommendation they have to remember to apply."

The defense: heaviness-via-composition is NOT a workflow burden any more than the existence of separate skills like `/surfacing` and `/sense-making` is a burden — the project's whole architecture is composition-based at the discipline level + the runner level. Adding a "heavy mode" to /routeman would internalize what is structurally a multi-discipline operation (the prosecution / defense work of /MVLw's Critique discipline) into a Boundary discipline that was deliberately scoped to enumeration-without-adjudication. Per routeman.md's LAYER 2 identity failure modes (Descriptive-Only Collapse + Prescriptive-Without-Grounding), the discipline already has guards against scope-creep in both directions. A heavy mode would risk the inverse: GENERATIVE-OVERSTEP, where routeman starts doing adversarial reasoning that erodes its Boundary character. The user's concern is rational in spirit but the structural answer is composition, not internalization.

### Critique's 3 REFINE caveats — how each was resolved

The Critique discipline tested the Innovation output across 12 dimensions. It found 3 REFINE-level caveats:

1. **REFINE direction #1 (D3 — Actionability):** Tighten the worked-example specificity in Shape B and Shape C. **Resolved** in this finding's Shape B section (specifies `_branch.md` and `finding.md` as the state-summary inputs) and Shape C section (specifies the meta-loop runtime architecture-design question as the worked-example case).

2. **REFINE direction #2 (D11 + D12 — Shape B stabilization criterion):** Add a concrete criterion for "is the state stabilized?" **Resolved** in this finding's Shape B section as a 3-bullet stabilization criterion (current state describable in one paragraph + user can articulate goal + no significant open meaning-question).

3. **REFINE direction #3 (D12 — Shape C cost-justification criterion):** Add a concrete criterion for "when Shape C's cost is justified." **Resolved** in this finding's Shape C section as a 2-bullet cost-justification criterion (upstream question needs full 5-discipline /MVLw cycle + chosen route IS complex enough to require its own full cycle).

## Open Questions

### Monitoring

- **OQ1 — Shape A operational validation.** When /routeman is first invoked on a real inquiry's folder, observe whether the folder-input contract works as the discipline spec implies. Does /routeman successfully reconstruct the inquiry's state from finding.md + discipline outputs + branch.md? Does the resulting Route Map represent the inquiry's actual next-move space?

- **OQ2 — Continuation pattern firing frequency.** Across the first 5-10 real /routeman invocations, observe how often the continuation pattern fires. High frequency suggests initial generic-mode runs are routinely insufficient; low frequency suggests generic mode usually suffices.

- **OQ3 — Heaviness composition test.** Does /MVLw composing around /routeman genuinely cover the adversarial-on-routes gap? Specifically: when /MVLw runs on a /routeman output (Shape C's second cycle), does Critique's adversarial test on the route map produce structurally distinct verdicts that routeman alone would have missed?

- **OQ4 — Staged-rerunnability operational test.** When re-running /routeman with refined parameters (directional mode + refined-sub-goal), does the second invocation produce structurally distinct content from the first? Quantitatively: per-route status updates + new routes added + routes REVISIT-INVALIDATED.

- **OQ5 — Per-route reasoning sufficiency.** Across real uses, does the WHY + γ-field per route provide enough reasoning embedded in enumeration, or do operators routinely feel the need for more cross-route reasoning (driving Shape A → Shape C upgrade)?

### Blocked

- **OQ6 — /reflect revival pattern test.** When /reflect is revived from `cognitive_harness/non-active/reflect/`, does the composition pattern this finding recommends generalize? Specifically: does /MVLw → /reflect + /MVLw → /routeman compose into a coherent /MVLw → /reflect + /routeman pattern? Blocked on /reflect revival.

- **OQ7 — Nav-session aggregation pattern interaction.** Per the 14-03 bounded follow-up #1: when navigation-session aggregation is designed, how does it interact with this finding's single-worker composition pattern? Single-worker Shape A produces ONE routeman.md per worker; nav-session aggregation reads N workers' routeman.md outputs. The two patterns operate at different scales; the integration between scales is bounded follow-up territory. Blocked on the nav-session aggregation inquiry.

- **OQ8 — Meta-loop runtime pattern interaction.** Per the 14-03 bounded follow-up #2: when meta-loop runtime is designed, what role does Shape A play in the meta-loop's per-iteration cycle? The meta-loop's 8-movement vocabulary consumes routeman's 16-type taxonomy at the L2+ level; this finding's Shape A is at L0/L1. The mapping between levels is bounded follow-up territory. Blocked on meta-loop runtime inquiry.

### Research Frontiers

- **OQ9 — Cross-discipline composition pattern (Boundary discipline + cognitive cycle).** This inquiry surfaces a generalizable pattern: any Boundary discipline (forward or backward) composes with the cognitive-cycle runner at the between-cycles slot. Currently N=1 instance (routeman + /MVLw). At N=2 (when /reflect is revived and composes similarly), promote to project-canonical principle: "Boundary disciplines compose with cognitive-cycle runners at the between-cycles architectural slot."

- **OQ10 — Design-vs-runtime confidence pattern.** Currently N=3 instances of the design-vs-runtime distinction being used to frame confidence (14-03, 16-45, this finding). At N=5+ instances, promote to project-canonical confidence-framing pattern.

- **OQ11 — Composition-shape pattern across runner variants.** When other Boundary disciplines ship (e.g., a future "evaluator" Boundary discipline distinct from /reflect), does the composition shape (cycle-runner → Boundary discipline) generalize to all runner-discipline pairs? Open question for the cross-discipline integration architecture.

### Refinement Triggers

- **OQ12 — If composition demonstrably fails to cover heaviness in practice.** Trigger: after ≥3 real Shape A invocations, observe whether the inquiries that triggered Shape A produced enumerations the user judged sufficient. If insufficient in ≥2 cases AND the gap traces to absent adversarial-on-routes reasoning that /MVLw's Critique can't supply, the spec-modifying shapes (D, E) re-open.

- **OQ13 — If naive identical-parameter re-run is used and produces distinct output.** Trigger: a user runs /routeman twice with identical parameters and gets demonstrably distinct output. This would indicate routeman is NOT idempotent within an invocation as the spec claims (§3.6). Investigate spec-vs-runtime mismatch.

- **OQ14 — If the empirical-precedent gap surfaces patterns this finding's design analysis missed.** Trigger: any structural finding about Shape A in practice that contradicts the design-grounded prediction. Observe and refine.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Use this skill


I want you to inspect and analyse how routeman can be used  with MVLw skill 

What i mean is this

There is a classic enumaration of routes. So far this was we were building 

But sometimes we need strong reasoning with path enumaration, and reasoning part for our project is usually handled by MVLw loop

But then how it is possible to use MVLw loop and routeman together


Or this is not a valid question? Maybe hard reasoning tasks in order to find next steps are not job of routeman.


But also i am worried about routeman being too light weight and it doesnt have heavy version where we can run and it can run in more serious way.. 

But maybe staged runnability of routeman gives us this already.  Each rerun refines the route enumaration .. so we cna double run in really important stage of the project to make sure enumerated routes are highly accurate 


Lets dice deep into this
```

User clarification mid-run (interrupted Surfacing to correct framing):

```text
Mvl2+ and Mvl+ are deprecated and irrelevant to our case 

I am not asking to merge routeman skill (not md file) with Mvl , i am asking how these 2 skills can be combined
```

</details>
