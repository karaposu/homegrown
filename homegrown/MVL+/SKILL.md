name: MVL+
description: Run the Extended Cognitive Loop (Exploration → Sensemaking → Decomposition → Innovation → Critique) on any question. Always the full pipeline. If the question isn't answered, loop again.

# /MVL+ — The Extended Cognitive Loop

Run Exploration → Sensemaking → Decomposition → Innovation → Critique on any question. Always the full pipeline. No classification. No variable pipelines. Each step feeds the next. If the question isn't answered after C, loop again with a refined focus.

This is the extended form of the cognitive loop. `/mvl` (classic) runs only S → I → C. `/mvl+` adds Exploration (map territory) and Decomposition (partition complexity) to the first phase. Use `/mvl+` as the default for new inquiries; use `/mvl` classic for simple well-defined problems when speed matters.

## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

### If NEW (input is a question or description):

1. Read the question fully. Restate it clearly in one sentence.

2. Create the inquiry folder: `devdocs/inquiries/<slugified_name>/`

3. Write `_branch.md`:
   ```markdown
   # Branch: [name]
   ## Question
   [the question, stated clearly in one sentence]
   ## Goal
   [what would a good answer look like? what would the user be able to DO with the answer?]
   ## Scope Check
   [compare the question's scope to the goal's requirements. Does the question, if answered perfectly, cover everything the goal asks for? If YES: "Question covers goal." If NO: "Question covers goal: NO — goal includes [X, Y] but question only addresses [Z]. Consider widening to: [proposed wider question]."]
   ```
   If the scope check flags a gap, present the proposed wider question to the user before proceeding. The user decides whether to widen or keep the original scope.

4. Write `_state.md`:
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
   - CONTINUES FROM: folder_name (context)
   - SUPERSEDED BY: folder_name (reason)
   - RELATED: folder_name (connection)]
   ## History
   - [date]: Created. Question: [one-line summary]
   ```

5. Present briefly:
   ```
   Extended loop created: devdocs/inquiries/[name]/
   Pipeline: E → S → D → I → C
   Question: [restated clearly]
   Goal: [what a good answer looks like]
   ```

6. **Immediately begin the pipeline** — proceed to EXECUTE PIPELINE below. Do not wait for user input.

---

### If RESUME (input is a folder path):

1. Read `_state.md` and `_branch.md` from the folder.

2. Verify `flow-type: extended` in `_state.md`. If the field is `classic` or absent, this inquiry belongs to `/mvl`, not `/mvl+` — flag to the user and stop.

3. Determine where the pipeline left off by checking which files exist. Proceed to EXECUTE PIPELINE below, starting from the first incomplete discipline.

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
   - Invoke `Skill(skill: "<discipline-skill-name>", args: "devdocs/inquiries/[name]/_branch.md")`
   - If the Skill tool fails → fall back to `Read` on the discipline's command file, then execute
   - If Read also fails → HALT and tell the user: "Could not load spec for [discipline]. Run manually: /[discipline] devdocs/inquiries/[name]/_branch.md"
   - **Never execute a discipline from memory alone.**

3. **Execute the loaded spec** at full depth. The discipline saves its output to the inquiry folder.

4. **Run structural check** on the saved output:
   ```
   bash tools/structural_check.sh devdocs/inquiries/[name]/[output_file] [discipline_name]
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
  /navigate devdocs/inquiries/[name]/
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
/MVL+ devdocs/inquiries/[name]/
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
