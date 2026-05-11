---
status: active
refines: devdocs/inquiries/2026-04-28_09-42__advanced_navigation_and_thinking_space_ui/finding.md
---
# Finding: Navigation Observer Session Architecture

## Changes from Prior

**What's preserved:** The prior finding `devdocs/inquiries/2026-04-28_09-42__advanced_navigation_and_thinking_space_ui/finding.md` remains correct that current Navigation is not deep enough for meta-loop-grade traversal. It also remains correct that Homegrown should move through staged Navigation depth before building a thinking-space UI.

**What's changed:** The missing mechanism is clearer now. Advanced Navigation should not only be a stronger command inside the same worker session. It should become a separate observer role that protects movement-space attention from local inquiry context.

**What's new:** This finding introduces the **Navigation Observer**: a context-isolated AI role or session that reads MVL inquiry artifacts, builds movement-space maps, can use MVL+ internally for hard Navigation decisions, and recommends next moves without committing them in v1.

**Migration:** Treat the prior advanced Navigation ladder as the method improvement path. Treat this finding as the role architecture around that method. Build protocol-first observer reports before attempting a live persistent observer session.

## Question

Does it make sense for advanced Navigation to be a separate AI session that observes MVL-running sessions, reads their artifacts, runs its own MVL+ decision loop on movement through thinking space, and manages Navigation without being bloated by the main session's task context?

The goal is to decide whether this separate Navigation observer or supervisor architecture is a breakthrough-worthy direction, what it would solve, what risks it introduces, how it relates to Navigation, selector, and meta-loop roles, and what minimum staged implementation is sensible.

## Finding Summary

- Yes, the separate-session idea makes sense. It is one of the strongest architecture candidates so far for making Navigation deep enough to support a meta-loop.

- The better name is **Navigation Observer**, not "Navigation manager." In v1 it should observe, map, and recommend. It should not autonomously choose and launch the next MVL run.

- The observer's core job is movement-space perception. It reads completed inquiry artifacts, understands where the project is in the thinking-space, identifies plausible next moves, names blockers, explains excluded directions, and records confidence.

- The clean role split is: worker MVL session solves the current inquiry; Navigation Observer maps possible movement; selector commits one move; meta-loop runner executes the committed move and records traversal state.

- The observer can run MVL+ internally when the movement-space is complex. This does not make Navigation identical to MVL+. MVL+ is the reasoning engine; Navigation remains the output domain.

- The observer should be artifact-first. It should read `_branch.md`, `_state.md`, `finding.md`, archived discipline outputs, related inquiry links, and future graph or memory files. It should not depend on raw chat transcripts as its main input.

- The first implementation should be protocol-first. Create a repeatable `navigation_observer.md` report before building a long-lived separate AI session.

- The idea is potentially breakthrough-level for Homegrown, but not proven. It becomes evidence-backed only if observer reports improve next-move quality across several real inquiry chains.

## Finding

### 1. What Is Being Proposed

The proposed architecture is a separate AI role that watches the outputs of MVL or MVL+ inquiry runs and focuses only on movement through the thinking-space.

In Homegrown, an MVL or MVL+ run produces inquiry artifacts such as `_branch.md`, `_state.md`, discipline outputs, and `finding.md`. Those artifacts are a durable record of what was asked, what was reasoned through, what survived critique, and what remains open.

The Navigation Observer would read those artifacts and ask a different question from the worker session. The worker asks, "How do we answer this inquiry?" The observer asks, "Given this inquiry and its relationship to prior work, where should the system move next?"

That distinction matters. Local problem-solving and cross-run movement-space perception are different cognitive jobs. Keeping them in the same session can work for small cases, but it becomes fragile when there are many inquiry folders, correction chains, branches, and strategic "what next?" decisions.

### 2. Why A Separate Observer Helps

The first benefit is context isolation. A worker MVL+ session accumulates task-specific details while answering one question. That context is useful for the current inquiry, but it can pollute Navigation because Navigation needs to compare positions, branches, open questions, and future moves across inquiries.

The second benefit is protected attention. Navigation should not be a shallow appendix after the real work. For meta-loop-grade traversal, Navigation must understand non-obvious moves, blockers, dependencies, excluded directions, and weak signals. A separate observer gives that work its own attention budget.

The third benefit is cross-run continuity. A worker session can solve one inquiry and end. A Navigation Observer can maintain or update durable movement memory: which moves were recommended, which were selected, which were useful, which were blocked, and which branches got superseded.

The fourth benefit is future UI readiness. A thinking-space UI needs real nodes, edges, statuses, and outcomes. A Navigation Observer is the natural role to produce those graph-like records, but the UI should wait until those records have substance.

### 3. Why It Should Not Be A Full Manager Yet

