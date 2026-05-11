# Innovation: wayfinding_navigation_unification_check

## User Input

`devdocs/inquiries/wayfinding_navigation_unification_check/_branch.md`

Read _branch.md, exploration.md, sensemaking.md, decomposition.md. Decomposition produced 9 pieces with explicit interfaces and dependency ordering. Apply mechanisms × variations to each piece (generic / focused / contrarian); develop concrete designs with proposed wording; assembly check.

---

## Direction

**Context.** Project consolidation phase. The user is challenging the prior audit; the canonical move is to honor /navigation's shipped REPLACES claim. Multi-head architecture is the end-goal trajectory.

**Valuation.** Concrete proposed wording the user can paste into files. Don't generate options without bridging to actual edits.

**Motivation.** Deliver a punch list completing the migration in one editing session (~1.5-2h). Make the /navigation extension surgical; make the deletion clean; reconcile with the prior audit without rework.

**Seed.** Nine pieces with enumerated variants. Each piece needs (a) mechanism-driven exploration of the candidate space, (b) convergence on a recommended variant, (c) concrete proposed wording where applicable.

---

## PIECE 1 — Migration scope

### Variants

- **Generic (A.2 essential):** DIAGNOSE-as-16th-type + reachability/gates + REVISIT extension. ~50-100 lines added to /navigation. Pragmatic minimum.
- **Focused (A.1 comprehensive):** A.2 + threshold self-adjustment + layer-priority tiebreaker + failure mode absorption. ~150-250 lines added.
- **Contrarian (incremental):** A.2 now, A.1 features added later when revival gates fire.

### Mechanisms applied

