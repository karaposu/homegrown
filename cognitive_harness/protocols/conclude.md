> **Loading note.** This file is loaded by `commands/MVL.md` and `commands/MVL+.md` at the iteration-complete-yes branch (and may be loaded by future loop runners that produce findings) and is intended to be read in full before CONCLUDE executes. Every section below — pipeline detection, finding template, style rules, size-adaptive application, post-finding steps — is referenced by the procedure. Do not summarize or partial-load; the procedure's instructions assume all sections are in context.

---

# CONCLUDE — The Inquiry-Verdict Compilation Protocol

CONCLUDE is the operational protocol that turns a completed SIC (or ESDIC) iteration into the standardized `finding.md` artifact saved inside the inquiry folder. It is invoked by loop runners (`/MVL`, `/MVL+`, future runners) at iteration-complete-yes — the moment the runner has decided the question is answered.

CONCLUDE does NOT decide whether the question is answered (that's the runner's responsibility). CONCLUDE produces the verdict artifact once the YES decision is made.

---

## Path contract

CONCLUDE operates on one `inquiry_path`: the full path to the inquiry folder being concluded.

`inquiry_path` may be a root inquiry:

```text
devdocs/inquiries/<inquiry_id>/
```

or a nested branch inquiry:

```text
devdocs/inquiries/<root>/branches/<child>/branches/<grandchild>/
```

Use `inquiry_path` for every file operation. Do not rebuild paths from an inquiry name or local folder id.

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

Write for a reader who has NOT seen the discipline outputs — someone
who just joined the project and needs to understand: what was the
question, what's the answer, why this answer over the alternatives,
and what's still open. so the reader will understand where you are coming from.  This is important.  

**Be complete but not dense.** Completeness means nothing important
is left out. Density means too many things squeezed into too few
sentences. The failure mode is not "the finding is too long" — it's
"the finding is hard to follow because each paragraph is doing four
things at once." Give each idea room to breathe. A longer finding
that reads easily is better than a shorter one that requires
re-reading.



### Non-ambiguity principle (applies to every sentence)

Each sentence must be understandable to a reader with no prior exposure to this inquiry. The failure mode to prevent is **internally-referential shorthand** — sentences that make sense to the author (who's been living with the inquiry's vocabulary) but fail for an outside reader. Define niche terms briefly on first use; give project-specific references (e.g., `/foo`, `bar/`, specific disciplines) a parenthetical context the first time each appears in the finding.

Also keep the language accurate, technical only in required parts. Dont enforce technicality. 

Example of the failure mode and its correction:

- ❌ *"Template extends from 4 sections to 6"* — which template? in what context?
- ✅ *"Our existing finding.md template (defined in the `value_extraction_design` inquiry) has 4 sections; this audit adds 2 more for a total of 6."*

Additional examples of the failure mode and its correction:

- ❌ "the current Probe section says..." — which spec? in what discipline?
- ✅ "the Probe section in `cognitive_harness/explore/references/explore.md` (the
   Structural Exploration discipline spec) says..."

- ❌ "Surface-Only Scanning failure mode" — failure mode of what? defined
   where?
- ✅ "Surface-Only Scanning (one of six failure modes documented in the
   Structural Exploration discipline spec at
   `cognitive_harness/explore/references/explore.md`)"

- ❌ "Coarse Scan" — coarse scan of what? in what process?
- ✅ "Coarse Scan (the breadth-first first-pass step in Structural
   Exploration's Resolution Progression)"

Plain-language preference. Use the simplest accurate phrasing. "The AI picks the highest-confidence option" over "the autonomous-mode selection heuristic is deterministic (highest-confidence option)." Technical terms earn their place only when the plain version would be imprecise or ambiguous — not when it would merely be less formal. When a technical term is necessary, follow it immediately with what it means in practice.

### Finding template

Use this structure for your output finding.md file:

````markdown
---
status: active
model: [model id from session context, e.g., claude-opus-4-7[1m]; "unknown" if not derivable]
effort: [effort setting from session context, e.g., max; "unknown" if not derivable]
refines: devdocs/inquiries/X/finding.md         [or supersedes:/corrects: when applicable; omit when no prior finding]
---
# Finding: [inquiry name]

## Changes from Prior                           [optional; only when frontmatter has refines/supersedes/corrects]
**Prior path:** devdocs/inquiries/prior_inquiry_name_here/finding.md
**Revision trigger:** User correction / new evidence / scope change / stronger framing / implementation result
**What's preserved:** ...
**What's changed:** ...
**What's new:** ...
**Migration:** ...

