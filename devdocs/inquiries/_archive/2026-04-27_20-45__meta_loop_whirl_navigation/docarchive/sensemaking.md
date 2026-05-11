# Sensemaking: Meta Loop Whirl Navigation

## User Input

`devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/_branch.md`

## SV1 - Baseline Understanding

The user's intuition is directionally right: the meta-loop should not be understood as a dumb loop that repeatedly runs MVL+. It is better understood as an active traversal process over thinking artifacts and open questions.

Initial rough phrasing:

> A meta-loop is a stateful traversal process that uses MVL+ as its probe, Navigation as its perception layer, and accumulated artifacts as its terrain.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Navigation is defined as boundary enumeration, not selection or execution.
- MVL/MVL+ remain atomic loops that produce bounded findings.
- A meta-loop must own cross-run state if it spans multiple inquiry folders.
- The current project does not yet have a reliable autonomous selector.
- Meaningful traversal is not yet fully formalized, but it is required to distinguish productive traversal from spinning.
- Thinking space is open-ended; total discovery is not a realistic literal target.

### Key Insights

- The meta-loop's input is not one fixed type. Its input is a **seed plus context**.
- The seed can be a user question, finding, folder, failure, Navigation map, correction chain, or project state.
- The meta-loop moves by transforming artifacts into new inquiry questions, running loops, reading results, and deciding where to move next.
- "Whirl" is useful because it captures non-linear movement: revisit, branch, merge, deepen, consolidate, stop.
- "Whirl" is dangerous if it implies self-justifying endless motion.
- Navigation does suit "eyes" if eyes means seeing possible moves; it does not suit "brain" or "will."

### Structural Points

- **Terrain:** inquiry folders, findings, navigation maps, reflections, corrections, unresolved questions.
- **Perception:** Navigation maps possible next moves from current terrain.
- **Action:** MVL/MVL+ runs produce new artifacts.
- **Memory:** meta-state records visited artifacts, open fronts, selected directions, branch graph, and stop rationale.
- **Valuation:** selector or human chooses which Navigation directions matter.
- **Constraint:** meaningful traversal prevents endless spinning.

### Foundational Principles

- Enumeration precedes selection.
- The system should not hide value judgments inside Navigation.
- Moving backward is not regression; it is legitimate traversal when prior findings need revisiting.
- Artifact creation is not incidental. Artifacts are the terrain the next movement reads.
- A bounded region can be traversed productively even if the full thinking space is never exhausted.

### Meaning-Nodes

- Meta-loop
- Whirl
- Thinking space
- Navigation as eyes
- Seed plus context
- Artifact terrain
- Traversal
- Meaningful traversal
- Cross-run state
- Selector

## SV2 - Anchor-Informed Understanding

The meta-loop is not best described as "a loop that runs loops." That is implementation-level language.

A better conceptual model:

```text
seed + context
-> perceive possible moves with Navigation
-> select one or more moves
-> run MVL+ to probe those moves
-> write artifacts
-> update meta-state
-> perceive again
-> continue, branch, revisit, merge, consolidate, or stop
```

The meta-loop is traversal through a changing artifact landscape. MVL+ is the probe. Navigation is perception. Meta-state is memory. Selection is valuation. Meaningful traversal is the quality constraint.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

The meta-loop cannot have "anything" as raw input in an unconstrained sense. It can accept many artifact types, but it must normalize them into a seed and context packet.

New anchor: flexible input requires normalization.

### Human / User Perspective

The user wants language that preserves the living, moving quality of the concept. Too much engineering language will flatten the idea too early.

New anchor: keep the metaphor as a working metaphor, then attach operational boundaries.

### Strategic / Long-Term Perspective

The long-term architecture needs exactly this kind of object: a process that can run many MVL+ loops, branch, compare, merge, and update its own trajectory. The meta-loop is likely closer to the eventual "cognitive runtime" than any single discipline.

New anchor: meta-loop is runtime-level, not discipline-level.

