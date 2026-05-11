# Sensemaking: Artifact Materialization Lifecycle Subprotocols

## User Input

`devdocs/inquiries/2026-05-02_12-55__artifact_materialization_lifecycle_subprotocols/_branch.md`

## SV1 - Baseline Understanding

The user is asking whether the materialization lifecycle should adapt to artifact complexity. Code probably needs the full task-desc -> task-plan -> dynamic critic -> plan repair -> implementation flow, while simple Markdown artifacts should use a lighter content-planning lifecycle. The user also wonders whether create, edit, rewrite, and refactor should be separate subprotocols.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Materialization must not become direct file editing with a fancy name.
- Low-risk Markdown artifacts should not pay the full code lifecycle cost.
- Code and behavior-changing artifacts need full planning, dynamic critique, repair, validation, and trace.
- Existing protocols, skills, runners, and schemas are more dangerous to edit than new standalone notes.
- The protocol must stay usable enough that the user does not bypass it.
- V1 should avoid too many separate protocols before real traces prove the need.

### Key Insights

- The user is correct: artifact materialization should not have one uniform lifecycle.
- The missing distinction is not only code vs Markdown. It is three-axis:

```text
artifact type + operation intent + risk/lifecycle mode
```

- `create`, `edit`, `rewrite`, and `refactor` are real distinctions, but they should start as operation profiles inside one controller protocol.
- Markdown artifacts need a content contract: what the file should contain, should not contain, why it exists, and how it connects to source authority.

### Structural Points

The protocol should separate:

```text
shared invariants    = always required
artifact type        = what kind of file/artifact
operation intent     = create/edit/rewrite/refactor/etc.
lifecycle mode       = Compact/Standard/Full
artifact procedure   = code path or content-doc path
validation/outcome   = checks and trace
```

### Foundational Principles

- Compress document count, not accountability.
- Operation intent changes risk.
- Existing behavior or existing loaded instructions are higher risk than new standalone documents.
- Rewrite/refactor must preserve meaning/behavior unless explicitly changing it.
- A separate protocol should be extracted only after repeated use shows stable independent logic.

### Meaning-Nodes

- **Materialization controller**
- **Artifact type**
- **Operation intent**
- **Lifecycle depth**
- **Content contract**
- **Dynamic critic**
- **Meaning preservation**
- **Subprotocol extraction gate**

## SV2 - Anchor-Informed Understanding

The answer is not simply "code gets full lifecycle, Markdown gets light lifecycle." That is directionally right but incomplete. A Markdown rewrite of an existing loaded protocol can be higher risk than creating a small code example. The correct structure is a single controller protocol that first classifies artifact type, operation intent, write-set, behavior impact, and validation clarity, then chooses Compact, Standard, or Full mode.

## Phase 2 - Perspective Checking

### Technical / Logical

Code changes can break runtime behavior. They need concrete implementation plans, dynamic critique, and validation commands. Markdown/protocol changes can break cognitive behavior by changing instructions, source authority, or downstream contracts. They still need planning, but the plan can be content-oriented.

New anchor: Markdown is not automatically low risk; instruction-loaded Markdown can be behavior-affecting.

### Human / User

The user wants the protocol to make work easier, not turn every file into a bureaucratic project. A new note or simple protocol draft should be materializable quickly, but it should still record why it exists and what it should not contain.

New anchor: Compact mode must be pleasant enough to use.

### Strategic / Long-Term

If Homegrown eventually builds many artifacts, one controller protocol with operation profiles is more maintainable than many small early protocols. Later, real traces can justify extraction.

New anchor: future subprotocols should be evidence-promoted, not guessed now.

### Risk / Failure

The highest risk is silent semantic drift:

- a rewrite removes load-bearing constraints;
- a refactor changes meaning while claiming structure-only change;
- an edit to a skill changes future behavior without validation;
- a Markdown file gets treated as "safe" because it is not code.

New anchor: rewrite/refactor need preservation checks.

### Resource / Feasibility

Creating a single `artifact_materialization.md` with operation profiles is tractable now. Creating multiple subprotocols before usage would increase authoring and maintenance cost.

New anchor: operation profiles are the v1 sweet spot.

