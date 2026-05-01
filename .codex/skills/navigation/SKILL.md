---
name: navigation
description: Structural Navigation
---

---
name: navigation
description: Enumerates all possible next directions from a completed SIC cycle (or current project state), producing a navigation map with typed directions, per-direction reasoning, and per-guideline WHY across the 15-type taxonomy (content-directed / process-directed / context-directed). Use when an inquiry has just completed and the user needs to decide what to do next, when multiple frontier questions are open and need explicit enumeration, when /wayfinding's single-direction selection is too narrow, or when the user asks "what are all the options?" rather than "what should we do?"
---

# /navigation — Structural Navigation

## Step 0 — Mandatory pre-read

**Before reading anything else in this file, read `references/navigation.md` in full.** The protocol below references concepts — the navigation map structure, the 15-type taxonomy (with content-directed / process-directed / context-directed categories), confidence symbols (■ HIGH / ○ MEDIUM / · LOW), the six-step process (Read → Assign Types → Generate Guidelines → Assess Confidence → Check Excluded → Format the Map), the five failure modes, the auto-derivable vs human-judgment type split, and navigation's relationship to /sense-making, /innovate, /td-critique, /reflect, and /wayfinding — that are defined ONLY in that file. Skipping this read produces shallow output that misses the discipline's actual mechanism.

Do not proceed to Step 1 until the read completes.

---

Produce a navigation map — the full enumeration of possible next directions from a completed SIC cycle or current project state — using the Structural Navigation Framework loaded in Step 0. Each item carries direction + WHY + 3-6 guidelines (each guideline with its own WHY). Reads SIC output, telemetry, scope, and optionally reflection observations.

## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

1. Read the input. It can be a folder path (an inquiry folder with SIC outputs), raw text describing current state, or a file path. Consume all input.

2. **If the input is an inquiry folder:** read all discipline outputs (sensemaking.md, innovation.md, critique.md), telemetry sections, frontier questions, the original question and goal from `_branch.md`, and `reflection.md` if it exists.

   **If the input is raw text or project-level context:** read whatever is provided and navigate from that — the map will be thinner (no critique verdicts) but still useful for strategic direction-setting.

3. Execute the full navigation process described in `references/navigation.md` — the six-step sequence (Read and assess → Assign types from the 15-type taxonomy → Generate navigation items with guidelines → Assess confidence per item → Check excluded types with reasoning → Format the map). Apply the auto-derivable vs human-judgment type distinction throughout: auto-derivable types come from explicit signals (C verdicts, telemetry flags, scope check, frontier questions); human-judgment types (REFRAME, REVISIT, DIFFERENT APPROACH, CONSOLIDATE) only enter the map if evidence supports them.

4. Save the output as a markdown file:
   - **If the input was a file/folder path** — save in the same folder as `navigation.md`.
   - **Otherwise** — save under `devdocs/navigation/<suitable-name>.md` (create the directory if needed).

5. Record the user's input at the top: `## User Input` followed by the $ARGUMENTS that were passed to this command.

6. Print the output in the conversation as well.

7. Run the **Navigation Telemetry** check after producing the map: report types considered (count out of 15), category balance (Content / Process / Context distribution), guideline depth (do items have guidelines with per-guideline WHY?), excluded reasoning (does the excluded section explain why types were rejected?), and any failure modes observed. Output: COMPLETE / FLAG / THIN.

---

**Output format.** The map's exact format — section headers, confidence symbols, excluded section, per-item structure with direction + WHY + guidelines — is specified in the "Format" subsection of `references/navigation.md`. Follow it precisely.

**Reference loading during execution.** When recognizing failure modes (premature filtering, recency bias, action bias, enumeration without reasoning, scope fixation), consult the "Failure Modes" section of `references/navigation.md` for full descriptions and corrective actions. The framework's vocabulary (the 15 type definitions, auto-derivable signals, three-category structure, confidence assignment rules, navigation's relationship to wayfinding/reflection) is canonically defined in that file.
