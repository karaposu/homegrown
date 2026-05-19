# Towards Cross-Run Cognitive Steering With An Isolated Navigator Session

Source finding: `devdocs/inquiries/2026-04-28_10-18__navigation_observer_session_architecture/finding.md`

This note explains a concept that emerged from the Navigation Observer inquiry: Homegrown may need a separate Navigator session whose job is not to solve the current inquiry, but to steer movement across many inquiries.

The core idea is simple:

> A worker MVL+ session solves one local question. An isolated Navigator session watches the artifacts created by those runs and asks where the system should move next.

This is cross-run cognitive steering. It is not just better prompting inside one run. It is a role separation between local reasoning and movement through the project's thinking space.

It also creates the missing architecture for **multihead MVL+ loops**. Multiple worker MVL+ sessions can explore different branches at the same time while one isolated Navigator watches their artifacts, compares their movement value, and recommends whether to deepen, stop, merge, or redirect each head.

## Why This Matters

Homegrown is increasingly treating MVL+ as an atomic cognitive operation. A single MVL+ run explores, sensemakes, decomposes, innovates, critiques, and concludes into a `finding.md`.

But once many MVL+ runs exist, a new problem appears:

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

The Navigator asks:

> Given what has already been produced, where should the system move next?

This distinction is important because the worker's context is full of local details. Those details help the current answer, but they can distort Navigation. The Navigator should not be bloated by every side path of the worker. It should read durable artifacts and focus on movement.

## Why This Enables Multihead MVL+

Multihead MVL+ requires a role that can compare across heads.

Each head can run a normal MVL+ loop:

```text
Head A -> explores one branch
Head B -> explores a competing frame
Head C -> deepens a blocker
Head D -> revisits an older finding
```

But the heads themselves should not each decide the global direction. If every worker head tries to steer the whole system, the architecture becomes noisy and self-conflicting.

The isolated Navigator gives multihead MVL+ a coordination layer:

```text
Multiple MVL+ worker heads -> produce artifacts
Navigator -> compares movement value across heads
Selector -> commits which head to deepen, merge, stop, or redirect
Meta-loop runner -> executes the selected movement
```

This turns multihead MVL+ from parallel duplication into structured exploration. The Navigator can ask:

- Which head produced genuinely new movement?
- Which head is repeating known material?
- Which head opened the strongest frontier?
- Which heads should be merged?
- Which head should be stopped because it is spinning?
- Which branch should become the next main line?

This is one of the strongest reasons to isolate Navigation. Multihead loops need a cross-head observer; otherwise the system has many probes but no shared sense of direction.

## What The Navigator Is

The Navigator is a context-isolated AI role or session that:

- reads inquiry artifacts;
- maps movement-space;
- identifies candidate next moves;
- names blockers and gates;
- explains excluded directions;
- tracks selected moves and outcomes;
- can run MVL+ internally for hard Navigation decisions;
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

Warming means preparing the isolated Navigator session with enough project understanding to make good movement decisions. Navigation means using that warmed understanding to map possible next moves. Selection means committing one move. Execution means running the next MVL+ or meta-loop action.

The distinction:

```text
Warming -> understand the terrain
Navigation -> map possible movement through the terrain
Selection -> commit one movement
Execution -> run the committed movement
```

This matters because reading only the target `finding.md` or only Navigation-related diaries is not enough. A Navigator that does not understand the codebase can produce tidy movement maps that miss what is actually being built.

Navigator Warming should include:

- **Codebase orientation:** read the top-level project structure and understand what lives in `cognitive_harness/`, `devdocs/`, `docs/`, install scripts, and important runtime folders.
- **Fundamentals orientation:** understand current skills, protocols, MVL, MVL+, Navigation, meta-loop, loop diagnosis, and any other active cognitive primitives.
- **Long-run trajectory:** read stable concept docs that explain where the project is trying to evolve.
- **Recent trajectory:** scan recent inquiry folders by datetime prefix to see what has been developed recently.
- **Last-2-days trajectory:** inspect the most recent inquiry folders and changed files so the Navigator knows the active frontier.
- **Target inquiry read:** read the exact source inquiry or auto-selected latest inquiry that triggered Navigation.
- **Warm context output:** record what was warmed, what was skipped, and what confidence limits remain.

The warmed context should not become private invisible model memory only. It should be summarized in the Navigation Observer artifact or in a small durable context file so later runs can audit what the Navigator believed the terrain was.

Possible warmed-context artifacts:

```text
devdocs/navigation/navigator_context.md
devdocs/navigation/recent_trajectory.md
devdocs/navigation/navigation_memory.md
```

At early levels, these files may not exist yet. The Navigator can still include a `Warming Read Set` and `Warming Summary` inside `navigation_observer.md`.

