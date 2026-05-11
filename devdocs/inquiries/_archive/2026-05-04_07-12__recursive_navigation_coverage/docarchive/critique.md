# Critique: Recursive Navigation Coverage

## User Input

Does iterative or recursive Navigation make sense for comprehensive route coverage: first find the main directions in the codebase/project, then run Navigation for each main direction, and only afterward use MVL or another operation to identify top options?

## Phase 0 - Dimensions

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Coverage | High | Improves route-space completeness beyond a single flat map. |
| Boundedness | High | Avoids infinite recursion, map explosion, and uncontrolled artifact growth. |
| Boundary Integrity | High | Keeps Navigation as enumeration and leaves selection/commitment outside Navigation. |
| Continuation Value | High | Produces artifacts future warm-up can read without reconstructing context. |
| Feasibility | Medium | Can be used now without building large infrastructure first. |
| Scalability | Medium | Can later support multihead/parallel child maps. |
| Simplicity | Medium | Adds only the structure needed for the current stage. |

## Phase 1 - Fitness Landscape

### Viable Region

Approaches that improve coverage through declared resolution and bounded expansion while preserving Navigation's non-selector boundary.

### Boundary Region

Approaches that are structurally useful but premature as full protocols or infrastructure.

### Dead Region

Approaches that trigger automatic recursion, flatten all subroutes into one giant map, or make Navigation choose top options.

### Unexplored Region

Exact child-map file naming, storage layout, and composition artifact shape. This is operationally important but not needed to answer the current conceptual question.

## Phase 2-3 - Candidate Verdicts

### Candidate A: Multi-Resolution Navigation Note

Prosecution:

- A note may be too weak. Future agents may ignore it and still run flat maps.
- It can introduce new vocabulary without enforcing behavior.

Defense:

- It is the smallest correction that captures the core insight.
- It avoids creating a heavy protocol before one manual trial proves the need.
- It directly aligns with the user's current realization.

Collision:

The weakness is real but not fatal. The system is not ready for heavy recursion infrastructure. A reference-level rule is the right first materialization if we patch anything now.

Verdict: **SURVIVE**.

Constructive output:

- Add a bounded "multi-resolution Navigation" section to the Navigation reference when ready.
- Define resolution-scoped completeness and expansion markers.

### Candidate B: Expansion Field On Route Cards

Prosecution:

- Adds another field to already long route cards.
- Could imply every route needs child-map thinking.

Defense:

- It is compact and directly solves the coverage problem.
- It lets Navigation say "this region is not fully expanded" honestly.
- It prevents false completeness without forcing immediate recursion.

Collision:

The field adds complexity, but it is the best complexity-to-value tradeoff. It should be optional or conditional rather than mandatory-heavy.

Verdict: **SURVIVE**.

Constructive output:

Use:

```text
Expansion: no | optional | needed
Expansion reason: [density, uncertainty, blocker complexity, high value, user request, none]
Child maps: [links or none]
```

### Candidate C: Child Navigation Map Contract

Prosecution:

- A full contract may be premature.
- It could distract from current Navigation route-card testing.
- It may become another protocol before there is evidence from actual use.

Defense:

- Without this contract, recursive Navigation will not compose cleanly.
- Parent route identity and source authority are necessary to avoid map drift.
- It is the prerequisite for later parallel child maps.

Collision:

The concept is necessary, but full protocolization should wait until at least one manual child-map trial or one concrete need. It should be designed lightly first.

Verdict: **REFINE**.

Refinement:

- Do not create a large protocol immediately.
- First define minimal child-map fields in Navigation guidance or a future handoff artifact.
- Promote to a protocol only if repeated use needs it.

### Candidate D: Map-of-Maps / Navigation Atlas

Prosecution:

- Too much architecture for the current number of maps.
- Could shift work toward managing maps instead of improving Navigation outcomes.

Defense:

- Long-term, flat files will not scale.
- It gives an obvious future shape for multihead and parallelism.

Collision:

The future direction is sound, but the current project has not accumulated enough child maps to justify atlas infrastructure.

Verdict: **REFINE / DEFER**.

Refinement:

- Preserve as a future composition shape.
- For now, use links and a small composition section rather than a dedicated atlas system.

### Candidate E: MVL/MVL+ To Identify Top Options After Navigation

