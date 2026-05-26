# Innovation — Safety Substrate Measurement-Aware Design Elaborations

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-16_06-48__safety_substrate_measurement_aware_design/_branch.md

Input: decomposition.md (6 pieces P1-P6) + sensemaking.md (3-roles + 6 components + 4 consumers + 3 paths + 4 commitments + 9 re-test outcomes) + exploration.md.

Elaborate P1-P6 concretely. Apply mechanisms where relevant. 5-test cycle + 2 user bars. Assembly check for emergent hybrids beyond γ.
```

---

## Phase 1 — Seeds

- **S-P1:** the sparse point-to-point pattern (each component → one or more consumers; no central log).
- **S-P2:** the unified event log pattern (all components write; consumers filter).
- **S-P3:** the hybrid composition rule (high-cardinality point-to-point + low-cardinality log).
- **S-P4:** the measurement-value-prioritized build sequence + evidence-gated transitions.
- **S-P5:** the 3 State-1 branches + per-path carry mechanisms.
- **S-P6:** the meta-decision tableau across 3 paths × 7 evaluation axes.

### Intuition / Direction
- **Valuation:** HIGH-VALUE candidates are CONCRETE (Critique can act without re-deliberation) and ELABORATE EACH COMMITMENT explicitly (contract clarity, consumer mapping, construction ordering, State-1 compatibility). LOW-VALUE candidates leave the commitments implicit.

---

## Phase 2 — Generate

### P1 — Path α (point-to-point)

**Mechanisms:** Combination (per-component-per-consumer pairings), Absence Recognition (catch omitted contracts).

#### Six per-component output contracts

**Contract 1 — Regression-symptom catalog (Component 1, role: INPUT-DEFINING).**
- *Form:* reference document (`enes/regression/desc.md`) + per-observation match-records produced by humans or tools when a symptom is matched.
- *Per-observation record fields:* `target` (the inquiry / spec-file / discipline-output being observed) + `symptom_id` (which of 23) + `severity` (LOW/MEDIUM/HIGH/CRITICAL per catalog tags) + `evidence` (citation or prose).
- *Consumers:* Q1b (filters by symptom-type for absence-check); Q4a (filters by Pattern 5 slow-drift); Q4c (filters by Type 5 spec-symptoms).
- *Emission timing:* push (event when a match occurs) or pull (catalog itself is pull).

**Contract 2 — Snapshot mechanism (Component 2, role: INFRASTRUCTURE).**
- *Form:* invokable past-version slash commands (e.g., `/<sha>-sense-making`) + per-A/B comparison artifacts.
- *Per-comparison artifact fields:* `baseline_version` (sha) + `current_version` (HEAD or sha) + `input` (the test problem) + `baseline_output` (saved) + `current_output` (fresh) + `qualitative_gap_statement` (prose) + `comparable_verdict` (`as_good_as_baseline` / `degraded` / `improved`).
- *Consumers:* canary (internal use); Q4a (drift severity via canary); Q4b (revert-vs-supersede via past-version comparison).
- *Emission timing:* pull (snapshot is a static artifact; comparison is on-demand).

**Contract 3 — Canary reference runs (Component 3, role: OPERATIONS).**
- *Form:* per-discipline reference-run manifest (at `devdocs/canary_baselines/<discipline>.md`) + per-re-run record.
- *Per-re-run record fields:* `discipline` + `canary_problem` (the input) + `baseline_output_sha` (snapshot reference) + `re_run_date` + `comparison_verdict` (per Contract 2) + `slow_drift_detected` (boolean) + `dimensions_of_drift` (list: as_rich / as_surprising / as_useful / frontier_comparable).
- *Consumers:* Q4a (primary).
- *Emission timing:* push (event when canary re-runs).

**Contract 4 — Annotation convention (Component 4, role: OPERATIONS).**
- *Form:* structured commit-message convention. Format: `type: edit-summary\n[supersedes: prior-edit-sha-or-NA]\n[type-5-symptoms-fired: none-or-list]`. The annotation lives in git history (commit messages); no separate file needed.
- *Per-commit fields:* `type` (e.g., spec-refinement / typo-fix / structural-change) + `edit_summary` (one line) + `supersedes` (prior edit sha if applicable) + `type_5_symptoms_fired` (list from regression catalog Type 5).
- *Consumers:* Q4b (reads `supersedes` field to classify revert-vs-supersede); Q4c (reads `type_5_symptoms_fired` for self-reported flags).
- *Emission timing:* push (event = commit).

**Contract 5 — Pre-edit check (Component 5, role: OPERATIONS).**
- *Form:* a git pre-commit hook (or runner-invoked check) that scans the spec-file diff for Type-5 symptom patterns BEFORE commit.
- *Per-edit pre-fire record fields:* `target_spec_file` + `diff_summary` + `type_5_symptoms_detected` (list) + `severity_per_symptom` + `user_acknowledged` (boolean — did the user proceed despite warning?).
- *Consumers:* Q4c (primary).
- *Emission timing:* push (event = pre-commit).

**Contract 6 — Structural-check tool (Component 6, role: OPERATIONS; State-1 conditional).**
- *Form:* depends on State-1 branch (see P5). Always emits `[PASS] (<N>/<M> sections present)` or `[FAIL: missing-elements]`.
- *Per-discipline-output record fields:* `output_file` + `discipline_name` + `verdict` (PASS / FAIL) + `sections_present` (count and list) + `sections_missing` (list).
- *Consumers:* Q4c (conditional on State-1 branch — see P5).
- *Emission timing:* push (event = discipline output saved).

#### Per-consumer dependency map (Path α)

| Consumer | Reads from | Format |
|---|---|---|
| Q1b absence-of-need | Contract 1 (match-records filtered by symptom-type) | match-record list (across 5 symptom-types) |
| Q4a slow-drift | Contract 3 (canary re-run records) + Contract 2 (comparison artifacts) | re-run-record list |
| Q4b revert-vs-supersede | Contract 4 (commit-message annotations) + git history | annotation field-extract per commit |
| Q4c per-edit spec-symptom | Contract 5 (pre-edit pre-fire records) + Contract 6 (structural-check verdicts, conditional) + Contract 4 (self-reported `type_5_symptoms_fired` field) | composed view across three sources |

#### Path α cost profile
- *Design effort:* per-pair contract specification (~6 contracts × ~30-60 min each ≈ ~3-6 hours total at spec level).
- *Implementation effort:* depends on whether contracts are humans-write or tools-emit; mostly human-write at L0.
- *Ongoing maintenance:* per-component-edit when discipline structure changes; ~zero baseline.

#### Path α commitment satisfaction
- Contract clarity: PASS — 6 named contracts.
- Consumer mapping: PASS — sparse mapping per consumer.
- Construction ordering: handled in P4.
- State-1 compatibility: handled in P5.
- Substrate-honest: PASS — each contract names mechanism (pull artifact vs push event).
- Reliability acknowledgment: PASS — probabilistic components (LLM-self-check in Contract 6 Branch-1) named.
- Evolution: PASS — prose-form at L0; per-contract schemas can be added when warranted.

---

### P2 — Path β (mediated event log)

**Mechanisms:** Domain Transfer (from event-sourcing / logging patterns), Combination (per-event-type schemas).

#### The event log

**Location:** `devdocs/safety_event_log.md`

**Format:** append-only markdown stream. Each entry is a numbered record:

```markdown
## Event 0042 — 2026-05-16 14:23 — component:canary — type:canary_re_run

