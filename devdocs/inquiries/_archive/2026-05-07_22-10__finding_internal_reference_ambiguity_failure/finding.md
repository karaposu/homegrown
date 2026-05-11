---
status: active
type: protocol_failure_diagnosis_and_fix
analyzes:
  - homegrown/protocols/conclude.md
  - devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md
impacts:
  - homegrown/protocols/conclude.md
---
# Finding: Why The Non-Ambiguity Rule Failed, And How To Fix It

## Question

You noticed that the just-completed `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md` (the previous inquiry's output) used phrases like *"the current Probe section says..."* and *"the current Surface-Only Scanning failure-mode prevention says..."* without ever telling the reader **what** *Probe section* or *Surface-Only Scanning* actually refer to. Those terms are sections and named failure modes inside `homegrown/explore/references/explore.md` (the Structural Exploration discipline spec) — but the finding never says so. To anyone who hasn't read that spec, the references are opaque.

The protocol that compiles every `finding.md` — `homegrown/protocols/conclude.md` (the CONCLUDE protocol, invoked by the MVL+ runner at iteration-complete-yes) — already has a rule designed to prevent exactly this. It is called the **non-ambiguity principle** and reads:

> *"Each sentence must be understandable to a reader with no prior exposure to this inquiry. The failure mode to prevent is internally-referential shorthand — sentences that make sense to the author (who's been living with the inquiry's vocabulary) but fail for an outside reader. Define niche terms briefly on first use; give project-specific references a parenthetical context the first time each appears in the finding."*

The principle exists. The rule exists. And yet the rule failed.

Your question: WHY did it fail, and what concrete mechanical fix would prevent the failure from recurring?

This finding diagnoses the failure cascade and proposes a small patch to `conclude.md`.

## Finding Summary

- **The failure happened for two converging reasons, both confirmed at HIGH confidence.**
  - **H1 — The non-ambiguity principle is a guideline, not a check.** It tells the runner WHAT to avoid but does not give the runner a mechanical step to detect violations. The runner has to subjectively recognize internally-referential shorthand. Subjective recognition fails when the runner is embedded in the inquiry's vocabulary — exactly the condition under which CONCLUDE runs.
  - **H2 — Upstream discipline outputs propagate internally-referential vocabulary.** The five discipline outputs in the previous inquiry's `docarchive/` folder (`exploration.md`, `sensemaking.md`, `decomposition.md`, `innovation.md`, `critique.md` — the working documents the disciplines produced before CONCLUDE compiled them) all use phrases like *"Probe section"*, *"Surface-Only Scanning"*, *"Premature Depth"*, *"Coarse Scan"* as if these were proper nouns the reader knows. CONCLUDE inherited that vocabulary AS-IS without a translation pass.

- **Three lower-confidence contributing factors** (H3-H5): the Quality test in `conclude.md` is subjective + self-applied (hard for a hot-eyed runner to apply cold-eyed); the principle's only example shows one shape of failure ("Template extends from 4 to 6"), so other shapes may not be recognized; the principle is buried in the middle of Step 2 rather than being structurally salient.

- **The fix is a small, mechanical, proportional patch to `homegrown/protocols/conclude.md`.** Three components, all inside Step 2, total ~25-30 lines added, no existing content removed:
  - **Component A — Expand the existing principle's example list.** Add 3 new examples drawn from the observed failures (definite-article section reference, named failure mode, bare title-case noun phrase). Examples teach pattern recognition.
  - **Component B — Add a new sub-section "Non-ambiguity check (mechanical)" between the principle and the finding template.** This sub-section contains: 3 regex-style pattern descriptions to scan for; a first-use checklist to verify each match has parenthetical context on first appearance in the finding; remediation guidance for what to do when a match fails the check. The mechanical check operationalizes the principle so a runner doesn't need subjective recognition.
  - **Component C — Add a one-line reminder to the existing Quality test.** Tells the runner to confirm the mechanical check has been run and all matches passed.

- **Verification.** The fix would have caught all 10+ internally-referential references in the previous inquiry's finding.md (each "the X section" / "the Y failure mode" / bare-title-case-noun in that finding triggers a regex match; each match's first appearance lacks parenthetical context; the checklist would flag each one).

- **Verdict: ACTIONABLE.** The fix is mechanical (regex patterns + binary checklist), proportional (~25-30 lines added), preserves existing structure (principle, Quality test, Failure modes section all stay), and demonstrably catches the observed failures.

## Finding

### 1. Why this matters — the cold-readable contract

`finding.md` is the public artifact of an inquiry. The CONCLUDE protocol's stated purpose is to produce a `finding.md` that is "understandable to a reader with no prior exposure to this inquiry." This is the cold-readable contract.

