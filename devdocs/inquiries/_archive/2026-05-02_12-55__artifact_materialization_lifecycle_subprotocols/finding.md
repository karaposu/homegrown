---
status: active
refines:
  - devdocs/inquiries/2026-04-28_13-22__artifact_materialization_protocol_shape/finding.md
  - devdocs/inquiries/2026-05-02_12-20__next_load_bearing_navigation_vs_materialization/finding.md
---
# Finding: artifact_materialization_lifecycle_subprotocols

## Changes from Prior

**Prior paths:**

- `devdocs/inquiries/2026-04-28_13-22__artifact_materialization_protocol_shape/finding.md`
- `devdocs/inquiries/2026-05-02_12-20__next_load_bearing_navigation_vs_materialization/finding.md`

**Revision trigger:** The user clarified that code artifacts should use the proven AlignStack-style implementation lifecycle, while simpler Markdown/protocol artifacts should use a smaller lifecycle focused on content planning. The user also asked whether create, edit, rewrite, and refactor should become subprotocols.

**What's preserved:** The prior finding was right that `homegrown/protocols/artifact_materialization.md` should use Compact, Standard, and Full lifecycle modes. The previous load-bearing finding was right that this protocol should be created next.

**What's changed:** Compact, Standard, and Full are not enough by themselves. The protocol also needs to classify **artifact type** and **operation intent** before selecting lifecycle depth.

**What's new:** `create`, `edit`, `rewrite`, `refactor`, `extend`, `extract`, and `delete/deprecate` should be **operation profiles** inside `artifact_materialization.md` in v1. They should not be separate subprotocol files yet.

**Migration:** Build `artifact_materialization.md` as one controller protocol first. Extract operation profiles into separate subprotocols only after repeated materialization traces show stable independent procedures.

## Question

Should `homegrown/protocols/artifact_materialization.md` use different lifecycle paths for code, Markdown/protocol documents, and operations such as create, edit, rewrite, and refactor?

The goal is to define the correct shape of the artifact materialization protocol before implementation: what lifecycle modes it should include, when full task-desc/task-plan/dynamic-critic/repair/implementation is required, how lightweight Markdown artifacts should be handled, and whether create/edit/rewrite/refactor should become subprotocols or typed operation modes.

## Finding Summary

- Yes, the user's distinction makes sense. Code and lightweight Markdown artifacts should not use the same lifecycle depth.

- The right v1 design is **one controller protocol with operation profiles**, not many separate subprotocol files.

- The controller should classify three axes before acting:

```text
artifact type + operation intent + risk facts -> lifecycle mode
```

- Artifact type asks what kind of thing is being materialized: code, test, config, protocol, skill, schema, harness adapter, Markdown note, documentation, or trace.

- Operation intent asks what is being done: create, edit, rewrite, refactor, extend, extract, or delete/deprecate.

- Lifecycle mode asks how much process is justified: Compact, Standard, or Full.

- Code, tests, configs, harness adapters, loaded protocol/skill changes, runner changes, schemas, and behavior-affecting artifacts should use the proven task-desc -> task-plan -> dynamic critic -> repair -> implementation -> validation -> trace lifecycle when risk is medium or high.

- Low-risk Markdown creation can use Compact mode, but Compact mode still needs a content contract: source authority, purpose, must-contain, must-not-contain, relationships, target path, tiny plan, review/validation, trace, and follow-up gate.

- Rewrite and refactor need preservation checks. A rewrite must state what meaning or behavior must remain true, what is intentionally changed, and what was removed. A refactor must prove that structure changed without semantic or behavior drift.

## Finding

### 1. The User's Instinct Is Correct

The materialization lifecycle should not treat every artifact the same.

A code artifact can break runtime behavior. It needs implementation planning, dynamic critique, plan repair, validation commands, and a trace.

A small standalone Markdown note usually does not need that full lifecycle. But it still needs source authority, a reason to exist, a content contract, and a trace. Otherwise Markdown creation becomes ungoverned theory sprawl.

The subtle point is that Markdown is not automatically low risk. A Markdown file that defines a protocol, skill, runner instruction, or shared contract can change future system behavior. That kind of Markdown needs Standard or Full mode.

### 2. The Correct Axes Are Artifact Type, Operation Intent, And Lifecycle Mode

