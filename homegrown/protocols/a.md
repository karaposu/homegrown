
### If ITERATION COMPLETE (all three files exist):

Read the critique output. Answer three questions:

**1. What survived?**
List the surviving ideas/approaches from critique's verdicts. What was killed? What was refined?

**2. Is the original question answered?**
Re-read `_branch.md`'s question and goal. Does a clear survivor exist that addresses the question and meets the goal? Be honest — a partial answer is not a full answer.

- **YES — the question is answered:**

  Write `finding.md` in the inquiry folder. Read all four files (`_branch.md`, `sensemaking.md`, `innovation.md`, `critique.md`) and produce the finding as a single argumentative document.

  Write for a reader who has NOT seen the SIC output — someone who just joined the project and needs to understand: what was the question, what's the answer, why this answer over the alternatives, and what's still open. Do not compress. Explain fully even if finding is long. The test: can someone read ONLY `finding.md` and understand the complete decision?

  **Non-ambiguity principle (applies to every sentence).** Each sentence must be understandable to a reader with no prior exposure to this inquiry. The failure mode to prevent is **internally-referential shorthand** — sentences that make sense to the author (who's been living with the inquiry's vocabulary) but fail for an outside reader. Define niche terms briefly on first use; give project-specific references (e.g., `/MVL`, `enes/`, specific disciplines) a parenthetical context the first time each appears in the finding.

  Example of the failure mode and its correction:
  - ❌ *"Template extends from 4 sections to 6"* — which template? in what context?
  - ✅ *"Our existing finding.md template (defined in the `value_extraction_design` inquiry) has 4 sections; this audit adds 2 more for a total of 6."*

  Use this structure:

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
   verdict. Enrich with innovation's Assembly design and sensemaking's
   SV6 understanding. Complete, self-contained, non-compact. Use
   numbered subsections when length exceeds ~100 lines.]

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

  **Three style rules** (apply throughout the finding):

  1. **Hedging specificity.** A hedge is a phrase that softens a claim ("mostly works," "generally sound," "with caveats"). Any hedge must name WHAT is specifically uncertain and WHY. Vague hedges are defects.
  2. **Cross-reference format.** First reference to another finding uses the full path (`devdocs/inquiries/X/finding.md`); subsequent references use the bare inquiry name (`X`). Add a relationship label when applicable — `REFINES: X (what specifically is load-bearing)`. In frontmatter, use the full path in `refines:` / `supersedes:` / `corrects:` / `impacted_by:` fields.
  3. **Gate specificity.** Triggers, deferred conditions, and revival criteria must be time-bound ("after 30 inquiries"), condition-bound ("when /intuit Phase β ships"), or observable ("if calibration N ≥ 30"). "Eventually," "when appropriate," "as needed" are defects.

  **Size-adaptive application.** Short findings (≤100 lines) may skip optional sections — Changes from Prior (unless refining a prior finding), Next Actions (unless proposing changes), and Open Questions subsections may flat-list when only one category applies. Long findings (>100 lines) must include the applicable optional sections.

  For multi-iteration inquiries: Finding reflects the FINAL iteration's answer. Prior iterations' lessons go in Reasoning as context.