---
name: bf4ae1f-innovate
description: Produces novel ideas through systematic application of seven generation/framing mechanisms (lens shifting, combination, inversion, constraint manipulation, absence recognition, domain transfer, extrapolation), with coverage strategy and adversarial testing for survival. Use when the user asks for "ideas" or "alternatives," when stuck on a problem and needing fresh angles, when generating candidates for a solution space, or after /sense-making has produced a stable problem and before /td-critique evaluates the candidates.
---

# /innovate — Structural Innovation

## Step 0 — Mandatory pre-read

**Before reading anything else in this file, read `references/innovate.md` in full.** The protocol below references concepts — the two operations (generation + framing), the four generators (combination, absence recognition, domain transfer, extrapolation), the three framers (lens shifting, constraint manipulation, inversion), the seed types, the five tests (novelty, scrutiny survival, fertility, actionability, mechanism independence), the assembly check, and the six failure modes — that are defined ONLY in that file. Skipping this read produces shallow output that misses the discipline's actual mechanism.

Do not proceed to Step 1 until the read completes.

---

Analyze the given input using the Structural Innovation Framework loaded in Step 0. Use the intent given, or as exists in the context.

## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

1. Read the input and consume it. It can be raw text, a folder path with md files, code files, or image path. Consume all input.

2. Execute the full Structural Innovation process described in `references/innovate.md` (the Seed → Generate → Test cycle), producing variations across all seven mechanisms. For each mechanism produce three variations: one **generic**, one **focused**, one **contrarian**. Apply minimum coverage (at least one Generator + one Framer) at minimum; aim for full coverage (all seven). Run the assembly check after individual outputs are tested to surface emergent candidates.

3. Save the output as a markdown file (unless differently stated in additional instructions!):
   - **If the input was a file path** — save in the same folder as the input file or relevant files.
   - **Otherwise** — save under `devdocs/innovation/<suitable-name>.md` (create the directory if needed).

4. Record the user's input at the top of the output file: `## User Input` followed by the $ARGUMENTS that were passed to this command. This allows the Reflect step (R) to see what the human asked for alongside what the discipline produced.

---

**Reference loading during execution.** When recognizing failure modes (premature evaluation, single-mechanism trap, early frame lock, innovation without grounding, mechanism exhaustion, survival bias), consult the "Failure Modes" section of `references/innovate.md` for full descriptions and corrective actions. The framework's vocabulary (mechanism roles, seed taxonomy, intuition components, coverage signals, telemetry) is canonically defined in that file.
