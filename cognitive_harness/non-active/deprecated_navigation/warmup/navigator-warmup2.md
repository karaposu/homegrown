# /navigator-warmup2 - Project-Direction Architecture Introduction

Read the project's first-party source-of-truth artifacts and produce an architecture introduction focused on how the project is designed to move from its current state toward its end goal.

Code is in scope when code is part of the project. Do not exclude code. The point is broader than codebase architecture: include code, protocols, contracts, findings, command files, materialized artifacts, and other source-of-truth artifacts when they shape the project's direction.

## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

1. Read the relevant first-party source-of-truth artifacts in full.

   Use the same source authority rule as `navigator-warmup1`: code is source-of-truth when it implements behavior; Markdown is source-of-truth when it defines active protocols, contracts, findings, commands, direction, or constraints.

   If `devdocs/archaeology/project_summary.md` was produced earlier in the same warm-up session, read it first as orientation. It does not replace source artifacts; verify important claims against the artifacts themselves.

2. Describe the project-direction architecture covering:

   - **Known end goal:** What destination the project appears to be moving toward. If the end goal is fuzzy or has multiple versions, say so.
   - **Intermediate goals:** What smaller goals must be reached before the end goal becomes realistic.
   - **Existing attempts:** What code, protocols, findings, notes, branches, or artifacts already try to reach those intermediate goals.
   - **Positioning:** How the current project state is positioned to reach the intermediate goals. Say what is strong, weak, missing, or misaligned.
   - **Main abstractions:** What core concepts the project organizes around, across code and non-code artifacts.
   - **Movement path:** How the project seems intended to progress from current state to next useful state.

3. When code exists, include code architecture where it matters:

   - data or control flow paths;
   - entry points and outputs;
   - storage or artifact-writing behavior;
   - main implementation abstractions;
   - architectural patterns if they are visible and relevant.

   Do not force software architecture categories onto non-code artifacts. For protocols, findings, and thinking artifacts, explain their project role and how they affect movement toward the goal.

4. Write as if onboarding a new collaborator who needs to understand the project direction and how the pieces are arranged to reach it.

5. Be honest. If the architecture is inconsistent, messy, stale, partly implemented, or in transition, say so. If code and written artifacts disagree, identify the mismatch.

### Output

By default, save the introduction to `devdocs/archaeology/project_direction_architecture.md` (create the directory if needed) and print it in the conversation.
If that file already exists, overwrite it completely. Do not append or patch; rewrite the whole thing fresh.

**If `-n` is passed:** print in conversation only, don't write a file.
