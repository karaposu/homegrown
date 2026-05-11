# Innovation: Loop Diagnose — Nav Org Structure / Warming Scope-Cut

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-11_01-36__loop_diagnose__nav_org_structure_warming_scope_cut/_branch.md`

Pinpoint the exact wrong thing in 11-22 + commit per-piece deliverables.

Per Decomposition: minimum mechanism coverage on draft wordings + commit P1-P4 with concrete text.

---

## Seed and Direction

- **Seed: failure.** A specific finding (11-22) had a wrong scope cut that propagated to a downstream finding (22-46); the user caught it via frame-exit. The loop_diagnose drill-down needs to pinpoint origin + mechanism + maintenance.
- **Intuition direction:** line-level precision; honor existing failure-mode vocabulary; defer broad spec changes per Step 5; act on the cheap loop-builder-level guideline now.

---

## Phase 2 — Generate (focused mechanism work for draft validation)

### Mechanism 1 — Inversion (Framer): is Part B (counter-argument testing) necessary?

**Inversion 1.1 — component-level: Instance 2 was a one-off; future loops will reason correctly.** Counter: Clean Resolution Trap is a NAMED failure mode in the Sensemaking spec (failure mode #5) precisely because it's a recurring pattern. Treating it as a one-off ignores the spec's own admission that this mode recurs. Reject.

**Inversion 1.2 — system-level: counter-argument testing is too aggressive (every frame-exit verdict now requires extra work).** Counter: only OUT-OF-SCOPE / CLEAN-BOUNDARY verdicts require the counter-test; in-scope verdicts don't. The scope is bounded. Reject.

**Inversion 1.3 — root-level: Frame-exit Completeness perspective itself is the wrong tool.** Counter: the perspective is structurally sound; the failure was in REASONING WITHIN it, not in the perspective's existence. Tool isn't the problem. Reject.

**Inversion result:** Part B is structurally necessary.

### Mechanism 2 — Domain Transfer (Generator): how do other fields handle out-of-scope claims?

**Transfer 2.1 — software requirements documentation:** out-of-scope items are documented with explicit reasons ("OUT OF SCOPE: X (because Y)"). Transfer: forcing counter-argument-with-reason matches established practice.

**Transfer 2.2 — legal jurisdiction:** "this court does not have jurisdiction" requires explicit reasoning. Transfer: jurisdiction is a clean analog for scope; both require justification, not assertion.

**Transfer 2.3 — scientific methodology:** methodology sections justify excluded variables explicitly. Transfer: same epistemic discipline — exclusions need positive justification, not implied via boundary.

**Domain Transfer result:** counter-argument testing is canonical epistemic discipline; cross-field validated.

---

## P1 — Chain + mechanisms + instance distinction (committed)

### Surface 1 — Origin: `_branch.md:29` categorization error

**Exact text:**

> "**Explicit scope cut:** the inquiry does NOT redesign Navigation's cognitive content (the 16-type taxonomy, the 12 route fields, **the warming protocol** — these were already audited in `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md`). It focuses ONLY on the artifact / file / folder organization layer."

**Mechanism:** **categorization error.** The scope cut grouped three items — 16-type taxonomy, 12 route fields, warming protocol — under "audited; cognitive content; don't redesign." But the audit categorizes these in different ways:

| Item | Audit category | Type |
|---|---|---|
| 16-type taxonomy | Category E (Type taxonomy) | Cognitive content — discipline's output structure |
| 12 route fields | D2 (Tier-1 challenge candidate; HEURISTIC) | Cognitive content — per-route schema |
| Warming protocol | Category I (Warming) — I1: precondition for Navigation (CANONICAL) | **Precondition / organization-layer** — NOT cognitive content |

The audit treats warming as **project-wide pre-condition** (category I), distinct from cognitive content. Grouping warming with cognitive content under "don't redesign" was the categorization error. "Don't redesign" is true for all three; but "out of organization-scope" is wrong for warming because warming IS part of navigation's organization, just at a different layer.

**Verification:** the audit is correct (categories properly distinguished). The error is in `_branch.md:29` writing, which is loop-builder-level (mine, as the inquiry framer).

### Surface 2 — Critical failure: `docarchive/sensemaking.md:130` Clean Resolution Trap

**Exact text:**

> "`homegrown/navigation/warmup/` — pre-discipline preparation files — boundary check: feed INTO the discipline, don't change the per-run output structure. **OUT OF SCOPE; clean boundary.**"

Followed at line 134:

> "Frame-exit check **passes**: the inquiry's frame correctly bounds to discipline + per-folder artifact organization. Excluded items have clean boundaries (warmup feeds in; multi-resolution-protocol uses out; Navigator-session-role addressed elsewhere)."

**Mechanism:** **Clean Resolution Trap** — Sensemaking failure mode #5 per `homegrown/sense-making/references/sensemaking.md`:

> "An ambiguity resolves with an elegant, satisfying explanation. The resolution feels right — clean, logical, complete. But the strongest counter-argument was never tested on structural grounds. ... Corrective: State the strongest counter-argument. State why it fails — on structural grounds. ... If you can only dismiss the counter by citing precedent, the resolution is LOW CONFIDENCE."

The line-130 verdict ("OUT OF SCOPE; clean boundary") fits Clean Resolution Trap precisely:
- **Elegant explanation:** "warmup feeds INTO discipline; doesn't change output structure" — clean, logical, complete-feeling.
- **Strongest counter never tested:** the counter is "warmup IS the pre-condition layer; project has it (homegrown/navigation/warmup/); navigation's coherent operation depends on it (audit I1: warming is precondition)." This counter was never stated, never tested on structural grounds.
- **What WOULD have happened with counter test:** stating "warmup is the pre-condition layer" + testing "is navigation organization analysis coherent without considering warmup?" → ANSWER: NO → verdict should have flipped from "out of scope" to "in scope at a different layer (project-wide pre-condition vs per-inquiry artifact)."

The line-130 verdict resolves by conflating two distinct questions:
1. *"Does warmup change the per-run output schema?"* — NO (true).
2. *"Is warmup part of navigation's organization at the project level?"* — YES (audit I1; not tested at line 130).

The Sensemaking phase answered question 1 and treated the answer as if it answered question 2. This is the Clean Resolution Trap's core mechanism.

### Surface 3 — Manifestation: `finding.md:256`

**Exact text:**

> "| `homegrown/navigation/warmup/` | Out of scope (feeds INTO discipline; per-run `warming_summary` field references it; clean boundary). |"

**Mechanism:** **unverified confirmation.** The finding's published Frame-exit verification table re-listed warmup as out-of-scope without retesting the verdict. CONCLUDE inherited Sensemaking's verdict and propagated it to the artifact's public surface.

### Propagation to 22-46

22-46 comparison finding inherited 11-22's frame (navigation organization = per-inquiry artifact organization, with warming out-of-scope). When 22-46 asked "is concept-mapping covered by recent's design?", the answer was NO because warming (which IS concept-map content in narrative form) was outside 11-22's frame. 22-46 thus called concept-mapping "a new capability the project doesn't have" — wrong, caught by the user's frame-exit challenge.

### Instance 1 vs Instance 2 mechanism comparison

| Aspect | Instance 1 (Memory) | Instance 2 (here — warming) |
|---|---|---|
| Pattern | Frame-scope capture | Frame-scope capture (same outcome pattern) |
| Mechanism | Perspective NOT FIRED — load-bearing concept test wasn't applied to Memory's type-axis | Perspective FIRED but reasoned SHALLOWLY — Frame-exit Completeness applied to warmup but Clean Resolution Trap produced "clean boundary" without counter-test |
| Failure layer | Recognition (didn't recognize Memory as needing the test) | Reasoning (recognized warmup as needing the test, but reasoned shallowly within it) |
| Caught by | User's correction ("we have md files no?") — manual frame-exit | User's challenge ("if there is no mapping how could navigation work in the first place?") — manual frame-exit |
| Maintenance candidate | Frame-exit Completeness sub-perspective (refactor candidate) — addresses recognition failure | Counter-argument testing within frame-exit verdicts — addresses reasoning failure |

Both instances produce frame-scope capture but require different maintenance. Same disease, different etiology.

### Audit verification

Audit at `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md`:
- Category E (Type taxonomy) — 16-type taxonomy [CANONICAL — user-validated]
- D2 — 12 route fields [Tier-1 HEURISTIC challenge candidate]
- Category I — Warming
  - I1: warming is precondition for Navigation [CANONICAL]
  - I2: 7 warming elements [Tier-1 HEURISTIC challenge candidate — element count]

The audit explicitly distinguishes the three items. The categorization error is at `_branch.md:29` (loop-builder writing), NOT at the audit. Deepest root confirmed at the framing-stage.

---

## P2 — Maintenance candidates (committed)

### Part A — Existing Frame-exit Completeness refactor candidate (DEFERRED; Instance 1 mechanism)

**File:** `devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md` (already exists).

**Status:** DEFERRED per loop_diagnose Step 5. Revival trigger: M4 audit produces ≥3 instances of frame-scope-capture-like patterns across distinct inquiries.

**This instance contributes:** instance count = 2 (Memory was 1; this is 2). One more catch and Part A escalates.

**Coverage:** addresses Instance 1's NOT-FIRED mechanism. Makes the Frame-exit Completeness perspective fire by giving it a named slot in Sensemaking Phase 2.

**Does it cover Instance 2?** NO. In Instance 2 the perspective fired but reasoned shallowly. Part A alone doesn't address shallow reasoning. Hence Part B.

### Part B — Counter-argument testing requirement (DEFERRED; Instance 2 mechanism — NEW)

**What changes:** add a sub-requirement to the proposed Frame-exit Completeness perspective (or to Sensemaking's failure-mode-#5 application): when the perspective produces an "out of scope" / "clean boundary" verdict on an artifact, the strongest counter-argument MUST be stated and tested on structural grounds before the verdict is committed.

**Drafted spec text:**

```
When the Frame-exit Completeness perspective produces a verdict of
"out of scope" or "clean boundary" on an artifact, state the strongest
counter-argument as:

  "This artifact plays role X in the operation being organized."

