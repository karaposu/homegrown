# Sensemaking: Protocol Priority Top 5

## User Input

`devdocs/inquiries/2026-04-28_07-35__protocol_priority_top_5/_branch.md`

## SV1 - Baseline Understanding

The question asks for a ranked list of the five protocols that would be most useful next. The first impression is that this should rank missing protocol modules, not existing disciplines. The likely winners are protocols around loop diagnosis, self-maintenance, artifact validation, Navigation/meta-loop selection, and outcome tracking.

The main ambiguity is what "useful" means: immediately buildable, strategically important, autonomy-enabling, or conceptually elegant.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- MVL/MVL+ should remain the atomic cognitive operation.
- `CONCLUDE` already exists and is operational, so it should not consume a top-five "next protocol" slot.
- Standalone `RESUME` is not ready for runtime wiring because verdict telemetry is not standardized.
- The project currently lacks `tools/structural_check.sh`, despite MVL/MVL+ referencing it.
- The current highest-priority direction is rapid fundamentals improvement, not adding new cognitive primitives.
- Git branches are useful for executable variants but do not replace semantic evidence in findings.
- Navigation is a boundary discipline; it should not be appended as a sixth core MVL+ stage.
- Meta-loop v1 exists but is sequential and human-selected, not autonomous multi-head.

### Key Insights

- The most useful protocols now are not the ones with the most exciting autonomy story. They are the ones that create evidence and protect future changes from becoming arbitrary.
- `loop-diagnose` is the obvious first candidate because it turns the user's current correction behavior into a repeatable maintenance input.
- A branch-experiment protocol is needed because the user wants git-backed evolution of fundamentals, but branch superiority must be evidence-bound.
- Structural/telemetry enforcement is a prerequisite for Resume, quality awareness, and trustworthy MVL+ artifacts.
- Retrospective outcome review is the missing closure step. Without it, the system proposes patches but does not learn whether they actually worked.
- Navigation/selection protocols are useful, but they should probably follow the first evidence-generation layer.

### Structural Points

The candidate protocols cluster into five functions:

1. **Diagnose:** identify what went wrong in a correction chain.
2. **Change:** turn diagnosis into a controlled candidate fundamentals change.
3. **Enforce:** ensure outputs and specs meet structural and telemetry contracts.
4. **Close:** later decide whether a change should be retained, reverted, or refined.
5. **Traverse:** use Navigation/meta-loop to move across inquiry space and record decisions.

### Foundational Principles

- Build protocols that reduce uncertainty before protocols that multiply action.
- A protocol earns priority if it unlocks several future capabilities.
- Current Homegrown should prefer human-guided, evidence-producing workflows over premature autonomous routing.
- Runtime hooks should not be added before the evidence they route on exists.
- The first useful self-maintenance loop should be small enough to evaluate.

### Meaning-Nodes

- Evidence conversion.
- Fundamentals improvement.
- Quality awareness.
- Git-backed evolution.
- Artifact enforcement.
- Retrospective closure.
- Navigation selection.
- Meaningful traversal.

## SV2 - Anchor-Informed Understanding

The ranking should not answer "which protocol sounds most advanced?" It should answer "which protocol gives Homegrown the highest next unit of learning or control with the least premature autonomy?"

That makes the center of the ranking correction-chain learning and quality enforcement, not meta-loop autonomy. Meta-loop protocols matter, but they need evidence streams and selection traces before they can mature safely.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

The current runnable system has MVL/MVL+, CONCLUDE, Navigation, Reflection, and meta-loop v1. The missing pieces are interfaces between them: diagnostic input contracts, branch experiment contracts, telemetry contracts, outcome review contracts, and selection records.

New anchor: the most useful protocols are interface protocols, not new cognitive disciplines.

### Human / User Perspective

The user's current workflow repeatedly generates rich correction data: "this finding was wrong; here is what was missing; run again." A top protocol should capture this natural behavior instead of forcing a heavy artificial process.

New anchor: `loop-diagnose` should be first because it formalizes an already-active human/system pattern.

### Strategic / Long-Term Perspective

The long-term goal is autonomous self-improvement and eventually reduced human dependence. That requires quality awareness: detecting regression, detecting improvement, and calibrating predictions against outcomes.

New anchor: protocols that build quality-awareness substrate outrank protocols that only produce more movement.

