# Loop-Runner Design — Notes 2: The Current `/MVL` Loop

This document walks through the current `/MVL` loop design as it exists today. It is paired with `loop_design_1.md` (which compares the three runners across design dimensions); this file zooms into one runner and traces what actually happens when you run it.

The canonical spec is `commands/MVL.md`. This document is design-rationale, not spec — it explains the WHY behind the choices, the lifecycle in narrative form, and the pieces that aren't immediately obvious from reading the spec alone.

---

## The Claim

`/MVL` makes one strong philosophical claim, stated in line 8 of its spec:

> **This is the only primitive. Every cognitive task is a SIC loop applied to a different question.**

Everything else in `/MVL`'s design follows from this claim. If S→I→C is the primitive, then:

- The pipeline doesn't need to be classified or selected — it's always the same.
- The runner's job is plumbing, not problem-typing.
- The interesting variable is **the question**, not the pipeline.
- Iteration handles complexity that a single pass can't — narrow the focus, run the same primitive again.

`/inquiry` rejects this claim implicitly (it classifies problems and selects pipelines). `/MVL` accepts it. The two coexist because the claim is plausibly true but not proven — `/MVL` lives or dies by whether SIC really does cover every cognitive task when iterated with refined focus.

---

## What `/MVL` Is

**`/MVL` is an auto-chained, fixed-pipeline loop runner that always runs Sensemaking → Innovation → Critique on a question, iterates with refined focus until the question is answered, and produces a `finding.md`.**

Three things to notice in that sentence:
- **Auto-chained** — no human typing between disciplines. The runner invokes them.
- **Fixed pipeline** — S → I → C, always. Never variable.
- **Iterates** — if one pass doesn't answer, narrow the focus and run again.

That's the entire surface area. The rest of the spec is operational details — folders, state files, structural checks, transition protocols — that exist to make this surface area work robustly.

---

## The Pipeline

```
S (sensemaking) → I (innovation) → C (critique)
```

Each discipline is a separate command that runs at full depth via its own spec. `/MVL` does not compress, simplify, or short-circuit them. It just sequences them.

### Why S → I → C in this order

- **Sensemaking** turns ambiguity into structured understanding. Output: cognitive anchors, perspective analysis, ambiguities collapsed, a stable conceptual model.
- **Innovation** generates novel candidates against the now-stable problem. Output: 7-mechanism × 3-variation generation, surviving paths, an assembly check.
- **Critique** evaluates the candidates adversarially. Output: prosecution + defense + collision per candidate, verdicts (SURVIVE / REFINE / KILL), a fitness landscape, a final assembly recommendation.

The order matters: you can't innovate against a problem you don't understand (S before I), and you can't critique candidates that don't exist (I before C). The pipeline is a one-way information flow — sensemaking output feeds innovation; innovation output feeds critique; critique output feeds the iteration decision.

### What `/MVL` does NOT include

- No **decomposition** discipline. If a problem has clear sub-problems, `/MVL+` adds D after S. `/MVL` does not.
- No **exploration** discipline. If a problem starts in unknown territory and needs scouting before sensemaking, `/MVL+` adds E before S.
- No **wayfinding** discipline. Iteration steering is implicit (narrow the focus); no explicit move taxonomy.
- No **synthesis** discipline. The `finding.md` writer is `/MVL` itself, not a separate discipline.

These omissions are deliberate — `/MVL` is the minimum viable loop. Adding any of them changes which runner you should use.

---

## Three Lifecycles

`/MVL` recognizes three distinct lifecycle states and behaves differently in each.

### 1. NEW — input is a question

When invoked with a question rather than a folder path:

1. Restate the question in one sentence.
2. Create the inquiry folder: `devdocs/inquiries/<slugified_name>/`.
3. Write `_branch.md` (the question, the goal, a scope check that confirms the question covers the goal).
4. Write `_state.md` (pipeline = S→I→C, progress all unchecked, iteration = 1, status = ACTIVE, next = Sensemaking).
5. Display the brief setup confirmation.
6. **Immediately begin the pipeline.** No pause for user input.

The scope check in step 3 is a quiet quality gate. If the question, answered perfectly, would not actually cover what the goal asks for, `/MVL` prompts the user to widen the question before running anything. This catches "I asked X but I really need to know Y" mismatches at the start, where the cost is zero, rather than at the end of iteration 3.

