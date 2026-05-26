## User Input

(See `_branch.md` Source Input for the full verbatim user input.)

# Surfacing — File-Shape Contracts

## Mode + Entry Point + Reception

- **Mode:** ARTIFACT (territory = the 5 worker discipline reference files + their SKILL.md files + the runner specs + Q5's file-system protocol resolution + the audit's per-mode dispatch table + the adaptive-guidance Stage 1 reads + the routeman-chain corpus).
- **Entry point:** SIGNAL-FIRST (specific purpose: design per-discipline file-shape contracts + validation layer + enforcement-strength commitment).
- **Territory specification:** EXPLICIT-BOUNDED. Boundary-discovery sub-phase SKIPPED.
- **Purpose:** design contracts that (a) match existing discipline-spec outputs (no breaking changes); (b) support audit + adaptive-guidance reads from 06-00 + 01-00; (c) compose with Q5's file-system protocol from 07-30; (d) commit a phase-fit enforcement strength.

Sub-purposes:
- **SP1** — sensemaking.md contract.
- **SP2** — innovation.md contract.
- **SP3** — critique.md contract.
- **SP4** — decomposition.md contract.
- **SP5** — surfacing.md contract.
- **SP6** — `_state.md` + `_branch.md` inquiry-level contracts.
- **SP7** — file-validation layer (where it lives; what it does; what it emits).
- **SP8** — enforcement strength choice + L0/L1/L2+ phase progression.

## Traversal Trace

### Region A — Q5's file-system protocol (the foundation this inquiry layers on)

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 1 | `devdocs/inquiries/2026-05-24_07-30__file_system_protocol_workers_routeman_runners/finding.md` §"Per-discipline write-completeness signal" + §"Filename patterns + section structures" | **core** | HIGH | 2026-05-24T07:30 | Q5 committed atomic-write + verdict-line two-part completeness check + filename patterns (documented existing conventions). This inquiry's contracts SAY what's INSIDE each file; Q5 says how files are written/signaled |
| 2 | Q5's §"Partial-failure handling — 3-tier" (INFO / ERROR / ERROR) | **core** | HIGH | 2026-05-24T07:30 | The validation layer's failure handling inherits this 3-tier vocabulary |

### Region B — Worker discipline reference files (the canonical sources)

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 3 | `cognitive_harness/sense-making/SKILL.md` + `references/sensemaking.md` §"Execute the Following Process" + §"Telemetry" (post my earlier reading) | **core** | HIGH | (filesystem) | SV1-SV6 + 5 phases + Telemetry verdict line; defines what sensemaking.md contains |
| 4 | `cognitive_harness/innovate/SKILL.md` + `references/innovate.md` §"Mechanism Coverage Telemetry" + §"Production-task additional telemetry" | **core** | HIGH | (filesystem) | Seed + Generate per mechanism + 5-test cycle + Coverage Telemetry verdict line |
| 5 | `cognitive_harness/td-critique/SKILL.md` + `references/td-critique.md` §"Phase 0-4" + §"Convergence Telemetry" | **core** | HIGH | (filesystem) | Phase 0-4 + per-candidate SURVIVE/REFINE/KILL verdicts + Convergence Telemetry verdict line |
| 6 | `cognitive_harness/decompose/SKILL.md` + `references/decompose.md` §"Final Deliverable" (7 step outputs) | **core** | HIGH | (filesystem) | 7-step output: Coupling Map / Question Tree / Interface Map / Dependency Order / Self-Evaluation. **Note: /decompose's spec does NOT commit a verdict line in the same Telemetry format as the other 4 disciplines** — gap to address |
| 7 | `cognitive_harness/surfacing/SKILL.md` + `references/surfacing.md` §5.4-5.7 (Traversal Trace + State Summary + Telemetry + Frontier) | **core** | HIGH | (filesystem) | Traversal Trace + State Summary + Telemetry verdict line |

