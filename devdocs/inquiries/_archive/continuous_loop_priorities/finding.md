---
status: active
refines: devdocs/sensemaking/what_this_project_needs_most.md
---

# Finding: continuous_loop_priorities

## Changes from Prior

**What's preserved:** The prior sensemaking (`devdocs/sensemaking/what_this_project_needs_most.md`) identified the project's bottleneck as the gap between architectural thinking and application + validation, and recommended consolidate → externally validate → build. The "consolidate first" priority is preserved unchanged: pending punch lists must be applied to close open loops before any new construction.

**What's changed:** The prior sensemaking placed *external validation* second (running the disciplines on a real foreign problem) and *capability building* third. This finding inverts those two for a focused scope: the project's actual claim — per `enes/desc.md` — is the orchestrated continuous loop (multi-MVL+ runs orchestrated through `/navigate` with meaningful-traversal criteria), not the disciplines individually. Because the loop does not yet exist, external validation against the project's actual claim cannot happen until the loop is built. So the focused order becomes: consolidate → build the continuous loop (and self-test it) → externally validate the loop.

**What's new:** A concrete 5-item roadmap with sub-decisions per item, effort estimates, sequencing rationale, and a fallback path. Five items: (1) consolidate + regression check, (2) make `/navigate` invocation conditional in the MVL flow, (3) build the continuous-loop runner v1 (sequential), (4) define meaningful-traversal criteria + selection heuristic, (5) self-test the assembled loop on a project-internal problem with mechanics-only criteria.

**Migration:** This finding is **nested as a fallback under the prior sensemaking**, not a replacement. If Item 3 (the continuous-loop runner) stalls or proves unbuildable within its time-box, halt this roadmap and execute the prior sensemaking's recommendation (external validation of disciplines individually, then revisit the runner with validation findings as input). The two findings are co-valid for different scopes; the prior sensemaking is the safety net.

## Question

**The branch question:** What are the top 5 things to achieve, in priority order, before this project attempts real-application external validation — given the user's framing that the project's actual claim (the orchestrated continuous loop combining multiple `/MVL+` runs with `/navigate` to traverse thinking-space meaningfully) cannot be validated piecemeal by testing isolated disciplines, and therefore the continuous loop itself must be assembled and self-tested first?

**The branch goal:** A defensible top-5 prioritized roadmap the user can act on as the buildout sequence before real-application tests. Each item has a clear scope ("done = ?"), an estimated effort, and a structural reason it precedes external testing. The roadmap is sequenced (earlier items block later items). It is bounded — exactly 5 items, not "10 things plus sub-list per item." It defers external application testing explicitly. And it reconciles with the prior sensemaking, which placed external validation second.

**Project context the reader needs to know up front:**

- This project (codebase root: `/Users/ns/Desktop/projects/native/`) is a homegrown system of "thinking disciplines" — small specialized skills like `/sense-making`, `/innovate`, `/td-critique`, `/explore`, `/decompose`, `/comprehend`, `/reflect`, `/navigation`, plus loop runners `/MVL` (Sensemaking → Innovation → Critique) and `/MVL+` (Exploration → Sensemaking → Decomposition → Innovation → Critique). All ten skills are installed and functional.
- The project's stated end-goal (per `enes/desc.md`) is a self-improving cognitive system that runs parallel `/MVL+` loops with cross-comparison, climbing an autonomy ladder from Level 0 (everything human-bootstrapped) to Levels 2-4+. The current state is Level 0; the **continuous loop** referenced throughout this finding is the artifact that would lift the project to Level 1.
- "Punch list" is this project's term for a per-finding action checklist — a numbered list of concrete edits the finding's author commits to.
- Two protocols have been extracted to `homegrown/protocols/`: **CONCLUDE** (actively used by `/MVL` and `/MVL+` to compile findings) and **RESUME** (extracted but currently un-invoked).

## Finding Summary

- **The top 5, in priority and dependency order, are: (1) consolidation + regression check, (2) conditional `/navigate` invocation in `/MVL+`, (3) continuous-loop runner v1 (sequential), (4) meaningful-traversal criteria + selection heuristic, (5) project-internal mechanics-only synthetic test of the assembled loop.** Items 2 and 4 are inputs to Item 3; Item 5 verifies Item 3. The dependency structure is **1 → (2 || 4) → 3 → 5** — Items 2 and 4 can be done in parallel after Item 1, before Item 3.

- **Total effort: ~20-33 hours, paced across 5-6 sessions over ~2.5 weeks**, with hard limits per session (~7h) and rest gaps between sessions. The pacing honors the prior sensemaking's meta-constraint: user sustainability. External application validation is the explicit next step *after* this roadmap; it is not in the top 5.

- **Item 3 is the load-bearing item and gets a time-box with fallback.** It is built as its own `/MVL+` inquiry at `devdocs/inquiries/continuous_loop_runner_v1/`, with a 2-hour design phase time-box and an 11-hour implementation phase time-box (totaling ~13h target, 15h hard ceiling). If either time-box fires, halt the roadmap and execute the prior sensemaking's recommendation (external validation of disciplines individually) before retrying. This safeguard prevents an unbuildable loop from blocking the project indefinitely.

