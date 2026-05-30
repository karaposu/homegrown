# Surfacing — routeman_comprehensive_structural_fix

## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-27_16-45__routeman_comprehensive_structural_fix/_branch.md

Purpose: surface territory for synthesizing all 4 prior routeman inquiries' commitments + identifying context-poison residue into ONE consolidated comprehensive amendment plan against the LIVE spec `cognitive_harness/routeman/references/routeman.md`. Bias toward items bearing on STRUCTURAL-LAYER amendment work + context-poison provenance traces from legacy `cognitive_harness/non-active/` sources.

Territory specification (explicit-bounded):

PRIMARY TARGET: `cognitive_harness/routeman/references/routeman.md` (live spec)
PRIOR-INQUIRY FINDINGS: 4 finding.md files (00-51 / 13-23 / 14-03 / 14-49)
CONTEXT-POISON PROVENANCE SUSPECTS: `cognitive_harness/non-active/multi_resolution_navigation.md` + 2 navigation_context_intake files
DISCIPLINE INSTITUTIONAL MEMORY: `docs/discipline_design_history/for_routeman.md` (check)

Bias toward: (1) spec sections encoding legacy commitments not load-bearing; (2) spec sections not yet touched by priors that should be; (3) provenance traces from non-active sources; (4) cross-amendment conflicts when 4 deltas merge; (5) inter-section coherence concerns.

OUT OF SCOPE: re-litigating prior verdicts; navigation-session / meta-loop / cross-discipline extension.

---

## Mode + Entry Point + Territory

- **Mode:** ARTIFACT case — territory contains concrete pre-existing items (the live spec, 4 finding files, 3 legacy non-active files).
- **Entry point:** SIGNAL-FIRST — specific purpose is given (consolidate amendment plan + identify poison residue).
- **Territory specification:** EXPLICIT-BOUNDED — territory edges are pre-specified by `_branch.md`. Boundary-discovery sub-phase SKIPPED.

---

## Traversal Trace

### Region 1: Live spec — `cognitive_harness/routeman/references/routeman.md` (464 lines; mtime 2026-05-25T01:14:59Z)

