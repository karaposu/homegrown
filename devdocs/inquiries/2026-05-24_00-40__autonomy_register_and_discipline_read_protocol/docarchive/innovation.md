# Innovation — autonomy register and discipline-read protocol

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/_branch.md`

---

## Phase 1 — Seed

**Seed:** Decomposition's 7 pieces (P1 FILE ARTIFACT SPEC; P2 READ PROTOCOL; P3 WRITE PROTOCOL; P4 SIDECAR-BOUNDARY; P5 TWO-LADDERS DISAMBIGUATION; P6 FF LIST; P7 RE-TEST) require text-generation. Production-task mode.

### Methodology-Mode Consideration

- **Inherited mode:** Standard default (balanced 4G+3F; elaborate the committed direction per piece).
- **Alternative mode considered:** Contrarian-rethink (Framer-weighted). What follows: would re-litigate whether the register is needed, whether file-mediated is right, whether meta-loop is the right ladder. The user explicitly asked to "dive deeper" — that's elaboration, not contrarian re-litigation.
- **Decision:** DEFAULT — per-piece Inversion at meta-decision pieces covers the contrarian axis.

### Meta-Decision-Piece Classification

| Piece | Properties fired | Meta-decision? |
|---|---|---|
| **P1** | (d) evaluation-criterion = schema constraints; (e) intervention-shape = ADD-CONTENT | **YES** + property (v) fires |
| **P2** | (a) relationship-label = read pattern; (d) evaluation-criterion = failure-handling rules | **YES** |
| **P3** | (a) relationship-label = write-authority commitment; (d) evaluation-criterion = phase-calibrated | **YES** |
| **P4** | (b) framing-semantic = project-wide-vs-per-inquiry; (c) lesson-vocabulary = sidecar discipline | **YES** |
| **P5** | (b) framing-semantic = which-ladder-routeman-reads; (c) lesson-vocabulary = two-ladders concept | **YES** |
| **P6** | none (content production) | NO |
| **P7** | (a) relationship-label = verdicts; (d) evaluation-criterion = verdict taxonomy | **YES** |

All 6 meta-decision pieces require Piece-Level Inversion. **P1 additionally requires Intervention-Shape-Axis Inversion** (property v fires).

---

## Phase 2 — Generate

### Coverage plan

| Piece | Generators | Framers | Inversion-candidate |
|---|---|---|---|
| P1 | Domain Transfer, Absence Recognition | Constraint Manipulation (ADD + REMOVE) | Inversion (intervention-shape axis: ADD-CONTENT vs REORGANIZE / DO-NOTHING / ADD-TEST) |
| P2 | Combination | Lens Shifting | Inversion (content-axis: on-each vs cache vs on-demand) |
| P3 | Extrapolation | Constraint Manipulation (ADD + REMOVE) | Inversion (content-axis: human-only vs system-set-with-veto) |
| P4 | Combination | — | Inversion (content-axis: sidecar vs project-metadata reframe) |
| P5 | Combination | Lens Shifting | Inversion (content-axis: single-ladder vs both-equally) |
| P6 | (content production) | — | — |
| P7 | Combination | — | Inversion (content-axis: direction-reversal) |

Mechanism totals: Generators 4/4 (Combination ×3, Absence Recognition, Domain Transfer, Extrapolation); Framers 3/3 (Lens Shifting ×2, Constraint Manipulation ×2 with both directions, Inversion ×6). **Full coverage.**

---

### P1 — FILE ARTIFACT SPEC

#### P1-G (Generic — Sensemaking commitments verbatim)

> **Mechanism: Domain Transfer.** Source domain (native, computing): `.git/HEAD` — a small file that carries the current branch reference; updated when branch changes; cheap to read. Source domain (cross-domain): manufacturing's calibration certificate — versioned record of when an instrument was last calibrated, by whom, against what standard.

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

Current meta-loop autonomy level for this project, per `docs/autonomy_ladder.md`'s L0-L5 ladder.

Routeman (and any future autonomy-aware discipline) reads `current_level` from this file's
frontmatter to operate its graduated-autonomy classification.

Edits to this file are HUMAN-EDIT-ONLY at first ship (L0/L1). When graduating to a new level,
update `current_level`, `set_at`, `set_by`, `rationale`, AND append the prior state to
`transition_history` as `{from, to, set_at, set_by, rationale}`.
```

#### P1-F (Focused — extended schema with optional fields)

