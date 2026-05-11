---
status: active
refines: devdocs/inquiries/2026-04-28_07-35__protocol_priority_top_5/finding.md
impacted_by:
  - devdocs/inquiries/2026-04-27_21-38__loop_diagnose_git_self_maintenance/finding.md
  - devdocs/inquiries/2026-04-28_07-52__discipline_verdict_telemetry_value_risk/finding.md
---
# Finding: Loop Diagnose Protocol Integration

## Changes from Prior

**Prior path:** devdocs/inquiries/2026-04-28_07-35__protocol_priority_top_5/finding.md

**Revision trigger:** The user asked whether `loop_diagnose` really means a protocol for comparing two MVL/MVL+ inquiry outputs with the human correction as evidence, and whether MVL/MVL+ should load that protocol when the run is for self-maintenance.

**What's preserved:** The prior ranking remains right. `loop_diagnose` should be the first practical self-maintenance protocol because correction chains are the best evidence Homegrown currently has.

**What's changed:** The answer is now more concrete. `loop_diagnose` should be a protocol wrapper around MVL+, not merely an idea and not a new discipline.

**What's new:** The recommended integration sequence is now explicit: create `homegrown/protocols/loop_diagnose.md`, use it manually with MVL+ once, then add a small explicit MVL+ hook that loads the protocol before `_branch.md` creation.

**Migration:** Treat the user's proposed diagnostic prompt as the semantic core of `loop_diagnose.md`, but formalize it into fields, required reads, output sections, evidence rules, and confidence limits.

## Question

Is `loop_diagnose` basically a protocol for comparing a weak prior MVL/MVL+ inquiry against a later corrected inquiry using the human correction as evidence, and how should that protocol be integrated with MVL/MVL+?

A good answer should clarify what `loop_diagnose` is, what inputs it needs, what output it should produce, whether it is itself a discipline or an MVL/MVL+ wrapper protocol, and how MVL/MVL+ should load or invoke it without breaking the existing atomic-loop logic.

## Finding Summary

- **Yes, the user's description is basically the intended `loop_diagnose` operation.** It compares a weak prior inquiry, the human correction, and a later improved inquiry to understand what the earlier loop likely missed.

- **The user's message should not stay as a one-off prompt.** It should become `homegrown/protocols/loop_diagnose.md`, with named inputs and required output sections.

- **`loop_diagnose` should not be a new discipline now.** MVL+ should remain the reasoning engine. The protocol only frames a special kind of MVL+ inquiry.

- **The required inputs should be explicit:** `prior_path`, `corrected_path`, `human_correction`, and optional extra context.

- **The protocol must require full artifact reads.** It should read `_branch.md`, `_state.md`, `finding.md`, and `docarchive/` files for both inquiry folders when those files exist.

- **The diagnostic output should be evidence-backed and confidence-limited.** It can say "likely Sensemaking failure" or "possible Critique weakness" only when the artifacts support that attribution.

- **Integration should happen in two steps.** First create and manually use `loop_diagnose.md`; after one real use, add an explicit MVL+ hook.

- **The hook should not silently infer diagnosis mode.** It should load the protocol only when the user explicitly asks for `loop_diagnose`, correction-chain diagnosis, or self-maintenance diagnosis.

## Finding

### 1. What `loop_diagnose` Means

`loop_diagnose` is a lightweight protocol for turning a correction chain into a diagnostic MVL+ inquiry.

A correction chain has three main parts:

```text
weak prior inquiry
+ human correction or dissatisfaction
+ later improved inquiry
```

The human correction is not incidental context. It is the strongest signal because it shows what the earlier loop failed to satisfy.

The later improved inquiry is also evidence, but it is not automatically ground truth. It shows one better direction, not a perfect answer.

The diagnostic question is:

```text
Given the weak prior inquiry, the human correction, and the later improved inquiry,
what did the earlier loop likely miss, why did it miss it, and what maintenance
candidates follow?
```

That is the same operation the user described. The protocol should make it repeatable.

### 2. Why It Should Be A Protocol, Not A New Discipline

MVL+ should remain the cognitive engine.

Correction-chain diagnosis needs the whole MVL+ stack. Exploration maps both inquiry folders. Sensemaking interprets the correction signal. Decomposition separates possible failure locations. Innovation proposes maintenance candidates. Critique tests whether the attribution is supported.

That means `loop_diagnose` should not become `homegrown/loop-diagnose/SKILL.md` yet.

A new skill would make `loop_diagnose` look like a new primitive. That is premature because there are not enough diagnostic examples proving that it has a distinct cognitive method beyond MVL+ applied to a diagnostic question.

The better role is:

```text
loop_diagnose.md = input/output contract
MVL+ = reasoning engine
finding.md = durable diagnostic record
```

