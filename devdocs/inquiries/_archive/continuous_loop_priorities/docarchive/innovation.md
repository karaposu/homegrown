# Innovation: continuous_loop_priorities

## User Input

`devdocs/inquiries/continuous_loop_priorities/_branch.md`

Read `_branch.md`, `exploration.md`, `sensemaking.md`, and `decomposition.md`. Innovate concrete design candidates for the OPEN sub-decisions per piece (P1-P7). Do not re-innovate sensemaking-resolved decisions; innovate within them. Produce 3 variations per open commitment (generic / focused / contrarian). Run assembly check after.

---

## Approach

The decomposition's 7 pieces cover ~25 open sub-decisions. Applying 7 mechanisms × 3 variations × 25 sub-decisions = 525 candidates is over-decomposition for innovation. Instead:

- **Per sub-decision:** produce 3 variations (generic / focused / contrarian).
- **Per piece:** apply at least one Generator + one Framer (minimum coverage).
- **Across pieces:** track which mechanisms produce convergent outputs (signal of structural correctness).
- **Assembly check:** look for cross-piece combinations that are emergent.

Mechanism shorthand used below: **Comb** = Combination, **AR** = Absence Recognition, **DT** = Domain Transfer, **Ex** = Extrapolation, **LS** = Lens Shifting, **CM** = Constraint Manipulation, **Inv** = Inversion.

---

## P1 — Item 1 commitments

### P1.a — Punch list apply order

**Generic [Comb + CM]:** Apply in dependency order: `protocol_path_generalization` (mostly applied, just verify) → `inquiry_md_post_navigation_update_value_check` (deletes /inquiry, marks stalled SUPERSEDED — clears state) → `telemetry_routing_protocol_classification` (Phase 1 standardization). Rationale: each step leaves the system in a more consistent state for the next.

