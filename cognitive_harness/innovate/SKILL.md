---
name: innovate
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

2. Execute the full Structural Innovation process described in `references/innovate.md` (the Seed → Generate → Test cycle) under the coverage standard below. Run the assembly check after individual outputs are tested to surface emergent candidates.

   **Coverage standard (full scale, always):** Every run fires all seven mechanisms; no exception the run can grant itself. Each mechanism produces at least one variation that enters the 5-test cycle — *tested, not necessarily kept*: a variation generated, tested, and killed at its first test is recorded work (two lines in the telemetry), never omitted work. The spread is the point — kills are recorded, not hidden. At the run's core — the seed itself in idea-mode; every meta-decision piece in Production-task mode — produce the full three-variation set (one **generic**, one **focused**, one **contrarian**) before testing. Coverage below seven fired exists only when the user's own raw input asks for it, and the telemetry quotes those words verbatim. The per-seed minimum (1 Generator + 1 Framer) remains defined as the Coverage Strategy's floor-concept that methodology-modes reference; invoking a below-full mode (e.g., Minimum-mechanism) is itself a user-words event under this standard — the telemetry quotes the user's invocation. <!-- TOGGLE: to require the three-variation set at ALL pieces/mechanisms (the literal 7×3 grid, ~300–450 lines/run), replace "At the run's core …" with "For every mechanism, produce the full three-variation set before testing." -->

3. **Invocation args may narrow the SEED, never the COVERAGE.** Additional instructions can shape what innovation works on — the seed, the piece-list, mandated extra attention (e.g., "Inversion is mandatory at piece X") — but no argument, mode-name, or brief reduces the coverage standard above. "Production-task mode" selects the piece-list seed-shape; it does not select a smaller method. If args conflict with this standard, the standard wins: the run fires all seven and notes the conflict in the telemetry.

4. Save the output as a markdown file (unless differently stated in additional instructions!):
   - **If the input was a file path** — save in the same folder as the input file or relevant files.
   - **Otherwise** — save under `devdocs/innovation/<suitable-name>.md` (create the directory if needed).

5. Record the user's input at the top of the output file: `## User Input` followed by the $ARGUMENTS that were passed to this command. This allows the Reflect step (R) to see what the human asked for alongside what the discipline produced.

---

**Reference loading during execution.** When recognizing failure modes (premature evaluation, single-mechanism trap, early frame lock, innovation without grounding, mechanism exhaustion, survival bias), consult the "Failure Modes" section of `references/innovate.md` for full descriptions and corrective actions. The framework's vocabulary (mechanism roles, seed taxonomy, intuition components, coverage signals, telemetry) is canonically defined in that file.
