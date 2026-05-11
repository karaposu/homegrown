---
status: active
diagnoses: devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary/finding.md
compares_with: devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/finding.md
---
# Finding: Loop Diagnose - Route Memory Preflight Boundary

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary/finding.md`

**Revision trigger:** The user said the prior "cheap Route-Memory Preflight plus full Route Memory Review" answer still felt messy and asked for a careful reevaluation starting from why it did not feel clean.

**What's preserved:** The prior answer correctly rejected "project-level Navigation versus bounded Navigation" as the trigger. It also correctly preserved conditional full Route Memory Review and the rule that full review writes `route_memory_review.md`.

**What's changed:** The cheap every-run part should not be a standalone-sounding "Route-Memory Preflight." It should be route-memory status classification inside existing Navigation Freshness Preflight or context intake.

**What's new:** The diagnosis identifies a loop failure around naming and operation boundaries. The prior loop made a status classification look like a named always-run operation.

**Migration:** Future maintenance should add narrow gates for operation naming, classification-versus-review, operation-proliferation critique, and evidence-backed user messiness.

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary`, the human correction, and the later improved inquiry at `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation`, what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?

The goal was to identify evidence-backed failure hypotheses, confidence levels, affected discipline or runner stages, shortcoming types, maintenance candidates, and evaluation gates. The diagnosis had to read the full inquiry folders, including archived discipline outputs, and avoid pretending to know exact root cause where evidence is weaker.

## Finding Summary

- The prior loop was directionally right but not clean enough.

- It fixed the wrong trigger boundary. Route Memory Review should not depend on whether Navigation is "big," project-level, bounded, or local.

- It preserved the right artifact rule. If full Route Memory Review runs, it should write `route_memory_review.md`.

- The likely mistake was naming and boundary drift. The prior loop turned "Navigation should classify route-memory status" into "Navigation should perform Route-Memory Preflight."

- That wording matters because Homegrown protocols use names as operation boundaries. A named "preflight" sounds like an invokable routine, not just a status field.

- The corrected model is cleaner: Navigation records `route_memory_status` during existing intake; only `review_needed` triggers full Route Memory Review; only full review writes `route_memory_review.md`.

- The strongest failure attributions are premature stabilization around "preflight" and Critique not attacking operation proliferation strongly enough.

- The maintenance answer is narrow: add small gates, not a broad MVL+ rewrite.

## Finding

This correction chain is about Navigation route memory. Navigation needs to know whether old Navigation maps or old route records should affect a new `navigation.md`. It also must avoid treating old maps as current truth.

The earlier inquiry at `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary/finding.md` solved a real problem. It rejected this weak rule:

```text
project-level Navigation -> maybe Route Memory Review
bounded Navigation -> skip Route Memory Review
```

That rejection was correct. A bounded input can be an old `navigation.md`, and a project-level run may have no relevant old route memory.

The weak part was the replacement:

```text
Every Navigation run performs Route-Memory Preflight.
Full Route Memory Review runs conditionally.
```

That sounds clean at first because every Navigation run already needs context preparation. But it is still messy because "Route-Memory Preflight" sounds like a new named routine that must run before every Navigation command.

The corrected inquiry at `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/finding.md` keeps the prior answer's useful parts but changes the operation boundary:

```text
Every Navigation run classifies route_memory_status during existing intake.
Only route_memory_status = review_needed runs full Route Memory Review.
Full Route Memory Review writes route_memory_review.md.
```

That difference is not just style. In this codebase, names create process surfaces. A named "preflight" can imply its own trigger, owner, validation, output, and documentation. A `route_memory_status` field is just status inside an existing intake step.

The prior loop likely missed this because it stopped after fixing the first user smell. The user said "Navigation is Navigation," and the prior loop correctly removed the big-versus-bounded split. It did not then ask whether the replacement still made Navigation feel like one workflow.

The prior loop also had the better candidate in view. Its Innovation output considered folding route memory into Freshness Preflight. Its Critique refined that candidate. But the main survivor still remained "Universal Route-Memory Preflight, Conditional Review."

The corrected inquiry makes the missing boundary explicit:

```text
status classification
  records the route-memory state of this Navigation run

review / reconciliation
  decides what current Navigation should do with old route memory
```

Only the second one is a full Route Memory Review. Only the second one writes `route_memory_review.md`.

### Failure Hypotheses

#### Hypothesis 1: Premature Stabilization Around "Preflight"

**Affected stage:** Sensemaking / mixed.

