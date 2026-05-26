---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Structural Decomposition of MVL+ Branch Creation's Question Field (re-run via Skill tool)

## Question

The user asked, after the LOOP_DIAGNOSE finding (`devdocs/inquiries/2026-05-22_14-30__loop_diagnose__enumeration_frame_error_in_test_design/finding.md`) identified `_branch.md` transcription as the primary failure surface for the enumeration-frame-error correction chain, to apply a specific methodology: take the vague instruction in `cognitive_harness/MVL+/SKILL.md` Step 3 of "If NEW," decompose it into explicit meta-categories with full coverage, verify the experienced failure case (H1 — dropped phrase "accumulation of other disciplines and finding" joined by "and") is covered by at least one named category, and add a fail-safe that catches whatever the enumeration might miss (because per the user's methodology warning, "if we make it explicit but miss a component, LLM will skip that missing component").

**The deliverable question:** how should the Question field instruction in `cognitive_harness/MVL+/SKILL.md` Step 3 of "If NEW" be restructured into explicit meta-categories + a structural fail-safe + a Source Input preservation section, such that the H1 load-bearing-phrase-loss failure mode is structurally prevented at the transcription step, while honestly acknowledging the meta-recursion residual (the enumeration cannot be proved complete)?

(This finding is the output of a RE-RUN of the inquiry. The prior memory-only run is preserved at `_memory_run_preserved/` in this folder. The re-run was triggered when the user asked "u ran the full loop ??" and I admitted that the prior run had been executed from working memory rather than via Skill-tool invocations per the runner's "never execute a discipline from memory alone" rule. This re-run honors that rule.)

## Goal

A paste-ready edit to `cognitive_harness/MVL+/SKILL.md` Step 3 deployed as a branch experiment per LOOP_DIAGNOSE Step 5 guardrail (one-chain evidence is thin for permanent source edits). The user pastes the edit into a parallel `MVL+/SKILL.md` variant, runs 5 new MVL+ inquiries through both versions, and measures whether the audited version catches load-bearing-phrase drops in ≥3 of 5 chains where multi-part user framing is present.

## Finding Summary

- **Deliverable:** paste-ready replacement for Step 3 (Question + Goal fields) + new Source Input section + new Step 3.5 fail-safe + branch-experiment evaluation gate + honest acknowledgment of three named residuals (mechanism-vs-agent redundancy; future-maintainer paraphrase risk; self-administered audit bias).

- **The 5 meta-categories for the Question field** (acting as a CHECK, not required sub-fields; graceful degradation preserves one-sentence form for simple inputs):
  - **Subject** — what is being investigated
  - **Action** — what cognitive operation (compare / decide / diagnose / design / understand / synthesize / strategize)
  - **Level** — at what granularity (component / system / loop / discipline / runner / protocol / cross-cutting) — explicit "preserve user's level distinction" instruction catches H1's loop-vs-discipline-level axis
  - **Observation Targets** — uses **MC2's verbatim trigger language**: "If the user's input contains clause-pairs joined by 'and' / 'AND' / 'BOTH ... AND' (or the logical extensions 'in addition to' / 'as well as' / 'plus'), PRESERVE ALL clauses as separate observation-target items here — do not compress into one clause." This catches H1's dropped-phrase axis.
  - **Deliverable Shape** — what form the answer takes

- **The Goal field gets a lightweight 4-sub-prompt decomposition** (Criterion / Use Case / Desired Outcome / What Would Fail). "What would fail" is the load-bearing addition — a negative spec that catches mis-framings before they propagate.

- **A new Source Input section** in `_branch.md` (placed between Goal and Scope Check) preserves the user's raw request verbatim. This eliminates the transcription-loss failure surface for downstream disciplines (E / S / D / I / C) — they can audit raw input at any stage.

- **Step 3.5 fail-safe (trigger-then-verify):**
  1. **Structural trigger** — scan raw input for MC2's verbatim clause-joiners ("and" / "AND" / "BOTH ... AND") + logical extensions ("in addition to" / "as well as" / "plus") + multi-clause commas + multi-sentence framings. Operates on STRUCTURE, not CONTENT — fires regardless of subject matter.
  2. **Semantic verification** — at trigger-fire, verify each clause's semantic content appears in Question or Goal. If missing, expand before proceeding to Exploration.
  
  The trigger-then-verify split is what makes the fail-safe resist the meta-recursion trap: the structural trigger doesn't depend on knowing which content axes matter.

- **Triple-mechanism H1 redundancy** (at three different timings):
  1. Question's Observation Targets bullet fires at _branch.md WRITE time
  2. Step 3.5 fail-safe fires at POST-WRITE audit time
  3. Source Input section enables audit at DOWNSTREAM-DISCIPLINE-READ time

- **Three honest residuals** (named explicitly per Critique's REFINE outputs):
  1. **Mechanism-redundancy not agent-redundancy.** All three covering mechanisms operate via the same agent (no human-in-loop). Total agent non-compliance defeats all three. The redundancy mitigates against specific failure modes (forgetting to list multiple targets at write-time / missing the audit step / failing to consult Source Input downstream) — not against total non-compliance.
  2. **Anchor-preservation depends on future maintainers.** MC2's verbatim trigger language is preserved via explicit citation to the LOOP_DIAGNOSE source. Future maintainers who edit `MVL+/SKILL.md` without consulting that citation may re-paraphrase, undoing the authorship-bias mitigation.
  3. **Self-administered audit bias.** The audit step is executed by the same agent that wrote `_branch.md`. Bias residual exists on the semantic verification step (where agent decides "did I capture this clause's content?"). FS4 (user-interactive verification) is the closer for this residual; FS4 is currently deferred unless the 5-chain branch experiment shows insufficient catch rate.

- **Meta-recursion residual** (the user's own warning applied to my own design): the 5 meta-categories cannot be proved complete. Implicit multi-aspect framings without explicit conjunctions can still slip through both the meta-categories AND the structural fail-safe. The fail-safe operates on STRUCTURAL TRIGGERS, not full semantic understanding. The structural fail-safe is load-bearing precisely BECAUSE the enumeration cannot guarantee completeness.

- **Branch-experiment evaluation gate** per LOOP_DIAGNOSE Step 5 + MC2 verbatim threshold:
  - Setup: parallel `MVL+/SKILL.md` variant with the proposed Step 3 + Step 3.5
  - 5 NEW inquiries with multi-part framing
  - **≥3 of 5 catches per MC2 verbatim** → promote to permanent edit
  - <3 of 5 → revert + diagnose (was fail-safe too narrow? did meta-categories miss an axis? was input not conjunction-marked?)

- **Scope: ROOT inquiry creation only.** The edit refines `cognitive_harness/MVL+/SKILL.md` Step 3 of "If NEW." It does NOT modify `cognitive_harness/protocols/branch_inquiry.md`, which governs BRANCH inquiry creation. Per LOOP_DIAGNOSE MC2: "Optionally `cognitive_harness/protocols/branch_inquiry.md` for branch-new inquiries" — extending to BRANCH is a natural follow-up COULD if this experiment passes its gate.

- **Authorship-bias mitigation:** the Observation Targets bullet (in the Question-field replacement) and the FS1 trigger list (in Step 3.5) use MC2's **verbatim trigger language** ("clause-pairs joined by 'and' / 'AND' / 'BOTH ... AND'"), with explicit citation to the LOOP_DIAGNOSE source file. The language is anchored externally rather than to my free-form paraphrase.

## Finding

### Surround context

In the LOOP_DIAGNOSE finding (`devdocs/inquiries/2026-05-22_14-30__loop_diagnose__enumeration_frame_error_in_test_design/finding.md`), H1 was diagnosed as the primary failure surface for the enumeration-frame-error correction chain: at `_branch.md` creation, the user's load-bearing phrase "accumulation of other disciplines and finding" was dropped during transcription; only "discriminate /explore from /surfacing" survived. The transcription compressed two observation targets joined by "and" into one. MC2 in that finding proposed a transcription-audit step as a branch experiment.

The user then asked, in this inquiry's request: apply the methodology — decompose the responsible instruction into meta-categories with full coverage; verify the failure case is covered by at least one category; warn explicitly about meta-recursion (if the enumeration misses a category, the LLM will silently skip it). This finding operationalizes that methodology.

The prior memory-only run of this inquiry (now at `_memory_run_preserved/`) was structurally similar but executed disciplines from working memory rather than via Skill-tool invocations, violating the runner's "never execute a discipline from memory alone" rule. This finding is the output of the re-run honoring that rule.

### Section 1 — The paste-ready edit

Replacement for Step 3 of "If NEW (input is a question or description)" in `cognitive_harness/MVL+/SKILL.md`, plus a new Step 3.5:

```markdown
3. For ROOT NEW only, write `[inquiry_path]/_branch.md`:

   ```markdown
   # Branch: [name]

   ## Question

   State the question covering all five meta-aspects below. The five
   categories are a CHECK on what a well-framed question contains, not
   required sub-fields to populate. If the user's input maps cleanly to
   a single sentence covering all five, write that one sentence. If the
   input has multiple clauses or multi-part framing, list the relevant
   aspects explicitly to ensure each is preserved.

   - **Subject** — what is being investigated.
   - **Action** — what cognitive operation (compare / decide / diagnose
     / design / understand / synthesize / strategize / etc.).
   - **Level** — at what granularity (component / system / loop /
     discipline / runner / protocol / cross-cutting). Preserve the
     user's level distinction (e.g., loop-level vs discipline-level)
     when present.
   - **Observation targets** — what specific aspects must be observed
     or produced. **If MULTIPLE, list each as a separate item.** If the
     user's input contains clause-pairs joined by "and" / "AND" /
     "BOTH ... AND" (or the logical extensions "in addition to" /
     "as well as" / "plus"), PRESERVE ALL clauses as separate
     observation-target items here — do not compress into one clause.
     (Verbatim trigger pattern from LOOP_DIAGNOSE finding MC2 at
     `devdocs/inquiries/2026-05-22_14-30__loop_diagnose__enumeration_frame_error_in_test_design/finding.md` —
     the H1 case this category exists to prevent.)
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
   2. Scan for clause-joiners using LOOP_DIAGNOSE finding MC2's trigger pattern:
      - **MC2 verbatim:** clause-pairs joined by "and" / "AND" /
        "BOTH ... AND".
      - **Logical extensions:** "in addition to" / "as well as" / "plus";
        multi-clause commas where each clause carries distinct semantic
        load; multi-sentence framings where each sentence introduces a
        new aspect.
   3. For each clause-joiner found, verify each clause's semantic content
      appears in Question or Goal. (Source Input covers verbatim;
      Question + Goal are what downstream disciplines consume as the
      working framing, so the check is whether semantic content survived
      transcription beyond the Source Input preservation.)
   4. If a clause's content is missing from Question + Goal, the
      transcription dropped a load-bearing phrase. Expand Question or
      Goal to incorporate it before proceeding to Exploration.

   The fail-safe is **trigger-then-verify**:
   - **Structural trigger** (Step 2): operates on input STRUCTURE
     (conjunctions, clauses, sentences) — fires regardless of subject
     matter.
   - **Semantic verification** (Step 3): at trigger-fire, check whether
     each clause's content appears in Question or Goal.

   The split is intentional: the structural trigger doesn't depend on
   knowing which content axes matter (which is the meta-recursion trap
   from the user's methodology — "if we make it explicit but miss a
   component, LLM will skip that missing component"). The structural
   fail-safe is the backstop precisely because the 5-meta-category
   enumeration above cannot be proved complete.
```

### Section 2 — Coverage analysis with refinement note

#### Cases caught

| Failure case | Caught by | How |
|---|---|---|
| **H1 — dropped conjunction-joined observation target** ("accumulation of other disciplines and finding") | Triple redundancy: Question Observation Targets bullet (MC2 verbatim) + Step 3.5 fail-safe + Source Input | At write-time, bullet's "PRESERVE ALL clauses" fires on "and"; at post-write audit, Step 3.5 trigger fires structurally; downstream disciplines have raw input available for audit |
| Loop-vs-discipline-level conflation | Question Level bullet | "Preserve the user's level distinction (e.g., loop-level vs discipline-level) when present" |
| Dropped negative constraint joined by conjunction | Step 3.5 | "and" / "not" trigger fires; semantic verify catches missing negation |
| Dropped time/phase constraint joined by conjunction | Step 3.5 | Same |
| Multi-sentence framing where each sentence introduces new aspect | Step 3.5 | "multi-sentence framings" in extension list |
| Dropped deliverable shape | Question Deliverable Shape bullet | Explicit category |
| Comma-separated load-bearing targets ("A, B, and C") | Step 3.5 | "multi-clause commas" in extension list |

#### Cases NOT necessarily caught

| Failure case | Why not caught |
|---|---|
| Implicit multi-aspect framing without explicit conjunctions | Step 3.5 only triggers on explicit conjunctions; no conjunction = no trigger. Question bullets prompt structured thinking but rely on agent recognizing implicit multi-aspect. Source Input enables manual audit but doesn't prompt the agent. |
| Aspect axis not in the 5 meta-categories | The 5-category enumeration is finite. Step 3.5 catches IF the missing axis is in a conjunction-joined clause; otherwise relies on agent's general framing skill. |
| Paraphrase drift in future edits | The verbatim citation creates an anchor; doesn't prevent future edits from re-paraphrasing if maintainers don't consult the source citation. |

#### Refinement: mechanism-vs-agent redundancy (per Critique Prosecution 1)

The "triple redundancy" of H1 coverage is **mechanism-redundancy across timing-points**, NOT **agent-redundancy**. All three covering mechanisms execute via the same agent (no human-in-loop):
- Mechanism 1 fires at _branch.md WRITE time
- Mechanism 2 fires at POST-WRITE audit time
- Mechanism 3 enables DOWNSTREAM-DISCIPLINE-READ time audit

The three mechanisms mitigate against specific failure modes (forgetting to list multiple targets at write-time / missing the audit step / failing to consult Source Input downstream). Total agent non-compliance defeats all three. This is acceptable residual since it would defeat any agent-executed check; the design improves robustness against forgetting + drifting + skipping, but not against total ignore.

### Section 3 — Branch-experiment evaluation gate

Per LOOP_DIAGNOSE Step 5 guardrail at `cognitive_harness/protocols/loop_diagnose.md`: do not propose broad fundamentals rewrites from one weak correction chain. Therefore the proposed edit is a **branch experiment**, not a direct permanent edit.

**Setup:**
1. Create a parallel version of `cognitive_harness/MVL+/SKILL.md` (e.g., `MVL+-test/SKILL.md` or a feature branch in version control) containing the proposed Step 3 + Step 3.5.
2. Keep the current `cognitive_harness/MVL+/SKILL.md` unchanged.

**Evaluation:**
1. Over the next 5 NEW MVL+ inquiries with multi-part user framing (raw input containing conjunctions, multi-clause structures, or multi-sentence framings), run each through both spec versions.
2. For each chain, observe whether the audited version (with Step 3.5 fail-safe) catches load-bearing-phrase drops that the current version would have missed.

**Pass threshold (per LOOP_DIAGNOSE MC2 verbatim):** **≥3 of 5 chains** where Step 3.5 catches a drop the current spec would have missed → promote to permanent edit.

**Fail threshold:** <3 of 5 catches → revert to current spec; analyze why:
- Was the fail-safe trigger too narrow (missed clause-joiners)?
- Did the meta-category enumeration miss a relevant axis?
- Was the user input pattern not conjunction-marked (implicit multi-aspect)?

**Telemetry per chain:**
- Raw user input
- Whether the audited version flagged a transcription concern
- Whether the current version's `_branch.md` dropped any load-bearing phrase (judged by reading raw input + audited `_branch.md`)
- The agent's audit decision (if any) and rationale

#### Refinement: self-administered audit bias (per Critique Prosecution 3)

The audit step (Step 3.5) is executed by the same agent that wrote `_branch.md`. Bias residual exists on the semantic verification step where agent decides "did I capture this clause's content?" A truly biased agent could either underflag (rationalize that compressed clause "is captured" when it isn't) or overflag (be defensive). The structural trigger is bias-immune (mechanical scan); the semantic check has specific content checks but isn't bias-immune.

**FS4 (user-interactive verification) is the closer** for this residual: ask the user "does this Question + Goal capture everything you meant by [X, Y, Z phrases from your input]?" before proceeding. FS4 is currently deferred unless the 5-chain branch experiment shows insufficient catch rate due to self-administered bias.

**If fail-threshold reached due to implicit multi-aspect inputs (no conjunction-marker):** consider adopting FS4 as a follow-up — the structural fail-safe alone is insufficient when users don't conjunction-mark their multi-aspect framings.

### Section 4 — Caveats and acknowledged residuals

**Scope:** ROOT inquiry creation only. The edit refines `cognitive_harness/MVL+/SKILL.md` Step 3 of "If NEW (input is a question or description)." It does NOT modify `cognitive_harness/protocols/branch_inquiry.md`, which governs BRANCH inquiry creation. Per LOOP_DIAGNOSE MC2: "Optionally `cognitive_harness/protocols/branch_inquiry.md` for branch-new inquiries" — extending to BRANCH is a natural follow-up COULD if this experiment passes its gate.

**Meta-recursion residual.** The 5 meta-categories (Subject / Action / Level / Observation Targets / Deliverable Shape) are an enumeration of question-content axes the agent should check. By the user's own methodology — "if we make it explicit but miss a component, LLM will skip that missing component" — this enumeration cannot be proved complete. New axes may emerge (ethical concerns, audience-specific constraints, time-horizon constraints, regulatory constraints) that the 5 categories don't name.

This is why the Step 3.5 structural fail-safe is **load-bearing**: it operates on input STRUCTURE, not on whether the agent knows the relevant content axes. The fail-safe catches dropped clauses regardless of subject matter — closing the meta-recursion residual to the extent it's automatable.

**The fail-safe is not perfect either.** Implicit multi-aspect framings without explicit conjunctions can still slip through. Example: a user who writes "I want to test X" but who implicitly meant "test X AND observe Y" — the fail-safe sees no conjunction, finds no trigger, doesn't fire. The honest residual is acknowledged here rather than disguised by an enumeration that pretends to be complete.

**FS4 deferral.** Closing the implicit-multi-aspect residual would require user-interactive verification ("does this Question capture everything you meant?") — which adds a runner-interaction step out of scope for this edit. The runner currently executes without pausing for user confirmation. If the 5-chain branch experiment shows the structural fail-safe is insufficient, FS4 can be revisited as a separate maintenance candidate.

**Authorship-bias mitigation.** The Observation Targets bullet and the Step 3.5 trigger list use MC2's verbatim trigger language ("clause-pairs joined by 'and' / 'AND' / 'BOTH ... AND'") rather than my paraphrase. MC2 was authored in the LOOP_DIAGNOSE finding, which itself was grounded in the user's explicit correction — externally validated. Using MC2 verbatim anchors the design to an external source rather than to my free-form proposal.

#### Refinement: anchor preservation depends on future maintainer consultation (per Critique Prosecution 2)

MC2's verbatim language is preserved via explicit citation to the LOOP_DIAGNOSE source file (`devdocs/inquiries/2026-05-22_14-30__loop_diagnose__enumeration_frame_error_in_test_design/finding.md`). This citation creates an anchor — future maintainers who re-paraphrase would either:
- Notice the source citation and preserve verbatim
- Drop the citation but still use the language (intermediate drift)
- Re-paraphrase entirely (worst case — undetected drift)

The verbatim+citation pattern resists drift but doesn't prevent it. **Honest residual: anchor preservation depends on future maintainers consulting the source citation.** If a future edit blindly re-paraphrases the trigger language without consulting MC2, the authorship-bias mitigation is undone.

Mitigation: the citation makes the verbatim requirement self-documenting. A future maintainer reading the SKILL.md would see "(Verbatim trigger pattern from LOOP_DIAGNOSE finding MC2 at [path])" and have explicit reason to consult before changing.

## Next Actions

### MUST

- **What:** Adopt the edit as a branch experiment per Section 3's setup.
  - **Who:** The user.
  - **Gate:** Observable — parallel `MVL+/SKILL.md` variant created.
  - **Why:** The branch experiment is the path to evaluating whether the proposed edit catches the H1 pattern in practice. Per LOOP_DIAGNOSE Step 5 guardrail, this is the appropriate evidence-gathering step before promotion to permanent edit.

- **What:** Run 5 NEW MVL+ inquiries with multi-part user framing through both spec versions; collect telemetry per Section 3.
  - **Who:** The user.
  - **Gate:** Observable — 5 chains complete; telemetry recorded.
  - **Why:** This is the evaluation gate. Without these chains, the edit's effectiveness is unknown.

- **What:** Decide promotion or revert based on whether ≥3 of 5 chains showed the audited version catching drops the current spec missed.
  - **Who:** The user.
  - **Gate:** Observable — decision documented after 5 chains.
  - **Why:** The gate is binary at the threshold; the decision avoids drift-without-data.

### COULD

- **What:** Apply the same methodology to `cognitive_harness/protocols/branch_inquiry.md` (BRANCH inquiry creation) — extending the scope per MC2's "optionally" mention.
  - **Who:** Future inquiry.
  - **Gate:** Condition-bound — only if the 5-chain branch experiment for ROOT shows the methodology helps.
  - **Why:** BRANCH inquiry creation has the same transcription failure surface as ROOT; the same fix applies.
  - **Depends-on:** MUST item "Run 5 NEW chains." This COULD is GATED.

- **What:** Add user-interactive verification (FS4) as a further fail-safe if structural fail-safe shows insufficient catch rate due to implicit-multi-aspect inputs.
  - **Who:** Future inquiry.
  - **Gate:** Condition-bound — only if structural-only fail-safe achieves <3 of 5 catches OR if implicit-multi-aspect inputs slip through.
  - **Why:** Closes the implicit-multi-aspect residual at cost of runner-interaction overhead.
  - **Depends-on:** MUST item "Run 5 NEW chains." This COULD is GATED.

- **What:** Apply the user's methodology (decompose vague instructions into meta-categories + structural fail-safe + honest residual acknowledgment) to other LLM-instruction-heavy artifacts in the project (other SKILL.md files; the protocols folder).
  - **Who:** Future inquiry.
  - **Gate:** Condition-bound — if the MVL+ branch experiment demonstrates the methodology's robustness.
  - **Why:** The methodology is potentially reusable; one successful application is not proof of general applicability but is encouraging.
  - **Depends-on:** MUST item "Decide promotion or revert." This COULD is GATED.

### DEFERRED

- **What:** Re-evaluate the design if the branch experiment produces ambiguous results (some chains catch, some don't, no clear pattern).
  - **Gate:** Condition-bound — if 5-chain telemetry shows mixed results without diagnostic signal.
  - **Why if revived:** the design may have an unidentified scope-limit (some failure variants caught, others not); re-design with refined fail-safe trigger patterns.

- **What:** Promote LOOP_DIAGNOSE protocol from one-time-use to standard MVL+ hook (per LOOP_DIAGNOSE Step 6) after 5-10 successful diagnostic chains.
  - **Gate:** Condition-bound — after 5-10 LOOP_DIAGNOSE invocations demonstrate stable internal method.
  - **Why if revived:** the methodology of using LOOP_DIAGNOSE as a correction-chain protocol is itself a candidate for promotion; this finding is one instance.

## Reasoning

### Why 5 meta-categories rather than 4 or 6

5 (Subject / Action / Level / Observation Targets / Deliverable Shape) is the Pareto point between coverage breadth and bullet bloat. 4 collapses Subject+Action and Level+Deliverable, losing distinctness needed to catch the loop-vs-discipline-level conflation explicitly. 6 adds Constraints which overlaps existing Scope Check section (redundancy). 5 is the minimum-coverage-maximum-distinctness count tested across 5 candidate enumerations.

### Why the structural fail-safe is load-bearing

The user's methodology warning is meta-recursive: "if we make it explicit but miss a component, LLM will skip that missing component." Applied to my design: my 5 meta-categories might miss something. If they do, the LLM will silently skip it.

The structural fail-safe operates on input STRUCTURE (conjunctions, clauses, sentences), not on content axes. It catches dropped clauses regardless of subject matter. This mechanism doesn't depend on enumeration completeness — which is what makes it the load-bearing element.

The trigger-then-verify split makes this concrete: the trigger fires on conjunctions (structural); the verification checks if each clause's content appears (semantic but only after trigger fires).

### Why Source Input preservation in `_branch.md` (not just finding.md)

Currently the user's raw input is preserved in `finding.md` via CONCLUDE — at the END of the inquiry lifecycle. Downstream disciplines (E / S / D / I / C) read `_branch.md`'s Question + Goal, which are transcribed. The transcription is the failure surface.

Adding Source Input section to `_branch.md` makes raw user input directly readable by every downstream stage. They can audit at any point. This eliminates the transcription failure surface for downstream consumers — not just providing a backstop at conclusion time.

### Why MC2 verbatim language, not paraphrase

Authorship-bias mitigation. I (Claude) authored both prior runs in this inquiry chain (the failed 11-35 inquiry, the corrected 13-00 inquiry, the LOOP_DIAGNOSE 14-30 finding, and the prior memory-only run of this inquiry). My free-form re-derivation of trigger patterns risks re-introducing the same biases that produced the original H1 failure.

MC2's language ("clause-pairs joined by 'and' / 'AND' / 'BOTH ... AND'") was authored in the LOOP_DIAGNOSE finding, which itself was grounded in the user's explicit correction. Using MC2 verbatim anchors the design to an external (user-grounded) source rather than to my paraphrase. The verbatim citation makes this self-documenting for future maintainers.

### Why branch experiment, not direct edit

Per LOOP_DIAGNOSE Step 5 guardrail. One correction chain (the H1 case from inquiry 11-35) is thin evidence for permanent source edits to a framework artifact that affects all future MVL+ inquiries. The branch-experiment gate (≥3 of 5 catches) provides the evidence threshold required for a permanent change. ≥3/5 matches MC2's verbatim threshold from the LOOP_DIAGNOSE finding.

### Why 3 honest residuals named explicitly (per Critique REFINE outputs)

Critique's 3 standard prosecution probes each survived PARTIALLY:
1. "Triple redundancy illusory" → mechanism-redundancy not agent-redundancy
2. "MC2 verbatim is one-time" → anchor preservation depends on future maintainers
3. "Self-administered audit is gamed" → FS4 (user-interactive) is the closer; FS4 deferred

Each prosecution had a real point that wasn't fully defended. Honest acknowledgment converts the design from "looks bulletproof" to "robust with three named residuals." Methodological honesty preserved per LOOP_DIAGNOSE Step 5 spirit ("Do not claim exact root cause unless the artifacts isolate it" — applied here as "do not claim complete coverage unless the residuals are isolated").

### Why this finding is a re-run

The prior run of this inquiry (preserved at `_memory_run_preserved/`) executed the 5 disciplines from working memory rather than invoking the Skill tool per discipline. The /MVL+ runner's instructions explicitly prohibit this: "Never execute a discipline from memory alone." When the user asked "u ran the full loop ??" I admitted the violation and re-ran via proper Skill-tool invocations.

The substantive deliverable is similar between the two runs (same SDs; same paste-ready text shape), which is unsurprising since the protocols are stable enough to produce similar outputs from either source. The DIFFERENCE is protocol fidelity — this re-run honors the "never from memory alone" rule, and the user can verify that each discipline's spec was loaded via Skill tool at execution time. The memory-only run is preserved for evidence of the violation pattern and as a comparison artifact.

## Open Questions

### Monitoring

- **Does the 5-chain branch experiment confirm ≥3 of 5 catches?** Direct evaluation gate.
- **Does graceful degradation work as intended (simple inputs don't pay overhead)?** Observable from inquiry telemetry — do simple-input inquiries' `_branch.md` files use the one-sentence form, or do agents over-elaborate?
- **Does the Source Input section actually get consulted by downstream disciplines?** Observable from discipline-output content — do later disciplines cite Source Input when auditing?
- **Do implicit-multi-aspect inputs (no conjunctions) reach the audited spec, and does the audited spec catch them?** If many fail-cases involve implicit multi-aspect, FS4 becomes more pressing.

### Blocked

- The methodology's general applicability to other LLM-instruction artifacts cannot be assessed from this one inquiry.
- Whether FS4 (user-interactive verification) is needed is blocked on the 5-chain branch experiment's results.
- Promotion of LOOP_DIAGNOSE from protocol to standard hook (per LOOP_DIAGNOSE Step 6) requires 5-10 successful diagnostic chains; this is one chain.

### Research Frontiers

- **General pattern: how should LLM-driven artifact-creation steps balance enumeration (for guided thinking) against structural fail-safes (for robustness)?** This inquiry instantiates the pattern for one case; the general design principles could become a reusable approach if validated.
- **General pattern: how should orchestration-level instructions (runner specs) audit transcription fidelity?** Source Input preservation is one approach; user-interactive verification is another; diff-based structural fail-safes are a third. The trade-off space is partially mapped here but not exhaustively.

### Refinement Triggers

- **Promote edit to permanent** if 5-chain branch experiment shows ≥3 of 5 catches.
- **Revert and re-design** if catches are <3 of 5 — analyze whether fail-safe was too narrow, meta-categories missed an axis, or user-input patterns weren't conjunction-marked.
- **Add user-interactive verification (FS4)** if structural fail-safe catches well on conjunction-marked inputs but residual implicit-multi-aspect inputs remain a problem.
- **Extend to BRANCH inquiry creation** (modify `cognitive_harness/protocols/branch_inquiry.md`) if ROOT branch experiment passes its gate.
- **Re-examine MC2-verbatim citation effectiveness** if future maintainers re-paraphrase the trigger language despite the citation.

## Source Input

<details>
<summary>Raw user input that triggered this inquiry</summary>

```text
User's phrase "accumulation of other disciplines and finding" was DROPPED during transcription; only "discriminate /explore from /surfacing" survived.

why? can u inspect branch creation and find the error part and maybe we can enhance it?

and i have this methdology which we used many times, sometimes we can use a sentence/concept in our prompt but this prompt sth doesnt produce same coverage of results each run. and this causes fluctuations in results quality. when this happens my appraoch is to understand the concept in terms of what it consists of and what are components and redefine that part of the prompt with more verbose version of that sentence so that it actually names these sub concepts components,,, this way LLM will see all coverage words and it is less likely to skip one aspect or layer because it is explicit. but key point is this decomposed version must be meta and have full coverage, otherwise if we make it explicit but miss a component, LLM will skip that missing componenet

lets try to approach this like this. first lets find the place whcih place is responsible in MVL+ md file for branch file creation and then try to decompose that part into meta categories with coverage and make sure experienced error is covered by one at least
```

Subsequent exchanges that shaped this re-run:
- User: "u ran the full loop ??" (asked after I had executed disciplines from working memory)
- Claude: admitted protocol violation and offered to re-run with proper Skill-tool invocations
- User: "rerun"

This finding is the output of the re-run honoring the runner's "never execute a discipline from memory alone" rule.

</details>