### Risk / Failure Perspective

The biggest risks are overbuilding, self-reference blindness, active-looking orphan protocols, and branch evolution without selection evidence.

New anchor: the ranking should penalize protocols that increase movement without better evaluation.

### Resource / Feasibility Perspective

The first protocols should be Markdown-native and low-code. `loop-diagnose`, branch experiment templates, structural/telemetry checks, and retrospective review can start as protocol docs and inquiry formats. Full meta-loop/multi-head logic is more expensive.

New anchor: top priorities should be buildable in small steps.

### Definitional / Consistency Perspective

A "protocol" here should mean an operational procedure that routes, gates, records, or structures work. It should not mean a new thinking discipline. This preserves the atomic MVL/MVL+ model.

New anchor: do not rank `loop-diagnose` as a discipline; rank it as a diagnostic protocol/template for MVL+.

## SV3 - Multi-Perspective Understanding

The stabilized ranking logic is:

```text
Most useful now = protocols that create evidence and make future self-improvement testable.
Most useful later = protocols that use that evidence for traversal, selection, and autonomy.
```

This means the top five should be:

1. `loop_diagnose`
2. `maintenance_branch_experiment`
3. `structural_integrity_and_telemetry_contract`
4. `retrospective_outcome_review`
5. `navigation_selection_record`

Meaningful traversal is strategically important but should probably be next after those five, unless the user wants to focus on meta-loop immediately.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Should the ranking include existing CONCLUDE?

**Strongest counter-interpretation:**
CONCLUDE is probably the most useful protocol because it is actually used by every completed loop.

**Why the counter-interpretation fails (structural grounds):**
The user asks what other protocol feels most useful based on current goals and state. CONCLUDE is already operational. Ranking it would not answer what to build or clarify next.

**Confidence:** HIGH.

**Resolution:**
Do not count CONCLUDE in the top-five next-protocol ranking. Mention it as the working baseline.

**What is now fixed?**
The ranking is about next build/clarification priorities, not already-working protocol utility.

**What is no longer allowed?**
Do not use an existing operational protocol to dodge the next-priority question.

**What now depends on this choice?**
Top-five slots go to missing or under-specified protocols.

**What changed in the conceptual model?**
The ranking becomes a roadmap, not a popularity contest.

### Ambiguity: Should Resume be in the top five?

**Strongest counter-interpretation:**
Resume should rank high because the last inquiry clarified its unique future value.

**Why the counter-interpretation fails (structural grounds):**
Resume's unique value depends on standardized verdict telemetry. Without that, it mostly degrades to basic inline resume. The prerequisite protocol is more useful now than Resume itself.

**Confidence:** HIGH.

**Resolution:**
Do not rank Resume as a top-five immediate protocol. Rank structural/telemetry enforcement above it.

**What is now fixed?**
Resume is downstream of telemetry standardization.

**What is no longer allowed?**
Do not wire or prioritize Resume before its evidence input exists.

**What now depends on this choice?**
Telemetry contract becomes a top-five candidate.

**What changed in the conceptual model?**
The useful object shifts from a dormant protocol to the substrate that would make it real.

### Ambiguity: Should meaningful traversal outrank retrospective outcome review?

**Strongest counter-interpretation:**
Meaningful traversal is essential for meta-loop and multi-head autonomy, so it should rank higher.

**Why the counter-interpretation fails (structural grounds):**
Meaningful traversal needs traces and outcomes to calibrate. Retrospective outcome review creates the evidence that later traversal-quality metrics can learn from. Without outcome review, meaningful traversal risks becoming another self-confirming internal metric.

**Confidence:** MEDIUM-HIGH.

**Resolution:**
Retrospective outcome review ranks above meaningful traversal for current state. Meaningful traversal is a close next candidate after the top five.

**What is now fixed?**
Outcome closure beats traversal scoring as an immediate build priority.

**What is no longer allowed?**
Do not implement a strong meaningful-traversal formula before collecting enough trace/outcome examples.

**What now depends on this choice?**
Meta-loop scoring waits for evidence; meta-loop v1 can still run with qualitative traversal signals.

**What changed in the conceptual model?**
The system needs learning records before scoring formulas.

### Ambiguity: Are telemetry contract and structural integrity one protocol or two?

**Strongest counter-interpretation:**
They should be separate: structural format validation is deterministic, while telemetry verdicts support routing and quality judgment.