### 3. What The Protocol Should Require

The first version of `homegrown/protocols/loop_diagnose.md` should require explicit fields:

```text
prior_path:
corrected_path:
human_correction:
optional_context:
diagnostic_goal:
```

It should require reading both inquiry folders fully enough to compare them:

- `_branch.md`
- `_state.md`
- `finding.md`
- `docarchive/exploration.md` when present
- `docarchive/sensemaking.md` when present
- `docarchive/decomposition.md` when present
- `docarchive/innovation.md` when present
- `docarchive/critique.md` when present
- any root discipline files that have not yet been archived

This matters because CONCLUDE moves discipline outputs into `docarchive/`. A diagnostic that reads only `finding.md` will often miss where the earlier loop actually went wrong.

### 4. What The Diagnostic Output Should Include

The output should not simply say "Sensemaking failed" or "Critique failed."

It should produce failure hypotheses with evidence and confidence:

```text
Failure hypothesis:
Evidence:
Confidence:
Affected discipline or runner stage:
Shortcoming type:
Maintenance candidate:
Evaluation gate:
```

The "affected discipline or runner stage" can include:

- Exploration
- Sensemaking
- Decomposition
- Innovation
- Critique
- CONCLUDE
- loop framing
- orchestration
- context elicitation

The protocol should allow "unknown" or "mixed" attribution. That is important. Some failures are caused by bad initial framing or missing context, not by a single discipline.

### 5. How MVL+ Should Load It

Do not edit MVL+ first.

First create `homegrown/protocols/loop_diagnose.md`.

Then run one diagnostic manually, using MVL+ and the protocol file as context.

After that first real use, add a small explicit hook to `homegrown/MVL+/SKILL.md`:

```text
If NEW input explicitly asks for `loop_diagnose`, correction-chain diagnosis,
or self-maintenance diagnosis, read `homegrown/protocols/loop_diagnose.md`
before creating `_branch.md`. Use that protocol to frame the inquiry question,
goal, context, and required reads. Then run the normal E -> S -> D -> I -> C
pipeline unchanged.
```

This hook should happen before `_branch.md` creation because the protocol shapes the inquiry question and context.

The hook should not replace the pipeline. It should only shape the input.

### 6. What Classic MVL Should Do

Classic MVL can mention `loop_diagnose`, but it should not be the default diagnostic engine.

Correction-chain diagnosis usually benefits from Exploration and Decomposition. Classic MVL lacks both.

The clean MVL behavior is a note:

```text
For correction-chain diagnosis or self-maintenance diagnosis, prefer MVL+,
because the task usually requires reading multiple inquiry folders and
separating possible failure locations before innovation and critique.
```

If a correction chain is very small, classic MVL can still run it. But the default recommendation should be MVL+.

### 7. What Not To Build Yet

Do not build a separate `loop-diagnose` skill now.

Do not add silent automatic inference where MVL/MVL+ guesses from vague wording that the user wants diagnosis mode.

Do not wait for meta-loop automation. Meta-loop can eventually discover correction chains and launch diagnostics, but `loop_diagnose` is useful before that.

Do not require exact root-cause attribution. The output should behave like a differential diagnosis: ranked hypotheses with evidence and confidence.

## Next Actions

### MUST

- **What:** Create `homegrown/protocols/loop_diagnose.md`.
  **Who:** Homegrown protocol maintainer.
  **Gate:** Before the next correction-chain diagnostic run.
  **Why:** Turns the user's repeated diagnostic prompt into a reusable input/output contract.

- **What:** Make `loop_diagnose.md` require `prior_path`, `corrected_path`, and `human_correction`.
  **Who:** `loop_diagnose.md`.
  **Gate:** At protocol creation.
  **Why:** Prevents diagnostics from guessing which artifact is old, which is improved, and what the human correction signal was.

- **What:** Require reading both inquiry folders, including `docarchive/`.
  **Who:** `loop_diagnose.md`.
  **Gate:** At protocol creation.
  **Why:** The discipline outputs often contain the evidence needed to attribute failure.

- **What:** Use MVL+ manually with the protocol once before editing MVL/MVL+ hooks.
  **Who:** User or agent running the next diagnostic.
  **Gate:** First real correction-chain diagnosis after the protocol exists.
  **Why:** Validates the protocol shape before changing runner behavior.

### COULD

- **What:** Add an explicit MVL+ hook after the first manual use.
  **Who:** `homegrown/MVL+/SKILL.md`.
  **Gate:** After one completed diagnostic finding using `homegrown/protocols/loop_diagnose.md`.
  **Why:** Makes the protocol ergonomic without changing the MVL+ pipeline.

