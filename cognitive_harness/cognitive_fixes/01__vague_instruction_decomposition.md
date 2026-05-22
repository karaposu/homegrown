# 01 — Vague Instruction Decomposition

A cognitive fix applied to the MVL+ runner's `_branch.md` Question and Goal field instructions. First instance of the `cognitive_fixes` folder pattern.

## 1. Trigger condition

LLM-driven instruction produces inconsistent coverage across runs: vague single-prompt instructions like `[the question, stated clearly in one sentence]` and `[what would a good answer look like? what would the user be able to DO with the answer?]` allow agent compression of multi-part user inputs into one summary, dropping load-bearing clauses.

**Diagnostic source:** LOOP_DIAGNOSE finding at `devdocs/inquiries/2026-05-22_14-30__loop_diagnose__enumeration_frame_error_in_test_design/finding.md`, Hypothesis H1 ("_branch.md transcription failure"). The observed failure: user's phrase "accumulation of other disciplines and finding" — joined to a prior clause by "and" — was dropped during transcription; only the first clause survived.

## 2. Affected artifact(s)

- `cognitive_harness/MVL+/SKILL.md` Step 3 of "If NEW" — lines 82-85 (Question + Goal field instructions in the _branch.md template); also new Step 3.5 inserted before original Step 4
- `cognitive_harness/MVL2+/SKILL.md` Step 3 of "If NEW" — same field instructions, +2 line offset

Original vague instructions (verbatim, pre-fix):

```
## Question
[the question, stated clearly in one sentence]
## Goal
[what would a good answer look like? what would the user be able to DO with the answer?]
```

## 3. Methodology applied

1. **Identify:** the two lines above; "stated clearly in one sentence" creates compression pressure with no enumerated coverage check.

2. **Decompose:** 5 meta-categories for Question (Subject / Action / Level / Observation Targets / Deliverable Shape) acting as a CHECK not required sub-fields; 4 sub-prompts for Goal (Criterion / Use Case / Desired Outcome / What Would Fail).

3. **Coverage check:** the H1 failure (dropped conjunction-joined observation target) is caught by the **Observation Targets** meta-category, which uses LOOP_DIAGNOSE MC2's verbatim trigger language: "If the user's input contains clause-pairs joined by 'and' / 'AND' / 'BOTH ... AND' (or the logical extensions 'in addition to' / 'as well as' / 'plus'), PRESERVE ALL clauses as separate observation-target items — do not compress into one clause."

4. **Structural fail-safe:** new Step 3.5 after _branch.md is written. **Structural trigger** scans raw user input for conjunctions (operates on STRUCTURE not CONTENT). **Semantic verification** at trigger-fire checks if each clause's content appears in Question or Goal; if missing, expand before proceeding to Exploration. Plus a new `## Source Input` section in _branch.md preserving raw user input verbatim — enables downstream-discipline audit at any stage.

5. **Meta-recursion residual:** the 5-meta-category enumeration cannot be proved complete. Implicit multi-aspect framings WITHOUT explicit conjunctions can slip through both the meta-categories AND the structural fail-safe. The fail-safe operates on STRUCTURAL TRIGGERS, not full semantic understanding. FS4 (user-interactive verification — "does this Question capture everything you meant?") would close this residual but adds runner-interaction overhead and is currently deferred.

6. **Branch experiment:** create parallel `MVL+/SKILL.md` variant with the proposed Step 3 + Step 3.5. Run 5 NEW MVL+ inquiries with multi-part user framing through both versions.

7. **Evidence gate:** **≥3 of 5 chains** where Step 3.5 catches a drop the current spec would have missed → promote to permanent edit. <3 of 5 → revert and diagnose.

## 4. Coverage analysis

**Cases caught:**

| Failure case | Caught by | How |
|---|---|---|
| H1 (dropped conjunction-joined observation target) | Triple redundancy: Question Observation Targets bullet + Step 3.5 fail-safe + Source Input section | Three different timings (write-time / post-write audit / downstream-discipline-read) |
| Loop-vs-discipline-level conflation | Question Level bullet | Explicit "preserve user's level distinction" instruction |
| Dropped negative constraint joined by conjunction | Step 3.5 fail-safe | "and" trigger fires; semantic verify catches missing negation |
| Multi-sentence framing with each sentence introducing new aspect | Step 3.5 fail-safe | "multi-sentence framings" in extension list |
| Dropped deliverable shape | Question Deliverable Shape bullet | Explicit category |

**Cases NOT necessarily caught:**

| Failure case | Why not caught |
|---|---|
| Implicit multi-aspect framing without explicit conjunctions | Step 3.5 only triggers on explicit conjunctions; no conjunction = no trigger |
| Aspect axis not in the 5 meta-categories | Enumeration is finite; new axes may emerge in future inquiries |
| Future-maintainer re-paraphrases MC2 trigger language | Citation creates anchor but doesn't prevent edit drift |

## 5. Evaluation gate

**Setup:** parallel `cognitive_harness/MVL+/SKILL.md` variant containing the proposed Step 3 + Step 3.5. Current spec unchanged.

**Run:** 5 NEW MVL+ inquiries with multi-part user framing (raw input contains conjunctions, multi-clause structures, or multi-sentence framings) through both spec versions.

**Pass threshold:** ≥3 of 5 chains where audited version catches a drop the current spec would have missed → promote to permanent edit.

**Fail threshold:** <3 of 5 → revert; analyze: was the fail-safe trigger too narrow? did meta-categories miss an axis? was input not conjunction-marked?

**Telemetry per chain:** raw input + audit-flag-fired + would-current-version-have-dropped + agent's audit decision and rationale.

**Status as of fix authoring:** Branch experiment NOT yet executed. The edit was applied DIRECTLY to MVL+/MVL2+ SKILL.md per user override of the LOOP_DIAGNOSE Step 5 guardrail; user retains revert option via git. The branch experiment retrospectively validates (or refutes) the directly-applied edit.

## 6. First-instance-bias acknowledgment

This fix was authored by Claude. The methodology was also authored by Claude in the source inquiry. There is mild authorship-bias risk: the framing of the 5 meta-categories, the fail-safe structure, and the residual acknowledgment all reflect one agent's framing.

**Mitigations applied:**

- The Observation Targets bullet uses LOOP_DIAGNOSE MC2's verbatim trigger language (external pattern anchor; not paraphrased)
- The staging gates per parent README quote LOOP_DIAGNOSE Step 5/6 verbatim (external precedent anchor)
- The 5-chain branch experiment is the empirical validation gate

**Mitigations NOT applied:**

- Cross-author validation (no second-agent review of the fix design)
- Multi-session validation (the fix design and the edit happened in one session)

If the branch experiment passes its ≥3/5 gate, the fix's promotion to permanent edit has empirical support beyond authorship; if it fails, the authorship-bias risk becomes more salient and revisit is warranted.

## 7. Links

- **Source inquiry (the fix's design):** `devdocs/inquiries/2026-05-22_14-50__branch_creation_question_field_decomposition/finding.md`
- **Diagnostic source (the failure mode):** `devdocs/inquiries/2026-05-22_14-30__loop_diagnose__enumeration_frame_error_in_test_design/finding.md` (Hypothesis H1)
- **LOOP_DIAGNOSE protocol:** `cognitive_harness/protocols/loop_diagnose.md` (Step 5/6 guardrails)
- **Applied to:** `cognitive_harness/MVL+/SKILL.md` Step 3 + new Step 3.5; same edit at `cognitive_harness/MVL2+/SKILL.md`
