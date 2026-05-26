# Exploration: Loop Diagnose — Navigation Organization Structure / Warming Scope-Cut

## 1. Mode and Entry Point

- **Mode:** Artifact. Concrete files to inspect: 11-22's `_branch.md`, `finding.md`, and 5 `docarchive/*.md` files; plus today's correcting sensemaking and the downstream 22-46 comparison finding.
- **Entry point:** Signal-first. The exact wrong thing is already located via grep (`_branch.md:29` scope cut; `finding.md:256` frame-exit "clean boundary"); this exploration traces the propagation through the disciplines and identifies the CAUSAL MECHANISM at each step.

---

## 2. Territory Overview

8 regions:

- **R-A: Origin** — `_branch.md` line 29 scope cut.
- **R-B: Exploration phase** — `docarchive/exploration.md` — did it surface warming as a region?
- **R-C: Sensemaking phase** — `docarchive/sensemaking.md` — Frame-exit Completeness check (line 130) explicitly verdict "OUT OF SCOPE; clean boundary."
- **R-D: Decomposition / Innovation / Critique phases** — downstream of sensemaking; inherited the framing.
- **R-E: Manifestation in finding.md** — line 256 re-confirms "Out of scope (feeds INTO discipline; per-run `warming_summary` field references it; clean boundary)."
- **R-F: Downstream propagation** — 22-46 comparison finding inherited the frame; manifested as "concept-mapping = new capability."
- **R-G: Correction** — today's sensemaking + the user's frame-exit challenge.
- **R-H: Pattern context** — this is the SECOND frame-scope-capture instance; instance 1 was Memory; the proposed Sensemaking refactor candidate's revival threshold is ≥3.

---

## 3. Inventory (per region)

### R-A: Origin — `_branch.md` line 29

Exact text:

> **Explicit scope cut:** the inquiry does NOT redesign Navigation's cognitive content (the 16-type taxonomy, the 12 route fields, **the warming protocol** — these were already audited in `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md`). It focuses ONLY on the artifact / file / folder organization layer.

**What's wrong here:** the scope cut groups three things together — 16-type taxonomy + 12 route fields + warming protocol — under "cognitive content; already audited; don't redesign." But:

- 16-type taxonomy and 12 route fields ARE Navigation's cognitive content (the output structure of the discipline's enumeration).
- Warming protocol is NOT cognitive content. It's the **project-wide INPUT/PRE-CONDITION layer** of navigation. It's organizational — at a different layer than per-inquiry artifacts.

