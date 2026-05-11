# Sensemaking: Multi-Resolution Navigation Runner Depth Param

## User Input

Should multi-resolution Navigation become a separate loop/runner like MVL with a depth parameter, or is there a better operational shape that avoids manually running Navigation one by one while keeping coverage bounded?

## SV1 - Baseline Understanding

The user is right that manual child Navigation is not feasible. A separate operation is needed. But making it "like MVL" may be too strong: MVL is a cognitive loop with disciplines, while multi-resolution Navigation is more likely an orchestration runner over one discipline.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Navigation must remain enumeration, not selection.
- Manual one-by-one child Navigation will not scale.
- Runner behavior is high-risk because it changes how future artifacts are generated.
- A `depth` parameter controls vertical expansion but not branch count, expansion criteria, or output composition.
- Child maps need parent identity, source authority, and composition.
- Parallelism should wait until write paths and merge rules are stable.

### Key Insights

- The missing thing is not another thinking discipline. It is controlled traversal over Navigation maps.
- `depth` is necessary but insufficient. It must be paired with a budget and expansion policy.
- The operation should probably be protocol-first, runner-second.
- A separate command is eventually reasonable because the user cannot manually coordinate child map execution forever.

### Structural Points

- Input context creates parent map.
- Expansion policy selects which routes become child-map jobs.
- Depth limit controls levels.
- Budget controls breadth.
- Composition makes results usable.
- Selection remains downstream.

### Foundational Principles

- Coverage should be automated only where bounds are explicit.
- Traversal order must not become hidden selection.
- The lightest sufficient operational layer should be tried first.
- A runner must produce fewer coordination burdens than it adds.

### Meaning-Nodes

- Multi-resolution Navigation runner
- Depth parameter
- Breadth budget
- Expansion policy
- Traversal queue
- Map composition
- Selection boundary

## SV2 - Anchor-Informed Understanding

The user's proposal should be accepted in spirit but corrected in mechanism. Yes, multi-resolution Navigation needs a command-like operation eventually. No, `depth` alone should not define it. The stable primitive is a bounded traversal runner: depth + max children + expansion policy + composition + no selection.

## Phase 2 - Perspective Checking

### Technical / Logical

New anchors:

- Depth without breadth can still explode: a depth-2 run over 12 expandable parent routes can create many child maps.
- Breadth without depth produces only shallow batch expansion.
- Expansion policy is the real control surface.
- Composition is not optional; otherwise the runner returns a pile of maps.

### Human / User

New anchors:

- The runner should reduce the user's burden of coordinating child maps.
- It must not produce so many artifacts that the user now has a review burden.
- The default should be conservative and readable.

### Strategic / Long-Term

New anchors:

- A runner can become the future bridge to multihead Navigation.
- Protocol-first design gives future runner behavior a stable contract.
- The operation can eventually support parallelism, but only after sequential correctness.

### Risk / Failure

New anchors:

- A new runner can overtake Navigation's discipline boundary and become an implicit autonomous search process.
- If expansion policy is vague, the runner may privilege salient routes over important but subtle routes.
- If child maps are not linked, future warm-up cannot reconstruct lineage.

### Resource / Feasibility

New anchors:

- A lightweight protocol can be written now.
- A full installed runner should wait until route-card expansion fields and one manual or protocol-guided trial exist.
- A command wrapper can be created later around the protocol.

### Definitional / Consistency

New anchors:

- MVL is a full cognitive loop with multiple disciplines.
- Multi-resolution Navigation is not a cognitive loop in the same sense; it is a traversal/orchestration loop over one discipline.
- Calling it a loop is okay in plain language, but its system type should be runner or protocol, not discipline.

## SV3 - Multi-Perspective Understanding

The core understanding sharpened: the user is not really asking for recursion; they are asking for a practical traversal operator that prevents manual execution overhead. The right operator is not "MVL but for Navigation." It is "Navigation batch traversal with explicit depth, breadth, expansion policy, and composition."

## Phase 3 - Ambiguity Collapse

### Ambiguity: "Separate loop like MVL"

**Strongest counter-interpretation:**
Multi-resolution Navigation should become a true peer of MVL: a named loop with its own canonical execution lifecycle.

**Why the counter-interpretation fails (structural grounds):**
MVL coordinates different cognitive operations: Exploration, Sensemaking, Decomposition, Innovation, and Critique. Multi-resolution Navigation repeatedly invokes the same discipline over a route tree. That is orchestration over one operation, not a new multi-discipline cognitive loop.

**Confidence:** HIGH

**Resolution:**
Multi-resolution Navigation should become a separate runner or protocol-backed command eventually, but not a peer cognitive loop with MVL's identity.

**What is now fixed?**
System type: traversal runner/protocol, not new discipline.

**What is no longer allowed?**
Treating it as a new universal thinking loop.

