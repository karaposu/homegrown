# Sensemaking: Inquiry Storage Policy Correction

## User Input

`devdocs/inquiries/inquiry_storage_policy_correction/_branch.md`

## SV1 — Baseline Understanding

The previous tidy finding may have been wrong because it treated inquiry folders as stable canonical artifacts. The user argues that Homegrown's real canonical layer is `homegrown/` fundamentals/protocols, while inquiries are persistence records used to develop those fundamentals. If that is true, datetime prefixes and physical archive folders become more reasonable.

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- `homegrown/` contains the active skill/protocol source.
- `devdocs/inquiries/` stores runtime reasoning artifacts.
- The folder count is growing and will keep growing.
- Humans and AI agents need to see recency without opening every folder.
- Manual README maintenance is overhead.
- Old inquiry references can be less important than active fundamentals.
- Active or resumable inquiries should not be casually broken.

### Key Insights

- "Canonical" was the wrong word for inquiry folders. They are persistent records, not the main source of truth.
- A path break inside old inquiry provenance is not the same severity as a broken protocol path in `homegrown/`.
- Archive folders fit the existing devdocs maintenance principle: archive, never delete.
- Date prefixes are not just cosmetic; they encode recency at the file-system level, which helps agents.
- README/index is a secondary view and can become stale; it should not be the primary mechanism if folder organization can carry the signal directly.

### Structural Points

- **Fundamental layer:** `homegrown/` skills, references, protocols.
- **Persistence layer:** `devdocs/inquiries/` job records and findings.
- **Active surface:** folders that are currently in use or likely to be resumed.
- **Cold storage:** completed, superseded, bad, or historically useful inquiries.
- **Reference severity:** not all broken references matter equally.
- **Migration policy:** how much cleanup is worth doing now.

### Foundational Principles

- Preserve fundamentals over provenance.
- Preserve provenance by archiving, not deleting.
- Make recency visible at the storage level when the corpus is growing.
- Minimize ongoing maintenance even if one-time migration has cost.
- Active/resumable artifacts deserve more care than stale historical artifacts.

### Meaning-Nodes

- Canonical fundamentals
- Persistence/provenance layer
- Recency signal
- Active surface
- Cold archive
- Acceptable breakage
- Reference rewrite

## SV2 — Anchor-Informed Understanding

The earlier model was too preservationist. It protected old inquiry paths as if they were canonical API surfaces. The corrected model should protect `homegrown/` and active inquiry resumability, while allowing old inquiry storage to be reorganized for navigability.

## Phase 2 — Perspective Checking

### Technical / Logical Perspective

There are real path references to inquiry folders. However, those references are mostly in devdocs, findings, and state files. They can be rewritten or tolerated when the referenced inquiry is archived.

New anchor: path migration is work, not a blocker.

### Human / User Perspective

The user is asking for less clutter and less maintenance. A README adds another thing to remember. Date prefixes and archive folders make the filesystem itself carry the navigation signal.

New anchor: humans should not have to maintain a parallel index unless the filesystem cannot carry the signal.

### AI-Agent Perspective

An AI scanning folder names benefits from recency encoded directly in names. It can see `2026-04-27_topic` without opening `_state.md`. This matters because agents often begin with broad file scans.

New anchor: datetime prefixes improve low-cost machine perception of recency.

### Strategic / Long-Term Perspective

At 300 inquiry folders, a flat topic-only root becomes hard to scan. Archive folders and date-prefix names scale better than a manually curated README.

New anchor: growing corpus size favors structural organization over manual view maintenance.

### Risk / Failure Perspective

The main risk of the user's approach is breaking active resume flows or losing lineage readability. This can be controlled:

- do not move ACTIVE inquiries;
- archive only COMPLETE/SUPERSEDED/BAD/ABANDONED folders;
- add a migration note;
- optionally rewrite references for findings that remain important.

New anchor: archive/migration policy needs safeguards, not rejection.

### Definitional / Consistency Perspective

Existing devdocs maintenance guidance already says archive, never delete, and uses `_archive/`. Therefore a physical archive folder is not a foreign concept. The prior finding contradicted this local convention without explaining why inquiries should be different.

New anchor: `_archive/` is the locally consistent archive shape.

## SV3 — Multi-Perspective Understanding

The corrected understanding is: inquiry folders are durable but movable provenance. The project should organize them for retrieval and recency, as long as active/resumable work is protected. A physical `_archive/` folder and date-prefixed inquiry names are not reckless; they are probably the better low-complexity direction.

## Phase 3 — Ambiguity Collapse

### Ambiguity: Are inquiries canonical?

**Strongest counter-interpretation:** Inquiries are canonical because `finding.md` contains stabilized decisions and later findings refer to them.

**Why the counter-interpretation fails (structural grounds):** Findings can influence fundamentals, but they are not the executable source of the system. The active implementation is in `homegrown/`. Architecture docs explicitly describe inquiries as runtime storage and file-backed job records. That makes them important provenance, not canonical implementation.

**Confidence:** HIGH.

**Resolution:** Inquiries are persistence/provenance artifacts. Fundamentals/protocols are canonical.

**What is now fixed?** Do not protect all old inquiry paths as if they were source APIs.

**What is no longer allowed?** Rejecting archive/date-prefix migration solely because old inquiry references may break.

