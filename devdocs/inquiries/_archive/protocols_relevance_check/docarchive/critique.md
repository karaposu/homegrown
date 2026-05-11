# Critique: protocols_relevance_check

## User Input
devdocs/inquiries/protocols_relevance_check/

Read all files. Construct evaluation dimensions. Run prosecution + defense + collision on each surviving option (P1.A/B/C, P2.A/B/C, P3.A/B/skip, P4.A/B/C/D). Confirm or refine Configuration β. Apply assembly check. Produce concrete final punch list.

Save output as devdocs/inquiries/protocols_relevance_check/critique.md.

---

## Phase 0 — Dimension Construction

### Extracted from sensemaking + decomposition

The problem has three structural levels with their own verdicts (sensemaking SV6); the work decomposes into 4 independently-answerable pieces (decomposition); innovation produced ranked options per piece + 4 candidate configurations.

The right dimensions for evaluating the candidates:

| Dimension | What it asks | Weight | Source |
|---|---|---|---|
| **Accuracy-preservation** | Does this fix or introduce staleness in the doc? | HIGH | Sensemaking: the immediate problem is 4 stale entries + a wrong count table. Any option that doesn't fix these fails the audit's primary purpose. |
| **Load-bearing-surfacing** | Does this make the protocols-dimension's load-bearing-for-stated-goal claim visible to a reader? | HIGH | Sensemaking insight #5: the 6 missing protocols map 1:1 to autonomy-ladder requirements. This is the audit's most important finding. If the doc doesn't surface it, the audit's value isn't transferred. |
| **Sequencing-respect** | Does this respect `enes/desc.md`'s explicit "/intuit Phase A is the immediate next step" sequencing? | HIGH | Sensemaking: protocol-building is implicitly deferred for sequencing reasons. Violating this means competing with the project's stated immediate priority. |
| **Navigability** | Does this make the doc easier to navigate / find what you need? | MEDIUM | Decomposition: cross-references between protocols/desc.md and loop_design_N.md serve readers approaching from different angles. |
| **Maintenance-cost** | Long-term effort to keep updated? | MEDIUM | Larger structural changes have higher ongoing maintenance burden. Doc edits are cheap; structural restructures are not. |
| **Edit-cost** | Immediate effort? | MEDIUM | All doc-edit options are within ≤2 hours; restructure options are larger; build options are hours-to-days. |
| **Reversibility** | Can this be undone? | LOW | All doc edits reversible via git. Build commitments (P4.C) less reversible (need to remove implementation + outputs). |

### Dimension validation

Cross-check against sensemaking perspectives:
- Technical/Logical → Accuracy-preservation, Maintenance-cost ✓
- Human/User → Navigability, Load-bearing-surfacing ✓
- Strategic/Long-term → Load-bearing-surfacing, Sequencing-respect ✓
- Risk/Failure → Reversibility, Sequencing-respect ✓
- Resource/Feasibility → Edit-cost ✓
- Definitional/Consistency → Accuracy-preservation ✓

All 6 sensemaking perspectives covered. No critical-weight dimension blindness detected.

---

## Phase 1 — Fitness Landscape

### Viable region

High accuracy-preservation + load-bearing-surfacing visible + sequencing respected + low edit-cost. Configurations that fix stale entries AND surface autonomy-ladder mapping AND defer VERSION live here.

### Boundary region

Either accuracy-preservation OR load-bearing-surfacing covered, not both. Configuration α (P1.A + P2.A) lives here — corrects errors but undersells the load-bearing argument.

### Dead region

Sequencing-violations (P4.C — build VERSION now violates /intuit Phase A priority); premature restructures (P1.C at current scale); over-claims with weak evidence (P4.D — declares VERSION unnecessary based on unverified assumption); destabilization of stable docs (P2.C touches enes/desc.md).

---

## Phase 2 — Adversarial Evaluation

### P1.A — Minimum drop-in fixes

**Landscape position preview:** Boundary — accuracy-preservation strong; load-bearing-surfacing absent.

**Prosecution.** P1.A fixes errors but doesn't add value beyond correction. The audit produced a key finding (6 missing protocols map to autonomy-ladder requirements). P1.A is silent on this. A reader of the corrected doc still has to do the cross-doc analysis the audit just performed. Most of the audit's value isn't transferred unless P1.A is paired with P2.

**Defense.** P1.A is correct for its narrow role: status-table corrections. The load-bearing-surfacing job belongs to P2 (doc enrichment), not P1 (status fixes). Standalone P1.A is incomplete; combined with P2 it's complete. The decomposition deliberately separated these concerns; criticizing P1.A for not doing P2's job confuses pieces.

