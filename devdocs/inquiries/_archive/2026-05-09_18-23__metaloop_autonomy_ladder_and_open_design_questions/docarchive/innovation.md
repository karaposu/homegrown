# Innovation: Meta-loop autonomy ladder and open design questions

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-09_18-23__metaloop_autonomy_ladder_and_open_design_questions/_branch.md`

> **Question:** How should the meta-loop be designed across an autonomy ladder (L0 → L_N), with the user anchoring L0 and L1 — and what are the answers (or design options) for its three currently-unresolved parameters: (a) how many loops per session, (b) how the loops are chained, (c) which movement directions the meta-loop can take?

The user is currently operating at L0 (acting as the meta-loop themselves) and has anchored L1 ("human runs loops; navigation enhanced"). The proposal must extend through L2, L3, … with role allocations, parameter defaults, evidence gates, and failure modes.

Innovation operates within the hub-spoke decomposition (P1 hub + P2–P6 spokes + P7 frame) committed in `decomposition.md`.

---

## Seed and Direction

### Seed (Collision type, with elements of Question)

The collision: the user's L0/L1 anchors meet the prior findings' deferral gates (≥10 maps for L2; ≥3 chains for L4) and the 8-axis multi-axial frame from sensemaking. Plus three open architectural questions (O1 Memory ordering, O2 L4 Selector/Runner separation, O5 L5 goal-formation source) and two parameter heuristics (O3 L3 convergence, O4 L4 MERGE).

### Intuition direction

- **Context:** Meta-loop is the project's load-bearing architecture for cross-run cognitive steering. The user is acting as the meta-loop today and wants to know what graduates next, gated by what evidence.
- **Valuation:** What feels important — the ladder must be (a) buildable today at L1 (no fantasy), (b) well-designed at L4–L5 even if unbuildable (because design shapes what L1–L3 prepare for), and (c) honest about the multi-axial reality without sacrificing readability.
- **Motivation:** The user wants to know "where am I now?" + "what's next?" + "what data does that need?" — pragmatic ladder-positioning, not philosophical perfection.

This direction tells us which mechanism outputs to favor: those that map clearly to `where am I / what's next / what data?` over outputs that elaborate philosophical framing.

---

## Phase 2 — Generate (7 Mechanisms × 3 Variations)

### Mechanism 1 — Lens Shifting (Framer)

**Current frame:** Design a single-project sequential autonomy ladder where the system progressively takes over more execution roles.

**Variation 1.1 — Generic shift: orchestration frame.**
Re-evaluate under "multi-agent orchestration": each role is a specialized agent (Worker, Navigator, Selector, Runner, Evaluator, Memory-keeper) with its own context window. Levels become "which agents the user spawns + supervises." Consequence: L1+ is multi-agent already (Worker agent + Navigator agent); the ladder describes the SET of agents, not autonomy per se.

**Variation 1.2 — Focused shift: failure-first frame.**
Re-evaluate under "what failure does each level prevent?" L1 prevents Cold Navigation (Navigator-isolation); L2 prevents human-fatigue-driven arbitrary selection; L3 prevents non-stop runners; L4 prevents single-head bottleneck; L5 prevents seed-loss when the user is unavailable. The ladder is then defined by failure-mode countermeasures, not capabilities.

**Variation 1.3 — Contrarian shift: cost-frame.**
Re-evaluate under "each level's marginal cost vs. marginal value." L0 is cheap-to-run / expensive-in-human-time. L1 cheap-in-human / costs Navigator-spawn. L2 costs Selector calibration data (must collect ≥10 maps). L4 costs N+2 concurrent sessions. The ladder isn't about capability — it's about WHEN the marginal value of automating role X exceeds its training/calibration cost.

### Mechanism 2 — Combination (Generator)

Concepts in proximity (from project): Baldwin cycles, Reflect feedback, autonomy indicators (`enes/desc.md`), evidence gates, multi-head loops.

**Variation 2.1 — Generic: ladder × Baldwin.**
Each level's evidence gate IS itself a Baldwin cycle. L1 collects observable Navigation maps → spec change "promote system Selector" → L2 unlocks. The ladder isn't a fixed scaffold; it's a sequence of system-improving-its-own-spec moments. The combination yields: every gate is also a spec-update commit.

**Variation 2.2 — Focused: ladder × Reflect-channel.**
Reflect's per-step observations (currently feeding inquiries' open-question section) become the input to memory at L2+. Combine: each level upgrades how the system consumes reflection. L1: Reflect outputs are read by humans only. L2: Selector reads reflections to avoid past mistakes. L3: Runner reads reflections to detect own spinning. The Reflect-axis is HOW the system uses its own observations.