Grouping warming with cognitive content was a **categorization error**. Both are "audited and canonical" (true) but they have different relationships to "organization":
- 16-type taxonomy / 12 route fields = canonical output structure (organization-irrelevant for an inquiry that doesn't redesign cognitive content).
- Warming protocol = canonical pre-condition organization (organization-relevant; just at project-wide layer, not per-inquiry layer).

**This is the origin of the frame-scope capture.**

### R-B: Exploration phase

`docarchive/exploration.md` mentions warming at line 154 as a field of the per-run artifact:
> Contents: the navigation map only — typed route-cards per the 16-type taxonomy + 12 route fields, with timestamps + Navigator-session warming-context summary.

Warming is referenced as a SUMMARY FIELD inside the per-run output. But it's NOT surfaced as an organization-layer artifact in its own right. The Exploration phase already accepted the scope cut from _branch.md.

**No catch here.** Exploration inherited the framing.

### R-C: Sensemaking phase — the critical failure point

`docarchive/sensemaking.md` line 130 (inside the Frame-exit Completeness perspective check):

> `homegrown/navigation/warmup/` — pre-discipline preparation files — boundary check: feed INTO the discipline, don't change the per-run output structure. **OUT OF SCOPE; clean boundary.**

Followed by line 134:

> Frame-exit check **passes**: the inquiry's frame correctly bounds to discipline + per-folder artifact organization. Excluded items have clean boundaries (warmup feeds in; multi-resolution-protocol uses out; Navigator-session-role addressed elsewhere).

**This is the critical failure point.** The Sensemaking phase explicitly DID the frame-exit check on warmup. The check FIRED. But the check produced the WRONG answer.

Why? The reasoning was: *"warmup feeds INTO the discipline; doesn't change the per-run output structure."* This conflates two distinct questions:
1. "Does warmup change my output schema?" → NO (true; warmup doesn't change navigation_observer's structure).
2. "Is warmup part of navigation's organization at the project level?" → YES (warmup IS the project-wide pre-condition layer of navigation).

The Sensemaking phase answered question 1 (the narrow one) and treated that answer as if it answered question 2 (the broad one). The frame-exit check, as applied, was shallow — it tested OUTPUT-schema-coupling, not ORGANIZATION-role.

This is a **Clean Resolution Trap** (Sensemaking failure mode #5): *"An ambiguity resolves with an elegant, satisfying explanation. The resolution feels right — clean, logical, complete. But the strongest counter-argument was never tested on structural grounds."*

The "clean boundary" framing is the elegant explanation. The strongest counter-argument — *"warmup IS the pre-condition / map-like artifact navigation depends on; excluding it from the organization analysis means missing the input-architecture layer"* — was never tested.

### R-D: Decomposition / Innovation / Critique phases

All three phases inherited the sensemaking's "out of scope" verdict.

- `docarchive/decomposition.md` line 99 + 152: warming referenced only as a field of per-run output.
- `docarchive/innovation.md` line 75 + 274: warming as a one-line pointer in frontmatter; spec edits at the per-inquiry layer.
- `docarchive/critique.md` line 81 + 87: prosecution probed `warming_summary` field utility; defense said it enables cold-navigation detection. Both operated inside the established frame — never questioned the scope cut.

**No catch in any downstream phase.** All inherited the framing.

### R-E: Manifestation in `finding.md` line 256

Inside §8 "Frame-exit verification (scope confirmation)":

> | `homegrown/navigation/warmup/` | Out of scope (feeds INTO discipline; per-run `warming_summary` field references it; clean boundary). |

The finding's frame-exit verification SECTION re-confirms the sensemaking's verdict — explicitly listing warmup as "out of scope" with "clean boundary." This is the MANIFESTATION of the frame-scope capture in the published artifact.

### R-F: Downstream propagation in 22-46

22-46 comparison finding inherited 11-22's frame: navigation organization = per-inquiry artifact organization. When asked "is concept-mapping covered?", 22-46 looked at recent's per-inquiry layer, found no concept-mapping, and concluded "NEW capability." The actual answer (warming IS concept-mapping in narrative form; concept-mapping is an UPGRADE) was invisible because 11-22's frame had already excluded warming.

### R-G: Correction (today's sensemaking)

The user's challenge ("if there is no mapping how could navigation work in the first place?") performed FRAME-EXIT manually — operating outside both 11-22 and 22-46's frames, bringing in the warming layer as the missing prior context. Today's sensemaking diagnosed:
- Warming files ARE concept-map content in narrative form.
- Audit's I1 canonically says "warming is precondition for Navigation."
- Concept-mapping is UPGRADE of warming, not NEW capability.

### R-H: Pattern context — this is instance 2 of frame-scope capture

- **Instance 1:** Memory failure (L0 cell mis-classification). Frame-scope capture struck at the per-inquiry-memory vs cross-inquiry-memory disambiguation layer. Diagnosed in `2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md` + drill-down `2026-05-10_01-21__why_sensemaking_missed_memory_disambiguation/finding.md`.
- **Instance 2 (THIS):** 11-22 nav-organization. Frame-scope capture struck at the per-inquiry-navigation vs project-wide-navigation-pre-condition layer. Same structural shape: the inquiry's frame excluded a project-wide artifact that's load-bearing for the operation being organized.

The proposed Sensemaking refactor at `devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md` (adding Frame-exit Completeness as a Definitional sub-perspective) has revival threshold ≥3 instances. This is instance 2. One more catch → escalate.

**Important nuance:** in Memory (instance 1), the frame-exit perspective DIDN'T FIRE at all (Sensemaking's load-bearing concept test wasn't applied to Memory's type-axis). In THIS instance, the Frame-exit Completeness perspective DID FIRE on warmup (line 130) but produced the WRONG answer ("clean boundary" — shallow reasoning).

So the failure modes are different even though the pattern is the same:
- Instance 1: frame-exit not fired → would have caught it if applied.
- Instance 2: frame-exit fired → still missed it because the reasoning was shallow.

This is significant. The refactor candidate (Frame-exit Completeness perspective) was designed to MAKE the perspective fire. In instance 2, the perspective fired and STILL failed. So the refactor candidate alone isn't sufficient — the reasoning within the perspective needs sharpening too.

---

## 4. Signal Log

| ID | Signal | Source | Action |
|---|---|---|---|
| S1 | Origin located at `_branch.md:29` — scope cut groups warmup with cognitive content | grep | **Probed** (R-A) — confirmed |
| S2 | Sensemaking Frame-exit check FIRED on warmup at line 130 but answered "out of scope" | docarchive/sensemaking.md | **Probed** (R-C) — critical failure point identified |
| S3 | The reasoning at line 130 conflates "output schema coupling" with "organization role" | text analysis | **Probed** (R-C) — Clean Resolution Trap pattern |
| S4 | All downstream phases (D/I/C) inherited the framing; no catch | docarchive | **Probed** (R-D) — no recovery |
| S5 | Finding line 256 confirmed verdict in published artifact | grep | **Probed** (R-E) |
| S6 | Downstream 22-46 inherited frame; manifested as "concept-mapping = new capability" | 22-46 + today's sensemaking | **Probed** (R-F) |
| S7 | This is instance 2 of frame-scope capture; pattern threshold approaching ≥3 | cross-finding pattern | **Probed** (R-H) |
| S8 | Instance 1 vs 2 differ in failure mode: not-fired vs fired-but-shallow | comparing diagnostics | **Probed** — important for maintenance candidate |
| S9 | The Frame-exit Completeness refactor candidate alone is INSUFFICIENT to catch instance 2 — the perspective fired here and still failed | refactor candidate text + instance 2 analysis | **Probed** — maintenance candidate needs sharpening |
| S10 | The strongest counter-argument ("warmup is the pre-condition layer") was never tested at line 130 | text analysis | **Probed** — confirms Clean Resolution Trap diagnosis |
| S11 | The categorization error at _branch.md:29 (warmup grouped with cognitive content) is the upstream cause that biased the sensemaking phase | text analysis | **Probed** — upstream-of-Sensemaking root cause |

---

## 5. Confidence Map

| Region | Status | Notes |
|---|---|---|
| R-A origin | **Confirmed** | Direct line citation |
| R-B exploration | **Confirmed** | No catch; inherited frame |
| R-C sensemaking critical failure | **Confirmed** | Line 130 verdict + reasoning analyzed |
| R-D D/I/C downstream | **Confirmed** | No catch in any phase |
| R-E finding manifestation | **Confirmed** | Line 256 cited |
| R-F propagation to 22-46 | **Confirmed** | Same frame inherited |
| R-G correction | **Confirmed** | Today's sensemaking + user's challenge |
| R-H pattern context | **Confirmed** | Instance 2; refactor threshold approaching |
| Whether refactor candidate alone would have caught instance 2 | **Confirmed** | NO — perspective fired in instance 2 and still failed |
| Whether the categorization error at _branch.md:29 is the root or a manifestation | **Scanned** | Need to determine in Sensemaking whether _branch.md scope cut is the deeper root or whether the framing came from somewhere upstream-still (e.g., audit's categorization?) |

---

## 6. Frontier State

**Stable.** Three exploration cycles produced no new regions after Cycle 2. Cycle 3 surfaced the critical insight (instance-1 vs instance-2 failure-mode difference; refactor candidate alone is insufficient).

Discovery rate: declining sharply.

Bounded gaps: the only remaining question is "what's upstream of _branch.md:29's categorization error" — likely the loop builder's (my) misreading of the audit's framing. That's a Sensemaking concern.

Convergence: **achieved**.

---

## 7. Gaps and Recommendations

### The exact wrong thing (precise)

**Origin: `_branch.md:29` categorization error.** The scope cut grouped warming protocol with cognitive content under "audited and canonical; don't redesign." But warming is NOT cognitive content — it's the project-wide pre-condition organization layer of navigation. Grouping them was a categorization error that biased every downstream phase.

**Manifestation: `docarchive/sensemaking.md:130` shallow frame-exit reasoning.** The Frame-exit Completeness perspective FIRED on warmup but produced "OUT OF SCOPE; clean boundary" by conflating two questions ("does warmup change my output schema?" — answered NO, correctly; "is warmup part of navigation's organization at project level?" — never asked). The reasoning is a Clean Resolution Trap (Sensemaking failure mode #5): the resolution felt clean; the strongest counter-argument was never tested.

**Confirmation: `finding.md:256`** — the published artifact's Frame-exit verification table explicitly listed warmup as "out of scope" with "clean boundary," propagating the error to readers.

**Downstream: 22-46** inherited the frame; manifested as "concept-mapping = new capability" (wrong — warming IS concept-map content in narrative form, per today's sensemaking).

### Recommendations to next disciplines

- **Sensemaking should:**
  1. Determine whether `_branch.md:29` is the deepest root, or whether the loop builder mis-read the audit's framing of warmup. Test the audit text to see if it actually says warmup is cognitive content.
  2. Test whether the Frame-exit Completeness refactor candidate (per `2026-05-10_03-07` finding) needs sharpening — specifically, whether the perspective's reasoning needs to test the strongest counter-argument structurally (not just "is there a boundary?" but "is the boundary clean for the question being asked?").
  3. Surface the instance-1-vs-instance-2 distinction: not-fired vs fired-but-shallow. This affects maintenance candidate shape.
  4. Apply load-bearing concept tests on "cognitive content" vs "organization layer" — the categorization that went wrong.

- **Decomposition should:** partition the diagnostic into hypotheses per layer (origin / sensemaking-shallow / propagation / pattern-context) + maintenance candidates.

- **Innovation should:**
  1. Generate maintenance candidates that address BOTH not-fired (instance 1) AND fired-but-shallow (instance 2) failure modes.
  2. Consider extending the Frame-exit Completeness perspective with a "counter-argument test" sub-requirement.
  3. Propose a sharpening of the scope-cut writing convention (when writing a `_branch.md` scope cut, distinguish "out of scope for cognitive-content redesign" from "out of scope for organization-discussion entirely").

- **Critique should:**
  1. Test whether the instance-2 diagnosis is over-fit (Clean Resolution Trap is the failure mode I'm naming; is that the right name?).
  2. Verify the refactor-candidate-insufficient claim is structurally supported.
  3. Apply self-reference resistance — this critique evaluates a frame-scope-capture diagnostic.

### What was NOT explored (deliberate scope cuts)

- Whether the AUDIT itself (2026-05-10_03-50) categorized warming as cognitive content. Worth a brief sensemaking-phase check.
- Whether other recent inquiries have similar scope-cut categorization errors. Pattern-level question; out of scope here (covered by M4 audit candidate from the refactor proposal).
