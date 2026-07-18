> **Loading note.** This file is loaded by `articulate_warm/SKILL.md` at Step 0 and is intended to be read in full before the warm pass executes. It is the **canonical operational spec** for the warm pass — its identity, the operations it re-runs vs carries, the one operation it newly runs (conflict-detection), the loop it controls, its failure modes, its output, and the runnable process. It is **operationally self-contained**: a model can run the warm pass from this file alone. It is **not** a copy of the operation definitions — those are inherited by pointer from the cold pass's reference (see the Inheritance boundary below). Do not summarize or partial-load.
>
> **Status.** This is warm's canonical operational spec. The warm *design* is **provisional until exercised** (`docs/how_articulate_warm_should_be.md` §13): adopt and use, gather evidence, revisit if it diverges. This file is the operational home while the design settles.

---

# Warm (Post-Context) Articulation — A Thinking Discipline

Warm articulation is the **post-context second pass** of articulation. It runs after the cold pass (`articulate_simple`) has produced a first, context-free framing, and after `/surfacing` has drawn the relevant project material into view. Its job is to **re-derive the task's anchor now that project material is present** — driving a short framing↔surfacing loop to a settled anchor, checking the task's premise against project reality, and emitting the refreshed framing the downstream disciplines operate on.

> **Warm articulation is a re-invocation of the cold pass's machinery in a warm mode — introducing no new operation *type*, plus one context-enabled *application* of the inherited identify move (conflict-detection). It re-runs the context-sensitive operations against the surfaced material, carries the context-invariant ones through, controls the re-anchor→re-surface loop, and runs the pipeline's first request-vs-reality conflict-gate — without adjudicating which reading is correct.**

**★ Inheritance boundary.** Warm's reference is defined by what it delegates. To keep that honest and visible:

- **OWNS (canonical *here*):** conflict-detection · the three operation-classes + the trigger-gated re-run principle · the re-anchor→re-surface loop *rule* · the warm output bundle · the warm-specific failure modes · the warm NOT-list additions.
- **INHERITS (→ `cognitive_harness/articulate_simple/references/articulate_simple.md`, unchanged):** the five operation *definitions* · the 2-shape Answer Principle · the WHAT-axis/WHY-axis distinction · the verdict system · the `content-conflict` flag-type · the LAYER 1/LAYER 2 failure-mode framework.
- **POINTS (→ `docs/how_articulate_warm_should_be.md`) for the WHY:** the ordering problem (§2), the re-anchor/re-surface decoupling (§4), why the round cap is 2 (§8), the cost argument (§9).

Everything below inlines the *operational shape* of the owned pieces; where a canonical *definition* is needed it points, rather than restating it (a restated definition would drift silently — there is no sync mechanism between two copies).

---

## 1. Identity

### What warm is

Where the cold pass could only *identify* what was open — it had no project context to commit against — the warm pass **commits the anchor**: it names the actual project facets the task bears on, now that they are in view. It is two-faced by construction:

- a **re-anchor→re-surface loop-controller** — re-derive the anchor (MQ2), and when the anchor lands on a materially different part of the project than was fetched, signal the runner to re-surface and re-anchor again, until it settles; and
- the pipeline's **first request-vs-reality conflict-gate** — identify (fail-fast) whether the task's premise survives contact with the surfaced project reality.

It introduces **no new operation type**: conflict-detection reuses the inherited identify DNA (the same DNA the four cold meta-questions are four applications of) on a new object — request-vs-reality — that only context makes reachable.

### The context symmetry

The cold pass has three limits; each is a *no-context* consequence, and the warm pass inverts each once context is present:

| Cold limit | Why (no-context consequence) | Warm inversion |
|---|---|---|
| Identification-only, no commitment | nothing to commit *against* | **commit** the anchor (MQ2) |
| Does not re-run context-things | nothing new to react to | **re-run** the context-sensitive ops (§2) |
| Never asks | nothing to ask *against* | **identify** request-vs-reality conflicts & **flag** (§2.4) |

Warm's operation set = {inherited context-sensitive ops, re-run} ∪ {inherited context-invariant ops, carried} ∪ {one context-enabled new op}.

### The NOT-list (warm additions)

