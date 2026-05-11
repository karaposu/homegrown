# Decomposition: Multi-Resolution Navigation Runner Depth Param

## Coupling Map

### Cluster 1: Invocation Contract

Elements:

- command or protocol name
- input source
- depth
- breadth budget
- expansion policy
- output root
- selection boundary

Coupling: high. If one parameter changes, the others may need interpretation changes. For example, `depth: 2` is unsafe unless breadth and policy are also known.

### Cluster 2: Parent Navigation Map

Elements:

- source context
- top-level route cards
- expansion fields
- route IDs or stable route titles
- telemetry

Coupling: high. Child traversal depends on parent route identity and expansion markings.

### Cluster 3: Expansion Queue

Elements:

- route eligibility
- priority/risk/status filters
- max child count
- ordering
- stop conditions

Coupling: high. This is where hidden selection risk lives. Queue order must be transparent and bounded.

### Cluster 4: Child Map Job

Elements:

- parent map
- parent route
- child question
- child resolution
- inherited context
- additional sources
- output path

Coupling: high. A child map without these fields cannot be composed safely.

### Cluster 5: Composition Output

Elements:

- parent map link
- child map links
- coverage status
- unresolved expansion candidates
- stale/superseded markers
- no-selection marker

Coupling: high. The runner's value depends on readable composition, not merely files created.

### Cluster 6: Downstream Selection / Evaluation

Elements:

- user choice
- MVL/MVL+ evaluation
- selector protocol
- materialization request
- outcome review

Coupling: moderate. These consume the composed map, but must remain outside the runner.

## Boundary Detection

Natural boundaries:

- Navigation discipline vs multi-resolution runner: Navigation maps one source; runner orchestrates repeated Navigation calls.
- Runner vs selector: runner composes route space; selector chooses or evaluates.
- Protocol vs installed command: protocol defines behavior; command automates behavior.
- Sequential traversal vs parallel traversal: sequential correctness should precede parallel execution.

## Bottom-Up Validation

Atoms:

- depth
- max expansions
- expansion policy
- route ID
- child map
- output path
- composition index
- selected route marker

Validation:

- `depth` and `max expansions` belong together.
- `route ID` belongs to both parent map and child map job.
- `composition index` belongs after child maps, not inside individual route cards.
- `selected route marker` belongs downstream, not inside Navigation's own decision.

Boundary confidence: HIGH.

## Question Tree

### Q1. What should the invocation contract be?

Verification criteria:

- [ ] Names source input.
- [ ] Includes `depth`.
- [ ] Includes breadth budget such as `max_expansions` or `max_children`.
- [ ] Includes expansion policy.
- [ ] Names output root.
- [ ] Declares no automatic selection.

### Q2. How should routes become eligible for expansion?

Verification criteria:

- [ ] Uses explicit fields or policy, not hidden intuition.
- [ ] Can include `Expansion: needed`.
- [ ] Can include user-selected route IDs.
- [ ] Can include high-priority or blocked routes only under policy.
- [ ] Records why each child job was created.

### Q3. What should each child Navigation job contain?

Verification criteria:

- [ ] Parent map path.
- [ ] Parent route ID/title.
- [ ] Child question/scope.
- [ ] Resolution level.
- [ ] Source authority and inherited context.
- [ ] Output path.

### Q4. How should traversal stop?

Verification criteria:

- [ ] Stops at `depth`.
- [ ] Stops at `max_expansions`.
- [ ] Stops when no routes satisfy policy.
- [ ] Stops when composition would exceed readable output budget.
- [ ] Records any deferred expansion candidates.

### Q5. How should outputs compose?

Verification criteria:

- [ ] Produces a map-of-maps or composition index.
- [ ] Links parent and child maps.
- [ ] Shows coverage status per expanded route.
- [ ] Shows unresolved or deferred child maps.
- [ ] Keeps no-selection boundary visible.

### Q6. When should this become a real runner?

Verification criteria:

- [ ] Protocol has been used at least once.
- [ ] Child-map contract survived.
- [ ] Composition output was useful.
- [ ] User burden decreased.
- [ ] Failure modes are known enough to encode.

## Interface Map

| Source | Target | What Flows | Direction |
|---|---|---|---|
| Invocation contract | Parent Navigation | source context, requested resolution, output root | one-way |
| Parent Navigation | Expansion Queue | route cards, expansion fields, priority/status, telemetry | one-way |
| Expansion Queue | Child Map Job | selected parent route, child scope, reason, budget slot | one-way |
| Child Map Job | Child Navigation | bounded source context and parent route authority | one-way |
| Child Navigation | Composition Output | child route map and telemetry | one-way |
| Composition Output | Downstream Selection | readable route-space atlas and coverage state | one-way |
| Downstream Selection | Outcome / Reconciliation | chosen route and expected effect | one-way |

Hidden coupling risks:

- Expansion queue can become implicit selection if ordering is not recorded.
- Child maps can become orphaned if parent route identity is missing.
- Composition can become unreadable if child maps are too many.
- Runner can become a selector if it surfaces only "best" routes instead of coverage state.

## Dependency Order

1. Patch or define expansion-capable route cards.
2. Define a protocol-level invocation contract.
3. Define child-map header/output contract.
4. Trial sequential traversal at small depth and budget.
5. Define composition output from the trial.
6. Promote to runner/skill only if protocol trial reduces burden.
7. Add parallel child-map execution only after output paths and composition are stable.

## Self-Evaluation

### Independence

PASS. Invocation, expansion policy, child job contract, composition, and downstream selection are separable through explicit interfaces.

### Completeness

PASS. The decomposition covers every part needed to turn a depth idea into an operational traversal process.

### Reassembly

PASS. If all pieces are answered, the system can run bounded multi-resolution Navigation without manual one-by-one execution.

### Tractability

PASS. Each piece is small enough for a focused protocol or reference patch.

### Interface Clarity

PASS with caveat. The conceptual interface is clear; exact command syntax and path layout remain future decisions.

### Balance

PASS. The hardest piece is expansion policy, but it is not so large that it hides the whole problem.

### Confidence

HIGH. The decomposition matches both sensemaking and existing artifact boundaries.

## Decomposition Result

The safe runner shape is:

```text
invocation contract
  -> parent Navigation map
  -> expansion queue
  -> bounded child jobs
  -> composition output
  -> downstream selection/evaluation
```

The critical missing contract is not `depth`; it is `depth + breadth budget + expansion policy + composition`.

## Telemetry

- Boundaries: HIGH confidence.
- Hidden coupling: expansion queue and selection boundary are the main risks.
- Reassembly: passes.
- Residual gap: exact materialized command/protocol shape.
