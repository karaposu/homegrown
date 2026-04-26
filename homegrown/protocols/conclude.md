> **Loading note.** This file is loaded by `commands/MVL.md` and `commands/MVL+.md` at the iteration-complete-yes branch (and may be loaded by future loop runners that produce findings) and is intended to be read in full before CONCLUDE executes. Every section below — pipeline detection, finding template, style rules, size-adaptive application, post-finding steps — is referenced by the procedure. Do not summarize or partial-load; the procedure's instructions assume all sections are in context.

---

# CONCLUDE — The Inquiry-Verdict Compilation Protocol

CONCLUDE is the operational protocol that turns a completed SIC (or ESDIC) iteration into the standardized `finding.md` artifact saved inside the inquiry folder. It is invoked by loop runners (`/MVL`, `/MVL+`, future runners) at iteration-complete-yes — the moment the runner has decided the question is answered.

CONCLUDE does NOT decide whether the question is answered (that's the runner's responsibility). CONCLUDE produces the verdict artifact once the YES decision is made.

---

## Step 1 — Pipeline detection

CONCLUDE auto-detects which discipline outputs to read by inspecting `_state.md`:

- **Classic pipeline** (`Pipeline: S → I → C`, or `Flow-type: classic`, or absent flow-type): read 4 files — `_branch.md`, `sensemaking.md`, `innovation.md`, `critique.md`.
- **Extended pipeline** (`Pipeline: E → S → D → I → C`, or `Flow-type: extended`): read 6 files — `_branch.md`, `exploration.md`, `sensemaking.md`, `decomposition.md`, `innovation.md`, `critique.md`.
- **Other pipelines** (future runners with different SIC-shaped pipelines): read all `*.md` files in the inquiry folder that aren't `_*.md` (state/branch files), `finding.md` (output), or files inside `docarchive/`. The pipeline declaration in `_state.md` is the authoritative list.

If `_state.md` is missing or malformed, HALT and tell the user: "Cannot detect pipeline from `_state.md`. CONCLUDE needs the pipeline declaration to know which discipline outputs to read."

---

## Step 2 — Compile the finding

Read all discipline outputs identified in Step 1, plus `_branch.md` for the question and goal context. Produce `finding.md` as a single argumentative document using the Below given finding document structure template. 

Write for a reader who has NOT seen the SIC output — someone who just joined the project and needs to understand: what was the question, what's the answer, why this answer over the alternatives, and what's still open. **Do not compress.** Explain fully even if the finding is long. The test: can someone read ONLY `finding.md` and understand the complete decision?

### Non-ambiguity principle (applies to every sentence)

Each sentence must be understandable to a reader with no prior exposure to this inquiry. The failure mode to prevent is **internally-referential shorthand** — sentences that make sense to the author (who's been living with the inquiry's vocabulary) but fail for an outside reader. Define niche terms briefly on first use; give project-specific references (e.g., `/MVL`, `enes/`, specific disciplines) a parenthetical context the first time each appears in the finding.

Also keep the language accurate, technical only in required parts. Dont enforce technicality. 

Example of the failure mode and its correction:

- ❌ *"Template extends from 4 sections to 6"* — which template? in what context?
- ✅ *"Our existing finding.md template (defined in the `value_extraction_design` inquiry) has 4 sections; this audit adds 2 more for a total of 6."*

### Finding template

Use this structure for your output finding.md file:

```markdown
---
status: active
refines: devdocs/inquiries/X/finding.md         [only when refining/superseding a prior finding]
---
# Finding: [inquiry name]

## Changes from Prior                           [optional; only when frontmatter has refines/supersedes/corrects]
**What's preserved:** ...
**What's changed:** ...
**What's new:** ...
**Migration:** ...

## Question
[From _branch.md — the question and the goal. Comes first so the
 reader has context before the answer.]

## Finding Summary
[The specific answer as 3-7 bullet points. Each bullet is a complete
 claim satisfying the non-ambiguity principle (readable standalone
 by someone with no prior exposure to this inquiry). Bold key terms.
 Bullets preferred over prose for scannability. WRITE THIS BEFORE
 THE FINDING BODY — it becomes a commitment the Finding elaborates;
 revise if the body reveals the summary needs updating.]

## Finding
[The full answer. Base on critique's "The Answer" or assembly
 verdict. Enrich with innovation's Assembly design, sensemaking's
 SV6 understanding, and (for extended pipeline) exploration's
 territorial map and decomposition's coupling structure. Complete,
 self-contained, non-compact. Use numbered subsections when length
 exceeds ~100 lines.]

## Next Actions                                  [required when finding proposes changes; otherwise omit]

### MUST
[Items required for the finding's value to be realized. Per-item format:
  - **What:** specific action
  - **Who:** discipline / agent / file / person
  - **Gate:** time-bound OR condition-bound OR observable trigger
  - **Why:** expected impact — what this action produces or prevents]

### COULD
[Items worth considering but not required. Same per-item format as MUST.]

### DEFERRED
[Items deliberately postponed. Per-item format:
  - **What:** specific action
  - **Gate:** revival trigger (time-bound / condition-bound / observable)
  - **Why (if revived):** expected impact]

## Reasoning
[Why this finding over alternatives. Include:
 - Every KILL from critique with prosecution reasoning
 - Every KILL from innovation with rejection reasoning
 - Every SURVIVE with why it held
 - (For extended pipeline) Contradictions reconciled across
   exploration / sensemaking / decomposition (and how they were resolved)
 Significant kills: full explanation of what was proposed
 and why it was rejected. Trivial kills: brief mention.
 Show the full field of what was considered.]

## Open Questions
[Four typed subsections — populate the ones that apply; the rest may be omitted.]

### Monitoring
[Observable after N inquiries / when Y completes.]

### Blocked
[Cannot be answered until X ships / Y happens.]

### Research Frontiers
[No known path; requires new investigation.]

### Refinement Triggers
[Specific conditions (time-bound / condition-bound / observable) under
 which a locked decision in this finding re-opens.]
```