**Shortcoming type:** The loop found a better trigger and stabilized the replacement before testing whether the replacement created a new operation boundary.

**Evidence from prior inquiry:** Prior Sensemaking and Critique stabilize "universal route-memory preflight" and "Universal Preflight, Conditional Review."

**Evidence from human correction:** The user said the answer still felt messy and asked to start from why it was not clean.

**Evidence from corrected inquiry:** Corrected Sensemaking says "Route-Memory Preflight" is clean only if it means classification, not a standalone routine.

**Confidence:** HIGH.

**Why not stronger:** The prior answer was not wrong overall. The diagnosis is about a boundary refinement, not a complete miss.

**Maintenance candidate:** Operation Boundary Naming Gate.

**Evaluation gate:** In the next three protocol-design inquiries that propose a new named step, check whether the loop classifies it as field, section, routine, or artifact-producing operation.

#### Hypothesis 2: Critique Under-Attacked Operation Proliferation

**Affected stage:** Critique.

**Shortcoming type:** Critique treated the cost as "adds another preflight field" instead of testing whether a new always-run named routine was itself the problem.

**Evidence from prior inquiry:** Prior Critique survived Candidate C, "Universal Preflight, Conditional Review," and refined Freshness Preflight absorption rather than making it primary.

**Evidence from human correction:** The user's "still messy" signal points at the replacement's shape, not only the old big-versus-bounded trigger.

**Evidence from corrected inquiry:** Corrected Critique makes conceptual cleanliness and operation proliferation critical dimensions.

**Confidence:** HIGH.

**Why not stronger:** The prior Critique did notice a related concern. It just weighted it too lightly.

**Maintenance candidate:** Operation-Proliferation Critique Guard.

**Evaluation gate:** When Critique evaluates a named always-run step, it must ask whether the candidate can be a field, status, or section inside an existing operation.

#### Hypothesis 3: Human/User Perspective Was Not Recursive Enough

**Affected stage:** Sensemaking / human perspective.

**Shortcoming type:** The prior loop accepted the first user concern but did not test whether its own replacement would feel natural to the user.

**Evidence from prior inquiry:** Prior Sensemaking includes a human perspective that says the user should not remember "big Navigation gets old-map review, bounded does not."

**Evidence from human correction:** The user later said the replacement still felt messy and asked to understand why.

**Evidence from corrected inquiry:** Corrected Exploration and Sensemaking start by explaining why "cheap Route-Memory Preflight" sounds like a side ritual.

**Confidence:** MEDIUM-HIGH.

**Why not stronger:** The prior loop did include human/user perspective; it was insufficient, not absent.

**Maintenance candidate:** User-Felt-Messiness Anchor.

**Evaluation gate:** When the user says "messy," "not clean," or "smells," Sensemaking must classify the mess type and test it against artifacts or workflow evidence.

#### Hypothesis 4: Innovation Underweighted The Cleaner Candidate

**Affected stage:** Innovation.

**Shortcoming type:** The right candidate existed but was kept as a refinement under a less-clean survivor.

**Evidence from prior inquiry:** Prior Innovation includes "Fold Everything Into Freshness Preflight" but treats it as partial. The assembly still says "Navigation Freshness Preflight includes Route-Memory Preflight."

**Evidence from human correction:** The user challenged the cleanliness of that assembly.

**Evidence from corrected inquiry:** Corrected Innovation adds a constraint: no new named mandatory routine before every Navigation run.

**Confidence:** MEDIUM-HIGH.

**Why not stronger:** Innovation did generate the relevant region, so the failure is weighting rather than missing generation.

**Maintenance candidate:** Status Classification vs Review Gate.

**Evaluation gate:** Future candidates that handle historical memory must state whether they classify state or reconcile/dispose old evidence.

#### Hypothesis 5: Decomposition Did Not Make Classification vs Review First-Class

**Affected stage:** Decomposition.

**Shortcoming type:** It decomposed trigger, execution, and output, but did not create a top-level boundary between classification and reconciliation.

**Evidence from prior inquiry:** Prior Decomposition's interfaces route "Route-memory preflight" to Route Memory Review and Navigation telemetry, but classification-versus-review is not the first boundary.

**Evidence from human correction:** The user identified the resulting model as not clean.

**Evidence from corrected inquiry:** Corrected Decomposition's first natural boundary is "Terminology and Layer Boundary," separating status classification from review/reconciliation.

**Confidence:** MEDIUM.

**Why not stronger:** The prior Decomposition was short and not clearly the root cause; later stages also contributed.

**Maintenance candidate:** Classification vs Review Gate during decomposition of protocol workflows.

