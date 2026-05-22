---
name: surfacing
description: Draws items from a bounded territory (artifact case — codebases, literature, corpora; possibility case — solution spaces, design candidates) into the inquiry's present attention, each tagged with relevance to the inquiry's purpose at one of four levels (core / sub / side / umbrella). Produces two work-products — a workspace (items read into LLM context with explicit relevance tags) and a thin artifact (traversal trace + state summary, no item content). Use when the user asks to "surface" what's relevant from a territory, when an inquiry needs upstream relevance-tagged input before /sense-making or other downstream cognition, or when a question requires drawing-from-territory rather than free generation.
---

# /surfacing — Structural Surfacing

## Step 0 — Mandatory pre-read

**Before reading anything else in this file, read `references/surfacing.md` in full.** The protocol below references concepts — the verb-meaning, the two work-products (workspace + thin artifact), the four relevance levels, the six Traversal components, the Boundary-discovery sub-phase, the relevance-attribution mechanism, the eight load-bearing primitives, the asymmetric-failure principle, and the LAYER 1 / LAYER 2 failure-mode framework — that are defined ONLY in that file. Skipping this read produces shallow output that misses the discipline's actual mechanism.

Do not proceed to Step 1 until the read completes.

---

Draw items from a bounded territory into the inquiry's present attention, each tagged with relevance to the inquiry's purpose, using the Structural Surfacing Framework loaded in Step 0. Works for codebases, literature, corpora, solution spaces, design candidates, or any bounded territory.

## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

1. Read the input and consume it. It can be raw text, a folder path with md files, code files, or image path. Consume all input.

2. Determine the case:
   - **Artifact case** — territory contains existing items to enumerate (codebases, literature, corpora)
   - **Possibility case** — territory is conceptual; items must be candidate-generated (solution spaces, design options)

3. Determine the territory specification:
   - **Explicit-bounded** (default) — territory edges are given; proceed to main Reception
   - **Unbounded / discover** — invoke the Boundary-discovery sub-phase first to surface the territory's edges

4. Execute the full Structural Surfacing process described in `references/surfacing.md` (the "Execute the Following Process" section), running the Traversal phase until convergence per the discipline's convergence criteria, producing both the workspace work-product and the thin artifact work-product.

5. Save the artifact as a markdown file (unless differently stated in additional instructions!):
   - **If the input was a file path** — save in the same folder as the input file or relevant files.
   - **Otherwise** — save under `devdocs/surfacing/<suitable-name>.md` (create the directory if needed).

6. Record the user's input at the top of the artifact: `## User Input` followed by the $ARGUMENTS that were passed to this command.

---

**Reference loading during execution.** When recognizing failure modes (the seven LAYER 1 operational modes + the three LAYER 2 identity-eroding modes), consult the "Failure Modes" section of `references/surfacing.md` for full descriptions and corrective actions. The framework's vocabulary (item / territory / purpose / workspace / artifact / relevance tag / relevance confidence; the four relevance levels; the eight primitives) is canonically defined in that file.
