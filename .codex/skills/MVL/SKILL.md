---
name: MVL
description: Run the SIC loop (Sensemaking → Innovation → Critique) on any question. Always the full pipeline. S feeds I feeds C. If the question isn't answered, loop again.
---

# /MVL — The SIC Loop

Run Sensemaking → Innovation → Critique on any question. Always the full pipeline. No classification. No variable pipelines. S feeds I feeds C. If the question isn't answered after C, loop again with a refined focus.

This is the only primitive. Every cognitive task is a SIC loop applied to a different question.

## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

### Path vocabulary

Use these path variables consistently:

- `inquiry_path` is the full path to the inquiry folder. Use it for every file operation.
- `inquiry_id` is the local folder name or short display id. Do not use it to rebuild paths after creation.

Root inquiry creation is the only place MVL builds:

```text
inquiry_path = devdocs/inquiries/[inquiry_id]/
```

Branch inquiry creation is delegated to `/Users/ns/Desktop/projects/native/.codex/skills/protocols/branch_inquiry.md`, which returns `inquiry_path`. After that, MVL must treat `inquiry_path` as an opaque folder path.

### If NEW (input is a question or description):

1. Read the question fully. Restate it clearly in one sentence.

2. Determine creation mode:

   - **BRANCH NEW:** If the input includes `branch_from:` or `--branch-from`, load `/Users/ns/Desktop/projects/native/.codex/skills/protocols/branch_inquiry.md` in full and execute BRANCH_INQUIRY with `runner: MVL`. Use the returned `inquiry_path`, `inquiry_id`, and `next_discipline`. Do not create a root inquiry folder. Do not rewrite the child `_branch.md` or `_state.md` after BRANCH_INQUIRY creates them.
   - **ROOT NEW:** Otherwise create a normal root inquiry folder: `devdocs/inquiries/<YYYY-MM-DD_HH-MM__slugified_name>/`. This timestamped directory name is `inquiry_id`; the full folder path is `inquiry_path`.

3. For ROOT NEW only, write `[inquiry_path]/_branch.md`:

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

4. For ROOT NEW only, write `[inquiry_path]/_state.md`:
   ```markdown
   # State: [name]
   ## Flow-type
   classic
   ## Pipeline
   S → I → C (always)
   ## Progress
   - [ ] Sensemaking
   - [ ] Innovation
   - [ ] Critique
   ## Iteration
   1
   ## Status
   ACTIVE
   ## Next Discipline
   Sensemaking
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
   SIC loop created: [inquiry_path]/
   Pipeline: S → I → C
   Question: [restated clearly]
   Goal: [what a good answer looks like]
   ```

6. **Immediately begin the pipeline** — proceed to EXECUTE PIPELINE below. Do not wait for user input.

---

### If RESUME (input is a folder path):

1. Set `inquiry_path` to the input folder path. Use `inquiry_id` only as a display label.

2. Read `[inquiry_path]/_state.md` and `[inquiry_path]/_branch.md`.

3. Determine where the pipeline left off by checking which files exist in `[inquiry_path]`. Proceed to EXECUTE PIPELINE below, starting from the first incomplete discipline.

---

### EXECUTE PIPELINE

Run disciplines sequentially: S → I → C. For each discipline that hasn't produced its output file yet, execute it using the Discipline Transition Protocol below. Continue through all remaining disciplines without pausing — do not wait for user input between disciplines. The user can interrupt at any time to redirect.

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
   Discipline-to-name mapping: `sensemaking.md → sensemaking`, `innovation.md → innovation`, `critique.md → critique`.
   If any `[FAIL]` lines appear, fix the missing sections in the output and re-save. Re-run the check to confirm. Include the results in the next checkpoint display.

5. **Update `_state.md`:** check off the completed discipline, set next discipline.

6. **Continue immediately** to the next discipline in S → I → C.

**Skill-to-command mapping:**

| Discipline | Skill name | Output file |
|---|---|---|
| Sensemaking | `sense-making` | `sensemaking.md` |
| Innovation | `innovate` | `innovation.md` |
| Critique | `td-critique` | `critique.md` |

**When all three are complete** → proceed to ITERATION COMPLETE below.

---

### If ITERATION COMPLETE (all three files exist):

Read the critique output. Answer three questions:

**1. What survived?**
List the surviving ideas/approaches from critique's verdicts. What was killed? What was refined?

**2. Is the original question answered?**
Re-read `_branch.md`'s question and goal. Does a clear survivor exist that addresses the question and meets the goal? Be honest — a partial answer is not a full answer.

- **YES — the question is answered:**

  Load `/Users/ns/Desktop/projects/native/.codex/skills/protocols/conclude.md` in full and execute the **CONCLUDE** protocol on this inquiry's folder. CONCLUDE compiles the SIC artifacts into `finding.md` (using the standardized template + style rules + size-adaptive guidance defined in the protocol), archives discipline outputs to `docarchive/`, updates `_state.md` to status COMPLETE, prints the brief summary, and prints any `## Relationships` pointers.

  Do not execute CONCLUDE from memory; always load `/Users/ns/Desktop/projects/native/.codex/skills/protocols/conclude.md` before invoking.

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
   This becomes the seed for the next S → I → C pass.]
  ```

  Update `_state.md`:
  - Increment iteration
  - Reset progress checkboxes
  - Set next discipline: Sensemaking
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
If the user skips, move on. No gate. No requirement. Observations accumulate over time. When patterns emerge across multiple observations, the user can run `/MVL "review improvement observations and propose spec changes"` — a SIC loop on the system's own feedback.

---

## Cross-Session Resume

```
/MVL [inquiry_path]/
  → Reads _state.md
  → Sees where you left off
  → Loads the next discipline's spec via Skill tool
  → Continues the pipeline from where it stopped
```

`_state.md` has everything needed to resume. Any session, any AI. The Skill tool invocation ensures the discipline spec is freshly loaded even in a cold session.

---

## Rules

1. **Always S → I → C.** Every question gets the full loop. No shortcuts. No variable pipelines.
2. **Each step saves to the inquiry folder.** Point discipline commands at files in the folder — output saves alongside.
3. **`_state.md` is the source of truth.** Progress, iteration count, history, next command.
4. **If the question isn't answered, loop again.** Each iteration narrows the focus based on what the previous iteration revealed.
5. **The human can redirect at any point.** The pipeline runs continuously without pausing. The human can interrupt mid-response to redirect, re-run, or override. Checkpoints display telemetry between disciplines for visibility — they are informational, not gates.
6. **Failures are data.** If the SIC loop produces a bad answer, the WHERE and WHY of the failure is valuable — it reveals what needs to improve in the discipline configurations (the specs).
