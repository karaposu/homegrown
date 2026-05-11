# Exploration: Meta-loop autonomy ladder and open design questions

## 1. Mode and Entry Point

- **Mode:** Possibility exploration (the territory is the design space for the meta-loop autonomy ladder and its three open parameters), grounded in artifact reads of the project's existing source documents and prior findings.
- **Entry point:** Signal-first — the user has already anchored L0 and L1 explicitly and named the three open parameters. The exploration probes those signals before scanning outward.

---

## 2. Territory Overview

The meta-loop design space has six identifiable regions. Two are the contextual surround (already-decided facts that constrain the design); four are the design-question regions the user is asking about.

### Surround layer (already decided — must not be re-litigated)

- **R-S1: Architectural invariants** from `devdocs/inquiries/2026-05-10_01-30__metaloop_navigator_session_relationship/finding.md`:
  - Five named cognitive roles: Worker (runs MVL+), Navigator (perception), Selector (commits a move), Runner (orchestrates), Evaluator (cross-head comparison; explicit at L4+).
  - Navigator session is **always isolated** from worker session. Load-bearing at every Level ≥1.
  - Sequential meta-loop = ~3 session roles, hostable in 1 user Claude conversation. Multi-head with N heads = N+2 concurrent sessions (N+3 at L4 with separate Selector role).
  - State lives in files; sessions coordinate through artifacts only.

- **R-S2: Conceptual frame** from `devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/finding.md`:
  - Meta-loop = stateful traversal engine for thinking space (controlled whirl; not just a runner that runs many MVL+ loops).
  - Input = seed + context (artifact-native, not just a fresh prompt).
  - Movement vocabulary = Navigation's full 16-type taxonomy (content + process + context-directed).
  - Coverage target = bounded meaningful traversal (NOT full thinking-space discovery; the space expands as artifacts are created).
  - V1 buildable form = sequential, human-selected, linear chain.
  - Multi-head deferred until ≥3 useful sequential chains produced (existing gate).
  - Automated selector deferred until ≥10 Navigation maps with recorded human selections + later outcomes.

### Design-question regions

