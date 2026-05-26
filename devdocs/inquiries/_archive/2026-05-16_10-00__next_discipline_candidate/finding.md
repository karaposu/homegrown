---
status: active
model: claude-opus-4-7[1m]
effort: high
---
# Finding: Next Discipline Candidate

## Question

The user asked: "what do you think is next discipline might be?" — meaning, which cognitive discipline should be added to the cannon next, given the current state of the cognitive harness (`cognitive_harness/` in the project, the runtime registry `~/.claude/skills/`, and the canonical taxonomy documented at `docs/discipline_taxonomy.md`)?

The user-stated cannon (from a recent prior conversation) names `explore`, `innovate`, `MVL`, `MVL+`, `protocols`, `sense-making`, `td-critique` — effectively 4 disciplines + 2 runners + 1 folder. The canonical taxonomy admits 8 disciplines: 5 Core (`explore`, `sense-making`, `decompose`, `innovate`, `td-critique`), 1 Cross-cutting (`/intuit`, with audit PASS pending 2nd reviewer), and 2 Boundary (`/reflect`, `/navigation`). The user's cannon and the taxonomy diverge — the user's mental model appears to be "actively-invoked" rather than "admitted-in-taxonomy."

The goal: a recommended next discipline (or a short ranked list) with reasoning the user can adjudicate. The recommendation must respect the canonical taxonomy's structure while remaining responsive to the user's likely intent. After the user commits, follow-up structural and process inquiries would design the spec and procedure.

The framework was set at the **meaning layer** — the question is about WHAT cognitive operation the new discipline performs. Structural (spec sections) and process (procedural steps) are downstream of meaning and are deferred to follow-up inquiries.

## Finding Summary

- **Recommended primary: `/intuit` Phase A.** It is the unique admitted-but-unbuilt cannon discipline. The canonical taxonomy at `docs/discipline_taxonomy.md` admits it as Cross-cutting with audit PASS (pending 2nd reviewer). The Phase A specification is complete at `docs/intuit.md` (310 lines, 13 sections, full 4-phase build plan A→B→C→D, integration patterns with `/innovate` and `/td-critique`). No folder exists yet at `cognitive_harness/intuit/` or `~/.claude/skills/intuit/`. Building Phase A activates the Predictive RC (real-time hunch) layer of the project's strategic Baldwin cycle (Predictive RC × Retrospective RC closure described in `docs/desc.md`).

- **Conditional alternate 1: Materialization.** Documented at `docs/materialization_lifecycle.md` as the missing operation that turns a finding into executable artifacts. Has the highest per-inquiry leverage of the three candidates — closing the theory-loop → action gap affects every project artifact going forward. But it FAILS the critical cannon-fit criterion under strict reading: the canonical taxonomy does not currently admit materialization, and the materialization doc itself characterizes it as a 9-step *lifecycle* (artifact request → task description → implementation plan → dynamic critic → plan repair → implementation → validation → materialization trace → retrospective learning), not a single-operation discipline. Whether materialization should be a discipline, a runner (like `/MVL+`), a protocol, or warrants a 5th taxonomy category is itself a structural inquiry the user would need to commission first.

- **Conditional alternate 2: Nav v2 / Reflect v2.** Both are admitted Boundary disciplines whose current implementations are slated for archive per the recently-completed context-blur inquiry. The redesigns are engineering refreshes of admitted slots, not new admissions to the cannon. They surface only if the user redirects the question's scope from "next new discipline to add" to "next engineering work to focus on."

- **Pre-filtered candidates that did not reach the finalist set.** Future-register candidates (consolidation, parallel-MVL coordination, Level-3 intuition-space generation) are deferred per the canonical taxonomy until specific revival triggers fire; none of those triggers is currently met. Genuinely-new untaxonomized candidates (translation, hypothesis-forming, resolution) overlap with existing or admitted disciplines and would require new admission audit. Renames and merges are explicitly out of scope or rejected.

