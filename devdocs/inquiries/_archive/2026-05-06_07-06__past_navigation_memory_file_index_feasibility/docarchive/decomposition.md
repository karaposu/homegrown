# Decomposition: PastNavigationMemoryFile Index Feasibility

## Coupling Map

### Major Elements

- Index scope: which files count as `PastNavigationMemoryFile` candidates.
- Index schema: what each entry records.
- Update ownership: which operation appends or updates entries.
- Storage path: where the index lives.
- Route Memory Review interface: how review consumes the index.
- Validation/backfill: how stale or missing entries are detected.
- Rollout timing: whether to implement now, after route-memory policy patches, or later.

### Coupling Topology

High coupling:

- Index scope <-> schema. The schema depends on what counts as an entry.
- Scope <-> update ownership. Writers cannot update the index unless the entry criteria are explicit.
- Schema <-> Route Memory Review interface. Review needs enough metadata to find and triage candidates, but not so much that the index becomes review authority.
- Update ownership <-> validation/backfill. Creation-time updates reduce drift, but validation is still needed for missed writes.

Moderate coupling:

- Storage path <-> review interface. The path must be easy for Navigation context intake and Route Memory Review to find.
- Rollout timing <-> update ownership. If source docs are not patched, the index may exist but not be maintained.

Low coupling:

- Initial backfill <-> future helper tooling. Backfill can start manually; tooling can wait for evidence.
- Human explanation <-> table mechanics. The role note can be stable even if the schema changes slightly.

### Natural Boundaries

The problem separates into six coherent pieces:

1. Definition and scope.
2. Storage and schema.
3. Creation-time update ownership.
4. Review consumption boundary.
5. Validation/backfill.
6. Rollout and timing.

These boundaries avoid the wrong decomposition "one generic Navigation file-creation index" because scope and review authority would be tangled.

## Boundary Validation

### Top-Down Boundary Check

Definition/scope is a separate piece because changing the scope changes every other piece.

Storage/schema is a separate piece because once scope is fixed, the row shape can be designed independently.

Update ownership is separate because multiple protocols may create entries, and each writer needs a clear contract.

Review consumption is separate because the index must not become Route Memory Review.

Validation/backfill is separate because it exists to handle update failures.

Rollout is separate because implementation order depends on which source files currently encode the route-memory policy.

### Bottom-Up Atom Check

Irreducible atoms:

- file path;
- file kind;
- route-memory scope;
- created-by operation;
- created-at timestamp or run id;
- current review artifact reference, if reviewed;
- index completeness confidence;
- missing-index fallback scan.

These atoms group naturally into the six pieces above. No high-coupling atom is split incorrectly: current route dispositions are deliberately excluded from the schema and kept with Route Memory Review.

Boundary confidence: high.

## Question Tree

### Question 1 - What Counts As A PastNavigationMemoryFile Index Entry?

Verification criteria:

- [ ] Entry criteria name `PastNavigationMemoryFile` explicitly.
- [ ] Scope includes prior Navigation maps, inquiry-local `navigation.md`, route-memory reviews, `_frontier.md` ledgers, and sync/warm-up outputs that carry route-state memory.
- [ ] Scope excludes ordinary Navigation-adjacent files that do not carry past route memory.
- [ ] Archives are excluded by default unless explicitly requested.

### Question 2 - What Should The Index Store?

Verification criteria:

- [ ] The schema is enough for discovery and triage.
- [ ] The schema includes path, kind, created-by, created-for/scope, and route-memory content hint.
- [ ] The schema can optionally record last reviewed by / reviewed in.
- [ ] The schema does not store authoritative current route disposition.
- [ ] The top role note says the index is a discovery registry, not route truth.

### Question 3 - Where Should The Index Live?

Verification criteria:

- [ ] The path is findable by Navigation context intake and Route Memory Review.
- [ ] The path is not confused with an ordinary Navigation map.
- [ ] The location can include route-memory review artifacts later.
- [ ] Missing directory creation is addressed.

