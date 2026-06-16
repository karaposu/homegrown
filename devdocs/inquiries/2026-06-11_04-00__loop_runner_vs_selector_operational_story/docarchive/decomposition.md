# Structural Decomposition — loop_runner_vs_selector_operational_story

## User Input

devdocs/inquiries/2026-06-11_04-00__loop_runner_vs_selector_operational_story/_branch.md

**The whole being decomposed** (from sensemaking SV5/SV6): a visualizable STORY of three actors — the Runner (dumb code launcher), the Loop (the MVL work), the Selector (the reasoning scheduler) — operating as an event-loop scheduler over the moving `_route.md` ready-queue, faithful to the prior findings, honest about open parts, told as a cast + one traced wake-cycle + a diagram.

---

## 1. Coupling Map

**Elements:** the three actors / cast (E1) · code-vs-session verdict (E2) · the Runner's non-semantic contract (E3) · the scheduler decision-procedure WAKE→…→STOP (E4) · parallel handling — dedup + re-rank + N-cap (E5) · sync-handoff/async-execution (E6) · the compare-phase slot (E7) · the naming options incl. "meta-loop" (E8) · the traced-cycle story + diagram (E9).

| Pair | Coupling | Why |
|---|---|---|
| E1 → all | foundational | the cast (Runner/Loop/Selector) is the vocabulary every other piece speaks in |
| E2 ↔ E1 | strong | code-vs-session IS a property of two cast members (Runner=code, Selector=session) |
| E3 → E4 | strong | the Runner's "write a completion-record, don't read" is what the Selector's WAKE consumes |
| E4 ⊃ E5, E6 | nested | dedup/re-rank/N-cap (E5) live INSIDE the FILTER/RANK/DISPATCH steps; sync/async (E6) IS the DISPATCH step's character |
| E4 ⊃ E7 | nested | the compare-slot sits between WAKE and RANK |
| E8 → E1 | labels | the naming options assign words to the cast (and resolve "meta-loop") |
| E1–E8 → E9 | fan-in | the story + diagram RENDER everything above as one traced cycle |

**Clusters:** {E1+E2+E3} the cast and its properties · {E4+E5+E6+E7} the scheduler (the decision-procedure and its parallel/async/compare internals) · {E8} naming · {E9} the rendering. **Valleys:** between the cast-definition and the scheduler (the cast is *what*, the scheduler is *how they act*); between the architecture and its story-rendering; naming is a thin separable layer.

## 2. Boundary Set (top-down)

Five pieces: **P1 The cast — three actors + their forms** (Runner=dumb code; Loop=the MVL work; Selector=reasoning session; + the code-vs-session rule and the Runner's non-semantic completion-record contract) · **P2 The decision-procedure — the scheduler** (WAKE→REFRESH→FILTER→RANK→DISPATCH→STOP; the `_route.md`=ready-queue / completion-record=wake-event mapping; the RANK v1 rule) · **P3 The parallel + async behavior** (dedup-of-in-flight-intents; re-rank-on-moving-queue; N-cap back-pressure; sync-handoff/async-execution; the compare-phase slot) · **P4 The re-tests + naming** (the 4 confirmed Synthesis re-tests; the "meta-loop" naming options for the user's veto) · **P5 The story + diagram** (the cast list; the one traced wake-cycle narrative; the one-screen diagram — the visualizable deliverable that renders P1–P3).

## 3. Bottom-Up Validation

Atoms → pieces: Runner=launcher / Loop=work / Selector=decider; judgment-gates-a-session; completion-record-as-pointer; never-reads → **P1**. WAKE / REFRESH / FILTER / RANK(v1) / DISPATCH / STOP; ready-queue=`_route.md`; wake=completion-record → **P2**. dedup-in-flight; re-rank-each-wake; N-cap; sync-handoff+async-execution; compare-slot → **P3**. carrier=Runner / Selector=Selector confirmed; parallelism-decomposes confirmed; Mode B confirmed; "meta-loop" contested → **P4**. cast-list + traced-cycle + diagram → **P5**. No atom homeless. **HIGH confidence.**

## 4. Question Tree

**P1 — The cast.** *"Who are the actors and what form does each take?"*
- [ ] **Runner** = dumb **code** (executor pool): spawn the loop, detect done/failed, write a completion record — never reads findings/routes, never judges
- [ ] **Loop** = an MVL/aMVLw inquiry (six disciplines → finding.md + new routes); the *work*; launched by the Runner, not the Runner itself
- [ ] **Selector** = a reasoning **session**; the only judgment
- [ ] The code-vs-session rule stated: *a session is justified only by a judgment* → Runner=code, Selector=session; advantage of each (code: deterministic/cheap/parallel/contextless; session: buys reasoning)
- [ ] The Runner's non-semantic contract: **completion-record-as-pointer** ("loop #X done at T, artifacts at P"), never a read

**P2 — The decision-procedure (the scheduler).** *"How does the Selector know what to run next?"*
- [ ] The mapping: Runner=executor pool · Selector=scheduler-brain · `_route.md`=ready-queue · completion-record=wake event
- [ ] **WAKE** (a loop finished / a tick) → **REFRESH** (read the cumulative `_route.md`) → **FILTER** (drop gated/blocked/dup/done) → **RANK** → **DISPATCH** (if <N in flight) → **STOP-CHECK** → back to WAKE
- [ ] **RANK v1** (flagged refinable): highest Priority among goal-advancing unblocked routes; ties by Confidence; the Selector's control-flow moves (revisit/unblock/widen/stop) overlay it