### Three style rules (apply throughout the finding)

1. **Hedging specificity.** A hedge is a phrase that softens a claim ("mostly works," "generally sound," "with caveats"). Any hedge must name WHAT is specifically uncertain and WHY. Vague hedges are defects.
2. **Cross-reference format.** First reference to another finding uses the full path (`devdocs/inquiries/X/finding.md`); subsequent references use the bare inquiry name (`X`). Add a relationship label when applicable — `REFINES: X (what specifically is load-bearing)`. In frontmatter, use the full path in `refines:` / `supersedes:` / `corrects:` / `impacted_by:` fields.
3. **Gate specificity.** Triggers, deferred conditions, and revival criteria must be time-bound ("after 30 inquiries"), condition-bound ("when /intuit Phase β ships"), or observable ("if calibration N ≥ 30"). "Eventually," "when appropriate," "as needed" are defects.

### Size-adaptive application

Short findings (≤100 lines) may skip optional sections — Changes from Prior (unless refining a prior finding), Next Actions (unless proposing changes), and Open Questions subsections may flat-list when only one category applies. Long findings (>100 lines) must include the applicable optional sections.

### Multi-iteration handling

For multi-iteration inquiries: the finding reflects the FINAL iteration's answer. Prior iterations' lessons go in Reasoning as context.

### Quality test

After writing the finding, ask: *"Can someone read ONLY `finding.md` and understand the complete decision?"* If no — if the reader needs to consult `sensemaking.md` or `critique.md` to understand the verdict — the finding has failed the test. Revise.

---

## Step 3 — Archive discipline outputs

Move discipline output files to a `docarchive/` subfolder inside the inquiry folder. The set of files to archive depends on the pipeline detected in Step 1:

- **Classic pipeline:** archive `sensemaking.md`, `innovation.md`, `critique.md`. (Three files.)
- **Extended pipeline:** archive `exploration.md`, `sensemaking.md`, `decomposition.md`, `innovation.md`, `critique.md`. (Five files.)
- **Other pipelines:** archive all discipline output files identified in Step 1 (everything read except `_branch.md`).

Use:
```bash
mkdir -p devdocs/inquiries/<name>/docarchive/
# move the appropriate files based on pipeline
```

`_branch.md`, `_state.md`, and the newly-written `finding.md` stay in the inquiry folder root.

---

## Step 4 — Update `_state.md`

Modify the inquiry folder's `_state.md`:
- Set `Status` → `COMPLETE`.
- Set `Next Discipline` → `—` (em-dash; the inquiry is closed).
- Append a History entry summarizing the iteration: what was concluded, the one-sentence answer, status COMPLETE.

---

## Step 5 — Print the brief summary in conversation

Print (not the full finding):
```
[Inquiry name] complete.

Question: [restated from _branch.md]
Answer: [one-sentence summary]
Finding: devdocs/inquiries/[name]/finding.md
```

The user can read the finding directly; the conversation print is just the navigation pointer.

---

## Step 6 — Print post-completion pointers from `_state.md` Relationships

Read the `## Relationships` section of `_state.md`. For each relationship type present:

- **CONTINUES FROM:** print
  ```
  This finding is ready for [parent_name] ([context]).
  Finding: [one-sentence answer].
  Resume: [appropriate runner] devdocs/inquiries/[parent_name]/
  ```
  Choose the runner based on the parent's `Flow-type`:
  - `classic` → `/MVL`
  - `extended` → `/MVL+`
  - Other → use the runner that started the parent inquiry (read from parent's `_state.md` history).

- **RELATED:** print
  ```
  Related: [name] ([context]) — this finding may affect it.
  ```

- **SUPERSEDED BY:** print
  ```
  Note: this inquiry is superseded by [name]. The finding stands as historical record.
  ```

If there are no `## Relationships`, no additional output is printed beyond Step 5's brief summary.

---

## Failure modes

- **Pipeline detection failure** — `_state.md` is missing, malformed, or has an unrecognized pipeline. HALT and ask the user to specify the pipeline manually before retrying.
- **Missing discipline outputs** — Step 1 says the pipeline expects N files but fewer exist in the folder. Do NOT proceed; the iteration isn't actually complete. Tell the user which files are missing.
- **Internally-referential shorthand in the finding** — the finding fails the non-ambiguity principle. Detect via the quality test in Step 2; revise before saving.
- **Vague hedges, vague gates, malformed cross-references** — the finding fails one of the three style rules. Detect during writing; revise before saving.

---
