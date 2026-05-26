# Sensemaking — Multi-head aggregation protocol for routeman (Q2)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_10-00__multi_head_aggregation_routeman/_branch.md`

## Initial Sense Version (SV1 — Baseline Understanding)

Q2 asks how routeman aggregates next-moves across N parallel worker sessions when multi-head ships. Under the corrected architecture (16-31), multi-head is realized at the worker level (N workers writing to N inquiry folders); routeman stays a singleton scanning across all and producing ONE Route Map per invocation. The design must specify dedup criterion across workers, per-worker provenance, telemetry aggregation, priority allocation under contention, hierarchical-Route-Map interaction (FF-3 from 18-58), the L0-vs-L1+-vs-L2+ phase-progression cut, and the scope distinction from Q14 (cross-invocation aggregation). The acceptable shipping alternative named in Q2's body is "ship N=1 with extensibility hooks; document N>1 as future revision." Most other axes are open.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1: Singleton main navigator + file-mediated only.** Routeman is the sole main navigator; aggregation is INTERNAL to one routeman invocation, not coordination across multiple routeman instances. From 16-31 + 14-39.
- **C2: Isolated session; no cross-session state.** Aggregation runs in routeman's own session. From 16-31.
- **C3: Observe-only.** Routeman does NOT modify worker artifacts; aggregation reads only. From 06-00 + Q5.
- **C4: Enumerate-all.** No movement type or candidate is gated by aggregation. From 02-00 + 06-00.
- **C5: L0 = current project state; multi-head has NOT shipped.** Aggregation must work degenerate-clean at N=1. From 24-40.
- **C6: Schema constraint — route-card has 17 attributes (top-level) / 18 (sub-routes) per 18-58.** Schema extensions must coexist with 24-00's `meta_reasoning_revision_history` etc. (Q12 frontier).
- **C7: File-system protocol from Q5 inherited** — folder topology + atomic-write + verdict-line check + scan-detection.
- **C8: File-shape contracts from Q6 inherited** — per-discipline contract sections + validation layer in routeman SKILL.md = the entry point for per-worker artifact reads.
- **C9: Single Route Map per invocation** (per the corrected Q2 framing) — not N per-head outputs.

### Key Insights

- **KI1: Multi-head is a WORKER-level concept under the corrected architecture.** Aggregation is the singleton routeman's INTERNAL operation, not a multi-routeman coordination protocol. This is the core re-framing from 16-31; "multi-head aggregation" is a misnomer if read as multi-routeman. The proper reading: "multi-worker-cycle aggregation by the singleton routeman."
- **KI2: L0/L1+/L2+ phase progression is the canonical pattern.** Already used by Q3, Q4, Q5, Q6, 02-00, 24-40. Q2 must follow it for coherence.
- **KI3: Dedup is structurally orthogonal to gating** because deduped candidates are emitted with MERGED provenance, not dropped. This dissolves the apparent dedup-vs-identity tension (frontier flag FF-Q2-S6 from surfacing).
- **KI4: N=1 is the degenerate case of N-worker aggregation, not a different operation.** If L0 ships with schema fields and per-worker telemetry slots present at N=1 (with single-element lists and `worker_count: 1`), the N>1 transition requires NO breaking changes — only activation of multi-worker code paths.
- **KI5: Q2 vs Q14 is best understood as a parametric scope distinction.** The aggregation rules MAY be reusable across per-invocation (Q2) and cross-invocation (Q14) scopes, but Q14 hasn't been designed, so the safe commitment is a parametric `aggregation_scope` hook that preserves the slot WITHOUT claiming same-mechanism.
- **KI6: Per-Route-Type aggregation rules** (inheriting 02-00's per-route-type-split + 01-30's Movement Family categorization) are STRUCTURAL, not stylistic. Progression Moves favor vote-count-by-confidence-sum; Re-orientation Moves favor diversity-preservation; Coordination Moves use per-type pre-conditions. The per-Family variation reflects depth-vs-breadth posture differences across Movement Families.
- **KI7: Staged-mapping (FF-3 from 18-58) and multi-head are ORTHOGONAL dimensions.** The aggregated Route Map has two structural axes: cross-worker width (N parallel workers contributing) AND parent-route sub-route depth (stage-2 expansion). The aggregation rule must compose both; neither collapses into the other.

### Structural Points

- **SP1: Aggregation has 3 sub-operations** — (a) per-worker artifact read (via Q5 protocol + Q6 contracts); (b) candidate merge (dedup + provenance + priority); (c) Route Map write (via 24-00 schema + extensions).
- **SP2: Aggregation reads inputs** from N workers' canonical files (`sensemaking.md`, `innovation.md`, `critique.md`, `decomposition.md`, `surfacing.md`, `finding.md`, `_state.md`, `_branch.md`) per Q6 contracts; produces outputs into routeman's own `_navig.md` + `routeman.md` per 24-00.
- **SP3: The dedup-surface is the (movement_type + parent_route_id + Question_fingerprint) tuple** — these are stable across workers because all three are derived from cycle content, not from worker-session identity.
- **SP4: Per-Route schema needs a new `provenance_workers: List[str]` field** (1-element at N=1; N-element after dedup at N>1); the Route Map schema needs an `aggregation_meta: dict` field at top level + a `worker_telemetry: List[dict]` field.
- **SP5: Telemetry roll-up uses 5-tier verdict vocabulary from 06-00** (PROCEED / FLAG / RE-RUN / INFO / ERROR) with worst-case-wins rule (any ERROR → ERROR; any FLAG → FLAG; else PROCEED).
- **SP6: Priority allocation uses per-Movement-Family rules** — Progression-Aggregation (vote-count weighted by per-worker D1 confidence sum); Re-orientation-Aggregation (diversity-preserving, minimal dedup, per-worker rendering retained); Coordination-Aggregation (per-type pre-condition check + per-Family default).
- **SP7: Per-aspect L0/L1+/L2+ activation table commits which mechanism components fire at which phase.** L0 = N=1 degenerate + schema extensions + per-Movement-Family rules + telemetry roll-up. L1+ = N>1 activation + dedup activation + provenance list expansion + disagreement-detection INFO. L2+ = per-worker priority calibration + LLM-judgment-dedup fallback + disagreement-detection threshold tuning + Q14 activation.

