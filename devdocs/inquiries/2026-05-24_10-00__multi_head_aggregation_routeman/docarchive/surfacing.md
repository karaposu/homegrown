# Surfacing — Multi-head aggregation protocol for routeman (Q2)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_10-00__multi_head_aggregation_routeman/_branch.md`

## Mode + Entry Point + Reception Echo

- **Mode:** possibility (territory is a conceptual design space; items are candidate-generable, not pre-existing artifacts)
- **Entry point:** signal-first (purpose given explicitly via _branch.md)
- **Purpose echo:** design routeman's multi-worker aggregation protocol under corrected isolated-session + file-scanning architecture — 7 sub-aspects (dedup; provenance; telemetry; priority; hierarchical-Route-Map interaction; first-ship-vs-deferred; Q14 scope distinction), with phase-fit + identity-preservation + extensibility-hooks criteria
- **Territory specification:** abstract-bounded — design space bounded by (i) 12 inherited prior commitments (Synthesis Trigger list); (ii) 7 sub-aspects; (iii) architectural invariants from 16-31 (singleton, file-mediated, isolated-session); (iv) schema commitments from 24-00 + 18-58 (route-card 17/18-attribute schemas); (v) emission policy from 02-00; (vi) protocol invariants from Q5 + Q6
- **Prior artifact:** none (first invocation)
- **Prior workspace:** none (first invocation)
- **Refined sub-purpose:** none (first invocation)

## Boundary-discovery Sub-phase Status

**Skipped** — territory is abstract-bounded, not unbounded/discover. The 12 inherited priors + 7 sub-aspects + architectural constraints define the territory edges explicitly.

## Traversal Trace

The traversal organizes the design space into 10 regions: 7 corresponding to the explicit sub-aspects (R1–R7) plus 3 cross-cutting regions (R8 schema-extension hooks, R9 failure-mode handling, R10 architectural invariants) that the design must coordinate. All items are possibility-mode candidates; per-item recency annotation is `{source: none, value: null}` throughout.

### R1 — Dedup mechanisms across workers

| # | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|
| 1 | I-R1-01: candidate-id deterministic dedup (id = hash(movement_type + parent_route_id + Question_fingerprint)) | core | HIGH | Inherits 24-01's deterministic-Stage-1 pattern. |
| 2 | I-R1-02: content-hash dedup (hash of Question + Source-anchor section) | core | HIGH | Alternative anchor-surface to I-R1-01. |
| 3 | I-R1-03: no-dedup (each worker's contribution independent; downstream Selector dedups) | sub | MED | Pushes dedup responsibility downstream. |
| 4 | I-R1-04: per-worker namespace (no dedup; per-worker partition preserved in Route Map) | sub | MED | Closely related to I-R1-03; differs in artifact shape. |
| 5 | I-R1-05: LLM-judgment dedup (Stage-2 LLM-judgment-within-constraints) | sub | MED | Inherits 24-01's Stage-2 pattern; non-deterministic risk. |
| 6 | I-R1-06: hybrid deterministic-first + LLM-judgment-fallback | core | HIGH | Synthesis pattern matching 24-01's two-stage approach. |

### R2 — Per-worker provenance representation

| # | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|
| 7 | I-R2-01: single `worker_inquiry_path` field per Route (1:1) | core | HIGH | Degenerate-clean at N=1. |
| 8 | I-R2-02: list `worker_inquiry_paths` field per Route (1:N after dedup) | core | HIGH | N=1 instance is single-element list; safe extensibility. |
| 9 | I-R2-03: separate provenance ledger (parallel file) | sub | MED | Decouples Route record from provenance; adds file. |
| 10 | I-R2-04: both — field + ledger | sub | LOW | Likely over-engineered for L0. |
| 11 | I-R2-05: no-provenance (trust the dedup; lose worker attribution) | side | LOW | Violates audit-substrate requirements (06-00 reads provenance). |

### R3 — Telemetry aggregation rules

| # | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|
| 12 | I-R3-01: per-worker telemetry preserved verbatim (sub-block per worker) | core | HIGH | Loss-less; consumed by 06-00 audit. |
| 13 | I-R3-02: per-worker telemetry rolled into aggregate counts | core | HIGH | Loss-y but compact; complementary to I-R3-01. |
| 14 | I-R3-03: worst-case verdict roll-up (any ERROR → ERROR; any FLAG → FLAG; else PROCEED) | core | HIGH | Verdict-specific roll-up rule per 5-tier vocabulary from 06-00. |
| 15 | I-R3-04: per-discipline-per-worker dispatch table (inherit 06-00 audit's per-mode dispatch) | sub | MED | Cross-product of N workers × M disciplines. |
| 16 | I-R3-05: hybrid — per-worker sub-blocks (inspection) + roll-up headline | core | HIGH | Synthesis combining I-R3-01 + I-R3-02 + I-R3-03. |

### R4 — Priority allocation under contention

| # | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|
| 17 | I-R4-01: first-come-first-serve (worker enumeration order) | side | LOW | Non-deterministic across runs; violates identity invariant. |
| 18 | I-R4-02: per-worker D1 confidence-label aggregation (inherit 02-00) | core | HIGH | Direct extension of 02-00 emission policy. |
| 19 | I-R4-03: vote-count across workers (more workers voting same candidate → higher priority) | core | MED | Risks bias toward majority-thinking; tension with enumerate-all. |
| 20 | I-R4-04: per-Route-Type rules from 01-30's Movement Family + 02-00's per-route-type-split | core | HIGH | Inherits the per-route-type-split principle. |
| 21 | I-R4-05: source-anchor strength (per-Route anchor count or depth) | sub | MED | Reads cycle-output artifacts; depends on Q3's mechanism. |
| 22 | I-R4-06: identity-preservation override — priority is informational, not gating; downstream Selector decides | core | HIGH | Re-anchors to enumerate-all + observe-only invariants. |

### R5 — Hierarchical Route Map interaction (FF-3 from 18-58 staged-mapping)

| # | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|
| 23 | I-R5-01: two-layer aggregation (top-level + sub-routes both independently aggregate) | core | HIGH | Symmetric handling. |
| 24 | I-R5-02: top-level aggregates only; sub-routes stay per-worker | core | HIGH | Asymmetric handling; preserves stage-2 variance. |
| 25 | I-R5-03: hybrid — per-worker sub-route trees preserved + cross-worker top-level dedup | core | HIGH | Synthesis combining I-R5-01 + I-R5-02 traits. |
| 26 | I-R5-04: sub-route dedup keyed by parent-route identifier | core | HIGH | Required regardless of overall shape choice. |
| 27 | I-R5-05: meta-reasoning field aggregation (same Route, different per-worker meta-reasoning) | sub | MED | Touches 18-58's meta-reasoning + 24-00's `meta_reasoning_revision_history`. |

### R6 — First-ship-vs-deferred phase-progression options

| # | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|
| 28 | I-R6-01: ship N=1 only; document N>1 as future revision | core | HIGH | Q2's acceptable shipping alternative; literal reading. |
| 29 | I-R6-02: ship N=1 with extensibility hooks (schema-field provenance + per-worker telemetry slot even at N=1) | core | HIGH | Avoids breaking-change risk at N>1 transition. |
| 30 | I-R6-03: ship full N>1 design at first write | side | HIGH | Rejected by phase-fit principle — multi-head hasn't shipped. |
| 31 | I-R6-04: ship N=1 + per-aspect L1+/L2+ progression hooks (which aspects activate when) | core | HIGH | Refinement of I-R6-02 with explicit activation triggers. |
| 32 | I-R6-05: defer entire question to multi-head-ship time | side | MED | Violates Q2's SKILL.md-authoring gating role. |

### R7 — Q14 scope-distinction mechanisms

| # | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|
| 33 | I-R7-01: explicit scope-comment in protocol (Q2 = per-invocation; Q14 = cross-invocation) | core | HIGH | Clarity baseline. |
| 34 | I-R7-02: different file outputs (Q2 → `_navig.md` in invocation scope; Q14 → cross-inquiry file) | core | MED | Couples scope to artifact location. |
| 35 | I-R7-03: same mechanism, different scope (parameterize aggregation rules by scope) | sub | MED | Tempting but risks over-coupling. |
| 36 | I-R7-04: reserve `aggregation_scope` field for future Q14 use | sub | MED | Hedge / extension hook. |

### R8 — Schema-extension hooks (cross-cutting; supports R2 + R3 + R7)

| # | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|
| 37 | I-R8-01: `provenance_workers: List[str]` field on Route (SAFE at N=1 as `[single]`) | core | HIGH | Materializes I-R2-02. |
| 38 | I-R8-02: `aggregation_meta: dict` field on Route Map (SAFE at N=1 as `{worker_count: 1}`) | core | HIGH | Top-level aggregation metadata. |
| 39 | I-R8-03: `worker_telemetry: List[dict]` field in `_navig.md` (per-worker verbatim) | core | HIGH | Materializes I-R3-01. |
| 40 | I-R8-04: `dedup_evidence: dict` field per Route (surface used for dedup; absent at N=1) | sub | MED | Useful for audit; cost at L0 small. |
| 41 | I-R8-05: sub-route-level provenance (per-sub-route worker provenance vs inheriting parent's) | sub | MED | Depends on R5 choice. |

### R9 — Failure-mode handling for aggregation (cross-cutting; inherits 24-40 + Q5)

| # | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|
| 42 | I-R9-01: disagreement detection (workers contribute conflicting candidates) | core | HIGH | New failure mode unique to multi-worker. |
| 43 | I-R9-02: partial-worker handling (N-of-M workers have no completed cycle; emit INFO) | core | HIGH | Inherits 24-40's INFO/ERROR vocabulary. |
| 44 | I-R9-03: mid-write worker handling (atomic-write from Q5 mitigates; document inheritance) | core | HIGH | Direct inheritance from Q5. |
| 45 | I-R9-04: malformed contribution handling (Q6 validation layer emits WARN; aggregation continues) | core | HIGH | Direct inheritance from Q6. |
| 46 | I-R9-05: empty aggregation (all workers produced no candidates; emit empty Route Map with INFO) | sub | MED | Edge case; identity-preservation check. |

### R10 — Cross-cutting architectural invariants (inherited; non-negotiable)

| # | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|
| 47 | I-R10-01: singleton main navigator preserved (aggregation internal to one routeman invocation) | core | HIGH | From 16-31 + 14-39. |
| 48 | I-R10-02: file-mediated only (read worker artifacts via Q5 protocol; emit file artifacts) | core | HIGH | From 16-31 + Q5. |
| 49 | I-R10-03: enumerate-all identity (aggregation does not gate any movement type or candidate) | core | HIGH | From 02-00 + 06-00 critique D7. |
| 50 | I-R10-04: observe-only (aggregation does not modify worker artifacts) | core | HIGH | From 06-00 + Q5. |
| 51 | I-R10-05: isolated session (aggregation runs in routeman's own session; no cross-session state) | core | HIGH | From 16-31. |
| 52 | I-R10-06: L0/L1/L2+ phase progression (inherited from 24-40 + Q5 + Q6 + Q4 + Q3 + 02-00) | core | HIGH | Phase-progression pattern shared across all routeman-adjacent inquiries. |

## State Summary

### Territory-specification echo

Abstract-bounded design space for routeman's multi-worker aggregation protocol, bounded by 12 inherited priors + 7 explicit sub-aspects + corrected-architecture invariants + schema commitments from 24-00/18-58 + emission policy from 02-00 + protocol invariants from Q5/Q6.

### Purpose-specification echo

Design — produce a SKILL.md-authorable aggregation protocol that is phase-fit (no premature multi-head infrastructure), identity-preserving (singleton, file-mediated, enumerate-all, observe-only), and extensible to N>1 via explicit L0/L1/L2+ hooks.

### Coverage map

| Region | Status | Aggregate relevance |
|---|---|---|
| R1 dedup mechanisms | confirmed | core-dominant (3 core, 3 sub) |
| R2 provenance | confirmed | core-dominant (2 core, 2 sub, 1 side) |
| R3 telemetry aggregation | confirmed | core-dominant (3 core, 2 sub) |
| R4 priority allocation | confirmed | core-dominant (3 core, 2 sub, 1 side) |
| R5 hierarchical interaction | confirmed | core-dominant (4 core, 1 sub) |
| R6 phase-progression cut | confirmed | core-dominant (3 core, 2 side) |
| R7 Q14 scope distinction | confirmed | core-partial (2 core, 2 sub) |
| R8 schema extensions | confirmed | core-dominant (3 core, 2 sub) |
| R9 failure-mode handling | confirmed | core-dominant (4 core, 1 sub) |
| R10 invariants | confirmed | all-core (6 core, 0 sub) — inherited; non-negotiable |

### Confirmed-absent regions

None. Every region surfaced at least one core-relevant item. The asymmetric-failure principle (§4.4) favors inclusion over exclusion; no region is dismissed as containing no candidate-relevant items for the design.

### Concept-names list

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| candidate-id | coined-term | I-R1-01 | Deterministic identifier for a single next-move candidate. |
| dedup-surface | coined-term | I-R1-01/02 | The set of fields whose values determine candidate identity. |
| per-worker provenance | structural-reference | R2 | The "which worker produced this" attribution attached per Route. |
| worker_inquiry_path | structural-reference | I-R2-01 | The folder path identifying one worker's inquiry. |
| telemetry roll-up | coined-term | I-R3-03 | Aggregation rule for per-worker verdict lines (worst-case wins). |
| D1 confidence label | structural-reference | I-R4-02 | The LOW/MED/HIGH confidence per Route from 02-00. |
| per-route-type-split | structural-reference | I-R4-04 | The 02-00 principle of treating Progression/Re-orientation/Coordination Movement Families with different rules. |
| identity-preservation override | coined-term | I-R4-06 | The principle that priority is informational, not gating, because routeman enumerates-all. |
| hierarchical Route Map | structural-reference | R5 (from 18-58 FF-3) | Top-level Routes with stage-2 sub-routes per parent route. |
| extensibility hooks | coined-term | I-R6-02 | Schema fields/protocol slots present at L0 that activate at L1+/L2+. |
| aggregation_scope | coined-term | I-R7-04 | Proposed schema field distinguishing per-invocation vs cross-invocation aggregation. |
| disagreement detection | coined-term | I-R9-01 | Recognition signal for cross-worker conflicting contributions. |
| atomic-write inheritance | structural-reference | I-R9-03 | The POSIX-rename convention from Q5 that handles mid-write workers. |
| Q5 protocol | structural-reference | R10 / inheritance | The file-system protocol file `cognitive_harness/protocols/inquiry_filesystem_protocol.md` from Q5. |
| Q6 contracts | structural-reference | R10 / inheritance | The file-shape contract sections appended to the Q5 protocol file by Q6. |

### Recency distribution

All items are possibility-mode candidates with `{source: none, value: null}`. Per-region: `{R1-R10: {newest: null, oldest: null, no-mtime-count: 6/5/5/6/5/5/4/5/5/6, total-items: 6/5/5/6/5/5/4/5/5/6}}`.

### Frontier flags

| ID | Sub-region | Suggested refined-sub-purpose |
|---|---|---|
| FF-Q2-S1 | Multi-head trigger predicate | "What signal causes routeman to scan multiple worker folders vs one? — invocation parameter? auto-detect by folder presence? runner-supplied list?" |
| FF-Q2-S2 | Per-worker boundary delimiter | "What defines 'one worker's contribution'? — a folder; a `_state.md` Status COMPLETE marker; a runner-supplied list of paths?" |
| FF-Q2-S3 | Cross-worker scan order determinism | "Does the order in which routeman scans worker folders affect output? Per identity invariant, output must be deterministic — what canonical ordering rule?" |
| FF-Q2-S4 | Schema-extension acceptance vs Q12 | "Do proposed schema extensions (I-R8-01..05) cohere with Q12 schema-extensions (`meta_reasoning_revision_history` etc.) without breaking 18-58's 17/18-attribute commitments?" |
| FF-Q2-S5 | Phase-progression cleanliness | "Does the L0 = ship-N=1-with-hooks design leak multi-head assumptions into L0 runtime behavior, or is the L0 behavior degenerate-clean?" |
| FF-Q2-S6 | Dedup-vs-identity tension | "Does dedup gate outputs (violating enumerate-all)? Or is dedup orthogonal to gating because deduped candidate is still emitted with merged provenance?" |

### Workspace-populated status

`{populated: true, populated-at: 2026-05-24T10:00:00Z, extent: 52 items across 10 regions; 35 core + 14 sub + 3 side; 6 frontier flags}`

## Telemetry

- **Mode:** possibility / **Entry point:** signal-first
- **Cycles run:** 1 (no re-invocation needed; territory exhaustively covered at first-pass resolution)
- **Items enumerated:** 52 total (35 core / 14 sub / 3 side / 0 umbrella)
- **Sub-phase fired:** no (territory abstract-bounded)
- **Convergence criteria status:** met — bounded territory exhaustively traversed; no items filtered at uncertain-relevance level (per §4.5); items at low confidence (3 LOW) retained per asymmetric-failure principle (§4.4)
- **Workspace-overload trigger:** not fired
- **Failure modes checked:** Missed-relevance / Surfaced-irrelevance / Over-coverage / Territory-mis-binding / Workspace overload / Artifact under-specification / Workspace-artifact desync / Recency-Equates-Idleness / Recency-Bias-Filter / Interpretive-overstep / Purpose-loss / Self-coupling-to-downstream — none triggered
- **items_with_mtime:** 0 / **items_without_mtime:** 52 (all possibility-mode candidates)
- **Self-assessment verdict:** PROCEED

## Frontier

Six FF-Q2-S1..S6 sub-regions raised but not answered. These pass to Sensemaking for interpretive-resolution attempt; any remaining open after the pipeline pass at any discipline become Open Questions in the finding.

## Self-Assessment Verdict

**Overall: PROCEED**

All convergence criteria met; no LAYER-1 or LAYER-2 failure-mode flags raised; the 52-item inventory across 10 regions provides Sensemaking with sufficient surface to identify candidates, perspectives, and frame-exit completeness checks. 6 frontier flags pass forward as explicit interpretive-work targets.