### 2. RESUME — input is a folder path

When invoked on an existing inquiry folder:

1. Read `_state.md` and `_branch.md`.
2. Determine where the pipeline left off by checking which discipline output files exist.
3. Begin from the first incomplete discipline.

This is what makes cross-session resume work. Any AI in any session can pick up where another left off — `_state.md` says where, file existence cross-checks whether `_state.md` is accurate.

### 3. ITERATION COMPLETE — all three discipline files exist

When all three of `sensemaking.md`, `innovation.md`, `critique.md` exist for the current iteration, `/MVL` evaluates whether the question is answered:

- **YES**: write `finding.md`, archive the discipline outputs to `docarchive/`, set status to COMPLETE.
- **NO**: increment iteration, reset progress, narrow the focus, run another S → I → C pass on the refined question.

This is where the loop closes. The decision "is the question answered?" is made by reading critique's output and re-reading `_branch.md`'s question + goal, then asking: does a clear survivor exist that addresses the question and meets the goal?

---

## The Discipline Transition Protocol

Between disciplines, `/MVL` follows a strict protocol designed for robustness:

```
1. Display checkpoint (telemetry from previous discipline + structural check result)
2. Load the next discipline's spec via Skill tool
   ├─ Skill succeeds → execute the loaded spec
   ├─ Skill fails → fall back to Read on the discipline's command file
   └─ Read also fails → HALT and tell the user how to run manually
3. Execute the spec at full depth; discipline saves output to inquiry folder
4. Run structural check on the saved output
   └─ If FAIL → fix the missing sections, re-save, re-run check
5. Update _state.md (check off discipline, set next)
6. Continue immediately to next discipline
```

Three things matter here.

**The Skill-tool-with-Read-fallback pattern.** `/MVL` does not execute disciplines from memory. It freshly loads the discipline's spec on every transition — via the Skill tool first (which loads the latest version), falling back to a direct `Read` of the command file if the Skill tool fails. This protects against drift: if a discipline's spec evolves between sessions, the loop runner uses the current version, not whatever the AI happened to remember.

**The HALT-with-manual-fallback escape.** If both Skill and Read fail (e.g., file missing, permission error), `/MVL` does NOT improvise. It halts and tells the user exactly how to run the discipline manually. This is a deliberate choice — better to stop than to run a discipline from a vague approximation of its spec.

**The structural check as a gate.** After each discipline saves its output, `/MVL` runs `tools/structural_check.sh` on the file. If any required structural section is missing (`[FAIL: label1, label2]`), `/MVL` fixes the missing sections and re-saves. The next discipline doesn't start until the previous one's output passes the structural check. This prevents downstream disciplines from operating on incomplete inputs.

---

## The Iteration Pattern

When critique completes and the question is not yet answered, `/MVL` does the following:

1. State what the iteration learned (what survived, what was killed, what gaps remain).
2. Identify the specific gap — what aspect of the question is still unanswered?
3. Restate the question with a **narrower focus** based on the gap. This becomes the seed for the next iteration.
4. Update `_state.md`: increment iteration, reset progress, append to History.
5. Run S → I → C again on the refined question.

The refinement is **narrowing**, not pivoting. If iteration 1 reveals that "the question is too broad — it actually contains three sub-questions A, B, C," iteration 2 doesn't try to answer all three; it picks the one most-load-bearing for the goal and runs SIC on just that. The other two surface as related inquiries or as DEFERRED items in the eventual finding.

This is what `loop_design_1.md` calls "implicit narrowing" — there is no rich move taxonomy (BROADEN / SHIFT / RECONSIDER), there is just narrow-or-terminate. If a problem genuinely needs broadening or shifting, `/MVL` doesn't do it well; that's `/inquiry`'s domain.

### The terminate decision

Terminating happens implicitly: when ITERATION-COMPLETE evaluates "is the question answered?" as YES. There is no max-iteration cap, no convergence signal, no termination move. Just: does a clear survivor address the question and meet the goal?

In observed practice (this conversation: 5+ `/MVL` runs), every inquiry has converged in one iteration. This is partial evidence that SIC-with-narrowed-focus is a powerful primitive — but it's also evidence that the questions being asked are reasonably well-shaped. Truly hard questions might need more iterations; we haven't tested that boundary much.

