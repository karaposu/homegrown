# Exploration: continuous_loop_priorities

## User Input

`devdocs/inquiries/continuous_loop_priorities/_branch.md`

Top 5 things to achieve before real-application external validation, given user's framing that the orchestrated continuous loop must be assembled and self-tested first.

---

## Mode + Entry Point

- **Mode:** hybrid (artifact + possibility). Artifact: existing infrastructure (skills, runners, /navigate, protocols, install scripts). Possibility: candidate buildout items + their prioritization.
- **Entry point:** signal-first. User gave 4 explicit needs; probe those + obvious additions, then prioritize against "top 5" constraint.

---

## Cycle 1 — Candidate inventory + existing-infrastructure scan

### Existing infrastructure (what already works)

| Component | Status | Notes |
|---|---|---|
| 8 discipline skills (sense-making, innovate, td-critique, explore, decompose, comprehend, reflect, navigation) | ✓ Installed | curl install verified end-to-end this session |
| 2 loop runners (`/MVL`, `/MVL+`) | ✓ Installed | Auto-chain S→I→C and E→S→D→I→C respectively |
| `/navigate` discipline with 16-type taxonomy | ✓ Installed | Post-`wayfinding_navigation_unification_check` merger; includes DIAGNOSE as 16th type |
| `homegrown/protocols/conclude.md` | ✓ Active | Loaded by `/MVL`, `/MVL+` at iteration-complete-yes |
| `homegrown/protocols/resume.md` | ⚠ Orphan | Extracted but NOT invoked by `/MVL`, `/MVL+`; sits unintegrated |
| Path substitution at install | ✓ Working | `/Users/ns/.claude/skills/protocols/conclude.md` literal post-install |

### What does NOT exist (must be built)