### Risk / Failure Perspective

The biggest risk is mystical overreach. "Whirl" can make the system sound alive before it has evidence of autonomy. The second biggest risk is infinite motion: if the system values movement itself, it will generate more artifacts without getting closer to a goal.

New anchor: the meta-loop needs termination and traversal-quality gates from the beginning.

### Resource / Feasibility Perspective

The first implementation should be much narrower than the concept. A sequential runner that accepts one seed, runs MVL+, runs Navigation, asks the human to select, and updates `_meta_state.md` is enough to test the concept.

New anchor: v1 can be linear even if the concept is non-linear.

### Definitional / Consistency Perspective

Navigation's definition fits "eyes" but not "whole agency." It sees next directions. It does not remember cross-run history, choose directions, or enforce stopping.

New anchor: Navigation is necessary but not sufficient.

## SV3 - Multi-Perspective Understanding

The concept should be phrased at two levels:

1. **Fuzzy conceptual level:** the meta-loop is a whirl through thinking space.
2. **Operational level:** the meta-loop is a stateful traversal runner over inquiry artifacts.

These are not contradictory. The metaphor carries the topology: non-linear, artifact-consuming, artifact-producing, able to move backward or branch. The operational definition prevents the metaphor from becoming vague autonomy theater.

## Phase 3 - Ambiguity Collapse

### Ambiguity: What is the meta-loop's input?

**Strongest counter-interpretation:** The input is simply a user prompt, like MVL/MVL+.

**Why the counter-interpretation fails (structural grounds):** A meta-loop spans multiple inquiry cycles, so its start point may be an artifact already produced by a prior cycle. If input were only a user prompt, the runner could not naturally resume from a finding, a correction chain, a Navigation map, or a branch set.

**Confidence:** HIGH.

**Resolution:** The input is **seed plus context**. The seed is what starts the traversal; the context is the artifact terrain the traversal can read.

**What is now fixed?** A meta-loop runner needs an input normalization step.

**What is no longer allowed?** Treating the meta-loop as only a prompt-to-answer command.

**What now depends on this choice?** `_meta_state.md` schema and runner interface.

**What changed in the conceptual model?** The meta-loop becomes artifact-native, not prompt-native.

### Ambiguity: Does the meta-loop discover thinking space fully?

**Strongest counter-interpretation:** Yes. If the meta-loop keeps moving, branches, and revisits, it should eventually discover the whole thinking space around a problem.

**Why the counter-interpretation fails (structural grounds):** Thinking space expands as artifacts are created. New findings generate new questions, new conflicts, and new possible revisits. The target is not finite unless the system bounds it by a goal, a budget, or a traversal-quality threshold.

**Confidence:** HIGH.

**Resolution:** The meta-loop aims for **bounded meaningful traversal**, not full discovery.

**What is now fixed?** Total thinking-space discovery should not be a claim.

**What is no longer allowed?** Saying the meta-loop "fully discovers the thinking space" without a bounded domain and stop condition.

**What now depends on this choice?** Termination design and meaningful-traversal metrics.

**What changed in the conceptual model?** The meta-loop becomes a goal-relative explorer, not an exhaustive universe crawler.

### Ambiguity: Is Navigation enough to make the meta-loop autonomous?

**Strongest counter-interpretation:** Yes. If Navigation maps all directions, a meta-loop can just follow the map.

**Why the counter-interpretation fails (structural grounds):** Navigation explicitly does not select. It also does not own memory, branch state, progress evaluation, or stop criteria. A map does not decide where to go; it only makes possible routes visible.

**Confidence:** HIGH.

**Resolution:** Navigation is the eyes of the meta-loop, not its selector, memory, or will.

**What is now fixed?** A meta-loop needs separate selection and state mechanisms.

**What is no longer allowed?** Treating Navigation confidence symbols as a complete autonomous policy.

**What now depends on this choice?** Selector design and meta-state design.

**What changed in the conceptual model?** The meta-loop becomes a composition of roles, not a renamed Navigation command.