### Definitional / Consistency

Materialization is defined as turning an authorized decision into concrete files under a contract. That definition requires one shared protocol boundary. Subprotocols cannot bypass the universal source/write-set/validation/trace contract.

New anchor: subprotocols can only specialize inside shared invariants.

## SV3 - Multi-Perspective Understanding

The stable model is:

```text
artifact_materialization.md = controller protocol
  shared contract
  mode selection
  operation profiles
  artifact-type guidance
  validation and trace
```

For code, the protocol routes to the full task-desc/task-plan/dynamic-critic path when risk is medium or high.

For Markdown/protocol documents, the protocol uses a content-materialization path: define purpose, source authority, must-contain, must-not-contain, relationships, write-set, validation/review, implementation, and trace.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Should code and Markdown have different lifecycles?

**Strongest counter-interpretation:** No. One lifecycle should apply to all artifacts to keep the protocol simple and consistent.

**Why the counter-interpretation fails:** Uniform lifecycle confuses consistency with equal weight. A low-risk new Markdown note does not need the same dynamic critic depth as a behavior-changing code adapter. Conversely, an existing protocol rewrite can be high risk despite being Markdown. One lifecycle cannot handle both without being either too heavy or too loose.

**Confidence:** HIGH

**Resolution:** Code and Markdown need different default procedures, but both must pass through one shared materialization controller.

**What is now fixed?** The protocol must include artifact-type guidance.

**What is no longer allowed?** Treating all artifacts as requiring the same document set.

**What now depends on this choice?** Compact/Standard/Full mode descriptions and validation rules.

**What changed in the conceptual model?** Artifact materialization becomes risk-adaptive rather than file-type-uniform.

### Ambiguity: Are create/edit/rewrite/refactor subprotocols?

**Strongest counter-interpretation:** Yes. Each operation has different risks, so each should get its own protocol file.

**Why the counter-interpretation fails:** Separate files would duplicate the universal contract and create selection overhead before any real materialization traces exist. The distinct risks are real, but they can be represented as operation profiles inside one controller protocol.

**Confidence:** HIGH

**Resolution:** In v1, `create`, `edit`, `rewrite`, `refactor`, `extend`, `extract`, and `delete/deprecate` should be operation profiles, not separate protocol files.

**What is now fixed?** No separate `artifact_create.md`, `artifact_edit.md`, `artifact_rewrite.md`, or `artifact_refactor.md` in v1.

**What is no longer allowed?** Premature subprotocol proliferation.

**What now depends on this choice?** The structure of `artifact_materialization.md`.

**What changed in the conceptual model?** Operation-specific rules are kept close to the controller until evidence justifies extraction.

### Ambiguity: What should lightweight Markdown materialization include?

**Strongest counter-interpretation:** A simple Markdown artifact only needs the file written and maybe a short note.

**Why the counter-interpretation fails:** The failure mode for Markdown is not syntax failure; it is conceptual drift, missing source authority, unclear reason for existence, broken relationships, or accidental contradiction. Those cannot be caught by "write the file" alone.

**Confidence:** HIGH

**Resolution:** Lightweight Markdown materialization should include a content contract:

```text
source authority
purpose / reason for existence
must contain
must not contain
relationship to existing artifacts
target path / write-set
operation intent
validation or manual review
trace and follow-up gate
```

**What is now fixed?** Compact Markdown mode still has a plan, but it is a content plan, not a code implementation plan.

**What is no longer allowed?** "It's just Markdown" as a reason to skip source, scope, or validation.

**What now depends on this choice?** Compact trace template.

**What changed in the conceptual model?** Markdown materialization becomes content-governed rather than implementation-governed.

### Ambiguity: When does full task-desc/task-plan/critic-d apply?

**Strongest counter-interpretation:** The full proven lifecycle should apply to every materialization because it is strongest.

**Why the counter-interpretation fails:** Applying full lifecycle to every artifact makes small safe artifacts expensive and encourages bypassing. The lifecycle should be preserved where it earns its cost: code, behavior-changing artifacts, existing loaded protocols/skills, runners, schemas, configs, tests, harnesses, and complex rewrites/refactors.

