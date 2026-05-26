# Innovation: Structural Decomposition of MVL+ Branch Creation's Question Field

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_14-50__branch_creation_question_field_decomposition/_branch.md`

Plus exploration's 5 candidates + sensemaking's 10 SDs + decomposition's 8-piece Q-tree.

---

## Intuition / Direction

Generate the actual paste-ready text per piece. The deliverable's load-bearing element is FS1 (structural fail-safe) precisely because the meta-category enumeration can never be proved complete. Mechanism coverage: Combination (per-piece) + Constraint Manipulation (graceful-degradation policy) + Inversion (CONTRARIAN-RETHINK on completeness claim).

---

## P1 — Question-field replacement text

### Seed

5 meta-categories (Subject / Action / Level / Observation Targets / Deliverable Shape) per SD1; SD8 H1-specific language for Observation Targets; SD10 examples for Level; graceful-degradation policy.

### Generate

Paste-ready text:

```markdown
## Question

State the question covering all five meta-aspects below. The five categories
are a CHECK on what a well-framed question contains, not required sub-fields
to populate. If the user's input maps cleanly to a single sentence covering
all five, write that one sentence. If the input has multiple clauses or
multi-part framing (joined by "and" / "both X and Y" / "in addition to" /
"as well as" / "plus" / commas-in-noun-phrases), list the relevant aspects
explicitly to ensure each is preserved.

- **Subject** — what is being investigated (the artifact, system, situation,
  phenomenon, or target).
- **Action** — what cognitive operation is being performed (compare / decide
  / diagnose / design / understand / synthesize / strategize / etc.).
- **Level** — at what granularity the answer lives (component / system /
  loop / discipline / runner / protocol / cross-cutting / etc.). When the
  user's input distinguishes loop-level from discipline-level, or
  system-level from component-level, preserve that distinction here.
- **Observation targets** — what specific aspects must be observed or
  produced. **If MULTIPLE, list each as a separate item.** If the user's
  input joined targets with "and" / "both X and Y" / "in addition to" /
  "as well as" / "plus", PRESERVE ALL of them as separate items here — do
  not compress into one clause. (This is the failure mode diagnosed at
  H1 of the LOOP_DIAGNOSE finding at
  `devdocs/inquiries/2026-05-22_14-30__loop_diagnose__enumeration_frame_error_in_test_design/finding.md`
  — the dropped phrase pattern this category exists to prevent.)
- **Deliverable shape** — what form the answer takes (decision with
  reasoning / list with categorization / design with components and
  trade-offs / strategy with phases / diagnostic verdict with hypotheses
  / etc.).

Then state the question, capturing all five aspects above. The sentence may
be longer than one sentence if needed to preserve coverage; conciseness
serves clarity, not the other way around.
```

### Test

- Verb-shape check: instruction uses cognitive-framing language; not enumeration. ✓
- H1 coverage: "Observation Targets" bullet explicitly names H1's conjunction-pattern language. ✓
- Graceful degradation: explicit policy preserved (one-sentence acceptable for simple inputs). ✓
- Paste-ready: no placeholders. ✓
- PASS.

---

## P2 — Goal-field replacement text

Paste-ready text:

```markdown
## Goal

What would a good answer look like, covering:

- **Criterion** — what specific qualities make an answer "good" (precision,
  completeness, actionability, etc.; name the dimensions that matter for
  this inquiry).
- **Use case** — what the user will do with the answer (the concrete action
  the answer enables).
- **Desired outcome** — what state the user wants to reach via this answer
  (the downstream effect; what changes after the user acts).
- **What would fail** — what kind of answer would technically address the
  question but miss the goal (negative spec; useful for catching
  mis-framings before they propagate to downstream stages).
```

### Test

- 4 sub-prompts named. ✓
- "What would fail" is the load-bearing addition; catches mis-framings. ✓
- Paste-ready. ✓
- PASS.

---

## P3 — Source Input section template

Paste-ready text (added as new section in _branch.md between Goal and Scope Check):

```markdown
## Source Input (raw user request — preserved verbatim for transcription-audit)

