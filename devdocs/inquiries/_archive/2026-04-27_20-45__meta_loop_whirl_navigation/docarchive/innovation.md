# Innovation: Meta Loop Whirl Navigation

## User Input

`devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/_branch.md`

## Seed

The seed is the user's metaphor:

> The meta-loop is like a whirl. Once started, it consumes artifacts, moves in any direction, creates new artifacts by running MVLs, traverses thinking space, and uses Navigation as its eyes.

The innovation challenge is to preserve the metaphor's power while making it architecturally clean enough to guide implementation.

## Direction and Valuation

The valuable output is a rephrase that is:

- vivid enough to keep the user's intuition alive;
- precise enough to prevent overclaiming autonomy;
- compatible with current Navigation;
- useful for future runner design.

## Mechanism Outputs

### 1. Lens Shifting

Current lens: "meta-loop as a loop runner."

- **Generic variation:** A meta-loop is a runner that repeatedly invokes MVL+ until a stopping rule fires.
- **Focused variation:** A meta-loop is a traversal engine that uses MVL+ runs as probes through an artifact landscape.
- **Contrarian variation:** A meta-loop is not a loop at all; it is a graph walker over inquiry artifacts.

Survival note: the focused variation is strongest. It keeps "loop" as implementation but shifts the concept from repetition to traversal.

### 2. Combination

Combined concepts: whirl, artifact terrain, Navigation, MVL+, meta-state, meaningful traversal.

- **Generic variation:** The meta-loop consumes findings and emits new findings.
- **Focused variation:** The meta-loop consumes artifact terrain, uses Navigation to perceive possible movements, uses MVL+ to probe selected movements, and updates meta-state after each move.
- **Contrarian variation:** The meta-loop should consume not only inquiry artifacts but also failed prompts, human corrections, code changes, and external observations.

Survival note: the focused variation is the best current assembly. The contrarian variation is fertile but too broad for v1.

### 3. Inversion

Assumption: a loop moves forward.

- **Generic variation:** A meta-loop can move backward by revisiting earlier findings.
- **Focused variation:** Backward motion is not failure; it is a valid operation when new artifacts change the status of older claims.
- **Contrarian variation:** The most important movement may be backward, because self-improvement often depends on discovering where prior reasoning went wrong.

Survival note: focused plus contrarian together are important. The meta-loop must treat backward links as first-class, not as exceptions.

### 4. Constraint Manipulation

Constraints tested: avoid overclaiming, preserve artifact-native operation, keep v1 buildable.

- **Generic variation:** Remove constraints and let the meta-loop roam freely across all project artifacts.
- **Focused variation:** Add a goal-boundary constraint: the meta-loop traverses only the region relevant to its seed and stops when meaningful traversal is sufficient.
- **Contrarian variation:** Add a hard budget: the meta-loop can only take one move per run until traversal metrics exist.

Survival note: the focused variation gives the best conceptual boundary. The contrarian variation is useful for v1 implementation.

### 5. Absence Recognition

Missing pieces around the meta-loop:

- **Generic variation:** Missing state: the system has no durable cross-run memory object.
- **Focused variation:** Missing state plus missing valuation: `_meta_state.md` should record visited artifacts, selected Navigation items, open fronts, branch graph, and stop/continue rationale; selection should be explicit.
- **Contrarian variation:** Missing sensory feedback: Navigation maps are not enough; the meta-loop also needs retrospective outcome signals to know whether past movement worked.

Survival note: focused variation is needed for v1. Contrarian variation points toward later self-improvement.

### 6. Domain Transfer

Imported patterns:

- **Search algorithms:** frontier, visited set, expansion, pruning.
- **Scientific research programs:** hypotheses, experiments, revisits, literature consolidation.
- **Operating systems:** scheduler, process table, runtime state.
- **Navigation in physical space:** eyes see; body moves; memory remembers; values choose destination.

Variations:

- **Generic variation:** Meta-loop as search over a graph.
- **Focused variation:** Meta-loop as a cognitive runtime: it schedules MVL+ probes over an artifact graph using Navigation as perception.
- **Contrarian variation:** Meta-loop as a research storm: a self-organizing process that keeps destabilizing and restabilizing understanding.

Survival note: "cognitive runtime" is technically useful but may be too dry. "Controlled whirl" carries the intuition better.

### 7. Extrapolation

Trend: Homegrown is moving from isolated inquiry folders to connected inquiry chains.

- **Generic variation:** More inquiry folders require better indexing and navigation.
- **Focused variation:** As inquiry count grows, the meta-loop becomes necessary because the system must manage active fronts, revisit older findings, merge branches, and decide when traversal is meaningful.
- **Contrarian variation:** If inquiry count grows without a meta-loop, the archive becomes a dead memory store rather than a living thinking terrain.

