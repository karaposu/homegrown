---
status: superseded
refines: devdocs/inquiries/inquiry_folder_organization/finding.md
superseded_by: devdocs/inquiries/inquiry_storage_policy_correction/finding.md
---
# Finding: Inquiry Folder Tidy Strategy

## Changes from Prior

**Prior path:** devdocs/inquiries/inquiry_folder_organization/finding.md

**Revision trigger:** User reframed the problem toward a simpler, non-complex answer: whether datetime prefixes or an archive folder are actually needed, and whether a better lightweight alternative exists.

**What's preserved:** The prior finding's strongest insight remains correct: renaming or moving inquiry folders is risky because inquiry paths are used as references.

**What's changed:** The answer no longer starts with a helper script or generated index. The first step is manual and document-sized: a small `devdocs/inquiries/README.md` plus status hygiene.

**What's new:** Archive is defined as a visibility/status concept first, not as a physical folder move. Datetime prefixes are rejected for both retroactive and default future naming.

**Migration:** Keep existing folder names and locations. Add a README view, fix missing status metadata, and revisit automation only after the manual convention proves useful but annoying.

## Question

How should `devdocs/inquiries/` stay tidy as the number of inquiry folders keeps increasing, and are datetime-prefixed folder names or an archive folder the best low-complexity solution?

The goal is to choose a practical convention the user can apply without breaking existing inquiry links. The answer must compare datetime prefixes, archive folders, status/index alternatives, and migration cost.

## Finding Summary

- **Do not add datetime prefixes to inquiry folder names.** Dates are useful metadata, but folder names are stable identifiers in this project. Adding dates to existing folders would create path rewrite work, and adding them only to future folders would create a split naming convention.

- **Do not create a physical `devdocs/inquiries/archive/` folder yet.** Moving inquiry folders changes canonical paths such as `devdocs/inquiries/finding_lineage_metadata/finding.md`. That breaks the flat path assumption used by findings, relationships, and loop runners.

- **Use view-based tidiness first.** Keep all inquiry folders flat under `devdocs/inquiries/<slug>/`, then add `devdocs/inquiries/README.md` as the tidy navigation surface.

- **Make archive semantic before physical.** Start with an `Archived / Cold` section in the README. Later, if needed, add `ARCHIVED` as a `_state.md` status. Do not move folders unless the project first has a path-migration policy.

- **Run a small hygiene pass.** Current scan found 59 inquiry folders: 11 `ACTIVE`, 37 `COMPLETE`, 5 `SUPERSEDED`, 4 missing `_state.md`, and 2 with `_state.md` but no `## Status`. The missing state/status folders are the real mess that should be surfaced.

- **Defer tooling.** A script-generated index may be useful later, but the first version should be a hand-maintained README. If manual upkeep becomes repetitive or unreliable, that is the evidence to build a generator.

## Finding

### 1. The Main Decision

Keep `devdocs/inquiries/` as a flat canonical store:

```text
devdocs/inquiries/<topic_slug>/
```

That path shape should remain stable. It is already used by findings, `_state.md` relationships, and human memory. In this project, an inquiry folder name is not only a display label. It is an identifier.

The tidy layer should be a view over those folders:

```text
devdocs/inquiries/README.md
```

The README is where recency, importance, current status, supersession, and archival state become visible. The folders remain stable; the view changes.

### 2. Why Datetime Prefixes Are Not The Best Move

Datetime prefixes solve one narrow problem: alphabetical folder listing can become chronological.

Example:

```text
2026-04-27_finding_lineage_metadata
2026-04-27_inquiry_folder_tidy_strategy
```

That looks neat in `ls`, but it creates three problems.

First, retroactive date prefixes would change existing paths. Every reference to `devdocs/inquiries/finding_lineage_metadata/finding.md` would need to become something like `devdocs/inquiries/2026-04-27_finding_lineage_metadata/finding.md`.

Second, future-only date prefixes create a split convention. Old folders stay topic-first; new folders become date-first. That makes the root folder less coherent, not more coherent.

Third, dates make topic scanning worse. When every folder begins with `2026-04-27`, the user has to visually skip the date to find the concept.

