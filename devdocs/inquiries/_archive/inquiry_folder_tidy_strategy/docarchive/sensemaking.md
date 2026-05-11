# Sensemaking: Inquiry Folder Tidy Strategy

## User Input

`devdocs/inquiries/inquiry_folder_tidy_strategy/_branch.md`

## SV1 — Baseline Understanding

The user sees `devdocs/inquiries/` getting crowded and wants a low-complexity convention before the growth becomes unmanageable. Datetime prefixes and an archive folder are plausible candidates, but the real question is whether they are the simplest durable way to make the folder readable.

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- Inquiry folder paths are used as references in findings, `_state.md` relationships, and frontmatter.
- The project already assumes inquiries live at `devdocs/inquiries/<slug>/`.
- The solution should be non-complex.
- The folder count will keep increasing.
- Existing inquiries are already mixed: active, complete, superseded, incomplete, and status-missing.
- `devdocs/archive/` already exists for other devdocs material, not inquiry folders.

### Key Insights

- "Tidy" does not necessarily mean "fewer folders in the filesystem root." It can mean "the important folders are easy to find."
- Datetime prefixes optimize `ls` sorting but degrade topic scanning and break stable names if applied retroactively.
- A physical archive folder creates path churn. That is costly in a document system where paths are references.
- A visibility layer can solve the human problem without changing canonical storage.
- Missing `_state.md` and missing `## Status` fields are a real source of mess; they should be fixed before adding new structure.

### Structural Points

- Canonical storage: actual inquiry folders.
- Metadata: `_state.md`, `finding.md`, history dates, relationships.
- Human view: what the user sees when trying to navigate.
- Maintenance rule: how an inquiry becomes less prominent over time.
- Migration: how existing folders are treated without breaking references.

### Foundational Principles

- Stable identifiers beat pretty sorting for long-lived documentation.
- Views should change more easily than source paths.
- Archive should mean "lower current relevance," not necessarily "moved to another physical directory."
- Manual first, automation later is appropriate when the workflow is still evolving.

### Meaning-Nodes

- Tidiness
- Recency
- Staleness
- Archive
- Canonical path
- Index/view
- Hygiene pass

## SV2 — Anchor-Informed Understanding

The problem is not primarily folder naming. It is the absence of a stable view over a growing set of stable inquiry artifacts. The best solution should avoid changing canonical paths and instead introduce a small visibility convention, plus a cleanup pass for missing status metadata.

## Phase 2 — Perspective Checking

### Technical / Logical Perspective

Datetime prefixes and physical archive folders both mutate paths. They are technically simple in a small folder but expensive in this project because documents refer to each other by path.

New anchor: path stability is a hard constraint, not a preference.

### Human / User Perspective

The user wants to glance at the folder and not feel lost. A giant flat list is visually noisy even if it is technically correct.

New anchor: the answer must improve day-to-day navigation, not only preserve architecture.

### Strategic / Long-Term Perspective

The inquiry count will grow. Any solution that requires repeated retroactive renaming or moving will become worse over time.

New anchor: the system needs a convention that scales by adding entries to a view, not by reorganizing history.

### Risk / Failure Perspective

The main risk is breaking cross-references silently. A second risk is creating an index that goes stale and becomes another source of confusion.

New anchor: if an index is introduced, it must be clearly labeled as a view, and the canonical source remains the inquiry folders.

### Resource / Feasibility Perspective

The simplest useful step is not a script. It is:

1. Add `devdocs/inquiries/README.md`.
2. Add sections for current/recent/reference/superseded or archived.
3. Fix missing status fields.

Automation can come later.

New anchor: do not let "tidy" become a tooling project unless manual upkeep fails.

### Definitional / Consistency Perspective

Archive can mean two things:

- physical archive: move files out of the normal location;
- semantic archive: mark as no longer current and hide from default attention.

For Homegrown, semantic archive fits better because inquiry paths carry meaning.

New anchor: "archive" should first be a status or index section, not a folder move.

## SV3 — Multi-Perspective Understanding

The stable model is now: `devdocs/inquiries/` should remain the canonical flat store of inquiry artifacts, while a lightweight index provides the tidy human view. Archiving should be semantic before physical. Datetime prefixes are acceptable only as a future creation-time metadata convention if the project later decides paths are disposable, which they currently are not.

## Phase 3 — Ambiguity Collapse

### Ambiguity: Does "tidy" mean folder names should sort by date?

**Strongest counter-interpretation:** Yes. The simplest thing is to prefix every folder with `YYYYMMDD-` so `ls` shows chronological order without tools.

**Why the counter-interpretation fails (structural grounds):** The folder name is not just a display label; it is a stable identifier used in path references. Date-prefix renaming changes that identifier. It solves one display mode while creating reference-maintenance work.

**Confidence:** HIGH.

**Resolution:** Tidiness means navigability and relevance visibility, not date-prefixed folder identity.

**What is now fixed?** Do not retroactively add datetime prefixes to existing inquiry folders.

**What is no longer allowed?** Treating folder rename as a harmless cosmetic operation.

