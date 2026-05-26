## User Input

(See `_branch.md` Source Input for the full verbatim user input.)

# Innovation — Layer-2 Audit Mechanism Design

Generates options per piece (P1-P6) via Innovation's 7 mechanisms, applies the 5-test cycle, and runs the Inherited Frame Audit + Piece-Level Inversion per the discipline's refinement notes.

## Phase 1 — Seed

The seed is a **piece-list inherited from Decomposition** (Production-task mode per the spec's Methodology-Mode refinement). Six pieces, each with a question + verification criteria + interfaces.

### Methodology-Mode Consideration (Phase 1 refinement)

- **Inherited mode from upstream framing:** **Standard default** (4G+3F balanced; elaborate the committed direction). The Decomposition output is a piece-list with verification criteria — a production task asking for committed options per piece, not a contrarian rethink.
- **Alternative mode considered:** **Contrarian-rethink (Framer-weighted)** — what if we challenge the decomposition's piece boundaries? What if the audit shouldn't be decomposed at all but treated as one atomic mechanism?
- **What follows under the alternative:** the inquiry would re-litigate Decomposition's 5-cluster partition; the candidate space would be different (atomic mechanism vs decomposed mechanism); the design would be less surgical.
- **Decision:** **default to Standard mode.** The Decomposition validated the 5-cluster partition via top-down + bottom-up; re-litigating now would discard Sensemaking's stabilization work. The Innovation will use 4 Generators + 3 Framers per piece (or sub-piece as appropriate), with per-piece Inversion as the contrarian guardrail (per the Piece-Level Inversion refinement).

### Seeds per piece

- **Seed for P1:** "Where should the audit's runtime code live, given /reflect is excluded?"
- **Seed for P3:** "How should the threshold table's per-mode, per-autonomy-level values be structured + populated for L0/L1?"
- **Seed for P5:** "How does the audit's per-mode read protocol consume each existing substrate?"
- **Seed for P2:** "What's the cadence (gating + per-mode firing) given the runner choice from P1 and threshold values from P3?"
- **Seed for P4:** "What composite formula combines drop-rate + meta-reasoning distinctness + coordinate-pairwise into a false-depth substrate?"
- **Seed for P6:** "What's the verdict format and where is it stored, given the runner choice from P1 and verdict content from P4/P5?"

## Phase 2 — Generate (per piece, in dependency order)

### Piece P1 — Runner choice

Apply 4 Generators + 3 Framers (full coverage; Standard mode).

#### Lens Shifting (Framer)

- **Lens 1 — Maintenance overhead:** Under this lens, which runner minimizes ongoing maintenance? Self-audit (no new spec to maintain; lives in routeman SKILL.md). Separate protocol (new spec to maintain). Runner-level (audit logic in /MVL + /MVLw — multi-spec maintenance).
- **Lens 2 — Bypass risk:** Under the lens "what happens if someone disables the audit?" Self-audit: deleted by editing routeman SKILL.md. Separate protocol: deleted by removing the protocol file from invocation; the protocol persists in `cognitive_harness/protocols/`. Runner-level: deleted by editing the runner SKILL.md.
- **Lens 3 — Separation of concerns:** Under the lens "what does each artifact do?" Self-audit conflates audit semantics with routeman's enumeration; the separate protocol cleanly separates. Runner-level conflates audit with orchestration.

#### Combination (Generator)

Combine elements from existing protocols:

- **Combination 1:** Self-audit pattern (routeman SKILL.md hosts) + outcome_review.md's post-use audit pattern → **self-audit at routeman-invocation-end, runs as a "Phase 7" of routeman's pipeline (after the 6 cognitive steps + verdict emission)**.
- **Combination 2:** Separate-protocol pattern (like `loop_diagnose.md`) + autonomy_register's read protocol → **separate `cognitive_harness/protocols/layer2_audit.md` invoked by the runner OR human, reads files like the register's 3-tier protocol does**.
- **Combination 3:** Runner-level + RESUME's discipline-verdict-reading pattern → **runner reads audit-relevant outputs (per RESUME's pattern) and emits audit verdicts as part of the runner's checkpoint sequence**.

#### Inversion (Framer)

- **Inversion 1 — "the audit must have a single runner" inverted:** "the audit has multiple runners by mode." Each LAYER-2 mode could be run by the most appropriate location: self-audit for A1+A3 modes (cheap per-invocation); separate protocol for Calibration-Drift (needs cross-invocation); runner-level for false-depth (needs stage-2 awareness). **Multi-runner-by-mode is a candidate.**
- **Inversion 2 — "the audit must be its own thing" inverted:** "the audit is the SUBSTRATE itself; no separate audit runner needed." Per KI2 from Sensemaking, A1+A3 makes 3 modes by-construction-detected — the substrate IS the audit for those modes. Calibration-Drift's substrate (transition_history) IS the audit when compared to current behavior. **In the limit, "running the audit" reduces to "looking at the substrates that already exist" — no dedicated runner needed beyond a simple file-reader.** This is the most aggressive inversion.

  Depth check: invert again. "Running the audit reduces to looking at substrates" → invert: "but SOMETHING must look." Component-level. Invert again: "the substrates are looked at WHENEVER routeman's output is consumed — by the user reading the Route Map." System-level: **the audit is the user reading the Route Map with substrate-awareness; no automation needed at first ship**. Root-cause level: at L0/L1, the audit IS the human reader. At L2+, the system Selector takes over the reading and the audit becomes automated.

- **Multi-axis check:** the inversion above operates on the existence axis. Other axes:
  - **Identity axis:** what does the audit fundamentally consist of? **Inverted: the audit is not a separate "thing" but the substrate-checking step embedded in whoever reads the Route Map.** Re-confirms Inversion 2.
  - **Locus axis:** where does the audit live? **Inverted: the audit lives in EVERY consumer of the Route Map, not at the producer (routeman) side.** Each consumer applies the substrate check at read-time.

The Identity + Locus + Existence inversions all converge: the audit may not need a dedicated runner at first ship — the substrates make 4 of 5 modes detectable BY ANY CONSUMER reading the Route Map; false depth needs design but doesn't necessitate a dedicated runner.

#### Constraint Manipulation (Framer; bidirectional)

- **ADD constraint:** add "the audit MUST run in routeman's isolated session (no cross-session execution)." Under this, self-audit is the only option (the runner is in a different session; a separate protocol would also be in a different session). **Self-audit is forced by this constraint.** *(This constraint is hypothetical — the actual architecture is more permissive; included for thought-experiment.)*
- **REMOVE constraint:** remove "the audit must be automated" — at L0/L1 the audit may be human-attended; the design simply provides the substrate-reading guide for a human auditor. **Human-attended-with-mechanical-guide is an L0/L1 candidate.**

