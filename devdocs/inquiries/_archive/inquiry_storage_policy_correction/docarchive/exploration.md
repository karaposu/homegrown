# Exploration: Inquiry Storage Policy Correction

## User Input

`devdocs/inquiries/inquiry_storage_policy_correction/_branch.md`

## Mode And Entry Point

- **Mode:** Mixed artifact and possibility exploration.
- **Artifact territory:** prior finding, current devdocs architecture notes, existing archive guidance, current inquiry folder shape.
- **Possibility territory:** date-prefix schemes, archive-folder schemes, reference migration policies, README/index alternatives.
- **Entry point:** Signal-first. The user identified a specific false premise: inquiries are not canonical fundamentals; they are persistence/provenance.

## Scan 1: Relevant Artifacts

### Prior Finding

`devdocs/inquiries/inquiry_folder_tidy_strategy/finding.md` says:

- keep `devdocs/inquiries/` as a flat canonical store;
- do not use datetime prefixes;
- do not create a physical archive folder;
- add a manual `devdocs/inquiries/README.md`.

The vulnerable claim is "canonical store." The prior answer treated inquiry paths like stable first-class identifiers.

### Architecture Evidence

`devdocs/archaeology/intro2codebase.md` says:

- `homegrown/` is the source tree;
- `devdocs/inquiries/<name>/` is runtime storage created by skills;
- an inquiry folder is a file-backed job record;
- Markdown files are the persistence layer.

This supports the user's correction. The canonical implementation lives in `homegrown/`; inquiries are durable process artifacts, not the primary source of truth.

### Devdocs Maintenance Evidence

`devdocs/maintaining_devdocs_in_a_feasible_way.md` says:

- "Archive, Never Delete";
- devdocs accumulate and become confusing if completed/superseded work stays active;
- each top-level devdocs folder can have an `_archive/` subfolder;
- archive folders preserve original folder structure;
- disk space is not the problem; navigability is.

This directly supports physical archive as a known devdocs maintenance pattern.

### Current Folder Evidence

Prior scan found:

- 59 inquiry folders;
- 11 `ACTIVE`;
- 37 `COMPLETE`;
- 5 `SUPERSEDED`;
- 4 missing `_state.md`;
- 2 with `_state.md` but no `## Status`;
- 36 with `finding.md`;
- 23 without `finding.md`.

The folder is already at the scale where chronological and active/cold separation matters.

## Signal Detection

### Signal 1: The Prior Premise Was Too Strong

The prior finding treated inquiry paths as if preserving every old path was a high-order architectural constraint. Evidence suggests that is too strong. Inquiry paths matter for provenance and resumption, but they are not the canonical fundamentals.

**Confidence:** High.

### Signal 2: Reference Breakage Has Different Severity By Artifact Type

Broken references inside old inquiry findings are not equivalent to broken protocol paths in `homegrown/`.

Severity ladder:

1. `homegrown/` protocol/skill references: high severity.
2. active inquiry `_state.md` resume paths: high-medium severity.
3. recent finding lineage references: medium severity.
4. old archived inquiry cross-references: low-medium severity.
5. stale/bad inquiry references: low severity.

The prior finding collapsed all references into one high-severity category.

**Confidence:** High.

### Signal 3: Datetime Prefixes Have Real Operational Value

Datetime prefixes expose recency without opening `_state.md` files. That helps both humans and AI agents scanning folder names.

This is especially valuable if inquiries are a growing corpus, not a curated canonical library.

**Confidence:** High.

### Signal 4: Physical Archive Has Real Operational Value

An archive folder reduces active-surface noise. This fits existing devdocs guidance and avoids making a README carry the whole navigation burden.

**Confidence:** High.

### Signal 5: README Adds Maintenance Without Solving The Root

A hand-maintained README is a view, but if the folder itself remains noisy and the README must be updated manually, it creates another artifact that can drift.

It can still be useful later as generated output, but as manual v1 it is weaker than I claimed.

**Confidence:** High.

## Possibility Scan

### Candidate A: Full Migration To Date-Prefixed Active Folders

Rename all current non-archived inquiry folders:

```text
devdocs/inquiries/2026-04-27_inquiry_storage_policy_correction/
```

Pros:

- recency visible in folder name;
- easy lexical sorting;
- no manual README needed for recency.

Cons:

- requires migration pass;
- existing references need update or acceptance of breakage;
- exact creation date may be missing for some old folders.

### Candidate B: Future-Only Date Prefixes

Keep old folders unchanged; new inquiries use date prefixes.

Pros:

- simple adoption;
- no retroactive migration.

Cons:

- split convention;
- old clutter remains.

### Candidate C: Archive Folder Without Date Prefix Migration

Move cold/completed/superseded folders to:

```text
devdocs/inquiries/_archive/<slug>/
```

Pros:

- immediate active-surface cleanup;
- matches existing devdocs `_archive/` pattern;
- preserves folder internal structure.

Cons:

- archived folder paths change;
- old references may break unless updated or tolerated;
- recency among active folders remains less visible.

### Candidate D: Date Prefix + Archive Folder

Use date-prefixed names for active/new inquiries and archive completed/cold inquiries under `_archive/`.

Pros:

- recency visible;
- active surface small;
- aligns with provenance nature of inquiries.

Cons:

- requires clear transition policy;
- path migration must be intentional;
- protocol runner must create date-prefixed folders going forward.

### Candidate E: Manual README View

Keep folders flat, update README manually.

Pros:

- no path changes;
- simple to create.

Cons:

- adds maintenance;
- can go stale;
- does not reduce filesystem clutter;
- weaker if inquiries are not canonical references.

### Candidate F: Generated Index Only

Keep folders flat and generate an index from `_state.md`.

Pros:

- no manual maintenance;
- no path changes.

Cons:

- needs tooling;
- still leaves active folder root crowded.

## Probe: What Archive Folder Name?

Existing devdocs guidance uses `_archive/`, not `archive/`.

`_archive/` has two advantages:

- sorts visually apart from normal inquiry folders;
- signals infrastructure/storage, not another inquiry.

Probe result: if an inquiry archive folder is created, `_archive/` is better than `archive/`.

## Probe: What Date Format?

Candidates:

- `20260427_slug`
- `2026-04-27_slug`
- `2026-04-27T1730_slug`

Best v1: `YYYY-MM-DD_slug`.

Reason:

- human-readable;
- lexically sortable;
- enough granularity for day-level inquiry work;
- avoids noisy time precision.

If multiple inquiries on the same day share similar slugs, slug uniqueness handles it.

## Confidence Map

| Region | Confidence | Reason |
|---|---:|---|
| Inquiries are persistence/provenance, not canonical fundamentals | High | Architecture docs support this. |
| Prior finding over-weighted path stability | High | User correction + evidence support it. |
| Archive folder has real benefits | High | Existing devdocs guidance supports `_archive/`. |
| Manual README was over-recommended | High | It adds drift-prone maintenance and does not reduce root clutter. |
| Exact migration scope | Medium | Needs user choice: full migration now vs forward-only. |
| Reference rewrite necessity | Medium | Depends on how much old lineage readability matters. |

## Frontier And Gaps

Known:

- The previous finding needs correction.
- Datetime prefixes and archive folders are stronger than previously judged.
- Broken references in old inquiries are tolerable in some cases, especially if fundamentals remain canonical.
- A manual README is not the best primary mechanism.

Open:

- Whether to migrate all existing folders or only adopt the convention going forward.
- Whether to update references during migration or accept stale old references.
- Whether active/incomplete folders should be exempt from archiving until completed/superseded.

## Convergence Check

- **Frontier stability:** Stable enough. The main missed premise is identified.
- **Declining discovery rate:** Additional exploration is generating policy variants, not new categories.
- **Bounded gaps:** Remaining gaps are migration choices, not conceptual unknowns.

## Exploration Output

The corrected direction is: acknowledge the prior mistake, treat inquiries as provenance/persistence artifacts, favor `_archive/` for old/cold inquiries, and strongly consider `YYYY-MM-DD_slug` naming for new inquiries and possibly migrated existing inquiries. Manual README should not be the primary solution.
