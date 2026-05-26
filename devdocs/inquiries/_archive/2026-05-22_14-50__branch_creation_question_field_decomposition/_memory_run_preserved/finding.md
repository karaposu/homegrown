---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Structural Decomposition of MVL+ Branch Creation's Question Field

## Question

The user asked, after the LOOP_DIAGNOSE finding (`devdocs/inquiries/2026-05-22_14-30__loop_diagnose__enumeration_frame_error_in_test_design/finding.md`) identified `_branch.md` transcription as the primary failure surface for the enumeration-frame-error correction chain, to apply a specific methodology to fix it: take the vague instruction in the runner spec, decompose it into explicit meta-categories with full coverage, verify the experienced failure case is covered by at least one named category, and add a fail-safe that catches whatever the enumeration might miss.

**The deliverable question:** how should the Question field instruction in `cognitive_harness/MVL+/SKILL.md` Step 3 of "If NEW" be restructured into explicit meta-categories + a structural fail-safe + a Source Input preservation section, such that the H1 load-bearing-phrase-loss failure mode is structurally prevented at the transcription step, while honestly acknowledging the meta-recursion residual (the enumeration cannot be proved complete)?

## Goal

A paste-ready edit to `cognitive_harness/MVL+/SKILL.md` Step 3, deployed as a branch experiment per LOOP_DIAGNOSE Step 5 guardrail (one-chain evidence is thin for permanent source edits). The user can paste the edit into a parallel SKILL.md variant, run 5 new MVL+ inquiries through both versions, and measure whether the audited version catches load-bearing-phrase drops in ≥3 of 5 chains where multi-part user framing is present.

## Finding Summary

- **Deliverable:** paste-ready replacement for Step 3 in `cognitive_harness/MVL+/SKILL.md` containing (1) Question field with 5 meta-categories as a CHECK, (2) Goal field with 4 sub-prompts, (3) new Source Input section preserving raw user input verbatim, (4) new Step 3.5 fail-safe scanning raw input for conjunction-joined clauses, (5) graceful-degradation policy preventing bloat on simple inputs, (6) branch-experiment evaluation gate with explicit threshold, (7) honest acknowledgment of meta-recursion residual.

- **The 5 meta-categories for Question field** (acting as a CHECK, not required sub-fields):
  - **Subject** — what is being investigated
  - **Action** — what cognitive operation (compare / decide / diagnose / design / understand / synthesize / strategize)
  - **Level** — at what granularity (component / system / loop / discipline / runner / protocol / cross-cutting) — preserves loop-vs-discipline-level distinction (H1's first axis)
  - **Observation Targets** — what aspects must be observed or produced; if MULTIPLE, list each; if user's input joined targets with "and" / "both X and Y" / "in addition to" / "as well as" / "plus", PRESERVE ALL of them (H1's second axis)
  - **Deliverable Shape** — what form the answer takes

- **The structural fail-safe (Step 3.5)** scans the raw user input for conjunctions and multi-clause patterns, then verifies each clause's content appears in Question or Goal. **Operates on input STRUCTURE not CONTENT** — catches dropped clauses regardless of subject matter. This is the load-bearing element of the design precisely because the 5-meta-category enumeration cannot be proved complete.

- **The Source Input section** preserves the user's raw request verbatim in `_branch.md` (not only at CONCLUDE-time in finding.md). This eliminates the transcription-loss failure surface for downstream disciplines (E / S / D / I / C) — they can audit raw input anytime.

- **Graceful degradation** prevents bloat on simple inputs: the meta-categories are a CHECK, not required sub-fields. If the user's input has no conjunctions or multi-clause patterns, a one-sentence Question form satisfies all 5 categories implicitly without explicit per-category listing.

- **H1 failure case coverage** — verified explicitly:
  - **Observation Targets** meta-category names the H1 conjunction pattern in its bullet text.
  - **Step 3.5 fail-safe** scans for "and" / "AND" / "both X and Y" / etc. and catches dropped clauses even if the meta-category enumeration misses something.
  - **Source Input section** preserves raw user input as ground truth for any downstream audit.
  - Three independent mechanisms; H1 case caught by at least one.

