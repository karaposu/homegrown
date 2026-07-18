---
name: traverse
description: Run the Articulated Extended Cognitive Loop with Surfacing AND a Routelister exhaust step (Articulate-Simple → Surfacing → Sensemaking → Decomposition → Innovation → Critique → Routelister → CONCLUDE). Variant of /aMVLw — identical articulated pipeline, plus after Critique it runs /routelister on the inquiry's own artifacts (territory = the inquiry folder; goal = from _branch.md) so every inquiry ends with its onward route-field enumerated. Routelister writes TWO files — the per-run route-map routelister.md and the persistent concept-map index _route.md — and BOTH STAY in the inquiry root beside _state.md and _branch.md, never archived (they are the inquiry's onward route-field, consumed after the inquiry concludes by the between-inquiry layer, so they stay accessible at root rather than moving into docarchive/). Use when each inquiry should exhaust its routes for the between-inquiry layer (the Selector's field) as part of the run itself. Always the full pipeline. If the question isn't answered after R, loop again with a refined focus.
---

# /traverse — The Articulated Extended Cognitive Loop (Surfacing variant + Routelister exhaust)

(run each skill one by one, not at once, and do not use subagents! The order is: run skill, write its file, go to the next skill, and so on. Not: run all skills and write all docs.)

Run Articulate-Simple → Surfacing → Sensemaking → Decomposition → Innovation → Critique → **Routelister** on any question, then CONCLUDE. Always the full pipeline. No classification. No variable pipelines. Each step feeds the next. If the question isn't answered after R, loop again with a refined focus.

This is the **routelisted** variant of `/aMVLw`. Two differences from the parent:

1. (Inherited from /aMVLw) `/articulate_simple` runs FIRST on the user's raw question, BEFORE constructing `_branch.md`. The articulate_simple output (saved as `articulate_simple.md` in the inquiry folder) becomes the source from which `_branch.md` is constructed — its Question, Goal, Considered Articulations, Scope Check, and ambiguity-preservation are derived directly from articulate_simple's per-item bundle.
2. (New in /traverse) **After Critique and before CONCLUDE, `/routelister` runs as the exhaust step** — territory: this inquiry's own artifacts (`_branch.md` + the six discipline outputs); goal: received from `_branch.md`'s Goal. It enumerates the inquiry's onward route-field (typed, prescriptive, never choosing), producing **two files it writes itself**: `routelister.md` (the per-run route-map) and `_route.md` (the persistent cross-run concept-map index). **Both files remain in the inquiry root** beside `_state.md` and `_branch.md`, and **neither is moved to `docarchive/`** — routelister's outputs are the inquiry's onward route-field, consumed *after* the inquiry concludes (by the between-inquiry / next-step layer), so they are kept accessible at root rather than archived with the inward-looking discipline outputs.

The `flow-type` in `_state.md` is `articulated-surfacing-routed` to distinguish this from `articulated-surfacing` (`/aMVLw`), `extended-surfacing` (`/MVLw`), `extended` (`/MVL+`), and `classic` (`/MVL`). The five flow-types coexist; resume-routing keys off this field.

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
- skipping structural check silently because the checker script is missing;
- constructing `_branch.md` BEFORE `articulate_simple.md` exists (in this loop, articulate_simple is the upstream operation; `_branch.md` is DERIVED from it);
- running Routelister BEFORE Critique has its committed handoff (in this loop, Routelister is the exhaust step — it sweeps the FINISHED discipline artifacts);
- moving `_route.md` into `docarchive/` (it is routelister's persistent cross-run index — a state-class file that lives in the inquiry root beside `_state.md` and `_branch.md`, across iterations and after COMPLETE).

One sanctioned exception to "write only the current discipline's canonical output file": **Routelister canonically writes TWO files** (`routelister.md` + `_route.md`) — both are its own outputs per its spec; this is not a violation.

`finding.md` and `docarchive/` movement belong only to CONCLUDE, after all discipline workspaces have completed and after `cognitive_harness/protocols/conclude.md` has been loaded.



## Additional Input/Instructions

$ARGUMENTS

---

## Instructions

### Path vocabulary

Use these path variables consistently:

- `inquiry_path` is the full path to the inquiry folder. Use it for every file operation.
- `inquiry_id` is the local folder name or short display id. Do not use it to rebuild paths after creation.

Root inquiry creation is the only place traverse builds:

```text
inquiry_path = devdocs/inquiries/[inquiry_id]/
```

Branch inquiry creation is delegated to `cognitive_harness/protocols/branch_inquiry.md`, which returns `inquiry_path`. After that, traverse must treat `inquiry_path` as an opaque folder path.

### If NEW (input is a question or description):

1. Read the user's input fully. Preserve it verbatim as `raw_input` — this is the text passed to /articulate_simple in step 3 and preserved in `_branch.md`'s Source Input section in step 5.

2. Determine creation mode:

   - **BRANCH NEW:** If the input includes `branch_from:` or `--branch-from`, load `cognitive_harness/protocols/branch_inquiry.md` in full and execute BRANCH_INQUIRY with `runner: traverse`. Use the returned `inquiry_path`, `inquiry_id`, and `next_discipline`. Do not create a root inquiry folder. BRANCH_INQUIRY constructs the child `_branch.md` from the parent's source anchor (per its own protocol) — do not overwrite it. In BRANCH NEW mode, **still run articulate_simple in step 3** to produce the articulation bundle as a supplementary artifact in the child inquiry folder; **skip step 5** (the BRANCH-constructed `_branch.md` is the authoritative framing for the branch). Step 6's `_state.md` write applies (with Articulate-Simple checked off because it ran in step 3 and produced its bundle).
   - **ROOT NEW:** Otherwise create a normal root inquiry folder: `devdocs/inquiries/<YYYY-MM-DD_HH-MM__slugified_name>/`. This timestamped directory name is `inquiry_id`; the full folder path is `inquiry_path`.

3. **Run /articulate_simple on `raw_input`** (always — for both BRANCH NEW and ROOT NEW):

   - Invoke `Skill(skill: "articulate_simple", args: "<raw_input verbatim>\n\n---\nSAVE OUTPUT TO: [inquiry_path]/articulate_simple.md")`.
   - articulate_simple performs its four-stage process (Itemize → MQ + MQA → Deconstruct + MultiDepth → Rephrase) on the raw input and saves the per-item bundle as `[inquiry_path]/articulate_simple.md`.
   - If the Skill invocation cannot redirect the output path, fall back to: read articulate_simple's spec via `Read` on `cognitive_harness/articulate_simple/SKILL.md`, execute the process inline, and save the bundle directly to `[inquiry_path]/articulate_simple.md`. Either way, **the bundle must end up at `[inquiry_path]/articulate_simple.md`** before step 4 begins.
   - Wait for the file to exist. Read it in full into context.
   - Note the **Itemize count**, the **per-item identifiers**, and the **verdict** (`HIGH-PROCEED` / `MED-FLAG` / `LOW-RE-RUN` / `LOW-PROCEED` / `HIGH-FLAG`).
     - `HIGH-PROCEED` / `LOW-PROCEED` → proceed to step 4.
     - `MED-FLAG` / `HIGH-FLAG` → proceed to step 4, but display the flagged condition in step 7's brief summary so the user can interrupt before the pipeline consumes the framing.
     - `LOW-RE-RUN` → re-run articulate_simple on `raw_input` once. If `LOW-RE-RUN` fires a second time, surface the failure to the user with the specific LAYER 1 modes that fired (per articulate_simple's failure-mode catalog), and stop before constructing `_branch.md`. The articulation itself is structurally broken — the framing should not be inherited from it.

4. Read the articulate_simple bundle and extract the following per-item content (for use in step 5):

   For each item from `Itemize`:
   - `item_id`, `item_text` (the per-item statement).
   - `MQ1` (verdict-axis) — identified-ambiguities-list or explicit-empty.
   - `MQ2` (context-need axis) — identified-ambiguities-list (with verdict / kinds / stance sub-axes) or explicit-empty.
   - `MQ3` (intent-axis, WHAT) — identified-ambiguities-list or explicit-empty.
   - `MQ4` (boundary-axis) — identified-ambiguities-list (the NOT-list / exclusions) or explicit-empty.
   - `MQA` — reconcile / surface / ALIGNED content.
   - `Deconstruct` — tuple `(deliverable, kinds, bounds)`.
   - `MultiDepth literal-statement` — verbatim restatement.
   - `MultiDepth identified-purpose-motivation-ambiguities` (WHY-axis) — identified-ambiguities-list or explicit-empty.
   - `considered_articulations` — the variant-set from Rephrase.

   These per-item fields drive the derivation in step 5. **Do not interpret or collapse them** — copy them through to `_branch.md` preserving the openness.

5. **ROOT NEW only.** Write `[inquiry_path]/_branch.md` by **deriving every section from `articulate_simple.md`**. The construction is mechanical: each section names which articulate_simple fields source it.

   ```markdown
   # Branch: [name from inquiry_id slug]

   ## Source Input
   [The user's raw request, preserved verbatim. Also lives in articulate_simple.md's `## User Input` section; both copies are authoritative for transcription audit.]

   ```text
   [paste raw_input verbatim]
   ```

   ## Articulation Reference

   - **File:** `[inquiry_path]/articulate_simple.md`
   - **Itemize count:** [N]
   - **Per-item identifiers:** [list]
   - **Verdict:** [HIGH-PROCEED / MED-FLAG / LOW-RE-RUN / LOW-PROCEED / HIGH-FLAG]
   - **Flagged conditions (if any):** [list the LAYER 1 modes that fired, or "none"]

   ## Question
   [Construct from articulate_simple's per-item content:

   For each item:
   - Open with the **MultiDepth literal-statement** (preserves the user's wording without contamination).
   - Then enumerate the **MQ1 (verdict-axis) identified-ambiguities** — what kinds of asks the statement carries.
   - Then enumerate the **MQ3 (intent-axis, WHAT) identified-ambiguities** — what action-endpoints are plausible.

   When Itemize count = 1, present a single Question section.
   When Itemize count > 1, list each item as a sub-section ("Item 1: ..." / "Item 2: ...").

   **Preserve identified-ambiguities AS ambiguities** — do NOT commit to a single reading. The downstream pipeline operates over the considered-articulations set in this _branch.md, not over a chosen interpretation. Replacing ambiguities with a guessed reading at this step is the failure mode this loop's articulation-first design is built to prevent.]

   ## Goal
   [Construct from articulate_simple's per-item content:

   For each item:
   - The **Deconstruct tuple** `(deliverable, kinds, bounds)` — what shape the answer must take.
   - The **MultiDepth WHY-axis identified-ambiguities** — what motivations a good answer might serve (compliance / security / operational / etc.); preserve as ambiguities, not as a chosen motivation.
   - The **MQ2 (context-need axis) identified-ambiguities** — what context (verdict / kinds / stance sub-axes) downstream consumers need that isn't in the raw input.
   - The **MQ4 (boundary-axis) identified-ambiguities** — what would explicitly fail (negative spec; the user-stated exclusions).

   Preserve the identified-ambiguities here too. The goal carries openness; do not collapse it into a single "the good answer is X" statement.]

   ## Considered Articulations
   [The variant-set from articulate_simple's Rephrase output, per item. The downstream pipeline reads this section to span the openness articulate_simple identified — each surfacing / sensemaking / etc. step operates over the set, not over one chosen variant.

   For each item:
   - **Item [item_id] — [item_text]:**
     1. [variant 1 from considered_articulations]
     2. [variant 2]
     3. [...]
   ]

   ## Scope Check
   [For each item, compare the question's scope to the goal's requirements. Source the IN-scope from Deconstruct's `bounds`; source the OUT-of-scope from MQ4's identified-exclusions.

   If the question's scope (per Deconstruct bounds) covers everything the Goal asks for, write: "Question covers goal."

   If NOT: "Question covers goal: NO — goal includes [X, Y] but question only addresses [Z]. Consider widening to: [proposed wider question]."

   **Specific-vs-pattern check:** if the Question or Goal points at specific examples (e.g., "the 10 observed failures from inquiry X", "these 7 chains"), explicitly state whether the inquiry should address JUST THOSE EXAMPLES or the BROADER PATTERN those examples illustrate. Default: address the broader pattern unless the user has explicitly scoped to the specific examples. If both readings are plausible, present both to the user before proceeding to step 8.]

   ## Layer Commitment
   [REQUIRED when the question targets a discipline / protocol / framework artifact for from-scratch redefinition, meta-restructure, or fundamental rewrite. Trigger phrases include: "redefine X from scratch", "what should X be", "rewrite the X spec/protocol", "X isn't doing the right thing — let's redo it". The articulate_simple **MQ1 (verdict-axis) identified-ambiguities** often surface this trigger directly — when MQ1's ambiguities include items like `[redefine-X-as-Y / restructure-X / fix-X-process]`, the Layer Commitment section is required. OMIT this section entirely when the question is an ordinary problem-solving inquiry that does not target a discipline / protocol / framework artifact.

   When required, declare ONE primary cognitive layer:
   - **Meaning** — what the thing IS as a cognitive operation; adjudicates name, definition, essence.
   - **Structural** — what the thing's spec LOOKS LIKE; adjudicates sections, organization, schema, artifact shape.
   - **Process** — what STEPS the thing runs; adjudicates procedure, mechanism, gates, loop.

   List the other-layer alternatives considered and explicitly out of scope for THIS run, with a one-line reason each. If the inquiry intends to address multiple layers, declare a sequential plan: which layer first, what the next layer's inquiry will be, and why this order.

   If the primary layer cannot be picked, STOP and present the layer ambiguity to the user before continuing. Do not silently default to structural.]

   ## Synthesis Trigger
   [REQUIRED when the inquiry consolidates / synthesizes / rolls up TWO OR MORE prior inquiry outputs (findings, specs, drafts) into a single output. Trigger phrases include: "synthesize X and Y", "consolidate the priors", "produce an accurate/canonical version of X", "roll up findings A through C". The articulate_simple **MQ2 (context-need axis) identified-ambiguities** often surface this trigger — when MQ2's `verdict` sub-axis names two or more prior outputs as needed context, the Synthesis Trigger section is required. OMIT this section entirely when the inquiry does not consume prior inquiry outputs as inputs.

   When required, list each prior output being synthesized:
   - `[path to prior 1]` — short description of what it commits to.
   - `[path to prior 2]` — short description of what it commits to.
   - [...]

   Each prior carries commitments this inquiry will inherit. CONCLUDE will require the finding to include an `## Inherited Commitments Re-test` section that names each commitment and either re-tests it with cited evidence or explicitly flags it as inherited-without-re-test with a reason. Plan the inquiry's discipline work (especially Sensemaking and Critique) to actually do the re-testing, not just record the inheritance.]
   ```

   If the Scope Check flags a gap, present the proposed wider question to the user before proceeding. The user decides whether to widen or keep the original scope.

6. **Articulation-preservation fail-safe (run after `_branch.md` is written; ROOT NEW only):**

   1. Re-read `[inquiry_path]/articulate_simple.md` and `[inquiry_path]/_branch.md`.
   2. **Item coverage:** For each item in articulate_simple's Itemize output, verify the item is represented in `_branch.md` (in the Question section and in the Considered Articulations section).
   3. **Ambiguity coverage:** For each MQ axis (MQ1 / MQ2 / MQ3 / MQ4) per item with an `identified-ambiguities-list` answer, verify the ambiguities appear in `_branch.md` (in Question, Goal, Considered Articulations, or Scope Check — whichever the derivation rule in step 5 routes the axis to). MQ4 exclusions specifically must appear in Scope Check or Goal.
   4. **WHY-axis coverage:** For each item's MultiDepth identified-purpose-motivation-ambiguities, verify the WHY-axis ambiguities appear in Goal.
   5. **Variant coverage:** Verify every entry in articulate_simple's considered-articulations set per item appears in `_branch.md`'s Considered Articulations section.
   6. If ANY item / ambiguity / exclusion / variant is missing from `_branch.md`, expand `_branch.md` to include it before proceeding to step 7. Do not drop content; do not paraphrase past meaning.

   The fail-safe is **mechanism-redundancy across timings**: articulate_simple's 2-shape principle prevents commitment-by-absence inside the discipline; this fail-safe prevents commitment-by-derivation when the loop constructs `_branch.md` from articulate_simple's bundle. Both layers together preserve openness through to the downstream surfacing-to-critique pipeline.

7. Write `[inquiry_path]/_state.md`:

   **Timestamp policy (applies to this write AND to every later `## History` append in EXECUTE PIPELINE step 5):** every `[date]` in a `## History` entry MUST be a **fresh `date +%Y-%m-%d_%H-%M` reading taken at the moment that entry is written**. Do NOT reuse the inquiry_id's date and do NOT reuse a previous entry's date. The inquiry_id's date is the *identity-stamp* (set once at folder creation); `## History` entries are a *timeline* (each entry stamped at its own write-time).

   ```markdown
   # State: [name]
   ## Flow-type
   articulated-surfacing-routed
   ## Pipeline
   A → Su → S → D → I → C → R (always)
   ## Progress
   - [x] Articulate-Simple
   - [ ] Surfacing
   - [ ] Sensemaking
   - [ ] Decomposition
   - [ ] Innovation
   - [ ] Critique
   - [ ] Routelister
   ## Iteration
   1
   ## Status
   ACTIVE
   ## Next Discipline
   Surfacing
   ## Relationships
   [Add if applicable. Omit section if standalone.
   - CONTINUES FROM: inquiry_path (context)
   - SUPERSEDED BY: inquiry_path (reason)
   - RELATED: inquiry_path (connection)]
   ## History
   - [date]: Created. Question: [one-line summary]. Articulation: [verdict] (Itemize count = N; flagged: [list or "none"])
   ```

   Articulate-Simple is pre-checked because it already ran in step 3 and produced its bundle.

8. Present briefly:
   ```
   Articulated extended loop (surfacing + routelister variant) created: [inquiry_path]/
   Pipeline: A → Su → S → D → I → C → R
   Articulation: [verdict] | items: N | considered articulations total: M | flagged: [list or "none"]
   Question: [restated from _branch.md, preserving identified-ambiguities]
   Goal: [from _branch.md, preserving openness]
   ```

   If the articulation verdict was `MED-FLAG` or `HIGH-FLAG`, list the flagged conditions explicitly so the user can interrupt before the pipeline begins.

9. **Immediately begin the pipeline** — proceed to EXECUTE PIPELINE below, starting from **Surfacing** (Articulate-Simple is already complete). Do not wait for user input unless step 8 flagged a condition the user should review.

---

### If RESUME (input is a folder path):

1. Set `inquiry_path` to the input folder path. Use `inquiry_id` only as a display label.

2. Read `[inquiry_path]/_state.md` and `[inquiry_path]/_branch.md`.

3. Verify `flow-type: articulated-surfacing-routed` in `[inquiry_path]/_state.md`. If the field is `classic`, this inquiry belongs to `/MVL`. If `extended`, to `/MVL+`. If `extended-surfacing`, to `/MVLw`. If `articulated-surfacing`, to `/aMVLw`. If absent or any other value, flag to the user and stop. Only `articulated-surfacing-routed` inquiries resume with `/traverse`.

4. Determine where the pipeline left off by checking which files exist in `[inquiry_path]`:

   - If `articulate_simple.md` is MISSING (e.g., an `articulated-surfacing-routed` inquiry was created without its articulation step completing): run articulate_simple FIRST per step 3 of "If NEW", then if `_branch.md` is also missing/stale, derive it per step 5 of "If NEW", then proceed.
   - If `articulate_simple.md` exists but `_branch.md` is missing: derive `_branch.md` per step 5 of "If NEW", then proceed.
   - Otherwise: proceed to EXECUTE PIPELINE from the first incomplete discipline in Su → S → D → I → C → R order (Articulate-Simple is already complete; Routelister counts as incomplete when `routelister.md` is absent from both the inquiry root and `docarchive/`).

---

### EXECUTE PIPELINE

Run disciplines sequentially: A → Su → S → D → I → C → R. Articulate-Simple has already completed before this section is reached (in step 3 of NEW or as a RESUME catch-up). For each remaining discipline that hasn't produced its output file yet, execute it using the Discipline Transition Protocol below. Continue through all remaining disciplines without pausing — do not wait for user input between disciplines. The user can interrupt at any time to redirect.

**For each discipline in sequence (Surfacing onward):**

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
   - **Routelister's invocation differs** (it takes a territory + a goal, not the branch file alone): invoke `Skill(skill: "routelister", args: "territory: [inquiry_path]/ (this inquiry's artifacts — _branch.md + the six discipline outputs). goal: <the Goal from [inquiry_path]/_branch.md, quoted>. Save the route-map to [inquiry_path]/routelister.md; the persistent index lives at [inquiry_path]/_route.md (load it if present — index-extending; create it if not — fresh).")`. Routelister writes BOTH files itself, per its own spec.
   - If the Skill tool fails → fall back to `Read` on the discipline's command file, then execute
   - If Read also fails → HALT and tell the user: "Could not load spec for [discipline]. Run manually: /[discipline] [inquiry_path]/_branch.md"
   - **Never execute a discipline from memory alone.**

3. **Execute the loaded spec** at full depth. The discipline saves its output to the inquiry folder.

4. **Run structural check** on the saved output:
   ```
   bash tools/structural_check.sh [inquiry_path]/[output_file] [discipline_name]
   ```
   Discipline-to-name mapping: `articulate_simple.md → articulate_simple`, `surfacing.md → surfacing`, `sensemaking.md → sensemaking`, `decomposition.md → decomposition`, `innovation.md → innovation`, `critique.md → critique`, `routelister.md → routelister` (if the checker lacks a routelister mode, check manually: Map Header · per-route records · Excluded section · Telemetry · self-assessment verdict — and that `_route.md` was written/updated).
   If any `[FAIL]` lines appear, fix the missing sections in the output and re-save. Re-run the check to confirm. Include the results in the next checkpoint display.

5. **Update `_state.md`:** check off the completed discipline, set next discipline, **and append a `## History` entry** summarizing what just completed (which discipline; key telemetry; structural-check result; next discipline). The entry's `[date]` MUST be a **fresh `date +%Y-%m-%d_%H-%M` reading taken now** — run `date` again; do NOT reuse the inquiry_id's timestamp or any prior History entry's timestamp.

6. **Continue immediately** to the next discipline in A → Su → S → D → I → C → R.

**Skill-to-command mapping:**

| Discipline | Skill name | Output file |
|---|---|---|
| Articulate-Simple | `articulate_simple` | `articulate_simple.md` |
| Surfacing | `surfacing` | `surfacing.md` |
| Sensemaking | `sense-making` | `sensemaking.md` |
| Decomposition | `decompose` | `decomposition.md` |
| Innovation | `innovate` | `innovation.md` |
| Critique | `td-critique` | `critique.md` |
| Routelister (exhaust) | `routelister` | `routelister.md` **+ persistent `_route.md`** (BOTH stay in inquiry root; **never archived**) |

**When all seven are complete** (articulate_simple, surfacing, sensemaking, decomposition, innovation, critique, routelister) → proceed to ITERATION COMPLETE below.

---

### If ITERATION COMPLETE (all seven files exist):

Read the critique output (and note routelister's route-map — it is the inquiry's onward field, not part of the answeredness judgment). Answer three questions:

**1. What survived?**
List the surviving ideas/approaches from critique's verdicts. What was killed? What was refined?

**2. Is the original question answered?**
Re-read `_branch.md`'s question and goal. Does a clear survivor exist that addresses the question and meets the goal? Be honest — a partial answer is not a full answer. When evaluating "the question", remember the question is **multi-articulation** (the Considered Articulations section preserves variants); a survivor that addresses only one variant is a partial answer unless the other variants were explicitly killed during the pipeline.

- **YES — the question is answered:**

  Load `cognitive_harness/protocols/conclude.md` in full and execute the **CONCLUDE** protocol on this inquiry's folder. CONCLUDE compiles the loop's artifacts into `finding.md` (using the standardized template + style rules + size-adaptive guidance defined in the protocol), archives discipline outputs to `docarchive/`, updates `_state.md` to status COMPLETE, prints the brief summary, and prints any `## Relationships` pointers (using `/traverse` as the resume runner for `articulated-surfacing-routed` flow-type).

  Note: CONCLUDE auto-detects pipelines from `_state.md`'s `flow-type` field. The `articulated-surfacing-routed` flow-type produced by `/traverse` archives **six** discipline files (`articulate_simple.md`, `surfacing.md`, `sensemaking.md`, `decomposition.md`, `innovation.md`, `critique.md`) — **`routelister.md` is NOT archived; it stays in the inquiry root** (see the next paragraph). If CONCLUDE doesn't yet recognize `articulated-surfacing-routed`, instruct it to treat the inquiry as a 6-file-archive extended-pipeline variant with `articulate_simple.md` as the first archived file and `critique.md` as the last, while `routelister.md` is read for the finding's onward context but left in the inquiry root (the route-map is the inquiry's onward field and typically feeds the finding's Next Actions / Open Questions rather than its answer).

  **Neither `routelister.md` nor `_route.md` is archived — both stay in the inquiry root.** They are routelister's two outputs (the per-run route-map + the persistent cross-run index), and both stay in the inquiry root beside `_state.md` and `_branch.md`, after COMPLETE included — because they are consumed *after* the inquiry concludes (by the between-inquiry / next-step layer), unlike the inward-looking discipline outputs. CONCLUDE archives only the **six** upstream discipline outputs (`articulate_simple.md` … `critique.md`) and leaves `routelister.md` and `_route.md` where they are. (`_route.md` is already excluded by CONCLUDE's `_*.md` convention; `routelister.md` is the explicit exception — it is read for the finding but not archived.)

  Do not execute CONCLUDE from memory; always load `cognitive_harness/protocols/conclude.md` before invoking.

- **NO — the question is not fully answered:**
  ```
  ## Iteration [N] Complete — Not yet answered

  ### What we learned
  [What this iteration revealed — what survived, what was killed, what gaps remain]

  ### The gap
  [What specific aspect of the question remains unanswered?
   Which variant from the Considered Articulations was the gap concentrated in?
   What did critique reveal is missing?]

  ### Next iteration focus
  [Restate the question with a NARROWER focus based on the gap.
   This becomes the seed for the next Su → S → D → I → C → R pass.
   The next iteration does NOT re-run articulate_simple — the original articulation is preserved as the framing baseline.
   If the iteration focus has shifted enough to warrant re-articulation, the user can request that explicitly; otherwise the existing articulate_simple.md continues to ground the framing.]
  ```

  Update `_state.md`:
  - Increment iteration
  - Reset progress checkboxes for Su / S / D / I / C / R only (leave Articulate-Simple checked — it ran once at iteration 1 and remains the framing baseline across iterations). Before resetting R, move the prior iteration's `routelister.md` aside (rename to `routelister_iter[N].md` in the inquiry root — these superseded per-iteration snapshots ARE archived by CONCLUDE at the end; the final, current `routelister.md` stays in the inquiry root); the next Routelister run is **index-extending** (it loads the existing `_route.md` and accumulates — never delete `_route.md` between iterations).
  - Set next discipline: Surfacing
  - Append to History: what happened this iteration, what the gap is, what the next focus is

  Print briefly:
  ```
  Iteration [N] complete. Question not fully answered.
  Gap: [what's missing] (concentrated in variant: [which considered articulation, if applicable])
  Next iteration focus: [refined question]
  ```

  Then immediately begin the next iteration — proceed to EXECUTE PIPELINE with the refined focus, starting from Surfacing.

  If this iteration produced multiple survivors, frontier questions, or branching possibilities, suggest:
  ```
  Multiple directions emerged. For a full possibility map, run:
  /navigate [inquiry_path]/
  ```

**3. Does the answer advance the goal?**
If the question IS answered but the answer doesn't advance the goal stated in `_branch.md` — note this. The answer might be technically correct but practically useless. Flag it for the user. (Recall that articulate_simple preserved WHY-axis motivation-ambiguities in the Goal; check whether the answer serves at least one of those motivations.)

**4. Observation (optional)**
```
Any observation about this run? (optional — skip if nothing comes to mind)
```
If the user provides one, append to `devdocs/improvement_observations.md`:
```
## [date] | [problem from _branch.md] | [iteration count] | [traverse]
[the user's observation]
```
If the user skips, move on. No gate. No requirement. Observations accumulate over time. When patterns emerge across multiple observations, the user can run `/traverse "review improvement observations and propose spec changes"` — the loop on the system's own feedback.

---

## Cross-Session Resume

```
/traverse [inquiry_path]/
  → Reads _state.md (verifies flow-type: articulated-surfacing-routed)
  → Checks whether articulate_simple.md exists (runs articulate_simple + derives _branch.md if not)
  → Sees where in Su → S → D → I → C → R the pipeline left off
  → Loads the next discipline's spec via Skill tool
  → Continues the pipeline from where it stopped
```

`_state.md` has everything needed to resume. Any session, any AI. The Skill tool invocation ensures the discipline spec is freshly loaded even in a cold session. The articulation baseline (articulate_simple.md + the derived _branch.md) persists across all iterations of an inquiry — and so does `_route.md` (routelister's cumulative index; later runs load and extend it).

---

## Rules

1. **Always A → Su → S → D → I → C → R.** Every question gets the full loop. No shortcuts. No variable pipelines. Strict sequence: Articulate-Simple before _branch.md is constructed; Surfacing, then Sensemaking, then Decomposition before Innovation and Critique; **Routelister always LAST, after Critique's committed handoff and before CONCLUDE** — it is the exhaust step that enumerates the finished inquiry's onward route-field; it never selects, never feeds back into this inquiry's answer.
2. **Each step saves to the inquiry folder.** Output files are named canonically: `articulate_simple.md`, `surfacing.md`, `sensemaking.md`, `decomposition.md`, `innovation.md`, `critique.md`, `routelister.md` (+ routelister's persistent `_route.md`). **Both `routelister.md` and `_route.md` live in the inquiry root** beside `_state.md`/`_branch.md` and are NEVER moved to `docarchive/` — CONCLUDE archives only the six upstream discipline outputs (`articulate_simple.md` … `critique.md`). Construct `_branch.md` only AFTER `articulate_simple.md` exists.
3. **`_state.md` is the source of truth.** Progress, iteration count, history, next discipline, flow-type.
4. **`_branch.md` is DERIVED from `articulate_simple.md`, not authored ad-hoc.** The derivation rule in step 5 of NEW maps articulate_simple's bundle fields into _branch.md's sections. Manual edits to _branch.md after derivation are permitted but the source-of-truth for openness remains articulate_simple.md. If the articulation needs to change, re-run articulate_simple and re-derive _branch.md — do not edit _branch.md in isolation.
5. **Preserve openness through derivation.** articulate_simple's identified-ambiguities-lists, MQ4 exclusions, MultiDepth WHY-ambiguities, and considered-articulations set must all flow through into `_branch.md`. The articulation-preservation fail-safe (step 6 of NEW) is the per-construction backstop; the downstream pipeline reads `_branch.md` expecting openness.
6. **If the question isn't answered, loop again — but DON'T re-articulate by default.** Each iteration narrows the focus based on what the previous iteration revealed, working over the same articulation baseline. Re-running articulate_simple is permitted at user request when the iteration focus has shifted enough to warrant re-articulating, but is not automatic.
7. **The human can redirect at any point.** The pipeline runs continuously without pausing. The human can interrupt mid-response to redirect, re-run, or override. Checkpoints display telemetry between disciplines for visibility — they are informational, not gates. The `MED-FLAG` / `HIGH-FLAG` articulation verdicts are also informational (the pipeline proceeds by default) but are surfaced in step 8 of NEW so the user can choose to intervene.
8. **Failures are data.** If the loop produces a bad answer, the WHERE and WHY of the failure is valuable — it reveals what needs to improve in the discipline configurations (the specs). Failures attributable to articulation specifically (e.g., the pipeline operated over the wrong reading of the question, or dropped a variant) are evidence to improve the articulate_simple → _branch.md derivation rules.
9. **`/MVL` (classic), `/MVL+` (explore variant), `/MVLw` (surfacing variant), and `/aMVLw` (articulated-surfacing variant) are UNCHANGED.** This command (`/traverse`) is the articulated-surfacing-ROUTED variant and coexists with all four. Existing classic inquiries resume with `/MVL`; explore-variant with `/MVL+`; surfacing-variant with `/MVLw`; articulated-surfacing with `/aMVLw`; articulated-surfacing-routed with `/traverse`. The `flow-type` field in `_state.md` distinguishes them: `classic` / `extended` / `extended-surfacing` / `articulated-surfacing` / `articulated-surfacing-routed`.
10. DO NOT RUN EACH SKILL PARALLEL OR WITH SUBAGENTS TO SAVE TIME OR TOKEN. EACH SKILL SHOULD BE RUN AS CANNON AND IT IS OKAY IF THEY CONSUME CONTEXT. THEY ARE SUPPOSED TO BE.