Preserved verbatim so downstream disciplines can audit transcription
fidelity at any stage. If the agent later notices a load-bearing phrase
absent from Question or Goal, this section is the authoritative source.

```text
[paste the user's raw request here, verbatim]
```
```

### Test

- New section with verbatim block + framing line. ✓
- Eliminates transcription-loss failure surface for downstream disciplines (they can read raw directly). ✓
- PASS.

---

## P4 — FS1 fail-safe instruction

Paste-ready text (added at end of Step 3, after the _branch.md template):

```markdown
### Step 3.5 — Transcription-audit fail-safe (run after _branch.md is written)

After completing the _branch.md content (Question + Goal + Source Input +
Scope Check + any Layer Commitment / Synthesis Trigger sections), run the
following structural check:

1. Re-read the raw user input (now preserved verbatim in `## Source Input`).
2. Scan for clause-joiners and multi-clause patterns:
   - " and " / " AND " / "both X and Y" / "in addition to" / "as well as" /
     "plus" — at the clause level (not phrase level).
   - Comma-separated noun phrases that carry distinct semantic load
     (e.g., "A, B, and C" where each is a separate target).
   - Multi-sentence framings where each sentence introduces a new aspect.
3. For each multi-clause pattern found, verify each clause's content
   appears in Question, Goal, or Source Input. (Source Input always covers
   verbatim; the check is whether Question + Goal also reflect the clause's
   semantic content beyond verbatim preservation.)
4. If a clause's semantic content does NOT appear in Question or Goal,
   the transcription dropped a load-bearing phrase. Expand Question or
   Goal to incorporate it before proceeding to Exploration. (Do not rely
   on Source Input alone — downstream disciplines may consume the
   Question + Goal as the working framing.)

