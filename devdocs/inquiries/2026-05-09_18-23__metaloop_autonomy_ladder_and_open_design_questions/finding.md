---
status: active
---
# Finding: Meta-loop autonomy ladder and open design questions

## Question

From `_branch.md`:

> How should the meta-loop be designed across an autonomy ladder (Level 0 → Level N) — with the user anchoring L0 ("human as meta-loop, both navigating and running each normal loop") and L1 ("human as meta-loop, navigation enhanced; human only runs loops") — and what are the answers (or design options) for its three currently-unresolved parameters: (a) how many loops per meta-loop session, (b) how the loops are chained, (c) which movement directions the meta-loop can take (only depth, or also width/sideways/upward/branch/merge/revisit)?

The user's own framing in conversation: *"since I am acting as metaloop, lets call this level 0, human as meta loop where i am both navigating and running each normal loops; level 1 human as meta loop but navigation enhanced. human only runs loops. level 2, level 3 etc."*

**Goal.** A coherent design proposal the user can use as the operational reference for meta-loop work — covering: the ladder L0–L_N with role allocations per level; verdicts/options for the three open parameters; explicit alignment with the two prior findings (`devdocs/inquiries/2026-05-10_01-30__metaloop_navigator_session_relationship/finding.md` for session architecture; `devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/finding.md` for the meta-loop-as-traversal-engine concept). The user must be able to (a) place themselves on the ladder today, (b) see what changes at L1, (c) understand the design choices that determine when L2+ becomes buildable, and (d) reference clear positions on the three open parameters when writing the next runner spec.

---

## Finding Summary

- **Where you are today: L0.** You (the human) are running the meta-loop yourself — choosing the next move after each MVL+ run, deciding when to stop, holding the cross-run context in your head. The AI plays only the **Worker** role (executing the MVL+ skill when invoked).