### Ambiguity: Can the meta-loop move backward?

**Strongest counter-interpretation:** No. A loop should move forward from one finding to the next; backward movement is just correction or reflection.

**Why the counter-interpretation fails (structural grounds):** Navigation already includes REVISIT with RESURRECT, INVALIDATE, and REVERT modes. A later artifact can change the status of an earlier artifact. Ignoring backward movement would prevent the system from updating its own prior path.

**Confidence:** HIGH.

**Resolution:** Backward movement is legitimate meta-loop traversal when later evidence changes earlier conditions.

**What is now fixed?** The meta-loop's branch graph cannot be only a linear chain.

**What is no longer allowed?** Treating prior findings as immutable once new evidence contradicts them.

**What now depends on this choice?** Meta-state needs links from new artifacts back to affected earlier artifacts.

**What changed in the conceptual model?** The meta-loop becomes graph traversal, not list traversal.

## SV4 - Clarified Understanding

The meta-loop is a stateful traversal process over inquiry artifacts. It starts from a seed plus context, uses Navigation to perceive possible moves, uses selection to choose one or more moves, uses MVL+ to probe those moves, writes new artifacts, updates cross-run state, and continues until meaningful traversal says to stop, branch, merge, revisit, or consolidate.

The whirl metaphor makes sense if it means non-linear artifact traversal. It fails if it means uncontrolled self-propelling motion.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- Meta-loop is runtime-level, not a new thinking discipline.
- Input is seed plus context.
- Navigation is perception.
- MVL+ is the probe/work unit.
- Meta-state is required.
- Selection is separate.
- Meaningful traversal is required for stop/continue decisions.
- Backward movement is allowed through revisit-style operations.

### Eliminated

- Meta-loop as just repeated MVL+.
- Navigation as full autonomy.
- Full discovery of thinking space as literal goal.
- Linear-only loop chain as the mature model.
- Hidden selection inside Navigation.

### Still Viable

- Sequential v1 runner.
- Human selector v1.
- `_meta_state.md` as first durable state object.
- Future graph traversal.
- Future multi-head branches.
- Future automated selector after enough Navigation maps and outcomes exist.

## SV5 - Constrained Understanding

The concept should be narrowed to this:

```text
Meta-loop = stateful, goal-bounded traversal over inquiry artifacts.
It uses Navigation to see possible moves.
It uses MVL+ to probe selected moves.
It uses meta-state to remember where it has been.
It uses meaningful-traversal signals to avoid spinning.
```

This keeps the user's whirl intuition without claiming that the current system already has autonomous will, consciousness, or complete self-direction.

## Phase 5 - Conceptual Stabilization

The cleanest phrase is:

> The meta-loop is a stateful traversal engine for thinking space. It starts from a seed, reads the artifact terrain around it, uses Navigation as its eyes to see possible moves, selects one or more moves, runs MVL+ to probe them, writes new artifacts, and updates its map until the traversal is good enough to stop, branch, merge, revisit, or consolidate.

A more poetic but still bounded version:

> The meta-loop is a controlled whirl through the project's thinking space. It does not merely repeat MVL+; it consumes findings, navigation maps, reflections, corrections, and open questions, then moves through them. Navigation gives it sight. MVL+ gives it hands. Meta-state gives it memory. Meaningful traversal gives it judgment about whether it is thinking or just spinning.

## SV6 - Stabilized Model

The user's concept makes sense and is worth preserving. The meta-loop should be framed as a **stateful traversal engine**, not merely as a loop runner.

Current Navigation suits this model well as the meta-loop's perception layer. It already enumerates forward, backward, branch, merge, and consolidation-style movements. But Navigation is incomplete for the whole meta-loop role because it does not select, remember, execute, or stop.

Compared with SV1, the model is sharper: "whirl" survives as a metaphor for non-linear traversal, but it is constrained by seed/context input, meta-state, explicit selection, and meaningful-traversal gates.