When that contract breaks, the user (or any future reader of the inquiry) gets a degraded read — they have to guess what unfamiliar terms refer to, scroll up to look for context, or open other files to decode references. The previous inquiry's finding broke this contract repeatedly. You correctly identified this as a problem, and the right question to ask is structural: WHY did the rule fail, and HOW do we fix the rule so it doesn't fail next time.

### 2. The failure cascade

The exploration of the docarchive (the previous inquiry's working documents at `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/docarchive/`) and `homegrown/protocols/conclude.md` (the CONCLUDE protocol spec) revealed a four-step cascade:

```
Step 1: The five discipline outputs (working documents in docarchive/) all
        use internally-referential vocabulary throughout. Phrases like
        "the existing Probe section says..." appear in exploration.md;
        "M2 targets Surface-Only Scanning" appears in sensemaking.md;
        "extends Surface-Only Scanning's 'probe at least one signal'"
        appears in critique.md. The disciplines were written for a runner
        embedded in the inquiry, not for cold readers.

Step 2: CONCLUDE compiles finding.md from the disciplines. The protocol
        instruction is "compile from upstream outputs" — implicit verb-of-
        action is COMPILE (assemble), not TRANSLATE (rewrite from internal
        vocabulary to public vocabulary). The runner inherits upstream
        vocabulary without realizing it.

Step 3: The non-ambiguity principle says "define niche terms briefly on
        first use." But the principle is a GUIDELINE, not a CHECK. The
        runner has to subjectively notice "is this phrase internally-
        referential?" — judgment that fails when the runner has been
        living with the vocabulary across all five disciplines.

Step 4: The Quality test asks "can someone read ONLY finding.md without
        backtracking?" The runner is supposed to simulate a cold reader.
        But the runner has just read all the disciplines — the simulation
        is hot-eyed. Self-honestly applying the test is hard.

→ finding.md ships with 10+ internally-referential references.
```

The cascade has TWO independent points where it could be broken: at Step 1 (have disciplines write cold-readably) or at Step 3 (have CONCLUDE apply a mechanical check before compiling). Step 1 is the wrong fix surface — disciplines are working documents, not public artifacts; making them cold-readable would slow them and conflate audiences. Step 3 is the right fix surface — CONCLUDE is the cold-readable artifact's compiler; CONCLUDE should translate.

### 3. Why the principle, the example, and the Quality test were all insufficient

Three separate mechanisms in `conclude.md` were supposed to prevent this failure:

- **The non-ambiguity principle** (lines 64-75 of `homegrown/protocols/conclude.md`) — describes the failure mode and prescribes the fix ("define niche terms briefly on first use; give project-specific references a parenthetical context the first time each appears"). But it is descriptive, not procedural. There's no step the runner executes — only a property the runner must subjectively verify.

- **The principle's single example** ("Template extends from 4 sections to 6" → "Our existing finding.md template ... has 4 sections; this audit adds 2 more for a total of 6") — shows one shape of the failure (a generic noun referring to an external concept). The previous inquiry's failures are a different shape — definite-article references to discipline-internal sections and named failure modes ("the current Probe section", "the Surface-Only Scanning failure-mode prevention"). One example is insufficient pattern teaching for the variety of shapes the failure takes in practice.

- **The Quality test** (lines 219-225) — asks the runner to simulate a cold reader. Subjective. Self-applied. Hot-eyed runner cannot reliably simulate cold-eyed reading because the runner already has all the context in their head. The test is well-intentioned but structurally fragile under embedded-vocabulary conditions.

Each of the three mechanisms relies on subjective recognition by the runner. None gives the runner a deterministic step to follow. When the runner is embedded in the inquiry's vocabulary (which is always the condition under which CONCLUDE runs), subjective recognition fails.

### 4. The fix — three components inside Step 2 of `conclude.md`

The fix preserves the existing principle, Quality test, and Failure modes section (the three places in `conclude.md` that mention internally-referential shorthand). It adds a mechanical layer between them.

**Component A — Expand the principle's example list.** Add 3 new examples drawn from the observed failures, each showing the failure shape and its correction:

```markdown
Additional examples of the failure mode and its correction:

- ❌ "the current Probe section says..." — which spec? in what discipline?
- ✅ "the Probe section in `homegrown/explore/references/explore.md` (the
   Structural Exploration discipline spec) says..."

- ❌ "Surface-Only Scanning failure mode" — failure mode of what? defined
   where?
- ✅ "Surface-Only Scanning (one of six failure modes documented in the
   Structural Exploration discipline spec at
   `homegrown/explore/references/explore.md`)"

- ❌ "Coarse Scan" — coarse scan of what? in what process?
- ✅ "Coarse Scan (the breadth-first first-pass step in Structural
   Exploration's Resolution Progression)"
```

These three new examples plus the existing "Template" example give 4 distinct failure shapes the runner can pattern-match against.

**Component B — Add a new sub-section between the principle and the finding template.** Title: *"Non-ambiguity check (mechanical)."* Three short paragraphs:

```markdown
### Non-ambiguity check (mechanical)

After drafting the finding body, run this mechanical scan to catch
internally-referential shorthand the runner may have inherited from
upstream discipline outputs or written without realizing. The principle
above states what to avoid; this check operationalizes it.

**Patterns to scan for:**

- Pattern 1: Definite-article references to discipline-internal sections,
  components, steps, failure modes, protocols, principles, or preventions
  — e.g., "the X section", "the Y failure mode", "the Z component",
  "the [Adjective Noun] prevention". Regex sketch:
  `\bthe (current )?[A-Z][a-z]+( [A-Z][a-z]+)* (section|component|step|failure mode|protocol|principle|prevention|cycle)\b`.

- Pattern 2: Bare filenames or paths from the repository — e.g.,
  "explore.md", "sensemaking.md", "homegrown/protocols/conclude.md".
  Regex sketch: `\b\S+\.md\b` not preceded by a parenthetical context
  describing what the file is.

- Pattern 3: Title-case noun phrases that aren't common English — e.g.,
  "Surface-Only Scanning", "Premature Depth", "Coarse Scan", "Resolution
  Progression". Regex sketch: capitalized multi-word terms that don't
  appear in a parenthetical phrase already.

**First-use checklist (apply per match):**

For each pattern match found, locate the FIRST APPEARANCE of the matched
term in the finding. Verify:

[ ] Does the first appearance have a parenthetical phrase naming WHAT the
    term refers to (which file/spec/discipline/role)?

If YES, pass. Subsequent appearances may use the bare name.
If NO, fail — rewrite the first appearance to include the parenthetical
context.

**Valid parenthetical-context shapes:**

- For sections: "the X section in `[filepath]` (which is [one-line role
  description])."
- For failure modes: "X (one of N failure modes documented in `[filepath]`)."
- For named concepts: "X (defined as [one-line definition] in `[filepath]`)."
- For files: "the [discipline name] discipline spec at `[filepath]`."

**Distinguishing internally-referential from template-shared vocabulary:**

The check fires on terms that originate from a specific spec/discipline/file
the reader hasn't necessarily read (internally-referential). It does NOT
fire on terms that are part of the finding template itself (e.g., "Open
Questions section", "Source Input section", "Next Actions") — those are
shared finding-template vocabulary that any finding reader knows. When in
doubt, ask: "Would a reader who has only ever read finding.md files (and
not the discipline specs) know what this term refers to?" If yes, it's
template-shared. If no, it's internally-referential and needs parenthetical
context on first use.

**Remediation:**

If a match fails the checklist, rewrite the first appearance of the term in
the finding to include parenthetical context. Do NOT add the parenthetical
to every appearance — only to the first. After rewriting, re-run the
pattern scan to verify no remaining matches lack first-use parenthetical
context.
```

**Component C — Add a one-line reminder to the Quality test.** After the existing Quality test paragraph, append:

```markdown
Confirm that the Non-ambiguity check (mechanical) above has been run and
all pattern matches passed the first-use parenthetical-context checklist.
```

### 5. Why this fix would have caught the observed failures

Verifying against the 10+ internally-referential references in the previous inquiry's finding.md:

| Observed reference | Pattern | Match? | First-use parenthetical present? | Caught? |
|---|---|---|---|---|
| "the current Probe section says..." | Pattern 1 | YES | NO | YES |
| "the current Surface-Only Scanning failure-mode prevention says..." | Pattern 1 | YES | NO | YES |
| "the current Scan section says..." | Pattern 1 | YES | NO | YES |
| "the current Premature Depth failure-mode prevention says..." | Pattern 1 | YES | NO | YES |
| "the current Resolution Progression's Coarse Scan step asks..." | Pattern 1 (multiple) | YES | NO | YES |
| "explore.md" (bare, on first use without parenthetical) | Pattern 2 | YES | NO | YES |
| "Surface-Only Scanning" (bare, on first use without parenthetical) | Pattern 3 | YES | NO | YES |
| "Premature Depth" (bare, on first use without parenthetical) | Pattern 3 | YES | NO | YES |
| "Coarse Scan" (bare, on first use without parenthetical) | Pattern 3 | YES | NO | YES |
| "Resolution Progression" (bare, on first use without parenthetical) | Pattern 3 | YES | NO | YES |

All 10+ caught. The runner would have flagged each one and rewritten the first appearance to include parenthetical context (e.g., "the Probe section in `homegrown/explore/references/explore.md` (the Structural Exploration discipline spec)").

### 6. Why over-fire risk is mitigated

A natural objection is that the regex patterns might match legitimate phrasings. Three classes of legitimate matches are filtered by the first-use checklist:

- **Template-shared vocabulary.** Phrases like "the Open Questions section" or "the Source Input section" might match Pattern 1, but they're shared finding-template concepts that any finding reader knows. The checklist's "WHAT the term refers to" criterion correctly identifies these as template-shared, not internally-referential. Pass without parenthetical.

- **Common-English title-case phrases.** Phrases like "Open Questions" or "Next Actions" or "Source Input" might match Pattern 3, but they're either common English or template-shared. Same checklist disposition — pass.

- **Already-explained references.** A phrase like "the Probe section" matches Pattern 1, but if its first appearance already has parenthetical context ("the Probe section in `homegrown/explore/references/explore.md` (the Structural Exploration discipline spec)"), the checklist confirms first-use parenthetical present and the match passes.

The pattern scan flags candidates; the checklist verifies. The combination minimizes over-fire while catching the observed failures.

### 7. Why the fix is proportional

`homegrown/protocols/conclude.md` (the CONCLUDE protocol spec) currently has 333 lines. The fix adds approximately 25-30 lines (one expanded example list inside the existing principle paragraph, one new sub-section between principle and template, one one-liner in the Quality test). No content is removed.

The fix preserves:
- The non-ambiguity principle paragraph (lines 64-75) — unchanged except for added examples.
- The Quality test paragraph (lines 219-225) — unchanged except for one-line reminder.
- The Failure modes section (line 329) — unchanged.
- Step 2 overall structure — unchanged except for the new sub-section.
- All other steps (1, 3, 4, 5, 6) — unchanged.

The fix is small enough to apply, easy to revert, and structurally consistent with the existing protocol.

## Next Actions

### MUST

- **What:** Apply Component A, B, and C to `homegrown/protocols/conclude.md`. Component A expands the existing non-ambiguity principle's example list (add 3 new examples covering definite-article section reference, named failure mode, bare title-case noun phrase). Component B adds the new sub-section "Non-ambiguity check (mechanical)" between the principle and the finding template, containing 3 regex pattern descriptions, the first-use checklist, the valid parenthetical-context shapes, the internally-referential-vs-template-shared distinction, and remediation guidance. Component C adds a one-line reminder to the existing Quality test.
  - **Who:** Maintainer of `homegrown/protocols/conclude.md`.
  - **Gate:** in next 3 finding.md compilations after the fix lands, the runner applies the mechanical check; verify zero internally-referential references slip through (no "the X section" / "the Y failure mode" / bare-title-case-noun-phrase without first-use parenthetical context).
  - **Why:** Closes the H1 + H2 root causes. Mechanical check operationalizes the existing principle so the runner doesn't depend on subjective pattern recognition. Catches both the upstream-inherited shorthand and the runner-produced shorthand.

### COULD

(None this run — Innovation produced a single combined fix that survived Critique unanimously.)

### DEFERRED

- **What:** Add a translation-pass STEP (Step 2.5 between the existing Step 2 "Compile the finding" and Step 3 "Archive discipline outputs") that explicitly mandates a translation pass over the drafted finding.
  - **Gate:** revive only if the mechanical check (Component B) proves insufficient in the next 3 finding.md compilations — specifically, if internally-referential references slip through despite the runner applying the check.
  - **Why (if revived):** Adding a separate Step makes the translation more structurally salient at the cost of one additional procedural step. Currently deferred because Component B (a sub-section within Step 2) is more proportional and the evidence for needing a separate step is one observed failure.

- **What:** Apply parallel non-ambiguity rules to the upstream discipline specs (`homegrown/explore/references/explore.md`, `homegrown/sense-making/references/sensemaking.md`, `homegrown/decompose/references/decompose.md`, `homegrown/innovate/references/innovate.md`, `homegrown/td-critique/references/td-critique.md`).
  - **Gate:** revive only if upstream discipline outputs are themselves consumed as public artifacts (currently they are working documents only consumed by CONCLUDE).
  - **Why (if revived):** Disciplines are working documents; CONCLUDE is the public surface. Disambiguation at the public surface is the right placement. If disciplines later become public artifacts, the fix would need to apply there too.

## Reasoning

### Why H1 + H2 are the load-bearing root causes

A single-source diagnosis was considered: "the principle is fine; the runner just didn't apply it carefully." Rejected because:

- The runner has READ the principle (it's loaded in CONCLUDE's pre-read step). Applying it carefully would require subjective recognition, which fails when embedded in vocabulary. The principle's shape (descriptive, not procedural) is the load-bearing structural feature, not the runner's care level.

- The disciplines' use of internally-referential vocabulary is observable in the docarchive. CONCLUDE inherits this vocabulary without translation. The cascade is mechanical, not motivational.

H1 + H2 together explain the failure structurally. H3 (subjective Quality test), H4 (single-shape example), and H5 (placement) are contributing factors but not load-bearing.

### Why Fix-2 (separate Step 2.5) was deferred in favor of Fix-1 (sub-section within Step 2) + Fix-3 (example expansion)

Fix-2 would have been more thorough (a separate Step is structurally salient and harder to skip). But the evidence is one observed failure. Adding a new Step is more invasive than adding a sub-section. Per the proportional-scope criterion, the smaller fix (sub-section + example expansion) is preferable when both fixes catch the observed failures equally.

If the smaller fix proves insufficient in next 3 finding.md compilations, Fix-2 is documented as the revival path.

### Why the fix sits at CONCLUDE, not at upstream disciplines

The disciplines are working documents. They are consumed by the runner during the pipeline AND by CONCLUDE for compilation, but NOT by external readers. Making them cold-readable would conflate audiences and slow them.

CONCLUDE is the cold-readable surface. The translation responsibility belongs there. The fix is correctly placed.

### Why the over-fire mitigation works

The first-use checklist's binary criterion ("does the first appearance have a parenthetical phrase naming WHAT the term refers to?") distinguishes:
- Internally-referential shorthand → needs parenthetical context.
- Template-shared vocabulary → does NOT need parenthetical context.
- Already-explained references → first appearance has the parenthetical; subsequent uses are fine.

The distinction is observable, not subjective. A runner can apply the criterion mechanically without judgment beyond reading the term and checking for parenthetical context.

### Significant alternatives considered and rejected

- **"Just rewrite the principle to be a check."** Rejected because the principle's descriptive role is valuable for teaching. The fix adds a procedural layer alongside, not in place of.

- **"Add automated tooling that runs the regex scan."** Out of scope — this fix is for the protocol, not the implementation. Tooling can be added separately if needed.

- **"Restructure conclude.md to put the check first."** Rejected — preserves existing structure per proportional-scope criterion.

- **"Apply the rule recursively to discipline specs."** Deferred — disciplines are working documents; cold-readability is the wrong success criterion for them.

## Open Questions

### Monitoring

- After the fix lands, observe the next 3 finding.md compilations. Verify zero internally-referential references slip through. If any do, Fix-2 (separate Step) revives.
- Track whether the regex patterns over-fire on legitimate phrasings. If runners report frequent false positives, refine the pattern wording.
- Track whether the example list expansion (Component A) is sufficient pattern teaching. If runners still miss new shapes, add more examples.

### Blocked

- Automated tooling for the regex scan is out of scope until the protocol fix lands and is observed in practice.

### Research Frontiers

- Whether the same mechanical-check pattern (regex scan + first-use checklist) applies to other quality controls in `conclude.md` (e.g., hedge specificity, gate specificity, cross-reference format). If so, those rules could be similarly operationalized.

### Refinement Triggers

- Re-open Component A's example list if a future finding.md fails with a new shape not covered by the 4 examples. Add the new shape as a 5th example.
- Re-open Component B's pattern list if a future finding.md fails with a phrase that doesn't match any of the 3 patterns. Add the new pattern.
- Re-open the deferral of Fix-2 if Fix-1 + Fix-3 prove insufficient (any internally-referential reference slips through in next 3 finding.md compilations despite the runner applying the check).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

in
devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md

The gap: the current Probe section says a good probe "goes deeper on one specific region; produces detailed structural knowledge; identifies sub-features that weren't visible at scan resolution; may generate new signals." The current Surface-Only Scanning failure-mode prevention says "After each scan, detect signals and probe at least one." Both treat probing as a uniform operation regardless of the signal's TYPE. There is no rule differentiating between signals that carry quantifiable claims (claims whose answer is a number or measurable property) and signals that carry qualitative claims.


i dont get wdym or reger  by  the current Probe section  or The current Surface-Only Scanning failure-mode..

in our MVL loop and also in  homegrown/protocols/conclude.md  we already have rules for preventing this ambiguity but why it failed? can u inspect the docarchive  and conclude.md to understand it and make suggestions how to solve this language issue
```

</details>
