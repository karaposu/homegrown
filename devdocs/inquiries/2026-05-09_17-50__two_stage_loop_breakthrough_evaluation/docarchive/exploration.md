# Exploration: Two-Stage Loop Breakthrough Evaluation

## Mode + Entry Point

- **Mode:** Artifact (the breakthrough sketch + meta-loop spec + 3 loop_design notes + discipline taxonomy + 2 prior findings are concrete artifacts to inspect) + Possibility (the breakthrough is a 1-paragraph note; interpretation is required to map its claims to the architecture).
- **Entry:** Signal-first. The user named a specific artifact and asked two specific questions; scan starts by extracting the breakthrough's load-bearing claims, then maps each against the existing architecture.

---

## Territory Overview

The territory has three regions:

1. **The breakthrough sketch itself** (`enes/possible_breakthroughs/1.md`) — 1 paragraph; needs claim-extraction.
2. **The existing project architecture** — meta-loop spec, three runners, four-category discipline taxonomy, three loop-design notes, recent findings.
3. **The mapping layer** — for each breakthrough claim, what already covers it, what's adjacent, what's genuinely new.

---

## Inventory — Breakthrough's Load-Bearing Claims

Extracted from `enes/possible_breakthroughs/1.md`, the breakthrough makes seven distinguishable claims:

### Claim B1: "Stage 1 = E→S→D→I→C runs once"

What it asserts: the standard MVL+ pipeline runs as the entry stage.

Mapping: this is **/MVL+ exactly as it exists today** (per `enes/loop_desing_ideas/loop_design_3.md`, the deep walkthrough of /MVL+). Not new.

Confidence: **CONFIRMED.** Not novel.

### Claim B2: "Stage 1 produces context-understanding"

What it asserts: after Stage 1 runs, the system has a richer-than-input understanding of the problem.

Mapping: this is what /MVL+ already produces — `_branch.md` + `exploration.md` + `sensemaking.md` + `decomposition.md` + `innovation.md` + `critique.md` is the context-understanding artifact set. Not new.

Confidence: **CONFIRMED.** Not novel.

### Claim B3: "A NEW DISCIPLINE at the end of Stage 1 decides about Stage 2"

What it asserts: a cognitive operation runs after Critique that makes a decision about what to do next, including running another stage with a custom shape.

Mapping options:

- **Option (a): This is `/navigation` already.** /navigation is a Boundary discipline that "operates between cognitive cycles" and "reads what was produced (survivors, refinements, kill seeds, frontier questions, telemetry signals) and maps the full space of what could come next." But: /navigation produces a typed direction enumeration, not a pipeline composition. /navigation's output is "what directions exist next" (16-type taxonomy); the breakthrough's output is "what custom loop should run next" (composition). These are RELATED but DIFFERENT operations — direction-enumeration vs composition-design.

- **Option (b): This is the meta-loop's "selection" step.** Per `enes/loop_desing_ideas/meta_loop.md`, the meta-loop "uses Navigation as its eyes to see possible moves, uses **explicit selection** to choose one or more moves, runs MVL+ as the probe..." The "selection" step is **currently unspecified** in the meta-loop spec — it's named as existing but not defined. The breakthrough might be filling exactly that gap.

- **Option (c): This is a genuinely new discipline.** No existing discipline directly performs "compose a custom pipeline of disciplines based on prior cycle's evidence." It would be a Boundary or post-Boundary discipline (operates between cycles or at the start of a new cycle).