- **The recommendation respects the user's intent without forcing it.** The user-stated cannon omits `/intuit`. Most likely interpretation: the user uses "cannon" to mean "actively invoked" rather than "admitted in taxonomy." Building `/intuit` would naturally bring it into the user's working cannon. If the user's intent was different — for instance, asking about disciplines outside the current taxonomy — the recommendation surfaces this gap and offers an override path in Open Questions.

- **The build path for `/intuit` Phase A is bounded.** Four follow-up steps: a structural inquiry to translate `docs/intuit.md` into discipline-file shape; a process inquiry to specify the runnable 3-step transform-space procedure; initial implementation testing on a small corpus; and a calibration-threshold gate established for Phase B+ promotion (gated at N ≥ 15 calibrated runs). Plus two dependencies to coordinate: the audit's 2nd-reviewer pass on `/intuit` admission, and the potential `/td-critique` → `adjudicate` rename (per the recently-completed rename inquiry) which would affect integration-pattern wording.

- **Two non-critical caveats are carried forward as Open Questions.** Calibration uncertainty for Phase B+ (the spec acknowledges this) is well-flagged and worth keeping visible. The user's cannon-vs-taxonomy gap is real and may warrant clarification — the user might want to consciously update their mental model or override the taxonomy's frame.

## Finding

The user has been iterating intensely on the cognitive harness. Recent inquiries have focused on cleanup — renaming `/td-critique`, designing a convention for archiving experimental disciplines, making the safety substrate measurement-aware. With cleanup in flight, the natural next question is what to *build next*. The user phrased it openly: "what do you think is next discipline might be?"

### 1. The canonical taxonomy is the structural reference

The project has a canonical discipline taxonomy at `docs/discipline_taxonomy.md`. It defines 4 categories with admission criteria and an audit framework. The current admitted set:

- **Core (pipeline-sequential, 5 disciplines):** `explore`, `sense-making`, `decompose`, `innovate`, `td-critique`. These run in sequence (`E → S → D → I → C`) for every inquiry. All 5 are implemented in `cognitive_harness/`.
- **Cross-cutting (always-available, 1 admitted discipline):** `/intuit`. Admitted via a documented audit (4-property criteria + corpus-located evidence; status PASS pending 2nd reviewer). **No implementation folder exists** in `cognitive_harness/` or `~/.claude/skills/`. The spec at `docs/intuit.md` is comprehensive.
- **Boundary (between-cycle, 2 disciplines):** `/reflect` (backward-looking process retrospective) and `/navigation` (forward-looking direction enumeration). Both have current implementations but were flagged for archive in the prior context-blur inquiry; redesigns are mid-flight engineering.
- **Situational (organic, on-demand):** `/comprehend`, `/elaborate`, `/wayfinding`. Loose admission; specialized tools.