The user's wording included "observing and managing other AI sessions." The observing part is right for v1. The managing part is too broad unless it is defined carefully.

Management can mean selecting the next move, launching the next MVL run, stopping bad branches, merging branches, editing fundamentals, or controlling another session's runtime. Those are not all Navigation tasks.

Selection is especially different from Navigation. Navigation can map and rank candidate moves, but selection depends on values, risk tolerance, cost, strategic taste, and timing. Homegrown does not yet have enough outcome evidence or explicit valuation logic for the observer to select autonomously.

The safer v1 boundary is:

```text
Worker MVL+ session -> produces inquiry artifacts
Navigation Observer -> maps movement-space and recommends moves
Human or explicit selector -> commits one move
Meta-loop runner -> executes the committed move and records state
```

This keeps the observer powerful without turning it into an unvalidated controller.

### 4. How The Observer Uses MVL+

The observer can use MVL+ internally when Navigation is hard. That means it can run exploration, sensemaking, decomposition, innovation, and critique over a movement-space question.

For example, the observer's internal question might be: "Given these three related findings, this user correction, and these unresolved blockers, what are the viable next movements through the inquiry space?"

The output should still be a Navigation artifact. It should not be a normal domain `finding.md`. The expected output is a Navigation Observer report containing current position, movement map, candidate next moves, blockers, excluded directions, confidence limits, and selection status.

This resolves the apparent contradiction between "Navigation is a separate discipline" and "Navigation needs MVL+-level depth." MVL+ can be the reasoning engine. Navigation remains the target domain and output contract.

### 5. Minimum Viable Architecture

The minimum useful architecture does not require a permanently running second AI session yet.

The first version should be protocol-first:

```text
1. Complete an MVL+ inquiry.
2. Run a Navigation Observer protocol on the completed inquiry folder and relevant related folders.
3. Write navigation_observer.md.
4. Human or explicit selector chooses one recommended move.
5. Record the selected move and outcome in lightweight navigation memory.
```

The observer report should include:

- **Read Set:** exact artifacts read.
- **Current Position:** what the inquiry changed in the thinking-space.
- **Movement Map:** plausible next moves and their relationships.
- **Recommended Moves:** ranked candidates with reasons.
- **Excluded Directions:** paths considered but rejected.
- **Blockers and Gates:** prerequisites before movement.
- **Confidence Limits:** missing context and uncertainty.
- **Selection Status:** uncommitted unless a human or explicit selector has chosen.
- **Outcome Hook:** what evidence would later show whether the selected move helped.

This report is the testable unit. If it is valuable manually, it can later become a live separate session.

### 6. When To Trigger The Observer

The observer should not necessarily run after every tiny inquiry. That would create ceremony and compute overhead.

Good triggers are:

- a strategic "what next?" question from the user;
- multiple plausible next moves;
- correction chains where a later MVL run improves a prior weak one;
- fundamentals-related inquiries;
- blockers or gates;
- low confidence in a cheap Navigation map;
- many excluded directions;
- active meta-loop traversal;
- repeated branch waste or repeated user corrections.

Those triggers keep the observer focused on moments where movement quality matters.

### 7. Honest Opinion

This is a strong architecture idea. It is more than a naming change and more than prompt library layering. It creates a real separation between local reasoning and cross-run cognitive steering.

It may be breakthrough-level for Homegrown because it gives the meta-loop "eyes" that are not trapped inside the worker's local context. It also gives the future thinking-space UI a real data producer instead of a decorative visualization target.

But the design is not proven. It is a hypothesis about architecture. The proof would be repeated observer reports that help choose better next moves, reduce wasted MVL branches, clarify correction chains, and produce useful movement memory.

The right move is not to build a full autonomous observer immediately. The right move is to make a small, auditable observer protocol and dogfood it on real inquiries.

## Next Actions

### MUST

- **What:** Define a protocol-first Navigation Observer report format.
  **Who:** `homegrown/protocols/navigation_observer.md` or a later `homegrown/navigation-observer/SKILL.md`.
  **Gate:** Before building a persistent observer session.
  **Why:** It creates the artifact contract that proves whether the observer role is useful.

- **What:** Upgrade current Navigation toward N2 deep movement-space analysis.
  **Who:** `homegrown/navigation/SKILL.md` and `homegrown/navigation/references/navigation.md`.
  **Gate:** Before expecting observer reports to handle complex movement decisions.
  **Why:** The observer needs a deep Navigation method, not only a separate context.

- **What:** Dogfood the observer protocol on 3 to 5 completed MVL+ inquiries.
  **Who:** Human-led MVL+ runs using the observer protocol.
  **Gate:** Before creating a live long-lived observer session.
  **Why:** The architecture should earn promotion through real movement-quality evidence.

