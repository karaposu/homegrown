# Innovation: Next Discipline Candidate

## User Input

Inquiry `_branch.md`. Input: decomposition.md (5 pieces P1-P5 with verification criteria + interfaces + execution order) + sensemaking.md (3 commits + primary /intuit + alternates) + exploration.md. Mode: elaboration. Apply Combination + Absence-Recognition + Domain-Transfer (generators); Lens-Shifting + Constraint-Manipulation + Inversion (framers).

---

## Seed and Direction

**Seed:** Sensemaking committed `/intuit` Phase A as primary; Decomposition partitioned into 5 pieces. Innovation produces concrete content per piece so Critique can adversarially test the recommendation.

**Direction (intuition):** The recommendation is strong on cannon-fit. The load-bearing work for this Innovation is (a) the per-candidate scoring against criteria (P2), (b) the build-path concretization for `/intuit` Phase A (P4), and (c) the user-decision framing that respects the user's actual phrasing while surfacing the taxonomy structure (P3).

---

## P1 — Criteria Specification

The 7 dimensions a candidate must score on, with weights:

| # | Dimension | Weight | Success criterion | Source |
|---|---|---|---|---|
| **C1** | **Taxonomy cannon-fit** | **CRITICAL** | Candidate is admitted in canonical taxonomy (`docs/discipline_taxonomy.md`) OR has an explicit admission path | Sensemaking commit 1 (strict cannon-fit frame); taxonomy doc admission criteria |
| **C2** | Build-readiness | HIGH | Phase A spec exists and is complete; implementation is mostly transcription work | Sensemaking K6; Exploration cycle 1 |
| **C3** | Phase-fit | HIGH | Doesn't require calibration thresholds or operational states the project hasn't reached | Sensemaking Phase/Calibration-State perspective; PC1 anchor |
| **C4** | Strategic leverage | MEDIUM | Activates a key project arc (Baldwin cycle, autonomy gradient, finding-to-action closure) | Sensemaking S1 anchor; `docs/desc.md` |
| **C5** | Build-cost | LOW | ~2-3 follow-up inquiries to ship Phase A; bounded effort | Sensemaking F1 anchor |
| **C6** | User-language alignment | MEDIUM | Discipline name and concept are in the user's actual vocabulary; not loop-coined | Sensemaking U1 anchor; user-language test |
| **C7** | Composability with cannon | MEDIUM | Integration patterns with existing disciplines documented; doesn't require restructuring `/MVL+` | Decomposition E2-E3 interface; Innovation Constraint-Manipulation surfacing |

Weight order: CRITICAL (C1 — failing here is fatal regardless of other scores) > HIGH (C2, C3) > MEDIUM (C4, C6, C7) > LOW (C5 — tiebreaker).

---

## P2 — Per-Candidate Elaboration

### Absence-Recognition check (did we miss candidates?)

Applied Absence-Recognition across:

- **Situational redesigns** (`/comprehend` rebuild, `/elaborate` + `/wayfinding` build-out): Situational admission is loose; no urgent capability gap; deprioritized.
- **Cross-domain candidates** (Dual-process theory, CBR, Baldwin cycle): All map to existing or admitted disciplines:
  - System 1 (fast intuition) → `/intuit` (already candidate)
  - System 2 (deliberate analysis) → SIC loop (already covered)
  - CBR Retrieve+Reuse → `/intuit` (already candidate)
  - CBR Revise → `/innovate` Projection step (covered)
  - Baldwin Predictive RC → `/intuit` (already)
  - Baldwin Retrospective RC → `/reflect` (admitted Boundary)
