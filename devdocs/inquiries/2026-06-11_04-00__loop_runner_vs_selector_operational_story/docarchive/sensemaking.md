# Structural Sensemaking — loop_runner_vs_selector_operational_story

## User Input

devdocs/inquiries/2026-06-11_04-00__loop_runner_vs_selector_operational_story/_branch.md

---

## SV1 — Baseline Understanding

The user wants a visualizable STORY of how the loop-running system operates, and is reaching for a split between a dumb operational layer (fires loops, records done) and a smart decision layer (picks what to run). Surfacing sharpened this to a THREE-way split (Runner / Selector / Loop), showed it re-confirms the Turn Architecture finding's mechanism/policy split (Runner = "the carrier," Selector = "Selector"), answered code-vs-session (judgment-gates-a-session → Runner=code, Selector=session), and decomposed the hard part — how the Selector decides what to run next — into an event-loop scheduler (WAKE→REFRESH→FILTER→RANK→DISPATCH→STOP). The likely shape: the deliverable is the traced wake-cycle story + cast + diagram, resting on those decisions, with the RANK rule and the "meta-loop" name flagged.

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints**
- C1 — The deliverable must be a readable STORY (visualizable), not only a taxonomy.
- C2 — The Runner is non-semantic: never reads/interprets results, never decides.
- C3 — Re-test the prior findings (Turn Architecture; Expedition), don't silently overwrite.
- C4 — The decision-procedure's uncertain parts (RANK rule, dedup) stay honestly flagged.
- C5 — Naming is the user's seat (ship options + veto).

