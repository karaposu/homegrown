# Branch: MVL Branch Protocol Edits Multihead Scalability

## Question

What needs to change in the MVL and MVL+ loop skills to support explicit branch inquiries now while keeping the design scalable for future multihead and parallel branch execution?

## Goal

A good answer should list concrete edits, decide whether branching belongs in a new protocol or directly inside the MVL loop skills, and identify the minimum design hooks needed for future multihead and parallel execution without overbuilding the first version.

## Scope Check

Question covers goal. It asks for the edit list, the protocol boundary, and scalability concerns.

## Context

- Prior finding: `devdocs/inquiries/2026-05-01_19-17__mvl_branching_folder_structure/finding.md`.
- Current MVL and MVL+ skills create only flat root inquiry folders.
- Current MVL and MVL+ skills use `[folder_name]` placeholders that assume `devdocs/inquiries/[folder_name]/`.
- `CONCLUDE` and `RESUME` are path-oriented enough to support nested paths, but their examples and parent-pointer behavior need tightening.
- Future multihead execution should avoid concurrent writes to the same parent index.