> **Mechanism: Absence Recognition.** Patch-level absence: no schema migration mechanism (if schema version changes, old readers can't tell). Redesign-level absence: if designed from scratch today, would there be a `validated` field marking whether the level claim has been audit-confirmed? a `next_gate` field showing what evidence would advance?

Extended schema candidates (optional fields beyond P1-G):

| Field | Type | Purpose |
|---|---|---|
| `validated` | bool | Has the LAYER-2 audit confirmed this level is consistent with observed behavior? |
| `validated_by` | string | Which audit invocation confirmed it (path to inquiry or audit record). |
| `next_gate` | string | What evidence would advance — cited from `autonomy_ladder.md` Section 6 (e.g., "L1→L2 needs ≥10 nav maps + navigation_memory.md schema"). |
| `schema_version` | int | Schema version for forward-compatibility (default 1). |

These are CANDIDATE additions to FF-1 (frontmatter field names finalization), not commitments here.

#### P1-additional (Constraint Manipulation — both directions required)

> **ADD constraint:** "must be readable by tools that don't parse YAML (e.g., simple grep)." Implication: the body should ALSO carry a plain-English statement of the current level (e.g., body has "**Current level: L0**" line) so non-YAML readers can grep it. PASS — this is a refinement worth adopting.

> **REMOVE constraint:** "remove the transition_history field — does the system still work?" Implication: without history, audit trail is lost. The LAYER-2 Calibration-Drift mode would lose its ability to inspect transition rationales. **REMOVE-direction FAILS — transition_history is load-bearing for audit.**

#### P1-C (Contrarian — Inversion-candidate, intervention-shape axis REQUIRED per property-(v) rule)

> **Mechanism: Inversion (intervention-shape axis).** Current shape: **ADD-CONTENT** (write a new file). Alternative shapes:

> **Alternative shape 1: REORGANIZE-WITHOUT-ADDING.** Add a "Current State" section to existing `docs/autonomy_ladder.md`. No new file. Pros: less sidecar/file proliferation; one place to look. Cons: violates separation-of-concerns (definition rarely changes; current state changes when graduating); makes `autonomy_ladder.md` mutable for state-tracking purposes; mixing definition + state in one file complicates review.

> **Alternative shape 2: DO-NOTHING.** No register file; routeman INFERS the level from observable signals (`_meta_state.md` existence → at least L1; `navigation_memory.md` existence → at least L2; etc.). Pros: no new artifact; no human-edit overhead. Cons: violates the user's explicit "register file" framing; inference was named as a defer-option ("infer from operating context"); inference is fragile (false-negatives if signals exist but level hasn't graduated).

> **Alternative shape 3: ADD-TEST.** Instead of a file, add a runtime check at routeman start that asks the user. Pros: always current. Cons: violates 16-31's file-mediated architecture (in-session user-prompt is in-context-parameter equivalent).

> **What follows if shape Y is committed instead of X:**
> - REORGANIZE: smaller spec; loses lifecycle separation; risks edit-collision.
> - DO-NOTHING: bypasses the user's framing; inference is the deferred option.
> - ADD-TEST: violates architecture.

> **Comparison.**
>
> | Shape | Pro | Con |
> |---|---|---|
> | ADD-CONTENT (P1-G) | Clean separation; user-language aligned; future-proof | One more file |
> | REORGANIZE | Single file | Definition+state coupling |
> | DO-NOTHING | Zero work | Fails user's framing; fragile inference |
> | ADD-TEST | Always current | Violates architecture |

> **Recommendation pending Critique:** ADD-CONTENT (P1-G) survives all structural tests. The 3 alternatives fail on different commitments (sensemaking lifecycle / user framing / 16-31 architecture). Alternatives preserved as KILL-with-seed candidates.

---

### P2 — READ PROTOCOL SPEC

#### P2-G (Generic — standard read protocol)

> **Mechanism: Combination.** Combine "routeman's existing file-scan" + "absent-register default + warn" + "convention documentation" → 3-component read protocol.

```
READ PROTOCOL (routeman; reusable convention)

1. LOCATE: file at `docs/autonomy_level.md` (in routeman's existing file-scan path).
2. PARSE: read YAML frontmatter; extract `current_level` (required), `ladder` (default `meta_loop`).
3. HANDLE FAILURE:
   - File absent → default `current_level = L0`; emit warning:
     "autonomy register absent at `docs/autonomy_level.md`; defaulting to L0;
      consider creating the register (see `docs/autonomy_ladder.md` for ladder reference)."
   - File present + YAML parse failure → halt routeman + emit flag:
     "autonomy register malformed at `docs/autonomy_level.md`; fix before re-invocation."
   - `current_level` out-of-range (not in {L0, L1, L2, L3, L4, L5}) → halt + flag:
     "autonomy register has invalid current_level value; valid: L0-L5."
4. RETURN: `current_level` value for use by graduated-autonomy classification feature.
```

#### P2-F (Focused — adds freshness check)

> **Mechanism: Lens Shifting.** Under conditions where the level was set long ago and the project may have advanced informally without updating the register, the read protocol should signal staleness.

```
EXTENDED READ PROTOCOL (P2-G + freshness check)

After step 3 (handle failure):
4. FRESHNESS CHECK: parse `set_at` field; if (current_date - set_at) > 90 days (rough heuristic),
   emit calibration-staleness warning:
   "autonomy register's current_level was last set <X> days ago;
    consider verifying it still reflects project state."
5. RETURN.
```

Trade-off: 90 days is arbitrary; the heuristic may fire spuriously or miss real staleness. Captured as a candidate for SKILL.md authoring to calibrate.

#### P2-C (Contrarian — Inversion-candidate, content-axis)

> **Mechanism: Inversion.** Assumption reversed: "read on each invocation as part of file-scan." → Reversed alternatives:

> **Alternative A: "Read once at session start; cache for entire routeman session."** Since routeman runs in an isolated session (per 16-31), "once per session" = "once per invocation." The inversion produces a NO-OP — the original is already minimal.

