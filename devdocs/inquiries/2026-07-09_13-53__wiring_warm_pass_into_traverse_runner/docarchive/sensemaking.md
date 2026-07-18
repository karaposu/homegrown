## User Input

devdocs/inquiries/2026-07-09_13-53__wiring_warm_pass_into_traverse_runner/_branch.md — (PROCESS-layer wiring dive: stabilize the runner-wiring design from surfacing.md [F1-F15]. Resolve the 7 open questions. Layer = Process. Guard both ways. Full model in the instruction.)

---

# Sensemaking — the runner-wiring design, stabilized

Harness-on-harness; grounding = the 15 line-checkable facts (F1-F15) + the priors' commitments, not design-taste. Layer = Process (the §8 termination *rule* is a fixed input; the runner *enforces* it).

## SV1 — Raw anchors

- **A1 (organizing insight):** the warm pass is a **loop-controller in a new sub-loop** between Su and S — the runner's first intra-iteration loop (F5: none today).
- **A2 (F1-F4):** the runner is checkbox-per-discipline · Skill-mapping-table · file-existence RESUME · per-discipline transition protocol.
- **A3 (F7):** Routelister is precedent for a non-standard invocation (special shape + 2 files).
- **A4 (F9-F15):** the warm design's runner-facing commitments — unconditional first surface · runner-enforced §8 termination · incremental-accumulating re-surface · severe-rung block · operator-present-only degrade · warm-emits/runner-acts · MQ2-drives-re-surface.
- **A5 (F4 gap):** RESUME has no "mid-loop" position — the one place the runner's model must stretch.
- **A6 (F13 gap):** the runner has no notion of "operator present" — the one new concept the block-policy needs.

## SV2 — Boundary construction

- **IN scope:** the runner-spec control-flow between Su and S — warm's slot, the re-surface loop, file handling across rounds, mid-loop resume, the conflict-block gate + operator-mode, iteration reset, the checkpoint telemetry.
- **OUT (fixed inputs, not re-opened):** the §8 termination *rule* (the runner enforces it) · conflict-detection's own spec · warm's internals · the naming debt · the actual git commit.

## SV3 — Perspective checks (run genuinely)

- **Self-reference (harness-on-harness):** every collapse below rests on a line-checkable fact (F-number cited), not on "the design is clean." The model is a *consequence* of F1-F15 — e.g. "warm is its own discipline" is forced by F1-F4's checkbox-per-discipline model + F7's precedent, not chosen for elegance. Clean.
- **Canon-consistency (each inherited commitment honored, not re-opened):**
  - §9 unconditional-first-surface → **honored** (Su stays a single unchanged call = the mandatory first surface; the wiring adds the *warm read + conditional re-surfaces after* it).
  - §8 termination → **enforced, not redesigned** (the loop reads fixpoint/cap/oscillation/material-change as given; the runner is the enforcement site the rule already names).
  - §11 incremental-accumulating → **honored** (surfacing.md grows; each re-surface fetches only newly-relevant).
  - warm-emits/runner-acts (F14) → **honored** (the loop *and* the ask live on the runner; warm never fetches/asks).
  - block-and-ask operator-present-only (F13) → **honored** (default-present may block; autonomy degrades to flag-and-best-effort).
  - All five honored. The wiring *implements* the commitments; it re-opens none.
- **Distinctness from 11-32:** 11-32 *named* the two runner touch-points (a control block + a block-policy) but did not spec the loop mechanics, file handling, resume, or operator-detection. This dive *specs* them — genuinely distinct, and the load-bearing deliverable no prior built. (Honesty check: if this merely restated "there's a control block + a policy," it'd be redundant; it doesn't — OQ2-OQ7 are all new mechanism.)
- **Non-sycophancy both ways:** (anti-bloat) the model adds no machinery §8 doesn't need — no per-round files (overwrite + a state-line suffices), no re-derivation of termination. (anti-stub) it doesn't under-wire — the loop, the gate, the resume marker, and the operator-mode are each forced by a specific fact (F10/F12/F4/F13); "invoke warm between Su and S" would drop all four.

## SV4 — Ambiguity collapses

