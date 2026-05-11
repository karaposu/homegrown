# Sensemaking: inquiry_folder_organization

## User Input

`devdocs/inquiries/inquiry_folder_organization/_branch.md`

Read `_branch.md`, `_state.md`, and `exploration.md` from the same folder. The exploration produced ~22 candidates across 5 groups (A=rename, B=subfolder, C=index, D=tooling, E=hybrid) and 6 frontier questions. Resolve the dominant fork (filesystem-visible rename vs. tool/index visibility) and the 5 sub-questions (archive semantics, prefix-encoded-date, data hygiene, volume-vs-visibility, migration tolerance). Honest comparison of Group D versus Group A. Reconcile what the user said (datetime-prefix) versus what they may actually need (at-a-glance recency + staleness). Save as `devdocs/inquiries/inquiry_folder_organization/sensemaking.md`.

---

## SV1 — Baseline Understanding

The user wants to fix a real visibility problem: 55 inquiries in `devdocs/inquiries/`, no convention, hard to tell what's recent and what's stale at a glance. They proposed datetime-prefixing folder names plus moving old ones into an archive subfolder, and explicitly asked whether something better exists.

The first read says: yes, something simpler probably exists, because the data is already encoded (mtime, `_state.md` Status, `finding.md` presence). The issue is that those signals aren't surfaced in the `ls` view. But this initial read leaves open the most important constraint — the cost of renaming. SV2-SV6 will sharpen what that cost actually is, who pays it, and whether the user's filesystem-as-interface frame is the right frame at all.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **55 folders exist; cross-references between them are dense.** This session alone produced cross-references in `wayfinding_navigation_unification_check`'s finding (5 inquiries listed by folder name), `continuous_loop_priorities`'s finding (3+ prior findings by path), and Relationships sections in many `_state.md` files. Renaming the folders requires updating cross-references across ~30+ files; missing one breaks traceability.
- **The data is already there.** Status field exists on 49/55 (89%); mtime works automatically; finding.md presence is binary; History dates are per-event. Any new convention competes with already-present signals, not with absence.
- **Single user, finite hours.** Migration cost is real. ~1-2h global rename + cross-reference rewrite is non-trivial.
- **The user phrased the question concretely** ("datetime prefix on folder names and also archive folder"), then opened it ("is there a better alternative?"). This signals: they have a candidate but want it challenged.
- **Date today: 2026-04-27.** Mtime span across the 55 folders: 13 days (Apr 14-27). The visibility problem is acute *because* density is high — slower-pace projects don't have this problem.

### Key Insights

- **The user's stated problem ("can't tell what's recent and relevant") is real, but the proposed solution (rename + archive folder) has a hidden cost the user may not have priced in.** Cross-reference breakage is the primary cost; tab-completion noise and convention divergence (old vs new inquiries) are secondary.
- **`ls` is not the only interface.** Editors show file trees with sort options; CLI helpers can produce custom views; auto-generated INDEX.md works in any Markdown reader. The user defaulted to "filesystem convention" because that's the most universal interface, but it's not the cheapest.
- **Recency and staleness are different problems.** Mtime answers recency cheaply (`ls -lt`). Staleness needs Status or has-finding.md, which mtime doesn't carry. The user merged them in framing, but they decompose.
- **Some candidates are dead-on-arrival once cross-reference cost is honestly accounted for.** Group B (subfolder by status) is worst — every status change is a folder move, and there are routine status changes. Group A (rename) is one-shot heavy but bounded. Groups C and D are cheap because they don't touch folder identity.
- **The data has a hygiene problem orthogonal to the organization scheme.** 6/55 folders lack `## Status`; 5 just got marked SUPERSEDED today. Both indicate the existing signal-set is *underused*, not that more signals are needed.
- **The user's "datetime prefix should be compact" instruction implies they're thinking in terms of `ls` line length — they want compactness for visual scanning.** That preserves the filesystem-as-interface assumption but is exactly the assumption worth challenging.