**What now depends on this choice?** The storage policy can prioritize navigability and recency.

**What changed in the conceptual model?** Inquiry folders moved from "canonical store" to "movable provenance corpus."

### Ambiguity: Is broken reference lineage acceptable?

**Strongest counter-interpretation:** No. Broken links reduce traceability and can confuse future agents.

**Why the counter-interpretation fails (structural grounds):** Traceability matters by tier. Active, recent, and load-bearing findings deserve reference updates. Old superseded/bad/incomplete inquiry links can degrade without harming the canonical system, especially if the archive structure is predictable.

**Confidence:** MEDIUM-HIGH.

**Resolution:** Some reference breakage is acceptable, but active and important references should be migrated or protected.

**What is now fixed?** Migration does not need perfect global reference preservation.

**What is no longer allowed?** Treating all references as equal severity.

**What now depends on this choice?** Archive policy can use tiers: active protected, important updated, cold tolerated.

**What changed in the conceptual model?** Path stability becomes a cost to manage, not an absolute constraint.

### Ambiguity: Is README useful enough?

**Strongest counter-interpretation:** Yes. A README is simple and avoids path changes.

**Why the counter-interpretation fails (structural grounds):** It does not reduce root-folder clutter, does not encode recency in the folder names, and creates ongoing maintenance. It is a view layer over a messy storage layer. If storage can be organized simply, that is better.

**Confidence:** HIGH.

**Resolution:** Manual README should not be the primary solution. It can be deleted, minimized, or generated later.

**What is now fixed?** Do not rely on manual README maintenance as v1.

**What is no longer allowed?** Presenting README as the main fix for a growing inquiry corpus.

**What now depends on this choice?** Actual storage organization becomes the main solution.

**What changed in the conceptual model?** The solution moves from view-first to storage-lifecycle-first.

### Ambiguity: Should date prefixes apply retroactively?

**Strongest counter-interpretation:** No. Retroactive renaming is noisy and old creation dates may be uncertain.

**Why the counter-interpretation partially fails:** The user values recency visible to humans and AI. Old folders already have filesystem mtimes and history dates that can approximate dates. Since inquiries are provenance, imperfect but useful date prefixes may be acceptable.

**Confidence:** MEDIUM.

**Resolution:** Use date prefixes going forward. Consider retroactive migration only as a deliberate batch, and prefer date-prefixing archived folders when moving them.

**What is now fixed?** New inquiries should be date-prefixed.

**What is no longer allowed?** Blocking date prefixes because old folders are not already prefixed.

**What now depends on this choice?** MVL/MVL+ folder creation convention should change if adopted.

**What changed in the conceptual model?** Date prefix becomes provenance metadata in the path.

## SV4 — Clarified Understanding

The previous finding was wrong in its central framing. Inquiry folders are not canonical fundamentals. They are persistent reasoning records. Therefore archive folders and date prefixes should be evaluated as provenance-corpus organization tools, not as dangerous source-tree refactors.

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

- `homegrown/` fundamentals/protocols are the canonical layer.
- `devdocs/inquiries/` is a persistence/provenance layer.
- Manual README should not be the main organization mechanism.
- `_archive/` is locally consistent with existing devdocs archive guidance.
- New inquiry folders should likely use `YYYY-MM-DD_slug`.
- Active/resumable inquiries need special protection from migration.

### Eliminated

- Treating all inquiry paths as canonical stable APIs.
- Rejecting physical archive folders as a general rule.
- Treating perfect old-reference preservation as mandatory.
- Using manual README maintenance as the primary tidy strategy.

### Still Viable

- New date-prefixed inquiry folders.
- Physical `devdocs/inquiries/_archive/`.
- Moving completed/superseded/cold inquiries into `_archive/`.
- Updating references selectively, not globally.
- Keeping a generated/minimal index later if useful.

## SV5 — Constrained Understanding

The corrected policy should be:

- protect active inquiries and fundamentals;
- organize completed/superseded/stale inquiries into `_archive/`;
- use `YYYY-MM-DD_slug` for new inquiries;
- optionally migrate old folders in batches;
- update only high-value references;
- remove or demote the manual README.

## Phase 5 — Conceptual Stabilization

The right model is **storage-lifecycle tidiness for a provenance corpus**.

Inquiries are not the permanent canonical form of knowledge. They are the recorded work by which the system develops, corrects, and validates fundamentals. Because of that, they should be preserved but not allowed to dominate the active workspace.

Archiving old inquiries is not loss. It is lifecycle management. Date-prefixing new inquiries is not decoration. It is provenance metadata that makes recency visible without reading internal files.

## SV6 — Stabilized Model

The previous finding should be corrected. Homegrown should treat `devdocs/inquiries/` as a growing provenance corpus, not a flat canonical store. The better low-complexity policy is to introduce `devdocs/inquiries/_archive/` for cold completed/superseded/bad inquiries and use `YYYY-MM-DD_slug` naming for new inquiries. Existing references should be updated selectively where they matter; broken references inside old archived provenance are acceptable debt, not a blocker.

Compared with SV1, the question changed from "was path stability overvalued?" to a stable answer: yes, path stability was overvalued because the previous finding confused canonical fundamentals with inquiry persistence.