- **What:** Add a classic MVL note that recommends MVL+ for correction-chain diagnosis.
  **Who:** `homegrown/MVL/SKILL.md`.
  **Gate:** When adding the MVL+ hook or after the first user tries to run loop diagnosis through classic MVL.
  **Why:** Prevents classic MVL from being treated as equally strong for multi-folder diagnostic tasks.

### DEFERRED

- **What:** Promote `loop_diagnose` to a full skill or discipline.
  **Gate:** Reopen only after 5 to 10 diagnostic MVL+ findings show a stable internal method that cannot be explained as ordinary MVL+ on a diagnostic question.
  **Why (if revived):** A distinct skill may become justified later, but only after repeated evidence.

- **What:** Add silent automatic diagnosis-mode inference to MVL/MVL+.
  **Gate:** Reopen only after at least 10 successful explicit diagnostic runs produce stable trigger language with no confusing false positives.
  **Why (if revived):** Automation may reduce user ceremony later, but now it risks wrong inquiry framing.

- **What:** Let meta-loop own correction-chain diagnosis.
  **Gate:** Reopen after meta-loop has at least five selection traces and can launch MVL+ inquiries reliably.
  **Why (if revived):** Meta-loop can eventually discover and traverse correction chains, but this should not block the current protocol.

## Reasoning

Exploration confirmed that `homegrown/protocols/loop_diagnose.md` does not exist yet. It also confirmed that prior findings already define `loop_diagnose` as a diagnostic MVL+ pattern, not a new discipline.

Sensemaking resolved the central ambiguity. The user's proposed message is the right operational core, but it needs fields and guardrails. The protocol should preserve the human correction as evidence, require full artifact reads, and prevent overconfident attribution.

Decomposition showed the main dependency order. The project should define the protocol before editing the runner. The hook depends on the protocol because the hook needs to know what to load and how to frame `_branch.md`.

Innovation killed prompt-only diagnosis as the long-term pattern. A manually written prompt can work once, but it will vary across runs and agents.

Innovation killed automatic inference for now. Silent mode switching would be too risky because the system cannot reliably infer self-maintenance intent from vague wording.

Critique killed a separate `loop-diagnose` skill for now. The prosecution was that a new skill would violate the atomic-loop principle and harden a method before examples prove it is distinct.

Critique preserved the protocol-file-first design. The defense was that a protocol file is small, safe, and useful immediately.

Critique preserved the explicit MVL+ hook as the second step. The defense was that the hook only loads a protocol before `_branch.md` creation and leaves E -> S -> D -> I -> C unchanged.

The final answer is therefore: yes, the user's proposed message is basically right, but it should be turned into a protocol wrapper that MVL+ can use, not a new discipline and not silent automation.

## Open Questions

### Monitoring

- After the first completed `loop_diagnose` finding, check whether the protocol produced concrete maintenance candidates or only a narrative diagnosis.

- After three completed `loop_diagnose` findings, check whether the input and output sections are stable enough to add lifecycle frontmatter.

### Blocked

- MVL+ hook wording is blocked until `homegrown/protocols/loop_diagnose.md` exists.

- Promotion to a full skill is blocked until 5 to 10 diagnostic MVL+ findings show a distinct repeated method.

### Research Frontiers

- It remains open whether diagnostic inquiry folders should live inside the normal timestamped `devdocs/inquiries/` store or under a `diagnostics/` subfolder.

- It remains open which failure-type taxonomy will be most useful after several real diagnoses.

### Refinement Triggers

- Reopen this finding if manual `loop_diagnose` use feels too cumbersome after one real diagnostic run.

- Reopen this finding if a diagnostic run cannot attribute failure without more structured telemetry from each discipline.

- Reopen this finding if users repeatedly invoke classic MVL for correction-chain diagnosis despite the MVL+ recommendation.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+

- **Rank 1: `loop_diagnose`.** A lightweight protocol/template for running MVL+ on correction chains: weak prior inquiry, user correction, improved later inquiry. This is the highest priority because it captures the best evidence Homegrown currently has.

i have a question regardin this. what u mean is this ? : we will have a protocol for comparing 2 MVL outputs, something like

rearead path_A files, and take a note to the human input and understand that this input shows a direction or guidance or shows an error of previous related MVL run of path B,
i want you to also reread path B files fully including docarchive ones and use the humans guidance on new MVL loop and new MVL loops findings to understand what went wrong with path B loop. Why it did not produced expected results, What discipine had the short coming and what was the short coming type,

and the protocol is basically above message? and it will be loaded to MVL skill prompt? how ? maybe just a "if MVL is being called for self maintanance , load self maintance diagnose protocol from protocols/loop_diagnose.md " is enough ?

[User also pasted the current MVL skill body for reference; omitted here because the source file is `homegrown/MVL/SKILL.md`.]
```

</details>
