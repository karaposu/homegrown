# Surfacing — routelister provenance: regression or improvement?

## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-09-17_22-46__routelister_provenance_regression_or_improvement/_branch.md

---

## Reception

- **Mode:** artifact (the territory is pre-existing material: spec text, a brief, canon, prior run outputs, findings) · **Entry point:** signal-first (purpose given)
- **Purpose (from `_branch.md` Goal):** an analytical assessment of the `rl.md` source-provenance proposal — a requirements inventory (what it demands at spec / run / ecosystem level), an identity analysis (what it means for RouteLister's essence, viability, boundary, rationale), and regression-vs-improvement verdicts — evaluated against RouteLister as it exists in this repo. Bias: material that bears on (a) what the proposal requires, (b) what RouteLister *is* and *why it exists*, (c) how sources are cited in practice today, (d) precedents elsewhere in the harness for provenance rules, (e) design history that fixed the current boundaries.
- **Territory (explicit-bounded, from `_branch.md` MQ2):** R1 the canonical RouteLister spec · R2 `rl.md` · R3 canon / docs rationale for RouteLister · R4 actual RouteLister outputs in this repo · R5 sibling provenance precedents in the harness · R6 RouteLister design-history findings · R7 the traverse runner's RouteLister contract. Boundary-discovery sub-phase: **not fired** (territory explicit).
- **Prior artifact / prior workspace:** none (first surfacing for this inquiry). The pre-compaction session read of R1/R2 is not treated as workspace — both were re-read in full this invocation.
- **Recency annotation policy:** captured per item below (`fs:` = filesystem mtime, local time as reported by `stat`; `none` = no local file). Never used to tag relevance.

---

## Traversal Trace

Relevance: core / sub / side / umbrella · Confidence: HIGH / MEDIUM / LOW.

| # | Region | Item identifier | Relevance | Conf. | Recency | Step note |
|---|---|---|---|---|---|---|
| 1 | R1 spec | `cognitive_harness/routelister/SKILL.md` (entry file; step 5 `## User Input` rule; steps 1–3 territory/goal/mode/PERSIST) | core | HIGH | fs: 2026-05-30T11:36:47 | read in full; identical to installed copy (diff -q silent) |
| 2 | R1 spec | `references/routelister.md` §"What Routelisting Is" + §1.1 verb-meaning (purposive · intrinsic · cumulative · domain-agnostic) | core | HIGH | fs: 2026-07-01T13:24:57 | read in full |
| 3 | R1 spec | §1.2 unit = concept-identity over manifestations | core | HIGH | (same file) | manifestation = "one artifact-level appearance of a concept" — the slot rl.md §5G names for source info |
| 4 | R1 spec | §1.3 NOT-list (9 exclusions incl. no dependency graph, no control-flow, no disposition, no loop position) | core | HIGH | (same file) | rl.md §6 boundaries restate these |
| 5 | R1 spec | §1.4 self-containment ("references only its own inputs… does not reference… any other discipline, protocol, runner") | core | HIGH | (same file) | governs whether "transcript"/"conversation" pointers count as outward references |
| 6 | R1 spec | §1.5 vocabulary — Confidence = "perceived formed-ness"; Priority; Essentiality | core | HIGH | (same file) | rl.md §6 forbids repurposing Confidence |
| 7 | R1 spec | §2.3 input contract — territory may be "a passage describing a space"; folder-independent | core | HIGH | (same file) | the door through which conversation-only material enters |
| 8 | R1 spec | §3.1 Sweep — "perceives by enumerating… does not invent items the territory does not contain" | core | HIGH | (same file) | native anchor for rl.md §5F never-invent |
| 9 | R1 spec | §3.2 individuate (lean-to-split; incremental; "a later depth run can reveal one identity is really two") | core | HIGH | (same file) | route identity is not stable across runs — bears on §5G label reuse |
| 10 | R1 spec | §3.5 cross-run LOAD → INTEGRATE → PERSIST; idempotency-at-fixpoint; enrich-not-dump; stale-flag-not-delete | core | HIGH | (same file) | rl.md §5G asks for "a proportionate approach consistent with the existing persistence model" |
| 11 | R1 spec | §4.2 LAYER 1 (Over-merge · Under-coverage · Wrong-grain · Goal-loss · Type-misassignment · Index-drift) | core | HIGH | (same file) | no provenance mode exists today |
| 12 | R1 spec | §4.3 LAYER 2 (Selection-creep · Process-coupling · Description-collapse · Manifestation-dump) | core | HIGH | (same file) | Process-coupling + Manifestation-dump are the two modes a provenance change could trip |
| 13 | R1 spec | §4.5 verdicts PROCEED / FLAG / RE-RUN | core | HIGH | (same file) | rl.md §5F's "scoped quality flag" slots here |
| 14 | R1 spec | §5.1 `routelister.md` wrapper — Map Header · Route Index (lean; consumer-filled ✓ "routelisting authors it empty and never reads it") · records · Excluded · Telemetry | core | HIGH | (same file) | the map is a static piece over a concluded territory; re-authored on active ones |
| 15 | R1 spec | §5.2 route record — Touches ("each with its load-bearing qualifier"); WHY line-of-sight (goal rung mandatory; neighbourhood rung an area-property, never an edge); Guidance = Mode + Pointers each with `(bc …)`; "ceiling not floor" | core | HIGH | (same file) | Guidance pointers are prescriptive (what to do), not evidential (what supports) — see absence #A3 |
| 16 | R1 spec | §5.2.1 Meaning-gaps sub-block + its **promotion rule** ("keep it as this text convention until a consumer needs reliable structured… extraction") | core | HIGH | (same file) | the house precedent for adding record content as text-convention-first |
| 17 | R1 spec | §5.2.2 Essentiality identity bounds (attributive only; route↔goal not route↔route; lean to core) | sub | HIGH | (same file) | pattern for how a field carries its own identity bounds |
| 18 | R1 spec | §5.3 `_route.md` — registry `{identity → own-depth pointer, depth-signal, individuation history, first-seen/last-touched}` + invocation log; "no field's value is a different concept-identity"; "no process or control-flow state"; reads/writes only its own file | core | HIGH | (same file) | rl.md §5G's `_route.md` clause restates both boundaries |
| 19 | R1 spec | §5.4 telemetry list | sub | HIGH | (same file) | where a provenance count would report |
| 20 | R1 spec | `~/.claude/skills/routelister/SKILL.md` + `references/routelister.md` (installed) | side | HIGH | fs: 2026-06-16T21:15:33 / 2026-07-01T13:25:08 | byte-identical to R1 items 1–2; "edit canonical then install" = a copy |
| 21 | R2 brief | `rl.md` preamble (two sentences: improve source-reference requirements; preserve enumerate-without-selecting) | core | HIGH | fs: 2026-09-17T21:59:02 | read in full; untracked in git |
| 22 | R2 brief | `rl.md` §1 read + locate canonical + "pay particular attention to: … Source pointers and their reasons" | core | HIGH | (same file) | the brief assumes a "source-pointer mechanism" exists by that name — see absence #A3 |
| 23 | R2 brief | `rl.md` §2 the model_evaluation example (19 routes; "Conversation — the user's recipient correction"; MEOS-014; "the saved User Input already names #ai-operations"; do not modify those docs) | core | HIGH | (same file) | example files NOT on this machine (confirmed-absent region CA1) |
| 24 | R2 brief | `rl.md` §3 the general problem (label preserves consultation, not a route back; interpretation preserved, evidence lost; five "matters when" cases; "a traceability problem") | core | HIGH | (same file) | |
| 25 | R2 brief | `rl.md` §4 desired outcome (five reader-determinables; "strengthen the existing source-pointer mechanism"; "small, coherent refinement over a separate provenance subsystem") | core | HIGH | (same file) | |
| 26 | R2 brief | `rl.md` §5A specific references (permalink/ID · transcript+passage · path/URL+section · pointer into User Input; no redundant capture) | core | HIGH | (same file) | |
| 27 | R2 brief | `rl.md` §5B preserve excerpt + context when no usable pointer; speaker/source type; proportionate; two-file structure; no new required file | core | HIGH | (same file) | in tension with R6 item 78 (log choices, not territory) |
| 28 | R2 brief | `rl.md` §5C explain what the source supports; integrate with the existing Guidance reasons mechanism | core | HIGH | (same file) | see absence #A3 (Guidance reasons justify pointers-forward) |
| 29 | R2 brief | `rl.md` §5D separate source statements from interpretations; label paraphrase; "a source proving somebody said something does not… prove the statement is factually correct" | core | HIGH | (same file) | |
| 30 | R2 brief | `rl.md` §5E changing sources — version/date/excerpt when historical state matters; "explain the criterion" | core | HIGH | (same file) | |
| 31 | R2 brief | `rl.md` §5F never invent (links/IDs, timestamps, transcript locations, exact quotations, inspection claims); identify limitation; do not discard routes; scoped quality flag | core | HIGH | (same file) | |
| 32 | R2 brief | `rl.md` §5G reuse references across routes and across map + index; on later runs avoid an index reference pointing at a reassigned label; `_route.md` info attached to the identity's own manifestations; keep inter-concept-edge and process-state prohibitions | core | HIGH | (same file) | |
| 33 | R2 brief | `rl.md` §6 boundaries (no selection/ranking, sequencing, dependency graph, readiness/execution tracking, control-flow, new meaning for P/C/E; Confidence stays formed-ness; keep route-type system, identity unit, enumeration method, two-file contract) | core | HIGH | (same file) | |
| 34 | R2 brief | `rl.md` §7 validation — 7 situations; the acceptance question; no unnecessary inflation; "do not invent missing original messages" | core | HIGH | (same file) | |
| 35 | R2 brief | `rl.md` §8 implement + report; "smallest coherent update"; project-agnostic | core | HIGH | (same file) | |
| 36 | R2 brief | `rl.md` trailing lines ("Copy agent link / Report this / Terms of Service"); paths under `/Users/nsstorm/` | side | MEDIUM | (same file) | provenance of the brief itself: pasted from a web agent UI, written against another machine |
| 37 | R3 canon | `docs/walkthrough.md` (RouteLister's settled design; "used at the boundary is a composition role, not identity"; cumulative concept-map = "the navigation substrate") | core | HIGH | fs: 2026-05-30T11:54:29 | grep-read; no provenance vocabulary (absence #A4) |
| 38 | R3 canon | `docs/canon/sustained_traversal_loop_of_loops.md` — "the navigational individual session — the eyes. A fresh, context-isolated session… running the enumerator (routelister)… never chooses"; "Seeing… already artifact-borne (routelister maps)"; "one enumerator, two controllers" | core | HIGH | fs: 2026-06-10T13:48:02 | canon already presumes maps are produced/read by context-isolated sessions |
| 39 | R3 canon | `docs/canon/When_Is_the_Worker_Loop_Good_Enough.md` — "the meta-layer reads the loop's artifacts… not its cognitive internals"; "the navigational session… reads finding.md and the concept-map" | core | HIGH | fs: 2026-06-10T11:50:49 | consumers of `_route.md` named |
| 40 | R3 canon | `docs/canon/thinking_disciplines/list_of_disciplines.md` line 109 "Each discipline is standalone and domain-agnostic" | core | HIGH | fs: 2026-05-26T19:19:08 | the self-containment principle's canon source |
| 41 | R3 canon | `docs/canon/thinking_disciplines/anatomy_of_disciplines.md` line 57 — progression makes reasoning "TRACEABLE (how did you get here?)" and enables "CROSS-SESSION RESUME" | core | HIGH | fs: 2026-05-26T19:51:35 | traceability is a named discipline purpose in canon |
| 42 | R3 canon | `docs/canon/runtime_environment/folder_based.md` line 287 "Any AI session, any human reader, can pick up an inquiry from its `_state.md` alone" + lines 250–251/328 (finding = compiled answer; docarchive = opt-in trail) | sub | HIGH | fs: 2026-05-26T13:56:33 | the stand-alone-artifact doctrine |
| 43 | R3 canon | `docs/canon/worker_loop_logic.md` line 122 ("The finding is self-contained") + §Cross-session resume | sub | MEDIUM | fs: 2026-05-26T15:27:31 | |
| 44 | R3 canon | `docs/canon/traverse_to_venture.md` line 19 — "the record — the durable trail… inquiry folders, findings, indexes, concept maps. Cross-session memory lives here." | sub | HIGH | fs: 2026-07-19T19:05:45 | concept maps named as cross-session memory |
| 45 | R3 canon | `docs/harness_stage_lens.md` lines 25/103 — routelister's output "consumed after the inquiry concludes, by whatever picks the next step" | core | HIGH | fs: 2026-07-09T09:00:12 | after-the-conversation consumption is the designed use |
| 46 | R3 canon | `docs/canon/the_kernel_bet.md` (attention-allocation = surfacing / routelister) | sub | MEDIUM | fs: 2026-06-10T12:55:43 | rationale-level |
| 47 | R3 canon | `docs/canon/paradimgs_and_thinking_space_movements.md` (engagement verbs = typed steps of the base walk) | side | MEDIUM | fs: 2026-07-02T11:01:37 | |
| 48 | R3 canon | `docs/canon/algorithm_family.md` line 20 (routes as "proposal-prior") | side | LOW | fs: 2026-06-10T13:46:32 | |
| 49 | R3 canon | `docs/canon/naming_change.md`, `MVLFamily_as_Buildup_Steps_Toward_Traverse.md`, `project_north_star.md` (R = routelister exhaust; built-and-running list) | side | LOW | fs: 2026-06-14T11:52:08 (naming_change) | |
| 50 | R3 canon | `docs/terms.md` line 9 "Inq RoutEF" | side | LOW | fs: 2026-06-11T22:08:18 | |
| 51 | R3 memory | memory `canon-docs-self-contained.md` (canon body must not point into `devdocs/inquiries`; distill instead) | sub | HIGH | fs: 2026-06-10T13:45:03 | the project's standing doctrine on stand-alone readability of stable artifacts |
| 52 | R4 practice | the corpus: 128 `devdocs/inquiries/*/routelister.md` (2026-06-04 → 2026-07-20) + 132 `_route.md` | core | HIGH | fs: oldest 2026-06-04T06:11:34 · newest 2026-07-20T15:16:01 | counts by `ls`/`find` |
| 53 | R4 practice | conversation-style source labels in route bodies: **27 of 128 maps, 65 lines** (fixed-string grep: "the user asked/said/named/explicitly…", "at his word", "as discussed", "user's correction"…) | core | HIGH | (corpus) | the brief's phenomenon exists in this repo too; 30 sample lines read |
| 54 | R4 practice | sampled label forms: "(bc the user asked to understand + ratify, not to build)"; "the user said 'before anything'"; "PENDING — the user said 'dont make changes yet'"; "the user named seed-generation failure a 'big big problem'"; "the user explicitly deferred it ('later to determine')"; "at his word" (×9) | core | HIGH | (corpus) | a native informal excerpt habit exists (short verbatim quotes) with no speaker-type, location, or paraphrase marking |
| 55 | R4 practice | all 128 maps carry file-path citations; 72 carry §/line/anchor-level pointers | sub | HIGH | (corpus) | pointer precision to documents is already partly practiced |
| 56 | R4 practice | `2026-07-20_14-45…/routelister.md` (most recent; 7 routes; ✓ cells carrying consumer content; "at his word" ×4) | core | HIGH | fs: 2026-07-20T15:16:01 | read in full |
| 57 | R4 practice | `2026-07-20_14-45…/_route.md` (identity table: depth pointer · depth-signal · individuation history · dates; invocation log) | core | HIGH | fs: 2026-07-20T15:12:28 | read in full; rows carry prose depth-signals, no quotes |
| 58 | R4 practice | `2026-07-08_15-46…RICH…/routelister.md` (7 routes; Touches cite files + concepts; Guidance `(bc …)`; two user-attributed claims) | core | HIGH | fs: 2026-07-08T16:16:50 | first 140 lines read (whole map) |
| 59 | R4 practice | `devdocs/routelister/2026-06-01__IE_trajectory.md` + `devdocs/routelister/_route.md` (the one standalone run; territory = a list of inquiry folder names; pointers cite finding-internal labels like "11-27's SV6"; index History records a user direction "do it from scratch, old ones were wrong") | core | HIGH | fs: 2026-06-01T15:06:11 / 15:06:28 | pre-June-22 schema (Movement; Status column) |
| 60 | R4 practice | `_route.md` files containing quoted text in rows: 72 of 132 | sub | MEDIUM | (corpus) | not read; count only |
| 61 | R5 precedent | `cognitive_harness/protocols/seed_harvester.md` — source-support condition ("REQUIRED"; "Label the parts"; fabricated transfer = "provenance violation"); consumption story: "a reader who has not seen the source can still tell what the germ is, what it is for, and what licensed it" | core | HIGH | fs: 2026-07-08T11:29:46 | the closest in-house analogue to rl.md §7's acceptance question |
| 62 | R5 precedent | `cognitive_harness/protocols/conclude.md` — Inherited Commitments Re-test "with evidence cited"; "[verbatim or short paraphrase…]"; MUST/COULD drift quoted verbatim; the finding self-sufficiency test ("read ONLY finding.md") | core | HIGH | fs: 2026-08-27T16:33:22 | evidence-citing + verbatim-marking already required of findings |
| 63 | R5 precedent | `cognitive_harness/surfacing/references/surfacing.md` §5.3 thin-artifact criterion (artifact carries NO item content; identifiers + tags; cross-session via re-read) + §4.2 Mode 6 artifact under-specification | core | HIGH | fs: 2026-05-23T08:12:56 | the opposite pole: pointer-only, content-free artifact |
| 64 | R5 precedent | the `## User Input` verbatim-capture rule across disciplines (articulate_simple: "so the artifact can be re-read against its source"; td-critique/innovate/sense-making: "allows Reflect to see what the human asked"; paradigm_sweeper: "beside the recast for audit"; routelister step 5) | core | HIGH | fs: 2026-06-07T19:09:33 (articulate_simple SKILL) | an existing excerpt-preservation mechanism, invocation-scoped |
| 65 | R5 precedent | `cognitive_harness/routelog/SKILL.md` — P2 source-of-truth integrity (append-only; derived views); stamps a ↗ manifestation pointer INTO `_route.md`; "on ambiguity… never guess" | sub | HIGH | fs: 2026-06-13T13:50:51 | a sibling already writes pointer content into `_route.md` rows |
| 66 | R5 precedent | `cognitive_harness/non-active/routeman/*` (predecessor; loop-fused; `_route.md` with Status/History) | side | MEDIUM | none captured | head only |
| 67 | R5 precedent | memory `verify-canon-terms-not-assert.md` (open the file before asserting coverage or absence) | sub | MEDIUM | fs: 2026-07-10T16:01:03 | index-level; the honesty guard rl.md §5F echoes |
| 68 | R6 history | `2026-05-30_11-23__routelister_two_output_files_design_error/finding.md` — standalone-owns-its-state; three memories / two owners; `_route.md` = within-concept only, never re-fuse | core | HIGH | fs: 2026-05-30T11:34:06 | head read (first 80 lines) |
| 69 | R6 history | `2026-06-22_10-37__routelister_todo_md_third_output/finding.md` — third file REJECTED ("one enumerator, two controllers"; a routelister-emitted file is re-emitted → wiped or stale; merge fragile because "route identity isn't stable across runs"; map vs travel log) | core | HIGH | fs: 2026-06-22T10:56:05 | head read |
| 70 | R6 history | `2026-06-22_13-58__traversal_memory_shape_and_done_marks/finding.md` — "log your choices, not the territory"; copying outcomes = "denormalization anti-pattern… copies and then rots"; record pointers, not prose; keep ✓ | core | HIGH | fs: 2026-06-22T14:17:01 | head read; the strongest in-house argument AGAINST excerpt copying |
| 71 | R6 history | `2026-05-29_16-41__routelister_input_contract/finding.md` — territory generalizes "state"; "even raw text describing a space"; folder-independent by construction | core | HIGH | fs: 2026-05-29T17:01:03 | head read |
| 72 | R6 history | `2026-05-30_06-38__routelister_cross_run_model/finding.md` — "the index IS the registry"; perception governs; stale-flag-not-delete; load-modify-save | core | HIGH | fs: 2026-05-30T06:50:43 | head read |
| 73 | R6 history | `2026-05-30_00-13__routelister_output_artifact_schema/finding.md` — per-field carry/re-derive/drop; WHY originally = "territory-evidence it's a goal-relevant route"; dropped Status/Blocked-By/Unlocks; "no field's value is a different concept-identity" | core | HIGH | fs: 2026-05-30T00:24:52 | head read; WHY's original evidence-role was later displaced by the line-of-sight reframe (item 15) |
| 74 | R6 history | `2026-05-28_20-35__routeman_identity_standalone_discipline_redo/finding.md` — canon line 109; "loop-compatibility-bias" as a named failure | sub | HIGH | fs: 2026-05-28T23:32:37 | head read |
| 75 | R6 history | `2026-05-30_09-07__routelister_boundary_use_protocol_vs_section/finding.md` — three layers (discipline / usage / orchestration); "re-fusion guard: protocol → discipline, never the reverse"; no outbound pointers in the spec | core | HIGH | fs: 2026-05-30T09:19:50 | head read; bears on whether "transcript"/"conversation" may be named in the spec |
| 76 | R6 history | `2026-06-21_23-26__routelister_routemap_format_and_field_improvements/finding.md` — "write-once-read-many"; "a cold human read it across later sessions — you were that cold reader"; Touches with load-bearing qualifier; Guidance shape; honest bloat accounting (+25–30% on dense routes) | core | HIGH | fs: 2026-06-21T23:53:49 | head read; the cold-reader premise is already in the design rationale |
| 77 | R6 history | `2026-07-02_18-10__routelister_audit_last20_crowboy_maps/finding.md` — verdict GOOD; the one need = cross-map route identity → proposed within-identity **Appears-also-on** LOCATION-valued pointer (Depth-link as precedent); ✓ cells carry consumer content; "epistemic ceiling: same model authored and audited" | core | HIGH | fs: 2026-07-02T18:35:38 | head read; precedent for adding a location-valued within-identity pointer row |
| 78 | R6 history | `2026-05-27_14-49__routeman_directional_input_read_policy/finding.md` — read-policy tiers MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY; graceful-degrade default (FLAG + proceed) | sub | MEDIUM | fs: 2026-05-27T15:04:12 | head read; vocabulary for "pointer unavailable → flag and proceed" |
| 79 | R6 history | `2026-05-28_17-30__routeman_docarchive_read_policy_question/finding.md` — finding self-sufficient by design; consumers must not need raw outputs; cost-of-bloat quantified | sub | HIGH | fs: 2026-05-28T17:17:50 | head read; bears on "proportionate capture" |
| 80 | R6 history | the other ~25 routeman/routelister design inquiries (05-23 → 05-29 routeman chain; 06-16 meaning-gaps chain; 06-22_00-20 essentiality; 06-22_07-00 WHY multi-scope; 06-10_16-36 post-conclude step) | umbrella | LOW | none captured | enumerated by title only — see frontier F1 |
| 81 | R7 runner | `~/.claude/skills/traverse/SKILL.md` — RouteLister invocation contract (territory = this inquiry's artifacts; goal quoted from `_branch.md`; both files stay in root, never archived; "consumed after the inquiry concludes (by the between-inquiry / next-step layer)") | core | HIGH | fs: 2026-07-09T14:22:19 (installed) · repo copy 2026-09-11T10:25:08 | in context via the runner skill |

---

## State Summary

- **Territory echo:** R1 spec · R2 brief · R3 canon/docs rationale (+ one memory) · R4 practice corpus (128 maps / 132 indexes + the one standalone run) · R5 sibling precedents · R6 design-history findings · R7 runner contract.
- **Purpose echo:** as in Reception.

### Coverage map

| Region | Coverage | Aggregate relevance |
|---|---|---|
| R1 spec | confirmed (both files read in full; installed copies diffed) | core |
| R2 brief | confirmed (read in full) | core |
| R3 canon / docs | scanned-but-shallow (grep contexts + walkthrough lines; two memories); full texts not re-read this invocation | core (items 38, 39, 41, 45 decisive) |
| R4 practice | confirmed for counts + 3 maps + 1 index + the standalone run read whole; scanned-but-shallow for the 27 labelled maps (30 of 65 lines sampled) | core |
| R5 precedents | confirmed (grep-level for seed_harvester/conclude; surfacing spec in full; User-Input rules enumerated; routelog head) | core |
| R6 history | scanned-but-shallow (12 findings, first ~80 lines each); ~25 further findings by title only | core |
| R7 runner | confirmed (in context) | core |

### Confirmed-absent regions / items

- **CA1** — the `rl.md` §2 example outputs (`/Users/nsstorm/Desktop/projects/model_evaluation/devdocs/routelister/2026-09-17__model_evaluation_operating_summary/{routelister.md,_route.md}`): absent on this machine; `/Users/nsstorm` does not exist; no `model_evaluation` project locally.
- **A2** — `tools/structural_check.sh`: absent (manual checks).
- **A3** — *source-reference vocabulary in the spec*: `grep -i "excerpt|quotation|quote|cite|citation|provenance|transcript|paraphras|verbatim|source"` over `references/routelister.md` + `SKILL.md` returns **nothing**. The spec has no "source pointer" mechanism by name; what it has are **Guidance pointers** (prescriptive: what to do, with a `(bc …)` reason) and **Touches** (the artifacts a route acts on). The brief's "source pointers and their reasons" names a mechanism that does not exist under that description.
- **A4** — the same vocabulary in `docs/walkthrough.md`: nothing.
- **A5** — a provenance-shaped LAYER 1 / LAYER 2 mode or telemetry line: none in §4 / §5.4.

### Concept-names list (name · type · provenance · gloss)

- concept-identity / manifestation · vocabulary · #3 · the unit and its artifact-level appearances
- self-containment (§1.4) · vocabulary · #5 · no outward references in the spec
- "a passage describing a space" · structural-reference · #7 · the conversation-input door
- perceive-by-enumerating / do not invent · vocabulary · #8 · native never-invent anchor
- lean-to-split / unstable route identity across runs · vocabulary · #9, #69 · bears on label stability
- LOAD → INTEGRATE → PERSIST; idempotency-at-fixpoint; enrich-not-dump; stale-flag-not-delete · vocabulary · #10, #72
- Process-coupling / Manifestation-dump · vocabulary · #12 · the two LAYER 2 modes at risk
- Touches (load-bearing qualifier) · vocabulary · #15, #76
- Guidance pointer + `(bc …)` reason · vocabulary · #15 · prescriptive, not evidential
- WHY line-of-sight (goal rung) vs WHY as "territory-evidence" · structural-reference · #15 vs #73 · the evidence role was displaced in design history
- Meaning-gaps promotion rule (text convention until a consumer needs structured extraction) · structural-reference · #16
- consumer-filled ✓ ("authors it empty and never reads it") · vocabulary · #14, #77
- `_route.md` within-identity boundary; no process state · vocabulary · #18, #68
- Appears-also-on (location-valued within-identity pointer, proposed) · coined-term · #77
- one enumerator, two controllers; "the eyes" (context-isolated navigational session) · vocabulary · #38, #69
- log-your-choices-not-the-territory; denormalization anti-pattern (copies rot) · coined-term · #70
- write-once-read-many; the cold reader · coined-term · #76
- thin artifact (no item content) · vocabulary · #63
- source-support (REQUIRED; label the parts; fabricated transfer) · vocabulary · #61
- `## User Input` verbatim capture · structural-reference · #64
- read-policy tiers (MANDATORY-WHEN-AVAILABLE / SHOULD / MAY; graceful-degrade) · vocabulary · #78
- re-fusion guard (protocol → discipline only) · coined-term · #75
- traceability gap / material source reference / provenance limitation flag / source-statement vs interpretation · coined-term (rl.md) · #24–#31
- conversation-style label ("the user asked…", "at his word") · coined-term (this surfacing) · #53–#54

### Recency distribution (descriptive only)

| Region | newest | oldest | no-mtime | items |
|---|---|---|---|---|
| R1 | 2026-07-01 | 2026-05-30 | 0 | 20 (two files + sections) |
| R2 | 2026-09-17 | 2026-09-17 | 0 | 16 (one file + sections) |
| R3 | 2026-07-19 | 2026-05-26 | 0 | 15 |
| R4 | 2026-07-20 | 2026-06-01 | 0 (corpus-level for 52–55, 60) | 9 |
| R5 | 2026-08-27 | 2026-05-23 | 1 (routeman archive) | 7 |
| R6 | 2026-07-02 | 2026-05-27 | 1 (umbrella item 80) | 13 |
| R7 | 2026-09-11 (repo) / 2026-07-09 (installed) | — | 0 | 1 |

Observation (not a verdict): the spec has not changed since 2026-07-01; the practice corpus ends 2026-07-20; the brief is from today. Relevance above was tagged from content, not from these dates.

### Frontier flags

- **F1** — R6 depth: the ~25 unread design findings (item 80), especially `2026-06-22_07-00__why_field_multi_scope_structure` (how WHY moved from "territory-evidence" to line-of-sight) and `2026-06-16_17-45__container_choice_field_vs_guidance_text` (why Meaning-gaps stayed text) — re-invoke with refined-sub-purpose "how evidence/role content was placed in the record before" if Sensemaking needs the genealogy.
- **F2** — R4 depth: the remaining 35 of 65 conversation-style lines and the 72 `_route.md` files with quoted text — re-invoke if a full practice census is wanted (sample was sufficient to confirm the phenomenon and its native excerpt habit).
- **F3** — CA1 cannot be covered; any claim about the model_evaluation example rests on `rl.md`'s own description only.
- **F4** — other projects' corpora (the crowboy maps the two audits measured) not enumerated; not needed for the purpose.

### Workspace-populated status

`{populated: true, populated-at: 2026-09-17T22:56, extent: R1 full · R2 full · R3 grep-level + walkthrough · R4 counts + 4 artifacts whole + 30 sample lines · R5 grep-level + surfacing spec full · R6 12 finding-heads · R7 in context}`

---

## Telemetry

- Mode: artifact · entry: signal-first · sub-phase fired: no
- Cycles: 7 (one per region) + 1 absence-verification cycle · items enumerated: 81 · tagged core 55 · sub 17 · side 8 · umbrella 1
- items_with_mtime: 79 · items_without_mtime: 2
- Convergence: territory traversed at the stated resolution; no goal-relevant item filtered at uncertain relevance (umbrella used once); rejections only at HIGH confidence (nothing rejected — Excluded is empty; low-relevance items kept as side)
- Workspace-overload trigger: not fired (R6 depth deliberately capped at finding-heads — flagged F1 rather than silently sampled)
- Failure modes checked: Missed-relevance (F1/F2 named) · Surfaced-irrelevance (side items kept, cheap) · Over-coverage (no) · Territory-mis-binding (no — CA1 excluded by fact, not by choice) · Workspace overload (no) · Artifact under-specification (every entry has an identifier; every concept-name has provenance) · Workspace-artifact desync (tags captured at emission) · Recency-Equates-Idleness / Recency-Bias-Filter (no — dates reported only) · LAYER 2: Interpretive-overstep (step notes kept to labeling; the A3/#73 observations are absence-detections and identifiers, not a model) · Purpose-loss (no) · Self-coupling (no)

## Self-assessment

**FLAG** — output complete and ready; flagged because two frontier signals are material to downstream: **F1** (design-genealogy depth for WHY / container decisions) and **F3** (the brief's motivating example is unrecoverable here, so the practice evidence must come from this repo's own corpus — items 52–60 — not from the brief's case).
