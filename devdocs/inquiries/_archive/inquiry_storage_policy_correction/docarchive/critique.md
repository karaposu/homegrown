# Critique: Inquiry Storage Policy Correction

## User Input

`devdocs/inquiries/inquiry_storage_policy_correction/_branch.md`

## Phase 0: Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Correct conceptual model | Critical | Distinguishes canonical fundamentals from inquiry provenance. |
| Navigability at scale | Critical | Works when inquiries reach 100-300 folders. |
| Recency visibility | High | Humans and AI can see recency without opening each folder. |
| Maintenance burden | Critical | Does not create recurring manual upkeep unless clearly valuable. |
| Provenance preservation | High | Keeps old reasoning available even if moved. |
| Active-work safety | Critical | Does not break active/resumable inquiries. |
| Migration practicality | High | Can be applied in staged batches without perfect global rewrites. |
| Local convention fit | High | Aligns with existing devdocs archive guidance. |

## Phase 1: Fitness Landscape

### Viable Region

- Inquiries are persistence/provenance, not canonical fundamentals.
- New inquiry names include date prefix: `YYYY-MM-DD_slug`.
- Cold inquiry folders move to `devdocs/inquiries/_archive/`.
- ACTIVE inquiries stay in root.
- Important references are rewritten selectively.
- Manual README is deleted, minimized, or generated later.

### Boundary Region

- Full retroactive date-prefix migration of all folders.
- Moving all completed inquiries immediately.
- Adding archive-by-year now.
- Updating every reference globally.

### Dead Region

- Keeping the prior flat-canonical-store framing.
- Relying on a manually maintained README as the primary solution.
- Refusing physical archive because any old reference might break.
- Moving ACTIVE inquiries casually.

## Phase 2: Candidate Verdicts

### Candidate A: Keep Prior README-First Policy

**Prosecution:** It rests on the wrong premise that inquiry paths are canonical identifiers. It adds manual maintenance and does not reduce root folder clutter. It also makes AI recency detection worse than date-prefixed folder names because an agent must read the README or folder contents.

**Defense:** It avoids path migration and is easy to create.

**Collision:** Defense is not enough. Avoiding migration was over-valued because the artifacts being protected are mostly provenance, not canonical implementation.

**Verdict:** KILL as primary policy.

**Seed extracted:** README can exist only as generated or minimal policy documentation, not as the core organization mechanism.

### Candidate B: New Inquiries Use `YYYY-MM-DD_slug`

**Prosecution:** It changes the MVL/MVL+ folder naming convention and makes folder names longer.

**Defense:** It gives immediate recency visibility to humans and AI. It aligns with inquiries as reasoning logs/provenance. It does not require opening `_state.md`.

**Collision:** Defense wins. The cost is small and localized to future folder creation.

**Verdict:** SURVIVE.

**Constructive output:** Update MVL/MVL+ new-inquiry creation convention after user approval.

### Candidate C: Full Retroactive Date Migration

**Prosecution:** Existing creation dates may be inconsistent; migration creates many path changes; old references may break.

**Defense:** It gives one clean convention across the whole corpus.

**Collision:** Both are strong. Full retroactive migration is not wrong, but it is not the safest first batch.

**Verdict:** REFINE.

**Constructive output:** Start with future naming plus selective archive migration. Later migrate old active/reference folders if the mixed convention bothers the user.

### Candidate D: Create `devdocs/inquiries/_archive/`

**Prosecution:** Moving folders changes paths.

**Defense:** This matches existing devdocs maintenance guidance. It reduces active-surface clutter and preserves folder contents. Since inquiries are provenance, movement is acceptable when active work is protected.

**Collision:** Defense wins. The prosecution is a migration cost, not a conceptual blocker.

**Verdict:** SURVIVE.

**Constructive output:** Use `_archive/`, not `archive/`, because existing devdocs guidance uses `_archive/` and the underscore visually separates infrastructure from inquiries.

### Candidate E: Move All Completed Inquiries Immediately

**Prosecution:** Too blunt. Some completed findings are recent or important references. Moving them all would make current reasoning harder to inspect.

