# Decomposition: Prior Map Overlay Artifact Necessity

## Coupling Map

### Cluster A - Authority Semantics

- Old Navigation maps.
- Active findings and protocols.
- Current warm-up outputs.
- New Navigation map.

Strong internal coupling: these define what counts as current truth versus historical evidence.

### Cluster B - Output Storage Policy

- Inline result.
- Saved `prior_map_overlay.md`.
- Print-only result.
- Handoff prompt.

Strong internal coupling: these define how the reconciliation is carried forward.

### Cluster C - Routing And Trigger Policy

- `navigation_context_intake.md`.
- Navigation Freshness Preflight.
- `navigator-refresh.md`.
- Cold warm-up sequence.

Strong internal coupling: these decide when the overlay routine runs.

### Natural Boundaries

- Authority semantics can be decided independently from storage mode.
- Storage mode can be decided independently from route enumeration.
- Routing should reference the overlay operation without owning its detailed procedure.

## Question Tree

### Q1. What authority split must be preserved?

Verification:

- [x] Old maps remain historical snapshots.
- [x] Overlay is current interpretation of prior route memory.
- [x] New Navigation map remains the current route-space enumeration.

### Q2. What output modes should the overlay operation allow?

Verification:

- [x] Inline mode exists for immediate/small same-session use.
- [x] Save mode exists for durable handoff.
- [x] Print-only remains available for no-file runs.
- [x] Save criteria are named.

### Q3. When should the overlay routine run?

Verification:

- [x] It runs only when prior route memory matters.
- [x] It does not run before every Navigation invocation.
- [x] It remains after warmup1/2/3 for cold project-level sessions when old maps exist and matter.

### Q4. What must Navigation consume?

Verification:

- [x] Navigation can consume a saved overlay file or inline overlay result.
- [x] Navigation does not treat prior maps as current authority.
- [x] Navigation writes the current route map separately.

### Q5. What files need patching?

Verification:

- [x] `navigator-prior-map-overlay.md` storage contract.
- [x] `navigation_context_intake.md` routing wording.
- [x] Prior finding corrected to avoid mandatory-file drift.

## Interface Map

| Source | Target | What Flows | Direction |
| --- | --- | --- | --- |
| Active findings/protocols | Overlay routine | Current authority for classifying old routes | one-way |
| Old Navigation maps | Overlay routine | Historical route records | one-way |
| Overlay routine | Navigation | Prior route-memory interpretation | one-way |
| `navigation_context_intake.md` | Overlay routine | Trigger condition and session route | one-way |
| Overlay routine | Saved artifact | Durable handoff only when needed | conditional |

## Dependency Order

1. Preserve authority split.
2. Define output modes and save policy.
3. Patch overlay routine.
4. Patch router wording.
5. Patch old finding with correction.
6. Let future Navigation use the adaptive result.

## Self-Evaluation

- Independence: PASS. Authority, output mode, routing, and Navigation consumption are separable.
- Completeness: PASS. The decomposition covers the whole design question.
- Reassembly: PASS. If all pieces are satisfied, the original problem is solved without mutating old maps or forcing artifact bloat.
