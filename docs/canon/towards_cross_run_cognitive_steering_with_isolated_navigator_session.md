# Towards Cross-Run Cognitive Steering With An Isolated Navigator Session

This note explains a concept that emerged from the Navigation Observer inquiry: Homegrown may need a separate Navigator session whose job is not to solve the current inquiry, but to steer movement across many inquiries.

The core idea is simple:

> A worker MVL session solves one local question. An isolated Navigator session watches the artifacts created by those runs and asks where the system should move next.

This is cross-run cognitive steering. It is not just better prompting inside one run. It is a role separation between local reasoning and movement through the project's thinking space.

It also creates the missing architecture for **multihead MVL loops**. Multiple worker MVL sessions can explore different branches at the same time while one isolated Navigator watches their artifacts, compares their movement value, and recommends whether to deepen, stop, merge, or redirect each head.

## Why This Matters

Homegrown is increasingly treating MVL as an atomic cognitive operation. A single MVL run explores, sensemakes, decomposes, innovates, critiques, and concludes into a `finding.md`.

But once many MVL runs exist, a new problem appears:

- Which findings are recent?
- Which findings corrected older findings?
- Which branches are open?
- Which directions were tried and wasted?
- Which directions should be revisited?
- Which moves would improve the fundamentals?
- When should the system stop, branch, merge, or go deeper?

A normal worker session can answer the current question, but it should not also be responsible for remembering and steering the whole inquiry terrain. That mixes two different jobs.

The isolated Navigator session exists to protect one cognitive function: movement-space attention.

This is why multihead MVL+ becomes plausible. Without a Navigator, multiple MVL+ heads are just parallel work. With a Navigator, they become coordinated probes moving through a shared thinking space.

## The Main Distinction

There are two different cognitive jobs:

```text
Worker session:
  Solve the current inquiry.
  Produce the best possible local artifact.

Navigator session:
  Read completed artifacts.
  Understand the system's position in the thinking space.
  Recommend the next useful movement.
```

The worker asks:

> How do we answer this question?

The Navigator(routeman) asks:

> Given what has already been produced, where can should the system move next? what are list of paths that is available as next step. 

This distinction is important because the worker's context is full of local details. Those details help the current answer, but they can distort Navigation. The Navigator should not be bloated by every side path of the worker. It should read durable artifacts and focus on movement.

## Why This Enables Multihead MVL+

Multihead MVL requires a role that can compare across heads.

Each head can run a normal MVL loop:

```text
Head A -> explores one branch
Head B -> explores a competing frame
Head C -> deepens a blocker
Head D -> revisits an older finding
```

But the heads themselves should not each decide the global direction. If every worker head tries to steer the whole system, the architecture becomes noisy and self-conflicting.

The isolated Navigator gives multihead MVL a coordination layer:

```text
Multiple MVL worker heads -> produce artifacts
Navigator -> Enumerates movement value across heads
Selector -> commits which head to deepen, merge, stop, or redirect
Meta-loop runner -> executes the selected movement
```

This turns multihead MVL from parallel duplication into structured exploration. The Navigator can ask:

- Which head produced genuinely new movement?
- Which head is repeating known material?
- Which head opened the strongest frontier?
- Which heads should be merged?
- Which head should be stopped because it is spinning?
- Which branch should become the next main line?

This is one of the strongest reasons to isolate Navigation. Multihead loops need a cross-head observer; otherwise the system has many probes but no shared sense of direction.

## What The Navigator (routeman) Is

The Navigator is a context-isolated AI role or session that:

- reads inquiry artifacts;
- maps movement-space;
- identifies candidate next moves;
- names blockers and gates;
- explains excluded directions;
- tracks selected moves and outcomes;
- can run MVL internally for hard Navigation decisions;
- produces auditable Navigation artifacts.

The Navigator is not automatically a full autonomous controller.

In the early levels, it does not own final selection. It recommends. A human or explicit selector commits.





## What The Navigator Reads

The Navigator should be artifact-first. Its main inputs are not raw chat transcripts.

Primary inputs:

- `_branch.md`
- `_state.md`
- `finding.md`
- `docarchive/` discipline outputs
- relationship links between inquiries
- user correction or extra context when explicitly supplied
- future navigation memory or graph files

This makes Navigation auditable. A later reader can ask: what did the Navigator see, and why did it recommend this move?

## Navigator Warming

Navigator Warming is a separate concern from Navigation itself.

Warming means preparing the isolated Navigator session with enough project understanding to make good movement decisions. Navigation means using that warmed understanding to map possible next moves. Selection means committing one move. Execution means running the next MVL or meta-loop action.

The distinction:

```text
Warming -> understand the terrain
Navigation -> map possible movement through the terrain
Selection -> commit one movement
Execution -> run the committed movement
```

This matters because reading only the target `finding.md` or only Navigation-related diaries is not enough. A Navigator that does not understand the codebase can produce tidy movement maps that miss what is actually being built.

Navigator Warming should include:

- **Codebase orientation:** read the top-level project structure and understand it.  `
- **Long-run trajectory:** read inquiry folders finding.md files  that explain where the project is trying to evolve.
- **Recent trajectory:** scan recent inquiry folders by datetime prefix to see what has been developed recently.
- **Last-2-days trajectory:** inspect the most recent inquiry folders and changed files so the Navigator knows the active frontier.
- **Target inquiry read:** read the exact source inquiry or auto-selected latest inquiry that triggered Navigation.


The warmed context should not be tried to mapped. It is a context and time waste. Most that could be done is 3 stage warming up, first is generic, second is technical, third is regarding short term goal.   


The failure mode to avoid is cold Navigation:

> The Navigator reads the latest finding, understands the local words, but does not understand the project well enough to know what move matters.







