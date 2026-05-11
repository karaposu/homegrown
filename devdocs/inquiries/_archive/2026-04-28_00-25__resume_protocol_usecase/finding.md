---
status: active
refines: devdocs/inquiries/_archive/continuous_loop_priorities/finding.md
impacted_by: devdocs/inquiries/_archive/protocols_relevance_check/finding.md
---
# Finding: Resume Protocol Usecase

## Changes from Prior

**Prior path:** devdocs/inquiries/_archive/continuous_loop_priorities/finding.md

**Revision trigger:** The user asked what Resume is actually for, whether MVL/MVL+ already have an alternative, and whether the standalone protocol has any unique logic.

**What's preserved:** The prior finding was right that `homegrown/protocols/resume.md` is an orphan in the current runtime. MVL and MVL+ do not load it, and a cosmetic reference-only wire-up would be bad because it would preserve duplicate logic without making the file authoritative.

**What's changed:** The earlier delete recommendation should not be read as "Resume has no use." It should be read as "the extracted file is not currently operational." The standalone file contains a different, more advanced idea: telemetry-aware resume, meaning a resume operation that reads discipline verdicts before deciding whether to continue.

**What's new:** Resume now has a clearer three-layer model: basic inline continuation, telemetry-aware inquiry resume, and meta-loop traversal resume.

**Migration:** Keep using MVL/MVL+ inline resume now. Do not wire standalone Resume into MVL/MVL+ until verdict telemetry is standardized. Resolve `homegrown/protocols/resume.md` by either archiving/deleting it as premature or marking it explicitly dormant/future with activation prerequisites.

## Question

What is the main use case of the Resume protocol in Homegrown, does MVL/MVL+ already contain equivalent resume logic inline, and would using the separate Resume protocol add unique value?

A good answer should explain when Resume is useful, what effect it would have if used, whether MVL/MVL+ already have an alternative resume path inside their runners, whether the standalone Resume protocol contains unique logic, and what should be done with it now: keep, wire in, revise, or archive.

## Finding Summary

- **The main current use case of Resume is cross-session continuation.** If an MVL or MVL+ inquiry is interrupted, a user can pass the inquiry folder back to the runner and continue from the first missing discipline output.

- **MVL and MVL+ already implement that current use case inline.** Their resume branches read `_state.md`, `_branch.md`, and output file existence. MVL+ also checks that the inquiry is an extended flow.

- **The standalone `homegrown/protocols/resume.md` is not currently used by MVL/MVL+.** It is an extracted protocol file, but the runners do not load it.

- **The standalone Resume file does contain unique logic.** Its unique idea is telemetry-aware resume: read completed discipline outputs, look for `PROCEED`, `FLAG`, or `RE-RUN`, and route the loop based on those verdicts instead of blindly continuing because a file exists.

- **That unique logic is not ready for runtime use.** It depends on standardized verdict telemetry across the disciplines. Current source search showed the exact verdict format is only clearly established in Innovation, so Resume would mostly fall back to treating missing verdicts as `PROCEED`.

- **Do not wire standalone Resume into MVL/MVL+ now.** Immediate wire-up would add complexity, risk two sources of truth, and could conflict with MVL/MVL+'s current no-wait pipeline behavior.

- **The honest file-disposition choices are binary enough:** archive/delete `homegrown/protocols/resume.md` as a premature extraction, or keep it only if it is clearly marked dormant/future with explicit prerequisites. Leaving it active-looking and unused is the weak option.

## Finding

### 1. Resume Currently Means Basic Continuation

In the current Homegrown workflow, the main use case of Resume is simple and practical: continue an incomplete inquiry after interruption, context loss, a new session, or an agent handoff.

MVL and MVL+ already support this. Their inline resume branches read the inquiry folder, inspect `_state.md` and `_branch.md`, check which discipline output files exist, and continue from the first incomplete discipline. MVL+ also verifies that the inquiry is an extended pipeline before continuing.

That means the user is right to notice that the standalone Resume protocol is not needed for ordinary manual continuation. For the current Level 0 or Level 0.5 human-guided workflow, inline resume is enough.

### 2. The Standalone Resume File Is Not Just a Copy

`homegrown/protocols/resume.md` contains logic that MVL/MVL+ inline resume does not contain.

The inline runner logic asks: "Which discipline output file is missing?"

The standalone Resume protocol asks a stronger question: "Are the completed discipline outputs acceptable enough to continue from?"

