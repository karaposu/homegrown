---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: articulate_simple Doc — Structural Re-Audit Post-Applications

## Question

From `_branch.md`:

**Question:** Given the recent applications of MQ4 Boundary + Substrate-vs-Intra orthogonal axis MUSTs to `devdocs/how_articulate_simple_should_be.md`, what structural staleness has accumulated across 10 audit dimensions and what bounded-scope corrections are recommended (honoring Bootstrap-lock-simplest from prior structural-layer inquiry at `2026-06-06_09-58`)?

**Goal:** Concrete findings + per-item fixes + apply-now-vs-defer recommendations + explicit Bootstrap respect.

**Layer Commitment:** STRUCTURAL only. Meaning + process layer items flagged where they surface but not adjudicated.

---

## Finding Summary

- **Verdict — 4 bounded text-level MUSTs + 1 COULD + 4 inherited-deferral honors + 1 watch-trigger + 2 reusable meta-patterns.** All MUSTs are small, locally-bounded edits to `devdocs/how_articulate_simple_should_be.md`; no section restructure; no renumbering; no new sub-sections. Bootstrap-lock-simplest at doc-level (from `2026-06-06_09-58` finding) still governs.

- **MUST-1 — §11 inheritance map, row 10 text sync.** The row currently reads *"MQ-aggregate-resolution (4th internal Meta-question step)"*. The §2.2.6 heading was updated to *"the final internal step"* during MQ4's application (because MQA is now the 5th step after MQ4 was added, but the heading uses the count-independent phrasing). Sync the row to match: change to *"MQ-aggregate-resolution (the final internal step)"*. Avoids count-creep risk from future MQ additions.

- **MUST-2 — §11 inheritance map, row 16 honest reframe.** The row currently over-claims by stating *"promotion of two-pass design to next-inquiry status"* — but §9 still says *"separate construction"* because the user explicitly deferred §9's structural-layer promotion. The row text should describe what's actually applied to the doc + honestly acknowledge the user-deferral. Suggested phrasing:
  > *"Substrate-MQ vs Intra-articulate-MQ orthogonal consumer axis + PERMISSION-not-CONSTRAINT framing for cold-context mitigations + recognition that the two-pass design is the structural resolution of overreach for Substrate-MQs (the structural §9 update from this finding is deferred per user choice; the finding's meaning-layer commitment to promotion stands)"*

- **MUST-3 + MUST-4 — Marginal notes at §6 + §9 acknowledging stale-spec-pointer.** Both §6 and §9 reference `cognitive_harness/task-define/references/task-define.md`. The user explicitly abandoned that spec at this session's earlier task-define discussion; the 09-58 finding's M4-M7 spec content-sync MUSTs were deferred as a result. The references now point at a no-longer-maintained spec. **The structurally honest fix** (per Bootstrap-lock-simplest + honest-acknowledgment principle inherited from prior task-define inquiries) is to append a brief parenthetical at each reference: *"(legacy; no longer actively maintained)"*. This preserves the navigation hook (reader can still find the path) + transparently signals the legacy status (reader knows not to expect current content).

