# Branch: inquiry_folder_organization

## Question

How should `devdocs/inquiries/` be organized so the user (and any future agent reading the folder) can tell which inquiries are recent and which are stale at a glance — and is a compact datetime-prefix + archive-folder convention the best approach, or does a better alternative exist?

## Goal

A concrete, applicable organizational convention for `devdocs/inquiries/` that:

1. Makes recency visible at a glance (the user can see "what was worked on recently" without reading every `_state.md`).
2. Makes relevance/staleness visible (the user can see which inquiries are active, complete, superseded, or archived).
3. Has the smallest possible naming overhead — datetime prefix should be compact if used.
4. Specifies the archival criterion concretely (when does an inquiry move to archive — by status? by age? by both?).
5. Specifies whether it's applied retroactively to existing inquiries, and if so, with what effort.
6. Considers alternatives to datetime-prefix (status subfolders, frontmatter-only with index file, symlink trees, git-log-as-source-of-truth, etc.) and picks the best.

The user wants to act on the answer — this isn't theoretical. Output should be: the convention chosen + reason it beats alternatives + a concrete migration plan for existing inquiries.

## Scope Check

Question covers goal. The question asks both for the convention and for the comparison against the user's proposed approach (datetime prefix + archive). The goal asks for a defensible chosen convention plus migration. Both covered.

## Context

- `devdocs/inquiries/` currently contains ~30+ folders, no naming convention beyond slugified topic names. Recency is invisible from `ls`.
- Today's date: 2026-04-27.
- The user has been working intensely; many recent inquiries; some stalled; five just marked SUPERSEDED.
- The project values source-of-truth integrity and lightweight conventions (`_state.md` / `_branch.md` / `finding.md` are existing examples).
- Available signals already present: `_state.md` Status field (ACTIVE/COMPLETE/SUPERSEDED), History dates, file mtimes, git log.

## Relationships

- RELATED: `devdocs/inquiries/continuous_loop_priorities/` — that finding's Item 1 includes consolidation of the inquiries folder; this organization decision feeds into that.
- RELATED: the recently-completed SUPERSEDED markers (5 inquiries) — they need a clear visual indicator post-organization.