**Collision.** Defense holds: P1.A's role IS narrow, and the decomposition is sound. Prosecution's complaint is really "Configuration α undersells the audit," which is a configuration-level critique, not a P1.A-level critique.

**Verdict: SURVIVE — clean for its role.**

---

### P1.B — P1.A + Build-trigger column for ALL protocols

**Landscape position preview:** Viable — symmetric treatment; modestly higher value than P1.A.

**Prosecution.** The build-trigger column for ALIVE protocols is ~10 extra lines for marginal value. Alive protocols don't need triggers — they're alive; the "what would invalidate this" framing is speculative ("what would mark RESUME as no-longer-alive"). Adds maintenance burden for invalidation conditions that may never fire.

**Defense.** Symmetric treatment of all protocols. Anticipates Baldwin-cycle maturity (when alive protocols need "Last calibrated" — same column structure can host this without restructure). Forces explicit thinking about what would mark a protocol as no-longer-alive — useful as a future-self note.

**Collision.** Prosecution's "marginal value for alive protocols" is partially right. The high-value part of P1.B is the build-trigger annotations on the 6 MISSING protocols (which P1.A also includes inline). The symmetric column for alive protocols is the marginal addition. Defense's "anticipates future structure" is real but the future isn't here yet.

**Verdict: SURVIVE-with-caveat.** The high-value content (missing-protocol triggers) is in both P1.A and P1.B. The marginal column for alive protocols is defensible but not necessary. P1.A is sufficient if the user wants leaner; P1.B is preferred if user wants symmetric structure with light prep for Baldwin-cycle maturity.

---

### P1.C — ADR-style restructure

**Landscape position preview:** Boundary→Dead — high architectural quality, but premature for current scale.

**Prosecution.** ~80-line restructure to organize the same information differently. Single author (the user) editing at low frequency means the multi-author benefit doesn't apply. Extrapolation #5-year is uncertain — we don't know if Level 3+ ships, so investing in restructure now is bet-hedging in the wrong direction. Risk: half-finished restructure if user gets distracted (16 mini-sections is a lot to write at once). Doesn't add accuracy-preservation or load-bearing-surfacing beyond P1.B.

**Defense.** Architecturally clean. Matches recognized industry pattern (ADRs). Scales to multi-author and to the protocols-implemented future where each protocol becomes a richer document. Each protocol becomes individually editable without conflict. Once done, future per-protocol edits are simple.

**Collision.** Prosecution wins on "premature." The future-readiness benefit is real but the cost is incurred now while the benefit is realized only later AND only conditionally (only if Level 3+ ships AND multiple authors edit AND missing protocols start being implemented). Triple-conditional benefit doesn't justify present cost.

**Verdict: KILL (for now).** Seed: revisit P1.C if any of (a) multiple authors begin editing protocols/desc.md regularly, OR (b) the doc grows past ~400 lines, OR (c) any 2 of the 6 missing protocols get implemented (making per-protocol pages have real content beyond status). Until any of those triggers fires, P1.B is the better-calibrated investment.

---

### P2.A — Minimal cross-reference

**Landscape position preview:** Boundary — navigability covered; load-bearing-surfacing absent.

**Prosecution.** The whole point of the audit is to demonstrate why protocols matter. P2.A adds a 10-line "see also" section pointing to loop_design_N.md but doesn't surface the load-bearing-for-stated-goal claim. A reader who lands on the cross-referenced doc sees that loop_design exists but doesn't see the autonomy-ladder mapping that justifies the protocols dimension's existence.

**Defense.** Cheap. Enables loop_design ↔ protocols cross-navigation. Doesn't overcommit. Acceptable in Configuration α as the minimum-effort path.

**Collision.** Prosecution wins on the load-bearing-surfacing dimension (HIGH weight). P2.A is correct for its narrow role (cross-reference) but inadequate as the only enrichment if user wants the audit's value to land.

**Verdict: SURVIVE-with-caveat.** Acceptable in Configuration α (minimum effort). Insufficient if user wants the load-bearing argument visible — for that, P2.B is needed.

---

### P2.B — P2.A + Autonomy-ladder mapping section

**Landscape position preview:** Viable — both navigability AND load-bearing-surfacing covered.

**Prosecution.** Duplicates information that lives canonically in `enes/desc.md`. Risk of drift: if the autonomy ladder evolves in `enes/desc.md`, the mapping table in `protocols/desc.md` may go stale. Maintenance burden across two docs.