Test the counter by asking:

  "Is the operation's coherence preserved if this artifact is excluded?"

If NO (operation depends on the artifact), the "out of scope" verdict
is WRONG — the artifact is in-scope at a different layer (e.g., project-wide
pre-condition vs per-inquiry artifact). Re-locate the artifact to its
correct in-scope layer instead of excluding.

If YES (operation is coherent without the artifact), the verdict stands.

Reuse Sensemaking failure-mode #5 (Clean Resolution Trap) corrective:
"State the strongest counter-argument. State why it fails on structural
grounds." Failing to state and test the counter-argument when a
clean-boundary verdict is produced is an instance of Clean Resolution
Trap applied to the frame-exit axis.
```

**File affected:** would extend the proposed Frame-exit Completeness sub-perspective text in `homegrown/sense-making/references/sensemaking.md` if/when Part A is revived. Lives WITH Part A's spec edit.

**Risk class:** LOW (additive sub-requirement; uses existing failure-mode reference).

**Expected benefit:** addresses Instance 2's reasoning-quality failure. Without it, the Frame-exit Completeness perspective can fire and STILL produce a wrong verdict via Clean Resolution Trap.

**Evaluation gate:** observable — after Part A + Part B ship, monitor next 5 frame-exit verdicts. Are counter-arguments stated and tested on structural grounds before "out of scope" / "clean boundary" verdicts?

**Status:** DEFERRED per loop_diagnose Step 5. Revival trigger: audit produces ≥3 instances of fired-but-shallow frame-exit verdicts.

**Mechanism-aware audit:** when M4 audit runs, classify each frame-scope-capture instance by mechanism (not-fired / fired-but-shallow / other). Part A's threshold counts BOTH; Part B's threshold counts only fired-but-shallow. Current state: Part A = 2/3; Part B = 1/3 (this instance is the only fired-but-shallow one I've identified).

### Scope-cut writing convention (ACTIONABLE; loop-builder-level guideline)

**What changes:** loop-builder-level discipline reminder when writing `_branch.md` scope cuts. NOT a spec change.

**Drafted convention text:**

```
SCOPE-CUT WRITING DISCIPLINE

