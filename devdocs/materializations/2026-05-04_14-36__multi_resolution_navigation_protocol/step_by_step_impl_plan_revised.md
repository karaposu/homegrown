# Revised Step-By-Step Implementation Plan: Multi-Resolution Navigation Protocol

## Critic-Driven Changes

The critic found no High risks and four Medium risks. The plan is revised to make the protocol-first boundary and budget semantics more explicit.

## Revised Plan

1. Create `homegrown/protocols/multi_resolution_navigation.md`.

2. Add a "Breadth Invariant" section near the top:

   ```text
   Breadth is desired at the discovery layer.
   Execution is what must be controlled.
   ```

3. Add clear Non-Goals:

   - no runner implementation;
   - no final route selection;
   - no hidden pruning;
   - no `.codex` edits.

4. Define canonical terms:

   - expansion frontier;
   - frontier ledger;
   - coverage mode;
   - batch size;
   - scheduling policy;
   - composition output;
   - resume state.

5. Define the input contract using `batch_size` as canonical. Mention `max_expansions` only as a deprecated ambiguous term.

6. Define the execution procedure:

   - verify source authority;
   - produce or consume parent map;
   - enumerate all expansion candidates;
   - write frontier ledger;
   - choose coverage mode;
   - schedule current batch;
   - run child maps;
   - update statuses;
   - write composition;
   - write trace and resume handoff.

7. Define validation and failure modes.

8. Run targeted validation:

   ```text
   rg -n "problem is breadth|too many directions|max_expansions" homegrown/protocols/multi_resolution_navigation.md
   git status --short -- homegrown/protocols/multi_resolution_navigation.md .codex
   ```

9. Write materialization trace with validation results and follow-up gate.

## Approved Write-Set

```text
homegrown/protocols/multi_resolution_navigation.md
devdocs/materializations/2026-05-04_14-36__multi_resolution_navigation_protocol/
```