- **Sensemaking pre-resolved several design questions that critique sustained:** `/navigate` fires *conditionally* (not after every iteration), v1 of the runner is *sequential* (not parallel multi-head), Item 5's test is *mechanics-only* on a project-internal problem (not a foreign-domain utility test), and the autonomous-mode selection heuristic is *deterministic* (highest-confidence option) for v1 because Item 5's mechanics-validation requires reproducibility. Random selection — proposed by innovation as a contrarian — was killed for v1 and noted as a viable v2 idea after mechanics are validated.

- **Three significant kills shaped the final roadmap:** (a) `homegrown/protocols/resume.md` should be **deleted**, not nominally wired up — the protocol has been orphan since extraction; the inline `/MVL+` resume branch already does what RESUME describes; the cosmetic-rename middle option has the cost of preservation without the value of use. (b) `Assembly 4` from innovation, which proposed bypassing Item 1 by folding consolidation into Item 3, was killed because it inherits inconsistent state into the runner's design. (c) The proposed new frontmatter label `nests-as-fallback` was killed in favor of standard `refines:` plus an explicit conditional-fallback paragraph in the body — vocabulary creep was judged the larger cost for a one-off conditional relation.

- **One signal-design refinement emerged from critique that innovation did not propose alone:** Item 4's traversal-quality signals combine convergence (open-question count delta — primary termination input) with directedness (sensemaking-anchor-overlap between iteration N's anchors and the original question's anchors — secondary guardrail). Convergence alone misses topical drift; directedness alone has no positive termination signal. The combination catches both failure modes.

## Finding

### 1. The 5-item roadmap (in dependency order)

The structural argument for the order: Item 1 is housekeeping that produces a stable baseline; Items 2 and 4 are inputs (a glue specification and a quality specification) to Item 3; Item 3 is the artifact under construction; Item 5 verifies Item 3. The dependencies enforce the order:

```
Item 1 (Consolidation + regression check)
   │
   ├─→ Item 2 (Conditional /navigate invocation in /MVL+)   ──┐
   │                                                          │
   └─→ Item 4 (Meaningful-traversal criteria + selection)   ──┤
                                                              ▼
                                                    Item 3 (Continuous-loop runner v1)
                                                              │
                                                              ▼
                                                    Item 5 (Synthetic test, mechanics-only)
                                                              │
                                                              ▼
                                                    [post-roadmap: real-application external validation]
```

Items 2 and 4 are parallelizable — both are inputs to Item 3, and neither needs the other. Doing them in parallel saves session count.

### 2. Item-by-item scope, effort, and structural reason

#### Item 1 — Consolidation + regression check (4-6 hours, Sessions 1-2)

**Done when:** all currently-committed punch lists are applied (or explicitly dropped with documented reason); all stalled inquiries either have findings or are formally marked SUPERSEDED; `homegrown/protocols/resume.md` is deleted (or alternatively rewritten as an executable protocol — see decision in Sub-task 1.3); and a six-test regression check passes.

**Sub-tasks:**

1.1. Apply pending punch lists in dependency order:
- Verify the recently-completed `protocol_path_generalization` finding's punch list is fully applied (~15 min — should be a no-op given recent session work).
- Apply `inquiry_md_post_navigation_update_value_check`'s punch list: formally delete `commands/inquiry.md` (`commands/` was renamed to `deprecated/` in a recent session, but the formal deletion-with-superseded-markers has not happened). Mark the related stalled inquiries SUPERSEDED at the same time (~1.5 h).
- Apply `telemetry_routing_protocol_classification`'s Phase 1 punch list: standardize five disciplines (`sense-making`, `td-critique`, `explore`, `decompose`, `comprehend`) by adding the `Overall: PROCEED / FLAG / RE-RUN` self-assessment line that `/innovate` already has (~1.5 h). Alternatively: explicitly drop this punch list with a documented reason in the spec (~15 min if dropped).

1.2. Mark five stalled inquiries SUPERSEDED:
- `wayfinding_fundamental_fix`, `sic_as_wayfinder`, the partial `navigation_placement`, the partial `sic_navigation_integration`, and the partial `search_equals_navigation_plus_x`. Each gets a `## Status: SUPERSEDED` line plus a one-line reason plus a pointer to the supersedor (`wayfinding_navigation_unification_check`, which merged `/wayfinding` into `/navigate` and rendered all five moot).
- Also add a back-reference in `wayfinding_navigation_unification_check`'s finding listing the five superseded inquiries — bidirectional traceability is cheap and pays off long-term for archaeological clarity.

1.3. Decide RESUME's fate. The finding's recommendation is **DELETE** — remove `homegrown/protocols/resume.md` and update `homegrown/protocols/desc.md` to remove the RESUME entry (or mark it as "extracted, then removed; reason: empirical non-fit; `/MVL+`'s inline resume branch is sufficient"). The structural argument: the file has been orphan since extraction; an earlier wire-up attempt was reverted because it conflicted with `/MVL+`'s "no waits between disciplines" rule; per `homegrown/protocols/desc.md`'s own doctrine, empirical low-utilization is evidence (not proof) of structural non-fit. Deleting is honest. **Alternative if the user prefers preserving the protocol slot:** REAL-WIRE-UP — rewrite `resume.md` as an executable protocol (CONCLUDE-style), modify `/MVL+`'s resume branch to load it via the Skill tool, and integrate. This adds ~1-2 h to Item 1; it is acceptable scope for users who value preserving the named-protocol vocabulary.

