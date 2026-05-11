---
status: active
refines: devdocs/inquiries/comparative_mvl_loop_diagnosis/finding.md
---
# Finding: Finding Lineage Metadata

## Changes from Prior

**Prior path:** devdocs/inquiries/comparative_mvl_loop_diagnosis/finding.md

**Revision trigger:** User correction: exact failure attribution in `loop-diagnose` is too advanced for the next step; preserve lineage and raw input first.

**What's preserved:** The prior finding's core insight remains: bad MVL findings corrected by later MVL runs are valuable self-maintenance data.

**What's changed:** The immediate next build is no longer `loop-diagnose`. The next build is a finding-format extension that captures correction-chain lineage.

**What's new:** Corrective findings should include body-level `Prior path`, `Revision trigger`, and an end-of-file `Source Input` appendix containing the raw user correction or raw prompt.

**Migration:** Defer `loop-diagnose`. First update the CONCLUDE/finding convention so future revised findings preserve enough evidence for later MVL diagnosis.

## Question

Should Homegrown avoid building `loop-diagnose` for now and instead expand the standard `finding.md` format with prior-path and raw-input metadata so future MVL runs have enough lineage data to diagnose correction chains?

The goal is to decide whether expanded finding lineage fields are a better first step than `loop-diagnose`, define exactly which fields should be added, explain where raw user input should live without disrupting readability, and clarify how this changes the previous comparative diagnosis recommendation.

## Finding Summary

- Yes. Homegrown should capture **finding lineage metadata** before building `loop-diagnose`.

- Exact failure attribution, such as "Sensemaking failed" or "Critique failed," is advanced analysis. It should usually be run by MVL later, not forced into every correction artifact now.

- The immediate missing data is simpler: prior finding path, reason for revision, user correction/raw prompt, and the corrected finding.

- Keep `refines` frontmatter, but also add human-readable `Prior path` and `Revision trigger` fields to `Changes from Prior`.

- Add a bottom `Source Input` appendix to corrective/refinement findings. Put raw user input there so it is available for future analysis but does not interrupt the main finding.

- `loop-diagnose` should be deferred. Revisit it after 5 to 10 lineage-linked correction chains exist and MVL-on-demand diagnosis shows repeated patterns.

## Finding

### 1. The Correction

The previous `loop-diagnose` finding moved too quickly from data capture to cause analysis.

The user is right: deciding exactly why a loop failed is not a small preprocessing step. It can require a full MVL/MVL+ inquiry. A later run may be better because Sensemaking improved, because the user supplied new context, because Critique changed dimensions, because CONCLUDE expressed the result better, or because the original prompt was simply under-specified.

That kind of attribution should not be forced into the first Level 1 implementation.

The next step should preserve the correction chain. Diagnosis can happen later.

### 2. The Minimal Data Needed

A corrected finding needs three anchors:

1. **Previous finding:** the prior path.
2. **User correction or direction:** the raw input that says what was wrong, missing, shallow, or newly intended.
3. **New finding:** the revised answer.

If those three anchors are present, future MVL can analyze the chain when needed.

Without those anchors, future analysis has to reconstruct context from chat history, archived discipline files, or memory. That is fragile.

### 3. Template Change

The standard revised finding should use this pattern:

```markdown
---
status: active
refines: devdocs/inquiries/prior_inquiry/finding.md
---
# Finding: [name]

## Changes from Prior

**Prior path:** devdocs/inquiries/prior_inquiry/finding.md

**Revision trigger:** User correction / new evidence / scope change / stronger framing / implementation result

**What's preserved:** ...

**What's changed:** ...

**What's new:** ...

**Migration:** ...

...

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
[raw prompt or correction text]
```

</details>
```

The `Source Input` section belongs at the end of the file. It is source material, not the final answer. This keeps the finding readable while preserving the evidence.

### 4. Omission And Redaction Rule

Raw input should be included for correction/refinement findings unless there is a reason not to include it.

If it is omitted, the finding should say why:

```markdown
## Source Input

Raw input omitted: [sensitive / too long / unavailable / not correction-driven].
```

If the input is too long but still useful, the finding can point to another file:

```markdown
## Source Input

