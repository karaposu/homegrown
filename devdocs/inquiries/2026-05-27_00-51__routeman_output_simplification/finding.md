---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: routeman's output logic can and should be simplified to a `routeman.md` + `_route.md` two-file shape — with one contingent decision deferred to operational evidence

## Question

(from `_branch.md`)

What is bad with the current `/routeman` output logic, what makes it hard to understand, and is it possible to simplify the output logic — preserving the full enumeration of routes AND the multi-head worker session use-case?

Layer Commitment: **STRUCTURAL.** Routeman's meaning-layer commitment (enumerate possible next moves with typed metadata) is preserved. Process-layer (the 10 Enumeration components, the typed-reachability mechanism) is preserved unless an output-field's removal forces a process step to disappear. What's adjudicated here is the SHAPE of the output.

Source context (from `devdocs/routeman_releted/problem.md`): the user observed that routeman's discipline creation absorbed legacy `/navigation` material as context-poison, with most of the poison about output logic. Three files in `cognitive_harness/non-active/` (`multi_resolution_navigation.md`, `navigation_context_intake.md`, `navigation_context_intake_my_version.md`) were named as suspect; the user's working hypothesis was `routeman.md` (enumeration) + `_route.md` (datetime + calculation stats), with an open question: *"but maybe this is missing some vital information?"*

**Goal:** a concrete answer naming specific problems with the current output spec, naming specific comprehension-friction sources, and either proposing a concretely-shaped simpler output (file structure + section names + what each holds) with a multi-head walkthrough, OR explicitly justifying why the current shape is at minimum complexity.

## Finding Summary

- **The current routeman output (defined at `cognitive_harness/routeman/references/routeman.md`) is structurally a 4-layer stack** — enumeration content + persistence-protocol + meta-reasoning/audit + telemetry — that the spec presents as one undifferentiated thing. Three of the four layers were added by specific prior inquiries; recognizing the layers makes the simplification space visible.

- **Yes, simplification is feasible.** The committed shape is the user's `routeman.md` + `_route.md` two-file structure, enriched beyond the user's "datetime + calc stats" sketch. The simplification preserves the full route enumeration (no compression of the route set; per-route content fields preserved); preserves the project's existing conventions; preserves multi-head worker session compatibility via the file-structure being self-describing on disk + the worker-identifier being inherent in the inquiry folder + timestamp.

- **The committed shape (Candidate #1 from Innovation; SURVIVE in Critique):**

  ```
  inquiry_folder/
  ├── routeman.md    ← the Route Map (10 content fields per route + 1 length-bounded
  │                     meta-reasoning field; Excluded section; Frontier; Telemetry)
  └── _route.md      ← thin invocation-state file
                        ## Last Invocation (timestamp + inquiry path + mode)
                        ## Prior Invocations (chronological list with brief summary per run)
                        ## History (append-only event log)
  ```

  The names are **routeman-native** throughout — the `_navig.md` ↔ `_frontier.md` alias from `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` is dropped in routeman context. The `multi_resolution_navigation.md` protocol remains available as a standalone protocol for OTHER consumers; routeman just stops using it.

- **What's removed from the current spec.** The protocol-adopted heavy machinery (the 13-field frontier-candidate-record schema; the 10-status status vocabulary that routeman only uses 7 of; coverage modes; `batch_size`; `expansion_policy`; `scheduling_policy`) is removed because routeman doesn't run batched expansions and the inherited vocabulary is dead-inheritance. Per-route `Movement` and `Unlocks` fields are removed because they are derivable from other fields (Movement from Direction → Goal; Unlocks from forward-chain reasoning over Status + Blocked By).

- **What's restructured.** Per-Route schema goes from 12 fields to 10 + 1 contingent (10 content fields preserved — Direction, Goal, Movement Type, Priority, Status, Blocked By, Purpose, WHY, Guidance, Continuation Note — plus the contingent meta-reasoning field). Persistence vocabulary goes from protocol-native heavy to routeman-native minimal (3 sections in `_route.md`). Telemetry trims from ~10 metrics to 5-6 essential ones.

- **What's preserved.** The enumeration content per route is preserved; the 16-type movement taxonomy (Progression / Re-orientation / Coordination Families) is preserved; the per-route adaptive-guidance modes (none / compact / full / expand-on-selection) are preserved; the LAYER-2 audit substrate (per `cognitive_harness/non-active/comprehend/` — the project's failure-mode framework) is preserved; project conventions (underscore-prefix-for-meta-state from `docs/canon/runtime_environment/folder_based.md`; per-discipline canonical naming) are honored throughout.

