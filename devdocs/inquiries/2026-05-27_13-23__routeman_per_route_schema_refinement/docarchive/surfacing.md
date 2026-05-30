# Surfacing — routeman_per_route_schema_refinement

## User Input

```text
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-27_13-23__routeman_per_route_schema_refinement/_branch.md

Purpose: surface territory needed to adjudicate four specific per-route schema field decisions (Movement, Unlocks, Continuation Note, Purpose) against user objections. Bias relevance toward FIELD-LEVEL distinctions: what each field's content axis IS, what the field looks like at the routeman.md surface, what's gained vs lost by keeping/cutting each field.

Territory specification (explicit-bounded): 5 files — current routeman spec §5.4 + prior simplification finding + prior docarchive (innovation.md + sensemaking.md) + original 14-39 design memo + 18-58 four-axis distinction + 2026-05-25 readiness Route Map for empirical observation.

Save to surfacing.md.
```

---

## Reception echo

- **Mode**: artifact case (items exist)
- **Entry**: signal-first (purpose narrowly defined: 4 specific fields)
- **Territory**: explicit-bounded; Boundary-discovery sub-phase skipped
- **Prior workspace**: none (first invocation of this inquiry)
- **Prior artifact**: none

---

## Traversal Trace

### Region A — Current per-route schema specification

| # | Region | Item identifier | Relevance | Conf | Recency annotation | Step note |
|---|---|---|---|---|---|---|
| 1 | A | `cognitive_harness/routeman/references/routeman.md` §5.4 per-route entry schema (Route Identity / Route State / Route Meaning / Reasoning / Adaptive Guidance / Continuation Memory groups; 12 fields total) | **core** | HIGH | `{source: filesystem, value: 2026-05-25T01:14Z}` | Canonical per-field content-axis definitions: Movement = "Descriptive transition: current state → target state"; Unlocks = "Downstream routes / checks / decisions / artifacts; `unknown` when unclear"; Purpose = "What this route would serve, reveal, or unlock"; Continuation Note = "What a future agent resuming this route should remember about it". |

### Region B — Prior finding's reasoning for each contested verdict

| # | Region | Item identifier | Relevance | Conf | Recency annotation | Step note |
|---|---|---|---|---|---|---|
| 2 | B | `devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md` — Finding Summary "What's removed from the current spec" paragraph | **core** | HIGH | (recent, today) | Verbatim verdict-reasoning: "Per-route `Movement` and `Unlocks` fields are removed because they are derivable from other fields (Movement from Direction → Goal; Unlocks from forward-chain reasoning over Status + Blocked By)." This is the prior finding's derivability claim — the precise thing the user contests. |
| 3 | B | `devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md` — MUST delta list rows for the four contested fields | **core** | HIGH | (recent) | The MUST delta list specifically commits: "Cut per-Route `Movement` field" (REMOVE); "Cut per-Route `Unlocks` field" (REMOVE). Continuation Note + Purpose stay (not in the cut list). |
| 4 | B | `devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/finding.md` — Per-Route entry schema table | **core** | HIGH | (recent) | Lists 10 + 1 contingent field set. Notice: Movement, Unlocks already absent from the table; Continuation Note + Purpose present. Confirms which fields the prior finding's verdict cut vs kept. |

### Region C — Prior docarchive (upstream reasoning that drove the verdicts)

