# Sensemaking — autonomy register and discipline-read protocol

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/_branch.md`

---

## SV1 — Baseline Understanding (pre-analysis)

The inquiry is designing three artifacts from scratch: a project-level autonomy register file; a discipline-read protocol; a write protocol. Initial reading: "design three things, each independently."

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1** — Bounded to file-read mechanisms per the 16-31 correction; in-context-parameter is OFF the table.
- **C2** — STRUCTURAL primary layer (artifact design + read/write conventions).
- **C3** — Three observation targets (register file + read protocol + write protocol) MUST be preserved as separate per the user's clause-pair preservation rule.
- **C4** — The autonomy ladder value space is inherited from `docs/autonomy_ladder.md`; this inquiry does NOT redefine it.
- **C5** — Sidecar-proliferation risk (per 24-00 persistence inquiry's D12 dimension) must be mitigated.
- **C6** — User-language alignment is a tested principle (LLM-operational-design from 18-58, now at N=2 evidence per 24-00).
- **C7** — Must integrate with the corrected isolated-session + file-scanning architecture (16-31).

### Key Insights

- **KI1** — **`docs/autonomy_ladder.md` already exists** as a comprehensive 6-level (L0-L5) operational meta-loop ladder with 9-axis role allocation. The question's premise ("the corpus has no mechanism") is PARTIALLY wrong — the ladder DEFINITION exists; what's missing is the CURRENT-LEVEL register that tracks where the project IS on the ladder.
- **KI2** — **Two-ladders split:** `autonomy_ladder.md` carries the L0-L5 operational meta-loop ladder; `docs/desc.md` carries a SEPARATE Level 0-4+ human-role trajectory. The ladders are related but distinct in granularity and concern. **Routeman's auto-vs-judgment feature specifically needs the META-LOOP'S level**, not desc.md's.
- **KI3** — Routeman's 12-auto / 4-human-judgment partition is ANALOGOUS to autonomy_ladder.md Section 5's per-level Selector subset (forward-only at L2; +REVISIT at L3; etc.). The two partitions are not identical (routeman ENUMERATES; Selector PICKS) but they CO-CALIBRATE to the same level.
- **KI4** — The register is PROJECT-LEVEL, not per-inquiry. It belongs in `docs/`, not in inquiry folders. This is the structural axis that distinguishes it from `_navig.md` / `_state.md` / `_branch.md` (per-inquiry sidecars).
- **KI5** — `_meta_state.md` (the meta-loop's cross-inquiry traversal state) is a planned/existing artifact at L1+. The register's relationship to `_meta_state.md` is a load-bearing structural decision (separate file vs section).
- **KI6** — The user's framing "human-set or system-set updates" maps to TWO ship-stages: an L0/L1 first ship (human-set only with system-warning hooks) and an L2+ follow-up (system-set when calibration data is available). Designing system-set NOW would be premature commitment.

### Structural Points

- **SP1** — Project-wide register lives in `docs/`, not in inquiry folders.
- **SP2** — Content-vs-control axis from 24-00 doesn't apply here cleanly — the register IS both content (the level value) AND control state (input to graduated-autonomy classification). They're not separable for this artifact.
- **SP3** — Lifecycle = persistent across all sessions; not session-local.
- **SP4** — Authority for writes is fundamentally about WHO has truth (human at L0/L1; system after calibration milestones at L2+).
- **SP5** — Read is part of the existing file-scan mechanism per 16-31; no new I/O primitive needed.

### Foundational Principles

- **FP1** — Don't reinvent (per 24-00). The register adopts `autonomy_ladder.md`'s value space verbatim.
- **FP2** — User-language alignment (per 18-58 + 24-00). The user nominated `docs/autonomy_level.md or similar` — strong nomination for the file name.
- **FP3** — Sidecar discipline. Each sidecar serves a distinct purpose; avoid overlap with `_navig.md` / `_state.md` / `_meta_state.md`.
- **FP4** — File-mediated state per 16-31 — no in-context parameters.

### Meaning-Nodes

- **MN1** — **The autonomy register** — a project-wide file holding the current meta-loop level.
- **MN2** — **The read convention** — how disciplines read the register; potentially shared infrastructure.
- **MN3** — **The write protocol** — who can write, when, with what record.
- **MN4** — **Project-wide scope vs per-inquiry sidecar** — the axis distinguishing the register from `_navig.md` / `_state.md`.
- **MN5** — **Ladder-disambiguation** — which of the two ladders the register tracks (meta-loop, not human-role-trajectory).

### Meta-Inspection — H4 (concept names) + H5 (motivating examples)

- **H4 — concept names check.** Load-bearing names: "autonomy register", "discipline-read protocol", "write protocol", "meta-loop level", "two-ladders disambiguation". Naming flag: the user said `docs/autonomy_level.md or similar`. Should the file be `autonomy_level.md` (matches user) or `autonomy_state.md` (more accurate: it carries state, not just a level value)? Per FP2 (user-language alignment), `autonomy_level.md` wins.
- **H5 — motivating examples check.** The user's "human-set or system-set updates" gives the write-authority axis directly; the resolution (human-only first ship + system-set deferred) honors the user's framing while respecting the L0/L1-current calibration state.

### SV2 — Anchor-Informed Understanding

The inquiry is NOT designing the autonomy ladder (that exists at `docs/autonomy_ladder.md`). It IS designing a project-level register file (`docs/autonomy_level.md`) + a read protocol (routeman scope; reusable convention) + a write protocol (human-only first ship; L2+ system-set follow-up). The two-ladders split must be resolved upfront (routeman reads meta-loop ladder). The first-ship register is human-set with system-warning hooks; system-set writes are deferred.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- **P-TECH-1** — The register can use the same alias-and-mechanism split the persistence inquiry used: protocol-vocabulary alias (the file holds `autonomy_ladder.md`'s value space verbatim) + discipline-aligned naming (user-nominated `autonomy_level.md`).
- **P-TECH-2** — The read convention CAN be cross-discipline by design (any discipline scanning `docs/` reads the register) without committing other disciplines to use it.
- **P-TECH-3** — Routeman's existing file-scan reads `docs/` already (presumed; if not, this is an extension to the scan-scope). The register's read is a single-file addition to the scan path.

### Human / User

- **P-HUMAN-1** — The user nominated `docs/autonomy_level.md or similar` — the "or similar" preserves flexibility but the nomination is `autonomy_level.md`.
- **P-HUMAN-2** — The user did NOT flag the two-ladders split in their input. They may not have noticed it (or may be referring to one ladder unconsciously). Sensemaking must surface this so the user can adjudicate or accept the meta-loop-ladder-as-default decision.
- **P-HUMAN-3** — The user expected the register to track "the current autonomy level" — singular, simple. The schema should not over-engineer.
- **P-HUMAN-4** — User's framing presents register + read + write as 3 distinct things — preserved in deliverable.

### Strategic / Long-term

- **P-STRAT-1** — The register is FOUNDATIONAL for L2+ system-Selector graduations. As the project moves through autonomy levels, the register IS the artifact tracking that movement. Designing it now (at L0) is investment in future graduation infrastructure.
- **P-STRAT-2** — Generalization to other autonomy-aware disciplines (FF-6 from surfacing) is plausible but not load-bearing yet. Designing a reusable convention now (without committing other disciplines) is cheap insurance.

### Risk / Failure

- **R1** — Two-ladders confusion. If register's name + content don't make ladder choice clear, future readers will be confused. Mitigation: explicit naming + frontmatter or first-line statement naming the ladder.
- **R2** — Premature system-set writes. Designing system-set triggers now (before L2 ships) commits prematurely. Mitigation: defer system-set to L2+ follow-up; first ship is human-set with system-warning hooks.
- **R3** — Sidecar proliferation (per 24-00 D12). Register adds another file. Mitigation: located in `docs/` (project-wide) not inquiry folders; doesn't overlap with `_state.md`/`_branch.md`/`_navig.md` purposes.
- **R4** — Register-vs-actual-behavior drift. Register says L1 but system actually operates at L0 (or vice versa). The routeman LAYER-2 Calibration-Drift mode catches this — the register declares; the audit catches drift between declared and actual.

### Resource / Feasibility

- **P-RES-1** — Minimal cost. One markdown file + a short read convention section + a short write protocol section.

### Definitional / Internal Consistency

- The register's claim "current level = X" should be testable against observable project artifacts. If register says L1 but `_meta_state.md` doesn't exist (which is supposed to exist at L1+ per autonomy_ladder.md), there's an internal inconsistency. This is a downstream CONSISTENCY-CHECK concern, not a register-design concern (the register declares; observation validates).

### Definitional / Frame-exit Completeness

**Gating predicate.** Inquiry inherits multi-value term ("autonomy level"); used across multiple values (L0-L5); distinct propositions per cell. **Gate fires.**

1. **Existence Enumeration.** What does "autonomy level" refer to project-wide?
   - **TYPE axis:** autonomy_ladder.md's L0-L5 (operational meta-loop); desc.md's Level 0-4+ (human-role trajectory); `_meta_state.md`-existence as implicit L0-vs-L1+ signal; Baldwin-cycle calibration milestones (N≥30 per discipline) as gradation-eligibility triggers.
   - **LAYER axis:** meta-loop ladder; consciousness gradient; per-discipline calibration; per-role advancement (9-axis frame).
   - **PHASE axis:** pre-graduation; transition-in-progress; confirmed; deprecated.
   - **AGENT axis:** human-set; system-set; calibration-derived; hybrid.

2. **Role Assessment.**
   - desc.md's Level 0-4+ — role: tracks human-role decrease. SEPARATE concern from routeman's auto-vs-judgment. Coherence preserved if routeman explicitly reads meta-loop ladder.
   - `_meta_state.md`-implicit level — role: existence as inference signal. OUT OF SCOPE: this inquiry designs EXPLICIT register, not inference. Inference (the "infer from operating context" defer-option) remains deferred per user's framing.
   - Baldwin-cycle calibration milestones — role: triggers graduation ELIGIBILITY (per autonomy_ladder.md evidence-gates). Adjacent to write protocol's system-set triggers but not the level itself.

3. **Verdict Rigor.** Verdict "routeman reads the meta-loop ladder's level, not desc.md's" — strongest counter: routeman's auto-vs-judgment may interact with desc.md's level (e.g., at desc.md Level 2 where humans review only uncertain self-modifications, routeman might need to flag uncertain types). Test: routeman's 12/4 split is about WHICH TYPES are auto-emitable; desc.md's level is about WHICH SELF-MODIFICATIONS humans review. Different scopes. Counter merit: weak (different operational targets). **HIGH CONFIDENCE for meta-loop-ladder verdict**, with schema-extension option preserved (D-5 from surfacing) for future disciplines that need both.

4. **Residual / Coverage Justification.** The Baldwin-cycle calibration milestones (N≥30 per discipline) are per-discipline, not project-wide. Could the register also track per-discipline calibration status? OUT OF SCOPE — per-discipline calibration is per-inquiry-pipeline-status concern, not project-wide. Per-discipline overrides (D-4 from surfacing) deferred unless evidence forces.

### Phase / Calibration-State perspective

- Does this inquiry involve phase-dependent rules? **YES** — the write protocol is phase-dependent (human-set at L0/L1; system-set possible at L2+).
- **Calibration check:** the project is at L0 (autonomy_ladder.md says "L0 = current"). The write protocol's L0/L1 commitments are calibrated; L2+ commitments are speculative.
- **This is critical** — the inquiry's design must be appropriate for L0/L1 NOW, with hooks for L2+ later. Failing to apply this perspective would commit premature system-set writes.

### Meta-Inspection — H1 (candidate set) + H2 (frame scope) + H3 (question framing) + H7 (phase/calibration)

- **H1 — candidate set.** Surfacing enumerated 99 items across 14 regions with multiple candidates per axis (8 locations, 5 formats, 9 schemas, 5 lifecycles, 7 read-protocols, 6 write-protocols, 7 failure-handlings). Cross-Candidate Unity: no two candidates are duplicates; multiple credible options per axis. The decision work is real, not artificial.
- **H2 — frame scope.** Frame-exit completeness above addressed it.
- **H3 — question framing.** Question is well-formed and doesn't bias toward a particular candidate. The user's hint `autonomy_level.md or similar` is a NOMINATION, not a forcing function — the inquiry can override if structurally warranted (but FP2 supports it).
- **H7 — phase/calibration.** Addressed above.

### SV3 — Multi-Perspective Understanding

The deliverable shape sharpens. The two-ladders split is the central reframing (routeman reads meta-loop). The L0/L1-now vs L2+-later phase distinction is the second reframing (first ship human-only). Multiple credible candidates per axis (location, schema, etc.) — the central decision work is selecting ONE per axis with the structural reasoning. Sensemaking's job is to commit per-axis defaults; Decomposition + Innovation explore variations; Critique evaluates.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Which ladder does the register track — meta-loop (autonomy_ladder.md L0-L5) or human-role (desc.md Level 0-4+)?

**Strongest counter-interpretation:** the register should track BOTH because some future disciplines may need either.

**Why the counter fails (structural grounds):** routeman's specific need is the meta-loop level (the auto-vs-judgment partition correlates with autonomy_ladder.md Section 5's Selector subset). The human-role trajectory in desc.md targets a DIFFERENT concern (who reviews self-modifications). Tracking BOTH NOW commits to per-ladder schema not yet justified. Optionality is real but premature commitment introduces complexity without payoff.

**Confidence:** MEDIUM-HIGH. The counter has merit (D-5 schema option preserves the future), but tracking both NOW isn't justified by current evidence.

**Resolution:** Register tracks the META-LOOP autonomy level (autonomy_ladder.md L0-L5) as its primary content. If a future discipline needs desc.md's Level 0-4+, the schema EXTENDS to add a second field. Decision is reversible.

**What is now fixed:** register primary content = meta-loop level (L0-L5).
**What is no longer allowed:** silently treating desc.md's level as authoritative for routeman.
**What now depends:** file name + frontmatter must explicitly state the ladder choice; schema-extension hook for second ladder preserved.

---

### Ambiguity 2: Where does the register live? `docs/autonomy_level.md` vs section in `_meta_state.md` vs `docs/autonomy_state.md`?

**Strongest counter-interpretation:** put it in `_meta_state.md` because that's the meta-loop's state file and the autonomy level is meta-loop state.

**Why the counter fails (structural grounds):**
- `_meta_state.md` doesn't exist at L0 (per autonomy_ladder.md: "L0 = none — cross-inquiry traversal lives in the user's head"). The register MUST exist at L0 (to declare current = L0).
- `_meta_state.md` is per-meta-loop-session; the autonomy level is project-wide and persists across sessions.
- The register must be readable BEFORE `_meta_state.md` is ever written (at L0 startup).

**Counter-counter (defense of `docs/autonomy_level.md`):** user-language alignment (user nominated `docs/autonomy_level.md or similar`); project-wide scope matches `docs/` convention; independent lifecycle from `_meta_state.md`; discoverable next to `docs/autonomy_ladder.md`.

**Confidence:** HIGH for `docs/autonomy_level.md` separate file.

**Resolution:** `docs/autonomy_level.md` — sibling to `autonomy_ladder.md`; user-language-aligned name.

**What is now fixed:** location.
**What is no longer allowed:** putting register inside `_meta_state.md`.
**What now depends:** schema; read protocol references this path; write protocol writes to this path.

---

### Ambiguity 3: What's the minimum schema for first ship? Level only (D-1) vs level+history (D-3) vs level+evidence (D-6)?

**Strongest counter-interpretation:** minimum (D-1) is enough; everything else can be added later.

**Why the counter fails (partially):** D-1 alone loses provenance. The autonomy_ladder.md has explicit evidence-gates per transition; recording WHICH GATE triggered each transition is valuable for audit. Transitions are RARE events — schema cost is low.

**Counter-counter (defense of richer schema):** schema carries level + last-update + rationale at first ship + transition_history appended on each level change. Modest complexity for substantial audit value.

**Confidence:** MEDIUM-HIGH for D-3-like schema.

**Resolution:** Schema = `current_level` (L0-L5 enum) + `ladder` (default `meta_loop` per autonomy_ladder.md) + `set_at` (timestamp) + `set_by` (`human` | `system` after L2+) + `rationale` (1-3 sentences naming the evidence-gate or decision) + `transition_history` (appended list of prior `{from, to, set_at, set_by, rationale}` records).

**What is now fixed:** schema fields.
**What is no longer allowed:** silently rewriting register without recording transition history.
**What now depends:** write protocol must include transition-logging step; read protocol parses these specific fields.

---

### Ambiguity 4: When the register is absent, what does routeman do? Default to L0 (I-1) vs halt+flag (I-2)?

**Strongest counter-interpretation:** halt+flag is safer — don't operate under false assumptions.

**Why the counter has merit (partially):** false confidence is dangerous. But:
- L0 IS the genuinely-current state per autonomy_ladder.md ("L0 = current").
- Default-to-L0 enables routeman to run on fresh project installs without bootstrap friction.
- Routeman can EMIT A WARNING ("autonomy register absent; defaulting to L0; consider creating `docs/autonomy_level.md`") without halting.

**Counter-counter (defense of default-to-L0 + warn):** L0 is the maximally-conservative assumption; routeman behaves with maximum human-judgment-deferral when at L0. Default-to-L0 is structurally aligned with the autonomy ladder's commitment that L0 is current.

**Confidence:** HIGH for default-to-L0-with-warning. Malformed register or out-of-range value → halt+flag (these are EXPLICIT errors, not bootstrap conditions).

**Resolution:**
- Absent register → default to L0 + emit warning.
- Malformed register (YAML parse failure; missing required fields) → halt + flag.
- Out-of-range value (e.g., `current_level: L7`) → halt + flag.

**What is now fixed:** failure-handling matrix.
**What is no longer allowed:** silent default without warning.
**What now depends:** routeman's read protocol must emit the warning when defaulting.

---

### Ambiguity 5: Who writes the register, and when?

**Strongest counter-interpretation:** system-set writes are essential for autonomous graduation; designing them now is necessary.

**Why the counter fails (currently):** L0/L1 are CURRENT/BUILDABLE-TODAY; L2 is "SOON (months out)" per autonomy_ladder.md. System-set graduation requires calibration data the project doesn't yet have. Premature system-set commits to triggers that may be miscalibrated.

**Counter-counter (defense of human-set first ship + system-warning hooks):**
- L0/L1 ship needs only human-set.
- System-WARNING (G-2: system notifies when calibration data suggests advancement) can be designed now WITHOUT committing to actual writes.
- L2+ system-set is a follow-up inquiry when the L1→L2 gate's calibration data is available.

**Confidence:** HIGH for human-set first ship + system-warning hooks defined now.

**Resolution:**
- **First ship write protocol:** human-edit only (G-1). The user updates `docs/autonomy_level.md` directly when ready to graduate; updates respect schema; transition-history is appended.
- **System-warning hook (G-2):** documented capability — when system observes that an L_N → L_{N+1} gate's calibration data is met (per autonomy_ladder.md Section 6 evidence-gates), it MAY emit a warning. The warning is read-only (system signals; human acts).
- **System-set writes (G-3+):** DEFERRED to L2+ follow-up inquiry.

**What is now fixed:** first-ship write protocol = human-only with warning hook.
**What is no longer allowed:** assuming system-set writes work at L0/L1.
**What now depends:** the SKILL.md authoring inquiry specifies the warning emission shape (where + when + format); the L2+ follow-up specifies system-set semantics when calibration data is available.

---

### Ambiguity 6: Read protocol scope — routeman-specific (F-3) or cross-discipline (F-4)?

**Strongest counter-interpretation:** cross-discipline convention over-engineers; only routeman needs it now.

**Why the counter has merit:** YAGNI applies. But:
- Other autonomy-aware disciplines (per K-1 from surfacing: /reflect, /intuit, /td-critique) are PLAUSIBLE future consumers.
- Designing the read pattern as documentable convention (without forcing adoption) is cheap.
- Generalization is research frontier (FF-6); flagged but not committed.

**Counter-counter (defense of documented-convention with routeman-only first commitment):** the read pattern is a 1-2 line operation (locate file → parse frontmatter → read `current_level` field). Documenting it as REUSABLE makes it discoverable. Other disciplines can adopt or not.

**Confidence:** MEDIUM-HIGH.

**Resolution:** Routeman commits to the read protocol; the convention is documented as REUSABLE in routeman's SKILL.md authoring (or a new protocol doc `cognitive_harness/protocols/autonomy_register_read.md` — placement decision deferred to SKILL.md authoring). Other disciplines may adopt; not committed.

**What is now fixed:** routeman reads; convention is documentable.
**What is no longer allowed:** assuming other disciplines auto-adopt without their own opt-in.
**What now depends:** SKILL.md authoring decides whether the convention lives in routeman SKILL.md or a new protocol doc.

---

### Load-bearing concept tests (refinement note)

- **`autonomy register`** — proxy-vs-structural: real structural commitment (the file IS the artifact). Discoverability: yes via `docs/`. User-language alignment: matches user's nomination. **PASS.**
- **`meta-loop level vs desc.md level`** — surfacing-coined-distinction. Verifiable by reading both files. **PASS.**
- **`default-to-L0 with warning`** — operational rule. Verifiable. **PASS.**
- **`human-only first ship`** — phase-calibrated commitment. Calibrated to current L0 state. **PASS.**

### Specific-vs-pattern recognition cue

The user's framing was about ROUTEMAN's need for autonomy level. Wider pattern: other autonomy-aware disciplines may emerge. Scoped to routeman per inquiry's frame; generalization to other disciplines is FF-6 research frontier. **Appropriate scope.**

### SV4 — Clarified Understanding

The design crystallizes into 8 commitments + 4 open follow-ups:

**Committed (this inquiry):**

1. **Location:** `docs/autonomy_level.md` (sibling to `autonomy_ladder.md`; user-language-aligned).
2. **Format:** markdown with YAML frontmatter.
3. **Schema:** `current_level` (L0-L5 enum) + `ladder` (`meta_loop`) + `set_at` + `set_by` + `rationale` + `transition_history`.
4. **Lifecycle:** persistent across all sessions; in-place update for current_level + append for transition_history.
5. **Read protocol:** routeman reads on each invocation as part of file-scan; convention documentable as reusable (placement deferred).
6. **Write protocol:** human-edit only at first ship + system-warning hook capability; system-set writes deferred.
7. **Failure-handling:** absent → default to L0 + warn; malformed → halt+flag; out-of-range → halt+flag.
8. **Ladder choice:** meta-loop ladder (autonomy_ladder.md L0-L5); explicitly stated in frontmatter.

**Open follow-ups:**

- **FF-1** — Concrete frontmatter field names + types (SKILL.md authoring decides).
- **FF-2** — Read-convention placement (in routeman SKILL.md vs new protocol doc `cognitive_harness/protocols/autonomy_register_read.md`).
- **FF-3** — System-set write triggers (L2+ follow-up inquiry).
- **FF-4** — Generalization to other autonomy-aware disciplines (research frontier).
- **FF-5** — Per-discipline overrides (D-4 from surfacing; research frontier).
- **FF-6** — Reconciliation between the two ladders if they diverge in practice (research frontier; mirrors surfacing's FF-7).

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now fixed

- Location: `docs/autonomy_level.md`
- Format: markdown + YAML frontmatter
- Schema: 6 fields (current_level + ladder + set_at + set_by + rationale + transition_history)
- Lifecycle: persistent + in-place + append-for-history
- Read: routeman reads on each invocation
- Write: human-only first ship + warning hooks
- Failure: absent → L0+warn; malformed/out-of-range → halt+flag
- Ladder: meta-loop (`autonomy_ladder.md`)

### Options eliminated

- B-2 (`_meta_state.md` section) — wrong lifecycle coupling.
- B-3 (section in `autonomy_ladder.md`) — definition+state coupling.
- B-5, B-7 (project-root files / dotfiles) — break `docs/` convention.
- D-1 (level only) — loses provenance.
- E-1 (rewrite without history) — loses audit trail.
- I-1-without-warning — silent.
- G-3+ first ship — premature.

### Paths still viable

- Concrete frontmatter field names (FF-1)
- Read-convention placement (FF-2)
- System-set L2+ follow-up (FF-3)
- Generalization research frontier (FF-4)
- Per-discipline overrides (FF-5)
- Two-ladder reconciliation research frontier (FF-6)

### SV5 — Constrained Understanding

The problem reduces to seven concrete deliverables for Decomposition/Innovation:

1. The autonomy register file specification (`docs/autonomy_level.md` — location + format + schema + lifecycle).
2. The read protocol specification (routeman scope + reusable convention pattern).
3. The write protocol specification (L0/L1 human-only + system-warning hook + L2+ deferred).
4. The failure-handling specification (absent + malformed + out-of-range).
5. The two-ladders disambiguation note (frontmatter + readme statement).
6. The sidecar-boundary statement (in `docs/`, project-wide, distinct from per-inquiry sidecars).
7. The 6 residual open questions (FF-1 to FF-6).

---

## Phase 5 — Conceptual Stabilization

### Accommodation trigger check

Did multiple perspectives keep producing destabilizing anchors? Looking back:
- Technical → P-TECH-1/P-TECH-2 → resolved cleanly (alias + scope flexibility).
- Frame-exit completeness → multiple referent types → resolved via ladder-disambiguation.
- Risk → R1/R2/R3/R4 → resolved via mitigations.
- Phase/Calibration → write protocol phase-dependence → resolved via first-ship/L2+-deferred split.

The model didn't require multiple patches. The TWO-LADDERS finding was the single central insight that, once surfaced, made the rest cohere. This is not Premature Stabilization (early-clarity-arrival axis) because:
- 4+ perspectives produced NEW anchors (not confirmations).
- The two-ladders insight is GROUNDED in deliberate reading of both files in Surfacing.
- Self-applicability check: the central insight came from external evidence (the files exist), not from intuition.

### Meta-Inspection — H6 (model fit) + H8 (self-reference)

- **H6 — model fit.** Has the model required multiple patches? No. The two-ladders insight + user-language-aligned naming + human-only-first-ship + default-to-L0 all fit cleanly. PASS.
- **H8 — self-reference.** Sensemaking evaluating the autonomy register's design — the target (file artifact + protocols) doesn't share evaluation framework with sensemaking. Low risk. PASS.

### SV6 — Stabilized Model

**The model.**

The autonomy register is `docs/autonomy_level.md` — a project-wide markdown+YAML-frontmatter file tracking the current meta-loop autonomy level per `docs/autonomy_ladder.md`'s L0-L5 ladder. Schema: `current_level` (enum L0-L5) + `ladder` (default `meta_loop`) + `set_at` (timestamp) + `set_by` (`human` initially, `system` post-L2) + `rationale` (1-3 sentences citing the evidence-gate) + `transition_history` (appended list of prior transitions). Lifecycle: persistent across all sessions; in-place update for current_level; append for transition_history.

Routeman reads it on each invocation as part of its file-scan (per 16-31's corrected architecture). The read convention is DOCUMENTABLE as reusable for other autonomy-aware disciplines but COMMITTED ONLY for routeman in this inquiry.

Write protocol: HUMAN-EDIT-ONLY at first ship (L0/L1 calibrated state); a system-WARNING hook is defined (system observes that an L_N → L_{N+1} evidence-gate is met; emits warning; does NOT auto-write); system-SET writes are DEFERRED to an L2+ follow-up inquiry when L1→L2 calibration data is available.

Failure-handling: absent register → default to L0 + emit warning; malformed register or out-of-range value → halt + flag.

The "two-ladders" question is resolved: register tracks the META-LOOP ladder (autonomy_ladder.md L0-L5). The desc.md Level 0-4+ human-role trajectory is a DIFFERENT concern; the register's schema can extend to a second ladder field if a future discipline needs it.

The register is PROJECT-LEVEL (`docs/`), distinct from `_navig.md` / `_state.md` / `_branch.md` / `_meta_state.md` which are per-inquiry-or-per-meta-loop-session. Sidecar-proliferation risk is mitigated by clear distinct purpose + project-wide scope + non-overlap with existing sidecars.

**How SV6 differs from SV1.**

| Axis | SV1 (pre-analysis) | SV6 (stabilized) |
|---|---|---|
| Problem framing | Design 3 things independently | Adopt user-nominated location + project-convention format + minimum-but-adequate schema + scoped read convention + phase-calibrated write protocol + safe-default failure handling |
| Ladder choice | Unaddressed | Meta-loop (autonomy_ladder.md L0-L5); desc.md trajectory explicitly distinct |
| Location | Unspecified | `docs/autonomy_level.md` (user-language-aligned) |
| Schema | Unspecified | 6 fields (level + ladder + set_at + set_by + rationale + transition_history) |
| Write authority | "human-set or system-set" (user's framing) | Human-only first ship + system-warning hooks + system-set deferred to L2+ |
| Failure modes | Unspecified | Absent → L0+warn; malformed/out-of-range → halt+flag |
| Sidecar relationship | Unspecified | Project-wide in `docs/`; distinct from per-inquiry sidecars |
| Open questions | Implicit | 6 explicit FFs (frontmatter fields; convention placement; system-set follow-up; generalization; per-discipline overrides; two-ladders reconciliation) |

---

## Telemetry

- **Perspective saturation:** 7 perspectives applied (Technical, Human, Strategic, Risk, Resource, Definitional, Frame-exit, Phase/Calibration). Last 2 (Phase/Calibration, Frame-exit) produced new anchors. Converging but not saturated.
- **Ambiguity resolution ratio:** 6 ambiguities raised; 6 resolved (4 HIGH confidence; 2 MEDIUM-HIGH). All resolutions accompanied by structural counter-test.
- **SV delta:** SV1 → SV6 shows MAJOR structural shift (problem framing inverted: from "design 3 things" to "8 committed commitments + 6 deferred follow-ups, with the two-ladders insight as the central reframing").
- **Anchor diversity:** 5 anchor types extracted (Constraints, Key Insights, Structural Points, Foundational Principles, Meaning-Nodes). 8 perspectives applied.
- **Failure modes checked:** Status Quo Bias (none — autonomy_ladder.md is treated as authoritative because of its content, not its existence); Premature Stabilization (verified via 4+ new-anchor perspectives + grounded-in-files insight); Anchor Dominance (the two-ladders insight is dominant; checked by listing 5 other distinct decisions — location, schema, write, failure, read scope — that don't all collapse to it); Perspective Blindness (most uncomfortable perspective = "maybe routeman shouldn't have an autonomy-aware feature at all" — but routeman design memo commits it; not in scope); Clean Resolution Trap (default-to-L0-with-warning is clean; counter tested = "halt would be safer"; rejected on bootstrap-friction grounds); Self-Reference Blindness (target is files+protocols, not sensemaking).
- **Convergence verdict:** STABILIZED. Model accommodates territory. 8 commitments fixed; 6 FFs explicitly flagged.

---

## Output handoff to Decomposition

Decomposition's task: take the 8 commitments + 6 FFs and produce a clean coupling map + question tree. The 8 commitments fall into clusters:

- **File-artifact cluster:** location + format + schema + lifecycle.
- **Protocol-convention cluster:** read protocol + write protocol + failure-handling.
- **Disambiguation cluster:** two-ladders choice + sidecar boundaries.

Key load-bearing concepts handed off:
- `docs/autonomy_level.md` as the register file path.
- Meta-loop ladder (autonomy_ladder.md L0-L5) as the register's value space.
- Human-only-first-ship as the write protocol's L0/L1 commitment.
- Default-to-L0-with-warning as the absent-register handling.
- Sidecar-boundary statement as the project-wide-vs-per-inquiry distinction.