The amendment target. Each surfaced item is a spec sentence/section, the prior-finding commitment it intersects with, and an action-type tag.

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 1 | §1.4 vocabulary entry "continuation note" (line 60) — "Per-route memory hint — what a future agent resuming this route should remember about it" | **CORE** | HIGH | 2026-05-25T01:14:59Z | Field-vocabulary entry that 13-23 CUTS. Must be removed in consolidated delta. |
| 2 | §2.4 Adaptive-guidance Stage 1 chain (line 147) — "REVISIT draws from prior-cycle verdicts" | **SUB** | MEDIUM | 2026-05-25T01:14:59Z | 00-51's MUST delta-row 9 says "Update §2.4 adaptive-guidance mechanism's reference to 'from prior route map' sources to reference `_route.md`'s Prior Invocations." The current chain doesn't say "from prior route map" verbatim — it says "from prior-cycle verdicts." This is mostly latent — the spec doesn't have the bad phrasing the prior commitment targets. Confirm-OK during delta-synthesis. |
| 3 | §2.4 (line 153) — "WHY field + Continuation Note sufficient" — Continuation Note referenced in Guidance Mode `none` description | **CORE** | HIGH | 2026-05-25T01:14:59Z | Cross-section coherence issue: when Continuation Note is cut (13-23 NEW-2), this prose at §2.4 must be updated to drop the field reference. Inter-section coherence risk. |
| 4 | §3.1 Three-phase shape ASCII diagram (line 191) — "Receive current state + goal/subgoal + optional prior route map + optional refined-sub-goal" | **CORE** | HIGH | 2026-05-25T01:14:59Z | The Reception input contract diagram. 00-51's MUST delta-row 7 cuts protocol-derived `prior route map` / `refined-sub-goal` parameters; replaces with thin reference to `_route.md`. The diagram itself needs to reflect this. |
| 5 | §3.2 Reception (lines 205-212) — Reception accepts "Optional re-invocation parameters: `prior route map` (always available across invocations when persisted); `refined-sub-goal` (a narrower goal for this re-invocation)" | **CORE** | HIGH | 2026-05-25T01:14:59Z | THIS is where 14-49's read-policy lands. Currently the section is silent on per-file-type read policy. Per 00-51 + 14-49 deltas, this section needs (a) read-policy vocabulary prologue; (b) `routeman.md` MANDATORY-WHEN-AVAILABLE sub-section; (c) `_route.md` SHOULD sub-section; (d) graceful-degrade default. PRIMARY AMENDMENT SURFACE. |
| 6 | §3.3 Enumeration-attributed Traversal default ordering (line 215-227) — 10 numbered components | **SUB** | MEDIUM | 2026-05-25T01:14:59Z | 14-49's delta-row 5 says add a "stage-2 input acquisition note" clarifying parent-route-id is acquired via reading parent's routeman.md. This lands here (where stage-2 invocation contract conceptually lives) or in §3.5. The current spec doesn't differentiate generic vs directional mode in §3.3 — the directional mode is implicit. |
| 7 | §3.4 Assembly (line 235) — "Per-route entries finalized (Route Identity + Route State + Route Meaning + Reasoning + Adaptive Guidance + Continuation Memory)" — lists 6 purpose-groups including Continuation Memory | **CORE** | HIGH | 2026-05-25T01:14:59Z | 13-23 NEW-3 cuts Continuation Memory group-header entirely. This line lists groups in narrative form; must be updated to remove "+ Continuation Memory" and reflect 5-group structure. Inter-section coherence: this is the prose-form mirror of §5.4's table-form. |
| 8 | §3.5 Re-invocation (lines 243-248) — `prior route map` + `refined-sub-goal` parameters described | **CORE** | HIGH | 2026-05-25T01:14:59Z | 00-51's MUST delta-row 7 replaces these protocol-derived parameters with reference to `_route.md`'s Prior Invocations + Last Invocation. 14-49's delta-row 6 adds a one-line cross-reference §3.5 → §3.2 read-policy. Two priors converge on this section. |
| 9 | §4.2 LAYER 1 failure mode #5 "Route State Omission" (line 273) — "Routes listed without Direction, Goal, Movement Type, Priority, Status, Blocked-By, or Continuation Note" | **CORE** | HIGH | 2026-05-25T01:14:59Z | Cross-section coherence issue: when Continuation Note is cut, this failure-mode field list must drop "Continuation Note" and add/check the restored fields (Movement, Unlocks are already implied via "Status" but should appear in the canonical missing-field check). Inter-section coherence risk #2. |
| 10 | §5.4 Per-route entry schema table (lines 363-378) — 14 fields across 6 purpose-groups: Route Identity (3) + Route State (3) + Route Meaning (3: Purpose, Movement, Unlocks) + Reasoning (2: WHY, why-this-might-be-important) + Adaptive Guidance (2) + Continuation Memory (1: Continuation Note) | **CORE** | HIGH | 2026-05-25T01:14:59Z | THE PRIMARY SCHEMA EDIT SURFACE. 13-23 amendments: CUT Purpose (was in Route Meaning); CUT Continuation Note (was sole field in Continuation Memory); CUT Continuation Memory group header. KEEP Movement, Unlocks (13-23 reversed their cut). Net: 14 fields → 11 fields (10 + 1 contingent); 6 groups → 5. 00-51 also wants ADD writing-rule for why-this-might-be-important (1-sentence cap + cycle-anchor + filler-fails-spec). |
| 11 | §5.4 (line 375) — `why-this-might-be-important` field present but has no REPAIR constraint | **CORE** | HIGH | 2026-05-25T01:14:59Z | 00-51's MUST delta-row 9 says ADD writing rule (1-sentence cap + MUST cycle-anchor + filler-fails-spec). Currently field is described only as "Per-route meta-reasoning — why this route matters beyond the immediate WHY. Length-bounded." — too soft, no cycle-anchor requirement, no audit substrate. |
| 12 | §5.5 Route Map wrapper (lines 384-391) — 4 fields: Map Header + Route Index + Excluded Section + Telemetry Block | **SIDE** | HIGH | 2026-05-25T01:14:59Z | 00-51's MUST delta-row 5 says "REPAIR wrapper retains: Map Header + Route Index + Excluded Section + Telemetry Block — no protocol-internal control fields." The current §5.5 ALREADY matches this — no `_frontier.md` mention, no batch_size, no frontier-candidate-record. SIDE-relevant: NO-OP confirmation needed (the prior delta-row is already satisfied; the consolidated delta should NOT include this row to avoid no-op edits). |
| 13 | §5.6 Telemetry (lines 396-406) — 10 metrics: entry mode + goal-type, cycles run, routes enumerated, per-type distribution, per-Family balance, reachability distribution, guidance mode allocation, cross-cycle revisitations, autonomy partition, Excluded type count, convergence trigger fired, failure modes checked, self-assessment verdict | **CORE** | HIGH | 2026-05-25T01:14:59Z | 00-51's MUST delta-row 8 trims to 5-6 essential metrics. Keep: per-Family balance, per-type distribution, reachability distribution, guidance-mode allocation, failure modes checked, self-assessment verdict. Drop (move to `_route.md`): cross-cycle revisitations, autonomy partition, Excluded type count, cycles run, convergence trigger fired. PRIMARY DROP-LIST. |
| 14 | §5 Output prologue (lines 338-344) — declares "TWO work-products: (a) workspace, (b) Route Map artifact" — no mention of `_route.md` | **CORE** | HIGH | 2026-05-25T01:14:59Z | 00-51 commits to TWO files (`routeman.md` + `_route.md`). The §5 prologue currently only knows about ONE artifact (Route Map = routeman.md). Needs to be updated to acknowledge `_route.md` as a second artifact (or the framing needs to clarify that workspace + dual-file output makes three things). |
| 15 | §5 — there is NO §5.8 `_route.md` description anywhere | **CORE** | HIGH | 2026-05-25T01:14:59Z | 00-51's MUST delta-row 6 adds §5.8 with 3-section schema (Last Invocation + Prior Invocations + History). Currently absent. PRIMARY ADDITION SURFACE. |
| 16 | §3 Process Model — no read-policy vocabulary anywhere (no MANDATORY / SHOULD / MAY tier definitions) | **CORE** | HIGH | 2026-05-25T01:14:59Z | 14-49's MUST delta-row 1 adds 4-tier vocabulary sub-section (MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY operational definitions). Lands in §3 prologue OR §3.2 prologue. PRIMARY ADDITION SURFACE. |
| 17 | §3 — no read-failure default policy anywhere (no graceful-degrade rule documented) | **CORE** | HIGH | 2026-05-25T01:14:59Z | 14-49's MUST delta-row 2 adds graceful-degrade default + HALT edge-cases sub-section. Adjacent to read-policy vocabulary. PRIMARY ADDITION SURFACE. |
| 18 | "NOW SOLID INSTRUCTIONS START" section (line 421) and Step 1-5 (lines 425-464) | **SUB** | MEDIUM | 2026-05-25T01:14:59Z | The operational instructions still reference `prior route map` (line 427, 429, 433) — protocol-derived parameter. Needs to mirror the §3.2 read-policy update so operational steps are coherent with the abstract Process Model. Inter-section coherence risk #3. |
| 19 | §1.5 Boundary placement (lines 65-67) — "Routeman is a boundary discipline ... pipeline-sequentially at the downstream loop step relative to the core cognitive work, and pipeline-upstream relative to selection" | **UMBRELLA** | HIGH | 2026-05-25T01:14:59Z | Identity-layer; not touched by priors but worth surfacing because it grounds the whole spec. No amendment action expected. Umbrella: provides framing for downstream sections. |
| 20 | §1.4 (line 55) — Status enum has 7 values: "open / blocked / deferred / active / done / stale / superseded" | **SIDE** | HIGH | 2026-05-25T01:14:59Z | 00-51 says "reduce Status enum from 10 to 7." Live spec ALREADY at 7. NO-OP confirmation needed in consolidated delta. The 3 protocol-derived statuses (queued, scheduled, expanded) are absent. |

