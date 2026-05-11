# Sensemaking: Navigation Protocol Or Discipline

## User Input

`devdocs/inquiries/2026-04-28_08-39__navigation_protocol_or_discipline/_branch.md`

## SV1 - Baseline Understanding

The user is asking whether the same architectural move used for `loop_diagnose` should also apply to Navigation. Since `loop_diagnose` became a protocol wrapper around MVL+, maybe Navigation should also become "MVL+ with a Navigation protocol" rather than a separate discipline.

The initial answer is probably no, but the reason needs precision. Navigation appears to have a distinct operation and output, while `loop_diagnose` only frames MVL+ to answer a diagnostic question.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- MVL/MVL+ should remain atomic answer-producing inquiry loops.
- Navigation should not be appended as a required sixth MVL+ stage.
- Current Navigation source explicitly calls it a boundary discipline.
- Navigation's output is a Navigation Map, not a normal inquiry finding.
- Meta-loop currently treats Navigation as "eyes" and selection as separate.
- `loop_diagnose` is explicitly a protocol wrapper around MVL+.

### Key Insights

- A separate discipline can exist outside the core MVL+ sequence without violating MVL+ atomicity.
- The question is not "separate discipline or MVL+ integration." The stable answer is "separate boundary discipline with optional protocol/hook integration."
- Navigation's operation is enumeration of next moves. MVL+'s operation is inquiry resolution.
- Replacing Navigation with MVL+ would make next-move enumeration inconsistent and over-dependent on ad hoc prompt framing.
- Navigation may need a protocol-style invocation contract, but that does not erase its discipline identity.

### Structural Points

- `loop_diagnose` input: correction chain.
- `loop_diagnose` output: normal diagnostic finding from MVL+.
- Navigation input: completed inquiry output or project state.
- Navigation output: typed Navigation Map.
- Meta-loop uses MVL+ to probe and Navigation to perceive possible moves.

### Foundational Principles

- Protocols frame, route, or compile. Disciplines perform cognitive operations.
- A discipline is justified when it has a distinct operation, input-output transform, quality criteria, and failure modes.
- Boundary disciplines are not core pipeline stages.
- Selection should not be hidden inside Navigation.

### Meaning-Nodes

- Boundary discipline
- Protocol wrapper
- Enumeration
- Atomic inquiry
- Navigation Map
- Meta-loop perception
- Post-CONCLUDE hook

## SV2 - Anchor-Informed Understanding

Navigation should not be reduced to "MVL+ with a protocol" because it is not trying to answer a question in the ordinary MVL+ sense. It is mapping possible movement after an answer, partial answer, branch result, or project state exists.

The better framing is:

```text
Navigation is a separate boundary discipline.
It can be invoked by a protocol or hook.
It should not become a required MVL+ stage.
```

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

New anchors:

- Navigation has a specialized taxonomy and output format.
- Navigation has telemetry: type coverage, category balance, guideline depth, excluded reasoning.
- Navigation has its own failure modes: premature filtering, recency bias, action bias, enumeration without reasoning, scope fixation.
- A protocol wrapper would need to recreate all of that inside a normal MVL+ finding.

Technical interpretation: Navigation has enough internal structure to remain a separate discipline.

### Human / User Perspective

New anchors:

- The user needs clear options after a finding, not another full inquiry that argues for one answer.
- Navigation maps should be easy to scan and compare.
- If Navigation becomes MVL+ again, the user may get an essay instead of a map.

Human interpretation: separate Navigation is more ergonomic for "what next?" decisions.

### Strategic / Long-Term Perspective

New anchors:

- Meta-loop needs Navigation as perception.
- Multi-head work needs an enumeration surface that can feed several branches.
- A protocol wrapper around MVL+ would make Navigation less available as a reusable perception component.

Strategic interpretation: Navigation should stay a component the meta-loop can call.

### Risk / Failure Perspective

New anchors:

- If Navigation becomes a normal MVL+ run, it may start selecting or arguing instead of enumerating.
- If Navigation stays completely separate with no invocation contract, it may remain unused.
- If Navigation is added as a required MVL+ stage, every inquiry becomes open-ended.

Risk interpretation: separate discipline plus explicit invocation hook is the safest middle path.