The failure mode to avoid is cold Navigation:

> The Navigator reads the latest finding, understands the local words, but does not understand the project well enough to know what move matters.

## What The Navigator Writes

The first durable output should be something like `navigation_observer.md`.

Minimum sections:

- Read Set
- Current Position
- Movement Map
- Recommended Moves
- Excluded Directions
- Blockers and Gates
- Confidence Limits
- Selection Status
- Outcome Hook

This output is the testable unit. If `navigation_observer.md` is not useful manually, a live Navigator session will not magically become useful.

## Level 0 - Current Situation

Level 0 is informal and human-guided.

The human runs MVL+ loops, reads findings, notices when a result is weak, gives corrections, and launches another loop. This already creates a primitive form of cross-run steering, but the steering mostly lives in the human's head and in scattered inquiry artifacts.

Level 0 is useful, but it has limitations:

- no dedicated Navigation memory;
- no consistent next-move artifact;
- no outcome tracking;
- no isolated context for movement-space reasoning;
- no reliable way to compare possible next moves.

Level 0 proves the need. It is not the target architecture.

## Level 1 - Protocol-First Navigation Observer

Level 1 is the first real implementation level. It does not require a permanently running second AI session, but it should still use an isolated Navigator session for each observer run.

At this level, the Navigator is a protocol or skill that is manually invoked in a separate Navigator session after selected MVL+ inquiries. The worker session completes the inquiry and stops at artifacts. A fresh isolated Navigator session then reads the completed inquiry folder and related folders, then writes a Navigation Observer report.

v1 boundary is:

```text
Worker MVL+ session -> produces inquiry artifacts
Navigation Observer -> maps movement-space and recommends moves
Human or explicit selector -> commits one move
Meta-loop runner -> executes the committed move and records state
```

```text
1. Complete an MVL+ inquiry.
2. Start an isolated Navigator session and run a Navigation Observer protocol on the completed inquiry folder and relevant related folders.
3. Write navigation_observer.md.
4. Human or explicit selector chooses one recommended move.
5. Record the selected move and outcome in lightweight navigation memory.
```

Level 1 is intentionally modest, but it is still isolated. It tests whether a separate Navigator session can produce a useful Navigation Observer artifact before building persistent runtime complexity.

Level 1 should include a bounded warming step before Navigation. Because the session is fresh, it should quickly orient itself to the codebase, fundamentals, long-run trajectory, recent trajectory, and target inquiry before producing `navigation_observer.md`.

Level 1 warming can be explicit and human-directed:

```text
Warm Navigator with:
- codebase overview
- homegrown fundamentals
- enes concept docs
- recent inquiry folders
- target source inquiry
Then run Navigation Observer.
```

The key question at Level 1 is:

> Does the observer report help the human choose better next moves than ordinary ad hoc discussion?

Evidence for Level 1 success:

- observer reports identify useful moves the worker did not surface;
- observer reports reduce repeated correction loops;
- observer reports clarify why some directions should be excluded;
- selected moves can be traced back to observer recommendations;
- outcomes can be recorded without heavy maintenance.

Level 1 should keep the observer read-only by default. It can recommend, but it should not launch new MVL runs on its own.

Level 1 should not run the observer protocol inside the worker session that produced the finding. That would preserve the old context-bloat problem. The point of Level 1 is to test whether isolation itself improves Navigation quality, even before the Navigator becomes persistent.

### Level 1 Invocation Rule

At Level 1, the human should point the isolated Navigator session at the exact MVL+ output folder.

Example input shape:

```text
Run Navigation Observer on:
source_inquiry: devdocs/inquiries/YYYY-MM-DD_HH-MM__some_inquiry/
related_inquiries:
- devdocs/inquiries/YYYY-MM-DD_HH-MM__prior_related_inquiry/
- devdocs/inquiries/YYYY-MM-DD_HH-MM__correction_or_parent_inquiry/
extra_context: optional human correction or direction
```

This is deliberately explicit. The first version should not guess what "latest" means, because a wrong source inquiry would produce a wrong movement map.

Level 1 can still use folder timestamps as a human convenience, but the human chooses the folder. The Navigator records the chosen source path in `navigation_observer.md`.

## Level 1.5 - Latest-Aware Isolated Navigator

Level 1.5 is a small improvement before persistent Level 2.

At this level, the Navigator is still started as a fresh isolated session, but it can discover the default source inquiry by itself.

Level 1.5 can also perform a default warming scan by itself. It should still record the warming read-set and should stop or ask for help if the project terrain is ambiguous.

Default discovery rule:

```text
1. List devdocs/inquiries/.
2. Sort folders by YYYY-MM-DD_HH-MM__slug prefix.
3. Pick the newest folder whose _state.md says Status COMPLETE.
4. Treat that folder as the default source_inquiry.
5. Record the auto-selected source path in navigation_observer.md.
```