- **Meta-recursion residual honestly acknowledged:** the 5 meta-categories cannot be proved complete. Implicit multi-aspect framings without explicit conjunctions (e.g., a user who writes "test X" but implicitly means "test X AND observe Y") may still slip through both the meta-categories AND the fail-safe. The fail-safe operates on structural triggers, not on full semantic understanding.

- **Branch-experiment evaluation gate** per LOOP_DIAGNOSE Step 5 guardrail: create parallel `MVL+/SKILL.md` variant; run 5 NEW MVL+ inquiries through both versions; measure whether the audited version catches load-bearing-phrase drops in ≥3 of 5 chains where input contains multi-part framing. Pass → promote to permanent edit. Fail → revert + diagnose why audit didn't help.

- **Meta-test:** this inquiry's own `_branch.md` Question field uses the proposed 5 meta-categories explicitly. The framing of this inquiry is therefore evidence that the methodology produces a more complete capture than a vague-instruction-driven one — though the meta-test is N=1 and confirmatory rather than refutational.

## Finding

### Surround context

In LOOP_DIAGNOSE finding (14:30 inquiry), H1 was diagnosed as the primary failure surface for the enumeration-frame-error correction chain: at `_branch.md` creation, the user's load-bearing phrase "accumulation of other disciplines and finding" was dropped during transcription; only "discriminate /explore from /surfacing" survived. The transcription compressed two observation targets joined by "and" into one. MC2 in that finding proposed a transcription-audit step as a branch experiment.

The user then asked, in this inquiry's request: apply your methodology — decompose the responsible instruction into meta-categories with full coverage; verify the failure case is covered by at least one category; warn explicitly about meta-recursion (if the enumeration misses a category, the LLM will silently skip it).

This finding is the operationalization of MC2 from LOOP_DIAGNOSE, structured per the user's methodology.

### Section 1 — The paste-ready edit

The full replacement for Step 3 of "If NEW (input is a question or description)" in `cognitive_harness/MVL+/SKILL.md`:

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
     user's input joined targets with "and" / "both X and Y" / "in
     addition to" / "as well as" / "plus", PRESERVE ALL of them as
     separate items here — do not compress into one clause.
   - **Deliverable shape** — what form the answer takes (decision with
     reasoning / list with categorization / design with components and
     trade-offs / strategy with phases / etc.).

   Then state the question, capturing all five aspects above. The
   sentence may be longer than one sentence if needed to preserve
   coverage; conciseness serves clarity, not the other way around.

   ## Goal

   What would a good answer look like, covering:

   - **Criterion** — what qualities make an answer "good" (precision,
     completeness, actionability, etc.).
   - **Use case** — what the user will do with the answer.
   - **Desired outcome** — what state the user wants to reach.
   - **What would fail** — what kind of answer would technically
     address the question but miss the goal (negative spec).

   ## Source Input (raw user request — preserved verbatim for transcription-audit)

   Preserved verbatim so downstream disciplines can audit transcription
   fidelity at any stage. If the agent later notices a load-bearing
   phrase absent from Question or Goal, this section is the
   authoritative source.

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

