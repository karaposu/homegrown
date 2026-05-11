# Critique: Multi-Resolution Navigation Runner Depth Param

## User Input

Should multi-resolution Navigation become a separate loop/runner like MVL with a depth parameter, or is there a better operational shape that avoids manually running Navigation one by one while keeping coverage bounded?

## Dimensions

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Manual burden reduction | High | Avoids user manually launching every child Navigation run. |
| Boundedness | High | Prevents depth/breadth explosion and hidden selection. |
| Discipline boundary | High | Keeps Navigation as enumeration and selection downstream. |
| Operational clarity | High | Defines input, output, path layout, trace, stop rules, and composition. |
| Feasibility now | Medium | Can be materialized without a large runtime system. |
| Scalability later | Medium | Can later support parallel child maps and multihead. |
| Coherence with Homegrown | Medium | Fits existing protocol/runner/materialization taxonomy. |

## Fitness Landscape

### Viable Region

Protocol-backed traversal with depth, breadth budget, expansion policy, child-map contract, composition, and no-selection boundary.

### Boundary Region

Runner or command surfaces that are useful but premature until the contract survives a trial.

### Dead Region

Depth-only recursion, full MVL-like cognitive loop identity, and parallel execution before path/composition contracts.

### Unexplored Region

Exact command name and final installation surface.

## Candidate Verdicts

### Candidate A: Manual Navigation Only

Prosecution:

- Fails the user's main concern.
- Scales poorly as soon as route maps have several expandable directions.
- Keeps coordination burden on the human.

Defense:

- Safest and simplest.
- No new runner behavior risk.

Collision:

Safety does not compensate for failing the goal. Manual-only can be a temporary trial mode, not the answer.

Verdict: **KILL as final design; preserve as first dogfood mode.**

### Candidate B: Depth-Only Runner

Prosecution:

- `depth` does not control breadth.
- Can produce many child maps from one parent map.
- Does not explain which routes deserve expansion.
- Does not guarantee composition.

Defense:

- Simple to understand.
- Solves part of the manual execution problem.

Collision:

The simplicity is deceptive. Depth-only gives the appearance of control while leaving the main risk open.

Verdict: **KILL.**

Seed extracted:

Use depth as one field inside a larger budget contract.

### Candidate C: Full MVL-Like Loop Peer

Prosecution:

- Misclassifies the operation. MVL coordinates different cognitive disciplines; multi-resolution Navigation repeats one discipline over a route tree.
- Adds conceptual weight and taxonomy complexity.
- Could make Navigation look like a new primitive instead of an orchestration layer.

Defense:

- A named loop would be memorable and operationally convenient.
- It signals that the operation is important.

Collision:

Convenience survives, but peer-loop identity fails. It should be a runner/command, not a cognitive primitive like MVL.

Verdict: **KILL.**

Seed extracted:

Create a named command later, but define it as traversal.

### Candidate D: Protocol-First Multi-Resolution Navigation

Prosecution:

- Still requires a manual operator in the first version.
- Does not fully solve automation immediately.
- Another protocol adds conceptual surface area.

Defense:

- Defines behavior before automation.
- Matches `artifact_materialization.md` risk guidance: runner behavior should be controlled before being operationalized.
- Lets the system learn from one real use before installing a command.
- Can encode depth, budget, policy, child headers, composition, and no-selection boundary.

Collision:

The prosecution is real but acceptable. The protocol does not solve everything immediately, but it is the safest bridge from concept to runner.

Verdict: **SURVIVE.**

### Candidate E: Budgeted Traversal Runner After Protocol Trial

Prosecution:

- Requires more implementation than a Markdown protocol.
- Runner bugs can create many stale or malformed artifacts.
- Needs validation and outcome review.

Defense:

- Solves the manual infeasibility problem.
- Can use clear parameters: `depth`, `max_expansions`, `policy`, `output`.
- Can later support parallel child maps safely.

Collision:

This is the right medium-term endpoint, but only after protocol and field contracts exist.

Verdict: **SURVIVE with gate.**

Gate:

Promote only after one or two protocol-guided runs show that composition is useful and burden decreases.

### Candidate F: Extend Existing Navigation With `--multi`

Prosecution:

- Bloats the Navigation skill with orchestration responsibility.
- Makes single-pass and multi-pass behavior harder to reason about.
- Risks confusing discipline behavior with runner behavior.

Defense:

- Simpler user-facing interface.
- Reuses the existing Navigation brand.

Collision:

Good as a future command surface, weak as internal architecture.

Verdict: **REFINE.**

Refinement:

The user-facing command may look like Navigation, but internally it should invoke the protocol-backed runner.

### Candidate G: Atlas/Graph Manager Now

Prosecution:

- Premature infrastructure.
- No evidence yet that Markdown map-of-maps fails.
- Adds storage/state complexity before basic traversal is tested.

Defense:

- It is probably the long-term shape if maps accumulate.

Collision:

Future seed survives; immediate implementation dies.

Verdict: **DEFER.**

## Assembly Check

Surviving assembly:

```text
1. Add expansion fields to route cards.
2. Create `homegrown/protocols/multi_resolution_navigation.md`.
3. Run one protocol-guided traversal with small bounds:
   depth: 1 or 2
   max_expansions: 2-4
   policy: expansion-needed or user-selected
4. Produce `composition.md` and `run_trace.md`.
5. Stop before selection.
6. Outcome-review whether it reduced user burden.
7. Promote to a command/runner only after evidence.
```

Assembly verdict: **SURVIVE.**

## Coverage Map

Evaluated:

- manual-only;
- depth-only runner;
- MVL-like peer loop;
- protocol-first;
- budgeted runner later;
- `--multi` mode;
- atlas/graph manager.

No unexplored region appears likely to overturn the conclusion. The only remaining choices are naming and exact command syntax.

## Signal

TERMINATE with ranked survivors.

## Ranked Survivors

1. **Protocol-first multi-resolution Navigation** - best immediate next step.
2. **Budgeted traversal runner after protocol trial** - best medium-term endpoint.
3. **Navigation `--multi` as future command surface** - acceptable UI after internals are defined.
4. **Atlas/graph manager** - deferred future infrastructure.

## Final Answer From Critique

The user is right that manual child Navigation is not feasible. The better option is not a depth-only MVL-like loop. It is a **protocol-backed traversal runner**.

The runner should eventually accept a depth parameter, but only as part of a contract:

```text
depth
max_expansions
expansion_policy
output_root
composition_output
no_selection
```

The safest sequence is:

```text
route expansion fields
-> multi_resolution_navigation.md protocol
-> one small sequential dogfood run
-> outcome review
-> runner/command wrapper
-> later parallel child maps
```

## Convergence Telemetry

- Dimension coverage: COMPLETE.
- Adversarial strength: STRONG.
- Landscape stability: STABLE.
- Clean SURVIVE exists: YES.
- Failure modes observed: no rubber-stamping; depth-only and MVL-like peer loop were killed.
- Overall: PROCEED.