Confidence: **SCANNED.** The new-discipline claim has 3 mapping options; sensemaking should collapse which is right (or whether it's a hybrid). My reading: closest to (b) — the breakthrough is operationalizing the meta-loop's currently-unspecified selection step at a finer granularity than the meta-loop's spec assumes.

### Claim B4: "Stage 2 = dynamically-generated discipline composition"

What it asserts: at runtime, after Stage 1 completes, a custom pipeline of disciplines is composed and executed — not a fixed pipeline.

Mapping:

- **Compared to /MVL+ (fixed E→S→D→I→C):** this is mid-execution-flexible, which `enes/loop_desing_ideas/loop_design_1.md` explicitly names as "the most powerful but hardest to reason about and hardest to resume cleanly" position on the Pipeline Flexibility dimension. /MVL+ does NOT do this.
- **Compared to /inquiry (variable by classification):** /inquiry picks a pipeline UPFRONT based on problem type classification (5 problem types → 6 pipelines, per `loop_design_1.md`). The breakthrough picks AT RUNTIME based on Stage 1's actual outputs. **Different selection mechanism.**
- **Compared to meta-loop:** meta-loop dispatches whole MVL+ runs (or whole disciplines via /navigation enumeration). It does not currently compose custom pipelines.

Confidence: **CONFIRMED.** Genuinely novel within current architecture. /inquiry is the closest existing analog but uses upfront classification, not runtime composition.

### Claim B5: "Stage 2 examples — 5 innovation chains, 3 explorations, custom orderings"

What it asserts: Stage 2 can produce non-standard pipelines such as repeated runs of the same discipline (chained Innovation, chained Exploration), or non-canonical orderings.

Mapping:

- **Chained Innovation** is currently impossible in any runner. /MVL+ runs Innovation once per iteration. Iterating /MVL+ re-runs E and S and D before I, not just I.
- **Chained Exploration** is the same — currently impossible.
- **Custom orderings** (e.g., E→I→C without S, or D→S instead of S→D) are blocked by all three runners' fixed-pipeline rules.
- The /inquiry runner has 6 pipelines for 5 problem types, but each pipeline is itself fixed; not user-composable.

Confidence: **CONFIRMED.** Genuinely novel. The breakthrough proposes a runner capability that doesn't exist anywhere.

### Claim B6: "Programmatically create new loop structure on the fly"

What it asserts: Stage 2's pipeline is constructed programmatically by Stage 1's output, not picked from a pre-defined catalog.

Mapping:

- All three current runners use **pre-defined pipelines** (fixed in /MVL and /MVL+; selected from a fixed set of 6 in /inquiry).
- Programmatic-on-the-fly composition is a different design pattern — closer to LLM-agent frameworks (ReAct; Tree-of-Thoughts; adaptive testing) than to current runners.
- This is the "mid-execution flexible" capability gap that `loop_design_1.md` names but no runner fills.

Confidence: **CONFIRMED.** Novel. Adds a capability dimension the project has acknowledged but not built.

### Claim B7: "Stage 1 = static stable; Stage 2 = dynamic"

What it asserts: the architecture has a TWO-STAGE shape: stable preparation followed by dynamic exploitation.

Mapping:

- The two-stage shape itself is novel within the project. The current runners are single-stage (one fixed pipeline per inquiry, possibly iterated).
- The shape resembles "training" + "deployment" patterns in ML, "scout" + "exploit" in heuristic search, "bootstrap" + "execute" in software systems.
- The meta-loop comes closer than any single runner: meta-loop = "stateful traversal engine" with multiple MVL+ probes, but each probe is itself fixed-pipeline /MVL+. The two-stage shape isn't articulated in the meta-loop spec at the granularity the breakthrough proposes.

Confidence: **SCANNED.** Novel framing; partial overlap with meta-loop's multi-probe architecture; not a verbatim match.

---

## Cross-Reference Map — Per Architectural Element

| Architectural element | What breakthrough proposes | Already exists? | Genuinely new? |
|---|---|---|---|
| Stage 1 (standard E→S→D→I→C) | Run once as preparation | YES (/MVL+) | NO |
| End-of-Stage-1 decision discipline | New discipline that designs Stage 2 | PARTIAL (meta-loop "selection" step is unspecified; /navigation enumerates but doesn't compose) | YES (operationalization at finer granularity) |
| Stage 2 pipeline composition | Custom discipline composition at runtime | NO (no runner does this) | YES |
| Chained discipline runs | 5 Innovation runs, 3 Exploration runs | NO | YES |
| Custom orderings | Non-canonical sequences (e.g., I→I→I, E→I→C) | NO | YES |
| Two-stage architecture | Static prep + dynamic exploit | PARTIAL (meta-loop has "MVL+ probe" but each probe is fixed) | PARTIAL-YES |

---

## Cross-Comparison — Breakthrough vs Meta-Loop vs /inquiry

The three closest existing concepts, compared on what they actually do:

| | Meta-loop (spec) | /inquiry (current) | Breakthrough (sketch) |
|---|---|---|---|
| **Granularity of dispatch** | Whole MVL+ runs (probes) | Whole pipelines (per classification) | Individual disciplines (chained / re-ordered) |
| **When pipeline is decided** | Per probe; selection is between-probes | Upfront, at inquiry start | At runtime, after Stage 1 |
| **What evidence drives selection** | Navigation map + meta-state | Problem classification (5 types) | Stage 1's actual outputs (E/S/D/I/C results) |
| **Termination** | "Meaningful traversal" judgment (anti-spinning) | Single inquiry's CONCLUDE | Not specified in breakthrough |
| **Cost ceiling** | Not specified | Bounded by single pipeline's run cost | Not specified (5 chains = 5x cost; user must bound) |
| **Implementation status** | Spec exists; sequential v1 not built; multi-head deferred | Built; "RECONSIDER move flags need; pipeline change human-driven" | Sketch only |
| **Architectural layer** | Meta (above MVL+) | Single-runner (replaces /MVL+ for some cases) | Within-or-after-Stage-1 (operationalizes meta-loop's selection step at finer granularity) |
| **Self-modification capability** | Selects whole runs from a catalog | Selects pipelines from a catalog | Composes pipelines from primitive disciplines |

**Key observation:** the breakthrough sits at a finer granularity than the meta-loop and a finer-control-axis than /inquiry. It is NOT a duplicate of either; it's a third position on the dispatch-granularity axis.

---

## What Cognitive Analogues Show

Dynamic-pipeline-composition exists in adjacent fields. Each analog resolves a problem the breakthrough must also resolve:

- **ReAct (Reason + Act loops):** dynamic next-step selection based on prior reasoning + tool output. Resolution: explicit observation-reasoning-action cycle with a thought-step that decides next action.
- **Tree-of-Thoughts / Graph-of-Thoughts:** dynamic search-tree expansion with evaluation-driven branching. Resolution: explicit value-function over thought-states; explicit pruning/backtracking.
- **Adaptive testing / Item Response Theory:** question selection based on prior responses. Resolution: model of latent ability + information-gain optimization.
- **Constraint solver branch-and-bound:** dynamic exploration of solution space with bounding. Resolution: explicit lower/upper bounds; explicit pruning rule.

What these share: **explicit state representation, explicit value/scoring function, explicit termination criterion, explicit cost ceiling.** The breakthrough doesn't yet specify any of these. They're not optional for a working implementation — they're the load-bearing pieces that make dynamic composition not-spin.

Confidence: **SCANNED.** Analogs validate that dynamic pipeline composition is a real and powerful pattern; they also surface what the breakthrough must specify before it can ship.

---

## Architectural-Axis Mapping

Per `enes/loop_desing_ideas/loop_design_1.md`'s 8 design dimensions, where the breakthrough sits:

| Dimension | Breakthrough's choice | Comparison to existing runners |
|---|---|---|
| Drive Mode | Hybrid (auto Stage 1; auto-or-deciderable Stage 2) | Auto-chained (/MVL, /MVL+); Human-typed (/inquiry) |
| State Tracking | Not specified; presumably structured | Structured (all runners) |
| Steering | Stage-2-decider as explicit move-generator | Implicit narrowing (/MVL, /MVL+); Rich move taxonomy inlined (/inquiry) |
| Iteration Files | Not specified | Overwrite + archive (/MVL, /MVL+); Overwrite (/inquiry) |
| **Pipeline Flexibility** | **Mid-execution flexible (Stage 2 generated at runtime)** | **Fixed (/MVL, /MVL+); Variable-by-classification (/inquiry); MISSING in current runners** |
| Branch Parallelism | Not directly addressed; "5 chains" suggests serial-not-parallel | None (/MVL); Decompose-but-no-branch-pipelines (/MVL+); Per-branch sequential (/inquiry) |
| Synthesis | Not addressed | Folder-local finding.md (/MVL, /MVL+); Project-deliverable underspecified (/inquiry) |
| Cross-Inquiry Learning | Not addressed | None across all three |

**The single dimension where the breakthrough is novel: Pipeline Flexibility (mid-execution flexible).** Other dimensions are unaddressed (gap) or convergent with existing runners.

---

## Signal Log

| Signal | What was detected | Probed? | Result |
|---|---|---|---|
| Mid-execution-flexible was named-but-not-built | `loop_design_1.md` explicitly mentions "Mid-execution flexible — most powerful but hardest" as a Pipeline Flexibility option not chosen by any runner | YES | The breakthrough fills exactly this gap. Confirmed. |
| Meta-loop's "selection" step is unspecified | `meta_loop.md` says "uses explicit selection to choose one or more moves" but does not define selection | YES | The breakthrough's "new discipline at end of Stage 1" might be the operationalization of this unspecified step — at finer granularity (individual disciplines) than the meta-loop's whole-MVL+-probe layer. |
| /navigation overlaps but is not the same | /navigation enumerates next directions; the breakthrough's Stage-2-decider COMPOSES a pipeline | YES | Different operations. /navigation could feed the Stage-2-decider but is not it. |
| /inquiry is the closest existing analog but with different selection mechanism | /inquiry classifies upfront; the breakthrough composes at runtime | YES | Different positions on the same dimension; /inquiry is incrementally adaptive, the breakthrough is fully dynamic. |
| The framing tension between /MVL ("SIC is the only primitive") and /MVL+ ("MVL+ is the default") | `loop_design_3.md` explicitly names this unresolved tension | YES | The breakthrough does not address this tension. It assumes E→S→D→I→C as Stage 1 (which is /MVL+'s claim), so the breakthrough sits within /MVL+'s framing, not /MVL's. |
| Chained Innovation / Exploration is impossible today | All runners run each Core discipline at most once per iteration | YES | The breakthrough enables a capability that doesn't exist. Confirmed novel. |
| Multi-head deferral status | `meta_loop.md` defers multi-head until sequential meta-loop completes 3 useful chains | YES | The breakthrough doesn't directly require multi-head, but it shares the project's "loop generates loop" intuition. The breakthrough is sequential (Stage 1 then Stage 2), not parallel (multi-head). |
| Self-improvement parallel | /MVL's improvement-observation mechanism is "system improving system" | YES | The breakthrough's Stage 1 informing Stage 2 is the same self-improvement pattern at a different scale. |
| Missing primitives the breakthrough doesn't specify | termination, cost ceiling, state representation, value function | NOTED | Sensemaking should treat these as ambiguities to collapse. Implementation gates that the breakthrough cannot ship without. |

---

## Confidence Map

| Region | Confidence | Notes |
|---|---|---|
| Stage 1 = /MVL+ as-is | **CONFIRMED** | Verbatim mapping. |
| Stage 2 = dynamic discipline composition; novel within current architecture | **CONFIRMED** | No runner does this; loop_design_1 names the dimension explicitly as not-currently-filled. |
| End-of-Stage-1 decider = potential operationalization of meta-loop's "selection" step | **SCANNED** | Mapping is plausible but the meta-loop's selection step is unspecified, so direct equivalence can't be confirmed. |
| Granularity difference vs meta-loop (individual disciplines vs whole MVL+ probes) | **CONFIRMED** | Direct comparison of mechanisms. |
| Selection mechanism difference vs /inquiry (runtime vs upfront classification) | **CONFIRMED** | Direct comparison of when-decision-is-made. |
| The breakthrough is partly the meta-loop, partly different | **SCANNED** | Both true: the breakthrough overlaps the meta-loop's selection-and-dispatch core; the breakthrough's dispatch is at finer granularity. |
| Substantial-update assessment | **DEFERRED to Sensemaking** | Exploration mapped the territory; whether the novelty is "substantial" depends on what counts as substantial — that's a sensemaking ambiguity collapse. |
| Implementation feasibility | **UNKNOWN** | The breakthrough doesn't specify state management, termination, cost ceiling, or value function. These are not trivial. |
| Effect on existing /MVL-vs-/MVL+ tension | **INFERRED** | Breakthrough takes /MVL+ side (assumes E→S→D→I→C as Stage 1); doesn't reconcile the tension, just chooses one side. |

---

## Frontier State

**Stable** — the breakthrough's seven claims are all mapped; the cross-comparison with meta-loop and /inquiry is complete; the architectural-axis mapping is complete; cognitive analogs scanned.

### Jump scan — deliberate scan in a different direction

Scanned: "What's the strongest interpretation in which the breakthrough IS the meta-loop, just renamed?"

- The meta-loop says: "uses explicit selection to choose one or more moves, runs MVL+ as the probe."
- If "moves" means "individual disciplines" rather than "whole MVL+ runs," and if "the probe" is interpreted as "whatever the selection step composes," then the meta-loop and the breakthrough are similar.
- BUT: the meta-loop spec consistently says "MVL+ as the probe" (whole MVL+, not individual disciplines), and lists movement types (revisit, merge, deepen, refine, develop) that operate on inquiry-level outputs, not discipline-level invocation.
- So a strong reading of the meta-loop has it dispatching whole inquiries, while the breakthrough dispatches individual disciplines. They share the "select-then-dispatch" core but operate at different granularities.

Counter-jump: "What's the strongest interpretation in which the breakthrough is fundamentally different?"

- Meta-loop is between-cycles (/navigation is its eyes; meta-state is its memory; meaningful traversal is its termination judgment); the breakthrough is within-or-extending an inquiry (Stage 1 produces context; Stage 2 acts on it).
- Meta-loop is multi-inquiry (traverses thinking space across inquiries via artifacts); the breakthrough is single-inquiry-extended (one inquiry, two stages).
- These framings are non-overlapping in scope.

**Resolution surfaced for Sensemaking:** these two readings are both partially true. The breakthrough sits at a different level of the architecture than the meta-loop — possibly INSIDE one of meta-loop's probes (if Stage 2's dynamic composition replaces the fixed /MVL+ probe) or BESIDE meta-loop (as an alternative architectural pattern at the same level).

The jump scan produced no new candidate positions; it sharpened the existing comparison.

---

## Gaps and Recommendations

### Bounded gaps

- **Effect on the /MVL-vs-/MVL+ tension** — the breakthrough chooses /MVL+'s framing implicitly; whether the breakthrough RESOLVES the tension or just sides with /MVL+ is unclear. Bounded by sensemaking ambiguity collapse.
- **Implementation feasibility** — the breakthrough doesn't specify state management, termination, cost ceiling, or value function. Bounded by future design work; not necessary to evaluate substantial-update-ness.
- **Breakthrough-vs-meta-loop boundary** — the two share concepts but operate at different granularities; the boundary is sharp on dispatch-granularity but soft on conceptual overlap. Bounded by sensemaking collapse on the "is it the same operation at different granularity, or two different operations?" question.

### What this exploration leaves to Sensemaking

1. **Substantial-update ambiguity (load-bearing):** "Substantial update" is graded. Three readings:
   - *Architectural:* does the breakthrough add a new architectural element / capability / primitive? (Answer: YES — mid-execution flexibility is novel.)
   - *Toward-end-goal:* does the breakthrough advance the project's stated end-goal of multi-head MVL+ in parallel? (Answer: PARTIAL — finer-grained dispatch is a prerequisite for thoughtful multi-head; but multi-head is deferred for sequential-meta-loop reasons.)
   - *Build-now actionable:* is it implementable now? (Answer: NOT YET — missing the load-bearing implementation gates.)

2. **Meta-loop relationship ambiguity:** is the breakthrough (a) the meta-loop renamed, (b) a different operation at different granularity, (c) the operationalization of meta-loop's unspecified selection step, or (d) something else?

3. **Stage-2 discipline ambiguity:** is the proposed end-of-Stage-1 decider (a) /navigation extended, (b) a new discipline, (c) the meta-loop's selection step, or (d) a runner-level capability that doesn't need a discipline?

4. **/MVL-vs-/MVL+ tension implication:** the breakthrough sides with /MVL+ implicitly. Should sensemaking surface this as a hidden assumption to test, or accept it?

5. **Granularity question:** does dispatch-of-individual-disciplines REPLACE dispatch-of-whole-MVL+-runs, or do both coexist at different layers?

6. **Self-reference:** this evaluation runs inside /MVL+ (Stage 1 by the breakthrough's vocabulary). The evaluation cannot escape its own runtime. Sensemaking should acknowledge.

### Recommendations for next disciplines

**For Sensemaking:** Collapse the "substantial-update" reading first (it's the user's framing axis). Then collapse the meta-loop relationship (architectural placement). Then collapse the discipline-vs-runner-capability question. Stabilize a model that says clearly: what the breakthrough adds, where it sits, what it presupposes, and what implementation gates remain.

**For Decomposition:** Partition the actionable space such that the user can decide: (a) PROMOTE the breakthrough to a design proposal (move 1.md to enes/loop_desing_ideas/?); (b) MERGE into meta-loop spec as the operationalization of its selection step; (c) MARK as duplicate (if sensemaking decides it's the meta-loop renamed); (d) DEFER with a revival trigger; (e) SOMETHING ELSE.

**For Innovation:** Generate per-piece proposals. Cover the placement options + the do-nothing baseline + creative reframings.

**For Critique:** Evaluate against (a) phase-fit (this is design-rationale territory; descriptive fits); (b) project end-goal trajectory (multi-head is deferred; the breakthrough's relation to the deferral); (c) the /MVL-vs-/MVL+ tension (does the breakthrough resolve, defer, or sidestep it?); (d) implementation gates (the breakthrough's underspecification); (e) self-reference scope (corpus-internal evaluation).

---

## Frontier-Stability Convergence Check

- **Frontier stability:** YES — all seven breakthrough claims mapped; cross-comparison complete; architectural axes mapped; jump scan produced no new candidates.
- **Declining discovery rate:** YES — additional cycles would re-explore.
- **Bounded gaps:** YES — gaps are bounded by future design work (implementation gates) or by sensemaking collapse (ambiguities listed).

**Convergence: ACHIEVED.** Exploration complete; hand off to Sensemaking.