**What now depends on this choice?**
File placement, naming, materialization depth, install behavior, and validation.

**What changed in the conceptual model?**
The design shifts from "new loop primitive" to "bounded orchestration layer over Navigation."

### Ambiguity: "Depth parameter"

**Strongest counter-interpretation:**
A `depth` parameter is enough. `depth=2` means parent map plus child maps; `depth=3` means grandchildren.

**Why the counter-interpretation fails (structural grounds):**
Depth controls levels only. It does not control how many routes expand at each level, why they expand, whether child maps are useful, or how outputs compose. A depth-only runner can still explode horizontally.

**Confidence:** HIGH

**Resolution:**
Depth is one parameter in a budget set. Minimum safe parameters are `depth`, `max_children` or `max_expansions`, `expansion_policy`, and `composition_output`.

**What is now fixed?**
Depth cannot stand alone.

**What is no longer allowed?**
Designing `/multi-navigation --depth N` as the full control contract.

**What now depends on this choice?**
Future command syntax and protocol contract.

**What changed in the conceptual model?**
Breadth budget and expansion policy become as important as depth.

### Ambiguity: "Better option"

**Strongest counter-interpretation:**
The better option is not automation; just patch Navigation fields and let the user manually call child maps.

**Why the counter-interpretation fails (structural grounds):**
The user correctly identified manual execution as infeasible. Field patches make child maps possible, but they do not coordinate execution, budgets, or composition. The coordination burden remains with the user.

**Confidence:** HIGH

**Resolution:**
The better option is protocol-first orchestration, then a runner after one trial. This avoids both manual infeasibility and premature automation.

**What is now fixed?**
Manual-only is insufficient as the end state.

**What is no longer allowed?**
Pretending route-card fields alone solve the usability problem.

**What now depends on this choice?**
Whether the next materialization should be route-card patch, protocol, or runner.

**What changed in the conceptual model?**
The next load-bearing layer is a controlled orchestration contract.

### Ambiguity: "Parallel child maps"

**Strongest counter-interpretation:**
Once top-level routes are identified, child maps should run in parallel immediately.

**Why the counter-interpretation fails (structural grounds):**
Parallel execution is safe only if each child map has distinct output paths, stable parent identity, a shared contract, and a composition step. Without those, parallelism amplifies artifact disorder.

**Confidence:** HIGH

**Resolution:**
Parallelism is an execution mode after the sequential/protocol path works.

**What is now fixed?**
Sequential correctness precedes parallel expansion.

**What is no longer allowed?**
Parallel child-map generation before contracts and composition.

**What now depends on this choice?**
Future multihead and worker execution design.

**What changed in the conceptual model?**
Parallelism is not the solution; it is a later acceleration.

## SV4 - Clarified Understanding

The system needs a separate operational layer for multi-resolution Navigation, but it should be a bounded traversal runner or protocol-backed command, not a new MVL-like cognitive loop. `depth` is useful but insufficient. The safe design requires depth, breadth budget, expansion policy, child-map contract, composition output, and an explicit no-selection boundary.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- The operation is orchestration over Navigation.
- Depth must be paired with breadth/budget and policy.
- Composition is required.
- Selection stays downstream.
- Protocol-first is safer than runner-first.

### Eliminated

- Manual-only as long-term solution.
- Depth-only command contract.
- Full autonomous recursive runner now.
- Parallel child-map execution now.
- Making Navigation itself absorb all orchestration details.

### Viable Paths

1. Patch Navigation route cards with expansion fields.
2. Create `homegrown/protocols/multi_resolution_navigation.md`.
3. Trial the protocol with `depth: 1` or `depth: 2` and small child budget.
4. Promote to a runner/skill command only after the protocol works.

## SV5 - Constrained Understanding

The solution space is now:

```text
single-pass Navigation
  -> expansion-capable route cards
  -> protocol-backed multi-resolution traversal
  -> optional runner command
  -> later parallel child-map execution
```

The strongest near-term move is not to create a full runner immediately. It is to define the runner contract as a protocol and dogfood it on one Navigation map.

## SV6 - Stabilized Model

Yes, a separate operation is needed because manually running Navigation one by one will not scale.

But the best shape is not "MVL for Navigation." It is **multi-resolution Navigation traversal**:

```text
input context
-> parent Navigation map
-> expansion queue from explicit policy
-> child maps within depth and breadth budget
-> composed map-of-maps
-> stop before selection
```

The first materialized form should be a protocol. A runner or command can come after the protocol survives a real use.

## Telemetry

- Perspective saturation: HIGH.
- Ambiguity resolution ratio: 4/4.
- SV delta: HIGH. Baseline "maybe a runner like MVL" became "protocol-backed traversal runner with depth, breadth, policy, and composition."
- Anchor diversity: HIGH.
