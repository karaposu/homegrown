# Sensemaking: Meta-loop autonomy ladder and open design questions

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-09_18-23__metaloop_autonomy_ladder_and_open_design_questions/_branch.md`

> **Question:** How should the meta-loop be designed across an autonomy ladder (L0 → L_N) — with the user anchoring L0 ("human as meta-loop, both navigating and running each normal loop") and L1 ("human as meta-loop, navigation enhanced; human only runs loops") — and what are the answers (or design options) for its three currently-unresolved parameters: (a) how many loops per meta-loop session, (b) how the loops are chained, and (c) which movement directions the meta-loop can take (only depth, or also width/sideways/upward/branch/merge/revisit)?
>
> **Goal:** A coherent design proposal containing (1) the autonomy ladder L0–L_N with role allocations per level, (2) verdicts/options for the three open parameters, (3) explicit alignment with the two prior findings (2026-05-10 session-architecture; 2026-04-27 traversal engine).

The conversation also stated: "since I am acting as metaloop, lets call this level 0, human as meta loop where i am both navigating and running each normal loops" — confirming the user is currently operating at L0 and wants to see what graduates at higher levels.

---

## SV1 — Baseline Understanding

The meta-loop is the orchestration cycle that runs many MVL+ probes across artifacts. The user has anchored two levels (L0 = human does everything except run MVL+; L1 = human selects/runs but Navigator becomes a system component) and is asking for L2+ to be enumerated, plus answers for three open parameters (loop count, chaining, movement directions).

The sensemaking must resolve: which roles graduate at each higher level; whether discrete levels are the right abstraction at all (vs. multi-axis gradient); how the open parameters bind to levels (each parameter has different defaults at different levels); and which prior-finding facts are non-negotiable inputs.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints (limits, requirements, boundaries)

- **C1: Navigator-always-isolated invariant** at every level ≥1. Source: 2026-05-10 finding §"Session boundaries". Non-negotiable.
- **C2: Multi-head deferral gate.** Multi-head meta-loop can be designed but not built until ≥3 useful sequential chains exist. Source: 2026-04-27 finding §"DEFERRED".
- **C3: Automated selector deferral gate.** L2 (system Selector) requires ≥10 Navigation maps with recorded human selections + outcomes. Source: 2026-04-27 finding §"DEFERRED".
- **C4: Meaningful-traversal substrate not yet operationalized.** Convergence-gated stop (LC-2) is blocked until `enes/what_is_meaningful_traversal.md` is operationalized. Source: same.
- **C5: State lives in files.** Cross-session coordination must be artifact-based; no shared process memory. Source: 2026-05-10 finding §"Context and state".
- **C6: Sequential meta-loop = ≈3 session roles; multi-head with N heads = N+2 (or N+3 at L4).** Source: 2026-05-10 finding §"Quick-reference table".
- **C7: User explicitly anchored L0 and L1.** These positions are fixed; the inquiry must extend from them, not redefine them.

### Key Insights (non-obvious implications)

- **K1: The meta-loop ladder is multi-axial, not single-axial.** Each role (Worker, Navigator, Selector, Runner, Evaluator) has its own autonomy axis. A "Level" is a SUMMARY POINT in this multi-dimensional space, not a fundamental.
- **K2: The Navigator's existing L0–L4 ladder (in `enes/towards_cross_run_cognitive_steering_with_isolated_navigator_session.md`) is ONE AXIS of the meta-loop ladder, not a competitor.** The meta-loop ladder composes over the Navigator-axis (and over Selector-axis, Runner-axis, Worker-axis, Memory-axis, Multi-head-axis).
- **K3: The user's L0 and L1 anchor a particular role-graduation order: Worker first (already system at L0), Navigator second (graduates at L1), Selector third (predicted L2), Runner fourth (predicted L3).** This order is not the only possible order — it's the one the user is following based on what's already buildable.
- **K4: Movement direction is NOT a level-dependent restriction at the vocabulary level.** The full Navigation 16-type taxonomy is the movement vocabulary at every level. Per-level restriction applies only to which subset the SYSTEM can reliably select — at L0–L1 where human is Selector, the full set is always available.
- **K5: Loop count and chaining are not independent of multi-head.** Multi-head ≥2 heads forces non-linear chaining (tree minimum) and changes loop count semantics from "probes-in-chain" to "probes-across-heads." Sequential ↔ linear ↔ probe-budget; multi-head ↔ tree/graph ↔ branch-budget.
- **K6: The terminal level's character changes with goal-formation.** L5 (self-seeded) crosses into goal-formation territory described in `enes/desc.md`; this is qualitatively different from "Selector graduated" or "Runner graduated" — it's the system choosing what to think about, not just how to traverse.
- **K7: Memory is a hidden axis the user did NOT name.** `_meta_state.md` already exists conceptually; Reflect-feedback and Navigator-memory make memory load-bearing at L2+. If memory is treated as part of "Navigator graduates" or "Selector graduates," the ladder is silently coupling things; if memory is its own axis, the ladder becomes more honest.

### Structural Points (core components, relationships)

- **SP1: Five canonical roles** (Worker, Navigator, Selector, Runner, Evaluator) per 2026-05-10 finding. Each is independently human-or-system-played at any level.
- **SP2: Open parameter bindings.** Loop count → governs Runner behavior (how many probes Runner orchestrates). Chaining → governs Runner topology (linear/tree/graph) AND _meta_state.md schema. Movement directions → governs Selector vocabulary AND Navigator output coverage.
- **SP3: Non-canonical roles surfaced by exploration.** Memory (persistent state across probes), Reflect-feedback (self-correction channel), Goal-formation (seed selection). These extend the canonical 5-role list at higher autonomy levels.
- **SP4: Composition relationship between Navigator-ladder and meta-loop-ladder.** Navigator's L0–L4 spec is finer-grained on the Navigator axis (manual → auto-discover → persistent → graph-native → bounded autonomous). Meta-loop ladder's L_N can be expressed as a tuple of positions on each role-axis.
- **SP5: Build-readiness gating.** Each meta-loop level has a build-readiness gate based on evidence (e.g., L2 requires C3's ≥10 maps; L4 requires C2's ≥3 chains).

### Foundational Principles (assumptions, rules, axioms)

- **P1: Role-allocation is the unit of autonomy.** A "Level" is defined by which agent (human or system) plays each role. Sub-decisions within a role (e.g., Worker auto-detecting flow type) are finer-grained than levels.
- **P2: Bounded meaningful traversal is the coverage target.** Not full thinking-space discovery (the space expands as artifacts are created). This bounds loop count and convergence semantics across all levels.
- **P3: Failure modes are level-shaped.** A failure mode visible at L0 (human gets tired, picks bad direction) is structurally different from a failure mode at L4 (multi-head branch explosion). The ladder should expose level-specific failure modes.
- **P4: V1-buildability is the design constraint at low levels; design clarity is the constraint at high levels.** L1 must be implementable today (it largely is per V1 sequential per `meta_loop.md` §6). L4–L5 must be cleanly DESIGNED even if unbuildable, because they shape what L2–L3 prepare for.

### Meaning-Nodes (central concepts and themes)

- **M1: Autonomy as role-graduation.** The progression from L0 to L_N is a sequence of roles being moved from human to system, each unlocked by an evidence gate.
- **M2: Multi-axial ladder with summary levels.** "Level" is a useful shorthand for a tuple of positions on multiple independent axes.
- **M3: Composition over independent ladders.** The meta-loop ladder composes over the Navigator-ladder and (future) Selector-ladder, Runner-ladder, etc.
- **M4: Three open parameters are level-stratified, not single-valued.** Loop count, chaining, and movement-subset all have different defaults at different levels.
- **M5: Movement vocabulary = Navigation taxonomy (universal); subset reliability = level-dependent.**

### SV2 — Anchor-Informed Understanding

The meta-loop ladder is **a multi-axial gradient** with discrete summary points. Each "Level" is shorthand for "this combination of positions on the Worker-axis, Navigator-axis, Selector-axis, Runner-axis, Memory-axis, and (eventually) Multi-head-axis and Goal-formation-axis." The user's L0 → L1 transition is one specific path (Navigator-axis advances; everything else stays human). Higher levels follow other paths (typically Selector-axis next at L2, Runner-axis at L3, then Multi-head + Evaluator at L4, and Goal-formation at L5).

The three open parameters are not single design choices — each has level-stratified defaults. Loop count defaults are: human-decided at L0–L1; fixed budget at L2; budget+heuristic at L3; budget+heuristic+multi-head budget at L4. Chaining defaults are: linear at L0–L2; tree at L3+ (because Selector-of-multi-moves is ready); graph (with revisit/merge) at L4+. Movement-direction restrictions only apply when the system plays Selector (L2+) and tighten to Forward-only at L2, expand outward through L3–L4.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- New anchor: **C-T1: Per-level state shape constraints.** Linear chain (L0–L2) uses visited-path list (`_meta_state.md` v1). Tree (L3) requires branch graph. Graph (L4+) requires inquiry-topology graph. Each transition is a `_meta_state.md` schema upgrade.
- New anchor: **C-T2: Selector at L2 cannot reliably handle context-directed moves (REVISIT/MERGE/CONSOLIDATE) without persistent memory.** This couples Selector autonomy with Memory autonomy; the apparent independence in K1 is partial.

### Human / User

- New anchor: **C-H1: User wants to know "where am I now?"** L0 placement is informative — it tells the user which role they currently play and what graduates next.
- New anchor: **C-H2: User's framing prefers concrete role-allocation over axis-abstraction.** The proposal should LEAD with discrete levels and FOOTNOTE the multi-axial frame for honesty, not the reverse.
- New anchor: **C-H3: User asked for "level 2, 3, etc." — open-ended.** Implies they expect ≥4 levels but didn't pre-commit to an exact terminal. A cap at L5 (self-seeded) is honest because beyond that requires `desc.md`'s consciousness-gradient framing not yet operational.

### Strategic / Long-term

- New anchor: **C-S1: Multi-head is the load-bearing destination per project trajectory.** The existing memory (`project_end_goal_loop_architecture.md`) records that multi-head + merging-loops is the end-goal direction. The ladder must NOT terminate at single-head Runner-graduated (L3); it must explicitly include multi-head (L4).
- New anchor: **C-S2: Each level's evidence gate creates the data needed for the next level.** L1 produces Navigation maps (data for L2's automated Selector). L2 produces selections + outcomes (data for L3's runner heuristics). L3 produces sequential chains (data for L4's multi-head MERGE protocol). This is a Baldwin-effect ladder, not arbitrary.

### Risk / Failure

- New anchor: **C-R1: At each level, a specific failure mode dominates.**
  - L0: human-fatigue; arbitrary selection; no consistency across runs.
  - L1: Navigator-warming gaps (Cold Navigation); manual-invocation friction.
  - L2: System Selector picks a low-value direction; can spiral.
  - L3: Spinning (probes go nowhere; no convergence); runner doesn't stop.
  - L4: Branch-explosion; cross-head artifact race conditions; MERGE failures.
  - L5: Goal-formation drift (system picks seeds that drift from user value).
- New anchor: **C-R2: Each level's failure mode unlocks at the level it dominates AND reaches back to earlier levels.** L4 branch-explosion is impossible at L3 (single head), but its anti-pattern (one head spinning) is L3's spinning. The ladder should map failure modes per level.

### Resource / Feasibility

- New anchor: **C-F1: L1 is buildable today.** V1 sequential per `meta_loop.md` §6 IS L1. The user is 1 step away from operating at L1 instead of L0 — they just need to invoke /navigate after each /MVL+ instead of mentally navigating.
- New anchor: **C-F2: L2 is gated by C3 (≥10 maps).** Currently 0–few. L2 buildability is months out, not today.
- New anchor: **C-F3: L4 is gated by C2 (≥3 sequential chains).** L4 design is FAR ahead of build-readiness; this is fine because the design shapes what L1–L3 prepare for.

### Definitional / Consistency

- Tested: does "Level" as a summary point contradict K1 (multi-axial)? **Resolved:** No, if explicitly stated as summary. The framing in K1 + M2 makes the relationship clean.
- Tested: does "L1 = navigation enhanced" contradict the Navigator's L1 ("manually invoked fresh isolated session per run")? **Resolved:** No, they are consistent — meta-loop's L1 IS Navigator's L1 because the meta-loop's L1 graduates the Navigator-axis to its L1 position.
- Tested: does the proposal's "Memory as 7th axis" contradict `_meta_state.md` already being the project's memory artifact? **Resolved:** No — `_meta_state.md` is the artifact; the axis is whether the system READS/WRITES it autonomously vs. a human curating it.
- Tested: does "Movement vocabulary = Navigation taxonomy at all levels" contradict "depth-only" interpretation? **Resolved:** Depth-only is the user's WORRY (one of the three open questions), not a claim. The structural answer: NO, depth-only is wrong — full taxonomy is the vocabulary.
- New anchor: **C-D1: The phrase "meta-loop session" is ambiguous (single LLM session or a complete bounded run).** Default reading: a complete bounded run, possibly hosted across multiple LLM sessions. The 2026-05-10 finding explicitly maps this in its session-counts table.

### Phase / Calibration-State

This perspective is highly relevant: this inquiry is INTRINSICALLY phase-dependent.

- New anchor: **C-P1: Different levels live in different project phases.**
  - L0 — current phase (today). Everything human.
  - L1 — early-stage (buildable now). Navigator just graduated.
  - L2 — mid-stage (≥10 maps gate, months away). Selector just graduated.
  - L3 — mid-late (Runner heuristics exist). Sequential chains running.
  - L4 — multi-head phase (≥3 chains gate). Architecture changes.
  - L5 — terminal. Maps to `enes/desc.md`'s consciousness-gradient indicators.
- New anchor: **C-P2: Defaults for the three open parameters change per phase.** A spec that says "loop count = 5" without phase-conditioning is wrong — what's right at L2 is wrong at L4.
- New anchor: **C-P3: The proposal must explicitly mark which levels are designed-but-deferred vs. designed-and-ready.** L1 is ready; L2/L3 are designed; L4/L5 are designed-with-known-gaps.

### SV3 — Multi-Perspective Understanding

The ladder is a **multi-axial, phase-dependent, gate-driven progression** where each level corresponds to:
1. A specific tuple of positions on multiple role-axes (Worker, Navigator, Selector, Runner, Memory, Multi-head, Goal-formation) — *Technical/Logical*.
2. A specific evidence gate that unlocks it (≥10 maps for L2; ≥3 chains for L4) — *Strategic/Long-term*.
3. A specific dominant failure mode that the level's design must counter — *Risk/Failure*.
4. Specific defaults for the three open parameters tuned to that level's role-allocations — *Technical + Risk*.
5. A specific build-readiness phase (now / soon / mid / far) — *Phase/Calibration-State*.

The user's request can be answered cleanly: present the ladder as a discrete progression with footnoted multi-axial honesty, and per-level tables showing role-allocations, parameter-defaults, evidence gate, dominant failure mode, build-readiness phase.

Major shift from SV2: Memory and Goal-formation are **structurally separate axes**, not folded into Navigator/Selector. This makes the L4→L5 jump intelligible (Multi-head is mostly architectural; Self-seeded is goal-formation, which is a different axis).

---

## Phase 3 — Ambiguity Collapse

### Ambiguity #1: Discrete-levels vs. multi-axial gradient — is the ladder the right shape?

**Strongest counter-interpretation:** The ladder framing forces ordering that doesn't exist in reality. Different projects/users will graduate roles in different orders (some might graduate Memory before Selector; others might do Multi-head before single-head Runner-graduated). A ladder hides this reality. A multi-axial gradient with example "paths" would be more honest and flexible.

**Why the counter-interpretation fails (structural grounds):** The counter has structural merit but is not strong enough to override the ladder framing for THIS project. Two structural reasons:
1. The user's anchored L0 and L1 enforce a specific path (Navigator graduates before Selector). Diverging from this path requires rejecting the user's anchors — out of scope per C7.
2. Build-readiness gates (C2, C3) impose a partial order: L2 requires L1's data; L4 requires L3's chains. The order is not arbitrary; the data dependencies create a forced sequence in practice. A multi-axial gradient doesn't capture these dependencies cleanly.

But the counter is strong enough to require footnoting in the final model: the ladder is the SUMMARY of the most-likely path, and a §"alternative paths" callout should preserve the multi-axial honesty.

**Confidence:** HIGH — ladder framing is structurally appropriate given user anchors + data-dependency gates, with an explicit footnote.

**Resolution:** Use a discrete ladder L0–L5 as the primary structure. Footnote: "this ladder is a summary path through a multi-axial gradient; the underlying space has independent axes (Worker, Navigator, Selector, Runner, Memory, Multi-head, Goal-formation), and alternative paths are valid for projects with different evidence gates."

**What is now fixed?** L0–L5 with role-allocation table per level. Memory and Goal-formation are explicit axes that the ladder traverses.

**What is no longer allowed?** Treating the ladder as a fundamental — claiming there's a unique correct order. Ignoring the multi-axial honesty in the design.

**What now depends on this choice?** SV4–SV6 use the ladder. Decomposition stage works on per-level role-allocation tables. Innovation stage proposes the canonical ladder.

**What changed in the conceptual model?** The model is now "ladder as summary of multi-axial path" rather than "ladder as fundamental ordering." The honesty is preserved without sacrificing user-readability.

---

### Ambiguity #2: What does "meta-loop session" mean — for loop count purposes?

**Strongest counter-interpretation:** A meta-loop session is one LLM conversation. Loop count = N probes within one conversation. This is concrete and matches the "v1" picture in `meta_loop.md` §6 where the user runs probes one by one in a single chat.

**Why the counter-interpretation fails (structural grounds):** The 2026-05-10 finding explicitly maps "session" at multiple levels:
- LLM session (one conversation; one context window).
- Worker session role (could be Option A continuous OR Option B fresh-per-probe).
- Navigator session role (always isolated; could be invoked as a separate "subagent" or separate conversation).
- Runner session role (could be the user's chat OR a separate process).

So "meta-loop session" cannot mean "one LLM conversation" because at multi-head it spans N+2 LLM sessions. The structurally correct definition: a meta-loop session is **one bounded traversal run** — from seed to stop — irrespective of how many LLM sessions host its component roles.

**Confidence:** HIGH — anchored in C6's session-count table.

**Resolution:** "Meta-loop session" = one bounded traversal run (seed to stop), spanning whichever LLM-session count its level requires.

**What is now fixed?** Loop count is "number of MVL+ probes in one bounded traversal run," NOT "number of probes in one LLM conversation."

**What is no longer allowed?** Conflating LLM-session boundaries with meta-loop-session boundaries. (They are equal only at L0–L1 + Option A; they diverge at multi-head and at Option B fresh-worker arrangements.)

**What now depends on this choice?** Loop count semantics in R2; chaining semantics in R3 (chains can span LLM sessions via file-state).

**What changed in the conceptual model?** Loop count is normalized to "probes per traversal," level-stratified.

---

### Ambiguity #3: Does L1 require a separate Navigator session or can it be inline in the user's conversation?

**Strongest counter-interpretation:** Inline Navigator (running in the same LLM conversation as the user) is simpler and matches the user's current workflow. Forcing a separate session adds friction; "isolation" can be enforced semantically (Navigator's prompt warms fresh context) without requiring a new conversation.

**Why the counter-interpretation fails (structural grounds):** The 2026-05-10 finding explicitly states isolation is a failure-mode countermeasure for **worker-context bloat** distorting Navigation. The mechanism: in a shared LLM session, the worker's local context (E/S/D/I/C details) accumulates and biases Navigation. Even fresh-context-warming inside a contaminated session can't fully shed prior context (LLM still has the conversation history). The countermeasure REQUIRES a fresh session, not just fresh prompting.

This is structural, not stylistic. Cite: 2026-05-10 finding §"Failure modes" — *"Cross-component / Context bleed — worker context leaking into Navigator session via shared session — Mitigation: Session-isolation invariant — Navigator must be a separate session."*

**Confidence:** HIGH.

**Resolution:** L1 Navigator runs in a separate (subagent-spawned or separate-conversation) session. The user can invoke Navigator via a /navigate command that the runner spawns as a fresh-context subagent — this preserves session-isolation while keeping the user's UX as "one conversation."

**What is now fixed?** L1 Navigator = separate session (technically a subagent or separate conversation), even if user-experienced as one workflow.

**What is no longer allowed?** Co-located Navigator + Worker in shared LLM conversation context.

**What now depends on this choice?** L1's exact runner behavior (must spawn isolated subagent for /navigate); L2+ inherits this constraint.

**What changed in the conceptual model?** L1 is technically multi-LLM-session (worker + isolated navigator) even though user experiences it as a sequential workflow.

---

### Ambiguity #4: Is L5 (self-seeded) part of THIS ladder or a separate ladder?

**Strongest counter-interpretation:** Goal-formation (system picks its own seed) is qualitatively different from cycle-execution autonomy. It belongs to `enes/desc.md`'s consciousness-gradient framework, not the meta-loop ladder. Putting L5 here muddles the ladder's domain. The meta-loop ladder should terminate at L4 (multi-head fully automated, but human still seeds).

**Why the counter-interpretation fails (structural grounds):** The counter has STRUCTURAL MERIT — goal-formation IS a different domain (about what to think about, not how to traverse). However, two structural reasons keep L5 in this ladder:
1. The same role-allocation framework extends naturally (Goal-formation becomes the 7th axis). Excluding it forces a separate document for what would be one row in the ladder table.
2. The user asked "level 2, 3, etc." with open-ended terminal. Capping at L4 is a design choice; capping at L5 covers the project's stated end-goal trajectory.

But the counter is strong enough that L5 should be explicitly marked as "boundary level — this is where meta-loop ladder hands off to consciousness-gradient framing in `enes/desc.md`."

**Confidence:** LOW (elegant resolution but the counter has merit). Treat as REVERSIBLE.

**Resolution:** Include L5 in the ladder with explicit "boundary" annotation. Acknowledge that L5 reaches into goal-formation territory which has its own framework in `enes/desc.md`.

**What is now fixed?** Ladder spans L0–L5 with L5 as boundary level.

**What is no longer allowed?** Treating L5 as fully specifiable within the meta-loop ladder alone — must reference `desc.md`.

**What now depends on this choice?** Innovation stage's proposal must show L5's character clearly as boundary; Critique stage must test whether L5 is genuinely meta-loop's terminal or `desc.md`'s entry point.

**What changed in the conceptual model?** L5 has dual citizenship: terminal of meta-loop ladder + entry of consciousness ladder.

---

### Ambiguity #5: Loop count default — is "fixed budget N" the right L2 default, or should L2 be convergence-gated?

**Strongest counter-interpretation:** Convergence-gated (LC-2) is more principled. Fixed budgets are arbitrary and may waste effort or stop too early. The system should run until meaningful traversal converges.

**Why the counter-interpretation fails (structural grounds):** C4 (meaningful-traversal substrate not operationalized) blocks LC-2 today. The system has no operational definition of "converged." A purely convergence-gated stop would either (a) never trigger because the heuristic doesn't exist, or (b) trigger on a placeholder heuristic that's untested. Fixed budget is a known-bounded fallback that prevents runaway cost.

**Confidence:** HIGH for the L2–L3 timeframe (until C4 is resolved). LOW for the long term.

**Resolution:** Default for L2: **fixed budget N (user-specified per session)**. L3+: hybrid (budget + heuristic convergence) — heuristic is a placeholder for the future operational meaningful-traversal substrate. Re-evaluate when C4 lands.

**What is now fixed?** L2 loop count = fixed budget. L3+ = hybrid.

**What is no longer allowed?** Pure convergence-gated stop (LC-2) before C4 lands.

**What now depends on this choice?** Innovation stage's per-level loop-count defaults; Critique tests whether the placeholder heuristic at L3+ is robust enough.

**What changed in the conceptual model?** Loop count is phase-dependent: simple bound at L2; hybrid at L3+; pure convergence at L5+ (after C4 resolved).

---

### Ambiguity #6: Is "Memory" a separate axis or is it implicit in Navigator-graduation?

**Strongest counter-interpretation:** The Navigator-axis already includes memory (Navigator L2 is "persistent" with `navigation_memory.md`). Adding Memory as a separate axis is redundant.

**Why the counter-interpretation fails (structural grounds):** Memory has uses BEYOND Navigator. Selector benefits from outcome-memory (which past selections worked); Runner benefits from convergence-memory (when did past chains stop); Reflect-feedback writes to a memory channel that influences future probes. Folding all of this into the Navigator-axis is a category error — the Navigator's memory is one specific use of memory infrastructure.

**Confidence:** HIGH.

**Resolution:** Memory is an explicit 7th axis (or 6th depending on count) in the multi-axial frame. Within the discrete ladder, memory's position is bound to (advances with) Navigator at L1, Selector at L2, etc. — but the AXIS is independent.

**What is now fixed?** Memory is a separate axis. The ladder advances memory at each level along with the role being graduated.

**What is no longer allowed?** Treating Memory as solely a Navigator concern.

**What now depends on this choice?** Decomposition stage's role-allocation table includes a Memory column. Innovation includes Memory's per-level position.

**What changed in the conceptual model?** Multi-axial frame is now: Worker × Navigator × Selector × Runner × Evaluator × Memory × Multi-head × Goal-formation = 8 axes (with Multi-head and Goal-formation only relevant at L4/L5).

---

### Load-bearing concept tests (mandatory per Phase 3 protocol)

#### Concept: "5 cognitive roles" (from 2026-05-10 finding)

- **Test:** domain-property-vs-external-default. Are these 5 roles the project's actual ontology, or an external default the loop adopted?
- **Counter-interpretation:** The 5-role list might be incomplete — Memory and Goal-formation are arguably 6th and 7th roles, not just axes.
- **Why the counter doesn't fully fail:** The 5-role list is anchored in 2026-05-10 finding which itself was the result of MVL+ inquiry, so it's project-derived. BUT the 5 roles are EXECUTION roles; Memory and Goal-formation are STATE/GENERATIVE roles. The 5-role list is correct for execution and incomplete for the full architecture.
- **Resolution:** Keep "5 cognitive execution roles" as the project's frame. Add Memory and Goal-formation as separate-but-related axes (handled in Ambiguity #6 + #4 above).

#### Concept: "Autonomy ladder" itself

- **Test:** proxy-vs-structural. Is "level" a real structural distinction or an incidental shorthand for a multi-axial gradient?
- **Counter-interpretation:** Level is a proxy for "tuple of positions on multiple axes" — not a real structural unit.
- **Why the counter has merit AND fails:** Counter has merit (K1, M2 support multi-axial reality). But the user's anchored L0 and L1 enforce a specific path; data-dependency gates create forced order. So "level" is a proxy AT the abstract level but a real structural unit AT the project level (because the project's evidence gates make one path much more likely than others).
- **Resolution:** Already handled in Ambiguity #1. Ladder framing is correct for THIS project's design exercise; multi-axial honesty preserved as footnote.

#### Concept: "Movement direction" terminology

- **Test:** user-language alignment. Does "movement direction" match the user's vocabulary?
- **Counter:** The user asked "moves only depth direction" — using the term "direction" — and Navigation already uses "direction" + "type" + "route." So "movement direction" is consistent with both user and project vocabulary.
- **Resolution:** Keep "movement direction" as the term.

#### Concept: "Loop count" and "chaining"

- **Test:** user-language alignment + discoverability.
- **Counter:** The user asked "how many loops? how it chains things?" — so these terms are user-grounded. Discoverability: each is a measurable design parameter (count is integer; chain is a topological pattern). Both pass.
- **Resolution:** Keep both as parameters.

#### Specific-vs-pattern recognition cue

The user's L0 and L1 are specific (one user, one path). The inquiry is about the broader pattern (any project, any path through the ladder). Per the recognition cue: I MUST ask whether L0+L1 are THE WHOLE PROBLEM or just instances of a wider design space.

- **Counter:** The user's L0+L1 are not "the whole problem." They're a particular path (the Navigator-graduates-first path, which happens to align with current build-readiness for THIS project). Other projects might have a different path (e.g., a project where Worker autonomy needs to graduate first because Worker is buggy). The full ladder design must accommodate this.
- **Resolution:** The ladder presented in the proposal is the most-likely path for THIS project. The multi-axial footnote (Ambiguity #1 resolution) preserves the broader pattern.

---

### SV4 — Clarified Understanding

The meta-loop autonomy proposal is:

A **discrete L0–L5 ladder** that summarizes the **most-likely path** through a **multi-axial gradient** (8 axes: Worker, Navigator, Selector, Runner, Evaluator, Memory, Multi-head, Goal-formation). Each level is defined by a specific tuple of positions across these axes, gated by evidence (≥10 Navigation maps for L2; ≥3 sequential chains for L4; meaningful-traversal operationalized for full L3 hybrid stop), with phase-stratified defaults for the three open parameters (loop count, chaining, movement-direction subset).

**No longer viable:**
- "Depth-only" movement vocabulary (Ambiguity rejected — full Navigation taxonomy at every level).
- Co-located Navigator + Worker in shared session (Ambiguity #3 rejected).
- Pure convergence-gated stop before meaningful traversal lands (Ambiguity #5 rejected for now).
- L5 cleanly inside meta-loop ladder alone (Ambiguity #4: dual-citizenship with `desc.md`).
- Memory as solely a Navigator concern (Ambiguity #6 rejected).
- Ladder as a fundamental ordering (Ambiguity #1: ladder is a summary of multi-axial gradient).

**Now clear:**
- L0 = current state, all 5 execution roles human-played except Worker (AI runs MVL+).
- L1 = Navigator graduates to system (isolated session, manual invoke). Buildable today.
- L2 = Selector graduates to system. Gated by ≥10 maps. Loop count = fixed budget. Chaining = linear.
- L3 = Runner graduates to system. Loop count = budget+heuristic. Chaining = linear-with-light-revisit.
- L4 = Multi-head + Evaluator. Gated by ≥3 chains. Chaining = tree/graph. Loop count = per-head budget.
- L5 = Goal-formation graduates (boundary level → `desc.md`).

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now FIXED

- **F1: Ladder shape** — discrete L0–L5; multi-axial honesty as footnote.
- **F2: Number of execution roles** — 5 (Worker, Navigator, Selector, Runner, Evaluator).
- **F3: Number of state/generative axes** — 3 (Memory, Multi-head, Goal-formation).
- **F4: Movement vocabulary** — Navigation's full 16-type taxonomy at every level.
- **F5: Navigator-isolation** — invariant at every level ≥1.
- **F6: Loop count semantics** — probes per traversal-run (level-stratified default).
- **F7: Chaining semantics** — linear at L0–L2; tree at L3+; graph at L4+.
- **F8: L1 buildable today** — V1 sequential per `meta_loop.md` §6 IS L1.
- **F9: Evidence gates** — C2 (≥3 chains for L4), C3 (≥10 maps for L2), C4 (meaningful traversal for full L3+).

### Variables ELIMINATED

- E1: Treating "level" as fundamental ordering (multi-axial reality preserved).
- E2: Co-located Navigator + Worker session.
- E3: Depth-only movement subset claim.
- E4: Pure convergence-gated stop before C4 resolves.
- E5: Memory as Navigator-only concern.
- E6: L5 fully specifiable inside meta-loop ladder alone.
- E7: L_N+1 reachable without L_N's evidence gate (skipping levels).

### Variables that remain OPEN (for Innovation/Critique to commit)

- O1: Exact Memory axis position at each level (does Memory advance ahead of, in step with, or behind the role being graduated?).
- O2: Whether L4 separates Selector and Runner roles or keeps them composed (2026-05-10 finding's "N+3 at L4" suggests separation).
- O3: Exact heuristic for L3's "budget + heuristic convergence" — what observable signals.
- O4: How L4 multi-head MERGE protocol works (cross-head finding integration).
- O5: Whether L5's goal-formation comes from system curiosity OR from cumulative Reflect-feedback OR from explicit user-set priors.

### SV5 — Constrained Understanding

The design space has narrowed to: **a 6-level ladder (L0–L5) with 8 axes, 9 fixed structural decisions, 5 open per-level decisions for Innovation to commit, and 4 evidence gates that determine build-readiness.** The proposal must produce, for each level: role-allocation tuple (8 columns), per-level defaults for the three open parameters, dominant failure mode, evidence gate (if applicable), and build-readiness phase.

The ladder is concretely:

| Level | Worker | Navigator | Selector | Runner | Evaluator | Memory | Multi-head | Goal-formation |
|---|---|---|---|---|---|---|---|---|
| L0 | system | human | human | human | n/a | n/a | n/a | human |
| L1 | system | system (isolated, manual) | human | human | n/a | n/a (artifact-only) | n/a | human |
| L2 | system | system (auto-discover) | system | human | n/a | system (writes nav memory) | n/a | human |
| L3 | system | system (persistent) | system | system | n/a | system (full meta-state) | n/a | human |
| L4 | system | system (graph-native, persistent) | system | system | system | system (graph-state) | system | human |
| L5 | system | system | system | system | system | system | system | system (boundary → desc.md) |

(Innovation will refine and add per-level open-parameter defaults.)

---

## Phase 5 — Conceptual Stabilization

### SV6 — Stabilized Model

**The meta-loop is a stateful traversal engine with 5 execution roles + 3 state/generative axes, autonomized along an evidence-gated ladder L0–L5 that summarizes one path through an 8-dimensional autonomy gradient. The user's current operating level is L0; L1 is buildable today; L2–L4 are progressively gated by evidence; L5 is a boundary level reaching into goal-formation per `enes/desc.md`. The three open parameters (loop count, chaining, movement-direction subset) have phase-stratified defaults that change at each level. The full Navigation 16-type movement vocabulary is available at every level; per-level restrictions only apply when the system plays Selector and gradually expand from forward-only (L2) to full taxonomy (L4+).**

#### Component summary

1. **Discrete ladder** — L0 (current) through L5 (boundary). Six levels.
2. **Multi-axial honesty** — eight axes: Worker, Navigator, Selector, Runner, Evaluator, Memory, Multi-head, Goal-formation. Each axis has its own positions; the ladder is the most-likely path.
3. **Evidence gates** — L2 ≥10 navigation maps with selections+outcomes (per existing finding). L4 ≥3 sequential chains (per existing finding). Full L3 hybrid stop ≥ meaningful traversal operationalized.
4. **Phase-stratified parameters** —
   - **Loop count:** human-decided (L0–L1) → fixed budget (L2) → budget+heuristic (L3) → budget+heuristic+per-head (L4) → convergence-gated (L5+, after C4 lands).
   - **Chaining:** linear (L0–L2) → linear-with-light-revisit (L3) → tree (L4) → graph with merge (L4+).
   - **Movement-direction subset (when system selects):** n/a (L0–L1, human selects) → forward-only (L2) → forward + light revisit (L3) → forward + revisit + process-directed (L3–L4) → full taxonomy (L4+).
5. **Failure modes per level** —
   - L0: human fatigue / arbitrary selection.
   - L1: cold Navigation / manual-invocation friction.
   - L2: low-value automated selections.
   - L3: spinning / non-stopping runner.
   - L4: branch-explosion / cross-head race / MERGE failures.
   - L5: goal-formation drift.
6. **Movement vocabulary** — Navigation's full 16-type taxonomy is universal; subset reliability is level-dependent.
7. **Navigator-isolation invariant** — fresh-context separate session at every level ≥1.

### Difference from SV1

| Dimension | SV1 | SV6 |
|---|---|---|
| Structure | "Ladder of role-graduation" | Discrete ladder L0–L5 summarizing 8-axis multi-axial gradient |
| Number of axes | Implicit (5 roles) | Explicit (8 axes including Memory, Multi-head, Goal-formation) |
| Open parameters | "Need answers" | Phase-stratified defaults per level |
| Movement directions | "Depth or full?" | Universal vocabulary; level-restricted subset only for system Selector |
| L5 character | "Self-seeded" | Boundary level → `desc.md` |
| Evidence gates | Implicit | Explicit (≥10 maps, ≥3 chains, meaningful traversal) |
| Failure modes | Not addressed | Per-level dominant failure mode named |
| Navigator isolation | Implicit | Load-bearing invariant at every level ≥1 |
| Buildability | Not addressed | L1 ready today; L2–L4 phase-gated; L5 boundary |
| Memory | Implicit (in Navigator) | Separate axis with per-level positions |

The SV1→SV6 delta is large — the model went from a sketch of role-graduation to a fully gated 8-axis ladder with phase-stratified parameter defaults. This delta indicates genuine sensemaking work, not superficial restatement.

---

## Saturation indicators

- **Perspective saturation:** moderate. The Phase/Calibration-State perspective produced new anchors (C-P1–C-P3) that reshaped the ladder. Definitional/Consistency tested 5 anchors and found 1 partial coupling (Selector + Memory in C-T2). Risk produced level-specific failure modes. Three perspectives (Strategic, Phase/Calibration, Risk) each produced new anchors → the ladder is well-tested from multiple angles.
- **Ambiguity resolution ratio:** 6/6 explicit ambiguities resolved (1 LOW confidence flagged). 5 load-bearing concept tests passed. Open questions O1–O5 are explicit, not silent.
- **SV delta:** large (see SV1 vs SV6 table). Genuine reshaping.
- **Anchor diversity:** 9 anchor types across 7 perspectives (technical, human, strategic, risk, resource, definitional, phase). Multiple anchor types per phase. Healthy diversity.

---

## Open items handed to next disciplines

- **Decomposition** — partition into per-level deliverables: role-allocation tuple, parameter defaults, evidence gate, failure mode, build-readiness phase. Identify the L4 "Selector + Runner" question (O2) and the Memory axis advancement question (O1).
- **Innovation** — propose the canonical ladder spec (per the SV5 table extended with parameter defaults and failure modes), commit O1 and O2, propose a placeholder L3 convergence heuristic (O3), and propose L4 MERGE protocol shape (O4).
- **Critique** — test:
  - Whether the ladder's most-likely-path framing holds for atypical projects.
  - Whether L5's dual citizenship is principled or evasive.
  - Whether the placeholder L3 heuristic is robust enough to ship.
  - Whether the 8-axis count is genuine or includes accidental axes.
  - Whether the per-level failure mode assignment is empirically grounded or just plausible.
