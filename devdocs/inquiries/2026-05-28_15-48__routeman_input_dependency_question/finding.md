---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: routeman_input_dependency_question

## Question

The user challenged a claim the agent made in conversation about routeman's input contract. The agent had said: *"Without ANY input (just `/routeman` typed alone), routeman has nothing to enumerate FROM. The 'current state' is undefined; the 'goal' is undefined. The discipline can't operate without those."* The user pushed back with two questions: (a) *why?* and (b) *are you saying routeman is dependent on existence of inquiries folder?*

The inquiry's question was therefore two-part: does routeman strictly REQUIRE explicit input (state + goal), AND is it specifically dependent on `devdocs/inquiries/` (the project's inquiry-folder convention) — or was the agent's framing over-claimed?

The goal was a structural verdict per observation target, grounded in routeman's actual spec at `cognitive_harness/routeman/SKILL.md` and `cognitive_harness/routeman/references/routeman.md`, plus a corrected framing the user could use in future conversations.

## Finding Summary

- **Verdict: the agent's prior claim was literally-true-but-misleading.** It was correct on a narrow reading (state + goal as cognitive concepts ARE required for routeman to enumerate). It was misleading on the in-context reading (the conversational antecedent was *"invoking routeman in the project without feeding a folder"*; the response implied that without a folder no input is available, which is false per the spec).

- **Routeman's input contract has two distinct axes.** Axis 1 (cognitive necessity): state + goal as concepts are REQUIRED per `references/routeman.md` §3.2. Axis 2 (source flexibility): how state + goal are supplied is FLEXIBLE per `SKILL.md` Step 1 — a folder path of any type, raw text, or an implicit goal which the discipline surfaces during operation. The agent's claim conflated the two axes.

- **Routeman is NOT dependent on `devdocs/inquiries/`.** The spec says "folder path," not "inquiry folder." The canon doc at `docs/canon/runtime_environment/folder_based.md` establishes WHERE inquiries live as a `/MVLw` runner convention, not as a routeman input contract. Inquiry folders are the most common invocation shape but not a spec requirement.