---

## The Finding

When the question is answered, `/MVL` writes `finding.md` directly (no separate synthesis discipline). The finding is a self-contained document for someone who has not seen the SIC outputs — it tells them what the question was, what the answer is, why this answer over alternatives, and what's still open.

### Structure (current spec)

The finding has a fixed structure:
- **Frontmatter** — status, optional refines/supersedes pointers
- **Question** — restated from `_branch.md`
- **Finding Summary** — 3–7 bullet points, complete claims, scannable
- **Finding** — the full answer, self-contained, non-compact
- **Next Actions** — MUST / COULD / DEFERRED if the finding proposes changes
- **Reasoning** — every KILL with prosecution; every SURVIVE with why it held
- **Open Questions** — Monitoring / Blocked / Research Frontiers / Refinement Triggers (only the applicable subsections)

### Three style rules

1. **Hedging specificity** — any hedge ("mostly works", "with caveats") must name what is uncertain and why. Vague hedges are defects.
2. **Cross-reference format** — first reference uses full path, subsequent uses bare name; relationship labels (REFINES / SUPERSEDES / CORRECTS) where applicable.
3. **Gate specificity** — triggers and revival conditions must be time-bound, condition-bound, or observable. "Eventually" / "as needed" are defects.

### Why a fixed-structure finding (not a free-form synthesis)

The finding template is opinionated for a reason: a SIC loop has produced four files (`_branch.md`, `sensemaking.md`, `innovation.md`, `critique.md`) totaling potentially thousands of lines. The finding has to compress that into something useful for someone who didn't run the loop. Without structure, the synthesis varies wildly in shape — sometimes argumentative, sometimes summary, sometimes recommendation list. With structure, the reader knows where to look for what.

This is `/MVL`'s answer to the synthesis-discipline question. `/inquiry` defers synthesis to a yet-to-be-built discipline; `/MVL` embeds a structured-template synthesis in the runner itself.

### After the finding

- Move `sensemaking.md`, `innovation.md`, `critique.md` to `docarchive/`.
- Update `_state.md`: status → COMPLETE, append to History.
- Print a brief summary in conversation (1 sentence + path), not the full finding.
- Check `_state.md` for relationships and print pointers (CONTINUES FROM → resume parent; RELATED → flag the connection).

The archive-on-termination move is a deliberate choice: the SIC outputs were inputs to the finding; once the finding exists, they are reference material, not active state. Moving them to `docarchive/` keeps the active inquiry folder uncluttered while preserving the full reasoning trail for anyone who wants to dig.

---

## Cross-Session Resume

`/MVL <folder-path>` reads `_state.md`, sees where the pipeline stopped, loads the next discipline's spec via Skill tool, and continues. Any session, any AI.

Three pieces make this work:

1. **`_state.md` as source of truth** — pipeline, progress checkboxes, iteration count, next discipline, history.
2. **File-existence cross-check** — does `sensemaking.md` exist? matches the progress checkboxes? if not, something's inconsistent and the runner can flag it.
3. **Skill-tool spec loading** — even in a cold session where the AI has no memory of the discipline specs, the Skill tool loads them fresh.

The principle: **state lives in files, not in conversation context.** A session crash, a new AI instance, a context window reset — none of these lose the inquiry. The folder is the truth.

---

## The Improvement-Observation Mechanism

After ITERATION-COMPLETE, `/MVL` optionally prompts:

```
Any observation about this run? (optional — skip if nothing comes to mind)
```

If the user provides one, it's appended to `devdocs/improvement_observations.md` with date, problem, and iteration count. If skipped, nothing happens.

The mechanism is interesting because it's **system improving system**. When patterns emerge across multiple observations ("disciplines keep mis-handling X"), the user can run `/MVL "review improvement observations and propose spec changes"` — a SIC loop on the system's own feedback. The same primitive that runs the cognitive loop also evaluates and improves the loop.

This is the loop runner taking its own claim ("every cognitive task is a SIC loop") seriously, including the meta-task of improving the loop itself.

---

## Design Choices `/MVL` Embeds

Restated from the dimensions in `loop_design_1.md`, here are the choices `/MVL` makes:

| Dimension | `/MVL`'s choice | Why |
|---|---|---|
| Drive mode | Auto-chained | Daily-driver speed; explicit interrupt available at any point |
| State tracking | Structured `_state.md` + file-existence cross-check | Robust resume; no runtime memory dependence |
| Steering | Implicit narrowing only | Matches the "S→I→C is the only primitive" claim; no move taxonomy needed |
| Iteration files | Overwrite during iteration; archive on terminate | Active folder stays clean; full trail preserved in `docarchive/` |
| Pipeline flexibility | Fixed (S→I→C) | The primitive is the pipeline; classification is over-engineering |
| Branch parallelism | None | If you have sub-problems, run separate `/MVL` inquiries (or use `/MVL+` for D) |
| Synthesis | Folder-local `finding.md` written by the runner | Synthesis is templated and embedded; no separate discipline yet |
| Cross-inquiry learning | None (improvement-observations is the precursor) | Lessons accumulate in observations; explicit REFLECT discipline planned |

---

## What `/MVL`'s Spec Is Strict About

The spec uses a few "always / never" rules. Each one is a load-bearing design decision worth understanding:

- **Always S → I → C.** Every question gets the full loop. No shortcuts. No variable pipelines. — This is the primitive claim, made operational.
- **Each step saves to the inquiry folder.** Discipline commands point at the folder; output saves alongside. — This is what makes folder-as-structure work; without it, output would scatter.
- **`_state.md` is the source of truth.** — Without a single source of truth, distributed state files (one per discipline) would drift.
- **If the question isn't answered, loop again.** — Iteration is the answer to single-pass insufficiency; no max-cap because the answer-quality check is the cap.
- **The human can redirect at any point.** — Auto-chained doesn't mean unattended; the human's interrupt-and-redirect ability is preserved.
- **Failures are data.** — When the SIC loop produces a bad answer, the where/why of the failure feeds back to discipline-spec improvement via the improvement-observations mechanism.
- **Never execute a discipline from memory alone.** — The Skill-then-Read protocol prevents drift between what the AI thinks the spec says and what the spec actually says.

These rules are tight on purpose. The runner is the only primitive; if it's permissive, the primitive becomes underspecified, and "everything is a SIC loop" stops being a claim with content.

---

## What's Not Yet in `/MVL`

Things `/MVL` doesn't currently do that future revisions might add:

- **Wayfinding as a separate discipline.** Today, the iteration-narrowing logic is inlined in the ITERATION-COMPLETE branch. Externalizing it (as `/wayfinding <folder>`) would produce a saved `wayfinding.md` per iteration — auditable, replayable, and reusable across runners.
- **Cross-iteration file separation.** Today, iteration 2's `sensemaking.md` overwrites iteration 1's. Per-iteration sub-folders or versioned filenames would preserve iteration-by-iteration trail (currently only the final iteration survives, in `docarchive/`).
- **Cross-inquiry learning.** The improvement-observations file is a pre-cursor; an explicit REFLECT discipline that synthesizes lessons across multiple completed inquiries is the planned next step.
- **A proper synthesis discipline.** The current finding template is `/MVL`'s synthesis answer; a dedicated `/synthesize` discipline could improve quality and would be reusable by `/MVL+` and `/inquiry`.
- **Convergence telemetry across iterations.** Today, the answer-quality check is the only termination signal. A telemetry layer that tracks landscape-stabilization across iterations would let `/MVL` say "we've converged" rather than just "the question is answered."

Each of these would benefit from arguing against the design dimensions in `loop_design_1.md` rather than starting from scratch.

---

## Why "Notes 2"

`loop_design_1.md` is the cross-runner taxonomy — the design dimensions and what each runner picked. `loop_design_2.md` (this file) is the deep walkthrough of one runner. The pair is intended to support future redesign work: when a `loop_design_3.md` proposes (say) externalizing wayfinding, it can argue against this document's specific articulation of `/MVL`'s current steering choice rather than re-deriving the whole runner from spec.

If `/MVL+` and `/inquiry` get equivalent walkthrough docs (say `loop_design_3_mvl_plus.md` and `loop_design_4_inquiry.md`), the four documents together become the corpus future redesigns argue against — preventing the trap of "redesign from scratch and accidentally lose load-bearing properties of the current design."