- **What graduates next: L1.** Buildable today. The **Navigator** (the perception component that reads completed MVL+ artifacts and recommends where the system should move) becomes a system-played role, run as a fresh isolated subagent session per the existing project requirement that Navigator must never share context with Worker (`devdocs/inquiries/2026-05-10_01-30__metaloop_navigator_session_relationship/finding.md`'s session-isolation invariant). You still play **Selector** and **Runner** — i.e., you read the Navigator's `navigation_observer.md` output, choose the next direction, and invoke the next MVL+ run.

- **The ladder is six levels (L0–L5).** Each level moves one or more roles from human to system. The canonical sequence: Worker (already system at L0) → Navigator (L1) → Selector + Memory (L2) → Runner + Reflect-channel-self-use (L3) → Multi-head + Evaluator (L4) → Goal-formation (L5, boundary level).

- **The ladder summarizes a 9-axis multi-axial gradient.** The 9 axes are: Worker, Navigator, Selector, Runner, Evaluator, Memory, Reflect-channel, Multi-head, Goal-formation. "Level" is shorthand for a particular tuple of positions across these axes. Other paths through the gradient are valid for projects with different bottlenecks (alternative paths discussed below).

- **Each level has an evidence gate.** L0 → L1 needs no gate (L1 is buildable today). L1 → L2 requires ≥10 Navigation maps **with explicit selection-rationale** captured during L1 use (per the project's existing ≥10 maps gate from `2026-04-27_20-45__meta_loop_whirl_navigation`'s deferral note, refined with rationale-capture). L3 → L4 requires ≥3 useful sequential chains (also from the same prior finding). The L2 → L3 gate and L4 → L5 gate are committed in this finding with **PLACEHOLDER thresholds** that will be re-calibrated against actual L2/L4 data.

- **The three open parameters resolve as level-stratified defaults.**
  - *Loop count* (how many MVL+ probes per meta-loop session): human-decided at L0–L1; fixed budget at L2 (default 5); budget+heuristic hybrid at L3 (default 7 + early-stop heuristic); per-head budget + cross-head total at L4 (default 3 per head, 12 total); convergence-gated at L5 (after the meaningful-traversal substrate per `enes/what_is_meaningful_traversal.md` is operationalized).
  - *Chaining* (how probe N's output feeds probe N+1): linear at L0–L2; linear-with-light-revisit at L3; tree (parallel branches with explicit MERGE protocol) at L4; full graph (revisit + merge) at L5.
  - *Movement directions* (depth-only, or wider): the **full Navigation 16-type taxonomy** (DEEPEN, REFINE, REVISIT, MERGE, CONSOLIDATE, etc., per `homegrown/navigation/references/navigation.md`) is the meta-loop's movement vocabulary at every level. The user's "depth-only" worry is a non-issue — the meta-loop can move forward, backward, sideways, upward, and across branches at L0–L1 because the human selects from the full set. Restrictions only apply at L2+ where the system plays Selector and starts with forward-only moves.

- **Per-level failure modes are explicit.** L0 = human fatigue / arbitrary selection; L1 = Cold Navigation (Navigator missing project context); L2 = low-value automated selections; L3 = spinning runner that doesn't stop; L4 = branch-explosion / cross-head race / MERGE-decision ambiguity; L5 = goal-formation drift.

- **Graceful arrest is a valid path.** Some projects shouldn't reach L4 or L5 because the marginal cost (multi-head infrastructure; goal-formation calibration) exceeds the marginal value for their problem class. The ladder is not a forcing function.

---

## Finding

### Surrounding context

This inquiry sits inside the homegrown thinking-engine project at `/Users/ns/Desktop/projects/native/`. The project defines two sequential-loop runners — `/MVL` (classic Sensemaking → Innovation → Critique pipeline) and `/MVL+` (extended Exploration → Sensemaking → Decomposition → Innovation → Critique pipeline) — plus a meta-loop concept that orchestrates many MVL+ runs across artifacts to traverse "thinking space."

Two prior findings establish the inputs this design must respect:

1. `devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/finding.md` characterizes the meta-loop as a **stateful traversal engine for thinking space** (not just a runner that runs many MVL+ loops). It identifies four functional roles: Navigation as eyes, MVL+ as probe, meta-state as memory, meaningful traversal as anti-spinning judgment. It commits version-1 of the meta-loop as a **sequential, human-selected** linear chain. It defers automated selection (until ≥10 Navigation maps with selections + outcomes exist) and multi-head meta-loop (until ≥3 useful sequential chains complete).

2. `devdocs/inquiries/2026-05-10_01-30__metaloop_navigator_session_relationship/finding.md` adds the **session-isolation invariant**: the Navigator (the artifact-reader that recommends next moves) must run in a session strictly isolated from any Worker session (the MVL+-executing session), at every Level ≥1. This is a failure-mode countermeasure — Worker's local-detail context bloats and distorts Navigation if shared. It maps session counts: sequential meta-loop ≈ 3 session roles (Worker / Navigator / Runner); multi-head with N heads ≈ N+2 (or N+3 at the level where Selector becomes its own role separate from Runner).

This finding extends those two by defining **the autonomy ladder itself** — the discrete progression that lets the user place themselves and see what graduates next.

### 1. The five execution roles + four state/generative axes

The 2026-05-10 finding identified five **execution roles** in the meta-loop cycle:

- **Worker** — runs an MVL+ probe (the AI executing the `/MVL+` skill on a question).
- **Navigator** — reads completed Worker artifacts (e.g., a finished `finding.md`) and produces `navigation_observer.md` enumerating possible next directions.
- **Selector** — chooses which next direction to take from the Navigator's enumeration. Commits a selection.
- **Runner** — orchestrates the cycle (invokes Worker, invokes Navigator, dispatches the Selector's chosen probe, updates `_meta_state.md`).
- **Evaluator** — at multi-head, compares findings across parallel heads (the "cross-head observer").

This finding adds four **state/generative axes** that the original 5-role list left implicit:

- **Memory (meta-loop memory specifically)** — the cross-inquiry traversal state: which inquiries have been run, in what order, with what selections, and what's been visited vs. unvisited. The artifact is `_meta_state.md` (and at higher levels, `navigation_memory.md` and graph-state schemas). This is NOT the same as per-inquiry memory (the `_branch.md` / `_state.md` / `finding.md` files inside each inquiry folder), which is system-managed at every level — including L0 — because the existing `/MVL` and `/MVL+` runners already write those. The axis below tracks meta-loop memory only.
- **Reflect-channel** — what the system does *with* its own reflection observations. Distinct from Memory because Memory is the storage; Reflect-channel is the consume → adapt path. A system can have system-managed Memory at L_N (writes navigation memory file) without having system-managed Reflect-channel at L_N (doesn't yet change its own behavior based on what it reads).
- **Multi-head** — whether the meta-loop runs multiple parallel Worker sessions (N heads) or just one.
- **Goal-formation** — who/what selects the seed for the next traversal (today: the human types a `/MVL+ "question..."`; at the boundary level, the system itself selects the next seed).

The 9-axis frame (5 roles + 4 axes) is what the ladder traverses.

### 2. The 6-level ladder

The user anchored L0 and L1 explicitly. This finding extends through L5. The role-allocation table reads:

**Note on the Memory column.** "Memory" in the meta-loop ladder refers specifically to **cross-inquiry traversal memory** — the state that records *which inquiries have been run, in what order, with what selections, and what's been visited vs. unvisited*. This is the `_meta_state.md` artifact in mature levels. It is NOT the same as **per-inquiry memory** (the `_branch.md`, `_state.md`, `finding.md`, and `docarchive/` files inside each inquiry folder), which is system-managed at every level — including L0 — because that's how the existing `/MVL` and `/MVL+` runners already work. The Memory axis below tracks meta-loop memory only.

| Level | Worker | Navigator | Selector | Runner | Evaluator | Meta-loop Memory | Reflect-channel | Multi-head | Goal-formation | Operational Design Domain |
|---|---|---|---|---|---|---|---|---|---|---|
| **L0** (current) | system | human | human | human | n/a | **none — cross-inquiry traversal lives in the user's head**; per-inquiry md files (`_branch.md`/`_state.md`/findings) are still system-managed (independent of the meta-loop) | human reads/uses | n/a | human seeds | Any inquiry; small graphs; human holds full cross-run context |
| **L1** (buildable today) | system | system (isolated, manually invoked subagent per probe) | human | human | n/a | **`_meta_state.md` artifact exists, written by the human Selector/Runner**; visited-path list of (inquiry → selected direction → rationale) | human reads | n/a | human seeds | Inquiries where a fresh Navigator subagent's warming context (codebase + fundamentals + recent inquiries + target inquiry) fits in one session |
| **L2** | system | system (isolated, auto-discovers source inquiry) | system (with explicit human override) | human | n/a | **system writes `navigation_memory.md`** (Navigator-side memory of past selections + outcomes); human still curates `_meta_state.md`'s rationale capture | system reads Reflect for selection input | n/a | human seeds | Inquiries within the project's established artifact terrain (Selector calibrated on the L1 → L2 gate's data) |
| **L3** | system | system (persistent, isolated) | system | system | n/a | **system manages `_meta_state.md` end-to-end** (writes, updates, reads back) | system uses Reflect for self-stop | n/a | human seeds | Sequential chains within familiar inquiry classes; human still seeds and supervises completion |
| **L4** | system (N parallel Workers) | system (graph-native, persistent, isolated) | system (with cross-head logic) | system (with multi-head dispatch) | system (cross-head comparison) | **system manages graph-state schema** (branch graph + MERGE records) | system writes self-corrections back into Reflect channel | system | human seeds | Inquiries with sufficient prior chains for cross-head MERGE; human seeds + final approval |
| **L5** (boundary) | system | system | system | system | system | **system manages inquiry-topology graph** (full DAG with revisit/merge edges) | system (closed loop: own Reflect → own behavior change) | system | system (cumulative-feedback driven; selects next seed from accumulated Reflect signals + outcome history) | Boundary level — handed off to the consciousness-gradient framing in `enes/desc.md` |

**Reading the table.** A cell value of `system` means an automated component plays that role at that level; `human` means the user plays it; `n/a` means the role doesn't apply at that level (e.g., Evaluator only exists at multi-head).

**Important: Memory advances alongside the role that consumes it.** Memory becomes system-managed at L2 because Selector needs outcome-memory; Memory does not advance ahead of its consumer. Premature memory advancement (writing files no one reads yet) is avoided.

**At L4, Selector and Runner are distinct system roles.** This matches the 2026-05-10 finding's "N+3 at L4" session count, which assumes Selector is a separate role from Runner at the multi-head level.

**At L5, Goal-formation is cumulative-feedback driven.** Among three options (system curiosity / cumulative feedback / user-set priors), cumulative-feedback was selected because it's the most coherent with the Reflect-channel axis advancing across the prior levels (the system reads its own reflections and accumulated outcomes and picks the next seed from the most fertile unexplored territory). The other two were rejected: pure system-curiosity drifts; user-set-priors blocks meaningful L5 autonomy. Note: L5 is explicitly a **boundary level** where the meta-loop ladder hands off to `enes/desc.md`'s consciousness-gradient framing — alternative goal-formation mechanisms remain open at the handoff.

### 3. Per-level loop count (Open Parameter A)

| Level | Loop count default |
|---|---|
| L0 | Human-decided per session |
| L1 | Human-decided |
| L2 | **Fixed budget N** (default N=5 per session, user-overridable). System Selector operates within the budget; human Runner can stop early. |
| L3 | **Hybrid: budget N (default 7) + early-stop heuristic.** The early-stop heuristic is a placeholder for the eventual meaningful-traversal substrate (per `enes/what_is_meaningful_traversal.md`, currently fuzzy). |
| L4 | **Per-head budget M (default 3) + cross-head total budget K (default 12).** Each head limited; total session bounded. |
| L5 | **Convergence-gated** — pure stop based on the meaningful-traversal substrate, after that substrate is operationalized. |

**The L3 early-stop heuristic, in detail.** Stop when ALL of:
- The last 3 Navigation maps produce no new direction-types AND no new specific-targets within existing types (i.e., the Navigator is suggesting only re-runs of past selections — not just "no new types" because the same type with new targets is genuine forward movement).
- The Reflect-channel has zero unaddressed observations, where "unaddressed" means the observation is not marked DONE in `_meta_state.md`'s reflect-log section.

If the budget N is reached without early-stop firing, stop anyway — budget is the floor. The heuristic is explicitly a placeholder; once `enes/what_is_meaningful_traversal.md` is operationalized, this heuristic gets replaced by the substrate's stop signal.

### 4. Per-level chaining (Open Parameter B)

| Level | Chaining topology | `_meta_state.md` schema |
|---|---|---|
| L0 | Linear | Human-mental |
| L1 | Linear | Visited-path list |
| L2 | Linear | Visited-path list + selection rationales |
| L3 | Linear with light revisit | Visited-path list + revisit edges |
| L4 | **Tree** (parallel branches) with explicit MERGE protocol | Branch graph + MERGE records |
| L5 | **Graph** (full DAG with revisit/merge) | Inquiry-topology graph |

**The L4 MERGE protocol shape (operational details deferred to L4 build spec).** When all parallel head Workers complete, the Evaluator session reads all N findings + the original seed `_branch.md`, then writes `merge_observer.md` containing per-head verdicts (productive / repeating / spinning), cross-head deltas (where heads agree; where they diverge), and a recommended action: PROMOTE (one head's finding becomes main line) / MERGE (synthesize across heads) / CONTINUE (parallel heads have more to explore) / STOP (terminate session). The Selector then reads `merge_observer.md` and commits the next move.

To prevent cross-head artifact race conditions: the Runner waits for each head's `finding.md` file to be written before invoking the Evaluator (file-presence as a simple lock proxy).

**Deferred to L4 build spec (post-≥3-chains gate):** the Evaluator's per-head verdict logic (how it decides "productive" vs "spinning") and merge-recommendation logic (how it decides MERGE vs PROMOTE when heads have overlapping conclusions but different reasoning paths). This finding commits the *protocol shape* only; the decision logic gets specified empirically once L4 ships.

### 5. Per-level movement directions (Open Parameter C)

The full Navigation 16-type taxonomy is the meta-loop's movement vocabulary at every level. The user's "depth-only?" worry is rejected — the meta-loop can move forward, backward, sideways, upward, and across branches at every level. What changes per level is which subset of moves the SYSTEM Selector can reliably select from when the human is no longer the Selector:

| Level | System-Selector subset (when applicable) |
|---|---|
| L0 | n/a — human selects from full taxonomy |
| L1 | n/a — human selects from full taxonomy |
| L2 | Forward-only: DEEPEN, REFINE, DEVELOP, INVESTIGATE FRONTIER, PURSUE SEED |
| L3 | Forward + light revisit: L2 set + REVISIT |
| L4 | Forward + revisit + process-directed + MERGE: L3 set + RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE, MERGE |
| L5 | Full taxonomy including CONSOLIDATE, UNBLOCK, TEST |

**Why the L2 system Selector is restricted to forward-only.** REVISIT requires historical reasoning ("does this past finding need to be re-examined?"), which depends on Memory being system-managed. At L2, Memory has just become system-managed; the Selector hasn't accumulated calibration data on REVISIT yet. The restriction prevents miscalibrated REVISIT spirals.

### 6. Evidence gates and build-readiness

| Transition | Evidence gate | Build-readiness phase |
|---|---|---|
| L0 → L1 | None — L1 is the V1 sequential meta-loop already sketched in `enes/loop_desing_ideas/meta_loop.md` §6 ("First Buildable Form") | **L1 = NOW** |
| L1 → L2 | **≥10 Navigation maps from completed inquiries, each with explicit user selection-rationale captured at L1** AND `navigation_memory.md` schema specified | L2 = SOON (months out for this project at typical inquiry rate) |
| L2 → L3 | **PLACEHOLDER thresholds (calibrate after L2 ships):** ≥N sequential chains (default N=5) where system Selector's agreement-with-human is high (default ≥80%) AND the L3 placeholder heuristic fires correctly in ≥M cases (default M=3) | L3 = MID |
| L3 → L4 | **≥3 useful sequential chains** (per `2026-04-27_20-45__meta_loop_whirl_navigation` deferral note) AND L4 MERGE protocol scaffold built | L4 = LATE (multi-head phase) |
| L4 → L5 | **Source-anchored:** meaningful-traversal substrate operationalized (per `enes/what_is_meaningful_traversal.md`). **PLACEHOLDER:** ≥M multi-head sessions (default M=10) showing stable Evaluator outputs (stability criterion calibrated empirically once L4 ships) | L5 = BOUNDARY (frontier; bridges to `desc.md`) |

**Note on PLACEHOLDER gates.** The L2→L3 thresholds (≥5 chains, ≥80% agreement) and L4→L5 multi-head session count (≥10 sessions) are invented in this finding because no source document specifies them and the project hasn't yet reached those levels. The *shapes* of the gates are structurally needed (you need some criterion to certify each transition); the *numeric thresholds* are placeholders that get re-calibrated against actual L2/L4 data once those levels ship. This is honest about what's invented versus what's anchored in the project's prior findings.

**Adding selection-rationale to L1.** The 2026-04-27 finding's existing gate says "≥10 Navigation maps with recorded human selections + later outcomes." This finding adds "+ explicit selection-rationale" to L1's data-capture requirement. The reason: a system Selector at L2 needs to learn the *why* of past selections (not just the *what*) to be calibration-grade. One sentence of rationale per selection at L1 is acceptable overhead.

### 7. Per-level dominant failure mode

| Level | Failure | Mitigation (traced to design) |
|---|---|---|
| L0 | Human fatigue / arbitrary selection / no consistency across runs | Move to L1 (externalize Navigator into an artifact); track selections in `_meta_state.md` |
| L1 | Cold Navigation (Navigator hasn't internalized project terrain); manual-invocation friction | Mandatory Navigator-warming protocol per `homegrown/navigation/warmup/`; isolation invariant prevents context contamination |
| L2 | Low-value system Selector picks; spiraling on unproductive directions | Human override (L2's Selector cell is "system with explicit human override"); selection-rationale recorded; ODD restricts to familiar territory |
| L3 | Spinning Runner / non-stopping behavior | Hybrid budget + early-stop heuristic (loop count L3); Reflect-channel for self-stop |
| L4 | Branch-explosion (heads multiply uncontrollably); cross-head race conditions; **MERGE-decision ambiguity** (overlapping conclusions across heads with different reasoning paths) | Per-head budget + cross-head total budget; file-lock proxy via `finding.md` presence; MERGE-decision logic deferred to L4 build spec after empirical examples |
| L5 | Goal-formation drift (system picks seeds away from user value) | Cumulative-feedback driven goal-formation reads from accumulated Reflect signals (which still reflect human-judged value at L0–L3); meaningful-traversal substrate gates stop; user retains seed-veto via boundary handoff |

### 8. The multi-axial honesty footnote (alternative paths and graceful arrest)

The discrete L0 → L5 ladder above is a **summary path** through the 9-axis multi-axial gradient. The 9 axes are independent in principle. The canonical path graduates them in this order: Worker (already system at L0) → Navigator (L1) → Selector + Memory (L2) → Runner + Reflect-channel-self-use (L3) → Multi-head + Evaluator (L4) → Goal-formation (L5).

**Alternative paths exist for projects with different bottlenecks.**
- A project where Worker autonomy needs improvement (e.g., MVL+ produces unreliable findings) might prioritize Worker-axis refinement (e.g., adding self-checks within MVL+) before Navigator graduation.
- A project working in well-mapped territory might skip L2 (no need for system Selector) and graduate Memory + Multi-head directly.
- A project might **gracefully arrest at L2 or L3** because L4+ adds multi-head complexity without payoff for its problem class. Graceful arrest is a valid design choice, not a failure of progression.

**Bidirectional progression.** As the system gains execution autonomy (Worker → Goal-formation), the human's role doesn't disappear — it elevates. At L0–L1 the human plays selection. At L3 the human is meta-evaluator (judges the Runner's quality). At L5 the human is meta-calibrator (sets goal-formation criteria via Reflect-channel feedback). The ladder is human-role-elevating, not human-disappearing.

**Cost / arrest framing.** Each level has marginal cost (calibration data collection, integration work, complexity). Reaching L_N is justified when the marginal value exceeds marginal cost — which is project-specific. Arresting at L2 or L3 because L4+ doesn't pay off is right-sizing, not regression.

**Bridge to `enes/desc.md`.** L5 is the boundary level. The 6 autonomy indicators in `enes/desc.md` (spontaneous attention, intrinsic valuation, real-time steering, discontinuity awareness, intrinsic curiosity, position indicator) map roughly onto the meta-loop ladder: position indicator ≈ L2's Selector-with-context; real-time steering ≈ L3's Reflect-channel-self-use; discontinuity awareness ≈ L4's Evaluator; spontaneous attention + intrinsic curiosity ≈ L5's Goal-formation. Cross-reference `desc.md` for any work past L5.

**Divergence detection.** A project's actual path has diverged from the canonical ladder when any of these is observed: (a) an axis advances "out of order" relative to the canonical path (e.g., Goal-formation graduates before Runner because the user wants curiosity-led exploration without trusting the Runner); (b) a new axis emerges that's not in the 9-axis frame (e.g., a "Curator" or "Self-modifier" role surfaces during deployment); (c) an evidence gate is unmet but the user wants to graduate anyway. When divergence is detected, reframe as a point in the 9-axis space; the level numbering remains useful for project communication, but the multi-axial frame is the underlying truth.

### 9. How to transition L0 → L1 today

L1 is the first buildable level beyond L0. The concrete transition is small:

1. **Stop mentally navigating after each MVL+ run.** Instead, after `/MVL+` completes a finding, invoke a Navigator skill (per `homegrown/navigation/SKILL.md`) as a fresh isolated subagent (the session-isolation invariant from `2026-05-10_01-30__metaloop_navigator_session_relationship`).
2. **The Navigator subagent reads the just-completed inquiry's artifacts** (the inquiry's `finding.md` plus the warming context per `homegrown/navigation/warmup/navigator-warmup1.md`–`warmup3.md`) and writes a `navigation_observer.md` in the inquiry folder enumerating typed next directions.
3. **You remain Selector and Runner.** You read the `navigation_observer.md`, choose one direction (with a one-sentence rationale captured to `_meta_state.md`), and invoke the next `/MVL+` run.
4. **Maintain `_meta_state.md` as a visited-path list.** Each entry: which inquiry was run, which direction was selected, with what rationale.

That's L1. After ≥10 such cycles (with rationale), you'll have the calibration data the L2 Selector graduation requires.

---

## Next Actions

### MUST

- **What:** Begin operating at L1 today by spawning Navigator as an isolated subagent after each `/MVL+` finding.
  **Who:** User (in the active Claude conversation).
  **Gate:** Observable — next time you complete a `/MVL+` finding, invoke a Navigator subagent before deciding the next move.
  **Why:** L1 is buildable today; the transition is procedural, not architectural. Operating at L1 starts producing the L1→L2 gate's calibration data.

- **What:** Capture explicit one-sentence selection-rationale in `_meta_state.md` for each Selector decision at L1.
  **Who:** User (as Selector at L1).
  **Gate:** Observable — every `_meta_state.md` selection entry has a `rationale:` field after L1 starts.
  **Why:** Selection-rationale is what makes the ≥10 maps gate calibration-grade rather than just observational. Without it, the L2 system Selector has nothing to learn from.

- **What:** Specify the `navigation_memory.md` schema before promoting to L2.
  **Who:** Future MVL+ inquiry on memory-schema design.
  **Gate:** Condition-bound — when L1 has produced ≥5 navigation maps and the L2 Selector design begins.
  **Why:** Memory-alongside-role rule (in this finding, Section 1) requires the Memory schema to exist before the role that consumes it (Selector at L2) graduates. Premature graduation without schema produces a system writing to a file no one can read.

### COULD

- **What:** Build a thin `/meta-loop` skill that automates the L1 wrapping (auto-invoke Navigator subagent after each `/MVL+`; collect rationale via prompt; append to `_meta_state.md`).
  **Who:** Future MVL+ inquiry on `/meta-loop` v1 spec.
  **Gate:** Observable — once the manual L1 procedure feels repetitive enough that automation is worth the spec work.
  **Why:** L1 is procedural; a thin runner reduces friction without changing the design. Optional — the manual procedure works.

- **What:** Add a `## Reflect log` section to `_meta_state.md` schema, even at L1, to start populating data for the L3 Reflect-channel.
  **Who:** Future MVL+ inquiry on `_meta_state.md` schema design.
  **Gate:** Condition-bound — when ≥3 navigation maps have been produced at L1 and the Reflect outputs from completed inquiries start accumulating.
  **Why:** Reflect-channel becomes load-bearing at L3; capturing the data starting at L1 makes the L2 → L3 transition smoother.

### DEFERRED

- **What:** Specify the L4 MERGE protocol's Evaluator-decision logic (per-head verdict + merge-recommendation algorithms).
  **Gate:** Condition-bound — after L3 produces ≥3 useful sequential chains AND L4 build begins.
  **Why if revived:** Without operational decision logic, the L4 MERGE protocol shape is incomplete. The decision logic needs empirical examples (real cross-head scenarios) to specify reliably.

- **What:** Operationalize the meaningful-traversal substrate per `enes/what_is_meaningful_traversal.md`.
  **Gate:** Condition-bound — when ≥3 sequential chains exist with movement traces showing observable convergence/spinning patterns.
  **Why if revived:** L5 is gated on this; until it lands, the L3 hybrid stop heuristic is a placeholder.

- **What:** Specify L6 (system modifies its own discipline specs based on accumulated Reflect signals).
  **Gate:** Condition-bound — after L5 stabilizes (≥5 successful boundary-level traversals).
  **Why if revived:** Maps to `enes/desc.md`'s consciousness-gradient endgame; out of scope for this finding (which terminates at L5 boundary).

- **What:** Specify multi-user / collaborative meta-loop variants (multiple users feeding shared `_meta_state.md`).
  **Gate:** Condition-bound — when the user explicitly needs multi-user support (currently a single-user project).
  **Why if revived:** A "team axis" extends the 9-axis frame to 10; valid extension but not currently load-bearing.

---

## Reasoning

### Why a discrete ladder rather than a multi-axis gradient

Sensemaking explored both framings. The strongest counter-argument to discrete levels: different projects/users will graduate roles in different orders, and a ladder hides that reality. The counter has structural merit but is not strong enough to override the discrete framing for two reasons:

1. The user explicitly anchored L0 and L1, enforcing a specific path (Navigator graduates before Selector). Diverging from this path requires rejecting the user's anchors.
2. The data-dependency gates create a forced partial order in practice: L2's gate consumes L1's data; L4's gate consumes L3's chains. The order is not arbitrary; the data dependencies create a forced sequence.

The compromise: discrete ladder for primary structure, multi-axial honesty preserved as Section 8 (alternative paths, graceful arrest). This is the right cost-benefit for this project.

### Why 9 axes rather than 5 roles

Innovation surfaced this from three converging mechanisms (combination of meta-loop with Reflect, absence recognition of the Reflect-feedback gap, constraint manipulation removing the human-in-the-loop above L3). Three-mechanism convergence is the project's mark of structural insight.

The structural distinction: Memory is "what the system remembers" (storage). Reflect-channel is "what the system does with reflection observations" (consume → adapt). Folding them collapses a real distinction that matters at L3+ where the system needs to self-correct based on its own past observations.

### Why 6 levels (terminating at L5) rather than 4 or unbounded

L4 was the alternative terminus — terminate at multi-head fully automated, but human still seeds. L4 doesn't include the Goal-formation axis. The user asked "level 2, 3, etc." with open-ended terminal, suggesting they expect ≥4 levels. Capping at L5 covers the project's stated end-goal trajectory (multi-head + merging-loops, per the existing project memory) and bridges cleanly to `enes/desc.md`'s consciousness-gradient framing.

L5 is explicitly marked as a **boundary level** with dual citizenship (terminal of meta-loop ladder + entry of consciousness-gradient ladder). The choice is acknowledged as LOW CONFIDENCE / REVERSIBLE in the underlying ambiguity-collapse — alternative goal-formation mechanisms remain open at the `desc.md` handoff.

### Why placeholder gates rather than refusing to specify L2→L3 and L4→L5

Critique surfaced that the L2→L3 thresholds (≥5 chains, ≥80% match) and L4→L5 multi-head count (≥10) are invented in this finding without empirical anchor. The honest alternative was to refuse to commit thresholds and only commit shapes.

Refusing-to-commit was rejected because the user explicitly asked for the levels to be enumerated, and unspecified thresholds make the ladder operationally incomplete. Marking thresholds as PLACEHOLDER (with explicit "calibrate against L_N empirical data once available") was selected as the right honesty / completeness balance.

### Why depth-only is a false worry

The user's third open question was "moves only depth direction?" — implying concern that the meta-loop might be restricted to forward depth. This finding rejects that worry: the full Navigation 16-type taxonomy is the meta-loop's vocabulary at every level. Depth-only would be a regression that abandons what Navigation already enables.

The distinction the user may have been seeing: at L2+ where the system plays Selector, the *system's reliable subset* starts forward-only (DEEPEN/REFINE/DEVELOP/INVESTIGATE FRONTIER/PURSUE SEED) and expands to the full taxonomy at L4+. But at L0–L1 where the human is Selector, the full taxonomy is always available.

### Significant kills (from Innovation, dropped or deferred)

- **L1.2 (failure-first reframing of the ladder)** — KILLED for redundancy: per-level failure modes are already covered in this finding's Section 7; reframing the entire ladder as "what failure does each level prevent?" duplicates without adding.
- **4.2 (multi-user team meta-loop)** — DEFERRED to research frontier: out of scope for current single-user project; valid extension but adds a 10th axis that's not load-bearing today.
- **5.2 (L6 spec-modification level)** — DEFERRED with revival trigger (after L5 stabilizes). Natural extension but past the boundary the meta-loop ladder cleanly addresses.

### Significant SURVIVE (with refinement)

- **9-axis frame** survived multi-mechanism convergence; spec-gap (HOW Reflect-channel works at L3+) deferred to runner spec.
- **L4 MERGE protocol shape** survived as shape-only; decision logic deferred to L4 build spec because logic needs empirical examples.
- **Placeholder gates** survived as honest middle ground between fabrication and refusal.

---

## Open Questions

### Monitoring

- **Will the L3 placeholder heuristic ("no new direction-types AND no new specific-targets in last 3 maps + no unaddressed Reflect observations") fire correctly in practice?** Observable when L3 ships and runs ≥3 sequential chains. If the heuristic produces wrong early-stops in cases where REFINE-with-different-targets is genuine forward movement, refine the heuristic or accelerate the meaningful-traversal substrate.

- **Will the L2 system Selector's "forward-only" restriction feel cramping or right-sized?** Observable after L2 ships and produces ≥5 sequential chains. If forward-only feels too restrictive (system frequently wants to REVISIT but can't), accelerate REVISIT to L2 with explicit Memory-state preconditions.

- **Will Memory-alongside-role coupling rule produce premature schema work?** Observable when the L2 build begins. If the schema work is excessive (more than ≈3 days), reconsider whether Memory should advance independently of Selector.

### Blocked

- **The L5 goal-formation source choice (cumulative-feedback vs alternatives).** Cannot be confidently committed until the meaningful-traversal substrate is operationalized AND ≥3 multi-head sessions exist showing what cumulative feedback actually contains.

- **The L4 Evaluator's decision logic (per-head verdict + merge-recommendation).** Cannot be specified without empirical multi-head examples. Blocked on L3 producing ≥3 sequential chains first.

### Research Frontiers

- **L5 indicators operational checking.** `enes/desc.md`'s 6 autonomy indicators (spontaneous attention, intrinsic valuation, etc.) are mapped onto the ladder qualitatively in this finding. Operationalizing them — defining checkable predicates for each — is unaddressed.

- **Multi-user collaborative meta-loop architecture.** Out of scope for this finding (single-user project). Future inquiry needed if collaboration becomes load-bearing.

- **Discontinuity / new role emergence.** Variation 7.3 from Innovation flagged that a new role (e.g., "Curator" picking which past artifacts to carry forward; or "Self-modifier" editing specs) may emerge during L3 deployment, requiring the 9-axis frame to revise. Watch for this.

### Refinement Triggers

- **The PLACEHOLDER thresholds (≥5 chains / ≥80% match for L2→L3; ≥10 multi-head sessions for L4→L5)** re-open when L2 (or L4) ships and produces actual data. The placeholder values are explicit invitations to re-calibrate.

- **The "Memory advances alongside the consuming role" rule** re-opens if Memory infrastructure work consistently lags role advancement (signal: roles wait on schema specs more than once).

- **The 6-level ladder cap (terminating at L5)** re-opens if a future inquiry surfaces a level beyond L5 that's both meaningful-loop-bounded (i.e., not inside `desc.md`'s consciousness territory) and operationally needed.

- **The "discrete ladder" framing** re-opens if multiple projects diverge from the canonical path persistently — at which point the multi-axis gradient becomes the primary representation and the ladder is just a summary view.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
first read devdocs/inquiries/2026-05-10_01-30__metaloop_navigator_session_relationship/finding.md

and 

devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/finding.md


and lets discuss how meta loop should be or shouldnt be 

and also specifically since i am acting as metaloop , lets call this level 0 , human as meta loop 
where i am both navigating and running each normal loops
and level 1 human as meta loop but navigation enhanced. human only runs loops. 

level 2,

level 3 


etc. 

lets also ta;l about this too.  


Also one thing about metaloop is how many loops it runs? how it chains things? it moves only depth direction ? these are still unanswered
```

</details>