**Key Insights**
- KI1 — **The picture is THREE kinds, not two, and naming the third dissolves the whole confusion.** The user oscillates between "meta-loop" and "loop runner" and "Selector/orchestrator" because two roles are visible but a third is implicit: the **Loop** (the MVL inquiry — the actual work) is NOT the Runner (the thing that *launches* the loop). Once you separate **Runner (launches) / Loop (works) / Selector (decides)**, every sentence in the user's sketch lands on exactly one of them, and the "are they the same thing?" questions answer themselves. This is the sensemaking spine.
- KI2 — **The architecture CONVERGES with the Turn Architecture finding; it does not contradict it.** That finding split the between-inquiry layer into *launching = plumbing (the carrier)* and *choosing = the Selector (role)*. The user independently re-derived exactly this from the Beyblade angle: the Runner IS the carrier (plumbing), the Selector IS the Selector. So the re-test mostly CONFIRMS — with one genuine revision: the user wants the word **"meta-loop"** to name the Runner, whereas the finding gave "meta-loop" to the *cycle*. That is a naming collision to resolve, not an architectural conflict.
- KI3 — **"Code vs session" is settled by one rule: a separate reasoning session is justified only where a judgment is made.** The Runner makes none (fire + detect-done + write a pointer), so it is **code** — and a session for it would be pure waste (paying a context window + tokens for a thing that decides nothing, and serializing what should run in parallel). The Selector makes the only judgment (what to run next), so it is **a session**. The advantage framing the user asked for: *code* buys determinism, low cost, true parallelism, and no context dependence; a *session* buys reasoning — which only the Selector needs. This also matches the finding's "launching is mechanism; anything can invoke a runner."
- KI4 — **The Runner's non-semantic contract is the load-bearing boundary, and a "completion record" is how you honor it.** The Runner must report "done" WITHOUT reading what was produced. The mechanism: it detects completion (child-process exit, or a sentinel the loop writes on finish) and writes a **completion record that is a POINTER, not a read** — "loop #X finished at T, artifacts at path P." It never opens finding.md or `_route.md`. This keeps interpretation entirely on the Selector's side and lets the Runner stay dumb code. (The user's exact words: "it shouldn't read the results, just record that it is finished.")
- KI5 — **The decision-procedure is an event-loop scheduler, and naming it that is what makes it visualizable.** The user's "I don't know how it works" resolves into a pattern they'll recognize instantly: a **scheduler over a priority queue**. *The Runner is the executor pool; the Selector is the scheduler-brain; `_route.md` is the ready-queue; a completion record is the wake event.* The Selector's cycle: **WAKE** (a loop finished) → **REFRESH** (read the cumulative `_route.md` — routelister already merged the new routes with Priority/Confidence/Layer/GATED tags) → **FILTER** (drop gated/blocked, drop dups of in-flight intents, drop done) → **RANK** (order the survivors) → **DISPATCH** (if fewer than N loops in flight, hand the top route(s) to the Runner) → **STOP-CHECK** (field exhausted or goal met → halt) → back to WAKE. Every element maps to something that already exists (routelister Priority, the Selector's control-flow vocabulary, the ledger's GATED/BLOCKED).
- KI6 — **Parallelism introduces exactly two genuinely-new operational hazards, and both are handled inside the scheduler loop.** (i) **Dedup of in-flight intents** — two running loops could spawn routes toward the same concept; the Selector must not dispatch a route a sibling is already pursuing, so it dedups each candidate against *the set of routes the currently-running loops were launched on* (which it knows, because it dispatched them). (ii) **The ready-queue moves while you traverse it** — finishing loops ADD routes, so "what's next" is computed against a growing field; the fix is that the Selector RE-RANKS on every WAKE, always choosing against the latest `_route.md`. (This is the project's non-stationary-landscape thesis, now at the operational grain.) The **N-in-flight cap** is the back-pressure knob (Expedition Mode B + worklist concurrency limits).
- KI7 — **"Synchronous" and "asynchronous" are both right, about different acts.** The user said dispatch is "kind of synchronous" yet described loops running while it reads routes (async). Resolution: the **handoff is synchronous** (the Selector hands a route to the Runner and the Runner spawns it immediately — a fast, blocking call that returns once the loop is *launched*, not once it *finishes*); the **execution is asynchronous** (the loop then runs concurrently; the Selector does not block on it). "Fire-and-forget": sync to launch, async to complete. This is precisely an event loop's schedule→run→callback shape.
- KI8 — **The L4 compare-phase has a place in the story but not a design here.** When ≥2 finished loops touched the same concept, their findings may overlap/conflict; reconciling them (merge/promote/continue/stop) is the prior finding's "single genuinely-new L4 judgment," whose DESIGN it defers (gated on multihead reality). The story SLOTS compare as an optional Selector sub-step (between a completion and the re-rank) and explicitly leaves its design open — honoring the deferral.
- KI9 — **The naming, laid out for the user's veto.** Cleanest assignment for an unambiguous story: **Runner** (the code executor = the finding's "carrier" = the user's Beyblade-firer) · **Selector** (the decision session = "orchestrator," second name retired per the prior finding) · **Loop** (the MVL inquiry = the work). The contested word is **"meta-loop"**: the prior finding gave it to the *cycle*; the user wants it for the *Runner*. Options: (a) re-point "meta-loop" → the Runner (honor the user); (b) keep "meta-loop" = the cycle, call the executor "the Runner/carrier"; (c) retire "meta-loop" entirely (it keeps causing collisions). Recommend (b) or (c); user decides.

**Structural Points:** SP1 three kinds — Runner/Selector/Loop (naming the Loop dissolves the confusion) · SP2 convergence with the Turn Architecture finding (Runner=carrier, Selector=Selector; only "meta-loop" re-points) · SP3 judgment-gates-a-session → Runner=code, Selector=session · SP4 the non-semantic Runner contract (completion-record-as-pointer) · SP5 the event-loop scheduler (WAKE→REFRESH→FILTER→RANK→DISPATCH→STOP) · SP6 two parallel hazards (dedup-in-flight; moving ready-queue) + N-cap back-pressure · SP7 sync-handoff/async-execution · SP8 compare-phase slotted-not-designed · SP9 the naming options for veto.

**Foundational Principles:** FP1 separate the thing that LAUNCHES from the thing that WORKS from the thing that DECIDES (C1/C2) · FP2 a session is justified only by a judgment (C3) · FP3 the Runner never reads (C2) · FP4 re-rank against the latest field every wake (the non-stationary operational landscape) · FP5 honesty on the open parts — RANK v1, dedup mechanism, compare design (C4) · FP6 naming is the user's seat (C5).

**Meaning-Nodes:** Runner/Selector/Loop · carrier=Runner · judgment-gates-a-session · completion-record-as-pointer · the scheduler loop · executor-pool/scheduler-brain/ready-queue/wake-event · dedup-in-flight · moving-ready-queue · sync-handoff/async-execution · compare-slotted · "meta-loop"-contested.

---

## SV2 — Anchor-Informed Understanding

The story is now clear in outline: three actors (**Runner** = dumb code executor; **Selector** = decision session; **Loop** = the MVL work), with the Runner = the Turn Architecture finding's "carrier" and the Selector = its "Selector" (so the architecture re-confirms that finding, re-pointing only the word "meta-loop"). Runner=code and Selector=session because *a session is only justified by a judgment*. The hard part — how the Selector decides next — is an **event-loop scheduler** (`_route.md` = ready-queue, completion record = wake event): WAKE→REFRESH→FILTER→RANK→DISPATCH→STOP, with dedup-of-in-flight-intents and re-rank-on-a-moving-queue as the two parallel-specific moves, an N-cap for back-pressure, and sync-handoff/async-execution. Open, flagged: the RANK rule's v1, the dedup mechanism's concreteness, the compare-phase design (deferred), and the "meta-loop" naming (user's veto).

---

## Phase 2 — Perspective Checking

**Technical / Logical.** The scheduler framing is sound and standard: a thread/process pool (Runner) + a scheduler (Selector) + a ready-queue (`_route.md`) + completion callbacks (completion records) is the canonical async-executor architecture. The judgment-gates-a-session rule is logically clean (cost is justified only by the value a reasoning session adds, which is judgment). The non-semantic Runner is enforceable (it literally never opens the artifact files).

**Human / User.** The user is thinking out loud and explicitly wants to SEE it. The story must lead with the cast and a single traced cycle, not with a taxonomy. The Beyblade metaphor is theirs — keep a nod to it (the Runner "fires and lets it spin"). The "I don't know how it decides next" is the emotional center — the scheduler answer should be delivered as "here's the shape you were missing," concretely.

**Strategic / Long-term.** This architecture is the operational form of the Expedition's Mode B (a persistent spine dispatching workers). Getting the Runner/Selector split right now means the climb to autonomy is a story of the *Selector* graduating (human picks → system proposes → system decides within scope) while the Runner stays a fixed piece of code — clean separation of what-changes (policy) from what-doesn't (mechanism).

**Risk / Failure.** (a) Over-designing the RANK rule — pretending a precise priority formula is settled when it isn't; mitigate by shipping a deliberately-simple v1 (highest-Priority unblocked route that advances the goal, ties broken by Confidence) and flagging it as v1. (b) The dedup hazard being underspecified — if vague, parallel loops collide; mitigate with the concrete "dedup each candidate against the launched-routes of in-flight loops." (c) The compare-phase being quietly skipped — name it explicitly as slotted-but-deferred. (d) Naming over-reach — don't unilaterally re-point "meta-loop"; present options.

**Resource / Feasibility.** The Runner-as-code is cheap and buildable (a process spawner + a done-detector + a pointer-writer). The Selector-as-session is the existing human-or-agent role. `_route.md` already exists (routelister writes it). So most of the story describes pieces that exist or are trivial — the only real design is the scheduler logic, which is the inquiry's point.

**Definitional / Internal Consistency (the Synthesis re-tests).** (i) *Turn Architecture: "launching = plumbing (the carrier)"* — CONFIRMED, and the user re-derived it (Runner = carrier); the code-vs-session verdict (Runner=code) is exactly "launching is mechanism." (ii) *Turn Architecture: "choosing = the Selector (role)"* — CONFIRMED; the decision-session IS the Selector; its scheduler-cycle is the Selector's see→choose operationalized continuously. (iii) *Turn Architecture: "meta-loop = the cycle"* — FRAME-REVISED at the naming level: the user wants "meta-loop" for the Runner; the architectural cycle is unchanged, only the word is contested (resolution deferred to the user). (iv) *Turn Architecture: "parallelism decomposes — running=plumbing, deciding-N=Selector, comparing-N=L4"* — CONFIRMED and now made concrete (running = the Runner's N spawns; deciding-N = the Selector's DISPATCH-up-to-N; comparing-N = the slotted compare-phase). (v) *Expedition: "Mode B = persistent spine + worker loops; the ledger as a deferral queue"* — CONFIRMED; the Selector is the persistent spine, the Runner spawns the workers, and the GATED/BLOCKED filter reads the ledger. No contradictions; one naming revision.

**Definitional / Frame-exit Completeness.** Gating fires on "meta-loop," "runner," "decision." **"meta-loop":** (a) the cycle (prior finding) — kept as an option; (b) the Runner (user) — kept as an option; (c) retire — kept as an option; COMMITTED: *contested, resolve by veto* (do not unilaterally pick). **"runner":** (a) a reasoning session — REJECTED (no judgment to make); (b) **dumb code / executor pool** — COMMITTED; (c) the loop itself — REJECTED (the loop is the work, the runner launches it). **"decision":** (a) made by the runner — REJECTED (boundary); (b) **made by the Selector, as an event-loop scheduler** — COMMITTED; (c) made inside the loop — REJECTED (that's the loop's own disciplines, a different layer).

**Phase / Calibration-State.** The architecture is a design proposal (not a measured result); the scheduler shape is high-confidence (standard pattern), the RANK rule is explicitly v1, the compare-phase is deferred. Calibration honest.

---

## SV3 — Multi-Perspective Understanding

Two reframes stabilize. First: **there are three actors, and the confusion was a missing name** — the **Loop** (the work) is not the **Runner** (the launcher) is not the **Selector** (the decider); name all three and the user's every sentence lands cleanly, and the architecture turns out to re-confirm the Turn Architecture finding (Runner = its carrier, Selector = its Selector), re-pointing only the word "meta-loop." Second: **the decision-procedure the user couldn't see is an event-loop scheduler** — Runner = executor pool, Selector = scheduler-brain, `_route.md` = ready-queue, completion record = wake event — cycling WAKE→REFRESH→FILTER→RANK→DISPATCH→STOP, with dedup-of-in-flight and re-rank-on-a-moving-queue as the parallel-specific moves. The deliverable is this rendered as a single traced story the user can watch.

---

## Phase 3 — Ambiguity Collapse

#### Ambiguity A1: Is the architecture two layers (operational vs decision) or three actors?

**Strongest counter-interpretation:** the user said two things — the operational layer and the decision mechanism — so keep it two.

**Why the counter fails (structural grounds):** the user's own sentences need a third referent. "The loop runner runs the loop" — the runner and the loop are different (one launches, one works). "The loops produce findings and routes" — the loop is the producer, not the runner. If you only have two names, "runner" has to mean both the launcher and the work, which is exactly the conflation that made the picture murky. Three actors — **Runner (launches) / Loop (works) / Selector (decides)** — is the minimum that lets every sentence land on one referent.

**Confidence:** HIGH. **Resolution:** the story has **three actors: Runner, Loop, Selector.** The user's "operational vs decision" two-layer intuition is correct *about the Runner-vs-Selector split*; the Loop is the third thing both of them are about. **No longer allowed:** collapsing Runner and Loop; a two-name model.

#### Ambiguity A2: Should the Runner be code or a session?

**Strongest counter-interpretation:** make it a session too, for symmetry / so it can handle failures intelligently.

**Why the counter fails (structural grounds):** a reasoning session is justified ONLY by a judgment it must make. The Runner makes none — it fires a loop, detects completion, writes a pointer. Giving it a session pays a context window and tokens for zero decisions, and worse, tends to serialize what should be parallel (a reasoning agent naturally does one thing at a time). Failure-handling that needs judgment (retry? escalate?) is itself a decision — so it belongs to the Selector, not the Runner. The Runner only needs to report "failed" as a completion-record variant; the Selector decides what to do about it.

**Confidence:** HIGH. **Resolution:** the **Runner is code** (a dumb executor pool: spawn, detect-done/failed, write a pointer). A **session is reserved for judgment** (the Selector). Advantage framing: code = deterministic, cheap, parallel-safe, contextless; session = buys reasoning, which only the Selector needs. **No longer allowed:** a reasoning session for the Runner; the Runner making retry/escalate judgments.

#### Ambiguity A3: How does the Selector know what to run next? (the centerpiece)

**Strongest counter-interpretation:** it's an open research problem; just say "it decides somehow."

**Why the counter fails (structural grounds):** the shape is a well-known pattern and every piece already exists. It is an **event-loop scheduler over a priority queue**: WAKE (a completion record appears) → REFRESH (read the cumulative `_route.md`) → FILTER (drop gated/blocked/dup/done) → RANK (order the survivors) → DISPATCH (if < N in flight, hand the top route(s) to the Runner) → STOP-CHECK (exhausted/goal-met → halt). The only genuinely-open sub-piece is the RANK *formula*, which gets a deliberately-simple v1 (highest Priority among goal-advancing unblocked routes, ties broken by Confidence) flagged for refinement. "It decides somehow" would abandon exactly the question the user asked.

**Confidence:** HIGH on the loop shape; MED on the RANK formula (shipped as v1). **Resolution:** the decision-procedure is the **WAKE→REFRESH→FILTER→RANK→DISPATCH→STOP scheduler**; RANK v1 = highest-Priority goal-advancing unblocked route, ties by Confidence, explicitly refinable. **No longer allowed:** leaving the procedure unspecified; pretending the RANK formula is finalized.

#### Ambiguity A4: How do parallel loops compose without colliding?

**Strongest counter-interpretation:** just run N loops; collisions are rare, ignore them.

**Why the counter fails (structural grounds):** finishing loops add routes to the shared `_route.md`, and two in-flight loops can independently push toward the same concept — so without handling, the Selector can dispatch redundant work and the "next" is computed against a stale snapshot. Two concrete moves fix it: **dedup-at-dispatch** (reject a candidate route that matches the launched-intent of an in-flight loop) and **re-rank-on-every-wake** (always choose against the latest field). The **N-cap** bounds concurrency (back-pressure).

**Confidence:** HIGH. **Resolution:** parallelism is handled by **dedup-of-in-flight-intents + re-rank-on-each-wake + an N-in-flight cap**; the field is explicitly a *moving* ready-queue (the operational face of the non-stationary-landscape thesis). **No longer allowed:** ignoring dedup; computing "next" against a stale field.

#### Ambiguity A5: Is dispatch synchronous or asynchronous?

**Strongest counter-interpretation:** the user said "synchronous," so the Selector waits for each loop.

**Why the counter fails (structural grounds):** if the Selector blocked on each loop, it couldn't fire #2/#3/#5 while #1 runs — which the user explicitly describes. The reconciliation: the **handoff is synchronous** (hand route to Runner → Runner spawns it → the call returns once *launched*), the **execution is asynchronous** (the loop runs concurrently; the Selector moves on). Fire-and-forget.

**Confidence:** HIGH. **Resolution:** **synchronous handoff, asynchronous execution.** The Selector blocks only for the instant of launching, never for the duration of running. **No longer allowed:** the Selector blocking on a loop's completion; reading "synchronous" as serial execution.

#### Ambiguity A6: What is the word "meta-loop" now?

**Strongest counter-interpretation:** just adopt the user's new usage (meta-loop = the Runner) and move on.

**Why the counter fails (structural grounds):** the prior finding deliberately gave "meta-loop" to the *cycle* and warned that loose naming re-grows confusion; silently re-pointing it would contradict a committed finding without a re-test, and "meta-loop" literally reads as a *loop* (a cycle), not an *executor*. But the user clearly wants the word for the operational thing. This is the user's seat (the prior finding made naming the user's veto).

