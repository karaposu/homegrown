---
status: active
model: claude-opus-4-7[1m]
effort: max
refines: devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md
---
# Finding: routeman per-route schema refinement — restore Movement + Unlocks; cut Purpose + Continuation Note

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md`

**Revision trigger:** User correction. After the prior finding's simplification shape was produced, the user submitted four specific objections to the per-Route schema field decisions: disagreement with cutting Movement + Unlocks, opposition to keeping Continuation Note (cited reason: file bloat), and questioning whether Purpose is needed given Goal + WHY + why_this_might_be_important (cited reason: redundancy).

**What's preserved:** The prior finding's broader simplification commitments stand unchanged — the 4-layer model adjudication (α/β/γ/δ), the file structure (`routeman.md` + `_route.md`), the β-layer minimization (dropping the protocol's heavy machinery), the γ-field REPAIR with cycle-anchor constraint, the δ-layer telemetry trim, the routeman-native naming throughout, the multi-head navigation-session compatibility check, the broader MUST/COULD/DEFERRED items not touching the 4 contested fields, the Open Questions/Monitoring items. This finding is a **surgical refinement** of the per-Route schema's α-layer field set; it does NOT re-litigate the prior finding's structural decisions outside those 4 fields.

**What's changed:**

- The prior finding's MUST delta-list rows committing to "Cut per-Route `Movement` field" and "Cut per-Route `Unlocks` field" are **REVERSED**. Movement and Unlocks are restored to the per-Route schema.
- Two fields the prior finding kept — **Purpose** and **Continuation Note** — are **CUT** based on empirical evidence the user's objections invited.
- The 4-axis content distinction documentation in routeman.md (committed by the 2026-05-23_18-58 inquiry's §4 table) reduces to a 2-axis distinction (WHY + why_this_might_be_important).
- The Continuation Memory group-header in §5.4 is cut (became empty after Continuation Note's removal); §5.4 now describes 5 purpose-groups instead of 6.

**What's new:**

- An empirical-evidence-based methodology for testing field decisions in routeman's schema — using real per-Route entries from the 2026-05-25 readiness Route Map (the only substantive routeman output extant) to test derivability, redundancy, and population-variance claims structurally.
- A documented project-process meta-observation: the prior Innovation's structural-convergence pattern (5 of 7 mechanisms converged on cuts that empirical examples then refuted) is the project's first surfaced instance of "confidently-wrong-structural-convergence-when-no-empirical-test-applied." Flagged for future `/reflect` consideration.
- A post-amendment roadmap that combines the SURVIVE shape with DEFERRED candidates as revival triggers if post-amendment monitoring surfaces issues.

**Migration:** The user (or a follow-up materialization task) applies the amendment-delta below to `cognitive_harness/routeman/references/routeman.md`. The prior finding's other MUST items continue to apply as written.

## Question

(from `_branch.md`)

For each of the four contested per-route schema fields (Movement, Unlocks, Continuation Note, Purpose) — does the prior simplification finding's verdict survive the user's specific objections, or should the field's verdict be revised?

The user's objections, verbatim:
- *"i disagree with removing movement and unlocks"* — challenges the prior finding's cut verdicts on Movement and Unlocks (which the prior finding cut based on a derivability claim: Movement derivable from Direction → Goal; Unlocks derivable from forward-chain over Status + Blocked By).
- *"i think we shouldnt have Continuation memory, it will bloat the md file"* — challenges the prior finding's retention of Continuation Note (cited reason: file bloat).
- *"maybe Purpose is not needed since we already have goal, why and why important"* — challenges the prior finding's retention of Purpose (cited reason: redundancy with Goal + WHY + why_this_might_be_important union coverage).

**Goal:** A per-field verdict memo with concrete updated per-route schema + a delta-list addendum to apply to the prior finding's MUST list. Each field's verdict must be structurally grounded (not vibes), the user's specific objections must be engaged on their terms (not blanket-defended or blanket-accepted), and the prior finding's broader commitments must not be re-litigated.

## Finding Summary

- **Movement: RESTORE.** The prior finding's derivability claim ("Movement derivable from Direction → Goal") is empirically refuted by the only substantive real-route artifact in the project (the 2026-05-25 readiness Route Map). Direction carries verb-action; Goal carries target-state-label; neither encodes the FROM-state of the route's transition. The transition statement (e.g., "Q5 protocol designed in the 07-30 finding but not yet authored → file authored at canonical location") carries current-state information no other field encodes. Cut loses information.

- **Unlocks: RESTORE.** The prior finding's derivability claim ("Unlocks derivable from forward-chain reasoning over Status + Blocked By") is empirically refuted. Unlocks carries graduated-beneficiary relationships ("route A benefits from route B's completion") that go BEYOND binary-blocking-removal. Real-route example (Route 1 in the 2026-05-25 Route Map): the Unlocks list names routes that are NOT blocked by route 1 but BENEFIT from its completion. Status + Blocked By's forward-chain can only reconstruct binary blocking; beneficiary is a superset.

- **Purpose: CUT.** The user's redundancy claim ("we already have goal, why and why important") is empirically sustained. Goal (Route Identity) carries target-state-label; WHY (Reasoning, object-level backward-facing) carries cycle-evidence justifying; why_this_might_be_important (Reasoning, meta-level introspective) carries the LLM's reasoning on why this route was enumerated and consequence-of-absence. Purpose's distinctive content axis (functional-consequence-of-route) is empirically absorbed by the union — particularly the why_important field, which already carries consequence-of-absence content in the real-route examples. Six of eight innovation mechanisms converged on cut from different upstream grounds (empirical test, structural redundancy, design-pattern analogue, projection); convergence is robust.

- **Continuation Note: CUT.** The user's bloat objection has structural roots: empirical observation across 3 sampled real-routes (Routes 1, 6, 10 in the 2026-05-25 Route Map) reveals **axis-variance** — the field is populated inconsistently across routes (warmup memory in one, scheduling-orchestration in another, route-meta-comment in a third). The field's spec is too loose to reliably reproduce a single content axis. The user-stated need that originally motivated the field (forward-warmup memory across sessions) is recoverable from `_route.md`'s `History` and `Last Invocation` sections (committed by the prior finding); per-route inline notes are not the only home.

- **The total per-Route field count is unchanged at 11** (10 content fields + 1 contingent meta-reasoning field). The schema is **restructured, not grown**: two restores (Movement, Unlocks) balance two cuts (Purpose, Continuation Note). The composition becomes:

  | Group | Field | Content axis |
  |---|---|---|
  | Route Identity | Direction | Human-readable route title (verb-action) |
  | Route Identity | Goal | Compact target-state label |
  | Route Identity | Movement Type | One of 16 from the movement-type taxonomy |
  | **Route Meaning** | **Movement** (RESTORED) | Descriptive transition: current state → target state |
  | **Route Meaning** | **Unlocks** (RESTORED) | Downstream routes / checks / decisions / artifacts; broader than blocking, includes graduated-beneficiary |
  | Route State | Priority | HIGH / MEDIUM / LOW |
  | Route State | Status | open / blocked / deferred / active / done / stale / superseded |
  | Route State | Blocked By | The gate / condition / missing artifact; `none` when unblocked |
  | Reasoning | WHY | Evidence from cycle output making this direction worth considering |
  | Reasoning (contingent) | why_this_might_be_important | 1-sentence cap; cycle-content anchor required (REPAIR from prior finding) |
  | Adaptive Guidance | Guidance Mode + Pointers | one of {none, compact, full, expand-on-selection}; 0/1-2/3-5 pointers |

  **Fields removed in this amendment:** Purpose (was in Route Meaning group); Continuation Note (was the only field in Continuation Memory group). **Group structure becomes 5 groups** (Route Identity, Route Meaning, Route State, Reasoning, Adaptive Guidance) — Continuation Memory group is cut entirely.

- **The 4-axis content distinction documentation in routeman.md** (committed by the 2026-05-23_18-58 inquiry's §4 table to prevent reader confusion among Purpose / WHY / Continuation Note / why_this_might_be_important) reduces to a 2-axis note: WHY (object, backward-facing to cycle-evidence) + why_this_might_be_important (meta, LLM-introspective). The reduction is contingent on this amendment shipping; if a future inquiry restores any of the cut fields, the distinction documentation must be restored too.

- **The prior finding's user-objection-engagement balance.** The user's wording on Continuation Note ("shouldnt have") was firm; the wording on Purpose ("maybe ... not needed") was softer. This amendment treats both with the same decisiveness (cut). The justification is that the "maybe" was an invitation to test (per the user's larger framing "lets think it through"); the testing — empirical + structural mechanism convergence — produced cut as the principal verdict; the inquiry surfaced the 4 alternative candidates explicitly so a future revisitation can be triggered if the cut proves wrong.

- **One project-process meta-observation is flagged for future `/reflect` consideration.** The prior simplification finding's Innovation Phase 2 reported "5 of 7 mechanisms converge on cutting Movement + Unlocks" with STRONG signal — but none of the 7 mechanisms tested the derivability claim EMPIRICALLY against real route examples. The convergence was structural-argument-only; empirical inspection refuted it. This is the first surfaced instance of the project's "confidently-wrong-structural-convergence-when-no-empirical-test-applied" pattern. If 2+ more instances surface across the corpus, this becomes a candidate for a project-canonical principle (something like: "When structural convergence is reported on a derivability claim, an empirical test against real artifacts must be among the converging mechanisms"). For now: noted, not actionable. Flagged for project Reflection.

## Finding

### Surrounding context

This inquiry refines the prior `routeman_output_simplification` finding (`devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md`), which committed to a simplified routeman output shape (`routeman.md` + `_route.md`) with a specific per-Route schema. The prior finding cut two fields (Movement, Unlocks) and kept two others (Purpose, Continuation Note) among the 4 fields now contested.

The user submitted concrete objections to those four decisions after reading the prior finding. The user's framing was deliberate (4 specific objections + explicit "maybe" qualifier on one), inviting per-field re-adjudication rather than wholesale rejection.

This inquiry's scope is exactly those 4 fields. The prior finding's other commitments — file structure, β-layer minimization, γ-field REPAIR, telemetry trim, navigation-session compatibility, broader MUST list, Open Questions — stand unchanged.

### Why Movement is restored

The prior finding's Innovation Phase 2 (Absence Recognition at redesign-level) produced the claim that Movement is *PRESENT IN DIFFERENT FORM*: Direction + Goal together imply the transition Movement describes. Five of seven mechanisms converged on cutting Movement based on this claim.

Empirical test against the only substantive real-route artifact in the project — the 2026-05-25 readiness Route Map's 22 routes, three sampled fully for this inquiry — refutes the claim. Reading Route 1 (the substantive example):

- **Direction:** "Author Q5 file-system protocol." Verb-action only.
- **Goal:** "`cognitive_harness/protocols/inquiry_filesystem_protocol.md` exists with content per the Q5 finding." Target-state-label only.
- **Movement:** "Q5 protocol designed (in the 07-30 finding) → Q5 protocol file authored at canonical location."

Reading these three side-by-side: the FROM-state of the transition (*"designed in the 07-30 finding but not yet authored"*) is information that lives in Movement and lives **nowhere else**. Neither Direction (which is verb-only) nor Goal (which is target-only) encodes the current state. Removing Movement loses the FROM-state of the transition.

A second example (Route 6) shows that for trivial routes the FROM-state can be near-empty (*"deprecated_navigation has no archive note → archive note present"*), but the field's content is still distinct from Direction + Goal even in the minimal case.

The prior finding's claim was structurally compelling — Direction + Goal *might* imply Movement in some abstract sense — but it's empirically false for routes that carry non-trivial state. The cut was wrong.

**Verdict: Restore the field.** Content axis as originally specified at the 14-39 design memo: "Descriptive transition: current state → target state." Carries the FROM-state Direction and Goal don't encode.

### Why Unlocks is restored

The prior finding's Innovation Phase 2 generated the parallel claim for Unlocks: derivable from forward-chain reasoning over Status + Blocked By. Reading other routes' Blocked By fields would tell you what routes A unblocks; therefore Unlocks reconstructable.

Empirical test against Route 1's Unlocks list refutes this. Route 1's Unlocks reads: *"Routes 2 (Q6 contracts live in this file), 7 (process-layer can specify scan + persist steps with concrete protocol references), 8 (integration-layer document can cross-reference Q5 properly), 22 (testing benefits from Q5 protocol being real)."*

Reading the Blocked By fields of routes 7, 8, and 22:
- Route 7's Blocked By: "Q5 + Q6 + Q4 protocol files (routes 1-3)" — route 1 IS in its Blocked By. Forward-chain captures this.
- Route 8's Blocked By: "none." Forward-chain says route 8 is NOT blocked by route 1; yet route 1's Unlocks claims route 8 benefits.
- Route 22's Blocked By: "none (currently active...)." Forward-chain says route 22 is NOT blocked by route 1; yet route 1's Unlocks claims route 22 benefits.

Two of four entries in Route 1's Unlocks list are routes that are NOT blocked by route 1. They are routes that **benefit** from route 1 — a graduated-beneficiary relationship, not a binary-blocking-removal. The forward-chain reasoning the prior finding proposed reconstructs only the binary-blocking subset of Unlocks; the beneficiary content is lost.

The prior finding's claim was structurally compelling — "if A unblocks B, then B's Blocked By should mention A" — but Unlocks's actual content axis is broader than blocking. The cut was wrong.

**Verdict: Restore the field.** Content axis amended to: "Downstream routes / checks / decisions / artifacts that this route's completion makes available, broader than hard-blocking. Includes graduated-beneficiary relationships as well as binary-blocking-removal. Use `unknown` when downstream effects are unclear."

### Why Purpose is cut

The user's stated reason: "maybe Purpose is not needed since we already have goal, why and why important."

The claim is a cross-group redundancy claim: Purpose's content axis is in the union of Goal (Route Identity), WHY (Reasoning, object-level), and why_this_might_be_important (Reasoning, meta-level).

The 18-58 inquiry's §4 four-axis content distinction table addresses Purpose vs WHY vs Continuation Note vs why_this_might_be_important within the Reasoning group plus Continuation Memory. It distinguishes Purpose ("object, forward-facing, what the route would serve/reveal/unlock") from WHY ("object, backward-facing to cycle, evidence justifying") from why_important ("meta, LLM-introspective, why this was enumerated"). The level-distinction (Purpose object-level vs why_important meta-level) is real in principle.

Empirical test on Route 1:
- **Purpose:** "Q5's protocol is the canonical authority for file-system-mediated input to routeman. Without the protocol file, routeman SKILL.md's planned cross-reference (when authored as project-integration) would target a missing file; the lazy load would emit INFO per the missing-protocol-file degraded-functionality pattern, and routeman would run with degraded scan/validate functionality."
- **WHY:** "the Q5 finding has the full design ready; only the file-authoring action separates design-from-runtime."
- **why_this_might_be_important:** "without Q5 file, the planned protocol-cross-reference layer of routeman cannot be exercised in practice; the missing-protocol-file degraded-functionality mode would fire on every routeman invocation that needs scan or validate functionality."

Reading these three side-by-side: Purpose's content and why_important's content overlap substantially. Both say "without it, degraded-functionality fires." The level-distinction (Purpose: "canonical authority" framing; why_important: "the LLM's signal" framing) is real in principle but operationally invisible in this example.

Additionally, the user's claim brings Goal into the redundancy: Goal carries the target-state-label ("file exists"), which is the what-state Purpose's first clause is restating. The cross-group redundancy is real: Goal (target-state) + WHY (cycle-evidence) + why_important (consequence-of-absence) collectively cover Purpose's stated content.

Six of eight Innovation mechanisms converged on cut from different upstream grounds (empirical redundancy test, Lens Shifting on cross-group redundancy, Inversion at system-level on the level-distinction, Absence Recognition redesign-level on PRESENT IN DIFFERENT FORM, Domain Transfer from GitHub-issue-body patterns, Extrapolation on axis-drift over time). The mechanism convergence is structurally independent.

The user's wording was "maybe Purpose is not needed" — softer than "shouldnt have." This amendment treats the softer wording as an invitation to test rather than as a hesitation about the verdict. The empirical + mechanism evidence sustains cut.

**Verdict: Cut the field.** Functional-consequence content lives in WHY (cycle-evidence) + why_important (consequence-of-absence). The Route Meaning group becomes Movement + Unlocks (Purpose removed).

### Why Continuation Note is cut

The user's stated reason: "i think we shouldnt have Continuation memory, it will bloat the md file."

The 18-58 inquiry's §4 four-axis content distinction defines Continuation Note as: "What a future warm-up should remember about this route." Object-level, forward-facing across sessions.

Empirical test across 3 sampled real routes:

- **Route 10's Continuation Note:** "Deferred; revive when there's operational evidence the primitive grounding is needed." This **fits the spec definition cleanly** — forward-warmup memory.

- **Route 1's Continuation Note:** "Q5 protocol file is the most-referenced new protocol in the routeman ecosystem; authoring it first removes blockers for routes 2, 7, 8." This is **partial warmup memory + scheduling-orchestration signal**. The orchestration content (which routes get unblocked) belongs in Unlocks, not Continuation Note. The field is being used as a scratchpad for spillover content.

- **Route 6's Continuation Note:** "Brief note (~1 paragraph) sufficient; the design rationale lives in the 14-39 design memo + this Route Map." This is **route-meta-comment** — commentary about the route's own nature/scope, not warmup memory for a future agent.

Three sampled routes, three different content axes in the same field. The field's spec is too loose to reproduce a single axis reliably. The user's "bloat" objection has structural roots: when a field's content axis is variable, each invocation has to decide which axis to populate, producing inconsistent output. The bloat is not just byte-cost; it's cognitive-write-cost (the LLM has to decide) and audit-read-cost (the reader has to figure out what kind of content this entry is).

The user-need the field was originally meant to serve (forward-warmup memory across sessions) is recoverable from elsewhere: `_route.md`'s `History` and `Last Invocation` sections (committed by the prior finding) carry cross-session memory at the route-map level. Per-route inline warmup notes are not the only home; the routeman invocation-state file is the right home.

The user's wording was firm: "shouldnt have." The empirical evidence sustains it.

**Verdict: Cut the field.** Continuation Memory group becomes empty; group-header itself is cut from the §5.4 schema. Forward-warmup memory recovered from `_route.md`'s `History` and `Last Invocation` sections.

### Multi-head navigation-session compatibility check

The prior finding committed to multi-head navigation-session compatibility via three properties of routeman's output: (a) self-describing on disk, (b) worker-identifier inherent in inquiry folder + timestamp, (c) stable parseable schema. Test this amendment's schema against the three properties:

- **(a) Self-describing on disk:** The schema is 5 purpose-groups × 10 content fields + 1 contingent field. Each route entry is markdown-rendered and human-readable. PASS.

- **(b) Worker-identifier:** Inquiry folder name + timestamp inherently identify the worker. Unchanged by this amendment. PASS.

- **(c) Stable parseable schema:** The amended schema swaps 2 fields out for 2 fields in (composition changes; structure does not). Field-by-field parsing logic for the new schema is the same shape as for the prior schema — just with different field names. Parsers built against the prior schema would need a one-line update. PASS.

The amendment does not affect multi-head navigation-session compatibility.

### Why the 4-axis content distinction reduces to 2-axis

The 18-58 inquiry's §4 four-axis content distinction was added to prevent reader confusion among Purpose, WHY, Continuation Note, and why_this_might_be_important — four fields with related-but-distinct content axes. The distinction documented:

| Axis | Field | Level | Direction |
|---|---|---|---|
| 1 | Purpose | Object | Forward-facing |
| 2 | WHY | Object | Backward-facing to cycle |
| 3 | Continuation Note | Object | Forward-facing across sessions |
| 4 | why_this_might_be_important | Meta | LLM-introspective |

With Purpose cut (axis 1) and Continuation Note cut (axis 3), only two axes remain: WHY (axis 2) and why_this_might_be_important (axis 4). The 4-axis distinction documentation in routeman.md reduces to a 2-axis note. The schema's Reasoning group becomes a two-field group (WHY + why_important), each with its own content axis; the documentation can be a short prose note instead of a table.

This documentation reduction is contingent on this amendment shipping. If a future inquiry restores any of the cut fields, the table must be restored.

### What this amendment does NOT change

For clarity, the prior finding's other commitments stand:

- The file structure `routeman.md` + `_route.md` with routeman-native names throughout.
- The β-layer minimization (dropping the `multi_resolution_navigation` protocol's heavy machinery from routeman's vocabulary).
- The γ-field `why_this_might_be_important` REPAIR with cycle-anchor constraint.
- The δ-layer telemetry trim (5-6 essential metrics).
- The 7-status status vocabulary (down from the protocol's 10).
- The 16-type movement-type taxonomy.
- The adaptive-guidance mechanism with 4 modes.
- The multi-head navigation-session compatibility commitment.
- The empirical-evidence-gated revival path for the `why_this_might_be_important` field (if a future LAYER-2 audit shows filler-rate above threshold).
- The Open Questions / Monitoring section.

This amendment is **surgical**: only the 4 contested fields' verdicts are revised.

### Concrete amendment-delta against the prior finding's MUST list

The prior finding's MUST list contained 9 spec-edit delta rows. Six are unchanged. Three are revised; three are added (the new rows handle Continuation Memory group cleanup + 4-axis distinction reduction).

| # | Delta | Where (in `cognitive_harness/routeman/references/routeman.md`) | Action |
|---|---|---|---|
| **REVISED-1** | ~~Cut per-Route `Movement` field~~ → **RESTORE per-Route `Movement` field** | §5.4 per-Route entry schema, Route Meaning group | RESTORE (reverses prior MUST row) |
| **REVISED-2** | ~~Cut per-Route `Unlocks` field~~ → **RESTORE per-Route `Unlocks` field** | §5.4 per-Route entry schema, Route Meaning group | RESTORE (reverses prior MUST row) |
| **NEW-1** | Cut per-Route `Purpose` field | §5.4 per-Route entry schema, Route Meaning group | REMOVE |
| **NEW-2** | Cut per-Route `Continuation Note` field | §5.4 per-Route entry schema, Continuation Memory group | REMOVE |
| **NEW-3** | Cut Continuation Memory group-header from §5.4 schema | §5.4 group structure | REMOVE (group becomes empty after Continuation Note cut; group header itself is also removed; §5.4 now describes 5 purpose-groups instead of 6) |
| **NEW-4** | Update §5.4 schema documentation to reflect 5 purpose-groups (was 6) | §5.4 prose + table headers | REPAIR (replace "6 purpose-groups" with "5 purpose-groups"; remove the Continuation Memory group entry from the introductory listing) |
| **NEW-5** | Reduce the 4-axis content distinction documentation to a 2-axis note | §5.4 sub-section currently describing the 4-axis distinction (originally committed by 2026-05-23_18-58 §4) | REPAIR (replace the 4-axis table with a 2-line prose note: "WHY carries cycle-evidence justifying this route's enumeration (object, backward-facing). why_this_might_be_important carries the LLM's reasoning on why this route was enumerated (meta, introspective).") |

Existing prior-finding MUST rows that stand unchanged:
- The 7-status status enum reduction.
- The protocol-alias commitment drop (routeman-native names throughout).
- The §5.5 Route Map wrapper trim.
- The §3.6 re-invocation parameter replacement.
- The §5.6 Telemetry trim to 5-6 metrics.
- The `_route.md` description as §5.8.
- The per-Route writing rule for `why_this_might_be_important`.
- The §2.4 adaptive-guidance mechanism reference update.

After this amendment is applied, the live spec at `cognitive_harness/routeman/references/routeman.md` will reflect:
- Total per-Route fields: 11 (10 content + 1 contingent)
- Purpose-groups: 5 (Route Identity, Route Meaning, Route State, Reasoning, Adaptive Guidance)
- 4-axis content distinction documentation: replaced by 2-axis prose note
- The user's 4 objections: all addressed (2 fields restored; 2 fields cut)

## Inherited Commitments Re-test

The `_branch.md` declared CONTINUES FROM and 3 RELATED relationships. Each prior commitment that this finding's content depends on is re-tested.

### From `devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md` (the prior simplification finding — primary CONTINUES FROM)

| Commitment | Re-test status | Evidence / reason |
|---|---|---|
| 4-layer model (α/β/γ/δ) of routeman output | INHERITED-WITHOUT-RE-TEST | Out of this inquiry's scope (Layer Commitment STRUCTURAL field-level only); the model stands. |
| File structure `routeman.md` + `_route.md` | INHERITED-WITHOUT-RE-TEST | Out of scope; stands. |
| β-layer minimization (protocol's heavy machinery dropped) | INHERITED-WITHOUT-RE-TEST | Out of scope; stands. |
| γ-field REPAIR with cycle-anchor constraint | INHERITED-WITHOUT-RE-TEST | Out of scope; stands. The field's commitment is unchanged by this amendment. |
| δ-layer telemetry trim (5-6 metrics) | INHERITED-WITHOUT-RE-TEST | Out of scope; stands. |
| Per-Route 10 content fields + 1 contingent | **RE-TESTED — COMPOSITION CHANGED, TOTAL UNCHANGED** | Total field count = 11 stands. Composition changes: Purpose + Continuation Note out; Movement + Unlocks in. Net field count preserved; field-mix amended. |
| MUST list rows for "Cut Movement" and "Cut Unlocks" | **RE-TESTED — REVERSED** | Both cut verdicts empirically refuted by Route 1 evidence. Restore both. |
| MUST list rows for retaining Purpose + Continuation Note | **RE-TESTED — REVERSED IN OPPOSITE DIRECTION** | Both retention verdicts contested by user objections; both objections empirically sustained; cut both. |
| 4-axis content distinction documentation | **RE-TESTED — REDUCED TO 2-AXIS** | Contingent on the 4 fields' state; with Purpose + Cont.Note cut, the table reduces to a 2-axis prose note. |
| Multi-head navigation-session compatibility | RE-TESTED — STANDS | Schema composition swap does not affect the 3 compatibility properties (self-describing + worker-identifier + stable schema). |
| Empirical-evidence-gated revival path for `why_this_might_be_important` | INHERITED-WITHOUT-RE-TEST | Stands unchanged. |
| Open Questions / Monitoring section | INHERITED-WITHOUT-RE-TEST | Items not touched by this amendment stand. This finding adds new items (the cut fields' revival triggers; the project-process meta-observation). |

### From `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` (original meaning-layer design memo)

| Commitment | Re-test status | Evidence / reason |
|---|---|---|
| 3-layer identity (Navigational paradigm + cycle-consumer + prescriptive-extension) | INHERITED-WITHOUT-RE-TEST | Out of scope (meaning-layer); stands. |
| 16-type movement-type taxonomy | INHERITED-WITHOUT-RE-TEST | Out of scope; stands. |
| 10 features | INHERITED-WITHOUT-RE-TEST | Out of scope; stands. |
| Original 12 per-Route field commitments | RE-TESTED — 2 RESTORED, 2 CUT | Movement + Unlocks restored to original spec; Purpose + Continuation Note cut. |
| 9-mode failure framework (LAYER-1 + LAYER-2) | RE-TESTED — PRESERVED | The framework's mode count is unchanged. The Purpose/Cont.Note cuts don't remove an active audit substrate (filler-meta-reasoning audit substrate lives at why_important, which stands). |

### From `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` (the staged-mapping + meta-reasoning + 4-axis distinction)

| Commitment | Re-test status | Evidence / reason |
|---|---|---|
| Hybrid two-stage route mapping | INHERITED-WITHOUT-RE-TEST | Out of scope; stands. |
| Per-Route `why_this_might_be_important` field | INHERITED-WITHOUT-RE-TEST | The field stands; the prior finding's REPAIR constraint stands. |
| 4-axis content distinction (§4 table) | **RE-TESTED — REDUCED TO 2-AXIS** | With Purpose + Continuation Note cut, the table reduces to a 2-axis prose note. The reduction is consistent with the inquiry's empirical evidence (the level-distinction between Purpose and why_important was operationally invisible). |
| LLM-operational-characteristics-as-design-input principle | INHERITED-WITHOUT-RE-TEST | The principle stands; this inquiry's cuts are consistent with it (cutting fields whose population is variable matches the principle's guidance). |

## Next Actions

### MUST

- **What:** Apply the amendment-delta below to `cognitive_harness/routeman/references/routeman.md`. The list is concrete + spec-edit-actionable; the user can apply directly.

  | Delta | Where | Action |
  |---|---|---|
  | Restore per-Route `Movement` field | §5.4, Route Meaning group | RESTORE (reverses prior 27_00-51 MUST row) |
  | Restore per-Route `Unlocks` field | §5.4, Route Meaning group | RESTORE (reverses prior 27_00-51 MUST row) |
  | Cut per-Route `Purpose` field | §5.4, Route Meaning group | REMOVE |
  | Cut per-Route `Continuation Note` field | §5.4, Continuation Memory group | REMOVE |
  | Cut Continuation Memory group-header | §5.4 group structure | REMOVE (group is empty after Cont.Note cut) |
  | Update §5.4 schema description from "6 purpose-groups" to "5 purpose-groups" | §5.4 prose | REPAIR |
  | Reduce 4-axis content distinction table to 2-axis prose note | §5.4 sub-section currently with the 4-axis table | REPAIR |

  - **Who:** the user (or a follow-up materialization inquiry / spec-edit task).
  - **Gate:** condition-bound — when the user decides to materialize this amendment.
  - **Why:** without the spec edits, the amendment is documented in this finding but not embodied in the runtime spec; future routeman invocations would still produce per-Route entries following the prior shape.

### COULD

- **What:** When `/reflect` is eventually authored or revived (currently at `cognitive_harness/non-active/reflect/`), consider whether the project-process meta-observation noted in this finding (structural-convergence-without-empirical-test as a pattern worth detecting in /innovate runs) warrants surfacing.
  - **Who:** the inquiry or session that revives `/reflect`.
  - **Gate:** observable — when /reflect is revived AND at least 2 more instances of the structural-convergence-without-empirical-test pattern have surfaced across the corpus.
  - **Why:** N=1 (the prior finding's Movement+Unlocks cut) is observation; N=3+ would warrant promotion to a /innovate spec refinement (e.g., adding a rule that derivability claims require empirical anchors among the converging mechanisms).

- **What:** Monitor the next 5-10 routeman invocations after this amendment ships for any of the deferred-candidate revival triggers (functional-role-distinction needing explicit home; warmup-memory wanting per-route inline life).
  - **Who:** the user / project operator.
  - **Gate:** observable — over 5-10 post-amendment invocations.
  - **Why:** the 3 deferred candidates (States D, B, C) represent fallback paths if the cuts in State A prove to have removed load-bearing content. Active monitoring lets the revival paths fire on evidence rather than guess.
  - **Depends-on:** the MUST spec-edits item above. GATED.

### DEFERRED

- **What:** Promote Candidate #2 (State D — both Purpose and Continuation Note TIGHTENED rather than cut).
  - **Gate:** observable — if routeman invocations post-amendment surface load-bearing content that the cuts removed (filler-meta-reasoning failure-rate increase traceable to Purpose cut; warmup-memory needing per-route inline persistence not recoverable from `_route.md`).
  - **Why (if revived):** D preserves both fields with tightened specs; revival path that addresses problems-with-cuts without reverting to the prior schema.

- **What:** Promote Candidate #3 (State B — Purpose CUT + Continuation Note TIGHTEN+optional) OR Candidate #4 (State C — Purpose TIGHTEN + Continuation Note CUT).
  - **Gate:** observable — if user wants partial-movement and only one field's cut proves problematic.
  - **Why (if revived):** asymmetric resolution; preserves whichever field's cut surfaced problems while keeping the other cut.

- **What:** If 2+ more instances of structural-convergence-without-empirical-test surface across the project corpus, formalize as a /innovate spec refinement.
  - **Gate:** observable — N≥3 instances.
  - **Why (if revived):** the pattern is real (this finding is N=1); if it recurs, it's a load-bearing /innovate failure mode worth structural intervention.

## Reasoning

**Why this amendment over the alternatives.**

The Critique tested 4 candidates (States A, B, C, D — varying Purpose and Continuation Note refinements across cut/tighten). All 4 PASSed the cross-coupling check (P5: no homelessness for any combination); the choice was a trade-off question rather than a structural-validity question.

State A (the committed shape) won on these axes:
- **Maximally engages user-direction signal.** The user expressed objections in language ranging from firm ("shouldnt have") to soft ("maybe ... not needed"); State A engages both with cuts. The alternative (State D — tighten both) would preserve both fields, contradicting both objections in form.
- **Empirical-evidence backing for both cuts.** Purpose's redundancy and Continuation Note's axis-variance are both empirically observable in the 3 sampled real routes; both cuts are evidence-grounded.
- **Mechanism-independence convergence (6 of 8 mechanisms from different upstream grounds).** State A's robustness exceeds the alternatives'.
- **Net-zero schema size change.** Restoring 2 + cutting 2 = same total field count as prior finding. The schema is restructured, not grown or shrunk; net-zero size makes this an obvious refinement rather than a wholesale redesign.

State D was tested as the structural alternative (preserve-with-tighten); REFINE verdict because it fails to engage the user's stated direction (the user asked to cut Continuation Note, D keeps it). State D survives as the REVIVAL path: if State A's cuts later prove to have removed load-bearing content, D is the lowest-cost restoration path.

States B + C were tested as asymmetric hybrids; both REFINE verdicts because they sustain user objections only partially. Both survive as partial-movement options in Open Questions.

**Why the user's "maybe" wording on Purpose is treated decisively.**

The user wrote "maybe Purpose is not needed since we already have goal, why and why important." The word "maybe" is softer than the wording on Continuation Note ("shouldnt have"). State A treats both with the same decisiveness (cut).

The justification: the larger framing of the user's message was "lets think it through" — an invitation to test, not a request to defer. The testing — empirical observation of real-route examples + structural mechanism convergence from 6 of 8 mechanisms across different upstream grounds — produced cut as the verdict. The "maybe" is honored as the invitation that opened the inquiry, not as a hesitation about the verdict's certainty.

The 3 alternative candidates (D, B, C) are preserved as revival triggers; if the user (or future operational evidence) wants to revisit, the revival paths are concrete. This is the inquiry's response to the "maybe": test rigorously, surface alternatives explicitly, ship the cut, preserve revival.

**Why the project-process meta-observation matters.**

The prior simplification finding's Innovation Phase 2 reported "5 of 7 mechanisms converge on cutting Movement + Unlocks" with STRONG signal. The convergence appeared structurally sound. But none of the 7 mechanisms tested the derivability claim empirically against real artifacts.

Empirical inspection — performed in this inquiry — refutes the cuts. The convergence was confidently wrong.

This is the first surfaced instance of a project-process pattern: when structural mechanisms converge on a derivability claim, the convergence can be confidently wrong if none of the mechanisms includes an empirical anchor. The pattern is named for /innovate but may generalize: any structural argument about whether content X is reconstructable from content Y should anchor in an empirical example of X and Y.

For now: noted as N=1 (this finding). If 2+ more instances surface, /innovate's spec may warrant a refinement: "When mechanisms converge on a derivability claim, at least one converging mechanism must include an empirical test against real artifacts." This is the kind of pattern /reflect is designed to detect; flagged for /reflect's eventual consideration.

**What this amendment does NOT claim.**

This amendment does NOT claim the prior simplification finding was wrong in its larger framing. The 4-layer model is sound. The β-layer minimization is sound. The file structure (`routeman.md` + `_route.md`) is sound. The γ-field REPAIR is sound. The multi-head navigation-session compatibility is sound. The empirical-evidence-gated revival path for `why_this_might_be_important` is sound.

This amendment claims the prior finding's per-Route schema commitments at the field level were partially wrong (2 cuts that should have been keeps; 2 keeps the user contested that turned out to be cuts on empirical inspection). The fix is surgical.

**Strongest prosecution against this amendment.**

The strongest counter: this amendment treats the user's "maybe" on Purpose as decisively as their firm wording on Continuation Note. A reader could fairly say: "you should have preserved the 'maybe' uncertainty in your verdict — Purpose-TIGHTEN (State C) would have honored the softer wording better than Purpose-CUT (State A)."

The defense: testing was rigorous (4 candidates evaluated, 12 dimensions scored, multi-axis prosecution applied); empirical evidence sustains cut over tighten; the 3 alternative candidates (including State C) are explicitly preserved as revival triggers. The "maybe" is honored by the inquiry's process, not by the verdict's softening — testing produced cut; the alternatives stand if testing was wrong.

## Open Questions

### Monitoring

- **Functional-role-distinction surfacing post-amendment.** Per Critique's specific-failure-case analysis: if future routeman invocations produce Route Maps where multiple routes have distinct functional roles (e.g., "audit substrate provider" vs "test scaffolding"), the distinction now lives only in WHY's cycle-evidence narrative or why_important's meta-introspection. If those fields drift toward operational-detail content over time, the functional-role distinction loses its home. Monitor: do post-amendment Route Maps show functional-role distinction surviving in WHY/why_important, or does the distinction disappear?

- **Warmup-memory recoverability from `_route.md`.** The committed shape removes Continuation Note relying on `_route.md`'s `History` and `Last Invocation` sections to carry forward-warmup memory. Monitor: when a future agent resumes a routeman context, does `_route.md` provide enough warmup signal, or does per-route inline content prove necessary?

- **Project-process meta-pattern observation count.** N=1 (this finding). Watch for N=2 instances of structural-convergence-without-empirical-test. If observed, escalate the pattern to /reflect's review.

- **Two-route-Meaning-group population.** Movement + Unlocks both live in Route Meaning group now (Purpose cut). Monitor whether the group's content is rich enough that operators read it as a coherent group, or whether the two fields could be redistributed.

### Blocked

- **The 4-axis distinction documentation reduction's permanence.** Blocked on this amendment shipping. If a future inquiry restores any of the cut fields, the table must be restored. The reduction is contingent on the cut verdicts holding.

- **LAYER-2 audit protocol authoring.** Blocked until Q4 in the routeman frontier-questions inquiry is addressed. Same as prior finding's Blocked item; stands unchanged.

### Research Frontiers

- **Empirical-grounding requirement for structural convergence in /innovate.** N=1 instance surfaced in this inquiry. If N≥3 instances surface across the corpus, formalize as a /innovate spec refinement: structural mechanisms converging on a derivability claim must include at least one empirical anchor.

- **Field-group population dynamics.** With Route Meaning group reduced to 2 fields (Movement + Unlocks) and Continuation Memory group cut entirely, the 5-group structure may evolve. Monitor for whether one-field or two-field groups stay coherent over time or want to merge/redistribute.

### Refinement Triggers

- **If post-amendment Route Maps show functional-role-distinction disappearing,** this finding's Purpose-CUT verdict re-opens. Promote Candidate #2 (State D) or Candidate #4 (State C) with empirical evidence.

- **If `_route.md` proves insufficient for warmup-memory recovery,** this finding's Continuation Note-CUT verdict re-opens. Promote Candidate #2 (State D) or Candidate #3 (State B) with empirical evidence.

- **If a future LAYER-2 audit shows filler-meta-reasoning failure-rate above threshold AND the diagnosis traces to the Purpose cut,** revisit and promote State D with the audit evidence backing.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVLw
i have some questions for 

 devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md

i disagree with removing movement and unlocks

i think we shouldnt have Continuation memory, it will bloat the md file 

maybe Purpose is not needed since we already have goal, why and why important ...
```

</details>