When writing a _branch.md scope cut, distinguish two distinct
out-of-scope categories:

1. OUT OF SCOPE FOR COGNITIVE-CONTENT REDESIGN.
   Items that are CANONICAL discipline-output structure (e.g., the
   16-type taxonomy of /navigation, the 12 route fields, the SIC
   pipeline order). These are out-of-scope because the inquiry isn't
   redesigning the discipline's cognitive content.

2. OUT OF SCOPE FOR ORGANIZATION-DISCUSSION.
   Items that are not part of the inquiry's organization concern at all.
   These are out-of-scope because they don't bear on what's being
   organized — different artifact category entirely.

DO NOT group these together under "audited; don't redesign."

An item being "audited and canonical" tells you about category 1 status
(don't redesign its cognitive content), but does NOT automatically place
it in category 2 (don't discuss as organization).

Specifically: items in audit categories describing preconditions, inputs,
or organizational primitives (e.g., warming files at
homegrown/navigation/warmup/, which the audit categorizes as I1
"precondition for Navigation [CANONICAL]") are CANONICAL-don't-redesign
for cognitive content but they may still be part of the operation's
organization at a different layer (project-wide pre-condition vs
per-inquiry artifact). Treat such items as IN-SCOPE for
organization-discussion at their respective layer.

Counter-example from history: 11-22's _branch.md:29 grouped 16-type
taxonomy + 12 route fields + warming protocol under "audited; don't
redesign." The warming protocol shouldn't have been there. The frame
this created caused downstream frame-scope capture (Sensemaking line 130;
22-46 inheriting the frame; the user catching it manually).
```

**File affected:** this is loop-builder-level discipline; could live as a note in `enes/runtime_environment/folder_based.md` (which already documents `_branch.md` conventions) or as a separate guideline file. Lightweight — not a spec change requiring N>1 evidence.

**Risk class:** LOW (writing-discipline reminder; no spec change to disciplines).

**Expected benefit:** prevents future categorization errors at the framing stage. The cheapest catch point in the chain (catches at Surface 1 before propagating to Surfaces 2 + 3).

**Evaluation gate:** observable — over the next 5 `_branch.md` writings, do scope cuts distinguish the two categories?

**Status: ACTIONABLE** — loop-builder discipline reminder, not a spec change. The Step 5 caution applies to spec changes; this is a writing convention.

---

## P3 — Pattern context + audit threshold tracking (committed)

### Current instance count

- **Instance 1** (Memory failure): not-fired mechanism. Diagnosed at `devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md` + drill-down at `devdocs/inquiries/2026-05-10_01-21__why_sensemaking_missed_memory_disambiguation/finding.md`.
- **Instance 2** (this — warming): fired-but-shallow mechanism. This drill-down.

### Threshold tracking (mechanism-aware)

| Maintenance candidate | Counts toward threshold | Current count | Target threshold | Status |
|---|---|---|---|---|
| Part A — Frame-exit Completeness sub-perspective | Both NOT-FIRED and FIRED-BUT-SHALLOW (any frame-scope capture) | 2 (Memory + warming) | ≥3 | One more catch → revive |
| Part B — Counter-argument testing requirement | Only FIRED-BUT-SHALLOW | 1 (warming) | ≥3 | Two more catches → revive |

The M4 audit (proposed at `devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md`) should classify each instance by mechanism to enable both thresholds to track independently.

### Implication for M4 audit design

When M4 runs, for each frame-scope-capture-like instance discovered, record:
- **Pattern fit:** frame-scope-capture? (yes/no/partial).
- **Mechanism:** not-fired / fired-but-shallow / other.
- **Maintenance trigger affected:** Part A (always); Part B (only if fired-but-shallow).

This mechanism-aware classification refines M4's design slightly. Add to M4's spec when it's executed.

---

## P4 — Diagnostic verdict (committed)

**Overall: ACTIONABLE per loop_diagnose Step 4.**

- **Best-supported diagnosis:** 3-surface failure chain with Clean Resolution Trap (Sensemaking failure mode #5) at Surface 2 (the critical failure point). Origin at `_branch.md:29` is a categorization error; manifestation at `finding.md:256` is unverified confirmation. Propagation to 22-46 inherited the frame and produced the "concept-mapping = new capability" mistake the user caught. Instance 2 of frame-scope capture pattern (Instance 1 was Memory); mechanism differs (fired-but-shallow vs not-fired).

- **Strongest maintenance candidate:** the scope-cut writing convention (ACTIONABLE; addresses the deepest root at the cheapest catch point; no spec change required).

- **Main uncertainty:** whether Part B's spec text (counter-argument testing requirement) can be drafted as-is or whether it requires refinement based on additional evidence. Currently N=1 for fired-but-shallow; defer per Step 5.

- **Recommended next step:**
  1. Apply the scope-cut writing convention to future `_branch.md` writings (immediate; ACTIONABLE).
  2. Track this as Instance 2 in the audit count toward Part A's ≥3 threshold.
  3. When M4 audit runs, classify instances by mechanism (not-fired / fired-but-shallow / other) to enable Part A + Part B thresholds to track independently.
  4. Defer Part A spec edit until audit count reaches ≥3.
  5. Defer Part B spec edit until fired-but-shallow audit count reaches ≥3.
  6. Optionally: small-revise the recent 22-46 comparison finding to acknowledge warming as the existing concept-map layer (per the user's challenge today + my sensemaking output at `devdocs/sensemaking/2026-05-11__concept_mapping_as_default_prerequisite_for_navigation.md`).

---

## Mechanism Coverage Telemetry

- **Generators applied:** 1/4 (Domain Transfer with 3 sub-variations: software requirements / legal jurisdiction / scientific methodology — all confirm counter-argument-with-justification is canonical epistemic discipline).
- **Framers applied:** 1/3 (Inversion with 3 sub-variations: component-level / system-level / root-level — all confirm Part B is necessary).
- **Convergence:** YES — both mechanisms support Part B's design; both validate the counter-argument approach.
- **Survivors tested:** 1/1 (Part B's drafted spec text).
- **Failure modes observed:** None.

**Overall: PROCEED.** Minimum coverage met; 4 pieces (P1-P4) committed with concrete drafted text for Part B + scope-cut writing convention. Hand off to Critique.