Warm keeps the whole cold NOT-list (**→ cold reference, The NOT-List** — no adjudication, no mid-invocation clarification, no planning, no cross-item interpretation, no commitments at 2-shape positions) and adds two warm-specific rules:

1. **It does not fetch.** Re-surfacing is the runner's act, triggered by the warm MQ2's committed context-need. The discipline receives material; it never reads project state itself.
2. **It emits; it does not ask.** Conflict-detection *emits* a flag (and, if severe, a formulated question); the **runner** surfaces it, poses it, and may block or proceed. The never-ask stance is preserved — the ask was never inside the discipline.

### Vocabulary

**re-anchor** (re-commit MQ2 against surfaced material) · **re-surface** (the runner's re-fetch on a moved anchor) · **context-need** (MQ2's committed anchor) · **material-change judgment** (did the anchor move to a materially different territory, or is it the same target reworded?) · **the trigger** (did the surfaced context *actually* move this op's output?) · **conflict** (a request-premise vs surfaced-reality incompatibility) · **content-conflict** (the flag-type that marks one).

---

## 2. Components

### 2.1 The three operation-classes

Every operation warm touches falls into exactly one class:

- **(a) Inherited — CARRIED** (context-invariant; first-pass output flows through unchanged): **Itemize · Deconstruct's deliverable-shape · MultiDepth's literal restatement.** These are structural facts about the *statement* that project context does not change; the warm pass is not an excuse to re-open the item count or the deliverable-shape.
- **(b) Inherited — RE-RUN** (context-sensitive; re-run against the surfaced material, gated by the trigger): **MQ2 · Rephrase · MQ4 · MQ1 · MQ3 · MultiDepth-WHY · MQA.**
- **(c) Warm-only — NEW** (context-enabled, no cold predecessor): **conflict-detection.**

Class (c) is distinct from (b) by having **no cold version to re-derive** — it *first*-derives, where (b) re-derives.

### 2.2 Operational cheat-sheet

Warm's per-operation behavior at a glance. **This is a reminder, not a definition** — each row names the operation, its warm behavior, and a ≤3-word tag to identify it; the canonical definition is at the pointer, *not here*. Do not expand a tag into a full definition; if you need what an operation *is*, open the cold reference.

| Operation | Warm behavior | Reminder tag (≠ definition) | Definition |
|---|---|---|---|
| Itemize | **carry** | item-count | → cold ref, The Five Operations |
| Deconstruct (shape) | **carry** | deliverable tuple | → cold ref, The Five Operations |
| MultiDepth-literal | **carry** | verbatim restatement | → cold ref, The Five Operations |
| MQ2 (context-need) | **re-run — always** (the re-anchor) | the anchor | → cold ref, The Five Operations |
| Rephrase | **re-run — always** (last) | considered articulations | → cold ref, The Five Operations |
| MQ4 (boundary) | **re-run — usually** | exclusions | → cold ref, The Five Operations |
| MQ1 (verdict) | **re-run — on-trigger** | what's asked | → cold ref, The Five Operations |
| MQ3 (intent, WHAT) | **re-run — on-trigger** | action-endpoint | → cold ref, The Five Operations |
| MultiDepth-WHY | **re-run — on-trigger** | motivation-chain | → cold ref, The Five Operations |
| MQA | **re-run — iff ≥2 re-ran** | reconcile overlaps | → cold ref, The Five Operations |
| **conflict-detection** | **run — warm-only** | premise vs reality | **§2.4 below** (no cold home) |

### 2.3 The trigger-gated re-run principle

The re-run set is tiered — **MQ2 + Rephrase always · MQ4 usually · MQ1/MQ3/MultiDepth-WHY on-trigger · MQA iff ≥2 re-ran** — governed by one judgment:

> **The trigger:** re-run an inherited operation only if the surfaced context *actually changed its output* — **not** merely because the operation is *theoretically* context-sensitive.

This trigger is the **cost-guard**: it is what keeps the warm pass a fraction of a pass, not two (rationale → design doc §9). MQ4 re-runs *usually* because surfaced context routinely reveals exclusions the cold pass could not have known; MQ1/MQ3/WHY re-run only when context genuinely moved them; MQA reconciles whatever ≥2 moved.

### 2.4 Conflict-detection — the one warm-only operation (full spec)

The operation with no cold home; its canonical spec lives here.

- **Input.** The re-anchored premise (the warm MQ2 commitment) + the surfaced project material.
- **Procedure.** Identify incompatibilities between what the request *assumes* and what the project *reality* shows (the task assumes a component / constraint / prior decision the surfaced material contradicts). It is an **identify** move — the context-enabled sibling of the cold ambiguity-identification — with the **same 2-shape answer** (identified-conflicts-list / explicit-empty; **→ cold ref, The Answer Shape Principle**) and the **same don't-adjudicate rule**: it names the mismatch; it does not decide which side is right.
- **It grades; it does not adjudicate.** It assigns the conflict a *severity* (the same self-grading the verdict system already does) but never rules on the request-vs-reality question itself.
- **The escalation ladder.**
  - *no conflict* → normal warm output (**HIGH-PROCEED**).
  - *resolvable by re-anchoring* → re-anchor onto the reality and note it (**MED-FLAG**, `content-conflict`).
  - *severe* — premise contradicted, unresolvable by re-anchoring, and proceeding would waste the pipeline → **HIGH-FLAG** with the `content-conflict` flag-type and a **formulated clarifying question** as payload.
- **The emit/ask division.** The discipline **emits** the conflict, the flag, and the formulated question. The **runner** surfaces the flag, poses the question, and — when an operator is present — may block a severe conflict before spending the downstream pipeline.
- **Autonomy degrade.** Block-and-ask is an **operator-present** runner policy, not a discipline halt-gate. Under autonomy (no operator to answer) the runner degrades to **flag-and-best-effort**: record the conflict, proceed with the best re-anchored framing.
- **The flag-type.** `content-conflict` is **defined in the shared verdict system but emitted only by the warm pass** (the cold pass has no surfaced reality to conflict against). It marks this as a *content* condition, distinct from the *operational* FLAGs of the self-check. **→ cold ref, Verdict Assignment** (the `content-conflict` flag-type paragraph).

Conflict-detection is a **cheap, rare safety-net**: premise-conflicts are uncommon, but a missed one wastes the whole pipeline on a confidently mis-framed task. It rides the inherited identify move and the existing FLAG action; it does **not** re-order the warm pass's priorities — the re-anchor→re-surface loop remains the load-bearing job, and conflict-detection is a guard that runs alongside it.

---

## 3. Process Model

The flow *within* a single warm pass is acyclic — one pass per item, no in-invocation looping. Iteration lives in the **cross-pass** re-anchor→re-surface loop (§3.2), which the runner enforces.

### 3.1 The per-item warm sequence

Per item: **re-fire MQ2 (re-anchor) → check the anchor against the prior round → re-run the on-trigger ops → run conflict-detection → re-fire Rephrase (once settled) → carry the invariants.** (The runnable form is §6.)

### 3.2 The re-anchor→re-surface loop + termination rule

The warm pass re-anchors (MQ2); if the anchor names a **materially different** territory than what was fetched (and the round cap is not reached), the runner re-invokes `/surfacing` on the corrected territory and the warm pass runs again on the enlarged material — until the anchor settles. The stop rule has three parts plus one supporting judgment:

- **Fixpoint (the fast path):** stop when MQ2's context-need comes back **unchanged from the prior round**, or **verdict = no**.
- **Round cap (the guarantee):** a hard cap of **2 re-surfaces (≤3 warm runs), tunable.** The fixpoint makes it stop *fast*; the cap makes it stop *for certain*.
- **Oscillation guard:** if the context-need alternates (A → B → A), stop and **flag** the unstable framing for downstream rather than spin.
- **Material-change judgment (what the fixpoint rests on):** did the context-need move to a materially different territory, or is it the same target merely reworded? Reworded = unchanged = **terminate**; genuinely different = **re-surface** (subject to the cap). Usually a single check inside the warm MQ2 step, not a separate stage.

**In practice the loop is short by construction** — expected path is **0** re-surfaces (the cold aim was already right) or **1** (the anchor moved once, then settles); each re-surface is **incremental** (the workspace accumulates; only newly-relevant material is fetched). *Why the cap is 2, and why re-surface is core-not-optional → design doc §7, §8.*

### 3.3 Substrate — receives, never fetches

The warm pass **never reads project state directly.** The runner *hands it* the surfaced material as an input (accumulated across any re-surface rounds). FETCH stays forbidden; RECEIVE is what the warm pass adds. Its substrate is: the task statement + the cold pass's bundle + the received surfaced material. Within that, two kinds of material do different work — the cold **MQ answers are constraints** (they rule out wrong readings; Deconstruct's deliverable-shape holds task-identity) and the **surfaced material is information** (it supplies the concrete facets MQ2 re-anchors onto and Rephrase draws from). Keeping both is what prevents the warm pass from being **over-determined** onto surfaced specifics.

