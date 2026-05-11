---
status: active
corrects: devdocs/inquiries/inquiry_folder_tidy_strategy/finding.md
---
# Finding: Inquiry Storage Policy Correction

## Changes from Prior

**Prior path:** devdocs/inquiries/inquiry_folder_tidy_strategy/finding.md

**Revision trigger:** User correction: the previous finding treated inquiry folders as canonical artifacts, but Homegrown's canonical layer is the fundamentals/protocols in `homegrown/`; inquiries are a persistence/provenance layer used to develop those fundamentals.

**What's preserved:** The prior finding was right that path changes have a cost and active/resumable inquiries should not be broken casually.

**What's changed:** Path stability is no longer the dominant criterion for all inquiry folders. It is a tiered concern: high for active work and canonical fundamentals, lower for old archived provenance.

**What's new:** The recommended policy is date-prefixed new inquiry folders plus a physical `devdocs/inquiries/_archive/` for cold inquiries. A manual `devdocs/inquiries/README.md` is no longer recommended as the primary organization mechanism.

**Migration:** Supersede the prior README-first policy. Do not move active inquiries. Adopt `YYYY-MM-DD_slug` for new inquiries after runner update, create `_archive/`, and migrate cold inquiries in deliberate batches with selective reference rewrites.

## Question

Was the prior `inquiry_folder_tidy_strategy` finding wrong to treat inquiry folders as canonical stable artifacts, and should Homegrown instead use datetime-prefixed inquiry folders plus an archive folder because inquiries are a persistence/provenance layer rather than the canonical fundamentals?

The goal is to honestly correct the previous finding if its premise was wrong, reassess datetime prefixes and archive folders, explain when broken or rewritten inquiry references are acceptable, and decide what to do with the previously created `devdocs/inquiries/README.md`.

## Finding Summary

- **Yes, the prior finding made a real framing mistake.** It treated `devdocs/inquiries/` as a flat canonical store. More accurate: `homegrown/` contains the canonical fundamentals/protocols; `devdocs/inquiries/` is a file-backed persistence/provenance corpus.

- **Your recommended direction was better than the README-first answer.** Datetime prefixes and an archive folder directly improve the storage layer. A manual README adds maintenance and does not reduce filesystem clutter.

- **Use `YYYY-MM-DD_slug` for new inquiry folders.** This makes recency visible to humans and AI agents before opening `_state.md` or reading folder contents.

- **Create `devdocs/inquiries/_archive/` for cold inquiry folders.** Use `_archive/`, not `archive/`, because existing devdocs guidance already uses underscore-prefixed archive folders and says to archive rather than delete.

- **Do not move active/resumable inquiries casually.** The corrected policy is not "paths do not matter." It is "path importance is tiered." Active inquiries and load-bearing recent findings deserve reference care; stale archived provenance can tolerate more drift.

- **Reference rewrites should be selective, not perfect.** Update references that matter for active work, recent corrective findings, and docs humans actually read. It is acceptable for some old archived inquiry references to become stale.

- **The manual `devdocs/inquiries/README.md` should be deleted or reduced to a static policy note.** It should not be maintained as the primary inquiry index.

## Finding

### 1. What Was Wrong In The Prior Finding

The prior finding said:

```text
Keep `devdocs/inquiries/` as a flat canonical store.
```

That was the wrong model.

The active source of Homegrown is `homegrown/`: the skills, reference files, and shared protocols. The architecture notes describe `devdocs/inquiries/<name>/` as runtime storage and the inquiry folder as a file-backed job record.

So inquiry folders are important, but they are not canonical in the same way as `homegrown/protocols/conclude.md` or `homegrown/MVL+/SKILL.md`.

The better model is:

- **canonical layer:** `homegrown/` fundamentals, skills, references, protocols;
- **persistence layer:** `devdocs/inquiries/` reasoning traces, branch files, state, findings, archived discipline outputs;
- **maintenance goal:** preserve inquiry history without letting it dominate the active workspace.

Once that model is fixed, archiving and date prefixes become much more reasonable.

### 2. Why Datetime Prefixes Are Valuable

Datetime prefixes are not only cosmetic. They expose provenance.

For a growing inquiry corpus, a name like this is useful:

```text
2026-04-27_inquiry_storage_policy_correction
```

It tells a human or AI agent when the inquiry was created without opening `_state.md`.