| Field | Value |
|---|---|
| target | devdocs/inquiries/2026-05-15_10-59__project_identity_and_milestone_ordering/ |
| severity | MEDIUM |
| details | canary problem: "explore the safety substrate"; baseline /bf4ae1f-explore output saved 2026-05-14; current /explore output produced today; comparable_verdict: as_good_as_baseline; slow_drift_detected: false |
```

**Universal schema fields (every event):**
- `timestamp` — when the event was emitted.
- `component` — which substrate component emitted (regression-catalog / snapshot / canary / annotation / pre-edit / structural-check).
- `event_type` — discriminator for per-type subschema.
- `target` — the artifact being observed (inquiry path / spec file / discipline output / commit sha).
- `severity` — LOW/MEDIUM/HIGH/CRITICAL per regression catalog tags.
- `details` — per-event-type structured fields OR prose at L0.

**Per-event-type subschemas (the `details` field's structure varies by `event_type`):**

| event_type | Emitting component | Subschema fields |
|---|---|---|
| `symptom_match` | catalog (1) | symptom_id, evidence |
| `snapshot_taken` | snapshot (2) | baseline_sha, target_components |
| `canary_re_run` | canary (3) | discipline, canary_problem, baseline_sha, comparison_verdict, slow_drift_detected, dimensions_of_drift |
| `spec_edit_annotation` | annotation (4) | type, edit_summary, supersedes, type_5_symptoms_fired |
| `pre_edit_warning` | pre-edit (5) | target_spec_file, diff_summary, type_5_symptoms_detected, severity_per_symptom, user_acknowledged |
| `structural_check_verdict` | structural-check (6) | output_file, discipline_name, verdict, sections_present, sections_missing |

#### Per-consumer filter logic (Path β)

| Consumer | Filter | Aggregation |
|---|---|---|
| Q1b absence-of-need | `event_type == 'symptom_match'` filtered further by symptom-type | absence: count of records per symptom-type over window |
| Q4a slow-drift | `event_type == 'canary_re_run'` | rate: `slow_drift_detected == true` count / total |
| Q4b revert-vs-supersede | `event_type == 'spec_edit_annotation'` | classification: `supersedes IS NOT NULL` vs `supersedes IS NULL` |
| Q4c per-edit spec-symptom | `event_type IN ('pre_edit_warning', 'structural_check_verdict')` | per-edit count + symptom-fire severity distribution |

#### Path β cost profile
- *Design effort:* event-log schema design + per-event-type subschema (~hours upfront).
- *Implementation effort:* per-component event-emission wiring (~hours per component, but only N=6 components × add-event-emission ≈ 6 × 30 min ≈ ~3 hours).
- *Ongoing maintenance:* schema versioning if event_types proliferate or fields evolve.

#### Path β commitment satisfaction
- Contract clarity: PASS — the log schema IS the contract.
- Consumer mapping: PASS — filters map cleanly.
- Construction ordering: handled in P4.
- State-1 compatibility: PASS — structural-check emits `structural_check_verdict` events with per-branch details.
- Substrate-honest: PARTIAL — log centralizes; coupling risk (changing schema affects all consumers).
- Reliability acknowledgment: PASS — probabilistic events (e.g., LLM-self-check verdict) are flagged in `severity` or `details`.
- Evolution: PASS — schema can version (e.g., per-event-type major versions).

---

### P3 — Path γ (hybrid composition)

**Mechanisms:** Constraint Manipulation (the composition rule constraint), Combination (selective routing).

#### Composition rule

**Rule:** A substrate component's output is routed via the EVENT LOG (Path β mechanism) if-and-only-if it satisfies ALL of:
1. The component emits LOW-CARDINALITY events (≤ a few per inquiry; not per-edit or per-output).
2. The events have CROSS-CONSUMER value (read by 2+ consumers OR used for cross-component coordination).
3. The events are HISTORICALLY meaningful (worth preserving in an append-only log).

Otherwise, the component's output is routed via POINT-TO-POINT (Path α mechanism) directly to specific consumers.

#### Per-component routing under γ

| Component | Routing | Reason |
|---|---|---|
| 1. Catalog | Event log (low-cardinality match events) | match events are infrequent; relevant to Q1b + Q4a + Q4c |
| 2. Snapshot | Point-to-point pull (artifacts) + event log (snapshot-creation events) | snapshots themselves are pull; creation events are low-cardinality cross-coordination |
| 3. Canary | **POINT-TO-POINT to Q4a** | high-cardinality per-re-run; one primary consumer |
| 4. Annotation | **POINT-TO-POINT via git history** | high-cardinality per-edit; git history IS the storage |
| 5. Pre-edit check | **POINT-TO-POINT to Q4c** | high-cardinality per-edit; one primary consumer |
| 6. Structural-check | **POINT-TO-POINT to Q4c** | high-cardinality per-output; one primary consumer; branch-conditional shape |

**Net:** under γ, the event log carries low-cardinality cross-coordination events (symptom-matches; snapshot-creations); the high-cardinality per-event flows stay point-to-point.

#### Path γ cost profile
- *Design effort:* both per-pair contracts (for point-to-point flows) AND a smaller event-log schema (for low-cardinality events). Medium-high.
- *Implementation effort:* per-component routing decision + emit-where-appropriate logic.
- *Ongoing maintenance:* the composition rule may need re-evaluation as new cross-component patterns emerge.

#### Path γ commitment satisfaction
- Contract clarity: PASS-WITH-COMPLEXITY — both per-pair contracts + log schema named.
- Consumer mapping: PASS.
- Construction ordering: handled in P4.
- State-1 compatibility: handled in P5.
- Substrate-honest: PASS — each component's routing rule is explicit.
- Reliability acknowledgment: PASS.
- Evolution: PASS-WITH-COMPLEXITY — composition rule itself evolves.

---

### P4 — Construction ordering

**Mechanisms:** Lens Shifting (measurement-value lens), Combination (cost + value + prerequisite ranking).

#### Measurement-value × build-cost prioritized sequence

**Step 1 (already done):** Catalog (Component 1) is specified at `enes/regression/desc.md`. No build needed; the catalog is the input-defining role. ✓

**Step 2 (already done):** Snapshot mechanism (Component 2) is operational. `archived_skills/bf4ae1f-hg/` is present. **EVIDENCE-GATE for next step:** when the first need for Q4b's revert-vs-supersede classification arises (a spec edit reverts a prior edit and the reviewer needs to classify), proceed to Step 3.

**Step 3 (next; LOW COST + HIGH measurement value):** **Adopt the annotation convention (Component 4 revised).** Document the commit-message format in `CLAUDE.md` or a project-conventions file. No tool build required; convention adoption is the work. **Cost:** ~minutes to document; ongoing reviewer adherence. **Q4b transitions** from Tier 1 OPERATIONAL to Tier 1 STRUCTURED (per Sensemaking's revision).

**Step 4 (medium cost + HIGH measurement value):** **Build first canary baseline + canary mechanism (Component 3).** Pick one discipline (e.g., `/sense-making` per its high-use status); save a "genuinely good" reference run to `devdocs/canary_baselines/sense-making.md`. Implement the canary re-run procedure (manually at L0; scripted at L2+). **Cost:** ~hours to design + first canary. **EVIDENCE-GATE:** Q4a's Tier 2 status fires when 3+ canary re-runs have produced records.

**Step 5 (medium cost + MEDIUM measurement value):** **Implement pre-edit check (Component 5).** A git pre-commit hook that scans the staged spec-diff for Type-5 symptom patterns (Shorter-than-before / Missing sections / Weakened language / Removed safeguards). The hook prints warnings; user acknowledgment proceeds. **Cost:** ~hours. **EVIDENCE-GATE:** when the first symptom-prone edit happens AND the user wants automated warning before commit.

**Step 6 (decision-tree-conditional cost + variable measurement value):** **Structural-check tool (Component 6) per the prior inquiry's State-1 outcome.** Three branches per P5.

#### Build sequence cost summary

| Step | Component | Build cost | Q-impact |
|---|---|---|---|
| 1 | Catalog | done | Q1b/Q4a/Q4c input |
| 2 | Snapshot | done | Q4a (via canary) / Q4b enabler |
| 3 | Annotation convention | ~minutes | Q4b Tier 1 structured |
| 4 | Canary | ~hours per first | Q4a Tier 2 |
| 5 | Pre-edit check | ~hours | Q4c primary |
| 6 | Structural-check | conditional | Q4c automation conditional |

Total cost (Steps 3-5; Step 6 conditional): ~10-20 hours of work spread across triggered events.

---

### P5 — State-1 branch specification

**Mechanisms:** Inversion (test each branch's logic), Domain Transfer (from the prior structural-check decision tree).

#### Per-branch component-6 outputs

**Branch 1 — Catch-rate ≥0.85 (Path A locked-in):**
- Component 6 = LLM-self-check per the spec-edited procedure (4 spec edits applied per prior inquiry's MUST).
- *Output to Q4c:* `_state.md` history record per discipline run: `Structural check: [PASS] (<N>/<M> sections present)` or `[FAIL: missing-elements]`.
- *Q4c consumes:* the `_state.md` record's PASS/FAIL field + missing-elements list.

**Branch 2 — Catch-rate 0.65-0.85 (Path B built):**
- Component 6 = Path B's bash script (~50 lines, per the prior inquiry's P2 elaboration: universal verdict-line check + user-input check + per-discipline section sentinels) + LLM-self-check for deep structure.
- *Output to Q4c:* script's stdout (`[PASS]` / `[FAIL: <reasons>]`) + script's exit code (0/1) + the LLM-self-check `_state.md` record.
- *Q4c consumes:* script output (primary signal for universal sentinels) + `_state.md` record (deep-structure signal).

**Branch 3 — Catch-rate <0.65 (Hybrid B+C built):**
- Component 6 = Path B's bash script + the protocol-driven LLM-self-check at `homegrown/protocols/structural_check.md` (per the prior inquiry's P3 elaboration).
- *Output to Q4c:* script stdout + protocol's `Steps 1-3 outcome` record.
- *Q4c consumes:* script output + protocol output (structured per the protocol's Step 3 specification).

#### Per-path carry mechanism

| Design path | Branch 1 carry | Branch 2 carry | Branch 3 carry |
|---|---|---|---|
| **α (point-to-point)** | LLM-self-check writes `_state.md`; Q4c reads `_state.md` directly. | Script writes stdout; Q4c reads stdout + `_state.md`. | Script + protocol write outputs; Q4c reads both. |
| **β (event log)** | LLM-self-check emits `structural_check_verdict` event to log; Q4c filters. | Script emits same event-type; protocol emits same event-type; Q4c filters by event_type. | Same as β: all branches emit event-type. |
| **γ (hybrid)** | Per composition rule: structural-check is high-cardinality → point-to-point. Q4c reads `_state.md` (Branch 1) / script stdout + `_state.md` (Branch 2) / script + protocol (Branch 3). | Same as α (structural-check is point-to-point under γ). | Same as α (structural-check is point-to-point under γ). |

**Consistency observation:** Q4c's INTERFACE with component 6 is consistent across paths in terms of WHAT it reads (PASS/FAIL verdict + missing-elements list), even if WHERE it reads varies (file vs log vs stdout). The State-1 branch determines the SHAPE; the path determines the LOCATION.

---

### P6 — Meta-decision synthesis

**Mechanisms:** Lens Shifting (path comparison from the commitments lens), Combination (composing dominance + trade-off + recommendation).

#### The 3 × 7 comparison tableau

| | **C1** Contract clarity | **C2** Consumer mapping | **C3** Construction ordering | **C4** State-1 compat | **X1** Substrate-honest | **X2** Reliability ack | **X3** Evolution |
|---|---|---|---|---|---|---|---|
| **Path α** point-to-point | ✅ PASS — 6 per-pair contracts named | ✅ PASS — sparse mapping per consumer | ✅ PASS — same build sequence | ✅ PASS — per-branch via P5 | ✅ PASS | ✅ PASS | ✅ PASS — prose now, per-contract schema later |
| **Path β** event log | ✅ PASS — log schema is the contract | ✅ PASS — filters map cleanly | ✅ PASS — same | ✅ PASS — `structural_check_verdict` event-type | ⚠️ PARTIAL — coupling via log format | ✅ PASS | ✅ PASS — schema versions |
| **Path γ** hybrid | ⚠️ PASS-WITH-COMPLEXITY — both per-pair + log schema | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS — explicit per-component routing | ✅ PASS | ⚠️ PASS-WITH-COMPLEXITY — composition rule evolves |

#### Dominance analysis

No path strictly dominates. Each PASSes the 4 critical commitments (C1-C4) cleanly. Differences emerge on the cross-cutting commitments (X1 X3 specifically).

- **Path α:** PASSes everything cleanly. Cost is concentrated in per-pair contract design but spread thin.
- **Path β:** PARTIAL on substrate-honest (centralization risk). PASSes everything else.
- **Path γ:** PASS-WITH-COMPLEXITY on contract clarity AND evolution (the composition rule is itself a maintained artifact).

#### Trade-offs

- **α vs β at scale:** α's per-pair design scales linearly (more components → more per-pair contracts). β's log scales the consumers' filter complexity (more event_types → more filter logic), not the per-component design. At L0 (6 components, 4 consumers), the scaling difference is small. At L4+ (more components, more consumers, parallel Workers), β's scaling is structurally cleaner.
- **α vs γ at L0:** α is simpler (one mechanism). γ requires defining the composition rule (additional design artifact). At L0 the marginal complexity of γ over α is real but small.
- **β vs γ on coupling risk:** β centralizes everything in one log; γ centralizes only the low-cardinality cross-coordination events. γ's coupling risk is lower than β's.

#### Emergent candidates (Phase 3.5 Assembly Check)

**Emergent 1 — Lazy γ:** start as α; promote to γ when cross-component coordination needs surface. This is the EVIDENCE-GATED-GRADUATION version of γ; consistent with the project's broader pattern.
- *Cost:* start at α cost; pay γ's incremental cost only when triggered.
- *Commitment satisfaction:* PASSes everything at L0 (just α); PASSes γ's profile when triggered.

**Emergent 2 — α + selective canary-log:** keep mostly point-to-point but use a SMALL event log specifically for canary establishment events (creating a new canary baseline; declaring a canary obsolete). Other components stay point-to-point.
- *Cost:* marginal over α (one small log file + canary-event subschema).
- *Commitment satisfaction:* PASSes; substrate-honest because the small log's scope is narrow.

**Emergent 3 — β with per-event-type sub-files:** instead of one flat event log, have per-event-type files (e.g., `devdocs/safety/canary_log.md`, `devdocs/safety/edit_log.md`). Decentralizes back toward α with structured-per-type.
- *Cost:* moderate (more files; clearer per-type schemas).
- *Commitment satisfaction:* compromises β's centralization-advantage; structurally between α and β.

---

## Phase 3 — Test (cycle summary)

| Candidate | 5-test cycle (Novelty / Scrutiny / Fertility / Actionability / Mech-Indep) | Disposition |
|---|---|---|
| P1 Path α elaboration | M / H / M / H / H | ACTIONABLE |
| P2 Path β elaboration | M / H / H / H / H | ACTIONABLE |
| P3 Path γ elaboration | M / H / H / M-H / H | ACTIONABLE |
| P4 Construction ordering | M / H / H / H / H | ACTIONABLE |
| P5 State-1 branch specification | M / H / M / H / H | ACTIONABLE |
| P6 Meta-decision synthesis | (synthesis, not a candidate path) | — |
| Emergent 1: Lazy γ | H / H / H / H / H | **ACTIONABLE-STRONG** |
| Emergent 2: α + selective canary-log | M / M / M / H / M | ACTIONABLE (minor variation on α) |
| Emergent 3: β with per-event-type files | M / M / M / H / M | ACTIONABLE (compromise between α and β) |

All survive testing. 5 base candidates + 3 emergent = 8 candidates total (P6 is synthesis, not itself a candidate).

---

## Phase 3.5 — Assembly Check

Beyond the 3 emergent already named: do α and γ combine into anything new? **Lazy γ already captures the start-α-promote-γ pattern.** What about γ and β? **β with selective point-to-point exceptions = γ** (already covered).

No further emergent candidates beyond Emergent 1/2/3.

---

## Phase 3.6 — Axis Coverage Check

- **Commitment axes:** all 4 commitments + 3 cross-cutting addressed across all paths in the tableau.
- **Consumer axes:** Q1b, Q4a, Q4b, Q4c all mapped per-path.
- **Component axes:** all 6 components' contracts named per-path.
- **State-1 axes:** all 3 branches specified per-path in P5.
- **Cost-profile axes:** explicit per-path.

Coverage adequate.

---

## Phase 4 — Mechanism Coverage (Telemetry)

- **Generators applied:** 4/4 (Combination across pieces; Absence Recognition in P1; Domain Transfer in P2 from event-sourcing; Extrapolation lighter — applied in P4 build sequence evidence-gating).
- **Framers applied:** 3/3 (Constraint Manipulation in P3 composition rule; Lens Shifting in P4 + P6; Inversion in P5 test).
- **Convergence:** YES — Lazy γ (Emergent 1) is supported by Combination + Constraint Manipulation + Lens Shifting + the evidence-gated-graduation pattern from prior project-identity finding. Strong convergence.
- **Survivors tested:** 8/8.
- **Failure modes observed:**
  - Premature evaluation: NO.
  - Single-mechanism trap: NO.
  - Early frame lock: NO (Lazy γ surfaced as emergent).
  - Innovation without grounding: NO.
  - Mechanism exhaustion: NO.
  - Survival bias: PARTIAL-MITIGATED — Path β's PARTIAL on substrate-honest is preserved (the comfortable interpretation would have called it PASS; structural grounds say PARTIAL).

**Overall: PROCEED.**

---

## Handoff to Critique

**8 candidates** for Critique:
- Path α (point-to-point, fully elaborated)
- Path β (mediated event log, fully elaborated)
- Path γ (hybrid, with composition rule)
- Emergent 1: Lazy γ (start as α, promote to γ on trigger)
- Emergent 2: α + selective canary-log
- Emergent 3: β with per-event-type sub-files

Plus P4 (construction ordering) and P5 (State-1 branch spec) as transverse pieces that apply across the chosen path.

**Critique's contraction task:**
- Phase 0 dimensions: 4 commitments + 3 cross-cutting (substrate-honest / reliability ack / evolution) + cost-profile + maintenance-burden.
- Phase 1 landscape: viable region for paths that PASS all 4 critical commitments; boundary for PARTIAL on substrate-honest or complexity.
- Phase 2 adversarial: per path, prosecution on cost-at-L4+ (α) / coupling-risk (β) / composition-rule-maintenance (γ) / when-does-trigger-fire (Lazy γ).
- Phase 3 verdict per candidate.
- Phase 3.5 assembly check on survivors.
- Phase 4 convergence + recommendation.

Likely strongest candidates: **Lazy γ** (PASS all commitments + start cheap + promote on evidence) and **Path α** (simplest at L0; canonical sparse mapping).