---

## 4. Quality — failure modes

### 4.1 Inherited failure modes (pointed)

For every *inherited* operation, the failure modes are cold's, unchanged — the LAYER 1 operational modes (nine, self-check-detectable) and the LAYER 2 behavioral modes (audit-over-time). **→ cold ref, Failure Modes.** Warm does not restate them.

### 4.2 Warm-specific failure modes

The warm pass adds two operations of its own (conflict-detection, and the trigger-gated re-run), so it documents their failure modes here.

**Conflict-detection (three):**

| Mode | What it is |
|---|---|
| **False-positive conflict** | flagging a non-conflict — mistaking a *gap* the re-anchor should simply fill for a *contradiction*. |
| **Crying-wolf over-flag** | severity inflation — routine gaps escalated to HIGH-FLAG, until the runner stops trusting the flags. |
| **Adjudicate-instead-of-identify** | deciding which side is *right* (request vs reality) rather than naming the mismatch — a NOT-list violation (**→ cold ref, The NOT-List #1**). |

**The trigger-gated re-run (one):**

| Mode | What it is |
|---|---|
| **Ignore-the-trigger** | re-running operations that context did not actually move (or re-running everything) — breaks the cost bound the trigger exists to hold (design doc §9). Belongs to the re-run principle (§2.3), not to conflict-detection. |

These four are **structural documentation of already-settled operations**, not new machinery — they refine the design doc's §13 "no new failure modes" (a blanket written before conflict-detection existed) exactly as "no new operations" was refined to "no new operation-*type*". Do not invent warm-wide modes to fill this section; these four are tied to warm's two actual own-operations.

---

## 5. Output Contract

### 5.1 The warm bundle

Warm emits an **updated per-item bundle**, serialized to `articulate_warm.md` beside the cold pass's `articulate_simple.md` (the two passes sit side by side, both auditable). The bundle carries:

- the **re-anchored MQ2** (committed context-need) — replacing the cold pass's identified-context-need openness;
- the **on-trigger re-runs** (MQ4 usually; MQ1 / MQ3 / MultiDepth-WHY when moved; MQA iff ≥2);
- the refreshed **Rephrase** (considered articulations in concrete project vocabulary);
- the **carried** operations (Itemize, Deconstruct, MultiDepth-literal) — unchanged;
- when conflict-detection fires, the **`content-conflict` flag** with its **severity** and any **formulated clarifying-question payload**;
- a **self-assessment verdict** on this run.

### 5.2 Verdict + flag-type (pointed)

The self-assessment verdict is one of the five compound pairings, assigned by the **same rubric as the cold pass** (primary = LAYER 1 operational-mode proximity; secondary = perceived per-operation friction). The verdict set and the `content-conflict` flag-type are **→ cold ref, Verdict Assignment** — inherited unchanged; warm attaches `content-conflict` to a FLAG when conflict-detection fires. There is no in-invocation iteration within a single warm pass; the iteration is the cross-pass loop (§3.2).

---

## 6. Execute the Warm Process

Inputs (from the runner): the **task statement** + the cold pass's **per-item bundle** (`articulate_simple.md`) + the **surfaced material** (`surfacing.md`, accumulated across any re-surface rounds). This pass runs WARM by construction — the cold-vs-warm-context judgment is already decided. *How to run each individual operation is inherited* — **→ cold ref, Execute the Following Process**; the steps below are the warm sequence and loop, which are warm's own.

1. **Consume the input.** Treat the surfaced material as **information** (the concrete facets and project vocabulary) and the cold MQ answers as **constraints** (they rule out wrong readings; Deconstruct's deliverable-shape holds task-identity). Keep both — losing the constraints over-determines the warm pass onto surfaced specifics.

2. **Re-fire MQ2 (re-anchor) — the load-bearing move.** Against the surfaced material, emit a **committed** context-anchor in place of the cold pass's identified openness: name the actual project facets the task bears on. This is where the framing is re-anchored, and the committed context-need is the signal that decides whether a re-surface is needed.

3. **Check the anchor against the prior round; do NOT fetch.** Apply the material-change judgment (§3.2): if the committed context-need names a **materially different** territory than what was surfaced and the round cap is not reached, that is a signal *to the runner* to re-invoke `/surfacing` on the corrected territory and re-invoke this pass on the enlarged material. If the context-need is unchanged or verdict = no, the anchor has settled — proceed. You never read project state yourself; the loop's termination is enforced by the runner (§3.2).

4. **Re-run the other context-sensitive operations — on the "did it actually move?" trigger** (§2.3): **MQ4 usually**, **MQ1 / MQ3 / MultiDepth-WHY when context moved them**, **MQA iff ≥2 re-ran.** Re-run an operation only if the surfaced context actually changed its output.

5. **Run conflict-detection — the one warm-only operation** (§2.4). Identify any incompatibility between the re-anchored premise and the surfaced reality (an identify move — same 2-shape, don't-adjudicate). Emit a `content-conflict` flag with a **severity** and, if severe, a **formulated clarifying question** as payload — or an explicit no-conflict. You emit; the runner surfaces, poses, and may block (operator present) or proceed best-effort (autonomy). You never pause or ask yourself.

6. **Re-fire Rephrase once the anchor settles.** Refine the considered articulations using the concrete project vocabulary the surfaced material supplies, bounded by the cold pass's Deconstruct deliverable-shape + identified-ambiguities-list + MQ4 boundary. It is emitted **last** — the loop's by-product, not its purpose.

7. **Carry through unchanged:** Itemize, Deconstruct, and MultiDepth's **literal** restatement. (MultiDepth's WHY-axis is context-sensitive and re-runs on-trigger, per step 4.) The warm pass is not an excuse to re-open the item count or the deliverable-shape.

8. **Do NOT adjudicate the reading.** Commit the *anchor* (which project context the task bears on); keep the span of considered articulations open for the downstream disciplines to resolve. Conflict-detection likewise *identifies and grades* a conflict but never rules on which side is right.

9. **Assemble + self-verdict.** Emit the updated per-item bundle — including any `content-conflict` flag + payload from step 5 — and a self-assessment verdict on this run (`HIGH-PROCEED` / `MED-FLAG` / `LOW-RE-RUN` / `LOW-PROCEED` / `HIGH-FLAG`), using the cold rubric. Save to `articulate_warm.md`; record the input under `## User Input`.

---

## Summary

| Component | What it is | How many |
|---|---|---|
| **Identity** | re-anchor→re-surface loop-controller + request-vs-reality conflict-gate | 2 faces |
| **Operation-classes** | inherited-carried · inherited-re-run · warm-only-new | 3 |
| **Re-run tier** | MQ2 + Rephrase always · MQ4 usually · MQ1/MQ3/WHY on-trigger · MQA iff ≥2 | — |
| **Warm-only operation** | conflict-detection (identify move; no cold home) | 1 |
| **Loop termination** | fixpoint · round cap (2) · oscillation guard · material-change judgment | 3+1 |
| **Warm failure modes** | conflict-detection (3) + trigger-gate (1); cold's inherited-by-pointer | 4 own |
| **Output artifact** | `articulate_warm.md` (warm bundle + verdict + any content-conflict flag) | 1 per invocation |

Inherited unchanged (→ cold reference): the five operation definitions · 2-shape · WHAT/WHY distinction · verdict system · `content-conflict` flag-type · LAYER 1/2 failure framework. The WHY behind the warm design → `docs/how_articulate_warm_should_be.md`. This file is the operational spec; a model runs the warm pass from it.
