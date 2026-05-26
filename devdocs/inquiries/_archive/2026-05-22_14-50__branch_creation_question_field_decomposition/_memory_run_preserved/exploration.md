# Exploration: Structural Decomposition of MVL+ Branch Creation's Question Field

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_14-50__branch_creation_question_field_decomposition/_branch.md`

Plus context from prior LOOP_DIAGNOSE finding (H1 transcription failure + MC2 maintenance candidate) + user-provided methodology (decompose vague instructions into meta-categories with full coverage + name failure case must be covered).

---

## Territory Overview

**Mode:** ARTIFACT-MODE DOMINANT (MVL+ SKILL.md exists; LOOP_DIAGNOSE finding exists; user methodology is given) + POSSIBILITY-MODE SUB-PROBE (candidate meta-category enumerations must be generated and tested for coverage).

**Entry point:** SIGNAL-FIRST. The H1 failure case (dropped "accumulation of other disciplines and finding" — a conjunction-joined observation target) is the load-bearing signal. Probe: what meta-categories MUST be in any enumeration that catches this case?

**Resolution:** MEDIUM. Sufficient to commit candidate meta-category set + fail-safe shape. Specific paste-ready text deferred to Innovation.

### Territory regions (8)

| R | What it covers |
|---|---|
| R1 | Current MVL+ SKILL.md Step 3 Question + Goal instruction text (the target) |
| R2 | H1 failure case — what was dropped, what pattern joined it to surviving content |
| R3 | Candidate meta-category enumerations (5+) covering question-content axes |
| R4 | Coverage check: does each candidate enumeration catch H1? other plausible failures? |
| R5 | Fail-safe design space — what verification catches what enumeration misses |
| R6 | Meta-recursion residual — limits of any enumeration approach |
| R7 | Branch-experiment evaluation gate design |
| R8 | Bloat / cost trade-off — when does enumeration become overhead bloat? |

---

## Inventory

### R1 — Current MVL+ SKILL.md Question field instruction

Verbatim from `cognitive_harness/MVL+/SKILL.md` Step 3 of "If NEW":

```markdown
## Question
[the question, stated clearly in one sentence]
## Goal
[what would a good answer look like? what would the user be able to DO with the answer?]
```

**Properties:**
- Question instruction is a single vague directive ("stated clearly in one sentence")
- "One sentence" is a length constraint that rewards compression
- No enumerated structural aspects of question content
- No verification step against raw input
- Goal instruction is two sub-prompts but doesn't enumerate dimensions of "good answer"

**Confidence:** CONFIRMED — direct artifact read.

### R2 — H1 failure case (what was dropped + pattern)

User's raw input contained:

> "...what these MVL loop task can be that it stress tests both explore and surfacing aspects **and accumulation of other disciplines and finding**"

Transcription compressed this to "discriminate /explore from /surfacing when run as /MVL+ vs /MVL2+" — **the second observation target after "and" was dropped**.

**Structural pattern of the failure:**
- TWO observation targets joined by "and"
- First target survived (stress tests both explore and surfacing aspects → "discriminate /explore from /surfacing")
- Second target dropped (accumulation of other disciplines and finding → ABSENT)
- One-sentence pressure made it natural to compress to first target only

**Generalization of the failure pattern:**
- Any user input with N≥2 load-bearing clauses joined by conjunction (and / both X and Y / in addition to / as well as / plus / commas-in-noun-phrases) can lose clauses 2..N during one-sentence compression
- Any user input with N≥2 observation targets in a noun phrase can lose targets
- Any user input with multi-level framing (e.g., "test the loop AND observe individual outputs") can lose levels

**Confidence:** CONFIRMED — direct text comparison + structural-pattern analysis.

### R3 — Candidate meta-category enumerations

Five candidate sets:

**Candidate A: 5-category (subject / action / level / observation-targets / deliverable-shape)** — drafted in direct response prior to this inquiry:

| Category | Captures |
|---|---|
| Subject | What is being investigated |
| Action | What cognitive operation (compare/decide/diagnose/design/...) |
| Level | At what granularity (component/system/loop/discipline/...) |
| Observation targets | What specific aspects must be observed/produced (list each if multiple) |
| Deliverable shape | What form the answer takes |

**Candidate B: 4-category (what / how / multi-target / boundary)** — simpler:

| Category | Captures |
|---|---|
| What | Subject + Action collapsed |
| How | Level + Deliverable shape collapsed |
| Multi-target | Observation targets — explicit multi-clause preservation |
| Boundary | What's in vs out of scope (covers Scope-Check overlap) |

**Candidate C: 6-category (subject / action / level / observation-targets / deliverable / constraints)** — extends A with explicit constraints:

| Category | Captures |
|---|---|
| Subject | (as A) |
| Action | (as A) |
| Level | (as A) |
| Observation targets | (as A) |
| Deliverable shape | (as A) |
| Constraints / negative space | What's deliberately excluded; what NOT to do |

**Candidate D: Pure structural (clause-by-clause preservation)** — minimal:

> "Read raw input. For each clause separated by a sentence boundary, conjunction (and / but / plus / as well as / in addition to), or load-bearing comma, write that clause's content explicitly in the Question. Do not compress multiple clauses into one without explicit verification that each clause's content survived."

This avoids meta-category enumeration entirely — relies on structural-clause preservation.

**Candidate E: Hybrid — A + Candidate D as fail-safe.** Combine meta-categories for guided thinking AND clause-preservation rule as backstop.

### R4 — Coverage check per candidate

| Candidate | Catches H1 (dropped second observation target)? | Catches dropped constraint? | Catches dropped negative spec? | Catches multi-level conflation? |
|---|---|---|---|---|
| A (5-category) | YES via Observation Targets (with "list each, preserve all" wording) | PARTIAL (Scope Check exists separately) | UNCERTAIN | YES via Level |
| B (4-category) | YES via Multi-target | YES via Boundary | UNCERTAIN | PARTIAL (How covers level loosely) |
| C (6-category) | YES via Observation Targets | YES via Constraints | YES via Constraints | YES via Level |
| D (clause-preservation) | YES via clause-by-clause rule | YES same | YES same | UNCERTAIN (multi-level not always clause-marked) |
| E (Hybrid A + D) | YES BOTH paths | YES via clause-rule | UNCERTAIN | YES via Level |

**Observation:** Candidate D (clause-preservation) is structurally simplest and catches the most concrete H1 case (conjunction-dropped clause) most directly. Candidate C has best coverage breadth but most overhead. Candidate E is robust but most bloat.

**Trade-off shape:** more meta-categories → more guidance + more bloat; clause-preservation rule alone → less guidance + less bloat but relies on agent recognizing clause boundaries.

### R5 — Fail-safe design space

The user's methodology warns: "if we make it explicit but miss a component, LLM will skip that missing component." Therefore the fail-safe MUST NOT depend on my enumeration being complete.

Fail-safe options:

**FS1: Raw-input clause-preservation diff.** After writing _branch.md, re-read raw input. For each clause-pair joined by "and" / "AND" / "both X and Y" / "in addition to" / "as well as" / "plus" / commas-in-noun-phrases — verify each clause's content appears in Question OR Goal OR Source Input. If any clause is absent from all three, transcription dropped a load-bearing phrase; expand before proceeding to Exploration.

**FS2: Source-input round-trip test.** After writing _branch.md, attempt to reconstruct the user's raw input from the _branch.md content. If reconstruction loses information present in the raw input, transcription was lossy; expand.

**FS3: Explicit Source Input preservation.** Always include raw user input verbatim in a Source Input section of _branch.md (currently only added at CONCLUDE in finding.md). Then any reader (including the agent at each downstream stage) can audit against raw input directly.

**FS4: User-interactive verification.** After writing _branch.md, ask the user: "Does this Question + Goal capture everything you meant by [X, Y, Z phrases from your input]?" — explicit user confirmation.

**Confidence:** FS1 is most automatable + least invasive; FS3 is most robust + adds a section. FS1 + FS3 combined gives both auto-check and audit-by-future-readers.

### R6 — Meta-recursion residual

The user's warning is meta-recursive: my decomposition could ALSO miss a component. Let me enumerate the limits:

- **Any finite enumeration is incomplete.** New question-content axes can emerge (e.g., temporal constraint, ethical constraint, audience). Whatever the agent uses to evaluate the enumeration's completeness is itself a meta-frame that could be missing.
- **The fail-safe must operate on STRUCTURE not CONTENT.** Structural rules (clause-preservation; conjunction-detection) don't depend on knowing which content axes matter — they catch dropped clauses regardless of what they're about.
- **User-interactive fail-safe shortcircuits meta-recursion.** Asking the user "did I capture everything?" is the only check that doesn't depend on the agent's own enumeration.

### R7 — Branch-experiment evaluation gate

Per LOOP_DIAGNOSE Step 5: "Do not propose broad fundamentals rewrites from one weak correction chain." Therefore the proposed edit MUST be flagged as a branch experiment with explicit gate.

**Gate design:**
- Create parallel `cognitive_harness/MVL+/SKILL.md` variant with the audited Question instruction
- Run 5 NEW MVL+ inquiries through each variant
- Measure whether the audited version catches dropped load-bearing phrases in ≥3 of 5 chains where the raw user input contains multi-part framing (conjunction-joined or multi-clause)
- If gate passes: promote to permanent edit
- If gate fails: revert to current spec; analyze why the audit step didn't help

### R8 — Bloat / cost trade-off

Adding meta-categories + fail-safe to every _branch.md creation adds overhead:
- Reading time per inquiry: ~10-30 seconds for agent to process enumeration
- Output length: maybe +200 words in _branch.md per inquiry
- Risk: ALL future inquiries pay this overhead even if user's input is simple (single-clause)

Mitigation: **graceful degradation** — if user's input is genuinely simple (one subject, one action, one observation target, one deliverable shape), the agent can satisfy the enumeration in one sentence + skip explicit per-category listing. The meta-categories become a CHECK rather than required sub-fields.

The fail-safe (FS1 clause-preservation diff) only fires when the raw input contains conjunctions — so it's cheap for simple inputs and load-bearing for complex inputs.

---

## Frontier Questions for Sensemaking

**FQ1** — Commit which candidate enumeration (A / B / C / D / E) to use. Trade-off between coverage breadth and bloat.

**FQ2** — Commit which fail-safe(s) (FS1 / FS3 / both) to include. FS1 is automatable; FS3 adds a section but provides audit trail for all downstream readers.

**FQ3** — Commit graceful-degradation policy: when can the meta-category enumeration be satisfied implicitly (one-sentence form) vs explicitly (named sub-fields)?

**FQ4** — Commit branch-experiment evaluation gate (5 inquiries; ≥3 of 5 catches).

**FQ5** — Decide if Goal field instruction also needs decomposition or stays as-is.

**FQ6** — Self-reference vigilance: my proposed enumeration is itself an LLM-generated artifact subject to the same risks. The fail-safe (FS1 + FS3) should be load-bearing precisely because the enumeration cannot be guaranteed complete.

---

## Convergence

| Criterion | Status |
|---|---|
| Frontier stable | YES — 8 regions mapped; jump-scan on meta-recursion residual revealed no new regions |
| Discovery rate declining | YES — third-cycle probing produced refinements within R5+R6 only |
| Bounded gaps | YES — remaining unknowns (specific text, gate-passes-threshold) deferred to Innovation |

**Failure modes:** 10 checked, none observed.

## Self-Assessment Verdict

**PROCEED to Sensemaking** with 5 candidate enumerations + 4 fail-safe options + branch-experiment gate design + bloat trade-off framing.