- **Genuinely new operations** (translation between layers, hypothesis-forming, resolution-between-approaches): each has overlap with existing disciplines (translation ≈ /sense-making's perspective work; hypothesis ≈ /intuit's Popperian prediction; resolution ≈ /td-critique's verdict).

**Absence-Recognition result:** no missed strong candidates. The 3 candidates already on the table (`/intuit`, materialization, nav/reflect v2) cover the available territory.

### Inversion check (what's the WRONG next discipline?)

A name that would NOT be next:
- A genuinely new discipline not in taxonomy or future-register — too speculative; would require admission audit
- A merge of existing disciplines — explicitly rejected by taxonomy
- A discipline requiring calibration the project hasn't reached
- A renamed existing discipline (covered by separate inquiries)

Inversion confirms: the right next discipline is admitted-but-unbuilt OR explicitly future-register-with-met-trigger. Only `/intuit` fits the first category; no future-register triggers are met currently.

### Score Matrix

| Candidate | C1 cannon-fit (CRIT) | C2 build-readiness (HIGH) | C3 phase-fit (HIGH) | C4 strategic-leverage (MED) | C5 build-cost (LOW) | C6 user-language (MED) | C7 composability (MED) |
|---|---|---|---|---|---|---|---|
| **`/intuit` Phase A** | **PASS** — admitted Cross-cutting; audit PASS pending 2nd reviewer | PASS — `docs/intuit.md` is complete (310 lines, 13 sections, 4-phase plan) | PASS — Phase A doesn't require calibration; Phase B+ gated | PASS — activates Predictive RC component of Baldwin cycle | MED — ~2-3 follow-up inquiries to ship Phase A | PASS — `/intuit` is project's vocabulary | PASS — integration patterns with `/innovate` and `/td-critique` documented |
| **Materialization** | **FAIL** — NOT admitted in taxonomy; classification uncertain | PARTIAL — lifecycle documented but no discipline-shape spec; sub-disciplines unenumerated | PASS — project state is ready in principle | PASS — highest leverage (finding → executable closure) | HIGH cost — 4-6 follow-up inquiries (classification + per-step disciplines + integration) | PASS — "materialization" is project's term | PARTIAL — post-finding lifecycle is OUTSIDE current `/MVL+` structure; needs new runner or `/MVL+` extension |
| **Nav v2 / reflect v2** | PASS — both admitted Boundary | PARTIAL — current implementations exist but redesigns mid-flight per prior context-blur inquiry | PASS — project actively redesigning these | PARTIAL — completing Boundary refresh is structural, not new capability | MED cost — ~2 inquiries each, 4 total | PASS — both are project terms | PASS — Boundary disciplines integrate at cycle boundaries by design |

### Per-Candidate Reasoning

**`/intuit` Phase A.** Strongest profile across criteria. The Phase A spec at `docs/intuit.md` is unusually mature — 310 lines, 13 sections covering operation, primitive attribution, scan modes, invocation, output schema, decline conditions, failure modes, phased build, integration, calibration, honest limits. The taxonomy explicitly admits it with audit PASS pending 2nd reviewer. No other admitted discipline is in a comparable admitted-but-unbuilt state. Strategically, `/intuit` activates the Predictive RC layer of the Baldwin cycle — half of the autonomous-consciousness arc per `docs/desc.md`. The Phase A build is bounded (~2-3 follow-up inquiries: structural spec + process spec + initial testing). Calibration-dependent capabilities (Phase B+ divergent mode, adversarial mode) are gated on N ≥ 15-30 runs and explicitly deferred.

*Light prosecution:* "`/intuit` is one more inquiry-time tool; materialization is a project-wide capability gap with much more leverage."
*Light defense:* "Leverage is real, but materialization fails strict cannon-fit and requires upstream classification first. /intuit is the highest-confidence ready-to-build candidate now; materialization is right pick AFTER classification settles."

**Materialization.** Real capability gap; documented at `docs/materialization_lifecycle.md` with 9-step lifecycle. But the doc characterizes it as a *lifecycle* (sequential 9 steps from artifact request to retrospective learning) rather than a single-operation discipline. The classification — discipline / runner / protocol / new category — isn't decided. Per Decomposition, attempting to commit materialization as the answer to "next discipline" without first running a classification inquiry would skip a structural decision that affects how it's built.

*Prosecution:* "FAIL on the CRITICAL dimension (C1). Period. The recommendation should KILL, not REFINE."
*Defense:* "The FAIL is contingent on the question being strictly read as 'next admitted discipline.' If read more loosely as 'next major capability addition,' materialization wins on leverage. The right response is to surface materialization as a conditional alternate (right pick when the user redirects scope), not to kill it outright."

**Nav v2 / Reflect v2.** Both admitted Boundary. Current implementations exist but slated for archive per the prior context-blur inquiry's recommendation. The redesigns are engineering refreshes of admitted slots, not new admissions. Semantic match with "next DISCIPLINE" is weak — these aren't NEW disciplines, they're rebuilds.

*Prosecution:* "If 'next discipline' means new admission, these don't qualify. They're engineering, not architecture."
*Defense:* "Right. They're listed as a conditional alternate for the user who would redirect the question to 'next engineering work' — same as materialization but for in-flight refresh."

### Disqualifications

| Disqualified | Reason |
|---|---|
| Future-register candidates (consolidation; parallel-MVL coordination; Level-3 intuition-space generation) | Taxonomy's revival triggers are not met (parallel-inquiry rate insufficient; not at Level 3 autonomy; `/intuit` not at Phase D+ maturity) |
| Genuinely new untaxonomized candidates (translation; hypothesis-forming; resolution discipline) | Overlap with existing or admitted disciplines (translation ≈ /sense-making perspective work; hypothesis ≈ /intuit; resolution ≈ /td-critique) OR would require new admission audit per taxonomy criteria |
| Discipline merges (e.g., `/explore` + `/sense-making` merge) | Explicitly rejected in taxonomy doc's "Rejected after consideration" list |
| Rename-only changes (e.g., rename `/sense-making`) | Not a new discipline; covered by separate inquiries |
| `meta-loop` admission to taxonomy | `meta-loop` is a runner-shape (stateful traversal engine), not a discipline; would fit as future-register Parallel-MVL-coordination |
| Real-time metacognition as discipline | Category-mistake per taxonomy: this is a PRIMITIVE within disciplines, not a discipline itself |

---

## P3 — Recommendation Packet (User-Facing)

### Top-3 ranked recommendations

**Rank 1 — `/intuit` Phase A** (recommended primary)

- **Operation-fit summary:** The Predictive RC layer — produces real-time hunches by recognizing structural patterns in the corpus of prior findings and projecting transferable consequences onto the current source via the 3-step transform-space pattern (Forward transform → Scan → Projection).
- **Right pick when:** The user weights strict cannon-fit + readiness over capability-leverage. The discipline is admitted, the spec is complete, and the Phase A build is bounded.
- **Tradeoff vs alternatives:** Highest cannon-fit + highest build-readiness; medium leverage compared to materialization (which has higher per-inquiry leverage but isn't admitted as a discipline); higher leverage than nav/reflect refresh (which is structural refresh, not new capability).
- **Commitment scale:** ~2-3 follow-up inquiries to ship Phase A; multi-month timeline through Phases B → C → D (gated on calibration thresholds documented in the spec).

**Rank 2 — Materialization** (conditional alternate)

- **Operation-fit summary:** The bridge from finding to executable — turning accepted decisions into concrete files with explicit contracts, validation results, and traces. Closes the theory-loop → action gap.
- **Right pick when:** The user weights capability-leverage over strict cannon-fit AND is willing to first run a classification inquiry (discipline / runner / protocol / new category?) before building. Effectively redirects "next discipline" to "next capability."
- **Tradeoff vs alternatives:** Highest leverage of all three; but **FAILS strict cannon-fit (not admitted)** and requires upstream taxonomy-classification work. The classification inquiry itself is non-trivial.
- **Commitment scale:** ~1-2 classification inquiries + 4-6 build inquiries = 5-8 total.

**Rank 3 — Nav v2 / Reflect v2** (conditional alternate)

- **Operation-fit summary:** The redesign of admitted Boundary disciplines — backward-looking process retrospective (`/reflect`) + forward-looking direction enumeration (`/navigation`). Both have current implementations slated for archive in the prior context-blur inquiry.
- **Right pick when:** The user redirects scope to "what engineering work to focus on" rather than "what new discipline to add." These are refreshes of admitted slots, not new admissions.
- **Tradeoff vs alternatives:** Passes cannon-fit (both admitted as Boundary); but semantic match with "next NEW discipline" is weak — these are rebuilds. Lower strategic novelty than `/intuit` or materialization.
- **Commitment scale:** ~2 inquiries each (4 total).

### Honorable mentions (not in top-3)

- Future-register candidates remain in the taxonomy's deferred list with revival triggers; revisit when triggers fire (parallel-inquiry rate, Level 3 autonomy, /intuit Phase D+ maturity).
- `meta-loop` (currently in `cognitive_harness/`) is unlikely to be the next admission — it's runner-shape, fits Parallel-MVL-coordination future-register, and triggers aren't met.

### Explicit user-decision question

**Which path do you commit to?**

- [ ] **`/intuit` Phase A** (recommended primary — strict cannon-fit; ready to build)
- [ ] **Materialization** (capability-leverage; requires upstream classification inquiry first)
- [ ] **Nav v2 / Reflect v2** (in-flight engineering refresh)
- [ ] **Other** (please specify; we'll evaluate against the same 7 criteria)

The inquiry's primary recommendation is `/intuit` Phase A. The alternates are listed for users who weight criteria differently or who want to redirect inquiry scope.

---

## P4 — Build Path for `/intuit` Phase A

If the user commits to `/intuit` Phase A as primary, the next-inquiry sequence:

### Step 1 — Structural inquiry on `/intuit` Phase A spec

**Layer commitment:** structural (the spec's section organization, schema, references-file shape).

**Scope:** Translate `docs/intuit.md` into discipline-file shape:
- `cognitive_harness/intuit/SKILL.md` — frontmatter (`name: intuit` + description) + Step 0 pre-read + Additional Input + Instructions block. Compact form (~50 lines).
- `cognitive_harness/intuit/references/intuit.md` — full canonical reference (likely close to `docs/intuit.md` content, organized into the canonical discipline-spec sections: Identity / Components / Process / Quality / Output / Telemetry).

**Open structural questions for the inquiry to resolve:**
- Which sections of `docs/intuit.md` become preamble vs detail?
- Does the 11-primitive Primitive Profile section live in `references/intuit.md` or stay only in the taxonomy table?
- How to integrate the audit-second-reviewer-pending note?

**Output:** structurally-organized discipline files ready for the process spec.

### Step 2 — Process inquiry on `/intuit` Phase A procedure

**Layer commitment:** process (the steps, gates, decline conditions, output trace).

**Scope:** Specify the runnable procedure:
- The 3-step transform-space pattern: Forward transform → Scan → Projection
- Convergent scan mode (Phase A only; divergent + adversarial deferred to Phase B/C)
- Source-first entry point (Phase A); inquiry-state-first deferred to Phase B
- 10-field seed output schema (Phase A); per-seed evidence-linked invocation trace
- 4 decline conditions → INSUFFICIENT_INTUITION
- 6 inherited failure modes
- Substrate delegation profile (per the spec's substrate-versioned yaml)

**Output:** procedural spec runnable by the LLM.

### Step 3 — Initial implementation testing

**Layer commitment:** process / implementation.

**Scope:**
- Register the discipline in the runtime registry: `cp -r cognitive_harness/intuit ~/.claude/skills/intuit`
- Run `/intuit` on a small corpus (3-5 prior findings as the corpus; one source as test input)
- Verify Phase A end-to-end:
  - Forward transform produces non-trivial structured abstractions
  - Scan returns matches above similarity floor
  - Projection produces non-empty hypotheses with reliability scores
  - Invocation trace is evidence-linked
- If any step fails, iterate on Step 1 or Step 2.

**Output:** tested Phase A; calibration-log mechanism initialized.

### Step 4 — Calibration threshold gate established for Phase B+

**Layer commitment:** structural (the gate-condition document) + process (the calibration mechanism).

**Scope:**
- Document the N ≥ 15 calibration runs requirement before Phase B (divergent mode + discriminators + embedded invocation)
- Establish per-discipline calibration log mechanism: each `/intuit` invocation appends a record; outcome signals (when they fire from Retrospective RC) update the log
- The Phase B promotion criterion: N ≥ 15 calibrated invocations + ≥60% discriminator-actionability test

**Output:** gate-condition established; Phase B promotion path clear.

### Dependencies

- **Audit 2nd-reviewer pass on `/intuit` admission.** The canonical taxonomy lists the audit as PASS pending 2nd reviewer. Before declaring admission complete, secure the second review (this can run in parallel with Step 1).
- **`/td-critique` → `adjudicate` rename impact.** Per the recent rename inquiry, if the user commits to renaming `/td-critique`, then `/intuit`'s integration-patterns section (which references "td-critique") will need updating. Two options:
  - Run rename first, then `/intuit` structural inquiry uses the new name from the start
  - Run `/intuit` structural inquiry now with `td-critique`, update later (small cost)
- **Materialization classification:** NOT a prerequisite. Independent track. `/intuit` can ship without materialization being classified.

---

## P5 — Adjacent Observations + Cross-References

### Roadmap framing (OUT-OF-SCOPE for this inquiry)

The user asked "what's next discipline" (singular). A broader question — "what are the next 3-5 disciplines to build in order, with dependencies and timeline?" — is a separate **roadmap inquiry**, deserving its own `/MVL+` run with Layer Commitment likely **process** (since it would specify ordering and gating). This inquiry's recommendation (build `/intuit` Phase A next) becomes the first node of any future roadmap.

### Memory-hygiene observation (carried forward)

The user's auto-memory entry `"Discipline design-history location"` (in `~/.claude/projects/.../MEMORY.md`) currently states "discipline institutional memory lives at `enes/discipline_design_history/for_<discipline>.md`." The folder has been renamed to `docs/discipline_design_history/` (project-wide reorganization of `enes/` → `docs/`). This was surfaced in two prior inquiries (context-blur, rename); carrying forward here as a small open item. Suggested update:

```
- [Discipline design-history location](project_discipline_design_history_location.md) — discipline institutional memory lives at `docs/discipline_design_history/for_<discipline>.md`, not co-located with the runtime spec.
```

### User-cannon-vs-taxonomy gap clarification

The user's stated cannon (from earlier conversation): `explore`, `innovate`, `MVL`, `MVL+`, `protocols`, `sense-making`, `td-critique`. Effectively 5 disciplines + 2 runners + 1 folder.

The canonical taxonomy admits 8 disciplines:
- **Core (5):** `explore`, `sense-making`, `decompose`, `innovate`, `td-critique`
- **Cross-cutting (1):** `/intuit` (admitted but UNBUILT)
- **Boundary (2):** `/reflect`, `/navigation` (both admitted; current implementations slated for archive)

The user's cannon omits `decompose` (used implicitly by `/MVL+`), `/intuit` (unbuilt), and the two Boundary disciplines. Most likely interpretation: the user means "actively invoked" rather than "admitted in taxonomy." This finding surfaces the gap so the user's mental model can update if they want — they may be treating "cannon" as "in-use," in which case `/intuit` being added to cognitive_harness/ (Phase A build) will naturally bring it into their working cannon.

### Cross-references

Source documents this finding draws on:

- `docs/discipline_taxonomy.md` — canonical 4-category discipline taxonomy (Core / Cross-cutting / Boundary / Situational); admission criteria; rejected candidates with revival triggers; future-register
- `docs/intuit.md` — `/intuit` Phase A complete spec (13 sections, ~310 lines)
- `docs/materialization_lifecycle.md` — materialization documented as missing operation
- `docs/desc.md` — autonomous-consciousness goal + Baldwin cycle strategic arc
- `devdocs/inquiries/2026-05-15_10-59__project_identity_and_milestone_ordering/finding.md` — milestone arc (self-maintenance, auto-navigation, meta-loop, materialization)
- `devdocs/inquiries/2026-05-16_07-25__preventing_replacement_design_context_blur/finding.md` — recommendation to archive nav/reflect/comprehend/meta-loop
- `devdocs/inquiries/2026-05-16_09-15__rename_td_critique/finding.md` — recommendation to rename `/td-critique` → `adjudicate`; affects `/intuit` integration-patterns wording

---

## Assembly Check

The 5 pieces compose:

1. **P1 criteria** establishes the 7-dimension scoring framework.
2. **P2 per-candidate evaluation** applies the framework to 3 candidates + lists disqualifications.
3. **P3 recommendation packet** distills into a user-facing ranked list with conditional reasoning and explicit user-decision.
4. **P4 build-path** specifies the concrete next-inquiry sequence for the recommended primary.
5. **P5 adjacent observations** surfaces roadmap-framing-out-of-scope, memory-hygiene, user-cannon-vs-taxonomy gap, and cross-references.

**Emergent property:** the packet serves as both a recommendation AND a template. If the user later wants to evaluate additional candidates (e.g., after future-register triggers fire), the criteria + scoring structure transfers directly.

### Axis Coverage Check

| Axis | Coverage |
|---|---|
| Cannon-fit (canonical taxonomy) | C1, primary scoring criterion |
| Capability-leverage | C4 + materialization alternate framing |
| Readiness / phase | C2, C3 |
| Build-cost | C5 |
| User-language alignment | C6 |
| Composability with cannon | C7 |
| Strategic-arc (Baldwin cycle) | strategic-leverage anchor (Sensemaking S1) |

All axes have at least one candidate variant.

---

## Mechanism Coverage (Telemetry)

| Mechanism | Applied to | Output |
|---|---|---|
| **Combination** (G) | P3 packet | Integrates Sensemaking's primary + alternates + criteria + decomposition pieces into unified packet |
| **Absence Recognition** (G) | P2 candidate-space check | Confirmed no missed strong candidates after cross-domain check (CBR, Baldwin, dual-process); also surfaced disqualification list |
| **Domain Transfer** (G) | P2 cross-domain candidate signals | CBR Retrieve+Reuse → /intuit; Baldwin Predictive RC → /intuit; nothing new emerged |
| **Lens Shifting** (F) | P3 conditional recommendations | "Right pick when..." per candidate; lets user adjudicate based on their priority weighting |
| **Constraint Manipulation** (F) | P1 (added C7 composability dimension) | Constraint "must integrate with /MVL+ without restructuring it" discriminates materialization (PARTIAL) from /intuit (PASS) |
| **Inversion** (F) | P2 wrong-choice check | Confirmed boundary: admitted-but-unbuilt OR future-register-trigger-met is the right shape; /intuit uniquely fits |
| Extrapolation (G) | (not directly applicable to one-time discipline-choice question) | — |

**Generators applied:** 3/4 (Extrapolation N/A) ✓
**Framers applied:** 3/3 ✓

**Convergence:** STRONG. Multiple mechanisms point at /intuit (cannon-fit, build-readiness, strategic-leverage, composability, Inversion-confirmed admitted-but-unbuilt shape). 3-4 mechanisms converge.

### Failure-Mode Self-Check

| Mode | Status |
|---|---|
| 1. Premature Evaluation | ✗ avoided — each candidate scored against full 7-dimension matrix before ranking |
| 2. Single-Mechanism Trap | ✗ avoided — 3G + 3F applied |
| 3. Early Frame Lock | ✗ avoided — sensemaking's primary /intuit retained but alternates seriously elaborated (not dismissed) |
| 4. Innovation Without Grounding | ✗ avoided — each candidate tested against criteria; prosecution + defense applied |
| 5. Mechanism Exhaustion | ✗ avoided — applicable mechanisms produced; Extrapolation N/A |
| 6. Survival Bias | ✗ avoided — uncomfortable alternate (materialization with CRITICAL-fail) preserved with caveat; not silenced |

### Self-Assessment

**PROCEED.** 3 candidates scored on 7 criteria; ranked top-3 with conditional reasoning; user-decision question explicit; build-path for primary concretized; adjacent observations preserved. Convergence STRONG on `/intuit` Phase A. Ready for Critique to adversarially test the recommendation against the 3 sensemaking commits + cross-cutting + multi-axis prosecution (dimension-level / specific-failure-case / spec-gap / user-perspective).
