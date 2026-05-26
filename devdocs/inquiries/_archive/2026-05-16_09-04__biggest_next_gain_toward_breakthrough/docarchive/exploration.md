# Exploration — Biggest Next Gain Toward Breakthrough

## Territory Overview

**Territory.** All buildable next-moves the project could prioritize toward its next qualitative breakthrough (where "breakthrough" = capability/autonomy shift of the magnitude of past project breakthroughs: the autonomy-ladder elaboration, the typed-primitive-substrate audit, the project-identity reframe). Source materials surveyed:

- `README2.md` — Family II/III/IV milestone road map (the project's own stated ordering).
- `docs/desc.md` — the autonomous-consciousness north star and the historical inquiry chain that produced past breakthroughs.
- `docs/possible_breakthroughs/1.md` and `2.md` — two user-articulated breakthrough hypotheses (Stage-2 dynamic loop; discipline-ordering refinement) that are NOT in the README2.md road map.
- `cognitive_harness/next_question_to_ask.md` — the user's own note-to-self: *"what is next load bearing development for our endgoal that once established my job as developer will be relaxed and easier"* — reframes "breakthrough" through the lens of *shrinking the human's burden in the loop*.
- Recent inquiry findings (May 15–16): `project_identity_and_milestone_ordering`, `self_improvement_rate_measurable_questions`, `structural_check_tool_remove_or_keep`, `safety_substrate_measurement_aware_design`, `sensemaking_spec_capability_comparison` (just-finished), `preventing_replacement_design_context_blur` (in progress).
- Project's current calibration state: Level 0 reality; human is the meta-loop; 11 disciplines + 9 protocols + 1 contract shipped; `archived_skills/<sha>-hg/` snapshot mechanism operational; `tools/structural_check.sh` REMOVED per a finding from earlier today.

**Mode.** Possibility — candidates are latent project moves, not pre-existing artifacts.

**Entry-point.** Signal-first — milestone families and user-articulated breakthroughs give explicit signal about candidate clusters. Avoids a blind broad scan.

**Resolution.** D3 (functional one-line + structural adjacency: dependencies, what each unlocks, current state).

**Boundary-discovery sub-phase.** Fired implicitly because the branch frame names "milestone families" but does not restrict to them. The boundary surfaced: any buildable initiative the project could undertake without external dependencies, plus pure-conceptual reframes the project's own inquiry chain has historically produced.

**Surround-layer.** The user's recent inquiry concentration (today: 6 inquiries on safety substrate, self-improvement-rate measurement, Primitive RC tool, design discipline) was included in the first scan as a relevance-signal source — what the user is *currently working on* anchors what "high-leverage right now" actually means.

**Completeness-before-novelty** (possibility-mode rule): the obvious / standard candidates (Family II/III items from README2.md, the recent-finding deferrals) are scanned first; the novel candidates (Stage-2 dynamic loop, discipline-ordering refinement) come after.

---

## Inventory

The territory has six identifiable regions plus a residual region for moves that don't fit cleanly. Candidates within each region are surfaced with their function (D2 minimum: functional one-line), their dependencies/unlocks (D3: structural adjacency), and current state.

### R1 — Infrastructure / Safety Substrate

| Item | What it is | Current state | What it unlocks | Effort scale |
|---|---|---|---|---|
| **R1a — Automated regression check (canary runs)** | A saved-good input/output pair per discipline, re-run on each spec change, with output-drift comparison | Not built. `archived_skills/<sha>-hg/` snapshot exists (input side) but no comparison logic, no per-discipline canary fixtures | All Family II/III moves that touch discipline specs (spec promotion, /intuit ship, materialization wiring). The Baldwin cycle's "net of regression" component (per `self_improvement_rate_measurable_questions` finding). | Medium |
| **R1b — Primitive RC** (formal Family II item per README2.md) | Mechanical structural-check on discipline outputs (sections present, required-fields populated, etc.) | `tools/structural_check.sh` REMOVED per `structural_check_tool_remove_or_keep` finding (2026-05-16). Slot OPEN with a recommended adversarial-test trigger to re-decide. | Per-output drift detection at write-time. README2.md still lists this as Family II — road map is stale on this item. | Decision pending, then small build |
| **R1c — Outcome-tracking artifacts** (base of Retrospective RC) | A persistent record of what each shipped finding's downstream effect was (helped / hurt / no-op) | Not built. Findings stand alone today; no outcome ledger. | The Retrospective RC layer the Baldwin cycle's T2+ confirmation needs. Required before /intuit calibration can close the loop. | Medium |

### R2 — Discipline Architecture (current /MVL+ loop)

| Item | What it is | Current state | What it unlocks | Effort scale |
|---|---|---|---|---|
| **R2a — Wire materialization protocol as default post-/MVL+** (Family II item) | After CONCLUDE writes finding.md, automatically invoke the artifact_materialization protocol's 8-phase lifecycle (task description → impl plan → dynamic critic → plan repair → impl → validation → trace → retrospective) | Protocol exists at `cognitive_harness/protocols/artifact_materialization.md`. Not wired into /MVL+ runner. Manual invocation only. | Closes the "decide → change" loop. Today findings prescribe changes; materialization actually executes them with traceability. | Medium |
| **R2b — Discipline-ordering refinement** (user's possible_breakthroughs/2.md) | Restructure /MVL+ pipeline: either insert /comprehend between /explore and /sense-making (E → Compr → S → D → I → C), OR move /decompose before /sense-making (E → D → S → I → C), OR strip /explore of overreach into sensemaking territory | Purely a design question. Not yet formalized as an inquiry. | Better-fitting discipline coupling. Reduces the friction patterns observed in `loop_diagnose__three_explore_sources_faults` (explore overreaching). | Medium-Large (requires design inquiry + spec edits + test runs) |
| **R2c — Stage-2 dynamic loop** (user's possible_breakthroughs/1.md) | After a standard /MVL+ pass, a *meta-decision discipline* at end of loop decides whether/how to run a stage-2 — e.g., "5 innovation chains" or "3 explorations" — based on what stage 1 revealed. Loop programmatically generates its own next structure | User-articulated, named as a breakthrough. Not yet specified or built. | Per-question loop adaptability. Different shape than /meta-loop (which is cross-inquiry); this is intra-inquiry. | Large |

### R3 — Predictive RC layer (/intuit)

| Item | What it is | Current state | What it unlocks | Effort scale |
|---|---|---|---|---|
| **R3a — Ship /intuit Phase A** | The Predictive RC: a discipline that produces real-time hunches at T0 grounded in CBR (Retrieve → Reuse → Revise) + SME (Alignment → Projection). Phase A = convergent mode, source-first, 8 primitive cards, corpus-audit admission gate | Specced at `docs/intuit.md` and `docs/thinking_space_dynamics.md`. NOT shipped as a slash command. Named load-bearing for the Baldwin cycle in `docs/desc.md`. | The substrate the Baldwin cycle's T0 prediction layer needs. Without it, the loop cannot close even when Retrospective RC arrives. | Large |
| **R3b — Ship /intuit Phase B (divergent + adversarial)** | The structural-analogy ("angle is the same across unrelated surface domains") capability | Phase A precondition; not buildable until A is shipped + calibrated | The signature capability of /intuit: cross-domain structural transfer | Large |

### R4 — Autonomy-Ladder Advancement

| Item | What it is | Current state | What it unlocks | Effort scale |
|---|---|---|---|---|
| **R4a — Navigator L1** (formal Family II item per README2.md and `docs/autonomy_ladder.md`) | After each /MVL+ run, an isolated Navigator subagent reads the completed inquiry's `finding.md` + warming context and writes a `navigation_observer.md` enumerating typed next directions. Human stays Selector and Runner. | Spec exists at `cognitive_harness/navigation/SKILL.md`. Warming files exist at `cognitive_harness/navigation/warmup/`. NOT wired to auto-invoke after /MVL+ finishes. | First transition off Level 0. Builds the calibration data (≥10 maps with explicit selection-rationale) the L1→L2 gate requires. | Small-Medium (procedure-first version: just invoke after /MVL+; the harder version automates it) |
| **R4b — Codify the workshop pattern as spec-evolution protocol** (deferred from just-finished `sensemaking_spec_capability_comparison`) | Formalize how spec files evolve through workshop → live → archive lifecycle, with explicit promotion gates | Deferred with explicit revival trigger: "when a second discipline acquires a workshop variant OR when the user explicitly initiates the inquiry." | A predictable pattern for future spec evolution. Five mechanisms converged on this in the prior Innovation step. | Medium |

### R5 — Calibration / Practice

| Item | What it is | Current state | What it unlocks | Effort scale |
|---|---|---|---|---|
| **R5a — Continue accumulating inquiry corpus** | Run more /MVL+ inquiries on real questions. Each adds data points to the corpus that /intuit's calibration will eventually consume. | Active. The May 15–16 burst added ~6 inquiries; total corpus is now ~30 findings. | The calibration maturity gate (N ≥ 30 per discipline) for /intuit Phase D's seed-generation. Foundation-feeding work that isn't glamorous but is irreplaceable. | Ongoing |
| **R5b — Per-discipline practice runs** | Deliberately invoke each discipline on diverse inputs to surface its failure modes and refine its spec | Implicit in normal use; not deliberately structured. | Earlier detection of discipline-spec bugs. Could feed material to R6c (cross-discipline interop) and R7 (meta-governance). | Small-Medium |

### R6 — Conceptual Reframes (the historical breakthrough pattern)

| Item | What it is | Current state | What it unlocks | Effort scale |
|---|---|---|---|---|
| **R6a — Operationalize the meaningful-traversal substrate** | `docs/what_is_meaningful_traversal.md` names five candidate signal flavors (coverage, convergence, productivity, directedness, depth); operational definition deferred | Conceptually mapped, not operationalized. README2.md names this as the L5 boundary gate. | The early-stop heuristic the L3 meta-loop needs. Replaces the placeholder heuristic currently shipped. | Medium-Large (inquiry first, then build) |
| **R6b — Value-persistence-under-self-modification** | Named in `docs/desc.md` as an open problem: at L4+, the system modifies its own specs including value-encoding parts; how do bootstrap-encoded human values persist? | Open research problem. No path. | The L4+ autonomy precondition. Mainstream AI safety hasn't solved this either. | Research-frontier (unbounded) |
| **R6c — Discipline-ordering / discipline-set refinement** | A conceptual reframe on what disciplines should exist and in what order (encompasses R2b, plus possible deletion or merge of disciplines) | User has surfaced via `possible_breakthroughs/2.md`. Open. | Better-fitting cognitive operations; potentially shorter loops. | Medium (inquiry first) |

### R7 — Meta-Governance

| Item | What it is | Current state | What it unlocks | Effort scale |
|---|---|---|---|---|
| **R7a — Spec-evolution protocol** (overlaps R4b) | A protocol governing how specs in `cognitive_harness/` are proposed, workshopped, promoted, archived | Workshop pattern just demonstrated on `sensemaking_problem.md → sensemaking.md`. Codification deferred. | Predictable spec evolution across the 11 disciplines + 9 protocols. Lays groundwork for L4+ self-modification governance. | Medium |
| **R7b — Cross-discipline contract** beyond `alignment_control` | A second shared-vocabulary contract for cross-discipline state (e.g., what "load-bearing concept" means; what "frontier" means; common saturation indicators) | One contract exists (`cognitive_harness/contracts/alignment_control.md`). No second contract. | Reduces conceptual drift across disciplines. Possibly captures patterns surfaced by R5a/R5b. | Medium |

### Residual / Hybrid moves

| Item | What it is | Current state | Notes |
|---|---|---|---|
| **Z1 — Hybrid R3a + R4a:** ship /intuit Phase A *and* wire Navigator L1 in the same iteration | Compound move | If /intuit ships, Navigator L1 can call it; the two amplify each other | Larger but possibly higher-leverage than either alone |
| **Z2 — Hybrid R1a + R4a:** build canary regression + wire Navigator L1 | Compound move | Canary detects discipline drift; Navigator orchestrates downstream work after each /MVL+ — together they make the L1 → L2 transition safer | Medium |
| **Z3 — Run /MVL+ on "what's the right discipline order?"** (R6c reframe via the loop's own mechanism) | A meta-application of the existing loop | Cost-effective: uses what's already shipped to answer a conceptual question | Small |

---

## Signal Log

5 signal types per `references/explore.md` §2.1:

| Signal | Where it fired | What it surfaced |
|---|---|---|
| **Density** | R1, R2, R4 (most candidate items live here) | The Family II road map clusters in these three regions. Density indicates where the project has been thinking hardest about next moves. |
| **Novelty** | R2c (Stage-2 dynamic loop) and R2b (discipline-ordering refinement) | Both user-articulated in `possible_breakthroughs/` but NOT in README2.md's road map. Conceptually novel relative to the documented Family II–IV ordering. |
| **Relevance (purpose-biased)** | `cognitive_harness/next_question_to_ask.md` frame | The user's own framing of "the developer's job is relaxed and easier" makes R4 (autonomy-ladder advancement) and R3 (Predictive RC) high-relevance: both directly shrink the human's burden. R6 (conceptual reframes) is high-relevance for breakthrough by historical pattern but doesn't directly shrink the human's burden in the short term. |
| **Tension** | R1b (Primitive RC slot) | README2.md still names `tools/structural_check.sh` as a Family II item; the May 16 finding REMOVED it. The road map and current state disagree. Either the road map needs updating, or the slot needs a different filler. |
| **Absence** | R1c (outcome-tracking artifacts) and R7a (spec-evolution protocol codification) | Both NAMED in conceptual material (`docs/desc.md` for Retrospective RC; just-finished finding for spec evolution) but absent as buildable specs/artifacts. **Negative-space finding: the Retrospective RC layer has no scaffolding at all today — not even a place to write outcomes.** |

**Probed:** R1, R2, R3, R4 (the four highest-density regions). R6c probed via the user's possible_breakthroughs/2.md note.

**Deferred:** Detailed effort estimation for R6b (value-persistence) — it's research-frontier and shouldn't be sized as a buildable item. Detailed exploration of "which specific canary tests would each discipline need" — downstream of R1a's decision.

---

## Confidence Map

| Region | Confidence | Notes |
|---|---|---|
| R1 (Infrastructure / safety) | **confirmed** | Items grounded in README2.md, recent findings, current file structure |
| R2 (Discipline architecture) | **confirmed** for R2a (artifact_materialization protocol exists); **scanned** for R2b/R2c (user-articulated but not yet specced) |
| R3 (Predictive RC / intuit) | **confirmed** | Detailed spec exists at `docs/intuit.md` and `docs/thinking_space_dynamics.md` |
| R4 (Autonomy ladder) | **confirmed** for R4a (Navigator spec exists, warming files exist); **confirmed-deferred** for R4b (just-finished finding's V4-deferred) |
| R5 (Calibration / practice) | **scanned** | The activity is ongoing; specific sub-items (e.g., per-discipline practice schedule) are inferred |
| R6 (Conceptual reframes) | **inferred** | The historical pattern (past breakthroughs were conceptual reframes) is the basis; specific next-reframe candidates surfaced from `docs/` + user notes |
| R7 (Meta-governance) | **scanned** | One contract exists; the slot for more is open |
| Residual hybrids (Z1–Z3) | **inferred** | Compound moves derived from the above |

**Confirmed-absent regions** (productive negative-space findings):

- **No automated regression detection.** Mentioned in README2.md as Family II priority. No infrastructure exists today.
- **No outcome-tracking ledger.** The Retrospective RC layer the Baldwin cycle's T2+ requires has zero scaffolding.
- **No /intuit slash command.** Despite extensive spec work (`docs/intuit.md`), the Predictive RC is not invocable today.
- **No `tools/` directory.** The folder named in `cognitive_harness/MVL+/SKILL.md` Step 4 doesn't exist (just confirmed: `ls tools/` returned "No such file or directory"). Every /MVL+ run has been silently skipping the structural-check call.
- **No Navigator subagent invocation after /MVL+.** The Family II item is unwired despite all spec/warming files being in place.

---

## Frontier State

**Stable.** Two jump-scans performed:

1. **Jump-scan into "discipline retirement"** — could any of the 11 disciplines be deprecated? Quick check: each of the 11 has either active invocation or a clear role. None obviously retirable. No surprises.

2. **Jump-scan into "moves outside the milestone-family taxonomy"** — what's NOT in Family II/III/IV but is buildable? Surfaced: tooling cleanup (the `tools/` directory creation; archive policy formalization; auto-memory hygiene). All small-effort but low-leverage relative to mapped items. Some may be necessary preconditions for R1a (canary infrastructure needs a `tools/` location).

Both jump-scans returned no candidate that materially changes the leverage ranking. Frontier is stable.

---

## Gaps and Recommendations

Frontier questions handed to downstream disciplines:

### To Sensemaking (S)

- What does "biggest gain toward breakthrough" actually mean? Multiple plausible interpretations:
  - (a) Largest single-step capability gain (regardless of how it shrinks human burden)
  - (b) Largest reduction in human-in-the-loop burden (the user's `next_question_to_ask.md` framing)
  - (c) Best Baldwin-cycle-closing move (the trajectory's named substrate)
  - (d) Highest historical-pattern match (past breakthroughs were conceptual reframes — does that bias the verdict toward R6?)
  - (e) Best leverage-per-effort (which may favor smaller hybrids over the named load-bearing items)
- Are R3 (/intuit Phase A) and R4a (Navigator L1) competing for the same calendar slot, or can they be paralleled? The hybrid Z1 assumes the latter.
- The R1b (Primitive RC) tension — road map says one thing, recent finding says another — what's the right verdict?

### To Decomposition (D)

- Decompose "biggest gain" into independent sub-questions: (i) what unlocks the most other moves? (ii) what shrinks the human's burden most? (iii) what closes the Baldwin cycle's missing layer? (iv) what's the smallest move with a high-leverage payoff? Each sub-question may favor a different candidate.
- The dependency topology among R1, R2, R3, R4: which are bottleneck-prerequisites for which?

### To Innovation (I)

- Generate verdict candidates including hybrids (Z1, Z2, Z3) and any synthesis the discipline-ordering or stage-2-loop ideas suggest.
- The "Run /MVL+ on the conceptual reframe question itself" (Z3) is a meta-move — explore whether it produces high leverage at low cost.

### To Critique (C)

- Adversarially test: does the recommended move ACTUALLY close the named gap (e.g., does R4a Navigator L1 really shrink the human's burden, given the human is still Selector + Runner)? Does R3a /intuit Phase A produce a usable Predictive RC at MVP scale (Phase A is convergent-only; structural-analogy is in Phase B)?
- Kill candidates that promise a breakthrough without naming what gets qualitatively different.

### Frontier observations (not for any specific discipline)

- The historical breakthrough pattern is **conceptual reframe**, not infrastructure build (per `docs/desc.md` inquiry chain). This biases the verdict toward R6 candidates over R1–R3 infrastructure moves. Sensemaking should test whether this bias is correct or stale.
- The user's purpose framing (`next_question_to_ask.md`: "developer's job relaxed and easier") biases toward moves that shrink the human-in-the-loop burden. This biases toward R3 + R4 over R1 + R6.
- The two biases may converge on a hybrid: a conceptual reframe whose implementation also shrinks the human's burden. Z3 (run /MVL+ on the reframe question) is a candidate of this shape.

---

## Telemetry

- **Mode:** possibility
- **Entry point:** signal-first
- **Cycles run:** 2 (initial scan + jump-scan)
- **Candidates generated:** 14 in regions + 3 hybrids = **17 total**
- **Signals detected:** 5/5 signal types fired
- **Probed:** R1, R2, R3, R4 (high-density); user-articulated novel candidates (R2b, R2c) probed via possible_breakthroughs/ files
- **Deferred:** Sub-item effort detail in R5b, R6b
- **Resolution progression:** Coarse region-level → per-item with D3 depth (functional one-line + dependencies + current state)
- **Frontier state:** stable
- **Discovery rate:** declining — second cycle (jump-scan) produced no candidate that changes the leverage ranking
- **Convergence criteria:** frontier-stability ✓; declining-discovery-rate ✓; bounded-gaps ✓
- **Jump-scan performed:** yes (twice — discipline-retirement scan + outside-milestone-family scan)
- **Failure modes checked:** Premature depth (no — coarse region scan completed first); Surface-only scanning (no — divergent regions probed at D3); False confidence (no — two jump-scans performed); Premature termination (no — three criteria verified); Re-exploration (no — frontier tracked); Completeness bias possibility-mode (no — completeness-before-novelty applied; standard candidates inventoried before novel ones); Open→closed drift (no — annotations stayed at labeling level); Silent boundary-discovery (the implicit boundary-discovery sub-phase fired but was explicitly noted in Territory Overview); Negative-space silent drop (no — confirmed-absent regions named); Inadequate D2 minimum (no — D3 maintained per-invocation).

---

## Self-Assessment

**PROCEED.** All checks pass. The candidate space is mapped at sufficient depth for Sensemaking to extract anchors and Innovation to compose hybrids.

**Single most load-bearing finding for downstream:** the project has **two stacked framings of "breakthrough"** — the historical pattern (conceptual reframes) and the user's stated framing (shrink the human's burden). These two framings favor different candidate clusters (R6 / R7 vs. R3 / R4). Sensemaking's job is to either reconcile them or commit to one — the verdict ranking depends decisively on which framing wins.

The second most load-bearing finding: **the absence of the Retrospective RC layer (R1c) is the structural bottleneck for the Baldwin cycle**. Even if /intuit ships (R3a), the cycle cannot close without outcome-tracking. This may make R1c a stealth top candidate that the obvious-leverage framings (above) underweight.
