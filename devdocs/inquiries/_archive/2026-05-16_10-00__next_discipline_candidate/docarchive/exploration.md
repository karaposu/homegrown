# Exploration: Next Discipline Candidate

## User Input

Inquiry `_branch.md`. Mode: blended (artifact for project taxonomy + named-but-unbuilt + cognitive_harness/ inventory; possibility for candidate enumeration + gap analysis). Entry: signal-first (seed = user's "what's next" implies an existing intuition). Layer-commitment: meaning.

---

## Territory Overview

Four coupled regions surfaced:

1. **The documented discipline taxonomy** — `docs/discipline_taxonomy.md` is the project's canonical 4-category taxonomy (Core / Cross-cutting / Boundary / Situational) with admitted disciplines + audit criteria + future-candidates register.
2. **The cognitive_harness/ runtime inventory** — what's actually implemented as a folder + SKILL.md.
3. **Named-but-unbuilt operations** — operations the project has named or documented but not implemented as discipline files (notably `/intuit` and materialization).
4. **Gap analysis** — between the canonical taxonomy, the runtime implementation, and the user's stated cannon ("explore innovate MVL mvl+ Protocols sensemaking td-critique" from the rename inquiry's context).

Resolution: high (the canonical taxonomy is rich and explicit; cross-references to specific files for further depth). Mode: blended. Entry: signal-first. Cycles run: 2 + jump-scan (materialization lifecycle).

---

## Region 1 — The canonical discipline taxonomy (`docs/discipline_taxonomy.md`)

The canonical taxonomy has 4 categories. Below is the admitted membership:

### Core (pipeline-sequential; the SIC-loop)

5 disciplines, run in `E → S → D → I → C` order:

| Discipline | Implementation status |
|---|---|
| `/explore` | implemented (`cognitive_harness/explore/`) |
| `/sense-making` | implemented (`cognitive_harness/sense-making/`) |
| `/decompose` | implemented (`cognitive_harness/decompose/`) |
| `/innovate` | implemented (`cognitive_harness/innovate/`) |
| `/td-critique` | implemented (`cognitive_harness/td-critique/`); rename to `adjudicate` recommended in prior inquiry |

### Cross-cutting (always-available; invokable at multiple points)

1 admitted discipline:

| Discipline | Implementation status |
|---|---|
| `/intuit` | **DOCUMENTED + ADMITTED + UNBUILT.** Audit PASS (pending 2nd reviewer). Full spec at `docs/intuit.md` (~310 lines: 13 sections covering operation, primitive attribution, scan modes, invocation, output schema, decline conditions, failure modes, phased build A→B→C→D, integration patterns, calibration). **No `cognitive_harness/intuit/` folder exists. No `~/.claude/skills/intuit/` entry exists.** Confirmed by direct ls. |

This is the load-bearing finding: `/intuit` is the unique admitted-but-unbuilt cannon discipline.

### Boundary (between-cycle; backward + forward)

2 admitted disciplines, with the project's `category-sufficiency` argument that 2 is structurally complete (backward + forward covers the temporal space):

| Discipline | Implementation status |
|---|---|
| `/reflect` (R) | folder exists in `cognitive_harness/reflect/` but flagged for archive in the prior context-blur inquiry (slated to move to `cognitive_harness/_archive/reflect/`). Re-built version is implicitly planned. |
| `/navigation` (N) | folder exists in `cognitive_harness/navigation/` but ACTIVE; same: slated for archive in the prior context-blur inquiry; redesign is the active replacement work. |

These are *partially-built* — the file exists, but the current implementation is being replaced.

### Situational (organic; on-demand specialized)

Non-exhaustive members (admission is loose):

- `/comprehend` — implemented but slated for archive (dormant)
- `/elaborate` — referenced in taxonomy
- `/wayfinding` — referenced in taxonomy
- Others added organically

### Rejected after consideration (the taxonomy is conservative)

The taxonomy explicitly lists 15 rejected candidates with revival triggers:

**Reorganization rejections (11):** force `/intuit` into Core; force into Situational; split `/innovate`; merge `/explore` + `/sense-making`; rename `/sense-making`; primitive-grouping redesign; apply Primitive Profiles to Situational; structural refinement to `/reflect`; pipeline-early documentation expansion; eliminate `/MVL+`; add third Boundary discipline (real-time observation).

**Missing-discipline rejections (4):** Calibration (owned by `/intuit` Phase B+); Consolidation (cross-inquiry merge; deferred); Intrinsic-valuation (category mistake — indicator, not discipline); Real-time metacognition (category mistake — primitive, not discipline).

### Future-candidate register (deferred; active watch)

The taxonomy keeps three deferred candidates with revival triggers:

- **Consolidation (cross-inquiry merge)** — trigger: parallel-inquiry rate exceeds threshold OR `/navigation`'s MERGE type consistently surfaces consolidation candidates.
- **Parallel-MVL coordination** — trigger: approaching Level 3 autonomy.
- **Level-3 intuition-space generation discipline** — trigger: `/intuit` Phase D+ maturity + operational need signal.

**Confidence:** confirmed (direct reading of canonical taxonomy doc).

---

## Region 2 — cognitive_harness/ runtime inventory (vs taxonomy)

Direct `ls cognitive_harness/` returns:

```
MVL              (runner; not a discipline)
MVL+             (runner; not a discipline)
comprehend       (Situational; flagged dormant in prior inquiry)
contracts        (single artifact alignment_control.md; not a SKILL-shaped discipline)
decompose        (Core)
explore          (Core)
innovate         (Core)
meta-loop        (NOT in canonical taxonomy; an experimental runner-shaped artifact)
navigation       (Boundary; active redesign per prior inquiry)
next_question_to_ask.md  (loose user scratchpad)
protocols        (folder of protocol files; not a discipline)
reflect          (Boundary; dormant per prior inquiry)
sense-making     (Core)
td-critique      (Core; rename to adjudicate recommended)
```

13 sub-folders + 1 loose file. Mapping to taxonomy:

| Taxonomy category | In cognitive_harness/ | Missing | Notes |
|---|---|---|---|
| Core (5) | all 5 present | — | Complete |
| Cross-cutting (1) | none | **/intuit missing** | Documented in taxonomy + spec; no folder |
| Boundary (2) | both present (but slated for archive) | — | Active redesign work |
| Situational (organic) | comprehend present (dormant); elaborate, wayfinding absent | — | Loose admission |

### `meta-loop` is a runner-shape, not a discipline

`cognitive_harness/meta-loop/SKILL.md` describes a stateful traversal engine — closer to a parallel-MVL coordinator than a single-operation discipline. The canonical taxonomy lists Parallel-MVL coordination as a future-candidate but does NOT admit `meta-loop` as a discipline. So `meta-loop` is in cognitive_harness/ but absent from taxonomy.

**Confidence:** confirmed (direct ls + cross-reference to taxonomy).

---

## Region 3 — Named-but-unbuilt operations (documented; not implemented)

Beyond `/intuit`, the project has two more named operations of significant scale:

### Materialization

`docs/materialization_lifecycle.md` documents materialization as a **missing operation** — the bridge from finding to executable artifact:

> *"Homegrown should not jump directly from a finding to file edits. The missing operation is **materialization**: turning an accepted decision into concrete files under an explicit contract."*

Defined lifecycle (sequential, mirrors AlignStack / vibe-driven-development):

```
artifact request → task description → implementation plan → dynamic critic
  → plan repair → implementation → validation → materialization trace
  → retrospective learning
```

The doc explicitly distinguishes this from theory-loop work: theory-loops (MVL/MVL+) produce findings/protocols/understanding; materialization produces changed files, runnable artifacts, validation results, traces.

**Implementation status:** UNBUILT. No `cognitive_harness/material*/` folder; no equivalent skill.

**Discipline-vs-lifecycle classification:** the materialization doc characterizes it as a "post-finding lifecycle with its own artifacts, gates, and trace record." This sounds closer to a multi-step protocol or sub-loop than a single-operation discipline. Per the canonical taxonomy's category criteria, materialization may not fit Core/Cross-cutting/Boundary/Situational cleanly — it's lifecycle-shaped. Adding it may require a new category, a protocol, or a sub-loop runner — to be settled in Sensemaking.