- **COULD — MQ4 empty-rendering uniformity across Examples A/B/C.** Each example currently has slightly different "empty" phrasing: Example A *"empty (cold-context single task; no extrinsic exclusion declarations visible in session)"*; Example B Item 1 *"empty (no extrinsic exclusions perceivable; 'don't redesign' is intrinsic anti-intent in MQ3's territory)"*; Example B Item 2 *"empty."*; Example C *"empty as extrinsic enumeration ... canonical case where MQ4 stays empty and MQ3+MQA handle the work; see §2.2.4 for the routing distinction"*. The variation is contextually appropriate (each rendering serves its example's pedagogical role), so normalization is **optional polish** — pedagogical variation is feature, not bug.

- **Inherited deferrals respected:**
  - **§9 promotion** — user-explicit deferral; no §9 text update at this audit
  - **§2.5 Rephrase expansion** — `2026-06-06_10-37` finding's D2 deferral; revival-trigger = user reports confusion about Rephrase behavior, not observed at audit time
  - **M4-M7 spec content-sync** at `cognitive_harness/task-define/references/task-define.md` — user-explicit deferral via task-define abandonment; consequence (stale-spec-pointers at §6+§9) addressed via MUST-3+MUST-4 marginal notes
  - **§11 inheritance map restructure** — `2026-06-06_09-58` finding's D3 deferral; revival-trigger ~20 rows OR ~3 supersessions accumulated; currently at 16 rows; flagged in watch-trigger

- **Watch-trigger flagged.** §11 inheritance map is at 16 rows of 20 (the prior structural-layer inquiry's restructure trigger). The next inquiry that adds rows to §11 should evaluate whether the 20-row threshold OR the 3-supersession threshold has been reached and, if so, initiate the §11 restructure work.

- **All 3 inherited priors preserved at essence:**
  - `2026-06-06_09-58` Bootstrap-lock-simplest at doc-level + stale-spec-pointer-as-failure-mode — **STANDS**; stale-pointer failure mode REACTIVATED at marginal-fix scope; addressed via MUST-3+MUST-4
  - `2026-06-06_10-37` MQ4 Boundary commitment + M1-M5 MUSTs — **STANDS**; Example D + §2.2.4 + MQA scope extension + §6 bundle + §13 example all work correctly
  - `2026-06-06_11-16` Substrate-vs-Intra + PERMISSION-not-CONSTRAINT + two-pass promotion — **STANDS** at meaning-layer; §2.2.7 + cross-section notes in §2.2.2 + §2.2.4 in place; §9 promotion deferred per user; row 16 reframe (MUST-2) addresses the over-claim honestly

- **Four meta-patterns extracted (reusable beyond this inquiry):**
  1. **Bounded-scope-or-defer test as audit discipline** — the operational test the audit applies throughout: if the structural fix is bounded-scope, apply now; if cascading, defer with revival-trigger. Reusable as audit framework for future doc-evolution moments.
  2. **Marginal-note as honest-acknowledgment intervention shape** — when an inherited deferral creates a stale reference, mark the reference with a brief parenthetical instead of removing it. Preserves navigation + signals legacy status. Reusable wherever "(legacy / TBD / superseded / deferred-trigger-fires-when-X)" style notes apply.
  3. **Audit-as-today-fix-plus-tomorrow-flag-plus-reusable-principle triad** — an audit's structural value is the triad, not just the apply-now list. Forward-looking flags + named reusable patterns are first-class audit outputs. Reusable as audit-output framework.
  4. **Inheritance preservation via row-text reframes** — when a partial application produces an over-claim in an inheritance map, the fix is to reframe the row text (not change the doc's other text the row references). Reusable for any partial-application coherence gap in inheritance tracking.

---

## Finding

### Small surrounding context

This inquiry re-audits `devdocs/how_articulate_simple_should_be.md` after this session's substantial MUST applications from two recent meaning-layer findings:

- `2026-06-06_10-37` (MQ4 Boundary) — 5 MUSTs applied earlier this session: added §2.2.4 MQ4 sub-section, updated typology from 3-type to 4-type (Structural / Relational / Interpretive / Boundary), extended §2.2.6 (formerly §2.2.5) MQA scope to 4-MQ set, renumbered §2.2.4/§2.2.5 (bounded-extensibility + MQA) → §2.2.5/§2.2.6, added MQ4 entries to Examples A/B/C, added new Example D demonstrating MQ4 firing.

- `2026-06-06_11-16` (Substrate-vs-Intra + Overreach + Two-Pass Promotion) — 2 of 3 MUSTs applied: added new §2.2.7 Substrate-MQ vs Intra-articulate-MQ sub-section, added PERMISSION-not-CONSTRAINT framing notes in §2.2.2 + §2.2.4. The third MUST (§9 promotion text update) was explicitly deferred by the user.

Both applications touched many places in the doc. Section renumbering, table updates, vocabulary introductions, cross-references, and new examples all happened in sequence. The prior structural-layer inquiry at `2026-06-06_09-58` committed Bootstrap-lock-simplest at doc-level as the governing principle for doc-evolution decisions. This re-audit operates under that principle: it identifies concrete staleness post-applications and recommends bounded-scope corrections honoring user-deferrals.

### 1. Why bounded MUSTs and not a comprehensive restructure

Position D from the prior structural-layer inquiry committed **Bootstrap-lock-simplest at doc-level** as the operational test: *"is the structural fix bounded-scope? If yes, apply now. If cascading or speculative without empirical signal, defer with explicit revival-trigger."* This audit applies that test throughout.

- **Bounded-scope, apply now (MUSTs):** §11 row 10 text sync; §11 row 16 honest reframe; §6 + §9 marginal notes. Each is a small, locally-bounded edit. No section move, no renumbering, no new sub-sections.

- **Cascading or speculative, defer (with revival-triggers):** §9 promotion update (user-explicit deferral); M4-M7 spec content-sync at `task-define/references/task-define.md` (user-explicit deferral via task-define abandonment); §2.5 Rephrase expansion (10-37 deferred; revival = user-confusion-signal); §11 inheritance map restructure (under 20-row threshold).

The piece-level Inversion at Innovation explicitly tested the alternative — "comprehensive restructure: apply ALL findings + restructure §11 + sync M4-M7 + remove all stale references" — and rejected it on Bootstrap + cascading-cost + user-deferral grounds. The bounded-MUSTs verdict is opinionated, not hedge.

### 2. The §11 inheritance map text-sync edits

Two of the four MUSTs are simple text edits to existing rows of `devdocs/how_articulate_simple_should_be.md` §11:

**Row 10:** *"MQ-aggregate-resolution (4th internal Meta-question step)"* → *"MQ-aggregate-resolution (the final internal step)"*.

The reason: during MQ4 application, the §2.2.6 heading was changed from *"the 4th internal step"* to *"the final internal step"* specifically to avoid count-creep when MQs are added. MQA is now numerically the 5th internal step (1=MQ1, 2=MQ2, 3=MQ3, 4=MQ4, 5=MQA), but the heading uses the count-independent phrasing. The §11 row's parenthetical was missed during the application sweep — this sync fixes the internal text inconsistency.

**Row 16:** *"promotion of two-pass design to next-inquiry status"* → *"Substrate-MQ vs Intra-articulate-MQ orthogonal consumer axis + PERMISSION-not-CONSTRAINT framing for cold-context mitigations + recognition that the two-pass design is the structural resolution of overreach for Substrate-MQs (the structural §9 update from this finding is deferred per user choice; the finding's meaning-layer commitment to promotion stands)"*.

The reason: the row's current phrasing over-claims against §9. The user explicitly deferred the §9 text update from "separate construction" to "next inquiry," but the §11 row was written as if the §9 update had happened. The honest reframe describes what's actually in the doc (the Substrate-vs-Intra axis + PERMISSION-not-CONSTRAINT framing — both ARE applied) + acknowledges the user-deferral (§9 update was deferred but the finding's meaning-layer commitment stands).

This second edit is the structurally interesting one. It enacts the **inheritance preservation via row-text reframes** meta-pattern: when partial application produces a coherence gap, fix the inheritance map's row text (which is in scope per Bootstrap-lock-simplest), not the deferred §9 update (which is explicitly out of scope per user choice).

### 3. The §6 + §9 marginal notes — honest acknowledgment of stale-spec-pointers

Both §6 and §9 of the doc reference `cognitive_harness/task-define/references/task-define.md` as the structural-layer spec target. That spec is no longer being maintained — the user abandoned `task-define.md` earlier in this session ("we don't care about task-define.md anymore"), which is why the 09-58 finding's M4-M7 spec content-sync MUSTs were deferred.

The references now point at a stale spec. The 09-58 finding explicitly named **stale-spec-pointer** as a structural failure mode of doc + spec pair drift. Leaving the references unmarked silently routes future readers to deprecated content.

Four candidate fixes were considered:

- **(a) Leave as-is** — propagates the failure mode silently; violates honest-acknowledgment principle
- **(b) Add marginal note** — minimal text edit; preserves navigation; signals legacy status — **WINS**
- **(c) Remove references entirely** — too aggressive; loses navigation hook; over-scope per Bootstrap
- **(d) Replace with placeholder** — equivalent to (b) at minimum; heavier in practice

Option (b) was selected: append *"(legacy; no longer actively maintained)"* parenthetical at each reference. This is the structurally honest minimum: the reader still sees where the legacy spec lives (navigation preserved) + immediately knows its content is no longer current (honest-acknowledgment).

This enacts the **marginal-note as honest-acknowledgment intervention shape** meta-pattern: when an inherited deferral creates a stale reference, mark it (don't remove). The pattern is reusable for any future doc-evolution moment where a deferral produces a stale-pointer side-effect.

### 4. The MQ4 empty-rendering uniformity COULD

Examples A, B (two items), and C each show MQ4 with slightly different "empty" phrasings:

- Example A: *"empty (cold-context single task; no extrinsic exclusion declarations visible in session)"*
- Example B Item 1: *"empty (no extrinsic exclusions perceivable; 'don't redesign' is intrinsic anti-intent in MQ3's territory)"*
- Example B Item 2: *"empty."*
- Example C: *"empty as extrinsic enumeration (no exclusions declared outside the task statement); the intrinsic 'from scratch' anti-intent flows through MQ3 + MQA, not MQ4. (This is the canonical case where MQ4 stays empty and MQ3+MQA handle the work; see §2.2.4 for the routing distinction.)"*

The variation is pedagogically purposeful: Example A is general-case; Example B Item 1 illustrates intrinsic-vs-extrinsic routing; Example B Item 2 is terser because Example B Item 1 already established the pattern; Example C is the canonical fresh-start case requiring its routing-rule footnote. **Each rendering serves its example's narrative role.**

Normalization (e.g., picking *"empty (cold-context; no extrinsic exclusions perceivable)"* as the canonical short phrasing and applying to A/B/C) is **cosmetic uniformity, not structural correction**. It's a COULD — apply if visual uniformity is preferred; leave if pedagogical variation is preferred. Either choice is acceptable.

### 5. The §11 watch-trigger and the 20-row threshold

The §11 inheritance map currently has 16 content rows. The prior structural-layer inquiry committed a deferred restructure with revival-trigger: *"~20 rows accumulated in §11 OR ~3 supersession-chains observed."* Neither threshold is reached yet (16 < 20; supersession chains visible but not at 3-yet).

The next inquiry that adds rows to §11 should evaluate whether either threshold has been reached. If yes, the §11 restructure work should initiate as its own scoped inquiry (group by operation; add supersession-tracking columns; etc.). If no, continue flat-table appendation.

This is the **forward-looking flag** dimension of the audit's output triad.

### 6. Four meta-patterns extracted (reusable beyond this inquiry)

The audit surfaced four reusable structural-recommendation principles:

1. **Bounded-scope-or-defer test as audit discipline.** The operational test the audit applies throughout. For each piece of staleness: if bounded-scope (text-level; no cascade), apply now; if cascading (touches multiple sections; spec rename; folder restructure), defer with explicit revival-trigger. Reusable as audit framework for future doc-evolution moments.

2. **Marginal-note as honest-acknowledgment intervention shape.** When an inherited deferral creates a stale reference (e.g., user defers spec sync → existing spec references become stale), mark the reference with a brief parenthetical instead of removing it. Preserves navigation + signals legacy status. Reusable wherever "(legacy / TBD / superseded / deferred-trigger-fires-when-X)" style notes apply.

3. **Audit-as-today-fix-plus-tomorrow-flag-plus-reusable-principle triad.** An audit's structural value is the triad, not just the apply-now list. Forward-looking flags (watch-triggers for future inquiries) + named reusable patterns (meta-pattern documentation) are first-class audit outputs alongside today's fix list. Reusable as audit-output framework.

4. **Inheritance preservation via row-text reframes.** When a partial application produces an over-claim in an inheritance map (because the meaning-layer commitment was made but the structural-layer application was partial), the fix is to reframe the row text (which is in scope) rather than change the doc text the row references (which may be out of scope per user choice). The row is the inheritance map's responsibility; the doc text it references has its own responsibility chain.

These patterns generalize beyond this inquiry. Future inquiries that face similar moments (large MUST-application followed by sweep audit; inherited-deferral creating stale-pointer; partial-application coherence gap) can apply them by name.

---

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger inheriting from 3 priors. Per CONCLUDE protocol, each is re-tested.

### `devdocs/inquiries/2026-06-06_09-58__articulate_simple_doc_structural_layer_deepdive/finding.md`

- **Commitment:** Bootstrap-lock-simplest at doc-level as governing principle; stale-spec-pointer as named structural failure mode; doc-vs-spec dual-truth as explicit structural commitment; 4 meta-patterns.
  - **Re-test status:** **RE-TESTED — STANDS**
  - **Evidence:** Bootstrap-lock-simplest at doc-level applied throughout this audit (operational test = bounded-scope-or-defer). Stale-spec-pointer failure mode REACTIVATED at marginal-fix scope at §6 + §9; addressed via MUST-3 + MUST-4 marginal notes (honest acknowledgment without removal). Doc-vs-spec dual-truth preserved structurally; the marginal notes flag the legacy status of the spec target without removing the dual-truth structure.

### `devdocs/inquiries/2026-06-06_10-37__articulate_scope_boundary_perception/finding.md`

- **Commitment:** MQ4 Boundary as 4th base meta-question + 4-type taxonomy + cold-empty-valid rule + 5 downstream consumers + 5 MUSTs (M1-M5).
  - **Re-test status:** **RE-TESTED — STANDS**
  - **Evidence:** All 5 MUSTs applied earlier this session: §2.2.4 MQ4 sub-section + typology update to 4-type + §2.2.6 MQA scope extension + §6 bundle entry + new Example D. Audit confirms each application is structurally coherent — Example D demonstrates MQ4 firing on extrinsic exclusion; §2.2.4 has generic-application warning paralleling MQ1/MQ2/MQ3; §2.2.6 MQA correctly handles 4-MQ set; §6 contract matches Example D's bundle structure.

### `devdocs/inquiries/2026-06-06_11-16__mqs_as_seed_qa_overreach_two_pass/finding.md`

- **Commitment:** Position D HYBRID — Substrate-MQ vs Intra-articulate-MQ orthogonal axis + PERMISSION-not-CONSTRAINT framing for cold-context mitigations + promotion of 00-11 two-pass design from "separate construction" to "next inquiry" + 3 MUSTs (Substrate-vs-Intra sub-section + PERMISSION-not-CONSTRAINT note + §9 promotion text update).
  - **Re-test status:** **RE-TESTED — STANDS at meaning-layer; structural-layer partial application acknowledged honestly**
  - **Evidence:** 2 of 3 MUSTs applied — §2.2.7 Substrate-MQ vs Intra-articulate-MQ sub-section in place; PERMISSION-not-CONSTRAINT notes at §2.2.2 and §2.2.4 in place. The third MUST (§9 promotion text update) was explicitly DEFERRED by user choice. Row 16 of §11 inheritance map was written as if the §9 update had happened — this is the over-claim addressed by MUST-2 reframe. The meaning-layer commitment (promote 00-11 to next inquiry) STANDS at the finding level; the structural-layer application (update §9 text) is deferred until user authorizes. Row text reframe honors this honestly.

All 3 inherited priors preserved at essence. One (11-16) has a partial-application coherence gap that MUST-2 addresses via row-text reframe.

---

## Next Actions

### MUST

- **What:** Apply MUST-1 — sync §11 inheritance map row 10 text to match §2.2.6 heading. Replace *"MQ-aggregate-resolution (4th internal Meta-question step)"* with *"MQ-aggregate-resolution (the final internal step)"*.
  - **Who:** doc maintainer (structural-layer follow-up)
  - **Gate:** condition-bound — apply when user is ready to commit the structural revision
  - **Why:** internal text consistency — the §2.2.6 heading already says *"the final internal step"* (count-independent), but the §11 row's parenthetical lags. Bounded-scope text edit.

- **What:** Apply MUST-2 — reframe §11 inheritance map row 16 text to honestly describe what's applied + acknowledge user-deferral. Replace *"promotion of two-pass design to next-inquiry status"* with the suggested phrasing in §6 of this finding's body (the Substrate-vs-Intra + PERMISSION-not-CONSTRAINT + recognition + §9-deferral-acknowledgment phrasing).
  - **Who:** doc maintainer
  - **Gate:** condition-bound — apply alongside MUST-1
  - **Why:** resolves the over-claim coherence gap between §11 row 16 and §9's deferred text. Enacts the **inheritance preservation via row-text reframes** meta-pattern.

- **What:** Apply MUST-3 — append marginal note at §6's reference to `cognitive_harness/task-define/references/task-define.md`. Suggested: append *"(legacy; no longer actively maintained)"* after the reference path.
  - **Who:** doc maintainer
  - **Gate:** condition-bound — apply alongside MUST-1+2
  - **Why:** acknowledges the inherited stale-spec-pointer failure mode honestly without removing navigation hook. Enacts the **marginal-note as honest-acknowledgment** meta-pattern.

- **What:** Apply MUST-4 — append same marginal note at §9's reference to the same spec path.
  - **Who:** doc maintainer
  - **Gate:** condition-bound — apply alongside MUST-3
  - **Why:** symmetry with §6's marginal note. Both stale-pointers marked.

### COULD

- **What:** Normalize MQ4 empty-rendering uniformity across Examples A, B (both items), and C. Pick a canonical short phrasing (e.g., *"empty (cold-context; no extrinsic exclusions perceivable)"*) and apply consistently; OR leave as-is to preserve each example's pedagogical narrative role.
  - **Who:** doc maintainer
  - **Gate:** condition-bound — apply if visual uniformity is preferred; leave if pedagogical variation is preferred
  - **Why:** cosmetic uniformity; pedagogical variation is feature not bug; either choice is acceptable per VK12 + critique D14.

- **What:** When task-define spec is fully retired OR fully synced (whichever direction), revisit the marginal notes at §6 + §9 — they may themselves become stale and need removal (if retired) or removal-of-marginal-only (if synced).
  - **Who:** future doc maintainer / future inquiry triggered by task-define fate-decision
  - **Gate:** condition-bound — observable when task-define spec status changes (retired OR synced)
  - **Why:** marginal-note maintenance is its own responsibility; future-resolved spec state may make the marginal notes themselves stale (per critique P2 sub-finding 1).

- **What:** Consider documenting the 4 meta-patterns extracted by this audit at a project-level meta-pattern reference doc if one exists; otherwise the finding's Reasoning section is the home.
  - **Who:** project architect
  - **Gate:** condition-bound — when project-level meta-pattern documentation is valuable
  - **Why:** the patterns generalize beyond this inquiry; named patterns are easier to recall and apply than unnamed practice (per critique P3 sub-finding 2).

### DEFERRED

- **What:** §9 promotion text update (from "separate construction" to "next inquiry") — the original third MUST of `2026-06-06_11-16`.
  - **Gate:** condition-bound — when user authorizes the §9 update
  - **Why:** user explicitly deferred this MUST during the prior inquiry's application; the meaning-layer commitment stands in the 11-16 finding; the structural-layer application is the deferred work.

- **What:** §2.5 Rephrase sub-section expansion — original `2026-06-06_10-37` D2 deferred item.
  - **Gate:** observable — user reports confusion about Rephrase behavior OR downstream consumers misuse Rephrase output
  - **Why (if revived):** §2.5 is structurally light (~13 lines) relative to its "load-bearing safety mechanism" claim; expansion clarifies behavior for downstream consumers when needed.

- **What:** M4-M7 spec content-sync at `cognitive_harness/task-define/references/task-define.md` — original `2026-06-06_09-58` MUSTs deferred per user's task-define abandonment.
  - **Gate:** condition-bound — if user un-abandons task-define OR a successor spec is initiated
  - **Why (if revived):** the spec was the canonical structural-layer reference target; if a successor spec is initiated, content-sync work transfers to that target.

- **What:** §11 inheritance map restructure — original `2026-06-06_09-58` D3 deferred item.
  - **Gate:** condition-bound — §11 reaches 20 rows OR ~3 supersession-chains accumulated (currently at 16 rows; not at threshold)
  - **Why (if revived):** at-a-glance scanning becomes painful past ~20 flat rows; restructure (group by operation; add supersession-tracking columns) aids navigation.

---

## Reasoning

### Why bounded MUSTs and not comprehensive restructure

The piece-level Inversion at Innovation explicitly tested the alternative — apply ALL findings + restructure §11 + sync M4-M7 + remove all stale references. The 5-test failed on:

- **Bootstrap violation:** the alternative violates the doc-level Bootstrap-lock-simplest principle that the prior structural-layer inquiry committed
- **Cascading cost:** comprehensive restructure touches many sections; spec content-sync involves cascading paths; removal of stale-pointers loses navigation
- **User deferral overriding:** §9 promotion and M4-M7 sync are user-explicit deferrals; overriding them ignores user choice
- **Over-scope:** the audit's scope is "what staleness exists post-application?" not "redo all prior deferred work"

The bounded-MUSTs verdict is the right scope — it closes the visible gaps without compromising any deferral.

### Why marginal-note over remove or placeholder

Four fix options for §6 + §9 stale-spec-pointers were considered (sensemaking A1). The marginal-note (option b) won on:

- **Bounded-scope:** smallest text edit
- **Honest-acknowledgment:** transparently signals legacy status to readers
- **Navigation preservation:** the reference path is still visible (readers can find the legacy spec if they want to consult its content)
- **Reversibility:** if task-define is later un-abandoned OR a successor spec is initiated, the marginal note can be removed cleanly

The other options failed: leave-as-is propagates the stale-pointer failure mode silently; remove loses navigation; placeholder is heavier than marginal-note for equivalent information.

### Why row 16 reframe is structural-layer, not meaning-layer

The row currently over-claims that the doc has applied 11-16's promotion of two-pass. The doc hasn't — §9 still says "separate construction" per user deferral. The reframe addresses how the INHERITANCE MAP DESCRIBES THE FINDING, not what the finding's commitment IS.

The finding's meaning-layer commitment (promote 00-11 to next-inquiry) STANDS. The doc's structural-layer reflection of that commitment is partial — Substrate-vs-Intra applied + PERMISSION-not-CONSTRAINT applied + §9 update deferred. The row should describe what's reflected + acknowledge what's deferred.

This is a STRUCTURAL fix (row text) that respects the MEANING-layer commitment + the user-deferral at the structural-layer.

### Sub-findings from critique (incorporated)

- P2 marginal-note future-maintenance note → COULD item 2 (revisit when task-define spec status changes)
- P3 meta-pattern documentation-home note → COULD item 3 (project-level meta-pattern reference doc if exists; else finding's Reasoning)

---

## Open Questions

### Monitoring

- After MUST-1 through MUST-4 are applied, monitor whether future readers find the doc internally consistent at §11 + §6 + §9
- Monitor whether the marginal notes themselves become stale (if task-define is retired or fully synced)
- Monitor §11 row count and supersession-chain count for the deferred §11 restructure trigger

### Refinement Triggers

- **§9 promotion revival:** when user authorizes the §9 update
- **§2.5 expansion revival:** observable — user reports confusion OR downstream misuse
- **M4-M7 spec content-sync revival:** if user un-abandons task-define OR successor spec is initiated
- **§11 restructure revival:** §11 reaches 20 rows OR ~3 supersession-chains accumulated
- **Marginal-note removal trigger:** when task-define is retired (note becomes "ghost reference") OR fully synced (note no longer needed)

### Research Frontiers

- Does the **marginal-note as honest-acknowledgment** meta-pattern apply to other inherited deferrals in the project's inquiry chain?
- Does the **bounded-scope-or-defer test as audit discipline** generalize to other audit moments (post-large-application sweep)?
- At what threshold does §11 inheritance map structure become genuinely painful (the 20-row trigger is a heuristic from 09-58; empirical observation may refine)?
- Does the **inheritance preservation via row-text reframes** meta-pattern apply to any future inquiry that experiences partial application?

### Blocked

- None at this time. All MUSTs are bounded-scope and can be applied immediately upon user authorization. Deferred items are bounded by their revival-triggers.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
re-run structural now?
  
  Probably worth it. The recent applications touched a lot — new sub-sections, renumbered headers, new orthogonal axis
  documented, new worked example. A fresh structural-layer pass would audit:

  - Section-weight balance — §2.2 grew substantially (now has 7 sub-sections); is the proportion still right?
  - Cross-reference integrity — the §2.2.4 → §2.2.5 and §2.2.5 → §2.2.6 renumberings may have left stale refs elsewhere
  - Examples-as-implicit-schema consistency — Example D adds a new pattern (MQ4 firing on extrinsic); does §6's contract still
  match what §13 shows?
  - Inheritance map growth — now 16 rows; the prior structural inquiry deferred restructure at ~20 rows, so still under
  threshold but closer
  - Naming consistency post-applications — recent edits introduced new terms (Substrate-MQ / Intra-articulate-MQ /
  PERMISSION-not-CONSTRAINT); audit for stale usages


okay lets rerun it
```

</details>