### Resource / Feasibility Perspective

New anchors:

- Keeping Navigation as a separate skill is already implemented.
- Adding or refining an invocation hook is smaller than rewriting Navigation as an MVL+ protocol.
- Fixing the 15 vs 16 taxonomy mismatch is a small cleanup.

Feasibility interpretation: do not rewrite; clarify invocation and clean docs.

### Definitional / Consistency Perspective

New anchors:

- Current source defines Navigation as a boundary discipline.
- Prior findings say Navigation is not a core MVL+ stage.
- Meta-loop spec says Navigation sees and does not choose.
- `loop_diagnose` source explicitly says it does not add a discipline because it has no independent cognitive operation.

Consistency interpretation: Navigation and `loop_diagnose` should not be treated the same.

## SV3 - Multi-Perspective Understanding

The stable model is:

```text
MVL+:
  answers a bounded inquiry and produces a finding

loop_diagnose:
  protocol wrapper that frames a special MVL+ inquiry

Navigation:
  separate boundary discipline that enumerates possible next moves

Meta-loop:
  runner that uses MVL+ as probe and Navigation as perception
```

The important split is identity versus invocation. Navigation's identity should stay separate. Its invocation can be protocolized.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Does "MVL+ is atomic" mean Navigation cannot be a separate discipline?

**Strongest counter-interpretation:**
If MVL+ is the atomic cognitive operation, then Navigation should be expressed as an MVL+ run with a special prompt or protocol.

**Why the counter-interpretation fails (structural grounds):**
MVL+ atomicity applies to bounded inquiry answering. Navigation does not answer the same kind of question. It reads completed outputs and enumerates next movement options. That operation sits at the boundary between inquiries. It can be separate without becoming part of the core MVL+ pipeline.

**Confidence:** HIGH

**Resolution:**
MVL+ remains the atomic answer-producing inquiry loop. Navigation remains a separate boundary discipline around that loop.

**What is now fixed?**
Navigation does not need to be reduced to MVL+ to preserve atomicity.

**What is no longer allowed?**
Using "MVL+ is atomic" as a reason to delete all boundary disciplines.

**What now depends on this choice?**
Future MVL+/meta-loop integration should call Navigation at boundaries, not absorb it into E/S/D/I/C.

**What changed in the conceptual model?**
Atomicity now means bounded core inquiry, not monopoly over every cognitive operation.

### Ambiguity: Is Navigation analogous to `loop_diagnose`?

**Strongest counter-interpretation:**
Yes. Both are special use cases around MVL+. If `loop_diagnose` became a protocol, Navigation should too.

**Why the counter-interpretation fails (structural grounds):**
`loop_diagnose` does not have a distinct output operation. It frames MVL+ to produce a diagnostic finding. Navigation has a distinct operation, taxonomy, output format, telemetry, and failure modes. Its map is not a normal MVL+ finding.

**Confidence:** HIGH

**Resolution:**
`loop_diagnose` is a protocol wrapper. Navigation is a boundary discipline that may have an invocation protocol.

**What is now fixed?**
The two should not be collapsed into the same architectural category.

**What is no longer allowed?**
Promoting "protocol wrapper" as the default fate for every non-core skill.

**What now depends on this choice?**
Navigation should keep `homegrown/navigation/SKILL.md`.

**What changed in the conceptual model?**
The system now distinguishes wrapper protocols from boundary disciplines.

### Ambiguity: Should Navigation ever be loaded by MVL+?

**Strongest counter-interpretation:**
No. If Navigation is separate, MVL+ should not know about it.

**Why the counter-interpretation fails (structural grounds):**
Boundary integration does not erase separation. A completed MVL+ finding is one of Navigation's strongest inputs. Prior findings already support a conditional post-CONCLUDE hook.

**Confidence:** HIGH

**Resolution:**
MVL+ may invoke or recommend Navigation after CONCLUDE, but only as a boundary hook. It should not add Navigation to the core pipeline.

**What is now fixed?**
Post-CONCLUDE Navigation hook remains viable.

**What is no longer allowed?**
Treating any MVL+ mention of Navigation as a violation of separation.

**What now depends on this choice?**
Future MVL+ edits should be framed as boundary-hook changes.

