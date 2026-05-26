---
status: active
model: claude-opus-4-7[1m]
effort: unknown
---
# Finding: autonomy register and discipline-read protocol

## Question

**From `_branch.md`:** What is the structural design of the project-level autonomy register file (its location, format, contents, lifecycle) AND the discipline-read protocol (when disciplines read it; how they handle absent / malformed / out-of-range values) AND the write protocol (who has write authority; what triggers writes; what record is left), such that routeman's graduated-autonomy classification feature becomes implementable under the corrected isolated-session + file-scanning architecture, and such that the register integrates cleanly with the adjacent `_navig.md` and `_state.md` sidecar conventions?

The user explicitly asked the inquiry to "dive deeper" on Question 1 from `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` (the frontier-questions finding for routeman). Q1 named the problem: routeman's identity sentence references "the project's current autonomy level" as load-bearing input but the corpus had no mechanism by which a discipline reads this level at runtime. This inquiry produces the design.

For context: `routeman` is the renamed `/navigation` discipline — a cycle-consumer discipline that produces a Route Map (enumeration of next moves) and includes a graduated-autonomy classification feature that partitions the 16-type movement-type taxonomy into auto-emitable types vs human-judgment-required types based on the project's current autonomy level. Without a runtime mechanism to read that level, the feature is unimplementable. Per `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md`, routeman runs in an isolated session and reads inquiry artifacts via file-scanning — so the mechanism must be file-mediated, not an in-context parameter from a runner.

---

## Finding Summary

- **The design is one new file + a read convention + a phase-calibrated write protocol.** The new file is `docs/autonomy_level.md` — a project-wide markdown+YAML-frontmatter sidecar tracking the current meta-loop autonomy level. The read convention is documented as reusable but committed only for routeman in this inquiry. The write protocol is human-edit-only at first ship (L0/L1) with a system-warning hook capability; system-set writes are deferred to an L2+ follow-up inquiry when calibration data is available.

- **`docs/autonomy_ladder.md` already exists** as a comprehensive 6-level (L0-L5) operational meta-loop ladder with a 9-axis role-allocation table. This inquiry adopts that ladder's value space verbatim — the register inherits L0-L5 as its `current_level` enum. The ladder DEFINES the levels; the register tracks WHERE the project is on the ladder right now.

- **Two-ladders disambiguation: the register tracks the meta-loop ladder, NOT `docs/desc.md`'s Level 0-4+ human-role trajectory.** The project has two related but distinct autonomy ladders. Routeman's auto-vs-judgment feature correlates with `autonomy_ladder.md` Section 5's per-level Selector subset (forward-only at L2; +REVISIT at L3; etc.), so routeman reads the meta-loop ladder. The desc.md trajectory tracks who reviews self-modifications — a different concern. The register's `ladder` field defaults to `meta_loop` and the value space is L0-L5; the schema can extend to a second field if a future discipline needs desc.md's level.

- **Schema is 6 fields: `current_level`, `ladder`, `set_at`, `set_by`, `rationale`, `transition_history`.** Minimum-but-adequate for first ship. `transition_history` is load-bearing for the LAYER-2 Calibration-Drift mode (without it, the audit substrate is lost). Additional candidate fields (`validated`, `next_gate`, `schema_version`) are scope-setting examples for FF-1 (frontmatter field-names finalization) but NOT commitments here.

