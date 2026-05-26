# Exploration — /navigation factoring question

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/_branch.md`

User's hypothesis: /navigation's iter-1 "enumerate routes, perception-only, no selection" definition is wrongly factored. /navigation = /explore (on route-space) + select-with-movement.

---

## Mode and Entry Point

- **Mode: possibility.** Factoring candidates must be generated.
- **Entry: signal-first.** User proposed a specific factoring; probe it against alternatives.
- **Surround layer:** /navigation's iter-1 spec; /meta-loop's architecture; /explore's iter-2 + later commitments.

---

## Cycles

### Cycle 0 — Surround layer

**/navigation's iter-1 spec (from `homegrown/navigation/SKILL.md`):**
- "Enumerates all possible next directions from a completed SIC cycle (or current project state), producing a navigation map with typed route-card records."
- 16-type taxonomy (content-directed / process-directed / context-directed)
- Per-route fields: Direction, Goal, Type, Priority, Status, Blocked-by, Purpose, Movement, Unlocks, Why-this-route-exists, Guidance-mode, Continuation-note
- **Perception only** — does not select; selection is human-chosen or meta-loop's job

**/meta-loop's architecture (from `homegrown/meta-loop/SKILL.md`):**
- Stateful traversal engine; V1 sequential and human-selected.
- Uses Navigation as **eyes** (perception of next-move space).
- Phase: probe (MVL+) → **see** (Navigation) → **select explicitly** (user picks) → assess.
- Explicit separation: Navigation perceives; selection is HUMAN at v1.

**/explore's iter-2 + later commitments:**
- Purposive open-mode surfacing.
- Two modes: artifact + possibility.
- Possibility mode generates candidates in conceptual territories.
- Depth-level + resolution-level Step 0 fields.
- Per-item content depth D0–D4.

### Cycle 1 — Generate factoring candidates

- **Candidate A — Status quo iter-1.** /navigation = enumerate-only (perception); selection is human/meta-loop. Vocabulary stays as-is.
- **Candidate B — User's proposal.** /navigation = /explore (route-space, possibility) + select-with-movement. Selection moves into navigation's discipline.
- **Candidate C — Rename + split.** Rename iter-1 /navigation → /enumerate-routes; introduce a new /navigation that includes enumerate + select. Vocabulary aligns with everyday meaning.
- **Candidate D — Vocabulary clarification.** Status quo + add explicit note: "navigation in this project means perception of route-space, not the full navigate-and-move operation." Minimal change.
- **Candidate E — Absorb into /explore.** Deprecate /navigation as a separate discipline. /explore in possibility mode over route-space + 16-type-taxonomy as labeling vocabulary. Selection handled separately.
- **Candidate F — Two-discipline split.** /enumerate-routes (renamed from /navigation) + /select-move (new discipline). Explicit two-step.
- **Candidate G — Hybrid (navigation invokes /explore internally).** /navigation calls /explore on route-space; takes the output; adds 16-type taxonomy; presents for selection. Single-discipline-with-internal-composition.

### Cycle 2 — Signal detection

| # | Signal | Type |
|---|---|---|
| **S1** | The enumerate-half of /navigation IS structurally /explore in possibility mode over route-space | Density (the operations match) |
| **S2** | Adding autonomous selection to /navigation conflicts with /meta-loop's "Navigation = perception, selection is human" design | Tension |
| **S3** | "Navigation" in everyday meaning = move-and-choose; in this project = enumerate-but-don't-choose. Mismatch causes recurring confusion (cf. nav_north_star.md) | Density |
| **S4** | Autonomous selection is L3+ on the autonomy ladder; v1 expects human-mediated selection | Constraint |
| **S5** | "Select" and "movement" are separate operations — selection picks a candidate; movement actuates. Movement is the runner's job (/MVL+, /meta-loop), not navigation's | Novelty |
| **S6** | The user's "explore + select" framing is consistent with /meta-loop's existing flow (Navigation produces, user selects), just with the boundary drawn differently | Resolution (apparent disagreement is actually compatible) |

### Cycle 3 — Probe S1 (enumerate-half = /explore-of-routes?)

Compare /navigation's enumerate-half against /explore-in-possibility-mode:

| /navigation enumerate | /explore possibility mode |
|---|---|
| Territory: next-move-space (always) | Territory: any conceptual space |
| Mode: enumerate candidates | Mode: surface candidates |
| Output: typed route-card map (16-type taxonomy) | Output: confidence-tagged map with labeling |
| Per-item fields: rich (Direction, Goal, Type, etc.) | Per-item fields: D2 default (identifier + surface + functional one-line); D3 (+ adjacency); D4 (+ relevance verdict) |

**These ARE the same operation.** /navigation's territory is specialized (always next-move-space). /navigation's labeling vocabulary is specialized (16-type taxonomy). But the cognitive operation — surfacing candidates in a possibility territory — is /explore's.

The 16-type taxonomy maps onto /explore's depth-level system: it's a *specialized labeling vocabulary* for route-items. Per the depth inquiry's distinction (labeling vs anchor), the 16 types are LABELS, not anchors. The vocabulary is high-inter-rater-agreement among scanners familiar with the typology.

**H1 strongly supported.** /navigation's enumerate-half is /explore-of-routes with a specialized labeling vocabulary.

### Cycle 4 — Probe S2 (selection conflict with /meta-loop?)

Re-reading /meta-loop's v1: "presents HIGH/MEDIUM options, user picks." Selection IS human-mediated at v1.

The user's proposed /navigation = "explore + select-with-movement" — what does "select" mean here?

Two readings:
- **Autonomous selection:** the discipline picks; user doesn't see options. → Conflicts with v1 + autonomy ladder; would require L3+.
- **Human-mediated selection-as-discipline-step:** the discipline includes the selection step in its workflow, with the user as decision-maker. The discipline does enumerate + present-for-selection + accept-selection. → Does NOT conflict; it's a re-drawing of the discipline boundary, not a change in who selects.

Under the second reading, /navigation absorbing selection is compatible with meta-loop's "user selects" — the selection just happens inside /navigation's run rather than between /navigation and meta-loop's next step.

**H2 partially supported.** Autonomous selection would conflict; human-mediated selection-as-discipline-step would not. The user's framing likely meant the second (their "select-with-movement" implies a deliberate cognitive step, not autonomous decision-making).

### Cycle 5 — Probe S3 (vocabulary)

The vocabulary confusion is real and recurring:
- `nav_north_star.md` used "navigation" for what was actually /explore work
- Iter-1 /navigation deliberately strips selection, which conflicts with everyday meaning

Three potential fixes:
- (a) **Vocabulary note** — status quo + clarifying note. (Candidate D.) Minimal change.
- (b) **Rename** — iter-1 /navigation becomes /enumerate-routes; "true /navigation" emerges as enumerate + select. (Candidate C.) Aligns with everyday meaning at cost of rename migration.
- (c) **Realign** — bring iter-1 /navigation closer to everyday meaning by including selection. (Candidate B.) The user's proposal.

Each is workable; the choice depends on how much project-vocabulary inertia is tolerable.

### Cycle 6 — Probe S5 (select vs movement)

The user's phrase was "select-with-movement." Two operations:
- **Select** — pick a candidate from a list.
- **Movement** — enact the choice (transition state; run next discipline).

These are distinct cognitive moves. In /meta-loop's v1: human selects; /meta-loop's next-step actuates the movement (runs MVL+ on the chosen direction).

If /navigation absorbs "select-with-movement," it absorbs BOTH select AND actuation. That goes further than the user might have intended. Movement (actuation) is structurally the loop runner's job — /MVL+, /meta-loop. Disciplines don't actuate; runners do.

**Refinement of the user's proposal:** /navigation could include select (the cognitive step of picking) but NOT movement (actuation remains with the runner). The phrase "select-with-movement" might conflate these.

### Cycle 7 — Jump scan: missed framings

**Direction not considered:** /navigation's operational role beyond enumeration. The iter-1 spec includes adaptive Guidance per route and Continuation notes — these are *meta-instructions for the user about how to proceed if they pick this route*. This is a NAVIGATION-AS-GUIDANCE aspect, not pure enumeration.

So /navigation as currently defined is actually:
- Enumerate routes (the /explore-of-routes half)
- Label routes (16-type taxonomy)
- Guide the user (adaptive guidance per route)
- Defer selection to user

The "guide" half is a NEW finding — it's not captured by the user's "explore + select" framing. /navigation produces *navigation guidance*, which is a structurally distinct contribution.

This sharpens the factoring question:

- /explore-of-routes (enumerate) — could be /explore
- 16-type labeling (typed enumeration) — /navigation's specialization
- **Adaptive guidance per route** — /navigation's unique contribution, NOT captured by /explore + select
- (Optional) select — could be in /navigation or separate

**Major lurch from jump scan.** The user's "explore + select" framing misses /navigation's adaptive-guidance role.

### Cycle 8 — Convergence

Re-assessment after jump scan:
- 3/3 convergence criteria met on the new finding (adaptive guidance) — surfaced cleanly without further surprises.
- Discovery rate dropped from Cycle 1 (7 candidates) → Cycle 7 (1 new framing) → Cycle 8 (0 new).

---

## Inventory (final candidate set)

### Surviving candidate factorings

- **Candidate A — Status quo (perception-only)** — keep iter-1 as is. Acceptable if vocabulary confusion is tolerable.
- **Candidate B-refined — /navigation = /explore-of-routes + label + guide + (optional) select** — refined from user's proposal: navigation absorbs the SELECT step (human-mediated) but movement remains runner's job. Adds adaptive guidance per route (already in iter-1).
- **Candidate C — Rename + split** — iter-1 /navigation → /enumerate-routes; new /navigation = enumerate + select. Vocabulary cost.
- **Candidate D — Vocabulary clarification** — status quo + clarifying note. Minimal change; doesn't address structural overlap.
- **Candidate E — Absorb into /explore** — deprecate /navigation; /explore + selection separately. Loses adaptive-guidance role.
- **Candidate F — Two-discipline split** — /enumerate-routes + /select-move as separate disciplines. Loses unified navigation guidance.
- **Candidate G — Hybrid (navigation invokes /explore)** — /navigation internally calls /explore on route-space. Complicates cross-discipline pattern.

### Most-fit candidates (advance to sensemaking)

- **Candidate A (status quo) + Candidate D (vocabulary clarification)** — minimum-change path. Acknowledge the /explore-of-routes overlap explicitly without restructuring; clarify vocabulary.
- **Candidate B-refined (user's, refined)** — restructured /navigation. Honors user's intuition; refines to handle the select-vs-movement distinction and preserve adaptive-guidance role.

The choice between A+D and B-refined is the load-bearing decision for sensemaking.

### Killed / dropped

- **Candidate E (absorb into /explore)** — loses adaptive-guidance role; /navigation's unique contribution is not just enumeration.
- **Candidate F (two-discipline split)** — fragments unified navigation guidance; over-decomposition.
- **Candidate G (hybrid invocation)** — cross-discipline invocation breaks the workspace invariant; complicates without clear gain.
- **User's literal proposal "select-with-movement"** — partly refined: select stays in /navigation as cognitive step; movement stays with the runner (actuation is runner's job).

---

## Signal Log

| # | Signal | Status |
|---|---|---|
| S1 | Enumerate-half = /explore-of-routes | PROBED → strongly supported (H1) |
| S2 | Selection conflict with meta-loop | PROBED → only conflicts under autonomous-selection reading; human-mediated selection doesn't conflict (H2 refined) |
| S3 | Vocabulary mismatch | PROBED → real and recurring; three potential fixes |
| S4 | Autonomous selection requires L3+ | NOTED — constrains Candidate B-refined to "human-mediated selection-as-discipline-step" only |
| S5 | Select ≠ movement | PROBED → movement is runner's job; navigation includes select only |
| S6 | User's framing compatible with /meta-loop's flow | CONFIRMED → no fundamental architectural conflict |
| **S7** | **/navigation has an ADAPTIVE GUIDANCE role** (per-route guidance + continuation notes) not captured by "explore + select" | **JUMP-SCAN FINDING** → major lurch; reshapes the candidate set |

---

## Confidence Map

| Region | Confidence | Note |
|---|---|---|
| Enumerate-half is /explore-of-routes | **Confirmed** | Operations match; only territory + labeling specialize |
| 16-type taxonomy is /navigation's labeling vocabulary (not a different operation) | **Confirmed** | Maps to /explore's depth-level system; labels not anchors |
| Adaptive guidance is /navigation's unique contribution | **Confirmed (jump-scan)** | Not captured by "enumerate + select" |
| Autonomous selection would conflict with meta-loop | **Confirmed** | v1 expects human-mediated selection |
| Human-mediated selection-as-discipline-step compatible with meta-loop | **Scanned** | Plausible reading of user's proposal; sensemaking should confirm |
| Movement (actuation) is the runner's job | **Confirmed** | Structurally clean; disciplines don't actuate |
| Status quo + vocabulary clarification is sufficient | **Scanned** | Minimum-change path; viable but doesn't address structural overlap |
| Refactored /navigation (B-refined) honors user's intuition + preserves adaptive guidance | **Scanned** | Most-fit candidate alongside A+D |

**Confirmed absent:**
- Candidate B's literal "select-with-movement" as-stated (movement is runner's job).
- Candidate E (absorb into /explore) — loses adaptive guidance.

---

## Frontier State

**STABLE.** All three convergence criteria met. Discovery rate declined steadily. Jump scan surfaced one major refinement (adaptive guidance) which is now incorporated.

---

## Gaps and Recommendations (handoff)

**For sensemaking:**

1. Stabilize the load-bearing choice: **A+D (status quo + vocabulary clarification)** vs **B-refined (restructured /navigation)**. Which honors the user's intuition AND preserves /navigation's unique adaptive-guidance role AND respects /meta-loop's architecture?
2. Resolve "select-with-movement" wording: refine to "select (cognitive step) with movement-handoff-to-runner."
3. Address the vocabulary issue: ship a vocabulary note regardless of which candidate is chosen — it's the recurring source of confusion (nav_north_star.md was just one symptom).
4. Articulate the implications for /meta-loop: does either candidate require changes to meta-loop's spec?

**For decompose:**

5. Partition the chosen candidate's implementation pieces.

**For innovate:**

6. Generate phrasings for the chosen candidate's spec edits.

**For critique:**

7. Stress-test whether Candidate B-refined preserves /navigation's adaptive-guidance role.
8. Stress-test whether vocabulary clarification alone (A+D) addresses the recurring confusion or if a more structural fix is needed.

---

## Telemetry

- **Mode:** possibility
- **Entry point:** signal-first
- **Cycles run:** 8 (surround + 6 probes + jump scan + convergence)
- **Candidates generated:** 7 (A–G)
- **Signals detected:** 7 (S1–S7); jump-scan finding S7 reshaped the candidate set
- **Survivors:** 2 leading (A+D combined; B-refined); 5 dropped/refined
- **Convergence:** 3/3 criteria met
- **Jump scan performed:** YES; produced major refinement (adaptive guidance)
- **Failure modes checked:** Premature Depth (no — broad scan first); Surface-Only Scanning (no — all signals probed); False Confidence (jump scan caught the adaptive-guidance role); Premature Termination (3/3 explicit); Re-Exploration (no — fresh inquiry layer); Completeness Bias (standard candidates A–D before novel E–G)
- **Output:** COMPLETE

## Self-Assessment

**Overall: PROCEED**

The factoring question reduces to two leading candidates: minimum-change (status quo + vocabulary clarification) vs structural-refactor (B-refined: /navigation = /explore-of-routes + label + guide + select). The user's "select-with-movement" is refined: select stays in /navigation; movement stays with the runner. The jump-scan finding (adaptive guidance as /navigation's unique contribution) reshapes the question — /navigation is NOT just "enumerate + select"; it also guides. Sensemaking should stabilize the choice between A+D and B-refined.
