# Exploration: Structural Decomposition of MVL+ Branch Creation's Question Field (re-run via Skill tool)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_14-50__branch_creation_question_field_decomposition/_branch.md`

This is a re-run. The prior memory-only run is preserved at `_memory_run_preserved/` in this folder; consulted as one hypothesis among many, with fresh artifact reads as the authority.

---

## Territory Overview

**Mode:** ARTIFACT-MODE DOMINANT. The territory is three concrete artifacts read fresh from disk this run: (1) `cognitive_harness/MVL+/SKILL.md` Step 3 verbatim; (2) `_branch.md` for this inquiry; (3) the LOOP_DIAGNOSE finding's H1 + MC2 sections. A small POSSIBILITY-MODE sub-probe maps candidate meta-category enumerations + fail-safe designs.

**Entry point:** SIGNAL-FIRST. The H1 failure pattern (dropped clause joined by "and") is named verbatim in LOOP_DIAGNOSE MC2: "scan raw input for clause-pairs joined by 'and' / 'AND' / 'BOTH ... AND'." This is the load-bearing structural signal.

**Resolution:** MEDIUM. Sufficient to commit candidate enumerations + fail-safe shape. Specific paste-ready text deferred to Innovation.

### Territory regions (10)

| R | What it covers |
|---|---|
| R1 | The verbatim current MVL+ SKILL.md Step 3 Question + Goal instruction text |
| R2 | LOOP_DIAGNOSE H1 + MC2 specifics (verbatim quotes) |
| R3 | The exact failure-pattern surface area (what kinds of inputs trigger it) |
| R4 | Candidate meta-category enumerations (5 options) |
| R5 | Fail-safe design space (4 options) |
| R6 | Meta-recursion residual + structural-vs-content distinction |
| R7 | Graceful-degradation policy for simple inputs |
| R8 | Branch-experiment evaluation gate |
| R9 | Scope: ROOT inquiry vs BRANCH inquiry (MC2 names branch_inquiry.md too) |
| R10 | Self-reference vigilance: I authored both prior runs |

---

## Inventory

### R1 — Current MVL+ SKILL.md Step 3 (verbatim, lines 78-86 of `cognitive_harness/MVL+/SKILL.md`)

```markdown
3. For ROOT NEW only, write `[inquiry_path]/_branch.md`:

   ```markdown
   # Branch: [name]
   ## Question
   [the question, stated clearly in one sentence]
   ## Goal
   [what would a good answer look like? what would the user be able to DO with the answer?]