- **R1: Autonomy ladder structure** — what role-allocations define each level.
- **R2: Open parameter — Loop count** (how many probes per meta-loop session).
- **R3: Open parameter — Chaining** (how probe N's output feeds probe N+1).
- **R4: Open parameter — Movement directions** (depth-only or full Navigation taxonomy).

R5 is a cross-cutting region surfaced during exploration:

- **R5: Cross-region interactions and structural alternatives** — including the framing question of whether discrete levels are even the right abstraction (vs. multi-axis continuous gradient).

---

## 3. Inventory (per region)

### R-S1: Architectural invariants — items already established

| Item | Source | Status for this inquiry |
|---|---|---|
| 5 cognitive roles (Worker, Navigator, Selector, Runner, Evaluator) | 2026-05-10 finding §"Cognitive role separation" | Inputs to ladder design |
| Navigator-always-isolated invariant | Same, §"Session boundaries" | Constrains every level ≥1 |
| Session counts: ~3 (sequential) / N+2 / N+3 | Same, §"Quick-reference table" | Constrains multi-head levels |
| State lives in files | Same, §"Context and state" | Constrains chaining (R3) — graph state must be file-backed |
| Worker session arrangement: Option A continuous vs Option B fresh | Same, §"Source-document gaps" | Open at runner-spec layer; outside this inquiry's scope but adjacent |

### R-S2: Conceptual frame — items already established

| Item | Source | Status for this inquiry |
|---|---|---|
| Meta-loop = stateful traversal engine | 2026-04-27 finding §"Clean Rephrase" | Constrains R1 (ladder must preserve "traversal," not just "runner") |
| Seed + context as input | Same, §"What Its Input Is" | Affects R3 (chaining starts from seed, not always from prior probe) |
| 16-type Navigation movement vocabulary | Same, §"Does Current Navigation Suit This?" | Resolves R4: full taxonomy is the movement set; depth-only is wrong |
| Bounded meaningful traversal (NOT full discovery) | Same, §"What 'Thinking Space' Means" | Constrains R2 (loop count gate must reference traversal substrate) |
| V1 = sequential human-selected | Same, §"First Buildable Form" | This IS L1 in the ladder being designed |
| Multi-head deferred (≥3 chains gate) | Same, §"DEFERRED" | Multi-head appears LATE in the ladder |
| Automated selector deferred (≥10 maps gate) | Same, §"DEFERRED" | L2 not yet ready to ship; ladder is design-time, not implementation-ready beyond L1 |

### R1: Autonomy ladder structure — candidates inventoried

User-anchored:
- **L0:** "human as meta-loop where I am both navigating and running each normal loops" → Human plays Navigator + Selector + Runner; AI plays Worker only (when MVL+ is invoked).
- **L1:** "human as meta-loop but navigation enhanced. human only runs loops." → Human plays Selector + Runner; AI plays Worker + Navigator (isolated, manually invoked).

Candidates generated for L2+ (each level graduates one role from human → system):

- **L2 — Selector graduates.** AI plays Worker + Navigator + Selector. Human plays Runner only (invokes the meta-loop session, supervises). Selector consumes `navigation_observer.md` and commits the next move automatically; human can override.
- **L3 — Runner graduates.** AI plays Worker + Navigator + Selector + Runner. Human supervises. The runner runs probes-then-Navigator-then-Selector-then-probes... until a stop condition. Human reviews completion artifacts.
- **L4 — Multi-head + explicit Evaluator role.** AI plays all roles including Evaluator (cross-head comparison). Multi-head architecture activates here per the deferral gate. N+3 concurrent sessions (N workers + Navigator + Selector + Runner; Evaluator may overlap with Selector or be its own role).
- **L5 — Self-seeded (terminal candidate).** AI generates its own seed (decides what to traverse next). Maps to `enes/desc.md`'s "spontaneous attention" indicator and the Selector at session-boundary level. Bounded by goal-of-goals constraint; humans calibrate the goal-formation criterion.

Alternative-frame candidates (jump-scan results, see §5 Signal Log):

- **A1: Multi-axis ladder.** Treat each role-axis (Navigator-axis × Selector-axis × Runner-axis × Memory-axis × Multi-head-axis × Goal-formation-axis) as independent gradient. The "level" is a useful summary point in this 5–6D space, not a fundamental.
- **A2: Capability-driven ladder.** Levels are defined by what the system can DO (e.g., "L2 = system can pick from forward-only moves; L3 = system can also REVISIT and MERGE") rather than by which role human plays.
- **A3: Hybrid.** Discrete levels exist but each level specifies a position on each axis, AND levels can be reached by different role-graduation orders (e.g., a path that graduates Worker first, or Memory first).

### R2: Open parameter — Loop count — candidates inventoried

| Candidate | Description | Buildability today |
|---|---|---|
| LC-1: Fixed budget | Meta-loop runs N probes (N is user-specified per session, e.g., 5). Stops at N regardless. | Buildable. Easiest. |
| LC-2: Convergence-gated | Runs until meaningful-traversal substrate says converged. | Blocked — meaningful traversal operational definition deferred. |
| LC-3: Goal-gated | Runs until seed's goal is answered. Reuses MVL+'s goal-answered logic at the meta-level. | Buildable but ambiguous — meta-loop's goal is bigger than a single MVL+'s goal. |
| LC-4: Hybrid (budget + early-stop heuristic) | Runs up to budget N; stops earlier if heuristics detect convergence (no new directions in last K Navigation maps; declining discovery rate). | Buildable today. Heuristic is a placeholder for LC-2's eventual operational definition. |
| LC-5: Unbounded continuous | No stop in design; relies on external interrupt (human, time, cost). | Not appropriate until L5+; risks runaway cost. |

### R3: Open parameter — Chaining — candidates inventoried

| Candidate | Topology | Movement support |
|---|---|---|
| CH-1: Linear chain | probe₁ → probe₂ → probe₃ … (single thread; one move chosen per Navigation map) | Forward-only or with light REVISIT; no parallelism |
| CH-2: Tree | probe₁ branches to probe₂ₐ, probe₂_b, … (one selection step picks multiple moves) | Supports multi-head; merges still need protocol |
| CH-3: Graph (DAG) | Tree + REVISIT + MERGE edges | Full Navigation vocabulary; requires explicit MERGE protocol |
| CH-4: Trace-with-state | Linear in execution but persistent state (`_meta_state.md`) supports backward references and revisit-as-new-probe | Forward-execution but graph-shaped state |

Sub-candidates for state shape:
- CH-S1: Visited-path list (simple log of probes + selections)
- CH-S2: Branch graph (nodes = probes; edges = navigation moves)
- CH-S3: Inquiry-topology graph (nodes = inquiries; edges = parent/branch/merge/refine/revisit relations) — matches Navigator's L3 graph-native level.

### R4: Open parameter — Movement directions — candidates inventoried

Already settled by R-S2: Navigation's full 16-type taxonomy IS the meta-loop's movement vocabulary. Reducing to depth-only is a regression that abandons what Navigation already enables.

The remaining design choice: which subset of moves the SYSTEM can execute autonomously at each level. Inventory:

| Subset | Members | Earliest level applicable |
|---|---|---|
| MD-1: Forward-only | DEEPEN, REFINE, DEVELOP, INVESTIGATE FRONTIER, PURSUE SEED | L2+ system Selector |
| MD-2: Forward + light revisit | MD-1 + REVISIT | L3+ |
| MD-3: Forward + revisit + process-directed | MD-2 + RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE | L3–L4 |
| MD-4: Full taxonomy | MD-3 + MERGE, CONSOLIDATE, UNBLOCK, TEST | L4+ (MERGE in particular requires multi-head Evaluator outputs) |

At L0–L1, human plays Selector and can choose any move from the full taxonomy — so movement-direction restrictions only apply at L2+ where system plays Selector.

### R5: Cross-region interactions — candidates inventoried

- **CI-1: Multi-head requires non-linear chaining.** A multi-head Selector commits ≥2 moves per cycle; chaining MUST be tree-or-graph. So multi-head ⇒ R3 = CH-2 or CH-3 minimum.
- **CI-2: System Selector capability gates movement-direction subset.** L2 Selector can only do MD-1 reliably (REVISIT requires historical reasoning). MD-2/3/4 unlock with more capability.
- **CI-3: Loop count gate interacts with traversal substrate.** Convergence-gated stop (LC-2) requires meaningful traversal operationalized. Until that lands, LC-4 hybrid is the practical choice for L2+.
- **CI-4: `_meta_state.md` shape constrains chaining.** Linear chain → visited-path list (CH-S1) suffices. Multi-head → branch graph (CH-S2) needed. Full-traversal-with-revisit/merge → inquiry-topology graph (CH-S3).
- **CI-5: Memory persistence is independent of role autonomy.** Even L1 (manual selector) can have persistent `_meta_state.md` carrying observations from probe to probe. Memory becomes load-bearing at L2+ when System Selector needs to compare to history.
- **CI-6: Reflect discipline as feedback channel.** At L3+ where system runs many probes, Reflect (process quality, looking backward) becomes the natural feedback channel for self-correction. Reflect output → Navigator's L2 `navigation_memory.md` → influences future selections. Currently unspecified in the meta-loop ladder.

---

## 4. Signal Log

| ID | Signal | Source / type | Action |
|---|---|---|---|
| A | User anchored only L0 + L1; explicitly asked "Level 2, 3, etc." | User input — high relevance | **Probed** (R1 candidates L2–L5 generated) |
| B | "Navigation enhanced" at L1 is ambiguous (manual-invoke isolated session vs. auto-warmed) | User input — tension | **Probed** — resolved via Navigator-ladder L1 spec: manual invoke, isolated, fresh, warmed |
| C | "Running loops" at L0/L1 is ambiguous (Worker vs Runner) | User input — tension | **Probed** — resolved as Runner (orchestrator), since AI executes MVL+ in both levels |
| D | Three open parameters (loop count, chaining, depth-only?) listed by user | User input — high importance | **Probed** (R2, R3, R4 inventories generated) |
| E | Navigator's own L0–L4 ladder might collide with meta-loop ladder | Cross-document tension | **Probed** — resolved: distinct ladders that COMPOSE (Navigator-ladder is one axis of meta-loop ladder); see also CI-5 |
| F | Multi-head deferral gate from prior finding | Source-doc evidence — high importance | **Probed** — multi-head appears at L4, after L1–L3 produce evidence |
| G | Worker autonomy itself has gradations (e.g., Worker auto-classifies between MVL and MVL+) | Coverage signal — moderate | **Deferred** — Worker autonomy is a finer grain than role-allocation; flag in Gaps |
| H | What about goal-formation autonomy — system picking its own seed? | Coverage signal — relevance to `enes/desc.md` end-goal | **Probed** (L5 candidate generated) |
| I | Reflect discipline as feedback channel | Density signal — Reflect already exists | **Probed** (CI-6); recommend follow-up |
| J | What if discrete levels are wrong — should meta-loop be a multi-axis continuous gradient? | Jump-scan / framing | **Probed** (A1, A2, A3 in R1); flag for Sensemaking |
| K | Source documents leave Worker session arrangement (Option A vs Option B) open | Cross-doc evidence | **Deferred** — outside the user's three named parameters; flag in Gaps |
| L | At higher autonomy, how does the system self-correct bad selections? | Failure-mode density | **Deferred** — this is a Critique-stage concern; flag in Gaps |
| M | "Branch-explosion" failure mode at multi-head named in prior finding | Failure-mode signal | **Noted** — to be addressed in Critique |
| N | The terminal level (L5) maps to `enes/desc.md`'s autonomy indicators | Cross-doc relevance | **Probed** (L5 candidate); SME-ground via desc.md |
| O | Type-aware probing: is "loop count = N probes per session" load-bearing quantifiable? | Method-meta signal | **Probed** — yes, but the answer is a per-level decision, not a single number; treated as design-option enumeration not a single empirical measurement |

---

## 5. Confidence Map

| Region | Status | Notes |
|---|---|---|
| R-S1 (Architectural invariants) | **Confirmed** | Read in full from prior finding; no fabrication |
| R-S2 (Conceptual frame) | **Confirmed** | Read in full from prior finding; no fabrication |
| R1 — L0, L1 | **Confirmed** | Anchored by user; resolved ambiguities (B, C) explicitly |
| R1 — L2 | **Scanned** | Generated from "Selector graduates" rule; needs Sensemaking validation |
| R1 — L3 | **Scanned** | Same |
| R1 — L4 (multi-head) | **Inferred** | Anchored by 2026-05-10 finding's session-architecture; details (Evaluator role) need Decomposition |
| R1 — L5 (self-seeded) | **Scanned** | Maps to `enes/desc.md` indicators; needs SME-ground via that doc; speculative |
| R1-A1/A2/A3 (alternative frames) | **Scanned** | Open; Sensemaking will choose between discrete-levels frame and multi-axis frame |
| R2 (Loop count) | **Scanned** with one **Confirmed absent**: pure unbounded (LC-5) is appropriate only at L5+, confirmed not appropriate earlier |
| R3 (Chaining) | **Scanned** | Linear, tree, graph candidates well-mapped; state-shape sub-candidates also mapped |
| R4 (Movement directions) | **Confirmed**: full Navigation taxonomy IS the vocabulary. **Scanned** for per-level subset progression. **Confirmed absent**: depth-only is rejected by R-S2 evidence. |
| R5 (Cross-region) | **Scanned** | Six interactions surfaced; CI-5 and CI-6 are design-relevant beyond what user named |
| Worker-autonomy gradations | **Unknown** (deferred; signal G) | Adjacent to ladder design; flag for follow-up |
| Failure modes at high autonomy | **Unknown** (deferred; signal L) | Critique stage will address |
| Worker session arrangement (Option A/B) | **Unknown** (out of scope; signal K) | Adjacent inquiry; not for this ladder |

No region adjacent to "confirmed" is "unknown" — all gaps are at the periphery of the inquiry, not interior.

---

## 6. Frontier State

**Stable.** Five exploration cycles produced no new sub-regions after Cycle 3. Cycle 4 was a deliberate jump-scan in the alternative-framing direction (signal J): produced A1/A2/A3 candidates but no new region beyond R1's existing scope.

Discovery rate: declining. Cycle 1 produced 6 regions (R-S1, R-S2, R1–R5); Cycle 2 surfaced signals A–F; Cycle 3 surfaced G–O and refined candidates within regions; Cycle 4 produced no new regions, only refinements and the alternative-framing candidates.

Bounded gaps: yes. The four "Unknown" / deferred items are at the inquiry's periphery (worker-autonomy, failure-modes-at-high-autonomy, worker-session-arrangement) — adjacent inquiries, not interior to this one.

Convergence: **achieved** on all three criteria.

---

## 7. Gaps and Recommendations

### Gaps (within this inquiry)

- **G-1: Worker-autonomy gradation.** Across the L0–L5 ladder, Worker is "AI runs MVL+" the whole way. But Worker itself has finer autonomy grain (auto-detects flow type? Auto-generates seed from prior probe?). Surface in Sensemaking; defer formal spec to a follow-up.
- **G-2: Reflect → memory channel.** CI-6 names this but the inquiry's user-anchored levels don't include it. Sensemaking should decide whether memory/feedback is a 6th axis or folded into existing levels.
- **G-3: Stop-condition operational definition.** LC-4 (hybrid budget + heuristic convergence) is buildable today but the heuristic itself is undefined. The blocking dependency is `enes/what_is_meaningful_traversal.md`'s deferred operationalization.

### Gaps (adjacent inquiries flagged)

- **A-1: Worker session arrangement (Option A vs Option B).** Already surfaced by 2026-05-10 finding; outside scope here; flag for next runner-spec inquiry.
- **A-2: Self-correction at high autonomy.** What happens when L3+ Selector picks a bad direction repeatedly? Critique-level concern; address in Critique discipline.
- **A-3: MERGE protocol for multi-head.** L4+ requires explicit MERGE logic between branches. Defer to a multi-head spec inquiry.

### Recommendations to next disciplines

- **Sensemaking should decide:**
  1. Discrete-levels frame (R1 main) vs multi-axis gradient frame (R1-A1) — which is the right abstraction. The user asked for levels, but A1 may better describe the underlying structure with levels as summary points.
  2. Whether memory/Reflect channel is a 6th axis or implicit in role-graduation.
  3. Whether L5 (self-seeded) belongs in this ladder or in a separate goal-formation ladder per `enes/desc.md`.

- **Decomposition should partition:**
  1. Per-level role assignments (Worker, Navigator, Selector, Runner, Evaluator, Memory).
  2. Per-level positions on each open parameter (loop count, chaining, movement subset).
  3. Build-readiness gates per level (what evidence unlocks L_N+1 from L_N).

- **Innovation should propose:**
  1. A canonical ladder (or multi-axis spec) that resolves the discrete-vs-axis question.
  2. Default per-level choices for the three open parameters, with rationale.
  3. The "ladder progress checklist" — what observable evidence the user collects to graduate.

- **Critique should test:**
  1. The ladder's stability under role-name changes or new roles emerging (e.g., what if Memory becomes its own role at L3?).
  2. The ladder's coherence with prior findings' deferral gates (multi-head ≥3 chains, automated selector ≥10 maps).
  3. Whether the proposed L5 (self-seeded) is empirically gated on something or just a placeholder.
  4. Whether MD-1 (forward-only) is genuinely safer for L2 system Selector or whether REVISIT is actually easy enough to include.

### What was NOT explored (deliberate scope cuts)

- The exact format of `_meta_state.md` v1 (CH-S1/S2/S3 schemas) — adjacent inquiry per existing finding's COULD action.
- The Selector's policy/budget/risk-class spec at L4 — adjacent inquiry per 2026-05-10 finding §"Selector".
- Concrete code/runner architecture (Claude Code agent vs separate API session) for multi-head — adjacent inquiry per 2026-05-10 finding's roadmap note.