**Lens shifting.** Under "ship-fast" lens, A.2 wins. Under "long-term clean architecture" lens, A.1 wins. Under "uncertainty about which features ever fire in practice" lens, incremental wins. The lens that matters most: "is the project ready to commit to A.1's substance now, or is empirical data needed first?" Answer: empirical data is needed (sensemaking explicitly flagged the question of whether /wayfinding's features ever fired).

**Inversion.** Invert "more migration is better" → "minimum migration with explicit revival gates produces the same architectural endpoint at lower current cost." A.2 + DEFERRED-with-gates IS effectively incremental, but with the recommendation framed as A.2 (so the user has clear MUST steps now).

### Convergence

**A.2 essential migration with A.1 features as DEFERRED-with-explicit-gates.** This is generic + contrarian fused: ship A.2 now (the user has a clear punch list to apply); A.1 features are explicitly deferred with revival triggers (autonomy-ladder Level 2 maturity, observable failure patterns, /navigation complexity threshold).

**Recommended:** A.2 with DEFERRED gates as in Piece 9.

---

## PIECE 2 — /navigation.md edits package

### 2a — DIAGNOSE row

**Variants:** Generic (auto-derivable from sensemaking-stall signals) / Focused (human-judgment like REFRAME) / Contrarian (sub-mode under REFRAME).

**Mechanisms applied.**

*Constraint manipulation.* Constraint = "must fit the Process category cleanly." DIAGNOSE acts on HOW the cycle ran (the cycle was broken — process-quality recognition). Fits Process. Auto-derivable from process telemetry symptoms.

*Domain transfer.* Medical diagnosis works on observable symptoms, not on the patient saying "something's wrong." Symptoms: oscillation (chronic recurrence), velocity negative for 2+ iterations (worsening trend), layer-conflict (contradictory evidence between past and present). Each is observable in the accumulator. Auto-derivation pattern from medicine.

*Inversion.* "DIAGNOSE is meta-recognition, can't auto-derive" → "DIAGNOSE is just the named action that follows specific observable signals." The signals ARE auto-derivable; the action is "drop back to sensemaking on the gap." Auto-derivable wins.

**Convergence.** Generic (auto-derivable). DIAGNOSE joins the auto-derivable list with sensemaking-stall signals as the trigger.

**Proposed wording (add to /navigation.md Process-Directed table at line ~227):**

```markdown
| **DIAGNOSE** | Drop back to sensemaking on the gap — the inquiry process itself is broken (not the candidates) | Sensemaking-stall signals: oscillation across iterations (refinements fix X but break Y), velocity negative for 2+ iterations, OR layer-conflict (memory of past kill conditions contradicts current convergence signals) |
```

And update the Auto-derivable list at line ~452:

```markdown
| DIAGNOSE | Sensemaking-stall signals (oscillation / velocity negative 2+ iterations / layer-conflict) |
```

### 2b — Reachability/gates feature

**Variants:** Generic (sub-bullet in Step 1) / Focused (new Step 0) / Contrarian (extend UNBLOCK as Context-Directed type).

**Mechanisms applied.**

*Lens shifting.* Under "minimum-edit" lens, generic wins. Under "make reachability primary" lens, focused (Step 0) wins. Under "fold into existing types" lens, contrarian wins but couples reachability with UNBLOCK in a way that doesn't cleanly separate "knowing about gates" from "acting on a known blocker."

*Absence recognition.* What's MISSING in /navigation's current Read-and-assess step? An explicit reachability check. Not a new step — a sub-bullet that adds the topology dimension to the existing read.

**Convergence.** Generic (sub-bullet in Step 1). Doesn't require restructuring the spec; adds the substance where it naturally fits.

**Proposed wording (add to Step 1 — Read and assess, after the existing bullets at line ~22):**

```markdown
   **Reachability check (added to Step 1 — Read and assess):** Before assigning types, identify which directions are accessible from current state and which are gated behind prerequisites. A gate has three parts: blocked region (what becomes reachable when the gate opens), condition (what must be true), current state (open or closed). For each detected gate: log it. If a gate blocks an otherwise-promising direction, the type assignment in Step 2 must include the gate condition as part of the direction's WHY (e.g., "DEEPEN survivor X — gated on UNBLOCK condition Y first").
```

### 2c — REVISIT extension

**Variants:** Generic (sub-bullet) / Focused (sub-table within REVISIT row) / Contrarian (three separate types — RESURRECT/INVALIDATE/REVERT — replacing single REVISIT, → 18 types).

**Mechanisms applied.**

*Constraint manipulation.* Constraint = "preserve type count and category partition." Sub-table preserves both (16 types, REVISIT stays in Context). Three separate types breaks (would be 18 types and the partition's clarity erodes).

*Combination.* Combine REVISIT (the type) with the three sub-actions (modes within the type) as one structured row. The user already has the structure in /wayfinding's current spec; transplanting it as a sub-table is mechanical.

**Convergence.** Focused (sub-table within REVISIT). Preserves the 16-type count while exposing the three modes that make REVISIT operationally rich.

**Proposed wording (add to Context-Directed table around line ~234):**

```markdown
| **REVISIT** | Re-evaluate a prior finding under new conditions | New info changes past conditions |
```

Followed by, immediately below the table:

```markdown
**REVISIT modes (sub-actions):** REVISIT operates in three directions:

| Mode | What it does | When triggered |
|---|---|---|
| **RESURRECT** | A killed idea becomes possibly viable | New info contradicts the kill condition |
| **INVALIDATE** | A surviving idea becomes possibly dead | New info undermines the survival condition |
| **REVERT** | A refined idea returns to earlier version | New info shows refinement degraded it |

Threshold for triggering REVISIT self-adjusts based on loop state: low in early iterations (sparse coverage, even moderate relevance is worth revisiting), high near convergence (don't destabilize a converging search), minimum when no SURVIVE candidates exist (any possible unlock worth investigating).
```

### 2d — A.1 comprehensive features (only if A.1 selected)

Per Piece 1's recommendation (A.2 with DEFERRED gates), 2d is DEFERRED. If user later selects A.1, the additions land at:
- **Layer-priority tiebreaker rule:** appended as a paragraph after Step 5 (Check Excluded), specifying priority when multiple types apply across categories.
- **/wayfinding failure modes absorption:** add gate blindness, layer conflict paralysis, missed RECONSIDER to /navigation's failure modes section.

These wordings are noted but not developed under A.2.

### 2e — Internal consistency follow-through

**Mechanisms applied.**

*Constraint manipulation.* Constraint = "spec must be internally consistent post-edit." All references to "15 types" must update to "16"; auto-derivable list must include DIAGNOSE; the explicit "REPLACES wayfinding" line must reflect the post-deletion state.

**Concrete edits.**

- Replace `15-type taxonomy` with `16-type taxonomy` across /navigation.md (lines: ~24, 102, 127, 138, 196, 256, 404, 446 — every occurrence).
- Update auto-derivable count in line ~472 (currently "11 auto-derivable + 4 human-judgment"; becomes "12 auto-derivable + 4 human-judgment").
- Update the "Navigation and Wayfinding" section (lines 439-441). Replace with:

```markdown
### Navigation as the iteration-boundary cognitive discipline

Navigation is the canonical iteration-boundary cognitive discipline. It produces the FULL space of typed next-directions; selection (when single-head, picking one; when multi-head, dispatching heads to multiple directions) consumes the enumerated map. The 16-type taxonomy with confidence levels and per-item guidelines is the primary output. Earlier project iterations had a separate `/wayfinding` discipline focused on single-direction selection; that substance has been absorbed into /navigation (DIAGNOSE-as-Process-type, reachability/gates check in Step 1, REVISIT sub-actions, threshold-aware REVISIT confidence). The selection-as-pick-one framing is a single-head artifact and is not preserved as a separate discipline.
```

---

## PIECE 3 — /wayfinding.md deletion + old_meta-search.md decommission

### Variants

- **Generic:** Delete /wayfinding.md; keep old_meta-search.md with stronger deprecation note.
- **Focused:** Delete BOTH (old_meta-search.md is doubly orphaned).
- **Contrarian:** Keep /wayfinding.md as a "tombstone" file with single-line redirect to /navigation.

### Mechanisms applied

*Inversion.* "Files preserve history" → "git history preserves files; in-tree files are the active state." If a file isn't load-bearing in the active state, it shouldn't exist.

*Constraint manipulation.* Constraint = "no orphaned files in active spec areas." old_meta-search.md is already labeled "this is now edited and called wayfinding"; if /wayfinding goes, old_meta-search is doubly historical with no active reference.

### Convergence

**Focused — delete BOTH.** Git history preserves both. The two-file deletion is cleaner than a one-file deletion + a permanently-deprecated file.

### Proposed actions

```bash
rm /Users/ns/Desktop/projects/native/commands/wayfinding.md
rm /Users/ns/Desktop/projects/native/thinking_disciplines/old_meta-search.md
```

Verify no broken cross-references via:

```bash
grep -rn "wayfinding" /Users/ns/Desktop/projects/native/{commands,thinking_disciplines,homegrown,enes} 2>/dev/null | grep -v "git\|docarchive\|inquiries"
```

If grep finds remaining references, update them per Piece 4 / Piece 6 / Piece 2's edits.

---

## PIECE 4 — /inquiry.md B.1 wording update

### Variants

- **Generic:** change cross-reference target /wayfinding → /navigation; reframe inline list as /navigation types.
- **Focused:** full rewrite — show /navigation's 16-type taxonomy at a glance.
- **Contrarian:** drop inline list entirely.

### Mechanisms applied

*Combination.* Combine the prior audit's B.1 structure (one-line cross-reference + inline list) with the updated content (target + vocabulary). Preserves the prior audit's pedagogical pattern; updates the references.

*Domain transfer.* Doc-pattern from "see also" sections in technical writing — list what's available + canonical reference. The inline list is callsite pedagogy; the target reference is the canonical home.

### Convergence

**Focused** — preserve the one-line cross-reference + inline list pattern, but show the iteration-boundary-relevant /navigation types organized by category. This serves a reader of /inquiry.md who wants to know what /navigation will produce without having to navigate there.

### Proposed wording (replaces lines 173-216 of current inquiry.md per the prior audit's punch list)

```markdown
   **If ALL pipeline steps for this iteration are complete →**

   Run `/navigation` on the inquiry folder. /navigation enumerates ALL applicable next-directions from a 16-type taxonomy across three categories (Content / Process / Context). For iteration-boundary decisions, the most-relevant types are typically:

   - **Content-Directed** (acting on WHAT the cycle produced): DEEPEN, REFINE, PURSUE SEED, INVESTIGATE FRONTIER, DEVELOP, TERMINATE.
   - **Process-Directed** (acting on HOW the cycle ran): RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, **DIAGNOSE** (drop back to sensemaking — process broken).
   - **Context-Directed** (acting on info OUTSIDE this cycle): REVISIT (with sub-actions RESURRECT / INVALIDATE / REVERT), UNBLOCK, MERGE, TEST, CONSOLIDATE.

   See `commands/navigation.md` for the full taxonomy with per-direction reasoning, confidence assessment, and reachability/gates topology.

   After /navigation produces the map and a direction is selected (single-head: pick one; multi-head: dispatch heads to multiple), update `_state.md`:
   - Increment iteration
   - Reset Pipeline Progress checkboxes for the new iteration
   - Update Next Command based on the selected direction(s)
   - Append to History (what happened this iteration, what direction(s) selected)
   - Update Kill Record / Survival Record from critique verdicts
```

**Net edits.** Replaces ~44 lines (173-216) with ~22 lines. Net: -22 lines beyond the prior audit's B.1 (which already saved ~34 lines from the original).

---

## PIECE 5 — Prior audit's other Steps (preserved)

### Variants

- **Generic:** apply as-is.
- **Focused:** apply with light coordination notes.
- **Contrarian:** re-evaluate each step.

### Mechanisms applied

*Constraint manipulation.* Constraint = "no modifications needed if the steps are correct." The prior audit's other Steps (A.1, C.1, E.1, F.1, F.2) don't touch /wayfinding/navigation; they're orthogonal.

### Convergence

**Generic — apply as-is.** Each step:

- **A.1** (clean cuts in inquiry.md — remove duplicative content): apply per prior audit. Since Piece 4 above replaces the wayfinding-table cross-reference content, A.1's "remove SIC-cycle example" / "remove loop pattern" / "remove Cross-Session Resume" still applies.
- **C.1** (SYNTHESIZE rewrite with CONCLUDE rename): apply per prior audit unchanged.
- **E.1** (Rules trim 8→6): apply per prior audit unchanged.
- **F.1** (cross-ref from /MVL/MVL+ to /inquiry for variable-pipeline): apply per prior audit unchanged.
- **F.2** (cross-ref in protocols/desc.md naming /inquiry as CONFIGURE implementation site): apply per prior audit unchanged.

No proposed wording changes.

---

## PIECE 6 — D.1 reversal

### Variants

- **Generic:** omit the cross-reference paragraph entirely.
- **Focused:** replace with deletion-history note in /navigation.
- **Contrarian:** keep D.1 reframed.

### Mechanisms applied

*Lens shifting.* Under "minimum spec contention" lens, omit. Under "preserve historical context" lens, deletion-history note. Under "wayfinding-substance-was-absorbed" lens, the deletion-history note is ALREADY in Piece 2's 2e wording (the "Navigation as the iteration-boundary cognitive discipline" paragraph mentions /wayfinding's substance was absorbed).

### Convergence

**Generic — omit the cross-reference paragraph entirely.** Piece 2's 2e wording (the Navigation-as-iteration-boundary-discipline section) already covers the deletion-history note. No separate paragraph needed.

### Proposed action

Don't add the D.1 paragraph proposed in the prior audit. The deletion-history is captured in Piece 2's section update.

---

## PIECE 7 — Artifact relationship — this finding vs prior audit

### Variants

- **Generic:** REFINES (most punch list preserved).
- **Focused:** BOTH refines AND corrects (the wayfinding-vs-navigation verdict was specifically corrected).
- **Contrarian:** SUPERSEDES (this is the new operative one).

### Mechanisms applied

*Combination.* Combine REFINES + CORRECTS. The prior audit got most things right (the inquiry.md cleanup, the synthesize_vs_finding_split coordination, the Rules trim) but specific verdict reversed (the wayfinding-vs-navigation conclusion). The metadata can express both relationships.

*Absence recognition.* What's MISSING from a single-relationship label? Specificity about WHAT is refined vs WHAT is corrected. Both labels together capture the structural relationship more precisely than either alone.

### Convergence

**Focused** — use BOTH `refines` (signals targeted refinement of multiple aspects) AND `corrects` (signals specific error fix on the wayfinding-vs-navigation question). The frontmatter accommodates both.

### Proposed frontmatter for this finding

```yaml
---
status: active
refines: devdocs/inquiries/inquiry_md_remaining_value_audit/finding.md
corrects: devdocs/inquiries/inquiry_md_remaining_value_audit/finding.md
---
```

The `refines` and `corrects` pointing to the same file is intentional — they describe different relationships to the same artifact.

### Optional: prior audit finding edit

Add a `refined_by:` field to `inquiry_md_remaining_value_audit/finding.md`'s frontmatter:

```yaml
---
status: refined
refined_by: devdocs/inquiries/wayfinding_navigation_unification_check/finding.md
---
```

This makes the linkage bidirectional. ~2 line edit. Recommended as COULD (not MUST) — frontmatter unidirectional linkage from this finding is sufficient.

---

## PIECE 8 — Stalled-inquiry marking

### Variants

- **Generic:** mark `wayfinding_fundamental_fix` and `sic_as_wayfinder` superseded; format = frontmatter `superseded_by:` field.
- **Focused:** mark all stalled inquiries that touched wayfinding/navigation; format = both frontmatter + History note.
- **Contrarian:** don't mark anything.

### Mechanisms applied

*Combination.* Combine frontmatter (status field) + History note (event log) for redundant reachability — readers querying either find the supersession.

*Absence recognition.* What's missing in stalled inquiries? An explicit pointer from the stalled inquiry to its successor. Without it, future agents see "ACTIVE" status and may try to resume.

### Convergence

**Focused — mark the two definitively-superseded** (`wayfinding_fundamental_fix`, `sic_as_wayfinder`) using BOTH frontmatter status update + `_state.md` History note. Leave the other three (`navigation_placement`, `sic_navigation_integration`, `search_equals_navigation_plus_x`, `post_completion_navigation`) alone — their conclusions are aligned with this finding's verdict, not contradicted.

### Proposed wording for `wayfinding_fundamental_fix/_state.md`

Update the Status section:

```markdown
## Status
SUPERSEDED

## Superseded by
devdocs/inquiries/wayfinding_navigation_unification_check/finding.md
```

Append to History:

```markdown
- 2026-04-26: SUPERSEDED. The diagnosed fundamental fix to /wayfinding (expand layers with goal awareness, impact assessment, path enumeration) is moot post-/wayfinding-deletion. /wayfinding's load-bearing substance has been migrated into /navigation; /wayfinding.md has been deleted. See wayfinding_navigation_unification_check/finding.md for the verdict.
```

### Proposed wording for `sic_as_wayfinder/_state.md`

Update Status:

```markdown
## Status
SUPERSEDED

## Superseded by
devdocs/inquiries/wayfinding_navigation_unification_check/finding.md
```

Append to History:

```markdown
- 2026-04-26: SUPERSEDED. The premise that "wayfinding is structurally distinct from S/I/C" is null post-/wayfinding-deletion. /wayfinding has been absorbed into /navigation. The SIC loop connects to /navigation directly at iteration-boundary; no separate wayfinding-as-distinct-shape applies. See wayfinding_navigation_unification_check/finding.md for the verdict.
```

---

## PIECE 9 — MUST/COULD/DEFERRED partition

### Variants

- **Generic:** MUST = essentials only; COULD = comprehensive features; DEFERRED = empirical observation gates.
- **Focused:** MUST = full A.2 + B.1 update + D.1 reversal; COULD = A.1 features + stalled-inquiry marking; DEFERRED = re-examination after N inquiries.
- **Contrarian:** just the migration is MUST (Pieces 1, 2, 3); everything else is COULD.

### Mechanisms applied

*Constraint manipulation.* Constraint = "verdict realized in one editing session." MUST = essentials sufficient for verdict; COULD = enhancements; DEFERRED = empirical-data-dependent.

*Lens shifting.* Under "minimum to realize verdict" lens, MUST is small. Under "comprehensive consolidation" lens, MUST is bigger. The right MUST is the one where: (a) skipping any item would leave the verdict unrealized in some operational sense, OR (b) leave a contradictory state in the project.

### Convergence

**Generic with explicit gates.** MUST contains the migration core + reconciliation that prevents contradictions; COULD contains nice-to-haves; DEFERRED contains empirical-data-dependent decisions with observable triggers.

### Concrete partition

**MUST** (verdict not realized without these):
- Apply Piece 1's choice (A.2 with DEFERRED for A.1).
- Apply Piece 2's edits to /navigation.md (DIAGNOSE-as-16th-type + reachability/gates + REVISIT extension + consistency updates + Navigation-as-iteration-boundary-discipline section update).
- Apply Piece 3's deletions (/wayfinding.md and old_meta-search.md).
- Apply Piece 4's B.1 wording in /inquiry.md (focused variant).
- Apply Piece 5's other prior audit Steps (A.1, C.1, E.1, F.1, F.2 as-is).
- Apply Piece 6's D.1 reversal (omit the paragraph).
- Apply Piece 7's frontmatter (REFINES + CORRECTS).
- Apply Piece 8's stalled-inquiry marking for the two definitive inquiries (`wayfinding_fundamental_fix`, `sic_as_wayfinder`).

**COULD** (enhances; not blocking):
- Apply A.1 comprehensive features in /navigation.md (threshold self-adjustment beyond REVISIT, layer-priority tiebreaker, /wayfinding failure modes absorption). Gated on observable failure patterns.
- Edit prior audit's finding to add `refined_by:` frontmatter for bidirectional linkage. ~2 lines.

**DEFERRED** (empirical-data-dependent; revisit when gate fires):
- **Empirical observation of which absorbed features fire in /navigation post-migration.** Gate: after 5-10 inquiries that invoke /navigation. Observable: count invocations of DIAGNOSE, RESURRECT/INVALIDATE/REVERT, reachability/gates checks. If 0 across 10 inquiries, those features are deletion candidates; if 1+, they're load-bearing.
- **A.1 comprehensive feature application.** Gate: when autonomy-ladder Level 2 operations begin (system selecting types autonomously) OR when manual REVISIT threshold tuning produces noticeable false-resurrection or missed-resurrection patterns.
- **/navigation complexity reassessment.** Gate: when /navigation grows beyond ~700 lines OR when readers report navigability issues.

---

## Assembly Check

The recommended Configuration: **Piece 1 = A.2** + **Piece 2 = generic 2a + generic 2b + focused 2c (sub-table) + focused 2e (consistency updates)** + **Piece 3 = focused (delete both)** + **Piece 4 = focused (full rewrite with /navigation 16-type taxonomy)** + **Piece 5 = generic (apply as-is)** + **Piece 6 = generic (omit paragraph)** + **Piece 7 = focused (REFINES + CORRECTS both)** + **Piece 8 = focused (mark two definitive inquiries with both frontmatter + History)** + **Piece 9 = generic with observable gates**.

### Does the assembly produce emergent value?

YES:
- The Pieces form a coherent migration plan: Piece 1 decision drives Piece 2 edits; Piece 2 enables Piece 3 deletion; Piece 3 prompts Piece 4 cross-reference update; Piece 4-5-6 coordinate with prior audit's preserved Steps; Piece 7 expresses the artifact relationship; Piece 8 cleans up stalled inquiries; Piece 9 partitions into actionable priorities.
- The 16-type taxonomy with DIAGNOSE absorbs /wayfinding's most-distinct move while preserving /navigation's structure (Content/Process/Context partition holds).
- The REVISIT sub-table absorbs /wayfinding's most-distinct memory-layer feature while keeping the type count at 16 (not inflating to 18).
- A.2 + DEFERRED-with-observable-gates is the right balance: ship essentials now (the user has a clean 1.5-2h punch list); let empirical observation inform A.1 comprehensive features.
- The frontmatter pair (REFINES + CORRECTS) precisely captures this finding's relationship to the prior audit.

### Total edit estimate

| File | Action | Net lines |
|---|---|---|
| `commands/navigation.md` | Add DIAGNOSE row + reachability paragraph + REVISIT sub-table + consistency updates + Navigation-as-iteration-boundary-discipline section update | +50-80 (491 → ~550) |
| `commands/wayfinding.md` | Delete | -381 |
| `thinking_disciplines/old_meta-search.md` | Delete | -431 |
| `commands/inquiry.md` | Apply prior audit's full punch list (A.1, B.1 focused variant, C.1, E.1) + the variant changes (B.1 target, D.1 omitted) | -80 to -100 (per prior audit, with adjustments) |
| `commands/MVL.md` + `commands/MVL+.md` | F.1 cross-reference (per prior audit) | +6 |
| `thinking_disciplines/protocols/desc.md` | F.2 cross-reference + (separately) Configuration β from synthesize_vs_finding_split | +2 to +12 |
| `devdocs/inquiries/wayfinding_fundamental_fix/_state.md` | Status update + History entry | +5-10 |
| `devdocs/inquiries/sic_as_wayfinder/_state.md` | Status update + History entry | +5-10 |
| `devdocs/inquiries/inquiry_md_remaining_value_audit/finding.md` | (COULD) `refined_by:` frontmatter | +2 |

**Net project change:** ~-750 lines (mostly from deleting wayfinding.md + old_meta-search.md). Specs become tighter; one canonical iteration-boundary discipline (/navigation); architectural debt resolved.

**Time estimate:** 1.5-2 hours focused editing.

---

## Testing

### Novelty test

Genuinely new? It builds on prior audit's punch list with specific variant changes (B.1 target update, D.1 reversal) AND adds the migration package (Piece 2's /navigation extensions + Piece 3's deletion). Novel in: the integration of architectural verdicts from 4 inquiries (prior audit + this + 3 prior unfinished) into one editing session.

### Scrutiny survival

**Strongest objection:** "You're losing /wayfinding's substance — the Three-Layer Awareness Model, the threshold self-adjustment, the layer-priority resolution."

**Survival:** The load-bearing substance migrates (DIAGNOSE-as-16th-type covers the most-asymmetric move; reachability/gates absorbs the topology awareness; REVISIT sub-actions absorb the memory-layer's RECONSIDER structure). The framing ("pick ONE move at iteration boundary using Three-Layer Awareness") is single-head-only and superseded by multi-head dispatch. What's deferred (threshold self-adjustment integrated into REVISIT, layer-priority tiebreaker as standalone rule, failure modes absorption) is empirical-data-dependent and gated.

### Fertility

Opens cleaner architectural endpoint for multi-head autonomy. /navigation becomes the single iteration-boundary discipline with 16 types + reachability + REVISIT-with-modes; future autonomy work has one spec to extend rather than two divergent specs to coordinate.

### Actionability

All proposed wording is concrete. User applies in one ~1.5-2h editing session: edit /navigation.md (Piece 2), delete two files (Piece 3), update /inquiry.md per Piece 4 + Piece 5 + Piece 6, write this finding with Piece 7 frontmatter, update two stalled-inquiry _state.md files (Piece 8). Punch list maps directly to file operations.

### Mechanism independence

Convergence on this Configuration emerged from multiple mechanisms:
- **Constraint manipulation** (preserve type count + category partition) → Piece 2c sub-table (not three separate types).
- **Combination** (REFINES + CORRECTS) → Piece 7 dual frontmatter.
- **Inversion** (delete-not-tombstone) → Piece 3 focused (delete both).
- **Absence recognition** (missing reachability check; missing pointer from stalled inquiries) → Piece 2b sub-bullet; Piece 8 dual marking.
- **Domain transfer** (medical-symptom-based diagnosis) → Piece 2a auto-derivable DIAGNOSE.
- **Lens shifting** (multi-head as primary lens) → Piece 1 A.2-with-gates; Piece 4 multi-head-aware wording.

Multi-mechanism convergence is strong signal — high confidence in the recommended Configuration.

---

## Mechanism Coverage (Telemetry)

* **Generators applied:** 4 / 4 (Combination — Pieces 4, 7; Absence Recognition — Pieces 2b, 8; Domain Transfer — Piece 2a; Extrapolation — implicit in Piece 9's empirical gates).
* **Framers applied:** 3 / 3 (Lens Shifting — Pieces 1, 4, 9; Constraint Manipulation — Pieces 2a, 2c, 5; Inversion — Pieces 1, 3).
* **Convergence:** YES — multiple mechanisms converge on the recommended Configuration (A.2 essential migration + focused REVISIT sub-table + focused full B.1 rewrite + focused REFINES+CORRECTS frontmatter + focused two-stalled-inquiry marking).
* **Survivors tested:** 9 / 9. Each piece's recommended variant tested for actionability, scrutiny survival, mechanism independence; contrarian variants tested for what they would cost.
* **Failure modes observed:** None.
  - Premature evaluation? No — variants explored before convergence.
  - Single-mechanism trap? No — minimum 2 mechanisms per piece.
  - Early frame lock? No — contrarian variants explicitly tested for every piece.
  - Innovation without grounding? No — every proposal has concrete proposed wording, edit-cost estimate, file-level mapping.
  - Mechanism exhaustion? No — generators and framers all produced output.
  - Survival bias? Tested — contrarian variants given fair shake; rejected on specific structural grounds (e.g., 2c three-separate-types breaks partition; 3 tombstone leaves ambiguous orphan; 7 SUPERSEDES overstates the relationship; 9 contrarian-MUST too small).
* **Overall: PROCEED** — sufficient coverage + convergence on a recommended Configuration + every survivor tested + no failure modes detected.

---

## Recommended Configuration (summary)

**Piece 1:** A.2 essential migration (with A.1 features as DEFERRED-with-gates per Piece 9).

**Piece 2:** Generic 2a (DIAGNOSE auto-derivable from sensemaking-stall signals) + Generic 2b (reachability sub-bullet in Step 1) + Focused 2c (REVISIT sub-table with three sub-actions and threshold note) + Focused 2e (consistency updates throughout + Navigation-as-iteration-boundary-discipline section replacing the old REPLACES paragraph).

**Piece 3:** Focused (delete /wayfinding.md AND old_meta-search.md).

**Piece 4:** Focused (full B.1 rewrite showing /navigation 16-type taxonomy at a glance with iteration-boundary-relevant types per category).

**Piece 5:** Generic (apply prior audit's other Steps as-is).

**Piece 6:** Generic (omit the D.1 paragraph entirely; Piece 2e covers the post-deletion note).

**Piece 7:** Focused (frontmatter `refines:` + `corrects:` both pointing to prior audit's finding; optional COULD: prior audit gets `refined_by:` for bidirectional).

**Piece 8:** Focused (mark `wayfinding_fundamental_fix` and `sic_as_wayfinder` superseded with both frontmatter status update + History note; leave the other three related inquiries unchanged).

**Piece 9:** Generic with observable gates (MUST = Pieces 1-8 essentials; COULD = A.1 comprehensive features + bidirectional linkage; DEFERRED = empirical observation gates after 5-10 post-migration inquiries).

**Total:** ~1.5-2h editing session. Net ~-750 lines in the project. /navigation.md goes from 491 → ~550 lines. /wayfinding.md and old_meta-search.md deleted.
