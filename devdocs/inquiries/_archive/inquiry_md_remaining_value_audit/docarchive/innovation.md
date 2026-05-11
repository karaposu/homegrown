# Innovation: inquiry_md_remaining_value_audit

## User Input

`devdocs/inquiries/inquiry_md_remaining_value_audit/_branch.md`

Innovate concrete designs for cleaning up `commands/inquiry.md` based on sensemaking's verdicts (wayfinding moves are canonical to /wayfinding; /navigation does not subsume /wayfinding; DIAGNOSE specifically uncovered by /navigation; /MVL implements only NARROW; /inquiry's distinct-features count drops from 5 to 3, all in CONFIGURE; SYNTHESIZE pending Configuration β rewrite). Apply 7 mechanisms × 3 variations to each of seven pieces (A: removal strategy; B: wayfinding-table replacement; C: SYNTHESIZE rewrite; D: DIAGNOSE coverage; E: Rules trim; F: cross-references to /inquiry; G: whole-file assembly). Produce concrete proposed wording, not abstract discussion.

---

## Direction (Intuition)

**Context.** The user has just completed the CONCLUDE extraction and the synthesize_vs_finding_split inquiry; pending Configuration β work is queued; /inquiry has been around since the project's beginning but is now empirically underutilized. The audit is timed at a moment where the project is consolidating its architecture rather than expanding it.

**Valuation.** The user explicitly flagged "/wayfinding is not used so much now" — they want to know whether that empirical signal indicates structural supersession or just routine-case absorption by /MVL. Sensemaking already answered: routine-case absorption, not supersession. The valuation now is: **clean up duplicative content without losing the architectural prep that's load-bearing for higher autonomy levels.** Don't deprecate /inquiry; don't bloat it with content that lives canonically elsewhere.

**Motivation.** The user is in the active phase of consolidating the protocols and disciplines architecture; cleanup work is welcome when it has a clear punch list. They want concrete proposed wording, not vague guidance.

---

## SEED

The seed is two-part:

1. **Cleanup seed:** inquiry.md has ~80 lines of content that is either duplicative of /wayfinding (move table + META-SEARCH CHECKPOINT logic) or superseded by /MVL (loop pattern, cross-session resume, SIC-cycle example). Removing this content tightens the file but requires care — what replaces the removed content? what cross-references preserve discoverability?
2. **Configuration β seed:** the synthesize_vs_finding_split finding decided a SYNTHESIZE rewrite is needed (Step 1 of its punch list). The rewrite has been specified with proposed wording but not yet applied. This audit is the natural moment to apply it — but the wording uses "FINDING-COMPILE," which the user has since renamed to "CONCLUDE." The wording needs adapting to the current canonical name.

Both seeds combine into a single editing pass on inquiry.md. The Innovation must produce concrete proposals for each piece such that the user can apply them in one focused editing session.

---

## PIECE A — Removal-strategy for inquiry.md duplicative sections

**Decision:** which sections to actually remove, how aggressively, and whether to leave breadcrumbs.

### A.1 (generic — clean cuts with cross-refs)

**Mechanism applied: Constraint Manipulation** (constraint added: "preserve discoverability while removing duplication").

Remove all five superseded sections in one pass:
- Lines 173-216 (META-SEARCH CHECKPOINT block including the wayfinding-table)
- Lines 220-244 ("How the User Runs a Full SIC Cycle" example)
- Lines 246-248 (loop pattern diagram)
- Lines 252-285 (SYNTHESIZE — to be replaced by Piece C, not deleted entirely)
- Lines 289-298 (Cross-Session Resume)

Replace each with a 1-3 line cross-reference to the canonical home:
- META-SEARCH CHECKPOINT → "When all pipeline steps are complete, run /wayfinding to select the next iteration move."
- SIC-cycle example → (delete entirely; the pattern is /MVL's job now)
- Loop pattern diagram → (delete entirely)
- Cross-Session Resume → (delete entirely; /MVL has its own)

**Net edits.** ~80 lines removed; ~5-10 lines of cross-references added. inquiry.md drops from 312 to ~230-240 lines.

**Why this works.** Honors the canonical-home principle from sensemaking: each piece of content has one home, others are references. Cross-references preserve discoverability without duplication.

**What it costs.** Loss of inquiry.md's "I am self-contained, you can read me to understand the whole flow" property. Anyone reading inquiry.md will need to also read /wayfinding and /MVL to understand the full picture. That's the right trade — inquiry.md isn't actually self-contained anymore (the routine path is /MVL's).

### A.2 (focused — preservative with archive marker)

**Mechanism applied: Inversion** (invert "remove → unrecoverable" into "remove → recoverable via marker").

Wrap removed sections in HTML comment markers OR move them to an `archived` section at the bottom of inquiry.md:

```markdown
<!--
ARCHIVED 2026-04-25 — wayfinding-move table.
Canonical home: commands/wayfinding.md (lines 153-198 for full specs).
Reason for archival: duplicative summary of /wayfinding's full taxonomy.

[original table here]
-->
```

OR a dedicated end-of-file archive section:

```markdown
---
## Archive — moved content (2026-04-25)

The following sections were canonically homed elsewhere; their content now lives in:
- Wayfinding move taxonomy → commands/wayfinding.md
- SIC-cycle example, loop pattern, cross-session resume → commands/MVL.md and commands/MVL+.md

[old content preserved here for reference]
```

**Net edits.** Same structural cleanup as A.1, but with ~80 lines preserved at end-of-file or in HTML comments. inquiry.md stays at 312 lines visually but the active content drops to ~230.