That matters because broad folder scans are cheap and common. If an agent sees a list of date-prefixed folders, recency is visible at the first scan resolution. Without date prefixes, the agent has to read folder metadata or infer from filesystem mtime.

Recommended format:

```text
YYYY-MM-DD_slug
```

Use day precision. Time precision is probably noise for this workflow.

This should become the default for new inquiries after updating MVL/MVL+ folder creation instructions.

### 3. Why Physical Archive Is Reasonable

The old finding rejected a physical archive mostly because moving folders changes paths.

That objection is real but not decisive.

The existing devdocs maintenance guide already says "Archive, Never Delete" and recommends `_archive/` folders for completed or superseded work. That local convention should apply to inquiries too, unless there is a strong reason not to.

Use:

```text
devdocs/inquiries/_archive/
```

Prefer `_archive/` over `archive/` because the underscore marks infrastructure and keeps it visually separate from normal inquiry folders.

Archive movement has benefits:

- the active inquiry root becomes smaller;
- old reasoning remains preserved;
- completed/superseded/bad inquiries stop competing with current work;
- folder location itself becomes a lifecycle signal.

Archiving is not deletion. It is storage lifecycle management.

### 4. What Not To Move

The corrected policy still needs safeguards.

Do not move:

- active inquiries;
- inquiries likely to be resumed;
- very recent findings still shaping current work;
- findings that are direct inputs to an ongoing correction chain.

These should remain easy to find until their role cools down.

Good first archive candidates:

- `SUPERSEDED` inquiries;
- bad findings kept only for diagnosis;
- abandoned old inquiry starts;
- folders missing `_state.md` that are clearly stale;
- older completed findings that are no longer active references.

The active/cold boundary matters more than the complete/incomplete boundary. A completed finding may still be hot if it is guiding current work.

### 5. Reference Breakage Is A Tiered Cost

The prior finding implicitly treated all broken inquiry references as equally bad.

That was too blunt.

Better severity tiers:

1. **Canonical source paths:** `homegrown/` paths. These must stay correct.
2. **Active/resumable inquiry paths:** should stay correct or be deliberately migrated.
3. **Recent/load-bearing finding references:** should be updated if moved.
4. **Old archived inquiry references:** may become stale if the cost of perfect migration is not worth it.
5. **Bad/stale inquiry references:** low value; breakage is tolerable if the archive path is predictable.

So the migration policy should be selective.

Update references where they matter. Do not spend hours preserving every stale link inside old provenance.

### 6. What To Do With The README

The manual `devdocs/inquiries/README.md` was a bad primary recommendation.

It adds a parallel maintenance surface. It can go stale. It does not make recency visible in raw folder scans. It does not reduce root clutter.

Better options:

- delete it;
- or reduce it to a short static policy note;
- or later generate it automatically from folder names/status if a generated view becomes useful.

It should not be hand-maintained as the main index.

### 7. Recommended Policy

Adopt this policy:

```text
devdocs/inquiries/
├── 2026-04-27_new_inquiry_slug/
├── 2026-04-28_another_inquiry/
├── active_legacy_folder_not_migrated_yet/
└── _archive/
    ├── old_superseded_inquiry/
    └── 2026-04-20_old_completed_inquiry/
```

Rules:

- New inquiries use `YYYY-MM-DD_slug`.
- Active/resumable inquiries stay in root.
- Cold inquiries move to `_archive/`.
- Existing old folders can be migrated gradually.
- High-value references are updated.
- Low-value archived references can remain stale.
- README is not the primary organization mechanism.

This gives the project a simple storage lifecycle:

```text
active/current inquiry -> completed/superseded -> cold archived provenance
```

## Next Actions

### MUST

- **What:** Treat `devdocs/inquiries/inquiry_folder_tidy_strategy/finding.md` as superseded by this correction.
  **Who:** Devdocs maintenance.
  **Gate:** Immediately after this finding.
  **Why:** Prevents the README-first/canonical-store answer from continuing as the active policy.

- **What:** Remove or minimize the manually maintained `devdocs/inquiries/README.md`.
  **Who:** Devdocs maintenance.
  **Gate:** Before doing archive/date-prefix implementation.
  **Why:** Avoids keeping a maintenance artifact created from the wrong premise.

- **What:** Decide whether to update MVL/MVL+ runners so new inquiry folders use `YYYY-MM-DD_slug`.
  **Who:** Protocol maintainer.
  **Gate:** Before the next batch of new inquiries if the user approves this policy.
  **Why:** New folders should carry recency in the name once the policy is adopted.