**(a) Warm's slot** → **its own discipline W with a special loop-block.** Progress → A / Su / **W** / S / D / I / C / R (8 boxes); +1 Skill-table row (`articulate_warm` → `articulate_warm.md`); +1 dedicated EXECUTE PIPELINE subsection. Grounded in F7 (Routelister precedent) + F1-F4 (consistency) + F5 (no sub-loop exists → the loop must be *explicit*). **Not** a hidden "Su↔W block" (would bury the structure + break checkbox-per-discipline resumability); **not** a peer *linear* step (warm is a loop, F10-F11, not a single shot).

**(b) How the loop is expressed** → **W's special transition protocol** (the Routelister-precedented pattern): the mapping-table row + a subsection that specifies the bounded re-surface loop. Not an ad-hoc inline pipeline edit.

**(c) File handling** → **surfacing.md accumulates** (append/grow, F11) · **articulate_warm.md overwrites** each warm round (only the settled one persists — the loop's purpose is the fixpoint, intermediate rounds are transient) · **round history in `_state.md`** (consolidate-not-scatter), not per-round files. The structural check runs against the final articulate_warm.md.

**(d) Resume mid-loop** → **a Warm-loop state line in `_state.md`** (round N/2 · last-anchor · status=looping|settled). RESUME: W checked → past it; surfacing.md exists ∧ W unchecked → resume the loop from the marker (re-run warm on the accumulated surfacing.md; the round counter is honored across the resume so the cap holds). Minimal extension of F4's file-existence model — one state line, not a new state machine.

**(e) Block-policy site** → **after the loop settles, before S.** Only the **severe** content-conflict rung blocks (F12); none/resolvable proceed. Operator-present → may block + pose the formulated payload question; autonomy → flag-and-best-effort (F13).

**(f) Operator-presence** → **a runner mode, default operator-present, degraded by an explicit autonomy signal** (headless/cron). The one new notion the runner spec adds; default-present is safe, autonomy is opt-in.

**(g) Iteration reset** → **W included:** the non-answered-outer-loop reset becomes Su/**W**/S/D/I/C/R (+ clear the Warm-loop state line), because W depends on Su's output.

**(h) Endpoint** → **build-ready DESIGN + a write-offer.** Default design; the thread leans build (surface the applied edit at CONCLUDE).

## SV5 — Stabilized model

> **Wire the warm pass as a new discipline `W` sitting in the runner's first intra-iteration sub-loop between Su and S. `W` gets a Progress checkbox, a Skill-mapping-table row, and a dedicated EXECUTE PIPELINE subsection (the Routelister-precedented "special invocation" pattern) that specifies a bounded re-surface loop: invoke warm → check fixpoint/cap(2)/oscillation → (moved & under cap → re-surface incrementally into the accumulating surfacing.md → invoke warm again)* → on exit, the conflict-block gate (severe content-conflict → operator-present blocks+asks / autonomy flags+proceeds) → S. Cross-cutting: surfacing.md accumulates, articulate_warm.md overwrites, a Warm-loop state line carries round-count for mid-loop RESUME, the iteration reset includes W, and a runner operator-present mode (default present, autonomy opt-in) gates the block.**

**Load-bearing claims routed to Critique:** (1) warm-as-its-own-discipline-W vs a coupled Su↔W block — is the checkbox/row/subsection the right granularity, or does the loop's coupling of Su and W make a separate W box misleading? (2) the Warm-loop state line — does one line actually suffice for correct mid-loop RESUME, or is there a resume hole (e.g. a session dying *between* re-surface and warm)? (3) operator-present-as-default — is "default block on severe conflict" the safe default, or does it risk a spurious block halting an interactive run? (4) articulate_warm.md overwrite — does discarding intermediate rounds lose anything an audit needs?

## SV6 — Saturation check

Saturated for the process layer: all 7 open questions collapsed, each to a fact-grounded resolution; the organizing insight (a new sub-loop) is stable; the inherited commitments are verified honored; distinctness from 11-32 is genuine. Four load-bearing claims remain for the gate (granularity, resume-hole, block-default, overwrite-audit). Residuals are Critique's. **PROCEED to Decomposition.**
