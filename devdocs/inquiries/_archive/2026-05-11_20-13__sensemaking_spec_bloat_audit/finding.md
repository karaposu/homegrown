---
status: active
continues_from: devdocs/inquiries/2026-05-11_17-29__sensemaking_meta_level_check_generator/finding.md
---
# Finding: Sensemaking Spec Bloat Audit

## Question

**Question.** The user caught a project-governance reference ("≥3-instance Step 5 threshold or via project iteration") inside a proposed Meta-Inspection section for `homegrown/sense-making/references/sensemaking.md` and reverted that edit because the Step-5 governance is a project meta-protocol rule (defined in `homegrown/protocols/loop_diagnose.md`), not a universal mechanic of how sensemaking works. They asked: **which other lines in the current `homegrown/sense-making/references/sensemaking.md` contain similar project-specific governance bloat — references to instance thresholds, specific inquiries, project-corpus, project-tools (/MVL, /MVL+), "Frontier flag" parentheticals, failure-mode-promotion procedures, or project-internal terminology — that don't belong in a pure discipline reference spec?**

**Goal.** A complete inventory of bloat lines with per-instance reasoning, exact fix-shape determinations (delete vs reword vs generalize-example), and drafted replacement texts ready to apply. Backward-compatible (no procedure changes; no behavior changes; only wording/labels change).

The user's explicit framing: *"this is really bad. are there more bloat lines in our current homegrown/sense-making/references/sensemaking.md ?"*

---

## Finding Summary

- **Six bloat instances identified.** Systematic line-by-line audit of the current 383-line spec found 6 distinct bloat instances. Two are HIGH-confidence (substantial project-specific content); two are MEDIUM-confidence (project-flavored terminology that preserves structural content under generic rewording); one is LOW-MEDIUM (minor terminology); one is stylistic. All other content (Process Model, Saturation Indicators, Failure Modes, Standard Analysis Protocol, Phase 1-5 cores, internal cross-references) is universal and clean.

- **The same pattern the user caught is present in one HIGH-confidence instance.** The Accommodation trigger refinement note (line 378) ends with a parenthetical "(Frontier flag: if N≥2 model-misfit instances emerge across the corpus, revisit this anchor decision and consider promoting Accommodation trigger to a separate named failure mode.)" — exactly the same shape of project-governance leak (instance threshold + "across the corpus" + failure-mode-coinage procedure). Fix: delete entirely.

- **The Frame-exit Completeness positive example is the heaviest bloat instance.** The example on line 261 references project-specific artifacts (a metaloop-ladder inquiry inheriting "Memory" from a prior session-architecture finding; md files written by /MVL or /MVL+ runners; persistent memory across inquiries). A generic practitioner would not understand any of these labels. Fix: replace the project-specific labels with generic ones that demonstrate the same procedure (a system-design ladder inquiry inheriting "state"; three referent types — persistent state in storage; transient in-memory state; client-side cached state).

- **The Load-bearing concept test refinement note uses project-flavored wording throughout.** Lines 334-338 use "the loop's verdict," "the project's actual property," "loop-coined neologism," "trigger-classifier rules," etc. The TEST LOGIC is universal; the wording assumes project context. Fix: reword with generic substitutes ("the analysis's verdict," "the domain's actual property," "newly-coined term," "concepts whose use depends on a runtime determination").

- **The Specific-vs-pattern recognition cue has minor project-flavored wording.** Line 344 says "observations from one inquiry, instances from one corpus chain." Fix: reword to "from a small set of observations, or instances from one chain of related cases."

- **The Frame-exit Completeness perspective uses "project-wide" repeatedly.** Six occurrences across lines 247 and 253. Fix: reword "project-wide" → "broader scope" (or "in the broader scope" / "outside the inquiry's frame" where clearer in context).

- **All 6 fixes are mutually independent and ship as one batch of surgical edits.** No procedure or behavior changes. Backward-compatible. Reversible per-instance. Critique's adversarial testing produced a clean SURVIVE on all pieces — substitution targets verified line-by-line against the current spec; meaning preservation tested per substitution; no new bloat introduced; B6 occurrence enumeration verified complete.

