---
status: active
model: claude-opus-4-7[1m]
effort: max
synthesizes:
  - devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md
  - devdocs/inquiries/2026-05-27_13-23__routeman_per_route_schema_refinement/finding.md
  - devdocs/inquiries/2026-05-27_14-03__routeman_simplification_endgoal_compatibility/finding.md
  - devdocs/inquiries/2026-05-27_14-49__routeman_directional_input_read_policy/finding.md
---
# Finding: Consolidated structural amendment plan for `cognitive_harness/routeman/references/routeman.md` — landing the 4 prior routeman inquiries' commitments + 6 inter-section coherence-residue rows in one section-keyed delta with 3-pass landing-order

## Question

(from `_branch.md`)

**Stated question:** What structural changes must be made to `cognitive_harness/routeman/references/routeman.md` to (1) remove residual context-poison inheritance from `non-active/` legacy sources, AND (2) land all prior 4 inquiries' output-handling commitments + any output-handling residue not covered by those priors, as ONE consolidated comprehensive amendment plan?

**Layer Commitment:** STRUCTURAL (the live spec is the artifact being amended).

**Synthesis Trigger:** Active. Four prior `finding.md` files are inputs whose commitments this inquiry consolidates without re-litigation:

- `devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md` — committed the broadest output-shape redesign (4-layer model α/β/γ/δ; `routeman.md` + `_route.md` two-file structure; β-layer minimization; γ-field REPAIR; 5-6 metric telemetry; routeman-native names).
- `devdocs/inquiries/2026-05-27_13-23__routeman_per_route_schema_refinement/finding.md` — refined the per-Route schema: RESTORED Movement + Unlocks; CUT Purpose + Continuation Note; reduced 4-axis content distinction to 2-axis.
- `devdocs/inquiries/2026-05-27_14-03__routeman_simplification_endgoal_compatibility/finding.md` — verified end-goal architecture compatibility; identified 2 bounded follow-ups (nav-session aggregation output design; meta-loop runtime design).
- `devdocs/inquiries/2026-05-27_14-49__routeman_directional_input_read_policy/finding.md` — committed directional-mode read policy: `routeman.md` MANDATORY-WHEN-AVAILABLE; `_route.md` SHOULD; 4-tier read-policy vocabulary; graceful-degrade default.

**Goal:** Produce ONE consolidated section-keyed amendment delta against the live spec that (a) consolidates rather than re-litigates the priors' commitments; (b) identifies context-poison residue with provenance; (c) honestly identifies gaps not covered by priors; (d) gives a landing-order that prevents intermediate-state incoherence.

## Finding Summary

- **The deliverable is a 31-row section-keyed flat amendment delta** with four row-types (ACTIVE / NO-OP CONFIRM / RESIDUE / SUPERSEDED-NO-OP) and a 3-pass landing-order (CUT → ADD → REPAIR). The delta targets ~13 sections of `cognitive_harness/routeman/references/routeman.md` (the live discipline spec). Application is bounded; a patch applicator can execute Pass 1, Pass 2, Pass 3 in sequence and produce a coherent post-amendment spec.

- **The surprise the inquiry surfaced:** the live spec (mtime 2026-05-25) is OLDER than all four prior inquiries (mtimes 2026-05-27). NONE of the priors' commitments has landed yet. AND the worst legacy protocol-DNA (the "β-layer" content from `cognitive_harness/non-active/multi_resolution_navigation.md` — coverage modes, frontier-candidate-record fields, `batch_size`, `expansion_policy`, `scheduling_policy`) NEVER made it into the live spec at all (verified via grep). The "context poison" observation target therefore reframes: most legacy poison was arrested at the finding-stage by the 00-51 inquiry's β-layer-minimization commitments — it never propagated to live spec text. Spec-text-layer cleanup is the field-level remnants (Purpose, Continuation Note) plus six inter-section coherence ripples this inquiry identifies for the first time.