> **Alternative B: "Read on-demand only when graduated-autonomy classification fires."** The register is only read when its consumer needs it. Reduces I/O. Cons: tightly couples register-read to one feature; if more features need the level, must add per-feature reads. The "every invocation" approach is more uniform.

> **Verdict:** the original (P2-G) is structurally minimal already; both alternatives fail on different grounds. Inversion-candidate produced; no shape change recommended.

---

### P3 — WRITE PROTOCOL SPEC

#### P3-G (Generic — human-only at first ship)

> **Mechanism: Extrapolation.** Trend: project moves toward L2+; in N inquiries, calibration data becomes available; the write protocol must accommodate system-set without breaking changes. Schema designed for extension (`set_by` enum already includes `system`).

```
WRITE PROTOCOL (first ship — L0/L1 calibrated)

WHO: human (only).
TRIGGER: human decides graduation criteria are met (per `docs/autonomy_ladder.md` Section 6
         evidence-gates: e.g., L1→L2 needs ≥10 navigation maps with selection rationale +
         `navigation_memory.md` schema).
RECORD: when updating `current_level`, the human MUST:
  (a) Append the prior state `{from, to, set_at, set_by, rationale}` to `transition_history`.
  (b) Update `current_level`, `set_at`, `set_by`, `rationale` to new values.
  (c) Cite the evidence-gate or decision in `rationale`.

SYSTEM-WARNING HOOK (capability defined; system does NOT auto-write):
  Routeman (or any autonomy-aware discipline) MAY observe that an L_N → L_{N+1} evidence-gate
  per `autonomy_ladder.md` Section 6 is met, and emit a warning:
  "L_N → L_{N+1} gate may be met: <evidence summary>; consider editing `docs/autonomy_level.md`."

DEFERRED: system-SET writes deferred to L2+ follow-up inquiry.
  Revival trigger: when L1→L2 calibration data is available and the system-Selector
  graduation is being designed.
```

#### P3-F (Focused — graduation workflow)

> **Mechanism: Extrapolation (continued).** As project graduates, the write protocol becomes a workflow — verify gate; edit; system acknowledges; next invocation operates at new level.

```
GRADUATION WORKFLOW (P3-G + workflow steps)

When human decides to graduate:
1. Verify the evidence-gate per `autonomy_ladder.md` Section 6 (e.g., count nav maps; verify
   schema files exist).
2. Edit `docs/autonomy_level.md` per P3-G's RECORD rules.
3. Next routeman invocation observes the change and emits a "graduation acknowledged"
   telemetry signal (routeman's output telemetry block notes "current_level changed from
   L_N to L_{N+1}; operating at new partition").
4. Routeman's auto-vs-judgment partition updates per the new level (e.g., L1→L2 expands the
   auto-emit set to include the L2 system-Selector subset per autonomy_ladder.md Section 5).

The workflow closes the loop: human decides → file change → system acknowledges → behavior
adjusts. The acknowledgment is downstream-observable for audit.
```

#### P3-additional (Constraint Manipulation — both directions required)

> **ADD constraint:** "must work without git" (project may not be under version control during early calibration). Implication: transition_history MUST be in-file (not relying on `git log`). PASS — the schema's `transition_history` field already satisfies this.

> **REMOVE constraint:** "remove the rationale field — does the system still work?" Implication: rationale is human-readable audit; not load-bearing for routeman's read. Could be optional. But loses the audit trail's substantive content (just `from`/`to`/`set_at`/`set_by` without rationale is empty). REMOVE-direction WEAKENS the design; not adopted.

#### P3-C (Contrarian — Inversion-candidate, content-axis)

> **Mechanism: Inversion.** Assumption reversed: "human-only at first ship." → Reversed: "system-set with human-veto from first ship."

> **Alternative shape:** system monitors evidence-gates per `autonomy_ladder.md` Section 6; when met, writes a `proposed_level` field; human reviews and either accepts (system commits the change) or vetoes. Reduces human-edit friction.

> **Cons:** requires evidence-gate-detection logic at L0/L1 (which isn't calibrated yet); violates the L0/L1 phase-calibrated default (system-set requires calibration the project doesn't have). The user's framing acknowledged this ("system-set updates" as an OPTION, not a first-ship commitment).

> **Verdict:** KILL with seed. Defer to L2+ follow-up inquiry per P3-G's DEFERRED section. Seed: "system-set with human-veto" is the right shape for L2+ ship; capture in FF-3.

---

### P4 — SIDECAR-BOUNDARY STATEMENT

#### P4-G (Generic — boundary table)

> **Mechanism: Combination.** Project-wide-vs-per-inquiry distinction + per-sidecar purpose → comparison table.

```
SIDECAR-BOUNDARY STATEMENT

The autonomy register (`docs/autonomy_level.md`) is PROJECT-WIDE state in `docs/`,
distinct from per-inquiry and per-session sidecars:

| Sidecar | Scope | Purpose | Distinct from register because |
|---|---|---|---|
| `_state.md` | per-inquiry | Inquiry pipeline status (which discipline ran) | Per-inquiry; tracks pipeline, not autonomy |
| `_branch.md` | per-inquiry | Inquiry question/goal context | Per-inquiry; tracks question context |
| `_navig.md` | per-inquiry-OR-project (hybrid) | Routeman's persistence ledger (frontier candidates) | Tracks routeman's run state, not autonomy level |
| `_meta_state.md` | per-meta-loop-session | Cross-inquiry traversal state | At project layer when ≥L1; distinct content (visited-paths, not level) |
| `navigation_memory.md` | per-meta-loop-session | Navigator-side selection memory (L2+) | Tracks Navigator selections, not autonomy level |
| `routeman.md` | per-routeman-invocation | Route map content | Tracks routes, not autonomy level |

No cross-references between the register and other sidecars at first ship.
If future use-cases force cross-reference (e.g., the LAYER-2 audit needs to read both
the register's `current_level` and `_meta_state.md`'s visited-path count), the
cross-reference is added in a follow-up inquiry.
```

