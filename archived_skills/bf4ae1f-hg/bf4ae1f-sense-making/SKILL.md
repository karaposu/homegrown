---
name: bf4ae1f-sense-making
description: Transforms vague, ambiguous, or complex input into stable understanding through cognitive anchor extraction, perspective checking, ambiguity collapse, and degrees-of-freedom reduction. Use when the user asks to "make sense of" something, when a problem is unclear or has competing interpretations, when input is ambiguous and needs structure, or before /innovate or /td-critique on a poorly-defined question.
---

# /sense-making — Structural Sensemaking Analysis

## Step 0 — Mandatory pre-read

**Before reading anything else in this file, read `references/sensemaking.md` in full.** The protocol below references concepts — cognitive anchors, boundary construction, perspective checking, ambiguity collapse, saturation indicators, and the six failure modes — that are defined ONLY in that file. Skipping this read produces shallow output that misses the discipline's actual mechanism.

Do not proceed to Step 1 until the read completes.

---

Analyze the given input using the Structural Sensemaking Framework loaded in Step 0. This transforms vague, ambiguous, or complex input into stable, clear understanding through systematic anchor extraction, perspective checking, ambiguity collapse, and constraint reduction.

## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

1. Read the input and consume it. It can be raw text, a folder path with md files, code files, or image path. Consume all input.

2. Use codebase context where relevant to ground the analysis in concrete reality.

3. Execute the full Structural Sensemaking process described in `references/sensemaking.md` (the "Execute the Following Process" section), producing all Sense Versions (SV1 through SV6).

4. Save the output as a markdown file (unless differently stated in additional instructions!):
   - **If the input was a file path** — save in the same folder as the input file.
   - **Otherwise** — save under `devdocs/sensemaking/<suitable-name>.md` (create the directory if needed).

5. Print the output in the conversation as well.

6. Record the user's input at the top of the output file: `## User Input` followed by the $ARGUMENTS that were passed to this command. This allows the Reflect step (R) to see what the human asked for alongside what the discipline produced.

---

**Reference loading during execution.** When recognizing failure modes (status quo bias, premature stabilization, anchor dominance, perspective blindness, clean resolution trap, self-reference blindness), consult the "Failure Modes" section of `references/sensemaking.md` for full descriptions and corrective actions. The framework's vocabulary (anchor types, perspective categories, anchor-extraction templates) is canonically defined in that file.