**Why this works.** Reversibility — if someone in 6 months wants to see what was removed, the content is still in the file. The archive marker is explicit, dated, and reasoned.

**What it costs.** Active maintenance burden — archived content can drift from canonical homes without anyone noticing. Files with archive sections at the bottom often become wallpaper. The archive-as-comment pattern also bloats the file unnecessarily for git diffing.

**Verdict on this mechanism's output:** The HTML-comment version is technically sound but rarely a good idea in practice. The archive section at end-of-file is slightly better because it's visible. Both are weaker than git history (which already preserves the removed content with full reasoning when committed).

### A.3 (contrarian — radical delete the entire file)

**Mechanism applied: Inversion** (invert "trim inquiry.md" into "delete inquiry.md entirely").

Delete `commands/inquiry.md` outright. Migrate CONFIGURE's content (the variable-pipeline classification logic) to one of three new homes:
- (a) New file: `commands/configure.md` — separate slash command for problem-classification + pipeline-design.
- (b) Section in `commands/MVL+.md`: extend /MVL+ to optionally invoke CONFIGURE for non-trivial problems.
- (c) New file: `homegrown/protocols/configure.md` — flat protocol file, invoked by other commands.

The /diagnose pipeline placeholder migrates with CONFIGURE wherever it goes.
The edge-case problem types (Ambiguous=S only, Novel=I→C, Clear=I→C) go with CONFIGURE.

**Net edits.** ~312 lines deleted; ~80-120 lines added at the new home.

**Why this would work.** The unique value of /inquiry is empirically tiny (CONFIGURE is rarely invoked). Deletion forces a clean architecture: one file = one purpose. CONFIGURE-as-its-own-command is more discoverable than CONFIGURE-buried-inside-/inquiry.

**What this would cost.** Loss of the /inquiry namespace and the namespace's history. Existing references in other docs that mention `/inquiry` would break. Configuration-with-variable-pipelines is a real future-load-bearing feature; sending it to a new home risks losing the architectural framing. The prior `inquiry_vs_mvl_outdated_check` finding's "keep /inquiry, refine the role" verdict would be overturned without a SIC pass on the deletion decision itself.

**Verdict on this mechanism's output:** Tempting but premature. Deletion is recoverable from git if needed; the right time to consider deletion is after observing whether CONFIGURE ever gets invoked in practice over the next 5-10 inquiries. Don't delete now; trim and observe.

---

## PIECE B — Wayfinding-table replacement wording

**Decision:** what replaces the wayfinding-table at lines 183-190 once it's removed.

### B.1 (generic — single one-liner cross-reference)