#### P4-F (Focused — extends with "what register is NOT" list)

> Same mechanism. Adds:

```
What the autonomy register is NOT:
- NOT per-inquiry (vs `_state.md`, `_branch.md`)
- NOT per-meta-loop-session (vs `_meta_state.md`, `navigation_memory.md`)
- NOT per-routeman-invocation (vs `_navig.md`, `routeman.md`)
- NOT a definition file (vs `docs/autonomy_ladder.md`, which DEFINES the levels; the register
  carries the CURRENT level)
- NOT a consciousness-gradient tracker (vs `docs/desc.md`, which describes the consciousness
  trajectory)

The register is a PROJECT METADATA file holding a single mutable value (current level)
with audit trail.
```

#### P4-C (Contrarian — Inversion-candidate, content-axis)

> **Mechanism: Inversion.** Assumption reversed: "the register is a new SIDECAR that must be distinguished from other sidecars." → Reversed: "the register is fundamentally NOT a sidecar — it's PROJECT METADATA in `docs/`, structurally distinct from sidecars."

> **Renaming the concept:** sidecars are PER-INQUIRY artifacts (alongside specific inquiry folder); the register is PROJECT-WIDE metadata (alongside the project). Calling both "sidecars" conflates the structural distinction.

> **Pros:** clearer mental model — readers don't try to interpret the register through sidecar lens. **Cons:** introduces new vocabulary ("project metadata") that the rest of the system may not use; may add coordination cost.

> **Verdict:** DEFER. The reframe is structurally cleaner but the immediate value is low (P4-G + P4-F already make the distinction clear via the table). Revival trigger: if 2+ future inquiries surface confusion about whether the register is a sidecar, adopt the "project metadata" reframe.

---

### P5 — TWO-LADDERS DISAMBIGUATION NOTE

#### P5-G (Generic — standard disambiguation)

> **Mechanism: Combination.** Two-ladders enumeration + register's ladder choice + extension hook → standard note.

```
TWO-LADDERS DISAMBIGUATION NOTE

The project has TWO autonomy ladders, related but distinct:

1. **Meta-loop autonomy ladder** (`docs/autonomy_ladder.md`) — operational ladder for the
   meta-loop's 9-axis role allocation. Levels L0-L5. The ladder defines WHO plays WHICH ROLE
   (Worker, Navigator, Selector, Runner, Evaluator) at each level.

2. **Consciousness-gradient / human-role trajectory** (`docs/desc.md`) — the human's role
   monotonically decreasing across Level 0-4+ (bootstrap → reviews-all → reviews-uncertain →
   strategic → observer → past). Related to but at different granularity than the meta-loop
   ladder; `autonomy_ladder.md`'s L5 hands off to `desc.md`'s consciousness-gradient framing.

This register tracks the META-LOOP ladder's current level. The `ladder` field's default value
is `meta_loop`; the value space is L0-L5.

Why routeman reads the meta-loop ladder: routeman's auto-vs-judgment partition (12/4 split of
the 16-type movement-type taxonomy) corresponds to `autonomy_ladder.md` Section 5's per-level
Selector subset. The desc.md trajectory is a different concern (who reviews self-modifications)
and is not load-bearing for routeman's graduated-autonomy classification.

Extension hook: if a future discipline needs desc.md's Level 0-4+, the schema can add a
second field (e.g., `human_role_level`) without breaking existing readers of `current_level`.
```

#### P5-F (Focused — adds qualitative cross-mapping table)

> **Mechanism: Lens Shifting.** Under conditions where readers want to cross-walk between the two ladders, a qualitative mapping helps even if not 1:1.

```
QUALITATIVE CROSS-MAPPING (P5-G + table)

Per `autonomy_ladder.md` Section 8 ("Bridge to desc.md"):

| autonomy_ladder.md level | desc.md indicator (rough correspondence) |
|---|---|
| L2 (system Selector with context) | position indicator (knows where it is on the ladder) |
| L3 (system Reflect-channel-self-use) | real-time steering (adjusts own course during runs) |
| L4 (system Evaluator at multi-head) | discontinuity awareness (handles session ends, context resets) |
| L5 (system Goal-formation, cumulative-feedback) | spontaneous attention + intrinsic curiosity |

The mapping is qualitative (not 1:1). Use the meta-loop ladder for operational decisions;
consult desc.md for the consciousness-gradient endpoint framing.
```

#### P5-C (Contrarian — Inversion-candidate, content-axis)

> **Mechanism: Inversion.** Assumption reversed: "register tracks meta-loop ladder primarily." → Reversed: "register tracks BOTH ladders equally from first ship."

