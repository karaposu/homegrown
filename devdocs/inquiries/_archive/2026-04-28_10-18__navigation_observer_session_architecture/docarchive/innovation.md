# Innovation: Navigation Observer Session Architecture

## User Input

`devdocs/inquiries/2026-04-28_10-18__navigation_observer_session_architecture/_branch.md`

## Seed

The seed is a dissatisfaction and collision:

- Current Navigation is not deep enough to prevent wasted MVL branches.
- MVL+ is the atomic inquiry loop, but a worker MVL+ session gets bloated by local task context.
- The user proposes a separate Navigation session that observes artifacts and focuses only on movement through thinking space.

The innovation pressure is: create a way for Navigation to become deep and continuous without prematurely becoming an unvalidated autonomous controller.

## Mechanism 1 - Lens Shifting

### Generic Variation

Evaluate Navigation not as a command, but as a cognitive role.

- Novelty: Medium.
- Survival: Strong. It explains why a separate session may matter.
- Fertility: High. Opens observer, selector, and runner roles.
- Actionability: High.
- Mechanism independence: Supported by decomposition.

**Verdict:** Survives.

### Focused Variation

Evaluate Navigation under meta-loop conditions: many inquiry folders, branches, corrections, and possible next moves.

Under that lens, a shallow in-session Navigation command is insufficient. A Navigation Observer becomes plausible because the task is no longer "what next after this output?" but "where is the system in the thinking-space?"

**Verdict:** Survives strongly.

### Contrarian Variation

Evaluate the observer under scarcity conditions: limited context, limited compute, high overhead.

Under this lens, a live persistent observer may be premature. The right first move is a protocol-first observer report.

**Verdict:** Refines the design. Persistent observer is delayed.

## Mechanism 2 - Combination

### Generic Variation

Combine Navigation + MVL+ + artifact store.

Result: Navigation can use MVL+ internally over artifacts while still producing a Navigation artifact rather than a normal finding.

**Verdict:** Survives.

### Focused Variation

Combine:

- Navigation as eyes;
- meta-state as memory;
- human selector as valuation;
- MVL+ worker as probe.

Result: a four-part traversal architecture:

```text
Worker MVL+ -> Artifact Store -> Navigation Observer -> Selector -> Meta-loop Runner
```

**Verdict:** Survives strongly.

### Contrarian Variation

Combine observer + selector + runner into one "supervisor agent."

Result: a powerful agent that observes, decides, launches, and records.

Strong objection: this hides selection values and creates autonomous control before evidence exists.

**Verdict:** Killed for v1. May return only after selector and evaluation contracts exist.

## Mechanism 3 - Inversion

### Generic Variation

Invert: "Navigation should be inside the same session."

Opposite: Navigation should be outside the worker session.

Implication: the outside role gains protected attention and can preserve cross-run state.

**Verdict:** Survives.

### Focused Variation

Invert: "Navigation manages other sessions."

Opposite: Navigation does not manage sessions; it only perceives and maps movement-space.

Implication: management belongs to meta-loop runner; commitment belongs to selector.

**Verdict:** Survives as a crucial safety refinement.

### Contrarian Variation

Invert again: "Separate observer reduces context bloat."

Opposite: a separate observer can become the new bloated context if it reads everything.

Implication: the observer needs scoped reads, read-set recording, and artifact summaries.

**Verdict:** Survives as a constraint.

## Mechanism 4 - Constraint Manipulation

### Generic Variation

Add constraint: observer is read-only by default.

This makes the architecture safer while still allowing maps and recommendations.

**Verdict:** Survives.

### Focused Variation

Add constraint: observer must produce `navigation_observer.md` with read-set, candidate moves, excluded directions, confidence, and selection status.

This converts fuzzy session behavior into auditable artifacts.

**Verdict:** Survives strongly.

### Contrarian Variation

Remove constraint: observer can launch MVLs autonomously.

This increases speed but removes the selector boundary. Without outcome evidence, it is structurally premature.

**Verdict:** Killed for v1.

## Mechanism 5 - Absence Recognition

### Generic Variation

Missing thing: an artifact contract for Navigation Observer.

Current system has inquiry artifacts and Navigation skill, but no observer-specific read/write contract.

**Verdict:** Survives.

### Focused Variation

Missing thing: movement outcome tracking.

The observer can recommend paths, but the system needs to know later whether the chosen path was useful, wasteful, superseded, blocked, or merged.

**Verdict:** Survives strongly.

### Contrarian Variation

Missing thing: refusal-to-navigate state.

Sometimes the correct Navigation output is "do not branch yet; the current inquiry needs correction or synthesis."

**Verdict:** Survives. Add as a possible move type.

## Mechanism 6 - Domain Transfer

### Generic Variation

Transfer from operating systems: separate scheduler/monitor from worker process.

The observer resembles a scheduler/monitor: it inspects process outputs and recommends what should run next.

**Verdict:** Survives as analogy, not direct implementation.

### Focused Variation

Transfer from scientific research programs: a principal investigator or lab notebook tracks research direction while individual experiments generate data.

