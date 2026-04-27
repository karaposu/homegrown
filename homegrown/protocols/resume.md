> **Loading note.** This file is loaded by future loop runners that perform telemetry-aware iteration resume. Read in full before RESUME executes. Every section below — pipeline detection, verdict reading, routing, state update, failure modes — is referenced by the procedure. Do not summarize or partial-load.

---

# RESUME — The Telemetry-Aware Iteration-Resume Protocol

RESUME is the operational protocol that picks up an inquiry across sessions OR between disciplines, reads each completed discipline's self-assessment verdict (PROCEED / FLAG / RE-RUN), and routes the loop accordingly.

RESUME does NOT judge the disciplines' outputs. Per `thinking_disciplines/protocols/desc.md` doctrine ("protocols route, disciplines judge"; line 36, 78, 115, 118), quality evaluation is the discipline's own responsibility — each discipline self-assesses inside its own telemetry section. RESUME reads the verdicts that each discipline has already produced and routes the loop based on them.

---

## Step 1 — Pipeline detection

RESUME auto-detects which pipeline applies by inspecting `_state.md` in the inquiry folder:

- **Classic pipeline** (`Pipeline: S → I → C`, or `Flow-type: classic`, or absent flow-type): expected discipline outputs are `sensemaking.md`, `innovation.md`, `critique.md` (in pipeline order).
- **Extended pipeline** (`Pipeline: E → S → D → I → C`, or `Flow-type: extended`): expected discipline outputs are `exploration.md`, `sensemaking.md`, `decomposition.md`, `innovation.md`, `critique.md` (in pipeline order).
- **Other pipelines** (future runners with different SIC-shaped pipelines): the pipeline declaration in `_state.md` is the authoritative ordered list of expected disciplines.

If `_state.md` is missing or malformed, HALT and tell the user: "Cannot detect pipeline from `_state.md`. RESUME needs the pipeline declaration to determine which discipline outputs to read."

---

## Step 2 — Read each completed discipline's verdict

For each expected discipline in the pipeline (per Step 1's ordered list), in order:

1. **Check existence.** Does the discipline's output file exist in the inquiry folder?
   - If NO → this discipline hasn't run yet. Mark this discipline as the next-to-run; **stop iterating through subsequent disciplines** (they can't have run before this one); proceed to Step 3 with this finding.
   - If YES → continue to step 2.2.

2. **Read the verdict via line-pattern matching.** Scan the discipline's output file for the literal verdict line. The line is a bold-formatted `Overall:` declaration matching one of:
   - `**Overall: PROCEED**` (with optional descriptive parenthetical after — e.g., `**Overall: PROCEED** (sufficient coverage + convergence + tested survivors)`)
   - `**Overall: FLAG**` (with optional descriptive parenthetical)
   - `**Overall: RE-RUN**` (with optional descriptive parenthetical)

   Pattern reference: `/innovate`'s established format (line ~420 of `homegrown/innovate/references/innovate.md`):
   ```
   * **Overall: PROCEED** (sufficient coverage + convergence + tested survivors) / **FLAG** (coverage gaps or untested survivors) / **RE-RUN** (minimum coverage not met or failure mode detected)
   ```
   The discipline reports its specific verdict by selecting one of the three (e.g., printing `**Overall: PROCEED**` followed by its specific reason).

3. **Reflect special-handling.** If the pipeline includes `reflection.md` (or similar reflect-discipline output), **do NOT read it for routing**. Reflect is a backward-looking discipline producing process observations; per doctrine, its output does not gate the pipeline. Skip its verdict-read; treat it as informational only.

4. **Backward-compatibility (missing verdict).** If the file exists but contains no `**Overall: PROCEED**` / `**Overall: FLAG**` / `**Overall: RE-RUN**` line → treat as **PROCEED** with a NOTE in the routing summary: "Discipline `[name]` produced no standardized verdict; treated as PROCEED. Consider re-running with the updated discipline spec that includes self-assessment."

   This handles three situations:
   - Older outputs from before disciplines were standardized.
   - Standalone discipline runs that don't include self-assessment.
   - Disciplines that haven't yet been updated to produce the standardized verdict.

