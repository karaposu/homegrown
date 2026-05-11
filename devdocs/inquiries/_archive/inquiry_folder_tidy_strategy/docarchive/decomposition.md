# Decomposition: Inquiry Folder Tidy Strategy

## User Input

`devdocs/inquiries/inquiry_folder_tidy_strategy/_branch.md`

## 1. Coupling Map

### Cluster A: Canonical Folder Identity

Elements:

- folder names;
- path references in findings and `_state.md`;
- runner assumptions about `devdocs/inquiries/<slug>/`;
- human memory of inquiry names.

Coupling is high. Changing folder names or moving folders propagates to references, protocols, and human navigation.

### Cluster B: Human Navigation View

Elements:

- at-a-glance current work;
- recent work;
- stale/superseded work;
- archive visibility;
- README/index structure.

Coupling is moderate internally and weakly coupled to canonical folder identity if it uses links instead of moves.

### Cluster C: Metadata Hygiene

Elements:

- `_state.md` existence;
- `## Status`;
- `finding.md` existence;
- relationships;
- creation/history dates.

Coupling is high with any status-based view. If metadata is missing, the view is unreliable.

### Cluster D: Archive Semantics

Elements:

- what "archive" means;
- whether it is a status, index section, or folder move;
- who decides archival;
- whether archived items remain linkable.

Coupling is high with both human navigation and canonical identity. Archive policy must be defined before an archive folder exists.

### Cluster E: Automation

Elements:

- script-generated README;
- manual README;
- freshness warnings;
- future helpers.

Coupling is weak to the first policy decision. Automation can be delayed if the convention is document-first.

## 2. Boundary Detection

Natural boundaries:

1. **Storage policy:** what happens to actual folders.
2. **View policy:** how humans see current/recent/stale work.
3. **Metadata policy:** what minimum `_state.md` data is required.
4. **Archive policy:** what "archived" means and when it applies.
5. **Migration policy:** what to do with existing folders.
6. **Automation policy:** when tooling becomes necessary.

The strongest boundary is between storage and view. Storage should stay stable while views can change freely.

## 3. Bottom-Up Validation

Atomic facts:

- A folder path can be referenced by many files.
- A README link can be changed without moving the target folder.
- A status field can be fixed without changing the folder path.
- A physical archive move changes every canonical path.
- A datetime prefix changes every canonical path if applied retroactively.

These atoms validate the top-down boundary: path identity and human view should not be fused.

## 4. Question Tree

### Q1: What should happen to folder names?

Verification criteria:

- [ ] Preserves existing references.
- [ ] Keeps topic scanning easy.
- [ ] Does not create a split old/new naming convention.

### Q2: How should recency become visible?

Verification criteria:

- [ ] Shows current/recent work without reading every `_state.md`.
- [ ] Does not require renaming folders.
- [ ] Can be maintained manually at first.

### Q3: How should staleness/archive become visible?

Verification criteria:

- [ ] Separates active/current from old/superseded work.
- [ ] Does not move folders in v1.
- [ ] Defines whether archive is status, section, or location.

### Q4: What hygiene pass is required?

Verification criteria:

- [ ] Identifies missing `_state.md` and missing `## Status`.
- [ ] Defines a safe way to mark incomplete or obsolete inquiries.
- [ ] Does not require solving every unfinished inquiry immediately.

### Q5: Should automation be built now?

Verification criteria:

- [ ] Keeps first step non-complex.
- [ ] Defines a clear trigger for automation later.
- [ ] Does not block the tidy convention on a script.

### Q6: What migration should happen now?

Verification criteria:

- [ ] Avoids path rewrites.
- [ ] Produces immediate visual improvement.
- [ ] Is small enough to do in one focused pass.

## 5. Interface Map

| Source Piece | Target Piece | Flow |
|---|---|---|
| Folder naming policy | View policy | Stable slugs are the links used by the README/index. |
| Metadata hygiene | View policy | Status and finding presence determine which section an inquiry belongs in. |
| Archive semantics | View policy | Archived/superseded section labels come from archive semantics. |
| Migration policy | Metadata hygiene | Existing missing statuses must be fixed or explicitly listed as unknown. |
| Automation policy | View policy | Future tooling may generate the same view from metadata. |
| Archive semantics | Storage policy | Physical archive is deferred unless semantics and path migration are solved. |

## 6. Dependency Order

1. Decide storage policy: keep folders flat and stable.
2. Decide naming policy: no datetime prefixes by default.
3. Decide view policy: add `devdocs/inquiries/README.md`.
4. Decide metadata hygiene: fix missing state/status or list unknowns.
5. Decide archive semantics: archive is a section/status first, not a folder move.
6. Decide automation trigger: script only after manual index becomes painful.

These steps are mostly sequential because each later decision depends on path stability.

## 7. Self-Evaluation

| Dimension | Result | Reason |
|---|---|---|
| Independence | PASS | Naming, view, metadata, archive, migration, and automation can be decided separately once storage stability is fixed. |
| Completeness | PASS | Covers the full user question: datetime prefixes, archive folder, alternatives, and migration. |
| Reassembly | PASS | If all pieces are answered, the project gets a complete tidy policy. |
| Tractability | PASS | Each piece is answerable in one finding. |
| Interface clarity | PASS | The main interface is metadata flowing into a view while folders remain stable. |
| Balance | PASS | No piece dominates; automation is deliberately kept small/deferred. |
| Confidence | HIGH | Top-down and bottom-up both point to the same storage/view separation. |

## Decomposition Output

The policy should be assembled in this order:

1. Stable flat storage.
2. Topic-first folder names.
3. README/index as the tidy surface.
4. Metadata hygiene for missing statuses.
5. Semantic archive, not physical archive.
6. Optional automation only after the convention proves useful.
