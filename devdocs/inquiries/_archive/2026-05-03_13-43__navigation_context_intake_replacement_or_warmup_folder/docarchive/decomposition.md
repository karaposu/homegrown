# Decomposition: Navigation Context Intake Replacement Or Warm-Up Folder

## Coupling Map

### Cluster A - Detailed Warm-Up Execution

Elements:

- `navigation-project-warmup_v1.md`
- `navigation-project-warmup_v2.md`
- `navigation-project-warmup_v3.md`

Coupling:

- Strong sequence coupling: v2 benefits from v1, and v3 depends on enough orientation/direction from v1/v2.
- Moderate file-location coupling: wherever these files live, references must be updated together.

Boundary:

- This cluster should be owned by Navigation because it prepares Navigation's session context.

### Cluster B - Protocol Invariants

Elements:

- session warm-up runs once per session;
- rerun only on source-boundary change, staleness, or missing-context failure;
- preserve missing-context warnings;
- hand off to Navigation;
- route selected file work through artifact materialization;
- route selected child inquiry work through branch inquiry;
- review after first real use.

Coupling:

- Strong with safe operation.
- Weak with the exact contents of v1/v2/v3.

Boundary:

- This cluster can live in a small protocol wrapper.

### Cluster C - Navigation Discipline Namespace

Elements:

- `homegrown/navigation/SKILL.md`
- `homegrown/navigation/references/navigation.md`
- possible `homegrown/navigation/warmup/`

Coupling:

- Strong conceptual ownership: Navigation consumes the warm-up result.
- Low risk if a `warmup/` child folder is added because it stays inside the existing discipline namespace.

Boundary:

- Put Navigation-owned support routines here.

### Cluster D - Shared Protocol Namespace

Elements:

- `homegrown/protocols/branch_inquiry.md`
- `homegrown/protocols/artifact_materialization.md`
- `homegrown/protocols/outcome_review.md`
- `homegrown/protocols/navigation_context_intake.md`

Coupling:

- Shared cross-cutting protocols that many disciplines or runners may route through.
- Low natural fit for detailed command routines.

Boundary:

- Keep only cross-cutting invariants/wrappers here.

### Cluster E - Transition / Reference Migration

Elements:

- root `navigation-project-warmup_v*.md` paths;
- previous finding references;
- `navigation_context_intake.md` references;
- future Navigation invocation docs.

Coupling:

- Moderate. Moving files before updating references can create stale paths.

Boundary:

- Handle after v3 cleanup or with compatibility notes.

## Question Tree

### Q1. What should be the authoritative detailed warm-up procedure?

Verification:

- [x] v1/v2/v3 are identified as the detailed routine.
- [x] `navigation_context_intake.md` is excluded as the detailed routine.
- [x] The routine is session-level, not request-level.

### Q2. What should `navigation_context_intake.md` become?

Verification:

- [x] It should not be deleted immediately.
- [x] It should not remain the full detailed protocol.
- [x] It should become a tiny wrapper/deprecation bridge that delegates to v1/v2/v3 and preserves invariants.

### Q3. Where should v1/v2/v3 live?

Verification:

- [x] Root location is temporary and not ideal.
- [x] `homegrown/protocols/navigation/` is rejected as first choice due namespace confusion.
- [x] `homegrown/navigation/warmup/` is selected as the cleaner destination.

### Q4. What must happen before moving or retiring?

Verification:

- [ ] v3 must be cleaned.
- [ ] references must be updated after move.
- [ ] old protocol must be shrunk rather than duplicated.
- [ ] first real use should happen before deletion.

## Interface Map

| Source Piece | Target Piece | What Flows | Direction |
| --- | --- | --- | --- |
| v1 orientation | v2 direction | project summary, current frontier, source authority | one-way |
| v2 direction | v3 traces | goal architecture, intermediate goals, active attempts | one-way |
| v1/v2/v3 outputs | Navigation discipline | warmed session context | one-way |
| protocol wrapper | v1/v2/v3 routine | execution pointer and run/rerun rules | one-way |
| Navigation output | artifact materialization | selected file-changing direction | conditional one-way |
| Navigation output | branch inquiry | selected child inquiry direction | conditional one-way |
| first real use | outcome review | observed usefulness and mismatch evidence | one-way |

## Dependency Order

1. Clean `navigation-project-warmup_v3.md` enough that the routine has three coherent steps.
2. Create `homegrown/navigation/warmup/`.
3. Move v1/v2/v3 into that folder with stable names.
4. Replace `navigation_context_intake.md` with a short wrapper that points to the moved routine.
5. Update direct path references in recent findings or add compatibility notes.
6. Use the routine once in a real Navigation session.
7. After that use, decide whether to delete, rename, or keep the wrapper.

## Self-Evaluation

### Independence

Pass. The execution routine, protocol invariants, namespace placement, and transition work are separable.

### Completeness

Pass. The decomposition covers removal, rewrite, folder placement, and transition risk.

### Reassembly

Pass. If all pieces are handled in order, the system gets a cleaner warm-up routine without losing safety invariants.

### Tractability

Pass. Each step can be implemented as a small patch.

### Interface Clarity

Pass. The key interface is explicit: v1/v2/v3 produce warmed context; Navigation consumes it; wrapper only routes and preserves invariants.

### Balance

Pass. The largest task is v3 cleanup, but the organization decision is still clear without solving every v3 detail now.

### Confidence

Medium-high. The structure is grounded in current file layout and previous finding, but final deletion should wait until after first real use.
