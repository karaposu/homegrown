# Decomposition: Navigation Frontier Ledger Sidecar Shape

## 1. Coupling Map

The whole is the artifact shape for multi-resolution Navigation run state.

### Cluster A: Visible Navigation Output

Elements:

- `navigation.md`;
- route cards;
- route purposes;
- route status summaries;
- human-readable guidance.

Internal coupling: strong. These are the visible map.

### Cluster B: Control Ledger

Elements:

- `_frontier.md`;
- run settings;
- candidate ids;
- candidate statuses;
- eligibility reasons;
- scheduling reasons;
- child map paths;
- resume instructions.

Internal coupling: strong. These are the source of truth for expansion/resume.

### Cluster C: Child Map Materialization

Elements:

- `children/<candidate-id>/`;
- child `navigation.md`;
- parent route identity;
- child scope;
- recursive expansion possibility.

Internal coupling: strong. These exist only when a child map is actually created.

### Cluster D: Human Composition

Elements:

- `composition.md`;
- expanded summary;
- pending summary;
- blocked/out-of-policy summary;
- resume pointer;
- no-final-selection note.

Internal coupling: moderate. These summarize state for humans but should not be the source of truth.

### Cluster E: Run Trace

Elements:

- `run_trace.md`;
- source authority;
- validation;
- deviations;
- outcome;
- follow-up review gate.

Internal coupling: moderate. These record how the run happened.

## 2. Boundary Detection

### Boundary 1: Visible Map Versus Control Ledger

`navigation.md` should stay readable.

`_frontier.md` should carry durable status and resume state.

This boundary prevents route maps from becoming state databases.

### Boundary 2: Ledger Row Versus Child Folder

A ledger row means:

```text
candidate exists
```

A child folder means:

```text
candidate was expanded into a child map
```

This boundary prevents empty-folder sprawl.

### Boundary 3: Composition Versus Source Of Truth

`composition.md` summarizes the run for humans.

`_frontier.md` owns the candidate statuses.

This boundary prevents a readable summary from becoming the operational ledger.

### Boundary 4: Parent Control Versus Recursive Child Control

A parent `_frontier.md` tracks parent candidates.

A child `_frontier.md` should exist only if that child map is itself expanded.

This boundary lets the tree support arbitrary depth without materializing unused control files.

## 3. Bottom-Up Validation

### Atoms

- route card;
- expansion candidate;
- candidate id;
- candidate status;
- child map path;
- pending candidate;
- visible parent map;
- composition summary;
- run trace;
- resume instruction.

### Validation

- Candidate status belongs in `_frontier.md`, because it must be resumable and stable.
- Route cards belong in `navigation.md`, because they are the human route map.
- Child paths belong in `_frontier.md`, because they attach materialized children to candidate ids.
- Child folders should not exist without child maps, because an empty folder does not add route knowledge.
- Composition can consume `_frontier.md`, but should not replace it.

Top-down and bottom-up boundaries agree.

## 4. Question Tree

### Q1: What file is the source of truth for expansion state?

Verification:

- [ ] The file is an underscore sidecar.
- [ ] It contains candidate records and statuses.
- [ ] It contains resume-relevant fields.
- [ ] It does not replace `navigation.md`.

Answer: `_frontier.md`.

### Q2: What file is the human-readable route map?

Verification:

- [ ] Route cards remain readable.
- [ ] It can point to `_frontier.md` for expansion status.
- [ ] It does not need to carry every ledger field.

Answer: `navigation.md`.

### Q3: When should child direction folders be created?

Verification:

- [ ] Pending candidates do not create folders.
- [ ] Expanded candidates create folders.
- [ ] Candidate id links the ledger row to the child folder.
- [ ] Child folders include child `navigation.md`.

Answer: create child folders lazily, only when expanded.

### Q4: How should parent and child maps compose?

Verification:

- [ ] Parent `_frontier.md` records child paths.
- [ ] `composition.md` summarizes expanded/pending/blocked/out-of-policy state.
- [ ] Child maps can later carry their own `_frontier.md` if expanded.

Answer: parent ledger owns parent-child linkage; composition explains it.

### Q5: How should v1 avoid over-structure?

Verification:

- [ ] Use one sidecar file.
- [ ] Do not split `_navigation_state.md` from `_frontier.md` yet.
- [ ] Do not create empty child folders.
- [ ] Defer deeper schema extraction until first use.

Answer: one `_frontier.md` sidecar in v1.

## 5. Interface Map

| Source | Target | What Flows | Direction |
|---|---|---|---|
| `navigation.md` | `_frontier.md` | route ids, expansion candidates, route metadata | one-way |
| `_frontier.md` | child folder | candidate id, parent route, child scope | one-way |
| child `navigation.md` | parent `_frontier.md` | child map path and expansion status | one-way |
| `_frontier.md` | `composition.md` | statuses, child paths, pending list, resume info | one-way |
| `_frontier.md` | future run | pending candidates and resume state | one-way |
| run execution | `run_trace.md` | source, settings, validation, deviations, outcome | one-way |

## 6. Dependency Order

1. Define run folder shape.
2. Define `_frontier.md` as source of truth.
3. Define candidate id/status schema.
4. Define lazy child-folder creation.
5. Define composition summary requirements.
6. Define recursive child expansion rule.
7. Patch multi-resolution Navigation protocol if materialized.

## 7. Self-Evaluation

### Independence

Pass.

Visible map, frontier ledger, child folders, composition, and trace each have distinct responsibilities.

### Completeness

Pass.

The decomposition covers all parts of the user's question: sidecar analogy, `_navigate.md` naming, child folder creation, parent updating, and overhead control.

### Reassembly

Pass.

If the pieces are assembled, the result is a usable multi-resolution Navigation folder:

```text
navigation.md for humans
_frontier.md for state
composition.md for summary
children only for expanded maps
run_trace.md for accountability
```

### Tractability

Pass.

The design can be patched into the existing protocol with a small edit.

### Interface Clarity

Pass.

The most important interface is explicit: `navigation.md` produces candidates, `_frontier.md` owns statuses, child folders exist only after expansion.

### Balance

Pass.

The `_frontier.md` piece is the heaviest, but that is correct because it is the load-bearing ledger.

### Confidence

High for v1.

The only uncertain part is whether repeated use later requires splitting `_frontier.md` into smaller sidecars.
