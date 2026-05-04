---
name: navigation
description: Enumerates all possible next directions from a completed SIC cycle (or current project state), producing a navigation map with typed route-card records, route-state fields, per-route reasoning, adaptive guidance, and continuation notes across the 16-type taxonomy (content-directed / process-directed / context-directed). Use when an inquiry has just completed and the user needs to decide what to do next, when multiple frontier questions are open and need explicit enumeration, when /wayfinding's single-direction selection is too narrow, or when the user asks "what are all the options?" rather than "what should we do?"
---

# /navigation — Structural Navigation

## Step 0 — Mandatory pre-read

**Before reading anything else in this file, read `references/navigation.md` in full.** The protocol below references concepts — the navigation map structure, the 16-type taxonomy (with content-directed / process-directed / context-directed categories), priority/confidence fields, the six-step process (Read → Assign Types → Allocate Guidance → Assess Priority / Confidence → Check Excluded → Format the Map), the six failure modes, the auto-derivable vs human-judgment type split, and navigation's relationship to /sense-making, /innovate, /td-critique, /reflect, and /wayfinding — that are defined ONLY in that file. Skipping this read produces shallow output that misses the discipline's actual mechanism.

Do not proceed to the Freshness Preflight until the read completes.

---

Produce a navigation map — the full enumeration of possible next directions from a completed SIC cycle or current project state — using the Structural Navigation Framework loaded in Step 0. Each item is a route-card record with Direction, Goal, Type, Priority, Status, Blocked by, Purpose, Movement, Unlocks, Why this route exists, Guidance mode, adaptive Guidance, and Continuation note. Reads SIC output, telemetry, scope, and optionally reflection observations.

## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

0. **Freshness Preflight.** Before treating the input as authoritative Navigation context, check whether the context is fresh enough to map routes from.

   This preflight runs for every Navigation invocation, but it should be cheap for local or already-fresh inputs. The automatic part is the check, not hidden context refresh.

   Classify the invocation into one of these outcomes:

   - `fresh_local` — the input is a local inquiry folder, file path, or bounded artifact whose needed context is contained in that source. Project-wide refresh is not required.
   - `fresh_project` — the input includes a current-state brief, sync brief, or explicit current project context that is fresh enough for this Navigation run.
   - `refresh_needed` — the session was previously warmed, but bounded recent project changes may affect the Navigation map. A valid freshness anchor exists.
   - `full_warmup_needed` — no valid freshness anchor exists, the project/source boundary changed globally, the prior warm-up was wrong or too thin, or stale state is too broad for delta refresh.
   - `thin_allowed` — the user explicitly asks to proceed despite missing or stale context.

   Act on the outcome:

   - `fresh_local`: proceed to Step 1.
   - `fresh_project`: proceed to Step 1 and preserve any missing-context warnings from the brief.
   - `refresh_needed`: load `homegrown/navigation/warmup/navigator-refresh.md` in full and execute it before producing the Navigation map. Use the produced sync brief as additional input, and record the sync brief path or inline brief in the Navigation output.
   - `full_warmup_needed`: stop before producing a normal Navigation map. Tell the user to run `navigator-warmup1.md -> navigator-warmup2.md -> navigator-warmup3.md`, followed by the post-v3 prior-map overlay, then rerun Navigation.
   - `thin_allowed`: proceed only if the user explicitly accepted thin context. Mark Navigation Telemetry as `THIN` and preserve the missing-context warning in the map.

   Do not silently refresh. Any refresh must produce or read a sync brief with a read set, freshness anchor, Navigation impact, and confidence limits.

   Do not use `_frontier.md` as global session freshness state. `_frontier.md` belongs to multi-resolution Navigation expansion state only.

1. Read the input. It can be a folder path (an inquiry folder with SIC outputs), raw text describing current state, a current-state brief, a sync brief, or a file path. Consume all input.

2. **If the input is an inquiry folder:** read all discipline outputs (sensemaking.md, innovation.md, critique.md), telemetry sections, frontier questions, the original question and goal from `_branch.md`, and `reflection.md` if it exists.

   **If the input is raw text or project-level context:** read whatever is provided and navigate from that — the map will be thinner (no critique verdicts) but still useful for strategic direction-setting.

3. Execute the full navigation process described in `references/navigation.md` — the six-step sequence (Read and assess → Assign types from the 16-type taxonomy → Allocate guidance and generate pointers → Assess priority/confidence per item → Check excluded types with reasoning → Format the map). Apply the auto-derivable vs human-judgment type distinction throughout: auto-derivable types come from explicit signals (C verdicts, telemetry flags, scope check, frontier questions); human-judgment types (REFRAME, REVISIT, DIFFERENT APPROACH, CONSOLIDATE) only enter the map if evidence supports them.

4. Save the output as a markdown file:
   - **If the input was a file/folder path** — save in the same folder as `navigation.md`.
   - **Otherwise** — save under `devdocs/navigation/<suitable-name>.md` (create the directory if needed).

5. Record the user's input at the top: `## User Input` followed by the $ARGUMENTS that were passed to this command.

6. Print the output in the conversation as well.

7. Run the **Navigation Telemetry** check after producing the map: report freshness preflight outcome (`fresh_local`, `fresh_project`, `refresh_needed`, `full_warmup_needed`, or `thin_allowed`), sync brief used (path, inline, or none), types considered (count out of 16), category balance (Content / Process / Context distribution), route coverage (did meaningful open, blocked, low-priority, and deferred routes appear where relevant?), guidance allocation (did each route declare an appropriate Guidance mode?), guidance modes used (`none N`, `compact N`, `full N`, `expand-on-selection N`), route-state completeness (do items have Direction, Goal, Type, Priority, Status, Blocked by, Purpose, Movement, Unlocks, Why this route exists, Guidance mode, and Continuation note?), blocked-route visibility (are blocked but meaningful routes in the main map?), excluded reasoning (does the excluded section explain why types were rejected?), and any failure modes observed. Output: COMPLETE / FLAG / THIN.

---

**Output format.** The map's exact format — section headers, route-card fields, optional route index, excluded section, and per-item route record structure — is specified in the "Format" subsection of `references/navigation.md`. Follow it precisely.

**Reference loading during execution.** When recognizing failure modes (premature filtering, recency bias, action bias, enumeration without reasoning, route state omission, scope fixation), consult the "Failure Modes" section of `references/navigation.md` for full descriptions and corrective actions. The framework's vocabulary (the 16 type definitions, auto-derivable signals, three-category structure, priority/confidence assignment rules, navigation's relationship to wayfinding/reflection) is canonically defined in that file.