The fail-safe operates on STRUCTURE (conjunctions, clauses, sentences) not
CONTENT — it catches dropped clauses regardless of which subject matter
they're about. This is intentional: the meta-category enumeration in the
Question field cannot be proved complete; the structural fail-safe is the
backstop.
```

### Test

- Lists clause-joiners explicitly. ✓
- Verification rule clear. ✓
- Action when missing clear. ✓
- Names the structural-vs-content distinction (load-bearing rationale). ✓
- Operates as Step 3.5 — after template, before next discipline. ✓
- PASS.

---

## P5 — Integrated Step-3 replacement (paste-ready block)

The integrated replacement for Step 3 of "If NEW (input is a question or description)" in `cognitive_harness/MVL+/SKILL.md`:

```markdown
3. For ROOT NEW only, write `[inquiry_path]/_branch.md`:

   ```markdown
   # Branch: [name]
   ## Question

   State the question covering all five meta-aspects below. The five
   categories are a CHECK on what a well-framed question contains, not
   required sub-fields to populate. If the user's input maps cleanly to
   a single sentence covering all five, write that one sentence. If the
   input has multiple clauses or multi-part framing (joined by "and" /
   "both X and Y" / "in addition to" / "as well as" / "plus" /
   commas-in-noun-phrases), list the relevant aspects explicitly to
   ensure each is preserved.

   - **Subject** — what is being investigated.
   - **Action** — what cognitive operation (compare / decide / diagnose
     / design / understand / synthesize / strategize / etc.).
   - **Level** — at what granularity (component / system / loop /
     discipline / runner / protocol / cross-cutting). Preserve the
     user's level distinction (e.g., loop-level vs discipline-level)
     when present.
   - **Observation targets** — what specific aspects must be observed
     or produced. **If MULTIPLE, list each as a separate item.** If the
     user's input joined targets with "and" / "both X and Y" /
     "in addition to" / "as well as" / "plus", PRESERVE ALL of them as
     separate items here — do not compress into one clause.
   - **Deliverable shape** — what form the answer takes (decision with
     reasoning / list with categorization / design with components and
     trade-offs / strategy with phases / etc.).

   Then state the question, capturing all five aspects above. The
   sentence may be longer than one sentence if needed to preserve
   coverage.

   ## Goal

   What would a good answer look like, covering:

   - **Criterion** — what qualities make an answer "good" (precision,
     completeness, actionability, etc.).
   - **Use case** — what the user will do with the answer.
   - **Desired outcome** — what state the user wants to reach.
   - **What would fail** — what kind of answer would technically
     address the question but miss the goal (negative spec).

   ## Source Input (raw user request — preserved verbatim for transcription-audit)

   ```text
   [paste the user's raw request here, verbatim]
   ```

   ## Scope Check
   [...existing Scope Check instruction kept as-is...]

   ## Layer Commitment
   [...existing Layer Commitment instruction kept as-is...]

   ## Synthesis Trigger
   [...existing Synthesis Trigger instruction kept as-is...]
   ```

3.5. **Transcription-audit fail-safe (run after _branch.md is written):**

   1. Re-read the raw user input (preserved verbatim in `## Source Input`).
   2. Scan for clause-joiners: " and " / " AND " / "both X and Y" /
      "in addition to" / "as well as" / "plus", multi-clause commas,
      multi-sentence framings.
   3. For each multi-clause pattern, verify each clause's semantic
      content appears in Question or Goal.
   4. If a clause's content is missing from Question + Goal, expand
      before proceeding to Exploration.

   The fail-safe operates on STRUCTURE (conjunctions, clauses) not
   CONTENT — it catches dropped clauses regardless of subject matter.
   This is intentional: meta-category enumeration above cannot be
   proved complete; structural fail-safe is the backstop.
```

### Test

- Integrates P1, P2, P3, P4. ✓
- Preserves Scope Check, Layer Commitment, Synthesis Trigger as-is. ✓
- FS1 appears as Step 3.5. ✓
- Paste-ready as a unit. ✓
- PASS.

---

## P6 — Coverage analysis

Cases caught:

| Failure case | Caught by | How |
|---|---|---|
| H1: dropped conjunction-joined observation target ("accumulation of other disciplines and finding") | Observation Targets meta-category + FS1 | Meta-category explicitly names the H1 language; FS1 scans raw input for "and" + verifies each clause survives |
| Loop-level vs discipline-level conflation | Level meta-category | Examples include loop / discipline distinction |
| Dropped negative constraint ("not X") | FS1 + Scope Check (existing) | FS1 catches conjunction-joined "not"; Scope Check catches explicit exclusions |
| Dropped time/phase constraint | FS1 | If joined to other clauses by conjunction |
| Multi-sentence framing where each sentence introduces a new aspect | FS1 explicitly | Scan multi-sentence framings rule |
| Dropped deliverable shape | Deliverable Shape meta-category | Explicit category |

Cases NOT necessarily caught (acknowledged):

| Failure case | Why not caught | Mitigation |
|---|---|---|
| Implicit multi-aspect framing without explicit conjunction (e.g., "I want to test X" but implicitly means "test X AND test Y") | FS1 only operates on explicit conjunctions; no conjunction = no trigger | User-interactive verification would catch but is out of scope here; partial reliance on agent's reading comprehension |
| Aspect axis not in my 5 meta-categories (e.g., ethical concern, audience, time-horizon) | My enumeration is finite; cannot be proved complete | FS1 still catches IF the missing axis is in a conjunction-joined clause; otherwise relies on agent's general framing skill |

**Coverage verdict:** H1 + most conjunction-pattern failures CAUGHT. Implicit-multi-aspect failures + non-enumerated-axis failures PARTIALLY caught. Honest acknowledgment of residual risk preserved.

### Test

- H1 explicitly traced through Observation Targets + FS1. ✓
- Other plausible failures traced. ✓
- Limitations acknowledged honestly. ✓
- No over-claim of completeness. ✓
- PASS.

---

## P7 — Branch-experiment evaluation gate spec

Paste-ready text:

```markdown
### Branch experiment evaluation gate (per LOOP_DIAGNOSE Step 5 guardrail)

The proposed edit to `cognitive_harness/MVL+/SKILL.md` (Step 3 + new Step
3.5 fail-safe) should be deployed as a branch experiment, not a direct
permanent edit. One correction chain is thin evidence for permanent source
changes.

**Setup:**
1. Create a parallel version of MVL+ SKILL.md (e.g., `MVL+-test/SKILL.md`
   or a branch in version control) with the proposed Step 3 + Step 3.5.
2. Keep the current MVL+/SKILL.md unchanged.

**Evaluation:**
1. Over the next 5 NEW MVL+ inquiries with multi-part user framing (raw
   input containing conjunctions, multi-clause structures, or multi-sentence
   framings), run each through both spec versions.
2. For each chain, observe whether the audited version (with Step 3.5
   fail-safe) catches load-bearing-phrase drops that the current version
   would have missed.

**Pass threshold:** ≥3 of 5 chains where Step 3.5 catches a drop the
current spec would have missed → promote to permanent edit.

**Fail threshold:** <3 of 5 catches → revert to current spec; analyze why
the audit step didn't help (was the fail-safe too narrow? did the
meta-category enumeration miss a relevant axis? was the user-input
pattern not conjunction-marked?).