**Evaluation gate:** Future decompositions of workflow/protocol changes must identify whether each piece is a state classification, operation, artifact, or handoff.

### Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
| --- | --- | --- | --- | --- |
| Sensemaking / mixed | Premature stabilization around "preflight" | strong | high | Operation Boundary Naming Gate |
| Critique | Operation proliferation not attacked strongly enough | strong | high | Operation-Proliferation Critique Guard |
| Human/user perspective | Did not recursively test replacement's cleanliness | medium-strong | medium-high | User-Felt-Messiness Anchor |
| Innovation | Cleaner candidate generated but underweighted | medium-strong | medium-high | Status Classification vs Review Gate |
| Decomposition | Classification/review boundary not first-class | medium | medium | Classification/review boundary check |
| CONCLUDE | Preserved upstream model | weak | low | No standalone CONCLUDE fix |

## Next Actions

### MUST

- **What:** Add a Status Classification vs Review Gate to the relevant maintenance surface.
  **Who:** Later materialization pass for MVL+ peripheral rules, `loop_diagnose.md`, or discipline guidance.
  **Gate:** Before the next artifact-policy or workflow-boundary MVL+ inquiry involving old memory, context safety, prior-state evidence, or route memory.
  **Why:** Prevents status checks from being treated as review operations.

- **What:** Add an Operation Boundary Naming Gate.
  **Who:** Later materialization pass.
  **Gate:** When a loop proposes a new named workflow step such as "preflight," "review," "audit," or "check."
  **Why:** Forces the loop to decide whether the named thing is a field, section, routine, or artifact-producing operation.

- **What:** Add an Operation-Proliferation Critique Guard for named always-run steps.
  **Who:** Later materialization pass for Critique guidance or MVL+ peripheral rules.
  **Gate:** When Critique evaluates a candidate that adds a named always-run step.
  **Why:** Makes Critique test whether the new routine should instead be absorbed as a field or status inside an existing operation.

### COULD

- **What:** Add a User-Felt-Messiness Anchor to Sensemaking guidance.
  **Who:** Later materialization pass.
  **Gate:** When the user says a model is "messy," "not clean," "smells," or similar.
  **Why:** Turns vague user discomfort into structured boundary analysis without treating it as proof.

### DEFERRED

- **What:** Decide exact source placement for these gates.
  **Gate:** Revive when a maintenance task is opened to edit MVL+, `loop_diagnose.md`, Sensemaking, Critique, or Navigation-specific docs.
  **Why if revived:** This diagnostic proves the gates are useful, but exact placement needs a source-edit pass over live files.

- **What:** Formalize Route-Memory Preflight as a separate routine.
  **Gate:** Revive only if real Navigation runs show route-memory status classification is too complex for Freshness Preflight or context intake.
  **Why if revived:** A separate routine may become justified if classification gains its own trigger, procedure, validation, and output.

## Maintenance Candidates

### Candidate 1: Status Classification vs Review Gate

**What should change:** Add a check that distinguishes status classification from review/reconciliation.

**Affected file or protocol:** Possible locations are MVL+ peripheral rules, `homegrown/protocols/loop_diagnose.md`, Decomposition guidance, or Navigation protocol maintenance notes.

**Risk class:** Low.

**Expected benefit:** Prevents cheap status checks from becoming artifact-producing operations.

**Evaluation gate:** In the next three memory/context workflow inquiries, verify that the loop explicitly classifies each proposed step as status, review, artifact, or handoff.

**Branch experiment:** Not required unless source placement is contested.

### Candidate 2: Operation Boundary Naming Gate

**What should change:** Add a small naming check before stabilizing a new named workflow step.

**Affected file or protocol:** Possible locations are MVL+ peripheral rules or `loop_diagnose.md`.

**Risk class:** Low.

**Expected benefit:** Prevents names from accidentally creating new routines.

**Evaluation gate:** A future inquiry that proposes a named "preflight/check/review" should include a one-line classification of the proposed thing's operation type.

**Branch experiment:** Not required.

### Candidate 3: Operation-Proliferation Critique Guard

**What should change:** Add a Critique dimension for candidates that introduce named always-run steps.

**Affected file or protocol:** Critique guidance or MVL+ peripheral discipline rules.

**Risk class:** Medium, because too strong a guard could bias against legitimate new routines.

**Expected benefit:** Prevents Critique from treating side-routine costs as minor wording or field costs.

**Evaluation gate:** The guard passes if it kills or refines unjustified named routines while allowing routines with clear owner, trigger, validation, and output.

