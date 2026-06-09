## User Input

`devdocs/inquiries/2026-06-01_15-28__inquiry_elaboration_process_layer/_branch.md`

(Purpose: surface what bears on IE's process-layer design — the call-site, input-supply, spawn mechanics, runtime gates, branch.md rewrite, reference-authority's new home, and the cross-runner generalization.)

---

# Surfacing Artifact — IE Process Layer

**Mode:** artifact case · **Entry point:** signal-first · **Territory:** explicit-bounded (the seven observation targets bound the sweep) · **Stance:** inclusion-under-uncertainty.

## Traversal Trace

### Region A — The settled meaning + structure that the process layer wires to (5 priors)

| # | Item | Relevance | Conf | Note |
|---|---|---|---|---|
| A1 | `2026-06-01_11-27__…recent_context/finding.md` — controlling structural prior | **core** | HIGH | The §5 schema IE produces at runtime: 3 inputs `{project_goal, original_query, recent_context}` + the elaborated_inquiry output (anchor-grounded family + emphasis variants + scope versions + `requests:[{request, how_connected_with_other_part, seq_or_parallel?}]`); §4 failure modes (drift / flattening / anchor-detachment / anchor-imbalance / missed-split / over-reach). The process layer reads this as the artifact-shape passing through the call-site. |
| A2 | `2026-06-01_09-54__…structure_user_design_compare/finding.md` | **core** | HIGH | Self-containment (zero neighbor-naming in IE's spec); reference-authority **dropped from IE and re-homed** (re-home unresolved — T6 closes here); R-x phrasing "*the surrounding orchestration layer supplies it*" already names the process-layer role abstractly. |
| A3 | `2026-06-01_01-17__…scope_and_coverage/finding.md` | **core** | HIGH | Migration principle: comprehension+fidelity migrate INTO IE; orchestration STAYS runner-side. The 7-border NOT-list including **spawn = runner** + meta-routing (Layer-Commitment, Synthesis-Trigger) STAYS-runner. |
| A4 | `2026-05-31_22-30__…discipline_or_not/finding.md` | **core** | HIGH | The load-bearing perception/action split: IE *perceives* the request-structure verdict + the fidelity verdict; the *runner* spawns and acts. Settles T3's design. |
| A5 | `2026-06-01_11-46__loop_diagnose__…/finding.md` | **sub** | HIGH | LOOP_DIAGNOSE MCs the process design must not silently violate: MC-A (surfacing's discipline-target trigger — applies IF IE is invoked from a runner whose `_branch.md` write is the natural pre-flight); MC-D (CONCLUDE's Inherited-Commitments broader-reading); MC-C (critique's scan-for-neighbor-names — IE's spec must remain neighbor-free even after process-wiring). |

### Region B — The runner specs (the call-site target + cross-runner generalization)

| # | Item | Relevance | Conf | Note |
|---|---|---|---|---|
| B1 | `cognitive_harness/MVLw/SKILL.md` step 3 (`_branch.md` template write) | **core** | HIGH | Current heavy template — Question (5 meta-aspects) + Goal + Source Input + Scope Check + Layer Commitment + Synthesis Trigger. This IS the comprehension+fidelity bundle the migration table moves into IE. After IE: the template thins to "encode IE's elaborated_inquiry output into `_branch.md`" + the runner-meta sections (Layer-Commitment + Synthesis-Trigger STAY). |
| B2 | `cognitive_harness/MVLw/SKILL.md` step 3.5 (Transcription-audit fail-safe) | **core** | HIGH | The structural trigger-then-verify pattern. This audit is part of what migrates INTO IE's verify phase (per the 11-27 migration table) — meaning: post-IE, this section disappears from the runner (IE has done it). |
| B3 | `cognitive_harness/MVLw/SKILL.md` EXECUTE PIPELINE structure | **core** | HIGH | Su → S → D → I → C (the loop disciplines). The call-site for IE is BEFORE step 3 (the `_branch.md` write); a candidate **Step 0 — Elaborate the inquiry** before the existing step 3. |
| B4 | `cognitive_harness/MVL/SKILL.md` step 3 (classic — same `_branch.md` template pattern) | **sub** | HIGH | Parallel runner; same template; the cross-runner generalization (T7) must accommodate both runners with one abstract contract. |
| B5 | The MVLw timestamp-policy edit (this session, hours ago) | **side** | MED | The runner-spec already gained one process-rule recently (the History-entry timestamp policy); IE-wiring is another runner-spec process-rule addition. Same edit-site, same pattern. |

### Region C — Protocols IE interacts with

| # | Item | Relevance | Conf | Note |
|---|---|---|---|---|
| C1 | `cognitive_harness/protocols/branch_inquiry.md` — current spawn primitive | **core** | HIGH | Creates ONE child inquiry under ONE parent. Trigger forms: `branch_from: <parent>` + `branch_source: <anchor>` + `question: <child>`. Does NOT natively handle "N parallel siblings from one user request." Either branch_inquiry extends (a new `branch_set` mode) OR a new sibling primitive emerges (`spawn_set`). T3 needs to choose. |
| C2 | `cognitive_harness/protocols/conclude.md` — downstream consumer | **sub** | HIGH | Consumes the inquiry's outputs at iteration-complete-yes; references _state.md's Synthesis-Trigger / Layer-Commitment via the Inherited-Commitments-Re-test section. The MC-D broader-reading test applies here. After IE-wiring, CONCLUDE reads the same _state.md sections (which IE indirectly populated via the runner). |
| C3 | `cognitive_harness/protocols/loop_diagnose.md` — diagnostic framing | **side** | MED | Not directly relevant to IE-wiring, but the MC-A trigger fires on inquiries whose `_branch.md` target is a discipline artifact — IE itself qualifies, and the process-layer wiring must keep IE invocable in that case without circularity. |

### Region D — Sibling-discipline runtime patterns (cross-runner exemplars)

| # | Item | Relevance | Conf | Note |
|---|---|---|---|---|
| D1 | `cognitive_harness/routelister/references/routelister.md` §3.5 + §5 — PERSIST | **core** | HIGH | Existing pattern: a discipline that writes BOTH a per-run artifact AND a persistent index, every run, **standalone included**. Standalone-ness is key — routelister works with or without a surrounding runner. The same standalone-ness should apply to IE (it can be invoked outside MVLw). |
| D2 | `cognitive_harness/routeman/references/routeman.md` §3.2 — Read-Policy + Read-Failure Default | **core** | HIGH | The MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY tiers + the FLAG+proceed-without default. Exemplary input-policy pattern for IE's three inputs (T2): `original_query` MANDATORY, `project_goal` MANDATORY-WHEN-AVAILABLE, `recent_context` SHOULD. |
| D3 | `cognitive_harness/surfacing/references/surfacing.md` §3 + §5 — Reception + dual output | **sub** | HIGH | Pattern: the discipline receives inputs at Reception; emits two work-products (workspace + thin artifact). IE has its own version (substantive output + thin verdict header); the call-site pattern is analogous — the runner supplies inputs, the discipline emits, the runner consumes. |
| D4 | `cognitive_harness/sense-making/references/sensemaking.md` — invocation pattern | **side** | MED | Invoked from within the pipeline; consumes prior outputs; emits its own canonical file. IE's invocation is similar but at a different pipeline position (pre-loop vs in-loop). |

### Region E — Project memories + canonical constraints

| # | Item | Relevance | Conf | Note |
|---|---|---|---|---|
| E1 | `feedback_disciplines_self_contained` memory | **core** | HIGH | The adjudicator. The process-layer design lives in **runner specs** (which legitimately name disciplines) NOT in IE's own spec; IE's spec must remain neighbor-free. The wiring goes one direction: runner-spec → invokes IE; IE-spec doesn't know about runners. |
| E2 | `project_canonical_protocol_location` memory | **core** | HIGH | Edits go to `cognitive_harness/` first (not `~/.claude/skills/`). The MVLw/MVL SKILL.md edits this process design proposes target `cognitive_harness/`. |
| E3 | `project_end_goal_loop_architecture` memory | **sub** | HIGH | Multi-head + merging loops are the project trajectory. T3 (spawn mechanics) and T7 (cross-runner) must accommodate "spawn N parallel inquiries" — that's the multi-head future the project explicitly anticipates. |
| E4 | `feedback_mvl_pipeline_continuation` memory | **side** | MED | /MVL+ runs all 5 disciplines continuously; don't stop mid-pipeline. The IE-as-Step-0 wiring should not introduce a stop-mid-pipeline point under normal conditions (only FLAG/RE-RUN gates may halt). |
| E5 | The Layer-Commitment + Synthesis-Trigger sections of `_branch.md` (the runner-meta) | **sub** | HIGH | These STAY runner-side (per A3 migration principle) even after IE absorbs comprehension+fidelity. The runner-meta is the orchestration's framing of HOW to run the inquiry, not WHAT the inquiry is about. |

### Region F — Confirmed-absent for this run

- **Meaning re-litigation** — settled across 22-30 / 13-31 / 20-08; out of territory.
- **Structural re-litigation** — settled at 09-54 + 11-27; out of territory.
- **IE spec authoring** — that's Route 1 of the IE-trajectory route-map, a separate authoring action; this run is process-design only.
- **Project-hygiene fixes** (timestamp rule for classic MVL; installer codex.sh fix) — orthogonal to IE process layer; covered by a different route on the prior routelister run.

## State Summary

**Territory echo:** the 5 priors that set IE's runtime artifact-shapes + the runner specs that host the call-site + the protocols IE interacts with + the sibling-discipline runtime patterns that exemplify standalone-ness and input-policy + the project memories that constrain the design.

**Purpose echo:** surface what bears on the seven observation targets (call-site / input-supply / spawn mechanics / runtime gates / branch.md rewrite / reference-authority re-home / cross-runner generalization).

**Coverage map:**
- Region A — confirmed (5 priors, all in context). core.
- Region B — confirmed (runner specs spot-checked at the migration-target sections). core.
- Region C — confirmed (3 protocols; branch_inquiry's single-child limitation is a key constraint for T3). core/sub.
- Region D — confirmed (sibling exemplars surfaced for cross-runner generalization). core/sub.
- Region E — confirmed (5 project memories; the self-containment one is the load-bearing adjudicator). core/sub/side.
- Region F — confirmed-absent.

**Concept-names list:**
- *the call-site* (T1) · coined · B3 · the place in the runner's pipeline where IE is invoked; candidate location = "Step 0" before MVLw step 3.
- *input-supply pattern* (T2) · coined · D2 · per-input read-policy (MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY) using routeman's vocabulary.
- *spawn-set primitive* (T3) · coined · C1 · the missing primitive: branch_inquiry handles ONE child; IE's `request-structure verdict` may require N. Either extend branch_inquiry or introduce a sibling primitive.
- *fidelity-FLAG gate* (T4) · coined · A1 · the runtime gate triggered when IE's fidelity-verdict is `FLAG` rather than `PASS`. The asymmetric-failure stance (a passed misframing is worse) biases the gate toward halt-before-loop.
- *branch.md migration* (T5) · vocabulary · A3 + B1 · the rewrite that thins the runner's `_branch.md` template as comprehension+fidelity work moves into IE.
- *reference-authority re-home* (T6) · vocabulary · A2 · the deferred residual; candidates surfaced for sensemaking to decide (runner-side pre-flight / separate protocol / absorbed elsewhere).
- *abstract call-site contract* (T7) · coined · D1+D3 · the runner-side contract that any runner adopting IE satisfies — pattern from routelister's "standalone-included" + surfacing's Reception input-pattern.
- *the migration direction* · principle · E1 · runner-spec → invokes IE; IE-spec doesn't know about runners. The wiring is one-way to preserve IE's self-containment.

**Frontier flags (handed to sensemaking):**
- **P1 (call-site).** Where exactly does IE run in MVLw? Candidate: a new **Step 0** before the existing step 3 (`_branch.md` write). Sensemaking should confirm the natural seam.
- **P2 (input-supply).** What read-policy applies to each of IE's three inputs? Project_goal needs a supplier; recent_context needs a supplier; original_query is the user's raw input.
- **P3 (spawn mechanics).** Extend branch_inquiry to handle the `request-structure verdict`, OR introduce a new sibling primitive (`spawn_set` / `branch_set`)? Sensemaking should pick.
- **P4 (runtime gates).** What's the FLAG-on-fidelity behavior — halt-before-loop, single-bounce, user-confirm, RE-RUN? The asymmetric-failure stance biases toward halt; concrete spec needs sensemaking adjudication.
- **P5 (branch.md rewrite — exact diff).** What stays in the runner's `_branch.md` template after IE-wiring? Layer-Commitment + Synthesis-Trigger + the Source-Input echo + Scope-Check echo? Where does each migrated item land in IE's output? Decomposition will detail.
- **P6 (reference-authority home).** Three candidates: runner-side pre-flight check; standalone protocol/discipline; absorbed into surfacing's existing project-memory handling. Sensemaking + critique to settle.
- **P7 (cross-runner generalization).** What's the abstract contract — name the interfaces (call-site / input-supply / output-consume) without coupling IE to MVLw? Routelister's "standalone-included" pattern is the closest exemplar.
- **P8 (self-containment-of-the-process-design).** The process layer LIVES IN runner-specs, NOT in IE's spec. Sensemaking must confirm: this run produces edits to `cognitive_harness/MVLw/SKILL.md` (and analogously to MVL classic), NOT to IE's `references/inquiry-elaboration.md`. IE remains neighbor-free; the runner-spec legitimately names IE.

**Workspace-populated status:** `{populated: true, populated-at: 2026-06-01_15-29, extent: Regions A–E full; F confirmed-absent}`.

## Telemetry

- Cycles: 1 (territory mostly pre-loaded in session context from earlier reads; one targeted spot-check on MVLw step 3 + branch_inquiry trigger forms).
- Items enumerated: 20. By level: core 11 · sub 7 · side 2 (+ 4 confirmed-absent regions).
- items_with_mtime: 0 (no `stat` calls; all items either inquiry-folder-dated or canonical-non-dated).
- Boundary-discovery sub-phase: not fired (territory explicit-bounded by the seven observation targets).
- LAYER-1 failure modes self-checked:
  - **Missed-relevance**: mitigated by including D1+D2 (sibling exemplars for the standalone-included and read-policy patterns); the routeman read-policy was the key high-value find for T2.
  - **Surfaced-irrelevance**: minimal (Region F held out-of-territory items absent).
  - **Recency-Bias-Filter**: not fired (no items filtered by recency).
- LAYER-2 failure modes self-checked:
  - **Interpretive-overstep**: avoided — the frontier flags P1–P8 surface questions for sensemaking, not pre-decided answers.
  - **Purpose-loss**: not fired (every item has a goal-bias tag to one or more of T1–T7).
  - **Self-coupling-to-downstream**: avoided — surfacing's outputs are evidence for sensemaking; the relevance verdicts are content-driven (purpose-conditioned), not consumer-pre-dependent.
- **Self-assessment: PROCEED** — territory traversed at the design-question level; the call-site candidate (Step 0) is surfaced; the input-supply pattern exemplar (routeman read-policy) is in hand; the spawn-mechanics question is sharpened (extend branch_inquiry vs new primitive); the runtime-gate bias is named (asymmetric-failure → halt); the reference-authority candidates are enumerated; the cross-runner exemplar (routelister standalone-included) is in hand. Sensemaking should resolve P8 first (the self-containment-of-the-process-design check) — it's load-bearing for every other answer.
