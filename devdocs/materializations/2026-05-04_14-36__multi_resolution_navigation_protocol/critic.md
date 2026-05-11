# Critic: Multi-Resolution Navigation Protocol Plan

## High Risks

None.

The plan has a narrow write-set and does not implement runtime behavior.

## Medium Risks

### Risk 1: Protocol Scope Creep

The protocol could become a runner specification with too much implementation detail.

Mitigation: keep v1 procedural and artifact-contract oriented. Define future runner-compatible records, but do not define execution code, CLI parsing, or automation internals.

### Risk 2: Semantic Drift Around Budget

Even if `batch_size` is used, the protocol could still imply that unexpanded routes are less real or less important.

Mitigation: require a frontier ledger before batch execution and state that unrun means pending, not rejected.

### Risk 3: Top-N Scheduling Could Read As Selection

The user's accepted "top N" phrasing can drift into hidden selection.

Mitigation: use scheduling language only. Require composition to distinguish `scheduled`, `expanded`, `pending`, and `selected`/`final route` as separate concepts. Since Navigation does not select, the final selection field should be absent or explicitly `none`.

### Risk 4: Manual Validation Only

`tools/structural_check.sh` is missing, so validation is manual.

Mitigation: add targeted `rg` checks for forbidden/misleading wording and canonical field usage.

## Low Risks

### Risk: `max_expansions` Legacy Mention

Mentioning `max_expansions` may perpetuate the old term.

Mitigation: mention it only in a migration note that explicitly deprecates it as canonical language.

## Verdict

Proceed with a revised plan that:

- explicitly labels v1 as protocol-first, not runner implementation;
- adds a "Breadth Invariant" section;
- requires a frontier ledger before any budgeted expansion;
- uses `batch_size` as canonical;
- treats `max_expansions` as legacy wording only.