**Telemetry:** record each chain's:
- Raw user input
- Whether the audited version flagged a transcription concern
- Whether the current version's _branch.md dropped any load-bearing phrase
- The agent's audit decision (if any)
```

### Test

- All elements per LOOP_DIAGNOSE Step 5 guardrail. ✓
- Concrete threshold + revert condition. ✓
- Paste-ready. ✓
- PASS.

---

## P8 — Meta-recursion-residual acknowledgment

Paste-ready text:

```markdown
### Meta-recursion residual (honest limitation)

The 5 meta-categories in the Question field instruction (Subject, Action,
Level, Observation Targets, Deliverable Shape) are an enumeration of
question-content axes the agent should check. By the user's own
methodology — "if we make it explicit but miss a component, LLM will skip
that missing component" — this enumeration cannot be proved complete. New
question-content axes may emerge in future inquiries (e.g., ethical
concerns, audience-specific constraints, time-horizon constraints) that
the 5 categories don't name.

This is why the Step 3.5 structural fail-safe is load-bearing: it operates
on input STRUCTURE (conjunctions, clauses, sentences), not on whether the
agent knows the relevant content axes. The fail-safe catches dropped
clauses regardless of subject matter — closing the loop on the
meta-recursion risk to the extent it's automatable.

The fail-safe is not perfect either: implicit multi-aspect framings
without explicit conjunctions can still slip through. The honest residual
is acknowledged here rather than disguised by an enumeration that pretends
to be complete.
```

### Test

- Acknowledges enumeration's limit explicitly. ✓
- Names FS1 as load-bearing precisely because of the limit. ✓
- Honest about remaining residual (implicit multi-aspect framings). ✓
- No over-claim. ✓
- PASS.

---

## Assembly Check

The deliverable (P1-P8) integrated:
- P5 is the paste-ready edit (integrates P1+P2+P3+P4)
- P6 verifies P5 against H1 + plausible variants
- P7 governs the rollout (branch experiment, not direct edit)
- P8 acknowledges what the deliverable can't guarantee

Emergent value: applying the user's methodology to this inquiry's OWN _branch.md (which uses the 5 meta-categories explicitly) is a meta-test — if the methodology works, this inquiry's framing should be more complete than a vague-instruction-driven one.

---

## Mechanism Coverage Telemetry

- Generators: Combination (per-piece content) + Absence Recognition (FS1 catches what enumeration misses) + Domain Transfer (structural fail-safe pattern from software testing) + Extrapolation (one-chain → 5-chain branch experiment).
- Framers: Lens Shifting (vague-instruction → enumerated-meta-categories) + Constraint Manipulation (graceful-degradation policy) + Inversion (CONTRARIAN-RETHINK on meta-completeness).
- 7/7 mechanisms applied.
- 6 innovation failure modes: NONE observed.

**Overall: PROCEED to Critique.**
