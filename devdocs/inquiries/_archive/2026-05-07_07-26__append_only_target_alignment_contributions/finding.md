---
status: active
refines: devdocs/inquiries/2026-05-07_07-06__target_fields_mvl_essence/finding.md
---
# Finding: Append-Only Target Alignment Contributions

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-07_07-06__target_fields_mvl_essence/finding.md`

**Revision trigger:** User correction. The user pointed out that having multiple MVL/MVL+ disciplines edit the same target record is bad for traceability, and that MVL+ discipline outputs are cumulative context rather than a tight one-discipline-to-next handoff.

**What's preserved:** The prior finding was right that target-layer clarity matters in self-maintenance and meta inquiries. It was also right that the loop needs a current target understanding before final answer checking.

**What's changed:** The current target understanding should not be maintained as one shared mutable record that disciplines edit in place. That makes it too hard to see which discipline changed the target, why, and with what evidence.

**What's new:** Split the mechanism into two roles: append-only `Target Alignment Contributions` as the historical layer, and a synthesized `Live Target Alignment View` as the current-view layer.

**Migration:** Replace the phrase "disciplines update the Live Target Alignment Record" with "disciplines preserve append-only Target Alignment Contributions; later stages synthesize the Live Target Alignment View."

## Question

Should the Live Target Alignment Record be a single mutable shared record, or should MVL/MVL+ disciplines append their own target-alignment contributions or snapshots for traceability and cumulative context?

The goal is to clarify whether editing the same target record is a bad fit for Homegrown traceability, whether append-only per-discipline contributions are better, and how this should respect MVL+'s real context flow where earlier discipline outputs can influence later and non-adjacent disciplines.

## Finding Summary

- Do not make MVL/MVL+ disciplines edit one shared Live Target Alignment Record as the canonical history.

- Use `Target Alignment Contributions` as the append-only history. These are discipline-specific target-role signals with source, evidence, confidence, and effect.

- Use `Live Target Alignment View` as the synthesized current view. It is derived from the contribution history and prior discipline outputs.

- Do not require every discipline to append a full target snapshot by default. Prefer delta-style contributions that say what changed, stabilized, became uncertain, or moved out of scope.

- MVL+ is sequential in execution but cumulative in context. Exploration can still matter to Innovation; Sensemaking can still matter to Critique; Decomposition can still constrain CONCLUDE.

- Target Fit Check should validate the final answer against both the synthesized Live Target Alignment View and the unresolved or relevant contribution history.

- Target Alignment Gate should only have force when that fit check finds a material mismatch that should block or repair the answer.

- Exact storage is deferred. Strong v1 candidates are discipline-local contribution sections plus a synthesized view in Critique or CONCLUDE. A central append-only ledger is a possible later refinement, not required by this conceptual finding.

## Finding

Homegrown is using MVL/MVL+ loops to maintain and diagnose its own protocols. In that setting, target confusion is not a small wording issue. If a loop uses Navigation discussions as evidence but accidentally answers as if the repair target is Navigation instead of MVL self-maintenance, the final answer can be technically detailed and still aimed at the wrong layer.

The prior finding introduced a useful idea: the loop needs a live understanding of target roles such as evidence material, diagnosis target, maintenance target, implementation target, and out-of-scope target. The problem was the persistence model. Saying that each discipline "updates the Live Target Alignment Record" makes the record sound like one shared mutable file.

That mutable model is the wrong canonical history.

The better model is:

```text
Target Alignment Contributions
  -> Contribution Trail
  -> Live Target Alignment View
  -> Target Fit Check
  -> Target Alignment Gate, only if mismatch remains
