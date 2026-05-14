---
name: bf4ae1f-explore
description: Maps unknown territory (codebases, solution spaces, business landscapes, research fields) through iterative scan-signal-probe cycles, tracking the frontier between known and unknown and producing a confidence-tagged structural map. Use when the user asks to "explore" or "map" something unfamiliar, when a problem space needs to be enumerated before sensemaking can begin, when generating possibility candidates for a solution space, or when input territory is unknown and needs surveying before /sense-making or /innovate.
---

# /explore — Structural Exploration

## Step 0 — Mandatory pre-read

**Before reading anything else in this file, read `references/explore.md` in full.** The protocol below references concepts — exploration modes (artifact vs possibility), key components (scan, signal detection, probe, resolution management, frontier tracking, confidence mapping), the exploration cycle, convergence criteria, and the six failure modes — that are defined ONLY in that file. Skipping this read produces shallow output that misses the discipline's actual mechanism.

Do not proceed to Step 1 until the read completes.

---

Map unknown territory to produce a structural map with confidence levels, using the Structural Exploration Framework loaded in Step 0. Works for codebases, solution spaces, business landscapes, research fields, or any unknown territory.

## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

1. Read the input and consume it. It can be raw text, a folder path with md files, code files, or image path. Consume all input.

2. Determine the exploration mode:
   - **Artifact exploration** — if the territory has concrete objects to find (codebases, literature, existing solutions)
   - **Possibility exploration** — if the territory is conceptual and candidates must be generated (solution spaces, design options, strategic directions)

3. Determine the entry point:
   - **Frontier-first** (default) — no prior signal, start with broad scan
   - **Signal-first** — a specific question or hunch exists, start by probing it

4. Execute the full Structural Exploration process described in `references/explore.md` (the "Execute the Exploration Process" section), running iterative cycles until convergence per the three convergence criteria (frontier stability + declining discovery rate + bounded gaps).

5. Save the output as a markdown file (unless differently stated in additional instructions!):
   - **If the input was a file path** — save in the same folder as the input file or relevant files.
   - **Otherwise** — save under `devdocs/exploration/<suitable-name>.md` (create the directory if needed).

---

**Reference loading during execution.** When recognizing failure modes (premature depth, surface-only scanning, false confidence, premature termination, re-exploration, completeness bias in possibility mode), consult the "Failure Modes" section of `references/explore.md` for full descriptions and corrective actions. The framework's vocabulary (signal types, confidence levels, scan vs probe semantics) is canonically defined in that file.