It tries to answer that stronger question by scanning completed outputs for verdicts such as `PROCEED`, `FLAG`, and `RE-RUN`. If it finds a non-PROCEED verdict, it can stop and route the user toward override or rerun.

That makes standalone Resume a trust gate. It is not merely a persistence mechanism. It is meant to prevent the system from building new reasoning on top of weak, partial, or self-flagged prior reasoning.

### 3. The Unique Logic Is Premature Because Telemetry Is Missing

The standalone protocol depends on a telemetry contract: each discipline must reliably report a routable verdict.

That contract is not present across the full MVL+ pipeline. The exact `Overall: PROCEED / FLAG / RE-RUN` format is clearly present in Innovation, but not broadly standardized across Exploration, Sensemaking, Decomposition, and Critique.

Without that standard, Resume's distinctive behavior weakens. It falls back to treating missing verdicts as `PROCEED`, which makes it behave much like basic inline resume while adding more machinery.

This is why wiring it now would not give the project the benefit the file seems to promise. The missing piece is not only a runner hook. The missing piece is evidence that each discipline has produced a verdict worth routing on.

### 4. When Telemetry-Aware Resume Becomes Useful

Telemetry-aware Resume becomes useful when file existence is no longer a strong enough signal.

That happens in long-running inquiries, where a folder may contain stale or partial outputs.

It happens in agent handoffs, where the next agent needs to know whether it can trust previous artifacts.

It happens in user-interrupted runs, where a discipline may have produced a weak output before the session stopped.

It happens in meta-loop traversal, where a larger runner may revisit incomplete inquiry folders and should avoid building on bad frontiers.

It becomes especially important for future self-maintenance or autonomous loops. In those settings, the system needs to know not only what ran, but whether the prior step was good enough to continue from.

### 5. MVL Has an Alternative, But Only for the Basic Layer

MVL/MVL+ inline resume is a real alternative for the basic layer.

It is not a full alternative for telemetry-aware Resume.

The difference is:

```text
Inline MVL/MVL+ resume:
  Continue from first missing output file.

Standalone telemetry-aware Resume:
  Verify completed outputs first, then continue, flag, rerun, or stop.
```

So the answer is not "MVL already has everything Resume could ever do." The answer is "MVL already has the current continuation behavior, but not the future trust-gated behavior."

### 6. What Should Happen Now

Do not wire `homegrown/protocols/resume.md` into MVL/MVL+ now.

Runtime wire-up now has three problems. First, most disciplines do not yet emit the verdicts Resume needs. Second, Resume can wait on `FLAG` or `RE-RUN`, which conflicts with MVL/MVL+'s current no-wait pipeline behavior unless a routing policy is explicitly defined. Third, MVL/MVL+ already have inline resume logic, so adding a second active source of truth would invite drift.

The current file should not stay ambiguous.

If the priority is lean source hygiene, archive or delete `homegrown/protocols/resume.md` as a premature extraction. Preserve the concept in this finding and re-extract it later when telemetry exists.

If the priority is preserving future protocol vocabulary, keep `homegrown/protocols/resume.md`, but mark it visibly as dormant/future. The file should say it is not loaded by MVL/MVL+ and that activation requires standardized verdict telemetry, a FLAG/RE-RUN routing policy, and real runner integration.

Both choices are honest. The dishonest state is leaving the file active-looking while no runner loads it.

## Next Actions

### MUST

- **What:** Keep using MVL/MVL+ inline resume for current inquiry continuation.
  **Who:** MVL/MVL+ runner behavior.
  **Gate:** Until all MVL+ disciplines emit standardized routeable verdicts and a new Resume integration is explicitly designed.
  **Why:** This preserves the working current workflow and avoids adding runtime complexity without evidence inputs.

- **What:** Do not wire `homegrown/protocols/resume.md` into MVL/MVL+ now.
  **Who:** Any future protocol or runner edit touching Resume.
  **Gate:** Block this until verdict telemetry exists across Exploration, Sensemaking, Decomposition, Innovation, and Critique.
  **Why:** Wiring now would mostly behave like inline resume while creating drift and possible no-wait conflicts.

- **What:** Resolve the current `homegrown/protocols/resume.md` ambiguity.
  **Who:** The next protocol-folder cleanup.
  **Gate:** Before the next edit that presents `homegrown/protocols/` as an authoritative active protocol inventory.
  **Why:** The file should be archived/deleted as premature or clearly marked dormant/future; active-looking orphan files mislead future agents.