**Why the counter-interpretation partially succeeds:**
They are different mechanisms. A section-existence check is not the same as a `PROCEED/FLAG/RE-RUN` verdict.

**Why a combined top-five slot still survives:**
The current ranking is high-level. Both are immediate enforcement substrates, both feed Primitive RC, and both unblock Resume and future routing. They can be expressed as one ranked priority with two sub-protocols.

**Confidence:** MEDIUM.

**Resolution:**
Rank them together as "Structural Integrity + Telemetry Contract," while noting that implementation may split them.

**What is now fixed?**
The top-five list gets one enforcement slot, not two.

**What is no longer allowed?**
Do not collapse their implementation semantics; only combine their priority slot.

**What now depends on this choice?**
Decomposition should split their subresponsibilities.

**What changed in the conceptual model?**
The ranking distinguishes priority clusters from file-level implementation units.

## SV4 - Clarified Understanding

The top five should be ranked by current leverage:

1. Does this protocol convert current user/system behavior into learning evidence?
2. Does it make fundamentals changes testable and reversible?
3. Does it create quality-awareness substrate?
4. Does it close feedback loops?
5. Does it prepare Navigation/meta-loop without premature autonomy?

This logic prioritizes maintenance and quality protocols above advanced traversal protocols.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed Variables

- CONCLUDE is active baseline, not a next build priority.
- Resume is downstream of telemetry standardization.
- MVL/MVL+ remain the cognitive primitive.
- `loop-diagnose` should be a protocol/template around MVL+ diagnostics.
- Git branches need semantic evidence and evaluation protocols.
- Structural checking is currently missing and important.
- Retrospective closure is required for real self-maintenance.
- Navigation needs selection records before autonomous selectors.

### Eliminated Options

- Build a new full cognitive discipline as the top protocol move.
- Wire Resume before telemetry standardization.
- Make meaningful traversal the first formal scoring formula before traces exist.
- Treat git history alone as self-maintenance memory.
- Treat Navigation as a selector.

### Viable Paths

- Build the top five as lightweight protocol docs first.
- Implement structural checks/tooling in parallel with protocol docs.
- Use first real correction chains to validate `loop_diagnose`.
- Use one branch experiment to validate branch protocol.
- Use Navigation selection records to prepare later selector/meta-loop work.

## SV5 - Constrained Understanding

The solution space is now a staged protocol roadmap:

1. **Diagnose:** `loop_diagnose`.
2. **Experiment:** `maintenance_branch_experiment`.
3. **Enforce:** `structural_integrity_and_telemetry_contract`.
4. **Close:** `retrospective_outcome_review`.
5. **Traverse:** `navigation_selection_record`.

Then, after traces and outcomes exist, revisit:

- `meaningful_traversal_assessment`;
- `resume_check`;
- autonomous selector;
- multi-head branch merge.

## Phase 5 - Conceptual Stabilization

The current stage of Homegrown is not blocked by lack of more protocols in the abstract. It is blocked by lack of protocols that make learning from its own use reliable.

The most useful next protocol is therefore `loop_diagnose`, because it turns a weak finding, user correction, and improved finding into evidence-backed maintenance candidates.

The second most useful is `maintenance_branch_experiment`, because it turns maintenance candidates into reversible git-backed variants with baseline/candidate comparison.

The third is `structural_integrity_and_telemetry_contract`, because it gives Homegrown its first Primitive RC substrate and unlocks Resume-style routing.

The fourth is `retrospective_outcome_review`, because it closes the loop and prevents patches from being assumed good just because they were made.

The fifth is `navigation_selection_record`, because it starts collecting the data needed for meta-loop selection and later meaningful traversal without pretending the system can choose autonomously yet.

## SV6 - Stabilized Model

The top-five protocol priorities should be ranked by how much they help Homegrown become a learning system rather than a larger prompt library.

The ranked answer is:

1. `loop_diagnose`
2. `maintenance_branch_experiment`
3. `structural_integrity_and_telemetry_contract`
4. `retrospective_outcome_review`
5. `navigation_selection_record`

This differs from SV1 by making the priority criterion explicit. The ranking is not based on conceptual ambition. It is based on what most quickly creates evidence, protects changes, closes feedback, and prepares Navigation/meta-loop autonomy without overbuilding it.