**Focused [LS — minimize-disruption frame]:** Apply lowest-risk first: protocol_path_generalization verify (zero risk) → telemetry_routing_protocol_classification (additive — adds PROCEED/FLAG/RE-RUN lines, doesn't modify existing logic) → inquiry_md_post_navigation_update_value_check (highest risk — formal deletions). Rationale: front-load safe work; user can pause before destructive steps.

**Contrarian [Inv]:** Apply NONE of them as a separate punch-list pass. Roll Item 1 into Item 3's /MVL+ as a "stabilize-the-baseline" prelude — Item 3's /MVL+ starts with consolidation as Phase 0 of its own work. Rationale: avoids context-switch between consolidation and runner design; the runner's designer needs the consolidated state anyway. **Risk:** violates sensemaking's sequencing (P1 was committed as prerequisite to P4); rejected unless critique finds value.

### P1.b — RESUME's fate

**Generic [DT — apply CONCLUDE precedent]:** Wire RESUME up to `/MVL+`'s "If RESUME (input is a folder path)" branch — the existing branch already does what RESUME describes (read state, determine where left off, continue pipeline). The wire-up is a doc-update: rename the inline section to "RESUME protocol (see homegrown/protocols/resume.md)" and ensure resume.md's instructions match what the branch already does. Net: protocol becomes named-and-referenced; behavior unchanged.

**Focused [CM — add the "no waits" constraint]:** Wire RESUME up to `/MVL+` and `/MVL` resume branches *but* explicitly carry the constraint "no FLAG/RE-RUN waits between disciplines" into resume.md so future edits to resume.md can't reintroduce the bug that was reverted earlier in this session. Specifically: resume.md gets a "Constraints" section noting auto-chain compatibility.

**Contrarian [Inv + AR]:** Delete resume.md. The RESUME logic is fully captured by /MVL/MVL+'s existing branch + the inquiry's `_state.md`; extracting it as a protocol creates redundancy without value. The earlier extraction was speculative; orphan status is itself the evidence. Rationale: keep CONCLUDE (used) and protocols-folder for future protocols, but don't preserve unused extractions.

### P1.c — Stalled inquiries to mark SUPERSEDED

**Generic [Ex — extrapolate from each inquiry's premise]:** Mark all five (`wayfinding_fundamental_fix`, `sic_as_wayfinder`, `navigation_placement` partial, `sic_navigation_integration` partial, `search_equals_navigation_plus_x` partial) as SUPERSEDED, citing `wayfinding_navigation_unification_check` as the supersedor (since it merged wayfinding into navigation, all five are now moot). Each gets a `## Status: SUPERSEDED` line + a one-line reason + a pointer to the supersedor.

**Focused [LS — completeness frame]:** Mark all five SUPERSEDED AND add a back-reference in `wayfinding_navigation_unification_check`'s finding listing the five superseded inquiries. Bidirectional traceability. Rationale: future readers tracing the history can find all five from the supersedor; tracing forward from a superseded one finds the supersedor. Slight extra effort for substantial archaeological clarity.

**Contrarian [Inv]:** Mark only the three FULLY-stalled ones (`wayfinding_fundamental_fix`, `sic_as_wayfinder`, the un-completed parts of `search_equals_navigation_plus_x`). Leave the two PARTIAL ones (`navigation_placement`, `sic_navigation_integration`) un-marked because their partial work may be salvageable. Rationale: SUPERSEDED is a strong signal; over-applying it loses information.

### P1.d — Regression check pass/fail tests

**Generic [Comb]:** A 6-test checklist:
1. Each of 10 disciplines invoked on a small test input produces non-empty, well-formed output.
2. `/MVL` runs end-to-end on a small test question without errors; produces `finding.md`.
3. `/MVL+` runs end-to-end on a small test question without errors; produces `finding.md`.
4. CONCLUDE-produced `finding.md` matches the template (frontmatter + required sections).
5. `install_for_claude.sh` runs cleanly via curl into a temp dir; all skills land in expected locations.
6. `install_for_codex.sh` runs cleanly into a temp dir; same.

**Focused [CM — minimum-cost test]:** Run only one end-to-end `/MVL` on a tiny known question (e.g., "what is 2+2?") + verify install scripts via dry-run. If both pass, infer regression-clean. Rationale: end-to-end exercises 90% of the code paths; install verification covers distribution. ~30min vs 1h.

**Contrarian [Inv]:** Skip the regression check entirely; rely on Item 5's synthetic test (later) to surface any breakage. Rationale: Item 5 is more comprehensive than a regression check; a separate regression check is duplicate effort. **Risk:** Items 2-4 build on Item 1's output; if Item 1 broke something, those items inherit the breakage and Item 5 finds it late, with more rework. Rejected unless critique finds the duplication argument compelling.

---

## P2 — Item 2 specification

### P2.a — N for "no-converge after N iterations" trigger

**Generic [Ex — match SIC's existing iteration patterns]:** N = 3. Three iterations match the typical /MVL convergence window observed in past inquiries; below 3 fires too early, above 3 wastes work.

**Focused [CM — minimize-resource frame]:** N = 2. Triggers /navigate after the second non-converging iteration. Rationale: if iteration 2 didn't converge starting from iteration 1's narrowed focus, the loop is unlikely to converge at iteration 3 without external input. Save the iteration cost.

**Contrarian [Inv]:** N is not a fixed integer; it's measured as "no productivity signal for last K iterations" where productivity is measured per Item 4's signals. Self-adapting. Rationale: hardcoded N may be too aggressive for hard problems and too passive for easy ones. **Risk:** depends on Item 4's productivity signal being defined and reliable; circular dependency unless P3 is committed first.

### P2.b — Where in /MVL+ does trigger logic live

**Generic [DT — follow CONCLUDE's pattern]:** Add a new section in /MVL+'s "EXECUTE PIPELINE" labeled "Conditional /navigate invocation" after the iteration-complete check. Logic: "If iteration count exceeds N AND last iteration produced no SURVIVE verdict → load `homegrown/navigation/SKILL.md` and invoke /navigate; pass output to selection mechanism."

**Focused [AR — absent file]:** Create `homegrown/protocols/navigate_invocation.md` (a new protocol) and reference it from /MVL+. Rationale: invocation logic is reusable across /MVL and /MVL+; extracting it as a protocol keeps the runners thin. Mirrors CONCLUDE's pattern. Slight upfront cost; cleaner long-term.

**Contrarian [Inv]:** Do NOT edit /MVL+. Instead, define /navigate as self-invoking — /navigate reads the inquiry folder, detects whether to fire (iteration count, finding flag), and decides itself. /MVL+ becomes ignorant of /navigate; /navigate becomes opt-in self-aware. Rationale: cleaner separation. **Risk:** /navigate as a discipline currently expects to be invoked; making it self-aware changes its semantics significantly.

### P2.c — How runtime knows manual vs autonomous mode

**Generic [Comb]:** A field in `_state.md`: `## Mode: manual | autonomous`. /MVL+ reads it; /navigate's invocation routes based on it. Default: manual.

**Focused [LS — Item 5 frame]:** Mode is set by Item 3's runner skill — when /continuous (or whatever Item 3 names it) invokes a child /MVL+, the runner sets the mode field on the child's `_state.md`. /MVL+ used standalone defaults to manual. Rationale: meta-loop runner controls mode; standalone MVL+ users get the safe default.

**Contrarian [Inv]:** No mode flag at all. /MVL+'s /navigate invocation always pauses for user; autonomous mode lives ONLY in Item 3's runner, which uses /MVL+ as a sub-routine but applies its own selection logic externally without modifying /MVL+. Rationale: avoids polluting /MVL+ with autonomy concerns. **Risk:** Item 3's runner has to intercept /navigate's output post-hoc, which complicates the runner's control flow.

### P2.d — Does /MVL also get the trigger logic?

**Generic [Ex]:** No. /MVL is the lighter SIC-only loop; adding /navigate invocation pushes scope creep. Only /MVL+ gets the trigger.

**Focused [CM — symmetry]:** Yes, but minimally — /MVL gets the same conditional-fire logic as /MVL+ for consistency. Rationale: users who default to /MVL benefit from /navigate's enumeration too.

**Contrarian [Inv]:** /MVL gets the trigger; /MVL+ does NOT. Rationale: /MVL is the simpler loop, more likely to need /navigate for course-correction; /MVL+ already has /explore and /decompose providing similar enumeration. **Risk:** unintuitive; users may struggle with the asymmetry.

---

## P3 — Item 4 specification (HEAVIEST INNOVATION EFFORT)

### P3.a — Coverage signal operational definition

**Generic [Comb + DT — borrow from /navigate]:** Coverage = ratio of distinct /navigate-types invoked across all iterations to date / 16 total types. Measured by parsing each iteration's /navigate output for the chosen-type field (assuming /navigate emits one). New iteration "adds coverage" if it visits an unvisited type.

**Focused [AR — what's missing in current artifacts]:** Coverage = set of distinct ANCHOR TYPES from sensemaking outputs across all iterations / 5 anchor types (constraints, insights, structural points, principles, meaning-nodes). Iteration adds coverage if its sensemaking produces an anchor type unseen in prior iterations. Rationale: anchor diversity is already a sensemaking telemetry indicator; reuses existing instrumentation.

**Contrarian [Inv — coverage is not the right axis]:** No coverage signal. Coverage assumes uniform-traversal-is-good, but a deep dive into one type may be more productive than scattered shallow visits. Replace with a "depth" signal: how many iterations within the same type before pivoting? Rationale: depth catches single-type-stuck failure; coverage catches scattered-failure; one or the other suffices, and depth is more actionable.

### P3.b — Convergence signal operational definition

**Generic [Comb]:** Convergence = (open-question count at iteration N-1 minus open-question count at iteration N) / open-question count at N-1. Measured by parsing the inquiry's `_state.md` or finding.md "Open Questions" section. Positive value = converging; zero or negative = stalled or divergent.

**Focused [LS — frontier-stability frame]:** Convergence = boolean from "did iteration N's frontier-question list shrink AND did iteration N's verdict count rise?" Combines two micro-signals into one boolean. Easier to compute, harder to game.

**Contrarian [Inv — convergence is wrong metric]:** No convergence signal. Convergence assumes the goal is to settle; but for a continuous loop traversing thinking space, divergence (opening new questions) may be a feature, not a bug. Replace with "directedness" signal: are new open questions topically connected to the original question, or are they drifting? Measured by simple keyword-overlap. Rationale: traversal can be productive without converging.

### P3.c — Productivity signal operational definition

**Generic [Comb + Ex]:** Productivity = (count of new anchors + new ideas + new verdicts produced in iteration N) / (count produced in iteration N-1). Greater than 1 = productive; less than 1 = declining.

**Focused [DT — borrow from version-control diffs]:** Productivity = byte-count diff between iteration N's combined SIC outputs and iteration N-1's. New material adds bytes. Easier to compute than counting anchors/ideas/verdicts; more noisy.

**Contrarian [Inv]:** Productivity isn't measurable per-iteration; it's a cross-iteration trend. Don't measure productivity directly; instead measure "mode collapse" — does iteration N restate iteration N-1's outputs (high cosine similarity in some embedding)? If yes, productivity is zero. Rationale: catches the failure-mode-of-interest (stalled loop) without requiring a positive metric.

### P3.d — Termination rule thresholds

**Generic [Comb]:** Terminate when ALL of:
- Coverage signal: no new types visited for 3 consecutive iterations.
- Convergence signal: ratio < 0.1 for 3 consecutive iterations.
- Productivity signal: ratio < 1.0 for 3 consecutive iterations.

**Focused [CM — disjunctive simplicity]:** Terminate when ANY of: no new types for 5 iterations, OR convergence ratio < 0.05 for 3 iterations, OR productivity ratio < 0.5 for 5 iterations. Rationale: disjunctive triggers are easier to fire — terminates faster on clear signals.

**Contrarian [Inv]:** No termination rule. The continuous loop runs until the user stops it OR a max-iteration safety cap is hit (e.g., 20 meta-iterations). Productivity/coverage/convergence signals are LOGGED but not USED for termination. Rationale: hardcoded thresholds will be wrong; let the user decide based on logged signals. **Risk:** Item 5's synthetic test needs a termination signal to verify mechanics — if no signal exists, what does Item 5 verify?

### P3.e — v1 autonomous-selection heuristic

**Generic [Ex — pick highest-confidence]:** Select the /navigate-output option with highest confidence score (assuming /navigate emits confidences; if not, the type listed first). Default-safe heuristic.

**Focused [Comb — productivity-projecting]:** Select the option that projects highest productivity gain — defined as "the type least visited in the inquiry's history" (max-novelty heuristic). Rationale: ties heuristic to Item 4's signals; avoids re-visiting exhausted types.

**Contrarian [Inv]:** Random selection from /navigate's enumerated options, weighted by confidence. Rationale: explicit randomness is honest about v1's lack-of-judgment; produces variance for Item 5's testing; user observes which random choices led to good outcomes and refines heuristic for v2.

### P3.f — Spec location

**Generic [DT — follow protocols/desc.md pattern]:** `homegrown/protocols/meaningful_traversal.md` (treat criteria as a protocol, not a spec). Loaded by Item 3's runner like CONCLUDE is loaded by /MVL+.

**Focused [LS — keep separate from protocols]:** `devdocs/spec/meaningful_traversal.md`. Rationale: it's a specification consumed by Item 3, not a runtime-loaded protocol. Lives in devdocs (the spec/finding/inquiry tree), not in homegrown (the runtime tree).

**Contrarian [Inv]:** No spec file. Embed criteria + heuristic directly in Item 3's runner skill (`SKILL.md` + references). Rationale: extracting a spec creates two-source-of-truth risk; runner-internal keeps it co-located with consumption.

---

## P4 — Item 3 handoff package

### P4.a — Inquiry folder name

**Generic:** `continuous_loop_runner_v1`. Descriptive; version-explicit.

**Focused:** `loop_runner_design`. Shorter; emphasizes design phase. Could be followed later by `loop_runner_implementation`.

**Contrarian [Inv]:** `meta_mvl`. Frames the runner as a meta-MVL (which is what it is — an MVL over MVLs). Tighter conceptual hook for future readers.

### P4.b — Time-box trigger

**Generic [Ex]:** Design-phase /MVL+ is time-boxed at 4h; implementation phase at 11h; total 15h. If either exceeds, fire fallback.

**Focused [CM — fail-fast]:** Design-phase /MVL+ is time-boxed at 2h. If sensemaking + decomposition phases of Item 3's /MVL+ haven't produced a converged structure within 2h, the runner is too hard for v1; fire fallback. Rationale: design unblocks implementation; if design takes >2h, the gap is at the design level, not effort.

**Contrarian [Inv]:** No fixed time-box. Trigger fallback when Item 3's /MVL+ goes through 3 iterations of S→I→C without producing a finding (i.e., applies its own iteration-NO branch 3 times). Rationale: signal-driven, not time-driven; matches Item 4's logic.

### P4.c — Fallback decision

**Generic:** Halt Item 3, execute prior sensemaking's recommendation: run external validation on disciplines individually using a foreign problem (1-3 days). After validation completes, retry Item 3's /MVL+ with the validation findings as new input. Rationale: validation surfaces concrete capability gaps that should inform runner design.

**Focused [LS — minimum-pivot frame]:** Halt Item 3. Run a *narrower* /MVL+ on a sub-piece of the runner (e.g., just the meta-state schema; or just the selection mechanism) before retrying full Item 3. Rationale: decompose-and-retry instead of pivot-to-prior-sensemaking; preserves the user's original frame.

**Contrarian [Inv]:** Halt Item 3, mark this entire roadmap inquiry SUPERSEDED, run external validation per prior sensemaking, then re-open the question with new context. Rationale: if Item 3 stalls, the assumption "the loop is the artifact" was wrong; the inquiry's frame is what failed, not just Item 3.

---

## P5 — Item 5 design

### P5.a — Test problem choice

**Generic [Comb]:** Re-run the question from `protocol_path_generalization` (a recently-completed inquiry with a clear finding) through the continuous loop. Ground truth = the existing finding. Pass criteria: continuous loop produces a structurally-similar finding (same Option C survives), with no mechanics errors.

**Focused [DT — known-answer math problem]:** Run on a synthesized question with a structural known answer: "What is the minimum number of disciplines required to perform an SIC loop?" Ground truth: 3. Pass criteria: loop's verdict approaches "3" (or names the three disciplines) within bounded iterations. Rationale: trivially-verifiable answer; mechanics-only focus.

**Contrarian [Inv — broken-input test]:** Run on a malformed input (e.g., empty question, contradictory constraints) and verify the loop fails gracefully (terminates with error finding, not infinite loop, not crash). Rationale: mechanics-validation should include failure-path testing, not just success-path. **Pairing-suggestion:** combine with Generic or Focused as a second test case.

**4th-candidate [AR — what's absent in 1-3]:** Run on `wayfinding_navigation_unification_check`'s question (already-answered, with a multi-iteration history). Ground truth = the existing finding's verdict (DELETE wayfinding). Pass criteria: continuous loop produces a finding consistent with the historical verdict AND uses /navigate's invocation correctly given the multi-iteration history. Rationale: tests the multi-iteration mechanics specifically (which the simpler test problems don't exercise).

### P5.b — Pass criteria checklist

**Generic [Comb]:** 8-item checklist:
1. Loop runs without errors.
2. `_meta_state.md` (or whatever P4 commits to) is created and updated each iteration.
3. /navigate fires at correct trigger conditions per Item 2.
4. Selection executes (autonomous mode, using Item 4's heuristic).
5. Coverage signal computed and logged each iteration.
6. Convergence signal computed and logged each iteration.
7. Productivity signal computed and logged each iteration.
8. Termination triggers when expected (per Item 4's rule).

**Focused [CM — minimum-viable]:** 4-item checklist:
1. Loop runs end-to-end.
2. Termination fires (whether by signal or by safety cap).
3. Output finding exists and is well-formed.
4. No state corruption (resume from `_meta_state.md` works).

Rationale: minimum to verify mechanics; signals can be eyeballed in logs without formal pass criteria.

**Contrarian [Inv]:** Pass criteria are *negative* — list of failure modes that MUST NOT occur: no infinite loop, no state corruption, no exception that escapes the runner, no /navigate invocation outside trigger conditions. Rationale: easier to enumerate failure modes than success modes; pass = absence of all listed failures.

### P5.c — Manual-mode test

**Generic:** Yes, briefly. Run the same problem in manual mode (user prompts at /navigate fires); verify manual-mode path works. ~30min addition.

**Focused [LS — autonomous-only frame]:** No. Item 5 is for autonomous mechanics-validation only; manual mode is hand-tested incidentally during development. Saves time.

**Contrarian [Inv]:** Manual mode ONLY; no autonomous test. Rationale: autonomous mode requires Item 4's heuristic to be reliable; for v1 mechanics-validation, manual mode exercises the runner's machinery without confounding it with heuristic quality. **Risk:** doesn't validate the autonomous-mode path; sensemaking specifically wanted Item 5 in autonomous mode.

### P5.d — Bug-fix budget

**Generic:** 2h time-box for diagnose + patch. If exceeded, log the bug as known-issue and proceed (don't block on perfectionism).

**Focused [CM — strict]:** 1h time-box. If a bug surfaces that takes >1h to fix, it's structural, not a quick fix; log and escalate.

**Contrarian [Inv]:** No time-box. If Item 5 surfaces bugs, fix them all before declaring Item 5 done — Item 5 is the LAST gate before external validation; bugs leaking into external validation waste days, not hours. Rationale: bug-leakage cost > over-investment cost at this gate.

---

## P6 — Reconciliation handling

### P6.a — Relation label

**Generic [DT — closest existing label]:** REFINES. Sensemaking's reconciliation effectively narrows the prior sensemaking's open-ended recommendation to a focused one when the loop is the unit-under-test. REFINES captures the narrowing.

**Focused [AR — make new label]:** Add a new frontmatter label: `nests-as-fallback`. Format: `nests-as-fallback: devdocs/sensemaking/what_this_project_needs_most.md` — explicit semantic ("if my plan stalls, fall back to that one"). Rationale: REFINES doesn't capture the fallback semantics; new label is structurally honest. **Risk:** introduces vocabulary creep.

**Contrarian [Inv]:** No frontmatter label. Reconciliation lives in the finding's body text only. Rationale: the relation is conditional ("if Item 3 stalls"); frontmatter implies unconditional relation. Frontmatter is too rigid for conditional semantics.

### P6.b — Frontmatter format

**Generic:** Standard format: `refines: devdocs/sensemaking/what_this_project_needs_most.md` (assuming P6.a Generic). Path-only.

**Focused:** Extended format with reason: `refines: devdocs/sensemaking/what_this_project_needs_most.md  # narrows to "loop is unit-under-test" frame`. Comment captures the narrowing semantics inline.

**Contrarian:** YAML object: `refines: { path: devdocs/sensemaking/what_this_project_needs_most.md, scope: conditional, condition: "Item 3 succeeds" }`. Structured semantics. **Risk:** breaks frontmatter parsers expecting flat strings.

### P6.c — Back-reference in prior sensemaking

**Generic [Comb]:** Yes. Add a one-line note at the top of `devdocs/sensemaking/what_this_project_needs_most.md`: `> Note: this analysis is conditionally narrowed by devdocs/inquiries/continuous_loop_priorities/finding.md when the continuous loop is the unit-under-test.`

**Focused [LS — minimum touch]:** No. Don't edit the prior sensemaking; the cross-reference is one-way (this finding → prior sensemaking). Rationale: prior sensemaking is an artifact of its own moment; back-editing it conflates contexts.

**Contrarian [Inv]:** Yes, more than a back-reference — append a "Subsequent inquiries" section to the prior sensemaking that lists this inquiry AND any future inquiries that further refine. Becomes a hub. Rationale: discoverability for future readers searching from the prior sensemaking.

### P6.d — One-paragraph reconciliation text

**Generic:** "The prior sensemaking (`devdocs/sensemaking/what_this_project_needs_most.md`) recommended *consolidate → externally validate → build*. This inquiry's user-frame inverts items 2 and 3, treating the orchestrated continuous loop as the unit-under-test for external validation rather than the disciplines individually. The two answers are co-valid for different scopes: the prior sensemaking answers the open-ended 'what does the project need most'; this inquiry answers the focused 'what's needed before real-application external validation, given the loop is the artifact'. The prior sensemaking is nested as a fallback: if Item 3 (the continuous-loop runner) stalls, halt this roadmap and execute the prior sensemaking's recommendation."

**Focused [CM — terse]:** "Refines `devdocs/sensemaking/what_this_project_needs_most.md` for the focused scope 'before real-application validation, given the loop is the artifact under test.' Prior sensemaking nested as fallback if Item 3 stalls."

**Contrarian [Inv]:** "Supersedes `devdocs/sensemaking/what_this_project_needs_most.md`'s ordering of validate-before-build — but only IF the user accepts the framing that the orchestrated loop is the artifact under test. If that framing fails (Item 3 unbuildable), the prior sensemaking's order resumes." Rationale: explicit conditional supersession; clearer than "REFINES."

---

## P7 — Pacing

### P7.a — Session schedule

**Generic — moderate 5-6 sessions, 2 weeks:**
- Session 1 (~3-4h): P1 punch lists 1-2 + RESUME decision + stalled markers.
- Session 2 (~2-3h): P1 punch list 3 + regression check.
- Session 3 (~2-3h): P2 + P3 (parallel small commitments).
- Session 4 (~4-6h): Item 3 design /MVL+ (P4 launch + design phase).
- Session 5 (~4-6h): Item 3 implementation + integration.
- Session 6 (~2-4h): P5 synthetic test + bug fixes.

P6 + P7 produced inline with finding.md.

**Focused — aggressive 4 sessions, 1.5 weeks:**
- Session 1 (~5-6h): All of P1 in one push.
- Session 2 (~5h): P2 + P3 + P4 launch.
- Session 3 (~6-8h): Item 3 design + implementation in one go.
- Session 4 (~3-4h): P5 + finding.md write.

Rationale: fewer context-switches; better state-holding. **Risk:** higher fatigue; less safe break-points.

**Contrarian [Inv] — conservative 7 sessions, 3 weeks, with explicit rest gaps:**
- 5 sessions for Items 1-4 (one item per session, paced).
- 1 session for Item 5.
- 1 session for finding.md write + reconciliation + pacing review.
- Rest day between sessions; no two sessions on consecutive days.

Rationale: sustainability is the meta-constraint per prior sensemaking; aggressive pacing risks the project. **Risk:** loses momentum; user may not return after gaps.

### P7.b — Break-point markers

**Generic [DT — borrow from git semantics]:** Each session ends at a "stable commit" — a state where the project tree is consistent (all applied punch lists committed; no half-edits; install scripts pass). User can `git status` and verify clean tree before stopping.

**Focused [LS — discipline-output frame]:** Each session ends with a verifiable artifact: P1 ends with regression-check passing; P2 ends with /MVL+ test inquiry running; P3 ends with spec file written; P4 ends with Item 3's `_branch.md` created; P5 ends with synthetic test result documented. Rationale: artifact-based break-points are more concrete than "stable commit."

**Contrarian [Inv]:** No formal break-points. The continuous loop is a continuous artifact; breaking it into sessions imposes false structure. Work until natural stopping points (a discipline output completes), then stop. Rationale: artificial pacing fights the work; let the work shape the schedule.

---

## Test Phase — apply 5 tests to surviving outputs

(Brief tests per output; full evaluation in critique.)

| Output | Novelty | Survives scrutiny | Fertility | Actionability | Mech-independence |
|---|---|---|---|---|---|
| P1.a Generic (dependency-order apply) | LOW | YES | LOW (one-shot) | HIGH | YES |
| P1.b Generic (wire RESUME to /MVL+) | MEDIUM | YES | MEDIUM | HIGH | YES (Comb+DT converged) |
| P1.b Contrarian (delete RESUME) | MEDIUM | YES (orphan-state argument) | MEDIUM | HIGH | YES (Inv standalone) |
| P1.d Generic (6-test checklist) | LOW | YES | LOW | HIGH | YES |
| P2.a Generic (N=3) | LOW | YES | MEDIUM (informs P3) | HIGH | YES (Ex) |
| P2.a Contrarian (signal-driven N) | HIGH | DEPENDS-ON-P3 | HIGH | LOW (until P3 commits) | YES (Inv) |
| P3.a Generic (16-type ratio) | MEDIUM | YES | HIGH | HIGH | YES (Comb+DT converged) |
| P3.b Contrarian (directedness, not convergence) | HIGH | YES | HIGH | MEDIUM | YES (Inv) |
| P3.c Contrarian (mode-collapse via similarity) | HIGH | YES | MEDIUM | MEDIUM (needs embedding) | YES (Inv) |
| P3.e Generic (highest-confidence) | LOW | YES | LOW | HIGH | YES (Ex) |
| P3.e Contrarian (random with weight) | HIGH | YES (honest about v1) | MEDIUM | HIGH | YES (Inv) |
| P3.f Generic (protocols/) | MEDIUM | YES (precedent) | HIGH | HIGH | YES (DT) |
| P3.f Focused (devdocs/spec/) | MEDIUM | YES | HIGH | HIGH | YES (LS) |
| P4.b Focused (2h design timebox) | MEDIUM | YES | MEDIUM | HIGH | YES (CM) |
| P5.a Generic (re-run protocol_path_generalization) | MEDIUM | YES | HIGH | HIGH | YES (Comb) |
| P5.a 4th (re-run wayfinding-merger inquiry) | HIGH (multi-iter test) | YES | HIGH | HIGH | YES (AR) |
| P6.a Generic (REFINES) | LOW | YES | LOW | HIGH | YES |
| P6.a Focused (new label) | HIGH | DEPENDS | MEDIUM | HIGH | YES (AR) |
| P7.a Generic (5-6 sessions) | LOW | YES | LOW | HIGH | YES |
| P7.a Contrarian (conservative 7 + rest) | MEDIUM | YES | MEDIUM | MEDIUM | YES (Inv) |

(Other outputs pass minimum tests but offer less innovation — listed in the per-piece sections above.)

---

## Assembly Check

Look for cross-piece combinations that emerge as stronger than any individual output.

### Assembly 1 — "Self-validating roadmap"

**Combine:** P3.a Generic (16-type coverage signal) + P3.b Contrarian (directedness signal, not convergence) + P3.c Contrarian (mode-collapse via similarity) + P5.a 4th (re-run wayfinding-merger inquiry) + P5.b Contrarian (negative pass criteria).

**Emergent property:** The signals are designed for the project's specific traversal patterns (16-type coverage from /navigate; directedness via keyword-overlap from anchors; mode-collapse via similarity); the test problem is the project's own multi-iteration history; pass criteria are negative (no failure modes). The whole roadmap becomes self-validating against the project's past — Item 5 isn't a new test, it's the project re-deriving its own answer using the orchestrated loop. If the loop reaches a similar verdict to the historical finding, mechanics + criteria + heuristic all work together; if not, the failure points to whichever component diverged.

**Why this is emergent:** No individual output produces this; it's the alignment of multiple outputs around a single coherent test scenario. Score: HIGH NOVELTY, HIGH FERTILITY (suggests v2/v3 versions of the loop run on different historical inquiries to triangulate), HIGH ACTIONABILITY.

### Assembly 2 — "Lightweight v1"

**Combine:** P1.d Focused (one end-to-end test) + P2.a Focused (N=2) + P3.d Focused (disjunctive triggers) + P4.b Focused (2h design timebox) + P5.b Focused (4-item checklist) + P5.d Focused (1h bug budget) + P7.a Focused (4-session aggressive).

**Emergent property:** A *sprint version* of the roadmap. ~12-18h instead of 20-33h. Trades depth for speed. If Item 3 is buildable v1, this delivers it in ~1.5 weeks; if not, fallback fires earlier than the standard plan (saving days of work).

**Why this is emergent:** Each Focused output trades depth for speed; assembled, they compound into a coherent fast-path that's structurally consistent (all decisions optimized for the same dimension).

### Assembly 3 — "Sustainability-first"

**Combine:** P7.a Contrarian (7 sessions + rest gaps) + P5.d Contrarian (no bug-fix time-box) + P4.c Focused (narrower /MVL+ on sub-piece if stall) + P1.d Generic (full 6-test checklist).

**Emergent property:** The project paces conservatively; bugs get fully fixed; stalls trigger decomposition rather than abandonment. Maximizes user wellbeing and roadmap completion probability at the cost of velocity. ~30-40h spread over 3-4 weeks.

### Assembly 4 — "Bypass Item 1"

**Combine:** P1.a Contrarian (consolidation rolled into Item 3's /MVL+) + P3.f Contrarian (no separate spec file, embed in runner).

**Emergent property:** Skips two intermediate artifacts (consolidated baseline, separate spec) by folding both into Item 3. Simplifies the artifact tree; collapses decomposition. **Critique alert:** violates sensemaking's prerequisite ordering; only viable if Item 3 is genuinely the right consolidation point, which requires verification.

---

## Convergence Telemetry

- **Generators applied:** Comb, AR, DT, Ex (all 4) ✓
- **Framers applied:** LS, CM, Inv (all 3) ✓
- **Coverage:** Full (7/7).
- **Convergence:** 3+ mechanisms point to:
  - Wire RESUME to /MVL+ (Comb + DT) — high confidence on this path.
  - Coverage signal from /navigate's 16 types (Comb + DT) — high confidence.
  - Spec lives separately (DT for protocols/ + LS for devdocs/spec) — agree on "separate from runner," disagree on which folder.
- **Surviving outputs tested:** 20+ outputs tested for novelty/scrutiny/fertility/actionability/mechanism-independence.
- **Failure modes observed:**
  - Premature evaluation? No.
  - Single-mechanism trap? No (used all 7).
  - Early frame lock? No (multiple Inv contrarians produced).
  - Innovation without grounding? No (each candidate is concrete).
  - Mechanism exhaustion? No (all 7 produced viable outputs).
  - Survival bias? Mild — Generic candidates tend to survive scrutiny easier; mitigated by including Contrarian and Focused alternatives in the test phase.
- **Overall: PROCEED to critique.**

---

## Recommendations for Critique

Critique should focus on:

1. **Assembly 1 ("self-validating roadmap")** — high novelty + high fertility; needs adversarial testing on whether the self-validation is genuinely diagnostic or self-confirming (self-reference blindness risk).
2. **Assembly 2 ("lightweight v1")** — most actionable; needs prosecution on whether the time-savings sacrifice critical safety.
3. **P3.b Contrarian (directedness vs convergence)** — high-leverage epistemic choice; needs adversarial testing on whether convergence is genuinely the wrong frame.
4. **P3.e Contrarian (random selection)** — uncomfortable but honest; needs prosecution on whether v1 randomness contaminates Item 5's mechanics-validation.
5. **P6.a Generic vs Focused (REFINES vs new label)** — frontmatter vocabulary decision with downstream consequences; needs prosecution on vocabulary creep vs semantic honesty.
6. **P1.b Generic vs Contrarian (wire RESUME vs delete)** — important commitment; both have structural arguments; critique should pick.

Critique should NOT re-litigate sensemaking's resolved decisions (conditional /navigate, sequential v1, mechanics-only Item 5).

The HEAVIEST piece (P3) has the most innovation candidates; critique should give it proportional adversarial effort.