**Confidence:** HIGH

**Resolution:** Full task-desc/task-plan/dynamic-critic/repair is mandatory for medium/high risk and optional/escalated for compact artifacts when risk scan discovers coupling.

**What is now fixed?** Dynamic critic is mode/risk-triggered, not universally required.

**What is no longer allowed?** Treating dynamic critic as unnecessary when behavior, loaded instructions, or shared contracts are touched.

**What now depends on this choice?** Mode selection and escalation rules.

**What changed in the conceptual model?** The proven implementation lifecycle remains central but no longer dominates trivial cases.

## SV4 - Clarified Understanding

The protocol should be one controller with two kinds of internal specialization:

1. **Lifecycle modes:** Compact, Standard, Full.
2. **Operation profiles:** create, edit, rewrite, refactor, extend, extract, delete/deprecate.

Artifact type guides risk. Operation intent modifies risk. Risk selects lifecycle mode.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- `artifact_materialization.md` should not be a free-form synthesis protocol.
- It should not split into many subprotocol files in v1.
- It should include operation profiles.
- It should include artifact-type guidance.
- It should include a Markdown/content path and a code/implementation path.
- It should preserve the proven task-desc/task-plan/critic-d lifecycle for code and behavior-affecting changes.

### Eliminated

- One uniform lifecycle for every artifact.
- Separate create/edit/rewrite/refactor protocol files now.
- Treating Markdown as inherently low risk.
- Requiring full dynamic critic for every tiny standalone note.
- Letting skills freely materialize artifacts without source/write-set/trace.

### Viable

- Single controller protocol with operation profiles.
- Compact Markdown materialization with inline content plan and trace.
- Standard/Full code materialization using task-desc/task-plan/critic-d.
- Future extraction of subprotocols after repeated traces show stable independent logic.

## SV5 - Constrained Understanding

The protocol shape should be:

```text
artifact_materialization.md
  1. universal input contract
  2. operation intent classification
  3. artifact type classification
  4. risk and mode selection
  5. Compact mode
     - content contract for low-risk Markdown
     - inline plan/risk/validation/trace
  6. Standard mode
     - desc.md
     - step_by_step_impl_plan.md
     - dynamic_critic_prompt.md
     - critic.md
     - repaired plan when needed
     - validation
     - materialization_trace.md
  7. Full mode
     - Standard plus strict risk gates
  8. operation profiles
  9. escalation rules
  10. validation and outcome review gate
  11. subprotocol extraction gates
```

## Phase 5 - Conceptual Stabilization

The user's intuition makes sense. Code artifacts and low-risk Markdown artifacts should not follow the same lifecycle depth.

But the safer abstraction is not "many subprotocols." It is:

```text
one protocol, multiple operation profiles, risk-scaled lifecycle depth
```

## SV6 - Stabilized Model

`homegrown/protocols/artifact_materialization.md` should be a **controller protocol**, not a family of separate v1 subprotocols.

It should ask:

```text
What artifact type is this?
What operation intent is this?
What is the source authority?
What is the write-set?
What is the artifact contract?
What can break?
What lifecycle depth is justified?
```

For code or behavior-changing artifacts, use the proven task-desc -> task-plan -> dynamic critic -> repair -> implementation path.

For lightweight Markdown artifacts, use compact content materialization:

```text
source authority
  -> purpose / reason for existence
  -> must contain / must not contain
  -> relationship to existing artifacts
  -> tiny plan
  -> implementation
  -> validation/review
  -> trace
```

Create/edit/rewrite/refactor should be operation profiles in v1. Extract them into separate subprotocols only after repeated materialization traces prove that one operation has enough stable independent logic to justify its own file.

## Telemetry

- **Perspective saturation:** High. New perspectives converged on controller + profiles + modes.
- **Ambiguity resolution ratio:** High. Main ambiguities resolved.
- **SV delta:** Strong. SV1 asked code vs Markdown and possible subprotocols; SV6 defines a three-axis controller.
- **Anchor diversity:** High. Constraints, insights, structural points, principles, and meaning-nodes all contributed.

## Verification Gap

`tools/structural_check.sh` is absent, so automated structural validation could not be run.
