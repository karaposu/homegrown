---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Multi-head aggregation protocol for routeman (Q2 dive-deep)

## Question

How does routeman aggregate next-moves across N parallel worker sessions into a single Route Map per invocation, under the corrected isolated-session + file-scanning architecture, in a way that:

- Specifies the dedup criterion across workers (which candidates count as "the same" across workers and which as distinct).
- Preserves per-worker provenance (which worker produced which candidate).
- Aggregates per-worker telemetry (per-discipline verdicts + structural-check pass/fail + convergence telemetry) into a singleton Route Map's Telemetry block.
- Allocates priority under contention (when multiple workers contribute candidates of the same Movement Type).
- Composes the hierarchical Route Map's two orthogonal axes (cross-worker width × stage-2 sub-route depth from 18-58's staged-mapping FF-3).
- Makes the first-ship-vs-deferred phase-progression cut explicit (what ships at L0; what hooks open at L1+; what defers to L2+ when multi-head materializes).
- Documents the scope distinction from Q14 (cross-invocation aggregation across time) without conflating the two.

The Goal: produce a SKILL.md-authorable design that fits the project's current L0 phase (no premature multi-head infrastructure when multi-head hasn't shipped), preserves routeman's identity (singleton main navigator, file-mediated, enumerate-all, observe-only), and provides extensibility hooks at L0 so the N>1 path doesn't require breaking changes.

## Finding Summary

- **The Q2 protocol ships as 8 new sections in routeman's SKILL.md** — one section per Decomposition piece (P1 architectural pre-conditions + inheritance; P2 dedup-surface + provenance schema; P3 per-Movement-Family aggregation rules + per-discipline dispatch + disagreement-detection; P4 telemetry roll-up + worker_telemetry; P5 schema-unification + aggregation_scope + Q14 distinction; P6 hierarchical Route Map composition; P7 L0/L1+/L2+ phase progression activation table; P8 SKILL.md location + R1 drift-coordination spec-coherence). Location matches Q6's validation-layer precedent (single-consumer scope = routeman).

- **The dedup-surface is a 3-tuple** — `(movement_type, parent_route_id, Question_fingerprint)` where Question_fingerprint is a normalized hash (lowercase + whitespace-collapse + punctuation-strip). The 3-tuple is session-identity-blind and deterministic across workers (each component is derived from cycle content, not worker-session identity). Per-Route `provenance_workers: List[str]` field captures dedup output; degenerate at N=1 as a 1-element list. Optional `dedup_evidence: dict` field records the matched-fields when dedup fires. The dedup operation is structurally orthogonal to gating: deduped candidates are emitted with MERGED provenance, not dropped.