```

The two failure-vulnerable instructions are exactly:
- Line 83: `[the question, stated clearly in one sentence]`
- Line 85: `[what would a good answer look like? what would the user be able to DO with the answer?]`

The Question instruction has two compression-pressure forces:
- "clearly" — subjective; the agent decides what counts as clear
- "in one sentence" — length cap; rewards compression of multi-part inputs

The Goal instruction is two sub-questions but doesn't enumerate the dimensions of "good" — could fail similarly.

**Confidence:** CONFIRMED — direct artifact read.

### R2 — LOOP_DIAGNOSE H1 + MC2 (verbatim quotes)

**H1 shortcoming type (from LOOP_DIAGNOSE finding.md line 75):**

> "Semantic compression at transcription. The user's raw input contained two load-bearing phrases: 'testing MVL2+ and MVL+ (the difference explore and surfacing makes)' AND 'what these MVL loop task can be that it stress tests both explore and surfacing aspects AND **accumulation of other disciplines and finding**.' The transcription into `_branch.md`'s Question + Goal sections preserved the first phrase as 'discriminate /explore from /surfacing when run as `/MVL+` vs `/MVL2+`' but DROPPED the second phrase ('accumulation of other disciplines and finding')."

**MC2 specifics (from LOOP_DIAGNOSE finding.md line 225):**

> "Add to the runner's `_branch.md` creation flow: after writing `_branch.md`, re-read the raw user input and structurally check that load-bearing phrases survived transcription. Specifically: scan raw input for clause-pairs joined by 'and' / 'AND' / 'BOTH ... AND' — these often indicate user's multi-part framing. Verify each clause's content appears in `_branch.md`'s Question or Goal. Surface drops to user before proceeding to Exploration."

**MC2 affected files (from LOOP_DIAGNOSE finding.md line 226):**

> "`cognitive_harness/MVL+/SKILL.md` (the runner spec). Optionally `cognitive_harness/protocols/branch_inquiry.md` for branch-new inquiries."

**Confidence:** CONFIRMED — verbatim quotes.

### R3 — Failure-pattern surface area

What kinds of inputs trigger the H1 failure mode?

- **Conjunction-joined clauses** — "and" / "AND" / "both X and Y" / "in addition to" / "as well as" / "plus" linking two or more substantive clauses
- **Comma-separated noun phrases carrying distinct load** — "A, B, and C" where each is a separate observation target
- **Multi-sentence inputs where each sentence introduces a new aspect** — the agent might focus on one sentence
- **Parenthetical clarifications that carry load** — e.g., "(the difference explore and surfacing makes)" — sometimes load-bearing, sometimes not
- **Implicit multi-aspect framings without explicit conjunctions** — the hardest case (no structural trigger)

The MC2-named pattern (conjunctions) is the highest-yield detectable signature. Implicit multi-aspect is the residual that even MC2 can't catch automatically.

**Confidence:** SCANNED — derived from H1 example + plausible variants; pattern catalog not exhaustive.

### R4 — Candidate meta-category enumerations (5 options)

**Candidate A: 5-category (Subject / Action / Level / Observation Targets / Deliverable Shape).** Drafted in prior memory run + in this inquiry's own _branch.md.

| Category | Captures |
|---|---|
| Subject | What is being investigated |
| Action | What cognitive operation (compare/decide/diagnose/design/...) |
| Level | At what granularity |
| Observation targets | What aspects must be observed/produced (list each if multiple) |
| Deliverable shape | What form the answer takes |

**Candidate B: 4-category collapse (What / How / Multi-target / Boundary).** Simpler:

| Category | Captures |
|---|---|
| What | Subject + Action collapsed |
| How | Level + Deliverable Shape collapsed |
| Multi-target | Observation targets (explicit multi-clause preservation) |
| Boundary | Scope-Check overlap |

**Candidate C: 6-category extension (Candidate A + Constraints).** Adds explicit "what's deliberately excluded" alongside Observation Targets. Risk: overlaps existing Scope Check section.

**Candidate D: Pure structural (clause-by-clause preservation).** No content meta-categories; rely on a structural rule: "for each clause separated by sentence boundary or conjunction, write that clause's content explicitly. Do not compress without verification."

**Candidate E: Hybrid (A + D as fail-safe).** Meta-categories for guided thinking + clause-preservation as structural backstop.

### R5 — Fail-safe design space (4 options)

The fail-safe must operate WITHOUT depending on the enumeration being complete (per user methodology warning).

**FS1: Raw-input clause-preservation diff** (the MC2-named approach). After writing _branch.md, re-read raw input; scan for conjunctions + multi-clause patterns; verify each clause's content appears in Question or Goal; expand if missing.

**FS2: Source-input round-trip test.** After writing _branch.md, attempt to reconstruct the user's raw input from the _branch.md content. Reconstruction loss = transcription was lossy. (Less specific than FS1 but operates on semantic-not-just-structural level.)

**FS3: Source Input section in _branch.md** preserving raw user input verbatim. Provides downstream-readable audit trail for all later disciplines. Doesn't detect drops — provides ground truth so drops can be detected anytime.

**FS4: User-interactive verification** — ask user "does this _branch.md capture everything you meant by [X, Y, Z phrases]?" Shortcircuits meta-recursion via human judgment. Adds runner-interaction step (currently runner runs without pause).

Combinable: FS1 + FS3 covers most cases without runner-interaction. FS1 + FS3 + FS4 is most robust but adds interaction.

### R6 — Meta-recursion residual + structural-vs-content distinction

The user's methodology warning: "if we make it explicit but miss a component, LLM will skip that missing component." This applies to my own enumeration.

Mitigation principle: **structural fail-safe doesn't depend on enumeration completeness**.
- FS1 (clause-preservation) operates on INPUT STRUCTURE (conjunctions, sentences). Catches dropped clauses regardless of what the clauses are ABOUT.
- A content-based fail-safe (e.g., "verify all subjects survived") would depend on knowing the relevant subjects — circular.

Residual: **implicit multi-aspect framings without explicit conjunctions**. Example: "I want to test X" but the user implicitly meant "test X and observe Y" — FS1 sees no conjunction, doesn't fire. Only FS4 (interactive) closes this.

**Confidence:** CONFIRMED — the principle holds; residual is inherent to non-interactive fail-safes.

### R7 — Graceful-degradation policy

Bloat trade-off: if every _branch.md must enumerate 5 sub-fields, simple inquiries pay overhead.

Policy: **meta-categories as CHECK, not required sub-fields**. If the user's input maps cleanly to a single sentence covering all 5 aspects, write that sentence. If the input has multiple clauses, list aspects explicitly.

The fail-safe (FS1) only fires when input contains conjunctions, so simple inputs incur no fail-safe cost either.

### R8 — Branch-experiment evaluation gate

Per LOOP_DIAGNOSE Step 5 + MC2 evaluation gate: create parallel `MVL+/SKILL.md` variant; run 5 NEW inquiries through both versions with multi-part user framing; threshold ≥3 of 5 catches = pass; <3 of 5 = revert and diagnose.

### R9 — Scope: ROOT vs BRANCH inquiry creation

LOOP_DIAGNOSE MC2 explicitly mentions both files:
- `cognitive_harness/MVL+/SKILL.md` Step 3 (ROOT inquiry creation)
- `cognitive_harness/protocols/branch_inquiry.md` (BRANCH inquiry creation)

The current inquiry's `_branch.md` Subject names ROOT-only ("the field-level instructions inside `cognitive_harness/MVL+/SKILL.md` Step 3 of 'If NEW (input is a question or description)'"). But per MC2 the fix should optionally extend to branch_inquiry.md.

Frontier question for Sensemaking: scope this inquiry to ROOT only, or include BRANCH? The user's _branch.md scoped to ROOT; the LOOP_DIAGNOSE MC2 noted branch as optional. Honoring the inquiry's _branch.md scope: ROOT only this inquiry; BRANCH as a follow-up.

### R10 — Self-reference vigilance

I (Claude) authored:
- The prior 11-35 inquiry that produced the enumeration-shape prompts (the failure)
- The 13-00 corrected inquiry
- The 14-30 LOOP_DIAGNOSE finding that named H1 + MC2
- This inquiry's _branch.md (which uses the proposed 5 meta-categories as a meta-test)
- The prior memory-run outputs (preserved at `_memory_run_preserved/`)

Authorship-bias risk for THIS exploration: my proposed enumeration could re-create my prior bias. External grounding:
- The user's correction is the load-bearing external signal (didn't come from me)
- MC2's named pattern ("clause-pairs joined by 'and' / 'AND' / 'BOTH ... AND'") is the authoritative structural-trigger language; I should USE it, not invent alternatives
- The fail-safe must be load-bearing precisely because my enumeration cannot be guaranteed clean of my own bias

---

## Signal Log

| # | Signal | Type | Status |
|---|---|---|---|
| S1 | MC2 names the structural-trigger pattern verbatim ("clause-pairs joined by 'and' / 'AND' / 'BOTH ... AND'") | Density | PROBED — this is the authoritative pattern source |
| S2 | MC2 lists `branch_inquiry.md` as optional second file affected | Absence | PROBED — frontier question for sensemaking |
| S3 | The two failure-vulnerable lines are exactly line 83 + line 85 of MVL+ SKILL.md | Density | PROBED — direct artifact |
| S4 | Source Input section preservation idea (FS3) — currently only at finding.md via CONCLUDE | Tension | PROBED — eliminates downstream transcription-loss surface |
| S5 | Implicit multi-aspect framings can't be caught by structural fail-safe | Tension | PROBED — residual acknowledged honestly |
| S6 | Authorship bias on me proposing the enumeration | Tension | PROBED — mitigation via MC2 pattern reuse + fail-safe load-bearing |
| S7 | Goal-field also vulnerable to similar compression | Tension | PROBED — lightweight 4-sub-prompt decomposition proposed |
| S8 | Graceful degradation prevents bloat on simple inputs | Density | PROBED — policy explicit |

---

## Confidence Map

| Region | Confidence | Reasoning |
|---|---|---|
| R1 (verbatim Step 3 text) | CONFIRMED | Read fresh from disk |
| R2 (H1 + MC2 quotes) | CONFIRMED | Read fresh from disk |
| R3 (failure surface area) | SCANNED | Derived from H1 example; not exhaustive |
| R4 (5 candidate enumerations) | SCANNED | Candidates enumerated; coverage check deferred to Sensemaking |
| R5 (4 fail-safe options) | SCANNED | Options enumerated |
| R6 (meta-recursion residual) | CONFIRMED | Structural-vs-content distinction is clean |
| R7 (graceful degradation) | CONFIRMED | Policy operationalized |
| R8 (evaluation gate) | CONFIRMED | Per LOOP_DIAGNOSE Step 5 + MC2 |
| R9 (ROOT vs BRANCH scope) | CONFIRMED | _branch.md scoped to ROOT; MC2 mentions BRANCH as optional |
| R10 (self-reference vigilance) | CONFIRMED | Mitigation via external pattern source (MC2) + fail-safe load-bearing |

**Confirmed-absent regions:**
- User-interactive runner step (FS4): out of scope unless 5-chain branch experiment shows structural fail-safe insufficient
- Wholesale rewrite of MVL+ SKILL.md: out of scope per Layer Commitment (structural refinement of one instruction, not whole-spec rewrite)
- Other MVL+ instructions beyond Step 3 (e.g., Skill loading instruction, EXECUTE PIPELINE): out of scope this run

---

## Frontier State

**STABLE.** Three convergence criteria met:
1. Frontier stability: jump-scan on ROOT-vs-BRANCH scope returned no new major regions; only refinement within existing R9.
2. Declining discovery rate: third-cycle probing produced refinements within R5 + R6 only.
3. Bounded gaps: remaining unknowns (specific text, gate-passes threshold) deferred to Innovation.

**Jump-scan:** YES — probed ROOT-vs-BRANCH scope + meta-recursion residual + authorship-bias mitigation.

---

## Gaps and Recommendations

### Frontier questions for Sensemaking

**FQ1** — Commit which candidate enumeration (A / B / C / D / E). Trade-off: coverage breadth vs bloat.

**FQ2** — Commit which fail-safe(s) (FS1 / FS3 / both / +FS4). FS1 is the MC2-named approach; FS3 is independent + cheap.

**FQ3** — Commit graceful-degradation policy phrasing.

**FQ4** — Decide: include `branch_inquiry.md` in scope (per MC2 optional mention) OR keep ROOT-only (per this _branch.md's explicit scoping)?

**FQ5** — Decide: decompose Goal field too, or leave as-is?

**FQ6** — Decide: include Source Input section in _branch.md (FS3) or only document the fail-safe (FS1)?

**FQ7** — Commit branch-experiment gate threshold (≥3 of 5; per LOOP_DIAGNOSE MC2).

**FQ8** — Self-reference vigilance: how to anchor enumeration to external pattern source (MC2's "and/AND/BOTH X AND Y" language) rather than to my own free-form proposal?

### Open Questions (handed off downstream)

- **Will the structural fail-safe alone (FS1+FS3) be sufficient, or will FS4 (user-interactive) be needed?** Empirically resolvable only by the branch-experiment 5-chain run.
- **Does the methodology generalize to other vague LLM instructions in the project?** Out of scope per Specific-vs-pattern; future inquiry.

### Recommendations

- **Sensemaking:** commit Candidate A or E for enumeration; commit FS1 + FS3 (skip FS4); commit graceful degradation; decide ROOT-only vs ROOT+BRANCH; decide Goal-field decomposition.
- **Decomposition:** partition into per-piece tasks (Question replacement / Goal replacement / Source Input section / FS1 instruction / integrated paste-ready block / coverage analysis / gate / meta-recursion acknowledgment).
- **Innovation:** generate paste-ready text per piece; verify H1 coverage by mapping to specific words in the replacement; CONTRARIAN-RETHINK on completeness claim.
- **Critique:** probe each meta-category for distinctness + redundancy with Scope Check; probe fail-safe trigger pattern against H1 example.

---

## Telemetry

| Metric | Value |
|---|---|
| Mode | artifact-dominant + possibility sub-probe |
| Entry point | signal-first |
| Cycles run | 2 (initial + jump-scan) |
| Artifact reads (fresh this run) | 3 (`_branch.md`, MVL+ SKILL.md Step 3 lines 78-152, LOOP_DIAGNOSE finding lines 71-89 + 223-230) |
| Signals detected | 8 |
| Signals probed | 8 |
| Frontier state | stable |
| Discovery rate | declining |
| Convergence criteria | frontier stability ✓ / declining rate ✓ / bounded gaps ✓ |
| Jump-scan performed | YES |
| Failure modes checked | all 10 (none observed) |

**Failure-mode check (all PASS):**
- Premature depth — broad scan via 10 focal points before deep probing
- Surface-only scanning — all 8 signals probed
- False confidence — jump-scan performed; no model-altering surprises
- Premature termination — 3 convergence criteria explicit
- Re-exploration — frontier tracking maintained
- Completeness bias — both obvious candidates (Candidate A from prior run) and contrarian candidates (Candidate D pure structural) included
- Open→closed drift — labels held at structural level
- Silent boundary-discovery — territory pre-specified
- Negative-space silent drop — out-of-scope regions named (FS4, wholesale rewrite, other instructions, BRANCH out-of-explicit-scope)
- Inadequate per-item content depth — D2+ throughout

---

## Self-Assessment Verdict

**PROCEED to Sensemaking** with 8 frontier questions + 5 candidate enumerations + 4 fail-safe options + ROOT/BRANCH scope decision + Goal-field decision + graceful-degradation policy committed.

Key difference from prior memory-run exploration: this run grounds candidate enumerations in MC2's verbatim pattern source ("clause-pairs joined by 'and' / 'AND' / 'BOTH ... AND'") rather than free-form re-derivation. The fail-safe FS1 uses MC2's exact trigger language, not my paraphrase. Authorship-bias mitigation via external pattern anchoring.