| Component | Existence | Blocker for continuous loop? |
|---|---|---|
| Continuous-loop runner (multi-MVL + navigate orchestration) | ✗ Does NOT exist | YES — this IS the continuous loop |
| Cross-MVL state management (does the meta-loop have its own `_state.md`?) | ✗ Not defined | YES — multi-iteration loops need persistent state |
| `/navigate` invocation point in MVL flow (when does navigate fire?) | ✗ Not specified | YES — orchestration glue |
| Selection mechanism (among navigate's enumerated options, what picks?) | ✗ Not defined | YES — without selection, navigate's output is inert |
| Meaningful-traversal criteria (when is the loop productive vs thrashing?) | ✗ Not defined | YES — without criteria, no termination signal |
| Termination criteria for continuous loop | ✗ Not defined | YES — otherwise infinite loop |
| `/diagnose` discipline | ✗ Placeholder only | NO — Broken problem-type can be skipped at Level 0-1 |
| Stalled inquiries marked SUPERSEDED | ✗ Not done | NO (housekeeping); reduces noise but not blocking |
| Pending punch lists applied (`/inquiry` deletion, discipline standardization) | ✗ Pending | YES — inconsistent state contaminates any test |

### Candidate inventory (with prerequisite-to-external-testing assessment)

| # | Candidate | Prerequisite to external testing? | Why |
|---|---|---|---|
| 1 | Apply pending consolidation punch lists | YES | Without it, system has inconsistent state; any test contaminated |
| 2 | Post-consolidation regression check | YES | Without verification, applied changes may have broken something silently |
| 3 | Define `/navigate` invocation point in MVL flow | YES | Without orchestration glue, no continuous loop |
| 4 | Build the continuous-loop runner (combination mechanism) | YES | This IS the artifact being tested |
| 5 | Define cross-MVL state management | YES | Multi-iteration loops need state |
| 6 | Define termination criteria | YES | Otherwise infinite loop |
| 7 | Define meaningful-traversal criteria | YES | Without criteria, no productive-vs-thrashing signal |
| 8 | Define selection mechanism (which direction to pursue from navigate's output) | YES | Navigate enumerates; selection makes the choice |
| 9 | Synthetic test of assembled loop on a small contained problem | NICE-TO-HAVE | Could go straight to real-app, but synthetic catches mechanics bugs first |
| 10 | Build `/diagnose` discipline | NO | Broken problem-type can be skipped at Level 0-1 |
| 11 | Mark stalled inquiries SUPERSEDED | NO | Housekeeping; reduces noise but not blocking |

**8 prerequisite items + 1 nice-to-have.** That's 9 items; top-5 constraint requires combining.

---

## Cycle 2 — Probe each user-stated need for completeness

The user's 4 stated needs (verbatim from their message), expanded:

### Need 1: "after cleaning fundamental check that if all is still working good as before"

Decomposes into:
- **Cleaning:** apply pending punch lists (consolidation). User implicitly assumes this is done before the "fundamental check."
- **Fundamental check:** post-cleaning regression check. Verify all disciplines + runners still produce expected outputs; install scripts still work; CONCLUDE still produces finding.md; existing inquiries still resume correctly.

What "regression check" SHOULD verify (probe):
- Each of the 10 skills produces output in expected format when invoked on a sample input.
- `/MVL` and `/MVL+` complete a small inquiry without errors.
- CONCLUDE produces a `finding.md` matching the template.
- Install scripts (`install_for_claude.sh`, `install_for_codex.sh`) still install correctly.
- No unintended file artifacts left in inquiry folders.

### Need 2: "figure out how to use navigate, maybe running after each MVL loop?"

The user is asking BOTH:
- **WHEN does `/navigate` fire?** (Timing.) Candidates: after each MVL iteration; only at MVL completion (not per-iteration); on user demand; conditional on certain MVL outcomes.
- **HOW is `/navigate`'s output USED?** (Selection.) Navigate enumerates 16 typed directions; something has to pick which to pursue. Without a selection mechanism, navigate's output is inert.

The user's "maybe running after each MVL loop" is a hypothesis, not a commitment. Could also fire only at meta-loop iteration boundaries. Open question for sensemaking.

### Need 3: "how to combine MVL loops"

This is the **continuous-loop runner**. Decomposes into:
- **Sequencing:** does loop N run after loop N-1 produces a finding? Or in parallel? Or both?
- **State carry-over:** what does loop N inherit from loop N-1? (Findings, kill records, frontier questions, navigate's recommendation?)
- **Branching:** does the meta-loop produce ONE next loop, or multiple parallel branches? (Multi-head architecture from `enes/desc.md`.)
- **Termination:** when does the meta-loop stop? (See Need 4.)

### Need 4: "making sure that this combination of MVL loops are traversing thinking space in a meaningful way"

This is **meaningful-traversal criteria**. Decomposes into:
- **Coverage signal:** is the loop exploring new territory or revisiting old?
- **Convergence signal:** is the loop approaching an answer to the original question, or drifting?
- **Productivity signal:** is each iteration producing new information, or noise?
- **Termination conditions:** when has the traversal done enough?

Open question: are these criteria defined per-meta-loop instance, or system-wide?

### Completeness check

The user's 4 explicit needs (post-cleaning) cover:
- Regression check (Need 1)
- Navigate orchestration timing + selection (Need 2)
- Loop combination + state + termination (Need 3)
- Meaningful traversal + convergence signals (Need 4)

Plus the implicit Need 0: cleaning (consolidation).

Total: 5 needs. **Matches the "top 5" constraint exactly** if combined naturally:

1. Cleaning + regression check (Need 0 + Need 1)
2. Navigate orchestration (Need 2)
3. Loop combination runner (Need 3)
4. Meaningful traversal (Need 4)
5. (one slot remaining)

The 5th slot is the nice-to-have: **synthetic test of the assembled loop on a small problem before real-application testing**. This validates the loop's mechanics in isolation before exposure to real-world stakes.

---

## Cycle 3 — Frame comparison: prior sensemaking vs user's frame

### Prior sensemaking's recommendation

`devdocs/sensemaking/what_this_project_needs_most.md` recommended:
1. Consolidate (close open loops, apply punch lists)
2. Externally validate (run disciplines on a real foreign problem)
3. Build new capabilities (informed by validation)

### User's frame (this inquiry)

The user inverts steps 2 and 3:
1. Consolidate
2. Build the continuous-loop runner (combine MVL + navigate + traversal criteria)
3. Externally validate (the loop, not pieces)

### Why both are defensible

- **Prior frame answers "what does the project need most"** (open-ended). External validation is cheap (1-3 days running disciplines on a foreign problem) and tests the disciplines.
- **User frame answers "what's needed before real-application external validation"** (focused). External validation tests the project's actual claim — a self-improving cognitive system via orchestrated loops — which doesn't exist yet.

The two frames test DIFFERENT things:
- Prior: disciplines in isolation (cheap, partial).
- User: continuous loop (more expensive, complete).

Neither is "wrong." They answer different questions.

### Why user's frame wins for THIS inquiry

The inquiry's question is specifically "top 5 before real-application validation," which is the user's frame's territory. The prior frame answered a different question.

The user's frame is also structurally stronger for the project's stated end-goal (per `enes/desc.md`: parallel MVL loops with cross-comparison). Testing isolated disciplines doesn't validate that goal.

---

## Cycle 4 — Top-5 construction with natural combinations

The 8 prerequisite items + 1 nice-to-have must compress to 5. Natural combinations:

**Combine 1+2:** "Consolidation + regression check" — these are sequential and verify each other. Single Phase A.

**Combine 4+5+6:** "Continuous-loop runner = combination + state + termination" — these are parts of the same artifact. Building the runner means defining all three.

**Combine 7+8:** "Meaningful traversal + selection" — selection USES traversal criteria; criteria GUIDE selection. They're a unified concern.

**Keep separate:** /navigate invocation point (Need 2) — this is glue, not part of the runner.

**Keep separate:** Synthetic test (item 9) — this is verification of the assembled loop, after construction.

Result: **5 items.**

| # | Item | Combines | Prerequisite-to-external-testing? |
|---|---|---|---|
| 1 | Consolidation + regression check | items 1+2 | YES |
| 2 | `/navigate` invocation point in MVL flow | item 3 | YES |
| 3 | Continuous-loop runner (combination + state + termination) | items 4+5+6 | YES |
| 4 | Meaningful-traversal criteria + selection mechanism | items 7+8 | YES |
| 5 | Synthetic test of assembled loop (small contained problem) | item 9 | nice-to-have, but SHOULD precede real apps |

Items NOT in top 5:
- `/diagnose` discipline (item 10) — Broken problem-type can be deferred until Level 1+ autonomy.
- Stalled inquiries SUPERSEDED markers (item 11) — housekeeping; can be done in parallel with item 1.

---

## Cycle 5 — Probe each top-5 item for sub-questions sensemaking must resolve

### Item 1 — Consolidation + regression check

Sub-questions:
- WHICH punch lists are applied? Per-prior-finding decision.
- What does the regression check verify SPECIFICALLY? (List of pass/fail tests.)
- What's the rollback story if regression fails?

### Item 2 — /navigate invocation point

Sub-questions:
- After every MVL iteration? Only at MVL completion? On user demand? Conditional on outcome?
- Does /navigate's output go to the user (advisory) or to a selection mechanism (autonomous)?
- Does /navigate require state from the just-completed MVL? Or does it operate on the inquiry folder generally?

### Item 3 — Continuous-loop runner

Sub-questions:
- New skill (e.g., `/continuous`) or extension of existing `/MVL`/`/MVL+`?
- Sequential MVL → navigate → MVL → ... or parallel multi-head?
- How does it relate to the existing `/MVL+` extended pipeline?
- What's the meta-loop's `_state.md` structure?
- What's the termination signal?

### Item 4 — Meaningful-traversal criteria + selection

Sub-questions:
- Coverage criteria (new territory each iteration)?
- Convergence criteria (approaching answer)?
- Productivity criteria (new information per iteration)?
- Selection criterion: maximum-productivity? Maximum-novelty? User-judgment? Round-robin across navigate types?

### Item 5 — Synthetic test

Sub-questions:
- What's the test problem? (Should be: small enough to terminate quickly; structured enough to verify mechanics; foreign enough to expose architectural weaknesses but not so foreign it tests external utility.)
- What does pass/fail look like? (Mechanics work without errors? Loop terminates? State preserved? Output well-formed?)
- How does it differ from real-application testing?

---

## Cycle 6 — Jump scan: alternative angles

Deliberate scan in different directions:

### Alternative A: What if the user is wrong about "build the loop first"?

If the disciplines individually are flawed, building the orchestrated loop on top of them just amplifies the flaws. Counter: the disciplines have been heavily refined; the loop is the missing piece. Probably-not-wrong, but worth flagging as risk.

### Alternative B: What if the loop already exists, just hidden?

Is `/MVL+`'s iteration-NO branch ("Restate the question with a NARROWER focus and loop") already a continuous loop? Counter: yes, but only single-narrow-iteration; no cross-MVL combination, no navigate invocation, no multi-head. The "continuous loop" the user is asking about is bigger than `/MVL+`'s NO branch.

### Alternative C: What if some top-5 items aren't really prerequisite?

- Could synthetic test (item 5) be skipped? You could go straight to real-app. Counter: synthetic catches mechanics bugs cheaply; real-app testing with mechanics bugs wastes the validation opportunity.
- Could meaningful-traversal criteria (item 4) be deferred? Run the loop without them; observe what happens. Counter: without termination signal, the loop runs forever or stops arbitrarily; either way, the test data is contaminated.
- Could navigate invocation point (item 2) be hardcoded as "after every MVL iteration"? Yes, that's a defensible default; but the user's "maybe running after each MVL loop?" suggests they want the question examined, not just hardcoded.

### Alternative D: Is "top 5" itself the right framing?

Could be "top 3 + 2 deferred" or "top 7 with prioritization." User explicitly asked for 5. Honor the constraint.

### Alternative E: Should the top-5 include user-wellbeing/pacing?

The prior sensemaking flagged user-wellbeing as meta-constraint. This top-5 doesn't include it. Counter: the user reframed away from "what does the project need most" (where wellbeing was relevant) to "top 5 buildout priorities" (where wellbeing is implicit, not architectural). Honor the reframing.

### Convergence assessment

Frontier stable: candidates enumerated; prerequisites assessed; combinations identified; top 5 constructed.
Discovery rate declining: cycles 5-6 produced few new structural anchors.
Bounded gaps: alternative angles probed; none surfaced new candidates that should be in the top 5.

**Convergence reached.**

---

## Final Deliverable — The Structural Map

### 1. Territory Overview

Three major regions:
- **Existing infrastructure** — disciplines, runners, /navigate, protocols, install scripts. What works.
- **Continuous-loop gap** — what doesn't exist: orchestration, state management, traversal criteria, selection, termination. What must be built.
- **Top-5 construction** — combining 8 prerequisite items + 1 nice-to-have into exactly 5 priorities.

### 2. Inventory

**Existing (verified this session):**
- 10 discipline skills installed at `~/.claude/skills/`.
- `/MVL`, `/MVL+` work end-to-end (CONCLUDE invoked correctly post path-substitution).
- `/navigate` exists with 16-type taxonomy.
- 2 protocols extracted (CONCLUDE active; RESUME orphan).
- Install scripts work end-to-end.

**Missing (continuous-loop gap):**
- Continuous-loop runner.
- Cross-MVL state management.
- /navigate invocation orchestration.
- Selection mechanism.
- Meaningful-traversal criteria.
- Termination criteria.

**Top-5 candidates (with combinations):**
1. Consolidation + regression check (1+2)
2. /navigate invocation point (3)
3. Continuous-loop runner (4+5+6)
4. Meaningful traversal + selection (7+8)
5. Synthetic test of assembled loop (9)

**Deferred (not in top 5):**
- /diagnose discipline (Level 1+ scope)
- Stalled-inquiry SUPERSEDED markers (housekeeping)

### 3. Signal Log

| Signal | Where detected | Probed? | Status |
|---|---|---|---|
| User's 4 stated needs map cleanly to top 5 | Cycle 2 completeness check | ✓ | High-priority |
| 8 prerequisite items + 1 nice-to-have force combinations | Cycle 1 candidate inventory | ✓ | High-priority |
| Prior sensemaking + user frame answer different questions | Cycle 3 frame comparison | ✓ | Medium-priority |
| `/MVL+`'s iteration-NO branch is partial continuous loop | Cycle 6 alternative B | ✓ | Medium-priority |
| Selection + traversal criteria are coupled | Cycle 4 combinations | ✓ | High-priority |
| RESUME's orphan status complicates consolidation Item 1 | Cycle 1 infrastructure scan | ✓ | Medium-priority |

### 4. Confidence Map

| Region | Confidence | Reasoning |
|---|---|---|
| Existing infrastructure inventory | **Confirmed** | Verified end-to-end this session (curl install + dry-runs) |
| Pending punch lists list | **Confirmed** | From recent inquiry findings |
| Top-5 candidate combinations | **Confirmed** | Each combination has structural basis (sequential, parts-of-same-artifact, coupled-concern) |
| Sub-questions per item | **Scanned** | Listed but not resolved — sensemaking's job |
| Whether user's frame holds against prior sensemaking | **Confirmed** | They answer different questions; user's frame correct for this inquiry |
| Synthetic test design | **Inferred** | Listed as item 5 but specifics deferred to sensemaking/innovation |

### 5. Frontier State

**STABLE.** Major regions mapped; top-5 candidates committed; sub-questions enumerated.

### 6. Constraints any answer must honor

- **Top 5 (not 4, not 7).** User explicitly constrained.
- **Order matters.** Items earlier block items later. Sequencing IS the deliverable.
- **External application testing is NOT in top 5.** It's the next step AFTER top 5, per user's frame.
- **Defer `/diagnose`** to Level 1+ scope.
- **Reconcile with prior sensemaking** — user's frame inverts external-validation and capability-building, but the prior sensemaking's open-loops-must-close insight stands as item 1.
- **Each top-5 item must have a clear scope** (what's done = ?), an estimated effort, and a structural reason for its position.

### 7. Frontier Questions for Sensemaking

1. **What SPECIFICALLY does Item 1's regression check verify?** A list of pass/fail tests. Without specificity, "regression check" is too vague to execute.

2. **What's Item 2's answer?** Where does `/navigate` fire in the MVL flow? "After every MVL iteration" is a candidate but not committed. Sensemaking must pick.

3. **What IS the continuous-loop runner (Item 3)?** A new skill (`/continuous`)? An extension of `/MVL+`? A meta-protocol? What's the artifact?

4. **What ARE the meaningful-traversal criteria (Item 4)?** Coverage / convergence / productivity / novelty? Pick one or combine?

5. **What's the synthetic test (Item 5)?** Specifically: what problem? What pass/fail criteria? What separates it from real-app testing?

6. **What's the migration story?** Does this refine or supersede the prior sensemaking? Both? How does the user act on this top 5 in practice?

### 8. Recommendations for Sensemaking

Sensemaking should ground its analysis in:
- The user's reframing (build loop before external testing) — accept and execute, don't re-examine.
- Existing infrastructure inventory — what can be reused vs what's net-new.
- Sub-question per top-5 item — answer each, even briefly.
- Sequencing logic — why items are in this order and not another.
- Reconciliation with prior sensemaking — where the two frames complement vs conflict.

Sensemaking should produce:
- A clear top-5 list with each item's: scope, effort estimate, structural reason for position, key sub-decisions to commit to.
- A roadmap document the user can act on in sequence.
- An explicit reconciliation with `devdocs/sensemaking/what_this_project_needs_most.md` (the prior sensemaking).

---

## Cross-Run Tracking (Telemetry)

* **Mode:** hybrid (artifact + possibility)
* **Cycles run:** 6
* **Convergence criteria:** all three met (frontier stable, declining discovery rate, bounded gaps).
* **Failure modes observed:** None.
  - Premature depth? No — broad scan in Cycle 1 before focused probes in Cycles 2-5.
  - Surface-only scanning? No — probed user's needs for completeness, frame comparison, alternative angles.
  - False confidence? Mitigated via Cycle 6 jump scan (5 alternative angles examined).
  - Premature termination? No — convergence criteria explicitly checked.
  - Re-exploration? No — frontier-tracked.
  - Completeness bias? Tested — included Alternative A ("user's frame might be wrong"), Alternative D ("top 5 framing might be wrong"), Alternative E ("user wellbeing should be in top 5") for completeness.
* **Coverage assessment:** Existing infrastructure mapped; gap identified; candidates enumerated; combinations forced; top 5 constructed; sub-questions surfaced.
* **Discovery rate trend:** high in Cycles 1-3 (infrastructure + candidate inventory + frame comparison), declining in Cycles 4-6 (top-5 construction + jump scan).
* **Overall: PROCEED to sensemaking.**
