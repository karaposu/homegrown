---
name: meta-loop
description: Run a stateful traversal engine over Homegrown inquiry artifacts. Use when the user wants to start from a seed plus context, traverse thinking space across multiple MVL+ inquiries, use Navigation as the perception layer, keep cross-run _meta_state.md memory, and choose next moves explicitly. Do not use for a single bounded question where MVL+ is enough.
---

# /meta-loop — Stateful Traversal Engine

The meta-loop is a controlled traversal over inquiry artifacts. It starts from a **seed plus context**, uses `/MVL+` as the probe that creates findings, uses `/navigation` as the eyes that map possible next moves, uses explicit selection to choose movement, and records cross-run memory in `_meta_state.md`.

This is **not** autonomous multi-head execution yet. V1 is sequential and human-selected.

```text
seed + context
-> MVL+
-> Navigation
-> human selects next move
-> MVL+
-> update _meta_state.md
-> stop or continue
```

## Additional Input/Instructions

$ARGUMENTS

---

## Core Rules

1. **Navigation sees; it does not choose.** Do not hide selection inside Navigation.
2. **MVL+ probes; it does not own cross-run memory.** Each MVL+ inquiry stays atomic.
3. **Meta-state remembers.** `_meta_state.md` is the source of truth for the traversal.
4. **Traversal is bounded.** Do not claim to discover the whole thinking space.
5. **Human selects in v1.** After producing a Navigation map, present options and wait for the user's selected move unless the user already gave an explicit selection.
6. **One selected move at a time.** Do not launch multiple branches unless the user explicitly requests multi-head/branch mode.

---

## If NEW

Input may be a raw goal, question, finding path, inquiry folder, navigation map, correction chain, or project-level context.

1. Normalize input into:
   - **Seed:** what starts traversal.
   - **Context:** what artifact terrain should be read.
   - **Goal:** what meaningful progress would look like.

2. Create the meta-loop folder:

   ```text
   devdocs/meta-loops/<YYYY-MM-DD_HH-MM__slugified_seed>/
   ```

   This directory is `[meta_folder]` below.

3. Write `[meta_folder]/_meta_state.md`:

   ```markdown
   # Meta State: [name]

   ## Status
   ACTIVE

   ## Mode
   sequential-human-selected

   ## Seed
   [seed]

   ## Context
   [context paths or summary]

   ## Goal
   [what useful traversal should produce]

   ## Active Frontier
   [current question, inquiry folder, or artifact being traversed]

   ## Visited Inquiries
   - [none yet]

   ## Navigation Decisions
   - [none yet]

   ## Open Questions
   - [unknown until first MVL+ finding]

   ## Branch Graph
   - [linear v1; no branches yet]

   ## Traversal Signals
   - Coverage: unknown
   - Convergence: unknown
   - Productivity: unknown
   - Directedness: unknown
   - Depth: unknown

   ## Stop / Continue Rationale
   Not assessed yet.

   ## Next Action
   Run MVL+ on the seed.

   ## History
   - [date]: Created meta-loop from seed: [one-line seed]
   ```

4. Start the first traversal step immediately.

---

## If RESUME

Input is a `devdocs/meta-loops/[folder]/` path or an `_meta_state.md` path.

1. Read `_meta_state.md`.
2. Identify `## Next Action`.
3. Continue exactly from that point.
4. Do not restart the traversal unless the user explicitly asks.

---

## Traversal Step

A traversal step has four phases.

### Phase 1 — Probe with MVL+

If `## Next Action` says to run MVL+:

1. Load `homegrown/MVL+/SKILL.md`.
2. Run `/MVL+` on the active frontier.
3. Ensure the MVL+ inquiry reaches `finding.md`.
4. Record the inquiry folder under `## Visited Inquiries`.
5. Set `## Next Action` to `Run Navigation on [latest_inquiry_folder]`.

If the active frontier is an incomplete MVL+ inquiry folder, resume it with `/MVL+ [folder]`.

### Phase 2 — See with Navigation

If `## Next Action` says to run Navigation:

1. Load `homegrown/navigation/SKILL.md`.
2. Run `/navigation [latest_inquiry_folder]`.
3. Save the Navigation output as `navigation.md` in the inquiry folder.
4. Record the map path in `_meta_state.md`.
5. Set `## Next Action` to `Await human selection from Navigation map`.

Navigation output is perception. It is not a decision.

### Phase 3 — Select Explicitly

If `## Next Action` says to await selection:

1. Present the Navigation map's HIGH and MEDIUM options briefly.
2. Ask the user to choose one option, stop, or request branching.
3. If the user chooses one option, record:
   - selected navigation item;
   - why it was selected;
   - source inquiry folder;
   - next MVL+ question derived from the selected item.
4. Set `## Next Action` to `Run MVL+ on selected next question`.

If the user already included an explicit selected direction in the prompt, use it and record that it was user-selected.

### Phase 4 — Assess Traversal

After each completed MVL+ + Navigation + selection cycle, update `## Traversal Signals` qualitatively:

- **Coverage:** did this move visit a new relevant region?
- **Convergence:** did open questions shrink, sharpen, or multiply?
- **Productivity:** did the run produce new structural material?
- **Directedness:** did the move stay connected to the meta-loop goal?
- **Depth:** did the move deepen an important region or stay surface-level?

Then update `## Stop / Continue Rationale`:

- **Continue** if a selected next move is goal-relevant and traversal is still productive.
- **Stop** if the goal is satisfied, no useful move remains, the user stops, or traversal signals show spinning.
- **Branch** only if the user explicitly requests multi-head/branch mode.
- **Revisit** if new evidence changes an older finding's survival condition.
- **Merge / consolidate** if multiple completed branches or findings need integration.

---

## Movement Types

The meta-loop may move:

- **Forward:** start a new MVL+ from a frontier question.
- **Backward:** revisit, invalidate, resurrect, or revert an older finding.
- **Sideways:** try a different frame or approach.
- **Downward:** deepen one survivor or sub-question.
- **Upward:** consolidate several findings into a higher-level model.
- **Across:** merge or compare branches.
- **Stop:** end the traversal with a rationale.

Use Navigation's taxonomy to name these moves when possible.

---

## Output Discipline

Every traversal step must update `_meta_state.md`.

When stopping, write `[meta_folder]/summary.md`:

```markdown
# Meta Loop Summary: [name]

## Seed
[seed]

## Goal
[goal]

## Traversal Path
[ordered inquiry folders and selected Navigation moves]

## Final State
[answer, partial answer, stopped, branched, merged, or blocked]

## What Was Learned
[concise synthesis]

## Open Frontiers
[remaining questions]

## Stop Rationale
[why stopping is correct now]
```

---

## Failure Modes

- **Uncontrolled continuation:** running another MVL+ because motion is possible, not because it is useful.
- **Hidden selection:** treating Navigation confidence as an autonomous choice.
- **Artifact amnesia:** failing to update `_meta_state.md`.
- **Context explosion:** reading too much project history without a seed-bound context scope.
- **Linear fixation:** refusing legitimate REVISIT, MERGE, or CONSOLIDATE movement because v1 is sequential.
- **Overclaiming:** saying the meta-loop fully discovers thinking space instead of bounded meaningful traversal.