### Structural Points

- **Folder name = identity.** It's the address other findings use to reference an inquiry. Identity that changes is brittle identity.
- **`_state.md` Status field is already a status enum.** Adding ARCHIVED to that enum costs zero filesystem changes.
- **Mtime is automatic; renames refresh mtime;** if the user renames all 55 folders today, every folder's mtime becomes today, destroying the recency signal until activity resumes.
- **Cross-references are folder-path strings**, not symbolic identifiers. They break on rename without a rewrite.
- **The CLI helper (Group D) reproduces the compact view I generated earlier in this session** (mtime / status / has-finding / name). That table IS the user's mental model rendered. The helper just needs to run that table on demand.

### Foundational Principles

- **Preserve cross-reference identity.** Folder names should change as rarely as possible.
- **Minimum new state.** Don't add new metadata when existing metadata can be surfaced.
- **Ambient visibility is nice; on-demand visibility is sufficient.** A `ls` view that shows everything is nice, but a one-keystroke command (`./inq` or shell alias) is functionally equivalent.
- **Status changes are routine; identity changes should be rare.** Any scheme that ties identity to status compounds rename cost over time.

### Meaning-Nodes

- **"At-a-glance recency."** The user's actual need. Decomposes into (a) what's recent, (b) what's still relevant.
- **"Datetime prefix."** The user's proposed mechanism. One specific candidate among many.
- **"Archive folder."** A specific scheme for separating active from inactive — but conflates location with status.
- **Cross-reference stability.** The hidden constraint.
- **Data hygiene.** The orthogonal sub-problem (6 missing Status, 5 just-SUPERSEDED, possibly more stale).
- **Volume.** 55 inquiries is dense; reducing volume by audit may itself reduce the visibility problem.

---

## SV2 — Anchor-Informed Understanding

After anchor extraction, the picture sharpens:

The user's stated problem is genuine but the proposed solution carries a cost they likely haven't priced — folder-name renames break cross-references that already exist densely across ~30+ files. The data they want surfaced (recency + staleness) is **already encoded** in mtime + `_state.md` Status + finding.md presence. The cheapest viable solution **doesn't rename anything** — it surfaces the existing data via a small CLI helper or auto-generated index.

There is also an orthogonal hygiene issue: 6 folders lack the Status field that the rest use; some COMPLETE inquiries may actually be stale-and-superseded but not marked. Fixing the data hygiene improves whatever scheme wins.

The frontier question becomes: does the user want filesystem-visible (paying the rename cost) or on-demand visible (cheaper, requires invoking a helper)? My current bet is that on-demand wins on cost-benefit, but there is a real ergonomic argument for filesystem-visible if the user genuinely lives in raw `ls` views.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- The 22 candidates collapse cleanly: rename-based (Groups A, B) pay cross-reference cost; non-rename (Groups C, D, E) don't. Within rename-based, Group A is one-shot; Group B keeps paying on every status change. Within non-rename, Group D is a CLI tool; Group C is an auto-generated file; both are cheap and complementary.
- The CLI helper has a 30-line implementation: `for d in */; do print mtime $(grep Status), has-finding, name; done | sort`. ~15-30 minutes to write + tune.
- Auto-INDEX has similar complexity but produces a persistent file readable in editors and on GitHub.

### Human / User

- The user has been working intensely; their context-switching cost is high. Asking them to invoke a helper (`./inq`) is a small ask but is a behavior change.
- The user proposed a specific scheme; pushing back on it has a small cost — they might feel their judgment is being overridden. Mitigation: present the alternative *as cheaper to implement and equivalent in benefit*, not as "your idea is wrong."
- The user explicitly asked "is there a better alternative?" — they invited the pushback. Not pushing back when there IS a structurally better alternative would be epistemic cowardice.

### Strategic / Long-term