**Defense.** Surfaces the load-bearing claim where readers of `protocols/desc.md` will encounter it. Without this section, readers must do the cross-doc analysis the audit just did. The mapping table IS the audit's distilled value — it's what makes the protocols dimension's relevance visible.

**Collision.** Prosecution's drift concern is real but small in magnitude. The autonomy ladder structure in `enes/desc.md` is stable (multiple inquiries have refined it; the chain is complete). The mapping is from protocol → ladder, which is a stable relationship. Defense's "audit's value, distilled" wins decisively on load-bearing-surfacing (HIGH weight).

**Verdict: SURVIVE — clean.** Optional refinement: cross-reference `enes/desc.md`'s autonomy section explicitly with section title (e.g., "see The Trajectory — Subconscious to Consciousness section") so future readers can verify the mapping if the ladder evolves.

---

### P2.C — Move autonomy mapping to enes/desc.md

**Landscape position preview:** Dead — destabilization risk on a stable doc.

**Prosecution.** `enes/desc.md` is the project-goal doc that has been carefully stabilized through a chain of 5 prior inquiries (per its own Reasoning section). It ends with 12 specific Open Questions. Adding a new section requires careful integration. Editing `enes/desc.md` for a content move (rather than a content correction) introduces destabilization risk for marginal benefit. Most users approaching protocols/desc.md cold would benefit from seeing the load-bearing argument THERE, not having to navigate to enes/desc.md first.

**Defense.** Avoids duplication. Single source of truth. enes/desc.md is the right canonical home for "what unblocks Level 3."

**Collision.** Prosecution wins on coherence with the project-goal doc's stability. Defense's "single source of truth" principle is right in principle, but the practical cost (destabilization of a carefully-stabilized doc) outweighs the benefit (avoiding ~25 lines of duplication).

**Verdict: REFINE → P2.B.** The right move is to add the mapping in `protocols/desc.md` (P2.B) and add only a one-line back-reference from `enes/desc.md` if any back-link is desired (or skip even that — `protocols/desc.md` is reachable via `thinking_disciplines/` listing). Don't move the substantive content into the project-goal doc.

---

### P3.A — Footers in all 3 loop_design files

**Landscape position preview:** Viable — symmetric back-references; modest maintenance burden.

**Prosecution.** 3 files to maintain. If `loop_design_1.md` evolves to a different framing, all 3 footers may need rewording (the description of "what protocols/desc.md is" might change). Symmetric treatment isn't worth the maintenance burden when targeted treatment serves the same purpose.

**Defense.** Reader of any loop_design file sees the cross-link. Symmetric.

**Collision.** Prosecution's maintenance burden is light (3 lines × 3 files = 9 lines), but real. Defense's "any reader sees it" is mild value — readers in `loop_design_2.md` (a `/MVL` deep walkthrough) are typically there for `/MVL`-specific information; they don't need a protocols cross-reference at that depth.

**Verdict: SURVIVE — but P3.B is leaner with same essential value.**

---

### P3.B — Footer only in loop_design_1.md

**Landscape position preview:** Viable — targeted; correct minimum.

**Prosecution.** Reader of `loop_design_2.md` or `loop_design_3.md` doesn't see the back-link. They have to navigate to `loop_design_1.md` first.

**Defense.** Targeted to where the cross-reference is most relevant. `loop_design_1.md` is the cross-runner taxonomy; `protocols/desc.md` is the cross-runner concept-first view. Pairing them in the cross-runner doc is structurally aligned. Per-runner files (2, 3) are about specific runner choices, where the back-link is less relevant.

**Collision.** Prosecution's "reader of 2 or 3 won't see the back-link" is light — those readers are in a runner-specific doc; if they need the cross-runner concept view, they navigate to `loop_design_1.md` anyway, where the back-link IS present.

**Verdict: SURVIVE — clean.** Targeted is correct.

---

### P3 — Skip (no back-link)

**Landscape position preview:** Boundary — asymmetric reference.

**Prosecution.** P2 establishes forward link (protocols → loop_design); skipping P3 means no back-link. Asymmetric. Reader of loop_design has no pointer to protocols/desc.md.

**Defense.** Cheapest. P2's forward link is sufficient for users who start in protocols/desc.md.

**Collision.** Reader-of-loop_design pattern is real — the user wrote `loop_design_1/2/3.md` this session and is actively navigating between them. Asymmetric reference creates a real navigation gap. Prosecution wins on navigability.