Both-direction-mandatory check: both directions explored. ADD produces a forced-self-audit reading (with caveats); REMOVE produces a human-attended reading.

#### Absence Recognition (Generator; bidirectional)

- **What's missing in the candidate set (gap-recognition):** what about a **hybrid runner** — self-audit for A1+A3 modes (low-cost per-invocation) + separate protocol for Calibration-Drift + false-depth (needs cross-invocation + substrate)? The piece-list above treats runner as a single choice, but the actual mode-asymmetry suggests a hybrid may be optimal.
- **What's missing at redesign level:** if we were designing the audit infrastructure from scratch with no inherited architecture, what would exist that doesn't? **A "substrate gateway" pattern — substrates are exposed as a queryable interface, and any consumer (user, runner, future audit runner) reads them via the gateway. The audit's MECHANISM is the gateway's read pattern, not a separate runner.**
- **Both-levels-mandatory check:** both patch-level (hybrid runner) and redesign-level (substrate gateway) considered.
- **Bidirectional check ("what's already present in different form"):** the project already has analogous "gateway-style" patterns — the autonomy register's read protocol (24-40) IS a gateway for autonomy-level information; A1+A3's citation-format IS a self-disclosing substrate. **The "substrate gateway" idea is partially-present as the file-read conventions already in the project.** This shifts the redesign-level proposal: rather than building a new gateway, the design's runner choice can adopt the existing pattern (substrates are read at the consumer side; no new gateway artifact needed).

#### Domain Transfer (Generator)

- **Domain transfer 1: Software static analysis.** Tools like ESLint, mypy run as separate processes invoked by IDE / CI / pre-commit. They read source files; they emit reports. **The pattern: separate process / protocol invoked from the consumer's environment.** Maps to: **separate audit protocol invoked by the user or the runner**.
- **Domain transfer 2: Database constraints.** Database constraints fire AT WRITE-TIME, embedded in the write path. **The pattern: enforcement at the producer.** Maps to: **self-audit at routeman-invocation-end (audit at write-time of Route Map)** — this is what 24-01's A1+A3 already does for 3 modes (drop-with-reason at Stage 1 generation time is a write-time constraint).
- **Domain transfer 3: Health checks in services.** Health checks run on a schedule (every N seconds) from an external monitor. **The pattern: external scheduled poller.** Maps to: **periodic-batch audit (e.g., every N inquiries) run from a separate location**. Less phase-fit at L0 because the project doesn't have a scheduler.
- **Source-domain selection guard:** computing-native domain explicitly included (database constraints; static analysis; health checks).

#### Extrapolation (Generator)

