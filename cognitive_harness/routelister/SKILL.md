---
name: routelister
description: Enumerates the concepts in any body of material as typed prescriptive routes — directions toward a goal. Sweeps a territory, individuates its goal-relevant concepts into concept-identities, and frames each as a route with a three-axis type-signature (grain × kind × engagement-type, over a fixed nine-verb engagement vocabulary) plus prescriptive guidance. Produces a compact route-map (one route per identity) + a persistent concept-map index that runs accumulate into. Enumerate-not-select: it lists the full field of directions and never picks, executes, describes, or sets the goal. Use when the user asks "what could I do next here," "list the directions / concepts as moves toward this goal," "map the field of options," or wants any territory (a project, a doc set, a corpus, a finished inquiry's artifacts) turned into typed directions without committing to one. Standalone and intrinsic — runs on any territory, with or without a surrounding process.
---

# /routelister — Structural Routelisting

## Step 0 — Mandatory pre-read

**Before reading anything else in this file, read `references/routelister.md` in full.** The protocol below references concepts — the perceive-by-enumerating core, the enumerate-vs-decide distinction, the concept-identity unit, the three-axis route-type (grain × kind × engagement-type) with its fixed nine-verb engagement vocabulary and the membership test, the two run modes (project-space breadth / concept-space depth), the input contract, the sweep → individuate → frame mechanism (with goal-relative lean-to-split individuation), the cross-run load-modify-save concept-map (idempotency-at-fixpoint / enrich-not-dump / stale-flag-not-delete), the route record schema, the index's within-concept boundary, and the LAYER 1 / LAYER 2 failure-mode framework — that are defined ONLY in that file. Skipping this read produces shallow output that misses the discipline's actual mechanism.

Do not proceed to Step 1 until the read completes.

---

Enumerate the field of directions a territory offers using the Structural Routelisting Framework loaded in Step 0. Routelisting sweeps the goal-relevant territory, individuates its concepts into concept-identities, and casts each as a typed prescriptive route — without selecting which to take, executing it, or describing how the territory works.

## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

1. Read the input and consume it. It supplies a **territory** (something to enumerate from — a project root, a subtree, a document set, a corpus, a finished work's artifacts, or a passage describing a space) and a **goal** (the directional bias; may be fuzzy). If the input is a path, read the relevant material to populate the territory. If the goal is implicit, surface it explicitly before proceeding. Routelisting is folder-independent — it needs a scope, not a specific directory.

2. Determine the **run mode**: `root / project-space (breadth)` when no target identity is given (enumerate the concept-identities across the whole territory, one route per identity); `concept-target / concept-space (depth)` when a target identity is given (enumerate its manifestations as routes, flagging divergences as high-value epistemic routes). Determine the **entry point**: `fresh` or `index-extending` (a prior concept-map index exists and should be loaded per §3.5).

3. Execute the full Structural Routelisting process described in `references/routelister.md` (the "Execute the Routelisting Process" section): LOAD the index if present → sweep → individuate (goal-relative, signal-guided, lean-to-split, incremental) → frame each identity as a typed route (grain × kind × engagement-type, with Movement, WHY, attributive Priority/Confidence, guidance) → PERSIST the index → emit the route-map. Route candidate-concepts that advance/sharpen nothing into the Excluded section, with reasons.

4. Save the route-map as a markdown file (unless differently stated in additional instructions!):
   - **If the input was a file path** — save in the same folder as the input file or relevant files.
   - **Otherwise** — save under `devdocs/routelister/<suitable-name>.md` (create the directory if needed).

5. Record the user's input at the top of the artifact: `## User Input` followed by the $ARGUMENTS that were passed to this command.

---

**Reference loading during execution.** When recognizing failure modes — LAYER 1 operational (Over-merge, Under-coverage, Wrong-grain, Goal-loss, Type-misassignment, Index-drift) and LAYER 2 identity-eroding (Selection-creep, Process-coupling, Description-collapse, Manifestation-dump) — consult the "Quality" section (§4) of `references/routelister.md` for full descriptions and correctives. The framework's vocabulary (territory / goal / concept / manifestation / concept-identity / route / route-type / grain / kind / engagement-type / individuation / index / attributive Priority-Confidence; the three axes; the nine engagement-types under two kinds; the two run modes; the asymmetric-failure / lean-to-split principle) is canonically defined in that file.