**Verdict: REFINE → P3.B.** Skip is too austere; P3.B is the right minimum.

---

### P4.A — Defer with named trigger

**Landscape position preview:** Viable — sequencing-respect maximal.

**Prosecution.** When `/intuit` Phase A produces iteration data, integration starts from zero. No spec drafted. Time-to-integration is the cost.

**Defense.** Lowest-risk position. Honest about uncertainty. Respects sequencing constraint from `enes/desc.md` (HIGH weight). Doesn't speculate on shape. If `/intuit` Phase A reveals VERSION's needs differently than expected, P4.A is unaffected; speculative-design candidates would have to throw their work away.

**Collision.** Prosecution's "starts from zero" is real but small — designing VERSION's spec is hours of work, not weeks. Defense's "respects sequencing + lowest-risk" wins decisively on sequencing-respect (HIGH weight).

**Verdict: SURVIVE — clean.**

---

### P4.B — Spec now, integrate later

**Landscape position preview:** Boundary — speculative-design risk vs faster downstream integration.

**Prosecution.** Speculative — designing VERSION's spec before `/intuit` Phase A produces concrete needs may produce wrong-shape spec. The risk is precedent ossification: a half-finished spec tends to become the answer ("we already designed it this way; let's just implement"). Future readers see the spec and assume it's load-bearing, even if it was meant as a draft. The speculative-design failure mode (#5 in sensemaking) was explicitly flagged.

**Defense.** When `/intuit` Phase A ships, integration is faster (spec exists). Forces clarity now about what VERSION should do. Even if the spec is partly wrong, the structured thinking benefits remain.

**Collision.** Prosecution's "precedent risk" is real. P4.B's stated form ("design only, don't integrate") preserves the option to discard, but only if the user is disciplined about treating the spec as draft. In practice, drafts ossify. Defense's "speed-to-integration" gain is real but may be offset by the rewrite cost if the spec turns out wrong.

**Verdict: SURVIVE-with-caveat.** Viable if the user actively values having a draft ready AND commits to discarding it without sentiment if /intuit Phase A reveals different needs. Otherwise P4.A is the safer default.

---

### P4.C — Build VERSION now, light implementation

**Landscape position preview:** Dead — sequencing violation.

**Prosecution.** Speculative + premature. Loops 3 commits ahead of `/intuit` Phase A. Per-iteration sub-folders is a specific implementation choice that may not match Baldwin's actual needs. If wrong, undoing is more expensive than reverting doc edits — there's now an implementation in `/MVL` and `/MVL+` that produces side effects (creates folders, modifies state). `enes/desc.md` is explicit that `/intuit` Phase A is the immediate next step; building VERSION now violates that even if the implementation is small.

**Defense.** Closes the iteration-loss gap immediately. Provides concrete iteration history for any future calibration work.

**Collision.** Prosecution wins on sequencing-respect (HIGH weight). The cost of being wrong about Baldwin's needs is higher than the cost of waiting. The iteration-loss "gap" is theoretical — no current capability needs iteration history.

**Verdict: KILL — sequencing violation.** Seed: if `/intuit` Phase A produces specific iteration-history needs that the current per-iteration-overwrite design doesn't satisfy, that's a concrete signal to design + build (P4.B → P4.C). But pre-empting with implementation is wrong sequencing.

---

### P4.D — Declare VERSION unnecessary

**Landscape position preview:** Dead — over-claim with weak evidence.

**Prosecution.** The argument relies on assuming `/intuit` invocation traces will contain enough version-history information for Baldwin calibration. That assumption is unverified. If wrong, Baldwin cycle has no comparison surface for non-/intuit-trace state changes (e.g., spec edits, discipline output evolution). Declaring VERSION unnecessary based on an unverified assumption forecloses options without evidence.

**Defense.** Skeptical position protects against building unnecessary infrastructure. Forces concrete justification before building.

**Collision.** Prosecution wins on the unverified-assumption concern. The skeptical position has merit as a HYPOTHESIS to test, but as a permanent disposition it overshoots — it makes a strong claim with weak evidence.

**Verdict: KILL.** Seed: at /intuit Phase A maturity (when invocation traces exist), re-run the analysis: do invocation traces contain enough version-history? If yes, VERSION may indeed be unnecessary. If no, VERSION is needed. Defer that analysis; don't pre-judge it now.

---

## Phase 3 — Verdicts (consolidated)