**Variation 2.3 — Contrarian: ladder × consciousness-gradient indicators.**
`enes/desc.md` lists 6 autonomy indicators (spontaneous attention, intrinsic valuation, real-time steering, discontinuity awareness, intrinsic curiosity, position indicator). Combine with ladder: each level operationalizes one indicator. L2 = position indicator (Selector knows where it is in the artifact graph). L3 = real-time steering (Runner stops self when spinning). L4 = discontinuity awareness (Evaluator notices branch divergence). L5 = spontaneous attention + intrinsic curiosity (Goal-formation). Combination yields: ladder = ordered acquisition of consciousness indicators.

### Mechanism 3 — Inversion (Framer)

**Current belief:** The system gradually takes over more roles from human.

**Variation 3.1 — Component-level invert: human takes over.**
Invert: "human takes over more META roles as system handles execution." L0: human does both. L1: human does meta-roles + selection. L2: human does meta-roles + judgment. L3: human is META-EVALUATOR (judges runner's quality). L5: human is META-CALIBRATOR (sets goal-formation criteria). The human role doesn't disappear; it MOVES UP to higher abstraction.

**Variation 3.2 — System-level invert: levels are bidirectional.**
Invert: "level isn't 'how much system does'; level is 'WHICH autonomy each agent has at each level.'" The system gains EXECUTION autonomy as it climbs; the human gains JUDGMENT autonomy. Both axes advance, not one. So L4 = system can run multi-head; human can judge multi-head outcomes (a judgment skill the human develops by SEEING multi-head outcomes at L3).

**Variation 3.3 — Root-level invert: ladder direction is wrong.**
Invert: "the ladder doesn't go human→system; it goes IMPLICIT→EXPLICIT." L0: implicit role-allocation (human plays many roles without naming them). L1: roles are named, navigator becomes explicit artifact (`navigation_observer.md`). L2: selection becomes explicit (selection commits as artifacts). L3: orchestration becomes explicit (`_meta_state.md` records every transition). L5: even goal-formation is explicit. The system isn't "taking over" — meaning is becoming externalized into artifacts. Anyone could run the system because everything is in files.

### Mechanism 4 — Constraint Manipulation (Framer)

**Current constraints:** 5 execution roles + 3 axes (Memory, Multi-head, Goal-formation); state-in-files; Navigator-isolation; sequential-before-parallel; gates ≥10 maps and ≥3 chains.

**Variation 4.1 — Generic: ADD constraint "every level must be reachable in ≤90 days of typical use."**
Forces gates to be aggressive. ≥10 maps in 90 days = 1 map every 9 days = manageable. ≥3 chains in 90 days = 1 chain per month = manageable. Gates above these aren't worth the wait.

**Variation 4.2 — Focused: REMOVE constraint "single user."**
What if multiple users (or multiple Claude sessions for different inquiries) feed the same `_meta_state.md`? The ladder gets a "team" axis. L_N with team-of-2 might unlock different capabilities than L_N solo (e.g., one user does selections, another does runner supervision).

**Variation 4.3 — Contrarian: ADD constraint "no human-in-the-loop above L3."**
At L3 the human supervises the runner; above L3, human only sees finished outputs (no real-time veto). This forces the design to make L4–L5 self-correcting WITHOUT human intervention. Consequence: Reflect-channel and self-modify capabilities become load-bearing at L4+, not optional.

### Mechanism 5 — Absence Recognition (Generator)

**What's missing from the ladder?**

**Variation 5.1 — Gap: Reflect-feedback level.**
There's no level that explicitly graduates "system reads own reflections and adapts." This is the difference between L3 ("Runner orchestrates") and L4 ("multi-head"). Maybe insert L3.5 or split L3 into L3a (Runner orchestrates without self-reflection) + L3b (Runner adapts via Reflect-channel).

**Variation 5.2 — Focused gap: spec-modification level.**
The ladder ends at L5 (self-seeded). But what about a level where the system MODIFIES ITS OWN SPECS based on accumulated evidence (`/MVL+ "review improvement observations and propose spec changes"` per `MVL+/SKILL.md`)? This is L6 or beyond. Per `enes/desc.md`'s consciousness-gradient framing, this is where Baldwin cycles close fully autonomously.

**Variation 5.3 — Redesign-from-scratch absence: visibility before autonomy.**
If we redesigned today, an "L0.5" level would exist: "human still does everything but with explicit role-allocation tracking" — i.e., the user explicitly logs which role they're playing at each step (`I'm currently the Selector; here's why I picked this direction`). This adds visibility WITHOUT adding system autonomy. It would be a precursor to L2 because it generates the calibration data (≥10 maps WITH selection rationale) that L2 needs. Without L0.5, the ≥10 maps gate has weaker data — selections without rationale are less useful for training a system Selector.

### Mechanism 6 — Domain Transfer (Generator)

**Variation 6.1 — Generic transfer: SAE J3016 driving automation levels (L0–L5).**
J3016 levels: L0 no automation; L1 driver-assist (one task automated); L2 partial automation (multiple tasks but driver supervises); L3 conditional automation (system handles dynamic driving in defined operational design domain — driver intervenes when prompted); L4 high automation (system handles in domain, no driver intervention required); L5 full automation (anywhere). Transfer to meta-loop: each level should specify its **operational design domain** (under what conditions does the system run safely without human override). At L2: "system Selector operates only on inquiries with established maps; falls back to human for novel territory." At L4: "multi-head operates only when MERGE protocol can resolve cross-head conflicts."

**Variation 6.2 — Focused transfer: NIST CSF tiers.**
NIST CSF (Cybersecurity Framework) has 4 tiers (Partial, Risk-Informed, Repeatable, Adaptive) gated by demonstrated practices, not theoretical capabilities. Transfer: meta-loop levels gated by demonstrated artifacts — exactly what the project already does (≥10 maps, ≥3 chains). Confirms current gate design.

**Variation 6.3 — Contrarian transfer: biological developmental arrest.**
Some organisms (axolotls, neoteny species) deliberately don't progress through all stages; they reach a stable intermediate and stay there because higher stages aren't adaptive for their niche. Transfer: some projects should DELIBERATELY arrest at L2 or L3 because L4+ adds complexity without payoff for their problem class. The ladder shouldn't be a forcing function — it should support graceful arrest.

### Mechanism 7 — Extrapolation (Generator)

**Trend:** each level produces evidence that gates the next; the project's autonomy increases over time as evidence accumulates.

**Variation 7.1 — Generic 1-year extrapolation.**
6 months: user collects 10 navigation maps + selection-with-rationale → L2 ships (system Selector with manual override). 12 months: user has ≥3 sequential chains across multiple inquiries → L3 readiness; design L4 architecture in parallel.

**Variation 7.2 — Focused 5-year extrapolation.**
By year 5: meaningful-traversal substrate operationalized (`enes/what_is_meaningful_traversal.md` lands); L3 hybrid stop becomes pure convergence-gated. L4 multi-head deployed. L5 begins design with actual data on goal-formation drift. The ladder reaches "L4 routine, L5 frontier."

**Variation 7.3 — Contrarian: discontinuity.**
What if at L3 a NEW role emerges (e.g., "Curator" — system selecting which past artifacts to carry forward; or "Self-modifier" — system editing its own specs)? Original 8-axis frame becomes 9 or 10 axes. The ladder must revise. Extrapolation reveals: the ladder is correct at design time but EXPECT a major revision after L3 ships, when un-anticipated roles surface.

---

## Phase 3 — Test

### Test cycle per output

I test each variation against the 5 criteria (Novelty, Scrutiny survival, Fertility, Actionability, Mechanism independence). Outputs that pass become candidates for the assembly. Failed outputs become new seeds noted at the end.

| Output | Novelty | Scrutiny survival | Fertility | Actionability | Mechanism indep. | Disposition |
|---|---|---|---|---|---|---|
| 1.1 (orchestration frame) | ✓ | ✓ | ✓ — reframes "session count" as "agent count" | ✓ — maps to runner-spec design | ✓ — confirmed by 6.1 (J3016's "operational design domain" maps to "agent operating range") | **ACTIONABLE** — fold into P1's framing |
| 1.2 (failure-first frame) | partial — fails Novelty (P6 already covers this) | n/a | n/a | n/a | n/a | **DEFERRED — failure-mode framing already in P6** |
| 1.3 (cost frame) | ✓ | ✓ | ✓ — opens "when is L_N worth its cost" | ✓ — adds rationale to gate criteria | ✓ — overlaps 6.3 (graceful arrest) | **ACTIONABLE** — fold into P5/P7 (gate justification + arrest framing) |
| 2.1 (ladder × Baldwin) | ✓ | ✓ | ✓ — explains why gates aren't arbitrary | ✓ — frames each gate as spec-update opportunity | ✓ — overlaps 5.2 (spec-modification level), 7.2 (5-year extrapolation) | **ACTIONABLE** — fold into P5/P7 (gate semantics) |
| 2.2 (ladder × Reflect) | ✓ | ✓ | ✓ — surfaces a real gap (Reflect-axis) | ✓ — concrete change to ladder | ✓ — overlaps 5.1 (Reflect-feedback level) | **ACTIONABLE** — modifies P1 (add 9th axis: Reflect-feedback) |
| 2.3 (ladder × consciousness indicators) | ✓ | partial — speculative; only soft survival | ✓ — interesting | partial — actionable for L5 only | ✓ — overlaps 5.2, 7.2 | **DEFERRED with revival trigger** — revive when `enes/desc.md` framing operationalizes; for now mention at L5 only |
| 3.1 (human takes over meta-roles) | ✓ | ✓ | ✓ — clarifies what human DOES at higher levels | ✓ — names human's evolving role | partial — only inversion produced this | **ACTIONABLE** — fold into P1 description (human's role per level) |
| 3.2 (bidirectional levels) | ✓ | ✓ | ✓ — corrects "system gradually takes over" oversimplification | ✓ — reframes ladder | ✓ — overlaps 3.1 (human takes over meta-roles) | **ACTIONABLE** — fold into P7 framing |
| 3.3 (implicit→explicit) | ✓ | ✓ — strong (artifacts ARE the project's principle) | ✓ — alternative narrative | partial — narrative not actionable | ✓ — overlaps "state-in-files" principle | **DEFERRED — alternative narrative; mention in P7** |
| 4.1 (90-day reachability constraint) | partial — pragmatic but not novel | ✓ | partial | ✓ | partial | **DEFERRED with revival trigger** — revive if gates feel too aggressive/loose after first L1 chains |
| 4.2 (multi-user) | ✓ | partial — out of scope (user is solo) | partial — interesting but doesn't fit project | partial | partial | **RESEARCH FRONTIER** — flag in finding's frontiers |
| 4.3 (no human above L3) | ✓ | ✓ — strong (it forces design clarity) | ✓ — surfaces self-correction need | ✓ — actionable design constraint | ✓ — overlaps 5.1 (Reflect-feedback level) and 5.2 (spec-modification) | **ACTIONABLE** — fold into P1 (defines what L4+ MUST self-correct) |
| 5.1 (Reflect-feedback level) | ✓ | ✓ | ✓ — fills a real gap | ✓ — concrete: add Reflect-axis | ✓ — overlaps 2.2, 4.3 | **ACTIONABLE** — strong support; commit to 9th axis or fold into Memory axis |
| 5.2 (spec-modification level / L6) | ✓ | ✓ | ✓ — natural extension | partial — beyond stated scope (L0–L5) | ✓ — overlaps 2.1, 2.3, 7.2 | **DEFERRED with revival trigger** — flag in finding's frontiers; mention as "post-L5 frontier" |
| 5.3 (L0.5 visibility-only) | ✓ | ✓ — strong: ≥10 maps with rationale > ≥10 maps without | ✓ — improves the L2 gate's data quality | ✓ — concrete: insert L0.5 or specify selection-rationale requirement at L1 | partial — only Absence produced it | **ACTIONABLE** — fold into P5 (specify "with selection-rationale" in L1→L2 gate) |
| 6.1 (J3016 operational design domain) | ✓ | ✓ — strong | ✓ — adds per-level "operating range" specification | ✓ — concrete addition to each level | ✓ — overlaps 1.1 (orchestration), 4.3 (no human above L3) | **ACTIONABLE** — fold into P1 (each level gets an operational design domain) |
| 6.2 (NIST CSF tiers) | partial — confirms existing | n/a | n/a | n/a | n/a | **DEFERRED — confirmation only** |
| 6.3 (graceful arrest / neoteny) | ✓ | ✓ | ✓ — real possibility | ✓ — concrete: ladder allows arrest | ✓ — overlaps 1.3 (cost frame) | **ACTIONABLE** — fold into P7 (graceful arrest is a valid choice) |
| 7.1 (1-year extrapolation) | partial | ✓ | partial — calendars | ✓ — buildability roadmap | partial | **DEFERRED — calendar-only** |
| 7.2 (5-year extrapolation) | partial | ✓ | partial — speculative | partial | partial | **DEFERRED — long-horizon speculation** |
| 7.3 (discontinuity / new roles emerge) | ✓ | ✓ — strong (multi-axial frame already accommodates) | ✓ — primes for revision | ✓ — concrete: P7 should mention | ✓ — overlaps 5.2 (spec-modification) | **ACTIONABLE** — fold into P7 (expect axis-set revision after L3 ships) |

### Summary of dispositions

- **ACTIONABLE (10):** 1.1, 1.3, 2.1, 2.2, 3.1, 3.2, 4.3, 5.1, 5.3, 6.1, 6.3, 7.3 — wait, that's 12. Let me recount.

Counting ACTIONABLE: 1.1, 1.3, 2.1, 2.2, 3.1, 3.2, 4.3, 5.1, 5.3, 6.1, 6.3, 7.3 = **12 actionable**. (12, not 10.)

- **DEFERRED with revival trigger (3):** 2.3, 4.1, 5.2.
- **DEFERRED (informational only) (4):** 1.2, 3.3, 6.2, 7.1, 7.2 = 5.

Wait: 12 + 3 + 5 = 20. But I have 21 total (7 mechanisms × 3 variations). Let me recheck — 4.2 is RESEARCH FRONTIER. So: 12 ACTIONABLE + 3 DEFERRED-revival + 5 DEFERRED-informational + 1 RESEARCH FRONTIER = 21. ✓

---

## Assembly Check

### Axis coverage check

The candidate space's orthogonal axes:

| Axis | Variant in candidates | Source variations |
|---|---|---|
| Role-axis (which role advances at L_N) | YES — Worker / Navigator / Selector / Runner / Evaluator covered | P1's hub commits |
| Memory / Reflect axis | YES — covered by 2.2, 5.1 | New 9th axis surfaced |
| Multi-head presence | YES — L4 anchored by 1.1, 7.3 | confirmed |
| Gate strictness (loose/strict) | YES — 4.1 (90-day reachability), 5.3 (with-rationale) | covered |
| Movement-vocabulary subset | YES — handled in P4 | covered |
| Loop-count semantics | YES — handled in P2 | covered |
| Cost / arrest dimension | YES — 1.3, 6.3 | new dimension surfaced |
| Operating-domain dimension | YES — 6.1 | new dimension surfaced |
| Self-correction / Reflect-channel dimension | YES — 4.3, 5.1, 2.2 | new dimension surfaced |
| Goal-formation source | YES — addressed in P1 commits below | covered |

All axes have variants. Three new dimensions surfaced through innovation (cost/arrest, operating-domain, self-correction) — these strengthen the ladder beyond what sensemaking alone produced.

### Convergence signal

3+ mechanisms converge on:

- **Reflect-feedback as a load-bearing axis** (2.2, 5.1, 4.3 — Combination, Absence, Constraint Manipulation). HIGH confidence — promote to 9th axis OR fold into existing Memory axis with explicit Reflect-channel sub-axis.
- **Cost/arrest as a real dimension** (1.3, 6.3 — Lens Shifting, Domain Transfer). HIGH confidence — note in P7 as "graceful arrest is valid."
- **Operating design domain per level** (1.1, 6.1, 4.3 — Lens Shifting, Domain Transfer, Constraint Manipulation). HIGH confidence — add to P1.
- **Bidirectional human-skill / system-execution progression** (3.1, 3.2 — Inversion). MODERATE confidence — fold into P7 narrative.
- **Selection-rationale as L2-gate data requirement** (5.3 alone). LOW confidence (single-mechanism) — but high actionability and structural fit, so include with revival trigger.

---

## Final Commitments per Decomposition Piece

The innovation results above resolve the open decisions O1–O5 and produce committed values for P1–P7. Below is the consolidated proposal.

### P1 — Role-Allocation Table (HUB)

The 8-axis frame from sensemaking is **extended to 9 axes** based on the convergence signal: **Reflect-channel** is added as a separate axis. This reflects what the system does with its own reflection observations — independent of memory and of execution roles.

Plus: each level is annotated with its **Operational Design Domain (ODD)** (per Variation 6.1) — the conditions under which that level runs safely.

**Commitments:**
- **O1 (Memory axis advancement):** Memory advances **alongside the role being graduated** at each level (e.g., Memory becomes system-managed at L2 because Selector needs outcome-memory). Memory never advances ahead of the role that consumes it.
- **O2 (Selector/Runner separation at L4):** Selector becomes system at L2; Runner becomes system at L3. At L4, Selector and Runner are **distinct system roles** (Selector chooses moves; Runner executes). Per 2026-05-10 finding's "N+3 at L4" reading.
- **O5 (L5 goal-formation source):** Goal-formation at L5 = **cumulative-feedback driven** (system reads its own Reflect-channel + outcome history; selects next seed via meaningful-traversal substrate's "where is the most fertile unexplored territory" heuristic). NOT user-set-priors (would block L5 from being meaningfully autonomous) and NOT pure system-curiosity (would drift). The cumulative-feedback path is the most defensible per the prior findings' deferral framework.

**The 9-axis role-allocation table:**

| Level | Worker | Navigator | Selector | Runner | Evaluator | Memory | Reflect-channel | Multi-head | Goal-formation | Operational Design Domain (ODD) |
|---|---|---|---|---|---|---|---|---|---|---|
| **L0** | system (AI runs MVL+) | human | human | human | n/a (single-head) | human (mental) | human reads/uses | n/a | human seeds | Any inquiry; small graphs; user holds full context |
| **L1** | system | system (isolated, manual invoke) | human | human | n/a | human + artifact (`navigation_observer.md`) | human reads | n/a | human seeds | Inquiries where Navigator-warming context fits in one fresh session |
| **L2** | system | system (auto-discover source, isolated) | system (with override) | human | n/a | system writes `navigation_memory.md`; human still curates | system reads Reflect for selection | n/a | human seeds | Inquiries within the project's established artifact terrain (Selector calibrated on ≥10 maps) |
| **L3** | system | system (persistent, isolated) | system | system | n/a | system manages `_meta_state.md` | system uses Reflect for self-stop | n/a | human seeds | Sequential chains within familiar inquiry classes; human still seeds + supervises |
| **L4** | system (N parallel) | system (graph-native, persistent, isolated) | system (with cross-head logic) | system (with multi-head dispatch) | system (cross-head comparison) | system (graph-state) | system writes self-corrections back to Reflect channel | system | human seeds | Inquiries with sufficient prior chains for MERGE; human seeds and final approval |
| **L5** | system | system | system | system | system | system | system (closed loop: own Reflect → own behavior change) | system | system (cumulative-feedback driven) | Boundary level → handed off to consciousness-gradient framing in `enes/desc.md` |

### P2 — Loop count default per level

Resolves O3 (L3 placeholder convergence heuristic) by committing observable signals.

| Level | Loop-count default | Rationale |
|---|---|---|
| L0 | Human-decided per session | Human is Runner |
| L1 | Human-decided | Human is Runner |
| L2 | **Fixed budget N** (default N=5 per session, user-overridable) | System Selector operates within budget; human still Runner can stop early |
| L3 | **Hybrid: budget N (default 7) + heuristic early-stop** | Heuristic = `stop if last 3 Navigation maps produce zero new direction-types AND Reflect-channel has no unaddressed observations` (committed placeholder for O3) |
| L4 | **Per-head budget M (default 3) + cross-head budget K (default 12 total probes)** | Multi-head; each head limited; total session bounded |
| L5 | **Convergence-gated** (after meaningful-traversal substrate operationalized) | Pure convergence; goal-formation system selects when to stop based on traversal substrate |

### P3 — Chaining default per level

Resolves O4 (L4 MERGE protocol shape) by committing structure.

| Level | Chaining topology | `_meta_state.md` schema |
|---|---|---|
| L0 | Linear | Human-mental |
| L1 | Linear | Visited-path list |
| L2 | Linear | Visited-path list + selection rationales |
| L3 | Linear with light revisit | Visited-path list + revisit edges |
| L4 | **Tree (parallel branches) with explicit MERGE protocol** | Branch graph + MERGE records |
| L5 | **Graph (full DAG with revisit/merge)** | Inquiry-topology graph |

**O4 — L4 MERGE protocol shape (committed):**
1. **Trigger:** all parallel head workers complete + write findings.
2. **Read:** Evaluator reads all N findings + the original seed `_branch.md`.
3. **Compute:** Evaluator produces a `merge_observer.md` with:
   - Per-head verdict (productive / repeating / spinning).
   - Cross-head deltas (where heads agree; where they diverge).
   - Recommended action: PROMOTE (one head's finding becomes main line), MERGE (synthesize across heads), CONTINUE (parallel heads have more to explore), STOP (terminate session).
4. **Write:** Selector reads `merge_observer.md` + commits the next move.
5. **Race-condition rule:** Evaluator only reads after all heads close their finding files (file-lock proxy: presence of `finding.md` per head folder; runner waits before invoking Evaluator).

### P4 — Movement-direction subset per level

Universal vocabulary = Navigation's full 16-type taxonomy at every level. Per-level restriction applies only to system-Selector reliability.

| Level | System-Selector subset (when applicable) |
|---|---|
| L0 | n/a (human selects from full taxonomy) |
| L1 | n/a (human selects from full taxonomy) |
| L2 | **Forward-only:** DEEPEN, REFINE, DEVELOP, INVESTIGATE FRONTIER, PURSUE SEED. (REVISIT requires Memory which is not yet system-managed beyond `navigation_memory.md`.) |
| L3 | **Forward + light revisit:** L2 set + REVISIT (Memory now system-manages `_meta_state.md` so REVISIT is reliable) |
| L4 | **Forward + revisit + process-directed + MERGE:** L3 set + RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE, MERGE |
| L5 | **Full taxonomy** including CONSOLIDATE, UNBLOCK, TEST |

### P5 — Evidence gates + build-readiness phase per level

Resolves L2→L3 and L4→L5 gates (previously unspecified) and commits selection-rationale requirement (Variation 5.3).

| Transition | Evidence gate | Build-readiness phase (assuming gate met) |
|---|---|---|
| L0 → L1 | None — L1 is buildable today (V1 sequential per `meta_loop.md` §6) | L1 = **NOW** |
| L1 → L2 | **≥10 Navigation maps from completed inquiries, each with explicit user selection-rationale** (per Variation 5.3 commitment) | L2 = SOON (months out for this project) |
| L2 → L3 | **≥5 sequential chains where system Selector's choices ≥80% match what human would have chosen** (committed; previously unspecified) AND meaningful-traversal heuristic placeholder shown to fire correctly in ≥3 cases | L3 = MID (after L2 stable) |
| L3 → L4 | **≥3 useful sequential chains** (per existing finding) AND L4 MERGE protocol scaffold built | L4 = LATE (multi-head phase) |
| L4 → L5 | **Meaningful-traversal substrate operationalized** (`enes/what_is_meaningful_traversal.md` lands) AND ≥10 multi-head sessions with stable Evaluator outputs | L5 = BOUNDARY (frontier; bridges to `desc.md`) |

### P6 — Dominant failure mode per level

Each level's mitigation traces to its design choices in P1–P5.

| Level | Dominant failure | Mitigation (traced) |
|---|---|---|
| L0 | Human fatigue / arbitrary selection / no consistency across runs | Move to L1 (externalize Navigator); track selections (P5 L0→L1) |
| L1 | Cold Navigation; manual-invoke friction; navigator-warming gaps | Mandatory warming protocol (P1 ODD); Navigator-isolation (P1) |
| L2 | Low-value automated Selector picks; spiraling | Human override (P1 "system with override"); selection-rationale recorded (P5); ODD restricts to familiar territory (P1 ODD) |
| L3 | Spinning runner / non-stopping | Hybrid budget + heuristic early-stop (P2 L3); Reflect-channel for self-stop (P1) |
| L4 | Branch-explosion; cross-head race; MERGE failures | Per-head budget (P2 L4); MERGE protocol with file-lock (P3 L4); Evaluator role (P1) |
| L5 | Goal-formation drift (system picks seeds away from value) | Cumulative-feedback driven (O5 commitment); meaningful-traversal substrate gates stop (P2 L5); user retains seed-veto via boundary handoff (P1 ODD) |

### P7 — Multi-axial honesty footnote

The discrete L0–L5 ladder is a **summary path through a 9-axis multi-axial gradient**. The 9 axes are independent in principle: Worker, Navigator, Selector, Runner, Evaluator, Memory, Reflect-channel, Multi-head, Goal-formation. The canonical path graduates them in this order: Worker (already system at L0) → Navigator (L1) → Selector + Memory (L2) → Runner + Reflect-channel-self-use (L3) → Multi-head + Evaluator (L4) → Goal-formation (L5).

**Alternative paths exist.** Examples:
- A project where Worker autonomy needs improvement (e.g., MVL+ produces unreliable findings) might prioritize Worker-axis refinement before Navigator graduation.
- A project working in well-mapped territory might skip L2 (no need for system Selector) and graduate Memory + Multi-head directly.
- A project might **gracefully arrest at L2 or L3** because L4+ adds multi-head complexity without payoff for its problem class (per Variation 6.3). Graceful arrest is a valid design choice, not a failure.

**Divergence-detection rule.** A project's actual path diverges from the canonical ladder when any of:
- An axis advances "out of order" relative to the canonical path (e.g., Goal-formation advances before Runner because the user wants seed-curiosity exploration without trusting the runner).
- A new axis emerges that's not in the 9-axis frame (e.g., per Variation 7.3, a "Curator" or "Self-modifier" role surfaces during L3 deployment).
- An evidence gate is unmet but the user wants to graduate anyway (the canonical gates are honest constraints; overriding them is a deliberate choice with known risk).

When divergence is detected, the user reframes their position as a **point in the 9-axis space** rather than a "level." The level numbering remains useful for project communication; the multi-axial frame remains the underlying truth.

**Bidirectional progression.** As the system gains execution autonomy (Worker → Goal-formation), the human gains judgment autonomy (selection → meta-evaluation → meta-calibration). Per Variation 3.1: at L3 the human is META-EVALUATOR (judges runner's quality); at L5 the human is META-CALIBRATOR (sets goal-formation criteria via Reflect-channel feedback). The ladder isn't human-disappearing; it's human-role-elevating.

**Cost / arrest framing.** Per Variation 1.3: each level has a marginal cost (calibration data, integration work, complexity). Levels should be reached when the marginal value exceeds the marginal cost — which is project-specific. Arresting at L2 or L3 because L4+ doesn't pay off is not regression; it's right-sizing.

**Bridge to `enes/desc.md`.** L5 is the boundary level. The 6 autonomy indicators in `desc.md` (spontaneous attention, intrinsic valuation, real-time steering, discontinuity awareness, intrinsic curiosity, position indicator) map onto the meta-loop ladder as Variation 2.3 sketches: position indicator = L2's Selector-with-context; real-time steering = L3's Reflect-channel-self-use; discontinuity awareness = L4's Evaluator; spontaneous attention + intrinsic curiosity = L5's Goal-formation. Cross-reference `desc.md`'s framing for any work past L5.

---

## Mechanism Coverage Telemetry

- **Generators applied:** 4 / 4 (Combination, Absence Recognition, Domain Transfer, Extrapolation) ✓
- **Framers applied:** 3 / 3 (Lens Shifting, Constraint Manipulation, Inversion) ✓
- **Variations per mechanism:** 3 (generic, focused, contrarian) — 21 total outputs
- **Convergence:** YES — 3+ mechanisms converge on Reflect-channel as load-bearing axis (Combination 2.2 + Absence 5.1 + Constraint Manipulation 4.3); 3+ mechanisms converge on Operational Design Domain framing (Lens Shifting 1.1 + Domain Transfer 6.1 + Constraint Manipulation 4.3); 2 mechanisms converge on cost/arrest framing (Lens Shifting 1.3 + Domain Transfer 6.3)
- **Survivors tested:** 21 / 21 (every variation passed through 5-test cycle)
- **Disposition counts:** 12 ACTIONABLE, 3 DEFERRED-with-revival, 5 DEFERRED-informational, 1 RESEARCH FRONTIER
- **Failure modes observed:** None — ✓
  - Premature evaluation: avoided (all 21 generated before any tested)
  - Single-mechanism trap: avoided (all 7 mechanisms applied)
  - Early frame lock: avoided (3+ convergent signals validated)
  - Innovation without grounding: avoided (every output tested)
  - Mechanism exhaustion: avoided (12 ACTIONABLE survivors)
  - Survival bias: checked — Variation 4.3 ("no human above L3") is uncomfortable but survived; Variation 5.3 ("L0.5 visibility-only") is single-mechanism but high-actionability and survived
- **Axis coverage:** 10 axes identified; all have variants; 3 new dimensions (cost/arrest, ODD, self-correction) surfaced through innovation

**Overall: PROCEED.** Sufficient coverage + multi-mechanism convergence + tested survivors + 3 new dimensions added. Innovation has produced a complete commitment for all 7 decomposition pieces. Hand off to Critique.

---

## New seeds for future inquiries (failed-output residue)

- **L6 / spec-modification level** (from 5.2): when the system modifies its own discipline specs based on accumulated evidence. Seed for a future inquiry on "self-modifying meta-loop" once L5 stabilizes.
- **Multi-user team meta-loop** (from 4.2): when multiple users (or sessions) feed shared `_meta_state.md`. Seed for "collaborative meta-loop architecture" — currently out of scope.
- **Discontinuity / new-role emergence** (from 7.3): expect axis-set revision after L3 ships. Seed for a future inquiry to inventory un-anticipated roles.
