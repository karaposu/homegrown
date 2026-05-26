## User Input

(See `_branch.md` Source Input for the full verbatim user input.)

# Surfacing — File-System Protocol (workers / routeman / runners)

## Mode + Entry Point + Reception

- **Mode:** ARTIFACT (territory contains pre-existing items — the routeman-chain corpus, the discipline reference files, the runner specs, the protocols, the actual artifact files in `devdocs/inquiries/`).
- **Entry point:** SIGNAL-FIRST (specific purpose given: design the WORKER-WRITE side of the file-system protocol, building on 24-00's ROUTEMAN-OUTPUT commitments and resolving FF-1 through FF-5).
- **Territory specification:** EXPLICIT-BOUNDED. Boundary-discovery sub-phase SKIPPED.
- **Purpose (the bias source for relevance-attribution):** design the file-system protocol covering 7 sub-aspects; preserve isolated-session + file-scanning architecture; inherit 24-00's commitments; resolve 16-31's FF-1 through FF-5.

The seven sub-purposes (one per Question 5 observation target):

- **SP1 — Folder topology** (FF-2): which folders routeman scans.
- **SP2 — Filename patterns + section structures** workers write.
- **SP3 — Write-completeness signaling** (FF-3).
- **SP4 — Routeman's completion-emission shape**.
- **SP5 — Partial-failure handling** (incl. FF-4).
- **SP6 — Scan detection mechanism** (FF-1).
- **SP7 — Scan-scope economy** (FF-5).

## Traversal Trace

The Traversal Trace is a chronological per-entry record. Each entry: sequence ordinal, region, item identifier (NOT content), per-item relevance verdict + confidence, per-item recency annotation, optional step note.

### Region A — The architecture constraint + the 5 sub-frontiers (FF-1 through FF-5)

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 1 | `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` §"Corrected process-layer specification" + §"5 new frontier sub-questions" | **core** (the architecture commitment + the 5 FFs this design must resolve) | HIGH | 2026-05-23T16:31 | Routeman runs in isolated session + scans worker-produced inquiry-folder artifacts; the 5 FFs (FF-1 scan detection / FF-2 folder topology / FF-3 write-completeness / FF-4 partial-state read protection / FF-5 scan-scope economy) are the design surface |
| 2 | `_branch.md` Source Input section (preserved verbatim) | **sub** (user's gating + "dive deep" + 5-aspect coverage requirement) | HIGH | 2026-05-24T07:30 | Authority for transcription audit; SP1-SP7 enumeration anchor |

### Region B — The already-committed ROUTEMAN-OUTPUT side (24-00)

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 3 | `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` §2.2 (Naming) + §2.3 (Placement) + §2.4 (Lifecycle) | **core** (the ROUTEMAN-OUTPUT commitments this inquiry inherits and does NOT re-litigate) | HIGH | 2026-05-24T00:20 | `_navig.md` + `routeman.md` naming; hybrid placement by invocation scope (per-inquiry vs `devdocs/navigation/<run-id>/`); persistent + in-place evolution + append lifecycle |
| 4 | `cognitive_harness/protocols/multi_resolution_navigation.md` §"Output Contract" + §"Frontier Candidate Record" | **core** (the protocol routeman uses for persistence; the schema's per-candidate-record fields; the `output_root/children/<route-id>/` child-map convention) | HIGH | (filesystem mtime) | The structural base the routeman-output side inherits + extends via Q12's schema extensions |

### Region C — The runners (MVL, MVLw) + their EXECUTE PIPELINE

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 5 | `cognitive_harness/MVL/SKILL.md` §"Path vocabulary" + §"EXECUTE PIPELINE" + §"Discipline Workspace Invariant" | **core** (the runner's invocation choreography; the per-discipline output-file convention; the inquiry-folder structure the runner creates) | HIGH | 2026-05-16 (filesystem) | The runner creates `inquiry_path = devdocs/inquiries/<YYYY-MM-DD_HH-MM__slug>/`; discipline outputs save in that folder; `_state.md` tracks progress |
| 6 | `cognitive_harness/MVLw/SKILL.md` §"EXECUTE PIPELINE" + §"Discipline Workspace Invariant" | **sub** (analogous to MVL; extended-surfacing flow-type) | MEDIUM | 2026-05-23 (filesystem) | Same write conventions; flow-type field in `_state.md` distinguishes runners |
| 7 | `cognitive_harness/protocols/branch_inquiry.md` §6 (Write child `_branch.md`) + §7 (Write child `_state.md`) + §8 (Update parent `_branches.md`) | **core** (the branch-inquiry folder structure; routeman scans these too; the protocol must handle nested branches) | HIGH | (filesystem mtime) | `[parent_path]/branches/[branch_id]/` nesting; parent index `_branches.md` |
| 8 | `cognitive_harness/protocols/conclude.md` §3 (Archive discipline outputs) + §4 (Update `_state.md`) | **core** (CONCLUDE archives outputs to `docarchive/`; updates `_state.md` Status → COMPLETE; this is the natural write-completeness signal source) | HIGH | (filesystem mtime) | After CONCLUDE: artifacts moved to `docarchive/`; `finding.md` in root; `_state.md` Status = COMPLETE |
| 9 | `cognitive_harness/protocols/resume.md` §2 (Read each completed discipline's verdict) + §4 (Update `_state.md`) | **core** (RESUME reads `**Overall: PROCEED/FLAG/RE-RUN**` lines from discipline outputs; the audit + routeman can adopt the same pattern) | HIGH | (filesystem mtime) | Pattern-precedent for file-mediated verdict-reading; pattern routeman + audit inherit |

### Region D — The discipline-spec writes (what each worker produces)

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 10 | `cognitive_harness/sense-making/SKILL.md` + reference §"Execute the Following Process" | **sub** (writes `sensemaking.md` with SV1-SV6 + telemetry; PROCEED verdict line emitted) | MEDIUM | (filesystem mtime) | Worker discipline; produces canonical-named file in inquiry folder |
| 11 | `cognitive_harness/innovate/SKILL.md` + reference §"Mechanism Coverage Telemetry" | **sub** (writes `innovation.md` with mechanism log + 5-test outputs + telemetry; PROCEED verdict emitted) | MEDIUM | (filesystem mtime) | Same |
| 12 | `cognitive_harness/td-critique/SKILL.md` + reference §"Convergence Telemetry" | **sub** (writes `critique.md` with Phase 0-4 outputs + verdict) | MEDIUM | (filesystem mtime) | Same |
| 13 | `cognitive_harness/decompose/SKILL.md` + reference §"Self-Evaluate" | **sub** (writes `decomposition.md` with 7-step output) | MEDIUM | (filesystem mtime) | Same |
| 14 | `cognitive_harness/surfacing/SKILL.md` + reference §5.6 Telemetry | **sub** (writes `surfacing.md` with Trace + Summary + telemetry; PROCEED verdict emitted) | MEDIUM | (filesystem mtime) | Same |

### Region E — Adjacent protocol patterns (pattern-precedents)

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 15 | `cognitive_harness/protocols/loop_diagnose.md` §"Step 2 - Verify paths and artifact availability" | **sub** (pattern-precedent for file-availability-checking + halt-on-missing) | MEDIUM | (filesystem mtime) | An existing protocol that scans inquiry folders + reads files |
| 16 | `cognitive_harness/protocols/outcome_review.md` §"Step 1 - Normalize the Input Contract" + §"Step 2 - Verify Source and Evidence" | **sub** (pattern-precedent for file-path verification + read fallback) | MEDIUM | (filesystem mtime) | Another file-scanning protocol; uses 3-tier failure handling (INFO/ERROR/ERROR pattern) |
| 17 | `cognitive_harness/protocols/artifact_materialization.md` §"Step 9 - Implementation Rules" + §"Step 10 - Validation and Outcome" + §"Step 11 - Materialization Trace" | **sub** (pattern-precedent for stay-inside-write-set + preserve-unrelated-edits + atomic-trace-write) | MEDIUM | (filesystem mtime) | Materialization's write-set semantics inform the protocol's worker-write-set discipline |

### Region F — Inheritance from 24-40 (autonomy register's 3-tier failure handling)

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 18 | `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md` §2 (Read protocol) + §"3-tier failure-handling vocabulary (INFO / ERROR / ERROR)" | **core** (the 3-tier vocabulary the file-system protocol's partial-failure handling inherits; the read-convention pattern) | HIGH | 2026-05-24T00:40 | INFO = absent file (default + warn); ERROR = malformed (halt); ERROR = out-of-range (halt). Pattern-precedent for SP5 partial-failure handling |
| 19 | `devdocs/inquiries/2026-05-24_06-00__layer2_audit_mechanism_design/finding.md` §"P5 Substrate consumption" + §"Per-mode dispatch table" | **core** (the audit's reads from this protocol's writes; the audit's per-mode dispatch table is one consumer of the protocol; the protocol must support the audit's read patterns) | HIGH | 2026-05-24T06:00 | The audit reads `routeman.md`, `_navig.md`, `docs/autonomy_level.md`, routeman SKILL.md — all per-this-protocol's read conventions |

### Region G — Filesystem patterns + concurrency / atomicity precedents

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 20 | The POSIX rename-atomicity convention (cross-domain knowledge) | **sub** (the standard pattern for atomic write: write to temp + rename to final = atomic on POSIX filesystems) | HIGH | n/a | Atomic-write pattern available without additional infrastructure; pattern for SP3 write-completeness via final-rename being the write-complete signal |
| 21 | The `_state.md` Status field semantics (per CONCLUDE protocol's §4) | **core** (the existing project convention for marking inquiry completion; can be extended to mark per-discipline completion) | HIGH | (filesystem mtime via CONCLUDE) | Existing artifact carrying completion semantics; natural anchor for SP3 |

### Region H — The actual inquiry folders (devdocs/inquiries/) — empirical pattern observation

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 22 | `devdocs/inquiries/2026-05-24_06-00__layer2_audit_mechanism_design/` (just-completed; this conversation's own inquiry chain) | **sub** (empirical example of the current inquiry-folder structure: `_branch.md` + `_state.md` + `finding.md` + `docarchive/`) | HIGH | 2026-05-24T06:00 | Observable real folder; confirms the canonical structure |
| 23 | `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/` (the routeman design memo's inquiry folder) | **sub** (another empirical example; demonstrates the structure scales to longer-lived inquiries) | HIGH | 2026-05-23T14:39 | Observable real folder |
| 24 | The 11 recent inquiry folders surveyed in earlier conversation work | **sub** (empirical population; all share the same structure) | HIGH | 2026-05-23 to 2026-05-24 | Confirms convention is stable; no inquiry folder breaks the structure |

### Region I — Routeman-output-side (already-committed; scope-out for this inquiry)

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 25 | `_navig.md` per-invocation file (per 24-00) | **side** (already committed; documented for completeness; this inquiry does not re-litigate) | MEDIUM | (24-00's commitment) | Carries the frontier ledger + routeman's metadata |
| 26 | `routeman.md` per-invocation file (per 24-00) | **side** (already committed) | MEDIUM | (24-00's commitment) | Carries the route map content |
| 27 | `_audit.md` parallel file (per 06-00's audit design) | **sub** (the audit's output file; this protocol must accommodate it in the folder structure) | MEDIUM | 2026-05-24T06:00 | Audit's output lives alongside `_navig.md` + `routeman.md` per the hybrid placement pattern |

### Region J — Multi-head + future-state architectural anchor

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 28 | `docs/desc.md` §"multi-head loops" + `docs/autonomy_ladder.md` §"L4 Evaluator at multi-head" | **sub** (future-state: N parallel workers writing to N inquiry folders; the protocol must accommodate N>1 concurrent writers + routeman's singleton-scan across N folders) | MEDIUM | (filesystem mtime; pre-existing) | Informs SP5 partial-failure handling under concurrency + SP7 scan-scope economy as N grows |
| 29 | Memory: "End-goal loop architecture" (multi-head + merging loops trajectory) | **sub** (project trajectory commits multi-head; the protocol must not preclude it) | HIGH | (memory) | Same as #28 from the memory layer |

## State Summary

### Territory-specification echo

Bounded territory: routeman-chain corpus (8 findings); 5 active discipline reference files; 3 active runner specs (MVL, MVLw, [implicit] /MVL+ for backward compatibility); 9 active protocols in `cognitive_harness/protocols/`; the autonomy ladder + register in `docs/`; an empirical sample of recent inquiry folders. Out-of-scope: `cognitive_harness/non-active/` (except cited /reflect-exclusion context from earlier inquiry); `devdocs/_archive/`.

### Purpose-specification echo

Design the WORKER-WRITE side of the file-system protocol covering 7 sub-aspects (SP1-SP7); inherit 24-00's ROUTEMAN-OUTPUT commitments verbatim (scope-out); resolve 16-31's FF-1 through FF-5; preserve isolated-session + file-scanning architecture; preserve enumerate-all identity; phase-fit at L0.

### Coverage map (per region; aggregate relevance verdict)

| Region | Items | Aggregate verdict | Coverage confidence | Notes |
|---|---|---|---|---|
| A — Architecture + 5 FFs | 2 | core / sub | confirmed | The architecture constraint and design surface are fully enumerated |
| B — Already-committed ROUTEMAN-OUTPUT | 2 | core / core | confirmed | Scope-out for re-litigation; cited as inheritance |
| C — Runners + their pipelines | 5 | core / sub / core / core / core | confirmed | Runner choreography + branch protocol + CONCLUDE + RESUME all surfaced |
| D — Discipline-spec writes | 5 | all sub | confirmed | All 5 worker disciplines write canonical-named outputs |
| E — Adjacent protocol patterns | 3 | sub / sub / sub | scanned-but-shallow | Pattern-precedents inform the design; not deeply mined |
| F — Inheritance from 24-40 + 06:00 | 2 | core / core | confirmed | 3-tier failure handling + audit-consumer surfaces inherited |
| G — Filesystem / atomicity primitives | 2 | sub / core | confirmed | Atomic-rename pattern available; `_state.md` Status field anchor |
| H — Empirical inquiry-folder structure | 3 | sub / sub / sub | confirmed | Real folders confirm the convention |
| I — Routeman-output-side scope-out | 3 | side / side / sub | confirmed | Documented for context; not re-litigated |
| J — Multi-head future-state | 2 | sub / sub | confirmed | Informs partial-failure + scan-scope economy designs |

### Confirmed-absent regions

- **External web sources** — out of scope.
- **`cognitive_harness/non-active/`** — only /reflect was relevant historically (per Q4 user exclusion); no other non-active item informs this protocol.
- **Database systems / distributed-systems literature** — the project has none; out of scope (the design must be filesystem-only).
- **External schedulers / cron / orchestration frameworks** — the project has none; out of scope.

### Concept-names list

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| Worker session | vocabulary | #1 | An isolated session running an MVL pipeline, writing inquiry-folder artifacts |
| Routeman session | vocabulary | #1 | The isolated session (per 16-31) where routeman runs; reads worker artifacts via file-scanning |
| Runner | vocabulary | #5 | The orchestration spec (/MVL, /MVLw) that invokes workers + routeman |
| Inquiry folder | structural-reference | #5 | `devdocs/inquiries/<YYYY-MM-DD_HH-MM__slug>/` (root) or `[parent]/branches/[branch_id]/` (branch) |
| File-system protocol | coined-term (this inquiry) | #1 | The protocol governing where + when + how the three roles read/write files |
| Write-completeness signal | coined-term | #1 (FF-3) | The mechanism by which a worker indicates its artifact is fully written |
| Scan detection | coined-term | #1 (FF-1) | How routeman knows which files are new since its last scan |
| Atomic-write | structural-reference | #20 | POSIX `rename(2)` atomicity; write-to-temp-then-rename pattern |
| 3-tier failure handling | structural-reference | #18 | INFO (default + warn) / ERROR (halt) / ERROR (halt) pattern inherited from 24-40 |
| Scan-scope economy | coined-term | #1 (FF-5) | The bounding mechanism that keeps routeman's scan cost manageable as corpus grows |
| Partial-state read protection | coined-term | #1 (FF-4) | The mechanism preventing routeman from reading mid-write files |

### Recency distribution

| Region | Newest item | Oldest item | No-mtime count | Total items |
|---|---|---|---|---|
| A | 2026-05-24T07:30 | 2026-05-23T16:31 | 0 | 2 |
| B | 2026-05-24T00:20 | (filesystem) | 1 | 2 |
| C | 2026-05-23 | (filesystem) | 4 | 5 |
| D | n/a | n/a | 5 | 5 |
| E | n/a | n/a | 3 | 3 |
| F | 2026-05-24T06:00 | 2026-05-24T00:40 | 0 | 2 |
| G | n/a | n/a | 2 | 2 |
| H | 2026-05-24T06:00 | 2026-05-23T14:39 | 0 | 3 |
| I | 2026-05-24T06:00 | 2026-05-24T00:20 | 0 | 3 |
| J | n/a | n/a | 2 | 2 |

The recency distribution shows the active-design items concentrated in the past 24-48 hours (the routeman chain). Architectural backdrop items (discipline specs, runners, protocols) are stable.

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-24T07:30Z
extent: "All 29 surfaced items have been read into LLM context during the prior conversation turns. The workspace is HOT for Sensemaking."
```

### Frontier flags

- **FF-S1 (the 5 FFs from 16-31 must all be resolved or explicitly carried-forward):** the user's gating + the Q5 candidate resolution path explicitly require addressing FF-1 through FF-5. Sensemaking + Decomposition must ensure each FF has a sub-piece in the decomposition.
- **FF-S2 (ROUTEMAN-OUTPUT side is scope-out — do not re-litigate):** Region B is referenced but not re-designed. Sensemaking should treat 24-00's commitments as fixed input.
- **FF-S3 (atomic-write primitive availability):** item #20 (POSIX rename atomicity) provides a primitive that the protocol can use without introducing new infrastructure. Innovation should consider this as a substrate for SP3 write-completeness signaling.
- **FF-S4 (`_state.md` Status field as natural anchor):** item #21 — the existing project convention for marking inquiry completion can extend to per-discipline completion or be reinforced as the canonical write-completeness signal. Innovation should evaluate `_state.md`-based vs marker-file-based signaling.
- **FF-S5 (multi-head future-state must be accommodated):** items #28-29 — the protocol must not preclude N parallel workers. SP5 partial-failure handling under concurrency + SP7 scan-scope economy are most affected.
- **FF-S6 (the audit at 06:00 is a downstream consumer):** item #19 — the audit's per-mode dispatch table reads files written by this protocol. The protocol's filename / section conventions must be stable enough for the audit to anchor on.

## Telemetry

- **Mode:** ARTIFACT.
- **Entry point:** SIGNAL-FIRST.
- **Cycles run:** 1.
- **Items enumerated:** 29 across 10 regions (A-J).
- **Items tagged at each level:**
  - **core:** 11
  - **sub:** 15
  - **side:** 3
  - **umbrella:** 0
- **Boundary-discovery sub-phase:** NOT fired.
- **Convergence criteria status:** MET. Territory exhaustively traversed; no item filtered at uncertain-relevance level; items rejected only at high-confidence rejection.
- **Workspace-overload trigger:** NOT fired.
- **Failure modes checked:** Missed-relevance (none — coverage spans all 7 sub-aspects + inheritance + future-state); Surfaced-irrelevance (the 3 "side" items are visibly scope-out — documented as such); Recency-Equates-Idleness (mtime not used for filtering); Recency-Bias-Filter (no demotion by mtime); Interpretive-overstep (no relational claims among items — sensemaking's job); Purpose-loss (relevance tags non-uniform; purposive character preserved).
- **Items with mtime / without mtime:** `items_with_mtime: 17` / `items_without_mtime: 12`.

**Overall: PROCEED** (sufficient coverage; convergence reached; no LAYER-1 failure-mode flags raised; workspace is hot for downstream consumption).
