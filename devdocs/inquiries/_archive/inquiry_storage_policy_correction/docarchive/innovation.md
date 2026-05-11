# Innovation: Inquiry Storage Policy Correction

## User Input

`devdocs/inquiries/inquiry_storage_policy_correction/_branch.md`

## Seed

The seed is a correction: the previous finding assumed inquiry folders are canonical. The revised premise is that Homegrown fundamentals/protocols are canonical, while inquiries are a growing provenance corpus. Organization should optimize active-surface clarity, recency visibility, and archiveability.

## Mechanism 1: Lens Shifting

### Generic

Shift from "preserve all inquiry paths" to "preserve active work and canonical fundamentals."

**Candidate:** Use `devdocs/inquiries/_archive/` for cold inquiries while keeping active inquiries in root.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Focused

Shift from "date prefixes are path churn" to "date prefixes are provenance metadata."

**Candidate:** New inquiries use `YYYY-MM-DD_slug`.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Contrarian

Shift from "broken references are failure" to "some broken references are acceptable archival entropy."

**Candidate:** Update only high-value references during migration; allow stale internal references in archived old inquiries.

**Test:** Novelty medium, scrutiny survival medium-high, fertility high, actionability high.

## Mechanism 2: Combination

### Generic

Combine date-prefix naming and archive folder.

**Candidate:** Root contains only active/recent date-prefixed inquiries; `_archive/` contains cold old folders, optionally date-prefixed during migration.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Focused

Combine `_archive/` with migration note.

**Candidate:** Add `devdocs/inquiries/_archive/README.md` explaining archive policy and whether references were rewritten.

**Test:** Novelty low, scrutiny survival high, fertility medium, actionability high.

### Contrarian

Combine manual README with archive.

**Candidate:** Keep the current README but make it tiny: only policy note and pointer to `_archive/`.

**Test:** Novelty low, scrutiny survival medium, fertility low, actionability medium. It preserves maintenance burden unless minimized heavily.

## Mechanism 3: Inversion

### Generic

Instead of avoiding path changes, deliberately make path changes informative.

**Candidate:** Moving a folder to `_archive/` is itself the status signal: this inquiry is no longer active-surface material.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Focused

Instead of using status fields to decide archive, use archive location to express status.

**Candidate:** `_archive/` implies cold/completed/superseded/abandoned; `_state.md` can retain exact status.

**Test:** Novelty medium, scrutiny survival medium-high, fertility medium, actionability high.

### Contrarian

Instead of migrating old folders, only migrate bad/noisy folders.

**Candidate:** Archive only `SUPERSEDED`, bad findings, and missing-state stale folders first; leave `COMPLETE` findings in root until older threshold.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability very high.

## Mechanism 4: Constraint Manipulation

### Generic

Add constraint: "no manual ongoing index maintenance."

**Candidate:** Delete `devdocs/inquiries/README.md` or replace it with a static policy note only.

**Test:** Novelty low, scrutiny survival high, fertility medium, actionability high.

### Focused

Add constraint: "do not move ACTIVE inquiries."

**Candidate:** Archive only non-active inquiries first.

**Test:** Novelty low, scrutiny survival very high, fertility high, actionability high.

### Contrarian

Remove constraint: "all old references must work."

**Candidate:** Batch move archive candidates and accept low-value broken links; optionally run a best-effort reference update.

**Test:** Novelty medium, scrutiny survival medium, fertility high, actionability high. Needs explicit user approval.

## Mechanism 5: Absence Recognition

### Generic

What's missing is a lifecycle state embodied in storage.

**Candidate:** `devdocs/inquiries/_archive/` as lifecycle boundary.

**Test:** Novelty low, scrutiny survival high, fertility high, actionability high.

### Focused

What's missing is recency visible before file reads.

**Candidate:** `YYYY-MM-DD_slug` for new inquiry creation.

**Test:** Novelty low, scrutiny survival high, fertility high, actionability high.

### Contrarian

What's missing is a migration log.

**Candidate:** `devdocs/inquiries/_archive/MIGRATION.md` records batches moved and reference policy.

**Test:** Novelty medium, scrutiny survival high, fertility medium, actionability high.

## Mechanism 6: Domain Transfer

### Generic

Transfer from logs: log files are date-prefixed because chronology is core to interpretation.

**Candidate:** Inquiry folders should be date-prefixed because they are reasoning logs/provenance.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Focused

Transfer from devdocs maintenance guidance: old work moves to `_archive/`, preserving structure.

**Candidate:** Use `devdocs/inquiries/_archive/` exactly.

**Test:** Novelty low, scrutiny survival very high, fertility high, actionability high.

### Contrarian

Transfer from source code: stable paths matter for imports.

**Candidate:** Keep no date prefixes and no archive.

**Test:** Novelty low, scrutiny survival low under corrected premise. Inquiries are not source imports.

## Mechanism 7: Extrapolation

### Generic

At 300 inquiries, flat topic-only root is hard for both human and AI scanning.

**Candidate:** Date-prefixed active folders plus `_archive/` is more scalable than manual README.

**Test:** Novelty low, scrutiny survival high, fertility high, actionability high.

### Focused

At 300 inquiries, not all archived references can be maintained.

**Candidate:** Define reference tiers now: update active/important references, tolerate cold historical drift.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Contrarian

At 300 inquiries, even `_archive/` may get large.

**Candidate:** Later subdivide archive by year: `_archive/2026/`.

**Test:** Novelty low, scrutiny survival high later, actionability low now.

## Assembly Check

The strongest assembly:

1. Admit prior finding's canonicity premise was wrong.
2. Use `YYYY-MM-DD_slug` for new inquiry folders.
3. Add `devdocs/inquiries/_archive/`.
4. Do not move ACTIVE inquiries.
5. Move cold candidates in batches:
   - `SUPERSEDED`;
   - bad findings;
   - abandoned/no-state stale starts;
   - older `COMPLETE` inquiries after user review.
6. During migration, update high-value references only:
   - current active inquiries;
   - recent/corrective findings;
   - docs that the user actually reads.
7. Delete or minimize `devdocs/inquiries/README.md`; do not maintain it manually as the primary index.
8. Update MVL/MVL+ folder creation convention only after explicit approval.

## Candidate Summary

| Candidate | Verdict Before Critique | Reason |
|---|---|---|
| Keep prior README-first policy | Weak | It rests on wrong canonicity premise and adds manual maintenance. |
| Future-only date prefixes | Strong | Good low-risk next convention. |
| Full retroactive date migration | Boundary | Potentially useful but needs deliberate batch and date source choice. |
| `_archive/` for cold inquiries | Strong | Matches existing devdocs guidance and reduces active clutter. |
| Move all completed inquiries now | Boundary | Too aggressive; user review needed. |
| Selective archive first | Strongest | Benefits quickly while protecting active work. |
| Perfect reference rewrite | Weak | Too expensive relative to provenance value. |
| Selective reference rewrite | Strong | Matches reference severity tiers. |

## Mechanism Coverage

- **Generators applied:** 4 / 4.
- **Framers applied:** 3 / 3.
- **Convergence:** YES. More than three mechanisms converge on date-prefixed new inquiries plus `_archive/` for cold inquiries.
- **Survivors tested:** 8 / 8.
- **Failure modes observed:** The prior answer showed status quo/path-preservation bias; this run explicitly tested that premise.
- **Overall:** PROCEED.
