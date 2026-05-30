# Surfacing — routeman_docarchive_read_policy_question

## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-28_17-30__routeman_docarchive_read_policy_question/_branch.md

Purpose: surface territory for diagnosing whether routeman reads `docarchive/` in addition to `finding.md` when invoked on a concluded `/MVLw` inquiry folder. Four observation targets:
(1) Spec accuracy of Story 1's claim;
(2) Cost-of-bloat in navigation-session context;
(3) Alternative-policy recommendation (finding.md only);
(4) Structural rationale for OR against reading docarchive.

---

## Mode + Entry Point + Territory

- **Mode:** ARTIFACT (the spec, CONCLUDE, canon doc, prior findings, and user_stories all pre-exist as items).
- **Entry point:** SIGNAL-FIRST (the user's specific challenge is the purpose).
- **Territory specification:** EXPLICIT-BOUNDED (8 files specified upfront).

---

## Traversal Trace

### Region R1: Routeman spec — input-contract authority

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 1 | `cognitive_harness/routeman/references/routeman.md` §3.2 Reception (line 208-213): *"Required: the `current state` (artifacts and verdicts from prior cognitive work); the `goal` or `subgoal`. Optional re-invocation parameters: cross-invocation context loaded via `_route.md`'s Prior Invocations + Last Invocation sections (per §5.8); optional `refined-sub-goal`."* | **CORE** | HIGH | filesystem (post-16-45 amendment) | The §3.2 Required field names ONLY current state + goal/subgoal at the cognitive level. Source-shape unconstrained. No mention of finding.md, _branch.md, or docarchive. |
| 2 | `references/routeman.md` §3.2.4 (line 228-235): *"Reading prior `routeman.md` in directional mode — Policy: MANDATORY-WHEN-AVAILABLE."* | **CORE** | HIGH | filesystem | Routeman's OWN output files (`routeman.md` from prior invocations) ARE specifically policied — directional-mode parent routeman.md is MANDATORY-WHEN-AVAILABLE. This is routeman reading its own prior artifact, NOT routeman reading inquiry-discipline outputs. |
| 3 | `references/routeman.md` §3.2.5 (line 237-245): *"Reading prior `_route.md` in directional mode — Policy: SHOULD."* | **CORE** | HIGH | filesystem | Routeman's OWN invocation-state file. Same as above — routeman reading its own artifact, not discipline outputs. |
| 4 | Grep across `references/routeman.md` and `SKILL.md` for "finding.md" / "docarchive" / "archived discipline" / "discipline output" returns NO HITS in input-contract context. (One mention of "cycle content" exists in §4.3 LAYER-2 mode #4 — the Filler-meta-reasoning failure mode — but it's about the per-route writing rule's audit substrate, not about input read-policy.) | **CORE** | HIGH | filesystem | **DECISIVE.** The routeman spec is SILENT on finding.md as input. The spec is SILENT on docarchive entirely. The read-policy section (§3.2 Read-Policy Vocabulary at line 215-245) covers ONLY routeman's own prior output files (routeman.md, _route.md) in directional mode. There is no spec-level commitment that routeman reads inquiry-discipline outputs (sensemaking.md, decomposition.md, innovation.md, critique.md, surfacing.md). |
| 5 | `cognitive_harness/routeman/SKILL.md` Step 1: *"The input should supply current state + goal. If folder path, read relevant files."* — the generic "read relevant files" phrasing | **SUB** | HIGH | filesystem | "Relevant files" is left to the discipline's judgment per the read-policy. For an inquiry folder, the spec doesn't enumerate which files are "relevant"; it depends on what reconstructs state + goal. |

### Region R2: CONCLUDE protocol — finding.md self-sufficiency design

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 6 | `/Users/ns/.claude/skills/protocols/conclude.md` line 47: *"Read all discipline outputs identified in Step 1, plus `_branch.md` for the question and goal context. Produce `finding.md` as a single argumentative document..."* | **CORE** | HIGH | filesystem | CONCLUDE designs finding.md as the COMPILED OUTPUT of all discipline work — a single argumentative document that combines discipline outputs into one self-contained artifact. |
| 7 | `conclude.md` line 297-301: *"After writing the finding, ask: 'Can someone read ONLY `finding.md`, at normal reading speed without backtracking, and understand the complete decision?' If no — if the reader needs to re-read paragraphs, scroll up to decode references, or consult other files to understand the verdict — the finding has failed the test."* | **CORE** | HIGH | filesystem | **DECISIVE.** CONCLUDE's quality test makes the design intent EXPLICIT: finding.md must be self-sufficient. A downstream consumer should NOT need to consult docarchive to understand the inquiry's verdict. If the consumer needs docarchive, finding.md failed CONCLUDE's quality test. |
| 8 | `conclude.md` Step 3 (line 305-319): *"Move discipline output files to a `docarchive/` subfolder inside the inquiry folder... `_branch.md`, `_state.md`, and the newly-written `finding.md` stay in the inquiry folder root."* | **CORE** | HIGH | filesystem | CONCLUDE structurally distinguishes the root-level artifacts (`_branch.md`, `_state.md`, `finding.md` — the downstream-consumed set) from `docarchive/` (the audit set). The root files are designed for consumption; docarchive is designed for archive. |

### Region R3: Canon doc folder_based.md — design intent for finding.md vs docarchive

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 9 | `docs/canon/runtime_environment/folder_based.md` line 174-175: *"Compile finding.md — Single argumentative document combining the discipline outputs into the inquiry's answer, with reasoning, alternatives considered, and next actions."* / *"Create docarchive/ — Subfolder for discipline outputs; the five (or three) discipline files move into it."* | **CORE** | HIGH | filesystem | The canon doc names finding.md as the COMPILED ANSWER; docarchive as the archive container. Roles are structurally distinct. |
| 10 | Canon doc line 250-251: *"Answer → Read `finding.md` → The compiled verdict."* / *"Discipline reasoning → Read `docarchive/<discipline>.md` → The discipline's full output that fed into the finding."* | **CORE** | HIGH | filesystem | **DECISIVE.** The canon doc's "Where to find what" table explicitly maps: docarchive = "the discipline's full output that fed into the finding" — meaning the SOURCE that's already been distilled. The canonical reader-path is finding.md for the answer; docarchive only when the AUDIT trail is needed. |
| 11 | Canon doc line 328: *"A new reader opens `_branch.md` to learn the question, then `finding.md` to learn the answer. If they want the reasoning trail, they read `docarchive/` files."* | **CORE** | HIGH | filesystem | **DECISIVE.** Confirms the reader workflow: docarchive is the OPTIONAL reasoning trail for someone who specifically wants to audit. It is not the default consumption path. Routeman, as a consumer of inquiry output, fits the default consumption path — finding.md is sufficient. |

### Region R4: 14-49 read-policy finding (the 4-tier vocabulary's origin)

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 12 | `devdocs/inquiries/2026-05-27_14-49__routeman_directional_input_read_policy/finding.md` — the 4-tier vocabulary was committed for DIRECTIONAL MODE specifically. The finding's MUST rows only address `routeman.md` MANDATORY-WHEN-AVAILABLE + `_route.md` SHOULD. | **CORE** | HIGH | filesystem (2026-05-27) | The 14-49 finding settled directional-mode read policy. Generic-mode read policy was NOT addressed — the finding's scope is explicitly directional. |
| 13 | 14-49 finding line 263 (Refinement Triggers): *"If generic-mode read policy proves to require a different vocabulary, this finding's 4-tier vocabulary's universality is contested. Likely refinement: keep the 4-tier vocabulary; just have different per-tier verdicts for generic vs directional modes."* | **CORE** | HIGH | filesystem | **DECISIVE.** The 14-49 finding explicitly leaves generic-mode read policy as an open question. The 4-tier vocabulary applies; the per-tier assignments for the generic-mode case are NOT YET COMMITTED. This inquiry's question is exactly that open seam. |

### Region R5: 16-45 consolidated amendment — what landed in the spec

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 14 | `devdocs/inquiries/2026-05-27_16-45__routeman_comprehensive_structural_fix/finding.md` — 30-row amendment plan applied to the live routeman.md spec. Grep on the 16-45 finding for "docarchive" / "finding.md (as input)" returns NO row addressing generic-mode read policy on finding.md or docarchive. The amendment plan addresses the directional-mode policies (from 14-49) but does NOT extend to generic-mode discipline-output reads. | **CORE** | HIGH | filesystem (2026-05-27) | The 16-45 consolidation did NOT amend the spec to include a docarchive read-policy. The gap from 14-49 is preserved in the live spec. |

### Region R6: 15-48 prior finding — the two-axis frame

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 15 | `devdocs/inquiries/2026-05-28_15-48__routeman_input_dependency_question/finding.md` — the prior finding committed the two-axis input contract: Axis 1 cognitive necessity (state + goal REQUIRED) + Axis 2 source flexibility (folder of any type / raw text / implicit-surfaced). | **SUB** | HIGH | filesystem (today) | The two-axis frame applies here as inherited context. This inquiry refines a sub-question UNDER axis 2: "given the source IS a concluded inquiry folder, which files INSIDE the folder does routeman read?" — a question the 15-48 finding did not address (it was about whether routeman needs a folder at all, not which files within a folder). |
| 16 | The 15-48 finding did not address discipline-output reads or docarchive. The verdict was structurally distinct (about input-shape flexibility, not file-selection within an inquiry folder). | **SIDE** | HIGH | filesystem | Confirms that this current inquiry is a DOWNSTREAM REFINEMENT, not a re-litigation. |

### Region R7: User_stories Story 1 — the specific over-claim

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 17 | `devdocs/routeman_user_stories.md` Story 1 line 20 verbatim: *"The 5 archived discipline outputs in `docarchive/` — supplementary cycle content."* | **CORE** | HIGH | filesystem (today, post-COULD-1) | **The over-claim under scrutiny.** Story 1 lists docarchive contents as part of routeman's input read. Per the spec audit (Region R1 trace #4), this claim is NOT spec-authorized. It's an illustrative extension not grounded in the read-policy. |
| 18 | Story 1's "Input routeman reads" list verbatim (lines 16-20): (a) `_branch.md` — the question + goal; (b) `finding.md` — settled understanding + open questions + failure cases + decisions + Next Actions; (c) The 5 archived discipline outputs in `docarchive/` — supplementary cycle content. | **CORE** | HIGH | filesystem | The full input list. Items (a) + (b) are reasonable per the spec's "read relevant files" + CONCLUDE's finding-self-sufficiency design. Item (c) is the over-extension. |
| 19 | `routeman_user_stories.md` Story 6 (Shape A) line 141: *"Input: The inquiry folder (the canonical product of `/MVLw`'s CONCLUDE: `finding.md` + `_branch.md` + `docarchive/`)."* | **SIDE** | HIGH | filesystem | Story 6 mentions docarchive but as part of WHAT THE FOLDER CONTAINS, NOT as what routeman READS. The phrasing is structural ("the folder contains these") rather than action-prescribing ("routeman reads these"). Story 6 is NOT the same over-claim as Story 1. |

### Region R8: Cost dimension — navigation-session bloat

| # | Item identifier | Tag | Confidence | Recency | Step note |
|---|---|---|---|---|---|
| 20 | Story 5 (navigation session) input list: 3 worker `routeman.md` files + 3 worker `_route.md` files + 3 worker `finding.md` files (per the spec-correct reading) + state context. If docarchive reads were added: 3 × 5 = 15 additional discipline outputs. Discipline outputs are typically 200-500 lines each (per CONCLUDE archives). 15 × ~400 = ~6000 lines of additional context per navigation session. | **CORE** | HIGH | inferred from user_stories Story 5 + observed discipline outputs in current inquiry (this session's surfacing.md is ~150 lines; sensemaking is typically 200-400) | **The cost evidence the user named.** Reading docarchive in navigation-session contexts would multiply context consumption by ~5x per worker. At 3 workers, ~15 files / 6000 lines of additional context. This is significant for navigation-session contexts which are explicitly designed for cross-head attention. |
| 21 | Surfacing failure mode #5 (Workspace overload) from `references/surfacing.md` line 241: *"The LLM session reads so much content during Traversal that the context window saturates; later cognitive operations have degraded performance"* — this is the cost the user is pointing at, mapped to a recognized failure-mode pattern in another discipline's spec. | **SUB** | HIGH | filesystem (surfacing spec) | The bloat concern maps to a project-recognized failure pattern. Reading docarchive systematically would invite this failure mode in routeman's navigation-session invocations. |

---

## Concept Names List

- **Spec-silent on finding.md / docarchive** — type: `coined-term`; provenance: trace #4; gloss: the routeman spec does not specify any read-policy tier for finding.md or docarchive in the generic-mode (inquiry-folder-input) case. The read-policy section explicitly addresses only directional-mode routeman.md + _route.md.
- **finding.md self-sufficiency design** — type: `coined-term`; provenance: trace #7; gloss: CONCLUDE's quality test ("Can someone read ONLY finding.md...?") establishes that finding.md should be self-sufficient for downstream consumption — readers (including routeman) should not need to consult docarchive to grasp the verdict.
- **docarchive as reasoning trail (audit)** — type: `coined-term`; provenance: traces #10 + #11; gloss: the canon doc's design intent positions docarchive as the audit/reasoning trail consulted optionally, not as the default consumption path. The canonical reader workflow is `_branch.md → finding.md`; docarchive is opt-in.
- **Generic-mode read-policy gap** — type: `coined-term`; provenance: trace #13 + #14; gloss: the 14-49 finding's 4-tier vocabulary applies to directional mode only; generic-mode read policy was explicitly left as an open refinement trigger; the 16-45 consolidation didn't address it. This inquiry sits at the gap.
- **Story 1 over-claim** — type: `coined-term`; provenance: trace #17; gloss: Story 1's listing of docarchive as part of routeman's input read is illustrative-but-spec-unauthorized; not contradicted by the spec but not grounded in any read-policy tier either.
- **Navigation-session bloat factor** — type: `coined-term`; provenance: trace #20; gloss: in multi-head navigation contexts (Story 5), reading docarchive systematically would multiply context consumption by ~5x per worker (5 discipline outputs each), at 3+ workers producing ~6000+ extra context lines — invoking Workspace-overload risk.

---

## State Summary

### Territory + Purpose echo

- **Territory:** routeman spec (SKILL.md + references/routeman.md §3.2) + CONCLUDE protocol + canon doc folder_based.md + 14-49 read-policy finding + 16-45 consolidated amendment + 15-48 prior input-contract finding + user_stories Story 1 + Story 6.
- **Purpose:** diagnose whether routeman reads docarchive in addition to finding.md per the spec's read-policy.

### Coverage map

| Region | Coverage | Aggregate relevance |
|---|---|---|
| R1 Routeman spec §3.2 + grep | CONFIRMED (read-policy section read in full; grep on input contract terms confirms silence on finding.md / docarchive) | CORE-dominated (4 CORE + 1 SUB) |
| R2 CONCLUDE protocol | CONFIRMED (Step 2 finding.md template + quality test + Step 3 archive instructions read) | CORE × 3 |
| R3 Canon folder_based.md | CONFIRMED (compile/archive table + where-to-find-what + reader workflow read) | CORE × 3 |
| R4 14-49 read-policy finding | CONFIRMED (the 4-tier vocabulary's scope + the refinement trigger noting generic-mode is open) | CORE × 2 |
| R5 16-45 consolidated amendment | CONFIRMED (grep on amendment rows for docarchive / generic-mode read returns no matches) | CORE × 1 |
| R6 15-48 prior finding | CONFIRMED (verified the two-axis frame; verified docarchive not addressed) | SUB + SIDE |
| R7 user_stories Story 1 + Story 6 | CONFIRMED (verbatim quotes preserved) | CORE × 2 + SIDE × 1 |
| R8 Cost dimension | INFERRED (Workspace-overload pattern from surfacing spec; arithmetic from Story 5) | CORE + SUB |

### Confirmed-absent regions

- **No spec rule naming finding.md as MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY.** Grep on routeman spec confirms.
- **No spec rule naming docarchive at any tier.** Grep confirms.
- **No 14-49 / 16-45 commitment extending the 4-tier vocabulary to generic-mode discipline-output reads.** Confirmed via grep on both finding files.
- **No CONCLUDE rule requiring docarchive to be consulted alongside finding.md.** The quality test asserts the opposite — finding.md self-sufficiency.
- **No canon-doc rule binding docarchive consumption.** Canon explicitly frames docarchive as opt-in reasoning trail.

### Recency distribution

| Region | Newest | Oldest |
|---|---|---|
| R1 routeman spec | 2026-05-28 (post-amendment) | spec mtime |
| R2 CONCLUDE protocol | filesystem | filesystem |
| R3 canon folder_based.md | filesystem | filesystem |
| R4 14-49 finding | 2026-05-27 | 2026-05-27 |
| R5 16-45 finding | 2026-05-27 | 2026-05-27 |
| R6 15-48 finding | today | today |
| R7 user_stories | today (post-COULD-1) | 2026-05-27 |
| R8 inferred | n/a | n/a |

### Frontier flags — open questions for downstream

- **FF-Su1 — The Story 1 docarchive claim is structurally OVER-CLAIMED.** Sensemaking should adjudicate: is this an illustrative-but-harmless extension, or a load-bearing distortion that warrants explicit correction in Story 1?
- **FF-Su2 — The spec has a NAMED GAP for generic-mode read policy.** The 14-49 finding explicitly flagged this; the 16-45 consolidation didn't close it. The user's question effectively asks: should the gap stay open, or should the spec be amended to explicitly say finding.md is the canonical input and docarchive is opt-in/MAY at most?
- **FF-Su3 — The corrective could land at TWO LAYERS.** (a) user_stories Story 1 — drop the docarchive line; light-touch. (b) routeman spec — add a generic-mode read-policy section naming finding.md as MANDATORY-WHEN-AVAILABLE (when the input IS an inquiry folder) and docarchive as MAY. Decomposition should adjudicate single-layer vs both-layer fix.
- **FF-Su4 — The navigation-session bloat is REAL and load-bearing.** Story 5's navigation-session pattern is the cost-critical case. Innovation should consider whether the corrective should explicitly cite Workspace-overload risk as the justification rather than only spec accuracy.
- **FF-Su5 — Tone of the correction matters.** Story 1 was written by the agent in this very session; the over-claim is an agent artifact. The corrective should acknowledge that without over-apologizing (similar tonal calibration as the 15-48 finding's Q5 pattern).

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-28T17:35:00Z
extent: "Routeman spec §3.2 + Read-Policy Vocabulary + §3.2.4/§3.2.5 directional-mode rules read in full; grep on input-contract terms across spec returns silence on finding.md and docarchive; CONCLUDE protocol Step 2 finding.md template + quality test + Step 3 archive instructions read; canon folder_based.md compile/archive/where-to-find-what sections read; 14-49 read-policy finding's directional scope + generic-mode refinement trigger verified; 16-45 consolidation rows grepped (no docarchive amendment); 15-48 prior finding verified (two-axis frame; docarchive not addressed); user_stories Story 1 + Story 6 verbatim preserved."
```

---

## Telemetry

- Mode: `artifact` + entry point: `signal-first`
- Cycles run: 1 (single-pass; territory was small + focused)
- Items enumerated: 21 (R1: 5 + R2: 3 + R3: 3 + R4: 2 + R5: 1 + R6: 2 + R7: 3 + R8: 2)
- Items tagged: CORE = 14 + SUB = 4 + SIDE = 3 (overlap as items multi-tagged within regions)
- Sub-phase fired: NO (territory was explicit-bounded)
- items_with_mtime: 20 (filesystem); items_without_mtime: 1 (the R8 inferred-arithmetic item)
- Convergence criteria status: MET — territory traversed; spec silence confirmed via grep; canon doc + CONCLUDE design intent verified; cost dimension surfaced.
- Failure modes checked: Missed-relevance (PASS); Surfaced-irrelevance (PASS); Over-coverage (PASS); Territory-mis-binding (PASS — stayed within routeman read-policy + CONCLUDE / canon scope); Recency-Equates-Idleness (PASS — recency captured as signal only); Recency-Bias-Filter (PASS); Workspace overload (PASS — single-pass, bounded territory).
- Self-assessment verdict: **PROCEED**

---

## Frontier — open questions for downstream

The 5 frontier flags route to Sensemaking:

1. (Sensemaking) Adjudicate Story 1's docarchive claim: illustrative-but-harmless vs load-bearing distortion that needs correction.
2. (Sensemaking) Adjudicate the spec gap: should the read-policy be amended to explicitly name finding.md and docarchive for generic mode, or is the gap acceptable?
3. (Sensemaking + Decomposition) Adjudicate single-layer (Story 1 only) vs both-layer (Story 1 + spec) corrective.
4. (Sensemaking) Frame the cost dimension as load-bearing justification, not just a side note.
5. (Innovation) Tonal calibration for the corrective — acknowledge the over-claim was the agent's, without over-apologizing.

---

## Structural check (manual; structural_check.sh absent)

- Required sections present: ✓ Mode/Entry-point/Territory; ✓ Traversal Trace (per-entry tags + confidence + recency); ✓ Concept Names List; ✓ State Summary (coverage / confirmed-absent / recency / frontier / workspace-populated); ✓ Telemetry; ✓ Frontier routing.
- Workspace work-product present: ✓.
- "Thin" artifact criterion: ✓ (no full file content reproduced; only brief verbatim quotes load-bearing for the diagnosis).
- No `[FAIL]` lines.

PROCEED to Sensemaking.