### Foundational Principles

- **FP1: Enumerate-all.** Aggregation does not gate any candidate. From 02-00 + 06-00 + 14-39.
- **FP2: Identity-preservation override.** Priority is informational, not gating. Downstream Selector (human at L0; system at L2+) decides what to act on.
- **FP3: Downstream-decides-via-metadata.** Aggregation labels with provenance + confidence; consumers apply their own filtering. From 02-00.
- **FP4: ~80%-documentation / ~20%-novel pattern.** Most of Q2's design documents existing patterns (per-Route-Type rules from 02-00; per-discipline dispatch from 24-01 + 06-00; phase progression from 24-40); small novel commitments are dedup-surface 3-tuple, per-Movement-Family aggregation typology, aggregation_scope parametric hook, disagreement-detection meta-signal. Pattern matches Q5 + Q6.
- **FP5: Spec-coherence with neighbor specs.** Any schema-field addition must be coordinated with 24-00's schema + 18-58's 17/18-attribute commitments. From 06-00 + Q6 R1 drift-coordination meta-process.
- **FP6: Asymmetric-failure principle (information-loss-in-the-dark is worse than over-coverage).** Aggregation should INCLUDE under uncertainty (default to preserving per-worker contributions rather than aggressive dedup at low confidence). From /surfacing.

### Meaning-Nodes

- **MN1: Aggregation** — the operation routeman performs when it scans N worker folders and produces ONE Route Map. Same operation at N=1 (degenerate) and N>1.
- **MN2: Per-worker provenance** — the attribution of "which worker produced this candidate" attached per Route.
- **MN3: Dedup-surface** — the (movement_type + parent_route_id + Question_fingerprint) tuple defining cross-worker candidate identity.
- **MN4: Aggregated Route Map** — the singleton output produced per routeman invocation; per-Route entries carry provenance; top-level carries aggregation_meta.
- **MN5: aggregation_scope** — the parametric field distinguishing per-invocation (Q2) vs cross-invocation (Q14) aggregation. Bridge-not-commitment.
- **MN6: Extensibility hooks** — schema fields and protocol slots that exist at L0 with degenerate values and activate at L1+/L2+.

### Phase 1 Meta-Inspection (H4 concept names + H5 motivating examples)

