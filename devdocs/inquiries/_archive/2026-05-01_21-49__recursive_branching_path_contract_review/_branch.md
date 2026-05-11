# Branch: Recursive Branching Path Contract Review

## Question

Will the planned MVL/MVL+ branch support handle many-layer branching safely, and how should `[folder_name]` path assumptions be replaced without breaking root inquiries or nested branch inquiries?

## Goal

A good answer should decide whether recursive branching is supported, name practical depth limits, and define a safe path-replacement rule for MVL/MVL+, CONCLUDE, RESUME, and related navigation output.

## Scope Check

Question covers goal. The question asks about recursive branch support, depth, and safe path replacement.

## Context

- `homegrown/protocols/branch_inquiry.md` now defines child paths as `[parent_path]/branches/[branch_id]/`.
- MVL and MVL+ still use `devdocs/inquiries/[folder_name]/...` examples and commands.
- Recursive branches will break if any runner reconstructs a path from only a local folder name.