**Mechanism applied: Absence Recognition** (recognize: the table doesn't need to exist; only the pointer does).

Proposed wording (replaces lines 173-216 entirely):

```markdown
**If ALL pipeline steps for this iteration are complete →**

Run `/wayfinding` on the inquiry folder. /wayfinding selects the next iteration move (NARROW / BROADEN / SHIFT / DIAGNOSE / TERMINATE / RECONSIDER) using the Three-Layer Awareness Model (Present / Trend / Memory). See `commands/wayfinding.md` for the full move taxonomy and selection logic.

After /wayfinding produces a move, update `_state.md`:
- Increment iteration
- Reset Pipeline Progress checkboxes for the new iteration
- Update Next Command based on the move
- Append to History (what happened this iteration, what the move is)
```

**Net edits.** ~44 lines (173-216) replaced with ~10 lines. Net: -34 lines.

**Why this works.** Single canonical pointer. Move names are listed inline so a reader knows the vocabulary without leaving inquiry.md, but the full specs and selection logic stay in /wayfinding (where they're authoritative).

**What it costs.** A reader who hasn't seen /wayfinding before doesn't know what NARROW vs SHIFT means until they read it. That's correct — they should read /wayfinding before invoking it.

### B.2 (focused — paragraph noting trigger contexts)

**Mechanism applied: Domain Transfer** (import the "see also" pattern from technical documentation: short prose hint + canonical reference).

Proposed wording:

```markdown
**If ALL pipeline steps for this iteration are complete →**

Run `/wayfinding` on the inquiry folder. /wayfinding examines the Present (what survived critique), Trend (iteration-over-iteration velocity), and Memory (kill-records and prior decisions) layers and produces ONE iteration move from a six-move taxonomy:

- **NARROW** when a strong survivor needs refinement on a specific aspect
- **BROADEN** when all candidates were killed or are clustering
- **SHIFT** when the current dimension is exhausted
- **DIAGNOSE** when the inquiry is oscillating, stalling, or layer-conflict-paralyzed
- **TERMINATE** when convergence + clean survivor signals readiness for SYNTHESIZE
- **RECONSIDER** when a kill condition has been invalidated by new information

The full move specs and selection logic live in `commands/wayfinding.md`. /inquiry only triggers the wayfinding step; it does not run the analysis itself.

After /wayfinding produces a move, update `_state.md` (increment iteration, reset checkboxes, update Next Command, append to History).
```

**Net edits.** ~44 lines replaced with ~20 lines. Net: -24 lines.

**Why this works.** The mini-summary preserves move-name discoverability for readers skimming inquiry.md without forcing them to navigate to /wayfinding for the high-level vocabulary. The "/wayfinding owns the analysis" framing is explicit. The lines about move names ARE one-line summaries (essentially the table without the table format), but the explicit statement that /wayfinding is canonical puts this at "loose coupling" rather than "duplication."

**What it costs.** Mild duplication remains (the move names + brief triggers are also in /wayfinding). The duplication risk is drift if /wayfinding's spec changes and inquiry.md doesn't.

### B.3 (contrarian — minimal cross-reference, no move names)

**Mechanism applied: Inversion** (invert "preserve names for skimming" into "force readers to /wayfinding for ANY wayfinding info").

Proposed wording:

```markdown
**If ALL pipeline steps for this iteration are complete →**

Run `/wayfinding` on the inquiry folder. /wayfinding selects the next iteration move; see `commands/wayfinding.md` for the full taxonomy.

After /wayfinding produces a move, update `_state.md`.
```

**Net edits.** ~44 lines replaced with ~5 lines. Net: -39 lines.

**Why this would work.** Zero duplication. Treating /wayfinding as a black box from inquiry.md's perspective is structurally clean — inquiry.md doesn't need to know what moves exist to delegate the decision.

**What it would cost.** A reader of inquiry.md learns nothing about what /wayfinding produces; they have to navigate to /wayfinding to even understand what comes next. This violates a documentation principle: callers should know the shape of what they're invoking, not just its name.

**Verdict.** B.1 is the recommended default. B.2 (with mini-list of moves) is acceptable if the user wants more skim-readability at mild duplication cost. B.3 is too sparse.

---

## PIECE C — SYNTHESIZE section rewrite

**Decision:** how to apply the Configuration β Step 1 from `synthesize_vs_finding_split`. The original wording in the critique used "FINDING-COMPILE"; that name has since been renamed to "CONCLUDE." The wording must be adapted.

### C.1 (generic — minimal scope, cross-reference CONCLUDE)

**Mechanism applied: Constraint Manipulation** (apply the constraint: "use CONCLUDE everywhere FINDING-COMPILE was used").

Proposed wording (replaces lines 252-285 of inquiry.md):

```markdown
## SYNTHESIZE — Artifact Construction (after CONCLUDE)

When `/MVL` or `/MVL+` writes `finding.md` at iteration completion (the **CONCLUDE** protocol — see `homegrown/protocols/conclude.md` and `thinking_disciplines/protocols/desc.md`), the inquiry's verdict is recorded inside the inquiry folder. SYNTHESIZE is the next step — but only when the project needs a project-level artifact distinct from the finding.

**SYNTHESIZE constructs a project-level artifact** (specification document, implementation plan, decision document, report, root-cause analysis, etc.) from a completed finding, in the format the project's audience requires. The artifact is saved to its project location (NOT the inquiry folder).

**When you need SYNTHESIZE:**
- The inquiry was "design `/scope`" — `finding.md` describes the design; SYNTHESIZE produces the actual `commands/scope.md` spec (with frontmatter, invocation patterns, examples).
- The inquiry was "write a project report on X" — `finding.md` captures the verdict; SYNTHESIZE produces the report in the project's report format.
- The inquiry was "decide on architecture for Y" — `finding.md` captures the decision; SYNTHESIZE produces an ADR in the project's ADR format.

**When you DON'T need SYNTHESIZE:**
- The inquiry was an audit, evaluation, or design question whose deliverable IS the verdict. `finding.md` IS the deliverable; you read it and act on Next Actions. No separate SYNTHESIZE step.

**Status: named-but-procedurally-underspecified.** The HOW of constructing each artifact type from a finding is currently performed manually by the human reading `finding.md` and writing the project artifact. The formal procedure is a named slot for autonomy-ladder Level 2-3+ implementation (per `enes/desc.md`) — when the system needs to autonomously produce project artifacts from completed inquiries.

**Quality test:** "Can a project consumer (not an inquiry-traverser) act on this artifact directly, without reading the finding it was constructed from?"

**Boundary with CONCLUDE:** CONCLUDE produces the verdict-as-output (the inquiry's answer, in standardized form, inside the inquiry folder). SYNTHESIZE produces the artifact-the-verdict-was-about-as-output (a project artifact in the project's format, outside the inquiry folder). They are structurally distinct operations, currently both alive in the project but with different implementation maturity.
```

**Net edits.** ~33 lines (252-285) replaced with ~30 lines. Net ~zero.

**Why this works.** Direct adaptation of the synthesize_vs_finding_split critique's Step 1 wording, with FINDING-COMPILE → CONCLUDE rename throughout. Preserves the architectural framing (named-slot, autonomy-ladder, quality test, boundary). Cross-references both `homegrown/protocols/conclude.md` (the actual implementation) AND `thinking_disciplines/protocols/desc.md` (the canonical map).

**What it costs.** Doesn't update Rule 8 in the Rules section, which still says "SYNTHESIZE after TERMINATE." That rule is still defensible (SYNTHESIZE is the post-TERMINATE artifact step) but should be updated to clarify "if a project artifact is needed" — see Piece E.

### C.2 (focused — fuller, with autonomy-ladder paragraph)

**Mechanism applied: Combination** (combine C.1's wording with an explicit autonomy-ladder framing paragraph).

Add to C.1 a fourth paragraph between "When you DON'T need SYNTHESIZE" and "Status":

```markdown
**Why SYNTHESIZE is named but underspecified.** The protocols dimension (per `thinking_disciplines/protocols/what_is_protocol.md`) provides named-but-deferred slots for capabilities the autonomy ladder will need. SYNTHESIZE-as-named-slot is architectural prep for Level 2-3+ autonomy: when the system can autonomously translate a finding into a project artifact (a `commands/<X>.md` spec, a project report, an ADR), it will execute the SYNTHESIZE slot. Today the human performs this translation; naming the slot now means the eventual implementation has an architectural home.
```

**Net edits.** C.1's ~30 lines + C.2's added ~6 lines = ~36 lines. Compared to current 33: net +3 lines.

**Why this works.** Surfaces the "why does this slot exist if the procedure isn't formalized?" question explicitly. Reduces the chance of someone reading "named-but-procedurally-underspecified" and thinking "this is half-finished" rather than "this is named on purpose."

**What it costs.** Mild duplication with `enes/desc.md` (which is where the autonomy-ladder lives canonically). The "Configuration β'" variant from the synthesize_vs_finding_split finding flagged exactly this trade-off as a defensible user judgment call.

### C.3 (contrarian — delete the section, point to protocols/desc.md)

**Mechanism applied: Inversion** (invert "rewrite SYNTHESIZE here" into "delete SYNTHESIZE here, it lives elsewhere").

Replace lines 252-285 with:

```markdown
## After TERMINATE

When wayfinding produces TERMINATE, the inquiry's verdict has been compiled by /MVL/MVL+ via the **CONCLUDE** protocol (`homegrown/protocols/conclude.md`). The inquiry tree persists; `finding.md` is the deliverable.

If the project needs an additional project-level artifact (spec, plan, report, ADR, RCA) constructed from the finding, that's the **SYNTHESIZE** protocol — currently a named-but-procedurally-underspecified slot in `thinking_disciplines/protocols/desc.md`. The actual artifact construction is performed manually until SYNTHESIZE is formalized at Level 2-3+ autonomy.
```

**Net edits.** ~33 lines (252-285) replaced with ~7 lines. Net: -26 lines.

**Why this would work.** Maximum economy. The SYNTHESIZE definition lives in protocols/desc.md (where it belongs); inquiry.md just points to it. Total elimination of the conflation that triggered synthesize_vs_finding_split (no procedure described inline, no deliverable list inline — just a reference).

**What this would cost.** Loss of the inline "When you need SYNTHESIZE / When you don't" guidance. A reader of inquiry.md gets a reference but no concrete intuition for when SYNTHESIZE applies. Discoverability drops slightly — the user has to navigate to protocols/desc.md to learn SYNTHESIZE's actual scope.

**Trade-off note.** C.3 collides with B.3 — both choose maximum economy. If the user prefers economy, C.3 + B.3 are mutually compatible and produce the smallest inquiry.md. If the user prefers in-place pedagogy, C.1 + B.1 (or B.2) are mutually compatible.

**Verdict.** C.1 is the recommended default — it directly applies Configuration β Step 1 with the CONCLUDE rename, and balances economy vs pedagogy. C.2 is the defensible variant for stronger autonomy-ladder framing. C.3 is acceptable but trades discoverability for economy.

---

## PIECE D — DIAGNOSE-uncovered-by-/navigation question

**Decision:** what (if anything) to do about the fact that /navigation's 15-type taxonomy has no clean equivalent for /wayfinding's DIAGNOSE move.

### D.1 (generic — explicit cross-reference in /navigation)

**Mechanism applied: Combination** (combine "navigation enumerates" with "wayfinding has DIAGNOSE" into a sibling-protocol cross-reference).

Add a paragraph to `commands/navigation.md` (early — perhaps in the Activation or Scope section). Proposed wording:

```markdown
## Relationship with /wayfinding

`/navigation` enumerates ALL applicable next-directions from a 15-type taxonomy. `/wayfinding` selects ONE iteration-move from a 6-move taxonomy (NARROW / BROADEN / SHIFT / DIAGNOSE / TERMINATE / RECONSIDER) using the Three-Layer Awareness Model.

The two taxonomies overlap on most moves (NARROW ↔ DEEPEN+REFINE; TERMINATE ↔ TERMINATE; RECONSIDER ↔ REVISIT; BROADEN/SHIFT partial overlap with DIFFERENT APPROACH and WIDEN), but the **DIAGNOSE** move — meta-recognition that the inquiry process itself is broken (oscillating, stalling, layer-conflict-paralyzed) — has no clean /navigation equivalent. For that signal, /wayfinding is the canonical protocol.

In practice: use /wayfinding when you need to pick ONE move at iteration boundary; use /navigation when you need to MAP all applicable directions for a possibility-space view.
```

**Net edits.** ~8 lines added to /navigation.md.

**Why this works.** Names the gap explicitly so future agents (and the user, on re-reading) don't mistakenly assume /navigation can replace /wayfinding wholesale. Also documents the complementarity that sensemaking established.

**What it costs.** Adds ~8 lines to /navigation, which is already 491 lines.

### D.2 (focused — extend protocols/desc.md or wayfinding/SKILL.md with explicit ownership note)

**Mechanism applied: Lens Shifting** (shift the question from "where to mention DIAGNOSE" to "where does ownership of DIAGNOSE need to be visible?").

Add a one-line note to `homegrown/wayfinding/SKILL.md` (early, near the description) AND a parallel note to `commands/navigation.md`:

In `homegrown/wayfinding/SKILL.md`:
```markdown
> **Canonical home for DIAGNOSE.** `/wayfinding` owns the DIAGNOSE move (recognition that the inquiry process itself is broken, not just the candidates). `/navigation`'s 15-type taxonomy does not have an equivalent type — DIAGNOSE is unique to /wayfinding's selection role.
```

In `commands/navigation.md`:
```markdown
> **DIAGNOSE not covered.** /navigation's taxonomy enumerates content/process/context next-directions. The DIAGNOSE move (recognition that the inquiry process itself is broken — oscillating, stalling, layer-conflict-paralyzed) has no clean /navigation equivalent and lives only in `commands/wayfinding.md`.
```

**Net edits.** ~3 lines × 2 files = ~6 lines.

**Why this works.** Makes the asymmetry findable from BOTH ends. A user reading /wayfinding knows DIAGNOSE is uniquely theirs; a user reading /navigation knows what's missing.

**What it costs.** Slightly redundant if D.1 is also applied (D.2 is a more compact form of the same idea).

### D.3 (contrarian — extend /navigation with a 16th type)

**Mechanism applied: Inversion** (invert "navigation lacks DIAGNOSE" into "extend navigation to have DIAGNOSE").

Add a 16th type to /navigation.md's taxonomy under the Process category:

```markdown
| **PROCESS-BROKEN** (or **DIAGNOSE**) | Recognition that the inquiry process itself is broken — oscillating, stalling, layer-conflict-paralyzed. Not "the candidates failed" but "the inquiry frame is wrong." When triggered: drop back to sensemaking on the gap (the meta-issue that's stalling progress). | Process |
```

**Net edits.** ~3 lines added to /navigation's taxonomy table; updates to the navigation.md count from 15 to 16 throughout.

**Why this would work.** Eliminates the asymmetry. /navigation becomes a true superset of /wayfinding's moves; /wayfinding is the selection variant of /navigation.

**What this would cost.** (a) The 15-type taxonomy was carefully designed; adding a 16th is a structural change to /navigation's spec, not a doc change. (b) DIAGNOSE in /wayfinding is tightly coupled to the Three-Layer Awareness Model; transplanting it to /navigation strips that coupling. (c) Sensemaking explicitly concluded /navigation and /wayfinding serve different roles — extending /navigation with DIAGNOSE re-couples them in a way the sensemaking rejected. (d) Out of scope for THIS audit — would need its own SIC pass on the taxonomy-extension decision.

**Verdict on this mechanism's output:** Tempting but premature. The taxonomies should remain different roles (selection vs enumeration); D.1 or D.2 is the right move now. If the user later wants taxonomy unification, that's a follow-up inquiry.

### D.4 (contrarian — leave it; sensemaking has documented it, no action needed)

**Mechanism applied: Constraint Manipulation** (remove the constraint "every gap must be acted on; documentation alone is insufficient").

Do nothing. Sensemaking has documented the asymmetry. Future readers can find it via the inquiry tree if they need the context.

**Net edits.** Zero.

**Why this would work.** Minimum intervention. The architectural framing already exists in `inquiry_md_remaining_value_audit/sensemaking.md`; if a future user has questions, the inquiry record is queryable.

**What this would cost.** The asymmetry isn't visible at the point-of-use (when reading /navigation or /wayfinding). A future agent reading /navigation alone might assume the 15 types are exhaustive and miss DIAGNOSE entirely.

**Verdict.** D.1 or D.2 is the recommended default (minimum-friction fix to a real coverage hazard). D.4 (do-nothing) is acceptable if the user views inquiry-tree-as-documentation as sufficient. D.3 is a separate inquiry, not a punch-list item.

---

## PIECE E — Rules section trim

**Decision:** which rules to keep, which to remove, which to consolidate.

Current Rules section (lines 302-311) has 8 rules. Sensemaking flagged: keep /inquiry-specific rules, remove duplications with /MVL.

Audit per rule:

| # | Rule | Verdict | Reason |
|---|---|---|---|
| 1 | "CONFIGURE first." | KEEP | /inquiry-specific. /MVL has its own opening but doesn't say "CONFIGURE." |
| 2 | "/inquiry does NOT run disciplines." | KEEP | /inquiry-specific architecture (manual-typed flow). /MVL auto-runs; this rule distinguishes /inquiry. |
| 3 | "_state.md is the source of truth." | DUPLICATE | /MVL Rule 3 says the same thing. Remove from /inquiry. |
| 4 | "Discipline commands save to the inquiry folder." | DUPLICATE | /MVL Rule 2 says the same thing. Remove from /inquiry. |
| 5 | "Dead branches persist. Kill conditions as falsifiable predicates in `_state.md`." | KEEP (or refine) | Unique to /inquiry's branch-management framing. Currently low-utilization but architecturally correct. |
| 6 | "Wayfinding runs when the pipeline iteration is complete." | KEEP | /inquiry-specific (defines when /wayfinding fires in the manual flow). |
| 7 | "Circuit breaker. Zero/negative velocity for 2+ iterations → force-pause with diagnosis." | KEEP (low-utilization) | Unique. Currently not invoked anywhere I can find, but it's a real architectural slot. |
| 8 | "SYNTHESIZE after TERMINATE." | REFINE | Keep but rewrite: "When TERMINATE produces a finding that requires a project-level artifact, run SYNTHESIZE — see SYNTHESIZE section above." |

### E.1 (generic — surgical removal of duplicates)

**Mechanism applied: Constraint Manipulation** (apply: "remove only the duplicates with /MVL").

Remove rules 3 and 4 (duplicates with /MVL). Refine rule 8 to clarify it applies only when project artifact is needed. Keep all others.

Final Rules section (proposed wording):

```markdown
## Rules

1. **CONFIGURE first.** New inquiries start with classification and pipeline.
2. **`/inquiry` does NOT run disciplines.** It tells you which command to type. The disciplines run themselves.
3. **Dead branches persist.** Kill conditions as falsifiable predicates in `_state.md`.
4. **Wayfinding runs when the pipeline iteration is complete.** Not between disciplines — only after all pipeline steps are done.
5. **Circuit breaker.** Zero/negative velocity for 2+ iterations → force-pause with diagnosis.
6. **SYNTHESIZE after TERMINATE if a project artifact is needed.** The inquiry tree is the thinking history (with `finding.md` produced by CONCLUDE as the verdict). SYNTHESIZE constructs the project-level artifact from the finding when one is needed (see SYNTHESIZE section).
```

**Net edits.** Rules section drops from 8 to 6. ~10 lines removed; ~2 lines added (rule 6 refinement).

**Why this works.** Preserves /inquiry-specific architecture without duplication. Rule 6 (formerly rule 8) explicitly clarifies the SYNTHESIZE invocation criteria.

### E.2 (focused — rewrite as a 3-rule section emphasizing /inquiry's purpose)

**Mechanism applied: Lens Shifting** (shift from "list of rules" to "3 essentials").

```markdown
## Rules

1. **CONFIGURE first.** New inquiries start with classification (problem type → pipeline). /inquiry is the configuration tool; /MVL is the auto-runner. /inquiry does NOT run disciplines itself — it sets up the pipeline and steers between iterations.

2. **/wayfinding runs at iteration completion**, not between disciplines. /inquiry triggers /wayfinding once per iteration boundary; /wayfinding selects the next move (see `commands/wayfinding.md`).

3. **Circuit breaker on stalled inquiries.** Zero or negative velocity over 2+ iterations forces a DIAGNOSE pass. Branch deaths are recorded as falsifiable predicates in `_state.md` so they can be reconsidered if invalidated.
```

**Net edits.** Rules section drops from 8 to 3. ~10 lines remain.

**Why this works.** Distills /inquiry's identity to its three actually-load-bearing rules: configuration, wayfinding-trigger timing, circuit-breaker-on-stall. Eliminates noise.

**What it costs.** Loses the explicit SYNTHESIZE rule. The SYNTHESIZE rule is captured by Piece C's section but not in the Rules section. Acceptable trade.

### E.3 (contrarian — delete Rules section entirely)

**Mechanism applied: Inversion** (invert "rules need their own section" into "rules belong inline with the operations they govern").

Delete the entire Rules section. Inline rules into the relevant operation sections:
- Rule 1 (CONFIGURE first) → in CONFIGURE section's preamble.
- Rule 2 (/inquiry doesn't run disciplines) → in inquiry.md's top-of-file description (already similar to current line 8).
- Rule 5 (dead branches) → in `_state.md` template's Kill Record subsection.
- Rule 6 (wayfinding timing) → in the META-SEARCH/wayfinding-trigger section.
- Rule 7 (circuit breaker) → in /wayfinding (since /wayfinding owns the stall detection).
- Rule 8 (SYNTHESIZE) → in SYNTHESIZE section.

**Net edits.** ~10 lines of Rules section removed; ~2-3 lines redistributed inline.

**Why this would work.** Rules-as-section is often a defensive doc pattern — they accumulate without anyone questioning whether they should still exist. Inlining forces each rule to justify its place in context.

**What this would cost.** Loss of the "checklist" property — a reader can no longer glance at /inquiry's Rules section to remember the 5-8 things to honor. Inlining trades scannability for context-fit.

**Verdict.** E.1 is the recommended default — surgical, clear, preserves the checklist scannability. E.2 (3-rule distillation) is acceptable if the user prefers concision. E.3 is a deeper editorial decision the user can defer.

---

## PIECE F — Cross-references TO /inquiry

**Decision:** does /inquiry need to be findable from other docs? If yes, where?

### F.1 (generic — light cross-reference from /MVL and /MVL+)

**Mechanism applied: Combination** (combine the existing /MVL and the existing /inquiry into a navigability link).

Add a one-line note to `commands/MVL.md` and `commands/MVL+.md` near the top (in the description or first paragraph):

```markdown
> For variable-pipeline inquiries (problem-classification first, then pipeline selection: e.g., Complex problems requiring decomposition into per-branch sub-pipelines, or Broken problems requiring /diagnose), use `/inquiry`. /MVL is the always-S→I→C runner; /inquiry is the configurable-pipeline orchestrator.
```

**Net edits.** ~3 lines × 2 files = ~6 lines.

**Why this works.** A user reading /MVL who has a non-trivial problem (Complex with sub-pipelines, Broken needing diagnosis) finds /inquiry from the right entry point. Without this, /inquiry is invisible to anyone who starts with /MVL.

**What it costs.** Mild visual noise at the top of /MVL/MVL+. Acceptable.

### F.2 (focused — cross-reference from protocols/desc.md)

**Mechanism applied: Absence Recognition** (recognize: protocols/desc.md mentions CONFIGURE in passing but doesn't link to /inquiry as the canonical home).

In `thinking_disciplines/protocols/desc.md`, find the CONFIGURE entry (currently in the alive group) and add:

```markdown
**CONFIGURE** — [existing description]. Canonical implementation: `commands/inquiry.md` (the variable-pipeline classification logic; problem-type → pipeline selection).
```

Similarly for any other /inquiry-owned protocol (e.g., the wayfinding-trigger logic, if represented).

**Net edits.** ~1-2 lines added to protocols/desc.md.

**Why this works.** Names the implementation site for the CONFIGURE protocol. The protocols dimension's whole point is to be the architectural map; without this cross-reference, CONFIGURE appears in the map without a link to the file that implements it.

**What it costs.** Trivial.

### F.3 (contrarian — do nothing)

**Mechanism applied: Inversion** (invert "must add cross-references" into "the existing references are sufficient").

Status quo. /inquiry is named in the project's README, in the prior `inquiry_vs_mvl_outdated_check` finding, and in this audit's finding. Anyone who needs /inquiry can find it via the inquiry tree.

**Net edits.** Zero.

**Why this would work.** /inquiry is empirically underutilized; investing in cross-references that won't be followed is cycle-spending.

**What this would cost.** /inquiry stays invisible to anyone who starts at /MVL. The architectural framing (configuration vs runner) doesn't surface in either spec.

**Verdict.** F.1 + F.2 together are the recommended default — together they cost ~8 lines across 3 files. F.3 is acceptable if the user views the cleanup as cosmetic; F.1 alone is acceptable if protocols/desc.md is being heavily restructured separately.

---

## PIECE G — Whole-file integration check (assembly)

**Decision:** what does the cleaned-up `commands/inquiry.md` look like after applying recommended pieces (A.1 + B.1 + C.1 + D.1 + E.1 + F.1 + F.2)? Does it cohere?

### Projected file structure (post-cleanup)

```
commands/inquiry.md (estimated ~210-225 lines, down from 312)

Frontmatter (lines 1-2)
  name + description

Top-of-file paragraph (lines 4-8)
  /inquiry's role: configuration + state management + wayfinding-trigger
  Explicit "does NOT run disciplines"

## Additional Input/Instructions (lines 10-12)
  $ARGUMENTS

## Instructions

### If NEW (lines 18-96)
  CONFIGURE — variable-pipeline classification
  Problem-type table → Pipeline selection
  Folder + _branch.md + _state.md creation
  Present CONFIGURE result
  [unchanged]

### If RESUME (lines 100-149)
  State + telemetry routing
  Per-discipline thresholds + PROCEED/FLAG/RE-RUN logic
  [unchanged]

### Determine next action (lines 151-172)
  Route based on what's complete
  [unchanged — this is the per-step routing logic]

### If ALL pipeline steps complete → wayfinding trigger (replaces lines 173-216 with B.1)
  ~10 lines: trigger /wayfinding, listing six moves inline; full taxonomy in /wayfinding.md
  ~5 lines: post-wayfinding _state.md updates

## SYNTHESIZE — Artifact Construction (after CONCLUDE)
  Replaces lines 252-285 with C.1 wording (~30 lines)

## Rules
  E.1 trim: 8 → 6 rules (removes _state.md SoT and discipline-folder duplicates)

(NO Cross-Session Resume section — superseded by /MVL)
(NO SIC-cycle example — superseded by /MVL)
(NO loop pattern diagram — superseded by /MVL)
```

### Coherence check

**Mechanism applied: Assembly check** (combine all pieces and ask: does the result hang together?)

The post-cleanup inquiry.md tells one story:

> /inquiry is the variable-pipeline configurator and inquiry-state manager. Its primary role is CONFIGURE (problem-classification → pipeline-selection). Once CONFIGURE has set the pipeline, the user runs disciplines manually via their own commands; /inquiry tells them which discipline to run next via the RESUME logic, and validates the previous discipline's output via telemetry routing. When all pipeline steps for an iteration are complete, /inquiry triggers /wayfinding to select the next iteration move. When TERMINATE fires (and a project artifact is needed), the SYNTHESIZE step constructs that artifact from the CONCLUDE-produced finding.

This is a coherent role: configuration + state-management + wayfinding-trigger + post-TERMINATE artifact-construction-trigger. The duplicative content (move taxonomy, SIC-cycle example, loop pattern, cross-session-resume) was noise relative to this role.

The trimmed file has a clean section flow:
1. Description (what /inquiry is)
2. CONFIGURE (NEW path)
3. RESUME with telemetry-routing (RESUME path)
4. Wayfinding-trigger (iteration-complete path)
5. SYNTHESIZE (post-TERMINATE artifact path)
6. Rules (cross-cutting constraints)

**No internal contradictions** with the cleaned content. The wayfinding-trigger section explicitly delegates to /wayfinding for the move taxonomy; SYNTHESIZE explicitly delegates the inquiry-verdict-compilation to CONCLUDE; Rules align with the role.

### Failure-mode check on the assembly

- **Premature optimization?** No — the cleanup is justified by sensemaking's per-section verdict. Each removal has a specific reason.
- **Lost content?** No — every removed section has a canonical home identified (wayfinding → /wayfinding; loop pattern → /MVL; cross-session resume → /MVL; SYNTHESIZE → rewritten in-place).
- **Internal inconsistency?** No — the cleaned file's role is coherent. CONFIGURE + RESUME + wayfinding-trigger + SYNTHESIZE-trigger is one story.
- **Discoverability loss?** Mitigated by F.1 (cross-reference from /MVL) and F.2 (cross-reference from protocols/desc.md). /inquiry is findable from both /MVL (the runner that doesn't do CONFIGURE) and the protocols dimension (the architectural map).

### Estimated edit cost

| Step | Files | Lines |
|---|---|---|
| A.1: Remove duplicative sections | inquiry.md | -80 |
| B.1: Wayfinding-trigger replacement | inquiry.md | +10 |
| C.1: SYNTHESIZE rewrite | inquiry.md | +30 / -33 = -3 |
| D.1: /navigation cross-reference | navigation.md | +8 |
| D.2 (if applied): /wayfinding ownership note | wayfinding/SKILL.md | +3 |
| E.1: Rules trim | inquiry.md | -10 |
| F.1: /MVL + /MVL+ cross-references | MVL.md, MVL+.md | +6 |
| F.2: protocols/desc.md cross-reference | protocols/desc.md | +2 |
| **Total inquiry.md** | | **312 → ~232 lines** |
| **Total project edits** | | **~25 lines added across 4 other files** |

Time estimate: 30-45 minutes of focused editing.

---

## TESTING (Innovation outputs subjected to scrutiny)

### Novelty test

Is the proposed cleanup genuinely new? It directly applies sensemaking's verdict and synthesize_vs_finding_split's Configuration β — both of which already established the design. The novelty is in **integration** — combining two pending punch-lists (this audit's cleanup + the prior synthesize_vs_finding_split's Step 1) into one coherent editing pass. That integration was not previously specified.

### Scrutiny survival

**Strongest objection:** "You're adding cross-references in 4 different files (inquiry.md, navigation.md, MVL.md, MVL+.md, protocols/desc.md). That's a lot of touching points; if any go stale, the architectural framing breaks."

**Survival:** The cross-references are NOT load-bearing — each spec stands alone. The cross-references are navigation aids; if any drift, the canonical content remains correct. The drift cost is low (slightly degraded discoverability), not high (broken architecture). And the cross-references are minimal (1-3 lines each); maintenance burden is small.

### Fertility

The cleanup unblocks two follow-on threads:
1. Apply Configuration β Step 5 (`protocols_relevance_check` coordination) — protocols/desc.md gets a unified update.
2. Observe whether CONFIGURE actually gets invoked in practice over the next 5-10 inquiries. If not, that becomes the trigger for a more aggressive deprecation inquiry on /inquiry.

### Actionability

Yes. Each piece has concrete proposed wording. The user can apply A.1 + B.1 + C.1 + D.1 + E.1 + F.1 + F.2 in a single editing session.

### Mechanism independence

Multiple mechanisms converge on the same recommended path:
- **Constraint Manipulation** (preserve discoverability while removing duplication) → A.1 + cross-references.
- **Absence Recognition** (the SYNTHESIZE wording from synthesize_vs_finding_split was decided but not applied; cross-references missing in /MVL and protocols/desc.md) → C.1 + F.1 + F.2.
- **Combination** (combine inquiry.md cleanup with synthesize_vs_finding_split Step 1) → assembly that does both in one pass.
- **Domain Transfer** (apply "see also" pattern from technical documentation) → B.1's wording style.

Multi-mechanism convergence on this path is strong signal — high confidence in the recommended configuration.

---

## Mechanism Coverage (Telemetry)

* **Generators applied:** 4 / 4 (Combination — Pieces A/F/G; Absence Recognition — Piece C; Domain Transfer — Piece B; Extrapolation — Piece D, in considering when/whether DIAGNOSE-uncovered becomes a real problem).
* **Framers applied:** 3 / 3 (Lens Shifting — Pieces D/E; Constraint Manipulation — Pieces A/B/E/F; Inversion — contrarian variants in every piece).
* **Convergence:** YES — multiple mechanisms converge on the recommended Configuration (A.1 + B.1 + C.1 + D.1 + E.1 + F.1 + F.2). Specifically, Constraint Manipulation and Combination both produced this path independently.
* **Survivors tested:** 7 / 7 — every piece has its recommended variant tested for actionability and scrutiny survival; contrarian variants tested for what they would cost.
* **Failure modes observed:**
  - Premature evaluation? No — variants explored before convergence.
  - Single-mechanism trap? No — minimum 2 mechanisms per piece.
  - Early frame lock? No — contrarian variants explored for every piece.
  - Innovation without grounding? No — every proposal has concrete proposed wording, edit-cost estimate, and trade-off analysis.
  - Mechanism exhaustion? No — generators and framers all produced output.
  - Survival bias? Tested — contrarian (A.3 delete entirely; D.3 extend /navigation; E.3 delete Rules; F.3 do nothing) variants given fair shake; rejected on specific structural grounds rather than comfort.
* **Overall: PROCEED** — sufficient coverage + convergence on a recommended Configuration + every survivor tested + no failure modes detected.

---

## Recommended Configuration (summary)

**Configuration A.1 + B.1 + C.1 + D.1 + E.1 + F.1 + F.2** — the integrated cleanup pass.

| Piece | Variant | Files touched | Net edit |
|---|---|---|---|
| A | A.1 (clean cuts) | `commands/inquiry.md` | -80 lines |
| B | B.1 (one-liner cross-ref + 6-move list inline) | `commands/inquiry.md` | +10 lines |
| C | C.1 (Configuration β Step 1 with CONCLUDE rename) | `commands/inquiry.md` | -3 lines (30 replace 33) |
| D | D.1 (/navigation cross-reference paragraph) | `commands/navigation.md` | +8 lines |
| E | E.1 (surgical Rules trim 8→6) | `commands/inquiry.md` | -10 lines |
| F.1 | F.1 (light cross-ref from /MVL/MVL+) | `commands/MVL.md`, `commands/MVL+.md` | +6 lines |
| F.2 | F.2 (CONFIGURE entry in protocols/desc.md) | `thinking_disciplines/protocols/desc.md` | +2 lines |

**Total:** inquiry.md drops from 312 to ~232 lines; ~16 lines added across 4 other files. ~30-45 min of focused editing.

**Defensible alternatives the user might choose instead:**
- Pair B.1 with C.2 instead of C.1 if stronger autonomy-ladder framing is wanted in inquiry.md (mild duplication with `enes/desc.md`).
- Skip F.1 and F.2 if the user prefers minimal touching of other files (acceptable trade — discoverability degraded slightly).
- Skip D.1 (no /navigation cross-ref) if the user views the asymmetry as adequately documented in this audit's sensemaking. Acceptable but DIAGNOSE-uncovered remains invisible at /navigation read-time.

**Killed configurations:**
- A.3 (delete inquiry.md entirely) — rejected on premature-deletion grounds. Future-load-bearing CONFIGURE deserves another 5-10 inquiries of empirical observation before deletion.
- B.3 (no inline move list) — rejected on weak callsite-pedagogy grounds.
- D.3 (extend /navigation with 16th type) — rejected on out-of-scope grounds. Would require its own SIC pass.
- E.3 (delete Rules section) — rejected on scannability-loss grounds.
