# Sensemaking: Navigation Observer Session Architecture

## User Input

`devdocs/inquiries/2026-04-28_10-18__navigation_observer_session_architecture/_branch.md`

## SV1 - Baseline Understanding

The proposal is to split advanced Navigation into its own AI session so it can observe MVL-running sessions, read their output artifacts, and reason deeply about movement through the thinking space without being overloaded by the worker session's local task context.

Initial interpretation: this is probably a coherent architecture move, but only if the observer's authority is bounded. If it becomes Navigation, selector, executor, and meta-loop all at once, the design becomes too powerful too early and hides important control decisions.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Current Navigation is not advanced enough for meta-loop-grade traversal.
- Deep movement-space understanding is needed; shallow next-step routing wastes compute.
- Compute and context are limited, so Navigation cannot simply read everything forever.
- MVL/MVL+ is now treated as the atomic inquiry loop.
- Meta-loop v1 is explicitly human-selected and sequential.
- Navigation is currently a boundary discipline that maps possible directions; it is not the whole meta-loop.
- A separate observer must synchronize through artifacts, otherwise it will drift from the worker session.
- The user wants a design that can remain fuzzy but clean enough to evolve.

### Key Insights

- Session separation is not just implementation plumbing; it is role separation.
- The observer's real value is protected attention: it can focus on movement-space instead of solving the local inquiry.
- A Navigation Observer can run MVL+ internally because its question is not "solve the domain problem" but "where should the inquiry system move next?"
- The proposal fits the earlier meta-loop model: Navigation is the eyes, MVL+ is the probe, meta-state is memory, and selection is a separate valuation step.
- The highest-risk collapse is hidden autonomy: the observer recommends a move but effectively selects it without an explicit selector.
- Artifact-first observation is load-bearing. Raw chat/transcript observation would import the same context bloat the design is trying to avoid.

### Structural Points

- **Worker MVL session:** produces inquiry artifacts and solves local questions.
- **Navigation Observer session:** reads artifacts, builds movement-space maps, and recommends possible next moves.
- **Artifact bus:** `_branch.md`, `_state.md`, `finding.md`, `docarchive/`, relationship metadata, and future graph files.
- **Navigation memory:** durable cross-run state about open questions, explored branches, selected moves, and outcomes.
- **Selector:** human in v1, explicit selector later; commits one next move.
- **Meta-loop runner:** executes selected moves, records traversal, and handles stop/continue logic.

### Foundational Principles

- Observation should be read-only by default.
- Recommendation is not commitment.
- Deep Navigation can use MVL+ internally, but it should output Navigation artifacts, not pretend to be a normal finding loop.
- The observer should be evaluated by whether it improves movement quality, not by whether it sounds more sophisticated.
- Build the protocol before building the long-lived autonomous session.

### Meaning-Nodes

- Navigation Observer
- Thinking-space traversal
- Artifact-native cognition
- Context isolation
- Movement-space map
- Selector boundary
- Meta-loop perception

## SV2 - Anchor-Informed Understanding

The proposal is best understood as a new role boundary: a **Navigation Observer**. It is not merely `/navigation` moved into another prompt, and it is not yet the meta-loop itself. It is a context-isolated observer that owns deep movement-space perception and produces recommendations from artifact evidence.

The central architectural question is no longer "should Navigation be separate?" It is: "What authority should a separate Navigation Observer have, and what artifact contract keeps it useful without making it an unvalidated controller?"

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

New anchors:

- A separate observer needs a clear input contract, otherwise it will read inconsistent subsets of artifacts.
- A long-lived observer needs durable memory outside model context, otherwise its continuity is fragile.
- The observer needs read-set and confidence metadata so later loops can audit what it saw.
- The system needs a write boundary: navigation maps and graph updates are allowed; direct edits to fundamentals or launching new MVLs are not v1 behavior.

Technical read: the architecture is coherent if it is artifact-mediated. It is weak if it depends on implicit chat context.

### Human / User Perspective

New anchors:

- The user is trying to avoid wasting cognitive and compute resources on shallow Navigation.
- The user wants the system to discover thinking-space paths, not only answer isolated prompts.
- Human guidance still matters because values, taste, and strategic priority are not yet encoded.
- The observer must produce legible maps so the human can see why a movement was recommended.

Human read: this can make the system feel much more alive and strategic, but only if its recommendations remain inspectable.

### Strategic / Long-Term Perspective

New anchors:

- A Navigation Observer is a plausible stepping stone toward the meta-loop whirl concept.
- It can accumulate graph-native memory that later powers UI visualization.
- It can become the owner of N2/N3 Navigation depth.
- If successful, it gives Homegrown a real separation between local reasoning and cross-run cognitive steering.

Strategic read: this may be one of the most important architectural pivots, but it should be staged.

### Risk / Failure Perspective

New anchors:

- The observer could become a second bloated session if it reads too much.
- It could hallucinate missing context if artifacts are incomplete.
- It could create an illusion of autonomy while still relying on human judgment.
- It could duplicate MVL work instead of only reasoning about movement.
- It could over-select familiar paths because it sees only prior artifacts, not unarticulated user intent.

