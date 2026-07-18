# Branch: wiring the warm pass into the traverse runner

## Source Input

```text
One load-bearing thing remains: R2d / THE GAP — wiring the warm pass into the traverse runner (invoke it between Surfacing and Sensemaking; the re-anchor→re-surface fetch-loop; the block-on-severe-conflict runner policy). That's the largest separable runner-spec change and it's not started. Want to take that on next,

okay lets dive deep how it should be wired
```

(Warm session, continues the `articulate_warm` thread. R2d/THE GAP = wiring the fully-built warm pass into the `/traverse` runner spec. Upstream all BUILT — the warm reference [6 sections], the thin SKILL, the design doc [§4 re-run + conflict-detection · §7 breadth+re-surface · §8 termination · §9 always-invoke+cost · §10 how-it-runs]. Warm re-runs MQ2(always)+Rephrase(always)+MQ4(usually)+MQ1/MQ3/WHY(on-trigger)+MQA(iff≥2); carries Itemize/Deconstruct-shape/MultiDepth-literal; runs conflict-detection [content-conflict flag + severity + clarifying-Q payload]; commits anchor; NEVER fetches/asks. RUNNER OWNS: invoke /surfacing, invoke warm, the re-surface LOOP [cap 2 / ≤3 warm runs; incremental+accumulating], termination [§8], the block-on-severe-conflict policy [operator → block+ask; autonomy → flag-and-best-effort]. Current runner: A → Su → S → D → I → C → R, NO warm pass; warm sits between Su and S.)

## Articulation Reference

