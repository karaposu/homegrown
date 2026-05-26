---
status: active
---
# Finding: Navigation — What's Established So Far

## Question

**From `_branch.md`:** What is established so far about navigation in the homegrown thinking-engine project — across the `/navigation` discipline spec, the isolated Navigator session concept, the meta-loop's framing of navigation as "eyes," the discipline taxonomy's Boundary classification, and the relevant inquiry-chain findings — presented as a scannable list of items, each tagged with strength of evidence + reasoning, so the user can identify which items to challenge during navigation restructuring?

**Goal:** a list-formatted audit the user can use to (1) quickly survey what claims/principles/architectural commitments are already in place about navigation, (2) see per-item strength + reasoning, (3) identify which items are well-anchored vs which are interpretive or contested. The user explicitly noted prior navigation attempts "got bloated really quick due to broken inner discipline works" — this audit must NOT replicate that pattern. **Success criterion: user picks 3-5 items to challenge in <2 min reading.**

## Finding Summary

- **Foreground (~9 challenge candidates).** Items where the spec made a heuristic choice (a count, a list, a threshold, a partition) without first-principles derivation. These are where restructuring is most likely productive: D2 (12 required route fields), E7 (auto-derivable vs human-judgment partition), I2 (7 warming elements), O2 (guidance allocation rules), plus second-tier items (E2-E5 taxonomy overlaps, REVISIT modes + threshold, N1 10-of-16 type-coverage threshold, O1 4 guidance modes).
- **Background (~30 foundational items).** Items where the spec provides derivation — the definition of Navigation, what it isn't, Boundary classification, session-isolation invariant, failure modes, meta-loop relationship. Challenging these cascades through multiple disciplines, so background is reference, not engagement.
- **Deferred (~9 roadmap items).** Items the source documents explicitly name as future work (selection step, multi-head, automated selector, Level-3 graph schema, movement quality metrics, etc.). These are NOT bloat; they're acknowledged-as-incomplete.
- **The bloat the user noticed was real.** ~28 navigation-related inquiry folders accumulated 2026-04-27 through 2026-05-07; topic-overlap with the highest-tier challenge candidates (warmup variants → I2; route-expansion-fields → D2) confirms these heuristic items are where iteration churned. Iteration also touched the type taxonomy (recursive/multi-resolution inquiries), but that churn is now closed: user-validation has reclassified the 16-type count as CANONICAL (Background Category E).
- **Self-reference flag.** This audit runs inside MVL+, which uses /navigation as a discipline. Items in Category C below (Boundary classification, complete-at-2, rejected-third-Boundary) are project-internal — their established-ness depends on the project's own discipline taxonomy holding up.

## Finding

This finding lists what's established about Navigation in this project, organized so you can pick challenge candidates fast. The intent is restructuring-readiness: foreground = likely worth challenging; background = foundational reference; deferred = roadmap.

### Convention used

**Strength sub-tags** (within CONFIRMED in the source documents):
- **CANONICAL** — directly cited AND presented with derivation in source.
- **INTERPRETIVE** — directly cited but the loop synthesized it across multiple sources.
- **HEURISTIC** — directly cited but presented as a count/list/threshold without first-principles derivation for that specific number.

**Strength tags** (the original three):
- **CONFIRMED** — directly cited; sub-tagged above.
- **SCANNED** — inferred across sources.
- **DEFERRED** — source flags it as future work.

**Vulnerability** (likelihood the user productively challenges this in restructuring):
- **HIGH** — HEURISTIC AND likely a bloat-source (the corpus iterated on it).
- **MEDIUM** — INTERPRETIVE, OR HEURISTIC but lightweight, OR CANONICAL with named alternatives.
- **LOW** — CANONICAL with derivation; challenging cascades.

**Flag bits:**
- **(iterated)** — bloat-corpus topic-overlap confirmed; this item appears in multiple prior navigation-inquiry folder names. Confirms iteration, not necessarily resolution.
- **(project-internal)** — item's established-ness depends on the project's own discipline taxonomy holding up; not externally validated.