**Confidence:** HIGH (that it's contested); the choice is the user's. **Resolution:** present three options — (a) re-point "meta-loop" → the Runner; (b) keep "meta-loop" = the cycle, name the executor "the Runner" (recommended — least collision, the word still reads as a loop); (c) retire "meta-loop" entirely. Ship as a veto, do not pick unilaterally. **No longer allowed:** silently re-pointing the word against the prior finding.

---

*Load-bearing concept test:* **"three actors: Runner / Loop / Selector"** — the spine; flag. **"judgment-gates-a-session"** — the code-vs-session rule; flag. **"completion-record-as-pointer"** — the non-semantic Runner; flag. **"the event-loop scheduler (WAKE→…→STOP)"** — the decision-procedure; flag. **"sync-handoff / async-execution"** — flag. **"dedup-of-in-flight-intents"** — flag. All defined in the finding.

*Specific-vs-pattern cue:* the user's concrete sketch (fire #1/#2/#3, read `_route.md`s) anchors the general pattern (a scheduler over a moving priority queue); both served — the story uses the sketch as its spine and the scheduler as its skeleton.

---

## SV4 — Clarified Understanding

Now clear. The story has **three actors**: the **Runner** (dumb code — fires a loop, detects done, writes a completion-record-as-pointer, never reads results), the **Loop** (an MVL inquiry — the work, producing finding.md + new routes), and the **Selector** (a reasoning session — the only judgment). Code-vs-session is settled by *judgment-gates-a-session* (Runner=code, Selector=session). The decision-procedure is an **event-loop scheduler** (`_route.md` = ready-queue, completion record = wake event): WAKE→REFRESH→FILTER→RANK→DISPATCH→STOP, with **dedup-of-in-flight-intents**, **re-rank-on-a-moving-queue**, an **N-cap**, and **sync-handoff/async-execution**. It re-confirms the Turn Architecture finding (Runner=carrier, Selector=Selector) and the Expedition's Mode B (Selector=spine, Runner spawns workers). Open/flagged: the RANK formula (v1), the dedup mechanism (concretized but refinable), the compare-phase (slotted, deferred), and the word "meta-loop" (user's veto). The deliverable renders all this as one traced wake-cycle + a cast list + a diagram.

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:** three actors (A1); Runner=code / Selector=session (A2); the scheduler decision-procedure (A3); parallel handling via dedup + re-rank + N-cap (A4); sync-handoff/async-execution (A5); the five Synthesis re-tests (four confirmed, one naming frame-revised).