- **Multi-head compatibility check (per the user's "still it will work wit multihead worker session" constraint).** Each worker session produces ONE `routeman.md` + ONE `_route.md` in its inquiry folder. A **navigation session** (the cross-head consumer-role per `docs/canon/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md` — an isolated AI session that reads completed worker artifacts and runs `/routeman` across them) reads N inquiry folders and aggregates. The aggregation logic lives in the navigation session — not in routeman's output. Routeman's output need only be self-describing on disk + carry worker-identifier (inquiry folder name + timestamp inherently provide this) + have a stable parseable schema. The committed shape satisfies all three properties. No multi-head-specific machinery is needed in routeman's output to support multi-head consumption.

- **The user's working hypothesis SURVIVES as the file structure.** `routeman.md` + `_route.md` IS the committed two-file shape. But `_route.md` is enriched beyond "datetime + calc stats" — it carries 3 sections (Last Invocation, Prior Invocations, History) needed to support routeman's 3-operation persistence requirement (read-prior, recalibrate, add-new) that the user themselves originally specified in their 2026-05-24 framing. The enrichment is principled, not bloat.

- **One contingent decision is preserved for operational evidence: the `why_this_might_be_important` field.** This per-Route meta-reasoning field, committed by `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md`, is kept in the committed shape WITH constraints (1-sentence cap; required cycle-content anchor) — the REPAIR shape. Innovation also surfaced a REVERT-REGRESSION alternative (cut the field entirely; Absence Recognition argued the field is redundant with WHY in different form). Critique adjudicated REVERT-REGRESSION as REFINE-not-now because it would revert a prior inquiry's commitment based on structural argument alone without empirical evidence that the field has failed in practice. Recommendation: ship the REPAIR shape; let operational data (post-ship invocations) provide evidence; if the field consistently produces filler reasoning (per a future LAYER-2 audit protocol), revisit and revert in a follow-up inquiry.

- **The simplification is precedent-setting.** Routeman is the project's only shipped Boundary discipline (per `docs/canon/thinking_disciplines/anatomy/discipline_taxonomy.md` updated 2026-05-27). The committed simpler shape becomes the implicit template for `/reflect` (the backward-Boundary discipline spec preserved at `cognitive_harness/non-active/reflect/`) when revived. A simpler routeman shape sets a simpler reflect template; this is captured as a precedent-awareness note, not as a hard constraint.

## Finding

### Surrounding context

`/routeman` is the project's **Boundary discipline** — it operates at the edge between cognitive cycles, enumerating possible next moves from the current state toward a goal, typing each by movement category, and attaching per-route guidance, without selecting which move to take (per `cognitive_harness/routeman/references/routeman.md` §1). Routeman was created on 2026-05-23 as a rename of `/navigation` (per `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`) — the rename intended to escape corpus baggage from the deprecated `/navigation` material.

But the rename inquiry chain (the 14-39 design memo → 18-58 staging + meta-reasoning addition → 24-00 persistence-protocol adoption) brought in its own complexity. The 24-00 inquiry adopted `cognitive_harness/non-active/multi_resolution_navigation.md` (a standalone protocol designed for broader use than routeman's) verbatim as routeman's persistence mechanism. The user later observed (per `devdocs/routeman_releted/problem.md`) that this adoption was likely context-poison — the protocol's machinery exceeds what routeman actually uses. The user proposed a much simpler `routeman.md + _route.md` shape and asked whether anything vital would be lost.

This inquiry tests that hypothesis structurally.

### The 4-layer model of the current routeman output

Sensemaking identified that the current routeman.md spec is structurally a 4-layer stack the spec doesn't acknowledge:

- **Layer α — Enumeration content.** Per-route Direction, Goal, Movement Type, Priority, Status, Purpose, WHY, Guidance, Continuation Note. This IS routeman's meaning-layer commitment (the operation routeman performs).
- **Layer β — Persistence-protocol.** The 13-field frontier-candidate-record schema, the 10-status status vocabulary, coverage modes (exhaustive/budgeted/sampled), `batch_size`, `expansion_policy`, `scheduling_policy` — all adopted from `multi_resolution_navigation.md` via the 24-00 inquiry. Aliased as `_navig.md` (= protocol's `_frontier.md`) + `routeman.md` (= protocol's `navigation.md`).
- **Layer γ — Meta-reasoning / audit.** The per-Route `why_this_might_be_important` field + the 4-axis content distinction (Purpose / WHY / Continuation Note / why_this_might_be_important) + the LAYER-2 audit substrate, all added by the 18-58 inquiry.
- **Layer δ — Telemetry.** Roughly 10 metrics: per-Family balance, per-type distribution, reachability distribution, guidance-mode allocation, cross-cycle revisitations, autonomy partition, Excluded count, convergence trigger fired, failure modes checked, self-assessment verdict. Project-canonical per `docs/canon/thinking_disciplines/anatomy_of_disciplines.md`.

The four layers are separable on two structural axes: distinct content TYPE (enumeration items / persistence records / meta-reasoning text / observational metrics) and distinct EVOLUTION PATH (each layer entered the spec through a different inquiry). Once the layers are separated, the simplification space becomes visible: layer α is preserved; layer β is the most aggressive simplification target; layer γ is contingent on a single field decision; layer δ is project-canonical and survives in restructured form.

### The 7 hard constraints on any simplification

Sensemaking derived 7 hard constraints. Any simplified shape must respect all 7:

1. **Enumeration preserved at content-level.** Per-route content fields preserved; the route SET is not compressed. The user's "we need enumeration of routes for sure" is honored.
2. **3-operation persistence support.** The shape supports read-prior + recalibrate + add-new across invocations (the operations the user explicitly named in the 24-00 framing).
3. **Multi-head navigation-session compatibility.** Each routeman output is (a) self-describing on disk, (b) carries a worker-identifier (inquiry folder + timestamp inherently), (c) has a stable parseable schema. Multi-head aggregation lives in the **navigation session** (the cross-head consumer-role per `docs/canon/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md` — an isolated AI session distinct from the per-inquiry worker sessions; it invokes `/routeman` across N completed worker outputs), not in each worker's routeman output.
4. **Session-isolation compliance.** The output is fully readable from disk by a fresh isolated session.
5. **Append-only-with-status-updates pattern.** New entries appended; past preserved; status fields may be updated. Per the project's existing `_state.md` pattern.
6. **User vetoes.** No warming-summary structure; no source-inquiry requirement. (The user explicitly rejected the warming-summary frame in `devdocs/routeman_releted/old_nav_logic/nav_sum_notes.md`: *"this is stupid idea."*)
7. **Precedent-setting awareness.** Routeman is the project's only shipped Boundary discipline; its shape becomes the template for `/reflect`'s eventual revival.

### Why the current spec is bad / hard to understand

The inquiry surfaced specific structural problems in the current spec, not vague complaints:

- **Dead inheritance from the protocol adoption.** The 24-00 inquiry adopted `multi_resolution_navigation.md` verbatim. But routeman only uses 7 of the protocol's 10 status values (the 3 unused — `queued`, `scheduled`, `expanded` — are PROTOCOL-RUN execution states that routeman doesn't run because routeman doesn't run batched expansions). Multiple frontier-candidate-record fields (`candidate_id`, `parent_map`, `expansion_reason`, `eligibility_reason`, `scheduling_reason`, `child_map_path`) are protocol-internal control data routeman's per-Route entries don't use. The protocol's machinery exceeds routeman's actual persistence need.

- **Layer-undifferentiation.** The current spec presents enumeration content, persistence machinery, meta-reasoning audit, and telemetry as one undifferentiated structure. A reader can't tell which fields belong to which concern. The 4-layer model makes the separation visible; the current spec doesn't.

- **Two-vocabulary friction.** The `_navig.md` ↔ `_frontier.md` + `routeman.md` ↔ `navigation.md` alias decision (committed by 24-00) creates parallel naming that requires cross-document translation. Per the 24-00 finding §3, this risk was acknowledged but not avoided; the inquiry can now avoid it by using routeman-native names throughout.

- **Per-route schema bloat.** 12 fields per top-level Route (13 if `why_this_might_be_important` is counted; 17 fields per top-level Route when subsequent additions per 18-58 are counted; 18 per sub-route). Some fields (Movement, Unlocks) are derivable from others — Absence Recognition at redesign-level surfaced this redundancy.

- **The 4-axis content distinction is anti-confusion machinery whose own complexity may itself confuse.** The distinction was added by 18-58 to prevent readers from conflating the meta-reasoning field with WHY. But four axes is a lot for a reader to hold in mind while reading a route entry. The friction-reduction tool may itself be friction. Per Surfacing's FF-Su6; Sensemaking Ambiguity 7 ruled the distinction contingent on the parent field commitment.

### The committed simpler shape — concretely

**File structure:**

```
inquiry_folder/
├── routeman.md      ← The Route Map
│                       ## User Input
│                       ## Reception echo (entry mode + goal-type + brief description)
│                       ## Route Map
│                       │  ### Route Index  (when route count > 10; table summary)
│                       │  ### Per-Route entries (per-Route entry × N, see schema below)
│                       │  ### Excluded Section  (movement types structurally inapplicable, with reasoning)
│                       ## Frontier  (open questions surfaced by this Route Map)
│                       ## Telemetry  (5-6 metrics, see below)
│                       ## Overall: PROCEED / FLAG / RE-RUN
└── _route.md        ← Routeman invocation state
                        ## Last Invocation
                        - Timestamp: <ISO8601>
                        - Inquiry path: <path>
                        - Mode: fresh-state | prior-map-extending
                        ## Prior Invocations
                        - (chronological list, one entry per prior run: timestamp + brief summary)
                        ## History
                        - (chronological event log; append-only)
```

**Per-Route entry schema (10 content fields + 1 contingent meta-reasoning field):**

| Group | Field | Content |
|---|---|---|
| Route Identity | Direction | Human-readable route title in operator's vocabulary |
| Route Identity | Goal | Compact target-state label |
| Route Identity | Movement Type | One of 16 types from the 3 Families taxonomy (preserved unchanged) |
| Route State | Priority | HIGH / MEDIUM / LOW |
| Route State | Status | One of 7 values: open / blocked / deferred / active / done / stale / superseded |
| Route State | Blocked By | The gate, condition, missing artifact; `none` when unblocked |
| Route Meaning | Purpose | What this route would serve, reveal, or unlock |
| Reasoning | WHY | Evidence from cycle output making this direction worth considering |
| Reasoning (contingent) | why_this_might_be_important | 1 sentence cap; MUST anchor in specific cycle-content (e.g., "critique's KILL seed on X"); generic filler ("this seems important") fails the spec rule — see Contingent Decision section below |
| Adaptive Guidance | Guidance Mode + Pointers | one of {none, compact, full, expand-on-selection}; 0 / 1-2 / 3-5 pointers per mode, each with its own WHY |
| Continuation Memory | Continuation Note | What a future agent resuming this route should remember |

**Fields removed from current schema:** Movement (derivable from Direction → Goal), Unlocks (derivable from forward-chain reasoning over Status + Blocked By), Parent Route (lives at staged-mapping mechanism level when staging is invoked; doesn't appear in top-level Route entry).

**Persistence vocabulary (in `_route.md`):**

Three sections. Per-Route status updates (which is the only cross-invocation state routeman needs) live in routeman.md as the per-Route Status field — updated in-place across invocations per the append-only-with-status-updates pattern. No separate status-tracking ledger in `_route.md`. No protocol-derived vocabulary.

**Telemetry (5-6 metrics in routeman.md's Telemetry section):**

- Per-Family balance (Progression / Re-orientation / Coordination route counts)
- Per-type distribution (counts across 16 types)
- Reachability distribution (counts across the 7 Status values)
- Guidance-mode allocation (counts across {none, compact, full, expand-on-selection})
- Failure modes checked (list of LAYER-1 + LAYER-2 modes reviewed; per LAYER-2 framework at `cognitive_harness/routeman/references/routeman.md` §4.3)
- Self-assessment verdict (PROCEED / FLAG / RE-RUN)

Metrics removed from current spec: cross-cycle revisitations (collapsed into per-Route Status updates); autonomy partition (delegated to the inquiry's autonomy register, not part of routeman output); Excluded type count (redundant with Excluded Section count by inspection); cycles run (operational detail, lives in `_route.md`'s Last Invocation block); convergence trigger fired (operational detail, lives in `_route.md`).

### The multi-head walkthrough (proves the shape supports the constraint)

Concrete scenario: three parallel `/MVLw` worker sessions (Worker A, B, C) each run on related sub-questions. Each produces one inquiry folder; each invokes `/routeman` to enumerate next moves from its inquiry. A **navigation session** (per `docs/canon/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md` — a separate isolated AI session whose job is movement-space attention across multiple workers) then reads across the three.

```
devdocs/inquiries/
├── 2026-05-30_10-00__worker_a_question/
│   ├── _branch.md
│   ├── _state.md
│   ├── ... (worker A's discipline outputs + finding.md)
│   ├── routeman.md   ← Worker A's Route Map
│   └── _route.md     ← Worker A's routeman state
├── 2026-05-30_10-00__worker_b_question/
│   ├── ... (same shape)
│   ├── routeman.md   ← Worker B's Route Map
│   └── _route.md
└── 2026-05-30_10-00__worker_c_question/
    ├── ...
    ├── routeman.md   ← Worker C's Route Map
    └── _route.md
```

The navigation session:

- **Reads** all three `routeman.md` files.
- **Identifies the worker** by reading the inquiry folder name (timestamp + slug — inherently unique per worker).
- **Parses each** via the stable schema (the 6 purpose-groups + 10+1 fields per Route are predictable). For cross-head comparison the navigation session pulls Direction + Movement Type + Priority + Status + Reasoning fields — exactly the fields routeman commits to.
- **Aggregates** across heads: which Movement Types are over-represented; which Priorities cluster; which Statuses indicate blocked vs open work.
- **Compares** heads on movement value: Head A has 5 HIGH-priority DEEPEN routes; Head B has 2 HIGH-priority REFRAME routes; Head C has zero — implying B's REFRAME-cluster is the strongest signal across heads.

What the navigation session does NOT need from routeman's output: any multi-head-specific machinery (worker-id fields; cross-worker aggregation pointers; multi-head conflict resolution data). The inquiry folder name + timestamp inherently provide worker-identity. The schema's stability lets the navigation session parse with confidence.

The shape passes the multi-head check.

### The contingent decision: `why_this_might_be_important`

This is the only point of divergence among the three Innovation candidates that survived testing. Critique adjudicated it as a CONTINGENT decision rather than a single right answer.

**The principal commitment (Candidate #1; SURVIVE):** keep the field with REPAIR constraints. Specifically: 1-sentence cap; MUST anchor in specific cycle-content (e.g., "critique's KILL seed on X explicitly asks 'what conditions would make this work?'"); generic filler ("this seems important") fails the spec rule and would be flagged by a future LAYER-2 audit (per the filler-meta-reasoning failure mode added to routeman's LAYER-2 framework by inquiry 2026-05-23_18-58).

**The alternative (Candidate #2; REFINE):** cut the field entirely + cut the 4-axis content distinction documentation. Innovation's Absence Recognition argued: the field is redundant with WHY in different form (WHY already carries cycle-anchored reasoning; the supposed meta-vs-object axis distinction is documentation-machinery that adds friction without solving a problem readers actually have).

**Why Critique adjudicated REFINE rather than KILL on the alternative.** The structural argument (redundancy) is sound. But the field was committed by a prior inquiry (2026-05-23_18-58) through that inquiry's own SIC pipeline; cutting it via structural-only argument from a subsequent inquiry sets a precedent for prior-inquiry-reversal-without-empirical-evidence. The project's iterative inquiry pattern is that commitments accumulate and are revised on operational signals. The structural argument is necessary but not sufficient.

**The empirical-evidence-gated revival path (combines all 3 candidates):**

1. **Ship the committed shape now** (Candidate #1 / REPAIR with constraints).
2. **Author the LAYER-2 audit protocol** (per routeman's existing frontier question Q4, tracked in `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md`).
3. **Run the audit on accumulated routeman invocations** (5-10 invocations gives reasonable signal).
4. **If the filler-meta-reasoning failure-rate exceeds threshold** (specific threshold to be specified at audit-protocol authoring time), promote Candidate #2 (cut the field) with empirical evidence backing — opens a follow-up materialization inquiry.
5. **If the failure-rate stays low** and the field shows demonstrable cycle-anchored content, keep as in Candidate #1; the field has earned its place operationally.

This sequence captures the inquiry's reasoning about the contingent decision without locking it into spec form prematurely.

## Next Actions

### MUST

- **What:** Apply spec edits to `cognitive_harness/routeman/references/routeman.md` (and `SKILL.md` if needed) reflecting the committed simpler shape.
  - **Who:** the user (or a follow-up materialization inquiry / spec-edit task).
  - **Gate:** condition-bound — when the user decides to materialize this finding's recommendations.
  - **Why:** without the spec edits, the simplification is documented in this finding but not embodied in the runtime artifact; future `/routeman` invocations would still execute against the heavy spec.

  Concrete delta list to apply:

  | Delta | Where in `cognitive_harness/routeman/references/routeman.md` | Action |
  |---|---|---|
  | Cut per-Route `Movement` field | §5.4 per-Route entry schema, Route Meaning group | REMOVE |
  | Cut per-Route `Unlocks` field | §5.4, Route Meaning group | REMOVE |
  | Reduce per-Route `Status` field's enum from 10 to 7 values | §5.4, Route State group; §2.5 if status vocabulary referenced there | REPAIR (set enum to `open / blocked / deferred / active / done / stale / superseded`) |
  | Drop the protocol-alias commitment from §1.4 (`_frontier.md` ↔ `_navig.md`; `navigation.md` ↔ `routeman.md`) | §1.4 vocabulary + any §2/§5 references | REMOVE (use routeman-native names throughout: `routeman.md` and `_route.md`) |
  | Replace §5.5 Route Map wrapper that references protocol heavy-machinery (frontier-candidate-record, coverage modes, batch_size, expansion_policy, scheduling_policy) | §5.5 Route Map wrapper | REPAIR (wrapper retains: Map Header + Route Index when count > 10 + Excluded Section + Telemetry Block — no protocol-internal control fields) |
  | Replace §3.6 Re-invocation as parameterized variation: drop the `prior route map` / `refined-sub-goal` protocol-derived parameters; replace with a thin reference to `_route.md`'s Prior Invocations + Last Invocation sections | §3.6 + §3.5 if relevant | REPAIR |
  | Trim §5.6 Telemetry from ~10 metrics to 5-6 essential | §5.6 | REPAIR (keep: per-Family balance / per-type distribution / reachability distribution / guidance-mode allocation / failure modes checked / self-assessment verdict; drop: cross-cycle revisitations / autonomy partition / Excluded type count / cycles run / convergence trigger fired — move operational metrics to `_route.md`) |
  | Add `_route.md` description as a new sub-section of §5 (Output) | §5 — add §5.8 "`_route.md` invocation-state file" with the 3-section schema (Last Invocation / Prior Invocations / History) | ADD-CONTENT |
  | Add a per-Route writing rule for `why_this_might_be_important`: 1-sentence cap + MUST cycle-anchor + filler-fails-spec | §5.4 Reasoning group + §4.3 LAYER-2 mode documentation | ADD-CONTENT (the constraint, not a new field) |
  | Update §2.4 adaptive-guidance mechanism's reference to "from prior route map" sources to reference `_route.md`'s Prior Invocations | §2.4 stage 1 chain | REPAIR |

  This delta list is concrete enough to apply without further design work; each delta names the spec section and the intervention shape.

### COULD

- **What:** Update `cognitive_harness/non-active/multi_resolution_navigation.md` to record that routeman is no longer a consumer of the protocol (the alias note added by 2026-05-24_00-20's Next Actions can be cut or marked superseded). The protocol remains available for OTHER potential consumers.
  - **Who:** whoever applies the MUST spec edits.
  - **Gate:** condition-bound — when the MUST spec edits are committed.
  - **Why:** maintains coherence of the cross-document cross-reference layer; prevents future readers from following the alias note to a routeman context where the alias no longer applies.
  - **Depends-on:** the MUST spec-edits item above. GATED.

- **What:** Open a follow-up inquiry to author the LAYER-2 audit protocol for routeman's filler-meta-reasoning failure mode (the audit infrastructure tracked as Q4 in `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md`).
  - **Who:** any runner.
  - **Gate:** condition-bound — when post-ship operational data accumulates enough to make audit threshold calibration possible (~5-10 routeman invocations after the MUST spec edits ship).
  - **Why:** without the audit protocol, the empirical-evidence-gated revival path for Candidate #2 cannot be exercised. The audit is the mechanism that converts operational data into a structural decision signal.

- **What:** When `/reflect` is revived (currently at `cognitive_harness/non-active/reflect/`), inherit the committed routeman shape's simplicity pattern as the template for `/reflect`'s output. Specifically: `reflect.md` (content) + `_reflect.md` (invocation state) two-file shape; per-observation schema with content-fields only; no protocol-adoption.
  - **Who:** the inquiry that revives `/reflect`.
  - **Gate:** condition-bound — when `/reflect` revival is planned.
  - **Why:** routeman is precedent-setting for the project's Boundary discipline pattern. Simpler routeman shape → simpler reflect template. Prevents complexity propagation.

### DEFERRED

- **What:** Promote Candidate #2 (cut `why_this_might_be_important` field + 4-axis content distinction documentation).
  - **Gate:** observable — when the LAYER-2 audit protocol shows the filler-meta-reasoning failure-rate exceeds threshold across ≥5 post-ship routeman invocations.
  - **Why (if revived):** the structural argument for Candidate #2 (the field is redundant with WHY in different form) is sound; operational evidence would convert it from structural argument to evidence-backed change.

- **What:** Open the cross-inquiry aggregation inquiry (per routeman's existing FF-4 from `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md`).
  - **Gate:** observable — when a project-level Route Map summary is needed across multiple inquiry-scoped `_route.md` files.
  - **Why (if revived):** the committed shape supports per-inquiry persistence; cross-inquiry aggregation is a separate concern that may need its own design.

## Reasoning

**Why this finding over the alternatives — the simplification space adjudication.**

Sensemaking identified 5 viable candidate paths within the 7-constraint set:
- **Path A** — user's hypothesis adopted directly (`routeman.md` + minimal `_route.md` with just datetime + calc stats).
- **Path B** — `nav_sample_story` shape adapted (sequential per-run `routeman_<N>.md` + activity ledger `_route.md`).
- **Path C** — routeman-specific-minimum-persistence (the mid-bracket).
- **Path D** — current spec lightly trimmed.
- **Path E** — refactor-by-layer (eliminate β; restructure δ; contingent γ cut).

Innovation's P6 validation eliminated Path B (sequential files break the per-discipline-canonical-name convention from `docs/canon/runtime_environment/folder_based.md`) and Path E's most aggressive form (P5-Contrarian single-file). Path D was effectively a sub-set of Path C (the trimming Path D proposed is the same trimming Path C proposes plus the file-structure cleanup).

Critique tested 3 surviving candidates (variants of Path C with different γ-decisions):

| Candidate | Verdict | Why |
|---|---|---|
| **#1 — Path C + γ REPAIR** (committed) | SURVIVE | Strongest dimensional pass-rate (5/5 CRITICAL + 4/4 HIGH with one caveat + most MEDIUM). Conservative path; cuts most-defensible dead-inheritance while preserving prior commitments. |
| **#2 — Path E + γ REVERT-REGRESSION** | REFINE → DEFERRED | The cut is structurally defensible (the field is redundant with WHY) but precedent-risky without empirical evidence of failure. Converted from "ship now" to "evidence-gated revival." |
| **#3 — Path C + γ REPAIR-WITH-SCHEDULED-REVERT** | REFINE → DEFERRED | The trigger threshold + N are undefined; depends on a LAYER-2 audit protocol not yet authored. Folded into Open Questions / Monitoring rather than spec commitment. |

Path A (the user's hypothesis verbatim) was tested implicitly: its file structure (`routeman.md` + `_route.md`) IS the committed shape, but the `_route.md` is enriched beyond "datetime + calc stats" with the 3 sections (Last Invocation + Prior Invocations + History) needed to support the 3-operation persistence requirement the user themselves named in the 24-00 framing. The user's hypothesis is preserved at the file-structure level + enriched at the per-file content level.

**Why the protocol adoption is reversed.**

The 2026-05-24_00-20 inquiry adopted `multi_resolution_navigation.md` as routeman's persistence mechanism with the rationale: "the user's stated functions map point-for-point to the protocol's resume mechanism" + "don't reinvent the wheel" (the 24-00 finding's first principle).

The structural problem: the protocol was designed as a STANDALONE protocol with breadth (coverage modes, batch_size, expansion_policy, scheduling_policy) for flexibility across multiple consumers. Routeman is one consumer. Adopting verbatim brought in features routeman doesn't use — the 7-of-10 status vocabulary use (3 unused), the multiple unused frontier-record fields. Per Sensemaking Frame-exit Completeness perspective (Verdict Rigor on "the protocol was adopted for the resume mechanism, not for the batched-expansion control"): the dead-inheritance is provable structurally and the resume mechanism is satisfied by a much simpler routeman-native vocabulary.

The "don't reinvent the wheel" principle still applies — but at the operation level (read-prior + recalibrate + add-new), not at the field-schema level. Routeman's simpler `_route.md` with 3 sections IS the operation; it doesn't need the protocol's full schema vocabulary to perform it.

**Why multi-head doesn't justify the current heaviness.**

The 24-00 finding's rationale for adopting the protocol included implicit multi-head considerations (the protocol's frontier-candidate-record schema is structured to support cross-instance aggregation). But per `docs/canon/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md`, multi-head aggregation lives in the **navigation session** (the cross-run-steering session-role described there — distinct from the `/routeman` discipline; the navigation session is the actor that invokes `/routeman` across N completed worker outputs), NOT in each Worker's routeman output. Each Worker produces ONE output; the navigation session reads N and aggregates. Routeman's output need only be self-describing on disk + worker-identifier-inherent + stable schema (the 3 properties Sensemaking Ambiguity 2 collapsed). The 13-field protocol schema is NOT what enables multi-head; the inquiry folder + timestamp inherently provide worker-identifier.

The multi-head walkthrough in the Finding section above demonstrates the 3 properties hold for the committed shape.

**Why the `why_this_might_be_important` field is contingent (not settled).**

Innovation's Absence Recognition at redesign-level surfaced: WHY (per-route field) already carries cycle-content anchor; `why_this_might_be_important` is REDUNDANT with WHY in different form (the supposed meta-vs-object distinction is documentation-machinery). This is a real structural finding.

But: the field was committed by a prior inquiry (2026-05-23_18-58) through that inquiry's own SIC pipeline. Critique's prosecution surfaced that the user has NOT explicitly called out `why_this_might_be_important` as bad (in contrast to their explicit `nav_sum_notes.md` "this is stupid idea" about warming_summary). Cutting a prior commitment via structural-only argument without empirical evidence sets a precedent for prior-inquiry-reversal-without-evidence — could destabilize the project's iterative inquiry pattern.

The empirical-evidence-gated revival path resolves this tension: keep the field NOW with REPAIR constraints (cycle-anchor required); if a future LAYER-2 audit shows the field consistently produces filler reasoning across multiple invocations, then promote Candidate #2 with evidence backing.

**Why the precedent-setting is named explicitly.**

Routeman is the only shipped Boundary discipline (per `docs/canon/thinking_disciplines/anatomy/discipline_taxonomy.md` updated 2026-05-27). When `/reflect` (the backward-facing Boundary pair, preserved at `cognitive_harness/non-active/reflect/`) is revived, it will inherit a structural template. A simpler routeman shape sets a simpler reflect template; this reduces accidental complexity propagation. Named explicitly so future inquirers don't have to re-derive the implication.

**What could be wrong — the strongest prosecution against the finding.**

The strongest counter: the inquiry's recommended Path C + γ REPAIR is conservative; the user's hypothesis was much closer to "minimum complexity" (Path A) and Innovation's Path E was more aggressive. By selecting the conservative path, the inquiry preserves a contingent decision (the γ-field) that may itself be the source of further complexity.

The defense: the empirical-evidence-gated revival path explicitly preserves the option to revisit. The conservative path is the lowest-risk simplification given that operational evidence on the γ-field hasn't accumulated. If operational evidence supports the cut, Candidate #2 promotes to ACTIONABLE in a follow-up inquiry. The inquiry doesn't close the door on further simplification; it opens a structured revisitation path.

## Open Questions

### Monitoring

- **`why_this_might_be_important` filler-rate post-ship.** Observable in routeman invocations after the spec edits ship; specifically, whether the per-Route field carries cycle-anchored content or generic filler. The LAYER-2 audit protocol (when authored) provides the mechanism; manual review of the next ~5 routeman invocations is the bootstrap. If filler-rate runs high, the empirical-evidence-gated revival path for Candidate #2 activates.

- **Two-vocabulary friction after dropping the protocol alias.** The 24-00 finding flagged this as a Monitoring item; this inquiry's recommendation to drop the alias eliminates the friction at the source. Monitor: does any cross-document reference accidentally re-introduce the alias?

- **`/reflect` inheritance pattern.** When `/reflect` is revived, observe whether its output template inherits the simpler routeman shape (per the precedent-setting principle) or accidentally reintroduces complexity. If the latter, the precedent-setting note in this finding needs to be lifted to a project-canonical principle.

### Blocked

- **The LAYER-2 audit protocol authoring.** Blocked until Q4 in `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` is addressed. The audit is what converts post-ship operational data into a structural decision signal for the contingent γ-field.

### Research Frontiers

- **Cross-inquiry aggregation pattern.** Per routeman's existing FF-4 from the 24-00 finding. The committed shape supports per-inquiry persistence; project-scale aggregation across N inquiries' routeman outputs is a separate concern with its own design space.

### Refinement Triggers

- **If the LAYER-2 audit shows filler-meta-reasoning failure-rate ≥ threshold across ≥5 post-ship routeman invocations**, this finding's contingent decision (keep `why_this_might_be_important`) re-opens. Promote Candidate #2 with empirical evidence backing in a follow-up materialization inquiry.

- **If the post-ship usage reveals a routeman use-case where the simplified shape provably fails** (e.g., a multi-head consumer with concrete needs the simplified output can't meet), this finding's commitment to the simpler shape re-opens for that specific case.

- **If the rename-from-navigation has secondary cleanup remaining** (e.g., stale cross-references in other project docs pointing at the old `/navigation` discipline), a sweep inquiry to consolidate those references becomes a refinement candidate.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
now i want you to read devdocs/routeman_releted/problem.md and understand it fully.  and analyze what is bad with output logic of current routeman,  what makes it hard to understand . and if it is possible to simplify (not simplifying enumaration, or compressing it , we need enumeration of routes for sure ) routeman output logic, so still it will work wit multihead worker session etc too
```

Plus the `devdocs/routeman_releted/problem.md` contents:

```text
current routeman discipline creation had context poison by already existing deprecated navigation related content. 

This poison was mostly about output logic of routeman and how it should work. 
poisining files are moved in to

/Users/ns/Desktop/projects/native/cognitive_harness/non-active/multi_resolution_navigation.md
/Users/ns/Desktop/projects/native/cognitive_harness/non-active/navigation_context_intake_my_version.md
/Users/ns/Desktop/projects/native/cognitive_harness/non-active/navigation_context_intake.md
 (doesnt mean these are bad, or not feasible. but we should be suspectful of these ideas..)


since routeman was created project folders are re structured to be cleaner, and to prevent more further poisoning. 


Yet we need to understand routeman and and current poisining (maybe most of it is good.. we dont know)


I think main thing we need with routeman is 2 things 

one logic to enumarete routes , this is main output, routeman.md inside inquiry folder

other logic is to save the state of route calculation stats, maybe _route.md which saves datetime of the calcualtion, and if new routeman is run, it will be updated... 

but maybe this is missing some vital information? 


lets think it through. 
```

</details>