---

### Foreground — Challenge Candidates

#### Tier 1 — HIGH (HEURISTIC × bloat-source)

**D2 — 12 required fields per route** (iterated)
Spec lists 12 fields as required (Direction, Goal, Type, Priority, Status, Blocked-by, Purpose, Movement, Unlocks, WHY, Guidance mode, Continuation note), with per-field 1-line definitions and a structural grouping (route identity / state / meaning / reasoning / adaptive guidance / continuation memory). What's missing is a first-principles derivation for the count of 12 vs fewer. Possible challenges: collapse correlated fields (Goal+Purpose, Status+Blocked-by); split required/optional; make Continuation-note conditional. *Source: `homegrown/navigation/references/navigation.md` (the `/navigation` discipline spec) §"Navigation Item Structure".*

**E7 — Auto-derivable (12) vs human-judgment (4) partition**
Each human-judgment type carries a per-item justification (REFRAME needs framing-judgment; REVISIT needs cross-inquiry awareness; DIFFERENT APPROACH needs experience; CONSOLIDATE needs strategic judgment). The partition itself (12 auto vs 4 judgment) is heuristic at the boundary — the per-item justifications exist, but the line between them is not first-principles-derived. The spec calls this "the graduated autonomy boundary." Possible challenges: the split may be context-dependent rather than universal; CONSOLIDATE might be auto-derivable in some setups. *Source: navigation.md §"Auto-Derivable vs Human-Judgment Types".*

**I2 — 7 warming elements per Navigator session** (iterated)
The isolated-Navigator design doc lists 7 warming elements (codebase orientation / fundamentals / long-run trajectory / recent trajectory / last-2-days / target inquiry read / warm-context output). Bloat-corpus has 3+ inquiries directly about warming (`navigation_warmup_v1_v2_v3_sufficiency`, `navigation_warmup_readme_necessity`, `navigation_context_intake_replacement_or_warmup_folder`) — this was iterated multiple times; resolution status unclear without re-traversal. Possible challenges: tiered warming (lightweight by default, full only when needed); fewer elements; declarative warm-context that doesn't require multi-step build. *Source: `enes/towards_cross_run_cognitive_steering_with_isolated_navigator_session.md` (the isolated-Navigator design document) §"Navigator Warming".*

**O2 — Guidance allocation rules**
Spec maps "HIGH/risky/blocked/near-action → compact or full; MEDIUM open/deferred → compact; LOW → none or compact; selected → full or expand-on-selection." A defensible default but a heuristic table, not a derivation. Possible challenges: drop the matrix entirely; make Guidance-mode purely route-author's call; or derive from a single principle (e.g., "guidance scales with selection-likelihood"). *Source: navigation.md §"Default guidance allocation".*

#### Tier 2 — MEDIUM-HIGH

**E2-E5 — Specific taxonomy boundaries.** Spec itself names DEEPEN-vs-RE-RUN-DEEPER and REFRAME-vs-DIFFERENT-APPROACH overlaps. These are spec-acknowledged ambiguities, not structural commitments.

**E5/E6 — REVISIT sub-modes (RESURRECT/INVALIDATE/REVERT) + threshold self-adjust rule.** Added during wayfinding absorption. The threshold-self-adjust rule ("low early; high near convergence; minimum when no SURVIVE") is a heuristic that could be revisited.

**N1 — 10-of-16 type-coverage threshold.** Spec says "fewer than 10 of 16 types considered = shallow." The 10 is a heuristic floor.

**O1 — 4 guidance modes (none/compact/full/expand-on-selection).** Mode-count chosen, not derived.

---

### Background — Foundational Reference

These items are CANONICAL with source-derivation. Challenging them would cascade through multiple disciplines.

**Category A — What /navigation IS**
- A1: enumeration of typed next directions [CANONICAL]
- A2: ONE structural operation (enumeration) [CANONICAL]
- A3: enumeration is COMPLETE and TYPED [CANONICAL]