**Eliminated:** the two-name model; a Runner session; "it decides somehow"; ignoring dedup; serial execution; unilateral re-pointing of "meta-loop."

**Remaining freedom (Innovation's lanes):** the story's exact telling (the traced cycle's concrete beats; the cast-list voice; the one-screen diagram); the RANK v1 formula's precise statement; the dedup mechanism's concrete form (intent-signature comparison?); the completion-record's minimal fields; how vividly to use the Beyblade metaphor; the naming options' presentation.

---

## SV5 — Constrained Understanding

The problem is bounded: deliver a **visualizable story** of three actors — Runner (dumb code launcher), Loop (the MVL work), Selector (the reasoning scheduler) — operating as an event-loop scheduler over the moving `_route.md` ready-queue (WAKE→REFRESH→FILTER→RANK→DISPATCH→STOP, with dedup, re-rank, N-cap, sync-handoff/async-execution), faithful to the Turn Architecture finding (Runner=carrier, Selector=Selector) and the Expedition's Mode B, honest about the open parts (RANK v1, dedup, compare-phase) and the contested word "meta-loop" (user's veto), told as a single traced wake-cycle + cast + diagram.

---

## Phase 5 — Conceptual Stabilization

*Accommodation check:* monotonic; the one real tension (the user's "synchronous" vs their own parallel description) resolved cleanly into sync-handoff/async-execution. No patch-loop.

*Meta-inspection:* H2 — frame-exit ran on "meta-loop," "runner," "decision." H3 — the user's two-layer intuition was sharpened (to three actors) and their "I don't know the decision-procedure" was answered (the scheduler), not deferred. H4 — six coined terms flagged. H8 self-reference — mild (the system designing its own operating loop); guards: the architecture re-tests and largely CONFIRMS the prior findings (not self-flattering novelty), the RANK formula is honestly shipped as v1, the compare-phase is left deferred, and the naming is handed to the user rather than self-assigned.

## SV6 — Stabilized Model

**The story's architecture (what the narrative will render):**

1. **Three actors (name the third to dissolve the confusion):**
   - **The Runner** — dumb **code** (an executor pool). It receives a launch-spec, spawns the MVL loop, detects completion (process exit / a sentinel file), and writes a **completion record that is a pointer** ("loop #X done at T, artifacts at P"). It NEVER reads findings or routes, never judges, never decides. (= the user's Beyblade-firer = the Turn Architecture finding's "carrier.")
   - **The Loop** — an MVL/aMVLw **inquiry** (six disciplines → finding.md + new routes via routelister). The actual *work*. Not the Runner; the Runner launches it.
   - **The Selector** — a reasoning **session** (the only judgment). It picks routes, dispatches them, watches for completions, and decides what to run next. (= the user's "orchestrator/Selector" = the finding's "Selector.")

2. **Code vs session, settled:** *a separate reasoning session is justified only where a judgment is made.* The Runner makes none → **code** (deterministic, cheap, parallel-safe, contextless). The Selector makes the only one → **session**. (A Runner-session would pay tokens for zero decisions and tend to serialize the parallelism.)

3. **The decision-procedure — an event-loop scheduler** (the answer to "how does it know what to run next?"). Mapping: **Runner = executor pool · Selector = scheduler-brain · `_route.md` = ready-queue · completion record = wake event.** The Selector's cycle:
   - **WAKE** — a loop finished (its completion record appeared), or a tick.
   - **REFRESH** — read the cumulative `_route.md` (routelister already merged the finished loop's new routes into the index, each carrying Priority/Confidence/Layer/GATED-on tags).
   - **FILTER** — drop GATED/BLOCKED routes (read off the ledger), drop routes duplicating an in-flight loop's launched intent (**dedup**), drop completed ones.
   - **RANK** — order the survivors. **v1 (flagged, refinable):** highest **Priority** among goal-advancing, unblocked routes; ties broken by **Confidence**; the Selector's control-flow moves (revisit/unblock/widen/stop) overlay it.
   - **DISPATCH** — if fewer than **N** loops are in flight, hand the top route(s) to the Runner (a **synchronous handoff**; the Runner spawns them; they then run **asynchronously**).
   - **STOP-CHECK** — if the field is exhausted/all-gated or the goal is met, **stop** instead of dispatching.
   - → back to **WAKE**.

4. **Parallelism, concretely:** N loops run concurrently and finish at different times; each finish grows the shared `_route.md`. Two parallel-specific moves keep it sane: **dedup-of-in-flight-intents** (don't dispatch a route a sibling is already pursuing) and **re-rank-on-every-wake** (always choose against the latest field — the non-stationary landscape at the operational grain). The **N-in-flight cap** is the back-pressure knob (= Expedition Mode B + worklist concurrency limits).

5. **The L4 compare-phase — slotted, not designed:** when ≥2 finished loops touched the same concept, reconciling their findings (merge/promote/continue/stop) is the prior finding's one genuinely-new L4 judgment; the story places it as an optional Selector sub-step (between a completion and the re-rank) and leaves its design deferred (per that finding).

6. **Re-tests (Synthesis):** CONFIRMED — Runner = the finding's "carrier"; Selector = its "Selector"; parallelism decomposes (running=Runner spawns, deciding-N=Selector DISPATCH, comparing-N=the slotted compare); Expedition Mode B (Selector=spine, Runner spawns workers, GATED/BLOCKED reads the ledger). FRAME-REVISED (naming only) — the word **"meta-loop"**: prior finding = the cycle, user = the Runner; resolution handed to the user (recommend: keep "meta-loop"=cycle, call the executor "the Runner"; or retire "meta-loop").

7. **The deliverable's form:** a **cast list** (Runner/Loop/Selector/`_route.md`/completion-record), **one traced wake-cycle** told as a story (goal set → Selector ranks → fires #1/#2/#3 → they spin → #2 finishes → Runner writes "done #2" → Selector wakes, reads #2's new routes, re-ranks the grown field, dedups against #1/#3, fires #4 → … → field exhausts → Selector stops), and a **one-screen diagram**.

**Difference from SV1:** SV1 had the operational-vs-decision intuition and the scheduler hunch; SV6 has the three-actor spine (the Loop named as the missing third), the code-vs-session rule stated and applied, the decision-procedure fully decomposed into a named scheduler with a concrete (v1) RANK rule, the two parallel hazards and their fixes, the sync/async resolution, the five re-tests done (four confirmed + one naming revision), and the deliverable's exact form (cast + traced cycle + diagram) — with every open part honestly flagged.

---

## Saturation Indicators (Telemetry)

- **Perspective saturation:** 8 perspectives (Frame-exit on meta-loop/runner/decision; Phase/Calibration on the design-proposal status); saturating.
- **Ambiguity resolution ratio:** 6/6 collapsed (5 HIGH, 1 HIGH-on-contested-naming handed to the user); 0 silently open.
- **SV delta:** STRUCTURAL — a voice-sketch became a three-actor architecture + a named scheduler decision-procedure + a story plan.
- **Anchor diversity:** all 5 anchor types from 3 source classes (the user's sketch; the two priors; the standard async-scheduler pattern); the architecture re-confirms rather than self-flatters.
- **Failure modes:** Status Quo Bias — n/a (re-tests CONFIRM the priors on merits, and the one revision is naming, handed to the user). Premature Stabilization — the two-name, runner-session, "decides-somehow," and serial-execution counters got full force. Clean Resolution Trap — the RANK rule kept as honest v1; the compare-phase left deferred; "meta-loop" left to veto. Self-Reference — the system designs its own loop but defers the open parts and the naming rather than self-assigning. None firing.

**Next discipline input:** Decomposition should partition the deliverable (the cast/three-actors / the code-vs-session verdict / the runner contract / the scheduler decision-procedure / the parallel-handling / the sync-async / the compare-slot / the naming options / the traced-cycle story + diagram) with interfaces, honoring story-not-taxonomy, the non-semantic Runner, the re-tests, and the honest open-part flags.