```

`Target Alignment Contributions` are append-only discipline records. They preserve what a discipline noticed about the target layer. For example, Exploration might notice that the evidence material is Navigation discussions, while Sensemaking might clarify that the repair target is MVL self-maintenance.

`Contribution Trail` is the ordered history of those contributions across the inquiry. It is not the same thing as the current answer. It is evidence.

`Live Target Alignment View` is the current synthesized target understanding. It is allowed to be concise and current-facing, but it must be derived from the contribution trail. It should not pretend the historical changes never happened.

This fits MVL+ better than a shared mutable record. MVL+ has sequential execution, but its context is cumulative. Each discipline writes its own file. Later disciplines can use all saved earlier outputs, not only the immediately previous one. That means target contributions should accumulate as reusable context, not travel as a single baton from Exploration to Sensemaking to Decomposition to Innovation to Critique.

The user suggested that each discipline might append its own version. The refined answer is close, but not exactly "full version every time." Each discipline should append its own contribution when it has material target-role evidence. That contribution should usually be a delta, not a full snapshot.

A good contribution shape is:

```text
source_discipline:
contribution_type: add | revise | stabilize | reject | supersede | mark_out_of_scope | uncertainty
target_field:
claim:
evidence:
confidence:
effect_on_view:
supersedes:
open_question:
```

Full snapshots should be exceptional. They are useful when a discipline materially changes the whole target view, when a contradiction needs a clear before/after comparison, or when CONCLUDE stabilizes the final view for handoff. Routine full snapshots create repeated text, and repeated text can hide the actual change.

There is one caveat that future materialization must handle. If contributions are optional, silence can become ambiguous. A later source-doc change should decide whether each discipline must include either a contribution entry or a short "no material target contribution" note. The important rule is that absence should not make a reader wonder whether the discipline had no target signal or the runner forgot to check.

## Next Actions

### MUST

- **What:** When this concept is materialized in MVL/MVL+ docs, replace mutable-record wording with append-only contribution wording.
  **Who:** Future Homegrown source-doc patch touching `homegrown/MVL+/SKILL.md`, `homegrown/MVL/SKILL.md`, or related protocol text.
  **Gate:** Before adding any required Target Alignment Record behavior to MVL/MVL+ runner rules.
  **Why:** Prevents a traceability failure where target changes are hidden inside one edited record.

- **What:** Define the absence convention for disciplines with no material target contribution.
  **Who:** Future materialization pass for the contribution format.
  **Gate:** Before contribution sections become required or expected in discipline outputs.
  **Why:** Prevents ambiguous silence.

### COULD

- **What:** Consider a central append-only `target_alignment_contributions.md` file.
  **Who:** Future materialization pass, only after testing discipline-local contributions.
  **Gate:** If two completed target-alignment inquiries miss or bury contributions because they are hard to find.
  **Why:** A central file may improve discovery, but it should not become a second mutable source of truth.

### DEFERRED

- **What:** Choose exact filenames, headings, and field syntax.
  **Gate:** Reopen when the user asks for source-doc edits or when a pilot inquiry needs the format.
  **Why (if revived):** The conceptual decision is stable, but implementation should not be invented before the intended docs are patched.

## Reasoning

The mutable Live Target Alignment Record was killed as canonical history. Its strength is readability: it gives the loop one current target view. Its fatal weakness is traceability. A later reader cannot reliably see which discipline introduced, revised, or rejected a target claim unless a separate history exists.

The full-snapshot-per-discipline model was refined away as the default. It preserves traceability, but it invites mechanical copying. If every discipline repeats the full target view, the real signal becomes harder to find. The useful part survives only as an exception for material whole-view changes or final CONCLUDE synthesis.

The central append-only ledger survived only as a later option. It is easy to discover and easy to compile, but it risks becoming a side ritual or a second source of truth. If it is introduced later, it should be append-only and should cite discipline outputs rather than replace them.

The discipline-local contribution model survived. It keeps target evidence close to the discipline that produced it. It matches Homegrown's existing pattern of preserving discipline outputs as files. It also matches MVL+'s cumulative context flow, where earlier outputs can affect later non-adjacent disciplines.

The synthesized Live Target Alignment View also survived. An append-only history alone is not enough for final checking because raw history may contain provisional, contradicted, or superseded claims. The loop still needs a current comparison object before it can say whether the final answer is aimed at the right target.

The main contradiction was between traceability and current usability. The resolution is not to choose one. Use append-only contributions for history and a synthesized view for current state.

## Open Questions

### Monitoring

After a pilot materialization, check whether discipline-local contributions are easy to find without a central ledger. If two completed target-alignment inquiries miss or bury contributions, reopen the central-ledger option.

### Refinement Triggers

Reopen the full-snapshot decision if a later diagnosis shows that delta-only contributions made the final target view impossible to reconstruct.

Reopen storage syntax when patching `homegrown/MVL+/SKILL.md`, `homegrown/MVL/SKILL.md`, or a shared target-alignment protocol.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 


u said 

How The Disciplines Contribute
Exploration can update the record when it changes what evidence is relevant.

Sensemaking can update the record when it changes what is being diagnosed or what system/process should improve.

Decomposition can update the record when it clarifies boundaries or names a tempting out-of-scope target.

Innovation can update the record when it identifies plausible implementation targets.

Critique can update the record when it kills, refines, or stabilizes a target because it does or does not fit the answer.



i think editing same record is bad idea for trackability purposes, what if they each append their own version? 

another reason is this, MVL+ loop discipines actually dont just feed one after another, exploration effects on innovation too, sensenmaking can effect decomposistion.  they generate context and files and next discipline and the next next one also uses them as well. there is no tight input output flow there which is okay.
```

</details>