## Question
[From _branch.md — the question and the goal. Comes first so the
 reader has context before the answer.]

## Finding Summary
Write this section BEFORE the Finding body — it becomes a commitment
the body elaborates. If writing the body reveals the summary needs
updating, revise it.


Format: bullet points or sub-bullet points (as many as the answer needs). Each bullet
should be digestible in one read — if a bullet requires the reader
to stop and mentally separate its parts, it's doing too much. Split
when in doubt, but don't split things that only make sense together. Every reference carries its short descriptive name — "Item 3 (the continuous-loop runner)," not "Item 3." The reader should never need
to scroll up to decode a reference.

Plain language first: Use the simplest accurate phrasing.
  "The runner picks the highest-confidence option" over "the
  autonomous-mode selection heuristic is deterministic
  (highest-confidence option)." A technical term earns its place only
  when the plain version would be imprecise — not when it would merely
  be less formal.

Anti-patterns to avoid:
- A single bullet that lists all five roadmap items, then states their
  dependencies, then gives the effort estimate. That is three bullets.
- A bullet that packs four resolved design decisions into one sentence
  joined by commas. Each decision is its own bullet.
- A bullet that says "Item 3 is the load-bearing item" without ever
  saying what Item 3 is in that bullet.


## Finding

 Start by with extra small surrounding helpful context (slight mention of what is the goal why we are even discussing this) so the reader will understand where you are coming from to these conclusions


[The full answer. Base on critique's "The Answer" or assembly
 verdict. with innovation's Assembly design, sensemaking's
 SV6 understanding, and (for extended pipeline) exploration's
 territorial map and decomposition's coupling structure. Complete,
 self-contained, non-compact. Use numbered subsections when length
 exceeds ~100 lines.]


## Inherited Commitments Re-test                 [required when `_branch.md` declared a Synthesis Trigger OR when the finding's frontmatter declares `refines:` / `supersedes:` / `corrects:` of a prior finding and inherits N≥3 commitments from it; otherwise omit]

