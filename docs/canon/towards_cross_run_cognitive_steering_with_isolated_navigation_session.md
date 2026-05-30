# Towards Cross-Run Cognitive Steering With An Isolated Navigation Session

> **Terminology note.** "Navigation session" is the **session-role** described here — an isolated AI session that runs `/routeman` against completed inquiry artifacts. It is distinct from `/routeman`, which is the **discipline** the session invokes. The two used to share the name "Navigator" before the `/navigation → /routeman` rename; the role-name is now "navigation session" to avoid confusion with the retired discipline name.

This note explains a concept that emerged from the Navigation Observer inquiry: Homegrown may need a separate navigation session whose job is not to solve the current inquiry, but to steer movement across many inquiries.

The core idea is simple:

> A worker MVL session solves one local question. An isolated navigation session watches the artifacts created by those runs and asks where the system should move next.

This is cross-run cognitive steering. It is not just better prompting inside one run. It is a role separation between local reasoning and movement through the project's thinking space.

It also creates the missing architecture for **multihead MVL loops**. Multiple worker MVL sessions can explore different branches at the same time while one isolated navigation session watches their artifacts, compares their movement value, and recommends whether to deepen, stop, merge, or redirect each head.

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

The isolated navigation session exists to protect one cognitive function: movement-space attention.

This is why multihead MVL+ becomes plausible. Without a navigation session, multiple MVL+ heads are just parallel work. With a navigation session, they become coordinated probes moving through a shared thinking space.

## The Main Distinction

There are two different cognitive jobs:

```text
Worker session:
  Solve the current inquiry.
  Produce the best possible local artifact.

Navigation session:
  Read completed artifacts.
  Understand the system's position in the thinking space.
  Recommend the next useful movement.
```

The worker asks:

> How do we answer this question?

The navigation session (which runs `/routeman`) asks:

> Given what has already been produced, where can should the system move next? what are list of paths that is available as next step. 

This distinction is important because the worker's context is full of local details. Those details help the current answer, but they can distort navigation. The navigation session should not be bloated by every side path of the worker. It should read durable artifacts and focus on movement.

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

The isolated navigation session gives multihead MVL a coordination layer:

```text
Multiple MVL worker heads -> produce artifacts
Navigation session -> Enumerates movement value across heads
Selector -> commits which head to deepen, merge, stop, or redirect
Meta-loop runner -> executes the selected movement
```

This turns multihead MVL from parallel duplication into structured exploration. The navigation session can ask:

- Which head produced genuinely new movement?
- Which head is repeating known material?
- Which head opened the strongest frontier?
- Which heads should be merged?
- Which head should be stopped because it is spinning?
- Which branch should become the next main line?

This is one of the strongest reasons to isolate navigation. Multihead loops need a cross-head observer; otherwise the system has many probes but no shared sense of direction.

## What The Navigation Session Is

The navigation session is a context-isolated AI session that runs `/routeman` and:

- reads inquiry artifacts;
- maps movement-space;
- identifies candidate next moves;
- names blockers and gates;
- explains excluded directions;
- tracks selected moves and outcomes;
- can run MVL internally for hard Navigation decisions;
- produces auditable Navigation artifacts.

The navigation session is not automatically a full autonomous controller.

In the early levels, it does not own final selection. It recommends. A human or explicit selector commits.





## What The Navigation Session Reads

The navigation session should be artifact-first. Its main inputs are not raw chat transcripts.

Primary inputs:

- `_branch.md`
- `_state.md`
- `finding.md`
- `docarchive/` discipline outputs
- relationship links between inquiries
- user correction or extra context when explicitly supplied
- future navigation memory or graph files

This makes navigation auditable. A later reader can ask: what did the navigation session see, and why did it recommend this move?

## Navigation-Session Warming

Navigation-session warming is a separate concern from navigation itself.

Warming means preparing the isolated navigation session with enough project understanding to make good movement decisions. Navigation means using that warmed understanding to map possible next moves. Selection means committing one move. Execution means running the next MVL or meta-loop action.

The distinction:

```text
Warming -> understand the terrain
Navigation -> map possible movement through the terrain
Selection -> commit one movement
Execution -> run the committed movement
```

This matters because reading only the target `finding.md` or only navigation-related diaries is not enough. A navigation session that does not understand the codebase can produce tidy movement maps that miss what is actually being built.

Navigation-session warming should include:

- **Codebase orientation:** read the top-level project structure and understand it.  `
- **Long-run trajectory:** read inquiry folders finding.md files  that explain where the project is trying to evolve.
- **Recent trajectory:** scan recent inquiry folders by datetime prefix to see what has been developed recently.
- **Last-2-days trajectory:** inspect the most recent inquiry folders and changed files so the navigation session knows the active frontier.
- **Target inquiry read:** read the exact source inquiry or auto-selected latest inquiry that triggered Navigation.


The warmed context should not be tried to mapped. It is a context and time waste. Most that could be done is 3 stage warming up, first is generic, second is technical, third is regarding short term goal.   


The failure mode to avoid is cold navigation:

> The navigation session reads the latest finding, understands the local words, but does not understand the project well enough to know what move matters.