| # | Region | Item identifier | Relevance | Conf | Recency annotation | Step note |
|---|---|---|---|---|---|---|
| 5 | C | `docarchive/innovation.md` P1 α-layer adjudication block | **core** | HIGH | (recent) | Where the derivability argument originated. Specifically: "Absence Recognition (redesign-level): What's PRESENT IN DIFFERENT FORM: Direction + Goal already implies the Movement transition; Status + Blocked By already implies Unlocks reverse-chain. Movement and Unlocks are PRESENT IN DIFFERENT FORM." The mechanism that surfaced the claim. |
| 6 | C | `docarchive/innovation.md` P1 mechanism convergence summary | **sub** | HIGH | (recent) | Noted: 5 of 7 mechanisms converged on cutting Movement + Unlocks. Convergence was STRONG, BUT none of the 7 mechanisms tested the derivation EMPIRICALLY against real route examples. The convergence was structural-argument-only. |
| 7 | C | `docarchive/sensemaking.md` Ambiguity 3 ("Enumeration — what specifically is preserved?") | **core** | HIGH | (recent) | Set the content-vs-wrapping boundary: "Per-route SCHEMA WRAPPER fields ... are NOT enumeration content — they are persistence-layer wrapping." This boundary justified treating Movement/Unlocks as "structure" rather than "content." User's objection challenges this classification. |
| 8 | C | `docarchive/critique.md` D1 dimension score for Candidate #1 | **side** | MEDIUM | (recent) | D1 (Enumeration preservation at content-level) scored PASS for the committed candidate, with reasoning: "10 fields preserved + γ-field length-bounded; route SET not compressed." But the PASS was conditional on accepting the Ambiguity 3 boundary; Critique did not adversarially re-test which side of the boundary Movement and Unlocks belong on. |

### Region D — Original 14-39 design memo (each field's original intent)

| # | Region | Item identifier | Relevance | Conf | Recency annotation | Step note |
|---|---|---|---|---|---|---|
| 9 | D | `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` — original 16-attribute schema commitment | **sub** | MEDIUM | (folder) | The original schema had 12 per-Route + 4 wrapper = 16 attributes. Movement, Unlocks, Purpose, Continuation Note were all original commitments. Movement's intent: "Descriptive transition: current state → target state" — the FROM-TO that Direction (action-name) + Goal (target-state-label) compose into a flow-statement. Unlocks: forward-chain enumeration of what gets unblocked. Purpose: functional role; what the route serves. Continuation Note: cross-session memory. |

### Region E — The 18-58 four-axis content distinction (THE direct test bed for redundancy claims)

| # | Region | Item identifier | Relevance | Conf | Recency annotation | Step note |
|---|---|---|---|---|---|---|
| 10 | E | `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` §4 — 4-axis content distinction table | **core** | HIGH | (folder) | The verbatim table distinguishing 4 reasoning-side fields. Reproduced here because it is the project-canonical answer to "are Purpose vs WHY vs Continuation Note vs why_this_might_be_important distinct or redundant?" |

