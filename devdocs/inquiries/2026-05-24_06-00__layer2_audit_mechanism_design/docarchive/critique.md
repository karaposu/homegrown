## User Input

(See `_branch.md` Source Input for the full verbatim user input.)

# Critique — Layer-2 Audit Mechanism Design

Adversarial evaluation of Innovation's per-piece survivors + the assembly. Phases: 0 Dimension Construction → 1 Landscape → 2 Adversarial → 3 Verdicts → 3.5 Assembly Check → 4 Coverage + Convergence.

## Phase 0 — Dimension Construction

Read Sensemaking's anchors + Decomposition's verification criteria + Innovation's tests to extract evaluation dimensions.

### Default dimensions (modified per problem)

| Dimension | What it asks | Weight | Extracted from |
|---|---|---|---|
| **D1 Correctness** | Does the design actually consume the substrates correctly and produce verdicts matching the recognition signals? | **CRITICAL** | Sensemaking C4, C7; mode-specific recognition signals from design memo + 18-58 + 24-40 + 24-01 |
| **D2 Coherence** | Does the design fit with established architecture (isolated-session + file-scanning per 16-31; minimum-but-load-bearing artifact set per FP1; phase-fit per 24-40 + FP4)? | **CRITICAL** | Sensemaking C2, FP1, FP4 |
| **D3 Feasibility at L0** | Can the design ship at L0 (current state) without inventing infrastructure that doesn't exist? | HIGH | Sensemaking C5, FP4 |
| **D4 Completeness** | Does the design cover all 4 user sub-questions (runner, cadence, threshold, false-depth-substrate) + the design-completion pieces (substrate consumption, output)? | HIGH | _branch.md observation targets |
| **D5 Robustness** | Does the design survive edge cases (substrate file absent; substrate malformed; routeman SKILL.md edit disables A1+A3; user ignores audit)? | HIGH | Sensemaking R1-R5; 24-40's 3-tier failure handling |
| **D6 Elegance** | Is the design the simplest sufficient solution? Over-engineering at L0 is a defect. | MEDIUM | Sensemaking FP1 (don't reinvent the wheel); 24-00 precedent of adopting existing protocols |

### Project-specific risk dimensions (per refinement note)

The candidate set involves routeman's runtime + project artifacts + autonomy register. Project-specific risk dimensions:

| Dimension | What it asks | Weight | Source |
|---|---|---|---|
| **D7 Enumerate-all identity preservation** | Does the design preserve routeman's commitment to enumerate the full next-move space? Audit must observe, not gate. | **CRITICAL** | Routeman design memo's core identity; Sensemaking C3 |
| **D8 Self-coupling-to-downstream avoidance** | Does the design avoid the LAYER-2 mode "Self-coupling-to-downstream" (the audit's calibration must not depend entirely on its own past verdicts)? | **CRITICAL** | /surfacing's LAYER-2 framework; Sensemaking KI1 + C6 |
| **D9 Phase-fit at L0/L1** | Does the design work at L0 (current) with documented L2+ extension hooks? Does it avoid locking the project into a single autonomy point? | HIGH | Sensemaking FP4; 24-40's phase-calibration commitment; 24-02's two-epoch framing precedent |
| **D10 LLM-operational alignment** | Does the design honor the LLM-operational-design principle (N=5 evidence)? User-language, file-mediated, etc. | MEDIUM | 18-58's principle; 24-00, 24-40, 24-01, 24-01-30 applications |
| **D11 Bypass risk** | If someone edits routeman SKILL.md to disable A1+A3 enforcement, does the design notice? | HIGH | KI2 from Sensemaking; the audit's "defend the by-construction invariant" role |
| **D12 Calibration source robustness** | Are thresholds externally calibrated (not from audit history)? Does the source survive its own absence (graceful degradation)? | HIGH | KI4; 24-40's 3-tier failure handling pattern |

**Dimension validation** (per Phase 0 refinement): the project-specific risk dimensions are mode-specific and architecture-specific; the candidate set involves project artifacts (Route Map, `_navig.md`, autonomy register, routeman SKILL.md). The dimension list passes the validate-dimensions check — D7-D12 capture the load-bearing risk axes that the default D1-D6 don't fully cover.

### Burden of proof

Stakes are MEDIUM-HIGH (the audit will ship as part of routeman's first SKILL.md; design errors propagate to all routeman invocations). Burden of proof favors caution: each survivor must demonstrate clear viability on D1, D2, D7, D8 (the CRITICAL dimensions); REFINE if it fails non-critical dimensions; KILL only if it fails a CRITICAL dimension with no mitigation.

## Phase 1 — Landscape Construction

### Viable region

A design is viable when it scores well on D1 (correctness), D2 (coherence), D7 (enumerate-all preserved), D8 (self-coupling avoided). The viable region is "designs that consume existing substrates per their canonical formats, fit the file-mediated architecture, never gate routeman's enumeration, and externally calibrate thresholds."

### Dead region

A design is dead if it FAILS any CRITICAL dimension:
- **Fails D1** (incorrect substrate consumption) → dead.
- **Fails D2** (violates architecture; e.g., in-context callbacks) → dead.
- **Fails D7** (gates routeman enumeration) → dead.
- **Fails D8** (self-couples) → dead.

### Boundary region

A design is at boundary if it passes CRITICALs but has weak signals on HIGH dimensions (D3, D4, D5, D9, D11, D12). These need refinement.

### Unexplored region

Innovation's mechanisms produced candidates across operational location, calibration, substrate-consumption, false-depth substrate, output. The unexplored region: would there be a DIFFERENT runner architecture not yet considered? Per the Inherited Frame Audit (which fired in Innovation), the substrate-self-audit candidate (R-Cand-4) IS the systematic challenge. No other unexplored region surfaced.

## Phase 2 — Adversarial Evaluation

### Candidate 1: A-Cand-Assembly (P1=R-Cand-2 + P2=C-Cand-4 + P3=T-Cand-3 + P4=F-Cand-4 + P5=S-Cand-1 + P6=V-Cand-2)

#### Prosecution

- **Killer objection 1:** "The separate audit protocol (R-Cand-2) is dead code at L0 — no one will manually invoke it; the audit silently doesn't run." The audit's value at L0 depends on someone (user or runner) invoking the protocol; if no auto-trigger exists, the audit's substrates accumulate verdicts that are never consumed.
  - **Worst realistic outcome:** the audit ships in the spec but is never invoked; LAYER-2 modes silently fire; routeman erodes undetected; user thinks the audit is active because the protocol exists.
- **Killer objection 2 (on D8 self-coupling):** "Even with external grounding from the autonomy register, the audit's INTERPRETATION of substrate signals depends on the audit's own framework — the recognition signals are documented in the design memo + 18-58, which the audit's runner has loaded as the framework it's checking against. The audit's framework and the audited's framework share the same artifact (the design memo). Self-coupling at the framework level."
  - **Worst realistic outcome:** the audit "confirms" routeman is fine because both share the same framework; LAYER-2 failures that violate the framework's assumptions (not just its specific recognition signals) go undetected.
- **Killer objection 3 (on D5 robustness):** "If `_navig.md` is malformed or absent (e.g., first routeman invocation in a fresh project; or a worker crashed mid-write), the audit halts (per 24-40's ERROR tier). But the audit's halt isn't surfaced to the user via routeman's normal output stream — the protocol invocation happens separately. User doesn't see the halt."
  - **Worst realistic outcome:** audit silently halts; user doesn't know; LAYER-2 mode runs unaudited; the next routeman invocation has the same problem.
- **Killer objection 4 (on D4 completeness):** "F-Cand-4 majority vote requires weights for each of 3 components. The design commits 'calibratable defaults' but doesn't supply the defaults. SKILL.md authoring will face an unspecified design choice — back to square one for false-depth."
  - **Worst realistic outcome:** SKILL.md authoring picks arbitrary weights; false-depth substrate underperforms; the entire F-Cand-4 commitment is undermined.
- **Killer objection 5 (on D11 bypass risk):** "If someone edits routeman SKILL.md to disable A1+A3 enforcement (e.g., to debug a Stage 1 issue), the audit's read of WHY citations finds no citations and (correctly) flags Prescriptive-Without-Cycle-Context. But there's no way for the audit to DISTINGUISH 'spec disabled' from 'genuine routeman failure.' Both look like the same signal to the audit."
  - **Worst realistic outcome:** the audit fires for what is actually a debug session, costing user attention; OR the audit fails to fire when a real bypass occurred because the user normalized the signal.
- **Strongest assumption-if-wrong:** "the autonomy register is keeping pace with reality." If the human doesn't update `docs/autonomy_level.md` when the project actually graduates to L1, the audit's thresholds (still keyed to L0) are too loose — false negatives accumulate.

#### Defense

- **Core structural strength:** the design CONSUMES existing substrates (24-40 + 24-01) rather than building new substrate infrastructure. This is the most-defensible architectural property — it leverages 24-40's + 24-01's work directly, doesn't duplicate, doesn't compete.
- **Defense against objection 1 (dead-code-at-L0):** the FALLBACK is human-attended audit at L0. The protocol IS designed for either runner-invocation or human-invocation. At L0 the human invokes it after each routeman run (or periodically); the protocol's existence + the runner's documentation pointer = the substrate for the human's action. At L2+, the runner auto-invokes the protocol as part of its checkpoint sequence. **The L0 path is human-attended-with-mechanical-substrate; the L2+ path is auto-invoked.** Both paths exist in the design.
- **Defense against objection 2 (framework self-coupling):** the substrates are EMPIRICAL (file content; transition_history; drop-rates), not framework-derived. The audit checks "does this file content match the recognition signal?" — the framework supplies the signal definition, but the substrate's content is independent of the framework. The framework + the substrate are different layers; self-coupling is at the framework level only IF the framework changes its definitions without re-validating against actual practice. The design's L2+ extension hook is "framework revisions trigger substrate re-validation."
- **Defense against objection 3 (silent halt):** the protocol's output WRITES to `_audit.md` even when halting — the halt is itself a recorded event. The runner reads `_audit.md` at routeman-invocation-end and surfaces ERROR records to the user. The user sees "audit halted because substrate file X malformed."
- **Defense against objection 4 (unspecified weights):** the design commits a STAGED weight calibration: at first ship, equal weights (1/3 each) — simplest defensible starting point. Calibration trigger: after 5+ stage-2-invocations, audit the false-depth detection's true-positive rate; adjust weights if needed. **Equal weights is the first-ship default; it isn't "arbitrary" — it's the maximum-entropy baseline absent prior calibration data.**
- **Defense against objection 5 (bypass vs genuine failure):** the audit's verdict for Prescriptive-Without-Cycle-Context can include a SPEC-CHECK component — it reads routeman SKILL.md to verify Stage 1 enforcement is still committed in the spec. If the spec says "Stage 1 enforces A1+A3" but the output lacks A1 citations, the bypass is "intentional but in conflict with spec" (debug session expected → INFO tier); if the spec has been edited to remove A1+A3 enforcement, the audit's verdict is "spec changed; LAYER-2 mode now newly-possible — review the spec edit's intent" (a different signal). **The audit's verdict structure can include a spec-coherence check as part of the substrate.**

#### Collision

- **Killer objection 1 vs defense:** the defense holds. The L0/L1 path IS human-attended; the design honors phase-fit by NOT requiring auto-invocation infrastructure at first ship. The dead-code concern presupposes "audit must be auto-invoked to be alive" — the design rejects this with the human-attended-with-mechanical-substrate pattern.
- **Killer objection 2 vs defense:** the defense partially holds. Framework-self-coupling is a real concern, but the substrates' empirical content provides PARTIAL external grounding. Full framework-revision-triggered substrate re-validation is an L2+ extension hook. **At L0/L1, the framework-self-coupling risk is acknowledged but mitigated to "moderate"; the design accepts this with an explicit revival trigger.**
- **Killer objection 3 vs defense:** the defense holds, BUT requires P6 to commit that the verdict format includes ERROR-tier records (not just PROCEED/FLAG/RE-RUN). **Add to P6's commitment: include INFO + ERROR tiers in the verdict format, mirroring 24-40's 3-tier pattern. Refine P6.**
- **Killer objection 4 vs defense:** the defense holds. Equal weights is defensible at first ship; the calibration trigger is concrete; SKILL.md authoring can supply the equal weights as a documented choice.
- **Killer objection 5 vs defense:** the defense holds, BUT requires P5 to include a spec-coherence component for Prescriptive-Without-Cycle-Context mode (read routeman SKILL.md; verify Stage 1 enforcement is still committed). **Add to P5's per-mode dispatch table: a spec-coherence check field per applicable mode. Refine P5.**

#### Position on landscape

The assembly survives prosecution on D1, D2, D7, D8 (CRITICAL dimensions). HIGH dimensions need REFINE (objections 3 + 5 surface specific refinements to P6 + P5).

**Verdict: REFINE → SURVIVE after refinements.**

Refinements:
- **R6: Extend P6's verdict format to include INFO + ERROR tiers (mirror 24-40's 3-tier pattern).**
- **R5: Extend P5's per-mode dispatch table to include a spec-coherence check component for modes where bypass-vs-genuine-failure distinction matters.**

After R5 + R6 refinements, the assembly is **SURVIVE**.

### Candidate 2: R-Cand-4 (substrate-self-audit at consumer side — the Inverted candidate from P1)

This is the principal alternative to the assembly's runner choice. It deserves explicit adversarial evaluation.

#### Prosecution

- "R-Cand-4 doesn't actually detect false-depth — that mode requires CROSS-Route pairwise analysis, which is more than 'looking at substrates.' R-Cand-4 doesn't cover false-depth without falling back to a dedicated audit anyway."
- "R-Cand-4 doesn't detect spec bypass — the user reading the Route Map can't know whether routeman's SKILL.md was edited to disable enforcement. Substrate-self-audit at consumer side has a structural blind spot."
- "At L0/L1 the human reading the Route Map MAY NOT consistently apply the substrate check (cognitive load; forgets; ignores). The 'audit happens by consumer reading' degrades to 'audit happens when consumer remembers.'"
- "R-Cand-4 has no surface — no protocol file, no SKILL.md section. There's nothing for the SKILL.md author to author."

#### Defense

- "R-Cand-4 is the minimum-infrastructure design — zero new artifacts; the audit IS what the substrates already are. Phase-fit at L0 is perfect because L0 = no automation."
- "The cognitive-load concern is real but the substrate-self-disclosure (A1+A3's WHY-citations are visible in the Route Map; the absent citations are obvious to anyone reading) gives the human reader a strong signal."
- "R-Cand-4 is actually what the L2+ system-Selector does naturally — it reads Route Maps, applies its filtering, the substrate checks are part of its filtering. R-Cand-4 is the L2+ end-state pattern projected back to L0."

#### Collision

- The assembly's runner choice (R-Cand-2 separate protocol) is more shippable at L0 because it provides a discrete deliverable (a protocol file) the SKILL.md authoring can ship.
- R-Cand-4's "no surface" weakness is dispositive at the shippability dimension; even if the underlying mechanism is sound (substrate-self-disclosing), the design's deliverable wouldn't exist.
- R-Cand-4's coverage of false-depth is incomplete (the cross-Route pairwise check needs a runner to do the comparison; "user reads" doesn't naturally do pairwise comparison).

#### Position on landscape

R-Cand-4 survives D2, D6, D9 (coherent, elegant, phase-fit), but fails D4 (Completeness — false-depth not covered) and D11 (Bypass — spec bypass not detected).

**Verdict: KILL with seed.** The seed: R-Cand-4's pattern (substrate-self-audit at consumer side) BECOMES the L2+ extension hook for the assembly's design — at L2+, when the system Selector takes over Route Map reading, it inherits the substrate-check behavior. R-Cand-4 is preserved as the L2+ default, NOT as the first-ship runner.

### Candidate 3: F-Cand-5 (DEFER false-depth substrate)

The Inverted candidate from P4. Was preliminarily resolved in Innovation via RE-TEST TRIGGER; Critique re-checks.

#### Prosecution

- "Per FP3 (mechanism honesty), shipping a substrate at first ship that hasn't been calibrated against observed false-depth instances is structurally weak. F-Cand-4's 'equal weights' is a baseline, not calibration. Ship something or don't ship something — don't ship a placeholder."
- "F-Cand-5 forces the user to know the audit covers 4 of 5 modes. The audit's output for false-depth is 'mode not yet detectable' — clear signal."

#### Defense

- "F-Cand-4 with equal weights + revival trigger is a STAGED commitment — ship the substrate with a calibratable default; refine when evidence accumulates. This is the same pattern 24-02 used (LOW-fallback emission until per-discipline-N source ships). It's mechanism-honest because the LOW-fallback / equal-weights state is EXPLICITLY documented as the dormant state."
- "F-Cand-5 leaves a mode-shaped hole in the audit's coverage. A SKILL.md authoring author trying to use the audit for false-depth would find it doesn't exist. Re-running this inquiry to design F-cand later is more costly than committing F-Cand-4 + revival trigger now."

#### Collision

- F-Cand-4 with documented equal-weights default + calibration revival trigger is structurally honest (per the 24-02 pattern) AND ships a working substrate (covers all 5 modes at first ship).
- F-Cand-5's KILL of false-depth at first ship loses the substrate without a strong reason — F-Cand-4 is implementable and the calibration revival trigger handles the legitimate concern.

#### Position on landscape

F-Cand-5 fails D4 (Completeness — one mode uncovered). F-Cand-4 (refined to F-Cand-4-staged) passes D4 + the mechanism-honesty concern.

**Verdict: KILL with seed.** The seed: if F-Cand-4's equal-weights default produces high false-positive rates in practice (calibration revival trigger fires negatively), F-Cand-5's DEFER pattern is the fallback (remove the substrate; document why; revive when better substrate proposed).

### Multi-axis prosecution depth check (per refinement note)

For the assembly candidate (above), the prosecution constructed three depth-axes:

- **User-perspective objection:** "the user wants to know LAYER-2 failures are caught; the audit at L0 is human-attended (per defense to objection 1) — does this match what the user expected when they said 'lets dive deep'?" The user expected a design that ships — the human-attended-with-mechanical-substrate IS shippable (the protocol exists; the verdict format exists; the substrate dispatch table exists). User-perspective passes.
- **Specific failure-case scenario:** "What happens at the third routeman invocation in a fresh project, where `_navig.md` only has 2 prior entries?" Calibration-Drift's firing rule requires N≥2 invocations + threshold-window accumulated. At N=2 with L0 threshold-window of "3 invocations," the rule says "fire on the next invocation" — natural availability filter. No false positive; no surprise. Concrete failure case: edge case handled.
- **Specification-gap probe:** "Does the audit specify HOW to read routeman SKILL.md for the spec-coherence check (per refinement R5)?" The refined design must commit — the spec-coherence check reads routeman SKILL.md's Stage 1 enforcement section; if the section's content matches a committed canonical (e.g., the section starts with "Stage 1 enforces A1+A3"), no bypass; if the section has been edited (different opening), audit's Prescriptive-Without-Cycle-Context verdict adds a spec-coherence-failed annotation. **The design commits this read mechanism.** Spec-coherence-check spec-gap closed.

## Phase 3 — Verdict + Constructive Output

### Per-candidate verdicts

| Candidate | Verdict | Constructive output |
|---|---|---|
| **Assembly (P1=R-Cand-2 + P2=C-Cand-4 + P3=T-Cand-3 + P4=F-Cand-4-staged + P5=S-Cand-1-refined + P6=V-Cand-2-refined)** | **SURVIVE** (after R5 + R6 refinements) | The assembly is the design; ship it with the refinements. |
| R-Cand-4 substrate-self-audit at consumer side | KILL with seed | Seed: becomes the L2+ extension hook for the assembly — when system-Selector takes over, it inherits substrate-check behavior. |
| F-Cand-5 DEFER false-depth | KILL with seed | Seed: if F-Cand-4-staged's equal-weights default produces high false-positive rate in practice, F-Cand-5's DEFER pattern is the fallback (remove substrate; document; revive when better substrate proposed). |

### Refinements committed to the survivor

- **R5 — P5 per-mode dispatch table extension:** add a spec-coherence check component for Prescriptive-Without-Cycle-Context mode (read routeman SKILL.md; verify Stage 1 enforcement section still commits A1+A3). The verdict's evidence includes a "spec-coherence: matches | edited" field.
- **R6 — P6 verdict format extension:** include INFO + ERROR tiers alongside PROCEED / FLAG / RE-RUN (mirror 24-40's 3-tier pattern). The runner reads `_audit.md` and surfaces INFO via routeman's normal output (gentle notice); ERROR via emphasized output (user attention required).

### Refined survivor (the final design)

The first-ship LAYER-2 audit mechanism:

- **P1 Runner:** `cognitive_harness/protocols/layer2_audit.md` — a separate audit protocol invoked by the runner (at routeman invocation-end) OR by the human (at L0/L1, manual invocation supplemented by runner pointer in routeman's output).
- **P2 Cadence:** per-mode firing rules inside per-invocation gating. A1+A3 modes fire per-invocation; Calibration-Drift fires when N≥2 + threshold-window accumulated; false-depth fires when stage-2-present.
- **P3 Thresholds:** per-mode rule + per-autonomy-level scaling adopting `autonomy_ladder.md`'s evidence-gate pattern. Time-window dimension scales with autonomy level (looser at L0, tighter at L4+). Magnitude dimension per-mode-fixed.
- **P4 False-depth substrate:** F-Cand-4-staged — composite majority vote (≥2 of 3 components: Stage 1 drop-rate per parent + pairwise meta-reasoning distinctness + secondary-attribute coordinate-uniformity), with equal weights (1/3 each) as first-ship default and a calibration revival trigger (after 5+ stage-2-invocations, audit detection's TP rate).
- **P5 Substrate consumption:** per-mode dispatch table (4 mature modes); table includes for each mode {substrate file, section/field, parsing rule, output, 3-tier failure handling}; for Prescriptive-Without-Cycle-Context the table includes a spec-coherence check (R5 refinement).
- **P6 Verdict + log:** parallel `_audit.md` file in the inquiry folder (inquiry-scoped invocations) OR central `devdocs/audits/<run-id>/_audit.md` (project-scoped invocations); structured records with mode, status (PROCEED / FLAG / RE-RUN / INFO / ERROR — 5-tier per R6 refinement), evidence (file-path citations per A1 pattern), confidence (per autonomy level), surfaced_to_user flag, next_trigger field.

### Architecture-level commitment

The audit:

1. **Reads** at the start of each invocation: `docs/autonomy_level.md` (for threshold scaling); the relevant `routeman.md` (current Route Map; possibly multiple if scope-aggregating); `_navig.md` (cross-invocation history including prior audit verdicts); routeman SKILL.md (for spec-coherence check on applicable modes).
2. **Applies** per-mode firing rules per the cadence table.
3. **Dispatches** per-mode read protocols (per the dispatch table) to extract substrate signals.
4. **Compares** signals against thresholds (per the autonomy-level-keyed table).
5. **Emits** per-mode verdict records to `_audit.md`.
6. **Surfaces** FLAG / RE-RUN verdicts via the runner's standard output channel; ERROR via emphasized output; INFO via gentle output.

The audit DOES NOT modify routeman's Route Map, _navig.md, or autonomy register (read-only on inputs except for its own `_audit.md` log). The audit DOES NOT gate routeman's enumeration (observe-only).

## Phase 3.5 — Assembly Check

Re-evaluate the assembled survivor (refined) against the dimension set.

| Dimension | Assembly score | Notes |
|---|---|---|
| D1 Correctness | HIGH | Per-mode dispatch consumes substrates per their canonical formats; recognition signals correctly applied. |
| D2 Coherence | HIGH | File-mediated throughout; adopts existing protocol patterns (autonomy register read, dispatch table from 24-01); minimum new artifacts (1 protocol file + 1 sidecar). |
| D3 Feasibility at L0 | HIGH | Protocol invocation works manually at L0 (human invokes); ships with the human-attended-with-mechanical-substrate pattern. |
| D4 Completeness | HIGH (after F-Cand-4-staged inclusion) | All 5 LAYER-2 modes covered; 4 sub-questions (runner + cadence + threshold + false-depth) answered + 2 design-completion pieces (substrate consumption + output) addressed. |
| D5 Robustness | HIGH (after R6 refinement) | 3-tier failure handling (INFO / ERROR / ERROR) for substrate read; ERROR halts; INFO logged; surfacing via runner's output channel. |
| D6 Elegance | MEDIUM-HIGH | 1 new protocol file + 1 sidecar; adopts existing patterns rather than inventing; not minimum (R-Cand-4 was minimum) but well-justified additions. |
| D7 Enumerate-all preserved | HIGH | Audit is observe-only; never gates routeman. |
| D8 Self-coupling avoided | HIGH (with caveat) | External grounding via autonomy register (independent of audit history); framework-self-coupling at moderate level (acknowledged with revival trigger). |
| D9 Phase-fit at L0/L1 | HIGH | L0 = human-attended; L1 = transition (the runner can start auto-invoking); L2+ = auto-invoked + system-Selector inherits substrate-self-audit pattern (R-Cand-4 as L2+ end-state). |
| D10 LLM-operational alignment | HIGH | User-language preserved (e.g., "audit," "mode," "verdict"); file-mediated; verdict format human-readable. |
| D11 Bypass risk | HIGH (after R5 refinement) | Spec-coherence check in P5 detects routeman SKILL.md edits that disable enforcement. |
| D12 Calibration source robustness | HIGH | Autonomy register's 3-tier failure handling inherited; if register absent, audit defaults to L0 thresholds + INFO warning. |

**All dimensions HIGH (with documented caveats on D6 and D8).** The assembly is robust.

### Emergent architecture (assembly value > sum of parts)

The assembly's emergent properties:

- **L0/L1/L2+ progressive automation:** the audit ships shippable at L0 (human-attended), naturally extends to L1 (runner can auto-invoke), and at L2+ inherits substrate-self-audit (R-Cand-4) when the system-Selector takes over. The design has documented extension hooks at each phase.
- **Bypass-aware:** the spec-coherence check (R5) makes the audit's verdict robust to routeman SKILL.md edits that disable Stage 1 enforcement.
- **Inheritance, not reinvention:** the audit ADOPTS 24-40's 3-tier failure handling + 24-01's dispatch-table pattern + the autonomy register + the persistence model — minimum new infrastructure.
- **5-tier verdict surface:** the verdict format (PROCEED / FLAG / RE-RUN / INFO / ERROR) gives the user calibrated attention signals — gentle notice vs urgent attention vs structural problem.

## Phase 4 — Coverage + Convergence

### Accumulator (this iteration)

| Field | Content |
|---|---|
| Evaluation log | Assembly + R-Cand-4 + F-Cand-5 evaluated against 12 dimensions. Per-piece survivors (P1-P6) inherited from Innovation. |
| Kill record | R-Cand-4 (KILL with seed: becomes L2+ extension hook). F-Cand-5 (KILL with seed: becomes fallback if F-Cand-4 underperforms). Plus Innovation's prior kills (R-Cand-3, R-Cand-5, R-Cand-6; T-Cand-1; S-Cand-2, S-Cand-3; C-Cand-2, C-Cand-3; F-Cand-3; V-Cand-3). |
| Refinement record | R5 (P5 spec-coherence check); R6 (P6 5-tier verdict). Both refinements integrated into the survivor. |
| Coverage map | All 12 dimensions covered; CRITICAL dimensions (D1, D2, D7, D8) all HIGH; HIGH dimensions (D3-D5, D9, D11, D12) all HIGH after refinements; MEDIUM dimensions (D6, D10) HIGH. |
| Convergence trend | The assembly survives prosecution on all CRITICAL dimensions after R5 + R6 refinements. No CRITICAL dimension fails. The landscape is largely settled. |

### Coverage assessment

- **Operational location axis (P1):** 6 candidates considered (5 of 6 KILLed or DEFERRED; 1 SURVIVES). Coverage complete.
- **Cadence axis (P2):** 4 candidates considered (3 KILLed/deferred; 1 SURVIVES). Coverage complete.
- **Calibration axis (P3):** 3 candidates considered (2 KILLed/deferred; 1 SURVIVES with caveats). Coverage complete.
- **False-depth substrate axis (P4):** 6 candidates considered (4 KILLed/deferred; 1 SURVIVES with caveats; 1 KILLed with seed as fallback). Coverage complete.
- **Substrate consumption axis (P5):** 3 candidates considered (2 KILLed; 1 SURVIVES with R5 refinement). Coverage complete.
- **Output axis (P6):** 3 candidates considered (2 deferred; 1 SURVIVES with R6 refinement). Coverage complete.

**No unexplored region remains likely to contain viable candidates** — the Inherited Frame Audit in Innovation fired (challenging "audit needs a runner"); the challenge was tested and KILLed with seed. No further structural alternative is visible.

### Convergence criteria check

- **At least one candidate SURVIVE with no caveats on critical dimensions:** YES — the refined assembly survives all CRITICAL dimensions HIGH.
- **Two consecutive iterations have not produced new-region candidates:** N/A (first iteration). However, the landscape construction shows no remaining unexplored region likely to contain better candidates.
- **No unexplored region remains topologically likely to contain viable candidates:** TRUE.
- **Accumulator shows decreasing rate of new information per iteration:** N/A (first iteration).

**Convergence signal: TERMINATE.** The refined assembly is the design.

### Per-mode coverage check (custom for this inquiry)

| LAYER-2 mode | Substrate consumed by | First-ship detectability | Notes |
|---|---|---|---|
| Auto-vs-Judgment Calibration-Drift | P5 dispatch table; reads `docs/autonomy_level.md` + `_navig.md` | YES — via N≥2 + threshold window | Inherits 24-40 substrate |
| Prescriptive-Without-Cycle-Context | P5 dispatch table + spec-coherence check (R5) | YES — by-construction + bypass detection | Inherits 24-01 substrate; refined for bypass robustness |
| Rename-Renders-Itself-Cosmetic | P5 dispatch table; reads multi-invocation Route Maps | YES — sliding window over `_navig.md` | Inherits 24-01 substrate |
| filler-meta-reasoning | P5 dispatch table; reads Stage 1 drop-with-reason log | YES — drop-rate at W5 | Inherits 24-01 substrate |
| false depth | P4 substrate; majority vote of 3 components | YES — F-Cand-4-staged | First-ship substrate; equal weights baseline; calibration revival trigger |

All 5 modes detectable at first ship. Q4 substrate gap is closed.

## Convergence Telemetry

- **Dimension coverage:** 12 dimensions (6 default + 6 project-specific). All applied to the survivor.
- **Adversarial strength:** STRONG. The prosecution constructed 5 killer objections (dead-code-at-L0, framework-self-coupling, silent-halt, unspecified-weights, bypass-vs-genuine-failure) + the multi-axis depth check (user-perspective, specific-failure-case, specification-gap-probe). The defense surfaced 5 substantive responses. The collision produced 2 concrete refinements (R5, R6).
- **Landscape stability:** STABLE. The refined assembly's position on the landscape is "viable region, HIGH on all dimensions." Adding more iterations would not change the landscape topology meaningfully.
- **Clean SURVIVE exists:** YES — the refined assembly.
- **Failure modes observed:** None of the 7 failure modes triggered.
  - **Wrong dimensions:** ruled out — dimensions extracted from Sensemaking's anchors + Decomposition's verification criteria.
  - **Rubber-stamping:** ruled out — 5 substantive killer objections raised; some required refinements.
  - **Nitpicking:** ruled out — KILL decisions have explicit critical-dimension failures; REFINE decisions are surgical.
  - **Dimension blindness:** ruled out — project-specific risk dimensions D7-D12 added beyond defaults.
  - **False convergence:** ruled out — convergence criteria met (clean SURVIVE; no unexplored region).
  - **Evaluation drift:** ruled out — dimensions fixed at Phase 0; consistent application.
  - **Self-reference collapse:** mitigated — D8 (self-coupling-to-downstream) was explicitly evaluated; external grounding via autonomy register confirmed.
- **Mechanism Independence — Shared-input-detection:** the assembly's survivors emerged from multiple mechanisms (per Innovation's per-piece mechanism logs); shared-input is acknowledged (Decomposition's piece-list shapes the candidate space) but each piece's survivor passes multi-mechanism convergence.

**Overall: PROCEED** (sufficient dimension coverage; strong adversarial structure; stable landscape; clean SURVIVE exists; no failure modes; convergence reached).
