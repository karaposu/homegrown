# Innovation: Inquiry Folder Tidy Strategy

## User Input

`devdocs/inquiries/inquiry_folder_tidy_strategy/_branch.md`

## Seed

The seed is the user's discomfort with a growing `devdocs/inquiries/` folder and the hunch that datetime prefixes or an archive folder might make it tidy. The stabilized constraint from sensemaking is: do not break canonical inquiry paths unless the benefit is overwhelming.

## Mechanism 1: Lens Shifting

### Generic

Shift from "filesystem should look tidy" to "the default view should be tidy."

**Candidate:** Keep folders flat and add `devdocs/inquiries/README.md` as the human-facing view.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Focused

Shift from "archive means move old folders" to "archive means reduce attention."

**Candidate:** Add an `Archived` section in the README first; optionally later add `ARCHIVED` as a status in `_state.md`.

**Test:** Novelty low-medium, scrutiny survival high, fertility high, actionability high.

### Contrarian

Shift from "every inquiry should be visible" to "only current/recent inquiries should be visible by default."

**Candidate:** Keep all folders, but README top section only lists active and recent findings; older material sits under collapsed sections.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

## Mechanism 2: Combination

### Generic

Combine stable slug folders + manual README.

**Candidate:** A hand-maintained index with sections: `Current`, `Recent Findings`, `Reference`, `Superseded / Archived`, `Needs Hygiene`.

**Test:** Novelty low, scrutiny survival high, fertility medium, actionability very high.

### Focused

Combine `_state.md` status + README sectioning.

**Candidate:** Do not invent new sorting in names. Use `_state.md` status to decide where a folder appears in the README.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Contrarian

Combine physical archive with stable links through redirects.

**Candidate:** Move folders to archive but leave stub files in the old location that point to the new path.

**Test:** Novelty medium, scrutiny survival low, fertility low, actionability low. This adds clutter and path indirection.

## Mechanism 3: Inversion

### Generic

Instead of renaming folders to encode dates, keep names stable and move dates into the index.

**Candidate:** README lists creation/update dates beside each inquiry.

**Test:** Novelty low, scrutiny survival high, fertility medium, actionability high.

### Focused

Instead of archiving by moving old items away, archive by making current items easier to find.

**Candidate:** Put `Current Work` and `Recent Findings` at the top. Older material can remain below.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Contrarian

Instead of making the folder shorter, accept the folder will be long and make search/navigation better.

**Candidate:** Add a README and rely on `rg`, editor search, and links instead of visual scanning of folder names.

**Test:** Novelty low, scrutiny survival medium-high, fertility medium, actionability high.

## Mechanism 4: Constraint Manipulation

### Generic

Add the constraint: "no path changes."

**Candidate:** All organization must be representational: README, status fields, links.

**Test:** Novelty low, scrutiny survival very high, fertility medium, actionability high.

### Focused

Add the constraint: "v1 must take less than 20 minutes."

**Candidate:** Manual README plus hygiene list; no script.

**Test:** Novelty low, scrutiny survival high, fertility medium, actionability very high.

### Contrarian

Remove the constraint: "folders must remain flat."

**Candidate:** Status buckets: `active/`, `complete/`, `archive/`.

**Test:** Novelty low, scrutiny survival low, fertility low, actionability medium. It breaks path shape and makes every status change a move.

## Mechanism 5: Absence Recognition

### Generic

What is missing is not a better name; it is a current map.

**Candidate:** `devdocs/inquiries/README.md` as a map.

**Test:** Novelty low, scrutiny survival high, fertility high, actionability high.

### Focused

What is missing is a "needs hygiene" category.

**Candidate:** README should explicitly list folders with missing `_state.md`, missing `## Status`, or missing `finding.md`.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Contrarian

What is missing is a decision log outside inquiries.

**Candidate:** Move only final findings into a separate decision index, leaving inquiries as raw work folders.

**Test:** Novelty medium, scrutiny survival medium, fertility medium, actionability medium. It may be useful later but adds a second information layer.

## Mechanism 6: Domain Transfer

### Generic

Transfer from issue trackers: keep issue IDs stable; use labels/views for triage.

**Candidate:** Inquiry folder slugs are stable IDs; README sections are labels/views.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Focused

Transfer from docs sites: information architecture separates source files from navigation sidebars.

**Candidate:** Keep source folders stable; maintain a navigation file.

**Test:** Novelty low, scrutiny survival high, fertility high, actionability high.

### Contrarian

Transfer from logs: append-only chronological folders are acceptable if history matters most.

**Candidate:** Future-only `YYYY-MM-DD_slug` naming.

**Test:** Novelty low, scrutiny survival medium-low, fertility low, actionability medium. It helps chronology but hurts topic scanning and creates split conventions.

## Mechanism 7: Extrapolation

### Generic

At 100+ inquiries, a flat folder will be visually noisier, but stable links will matter even more.

**Candidate:** Build the habit around a stable index now, so scaling pressure improves the view instead of forcing renames.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Focused

At 200+ inquiries, manual README maintenance may become painful.

**Candidate:** Define a trigger: only build `tools/inq` or an index generator after the manual README has enough repeated update friction.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Contrarian

At 500+ inquiries, a single README may also become too long.

**Candidate:** Later split index by year or theme, but only as generated/navigation files, not by moving canonical folders.

**Test:** Novelty medium, scrutiny survival high for later, actionability low now.

## Assembly Check

The strongest assembly is:

1. Keep `devdocs/inquiries/<slug>/` flat and stable.
2. Do not add datetime prefixes by default.
3. Do not create a physical archive folder for inquiries yet.
4. Add `devdocs/inquiries/README.md` with sections:
   - `Current`
   - `Recent Findings`
   - `Reference / Important`
   - `Superseded`
   - `Needs Hygiene`
   - optional `Archived`
5. Run a hygiene pass for missing `_state.md` / missing `## Status`.
6. Treat archive as semantic: a README section first, then maybe `ARCHIVED` status later.
7. Defer automation until manual upkeep becomes painful.

## Candidate Summary

| Candidate | Verdict Before Critique | Reason |
|---|---|---|
| Datetime prefix all folders | Weak | Breaks stable paths and reduces topic scanning. |
| Future-only datetime prefixes | Boundary | Avoids old rewrites but creates split convention. |
| Physical archive folder | Weak | Moves canonical paths. |
| Status bucket folders | Weak | Every status transition becomes a path move. |
| Manual README index | Strong | Immediate, simple, path-stable. |
| README + status hygiene | Strongest | Solves visibility and data quality. |
| Script-generated index now | Boundary | Useful later, maybe too much v1. |
| Semantic archive status/section | Strong | Gives archive behavior without moving folders. |

## Mechanism Coverage

- **Generators applied:** 4 / 4.
- **Framers applied:** 3 / 3.
- **Convergence:** YES. More than three mechanisms converge on stable folders plus README/index plus status hygiene.
- **Survivors tested:** 8 / 8.
- **Failure modes observed:** None significant. Premature tooling was explicitly avoided.
- **Overall:** PROCEED.
