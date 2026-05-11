# Branch: Inquiry Folder Tidy Strategy

## Question

How should `devdocs/inquiries/` stay tidy as the number of inquiry folders keeps increasing, and are datetime-prefixed folder names or an archive folder the best low-complexity solution?

## Goal

A good answer should let the user choose and apply a simple organization policy for `devdocs/inquiries/` without breaking existing inquiry links. It should compare datetime prefixes, an archive folder, status/index alternatives, and concrete cleanup rules; then recommend the smallest durable next step.

## Scope Check

Question covers goal. The question asks both about the user's proposed mechanisms (datetime prefix and archive folder) and whether better non-complex alternatives exist. The goal asks for a concrete policy and migration direction, which the question can answer directly.

## Context

- `devdocs/inquiries/` currently has 59 inquiry folders.
- Current status coverage from `_state.md`: 11 `ACTIVE`, 37 `COMPLETE`, 5 `SUPERSEDED`, 4 missing `_state.md`, and 2 with `_state.md` but no `## Status`.
- 36 folders currently have `finding.md`; 23 do not.
- 35 inquiry folders have per-inquiry `docarchive/` subfolders.
- `devdocs/archive/` already exists, but it is organized by discipline/material category and is not currently an inquiry-folder archive.
- A previous inquiry exists at `devdocs/inquiries/inquiry_folder_organization/finding.md`, but its finding is marked as a bad finding and should not be treated as authoritative.

## Relationships

- REFINES: inquiry_folder_organization (prior answer was explicitly marked bad; this inquiry keeps the question but seeks a simpler, more robust policy)
- RELATED: finding_lineage_metadata (this inquiry uses prior-path and raw-input lineage conventions)