5. **Continue iteration.** If verdict is PROCEED, continue to the next expected discipline. If verdict is FLAG or RE-RUN, **stop iterating** (don't advance past a non-PROCEED) and proceed to Step 3.

---

## Step 3 — Route based on verdict

Based on Step 2's findings:

### Case A: All completed disciplines have PROCEED, and the next discipline hasn't run yet

Mark the next-to-run discipline. Proceed to Step 4 (update `_state.md`) and Step 5 (print routing summary). The runner will execute the next discipline.

### Case B: All disciplines in the pipeline have PROCEED (pipeline fully complete)

Return signal: "pipeline complete with PROCEED on all disciplines." The runner picks up its iteration-complete logic (read critique's output, decide YES → CONCLUDE / NO → next-iteration). RESUME's job is done; do not act further.

### Case C: A discipline produced FLAG

Present the specific shortfall to the user with options:

```
Inquiry: [name]
Status: [discipline] complete but FLAGGED.

Telemetry concern: [specific shortfall from the discipline's own report — e.g., "Sensemaking's anchor diversity was 1 type from 1 perspective; perspective saturation reached at 2 perspectives"].

Options:
1. Re-run /[discipline] with the guidance above
2. Accept and proceed to next discipline (override)
```

**Wait for user decision.** Do NOT auto-proceed past a FLAG. (Autonomous-mode handling — what to do when no user is present — is deferred to autonomy-ladder Level 2+ implementation; not in this protocol's current scope.)

### Case D: A discipline produced RE-RUN

Recommend re-running the discipline with targeted feedback drawn from the discipline's own failure-mode report:

```
Inquiry: [name]
Status: [discipline] complete with RE-RUN signal.

The discipline self-assessed as below threshold on critical metrics: [specific failure modes from the discipline's report].

Recommendation: Re-run /[discipline] with focus on [the specific failure modes].
```

**Wait for user confirmation.** RE-RUN is more decisive than FLAG (the discipline itself signaled inadequacy), but the user retains override authority at autonomy Level 0-1.

---

## Step 4 — Update `_state.md`

After the routing decision in Step 3, modify the inquiry folder's `_state.md`:

- **Case A (PROCEED, next-to-run identified):** check off any newly-completed disciplines whose verdicts were PROCEED in this RESUME pass; set `Next Discipline` to the next-to-run; append a History entry summarizing the RESUME pass (which disciplines verified PROCEED).
- **Case B (pipeline complete with all PROCEED):** all discipline checkboxes already checked; set `Next Discipline` to `ITERATION COMPLETE` (or equivalent); append a History entry noting "RESUME confirmed all disciplines PROCEED; deferring to runner's iteration-complete check."
- **Case C (FLAG):** append a History entry noting the FLAG and (after user response) the user's decision (override-and-proceed OR accept-and-rerun). If override: check off the discipline; set Next Discipline to the next-to-run. If accept-and-rerun: leave checkbox unchecked; Next Discipline points back to the FLAGGED discipline.
- **Case D (RE-RUN):** similar to FLAG but recommendation is stronger. If user confirms re-run: leave checkbox unchecked; Next Discipline points back to the discipline. If user overrides: check off; set Next Discipline to next-to-run.

---

## Step 5 — Print routing summary

Print (not the full pipeline state):

```
Inquiry: [name]
Pipeline progress: [N] of [M] disciplines complete (with verdicts: [list — e.g., "S: PROCEED, I: PROCEED, C: FLAG"]).
[NOTE: any backward-compat treat-as-PROCEED entries]

Next: [Run /[discipline] devdocs/inquiries/[name]/[input_file]
        OR  Pipeline complete — runner proceeds to iteration-complete check
        OR  Wait for user decision on FLAG / RE-RUN]
```

The summary is concise (not a full state dump). The user reads `_state.md` directly if they need the full state.

---

## Step 6 — Print post-routing pointers (if applicable)

If `_state.md` has a `## Relationships` section AND this RESUME pass produced Case B (pipeline complete with all PROCEED), the runner's subsequent CONCLUDE step will handle relationship pointers. RESUME itself does not print relationship pointers; that's CONCLUDE's job.

If RESUME is invoked AFTER the inquiry is already COMPLETE (status field), print:

```
Inquiry: [name] — already COMPLETE.
Finding: devdocs/inquiries/[name]/finding.md
[Print any RELATED relationships from _state.md]
```

This handles cross-session re-entry on a completed inquiry.

---

## Failure modes

- **Pipeline detection failure** — `_state.md` is missing, malformed, or has an unrecognized pipeline. HALT and ask the user to specify the pipeline manually before retrying.

- **Missing discipline output despite earlier in pipeline being complete** — pipeline order says S → I → C, but `innovation.md` exists and `sensemaking.md` doesn't. This indicates `_state.md` and the actual files are inconsistent. HALT and tell the user: "State inconsistency: `[later_file]` exists but `[earlier_file]` does not. Verify pipeline order and re-run RESUME or fix manually."

- **Verdict line ambiguous** — multiple `**Overall: PROCEED**` / `**Overall: FLAG**` / `**Overall: RE-RUN**` lines found in the same discipline output (e.g., the discipline output contains the pattern within a quoted example or inside a sub-section that isn't the discipline's own self-assessment). Use the LAST occurrence in the file (assumed to be the discipline's actual verdict at the end of its self-assessment section). If still ambiguous, treat as backward-compat PROCEED with a NOTE: "Discipline `[name]` had ambiguous verdict pattern; defaulted to PROCEED."

- **Reflect's verdict accidentally read** — if reflect's output happens to contain a `**Overall: PROCEED**` / `FLAG` / `RE-RUN` line (against doctrine — reflect should not produce routing verdicts), ignore it. Reflect is structurally exempt from routing per `thinking_disciplines/protocols/desc.md` doctrine and per `homegrown/reflect/`'s advisory framing.

- **Conflicting verdicts across disciplines (multiple non-PROCEED)** — Step 2's per-discipline iteration stops at the first non-PROCEED encountered, so this case shouldn't arise during a single RESUME pass. If a prior RESUME marked a later discipline complete via override but an earlier discipline now flags, this indicates a state inconsistency; HALT and report.

- **Load failure** — if RESUME itself can't be loaded (e.g., file system error reading the protocol file at `~/.claude/skills/protocols/resume.md` or `homegrown/protocols/resume.md`), the runner's fallback should HALT and tell the user: "Could not load the resume protocol file. Run RESUME manually by checking `_state.md` and continuing the pipeline from the first incomplete discipline."

- **Autonomous-mode handling** — at autonomy Level 0-1 (current), FLAG and RE-RUN routing waits for user decision. At autonomy Level 2+ (per `enes/desc.md`'s Level 2 milestone), the system selects routing autonomously — what to do without a user is **deferred to a future protocol revision**. Current scope: user is in the loop.

---