Survival note: the focused extrapolation supports building a meta-loop eventually. The contrarian variation explains why this matters: artifacts only become cognitive terrain if something can traverse them.

## Candidate Rephrases

### Candidate A: Minimal Engineering Phrase

> A meta-loop is a runner that repeatedly invokes MVL+ and Navigation until a stop condition is reached.

Strength: simple.

Weakness: misses backward movement, artifacts as terrain, and the whirl intuition.

### Candidate B: Stateful Traversal Engine

> A meta-loop is a stateful traversal engine for thinking space. It starts from a seed, reads the artifact terrain around it, uses Navigation to see possible moves, selects one or more moves, runs MVL+ to probe them, writes new artifacts, and updates its map until the traversal is good enough to stop, branch, merge, revisit, or consolidate.

Strength: clean, precise, implementable.

Weakness: less poetic than the user's metaphor.

### Candidate C: Controlled Whirl

> The meta-loop is a controlled whirl through the project's thinking space. It does not merely repeat MVL+; it consumes findings, navigation maps, reflections, corrections, and open questions, then moves through them. Navigation gives it sight. MVL+ gives it hands. Meta-state gives it memory. Meaningful traversal gives it judgment about whether it is thinking or just spinning.

Strength: preserves the user's intuition and names the operational constraints.

Weakness: metaphorical wording could be misread as stronger autonomy than exists.

### Candidate D: Artifact Graph Walker

> A meta-loop is a graph walker over inquiry artifacts. Nodes are findings, questions, maps, branches, and corrections. Edges are relations such as continues-from, revisits, invalidates, merges, blocks, and develops. Navigation proposes edges; the selector chooses edges; MVL+ creates new nodes.

Strength: technically precise and good for implementation.

Weakness: loses the living sense of motion.

### Candidate E: Cognitive Runtime

> A meta-loop is the cognitive runtime above MVL+. It owns cross-run state, schedules MVL+ probes, consumes Navigation maps, tracks traversal quality, and decides whether to continue, branch, merge, revisit, consolidate, or stop.

Strength: strong architecture language.

Weakness: may make the concept sound more executable and mature than it currently is.

### Candidate F: Exhaustive Thinking-Space Discoverer

> A meta-loop is a process that discovers the full thinking space around a problem.

Strength: ambitious.

Weakness: overclaims. Thinking space expands as the system creates artifacts.

### Candidate G: First Implementation Phrase

> Meta-loop v1 is a sequential human-selected runner: seed -> MVL+ -> Navigation -> human selects next move -> MVL+ -> update `_meta_state.md` -> stop or continue.

Strength: immediately buildable.

Weakness: v1 phrase should not replace the larger concept.

## Tested Survivors

| Candidate | Novelty | Scrutiny Survival | Fertility | Actionability | Mechanism Independence |
|---|---|---|---|---|---|
| A Minimal Engineering Phrase | Low | Medium | Low | High | Medium |
| B Stateful Traversal Engine | Medium | Strong | High | High | Strong |
| C Controlled Whirl | High | Medium | High | Medium | Strong |
| D Artifact Graph Walker | Medium | Strong | High | Medium | Strong |
| E Cognitive Runtime | Medium | Medium | High | Medium | Medium |
| F Exhaustive Discoverer | Low | Weak | Medium | Low | Weak |
| G First Implementation Phrase | Low | Strong | Medium | Very high | Medium |

## Assembly Check

The best output is not one phrase. Use a layered phrasing:

1. **Conceptual phrase:** controlled whirl.
2. **Operational phrase:** stateful traversal engine.
3. **Implementation phrase:** sequential human-selected runner v1.
4. **Technical model:** artifact graph walker.

Recommended final wording:

> The meta-loop is a stateful traversal engine for thinking space: a controlled whirl over the project's inquiry artifacts. It starts from a seed, reads the surrounding artifact terrain, uses Navigation as its eyes to see possible moves, uses explicit selection to choose one or more moves, runs MVL+ as the probe that creates new artifacts, and updates meta-state until meaningful traversal says to continue, branch, merge, revisit, consolidate, or stop.

Navigation fit:

> Current Navigation fits the eyes role well. It already enumerates typed movements, including revisit, merge, consolidate, unblock, test, deepen, refine, and develop. But it is only eyes. The meta-loop still needs memory, selection, execution, and traversal judgment.

## Mechanism Coverage Telemetry

- Generators applied: 4 / 4.
- Framers applied: 3 / 3.
- Convergence: YES. Lens shifting, combination, absence recognition, domain transfer, and extrapolation converge on "stateful traversal engine / controlled whirl."
- Survivors tested: 7 / 7.
- Failure modes observed: none severe. Risk: metaphor inflation, mitigated by pairing poetic language with operational roles.
- Overall: PROCEED.