- **Read protocol uses a 3-tier failure-handling vocabulary: INFO / ERROR / ERROR.** Absent register → default to L0 + emit informational warning (routeman continues operating at L0). Malformed register (YAML parse failure or missing required fields) → halt + flag (don't silently continue under degraded state). Out-of-range value (e.g., `current_level: L7`) → halt + flag. The 3-tier vocabulary makes the categories explicit; the rules favor SAFETY over graceful degradation when the register's content is corrupt.

- **Write protocol is human-edit-only at first ship.** The user updates `docs/autonomy_level.md` when graduation criteria are met (per `autonomy_ladder.md` Section 6 evidence-gates: e.g., L1→L2 needs ≥10 navigation maps with selection rationale + `navigation_memory.md` schema). The user appends prior state to `transition_history` and updates `current_level` + `set_at` + `set_by` + `rationale`. A system-warning hook capability is defined: routeman (or any consumer) MAY emit a warning when it observes an L_N → L_{N+1} evidence-gate is met. System-SET writes (the system editing the register directly) are deferred to an L2+ follow-up inquiry.

- **The register is PROJECT-LEVEL, distinct from per-inquiry and per-session sidecars.** It lives in `docs/`, not in inquiry folders. It does not overlap with `_state.md` (inquiry pipeline status), `_branch.md` (inquiry question/goal), `_navig.md` (routeman's per-invocation persistence ledger), `_meta_state.md` (cross-inquiry traversal state at L1+), or `navigation_memory.md` (Navigator selection memory at L2+). The sidecar-proliferation risk is mitigated by clear distinct purpose + project-wide scope.

- **The design is DERIVED FROM priors, not arbitrary.** The file-mediated read is FORCED by 16-31's isolated-session + file-scanning architecture. The user-language-aligned naming (`autonomy_level.md`) is an application of the LLM-operational-design principle (now at N=3 evidence after 18-58 + 24-00 + this inquiry). The project-wide placement category was made coherent by 24-00's hybrid placement-by-scope framing. The L0-L5 value space is inherited verbatim from `autonomy_ladder.md`. Recording the derivation prevents future inquiries from treating these as arbitrary preferences.

- **Q1 from the frontier-questions finding is RESOLVED-WITH-DESIGN.** Routeman's graduated-autonomy classification feature becomes implementable. The LAYER-2 Calibration-Drift mode becomes DETECTABLE (transition_history provides the audit substrate). The SKILL.md authoring inquiry inherits the design and writes the actual file + the routeman read-section.

- **6 frontier flags remain open** for follow-up: FF-1 (frontmatter field-names finalization at SKILL.md authoring time); FF-2 (read-convention placement — in routeman SKILL.md vs a new protocol doc); FF-3 (system-set write triggers, deferred to L2+ follow-up); FF-4 (generalization to other autonomy-aware disciplines, research frontier); FF-5 (per-discipline overrides, research frontier); FF-6 (two-ladders reconciliation when they diverge in practice, research frontier).

---

## Finding

A short orientation before the design. The inquiry's question came in as Question 1 from the routeman frontier-questions finding — the question that routeman's "graduated-autonomy classification" feature couldn't be implemented because nothing told routeman what the project's current autonomy level was. The user asked us to dive deeper into the candidate resolution path the frontier-questions finding had named: "design the project-level autonomy register file and the discipline-read protocol." Surfacing found one major fact that reshaped the inquiry: `docs/autonomy_ladder.md` already exists as a comprehensive 6-level meta-loop ladder. So the inquiry isn't designing the ladder — it's designing the register that says WHERE on the ladder the project currently is. Surfacing also found a less expected fact: there are TWO autonomy ladders in the project (the meta-loop one in `autonomy_ladder.md` and a different Level 0-4+ human-role trajectory in `docs/desc.md`) — so the inquiry had to resolve which one routeman reads. The rest of the design follows from those two anchors plus a careful read of routeman's existing architectural commitments.

### 1. The autonomy register file (`docs/autonomy_level.md`)

The register lives at `docs/autonomy_level.md` — sibling to `docs/autonomy_ladder.md`. The location is user-language-aligned (the user nominated `docs/autonomy_level.md or similar` in the source input). The format is markdown with YAML frontmatter — the project's standard convention for `docs/` files.

The schema has 6 required fields in the frontmatter:

| Field | Type | Purpose |
|---|---|---|
| `current_level` | enum: `L0` \| `L1` \| `L2` \| `L3` \| `L4` \| `L5` | The current meta-loop autonomy level per `docs/autonomy_ladder.md`. |
| `ladder` | enum: `meta_loop` (default; schema-extensible) | Which ladder this register tracks. Default `meta_loop`; future schema versions may add `human_role` for `docs/desc.md`'s trajectory. |
| `set_at` | ISO 8601 timestamp | When the current level was set. |
| `set_by` | enum: `human` \| `system` | Who set the current level. `human` only at first ship; `system` enabled in L2+ follow-up. |
| `rationale` | string (1-3 sentences) | Why the current level is what it is — cites the evidence-gate from `autonomy_ladder.md` Section 6 or the human decision. |
| `transition_history` | list of `{from, to, set_at, set_by, rationale}` records | Appended on each level change. Preserves prior states. Load-bearing for the LAYER-2 Calibration-Drift audit. |

The file body carries (i) a grep-readable one-line statement of the current level (e.g., `**Current level: L0**`) for tools that don't parse YAML, and (ii) a brief disambiguation note explaining which ladder this register tracks.

Example file content at L0 (initial commit):

```markdown
---
current_level: L0
ladder: meta_loop
set_at: 2026-05-24T00:00Z
set_by: human
rationale: "Initial commit. L0 = current per docs/autonomy_ladder.md; no graduation evidence yet."
transition_history: []
---

# Autonomy Level

**Current level: L0**

This file tracks the current meta-loop autonomy level for this project, per
`docs/autonomy_ladder.md`'s L0-L5 ladder. Routeman (and any future autonomy-aware
discipline) reads `current_level` from this file's frontmatter to operate its
graduated-autonomy classification.

Note: this register tracks the META-LOOP ladder (autonomy_ladder.md L0-L5), NOT
`docs/desc.md`'s Level 0-4+ human-role trajectory. The two ladders are related but
distinct; see the disambiguation section in `docs/autonomy_ladder.md`.

Edits to this file are HUMAN-EDIT-ONLY at first ship (L0/L1). When graduating to a
new level, update `current_level`, `set_at`, `set_by`, `rationale`, AND append the
prior state to `transition_history` as `{from, to, set_at, set_by, rationale}`.
```

The lifecycle is persistent across all sessions. `current_level`, `set_at`, `set_by`, and `rationale` are updated in-place when the level changes. `transition_history` is appended (the prior values are preserved as a new history entry, never overwritten).

The schema has candidate extensions deferred to FF-1: `validated` (was the level claim audit-confirmed?), `validated_by` (which audit invocation confirmed it), `next_gate` (forward-looking pointer to what evidence would advance), `schema_version` (for forward-compatibility). These are NOT committed in this finding; they are scope-setting examples for SKILL.md authoring to finalize.

### 2. The read protocol

Routeman reads `docs/autonomy_level.md` on each invocation as part of its file-scan (per `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md`'s file-scanning architecture). The convention is documentable as reusable for other autonomy-aware disciplines but committed only for routeman in this inquiry.

The read steps:

1. **Locate.** Routeman looks for `docs/autonomy_level.md` in its file-scan path.
2. **Parse.** YAML frontmatter is parsed; `current_level` is extracted (required); `ladder` defaults to `meta_loop` if absent.
3. **Handle failure (3-tier vocabulary: INFO / ERROR / ERROR).**
4. **Return.** The `current_level` value is provided to routeman's graduated-autonomy classification feature.

The failure-handling rules favor SAFETY over graceful degradation when the register's content is corrupt:

| Tier | Condition | Action |
|---|---|---|
| **INFO** | Register file absent | Default `current_level = L0`; emit informational warning: *"autonomy register absent at `docs/autonomy_level.md`; defaulting to L0; consider creating the register (see `docs/autonomy_ladder.md` for ladder reference)."* Routeman continues operating at L0. |
| **ERROR** | Register present but YAML parse failure, or required fields missing | Halt routeman + emit flag: *"autonomy register malformed at `docs/autonomy_level.md`; fix before re-invocation."* Don't silently continue under degraded state. |
| **ERROR** | `current_level` value out-of-range (not in `{L0, L1, L2, L3, L4, L5}`) | Halt + flag: *"autonomy register has invalid current_level value; valid values: L0-L5."* |

The INFO tier (absent register) is the graceful path because L0 is the genuinely-current state per `autonomy_ladder.md` ("L0 = current"); defaulting to L0 is the maximally-conservative assumption. The ERROR tiers (malformed and out-of-range) indicate structural problems that need fixing before routeman can trust the register; silent continuation in these cases would risk operating on a wrong understanding of the autonomy level.

An optional freshness check may also fire: if `set_at` is more than a calibratable threshold ago (default 90 days; calibrate per project's invocation rate), emit a calibration-staleness warning. This is OPTIONAL and the threshold is calibratable — it is not load-bearing for the read protocol.

The read-convention's placement (in routeman's SKILL.md vs a new protocol doc at `cognitive_harness/protocols/autonomy_register_read.md`) is deferred to the SKILL.md authoring inquiry — flagged as FF-2.

### 3. The write protocol

Write authority at first ship is HUMAN-EDIT ONLY. The user updates `docs/autonomy_level.md` directly when graduation criteria are met.

The write trigger is the human's decision that graduation criteria per `autonomy_ladder.md` Section 6 are met. For example, the L1→L2 gate requires ≥10 navigation maps with selection rationale + `navigation_memory.md` schema specified. When the human verifies the gate is met, they edit the file.

The write record: when updating `current_level`, the human MUST:
- (a) Append the prior state `{from, to, set_at, set_by, rationale}` to `transition_history`.
- (b) Update `current_level`, `set_at`, `set_by`, `rationale` to new values.
- (c) Cite the evidence-gate or decision in `rationale`.

A system-warning hook capability is defined (system MAY observe, MUST NOT auto-write at first ship). Routeman (or any autonomy-aware discipline) MAY observe that an L_N → L_{N+1} evidence-gate per `autonomy_ladder.md` Section 6 is met, and emit a warning along the lines of: *"L1→L2 gate may be met: ≥10 navigation maps observed; consider editing `docs/autonomy_level.md`."* The warning is read-only signal; it does NOT trigger an automatic register write.

A graduation workflow closes the loop. When the human edits the file:
1. Verify the evidence-gate per `autonomy_ladder.md` Section 6.
2. Edit `docs/autonomy_level.md` per the write record rules above.
3. Next routeman invocation observes the change and emits a "graduation acknowledged" telemetry signal in its output telemetry block (the exact field name is decided by SKILL.md authoring).
4. Routeman's auto-vs-judgment partition updates per the new level (e.g., L1→L2 expands the auto-emit set to include the L2 system-Selector subset per `autonomy_ladder.md` Section 5).

System-set writes (the system editing the register directly) are DEFERRED to an L2+ follow-up inquiry. Revival trigger: when L1→L2 calibration data is available and the system-Selector graduation is being designed. The candidate shape for system-set is "system-set with human-veto" (system writes a `proposed_level` field; human reviews and either accepts or vetoes), preserved as KILL-with-seed for FF-3.

**Derivation note.** The human-only-first-ship commitment is DERIVED FROM `autonomy_ladder.md`'s "L0 = current" + the phase-calibration principle — system-set writes require calibration data the project doesn't have yet, so committing them now would be premature. This is not a free choice; it is the only choice consistent with the calibration state.

### 4. Sidecar-boundary statement

The autonomy register (`docs/autonomy_level.md`) is PROJECT-WIDE state in `docs/`, distinct from per-inquiry and per-session sidecars:

| Sidecar | Scope | Purpose | Distinct from register because |
|---|---|---|---|
| `_state.md` | per-inquiry | Inquiry pipeline status (which discipline ran, what's next) | Per-inquiry; tracks pipeline, not autonomy |
| `_branch.md` | per-inquiry | Inquiry question/goal context | Per-inquiry; tracks question context, not autonomy |
| `_navig.md` | per-inquiry-OR-project (hybrid; per `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md`) | Routeman's persistence ledger (frontier candidates) | Tracks routeman's run state, not autonomy level |
| `_meta_state.md` | per-meta-loop-session | Cross-inquiry traversal state (visited paths, selections; L1+ artifact) | Tracks traversal, not autonomy level |
| `navigation_memory.md` | per-meta-loop-session | Navigator-side selection memory (L2+ artifact) | Tracks Navigator selections, not autonomy level |
| `routeman.md` | per-routeman-invocation | Route map content | Tracks routes, not autonomy level |

What the autonomy register is NOT:
- NOT per-inquiry (distinct from `_state.md`, `_branch.md`).
- NOT per-meta-loop-session (distinct from `_meta_state.md`, `navigation_memory.md`).
- NOT per-routeman-invocation (distinct from `_navig.md`, `routeman.md`).
- NOT a definition file (distinct from `docs/autonomy_ladder.md`, which DEFINES the levels; the register carries the CURRENT level).
- NOT a consciousness-gradient tracker (distinct from `docs/desc.md`, which describes the consciousness trajectory).

There are no cross-references between the register and other sidecars at first ship. If future use-cases force cross-reference (e.g., the LAYER-2 Calibration-Drift audit needs to read both the register's `current_level` and `_meta_state.md`'s visited-path count), the cross-reference is added in a follow-up inquiry.

### 5. Two-ladders disambiguation note

The project has two related but distinct autonomy ladders:

1. **Meta-loop autonomy ladder** (`docs/autonomy_ladder.md`) — operational ladder for the meta-loop's 9-axis role allocation. Levels L0-L5. The ladder defines WHO plays WHICH ROLE (Worker, Navigator, Selector, Runner, Evaluator, plus Memory / Reflect-channel / Multi-head / Goal-formation axes) at each level.

2. **Consciousness-gradient / human-role trajectory** (`docs/desc.md`) — the human's role monotonically decreasing across Level 0-4+ (bootstrap → reviews-all → reviews-uncertain → strategic → observer → past). Related to but at different granularity than the meta-loop ladder; `autonomy_ladder.md`'s L5 hands off to `desc.md`'s consciousness-gradient framing.

**The register tracks the META-LOOP ladder.** The `ladder` field's default value is `meta_loop`; the value space is L0-L5.

**Derivation note.** The meta-loop ladder choice is DERIVED FROM routeman's auto-vs-judgment partition correlating with `autonomy_ladder.md` Section 5's per-level Selector subset (forward-only at L2; +REVISIT at L3; +RE-RUN DEEPER / WIDEN / REFRAME / DIFFERENT APPROACH / DIAGNOSE / MERGE at L4; full taxonomy at L5). The desc.md trajectory is a different concern (who reviews self-modifications) and is not load-bearing for routeman's graduated-autonomy classification.

A qualitative cross-mapping between the two ladders exists (per `autonomy_ladder.md` Section 8's "Bridge to desc.md"):

| autonomy_ladder.md level | desc.md indicator (rough correspondence; NOT 1:1) |
|---|---|
| L2 (system Selector with context) | position indicator (knows where it is on the ladder) |
| L3 (system Reflect-channel-self-use) | real-time steering (adjusts own course during runs) |
| L4 (system Evaluator at multi-head) | discontinuity awareness (handles session ends, context resets) |
| L5 (system Goal-formation, cumulative-feedback) | spontaneous attention + intrinsic curiosity |

The mapping is **qualitative only**. Use the meta-loop ladder for operational decisions; consult desc.md for the consciousness-gradient endpoint framing.

**Extension hook.** If a future discipline needs desc.md's Level 0-4+, the schema can add a second field (e.g., `human_role_level`) without breaking existing readers of `current_level`. The two-field extension is preserved as a deferred option, not committed at first ship.

### 6. Why this design over the alternatives

Three alternative file-spec shapes were considered and rejected:

- **REORGANIZE-WITHOUT-ADDING** (put a "Current State" section in `autonomy_ladder.md` instead of a new file): rejected because definition rarely changes while state changes when graduating; coupling them violates lifecycle separation and risks edit collisions.
- **DO-NOTHING** (no register; routeman infers the level from observable signals like `_meta_state.md` existence): rejected because it violates the user's explicit framing ("design the register file") and because inference is fragile (false-negatives if signals exist without graduation).
- **ADD-TEST** (no file; runtime user-prompt at routeman start): rejected because it violates 16-31's commitment that routeman runs in isolated session and reads from files, not from in-session user prompts.

Two alternative read-protocol shapes were considered and rejected:

- **Read once at session start; cache for the entire session**: NO-OP because routeman's invocation IS the session per isolated-session architecture; cache reduces to one read per invocation, identical to the default.
- **Read on-demand only when graduated-autonomy classification fires**: rejected because it tightly couples register-read to one feature; if more features later need the level, per-feature reads must be added.

One alternative write-protocol shape was killed but preserved for L2+ follow-up:

- **System-set with human-veto from first ship**: killed because it violates phase-fit (system-set requires calibration data the project doesn't have at L0/L1). Preserved as KILL-with-seed for FF-3 — when L2 calibration data is available, system-set-with-veto is the right shape for the L2+ follow-up inquiry.

A 3-tier failure-handling vocabulary (INFO / WARN / ERROR) was proposed during the inquiry's Inherited Frame Audit, with malformed-register classified as WARN-continue (degrade to L0 + log fix-required). The vocabulary was adopted but the WARN-continue classification was rejected: routeman operating on L0 silently while the register is malformed risks miscalibrating the LAYER-2 Calibration-Drift audit substrate. The original halt-and-flag rule for malformed-register survives.

### 7. Frontier flags (residual opens)

Six frontier flags remain for follow-up inquiry or SKILL.md authoring:

- **FF-1 (frontmatter field-names finalization).** The 6 committed fields are the minimum; candidate extensions (`validated`, `validated_by`, `next_gate`, `schema_version`) need adjudication. Downstream consumer: SKILL.md authoring inquiry. Revival trigger: when SKILL.md authoring begins.

- **FF-2 (read-convention placement).** Does the read convention live in routeman SKILL.md only, or in a new shared protocol doc at `cognitive_harness/protocols/autonomy_register_read.md` (sibling to `branch_inquiry.md` and `multi_resolution_navigation.md`)? Downstream consumer: SKILL.md authoring. Revival trigger: same as FF-1.

- **FF-3 (system-set write triggers).** The "system-set with human-veto" shape preserved from P3-C is the candidate. Downstream consumer: L2 graduation inquiry. Revival trigger: when L1→L2 calibration data per `autonomy_ladder.md` Section 6 is available (≥10 navigation maps with selection rationale + `navigation_memory.md` schema specified).

- **FF-4 (generalization to other autonomy-aware disciplines).** Other potential consumers (`/reflect`, `/intuit`, `/td-critique`) are plausible but not load-bearing yet. Research frontier. Revival trigger: observable — when 2+ disciplines other than routeman are observed wanting to read the register.

- **FF-5 (per-discipline overrides).** A discipline may emerge that needs its own autonomy level independent of project-wide level. Research frontier. Revival trigger: observable — when a discipline emerges with this need.

- **FF-6 (two-ladders reconciliation when they diverge in practice).** If the project's meta-loop level (per the register) and the desc.md human-role-trajectory level diverge in practice (e.g., project at meta-loop L2 but desc.md Level 1), how is the divergence reconciled? Research frontier. Revival trigger: observable — when both ladders' levels are simultaneously specified and diverge.

### 8. Deferred candidates + research-frontier seeds

Three candidates were KILLED but their seeds are preserved for future inquiries:

- **P1-additional REMOVE seed:** if transition_history were tracked elsewhere (e.g., in `_meta_state.md`'s graph-state schema at L4+), removing the field from the register could be viable. Research-frontier seed.
- **P1-C (REORGANIZE) seed:** if `autonomy_ladder.md` were redesigned with state-tracking sections built in, the integrated-file approach might work. Out of scope.
- **P1-C (DO-NOTHING) seed:** inference may be useful as a fallback if register is absent. The current "default-to-L0" rule is a degenerate form of inference. Capture as research frontier on richer inference.
- **P1-C (ADD-TEST) seed:** in a different architecture (in-context routeman invocation with runner-provided parameters), ADD-TEST could work. Out of scope per 16-31.
- **P4-C (project-metadata reframe) DEFERRED:** the "register is not a sidecar; it's project metadata" reframe has merit but introduces new vocabulary. Revival trigger: if 2+ future inquiries surface confusion about sidecar-vs-metadata.

---

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger listing 6 prior outputs + 2 docs. Each commitment that this finding's content depends on is re-tested below.

### From `devdocs/inquiries/2026-05-23_11-30__navigation_surfacing_territory_dependency_recheck/finding.md` (the input-dependency anchor)

- **Commitment:** Routeman is dependent on the cycle's output as input (the cycle-consumer relation); depending ≠ being a configuration.
- **Re-test status:** RE-TESTED.
- **Evidence:** The register read is another consumer-shaped dependency. Routeman reads `docs/autonomy_level.md` for input; the read doesn't make routeman a configuration of whoever writes it. The framing carries forward unchanged.

### From `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` (the design memo)

- **Commitment:** Routeman's 3-layer identity (Navigational paradigm + prescriptive-extension residuals + cycle-consumer process position).
- **Re-test status:** RE-TESTED.
- **Evidence:** The register is a new file in `docs/` that routeman scans; the cycle-consumer layer is unchanged. Paradigm and prescriptive-extension layers are unaffected.

- **Commitment:** The 10 routeman features, including the graduated-autonomy classification feature whose load-bearing input is "the project's current autonomy level."
- **Re-test status:** RE-TESTED + ENABLED.
- **Evidence:** The graduated-autonomy classification feature is now IMPLEMENTABLE — the register provides the runtime substrate it needed. The feature's substance is unchanged.

- **Commitment:** The 9-mode failure framework, including the LAYER-2 Calibration-Drift mode with recognition signal "12/4 split is no longer calibrated to project's autonomy level."
- **Re-test status:** RE-TESTED + ENABLED.
- **Evidence:** The Calibration-Drift mode becomes DETECTABLE. The register provides the DECLARED level; the audit compares declared to observed behavior. `transition_history` provides the historical trace the audit can inspect.

### From `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` (the frontier-questions finding)

- **Commitment:** Question 1 (autonomy-level detection) as Tier-1 frontier with the candidate resolution path "design the register file + the read protocol + the write protocol."
- **Re-test status:** RE-TESTED — RESOLVED-WITH-DESIGN.
- **Evidence:** This inquiry IS the resolution. Q1 should be marked RESOLVED-WITH-DESIGN in the frontier-questions finding (CONCLUDE-side cross-doc impact). The candidate resolution path was followed verbatim.

### From `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` (the cycle-consumer correction)

- **Commitment:** Routeman runs in isolated session + file-scanning architecture + parallel workers + singleton navigator.
- **Re-test status:** RE-TESTED.
- **Evidence:** The register read uses the same file-scanning mechanism this correction specified. The in-context-parameter option for autonomy-level reading is explicitly OFF the table per this commitment. The architecture is preserved; the register is one more file in the scan path.

### From `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` (the staged-mapping + meta-reasoning adoptions)

- **Commitment:** Per-Route `why_this_might_be_important` meta-reasoning field.
- **Re-test status:** INHERITED-WITHOUT-RE-TEST.
- **Reason:** The meta-reasoning field is a per-Route attribute; the autonomy register is a project-wide artifact. They are at different granularity and don't interact directly. The inquiry doesn't change the meta-reasoning field; re-test is not needed.

- **Commitment:** LLM-operational-characteristics-as-design-input principle.
- **Re-test status:** RE-TESTED + APPLIED.
- **Evidence:** The naming decision (`docs/autonomy_level.md` matching the user's nomination) is an explicit application of this principle. This is now the THIRD distinct application (after 18-58's two applications and 24-00's hybrid-naming): naming under user-language alignment is the application class. The principle's N=3 evidence threshold is solidly met; promotion to project-canonical principle is open for an appropriate future inquiry.

### From `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` (the persistence-and-invocation model)

- **Commitment:** Hybrid placement-by-scope for `_navig.md` (per-inquiry-folder when inquiry-scoped; central `devdocs/navigation/<run-id>/` when project-scoped).
- **Re-test status:** RE-TESTED + ADJACENT.
- **Evidence:** The autonomy register's project-wide-only placement is structurally adjacent. The persistence inquiry made "project-scope" a real placement category for sidecars; the autonomy register inherits that category's coherence. The register is project-wide-only (no per-inquiry mode) because it carries a single project-wide value, not per-inquiry persistence.

- **Commitment:** Sidecar-proliferation risk (D12 dimension) and its mitigation via distinct purposes + clear scope boundaries.
- **Re-test status:** RE-TESTED.
- **Evidence:** The register's sidecar-boundary statement (Finding §4) explicitly distinguishes it from `_state.md`, `_branch.md`, `_navig.md`, `_meta_state.md`, `navigation_memory.md`, and `routeman.md`. Each adjacent sidecar's purpose is named; no overlap.

### From `docs/autonomy_ladder.md` (the meta-loop ladder definition)

- **Commitment:** 6-level (L0-L5) meta-loop ladder; 9-axis role allocation; per-level evidence-gates (Section 6); per-level system-Selector subset (Section 5).
- **Re-test status:** RE-TESTED — INHERITED VERBATIM.
- **Evidence:** This inquiry adopts the ladder's value space (L0-L5) as the register's `current_level` enum. Evidence-gates are cited in the write protocol's trigger semantics. Section 5's per-level Selector subset is the reason routeman reads the meta-loop ladder (auto-vs-judgment correlates). No ladder content is redefined.

### From `docs/desc.md` (the consciousness-gradient endpoint document)

- **Commitment:** Level 0-4+ human-role trajectory + consciousness-gradient framing + Baldwin-cycle maturity gate (N≥30 inquiries per discipline).
- **Re-test status:** RE-TESTED — EXPLICITLY DISTINGUISHED.
- **Evidence:** The register does NOT track desc.md's Level 0-4+ trajectory. The two-ladders disambiguation note (Finding §5) explicitly names desc.md as a different ladder and explains why routeman reads the meta-loop ladder instead. The desc.md trajectory is preserved as the project's end-goal framing; the register doesn't compete with it.

---

## Next Actions

### MUST

- **What:** Create the initial `docs/autonomy_level.md` register file at L0, per the specification in Finding §1.
  - **Who:** Human (user) at the project root.
  - **Gate:** Observable — before SKILL.md authoring begins or before any autonomy-aware feature is implemented.
  - **Why:** Without the file, the read protocol's INFO-tier (absent-register → L0+warn) fires; routeman operates at L0 by default but the project is signaling that the register isn't set up yet. Creating the file explicitly commits the L0 state.

- **What:** Update `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` to mark Question 1 as RESOLVED-WITH-DESIGN, citing this finding.
  - **Who:** CONCLUDE-side (this finding's follow-up).
  - **Gate:** Observable — when this finding is committed.
  - **Why:** The frontier-questions finding still labels Q1 as Tier-1 unresolved; readers should know it's been resolved.

- **What:** Write impact notes into adjacent priors (the routeman design memo at 14-39; the cycle-consumer correction at 16-31) noting that the autonomy register design now exists and enables the graduated-autonomy classification feature.
  - **Who:** CONCLUDE-side.
  - **Gate:** Observable — when this finding is committed.
  - **Why:** Readers of those priors should know the runtime substrate they referenced now has a design.

### COULD

- **What:** Open the SKILL.md authoring inquiry for routeman (or extend the existing one if planned), taking this finding's design as input for the routeman SKILL.md's autonomy-register-reading section.
  - **Who:** Any runner spawning a new inquiry; preferably `/MVL2+` with this finding as `branch_from` or a related inquiry.
  - **Gate:** Condition-bound — when SKILL.md authoring is queued in the project's overall progression.
  - **Why:** Turns the read/write protocol designs into actual SKILL.md content; finalizes FF-1 + FF-2.

- **What:** Open the L2+ follow-up inquiry on system-set write triggers (FF-3) when L1→L2 calibration data is available.
  - **Who:** Any runner.
  - **Gate:** Condition-bound — when `autonomy_ladder.md` Section 6's L1→L2 evidence-gate is met (≥10 navigation maps with selection rationale + `navigation_memory.md` schema specified).
  - **Why:** System-set is the next-shape commitment for the write protocol; the seed (system-set with human-veto, from P3-C) is preserved.

### DEFERRED

- **What:** Open the generalization research-frontier inquiry on cross-discipline autonomy-register adoption (FF-4).
  - **Gate:** Observable — when 2+ disciplines other than routeman are observed wanting to read the register.
  - **Why (if revived):** If the read convention generalizes, a project-canonical convention is more efficient than per-discipline reinvention.

- **What:** Open the per-discipline-overrides research-frontier inquiry (FF-5).
  - **Gate:** Observable — when a discipline emerges that needs its own autonomy level independent of project-wide level.
  - **Why (if revived):** Per-discipline autonomy is a real possibility per `autonomy_ladder.md`'s 9-axis frame; an override mechanism may be needed.

- **What:** Open the two-ladders reconciliation research-frontier inquiry (FF-6).
  - **Gate:** Observable — when the project's meta-loop level and desc.md's human-role-trajectory level diverge in practice.
  - **Why (if revived):** Divergence may signal a misalignment between operational ladder and the human-role trajectory; reconciliation may need a structured mechanism.

- **What:** Open the project-metadata reframe inquiry (P4-C deferred candidate).
  - **Gate:** Observable — when 2+ future inquiries surface confusion about whether the autonomy register is a sidecar.
  - **Why (if revived):** The "project metadata" reframe is structurally cleaner; if confusion accumulates, the reframe becomes worth the vocabulary-introduction cost.

---

## Reasoning

### Why this finding over the alternatives

The inquiry started with Question 1 from the routeman frontier-questions finding. Surfacing read the project and discovered that `docs/autonomy_ladder.md` already exists as a 6-level meta-loop ladder — so the inquiry isn't designing the ladder, it's designing the register that tracks the current level on the ladder. Surfacing also discovered a less obvious structural fact: there are TWO autonomy ladders in the project (the meta-loop one and a Level 0-4+ human-role trajectory in `docs/desc.md`) — so the inquiry had to resolve which one routeman reads.

The major design decisions and the considered-and-rejected alternatives:

**Which ladder.** Two reasonable choices: meta-loop or desc.md or both. Adopted meta-loop because routeman's auto-vs-judgment partition correlates with `autonomy_ladder.md` Section 5's per-level Selector subset. Both-equally was rejected as premature commitment (no second consumer needs it yet). Extension hook preserved for future addition.

**Location.** Several candidates: `docs/autonomy_level.md` (sibling to autonomy_ladder.md), section in `_meta_state.md`, section in `autonomy_ladder.md`, project-root dotfile, etc. Adopted `docs/autonomy_level.md` because: it matches the user's nomination (`docs/autonomy_level.md or similar`); `_meta_state.md` doesn't exist at L0 so the register can't depend on it; mixing definition (autonomy_ladder.md) with state (the register) violates lifecycle separation; project-root dotfiles break the `docs/` convention.

**Schema.** Three shapes considered: minimum (just the level), level + rationale + history, level + history + audit + forward-looking fields. Adopted level + history (6 fields). Minimum was rejected for losing provenance (the LAYER-2 Calibration-Drift audit needs transition_history). The richer schema's extra fields (validated, next_gate, schema_version) are scope-setting candidates for FF-1, not commitments.

**Write authority.** Two shapes considered: human-only first ship vs system-set with human-veto first ship. Adopted human-only because system-set requires calibration data (the L1→L2 gate per autonomy_ladder.md Section 6) that the project doesn't have yet — committing to system-set NOW would be premature. System-set is preserved as KILL-with-seed for FF-3 L2+ follow-up.

**Failure-handling.** Two shapes considered: halt+flag uniformly vs three-tier (INFO/WARN/ERROR). Adopted three-tier VOCABULARY but kept the original ERROR rules (malformed → halt+flag, not WARN-continue). The WARN-continue option was killed because routeman operating on L0 silently with a malformed register risks miscalibrating the LAYER-2 Calibration-Drift audit substrate; halt+flag is safer.

**File-spec shape (intervention-shape axis).** Four shapes considered: ADD-CONTENT (new file), REORGANIZE-WITHOUT-ADDING (section in autonomy_ladder.md), DO-NOTHING (inference from observable signals), ADD-TEST (runtime user-prompt at routeman start). Adopted ADD-CONTENT. REORGANIZE rejected for lifecycle separation; DO-NOTHING rejected for fragility + violating user's framing; ADD-TEST rejected for violating 16-31's file-mediated architecture.

### How priors constrain the answer

The derivation notes in Finding §3 and §5 make this explicit: the design is FORCED by priors, not chosen. The file-mediated read is FORCED by 16-31's isolated-session + file-scanning architecture (in-context-parameter is off the table). The user-language-aligned naming is FORCED by the LLM-operational-design principle (from 18-58, now at N=3 evidence). The L0-L5 value space is INHERITED VERBATIM from `autonomy_ladder.md`. The meta-loop ladder choice is FORCED by routeman's auto-vs-judgment correlation with `autonomy_ladder.md` Section 5. The human-only-first-ship is FORCED by phase-calibration (system-set requires calibration data the project doesn't have).

These forced moves mean the design has few free parameters. Where the design DOES have free parameters (schema field-name finalization; convention placement; system-set L2+ shape), they are explicitly flagged as FFs for follow-up rather than committed prematurely.

### What was tested but did not become the verdict

- The 3-tier failure-handling with WARN-continue (C-AUDIT-1's original proposal). The vocabulary was adopted but the WARN-continue rule was rejected on safety grounds.
- The decision-tree shape for the question list (analogous to the persistence inquiry's P1-C). Not relevant here because this inquiry's deliverable is a spec, not a question list.
- The "project metadata" reframe for the register (P4-C). Deferred as revival-triggered.
- The both-ladders-equally schema (P5-C). Rejected as premature.

---

## Open Questions

### Refinement Triggers

The six frontier flags in Finding §7 are refinement triggers — each is a condition under which a deferred decision re-opens:

- **FF-1 re-opens** when SKILL.md authoring needs concrete frontmatter field names; the 6 committed fields are the minimum; candidate extensions need adjudication.
- **FF-2 re-opens** when SKILL.md authoring decides where the read-convention documentation lives.
- **FF-3 re-opens** when L1→L2 calibration data per `autonomy_ladder.md` Section 6 is available, enabling system-set write triggers.
- **FF-4 re-opens** when 2+ disciplines other than routeman want the register.
- **FF-5 re-opens** when a discipline emerges that needs autonomy independent of project-wide level.
- **FF-6 re-opens** when the two ladders' levels are simultaneously specified and diverge in practice.

### Research Frontiers

- **Generalization of the autonomy-register pattern to other autonomy-aware disciplines** (FF-4 elevated). If multiple disciplines emerge with autonomy needs, the read convention may need to become a project-canonical protocol at `cognitive_harness/protocols/autonomy_register_read.md`.

- **Reconciliation between the two ladders when they diverge** (FF-6 elevated). The qualitative cross-mapping in Finding §5 is not 1:1; if the project reaches a state where the meta-loop ladder says L2 but the desc.md trajectory implies Level 1 (or vice versa), the divergence handling is unspecified.

- **LLM-operational-characteristics-as-design-input principle promotion.** The principle is now at N=3 evidence (18-58 originated; 24-00 applied to naming; this inquiry applied to register naming). Promotion from "named for routeman" to project-canonical principle is open for an appropriate future inquiry.

### Monitoring

- **Whether the INFO-tier (absent register → L0+warn) is appropriate in practice** vs whether users actually create the register file. If the file is consistently absent across inquiries, the warning may be insufficient nudge; consider escalating to ERROR.

- **Whether the optional freshness check's 90-day threshold is calibrated correctly** for this project's invocation rate. May fire too often or not enough.

- **Whether the LAYER-2 Calibration-Drift mode actually fires** when the register's declared level diverges from observed behavior. The register provides the substrate; the audit needs the trigger to be defined.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Question 1 — How does routeman detect the project's current autonomy level at invocation time?
[Tier II minor re-statement applied 2026-05-23 per correction notice above. The question's substance is unchanged; the resolution path narrows to a file-mediated register under the corrected isolated-session + file-scanning architecture.]

The routeman identity sentence references "the project's current autonomy level" as a load-bearing input to the graduated-autonomy classification feature, but the corpus has no mechanism by which a discipline reads the project's autonomy level at runtime. docs/desc.md describes the autonomy ladder as a trajectory across five levels without specifying a runtime-readable register, an inference protocol, or an invocation-time parameter.

Why this is a frontier. No current answer: the mechanism does not exist. Gating for implementation: the graduated-autonomy classification feature cannot operate without it; the entire auto-vs-judgment split (the second endgame function from the design memo) becomes unimplementable. Net-new: the design memo names "the project's current autonomy level" as a load-bearing input but does not name this gap.

What it gates. The SKILL.md must specify how the autonomy level is observed at invocation time. [Post-correction:] under the corrected isolated-session + file-scanning architecture, the natural mechanism is a project-level autonomy register file that routeman reads during its scan (e.g., docs/autonomy_level.md or similar). The "parameter passed by the runner at invocation" option is eliminated by the correction (routeman is not invoked with in-context parameters from a runner; it scans). "Inference from operating context" and "hard-coding L0 with a documented limitation" remain as defer-options.

Hardness. Breadth high (affects the auto-vs-judgment feature, the LAYER-2 calibration-drift detection, the second endgame function, and any future feature that depends on autonomy context). Depth high (no mechanism exists today; the design is from scratch — though the corrected architecture narrows the design space to file-read options). Articulation medium.

design the project-level autonomy register file and the discipline-read protocol." Expected scope: one to two weeks of inquiry work covering the register-file format + location, a read convention for discipline specs, and a write protocol for human-set or system-set updates. Post-correction, the design is bounded to file-read mechanisms; the in-context-parameter option is off the table.

do this, dive deeper
```

</details>