If discovery is ambiguous, the Navigator should ask for an explicit source instead of guessing.

Ambiguous cases:

- multiple candidate folders with the same datetime prefix;
- newest folder is not COMPLETE;
- the user says "latest related to X" and relation metadata is insufficient;
- the newest inquiry is clearly unrelated to the user's current goal;
- no datetime prefix exists on candidate folders.

Level 1.5 can also auto-include related inquiries when relationships are explicit in `_branch.md`, `_state.md`, or `finding.md`. It should not deep-scan the whole inquiry archive to infer relations unless the user asks for that.

Default warming rule:

```text
1. Read top-level project structure.
2. Read current Homegrown fundamentals relevant to Navigation and MVL+.
3. Read stable long-run concept docs in docs/ when relevant.
4. Scan recent inquiry folders by datetime prefix.
5. Scan last-2-days inquiry folders or changed files when available.
6. Read the selected source inquiry fully.
7. Record Warming Read Set and Warming Summary.
```

Level 1.5 answers the practical question:

> Can I just say "run Navigation Observer on the latest inquiry"?

Yes, but only after the inquiry folder naming convention is reliable and the Navigator records which folder it selected. For important or ambiguous work, explicit paths are still better.

## Level 2 - Persistent Isolated Navigator Session

Level 2 promotes the protocol into a persistent or semi-persistent Navigator session.

The Navigator now has its own protected context. It is still artifact-first, but it can remember recent movement concerns across runs without being mixed into the worker's task context.

At Level 2, warming starts becoming incremental. The Navigator should not rescan the whole project from zero every time. It should maintain a warmed context artifact and update it when new inquiries, code changes, or fundamentals changes appear.

Level 2 shape:

```text
Worker MVL+ session -> writes inquiry artifacts
Persistent Navigator session -> periodically reads new artifacts
Navigator session -> writes navigation_observer.md and updates navigation memory
Human or explicit selector -> commits one move
Meta-loop runner -> executes and records outcome
```

What changes from Level 1:

- the Navigator has continuity across multiple inquiry runs;
- it can reuse and update warmed project context;
- it can notice repeated patterns, such as correction chains or recurring blockers;
- it can maintain a lightweight `navigation_memory.md` or equivalent;
- it can compare new findings against prior Navigator recommendations;
- it can ask for missing context before recommending a move.

What stays the same:

- the Navigator still does not autonomously select and launch moves;
- artifacts remain the synchronization substrate;
- warming read-sets and confidence limits remain auditable;
- read-set and confidence limits remain mandatory;
- human or explicit selector still commits the next move.

Level 2 is useful when repeated manual observer invocations become the bottleneck.

Gate to enter Level 2:

> Level 1 should produce at least 3 to 5 useful observer reports where the report changed or improved the next move.

Level 2 failure mode:

> The Navigator becomes a second bloated session that reads everything and re-solves the worker's problem.

To avoid this, Level 2 must keep scoped reads and must distinguish "movement-space reasoning" from "local inquiry solving."

## Level 3 - Graph-Native Cross-Run Steering

Level 3 makes the Navigator graph-aware.

At this level, inquiry folders are no longer treated only as a flat archive. They become nodes in a thinking-space graph. Relationships such as `continues_from`, `corrects`, `supersedes`, `related`, `blocks`, `opens_question`, and `selected_next` become explicit edges.

Level 3 shape:

```text
Worker MVL+ sessions -> produce inquiry nodes
Navigator session -> maintains movement graph
Navigator session -> proposes branch, revisit, merge, deepen, or stop moves
Selector -> commits one or more moves
Meta-loop runner -> executes selected moves
Outcomes -> update graph state
UI -> visualizes the graph as instrumentation
```

What changes from Level 2:

- the Navigator can reason over inquiry topology, not just recent files;
- it can see old findings that should be revisited;
- it can detect correction chains;
- it can propose merges between branches;
- it can identify dead paths and blocked regions;
- it can produce graph data for a thinking-space UI.

At Level 3, Navigation can become deeper without always becoming more verbose. The graph carries memory that the model does not need to keep in raw context.

Level 3 also allows multi-run strategies:

- run one MVL+ to deepen a finding;
- run another to challenge it;
- run another to compare correction history;
- merge the results after critique;
- stop branches that produce low-value movement.

At this point, those strategies can become true multihead MVL+:

```text
Navigator selects a movement region
Meta-loop runner launches several MVL+ heads
Each head produces a finding
Navigator compares the heads through graph state and movement quality
Selector chooses merge, deepen, redirect, or stop
```

The Navigator is what lets the heads be different on purpose instead of accidental duplicates.