**What now depends on this choice?** Migration plan should avoid path rewrites.

**What changed in the conceptual model?** The solution shifts from naming to view/index.

### Ambiguity: Should there be an archive folder under `devdocs/inquiries/`?

**Strongest counter-interpretation:** Yes. Moving old folders to `devdocs/inquiries/archive/` makes the root clean immediately.

**Why the counter-interpretation fails (structural grounds):** Moving folders changes paths and breaks the flat `devdocs/inquiries/<slug>/` assumption used by loop runners, relationship references, and human memory. It also creates two canonical locations for inquiries.

**Confidence:** HIGH.

**Resolution:** Do not create a physical inquiry archive folder as the first move. Use index sections and status semantics first.

**What is now fixed?** `devdocs/inquiries/<slug>/` remains the canonical folder layout.

**What is no longer allowed?** Hiding stale inquiries by moving them without a path-migration plan.

**What now depends on this choice?** Any archive policy should be represented in `_state.md` and the index before physical movement.

**What changed in the conceptual model?** Archive becomes a relevance state, not a storage location.

### Ambiguity: Is an autogenerated tool required?

**Strongest counter-interpretation:** Yes. A manual README will go stale, so the only reliable solution is a script that reads `_state.md`.

**Why the counter-interpretation fails (structural grounds):** The workflow is still evolving and the immediate problem is small enough for a hand-maintained index. A script becomes justified when manual updates repeatedly fail or when the folder count makes manual editing costly.

**Confidence:** HIGH for first step; MEDIUM for long-term.

**Resolution:** Start with a manual `README.md` and a hygiene pass. Add automation only after the manual convention proves useful but annoying.

**What is now fixed?** The next implementation should be document-first, not tool-first.

**What is no longer allowed?** Blocking tidiness on building a helper tool.

**What now depends on this choice?** The migration can be done quickly without scripting.

**What changed in the conceptual model?** Tooling becomes a later scaling aid.

### Ambiguity: Should future folder names include dates?

**Strongest counter-interpretation:** Use dates only for new folders, leaving old names untouched.

**Why the counter-interpretation fails (structural grounds):** It creates a split naming convention. The folder list becomes half topical and half date-prefixed, and topic scanning gets worse for new inquiries.

**Confidence:** MEDIUM.

**Resolution:** Do not add date prefixes to future inquiry folder names by default. If dates are needed, record them in `_state.md` history and expose them in the index.

**What is now fixed?** Slug names remain topic-first.

**What is no longer allowed?** Introducing a two-era naming convention without a strong reason.

**What now depends on this choice?** Recency must be solved by index order, not folder names.

**What changed in the conceptual model?** Dates are metadata, not identity.

## SV4 — Clarified Understanding

The right organizing unit is not a renamed folder or a moved archive. The right organizing unit is a stable inquiry folder plus a human-readable index. The first cleanup should fix missing status metadata and add a `README.md` view. Physical archive folders and datetime prefixes are postponed because they create path churn.

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

- Existing inquiry folders should not be renamed with datetime prefixes.
- Existing inquiry folders should not be moved into `archive/` as the first solution.
- `devdocs/inquiries/<slug>/` remains the canonical path shape.
- A lightweight `devdocs/inquiries/README.md` is the preferred first tidy layer.
- Missing `_state.md` / missing `## Status` must be handled as hygiene debt.

### Eliminated

- Retroactive datetime prefix migration.
- Physical archive migration as v1.
- Tool-first solution as required v1.
- Reusing `devdocs/archive/` for inquiry folders without redesigning archive semantics.

### Still Viable

- Manual index with sections.
- Semantic archive status later, such as `ARCHIVED`.
- Auto-generated index later if manual maintenance becomes repetitive.
- A future physical archive only if path references are made resilient first.

## SV5 — Constrained Understanding

The solution space is constrained to: stable folder names, status hygiene, and a visible index. The first policy should be simple enough to apply immediately:

- Keep folders flat.
- Keep topic-based slugs.
- Add `devdocs/inquiries/README.md`.
- Organize the README by relevance sections.
- Fix missing statuses.
- Add an archive/status concept only when there is a real need to hide old completed findings from default attention.

## Phase 5 — Conceptual Stabilization

The project needs **view-based tidiness**, not **path-based tidiness**.

Path-based tidiness means making the filesystem look cleaner by renaming or moving folders. It is tempting, but it damages the inquiry system because paths are how findings point to each other.

View-based tidiness means preserving stable folders and adding a readable surface over them. A README index can show current, recent, reference, superseded, and archived inquiries without changing canonical paths.

## SV6 — Stabilized Model

Homegrown should keep `devdocs/inquiries/` as a flat, topic-slug canonical store and add a lightweight `devdocs/inquiries/README.md` as the tidy human-facing view. Do not retroactively add datetime prefixes, and do not create a physical inquiry archive folder yet. Treat recency and archive state as metadata shown in the index, not as folder identity.

Compared with SV1, the problem changed from "how should folders be named or archived?" to "how can a stable inquiry store expose a clean current/recent/stale view without breaking links?"