### Question 4 - Who Updates The Index, And When?

Verification criteria:

- [ ] Every durable route-memory-producing operation has an update responsibility.
- [ ] Entries are appended when the route-memory artifact is created.
- [ ] Index update failure does not invalidate the created artifact.
- [ ] The failure is reported and can be repaired later.

### Question 5 - How Does Route Memory Review Consume The Index?

Verification criteria:

- [ ] Review uses the index to find candidate files.
- [ ] Review reads relevant files before making current classifications.
- [ ] Review records which index entries were consumed.
- [ ] Navigation consumes review result, not raw index entries as current route truth.

### Question 6 - How Is The Index Validated Or Backfilled?

Verification criteria:

- [ ] There is a filesystem scan fallback for active docs.
- [ ] The scan checks known patterns such as `devdocs/navigation/*.md`, inquiry-local `navigation.md`, `_frontier.md`, and `route_memory_review.md`.
- [ ] Missing or stale rows can be repaired.
- [ ] Validation excludes archives by default.

### Question 7 - When Should Homegrown Add This?

Verification criteria:

- [ ] Timing accounts for current Navigation docs not yet fully encoding the latest route-memory policy.
- [ ] The initial index can be backfilled cheaply.
- [ ] The first implementation does not require automation.
- [ ] Helper tooling is deferred until real update failures justify it.

## Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| Definition and scope | Storage and schema | Entry criteria, allowed kinds, excluded kinds | one-way |
| Definition and scope | Update ownership | Which writers must register files | one-way |
| Storage and schema | Route Memory Review interface | Candidate metadata and paths | one-way |
| Update ownership | Validation/backfill | Expected entries and possible missed writes | one-way |
| Validation/backfill | Storage and schema | Repaired rows, confidence limits | one-way |
| Route Memory Review interface | Storage and schema | Last-reviewed metadata, consumed-by pointer if chosen | optional one-way |
| Rollout timing | Update ownership | Which protocols get patched first | one-way |
| Rollout timing | Storage path | Whether `devdocs/navigation_context/` is created now | one-way |

Hidden-coupling check:

- The index must not depend on current route dispositions.
- Route Memory Review must not depend on index completeness without fallback.
- Navigation must not consume the index as if it were a reviewed route-memory artifact.

## Dependency Order

1. Define scope and role.
2. Choose storage path and minimum schema.
3. Define update ownership and failure behavior.
4. Define Route Memory Review consumption rules.
5. Define validation/backfill rules.
6. Decide rollout timing and next implementation patch.

Parallelizable after step 1:

- storage path/schema and validation/backfill can be drafted together;
- update ownership and review consumption can be drafted together if the scope is fixed.

Must wait:

- protocol patches should wait until scope/schema/ownership are stable enough to avoid churn.
- helper tooling should wait until manual process creates real update friction.

## Self-Evaluation

### Independence

Pass.

Each piece can be answered independently once the scope is fixed. The heaviest interface is between schema and review consumption, but that interface is explicit.

### Completeness

Pass.

The decomposition covers what the user asked: whether the index is easier, whether feasible, what it records, where it lives, when it updates, who updates it, and how it avoids becoming stale.

### Reassembly

Pass.

If all seven questions are answered, the original problem is solved: Homegrown can decide whether to add the index and can do so without confusing it with Route Memory Review.

### Tractability

Pass.

Each question is small enough for one focused pass.

### Interface Clarity

Pass.

Interfaces are mostly one-way. The only optional reverse flow is review metadata back into the index, which can be omitted if it creates mutable-state risk.

### Balance

Pass with note.

Update ownership and validation/backfill are more complex than storage path selection, but not so much that the decomposition is imbalanced.

### Confidence

Pass.

Top-down boundaries match bottom-up atoms. The key boundary, discovery vs interpretation, is stable across Exploration and Sensemaking.
