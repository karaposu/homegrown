# Decomposition: Recursive Navigation Coverage

## 1. Coupling Map

### Major Clusters

1. **Top-Level Navigation Map**
   - Coupled elements: current project state, main directions, route-card fields, priority/status, blocked/deferred/open route visibility.
   - Internal coupling: high. These elements must stay together because they define the first route-space snapshot.

2. **Expansion Trigger / Resolution Rule**
   - Coupled elements: when a route needs deeper mapping, what counts as thin coverage, what conditions justify child maps.
   - Internal coupling: high. Trigger rules and resolution limits must be defined together.

3. **Child Navigation Map Contract**
   - Coupled elements: parent route identity, child question, source boundary, inherited context, output path, child route cards.
   - Internal coupling: high. A child map without parent identity or source boundary cannot be safely composed.

4. **Composition / Map-of-Maps**
   - Coupled elements: parent map, child maps, coverage state, route links, stale/superseded markers.
   - Internal coupling: high. Composition is where multiple maps become usable rather than scattered artifacts.

5. **Selection / Evaluation Boundary**
   - Coupled elements: user choice, MVL/MVL+ evaluation, selector protocol, materialization request.
   - Internal coupling: moderate. They all perform commitment or ranking, but can remain separate from Navigation.

6. **Lifecycle / Reconciliation**
   - Coupled elements: selected route, action taken, route-state update, outcome review, future warm-up memory.
   - Internal coupling: high. After-use evidence and stale-route handling belong together.

### Natural Boundaries

- Boundary between Navigation and selection: low crossing traffic if Navigation outputs maps and selection consumes them.
- Boundary between top-level map and child map: moderate crossing traffic through parent route identity and source context.
- Boundary between child maps and composition: strong interface, but separable if child maps use a stable contract.
- Boundary between composition and lifecycle: low/moderate; composition shows coverage, lifecycle updates state after action.

## 2. Boundary Validation

Bottom-up atoms:

- Route card
- Parent route ID/title
- Child map
- Coverage status
- Selection marker
- Reconciliation note
- Outcome review gate

Validation:

- Route card belongs inside both top-level and child maps.
- Parent route ID/title belongs to the child-map interface, not selection.
- Coverage status belongs to composition, not individual route meaning.
- Selection marker belongs outside Navigation or in a handoff section, not as Navigation's own decision.
- Reconciliation belongs after action, not during initial map generation.

Boundary confidence: HIGH. Top-down clusters match bottom-up atoms.

## 3. Question Tree

### Q1. How should top-level Navigation represent project-wide main directions?

Verification criteria:

- [ ] Includes all meaningful high-level route regions at the selected resolution.
- [ ] Keeps blocked, deferred, low-priority, and risky routes visible.
- [ ] Uses route-card fields consistently.
- [ ] Marks which regions may require child maps.

### Q2. When should a route be expanded into a child Navigation map?

Verification criteria:

- [ ] Trigger conditions are explicit.
- [ ] Expansion is bounded by source authority and resolution.
- [ ] Expansion is not automatic for every route.
- [ ] The reason for expansion is recorded.

### Q3. What contract should a child Navigation map obey?

Verification criteria:

- [ ] Names parent map and parent route.
- [ ] States child question/scope.
- [ ] States inherited context and additional sources.
- [ ] Produces normal route cards at the child resolution.
- [ ] Does not silently override parent route state.

### Q4. How should parent and child maps be composed?

Verification criteria:

- [ ] Parent route links to child maps.
- [ ] Each expanded region has coverage status.
- [ ] Conflicts or stale states are visible.
- [ ] The composed output is scannable as a map-of-maps.

### Q5. Where does selection or top-option evaluation happen?

Verification criteria:

- [ ] Navigation can expose priority/confidence but not commit.
- [ ] User, MVL/MVL+, selector, or materialization request is the commitment authority.
- [ ] Selected route is recorded explicitly.
- [ ] Selection does not erase unselected routes.

### Q6. How is recursive Navigation kept current after action?

Verification criteria:

- [ ] Route-state reconciliation records what changed.
- [ ] Outcome review is linked when a route is used.
- [ ] Future warm-up reads maps as evidence, not authority.
- [ ] Stale/superseded child maps can be marked without deleting them.

## 4. Interface Map

| Source | Target | What Flows | Direction |
|---|---|---|---|
| Top-level Navigation | Expansion Trigger | route priority, status, uncertainty, density, blocker complexity | one-way |
| Expansion Trigger | Child Navigation | parent route, child question, source boundary, reason for expansion | one-way |
| Child Navigation | Composition | child route cards, coverage state, child continuation notes | one-way |
| Composition | Selection/Evaluation | composed route space, coverage confidence, unresolved blockers | one-way |
| Selection/Evaluation | Lifecycle/Reconciliation | selected route, expected result, commitment authority | one-way |
| Lifecycle/Reconciliation | Future Warm-up | route state changes, outcome evidence, stale/superseded markers | one-way |
| Future Warm-up | Top-level Navigation | current-state brief plus prior-map evidence | one-way |

Hidden-coupling risks:

- If child maps do not name their parent route, composition breaks.
- If expansion triggers are implicit, recursion becomes selection by attention.
- If selected routes are not recorded, future warm-up cannot know which route changed state.

## 5. Dependency Order

1. **Top-level route-card map** must exist first.
2. **Expansion trigger rule** must be applied to identify child-map candidates.
3. **Child map contract** must exist before multiple child maps are created.
4. **Child maps** can be generated sequentially now; parallel later after contract stability.
5. **Composition** follows child maps.
6. **Selection/evaluation** follows composition.
7. **Lifecycle/reconciliation** follows selected-route action.

Parallel-safe later:

- Child maps for independent parent routes can run in parallel if they share a stable child-map contract and write to distinct paths.

Not parallel-safe yet:

- Child maps before parent route identities and composition rules exist.
- Selection before composition is available.

## 6. Self-Evaluation

### Independence

PASS. Each piece can be reasoned about separately through explicit interfaces. The main coupling is parent route identity flowing into child maps.

### Completeness

PASS. The decomposition covers map creation, expansion, child-map output, composition, selection boundary, and after-use state.

### Reassembly

PASS. If all pieces are answered, the original problem is solved: Navigation can improve coverage through layered maps while MVL/selection remains outside Navigation.

### Tractability

PASS. Each piece is small enough for a focused design or protocol patch.

### Interface Clarity

PASS with one caveat. The conceptual interfaces are clear, but file/path conventions for child maps remain unspecified.

### Balance

PASS. The largest piece is composition, but not overwhelmingly larger than child-map contract or lifecycle.

### Confidence

HIGH. Boundaries match both top-down structure and bottom-up atoms.

## 7. Decomposition Result

The problem decomposes into this operational sequence:

```text
Top-level Navigation map
  -> expansion trigger / resolution rule
  -> child Navigation map contract
  -> map-of-maps composition
  -> external selection/evaluation
  -> route-state lifecycle/reconciliation
```

The load-bearing missing piece is not parallelism. It is the child-map and composition contract. Without that, recursive Navigation increases artifacts without increasing usable coverage.

## Telemetry

- Boundaries: HIGH confidence.
- Hidden coupling: parent route identity and source authority are the main risks.
- Reassembly: passes.
- Residual gap: exact materialized file contract for child maps.