| Candidate | Verdict | Critical caveat |
|---|---|---|
| **P1.A** | SURVIVE — clean for role | Standalone undersells audit's value; pair with P2 |
| **P1.B** | SURVIVE-with-caveat | Symmetric column for alive protocols is marginal; high-value content matches P1.A |
| **P1.C** | KILL (for now) | Premature for single-author / current-scale; revisit at named triggers |
| **P2.A** | SURVIVE-with-caveat | Acceptable in Configuration α; insufficient if user wants load-bearing visible |
| **P2.B** | SURVIVE — clean | Optional: cross-reference enes/desc.md by section title for verification |
| **P2.C** | REFINE → P2.B | Destabilization risk on enes/desc.md outweighs duplication concern |
| **P3.A** | SURVIVE | P3.B is leaner with same essential value |
| **P3.B** | SURVIVE — clean | Targeted is correct |
| **P3 skip** | REFINE → P3.B | Asymmetric reference creates navigation gap |
| **P4.A** | SURVIVE — clean | None |
| **P4.B** | SURVIVE-with-caveat | Requires user discipline to discard draft if /intuit Phase A reveals different needs |
| **P4.C** | KILL | Sequencing violation |
| **P4.D** | KILL | Over-claim on unverified assumption |

---

## Phase 3.5 — Assembly Check

### Survivors entering assembly check

- **P1:** A (clean for role), B (clean fuller)
- **P2:** B (clean) — A acceptable as fallback in α
- **P3:** B (clean) — A acceptable
- **P4:** A (clean) — B viable for active-drafting users

### Configuration evaluation

#### Configuration α (P1.A + P2.A + skip + P4.A)

