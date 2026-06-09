---
name: task-define
description: Expands a task statement into a defined task — through perceptive itemization (default emit one item; emit N only when distinct (subject, action, deliverable-shape) tuples are clearly established), per-item meta-questioning (three base questions on scope, context-need, and underlying intent; bounded-extensibility for additional per-item questions), per-item Deconstruct + MultiScope (parallel; independent bundle fields), and per-item Rephrase (constrained by meta-question answers to prevent meaning-lock). Produces a per-item bundle list — one bundle per item from Itemize — that the runner consumes as the framing the loop disciplines operate on. The per-item meta-question answers themselves are the dispatch substrate the runner reads to decide whether the project's Exploration discipline should be invoked. Use as a pre-pipeline operation — before the runner's first loop discipline — to turn a compact task statement into a defined task downstream cognition can act on. Lightweight: single-input contract (task statement only), substrate is LLM internal cognition only, no external-anchor inputs, no halt-gate output.
---

# /task-define — Structural Task-Define

## Step 0 — Mandatory pre-read

**Before reading anything else in this file, read `references/task-define.md` in full.** The protocol below references concepts — the verb-meaning (expand-to-define), the five operations (Itemize, Meta-question, Deconstruct, MultiScope, Rephrase) with their per-operation contracts, the 4-stage intra-discipline ordering, the meta-question canonical set + bounded-extensibility rule, the dispatch substrate (MQ-answers-as-signal; runner extracts), the three-phase runtime shape (Reception → per-item Traversal → Assembly), the per-item bundle contract, the LAYER 1 / LAYER 2 failure-mode framework + asymmetric-failure principle, the calibration trajectory, and the PROCEED / FLAG / RE-RUN self-assessment verdict shape — that are defined ONLY in that file. Skipping this read produces shallow output that misses the discipline's actual mechanism.

Do not proceed to Step 1 until the read completes.

---

Expand the given task statement into a defined task using the Structural Task-Define Framework loaded in Step 0. Task-Define operates on a single input (the raw task statement, verbatim) using only the LLM's internal cognition as substrate; it produces a per-item bundle list (one bundle per item from Itemize, containing the output of every per-item operation) plus a self-assessment verdict. The per-item meta-question answers carry the dispatch substrate — the information a runner reads to decide whether to invoke the project's Exploration discipline.

## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

1. Read the input and consume it. The input is the **task statement** — the raw task as given, verbatim. It may arrive as raw text or a file path; in either case, the task-statement text is the single input the discipline operates on. Do NOT consume additional inputs (no `project_goal`, no `recent_context`, no `external_anchors`) — Task-Define's single-input contract is load-bearing for the lightweight stance.

2. If a re-invocation parameter `prior-bundles` is supplied (when the runner is re-invoking Task-Define for late-split recovery on the same task statement), load the prior bundles; Phase 2's per-item loop body will skip items whose bundle is already in `prior-bundles`.

3. Execute the full Structural Task-Define process described in `references/task-define.md` (the "Execute the Task-Define Process" section), running the three runtime phases — Reception → per-item Traversal (executing the 4-stage intra-discipline flow per item: Stage 1 Itemize statement-level → Stage 2 Meta-question per item → Stage 3 parallel Deconstruct + MultiScope per item → Stage 4 Rephrase per item, constrained by Stage 2's MQ answers) → Assembly — producing the per-item bundle list and the self-assessment verdict.

4. Save the output as a markdown file (unless differently stated in additional instructions!):
   - **If the input was a file path** — save in the same folder as the input file or relevant files.
   - **Otherwise** — save under `devdocs/task-define/<suitable-name>.md` (create the directory if needed).

5. Record the user's input at the top of the output file: `## User Input` followed by the $ARGUMENTS that were passed to this command. This allows the Reflect step (R) to see what the human asked for alongside what the discipline produced.

6. Emit the self-assessment verdict — PROCEED / FLAG / RE-RUN with confidence (HIGH / MED / LOW) and a list of conditions (which FLAG conditions fired, if any; or which RE-RUN condition fired). Include the telemetry metrics from the reference spec's §5.3 with the verdict.

---

**Reference loading during execution.** When recognizing failure modes — the 6 LAYER 1 operational modes (Premature-Itemize-split / Late-multi-item-detected-by-downstream / MQ-extension-violates-bounded-rule / Rephrase-drifted-without-MQ-constraint / Per-operation-firing-missed-an-operation / MQ2-answer-missing-dispatch-info) and the 4 LAYER 2 identity-eroding modes (Verification-drift / Substrate-reach / Cross-item-interpretation-drift / Fidelity-verdict-drift) — consult the §4 Quality section of `references/task-define.md` for full descriptions and correctives. The framework's vocabulary (task statement / substrate / item / per-item bundle / meta-question / dispatch substrate / self-assessment verdict / prior-bundles), the five operations' per-operation contracts, the 4-stage intra-discipline ordering, and the bounded-extensibility rule for per-item meta-question additions are canonically defined in that file.