### COULD

- **What:** Add a manual `resume-check` protocol later.
  **Who:** Future Homegrown protocol work.
  **Gate:** After at least three disciplines emit standardized verdict telemetry.
  **Why:** A manual check could test whether telemetry-aware Resume catches real weak continuations before giving it runtime control.

- **What:** Move verdicts into structured `_state.md` fields instead of scanning markdown outputs.
  **Who:** Future state-schema work.
  **Gate:** When `_state.md` is revised for richer loop state or meta-loop integration.
  **Why:** Structured verdicts would be easier for runners to consume and less fragile than line-pattern matching.

### DEFERRED

- **What:** Real runtime wire-up of standalone Resume.
  **Gate:** Revive only when all MVL+ disciplines emit routeable verdicts, FLAG/RE-RUN policy is defined, and a regression test over sample inquiry folders exists.
  **Why (if revived):** This would turn Resume into a real trust gate for incomplete inquiries.

- **What:** Branch-level Resume for git/evolution-style self-maintenance.
  **Gate:** Revive only after Homegrown has an active branch-evaluation workflow where multiple evolved branches are compared by output evidence.
  **Why (if revived):** Inquiry-level Resume will not be enough when the system resumes and evaluates whole experimental branches.

## Reasoning

The exploration phase found a conflict between prior claims. The older `devdocs/inquiries/_archive/protocols_relevance_check/finding.md` treated RESUME as alive because resume logic is embedded in loop runners. The later `devdocs/inquiries/_archive/continuous_loop_priorities/finding.md` recommended deleting `homegrown/protocols/resume.md` because the extracted file was orphaned.

Both were partly right. Resume as an operational concern is alive. Inline MVL/MVL+ resume proves that. The extracted standalone file is not alive as runtime behavior. No runner loads it.

Sensemaking resolved the conflict by separating Resume into layers. Basic continuation is current and inline. Telemetry-aware continuation is unique but dormant. Meta-loop traversal resume is related but uses `_meta_state.md` and should not be confused with inquiry-level Resume.

Decomposition showed the main coupling problem. Standalone Resume is tightly coupled to verdict telemetry, and verdict telemetry is currently missing across most disciplines. Standalone Resume is also in tension with the no-wait MVL/MVL+ invariant because its current design can pause on `FLAG` or `RE-RUN`.

Innovation produced several possible paths. The strongest assembly was: use inline resume now, treat standalone Resume as a future trust gate, avoid wire-up before telemetry exists, and resolve the orphan file by archive/delete or explicit dormant status.

Critique killed immediate runtime wire-up. The prosecution was stronger because wire-up now lacks reliable verdict inputs, could create two sources of truth, and could conflict with no-wait execution. The defense that "CONCLUDE is loaded from a protocol file, so Resume should be too" failed because CONCLUDE runs at a natural terminal point, while Resume wants to gate mid-pipeline and depends on missing evidence.

Critique also killed cosmetic reference-only wire-up. A cheap pointer from MVL/MVL+ to `resume.md` would not make the file authoritative. It would only make drift harder to notice.

The surviving answer is layered. Inline resume is the current operational mechanism. Standalone Resume's unique future value is trust-gated continuation. Telemetry standardization is the activation prerequisite. The current file-disposition choice is archive/delete versus explicit dormant status.

## Open Questions

### Monitoring

- After the next 10 MVL+ inquiries, check whether any run produced a weak intermediate artifact that would have benefited from a resume-time quality gate.

### Blocked

- Whether telemetry-aware Resume should become runtime control is blocked until Exploration, Sensemaking, Decomposition, Innovation, and Critique all emit standardized routeable verdicts.

### Research Frontiers

- It remains open whether verdicts should live inside discipline markdown outputs or as structured fields in `_state.md`.

- It remains open how branch-level resume should work if Homegrown evolves toward git-branch self-maintenance and branch competition.

### Refinement Triggers

- Reopen this finding if `homegrown/protocols/resume.md` is marked dormant, then remains untested after 30 additional inquiries.

- Reopen this finding if a future meta-loop uses incomplete MVL+ inquiry folders as active frontiers and repeatedly encounters stale, weak, or self-flagged artifacts.

- Reopen this finding if standardized verdict telemetry is added to all five MVL+ disciplines.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ what is the main usecase of resume protocol? we dont use it , if we are able to use it what effect it will have ... it is useful when? does MVL has resume alternative protocol inside? or resume has unique logic?
```

</details>