The protocol should not choose mode from file type alone.

It should classify:

```text
artifact_type:
operation_intent:
risk_facts:
selected_mode:
```

Artifact type answers what kind of object is being changed.

Operation intent answers what action is being performed on that object.

Risk facts answer what could break: behavior impact, existing loaded instruction impact, write-set breadth, reversibility, and validation clarity.

Selected mode answers how much lifecycle process is justified.

This three-axis model is stronger than the simpler code-vs-Markdown split.

### 3. Compact Markdown Materialization Needs A Content Contract

For low-risk Markdown artifacts, the protocol should use a compact content lifecycle:

```text
source authority
  -> purpose / reason for existence
  -> must contain
  -> must not contain
  -> relationship to existing artifacts
  -> target path / write-set
  -> operation intent
  -> tiny plan
  -> implementation
  -> validation or manual review
  -> materialization trace
  -> follow-up gate
```

This is not the same as a code implementation plan. It is a content plan.

For example, a new `enes/*.md` concept note should answer:

- why this file should exist;
- what it must explain;
- what it should not try to solve;
- which existing findings or protocols it connects to;
- how a reader will know it is complete enough.

That is lightweight, but still governed.

### 4. Code And Behavior-Affecting Artifacts Need The Proven Implementation Lifecycle

The task-desc -> task-plan -> dynamic critic -> plan repair -> implementation workflow remains the correct path for code and behavior-affecting artifacts.

It should be mandatory for:

- code that changes runtime behavior;
- tests or configs used by tooling;
- harness adapters;
- ARC execution or scoring paths;
- existing protocol edits that change future operation;
- skill edits;
- runner behavior;
- shared schemas or trace formats;
- substantial rewrites or refactors of load-bearing content.

Dynamic critic is not "only for code." It is for any materialization where a bad plan can break future behavior, remove constraints, create inconsistent contracts, or mislead downstream work.

### 5. Create/Edit/Rewrite/Refactor Should Start As Operation Profiles

The operations are real and important:

| Operation | Main Risk |
| --- | --- |
| `create` | Unclear source authority, scope creep, poor discoverability. |
| `edit` | Local inconsistency, silent contract change, too-wide write-set. |
| `rewrite` | Loss of load-bearing content, altered meaning, hidden deletions. |
| `refactor` | Claimed structure-only change that changes behavior or meaning. |
| `extend` | Duplicate concepts, scope creep, weak boundaries. |
| `extract` | Broken references, orphaned context, unclear ownership. |
| `delete/deprecate` | Lost history, broken navigation, missing redirects. |

But they should not become separate protocol files yet.

Separate subprotocol files would duplicate shared invariants such as source authority, write-set, validation, and trace. They would also force users and agents to choose between too many protocol names before the base controller has been proven.

The right v1 is operation profiles inside one controller protocol.

### 6. Subprotocols Need Extraction Gates

Subprotocols may become correct later.

An operation profile should be extracted into its own file only when all of these are true:

- at least 3 materialization traces used that operation profile;
- the operation profile has stable repeated steps;
- the section is large enough to make the controller hard to read;
- extraction will not duplicate the shared materialization contract;
- the extracted file can still be invoked through `artifact_materialization.md`.

This keeps the door open without fragmenting v1.

## Next Actions

### MUST

- **What:** Build `homegrown/protocols/artifact_materialization.md` as one controller protocol.
  **Who:** Homegrown protocol layer.
  **Gate:** Before ordinary Homegrown artifact-generation claims.
  **Why:** It gives one source of truth for source authority, write-set, mode selection, validation, trace, and follow-up review.

- **What:** Add the three-axis classification model near the top of `artifact_materialization.md`.
  **Who:** `artifact_materialization.md`.
  **Gate:** Before defining Compact, Standard, and Full steps.
  **Why:** Artifact type alone is not enough; operation intent and risk facts decide lifecycle depth.

- **What:** Define operation profiles inside `artifact_materialization.md`.
  **Who:** `artifact_materialization.md`.
  **Gate:** Same protocol creation.
  **Why:** Create, edit, rewrite, refactor, extend, extract, and delete/deprecate have different risks that must affect planning and escalation.

