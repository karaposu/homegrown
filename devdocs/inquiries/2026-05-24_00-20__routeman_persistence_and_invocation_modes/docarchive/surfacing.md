# Surfacing — routeman persistence and invocation modes

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/_branch.md`

## Mode + Entry Point

- **Territory-type-mode:** `artifact-dominant with possibility component`. The territory has substantive existing artifacts (the routeman chain — 4 prior inquiries; `branch_inquiry.md`; `multi_resolution_navigation.md`; canonical /navigation), AND the deliverable requires generating candidate question-phrasings + answers, which is possibility-shaped. Going with **artifact** mode because the dominant operation is to surface what the existing protocols already answer + what's still open; the candidate-generation is secondary.
- **Entry point:** `signal-first` (purpose is explicit per `_branch.md`).
- **Territory specification:** `explicit-bounded`. Edges: 4 routeman-chain priors + 2 directly-relevant protocols (`branch_inquiry.md`, `multi_resolution_navigation.md`) + canonical /navigation + `_state.md` convention + user's 6+1 topics. Boundary-discovery SKIPPED.
- **Purpose template:** items qualify if they speak to ANY of (a) latent questions in the user's input that need rephrasing; (b) mappings from the user's proposals to existing protocol concepts that already answer them; (c) candidate designs for the open sub-questions; (d) interactions with existing routeman commitments; (e) file-convention decisions; (f) recalibration semantics; (g) naming considerations; (h) risks of adopting the proposals as stated.

## Traversal Trace

### Region A — Latent questions in the user's input (the meta-task substrate)

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 1 | A | Q-latent-1: "Does routeman have two distinct invocation modes — generic-discovery vs directional/topic-scoped — that warrant separate procedural specification?" | core | HIGH | The user's first topic. The two modes might already be a degenerate case of stage-1 vs stage-2 in the staged-mapping adoption. |
| 2 | A | Q-latent-2: "Should each inquiry folder carry a per-inquiry-folder persistent-memory file for routeman state (the user's proposed `_navig.md`)?" | core | HIGH | The user's central proposal. Analogous to `_state.md`. |
| 3 | A | Q-latent-3: "On re-invocation (generic mode), should routeman read all prior persistent-memory files to recalibrate existing directions + optionally decompose/create new directions?" | core | HIGH | The user's recalibration framing — three sub-steps (read; recalibrate; decompose-or-create). |
| 4 | A | Q-latent-4: "On re-invocation (directional mode), should routeman scan sub-folders of the selected direction for prior persistent-memory and apply the same recalibration steps?" | core | HIGH | The user's parallel framing for the directional mode. |
| 5 | A | Q-latent-5: "Should routeman adopt the existing `cognitive_harness/protocols/branch_inquiry.md` protocol for organizing route-expansion as nested child inquiries?" | core | HIGH | The user proposes adopting branch_inquiry for tidiness. |
| 6 | A | Q-latent-6: "Should the file-content split — enumerations in `routeman.md`, metadata + status in `_navig.md` (with `_navig.md` containing a path pointer to `routeman.md`) — be adopted, or are they better collapsed into one file?" | core | HIGH | The user's structural intuition + the user's preferred answer (split). |
| 7 | A | Q-latent-7 (meta): "Can these questions be re-phrased clearly + grouped + decoupled, so each is testable and not conflated with the others?" | core | HIGH | The user's explicit ask: "list them in better phrased way." First-deliverable shape. |
| 8 | A | Q-latent-8 (implied): "What's the relationship between the user's proposed `_navig.md` and the existing `_state.md` convention — do they conflict, complement, or duplicate?" | sub | HIGH | The analogy "just like state.md we can have navig.md" raises a relationship question the user doesn't explicitly ask but implies. |
| 9 | A | Q-latent-9 (implied): "If routeman's enumerations live in `routeman.md` (per Q-latent-6), what's the relationship between `routeman.md` and the existing routeman invocation that writes the Route Map?" | sub | HIGH | The user's split implies routeman has a canonical OUTPUT FILE; the design memo and adoptions don't currently commit to a specific output filename. |
| 10 | A | Q-latent-10 (implied): "Does the `_navig.md` mechanism interact with the LAYER-2 audit infrastructure (frontier Q4) — is meta-routeman-state part of audit substrate?" | sub | MED | If `_navig.md` tracks recalibration history, it provides a cross-invocation audit trail. |
| 11 | A | Q-latent-11 (implied): "What's the lifecycle of `_navig.md` — does it accumulate across all routeman invocations on the inquiry, or get rewritten each invocation, or maintain a history section?" | sub | HIGH | Lifecycle is a load-bearing implementation detail. |
| 12 | A | Q-latent-12 (implied): "If routeman uses branch_inquiry for nested expansions (per Q-latent-5), how does this interact with the staged-mapping adoption from the previous inquiry (Stage 2 = sub-routes under a parent)?" | core | HIGH | Two adjacent expansion mechanisms now exist; their relationship needs articulation. |

### Region B — Mapping to existing `multi_resolution_navigation.md` protocol

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 13 | B | `multi_resolution_navigation.md` exists and ALREADY specifies most of what the user proposes | core | HIGH | **Major finding.** The protocol commits to: parent-map + child-map two-level expansion; `_frontier.md` as control ledger + readable run summary; resume semantics across runs; budgeted/exhaustive/sampled coverage modes. Closely aligns with user's proposals. |
| 14 | B | Protocol's `_frontier.md` ↔ user's proposed `_navig.md` | core | HIGH | Direct mapping. The protocol calls it `_frontier.md`; the user calls it `_navig.md`. Functions overlap substantially: control state + readable run summary + resume instruction. |
| 15 | B | Protocol's `navigation.md` ↔ user's proposed `routeman.md` | core | HIGH | The protocol stores the actual map content in `navigation.md`. The user's split (`routeman.md` for enumerations) is structurally identical. |
| 16 | B | Protocol's `run_trace.md` is a third file (not currently in user's proposal) | sub | HIGH | The protocol also commits to a `run_trace.md` documenting source, mode, validation, deviations, outcome. User didn't propose this; may or may not be desired for routeman. |
| 17 | B | Protocol's `output_root/children/<route-id>/navigation.md` structure for child maps | core | HIGH | This is the protocol's existing answer to "where do directional-mode sub-routes live." Mirrors user's branch_inquiry framing but is path-based not branch_inquiry-based. |
| 18 | B | Protocol's coverage modes (`exhaustive` / `budgeted` / `sampled`) | sub | HIGH | Operational granularity beyond user's "generic vs directional" framing. The user's "generic" maps to the parent-map level; the user's "directional" maps to budgeted child-map expansion on a selected route. |
| 19 | B | Protocol's frontier-ledger semantics: candidates have status (queued / scheduled / expanded / pending / deferred-by-budget / out-of-policy / blocked / skipped-with-reason / stale / superseded) | sub | HIGH | More detailed status vocabulary than the user proposed; directly applicable to routeman's recalibration. |
| 20 | B | Protocol's "no_final_selection" boundary | sub | HIGH | Enforces routeman/navigation IS enumeration, not selection. Consistent with routeman's design memo's enumeration-first commitment. |
| 21 | B | Protocol's resume-instruction pattern: "Resume from: output_root/_frontier.md; Recommended next mode: ...; Recommended next batch_size: N" | sub | HIGH | The user's "second run reads all prior `_navig.md` files" is structurally this protocol's resume mechanic. |
| 22 | B | Protocol's "Frontier Candidate Record" schema (candidate_id; parent_map; parent_route; route_type; priority; status; expansion_reason; eligibility; eligibility_reason; scheduling_reason; child_map_path; blocked_by; continuation_note) | sub | HIGH | Detailed schema for the frontier ledger. Maps to what `_navig.md` would track. |
| 23 | B | Protocol's "selection_boundary" + "validation_plan" + "trace_path" fields in input contract | side | HIGH | Input contract is well-specified; routeman could inherit verbatim if adopting the protocol. |

### Region C — Mapping to existing `branch_inquiry.md` protocol

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 24 | C | `branch_inquiry.md` creates child inquiries under `[parent_path]/branches/[branch_id]/` | core | HIGH | The user wants routeman to use this for "tidy" expansion. The branch protocol's path convention is `parent/branches/<branch_id>/`, not the multi_resolution_navigation protocol's `output_root/children/<route-id>/`. **Two different conventions exist.** |
| 25 | C | branch_inquiry requires `branch_from` (parent path) + `branch_source` (specific anchor in parent) + `question` + `runner` | sub | HIGH | branch_inquiry's contract is specific to creating CHILD INQUIRIES that will run their own SIC pipeline. Different from routeman's "expand a route into sub-routes" — sub-routes are not inquiries; they're route-map entries. |
| 26 | C | branch_inquiry's parent index is `_branches.md` (a separate file) | sub | HIGH | Distinct from `_state.md` and from `_frontier.md`. If routeman adopts branch_inquiry, a third sidecar file convention enters routeman's footprint. |
| 27 | C | branch_inquiry's path-source-of-truth rule: "use full `inquiry_path` after creation; don't rebuild from `inquiry_id`" | sub | HIGH | Operational discipline. Routeman would inherit this if adopting branch_inquiry. |
| 28 | C | branch_inquiry depth policy: depth 1-3 normal; depth 4-5 warn; depth 6+ require user confirmation | sub | HIGH | Bounded recursion. If routeman's directional re-invocation creates branches, this depth policy applies. |
| 29 | C | **Adjacency tension:** branch_inquiry is designed for SIC-pipeline child inquiries; routeman's sub-routes are NOT child inquiries (they're route-map entries that don't run SIC). Structural mismatch | core | HIGH | Important: directly adopting branch_inquiry for routeman's sub-routes would force them to be inquiries, which they aren't. multi_resolution_navigation's `output_root/children/<route-id>/` convention is structurally closer to what sub-routes are. |

### Region D — File-convention candidate designs

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 30 | D | Adopt multi_resolution_navigation's existing convention verbatim: `_frontier.md` (control + summary), `navigation.md` (the map), optional `run_trace.md` | core | HIGH | Minimum-surgical: reuse what exists. |
| 31 | D | Adopt the convention with name remapping: `_navig.md` (= `_frontier.md`), `routeman.md` (= `navigation.md`) | sub | HIGH | Honor user's preferred names + reuse protocol structure. Naming becomes the surgical change. |
| 32 | D | Adopt only the control-vs-content split (one control file + one content file) without name commitment | sub | MED | Defer naming; commit to the split. |
| 33 | D | Single file: enumerations + metadata in one file (rejected by user; counter to surfacing) | side | LOW | The user explicitly preferred the split. Considered for completeness. |
| 34 | D | Three-file convention: `_navig.md` (status), `routeman.md` (enumerations), `run_trace.md` (audit history) | sub | MED | If recalibration history is load-bearing, a separate trace file may be useful. multi_resolution_navigation has this. |
| 35 | D | File location: per-inquiry-folder (user's proposal) vs central registry (e.g., `devdocs/navigation/<run-id>/`) | sub | HIGH | The user's proposal is per-inquiry; multi_resolution_navigation uses `devdocs/navigation/<run-id>/`. Different placements. The per-inquiry location ties routeman state to the inquiry it operates on; the central location decouples. Trade-offs: per-inquiry = easier cross-session resume per inquiry; central = easier cross-inquiry aggregation. |

### Region E — Recalibration semantics candidates

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 36 | E | Recalibration = full re-enumeration from scratch + use prior state only as memory anchor | sub | MED | Aggressive: each invocation produces independent output; prior state is only for human triage. |
| 37 | E | Recalibration = read prior state + DIFF + emit only the delta | sub | MED | Conservative: minimize re-generation; expose what changed. Closer to user's framing. |
| 38 | E | Recalibration = read prior state + UPDATE in-place (status changes; importance shifts; new directions added) | core | HIGH | User's framing: "recalibrate already existant generic directions (importance, goal, etc...)". This is the in-place-update model. |
| 39 | E | Recalibration = the protocol-specified resume mechanism (read `_frontier.md` for status of each candidate; expand pending; recalibrate stale; create new for newly-discovered) | core | HIGH | This is what multi_resolution_navigation already specifies. |
| 40 | E | The 3 sub-steps of recalibration the user named: (0) read; (1) recalibrate importance/goal; (2) decompose-or-create-new | core | HIGH | Maps to protocol steps: (0) read frontier ledger; (1) update candidate records (status/priority); (2) extend frontier with new candidates. |

### Region F — Two-modes characterization

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 41 | F | Generic mode = invoke routeman with no parent-route scope; routeman scans the whole inquiry-folder territory + produces the top-level Route Map | core | HIGH | Maps to stage 1 of the staged-mapping adoption AND to the protocol's parent-map level. |
| 42 | F | Directional mode = invoke routeman with a parent-route identifier as scope; routeman expands sub-routes under that parent | core | HIGH | Maps to stage 2 of the staged-mapping adoption AND to the protocol's child-map level. |
| 43 | F | The user's "two modes" is essentially the staged-mapping adoption's stage-1 vs stage-2 (already settled) | core | HIGH | Significant: the two modes are not new; they're already part of routeman's design as of the previous inquiry. The new question is the PERSISTENCE model that lets them recalibrate across invocations. |
| 44 | F | Whether there are >2 modes (e.g., a recalibration-only mode that re-reads state without re-enumerating) | sub | MED | A third mode might emerge: "recalibrate" as a distinct invocation from "discover." Not in the user's framing; surfacing the possibility. |
| 45 | F | How modes are signaled at invocation (parent-route identifier present = directional; absent = generic; recalibrate-only flag?) | sub | HIGH | The trigger mechanism question. Intersects FF-1 from the previous inquiry. |

### Region G — Interactions with existing routeman commitments

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 46 | G | Interaction with the routeman design memo's 10 features: F-revisit (cross-cycle REVISIT) is the closest existing feature to recalibration | sub | HIGH | The recalibration semantics resemble F-revisit (RESURRECT / INVALIDATE / REVERT) but operate on routeman's own outputs across invocations, not on cycle output across cycles. Distinct but adjacent. |
| 47 | G | Interaction with the 17-attribute schema + parent-reference field (from staged-mapping adoption): the schema must accommodate a status field for "this Route was recalibrated; original importance was X; updated to Y" | sub | HIGH | Schema impact: possibly add a `revision_history` or `last_recalibrated_at` field. Or store recalibration log in `_navig.md` only. |
| 48 | G | Interaction with the meta-reasoning field (`why_this_might_be_important`) from staged-mapping adoption: recalibration may update meta-reasoning as new context emerges | sub | HIGH | The meta-reasoning field is per-Route; if Routes persist across re-invocations, the meta-reasoning needs versioning. |
| 49 | G | Interaction with the corrected file-scanning architecture: `_navig.md` files are read via the same file-scanning mechanism routeman uses for inquiry artifacts | core | HIGH | Compatible. No new infrastructure needed. |
| 50 | G | Interaction with the LAYER-2 audit (frontier Q4): persistent `_navig.md` files provide cross-invocation audit trail for the audit infrastructure | sub | HIGH | Synergy: the persistence model contributes to the audit substrate. |
| 51 | G | Interaction with the 9 surviving frontier questions: especially Q5 (file-system protocol — `_navig.md` filename and folder convention) and Q6 (file-shape constraints — `_navig.md` schema) | core | HIGH | The persistence proposal extends Q5 + Q6's scope. |

### Region H — Naming considerations

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 52 | H | `_navig.md` (user's preferred name) vs `_frontier.md` (existing protocol's name) | sub | HIGH | Trade-off: `_navig.md` aligns with routeman's name; `_frontier.md` aligns with existing protocol vocabulary (and consumers of the protocol). Renaming the protocol's file invents a new vocabulary; not renaming preserves protocol reuse. |
| 53 | H | `routeman.md` (user's preferred name) vs `navigation.md` (existing protocol's name) | sub | HIGH | Same trade-off pattern. Routeman is the discipline name; `navigation.md` is the legacy term the protocol uses. |
| 54 | H | Three-file naming: e.g., `routeman.md` + `_navig.md` + `routeman_trace.md` (or `_navig_trace.md`) | side | MED | If three files adopted, naming consistency matters. |
| 55 | H | Underscore-prefix convention `_navig.md` matches `_state.md` and `_branch.md` (sidecar files in inquiry folders) | sub | HIGH | The user's underscore prefix is structurally consistent. The user's instinct is right. |

### Region I — Risks and counter-considerations

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 56 | I | Reinventing the wheel: most of what the user proposes is already specified in `multi_resolution_navigation.md`. Risk of duplicating protocol effort vs adopting | core | HIGH | If routeman adopts the protocol, much of the work is reuse. Worth flagging upfront. |
| 57 | I | Adopting branch_inquiry for sub-routes is a STRUCTURAL MISMATCH (sub-routes aren't inquiries that run SIC). Risk of forcing the wrong abstraction | core | HIGH | Already noted at #29. Significant. multi_resolution_navigation's child-map convention is structurally closer. |
| 58 | I | File-convention proliferation: routeman adopting `_navig.md` adds yet another sidecar file. Inquiry folders already have `_branch.md`, `_state.md`, optional `_branches.md`. Adding `_navig.md` + maybe `routeman.md` + maybe `run_trace.md` increases file count | sub | MED | Trade-off: each file is small but the count grows. |
| 59 | I | Recalibration introduces statefulness: routeman's outputs become time-dependent. Risk of inconsistent reading across sessions if the recalibration history isn't fully captured | sub | MED | Mitigation: explicit revision_history in `_navig.md`. |
| 60 | I | The user's "branch_inquiry adoption" might be interpreted as "use the protocol when sub-routes are inquiries" rather than "use the protocol for every sub-route." Ambiguous in the user's framing | sub | HIGH | Adjudicate: when does a sub-route warrant its own SIC inquiry (branch_inquiry) vs stay as a sub-route in the route map (multi_resolution_navigation child map)? |

### Region J — What's already settled vs what needs further inquiry

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 61 | J | Already-settled (via the staged-mapping adoption inquiry): two modes EXIST and are stage-1 / stage-2 | core | HIGH | Q-latent-1 has an answer; the modes already exist in design. |
| 62 | J | Already-settled (via multi_resolution_navigation protocol): persistent memory exists as `_frontier.md`; recalibration semantics are the protocol's resume mechanism | core | HIGH | Q-latent-2, Q-latent-3, Q-latent-4 have substantial existing answers. The naming and adoption decisions remain. |
| 63 | J | Already-settled (via the persistence-decisions in the user input): file-content split makes structural sense | sub | HIGH | Q-latent-6 has the user's directional answer; needs validation but is not blocked. |
| 64 | J | Needs further inquiry: when to use branch_inquiry vs multi_resolution_navigation's child-map convention | core | HIGH | Q-latent-5 + 12 + Region I-57. Two adjacent expansion mechanisms; the right relationship is open. |
| 65 | J | Needs further inquiry: specific schema for `_navig.md` (multi_resolution_navigation's frontier-candidate-record is a starting point; routeman-specific extensions may be needed) | sub | HIGH | Q-latent-9 + 11. |
| 66 | J | Needs further inquiry: per-inquiry vs central placement of `_navig.md` files | sub | HIGH | Q-latent-2 + Region D-35. |

### Region K — Frontier flags

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 67 | K | FF-1: explicit policy on when routeman should use branch_inquiry (full child inquiry) vs multi_resolution_navigation child map (route-map entry only) | umbrella | HIGH | Open. |
| 68 | K | FF-2: schema for `_navig.md` (how much of multi_resolution_navigation's frontier-candidate-record applies to routeman) | umbrella | HIGH | Open. |
| 69 | K | FF-3: lifecycle policy for `_navig.md` (rewrite, append, or revision-history) | umbrella | MED | Open. |
| 70 | K | FF-4: cross-inquiry aggregation — does routeman ever read `_navig.md` files across MULTIPLE inquiry folders for a project-level Route Map? | umbrella | MED | Open. Adjacent to the "generic mode" question. |
| 71 | K | FF-5: relationship between `_navig.md` and `_state.md` (routeman writes `_navig.md`; inquiry's worker writes `_state.md`; do they ever cross-reference?) | umbrella | MED | Open. |

**Convergence check:** 71 trace entries across 11 regions. The major finding is that **multi_resolution_navigation.md already specifies most of what the user proposes**; the inquiry's work is largely to surface this overlap, map the user's vocabulary to the protocol's, and identify the residual open questions.

## State Summary

### Territory-specification echo

The bounded scope: user's 6+1 topics + 4 routeman-chain prior findings + 2 directly-relevant protocols (`branch_inquiry.md`, `multi_resolution_navigation.md`) + canonical /navigation + `_state.md` convention.

### Purpose-specification echo

Items qualify if they speak to (a) latent question surfacing, (b) protocol-overlap mapping, (c) candidate file-convention or recalibration designs, (d) interactions with existing routeman commitments, (e) naming, or (f) risks of adopting the proposals as stated.

### Coverage map

| Region | Coverage | Aggregate relevance |
|---|---|---|
| A — Latent questions (the meta-task substrate; 12 questions) | confirmed (12 entries) | 7 core + 5 sub |
| B — `multi_resolution_navigation.md` overlap (11 entries) | confirmed | 4 core + 6 sub + 1 side |
| C — `branch_inquiry.md` overlap (6 entries) | confirmed | 2 core + 4 sub |
| D — File-convention candidates (6 entries) | confirmed | 1 core + 4 sub + 1 side |
| E — Recalibration semantics (5 entries) | confirmed | 2 core + 3 sub |
| F — Two-modes characterization (5 entries) | confirmed | 3 core + 2 sub |
| G — Interactions with routeman commitments (6 entries) | confirmed | 2 core + 4 sub |
| H — Naming (4 entries) | confirmed | 0 core + 3 sub + 1 side |
| I — Risks (5 entries) | confirmed | 2 core + 3 sub |
| J — Settled vs needs-further (6 entries) | confirmed | 3 core + 3 sub |
| K — Frontier flags (5 entries) | confirmed | 5 umbrella |

Total: 71 entries (26 core + 35 sub + 5 side + 5 umbrella).

### Confirmed-absent regions

None — every region traversed yielded items.

### Concept-names list

- `generic mode` / `directional mode` — coined-term, from user input, "the two routeman invocation modes: generic = enumerate all directions from the codebase; directional = expand sub-routes under a selected parent."
- `_navig.md` — user-proposed-term, "persistent-memory sidecar file per inquiry folder for routeman state, analogous to `_state.md`."
- `routeman.md` — user-proposed-term, "the file holding actual route enumerations (the Route Map content), separated from `_navig.md` for content-vs-metadata separation."
- `recalibration` — coined-term, from user input, "the cross-invocation operation that reads prior persistent-memory files + updates existing directions' importance/goal + optionally decomposes or creates new directions."
- `_frontier.md` — existing-protocol-term, from `multi_resolution_navigation.md`, "the durable control sidecar that records every expansion candidate, its status, and why it was or was not expanded." Functionally overlaps with user's `_navig.md`.
- `navigation.md` (in protocol context) — existing-protocol-term, "the file storing the parent navigation map." Functionally overlaps with user's `routeman.md`.
- `frontier candidate record` — existing-protocol-term, "the schema per expansion candidate (candidate_id, parent_map, parent_route, route_type, priority, status, expansion_reason, eligibility, eligibility_reason, scheduling_reason, child_map_path, blocked_by, continuation_note)."
- `coverage mode` — existing-protocol-term, "exhaustive vs budgeted vs sampled." Operational granularity beyond user's two-modes framing.
- `branch inquiry` — existing-protocol-term, "a child INQUIRY (with its own SIC pipeline) created under a parent inquiry; distinct from a sub-route in a route map."
- `structural mismatch (branch_inquiry vs sub-routes)` — coined-term, this surfacing, "sub-routes are not inquiries that run SIC; adopting branch_inquiry forces them to be inquiries; multi_resolution_navigation's child-map convention is structurally closer."
- `protocol overlap` — coined-term, this surfacing, "the major finding that the user's proposals largely duplicate `multi_resolution_navigation.md`; the inquiry's primary work is mapping + adjudicating naming/adoption rather than designing from scratch."

### Frontier flags

- **FF-1** — branch_inquiry vs multi_resolution_navigation's child-map convention: when does routeman use which?
- **FF-2** — `_navig.md` schema: what subset of `multi_resolution_navigation`'s frontier-candidate-record applies to routeman?
- **FF-3** — `_navig.md` lifecycle policy: rewrite per invocation, append, or carry revision-history?
- **FF-4** — Cross-inquiry aggregation: does routeman ever read `_navig.md` across multiple inquiry folders for a project-level Route Map?
- **FF-5** — Relationship between `_navig.md` and `_state.md`: do they cross-reference?

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-24T00:20
extent:
  in-context-files-fully-loaded:
    - cognitive_harness/protocols/branch_inquiry.md (just-loaded; full)
    - cognitive_harness/protocols/multi_resolution_navigation.md (just-loaded; full)
  in-context-files-via-prior-session-loading:
    - devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md
    - devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md
    - devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md
    - devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md
    - cognitive_harness/navigation/references/navigation.md
  frontier-files-not-loaded:
    - cognitive_harness/protocols/artifact_materialization.md (adjacent; FF-N not triggered)
    - cognitive_harness/protocols/resume.md (adjacent; might inform recalibration semantics; not loaded since multi_resolution_navigation has resume specifics)
```

