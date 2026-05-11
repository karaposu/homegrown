# Decomposition: Route Expansion Fields Necessity For Auto Navigation

## Coupling Map

High-coupling clusters:

1. Route-card readability and ordinary Navigation output.
2. Expansion candidate selection and multi-resolution traversal.
3. `_frontier.md` ledger state and child-map resume state.
4. Future automation and stale-state avoidance.

Low-coupling boundaries:

- Route existence/meaning can stay in `navigation.md`.
- Expansion execution state can stay in `_frontier.md`.
- Optional hints can be added later without blocking automation.

## Question Tree

### 1. What information do route cards need to carry?

Verification criteria:

- [ ] Route identity, state, meaning, evidence, guidance, and continuation remain present.
- [ ] Route cards do not become a duplicate control ledger.
- [ ] Simple Navigation maps remain readable.

### 2. What information does multi-resolution expansion need?

Verification criteria:

- [ ] Candidate identity.
- [ ] Expansion reason.
- [ ] Eligibility.
- [ ] Scheduling reason.
- [ ] Status.
- [ ] Child map path.
- [ ] Resume note.

These are already in `_frontier.md`.

### 3. Can expansion candidates be derived?

Verification criteria:

- [ ] Use existing route fields: priority, status, blockers, unlocks, WHY, guidance mode, continuation note.
- [ ] Use multi-resolution policy to mark eligible/out-of-policy/blocked.
- [ ] Store the result in `_frontier.md`.

### 4. What update burden must be avoided?

Verification criteria:

- [ ] No parent route-card child paths that duplicate `_frontier.md`.
- [ ] No manual updates in parent maps after each child expansion.
- [ ] No stale route-card state that contradicts the ledger.

### 5. What can remain optional?

Verification criteria:

- [ ] Optional `Expansion hint` can be introduced later.
- [ ] A parent map can include a map-level pointer to `_frontier.md` after a multi-resolution run.
- [ ] The optional hint is not a source of truth.

## Interface Map

- Navigation route card -> multi-resolution protocol: descriptive route data.
- Multi-resolution protocol -> `_frontier.md`: candidate records and expansion state.
- `_frontier.md` -> future warm-up/Navigation refresh: resume and child-map state.
- Parent `navigation.md` -> reader: route meaning and optional pointer to ledger.

## Dependency Order

1. Do not patch route cards yet.
2. Run one multi-resolution Navigation trial using existing route fields and `_frontier.md`.
3. Check if users or agents miss expansion candidates before ledger creation.
4. Add optional `Expansion hint` only if the trial shows a real readability gap.

## Self-Evaluation

Independence: PASS. Route-card contract can stay stable while expansion protocol operates separately.

Completeness: PASS. The needed expansion state has a home in `_frontier.md`.

Reassembly: PASS. Parent maps plus `_frontier.md` can reconstruct route space and expansion status without duplicating state.

