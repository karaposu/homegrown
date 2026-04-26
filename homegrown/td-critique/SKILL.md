---
name: td-critique
description: Evaluates competing candidates (ideas, plans, approaches, designs) by extracting evaluation dimensions from the problem context, building a multi-dimensional fitness landscape, conducting adversarial testing (prosecution + defense + collision), and producing verdicts (SURVIVE / REFINE / KILL) with constructive output. Use when the user asks to "evaluate," "critique," or "compare" candidates, when /innovate has produced multiple options that need contraction, or when a decision needs to be made among several approaches with explicit trade-off reasoning.
---

# /td-critique — Structural Critique

## Step 0 — Mandatory pre-read

**Before reading anything else in this file, read `references/td-critique.md` in full.** The protocol below references concepts — the two operations (extraction + evaluation), evaluation dimensions, the fitness landscape (viable / dead / boundary / unexplored regions), adversarial structure (prosecution + defense + collision), the three verdict types with their constructive requirements, the accumulator, the five phases (0 dimension construction, 1 landscape, 2 adversarial, 3 verdict, 3.5 assembly check, 4 coverage + convergence), and the seven failure modes — that are defined ONLY in that file. Skipping this read produces shallow output that misses the discipline's actual mechanism.

Do not proceed to Step 1 until the read completes.

---

Evaluate ideas, plans, approaches, or outputs using the Structural Critique Framework loaded in Step 0. Constructs evaluation dimensions from the understood problem, builds a fitness landscape, conducts adversarial testing on each candidate, and produces verdicts with constructive output.

## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

1. Read the input and consume it. It can be raw text, a folder path with md files, code files, or image path. Consume all input. The input should contain both the problem context (sensemaking output or equivalent) and the candidates to evaluate (innovation output or equivalent).

2. Execute the full Structural Critique process described in `references/td-critique.md` — Phase 0 (Dimension Construction) → Phase 1 (Landscape Construction) → Phase 2 (Adversarial Evaluation per candidate) → Phase 3 (Verdict + Constructive Output) → Phase 3.5 (Assembly Check across surviving candidates) → Phase 4 (Coverage + Convergence Assessment). Run prosecution + defense + collision per candidate; render verdicts as SURVIVE / REFINE / KILL with constructive output.

3. Save the output as a markdown file (unless differently stated in additional instructions!):
   - **If the input was a file path** — save in the same folder as the input file or relevant files.
   - **Otherwise** — save under `devdocs/critique/<suitable-name>.md` (create the directory if needed).

4. Record the user's input at the top of the output file: `## User Input` followed by the $ARGUMENTS that were passed to this command. This allows the Reflect step (R) to see what the human asked for alongside what the discipline produced.

5. Present the final deliverable as: (a) Dimensions with weights, (b) Fitness Landscape (viable / dead / boundary / unexplored regions), (c) Candidate Verdicts with adversarial test results, (d) Coverage Map, (e) Signal (ITERATE with direction OR TERMINATE with ranked survivors).

6. Run the **Convergence Telemetry** check after producing the deliverable: report dimension coverage, adversarial strength (STRONG vs WEAK), landscape stability (CHANGED vs STABLE), whether a clean SURVIVE exists, and whether any of the seven failure modes were observed. Output: PROCEED / FLAG / RE-RUN.

---

**Reference loading during execution.** When recognizing failure modes (wrong dimensions, rubber-stamping, nitpicking, dimension blindness, false convergence, evaluation drift, self-reference collapse), consult the "Failure Modes" section of `references/td-critique.md` for full descriptions and corrective actions. The framework's vocabulary (default vs problem-specific dimensions, burden-of-proof shifts by stake level, accumulator fields, convergence criteria) is canonically defined in that file.