[For each commitment inherited from a prior output, list:
  - **Commitment:** [verbatim or short paraphrase of the inherited commitment]
  - **Source:** [path to the prior finding/spec + section]
  - **Re-test status:** RE-TESTED / INHERITED-WITHOUT-RE-TEST
  - **Evidence (if RE-TESTED):** [what this inquiry observed; cited]
  - **Reason (if INHERITED-WITHOUT-RE-TEST):** [why the re-test was skipped — e.g., out of scope; trusted by independent priors; resource-constrained]

A commitment cannot be silently absorbed. It is either re-justified by this inquiry's own work, or it is explicitly flagged as carried-forward-without-re-test with a reason. The flag is intentional friction — a future reviewer can spot weak inheritance.]


## Next Actions                                  [required when finding proposes changes; otherwise omit]

### MUST
[Items required for the finding's value to be realized. Per-item format:
  - **What:** specific action
  - **Who:** discipline / agent / file / person
  - **Gate:** time-bound OR condition-bound OR observable trigger
  - **Why:** expected impact — what this action produces or prevents]

### COULD
[Items worth considering but not required. Same per-item format as MUST, plus an optional `Depends-on:` field for items with cross-section dependencies — populated per "COULD-vs-MUST dependency gating" below.]

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

## Source Input                                 [required for correction/refinement findings unless omitted/redacted with reason; optional otherwise]

<details>
<summary>Raw user input for this finding</summary>

```text
[raw prompt or correction text]
```

</details>
````

If `Source Input` is required but the raw input is omitted or redacted, keep the section and replace the details block with: `Raw input omitted/redacted: [reason].`

### COULD-vs-MUST dependency gating

After drafting Next Actions, walk each COULD and check whether it depends on (references / assumes the resolution of) any MUST item in the same finding. For every COULD with a detected MUST-dependency, append a `Depends-on:` field to the COULD's body that names the specific MUST and marks the COULD as GATED — meaning a future actor (human or AI) should not act on the COULD until the MUST resolves.

Per-item shape with the gating field:

- **What:** [action]
- **Who:** [agent]
- **Gate:** [time-bound / condition-bound / observable]
- **Why:** [expected impact]
- **Depends-on:** MUST item "[short name of the MUST]". This COULD is GATED — do not act until the MUST resolves.

**Override path.** When the COULD is genuinely adoption-ready independent of the MUST's eventual resolution (e.g., the MUST is a research-frontier item with no expected resolution timeline, but the COULD has standalone value), mark the dependency as overridden with an explicit reason:

- **Depends-on:** MUST item "[short name]". OVERRIDE: COULD is adoption-ready despite open MUST. Reason: [specific reason — e.g., MUST resolution depends on long-horizon evidence accumulation; COULD's value is independent because (...)].

The override is intentional friction — it requires the author to explicitly justify the decoupling rather than silently dropping the dependency. A future reviewer can spot weak overrides.

Skip the gating field entirely when a COULD has no MUST-dependency. Most COULDs will not need it.

### Synthesis re-test enforcement

When the inquiry's `_branch.md` declares a `## Synthesis Trigger` section (per `cognitive_harness/MVL+/SKILL.md`'s pre-template checks), OR when this finding's frontmatter declares `refines:` / `supersedes:` / `corrects:` of a prior finding from which N≥3 commitments are inherited, the finding MUST include the optional `## Inherited Commitments Re-test` section defined in the finding template above.

The compile-time check:

1. List the priors being synthesized (from `_branch.md`'s Synthesis Trigger section, or the prior named in frontmatter).
2. Enumerate the commitments those priors carry that this finding's content depends on (decisions, frames, claims, inherited MUSTs/COULDs).
3. Verify the `## Inherited Commitments Re-test` section either re-tests each commitment with cited evidence OR flags it as `INHERITED-WITHOUT-RE-TEST` with a reason.

If the section is missing or commitments are listed without status, HALT and tell the user: "This finding inherits commitments from [N] priors but the `## Inherited Commitments Re-test` section is missing or incomplete. The synthesis cannot be silently absorbed — re-test each inherited commitment or explicitly flag it with a reason."

The `INHERITED-WITHOUT-RE-TEST` flag is intentional friction — like the COULD-vs-MUST override, it requires explicit reasoning rather than silent inheritance. A future reviewer can spot weak inheritance.

### Style rules (apply throughout the finding)

1. **Hedging specificity.** A hedge is a phrase that softens a claim ("mostly works," "generally sound," "with caveats"). Any hedge must name WHAT is specifically uncertain and WHY. Vague hedges are defects.
2. **Cross-reference format.** First reference to another finding uses the full path (`devdocs/inquiries/X/finding.md`); subsequent references use the bare inquiry name (`X`). Add a relationship label when applicable — `REFINES: X (what specifically is load-bearing)`. In frontmatter, use the full path in `refines:` / `supersedes:` / `corrects:` / `impacted_by:` fields.
3. **Gate specificity.** Triggers, deferred conditions, and revival criteria must be time-bound ("after 30 inquiries"), condition-bound ("when /intuit Phase β ships"), or observable ("if calibration N ≥ 30"). "Eventually," "when appropriate," "as needed" are defects.

4. One decision per paragraph. If a paragraph contains more than one decision, verdict, or resolved question, break it into separate paragraphs or a list — one item per entry or subitems. The failure mode: a paragraph that reads as one thought but actually contains 3-4 independent claims the reader must mentally separate. Test: if you could put "separately," between two claims in the same paragraph, they belong in different paragraphs.
5. **Anchored references.** When referring to a numbered item, named concept, or earlier decision, always include the short descriptive name on first use in each section AND on every subsequent reference, not just the label. "Item 3" alone is a defect; "Item 3 (the continuous-loop runner)" is correct.

   The rule covers two label shapes:

   (a) **Positional labels** in a structure the reader can see in the same section (e.g., "Item 3" of a numbered list). Pair with the descriptive name.

   (b) **Workspace scaffolding labels** that index into a system the reader has NOT been introduced to (e.g., category-letter IDs from exploration like "D2", piece labels from decomposition like "P1", sense-version labels like "SV6", variant labels like "P2-A"). Either drop the label entirely (use only the descriptive name) or introduce the system explicitly in the same section. Default: drop. The descriptive name reads cleaner; the label was workspace convenience.



### Size-adaptive application

Short findings (≤100 lines) may skip optional sections — Changes from Prior (unless refining a prior finding), Next Actions (unless proposing changes), and Open Questions subsections may flat-list when only one category applies. Long findings (>100 lines) must include the applicable optional sections.

### Multi-iteration handling

For multi-iteration inquiries: the finding reflects the FINAL iteration's answer. Prior iterations' lessons go in Reasoning as context.

**Cross-iteration MUST/COULD drift check.** When compiling a finding for iteration N+1 in a chain — or when compiling a finding whose frontmatter declares `refines:` / `supersedes:` / `corrects:` of a prior finding — compare the new finding's MUST and COULD content against the prior's. Any content change beyond pure rewording (different scope, different verb, different target, different acceptance criterion) is recorded inside `## Changes from Prior` under "What's changed" with this shape:

- MUST/COULD drift: prior text "[verbatim from prior]"; new text "[verbatim from this finding]"; rationale "[why the content shifted]".

If no rationale is available, flag the drift explicitly and ask the user to acknowledge before publishing the finding. Skip this check when there is no prior finding in the chain, or when all drift is pure rewording with no scope/verb/target/criterion change.

### Quality test

After writing the finding, ask: *"Can someone read ONLY `finding.md`,
at normal reading speed without backtracking, and understand the
complete decision?"* If no — if the reader needs to re-read paragraphs,
scroll up to decode references, or consult other files to understand the verdict — the finding has failed
the test. Revise.

---

## Step 3 — Archive discipline outputs

Move discipline output files to a `docarchive/` subfolder inside the inquiry folder. The set of files to archive depends on the pipeline detected in Step 1:

- **Classic pipeline:** archive `sensemaking.md`, `innovation.md`, `critique.md`. (Three files.)
- **Extended pipeline:** archive `exploration.md`, `sensemaking.md`, `decomposition.md`, `innovation.md`, `critique.md`. (Five files.)
- **Other pipelines:** archive all discipline output files identified in Step 1 (everything read except `_branch.md`).

Use:
```bash
mkdir -p [inquiry_path]/docarchive/
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
Finding: [inquiry_path]/finding.md
```

The user can read the finding directly; the conversation print is just the navigation pointer.

---

## Step 6 — Print post-completion pointers from `_state.md` Relationships

Read the `## Relationships` section of `_state.md`. For each relationship type present, preserve paths exactly as written. Relationship targets may be root inquiry paths or nested branch inquiry paths.

- **BRANCH_OF:** print
  ```
  Branch complete.
  Parent: [parent_path] ([source/context if present]).
  Finding: [inquiry_path]/finding.md
  Resume parent: [appropriate runner] [parent_path]/
  ```
  Choose the parent runner based on the parent's `Flow-type`:
  - `classic` → `/MVL`
  - `extended` → `/MVL+`
  - Other → use the runner recorded in the parent's `_state.md` history if available.

  Parent `_branches.md` is an index, not the authority for child completion. CONCLUDE may print the parent update target, but child completion must not fail if parent `_branches.md` is stale or not updated.

- **ROOT_INQUIRY:** print only when it differs from the direct parent:
  ```
  Root inquiry: [root_path]
  ```

- **BRANCH_SET:** print
  ```
  Branch set: [branch_set_id]
  ```

- **CONTINUES FROM:** print
  ```
  This finding is ready for [parent_path] ([context]).
  Finding: [one-sentence answer].
  Resume: [appropriate runner] [parent_path]/
  ```
  Choose the runner based on the parent's `Flow-type`:
  - `classic` → `/MVL`
  - `extended` → `/MVL+`
  - Other → use the runner that started the parent inquiry (read from parent's `_state.md` history).

- **RELATED:** print
  ```
  Related: [path or name] ([context]) — this finding may affect it.
  ```

- **SUPERSEDED BY:** print
  ```
  Note: this inquiry is superseded by [path or name]. The finding stands as historical record.
  ```

If there are no `## Relationships`, no additional output is printed beyond Step 5's brief summary.

---

## Failure modes

- **Pipeline detection failure** — `_state.md` is missing, malformed, or has an unrecognized pipeline. HALT and ask the user to specify the pipeline manually before retrying.
- **Missing discipline outputs** — Step 1 says the pipeline expects N files but fewer exist in the folder. Do NOT proceed; the iteration isn't actually complete. Tell the user which files are missing.
- **Path re-rooting** — CONCLUDE tries to rebuild `devdocs/inquiries/[inquiry_id]/` from a local folder name. Stop and use the full `inquiry_path`.
- **Internally-referential shorthand in the finding** — the finding fails the non-ambiguity principle. Detect via the quality test in Step 2; revise before saving.
- **Vague hedges, vague gates, malformed cross-references** — the finding fails one of the style rules. Detect during writing; revise before saving.

---