1.4. Run the regression check. Six tests:
1. Each of the 10 disciplines invoked on a small test input → produces non-empty, well-formed output.
2. `/MVL` runs end-to-end on a small test question → produces `finding.md`.
3. `/MVL+` runs end-to-end on a small test question → produces `finding.md`.
4. CONCLUDE-produced `finding.md` matches the template (frontmatter + required sections present).
5. `install_for_claude.sh` runs cleanly via curl into a temp directory; all skills land in expected locations.
6. `install_for_codex.sh` runs cleanly via curl into a temp directory; all skills land in expected locations.

**Structural reason for position 1:** Items 2, 3, and 4 build on top of the existing system. If the system has inconsistent state (orphan files, un-applied punch lists, missing standardization), the new construction inherits the inconsistency. Item 1 creates the stable baseline that the rest of the roadmap requires.

**Risk + mitigation:** The risk for Item 1 is rabbit-holing — a punch list application surfaces a new question, which becomes a new inquiry, which never terminates. **Mitigation:** Item 1 is explicitly scoped as "apply currently-committed punch lists; new questions arising are logged for later." No new inquiries spawn during Item 1.

#### Item 2 — Conditional `/navigate` invocation in `/MVL+` (1-2 hours, Session 3)

**Done when:** `/MVL+` invokes `/navigate` at three explicit trigger conditions (and not otherwise); the trigger logic is documented in the skill files; a test inquiry confirms `/navigate` fires (or doesn't) as specified.

**The three trigger conditions:**

1. `/MVL+` produces a finding flagged as partial or open (the finding has unresolved frontier questions or open questions in the Open Questions section).
2. `/MVL+` fails to converge after **N=3** iterations of its iteration-not-answered branch (the "NO" branch where the question is restated with a narrower focus and the pipeline restarts). N=3 matches typical SIC convergence patterns observed in past inquiries; below 3 fires too early; above 3 wastes work.
3. The user explicitly invokes `/navigate` (manual override).

**Implementation:**

- Add a new section to `homegrown/MVL+/SKILL.md` (and the corresponding references file if the skill uses one) labeled "Conditional `/navigate` invocation," inserted into the EXECUTE PIPELINE section after the iteration-complete check. The section's logic: if any trigger fires, load `homegrown/navigation/SKILL.md` via the Skill tool and invoke `/navigate` on the inquiry folder; pass `/navigate`'s output to the selection mechanism (manual or autonomous) per the runtime mode flag.
- Add a `## Mode: manual | autonomous` field to the `_state.md` template; default value when a new inquiry is created is `manual`. `/MVL+` reads this field at runtime to decide selection routing.
- `/MVL` does **not** receive the trigger logic. `/MVL` is the lighter SIC-only runner; adding cross-discipline orchestration to it would scope-creep.

**Test:** run a small test inquiry through `/MVL+` that should hit each trigger (e.g., a deliberately-unanswerable question hits trigger 2; a question that produces a partial finding hits trigger 1; a manual invocation hits trigger 3). Verify `/navigate` fires correctly in each case and does not fire when none of the triggers should fire.

**Structural reason for position 2 (parallel with Item 4):** Item 3 (the runner) consumes Item 2's invocation logic at runtime. Item 3 cannot be built without knowing when `/navigate` fires. Items 2 and 4 are both inputs to Item 3 and have no dependency on each other; doing them in parallel saves session count.

#### Item 4 — Meaningful-traversal criteria + selection heuristic (4-6 hours, Session 3)

**Done when:** a specification at `devdocs/spec/meaningful_traversal.md` exists, defining (a) three operational signals, (b) a termination rule combining them, (c) a v1 autonomous-selection heuristic, with sufficient precision that Item 3's runner can implement them mechanically.

**The three signals:**

- **Coverage signal.** Operationally: ratio of distinct `/navigate`-types invoked across all iterations of the meta-loop / 16 total types in `/navigate`'s taxonomy. Measured by parsing each iteration's `/navigate` output for the chosen-type field. A new iteration "adds coverage" if it visits a `/navigate`-type unvisited in iterations 1..N-1.
- **Convergence signal (primary termination input).** Operationally: (open-question count at iteration N-1 minus open-question count at iteration N) divided by open-question count at N-1. Measured by parsing the inquiry's `_state.md` or finding.md "Open Questions" section. A positive value indicates converging; zero or negative indicates stalled or divergent.
- **Productivity signal.** Operationally: (count of new anchors + new ideas + new verdicts produced in iteration N) divided by (count produced in iteration N-1). Greater than 1.0 indicates productive iteration; less than 1.0 indicates declining productivity.

**A fourth signal as a guardrail:** Directedness — sensemaking-anchor-overlap between iteration N's anchors and the original question's anchors (where "anchors" are sensemaking's five anchor types: constraints, key insights, structural points, foundational principles, meaning-nodes). Low directedness fires an alarm if convergence is high — convergence with topical drift is suspicious convergence and may indicate the loop is settling on the wrong answer.

**Termination rule (conjunctive):** terminate when ALL of:
- Coverage signal: no new `/navigate`-types visited for 3 consecutive iterations.
- Convergence signal: ratio < 0.1 for 3 consecutive iterations.
- Productivity signal: ratio < 1.0 for 3 consecutive iterations.

**Plus a safety cap:** maximum 20 meta-iterations regardless of signals. The safety cap prevents runaway loops if the signal logic has a bug; it is a hard ceiling, not a regular termination condition.

**v1 autonomous-selection heuristic:** select the option from `/navigate`'s output with the highest confidence score (assuming `/navigate` emits per-option confidences). Fallback rule: if `/navigate` does not emit confidences, pick the first listed type AND log a warning so the user knows the fallback fired. The heuristic is deterministic (not random) because Item 5's mechanics-validation requires reproducibility — the same input must produce the same output, otherwise diagnostic signals are confounded. Random-selection variants are noted as viable v2 ideas after mechanics are validated.

**Where the spec lives:** `devdocs/spec/meaningful_traversal.md` (in the spec/finding/inquiry tree, not in `homegrown/protocols/`). The reasoning: the criteria are a specification consumed by Item 3, not a runtime-loaded protocol like CONCLUDE. CONCLUDE lives in `homegrown/protocols/` because `/MVL` and `/MVL+` load it at runtime via the Skill tool; meaningful-traversal criteria are read by Item 3's runner at design time and embedded into the runner's logic.

**Structural reason for position 4 (parallel with Item 2):** Item 3 (the runner) consumes Item 4's criteria + heuristic at runtime. Item 3 cannot terminate cleanly without knowing the termination rule, and cannot run autonomously without the selection heuristic.

#### Item 3 — Continuous-loop runner v1 (8-15 hours, Sessions 4-5)

**Done when:** a new top-level skill (skill name decided as part of Item 3's design `/MVL+` — candidates include `/continuous`, `/loop`, `/meta-mvl`) exists at `homegrown/<name>/SKILL.md` + `references/`; the skill orchestrates multiple `/MVL+` runs with conditional `/navigate` invocation and meaningful-traversal criteria; a `_meta_state.md` schema (or equivalent) tracks cross-iteration state; the runner integrates Items 2 + 4 cleanly; v2 parallel-multi-head extension hooks are explicitly noted in the design.

**Execution mode for Item 3 itself:** Item 3 is built as its own `/MVL+` inquiry at `devdocs/inquiries/continuous_loop_runner_v1/`. The inquiry's input package (handed off from this finding) includes:

- `enes/loop_desing_ideas/` — three files (`loop_design_1.md`, `loop_design_2.md`, `loop_design_3.md`) totaling ~803 lines of prior loop-design thinking by the user. **Load-bearing input.** Item 3's design `/MVL+` must consume these in its sensemaking + decomposition phases; re-deriving what the user already wrote would frustrate the user and waste effort.
- `enes/thinking_space_dynamics.md` (~325 lines) — the user's prior thinking on what "meaningful traversal" means structurally.
- `enes/desc.md` and `enes/discipline_taxonomy.md` — the project's stated end-goal (parallel `/MVL+` with cross-comparison) and the current discipline inventory.
- Item 2's output: the trigger logic specification.
- Item 4's output: `devdocs/spec/meaningful_traversal.md`.

**Time-box (the hard safeguard):**

- Design phase: Item 3's `/MVL+` inquiry's sensemaking + decomposition + innovation + critique combined are time-boxed at **2 hours**. If Item 3's design `/MVL+` does not produce a converged structure within 2 hours, fire the fallback (see below). The reasoning: design unblocks implementation; if design itself takes more than 2 hours, the gap is at the design level, not at the effort level — meaning the runner is harder than v1 should attempt.
- Implementation phase: time-boxed at **11 hours** (writing the new skill, defining `_meta_state.md` schema, integrating Items 2 and 4, documenting). If exceeded, fire the fallback.
- Total target: ~13 hours. Hard ceiling: 15 hours.

**Fallback (if either time-box fires):**

1. Halt Item 3 immediately. Do not push through.
2. Execute the prior sensemaking's recommendation: external validation on the disciplines individually using a real foreign problem (a software architecture decision in another project, a business question, a research question — anything outside this project's own development), 1-3 days.
3. After the external validation produces concrete capability gaps and concrete observations about discipline output quality, retry Item 3's `/MVL+` with the validation findings as new input. The retry has the same time-box; if it fires again, mark this entire roadmap inquiry SUPERSEDED and re-open the question with new context.

**v2 parallel-multi-head extension hooks (must be designed, not implemented):** Item 3's v1 design must explicitly note where parallel-multi-head extension would attach. Specifically: the `_meta_state.md` schema must generalize to per-branch state (not assume a single state object); the selection mechanism must accept a list of inputs (not a single `/navigate` output); the termination rule must combine across branches (not assume single-branch). Designing v1 in a way that prevents v2 is a failure mode this finding explicitly avoids.

**Structural reason for position 3:** Item 3 IS the artifact the inquiry's question is about. It cannot be built before Items 1, 2, 4 are done (Item 1 = stable baseline, Items 2 + 4 = inputs). Item 3 must be done before Item 5 (Item 5 tests Item 3). It is the gate.

#### Item 5 — Synthetic test of the assembled loop (2-4 hours, Session 6)

**Done when:** the continuous loop has been run end-to-end on at least one project-internal test problem in autonomous mode; all positive pass criteria are met OR explicit known-issues are logged with a decision to proceed/extend; the finding's reader can verify the test result independently.

**Test problems (in priority order):**

- **Primary test:** re-run the question from `wayfinding_navigation_unification_check`'s finding through the continuous loop in autonomous mode. The ground truth is the existing finding's verdict (DELETE `/wayfinding`). This problem is chosen because it (a) has multi-iteration history, exercising the loop's cross-iteration mechanics specifically, (b) has a clear historical verdict the user can compare against, (c) is project-internal, ensuring any deviation points to mechanics rather than utility.
- **Supplementary test:** broken-input test — run the loop on a malformed question (empty question, contradictory constraints) and verify graceful failure (the loop terminates, does not infinite-loop, does not crash, produces an error finding rather than a normal finding).
- **Optional second test (if time permits):** re-run `protocol_path_generalization`'s question through the continuous loop. Single-iteration test; faster; useful as a sanity check.

**Pass criteria — 8 positive items (must hold) plus 4 negative supplements (must not occur):**

Positive (must hold):

1. The loop runs without errors.
2. `_meta_state.md` (or whatever Item 3's design committed to) is created at meta-loop start and updated each meta-iteration.
3. `/navigate` fires at the trigger conditions specified by Item 2 and not otherwise.
4. Selection executes in autonomous mode using Item 4's heuristic.
5. The coverage signal is computed and logged each meta-iteration.
6. The convergence signal AND the directedness guardrail are computed each meta-iteration.
7. The productivity signal is computed and logged each meta-iteration.
8. Termination triggers when expected — either by the conjunctive rule or by the 20-iteration safety cap.

Negative (must not occur):

- No infinite loop (caught by safety cap if the rule misfires).
- No state corruption (resuming the meta-loop from `_meta_state.md` works).
- No exception escapes the runner (errors are caught and logged; the runner terminates gracefully).
- No `/navigate` invocation outside the trigger conditions specified by Item 2.

**Manual mode test:** also run the primary problem briefly (~30 minutes) in manual mode (where the user picks the `/navigate` option each iteration). Verify the manual-mode path works. Manual mode is the default for ongoing work; verifying it works ensures the runner is usable without the autonomous heuristic.

**Bug-fix budget:** 2 hours soft cap for diagnosing and patching mechanics issues surfaced by Item 5. If a bug takes more than 2 hours to root-cause, log it as a known issue and assess whether to proceed (declare Item 5 done with the issue logged) or extend the budget. Bugs at this gate are diagnostic of mechanics issues; the cost of leaking them into post-roadmap external validation is much higher than the cost of fixing them now.

**Structural reason for position 5:** Item 5 verifies Item 3's mechanics before any real-world exposure. Mechanics bugs surfaced here are cheap to fix; surfaced during external validation, they waste the validation opportunity. Item 5 is the last gate before real-application testing.

**Why mechanics-only and project-internal:** Item 5's purpose is to catch failures of the orchestration machinery — the runner, the state management, the trigger logic, the criteria, the heuristic. Foreign-domain testing would mix mechanics-failure with utility-failure (the disciplines or architecture not helping in foreign domains). Mixing the two confounds diagnosis. Project-internal problems with known ground truth keep diagnosis clean.

### 3. Reconciliation handling (cross-reference to prior sensemaking)

**Frontmatter:** `refines: devdocs/sensemaking/what_this_project_needs_most.md`. Standard format, path-only.

**No back-reference** added to the prior sensemaking. The cross-reference is one-way (this finding → prior sensemaking). Editing the prior sensemaking after the fact conflates contexts; the prior sensemaking is an artifact of its moment.

**Why the conditional-fallback semantics are captured in body, not frontmatter:** the relation here is conditional ("if Item 3 stalls, fall back to that one"). Frontmatter implies an unconditional relation. A new label like `nests-as-fallback` was considered and killed (vocabulary creep is too costly for a one-off). Standard `refines:` plus the explicit conditional paragraph in this Reconciliation section is the chosen pattern. **Refinement trigger:** if a second inquiry produces a similar conditional relation, revisit this decision and consider introducing a new label.

### 4. Pacing plan

A 5-6 session schedule across ~2.5 weeks. Each session ends at an inspectable artifact (an "artifact-based break-point"). Between sessions, rest at least 24 hours; do not chain sessions on consecutive days.

| Session | Items addressed | Estimated duration | End-state (break-point) |
|---|---|---|---|
| 1 | Item 1 sub-tasks 1.1 (parts 1-2) + 1.2 + 1.3 | ~3 h | Punch lists 1-2 applied; five stalled inquiries marked SUPERSEDED; `homegrown/protocols/resume.md` deleted (or wired up if user prefers). Git tree clean. |
| 2 | Item 1 sub-tasks 1.1 (part 3 — telemetry-routing) + 1.4 (regression check) | ~2-3 h | All Item 1 sub-tasks done; six-test regression check passes. |
| 3 | Item 2 + Item 4 (parallel small commitments) | ~5-7 h | `/MVL+` has trigger logic; spec at `devdocs/spec/meaningful_traversal.md` written. |
| 4 | Item 3 design `/MVL+` + start of implementation | ~5-6 h | `continuous_loop_runner_v1` finding.md exists and design is converged; runner skill scaffold exists. OR fallback fired and external validation begins. |
| 5 | Item 3 implementation completion + integration | ~5-7 h | Runner skill installed and runnable end-to-end. (Skip this session if Session 4 completed Item 3.) |
| 6 | Item 5 (primary + supplementary tests + finding.md write for the runner inquiry) | ~3-4 h | Mechanics-validation passed (or known-issues logged); the project is ready to attempt real-application external validation as the post-roadmap step. |

Sustainability constraints (per the prior sensemaking's meta-constraint): no session exceeds ~7 hours; no two sessions on consecutive days; total span 2 to 2.5 weeks.

## Next Actions

### MUST

- **What:** Apply Item 1 (Sub-tasks 1.1, 1.2, 1.3, 1.4 as detailed in the Finding section above).
  - **Who:** the user, in Sessions 1-2.
  - **Gate:** before starting Item 2 or Item 4. Observable: regression check passes; git tree clean; no orphan files in `homegrown/protocols/`.
  - **Why:** Items 2-5 build on the consolidated baseline; inconsistent state contaminates everything downstream.

- **What:** Apply Item 2 (Conditional `/navigate` invocation in `/MVL+`).
  - **Who:** the user, in Session 3 (in parallel with Item 4).
  - **Gate:** after Item 1's regression check passes; before Item 3 starts.
  - **Why:** Item 3's runner consumes Item 2's trigger logic.

- **What:** Apply Item 4 (Meaningful-traversal criteria spec at `devdocs/spec/meaningful_traversal.md`).
  - **Who:** the user, in Session 3 (in parallel with Item 2). Run a focused `/MVL+` to converge on signal definitions if needed.
  - **Gate:** after Item 1's regression check passes; before Item 3 starts.
  - **Why:** Item 3's runner consumes Item 4's criteria + heuristic.

- **What:** Build Item 3 (Continuous-loop runner v1) as its own `/MVL+` inquiry at `devdocs/inquiries/continuous_loop_runner_v1/`.
  - **Who:** the user, in Sessions 4-5.
  - **Gate:** after Items 2 and 4 are done. Time-box: 2h design + 11h implementation; fire fallback if exceeded.
  - **Why:** the runner is the artifact under test; without it, external validation cannot test the project's actual claim.

- **What:** Apply Item 5 (Synthetic test of the assembled loop on `wayfinding_navigation_unification_check`'s question in autonomous mode + a broken-input supplementary test + brief manual-mode test).
  - **Who:** the user, in Session 6.
  - **Gate:** after Item 3's runner is installed and runnable end-to-end.
  - **Why:** Item 5 is the last mechanics-validation gate before real-application external validation; bugs leaked past this gate waste external-validation time.

### COULD

- **What:** REAL-WIRE-UP RESUME instead of deleting (rewrite `homegrown/protocols/resume.md` as an executable protocol; modify `/MVL+`'s resume branch to load it via the Skill tool).
  - **Who:** the user, during Item 1 if preferred.
  - **Gate:** user preference at the Item 1.3 decision point.
  - **Why:** preserves the named-protocol slot in the project's vocabulary; future-ready if Level 1+ autonomy needs explicit resume semantics. Costs ~1-2h additional Item 1 effort.

- **What:** Run a second optional Item 5 test (re-run `protocol_path_generalization`'s question through the loop).
  - **Who:** the user, in Session 6 if time permits.
  - **Gate:** after the primary + supplementary tests pass, with budget remaining.
  - **Why:** additional sanity-check; tests single-iteration mechanics complementary to the multi-iteration primary test.

### DEFERRED

- **What:** Real-application external validation (run the loop on a foreign-domain problem; the user provides ground truth using their own domain expertise).
  - **Gate:** after Item 5 passes (the post-roadmap step explicitly).
  - **Why (if revived):** validates the project's actual claim against external reality; cures the self-reference blindness flagged by the prior sensemaking as the project's biggest structural risk.

- **What:** Build the `/diagnose` discipline (currently a placeholder; not in the top 5).
  - **Gate:** observable — only if Item 5 surfaces broken-problem cases that the existing 10 disciplines cannot route, OR if external validation indicates `/diagnose` is needed.
  - **Why (if revived):** completes the discipline taxonomy for Broken problem-types.

- **What:** Build v2 of the continuous-loop runner with parallel multi-head architecture (per `enes/desc.md`).
  - **Gate:** condition-bound — after v1 sequential is externally validated.
  - **Why (if revived):** matches the project's stated end-goal of parallel `/MVL+` with cross-comparison; lifts autonomy ladder toward Level 2+.

- **What:** Build BRANCH / MERGE / HANDOFF / BRIEF / VERSION end-goal capabilities.
  - **Gate:** observable — only if external validation indicates which are actually needed (don't speculate ahead of evidence).
  - **Why (if revived):** end-goal capabilities for Levels 2-4+ autonomy.

- **What:** Random-selection or other non-deterministic v2 selection heuristics for Item 4.
  - **Gate:** condition-bound — after v1 mechanics are validated by Item 5.
  - **Why (if revived):** v1's deterministic highest-confidence heuristic is a starting point; v2 may benefit from explicit randomness or productivity-projecting heuristics that v1's mechanics-validation requirement disallowed.

## Reasoning

### Why this finding over alternatives

The inquiry produced four cross-piece "Assemblies" during innovation, plus one that emerged from critique:

- **Assembly 1 ("self-validating roadmap")** combined contrarian signals + project-internal multi-iteration test + negative pass criteria. Critique's REFINE: the self-validation framing was prosecutorially weakened by its self-reference risk (grading homework with the answer key the project wrote). The historical-comparison test datapoint was preserved as a strong test problem (it became Item 5's primary test); the negative pass criteria were preserved as supplementary; the self-validation framing was dropped.
- **Assembly 2 ("lightweight v1")** combined all Focused candidates into a sprint version (~12-18h, 4 sessions). Critique's REFINE: the assembly is optimistic about Item 3's effort range and compresses pacing in ways that bet against the prior sensemaking's sustainability meta-constraint. Most Focused tightenings were preserved (N=2 considered then rejected for N=3, P4.b 2h design timebox kept, minimum-viable regression check considered as fallback); the 4-session pacing was relaxed to 5-6 sessions.
- **Assembly 3 ("sustainability-first")** combined Contrarian-conservative pacing (7 sessions + rest gaps) + no bug-fix time-box + narrower-fallback. Critique: viable but slow. Available as an alternative if the user prefers margin.
- **Assembly 4 ("bypass Item 1")** combined contrarian rolling consolidation into Item 3 and embedding Item 4's spec inside the runner. Critique's KILL: violates Item 1's prerequisite role; Item 3 inherits inconsistent state; bypasses the consolidation gate the prior sensemaking flagged as foundational.
- **Assembly 5 ("realistic")** emerged from critique as the synthesis of surviving choices: the realistic pacing of Generic, the tightenings of Focused where structurally sound, the historical-comparison test problem from Assembly 1, and explicit rejection of Assembly 4. Assembly 5 is the recommendation embodied in this finding.

### Significant kills with reasoning

**KILL: Cosmetic-RESUME wire-up (P1.b's middle option).** The cosmetic option (rename a section in `/MVL+`'s resume branch + point at `homegrown/protocols/resume.md` without actually loading the file) was killed because it has the cost of preserving an artifact (two-source-of-truth risk; future drift) without the value of using it (the file is not actually loaded at runtime; the inline branch logic carries the actual behavior). The user faces a binary: real wire-up (rewrite the file as executable; ~1-2h additional work) OR delete (~10min). The cosmetic middle is dead. The finding's recommendation is DELETE because Item 1's scope is consolidation, not new construction; if the user prefers preserving the named-protocol slot, REAL-WIRE-UP is the alternative.

**KILL: Random selection for v1 autonomous-mode (P3.e Contrarian).** Random selection is honest about v1's lack of judgment and produces variance that could expose loop robustness, but it breaks Item 5's mechanics-validation requirement: mechanics-validation needs reproducibility (the same input produces the same output) so that diagnostic signals are not confounded. With random selection, "the loop's output diverged from the historical verdict" becomes ambiguous: is it because mechanics broke, or because random selection chose a different path? This ambiguity destroys the test's diagnostic power. Random selection is preserved as a viable v2 idea after mechanics are validated.

**KILL: New frontmatter label `nests-as-fallback` (P6.a Focused).** The proposed new label captures the conditional-supersession semantics more honestly than `refines:`, but vocabulary creep is a real cost: parsers must handle it; future findings may use it inconsistently; readers must learn it. For a single conditional-relation case, the cost outweighs the benefit. The structural-honesty argument was strong enough to flag a refinement trigger: if a second inquiry produces a similar conditional relation, revisit this decision. Until then, `refines:` plus an explicit conditional-fallback paragraph in body text is the chosen pattern.

**KILL: Assembly 4 (bypass Item 1).** Folding consolidation into Item 3's `/MVL+` was proposed as a way to avoid context-switching, but it inherits inconsistent state into Item 3's design and bypasses the consolidation gate the prior sensemaking explicitly flagged as foundational. The "Item 1 is prerequisite" structural argument from sensemaking sustained.

**KILL: P5.a Focused (known-answer math problem).** A trivially-verifiable synthetic question is too synthetic to validate continuous-loop machinery realistically — it doesn't exercise inquiry-folder semantics, doesn't produce realistic anchors/ideas/verdicts, doesn't trigger meaningful `/navigate` invocations. The historical-comparison test (Item 5's primary, the wayfinding-merger re-run) is more realistic; the broken-input test (supplementary) covers failure-path testing.

### Significant SURVIVE with reasoning

**SURVIVE: Conditional `/navigate` invocation (sensemaking's resolution; not re-litigated).** Sensemaking resolved this in Phase 3 Ambiguity 1 with HIGH confidence on structural grounds: uniform invocation conflates two cases (clean finding versus unfinished/stalled inquiry) that have structurally different next-move requirements. Critique sustained.

**SURVIVE: Sequential v1 (sensemaking's resolution; not re-litigated).** Multi-head parallel orchestration requires concurrency primitives, branch synchronization, and merge protocols (BRANCH/MERGE/HANDOFF capabilities) the project does not yet have. Building all that before the sequential case is solved is a 10× effort multiplier on a load-bearing item. Sequential is sufficient for Item 5's mechanics-validation. Sequential v1 with parallel-extension hooks is the structurally-correct staging.

**SURVIVE: Time-box-with-fallback for Item 3 (sensemaking's resolution; sustained by critique).** The time-box-and-fallback safeguard was constructed in sensemaking Phase 2's "Most Uncomfortable Perspective" step (what if Item 3 is unbuildable?). Critique sustained: the prior sensemaking remains correct as a fallback, not invalidated. The roadmap's structural honesty depends on this safeguard.

**SURVIVE: Convergence + directedness combined (emerged from critique).** Convergence alone (Generic) misses topical drift; directedness alone (Contrarian) has no positive termination signal. The combination — convergence as primary termination input, directedness as secondary guardrail — catches both failure modes. Neither candidate alone is sufficient; the combination is.

### Cross-discipline contradiction reconciliation

- **Exploration's Alternative E** asked whether user-wellbeing should be in the top 5. Sensemaking declined (the inquiry's question is about buildout priorities, not meta-constraints) but preserved sustainability as a meta-constraint informing pacing. Critique sustained: the pacing plan in the finding (5-6 sessions, max 7h per session, rest between sessions, total 2-2.5 weeks) honors sustainability without putting it inside the top 5.
- **Innovation's P3.b Contrarian** challenged the convergence framing. Critique's collision verdict refined into a combined signal (convergence + directedness). The disagreement between innovation's Contrarian and Generic is preserved in the final design as a feature: directedness is the alarm, convergence is the trigger.
- **Innovation's Assembly 1** framed the project's own past as self-validating evidence. Critique's prosecution exposed the self-reference risk. The historical-comparison test datapoint was preserved (as Item 5's primary test) but reframed: it is one mechanics-check, not a self-validation claim.

## Open Questions

### Monitoring

- **Item 3's actual effort versus the 8-15h estimate.** The estimate is HIGH-confidence on the lower bound (sensemaking established a band), MEDIUM-HIGH on the upper bound. After Item 3 is attempted, calibrate future estimates against the observed effort.
- **Item 4's signal definitions (operational definitions versus actual behavior).** The signals were defined operationally (each is measurable from inquiry artifacts), but their actual diagnostic value is untested until the loop runs. After Item 5, observe which signals fired meaningfully and which were noise; refine v2 specs accordingly.

### Blocked

- **Real-application external validation.** Cannot proceed until Item 5 passes (mechanics-validation must succeed before utility-validation makes sense).
- **v2 parallel-multi-head runner.** Cannot proceed until v1 sequential runner is externally validated.

### Research Frontiers

- **What is "meaningful traversal" structurally?** Item 4 specifies operational signals as v1 placeholders; the deeper question — whether traversal of "thinking space" has a stable structural definition — is research-grade and beyond v1's scope. `enes/thinking_space_dynamics.md` is the user's prior thinking on this; future inquiries may refine the criteria as the project gains traversal data from real loop runs.
- **Whether the orchestrated continuous loop is the correct artifact under test for external validation.** The user's frame asserts yes; the prior sensemaking's frame implies maybe-not (disciplines individually are also a unit-under-test). The fallback in Item 3 reflects this uncertainty: if Item 3 stalls, the unit-under-test reverts to disciplines individually.

### Refinement Triggers

- **If a second inquiry produces a conditional-fallback relation (similar to this finding's relation to the prior sensemaking),** revisit P6.a's KILL of the new frontmatter label `nests-as-fallback`. Vocabulary creep is justified once recurring use exists.
- **If Item 3's design `/MVL+` produces a runner architecture incompatible with `_meta_state.md` as a single state file** (e.g., it needs multiple files or a different schema entirely), update Item 3's deliverable definition. The `_meta_state.md` name in this finding is a placeholder.
- **If Item 5's primary test (re-running wayfinding-merger inquiry) reveals self-reference contamination** (the loop reaches the historical verdict because it inherits the historical reasoning, not because the mechanics work), reopen the question of test-problem selection. Candidate fallback: a foreign-but-small problem with synthesized ground truth.
- **If Item 1's RESUME deletion proves wrong** (Level 1+ autonomy requires explicit resume semantics that cannot be captured by `/MVL+`'s inline resume branch), re-extract a RESUME protocol from the then-current `/MVL+` logic.
- **If the user's actual session pacing diverges significantly from the 5-6 session plan** (faster or slower), update the pacing plan to match observed cadence rather than enforcing the predicted one.
