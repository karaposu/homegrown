# Sensemaking: navigation_warmup_readme_necessity

## SV1

The README looks like a harmless run-order index, but the user senses it may be bloat.

## Anchors

- Homegrown is trying to reduce human navigation burden, not increase artifact maintenance.
- Conditional routing already belongs to `navigation_context_intake.md`.
- Individual warm-up files own their own operation details.
- Duplicate authority has repeatedly caused risk in recent design work.

## Ambiguity Collapse

### Ambiguity: Is README an index or a router?

If it is an index, it may be useful but not required yet.

If it is a router, it duplicates `navigation_context_intake.md`.

Resolution: do not keep it as a router. Remove it now; recreate later only as a pure index if needed.

### Ambiguity: Where should run order live?

Resolution: `navigation_context_intake.md` owns run order because run order depends on session state.

## Stabilized Model

The warm-up folder should contain executable routines only. The context router should decide which routine to run. A README is not load-bearing until discoverability failure appears in real use.