### Self-maintenance arc (the safety substrate)

The prior `project_identity_and_milestone_ordering` finding named milestones D-M5/6/7/9 as the self-maintenance arc, and the recently-completed safety substrate inquiry sketched its components (regression catalog, snapshot mechanism, canary, annotation, pre-edit check, structural-check). These are infrastructure rather than disciplines — they're consumed by the disciplines but not invoked as discipline operations.

**Classification:** infrastructure / substrate, not a discipline.

**Confidence:** confirmed (direct reading of docs/materialization_lifecycle.md + cross-reference to prior findings).

---

## Region 4 — Candidate dimensions for "next"

Possibility-mode enumeration. Completeness-first: list the obvious dimensions before novel ones.

### Dimension A — Unbuilt admitted cannon disciplines (build what's already documented)

| Candidate | Type | Reason |
|---|---|---|
| **`/intuit`** | Cross-cutting | Documented + admitted + audit PASS pending 2nd reviewer; phased build (A→B→C→D) spelled out; integrates with `/innovate` and `/td-critique` |

This dimension has exactly ONE candidate. The taxonomy's structure shows it as the unique admitted-but-unbuilt position.

### Dimension B — Redesign of active-archive-candidate Boundary disciplines

| Candidate | Type | Reason |
|---|---|---|
| **`/navigation` (v2)** | Boundary | Current impl flagged for archive in prior context-blur inquiry; redesign is implicit replacement work |
| **`/reflect` (v2)** | Boundary | Same situation |

These are redesigns, not new disciplines. The slot exists in taxonomy; the implementation is being refreshed.

### Dimension C — Future-candidate register (deferred; revival-triggered)

| Candidate | Type | Trigger to revive |
|---|---|---|
| **Consolidation** | new category? Boundary? | Parallel-inquiry rate exceeds threshold OR navigation MERGE-type consistently produces consolidation candidates |
| **Parallel-MVL coordination** | new runner / runner-coordinator | Approaching Level 3 autonomy |
| **Level-3 intuition-space generation** | extension of /intuit | /intuit Phase D+ maturity |

These are explicitly deferred; not immediately actionable.

### Dimension D — Materialization (lifecycle, may not be discipline-shape)

| Candidate | Type | Reason |
|---|---|---|
| **Materialization (`/materialize` or equivalent)** | possibly Boundary; possibly new category; possibly protocol | Documented at `docs/materialization_lifecycle.md`. Closes the finding → executable-artifact gap. Currently the user manually executes finding-recommended actions. |

This is the biggest leverage candidate but doesn't fit discipline categories cleanly; classification is open.

### Dimension E — Genuinely new (not yet named)

Operations adjacent to the cognitive loop that aren't in the taxonomy or future-candidates register:

- **Translation discipline** — converting findings between layers (meaning ↔ structural ↔ process)
- **Resolution discipline** — settling between competing approaches with explicit criteria (overlap with `/td-critique`?)
- **Hypothesis discipline** — forming testable predictions before action (overlap with `/intuit`?)
- **Operation discipline** — executing recommended actions concretely (overlap with materialization?)

These have overlap with admitted disciplines or future candidates; likely rejected on overlap grounds by the taxonomy's existing rejection criteria. **Unlikely to be the next pick** but enumerated for completeness.

### Dimension F — Process-loop architecture gaps (not discipline-shape but adjacent)

The taxonomy notes that MVL+ ends at Critique; the human bridges to next-inquiry manually. The bridge work includes:
- Reading the finding
- Deciding what to do next (covered partially by `/navigation`)
- Executing the action (uncovered — materialization territory)
- Generating the next inquiry (uncovered — meta-loop territory)

These aren't discipline-shape but indicate where the next leverage is.

---

## Region 5 — Inversion check: what's NOT the next discipline?

Apply Inversion (Framer mechanism) to confirm the candidate space:

A name that would NOT be next:
- Renames of existing disciplines (covered by separate inquiries; not "next")
- Pure-runner additions (MVL++ etc. would be runner work, not discipline)
- Theory-only additions (the project already has many docs; theory accumulation isn't capability)
- Discipline-merges (the taxonomy explicitly rejects `/explore` + `/sense-making` merger)

Inversion confirms: the next discipline must be a NEW cognitive operation (or an admitted-but-unbuilt one), not a refactor of existing work.

This rules out Dimension B (redesigns) as the strict-reading answer to "next discipline" — those are refreshes, not new admissions. Dimension B may be next ENGINEERING work but not next DISCIPLINE.

---

## Signal Log

| # | Signal | Type | Probed? |
|---|---|---|---|
| **S1** | `/intuit` is documented + admitted + unbuilt — UNIQUE case in the taxonomy | **Density** (singular case of admitted-unbuilt) | ✓ |
| **S2** | Materialization is documented as a missing operation, classified as lifecycle | **Novelty** (capability gap, classification uncertain) | ✓ |
| **S3** | User's stated cannon (`explore innovate MVL mvl+ Protocols sensemaking td-critique`) omits decompose AND intuit AND reflect AND navigation — disconnect from canonical taxonomy | **Tension** | ✓ (flagged for Sensemaking) |
| **S4** | The taxonomy's future-candidates register has 3 deferred items, each with explicit revival triggers; none are currently triggered | **Density** (structured deferral) | ✓ |
| **S5** | 15 rejected candidates documented in taxonomy with revival triggers — defensive infrastructure | **Density** (architectural intentionality) | ✓ |
| **S6** | meta-loop in cognitive_harness/ is NOT in the canonical taxonomy — orphan implementation | **Absence** | ✓ |
| **S7** | /navigation and /reflect implementations slated for archive but remain admitted in taxonomy — redesign cycle, not removal | **Tension** | ✓ |
| **S8** | Self-maintenance arc + safety substrate are infrastructure, not disciplines — separate category from "next discipline" | **Absence** (correctly absent from discipline taxonomy) | ✓ |

No deferred signals; saturation reached.

---

## Confidence Map

| Region | Confidence | Justification |
|---|---|---|
| Canonical taxonomy contents | **confirmed** | Direct reading of `docs/discipline_taxonomy.md` |
| `/intuit` documented + admitted but no implementation folder | **confirmed** | Direct ls of `cognitive_harness/` + `~/.claude/skills/` returns no intuit; taxonomy + intuit.md confirms admission |
| Materialization is a documented capability gap | **confirmed** | Direct reading of `docs/materialization_lifecycle.md` |
| Materialization classification (discipline vs lifecycle vs protocol) | **inferred** | The doc characterizes it as lifecycle; final classification depends on whether the project admits a new category or fits it into existing ones |
| Navigation/reflect status (admitted in taxonomy + slated for archive) | **confirmed** | Cross-reference to prior context-blur inquiry's Next Actions + direct ls + taxonomy |
| Future-candidates triggers status | **confirmed-not-triggered** | Trigger conditions specified in taxonomy; current project state hasn't met them per visible inquiry history |
| User's intent ("next discipline" — strict or loose meaning?) | **unknown** | Sensemaking territory |
| Whether the user prioritizes lowest-friction (intuit build) or highest-leverage (materialization) | **unknown** | Sensemaking territory |

---

## Frontier State

**Stable.** Jump-scan performed (materialization-as-lifecycle exploration) — surfaced the classification uncertainty (discipline vs lifecycle vs protocol) but no new candidate beyond intuit + materialization + navigation/reflect redesigns + future-register items.

Bounded gaps:
- Sensemaking must commit a frame: is "next discipline" strict (cannon-position admission) or loose (next-capability addition)?
- Critique will need to weigh /intuit (cleanest fit; admitted) against materialization (biggest leverage; category-unclear) against redesign work (refresh, not new).

---

## Gaps and Recommendations — Frontier Questions for Downstream

**To Sensemaking:**

1. **Anchor extraction on "next discipline".** What does "discipline" mean in the user's question?
   - (a) A cannon-position admission per the canonical taxonomy → answer is `/intuit` (the unique admitted-unbuilt)
   - (b) A new capability that may or may not be a strict-taxonomy discipline → answer might be materialization
   - (c) A refresh of an existing slot → answer is /navigation v2 or /reflect v2
   The user said "discipline" — strict-reading favors (a). But the user's stated cannon omits taxonomy-admitted disciplines, suggesting their mental model may be looser than canonical. Test both.

2. **User-language alignment check.** The user's stated cannon (`explore innovate MVL mvl+ Protocols sensemaking td-critique`) effectively names 4 disciplines + 2 runners + 1 folder. The user's mental model of the cannon size differs from the taxonomy's 8 admitted. Does the user know about `/intuit`? About the Boundary category? This affects which framing of "next" applies.

3. **Frame-exit Completeness test on "discipline".** The term is multi-value: discipline-as-named-but-unbuilt (intuit) vs discipline-as-archived-being-rebuilt (navigation/reflect) vs discipline-as-future-candidate-not-yet-triggered (consolidation) vs discipline-as-capability-gap-not-yet-classified (materialization). Apply Frame-exit Completeness to surface all axes.

4. **Phase/Calibration-State check.** The project is in active development. Some candidates require the project to reach a calibration state before they're appropriate (consolidation needs parallel-inquiry rate; Level-3 intuition-space needs /intuit Phase D+; parallel-MVL needs Level 3 autonomy). Currently NOT at those calibration states. The "next" candidate must fit current project state.

**To Decomposition:**

- Natural partition: (a) candidate enumeration with classification (what KIND of "next" each is), (b) per-candidate value-vs-cost analysis, (c) recommendation packet, (d) follow-up scoping (after the user picks, what's the next inquiry to design the spec).

**To Innovation:**

- Elaborate each candidate's value proposition, build-cost estimate, dependency map, and integration plan with the existing cannon.

**To Critique:**

- Adversarially test top candidates against: cannon-fit (does it satisfy taxonomy admission criteria?), leverage (does it close a load-bearing capability gap?), readiness (is documentation sufficient to commit?), dependency cleanliness (does it require prerequisites?).

---

## Telemetry

- **Mode:** blended
- **Entry point:** signal-first
- **Cycles run:** 2 + jump-scan (materialization-as-lifecycle)
- **Candidates surfaced (possibility mode):** 6 dimensions A–F; primary candidates: /intuit (Dimension A); materialization (Dimension D); navigation/reflect redesign (Dimension B); future-register items (Dimension C, not-actionable); novel new disciplines (Dimension E, weak); architectural process-loop work (Dimension F, not-discipline-shape)
- **Signals detected:** 8 (S1–S8); probed: 8; deferred: 0
- **Resolution progression:** coarse (folder list) → medium (taxonomy contents + spec depth on /intuit + materialization lifecycle)
- **Frontier state:** stable
- **Discovery rate trend:** declining (cycle 1 surfaced taxonomy + /intuit gap; cycle 2 refined candidate dimensions; jump-scan surfaced materialization classification ambiguity)
- **Convergence criteria:** frontier stability ✓; declining discovery rate ✓; bounded gaps ✓
- **Jump-scan performed:** ✓ (materialization lifecycle outside the strict discipline taxonomy)
- **Failure modes checked:**
  - Premature depth ✓
  - Surface-only scanning ✓
  - False confidence ✓
  - Premature termination ✓
  - Re-exploration ✓
  - Completeness bias ✓
  - Open→closed drift ✓
  - Silent boundary-discovery ✓
  - Negative-space silent drop ✓ (rejected candidates surfaced; future-register not-yet-triggered surfaced)
  - Inadequate per-item content depth ✓

## Self-Assessment

**PROCEED.** Territory thoroughly mapped: canonical taxonomy + runtime inventory + named-but-unbuilt + future-register all surveyed. The candidate space narrows to 3 strong candidates (`/intuit`, materialization, /navigation v2 + /reflect v2 redesign) with 1 clear leader on cannon-fit grounds (`/intuit`) and 1 clear leader on capability-leverage grounds (materialization). Sensemaking will resolve which frame the user intends and commit a primary recommendation.