- This project trajectory is high-density inquiry work over months. The number of inquiries will grow from 55 to several hundred. Whatever scheme wins must scale.
- A datetime-prefix scheme (Group A) scales fine but the migration cost is paid TWICE: once now (55 folders) and once whenever the convention is refined.
- A tool-based scheme (Group D) scales without recurring cost — the tool just queries the same data over a larger N.
- An auto-INDEX scheme (Group C) scales fine for editor viewing but the index file gets long; needs filtering features to stay useful at N=500.

### Risk / Failure

- **Highest risk: rename pass breaks cross-references silently.** A `sed` rewrite that misses a reference produces a dangling pointer that won't surface until someone tries to navigate it. The 5 SUPERSEDED markers added this session reference 2 supersedors by folder name; multiplied across the project, the surface area is large.
- **Second risk: helper script gets neglected.** If users stop running it, on-demand visibility silently degrades.
- **Third risk: convention divergence.** If renames are applied retroactively, they're consistent. If applied going-forward-only, old and new inquiries diverge — *worse* than no convention.

### Resource / Feasibility

- Group A (rename) costs ~1-2h focused work.
- Group D (CLI helper) costs ~30 min including testing.
- Group E (helper + Status hygiene) costs ~45-60 min total.
- Auto-INDEX (Group C) costs ~30-45 min for the generator.
- The user's available margin is unknown but constrained.

### Ethical / Systemic