**Category B — What /navigation IS NOT**
- B1: not decision-making (Selector chooses) [CANONICAL]
- B2: not planning (no sequencing/ownership) [CANONICAL]
- B3: not wayfinding (absorbed into Navigation) [CANONICAL]
- B4: not reflection (forward vs backward) [CANONICAL]
- B5: not routing (cognitive vs mechanical dispatch) [CANONICAL]

**Category C — Discipline taxonomy** *(project-internal)*
- C1: Boundary discipline (operates between cycles) [CANONICAL]
- C2: Boundary "complete at 2" — backward (Reflect) + forward (Navigation) [CANONICAL]
- C3: third-Boundary on rejected list (#11 abstraction-level mismatch) [CANONICAL]

**Category E — Type taxonomy**
- E_T1: 16-type taxonomy organized in 3 categories with 6+5+5 split — Content-directed (DEEPEN, REFINE, PURSUE SEED, INVESTIGATE FRONTIER, DEVELOP, TERMINATE) acting on WHAT the cycle produced; Process-directed (RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE) acting on HOW the cycle ran; Context-directed (REVISIT, UNBLOCK, MERGE, TEST, CONSOLIDATE) acting on information OUTSIDE this cycle. The 3-category structure has explicit derivation per spec §"Why Three Categories" (acts-on-OUTPUTS / acts-on-QUALITY / acts-on-OUTSIDE-INFO). [CANONICAL — user-validated 2026-05-10 as comprehensive, superseding the spec's L121 "first-pass" hedge.] *Source: `homegrown/navigation/references/navigation.md` §"The 16-Type Taxonomy" lines 137-167.* *(Note: spec-acknowledged overlap pairs like DEEPEN-vs-RE-RUN-DEEPER remain as Tier-2 foreground items E2-E5; user-validation applies to the 16-count and the 3-category structure, not to specific boundary ambiguities.)*

**Category F — Session architecture**
- F1: Navigator session ISOLATED from worker [CANONICAL]
- F2: isolation invariant from Level 1+ onward [CANONICAL]
- F3: different context shapes (worker dense-local; Navigator warmed-global) [CANONICAL]
- F4: multi-head meta-loop = N+2 sessions [CANONICAL]

**Category H — Inputs**
- H1: artifact-first read set (`_branch.md`, `_state.md`, `finding.md`, etc.) [CANONICAL]
- H2: post-SIC reads (verdicts + frontiers + telemetry) [CANONICAL]

**Category I — Warming**
- I1: warming is precondition for Navigation [CANONICAL] *(I2's element-count is foreground)*

**Category J — Failure modes**
- J1: Premature Filtering [CANONICAL]
- J2: Recency Bias [CANONICAL]
- J3: Action Bias [CANONICAL]
- J4: Enumeration Without Reasoning [CANONICAL]
- J6: Scope Fixation [CANONICAL]
- J7: Cold Navigation [CANONICAL]
- J8: Bloated Navigator [CANONICAL]

**Category K — Meta-loop relationship**
- K1: Navigation = meta-loop's eyes (not its will) [CANONICAL]
- K3: multi-head needs Navigator for tractability [CANONICAL]
- K4: meta-loop ↔ isolated Navigator are complementary layers [INTERPRETIVE]

**Category M — When to navigate**
- M1: after a SIC cycle (primary) [CANONICAL]

**Category N — Telemetry**
- N2: category balance tracking [CANONICAL]
- N3: route coverage [CANONICAL]
- N4: guidance allocation tracking [CANONICAL]
- N5: cross-run patterns rather than per-run gating [CANONICAL]

**Category O — Guidance**
- O3: each guideline carries its own WHY (parallel coordinates) [CANONICAL]

---

### Deferred — Acknowledged Roadmap

These are named in canonical sources but explicitly flagged as future work. NOT bloat.

- **P1** — Selection step in meta-loop (named-but-unspecified; operationalized in `enes/possible_breakthroughs/1.md`)
- **P2** — Multi-head meta-loop (gate: 3 useful sequential chains)
- **P3** — Automated selector for navigation map (gate: 10 maps with selections + outcomes)
- **P4** — Where `navigation_observer.md` should live (open design question)
- **P5** — Minimal Level-3 graph schema (gate: "without becoming heavy")
- **P6** — Movement quality metrics that don't self-confirm (connected to `enes/what_is_meaningful_traversal.md`)
- **P7** — Lightweight navigation memory file shape
- **P8** — Which moves are low-risk for Level-4 automation (bounded-sandbox membership)
- **P9** — When Navigator should ask for human context vs infer from artifacts

---

### Closing

**Self-reference.** This audit runs inside MVL+, which uses /navigation as a discipline. Items in Category C above (Boundary classification, complete-at-2, rejected-third-Boundary) are project-internal — their established-ness is conditional on the project's own discipline taxonomy holding up.

**How to use this finding.** Pick from the foreground (Tier 1 first, ranked by likely user-impact); the background is foundational unless you're redesigning more than navigation; the deferred list is roadmap, not bloat. The (iterated) markers on D2 and I2 confirm where the bloat corpus actually iterated — those are the strongest restructuring candidates by both heuristic-status AND empirical iteration history.

## Reasoning

**Why this shape (foreground / background / deferred):**

The user's stated need is restructuring-readiness — pick 3-5 items to challenge fast. A flat list of all ~50 established items would replicate the bloat the user named as the failure mode. Sensemaking SV6 sharpened the success criterion: user picks 3-5 items in <2 min reading. Decomposition produced a 5-piece partition with the foreground/background/deferred shape; coupling perception confirmed clean boundaries between the three regions (different Vulnerability tags, different consumption patterns).

**Why CANONICAL/INTERPRETIVE/HEURISTIC sub-tags within CONFIRMED:**

A flat "established = in spec" frame answers a different question than the user's. The source documents' OWN structure contains the distinction: items presented with derivation arguments (single-operation framing for navigation; complete-at-2 for Boundary classification; session-isolation against worker context-bloat) have different epistemic weight than items presented as raw enumerations (12 fields, 7 warming elements). The sub-tag recovers a distinction the spec contains, not one the loop imposes. Counter-interpretation tested: would a flat "in spec" tagging serve the user better? No — it would treat D2 (12 fields without first-principles count derivation) as equivalent to A1 (the navigation definition with structural derivation), defeating the user's challenge-readiness goal.

**E1 reclassification (2026-05-10 user review).** Earlier draft placed E1 (16-type taxonomy) in Tier 1 foreground as HIGH-vulnerability HEURISTIC, anchored in the spec's own L121 "first-pass enumeration" hedge plus the spec-named DEEPEN-vs-RE-RUN-DEEPER overlap. User reviewed the actual 16-type list and judged it comprehensive: the 3-category structure (Content/Process/Context-directed acting on OUTPUTS/QUALITY/OUTSIDE-INFO) does have explicit derivation per spec §"Why Three Categories"; the 6+5+5 split fills each category coherently; and the user-validation overrides the spec's hedge for the 16-count itself. The boundary-overlap items (DEEPEN-vs-RE-RUN-DEEPER, REFRAME-vs-DIFFERENT-APPROACH) remain Tier-2 foreground as E2-E5; the user's validation was scoped to the count and the category structure, not to specific overlap pairs. Item moved to Background Category E.

**Why the (iterated) marker is confirmatory only:**

The bloat corpus has ~28 navigation-related inquiry folders. Per-item iteration history (which item changed when) is not retrievable without re-reading 28 folders — and that re-reading would replicate the very bloat the user flagged. Topic-overlap from filesystem listing IS retrievable: `navigation_warmup_v1_v2_v3_sufficiency` matches I2; `route_expansion_fields_necessity_for_auto_navigation` matches D2. The `recursive_navigation_coverage` and `multi_resolution_navigation_*` inquiries also touched the type-taxonomy region — earlier draft cited this as an E1-foreground signal, but post-user-validation E1 is Background Category E (CANONICAL); that churn is now closed-not-open. So the (iterated) marker is a confirmatory signal for HIGH foreground candidates (D2, I2), not a primary tag.

**Why source-fidelity refinements were applied (Critique surfaced these):**

Earlier draft text said "12 fields with no derivation" (D2), "the 12/4 split was named, not first-principles-derived" (E7), and "warmup variants iterated unsuccessfully" (I2). All three were source-fidelity over-claims that the user could call out in <30 seconds: the spec DOES provide per-field definitions and a structural grouping (so "no derivation" is too strong); per-item justifications for human-judgment types DO exist (so "named, not derived" misses them); and "unsuccessfully" is an interpretive claim the corpus topic-overlap doesn't support without re-traversal. The refined text in the foreground above acknowledges the per-field/per-item structure while preserving the HEURISTIC tag at the partition-count level — which is where the heuristic actually lives.

**Why the self-reference flag is scoped to Category C only:**

Global self-reference (this audit runs inside MVL+ that uses /navigation) is acknowledged once in the closing. Per-item flagging is scoped to Category C because those items (Boundary classification, complete-at-2, rejected-third) are entirely project-internal — their established-ness depends on the project's own discipline taxonomy. F-category (session architecture) is also project-coined but has external grounding (worker-context-bloat distorting Navigation is a generic LLM-systems principle, not project-internal); flagging it would dilute the signal.

**What was killed during innovation/critique:**

- **P1-A long-prose framing** — KILL. Too long; loses the scan test.
- **P2-A wide-table foreground** — KILL. Six-column table crowds readability; tier-grouping aids picking.
- **P3-B collapsed master table for background** — KILL. Maximum density but anti-scannable when grouped reading is needed.
- **P3-C hidden-by-default counts-only** — REFINE → REJECT. Most aggressive anti-bloat variant; risk that user feels foundational items are hidden when they want to see them. Compromise (P3-A-trimmed) chosen instead.
- **P5-C inversion-only closing** — REJECT. Useful framing migrated into P2 closing sentence; standalone version reads slower.

The recommended assembly (P1-B-refined + P2-B-refined + P3-A-trimmed + P4-A + P5-B) survived all five critique tests with three text-level refinements applied.

## Open Questions

### Refinement Triggers

- **If the user accepts a Tier-1 challenge candidate** (D2, E7, I2, or O2), a downstream inquiry should run on that specific item with the possible-challenges as innovation seeds. Trigger: user signals which item to challenge.
- **If the user rejects the HEURISTIC sub-tag framing** ("I think these are all canonical because they're in the spec"), this finding should be revised with a different classification axis (perhaps source-doc-presence-only). Trigger: explicit user pushback on sub-tag honesty.
- **If a Tier-2 item escalates to Tier-1** during real navigation runs (e.g., the REVISIT threshold rule produces consistent failures), the audit should be re-tagged.

### Research Frontiers

- **Per-item iteration history.** Reconstructing which navigation items were added/changed/removed across the ~28 prior inquiries is a research frontier in itself; without traversal it's not available, and traversal replicates the bloat the user named. A different approach (e.g., navigation-spec-versioning with diff-history) would address this but is itself a separate inquiry.
- **The partition-challenge verdict shape.** This audit assumed the foreground/background/deferred partition is the right shape. An alternative shape — challenging the partition itself ("maybe the right axis isn't strength, it's something else") — was named as unexplored but out of scope for this audit.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
I think what we should build now is navigation , 

we had some attempts in the past but due to broken inner discipine works things got bloated really quick. 

so i think what we can do it recapture our attention regarding navigation. 

Navigation is really important because if we have a seperate navigation session which gives us future directions, i can simply create new worker sessions and use navigation direction there to explore that direction and this willl speed things up. i guess i will be acting as meta loop in that case. 

So tell me a list of things what is established so far with navigation with their strenght and reasoning... Probably i will challange some of them to restructure navigation logic
```

</details>
