---
name: reflect
description: Examines how a completed SIC run's PROCESS performed (not the problem itself) — what each step did well, what it missed, where the human compensated — and produces per-step observations, proposed memory cells, and process-frontier questions. Use after a SIC inquiry completes to extract lessons for future runs, when the user asks "what did we learn about how this went?", when accumulated reflection observations are needed before proposing spec changes, or when human interventions during the run signal a system capability gap worth surfacing.
---

# /reflect — Structural Reflection

## Step 0 — Mandatory pre-read

**Before reading anything else in this file, read `references/reflect.md` in full.** The protocol below references concepts — the PROCESS-vs-CONTENT distinction (the most load-bearing rule), the five examination dimensions (human interventions, cross-step leaks, step quality, surprises, answer-goal alignment), the three output types (per-step observations, proposed memory cells, process frontier), the "max 1 observation per step" constraint, and the four failure modes — that are defined ONLY in that file. Skipping this read produces shallow output that misses the discipline's actual mechanism.

Do not proceed to Step 1 until the read completes.

---

Examine a completed SIC run (or any set of discipline outputs) using the Structural Reflection Framework loaded in Step 0. Observe the PROCESS, not the problem. Produce per-step observations, proposed memory cells, and process frontier questions.

## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

1. Read the input. It should be a folder path containing completed discipline outputs (`sensemaking.md`, `innovation.md`, `critique.md`) and a `_branch.md` with the original question. If individual files are pointed to instead of a folder, read them all.

2. Read ALL discipline outputs in the folder. Also read `_branch.md` for the original question and goal.

3. Note any human interventions visible in the outputs — places where the human redirected, corrected, added context, or overrode a verdict. These are the most valuable signals; the system missed whatever the human had to add.

4. Execute the full reflection process described in `references/reflect.md`:
   - **Step 1:** Read everything (all discipline outputs + `_branch.md`).
   - **Step 2:** Examine the five dimensions (human interventions, cross-step leaks, step quality, surprises, answer-goal alignment).
   - **Step 3:** Produce the three outputs — per-step observations (max 1 per step, focus on the MOST significant), proposed memory cells (0-3 with tags + evidence), process frontier questions (0-3 about the PROCESS, not the problem).
   - **Step 4:** Failure mode check — verify observations are about PROCESS not CONTENT, that you're not rubber-stamping, not blaming the user, and not over-reflecting.

5. Save the output as `reflection.md` in the same folder as the discipline outputs. Print in conversation as well.

---

**Reference loading during execution.** When recognizing failure modes (rubber-stamp reflection, over-reflection, blaming the user, content reflection instead of process reflection), consult the "Failure Modes" section of `references/reflect.md` for full descriptions and corrective actions. The framework's vocabulary (the five examination dimensions, output formats, the PROCESS-vs-CONTENT boundary, what counts as "thin" vs "substantive" step quality) is canonically defined in that file.