The Navigation Observer is closer to lab-direction cognition than task execution.

**Verdict:** Survives. It supports the artifact-first design.

### Contrarian Variation

Transfer from over-managed organizations: too many supervisors can slow execution and create reporting overhead.

Implication: observer should only trigger on complex movement-space conditions, not after every tiny run forever.

**Verdict:** Refines. Add escalation tiers.

## Mechanism 7 - Extrapolation

### Generic Variation

If inquiry folders grow rapidly, the cognitive burden shifts from answering one inquiry to understanding the trajectory across many inquiries.

**Verdict:** Survives.

### Focused Variation

If Homegrown evolves toward a meta-loop whirl, it needs persistent perception over branches, corrections, and open questions.

The observer becomes the natural owner of that perception.

**Verdict:** Survives strongly.

### Contrarian Variation

If persistent observer is built too early, it may create a false feeling of advanced autonomy while still producing shallow or unvalidated maps.

**Verdict:** Survives as staging constraint.

## Survivor Set

### Survivor A: Navigation Observer Role

A separate context-isolated role/session that reads MVL artifacts and produces movement-space maps and recommendations.

**Status:** Survives.

### Survivor B: Protocol-First Observer Mode

Before a live session exists, run a manual observer protocol after selected MVL+ inquiries.

**Status:** Strongest immediate survivor.

### Survivor C: Navigation-Focused MVL+ Internal Loop

The observer can run MVL+ internally when movement-space complexity is high, but its output remains Navigation-specific.

**Status:** Survives with escalation rules.

### Survivor D: Artifact-First Read Contract

The observer reads `_branch.md`, `_state.md`, `finding.md`, `docarchive/`, related inquiry links, and graph/memory files when present. It records what it read.

**Status:** Survives strongly.

### Survivor E: Explicit Selector Boundary

The observer recommends; human or explicit selector commits.

**Status:** Survives strongly.

### Survivor F: Outcome-Tracked Navigation Memory

Each selected movement should eventually record whether it helped, failed, got superseded, merged, or led to a useful correction.

**Status:** Survives.

### Survivor G: Graph-Native State

Navigation maps should eventually emit nodes and edges usable by a thinking-space UI.

**Status:** Survives later, not first.

## Killed or Deferred Candidates

### Killed for v1: Observer as Autonomous Selector

It is attractive but premature. It collapses mapping and valuing before the system has empirical outcome evidence.

### Killed for v1: Observer as Full Meta-loop Runner

The observer does not need execution control to be useful. Runner duties should remain separate.

### Killed: Raw Transcript Observer

This imports context bloat and makes observation hard to audit. Artifacts should be primary.

### Deferred: Live Persistent Observer Session

Potentially valuable, but only after protocol-first reports show repeated utility.

### Deferred: UI-First Thinking-Space Dashboard

Useful later. Dangerous first, because visualizing weak maps can make weak maps look real.

## Assembly Check

The strongest assembled design is:

```text
1. Worker MVL+ session solves a local inquiry.
2. Worker writes normal inquiry artifacts.
3. Navigation Observer reads a scoped artifact set.
4. Observer runs cheap Navigation or deep navigation-focused MVL+ depending on complexity.
5. Observer writes navigation_observer.md:
   - read-set
   - current position
   - movement-space map
   - candidate next moves
   - excluded directions
   - confidence
   - risks
   - recommended move(s)
   - selection status
   - expected evidence to evaluate outcome
6. Human or explicit selector commits one move.
7. Meta-loop runner executes the committed move.
8. Outcome is written back into navigation memory.
```

This assembly has emergent value because none of the pieces alone gives Homegrown cross-run cognitive steering. The value appears from combining artifact-native observation, deep Navigation, explicit selection, and outcome memory.

## Proposed Stages

### Stage 0 - Patch Navigation Depth

Improve current Navigation toward N2 deep movement-space analysis.

### Stage 1 - Protocol-First Navigation Observer

Create a protocol or skill that generates `navigation_observer.md` for a completed inquiry folder.

### Stage 2 - Dogfood on Real Runs

Use it on several recent MVL+ inquiries, especially correction chains and "what next?" moments.

### Stage 3 - Add Simple Navigation Memory

Track recommended moves, selected moves, outcome, and relationship edges.

### Stage 4 - Persistent Observer Session

Only after useful protocol outputs exist, run a separate observer session that periodically reads artifact updates.

### Stage 5 - UI / Graph Visualization

Visualize thinking-space traversal after graph data has substance.

### Stage 6 - Explicit Selector Automation

Only after outcome evidence, consider letting a selector commit moves under constrained conditions.

## Innovation Telemetry

- **Generators applied:** 4/4
- **Framers applied:** 3/3
- **Convergence:** YES. Multiple mechanisms converge on protocol-first Navigation Observer with selector boundary.
- **Survivors tested:** 7/7 survivor classes tested.
- **Failure modes observed:** None. The uncomfortable autonomous-selector variant was tested and rejected for v1 rather than ignored.
- **Overall: PROCEED**