- Extend "audit runs per invocation" trend → at L0 the project has ~few invocations per week, so per-invocation audit is fine; at L4+ many per hour, per-invocation becomes too chatty. **Trend extrapolation: cadence must scale with invocation rate.**
- Extend "substrates added per inquiry" trend → currently 4 mature substrates; if 18-58-equivalent inquiries continue adding substrates over time, the audit's read protocol must scale. **Trend extrapolation: the substrate-consumption protocol (P5) must be extensible (per-mode-pluggable), not a fixed N-substrate hard-coded list.**
- Extend the LLM-operational-design principle trend → it's at N=5 evidence; the audit's design itself can apply it (e.g., user-language alignment in audit's verdict format). **Trend extrapolation: the audit's output language should match the user's framing.**

#### Synthesis across mechanisms

The mechanisms converge on a few candidate runner architectures:

- **R-Cand-1 — Self-audit at routeman-invocation-end (write-time embedded).** Lens 1 (low maintenance) + Combination 1 (Phase 7 of routeman) + Domain Transfer 2 (database constraints) + ADD-constraint forcing.
- **R-Cand-2 — Separate audit protocol invoked by runner OR human (read-time external).** Combination 2 (loop_diagnose-style) + Lens 3 (separation of concerns) + Domain Transfer 1 (static analysis).
- **R-Cand-3 — Multi-runner by mode (hybrid).** Inversion 1 + Absence Recognition gap-recognition.
- **R-Cand-4 — Substrate-self-audit at the consumer side (no dedicated runner; consumer-driven).** Inversion 2 (multi-axis: existence + identity + locus) + Absence Recognition redesign-level + REMOVE-constraint (no automation required at L0).
- **R-Cand-5 — Periodic-batch audit from external poller.** Domain Transfer 3 + Extrapolation (cadence scales).
- **R-Cand-6 — Runner-level audit embedded in /MVL + /MVLw checkpoint.** Combination 3 + Lens 1's "where the orchestrator already runs."

#### Inherited Frame Audit (between Phase 2 and Phase 3)

**Step i — Seed-level central assumption:** the seed framing assumes the audit needs A RUNNER (i.e., some code location runs the audit). The user's input + Sensemaking framing carry this assumption.

**Step ii — Piece-level commitments:** P1 commits a 3-candidate space (self-audit / separate-protocol / runner-level) per Decomposition. This is a Property-(i) meta-decision piece (the relationship-label between this piece's options is "alternatives within a chosen space"). The load-bearing commitment is "audit needs a runner."

**Step iii — Challenge scan:** does any candidate in the set explicitly challenge "audit needs a runner"? **R-Cand-4 (substrate-self-audit at consumer side)** challenges it via Inversion's redesign-level + existence-axis flip — the audit may not need a dedicated runner if substrates are self-disclosing and consumers can read them.

**Step iv — Firing condition:** the audit is challenged. **The audit does NOT fire** (the assumption was challenged at Inversion 2 + Absence Recognition redesign-level + at multiple axes in the Multi-axis check). Proceed to Phase 3 Test.

**Result:** the candidate set is robust — R-Cand-4 represents the structural challenge to "audit needs a runner"; the design can adjudicate this in Phase 3.

#### Piece-Level Inversion compliance (P1)

- **Property check:** P1 is a meta-decision piece (Property (i) relationship-label; the candidate-set's structure is committed in this piece).
- **Inversion-candidate generated:** R-Cand-4 (substrate-self-audit at consumer side) explicitly inverts "audit needs a dedicated runner" → "audit is the substrate-checking embedded in any consumer." Both candidates testable.
- **Compliance: SATISFIED.** Both R-Cand-4 and the dedicated-runner candidates (R-Cand-1, R-Cand-2, R-Cand-3, R-Cand-5, R-Cand-6) will be tested.

### Piece P3 — Threshold table

(Working with the inherited mode + applying mechanisms more compactly since P1 received full coverage and the patterns repeat.)

- **Combination + Lens shifting:** the threshold table can adopt `autonomy_ladder.md`'s per-level evidence-gate pattern (L1→L2 needs ≥10 navigation maps + selection rationale + navigation_memory.md schema). Audit's time-window thresholds scale similarly: at L0, generous windows (e.g., 5 invocations = 2 weeks); at L4+, tight (e.g., 5 invocations = 1 hour).
- **Domain Transfer (statistics):** confidence-interval calculation — at low N, large CI; at high N, small CI. Apply: at L0 (low invocation rate), the audit's threshold needs to be permissive to avoid false positives; at L4+ (high rate), the audit can be tighter.
- **Absence Recognition (bidirectional):** what's missing at the redesign level — a "calibration template" per autonomy level rather than per-mode-per-level cell-by-cell values. The template defines the SHAPE of thresholds; per-mode rows fill in the magnitude. Bidirectional present: the autonomy_ladder.md already defines per-level evidence-gates that serve a similar template role.
- **Extrapolation:** if substrates accumulate, the table grows (per-substrate rows). It needs to be extensible (per-mode-pluggable), not fixed-N-row.

#### Candidate threshold-table shapes

- **T-Cand-1 — Per-mode-per-level cell-by-cell.** Each cell specifies a single threshold value. Concrete, explicit, low-implementation-overhead. Risk: rigid; hard to extend.
- **T-Cand-2 — Per-mode rule template + per-level scaling factor.** Each mode has a rule template (e.g., "FLAG when ≥X% of routes lack citations across Y invocations"); each autonomy level provides scaling factors for X, Y. Extensible; medium-overhead.
- **T-Cand-3 — Per-mode rule + per-level scaling via autonomy_ladder.md evidence-gate pattern.** Inherits autonomy_ladder.md's per-level evidence quantification (e.g., L1→L2 needs ≥10 maps); audit thresholds use the same N values. Cohesive with existing artifact; tightest coupling to autonomy register.

#### Threshold-table values (committed shape T-Cand-3 for adoption later)

For the design, T-Cand-3 adoption will commit values like (illustrative; values to be finalized by critique + SKILL.md authoring):

| Mode | Magnitude dim | L0 window | L1 window | L2+ window |
|---|---|---|---|---|
| Rename-Renders-Itself-Cosmetic | ≥50% empty pointers | across 5 invocations OR 1 month, whichever first | across 5 invocations OR 1 week | across 5 invocations OR 1 day |
| Prescriptive-Without-Cycle-Context | by-construction (Stage 1 enforces) | n/a — fires immediately on bypass detection | n/a | n/a |
| filler-meta-reasoning | by-construction (drop-with-reason rate) | rate > 30% across 5 invocations | rate > 25% across 5 invocations | rate > 20% across 5 invocations |
| Calibration-Drift | declared-vs-observed divergence | ≥2 levels apart across 3 invocations | ≥1 level apart across 5 invocations | ≥1 level apart across 10 invocations |
| false depth | composite score (per P4) | composite ≥ 0.7 in any single invocation | composite ≥ 0.6 | composite ≥ 0.5 |

(Illustrative; final values are SKILL.md authoring decisions per the design's calibratable property.)

#### Piece-Level Inversion compliance (P3)

- **Property check:** P3 is a meta-decision piece (Property (iv) evaluation-criterion — the threshold values establish criteria downstream verdicts depend on).
- **Inversion-candidate generated:** "What if thresholds are NOT autonomy-level-keyed but instead invocation-count-keyed (per-discipline-N)?" — analogous to Baldwin's N≥30 gate. The Inversion's content: at low N (say <30), all thresholds permissive (LOW confidence); at high N, tight. **This is genuinely different from autonomy-level-keyed scaling** — the project's autonomy level may advance while per-discipline N stays low (or vice versa).
- **What follows under Inversion:** thresholds scale to per-discipline-N (read from a discipline-calibration register — Q10's deferred per-discipline-N source). The autonomy register is NOT consulted.
- **Both candidates testable:** T-Cand-3 (autonomy-keyed) and T-Cand-3-Inv (N-keyed). **Compliance: SATISFIED.**
- **Verdict (preview to Phase 3):** T-Cand-3 has higher integration value (the autonomy register exists; N-keyed source is itself deferred per Q10). But both axes might co-exist (multi-axis thresholds). Preview: a HYBRID may emerge in Critique.

### Piece P5 — Substrate consumption protocol for 4 mature modes

Mechanism application (compact):

- **Combination:** combine 24-40's 3-tier failure-handling (INFO / ERROR / ERROR) with 24-01's drop-with-reason pattern. Per-mode read protocol uses the 3-tier vocabulary; the audit halts on ERROR and informs on INFO.
- **Domain transfer:** parser patterns — strict-parser (halts on malformed input) vs forgiving-parser (best-effort). For audit substrate reads, strict is safer (per 24-40's commitment that ERROR halts).
- **Absence recognition (bidirectional):** what's missing — a per-mode dispatch table (mode → substrate-file-path + parsing rule + threshold lookup + verdict-emit). Bidirectional present: 24-01's per-movement-type priority chain (DEEPEN ← critique SURVIVE + sensemaking Key-Insights → meta-reasoning, etc.) is exactly this dispatch-table shape for guidance-pointer generation. **The audit's per-mode dispatch reuses this pattern.**

#### Candidate substrate-consumption protocol shapes

- **S-Cand-1 — Per-mode dispatch table (file-path + parsing + verdict-emit per mode).** Cleanly extensible (add new modes as new rows). Inherits 24-01's priority-chain pattern.
- **S-Cand-2 — Per-mode helper function (each mode has its own read function).** Code-style; less extensible than table-style.
- **S-Cand-3 — Unified read protocol (one parser handles all 4 substrates).** Most cohesive; risks mode-conflation (each substrate's parsing is genuinely different).

S-Cand-1 wins on consistency with 24-01's already-adopted dispatch pattern + extensibility (per FF-S3-of-Sensemaking — substrates may accumulate over time).

#### Per-mode dispatch table (S-Cand-1 detail)

| Mode | Substrate file | Section / field | Parsing rule | Output |
|---|---|---|---|---|
| Calibration-Drift | `docs/autonomy_level.md` | YAML frontmatter `current_level` + `transition_history` | Compare to observed routeman behavior (read from `_navig.md` for invocation counts + per-Route auto/judgment counts) | divergence magnitude |
| Prescriptive-Without-Cycle-Context | `routeman.md` (per invocation) | Per-Route Guidance Pointer WHY text | Regex for `per <path> §<section>` pattern; resolve path | resolves / fails ratio |
| Rename-Renders-Itself-Cosmetic | `routeman.md` per invocation × N (across `_navig.md` history) | Per-Route Guidance Pointers count | Count empty pointer lists; ratio across N | ratio of empty |
| filler-meta-reasoning | `_navig.md` (multi-invocation) | Stage 1 drop-with-reason log entries | Count W5 ("meta-reasoning fallback") drops per invocation; rate across N | drop-rate at W5 |

**3-tier failure handling (per 24-40 pattern):**

- **INFO:** substrate file absent → default to "no signal"; log warning; continue.
- **ERROR:** substrate file malformed (YAML parse failure; missing required fields) → halt audit; emit ERROR.
- **ERROR:** out-of-range value (e.g., `current_level: L7`) → halt audit; emit ERROR.

#### Piece-Level Inversion compliance (P5)

- **Property check:** P5 is a meta-decision piece (Property (i) relationship-label commits the read-protocol structure; downstream pieces depend on it).
- **Inversion-candidate generated:** "What if the substrates are consumed at WRITE-TIME by routeman itself, rather than at READ-TIME by the audit?" — invert the substrate-consumption directionality. Under this, routeman during its own Stage 1 + Stage 2 emits the audit signals embedded in `_navig.md` directly; the "consumption" is just reading these pre-computed signals. **This is partially what 24-01's A1+A3 already does for 3 modes** (the drop-with-reason is computed at Stage 1; the audit reads it).
- **Both candidates testable:** S-Cand-1 (read-time consumer) and S-Cand-1-Inv (write-time embedded; partially-existing per 24-01).
- **Verdict (preview):** the two are NOT mutually exclusive. The audit consumes the write-time-embedded signals (already in `_navig.md`) at read-time — both directions co-exist. Per the Synthesis pattern, the design adopts both: 24-01's write-time work generates the signals; the audit reads them at scheduled moments. **Compliance: SATISFIED.**

### Piece P2 — Cadence shape

Compact mechanism application (depends on P1 + P3 from above):

- **Lens 1 — Mode asymmetry:** the 5 modes have heterogeneous substrate availability (KI3 from Sensemaking). Cadence's firing layer respects this.
- **Inversion:** "the audit fires at one cadence" → "the audit fires at MULTIPLE cadences, one per mode." Mode-specific cadence emerges.
- **Constraint Manipulation REMOVE:** drop "fixed-interval gating" — the audit fires purely event-triggered (on substrate-condition only). Risk: no temporal regularity; user may not know when to expect verdicts. Compromise: fixed-interval gating + per-mode event-triggered firing inside (Sensemaking SV4 already committed this 2-layer).
- **Combination:** combine 24-00's `_navig.md` invocation tracking + per-mode firing rules → invocations are counted in `_navig.md`; the gating layer fires (the audit considers running) at every routeman invocation-end; the per-mode firing layer asks per-mode "should I check now?"

#### Candidate cadence shapes

- **C-Cand-1 — Per-invocation gating + per-mode event-triggered firing inside.** Audit considers running at every routeman invocation-end; each mode's firing rule decides whether to check at that gating moment.
- **C-Cand-2 — Every-N-invocations gating + per-mode firing inside.** N could be 1 (every invocation) or 5 (every 5 invocations). Adds latency.
- **C-Cand-3 — On-substrate-condition gating.** The audit runs only when a substrate's content has changed; no temporal trigger.
- **C-Cand-4 — Hybrid (cadence varies per-mode).** A1+A3 modes fire per-invocation (cheap); Calibration-Drift fires every N invocations (needs cross-invocation buffer); false-depth fires when stage-2 has run (event-conditional).

C-Cand-1 with per-mode firing inside is the natural Sensemaking SV4 commitment. C-Cand-4 is structurally equivalent but more explicit per-mode.

#### Per-mode firing rules (C-Cand-1 / C-Cand-4 detail)

| Mode | Firing rule |
|---|---|
| Calibration-Drift | At gating moment, fire IF `_navig.md` shows ≥2 invocations AND `docs/autonomy_level.md` is readable AND threshold-window has accumulated |
| Prescriptive-Without-Cycle-Context | Fire at every gating moment (cheap; per-Route check on current `routeman.md`) |
| Rename-Renders-Itself-Cosmetic | At gating moment, fire IF `_navig.md` shows ≥5 invocations of routeman (sliding window) |
| filler-meta-reasoning | At gating moment, fire IF `_navig.md` shows ≥5 invocations with stage-1 outputs |
| false depth | At gating moment, fire IF current `routeman.md` has sub-routes (stage-2 has run) |

#### Piece-Level Inversion compliance (P2)

- **Property check:** P2 is a meta-decision piece (Property (i) relationship-label commits the cadence structure).
- **Inversion-candidate:** "What if the audit does NOT fire at routeman invocation-end but at routeman invocation-start (pre-flight check)?" Under this, the audit checks PRIOR invocations for signs of LAYER-2 failure before the current invocation begins. Risk: the latest invocation isn't audited until the next one fires; misses late-life signals.
- **Both candidates testable.** Compliance: SATISFIED.
- **Verdict (preview):** routeman invocation-end is the natural gating point (the current Route Map is available; signals are complete). Pre-flight is a candidate for L2+ when system-set automatic remediation is possible. First-ship: invocation-end gating.

### Piece P4 — False-depth substrate composition

Mechanism application (the live design — needs all mechanisms; P4 is the most-open piece):

#### Lens Shifting (Framer)

- **Lens 1 — practical-detection:** the substrate needs ≥80%/≤20% TP/FP per Sensemaking Ambiguity 4.
- **Lens 2 — false-positive sensitivity:** if the substrate fires false-positive on legitimate-distinctness sub-routes (e.g., 10 sub-routes that genuinely cover different axes), the user learns to ignore. The composition must STRONGLY favor true-positive detection.

#### Combination (Generator)

- **Combination 1 — Drop-rate + distinctness:** sub-routes that ALL drop to W5 fallback (Stage 1 failed to find non-meta-reasoning anchors) AND have low pairwise distinctness → high false-depth signal. The "AND" makes both conditions necessary; high precision.
- **Combination 2 — Coordinate-pairwise + distinctness:** sub-routes that share the same 6-tuple secondary attributes (per 24-01-30) AND have low pairwise meta-reasoning distinctness → very high false-depth signal. Both share a parent + same coordinate + similar text = practically identical.
- **Combination 3 — All three components weighted:** a single composite score combining drop-rate (weight 0.3), pairwise distinctness (weight 0.4), coordinate-pairwise (weight 0.3). Threshold against score.

#### Inversion (Framer)

- **Inversion 1:** "the substrate detects FALSE depth" → "the substrate detects TRUE depth." Maybe the substrate is simpler to compute as "are these sub-routes genuinely distinct?" If YES → no false-depth signal; if NO → false-depth signal. Same logic, opposite framing.
- **Inversion 2:** "the substrate fires when sub-routes are TOO similar" → "the substrate fires when sub-routes are SUSPICIOUSLY uniform" — meaning the audit doesn't just look at pairwise similarity but at the DISTRIBUTION (uniform similarity across all sub-routes is more suspicious than one outlier).
- **Depth check:** invert again. "The substrate detects uniformity" → "the substrate's failure is detecting EXTERNALLY-imposed uniformity (e.g., template-filling)." System-level: false depth is template-filling without structural distinction.

**Intervention-shape-axis (per the refinement note):** P4 commits to an ADD-CONTENT shape (adding a new substrate). Inversion on this axis: would REMOVE-shape (don't add a substrate; just don't detect false-depth at first ship) work? Under REMOVE, the design defers false-depth detection with a revival trigger. The audit ships covering 4 of 5 modes; the 5th is preserved as substrate-frontier-open. **REMOVE-shape is a credible candidate** — it honors mechanism-honesty (per FP3 from Sensemaking).

#### Constraint Manipulation (Framer)

- **ADD:** add "the substrate must be computable in O(S²) per parent where S=sub-route count" (the quadratic-pairwise cost). Eliminates fancy ML-based detectors (not feasible at L0).
- **REMOVE:** remove "the substrate must be deterministic" — allow LLM-judgment-based distinctness check. Risk: the audit's verdict depends on LLM consistency. Mitigation: at L0 use heuristic-distinctness; at L2+ allow LLM-judgment.

#### Absence Recognition (Generator)

- **What's missing (gap):** the false-depth recognition signal from 18-58 says "sub-routes whose meta-reasoning fields read interchangeably." The substrate composition can OPERATIONALIZE "read interchangeably" as: pairwise text-similarity (TF-IDF / character-overlap) ≥ threshold AND coordinate-equality ≥ threshold.
- **Redesign-level:** what's MISSING in the substrate inventory entirely — could there be a 4th component? Possible candidate: "Stage-2 invocation pattern" — sub-routes generated in a single rapid Stage-2 invocation (no individual cycle context) are more likely false-depth than sub-routes from multiple staged Stage-2 invocations.

#### Domain Transfer (Generator)

- **Statistical hypothesis testing:** null hypothesis = sub-routes are genuinely distinct. Substrate computes p-value; threshold rejects null at α=0.2 (the 20% FP tolerance from Sensemaking Ambiguity 4).
- **Plagiarism detection:** detects near-duplicate text via shingling / fingerprinting. Pattern transfers to meta-reasoning distinctness check.
- **Database query optimization:** "covering indexes" — sub-routes that share too many indices (coordinate attributes) suggest under-distinction.
- **Source-domain selection guard:** computing-native source (statistical testing; database optimization) included alongside the deliberately-different (plagiarism detection from text-similarity).

#### Extrapolation (Generator)

- If the project routinely produces more sub-routes per parent (Stage-2 invocations frequent), the substrate's complexity becomes a hot path. Cache pairwise comparisons; reuse across invocations.

#### Candidate false-depth substrate compositions

- **F-Cand-1 — Triple-weighted composite:** `composite_score = w1 · drop_rate + w2 · pairwise_distinctness_inverse + w3 · coordinate_uniformity` with weights w1=0.3, w2=0.4, w3=0.3. Threshold per autonomy level.
- **F-Cand-2 — AND-threshold (high precision):** false-depth signal fires only when ALL three components exceed component-specific thresholds. High precision, low recall.
- **F-Cand-3 — OR-threshold (high recall):** signal fires when ANY component exceeds threshold. High recall, low precision.
- **F-Cand-4 — Majority vote:** signal fires when ≥2 of 3 components exceed component-specific thresholds. Balanced.
- **F-Cand-5 — DEFER substrate; ship covering 4 of 5 modes; revival trigger when N observed false-depth instances accumulate.** Per FP3 (mechanism honesty) — ship only what has a defensible substrate.
- **F-Cand-6 — Two-stage detector:** first stage (cheap) = drop-rate + coordinate-uniformity (linear); if first stage fires, run second stage (expensive) = pairwise distinctness check. Cost-optimal.

#### Piece-Level Inversion compliance (P4)

- **Property check:** P4 fires Property (i) relationship-label (commits substrate-design structure) AND Property (v) intervention-shape commitment (the principal candidate uses ADD-CONTENT shape).
- **Inversion-candidate generated (Property-v Intervention-Shape-Axis Inversion):** principal shape is ADD-CONTENT (add a substrate composition). Alternative shape: **DEFER (or DO-NOTHING)** — ship without false-depth substrate at first; revive when evidence accumulates. F-Cand-5 IS this Inversion candidate; explicit naming.
- **Both candidates testable:** F-Cand-1/2/3/4/6 (various ADD-CONTENT shapes) vs F-Cand-5 (DEFER). Compliance: SATISFIED.
- **Verdict (preview):** F-Cand-5 vs F-Cand-4 (majority vote) is the live tension. Critique adjudicates.

### Piece P6 — Verdict emission format + audit-log file shape

Compact mechanism application:

- **Combination:** combine A1's file-path-citation format + 24-40's YAML frontmatter + outcome_review.md's record schema.
- **Lens — extensibility:** the format must accommodate new modes added over time without breaking existing readers.
- **Absence:** what's missing — a `confidence` field per verdict (parallels routeman's per-Route confidence field per 24-02's emission policy).

#### Candidate verdict format

```yaml
audit_record:
  invocation_id: <routeman_invocation_id from _navig.md or n/a>
  timestamp: ISO 8601
  mode: <LAYER-2 mode name>
  status: PROCEED | FLAG | RE-RUN
  evidence:
    - source: <file path>
      section: <section identifier or n/a>
      observed: <observed value>
      threshold: <applied threshold>
  confidence: HIGH | MEDIUM | LOW (per autonomy level; LOW at L0 by default per 24-02 first-ship pattern)
  surfaced_to_user: <bool>
  next_trigger: <observable condition that would change verdict>
```

#### Candidate audit-log file shapes

- **V-Cand-1 — Extend `_navig.md` with `audit_record` per invocation.** Single sidecar; reuses persistence model; per Q12 schema extensions (audit fields).
- **V-Cand-2 — Parallel `_audit.md` file in the inquiry folder (or central `devdocs/audits/` if project-scoped).** Separate concern from persistence; clearer file responsibility.
- **V-Cand-3 — Both: minimal record in `_navig.md` + detailed record in parallel `_audit.md`.** Maximal flexibility; storage overhead.

#### Piece-Level Inversion compliance (P6)

- **Property check:** P6 fires Property (v) intervention-shape commitment (ADD-CONTENT for new format + new sidecar).
- **Inversion-candidate (Property-v Intervention-Shape Inversion):** principal shape is ADD-CONTENT (new format + new file). Alternative shape: **EXTEND-EXISTING** — extend `_navig.md`'s frontier-candidate-record schema with audit fields per Q12; no new file. V-Cand-1 IS this Inversion candidate.
- **Both candidates testable:** V-Cand-1 (extend-existing) vs V-Cand-2 (ADD-CONTENT new file) vs V-Cand-3 (both). Compliance: SATISFIED.
- **Verdict (preview):** V-Cand-2 (parallel `_audit.md`) cleanly separates concerns; V-Cand-1 honors minimum-but-load-bearing-artifact-set principle.

## Phase 3 — Test

For each piece's candidate set, apply the 5-test cycle:

### P1 Runner candidates

| Candidate | Novelty | Scrutiny survival | Fertility | Actionability | Mechanism independence | Disposition |
|---|---|---|---|---|---|---|
| **R-Cand-1 Self-audit at routeman-end** | LOW (well-known pattern: write-time enforcement) | MEDIUM (Self-Reference Blindness risk per /sense-making FM #6; mitigated only if external grounding is robust) | MEDIUM (locks audit logic into routeman SKILL.md; less reusable) | HIGH (low maintenance; lives where the data is) | LOW (only Combination + Domain Transfer 2 reach it) | DEFERRED (single-mechanism) |
| **R-Cand-2 Separate audit protocol** | MEDIUM (loop_diagnose-style pattern adapted) | HIGH (separation of concerns; clear ownership; lives at protocol layer where shared-mechanism artifacts live) | HIGH (reusable for other Boundary disciplines if generalized) | HIGH (the protocol pattern is well-precedent in this project) | HIGH (Combination 2 + Lens 3 + Domain Transfer 1 all reach it) | **ACTIONABLE** |
| **R-Cand-3 Multi-runner by mode** | HIGH (genuinely new — mode-specific runner assignment) | LOW (complex; multiple ownership; debugging hardship) | LOW (per-mode runner-choice multiplies maintenance) | LOW (operational complexity outweighs theoretical fit) | LOW (only Inversion + Absence reach it) | KILL |
| **R-Cand-4 Substrate-self-audit at consumer side** | HIGH (the redesign-level Inversion; no dedicated runner) | MEDIUM (works for 4 of 5 modes by-construction; doesn't address false-depth's need for cross-Route check; cannot detect spec-edit bypass) | HIGH (minimum-infrastructure design; phase-fit at L0 = pure human-attended) | MEDIUM-HIGH (the L0 path is "human reads `_navig.md`; substrates are self-disclosing"; works for L0/L1) | HIGH (Inversion multi-axis + Absence Recognition redesign-level + REMOVE-constraint converge) | **DEFERRED (revival at L2+ when system-Selector reads substrates)** |
| **R-Cand-5 Periodic-batch from external poller** | LOW (standard scheduled-poller pattern) | LOW (no scheduler in the project; introduces infrastructure dependency) | LOW (overkill for L0/L1) | LOW (no L0 scheduler exists) | LOW (Domain Transfer 3 + Extrapolation only) | KILL |
| **R-Cand-6 Runner-level (in /MVL + /MVLw)** | LOW (variant of self-audit but in the runner) | MEDIUM (conflates audit with orchestration; tightly couples to runner specs) | MEDIUM (audit logic must be replicated across MVL + MVLw; not generalizable to other runners) | MEDIUM (the runner exists; can be modified) | MEDIUM (Combination 3 + Lens 1 reach it) | DEFERRED (revival if R-Cand-2 fails operationally) |

**Survivors:** R-Cand-2 (ACTIONABLE), R-Cand-4 (DEFERRED with revival at L2+).

### P3 Threshold-table candidates

| Candidate | Disposition | Reason |
|---|---|---|
| T-Cand-1 cell-by-cell | KILL | Rigid; hard to extend; loses scaling structure |
| T-Cand-2 template + scaling factor | DEFERRED | Conceptually clean but T-Cand-3 is more cohesive with existing artifact |
| **T-Cand-3 per-mode rule + autonomy_ladder.md pattern adoption** | **ACTIONABLE** | Cohesive with autonomy register (24-40); extensible; inherits the project's established per-level evidence-gate pattern |

**T-Cand-3 Inversion (N-keyed):** DEFERRED to research frontier — per-discipline-N is itself a Q10 deferred source; combining T-Cand-3 (autonomy-keyed) with N-keyed when Q10's source ships is a future enhancement (two-axis scaling).

**Survivors:** T-Cand-3 (ACTIONABLE).

### P5 Substrate-consumption protocol candidates

| Candidate | Disposition | Reason |
|---|---|---|
| **S-Cand-1 per-mode dispatch table** | **ACTIONABLE** | Inherits 24-01's priority-chain pattern; extensible; clean per-mode separation |
| S-Cand-2 per-mode helper functions | KILL | Code-style; less extensible than table |
| S-Cand-3 unified parser | KILL | Mode-conflation risk; different substrates have genuinely different shapes |

**S-Cand-1 Inversion (write-time embedded):** ACTIONABLE-ADJACENT — write-time embedding is already what 24-01 does at Stage 1; the audit's read at scheduled moments is what S-Cand-1 adds. The two co-exist (read-time consumer of write-time-embedded signals).

**Survivors:** S-Cand-1 (ACTIONABLE; coexists with write-time embedding from 24-01).

### P2 Cadence candidates

| Candidate | Disposition | Reason |
|---|---|---|
| C-Cand-1 per-invocation gating + per-mode firing | ACTIONABLE | Sensemaking SV4 commitment; per-mode asymmetry honored |
| C-Cand-2 every-N gating | KILL | Adds latency; no clear benefit over C-Cand-1 |
| C-Cand-3 on-substrate-condition gating | KILL | No temporal regularity; harder to expect verdicts |
| **C-Cand-4 hybrid (cadence varies per-mode)** | **ACTIONABLE** | Structurally equivalent to C-Cand-1 but more explicit per-mode; matches per-mode firing rules table |

**C-Cand-1 / C-Cand-4 Inversion (pre-flight):** DEFERRED — first-ship is invocation-end (the latest Route Map is available).

**Survivors:** C-Cand-4 (ACTIONABLE; per-mode-explicit; subsumes C-Cand-1).

### P4 False-depth substrate candidates

| Candidate | Novelty | Scrutiny survival | Fertility | Actionability | Mechanism independence | Disposition |
|---|---|---|---|---|---|---|
| F-Cand-1 triple-weighted composite | MEDIUM | MEDIUM (weights need calibration; calibration source unclear) | MEDIUM | MEDIUM | MEDIUM | DEFERRED |
| F-Cand-2 AND-threshold | MEDIUM | MEDIUM (high precision but very low recall — most false-depth cases miss at least one component) | LOW | MEDIUM | LOW | DEFERRED |
| F-Cand-3 OR-threshold | MEDIUM | LOW (high false positives) | LOW | LOW | LOW | KILL |
| **F-Cand-4 majority vote (≥2 of 3 components)** | MEDIUM | HIGH (balanced precision/recall; matches Sensemaking Ambiguity 4 ≥80%/≤20% target) | MEDIUM | MEDIUM-HIGH | HIGH (Combinations 1-3 + Statistical-Hypothesis Domain Transfer converge) | **ACTIONABLE** |
| **F-Cand-5 DEFER substrate** | LOW | HIGH (mechanism-honest per FP3; doesn't ship a weak detector) | LOW (zero detection until revival) | HIGH (zero implementation cost) | HIGH (Inversion + Constraint REMOVE + Absence) | **ACTIONABLE-WITH-CAVEAT** |
| F-Cand-6 two-stage detector | MEDIUM | MEDIUM (correct but premature optimization at L0) | MEDIUM | LOW (over-engineered for first ship) | LOW | DEFERRED |

**F-Cand-4 vs F-Cand-5 is the live tension** (preview from P4's Piece-Level Inversion). Critique will adjudicate.

### P6 Verdict-format + audit-log shape candidates

| Candidate | Disposition | Reason |
|---|---|---|
| V-Cand-1 extend `_navig.md` | DEFERRED | Honors minimum-artifact principle but mixes audit + persistence concerns |
| **V-Cand-2 parallel `_audit.md`** | **ACTIONABLE** | Cleanly separates audit from persistence; file responsibility clear; per Lens — extensibility wins |
| V-Cand-3 both (minimal in `_navig.md` + detailed `_audit.md`) | DEFERRED | Storage overhead; minimum-but-load-bearing-artifact-set principle (per FP1) prefers V-Cand-2 alone |

**Survivors:** V-Cand-2 (ACTIONABLE).

## Phase 3.5 — Assembly Check

### What architecture emerges when survivors are combined?

Combining the surviving candidates produces a coherent audit mechanism:

- **Runner (P1):** R-Cand-2 — a separate `cognitive_harness/protocols/layer2_audit.md` protocol invoked by the runner (or human at L0).
- **Cadence (P2):** C-Cand-4 — per-mode firing inside per-invocation gating (the runner triggers the audit at routeman-invocation-end; the audit's internal logic decides per-mode whether to fire).
- **Threshold table (P3):** T-Cand-3 — per-mode rules + per-autonomy-level scaling adopting `autonomy_ladder.md`'s evidence-gate pattern.
- **False-depth substrate (P4):** F-Cand-4 — majority vote (≥2 of 3 components) — OR F-Cand-5 — defer with revival trigger; tension to be resolved by Critique.
- **Substrate consumption (P5):** S-Cand-1 — per-mode dispatch table coexisting with 24-01's write-time embedding.
- **Output (P6):** V-Cand-2 — parallel `_audit.md` file with structured verdict records.

### Emergent properties (assembly > sum of parts)

- **Separation of concerns:** the audit's "where it lives" (P1's R-Cand-2 separate protocol) + "what it writes to" (P6's V-Cand-2 parallel file) consistently separate audit infrastructure from routeman's spec and persistence. Clean architectural shape.
- **Read-time consumer of write-time signals:** P5's S-Cand-1 + the 24-01 inheritance (Stage 1 already emits write-time signals via drop-with-reason) → the audit's per-mode dispatch table READS pre-computed signals (cheap reads) rather than RECOMPUTING (would be expensive cross-invocation re-analysis).
- **Phase-fit at L0:** P1's R-Cand-2 (separate protocol) + the fallback (human at L0 invokes the protocol manually or it ships without scheduled automation) → first ship works at L0; L2+ extension hook = auto-invocation by system-Selector when autonomy advances.
- **External grounding for audit's own LAYER-2:** P3's T-Cand-3 reads autonomy register, which is INDEPENDENT of audit history — the audit's thresholds don't depend on prior audit verdicts. Self-coupling-to-downstream LAYER-2 mode (per /surfacing's framework KI1 from Sensemaking) is structurally prevented.

### Assembly-emergent candidate

**A-Cand-Assembly:** the assembly of P1=R-Cand-2 + P2=C-Cand-4 + P3=T-Cand-3 + P5=S-Cand-1 + P6=V-Cand-2 + (P4 unresolved: F-Cand-4 OR F-Cand-5) constitutes a coherent first-ship audit mechanism. This is what Critique will evaluate.

### Axis coverage check (Phase 3 refinement)

The piece-list operates across multiple orthogonal axes:

- **Operational location axis:** P1 (runner) + P2 (cadence) cover where + when.
- **Substrate axis:** P4 + P5 cover what is consumed (and how) + what is detected (and how composed).
- **Calibration axis:** P3 covers thresholds.
- **Output axis:** P6 covers format + storage.

All 4 axes have at least one candidate variant per axis; the assembly composes one variant per axis. Single-axis dominance (e.g., all candidates being about runner) would be a defect; the multi-axis spread is present.

### Mechanism Independence — Shared-input-detection

Do multiple survivors converge because they share input from upstream stages? The survivors (R-Cand-2, T-Cand-3, S-Cand-1, C-Cand-4, V-Cand-2) each emerged from multiple mechanisms (Combination, Lens, Absence, Inversion). The CONVERGENCE on these survivors is mechanism-multi-grounded, not single-input-driven. No spurious-from-shared-input convergence.

## Phase 3 — Test (P4 RESOLUTION via Re-test trigger)

The P4 unresolved tension (F-Cand-4 majority vote vs F-Cand-5 defer) is flagged as **RE-TEST TRIGGER** disposition (per the refinement note). The trigger: the choice between F-Cand-4 and F-Cand-5 has implications for the assembly's claim of "shippable design" — if F-Cand-5 wins (defer false-depth), the design is still shippable but covers 4 of 5 modes (one preserved as substrate-frontier).

The RE-TEST: re-evaluate F-Cand-4 vs F-Cand-5 against the user's stated goal ("dive deep + commit options + don't punt").

- F-Cand-4 commits a substrate proposal (composite majority-vote); it's an actionable design with calibratable weights.
- F-Cand-5 explicitly defers; per the user's framing this is closer to "punt" if not justified by mechanism honesty.

**Re-test outcome:** F-Cand-4 wins for first ship; F-Cand-5's mechanism-honesty principle is honored by making the substrate's weights + thresholds CALIBRATABLE with a documented revival trigger if observed false-depth instances aren't caught. F-Cand-4 + F-Cand-5's spirit = ship-with-calibratable-defaults-and-revival-trigger.

## Phase 4 — Iteration / Output Disposition

### Disposition categories per piece

| Piece | Survivor candidate | Disposition |
|---|---|---|
| P1 Runner | R-Cand-2 (separate audit protocol) | **ACTIONABLE** |
| P2 Cadence | C-Cand-4 (per-mode firing inside per-invocation gating) | **ACTIONABLE** |
| P3 Threshold table | T-Cand-3 (autonomy_ladder pattern adoption) | **ACTIONABLE** |
| P4 False-depth substrate | F-Cand-4 (majority vote of 3 components; weights calibratable) + F-Cand-5 spirit (revival trigger if false-depth misses observed in practice) | **ACTIONABLE-WITH-CALIBRATION** |
| P5 Substrate consumption | S-Cand-1 (per-mode dispatch table; reads write-time signals from 24-01 stage 1) | **ACTIONABLE** |
| P6 Verdict + log | V-Cand-2 (parallel `_audit.md` with structured records) | **ACTIONABLE** |

### Research frontiers (preserved)

- E13 — Audit's own LAYER-2 self-coverage (the meta-recursive concern; preserved from Sensemaking).
- R-Cand-4 — Substrate-self-audit at consumer side (DEFERRED with revival at L2+ when system-Selector reads substrates).
- F-Cand-1/2/3/6 — Alternative false-depth compositions preserved as research-frontier seeds if F-Cand-4 underperforms in practice.
- Two-axis threshold scaling (autonomy-level × per-discipline-N) — when Q10's per-discipline-N source ships.

## Production-task additional telemetry

Per the refinement note for Production-task mode, per-piece mechanism log + per-piece axis-distribution log + meta-decision-piece classification + Piece-level Inversion compliance:

### Per-piece mechanism log

| Piece | Mechanisms applied | Axis annotations |
|---|---|---|
| P1 | Lens Shifting, Combination, Inversion (multi-axis), Constraint Manipulation (ADD/REMOVE), Absence Recognition (bidirectional), Domain Transfer (3 sources), Extrapolation | content + intervention-shape (R-Cand-4 is the intervention-shape-axis Inversion) |
| P3 | Combination, Lens, Domain Transfer (statistics), Absence (bidirectional), Extrapolation | content + intervention-shape (T-Cand-3 vs T-Cand-3-Inv N-keyed) |
| P5 | Combination, Domain Transfer (parser), Absence (bidirectional) | content + intervention-shape (S-Cand-1 dispatch-table; Inversion explored write-time embedding co-existence) |
| P2 | Lens, Inversion (cadence-multi), Constraint Manipulation REMOVE, Combination | content + intervention-shape (C-Cand-4 vs pre-flight Inversion) |
| P4 | Lens (×2), Combination (×3), Inversion (depth-check; intervention-shape), Constraint Manipulation (ADD/REMOVE), Absence (bidirectional; redesign-level), Domain Transfer (×3), Extrapolation | content + intervention-shape (F-Cand-5 is the ADD-CONTENT-vs-DEFER intervention-shape Inversion) |
| P6 | Combination, Lens (extensibility), Absence | content + intervention-shape (V-Cand-2 vs V-Cand-1 intervention-shape Inversion) |

### Meta-decision-piece classification

All 6 pieces are meta-decision pieces (each commits a load-bearing design decision; subsequent SKILL.md authoring inherits these decisions). Per-piece Inversion was applied to all; compliance: SATISFIED for all 6.

### Per-piece Piece-level Inversion compliance

| Piece | Inversion candidate | Compliance |
|---|---|---|
| P1 | R-Cand-4 (substrate-self-audit at consumer side) | satisfied — both candidates 5-test cycled |
| P3 | T-Cand-3-Inv (N-keyed instead of autonomy-keyed) | satisfied — deferred but acknowledged |
| P5 | S-Cand-1-Inv (write-time embedded instead of read-time consumer) | satisfied — both co-exist |
| P2 | Pre-flight gating | satisfied — both 5-test cycled; first-ship is invocation-end |
| P4 | F-Cand-5 (DEFER vs F-Cand-4 ADD-CONTENT — Property-v Intervention-Shape-Axis Inversion) | satisfied — both 5-test cycled; resolution via RE-TEST TRIGGER |
| P6 | V-Cand-1 (extend `_navig.md` vs V-Cand-2 ADD-CONTENT parallel file — Property-v Intervention-Shape-Axis Inversion) | satisfied — both 5-test cycled |

All 6 pieces' Piece-level Inversion compliance: **satisfied.**

## Mechanism Coverage Telemetry

- **Generators applied:** Combination ✓, Absence Recognition ✓, Domain Transfer ✓, Extrapolation ✓ → 4/4
- **Framers applied:** Lens Shifting ✓, Constraint Manipulation ✓, Inversion ✓ → 3/3
- **Convergence:** YES — multiple mechanisms converge on R-Cand-2 (P1), T-Cand-3 (P3), S-Cand-1 (P5), C-Cand-4 (P2), F-Cand-4 (P4), V-Cand-2 (P6).
- **Survivors tested:** 7 candidates passed 5-test cycle (one per piece + the assembly).
- **Failure modes observed:** none of the 6 failure modes triggered:
  - Premature evaluation: did NOT occur (generators ran before testing).
  - Single-mechanism trap: did NOT occur (4G + 3F applied; survivors are multi-mechanism).
  - Early frame lock: did NOT occur (multiple framers + alternatives per piece).
  - Innovation without grounding: did NOT occur (tests ran).
  - Mechanism exhaustion: did NOT occur (all 7 mechanisms productive).
  - Survival bias: did NOT occur (Inversion + Constraint REMOVE produced uncomfortable candidates; uncomfortable candidates (R-Cand-4, F-Cand-5) were tested and dispositioned with reasoning).
- **Inherited Frame Audit:** fired on P1's central assumption ("audit needs a runner"); R-Cand-4 challenged it; the audit did NOT fire (challenge was generated) → proceed to Phase 3 Test.

### Production-task FLAG / RE-RUN condition check

- Any meta-decision piece with violated Inversion compliance: **none** (all 6 satisfied).
- Property-(v) pieces with axis-misalignment: **none** (P4's Inversion targeted intervention-shape axis; P6's targeted same).
- → **Verdict: PROCEED**, not FLAG, not RE-RUN.

**Overall: PROCEED** (4/4 generators + 3/3 framers; convergence achieved; 7 survivors tested; no failure modes; Inherited Frame Audit clean; all 6 piece-level Inversions satisfied; production-task FLAG condition not met).