- **What:** Define Compact Markdown/content materialization.
  **Who:** `artifact_materialization.md`.
  **Gate:** Same protocol creation.
  **Why:** Low-risk Markdown needs a lightweight path that preserves purpose, boundaries, relationships, review, and trace without requiring the full code lifecycle.

- **What:** Define Standard and Full implementation materialization using task-desc/task-plan/dynamic-critic/repair.
  **Who:** `artifact_materialization.md`.
  **Gate:** Same protocol creation.
  **Why:** Code and behavior-affecting artifacts need the proven implementation lifecycle.

### COULD

- **What:** Add artifact-type examples under each mode.
  **Who:** `artifact_materialization.md`.
  **Gate:** During protocol creation if it stays readable.
  **Why:** Examples reduce mode-selection mistakes.

- **What:** Add a compact trace template specifically for Markdown/content artifacts.
  **Who:** `artifact_materialization.md`.
  **Gate:** During protocol creation.
  **Why:** It will make lightweight materialization easier to execute consistently.

- **What:** Add a preservation checklist for rewrite/refactor.
  **Who:** `artifact_materialization.md`.
  **Gate:** During protocol creation.
  **Why:** Rewrite and refactor are the highest-risk operation profiles for silent meaning drift.

### DEFERRED

- **What:** Create separate `artifact_create.md`, `artifact_edit.md`, `artifact_rewrite.md`, or `artifact_refactor.md`.
  **Gate:** Revive only after at least 3 materialization traces for one operation show stable repeated procedure and the controller section becomes too large.
  **Why (if revived):** Separate files may become useful once one operation profile has enough independent logic to justify extraction.

- **What:** Create artifact-type-specific subprotocols such as `code_materialization.md` or `markdown_materialization.md`.
  **Gate:** Revive only after repeated traces show artifact-type procedures are stable and too large for the controller.
  **Why (if revived):** Type-specific protocols can reduce friction later, but only after v1 evidence exists.

## Reasoning

The file-type split was killed because it misclassifies risk. Code is often risky, but Markdown can also be risky when it defines protocols, skills, contracts, or runner instructions.

Risk-only modes were refined. Compact, Standard, and Full are still correct as lifecycle modes, but they need operation profiles to avoid missing rewrite/refactor risks.

The controller protocol with operation profiles survived because it gives one source of truth while still representing different artifact and operation risks.

Separate subprotocol files were killed for v1 because they would duplicate invariants and increase selection overhead before there is evidence from real materialization traces.

The content contract for Markdown survived because it gives simple documents a lightweight but accountable lifecycle.

Dynamic critic escalation survived because conceptual and instruction-level changes can be as consequential as code. A protocol rewrite can damage future reasoning even if no runtime test fails.

The main contradiction resolved across the loop was this: the user wants smaller lifecycles for simple artifacts, but Homegrown must not allow "small" to mean "uncontrolled." The resolution is compact accountability: fewer files, same invariants.

## Open Questions

### Monitoring

- After 3 materialization traces, check whether operation profiles are sufficient or whether one profile deserves extraction.

- After the first Compact Markdown materialization, check whether the content contract was enough to prevent scope drift and missing relationships.

- After the first Standard or Full code materialization, check whether task-desc/task-plan/dynamic-critic/repair caught the right risks.

### Blocked

- Exact wording of operation profiles is blocked until `artifact_materialization.md` is drafted.

- Automated validation remains limited because `tools/structural_check.sh` is absent in this repo.

### Refinement Triggers

- If users or agents choose the wrong operation profile twice, simplify the profile table or add examples.

- If Compact Markdown traces produce repeated PARTIAL or FAIL outcomes due to missed risks, strengthen Compact risk scan or escalate more cases to Standard.

- If the controller grows too long after 3 to 5 materialization traces, revisit subprotocol extraction.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 
Build homegrown/protocols/artifact_materialization.md next as the protocol artifact because Homegrown still needs a
     safe bridge from decisions to files.

do you remeber we talked about this ? 

for example if artifact is a code, we should follow task plan critique d  , fix task plan, implement the plan logic. 

but if it is something less complex like md files, materilization lifecycle becomes,  plan it shoudl contain what and it shouldnt contian what, what are it's connections to reason of it's existance, implementation of md file 

does this makes sense? also maybe we need rewrite, create, edit, refactor subprotocols?
```

</details>