Risk read: the concept is strong, but the first version must be deliberately limited.

### Resource / Feasibility Perspective

New anchors:

- A full live observer session is not the immediate minimum.
- A protocol-first simulation can test the role with current tools.
- Manual runs on 3-5 real inquiries can reveal whether observer outputs are better than current Navigation maps.
- Only after useful maps exist should persistent sessions, graph memory, and UI be built.

Feasibility read: start with a protocol and artifact format, not a permanent background agent.

### Definitional / Consistency Perspective

New anchors:

- Prior findings define Navigation as boundary movement-space mapping.
- Prior meta-loop work defines selection and execution as separate from Navigation.
- Prior advanced Navigation work says current Navigation is a skeleton, not the finished mechanism.
- The user's proposed observer fits these definitions if it remains map-focused.

Consistency read: the proposal does not contradict the current theory. It refines Navigation into a stronger operational role.

## SV3 - Multi-Perspective Understanding

The strongest model is:

```text
Worker MVL+ session = local inquiry solver
Navigation Observer = movement-space perception and map construction
Selector = move commitment
Meta-loop runner = traversal execution and state tracking
```

This is more precise than "Navigation should be separate." The observer is a dedicated attention structure for thinking-space movement. It can use MVL+ internally, but the output should remain a Navigation Map or Navigation Observer Report, not a normal `finding.md` about the domain.

The major shift from SV1 is that the observer should not be framed as "managing other sessions" in v1. It should observe, map, recommend, and update navigation memory. Management can come later only after explicit selector and runner contracts exist.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Is the observer just Navigation, or a larger role?

**Strongest counter-interpretation:** It is just `/navigation` as a separate command. Calling it an observer overstates what it does.

**Why the counter-interpretation fails (structural grounds):** Current Navigation is a discipline invocation. It does not maintain protected cross-run attention, outcome memory, graph state, or a stable observation role. The proposed observer includes session-level continuity and artifact monitoring, which are role properties, not just prompt properties.

**Confidence:** HIGH

**Resolution:** The observer is a role/session architecture whose core method is Navigation.

**What is now fixed?** Navigation remains the discipline; Navigation Observer is the agent/session role that runs it and owns its context.

**What is no longer allowed?** Treating the observer as only a synonym for the current Navigation skill.

**What now depends on this choice?** Implementation should define an observer protocol or skill separately from merely patching `/navigation`.

**What changed in the conceptual model?** Navigation becomes method; observer becomes operating role.

### Ambiguity: Should the observer select the next move?

**Strongest counter-interpretation:** If the observer is advanced enough to map the space, it should also choose the next move; otherwise it is underpowered.

**Why the counter-interpretation fails (structural grounds):** Mapping and selecting require different authority. Selection depends on values, risk tolerance, cost, timing, and strategic taste. The current system does not yet have validated outcome evidence or explicit valuation logic. If the observer selects implicitly, it collapses Navigation, selector, and meta-loop into one untested mechanism.

**Confidence:** HIGH

**Resolution:** In v1 the observer recommends and ranks moves, but the human or explicit selector commits the next move.

**What is now fixed?** Recommendation is allowed; commitment is outside observer authority.

**What is no longer allowed?** Silent autonomous launching of new MVL runs by the observer.

**What now depends on this choice?** The observer output must include selection status and recommended candidates, not just "do X."

**What changed in the conceptual model?** The observer is powerful but non-sovereign.

### Ambiguity: Is the observer the meta-loop?

**Strongest counter-interpretation:** A persistent session that observes MVLs and decides movement is already the meta-loop, so separating terms adds complexity.

**Why the counter-interpretation fails (structural grounds):** A meta-loop must execute selected moves, maintain stop/continue state, track branch traversal, merge or archive paths, and handle selection outcomes. The observer can supply perception and recommendations, but does not need execution authority to be useful. Treating it as the whole meta-loop would force too many unsolved responsibilities into the first version.

**Confidence:** HIGH

**Resolution:** The observer is a component of the meta-loop, not the whole meta-loop.

**What is now fixed?** Meta-loop runner remains separate.

**What is no longer allowed?** Calling the observer complete autonomous traversal infrastructure.

**What now depends on this choice?** Future designs need separate state and execution contracts.

**What changed in the conceptual model?** The architecture becomes modular: perception, selection, execution, memory.

### Ambiguity: Should the observer run MVL+ internally?

**Strongest counter-interpretation:** If Navigation uses MVL+, then Navigation is no longer distinct from MVL+.

**Why the counter-interpretation fails (structural grounds):** MVL+ is a reasoning engine. The discipline identity comes from the question being asked and the artifact being produced. A Navigation Observer can use MVL+ to answer movement-space questions while still producing navigation maps, excluded directions, confidence, graph updates, and recommendations. That differs from a normal MVL+ finding about the original topic.

**Confidence:** HIGH

**Resolution:** The observer may run navigation-focused MVL+ when the movement-space is complex.

**What is now fixed?** MVL+ can be used internally as a decision loop for Navigation, not as a replacement for Navigation.