> **Alternative schema:** `current_level` (meta-loop, L0-L5) AND `human_role_level` (desc.md, Level 0-4+) — both required.

> **Cons:** premature commitment; second field unused at first ship (no consumer needs it yet). Routeman explicitly needs meta-loop level only. The extension hook (P5-G) already preserves the option.

> **Verdict:** REJECT. The extension hook is sufficient; tracking both equally from first ship over-commits.

---

### P6 — FF LIST

#### P6-G (Generic)

> Content production; no piece-level Inversion required.

```
FRONTIER FLAGS (6 residual opens)

FF-1 — Frontmatter field names + types finalization.
  Downstream consumer: SKILL.md authoring inquiry.
  Revival trigger: when SKILL.md is being written for routeman.

FF-2 — Read-convention placement (in routeman SKILL.md vs new protocol doc
       `cognitive_harness/protocols/autonomy_register_read.md`).
  Downstream consumer: SKILL.md authoring inquiry.
  Revival trigger: same as FF-1.

FF-3 — System-set write triggers (L2+ follow-up).
  Downstream consumer: L2 graduation inquiry.
  Revival trigger: when L1→L2 calibration data is available
  (per `docs/autonomy_ladder.md` Section 6: ≥10 nav maps with rationale +
  `navigation_memory.md` schema).

FF-4 — Generalization to other autonomy-aware disciplines (/reflect, /intuit, /td-critique).
  Research frontier.
  Revival trigger: when 2+ disciplines other than routeman are observed wanting the register.

FF-5 — Per-discipline overrides (a discipline needs its own autonomy level independent of
       project-wide level).
  Research frontier.
  Revival trigger: when a discipline emerges that needs autonomy independent of project-wide.

FF-6 — Reconciliation between the two ladders when they diverge in practice
       (e.g., project at meta-loop L2 but desc.md Level 1).
  Research frontier.
  Revival trigger: observable — when the two ladders' levels are simultaneously specified
  and diverge.
```

---

### P7 — INHERITED COMMITMENTS RE-TEST

#### P7-G (Generic — verdict table)

> **Mechanism: Combination.** Verdict-taxonomy + evidence-citation + downstream-impact-note.

```
| Prior | Commitment | Verdict | Reason / Impact |
|---|---|---|---|
| **2026-05-23_11-30** | Input-dependency anchor (routeman is a cycle-consumer) | PRESERVED | Register read is another consumer-shaped dependency; same structural framing |
| **2026-05-23_14-39** | 3-layer identity; graduated-autonomy classification feature | PRESERVED + ENABLED | Register provides runtime substrate the feature needed; layer identity unchanged |
| **2026-05-23_14-39** | 9-mode failure framework, LAYER-2 Calibration-Drift mode | PRESERVED + ENABLED | Calibration-Drift mode becomes DETECTABLE — register provides declared level for audit |
| **2026-05-23_15-20** | Q1 (autonomy-level detection) | RESOLVED-WITH-DESIGN | This inquiry is the resolution. Frontier-question Q1 → committed design |
| **2026-05-23_16-31** | Isolated session + file-scanning architecture | PRESERVED | Register read uses the same file-scanning mechanism; architecture-compatible |
| **2026-05-23_18-58** | Per-Route meta-reasoning field; LLM-operational-design principle | PRESERVED + APPLIED | Naming (`autonomy_level.md`) is an application of LLM-operational-design (now N=3 evidence) |
| **2026-05-24_00-20** | Hybrid placement-by-scope for `_navig.md` | PRESERVED + ADJACENT | Register's project-wide-only placement is structurally adjacent; both decisions respect "project-scope" as a real category |
| **docs/autonomy_ladder.md** | L0-L5 ladder + 9-axis frame + evidence-gates | PRESERVED | Value space inherited; this inquiry adopts not redefines |
| **docs/desc.md** | Level 0-4+ human-role trajectory + consciousness-gradient framing | PRESERVED | Explicitly distinguished from meta-loop ladder; register doesn't track desc.md's |
```

#### P7-C (Contrarian — Inversion-candidate, content-axis: direction-reversal)

> **Mechanism: Inversion.** Assumption reversed: "test priors against the adoption." → Reversed: "test the adoption against each prior."

```
COUNTER-DIRECTION: does the adoption SURVIVE each prior?

| Prior commitment | Does adoption SURVIVE it? | Note |
|---|---|---|
| Input-dependency (11-30) | SURVIVES — register read is consumer-shaped, doesn't make routeman a configuration |
| Cycle-consumer identity (14-39) | SURVIVES — register is one more file in the cycle-consumer's scan |
| Isolated-session architecture (16-31) | SHAPED-BY — file-mediated read was FORCED by the architecture; not just compatible |
| LLM-operational-design principle (18-58) | SHAPED-BY — user-language-aligned naming derives from this principle (third evidence application) |
| Hybrid placement-by-scope (24-00) | SHAPED-BY — the project-wide placement category was made coherent by 24-00's hybrid framing |
| autonomy_ladder.md value space | SHAPED-BY — L0-L5 inherited verbatim; no degrees of freedom |
| desc.md trajectory | EXPLICITLY-DISTINGUISHED — adoption commits NOT to track desc.md's ladder |
```

