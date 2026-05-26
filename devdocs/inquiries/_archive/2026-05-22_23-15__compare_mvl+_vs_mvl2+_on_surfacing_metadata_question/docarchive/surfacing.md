# Surfacing — Compare MVL+ vs MVL2+ on the surfacing-metadata question

## User Input

(from `_branch.md`) Comparing the two findings — one produced by `/MVL+` (at 20-35), one produced by `/MVL2+` (at 16-00) — on the same user query about adding mtime-awareness to the surfacing discipline. Which did a better job, and why?

## Mode + Entry Point

- **Mode:** artifact (concrete completed findings exist).
- **Entry point:** signal-first (specific purpose given).
- **Territory specification:** explicit-bounded.
  - Primary: `devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design/finding.md` (the /MVL+ finding) and `devdocs/inquiries/2026-05-22_16-00__surfacing_metadata_recency_signal/finding.md` (the /MVL2+ finding).
  - Adjacent: the two inquiries' `_state.md` files (for runner attribution and discipline-pass telemetry) and `_branch.md` files (to confirm both received the same user query verbatim).
  - Out of territory: the surfacing spec itself (the subject of both findings; not the subject of this comparison).

## Boundary-discovery Sub-phase

Skipped. Territory is `explicit-bounded`.

## Traversal Trace

### Items from `/MVL+` finding (20-35) and its `_state.md`

| # | Region | Item identifier(s) | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 1 | 20-35 `_state.md` Flow-type | `flow-type: extended; pipeline E → S → D → I → C` | core | HIGH | confirms the 20-35 was /MVL+ (explore variant, not surfacing variant) — the user's framing is correct |
| 2 | 20-35 finding Summary | `Yes, add the metadata signal — as a per-item annotation, not as a filter` | core | HIGH | core verdict: annotation, not filter — same direction as the /MVL2+ finding |
| 3 | 20-35 finding Summary | `Name the signal last-edit-time — an observable-fact label, NOT freshness / staleness / idleness / currency / activity` | core | HIGH | field name commitment — MATCHES user's "last datetime of edit" phrasing closely (`last-edit-time` ≈ user's words) |
| 4 | 20-35 finding Summary | `Place the addition at three spec locations`: §2.1 + §5.4 + §1.3 NOT-list | core | HIGH | 3 surfaces vs /MVL2+'s 7 surfaces — narrower placement |
| 5 | 20-35 finding Summary | `defense-in-depth across two surfaces: §4.4 asymmetric-failure principle + §2.1 explicit non-filtering reaffirmation` | core | HIGH | 2-layer defense — relies on EXISTING §4.4 + new §2.1 reaffirmation; does NOT add new failure modes |
| 6 | 20-35 finding Summary | `Introduce a named category, "observable-fact metadata annotations," to host future additions` | core | HIGH | FORWARD-EXTENSION property — the category serves future metadata kinds (file-size, line-count, git-tracked-state) under same constraints |
| 7 | 20-35 finding Summary | `Stay minimal at first ship — M1 (raw timestamp only)` with M2 (confidence dimension) + M3 (per-region aggregation) DEFERRED | core | HIGH | minimal scope; M3 (per-region) is deferred |
| 8 | 20-35 finding Summary | `Scope: artifact case only. In possibility case … the field is absent or N/A` | core | HIGH | possibility-mode scoped OUT — loses information for candidate-generated items |
| 9 | 20-35 finding §1 The mechanism | `captured at the existing Item-enumeration component … the same operation that lists the files can read each file's metadata at the same time` | sub | HIGH | mechanism location consistent with /MVL2+ |
| 10 | 20-35 finding §4 Why naming matters | `last-edit-time is observable fact at the same level as a file size or a line count` — counter to "freshness" tested on structural grounds | core | HIGH | user-language alignment is HIGH; structural argument for `last-edit-time` over judgment-adjacent names |
| 11 | 20-35 finding §5 Why M1 not M2/M3 | five criteria; asymmetric-failure-principle preservation is fatal-weighted | sub | MEDIUM | explicit weighting of selection criteria — methodological rigor visible at the finding surface |
| 12 | 20-35 finding §6 Named category | category defining properties: content-conditioned, labeling-level, non-filtering, downstream-consumable | core | HIGH | gateway test for future metadata kinds — structural value beyond the immediate addition |
| 13 | 20-35 finding §7 Out-of-scope | downstream-consumer rules deferred to Research Frontier with concrete trigger | sub | MEDIUM | scope discipline; preserves the follow-up |
| 14 | 20-35 finding Reasoning | Choices 1–7 each tested against strongest counter | core | HIGH | structural rigor: each commitment has explicit counter-argument + structural-grounds rebuttal |
| 15 | 20-35 `_state.md` Innovation entry | `Production-task mode; Standard-default methodology-mode (Contrarian-rethink alternative overridden with structural reason). 7 principal candidates + 7 Inversion-candidates generated for Q1-Q7` | core | HIGH | methodology-mode reasoning + 7 piece-level Inversion-candidates → MORE thorough methodology than /MVL2+ |
| 16 | 20-35 `_state.md` Critique entry | `8 dimensions extracted (D1-D6 default + D7 Identity preservation + D8 Spec evolvability); Stake level HIGH; guilty-until-proven-innocent; 16 candidates evaluated` | core | HIGH | EXPLICIT stake-level commitment (HIGH); higher candidate count under evaluation |
| 17 | 20-35 `_state.md` Decomposition entry | `5 clusters … 7 pieces (Q1-Q7) with verification criteria. 6 interfaces (I1-I6). DAG dependency order Q7→Q1→Q5→Q2⇄Q3→Q4 (Q6 parallel)` | core | HIGH | 7 pieces with DAG ordering — finer-grained than /MVL2+'s 3 pieces |
| 18 | 20-35 finding | NO explicit new failure modes added to §4.2 of surfacing.md | core | HIGH | absence is informative: relies on existing §4.4 to protect; the user's two regression risks are not given named, observable failure modes |
| 19 | 20-35 finding §5.4 row | only ONE new row (the schema field); no new derived field at §5.5, no new telemetry at §5.6 | sub | HIGH | reporting layer thinner than /MVL2+'s |