- **What:** Create `devdocs/inquiries/_archive/`.
  **Who:** Devdocs maintenance.
  **Gate:** Before moving any cold inquiry folders.
  **Why:** Gives old provenance a clear physical lifecycle location.

### COULD

- **What:** Run a selective first archive batch.
  **Who:** Devdocs maintenance.
  **Gate:** After `_archive/` exists.
  **Why:** Move obvious cold candidates first: superseded inquiries, bad findings, abandoned stale starts, and missing-state folders that will not be resumed.

- **What:** Add `_archive/MIGRATION.md`.
  **Who:** Devdocs maintenance.
  **Gate:** When the first archive batch happens.
  **Why:** Records which folders moved, what reference policy was used, and which broken references are accepted debt.

- **What:** Best-effort update high-value references.
  **Who:** Devdocs maintenance or script.
  **Gate:** During each archive batch.
  **Why:** Keeps active and recent lineage readable without requiring perfect global cleanup.

### DEFERRED

- **What:** Full retroactive date-prefix migration for all existing inquiry folders.
  **Gate:** Revisit after new date-prefixed naming has been used for 10+ inquiries.
  **Why (if revived):** A uniform corpus may be worth the migration cost later, but it is not needed for the first correction.

- **What:** Generated inquiry index.
  **Gate:** Revisit if `_archive/` plus date prefixes still do not make navigation easy at 150+ inquiries.
  **Why (if revived):** A generated index can help at larger corpus sizes without manual maintenance.

## Reasoning

The strongest survivor is **date-prefixed provenance with cold archive**. It fits the corrected model: inquiries are durable reasoning records, not canonical source files.

The prior README-first policy was killed because it solves visibility with a manually maintained view while leaving storage noisy. It also depended on the false premise that old inquiry folder paths should be protected almost like canonical source paths.

New `YYYY-MM-DD_slug` inquiry names survived because they encode recency in the storage layer itself. This helps both humans and AI agents during broad scans.

`devdocs/inquiries/_archive/` survived because it matches existing devdocs archive guidance and reduces active-surface clutter without deleting history.

Moving all completed inquiries immediately was refined because some completed findings are still active references. The safer policy is selective archive first.

Perfect reference rewriting was killed because it overvalues stale provenance. Selective reference rewriting survived because it protects active and load-bearing work without turning migration into a large cleanup project.

Full retroactive date migration was deferred. It may become useful, but the first correction should be lower risk: date-prefix new inquiries and archive cold old ones.

The core contradiction resolved as: **fundamentals need canonical stability; inquiry provenance needs lifecycle organization.**

## Open Questions

### Monitoring

- After 10 new date-prefixed inquiries, does recency scanning feel meaningfully better?
- After the first archive batch, does `devdocs/inquiries/` feel easier to scan?
- Do stale references inside `_archive/` actually cause confusion, or are they acceptable?

### Blocked

- Runner changes are blocked on explicit approval to adopt date-prefixed folder creation.
- Physical archive migration is blocked on choosing the first archive batch.

### Refinement Triggers

- Reopen full retroactive migration after 10+ new date-prefixed inquiries if the mixed old/new naming convention feels bad.
- Reopen generated indexing after 150+ inquiry folders or after `_archive/` becomes hard to navigate.
- Reopen reference policy if broken archived links repeatedly block real work.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 
in /Users/ns/Desktop/projects/native/devdocs/inquiries/inquiry_folder_tidy_strategy/finding.md u mention 

Keep `devdocs/inquiries/` as a flat canonical store

but you are missing that inquiries are not canoical files.. they help us develop fundamentals, fundamentals are canonical ... inquiries are just persistance layer. it was a mistake on your side ? or maybe i am missing sth? 

arhieving old ones  has certain  benefits, why are u against it is not clear...


u said Datetime prefixes cause problem of retroactive date prefixes would change existing paths, but why not just edit reference paths? more importantly since inquiries are not cannon it is okay if the so far generated ones are broken referenced...  why u assumed this is not good?  using datetime prefix also easyly gives us and to AI info about what is recent without reading each folder content which is also valuable... 

having devdocs/inquiries/README.md is also not good advice, it is extra maintance, and for what?


i am thinking my recommended approach was better.
```

The pasted classic MVL skill block in the user message was omitted from this source appendix because it was runner metadata, not the conceptual input for the inquiry.

</details>