- **The discrimination criterion is the "universal-discipline test":** would a generic practitioner using sensemaking on an unrelated project find this text meaningful? Any text that requires project-knowledge to be meaningful is bloat. This criterion is itself a reusable spec-hygiene tool, applicable to future audits of the other 4 discipline specs (Research Frontier).

---

## Finding

The Sensemaking discipline reference spec at `homegrown/sense-making/references/sensemaking.md` describes universal mechanics — how sensemaking works as a thinking discipline. Through iterative inquiry-driven additions (specific perspectives added; specific refinement notes added; specific failure modes named), the spec has accumulated project-specific terminology, project-meta-protocol governance references, and project-tooling references that don't belong in a pure discipline reference. The user identified one such bloat instance in a proposed Meta-Inspection edit (which they then reverted) and asked whether similar bloat exists elsewhere in the spec.

The audit's discrimination criterion is the **universal-discipline test**: would a generic practitioner using this discipline on an unrelated project find this text meaningful? Text that requires project-knowledge to be meaningful is bloat; text that describes universal sensemaking mechanics is not.

The audit found 6 bloat instances. All other content in the spec is universal.

### 1. The bloat inventory

The 6 bloat instances cluster into three fix shapes:

| Instance | Location | Bloat type | Fix shape | Severity |
|---|---|---|---|---|
| B1 — Frame-exit positive example | Line 261 | Project-specific example labels (/MVL, /MVL+, metaloop-ladder, session-architecture finding, persistent memory across inquiries) | Generalize-example | HIGH |
| B2 — Accommodation trigger Frontier-flag | Line 378 | Project-governance parenthetical (N≥2 instances; "across the corpus"; failure-mode promotion procedure) | Delete entirely | HIGH |
| B3 — Load-bearing concept test wording | Lines 334-338 | Project-flavored wording ("the loop's verdict"; "the project's actual property"; "loop-coined neologism") | Reword | MEDIUM |
| B4 — "Trigger-classifier rules" | Line 338 | Project-coined terminology embedded in a parenthetical | Reword (remove phrase; broader category remains) | MEDIUM |
| B5 — Specific-vs-pattern recognition cue | Line 344 | Project-flavored example terminology ("from one inquiry, instances from one corpus chain") | Reword | LOW-MEDIUM |
| B6 — "project-wide" in Frame-exit Completeness | Lines 247, 253 (6 occurrences) | Project-implying scope phrase used repeatedly | Reword | Stylistic |