The taxonomy also keeps a register of 15 rejected candidates (each with revival triggers if conditions change) and 3 future-register candidates (consolidation, parallel-MVL coordination, Level-3 intuition-space generation — all gated on specific operational thresholds the project hasn't reached).

### 2. The unique structural opening: `/intuit` is admitted but unbuilt

Surveying the runtime inventory against the taxonomy:

- All 5 Core disciplines are implemented.
- Both Boundary disciplines have implementations (slated for archive, but present).
- Situational disciplines are organic; admission is loose; no urgent gap.
- Future-register candidates have unmet triggers.
- **`/intuit` is the unique admitted-cannon-position-without-implementation.**

The discipline is documented at `docs/intuit.md` in unusual depth: 13 sections covering identity (what it IS and IS NOT), the 3-step transform-space pattern (Forward transform → Scan → Projection), three scan modes (convergent / divergent / adversarial), per-step primitive attribution, two invocation modes, output schema (10 to 13 fields per phase), four decline conditions, six inherited failure modes, a 4-phase build plan (A → B → C → D), integration patterns with `/innovate` and `/td-critique`, calibration framework, and honest limits. The spec is essentially ready to translate into discipline-file shape; the main work is structural and process design followed by initial implementation testing.

### 3. Why `/intuit` is the recommended primary

The recommendation comes from a 7-criterion evaluation (operation-fit at the canonical taxonomy level was the critical criterion; build-readiness, phase-fit, strategic-leverage, build-cost, user-language alignment, composability were the others; Critique added three project-specific risks — decidability, reversibility, honesty-on-tradeoffs).

On the critical cannon-fit dimension, `/intuit` is the only candidate that PASSes cleanly. Materialization FAILS this dimension under strict reading (not admitted; classification uncertain). Nav v2 / Reflect v2 PASS but are refreshes of existing slots, not new admissions — semantic mismatch with the "next discipline" framing.

On build-readiness, `/intuit`'s Phase A spec is complete; the other candidates have either no discipline-shape spec (materialization) or partial implementations being replaced (nav/reflect).

On phase-fit, `/intuit` Phase A explicitly defers calibration-dependent capability (Phase B+) to gates that activate later when N ≥ 15-30 calibrated runs accumulate. The Phase A build doesn't require calibration the project hasn't done yet.

On strategic leverage, `/intuit` is medium — it adds an inquiry-time hunch capability without changing the project's structural arc. Materialization is higher leverage (closes finding-to-action gap that affects every artifact). The recommendation honestly notes this trade-off and offers materialization as a conditional alternate.

On build-cost, `/intuit` Phase A is bounded (~2-3 follow-up inquiries). Materialization is much higher (5-8 total inquiries including upstream classification). Nav/Reflect v2 are medium (~4 inquiries total).

On user-language alignment, `/intuit` is the project's term — not loop-coined. The user is likely to accept it on adoption.

On composability, `/intuit`'s spec documents explicit integration patterns with `/innovate` (seeds for Domain Transfer and Combination mechanisms), `/td-critique` (validator mode for prosecution/defense corpus grounding), and `/MVL+` (pipeline-early opt-in). Materialization, by contrast, is structured as a post-finding lifecycle outside the current `/MVL+` loop, requiring either a new runner or an extension of `/MVL+`.

### 4. Materialization is a strong alternate, but the frame matters

Materialization is real, important, and documented. The `docs/materialization_lifecycle.md` doc opens with: *"Homegrown should not jump directly from a finding to file edits. The missing operation is materialization: turning an accepted decision into concrete files under an explicit contract."* This is genuine capability-gap territory — at present, every finding's Next Actions are executed manually by the user.

However, materialization fails the critical cannon-fit criterion under strict reading. The taxonomy does not admit it. The lifecycle doc characterizes it as a 9-step sequence, not a single-operation discipline. The classification question — discipline / runner / protocol / new category — is itself a separate inquiry the project would need to commission. Skipping that classification and committing to "build materialization" risks an architectural commitment without clarity.

The honest framing: materialization is the right pick if the user weights capability-leverage above strict cannon-fit AND is willing to redirect the inquiry's scope from "next discipline" to "next major capability" AND is willing to first run a taxonomy-classification inquiry to settle materialization's structural shape.

If the user picks materialization, the build path is different: classify first, then per-step disciplines, then integration with `/MVL+` or a new runner. Total ~5-8 follow-up inquiries.

### 5. Nav v2 / Reflect v2 are engineering, not new admission

The third conditional alternate is the redesign work for `/navigation` and `/reflect`. Both are admitted Boundary disciplines per the canonical taxonomy. Both have current implementations in `cognitive_harness/`. The prior context-blur inquiry recommended archiving the current versions to `cognitive_harness/_archive/` while redesigns proceed — the redesigns are the "next engineering."

Semantically, this is stretched as an answer to "next NEW discipline" — these aren't new admissions, they're refreshes. The Innovation phase positioned them honestly: right pick only if the user redirects the question from "what new discipline to add" to "what engineering work to focus on."

### 6. The build path for `/intuit` Phase A

If the user commits to `/intuit` Phase A as the primary, the follow-up sequence is four inquiries:

**Step 1 — Structural inquiry on `/intuit` Phase A spec.** Layer commitment: structural. Translate `docs/intuit.md` (which is the canonical reference) into the project's discipline-file shape — a compact `cognitive_harness/intuit/SKILL.md` (~50 lines: frontmatter + pre-read pointer + Additional Input + Instructions) plus the full canonical reference at `cognitive_harness/intuit/references/intuit.md` (organized into Identity / Components / Process / Quality / Output / Telemetry sections following sibling-discipline conventions). Open structural questions for that inquiry to resolve: which sections become preamble vs detail; how to integrate the audit-pending note; whether the 11-primitive Primitive Profile section lives in the reference or stays only in the canonical taxonomy table.

**Step 2 — Process inquiry on `/intuit` Phase A procedure.** Layer commitment: process. Specify the runnable 3-step transform-space pattern (Forward transform → Scan → Projection) with convergent scan mode only (Phase A; divergent and adversarial deferred); source-first entry point (Phase A); 10-field seed output schema; per-seed evidence-linked invocation trace; four decline conditions producing INSUFFICIENT_INTUITION state; six inherited failure modes; substrate-delegation profile per the spec's substrate-versioned mapping.

**Step 3 — Initial implementation testing.** Layer commitment: process / implementation. Register the discipline in the runtime registry (`cp -r cognitive_harness/intuit ~/.claude/skills/intuit`). Run `/intuit` on a small corpus (3-5 prior findings as the corpus; one source as test input). Verify Phase A end-to-end: forward-transform produces non-trivial structured abstractions; scan returns matches above similarity floor; projection produces non-empty hypotheses with reliability scores; invocation trace is evidence-linked. Iterate on Step 1 or 2 if anything fails.

**Step 4 — Calibration threshold gate established for Phase B+.** Document the N ≥ 15 calibration runs requirement before Phase B (divergent mode + discriminators + embedded invocation). Establish the per-discipline calibration log mechanism: each `/intuit` invocation appends a record; outcome signals (when they fire from Retrospective RC infrastructure) update the log. The Phase B promotion criterion: N ≥ 15 calibrated invocations + the ≥60% discriminator-actionability test specified in the canonical spec.

**Dependencies to coordinate:**
- The canonical taxonomy lists `/intuit`'s audit as PASS pending 2nd reviewer. Securing the second review can run in parallel with Step 1.
- The recently-completed rename inquiry recommended renaming `/td-critique` → `adjudicate`. If the user commits to that rename, the `/intuit` spec's integration-patterns section (which currently references "td-critique") will need updating. Two options: run the rename first so Step 1 uses the new name throughout, or proceed with Step 1 now and update later (small cost).
- Materialization classification is NOT a prerequisite for `/intuit`. Independent track.

## Next Actions

### MUST

- **What:** Adjudicate among the three options (primary + 2 alternates) or specify another candidate. See Open Question 1 below for the explicit decision.
  - **Who:** the user, in the next conversation turn.
  - **Gate:** before launching any follow-up inquiry.
  - **Why:** the build paths diverge sharply per option; running the wrong follow-up wastes work.

- **What (conditional on the user picking `/intuit` Phase A):** Run the 4-step build path described above. The first follow-up inquiry would be the structural inquiry: layer commitment **structural**, scope = translating `docs/intuit.md` into discipline-file shape at `cognitive_harness/intuit/SKILL.md` + `references/intuit.md`.
  - **Who:** user-initiated via `/MVL+` on the next inquiry.
  - **Gate:** after the user confirms `/intuit` as primary.
  - **Why:** translates documented spec into runnable discipline; activates the Predictive RC layer of the Baldwin cycle.

- **What (conditional on the user picking materialization):** Run a taxonomy-classification inquiry first — *what kind of structural object is materialization?* (discipline / new category / runner / protocol). Only after classification settles can build path proceed.
  - **Who:** user-initiated.
  - **Gate:** after the user confirms materialization as primary.
  - **Why:** committing to build materialization without classification creates an architectural-orphan risk; the classification inquiry is upstream.

- **What (conditional on the user picking nav v2 / reflect v2):** Continue the in-flight redesign work; no new admission inquiry needed.
  - **Who:** user.
  - **Gate:** after the user confirms scope-redirect to engineering refresh.
  - **Why:** the work is already in flight; this confirms it as the priority.

### COULD

- **What:** Run `/intuit` Phase A and the materialization classification inquiry in parallel.
  - **Who:** user (manages parallel-inquiry capacity).
  - **Gate:** time-bound — within the next 2-3 weeks if both feel high-priority.
  - **Why:** both tracks progress; reversible. But the project's current pattern is sequential inquiries, and split attention has its own costs. Adopt only if capacity allows.

- **What:** After `/intuit` Phase A ships, update the canonical taxonomy doc (`docs/discipline_taxonomy.md`) and the project's auto-memory to reflect `/intuit`'s implementation status as built (not just admitted).
  - **Who:** user.
  - **Gate:** after Step 3 (implementation testing) of the build path passes.
  - **Why:** keeps documentation coherent with runtime state.

### DEFERRED

- **What:** Address the future-register candidates (consolidation, parallel-MVL coordination, Level-3 intuition-space generation).
  - **Gate:** condition-bound — when the canonical taxonomy's revival triggers fire (parallel-inquiry rate exceeds threshold; project reaches Level 3 autonomy; `/intuit` matures to Phase D+).
  - **Why (if revived):** these are real future-state capabilities; the taxonomy's trigger framework defers them until they become operationally relevant.

- **What:** Run a "next 3-5 disciplines roadmap" inquiry that takes a broader view than this single-pick.
  - **Gate:** observable — when the user wants longer-horizon planning rather than incremental decisions.
  - **Why (if revived):** roadmap framing has value; this finding deferred it to respect the user's "what's next?" (singular) framing.

## Reasoning

### Why `/intuit` over the alternatives

The exploration phase surveyed the canonical taxonomy and found that `/intuit` is the unique admitted-but-unbuilt cannon discipline. Sensemaking tested three framings of "next discipline" — strict cannon-fit (favors `/intuit`), capability-leverage (favors materialization), and in-flight engineering (favors nav/reflect refresh). Status Quo Bias was explicitly tested both directions: the canonical taxonomy IS a status-quo structure, but it's grounded (4-property admission criteria + corpus-evidence audit framework + 15 rejected candidates with revival triggers + 3 future-register with trigger gates), so defending its frame is justified rather than reflexive.

The strict cannon-fit frame won on multiple grounds: (a) it's the most precise reading of "discipline" given the taxonomy's structure; (b) `/intuit` is uniquely positioned within that frame; (c) the user's actual phrasing — "what do you think is next discipline might be?" — is hedged but explicitly says "discipline." The capability-leverage frame would favor materialization, but committing to materialization requires first running a classification inquiry — that's a different kind of inquiry, addressing a different question (what kind of structural object is materialization).

Innovation tested all candidates against 7 criteria; Critique added 3 project-specific risk dimensions (decidability, reversibility, honesty-on-tradeoffs). Adversarial prosecution produced 12 lines across the 3 candidates plus probes on the recommendation packet itself. The strongest residual prosecution against `/intuit` is the user-perspective objection: the user's stated cannon omits `/intuit`, so recommending it may be answering the taxonomy's question rather than the user's. The recommendation handles this by surfacing the user-cannon-vs-taxonomy gap explicitly in Open Questions; the user can override if their actual intent was different.

### Why the killed candidates were killed

- **Future-register candidates** (consolidation, parallel-MVL coordination, Level-3 intuition-space generation): the canonical taxonomy's revival triggers are not met. Parallel-inquiry rate is not above the implied threshold; the project is not at Level 3 autonomy; `/intuit` is not at Phase D+ maturity. Reviving these prematurely would be over-engineering.

- **Genuinely-new untaxonomized candidates** (translation, hypothesis-forming, resolution): each overlaps with existing or admitted disciplines. Translation between layers is `/sense-making`'s perspective work plus the layer-commitment framework in `/MVL+`. Hypothesis-forming is `/intuit`'s Popperian projection step. Resolution between approaches with explicit criteria is `/td-critique`'s verdict mechanism. None of these is independently load-bearing enough to warrant a new admission audit.

- **Forced merges** (e.g., `/explore` + `/sense-making`): explicitly rejected in the taxonomy doc's "Rejected after consideration" list. The dependency direction — what exists vs what it means — is structural, not aesthetic.

- **`meta-loop` admission to the taxonomy**: `meta-loop` is a runner-shape (stateful traversal engine over inquiry artifacts), not a discipline. It fits the future-register Parallel-MVL-coordination slot; that slot's trigger is not met.

- **Real-time metacognition as a discipline**: category-mistake per the taxonomy doc — real-time metacognition is a PRIMITIVE operating WITHIN disciplines, not a discipline itself.

## Open Questions

### Blocked

**OQ-1 — Which option do you commit to? (decision required before any follow-up inquiry)**

The inquiry recommends:

- **Primary: `/intuit` Phase A** — strict cannon-fit; spec complete; bounded build path; activates Predictive RC of Baldwin cycle.
- **Alternate 1: Materialization** — capability-leverage; requires upstream taxonomy-classification inquiry first.
- **Alternate 2: Nav v2 / Reflect v2** — in-flight engineering refresh; not strict new admission.

Confirm one:
- [ ] `/intuit` Phase A (primary recommendation)
- [ ] Materialization (classification inquiry first)
- [ ] Nav v2 / Reflect v2 (engineering refresh; redirect scope)
- [ ] Parallel-track: `/intuit` Phase A + materialization classification in parallel
- [ ] Other (please specify; we'll evaluate against the same 7 criteria)

This is BLOCKED — no follow-up inquiry should run until you respond.

### Refinement Triggers

**OQ-2 — Calibration uncertainty for `/intuit` Phase B+.**

The Phase A build is bounded and produces standalone value (real-time hunches with reliability scores + evidence-linked invocation traces). But Phase B+ — divergent scan mode (cross-domain structural analogy), discriminator-ranked output, embedded invocation, adversarial mode (Phase C), and scale-adaptive operation (Phase D) — is gated on N ≥ 15-30 calibrated runs per discipline. If calibration data doesn't accumulate (because outcome signals from Retrospective RC are weak or because the project doesn't run enough `/intuit` invocations), Phase B+ may stall.

Refinement trigger: condition-bound — re-evaluate after Phase A has been operational for ~30 inquiries. If calibration data is rich, proceed to Phase B. If thin, consider the Retrospective RC infrastructure as the next investment instead.

**OQ-3 — User-cannon-vs-taxonomy gap clarification.**

Your stated cannon (recent prior conversation) named: `explore`, `innovate`, `MVL`, `MVL+`, `protocols`, `sense-making`, `td-critique`. The canonical taxonomy admits 8 disciplines (5 Core including `decompose`, 1 Cross-cutting `/intuit`, 2 Boundary `/reflect` + `/navigation`).

The gap is most likely due to different meanings of "cannon" (you may mean "actively-invoked"; the taxonomy means "admitted-by-criteria"). Building `/intuit` would naturally bring it into your working cannon. But if your intent was different — for instance, you view the taxonomy as outdated, or you want to add a discipline not on it — please clarify. This inquiry's recommendation assumes your "next discipline" means "next admitted-but-unrealized to actualize."

### Research Frontiers

**OQ-4 — Roadmap for next 3-5 disciplines (out-of-scope for this inquiry).**

You asked "what's next" (singular). A broader question — "what are the next 3-5 disciplines to build in order, with dependencies and timeline?" — would be a separate roadmap inquiry. Likely scope: this inquiry's primary (`/intuit` Phase A) is the first node; the materialization classification is a likely second; nav/reflect v2 may be third; future-register candidates depend on triggers. Worth a dedicated inquiry if you want longer-horizon planning.

### Side observation (not blocking)

The auto-memory entry `"Discipline design-history location"` (in `~/.claude/projects/.../MEMORY.md`) currently states "discipline institutional memory lives at `enes/discipline_design_history/for_<discipline>.md`." The folder is at `docs/discipline_design_history/` (project-wide reorganization). This was also surfaced in the prior context-blur and rename inquiries; carrying forward here for completeness. The auto-memory entry can be updated when convenient with:

```
- [Discipline design-history location](project_discipline_design_history_location.md) — discipline institutional memory lives at `docs/discipline_design_history/for_<discipline>.md`, not co-located with the runtime spec.
```

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+


what do you think is next discipline might be?
```

</details>