**Defense:** It cleans the root quickly.

**Collision:** Prosecution wins for v1. Cleanliness should not hide recent/load-bearing findings.

**Verdict:** REFINE.

**Constructive output:** Move cold completed inquiries only after review; move superseded/bad/stale starts first.

### Candidate F: Selective Archive First

**Prosecution:** Requires judgment; root will not become perfectly clean immediately.

**Defense:** It captures most benefit with low risk. Move `SUPERSEDED`, bad findings, abandoned/no-state stale starts, and older non-load-bearing completed inquiries. Leave ACTIVE and recent/load-bearing findings visible.

**Collision:** Defense wins.

**Verdict:** SURVIVE as strongest migration policy.

### Candidate G: Perfect Reference Rewrite

**Prosecution:** Too expensive and unnecessary for a provenance corpus. It treats every old reference as high value.

**Defense:** It preserves traceability perfectly.

**Collision:** Prosecution wins. Perfect traceability is not worth the cost for stale/bad/archived material.

**Verdict:** KILL.

**Seed extracted:** Reference migration should be tiered.

### Candidate H: Selective Reference Rewrite

**Prosecution:** Some links will remain stale.

**Defense:** This matches real value. Rewrite active, recent, and important references. Leave low-value archived references as historical drift. Record the migration policy in `_archive/MIGRATION.md`.

**Collision:** Defense wins.

**Verdict:** SURVIVE.

## Phase 3.5: Assembly Check

### Assembly Candidate: Date-Prefixed Provenance With Cold Archive

The best assembly:

1. Correct the prior finding: inquiries are not canonical fundamentals; they are persistence/provenance.
2. Use `YYYY-MM-DD_slug` for new inquiry folders.
3. Create `devdocs/inquiries/_archive/`.
4. Keep ACTIVE inquiries in `devdocs/inquiries/`.
5. Move cold candidates into `_archive/` in batches:
   - `SUPERSEDED`;
   - bad findings kept for diagnostic use;
   - abandoned/no-state stale starts;
   - older completed findings that are no longer active reference material.
6. Update references selectively:
   - must update active/resumable state;
   - should update recent and important findings;
   - may leave stale archived references alone.
7. Delete or minimize `devdocs/inquiries/README.md`; do not maintain it manually as the primary index.
8. Update MVL/MVL+ folder creation instructions only after explicit user approval.

**Prosecution:** Mixed old and new naming may persist for a while, and archive movement may leave some stale references.

**Defense:** Those are acceptable transitional costs. The policy optimizes for the correct layer: a growing provenance corpus, not a canonical source tree. It preserves history while making active work easier to scan.

**Collision:** Defense wins.

**Verdict:** SURVIVE.

## Phase 4: Coverage Map

### Covered

- Whether the prior "canonical store" claim was wrong.
- Datetime-prefix benefits.
- Archive-folder benefits.
- Why reference breakage may be acceptable.
- Why manual README is weak.
- How to avoid breaking active work.
- How to stage migration.

### Deferred

- Exact list of folders to move in the first archive batch.
- Exact date source for every retroactively renamed old folder.
- Actual MVL/MVL+ runner edits.
- Actual folder migration.

### Convergence

The corrected answer is stable: the user's recommended approach was directionally better, with safeguards.

## Signal

TERMINATE with ranked survivors:

1. **Date-prefixed provenance with cold archive**: master policy.
2. **New inquiries use `YYYY-MM-DD_slug`**: immediate convention.
3. **`devdocs/inquiries/_archive/`**: physical archive for cold provenance.
4. **Selective archive first**: safest migration path.
5. **Selective reference rewrite**: right-sized traceability policy.

## Convergence Telemetry

- **Dimension coverage:** Full for the corrected question.
- **Adversarial strength:** STRONG. The user's approach was challenged on path breakage and active-work safety, then refined.
- **Landscape stability:** STABLE.
- **Clean SURVIVE exists:** YES. Date-prefixed provenance with cold archive.
- **Failure modes observed:** The prior answer had status-quo/path-stability bias and over-protected non-canonical artifacts.
- **Overall:** PROCEED.
