# Innovation — routeman_mvlw_integration_pattern

## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-27_18-09__routeman_mvlw_integration_pattern/_branch.md

Read in this order:
1. _branch.md (4 observation targets; ordinary problem-solving; no Layer Commitment; no Synthesis Trigger)
2. surfacing.md (33 items; 7 candidate shapes A-G; 5 heaviness sub-axes; zero empirical precedent — design-grounded only)
3. sensemaking.md (SV6 stabilized: 3 primary shapes + F negative anchor; no heavy-mode spec needed; staged-rerunnability validated; Boundary-discipline architectural framing)
4. decomposition.md (8 pieces; Tier 0 P1 → Tier 0.5 P5 → Tier 1 parallel P2/P3/P4 + P6 + P7 → Tier 2 P8)

Innovation purpose: per-piece content production. Production-Task mode STANDARD DEFAULT.

---

## Seed / Preamble — Methodology-Mode Consideration

**Inherited methodology mode:** Standard default. The seed framing says "concrete content production per piece" and "no meta-decision pieces — Sensemaking adjudicated." Maps to Standard default.

**Alternative mode:** Minimum-mechanism (1G + 1F only).

**What follows under the alternative:** Under Minimum-mechanism, each piece gets parsimonious 1G+1F coverage. Risk: under-exploration of per-shape cost/use-case content; benefit: faster.

**Decision:** Stay with **Standard default**. Reason: the recommendation is the user's primary workflow guidance; per-piece coverage benefits from Combination (combining priors + spec content into concrete shapes) + Domain Transfer (folder-passing pattern from CI/CD or chained-script conventions) + Lens Shifting (re-frame from "heavy mode needed" to "composition supplies it") + Constraint Manipulation (cost-as-constraint analysis per shape).

---

## Per-Piece Production

### P1 — Architectural framing + job-boundary verdict

**Mechanism coverage:** Combination (combining Boundary-discipline taxonomy + /MVLw cognitive-cycle character + routeman's per-route reasoning capabilities) + Lens Shifting (frame: this isn't a new integration design; it's the architecture's prescribed slot composition).

#### Content

**The architectural slot.** Routeman is a **Boundary discipline** per the project's discipline taxonomy at `docs/canon/thinking_disciplines/anatomy/discipline_taxonomy.md`. Boundary disciplines operate BETWEEN cognitive cycles — they consume what a cycle produced (the settled state) and produce the typed-next-moves field that downstream selection or subsequent cycles consume. There is no other discipline category that occupies this between-cycles slot; routeman is currently the only shipped Boundary discipline (the planned mirror is `/reflect`, currently at `cognitive_harness/non-active/reflect/` and not yet revived).

**/MVLw as cognitive-cycle runner.** The `/MVLw` skill is the project's heavy-reasoning workflow. Its 5-discipline pipeline (Surfacing → Sensemaking → Decomposition → Innovation → Critique) produces stabilized understanding + tested candidates + adversarial verdicts — a complete cognitive cycle. The pipeline's outputs (finding.md + supporting artifacts in the inquiry folder) ARE the cycle's deliverable.

**The composition is the architecture's prescribed slot.** /MVLw produces a cycle. Routeman runs BETWEEN cycles. The composition of /MVLw → /routeman → (optionally) /MVLw is what the architecture already prescribes. The user's question "how do these compose?" finds its answer in the slot already designed.

**Cognitive-operation orthogonality.** /MVLw answers: "what should we understand and decide about X?" /routeman answers: "given that we've understood-and-decided X, what moves are available?" These are STRUCTURALLY ORTHOGONAL operations — neither subsumes the other; they operate on adjacent layers of the same workflow. The orthogonality explains why they compose so cleanly sequentially: /MVLw's output is the state /routeman consumes.

**Two-tier reasoning distinction.** When the user says "we need strong reasoning with path enumeration," they're describing TWO distinct cognitive operations at different scales:

- **Per-route reasoning** lives INSIDE /routeman. Each route in the Route Map carries a WHY field (cycle-evidence anchor making this direction worth considering) and a `why_this_might_be_important` field (the γ-field; per-route meta-introspection on the route's importance, with the 13-23 + 00-51 commitments + 16-45 REPAIR rule constraining it to 1-sentence cycle-anchored content). This reasoning is at the route-granularity — embedded in enumeration, not separate from it.

- **Cross-route reasoning** lives OUTSIDE /routeman, via /MVLw composition. The 5-discipline pipeline produces meaning-stabilization across the route set, alternative framings of the route map, and adversarial prosecution of which routes survive scrutiny. Routeman as a discipline cannot do this — it operates at route-granularity, not cross-route-relational structure (that would be a different operation).

So the "reasoning with enumeration" the user is asking about is two-tier. Per-route reasoning is /routeman's existing capability; cross-route reasoning requires the composition pattern.

**Job-boundary verdict.** The job-boundary is clean:
- Heavy reasoning is **/MVLw's job** (the 5-discipline cycle producing understanding + candidates + verdicts).
- Next-move enumeration is **/routeman's job** (typed-reachability assignment + adaptive-guidance per route).
- Reasoning-heavy enumeration is the **COMPOSITION'S job** — neither skill alone, but their sequential pairing.

Trying to put heavy reasoning INSIDE /routeman would erode its Boundary-discipline character (per the LAYER-2 identity-failure modes in routeman's spec). Trying to put enumeration INSIDE /MVLw would conflate the cognitive-cycle runner with the boundary operation between cycles. The architecture deliberately separates these.

#### 5-test cycle for P1

- **Novelty:** Per piece, what's new is the EXPLICIT naming of the architectural pattern. The Boundary-discipline taxonomy exists in canon; this piece names it as the load-bearing concept for the integration question. Modest novelty.
- **Scrutiny survival:** Strongest objection: "Aren't you just restating canon docs that the user already knows?" Survives: the user has clearly NOT made the connection between routeman's Boundary character and the composition question (otherwise the question wouldn't be asked). Making the architectural slot explicit IS the contribution.
- **Fertility:** Names the pattern that generalizes — when /reflect is revived, the same slot structure applies. Future Boundary disciplines inherit the framing.
- **Actionability:** Yes — gives the user the WHY for the workflow recommendations that follow.
- **Mechanism independence:** Combination + Lens Shifting both converge on the same framing.

**Verdict: PASS. ACTIONABLE.**

---

### P5 — Depth mechanisms + heaviness adjudication + staged-rerunnability

**Mechanism coverage:** Absence Recognition (which heaviness sub-axes are genuinely absent vs already-supplied) + Constraint Manipulation (test what happens if we ADD a "heavy mode" constraint — what does it create that doesn't exist? + REMOVE the "staged-rerunnability is missing" assumption — what does the existing architecture provide?).

#### Content

**Routeman's existing depth mechanisms.** Routeman is not a single-pass operator. The discipline has FOUR depth mechanisms built into its current spec:

1. **Internal Enumeration loop (§3.4 + §4.5 of `references/routeman.md`).** Within a single invocation, the Enumeration phase iterates: 10 components fire per cycle (state perception, goal framing, enumeration, movement-typing, reachability evaluation, cross-cycle revisitation, autonomy classification, priority + confidence assessment, adaptive guidance generation, excluded marking); the cycle loops until §4.5's coverage criteria meet (next-move space exhausted at current resolution; no routes filtered at uncertain-typing level; rejections only on HIGH-confidence inapplicability). The discipline self-terminates internally when "the most-recent enumeration cycle produced no new routes and no Family balance shifted."

2. **Staged 2-stage mapping (per the 2026-05-23 18-58 finding).** Routeman has TWO invocation modes. **Generic mode** = stage-1 = whole-territory enumeration; produces a parent Route Map. **Directional mode** = stage-2 = sub-route expansion under a SELECTED parent route; produces refined sub-routes that inherit context from the parent (parent's Movement Type, parent's Goal, parent's Direction).

3. **Re-invocation as parameterized variation (§3.5 of the spec + the 2026-05-24 00-20 + 2026-05-27 14-49 commitments + 16-45 consolidation).** Across invocations, the prior Route Map is incorporated at Reception. Enumeration may RESURRECT (prior-killed route now viable), INVALIDATE (prior-surviving route now dead), or REVERT (prior refinement now needs undoing) — the REVISIT sub-actions in the Coordination Family of the 16-type movement taxonomy. Routes whose state-condition hasn't changed are carried forward unchanged. The 14-49 read-policy makes this operationally rigorous: prior `routeman.md` is read as MANDATORY-WHEN-AVAILABLE in directional mode; prior `_route.md` (invocation-state file) is read as SHOULD.

4. **Self-assessment RE-RUN signal (§4.7).** At the end of each invocation, routeman emits one of three verdicts: PROCEED / FLAG / RE-RUN. RE-RUN explicitly fires when the output is structurally suspect (enumeration produced empty map when state has clear cycle output; type-assignment confidence pervasively LOW; etc.); the discipline itself recommends a re-run with adjusted parameters.

**Together, these four mechanisms supply substantial depth.** A single /routeman invocation is not a one-shot operation — internal iteration runs until coverage convergence. A high-stakes inquiry can use generic mode for the whole picture + directional mode for narrower depth on uncertain parents + re-invocation across state-evolved invocations + RE-RUN responses when the output flags itself as suspect.

**Heaviness adjudication — the 5 sub-axes.** When the user worries "routeman is too lightweight," the concern could mean any of 5 things. Per-axis verdict:

| # | Sub-axis | Verdict | Reasoning |
|---|---|---|---|
| a | More cycles within Enumeration phase before convergence | **EXISTS** | Internal iteration in §4.5 already does this. The Enumeration phase iterates until coverage criteria meet; convergence is content-driven, not preset. |
| b | More rigorous adversarial testing on routes | **GAP — supplied by composition** | Routeman as a discipline does NOT have a Critique-style prosecution/defense step on its own routes. This IS a real structural gap. BUT the gap is filled by /MVLw composing AROUND /routeman (the Critique discipline in /MVLw's pipeline performs adversarial prosecution + defense on whatever it's pointed at). No spec change needed in routeman; the composition supplies the adversarial layer. |
| c | More depth in per-route guidance | **EXISTS** | Routeman has 4 guidance modes (none / compact / full / expand-on-selection). High-priority routes get `full` mode (3-5 pointers with developed WHYs); low-priority routes get `compact` or `none`. Depth is allocated per-route, not uniform. |
| d | Multi-discipline cognitive operations on the route map | **IS the /MVLw composition pattern** | What multi-discipline operations would do — meaning-stabilization, alternative-framing generation, adversarial testing — IS what /MVLw provides when composed around /routeman. The user's intuition that "the reasoning part is usually handled by MVLw" is structurally correct. Composition supplies this; spec-internalization would erode routeman's Boundary character. |
| e | Running the discipline twice (staged-rerunnability) | **EXISTS** | Re-invocation as parameterized variation (mechanism 3 above) + directional mode + the 14-49 read-policy together implement this. |

**Conclusion: no new "heavy mode" spec for /routeman is needed.** Four of the five heaviness sub-axes already exist; the fifth (adversarial-on-routes) is filled by /MVLw composing around /routeman. Adding a parallel "heavy mode" invocation flag would create redundant capability — anything a heavy mode would do, the existing mechanisms + composition pattern already do.

**Staged-rerunnability — the user's hypothesis structurally validated.** The user proposed: "Each rerun refines the route enumeration. We can double-run in really important stages of the project to make sure enumerated routes are highly accurate."

This hypothesis is structurally supported by routeman's existing commitments:

- The 18-58 staged-mapping mechanism IS staged rerun in concrete form: stage-1 generic run produces a parent Route Map; user selects an important parent route; stage-2 directional run produces refined sub-routes under that parent. The "important stage" the user wants double-attention on is exactly the directional-mode invocation target.
- The §3.5 re-invocation mechanism IS the cross-invocation refinement substrate: the prior Route Map is incorporated; routes can be RESURRECT/INVALIDATE/REVERTed; status updates apply.
- The 14-49 read-policy makes the re-run operationally rigorous: it specifies WHICH files routeman reads on re-invocation (parent's routeman.md MANDATORY-WHEN-AVAILABLE; prior _route.md SHOULD), so the second run is not isolated — it builds on the first.

So the user's hypothesis IS the existing architecture. The user may not have recognized that the 18-58 directional-mode mechanism already implements what they're proposing.

**Caveat — meaningful re-run requires CHANGE between runs.** Routeman is IDEMPOTENT within a single invocation: same input + same goal → same Route Map. A naive double-run with identical parameters produces no new information; it's wasted work.

Meaningful re-run requires one of:

- **State evolution between runs** (typically via a /MVLw cycle that updates the inquiry's understanding or settles open questions). The second routeman run operates on a different state and produces different routes.
- **Parameter refinement** — invoking in directional mode with a parent-route-id (zoom-in on a specific parent) OR with a refined-sub-goal (narrower goal for the second run).
- **Cross-invocation status update** — between runs, the user might have closed a route (status: done) or surfaced new evidence; the second run incorporates that.

Naive re-run without parameter change is wasted; iterated-with-change re-run is the depth mechanism.

#### 5-test cycle for P5

- **Novelty:** Genuinely new framing — the 5-sub-axis decomposition of "heaviness" and the per-axis verdict. The structural validation of the user's hypothesis IS the inquiry's distinctive contribution.
- **Scrutiny survival:** Strongest objection: "Maybe the user is right that there's a real gap." Survives: the only structurally identified gap (adversarial-on-routes) is explicitly named AND its composition-based fill is concrete. Other 4 axes are verifiable against routeman's spec.
- **Fertility:** Names a project pattern (depth-via-composition vs depth-via-spec-expansion) that may generalize to other Boundary disciplines.
- **Actionability:** Yes — directly answers the heaviness + staged-rerunnability observation targets.
- **Mechanism independence:** Absence Recognition (which axes ARE gaps?) + Constraint Manipulation (what does heavy-mode-spec ADD that composition doesn't?) converge on the same verdict.

**Verdict: PASS. ACTIONABLE.**

---

### P2 — Shape A primary recommendation (/MVLw → /routeman)

**Mechanism coverage:** Combination (combining /MVLw's CONCLUDE output + /routeman's folder-input contract into the workflow shape) + Constraint Manipulation (cost-as-constraint analysis).

#### Content

**The primary composition pattern: Shape A.** Sequential composition: /MVLw runs on the upstream question → produces an inquiry folder with finding.md + supporting artifacts → user invokes /routeman pointed at that folder → /routeman reads the folder as state input and enumerates next moves.

**Why Shape A is the natural composition.** Both skills' existing invocation contracts support it without modification:

- /MVLw's CONCLUDE produces `finding.md` in the inquiry folder + archives the 5 discipline outputs to `docarchive/`. The folder is a self-contained representation of the cycle's output.
- /routeman's SKILL.md Step 1 explicitly says: "If the input is a folder path, read the relevant files to reconstruct the current state." Routeman accepts the inquiry folder as input and parses it to recover the state.

No new orchestration layer is needed; no spec modification is required; the workflow is just two skill invocations with the folder path between them.

**Cost.** 1 /MVLw run (cost varies — typically 1-2 iterations of the 5-discipline pipeline; the project's typical /MVLw cost) + 1 /routeman invocation (cost: one Enumeration phase running until coverage convergence; typically minutes of LLM work).

**Use case.** The standard high-stakes inquiry pattern: you have a hard question, you need understanding before you can act, you want to enumerate next moves AFTER understanding stabilizes. Most inquiries that produce a finding.md should follow this pattern when next-step enumeration is needed.

**Continuation pattern — re-invoking /routeman with refined parameters.** Shape A's continuation fires when the first routeman invocation produces output that needs deeper attention. Trigger conditions:

- /routeman's self-assessment emits RE-RUN per §4.7 — the discipline itself flags the output as structurally suspect.
- One or more routes in the Route Map have LOW confidence on type-assignment OR reachability.
- The user wants depth on a specific parent route (a "really important stage" in the user's framing).

When the continuation fires, re-invoke /routeman with refined parameters:

- **Directional mode** with `parent-route-id` set to the parent route needing depth + `file-paths-in-scope` for the parent's content + optional `refined-sub-purpose` narrowing the directional goal. This is the 18-58 stage-2 mechanism in action; per the 14-49 read-policy, /routeman MANDATORILY-WHEN-AVAILABLE reads the prior routeman.md to acquire parent-route context.
- **Refined-sub-goal** narrowing the goal for a generic-mode re-run (e.g., second run goal = "find next-move options that specifically address Frontier #3 from the prior run").

The continuation produces a refined Route Map at the targeted scope. Status updates carry forward; routes that survive both runs are higher-confidence.

**Concrete worked example.** Suppose you ran /MVLw on the question "What structural changes are needed to fix routeman's output handling?" (the actual 16-45 inquiry). The CONCLUDE output is the 30-row consolidated amendment delta in `finding.md`. The Next Actions section names MUST: apply the delta + COULD: institutional memory authoring + DEFERRED: bounded follow-ups. Now you want to enumerate next-move options.

Invoke `/routeman` pointed at the 16-45 inquiry folder. Routeman reads `_branch.md` (the question + goal context), `finding.md` (the stabilized understanding + the next-actions inventory + the open questions), and the discipline outputs in `docarchive/` (the supporting cognitive work). Routeman enumerates routes such as:

- Route 1: Apply the 30-row delta (Movement Type: TERMINATE-ADJACENT → DEVELOP; Status: open; Priority: HIGH).
- Route 2: Author institutional memory file (Movement Type: PURSUE-SEED; Status: open; Priority: MEDIUM).
- Route 3: Author LAYER-2 audit protocol (Movement Type: INVESTIGATE-FRONTIER; Status: blocked-by Q4 frontier inquiry; Priority: MEDIUM).
- Route 4: Spawn bounded follow-up #1 (nav-session aggregation output) (Movement Type: INVESTIGATE-FRONTIER; Status: deferred; Priority: LOW).
- ... and so on.

The Route Map gives you a typed, prioritized, reachability-aware enumeration of next moves. The continuation pattern fires if you want depth on, say, Route 3 (which is blocked by an unrelated frontier) — invoke /routeman in directional mode on Route 3 to expand it into sub-routes (sub-routes for unblocking the frontier, sub-routes for proceeding-without-the-audit, etc.).

**Shape F — the negative anchor.** Verification that Shape A is doing work: if the inquiry's question is fully answered by /MVLw alone (no "what next?" remains) OR fully answered by /routeman alone (the inquiry is purely "what are our options" with no understanding-question), then Shape A's two steps are over-specified. Don't compose when there's nothing to compose.

**When NOT to use Shape A.** When the inquiry's output doesn't need next-move enumeration (e.g., a synthesis inquiry that consolidates priors into a decision — no enumeration needed beyond the decision itself), Shape A's second step adds no value. Stop after /MVLw.

#### 5-test cycle for P2

- **Novelty:** Names the workflow pattern explicitly; provides the worked example as a concrete reference. Without this piece, the user would have to derive the pattern themselves.
- **Scrutiny survival:** Strongest objection: "Why does /routeman need /MVLw first? Couldn't it run on a fresh state?" Survives: routeman's job is enumeration GIVEN a stabilized state. Without prior reasoning, routeman risks Premature Filtering or Action Bias (LAYER 1 failure modes from routeman's spec). The composition order is structural.
- **Fertility:** This pattern generalizes — any inquiry that needs both understanding + enumeration follows this shape. Sets precedent for future inquiries.
- **Actionability:** Yes — fully concrete with worked example. User can apply immediately.
- **Mechanism independence:** Combination (the workflow shape) + Constraint Manipulation (cost analysis) both produce the same recommendation.

**Verdict: PASS. ACTIONABLE.**

---

### P3 — Shape B secondary recommendation (/routeman → /MVLw)

**Mechanism coverage:** Inversion (what's the reverse of Shape A?) + Combination (when the inverse order makes structural sense).

#### Content

**The inverse pattern: Shape B.** Sequential composition in the reverse order: /routeman runs first on a current-state to enumerate options → user selects one route → /MVLw runs on the selected route as a refined question.

**Use case.** When the inquiry's question is "what are our options for X?" and one of the options needs deep follow-through. The enumeration is the upstream question; the selected route's depth is the downstream question.

Examples:
- "What are the possible next steps for the project?" → /routeman enumerates → user picks the most promising → /MVLw on the picked step.
- "What movement types make sense given the current state?" → /routeman produces a Route Map → user selects a Movement Type → /MVLw on what to do under that type.

**Caveat — Shape B has structural risk.** Running enumeration BEFORE the state is stabilized risks routeman's LAYER 1 failure modes:

- **Premature Filtering** (§4.2 #1): only obvious routes shown; multiple cycle-verdict types not represented. This fires when the upstream state isn't stable enough to derive the full route space.
- **Action Bias** (§4.2 #3): only "do more" routes (DEEPEN / DEVELOP / INVESTIGATE-FRONTIER) in the map; no "do differently" routes (REFRAME / WIDEN / DIFFERENT APPROACH). This fires when the user hasn't yet sense-made the problem, so reframe-style options don't surface.

So Shape B is safe only when the state IS already stabilized (the user has a clear understanding of the current state and just needs the option set enumerated). For inquiries where understanding isn't settled, use Shape A instead — /MVLw stabilizes the state before /routeman enumerates.

**Cost.** 1 /routeman invocation + 1 /MVLw run. Comparable to Shape A's cost; the ordering differs.

**Concrete worked example.** Suppose you're mid-project, have a stable understanding of the project's current state, and want to ask "what should I work on next?" You invoke /routeman pointed at the project root (or a state-summary file) — it enumerates routes (Route 1: ship the consolidated amendment; Route 2: author institutional memory; Route 3: author LAYER-2 audit; etc.). You inspect the Route Map and select Route 3 (LAYER-2 audit) because it unblocks the most downstream work. Now you invoke /MVLw on the refined question: "How do I author the LAYER-2 audit protocol for routeman's filler-meta-reasoning failure mode?" /MVLw's 5-discipline pipeline produces the protocol design.

**When NOT to use Shape B.** When the upstream state is unstable. Symptom: you can't write a clear "current state" paragraph that routeman could use as Reception input. If the state is unstable, your problem is meaning-stabilization, not enumeration — use Shape A.

#### 5-test cycle for P3

- **Novelty:** Names the inverse pattern with explicit risk-caveat. The caveat is the inquiry's distinctive identification.
- **Scrutiny survival:** Strongest objection: "If state must be stable, isn't Shape B just Shape A in disguise?" Survives: Shape B's upstream state is already stabilized (by prior project work), not by an immediately-preceding /MVLw cycle. The two shapes differ in WHERE the state-stabilization happens (upstream vs in-cycle).
- **Fertility:** The risk-caveat names a project pattern (don't enumerate before stabilizing) that may apply elsewhere.
- **Actionability:** Yes — with caveat-protected use cases.
- **Mechanism independence:** Inversion (Shape A inverted) + Combination (when the inverse makes sense) converge.

**Verdict: PASS. ACTIONABLE.**

---

### P4 — Shape C maximal recommendation (/MVLw → /routeman → /MVLw)

**Mechanism coverage:** Combination (Shape A + Shape B chained) + Constraint Manipulation (when does the cost justify the heaviness?).

#### Content

**The sandwich pattern: Shape C.** Three-step composition: /MVLw on the upstream question → /routeman on the resulting state to enumerate next-move options → user selects one route → /MVLw on the selected route for deep follow-through.

**Use case.** Highest-stakes inquiries where BOTH the upstream question is complex (needs deep reasoning to settle) AND the chosen route is complex (needs its own cognitive cycle before action). Most inquiries don't qualify — the cost is high and the benefit applies only when both legs genuinely need full cycles.

**Cost.** 2 /MVLw runs + 1 /routeman invocation (+ continuation re-runs if needed). Roughly 2x the cost of Shape A. The cost is the explicit justification gate — only spend it when the stakes warrant.

**When NOT to use Shape C.** When the chosen route can be acted on directly without further reasoning (e.g., the route is "apply the consolidated amendment delta" — no second /MVLw needed; just execute the spec edits). Use Shape A's continuation pattern (directional-mode re-run) instead, which is much cheaper.

**Concrete worked example.** Suppose the upstream question is genuinely deep: "Should the project adopt a meta-loop runtime architecture, and if so what is its design?" (a hypothetical version of the 14-03 finding's bounded follow-up #2). Shape C would be:

- First /MVLw run on the question → finding.md proposes meta-loop runtime design at architecture-only level + identifies open implementation routes.
- /routeman on the resulting inquiry folder → enumerates routes (Route 1: build the meta-loop runtime; Route 2: defer to L2+ readiness; Route 3: simplify the proposed architecture; Route 4: spawn a sub-inquiry on `_meta_state.md` schema).
- User selects Route 1 (build the meta-loop runtime).
- Second /MVLw run on Route 1 as the refined question → finding.md produces concrete implementation plan with phases + deliverables.

The two /MVLw runs answer structurally different questions; routeman's middle step routes the work from the high-level decision to the implementation decision.

**Continuation can still apply.** If the second /MVLw also surfaces enumeration needs (more sub-routes within Route 1's implementation), another /routeman invocation can fire. The pattern is composable iteratively, but the cost-gate must justify each additional cycle.

#### 5-test cycle for P4

- **Novelty:** Names the maximal pattern with cost-gating.
- **Scrutiny survival:** Strongest objection: "Is this just Shape A applied twice with /routeman between?" Survives: structurally yes, but the explicit naming clarifies WHEN the two-cycle pattern justifies its cost. Without the explicit naming, users might default to one cycle when two are warranted.
- **Fertility:** Generalizes — N-cycle sandwich patterns (Shape A repeated) are possible; Shape C is the simplest non-trivial case (N=2).
- **Actionability:** Yes — with concrete cost justification.
- **Mechanism independence:** Combination + Constraint Manipulation converge.

**Verdict: PASS. ACTIONABLE.**

---

### P6 — Design-grounded honesty

**Mechanism coverage:** Lens Shifting (frame the recommendation's confidence under "design-grounded vs runtime-grounded" lens) + Domain Transfer (borrowing the 14-03 finding's design-vs-runtime distinction pattern).

#### Content

**Honest framing of the recommendation's confidence level.** This finding's recommendation is **design-grounded**, not runtime-grounded.

**The empirical-precedent gap.** `find devdocs/inquiries -name routeman.md` returns empty across the project's inquiry history. /routeman has NEVER been invoked on any inquiry; the integration pattern this finding recommends has zero operational precedent. All routeman-related work to date has been about DESIGNING routeman (via /MVLw inquiries that produced findings about routeman's shape, schema, read policy, compatibility, and the most recent consolidated amendment plan); /routeman itself has not been used to enumerate next moves on a real cognitive task.

**Why this matters for confidence.** A design-grounded recommendation tests proposed patterns against the specs (routeman's reference doc + /MVLw's SKILL.md + the discipline taxonomy + the priors' commitments). It does NOT test against operational behavior — there isn't any to test against yet. The patterns this finding recommends are structurally well-supported by the specs but unvalidated by use.

This is the same posture the 14-03 finding adopted when answering whether the committed routeman shape was end-goal-compatible: "design-grounded testing is the appropriate testing for design-stage capabilities. Runtime-grounded testing requires the runtimes to exist, which they don't yet." This finding inherits the same posture.

**Operational validation pending.** When /routeman is first invoked on a real inquiry (post-this-finding), Shape A's folder-input mechanism + the continuation pattern + the staged-rerunnability mechanic will be exercised in practice. Operational issues may surface that the design-grounded analysis didn't anticipate. The recommendation may need adjustment.

**Confidence reservation in language.** Throughout this finding, statements like "Shape A is the primary pattern" should be read with the design-grounded qualifier: "structurally well-supported by both specs and the architectural taxonomy; operational validation pending." The recommendations are best-available given current evidence, not certainties.

#### 5-test cycle for P6

- **Novelty:** Adapts 14-03's framing to this inquiry's context. Modest novelty (pattern transfer, not invention).
- **Scrutiny survival:** Strongest objection: "Is the honesty section necessary?" Survives: yes — without it, the user might over-rely on the design-grounded recommendation and miss operational issues when they arise. The honesty framing protects against over-confidence.
- **Fertility:** The design-vs-runtime distinction is becoming a project-canonical confidence-framing pattern (used at 14-03 + 16-45 + here). At N=3+ instances, this is a project pattern worth formal naming.
- **Actionability:** Yes — calibrates the user's confidence in the recommendation.
- **Mechanism independence:** Lens Shifting + Domain Transfer (from 14-03) converge.

**Verdict: PASS. ACTIONABLE.**

---

### P7 — Open Questions

**Mechanism coverage:** Extrapolation (post-application monitoring + revival triggers) + Absence Recognition (what didn't this inquiry settle that future work needs to address).

#### Content

#### MONITORING

- **OQ1 — Shape A operational validation.** When /routeman is first invoked on a real inquiry's folder post-this-finding, observe whether the folder-input contract works as the discipline spec implies. Specifically: does /routeman successfully reconstruct the inquiry's state from the finding.md + discipline outputs + branch.md? Does the resulting Route Map represent the inquiry's actual next-move space, or does it surface gaps in the state representation?

- **OQ2 — Continuation pattern firing frequency.** Across the first 5-10 real /routeman invocations, observe how often the continuation pattern fires (LOW confidence routes; §4.7 RE-RUN self-signal; user-driven directional re-run). High frequency suggests the initial generic-mode runs are routinely insufficient; low frequency suggests generic mode usually suffices. Calibrates whether Shape A's two-step + occasional continuation IS the natural pattern, or whether continuation-as-default is needed.

- **OQ3 — Heaviness composition test.** Does /MVLw composing around /routeman genuinely cover the adversarial-on-routes gap? Test: when /MVLw runs on a /routeman output (Shape C's second cycle, or a hypothetical Shape "validate-routes-via-MVLw"), does Critique's adversarial test on the route map produce structurally distinct verdicts that routeman alone would have missed? Observe across the first few uses.

- **OQ4 — Staged-rerunnability operational test.** When re-running /routeman with refined parameters (directional mode + refined-sub-goal), does the second invocation produce structurally distinct content from the first? Quantitatively: per-route status updates + new routes added + routes REVISIT-INVALIDATED. If the second run produces near-identical Route Maps, the staged-rerunnability mechanic isn't pulling its weight; investigate.

- **OQ5 — Per-route reasoning sufficiency.** The 13-23 + 00-51 commitments + 16-45 REPAIR rule constrain the γ-field (`why_this_might_be_important`) to 1-sentence cycle-anchored content. Across real uses, does this constraint produce the per-route reasoning quality the user expects, or does the user routinely feel the need for more cross-route reasoning (driving Shape A → Shape C upgrade)? Operational signal.

#### BLOCKED

- **OQ6 — `/reflect` revival pattern test.** When `/reflect` (the backward-Boundary discipline at `cognitive_harness/non-active/reflect/`) is revived, does the composition pattern this finding recommends generalize? Specifically: does /MVLw → /reflect (observe how the cycle ran) + /MVLw → /routeman (enumerate next moves) compose into a coherent /MVLw → /reflect + /routeman pattern? Blocked on /reflect revival.

- **OQ7 — Nav-session aggregation pattern.** Per the 14-03 bounded follow-up #1: when navigation-session aggregation is designed, how does it interact with this finding's single-worker composition pattern? Single-worker Shape A produces ONE routeman.md per worker; nav-session aggregation reads N workers' routeman.md outputs. The two patterns operate at different scales; the integration between scales is bounded follow-up territory. Blocked on the nav-session aggregation inquiry.

- **OQ8 — Meta-loop runtime pattern.** Per the 14-03 bounded follow-up #2: when meta-loop runtime is designed, what role does Shape A play in the meta-loop's per-iteration cycle? The meta-loop's 8-movement vocabulary (forward/backward/sideways/down/up/branch/merge/stop) consumes routeman's 16-type taxonomy at the L2+ level; this finding's Shape A is at L0/L1. The mapping between levels is bounded follow-up territory. Blocked on meta-loop runtime inquiry.

#### RESEARCH FRONTIERS

- **OQ9 — Cross-discipline composition pattern (Boundary discipline + cognitive cycle).** This inquiry surfaces a generalizable pattern: any Boundary discipline (forward or backward) composes with the cognitive-cycle runner at the between-cycles slot. Currently N=1 instance (routeman + /MVLw). At N=2 (when /reflect is revived and composes similarly), promote to project-canonical principle: "Boundary disciplines compose with cognitive-cycle runners at the between-cycles architectural slot."

- **OQ10 — Design-vs-runtime confidence pattern.** Currently N=3 instances of the design-vs-runtime distinction being used to frame confidence (14-03, 16-45, this finding). At N=5+ instances, promote to project-canonical confidence-framing pattern. Currently a Research Frontier observation.

- **OQ11 — Composition-shape pattern across runner variants.** When other Boundary disciplines ship (e.g., a future "evaluator" Boundary discipline distinct from /reflect), does the composition shape (cycle-runner → Boundary discipline) generalize to all runner-discipline pairs? Open question for the cross-discipline integration architecture.

#### REFINEMENT TRIGGERS

- **OQ12 — If composition demonstrably fails to cover heaviness in practice.** Trigger: after ≥3 real Shape A invocations, observe whether the inquiries that triggered Shape A produced enumerations the user judged sufficient. If insufficient in ≥2 cases AND the gap traces to absent adversarial-on-routes reasoning, the spec-modifying shapes (D: routeman as discipline-slot in /MVLw; E: /routeman invokes /MVLw on uncertain routes) re-open. Both are currently OUT OF SCOPE per this inquiry's constraint C2; revival would require a fresh inquiry on the spec change.

- **OQ13 — If naive identical-parameter re-run is used and works.** Trigger: a user runs /routeman twice with identical parameters and gets demonstrably distinct output. This would indicate routeman is NOT idempotent within an invocation as the spec claims (§3.6 of routeman.md). Investigate spec-vs-runtime mismatch.

- **OQ14 — If the empirical-precedent gap surfaces patterns this finding's design analysis missed.** Trigger: any structural finding about Shape A in practice that contradicts the design-grounded prediction. Observe and refine.

#### 5-test cycle for P7

- **Novelty:** The 14 open-question items emerge from gaps surfaced across surfacing + sensemaking. The cross-discipline composition pattern observation (OQ9) is a novel research-frontier item.
- **Scrutiny survival:** Strongest objection: "14 open questions is too many; some are minor." Survives: the items are typed across 4 categories with explicit gates; the user can filter by category relevance. The count reflects the inquiry's design-grounded posture — without empirical precedent, more monitoring/refinement triggers are appropriate.
- **Fertility:** Each item has a concrete revival trigger.
- **Actionability:** Items have stated gates (observable / blocked-on-X / N≥Y).
- **Mechanism independence:** Extrapolation + Absence Recognition converge.

**Verdict: PASS. ACTIONABLE.**

---

### P8 — Finding deliverable shape spec

**Mechanism coverage:** Combination (CONCLUDE template + this inquiry's 4 observation targets + upstream piece outputs) + Constraint Manipulation (the spec's "no Inherited Commitments Re-test" constraint per the no-Synthesis-Trigger framing).

#### Content

**Finding section structure (per CONCLUDE template, in order):**

```markdown
---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: /routeman + /MVLw integration pattern — workflow-layer sequential composition; 3 primary shapes with the Boundary-discipline architectural slot supplying the WHY

## Question
[From _branch.md — the 4 observation targets + ordinary-problem-solving framing]

## Finding Summary
[5-8 bullet points covering:
- The integration is workflow-layer sequential composition; no spec change to either skill.
- Shape A (/MVLw → /routeman) is the primary pattern.
- Shape A's continuation pattern uses directional-mode re-run for high-stakes parents.
- Shape B (/routeman → /MVLw) is the inverse for already-stabilized states.
- Shape C (/MVLw → /routeman → /MVLw) is the maximal sandwich for highest-stakes inquiries.
- Job-boundary: /MVLw does reasoning; /routeman does enumeration; per-route reasoning lives inside routeman; cross-route reasoning is the composition.
- No new heavy-mode spec for /routeman; existing depth mechanisms (internal iteration + staged-mapping + re-invocation + RE-RUN signal) + composition supply heaviness.
- User's staged-rerunnability hypothesis structurally validated by 18-58 + 14-49 + 16-45 commitments.
- Design-grounded honesty: zero empirical precedent; operational validation pending.
]

## Finding

### Surrounding context
[Where the user is coming from + why the inquiry now]

### The architectural slot
[Boundary discipline + cognitive cycle = prescribed composition slot]

### Job-boundary
[Per-route vs cross-route reasoning two-tier; cognitive-operation orthogonality]

### Shape A — Primary pattern (/MVLw → /routeman)
[Full P2 content]

### Shape B — Secondary pattern (/routeman → /MVLw)
[Full P3 content with caveats]

### Shape C — Maximal pattern (/MVLw → /routeman → /MVLw)
[Full P4 content with cost-gating]

### Routeman's depth mechanisms
[4 depth mechanisms enumerated]

### Heaviness adjudication
[5 sub-axes; per-axis verdict; no-heavy-mode-spec conclusion]

### Staged-rerunnability — the user's hypothesis structurally validated
[The 18-58 staged-mapping mechanism IS the user's idea; meaningful vs naive re-run]

### Design-grounded honesty
[Full P6 content]

## Next Actions

### MUST
None required. The finding is a recommendation; the user applies the workflow patterns at their discretion. Without applying any specific pattern, the finding's value is the framework for thinking about the composition.

### COULD

- **Try Shape A on a real high-stakes inquiry** — first operational validation of the integration pattern. Who: the user. Gate: condition-bound — when a hard inquiry that needs both reasoning + enumeration arises. Why: closes the empirical-precedent gap; provides operational signal for the monitoring items in Open Questions.

- **Author the institutional memory file `docs/discipline_design_history/for_routeman.md`** — record routeman's design history through the inquiry chain. Who: any inquiry runner. Gate: user decision. Why: routeman is the project's only shipped Boundary discipline; institutional memory aids future Boundary disciplines (e.g., /reflect revival). Independent of the integration question per se.

### DEFERRED

- **Spec-modifying composition shapes** (Shape D: routeman as discipline-slot in /MVLw; Shape E: /routeman invokes /MVLw on uncertain routes). Gate: observable — if Shape A composition demonstrably fails to cover heaviness across ≥2 real high-stakes inquiries, the spec-modifying shapes re-open in a fresh inquiry. Why: spec changes are higher-cost than workflow composition; reserve for when composition proves insufficient.

- **/reflect revival as the backward-Boundary discipline**. Gate: user decision. Why: when /reflect ships, this finding's composition pattern generalizes to /MVLw → /reflect (backward-Boundary, observe how cycle ran) + /MVLw → /routeman (forward-Boundary, enumerate next moves). The cross-discipline pattern (Boundary + cognitive cycle) becomes N=2 instance.

- **Bounded follow-ups from 14-03 (nav-session aggregation; meta-loop runtime).** Out of scope for this inquiry; preserved per the 14-03 finding's revival triggers.

## Reasoning
[Substantive prose addressing Sensemaking's 5 ambiguities + Critique's caveats (when Critique runs):
- A1 — composition is sequential, not orchestrated; folder-path-as-shared-state suffices.
- A2 — Shape G merges into Shape A's continuation; not a separate shape.
- A3 — heaviness is usage pattern, not new invocation mode; no spec change.
- A4 — reasoning with enumeration is dual-level (per-route inside; cross-route via composition).
- A5 — meaningful re-run requires change between runs; naive identical re-run is idempotent.
- Why this finding over alternatives — the architectural-slot framing + existing depth mechanisms + composition explain the integration without new design.
- Strongest prosecution: "the user is right that routeman is too lightweight." Defense: heaviness IS achieved, just not via spec-internalization — via composition with /MVLw, which IS the heavy-reasoning workflow. The user's intuition is right; the remedy is recognition of the existing architecture.
]

## Open Questions
[Full P7 content — 4 typed categories with 14 items total]

## Source Input
<details>
<summary>Raw user input for this finding</summary>

```text
[User's verbatim invocation, including the mid-run clarification about /MVL+ and /MVL2+ deprecation + clarification that composition is SKILL-level not pipeline-merging]
```

</details>
```

**Compliance criteria for P8 deliverable:**

- [ ] All sections present in canonical order per CONCLUDE template.
- [ ] Finding Summary has 5-8 bullets covering: architectural slot framing, 3 primary shapes, continuation pattern, job-boundary, heaviness verdict, staged-rerunnability validation, design-grounded honesty.
- [ ] Finding body includes the 3 shape recommendations WITH worked examples + depth-mechanism inventory + heaviness adjudication + staged-rerunnability mechanism + honesty section.
- [ ] **NO** `## Inherited Commitments Re-test` section (the inquiry's `_branch.md` did NOT declare a Synthesis Trigger; priors are CONTEXT not INPUTS).
- [ ] Next Actions has 0 MUST + 2 COULD + 3 DEFERRED items.
- [ ] Reasoning explicitly addresses Sensemaking's 5 ambiguities + the strongest-prosecution defense.
- [ ] Open Questions populates 4 typed categories (Monitoring: 5 + Blocked: 3 + Research Frontiers: 3 + Refinement Triggers: 3).
- [ ] Source Input preserves user's verbatim invocation + the mid-run clarification about deprecated runners + composition-layer scope.

#### 5-test cycle for P8

- **Novelty:** Standard CONCLUDE template applied to this inquiry's content; the section-by-section content is novel via the per-piece outputs.
- **Scrutiny survival:** Compliance criteria are concrete and verifiable.
- **Fertility:** Shape-spec is reusable for future workflow-recommendation inquiries.
- **Actionability:** CONCLUDE can write directly to the spec.
- **Mechanism independence:** Combination + Constraint Manipulation converge.

**Verdict: PASS. ACTIONABLE.**

---

## Inherited Frame Audit (between Phase 2 and Phase 3)

### Step (i) — Seed-level central assumption

The seed framing's central assumption: **"The composition of /routeman and /MVLw should be at the workflow layer using existing invocation contracts, and the existing depth mechanisms suffice without a new heavy-mode spec."** Load-bearing because the entire recommendation rests on this frame.

### Step (ii) — Piece-level commitments

None of the 8 pieces are meta-decision pieces (per the Meta-Decision-Piece Criterion). Sensemaking did the adjudications:
- A1 sequential not orchestrated → committed at Sensemaking.
- A2 Shape G merges into A's continuation → committed at Sensemaking.
- A3 heaviness is usage pattern → committed at Sensemaking.
- A4 dual-level reasoning → committed at Sensemaking.
- A5 meaningful re-run requires change → committed at Sensemaking.

The pieces are content-production. Piece-Level Inversion Rule does NOT apply.

### Step (iii) — Challenge scan

Does any candidate in the set explicitly challenge the seed-level central assumption?

**YES.** Sensemaking's Ambiguity 3 produced the counter-frame ("heavy version" as a new invocation mode, requiring spec change) AND structurally refuted it. The candidate set INCLUDES the rejected counter-frame and the structural refutation. Shapes D + E (spec-modifying) are enumerated and out-of-scope, providing the explicit challenge anchor.

Operational signals for explicit challenge:
- "What if X is wrong" — Sensemaking A3 explicitly tested "what if heavy version = new invocation mode" and refuted it.
- Frame-rejection statements — the deliverable's heaviness verdict explicitly states "no new heavy-mode spec needed" with reasoning.

### Step (iv) — Firing condition

The audit does NOT fire. The seed-level central assumption HAS an explicit challenge in the candidate set + structural refutation.

For piece-level commitments: none are meta-decision pieces (Sensemaking adjudicated upstream); audit applies trivially.

**Verdict: Audit does NOT fire. Proceed to Phase 3 Test.**

---

## Phase 3 — Test

Each piece's output was tested via the 5-test cycle in the piece sections above. Summary:

| Piece | Verdict |
|---|---|
| P1 — Architectural framing + job-boundary | PASS ACTIONABLE |
| P5 — Depth mechanisms + heaviness + staged-rerunnability | PASS ACTIONABLE |
| P2 — Shape A primary | PASS ACTIONABLE |
| P3 — Shape B secondary | PASS ACTIONABLE |
| P4 — Shape C maximal | PASS ACTIONABLE |
| P6 — Design-grounded honesty | PASS ACTIONABLE |
| P7 — Open Questions | PASS ACTIONABLE |
| P8 — Finding deliverable shape spec | PASS ACTIONABLE |

All 8 pieces PASS the 5-test cycle.

---

## Assembly Check

The 8 pieces' outputs combine into one integration-pattern recommendation deliverable. Emergent properties:

- **P1 (frame) + P5 (depth) + P2/P3/P4 (shapes) = the cognitive composition architecture** — when read together, the user sees: WHY composition exists (Boundary discipline slot), HOW deep can routeman go alone (4 mechanisms), and WHICH shape to use when (3 patterns).
- **P5 (depth) + P2 (Shape A continuation) = the staged-rerunnability mechanism in action** — when read together, the user sees that the continuation pattern IS the staged-rerunnability they hypothesized.
- **P6 (honesty) + P7 (open questions) = the design-grounded posture's full expression** — honest confidence reservation paired with concrete monitoring/refinement triggers.
- **All upstream → P8 (finding shape) = the integration deliverable** — the finding spec organizes the upstream content into reader-friendly form per CONCLUDE template.

### Axis coverage check

Multi-axis structure:
- **Axis 1 (composition order):** Shapes A (MVLw → routeman) + B (routeman → MVLw) + C (sandwich). Coverage: 3 distinct orderings + F negative anchor. PASS.
- **Axis 2 (cost):** Low (Shape A) + medium (Shape B) + high (Shape C). Coverage: range. PASS.
- **Axis 3 (heaviness sub-axes):** 5 sub-axes adjudicated. PASS.
- **Axis 4 (confidence framing):** design-grounded explicitly named. PASS.

No single-axis bias.

### Per-row mechanism-trace check

For each shape (A, B, C) — does each have active mechanism work?
- Shape A: Combination + Constraint Manipulation. PASS.
- Shape B: Inversion + Combination. PASS.
- Shape C: Combination + Constraint Manipulation. PASS.

All shapes have mechanism trace.

---

## Mechanism Coverage Telemetry

- **Generators applied:** 3 / 4 (Combination + Absence Recognition + Domain Transfer; Extrapolation light — used in P7 for post-application monitoring).
- **Framers applied:** 3 / 3 (Lens Shifting + Constraint Manipulation + Inversion).
- **Convergence:** YES — Combination + Constraint Manipulation converge on Shape A primary; Inversion + Combination converge on Shape B; Absence Recognition + Constraint Manipulation converge on the heaviness verdict.
- **Survivors tested:** 8 / 8 pieces tested via 5-test cycle. All PASS.
- **Failure modes observed:** None.
  - Premature Evaluation: NO (each output tested after generation).
  - Single-Mechanism Trap: NO (per-piece mechanism log shows 2+ mechanisms per piece).
  - Early Frame Lock: NO (Sensemaking adjudicated the frame; Innovation produced content within the stabilized frame; Inherited Frame Audit checked and did not fire).
  - Innovation Without Grounding: NO (every output grounded in spec content or prior commitments).
  - Mechanism Exhaustion: NO (6/7 mechanism coverage; survivors found).
  - Survival Bias: NO (the uncomfortable possibility — "maybe routeman needs a heavy mode" — was surfaced via Sensemaking A3 + Shape D/E enumeration + structurally refuted, not avoided).

### Per-piece mechanism log

| Piece | Mechanisms applied | Classification |
|---|---|---|
| P1 | Combination, Lens Shifting | content-production |
| P5 | Absence Recognition, Constraint Manipulation | content-production |
| P2 | Combination, Constraint Manipulation | content-production |
| P3 | Inversion, Combination | content-production |
| P4 | Combination, Constraint Manipulation | content-production |
| P6 | Lens Shifting, Domain Transfer | content-production |
| P7 | Extrapolation, Absence Recognition | content-production |
| P8 | Combination, Constraint Manipulation | content-production |

No meta-decision pieces. Piece-Level Inversion Rule does not apply. No inversion-axis violations.

**Overall: PROCEED.** Sufficient coverage (3G + 3F = 6/7 mechanisms) + multi-mechanism convergence + all survivors tested + no failure modes observed.

Next: Critique.