**What is no longer allowed?** Assuming every Navigation run must be shallow because it is a separate discipline.

**What now depends on this choice?** The observer should define escalation triggers for cheap map vs deep MVL+-style map.

**What changed in the conceptual model?** Navigation gains depth tiers.

### Ambiguity: Does separate session reduce or increase resource cost?

**Strongest counter-interpretation:** A separate session necessarily increases compute and coordination overhead, so it wastes resources.

**Why the counter-interpretation fails (structural grounds):** It increases overhead per navigation step, but may reduce wasted MVL branches by improving move selection. The resource question depends on whether the observer reads scoped artifacts and avoids duplicating local inquiry reasoning. If it reads raw transcripts or re-solves the problem, the objection succeeds.

**Confidence:** LOW

**Resolution:** Separate observer is resource-positive only under artifact-first, scoped-read, recommendation-focused constraints.

**What is now fixed?** Efficiency is conditional, not guaranteed.

**What is no longer allowed?** Claiming the observer is automatically cheaper or better.

**What now depends on this choice?** Empirical dogfooding must compare movement quality and wasted branches.

**What changed in the conceptual model?** The observer is a hypothesis to validate, not a proven efficiency improvement.

## SV4 - Clarified Understanding

The separate-session idea makes sense, but the right first form is not an autonomous manager. It is a **Navigation Observer**:

- artifact-native;
- context-isolated;
- movement-space focused;
- allowed to run deep navigation-focused MVL+ when needed;
- responsible for maps, recommendations, uncertainty, and navigation memory;
- not responsible for final selection or execution in v1.

What is no longer viable is treating Navigation as a lightweight taxonomy assignment if it is expected to guide a meta-loop. Also no longer viable is jumping straight to a full autonomous controller without explicit selector and runner boundaries.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed Variables

- The observer should be separate from the worker MVL session at least conceptually.
- The observer should use artifacts as its primary input.
- The observer should not be selector/executor in v1.
- The observer should have a structured output artifact.
- Deep observer reasoning may use MVL+ internally.
- Persistent/live session should come after protocol validation.

### Eliminated Options

- Keep Navigation only as a shallow in-session appendix.
- Let the observer silently launch or choose all future MVLs now.
- Make the observer depend on raw full chat transcripts as its main input.
- Build UI or live background supervision before map artifacts are valuable.
- Treat the observer as proven breakthrough before dogfooding.

### Viable Paths

1. Patch current Navigation toward N2 depth.
2. Define a protocol-first Navigation Observer report.
3. Run observer manually on completed MVL+ inquiries.
4. Add graph-native state once repeated maps exist.
5. Promote to persistent observer session only after evidence shows it improves movement quality.

## SV5 - Constrained Understanding

The stabilized design space is:

```text
Worker MVL+ produces inquiry artifacts.
Navigation Observer reads a scoped artifact set.
Observer constructs a movement-space map.
Observer may run navigation-focused MVL+ internally for complex cases.
Observer writes navigation_observer.md and optional graph/state updates.
Human or explicit selector commits the next move.
Meta-loop runner executes and records the committed move.
```

The next design should not ask whether to build "a separate manager" generally. It should ask what minimum artifact contract and output format make a Navigation Observer useful enough to dogfood.

## Phase 5 - Conceptual Stabilization

The user's proposal is structurally strong because it identifies a missing operating role. Advanced Navigation needs more than a deeper prompt; it needs protected context, cross-run memory, and movement-space attention. A separate observer session can provide that.

But the concept is only strong if bounded:

- It observes via artifacts.
- It maps movement-space.
- It recommends possible moves.
- It records uncertainty and evidence.
- It does not own selection or execution yet.

This makes it a stepping stone toward the meta-loop whirl, not the whirl itself.

## SV6 - Stabilized Model

**Navigation Observer** is a proposed role/session architecture for Homegrown:

> A context-isolated AI role that observes MVL inquiry artifacts, runs deep Navigation or navigation-focused MVL+ over the movement-space, maintains or updates navigation memory, and produces auditable next-move maps and recommendations while leaving move commitment to a human or explicit selector in v1.

It differs from SV1 in one important way: the observer should not be described primarily as "managing other AI sessions." That wording is too broad and too early. The better phrase is:

> The observer perceives and maps the thinking-space so that a selector and meta-loop runner can move through it deliberately.

This is a plausible breakthrough direction because it separates local problem-solving from cross-run cognitive steering. It is not yet proven; it needs a protocol-first implementation and dogfooding evidence before becoming a persistent autonomous session.

## Sensemaking Telemetry

- **Perspective saturation:** Good. Technical, human, strategic, risk, resource, and consistency perspectives produced distinct anchors.
- **Ambiguity resolution ratio:** 5/5 major ambiguities narrowed; one efficiency claim remains conditional.
- **SV delta:** High. The model shifted from "separate manager" to "bounded Navigation Observer role."
- **Anchor diversity:** Good. Constraints, insights, structural points, principles, and meaning-nodes are all represented.
- **Output: PROCEED**