Raw input stored separately: devdocs/inquiries/example/source_input.md
Reason: too long to include inline.
```

The default should be embedded input at the end. Separate files are exceptions.

### 5. What Happens To `loop-diagnose`

`loop-diagnose` should be deferred.

The idea is not wrong. It may become useful later. But the first implementation should not require a new protocol that produces failure attributions.

For now, use MVL or MVL+ on demand:

```text
$MVL+ Analyze these linked findings and the raw correction input.
Determine what the correction chain teaches about Homegrown's loop behavior.
```

If that pattern repeats and stabilizes across 5 to 10 cases, then `loop-diagnose` may deserve a protocol or discipline.

### 6. How This Supports Self-Maintenance

This is still Level 1 self-maintenance work.

Level 1 does not require advanced autonomous diagnosis. It requires instrumented evidence. Finding lineage metadata creates that evidence with minimal machinery.

The flow becomes:

1. A finding is produced.
2. The user corrects it.
3. A revised finding is produced.
4. CONCLUDE records prior path, revision trigger, and raw input.
5. Future MVL can analyze the correction chain.
6. If a real system weakness is found, a maintenance entry can be created.

That is a better order than: create protocol, assign failure categories, then hope the categories were right.

## Next Actions

### MUST

- **What:** Update the CONCLUDE finding template to add `Prior path` and `Revision trigger` inside `Changes from Prior`.
  **Who:** CONCLUDE protocol.
  **Gate:** Before the next corrective/refinement finding is produced.
  **Why:** Makes revision lineage visible to humans, not only frontmatter-aware tooling.

- **What:** Add an optional end-of-file `Source Input` section to the CONCLUDE template.
  **Who:** CONCLUDE protocol.
  **Gate:** Before the next corrective/refinement finding is produced.
  **Why:** Preserves user correction or raw prompt without cluttering the main finding.

- **What:** State that raw input is required for correction/refinement findings unless omitted or redacted with a reason.
  **Who:** CONCLUDE protocol.
  **Gate:** Before treating findings as reliable correction-chain data.
  **Why:** Prevents silent loss of the most important learning signal.

### COULD

- **What:** Add `revision_kind` frontmatter after several revised findings exist.
  **Who:** CONCLUDE/tooling layer.
  **Gate:** After 5 lineage-linked findings show that tooling needs structured revision types.
  **Why:** Avoids metadata bloat before a real tool consumes it.

- **What:** Add a helper that lists finding chains by `refines`.
  **Who:** Devdocs tooling.
  **Gate:** After 10 lineage-linked findings exist.
  **Why:** Makes correction-chain analysis easier without adding diagnostic protocol complexity.

### DEFERRED

- **What:** Build `loop-diagnose`.
  **Gate:** Revisit after 5 to 10 lineage-linked correction chains and at least 2 MVL-on-demand analyses of those chains.
  **Why if revived:** A dedicated protocol may become valuable if repeated MVL analyses reveal a stable recurring diagnostic shape.

- **What:** Require exact failure attribution in revised findings.
  **Gate:** Revisit only after attribution categories stabilize across several correction-chain analyses.
  **Why if revived:** It could support self-maintenance, but premature attribution would create false confidence.

## Reasoning

The **Lineage-First Finding Format** survived because it solves the immediate data problem with the smallest mechanism.

Minimal lineage fields survived. `refines` is useful for tooling, but the finding body should also show `Prior path` and `Revision trigger` so humans can understand the correction chain without reading frontmatter.

The `Source Input` appendix survived because raw user correction is often where the important signal lives. Putting it at the end preserves readability.

Separate raw input files were rejected as the default. They are acceptable only for long or sensitive input, because separate files make future analysis chase context.

Full frontmatter expansion was refined. Extra fields such as `revision_kind` may become useful, but adding them before tooling needs them creates friction.

Keeping `loop-diagnose` as the next build was rejected. It may become useful later, but exact failure attribution is advanced analysis and can be done by MVL on demand once lineage data exists.

The main contradiction across the inquiry was resolved by separating evidence capture from diagnosis. A finding should capture enough evidence for diagnosis without pretending to perform the diagnosis.

## Open Questions

### Monitoring

- After 5 corrective findings use `Prior path`, `Revision trigger`, and `Source Input`, does future analysis become easier?
- After 5 corrective findings, is raw input usually short enough to embed, or do separate source files become necessary?
- After 5 corrective findings, do agents fill the fields consistently?

### Blocked

- `loop-diagnose` is blocked until lineage-linked findings exist.
- Automated diagnosis is blocked until MVL-on-demand analyses show stable recurring attribution patterns.

### Research Frontiers

- What is the minimal source-input format that preserves correction value without making findings noisy?
- When a user correction contains multiple concerns, should `Revision trigger` summarize the main concern or list all of them?

### Refinement Triggers

- Reopen the template after 5 lineage-linked findings if fields are unused, confusing, or too noisy.
- Reopen `loop-diagnose` after 5 to 10 lineage-linked correction chains and at least 2 MVL-on-demand diagnoses.
- Reopen frontmatter expansion after tooling needs to query revision kinds.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 
loop-diagnose should output failure attributions with evidence and confidence: Sensemaking failure, Innovation failure, Critique failure, CONCLUDE failure, loop-framing failure, orchestration failure, or context-elicitation failure.


maybe not. analyzing the exact reason why sensemaking failed etc is advancecd analyis. and that analysis itself should be run with MVL as well maybe,  loop-diagnose  we can have a protocol named luppa, and luppa's job is when there are sequential MVL loops , actually wait...


we already have 
Changes from Prior
What's preserved: The prior finding's level ladder remains correct: Homegrown is Level 0.5 and should move toward Level 1 before attempting autonomous continuous self-maintenance.
What's changed: This finding identifies the most useful first Level 1 mechanism: a comparative diagnostic protocol that learns from bad MVL findings corrected by later MVL runs.

What's new: The proposed operation is loop-diagnose: a lightweight protocol that reads multiple inquiry folders plus user correction and produces failure attributions and maintenance candidates.

Migration: Treat loop-diagnose as the first evidence generator for Level 1 self-maintenance. Do not promote it to a full discipline until it has worked on several real correction chains.


like fields... if these can be expanded we dont need loop diagnose or luppa etc


Changes from Prior section can have 
Prior path:  which is the inquiry path of previous MVL run which had bad result

and we can also have raw input field, so we can see what prompt was given as user , this propmt is where what is bad or lacking lives. and if we hve previous one's path and user's correction/direction and also new one . than thats enough no ? maybe we can add raw input part to the end of the finding doc to make it away from eyes, so it doesnt take so much space and distirub the user when he is reading the finding doc
```

</details>
