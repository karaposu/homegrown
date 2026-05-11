# Project Summary

## Plain-Language Summary

Homegrown is a project for making AI-assisted thinking more structured, inspectable, and eventually more self-improving.

In plain terms, it is a local toolkit of "thinking routines" for AI agents. These routines help an AI explore a question, make sense of it, split it into parts, generate options, critique them, decide what has been learned, and then decide what kind of thinking or work should happen next.

The long-term ambition is much larger than a prompt library. The project is trying to build a system that can learn from its own reasoning history, corrections, artifacts, and outcomes. Some notes describe this as a path toward artificial consciousness or a self-maintaining cognitive layer. That ambition is real in the project direction, but the current repo is not an autonomous mind or a finished agent runtime. It is mostly a structured methodology, local skill pack, and research archive with early operational protocols.

## What It Contains Now

The repo currently contains:

- Installable AI skills under `homegrown/`, including MVL, MVL+, Navigation, Meta-loop, Reflect, Explore, Sense-making, Decompose, Innovate, Critique, and Comprehend.
- Protocols that govern work around the skills, including branch creation, conclusion, resume, loop diagnosis, artifact materialization, Navigation context intake, and outcome review.
- A shared alignment contract that gives common language for expected vs observed behavior, evidence, confidence, and next routes.
- Concept and theory notes under `enes/`, including the autonomy roadmap, alignment dynamics, materialization lifecycle, Navigation observer idea, and the planned Predictive Regression Checker idea called `/intuit`.
- Older theory notes under `thinking_disciplines/`, which explain disciplines, protocols, MVL, Navigation, and alignment, but some of these are behind the current `homegrown/` protocols.
- Canonical inquiry findings under `devdocs/inquiries/**/finding.md`, which record accepted decisions and corrections.
- A small book draft under `src/book/`, which is useful as history but often uses older names and paths.
- Shell install scripts for Claude and Codex skills.

There is very little conventional application code. This is not currently a web app, API, library, or product backend. It is a mixed artifact system: part methodology, part local AI skill pack, part protocol set, part research log, and part self-improvement design notebook.

## What It Currently Does

Homegrown can be installed as local AI skills. A human can invoke the skills directly or run MVL/MVL+ style loops.

MVL is the smaller loop:

```text
Sensemaking -> Innovation -> Critique
```

MVL+ is the larger loop:

```text
Exploration -> Sensemaking -> Decomposition -> Innovation -> Critique
```

Those loops are meant to create an inquiry folder, save intermediate reasoning, and finish with a `finding.md`. Navigation then works at the boundary: it reads a completed inquiry or current project state and maps possible next routes. It is not supposed to silently choose the next move.

The current repo also contains protocols for turning decisions into files, reviewing outcomes after use, branching inquiries, and diagnosing why a prior loop failed when a later correction exists.

The system still depends heavily on the human. The human chooses when to run skills, which route to take, when to materialize something, and when a result is good enough. The meta-loop exists as a first version of a traversal engine, but it is explicitly human-selected and sequential.

## What It Is Trying To Do

The project appears to be moving toward a closed learning loop:

```text
question or project state
  -> structured inquiry
  -> finding
  -> Navigation route map
  -> human or future selector chooses a move
  -> branch or materialized artifact
  -> after-use outcome review
  -> maintenance candidate or no-op
  -> future Navigation reads the evidence
```

That is the practical version of the larger self-improvement ambition. The near-term goal is not full autonomy. It is to make the project's reasoning, decisions, corrections, branches, and file changes durable enough that future sessions do not depend on the user remembering everything.

Partially implemented or in-progress work includes:

- Navigation warm-up, so a session can load project state before producing next-route maps.
- Richer Navigation route maps with purpose, movement, status, blockers, unlocks, and continuation notes.
- Artifact materialization, so accepted decisions become files through a controlled process instead of ad hoc edits.
- Outcome review and alignment dynamics, so the project records whether things worked after use.
- Loop diagnosis, so correction chains can reveal what earlier reasoning missed.
- Branching support for nested inquiry paths.
- A future Navigation Observer, which would be a separate context-isolated role for movement-space awareness.
- `/intuit`, a planned predictive quality-sense discipline, which is described in `enes/` but is not currently materialized as a `homegrown/intuit` skill.

## Who Would Use This

The primary user is the project owner or developer working with AI assistants in Claude, Codex, or similar environments.

It would also make sense for someone doing complex research, design, protocol development, or self-improving AI workflow experiments where the important problem is not only "get an answer," but "keep the reasoning path, decisions, corrections, and next options visible over time."

It is not currently packaged for ordinary end users. It assumes the user is comfortable working in a repo, reading Markdown artifacts, invoking AI skills, and judging which next move matters.

## General Shape

The project is best understood as a mixed artifact system:

- A local AI skill pack.
- A structured thinking methodology.
- A protocol and contract system for governing AI work.
- A research archive of inquiries and findings.
- A developing self-maintenance architecture.

It is not mainly a codebase in the normal sense. Markdown files are operative artifacts here. They define behavior, authority, protocols, and direction.

## Recent / Current Frontier

The strongest current frontier is Navigation.

The latest canonical finding I read is dated 2026-05-03 and says prior Navigation maps should be read after warm-up v3, not inside warm-up v1. That matters because old Navigation maps are useful route memory, but they can also be stale. The current intended sequence is:

```text
warm-up v1: source-grounded project orientation and current frontier
warm-up v2: project direction and architecture
warm-up v3: movement traces
post-v3 overlay: reconcile prior Navigation maps as evidence, not authority
Navigation: produce a fresh route map
```

The current code/artifact state only partly matches that decision. The warm-up files now live under `homegrown/navigation/warmup/`, but there is no warm-up README or visible post-v3 prior-map handoff rule yet. `homegrown/protocols/navigation_context_intake.md` also still looks like a full detailed protocol, while the May 3 findings say it should shrink into a tiny wrapper after the warm-up routine stabilizes.

The second active frontier is the Navigation output contract. This is more implemented. `homegrown/navigation/SKILL.md` and `homegrown/navigation/references/navigation.md` now use a 16-type taxonomy and define route-state fields such as Purpose, Movement, Status, Blocked by, Unlocks, WHY, Guidelines, and Continuation note. That corrects the older 15/16 taxonomy mismatch and moves Navigation toward durable route memory.

The third active frontier is materialization-backed Navigation relief. The May 2 findings say the next useful development should reduce the user's burden of deciding where Homegrown should move next. The intended sequence is: use Navigation, materialize one Navigation-relief artifact through `artifact_materialization.md`, then run `outcome_review` after real use. The protocol file `homegrown/protocols/artifact_materialization.md` now exists and matches much of that direction, but the evidence of repeated dogfooding is not visible from the allowed inquiry findings alone.

The fourth active frontier is alignment and outcome learning. `homegrown/contracts/alignment_control.md`, `homegrown/protocols/outcome_review.md`, and `enes/alignment_dynamics.md` show that the project has moved beyond generic "feedback" language. The current model is: alignment is the whole-system condition, feedback is the control mechanism, and operations like reflect, outcome review, loop diagnose, Navigation, and materialization are specialized alignment-insurance tools.

Important corrected or superseded assumptions:

- Navigation is not a required sixth stage inside MVL+. It is a separate boundary discipline.
- Navigation is answer-producing in its own domain. It answers "what routes are possible from here?" but does not choose the route.
- Blocked routes should not disappear from Navigation maps. They should appear as blocked routes with gates.
- `loop_diagnose` should not add routine upstream marks to every Critique output. It should diagnose correction chains from archived evidence when needed.
- `reflect` should not auto-run after every loop. It remains trial-gated process-alignment insurance.
- `navigation_context_intake.md` should no longer be the main detailed warm-up procedure if v1/v2/v3 continue to work.

Open gates and blockers:

- The post-v3 prior Navigation map overlay is decided but not yet visibly implemented.
- The warm-up folder lacks the README/index that the findings say should explain run order and session boundary.
- `navigation_context_intake.md` has not yet been shrunk into the tiny wrapper described by the latest warm-up findings.
- MVL and MVL+ still reference `tools/structural_check.sh`, but that file is absent in the repo. Older loop-design notes describe it as a gate, so this is a real stale or missing implementation assumption.
- The install scripts only install `conclude.md` and `resume.md` as supporting protocols. They do not install newer active protocols such as `branch_inquiry.md`, `artifact_materialization.md`, `navigation_context_intake.md`, `outcome_review.md`, or `loop_diagnose.md`. That makes packaging stale relative to the current protocol set.
- `/intuit` is conceptually important but not materialized as an installable skill.
- Multihead execution, autonomous selection, persistent Navigation Observer sessions, merge policy, and graph UI remain deferred.

What Navigation should pay attention to now:

- Treat the May 3 Navigation warm-up and route-map findings as the active edge.
- Use current findings and current files, not only dates, to judge what is live.
- Do not let old Navigation maps anchor the session before v1/v2/v3 establish current state.
- Watch for stale docs that still imply older command paths, old `commands/` layout, or old Navigation taxonomy.
- Treat materialization traces and outcome reviews as important future Navigation evidence, but note that the requested read rules did not allow reading `devdocs/materializations/` contents in this pass.
- Keep selection separate from Navigation until there are enough recorded route choices and outcomes.

Evidence supporting this frontier read:

- The most recent inquiry findings on 2026-05-03 focus on Navigation warm-up, Navigation context intake, route-map output, continuation memory, and prior-map reading after v3.
- The current `homegrown/navigation/` files already include the 16-type route-map contract, showing that at least part of the May 3 route-map decision has been materialized.
- The current warm-up folder exists, but the latest post-v3 handoff and README/index are not visible in that folder.
- The current `artifact_materialization.md`, `outcome_review.md`, and `alignment_control.md` files exist, showing that the May 2 materialization and alignment-control decisions have partly moved from findings into protocols.
- The older book, `README copy.md`, and some `thinking_disciplines/` notes still refer to old layouts or earlier concepts, so current `homegrown/` protocols and active inquiry findings are more authoritative for operational claims.

## Honesty About State

Homegrown is active and internally thoughtful, but not fully synchronized.

Some documents are clearly stale. `README copy.md` and the book draft still talk about older command layouts. Older notes refer to ideas like `/wayfinding` or earlier folder conventions that have been replaced or absorbed. The current install scripts lag behind the current protocol surface.

Some current protocols are ahead of actual repeated use. Outcome review, artifact materialization, alignment dynamics, and Navigation warm-up are well specified, but the strongest evidence of success would be repeated use records and outcome reviews. Those are not yet clearly visible from the canonical inquiry findings alone.

The project is therefore best read as a living self-improvement lab: much more than notes, less than a finished autonomous system, and currently centered on making Navigation, materialization, and outcome learning carry more of the user's burden.
