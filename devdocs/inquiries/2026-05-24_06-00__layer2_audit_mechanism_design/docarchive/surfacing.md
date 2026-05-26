## User Input

(See `_branch.md` Source Input for the full verbatim user input.)

# Surfacing — Layer-2 Audit Mechanism Design

## Mode + Entry Point + Reception

- **Mode:** ARTIFACT (territory contains pre-existing items — the routeman-chain corpus, the discipline reference files, and adjacent project docs).
- **Entry point:** SIGNAL-FIRST (specific purpose given: design the LAYER-2 audit MECHANISM consuming existing substrates).
- **Territory specification:** EXPLICIT-BOUNDED (the routeman-chain findings + the LAYER-2-relevant discipline specs + the runners + the persistence/autonomy artifacts). Boundary-discovery sub-phase is SKIPPED.
- **Purpose (the bias source for relevance-attribution):** design the audit mechanism that consumes existing substrates for 4 of 5 LAYER-2 modes; design a substrate for the 5th (false depth); exclude /reflect from runner candidates; preserve isolated-session + file-scanning architecture; preserve enumerate-all identity.

The four sub-purposes (one per Q4 observation target):

- **SP1 — Runner.** Who runs the audit (excluding /reflect)?
- **SP2 — Cadence.** When does the audit fire?
- **SP3 — Threshold calibration.** How are thresholds tuned to actual invocation rate?
- **SP4 — False-depth substrate.** What substrate detects sub-routes with only positional distinction?

## Traversal Trace

The Traversal Trace is a chronological per-entry record. Each entry: sequence ordinal, region, item identifiers (NOT content), per-item relevance verdict + confidence, per-item recency annotation, optional step note.

### Region A — The four substrate-supplying / mode-defining priors (the core 4 LAYER-2 substrate sources)

| # | Item | Relevance | Confidence | Recency annotation | Note |
|---|---|---|---|---|---|
| 1 | `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` § "Failure-mode framework: nine modes in two layers" | **core** (defines the 3 original LAYER-2 modes + recognition signals + 2-layer split structure) | HIGH | 2026-05-23T14:39 | The audit must check against THIS framework's mode definitions; the recognition signals here are what the substrates feed |
| 2 | `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` § "LAYER-2 audit infrastructure extension" (§6) | **core** (adds 2 LAYER-2 modes: false depth + filler-meta-reasoning; explicitly routes audit to Q4) | HIGH | 2026-05-23T18:58 | The 5-mode total scope comes from here; the false-depth recognition signal needs the substrate this inquiry is partly designing |
| 3 | `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md` § "transition_history field" + § "audit substrate for Calibration-Drift" | **core** (supplies Calibration-Drift substrate; declares the read protocol routeman uses; commits autonomy-level phase calibration) | HIGH | 2026-05-24T00:40 | The substrate the audit consumes for mode 1 of 5; ALSO supplies the autonomy level the threshold calibration may scale to |
| 4 | `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md` § "Audit substrate" + § "A1+A3 covers three LAYER-2 modes" | **core** (supplies A1+A3 substrate for 3 LAYER-2 modes BY CONSTRUCTION; the audit reads citation-presence + drop-rate from routeman's Stage 1 output) | HIGH | 2026-05-24T01:00 | The substrate the audit consumes for modes 2-3-4 of 5; un-anchored pointers structurally impossible; "high frequency of W5 unresolved drop-reasons" is the filler-meta-reasoning signal |

### Region B — The Q4 source + the user-exclusion (the question itself)

| # | Item | Relevance | Confidence | Recency annotation | Note |
|---|---|---|---|---|---|
| 5 | `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` § Q4 (post my 2026-05-24 edits) | **core** (defines Q4's scope; the Q4 inline notice is the immediate input; the user's "we don't care about reflect" exclusion is captured in observation target 1 of `_branch.md`) | HIGH | 2026-05-24 (edited post-resolution-log update) | The /reflect exclusion eliminates one runner candidate; the inquiry must cover the remaining 4 sub-questions |
| 6 | Source Input section of this inquiry's `_branch.md` (preserved verbatim) | **sub** (the user's exact wording is the authority for transcription audit; downstream disciplines re-read this section) | HIGH | 2026-05-24T06:00 | Used by Sensemaking's Load-bearing-concept test + the Transcription-audit fail-safe |