| Dimension | Score |
|---|---|
| Accuracy-preservation | HIGH (P1.A fixes errors) |
| Load-bearing-surfacing | LOW (P2.A doesn't surface autonomy mapping) |
| Sequencing-respect | HIGH (P4.A) |
| Navigability | LOW (no back-link in loop_design) |
| Maintenance-cost | LOW |
| Edit-cost | LOW (~30-45 min) |
| Reversibility | HIGH |

**Verdict: ACCEPTABLE FALLBACK** — viable if user wants minimum effort but undersells the audit's load-bearing finding.

#### Configuration β (P1.B + P2.B + P3.B + P4.A)

| Dimension | Score |
|---|---|
| Accuracy-preservation | HIGH (P1.B fixes + symmetric structure) |
| Load-bearing-surfacing | HIGH (P2.B autonomy mapping) |
| Sequencing-respect | HIGH (P4.A) |
| Navigability | HIGH (P2.B forward + P3.B back) |
| Maintenance-cost | MEDIUM (P1.B's symmetric column is light burden) |
| Edit-cost | MEDIUM (~1.5-2 hours) |
| Reversibility | HIGH |

**Adversarial test on β.**

**Prosecution.** β is the largest of the survivable configurations. The user may not actually need all of it. The build-trigger column for ALIVE protocols (P1.B's marginal addition over P1.A) is the most challengeable element — what value does specifying "what would invalidate RESUME" actually provide?

**Defense.** β is the only configuration where every dimension scores HIGH. The marginal cost of P1.B over P1.A (~10 lines) buys symmetric structure that anticipates Baldwin-cycle maturity. The marginal cost of P2.B over P2.A (~25 lines) buys the entire load-bearing-surfacing dimension — the audit's distilled value. The marginal cost of P3.B over skip (~3 lines) buys navigability. P4.A is free (just an annotation in P1).

**Collision.** Defense wins. β's compound benefit (every dimension HIGH) for ~1.5-2 hours of work is the highest value-per-effort configuration. Prosecution's "may not need all of it" is true for P1.B's symmetric column but the rest is core to the audit's value.

**Verdict: SURVIVE — recommended default.**

#### Configuration γ (P1.C + P2.B + P3.A + P4.B)

| Dimension | Score |
|---|---|
| Accuracy-preservation | HIGH (P1.C fixes via restructure) |
| Load-bearing-surfacing | HIGH (P2.B) |
| Sequencing-respect | MEDIUM (P4.B is borderline speculative) |
| Navigability | HIGH (P3.A + P1.C per-protocol pages) |
| Maintenance-cost | MEDIUM-HIGH (16 mini-sections + 3 footers) |
| Edit-cost | HIGH (~half-day) |
| Reversibility | MEDIUM (P1.C restructure is a one-way commitment) |

**Verdict: KILL as configuration** — its anchor (P1.C) is killed for current scale. If user wants γ-level ambition, replace P1.C with P1.B and γ collapses to enhanced β. Don't run γ as-is.

#### Configuration δ (P1.A + P2.C + P3.C + P4.D)

Anchors P2.C (REFINE → P2.B) and P4.D (KILL) are both invalidated. Configuration δ is incoherent given Phase 3 verdicts.

**Verdict: KILL.**

### Convergence check

Configuration β survives as the recommended default. Configuration α survives as fallback. γ and δ are killed.

The landscape is stable: critique confirmed innovation's recommendation with two refinements:
1. P1.C (innovation labeled as "deferred") is now explicitly KILLED for current scale with named revival triggers.
2. P2.C (innovation labeled as "contrarian, deferred") is now REFINED → P2.B (don't move content into enes/desc.md).

---

## Phase 4 — Coverage + Convergence

### Accumulator update

| Candidate | Verdict | Dimension that dominated |
|---|---|---|
| P1.A | SURVIVE | Accuracy-preservation (HIGH) |
| P1.B | SURVIVE-with-caveat | Accuracy-preservation + light maintenance |
| P1.C | KILL (deferred) | Edit-cost + premature for scale |
| P2.A | SURVIVE-with-caveat | Navigability only |
| P2.B | SURVIVE | Load-bearing-surfacing (HIGH) |
| P2.C | REFINE → P2.B | Sequencing-respect on enes/desc.md stability |
| P3.A | SURVIVE | Navigability (light maintenance trade) |
| P3.B | SURVIVE | Navigability (targeted) |
| P3 skip | REFINE → P3.B | Navigability gap |
| P4.A | SURVIVE | Sequencing-respect (HIGH) |
| P4.B | SURVIVE-with-caveat | Speculative-design risk |
| P4.C | KILL | Sequencing-respect violation |
| P4.D | KILL | Over-claim on unverified assumption |
| Configuration α | SURVIVE (fallback) | Edit-cost low; load-bearing-surfacing low |
| Configuration β | SURVIVE — recommended | All dimensions HIGH |
| Configuration γ | KILL | Anchor P1.C killed |
| Configuration δ | KILL | Anchors P2.C/P4.D killed |

### Coverage assessment

- All 3 P1 options evaluated.
- All 3 P2 options evaluated.
- All 3 P3 options (A, B, skip) evaluated.
- All 4 P4 options evaluated.
- 4 candidate configurations evaluated.
- No unexplored region likely to contain better candidates.

### Convergence signal: **TERMINATE**

- Clean SURVIVE exists: P1.B individually, P2.B individually, P3.B individually, P4.A individually, Configuration β as compound.
- Coverage comprehensive.
- Landscape stable; critique confirmed innovation's recommendation with two refinements (P1.C explicitly killed for current scale; P2.C refined to P2.B).

---

## Final Punch List

### Recommended: Configuration β (P1.B + P2.B + P3.B + P4.A)

#### Step 1 — Edit `thinking_disciplines/protocols/desc.md`: status table corrections (P1.A core)

**Locate the per-category protocol entries and apply these specific edits:**

**(a) Metadata injection** — currently in Persistence Protocols (around line 130). Replace status with:
> **Removed.** The `hooks/` directory was deleted in 2026-04. Replacement deferred — no current need; revive only if provenance headers become required for self-improvement traceability.

**(b) Archival** — currently in Persistence Protocols (around line 132). Replace with:
> **Removed as a standalone command.** Per-inquiry archival is now embedded in `/MVL` and `/MVL+`'s ITERATION-COMPLETE step (discipline outputs move to `docarchive/` when the finding is written). Cross-inquiry stale-detection (the original `/devdocs-archivist` use case) is currently absent.

**(c) RESUME** — currently in Transfer Protocols (around line 104). Replace "Currently lives inside `/inquiry`" with:
> **Implemented in all three loop runners** (`/MVL`, `/MVL+`, `/inquiry`). Each reads `_state.md` plus file-existence cross-check; same procedure, three implementations.

**(d) Folder convention** — currently in Persistence Protocols (around line 124). Update path from `devdocs/folder_based.md` to `enes/runtime_environment/folder_based.md` and remove the "not battle-tested" claim:
> Documented in `enes/runtime_environment/folder_based.md`. **Battle-tested** — every inquiry under `devdocs/inquiries/` follows this convention.

**(e) Current State count table** at line 138-143 — replace the existing 3-row table with:

```markdown
| Status | Count | Protocols |
|--------|-------|-----------|
| **Alive — embedded in commands** | 5 | CONFIGURE, STEER, TERMINATE, RESUME, SYNTHESIZE |
| **Alive — partial / generalized** | 3 | BRANCH (rationale only), folder convention, archival (runner-embedded) |
| **Alive — discipline component** | 1 | CV persistence (in `/comprehend`) |
| **Removed** | 2 | metadata injection, freshness checks (CLAUDE.md doesn't exist) |
| **Missing — needed for stated goals** | 6 | SCOPE, BRANCH (formal step), MERGE, HANDOFF, BRIEF, VERSION |
```

**(f) Inline build-trigger annotations** for each of the 6 missing-protocol entries (SCOPE, BRANCH, MERGE, HANDOFF, BRIEF, VERSION). Append to each entry:

- **VERSION (Persistence):** "**MISSING. Build trigger:** when `/intuit` Phase A starts producing iteration-comparable invocation traces. **Unblocks:** Baldwin cycle calibration. **Why deferred:** /intuit Phase A is the current immediate-next-step per `enes/desc.md`; VERSION's shape depends on what /intuit produces."
- **SCOPE (Pipeline):** "**MISSING. Build trigger:** autonomy ladder reaches Level 2. **Unblocks:** autonomy-level-aware effort calibration. **Why deferred:** Level 0 doesn't need scope-budgeting; human is bootstrap."
- **BRANCH (Pipeline):** "**MISSING (formal step). Build trigger:** parallel MVL loops capability begins (`enes/desc.md` Open Question #4). **Unblocks:** per-branch sub-pipelines after decomposition. **Why deferred:** no parallel-runs need yet."
- **MERGE (Pipeline):** "**MISSING. Build trigger:** depends on BRANCH. **Unblocks:** combining parallel-branch outputs. **Why deferred:** depends on BRANCH."
- **HANDOFF (Transfer):** "**MISSING. Build trigger:** autonomy ladder reaches Level 3+. **Unblocks:** full-context transfer to a different agent (human or AI). **Why deferred:** current Level 0-1 doesn't need cross-agent handoff."
- **BRIEF (Transfer):** "**MISSING. Build trigger:** same as HANDOFF. **Unblocks:** cold-start for an active-participant agent. **Why deferred:** same as HANDOFF."

#### Step 2 — Edit `thinking_disciplines/protocols/desc.md`: add Build-trigger column to category tables (P1.B addition)

For each of the 3 category tables (Pipeline, Transfer, Persistence), restructure to add a "Build trigger / invalidation condition" column. For ALIVE protocols, the column states "what would mark this as no longer alive" (e.g., for RESUME: "if a future loop runner ships without RESUME support — flag as drift"). For MISSING protocols, the column repeats the build trigger from Step 1(f).

**This step is OPTIONAL** — the high-value content (missing-protocol triggers) is already captured by Step 1(f) inline annotations. P1.B's symmetric column is light prep for Baldwin-cycle maturity (when alive protocols may need a "Last calibrated" column). User may skip this and stay with P1.A inline-only triggers without losing critical value.

#### Step 3 — Edit `thinking_disciplines/protocols/desc.md`: add cross-reference section (P2.A core)

Add a new section near the existing "How Protocols Relate to Disciplines" section (around line 150-159):

```markdown
## How Protocols Relate to Loop Runners

The project has three loop runners (`/MVL`, `/MVL+`, `/inquiry`) that embed several of the named protocols. For runner-by-runner choices on each operational dimension (drive mode, state tracking, steering component, iteration files, pipeline flexibility, branch parallelism, synthesis, cross-inquiry learning), see:

- `enes/loop_desing_ideas/loop_design_1.md` — cross-runner taxonomy of design dimensions
- `enes/loop_desing_ideas/loop_design_2.md` — `/MVL` deep walkthrough
- `enes/loop_desing_ideas/loop_design_3.md` — `/MVL+` deep walkthrough

Loop_design is runner-first; this document is concept-first. Both views are needed: a reader investigating "what does `/MVL+` do?" goes to loop_design; a reader asking "is there a way to handoff context?" goes here.
```

#### Step 4 — Edit `thinking_disciplines/protocols/desc.md`: add autonomy-ladder mapping (P2.B addition)

Add a new section, immediately after Step 3's section:

```markdown
## How the Missing Protocols Connect to the Autonomy Ladder

The 6 missing protocols are not arbitrary gaps. Each maps to a specific capability that the project's stated long-term goal (`enes/desc.md`, see "The Trajectory — Subconscious to Consciousness" and "The Human's Role" sections) commits to. A future where the project reaches Level 3+ autonomy without these protocols built is structurally inconsistent — the autonomy capability has nothing to operate on.

| Missing Protocol | Autonomy-Ladder Capability It Unblocks | Source in `enes/desc.md` |
|---|---|---|
| **VERSION** | Baldwin cycle calibration — comparing Predictive RC predictions at T0 to Retrospective RC outcomes at T2+ requires iteration history | "The Evolutionary Mechanism — Baldwin Cycles" section |
| **SCOPE** | Autonomy-level-aware effort calibration — Level 2 ("reviews uncertain only") requires distinguishing routine from uncertain | "The Human's Role" table, Level 2 row |
| **BRANCH (formal step)** | Parallel MVL loops with per-branch sub-pipelines | Open Question #4 |
| **MERGE** | Combining results across parallel branches | Open Question #4 (same) |
| **HANDOFF** | Cross-agent or cross-session full-context transfer | Level 3+ ("System handles tactical self-improvement") |
| **BRIEF** | Cold-start for an active-participant agent | Same as HANDOFF (different shape) |

Build sequencing for these protocols matches autonomy-ladder progression: VERSION earliest (when /intuit Phase A produces iteration-comparable traces), SCOPE next (Level 2), BRANCH/MERGE in parallel-loops design (Level 2-3), HANDOFF/BRIEF latest (Level 3+).
```

#### Step 5 — Edit `enes/loop_desing_ideas/loop_design_1.md`: add reciprocal back-reference (P3.B)

In `loop_design_1.md`, add a "See also" callout near the "Design Principles" section:

```markdown
> **See also:** `thinking_disciplines/protocols/desc.md` is the concept-first taxonomy of operational concerns (named protocols, status, build triggers). This document is runner-first; protocols/desc.md is named-protocol-first. Both views are complementary.
```

#### Step 6 — VERSION decision: defer with named trigger (P4.A)

No build action. The VERSION trigger is documented in Step 1(f). The decision is recorded in this finding. Revisit at trigger.

---

### Fallback: Configuration α (minimum effort)

If user wants minimum-effort intervention:
- Run **Step 1 only** (status table corrections + inline missing-protocol triggers).
- Add **Step 3 only** (cross-reference section, without the autonomy-ladder mapping in Step 4).
- Skip Step 2 (P1.B's symmetric column).
- Skip Step 5 (P3 reciprocal link).
- Step 6 unchanged (VERSION deferred with trigger).

Net effort: ~30-45 min. Trade-off: load-bearing-for-stated-goal claim is not visible to readers; reader must do the cross-doc analysis themselves.

---

### Killed configurations (with revival triggers)

- **Configuration γ (P1.C ADR restructure):** revisit if (a) multiple authors begin editing protocols/desc.md regularly, OR (b) the doc grows past ~400 lines, OR (c) any 2 of the 6 missing protocols get implemented.
- **Configuration δ (P2.C move + P4.D declare unnecessary):** revisit P4.D specifically at /intuit Phase A maturity (when invocation traces exist) — re-run the analysis: do the traces contain enough version-history? If yes, VERSION may be unnecessary. P2.C is rejected and unlikely to be revived (touches a stable doc).
- **P4.C (build VERSION now):** revisit if /intuit Phase A produces specific iteration-history needs that the current per-iteration-overwrite design doesn't satisfy.

---

## Convergence Telemetry

- **Dimensions evaluated:** 7 dimensions, all critical-weight covered for every candidate. YES on full coverage.
- **Adversarial strength:** STRONG. Prosecution challenged each candidate's strongest dimension (e.g., P1.B's marginal-value column, P2.B's drift risk, β's "may not need all of it"). Defense had to genuinely answer.
- **Landscape stability:** STABLE — confirmed innovation's recommendation with two specific refinements (P1.C explicitly killed for current scale; P2.C refined to P2.B). No new regions discovered.
- **Clean SURVIVE:** YES — P1.A, P2.B, P3.B, P4.A individually clean; Configuration β as compound clean.
- **Failure modes observed:** none. No rubber-stamping (multiple KILLs present and reasoned). No nitpicking (verdicts are severity-weighted; minor concerns become caveats not kills). No wrong dimensions (validated against sensemaking perspectives in Phase 0). No false convergence (assembly check considered alternatives γ and δ explicitly and killed both with reasoning). No evaluation drift (same dimensions applied across all candidates).
- **Overall: PROCEED.** Configuration β confirmed as recommended default with α as fallback. Punch list is actionable with proposed wording.