## Telemetry

- **Mode:** `artifact-dominant`. **Entry point:** `signal-first`.
- **Cycles run:** 1.
- **Items enumerated:** 71 trace entries across 11 regions.
- **Items tagged at each relevance level:** core = 26; sub = 35; side = 5; umbrella = 5.
- **Sub-phase fired:** no.
- **Convergence criteria status:** territory exhaustively traversed; the multi_resolution_navigation protocol's pre-existence was the central discovery and is well-covered.
- **Workspace-overload trigger:** not fired.
- **Failure modes checked (LAYER 1):** Missed-relevance (mitigated by 11-region sweep + protocol-reading); Surfaced-irrelevance (5 side items kept with reasons); Over-coverage (mitigated by core/sub split); Territory-mis-binding (none); Workspace overload (not fired); Artifact under-specification (per-trace tags captured); Workspace-artifact desync (capture-at-moment applied).
- **Failure modes checked (LAYER 2):** Interpretive-overstep (items are candidate questions / mappings / risks, not cross-piece interpretive structure); Purpose-loss (purpose explicit); Self-coupling-to-downstream (avoided — surfacing flags the protocol-overlap; doesn't pre-recommend full adoption; sensemaking adjudicates).
- **Self-assessment verdict:** **PROCEED with FLAG.** 5 frontier flags for downstream + 1 major load-bearing finding (protocol-overlap: `multi_resolution_navigation.md` already specifies most of what the user proposes — sensemaking must adjudicate adopt-protocol vs rename-and-adopt vs design-from-scratch).
