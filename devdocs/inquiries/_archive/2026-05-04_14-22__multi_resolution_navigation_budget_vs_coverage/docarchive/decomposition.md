# Decomposition: Multi-Resolution Navigation Budget Vs Coverage

## 1. Coupling Map

The whole is a future multi-resolution Navigation runner/protocol that must expose broad route coverage without letting execution become unreadable or lossy.

### Major Clusters

#### Cluster A: Coverage Enumeration

Elements:

- parent Navigation map;
- route expansion candidates;
- expansion eligibility;
- blocked/out-of-policy candidates;
- complete frontier record.

Internal coupling: strong. These elements all define what route space exists.

#### Cluster B: Execution Control

Elements:

- `coverage_mode`;
- `batch_size` / `max_batch_expansions`;
- `depth`;
- scheduling policy;
- exhaustive versus budgeted run behavior.

Internal coupling: strong. These elements decide what gets materialized in the current run.

#### Cluster C: Continuation State

Elements:

- pending candidates;
- expanded candidates;
- deferred-by-budget candidates;
- resume/continue command;
- run id;
- previous frontier state.

Internal coupling: strong. These elements preserve unrun paths.

#### Cluster D: Output Composition

Elements:

- child map paths;
- composition output;
- frontier summary;
- run trace;
- readable route tree.

Internal coupling: strong. These elements make the run usable after it creates multiple artifacts.

#### Cluster E: Selection Boundary

Elements:

- no final route selection;
- AI scheduling explanation;
- distinction between priority and commitment;
- handoff to MVL/user/selector/materialization.

Internal coupling: moderate. These elements prevent scheduling from becoming hidden decision-making.

### Major Boundaries

- Coverage Enumeration -> Execution Control: weak-to-moderate boundary. Execution consumes frontier candidates but should not redefine whether candidates exist.
- Execution Control -> Continuation State: moderate boundary. Execution produces statuses that continuation must persist.
- Continuation State -> Output Composition: moderate boundary. Composition consumes statuses and child paths.
- Execution Control -> Selection Boundary: moderate boundary. Scheduling decisions need evidence so they do not look like final selection.

## 2. Boundary Detection

### Boundary 1: Frontier Versus Batch

This is the most important cut.

The frontier says:

```text
what could be expanded
```

The batch says:

```text
what is expanded now
```

If this boundary is missing, `max_expansions` becomes a coverage cap.

### Boundary 2: Scheduling Versus Selection

Scheduling says:

```text
what order should expansion happen in
```

Selection says:

```text
what route should the project pursue
```

If this boundary is missing, "top N" becomes hidden decision-making.

### Boundary 3: Policy Versus Visibility

Policy says:

```text
which candidates are eligible for expansion under this run
```

Visibility says:

```text
which candidates exist in the route space
```

If this boundary is missing, out-of-policy routes disappear.

### Boundary 4: Child Maps Versus Composition

Child maps contain local detail.

Composition tells the reader how the parent and children fit together.

If this boundary is missing, output count grows but usability drops.

## 3. Bottom-Up Validation

### Atoms

- `depth`.
- `coverage_mode`.
- `frontier candidate`.
- `candidate status`.
- `batch_size`.
- `scheduling_policy`.
- `expansion_policy`.
- `child map`.
- `composition output`.
- `run trace`.
- `resume_from`.
- `no_final_selection`.

### Validation

- `frontier candidate` and `candidate status` belong together because a candidate without status cannot be resumed.
- `batch_size` and `scheduling_policy` belong together because a batch needs an order when it cannot include everything.
- `coverage_mode` sits above `batch_size` because exhaustive mode may ignore batch size.
- `child map`, `composition output`, and `run trace` are related but distinct; child detail should not replace global readability.
- `no_final_selection` cuts across scheduling and composition; it should be recorded wherever the runner explains why it expanded one candidate before another.

Top-down and bottom-up boundaries agree.

## 4. Question Tree

### Q1: How should the runner enumerate the expansion frontier without losing coverage?

Verification:

- [ ] All expandable parent-route candidates are recorded before batch execution.
- [ ] Blocked candidates are recorded with blocker reason.
- [ ] Out-of-policy candidates are recorded with policy reason.
- [ ] Candidate records include parent map and parent route identity.