- The project values source-of-truth integrity. Folder names that mutate based on time-of-creation conflict with that value (the topic-name *is* the source of truth for the inquiry's identity).
- The cross-reference architecture treats folder names as identifiers; that contract should be honored unless explicitly renegotiated.

### Definitional / Consistency

The user's question framing is *implementation-first* ("datetime prefix and archive folder"). The goal-frame is *needs-first* ("at-a-glance recency and staleness"). When framing differs from goal, prefer the goal — implementation is one of many ways to satisfy the need.

Does the project's existing convention support the user's proposed scheme cleanly? Partially — `_state.md` already has a Status field (the archive-status candidate). But folder-name prefixes have no precedent in the project; they would be a novel convention.

### Most Uncomfortable Perspective

The most uncomfortable perspective for a sensemaking that's about to recommend AGAINST the user's stated solution is:

> *Is the user actually asking for a tool-based solution, or are they asking for something stable they can see directly without remembering to invoke anything?*

If the answer is the latter — they want passive ambient visibility, not active on-demand visibility — then Group D (CLI helper) loses on the dimension that matters most to them, even if it wins on cost. Tools require discipline; filesystem conventions require none.

**Mitigation:** present the analysis honestly and let the user decide. The right answer might be "Group D is structurally cheaper, but Group A is what you actually want." Presenting both costs honestly lets the user pick on the dimension they care about.

A complement: there's a third option that bridges — **Group C (auto-generated INDEX.md)** lives in the filesystem, is passively visible (any editor opens it on entry to the folder), and requires no rename. It might be the both-worlds answer.

---

## SV3 — Multi-Perspective Understanding

After perspective checking:

- **Cross-reference cost is the dominant constraint.** Any rename-based scheme pays it. Most candidates fall away once it's honestly priced.
- **Group D (CLI helper) is structurally cheapest** but requires invocation discipline.
- **Group A (datetime-prefix rename) gives ambient visibility** but pays one-time + recurring (every refinement) cost AND erases mtime as a signal (renames refresh mtime).
- **Group C (auto-generated INDEX.md) is the bridge** — ambient visibility (file appears at top of folder, editors open it), no rename cost, persistent on disk so it survives without invocation.
- **Group B is dead** (status-subfolder schemes pay rename cost on every status change).
- **The data hygiene sub-problem is orthogonal** and should be addressed regardless of scheme.

The fork has narrowed: not five groups, but really two viable families — **on-demand tool (D)** and **persistent auto-index (C)**, with **rename (A)** as a heavier alternative if the user genuinely wants filesystem-as-interface.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: filesystem-visible vs on-demand vs persistent-document — which does the user need?

**Strongest counter-interpretation:** the user actually wants filesystem-visible, full stop, and the "is there a better alternative?" was a polite invitation rather than a real openness. Pushing the alternative is overriding their preference.

**Why the counter fails (structural grounds):** the user explicitly asked the question; declining to answer it honestly would defeat the inquiry. Also, the "compact as possible" instruction signals that the user is sensitive to the cost of the prefix (visual length); they will likely also be sensitive to the cost of cross-reference rewriting once it's stated.

The strongest answer balances both concerns: **a persistent auto-generated INDEX.md (Group C) gives filesystem-visible ambient information (anyone opening the folder sees `INDEX.md` and can read it), without the rename cost.** The CLI helper (Group D) supplements for ad-hoc queries but isn't required for the basic "what's here" view.

**Confidence:** HIGH on structural grounds. The bridge candidate satisfies both surfaces.

**Resolution:** **Adopt Group C (auto-generated `INDEX.md`) as the primary mechanism. Add Group D (CLI helper) as a supplementary on-demand query tool.** Do NOT adopt Group A or B (no folder renames; no subfolder reorganization).

**What is now fixed:** Folder names stay as topic-slugs. Cross-references remain stable.

**What is no longer allowed:** Folder renames driven by date or status. Subfolder reorganization that moves folders based on status.

**What now depends on this choice:** All migration-cost considerations vanish. The remaining work is implementation (the index generator + the helper script).

### Ambiguity 2: Archive — status or location?

**Strongest counter-interpretation:** archive should be a location (`archive/` subfolder), because moving stuff there is a familiar mental model, and "out of sight, out of mind" is the actual benefit.

**Why the counter fails (structural grounds):** moving to a location breaks cross-references (path includes `archive/` for archived folders). The user wants archived material *out of the default view*, not *out of accessibility*. A status-based archive achieves this — the index/helper filters out ARCHIVED by default; the folders stay where they are; references stay valid.

**Confidence:** HIGH.

**Resolution:** **Archive is a STATUS, not a LOCATION.** Add `ARCHIVED` to the Status enum (alongside ACTIVE / COMPLETE / SUPERSEDED). The `INDEX.md` and CLI helper filter ARCHIVED out of the default view; an explicit flag (`--all` or a separate `INDEX_ARCHIVE.md`) shows them.

**What is now fixed:** Status enum is `ACTIVE | COMPLETE | SUPERSEDED | ARCHIVED`. Folder location is independent of status.

**What is no longer allowed:** Moving folders based on status. The `archive/` subfolder concept is rejected.

### Ambiguity 3: What date does anything encode?

Since the resolution above is "no folder renames," the question "what date is the prefix" becomes moot. The relevant dates are:

- **Created date** — already in `_state.md` History (first entry). The index reads it from there.
- **Last-modified date** — filesystem mtime. The index reads it directly.
- **Completed date** — date the inquiry transitioned to COMPLETE. Read from History.

**Resolution:** all three are accessible without prefixes. The index displays mtime by default (most useful for "what's recent?"); created and completed are queryable via the helper if needed.

**What is now fixed:** No date is encoded in folder names. Dates are read from existing sources.

### Ambiguity 4: Data hygiene — clean up the 6 missing-Status folders?

**Strongest counter-interpretation:** leave them; they're old, low-value; their absence of Status is itself a signal (orphans).

**Why the counter partially holds:** orphans are signals. But "no Status" is an ambiguous signal — it could mean "old before convention," "scaffolded but never run," or "active but unrecorded." Each has different implications.

**Why the counter fails on structural grounds:** the index generator needs Status to render uniformly. Without Status, the 6 folders either fall out of the index (invisible) or render as "(no status)" (noisy). Either way, hygiene is cheaper than the workaround.

**Resolution:** **Add Status to all 6 missing folders as part of this commitment.** Best-effort assignment based on file contents — a folder with no `finding.md` and no recent activity → `STALE` or `SUPERSEDED` (with an investigative note in History); a folder with recent activity → `ACTIVE`.

**What is now fixed:** 100% of folders have a Status field after the cleanup.

### Ambiguity 5: Migration tolerance — was the user willing to spend ~1-2h on rename + cross-reference rewrite?

Resolution: moot. Since no rename is being proposed, this cost is not paid. The user's tolerance is preserved for other work.

### Ambiguity 6 (added): Volume vs. visibility — does reducing N solve visibility?

**Strongest counter-interpretation:** if the SUPERSEDED-audit reduces 55 → 30, the visibility problem is mostly solved by `ls` alone, and no scheme is needed.

**Why the counter partially holds:** dense N is a multiplier on the visibility problem. Reducing N reduces it.

**Why the counter fails on structural grounds:** N will grow again. The audit is a one-shot solution to a recurring problem. Whatever scheme is adopted needs to scale to N=500.

**Resolution:** **The SUPERSEDED audit should happen anyway** (orthogonal data hygiene), but it doesn't replace the index/helper. Both are needed: hygiene reduces noise; the index surfaces the remaining signal.

---

## SV4 — Clarified Understanding

After ambiguity collapse:

- **No folder renames.** Topic-slug folder names stay; cross-references stable.
- **No subfolder reorganization.** No `active/` or `archive/` containers.
- **Archive is a Status, not a Location.** Add ARCHIVED to the enum.
- **Auto-generated `INDEX.md`** at the top of `devdocs/inquiries/` is the primary visibility mechanism.
- **Small CLI helper** (`tools/inq` or similar) supplements with on-demand query power.
- **One-time data hygiene pass** brings all folders to 100% Status coverage.
- **The SUPERSEDED audit** is a separate ongoing task that reduces noise but doesn't replace the index.

What's eliminated:
- Datetime prefixes on folder names.
- Status-based subfolders.
- Physical archive folders.
- Anything that touches folder name or location.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now fixed

- Mechanism: auto-`INDEX.md` (primary) + CLI helper (supplement).
- Folder names: unchanged.
- Status enum: `ACTIVE | COMPLETE | SUPERSEDED | ARCHIVED`.
- Index location: `devdocs/inquiries/INDEX.md` (or `_INDEX.md` if alphabetical pinning to top is desired).
- Index regeneration trigger: TBD (manual on demand vs. CONCLUDE-time hook vs. git-precommit) — open question.
- Data hygiene pass: in scope.

### Variables still open (innovation will design these)

- Exact INDEX.md schema — what columns, sort order, default filter.
- CLI helper exact interface — `tools/inq`, shell function, Bash one-liner alias?
- Regeneration trigger — manual, hook, or both.
- Where ARCHIVED status is set (manually by user; or auto-derived by age/criteria).
- Migration plan for the 6 missing-Status folders — case-by-case judgment.

### Options eliminated

- Group A (rename): too costly relative to benefit.
- Group B (subfolder): pays cost on every status change.
- "Archive as physical folder": breaks cross-references.
- "Datetime prefix going forward only": creates convention divergence.
- "Just `ls -lt`": insufficient because Status isn't surfaced.

---

## SV5 — Constrained Understanding

The chosen architecture is two-layer:

```
Layer 1 (passive, ambient):
  devdocs/inquiries/INDEX.md
    - Auto-generated from each folder's _state.md + mtime + finding.md presence
    - Sorted by mtime descending; ARCHIVED filtered by default
    - Open it in any editor, on GitHub, or in a terminal pager — visibility from anywhere

Layer 2 (active, on-demand):
  tools/inq  (or equivalent shell function/script)
    - Prints the same compact table to terminal
    - Supports filters: --active, --complete, --superseded, --archived, --all
    - Supports sort: by mtime (default), by status, by created-date, by topic
    - ~30-line bash script

Underlying data (unchanged + cleaned):
  Each inquiry's _state.md has a Status field
  Status enum: ACTIVE | COMPLETE | SUPERSEDED | ARCHIVED (new)
  6 currently-missing folders get Status added in a one-time hygiene pass
```

What's eliminated:
- All folder renames.
- All subfolder reorganization.
- Physical archive separation.
- Encoding of dates in folder names.

---

## Phase 5 — Conceptual Stabilization

### SV6 — Stabilized Model

**The convention chosen is: keep folder names as topic-slugs, surface recency and staleness via an auto-generated `devdocs/inquiries/INDEX.md` plus a small CLI helper, treat archive as a STATUS (not a location), and run a one-time hygiene pass to bring all folders to 100% Status coverage.**

The reasoning underlying the choice:

1. The visibility problem the user is solving is real, but the data is already encoded (mtime, Status field, finding.md presence). The problem is surface, not substance. Any solution that adds new metadata (like a date prefix) duplicates signals already present.

2. Folder-name renames have a hidden cost the user's framing didn't price: cross-references between findings reference folders by name. Renaming 55 folders requires ~30+ files of cross-reference rewriting; missing one breaks traceability silently.

3. The cheapest mechanism that produces the at-a-glance visibility the user wants is **auto-generating an `INDEX.md`** from the data already present, plus a small CLI helper for ad-hoc queries. Both run in minutes; neither touches folder identity.

4. "Archive" is best implemented as a STATUS (`ARCHIVED` added to the enum) rather than a LOCATION (a physical `archive/` folder). Status-as-location breaks cross-references on every move; status-as-status is invisible to the filesystem and visible to the index.

5. The 6 folders missing the `## Status` field should get Status added in a one-time hygiene pass. Best-effort assignment based on file contents — folders with no finding and no recent activity → `SUPERSEDED` (or `ARCHIVED` if explicitly closed) with a note in History; folders with recent activity → `ACTIVE`.

6. The SUPERSEDED audit (reducing noise by marking stale inquiries) is a separate ongoing task that complements the index but doesn't replace it. N will grow over time; the index is the scaling mechanism.

### Concrete commitments per resolved question

| Question | Commitment |
|---|---|
| `ls`-visible recency vs. on-demand? | **Both via INDEX.md (passive) + CLI helper (active).** No rename. |
| Archive: status or location? | **Status.** Add `ARCHIVED` to enum. |
| What date does a prefix encode? | **N/A — no prefix.** Index displays mtime; History has created and completed dates. |
| Clean up 6 missing-Status folders? | **Yes, one-time hygiene pass.** Best-effort Status assignment per folder. |
| Volume vs. visibility — does audit solve visibility? | **Audit helps but doesn't replace the index.** Both happen. |
| Migration tolerance ~1-2h? | **Avoided entirely.** Cost is ~45-60 min total (index + helper + hygiene), not 1-2h. |

### Reconciliation: what the user said vs. what they need

The user said: "datetime prefix on folder names + archive folder, datetime prefix should be compact." That's an implementation. Their underlying need (recoverable from the question's framing): "tell which inquiries are recent/relevant at a glance." The implementation they proposed satisfies the need but pays a cost they didn't price (cross-reference breakage). The chosen alternative satisfies the same need at lower cost by surfacing existing data instead of duplicating it. **The user invited this pushback by asking "is there a better alternative?" — answering honestly is the right move.**

