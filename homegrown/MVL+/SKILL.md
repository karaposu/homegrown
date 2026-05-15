name: MVL+
description: Run the Extended Cognitive Loop (Exploration → Sensemaking → Decomposition → Innovation → Critique) on any question. Always the full pipeline. If the question isn't answered, loop again.

# /MVL+ — The Extended Cognitive Loop

(run mvl skills one by one , not at once... and do not use subagents!, And the order is skill run, write it's file, go the next skill and so on. Not run all skills and write all docs...)

Run Exploration → Sensemaking → Decomposition → Innovation → Critique on any question. Always the full pipeline. No classification. No variable pipelines. Each step feeds the next. If the question isn't answered after C, loop again with a refined focus.

This is the extended form of the cognitive loop. `/mvl` (classic) runs only S → I → C. `/mvl+` adds Exploration (map territory) and Decomposition (partition complexity) to the first phase. Use `/mvl+` as the default for new inquiries; use `/mvl` classic for simple well-defined problems when speed matters.




## Discipline Workspace Invariant

Each discipline must run in its own focused workspace. The purpose is not merely to create files in order; the purpose is to let each discipline produce correct output from its own frame and from the prior discipline's actual saved result.

For the current discipline:

1. Load only the current discipline's spec and required references.
2. Use `_branch.md`, `_state.md`, and already-saved prior discipline outputs as the discipline's input.
3. Do not draft, precompute, or write outputs for later disciplines while executing the current discipline.
4. Write only the current discipline's canonical output file in the inquiry root.
5. Attempt structural check for that output.
6. If `tools/structural_check.sh` is unavailable, manually check the discipline's required structure and record the result in `_state.md`.
7. Update `_state.md` to check off the current discipline, summarize the check result, and name the next discipline.

Only after this handoff is committed may the next discipline begin.

Invalid compact execution patterns:

- drafting or writing outputs for later disciplines during the current discipline's workspace;
- writing two or more discipline outputs before the prior discipline has a committed `_state.md` handoff;
- writing all discipline outputs and `finding.md` in one edit;
- writing discipline outputs directly into `docarchive/`;
- marking all disciplines complete in `_state.md` without per-discipline history entries;
- skipping structural check silently because the checker script is missing.

`finding.md` and `docarchive/` movement belong only to CONCLUDE, after all discipline workspaces have completed and after `homegrown/protocols/conclude.md` has been loaded.



## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

### Path vocabulary

Use these path variables consistently:

- `inquiry_path` is the full path to the inquiry folder. Use it for every file operation.
- `inquiry_id` is the local folder name or short display id. Do not use it to rebuild paths after creation.

Root inquiry creation is the only place MVL+ builds:

```text
inquiry_path = devdocs/inquiries/[inquiry_id]/
```

Branch inquiry creation is delegated to `homegrown/protocols/branch_inquiry.md`, which returns `inquiry_path`. After that, MVL+ must treat `inquiry_path` as an opaque folder path.

### If NEW (input is a question or description):

1. Read the question fully. Restate it clearly in one sentence. Then check the Layer Commitment trigger: does the question target a discipline / protocol / framework artifact for from-scratch redefinition, meta-restructure, or fundamental rewrite? If YES, the `_branch.md` written in step 3 MUST include a populated `## Layer Commitment` section per the template. If the primary cognitive layer (meaning / structural / process) is genuinely ambiguous from the question alone, STOP and present the layer ambiguity to the user before proceeding to step 2; the user picks the primary layer or asks for a sequential multi-layer plan. If the question is an ordinary problem-solving inquiry that does not target a discipline / protocol / framework artifact, omit the Layer Commitment section entirely.

   Also check the Synthesis trigger: does the question involve synthesizing, consolidating, producing an "accurate version" of, or rolling up TWO OR MORE prior inquiry outputs (findings, specs, drafts)? If YES, the `_branch.md` written in step 3 MUST include a populated `## Synthesis Trigger` section per the template, listing the prior outputs being synthesized — this obligates the inquiry's finding to include an `## Inherited Commitments Re-test` section per CONCLUDE's enforcement. Plan the inquiry's discipline work (especially Sensemaking and Critique) to actually do the re-testing, not just record the inheritance. If the question is a fresh inquiry that does not consume prior inquiry outputs as inputs, omit the Synthesis Trigger section entirely.

2. Determine creation mode:

   - **BRANCH NEW:** If the input includes `branch_from:` or `--branch-from`, load `homegrown/protocols/branch_inquiry.md` in full and execute BRANCH_INQUIRY with `runner: MVL+`. Use the returned `inquiry_path`, `inquiry_id`, and `next_discipline`. Do not create a root inquiry folder. Do not rewrite the child `_branch.md` or `_state.md` after BRANCH_INQUIRY creates them.
   - **ROOT NEW:** Otherwise create a normal root inquiry folder: `devdocs/inquiries/<YYYY-MM-DD_HH-MM__slugified_name>/`. This timestamped directory name is `inquiry_id`; the full folder path is `inquiry_path`.

3. For ROOT NEW only, write `[inquiry_path]/_branch.md`:

   ```markdown
   # Branch: [name]
   ## Question
   [the question, stated clearly in one sentence]
   ## Goal
   [what would a good answer look like? what would the user be able to DO with the answer?]
   ## Scope Check
   [compare the question's scope to the goal's requirements. Does the question, if answered perfectly, cover everything the goal asks for? If YES: "Question covers goal." If NO: "Question covers goal: NO — goal includes [X, Y] but question only addresses [Z]. Consider widening to: [proposed wider question]."

   Specific-vs-pattern check: if the Question or Goal points at specific examples (e.g., "the 10 observed failures from inquiry X", "these 7 chains", "these specific instances"), explicitly state whether the inquiry should address JUST THOSE EXAMPLES or the BROADER PATTERN those examples illustrate. Default: address the broader pattern unless the user has explicitly scoped to the specific examples. If both readings are plausible, present both to the user before proceeding (per the existing scope-widening flow above).]
   ## Layer Commitment
   [REQUIRED when the question is a from-scratch redefinition, a meta-question on a discipline / protocol / framework artifact, or a fundamental restructure of how something is organized. Trigger phrases include: "redefine X from scratch", "what should X be", "rewrite the X spec/protocol", "X isn't doing the right thing — let's redo it", or any question whose answer would replace or restructure an existing discipline / protocol / framework. OMIT this section entirely when the question is an ordinary problem-solving inquiry that does not target a discipline / protocol / framework artifact.

   When required, declare ONE primary cognitive layer the inquiry operates at:
   - **Meaning** — what the thing IS as a cognitive operation; what concept it captures. Adjudicates name, definition, essence.
   - **Structural** — what the thing's spec LOOKS LIKE. Adjudicates sections, organization, schema, artifact shape.
   - **Process** — what STEPS the thing runs. Adjudicates procedure, mechanism, gates, loop.

   Then list the other-layer alternatives that were considered and are explicitly out of scope for THIS run (with a one-line reason each). If the inquiry intends to address multiple layers, declare a sequential plan: which layer first, what the next layer's inquiry will be, and why this order.

   If the primary layer cannot be picked, that is itself a signal — STOP and present the layer ambiguity to the user before continuing. Do not silently default to the structural layer just because the discipline tooling reaches for sections-and-schema-shaped outputs.

   Examples (each shows a different primary layer; X here can be any discipline, protocol, or framework artifact):
   - "Redefine X from scratch — I think it might mean Y" → primary layer: **meaning**. The user is questioning what X IS as a concept or operation; structural and process choices are downstream of settling that.
   - "X's spec organization is wrong — let's restructure the sections" → primary layer: **structural**. The user accepts what X is; the artifact's shape is the problem.
   - "X's procedure has a missing step" or "X runs in the wrong order" → primary layer: **process**. The user accepts what X is and how it's organized; the steps are what need fixing.]
   ## Synthesis Trigger
   [REQUIRED when the inquiry consolidates / synthesizes / rolls up TWO OR MORE prior inquiry outputs (findings, specs, drafts) into a single output, OR when the question explicitly produces an "accurate version," "consolidated version," "merged version," or similar of prior outputs. Trigger phrases include: "synthesize X and Y," "consolidate the priors," "produce an accurate/canonical version of X," "roll up findings A through C." OMIT this section entirely when the inquiry does not consume prior inquiry outputs as inputs.

   When required, list each prior output being synthesized:
   - `[path to prior 1]` — short description of what it commits to.
   - `[path to prior 2]` — short description of what it commits to.
   - [...etc]

   Each of these priors carries commitments (decisions, frames, claims, MUSTs/COULDs) that this inquiry will inherit. CONCLUDE will require the finding to include an `## Inherited Commitments Re-test` section that names each commitment and either re-tests it with cited evidence or explicitly flags it as inherited-without-re-test with a reason. Plan the inquiry's discipline work to do the re-testing, not just record the inheritance.]
   ```
   If the scope check flags a gap, present the proposed wider question to the user before proceeding. The user decides whether to widen or keep the original scope.

4. For ROOT NEW only, write `[inquiry_path]/_state.md`:
   ```markdown
   # State: [name]
   ## Flow-type
   extended
   ## Pipeline
   E → S → D → I → C (always)
   ## Progress
   - [ ] Exploration
   - [ ] Sensemaking
   - [ ] Decomposition
   - [ ] Innovation
   - [ ] Critique
   ## Iteration
   1
   ## Status
   ACTIVE
   ## Next Discipline
   Exploration
   ## Relationships
   [Add if applicable. Omit section if standalone.
   - CONTINUES FROM: inquiry_path (context)
   - SUPERSEDED BY: inquiry_path (reason)
   - RELATED: inquiry_path (connection)]
   ## History
   - [date]: Created. Question: [one-line summary]
   ```

5. Present briefly:
   ```
   Extended loop created: [inquiry_path]/
   Pipeline: E → S → D → I → C
   Question: [restated clearly]
   Goal: [what a good answer looks like]
   ```

6. **Immediately begin the pipeline** — proceed to EXECUTE PIPELINE below. Do not wait for user input.

---

### If RESUME (input is a folder path):

1. Set `inquiry_path` to the input folder path. Use `inquiry_id` only as a display label.

2. Read `[inquiry_path]/_state.md` and `[inquiry_path]/_branch.md`.

3. Verify `flow-type: extended` in `[inquiry_path]/_state.md`. If the field is `classic` or absent, this inquiry belongs to `/mvl`, not `/mvl+` — flag to the user and stop.

4. Determine where the pipeline left off by checking which files exist in `[inquiry_path]`. Proceed to EXECUTE PIPELINE below, starting from the first incomplete discipline.

---

### EXECUTE PIPELINE

Run disciplines sequentially: E → S → D → I → C. For each discipline that hasn't produced its output file yet, execute it using the Discipline Transition Protocol below. Continue through all remaining disciplines without pausing — do not wait for user input between disciplines. The user can interrupt at any time to redirect.

**For each discipline in sequence:**

1. **Display checkpoint** (except before the first discipline of the session):
   ```
   ── Checkpoint ──────────────────────────────────
   [Previous discipline] complete.
     [2-3 key telemetry metrics from the output just saved]
     Structural: N/M checks passed
   Proceeding to [Next discipline]...
   ────────────────────────────────────────────────
   ```
   If any structural checks failed, list them: `[FAIL: label1, label2]`

2. **Load the discipline spec via Skill tool:**
   - Invoke `Skill(skill: "<discipline-skill-name>", args: "[inquiry_path]/_branch.md")`
   - If the Skill tool fails → fall back to `Read` on the discipline's command file, then execute
   - If Read also fails → HALT and tell the user: "Could not load spec for [discipline]. Run manually: /[discipline] [inquiry_path]/_branch.md"
   - **Never execute a discipline from memory alone.**

3. **Execute the loaded spec** at full depth. The discipline saves its output to the inquiry folder.

4. **Run structural check** on the saved output:
   ```
   bash tools/structural_check.sh [inquiry_path]/[output_file] [discipline_name]
   ```
   Discipline-to-name mapping: `exploration.md → exploration`, `sensemaking.md → sensemaking`, `decomposition.md → decomposition`, `innovation.md → innovation`, `critique.md → critique`.
   If any `[FAIL]` lines appear, fix the missing sections in the output and re-save. Re-run the check to confirm. Include the results in the next checkpoint display.

5. **Update `_state.md`:** check off the completed discipline, set next discipline.

6. **Continue immediately** to the next discipline in E → S → D → I → C.

**Skill-to-command mapping:**

| Discipline | Skill name | Output file |
|---|---|---|
| Exploration | `explore` | `exploration.md` |
| Sensemaking | `sense-making` | `sensemaking.md` |
| Decomposition | `decompose` | `decomposition.md` |
| Innovation | `innovate` | `innovation.md` |
| Critique | `td-critique` | `critique.md` |

**When all five are complete** → proceed to ITERATION COMPLETE below.

---

### If ITERATION COMPLETE (all five files exist):

Read the critique output. Answer three questions:

**1. What survived?**
List the surviving ideas/approaches from critique's verdicts. What was killed? What was refined?

**2. Is the original question answered?**
Re-read `_branch.md`'s question and goal. Does a clear survivor exist that addresses the question and meets the goal? Be honest — a partial answer is not a full answer.

- **YES — the question is answered:**

  Load `homegrown/protocols/conclude.md` in full and execute the **CONCLUDE** protocol on this inquiry's folder. CONCLUDE compiles the loop's artifacts (exploration, sensemaking, decomposition, innovation, critique) into `finding.md` (using the standardized template + style rules + size-adaptive guidance defined in the protocol; CONCLUDE auto-detects the extended pipeline from `_state.md`'s `flow-type: extended` field), archives discipline outputs to `docarchive/`, updates `_state.md` to status COMPLETE, prints the brief summary, and prints any `## Relationships` pointers (using `/MVL+` as the resume runner unless the parent's flow-type is classic, in which case `/MVL`).

  Do not execute CONCLUDE from memory; always load `homegrown/protocols/conclude.md` before invoking.

- **NO — the question is not fully answered:**
  ```
  ## Iteration [N] Complete — Not yet answered

  ### What we learned
  [What this iteration revealed — what survived, what was killed, what gaps remain]

  ### The gap
  [What specific aspect of the question remains unanswered?
   What did critique reveal is missing?]

  ### Next iteration focus
  [Restate the question with a NARROWER focus based on the gap.
   This becomes the seed for the next E → S → D → I → C pass.]
  ```

  Update `_state.md`:
  - Increment iteration
  - Reset progress checkboxes (all 5)
  - Set next discipline: Exploration
  - Append to History: what happened this iteration, what the gap is, what the next focus is

  Print briefly:
  ```
  Iteration [N] complete. Question not fully answered.
  Gap: [what's missing]
  Next iteration focus: [refined question]
  ```

  Then immediately begin the next iteration — proceed to EXECUTE PIPELINE with the refined focus.

  If this iteration produced multiple survivors, frontier questions, or branching possibilities, suggest:
  ```
  Multiple directions emerged. For a full possibility map, run:
  /navigate [inquiry_path]/
  ```

**3. Does the answer advance the goal?**
If the question IS answered but the answer doesn't advance the goal stated in `_branch.md` — note this. The answer might be technically correct but practically useless. Flag it for the user.

**4. Observation (optional)**
```
Any observation about this run? (optional — skip if nothing comes to mind)
```
If the user provides one, append to `devdocs/improvement_observations.md`:
```
## [date] | [problem from _branch.md] | [iteration count]
[the user's observation]
```
If the user skips, move on. No gate. No requirement. Observations accumulate over time. When patterns emerge across multiple observations, the user can run `/MVL+ "review improvement observations and propose spec changes"` — the loop on the system's own feedback.

---

## Cross-Session Resume

```
/MVL+ [inquiry_path]/
  → Reads _state.md (verifies flow-type: extended)
  → Sees where you left off
  → Loads the next discipline's spec via Skill tool
  → Continues the pipeline from where it stopped
```

`_state.md` has everything needed to resume. Any session, any AI. The Skill tool invocation ensures the discipline spec is freshly loaded even in a cold session.

---

## Rules

1. **Always E → S → D → I → C.** Every question gets the full loop. No shortcuts. No variable pipelines. Strict sequence in the first phase (Exploration, then Sensemaking, then Decomposition) before Innovation and Critique.
2. **Each step saves to the inquiry folder.** Point discipline commands at files in the folder — output saves alongside with the discipline's canonical name (`exploration.md`, `sensemaking.md`, `decomposition.md`, `innovation.md`, `critique.md`).
3. **`_state.md` is the source of truth.** Progress, iteration count, history, next command, flow-type.
4. **If the question isn't answered, loop again.** Each iteration narrows the focus based on what the previous iteration revealed.
5. **The human can redirect at any point.** The pipeline runs continuously without pausing. The human can interrupt mid-response to redirect, re-run, or override. Checkpoints display telemetry between disciplines for visibility — they are informational, not gates.
6. **Failures are data.** If the loop produces a bad answer, the WHERE and WHY of the failure is valuable — it reveals what needs to improve in the discipline configurations (the specs).
7. **Classic `/mvl` is UNCHANGED.** This command (`/mvl+`) is separate and coexists with classic. Existing classic inquiries resume with `/mvl`, not `/mvl+`. The `flow-type` field in `_state.md` distinguishes them.
8. DO NOT RUN EACH SKILL PARALLEL OR WITH SUBAGENTS TO SAVE TIME OR TOKEN. EACH SKILL SHOULD BE RUN AS CANNON AND IT IS OKAY IF THEY CONSUME CONTEXT. THEY SUPPOSED TO BE.