The §4 four-axis distinction (loaded into workspace per surfacing's draw-into-attention):

| Axis | Field | What it carries | Level | Direction |
|---|---|---|---|---|
| 1 | **Purpose** | What the route would serve, reveal, or unlock | Object | Forward-facing |
| 2 | **WHY** | Evidence from cycle output that makes the direction worth considering | Object | Backward-facing to cycle |
| 3 | **Continuation Note** | What a future warm-up should remember about this route | Object | Forward-facing across sessions |
| 4 | **why_this_might_be_important** | The LLM's reasoning on why this route was enumerated; what signal it picked up on | **Meta** | LLM-introspective |

This table is the DIRECT TEST BED for the user's Purpose-redundancy claim. The user's framing: "we already have goal, why and why important." Test: does the union of Goal + WHY + why_important cover what Purpose's "object, forward-facing" content axis carries?

Note that Goal is NOT in this table because Goal is a Route Identity field (compact target-state label), not a Reasoning field. The 4-axis table is intra-Reasoning-group. The user's claim crosses groups (Purpose is Reasoning; Goal is Identity) — the test must consider the cross-group case.

### Region F — Real per-route examples for empirical observation

| # | Region | Item identifier | Relevance | Conf | Recency annotation | Step note |
|---|---|---|---|---|---|---|
| 11 | F | `devdocs/routeman/2026-05-25__routeman-ecosystem-readiness.md` — 22 real route entries | **core** | HIGH | `{source: filesystem, value: 2026-05-25T12:18Z}` | Empirical evidence. The only existing artifact where all 4 contested fields are populated across many routes. Each route's Movement / Unlocks / Purpose / Continuation Note is observable in actual use. Sensemaking can test derivability claims + redundancy claims + bloat claim against this material. |

Specific routes worth attention during downstream Sensemaking (drawn into workspace as concrete-example items):

**Route 1 (Author Q5 file-system protocol) — substantive example:**
- Direction: "Author Q5 file-system protocol"
- Goal: "`cognitive_harness/protocols/inquiry_filesystem_protocol.md` exists with content per the Q5 finding."
- **Movement:** "Q5 protocol designed (in the 07-30 finding) → Q5 protocol file authored at canonical location."
- **Unlocks:** "Routes 2 (Q6 contracts live in this file), 7 (process-layer can specify scan + persist steps with concrete protocol references), 8 (integration-layer document can cross-reference Q5 properly), 22 (testing benefits from Q5 protocol being real)."
- **Purpose:** "Q5's protocol is the canonical authority for file-system-mediated input to routeman. Without the protocol file, routeman SKILL.md's planned cross-reference (when authored as project-integration) would target a missing file; the lazy load would emit INFO per the missing-protocol-file degraded-functionality pattern, and routeman would run with degraded scan/validate functionality."
- WHY: "the Q5 finding has the full design ready; only the file-authoring action separates design-from-runtime."
- why_this_might_be_important: "without Q5 file, the planned protocol-cross-reference layer of routeman cannot be exercised in practice; the missing-protocol-file degraded-functionality mode would fire on every routeman invocation."
- **Continuation Note:** "Q5 protocol file is the most-referenced new protocol in the routeman ecosystem; authoring it first removes blockers for routes 2, 7, 8."

Test observations from this example (offered to Sensemaking, not adjudicated here):
- **Movement** carries "current state" (Q5 designed but not authored) that is NOT in Direction or Goal. Direction = action verb-phrase; Goal = target-state-label. Current state is missing from both — Movement is where it lives.
- **Unlocks** carries enabling-relationships (route 1 unlocks routes 2, 7, 8, 22) — routes 7 and 22 are NOT in route 1's Blocked By (other-direction); routes 2's Blocked By DOES name route 1; routes 8's Blocked By is `none` BUT Unlocks claims route 8 benefits. The forward-chain through Status+BlockedBy doesn't fully reconstruct Unlocks; Unlocks includes "enables/improves" relationships, not just "removes hard blocker."
- **Purpose** carries functional/consequential information ("canonical authority"; "without it: degraded-functionality fires"). Partial overlap with why_this_might_be_important's content ("without Q5 file: degraded-functionality mode fires every invocation"). The two fields say similar things in different wording.
- **Continuation Note** is short (1 sentence) but adds an orchestration-specific signal ("authoring it first removes blockers for routes 2, 7, 8") that's not directly in any other field.

**Route 6 (Write deprecated_navigation/_archive_note.md) — small example:**
- Direction: "Write deprecated_navigation/_archive_note.md"
- Goal: "archive note + pointer to routeman exists"
- **Movement:** "deprecated_navigation has no archive note → archive note present."
- **Unlocks:** "future-reader navigation; backwards-compat traceability."
- **Purpose:** "completes the migration by documenting why deprecated_navigation is retained; helps future readers understand the rename."
- WHY: "small DOCUMENT addition."
- why_this_might_be_important: "preserves the rename rationale at the deprecated folder's location for any reader landing there."
- **Continuation Note:** "Brief note (~1 paragraph) sufficient; the design rationale lives in the 14-39 design memo + this Route Map."

Test observations:
- Movement is short and almost trivially derivable from Direction + Goal in this case (the target is binary "no note → note exists"). For trivial routes, Movement adds little.
- Unlocks here is forward-looking abstract ("future-reader navigation"; "backwards-compat traceability") — these aren't routes; they're consequences. NOT derivable from Status+Blocked By chain.
- Purpose contains substantive content distinct from WHY ("small DOCUMENT addition") which is sparse here.
- Continuation Note is meta-content (about the route itself's nature, "brief note sufficient") rather than memory-for-future-warmup. The 18-58 §4 definition says "what a future warm-up should remember about this route" — this Continuation Note partly fits that, partly is route-meta-comment.

**Route 10 (deferred route) — minimal example:**
- Continuation Note: "Deferred; revive when there's operational evidence the primitive grounding is needed."
- Purpose: "ground routeman's primitive composition in the project's typed primitive substrate."
- Movement: "routeman.md lists primitives in self-contained form → primitives grounded in project's typed primitive set."

Test observations:
- Continuation Note here IS forward-warmup memory ("revive when ..."). Fits the 18-58 definition cleanly.
- Movement specifies the current state ("self-contained form") that's not in Direction/Goal.

### Region G — Adjacent items (sub/side relevance)

| # | Region | Item identifier | Relevance | Conf | Recency annotation | Step note |
|---|---|---|---|---|---|---|
| 12 | G | The prior finding's β/γ/δ layer commitments | **side** | HIGH | (recent) | Explicitly out of scope — NOT re-litigated. Surfacing notes their existence to confirm scope-discipline: the inquiry is α-layer field-level only. |
| 13 | G | The 18-58 §6 LAYER-2 audit framework (false-depth + filler-meta-reasoning) | **umbrella** | MEDIUM | (folder) | Background: any FIELD-level decision interacts with the LAYER-2 audit substrate. Cutting fields cuts audit surfaces. Sensemaking should note this when evaluating cuts. |
| 14 | G | Project conventions (underscore-prefix; canonical naming; append-only) per `docs/canon/runtime_environment/folder_based.md` | **umbrella** | MEDIUM | (recent) | Background: these conventions constrain any per-route schema decision. Cutting fields shouldn't break the conventions (they don't directly here). |

---

## State Summary

### Territory specification echo

- Type: artifact case, explicit-bounded
- Regions covered (7): A current schema; B prior finding verdicts; C prior docarchive reasoning; D original design memo; E 18-58 four-axis distinction; F real route examples; G adjacent context
- Items traversed: 14 (with 3 specific routes deep-read from Region F for empirical observation)

### Purpose specification echo

Surface field-level definitions, prior verdicts, and empirical examples for adjudicating 4 specific per-route schema field decisions (Movement, Unlocks, Continuation Note, Purpose). Bias toward field-level distinctions and empirical observation.

### Coverage map

| Region | Items | Coverage | Aggregate relevance |
|---|---|---|---|
| **A** — current schema | 1 | confirmed | core |
| **B** — prior verdicts | 3 | confirmed | core |
| **C** — prior docarchive | 4 | confirmed | core/sub/side |
| **D** — original design memo | 1 | scanned | sub |
| **E** — 18-58 four-axis distinction | 1 | confirmed (table reproduced inline) | core |
| **F** — real route examples | 1 (+ 3 specific deep-read routes) | confirmed (3 route entries fully extracted) | core |
| **G** — adjacent context | 3 | scanned | side/umbrella |

### Confirmed-absent regions

- No other inquiry artifacts directly discuss the 4 contested fields' content axes beyond the 18-58 §4 table (confirmed by absence in searches across active inquiries).
- No tests / unit-tests / runtime checks in the project that operate on per-route field presence/absence (confirmed: this is markdown spec land, no automated field-validation).

### Concept-names list (vocabulary surfaced)

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| **Movement field** | structural-reference | #1, #9 | Per-route schema field; content axis = descriptive transition current state → target state |
| **Unlocks field** | structural-reference | #1, #9 | Per-route schema field; content axis = downstream routes / checks / decisions / artifacts |
| **Purpose field** | structural-reference | #1, #10 | Per-route schema field; content axis (per 18-58 §4) = object-level, forward-facing — what the route would serve, reveal, or unlock |
| **Continuation Note field** | structural-reference | #1, #10 | Per-route schema field; content axis (per 18-58 §4) = object-level, forward-facing across sessions — what a future warm-up should remember about this route |
| **Derivability argument** | coined-term | #5 | The structural claim that field X's content can be reconstructed from other fields without information loss; load-bearing for the Movement/Unlocks cut verdicts |
| **PRESENT IN DIFFERENT FORM** | vocabulary | #5 | Absence Recognition redesign-level claim that an apparent absence is actually an existing thing reframed; the mechanism that drove the cut verdicts |
| **Content-vs-wrapping boundary** | coined-term | #7 | The classification (from prior Sensemaking Ambiguity 3) that distinguishes enumeration content (preserved) from schema wrapping (cuttable); the boundary where Movement and Unlocks were placed in the cut category |
| **4-axis content distinction** | structural-reference | #10 | The 18-58 §4 table distinguishing Purpose / WHY / Continuation Note / why_this_might_be_important by Level (Object/Meta) × Direction |
| **Bloat (in user's framing)** | vocabulary | _branch.md user input | Per the user's reason for objecting to Continuation Note: total file size cost of carrying the field across N routes. Empirically: each Continuation Note is short (~1 sentence) but multiplied across 22 routes in the readiness example, contributes ~22 sentences |
| **Forward-chain reasoning over Status + Blocked By** | coined-term | #2 | The specific derivability claim for Unlocks; the prior finding's argument that Unlocks can be reconstructed by reading other routes' Blocked By fields to compute what unblocks when |

### Recency distribution

| Region | Newest | Oldest | no-mtime-count | total items |
|---|---|---|---|---|
| A | 2026-05-25 | 2026-05-25 | 0 | 1 |
| B | 2026-05-27 | 2026-05-27 | 0 | 3 |
| C | 2026-05-27 | 2026-05-27 | 0 | 4 |
| D | (folder) | (folder) | 1 | 1 |
| E | (folder) | (folder) | 1 | 1 |
| F | 2026-05-25 | 2026-05-25 | 0 | 1 |
| G | (recent) | (recent) | 0 | 3 |

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-27T13:24Z
extent: 14 items across 7 regions; 4 core items (schema spec, prior verdict text, 18-58 §4 table, real readiness Route Map) deep-read; 3 specific route entries from Region F extracted in full for empirical testing; remaining items scanned at relevance-tagging depth.
```

### Frontier flags

These are open questions surfaced by surfacing that downstream Sensemaking should engage:

- **FF-Su1 — Derivability claims need empirical testing.** The prior finding's "Movement derivable from Direction → Goal" and "Unlocks derivable from forward-chain reasoning over Status + Blocked By" are structural arguments. Surfaced examples (Route 1, Route 6) suggest BOTH claims fail under empirical inspection: Movement carries current-state information not in Direction/Goal; Unlocks carries enabling relationships beyond strict blocking-chains. Sensemaking should test rigorously.

- **FF-Su2 — Continuation Note's content axis variance.** The 18-58 §4 definition is "what a future warm-up should remember about this route." Route 10's Continuation Note fits this cleanly. Route 1's Continuation Note ("authoring first removes blockers for 2, 7, 8") fits partially. Route 6's Continuation Note ("brief note ~1 paragraph sufficient") is meta-comment about the route itself, not warmup memory. The field is being populated INCONSISTENTLY in practice. This is empirical evidence relevant to both the user's bloat-claim AND a possible deeper claim that Continuation Note's axis isn't sharp.

- **FF-Su3 — Purpose vs why_this_might_be_important overlap.** Route 1's Purpose ("canonical authority; without it: degraded-functionality fires") and why_this_might_be_important ("without Q5 file: degraded-functionality mode fires every invocation") have substantively overlapping content. The 18-58 §4 distinction places them at different LEVELS (object vs meta), but in practice they describe similar consequential reasoning. Sensemaking should evaluate whether the level distinction is operationally meaningful.

- **FF-Su4 — "Bloat" claim needs operational definition.** The user says Continuation Memory "will bloat the md file." Empirically: 22 short notes (1-sentence-ish each) = ~22 lines = small per-file overhead. The bloat claim is real but small-scale. Sensemaking should ask: is the bloat-objection structural (the field principle is wrong) or quantitative (the field's size cost > its value)? Different objections call for different verdicts.

- **FF-Su5 — Goal's role in the Purpose-redundancy argument.** The user's exact framing: "we already have goal, why and why important." Goal is a Route Identity field (compact target-state-label), NOT in the 18-58 §4 four-axis table. The user is making a cross-group redundancy claim (Purpose vs Goal + WHY + why_important spanning Identity + Reasoning groups). Sensemaking must engage this specifically — the §4 table alone doesn't resolve the user's claim because the table only covers Reasoning-group fields.

- **FF-Su6 — Convergence-without-empirical-test pattern.** Prior Innovation's P1 reported "5 of 7 mechanisms converge on cutting Movement + Unlocks" with STRONG signal. BUT none of the 7 mechanisms tested derivability EMPIRICALLY against real route examples. The convergence was structural-argument-only. This is a pattern worth flagging for the project's spec-process: structural convergence can be confidently wrong if the structural argument has a hidden empirical assumption. (Not a Sensemaking-this-inquiry concern; a meta-observation for project-level Reflection.)

- **FF-Su7 — The Ambiguity 3 content-vs-wrapping boundary may itself be wrong-placed.** Movement and Unlocks were classified as "wrapping" (cuttable) rather than "content" (preserved) under the prior Sensemaking's Ambiguity 3 resolution. If empirical examples show Movement and Unlocks carry distinct content, the classification was wrong. Sensemaking should consider whether to keep/move the boundary OR re-locate these two fields to the content side.

- **FF-Su8 — Critique D1 did not test the boundary classification.** Critique's D1 dimension (Enumeration preservation at content-level) scored Candidate #1 PASS based on accepting the Ambiguity 3 boundary uncritically. The pass-verdict didn't include "is this thing actually wrapping or actually content?" prosecution. This is a Critique gap that the current inquiry's Critique should NOT repeat.

---

## Telemetry

- **Mode:** artifact case + signal-first entry
- **Cycles run:** 1 (territory exhaustively traversed at coarse-with-deep-spots resolution; the 3 specific route examples from Region F provide empirical anchors)
- **Items enumerated:** 14
- **Relevance distribution:**
  - **core:** 7 items (Regions A, B, C-partial, E, F)
  - **sub:** 3 items (D, C-partial)
  - **side:** 2 items (C-partial, G-partial)
  - **umbrella:** 2 items (G)
- **Items with mtime:** 12 / 14; **without mtime:** 2 / 14 (folder paths in Regions D, E)
- **Boundary-discovery sub-phase fired:** no (explicit-bounded)
- **Workspace-overload trigger fired:** no
- **Convergence criteria status:** territory exhaustively traversed; the inquiry's scope is bounded (4 specific fields); no items filtered at uncertain-relevance level; nothing rejected.
- **Frontier flags emitted:** 8 (FF-Su1 through FF-Su8)
- **Failure modes checked (LAYER-1 + LAYER-2):**
  - Missed-relevance — no
  - Surfaced-irrelevance — no (umbrella items justified for scope-discipline)
  - Over-coverage — no
  - Territory-mis-binding — no
  - Workspace overload — no
  - Artifact under-specification — no (every Trace entry has item identifiers; concept-names list complete)
  - Workspace-artifact desync — no (capture-at-moment honored)
  - Recency-Equates-Idleness — no (recency annotation captured; never used as relevance proxy)
  - Recency-Bias-Filter — no
  - LAYER-2 modes — no (no cross-item relational structure asserted beyond per-item tags; purpose explicit throughout; relevance set on per-item content vs purpose)

---

## Self-assessment verdict: **PROCEED**

All convergence criteria met. No failure modes raised. 8 frontier flags hand off specific empirical-testing tasks to Sensemaking — particularly FF-Su1 (derivability empirical test), FF-Su3 (Purpose vs why_important overlap), FF-Su5 (cross-group Purpose-redundancy claim including Goal), and FF-Su8 (avoid repeating Critique's prior gap of not testing the boundary).

Key asymmetry surfaced: the prior finding's verdicts on Movement and Unlocks rested on a structural-argument-only convergence (no empirical test). Surfaced empirical examples (specific real routes from the readiness Route Map) suggest the derivability claims may fail under inspection. Sensemaking now has the comparison material it needs.

Output ready for Sensemaking consumption.