### Region C — Inquiry-level file structure sources

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 8 | `cognitive_harness/MVLw/SKILL.md` §"If NEW" + "If RESUME" + `_branch.md` template + `_state.md` template | **core** | HIGH | 2026-05-23 (filesystem) | The runners' templates for `_branch.md` (Question, Goal, Source Input, Scope Check, Layer Commitment, Synthesis Trigger) + `_state.md` (Flow-type, Pipeline, Progress, Iteration, Status, Next Discipline, Relationships, History) |
| 9 | `cognitive_harness/MVL/SKILL.md` §"If NEW" + templates | **sub** | HIGH | 2026-05-16 (filesystem) | MVL's simpler templates (classic flow-type; S → I → C pipeline) |
| 10 | `cognitive_harness/protocols/conclude.md` §"Step 4 Update `_state.md`" + finding.md template + §"Step 3 Archive discipline outputs" | **core** | HIGH | (filesystem) | CONCLUDE updates `_state.md` Status: COMPLETE + writes `finding.md` + archives discipline outputs to `docarchive/`. These are post-CONCLUDE file states |
| 11 | `cognitive_harness/protocols/branch_inquiry.md` §"Step 6 Write child `_branch.md`" + §"Step 7 Write child `_state.md`" | **core** | HIGH | (filesystem) | Branch inquiry templates for child `_branch.md` + `_state.md` |
| 12 | `cognitive_harness/protocols/resume.md` §2 (Read each completed discipline's verdict) | **core** | HIGH | (filesystem) | The verdict-line pattern `**Overall: PROCEED**` / `FLAG` / `RE-RUN` — already the existing convention; this inquiry's per-discipline contracts formalize it |

### Region D — Downstream consumer reads (audit + adaptive-guidance)

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 13 | `devdocs/inquiries/2026-05-24_06-00__layer2_audit_mechanism_design/finding.md` §"Per-mode dispatch table" + per-mode read protocol entries | **core** | HIGH | 2026-05-24T06:00 | Audit reads: `_state.md` + `routeman.md` Guidance Pointers (A1+A3 substrate) + `_navig.md` Stage-1 drop-with-reason log + `docs/autonomy_level.md` `transition_history`. The contracts MUST support these reads |
| 14 | `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md` §"Stage 1 — deterministic anchor identification" + §"Per-movement-type mapping" | **core** | HIGH | 2026-05-24T01:00 | Adaptive guidance reads `critique.md` SURVIVE/REFINE/KILL verdicts + `sensemaking.md` Constraints/Key-Insights + meta-reasoning field. The contracts MUST support these reads |

### Region E — Architecture + project conventions

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 15 | `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` §"Corrected process-layer specification" | **sub** | HIGH | 2026-05-23T16:31 | File-mediated architecture; the validation layer operates on file content read via the scan |
| 16 | `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` §"Routeman's identity at meaning layer" | **sub** | HIGH | 2026-05-23T14:39 | Cycle-consumer position; the contracts formalize what's consumed |
| 17 | `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md` §"Read protocol" + §"3-tier failure handling" | **sub** | HIGH | 2026-05-24T00:40 | Pattern-precedent for file-read validation with 3-tier failure |

### Region F — Empirical examples (existing inquiry-folder content)

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 18 | The completed inquiry folders from 2026-05-24 (this conversation's own chain: 06-00 audit + 07-30 protocol + this 09-00 inquiry) | **sub** | HIGH | 2026-05-24 | Empirical examples of conforming file structures; useful for contract validation |
| 19 | Older `devdocs/inquiries/2026-05-23_*` folders (the routeman chain) | **sub** | HIGH | 2026-05-23 | Empirical examples that pre-date Q5's atomic-write commitment — backward-compat reference |
| 20 | The 11 inquiries surveyed in earlier conversation work | **sub** | HIGH | 2026-05-23 to 2026-05-24 | Empirical population of inquiry-folder content; contract generality test |

### Region G — File-validation pattern precedents

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 21 | `cognitive_harness/protocols/outcome_review.md` §"Step 2 - Verify Source and Evidence" | **sub** | MEDIUM | (filesystem) | A protocol that verifies files before reading; pattern-precedent for the validation layer |
| 22 | `cognitive_harness/protocols/artifact_materialization.md` §"Step 10 - Validation and Outcome" | **sub** | MEDIUM | (filesystem) | A protocol with validation + outcome semantics (PASS / PARTIAL / FAIL) |
| 23 | `cognitive_harness/protocols/loop_diagnose.md` §"Step 2 - Verify paths and artifact availability" | **sub** | MEDIUM | (filesystem) | Pattern-precedent: halt on missing/malformed files |

### Region H — Multi-discipline coordination cost reference

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 24 | The candidate resolution path's own framing: "multi-discipline coordination inquiry of substantial scope (two to three weeks)" vs the validation-without-enforcement acceptable alternative | **core** | HIGH | (Q6 source) | Names both options explicitly; the enforcement-strength decision (SP8) is the central trade-off |

### Region I — Existing project convention examples

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 25 | The `**Overall: PROCEED**` / `FLAG` / `RE-RUN` verdict line pattern as it appears in actual discipline outputs across the corpus | **core** | HIGH | empirical | The de-facto convention RESUME §2 + Q5 contracts reuse; consistent across all 5 active disciplines I just wrote |
| 26 | The YAML frontmatter convention in finding.md files (`status: active`, `model: <id>`, `effort: <level>`, optional `refines:` / `supersedes:` / `corrects:`) per CONCLUDE | **sub** | HIGH | (filesystem) | Inquiry-level convention for finding.md; not directly applicable to discipline outputs but pattern-precedent |
| 27 | `## User Input` section convention at start of discipline outputs (per discipline SKILL.md instructions) | **core** | HIGH | empirical | Each discipline records the user's input at the top; this is a near-universal convention worth committing as part of the contracts |

### Region J — Future-state / out-of-scope items

| # | Item | Relevance | Confidence | Recency | Note |
|---|---|---|---|---|---|
| 28 | `/reflect` discipline (in `non-active/`) | **side** | LOW | (filesystem) | Not active per user direction; if /reflect becomes active in the future, its contract would extend this inquiry's pattern. Out-of-scope. |
| 29 | Future worker disciplines (none on the horizon) | **side** | LOW | n/a | Out of current scope; the contract pattern generalizes |

## State Summary

### Territory-specification echo

Bounded territory: 5 active worker discipline references (sense-making, innovate, td-critique, decompose, surfacing); their SKILL.md files; 2 runners (MVL, MVLw); Q5's file-system protocol (07-30 resolution); audit (06-00); adaptive guidance (01-00); architectural foundations (14-39, 16-31, 24-40); CONCLUDE + branch_inquiry + RESUME protocols; empirical inquiry-folder examples. Out of scope: /reflect (inactive); future worker disciplines; recovery semantics (Q5 already committed detection-only).

### Purpose-specification echo

Design file-shape contracts (per-discipline + inquiry-level + validation layer + enforcement strength + phase progression) for routeman's upstream artifacts; honor Q5's protocol; support audit + adaptive-guidance reads; phase-fit at L0.

### Coverage map (per region)

| Region | Items | Aggregate verdict | Coverage confidence |
|---|---|---|---|
| A — Q5 foundation | 2 | core / core | confirmed |
| B — Worker discipline references | 5 | all core | confirmed |
| C — Inquiry-level structure sources | 5 | core / sub / core / core / core | confirmed |
| D — Downstream consumer reads | 2 | core / core | confirmed |
| E — Architecture + conventions | 3 | sub / sub / sub | confirmed |
| F — Empirical examples | 3 | sub / sub / sub | confirmed |
| G — Validation pattern precedents | 3 | sub / sub / sub | confirmed |
| H — Multi-discipline coordination cost | 1 | core | confirmed |
| I — Project convention examples | 3 | core / sub / core | confirmed |
| J — Future-state | 2 | side / side | confirmed |

### Confirmed-absent regions

- **External web sources** — out of scope.
- **`/reflect` discipline contract** — inactive; out of scope per user direction (carried from Q4 inquiry).
- **Recovery semantics** — Q5 committed detection-only; not re-litigated.
- **Cross-discipline contract enforcement infrastructure** — schedulers, validators-as-services, etc. — the project has none; out of scope.

### Concept-names list

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| File-shape contract | coined-term (this inquiry) | #1 | The structural specification of what each canonical file MUST or SHOULD contain |
| Per-discipline contract | coined-term | #3-7 | A contract specific to one worker discipline's output file |
| Inquiry-level contract | coined-term | #8-12 | A contract for inquiry-level files (`_state.md`, `_branch.md`) shared across all disciplines |
| File-validation layer | coined-term | #21-23 | The routeman + audit code path that validates files against contracts at scan time |
| Validation-without-enforcement | structural-reference | #24 (Q6 source) | The acceptable-alternative enforcement strength where validation runs + reports without halting |
| Coordinated upstream-spec edits | structural-reference | #24 (Q6 source) | The full enforcement strength where per-discipline SKILL.md files commit the contracts |
| Verdict line | structural-reference | #12 + #25 | The `**Overall: PROCEED**` / `FLAG` / `RE-RUN` line at the end of each discipline output |
| 3-tier failure handling | structural-reference | #17, Q5 | INFO / ERROR / ERROR vocabulary inherited from 24-40 + Q5 |
| Frontmatter | vocabulary | #26 | YAML metadata at the top of markdown files; existing convention for finding.md |
| `## User Input` section | coined-term | #27 | The user's verbatim input recorded at the top of each discipline output |
| Backward-compat | vocabulary | empirical | Older inquiry-folder content that pre-dates contracts must continue to work |

### Recency distribution

| Region | Newest | Oldest | No-mtime | Total |
|---|---|---|---|---|
| A | 2026-05-24T07:30 | 2026-05-24T07:30 | 0 | 2 |
| B | n/a | n/a | 5 | 5 |
| C | 2026-05-23 | (filesystem) | 4 | 5 |
| D | 2026-05-24T06:00 | 2026-05-24T01:00 | 0 | 2 |
| E | 2026-05-24T00:40 | 2026-05-23T14:39 | 0 | 3 |
| F | 2026-05-24 | 2026-05-23 | 0 | 3 |
| G | n/a | n/a | 3 | 3 |
| H | n/a | n/a | 1 | 1 |
| I | n/a | n/a | 3 | 3 |
| J | n/a | n/a | 2 | 2 |

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-24T09:00Z
extent: "All 29 surfaced items have been read into LLM context during prior conversation turns. Q5's resolution (07-30) is the most recent foundation. The 5 discipline references have been read in earlier turns. Workspace HOT for Sensemaking."
```

### Frontier flags

- **FF-S1 (decompose's verdict-line gap):** item #6 — /decompose's spec does NOT commit a verdict line in the same Telemetry format as the other 4 disciplines. The per-discipline contract for decomposition.md must address this — either propose adding a verdict line OR commit to backward-compat handling. Sensemaking should treat this as an explicit anchor.
- **FF-S2 (audit pre-existing reliance):** item #13 — the audit at 06-00 already reads per-discipline file shapes implicitly. The contracts this inquiry commits MUST be backward-compatible with the audit's existing dispatch table reads.
- **FF-S3 (adaptive-guidance pre-existing reliance):** item #14 — same; Stage 1 reads `critique.md` SURVIVE/REFINE/KILL verdicts + `sensemaking.md` Constraints/Key-Insights + meta-reasoning. The contracts must support these.
- **FF-S4 (enforcement strength is the central trade-off):** item #24 — the candidate resolution path explicitly names both options; the design must commit one.
- **FF-S5 (existing convention richness):** items #25-27 — verdict line + frontmatter + User Input section + Telemetry section are de-facto conventions across the corpus. ~80% of contract content is documentation, ~20% novel — same pattern as Q5.
- **FF-S6 (backward-compat for older content):** item #19 — the design must NOT break older inquiry-folder content that pre-dates atomic-write or verdict-line conventions.

## Telemetry

- **Mode:** ARTIFACT.
- **Entry point:** SIGNAL-FIRST.
- **Cycles:** 1.
- **Items enumerated:** 29 across 10 regions.
- **Tagged:** core 13 / sub 14 / side 2 / umbrella 0.
- **Boundary-discovery:** NOT fired.
- **Convergence:** MET.
- **Failure modes checked:** Missed-relevance (coverage spans 5 disciplines + inquiry-level + audit + adaptive-guidance + Q5 + architecture + conventions + future-state — comprehensive); Surfaced-irrelevance (the 2 "side" items are visibly out-of-scope); Recency-Equates-Idleness (not used); Recency-Bias-Filter (not used); Interpretive-overstep (no relational claims); Purpose-loss (relevance tags non-uniform).
- **Items with mtime / without mtime:** `items_with_mtime: 11` / `items_without_mtime: 18`.

**Overall: PROCEED.**
