# Decomposition: prior_navigation_map_overlay_mutability

## Coupling Map

### Strongly Coupled

- Old map semantics and provenance.
- Overlay output contract and current route interpretation.
- Navigation warm-up README and context router routing language.

### Moderately Coupled

- Refresh routine, because it also handles stale session context but not historical route reconciliation.
- Multi-resolution `_frontier.md`, because it provides an analogous state sidecar pattern.

### Weakly Coupled

- Future runner automation.
- Future graph/index UI.

## Question Tree

### Q1 - What should old Navigation maps mean?

Verification:

- [x] Historical snapshot semantics stated.
- [x] Mutation risk identified.

### Q2 - Where should current interpretation of old routes live?

Verification:

- [x] Overlay artifact identified.
- [x] Authority split stated.

### Q3 - When should overlay run?

Verification:

- [x] Cold warm-up route specified.
- [x] Per-run overlay rejected.
- [x] Triggered route-memory reconciliation preserved.

### Q4 - What files need correction?

Verification:

- [x] `navigator-prior-map-overlay.md`
- [x] `homegrown/navigation/warmup/README.md`
- [x] `homegrown/protocols/navigation_context_intake.md`

## Interfaces

- README -> overlay: run order and role.
- context router -> overlay: when to execute.
- overlay -> Navigation: current route-memory context.
- old maps -> overlay: read-only evidence.

## Dependency Order

1. Decide mutability rule.
2. Patch overlay contract.
3. Patch warm-up README.
4. Patch router wording.
5. Later test with one real overlay.

## Self-Evaluation

- Independence: pass. Mutability, trigger, and file patches are separable.
- Completeness: pass. Covers old maps, overlay, router, README, and current-state homes.
- Reassembly: pass. The pieces reconstruct a coherent route-memory lifecycle.