All other content (the framework intro; the Comprehending+Stabilizing two-operation framing; the Key Components; the Process Model; the Saturation Indicators; the 6 Failure Modes with their corrective questions; the Standard Analysis Protocol; the Execute section's Phase 1-5 cores; the SV1-SV6 progression; the internal cross-references; the failure-mode numbering) is **universal and clean**. No bloat found in these sections.

### 2. Why each instance is bloat (with structural-content preservation analysis)

#### B1 — Frame-exit positive example (line 261)

The example as written demonstrates the four meta-categories (Existence Enumeration → TYPE-axis surfaces multiple referent types; Role Assessment finds load-bearing referent; Verdict = re-locate not exclude) but does so using project-specific labels: "metaloop-ladder inquiry," "prior session-architecture finding," "md files written by /MVL or /MVL+ runners," "persistent memory across inquiries." A practitioner outside the project cannot parse any of these labels.

The example's STRUCTURE (a ladder inquiry inheriting a multi-value term; TYPE-axis surfacing three referent types; frame includes only the first; Role Assessment finds one of the excluded load-bearing; verdict = re-locate) is universal and worth preserving. Only the LABELS are bloat.

#### B2 — Accommodation trigger Frontier-flag parenthetical (line 378)

The trailing parenthetical reads: "(Frontier flag: if N≥2 model-misfit instances emerge across the corpus, revisit this anchor decision and consider promoting Accommodation trigger to a separate named failure mode.)"

This is the SAME bloat pattern the user caught in the Meta-Inspection draft. It references:
- "N≥2 instances" — an instance-counting threshold (project meta-protocol concept).
- "across the corpus" — refers to THIS PROJECT's corpus of inquiries.
- "promoting Accommodation trigger to a separate named failure mode" — failure-mode coinage is project meta-protocol governance (codified in `homegrown/protocols/loop_diagnose.md`).

The Accommodation trigger's structural content (model-misfit detection; drop back to Phase 2; the problem is structural-model-misfit not unresolved ambiguity) is fully covered in the preceding sentences. The Frontier-flag parenthetical adds NO universal content; it is purely project-governance.

#### B3 — Load-bearing concept test wording (lines 334-338)

The refinement note's TEST LOGIC (test domain-property-vs-external-default; test domain-terminology-vs-external-default plus user-language alignment; test proxy-vs-structural + discoverability + user-language alignment) is universal. The wording assumes project context:

- "the loop's verdict" — "the loop" refers to the project's MVL+ cognitive loop. A generic practitioner has "the analysis," not "the loop."
- "the project's actual property/principle" — implies a project-scoped domain. A generic practitioner has "the domain" or "the analysis context."
- "loop-coined neologism" / "the loop coined a name" — assumes the loop-as-agent. A generic practitioner has "newly-coined" or "the analysis coined."
- "project axioms" — implies project context.

#### B4 — "Trigger-classifier rules" (line 338)

The parenthetical "(especially trigger-classifier rules and concepts whose use depends on a runtime determination)" cites "trigger-classifier rules" as a special case. This is project-coined terminology — a generic practitioner has no "trigger-classifier rules" concept. The broader category that already appears in the same parenthetical ("concepts whose use depends on a runtime determination") covers the structural meaning.

#### B5 — "From one inquiry, instances from one corpus chain" (line 344)

The Specific-vs-pattern recognition cue says: "particularly when that concept appears as a Phase 1 / Key Insight built from a small set of specific examples (e.g., observations from one inquiry, instances from one corpus chain)."

"One inquiry" and "one corpus chain" are project-flavored — "inquiry" is universal but the project usage assumes its inquiries-folder structure; "corpus chain" is project-coined. A generic practitioner has "a small set of observations" or "one chain of related cases."

#### B6 — "Project-wide" in Frame-exit Completeness (lines 247, 253 — 6 occurrences)

The Frame-exit Completeness perspective uses "project-wide" repeatedly to mean "the broader scope outside the inquiry's frame." The word "project" implies a project context, but the underlying concept is universal (scope outside the frame). "Broader scope" / "in the broader scope" preserves the structural meaning without implying THIS specific project.

### 3. Drafted replacement texts (ready to apply)

The full per-instance drafted texts are in the Reasoning section below (Section 8). Summary:

- **B1:** replace the Frame-exit positive example with a system-design context (state with three referent types). 6 demonstration elements preserved (verified via critique's per-element preservation table).
- **B2:** delete the trailing parenthetical. The Accommodation trigger note's structural content stays intact.
- **B3:** 5 reword pairs in the Load-bearing concept test ("the loop" → "the analysis"; "the project's" → "the domain's"; "loop-coined" → "newly-coined" / "analysis-coined"; "project axioms" → "domain axioms").
- **B4:** remove "trigger-classifier rules and " from the parenthetical (the broader category "concepts whose use depends on a runtime determination" remains).
- **B5:** reword "observations from one inquiry, instances from one corpus chain" → "from a small set of observations, or instances from one chain of related cases."
- **B6:** reword "project-wide" → "broader scope" / "in the broader scope" across 6 occurrences; "project phase-dependence" → "context phase-dependence."

### 4. What's out of scope

- **The B2 content destination.** Where the deleted Frontier-flag content optionally lives (in the originating inquiry's finding, in `homegrown/protocols/loop_diagnose.md` alongside other project-meta-protocol governance, or simply unpreserved) is a SEPARATE user decision after the cleanup ships. Out-of-scope for this cleanup's edit.

- **Cross-discipline-spec audit.** The other four discipline specs (`homegrown/explore/references/explore.md`; `homegrown/decompose/references/decompose.md`; `homegrown/innovate/references/innovate.md`; `homegrown/td-critique/references/td-critique.md`) were developed through similar inquiry-driven additions and may have analogous bloat. A focused future inquiry could apply the same universal-discipline test to each. Out-of-scope here; flagged as Research Frontier.

- **The "universal-discipline test" as a tool.** The discrimination criterion that emerged from this audit ("would a generic practitioner using this discipline on an unrelated project find this text meaningful?") is itself reusable. Future spec hygiene work can apply the same test. Out-of-scope for codification here; observation only.

---

## Next Actions

### MUST

- **What:** Apply the 6 surgical edits to `homegrown/sense-making/references/sensemaking.md` as one batch. The exact texts are in the Reasoning section below ("8 — Drafted replacement texts").
  - **Who:** User-applied (or AI-applied with explicit user request).
  - **Gate:** No verification gate; ship now (substitution targets verified by Critique line-by-line against current spec).
  - **Why:** Removes project-specific governance bloat from the discipline reference spec; aligns the spec with its stated purpose (universal sensemaking mechanics). Backward-compatible (no procedure or behavior changes; only wording/labels change). Reversible per-instance.

### COULD

- **What:** Decide where B2's deleted content optionally lives (originating inquiry's finding, project-meta-protocol doc, or unpreserved).
  - **Who:** User.
  - **Gate:** After the cleanup ships; not blocking.
  - **Why:** The Accommodation-trigger-as-future-promotion-candidate observation has some project value but doesn't belong in the discipline spec. Capturing it elsewhere is optional preservation.

- **What:** Run a cross-discipline-spec audit applying the universal-discipline test to `homegrown/explore/references/explore.md`, `homegrown/decompose/references/decompose.md`, `homegrown/innovate/references/innovate.md`, and `homegrown/td-critique/references/td-critique.md`.
  - **Who:** User-initiated future inquiry.
  - **Gate:** At user's convenience.
  - **Why:** Each of the 4 other discipline specs was developed through similar inquiry-driven additions and likely has analogous bloat. The same audit pattern would clean them up.

### DEFERRED

- (Nothing deferred — all action items are MUST or COULD.)

---

## Reasoning

### 5 — The discrimination criterion

The audit's load-bearing concept is the **universal-discipline test**:

> **Would a generic practitioner using this discipline on an unrelated project find this text meaningful?**

Text that requires project-knowledge to be meaningful is BLOAT. Text that describes universal sensemaking mechanics is UNIVERSAL.

The test is applied per line/passage. Internal cross-references (line 122; line 155; line 159's reference to other refinement notes; failure-mode internal numbering) PASS the test — they reference the spec's own internal structure, accessible to any reader of the same spec.

Project-meta-protocol governance (Step 5; instance thresholds; failure-mode promotion procedures), project-corpus references ("across the corpus"; "across our inquiries"), project-tool references (/MVL; /MVL+; meta-loop), and project-coined terminology that implicitly assumes project context all FAIL the test.

### 6 — The three fix shapes

Three fix shapes emerged from per-instance analysis:

1. **Delete entirely.** When the bloat is pure-additive content with no universal value. The structural content (if any) is already covered elsewhere. Used for B2.

2. **Reword.** When the structural content is universal but the wording assumes project context. Substitute generic terms preserving structural meaning. Used for B3, B4, B5, B6.

3. **Generalize-example.** When an example's STRUCTURE is universal but its LABELS are project-specific. Replace project-specific labels with generic ones preserving the demonstration structure. Used for B1.

### 7 — Per-instance analysis (full reasoning per bloat instance)

#### B1 — Frame-exit Completeness positive example (line 261; HIGH; generalize-example)

**Why bloat:**
- "metaloop-ladder inquiry" — project-specific inquiry type.
- "prior session-architecture finding" — references a specific previous project finding.
- "/MVL or /MVL+ runners" — project-specific tooling.
- "per-inquiry md files written by /MVL or /MVL+ runners" — project-specific operational artifact.
- "the meta-loop frame" — project-specific concept.
- "persistent memory across inquiries" — project-specific operational concept.

**Structural content to preserve:** the example's demonstration of the four meta-categories — a ladder inquiry inheriting a multi-value term; TYPE-axis surfacing three referent types; the frame includes only the first; Role Assessment finds one of the excluded load-bearing; verdict = re-locate not exclude. All 6 elements preserved in the replacement.

#### B2 — Accommodation trigger Frontier-flag parenthetical (line 378; HIGH; delete entirely)

**Why bloat:**
- "N≥2 instances" — instance-counting threshold concept (project meta-protocol).
- "across the corpus" — references THIS PROJECT's corpus.
- "promoting Accommodation trigger to a separate named failure mode" — failure-mode coinage is project meta-protocol governance.

**Structural content to preserve:** none. The Accommodation trigger refinement note's structural content (model-misfit detection; drop back to Phase 2; the problem is structural-model-misfit not unresolved ambiguity; failing to recognize is Premature Stabilization on the model-misfit axis) is already fully covered in the preceding sentences. The parenthetical adds nothing universal.

#### B3 — Load-bearing concept test wording (lines 334-338; MEDIUM; reword)

**Why bloat:**
- "the loop's verdict" — "the loop" refers to the project's cognitive loop.
- "the project's actual property/principle" — project-scoped.
- "the project's actual vocabulary" — project-scoped.
- "loop-coined neologism" — assumes the loop-as-agent.
- "the loop coined a name" — assumes the loop-as-agent.
- "project axioms" — project-scoped.

**Structural content to preserve:** the test logic exactly. Each substitution maps "the loop" → "the analysis"; "the project" → "the domain"; "loop-coined" → "newly-coined" / "analysis-coined." The test predicates (domain-property-vs-external-default; domain-terminology-vs-external-default + user-language alignment; proxy-vs-structural + discoverability + user-language alignment) all remain unchanged.

#### B4 — "Trigger-classifier rules" (line 338; MEDIUM; reword via phrase removal)

**Why bloat:** "Trigger-classifier rules" is project-coined terminology. A generic practitioner has no such concept; the broader category "concepts whose use depends on a runtime determination" (which appears alongside it in the same parenthetical) covers the same structural ground.

**Structural content to preserve:** the broader category. Removing the project-specific sub-call-out leaves the universal phrase intact.

#### B5 — "From one inquiry, instances from one corpus chain" (line 344; LOW-MEDIUM; reword)

**Why bloat:** "one inquiry" and "one corpus chain" are project-flavored. The structural cue (concept built from few examples → test specific-vs-pattern) is universal.

**Structural content to preserve:** the structural cue. Substitute generic descriptions.

#### B6 — "Project-wide" in Frame-exit Completeness (lines 247, 253; 6 occurrences; stylistic; reword)

**Why bloat:** "Project-wide" implies a project context. The underlying concept is "scope outside the inquiry's frame" (universal). The word "project" is misleading for a generic practitioner.

**Structural content to preserve:** the scope-outside-frame concept. Substitute "broader scope" / "in the broader scope" / "outside the inquiry's frame" depending on grammatical context.

### 8 — Drafted replacement texts (ready to apply)

#### B1 replacement

**File:** `homegrown/sense-making/references/sensemaking.md` line 261.

**Original:**
```text
Example (positive — gating fires): a metaloop-ladder inquiry inherits "Memory" from a prior session-architecture finding and uses it across 6 levels with distinct propositions per row. Existence Enumeration's TYPE-axis prompt surfaces three referent types — human-mental memory; system-written md files (e.g., per-inquiry md files written by /MVL or /MVL+ runners); runtime in-memory state. The meta-loop frame's scope includes only the first; the other two are excluded. Role Assessment finds the md-file referent load-bearing (persistent memory across inquiries). Verdict: re-locate, not exclude.
```

**Replacement:**
```text
Example (positive — gating fires): a system-design ladder inquiry inherits "state" from a prior architecture finding and uses it across 6 levels with distinct propositions per row. Existence Enumeration's TYPE-axis prompt surfaces three referent types — persistent state in storage; transient in-memory state during request handling; client-side cached state. The inquiry's frame includes only the first; the other two are excluded. Role Assessment finds the transient in-memory state load-bearing (the system's request-handling depends on it). Verdict: re-locate, not exclude.
```

#### B2 deletion

**File:** `homegrown/sense-making/references/sensemaking.md` line 378.

**Text to delete** (the trailing parenthetical including the leading space):
```text
 (Frontier flag: if N≥2 model-misfit instances emerge across the corpus, revisit this anchor decision and consider promoting Accommodation trigger to a separate named failure mode.)
```

After deletion, line 378 ends after "...the original Premature Stabilization rule addresses."

#### B3 reword substitutions

| # | Line | Original | Replacement |
|---|---|---|---|
| B3.1 | 334 | "removing it would change the loop's verdict" | "removing it would change the analysis's verdict" |
| B3.2 | 336 | "Is this the project's actual property/principle, or an external default the loop adopted without testing?" | "Is this the domain's actual property/principle, or an external default the analysis adopted without testing?" |
| B3.3 | 336 | "project axioms (Foundational Principles)" | "domain axioms (Foundational Principles)" |
| B3.4 | 337 | "Does this term match the project's actual vocabulary and the user's language, or is it a loop-coined neologism that hasn't been validated?" | "Does this term match the domain's actual vocabulary and the user's language, or is it an analysis-coined neologism that hasn't been validated?" |
| B3.5 | 338 | "or has the loop coined a name without validation" | "or has the analysis coined a name without validation" |

#### B4 reword substitution (phrase removal)

**Line 338. Original:**
```text
Phase 5 / Conceptual Stabilization output — final committed concepts (especially trigger-classifier rules and concepts whose use depends on a runtime determination) → test multiple sub-aspects...
```

**Replacement:**
```text
Phase 5 / Conceptual Stabilization output — final committed concepts (especially concepts whose use depends on a runtime determination) → test multiple sub-aspects...
```

#### B5 reword substitution

**Line 344. Original phrase:**
```text
(e.g., observations from one inquiry, instances from one corpus chain)
```

**Replacement:**
```text
(e.g., from a small set of observations, or instances from one chain of related cases)
```

#### B6 reword substitutions (6 occurrences)

| # | Line | Original | Replacement |
|---|---|---|---|
| B6.1 | 247 | "exist project-wide" | "exist in the broader scope" |
| B6.2 | 253 | "refer to project-wide" | "refer to in the broader scope" |
| B6.3 | 253 | "each project-wide referent" | "each broader-scope referent" |
| B6.4 | 253 | "LAYER (project-wide vs per-inquiry; pre-condition vs operation)" | "LAYER (broader-scope vs per-inquiry; pre-condition vs operation)" |
| B6.5 | 253 | "PHASE (project phase-dependence)" | "PHASE (context phase-dependence)" |
| B6.6 | 253 | "multiple project-wide values" | "multiple broader-scope values" |

### 9 — Verification by Critique

Critique's adversarial testing (11 dimensions; 5 project-specific risk axes) produced a CLEAN SURVIVE on all 3 pieces + assembly:

- **Substitution targets verified line-by-line against current spec.** Every cited line and quoted phrase matches the current `sensemaking.md` text exactly. No off-by-one or misquoted targets.
- **B6 occurrence enumeration verified complete.** 6 occurrences in Frame-exit Completeness identified by Innovation; 6 occurrences confirmed by Critique's independent scan.
- **Meaning preservation tested per substitution.** "The loop's verdict" → "the analysis's verdict": agent generalized; concept unchanged. "The project's actual property" → "the domain's actual property": scope generalized; concept unchanged. "Trigger-classifier rules and concepts whose use depends on a runtime determination" → "concepts whose use depends on a runtime determination": sub-call-out removed; broader category covers the same structural ground. Etc.
- **No new bloat introduced.** "The analysis," "the domain," "broader scope," "context phase-dependence," "newly-coined," "analysis-coined" — all universal terms.
- **No missed bloat instances.** A separate D11 scan in Critique looked for additional bloat ("user's language," "Sensemaking output," internal cross-references) and found none requiring further cleanup.

### 10 — Self-reference handling

The inquiry used Sensemaking to clean Sensemaking's own spec. Self-reference acuity HIGH.

External anchoring: the universal-discipline test (independent of project-specific Sensemaking principles); the existing spec text (artifact-grounded; verified line-by-line); the user's framing ("pure discipline").

Counter-anchoring: counter-interpretations explicitly tested per Sensemaking ambiguity (delete-the-example for B1 rejected; move-to-meta-doc as primary for B2 rejected; deferral of B6 rejected; staged shipping rejected; loop-as-load-bearing-context for B3-B5 rejected).

Self-Reference Blindness corrective applied: does the thing being evaluated (sensemaking.md) use the same conceptual framework as the evaluation (Sensemaking discipline)? YES — but external grounding via the universal-discipline test (a criterion independent of project-specific Sensemaking principles) anchors the audit. Critique verified mechanical correctness line-by-line, not just structural agreement. Self-reference HELD.

---

## Open Questions

### Monitoring

- After the cleanup is applied, does the spec read naturally to a generic practitioner? Test by having someone unfamiliar with the project read the cleaned spec and verify they can parse all examples and apply all checks.

### Blocked

- (Nothing blocked.)

### Research Frontiers

- **B2 content destination.** Where the deleted Frontier-flag content optionally lives (preservation in the originating inquiry's finding, in `homegrown/protocols/loop_diagnose.md` alongside other project-meta-protocol governance, or unpreserved) is a separate user decision. The content notes Accommodation trigger as a future-promotion candidate when N≥2 model-misfit instances accumulate; the project may want to preserve this trace.

- **Cross-discipline-spec audit.** The other four discipline specs (`homegrown/explore/references/explore.md`; `homegrown/decompose/references/decompose.md`; `homegrown/innovate/references/innovate.md`; `homegrown/td-critique/references/td-critique.md`) were developed through similar inquiry-driven additions and likely have analogous bloat. A focused future inquiry applying the universal-discipline test to each would produce per-spec bloat inventories and cleanups.

- **Universal-discipline test as a reusable tool.** The discrimination criterion that emerged from this audit ("would a generic practitioner using this discipline on an unrelated project find this text meaningful?") is itself reusable. The five-step structure — (1) identify candidate; (2) test universal content; (3) reword if structural content is universal; (4) delete if purely project-governance; (5) generalize-example if structure is universal but labels are project-specific — could be codified for future spec hygiene. Out-of-scope here.

### Refinement Triggers

- **If applying the cleanup reveals that one of the 6 substitutions loses meaning in practice** (a practitioner reports the cleaned text doesn't convey the same procedure as before), revisit the specific substitution and adjust.
- **If new failure modes are discovered and added to the spec in the future**, apply the universal-discipline test at addition time to prevent bloat re-accumulation.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

in the last edit i asked , i realized sth problematic

u can see the problematic version here homegrown/sense-making/references/sensemaking_problem.md

and you will notice

there is 

The hooks list is EXTENDABLE. When a new specific check is discovered (at ≥3-instance Step 5 threshold or via project iteration), the membership decision criterion is itself the meta-question:

line

so i reversed that change back and now our homegrown/sense-making/references/sensemaking.md backto original version. 


but do you understand why that line is problematic? bc (at ≥3-instance Step 5 threshold or via project iteration 


line is irrelevant to the pure discipine ... It is full bloat...  it is not even about output etc


this is really bad.  are there more bloat lines in our current  homegrown/sense-making/references/sensemaking.md ?
```

</details>