The Navigator may use MVL+ internally here, but only for high-complexity movement decisions. For example:

> Given this graph region, these blockers, and these correction chains, what movement should be selected next?

Level 3 evidence:

- graph edges help recover useful prior context;
- Navigator recommendations improve because of graph awareness;
- UI reveals real traversal structure rather than decorative maps;
- branch outcomes can be compared through recorded evidence.

Level 3 failure mode:

> Graph infrastructure becomes more impressive than the underlying reasoning quality.

The graph must stay subordinate to actual movement quality.

## Level 4 - Constrained Autonomous Cognitive Steering

Level 4 is where the Navigator can participate in bounded autonomy.

This does not mean one unconstrained agent controls everything. The better architecture still preserves separable roles:

```text
Navigator -> perceives movement-space
Selector -> commits moves under explicit policy
Meta-loop runner -> executes committed moves
Evaluator -> compares outcomes
Human -> sets goals, constraints, and override authority
```

At Level 4, some selection and execution can become automatic inside bounded conditions.

Example Level 4 flow:

```text
1. Navigator detects an open region in the inquiry graph.
2. Navigator proposes several candidate moves.
3. Selector applies explicit policy, budget, risk class, and confidence thresholds.
4. Meta-loop runner launches one or more MVL+ branches.
5. Navigator observes resulting artifacts.
6. Evaluator compares branch outcomes.
7. Weak branches are stopped or archived.
8. Strong branches are merged, deepened, or used to update fundamentals.
9. Human is escalated only for high-risk, low-confidence, or fundamentals-changing moves.
```

Level 4 makes the system feel closer to self-directed cognitive work because it can move across the thinking space without a human choosing every step.

But Level 4 requires evidence and constraints.

Required before Level 4:

- reliable observer reports;
- navigation memory with real outcomes;
- graph-native inquiry relationships;
- explicit selector policy;
- meaningful traversal signals;
- budget and stop conditions;
- risk classes for moves;
- human override and escalation rules.

Level 4 should be autonomous only within a bounded sandbox.

It may be allowed to:

- launch low-risk MVL+ branches;
- launch bounded multihead MVL+ batches;
- compare branch outputs;
- stop unproductive branches;
- recommend edits to protocols;
- create candidate fundamental changes in a separate branch;
- ask the original branch or human to evaluate competing branches.

It should not silently:

- edit fundamentals in the main branch;
- collapse all branches into one winner without evidence;
- treat confidence as proof;
- hide failed branches;
- convert Navigation recommendations into irreversible changes.

Level 4 is where evolutionary dynamics become plausible. Multiple branches can evolve different protocol changes, produce outputs, and be compared by evidence. The original branch can evaluate whether a mutated branch is actually superior for a given task class.

This is still not magic autonomy. It is bounded, artifact-based self-steering.

## Why The Ladder Matters

The levels prevent the project from confusing the destination with the next buildable step.

Level 1 asks:

> Can a protocol-first observer produce useful next-move artifacts?

Level 2 asks:

> Does persistent isolated context improve cross-run Navigation?

Level 3 asks:

> Does graph-native memory improve movement through the thinking space?

Level 4 asks:

> Can bounded selector and runner logic turn Navigation into constrained autonomous cognitive steering?

Each level earns the next one through evidence.

## What Would Count As Evidence

Evidence is not "the architecture sounds coherent."

Useful evidence would look like:

- a Navigator report recommends a move the human accepts;
- the selected move produces a better finding than the obvious next move;
- a correction chain becomes diagnosable because the Navigator preserved the relation between weak prior output, human correction, and improved later output;
- graph memory helps retrieve a relevant older finding that would otherwise be forgotten;
- the Navigator correctly says "do not branch yet, consolidate first";
- automated or semi-automated selection performs well on low-risk moves over repeated cases.

The claim being tested is:

> Isolated cross-run Navigation improves movement quality compared with ad hoc human-guided MVL chaining.

That is the empirical center of this concept.

## Open Design Questions

- What exact file should store lightweight navigation memory?
- Should `navigation_observer.md` live inside the source inquiry folder, the target inquiry folder, or a separate navigation folder?
- What is the minimal graph schema that captures useful relationships without becoming heavy?
- Which moves are low-risk enough for Level 4 automation?
- What metrics can approximate movement quality without self-confirming the system's own outputs?
- When should the Navigator ask for human context rather than infer from artifacts?

## Short Form

The isolated Navigator session is the first serious move from prompt-level reasoning toward cross-run cognitive steering.

It turns MVL+ findings into terrain.

It gives the meta-loop eyes that are not trapped inside the worker's local context.

It should begin as a protocol, become a persistent observer only after evidence, become graph-native after repeated reports, and become autonomous only inside explicit constraints.
