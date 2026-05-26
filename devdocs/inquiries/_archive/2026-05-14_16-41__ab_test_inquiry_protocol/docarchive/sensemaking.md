# Sensemaking: A/B-test inquiry protocol

## User Input

`devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/_branch.md` plus upstream `exploration.md` (24 candidates across 6 regions; user's proposal P1 is the entry signal; surround layer S1–S10 enumerates existing protocols this composes with; Region F enumerates confirmed-absent paradigms).

---

## SV1 — Baseline Understanding

The user wants a way to A/B test homegrown — same input, two pipeline versions (current + snapshot), comparable outputs in a shared folder. They suspect regression and want a structured way to confirm or refute it. The snapshot infrastructure already exists (per `enes/stability_preservation_via_git.md`); what's missing is the inquiry-level scaffolding that ties two paired runs to a shared comparison artifact. The inquiry asks: should this protocol exist, what shape, what failure modes, what relationships to existing protocols.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1.** Must compose with existing homegrown machinery (branch_inquiry, conclude, outcome_review, loop_diagnose); not stand apart.
- **C2.** Must preserve the workspace invariant — the parent inquiry shouldn't run a discipline pipeline; only the children do.
- **C3.** Must produce a durable comparison artifact — readable in future sessions, surveyable across multiple A/B tests, not vibes-only.
- **C4.** The launch mechanism must be operationally feasible within Claude Code's session model (one conversation = one agent context; a "second session" means a separate Claude Code window/process).
- **C5.** Snapshot infrastructure already exists; the protocol consumes it but doesn't extend it.
- **C6.** N=1 per side; no statistical sampling. Verdict is judgment-based, not significance-tested.
- **C7.** Schema fidelity: both versions must produce comparable artifacts (same canonical filenames per the MVL+ pipeline contract, similar finding.md template). Schema drift between versions is a failure mode the protocol must handle.

### Key Insights

- **KI1.** The snapshot infrastructure made past disciplines INVOCABLE. The A/B protocol asks: what makes their outputs COMPARABLE? Comparability is the missing capability.
- **KI2.** outcome_review's record schema (delta_type ∈ {confirmation, mismatch, regression, drift, uncertainty} + evidence + confidence + route) is structurally exactly what an A/B verdict needs. The comparison-artifact-format question may already have an answer in the existing system.
- **KI3.** branch_inquiry's `branch_mode: set-member` with shared `branch_set_id` was designed for "coordinated sibling branches" — A/B is the canonical case. But branch_inquiry's runner-validation only accepts `MVL` and `MVL+`, not `<sha>-MVL+`. There's a small gap between intent and implementation.
- **KI4.** "Fork the conversation" is a mechanism, not a requirement. The requirement is "two paired runs of the same input that produce comparable artifacts." Sequential same-session, parallel sessions, automated outer runner all satisfy the requirement; they differ on operator overhead and parallelism.
- **KI5.** Two full MVL+ runs is significant compute. Without a value-proportional trigger discipline (when is A/B worth running?), the protocol may be designed but never used.
- **KI6.** The protocol has FOUR sub-pieces with different cost/benefit profiles: (a) parent + child folder shape, (b) launch mechanism, (c) comparison artifact, (d) regression-criterion definition. They can be designed independently.

### Structural Points

- **SP1.** Inquiry-level coordination, not discipline-level. The protocol coordinates two FULL inquiries; doesn't replace anything inside MVL+.
- **SP2.** Three actors interact: the user (defines input, triggers, reads verdict), the two pipelines (run independently to completion), the comparison artifact (synthesizes verdict).
- **SP3.** Existing relationships in `_state.md`: BRANCH_OF, ROOT_INQUIRY, BRANCH_SET, RELATED, CONTINUES FROM, SUPERSEDED BY. A/B pairs need either RELATED or BRANCH_SET semantics.
- **SP4.** Two phases in protocol lifecycle: SETUP (create parent + children + dispatch instructions) and SYNTHESIZE (write outcome_review record after both children CONCLUDE).

### Foundational Principles

- **FP1.** Snapshot fidelity > polish (from `stability_preservation_via_git.md`). Snapshots represent past state faithfully; not edited to "fix" things.
- **FP2.** Discipline workspace invariant (from MVL+/SKILL.md). No cross-pollination between discipline workspaces.
- **FP3.** Path discipline (from branch_inquiry.md). Paths are constructed at creation, treated as opaque thereafter; never rebuilt from id.
- **FP4.** Failures are data (from MVL.md). The WHERE and WHY of a divergence is valuable; A/B should preserve and surface it, not normalize it away.
- **FP5.** Telemetry-as-routing (from RESUME.md). Disciplines self-assess; protocols route. Comparison verdict follows the same pattern — the protocol surfaces structured evidence; the human routes the decision.

### Meaning-Nodes

- **MN1.** "A/B test" — core operation, but its meaning depends on context (RCT? compiler differential testing? snapshot regression?).
- **MN2.** "Regression" — quality goes down. But "quality" is itself a judgment, not a measurement.
- **MN3.** "Comparison" — could mean structural diff, semantic diff, judgment, or scored evaluation.
- **MN4.** "Fork" — could mean conversation fork (parallel Claude sessions), control-flow fork (branch_inquiry-style), or process fork (CLI subprocess).
- **MN5.** "Snapshot" — git-archived discipline state from a specific commit. Single referent in this project.

---

### SV2 — Anchor-Informed Understanding

The substantive question is not "should we have an A/B protocol?" alone — that's nearly trivially yes given the user's stated need. The substantive question is: **what minimum machinery makes paired runs COMPARABLE, given that the snapshot infrastructure already makes them INVOCABLE?** The answer hinges on four sub-decisions (storage shape, launch mechanism, comparison artifact, regression criterion), each with 3–5 candidates from exploration. The protocol's value is gated by usage frequency and trigger clarity (KI5) — designed-but-unused is a real risk. Composition with existing machinery is the most tractable axis (KI2 + KI3): outcome_review already provides the verdict schema; branch_inquiry's set-member is the right structural pattern with a small gap.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- **New anchor:** Two parallel sessions is feasible but operationally awkward (two terminals, no automatic coordination). Sequential same-session is simpler but loses parallelism. The cleanest v1 stance is **scaffold-and-instruct**: protocol creates the folder skeleton, prints what to run, doesn't try to control HOW the user dispatches.
- **New anchor:** The two children must be FULLY ISOLATED at runtime. If `<sha>-MVL+` somehow loads current homegrown's protocols, the test is contaminated. The snapshot install script's two-layer sed handles this; the protocol DEPENDS on but doesn't VERIFY isolation.

### Human / User

- **New anchor:** The user's stated motivation is RETROACTIVE diagnosis ("I think recent edits made things worse — let me confirm"), not proactive testing. The protocol's most important UX is: "given a current concern, run the comparison and tell me what diverged."
- **New anchor:** The user types a prompt; the protocol must do as much heavy lifting as possible. Asking the user to manually create a parent folder, copy-paste two slash commands, etc., is friction. Protocol invocation should produce everything ready to dispatch in one shot.
- **New anchor:** The COMPARISON READING is the user's payoff moment. Manual side-by-side (C1) loses to a structured artifact (C3) on this axis — the user wants the verdict surfaced, not paths to two long files.

### Strategic / Long-term

- **New anchor:** This protocol is part of the project's SELF-MAINTENANCE LOOP. The end-goal architecture (per `enes/desc.md`) is autonomous self-improvement. A/B testing is the QUALITY-AWARENESS component — it lets the system (eventually) measure whether iteration N is better than N-1 without human judgment. v1 has the human in the loop; later autonomy levels could automate verdict-rendering. The v1 design should leave a hook for this — structured evidence, not just prose.
- **New anchor:** The project will accumulate snapshots. If A/B is hard to run, snapshots are wasted infrastructure. The protocol's frequency of use is a dependent variable on its ergonomics.

### Risk / Failure

- **New anchor:** Two full MVL+ runs is significant compute. Without a trigger discipline ("only A/B when there's a real regression suspicion"), the protocol over-runs.
- **New anchor:** SCHEMA DRIFT between versions. If the snapshot's finding.md template differs from current's (e.g., snapshot lacks the "Next Actions" section added later), the comparison artifact must handle missing fields gracefully. Brittle alignment-required comparisons fail.
- **New anchor:** CONFIRMATION BIAS. The user pre-suspects regression. They'll read the comparison expecting a specific verdict. The artifact format should structure verdict against EVIDENCE, not vibes — outcome_review's structured fields enforce this.
- **New anchor:** SNAPSHOT-ROT. If snapshots aren't maintained as project conventions evolve, A/B against an old snapshot tests the wrong thing. The protocol must record WHICH snapshot was used and WHEN it was created.
- **New anchor:** SAMPLE-SIZE-OF-1. One A/B test with one input is anecdotal. v1 supports the anecdotal case; future could batch (regression suite over fixed input bank).

### Resource / Feasibility

- **New anchor:** Protocol can be implemented as a markdown file in `homegrown/protocols/ab_test_inquiry.md` — same form as branch_inquiry.md, conclude.md. No code needed for v1. Materialization cost: low.
- **New anchor:** The PER-RUN cost (two MVL+ runs) isn't affected by the protocol — that's the snapshot infrastructure's cost. The protocol's cost is just SETUP friction (creating parent folder, etc.).
- **New anchor:** Reusing outcome_review removes implementation cost — we don't invent a comparison-format schema; we adopt an existing one already integrated with `alignment_control.md`.

### Definitional / Internal Consistency

- **New anchor:** branch_inquiry's runner validation accepts only `{MVL, MVL+}`. A `<sha>-MVL+` runner won't pass. Either (a) extend branch_inquiry to accept any `*-MVL+` form, or (b) the A/B protocol bypasses branch_inquiry's runner validation and writes children directly while still declaring BRANCH_SET semantics in `_state.md`. (b) is less coupled.
- **New anchor:** workspace invariant says "no cross-discipline drafts." The parent inquiry doesn't run a pipeline — it just holds metadata + relationships. Workspace invariant is preserved.
- **New anchor:** conclude.md prints relationship pointers (BRANCH_OF, BRANCH_SET, RELATED). If A/B uses BRANCH_SET, conclude already prints the right thing on each child completing. The protocol can hook into existing conclude behavior.

### Phase / Calibration-State (REQUIRED — protocol depends on calibration state)

- **New anchor:** Currently snapshots are RARE (only `bf4ae1f` exists). A/B is therefore a RARE OPERATION. The protocol's complexity should be proportional to current usage. v1 must be MINIMAL — folder + dispatch + outcome_review reuse. Don't build N-way comparison, automated triggers, batched fixtures yet — those are forward-tied to N≥3 snapshots and routine A/B usage.
- **New anchor:** The "rule" for when to run A/B has different defaults at different project phases. Current phase: "when user explicitly suspects regression" (manual trigger). Future phase: "before merging spec changes that could regress" (CI-like trigger). Protocol design must support current phase and not block future phase.

### Definitional / Frame-exit Completeness

Gating predicate check: does the inquiry's committed structures include inherited multi-value terms used at distinct values across rows/levels?

- "Snapshot" appears multiple times but always means git-archived discipline state — single referent.
- "Comparison" appears in regions C/D/E but as different aspects of the same operation (where the artifact lives, what is compared, how it composes), not as multiple values of one term.
- "Inquiry" appears as parent + child + (in candidate C4) comparison-as-third — same referent (MVL+ inquiry folder), different roles in the A/B structure.
- No multi-value inheritance triggering the gating predicate. Frame-exit perspective skips its four meta-categories. (Verified due-diligence: no "snapshot" or "comparison" referent outside the inquiry's frame is being silently excluded.)

---

### SV3 — Multi-Perspective Understanding

Across perspectives, the substantive design problem decomposes into four sub-pieces with strongly differing cost/benefit profiles:

1. **Storage shape (Region A).** A1 (parent + child subfolders) is operationally clean and reuses MVL+'s RESUME via folder paths. Strong default. LOW COST, HIGH CLARITY.
2. **Launch mechanism (Region B).** B4 (manual launch with explicit dispatch instructions) is the right v1 — protocol prints what to run; user decides whether to run sequentially in one session or fork to a second. LOW COMPLEXITY, AGNOSTIC TO HOW.
3. **Comparison artifact (Region C).** C3 (outcome_review reuse) wins decisively — leverages existing schema and contract, integrates with alignment_control's L0–L6 vocabulary, gives both structure AND prose flexibility.
4. **Composition (Region E).** E2 (layered on branch_inquiry) is structurally correct — A/B is exactly a coordinated branch set per branch_inquiry's set-member mechanism. The runner-validation gap (KI3) needs resolution; the cleaner option is the A/B protocol writes children directly while still declaring branch_set semantics, avoiding modification to branch_inquiry.

The remaining frontier questions from exploration (regression criterion, snapshot-vs-current asymmetry, schema drift) are now sub-problems within these four pieces, not orthogonal axes.

The PERSPECTIVE/CALIBRATION-STATE perspective forces a strong v1 minimum: build the four-piece scaffold, defer everything else.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: What does "comparison" mean as the artifact?

Three candidates from exploration: manual side-by-side (C1), free-form prose `comparison.md` (C2), structured outcome_review record (C3).

**Strongest counter-interpretation:** Free-form prose (C2) is more flexible than a structured record. The comparison might surface unexpected dimensions that don't fit outcome_review's schema (delta type, evidence, route).

**Why the counter fails (structural grounds):** outcome_review's schema is designed for after-use alignment review with delta types `confirmation/mismatch/regression/drift/uncertainty` — these are EXACTLY the categories an A/B verdict needs. The schema also has free-form fields (`delta.summary`, evidence prose) for unexpected dimensions, so flexibility isn't lost. Free-form prose without structure fails FP4 (failures are data — without structure, future reads can't aggregate across A/B tests). And outcome_review integrates with `alignment_control.md`'s L0–L6 vocabulary, the project's shared alignment substrate. Reusing outcome_review provides BOTH structure AND prose flexibility AND substrate integration; pure prose provides only flexibility.

**Confidence:** HIGH

**Resolution:** "Comparison" in the A/B protocol = an outcome_review record at the parent root, with `delta_type` capturing the verdict and evidence pointing to both child finding.md files.

**What is now fixed:** Verdict-format question is closed; outcome_review is the answer. The A/B protocol does NOT invent its own comparison schema.

**What is no longer allowed:** Free-form-only comparison.md without outcome_review structure (C2 alone is rejected). C7 (telemetry-only) is rejected as primary verdict (may appear as evidence within outcome_review).

**What now depends on this choice:** The A/B protocol's "synthesize phase" produces an outcome_review record. conclude.md may need to gain awareness of A/B-completion → outcome_review (or A/B protocol invokes outcome_review explicitly).

**What changed in the conceptual model:** The protocol is a THIN COORDINATION LAYER between snapshot infrastructure (existing), branch_inquiry-style folder structure (existing pattern), and outcome_review (existing schema). It doesn't introduce new artifacts; it composes existing ones.

### Ambiguity 2: What does "regression" mean?

Three readings: (a) textual diff (any non-trivial difference), (b) quality regression (subjective judgment that one is worse), (c) behavioral regression (different verdict from disciplines).

**Strongest counter-interpretation:** Textual diff is the most concrete and machine-checkable. Use `diff(1)` on the two finding.md files; any non-trivial diff = regression flag.

**Why the counter fails (structural grounds):** Discipline outputs are LLM-generated prose. Two runs of the SAME version on the SAME input produce different prose due to LLM stochasticity. Textual diff would flag every A/B test as "regression" regardless of whether quality changed. The metric doesn't measure what it claims to measure — paradigm projection failure (FM#8 in `comprehend.md`). Textual identity is not the goal; quality is.

**Confidence:** HIGH

**Resolution:** "Regression" in the A/B protocol = a quality judgment, expressed via outcome_review's delta_type. Judgment-based; LOW confidence per outcome_review's confidence scale by default; HIGH only when convergent evidence is presented. Not textual-diff.

**What is now fixed:** Verdict is human judgment in v1. Future autonomy levels may add automated graders, but v1 doesn't depend on them.

**What is no longer allowed:** Auto-generated regression flags from textual diff. Verdict must be human-rendered with explicit reasoning.

**What now depends on this choice:** The comparison artifact (outcome_review record) requires a human-written `delta.summary` explaining WHY the verdict is what it is, with evidence excerpts from both finding.md files.

**What changed in the conceptual model:** A/B test = structured human judgment, not automated checking. The protocol's output is INPUT TO HUMAN DECISION, not a pass/fail gate.

### Ambiguity 3: What does "fork the conversation" mean?

Three readings from exploration: parallel sessions (B1), sequential same-session (B2), automated outer runner (B3).

**Strongest counter-interpretation:** The user explicitly said "fork the convo" — they want parallel sessions. Anything else fails the user's stated mechanism.

**Why the counter fails (structural grounds):** "Fork" is mechanism, not requirement (KI4). The requirement is "two runs of the same input that produce comparable artifacts." Whether they run in parallel sessions, sequentially in one session, or via an outer runner is a USER CHOICE about ergonomics. Locking in B1 fails any user who prefers sequential or any context where parallel sessions are unavailable. B4 (manual launch with explicit dispatch instructions) generalizes over B1/B2/B3 — protocol prints what commands to run; user decides how.

**Confidence:** HIGH

**Resolution:** Launch mechanism is USER-CHOSEN, not protocol-mandated. Protocol provides B4 (dispatch instructions) and supports all three execution modes via the same scaffolding.

**What is now fixed:** The protocol creates parent + two child folder STUBS (each with `_branch.md` and `_state.md` populated) and prints dispatch instructions. It does NOT launch the child pipelines itself.

**What is no longer allowed:** B3 (automated outer runner) as primary mechanism in v1. The protocol prepares but doesn't dispatch.

**What now depends on this choice:** MVL+'s RESUME mode is the integration point — user runs `/MVL+ <child_a_path>` in one session and `/<sha>-MVL+ <child_b_path>` in another (or same session). The dispatch instructions printed by the protocol must include these exact commands.

**What changed in the conceptual model:** The protocol is a SCAFFOLDING + INSTRUCTIONS protocol, not a CONTROL-FLOW protocol. Like branch_inquiry: creates folders + metadata, hands off to the runner.

### Ambiguity 4: Snapshot-vs-current asymmetry — which is "baseline" and which is "candidate"?

Two readings: (a) snapshot = baseline truth being defended; current = candidate under test (any divergence is current's regression). (b) snapshot = candidate under test; current = baseline (defending recent improvements).

**Strongest counter-interpretation:** Either asymmetry is defensible depending on context. The protocol shouldn't impose a default; let the user state it.

**Why this isn't a counter — it's a correct rejection of default asymmetry:** There IS no inherent baseline. The protocol should leave asymmetry as a USER-DECLARED FIELD on the parent metadata (`_ab.md`). This is the resolution itself, not a counter.

**Confidence:** HIGH (no asymmetry imposed; user declares)

**Resolution:** Parent `_ab.md` includes a `test_intent` field with three values: `regression-check` (current under suspicion, snapshot is baseline), `improvement-check` (snapshot is baseline, current should be better), `free-comparison` (no asymmetry; just compare). This shapes how outcome_review's `expected` and `observed` fields are populated.

**What is now fixed:** Asymmetry is explicit, not implicit.

**What is no longer allowed:** Implicit assumption that snapshot is "old/worse" or "old/better."

**What now depends on this choice:** outcome_review's `expected` and `observed` semantics depend on `test_intent`; downstream readers can compute "regression" relative to the declared baseline.

**What changed in the conceptual model:** "A/B test" is a family of three closely-related operations distinguished by `test_intent`, not a single operation.

### Ambiguity 5 — load-bearing concept test: "A/B test" itself

This is a load-bearing concept inherited from external default (RCT methodology / product analytics).

**Counter-interpretation:** Does this term match the project's actual operation? The project's operation is paired snapshot regression testing — closer to compiler differential testing or LLM eval suites than to RCT-style A/B testing.

**Why the counter fails (structural grounds):** The user introduced "A/B test" themselves; their language is what the protocol's public name should reflect (per H9 user-language alignment). However, the SHAPE of the operation differs from RCT-A/B in load-bearing ways: N=1 per side (no sampling), no blinding, no significance test, judgment-based verdict. The four confirmed-absent paradigms in exploration's Region F document this. Resolution: keep the user's term in the public name; document the structural differences in the spec's identity section so the reader doesn't import RCT methodology.

**Confidence:** HIGH (preserve user's term, document the structural distinction)

**Resolution:** Public name = "A/B-test inquiry protocol." Spec identity section explicitly notes: this is paired-snapshot regression testing, not RCT-style A/B testing. The 4 confirmed-absent paradigms are part of the identity section's explicit NOT-list.

**What is now fixed:** Protocol name uses user's vocabulary. Internal documentation distinguishes from RCT.

**What is no longer allowed:** Importing RCT methodology (sampling, p-values, blinding) into the protocol.

### Ambiguity 6 — specific-vs-pattern recognition cue: bf4ae1f instance vs. broader pattern

The user's prompt motivated the question via the bf4ae1f snapshot. Is the protocol JUST for bf4ae1f-style A/B, or for any current vs any snapshot?

**Counter-interpretation:** Maybe the user only cares about the bf4ae1f case right now; designing for a broader pattern is over-engineering.

**Why the counter fails (structural grounds):** The user wrote "/bf4ae1f-MVL+ (e.g., …)" — the "e.g." marker shows bf4ae1f is illustrative, not exclusive. Designing only for bf4ae1f means re-creating the protocol for the next snapshot. The pattern is general by user intent; the protocol must be parameterized over snapshot identifier.

**Confidence:** HIGH

**Resolution:** Protocol is parameterized over snapshot prefix. v1 takes the snapshot prefix as a user-supplied argument; future could auto-discover from `archived_skills/`.

**What is now fixed:** Protocol is general-pattern, parameterized over snapshot identifier.

---

### SV4 — Clarified Understanding

The protocol's substantive shape is now fixed:

- **What it is:** A thin coordination protocol that creates a parent inquiry folder + two child inquiry stubs, populates each child's `_branch.md` (identical input) and `_state.md` (different runners + shared `branch_set_id`), prints user-facing dispatch instructions, and on both children's completion produces an outcome_review record at the parent root capturing the comparison verdict.
- **What it isn't:** A new comparison-artifact format; a new runner; a control-flow mechanism that launches pipelines; an automated regression-detection system; an RCT-style sampling framework.
- **Composition:** Layered on the branch_inquiry pattern (folder + relationship machinery; writes children directly to bypass runner-validation gap); reuses outcome_review's record schema for the verdict; integrates with conclude.md's relationship-pointer printing.
- **Verdict is human judgment** in v1; structured via outcome_review's delta types; evidence is excerpts from both finding.md files plus optional per-discipline output paths.
- **Test intent is user-declared** in parent `_ab.md` (regression-check / improvement-check / free-comparison); shapes the verdict semantics but not the structure.
- **Sample size = 1 per side** (paradigm = paired snapshot regression testing, not RCT).

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now FIXED

- Storage shape: parent folder + two child subfolders (A1).
- Comparison artifact format: outcome_review record (C3).
- Verdict source: human judgment with structured fields.
- Launch mechanism: protocol prepares scaffolding + dispatch instructions; user dispatches (B4).
- Test intent: user-declared in parent `_ab.md`.
- Composition: layered on branch_inquiry pattern; reuses outcome_review schema; hooks into conclude.md.
- Sample size: N=1 per side; no sampling methodology.
- Snapshot identifier: parameterized; protocol is general.

### Variables ELIMINATED

- Standalone free-form `comparison.md` (C2 alone): rejected (less structured than outcome_review).
- Telemetry-only verdict (C7) as PRIMARY: rejected (loses semantic content).
- Automated outer runner (B3) for v1: deferred — manual dispatch is sufficient now.
- N-way comparison (E5): deferred to future when N≥3 snapshots exist.
- Bootstrap baseline lock (E6) and predictive A/B (E7): deferred — distinct future patterns.
- Auto-textual-diff regression detection: rejected (paradigm projection failure).
- Per-discipline diff files (C5) as default v1 output: deferred — interesting but not v1.
- Single-discipline isolation (D3) as default mode: deferred — distinct future variant.
- Branch_inquiry runner-validation extension to accept `<sha>-MVL+`: deferred — protocol writes children directly for v1.

### Paths still VIABLE / OPEN (for decompose to address)

- Protocol filename and location: most likely `homegrown/protocols/ab_test_inquiry.md`. Confirmed.
- Parent folder naming convention: `devdocs/inquiries/<ts>__ab_<slug>/` — needs decompose to confirm exact pattern (and how it interacts with branch_inquiry's path policy).
- Child folder layout/naming: `current/` + `snapshot-<sha>/`? Two timestamped subfolders? — needs decompose.
- Exact schema of `_ab.md` (parent metadata file): needs decompose.
- Dispatch-instruction format printed by protocol: implementation detail.
- A/B-completion detection (when does the synthesize phase fire?): integration with conclude.md.
- Trigger discipline: when does the user invoke A/B (heuristic guidance, not protocol mandate).

---

### SV5 — Constrained Understanding

The remaining design space is small: it's about implementation details of an already-committed shape. Decompose can partition the implementation details into independent pieces:

- **P1.** Parent folder + `_ab.md` schema design (test_intent, snapshot_identifier, shared input, who/when, dispatch_status)
- **P2.** Child folder layout, naming, and `_state.md` BRANCH_SET semantics (relationship to branch_inquiry's existing branch_set machinery)
- **P3.** Dispatch-instruction format and conventions (what the protocol prints to the user)
- **P4.** Comparison-artifact (outcome_review record) integration — when invoked, by whom, what fields populated, where stored
- **P5.** Conclude.md integration — A/B-completion detection; relationship-pointer printing for BRANCH_SET completion; whether conclude triggers outcome_review automatically
- **P6.** Trigger discipline — when to use A/B (heuristic documentation, not enforcement)

Each piece is independently designable; their interfaces are clear (P1's `_ab.md` schema is consumed by P3's dispatch instructions and P4's outcome_review evidence; P2's branch_set semantics are consumed by P5's conclude integration).

---

## Phase 5 — Conceptual Stabilization

### Synthesis (the stable model)

The A/B-test inquiry protocol is **a thin coordination protocol that converts a single problem input into two paired inquiries (one per discipline version), records their relationship via the existing branch_inquiry / branch_set vocabulary, and on completion produces an outcome_review record at the parent root capturing a human-rendered comparison verdict.** It composes existing homegrown machinery rather than introducing new primitives.

### Five structural commitments

1. **Composition over invention.** The protocol's leverage is reusing branch_inquiry (folder structure + lineage + branch_set), outcome_review (verdict schema), conclude.md (relationship printing). Net new content: parent inquiry shell + dispatch instructions + the wiring.
2. **Scaffold-and-instruct, not orchestrate.** Protocol creates folders and tells the user what to run. Doesn't dispatch pipelines itself. v1 is mechanism-agnostic about how the user runs the two pipelines.
3. **Verdict is structured human judgment.** outcome_review's record schema enforces structure (delta_type, evidence, confidence, route); the human supplies the judgment. No automated regression detection in v1.
4. **Test intent is explicit, not implicit.** Parent `_ab.md` declares `test_intent` ∈ `{regression-check, improvement-check, free-comparison}`. Shapes outcome_review's expected/observed fields.
5. **N=1 per side; not RCT-style A/B.** Paradigm is paired snapshot regression testing. No sampling, no blinding, no significance test. The protocol's identity section documents the four confirmed-absent RCT paradigms.

### Verdict on the question

**YES, homegrown should have this protocol.** Worth-having is high (it's the missing comparability layer for the snapshot infrastructure that already exists). Cost is low (markdown spec, no new primitives). Composition is clean (reuses three existing protocols cleanly). Failure modes are tractable and addressable in the v1 design. Calibration-state caveat: build v1 minimal; defer N-way / automated-runner / bootstrap-baseline variants until snapshots become routine (current state: only one snapshot exists).

### Accommodation trigger check

Did any perspective produce destabilizing anchors that forced repeated revision? No. Each perspective added new anchors that integrated cleanly with the model. The model settled at SV4 and the remaining work in Phase 4 was constraint-narrowing, not structural revision. No accommodation triggered.

---

### SV6 — Stabilized Model

The protocol is a **paired-snapshot regression-testing scaffold**, structurally similar to compiler differential testing and LLM eval suites — not RCT-style A/B testing. Its value is making paired runs COMPARABLE, given that the snapshot infrastructure already makes them INVOCABLE. It does this by reusing branch_inquiry's coordinated-set machinery for folder structure, outcome_review's record schema for the verdict, and conclude.md's relationship-pointer printing for run completion. The protocol scaffolds (creates folders + prints dispatch instructions) and the user dispatches (in any session topology). The verdict is structured human judgment, not automated diff. Test intent is explicitly declared. v1 is minimal and composable; advanced patterns (N-way, automated, bootstrap) are deferred to specific revival triggers.

**Difference from SV1:** SV1 framed the question as open enumeration ("should we have it / what shape?"). SV6 frames it as a specific four-piece architectural commitment ("yes; thin composition layer over existing machinery; scaffold-and-instruct architecture; structured human verdict via outcome_review reuse; explicitly N=1 paired-snapshot paradigm, not RCT") — ready for decompose to partition implementation pieces and for innovate/critique to stress-test specific commitments.

---

## Saturation Indicators (Telemetry)

| Indicator | Reading |
|---|---|
| Perspective saturation | The Phase/Calibration-State perspective produced anchors that no other perspective surfaced (calibration-proportional minimum, current rare-snapshot phase). The Risk perspective produced 5 distinct failure-mode anchors. The Definitional/Internal-Consistency perspective surfaced the branch_inquiry runner-validation gap that no other perspective surfaced. Saturation NOT reached — each perspective contributed new anchor types. After SV4 the additional perspectives mostly confirmed; near-saturation by SV5. |
| Ambiguity resolution ratio | 6 ambiguities identified, 6 resolved with HIGH confidence. 100% resolution; none deferred as OPEN. |
| SV delta | SV1 ("should we have it?") → SV6 ("yes, thin composition layer with five structural commitments and explicit confirmed-absent paradigms"). Significant structural shift; SV6 is much more constrained and decisional than SV1. Healthy delta. |
| Anchor diversity | All 5 anchor types populated (constraints C1–C7, key insights KI1–KI6, structural points SP1–SP4, foundational principles FP1–FP5, meaning-nodes MN1–MN5). All 7 perspectives contributed (Technical, Human, Strategic, Risk, Resource, Definitional/Internal-Consistency, Phase/Calibration-State). Frame-exit Completeness gating did NOT fire (verified due-diligence). Diverse. |

### Failure-mode self-check

| Failure mode | Observed? | Notes |
|---|---|---|
| Status Quo Bias | No | Pushed back on user's "fork the convo" framing in Ambiguity 3; didn't defend any pre-existing structure uncritically. |
| Premature Stabilization (early-clarity-arrival) | Tested | The model felt clean at SV4 — applied perspective check beyond, ran load-bearing concept test (Ambiguity 5), specific-vs-pattern test (Ambiguity 6). Multiple perspectives produced new anchors (Risk surfaced failure modes; Definitional surfaced runner-validation gap; Calibration-State surfaced minimum-v1 constraint). Not premature. |
| Premature Stabilization (model-misfit) | Not observed | Model didn't keep requiring revision; SV4 → SV5 → SV6 was constraint-narrowing, not patching. Accommodation trigger not fired. |
| Anchor Dominance | Not observed | No single anchor does all the work. Composition (KI1+KI2) and Calibration (Phase/Calibration anchors) and Workspace Invariant (FP2) are independently load-bearing. |
| Perspective Blindness | No | Asked "which perspective would be uncomfortable" — Phase/Calibration-State was the most uncomfortable (forced minimum-v1 commitment) and was applied. |
| Clean Resolution Trap | No | Each ambiguity tested its strongest counter on structural grounds. Ambiguity 2 (regression = textual diff) was a particularly clean-feeling option that was killed by the LLM-stochasticity counter. |
| Self-Reference Blindness | Risk acknowledged | The inquiry uses sensemaking to evaluate a homegrown protocol. Mitigation: external grounding via outcome_review's existing schema, alignment_control's existing vocabulary, compiler-differential-testing analog (from exploration's jump-scan). Verdict was tested against external references, not just internal coherence. |

**Overall: PROCEED** — sufficient anchor diversity + perspective saturation + ambiguity resolution; no failure modes triggered; SV1 → SV6 shows healthy structural delta.