- **"Invoking routeman in the project without a folder" has two spec-supported answers.** (a) Raw text — the user types `/routeman` followed by prose describing project state + goal; the discipline parses it per `SKILL.md` Step 1 branch 2. (b) Project-level folder — the user points routeman at the project root, a codebase subdirectory, the canon docs, or any other relevant project-level folder; the discipline reads relevant files via the read-policy in `references/routeman.md` §3.2 (the 14-49 amendment's 4-tier read-policy). In both cases the output lands at `devdocs/routeman/<name>.md` per the standalone-discipline-invocation pattern in the folder-based canon doc.

- **Both sides of the user's two-part challenge were well-founded.** The "why?" correctly identified that the spec's modal language ("should supply") is softer than "must," and that §3.2's "Required" labeling is at the COGNITIVE level (concepts), not the input-shape level. The "are you saying..." correctly identified that the framing implied an inquiry-folder dependency that the spec doesn't impose.

- **`devdocs/routeman_user_stories.md` has an over-narrow framing.** All 10 stories use "the inquiry folder" as the invocation shape. The illustrative narrowing directly caused this conversation's confusion. A lightest-touch amendment is recommended: a clarifying note at the top of the file (minimum) and a new Story 11 illustrating a non-inquiry-folder case (optional, preferable).

- **A wider question is flagged but not diagnosed.** Whether the agent's mental model systematically narrows routeman to inquiry contexts (beyond this specific case) is a standing question for future inquiries; this finding addresses only the specific case.

## Finding

The conversation that produced this inquiry began with the user asking what it means to invoke routeman "in the project, without feeding a folder." The agent answered with a claim that — read narrowly — was true per the spec but — read in context — implied a constraint the spec doesn't impose. The user spotted the gap and pushed back. This finding diagnoses what the agent got right, what it got wrong, and what the precise corrective framing should be. The diagnosis is grounded in two spec files and one canon doc, with each verdict cited to specific text.

### 1. Routeman's input contract has two distinct axes

Routeman's spec — at `cognitive_harness/routeman/SKILL.md` Step 1 and `cognitive_harness/routeman/references/routeman.md` §3.2 (Reception) and §1.4 (vocabulary) — establishes a contract with two structurally distinct axes. Conflating them was the root of the dispute.

| Axis | Status | Spec evidence |
|---|---|---|
| **Axis 1 — Cognitive necessity.** State + goal AS CONCEPTS that the discipline operates on. | REQUIRED | `references/routeman.md` §3.2 labels these "Required." §1.4 vocabulary entries say "Exogenous; received as input." |
| **Axis 2 — Source flexibility.** How state + goal are supplied to the discipline. | FLEXIBLE | `SKILL.md` Step 1: *"If the input is a folder path, read the relevant files to reconstruct the current state. If the input is raw text, parse it for state + goal. If the goal is implicit, surface it explicitly before proceeding."* Three branches; no privileged source. |

The spec doesn't use the phrase "two axes" — that's descriptive labeling of what's already structurally distinct in the spec text. Axis 1 is what makes routeman a directed discipline (it enumerates moves TOWARD a goal, FROM a state — both concepts must be reconstructable). Axis 2 is what makes routeman applicable across contexts (inquiry folders, project folders, raw-text invocations, etc. — anything that supplies the two concepts).

The agent's prior claim ("the discipline can't operate without those") was talking about Axis 1 but was offered in response to a question about Axis 2 — what it means to invoke routeman without a folder. The response was true on Axis 1 (concepts required) but misleading on Axis 2 (it implied that without a folder, no input is available; whereas raw text is a first-class source per the spec).

### 2. Per-observation-target verdict

| OT | Verdict | Spec citation |
|---|---|---|
| **OT1 — Input necessity (state + goal required?)** | **YES, at the cognitive level.** Routeman needs state + goal as concepts to enumerate next moves. | `references/routeman.md` §3.2 ("Required"); §1.4 ("Exogenous; received as input"). |
| **OT2 — Inquiries-folder dependency** | **NO.** Routeman accepts ANY folder path or raw text. Folder TYPE is unconstrained per the spec. Inquiry folders are the most common invocation shape (because `/MVLw` creates them) but are not a routeman input requirement. | `SKILL.md` Step 1's three "if" branches contain no folder-type restriction. The canon doc `docs/canon/runtime_environment/folder_based.md` establishes WHERE inquiries live (`devdocs/inquiries/`) as a `/MVLw` runner convention, NOT as a routeman input contract. |
| **OT3 — Prior agent claim re-examination** | **Literally-true-but-misleading.** | See decomposition below. |

The OT3 verdict decomposes the prior claim into its narrow reading and its in-context reading. This isn't hedging — narrow is TRUE; in-context is FALSE; the diagnosis names both with their truth values explicitly.

| Reading | Verdict | Why |
|---|---|---|
| **Narrow / literal** — "the discipline needs state + goal as cognitive concepts" | **TRUE** | Matches §3.2's Required labeling at the cognitive level. |
| **In-context** — "without an inquiry folder, no input is available" (the reading implied by the conversational antecedent — the user asked about invoking routeman in the project without a folder) | **FALSE** | Raw text is a first-class input shape per `SKILL.md` Step 1 branch 2. "No folder" does not mean "no input." Folder-of-any-type also satisfies the source-flexibility axis. |

### 3. The two spec-supported project-invocation paths

The user's original question — "invoking routeman in the project without feeding a folder" — has a real, spec-supported answer. Two paths.

| Path | Input shape | How routeman parses it | Output location |
|---|---|---|---|
| **Path A — Raw text input** | Prose describing project state + goal (or just goal; state surfaced from conversation context per `SKILL.md` Step 1's implicit-goal clause) | `SKILL.md` Step 1: *"If the input is raw text, parse it for state + goal. If the goal is implicit, surface it explicitly before proceeding."* | `devdocs/routeman/<name>.md` per the standalone-discipline-invocation pattern in `docs/canon/runtime_environment/folder_based.md` (the canon's "standalone /surfacing one-offs at `devdocs/surfacing/` etc." generalizes to any discipline) |
| **Path B — Project-level folder input** | Project root, codebase subdirectory, canon docs folder, or any other relevant project-level folder | `SKILL.md` Step 1: *"If the input is a folder path, read the relevant files..."*; read-policy per `references/routeman.md` §3.2 (the 14-49 amendment's 4-tier MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY) determines which files are read | `devdocs/routeman/<name>.md` per the same standalone-discipline-invocation pattern |

Both paths are spec-supported, not workarounds. The prior framing under-emphasized both.

### 4. The corrected framing the user can use

Three drop-in versions for different conversational contexts. Pick by length and attribution-needs.

**Version A — Full structural** (for fresh contexts where the spec needs grounding):

> Routeman's input contract has two distinct axes. Conflating them is the error my prior claim made.
>
> - **Axis 1 — Cognitive necessity.** Routeman needs state + goal AS CONCEPTS to enumerate next moves. This is what `references/routeman.md` §3.2 labels "Required." My prior claim was true on this axis: without state + goal somehow supplied, the discipline has nothing to enumerate from.
> - **Axis 2 — Source flexibility.** How state + goal are supplied is unconstrained. `SKILL.md` Step 1 explicitly accepts: (a) a folder path of any type — inquiry folder, project root, codebase subdir, canon docs, etc.; (b) raw text describing state + goal; (c) implicit goals which the discipline surfaces during operation. My prior claim was misleading on this axis: it implied that without an inquiry folder no input is available, which is false.
>
> So "invoking routeman in the project without a folder" has a real answer: either supply raw text describing the project state + goal, or point routeman at a project-level folder (project root, codebase subdir, etc.). The output lands at `devdocs/routeman/<name>.md` per the canon's standalone-discipline-invocation pattern.
>
> **Routeman is not bound to `devdocs/inquiries/`.** That's a `/MVLw` runner convention for where inquiries live, not a routeman input contract.

**Version B — Terse TL;DR** (for context-rich moments where the user already has the spec in mind):

> Quick corrective: I conflated two axes of routeman's input contract. State + goal are REQUIRED as concepts (Axis 1, true per §3.2). The SOURCE of state + goal is FLEXIBLE — folder of any type, raw text, or implicit-then-surfaced (Axis 2, per `SKILL.md` Step 1). Routeman is not bound to the `inquiries/` folder. "Invoking in the project without a folder" works two ways: raw text, or a project-level folder. Output → `devdocs/routeman/`. Your challenge was well-founded on both fronts.

**Version C — Attribution-neutral** (for paste-into-new-conversation contexts where the speaker is not the same agent who made the original claim):

> Routeman's input contract has two axes per spec. Axis 1 (cognitive necessity): state + goal as concepts are REQUIRED (`references/routeman.md` §3.2). Axis 2 (source flexibility): how state + goal arrive is FLEXIBLE — any folder path, raw text, or implicit-then-surfaced (`SKILL.md` Step 1). Routeman is NOT bound to `devdocs/inquiries/` — that's a `/MVLw` runner convention, not routeman's contract. "In the project without a folder" is supported via raw text input or project-level folder input; output lands at `devdocs/routeman/<name>.md`.

### 5. The user's challenge was well-founded on both fronts

Both clauses of the user's challenge held up under spec reading.

- **"Why?"** — the push for grounding was right. The spec uses "should supply" (modal language), not "must"; and §3.2's "Required" labeling is at the COGNITIVE level (state + goal as concepts), not at the input-shape level. So "the discipline can't operate without those" overstated what the spec actually mandates as a hard precondition — the spec has a graceful-degrade path (*"If the goal is implicit, surface it explicitly before proceeding"*) rather than a halt.
- **"Are you saying routeman is dependent on existence of inquiries folder?"** — this challenge mapped directly onto the misleading framing the prior claim created. The spec accepts raw text OR any folder path; there's no `devdocs/inquiries/` dependency in the input contract. The reading correctly identified an over-narrow inference.

Defending the prior framing would have been Status Quo Bias — protecting an established phrasing rather than re-checking the spec. The user caught a real gap, and the diagnosis names the gap explicitly rather than rounding it off.

### 6. The `routeman_user_stories.md` framing caused the downstream confusion

All 10 stories in `devdocs/routeman_user_stories.md` use phrasings like "Invoke `/routeman` pointed at the inquiry folder" / "the inquiry folder containing notes." The framing is consistent within itself but presents routeman as inquiry-folder-bound in every example. The spec is broader; the file is narrower.

The narrowing in user_stories likely created the user's reasonable inference that routeman needs an inquiries folder. The file is `devdocs/routeman_user_stories.md` (illustrative), not `cognitive_harness/routeman/SKILL.md` (the spec) — but readers form mental models from the illustration, and the illustration showed only one input shape. This conversation is direct evidence that the narrowing causes downstream confusion. A lightest-touch amendment is warranted (see Next Actions COULD-1).

## Next Actions

### MUST

(none — the diagnostic verdict is the deliverable; no spec change is required because the spec is already correct.)

### COULD

- **COULD-1 — Amend `devdocs/routeman_user_stories.md`.**
  - **What:** Add a clarifying note + (optionally) a new Story 11.
  - **Who:** the user, when next editing the file.
  - **Gate:** observable — when the user next opens the file for editing, or when a new user_stories reader signals confusion about input shapes.
  - **Why:** the file's "the inquiry folder" framing across all 10 stories caused this conversation's confusion. Lightest-touch correction prevents future readers from inferring an inquiry-folder dependency that the spec doesn't impose.

  **Recommended amendment shape** (intervention shape: ADD-CONTENT; preserves the existing 10 stories unchanged):

  - **MINIMUM (required to prevent narrowing):** clarifying note at the top of the file, before Story 1:

    > **Note on input shapes.** The 10 stories below all illustrate routeman invoked with an inquiry folder as input — this is the most common invocation pattern in this project (`/MVLw` creates inquiry folders; routeman runs on them). Per `cognitive_harness/routeman/SKILL.md` Step 1, routeman ALSO accepts: (a) raw text describing state + goal; (b) any folder path — project root, codebase subdir, canon docs, etc. — not just inquiry folders. Story 11 illustrates one of these non-inquiry-folder cases.

  - **OPTIONAL (preferable but not required):** new Story 11 illustrating one non-inquiry-folder case, appended after Story 10. Example:

    > **Story 11 — Standalone project-scope invocation.** A reader exploring a codebase wants to enumerate the next-move space for the codebase as a whole — what understanding gaps exist, what should be modeled first, what design decisions need adjudication. They invoke `/routeman` with either (a) raw text describing the codebase's current state + the exploration goal, or (b) the codebase's root directory as the folder path. Routeman reads the inputs via the read-policy (or parses the raw text), enumerates moves across the 16-type taxonomy, and writes the route map to `devdocs/routeman/<suitable-name>.md` per the standalone-discipline-invocation pattern (canon `docs/canon/runtime_environment/folder_based.md`). No inquiry folder involved; no `_route.md` (first invocation; nothing to read); the output is one route map produced once.

    (The output filename is illustrative; the canon's pattern is `devdocs/<discipline>/<suitable-name>.md`.)

  The minimum (the note) is the load-bearing intervention. The optional (Story 11) adds discoverability — readers who skim notes still encounter the alternative in a concrete illustration.

### DEFERRED

(none.)

## Reasoning

### Why this verdict held

The verdict — agent's prior claim was literally-true-but-misleading; routeman's input contract has two axes; routeman is not bound to `devdocs/inquiries/` — survived adversarial testing on three independent dimensions.

- **Spec-grounding rigor.** Every claim is cited to specific spec text — `SKILL.md` Step 1's three "if" branches; `references/routeman.md` §3.2's "Required" label; §1.4's "Exogenous; received as input" vocabulary; canon doc's runner-convention scope. The strongest objection ("the spec doesn't say 'two axes' — that's invented framing") collapsed on the structural evidence: the spec HAS three branches in Step 1 plus the Required labeling at §3.2 — naming the distinction is descriptive, not invented.
- **User-perspective survival.** The user's most likely objection ("calling my prior claim LTBM is hedging — either it was true or it was wrong") was rebutted by the binary decomposition (narrow TRUE; in-context FALSE; readings explicit). This isn't hedging; it's a precise diagnosis of a claim that was ambiguous between two readings.
- **Meta-fidelity.** The diagnosis itself avoids the error pattern it diagnoses. The LTBM verdict enumerates the two readings and assigns truth-values per reading rather than producing a new claim that is itself ambiguous.

### Alternatives that were considered and killed

- **"The agent's claim was simply correct"** — KILLED. The claim was made in a conversational context (the user had just asked about non-folder invocation in the project); reading it in context, it implied an inquiry-folder dependency that the spec doesn't impose. The narrow reading is true but the in-context reading is false.
- **"The agent's claim was simply wrong"** — KILLED. The cognitive-necessity portion of the claim is correct per §3.2's "Required" labeling. Calling it fully wrong over-corrects.
- **"Routeman needs no input"** — KILLED. State + goal as concepts must be reconstructable for the discipline to enumerate; this is the axis-1 requirement. Over-correction in the other direction.
- **"Routeman is bound to the inquiries folder"** — KILLED. The spec says "folder path" generically; the canon doc establishes inquiry-folder location as a `/MVLw` runner convention, not as routeman's contract. The canon's standalone-discipline-invocation pattern explicitly supports outputs at `devdocs/<discipline>/` for any discipline.
- **REPAIR (modify existing user_stories) instead of ADD-CONTENT (note + new story)** — KILLED. REPAIR would require 10 edits across the file; ADD-CONTENT requires 2 (one note, one optional story). REPAIR's higher edit cost + risk of inconsistency lost to ADD-CONTENT's lighter-touch profile.
- **REORGANIZE-WITHOUT-ADDING (group existing 10 stories under "inquiry folder input")** — KILLED. Doesn't actually widen the framing; readers still infer inquiry-folder-only because no alternative is shown.

### Refinements applied during Critique

Critique surfaced three light REFINE targets that were applied to the deliverable before this finding was assembled:

- **Q4 added Version C (attribution-neutral)** — for paste-into-new-conversation contexts where the speaker is not the original agent. The full and terse versions use first-person attribution ("my prior claim"); Version C drops it for portability.
- **Q6 added explicit MINIMUM-vs-OPTIONAL framing** — clarifies that the note alone satisfies the corrective; Story 11 is preferable but not required.
- **Q7 re-labeled evidence as "rationale for flagging"** — prevents the frontier flag from reading as a sneaking partial diagnosis. The wider-pattern question stays open; the evidence section now frames why the question was flagged rather than which way it might resolve.

## Open Questions

### Research Frontiers

- **Does the agent's mental model systematically narrow routeman to inquiry contexts beyond this specific case?** Rationale for flagging (not a partial diagnosis): (a) all 10 stories in `devdocs/routeman_user_stories.md` framed input as "the inquiry folder" before the COULD-1 amendment is applied; (b) the agent's prior claim in this conversation made the same narrowing inference under a different prompt; (c) the agent did broaden the framing when challenged, which points toward "isolated case" rather than "systematic." These observations motivate the flag but do not resolve it; resolution requires future inquiries observing the agent's framing across additional routeman-related conversations.

  This finding diagnoses the specific case (the agent's prior claim in this conversation) and recommends a specific documentation corrective (COULD-1). The wider pattern is NOT addressed here. A future inquiry, with more invocation evidence, could diagnose it; this finding does not pre-commit to its verdict.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVLw

routeman typed alone), routeman has nothing to enumerate FROM. The "current state" is undefined; the     
  "goal" is undefined. The discipline can't operate without those.        

why? 


are yousaying routeman is depended of existance of inquiries folder?
```

</details>
