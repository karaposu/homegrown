# Critique: wayfinding_navigation_unification_check

## User Input

`devdocs/inquiries/wayfinding_navigation_unification_check/`

Read all files in the folder. Construct evaluation dimensions from the user's goal in `_branch.md` + sensemaking's verdicts. Evaluate per-piece variants on 8 dimensions (structural-correctness, substance-preservation, spec-coherence, edit-cost, discoverability, coordination-cost, reversibility, naming-clarity). Run prosecution + defense + collision on each piece. Apply assembly check. Produce a concrete final punch list with specific actions.

User flagged four scrutiny points: (1) Piece 2c (sub-table vs sub-bullet vs three-separate-types), (2) Piece 4 (full rewrite vs minimal target change), (3) Piece 7 (REFINES+CORRECTS dual frontmatter — precise or confusing?), (4) Piece 9 gates (specific enough per finding template's gate-specificity style rule?).

---

## Phase 0 — Dimension Construction

| Dimension | Weight | What it asks | Source |
|---|---|---|---|
| **Structural correctness** | **CRITICAL** | Does it honor /navigation.md REPLACES + multi-head end-goal + prior audit's preserved structural findings? | Sensemaking SV6 + 4 convergent anchors |
| **Substance preservation** | **CRITICAL** | Does the migration preserve /wayfinding's load-bearing substance for higher-autonomy / multi-head scenarios? | Sensemaking's Ambiguity 2 collapse |
| **Spec coherence** | HIGH | Does post-edit /navigation.md hang together — type partition preserved, internal consistency, no contradictions? | Sensemaking's foundational principle: shipped contradictions cannot persist |
| **Edit cost** | MEDIUM | Bounded editing session for the user? | User goal: concrete punch list, ~1.5-2h |
| **Discoverability** | HIGH | Are migrated features findable post-migration? Is historical context preserved enough? | Sensemaking's strategic perspective |
| **Coordination cost** | HIGH | Composes with prior audit's preserved Steps + synthesize_vs_finding_split's pending Configuration β? | Branch context |
| **Reversibility** | MEDIUM | If a future signal suggests reversing, how hard is rollback? | Risk perspective |
| **Naming clarity** | MEDIUM | CONCLUDE consistent; /navigation as canonical; type names not confusing? | Conversation history (FINDING-COMPILE → CONCLUDE rename) |

**Burden of proof:** stakes are MEDIUM-HIGH (multiple files affected; some hard-to-reverse — file deletions). Defense must demonstrate clear viability for the recommended Configuration.

**Dimension validation:** these 8 dimensions cover all the user's flagged scrutiny points and the verdicts from sensemaking. No critical axis uncovered. Phase 0 PASS.

---

## Phase 1 — Fitness Landscape

**Viable region:** variants that honor REPLACES + preserve load-bearing substance + maintain spec-coherence + bounded edit-cost + compose with prior audit.

**Dead region:** variants that contradict REPLACES, lose substance, break /navigation's coherence, or create unbounded edit cost.

**Boundary region:** variants that trade off — discoverability vs economy, substance preservation vs spec growth, naming precision vs simplicity.

---

## Phase 2-3 — Per-Piece Adversarial Evaluation

### PIECE 1 — Migration scope

#### A.2 (recommended) — essential migration with A.1 features as DEFERRED-with-gates

**Prosecution:** Defers comprehensive features (threshold self-adjustment, layer-priority tiebreaker, /wayfinding failure modes absorption). If those features turn out load-bearing soon (e.g., autonomy-ladder Level 2 ships in 6 months), the deferral creates rework.

**Defense:** Empirical-data-dependent decision. Migrating features that may never fire is over-engineering. A.2 + observable gates is the right balance — ship essentials now; defer comprehensive based on data. The deferred features' load-bearing-status is genuinely unknown; data-driven incremental is structurally sound.

**Collision:** Prosecution's "rework risk" is real but bounded — the deferred features are additive (no rewrites; just additions to /navigation). Defense's "data-dependent" wins because the features have NEVER fired in observable practice (per /wayfinding's empirical underutilization).

**Verdict:** **SURVIVE.** Strong on structural-correctness, edit-cost, reversibility. No caveats on critical dimensions.

#### A.1 — comprehensive migration

**Prosecution:** ~150-250 lines added; some features (layer-priority tiebreaker) are speculative without data; potentially over-engineering.

**Defense:** Single editing pass; one comprehensive consolidation; user doesn't revisit /navigation in 6-12 months.

**Collision:** A.1 preserves more substance but increases edit-cost and risks documentation hoarding (features that may never fire stay in spec). A.2's incremental framing wins on substance-preservation strictness — preserve what's load-bearing, defer what's speculative.

**Verdict:** **SURVIVE WITH CAVEATS.** Acceptable user judgment if comprehensive-now is preferred. Caveat: speculative features have no empirical backing.

#### Incremental — same as A.2-with-gates

Redundant with the recommended A.2 (which IS incremental in framing). No separate verdict needed.

---

### PIECE 2a — DIAGNOSE classification

#### Auto-derivable (recommended)

**Prosecution:** Sensemaking-stall signals (oscillation, velocity negative, layer-conflict) are observable but the SYSTEM doesn't yet auto-detect them. Calling DIAGNOSE "auto-derivable" might be premature.

**Defense:** "Auto-derivable" classification reflects what KIND of derivation produces the type — from observable signals, not "currently auto-detected by code." The accumulator can mechanically expose oscillation patterns (which iterations had what verdicts; what changes oscillated; whether velocity is negative). Implementation maturity is a separate concern from structural classification.

**Collision:** Defense wins. The classification reflects derivability principle, not implementation completeness. If "human-judgment" meant "currently the human detects it," every type would be human-judgment at Level 0.

**Verdict:** **SURVIVE.** Strong on structural-correctness and naming-clarity (auto-derivable is consistent with other Process types).

#### Human-judgment (alternative)

**Prosecution:** DIAGNOSE's signals are observable patterns that don't require subjective judgment. Classifying as human-judgment alongside REFRAME (which requires "knowing the framing is wrong" — genuinely subjective) miscategorizes.

**Defense:** Honest about current implementation maturity.

**Collision:** Prosecution wins on structural-correctness — classification should reflect derivability, not implementation maturity.

**Verdict:** **KILL on structural-correctness.** KILL seed: if implementation maturity matters, separate it from classification (e.g., add `auto-derivable / pending-implementation` vs `auto-derivable / implemented` markers).

#### Fold-into-REFRAME (contrarian)

**Prosecution:** REFRAME = "change the question entirely"; DIAGNOSE = "the inquiry process is broken — drop back to sensemaking on the gap." Different signals, different actions. REFRAME assumes you have a new question; DIAGNOSE assumes the gap-recognition triggers sensemaking on the gap.

**Defense:** Both are "the framing is wrong"; sub-mode collapse.

**Collision:** Prosecution wins. REFRAME's directive ("change the question") and DIAGNOSE's directive ("drop to sensemaking on the gap") are operationally different; sensemaking output may be a refined understanding rather than a new question.

**Verdict:** **KILL on structural-correctness.**

---

### PIECE 2b — Reachability/gates placement

#### Step 1 sub-bullet (recommended)

**Prosecution:** Squeezes reachability into existing Step 1. Reachability is a substantive concept; demoting to sub-bullet may underweight.

**Defense:** Step 1 is "Read and assess"; reachability is part of that read. Sub-bullet is appropriate granularity. Adding a new Step 0 changes /navigation's spec structure for one sub-feature.

**Collision:** Defense wins. Right home, right granularity.

**Verdict:** **SURVIVE.**

#### New Step 0 (alternative)

**Prosecution:** Restructures the entire spec for one sub-feature; future readers wonder why Step 0 was added; spec-coherence cost.

**Defense:** Reachability is upstream of type derivation; structurally Step 0 is correct.

**Collision:** Prosecution wins on edit-cost AND spec-coherence. The substance fits in Step 1 sub-bullet; restructuring is disproportionate.

**Verdict:** **REFINE — too aggressive.** Refinement target: Step 1 sub-bullet (recommended).

#### Context-Directed UNBLOCK extension (contrarian)

**Prosecution:** UNBLOCK acts on a known blocker (resolve a dependency). Reachability is the cognitive operation of seeing the gates BEFORE they're recognized as blockers. Pre-enumeration awareness vs post-enumeration action — different operations.

**Defense:** Both involve "blocked things"; could share the type.

**Collision:** Prosecution wins on structural-correctness.

**Verdict:** **KILL on structural-correctness.** KILL seed: keep UNBLOCK as Context-Directed type for known blockers; reachability stays as pre-enumeration awareness in Step 1.

---

### PIECE 2c — REVISIT extension format ⚠ user-flagged scrutiny

#### Sub-table (recommended)

**Prosecution:** Adds nested structure inside REVISIT row. A row with a sub-table is unusual format. Visually awkward; spec-coherence weak point.

**Defense:** Three sub-actions (RESURRECT/INVALIDATE/REVERT) are operationally distinct enough to deserve table format (each with its own description and trigger direction). Sub-bullet would lose directional clarity. Three-separate-types breaks type count and category partition. Sub-table preserves both: 16-type count AND directional clarity for the three modes.

**Collision:** Prosecution's "unusual format" is real visual cost; Defense's "operational clarity" wins on substance-preservation. The three modes have distinct trigger conditions (new info contradicts kill condition; new info undermines survival condition; new info shows refinement degraded) — sub-bullet would compress these into a list, losing the directional structure. Sub-table is the right granularity.

**Verdict:** **SURVIVE.** Strong on substance-preservation. Mild caveat on spec-coherence (nested format unusual). The trade-off is: clean nested structure preserves substance; flat structure loses substance. Substance wins.

**Resolution of user's flagged scrutiny:** sub-table IS clean enough. The visual oddness is bounded — one nested structure inside one row, not pervasive nesting throughout the spec. The directional clarity of the three modes is load-bearing for cross-iteration verdict integration (which is multi-head's most important use case).

#### Sub-bullet (alternative)

**Prosecution:** Sub-bullet flattens the three sub-actions into a list; loses directional clarity. Each mode has distinct trigger conditions; bullet form compresses these incorrectly.

**Defense:** Cleaner format than nested table.

**Collision:** Prosecution wins on substance-preservation.

**Verdict:** **REFINE — too compressed.** Refinement target: sub-table (recommended).

#### Three separate types (contrarian, 18-type total)

**Prosecution:** Breaks "16-type taxonomy" framing throughout the spec; each new type requires its own row, trigger, auto-derivable status. Significant edit-cost and spec-coherence impact. The three modes are STRUCTURALLY one operation (re-evaluate past verdict) with three directions; promoting them to types miscategorizes the structure.

**Defense:** Three modes are operationally distinct; promoting them to first-class types makes them more visible.

**Collision:** Prosecution wins on spec-coherence AND edit-cost AND structural-correctness. The modes are sub-actions of one operation, not separate operations.

**Verdict:** **KILL on spec-coherence.** KILL seed: if user wants direct type-level visibility for the modes, sub-table provides it without inflating type count.

---

### PIECE 2e — Internal consistency follow-through

#### Focused consistency updates (recommended)

**Prosecution:** Touching 7+ places in /navigation.md (every "15-type" → "16-type"; auto-derivable count update; the REPLACES line update) is moderate edit work.

**Defense:** Necessary for spec internal consistency. Without these updates, /navigation says "15-type taxonomy" in some places but the table has 16 rows — direct contradiction in shipped text.

**Collision:** Defense wins. Consistency is non-optional.

**Verdict:** **SURVIVE.** Edit-cost moderate but justified.

#### Minimal updates / No updates (alternatives)

KILL on spec-coherence — leaves contradictions. Trivial KILL.

---

### PIECE 3 — /wayfinding.md deletion + old_meta-search.md decommission

#### Delete both (recommended)

**Prosecution:** old_meta-search.md may have historical value to future readers (lineage). Hard-to-reverse if deletion is wrong.

**Defense:** Git history preserves both files. old_meta-search is doubly orphaned post-deletion (already labeled "edited and called wayfinding"; if /wayfinding goes, double historical). Active spec areas should not contain orphaned files. Reversibility via git is sufficient.

**Collision:** Defense wins. Reversibility is git-mediated; active state should be clean.

**Verdict:** **SURVIVE.**

#### Delete only /wayfinding (alternative)

**Prosecution:** old_meta-search becomes triply-historical; readers see a deprecated file with no active reference. Maintenance ambiguity.

**Defense:** Conservative — preserves historical context inline.

**Collision:** Both have merits. Conservative is acceptable user judgment.

**Verdict:** **SURVIVE WITH CAVEATS.** Defensible if user values in-tree historical context.

#### Tombstone (contrarian)

**Prosecution:** Tombstone files are an established anti-pattern — they look active but redirect; create maintenance burden (someone has to know to update the tombstone if /navigation moves).

**Defense:** Backwards-compat for any external references to /wayfinding.

**Collision:** External references are not load-bearing in this project; git history covers reversibility.

**Verdict:** **KILL on spec-coherence and edit-cost.**

---

### PIECE 4 — /inquiry.md B.1 wording ⚠ user-flagged scrutiny

#### Full rewrite (recommended)

**Prosecution:** Inline 16-type list in /inquiry.md is duplication of /navigation's content. Drift risk if /navigation evolves and /inquiry.md doesn't sync.

**Defense:** Callsite pedagogy. Reader of /inquiry.md sees what /navigation produces without navigating away. Drift risk is bounded — type names are stable vocabulary (NARROW/BROADEN/SHIFT/etc. are stable; the 16 types in this Configuration are stable for the foreseeable future). Major taxonomy changes would be a sync trigger.

**Collision:** Drift risk is real but bounded; pedagogy is meaningful — `/inquiry.md` users skim to know what's coming next. The type names + category structure summarize /navigation's output shape.

**Verdict:** **SURVIVE.** Mild caveat on coordination-cost (sync if /navigation taxonomy changes).

**Resolution of user's flagged scrutiny:** full rewrite is callsite pedagogy, not drift hazard. The duplication is modest (3 category bullet groups, ~5 lines per category). The bounded drift risk is mitigated by vocabulary stability and obvious sync points.

#### Minimal target change (alternative)

**Prosecution:** Reader of /inquiry.md sees only "see /navigation" without seeing what types exist. Forces navigation for any callsite understanding.

**Defense:** Minimum duplication; cleanest.

**Collision:** Pedagogy at callsite is real value; minimum is too sparse.

**Verdict:** **REFINE — too sparse.** Refinement target: full rewrite OR a middle option (one-line type-name list without the per-category breakdown).

#### Drop inline list (contrarian)

Same KILL reasoning as the prior audit's B.3 — too sparse, violates callsite-pedagogy principle.

---

### PIECE 5 — Prior audit's other Steps preserved (sanity check)

**Prosecution:** Are any of the prior audit's other Steps (A.1, C.1, E.1, F.1, F.2) actually affected by this finding's verdict? Let me sanity-check each:
- A.1 (clean cuts in inquiry.md — remove duplicative content): UNAFFECTED. The wayfinding-table specifically is replaced by Piece 4, not by A.1.
- C.1 (SYNTHESIZE rewrite with CONCLUDE rename): UNAFFECTED. About SYNTHESIZE/CONCLUDE, not wayfinding/navigation.
- E.1 (Rules trim 8→6): UNAFFECTED. About duplications with /MVL, not wayfinding/navigation.
- F.1 (cross-ref from /MVL/MVL+ to /inquiry for variable-pipeline): UNAFFECTED. About /inquiry's CONFIGURE role.
- F.2 (cross-ref in protocols/desc.md): UNAFFECTED. About CONFIGURE in protocols dimension.

All five are orthogonal to wayfinding/navigation. **Defense:** apply as-is.

**Verdict:** **SURVIVE.** Strong on coordination-cost (composes cleanly).

---

### PIECE 6 — D.1 reversal

#### Omit paragraph (recommended)

**Prosecution:** Loses any historical context for /navigation readers about the wayfinding deletion in the form D.1 originally proposed.

**Defense:** Piece 2e's "Navigation as the iteration-boundary cognitive discipline" section already covers the post-deletion note. Adding a separate D.1 paragraph would duplicate.

**Collision:** Defense wins. Single canonical place for the deletion-history (within /navigation.md's relationship-to-other-disciplines section).

**Verdict:** **SURVIVE.**

#### Replace with deletion-history note in /navigation (alternative)

Duplicates Piece 2e's coverage. **REFINE — Piece 2e covers it; omit is correct.**

#### Keep D.1 reframed (contrarian)

Same as alternative — duplicates Piece 2e. **REFINE.**

---

### PIECE 7 — Artifact relationship: REFINES + CORRECTS dual frontmatter ⚠ user-flagged scrutiny

#### REFINES + CORRECTS (recommended)

**Prosecution:** Dual frontmatter pointing to the same file might be confusing. "Why both refines AND corrects?" Readers may wonder if it's redundant; the relationship is unfamiliar.

**Defense:** REFINES describes targeted refinement (most punch list preserved with adjustments to B.1 + D.1 + cross-reference targets); CORRECTS describes specific error fix (the wayfinding-vs-navigation verdict was structurally wrong). Different relationships to different parts of the prior finding. Both are accurate. Single label would lose precision.

**Collision:** The dual frontmatter is unusual but precise. The user's project values precise relationship metadata (CONCLUDE has frontmatter `refines:` field for exactly this reason). The "confusing" prosecution holds only if dual fields are unprecedented in the project; they aren't (the finding template explicitly accommodates `refines:` / `supersedes:` / `corrects:` / `impacted_by:`).

**Verdict:** **SURVIVE.** Mild caveat on naming-clarity (dual frontmatter unusual but not unprecedented).

**Resolution of user's flagged scrutiny:** dual frontmatter IS precise. The conventional alternative is REFINES alone, which loses the "this verdict was wrong" signal. CORRECTS alone overstates (most punch list isn't wrong; just one verdict). Dual is the precise expression.

#### REFINES-only (alternative)

**Prosecution:** Loses the specific "this verdict was wrong" signal. The wayfinding-vs-navigation reversal is more than a refinement — it's a correction.

**Defense:** Simpler. One relationship label.

**Collision:** Prosecution wins on naming-clarity AND substance-preservation.

**Verdict:** **REFINE — under-precise.**

#### SUPERSEDES (contrarian)

**Prosecution:** Overstates. Most of the prior audit's punch list (A.1, C.1, E.1, F.1, F.2) is unchanged. SUPERSEDES implies "this replaces the prior" — wrong because most of the prior is still operative.

**Defense:** Cleanest one-label semantics.

**Collision:** Prosecution wins on substance-preservation. SUPERSEDES misrepresents.

**Verdict:** **KILL on naming-clarity.**

---

### PIECE 8 — Stalled-inquiry marking

#### Mark two with both (recommended)

**Prosecution:** Both frontmatter + History note is somewhat redundant. Same info in two places.

**Defense:** Different readers query different places. Frontmatter is for tooling/scanning; History is for narrative readers. Both ensure findability.

**Collision:** Defense wins. Redundancy here is feature, not bug.

**Verdict:** **SURVIVE.**

#### Frontmatter-only (alternative)

**Prosecution:** History readers (humans reading _state.md narratively) miss the supersession.

**Defense:** Less editing.

**Collision:** Both readers matter.

**Verdict:** **REFINE — incomplete.** Add History note.

#### Don't mark (contrarian)

**KILL** — leaves stalled inquiries in ACTIVE state with no pointer; future agents may attempt resume.

---

### PIECE 9 — MUST/COULD/DEFERRED partition ⚠ user-flagged scrutiny

#### Generic with observable gates (recommended)

**Prosecution:** The gates ("after 5-10 inquiries", "autonomy-ladder Level 2 maturity") need specificity per finding template's gate-specificity style rule (gates must be time-bound / condition-bound / observable; "eventually" is a defect).

**Defense:** Let me check each gate:
- "After 5-10 inquiries that invoke /navigation post-migration" — **observable** (count invocations of /navigation in inquiry tree). ✓
- "When autonomy-ladder Level 2 operations begin (system selecting types autonomously)" — **condition-bound** (specific milestone in enes/desc.md). ✓
- "When /navigation grows beyond ~700 lines" — **observable** (line count check). ✓
- "When manual REVISIT threshold tuning produces noticeable false-resurrection or missed-resurrection patterns" — **observable** (count false-resurrection events; threshold for "noticeable" needs specification: ≥3 false-resurrections in 10 invocations).

The fourth gate has a "noticeable" qualifier that needs sharpening. The other three are specific. The Defense holds for 3/4 gates; the 4th needs refinement to add a count threshold.

**Collision:** 3 of 4 gates pass the specificity rule cleanly. The 4th gate's "noticeable" should be replaced with a specific count: "≥3 false-resurrections or missed-resurrections in 10 REVISIT invocations." This is a refinement, not a structural failure.

**Verdict:** **SURVIVE WITH REFINE.** The recommended Configuration's gates are 3/4 specific; the 4th needs sharpening (add count threshold). After refinement: SURVIVE clean.

**Resolution of user's flagged scrutiny:** gates ARE specific enough for 3/4. The 4th needs the refinement above. Final wording for that gate: "When ≥3 false-resurrections OR ≥3 missed-resurrections occur across 10 REVISIT invocations, revisit threshold self-adjustment requirement."

#### Focused-bigger-MUST (alternative)

**Prosecution:** Bigger MUST might include speculative items (e.g., A.1 features as MUST when they have no operational data). Substance-preservation principle says don't migrate features that may never fire.

**Defense:** Reduces deferred work; one comprehensive pass.

**Collision:** Prosecution wins on substance-preservation principle.

**Verdict:** **REFINE — over-includes speculative items in MUST.**

#### Contrarian-smaller-MUST (alternative)

**Prosecution:** Smaller MUST (just migration core: Pieces 1, 2, 3) leaves prior audit reconciliation as COULD. But the reconciliation IS necessary to prevent contradictions in the project (Piece 4 B.1 update must coordinate with /wayfinding deletion; Piece 6 D.1 reversal must coordinate with DIAGNOSE addition).

**Defense:** Minimum to realize verdict.

**Collision:** Prosecution wins on coordination-cost. Without B.1 (Piece 4) and D.1 reversal (Piece 6) in MUST, /inquiry.md would still reference /wayfinding (broken cross-reference) AND prior audit's punch list would assume DIAGNOSE-uncovered (contradicting this finding).

**Verdict:** **REFINE — too small.** Refinement target: include B.1 update and D.1 reversal in MUST.

---

## Phase 3.5 — Assembly Check

The recommended Configuration: Piece 1 = A.2 + Piece 2a generic + Piece 2b generic + Piece 2c focused (sub-table) + Piece 2e focused (full consistency updates) + Piece 3 focused (delete both) + Piece 4 focused (full rewrite) + Piece 5 generic (apply as-is) + Piece 6 generic (omit paragraph) + Piece 7 focused (REFINES+CORRECTS) + Piece 8 focused (mark two with both) + Piece 9 generic with refined 4th gate.

**Does the assembly cohere?**

YES:
- Piece 1's A.2 scope drives Piece 2's A.2 essential edits (DIAGNOSE + reachability + REVISIT extension + consistency).
- Piece 2's edits enable Piece 3's deletion (substance migrated; deletion safe).
- Piece 3's deletion prompts Piece 4's cross-reference target update + Piece 6's D.1 reversal.
- Piece 5's other prior audit Steps proceed in parallel (orthogonal to wayfinding/navigation).
- Piece 7's frontmatter expresses the precise relationship.
- Piece 8's stalled-inquiry marking cleans up.
- Piece 9's MUST/COULD/DEFERRED partition makes actions actionable with specific gates.

Each piece's verdict survives without dependency on other pieces' specific variants (which is what good decomposition produces). The assembly's emergent value: a coherent migration plan that completes in one ~1.5-2h editing session.

**Total assembled edit estimate:**

| File | Action | Net lines |
|---|---|---|
| `commands/navigation.md` | DIAGNOSE row + reachability sub-bullet + REVISIT sub-table + consistency updates + Navigation-as-iteration-boundary-discipline section | +50-80 (491 → ~550) |
| `commands/wayfinding.md` | Delete | -381 |
| `thinking_disciplines/old_meta-search.md` | Delete | -431 |
| `commands/inquiry.md` | Apply prior audit's full punch list with B.1 focused variant + D.1 omitted | -80 to -100 |
| `commands/MVL.md` + `commands/MVL+.md` | F.1 cross-ref (per prior audit) | +6 |
| `thinking_disciplines/protocols/desc.md` | F.2 cross-ref + (separately, optional) Configuration β coordination | +2 to +12 |
| `devdocs/inquiries/wayfinding_fundamental_fix/_state.md` | SUPERSEDED status + History note | +5-10 |
| `devdocs/inquiries/sic_as_wayfinder/_state.md` | SUPERSEDED status + History note | +5-10 |
| `devdocs/inquiries/inquiry_md_remaining_value_audit/finding.md` | (COULD) `refined_by:` frontmatter | +2 |

**Net project change:** ~-750 lines. Time: ~1.5-2 hours.

**Assembly verdict: SURVIVE.** Clean SURVIVE on every weighted dimension. Mild caveats on naming-clarity (Piece 7 dual frontmatter unusual but precise) and edit-cost (Piece 2e moderate but justified).

---

## Phase 4 — Coverage + Convergence

### Accumulator update

**SURVIVE verdicts (clean, no caveats on critical dimensions):**
- Piece 1 A.2 (recommended)
- Piece 2a auto-derivable DIAGNOSE
- Piece 2b Step 1 sub-bullet
- Piece 2c sub-table
- Piece 2e focused consistency updates
- Piece 3 delete both
- Piece 4 full rewrite
- Piece 5 apply as-is
- Piece 6 omit paragraph
- Piece 7 REFINES+CORRECTS
- Piece 8 mark two with both
- Piece 9 with refined 4th gate (REVISE the "noticeable" qualifier)
- **Assembly:** Configuration of all recommended pieces

**SURVIVE with caveats (defensible variants):**
- Piece 1 A.1 (acceptable user judgment for comprehensive consolidation)
- Piece 3 delete-only-wayfinding (acceptable if user values in-tree historical context)

**REFINE verdicts:**
- Piece 2b new Step 0 → Step 1 sub-bullet
- Piece 2c sub-bullet → sub-table
- Piece 4 minimal target change → full rewrite
- Piece 6 replace with deletion-history → omit paragraph (Piece 2e covers)
- Piece 7 REFINES-only → REFINES+CORRECTS
- Piece 8 frontmatter-only → both
- Piece 9 contrarian-smaller-MUST → include B.1 + D.1 reversal in MUST

**KILL verdicts:**
- Piece 2a human-judgment (KILL on structural-correctness)
- Piece 2a fold-into-REFRAME (KILL on structural-correctness)
- Piece 2b Context-Directed UNBLOCK extension (KILL on structural-correctness)
- Piece 2c three-separate-types (KILL on spec-coherence)
- Piece 2e no-updates (trivial KILL on spec-coherence)
- Piece 3 tombstone (KILL on spec-coherence + edit-cost)
- Piece 7 SUPERSEDES (KILL on naming-clarity)
- Piece 8 don't-mark (KILL on coordination-cost)

### Coverage assessment

- All 9 pieces evaluated with all proposed variants.
- Recommended Configuration evaluated as assembly.
- Defensible alternatives identified per piece.
- KILLed configurations have explicit structural reasons.
- User's four flagged scrutiny points all addressed:
  1. **Piece 2c sub-table:** sub-table IS clean enough; visual oddness bounded; substance wins.
  2. **Piece 4 full rewrite:** callsite pedagogy not drift hazard; vocabulary stability bounds drift risk.
  3. **Piece 7 dual frontmatter:** precise not confusing; project supports multi-relationship metadata.
  4. **Piece 9 gates:** 3 of 4 specific; 4th refined to add count threshold ("≥3 false/missed-resurrections in 10 REVISIT invocations").

### Convergence signal

**TERMINATE.** Convergence criteria all met:
- Clean SURVIVE exists (Configuration of recommended Pieces — clean SURVIVE on all critical dimensions).
- Sensemaking's verdicts and innovation's variants converge — multiple mechanisms in innovation pointed to the same Configuration; multiple dimensions in critique confirm it.
- KILLed configurations have specific structural reasons.
- No unexplored regions — every piece's variants evaluated; one piece (Piece 9 4th gate) needs minor refinement which is captured.
- Landscape stable — recommended Configuration is the unique clean SURVIVE.

---

## Final Punch List

The user can apply the following in a single ~1.5-2 hour editing session.

### Phase 0: Decisions (do these first)

1. **Confirm Piece 1 = A.2 essential migration with A.1 features as DEFERRED-with-gates.** Defensible alternative: A.1 if user wants comprehensive consolidation in one pass.

2. **Confirm Piece 7 = REFINES + CORRECTS dual frontmatter** in this finding's metadata.

### Phase 1: Editing (parallel after Phase 0)

#### Step 1 — Edit `commands/navigation.md`

Apply the following edits in one editing pass:

**Step 1a — Add DIAGNOSE row to Process-Directed table** (around line 227, after DIFFERENT APPROACH):

```markdown
| **DIAGNOSE** | Drop back to sensemaking on the gap — the inquiry process itself is broken (not the candidates) | Sensemaking-stall signals: oscillation across iterations (refinements fix X but break Y), velocity negative for 2+ iterations, OR layer-conflict (memory of past kill conditions contradicts current convergence signals) |
```

**Step 1b — Add reachability sub-bullet to Step 1** (in the Instructions section around line 22):

```markdown
   **Reachability check (added to Step 1 — Read and assess):** Before assigning types, identify which directions are accessible from current state and which are gated behind prerequisites. A gate has three parts: blocked region (what becomes reachable when the gate opens), condition (what must be true), current state (open or closed). For each detected gate: log it. If a gate blocks an otherwise-promising direction, the type assignment in Step 2 must include the gate condition as part of the direction's WHY (e.g., "DEEPEN survivor X — gated on UNBLOCK condition Y first").
```

**Step 1c — Add REVISIT sub-table** (after the Context-Directed table around line 234):

```markdown
**REVISIT modes (sub-actions):** REVISIT operates in three directions:

| Mode | What it does | When triggered |
|---|---|---|
| **RESURRECT** | A killed idea becomes possibly viable | New info contradicts the kill condition |
| **INVALIDATE** | A surviving idea becomes possibly dead | New info undermines the survival condition |
| **REVERT** | A refined idea returns to earlier version | New info shows refinement degraded it |

Threshold for triggering REVISIT self-adjusts based on loop state: low in early iterations (sparse coverage, even moderate relevance is worth revisiting), high near convergence (don't destabilize a converging search), minimum when no SURVIVE candidates exist (any possible unlock worth investigating).
```

**Step 1d — Update internal consistency throughout /navigation.md:**

- Replace `15-type taxonomy` → `16-type taxonomy` (lines: ~24, 102, 116, 127, 138, 196, 256, 404, 446 — verify each occurrence with grep before/after).
- Update auto-derivable count in line ~472 from `11 auto-derivable + 4 human-judgment` → `12 auto-derivable + 4 human-judgment`.
- Add DIAGNOSE to auto-derivable list around line 452:

```markdown
| DIAGNOSE | Sensemaking-stall signals (oscillation / velocity negative 2+ iterations / layer-conflict) |
```

**Step 1e — Update "Navigation and Wayfinding" section (lines 439-441)** to:

```markdown
### Navigation as the iteration-boundary cognitive discipline

Navigation is the canonical iteration-boundary cognitive discipline. It produces the FULL space of typed next-directions; selection (when single-head, picking one; when multi-head, dispatching heads to multiple directions) consumes the enumerated map. The 16-type taxonomy with confidence levels and per-item guidelines is the primary output. Earlier project iterations had a separate `/wayfinding` discipline focused on single-direction selection; that substance has been absorbed into /navigation (DIAGNOSE-as-Process-type, reachability/gates check in Step 1, REVISIT sub-actions, threshold-aware REVISIT confidence). The selection-as-pick-one framing is a single-head artifact and is not preserved as a separate discipline.
```

**Net edits to `commands/navigation.md`:** +50-80 lines (491 → ~550). ~30 minutes.

#### Step 2 — Delete files

```bash
rm /Users/ns/Desktop/projects/native/commands/wayfinding.md
rm /Users/ns/Desktop/projects/native/thinking_disciplines/old_meta-search.md
```

Verify no broken cross-references:

```bash
grep -rn "wayfinding" /Users/ns/Desktop/projects/native/{commands,thinking_disciplines,homegrown,enes} 2>/dev/null | grep -v "git\|docarchive\|inquiries"
```

If grep finds remaining references, update them per Step 3 below or per the prior audit's punch list.

#### Step 3 — Edit `commands/inquiry.md` (apply prior audit's punch list with this finding's variant adjustments)

Apply prior audit's A.1 (clean cuts: remove SIC-cycle example lines 220-244; remove loop pattern lines 246-248; remove Cross-Session Resume lines 289-298), C.1 (SYNTHESIZE rewrite with CONCLUDE rename — see prior audit's wording), E.1 (Rules trim 8→6 — see prior audit's wording).

For B.1, replace lines 173-216 with this finding's modified wording:

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

**Do NOT add the prior audit's D.1 paragraph** (the cross-reference paragraph noting DIAGNOSE-uncovered) — Step 1e above already covers the post-deletion note.

**Net edits to `commands/inquiry.md`:** ~-80 to -100 lines net. ~30-45 minutes.

#### Step 4 — Apply prior audit's F.1 (commands/MVL.md and commands/MVL+.md cross-references)

Per prior audit's wording: add cross-reference paragraph near top of each file pointing to /inquiry for variable-pipeline scenarios. ~3 lines × 2 files = 6 lines. ~5 minutes.

#### Step 5 — Apply prior audit's F.2 (thinking_disciplines/protocols/desc.md cross-reference)

Per prior audit's wording: append CONFIGURE entry note naming /inquiry as canonical implementation site. ~1-2 lines. ~3 minutes.

#### Step 6 — Mark stalled inquiries superseded

For `devdocs/inquiries/wayfinding_fundamental_fix/_state.md`:

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

For `devdocs/inquiries/sic_as_wayfinder/_state.md`:

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

~5-10 minutes.

#### Step 7 (COULD) — Update prior audit's finding with bidirectional linkage

Edit `devdocs/inquiries/inquiry_md_remaining_value_audit/finding.md` frontmatter:

```yaml
---
status: refined
refined_by: devdocs/inquiries/wayfinding_navigation_unification_check/finding.md
---
```

~2 lines. ~2 minutes.

### Phase 9 (already done in this critique): MUST / COULD / DEFERRED

**MUST** (verdict not realized without these):
- Step 1 (Edit /navigation.md, Steps 1a-1e).
- Step 2 (Delete /wayfinding.md and old_meta-search.md).
- Step 3 (Edit /inquiry.md per prior audit + this finding's B.1 variant + omit D.1).
- Step 4 (F.1 cross-references in /MVL/MVL+).
- Step 5 (F.2 cross-reference in protocols/desc.md).
- Step 6 (Mark two stalled inquiries SUPERSEDED).
- This finding's frontmatter with REFINES + CORRECTS.

**COULD** (enhances; not blocking):
- Step 7 (Bidirectional linkage in prior audit's finding frontmatter).
- Apply A.1 comprehensive features to /navigation.md (threshold self-adjustment beyond REVISIT + layer-priority tiebreaker + /wayfinding failure modes absorption) — gated on observable failure patterns.

**DEFERRED** (revisit when gate fires):
- **A.1 comprehensive feature application.** Gates: (a) when autonomy-ladder Level 2 operations begin (system selecting types autonomously per `enes/desc.md` Level 2 milestone), OR (b) when ≥3 false-resurrections OR ≥3 missed-resurrections occur across 10 REVISIT invocations (refined from "noticeable" per critique).
- **Empirical observation of which absorbed features fire.** Gate: after 5-10 inquiries that invoke /navigation post-migration. Observable: count invocations of DIAGNOSE, RESURRECT/INVALIDATE/REVERT, reachability/gates checks. If 0 across 10 inquiries, those features are deletion candidates; if 1+, they're load-bearing.
- **/navigation complexity reassessment.** Gate: when /navigation grows beyond ~700 lines OR when readers report navigability issues.

**Total estimate:** ~1.5-2 hours focused editing across 7 files (Steps 1-6, plus optional Step 7). Net project change: ~-750 lines.

---

## Convergence Telemetry

* **Dimensions evaluated:** 8 / 8. All critical (structural-correctness, substance-preservation) covered for every variant.
* **Adversarial strength:** STRONG. KILLs on specific structural grounds (Piece 2a fold-into-REFRAME contradicts operation distinction; Piece 2c three-separate-types breaks type partition; Piece 7 SUPERSEDES misrepresents relationship; Piece 8 don't-mark fails coordination-cost; Piece 3 tombstone is anti-pattern). Prosecution would give advocates pause.
* **Landscape stability:** STABLE. The recommended Configuration is the unique clean SURVIVE; alternative variants survive-with-caveats or were REFINEd/KILLed with explicit structural reasons.
* **Clean SURVIVE:** YES — Configuration of recommended pieces has SURVIVE on every weighted dimension with mild caveats only on (a) naming-clarity (Piece 7 dual frontmatter unusual but precise) and (b) edit-cost (Piece 2e moderate but justified).
* **Failure modes observed:** None.
  - Wrong dimensions? No — Phase 0 validated against user's stated goals and sensemaking's verdicts.
  - Rubber-stamping? No — multiple KILLs and REFINEs.
  - Nitpicking? No — KILLs were on critical-weight dimensions (structural-correctness, spec-coherence, substance-preservation), not minor issues.
  - Dimension blindness? No — all flagged scrutiny points addressed; user's 4 specific concerns explicitly resolved.
  - False convergence? No — landscape genuinely stabilized; multiple mechanisms converged.
  - Evaluation drift? No — dimensions and weights stable across all variants.
  - Self-reference collapse? No — externally grounded in actual file content (wayfinding.md, navigation.md, prior findings, enes/desc.md).
* **Overall: PROCEED** — sufficient coverage + adversarial strong + clean SURVIVE on the recommended Configuration.

---

## Signal: TERMINATE

The critique converges on **the recommended Configuration** as the punch list:
- Piece 1 = A.2 essential migration with A.1 features DEFERRED-with-gates.
- Piece 2 = generic 2a + generic 2b + focused 2c (sub-table) + focused 2e (full consistency updates).
- Piece 3 = focused (delete /wayfinding.md AND old_meta-search.md).
- Piece 4 = focused (full rewrite with /navigation 16-type taxonomy at a glance).
- Piece 5 = generic (apply prior audit's other Steps as-is).
- Piece 6 = generic (omit D.1 paragraph entirely).
- Piece 7 = focused (REFINES + CORRECTS dual frontmatter).
- Piece 8 = focused (mark `wayfinding_fundamental_fix` and `sic_as_wayfinder` superseded with both frontmatter + History).
- Piece 9 = generic with refined 4th gate (≥3 false/missed-resurrections in 10 REVISIT invocations).

The user can apply the 7-step punch list above in one ~1.5-2h editing session.

**Summary of user-flagged scrutiny answers:**
1. **Piece 2c sub-table:** clean enough — visual oddness bounded; substance wins.
2. **Piece 4 full rewrite:** callsite pedagogy not drift hazard — vocabulary stability bounds drift risk.
3. **Piece 7 dual frontmatter:** precise not confusing — REFINES describes refinement; CORRECTS describes specific verdict reversal; both accurate.
4. **Piece 9 gates:** 3 of 4 specific as-is; 4th refined from "noticeable" to specific count threshold ("≥3 false/missed-resurrections in 10 REVISIT invocations").