Prosecution:

- MVL may be overkill for every selection.
- If used casually, it can create another inquiry instead of a decision.

Defense:

- It preserves Navigation's boundary.
- It gives a rigorous way to evaluate options after the map exists.
- It is especially valuable for high-stakes or ambiguous top-option selection.

Collision:

The candidate survives if it is not automatic for every map. Use MVL/MVL+ when the choice is important, contested, or unclear.

Verdict: **SURVIVE**.

Constructive output:

- Navigation output may say: "For top-option evaluation, run MVL/MVL+ on the composed map."
- Do not make this mandatory for trivial choices.

### Candidate F: Parallel Child Navigation For Each Main Direction

Prosecution:

- Creates many artifacts before the merge/composition contract exists.
- Can increase user burden.
- Risks treating all main directions as equally worth expansion.

Defense:

- It is the obvious path toward broad coverage.
- Once contracts exist, independent child maps are genuinely parallel-safe.

Collision:

The defense is future-valid, but current-stage prosecution wins. Parallelism is not the next step.

Verdict: **KILL FOR NOW**.

Seed extracted:

Parallel child Navigation becomes viable after parent route IDs, child-map contract, and composition rules exist.

### Candidate G: Automatic Recursive Navigation Until Stable

Prosecution:

- No reliable stop condition.
- High risk of artifact explosion.
- Traversal order becomes hidden selection.
- Future warm-up must reconcile too many maps.

Defense:

- It could maximize coverage if implemented well.
- It resembles search over thinking space.

Collision:

The defense is too speculative. The current system lacks search budgets, composition, and outcome calibration.

Verdict: **KILL**.

Seed extracted:

If revived, automatic recursion needs explicit budget, stop criteria, map composition, and outcome-calibrated expansion heuristics.

## Phase 3.5 - Assembly Check

The best assembly is:

```text
Top-level Navigation declares resolution.
Route cards include optional Expansion fields.
Routes marked Expansion: needed/optional can receive child maps.
Child maps use parent route identity and source authority.
Composed map remains Navigation output.
MVL/user/selector evaluates top options after the map exists.
Materialization and outcome review handle selected action and evidence.
```

Assembly verdict: **SURVIVE**.

Why it survives:

- It improves comprehensive coverage without pretending one pass can list everything.
- It keeps Navigation's discipline boundary intact.
- It defers parallelism and atlas tooling until contracts exist.
- It gives a clear next implementation direction if the user wants to patch Navigation further.

## Phase 4 - Coverage and Convergence

Coverage:

- Evaluated the main viable route: multi-resolution Navigation.
- Evaluated the tempting but risky route: automatic recursion.
- Evaluated the user's parallelism idea.
- Evaluated the selector/MVL boundary.
- Evaluated the child-map/composition dependency.

Convergence:

- Multiple candidates converge on the same answer: recursive Navigation is valid only as bounded multi-resolution expansion.
- No clean counter-candidate survived that would keep flat maps as sufficient.
- No immediate need for a new full protocol was proven.

Signal: **TERMINATE** with ranked survivors.

## Ranked Survivors

1. **Multi-resolution Navigation with optional Expansion fields** - strongest immediate conceptual answer and likely next patch if desired.
2. **External MVL/MVL+/selector after composed map** - correct boundary for top-option evaluation.
3. **Minimal child-map contract** - needed before serious recursive or parallel Navigation.
4. **Map-of-maps / atlas shape** - deferred future composition architecture.

## Final Answer From Critique

The user's iterative understanding is correct, with one important refinement:

```text
Do not make Navigation recursively list everything automatically.
Make Navigation multi-resolution.
```

The right pattern is:

```text
top-level map -> mark expandable regions -> child maps where justified -> composed map -> MVL/selector/user chooses top options
```

This gives comprehensive coverage without turning Navigation into selector, planner, or uncontrolled search.

## Convergence Telemetry

- Dimension coverage: COMPLETE.
- Adversarial strength: STRONG. The strongest tempting failure, automatic recursion, was killed.
- Landscape stability: STABLE.
- Clean SURVIVE exists: YES.
- Failure modes observed: none. Main self-reference risk controlled by grounding in existing Navigation output and user-observed scanability/coverage issue.
- Overall: PROCEED.