- **H4 concept names check:** `aggregation`, `per-worker provenance`, `aggregated Route Map` are inherited/consistent with established usage. `dedup-surface`, `aggregation_scope` are novel coined-terms — flagged for the Load-bearing concept test in Phase 3.
- **H5 motivating examples check:** this inquiry has NO concrete observed examples (multi-head hasn't shipped). The design is pattern-level. The risk is the OPPOSITE of typical specific-vs-pattern over-fitting — designing for a pattern that doesn't match the eventual shape multi-head takes. This is captured by the phase-progression cut (ship N=1 with hooks; revise at multi-head materialization).

### Sense Version 2 (SV2 — Anchor-Informed Understanding)

Q2 is a SINGLETON-routeman INTERNAL aggregation operation, not a multi-routeman coordination protocol. The N=1 degenerate case is the L0 ship-state; the N>1 case is the same operation activated by extensibility hooks. The dedup-surface is structural (a 3-tuple of movement_type + parent_route_id + Question_fingerprint), not session-identity-based. Per-Route-Type rules from 02-00 and per-discipline dispatch from 24-01 + 06-00 are the established patterns Q2's design inherits. Most of Q2's design is documentation of existing patterns applied to the multi-worker frame; small novel pieces are the provenance schema fields, the per-Movement-Family aggregation rule typology, the aggregation_scope parametric extension toward Q14, and the disagreement-detection meta-signal.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- **Tech-1:** Dedup-surface tuple (movement_type + parent_route_id + Question_fingerprint) is stable across workers because each component is derived from cycle content, not session-identity. Question_fingerprint = normalized hash (lowercase + whitespace-collapse + punctuation-strip). Tuple identity is well-defined and deterministic.
- **Tech-2:** At N=1 the aggregation operation is structurally a 1-element list-merge — degenerate-clean. Schema fields with single-element lists ship at L0 without behavioral difference from a non-multi-head design.
- **Tech-3:** The 5-tier verdict roll-up (any ERROR → ERROR; any FLAG → FLAG; INFO + PROCEED → PROCEED unless ERROR/FLAG) is monotonic and order-independent, satisfying the determinism invariant (FF-Q2-S3 from surfacing).
- **Tech-4:** Per-Movement-Family rules add a small dispatch table to aggregation logic. Inheritance from 24-01 + 06-00 patterns means implementation cost is small.

### Human / User

- **Hum-1:** The current human Selector (per 02-00 + 24-40 L0) needs to see per-worker provenance to distinguish "3 workers all agreed on DEEPEN" from "1 worker said DEEPEN, the other 2 said REFRAME." Without provenance, Selector loses signal. This is a load-bearing case for the `provenance_workers` field.
- **Hum-2:** Verbatim per-worker telemetry sub-block lets the human Selector audit aggregation behavior — debug why a particular Route was deduplicated or why a candidate ranked higher. The roll-up headline is the steady-state read; the sub-block is what they reach for when something seems wrong. Both are load-bearing for different consumption modes.

### Strategic / Long-term

- **Strat-1:** The aggregation_scope parametric extension means when Q14 (cross-invocation aggregation) ships, the SAME aggregation operation MIGHT generalize — no protocol redesign needed IF Q14's rules turn out to match. This is the long-term payoff of the Q2-vs-Q14 framing as same-mechanism-different-scope, BUT the same-mechanism claim is unverified (see A3 below).
- **Strat-2:** Extensibility hooks at L0 (provenance fields, per-worker telemetry slots, aggregation_meta) mean the multi-head transition is activation-not-rewrite. Minimizes coupling between Q2's resolution timeline and multi-head's shipping timeline.

### Risk / Failure

- **Risk-1: Dedup-surface false-positives.** Two workers contribute "same" candidate (by 3-tuple identity) that are actually structurally different (different reasoning, different anchors). Mitigation: merged Route preserves BOTH workers' meta-reasoning fields per 24-00's `meta_reasoning_revision_history`; if meta-reasoning fields differ substantially, dedup is recorded with a `dedup_evidence` note. No information loss.
- **Risk-2: Dedup-surface false-negatives.** Two workers contribute candidates that ARE structurally the same but differ in 3-tuple (e.g., one has parent_route_id null because top-level; another has parent_route_id because it's a sub-route from stage-2 expansion of an equivalent route). Acceptable at L0 per asymmetric-failure principle — false-negatives result in two separate Routes (rather than one merged), costing Selector small triage but losing no information.
- **Risk-3: Per-Movement-Family rule overlap with 02-00's per-route-type-split.** If Q2's per-Family aggregation rule contradicts 02-00's emission policy, spec-coherence (FP5) fires. Mitigation: explicit verification during R1 drift-coordination — aggregation rules document where they extend 02-00 (priority allocation; aggregation) vs where 02-00 owns (emission policy).
- **Risk-4: Schema-extension acceptance vs Q12.** Q12 is the "routeman-specific schema extensions" frontier from 24-00. Q2's I-R8-01..05 additions need to coexist with Q12's eventual design. Q12 hasn't shipped; Q2's additions are first-mover. Q12's eventual design must accommodate Q2's additions, not the other way around. Documented as frontier flag.

### Resource / Feasibility

- **Res-1:** Aggregation is a single in-routeman-session computation. No new infrastructure needed; reads use Q5's scan-detection (full scan at L0; mtime-filtered at L2+). No external services, no daemons, no schedulers.
- **Res-2:** N=1 degenerate case has near-zero cost (1-element merges; trivial roll-ups). N>1 case is O(N) reads + O(N²) worst-case dedup comparisons (in practice O(N·logN) with hashing on dedup-surface). At N=5 workers (reasonable upper bound for multi-head), this is well under a second.

### Definitional / Internal Consistency

- **Def-1:** Is "aggregation" the right name? Established usage in 14-39 + 16-31 + Q2's framing uses "aggregation" or "scans across N folders." No conflict; concept name is consistent.
- **Def-2:** Does the design contradict any established definition? Singleton main navigator identity (14-39) is preserved; file-mediated input contract (16-31) is preserved; enumerate-all (02-00 + 06-00) is preserved (dedup is not gating because merged Routes are still emitted with full provenance). No contradictions.
- **Def-3:** Internal consistency of the design itself: per-Movement-Family rules + per-discipline dispatch + dedup-surface tuple + telemetry roll-up + per-worker provenance + extensibility hooks all compose without internal contradiction.

### Definitional / Frame-exit Completeness — GATING CHECK

**Gating predicate (i):** inquiry's commitments include terms inherited from prior findings — YES (12 priors per Synthesis Trigger).

**Gating predicate (ii):** those inherited terms are used across ≥2 distinct values/levels WITHIN the inquiry's own committed structures — YES. Four inherited terms are used with distinct values: `Route` (4 referent types), `Scope` (6 referent types), `Worker` (3+ referent types), `Aggregation` (4 referent values).

**Gating fires. Apply 4 meta-categories:**

**1. Existence Enumeration:**
- **`Route` referents project-wide:** top-level Route in route-card 17-attribute schema (14-39); sub-route 18-attribute (18-58); per-worker contributed Route (Q2-new); aggregated Route (Q2-new). All four in-frame.
- **`Scope` referents project-wide:** per-invocation (Q2 in-frame); cross-invocation (Q14 out-of-frame); per-discipline (Q6 in-frame as inheritance); per-Movement-Family (02-00 in-frame as inheritance); per-runner-session (16-31 in-frame as architectural constraint); per-autonomy-level (24-40 in-frame as L0/L1+/L2+ progression). Six referents; Q14 intentionally out-of-frame.
- **`Worker` referents project-wide:** cycle-worker (an MVL/MVLw pipeline session per 16-31); inquiry-worker (a worker writing to one inquiry folder per Q5+Q6); routeman-as-singleton-worker (14-39+16-31, distinct from cycle-worker); future system-worker (L2+ extension hook). Four referents; all distinguished by Q2's design.
- **`Aggregation` referents project-wide:** per-invocation cross-worker (Q2 in-frame); cross-invocation cross-time (Q14 out-of-frame but bridged); per-Movement-Family (in-frame as priority rule); telemetry (in-frame as roll-up). Four referents; three in-frame, one bridged.

**2. Role Assessment:**
- **Out-of-frame referent: Q14 cross-invocation scope.** Role: future aggregation scope when cross-invocation knowledge consolidation is implemented. Is Q2's coherence preserved if Q14 is ignored? YES — Q2's per-invocation operation does not depend on Q14 having shipped. But the design should NOT preclude Q14. The aggregation_scope hook is the explicit bridge that preserves Q14 extensibility without coupling Q2 to Q14's timeline.
- **Out-of-frame referent: future system-worker (L2+).** Role: a system Selector or autonomous routeman-trigger at L2+. Is Q2's coherence preserved if L2+ system-worker is ignored? YES — Q2's L0 design uses identity-preservation-override (priority is informational; human Selector decides). At L2+, the system Selector consumes the same metadata. No re-design needed.

**3. Verdict Rigor:**
- **Clean-boundary verdict: "Q2 vs Q14 is same-mechanism-different-scope."** Strongest counter: cross-invocation aggregation might involve fundamentally different rules — temporal decay (older Routes downweighted), cross-inquiry conflict resolution (different inquiries' Routes have different framings), incremental aggregation (don't re-aggregate everything on every invocation). Test on structural grounds: Q14 hasn't shipped; we don't have observed cross-invocation aggregation cases to test against. The same-mechanism claim is therefore LOW-CONFIDENCE projection. Mitigation: downgrade the same-mechanism claim; the aggregation_scope hook is a SAFE bet (it doesn't commit to same-mechanism; it just reserves the slot).
- **Clean-boundary verdict: "Singleton main navigator preserved."** Strongest counter: at L4+ with multi-head + system Selector, having ONE routeman as the only navigator might bottleneck. Test on structural grounds: this is genuinely L4+ territory; 14-39's singleton commitment was made for L0-L3 scale. Mitigation: explicit L4+ research-frontier flag (mirrors Q5's L4+ parallel-worker-locking deferral pattern).

**4. Residual / Coverage Justification:**
- Per-discipline scope concern: aggregation reads N workers' outputs across M disciplines. Is the per-discipline dispatch from 24-01 + 06-00 sufficient as inheritance, or does Q2's multi-worker context introduce new per-discipline aggregation rules? Apply Existence Enumeration: per-discipline aggregation values = {per-sensemaking, per-innovation, per-critique, per-decomposition, per-surfacing, per-finding, per-state, per-branch}. For each, Q6's per-discipline contract names the consumer reads; Q2's aggregation inherits these reads and applies them per-worker. NO new per-discipline aggregation rules are introduced by Q2's multi-worker frame. Inheritance is complete. Terminate recursion.

### Phase / Calibration-State (REQUIRED — phase-dependent rules)

Q2's rules ARE phase-dependent. L0 design is N=1 degenerate; L1+ activates N>1 paths; L2+ activates per-worker priority calibration and disagreement-detection thresholds. The phase-progression cut is the central design decision; perspective is required and is the central design output (see A4 below).

### Phase 2 Meta-Inspection (H1 candidate set + H3 question framing)

- **H1 candidate set check (from surfacing's 52 items):** Are any items doing the same thing structurally? I-R2-01 (single `worker_inquiry_path`) and I-R2-02 (list `worker_inquiry_paths`) differ in cardinality, not structural commitment — I-R2-02 is the safe superset (1-element list at N=1). I-R2-04 (both — field + ledger) covers the same surface as I-R2-02 + I-R2-03 combined. The H1 check surfaces that I-R2-02 dominates. Similarly, I-R3-05 (hybrid) dominates I-R3-01 + I-R3-02 + I-R3-03 individually (the hybrid IS the union).
- **H3 question framing check:** Is Q2's framing biased toward any shape? The "ship N=1 with extensibility hooks" framing pre-biases toward I-R6-02/04. Acceptable because the bias is structural (the L0 ship-state IS N=1; multi-head HAS NOT shipped), not stylistic. The "what happens when multi-head ships" question is genuinely open for L1+/L2+.

### Sense Version 3 (SV3 — Multi-Perspective Understanding)

Q2's design crystallizes around 4 layered commitments:
- **COMMIT-1:** Aggregation is a singleton-routeman INTERNAL operation (not multi-routeman coordination). Architecture-preserving.
- **COMMIT-2:** Dedup-surface = (movement_type + parent_route_id + Question_fingerprint) tuple. Structural, session-identity-blind, deterministic.
- **COMMIT-3:** Per-Movement-Family aggregation rules (inheriting 02-00 + 01-30) with per-discipline dispatch (inheriting 24-01 + 06-00) form the rule-table.
- **COMMIT-4:** Schema extensions (provenance_workers, aggregation_meta, worker_telemetry, optional dedup_evidence) + aggregation_scope parametric hook for Q14 = the extensibility infrastructure that lets L0 ship degenerate-clean at N=1 while preserving N>1 + Q14 transition without breaking changes.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity A1 — Dedup-surface definition

**Description:** The dedup-surface is named as (movement_type + parent_route_id + Question_fingerprint), but this is a specific candidate from the surfacing inventory (I-R1-01) — is this the whole pattern, or are there other dedup-surface formulations? (Specific-vs-pattern recognition cue + Load-bearing concept test apply.)

**Strongest counter-interpretation:** Content-hash dedup (I-R1-02) is structurally simpler and harder to game; just hash (Question text + Source-anchor section text). The 3-tuple includes movement_type which depends on the worker's classification (a derived field), whereas the content hash is purely input-derived.

**Why the counter fails (structural grounds):** The 3-tuple's movement_type isn't a worker-classification artifact — it's a structural property of the candidate determined by the worker pipeline's deterministic per-movement-type chain from 24-01. Two workers running the same MVL pipeline on the same cycle context will produce the same movement_type for the same Question. Furthermore, content hash alone fails to dedupe semantically-equivalent Questions phrased differently (e.g., "should we DEEPEN the X branch" vs "deepen X branch please") — these dedup under the 3-tuple via Question_fingerprint normalization but not under naive content hash. The 3-tuple is structurally stronger.

**Confidence:** HIGH (3-tuple components are each structurally grounded; content-hash alternative has a documented failure mode on semantic equivalence).

**Resolution:** dedup-surface = (movement_type + parent_route_id + Question_fingerprint) tuple, with Question_fingerprint defined as a normalized hash (lowercase + whitespace-collapse + punctuation-strip) of Question text.

**What is fixed:** the 3-tuple definition + Question_fingerprint normalization rule.
**What is no longer allowed:** ad-hoc dedup criteria; content-hash-only dedup.
**What now depends:** the dedup procedure in aggregation pseudocode; the `dedup_evidence` schema field.
**What changed:** the dedup operation has a deterministic, documentable rule.

### Ambiguity A2 — Per-Movement-Family aggregation rule specificity

**Description:** Per-Movement-Family rules (I-R4-04) inherit 02-00's per-route-type-split, but 02-00's split was for EMISSION POLICY (when to emit FRONTIER / REVISIT). Q2's per-Family rules are for AGGREGATION (dedup + priority). Is the per-Family split a structural distinction here, or is it borrowed inadvertently? (Load-bearing concept test — proxy-vs-structural.)

**Strongest counter-interpretation:** Per-Movement-Family aggregation rules might be over-fitting to 02-00's pattern. Maybe aggregation should be UNIFORM across Movement Families (one dedup rule, one priority rule, one telemetry rule), and per-Family variation belongs only to the EMISSION POLICY layer.

**Why the counter fails (structural grounds):** Progression Moves (DEEPEN/REFINE/PURSUE-SEED/INVESTIGATE-FRONTIER/DEVELOP/TERMINATE) are typically deeper-but-narrower — multiple workers converging on the same DEEPEN candidate is high-signal (vote-count for priority is structurally appropriate). Re-orientation Moves (RE-RUN DEEPER/WIDEN/REFRAME/DIFFERENT APPROACH/DIAGNOSE) are typically broader-and-comparative — different workers reaching different REFRAMEs is high-signal (preserving diversity; less aggressive dedup). Coordination Moves (REVISIT/UNBLOCK/MERGE/TEST/CONSOLIDATE) have structural pre-conditions (REVISIT's ≥3 prior cycles per 02-00; UNBLOCK's existing block; etc.) that affect aggregation differently. Per-Family variation is structural, not borrowed.

**Confidence:** HIGH (each Movement Family has a depth-vs-breadth posture that determines whether vote-count or diversity-preservation is the right priority rule).

**Resolution:** Per-Movement-Family aggregation rules are STRUCTURAL, with three rule-types:
- **Progression-Aggregation:** vote-count weighted by per-worker D1 confidence sum (more workers + higher confidence → higher priority).
- **Re-orientation-Aggregation:** diversity-preserving — minimal dedup (only exact 3-tuple matches dedup); per-worker rendering retained for distinct REFRAMEs / DIAGNOSES.
- **Coordination-Aggregation:** per-type pre-condition check inherited from the type's own rule (e.g., REVISIT ≥3 prior cycles), then per-Family default (vote-count similar to Progression).

**What is fixed:** the three rule-types and their structural rationale.
**What is no longer allowed:** uniform aggregation rule across Movement Families; ad-hoc per-type variation.
**What now depends:** the aggregation rule-table in SKILL.md; the per-Movement-Family dispatch code-path.
**What changed:** aggregation is now per-Movement-Family-typed; spec-coherence with 02-00 is structural inheritance.

### Ambiguity A3 — aggregation_scope as Q2-vs-Q14 bridge

**Description:** aggregation_scope is proposed as a parametric extension distinguishing per-invocation (Q2) vs cross-invocation (Q14) aggregation. The concept assumes Q2's mechanism generalizes to Q14. Is this a structural bridge or a hopeful extension? (Load-bearing concept test — discoverability + user-language alignment.)

**Strongest counter-interpretation:** Q14 (cross-invocation aggregation across time) might involve fundamentally different rules — temporal decay (older Routes downweighted), cross-inquiry conflict resolution (different inquiries' Routes have different framings), incremental aggregation (don't re-aggregate everything on every invocation). If so, the aggregation_scope hook is misleading; cross-invocation aggregation would need a different mechanism entirely.

**Why the counter fails (structural grounds):** The counter HAS merit. Q14 hasn't been designed; we don't know if cross-invocation aggregation reuses Q2's rules. The aggregation_scope hook is therefore a SAFE bet — it doesn't commit to same-mechanism; it just reserves the slot for parameterization. If Q14 reveals structural divergence, the slot accommodates a different rule per scope value. If Q14 reveals reuse, the slot is the activation switch. Either way, no breaking change.

**Confidence:** LOW for "same-mechanism" claim; HIGH for "aggregation_scope as parametric hook" (the hook is safe; the mechanism reuse is speculative).

**Resolution:** Ship the aggregation_scope hook at L0 with value `invocation` (Q2 default); reserve `cross_invocation` for Q14; DO NOT claim same-mechanism. The finding documents the hook as a BRIDGE-NOT-A-COMMITMENT.

**What is fixed:** aggregation_scope field present in schema; per-invocation value defined.
**What is no longer allowed:** claiming Q2's mechanism = Q14's mechanism without Q14 design work; embedding Q14 assumptions into Q2's L0 ship.
**What now depends:** Q14's eventual design (the hook accommodates either reuse or override).
**What changed:** Q14 scope distinction is now bridged-not-resolved; the same-mechanism speculation is downgraded.

### Ambiguity A4 — L0 vs L1+ vs L2+ phase progression cut

**Description:** The phase-progression cut is the central design decision. Where exactly does N=1 end and N>1 begin? Where exactly does L1+ end and L2+ begin?

**Strongest counter-interpretation:** Maybe N=1 vs N>1 isn't the right cut. Maybe N=1 should stay at L0 forever (multi-head never enabled in this project), and the L1+/L2+ progression is for other dimensions (more sophisticated dedup; LLM-judgment dedup; cross-worker priority calibration) at the same N=1.

**Why the counter fails (structural grounds):** The project's stated end-goal trajectory (per `project_end_goal_loop_architecture` memory) explicitly includes multi-head loops. The roadmap commits to multi-head shipping eventually. L0 = N=1 ship-state is degenerate; L1+ activation = N>1 detection (folder-presence-based; runner-supplied list). L2+ progression adds: per-worker priority calibration (calibrated per-worker confidence weighting); disagreement-detection threshold tuning (when to escalate cross-worker disagreement to ERROR vs FLAG); LLM-judgment dedup (Stage-2 from 24-01's pattern, activated when deterministic dedup proves insufficient). Phase boundaries are structurally aligned with project roadmap.

**Confidence:** HIGH (L0 → L1+ → L2+ progression mirrors the established pattern from Q3 / Q4 / Q5 / Q6 / 02-00 / 24-40 and aligns with the project's documented multi-head trajectory).

**Resolution:**
- **L0** = N=1 degenerate + schema extensions + per-Movement-Family rules (in degenerate form) + telemetry roll-up rule (single-tier verdict = sole verdict) + aggregation_scope=`invocation`.
- **L1+** = N>1 activation on multi-worker detection + dedup activation + provenance list expansion + disagreement-detection INFO emission.
- **L2+** = per-worker priority calibration + LLM-judgment-dedup fallback + disagreement-detection threshold tuning + cross-invocation extension (Q14 activation if Q14 shipped).

**What is fixed:** 3-tier progression and per-tier activation rules.
**What is no longer allowed:** skipping per-tier activation rules; conflating L1+ with L2+ activations.
**What now depends:** SKILL.md author can encode per-tier behavior tables directly.
**What changed:** phase progression has explicit activation rules per tier.

### Ambiguity A5 — Disagreement-detection vs identity-preservation tension (FF-Q2-S6)

**Description:** When two workers contribute conflicting candidates (one says DEEPEN, another says PURSUE-SEED for "same" Question), should aggregation flag the disagreement (INFO emission) or just emit both Routes (enumerate-all)?

**Strongest counter-interpretation:** Identity-preservation says enumerate-all — emit both Routes, let Selector decide. Disagreement is information, not an error. INFO emission adds noise to telemetry.

**Why the counter fails (structural grounds):** The counter is PARTIALLY correct. Aggregation MUST emit both Routes (enumerate-all). But disagreement-detection is NOT the same as gating either Route — it's a meta-signal about aggregation's input quality. If workers consistently disagree on the SAME Question's movement_type, the upstream worker pipeline may be calibration-divergent. INFO emission is a signal to /loop_diagnose or the LAYER-2 audit (06-00), not a Selector instruction. Both Routes are emitted; disagreement is annotated, not enforced.

**Confidence:** HIGH (disagreement is orthogonal to enumeration — both can happen simultaneously).

**Resolution:** disagreement-detection emits INFO via the per-worker telemetry sub-block (preserved verbatim per I-R3-01); both Routes are emitted via enumerate-all per FP1; no gating. At L0, disagreement-detection threshold is "every cross-worker movement_type conflict on identical (parent_route_id, Question_fingerprint)" — fires on every conflict. L2+ progression adds threshold tuning.

**What is fixed:** enumerate-all preserved; disagreement-detection as INFO-only meta-signal.
**What is no longer allowed:** gating any Route based on disagreement; treating disagreement as an error.
**What now depends:** disagreement-detection rule in aggregation pseudocode; per-worker telemetry sub-block schema.
**What changed:** dedup-vs-identity tension (FF-Q2-S6) is DISSOLVED — dedup operates on identity-key matches (where workers agree); disagreement-detection operates on partial-key matches (where workers disagree on movement_type for same question). Two orthogonal operations on the cross-worker contribution set.

### Sense Version 4 (SV4 — Clarified Understanding)

The 5 ambiguities resolve to a coherent design:
- Dedup-surface = 3-tuple (movement_type + parent_route_id + Question_fingerprint with normalization).
- Per-Movement-Family aggregation rules are STRUCTURAL (Progression vote-count; Re-orientation diversity-preserving; Coordination per-type-pre-condition + per-Family default).
- aggregation_scope is a parametric BRIDGE-NOT-COMMITMENT to Q14.
- L0 = N=1 degenerate + schema extensions; L1+ = N>1 activation; L2+ = calibration + LLM-judgment-dedup + Q14 activation.
- Disagreement-detection emits INFO via per-worker telemetry sub-block; enumerate-all preserved.

5/5 ambiguities resolved (3 HIGH + 1 LOW-claim-downgraded + 1 HIGH). Frontier flag FF-Q2-S6 dissolved.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

- Singleton main navigator (architecture invariant).
- File-mediated only (architecture invariant).
- Isolated session (architecture invariant).
- Enumerate-all (identity invariant).
- Observe-only (identity invariant).
- Singleton Route Map per invocation (corrected Q2 framing).
- Dedup-surface = 3-tuple (movement_type + parent_route_id + Question_fingerprint with normalization).
- Per-Movement-Family aggregation rules = STRUCTURAL (3 rule-types).
- aggregation_scope = parametric BRIDGE-NOT-COMMITMENT to Q14.
- L0/L1+/L2+ phase progression cuts with explicit per-tier activation rules.
- Disagreement-detection emits INFO; enumerate-all preserved.
- Schema extensions = `provenance_workers`, `aggregation_meta`, `worker_telemetry`, `dedup_evidence` (sub-aspect), `aggregation_scope`.
- Per-worker telemetry preserved verbatim + roll-up headline (5-tier worst-case-wins).
- Per-discipline dispatch inherited from 24-01 + 06-00.
- Hierarchical Route Map = two-axis (cross-worker width × stage-2 depth); aggregation composes both axes; sub-route dedup keyed by parent-route identifier.

### Eliminated

- Ad-hoc dedup criteria; content-hash-only dedup (A1).
- Uniform aggregation rule across Movement Families (A2).
- Same-mechanism claim for Q2-vs-Q14 (A3).
- Skipping per-tier activation rules; conflating L1+ with L2+ (A4).
- Gating any Route based on disagreement (A5).
- First-come-first-serve priority (I-R4-01).
- Ship N=1 only without hooks (I-R6-01).
- Ship full N>1 at first write (I-R6-03).
- Blanket deferral (I-R6-05).
- No-provenance (I-R2-05).
- Same mechanism, different scope claim without Q14 design (I-R7-03 → reduced to parametric hook only).

### Viable paths remaining

- The committed L0 design (ship N=1 with schema extensions + per-Movement-Family rules + telemetry roll-up + extensibility hooks + disagreement-detection).
- The L1+ activation path (N>1 detection; dedup activation; provenance expansion; disagreement-detection INFO).
- The L2+ progression (per-worker priority calibration; LLM-judgment-dedup fallback; disagreement-detection threshold tuning; Q14 activation).

### Sense Version 5 (SV5 — Constrained Understanding)

The design is constrained to: a singleton-routeman INTERNAL aggregation operation that ships at L0 with degenerate N=1 behavior + structurally-grounded schema extensions + per-Movement-Family aggregation rules + 5-tier verdict roll-up + per-worker telemetry preservation + extensibility hooks for Q14. The L1+/L2+ progression activates multi-worker, calibration, and cross-invocation paths. Most of the design documents existing patterns from 12 priors (~80%); small novel pieces are the dedup-surface 3-tuple, the per-Movement-Family aggregation rule typology, the aggregation_scope parametric hook, and the disagreement-detection meta-signal (~20%).

---

## Phase 5 — Conceptual Stabilization

The design is a Q2-aggregation-protocol that lives as ADDITIONAL SECTIONS in routeman's SKILL.md (per Q6 R1 drift-coordination — coordinated with Q5's protocol file via spec-coherence check). The protocol specifies:

- **Inputs:** per-worker artifacts via Q5 protocol + Q6 contracts.
- **Aggregation operation:** dedup-surface 3-tuple + per-Movement-Family rules + per-worker provenance preservation + telemetry roll-up + disagreement-detection.
- **Outputs:** singleton Route Map per invocation via 24-00 schema + 5 extensions (`provenance_workers`, `aggregation_meta`, `worker_telemetry`, `dedup_evidence`, `aggregation_scope`).
- **Phase progression:** L0/L1+/L2+ activation table with explicit per-tier behaviors.

Architecture invariants preserved (singleton, file-mediated, isolated, observe-only). Identity invariants preserved (enumerate-all + identity-preservation-override). L0 ship is degenerate-clean at N=1. L1+/L2+ activates multi-worker and calibration paths.

### Phase 5 Meta-Inspection (H6 model fit)

**Accommodation trigger check:** Did the model require patching across the 5 ambiguity collapses? A1, A2, A4 resolved with HIGH confidence on first attempt — no patching. A3 resolved with LOW confidence on the "same-mechanism" claim but HIGH confidence on the "parametric hook" alternative — model accommodated by downgrading the same-mechanism claim, not by patching. A5 dissolved a tension (FF-Q2-S6) by recognizing dedup operates on identity-key matches while disagreement-detection operates on partial-key matches — this was a re-framing, not a patch. Model fit is sound; Accommodation trigger does NOT fire.

### Final Sense Version (SV6 — Stabilized Model)

**Multi-head aggregation for routeman is a singleton-internal operation that ships at L0 as a degenerate N=1 case with structural extensibility hooks for N>1 and Q14.**

The operation reads N worker artifacts via the Q5 file-system protocol + Q6 file-shape contracts, applies per-Movement-Family aggregation rules with a 3-tuple dedup-surface and per-worker provenance preservation, emits a singleton Route Map per invocation via the 24-00 schema with 5 new extension fields (`provenance_workers`, `aggregation_meta`, `worker_telemetry`, `dedup_evidence`, `aggregation_scope`), and rolls per-worker telemetry into the Route Map's Telemetry block using the 5-tier verdict vocabulary from 06-00 with worst-case-wins aggregation.

**Per-Movement-Family aggregation** distinguishes Progression Moves (vote-count weighted by D1 confidence sum), Re-orientation Moves (diversity-preserving; minimal dedup; per-worker rendering retained), and Coordination Moves (per-type pre-condition + per-Family default).

**Disagreement-detection** emits INFO via the per-worker telemetry sub-block when workers conflict on movement_type for identical (parent_route_id, Question_fingerprint) partial-key matches; enumerate-all is preserved (both conflicting Routes are emitted).

**The aggregation_scope field** is a parametric bridge to Q14 (cross-invocation aggregation) that does NOT claim same-mechanism.

**The phase-progression cut:**
- L0 = N=1 degenerate + schema extensions + per-Movement-Family rules + telemetry roll-up + aggregation_scope=`invocation`.
- L1+ = N>1 activation + dedup + provenance expansion + disagreement-detection INFO.
- L2+ = per-worker priority calibration + LLM-judgment-dedup fallback + disagreement-detection threshold tuning + Q14 activation.

**The design is ~80% documentation** of existing patterns from 12 priors **+ ~20% novel commitments** (dedup-surface 3-tuple, per-Movement-Family aggregation typology, aggregation_scope parametric hook, disagreement-detection meta-signal).

### Difference from SV1

SV1 framed Q2 as "how does routeman aggregate across workers" — open and many-axis. SV6 commits to a specific singleton-internal degenerate-at-L0 design with structurally-grounded rules and explicit phase activation, anchored in 12 priors. Most of the design is inheritance + composition; the novel pieces are small and well-bounded. The frontier flag FF-Q2-S6 (dedup-vs-identity tension) is dissolved; FF-Q2-S1/S2/S3/S4/S5 are partially or fully addressed by the resolutions above:

- **FF-Q2-S1** (multi-head trigger predicate): folder-presence-based detection at L1+; runner-supplied list as override option at L2+.
- **FF-Q2-S2** (per-worker boundary delimiter): one worker = one inquiry folder containing `_state.md` with `Status: COMPLETE` (per Q5 write-completeness check).
- **FF-Q2-S3** (cross-worker scan order determinism): canonical ordering = lexicographic-sort on inquiry folder name (which embeds timestamp); 5-tier verdict roll-up is order-independent (Tech-3).
- **FF-Q2-S4** (schema-extension acceptance vs Q12): Q2's extensions are first-mover; Q12's eventual design must accommodate them; documented as inheritance-from-priority obligation.
- **FF-Q2-S5** (phase-progression cleanliness): L0 degenerate-clean (KI4); no multi-head assumption leaks into L0 runtime behavior because the multi-worker code paths are dormant.
- **FF-Q2-S6** (dedup-vs-identity tension): DISSOLVED via A5 (dedup operates on identity-key matches; disagreement-detection on partial-key matches; orthogonal operations).

## Telemetry

- **Phases run:** 5 (full SV1→SV6 progression).
- **Anchor types extracted:** 5 (Constraints, Key Insights, Structural Points, Foundational Principles, Meaning-Nodes).
- **Anchor counts:** 9 Constraints + 7 Key Insights + 7 Structural Points + 6 Foundational Principles + 6 Meaning-Nodes = 35 anchors.
- **Perspectives applied:** 9 (Technical/Logical, Human/User, Strategic/Long-term, Risk/Failure, Resource/Feasibility, Definitional/Internal Consistency, Definitional/Frame-exit Completeness [gated and fired with 4 meta-categories], Phase/Calibration-State [required and applied], + Phase 2 Meta-Inspection [H1/H3]).
- **Ambiguities collapsed:** 5 (A1 dedup-surface; A2 per-Movement-Family rule specificity; A3 aggregation_scope as bridge; A4 phase-progression cut; A5 disagreement-detection vs identity-preservation tension). Confidence: 4 HIGH + 1 HIGH-on-parametric-hook + LOW-on-same-mechanism-claim.
- **Frontier flags addressed:** 6/6 (FF-Q2-S1 through FF-Q2-S6 from surfacing). 1 fully dissolved (S6); 5 fully addressed; none escalated.
- **Meta-inspection hooks fired:** H1 (candidate set; informal); H2 (frame scope; via Frame-exit Completeness); H3 (question framing; informal); H4 (concept names; Phase 1 Meta + Phase 3 Load-bearing test for `dedup-surface` + `aggregation_scope`); H5 (motivating examples; flagged inverse risk in Phase 1 Meta); H6 (model fit; Accommodation trigger checked, did not fire); H7 (phase/calibration state; required, applied).
- **Failure modes checked:** Status Quo Bias / Premature Stabilization / Anchor Dominance / Perspective Blindness / Clean Resolution Trap / Self-Reference Blindness — none triggered. Frame-exit Completeness and Phase/Calibration-State perspectives applied to satisfy Perspective Blindness corrective on those axes.
- **Saturation indicators:** Perspective saturation = met (last 2 perspectives — Phase/Calibration-State and Phase 2 Meta-Inspection — produced no new anchor types beyond confirming existing). Ambiguity resolution ratio = 5/5 = 100%. SV delta = substantial (SV1 was open-and-many-axis; SV6 is specific-and-anchored-in-12-priors). Anchor diversity = 5 types × 9 perspectives = high.

**Overall: PROCEED**