> **What this Inversion reveals:** the adoption is SHAPED BY priors, not just compatible with them. The file-mediated read, the user-language-aligned naming, the project-wide placement, and the L0-L5 value space are all FORCED MOVES from prior commitments. Recording the derivation prevents future inquiries from treating these as arbitrary preferences.

> **Disposition:** RE-TEST TRIGGER. P7-C's insight implies P3 and P5 should add one-line derivation notes:
> - P3's "human-only first ship" derives from `autonomy_ladder.md`'s "L0 = current" + phase-calibration principle.
> - P5's meta-loop-ladder choice derives from routeman's auto-vs-judgment correlation with autonomy_ladder.md Section 5's Selector subset.

---

## Inherited Frame Audit (between Phase 2 and Phase 3)

### Seed-level central assumption

"The autonomy register is a project-wide file in `docs/`, separate from inquiry-folder sidecars, tracking the meta-loop ladder's current level."

**Challenge scan:**
- **P1-C (REORGANIZE / DO-NOTHING / ADD-TEST):** challenges whether a new file is the right intervention shape. ✓ EXPLICIT CHALLENGE.
- **P3-C (system-set with veto):** challenges the human-only commitment. ✓
- **P4-C (project metadata reframe):** challenges the sidecar framing. ✓
- **P5-C (both-ladders equally):** challenges single-ladder choice. ✓
- **P7-C (direction-reversal):** reorients direction; doesn't directly challenge the central assumption.

**Verdict:** Central assumption EXPLICITLY CHALLENGED by P1-C + P4-C + P5-C. Audit does NOT fire at seed level. ✓

### Piece-level commitments

| Piece | Load-bearing commitment | Challenged? |
|---|---|---|
| P1 (d/e) | ADD-CONTENT shape + 6-field schema | P1-C challenges shape; P1-F enriches schema |
| P2 (a/d) | On-each-invocation read + 3-tier failure-handling rules | Not explicitly challenged. **AUDIT FIRES on failure-handling rules.** |
| P3 (a/d) | Human-only first ship + phase-calibrated | P3-C challenges |
| P4 (b/c) | Sidecar discipline + project-wide-vs-per-inquiry | P4-C reframes |
| P5 (b/c) | Meta-loop ladder primary | P5-C challenges; rejected with reason |
| P7 (a/d) | PRESERVED/EXTENDED verdict taxonomy | P7-C direction-reverses |

### Audit fires on P2's failure-handling rules

Type = evaluation-criterion → Design-choice → invoke **Absence Recognition redesign-level.**

Patch-level absence: missing differentiated severity (current rules treat malformed and out-of-range identically as halt+flag; but they differ in fixability — malformed may be a typo while out-of-range may indicate a deeper misconfiguration).

Redesign-level absence: if designed from scratch, the failure-handling could be 3-tier:

> **NEW CANDIDATE C-AUDIT-1:** "Three-tier failure-handling — INFO / WARN / ERROR."
> - **INFO** — absent register → default to L0 + emit informational warning. Routeman continues.
> - **WARN** — malformed register → continue with L0 + log "register malformed; fix required." Routeman continues operationally but flags strongly. (Currently P2-G has malformed = halt+flag; the change is to continue+flag rather than halt+flag.)
> - **ERROR** — out-of-range value → halt + flag. The value is structurally inconsistent with the ladder's value space.

> **Trade-off:** the INFO/WARN/ERROR split is more nuanced; the WARN-continue allows routeman to operate at L0 even with a malformed register (safer for graceful degradation). The downside: silent continuation under WARN may delay fixing.

### Re-evaluate after orchestration

C-AUDIT-1 added to candidate set. Re-scan: P2's failure-handling rules now have an explicit alternative. Audit no longer fires.

**Bidirectional Absence Recognition check (refinement):** Both patch-level (differentiated severity) and redesign-level (3-tier framework) addressed. ✓

---

## Phase 3 — Test

### 5-test cycle per candidate