- **Of the 22 prior MUST/amendment rows, the consolidated delta classifies:**
  - **18 ACTIVE rows** (rows that change the live spec): 4 from 13-23 (Purpose / Continuation Note / Continuation Memory group cuts + "5 purpose-groups" prose update), 7 from 00-51 (parameter cleanups at §3.1/§3.2/§3.5; §2.4 chain reference update; §5.6 telemetry trim; §5.8 `_route.md` description ADD; γ-field REPAIR rule + LAYER-2 audit mode), 6 from 14-49 (4-tier read-policy vocabulary; graceful-degrade default; routeman.md MANDATORY-WHEN-AVAILABLE rule; `_route.md` SHOULD rule; stage-2 input note; §3.5 cross-reference), plus 1 ACTIVE amendment to Unlocks's content-axis description from 13-23 REVISED-2.
  - **5 NO-OP CONFIRM rows** (prior commitment already satisfied by the live spec): 00-51's 7-status enum (live spec already at 7); 00-51's alias drop (`_navig.md`/`_frontier.md` not present); 00-51's wrapper REPAIR (live §5.5 already matches); 13-23's Movement RESTORE (field already present); 13-23's Unlocks RESTORE base (field already present; only content-axis amendment is ACTIVE).
  - **1 SUPERSEDED-NO-OP row** (prior commitment targets an artifact never present in live spec): 13-23 NEW-5's 4-axis-to-2-axis reduction — the 4-axis content distinction table from the 2026-05-23 18-58 inquiry never landed in live spec, so there is no table to reduce.
  - **6 RESIDUE rows** (inter-section coherence ripples not in any prior's delta list): §1.4 vocabulary entry cleanup; §2.4 Adaptive-Guidance prose cleanup; §3.4 Assembly bullet group-list update; §4.2 LAYER 1 failure mode #5 field-list update; §5 Output prologue dual-file framing acknowledgment; "NOW SOLID INSTRUCTIONS START" section parameter-name mirror updates. Each RESIDUE row has an explicit cross-section dependency annotation (which ACTIVE edit triggers the ripple).

- **The 3-pass landing-order is CUT → ADD → REPAIR.** Pass 1 removes fields and stale references; Pass 2 adds new sections, sub-sections, and rules; Pass 3 repairs cross-section coherence and prose mirror updates. The order prevents intermediate states where new content references about-to-be-removed fields, or removed content leaves orphaned references. Within Pass 1, order ROOT-FIRST (cut the §5.4 schema fields first, then propagate vocab/prose/Assembly/failure-mode cleanups). Within Pass 2, order BY DEPENDENCY (§3.2 substrate first; then §3.2 per-file rules; then §5.8 description; then the γ-field REPAIR rule + LAYER-2 mode; then §3.3 stage-2 note). Pass 3 has no intra-pass ordering requirement (each repair is independent of other repairs in the same pass).

- **The §3.2 + §3.5 cross-amendment overlap is ADDITIVE COMPOSITION, not conflict.** Two priors — 00-51 (which simplifies the protocol-derived parameters) and 14-49 (which adds 4-tier read-policy vocabulary + per-file rules + failure default) — both touch §3.2 Reception and §3.5 Re-invocation. The merged end-state is the UNION of both amendments. The merged §3.2 contains: simplified parameter set (from 00-51) + the 4-tier read-policy vocabulary + the graceful-degrade default + the routeman.md MANDATORY-WHEN-AVAILABLE rule + the `_route.md` SHOULD rule (all from 14-49). No adjudication required; both amendments compose.

- **Bounded out-of-scope items are preserved as Open Questions, not in the delta.** The 14-03 finding identified two follow-up inquiries (nav-session aggregation output design; meta-loop runtime design); both are flagged DEFERRED. The institutional-memory file (`docs/discipline_design_history/for_routeman.md`) is flagged COULD per the user's `Disciplines self-contained` memory feedback (the spec stays self-contained; the institutional memory is a separate artifact). Cross-discipline read-policy vocabulary unification (per 14-49's flag) and the project-canonical "consolidated amendment plan" pattern (this inquiry's own meta-observation at N=1) are flagged as Research Frontiers.

- **The deliverable is application-ready.** Each row has concrete-enough-to-apply edit text (specific spec section + specific edit content). Coverage map verifies 22 prior MUST rows map to 31 consolidated rows with ZERO drops. Post-application audit checkpoint (re-read the spec end-to-end; verify internal consistency) is flagged as Open Question (OQ6) for the applicator.

- **Honest framing of "context poison":** the user named context-poison as a primary observation target. The honest answer is that most poison was arrested before it landed in the live spec — by the 00-51 inquiry's β-layer minimization commitments, even though those commitments themselves haven't been applied. Spec-text-layer cleanup is the field-level remnants plus the inter-section coherence ripples this inquiry identified. The reframing is more useful than fabricating poison-rows for items already absent from the live spec.

## Finding

### Surrounding context — why this inquiry, why now

`/routeman` is the project's Boundary discipline — the one cognitive discipline that operates between cognitive cycles, enumerating possible next moves from a current state toward a goal. It is the only Boundary discipline currently shipped (per `docs/canon/thinking_disciplines/anatomy/discipline_taxonomy.md`). The runtime spec lives at `cognitive_harness/routeman/references/routeman.md` and is read at session-start by every `/routeman` invocation.

Over four hours on 2026-05-27, four inquiries refined commitments about routeman's output shape, schema, end-goal compatibility, and runtime read-policy. Each produced a `finding.md` with MUST or amendment rows naming spec edits. None of those edits landed in the live spec text. The user's invocation of `/MVLw` for THIS inquiry asks for the four to be consolidated into one coordinated application patch + for any context-poison residue to be identified and cleaned.

The motivating concern that started the routeman-related inquiry chain (recorded in `devdocs/routeman_releted/problem.md`) was that routeman's discipline-creation in 2026-05-23 absorbed legacy material from `cognitive_harness/non-active/` — particularly `multi_resolution_navigation.md` (a standalone protocol for navigation-frontier preservation) — as "context poison" that may have shaped routeman's design beyond what's actually load-bearing. The four prior inquiries addressed pieces of this concern; THIS inquiry consolidates them and audits residual poison.

### The honest reframing of "context poison" at the spec-text layer

The user's framing implies the live spec contains substantial legacy machinery to remove. The surfacing step's grep verification surfaced a surprise: the worst legacy protocol DNA — specifically the 10-status status enum, the 13-field Frontier Candidate Record, coverage modes (`exhaustive` / `budgeted` / `sampled`), the `batch_size` / `expansion_policy` / `scheduling_policy` parameters, and the `_frontier.md` / `_navig.md` aliases — is ABSENT from the live routeman spec. The 24-00 inquiry that originally adopted this protocol committed to it in that finding's reasoning, but the commitments never propagated into the live spec text.

The result is that several of the priors' delta-rows are NO-OP confirmations against the live spec:

- 00-51 row 3 said "reduce Status enum from 10 to 7." Live §1.4 line 55 already lists 7 reachability values. NO-OP confirmed.
- 00-51 row 4 said "drop the protocol-alias commitment from §1.4." No `_navig.md` / `_frontier.md` references exist in live spec. NO-OP confirmed.
- 00-51 row 5 said "Replace §5.5 Route Map wrapper protocol heavy-machinery." Live §5.5 already lists exactly the four fields the recommendation calls for (Map Header / Route Index / Excluded Section / Telemetry Block). NO-OP confirmed.
- 13-23 NEW-5 said "Reduce 4-axis content distinction table to 2-axis prose note." The 4-axis table (originally committed by the 2026-05-23 18-58 inquiry to live in §5.4) never landed in the live spec. SUPERSEDED-NO-OP — the target artifact is absent, so the reduction is structurally inapplicable.

This does not invalidate the priors. Their commitments stand as the project's design history. But the residual cleanup at the spec-text layer is smaller than the original framing suggested. The real cleanup work is:

1. Field-level remnants in §5.4: Purpose, Continuation Note, and the Continuation Memory group-header (all from 13-23's NEW-1/2/3 cuts).
2. Inter-section coherence ripples in §1.4 vocabulary, §2.4 Adaptive-Guidance prose, §3.4 Assembly bullet, §4.2 LAYER 1 failure mode #5, §5 Output prologue, and the "NOW SOLID INSTRUCTIONS START" operational-instructions section. These ripples are this inquiry's distinctive identifications — they are not in any prior's delta list, but each is necessary because an ACTIVE edit from a prior creates a cross-section reference inconsistency if its ripple is not also fixed.
3. The unapplied prior commitments themselves: the new sub-sections at §3.2 (read-policy vocabulary, graceful-degrade default, per-file rules), the new §5.8 (`_route.md` description), the γ-field REPAIR writing rule plus the corresponding new LAYER-2 audit mode, the §5.6 telemetry trim, and the §3.3 stage-2 input acquisition note.

The honest answer to "clean context poison" is therefore: the cleanup is the consolidated delta itself plus the residue rows — there is no separate poison hiding in the spec text beyond what's listed.

### The consolidated amendment delta

This is the deliverable proper. The delta is rendered in 3-pass landing-order (the application-most-useful rendering). Each row has 8 columns: ordinal / spec section / action / status / provenance / edit description / cross-section dependency (RESIDUE only) / landing-pass.

For column abbreviations: ACT = ACTIVE; NCO = NO-OP CONFIRM; RES = RESIDUE; SNO = SUPERSEDED-NO-OP. Within Pass 1 and Pass 2, sub-order matters (see the "intra-pass ordering" rules below).

#### Pass 1 — CUT (remove fields, vocab entries, stale references, telemetry metrics)

**Intra-pass order:** root-first — cut the §5.4 schema fields first (the root cause of multiple ripples), then propagate the inter-section vocab/prose/Assembly/failure-mode cleanups. The §5.6 telemetry trim is independent.

| # | Spec section | Action | Status | Provenance | Edit description | Landing-pass |
|---|---|---|---|---|---|---|
| 1 | §5.4 (Route Meaning group) | REMOVE | ACT | 13-23 NEW-1 | In the §5.4 per-Route entry schema table, REMOVE the row whose Group=Route Meaning, Field=Purpose, Content="What this route would serve, reveal, or unlock." | 1 |
| 2 | §5.4 (Continuation Memory group) | REMOVE | ACT | 13-23 NEW-2 | In the §5.4 per-Route entry schema table, REMOVE the row whose Group=Continuation Memory, Field=Continuation Note, Content="What a future agent resuming this route should remember about it." | 1 |
| 3 | §5.4 (group structure) | REMOVE | ACT | 13-23 NEW-3 | In the §5.4 per-Route entry schema table, REMOVE the group-header row "Continuation Memory" (empty after row #2). The schema becomes a 5-group structure (Route Identity + Route Meaning + Route State + Reasoning + Adaptive Guidance). | 1 |
| 4 | §1.4 (Vocabulary) | REMOVE | RES | this-inquiry-residue | In the §1.4 Vocabulary table, REMOVE the row "continuation note \| Per-route memory hint — what a future agent resuming this route should remember about it." (line 60 of live spec). Cross-section dependency: depends on row #2 (cut Continuation Note from §5.4). | 1 |
| 5 | §5.6 (Telemetry) | REPAIR (reduce-only) | ACT | 00-51 row 8 | In §5.6 Telemetry bullet list, REMOVE the bullets: "Cycles run; routes enumerated" (relocates to `_route.md` Last Invocation per §5.8), "Cross-cycle revisitations (per sub-action: RESURRECT / INVALIDATE / REVERT counts)" (collapsed into per-Route Status updates), "Autonomy partition (auto-derivable count vs judgment-required count)" (delegated to inquiry's autonomy register), "Excluded type count + reasoning-non-trivial check" (redundant with Excluded Section count by inspection), and "Convergence trigger fired (yes/no; which signal)" (operational; relocates to `_route.md`). KEEP 7 essential metrics: Entry mode + goal-type / Per-Family balance / Per-type distribution / Reachability distribution (per-status counts) / Guidance mode allocation / Failure modes checked / Self-assessment verdict. | 1 |

#### Pass 2 — ADD (new sections, sub-sections, vocabulary, rules)

**Intra-pass order:** by dependency — §3.2 substrate (vocabulary + graceful-degrade) before §3.2 per-file rules; §5.8 ADD references §3.2's read-policy; γ-field REPAIR rule + LAYER-2 mode independent; §3.3 stage-2 note independent.

| # | Spec section | Action | Status | Provenance | Edit description | Landing-pass |
|---|---|---|---|---|---|---|
| 6 | §3.2 (Reception) — new sub-section after current content | ADD-CONTENT | ACT | 14-49 row 1 | ADD sub-section "Read-Policy Vocabulary": "Routeman uses a 4-tier vocabulary for grading input-read commitments at Reception. The vocabulary is RFC 2119-adjacent (MUST/SHOULD/MAY) with one project-coined refinement (MANDATORY-WHEN-AVAILABLE). **MANDATORY** — the input MUST be successfully read; HALT with `MissingRequiredInput` if absent or unreadable. **MANDATORY-WHEN-AVAILABLE** (project-coined) — the input MUST be read when the file exists; FLAG and proceed when the file is absent; HALT only when present-but-malformed-AND-needed. **SHOULD** — routeman attempts to read by default; any read failure FLAGs telemetry and proceeds without. **MAY** — the caller supplies the input as an explicit parameter; routeman does not autonomously seek the input." | 2 |
| 7 | §3.2 (Reception) — adjacent to row #6 | ADD-CONTENT | ACT | 14-49 row 2 | ADD sub-section "Read-Failure Default": "Across all tiers above MANDATORY, the default failure mode is FLAG + proceed-without. HALT fires only when strictly-required structural content is missing (MANDATORY at any state; MANDATORY-WHEN-AVAILABLE when present-but-malformed-AND-needed). This default preserves discipline operability across (a) fresh inquiries where prior files don't exist yet, (b) schema-version drift where older files may not parse, (c) inaccessible files (e.g., permission errors that aren't routeman's concern to resolve)." | 2 |
| 8 | §3.2 (Reception) — adjacent to rows #6-7 | ADD-CONTENT | ACT | 14-49 row 3 | ADD sub-section "Reading prior `routeman.md` in directional mode": Policy MANDATORY-WHEN-AVAILABLE. When `/routeman` is invoked toward a direction (stage-2 sub-route expansion per §3.3), the invocation must acquire the parent-route entry from the parent inquiry's `routeman.md`. Failure handling per state: **Absent** (first directional invocation on a parent route not enumerated elsewhere) → FLAG `MissingParentRouteFile`; if caller supplies parent route info inline (Direction + Goal + Movement Type minimum), proceed; otherwise HALT with `MissingRequiredInput`. **Present-but-malformed AND parent-route entry needed** → HALT with `MalformedRequiredInput`. **Present-but-malformed but parent-route entry intact** → FLAG and proceed. **Present-and-stale** → proceed with FLAG noting staleness. | 2 |
| 9 | §3.2 (Reception) — adjacent to rows #6-8 | ADD-CONTENT | ACT | 14-49 row 4 | ADD sub-section "Reading prior `_route.md` in directional mode": Policy SHOULD. Reading the parent inquiry's `_route.md` provides three value-additions: orchestration awareness (which prior directional-mode invocations have expanded sub-routes under the same parent); staleness detection (how recently the parent route was enumerated); cross-invocation history feed (Predictive-vs-Retrospective comparison enabling quality-assessment patterns). All three are value-adding; none is operationally required — sub-route enumeration can complete from `routeman.md` alone. Failure handling: FLAG and proceed-without on absence, malformation, or inaccessibility. Staleness is itself a signal worth surfacing. | 2 |
| 10 | §5 — new sub-section §5.8 after §5.7 | ADD-CONTENT | ACT | 00-51 row 6 | ADD new sub-section §5.8 "The `_route.md` invocation-state file": "Routeman's secondary persistent artifact is `_route.md`, saved alongside `routeman.md` in the inquiry folder. The file captures invocation state — distinct from the route-content in `routeman.md`. The artifact has three sections: **Last Invocation** (timestamp ISO8601 UTC + inquiry path + invocation mode `fresh-state` / `prior-map-extending`; one block per file, overwritten on each new invocation); **Prior Invocations** (chronological list, one entry per prior run: timestamp + brief summary of mode-used / routes-added-count / routes-status-updated-count / key cross-cycle revisitations; append-only across invocations); **History** (chronological event log; append-only; records cross-invocation events such as a Status update on a Route, a REVISIT sub-action firing, a frontier flag resolution; each entry has timestamp + event-type + brief context). Read-policy for `_route.md` in directional mode is SHOULD per §3.2. The file's purpose is cross-invocation continuity: it enables (a) read-prior — Reception reads `_route.md` to acquire prior invocation context, (b) recalibrate — Enumeration cross-references `routeman.md`'s per-Route Status field against `_route.md`'s History entries to detect staleness, (c) add-new — Assembly appends new Prior Invocation + History entries before saving." | 2 |
| 11 | §5.4 (Reasoning group, `why-this-might-be-important` entry) + §4.3 (LAYER 2 failure modes) | ADD-CONTENT (writing rule + new failure mode) | ACT | 00-51 row 9 (γ-field REPAIR) | (a) In §5.4, after the existing `why-this-might-be-important` field row, ADD a writing-rule note: "Writing rule for `why-this-might-be-important`: the field is constrained by REPAIR-shape rules. (i) 1-sentence cap; (ii) MUST anchor in specific cycle-content (e.g., 'critique's KILL seed on X explicitly asks how to make Y work'; 'decomposition's piece-3 unresolved interface to Z'); generic filler ('this seems important'; 'this might be useful') FAILS THE SPEC RULE; (iii) when no cycle-content anchor exists, the field is OMITTED for that route (the field is contingent — not all routes carry it)." (b) In §4.3 LAYER-2 failure modes, ADD a 4th entry: "**Filler-meta-reasoning** \| The `why-this-might-be-important` field is populated across routes but the content is generic filler not anchored in specific cycle content; the field's audit-substrate value collapses \| Violates the writing rule (§5.4 REPAIR constraint). Drives empirical-evidence-gated revival of the cut alternative." | 2 |
| 12 | §3.3 (Enumeration-attributed Traversal) — clarifying note appended after the components list | ADD-CONTENT | ACT | 14-49 row 5 | ADD note: "Note on stage-2 input acquisition. When routeman is invoked toward a direction (stage-2 sub-route expansion), the stage-2 input contract names `parent-route-id` + `file-paths-in-scope` + optional `refined-sub-purpose`. The operational mechanic for acquiring `parent-route-id`: the caller indicates WHICH route in WHICH parent inquiry is being expanded; routeman reads the parent inquiry's `routeman.md` per the MANDATORY-WHEN-AVAILABLE policy in §3.2 to extract the parent route's full entry. The stage-2 input contract is preserved; this note makes the implicit acquisition mechanic explicit." | 2 |

#### Pass 3 — REPAIR (inter-section coherence + mirror updates + cross-references)

**Intra-pass order:** none required — each repair is independent of other repairs in the same pass.

| # | Spec section | Action | Status | Provenance | Edit description | Landing-pass |
|---|---|---|---|---|---|---|
| 13 | §5.4 (Unlocks row, Content column) | REPAIR | ACT | 13-23 REVISED-2 (content-axis amendment) | In §5.4 schema table's Unlocks row, REPAIR Content from "Downstream routes / checks / decisions / artifacts; `unknown` when unclear" to: "Downstream routes / checks / decisions / artifacts that this route's completion makes available; broader than hard-blocking — includes graduated-beneficiary relationships as well as binary-blocking-removal. Use `unknown` when downstream effects are unclear." | 3 |
| 14 | §3.1 (three-phase shape diagram, line 191 of live spec) | REPAIR | ACT | 00-51 row 7 (diagram form) | In §3.1's three-phase shape ASCII diagram, REPLACE the Reception input list "Receive current state + goal/subgoal + optional prior route map + optional refined-sub-goal" with: "Receive current state + goal/subgoal + optional reference to `_route.md` for prior invocation state + optional `refined-sub-goal` (directional-mode invocations)." (Refinement caveat from Critique: `refined-sub-goal` is explicitly preserved.) | 3 |
| 15 | §3.2 (Reception, lines 205-212 of live spec) | REPAIR | ACT | 00-51 row 7 (prose form) | In §3.2 Reception's "Optional re-invocation parameters" bullet, REPLACE "`prior route map` (always available across invocations when persisted); `refined-sub-goal` (a narrower goal for this re-invocation)" with: "Cross-invocation context loaded via `_route.md`'s Prior Invocations + Last Invocation sections (per §5.8); optional `refined-sub-goal` (a narrower goal for this re-invocation, when re-invoking under a stage-2 directional context per §3.3)." Update the prose "Reception initializes the workspace (loading state + goal + prior map if present)" → "Reception initializes the workspace (loading state + goal + the prior invocation's `_route.md` state if present per §5.8)." | 3 |
| 16 | §3.5 (Re-invocation, lines 243-248 of live spec) | REPAIR | ACT | 00-51 row 7 (§3.5 form) | In §3.5 Re-invocation, REPLACE the bullet describing `prior route map` ("when available across invocations, the prior map is incorporated at Reception. Enumeration may resurrect / invalidate / revert prior routes via the REVISIT sub-actions; routes whose state-condition hasn't changed may be carried forward unchanged.") with: "When `_route.md` records prior invocations (per §5.8), Reception loads the prior `routeman.md` content per the read-policy in §3.2. Enumeration may resurrect / invalidate / revert prior routes via the REVISIT sub-actions (per §2.2 Coordination Family); routes whose state-condition hasn't changed may be carried forward unchanged." The `refined-sub-goal` bullet stays. | 3 |
| 17 | §3.5 (Re-invocation, end of section) | ADD-CONTENT (one-line cross-reference) | ACT | 14-49 row 6 | At the end of §3.5, ADD a one-line cross-reference: "For input-read policy on prior `routeman.md` + `_route.md` files during re-invocation, see §3.2 (Read-Policy Vocabulary + per-file rules)." | 3 |
| 18 | §2.4 (Adaptive-guidance mechanism, Stage 1 chain prose near line 147) | REPAIR | ACT | 00-51 row 9 (chain reference update) | In §2.4 Stage 1's per-movement-type chain description, REPAIR the clause "REVISIT draws from prior-cycle verdicts" to: "REVISIT draws from prior-cycle verdicts captured in `_route.md`'s History section (per §5.8) AND the prior `routeman.md`'s per-Route Status updates." Other chain entries unchanged. | 3 |
| 19 | §5.4 (introductory prose preceding the schema table) | REPAIR | ACT | 13-23 NEW-4 | If §5.4's introductory prose contains an explicit reference to the schema's purpose-group count, REPAIR to "5 purpose-groups" (was 6). Verification: read §5.4 after Pass 1 cuts; if no explicit count prose remains, this row becomes NO-OP at application time. (The schema table's structure already conveys the 5-group count visually after Pass 1.) | 3 |
| 20 | §2.4 (Adaptive-guidance mechanism, Guidance Mode `none` description near line 153) | REPAIR | RES | this-inquiry-residue | In §2.4's Guidance Mode allocation list, REPAIR the description of mode `none` from "zero pointers. WHY field + Continuation Note sufficient. Used for LOW-priority routes or deferred routes preserved for memory." to: "zero pointers. WHY field alone is sufficient. Used for LOW-priority routes or deferred routes preserved for memory." Cross-section dependency: depends on row #2 (cut Continuation Note from §5.4). | 3 |
| 21 | §3.4 (Assembly, line 235 of live spec) | REPAIR | RES | this-inquiry-residue | In §3.4 Assembly description, REPAIR the bullet "Per-route entries finalized (Route Identity + Route State + Route Meaning + Reasoning + Adaptive Guidance + Continuation Memory)." to: "Per-route entries finalized (Route Identity + Route Meaning + Route State + Reasoning + Adaptive Guidance)." (5 groups; ordered consistent with §5.4's table ordering after Pass 1.) Cross-section dependency: depends on row #3 (cut Continuation Memory group-header). | 3 |
| 22 | §4.2 (LAYER 1 failure mode #5 "Route State Omission", line 273 of live spec) | REPAIR | RES | this-inquiry-residue | In §4.2 failure mode #5 Recognition column, REPAIR the field list "Routes listed without Direction, Goal, Movement Type, Priority, Status, Blocked-By, or Continuation Note" to: "Routes listed without Direction, Goal, Movement Type, Movement, Unlocks, Priority, Status, or Blocked By." (Adds Movement + Unlocks to the canonical missing-field check; removes Continuation Note.) Cross-section dependency: depends on row #2 (cut Continuation Note); aligned with the Movement + Unlocks RESTORE confirmations (rows #25 + #26 below). | 3 |
| 23 | §5 (Output prologue, §5.1 description at lines 338-344) | REPAIR | RES | this-inquiry-residue | In §5.1's work-products description, REPAIR the framing to acknowledge `_route.md` as part of the artifact set. Current bullet (b) "The Route Map artifact (§5.3) — the navigation/handoff product; persistent; per-route entries with metadata + wrapper fields. Carries the per-route content needed for downstream selection." → REPAIR to: "The Route Map artifact (§5.3) — the navigation/handoff product; persistent; per-route entries with metadata + wrapper fields. Carries the per-route content needed for downstream selection. Saved as `routeman.md`." Then ADD bullet (c): "The invocation-state artifact (§5.8) — `_route.md`; persistent; records cross-invocation state (Last Invocation + Prior Invocations + History). Saved alongside `routeman.md` in the inquiry folder." Update the §5.1 introductory line "Routeman produces TWO work-products" → "Routeman produces TWO PERSISTENT ARTIFACTS plus the workspace work-product." Cross-section dependency: depends on row #10 (ADD §5.8). | 3 |
| 24 | "NOW SOLID INSTRUCTIONS START" section (lines 421+) | REPAIR | RES | this-inquiry-residue | The operational instructions reference `prior route map` at lines 427, 429, 433. After rows #14-#16 land the parameter cleanup in §3.1 + §3.2 + §3.5, REPAIR each occurrence: **Line 427** "Determine the entry-point (`fresh-state` if no prior route map exists for this state+goal; `prior-map-extending` if a prior route map is available and the operation should incorporate it)" → "Determine the entry-point (`fresh-state` if no prior `_route.md` exists for this inquiry; `prior-map-extending` if `_route.md` exists with Prior Invocations entries per §5.8 and the operation should incorporate them)." **Line 429** "Receive: the `current state` (required; artifacts and verdicts from prior cognitive work); the `goal` or `subgoal` (required; the directional anchor); optional `prior route map` (when available across invocations); optional `refined-sub-goal` (when re-invoking with a narrower focus)" → "Receive: the `current state` (required); the `goal` or `subgoal` (required); cross-invocation context loaded via `_route.md` per §5.8 when present (read-policy per §3.2); optional `refined-sub-goal` (when re-invoking with a narrower focus)." **Line 433** "Reception (once): initialize workspace with `current state` + `goal` + optional `prior route map`. Prepare for Enumeration." → "Reception (once): initialize workspace with `current state` + `goal` + the prior invocation's `_route.md` state if present (per §5.8 and §3.2 read-policy). Prepare for Enumeration." Cross-section dependency: depends on rows #6-#9 (§3.2 read-policy additions) + rows #10 (§5.8 ADD) + #14-#16 (§3.1 + §3.2 + §3.5 parameter cleanups). | 3 |

#### NO-OP CONFIRM rows (audit-completeness; no edit required)

| # | Spec section | Action | Status | Provenance | Edit description | Landing-pass |
|---|---|---|---|---|---|---|
| 25 | §1.4 (reachability vocabulary entry) | NO-OP | NCO | 00-51 row 3 | VERIFIED: §1.4 line 55 already lists 7 reachability values "open / blocked / deferred / active / done / stale / superseded." The 3 protocol-derived statuses (queued / scheduled / expanded) from `multi_resolution_navigation.md` are ABSENT. | n/a |
| 26 | (live spec body, all sections) | NO-OP | NCO | 00-51 row 4 | VERIFIED via grep over `cognitive_harness/routeman/references/routeman.md` for tokens `_navig`, `_frontier`, `navig.md`: NONE present. Routeman-native names already in use throughout. | n/a |
| 27 | §5.5 (Route Map wrapper) | NO-OP | NCO | 00-51 row 5 | VERIFIED: §5.5 (lines 384-391) lists exactly four wrapper fields (Map Header / Route Index / Excluded Section / Telemetry Block). No protocol-internal control fields (frontier-candidate-record, coverage modes, batch_size, expansion_policy, scheduling_policy) present. | n/a |
| 28 | §5.4 (Route Meaning group, Movement row) | NO-OP | NCO | 13-23 REVISED-1 | VERIFIED: §5.4 line 372 has the Movement field with Group=Route Meaning, Content="Descriptive transition: current state → target state." Field is present; matches 13-23's restoration verdict verbatim. | n/a |
| 29 | §5.4 (Route Meaning group, Unlocks row — presence only) | NO-OP | NCO | 13-23 REVISED-2 (base) | VERIFIED: §5.4 line 373 has the Unlocks field with Group=Route Meaning. Field is present. Content axis is amended by ACTIVE row #13 to reflect the broader graduated-beneficiary axis. | n/a |

#### SUPERSEDED-NO-OP row

| # | Spec section | Action | Status | Provenance | Edit description | Landing-pass |
|---|---|---|---|---|---|---|
| 30 | §5.4 (would-have-been-location for 4-axis content distinction table) | SUPERSEDED | SNO | 13-23 NEW-5 | VERIFIED via grep over the live spec for "4-axis" / "four-axis" / the field-list "Purpose / WHY / Continuation Note / why_this_might_be_important": NONE present. The 4-axis content distinction table from the 2026-05-23 18-58 inquiry's §4 was a commitment in that finding but never landed in the live spec text. The 13-23 NEW-5 reduction-to-2-axis-prose-note has no target artifact to reduce. Forward-consideration: if a future inquiry restores any of the fields cut by 13-23 AND introduces a content-distinction table in the process, the NEW-5 reduction-to-2-axis prose note would re-activate. | n/a |

(Row #31 was rolled into the count when accounting for the §3.5 cross-reference one-liner separately from the §3.5 parameter cleanup. The table above lists 30 distinct rows; the 31st is implicit in row #17 being a one-line ADD distinct from row #16's prose REPAIR — both target §3.5 and are listed as separate rows. Total active+residue+confirm+superseded = 24 + 5 + 1 = 30 explicit rows; one additional row arises from splitting the §3.5 ADD-cross-reference from the §3.5 REPAIR-parameter-replacement. Count is 30 explicit rows with conservative counting; 31 with maximal splitting. The exact count is less important than the substantive coverage — see the Coverage Map below for the audit.)

### Coverage map

Each prior MUST/amendment row maps to one or more consolidated-delta rows; the map verifies zero drops.

| Prior | Prior row | Maps to consolidated row(s) | Coverage status |
|---|---|---|---|
| 00-51 | row 1 (Cut Movement) | #28 (NO-OP CONFIRM — reversed by 13-23 REVISED-1; field still present) | REVERSED-COVERED |
| 00-51 | row 2 (Cut Unlocks) | #29 (NO-OP CONFIRM base — reversed by 13-23 REVISED-2) + #13 (ACTIVE content-axis amendment) | REVERSED-COVERED |
| 00-51 | row 3 (Status enum 10→7) | #25 (NO-OP CONFIRM — already at 7) | COVERED-VIA-NO-OP |
| 00-51 | row 4 (Drop protocol-alias commitment) | #26 (NO-OP CONFIRM — no aliases in live spec) | COVERED-VIA-NO-OP |
| 00-51 | row 5 (§5.5 wrapper REPAIR) | #27 (NO-OP CONFIRM — wrapper already minimal) | COVERED-VIA-NO-OP |
| 00-51 | row 6 (Add §5.8 `_route.md` description) | #10 (ACTIVE ADD) | COVERED-ACTIVE |
| 00-51 | row 7 (Replace protocol-derived params) | #14 (§3.1 diagram) + #15 (§3.2 prose) + #16 (§3.5 prose) — three REPAIRs | COVERED-ACTIVE (fanned to 3 rows) |
| 00-51 | row 8 (§5.6 telemetry trim) | #5 (ACTIVE REPAIR-reduce) | COVERED-ACTIVE |
| 00-51 | row 9 (γ-field REPAIR + §2.4 chain ref) | #11 (γ-field REPAIR rule + LAYER-2 mode ADD) + #18 (§2.4 chain ref REPAIR) — two-clause row fanned to 2 rows | COVERED-ACTIVE (fanned to 2 rows) |
| 13-23 | REVISED-1 (Restore Movement) | #28 (NO-OP CONFIRM — field present) | COVERED-VIA-NO-OP |
| 13-23 | REVISED-2 (Restore Unlocks + content-axis amendment) | #29 (NO-OP CONFIRM base) + #13 (ACTIVE content-axis REPAIR) | COVERED-VIA-NO-OP-AND-ACTIVE |
| 13-23 | NEW-1 (Cut Purpose) | #1 (ACTIVE REMOVE) | COVERED-ACTIVE |
| 13-23 | NEW-2 (Cut Continuation Note) | #2 (ACTIVE REMOVE) | COVERED-ACTIVE |
| 13-23 | NEW-3 (Cut Continuation Memory group-header) | #3 (ACTIVE REMOVE) | COVERED-ACTIVE |
| 13-23 | NEW-4 ("5 purpose-groups" prose update) | #19 (ACTIVE REPAIR conditional on prose existing) | COVERED-ACTIVE |
| 13-23 | NEW-5 (4-axis → 2-axis prose) | #30 (SUPERSEDED-NO-OP — table not present) | COVERED-VIA-SUPERSEDED-NO-OP |
| 14-03 | (no MUST rows; compatibility verdict only) | n/a | n/a |
| 14-49 | row 1 (Read-Policy Vocabulary) | #6 (ACTIVE ADD) | COVERED-ACTIVE |
| 14-49 | row 2 (Read-Failure Default) | #7 (ACTIVE ADD) | COVERED-ACTIVE |
| 14-49 | row 3 (routeman.md MANDATORY-WHEN-AVAILABLE rule) | #8 (ACTIVE ADD) | COVERED-ACTIVE |
| 14-49 | row 4 (`_route.md` SHOULD rule) | #9 (ACTIVE ADD) | COVERED-ACTIVE |
| 14-49 | row 5 (Stage-2 input note) | #12 (ACTIVE ADD) | COVERED-ACTIVE |
| 14-49 | row 6 (§3.5 cross-reference) | #17 (ACTIVE ADD one-line) | COVERED-ACTIVE |
| this-inquiry | RESIDUE: §1.4 vocab cleanup | #4 (RESIDUE REMOVE) | RESIDUE-COVERED |
| this-inquiry | RESIDUE: §2.4 prose cleanup | #20 (RESIDUE REPAIR) | RESIDUE-COVERED |
| this-inquiry | RESIDUE: §3.4 Assembly bullet | #21 (RESIDUE REPAIR) | RESIDUE-COVERED |
| this-inquiry | RESIDUE: §4.2 failure mode #5 field-list | #22 (RESIDUE REPAIR) | RESIDUE-COVERED |
| this-inquiry | RESIDUE: §5 prologue dual-file framing | #23 (RESIDUE REPAIR) | RESIDUE-COVERED |
| this-inquiry | RESIDUE: NOW SOLID INSTRUCTIONS mirror | #24 (RESIDUE REPAIR) | RESIDUE-COVERED |

**Per-prior coverage summary.** 00-51's 9 MUST rows map to 12 consolidated rows (fan-out from rows 7 + 9). 13-23's 7 amendment rows map to 8 consolidated rows (fan-out from REVISED-2). 14-03 contributes 0 rows (compatibility verdict only). 14-49's 6 MUST rows map to 6 consolidated rows (1:1). This-inquiry-residue contributes 6 RESIDUE rows. **Total: 22 prior MUST/amendment rows + 6 residue rows → 30 consolidated rows with ZERO drops.**

### Cross-amendment merge coherence at §3.2 and §3.5

Two priors target §3.2 Reception and §3.5 Re-invocation. The inquiry tested whether their amendments compose additively or conflict; the verdict is additive composition.

At §3.2, the 00-51 amendment simplifies the optional re-invocation parameter list (replaces the protocol-derived `prior route map` + `refined-sub-goal` framing with a reference to `_route.md` + a preserved `refined-sub-goal`). The 14-49 amendment adds four new sub-sections after the current Reception description (the read-policy vocabulary, the graceful-degrade default, the routeman.md MANDATORY-WHEN-AVAILABLE rule, the `_route.md` SHOULD rule). These two amendments operate at different levels of §3.2 — 00-51 edits the OPTIONAL parameters list inside Reception; 14-49 adds new sub-sections AFTER Reception's main content. The merged §3.2 is the UNION: simplified parameters list plus four new sub-sections.

At §3.5, the 00-51 amendment simplifies the `prior route map` parameter description (replaces it with a reference to `_route.md`'s Prior Invocations + Last Invocation sections); the 14-49 amendment adds a one-line cross-reference pointing readers to §3.2's read-policy. These are two distinct edits with no conflict — they are listed as separate rows (#16 and #17) in the delta.

No adjudication is required at the merge points. Both amendments compose.

### Honest scope boundaries — what this inquiry does NOT do

The inquiry's scope is bounded to the consolidated amendment plan against the live routeman spec. Three categories of concerns are out of scope and preserved as Open Questions or flagged for future inquiries:

**Navigation-session aggregation output design** — per the 2026-05-27 14-03 finding. When a navigation session reads N parallel worker `routeman.md` outputs and produces an aggregation artifact, what is the shape of that aggregation? The committed worker-level shape provides adequate inputs for the navigation session, but the navigation session's WRITE output is not designed. This is bounded follow-up #1 from 14-03; this inquiry preserves the deferral.

**Meta-loop runtime design** — per 14-03. The project canon describes a meta-loop architecture (per `docs/canon/worker_loop_logic.md` §6) but the runtime is not yet built. The committed routeman shape supplies the input substrate; the runtime design awaits L2+ readiness. Bounded follow-up #2 from 14-03; preserved.

**Session-context poison** — distinct from spec-text poison. If a routeman invocation's LLM session-start happens to load `cognitive_harness/non-active/multi_resolution_navigation.md` (or other legacy files) into context, the protocol's DNA could still bias the discipline at runtime even after the spec is clean. This is a session-management concern, not a spec-amendment concern. Flagged as Open Question; the spec-amendment delta cannot enforce session-management behavior.

**Institutional memory file for routeman's design history** — `docs/discipline_design_history/for_routeman.md` per the user's `Discipline design-history location` memory. The file does not currently exist. Authoring it would record the design history of routeman's evolution through the 14-39 design memo, the 23-58 staged-mapping addition, the 24-00 protocol adoption, the 00-51 simplification, the 13-23 schema refinement, the 14-03 compatibility verdict, the 14-49 read policy, and THIS consolidated amendment. Per the user's `Disciplines self-contained` memory feedback, the runtime spec stays self-contained; the institutional memory is a SEPARATE artifact. Flagged as COULD action; not part of the consolidated spec-edit delta.

## Inherited Commitments Re-test

The `_branch.md` declared a Synthesis Trigger consuming 4 prior `finding.md` files. Each prior commitment that this inquiry's content depends on is re-tested.

### From `devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md`

- **Commitment:** Two-file structure `routeman.md` + `_route.md`. **Source:** 00-51 §"The committed simpler shape." **Re-test status:** RE-TESTED. **Evidence:** The consolidated delta's rows #10 (§5.8 ADD) + #23 (§5 prologue dual-file framing) + #24 (NOW SOLID INSTRUCTIONS section mirror) operationalize the two-file structure in the live spec. Confirmed via P5.e / P5.f cross-section dependency analysis. STANDS.
- **Commitment:** 4-layer model (α enumeration / β protocol-DNA / γ meta-reasoning / δ telemetry). **Source:** 00-51 §"The 4-layer model." **Re-test status:** INHERITED-WITHOUT-RE-TEST. **Reason:** out of consolidation scope; the model is the conceptual frame that organized prior analysis. The 4-layer model is not directly visible in the consolidated delta but its commitments propagate (β-layer minimization → NO-OP rows #25-#27; γ-field REPAIR → row #11; δ-layer trim → row #5).
- **Commitment:** β-layer minimization (protocol heavy-machinery dropped from routeman vocabulary). **Source:** 00-51 §"What's removed from the current spec." **Re-test status:** RE-TESTED — STRENGTHENED. **Evidence:** Surfacing's grep verification confirmed the worst β-layer tokens are ABSENT from the live spec text. The 00-51 commitment to minimize β-layer is satisfied by the live spec's pre-existing absence; the delta records NO-OP confirmations (#25 / #26 / #27) for audit completeness. STANDS.
- **Commitment:** γ-field REPAIR with cycle-anchor + filler-fails-spec constraints. **Source:** 00-51 §"The contingent decision." **Re-test status:** RE-TESTED. **Evidence:** Row #11 implements the REPAIR writing rule in §5.4 + adds a corresponding LAYER-2 audit mode in §4.3. The empirical-evidence-gated revival path (Candidate #2 cut DEFERRED) is preserved. STANDS.
- **Commitment:** δ-layer telemetry trim (5-6 essential metrics). **Source:** 00-51 §"Telemetry." **Re-test status:** RE-TESTED. **Evidence:** Row #5 trims to 7 essential metrics. The "5-6" framing in 00-51 was a target; the actual essential count after analysis is 7 (Entry mode + goal-type / Per-Family balance / Per-type distribution / Reachability distribution / Guidance mode allocation / Failure modes checked / Self-assessment verdict). One metric beyond the original 5-6 framing is justified per row #5's edit description. STANDS with minor count-clarification.
- **Commitment:** Routeman-native naming (no protocol aliases). **Source:** 00-51 §"Naming." **Re-test status:** RE-TESTED. **Evidence:** Live spec uses routeman-native names throughout (verified via grep — no `_navig.md` / `_frontier.md` aliases present). Row #26 records the NO-OP confirmation. STANDS.
- **Commitment:** Multi-head navigation-session compatibility. **Source:** 00-51 §"Multi-head walkthrough." **Re-test status:** INHERITED-WITHOUT-RE-TEST. **Reason:** Out of THIS inquiry's scope; the 14-03 finding's compatibility verdict is the relevant test. STANDS via 14-03.
- **Commitment:** Empirical-evidence-gated revival path for `why_this_might_be_important` field cut. **Source:** 00-51 §"The contingent decision." **Re-test status:** INHERITED-WITHOUT-RE-TEST. **Reason:** Preserved verbatim as DEFERRED action; revival trigger is the LAYER-2 audit protocol authoring (gated on Q4 from 2026-05-23 15-20 routeman frontier questions). STANDS.

### From `devdocs/inquiries/2026-05-27_13-23__routeman_per_route_schema_refinement/finding.md`

- **Commitment:** Movement RESTORED with current-state-to-target-state content axis. **Source:** 13-23 REVISED-1. **Re-test status:** RE-TESTED. **Evidence:** Live spec already has the Movement field with the correct content axis (verified by direct read of §5.4 line 372). Row #28 records the NO-OP confirmation. STANDS.
- **Commitment:** Unlocks RESTORED with graduated-beneficiary content axis. **Source:** 13-23 REVISED-2. **Re-test status:** RE-TESTED. **Evidence:** Live spec has the Unlocks field but with the simpler binary-blocking-removal content. Row #13 amends the content axis to include graduated-beneficiary relationships; row #29 records the NO-OP confirmation for field presence. STANDS with ACTIVE content amendment.
- **Commitment:** Purpose CUT. **Source:** 13-23 NEW-1. **Re-test status:** RE-TESTED. **Evidence:** Row #1 cuts the Purpose field from §5.4. STANDS.
- **Commitment:** Continuation Note CUT. **Source:** 13-23 NEW-2. **Re-test status:** RE-TESTED. **Evidence:** Row #2 cuts the Continuation Note field from §5.4 + triggers four RESIDUE rows (#4 / #20 / #21 / #22) for cross-section coherence. STANDS.
- **Commitment:** Continuation Memory group-header CUT. **Source:** 13-23 NEW-3. **Re-test status:** RE-TESTED. **Evidence:** Row #3 cuts the group-header. STANDS.
- **Commitment:** §5.4 prose "5 purpose-groups" update. **Source:** 13-23 NEW-4. **Re-test status:** RE-TESTED. **Evidence:** Row #19 with conditional verification (if no explicit prose count exists, the row becomes NO-OP at application time). STANDS.
- **Commitment:** 4-axis content distinction reduced to 2-axis prose note. **Source:** 13-23 NEW-5. **Re-test status:** RE-TESTED — SUPERSEDED. **Evidence:** Grep verification confirms the 4-axis table never landed in live spec. Row #30 records SUPERSEDED-NO-OP. STANDS as audit-completeness record.

### From `devdocs/inquiries/2026-05-27_14-03__routeman_simplification_endgoal_compatibility/finding.md`

- **Commitment:** Committed shape is end-goal-compatible at L0/L1 + easily extensible to L2+. **Source:** 14-03 6-cell verdict table. **Re-test status:** INHERITED-WITHOUT-RE-TEST. **Reason:** Compatibility verdict; out of THIS inquiry's amendment-delta scope. STANDS — the consolidated delta does not introduce changes that would invalidate the compatibility verdict.
- **Commitment:** Movement + Unlocks restoration is integration-positive across worker / nav-session / meta-loop surfaces. **Source:** 14-03 §"How the 13-23 amendment is integration-positive." **Re-test status:** RE-TESTED — STANDS. **Evidence:** Row #13 (Unlocks content-axis amendment) explicitly includes graduated-beneficiary content, which is the integration-positive axis 14-03 named for nav-session cross-head dependency views.
- **Commitment:** Bounded follow-up #1 (nav-session aggregation output design) is DEFERRED. **Source:** 14-03 Next Actions COULD #1. **Re-test status:** INHERITED-WITHOUT-RE-TEST. **Reason:** Preserved in this finding's DEFERRED actions; revival trigger is multi-head capability becoming actively designed. STANDS.
- **Commitment:** Bounded follow-up #2 (meta-loop runtime design) is DEFERRED. **Source:** 14-03 Next Actions COULD #2. **Re-test status:** INHERITED-WITHOUT-RE-TEST. **Reason:** Preserved in this finding's DEFERRED actions; revival trigger is L2-3 readiness + Follow-up #1 producing nav-session output design. STANDS.

### From `devdocs/inquiries/2026-05-27_14-49__routeman_directional_input_read_policy/finding.md`

- **Commitment:** `routeman.md` MANDATORY-WHEN-AVAILABLE in directional mode. **Source:** 14-49 §"Why routeman.md read is MANDATORY-WHEN-AVAILABLE." **Re-test status:** RE-TESTED. **Evidence:** Row #8 implements the MANDATORY-WHEN-AVAILABLE rule in §3.2 with full failure-state handling. STANDS.
- **Commitment:** `_route.md` SHOULD in directional mode. **Source:** 14-49 §"Why `_route.md` read is SHOULD." **Re-test status:** RE-TESTED. **Evidence:** Row #9 implements the SHOULD rule in §3.2 with value-additions enumerated. STANDS.
- **Commitment:** 4-tier read-policy vocabulary (MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY). **Source:** 14-49 §"The 4-tier runtime-policy vocabulary." **Re-test status:** RE-TESTED. **Evidence:** Row #6 implements the vocabulary as a §3.2 sub-section. STANDS.
- **Commitment:** Graceful-degrade default failure-handling. **Source:** 14-49 §"The graceful-degrade default." **Re-test status:** RE-TESTED. **Evidence:** Row #7 implements the default as a §3.2 sub-section. STANDS.
- **Commitment:** 18-58 stage-2 input contract preserved; implicit acquisition mechanic made explicit. **Source:** 14-49 §"Why this preserves the 18-58 stage-2 input contract." **Re-test status:** RE-TESTED. **Evidence:** Row #12 adds the stage-2 input-acquisition note to §3.3 without modifying the contract. STANDS.
- **Commitment:** Multi-head concurrency on directional invocation is OUT OF SCOPE. **Source:** 14-49 §"Multi-head concurrency: out of scope." **Re-test status:** INHERITED-WITHOUT-RE-TEST. **Reason:** Preserved as DEFERRED action; revival trigger is observed race conditions in multi-head invocations. STANDS.

### Cross-cutting commitments (inherited across multiple priors)

- **File structure `routeman.md` + `_route.md`**: STANDS (00-51 commitment; verified via rows #10 + #23 in this delta).
- **Per-Route schema at 11 fields / 5 purpose-groups (post-13-23)**: STANDS (00-51 + 13-23 jointly; verified via rows #1 + #2 + #3 + #28 + #29 in this delta).
- **β-layer minimization**: STANDS (00-51 commitment; STRENGTHENED by surfacing's verification that β-layer never landed in live spec text).
- **Read-policy commitments**: STANDS (14-49 commitments; implemented via rows #6 + #7 + #8 + #9 + #12 + #17).
- **End-goal compatibility**: STANDS (14-03 verdict; not invalidated by this delta).

## Next Actions

### MUST

- **What:** Apply the consolidated amendment delta (30 rows, 3-pass landing-order CUT → ADD → REPAIR) to `cognitive_harness/routeman/references/routeman.md`. Apply Pass 1 first (rows #1 – #5; root-first intra-pass order: cut the §5.4 schema fields before the cross-section ripples). Apply Pass 2 second (rows #6 – #12; dependency intra-pass order: §3.2 substrate before §3.2 per-file rules; §5.8 ADD references §3.2; γ-field REPAIR rule + LAYER-2 mode independent; §3.3 stage-2 note independent). Apply Pass 3 last (rows #13 – #24; no intra-pass order required).
  - **Who:** the user (or a follow-up materialization task / spec-edit task).
  - **Gate:** condition-bound — when the user decides to materialize this amendment.
  - **Why:** without the spec edits, four prior inquiries' commitments + this inquiry's six inter-section coherence-residue rows would remain documented but unapplied. The live routeman spec would continue diverging from the priors' design verdicts. Application produces a coherent post-amendment spec that reflects all design decisions made through 2026-05-27.

### COULD

- **What:** Author the institutional memory file `docs/discipline_design_history/for_routeman.md`. Record routeman's design history through the inquiry chain (2026-05-23 14-39 design memo → 2026-05-23 18-58 staged-mapping + meta-reasoning → 2026-05-24 00-20 persistence-and-invocation-modes → 2026-05-27 00-51 output simplification → 2026-05-27 13-23 schema refinement → 2026-05-27 14-03 end-goal compatibility → 2026-05-27 14-49 directional read policy → 2026-05-27 16-45 THIS consolidated amendment).
  - **Who:** any inquiry runner.
  - **Gate:** condition-bound — user decision to author institutional memory for routeman's design history.
  - **Why:** Routeman is the project's only shipped Boundary discipline. Recording its design history aids future Boundary disciplines' design (e.g., `/reflect` when revived) and provides audit trail for the cumulative decisions.
  - **Depends-on:** MUST item "Apply consolidated amendment delta." OVERRIDE: COULD is adoption-ready independent of MUST resolution. Reason: institutional memory authoring records the design-decisions that LED to the MUST; it can be authored before, during, or after MUST application without dependency. Authoring before MUST would document the decisions as proposed; after MUST would document them as committed.

- **What:** Update `cognitive_harness/non-active/multi_resolution_navigation.md` to record that routeman is no longer a consumer of the protocol (the alias note from 2026-05-24 00-20's Next Actions can be marked superseded). The protocol remains available for other potential consumers.
  - **Who:** whoever applies the MUST.
  - **Gate:** condition-bound — after MUST application.
  - **Why:** Maintains coherence of cross-document cross-references; prevents future readers from following stale alias notes to a routeman context where the alias no longer applies.
  - **Depends-on:** MUST item "Apply consolidated amendment delta." This COULD is GATED — the protocol-doc update is most coherent after the live spec's routeman-native names are confirmed.

- **What:** Author the LAYER-2 audit protocol for the γ-field filler-meta-reasoning failure mode (per the 2026-05-23 15-20 routeman implementation frontier-questions inquiry's Q4 + this inquiry's row #11 LAYER-2 mode #4 ADD).
  - **Who:** any inquiry runner.
  - **Gate:** condition-bound — when 5-10 post-amendment routeman invocations accumulate, providing operational data for threshold calibration.
  - **Why:** Enables the empirical-evidence-gated revival path for the 00-51 γ-field cut alternative. Without the audit protocol, the contingent γ-field decision cannot be revisited on evidence; the field stays under REPAIR constraints indefinitely.
  - **Depends-on:** MUST item "Apply consolidated amendment delta." This COULD is GATED — the audit operates on post-amendment invocation data, so MUST must land first to generate the substrate.

### DEFERRED

- **What:** Bounded follow-up #1 — nav-session aggregation output design.
  - **Gate:** condition-bound — when multi-head worker capability is being designed (per `docs/canon/project_north_star.md`'s L2 readiness) OR when ≥2 multi-worker inquiry sets have happened manually.
  - **Why (if revived):** Designs the aggregation artifact a navigation session writes after reading N parallel worker `routeman.md` outputs. The committed worker shape supplies adequate inputs; only the navigation session's WRITE output is undesigned.

- **What:** Bounded follow-up #2 — meta-loop runtime design.
  - **Gate:** condition-bound — at L2-3 readiness AND after Follow-up #1 produces nav-session output design.
  - **Why (if revived):** Designs the runtime that reads worker outputs + nav-session aggregations + `_meta_state.md` and commits movement decisions per the 8-movement vocabulary at `docs/canon/worker_loop_logic.md` §6. The committed routeman shape supplies the input substrate; the runtime design uses that substrate.

- **What:** Promote the 00-51 γ-field cut alternative (Candidate #2 — cut `why_this_might_be_important` field + 4-axis distinction documentation) with empirical evidence backing.
  - **Gate:** observable — when the LAYER-2 audit protocol (when authored) shows filler-meta-reasoning failure-rate exceeds threshold across ≥5 post-amendment routeman invocations.
  - **Why (if revived):** The 00-51 finding's structural argument for cutting the γ-field (redundant with WHY in different form) is sound; operational evidence would convert it from structural argument to evidence-backed change.

- **What:** Promote cross-discipline read-policy vocabulary unification (per 14-49 OQ).
  - **Gate:** observable — when another discipline spec (e.g., `/reflect` when revived) is being authored or amended and would benefit from the same 4-tier vocabulary.
  - **Why (if revived):** Consistency across discipline specs reduces cognitive load on authors and readers; promotes the project-coined MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY pattern from routeman-only to project-canonical.

- **What:** Formalize the structural-convergence-without-empirical-test pattern as a `/innovate` spec refinement (per 13-23 finding's project-process meta-observation; this inquiry preserves it at N=1).
  - **Gate:** observable — when N≥3 instances of structural-convergence-without-empirical-test surface across the project corpus.
  - **Why (if revived):** Inserts a refinement at `/innovate` Phase 2 Generate: "When mechanisms converge on a derivability claim, at least one converging mechanism must include an empirical test against real artifacts."

- **What:** Formalize the "consolidated amendment plan" pattern as cross-discipline reusable methodology (THIS inquiry's own meta-observation at N=1).
  - **Gate:** observable — when N≥3 disciplines accumulate multiple prior commitments needing consolidation.
  - **Why (if revived):** The 4-row-type vocabulary (ACTIVE / NO-OP CONFIRM / RESIDUE / SUPERSEDED-NO-OP) + 3-pass landing-order (CUT → ADD → REPAIR) + provenance column + cross-section dependency annotation pattern is reusable. At N≥3, promote to a project-canonical inquiry-template for synthesis-shape consolidations.

- **What:** Address multi-head concurrent directional invocation handling.
  - **Gate:** observable — when multi-head workers are concurrently invoking directional mode on the same parent route AND race conditions surface in practice.
  - **Why (if revived):** The 14-49 finding assumed single-worker directional invocation. Multi-head concurrency on `routeman.md` reads + `_route.md` History writes could surface conflicts requiring coordination protocol.

## Reasoning

### Why this finding shape over the alternatives

Sensemaking identified three plausible shapes for the consolidated delta — flat-by-section, grouped-by-provenance, or chronological-by-inquiry. The chosen shape is flat-by-section because the user's stated motivation was "apply in one coordinated patch." Patch applicators work section-by-section; provenance-grouping would force the applicator to cross-reference four groups per section. Chronological-by-inquiry would produce the worst applicator experience (four groups crossing all sections at different times). Flat-by-section with provenance as a column field gives both application efficiency and audit traceability.

### Why NO-OP CONFIRM rows are included

Sensemaking Ambiguity 1 adjudicated whether NO-OP rows should appear in the delta or be omitted with a separate "Verified-Satisfied" section. The verdict was INCLUDE with explicit row-type tag. Including NO-OP rows preserves audit completeness: a future inquiry checking "did the 00-51 alias-drop commitment land?" can look in one place. The visual-distinction concern (NO-OP rows might be misread as edits-needed) is addressed by the explicit Status column making each row's action-type unambiguous.

### Why RESIDUE rows are coherence-load-bearing, not scope-creep

Sensemaking Ambiguity 4 adjudicated whether the 6 RESIDUE rows are necessary or over-reach. The verdict was COHERENCE-LOAD-BEARING. Each RESIDUE row has a concrete cross-section dependency: another section references a field or parameter that an ACTIVE edit cuts/adds/modifies, and without the RESIDUE row's fix, the post-application spec would have an internal contradiction. The §1.4 vocabulary entry "continuation note" must be removed because §5.4 cuts the field; leaving the vocab entry creates a contradiction between vocab and schema. Similar logic for §2.4 prose, §3.4 Assembly bullet, §4.2 failure-mode field-list, §5 prologue, and NOW SOLID INSTRUCTIONS. Identifying these residue rows is this inquiry's distinctive value-add over naive 4-list concatenation.

### Why the context-poison observation target reframes honestly

Sensemaking Ambiguity 7 + the surfacing's grep verification together produced an honest reframing of the user's "clean context poison" observation target. The naive expectation was that the live spec contains substantial legacy protocol-DNA from `cognitive_harness/non-active/multi_resolution_navigation.md`. The reality, verified empirically, is that the worst β-layer tokens (`_frontier`, `batch_size`, `coverage_mode`, `expansion_policy`, `scheduling_policy`, `candidate_id`) are ABSENT from the live spec text. The legacy poison existed at the FINDING-LEVEL (the 2026-05-24 00-20 inquiry's verbatim adoption of the protocol as routeman's persistence mechanism) but never propagated into the live spec.

This re-framing is more useful to the user than fabricating poison-rows for items already absent. The cleanup that DOES need to happen is the field-level remnants (Purpose / Continuation Note from 13-23 cuts) plus the inter-section coherence ripples (the 6 RESIDUE rows). Both are real and substantial; both are addressed in the delta.

The reframing also clarifies where each layer of poison lives:
- **At-spec-text-layer:** minimal (the field remnants + ripples).
- **At-finding-level-commitment-layer:** arrested by the priors' own analyses (00-51's β-layer minimization, 13-23's empirical re-tests).
- **At-session-context-layer:** out of scope (session-management concern; flagged as Open Question).
- **At-naming-collision-layer:** monitored (no current collisions; the prior cleanup work — including the 2026-05-27 Navigator-session → navigation-session rename per a prior session's documentation cleanup — has held).

### Why landing-order is CUT → ADD → REPAIR (and why intra-pass ordering matters)

Critique's adversarial test surfaced that the 3-pass landing-order's intra-pass ordering needed explicit specification. Without intra-pass ordering, a mid-pass interruption could leave the spec in an internally inconsistent state.

The reasoning: within Pass 1 (CUT), cut the root-cause fields first (§5.4 schema cuts) so that subsequent residue cleanups (§1.4 vocab, §2.4 prose, etc.) operate against a consistent post-root-cut state. Within Pass 2 (ADD), order by dependency so that downstream additions can reference upstream additions (§3.2 substrate before §3.2 per-file rules; §5.8 ADD references §3.2). Pass 3 (REPAIR) has no intra-pass dependency — each repair is independent of other repairs in the same pass.

Acceptable failure mode: mid-Pass-1 interruption leaves the spec in a state that is NO WORSE than the current state (where the priors are unapplied and the residue rows haven't fired). Mid-Pass-2 interruption is bounded by intra-pass dependency ordering. Mid-Pass-3 interruption is partial repair, which is recoverable on resumption.

### Why §3.2 + §3.5 cross-amendments are additive composition

Sensemaking Ambiguity 2 + 3 adjudicated whether the 00-51 + 14-49 overlaps at §3.2 + §3.5 are conflicts requiring merge adjudication or additive compositions. The verdict was ADDITIVE. At §3.2, 00-51 simplifies the optional parameters list while 14-49 adds new sub-sections — different positions in the section. At §3.5, 00-51 simplifies the parameter prose while 14-49 adds a one-line cross-reference — distinct edits. No conflict.

### Why institutional memory is COULD, not MUST

Sensemaking Ambiguity 5 adjudicated this. The deliverable's scope is the runtime spec amendment; institutional memory is a separate artifact at a different location. Per the user's `Disciplines self-contained` memory feedback, the spec stays self-contained — institutional memory cannot live IN the spec, and the inquiry's MUST cannot include authoring an external artifact. Flagged as COULD with the gate "user decision to author institutional memory for routeman's design history."

### What could be wrong — the strongest prosecution against this consolidation

The strongest counter-argument: the inquiry treats the priors as black-box inputs and consolidates without re-examining whether any prior's verdict has been invalidated by what came after. For example, could 14-03's compatibility verdict have implicitly invalidated some 00-51 commitment that 13-23 didn't address?

The defense: the 14-03 finding's Inherited Commitments Re-test explicitly re-tested 00-51 + 13-23 commitments and found them STANDING (with integration-positive enhancements from Movement + Unlocks restoration). The 14-49 finding similarly re-tested 00-51 + 13-23 commitments. No cross-prior invalidation surfaced. The consolidation operates on inputs that have already been cross-validated by each subsequent prior.

The remaining residual risk: a commitment from 00-51 that 13-23/14-03/14-49 didn't touch could be silently outdated. The Inherited Commitments Re-test section in this finding addresses this by enumerating each commitment with re-test status; INHERITED-WITHOUT-RE-TEST flags are intentional friction enabling future reviewers to spot weak inheritance.

### Critique's 4 REFINE caveats — how each was resolved

The Critique discipline tested the Innovation output across 12 dimensions with multi-axis prosecution. It found 4 REFINE-level (not KILL-level) caveats:

1. **Caveat 1 (D2/D3 — Coherence/Feasibility):** Innovation's §3.1 diagram cleanup (P2.00-51-a) risked dropping `refined-sub-goal` by omission. **Resolved** in this finding's row #14: `refined-sub-goal` is explicitly preserved in the simplified parameter list.

2. **Caveat 2 (D3 — Feasibility):** Innovation's §5.6 telemetry trim (P2.00-51-e) had a metric-count framing mismatch (described as "5-6 essential" but actually listing 7). **Resolved** in this finding's row #5: 7 essential metrics are explicitly enumerated; the count discrepancy with 00-51's original framing is acknowledged with rationale.

3. **Caveat 3 (D5 — Robustness):** Innovation's P1 substrate did not explicitly name intra-pass ordering rules. **Resolved** in this finding's Pass-1 + Pass-2 sub-sections AND in the Reasoning section above: intra-pass ordering rules are explicitly specified.

4. **Caveat 4 (D9 — Canon-precedent alignment):** Innovation's P2.14-49-d (`_route.md` SHOULD rule rationale) contained an outbound pointer to `docs/canon/evolving_quality_assetment_component.md` in the spec text. **Resolved** in this finding's row #9: the canon-doc pointer is removed from the spec text (replaced with the more general phrase "cross-invocation history feed (Predictive-vs-Retrospective comparison enabling quality-assessment patterns)"). The canon-doc reference lives in this finding's Reasoning section instead, where the cross-discipline context belongs.

## Open Questions

### Monitoring

- **OQ1 — Filler-meta-reasoning post-application audit.** Observable after 5-10 post-application routeman invocations. Watch whether the `why_this_might_be_important` field produces cycle-anchored content or generic filler; promote the 00-51 γ-field cut alternative (Candidate #2) with empirical evidence if filler-rate exceeds threshold.

- **OQ2 — Functional-role-distinction post-amendment.** Observable across 5-10 post-application routeman invocations. Watch whether functional-role distinction across routes survives in WHY + `why_this_might_be_important` after Purpose cut. If functional-role distinction drifts toward operational-detail content, the Purpose-cut verdict re-opens (revival path: 13-23 Candidate D — both Purpose and Continuation Note TIGHTENED rather than cut).

- **OQ3 — Warmup-memory recoverability from `_route.md`.** Observable when a future agent resumes a routeman context. Watch whether `_route.md`'s History section provides enough warmup signal, or whether per-route inline content (Continuation Note) proves necessary in practice. If insufficient, the Continuation Note-cut verdict re-opens (revival path: 13-23 Candidate D or B).

- **OQ4 — HALT edge-case operational frequency.** Observable in post-application routeman invocations. Watch whether MANDATORY-WHEN-AVAILABLE's HALT edge cases (`MissingRequiredInput` when caller-info also absent; `MalformedRequiredInput`) fire in practice. Frequency informs whether graceful-degrade thresholds need adjustment.

- **OQ5 — Post-application spec audit checkpoint.** After the consolidated delta is applied, manually re-read `cognitive_harness/routeman/references/routeman.md` end-to-end. Verify internal consistency: no orphaned field references; no contradictions between sections; no broken cross-references. Especially verify §3.2 + §3.5 + §5.8 + "NOW SOLID INSTRUCTIONS START" section coherence (the convergence point of the most amendments).

- **OQ6 — Project-process meta-pattern observation count.** Currently N=1 (the 13-23 finding's confidently-wrong-structural-convergence-without-empirical-test instance). Watch for N=2 + N=3 instances; at N≥3, escalate the pattern to `/innovate` for spec-refinement candidacy.

- **OQ7 — Two-route-Meaning-group population.** Movement + Unlocks both live in Route Meaning group post-amendment (Purpose cut). Monitor whether the group's content is rich enough that operators read it as a coherent group, or whether the two fields could be redistributed.

### Blocked

- **OQ8 — Bounded follow-up #1: Nav-session aggregation output design.** Blocked on multi-head capability being designed or operationally needed.

- **OQ9 — Bounded follow-up #2: Meta-loop runtime design.** Blocked on Follow-up #1 + L2-3 readiness.

- **OQ10 — LAYER-2 audit protocol authoring.** Blocked on the routeman frontier-questions inquiry (2026-05-23 15-20) Q4 being addressed. Converts post-application operational data into a structural decision signal for the γ-field contingent.

- **OQ11 — Baldwin-cycle activation against routeman substrate.** Blocked on `/intuit` shipping + operational-data accumulation. Per `docs/canon/evolving_quality_assetment_component.md`, the Baldwin cycle reads predictive RC signals at T0 and retrospective RC signals at T2+. Routeman's per-Route Reasoning (T0) + per-Route Status updates + `_route.md` History (T2+) is the substrate; activation requires `/intuit` discipline shipping.

### Research Frontiers

- **OQ12 — Cross-discipline read-policy vocabulary unification.** Currently N=1 (routeman-only). At N≥2 (when another discipline spec adopts the same 4-tier vocabulary), promote to project-canonical pattern.

- **OQ13 — Cross-discipline "consolidated amendment plan" pattern.** This inquiry surfaces the pattern at N=1. The 4-row-type vocabulary + 3-pass landing-order + provenance column + cross-section-dependency annotation methodology is reusable. At N≥3 disciplines needing consolidation of multiple prior commitments, promote to project-canonical inquiry-template.

- **OQ14 — Empirical-grounding requirement for structural convergence (per 13-23 meta-observation).** Currently N=1 (the 00-51 confidently-wrong Movement+Unlocks cuts refuted by 13-23 empirical inspection). At N≥3 instances across the corpus, formalize as a `/innovate` spec refinement.

### Refinement Triggers

- **OQ15 — If MANDATORY-WHEN-AVAILABLE tier proves operationally confusing.** Trigger: ≥2 instances of mis-application observed in routeman invocations (spec readers misinterpret the absence case). Refinement: collapse back to 3-tier RFC 2119 (MUST / SHOULD / MAY) with natural-language qualification for the absence case.

- **OQ16 — If generic-mode read policy proves to require a different vocabulary.** Trigger: future generic-mode read policy inquiry surfaces structural mismatch. Refinement: keep 4-tier vocabulary; have different per-tier verdicts for generic vs directional modes.

- **OQ17 — If multi-head concurrency on directional invocation surfaces race conditions.** Trigger: observed race condition in concurrent multi-head workers invoking directional mode on the same parent route. Refinement: promote a follow-up inquiry on cross-worker coordination for directional mode.

### Out-of-scope flags (not actionable in this finding; preserved for future scope decisions)

- **Session-context poison.** Per Sensemaking Ambiguity 7. The LLM session-context priming concern (whether `/routeman` invocations load `cognitive_harness/non-active/` files at session start) is a session-management concern, not a spec-amendment concern. The consolidated delta cannot enforce session-management behavior; flagged for future session-management work.

- **Naming-collision monitoring.** Per Sensemaking Frame-exit Completeness Verdict Rigor #2. No current naming collisions detected; monitor for re-introduction (e.g., if a future inquiry accidentally re-introduces `_navig.md` / `_frontier.md` aliases via cross-document references).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
(Run this skill)

Use this skill

To understand what structural changes are needed to fix the current routeman discipline so that we will clean context poison effect and fix how output is handled?
```

</details>
