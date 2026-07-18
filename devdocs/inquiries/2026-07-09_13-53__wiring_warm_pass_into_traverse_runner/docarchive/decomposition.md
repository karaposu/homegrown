## User Input

devdocs/inquiries/2026-07-09_13-53__wiring_warm_pass_into_traverse_runner/_branch.md — (Process: organize the stabilized model [SV5] into buildable pieces mapped to concrete edit sites in traverse/SKILL.md; no re-open. Full piece-set + coupling risks in the instruction.)

---

# Decomposition — the runner-wiring, organized as an edit map

**WHOLE:** wire the warm pass as a new discipline `W` in the runner's first intra-iteration sub-loop between Su and S — the loop + file-handling + conflict-block-gate + operator-mode + state/resume/reset + checkpoint changes to `traverse/SKILL.md`.

## Step 1 — Coupling topology

- **P1 (declarations)** — the spine: the checkbox/row/notation that name W; everything else references it.
- **P2 (loop block) ↔ P1** — TIGHT (the loop *is* W's behavior) but the declarations stand first (a name before a body).
- **P2 (loop) ↔ P3 (data rules)** — TIGHT; P3 is the loop's data contract. **Separable** (control-flow vs file-handling). Risk #1.
- **P4 (gate + operator-mode)** — the gate rides P2's exit; the operator-mode is a **new cross-cutting concept**, not loop-local. Risk #2.
- **P5 (state/resume/reset)** — one concept (the loop's state lifecycle) across three edit sites (_state.md · RESUME · iteration reset). Don't fragment. Risk #3.
- **P6 (checkpoint)** — a thin reporting layer reading P2's telemetry.
- **P7 → P8** — terminal.

## Step 2–3 — Boundaries (top-down cut, bottom-up validated)

**DECLARATIONS (P1)** │ **LOOP (P2)** │ **DATA RULES (P3)** │ **GATE + OPERATOR-MODE (P4)** │ **STATE/RESUME/RESET (P5)** │ **CHECKPOINT (P6)** │ **RECORD (P7 gate · P8 conclude)**

Bottom-up check: each piece is a distinct claim about the runner spec — P1 (three declaration edits) ✓, P2 (the loop control-flow) ✓ separable from P3, P3 (the file contract) ✓, P4 (a gate + a new mode) ✓ two sub-parts, P5 (one lifecycle, three sites) ✓, P6 (a telemetry line) ✓. None collapses into another; none re-derives the §8 rule (fixed input).

## Step 4 — Question tree (pieces as questions + verification)

- **P1 — How is W declared?** ✓ three sites (pipeline notation A→Su→**W**→S→…; Progress +W = 8 boxes; Skill-table +row `articulate_warm`→`articulate_warm.md`) · ✓ W between Su and S · ✓ own discipline, not a hidden sub-step (F7+F1-F4+F5).
- **P2 — What does W's loop do?** ✓ loop steps enumerated (invoke warm → check fixpoint/cap(2)/oscillation → EXIT | re-surface incrementally & repeat) · ✓ termination ENFORCES §8 (not redesign) · ✓ the first Su is the mandatory-first-surface (F9), OUTSIDE the loop · ✓ re-surfaces inside W get no Su checkbox.
- **P3 — How do files behave across rounds?** ✓ surfacing.md accumulates / articulate_warm.md overwrites · ✓ no per-round files (anti-bloat) · ✓ structural check → final articulate_warm.md · ✓ round-history in _state.md. **Separable from P2 (Risk #1).**
- **P4 — How does the conflict-block work?** ✓ gate site = after-loop-before-S · ✓ severe-rung-only (F12) · ✓ operator-present may block+ask / autonomy flags+proceeds (F13) · ✓ **operator-mode = a genuinely new runner concept**, default-present/autonomy-opt-in. **Operator-mode visible as its own sub-piece (Risk #2).**
- **P5 — How does the loop's state survive resume + reset?** ✓ three sites (the _state.md Warm-loop state line; the RESUME mid-loop extension; the iteration reset incl. W) · ✓ minimal F4 extension (one line, not a state machine) · ✓ reset includes W. **One concept, three sites — not fragmented (Risk #3).**
- **P6 — What does W report?** ✓ four telemetry fields (rounds 0/1/2 · anchor moved? · conflict flag+severity · termination reason) · ✓ fits the F1.1 checkpoint format.
- **P7 — Gate:** ✓ prosecute the four (granularity · resume-hole · block-default · overwrite-audit) + self-reference + backstop.
- **P8 — Record:** ✓ self-contained edit map (site→change, ~8 sites) · ✓ Inherited Commitments Re-test (the 5) · ✓ Next Actions typed (gated) + design-vs-write flagged.

## Step 5 — Interface map

- P1 → all: the name/slot each piece references.
- P2 → P3 (the loop calls the file rules), → P4 (the loop's exit hands to the gate), → P6 (the loop emits telemetry).
- P4's operator-mode → P5 (the mode is read at the gate; the state line records nothing about it — but the reset/resume must not clobber it) and → P8 (the one new runner concept the finding must flag).
- P5 → the runner's three existing sections (_state.md template, RESUME, ITERATION reset).
- {P1..P6} → P7 → P8: pieces feed the gate; survivors feed the edit map.

## Step 6 — Dependency order

P1 (declare W) → P2 (the loop) → P3 (its data rules) → P4 (the gate + mode after the loop) → P5 (state lifecycle across resume/reset) → P6 (checkpoint) → P7 (gate) → P8 (record). The build order in P8: the edit map applies P1→P6 as one coherent runner-spec change (gated), since a half-wired runner (declared W, no loop) would be broken.

## Step 7 — Self-evaluation

- **Completeness:** the declarations (P1), the loop (P2), its data (P3), the gate+mode (P4), the state lifecycle (P5), and the telemetry (P6) cover every edit site the wiring touches. ✓
- **Balance:** P2/P4/P5 are the heavy pieces (control-flow, the new gate+concept, the cross-cutting lifecycle); P1/P3/P6 are focused (declarations, a file contract, a telemetry line). Proportionate. ✓
- **Coupling managed:** Risk #1 (P2/P3 separable) · Risk #2 (operator-mode its own sub-piece) · Risk #3 (P5 one concept / three sites, not fragmented) all explicit. ✓
- **Independence at the gate:** P1 (granularity), P5 (resume-hole), P4 (block-default), P3 (overwrite-audit) are each independently disputable. ✓
- **No re-opening:** the §8 termination rule + conflict-detection spec + warm internals are fixed inputs; the runner *enforces*, doesn't redesign. ✓
- **Right grain:** 8 pieces for a runner-spec change touching ~8 edit sites, with one control-loop, one new gate, one new concept, and one cross-cutting lifecycle — not over-split (each earns a distinct verification), not under-split (declare / loop / data / gate+mode / lifecycle / telemetry are genuinely different edits). ✓
- **Testability:** each piece has concrete verification; the four load-bearing claims routed to the gate. ✓

**Self-assessment: PROCEED to Innovation.** The cut maps cleanly onto the runner spec: declare W (P1) → its loop (P2) → the loop's data (P3) → the gate + the one new concept (P4) → the state lifecycle across resume/reset (P5) → the telemetry (P6) → gate/record (P7/P8), all three coupling risks managed.