If the user *insists* on filesystem-visible-via-`ls` specifically (i.e., the on-demand or editor-visible solution doesn't satisfy them), the fallback is Group A (datetime-prefix rename) — but with full migration cost transparency.

### How SV6 differs from SV1

SV1 was: "the user has a real visibility problem; their proposed solution is one of many candidates." SV6 is: "the user's underlying need is real; their proposed mechanism has a hidden cost; the cheapest mechanism that satisfies the need is an auto-INDEX + helper without touching folder identity, treating archive as status not location, with a one-time data-hygiene pass to complete Status coverage." The shift is from "what's the right convention" to "what's the cheapest way to surface the data we already have."

**Confidence:** HIGH on the structural argument (cross-reference cost is dominant; data is already there; index/helper is cheapest). MEDIUM-HIGH on the bridge framing (auto-INDEX gives ambient visibility comparable to filesystem renames). MEDIUM on the user's actual preference between `ls`-visible and editor/INDEX-visible (the user might still prefer renames after seeing the INDEX option).

---

## Saturation Indicators (Telemetry)

- **Perspectives with new anchors:** 7 (Technical, Human, Strategic, Risk, Resource, Ethical/Systemic, Definitional). All produced new anchors. The most uncomfortable perspective (the user might actually want filesystem-visible) shifted the resolution toward the bridge-candidate (auto-INDEX) rather than purely on-demand.
- **Ambiguity resolution ratio:** 6 of 6 ambiguities resolved at HIGH or MEDIUM-HIGH confidence (added Ambiguity 6 — volume vs. visibility — was implicit in exploration's frontier questions).
- **SV delta:** Significant. SV1 was "evaluate candidates." SV6 is "specific two-layer architecture (INDEX + helper) with status-not-location archive and a hygiene pass."
- **Anchor diversity:** All 5 anchor types produced (Constraints, Key Insights, Structural Points, Foundational Principles, Meaning-Nodes).

## Failure-mode self-check

- **Status quo bias?** No — the recommendation actively *changes* the user's stated approach. The bias would be "user proposed rename; let's just rename"; the recommendation does the opposite.
- **Premature stabilization?** No — perspective checking included the most uncomfortable angle (user might actually want filesystem-visible) and produced the bridge-candidate to satisfy both.
- **Anchor dominance?** Slight risk — "cross-reference cost is the dominant constraint" appears as a strong anchor across the analysis. Mitigated: the cost was probed concretely (~30+ files; specific examples named) rather than asserted abstractly.
- **Perspective blindness?** No — uncomfortable perspective explicitly checked.
- **Clean resolution trap?** Mitigated — the resolution acknowledges a fallback (Group A rename) if the user insists; it doesn't claim a single-answer cleanness.
- **Self-reference blindness?** Mild risk — this sensemaking is the project using its own discipline to evaluate its own organizational scheme. Mitigation: the data is concrete (55 folders, 6 missing Status, specific cross-reference examples named); not pure conceptual validation.

---

## Open Questions for Decomposition + Innovation

1. **INDEX.md schema** — what columns, what sort default, what filter default, what format (table vs sectioned)?
2. **Regeneration trigger** — manual? CONCLUDE-time hook? git pre-commit? On-demand only?
3. **CLI helper interface** — separate `tools/inq` script? Shell function in `tools/aliases.sh`? Both?
4. **Hygiene pass approach** — case-by-case manual assignment, or is there a programmatic rule for the 6 missing folders?
5. **ARCHIVED criterion** — when does a COMPLETE inquiry transition to ARCHIVED? Automatically by age? Manually by user? Or never auto, only manual?
6. **`INDEX.md` versus `_INDEX.md` versus `00_INDEX.md`** — pinning to top of `ls` alphabetically. Trivial but worth committing to one.

---

## One-sentence summary

**Don't rename folders; surface the data already in `_state.md` + mtime + finding.md presence via an auto-generated `INDEX.md` (passive, ambient) plus a small `tools/inq` CLI helper (active, on-demand); treat archive as a STATUS in the enum (not a location); run a one-time hygiene pass to add Status to the 6 folders missing it — total ~45-60 min, no cross-reference cost paid.**
