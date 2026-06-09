---
name: articulate_simple
description: Takes a task statement and produces an explicit framing of what it asks — work items (via Itemize), per-item ambiguities at four typed axes (verdict / context-need / intent / boundary, via meta-questions + MQA), deliverable shape and exclusions (via Deconstruct), WHY-axis motivation-ambiguities (via MultiDepth), and a bounded set of considered articulations (via Rephrase) — WITHOUT committing to any single interpretation. Articulation identifies the readings; it never adjudicates which one is correct. Use when a task statement is open or ambiguous and needs its framing made explicit, when multiple plausible readings of a request coexist and openness should be preserved rather than collapsed, when the AI is about to act on a request but the user has not been asked to clarify, or before any downstream cognition that needs the request's structure surfaced as an artifact.
---

# /articulate_simple — Structural Articulation (Simple)

## Step 0 — Mandatory pre-read

**Before reading anything else in this file, read `references/articulate_simple.md` in full.** The protocol below references concepts — the two structural operations (Itemize + Articulate-per-item), the five per-item operations (Meta-question MQ1–MQ4, MQA, Deconstruct, MultiDepth, Rephrase), the Answer Shape Principle (2-shape: identified-ambiguities-list / explicit-empty), the AMBIGUITY-NATURE distinction (WHAT-axis vs WHY-axis), the multi-source composition bounds, the lightweight-stance criteria, the NOT-list, the seven LLM-judgment edges, the nine LAYER 1 operational failure modes plus the LAYER 2 behavioral modes, the five compound verdicts (HIGH-PROCEED / MED-FLAG / LOW-RE-RUN / LOW-PROCEED / HIGH-FLAG), and the asymmetric-failure principle — that are defined ONLY in that file. Skipping this read produces shallow output that misses the discipline's actual mechanism (notably the difference between IDENTIFYING readings and INTERPRETING them).

Do not proceed to Step 1 until the read completes.

---

Analyze the given task statement using the Structural Articulation (Simple) Framework loaded in Step 0. Articulation perceives the statement's work items and identifies the ambiguities at each item across multiple typed axes, surfaces the deliverable shape and the exclusion boundary, and produces a bounded variant-set that preserves openness — without adjudicating which option is correct.

## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

1. Read the input and consume it. It can be raw text (the task statement), a file path containing a task statement, or a folder path. Consume all input. If session context is loaded, treat it as substrate per the cold-vs-warm-context judgment edge.

2. Execute the full Structural Articulation (Simple) process described in `references/articulate_simple.md` — the four-stage sequence (Itemize → MQ + MQA → Deconstruct + MultiDepth → Rephrase) — producing, per item: four MQ entries (verdict / context-need / intent / boundary) each with a 2-shape answer, the MQA reconciliation-content, the Deconstruct tuple, the MultiDepth two outputs (literal-statement + identified-purpose-motivation-ambiguities), and the considered-articulations set. At end-of-invocation, assemble the statement-level bundle, run the LAYER 1 self-check in a single LIGHT pass, and assign one of the five compound verdicts.

3. Save the output as a markdown file (unless differently stated in additional instructions!):
   - **If the input was a file path** — save `articulate_simple.md` in the same folder as the input file.
   - **Otherwise** — save under `devdocs/articulate_simple/<suitable-name>.md` (create the directory if needed). The canonical filename is `articulate_simple.md`; use `<suitable-name>.md` only when an existing file would otherwise be overwritten.

4. Print the output in the conversation as well.

5. Record the user's input at the top of the output file: `## User Input` followed by the $ARGUMENTS that were passed to this command. This preserves the raw statement so the artifact can be re-read against its source.

6. Emit the self-assessment verdict at the end of the output file: one of HIGH-PROCEED / MED-FLAG / LOW-RE-RUN / LOW-PROCEED / HIGH-FLAG. The verdict is a single compound — its prefix (HIGH / MED / LOW) is the confidence axis; its suffix (PROCEED / FLAG / RE-RUN) is the action axis. Do not emit confidence and action as separate fields.

---

**Reference loading during execution.** When recognizing failure modes (the nine LAYER 1 modes — Premature Itemize split, Late-detected multi-item case, MQ extension violates bounded-extensibility, Per-operation firing missed, MQ2 answer missing preparation content, MQ2 missing kinds-axis or stance-axis, 2-shape violation, AMBIGUITY-NATURE conflation, considered-articulations drift outside composition bounds — plus the LAYER 2 behavioral modes), consult the "Failure Modes" section of `references/articulate_simple.md` for full descriptions and corrective actions. The framework's vocabulary (the five operations, the four MQ axes, the 2-shape principle, the WHAT-axis / WHY-axis distinction, the four composition bounds, the seven LLM-judgment edges, the lightweight-stance criteria, the verdict pairings) is canonically defined in that file.