- **Per-Movement-Family aggregation rules form a 3-rule typology** inheriting the per-route-type-split principle from 02-00 (Option 13 hybrid) and the Movement Family categorization from 01-30. **Progression-Aggregation** (DEEPEN, REFINE, PURSUE-SEED, INVESTIGATE-FRONTIER, DEVELOP, TERMINATE): vote-count weighted by per-worker D1 confidence sum. **Re-orientation-Aggregation** (RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE): diversity-preserving — minimal dedup (only exact 3-tuple matches); per-worker rendering retained for distinct REFRAMEs/DIAGNOSES. **Coordination-Aggregation** (REVISIT, UNBLOCK, MERGE, TEST, CONSOLIDATE): per-type pre-condition check (e.g., REVISIT's ≥3 prior cycles inherited from 02-00) + per-Family default (vote-count similar to Progression). Per-discipline dispatch reads inherit the per-movement-type chain pattern from 24-01 and per-mode dispatch table pattern from 06-00.

- **Telemetry aggregation is hybrid** — per-worker telemetry preserved verbatim in `worker_telemetry: List[dict]` sub-block + aggregate verdict roll-up using the 5-tier vocabulary from 06-00 (PROCEED / FLAG / RE-RUN / INFO / ERROR) with worst-case-wins (any ERROR → ERROR; any FLAG → FLAG; INFO additive; else PROCEED). The roll-up rule is monotonic + order-independent (satisfying the determinism invariant). The hybrid serves two consumption modes: human Selector reads the headline + dives into sub-block on demand; LAYER-2 audit at 06-00 always reads the sub-block per its per-mode dispatch pattern.

- **5 new schema fields** unified at P5 — `provenance_workers: List[str]` per Route (1-element at N=1); `aggregation_meta: dict` top-level (`{worker_count: N, ...}`); `worker_telemetry: List[dict]` per-Route-Map; `dedup_evidence: dict` per Route (optional, present when dedup fires); `aggregation_scope: enum` with values `invocation` (L0 default) and `cross_invocation` (reserved for Q14). All fields ship at L0 with degenerate values; activation at L1+/L2+ does NOT require breaking changes. R1 drift-coordination meta-process (inherited from Q6) extends to cross-worker schema additions: when 24-00 or 18-58's schemas change, Q2's schema-extension fields must be reviewed for compatibility in the same commit.

- **aggregation_scope is a BRIDGE-NOT-COMMITMENT to Q14** — the parametric hook reserves the slot for cross-invocation aggregation WITHOUT claiming Q2's mechanism = Q14's mechanism. Q14's eventual design can override the `cross_invocation` value's rules without breaking L0. The Sensemaking A3 ambiguity collapse explicitly downgraded the same-mechanism claim to LOW confidence; only the parametric-hook commitment is HIGH confidence.

- **Hierarchical Route Map composition is two-axis orthogonal** — cross-worker width (N parallel workers contributing) × stage-2 sub-route depth (parent-route expansion from 18-58). The aggregation rule applies independently at both layers: top-level cross-worker dedup AND sub-route dedup (keyed by parent_route_id matching). Per-Movement-Family rules apply at both layers (Progression-Aggregation at top-level = vote-count; Progression-Aggregation at sub-route = vote-count within parent-route's sub-route set). Hybrid choice: top-level cross-worker dedup + per-worker sub-route trees preserved when meta-reasoning differs substantially (per 24-00's `meta_reasoning_revision_history` schema).

- **Disagreement-detection emits INFO via the per-worker telemetry sub-block** when workers conflict on movement_type for identical (parent_route_id, Question_fingerprint) partial-key matches. Enumerate-all preserved: BOTH conflicting Routes are emitted; no Route is gated. The INFO signal is a meta-signal about aggregation's input quality, consumed by 06-00 audit per its per-mode dispatch pattern (calibration-divergence detection at L1+; persistent-disagreement FLAG at L2+). The dedup-vs-identity tension (frontier flag FF-Q2-S6 from Surfacing) is dissolved: dedup operates on identity-key matches (where workers agree); disagreement-detection operates on partial-key matches (where workers disagree on movement_type for the same question).

- **L0/L1+/L2+ phase progression** — explicit per-tier activation table. **L0** = N=1 degenerate + schema extensions present (all fields with degenerate values: `provenance_workers=[single]`, `aggregation_meta={worker_count: 1}`, `worker_telemetry=[single_block]`, `aggregation_scope=invocation`) + per-Movement-Family rules in degenerate form (1-worker = no dedup needed; 1-worker = no priority contention; 1-worker = no disagreement possible) + telemetry roll-up rule (single-tier verdict = sole verdict). **L1+** = N>1 activation trigger = folder-presence-based detection (multiple completed worker inquiry folders within scan scope) OR runner-supplied worker list (override option) + dedup activation + provenance list expansion + disagreement-detection INFO emission begins firing. **L2+** = per-worker priority calibration (calibrated D1 weighting) + LLM-judgment-dedup fallback (Stage-2 pattern from 24-01) + disagreement-detection threshold tuning + cross-invocation extension (aggregation_scope = `cross_invocation` activation if Q14 has shipped).

- **Failure-mode handling under multi-worker aggregation** — composes three sub-rules. (a) Edge case: top-level vs sub-route classification divergence → over-coverage (two separate Routes), not information loss (asymmetric-failure principle from /surfacing). (b) Worker verdict-line FLAG/RE-RUN → contribution INCLUDED in aggregation per observe-only invariant; FLAG/RE-RUN propagated via per-worker telemetry sub-block; aggregate verdict roll-up handles propagation; aggregation does NOT halt. (c) Partial workers + mid-write workers + malformed contributions inherited from Q5/Q6 (atomic-write convention + validation layer at routeman SKILL.md). The unified architecture preserves no-information-loss + non-gating + non-halt invariants.

- **The design is ~80% documentation of existing patterns inherited from 12 priors + ~20% genuinely-novel commitments.** Novel pieces: (1) 3-tuple dedup-surface with Question_fingerprint normalization; (2) per-Movement-Family aggregation rule typology (3 rule-types); (3) aggregation_scope parametric hook for Q14 bridge; (4) disagreement-detection INFO meta-signal. The 80%-doc/20%-novel pattern matches Q5 (07-30) and Q6 (09-00) — three consecutive frontier-question resolutions following the same shape.

## Finding

### Context

routeman is the cycle-consumer / sibling-navigator / prescriptive-residual discipline introduced by the routeman design memo at `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`, formerly named `/navigation`. Under the corrected isolated-session + file-scanning architecture committed by `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md`, routeman runs in its own isolated session and reads worker-produced inquiry-folder artifacts from the file system (rather than receiving cycle output in-context). When the project's stated end-goal trajectory of multi-head loops materializes (per `project_end_goal_loop_architecture` memory), multi-head will be realized at the WORKER level: N parallel worker sessions running MVL/MVLw pipelines and writing to N inquiry folders. routeman REMAINS a singleton main navigator scanning across all N folders per invocation.

Q2 is the design question for routeman's aggregation operation in that multi-worker setting. The frontier-questions finding at `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` flagged Q2 as Tier-1 gating for routeman SKILL.md authoring: without a committed aggregation protocol, the SKILL.md author cannot specify what happens when N>1 inquiry folders are scanned in one invocation. Q2 must commit to dedup, provenance, telemetry, priority, hierarchical composition, phase progression, and Q14 scope distinction in a way that ships AT L0 (where N=1 is the current state) and provides a clean activation path AT L1+/L2+ (when multi-head ships) — without premature infrastructure that would require multi-head to ship before it can be tested.

This finding's design is the answer.

### 1. Architectural pre-conditions + inheritance (P1)

The Q2 protocol rests on 9 architectural invariants + inheritance from 12 priors. These are pre-conditions, not negotiables.

**9 invariants preserved:**

1. **Singleton main navigator** (from 14-39 + 16-31): aggregation is INTERNAL to one routeman invocation; not multi-routeman coordination.
2. **File-mediated only** (from 16-31 + Q5 at 07-30): all aggregation inputs read from worker inquiry-folder artifacts via the Q5 protocol; outputs written to routeman's `_navig.md` + `routeman.md` per 24-00 schema.
3. **Isolated session** (from 16-31): aggregation runs in routeman's own session; no cross-session state.
4. **Enumerate-all** (from 02-00 + 06-00 + 14-39): no movement type or candidate is gated by aggregation; identity-preservation invariant.
5. **Observe-only** (from 06-00 + Q5): routeman does NOT modify worker artifacts; reads only.
6. **Single Route Map per invocation** (corrected Q2 framing from 16-31): the singleton routeman produces ONE aggregated Route Map per invocation; not N per-head Route Maps.
7. **Schema commitment**: route-card has 17 attributes (top-level) / 18 (sub-routes) per 18-58 staged-mapping. Q2 schema extensions are additive-only.
8. **Phase progression**: L0/L1+/L2+ activation per 24-40 autonomy register; 3-tier failure handling (INFO / ERROR / ERROR) inherited.
9. **80%-documentation / 20%-novel pattern**: Q2 follows the same shape as Q5 + Q6.

**5 protocol inheritances:**

- **Q5 file-system protocol** at `cognitive_harness/protocols/inquiry_filesystem_protocol.md`: folder topology (per-inquiry; per-branch); atomic-write convention; verdict-line two-part write-completeness check; scan-detection (full at L0; mtime-filtered at L2+); routeman's completion-emission shape.
- **Q6 file-shape contracts** (sections in the Q5 file): 5 per-discipline contracts + 2 inquiry-level contracts + validation layer in routeman SKILL.md; section-level minimum-shape granularity.
- **24-00 routeman persistence**: `_navig.md` + `routeman.md` schemas; hybrid placement by invocation scope; persistent + in-place evolution + append lifecycle; `meta_reasoning_revision_history` schema.
- **24-01 adaptive-guidance**: per-movement-type chain pattern (Stage 1 deterministic); Stage 2 LLM-judgment-within-constraints; cycle-output-absent graceful fallback.
- **06-00 LAYER-2 audit**: per-mode dispatch table pattern; 5-tier verdict vocabulary (PROCEED / FLAG / RE-RUN / INFO / ERROR); audit reads aggregated Route Map + per-worker telemetry sub-block.

### 2. Dedup-surface + provenance schema (P2)

**Dedup-surface** = `(movement_type, parent_route_id, Question_fingerprint)` 3-tuple.

**Question_fingerprint normalization rule**: lowercase + whitespace-collapse + punctuation-strip + hash (e.g., SHA256 truncated). Deterministic across workers.

**parent_route_id handling**: null for top-level Routes; populated for sub-routes from 18-58's stage-2 expansion. The 3-tuple's behavior in both cases is structurally clean.

**Edge case (R1 from critique)**: when one worker classifies a candidate as top-level (parent_route_id=null) and another worker classifies the structurally-equivalent candidate as a sub-route (parent_route_id=populated), dedup does NOT fire under the 3-tuple; the two Routes are emitted separately. Asymmetric-failure principle preserved: over-coverage (Selector triage), not information loss. L2+ revival trigger: if the pattern is observed ≥3 times, consider per-classification dedup-key normalization or LLM-judgment-dedup activation.

**Provenance schema field**: `provenance_workers: List[str]` per Route — the list of worker_inquiry_paths whose contributions matched the 3-tuple. At N=1, the list has 1 element ([single_worker]). At N>1 after dedup, the list has 1-N elements depending on which workers contributed the matched candidate.

**Optional dedup_evidence field**: `dedup_evidence: dict` per Route — records the matched-field values when dedup fires (e.g., the matched movement_type + parent_route_id + Question_fingerprint values + any meta-reasoning divergence that was preserved per `meta_reasoning_revision_history`). Absent at N=1; useful for L1+ audit; useful for /loop_diagnose.

### 3. Per-Movement-Family aggregation rules + per-discipline dispatch + disagreement-detection (P3)

**3 rule-types** form the per-Movement-Family typology:

| Family | Rule | Rationale |
|---|---|---|
| **Progression** (DEEPEN, REFINE, PURSUE-SEED, INVESTIGATE-FRONTIER, DEVELOP, TERMINATE) | Vote-count weighted by per-worker D1 confidence sum | Deeper-but-narrower posture: multiple workers converging on same candidate = high-signal. |
| **Re-orientation** (RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE) | Diversity-preserving (minimal dedup; only exact 3-tuple matches dedup; per-worker rendering retained) | Broader-and-comparative posture: different workers reaching different REFRAMEs/DIAGNOSES = high-signal worth preserving. |
| **Coordination** (REVISIT, UNBLOCK, MERGE, TEST, CONSOLIDATE) | Per-type pre-condition check (e.g., REVISIT ≥3 prior cycles per 02-00) + per-Family default (vote-count similar to Progression) | Structural pre-conditions (REVISIT's prior-cycle availability; UNBLOCK's existing block) shape aggregation independently of vote-count. |

**Per-discipline dispatch** inherits two patterns:
- **24-01's per-movement-type chain** (Stage 1 deterministic): for each Route, reads from per-Family-specified discipline files (e.g., Progression reads from `critique.md` SURVIVE markers + `sensemaking.md` Key-Insights anchors; Re-orientation reads from `sensemaking.md` Constraints + `finding.md` Open-Questions; etc.). The chain falls back gracefully if a discipline file is absent (e.g., decomposition.md if /MVL classic pipeline rather than /MVL+/MVLw).
- **06-00's per-mode dispatch table** (per-mode reads): the aggregation operation dispatches per-Family AND per-worker, producing a (Family × worker) read matrix. Implementation: a small lookup table in routeman SKILL.md.

**Disagreement-detection** rule: triggers when workers conflict on movement_type for identical (parent_route_id, Question_fingerprint) partial-key matches (i.e., same Question + same parent context, but different classification). Emits INFO via the per-worker telemetry sub-block.

**Consumption contract (R2 from critique)**: disagreement-detection INFO emissions are consumed by the LAYER-2 audit (06-00) per its per-mode dispatch pattern. Specifically:
- The audit's calibration-divergence detection at L1+ reads cross-worker movement_type-conflict INFO emissions.
- At L2+, persistent disagreement on the same (parent_route_id, Question_fingerprint) across N consecutive invocations may FLAG the upstream worker pipeline as calibration-divergent.
- Spec-coherence with 06-00 documented at Q2 SKILL.md authoring time per the R1 drift-coordination meta-process from Q6.

**Identity-preservation override**: priority allocation is INFORMATIONAL, not gating. Downstream Selector (human at L0/L1; system at L2+) decides what to act on. No Route is gated by aggregation.

### 4. Telemetry roll-up + worker_telemetry (P4)

**Per-worker telemetry preservation**: `worker_telemetry: List[dict]` sub-block in the aggregated Route Map. One dict per worker; each dict reads at-source from the per-worker artifacts via Q5 protocol + Q6 contracts (per-discipline verdict lines; structural-check pass/fail; convergence telemetry). Preservation is VERBATIM — no information loss.

**Aggregate verdict roll-up rule**: 5-tier worst-case-wins.

```
if any worker's verdict is ERROR  → aggregate verdict = ERROR
elif any worker's verdict is FLAG → aggregate verdict = FLAG
elif any worker's verdict is RE-RUN → aggregate verdict = RE-RUN
elif any worker emits INFO        → aggregate verdict = PROCEED + INFO additive
else                              → aggregate verdict = PROCEED
```

The roll-up is monotonic + order-independent. Determinism invariant (frontier flag FF-Q2-S3 from Surfacing) satisfied.

**Empty aggregation case**: all N workers produced no candidates → emit empty Route Map with aggregate verdict INFO + note "no candidates from any worker."

**Consumption modes**:
- **Human Selector** (L0/L1): reads aggregate verdict + scans Route Map headlines; dives into `worker_telemetry` sub-block on demand for debugging or audit.
- **LAYER-2 audit (06-00)**: always reads `worker_telemetry` sub-block per its per-mode dispatch pattern.
- **System Selector** (L2+): reads aggregate verdict + per-Route fields per system-Selector spec (when shipped).

### 5. Schema-unification + aggregation_scope + Q14 distinction (P5)

**5 new schema fields**:

| Field | Location | L0 degenerate value | L1+ activated value |
|---|---|---|---|
| `provenance_workers: List[str]` | per Route | `[single_worker_path]` | N-element list |
| `aggregation_meta: dict` | top-level Route Map | `{worker_count: 1}` | `{worker_count: N, ...}` |
| `worker_telemetry: List[dict]` | per-Route-Map | `[single_telemetry_block]` | N-element list |
| `dedup_evidence: dict` | per Route (optional) | absent | present when dedup fires |
| `aggregation_scope: enum` | per Route Map | `invocation` | `invocation` at L1+ still; `cross_invocation` at L2+ if Q14 ships |

All fields ship at L0 with degenerate values. The N=1 case is structurally the degenerate case of N-worker aggregation (1-element list-merge). N>1 activation at L1+ does NOT require breaking changes — only activation of multi-worker code paths.

**aggregation_scope is a BRIDGE-NOT-COMMITMENT to Q14.** The hook reserves the slot for cross-invocation aggregation (Q14) at the `cross_invocation` value WITHOUT claiming Q2's mechanism = Q14's mechanism. The Sensemaking A3 ambiguity collapse explicitly downgraded the same-mechanism claim to LOW confidence. Q14's eventual design can override the `cross_invocation` value's rules without breaking L0 behavior. The L0 cost of the hook is minimal: one enum field with one valid value.

**Q14 scope distinction**: Q2 = per-invocation cross-worker aggregation; Q14 = per-future-design cross-invocation aggregation; same parametric hook, potentially different rules at the `cross_invocation` value.

**Schema-extension compatibility check** (per R1 drift-coordination from Q6): new fields coexist with 24-00's `meta_reasoning_revision_history` and 18-58's 17/18-attribute commitments without breaking changes. Q12 frontier obligation (routeman-specific schema extensions from 24-00) — Q2's additions are first-mover; Q12's eventual design must accommodate them.

### 6. Hierarchical Route Map composition (P6)

The aggregated Route Map has two orthogonal structural axes:
- **Cross-worker width**: N parallel workers contributing Routes.
- **Stage-2 sub-route depth**: per-parent-route expansion from 18-58's staged-mapping.

The aggregation rule applies INDEPENDENTLY at both layers:

**Top-level layer**: cross-worker dedup using the 3-tuple (parent_route_id=null); per-Movement-Family rules apply; per-worker provenance preserved per Route.

**Sub-route layer**: cross-worker dedup keyed by parent_route_id matching (sub-routes from different workers with the SAME parent Route → eligible for dedup; sub-routes with different parents → preserved as distinct); per-Movement-Family rules apply within each parent's sub-route set; per-worker provenance preserved per sub-route.

**Hybrid choice**: top-level cross-worker dedup + per-worker sub-route trees preserved when meta-reasoning differs substantially. Meta-reasoning aggregation per 24-00's `meta_reasoning_revision_history` — when the same Route appears in multiple workers with substantively different meta-reasoning content, both are preserved in the history field.

**L2+ extensibility**: if hierarchical depth grows beyond stage-2 (e.g., stage-3 sub-sub-routes), the per-axis rule structure remains independent — N-axis composition extends the two-axis rule without architectural change.

### 7. L0/L1+/L2+ phase progression activation table (P7)

Explicit per-tier activation, with determination mechanism named for each runtime trigger.

**L0 (current project state, multi-head not shipped):**
- N=1 degenerate operation.
- Schema extensions PRESENT with degenerate values (`provenance_workers=[single]`, `aggregation_meta={worker_count: 1}`, `worker_telemetry=[single_block]`, `aggregation_scope=invocation`, `dedup_evidence` absent).
- Per-Movement-Family rules in degenerate form (1-worker = no dedup needed; 1-worker = no priority contention; 1-worker = no disagreement possible).
- Telemetry roll-up rule active (single-tier verdict = sole verdict; 5-tier vocabulary inherited from 06-00).
- aggregation_scope = `invocation`.

**L1+ activation:**
- **N>1 trigger** (determination mechanism explicit): folder-presence-based detection — multiple completed worker inquiry folders within scan scope (each with `_state.md` Status COMPLETE + verdict-line per Q5's two-part write-completeness check). OVERRIDE option: runner-supplied worker list (e.g., explicit `--workers <paths>` parameter to routeman invocation).
- Dedup activation: 3-tuple dedup fires on cross-worker candidate matches.
- Provenance list expansion: `provenance_workers` becomes multi-element.
- Disagreement-detection INFO emission begins firing.
- **Verdict-line handling (R3 from critique)**: if any worker's verdict-line is FLAG or RE-RUN (not PROCEED), the worker's contribution IS still included in aggregation per the observe-only invariant; the FLAG/RE-RUN status is propagated to the per-worker telemetry sub-block; the aggregate verdict roll-up rule (5-tier worst-case-wins) handles propagation to the aggregate verdict; aggregation does NOT halt. The human Selector (L0/L1) or system Selector (L2+) reads the per-worker telemetry sub-block to determine action.

**L2+ activation:**
- Per-worker priority calibration: calibrated per-worker D1 weighting based on per-worker prior-invocation accuracy (when calibration data accumulates).
- LLM-judgment-dedup fallback: Stage-2 pattern from 24-01 activated when deterministic 3-tuple dedup proves insufficient (e.g., R1 edge case observed ≥3 times).
- Disagreement-detection threshold tuning: when to escalate cross-worker disagreement from INFO to FLAG to ERROR.
- Cross-invocation extension: `aggregation_scope = cross_invocation` activation if Q14 has shipped.

Activation triggers are time-bound (specific autonomy-register transitions per 24-40), condition-bound (multi-worker detection; calibration-data thresholds), or observable (R1 edge case occurrence count). No "eventually" / "when appropriate" / "as needed" triggers.

### 8. SKILL.md location + R1 spec-coherence (P8)

**Location**: Q2's protocol sections live as ADDITIONAL SECTIONS in `routeman` SKILL.md. This matches Q6's validation-layer location decision (single-consumer scope = routeman). Co-location of file-system protocol (Q5 file), file-shape contracts (Q5 file's sections), validation layer (routeman SKILL.md per Q6), and aggregation protocol (routeman SKILL.md per Q2) keeps the related concerns navigable.

**Alternative considered + KILLed-with-seed**: separate file at `cognitive_harness/protocols/aggregation_protocol.md`. KILLed-with-seed because at L0 single-consumer scope (routeman), co-location is parsimonious; the seed preserves revival at L1+ if single-consumer scope expands (e.g., audit or another runner becomes a consumer of the aggregation protocol).

**R1 drift-coordination scope extension**: Q6's R1 meta-process (when a discipline spec changes a required-section heading text, the protocol's corresponding contract section MUST be updated in the same commit) extends to Q2's cross-worker schema additions: when 24-00 or 18-58's schemas change, routeman SKILL.md's aggregation schema-extension fields must be reviewed for compatibility in the same commit. Drift between schemas and aggregation rules is prevented at commit time.

**Cross-references in routeman SKILL.md** to all 12 inherited priors:
- Q5 protocol file (file-system reads) + Q6 contract sections (per-discipline contract conformance) + 24-00 schema (`_navig.md` / `routeman.md` structure) + 18-58 schema (17/18-attribute commitments) + 02-00 emission policy (per-Route-Type-split inheritance) + 24-01 + 06-00 (per-mode dispatch pattern) + 14-39 (singleton-main-navigator commitment) + 24-40 (L0/L1+/L2+ progression + 3-tier failure handling) + 16-31 (isolated-session + file-scanning architecture) + 01-30 (Movement Family categorization) + the frontier-questions finding (Q2 framing source).

## Inherited Commitments Re-test

This finding's `_branch.md` declared a Synthesis Trigger listing 12 priors. Per CONCLUDE's Synthesis re-test enforcement, each prior's load-bearing commitment is RE-TESTED with cited evidence or explicitly INHERITED-WITHOUT-RE-TEST with reason.

- **Commitment:** routeman is a singleton main navigator with cycle-consumer / sibling-navigator / prescriptive-residual layered identity; EF-1 commitment to enumeration-first preserving multi-head.
  - **Source:** `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** P1 explicitly preserves singleton + sibling-navigator + cycle-consumer invariants. EF-1's "enumeration-first preserving multi-head" maps directly to the L0=N=1-degenerate + L1+=N>1-activation pattern (N>1 is the realization of multi-head; aggregation enumerates ALL contributions). Identity-preservation override on priority allocation (FP2) operationalizes enumerate-all.

- **Commitment:** Multi-head is realized at the WORKER level (N parallel worker sessions writing to N inquiry folders); routeman remains a singleton scanning across all; file-mediated input contract; no in-context cycle output passing.
  - **Source:** `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Entire Q2 design predicated on file-mediated scanning of N worker inquiry folders (P1 invariant 2; P2 reads per Q5 protocol; P3 per-discipline dispatch reads per Q6 contracts). KI1 in Sensemaking explicitly re-frames "multi-head aggregation" as "multi-worker-cycle aggregation by the singleton routeman." No in-context passing anywhere in the design.

- **Commitment:** Point 1 (hybrid two-stage staged route mapping with selective-runtime trigger) + Point 2 (length-bounded `why_this_might_be_important` meta-reasoning field) + FF-3 hierarchical Route Map consumption lives within Q2's scope; sub-routes have 18-attribute schema.
  - **Source:** `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** P6 (hierarchical Route Map composition) explicitly composes the two-axis structure with stage-2 sub-routes; sub-route dedup keyed by parent_route_id matching; per-Movement-Family rules apply at both layers. Meta-reasoning field aggregation per 24-00's `meta_reasoning_revision_history` preserves divergent meta-reasoning across workers (KI7 orthogonality).

- **Commitment:** `_navig.md` + `routeman.md` schemas + hybrid placement by invocation scope + persistent + in-place evolution + append lifecycle + two-tier boundary with `branch_inquiry.md`.
  - **Source:** `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** P5 schema-unification commits to additive-only schema changes that coexist with 24-00's existing fields (no renames; no semantic changes). Q2's aggregated Route Map is written to `_navig.md` + `routeman.md` per the existing 24-00 schema with the 5 new extension fields. R1 drift-coordination (P8) keeps Q2's extensions coherent with 24-00.

- **Commitment:** L0/L1+/L2+ phase progression via `docs/autonomy_level.md` + 3-tier failure handling (INFO/ERROR/ERROR) + transition_history.
  - **Source:** `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** P7 (phase progression activation table) explicitly maps to L0/L1+/L2+ per autonomy-register transitions. Telemetry roll-up rule (P4) uses 5-tier vocabulary that extends 24-40's 3-tier (PROCEED/FLAG/RE-RUN are routeman's standard verdicts; INFO/ERROR inherited from 24-40). Activation triggers at L1+/L2+ use the autonomy-register's `current_level` field via 24-40's 3-tier read protocol.

- **Commitment:** Two-stage anchor-then-refine mechanism: Stage 1 deterministic per-movement-type chain; Stage 2 LLM-judgment-within-constraints; per-Route confidence labels; cycle-output-absent graceful fallback.
  - **Source:** `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** P3 per-discipline dispatch directly inherits 24-01's per-movement-type chain pattern (per-Family rule dispatch reads per-discipline artifacts via the chain). P2 dedup operation is Stage 1-like (deterministic 3-tuple); LLM-judgment-dedup is L2+ fallback matching 24-01's Stage 2 pattern. P4 telemetry roll-up handles cycle-output-absent gracefully (empty aggregation case).

- **Commitment:** Movement Family primary axis (Progression 6 / Re-orientation 5 / Coordination 5) + 6 secondary attributes per type; per-type coordinate table preserving all 16 types.
  - **Source:** `devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** P3 per-Movement-Family aggregation rule typology DIRECTLY inherits the 3-Family categorization (Progression-Aggregation; Re-orientation-Aggregation; Coordination-Aggregation). The depth-vs-breadth posture differences justifying the typology are derived from the Family taxonomy (Sensemaking A2). All 16 types covered by the 3 rule-types.

- **Commitment:** Option 13 (Hybrid) confidence-graduated emission + per-route-type-split + D1 confidence labels (LOW/MED/HIGH at per-discipline-N 20/30) + per-discipline-N source deferred with first-ship LOW fallback + downstream-decides-via-metadata pattern + two-epoch framing.
  - **Source:** `devdocs/inquiries/2026-05-24_02-00__investigate_frontier_revisit_emission_policy/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** P3 per-Movement-Family aggregation rules inherit the per-route-type-split principle (Sensemaking A2 confirms structural inheritance, not borrowed). P3 Progression-Aggregation uses D1 confidence sum for vote-count weighting — D1 labels feed priority. FP3 (downstream-decides-via-metadata) preserved throughout (priority is informational, not gating; Selector applies own filtering). Two-epoch framing applicable: L0 = epoch-1 (D1 variance dormant at LOW fallback); L1+/L2+ = epoch-2 (variance active when per-discipline-N source ships).

- **Commitment:** LAYER-2 audit at `cognitive_harness/protocols/layer2_audit.md`; runner-invoked at routeman invocation-end (L1+); per-mode dispatch table pattern; substrate consumption; 5-tier verdict format; spec-coherence check against routeman SKILL.md.
  - **Source:** `devdocs/inquiries/2026-05-24_06-00__layer2_audit_mechanism_design/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** P3 R2 (consumption contract) explicitly commits to disagreement-detection INFO consumption by 06-00 audit's per-mode dispatch pattern (calibration-divergence detection at L1+; persistent-disagreement FLAG at L2+). P4 telemetry roll-up uses 06-00's 5-tier vocabulary verbatim. Per-discipline dispatch in P3 inherits 06-00's per-mode dispatch table pattern. Spec-coherence check via R1 drift-coordination (P8).

- **Commitment:** Q5 file-system protocol: folder topology + atomic-write convention + verdict-line two-part write-completeness check + scan-detection (full at L0; mtime-filtered at L2+) + routeman's completion-emission (`_navig.md` + `routeman.md` + `routeman_status: COMPLETE` field) + partial-failure handling (detection-only via 3-tier vocabulary).
  - **Source:** `devdocs/inquiries/2026-05-24_07-30__file_system_protocol_workers_routeman_runners/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** P1 (invariant 2 + Q5 inheritance) commits aggregation inputs to file-mediated reads via Q5 protocol; P2 dedup reads worker artifacts via Q5; P7 L1+ trigger uses Q5's verdict-line check (`_state.md` Status COMPLETE + verdict-line PROCEED); P7 R3 (verdict-line FLAG/RE-RUN handling) extends Q5's partial-failure detection to aggregation behavior; scan-detection (full at L0; mtime-filtered at L2+) inherited via P7 L0/L2+ rows.

- **Commitment:** Q6 file-shape contracts: 8 new sections in the Q5 protocol file (5 per-discipline + 2 inquiry-level + 1 validation-layer cross-reference); section-level minimum-shape granularity; validation layer in routeman SKILL.md (parser + per-discipline dispatch + 3-tier emitter); validation-without-enforcement at L0; R1 drift-coordination meta-process.
  - **Source:** `devdocs/inquiries/2026-05-24_09-00__file_shape_contracts_upstream_artifacts/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** P1 (Q6 inheritance) commits per-discipline contract conformance reads via Q6's per-discipline contracts. P3 per-discipline dispatch reads via Q6 contracts (sensemaking SV1/SV6/Phase 1/Telemetry/User Input; innovation Mechanism Coverage Telemetry; critique Phase 3/per-candidate markers/Convergence Telemetry; decomposition Final Deliverable/Self-Evaluation; surfacing Traversal Trace/Telemetry). P8 R1 drift-coordination extends Q6's R1 meta-process to cross-worker schema additions. Validation-without-enforcement at L0 means worker contributions are INCLUDED in aggregation even if validation emits warnings.

- **Commitment:** Q2 framing — design routeman's multi-worker aggregation protocol; acceptable shipping alternative = "ship N=1 with extensibility hooks; document N>1 as future revision."
  - **Source:** `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` (Q2 body).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** P7 L0 row directly implements "ship N=1" with degenerate schema fields + degenerate per-Family rules. Sensemaking A4 explicitly evaluated this acceptable alternative against the counter "maybe N=1 should stay at L0 forever" and committed to the L0/L1+/L2+ progression with explicit N>1 activation triggers. Extensibility hooks (P5 schema extensions + P7 activation table) preserved at L0.

**12/12 RE-TESTED.** None inherited-without-re-test. The finding's content is grounded in the priors' commitments via cited evidence per each item.

## Next Actions

### MUST

- **What:** Update `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` to mark Q2 as RESOLVED-WITH-DESIGN.
- **Who:** the assistant (next conversation turn) or user (manual edit), matching the pattern used for Q4 at 06-00, Q5 at 07-30, and Q6 at 09-00.
- **Gate:** immediately after this finding is written.
- **Why:** keeps the frontier-questions finding current; closes Q2's Tier-1 gating for SKILL.md authoring; reduces effective open-frontier-question count from 6 to 5 (Q1 + Q3 + Q4 + Q5 + Q6 + Q2 all resolved; only Q11 + Q12 + Q13 + Q14 + Q15 + Q7-completeness remain).

### COULD

- **What:** Author the 8 new sections in `routeman` SKILL.md per P1–P8 verification criteria (including R1 + R2 + R3 refinements integrated into P2, P3, P7).
- **Who:** routeman SKILL.md author.
- **Gate:** when routeman SKILL.md authoring inquiry begins.
- **Why:** materializes the Q2 design as the operational protocol; unblocks routeman runtime behavior under N=1 + extensibility for N>1.

- **What:** Author the dedup-surface parser (3-tuple extractor + Question_fingerprint normalizer) in routeman SKILL.md as an extension of the Q6 validation layer (parser + per-discipline dispatch + 3-tier emitter).
- **Who:** routeman SKILL.md author.
- **Gate:** when routeman SKILL.md authoring inquiry reaches the validation-and-aggregation section.
- **Why:** Q2's dedup operation is a runtime read; parser implementation makes it operational.

- **What:** Activate folder-presence-based N>1 detection at L1+ (when autonomy register transitions to L1+).
- **Who:** the runner (`/MVL`, `/MVLw`, future runners) at L1+; routeman SKILL.md's L1+ activation row.
- **Gate:** when `docs/autonomy_level.md` `current_level` advances to L1+.
- **Why:** enables multi-worker aggregation when multi-head ships at the worker level.

- **What:** Calibrate L2+ thresholds (per-worker priority calibration; disagreement-detection threshold tuning; LLM-judgment-dedup activation trigger).
- **Who:** routeman SKILL.md maintainer or a future calibration-focused inquiry.
- **Gate:** when L2+ phase is reached AND empirical evidence has accumulated (e.g., ≥30 multi-worker invocations).
- **Why:** L0 fallback values are placeholder; L2+ calibration improves aggregation quality.

- **What:** Activate aggregation_scope = `cross_invocation` when Q14's cross-invocation aggregation design ships.
- **Who:** the Q14-resolving inquiry's finding's MUST item.
- **Gate:** when Q14 ships.
- **Why:** activates the Q2-to-Q14 bridge. The `cross_invocation` value's behavior is Q14's design responsibility; Q2 just preserves the slot.

### DEFERRED

- **What:** P2-REMOVE-1 — no-dedup mode (per-worker namespaces preserved without dedup).
- **Gate:** revival trigger = L2+ when LLM-judgment-dedup is being designed AND deterministic 3-tuple dedup proves unreliable for ≥3 observed edge cases.
- **Why (if revived):** provides a clean fallback if deterministic dedup proves insufficient at L2+.

- **What:** P4-Extrap-1 — telemetry-digest extension at N>10 worker count.
- **Gate:** revival trigger = N>10 worker count observed per-invocation.
- **Why (if revived):** verbatim per-worker telemetry sub-block becomes unwieldy at very high N; a summarizing digest preserves headline read while maintaining sub-block for audit.

- **What:** P8-Inv-Shape-2 — separate-file Q2 protocol at `cognitive_harness/protocols/aggregation_protocol.md`.
- **Gate:** revival trigger = single-consumer scope expansion beyond routeman (e.g., audit or another runner becomes a consumer of the aggregation protocol).
- **Why (if revived):** clean separation of concerns when scope expands; matches Q6's KILL-with-seed precedent for separate validation protocol.

- **What:** Generalization to non-routeman consumers (the aggregation rules as a reusable pattern for other multi-source-aggregating disciplines).
- **Gate:** revival trigger = a second discipline arrives needing the same multi-source-aggregation primitive.
- **Why (if revived):** the per-Family rule typology + dedup-surface + telemetry roll-up may be reusable patterns; generalization is premature at single-consumer scope.

## Reasoning

### Why this design over alternatives

**Innovation killed 9 alternatives** at per-piece Inversion + intervention-shape-axis Inversion. The KILLs and their reasons:

- **P1-Inv-1: Q2 re-invents architectural commitments rather than inheriting.** KILLed because re-invention would duplicate work across 12 priors + introduce drift risk + fail spec-coherence with all 12 priors.

- **P2-Inv-1: content-hash dedup (whole-candidate hash) instead of 3-tuple structural dedup.** KILLed because content hash fails to dedupe semantically-equivalent Questions phrased differently; 3-tuple via Question_fingerprint normalization handles the semantic equivalence case structurally.

- **P3-Inv-1: uniform aggregation rule across Movement Families.** KILLed because per-Family variation reflects STRUCTURAL depth-vs-breadth posture (Progression deeper-but-narrower; Re-orientation broader-and-comparative; Coordination has structural pre-conditions); uniform rules lose this structural distinction and require a future inquiry to re-discover per-Family rules.

- **P4-Inv-1: single-counter aggregation (collapse per-worker telemetry into one number).** KILLed because the 06-00 audit's per-mode dispatch reads per-worker telemetry sub-block; collapsing breaks audit. The hybrid headline + sub-block split is necessary for both Selector (headline) and audit (sub-block) consumption modes.

- **P5-Inv-Shape-1: REORGANIZE-WITHOUT-ADDING (semantic-overload existing schema fields instead of adding new ones).** KILLed because semantic-overload risk is high; downstream readers must distinguish within-worker vs cross-worker history reads — adds parsing complexity. ADD-CONTENT is structurally cleaner.

- **P5-Inv-Shape-2: ADD-DIMENSION (add new evaluation dimension to existing schema's evaluation framework instead of adding fields).** KILLed because structural commitments are lost (e.g., aggregation_scope's parametric values can't be expressed as a dimension). ADD-CONTENT preserves structural commitments.

- **P6-Inv-1: non-orthogonal coupled axes (cross-worker width depends on sub-route depth, or vice versa).** KILLed because coupling would create per-cell rules (cross-worker × sub-route grid) that fail to generalize; the orthogonality is structural (Sensemaking KI7).

- **P7-Inv-1: N>1-first phase progression (start with full N>1 design at L0, degrade to N=1 when single-worker detected).** KILLed because multi-head hasn't shipped; degenerate-clean N=1 is the structurally simpler starting point; N>1-first would commit unimplemented infrastructure at L0.

- **P8-Inv-Shape-1: REORGANIZE-WITHOUT-ADDING for routeman SKILL.md (fold Q2 content into existing sections instead of adding new top-level sections).** KILLed because it conflates aggregation (output-side producing Route Map) with validation (input-side from worker artifacts); two different concerns get conflated; downstream readers cannot navigate cleanly.

### Why the refinements R1+R2+R3 were committed

Critique's adversarial round produced 8 killer objections; defense balanced 4 of them (KO1 + KO3 + KO4 + KO7 + KO8 — note KO3 acceptable at L0; KO8 modified). The other 3 KOs (KO2 + KO5 + KO6) revealed real gaps requiring refinement:

- **R1 (P2 edge case documentation)** addresses KO2: top-level vs sub-route classification divergence. The asymmetric-failure principle structurally preserves no-information-loss (over-coverage results, not loss), but the edge case must be DOCUMENTED so SKILL.md author + downstream consumers know what to expect.

- **R2 (P3 disagreement-detection consumption contract)** addresses KO5: the signal IS generated, but downstream consumption was unspecified. The contract with 06-00 audit (calibration-divergence detection at L1+; persistent-disagreement FLAG at L2+) must be EXPLICIT in P3's verification criteria + cross-referenced in routeman SKILL.md authoring.

- **R3 (P7 verdict-line FLAG/RE-RUN handling)** addresses KO6: the L1+ "completed worker inquiry folder" determination presupposed clean PROCEED verdicts. Real-world worker contributions may carry FLAG/RE-RUN verdict-lines; the design must say what happens. Answer: contribution INCLUDED per observe-only; status propagated via per-worker telemetry sub-block; aggregation does NOT halt; Selector reads sub-block to decide action.

The three refinements compose into a unified failure-mode handling architecture under the asymmetric-failure + observe-only invariants (emergent property surfaced in critique Phase 3.5 post-refinement Assembly Check).

### What survived

- **Assembled L0 design** (8 piece principal candidates after R1+R2+R3 integration) — SURVIVE on all 12 critique dimensions including both CRITICAL dimensions (D7 phase-fit + D8 identity-preservation).
- **P2-REMOVE-1 (no-dedup mode at L2+)** — DEFERRED with revival trigger.
- **P4-Extrap-1 (telemetry-digest at N>10)** — DEFERRED with revival trigger.
- **P8-Inv-Shape-2 (separate-file Q2 protocol)** — KILLed-with-seed (revival at single-consumer scope expansion).

### Why ~80% documentation + ~20% novel

The pattern matches Q5 (07-30) and Q6 (09-00) — three consecutive frontier-question resolutions following the same shape. The 12 inherited priors provide most of the substrate (architecture from 16-31 + 14-39; schema from 24-00 + 18-58; emission policy from 02-00; protocols from Q5 + Q6; phase progression from 24-40; per-discipline dispatch from 24-01 + 06-00; Movement Family categorization from 01-30). Q2's novel pieces are small and well-bounded: 3-tuple dedup-surface; per-Movement-Family aggregation rule typology; aggregation_scope parametric hook; disagreement-detection INFO meta-signal.

The pattern's consistency across Q5/Q6/Q2 is structural evidence of fit — three frontier resolutions on related topics naturally compose by inheriting + extending the established substrate rather than re-inventing.

## Open Questions

### Monitoring

- **R1 edge case occurrence rate.** Observable after L1+ ships and multi-worker invocations begin. If the top-level vs sub-route classification divergence pattern is observed ≥3 times, consider per-classification dedup-key normalization or LLM-judgment-dedup activation (revives P2-REMOVE-1's seed).
- **Per-worker D1 calibration accuracy.** Observable after L2+ calibration data accumulates (≥30 multi-worker invocations per worker). If per-worker D1 weighting doesn't improve aggregation quality vs uniform weighting, L2+ calibration may need re-design.
- **Q14 timeline.** Observable when Q14's cross-invocation aggregation design begins. Determines whether aggregation_scope = `cross_invocation` activation is near-term or research-frontier.

### Blocked

- **L1+ folder-presence detection performance at scale.** Cannot be calibrated until multi-head ships AND the project's inquiry-folder count grows substantially. Q5's L0 = full-scan default works at ~20-50 folders; L2+ mtime-filtered scan is the extension. At very high N (folders × workers), the scan-cost may need re-design.
- **LLM-judgment-dedup specification.** Blocked on L2+ phase + observation that deterministic 3-tuple dedup is insufficient. The Stage-2 pattern from 24-01 is the inheritance, but the specific LLM template + per-Family input set is downstream design.

### Research Frontiers

- **L4+ singleton-routeman bottleneck.** At very high N (multi-head + system Selector at L2+ scale), the singleton constraint may bottleneck. The L4+ extension is genuinely research-frontier (no known design; 14-39's singleton commitment was made for L0-L3 scale). Mirrors Q5's L4+ parallel-worker-locking research frontier.
- **Aggregation rule generalization to non-routeman consumers.** The per-Family rule typology + dedup-surface + telemetry roll-up may be reusable patterns for other multi-source-aggregating disciplines. Premature at single-consumer scope.

### Refinement Triggers

- **L0 → L1+ phase transition.** Time-bound: when `docs/autonomy_level.md` `current_level` advances to L1+. Activates N>1 detection + dedup + provenance expansion + disagreement-detection INFO emission per P7 L1+ row. P7's L1+ row may need expansion if observable behavior reveals gaps.
- **L1+ → L2+ phase transition.** Time-bound: when `current_level` advances to L2+. Activates per-worker priority calibration + LLM-judgment-dedup fallback + threshold tuning + Q14 activation (if Q14 ships). P7's L2+ row may need calibration based on accumulated L1+ data.
- **Q12 (routeman-specific schema extensions) eventual design.** Condition-bound: when Q12 inquiry begins. Q2's first-mover additions (`provenance_workers`, `aggregation_meta`, `worker_telemetry`, `dedup_evidence`, `aggregation_scope`) must coexist with Q12's eventual extensions. Q12's design must accommodate Q2's first-mover additions (not the other way around per Q2's frontier obligation).
- **Q14 (cross-invocation aggregation) eventual design.** Condition-bound: when Q14 inquiry begins. Q2's aggregation_scope hook bridges to Q14 but does NOT commit to same-mechanism. Q14's design determines whether `cross_invocation` value reuses Q2's rules or specifies different rules.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Q2 — dive deep
```

</details>