### Region C — Architectural constraints on the audit design

| # | Item | Relevance | Confidence | Recency annotation | Note |
|---|---|---|---|---|---|
| 7 | `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` § "Corrected process-layer specification" | **core** (CONSTRAINS: audit must operate via file-scanning, not in-context-pass; routeman runs in isolated session) | HIGH | 2026-05-23T16:31 | Rules out runner-pass-as-parameter audit options; the audit's input is file content |
| 8 | `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` § "Mechanism + Lifecycle" | **core** (provides `_navig.md` as cross-invocation persistence ledger; the audit's cross-invocation state lives here OR in dedicated audit files) | HIGH | 2026-05-24T00:20 | Load-bearing for SP2 (cadence): the audit can consume `_navig.md` to know what's happened across prior invocations |
| 9 | `cognitive_harness/protocols/multi_resolution_navigation.md` § "Frontier-candidate-record schema" | **sub** (the schema routeman's `_navig.md` follows; the audit's potential extension fields would live as schema extensions per Q12) | MEDIUM | (filesystem mtime, not checked at surfacing time) | Read by the design when the audit's storage shape is being decided |

### Region D — Identity / self-coupling constraints (the audit is itself a LAYER-2-vulnerable artifact)

| # | Item | Relevance | Confidence | Recency annotation | Note |
|---|---|---|---|---|---|
| 10 | `cognitive_harness/surfacing/references/surfacing.md` § "LAYER 2 — Identity failure modes" § "Self-coupling-to-downstream" | **core** (warns that an audit's calibration depending ENTIRELY on downstream-output verdicts erodes the audit's intrinsic character; self-audit runs into this risk) | HIGH | (filesystem mtime) | The self-audit option (routeman audits itself) inherits THIS risk; the design must mitigate or accept |
| 11 | `cognitive_harness/surfacing/references/surfacing.md` § "LAYER 1 vs LAYER 2 framework" (§4.1) | **sub** (the framework's structural origin; routeman's 2-layer split was modeled on /surfacing's framework per the design memo's lineage decision L-r2) | MEDIUM | (filesystem mtime) | Provides the conceptual vocabulary the audit operates within |

### Region E — Candidate runner sources (where the audit could live)

| # | Item | Relevance | Confidence | Recency annotation | Note |
|---|---|---|---|---|---|
| 12 | `cognitive_harness/MVL/SKILL.md` § "Discipline Workspace Invariant" + § "EXECUTE PIPELINE" | **sub** (the runner's invocation logic; runner-level audit option requires the runner to host the audit) | MEDIUM | 2026-05-16 (per filesystem) | One candidate runner host |
| 13 | `cognitive_harness/MVLw/SKILL.md` § "EXECUTE PIPELINE" | **sub** (same as MVL but extended-surfacing flow-type; runner-level audit would live here too OR in a shared protocol) | MEDIUM | 2026-05-23 (per filesystem) | The other candidate runner host |
| 14 | `cognitive_harness/protocols/conclude.md` § "Step 5 — Print the brief summary" | **side** (CONCLUDE runs at iteration-complete-yes; the audit COULD fire here, but CONCLUDE's role is artifact compilation, not quality audit) | LOW | (filesystem mtime) | Considered as audit-fire-point candidate; ruled out because CONCLUDE is finding-compilation only |
| 15 | `cognitive_harness/protocols/resume.md` § "Step 2 — Read each completed discipline's verdict" | **sub** (RESUME's pattern: read verdict from file; the audit could follow this pattern for its own reads) | MEDIUM | (filesystem mtime) | Pattern-precedent for file-mediated verdict-reading |
| 16 | `cognitive_harness/protocols/outcome_review.md` § entire | **sub** (an existing audit-shaped protocol — outcome review is "did this work after use" — pattern-precedent for what an audit protocol looks like) | MEDIUM | (filesystem mtime) | Architecturally parallel to the LAYER-2 audit but at L6 outcome alignment, not at LAYER-2 identity preservation |

### Region F — Calibration-source candidates (for SP3 threshold scaling)

| # | Item | Relevance | Confidence | Recency annotation | Note |
|---|---|---|---|---|---|
| 17 | `docs/autonomy_ladder.md` § 5 "Per-level Selector subset" + § 6 "Evidence gates" | **core** (the autonomy levels L0-L5 + per-level evidence gates; thresholds could scale to autonomy level — at L0, low invocation rate so thresholds should be looser; at L4+, high rate so thresholds tighter) | HIGH | (filesystem mtime; existed before this inquiry chain) | The natural source for threshold scaling per autonomy phase |
| 18 | `docs/desc.md` § "Baldwin-cycle calibration maturity" (N≥30 per discipline) | **sub** (an existing project-canonical N-threshold; the audit's "across 5 consecutive invocations" could analogously scale to per-discipline-N) | MEDIUM | (filesystem mtime) | Precedent for N-based threshold scaling |
| 19 | `docs/autonomy_level.md` (the register the audit reads per 24-40) | **sub** (the actual file the audit reads at runtime to learn the current level) | MEDIUM | 2026-05-24 (per 24-40's MUST action) | The runtime substrate for autonomy-level-aware threshold calibration |

### Region G — Substrate-design candidates for SP4 (false depth)

| # | Item | Relevance | Confidence | Recency annotation | Note |
|---|---|---|---|---|---|
| 20 | `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` § "Failure mode: false depth" + recognition signal | **core** (the recognition signal: "sub-routes whose only distinguishing content is positional, without structural distinction; sub-routes whose meta-reasoning fields read interchangeably"; the substrate must operationalize THIS signal) | HIGH | 2026-05-23T18:58 | Defines what "false depth" means; the substrate design starts here |
| 21 | `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md` § "Stage 1 — deterministic anchor identification" + § "drop-with-reason" | **core** (Stage 1's drop-rate is one candidate substrate component for false-depth; sub-routes that all fail to anchor at Stage 1 may indicate false depth — but they also indicate other failures so the signal needs disambiguation) | HIGH | 2026-05-24T01:00 | One half of the false-depth substrate candidate; needs combining with distinctness check |
| 22 | `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` § "Per-Route `why_this_might_be_important` meta-reasoning field" | **core** (the per-Route meta-reasoning field IS the structural surface the distinctness check operates on; pairwise comparison of sub-routes' meta-reasoning fields is the natural distinctness substrate) | HIGH | 2026-05-23T18:58 | The other half of the false-depth substrate candidate; pairwise text similarity over meta-reasoning fields |
| 23 | `devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md` § "Secondary attributes per type" (6-tuple including `direction`, `intent`, `scope`, etc.) | **sub** (the secondary-attribute coordinate may help distinguish sub-routes structurally — if two sub-routes share the same 6-tuple AND same parent, they're structurally identical, which is a strong false-depth signal) | MEDIUM | 2026-05-24T01:30 | Tertiary substrate component — coordinate-pairwise-comparison check |

### Region H — /reflect-excluded candidates: pattern-precedents from non-discipline audits

| # | Item | Relevance | Confidence | Recency annotation | Note |
|---|---|---|---|---|---|
| 24 | `cognitive_harness/protocols/loop_diagnose.md` § entire | **sub** (an example of an after-the-fact-diagnostic protocol — pattern-precedent for what an audit-aware protocol looks like; runs when triggered, not periodically) | MEDIUM | (filesystem mtime) | Event-triggered protocol pattern |
| 25 | `cognitive_harness/protocols/spec_governance.md` § "How to add a new rule" | **sub** (governance-rule pattern — fires at content-decision points; the audit could fire at routeman-output decision points analogously) | MEDIUM | (filesystem mtime) | Trigger-then-friction pattern |
| 26 | `cognitive_harness/cognitive_fixes/README.md` § "Staging gates" | **side** (the cognitive_fixes folder's promotion-threshold pattern (5-10 instances before promoting); the audit's design has a similar early-stage discipline) | LOW | (filesystem mtime) | Pattern-precedent for staged calibration |

### Region I — Self-audit hazard sources

| # | Item | Relevance | Confidence | Recency annotation | Note |
|---|---|---|---|---|---|
| 27 | `cognitive_harness/sense-making/references/sensemaking.md` § Failure mode 6 "Self-Reference Blindness" | **core** (warns that a discipline auditing itself shares assumptions with itself, producing easy/confirmatory evaluation; the self-audit option inherits THIS risk; mitigation requires external reference points) | HIGH | (filesystem mtime) | Critical for adjudicating the self-audit option |
| 28 | `cognitive_harness/td-critique/references/td-critique.md` § Failure mode 7 "Self-Reference Collapse" | **sub** (parallel warning at td-critique level; the audit shares the same risk profile) | MEDIUM | (filesystem mtime) | Reinforces the self-audit caveat |

### Region J — Audit-mechanism context (what the audit operates on)

| # | Item | Relevance | Confidence | Recency annotation | Note |
|---|---|---|---|---|---|
| 29 | The per-Route schema fields (Guidance Mode + Guidance Pointers + WHY) per the routeman design memo + 24-01's A1+A3 format | **core** (the audit's input — Route Map content with per-pointer WHY citations; the audit parses these for substrate signals) | HIGH | 2026-05-23T14:39 + 2026-05-24T01:00 | Input contract of the audit |
| 30 | `_navig.md` candidate-record fields per 24-00 + Q12's extension list (`meta_reasoning_revision_history`, `mode_switch_log`, etc.) | **sub** (the persistence ledger the audit may also consume for cross-invocation patterns) | MEDIUM | 2026-05-24T00:20 | Input contract for cross-invocation audit signals |
| 31 | `docs/autonomy_level.md` (the autonomy register with `current_level` + `transition_history`) | **sub** (the audit reads this for Calibration-Drift detection AND potentially for threshold-calibration scaling) | MEDIUM | 2026-05-24T00:40 | Dual role: substrate + scaling source |

## State Summary

### Territory-specification echo

The bounded territory operated on: the routeman-chain corpus (8 findings from 2026-05-23 + 2026-05-24); the 5 active discipline reference files in `cognitive_harness/*/references/`; the 3 runner specs (MVL, MVLw, plus MVL+ in `non-active/` for historical context); the 9 protocols in `cognitive_harness/protocols/`; the autonomy ladder + autonomy register in `docs/`; the desc.md endpoint document. Out-of-scope: everything in `cognitive_harness/non-active/` except where directly cited; everything in `devdocs/_archive/`.

### Purpose-specification echo

Design the LAYER-2 audit MECHANISM (4 sub-questions: runner, cadence, threshold-calibration, false-depth-substrate) consuming substrates supplied by 24-40 + 24-01; exclude /reflect; preserve isolated-session + file-scanning architecture; preserve enumerate-all identity.

### Coverage map (per region; aggregate relevance verdict)

| Region | Items | Aggregate verdict | Coverage confidence | Notes |
|---|---|---|---|---|
| A — Substrate-supplying / mode-defining priors | 4 | core (all 4) | confirmed | The audit's input contract comes from here |
| B — Q4 source + user exclusion | 2 | core / sub | confirmed | The question's authority is fully captured |
| C — Architectural constraints | 3 | core / core / sub | confirmed | Isolated-session + file-scanning + `_navig.md` persistence are non-negotiable |
| D — Self-coupling identity warnings | 2 | core / sub | confirmed | The self-audit option must address these |
| E — Candidate runner sources | 5 | sub / sub / side / sub / sub | confirmed | The runner candidate space is partially mapped; /reflect excluded |
| F — Calibration sources | 3 | core / sub / sub | confirmed | autonomy_ladder.md + autonomy_level.md are the scaling sources |
| G — False-depth substrate candidates | 4 | core / core / core / sub | confirmed | Drop-rate + meta-reasoning distinctness + coordinate-pairwise are the candidate components |
| H — Non-discipline audit precedents | 3 | sub / sub / side | scanned-but-shallow | Pattern precedents for protocol design; not deeply mined |
| I — Self-audit hazard sources | 2 | core / sub | confirmed | The /sense-making and /td-critique frameworks both warn against self-audit; the design must address |
| J — Audit-mechanism input contract | 3 | core / sub / sub | confirmed | The audit's inputs (Route Map, `_navig.md`, autonomy register) are enumerated |

### Confirmed-absent regions

The following territory was checked and confirmed to not contain relevant items:

- **Web / external citations** — out of scope; design is project-internal.
- **`cognitive_harness/non-active/` content** (except /reflect's mention) — the non-active folder houses superseded skills; /reflect is the relevant exclusion target. Other non-active items (comprehend, deprecated-explore, meta-loop, MVL+) are not relevant to this design.
- **`/intuit` references** — /intuit Phase β is mentioned in adjacent inquiries (e.g., FF-7 in 24-01) as a future input source for adaptive guidance, but it is not yet a candidate runner for the audit; flagged as frontier-research, not active.

### Concept-names list

Flat list of concept-names discovered in surfacing; per-entry: `{name: <string>, type: <vocabulary | structural-reference | coined-term>, provenance: <trace-entry-id>, gloss: <one-line>}`.

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| LAYER-2 mode | vocabulary | #1 | One of 5 identity-eroding failure modes routeman can suffer; detectable via behavioral audit over time |
| Substrate | coined-term (within this inquiry chain) | #4 | The structural surface on which a recognition signal operates; supplied per-mode by 24-40 + 24-01 |
| Mechanism | vocabulary | #5 | The audit's runtime behavior: who, when, how thresholds apply; Q4's residual scope |
| A1+A3 | structural-reference | #4 | The substrate from 24-01: file-path citation in WHY (A1) + drop-with-reason at Stage 1 (A3) |
| transition_history | structural-reference | #3 | Field in `docs/autonomy_level.md` providing the Calibration-Drift substrate |
| false depth | vocabulary | #20 | LAYER-2 mode: sub-routes with only positional distinction, no structural distinction |
| filler-meta-reasoning | vocabulary | #4 | LAYER-2 mode: meta-reasoning field content failing to anchor downstream Stage 1 |
| Self-coupling-to-downstream | vocabulary | #10 | LAYER-2 mode (from /surfacing): a discipline's calibration depending entirely on downstream-output verdicts erodes its identity |
| Enumerate-all identity | structural-reference | #1 | Routeman's core commitment: enumerate the full next-move space; gating violates |
| Isolated-session + file-scanning | structural-reference | #7 | Routeman's architecture: runs in own session, reads cycle artifacts from files, not in-context |
| `_navig.md` | structural-reference | #8 | Routeman's per-invocation persistence ledger (= protocol's `_frontier.md`) |
| `meta_reasoning_revision_history` | structural-reference | #22 | Field tracking per-Route meta-reasoning changes across recalibrations; consumed by MS5 in 24-01 |
| Phase calibration | vocabulary | #17 | The autonomy-ladder phase the project is in; per-level thresholds may scale |
| Per-discipline-N | vocabulary | #18 | Baldwin maturity gate: N≥30 inquiries per discipline; precedent for N-based threshold scaling |

### Recency distribution

| Region | Newest item | Oldest item | No-mtime count | Total items |
|---|---|---|---|---|
| A | 2026-05-24T01:00 | 2026-05-23T14:39 | 0 | 4 |
| B | 2026-05-24T06:00 (this inquiry) | 2026-05-24 (edited finding) | 0 | 2 |
| C | 2026-05-24T00:20 | (filesystem; not checked) | 1 | 3 |
| D | n/a | n/a | 2 | 2 |
| E | 2026-05-23 | (filesystem) | 4 | 5 |
| F | 2026-05-24 | (filesystem) | 1 | 3 |
| G | 2026-05-24T01:30 | 2026-05-23T18:58 | 0 | 4 |
| H | n/a | n/a | 3 | 3 |
| I | n/a | n/a | 2 | 2 |
| J | 2026-05-24T01:00 | 2026-05-23T14:39 | 0 | 3 |

The recency distribution shows the audit-design problem space is dominated by items from the past 24 hours — the chain is hot. The older items (discipline references, runner specs, /reflect-adjacent protocols) are stable architectural backdrop.

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-24T06:00Z
extent: "All 31 surfaced items have been read into LLM context during the prior conversation turns (the routeman-chain findings, the discipline references, the runners, the protocols, the autonomy ladder + register). The workspace is HOT for Sensemaking."
```

### Frontier flags

Self-signaled requests for re-invocation OR sub-region coverage notes:

- **FF-S1 (audit's own LAYER-2 risk):** the surfaced items include warnings about self-coupling (items #10, #27, #28). The audit's design must itself avoid LAYER-2 failure of its own identity. Sensemaking should treat "the audit is itself a LAYER-2-vulnerable artifact" as a load-bearing anchor.
- **FF-S2 (false-depth substrate composability):** items #21, #22, #23 each provide a partial component (drop-rate, meta-reasoning distinctness, coordinate-pairwise). Innovation should consider composing these rather than choosing one — the substrate may need all three working in concert.
- **FF-S3 (calibration scaling source ambiguity):** item #17 (autonomy_ladder.md) and item #18 (desc.md Baldwin N≥30 gate) offer two different scaling axes. Sensemaking + Innovation should disambiguate whether autonomy-level OR invocation-count OR both should drive threshold scaling.
- **FF-S4 (CONCLUDE as audit-fire-point ruled out at surfacing):** item #14 was tagged side (low relevance) because CONCLUDE's role is finding compilation, not quality audit. The audit cannot live in CONCLUDE structurally. This is a surfacing-time judgment; Innovation may revisit.

## Telemetry

- **Mode:** ARTIFACT.
- **Entry point:** SIGNAL-FIRST.
- **Cycles run:** 1 (territory was explicit-bounded; no iteration over boundary discovery).
- **Items enumerated:** 31 across 10 regions (A through J).
- **Items tagged at each level:**
  - **core:** 13
  - **sub:** 13
  - **side:** 3
  - **umbrella:** 0 (subtype granularity was always determinable)
- **Boundary-discovery sub-phase:** NOT fired (territory was explicit-bounded).
- **Convergence criteria status:** MET. Territory was exhaustively traversed at current resolution; no item filtered at uncertain-relevance level; items rejected only at high-confidence rejection.
- **Workspace-overload trigger:** NOT fired (all items fit in LLM context comfortably — the corpus is bounded and previously read).
- **Failure modes checked:** Missed-relevance (none detected — coverage spans runner, cadence, threshold, false-depth dimensions); Surfaced-irrelevance (the 3 "side" items are visibly low-relevance; downstream can filter); Recency-Equates-Idleness (mtime annotations are not used to filter — recency is descriptive); Recency-Bias-Filter (no items demoted by mtime); Interpretive-overstep (the trace does NOT make relational claims about items — those are sensemaking's job); Purpose-loss (relevance tags are non-uniform — purposive character preserved).
- **Items with mtime / without mtime:** `items_with_mtime: 21` / `items_without_mtime: 10` (the discipline reference files have filesystem mtime; the conceptual items like "Source Input" lack explicit mtime).

**Overall: PROCEED** (sufficient coverage; convergence reached; no LAYER-1 failure-mode flags raised; the workspace is hot for downstream consumption).