**P3 — Parallel + async behavior.** *"How do N loops compose without colliding, and what's sync vs async?"*
- [ ] **Dedup-of-in-flight-intents**: reject a candidate route matching the launched intent of an in-flight loop
- [ ] **Re-rank-on-every-wake**: always choose against the latest (grown) field — the moving ready-queue / non-stationary landscape at the operational grain
- [ ] **N-in-flight cap**: the back-pressure knob (= Expedition Mode B + worklist concurrency limits)
- [ ] **Sync handoff / async execution**: the Selector blocks only to *launch* (hand to Runner → spawn → return), never to *finish*; loops run concurrently (fire-and-forget)
- [ ] **The compare-phase slot**: when ≥2 finished loops touched the same concept, an optional Selector sub-step between WAKE and RANK reconciles them — SLOTTED, design DEFERRED (per the prior finding)

**P4 — Re-tests + naming.** *"Is this faithful to the priors, and what do we call things?"*
- [ ] Synthesis re-tests CONFIRMED: Runner = the Turn Architecture finding's "carrier"; Selector = its "Selector"; parallelism-decomposes (running=Runner spawns / deciding-N=Selector DISPATCH / comparing-N=compare-slot); Expedition Mode B (Selector=spine, Runner spawns workers, GATED/BLOCKED reads the ledger)
- [ ] FRAME-REVISED (naming only): **"meta-loop"** — prior finding = the cycle, user = the Runner; present options [(a) re-point→Runner; (b) keep=cycle + call executor "the Runner" (recommended); (c) retire] as the user's veto; do NOT pick unilaterally

**P5 — The story + diagram (the deliverable).** *"Can the user SEE it?"*
- [ ] A **cast list** (Runner / Loop / Selector / `_route.md` / completion-record), one line each
- [ ] **One traced wake-cycle** as narrative: goal set → Selector ranks the field → fires #1/#2/#3 via the Runner (sync handoff) → the three spin (async) → #2 finishes → Runner writes "done #2" → Selector wakes, reads #2's new routes, re-ranks the grown field, dedups against #1/#3 still running, fires #4 → … → field exhausts/goal met → Selector stops
- [ ] A **one-screen diagram** (the three actors + `_route.md` + the wake-loop arrows)
- [ ] A nod to the user's **Beyblade** image (the Runner "fires it and lets it spin")

## 5. Interface Map

| From → To | What flows | Direction |
|---|---|---|
| P1 → P2 | the cast vocabulary + the Runner's completion-record (the WAKE input) | one-way |
| P2 ⊃ P3 | the scheduler steps that dedup/re-rank/N-cap/sync-async/compare live inside | nested |
| P1/P2/P3 → P4 | the architecture the re-tests check + the names assign | one-way |
| P1–P4 → P5 | everything the story renders | fan-in |

*Assumptions-not-data check:* (a) the RANK formula is v1, not settled — housed in P2's RANK criterion; (b) the dedup mechanism is concretized-but-refinable — housed in P3; (c) the compare-phase is slotted-not-designed — housed in P3; (d) "meta-loop" is contested, user's seat — housed in P4. All housed.

## 6. Dependency Order

```
Wave 1: P1 (the cast + forms)         — the vocabulary
Wave 2: P2 (the scheduler) · P4 (re-tests + naming)   — P2 uses P1; P4 checks P1
Wave 3: P3 (parallel/async internals of P2)
Wave 4: P5 (the story + diagram — renders P1–P3, names from P4)
```
Mostly linear; P3 nests in P2; P5 is the fan-in.

## 7. Self-Evaluation (full 7 dimensions)

| Dimension | Verdict | Note |
|---|---|---|
| Independence | **PASS** | the cast (P1), the scheduler (P2+P3), the re-tests/naming (P4), and the rendering (P5) are separable; P3 nests cleanly in P2 |
| Completeness | **PASS** | covers every MQ3 endpoint — the story (P5), runner spec (P1), code-vs-session (P1), naming (P4), decision-procedure (P2), parallel model (P3) — and the WHY motives (visualize→P5; mechanism/policy split→P1; right-size-runner→P1; crack-decision→P2/P3; converge-names→P4) |
| Reassembly | **PASS** | P1–P5 = the cast + how they act + faithfulness + the visualizable story — exactly the deliverable |
| Tractability | **PASS** | each piece bounded by sensemaking's collapses |
| Interface clarity | **PASS** | four open-part assumptions housed |
| Balance | PASS-with-note | P2+P3 (the scheduler) is the heaviest — proportional (it's the user's "I don't know how it works" centerpiece); P5 is the explicit deliverable | 
| Confidence | **HIGH** | top-down and bottom-up agree |

*Determination-mechanism piece check:* the runtime judgment — "which route(s) to dispatch on this wake" — has its mechanism housed in P2 (RANK) + P3 (dedup/N-cap): rank the filtered survivors, dedup against in-flight intents, dispatch up to N. PASS. (RANK v1 honestly flagged.)

**Stopping decision:** no piece needs sub-decomposition (the compare-phase would, but it's deliberately deferred).

**Next discipline input:** Innovation drafts the final texts — the cast (three actors + code-vs-session + the Runner contract), the scheduler decision-procedure (WAKE→…→STOP + RANK v1), the parallel/async internals (dedup + re-rank + N-cap + sync/async + compare-slot), the re-tests + naming options, and above all the **traced-wake-cycle story + diagram** — honoring story-not-taxonomy, the non-semantic Runner, the re-tests, and the honest open-part flags.