### Region 2: Prior-inquiry findings — the commitments being synthesized

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 21 | `00-51/finding.md` — MUST delta list (9 rows) | **CORE** | HIGH | 2026-05-27T11:47:41Z | Primary provenance source for amendments. Rows 1-2 REVERSED by 13-23; rows 3-9 active (Status enum trim NO-OP; alias drop NO-OP; §5.5 wrapper REPAIR NO-OP; §3.6 param replacement ACTIVE; §5.6 telemetry trim ACTIVE; §5.8 _route.md ADD ACTIVE; γ-field REPAIR rule ACTIVE; §2.4 chain update ACTIVE). |
| 22 | `00-51/finding.md` — 4-layer model (α enumeration / β protocol-DNA / γ meta-reasoning / δ telemetry) | **CORE** | HIGH | 2026-05-27T11:47:41Z | The CONCEPTUAL FRAME for understanding routeman's output layers. Load-bearing for the synthesis: identifies that β-layer is where context-poison lives; γ-layer is where the contingent decision lives; α-layer is the meaning-layer commitment; δ-layer is project-canonical. |
| 23 | `00-51/finding.md` — Two-file structure `routeman.md` + `_route.md` with 3-section `_route.md` schema (Last Invocation + Prior Invocations + History) | **CORE** | HIGH | 2026-05-27T11:47:41Z | The committed output file structure. Source of §5.8 addition. |
| 24 | `00-51/finding.md` — Empirical-evidence-gated revival path for γ-field cut (Candidate #2 DEFERRED) | **SUB** | MEDIUM | 2026-05-27T11:47:41Z | Not directly an amendment row; it's a meta-pattern for revisitation. Source for Open Questions / Monitoring in consolidated finding. |
| 25 | `13-23/finding.md` — Amendment-delta list (7 rows: REVISED-1 / REVISED-2 / NEW-1 through NEW-5) | **CORE** | HIGH | 2026-05-27T13:51:11Z | Primary refinement of 00-51's schema commitments. The 7 rows: RESTORE Movement; RESTORE Unlocks; CUT Purpose; CUT Continuation Note; CUT Continuation Memory group-header; Update §5.4 to "5 purpose-groups"; Reduce 4-axis content distinction table to 2-axis prose note. |
| 26 | `13-23/finding.md` — Empirical refutation methodology (using 2026-05-25 readiness Route Map's real-route examples to test derivability + redundancy + axis-variance claims) | **SUB** | MEDIUM | 2026-05-27T13:51:11Z | Not a spec-amendment but the project-process meta-observation on structural-convergence-without-empirical-test. Source for /reflect-future-consideration item; not in main delta. |
| 27 | `13-23/finding.md` — "4-axis content distinction reduces to 2-axis prose note" (NEW-5) | **CORE** | HIGH | 2026-05-27T13:51:11Z | Per 13-23 NEW-5, the 18-58 inquiry's §4 four-axis distinction table (Purpose/WHY/Cont.Note/why_important) should reduce to 2-axis prose note (WHY object-backward + why_important meta-introspective). **CRITICAL OBSERVATION:** the live routeman.md spec does NOT contain the 4-axis table at all (verified via grep). The 18-58 inquiry's §4 table was committed by THAT inquiry's finding but NEVER landed in the live spec. So NEW-5 is a NO-OP in the live spec — no table exists to reduce. The consolidated delta should either OMIT NEW-5 or treat it as a confirmation-only no-op (no edit needed). |
| 28 | `14-03/finding.md` — 6-cell verdict table (compatibility-now + extensibility-future across worker / nav-session INPUT / nav-session OUTPUT / meta-loop INPUT / meta-loop RUNTIME / 3-way) | **UMBRELLA** | HIGH | 2026-05-27T14:24:39Z | Validates that the committed shape ships safely. No new amendment rows. Provides "no need to extend scope" justification for staying within the committed shape. |
| 29 | `14-03/finding.md` — 2 bounded follow-up scopes (nav-session aggregation output design; meta-loop runtime design) | **UMBRELLA** | HIGH | 2026-05-27T14:24:39Z | Out-of-scope markers; explicitly NOT part of this synthesis's deliverable. Source for Open Questions / Blocked in consolidated finding. |
| 30 | `14-03/finding.md` — Integration-positive confirmation that Movement + Unlocks RESTORATION feeds nav-session cross-head comparison + meta-loop project-level state tracking | **SUB** | HIGH | 2026-05-27T14:24:39Z | Provides cross-surface validation for 13-23's restore verdicts. Strengthens (does not change) the consolidated delta's 13-23 rows. |
| 31 | `14-49/finding.md` — MUST delta list (6 rows: read-policy vocab + read-failure default + routeman.md MANDATORY-WHEN-AVAILABLE sub-section + _route.md SHOULD sub-section + stage-2 input note + §3.5 cross-reference) | **CORE** | HIGH | 2026-05-27T15:04:12Z | Primary provenance source for §3.2 + §3.3 + §3.5 amendments. All 6 rows are ADD-CONTENT or REPAIR — no removals. |
| 32 | `14-49/finding.md` — 4-tier runtime-policy vocabulary (MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY) | **CORE** | HIGH | 2026-05-27T15:04:12Z | Project-coined vocabulary distinct from finding-section MUST/COULD/DEFERRED. Lands in §3 prologue. |
| 33 | `14-49/finding.md` — Graceful-degrade default + HALT edge-cases (MissingRequiredInput, MalformedRequiredInput) | **SUB** | HIGH | 2026-05-27T15:04:12Z | Failure-handling rule for the read-policy. Lands adjacent to vocabulary. |
| 34 | `14-49/finding.md` — Stage-2 input-acquisition operational mechanic (parent-route-id acquired via reading parent's routeman.md; 18-58 contract implicit-made-explicit) | **SUB** | HIGH | 2026-05-27T15:04:12Z | Clarifies a load-bearing implicit. Lands in §3.3. |

### Region 3: Context-poison provenance suspects

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 35 | `non-active/multi_resolution_navigation.md` (566 lines; mtime 2026-05-16T07:23:15Z) — Defines: 10-status status enum (queued, scheduled, expanded, pending, deferred_by_budget, out_of_policy, blocked, skipped_with_reason, stale, superseded); 13-field Frontier Candidate Record (candidate_id, parent_map, parent_route, route_type, priority, status, expansion_reason, eligibility, eligibility_reason, scheduling_reason, child_map_path, blocked_by, continuation_note); Coverage modes (exhaustive/budgeted/sampled); batch_size + expansion_policy + scheduling_policy; `_frontier.md` as canonical filename; selection_boundary tagging | **CORE** | HIGH | 2026-05-16T07:23:15Z | THE PRIMARY POISON SOURCE. Empirical trace into live spec (grep result): NONE of these tokens appear in live routeman.md (no `_frontier`, no `batch_size`, no `coverage_mode`, no `expansion_policy`, no `scheduling_policy`, no `candidate_id`). **Provenance verdict: the worst β-layer machinery from this protocol was NEVER carried into the live spec.** The 24-00 inquiry's adoption commitment exists in that finding but did not land in the live spec text. This means 00-51's β-layer-minimization MUST rows that target these items are mostly NO-OPs against the live spec — the cleanup is at the finding-level commitment, not at the live-spec-edit level. |
| 36 | `non-active/multi_resolution_navigation.md` — `continuation_note` field (line 267) in Frontier Candidate Record | **SIDE** | MEDIUM | 2026-05-16T07:23:15Z | The protocol's per-candidate `continuation_note` (snake-case) is conceptually related to routeman's per-Route `Continuation Note` (title-case). The routeman version may be a partial inheritance — the protocol's continuation_note was per-frontier-candidate; routeman's was per-Route. 13-23's CUT removes the routeman version. The protocol's version stays in the non-active file (irrelevant to active project). |
| 37 | `non-active/multi_resolution_navigation.md` — "Breadth Invariant" framing ("Breadth is desired at the discovery layer ... Unrun does not mean rejected"; lines 17-42) | **UMBRELLA** | MEDIUM | 2026-05-16T07:23:15Z | Conceptually similar to routeman's "asymmetric-failure principle" (§4.4 of live spec — "Missing a possible move is structurally worse than enumerating an inapplicable one"). The principle was probably re-derived for routeman rather than directly inherited. No amendment action; observation for completeness. |
| 38 | `non-active/navigation_context_intake.md` (259 lines; mtime 2026-05-16T07:23:15Z) — Navigation context router with 6 routing modes (Bounded Local / Cold Project-Level / Previously Warmed / Fresh Warmed / Global Boundary Changed / Thin Context); references `navigator-warmup1/2/3.md` + `navigator-prior-map-overlay.md` + `navigator-refresh.md` files; `_frontier.md` as expansion ledger | **SIDE** | MEDIUM | 2026-05-16T07:23:15Z | Smaller controller for Navigation warm-up routing. Does NOT directly intersect with routeman discipline spec — routeman doesn't have a warm-up routing layer in its current spec. No specific trace into routeman.md text. The 14-49 read-policy is functionally analogous (per-file read rules) but the vocabulary and structure are completely different (the protocol-style YAML routing table vs. the 4-tier MANDATORY/SHOULD vocab). No amendment action; observation. |
| 39 | `non-active/navigation_context_intake_my_version.md` (28 lines; mtime 2026-05-16T07:23:15Z) — Archive note + early Markdown sketch about reading project tree, canonical files, finding.md files | **SIDE** | LOW | 2026-05-16T07:23:15Z | Very small archive sketch; no specific trace into routeman.md. Side-relevant: ground out "no poison from this file" verdict. |

### Region 4: Discipline institutional memory — confirmed absent

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 40 | `docs/discipline_design_history/` — directory DOES NOT EXIST (verified via `ls`) | **CONFIRMED-ABSENT** | HIGH | n/a | The memory `Discipline design-history location` at `~/.claude/projects/.../memory/project_discipline_design_history_location.md` notes this is the CANONICAL location. Currently nothing exists at this path. This means: (a) routeman's institutional memory has NEVER been written; (b) the consolidated finding's amendment outcomes are not (yet) reflected in any institutional memory artifact. ACTION CANDIDATE for Open Questions / COULD section in finding (not for the amendment-delta itself; the discipline runtime spec must remain self-contained per the feedback memory `Disciplines self-contained`). |
| 41 | Project canon docs (`docs/canon/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md`) — navigation-session role doc | **UMBRELLA** | HIGH | n/a (already read) | Sets the boundary: navigation-session-layer aggregation = bounded follow-up (14-03 Follow-up #1). Out of scope for THIS inquiry. Umbrella context. |

---

## Concept Names List

Flat list; per-entry: `{name, type, provenance, gloss}`. Concepts surfaced during traversal that downstream disciplines may reference.

- **β-layer (protocol-DNA)** — type: `coined-term`; provenance: trace #22; gloss: routeman output's persistence-protocol layer originally adopted from `multi_resolution_navigation.md`; the suspected primary context-poison locus.
- **α-layer (enumeration content)** — type: `coined-term`; provenance: trace #22; gloss: routeman's meaning-layer commitment; the route-enumeration content fields.
- **γ-layer (meta-reasoning)** — type: `coined-term`; provenance: trace #22; gloss: per-Route `why_this_might_be_important` field + 4-axis content distinction (now reduced to 2-axis per 13-23).
- **δ-layer (telemetry)** — type: `coined-term`; provenance: trace #22; gloss: project-canonical telemetry; trimmed from 10 to 5-6 metrics per 00-51.
- **MANDATORY-WHEN-AVAILABLE** — type: `coined-term`; provenance: trace #32; gloss: project-coined 4th tier in the runtime-policy vocabulary; required-when-file-exists, FLAG-when-absent, HALT-only-when-malformed-AND-needed.
- **Graceful-degrade default** — type: `vocabulary`; provenance: trace #33; gloss: default failure mode for read-policies; FLAG + proceed-without; HALT reserved for strictly-required-AND-malformed cases.
- **Stage-2 input acquisition mechanic** — type: `structural-reference`; provenance: trace #34; gloss: how directional-mode acquires `parent-route-id` — by reading the parent inquiry's `routeman.md` to extract the parent route entry.
- **Empirical-evidence-gated revival** — type: `coined-term`; provenance: trace #24; gloss: project-pattern: cuts whose structural argument is sound but lack empirical evidence are SHIPped with REPAIR constraint + DEFERRED revival path triggered by LAYER-2 audit thresholds.
- **5 purpose-groups (vs prior 6)** — type: `structural-reference`; provenance: trace #25; gloss: post-13-23 per-Route schema has Route Identity / Route Meaning / Route State / Reasoning / Adaptive Guidance (Continuation Memory cut).
- **4-tier runtime-policy vocabulary** — type: `coined-term`; provenance: trace #32; gloss: MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY; project-coined; distinct from finding-section MUST/COULD/DEFERRED gating vocabulary.
- **2-axis content distinction (vs prior 4-axis)** — type: `structural-reference`; provenance: trace #27; gloss: WHY (object, backward to cycle) + why_this_might_be_important (meta, introspective). Reduced from 18-58's 4-axis table; CRITICAL: the 4-axis table was never in live spec, so reduction = no-op in live spec.

---

## State Summary

### Territory + Purpose echo

- **Territory:** `cognitive_harness/routeman/references/routeman.md` (live spec, 464 lines) + 4 prior `finding.md` files (00-51 + 13-23 + 14-03 + 14-49) + 3 `non-active/` legacy sources + missing `docs/discipline_design_history/for_routeman.md`.
- **Purpose:** consolidate prior 4 inquiries' commitments + identify context-poison residue into ONE comprehensive amendment plan against the live spec.

### Coverage map

| Region | Coverage status | Aggregate relevance verdict |
|---|---|---|
| **R1** Live spec sections | CONFIRMED (full file read; lines 1-464; spec sections traversed; 20 trace entries) | Mix of CORE (12) + SUB (4) + SIDE (2) + UMBRELLA (2). Primary amendment surfaces identified at §1.4, §2.4, §3.1, §3.2, §3.3, §3.4, §3.5, §4.2, §5.4, §5.6, §5.8 (new), and "NOW SOLID INSTRUCTIONS." |
| **R2** Prior findings | CONFIRMED (full read of all 4 finding.md files; 14 trace entries) | Mix of CORE (5) + SUB (4) + UMBRELLA (5). All 4 priors' MUST delta-lists fully extracted; commitments enumerated; conceptual frames (4-layer model, 4-tier vocab, etc.) named. |
| **R3** Legacy context-poison sources | CONFIRMED (full read of multi_resolution_navigation.md + navigation_context_intake.md + navigation_context_intake_my_version.md; 5 trace entries) | Mix of CORE (1) + SIDE (3) + UMBRELLA (1). **CRITICAL FINDING:** grep verification confirms the worst β-layer tokens (`_frontier`, `batch_size`, `coverage_mode`, `expansion_policy`, `scheduling_policy`, `candidate_id`) are ABSENT from the live routeman.md. The protocol's machinery was never carried into the live spec text — the context-poison existed in the 24-00 finding's commitments and in the priors' discussions, but the live spec was already mostly clean. |
| **R4** Institutional memory | CONFIRMED-ABSENT (`ls` returned No such file or directory; 2 trace entries) | The canonical institutional-memory location (`docs/discipline_design_history/`) doesn't exist. The inquiry's amendment outcomes will need a follow-up record (NOT in the consolidated spec-edit delta, but in Open Questions). |

### Confirmed-absent regions

- **`docs/discipline_design_history/` directory** — does not exist. No `for_routeman.md` institutional memory file. (See trace #40.)
- **β-layer protocol-derived tokens in live spec** — verified via grep: `_frontier`, `_navig`, `navig.md`, `batch_size`, `coverage_mode`, `expansion_policy`, `scheduling_policy`, `candidate_id` are all ABSENT from live routeman.md. (Verified during R1 traversal.) The β-layer was carried as a 24-00 finding-level commitment but never as live-spec text. This is the surprise of the inquiry: the spec is already cleaner than the priors' framing suggested.
- **4-axis content distinction table** — the 18-58 inquiry's §4 table (Purpose / WHY / Continuation Note / why_this_might_be_important) is ABSENT from live routeman.md. The 13-23 reduction-to-2-axis is therefore a no-op in the live spec. (Trace #27.)

### Recency distribution

| Region | Newest | Oldest | no-mtime-count | total-items |
|---|---|---|---|---|
| R1 Live spec | 2026-05-25T01:14:59Z | 2026-05-25T01:14:59Z | 0 | 20 |
| R2 Prior findings | 2026-05-27T15:04:12Z | 2026-05-27T11:47:41Z | 0 | 14 |
| R3 Legacy sources | 2026-05-16T07:23:15Z | 2026-05-16T07:23:15Z | 0 | 5 |
| R4 Inst. memory | n/a | n/a | 2 | 2 (both confirmed-absent) |

The live spec is older (2026-05-25) than all 4 priors (all 2026-05-27). This confirms the priors' commitments POST-DATE the live spec — they have not been applied. The legacy sources are oldest (2026-05-16). The recency pattern is consistent with the synthesis goal (priors are pending applications against an older live spec).

### Frontier flags — self-signaled requests for downstream attention

- **FF-Su1 — Cross-amendment overlap at §3.2 Reception.** Both 00-51 (delta-row 7 replacing protocol-derived params) and 14-49 (delta-rows 1-4 adding read-policy vocab + per-file rules + failure default) target §3.2. The consolidated delta must coordinate the order of these edits so the §3.2 end-state is coherent (single Reception section reflecting BOTH the simplified parameter set AND the read-policy structure). Sensemaking should resolve the merge ordering.
- **FF-Su2 — Cross-amendment overlap at §3.5 Re-invocation.** 00-51 (delta-row 7: replace protocol-derived params with `_route.md` reference) + 14-49 (delta-row 6: one-line cross-reference §3.5 → §3.2 read-policy) both target §3.5. The merged result is two distinct edits with no conflict, but the consolidated delta needs to express both rows clearly. Sensemaking checks that they don't accidentally conflict.
- **FF-Su3 — NEW-5 (4-axis → 2-axis reduction) is NO-OP in live spec.** Verified: the live routeman.md doesn't contain the 4-axis table. Consolidated delta should EITHER omit NEW-5 entirely with a note explaining why, OR include it as a documentation-only confirmation. Sensemaking decides which.
- **FF-Su4 — 00-51 row about §5.5 wrapper REPAIR is also NO-OP.** The live spec's §5.5 already matches the prior's recommended shape (Map Header + Route Index + Excluded Section + Telemetry Block; no protocol-internal control fields). Consolidated delta should treat this as a NO-OP confirmation, not an active edit row, to avoid implying changes when none are needed.
- **FF-Su5 — Status enum row (00-51 delta-row 3) is NO-OP.** Live spec already has 7-status enum at §1.4 line 55. Consolidated delta should treat this as NO-OP confirmation.
- **FF-Su6 — Alias drop row (00-51 delta-row 4) is NO-OP.** Live spec has no `_navig.md` / `_frontier.md` aliases anywhere. NO-OP.
- **FF-Su7 — Output-handling residue not covered by priors: Inter-section coherence ripples.** When 13-23's Continuation Note cut applies, the following SPEC SENTENCES (not in any prior's delta list explicitly) need coordinated edits to remain coherent:
  - §1.4 vocabulary "continuation note" entry (trace #1).
  - §2.4 Adaptive Guidance Stage 1 `none`-mode description "WHY field + Continuation Note sufficient" (trace #3).
  - §3.4 Assembly bullet listing 6 groups including "Continuation Memory" (trace #7).
  - §4.2 LAYER 1 failure mode #5 field list including "Continuation Note" (trace #9).
  These are output-handling residue. Identifying them is part of the inquiry's value-add beyond just consolidating the priors' deltas.
- **FF-Su8 — Output-handling residue not covered by priors: Operational-instructions section.** The "NOW SOLID INSTRUCTIONS START" section (lines 421+) still uses `prior route map` parameter (lines 427, 429, 433). When 00-51 + 14-49 amendments land in §3.2 / §3.5, the operational section also needs to mirror the changes (read-policy mentioned; `_route.md` referenced). Inter-section coherence risk. Not in any prior's delta; identified by THIS inquiry.
- **FF-Su9 — Output-handling residue not covered by priors: §5 Output prologue dual-file framing.** §5 currently declares TWO work-products (workspace + Route Map artifact). After 00-51's §5.8 `_route.md` addition, the framing implies THREE things (workspace + routeman.md + _route.md). The prologue may need to clarify whether "Route Map artifact" expands to "Route Map artifact set (routeman.md + _route.md)" or whether `_route.md` is a separate fourth thing. Not explicitly in 00-51's delta list; coherence concern identified here.
- **FF-Su10 — Discipline institutional memory file is absent.** The `docs/discipline_design_history/for_routeman.md` location is canonical per user memory but doesn't yet exist. The consolidated amendment plan should NOT include writing this file (per the feedback memory `Disciplines self-contained` — discipline runtime spec stays self-contained), but Open Questions should flag it for a future authoring task.

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-27T16:50:00Z
extent: "Full read of live routeman.md (464 lines); full read of 4 finding.md files (1489 lines total); full read of 3 non-active source files (853 lines total); ls + grep verifications confirming β-layer-absence + 4-axis-table-absence + institutional-memory-absence."
```

### Re-invocation parameters (optional)

None suggested. The territory is bounded; coverage is confirmed; the 8 frontier flags route to Sensemaking, not to a re-traversal.

---

## Telemetry

- Mode: `artifact` + entry point: `signal-first`
- Cycles run: 1 (single-pass traversal across 4 regions)
- Items enumerated: 41 (R1: 20 + R2: 14 + R3: 5 + R4: 2)
- Items tagged at each relevance level: CORE = 18 + SUB = 7 + SIDE = 7 + UMBRELLA = 7 + CONFIRMED-ABSENT = 2
- Sub-phase fired: NO (territory was explicit-bounded; boundary-discovery sub-phase skipped)
- Convergence criteria status: MET — territory exhaustively traversed at current resolution; no items filtered at uncertain-relevance; all rejected items rejected on HIGH-confidence rejection (R3 items not directly traceable to live spec); workspace-overload trigger did NOT fire.
- Failure modes checked: Missed-relevance (PASS — re-verified that no prior MUST row was overlooked); Surfaced-irrelevance (PASS); Over-coverage (PASS — items kept at appropriate relevance); Territory-mis-binding (PASS — stayed within explicit territory); Workspace overload (PASS — did not approach context budget); Artifact under-specification (PASS — Trace + Summary have required fields); Workspace-artifact desync (PASS — tags captured at moment of traversal); Recency-Equates-Idleness (PASS — recency annotation used descriptively only); Recency-Bias-Filter (PASS — older items still surfaced at appropriate relevance).
- items_with_mtime: 39 / items_without_mtime: 2 (the two confirmed-absent items in R4)
- Self-assessment verdict: **PROCEED**

---

## Frontier — open questions for downstream

The 8 frontier flags (FF-Su1 through FF-Su10, with FF-Su5 + FF-Su6 + FF-Su7 + FF-Su8 + FF-Su9 + FF-Su10 noted) route to Sensemaking for the following work:

1. **(Sensemaking)** Resolve cross-amendment overlap at §3.2 and §3.5 — produce a coherent merge ordering.
2. **(Sensemaking)** Adjudicate whether NO-OP rows (NEW-5 4-axis reduction; 00-51 row 3 status enum; 00-51 row 4 alias drop; 00-51 row 5 wrapper REPAIR) are INCLUDED in consolidated delta as "confirm-no-op" rows or OMITTED with explanatory note.
3. **(Sensemaking)** Adjudicate the output-handling residue items (FF-Su7 + FF-Su8 + FF-Su9) — confirm these are real residue requiring consolidated-delta rows OR sub-amendments of existing prior-delta rows.
4. **(Sensemaking)** Resolve the §5 prologue framing question (FF-Su9): how to express that the output is now dual-file (routeman.md + _route.md) vs the spec's current "two work-products" framing.
5. **(Sensemaking)** Decide on institutional-memory follow-up scope (FF-Su10): Open Question only OR explicit COULD action item.

Sub-regions where coverage is incomplete: NONE within scope. Out-of-scope items (navigation-session aggregation, meta-loop runtime, /reflect inheritance, /intuit Baldwin substrate) are deliberately deferred per the inquiry's scope and the 14-03 finding's follow-up scopes.

Re-invocation requests: NONE.

---

## Structural check (manual, per /MVLw runner step 4 since `tools/structural_check.sh` is absent)

- Required sections present: ✓ Mode declaration; ✓ Traversal Trace (with per-entry: sequence ordinal / region / item identifier / relevance verdict / confidence / step note / recency annotation); ✓ Concept Names List (with name + type + provenance + gloss); ✓ State Summary (Territory echo + Purpose echo + Coverage map + Confirmed-absent regions + Recency distribution + Frontier flags + Workspace-populated status); ✓ Telemetry (mode + entry point + cycles + items + sub-phase + convergence + failure modes + mtime counts + verdict); ✓ Frontier (downstream questions).
- Workspace work-product present: ✓ (the LLM session has read all territory items in-context).
- Artifact "thin" criterion: ✓ (no item content; only identifiers + tags + metadata; the per-trace-entry's "step note" carries observation-not-content).
- No `[FAIL]` lines.

PROCEED to Sensemaking.
