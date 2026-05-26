---
status: active
---
# Finding: A/B-test inquiry protocol

## Question

Should homegrown — the project at `homegrown/` containing the thinking-discipline specs and protocols — have a protocol for creating A/B-test inquiries, where the user runs the same problem input through both the current discipline set and an archived (snapshotted) discipline set, with both runs stored under a shared parent folder in `devdocs/inquiries/` for direct comparison? If yes, what is its shape, what failure modes must it guard against, and how does it relate to the existing protocols (`homegrown/protocols/branch_inquiry.md`, `homegrown/protocols/conclude.md`, `homegrown/protocols/outcome_review.md`, `homegrown/protocols/loop_diagnose.md`, `homegrown/protocols/artifact_materialization.md`)?

The goal: a clear yes/no plus (if yes) the protocol's structural shape — folder/file layout, how the two runs are kicked off, how comparison is captured as a durable artifact, what failure modes the protocol guards against, and how it composes with the existing protocols. Good answer is one the user can implement directly into `homegrown/protocols/` or knowingly defer with explicit revival triggers.

## Finding Summary

- **Yes — build the protocol.** The protocol is the missing comparability layer for the snapshot infrastructure that already exists (per `enes/stability_preservation_via_git.md`, which defines how a past commit's `homegrown/` is git-archived, prefix-renamed, and installed side-by-side as `/<sha>-MVL+`). Without it, snapshots are invocable but their outputs aren't directly comparable to current runs.

- **The shape is a thin coordination protocol** that creates a parent folder + two child inquiry stubs (one for current, one for the snapshot version), prints a single-slash-command dispatch invitation, and on a manual synthesize trigger produces a structured comparison record at the parent root. Net new content: the parent shell + dispatch instructions + the wiring. Existing protocols (`branch_inquiry`, `outcome_review`, `conclude.md`) provide the rest.

- **Five structural commitments are non-negotiable** (locked during sensemaking and confirmed by critique): composition over invention; scaffold-and-instruct (the protocol creates folders + prints what to run, doesn't dispatch pipelines itself); structured human verdict (the comparison record is human-rendered, not auto-generated); explicit user-declared test intent (`regression-check` / `improvement-check` / `free-comparison`); paradigm is paired-snapshot regression testing with N=1 per side, NOT randomized-controlled-trial-style A/B testing.

- **The verdict format is reused from `homegrown/protocols/outcome_review.md`** — the comparison record IS an outcome_review record (delta type ∈ {confirmation, mismatch, regression, drift, uncertainty}, with evidence pointing to both child finding.md files). This is decisive because outcome_review's existing schema fits A/B verdicts exactly and integrates with `homegrown/contracts/alignment_control.md`'s shared alignment vocabulary.

- **Eight specification details need to be settled when the protocol is materialized as `homegrown/protocols/ab_test_inquiry.md`** — the synthesize-trigger command syntax; partial-failure handling; an honest limitations section; cross-ref-with-minimum-inline-field-guide (not full inline) for the verdict schema; explicit "convention not enforced" wording for the `ab__` naming prefix; "read-only on source inquiry" for re-test mode; explicit count for the deferred auto-synthesize revival trigger; measurable revival triggers for the 5 deferred candidates. None of these require another sensemaking-innovation-critique cycle; they're spec details for materialization.

- **The protocol composes with three existing protocols** and is parameterized over snapshot identifier so it works for any current commit: `branch_inquiry` (pattern reuse for parent + sibling-set folder structure; the new protocol writes children directly to bypass branch_inquiry's runner-validation gap that rejects `<sha>-MVL+`); `conclude.md` (relationship-pointer printing on each child completion); `outcome_review.md` plus `alignment_control.md` (verdict record schema).

- **Deferred for v1 with explicit revival triggers:** parent-as-metadata-only-inquiry pattern; pre-declared automated criteria; recorded-baseline mode; pre-recorded snapshot mode; `ab_stability_test` sibling protocol for measuring LLM-stochasticity-driven output variance. Each has a measurable revival condition (e.g., "after ≥3 instances of running the same A/B input across different time periods").

- **Documented research frontiers** (architectural or multi-phase work; not blocking v1): autonomous orchestration at autonomy Level 3+ (per the autonomy-ladder concept in `enes/desc.md`); criteria-learning across A/B history; first-class `ab-comparison` flow-type as a runner-mode change; bisect-style snapshot chaining; canonical-input fixture libraries; default-snapshot conventions when snapshots accumulate beyond ~10; A/B as a continuous-integration gate for spec changes.

## Finding

### Why this question exists, briefly

The homegrown project iterates on its thinking-discipline specs (sense-making, innovate, td-critique, explore, decompose, comprehend, reflect, navigation — see `homegrown/<discipline>/SKILL.md`). Spec edits sometimes regress the discipline's output quality. Without a way to invoke a past version of a discipline against current input, "did this edit make things worse?" is a vibes-based judgment call.

`enes/stability_preservation_via_git.md` solved the **invocability** problem: a commit's `homegrown/` can be git-archived into `archived_skills/<sha>-hg/`, all skill names prefixed with the commit short-SHA, and installed side-by-side under `~/.claude/skills/<sha>-MVL+/` etc. After that machinery, `/MVL+` runs current and `/<sha>-MVL+` runs the snapshot, both at the same time on the same machine.

What's still missing is the **comparability** layer — the inquiry-level scaffolding that ties two paired runs of the same input into a shared comparison artifact, so the user can A/B test current vs the snapshot as a structured operation rather than a hand-coordinated one. This finding answers what that scaffolding should be.

### The protocol's identity (its `homegrown/protocols/ab_test_inquiry.md` header)

The protocol is a **thin coordination protocol for paired-snapshot regression testing of homegrown disciplines.** It creates a parent inquiry folder, two child inquiry stubs (one for current, one for the named snapshot version), prints a single-slash-command dispatch invitation, and on a manual synthesize trigger produces a structured comparison record at the parent root capturing a human-rendered verdict.

The protocol explicitly is not a randomized-controlled-trial-style A/B testing framework. The four paradigms that don't apply and are documented as such in the protocol's identity section are: (1) statistical sampling and p-values (each side runs N=1, no sampling distribution exists); (2) blinding (the LLM is never blinded to which version it's running because the slash command name is part of the invocation); (3) real-time mid-pipeline intervention (comparison is post-hoc, not in-flight); (4) automated semantic equivalence checking across versions (the verdict is human judgment in v1, not textual or rubric-based diffing).

The protocol's input contract supports two modes. **Fresh-question mode**: the user supplies a Question, a `test_intent` value, and a snapshot identifier; the protocol creates fresh child inquiries with that question. **Re-test mode**: the user supplies the path to an already-completed inquiry plus a snapshot identifier; the protocol reads that inquiry's `_branch.md` and creates fresh child inquiries with the same question (the source inquiry is read-only — never modified by the A/B protocol). Re-test mode is the most common case the user will encounter ("I just ran an inquiry on current; did the snapshot version handle it better?") and it collapses what would otherwise be a multi-step manual operation into a single slash command.

The `test_intent` field is one of three values, and the user must declare it explicitly: `regression-check` (the user suspects current has gotten worse; the snapshot is the baseline being defended); `improvement-check` (the snapshot is the baseline; the user wants to confirm current is better); `free-comparison` (no asymmetry; just compare). The intent shapes how the comparison record's expected/observed fields are populated.

The protocol documents six predictable failure modes for the user: confirmation bias when reading the verdict (the user pre-suspects regression and reads to confirm); schema drift between versions (the snapshot's `finding.md` template may have different sections than current's, e.g., the snapshot may lack a section that was added recently); sample-size-of-1 (one A/B test is anecdotal evidence, not regression proof); two-pipeline cost (each A/B run is two full extended-loop pipelines and is a significant compute commitment); hidden state leakage (if the snapshot install script wasn't applied correctly, the snapshot's runner may accidentally call current's protocols, contaminating the test); and snapshot-rot (testing against a snapshot from many months ago tests against an irrelevant past state).

### Setup phase: what the protocol creates on disk

When the user invokes `/ab-test "<question or inquiry_path>" --vs <snapshot-sha> --intent <test_intent>` (the exact slash-command syntax is one of the eight materialization details to settle), the protocol creates:

```
devdocs/inquiries/<YYYY-MM-DD_HH-MM>__ab__<slug>/
├── _ab.md
├── current/
│   ├── _branch.md
│   └── _state.md
└── snapshot-<sha>/
    ├── _branch.md
    └── _state.md
```

The parent folder name uses the convention `ab__` as a leading prefix on the slug so users can list all A/B inquiries with `ls devdocs/inquiries/ab__*`. This is convention only — not enforced by tooling — and a registry index can be added later if drift becomes a problem.

The parent's `_ab.md` file holds the A/B-specific metadata that doesn't fit in a normal inquiry's `_state.md`: the `test_intent` value; the snapshot identifier; the shared question (or pointer to the source inquiry in re-test mode); a `branch_set_id` shared by both children; the runner each side uses (`MVL+` for current, `<sha>-MVL+` for the snapshot); creation timestamp and source authority; and a status field with three possible values — `ACTIVE` (children are running or pending), `COMPLETE` (both children finished and the comparison record was produced), or `INVALIDATED` (the user explicitly abandoned the test mid-flight, with a reason field documenting why).

The two child subfolders are named `current/` and `snapshot-<sha>/`. Each contains a `_branch.md` with the same Question / Goal / Scope Check content (so both pipelines see identical input) and a `_state.md` with `Flow-type: extended`, the appropriate `runner` field per side, a shared `branch_set_id`, and an `AB_PARENT` relationship pointer back to the parent folder. Each child's `_state.md` Relationships section also lists `BRANCH_SET: <branch_set_id>` and `RELATED: <other_child_path>` so reading any one child reveals the A/B context.

A note about composition with `homegrown/protocols/branch_inquiry.md`: that protocol already supports a `branch_mode: set-member` with shared `branch_set_id` for coordinated sibling branches, which is structurally the right pattern for A/B. However, branch_inquiry's runner-validation only accepts `MVL` and `MVL+`, not `<sha>-MVL+`. Rather than extend branch_inquiry's runner validation, the A/B protocol writes the child folders directly while declaring `BRANCH_SET` semantics in each child's `_state.md` for parity. This avoids modifying branch_inquiry and contains the A/B protocol's complexity to its own file.

### Setup phase: dispatch instructions

After creating the parent and child folder stubs, the protocol prints user-facing dispatch instructions. The instructions are short (parent path, both child paths, the two exact slash commands the user runs, and a single line pointing to the synthesize-trigger command for after both children finish). For example:

```
A/B-test inquiry created: devdocs/inquiries/2026-05-14_18-00__ab__example/
  Test intent: regression-check
  Snapshot: bf4ae1f

To run both pipelines, dispatch these two commands (in parallel sessions, sequentially in one session,
or via a future automated runner — your choice):

  /MVL+ devdocs/inquiries/2026-05-14_18-00__ab__example/current/
  /bf4ae1f-MVL+ devdocs/inquiries/2026-05-14_18-00__ab__example/snapshot-bf4ae1f/

After both children CONCLUDE, run:
  /ab-test --synthesize devdocs/inquiries/2026-05-14_18-00__ab__example/
```

The protocol does not launch the children itself. The user decides the session topology. This stays consistent with the "scaffold-and-instruct, not orchestrate" commitment and means the protocol works whether the user has one Claude Code window open or several.

The dispatch happens via the existing extended-loop runner's RESUME mode (per `homegrown/MVL+/SKILL.md`, which says the runner accepts an existing inquiry-folder path and resumes the pipeline from the first incomplete discipline). Each child's `_state.md` already specifies the pipeline (E→S→D→I→C), so the runner has everything it needs to start.

### Synthesize phase: producing the comparison record

After both children's `_state.md` reach `Status: COMPLETE` and both have a `finding.md` file, the user runs `/ab-test --synthesize <parent_path>` (or the equivalent re-invocation pattern; the exact command syntax is one of the eight materialization details to settle).

The synthesize phase reads both `finding.md` files plus the parent's `_ab.md` and produces a comparison record at `<parent_path>/comparison.md`. The record uses the schema defined in `homegrown/contracts/alignment_control.md` (the project's shared alignment-record contract — which defines fields like `delta.type`, `evidence`, `confidence`, `route` and is consumed by `outcome_review.md`, `loop_diagnose.md`, and other alignment-insurance protocols). The protocol does NOT inline the full schema — it cross-references `alignment_control.md` for the canonical contract and includes a minimum inline field guide so the protocol is self-contained even if `outcome_review.md` is not in the install set. (Currently `outcome_review.md` exists at `homegrown/protocols/outcome_review.md` but is not in the script that installs protocols to `~/.claude/skills/protocols/`; this is a pre-existing install-set gap that the A/B protocol works around via the cross-ref-plus-minimum-inline approach rather than depending on outcome_review being installed.)

The comparison record's fields: `source.path` is the snapshot child's `finding.md`; `source.anchor` is the snapshot's one-sentence answer; `expected` is populated per the user-declared `test_intent` (regression-check: "snapshot-equivalent or current is expected"; improvement-check: "current expected to outperform snapshot"; free-comparison: "differences expected, no asymmetry"); `observed` is both findings' one-sentence answers plus the key divergences; `delta.type` is one of {confirmation, mismatch, regression, drift, uncertainty} per the alignment_control contract's existing vocabulary; `delta.summary` is the human-written prose explanation of why this verdict, with quoted excerpts from both findings as evidence; `evidence` is the list of paths to both finding files plus optionally per-discipline output paths; `confidence` defaults to LOW because N=1 evidence is anecdotal (HIGH only when both runs converge on the same key claims); `route` is the user's recommended next action — `no-op`, `monitor`, `navigation`, `materialize`, `revise_protocol`, `loop_diagnose`, or `recover`.

The synthesize phase explicitly handles partial-failure cases: if one child completed but the other failed partway through (e.g., a discipline hit a structural check failure the user couldn't resolve), synthesize still produces a comparison record but sets `delta.type: uncertainty`, `confidence: low`, populates `delta.summary` with the failure context, and routes to `loop_diagnose` if the failure is in the discipline pipeline rather than the A/B protocol itself. This means the user always gets an actionable artifact, never a silent gap.

The protocol explicitly tells the user: the comparison record is structured human judgment, not automated regression detection. The schema supports the verdict; it does not render the verdict. v1 is calibrated for autonomy Levels 0–1 (where the human is in the loop on every decision per `enes/desc.md`'s autonomy-ladder concept); auto-verdict is deferred to autonomy Level 3+. Setting this expectation honestly in the protocol's identity section prevents users from expecting an automated regression-detection capability the protocol does not have in v1.

The synthesize trigger is manual in v1 — the user explicitly invokes `/ab-test --synthesize <parent_path>`. Auto-trigger via `homegrown/protocols/conclude.md` detection of "all members of a branch_set have completed" is deferred until the project has performed at least three manual synthesizes; at that point the friction of remembering the synthesize command becomes evidence that auto-trigger is worth building, and conclude.md can be extended to detect branch-set completion and call the A/B synthesize phase automatically.

### Operational guidance section

The protocol's operational-guidance section documents trigger heuristics and caveats for the user, separately from the protocol's structural identity. The trigger heuristics: invoke A/B when (a) a regression is suspected on a known-good past state, (b) the user wants to validate that a recent spec change improved things, or (c) the user wants to compare two architectural directions on the same problem. Don't invoke A/B for routine inquiries where regression isn't a concern.

The caveats section names the cost-benefit tradeoffs the user should think about before invoking: snapshot-rot (an A/B test against a snapshot older than ~3–6 months may be testing against an irrelevant past state, so the verdict's `confidence` field should reflect snapshot age); sample-size-of-1 (one A/B test is anecdotal; multiple A/B tests on related questions are needed for high-confidence regression conclusions); two-pipeline cost (each A/B run is two full extended-loop pipelines, a non-trivial compute commitment that should be intentional). The section also documents snapshot-identifier conventions (short commit SHA or milestone tag, with the snapshot install location per `enes/stability_preservation_via_git.md`) and points to that file as the prerequisite — you can't run A/B without first having created a snapshot.

### How this composes with existing protocols

The protocol consumes four existing protocols and one contract:

`homegrown/protocols/branch_inquiry.md` — pattern reuse for parent + coordinated-sibling-set folder structure. The A/B protocol writes the children directly rather than calling branch_inquiry, but follows the same `branch_set_id` semantics so a future enhancement could make branch_inquiry's runner-validation accept any `*-MVL+` form and unify the path.

`homegrown/protocols/conclude.md` — already prints relationship pointers when an inquiry completes (it prints `Branch set: [branch_set_id]` when a child has BRANCH_SET in its Relationships). For A/B in v1, no modification to conclude.md is needed; conclude prints what it already prints, and the user manually triggers synthesize. For v2 (when auto-synthesize ships per the deferred-with-revival trigger), conclude.md gains awareness of "this is the last branch_set member to complete" and can call the A/B synthesize phase.

`homegrown/protocols/outcome_review.md` — provides the verdict-record schema. The A/B comparison record IS an outcome_review record. Reusing this avoids inventing a new comparison-artifact format.

`homegrown/contracts/alignment_control.md` — the canonical alignment-record contract that outcome_review consumes. The A/B protocol cross-references this contract for the canonical schema (so any contract-level changes propagate without the A/B protocol needing edits).

`enes/stability_preservation_via_git.md` — the snapshot infrastructure prerequisite. The A/B protocol assumes a snapshot has been created and installed per that document; the user is responsible for ensuring the snapshot's slash commands exist.

The protocol does NOT compose with `homegrown/protocols/loop_diagnose.md` directly. loop_diagnose frames a correction-chain (weak prior + human correction + later improved result) as an MVL+ inquiry; it presupposes the user has explicitly identified the correction signal. A/B testing produces evidence that a regression exists; loop_diagnose can be invoked as a downstream operation if the A/B verdict says "regression detected" and the user wants to diagnose the cause. The two protocols are sibling operations along the regression-detection-and-diagnosis pipeline, not nested.

The protocol does NOT compose with `homegrown/protocols/artifact_materialization.md` directly. Materialization handles decision-to-files conversion for non-discipline artifacts (specs, code, docs); A/B testing operates on inquiry-level outputs. They share the alignment_control contract for record format but otherwise operate in different territory.

## Next Actions

### MUST

- **What:** Materialize the protocol as `homegrown/protocols/ab_test_inquiry.md` per the design above, settling the eight specification details documented in the Finding (synthesize-trigger command syntax; partial-failure handling; honest limitations section; cross-ref + minimum inline field guide for the verdict schema; "convention not enforced" wording for the `ab__` naming prefix; "read-only on source inquiry" for re-test mode; explicit count for the deferred auto-synthesize revival trigger; measurable revival triggers for the five deferred candidates).
  - **Who:** materialization protocol invoked by the user at their next opportunity
  - **Gate:** before the next time the user wants to A/B test a snapshot (the current state has only one snapshot, `bf4ae1f`, so this is not blocking immediate work but blocks any A/B operation)
  - **Why:** without the protocol file, A/B testing is hand-coordination across multiple Claude sessions and the comparability layer doesn't exist as a reusable pattern

### COULD

- **What:** Add `homegrown/protocols/outcome_review.md` to the install script's `protocols=( ... )` list at `install_for_claude.sh` line 64, so that future protocols (including the new A/B protocol when it materializes) can rely on outcome_review being available at `~/.claude/skills/protocols/outcome_review.md`.
  - **Who:** the user or a future maintenance task
  - **Gate:** if a second protocol (beyond ab_test_inquiry) wants to consume outcome_review at runtime
  - **Why:** the install-set gap is currently worked around in the A/B protocol via cross-ref-plus-minimum-inline; closing the gap removes the workaround for future protocols

- **What:** Document a snapshot-creation cadence convention (e.g., "snapshot before any spec edit that touches a load-bearing failure mode or a structural commitment") in `enes/stability_preservation_via_git.md`'s "When to snapshot" section.
  - **Who:** the user
  - **Gate:** when the second snapshot is being created (currently bf4ae1f is the only one)
  - **Why:** A/B tests are only useful against snapshots that exist; making snapshot creation routine increases the pool of states A/B can test against

### DEFERRED

- **What:** Build the auto-synthesize integration in `homegrown/protocols/conclude.md` (extend conclude to detect "all members of a branch_set have COMPLETE status" and invoke the A/B synthesize phase automatically).
  - **Gate:** after ≥3 manual synthesizes have been performed (concrete count, not vague "if it gets common")
  - **Why (if revived):** removes the friction of remembering the synthesize-trigger command; eliminates a class of "user forgot to synthesize" failures

- **What:** Build a recorded-baseline mode (snapshot's expected output is committed once; future A/B tests run only the current side and diff against the recording).
  - **Gate:** after ≥3 instances of running the same A/B input across different time periods
  - **Why (if revived):** saves 50% compute on repeated A/B against the same snapshot; trades freshness for cost

- **What:** Build pre-declared automated criteria (user states "snapshot must say X about Y for the test to pass" before running; protocol mechanically checks).
  - **Gate:** after ≥5 same-question A/B reruns where the user wishes the verdict were automated
  - **Why (if revived):** moves toward fixture-style regression suite; useful for stable, well-understood discipline behavior

- **What:** Build an `ab_stability_test` sibling protocol that runs the SAME version twice on the SAME input to measure LLM-stochasticity-driven output variance.
  - **Gate:** if 2+ A/B verdicts have been overturned because the divergence was attributed to stochasticity rather than version difference
  - **Why (if revived):** distinguishes regression-from-version from variance-from-stochasticity; protects A/B verdicts from confounding

- **What:** Generalize the parent's status enum to include `ANCHOR_ONLY` (parent is a normal inquiry with metadata only, no pipeline) so that other protocols can reuse the metadata-only-parent pattern.
  - **Gate:** if a second homegrown protocol introduces a need for a metadata-only inquiry parent (no pipeline, only relationships)
  - **Why (if revived):** consolidates an emerging pattern into shared machinery rather than duplicating per-protocol

## Reasoning

### Why this answer over the alternatives

**Composition over invention** was the load-bearing principle. The exploration phase enumerated 24 candidates across six design regions (storage shape, launch mechanism, comparison artifact, granularity, composition, and confirmed-absent paradigms). Sensemaking collapsed the design space onto five non-negotiable commitments — the most important being that the protocol should compose existing homegrown machinery rather than introduce new primitives. This is what makes the protocol a single markdown spec file rather than a substantial new system.

**The verdict-format question was decisively answered by reusing `outcome_review.md`'s schema.** The strongest counter-interpretation considered was free-form prose comparison (which would be more flexible than a structured record). The counter failed on structural grounds: outcome_review's schema is designed for after-use alignment review with delta types `confirmation/mismatch/regression/drift/uncertainty` — exactly the categories an A/B verdict needs. The schema also has free-form fields (delta.summary, evidence prose) for unexpected dimensions, so flexibility isn't lost. Reusing outcome_review provides BOTH structure AND prose flexibility AND substrate integration with the alignment_control contract; pure prose provides only flexibility. The reuse decision is confirmed, not contingent.

**The "fork the conversation" mechanism the user originally proposed was generalized to "scaffold-and-instruct."** The user's framing implied two parallel Claude Code sessions. The strongest counter was "the user asked for fork; honor that." The counter failed on structural grounds: "fork" is mechanism, not requirement; the requirement is "two paired runs of the same input that produce comparable artifacts." Whether they run in parallel sessions, sequentially in one session, or via a future automated runner is a USER CHOICE about ergonomics. Locking the protocol to parallel sessions would fail any user who prefers sequential or for whom parallel sessions are unavailable. The scaffold-and-instruct generalization preserves the user's intent while keeping the protocol mechanism-agnostic.

**The verdict is human judgment, not automated diff.** The strongest counter-interpretation was "use diff(1) on the two finding.md files; any non-trivial diff = regression flag." The counter failed because discipline outputs are LLM-generated prose; two runs of the SAME version on the SAME input produce different prose due to LLM stochasticity. Textual diff would flag every A/B test as "regression" regardless of whether quality changed — the metric doesn't measure what it claims to measure. The verdict has to be a quality judgment, expressed via outcome_review's delta_type, with a human-written summary explaining the verdict's evidence.

**The asymmetry between snapshot and current is user-declared, not implicit.** The strongest counter was "either asymmetry is defensible; the protocol shouldn't impose a default." This isn't actually a counter — it's the resolution. There IS no inherent baseline. The protocol's `_ab.md` includes a `test_intent` field (regression-check / improvement-check / free-comparison) that the user declares explicitly. This shapes how the verdict's expected/observed fields are populated.

**The bf4ae1f snapshot is illustrative, not exclusive.** The user's original prompt motivated the question via the bf4ae1f snapshot they had just created. The strongest counter was "design only for bf4ae1f; broader pattern is over-engineering." The counter failed because the user explicitly wrote "/bf4ae1f-MVL+ (e.g., …)" — the "e.g." marker shows bf4ae1f was illustrative. Designing only for bf4ae1f would mean re-designing the protocol for the next snapshot. The protocol is parameterized over snapshot identifier so it works for any current commit.

### Why these candidates were killed

**No-protocol-just-naming-convention.** The contrarian framing (lens-shifting from "this is a new protocol file" to "this is a NAMING PATTERN documented inside branch_inquiry.md plus a slug-naming rule") was rejected because without a protocol file, the verification criteria from decomposition cannot be met. A naming convention can't enumerate failure modes, declare a verdict-record schema, document partial-failure handling, or specify the synthesize trigger — all of which the question explicitly asked for.

**No-verdict-just-paired-findings.** Dropping the synthesize phase entirely (so the protocol just produces two findings and stops; the user reads them manually and forms whatever conclusion they want) was rejected because it violates the structured-human-verdict commitment. Without a structured verdict, the comparability layer is incomplete — the user is back to vibes-based regression assessment, which is the original problem this protocol exists to solve. A "lite" mode without verdict is preserved as a deferred-addition note for v2 if user research shows demand, but is not blocking v1.

**Force-fit A/B into the existing meta-loop machinery.** Treating A/B as a 2-arm meta-loop (where the two pipeline runs are sequential probes recorded in `_meta_state.md`) was rejected because meta-loop is heavyweight (cross-run memory, navigation between moves, multi-hop traversal) and A/B is structurally simpler (paired runs + verdict). Force-fitting added complexity without value. The seed is preserved as a research frontier: if the project later builds a more general comparison-and-traversal layer, A/B might be subsumed.

### What survived critique

The assembled v1 design SURVIVED on all seven evaluation dimensions (correctness — solves the comparability problem; coherence with existing protocols — composes cleanly with branch_inquiry/conclude/outcome_review/alignment_control; completeness across the four sub-pieces — addresses storage, launch, comparison artifact, regression criterion; parsimony/elegance — minimum viable for v1; calibration-state-fit — matches the current snapshot rarity; adoption-friction — single-slash-command invocation; install-set robustness — handles the outcome_review install-set gap via cross-ref-plus-minimum-inline). The three prosecution wins from critique (synthesize-trigger command syntax gap; partial-failure handling gap; honest limitations section needed for user expectations) were addressed as specification refinements that can be settled at materialization time, not as architectural revisions requiring another sensemaking-innovation-critique cycle.

## Open Questions

### Monitoring

- After the protocol materializes and is invoked at least once, monitor whether the manual synthesize-trigger command is remembered and used reliably. If users repeatedly forget to synthesize, that is evidence supporting the deferred auto-synthesize integration with conclude.md.

- After ≥3 A/B tests have been performed, monitor whether the verdict-rendering experience is sufficient or whether users want richer evidence-presentation tooling (per-discipline diff, side-by-side rendering, structured rubric scoring).

### Refinement Triggers

- **Auto-synthesize revival:** ≥3 manual synthesizes performed → extend `homegrown/protocols/conclude.md` to detect branch-set completion and auto-invoke A/B synthesize.

- **Recorded-baseline revival:** ≥3 instances of running the same A/B input across different time periods → build recorded-baseline mode.

- **Pre-declared criteria revival:** ≥5 same-question A/B reruns where users wish the verdict were automated → build the pre-declared-criteria mode.

- **`ab_stability_test` revival:** 2+ A/B verdicts overturned because divergence was attributed to LLM stochasticity rather than version difference → build the stability-test sibling protocol.

- **`ANCHOR_ONLY` parent generalization revival:** a second homegrown protocol introduces a need for a metadata-only inquiry parent → consolidate the pattern.

### Research Frontiers

- **Autonomous A/B orchestration.** At autonomy Level 3+ (per the autonomy-ladder concept in `enes/desc.md`), the system selects when to run A/B without user prompting, dispatches both pipelines automatically (subagents or parallel CLI calls), and renders the verdict autonomously. Requires the autonomy ladder to reach Level 3+, plus reliable verdict-rendering tooling.

- **Criteria-learning across A/B history.** A protocol that accumulates "what counts as regression in this project" across many A/B runs, derived from past delta_summaries, and uses the learned criteria to render future verdicts. Requires substantial accumulated A/B history (probably ≥30 runs) plus a learning mechanism that can be validated externally.

- **First-class `ab-comparison` flow-type.** Instead of a coordination protocol that creates two normal inquiries, the comparison becomes a primary inquiry kind: `_state.md` gains `Flow-type: classic | extended | ab-comparison`; the extended-loop runner becomes mode-aware and dispatches the paired pipeline natively. Architecturally invasive — requires changes to MVL+, conclude.md, and `_state.md` schema. Worth considering when 3+ comparison-style protocols exist (the current one plus, e.g., `ab_stability_test` and a future cross-snapshot bisect).

- **Bisect-style snapshot chaining.** If A/B reveals a regression in current vs an old snapshot, chain another A/B against an intermediate snapshot to bisect when the regression entered. Requires N≥3 snapshots and a chain operation that pairs A/B tests.

- **Canonical-input fixture library.** Maintain `regression_fixtures/` with canonical questions known to exercise specific discipline behaviors. Run A/B against a library member rather than a fresh user-supplied question. Requires curating the library and a runner that orchestrates fixture-A/B.

- **Default-snapshot convention.** When snapshots accumulate beyond ~10, designate one (the most recent stable tag) as the default A/B target so users don't have to specify a snapshot identifier each time.

- **A/B as continuous-integration gate.** Spec changes themselves spawn A/B inquiries automatically; merging a spec change requires the A/B suite to pass. Far-future; requires routine snapshot creation, automated A/B dispatch, automated verdict rendering, and a CI-style gate mechanism integrated with whatever spec-edit workflow exists.

### Blocked

- None. All actionable items can proceed when the user chooses to materialize the protocol.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
i have another interesting idea

maybe we should have a logic/ protocol for creating Creating the A/B-test inquiry.
what do you think ?

and it can work like this

i can cretae a inquiry input, we would fork the convo, run it on current logic in original sessiono, and then in forked one we would run old one

and put them under one bigger folder in inquiries folder so they both are there. ready to compare results, What do you think?

this can be huge for self maintainance and regression testing of homegrown
```

</details>