### Q2: How should current-run execution be bounded without becoming a coverage cap?

Verification:

- [ ] `coverage_mode` is explicit.
- [ ] `budgeted` mode runs only a batch.
- [ ] `exhaustive` mode can run all eligible candidates up to depth.
- [ ] `batch_size` or `max_batch_expansions` is documented as current-run execution budget only.
- [ ] Non-expanded candidates remain pending.

### Q3: How should scheduling choose the next batch without becoming final selection?

Verification:

- [ ] Scheduling policy is declared.
- [ ] Each scheduled candidate has an ordering reason.
- [ ] Composition states that scheduling is not final route selection.
- [ ] Unscheduled candidates remain visible and runnable.

### Q4: How should continuation state make unrun paths runnable later?

Verification:

- [ ] Each candidate has a stable status.
- [ ] Pending candidates are listed in a resume section or file.
- [ ] A later run can continue from prior frontier state.
- [ ] The runner records run id or output root for lineage.

### Q5: How should output composition make many child maps readable?

Verification:

- [ ] Composition lists parent map, expanded child maps, pending candidates, blocked candidates, and out-of-policy candidates.
- [ ] Child maps are linked from composition.
- [ ] Reader can see coverage state without opening every child map.
- [ ] Composition distinguishes expanded from selected.

### Q6: How should the protocol expose mode choices without overloading the user?

Verification:

- [ ] Minimal default is clear.
- [ ] Exhaustive mode is available.
- [ ] Budgeted mode is available.
- [ ] Sampled mode, if present, is explicitly marked coverage-sacrificing.
- [ ] Terms avoid misleading names where possible.

## 5. Interface Map

| Source | Target | What Flows | Direction |
|---|---|---|---|
| Parent Navigation map | Frontier enumeration | Route records and expansion signals | one-way |
| Frontier enumeration | Execution control | Candidate list with eligibility/status | one-way |
| Execution control | Scheduling | Eligible candidates and budget/mode | one-way |
| Scheduling | Batch execution | Ordered candidates to expand now | one-way |
| Batch execution | Continuation state | Expanded/pending/deferred statuses | one-way |
| Batch execution | Child maps | Parent route context and child scope | one-way |
| Child maps | Composition | Child map paths and local route summaries | one-way |
| Continuation state | Composition | Pending, blocked, out-of-policy, resume data | one-way |
| Scheduling | Selection boundary | Ordering reasons and non-selection disclaimer | one-way |
| Composition | Future Navigation/MVL/user | Readable map state and continuation memory | one-way |

## 6. Dependency Order

1. Define candidate/frontier record shape.
2. Define candidate statuses.
3. Define coverage modes.
4. Define budget field semantics and rename if needed.
5. Define scheduling policy semantics.
6. Define child-map output path/header.
7. Define composition output.
8. Define resume/continue behavior.
9. Define no-final-selection language in runner output.

Parallelizable after step 2:

- coverage mode wording;
- scheduling policies;
- composition layout;
- child-map header.

Not parallelizable:

- resume behavior depends on frontier/status shape;
- batch semantics depend on mode definitions;
- composition depends on child-map and continuation state.

## 7. Self-Evaluation

### Independence

Pass.

Each piece has a distinct question:

- frontier enumeration;
- execution control;
- scheduling;
- continuation;
- composition;
- user-facing mode surface.

The pieces can be worked on separately if their interfaces are honored.

### Completeness

Pass.

The decomposition covers the whole concern:

- many directions discovered;
- current-run expansion bounded;
- unrun routes preserved;
- policy filtering made visible;
- top-N scheduling separated from final selection;
- output made readable.

### Reassembly

Pass.

If all pieces are answered, the original problem is solved:

```text
Navigation can uncover broad direction space
while a runner expands it in batches or exhaustively
without hiding unrun paths or creating unreadable output.
```

### Tractability

Pass.

Each question is small enough for a protocol-design pass.

### Interface Clarity

Pass.

The key interfaces are explicit: parent map to frontier, frontier to execution, execution to continuation, continuation to composition.

### Balance

Mostly pass.

The frontier/status piece is heavier than the others because it carries coverage preservation. That imbalance is acceptable because it is the load-bearing piece.

### Confidence

High.

The boundaries align with the sensemaking model and directly answer the user's objection.
