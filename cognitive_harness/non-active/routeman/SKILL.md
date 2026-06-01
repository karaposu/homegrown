---
name: routeman
description: Enumerates all possible next moves from a current state toward a goal or subgoal, each tagged with movement type (from a 16-type taxonomy organized in three Families — Progression / Re-orientation / Coordination) and reachability, with per-route prescriptive guidance. Produces a Route Map that downstream selection picks from — routeman never selects. Use when the user asks "what are the possible next moves," "list our options," "what could we do next," or "give me the directions to consider"; when a cognitive cycle has produced a state worth enumerating from; or before any selection-of-direction step that needs the full field of options enumerated, typed, and prioritized without commitment to one.
---

# /routeman — Structural Route Enumeration

## Step 0 — Mandatory pre-read

**Before reading anything else in this file, read `references/routeman.md` in full.** The protocol below references concepts — the two operations (enumeration + adaptive guidance), the 16-type movement taxonomy organized in three Families, the typed-reachability assignment mechanism, the adaptive-guidance mechanism with four guidance modes, the ten Enumeration components, the asymmetric-failure (enumerate-all) principle, the per-route schema (six purpose-groups), the Route Map wrapper, and the LAYER 1 / LAYER 2 failure-mode framework — that are defined ONLY in that file. Skipping this read produces shallow output that misses the discipline's actual mechanism.

Do not proceed to Step 1 until the read completes.

---

Enumerate possible next moves using the Structural Routeman Framework loaded in Step 0. Routeman draws routes from the next-move space implied by the current state + goal, types each by movement category, evaluates reachability, prioritizes, and attaches per-route guidance — without selecting which move to take.

## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

1. Read the input and consume it. The input should supply the **current state** (artifacts and verdicts from prior cognitive work — what has been understood, generated, critiqued; what is settled, open, or blocked) and the **goal or subgoal** (the directional anchor that biases which moves count as "advancing"). If the input is a folder path, read the relevant files to reconstruct the current state. If the input is raw text, parse it for state + goal. If the goal is implicit, surface it explicitly before proceeding.

2. Determine the entry-point: `fresh-state` if no prior Route Map exists for this state + goal; `prior-map-extending` if a prior Route Map is available and the operation should incorporate it (e.g., via cross-cycle REVISIT sub-actions — RESURRECT / INVALIDATE / REVERT).

3. Execute the full Structural Routeman process described in `references/routeman.md` (the "Execute the Routeman Process" section), running the Enumeration phase until convergence per §4.5, producing both the workspace work-product (routes read into present attention with full per-route metadata) and the Route Map artifact (per-route entries with the six purpose-group schema from §5.4 + wrapper fields from §5.5).

4. Save the Route Map as a markdown file (unless differently stated in additional instructions!):
   - **If the input was a file path** — save in the same folder as the input file or relevant files.
   - **Otherwise** — save under `devdocs/routeman/<suitable-name>.md` (create the directory if needed).

5. Record the user's input at the top of the artifact: `## User Input` followed by the $ARGUMENTS that were passed to this command.

---

**Reference loading during execution.** When recognizing failure modes (the six LAYER 1 operational modes — Premature Filtering, Recency Bias, Action Bias, Enumeration Without Reasoning, Route State Omission, Scope Fixation — plus the three LAYER 2 identity-eroding modes — Descriptive-Only Collapse, Prescriptive-Without-Grounding, Autonomy-Partition Drift), consult the "Failure Modes" section of `references/routeman.md` for full descriptions and corrective actions. The framework's vocabulary (route / movement type / reachability / priority / confidence / guidance mode / Route Map / Excluded; the three Movement Families with their sixteen types; the four guidance modes; the seven reachability values) is canonically defined in that file.
