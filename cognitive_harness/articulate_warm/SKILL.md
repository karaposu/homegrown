---
name: articulate_warm
description: The warm (post-context) second pass of articulation. Runs after articulate_simple (the cold pass) and after /surfacing has drawn project material into view. Re-derives the task's anchor against the surfaced material — re-runs MQ2 (the re-anchor) and Rephrase always, MQ4 usually, and MQ1/MQ3/MultiDepth-WHY on a did-it-actually-move trigger; carries Itemize, Deconstruct-shape, and MultiDepth-literal through — controls the re-anchor→re-surface loop, and runs conflict-detection, the pipeline's first request-vs-reality check, emitting a content-conflict flag for the runner. Introduces no new operation type (conflict-detection reuses the inherited identify move); commits the anchor but never adjudicates the reading, never fetches, never asks. Use as the second articulation pass once project context is present, not standalone.
---

# /articulate_warm — Warm (Post-Context) Articulation

> **It is a re-invocation of `articulate_simple`'s machinery in a warm mode — introducing no new operation *type*, plus one context-enabled *application* of the inherited identify move (conflict-detection).** Every operation *type* it uses is defined in `articulate_simple` and inherited unchanged; conflict-detection reuses that same identify DNA on a new object (request-vs-reality) the cold pass cannot reach.

## Step 0 — Mandatory pre-read

**Before doing anything else, read both files in full:**

1. **`cognitive_harness/articulate_warm/references/articulate_warm.md`** — warm's canonical operational spec: its identity, the three operation-classes + the trigger-gated re-run set, conflict-detection (the one warm-only operation), the re-anchor→re-surface loop and its termination, the warm failure modes, the output contract, and — load-bearing — the **runnable warm process (§6)**. This is *how the warm pass runs*.
2. **`cognitive_harness/articulate_simple/references/articulate_simple.md`** — the canonical operation definitions, inherited here unchanged. This is *what the operations are*. The warm reference points to it for every shared definition (the five operations, the 2-shape principle, the verdict system, the `content-conflict` flag-type, the LAYER 1/2 failure framework); you need it in view to actually run the operations.

The warm reference points to `docs/how_articulate_warm_should_be.md` for the **design rationale (the WHY** — the ordering problem, the re-anchor/re-surface decoupling, why the round cap is 2). Read it only if you need the reasoning; it is not required to run the pass.

Do not proceed to the instructions until both reads complete.

---

Analyze the task **warm** — with the surfaced project material in view — using the warm process loaded in Step 0. Where the cold pass could only *identify* what was open (it had no project context to commit against), the warm pass **commits the anchor**, re-runs the context-sensitive operations against the surfaced material, checks the premise against project reality, and drives the re-anchor→re-surface loop until the anchor settles.

## Additional Input/Instructions

The runner passes: the **task statement** + the cold pass's per-item bundle (`articulate_simple.md`) + the **surfaced material** (`surfacing.md`, accumulated across any re-surface rounds). This pass runs WARM by construction — the cold-vs-warm-context judgment is already decided.

$ARGUMENTS

---

## Instructions

1. **Consume the input.** Treat the surfaced material as **information** (the concrete facets and project vocabulary) and the cold pass's MQ answers as **constraints** (they rule out wrong readings; Deconstruct's deliverable-shape holds task-identity). Keep both.

2. **Execute the full warm process described in `references/articulate_warm.md` §6** — per item: re-fire MQ2 (the re-anchor); check the anchor against the prior round (re-surfacing is the runner's act, never yours); re-run the context-sensitive operations on the "did it actually move?" trigger (MQ4 usually; MQ1 / MQ3 / MultiDepth-WHY when context moved them; MQA iff ≥2 re-ran); run conflict-detection (emit a `content-conflict` flag with severity and, if severe, a formulated clarifying question — or an explicit no-conflict); re-fire Rephrase once the anchor settles; carry Itemize, Deconstruct, and MultiDepth-literal through unchanged. Commit the anchor; never adjudicate the reading; never fetch; never ask.

3. **Save the output** to `articulate_warm.md`, in the same folder as the cold pass's `articulate_simple.md` (the two passes sit side by side, both auditable).

4. **Print the output** in the conversation as well.

5. **Record the input** at the top of the output file: `## User Input` followed by the `$ARGUMENTS` that were passed.

6. **Emit the self-assessment verdict** at the end — one of HIGH-PROCEED / MED-FLAG / LOW-RE-RUN / LOW-PROCEED / HIGH-FLAG (the same rubric as `articulate_simple`; single compound, prefix = confidence axis, suffix = action axis) — plus, when conflict-detection fires, the `content-conflict` flag with its severity and any formulated clarifying-question payload.

---

**Reference loading during execution.** The **warm-specific** failure modes — conflict-detection's three (false-positive-conflict / crying-wolf over-flag / adjudicate-instead-of-identify) and the trigger-gate's one (ignore-the-trigger) — are in `references/articulate_warm.md` §4.2. The **inherited** LAYER 1 / LAYER 2 failure modes, every operation definition, the 2-shape principle, the WHAT-axis / WHY-axis distinction, the LLM-judgment edges, the verdict system, and the `content-conflict` flag-type are canonically defined in `cognitive_harness/articulate_simple/references/articulate_simple.md` and inherited here unchanged. This SKILL.md is a thin invocation wrapper; the operational spec lives in the warm reference, and it introduces **no new operation *types***.