The better rule is: **folder names stay topic-first; dates live in `_state.md` history and in the README view.**

### 3. Why A Physical Archive Folder Is Premature

A physical archive folder would reduce visible clutter:

```text
devdocs/inquiries/archive/<slug>/
```

But it also changes the inquiry path. That is the same identity problem as renaming.

The existing `devdocs/archive/` folder is also not an inquiry archive. It already contains old discipline/material categories such as `sensemaking`, `innovation`, `critique`, and `deprecated`. Reusing it for inquiry folders would mix two archive meanings.

The safer rule is: **archive is a section or status first, not a folder move.**

Start with this in `devdocs/inquiries/README.md`:

```markdown
## Archived / Cold

- [old_inquiry_name](old_inquiry_name/) — no longer active reference; kept for history.
```

If this becomes a common state, then add `ARCHIVED` to `_state.md` status vocabulary later. Even then, the folder does not need to move.

### 4. The Recommended README Shape

Create `devdocs/inquiries/README.md` as a hand-maintained navigation view.

The first version should be intentionally simple:

```markdown
# Inquiries

This file is a navigation view over stable inquiry folders. Canonical inquiry folders remain directly under `devdocs/inquiries/<slug>/`.

## Current

- [inquiry_folder_tidy_strategy](inquiry_folder_tidy_strategy/) — deciding inquiry folder organization.

## Recent Findings

- [finding_lineage_metadata](finding_lineage_metadata/finding.md) — recommends prior-path and source-input metadata before loop diagnosis.

## Important Reference

- [cognitive_os_prompt_library_evidence_consciousness](cognitive_os_prompt_library_evidence_consciousness/finding.md) — clarifies what Homegrown is and is not.
- [autonomous_continuous_self_maintenance_levels](autonomous_continuous_self_maintenance_levels/finding.md) — defines self-maintenance levels.

## Superseded

- [search_equals_navigation_plus_x](search_equals_navigation_plus_x/) — superseded by later navigation work.

## Archived / Cold

- Add completed findings here when they are no longer active reference material.

## Needs Hygiene

- Add folders here when `_state.md`, `## Status`, or `finding.md` is missing unexpectedly.
```

This file does not need to list all 59 folders on day one. It should list what helps navigation:

- current work;
- recent findings;
- important reference findings;
- known superseded or cold material;
- messy folders needing cleanup.

If it tries to become a perfect database immediately, it will recreate the complexity problem.

### 5. The Hygiene Pass

The current scan found metadata debt:

- 4 folders missing `_state.md`;
- 2 folders with `_state.md` but no `## Status`;
- 23 folders without `finding.md`.

The first tidy pass should not force every unfinished inquiry to be solved. It should make the uncertainty visible.

Use a `Needs Hygiene` section in the README:

```markdown
## Needs Hygiene

- `discipline_relevance_audit` — missing `_state.md`; decide whether to recreate state or mark superseded.
- `extract_conclude_to_homegrown` — missing `_state.md`; work may have happened outside formal inquiry.
- `skill_folder_restructure_check` — missing `_state.md`; decide whether superseded.
- `synthesize_protocol_check` — missing `_state.md`; decide whether superseded.
- `adapter_pattern_for_scalable_loop` — `_state.md` has no `## Status`.
- `breakthrough_for_consciousness` — `_state.md` has no `## Status`.
```

Then resolve them gradually. The immediate improvement is not perfect cleanliness. It is that the mess is named and contained.

### 6. When To Add Automation

Do not build a tool first.

Build automation when there is evidence that the manual README is useful but annoying. Good triggers:

- after 20 more inquiries, the README is hard to maintain manually;
- the README is stale three times in a row when the user needs it;
- status hygiene improves enough that `_state.md` can be trusted as an index source;
- the user starts asking repeatedly for "show active/recent inquiries."

At that point, a small generator such as `tools/inq` makes sense. It should generate the same README sections from `_state.md`, not replace the policy.

## Next Actions

### MUST

- **What:** Create `devdocs/inquiries/README.md` as a manual navigation view with `Current`, `Recent Findings`, `Important Reference`, `Superseded`, `Archived / Cold`, and `Needs Hygiene` sections.
  **Who:** User or next implementation pass.
  **Gate:** Before adding any datetime prefixes or archive folder.
  **Why:** Gives immediate visual order without changing canonical inquiry paths.

- **What:** Add the 6 known missing-state/status folders to `Needs Hygiene`.
  **Who:** User or next implementation pass.
  **Gate:** Same pass as README creation.
  **Why:** Makes the real metadata mess visible instead of hiding it under folder moves.

- **What:** Keep new inquiry folder names topic-first.
  **Who:** MVL/MVL+ runners and humans creating inquiry folders.
  **Gate:** Ongoing.
  **Why:** Prevents split naming conventions and keeps paths readable.

### COULD

- **What:** Add `ARCHIVED` as a formal `_state.md` status later.
  **Who:** Protocol maintainer.
  **Gate:** After the README's `Archived / Cold` section is used repeatedly and the meaning is stable.
  **Why:** Turns archive from an informal view section into machine-readable metadata.

- **What:** Generate the README from `_state.md` later.
  **Who:** Tooling pass.
  **Gate:** If manual README updates become repetitive or stale.
  **Why:** Reduces upkeep once the view convention is proven.

### DEFERRED

- **What:** Create `devdocs/inquiries/archive/` and move folders into it.
  **Gate:** Only revisit if canonical path references become resilient to moved inquiries.
  **Why (if revived):** It could reduce root-folder visual clutter, but currently breaks path stability.

- **What:** Add datetime prefixes to inquiry folders.
  **Gate:** Only revisit if the project stops treating inquiry folder paths as stable identifiers.
  **Why (if revived):** Date-prefix sorting is convenient in plain filesystem views, but currently not worth the identity cost.

## Reasoning

The strongest survivor is **README + status hygiene**. It directly addresses the user's actual pain: the folder is hard to navigate because current, recent, stale, and important inquiries are visually mixed. It does this without renaming or moving anything.

The manual README survived because it is the smallest useful mechanism. It can be created quickly, changed easily, and later generated by a tool if it proves valuable.

The semantic archive survived because it separates two meanings of archive. The project needs a way to lower attention on old inquiries; it does not yet need a new physical location that changes paths.

Retroactive datetime prefixes were killed because they mutate stable identifiers. The benefit is chronological sorting; the cost is path rewrite and worse topic scanning.

Future-only datetime prefixes were refined away because they create a split convention. Dates should appear in the README or `_state.md`, not in the folder name.

Physical archive folders were killed as the first step because moving folders changes canonical paths. This is especially risky in a project where findings explicitly point to each other by path.

Status bucket folders such as `active/`, `complete/`, and `archive/` were killed because every status transition becomes a path move. Status should be metadata, not directory topology.

Script-generated indexing was deferred because the prior bad finding overbuilt the first step. Tooling is likely useful later, but only after the manual convention proves the shape of the needed view.

The contradiction across the inquiry resolved as: **keep storage boring and stable; make the view flexible and useful.**

## Open Questions

### Monitoring

- After 10 more inquiries, does the README still make navigation easier?
- After 20 more inquiries, does manual README maintenance feel annoying enough to justify a generator?
- After the `Needs Hygiene` section is created, do the missing-state/status folders get resolved or remain as long-term known debt?

### Blocked

- A physical archive folder is blocked until path-reference migration is solved.
- A generated index is blocked until `_state.md` status coverage is reliable enough to generate useful sections.

### Refinement Triggers

- Reopen this policy if the user repeatedly navigates by raw `ls` and still finds the folder unreadable after the README exists.
- Reopen the `ARCHIVED` status decision after the README's `Archived / Cold` section contains at least 5 entries.
- Reopen automation after the README is stale in 3 separate sessions where the user needed it.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 

in /Users/ns/Desktop/projects/native/devdocs/inquiries folder there are so many folders are there and the amopuint will only increase, we need to make it tidy somehow, maybe adding datetime prefix to the fodler name is good? are there better non complex alaternatives? also we should have archive folder in inquiries ?
```

The pasted classic MVL skill block in the user message was omitted from this source appendix because it was runner metadata, not the conceptual input for the inquiry.

</details>