| Candidate | Novelty | Survival | Fertility | Action | Independence | Disposition |
|---|---|---|---|---|---|---|
| P1-G | LOW (standard) | HIGH (grounded in Sensemaking) | MED (enables SKILL.md) | HIGH | YES (multi-source) | **ACTIONABLE** |
| P1-F | MED (validated + next_gate) | HIGH (audit + forward-looking value) | HIGH | HIGH | YES | **ACTIONABLE** (companion; optional fields) |
| P1-additional ADD (grep-readable body) | LOW (refinement) | HIGH | LOW | HIGH | YES | **ACTIONABLE as refinement to P1-G** |
| P1-additional REMOVE (drop transition_history) | LOW | LOW (loses audit) | LOW | LOW | NO | **REJECTED** |
| P1-C (REORGANIZE) | MED | LOW (violates lifecycle separation) | LOW | MED | NO | **KILL** with seed |
| P1-C (DO-NOTHING) | LOW | LOW (violates user's framing) | LOW | HIGH | NO | **KILL** with seed |
| P1-C (ADD-TEST) | MED | LOW (violates 16-31 architecture) | LOW | LOW | NO | **KILL** with seed |
| P2-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P2-F | MED (freshness check) | MED (heuristic threshold arbitrary) | MED | HIGH | YES | **ACTIONABLE with refinement** (label heuristic as calibratable) |
| P2-C (cache once per session) | LOW (already minimal) | LOW (NO-OP for isolated session) | LOW | LOW | NO | **REJECTED** (NO-OP) |
| P2-C (on-demand) | LOW | LOW (tight coupling to one feature) | LOW | LOW | NO | **REJECTED** |
| P3-G | LOW | HIGH | HIGH (enables L2+ follow-up) | HIGH | YES | **ACTIONABLE** |
| P3-F (graduation workflow) | MED | HIGH | HIGH (closes loop) | HIGH | YES | **ACTIONABLE** (companion) |
| P3-additional ADD (works without git) | LOW (already satisfied) | HIGH | LOW | HIGH | YES | **ACTIONABLE as verification note** |
| P3-additional REMOVE (drop rationale) | LOW | LOW (loses audit content) | LOW | LOW | NO | **REJECTED** |
| P3-C (system-set with veto) | MED | LOW (premature; violates phase-fit) | MED | LOW | NO | **KILL** with seed for FF-3 |
| P4-G | LOW | HIGH | MED | HIGH | YES | **ACTIONABLE** |
| P4-F | LOW | HIGH | MED | HIGH | YES | **ACTIONABLE** (companion) |
| P4-C (project metadata reframe) | HIGH (new vocab) | MED | MED | MED | NO | **DEFERRED with revival trigger** |
| P5-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P5-F (qualitative cross-mapping) | MED | HIGH | MED | HIGH | YES | **ACTIONABLE** (companion) |
| P5-C (both-ladders equally) | MED | LOW (premature) | LOW | MED | NO | **REJECTED** |
| P6-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P7-G | LOW | HIGH | HIGH | HIGH | YES | **ACTIONABLE** |
| P7-C (direction-reversal) | HIGH (reveals derivation) | HIGH | HIGH | MED | NO | **RE-TEST TRIGGER** — adds derivation notes to P3 + P5 |
| C-AUDIT-1 (3-tier failure-handling) | MED | HIGH (more nuanced; graceful) | MED | HIGH | NO (Absence Recognition only) | **ACTIONABLE as refinement to P2** |

### Test summary

- 26 candidates produced.
- 14 ACTIONABLE / verification / FF input.
- 1 DEFERRED with revival trigger (P4-C).
- 3 KILL with seeds (P1-C REORGANIZE, P1-C DO-NOTHING, P1-C ADD-TEST).
- 1 KILL with seed for FF-3 (P3-C).
- 4 REJECTED (P1-additional REMOVE; P2-C cache; P2-C on-demand; P3-additional REMOVE; P5-C).
- 1 RE-TEST TRIGGER firing (P7-C → P3 + P5 derivation notes).

### Artifact-grounding (6th conditional test)

Categorical claims about project state requiring artifact check:
- P1-G's claim "file at `docs/autonomy_level.md`" — does the path exist? Verified via Surfacing: `docs/` exists; `autonomy_level.md` does NOT yet exist (this inquiry designs it). The path is available.
- P2-G's claim "routeman's existing file-scan reads `docs/`" — TO VERIFY: does routeman's current spec specify `docs/` in scan-scope? This is FF-2 / SKILL.md authoring scope; the inquiry assumes routeman's scan covers `docs/` per the cycle-consumer architecture. Flag for SKILL.md authoring.
- P5-G's claim "autonomy_ladder.md Section 5 defines per-level Selector subset" — verified via Surfacing (entry 4): the table exists at autonomy_ladder.md lines 89-94.

All categorical claims verified or appropriately flagged. PASS.

### Axis coverage check

Orthogonal axes addressed:
1. **Content axis** (what's in the spec): P1-G/P2-G/P3-G/P4-G/P5-G + companions.
2. **Shape axis** (how the spec intervenes): P1-C's intervention-shape alternatives (REORGANIZE/DO-NOTHING/ADD-TEST); P4-C's reframe.
3. **Direction axis** (which subject is the "test target"): P7-C direction-reversal.
4. **Authority axis** (who has write authority): P3-C (system-set with veto).
5. **Scope axis** (which ladders the register tracks): P5-C (both equally).
6. **Severity axis** (how failures are graded): C-AUDIT-1 (3-tier).

All 6 axes have at least one candidate variant. **PASS.**

### Mechanism Independence shared-input check

P1-G + P2-G + P3-G + P4-G + P5-G all derive from Sensemaking SV6 — same upstream. Convergence may appear SPURIOUS. Counter-test: the contrarian candidates (P1-C, P3-C, P4-C, P5-C, P7-C, C-AUDIT-1) EXPLICITLY challenge SV6's framing or commitments. The convergence isn't blind. Shared-input is the inquiry's stabilized model, the legitimate ground per Sensemaking's job. PASS with note.

---

## Assembly Check

Combine ACTIONABLE candidates:

**Emergent finding-shape:**

```
1. **Opening reframing** — the autonomy register IS the runtime substrate that resolves Q1
   from the frontier-questions finding. The register's design is SHAPED BY priors
   (per P7-C derivation insight), not arbitrarily chosen.

2. **Register file spec (P1)** — `docs/autonomy_level.md` with frontmatter (6 fields) +
   body (grep-readable current-level line + disambiguation note).

3. **Read protocol (P2 + C-AUDIT-1)** — locate + parse + 3-tier failure-handling
   (INFO absent / WARN malformed / ERROR out-of-range) + optional freshness check.

4. **Write protocol (P3)** — human-only first ship + graduation workflow + system-warning
   hook + L2+ system-set deferred (FF-3) + derivation note (per P7-C).

5. **Sidecar-boundary statement (P4)** — comparison table + "what register is NOT" list.

6. **Two-ladders disambiguation (P5)** — meta-loop primary + qualitative cross-mapping +
   extension hook + derivation note (per P7-C).

7. **FF list (P6)** — 6 FFs scoped to consumers + revival triggers.

8. **Inherited commitments re-test (P7-G + P7-C bidirectional note)** — verdict table +
   priors-shaped-adoption note.

9. **Deferred candidates section** — P1-C alternatives (KILL with seeds);
   P3-C system-set-with-veto (KILL with seed for FF-3);
   P4-C project-metadata-reframe (DEFERRED).
```

**Cross-piece coherence:** opening reframing coheres with derivation notes (P3 + P5) and re-test (P7-G + P7-C). The KILL seeds preserve falsifiability without cluttering the main spec.

**Emergent insight:** the inquiry's PRIMARY VALUE is not the register design per se — it's the recognition that priors SHAPED the design (forced moves from architecture + principles), making the design defensible rather than arbitrary.

---

## Telemetry

### Mechanism Coverage

- **Generators applied:** 4/4 (Combination ×3, Absence Recognition, Domain Transfer, Extrapolation).
- **Framers applied:** 3/3 (Lens Shifting ×2, Constraint Manipulation ×2 both-directions, Inversion ×6).
- **Convergence:** YES — 3+ mechanisms converge on "ADD-CONTENT register at `docs/autonomy_level.md` with phase-calibrated write protocol" (Combination → spec; Domain Transfer → native analogue [`.git/HEAD`]; Extrapolation → L2+ extension; Lens Shifting → freshness check; Inversion's KILL seeds → confirm no superior alternative).
- **Survivors tested:** 26/26 (5-test cycle on all).
- **Failure modes observed:** none of the 6.
- **Inherited Frame Audit:** fired at 1 commitment (P2 failure-handling); 1 new candidate (C-AUDIT-1); audit no longer fires.
- **RE-TEST TRIGGER:** 1 firing (P7-C → P3 + P5 derivation notes).

### Production-task additional telemetry

| Piece | Mechanism log | Meta-decision classification | Piece-level Inversion compliance |
|---|---|---|---|
| P1 | [Domain Transfer, Absence Recognition, Constraint Manipulation:ADD, Constraint Manipulation:REMOVE, Inversion:intervention-shape-axis] | meta-decision (d, e); property (v) fires | satisfied (P1-C is Inversion-candidate on intervention-shape axis — REQUIRED per Intervention-Shape-Axis Inversion rule) |
| P2 | [Combination, Lens Shifting, Inversion:content-axis] | meta-decision (a, d) | satisfied (P2-C is Inversion-candidate) |
| P3 | [Extrapolation, Constraint Manipulation:ADD, Constraint Manipulation:REMOVE, Inversion:content-axis] | meta-decision (a, d) | satisfied (P3-C is Inversion-candidate) |
| P4 | [Combination, Inversion:content-axis] | meta-decision (b, c) | satisfied (P4-C is Inversion-candidate) |
| P5 | [Combination, Lens Shifting, Inversion:content-axis] | meta-decision (b, c) | satisfied (P5-C is Inversion-candidate) |
| P6 | [content-production] | content-production | n/a |
| P7 | [Combination, Inversion:content-axis] | meta-decision (a, d) | satisfied (P7-C is Inversion-candidate) |

**Verdict: PROCEED.**
- Sufficient coverage (4G + 3F).
- Convergence YES.
- All survivors tested.
- No failure modes.
- All 6 meta-decision pieces satisfy Piece-Level Inversion compliance.
- P1 satisfies Intervention-Shape-Axis Inversion compliance (REORGANIZE/DO-NOTHING/ADD-TEST named as reversed shapes; what-follows stated; 5-test cycle applied to all).

---

## Handoff to Critique

Critique's task: evaluate the assembled finding shape against:
1. Whether P1-G + P1-F's schema is correctly minimum-but-adequate (not over-specified per P1-C alternatives; not under-specified per the lost-audit risk of P1-additional REMOVE).
2. Whether P2-G + C-AUDIT-1's 3-tier failure-handling is correctly nuanced (WARN-continue may be too lenient on malformed; KILL-with-seed for "halt instead" alternative).
3. Whether P3-G + P3-F's first-ship human-only commitment is appropriately scoped (KILL seeds for system-set preserved for FF-3).
4. Whether P4-G + P4-F's boundary statement is sufficient or whether P4-C's reframe should be revived.
5. Whether P5-G + P5-F's two-ladders disambiguation correctly resolves the question without prematurely committing both-ladders tracking.
6. Whether the 6 FFs (P6-G) have correct scope + downstream consumers + revival triggers.
7. Whether the priors-shaped-adoption insight (P7-C) is genuinely load-bearing or rhetorical.

Critique should also test the emergent insight (the design is FORCED by priors, not arbitrary) — is this overclaiming, or is it the structurally correct framing?