**Branch experiment:** Consider branch experiment if this touches core Critique skill text.

### Candidate 4: User-Felt-Messiness Anchor

**What should change:** Add a Sensemaking anchor for user signals like "messy," "not clean," or "smells."

**Affected file or protocol:** Sensemaking guidance or LOOP_DIAGNOSE framing notes.

**Risk class:** Medium, because subjective user discomfort must not become proof without evidence.

**Expected benefit:** Forces the loop to inspect naming, boundary, trigger, ownership, output, and workflow fit when the user reports a smell.

**Evaluation gate:** The anchor succeeds if future findings name the mess type and test at least one counter-interpretation using artifacts or workflow evidence.

**Branch experiment:** Optional if added to general Sensemaking guidance.

## Reasoning

The Status Classification vs Review Gate survived as the strongest candidate. It directly encodes the corrected inquiry's main distinction: `route_memory_status` records state, while Route Memory Review reconciles old route memory and writes `route_memory_review.md`.

The Operation Boundary Naming Gate survived because the failure was not only behavior. It was also a name creating an implied routine. "Route-Memory Preflight" carried more operational weight than "route_memory_status classification."

The Operation-Proliferation Critique Guard survived because prior Critique saw the extra preflight cost but did not make it decisive. Corrected Critique succeeded partly because conceptual cleanliness and operation proliferation became critical dimensions.

The User-Felt-Messiness Anchor survived with an evidence constraint. User discomfort exposed the boundary problem in this case, but future loops should not treat discomfort alone as proof. They should use it as a signal to inspect artifacts and workflow.

The Preflight Word Ban was killed. It overfits to one term. The problem is not the word "preflight"; the problem is using any name that implies a separate operation when the thing is only a status field.

Formalizing Route-Memory Preflight as a separate routine was killed for now. It may become useful if real usage proves route-memory status classification is too complex for Freshness Preflight, but current evidence points toward absorption into existing intake.

The broad MVL+ anti-proliferation rewrite was killed or deferred. One correction chain does not justify broad core changes. The better path is small gates with observable evaluation.

The apparent contradiction between prior and corrected findings is resolved by preserving behavior while changing lifecycle shape. Both agree that Navigation should consider route memory every time and should run full review only when needed. They differ on whether the cheap part is a named routine or a status classification inside existing intake. The corrected lifecycle is cleaner.

## Open Questions

### Monitoring

After the next three LOOP_DIAGNOSE findings involving workflow naming or artifact policy, check whether the proposed gates prevent accidental routine creation.

After the next three Navigation runs that record route-memory status, check whether `route_memory_status` inside intake is sufficient or whether a separate routine becomes justified.

### Blocked

Exact source placement is blocked until a materialization pass reads live MVL+, LOOP_DIAGNOSE, Sensemaking, Critique, and Navigation files.

### Refinement Triggers

Reopen this finding if a future inquiry again stabilizes a new named always-run step where the corrected model later shows it was only a status field.

Reopen this finding if the gates themselves become heavy enough that they create the process proliferation they were meant to prevent.

Reopen this finding if route-memory status classification grows its own nontrivial trigger, procedure, validation, and output.

## Diagnostic Verdict

**Overall:** ACTIONABLE.

- **Best-supported diagnosis:** The prior loop stabilized a named universal "Route-Memory Preflight" before testing whether the cheap every-run work was only a status classification inside existing intake.

- **Strongest maintenance candidate:** Status Classification vs Review Gate, followed by Operation Boundary Naming Gate.

- **Main uncertainty:** Exact source placement is unknown. This diagnostic proves the rule shape, not the implementation location.

- **Recommended next step:** Materialize the two primary gates in the least broad rule surface that will affect future LOOP_DIAGNOSE and artifact-policy MVL+ runs.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+

Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary

corrected_path:
devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation

human_correction:
The user said the answer still felt messy and asked to reevaluate it carefully, starting by understanding why the "cheap Route-Memory Preflight plus full Route Memory Review" model did not feel clean.

optional_context:
The prior inquiry fixed the project-level versus bounded split by saying every Navigation run should do a cheap Route-Memory Preflight. The corrected inquiry said that wording risked creating a new standalone side ritual and should instead be route-memory status classification inside normal Freshness Preflight or context intake.

diagnostic_goal:
Identify what the prior loop likely missed about naming, operation boundaries, and the difference between status classification and full review. Diagnose whether the failure was premature stabilization around "preflight," insufficient human/user perspective, or critique not attacking operation proliferation strongly enough. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.
```

</details>