3.5. **Transcription-audit fail-safe (run after `_branch.md` is written):**

   1. Re-read the raw user input (preserved verbatim in `## Source Input`).
   2. Scan for clause-joiners and multi-clause patterns:
      - " and " / " AND " / "both X and Y" / "in addition to" / "as well
        as" / "plus" — at the clause level (not phrase level).
      - Comma-separated noun phrases that carry distinct semantic load
        (e.g., "A, B, and C" where each is a separate target).
      - Multi-sentence framings where each sentence introduces a new aspect.
   3. For each multi-clause pattern found, verify each clause's semantic
      content appears in Question or Goal. (Source Input always covers
      verbatim; the check is whether Question + Goal also reflect the
      clause's semantic content beyond verbatim preservation.)
   4. If a clause's semantic content does NOT appear in Question or Goal,
      the transcription dropped a load-bearing phrase. Expand Question or
      Goal to incorporate it before proceeding to Exploration.

   The fail-safe operates on STRUCTURE (conjunctions, clauses, sentences)
   not CONTENT — it catches dropped clauses regardless of which subject
   matter they're about. This is intentional: the meta-category
   enumeration in the Question field cannot be proved complete; the
   structural fail-safe is the backstop.
```

### Section 2 — Coverage analysis

| Failure case | Caught by | Mechanism |
|---|---|---|
| **H1 (dropped conjunction-joined observation target)** | Observation Targets meta-category + Step 3.5 fail-safe | Meta-category names H1's "and" pattern in bullet text; fail-safe scans raw input for conjunctions and verifies each clause survives |
| Loop-level vs discipline-level conflation | Level meta-category | Examples include loop / discipline distinction; explicit "preserve user's level distinction" instruction |
| Dropped negative constraint ("not X") | Step 3.5 + existing Scope Check | Fail-safe catches conjunction-joined "not"; Scope Check catches explicit exclusions |
| Dropped time/phase constraint | Step 3.5 | If joined to other clauses by conjunction |
| Multi-sentence framing where each sentence introduces a new aspect | Step 3.5 explicitly | Scan multi-sentence framings rule |
| Dropped deliverable shape | Deliverable Shape meta-category | Explicit category |

**Cases NOT necessarily caught** (acknowledged):

| Failure case | Why not caught | Acknowledged via |
|---|---|---|
| Implicit multi-aspect framing without explicit conjunction | Fail-safe operates on structural triggers; no conjunction = no trigger | Meta-recursion residual acknowledgment (Section 4) |
| Aspect axis not in 5 meta-categories (e.g., ethical concern, audience, time-horizon) | Enumeration is finite | Same acknowledgment + fail-safe catches IF in conjunction-joined clause |

### Section 3 — Branch-experiment evaluation gate

Per LOOP_DIAGNOSE Step 5 guardrail: "Do not propose broad fundamentals rewrites from one weak correction chain." Therefore the proposed edit is a **branch experiment**, not a direct permanent edit.

**Setup:**
1. Create a parallel version of `cognitive_harness/MVL+/SKILL.md` (e.g., `MVL+-test/SKILL.md` or a feature branch) with the proposed Step 3 + Step 3.5.
2. Keep the current `cognitive_harness/MVL+/SKILL.md` unchanged.

**Evaluation:**
1. Over the next 5 NEW MVL+ inquiries with multi-part user framing (raw input containing conjunctions, multi-clause structures, or multi-sentence framings), run each through both spec versions.
2. For each chain, observe whether the audited version (with Step 3.5 fail-safe) catches load-bearing-phrase drops that the current version would have missed.

**Pass threshold:** ≥3 of 5 chains where Step 3.5 catches a drop the current spec would have missed → promote to permanent edit.

**Fail threshold:** <3 of 5 catches → revert to current spec; analyze why the audit step didn't help (was the fail-safe too narrow? did the meta-category enumeration miss a relevant axis? was the user-input pattern not conjunction-marked?).

**Telemetry per chain:**
- Raw user input
- Whether the audited version flagged a transcription concern
- Whether the current version's `_branch.md` dropped any load-bearing phrase (judged by reading raw input + audited `_branch.md`)
- The agent's audit decision (if any) and rationale

### Section 4 — Meta-recursion residual (honest limitation)

The 5 meta-categories (Subject / Action / Level / Observation Targets / Deliverable Shape) are an enumeration of question-content axes the agent should check. By the user's own methodology — "if we make it explicit but miss a component, LLM will skip that missing component" — this enumeration cannot be proved complete. New question-content axes may emerge in future inquiries (e.g., ethical concerns, audience-specific constraints, time-horizon constraints, regulatory constraints) that the 5 categories don't name.

This is why the Step 3.5 structural fail-safe is load-bearing: it operates on input STRUCTURE (conjunctions, clauses, sentences), not on whether the agent knows the relevant content axes. The fail-safe catches dropped clauses regardless of subject matter — closing the loop on the meta-recursion risk to the extent it's automatable.

The fail-safe is not perfect either: **implicit multi-aspect framings without explicit conjunctions** can still slip through. Example: a user who writes "I want to test X" but who implicitly meant "test X AND observe Y" — the fail-safe sees no conjunction, finds no trigger, doesn't fire. The honest residual is acknowledged here rather than disguised by an enumeration that pretends to be complete.

**Closing the residual** would require user-interactive verification ("does this Question capture everything you meant?") — which adds a runner-interaction step out of scope for this edit. If after the 5-chain branch experiment the structural fail-safe shows insufficient catch rate, user-interactive verification could be revisited as MC4.

### Section 5 — Meta-test on this inquiry's own _branch.md

This inquiry applied the proposed methodology to its OWN `_branch.md` as a meta-test:
- Question field uses the 5 meta-categories explicitly
- Goal field uses 4 sub-prompts (Criterion / Use Case / Desired Outcome / What Would Fail)
- Source Input section preserves the user's raw request verbatim

The framing of this inquiry is therefore evidence (N=1) that the methodology produces a more structurally complete capture than a vague-instruction-driven one. This is confirmatory rather than refutational — the user's correction in the LOOP_DIAGNOSE chain triggered the methodology; using it on the methodology's own design inquiry doesn't independently test it. The 5-chain branch experiment (Section 3) provides the actual evaluation.

## Next Actions

### MUST

- **What:** Adopt the edit as a branch experiment per Section 3's setup.
  - **Who:** The user.
  - **Gate:** Observable — parallel `MVL+/SKILL.md` variant created.
  - **Why:** The branch experiment is the path to evaluating whether the proposed edit catches the H1 pattern in practice.

- **What:** Run 5 NEW MVL+ inquiries with multi-part user framing through both spec versions; collect telemetry per Section 3.
  - **Who:** The user.
  - **Gate:** Observable — 5 chains complete; telemetry recorded.
  - **Why:** This is the evaluation gate. Without these chains, the edit's effectiveness is unknown.

### COULD

- **What:** Apply the same methodology to other potentially-vague instructions in MVL+ SKILL.md (Goal field as-is got the lighter 4-sub-prompt treatment; other field instructions in other Step sections might also benefit).
  - **Who:** Future inquiry.
  - **Gate:** Condition-bound — only if the 5-chain branch experiment shows the methodology helps.
  - **Why:** Generalizes the corrective beyond the Question field.
  - **Depends-on:** MUST item "Run 5 NEW chains."

- **What:** Add user-interactive verification (MC4) as a further fail-safe if structural fail-safe shows insufficient catch rate.
  - **Who:** Future inquiry.
  - **Gate:** Condition-bound — only if structural-only fail-safe achieves <3 of 5 catches.
  - **Why:** Closes the meta-recursion residual at cost of runner-interaction overhead.
  - **Depends-on:** MUST item "Run 5 NEW chains" + interpretation.

### DEFERRED

- **What:** Apply the user's methodology to other LLM-instruction-heavy artifacts in the project (other SKILL.md files, the protocols folder).
  - **Gate:** Condition-bound — if the MVL+ branch experiment demonstrates the methodology's robust applicability.
  - **Why:** The methodology is reusable; one successful application is not proof of general applicability.

## Reasoning

### Why 5 meta-categories rather than 4 or 6

5 (Subject / Action / Level / Observation Targets / Deliverable Shape) is the minimum-coverage-maximum-distinctness count tested across 5 candidate enumerations (Candidates A-E in exploration). 4 collapses Subject+Action and Level+Deliverable, losing distinctness needed to catch loop-vs-discipline conflation. 6 adds Constraints which overlaps existing Scope Check section (redundancy). 5 is the Pareto point.

### Why the structural fail-safe (Step 3.5) is load-bearing

The user's methodology warning is meta-recursive: "if we make it explicit but miss a component, LLM will skip that missing component." Applied to my own design: my 5 meta-categories might miss something. If they do, the LLM will silently skip it — same failure mode under different surface.

The structural fail-safe operates on input STRUCTURE (conjunctions, clause-joiners, multi-clause commas, multi-sentence framings), not on content axes. It catches dropped clauses regardless of subject matter. This is the mechanism that doesn't depend on enumeration completeness — and it's the closest available approximation to closing the meta-recursion residual.

### Why Source Input preservation in `_branch.md` (not just finding.md)

Currently the user's raw input is preserved in `finding.md` via CONCLUDE — late in the inquiry lifecycle. Downstream disciplines (E / S / D / I / C) read `_branch.md`'s Question + Goal, which are transcribed. The transcription is the failure surface.

Adding Source Input section to `_branch.md` makes raw user input directly readable by every downstream stage. They can audit at any point. This eliminates the transcription failure surface for downstream consumers — not just providing a backstop at conclusion time.

### Why branch experiment, not direct edit

Per LOOP_DIAGNOSE Step 5 guardrail. One correction chain (the H1 case in inquiry 11-35) is thin evidence for permanent source edits to a framework artifact that affects all future MVL+ inquiries. The branch-experiment gate (≥3 of 5 catches) provides the evidence threshold required for a permanent change.

### Why N=5 (not N=3 or N=10)

5 is the lower bound recommended by LOOP_DIAGNOSE Step 5's monitoring-question proposal (5-10 chains). 3 would be too few for statistical signal. 10 would be more robust but slower-to-evaluate. 5 with ≥3-of-5 threshold balances evaluation speed against confidence.

### Why graceful degradation matters

Without graceful degradation, the meta-categories would impose overhead on every `_branch.md` creation, including simple inputs (single subject + single action + single target). The graceful-degradation policy (5 categories are a CHECK, not required sub-fields) preserves the methodology's value for complex inputs while not bloating simple ones. The fail-safe (Step 3.5) is cheap for simple inputs because it scans for conjunctions — finding none = no further work.

## Open Questions

### Monitoring

- **Does the 5-chain branch experiment confirm ≥3 of 5 catches?** Direct evaluation gate.
- **Does graceful degradation work as intended (simple inputs don't pay overhead)?** Observable from inquiry telemetry.
- **Does the Source Input section in `_branch.md` actually get consulted by downstream disciplines?** Observable from discipline-output content (do later disciplines cite Source Input?).

### Blocked

- The methodology's general applicability to other LLM-instruction artifacts cannot be assessed from this one chain.
- Whether user-interactive verification (MC4) is needed is blocked on the 5-chain branch experiment.

### Research Frontiers

- **General pattern: how should LLM-driven artifact-creation steps balance enumeration (for guided thinking) against structural fail-safes (for robustness)?** This inquiry instantiates the pattern for one case; the general design principles could become a reusable approach.
- **General pattern: how should orchestration-level instructions (runner specs) audit transcription fidelity?** Source Input preservation is one approach; user-interactive verification is another; diff-based structural fail-safes are a third. The trade-off space is partially mapped here.

### Refinement Triggers

- **Promote edit to permanent** if 5-chain branch experiment shows ≥3 of 5 catches.
- **Revert and re-design** if catches are <3 of 5 — analyze whether fail-safe was too narrow, meta-categories missed an axis, or user-input patterns weren't conjunction-marked.
- **Add user-interactive verification (MC4)** if structural fail-safe catches well but residual implicit-multi-aspect framings remain a problem.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
User's phrase "accumulation of other disciplines and finding" was DROPPED during transcription; only "discriminate /explore from /surfacing" survived.

why? can u inspect branch creation and find the error part and maybe we can enhance it?

and i have this methdology which we used many times, sometimes we can use a sentence/concept in our prompt but this prompt sth doesnt produce same coverage of results each run. and this causes fluctuations in results quality. when this happens my appraoch is to understand the concept in terms of what it consists of and what are components and redefine that part of the prompt with more verbose version of that sentence so that it actually names these sub concepts components,,, this way LLM will see all coverage words and it is less likely to skip one aspect or layer because it is explicit. but key point is this decomposed version must be meta and have full coverage, otherwise if we make it explicit but miss a component, LLM will skip that missing componenet

lets try to approach this like this. first lets find the place whcih place is responsible in MVL+ md file for branch file creation and then try to decompose that part into meta categories with coverage and make sure experienced error is covered by one at least
```

</details>
