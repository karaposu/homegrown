# How `articulate_warm` should be

`articulate_warm` is the **post-context (second) pass of articulation**. It runs after `articulate_cold` has produced a first, context-free framing of a task, and after `/surfacing` has drawn the relevant project material into view. Its structural job is to **drive the framing↔surfacing loop to a settled anchor**: re-derive what the task is anchored to now that project material is present, re-fetch material when the anchor moves to a different part of the project, and stop once the anchor stops moving — emitting the refreshed phrasing as the terminal by-product.

It is the warm counterpart to `articulate_cold`, the **pre-context (first) pass**. Together they are one articulation family in two phases: a cold pass that aims the first `/surfacing`, then a warm pass that frames the task properly — driving further `/surfacing` rounds until the anchor stabilizes — once material is in view.

> **Naming.** `articulate_cold` and `articulate_warm` are the current names for the two passes (previously `articulate_simple` and `articulate_via_context`). Both passes inherit their operation definitions from the built discipline spec at `cognitive_harness/articulate_simple/references/articulate_simple.md` — that directory path is **unchanged pending a separate rename of the built specs**, so path references below keep the `articulate_simple/` form while the passes themselves are named cold/warm.

## Table of contents

1. [Where it sits](#1-where-it-sits)
2. [Why a second pass exists — the ordering problem](#2-why-a-second-pass-exists--the-ordering-problem)
3. [The two-pass shape](#3-the-two-pass-shape)
4. [What the second pass re-runs — and the loop it controls](#4-what-the-second-pass-re-runs--and-the-loop-it-controls)
5. [The commitment shift](#5-the-commitment-shift)
6. [Substrate — it receives context, never fetches it](#6-substrate--it-receives-context-never-fetches-it)
7. [What the second pass depends on — breadth and the re-surface loop](#7-what-the-second-pass-depends-on--breadth-and-the-re-surface-loop)
8. [Termination — when the re-surface loop stops](#8-termination--when-the-re-surface-loop-stops)
9. [Always-invoke surfacing, and cost](#9-always-invoke-surfacing-and-cost)
10. [How it runs](#10-how-it-runs)
11. [What it does NOT do](#11-what-it-does-not-do)
12. [Relationship to `articulate_cold`](#12-relationship-to-articulate_cold)
13. [Status](#13-status)

---

## 1. Where it sits

Articulation happens in two passes with `/surfacing` between (and, when the anchor moves, around) them:

- **`articulate_cold` — the pre-context pass.** Runs on the bare task statement, before any project context is touched. Its five operations (Itemize; the four meta-questions MQ1–MQ4 plus MQA; Deconstruct; MultiDepth; Rephrase) are **identification-only** — they name what is open about the task without committing to any reading, because committing without project context would be a guess. Its output includes the **context-need** the runner uses to aim `/surfacing`.
- **`/surfacing` — the fetch.** The runner reads the pre-context pass's MQ2 (context-need) and MQ4 (boundary) and formulates `/surfacing`'s input (purpose + territory + bias); `/surfacing` returns relevance-tagged project material.
- **`articulate_warm` — the post-context pass.** Runs on the task statement **plus** the surfaced material. It re-anchors the framing; when the re-anchor names a materially different part of the project, it drives another `/surfacing` round and re-anchors again, until the anchor settles; then it produces the framing the downstream loop disciplines operate on.

The pre-context pass is a bootstrap: its structural job is to aim the first `/surfacing` broadly enough to bring the right context into view. The **real framing** — the one that commits to what the task is anchored to — is the post-context pass. `articulate_warm` is that step, and it is not a single shot: it is the controller of a short re-anchor→re-surface loop (§4, §8).

## 2. Why a second pass exists — the ordering problem

A good framing of a task needs the project's own model of the domain in view: which parts of the project the task bears on, in the project's actual terms. But the operation that does the framing — `articulate_cold` — runs **first and cold**. By design it does not reach into project files (its substrate is the task statement plus whatever is already in session context). So the context a good framing depends on **has no legal way to enter at framing time.**

The consequence is an ordering problem. The cold pass can only anchor the task to what is already salient in the working context. When the project's model is not warm, the cold pass anchors to whatever *is* warm — the vocabulary and structures the operator happens to be holding — rather than to the project facets that actually matter. The framing comes out plausibly worded but anchored to the wrong thing.

`articulate_warm` is the structural resolution. It runs the framing **again, warm** — after `/surfacing` has put the project material in view — so the anchor can be derived from the project's model instead of from whatever was incidentally salient. The cold pass aims; the warm pass frames — and, when the frame lands on a different part of the project than the cold pass fetched, re-aims and re-fetches until the anchor settles.

## 3. The two-pass shape

```
  TASK STATEMENT
        │
        ▼
  ┌─ articulate_cold ────────────────┐   PRE-CONTEXT (cold)
  │  Itemize · MQ1–MQ4 + MQA ·       │   identification-only —
  │  Deconstruct · MultiDepth ·      │   no project context touched;
  │  Rephrase                        │   no commitment
  └─────────────┬────────────────────┘
                │ MQ2 (context-need) + MQ4 (boundary)
                ▼
    ┌─▶ /surfacing ──────────────────┐   fetches project material,
    │   purpose + territory + bias   │   bounded by the current context-need
    │   └───────────┬────────────────┘   (incremental on re-entry — §8)
    │               │ surfaced project material
    │               ▼
    │   ┌─ articulate_warm ──────────┐   POST-CONTEXT (warm)
    │   │  re-run MQ2 (re-anchor) on │   commitment appropriate;
    │   │  the surfaced material     │   receives material; never fetches
    │   └───────────┬────────────────┘
    │               │
    │   did the context-need move to a materially
    │   different territory?  (and is the round cap not yet hit? — §8)
    │         │                     │
    └── YES ──┘                     └── NO / verdict = no
   (runner re-surfaces on                │  FIXPOINT — the anchor settled
    the corrected territory)             ▼
                             re-run Rephrase (concrete vocabulary) →
                             re-anchored framing + considered articulations
                                         │
                                         ▼
                             downstream loop disciplines
                             (Sensemaking, Decomposition, Innovation, Critique)
```

The flow *within* each pass is acyclic — one pass per item, no in-invocation looping. Iteration lives in the **cross-pass** `articulate_warm`↔`/surfacing` loop: the warm pass re-anchors, and if the anchor moved to a materially different territory the runner re-surfaces and the warm pass runs again, until the anchor settles (§8). `/surfacing` runs unconditionally at least once between the two passes (§9).

## 4. What the second pass re-runs — and the loop it controls

The warm pass's real job is **not** "produce a better rephrasing" — it is to **drive the re-anchor→re-surface loop to a fixpoint**, and emit the refined phrasing once the anchor settles. It does not re-run all five operations; it re-runs the two that serve that job, and the rest carry their first-pass output through unchanged.

- **Re-run — MQ2 (context-need). The load-bearing move.** MQ2 is the operation whose output the runner reads to bound `/surfacing`'s territory — **MQ2 is where the task's anchor is set.** At the cold pass, MQ2 could only *identify*, in the abstract, what kinds of context *might* be load-bearing. At the warm pass it can **commit** — name the actual project facets the task bears on, now that they are in view. This is the operation that re-anchors the framing, and its committed context-need is the **trigger** that decides whether a re-surface is needed.

- **Re-surface when the anchor moves — conditional-but-core.** When the warm MQ2 re-anchors onto a **materially different** territory than the one already fetched, the re-anchor by itself has only *named* the right target — the material in view is still the wrong (cold-fetched) material. So the runner re-invokes `/surfacing` on the corrected territory; that is what turns the re-anchor's trigger into the **payoff** — a framing actually grounded in the right material. Re-surface fires only *when the anchor moves* (typically 0–1 times, §8), so it is **conditional** — but it is **core, not optional**: the load-bearing half of the warm pass (the re-anchor) is inert without it. This is the mechanism, not new machinery: it is the same `context-need → runner → /surfacing` path the cold pass already uses (§10), run again.

- **Re-run — Rephrase (considered articulations). The terminal by-product.** Once the anchor has settled (no further re-surface), Rephrase refines the alternative formulations using the concrete project vocabulary the surfaced material supplies (specific prior artifacts, project-particular terms) instead of general-knowledge phrasing. It is emitted last, once the anchor stops moving — it is the loop's output, not its purpose.

  *Why still commit it explicitly.* Writing the refined framing down as an explicit artifact — rather than leaving the improved understanding implicit in the model's working context — has **weak** standalone value *within one continuous warm session* (the model already holds the surfaced material, so the artifact adds mainly an explicit pin), but **real** value *across sessions and under autonomy*: the in-context understanding is lost when a session ends, so downstream disciplines and later or automated consumers inherit only the written artifact. The explicit commit is the durable carrier of the warm frame; its value scales with how fragmented and autonomous the work is. (This is the weaker of the warm pass's two benefits; the load-bearing one is the re-anchor→re-surface recovery above.)

- **Carry through unchanged — Itemize, Deconstruct, and MultiDepth's literal restatement.** These are structural facts about the statement itself — how many distinct tasks it holds, each task's (subject, action, deliverable-shape), and the verbatim restatement. They do not change when project context arrives, and they were legitimately settled cold. Deconstruct's deliverable-shape in particular remains the **task-identity anchor** that keeps the warm re-articulation from drifting into a different task. (MultiDepth's *WHY-axis* is context-sensitive and re-runs on-trigger — see the next bullet.)

- **Re-run on the "did it actually move?" trigger — MQ4 (boundary), then MQ1 (scope) / MQ3 (intent) / MultiDepth (WHY-axis).** These re-run warm gated by one judgment: **did the surfaced context actually change this operation's output?** — *not* "is this operation theoretically context-sensitive?" That trigger is the cost-guard: it is what keeps the warm pass a fraction of a pass, not two (§9). **MQ4 re-runs *usually*** — surfaced context routinely reveals exclusions the cold pass could not have known (project constraints, prior-art boundaries), so the boundary is the strongest re-run beyond MQ2 and Rephrase. **MQ1 / MQ3 / MultiDepth-WHY re-run only when context actually moved them.** MQA re-runs iff ≥2 operations re-ran (it reconciles whatever moved). So the re-run set is tiered — **MQ2 + Rephrase always · MQ4 usually · MQ1 / MQ3 / WHY on-trigger · MQA iff ≥2** — and the required loop is re-anchor→re-surface.

### Why re-running MQ2 is required — not Rephrase alone

The tempting minimal design re-runs **only Rephrase**: the cold pass identified what context was needed, `/surfacing` fetched it, and Rephrase now phrases the task using it. That is enough **only if the cold pass identified the *right* context.** It often does not — that is exactly the ordering problem of §2.

MQ2 is what bounds `/surfacing`. If the cold MQ2 named the wrong territory (anchored to what was incidentally salient), then `/surfacing` fetched the wrong material, and **re-phrasing cannot recover an anchor that was set wrong upstream** — Rephrase would only produce fluent formulations of a mis-framed task. Fixing cold *vocabulary* (re-running Rephrase) is not the same as fixing cold *framing* (re-running MQ2).

### Why re-running MQ2 needs a re-surface to pay off — the decoupling

Re-running MQ2 warm is necessary but **not sufficient on its own.** The warm pass has two products with different dependencies, and pulling them apart is what shows why re-surface is core:

- **The re-anchor (MQ2)** matters precisely when the cold pass fetched the *wrong* territory — but in that situation the material in view is the wrong-territory material. So the warm MQ2 can *name* the right territory, yet it cannot *ground* a framing in material that was never fetched. It produces the **trigger** (the corrected target), not the **payoff** (a framing grounded in that target). The payoff requires a re-surface.
- **The Rephrase** rides on material already in view, so when the right material is already present it adds only an explicit pin — the weaker, marginal product.

So the second pass must re-derive the anchor itself and then, when the anchor moved, fetch what it now points at: **re-run MQ2 against the surfaced material, commit to the project facets that actually matter, re-surface if that commitment names a materially different territory, and only then refine the phrasing.** Re-running MQ2 is the load-bearing move; the re-surface is what makes it actionable; re-running Rephrase is the refinement that rides on top once the anchor is stable.

### Conflict-detection — the one warm-only operation

Everything above is an *inherited* operation, re-run or carried. The warm pass also gains **one operation the cold pass has no version of: conflict-detection.** It is enabled by the same thing that makes commitment appropriate — the surfaced material is now in view — and it is the pipeline's first check that the task's premise survives contact with project reality.

- **What it is.** An *identify* move — the context-enabled sibling of the cold pass's ambiguity-identification. Where the cold meta-questions identify what is open *within the request*, conflict-detection identifies incompatibilities *between the request's premise and the surfaced project reality* (the task assumes a component, a constraint, or a prior decision that the surfaced material contradicts). Same 2-shape answer (identified-conflicts-list / explicit-empty), same **don't-adjudicate** rule: it names the mismatch; it does not decide which side is right. It is **not a new operation type** — it reuses the inherited identify DNA on a new object that only context makes reachable (§12).

- **It grades; it does not adjudicate.** It assigns the conflict a *severity* — the same kind of self-grading the verdict system already does — but never rules on the request-vs-reality question itself.

- **The escalation ladder.**
  - *no conflict* → normal warm output (HIGH-PROCEED).
  - *resolvable by re-anchoring* → re-anchor onto the reality and note it (MED-FLAG, `content-conflict`).
  - *severe — premise contradicted, unresolvable by re-anchoring, and proceeding would waste the pipeline* → HIGH-FLAG with the `content-conflict` flag-type and a **formulated clarifying question** as payload.

- **It emits; the runner asks.** The discipline never pauses, asks, or halts — it keeps the cold pass's no-halt / never-ask stance (§11). It *emits* the conflict, the flag, and the formulated question; the **runner** surfaces the flag, poses the question, and — when an operator is present — may block on a severe conflict before spending the downstream pipeline. **Under autonomy** (no operator to answer) the runner degrades to flag-and-best-effort: record the conflict, proceed with the best re-anchored framing. Block-and-ask is an operator-present runner policy, not a discipline halt-gate.

- **The flag-type.** The `content-conflict` discriminator distinguishes this from the *operational* FLAGs of the self-check; it is defined in the shared verdict system (`articulate_simple.md`, Verdict Assignment) but emitted only by the warm pass — the cold pass has no surfaced reality to conflict against.

Conflict-detection is a **cheap, rare safety-net**: premise-conflicts are uncommon, but a missed one wastes the whole pipeline on a confidently mis-framed task. It is worth adding because it is cheap (it rides the inherited identify move and the existing FLAG action) and fail-fast — not because conflicts are common. It does **not** re-order the warm pass's priorities: the re-anchor→re-surface loop remains the load-bearing job; conflict-detection is a guard that runs alongside it.

## 5. The commitment shift

The two passes differ not only in what they can see but in what they are allowed to do.

- **Pre-context pass — identification-only.** Every operation either preserves the input or names what is open. No operation commits to a perceived property of the task, because a cold commitment would be an ungrounded guess that downstream consumers would treat as actionable.
- **Post-context pass — commitment appropriate.** Once the project material is in view, committing is no longer a guess. The warm MQ2 commits the task's anchor — and that commitment is what can drive a further `/surfacing` round when it lands on a different part of the project; the warm Rephrase produces concrete, context-grounded articulations once the anchor settles.

One boundary is preserved across the shift: **committing the anchor is not the same as adjudicating the reading.** The warm pass commits to *what project context the task bears on* — the anchor it deferred while cold. It does **not** collapse the task to a single chosen interpretation; Rephrase still emits the span of considered articulations, preserving the openness of genuinely ambiguous readings for the downstream disciplines to resolve. Commit the anchor; keep the reading-span.

## 6. Substrate — it receives context, never fetches it

`articulate_warm` keeps `articulate_cold`'s substrate rule: **the discipline never reads project state directly.** What changes is that the runner *hands it* the surfaced material as an input — including the material from any re-surface round the warm re-anchor triggers.

- **FETCH** — the discipline reading project state itself — stays forbidden, in both passes. Re-surfacing is the *runner's* act, driven by the warm MQ2's committed context-need; the warm pass requests-by-re-anchoring, it does not fetch.
- **RECEIVE** — the discipline being handed the runner's already-surfaced result — is what the second pass adds, once per surfacing round.

So the post-context substrate is: the task statement + the pre-context pass's bundle + the received surfaced material (accumulated across any re-surface rounds). The no-fetch boundary is intact; the input scope is widened for the second pass only.

Within that widened input, two kinds of material do different work, and the warm operations need both:

- The pre-context pass's **MQ answers are constraints** — negative; they rule out vocabularies and readings that would lock the task into the wrong space (Deconstruct's deliverable-shape being the strongest, holding task-identity).
- The **surfaced material is information** — positive; it supplies the concrete project vocabulary and the actual facets the warm MQ2 re-anchors onto and the warm Rephrase draws from.

Keeping both is what prevents the warm pass from being **over-determined** — collapsing onto specific surfaced items and losing the span of legitimate readings. Constraint bounds; information enriches.

## 7. What the second pass depends on — breadth and the re-surface loop

Re-running MQ2 warm can only re-anchor onto material that `/surfacing` actually fetched. If the cold pass mis-named the territory **and** `/surfacing` fetched only that narrow territory, the warm MQ2 has nothing better in view *for that round*. Two things follow — a breadth optimization and the loop that is the real safeguard.

- **Breadth of the first surfacing reduces loop length.** In practice the first `/surfacing` should reach the project's own model of the domain **by default** — not only the narrow territory the cold MQ2 named. The more the first round already contains the right material, the more often the warm MQ2 finds what it needs already in view and terminates in **zero** re-surfaces. Breadth is a **loop-length optimizer**, not the only safeguard: it makes the common case cheap, but it is not what guarantees a correct anchor.

- **The re-surface loop is the general safeguard.** When the warm MQ2 re-anchors onto a materially different territory than what was fetched, the runner re-invokes `/surfacing` on the corrected territory, and the warm pass re-anchors on the enlarged material — repeating until the anchor settles:

  ```
  articulate_cold → /surfacing → articulate_warm → /surfacing → articulate_warm → … → downstream
  ```

  The **single-surfacing form** (no re-surface round) is the **special case** — it applies when the first surfacing already reached the right material, so the warm MQ2 has nothing new to point at. The **staged, looping form is the general case**, for when re-anchoring changes what is relevant. This is why the second surfacing round is **core, not optional**: it is the mechanism that lets the warm pass recover from a cold mis-aim at all. When it stops is specified in §8.

## 8. Termination — when the re-surface loop stops

The `articulate_warm`↔`/surfacing` loop (§7) needs a stop rule. It has three parts, plus one supporting judgment.

- **The fixpoint — the fast path.** The loop stops when the warm MQ2's context-need comes back **unchanged from the prior round**, or when its **verdict = no** (no further context needed — an existing MQ2 output, §10). The loop iterates on the context-need until the thing that drives `/surfacing` stops moving. This is what makes it terminate *quickly* in the normal case.

- **The round cap — the termination guarantee.** There is no proof the context-need always settles on its own — pathologically it could keep drifting. So the actual **guarantee** of termination is a hard **round cap: a default of 2 re-surfaces (at most 3 `articulate_warm` runs), tunable.** The fixpoint makes the loop stop *fast*; the cap makes it stop *for certain*. The cap is load-bearing, not decorative — it is what bounds the loop when the fixpoint is slow to arrive.

- **The oscillation guard.** If the context-need alternates between rounds (territory A → B → A rather than converging), stop and **flag** the unstable framing for the downstream disciplines rather than spin. An oscillating anchor is a signal to hand downstream, not a reason to keep looping.

- **The material-change judgment (the supporting decision the fixpoint needs).** The fixpoint rests on comparing this round's context-need to the prior round's for **material** change — so the loop needs one judgment: *did the context-need move to a materially different territory (different project facets / kinds), or is it the same target merely reworded?* Reworded = unchanged = **terminate**; a genuinely different territory = moved = **re-surface** (subject to the cap). Without this judgment "unchanged" is undefined. It is the same class of context-informed call `articulate_cold` already makes at its cold-vs-warm boundary; most often it is a single check inside the warm MQ2 step, not a separate stage.

**In practice the loop is short by construction.** The expected path is **0 re-surfaces** (the cold aim was already right → the warm MQ2 immediately returns verdict = no) or **1** (the anchor moved once, one re-surface, then settles). The cap is rarely reached. And each re-surface is **incremental** — `/surfacing` fetches only the newly-relevant material and skips what the prior round already surfaced (the workspace **accumulates**; earlier material is not lost, the new territory is added). So a round is cheap and the loop terminates fast, with the cap as the outer bound.

## 9. Always-invoke surfacing, and cost

`/surfacing` runs **unconditionally** for the first round between the two passes. When the cold pass judges the task self-contained (MQ2 verdict = no), `/surfacing` is invoked with vacuous purpose and returns empty quickly — the warm pass sees the empty result, its MQ2 re-confirms verdict = no, and the loop terminates at zero re-surfaces (the fixpoint's fast path, §8). Unconditional first invocation avoids extra decision-machinery at the runner and yields explicit empty-confirmation rather than a silent skip; the *subsequent* rounds are conditional (they fire only when the warm MQ2 moves the anchor).

**Cost.** The second pass re-runs two operations (MQ2 + Rephrase), not the full five, and the loop adds at most a small bounded number of extra warm MQ2 + incremental-surface rounds (the round cap, §8). In the common case (0–1 re-surfaces) it adds a fraction of a full articulation — modestly more than a single pass, well short of two full passes. The pre-context pass's Itemize, Deconstruct, MultiDepth, and the other meta-questions are not re-executed.

## 10. How it runs

`articulate_warm` is a **re-invocation of the `articulate_cold` machinery under a context-informed mode** — plus **one context-enabled application of the inherited identify move (conflict-detection, §4)** — not a separate cognitive discipline. It introduces no new operation *type*; conflict-detection reuses the identify DNA on a new object (request-vs-reality) the cold pass could not reach. Its inputs are the task statement, the pre-context pass's per-item bundle, and the surfaced material. Per item it:

1. **re-fires MQ2** against the surfaced material, emitting a committed context-anchor in place of the cold pass's identified-context-need openness;
2. **checks the anchor against the prior round** (the material-change judgment, §8): if the committed context-need names a materially different territory and the round cap is not yet reached, the runner re-invokes `/surfacing` on the corrected territory and step 1 repeats on the enlarged material; if the context-need is unchanged or verdict = no, the anchor has settled and it proceeds;
3. **re-runs the context-sensitive operations on the "did it actually move?" trigger** (§4): MQ4 usually, MQ1 / MQ3 / MultiDepth-WHY when context moved them, MQA iff ≥2 re-ran;
4. **runs conflict-detection** (§4): identifies any incompatibility between the re-anchored premise and the surfaced reality, emitting a `content-conflict` flag (with severity and, if severe, a formulated clarifying question) for the runner — or an explicit no-conflict;
5. **re-fires Rephrase** once the anchor is settled, emitting a refreshed considered-articulations set bounded by the pre-context constraints (Deconstruct deliverable-shape + the identified-ambiguities-list + MQ4 boundary) and informed by the surfaced material;
6. carries Itemize, Deconstruct, and MultiDepth's literal restatement through unchanged.

It assembles the updated per-item bundle and emits a **self-assessment verdict on its own run** — one of `HIGH-PROCEED` / `MED-FLAG` / `LOW-RE-RUN` / `LOW-PROCEED` / `HIGH-FLAG` — using the same rubric as `articulate_cold` (verdict and confidence determined independently; primary discriminator = operational-mode proximity, secondary = perceived per-operation friction). There is no in-invocation iteration *within* a single warm pass; the iteration is the cross-pass re-anchor→re-surface loop, and the runner enforces its termination rule (§8).

## 11. What it does NOT do

- **It does not verify correctness or quality.** Its self-assessment is about its own run, not about whether the task or the surfaced material is *good*. It **does** identify **request-vs-reality conflicts** (§4) — an *identify* move, not a verification: it names a premise/reality mismatch and flags it for the runner; it does not adjudicate which side is right.
- **It does not fetch.** It receives the runner's surfaced result; it never reads project state itself — re-surfacing is the runner's act, triggered by the warm MQ2's committed context-need.
- **It does not re-do the structural operations.** Itemize and Deconstruct carry through; the second pass is not an excuse to re-open the count or the deliverable-shape.
- **It does not adjudicate the reading.** It commits the task's *anchor* (which project context it bears on); it does not pick one interpretation and discard the others — the considered-articulations span is preserved.
- **It does not loop unboundedly.** The re-anchor→re-surface loop is bounded by the fixpoint, the round cap, and the oscillation guard (§8); the runner enforces the stop rule.
- **It is not `/surfacing`.** It consumes surfaced material; it does not decide the territory or perform the fetch (the runner does that, reading the warm MQ2 to drive each re-surface round of the loop).

## 12. Relationship to `articulate_cold`

All of the operation definitions this doc names — Itemize, the four meta-questions and MQA, Deconstruct, MultiDepth, Rephrase, the 2-shape answer principle (identified-ambiguities-list / explicit-empty), the four Rephrase composition bounds, the LAYER 1 / LAYER 2 failure framework, and the five compound verdicts — are **canonically defined in `cognitive_harness/articulate_simple/references/articulate_simple.md`** (the built spec for the pre-context pass; its directory keeps the `articulate_simple` name pending the built-spec rename noted at the top) and are inherited here unchanged.

This doc specifies only what the **second pass adds and changes**: it runs warm; it receives (never fetches) surfaced material; commitment becomes appropriate; **MQ2 and Rephrase re-run always, MQ4 usually, and MQ1 / MQ3 / MultiDepth-WHY on the did-it-move trigger, while Itemize, Deconstruct, and MultiDepth-literal carry through; it gains one warm-only operation — conflict-detection (§4), a context-enabled application of the inherited identify move**; the anchor is re-derived rather than merely re-phrased; and — the point this design turns on — the warm pass **controls a re-anchor→re-surface loop** rather than making a single shot, with the re-surface as its core recovery mechanism and the refined phrasing as the terminal by-product. `articulate_cold` is the pre-context phase; `articulate_warm` is the post-context phase of the same articulation.

## 13. Status

This is the target design for the post-context pass; it is **provisional until exercised**. The design graduates from provisional to stable when, across a run of real invocations, five things hold:

1. **Re-anchoring works** — when the cold pass mis-frames, the warm MQ2 measurably moves the anchor to the project's model rather than leaving it where the cold pass put it.
2. **The re-surface loop pays off** — when re-anchoring names a materially different territory, the triggered re-surface measurably improves the framing over what the cold-fetched material alone would support (the anchor's payoff, not just its trigger).
3. **Termination holds** — the loop settles within the round cap in practice (0–1 re-surfaces typical); the cap is rarely reached, and the oscillation guard catches the non-converging cases rather than letting them spin.
4. **Refinement without over-determination** — the warm Rephrase produces more concrete articulations while still spanning the legitimate readings (not collapsing onto surfaced specifics).
5. **Cost stays bounded** — re-running MQ2 + Rephrase, plus the bounded re-surface rounds, remains well short of repeated full articulations, and **the inherited operations surface no new failure modes** beyond those `articulate_cold` already names.

   *The two warm-**own** operations do have their own failure modes.* This criterion was first written as a flat "no new failure modes" when the warm pass was expected to add no operations of its own. It no longer does: conflict-detection (§4) is a warm-only operation, and the trigger-gated re-run (§4) is a warm-only control. Both have failure modes with no cold predecessor — conflict-detection's **false-positive-conflict / crying-wolf over-flag / adjudicate-instead-of-identify**, and the trigger-gate's **ignore-the-trigger** — named and bounded in the warm reference's Quality section (`cognitive_harness/articulate_warm/references/articulate_warm.md` §4.2). This is the same refinement the identity claim underwent from "no new operations" to "no new operation-*type*": the blanket is narrowed to the *inherited* operations, and the warm-own modes are documented rather than denied. Graduation requires that no *unanticipated* failure modes appear beyond those four — not that warm introduces none.

Until then: adopt and use, gather evidence, revisit if the evidence diverges.