- **What:** Record selected move outcomes in a lightweight navigation memory.
  **Who:** The observer protocol or meta-loop runner.
  **Gate:** Start once the first observer report is used for an actual selected move.
  **Why:** Outcome memory is the empirical substrate for future autonomous selection.

### COULD

- **What:** Add optional graph fields to observer reports.
  **Who:** Navigation Observer protocol.
  **Gate:** After at least 3 observer reports produce stable move candidates.
  **Why:** This prepares real data for a future thinking-space UI.

- **What:** Sketch a static thinking-space visualization from saved observer reports.
  **Who:** Future UI work.
  **Gate:** After graph fields exist in several real reports.
  **Why:** A UI should visualize real traversal data, not invented structure.

### DEFERRED

- **What:** Run a live persistent Navigation Observer session.
  **Gate:** Revive after 3 to 5 protocol-first observer reports are useful enough that continuity becomes the limiting factor.
  **Why (if revived):** A persistent session may maintain cross-run attention better than repeated manual invocations.

- **What:** Let the observer autonomously select and launch MVL runs.
  **Gate:** Revive only after outcome memory shows observer recommendations are reliably useful and a selector contract exists.
  **Why (if revived):** It could increase traversal speed, but only after selection values are explicit.

- **What:** Build the full interactive thinking-space UI.
  **Gate:** Revive after navigation memory contains meaningful nodes, edges, statuses, and outcomes.
  **Why (if revived):** The UI can become instrumentation for traversal, not decoration.

## Reasoning

The separate Navigation Observer role survived because it solves a real structural problem: the worker session and Navigation need different attention modes. The worker should solve the current inquiry. The observer should understand movement across inquiries.

The protocol-first implementation survived as the best immediate path because it tests the real claim before adding runtime complexity. If a manual observer report is not useful, a live observer session will only make the failure more expensive.

The artifact-first read contract survived because it makes observation auditable. The observer should record exactly what it read and what context was missing. Raw transcript observation was killed as the primary mode because it imports context bloat and makes later audit difficult. Explicit extra context can still be passed when needed.

The navigation-focused MVL+ internal loop survived with refinement. It should be an escalation path, not the default for every tiny Navigation decision. A useful tiering is N1 cheap map, N2 deep Navigation, N3 graph-native Navigation, and N4 navigation-focused MVL+ sub-inquiry.

The explicit selector boundary survived as a critical constraint. The observer can recommend, rank, and explain. It should not silently commit moves in v1 because selection depends on values and outcome evidence that the current system does not yet possess.

Outcome-tracked navigation memory survived because it is the bridge from interesting architecture to empirical improvement. Without outcome records, Homegrown cannot learn whether Navigation actually improves traversal.

Graph-native state survived as a later substrate. It should not lead the build. Graphs and UI become useful after observer reports produce real move candidates and outcomes.

Observer-as-autonomous-selector was killed for the current stage. It is attractive because it feels like autonomy, but it collapses Navigation, valuation, and execution before there is evidence that the recommendations are reliable.

Observer-as-full-meta-loop-runner was killed for v1. A full meta-loop runner must execute selected moves, track branch state, decide stop or continue, manage merges, and record outcomes. Those responsibilities should not be hidden inside the observer before the observer itself is validated.

UI-first thinking-space visualization was deferred. A UI is a good idea after meaningful graph data exists. Before that, it risks making weak maps look more real than they are.

The main contradiction reconciled across the loop was this: Navigation needs MVL+-level depth, but Navigation should not become just another MVL+ finding loop. The resolution is that MVL+ can be used internally as a reasoning engine while the observer's output remains Navigation-specific.

## Open Questions

### Monitoring

- After 3 to 5 observer reports, did they improve the user's next-move choice compared with ordinary MVL+ discussion or current Navigation?

- After 3 to 5 observer reports, how often did the observer identify a useful move the worker session would probably have missed?

- After 3 to 5 selected moves, how many selected moves were later judged useful, wasteful, blocked, superseded, or merged?

### Blocked

- The exact persistent-session wake policy is blocked until protocol-first observer reports show which triggers matter in practice.

- Automated selection is blocked until there is outcome memory and an explicit selector contract.

### Research Frontiers

- What is the best metric for "movement quality" in a thinking-space?

- What graph schema best represents inquiries, corrections, branches, blockers, and selected moves without becoming too heavy?

### Refinement Triggers

- Reopen the observer architecture if protocol-first reports are consistently shallow after 3 real uses.

- Reopen the artifact-first constraint if important Navigation decisions repeatedly require context absent from inquiry artifacts.

- Reopen the selector boundary only after at least 10 selected moves have outcome records that show observer recommendations are reliable enough to test constrained automation.
