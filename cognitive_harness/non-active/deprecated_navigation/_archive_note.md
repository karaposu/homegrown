# Archive note — `deprecated_navigation/` (formerly `/navigation`)

**Status:** deprecated. Active discipline is now `/routeman` at `cognitive_harness/routeman/`.

**Rename date:** 2026-05-23 (design memo) → 2026-05-25 (migration completing).

## Why this folder is named `deprecated_navigation/` and not deleted

The cognitive discipline that previously lived here as `/navigation` has been renamed to `/routeman` and rebuilt at `cognitive_harness/routeman/`. This folder is retained for two reasons:

1. **Backwards-compatibility** with any in-flight artifacts (older inquiry findings; design memos; runner traces) that may still reference the old `/navigation` name or its content.
2. **Historical reference** — the canonical `/navigation` spec (at `references/navigation.md`) + the `warmup/` folder's five warmup-context files (`navigator-warmup1.md` through `navigator-warmup3.md` + `navigator-refresh.md` + `navigator-prior-map-overlay.md`) preserve the prior version of the discipline's design for readers tracing the project's evolution.

**No new development happens here.** All changes to the cognitive operation of enumerating possible next moves go to `cognitive_harness/routeman/`.

## Why the rename happened

The rename is **structural-not-cosmetic**. A purely cosmetic rename would substitute a new label for the old discipline while preserving the underlying spec content verbatim; that wouldn't solve the underlying problem.

The underlying problem: this folder's prior `/navigation` spec had accumulated a corpus of findings, partial designs, and definitional attempts over time. When agents reasoned about the discipline, they retrieved material from that prior corpus by content similarity (not by label) — and some of it carried framings or commitments that had since been corrected. The corpus baggage anchored new reasoning to old (sometimes incorrect) versions.

The rename's value depends on the new spec being **structurally distinguishable** from the old, with explicit per-component decisions about what carries forward and what doesn't. A diagnostic was applied per sub-claim — for each commitment in `/navigation`'s spec, three tests held: is the commitment true at its claimed level; is the claimed level coherent; does the commitment survive external citation. Any NO defaulted to a CORRECTS-equivalent (drop or refine the component).

The result: `/routeman` is a discipline whose specific identity, features, attributes, lineage decisions, and failure-mode framework are each derivable from the discipline's identity statement and traceable to specific anchors — rather than inherited wholesale from the prior spec. Three layers of identity survive (paradigm-instantiation as Navigational; prescriptive-extension via four residuals; cycle-consumer at the process layer); five reductions and four residuals inherit; five runner-level mis-attributions drop; three components refine; four defer to specific revival triggers.

The folder name `deprecated_navigation/` is intentional: it signals "this was deprecated" rather than masquerading as still-active. Renaming the folder to anything else (e.g., `navigation_old/` or `archive_navigation/`) would lose that signal.

## Where the new discipline lives

- **Runtime spec:** `cognitive_harness/routeman/SKILL.md` — short procedural orchestrator.
- **Reference file:** `cognitive_harness/routeman/references/routeman.md` — the thinking-discipline reference loaded at Step 0.

`/routeman` follows the same 5-Core convention as `/surfacing`, `/sense-making`, `/decompose`, `/innovate`, and `/td-critique`. The routeman reference is a pure thinking discipline describing how enumerating possible next moves works in its core, in structured form — without referring to project-specific protocols, folders, or design history.

## Where the design rationale lives

The full design rationale for the rename + the discipline's identity + features + attributes + lineage decisions + failure-mode framework is recorded in the project's design-history layer (the `devdocs/inquiries/` corpus). Notable design-history artifacts include the 14-39 design memo (the meaning-layer design), the 15-20 frontier-questions finding (the implementation-frontier questions with Q1-Q6 + Q10 resolutions), and the 11-00 structural-layer inquiry (the spec organization design). These artifacts are NOT pointed to from `/routeman`'s runtime spec (per the project's "disciplines self-contained" feedback memory) but are the canonical record of the rename's reasoning for readers tracing the project's evolution.

## What lives in this folder

- `SKILL.md` — the prior `/navigation` runtime spec (deprecated).
- `references/navigation.md` — the prior `/navigation` reference file (deprecated).
- `warmup/` — five warmup-context files used by the prior `/navigation`'s "full-warmup-needed" input mode. **Not carried forward** to `/routeman`: under the corrected isolated-session + file-scanning architecture, `/routeman` scans inquiry folders for its inputs; the file system IS the persistent context; no prior-context warmup needed.

These files are not loaded by any active runner or skill. Reading them is informational only — useful for understanding the prior design, not for invoking the discipline.

## When this folder may eventually be removed

This folder remains until in-flight artifacts that reference the old `/navigation` name have migrated. Removal would happen via a separate cleanup pass — not automatically. No deletion is currently scheduled.