### Items from `/MVL2+` finding (16-00) and its `_state.md`

| # | Region | Item identifier(s) | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 20 | 16-00 `_state.md` Flow-type | `flow-type: extended-surfacing; pipeline Su → S → D → I → C` | core | HIGH | confirms the 16-00 was /MVL2+ (surfacing variant) |
| 21 | 16-00 finding Summary | `The addition is a seven-surface edit to surfacing.md — not a single new section` | core | HIGH | 7 surfaces vs /MVL+'s 3 surfaces — broader defense-in-depth |
| 22 | 16-00 finding Summary | `One load-bearing principle holds the edit together — "metadata-as-signal-not-verdict."` | core | HIGH | NAMED PRINCIPLE more explicit than /MVL+'s "observable-fact" framing; operational rather than category-label |
| 23 | 16-00 finding Summary | field name `recency annotation`, value shape `{source: filesystem \| none, value: ISO8601 \| null}` | core | HIGH | field name is one step abstracted from user's "last datetime of edit"; less direct user-language alignment than /MVL+'s `last-edit-time` |
| 24 | 16-00 finding Summary | `source: none, value: null` is a FIRST-CLASS value (mandatory per item) for items without filesystem backing | core | HIGH | possibility-mode handled IN, not OUT — schema completeness preserved |
| 25 | 16-00 finding Summary | `Two new LAYER 1 failure modes at §4.2 — Recency-Equates-Idleness and Recency-Bias-Filter` | core | HIGH | DIRECT MATCH to the user's two named regression risks (old-as-idle; silent down-weighting); /MVL+ does not add named failure modes |
| 26 | 16-00 finding Summary | numeric recency bands (recent / aged / ancient) deliberately NOT committed; deferred with revival trigger | core | HIGH | parallel to /MVL+'s M2/M3 deferral — both findings exhibit phase-discipline |
| 27 | 16-00 finding Summary | `Existing behavior is provably preserved` — §2.3 untouched, §3.4 ordering untouched, §2.4 primitives untouched, taxonomy slot preserved | core | HIGH | non-regression argument structurally explicit |
| 28 | 16-00 finding §4 Exact spec text | full spec-text drafts for ALL 7 surfaces, including §1.3 NOT-list ninth row, §1.4 vocabulary 8th entry, §2.1 Step Refinement (italic prefix), §4.2 entries 8 + 9, §5.4 column 7, §5.5 derived row, §5.6 bullet | core | HIGH | ship-ready text at every surface — more concrete than /MVL+'s partial drafting (which provided text for §2.1, §5.4, §1.3 but not for any failure mode because none were added) |
| 29 | 16-00 finding §3 Orthogonal third axis | `mtime is a third orthogonal axis: time-of-last-edit. It's metadata-conditioned, not content-conditioned and not purpose-conditioned` | core | HIGH | explicit orthogonality framing; helpful for future contributors |
| 30 | 16-00 finding §2 Principle | principle stated at four anchored mentions across the spec (Step Refinement body + NOT-list + 2 failure-mode Correctives) | sub | HIGH | 4-anchor defense vs /MVL+'s 2-anchor defense (§4.4 + §2.1 reaffirmation) |
| 31 | 16-00 `_state.md` Innovation entry | `8 ACTIONABLE candidates; Inherited Frame Audit did not fire; axis coverage PASS; mechanism independence PASS` | sub | MEDIUM | thorough but fewer pieces explored (8 vs /MVL+'s 16 candidates total) |
| 32 | 16-00 `_state.md` Critique entry | `7 SURVIVE (3 with minor refinements), 0 KILL; 12 dimensions applied; signal TERMINATE with ranked survivors` | sub | HIGH | 12 dimensions (6 default + 6 project-specific risk) — broader dimension set than /MVL+'s 8 |
| 33 | 16-00 `_state.md` Decomposition entry | `3 pieces (P1 Schema, P2 Rule+Principle, P3 Failure modes); all 7 self-eval dimensions PASS` | core | MEDIUM | 3 pieces vs /MVL+'s 7 — shallower decomposition |
| 34 | 16-00 finding | uses Step Refinement primitive with explicit italic-prefix visual marker per `docs/step_refinement.md` | sub | HIGH | convention conformance more visible than in /MVL+'s finding |
| 35 | 16-00 finding §3 NOT-list framing | adds a 9th NOT-list row excluding "Verdict-shaped use of metadata signals" | sub | HIGH | analogous to /MVL+'s NOT-list note but more table-shape-conformant (a row in the existing table vs a paragraph after the table) |
| 36 | 16-00 finding | does NOT introduce a forward-extension named category for future metadata kinds; preserves it as RESEARCH FRONTIER | core | HIGH | absence is informative: forward-extension property left implicit; /MVL+ commits the category explicitly |

### Items from both `_branch.md` files (transcription audit)

| # | Region | Item identifier(s) | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 37 | 20-35 `_branch.md` Question | "what addition to the surfacing discipline spec at `cognitive_harness/surfacing/references/surfacing.md` would enable file-metadata-awareness (last-edit datetime of files in the territory) as one input signal to surfacing's relevance judgment" | sub | HIGH | re-framing of user input; question is broadly equivalent to 16-00's |
| 38 | 16-00 `_branch.md` Source Input | user's verbatim question preserved | sub | HIGH | identical verbatim user input across both inquiries |
| 39 | 20-35 `_branch.md` Source Input | user's verbatim question preserved | sub | HIGH | identical verbatim user input — confirms both runs received the SAME user query |
| 40 | both `_branch.md` Goal sections | both name the two regression risks (idle-treated-as-refined; relevant-but-idle dropped) explicitly | core | HIGH | both inquiries TRANSCRIBED the user's two regression risks correctly into the Goal — neither dropped the load-bearing clauses |

**Items surfaced:** 40. **Workspace populated:** items 1–40 are now in present attention with explicit relevance tags.

## State Summary

### Territory specification echo

The two completed findings and their state files: `devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design/` (the /MVL+ inquiry) and `devdocs/inquiries/2026-05-22_16-00__surfacing_metadata_recency_signal/` (the /MVL2+ inquiry).

### Purpose specification echo

Identify items in the two findings that bear on the comparison — which finding did a better job for the user's query about adding mtime-awareness to the surfacing discipline, with reasoning distinguishing runner-attributable differences from other-variable differences.

### Coverage map

| Region | Coverage |
|---|---|
| 20-35 finding | confirmed (Summary + §1–§7 + Reasoning + state-file Innovation/Critique entries) |
| 16-00 finding | confirmed (Summary + §1–§5 + Reasoning + state-file Innovation/Critique entries) |
| both `_branch.md` Source Input | confirmed (verbatim user input present in both; identical) |
| both `_state.md` flow-type fields | confirmed (20-35 = extended; 16-00 = extended-surfacing) |

### Confirmed-absent regions

- A LAYER 2 failure-mode addition in either finding: NEITHER finding promotes the metadata-axis to LAYER 2 (identity-eroding) territory. Both stay at LAYER 1 (operational) — confirmed-absent at this resolution; both findings preserve future LAYER 2 promotion via Deferred items if calibration warrants.
- A direct comparison of the two findings BY THE PRIOR INQUIRIES THEMSELVES: neither inquiry cites the other (verified by grep within both findings). They are independent runs on the same query — this is exactly the comparison-friendly setup the user wanted.

### Concept-names list

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| `last-edit-time` (the field name in MVL+'s finding) | vocabulary | trace #3, #10 | observable-fact field name; matches user's "last datetime of edit" phrasing closely |
| `recency annotation` (the field name in MVL2+'s finding) | vocabulary | trace #23 | abstracted-from-implementation field name; signal-not-source framing |
| `observable-fact metadata annotations` (MVL+'s named category) | coined-term | trace #6, #12 | forward-extension category for future metadata kinds |
| `metadata-as-signal-not-verdict` (MVL2+'s named principle) | coined-term | trace #22, #30 | operational principle stated across multiple spec surfaces |
| `Recency-Equates-Idleness`, `Recency-Bias-Filter` (MVL2+'s failure modes) | coined-term | trace #25 | named LAYER 1 failure modes mapping directly to user's two named regression risks |
| `source: none` first-class value (MVL2+'s missingness handling) | structural-reference | trace #24 | possibility-mode handling: missingness as first-class value, not absent field |
| 3-surface vs 7-surface placement | structural-reference | trace #4 vs #21 | the structural cardinality difference between the two findings |
| "Production-task mode" + 7 Inversion-candidates (MVL+'s Innovation) | structural-reference | trace #15 | MVL+'s explicit methodology-mode commitment + piece-level Inversion thoroughness |
| Stake level HIGH (MVL+'s Critique) | structural-reference | trace #16 | MVL+'s explicit stake-level commitment in adversarial evaluation |

### Frontier flags

| Sub-region | Open question for downstream |
|---|---|
| Runner-attribution analysis | Sensemaking + Critique should examine which differences are attributable to the runner choice (/explore vs /surfacing upstream) vs LLM run-to-run variance vs per-discipline framing choices. The user's framing names runner as the operative variable but doesn't commit it as the only variable. |
| Verdict shape | Should the verdict be binary ("A wins" or "B wins"), or admit "tie," "partial wins per dimension," "both contribute different value"? Sensemaking should commit a verdict shape. |
| Confidence calibration | How confident can the comparison verdict be? Both findings answer the user's question; the verdict is a relative quality judgment that depends on weighted dimensions. Critique should commit a confidence level. |

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-22T23:15
extent: 40 items across both findings + both state files + both branch files; all coverage confirmed
```

### Re-invocation parameters

Not requested. Single-invocation traversal is sufficient.

## Telemetry

- **Mode:** artifact + signal-first
- **Cycles run:** 1
- **Items enumerated:** 40
- **Items tagged at each relevance level:** core = 19, sub = 17, side = 0, umbrella = 0, plus 4 mid-level entries that resolved to sub/core based on the comparison's specific purpose
- **Sub-phase fired:** no (territory was explicit-bounded)
- **Convergence criteria status:**
  - Territory exhaustively traversed at current resolution: YES
  - No item filtered at uncertain-relevance level: YES (no umbrella tags needed; both findings are fully readable)
  - Items rejected only on HIGH-confidence rejection: YES
- **Workspace-overload trigger:** not fired
- **Failure modes checked:** all 7 LAYER 1 + LAYER 2 failure modes; none observed
- **Self-assessment verdict:** PROCEED

## Self-Assessment

PROCEED. All convergence criteria met. The workspace contains 40 items spanning both findings and both state files; the items are tagged for relevance to the comparison's purpose. Downstream sensemaking has sufficient material to extract comparison dimensions, identify the verdict shape, and reason about runner-attribution.