- **File:** `devdocs/inquiries/2026-07-09_13-53__wiring_warm_pass_into_traverse_runner/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** item_1 (the wiring — invoke-point + re-surface loop + block-policy)
- **Verdict:** HIGH-PROCEED
- **Flagged conditions:** none

## Question

**Literal:** *"wiring the warm pass into the traverse runner (invoke it between Surfacing and Sensemaking; the re-anchor→re-surface fetch-loop; the block-on-severe-conflict runner policy) … okay lets dive deep how it should be wired."*

**What kind of ask (MQ1, preserved as ambiguities):**
- `design-the-wiring-SPEC` (build-ready design) vs `implement-the-wiring` (edit `traverse/SKILL.md` now) vs `de-risk-first` (analyze the runner-spec impact before editing).
- Scope: `whole-segment` (Su → warm → loop → S) vs `just-the-hard-part` (the re-surface loop + termination) vs `just-the-policy` (the conflict-block degrade).
- Layer is pre-committed: **PROCESS** (control-flow / steps / loop / gates).

**What endpoint (MQ3, preserved):** `close-the-GAP` (warm actually invoked in the running pipeline) vs `produce-the-build-map` (spec the wiring precisely) vs `understand-the-runner-impact` (how a warm loop disrupts the linear runner — checkpoints, state, resume, iteration).

## Goal

**Deliverable shape (Deconstruct):** a **design** for the runner-spec wiring — a process-layer control-flow segment + a policy — build-ready, with the applied edit a gated follow-on. **Kinds:** the control block (Su → warm → re-surface loop → S) · the loop's incremental-surfacing + termination checks · the block-on-severe-conflict policy + autonomy degrade · the state/checkpoint/resume integration. **Bounds:** the `/traverse` runner spec, the Su→S segment; warm internals + §8 termination are fixed inputs.

**Motivation (MultiDepth WHY, preserved):** `close-the-thread` (the last load-bearing thing) vs `make-warm-actually-runnable` (the whole build is inert until the runner invokes it) vs `prepare-for-autonomy` (the loop + conflict-block are what make autonomous operation safe).

**Context needed (MQ2, preserved):** the current `traverse/SKILL.md` control structure (Su/S placement; the EXECUTE PIPELINE per-discipline loop; checkpoint + `_state.md` handoff + structural-check; RESUME logic) · the warm design doc §7–10 · the warm reference §3 · `/surfacing`'s input contract (purpose+territory+bias for an incremental re-surface). Stance: build-ready (the thread leans build) vs exploratory.

## Considered Articulations

- **Item item_1 — the wiring:**
  1. **Design the runner-spec control block** (Su → warm → re-surface-loop → S) + the block-on-severe-conflict policy, **build-ready**, applied edit gated on go-ahead. *(default — matches the thread's design-then-build cadence)*
  2. **Design AND apply** the edit to `traverse/SKILL.md` now.
  3. **De-risking analysis first** — how a warm re-surface LOOP disrupts the linear runner (checkpoint display, `_state.md` per-discipline handoff, structural-check, RESUME mid-loop, iteration reset) and what must change to absorb it, before specifying the block.
  4. **Focus on the hard part** — the re-anchor→re-surface loop mechanics (incremental `/surfacing` invocation, fixpoint/cap/oscillation termination at the runner, material accumulation) as the load-bearing sub-deliverable; invoke-point + block-policy as lighter wrappers.

## Scope Check

Question covers goal. IN-scope (Deconstruct bounds): the runner-spec segment between Su and S — the control block, the re-surface loop, the termination checks, the conflict-block policy, and their integration with the runner's existing checkpoint/state/resume/iteration machinery. OUT (MQ4): the warm discipline internals (built), the §8 termination *rule* (settled — the runner *enforces* it, doesn't redesign it), conflict-detection's own spec, the naming debt.

**Specific-vs-pattern:** the ask is specific (this one wiring), and the deliverable is that one runner-spec segment — no broader pattern intended. But note the **design-vs-implement-vs-de-risk endpoint is a genuine fork** (MQ1/MQ3/MQA) — default to the build-ready *design* (thread cadence), surface the applied-edit + de-risk as the CONCLUDE fork for the user.

## Layer Commitment

**Primary layer: PROCESS.** The dive adjudicates what STEPS the runner runs — the control-flow block between Su and S, the re-surface loop, the termination checks, the conflict-block policy, and the checkpoint/state/resume integration. This is procedure/mechanism/gate/loop, squarely Process.

Other layers considered and out of scope:
- **Meaning** — what the warm pass IS: settled (21-50 + the thread); not re-opened.
- **Structural** — the warm artifact shapes (reference/SKILL/design-doc): all built (09-05, 13-19); not re-opened. (The *runner spec's* structure — where the block-text sits — is a thin consequence of the Process design, not the object of adjudication.)

No sequential plan needed: Process is the sole layer; the applied edit (if the user takes the build fork) is execution of this Process design, not a further layer.

## Synthesis Trigger

This inquiry consumes prior outputs + the built artifacts as inputs and inherits their commitments:

- `docs/how_articulate_warm_should_be.md` — the warm design; **§7** (breadth + re-surface as the safeguard), **§8** (termination: fixpoint / round-cap=2 / oscillation-guard / material-change-judgment), **§9** (always-invoke /surfacing first + the cost bound), **§10** (how-it-runs, the per-item steps). Commits: the runner enforces termination; /surfacing runs unconditionally once; re-surface is incremental/accumulating.
- `cognitive_harness/articulate_warm/references/articulate_warm.md` — **§3.2** (the loop rule), **§3.3** (receives-never-fetches), **§2.4** (conflict-detection: emit/runner-asks, autonomy degrade). Commits: warm emits, runner acts; block-and-ask = operator-present-only.
- `2026-07-09_11-32 (holistic structure)` — the runner touch-points: **a control block** (the loop between Su and S) + **a block-policy** (severe-conflict). Commits: the runner is where the loop + policy live.
- `2026-07-09_09-48 (Item A + B)` — the re-run set + conflict-detection escalation ladder (none→PROCEED · resolvable→re-anchor+MED · severe→HIGH-FLAG+payload). Commits: the ladder's severe rung is what the block-policy keys on.
- `cognitive_harness/articulate_simple/SKILL.md` + `surfacing` SKILL — the invocation contracts the runner must call (how warm and /surfacing are invoked).

CONCLUDE will require an `## Inherited Commitments Re-test` naming each and re-testing that the runner design *honors* it (esp.: the runner enforces §8 termination; /surfacing-first is unconditional; warm never fetches/asks; block-and-ask degrades under autonomy). Sensemaking + Critique must actually re-test these against the current `traverse/SKILL.md`, not just record them.