**What changed in the conceptual model?**
Integration and identity are separate dimensions.

### Ambiguity: Is current Navigation already mature enough as a discipline?

**Strongest counter-interpretation:**
No. Since Navigation is underused and has a taxonomy inconsistency, it should be downgraded to a protocol until proven.

**Why the counter-interpretation fails (structural grounds):**
Underuse is not evidence that the operation is not distinct. The source has a mature transform, taxonomy, format, telemetry, and failure modes. The taxonomy count mismatch is a documentation defect, not a category failure.

**Confidence:** MEDIUM-HIGH

**Resolution:**
Keep Navigation as a discipline, but clean up the taxonomy count and dogfood it on completed inquiries.

**What is now fixed?**
The right next move is calibration and cleanup, not architectural demotion.

**What is no longer allowed?**
Using lack of usage alone as evidence that Navigation is not a discipline.

**What now depends on this choice?**
Future work should test Navigation maps before rewriting the design.

**What changed in the conceptual model?**
Navigation's problem is adoption/integration, not identity.

## SV4 - Clarified Understanding

Navigation should remain a separate boundary discipline.

It should not be a required MVL+ stage.

It should not be rewritten as only an MVL+ protocol.

It can have a protocol-like invocation contract:

```text
After CONCLUDE, if next-step pressure exists or the user asks "what next",
run Navigation on the completed inquiry folder.
```

That is integration, not identity change.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- Navigation has a distinct cognitive operation: enumeration.
- Navigation's output is a Navigation Map.
- Navigation should remain separate from E/S/D/I/C.
- MVL+ can call Navigation at the boundary.
- Meta-loop can consume Navigation as perception.
- Selection stays separate from Navigation.

### Eliminated

- Rewriting Navigation as only `homegrown/protocols/navigation.md` around MVL+.
- Adding Navigation as a required sixth MVL+ stage.
- Letting Navigation secretly select the next move.
- Deleting Navigation because it is underused.

### Viable Paths

1. Keep `homegrown/navigation/SKILL.md`.
2. Fix the 15 vs 16 taxonomy mismatch.
3. Dogfood Navigation on completed inquiries.
4. Later add a post-CONCLUDE MVL+ boundary hook.
5. Let meta-loop use Navigation maps for traversal perception.

## SV5 - Constrained Understanding

The recommended architecture is:

```text
MVL+ = bounded inquiry engine
Navigation = boundary enumeration discipline
Selector = human or future explicit selector
Meta-loop = stateful runner that connects MVL+, Navigation, selection, and memory
```

Navigation can be invoked by command, hook, or meta-loop. Its invocation can be protocolized, but its reasoning should not be delegated back to MVL+.

## Phase 5 - Conceptual Stabilization

The stable answer is:

Navigation is a separate boundary discipline, not just MVL+ with a protocol. It deserves that status because it has a distinct input-output transform: it takes a completed cycle or project state and produces a typed map of possible next directions.

However, Navigation should not be treated as part of the core MVL+ loop. It belongs after CONCLUDE or inside meta-loop traversal, where it can see completed artifacts and map movement options.

The relationship to protocols is: create hooks or invocation contracts around Navigation, not a replacement for Navigation.

## SV6 - Stabilized Model

Final model:

```text
loop_diagnose:
  protocol wrapper around MVL+

Navigation:
  separate boundary discipline with protocol-style invocation

MVL+:
  atomic answer-producing loop

Meta-loop:
  stateful runner that uses Navigation as eyes
```

This differs from SV1 by separating two questions that were initially blended:

1. What is Navigation's identity?
2. How should Navigation be invoked?

Navigation's identity should remain a discipline. Its invocation can be made more protocol-like and eventually hooked into MVL+ after CONCLUDE.

## Sensemaking Telemetry

- **Perspective saturation:** High. Technical, human, strategic, risk, feasibility, and consistency perspectives converged on the same model.
- **Ambiguity resolution ratio:** 4/4 central ambiguities resolved.
- **SV delta:** Strong. SV1 compared Navigation to `loop_diagnose`; SV6 distinguishes protocol wrappers from boundary disciplines.
- **Anchor diversity:** High. Anchors include constraints, insights, structural points, principles, and meaning-nodes.
