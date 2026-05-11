# Critique — Discipline-spec apparent-bloat reasons

## User Input

```
Evaluate innovation's 3 ACTIONABLE candidates (C1.1, C2.2, C3.4) plus the alternative C2.3.
Phase 0 dimensions extracted from sensemaking's three principles + project-specific risk.
Multi-axis prosecution: dimension-level + user-perspective + specific failure-case + spec-gap.
Verdict: SURVIVE / REFINE / KILL with constructive output. Run assembly check.
```

---

## Phase 0 — Dimension Construction

### Dimensions extracted from sensemaking + branch

| Dimension | What it asks | Extracted from | Weight |
|---|---|---|---|
| **Audience-preservation** | Does the refactor preserve the runtime-moment audience function for each placement it touches? | Sensemaking Ambiguity 1 (audience = runtime moment) | HIGH (kill if violated) |
| **Convention-compliance** | Does the refactor respect `enes/discipline_rule_placement.md`'s one-canonical-home rule? | Sensemaking; placement convention | HIGH (kill if violated) |
| **Execution-hugging-respect** | For pattern-3 refactors, does it preserve canonical-step placement? | Sensemaking Ambiguity 2 | HIGH for Q3; n/a for Q1, Q2 |
| **Phase-fit conservatism** | At early calibration, does the refactor avoid removing defenses without strong evidence? | Sensemaking Phase/Calibration perspective; project state | MEDIUM-HIGH |
| **Coherence-with-corpus** | Does it apply uniformly across SKILL.md and references/X.md instances? Doesn't break cross-references? | Coherence + project artifact ecosystem | HIGH |
| **Feasibility** | Can it be applied as a concrete spec edit? | Standard | HIGH |
| **Elegance** | Minimum sufficient form? | Standard | MEDIUM |
| **Defended-by-default** (user-perspective) | Does the refactor lean toward keeping defended placements rather than aggressive removal? | User's `_branch.md` framing ("there are reasons to the most bloat looking things") | MEDIUM-HIGH |

### Project-specific risk dimension check

Per the bolted-on rule in td-critique: the candidates touch shared corpus artifacts (multiple `SKILL.md` and `references/X.md` files across disciplines). **Coherence-with-corpus** (already included above as HIGH-weight) explicitly addresses this. **Phase-fit conservatism** explicitly addresses early-calibration risk. Project-specific risk axes are covered.

### Validation

If a candidate passed all 8 dimensions perfectly, would it actually solve the problem? Yes — the dimensions span audience-function preservation (correctness on the core problem), convention compliance (doesn't break the existing system), uniform applicability (works across disciplines), elegance (compression direction), and user-fit (honors the inquiry's framing). No dimension blindness detected.

---

## Phase 1 — Landscape Construction

### Viable region

Refactor preserves audience + complies with convention + applies uniformly + minimum-sufficient + honors defended-by-default. Inhabited by: candidates that compress weakest placements while preserving load-bearing ones.

### Dead region

Refactor violates audience-separation OR convention compliance OR execution-hugging. Already populated (during innovation): C1.4 (drop A3 entirely) and C3.5 (invert spine).

### Boundary region

Technically valid but with scope/spec gaps that need clarification before commit. Inhabited by: candidates that survive on critical dimensions but have rollout or scope ambiguity.

### Unexplored region

**Corpus-wide template machinery** — none of the candidates address how to enforce uniform application mechanically (e.g., a script that scans for the bolted-on prefix pattern). This is genuinely unexplored; flagged in Phase 4 as a frontier for follow-up.

---

## Phase 2 — Adversarial Evaluation

### C1.1 — One-line section pointer for A3

**Prosecution (multi-axis):**

| Axis | Strongest objection |
|---|---|
| Dimension-level (audience-preservation) | The original A3 names specific failure modes ("premature filtering, recency bias, ..."). Removing the names may reduce trigger fidelity — under context load, an LLM might fail to anchor on a specific failure name without the cue list |
| User-perspective | The original A3 also referenced the framework vocabulary; C1.1 drops that. Does this honor "defended-by-default"? |
| Specific failure-case scenario | An LLM mid-Phase-3 of innovate, asking "is this single-mechanism trap?" — with C1.1, must scan all 6 failure modes in the references file rather than directly anchoring on a named cue |
| Specification-gap probe | C1.1 says "apply uniformly across SKILL.md files" — but doesn't specify which SKILL.md files (it's in 7 of them; not in MVL/MVL+), the wording template, or the rollout cadence |

**Defense:**

- The Step 0 invariant means the references file is loaded in full. The LLM has the failure-mode names in context regardless of whether A3 enumerates them. A3's job is not to list names; it's to re-anchor at recognition time. A section pointer suffices.
- The vocabulary-reference sentence in original A3 is genuinely useful but is also a candidate for compression; if it carries weight, expand C1.1 to: *"On failure-mode recognition or vocabulary lookup mid-execution, consult `references/X.md`."*
- Specification-gap is a rollout concern, not a defense-of-the-candidate concern. C1.1 is a template; rollout is a separate task and addressable.

**Collision:**

The trigger-fidelity objection rests on the assumption that name-enumeration in A3 is a load-bearing trigger. But A1 (Step 0 pre-read) is the load-bearing trigger; A3 is a re-anchor after context decay. A re-anchor pointing at a section is sufficient under the Step 0 invariant. Defense survives.

The specification-gap can be closed by extending C1.1's actionable form to specify rollout: *"Apply to the 7 SKILL.md files that currently have a 'Reference loading during execution' footer (explore, sensemaking, decompose, innovate, td-critique, comprehend, navigation). Wording template: see C1.1 above. Rollout: one discipline at a time, verify cross-references stay valid."*

**Verdict: SURVIVE.** Audience preserved; convention complied; coherence and feasibility hold; elegance high; defended-by-default honored (A1, A2 preserved). The vocabulary-reference compression should be folded into the actionable form; specification-gap closed via rollout note.

**Constructive output:** apply with extended template *"On failure-mode recognition or vocabulary lookup mid-execution, consult `references/X.md`."* This preserves both audience functions of original A3 (failure-mode pointer + vocabulary pointer) in one line.

---

### C2.2 — Heading-derived B2 list (failure-modes portion)

**Prosecution (multi-axis):**

| Axis | Strongest objection |
|---|---|
| Dimension-level (coherence-with-corpus) | B2 in actual references files is NOT only failure-modes — it's a multi-row Summary table covering Components, Process, Coverage, Failure modes, etc. C2.2 as scoped addresses ONE row of that table |
| User-perspective | The user's framing was about failure-mode triplication specifically; C2.2's failure-mode-only scope honors that, but the rest of the summary table is left intact (which the user might have wanted addressed) |
| Specific failure-case scenario | When a new failure mode is added to B1, the heading-derived list at the bottom needs updating. Same drift risk as the original B2 table — only the surface area is smaller |
| Specification-gap probe | C2.2 doesn't specify whether the rest of B2 (Components / Process / Coverage rows) is also touched. The candidate as scoped covers one row of a multi-row table |

**Defense:**

- The "rest of B2" (Components / Process / Coverage rows) has a stronger defense than the failure-mode row. Components are discipline-architecture (genuine new content); Processes are step ordering (useful index); Coverage criteria are convergence rules. These are NOT pure restatement; they have audience function distinct from the body. C2.2's scope is correct: address the weakest portion (failure-modes), leave stronger portions intact.
- Drift risk is mitigated, not eliminated: heading-derived list is shorter than the original B2 row, making drift more visible at glance. Names in the list match heading text; if a heading is renamed, the list is obviously out of sync.

**Collision:**

The scope objection succeeds on its surface — C2.2 is incompletely specified. But the *correct* scope is failure-modes only (the rest of B2 has stronger defenses). Defense converts the objection into a scope-refinement: explicitly state "the failure-modes row of B2 is replaced; other rows of B2 remain."

**Verdict: REFINE.** Survives on critical dimensions; needs explicit scope clarification before commit.

**Refine target:** C2.2 v2 reads: *"In each `references/X.md` summary table, replace the failure-modes row with a brief inline list under the body section (e.g., 'Failure modes: Premature filtering · Recency bias · ...'). Other rows of the summary table (Components, Process, Coverage) remain unchanged unless a separate inquiry establishes they have weaker defenses."*

**Direction for innovation:** if a follow-up inquiry tests the rest of B2's defenses (Components row, Process row, Coverage row) and finds any of them weak, those rows could be addressed via the same heading-derived approach — but as separate verdicts.

---

### C2.3 — TOC at file top (alternative to C2.2)

**Prosecution (multi-axis):**

| Axis | Strongest objection |
|---|---|
| Dimension-level (elegance) | TOC adds new content rather than removing redundant content. Heavier than C2.2 |
| User-perspective | Doesn't lean compression; user's framing values defended-by-default but also implicitly values compression (the original "bloat" framing). TOC adds bytes |
| Specific failure-case scenario | Short references files (e.g., `reflect/references/reflect.md` at ~190 lines) don't need TOCs. Adding one is over-engineering for those files |
| Specification-gap probe | C2.3 doesn't specify which files merit a TOC; uniform application would over-engineer short files |

**Defense:**

- For long files (navigation.md ~480 lines, td-critique.md ~370 lines, innovate.md ~430 lines, sensemaking.md ~320 lines, comprehend.md ~430 lines), TOC at top adds genuine navigation value (the skim audience for those files is real and underserved by a bottom-of-file table).
- C2.3 and C2.2 are not mutually exclusive — TOC at top serves "where am I?" navigation; heading-derived failure-mode list at bottom serves "did I see all of them?" completion. Different audiences in different sub-states.

**Collision:**

The over-engineering objection holds for short files. Defense responds: scope C2.3 to files above a length threshold.

**Verdict: REFINE.** Survives for long files, fails for short. Needs scope.

**Refine target:** C2.3 v2 reads: *"Add a brief TOC at the top of `references/X.md` files exceeding 300 lines (navigation.md, td-critique.md, innovate.md, sensemaking.md, comprehend.md). Shorter references files use C2.2 alone."*

**Relationship to C2.2:** complementary. The long files use both (TOC at top + heading-derived failure-mode list at bottom replacing that row of summary table); short files use only C2.2.

---

### C3.4 — Italic prefix for refinement notes

**Prosecution (multi-axis):**

| Axis | Strongest objection |
|---|---|
| Dimension-level (audience-preservation, human reader) | A 30-line refinement subsection (e.g., sensemaking's "Load-bearing concept test") with a one-line italic prefix has a *demoted start-marker* but the body is still spine-weight. Over a long body, the spine/refinement distinction blurs |
| User-perspective | Defended-by-default is honored; nothing is removed |
| Specific failure-case scenario | A reader scanning Phase 3 of sensemaking encounters spine prose (normal) → italic prefix (one line) → 30 lines of body (normal weight). The scan signal exists at the start; the body still reads as spine |
| Specification-gap probe | C3.4 doesn't specify (a) whether long-body refinements need additional demotion (e.g., italicized body, indented block, end-marker), (b) what's the cutoff length, (c) whether code-block / sub-bullet content inside refinements should be handled |

**Defense:**

- Minimum-sufficient principle: prefix alone signals start of refinement. End of refinement is signaled by the next heading or paragraph break. For most refinements this is sufficient — the reader knows they entered a refinement and exits at the natural boundary.
- Body-weight demotion (italics, indent) interferes with code blocks, sub-bullets, and nested structure inside refinements. Risk of breaking existing markdown rendering. Phase-fit caveat: at early calibration, minimum-sufficient is preferred; escalate only if evidence shows insufficiency.
- Long refinements (>20 lines) are the minority. The hot-spot subsections in the corpus are mostly 10-25 lines; long ones (sensemaking's "Load-bearing concept test" at ~25 lines) are the upper edge.

**Collision:**

The scan-blur objection is real for long refinements. Defense responds: minimum-sufficient first; an end-marker (`*— end refinement note —*`) can be added if reading tests show it's needed. Body-weight demotion is escalation only.

**Verdict: SURVIVE.** Critical dimensions all pass (placement, execution-hugging, audience, convention, coherence, feasibility, elegance). The body-weight question is an escalation path, not a current failure.

**Constructive output:** apply C3.4 v1 with the template *"\\*Refinement note (applies at [Step / Phase / Component]):\\*"* on first line. For refinements over 20 lines, optionally add `*— end refinement note —*` closing marker. Body formatting unchanged.

---

### Brief review of DEFERRED candidates from innovation

These were marked DEFERRED by innovation; critique confirms the dispositions:

- **C2.5** (B2 carries trigger conditions per failure mode) — **DEFER confirmed.** Single-mechanism survivor; fertile but adds new content; revival trigger valid (regression-symptom schema adoption).
- **C3.1** (bold prefix variant of C3.4) — **DEFER confirmed.** Fallback if italic insufficient.
- **A1** (compression-discipline addendum to placement convention) — **DEFER confirmed.** Premature codification; revival trigger valid (after C1.1 + C2.2/C2.3 + C3.4 land and survive).

Critique does not re-evaluate these as full candidates here; their dispositions are appropriate.

---

## Phase 3.5 — Assembly Check

### Survivors so far

| Candidate | Verdict |
|---|---|
| C1.1 (one-line A3) | SURVIVE |
| C2.2 (heading-derived B2 failure-modes list) | REFINE (scope to failure-modes row only) |
| C2.3 (TOC at file top, long files only) | REFINE (scope to files >300 lines) |
| C3.4 (italic refinement-note prefix) | SURVIVE |

### Assembly question

Do the survivors combine into something emergent that none of them are individually?

**Component-level read:** four independent spec edits at three surfaces. Combined application reduces overall corpus footprint without breaking any defended placement. Additive, not emergent.

**Meta-level read:** all four refactors share a *compression-with-audience-preservation* principle — each preserves load-bearing placements (A1, A2, B1, B3, canonical step) and compresses or visually demotes the weakest layer at each surface (A3 length, B2 row, refinement-spine confusion). This corpus-wide principle IS an emergent assembly: it's not present in any single candidate but emerges from their pattern.

**Assembly candidate (re-evaluation of A1):**

A1 is the formalization of the corpus-wide compression principle as an addendum to `enes/discipline_rule_placement.md`. Innovation correctly deferred A1 with a revival trigger (after the per-piece refactors land and survive 30 days). Critique confirms: A1 should not be promoted to ACTIONABLE before per-piece evidence accumulates. **A1 stays DEFERRED.**

### Axis-coverage check

Per the bolted-on rule in td-critique: when candidate sets vary on multiple orthogonal axes, each axis must have at least one variant. The candidate space here has axes:

- **Surface axis** (SKILL.md vs references/X.md end vs references/X.md mid) — all three surfaces have a survivor (C1.1 / C2.2 + C2.3 / C3.4)
- **Operation axis** (compress / replace / typographic-demote) — all three operations have a survivor
- **Scope axis** (per-file uniform vs file-size-conditional) — both have survivors (C1.1 + C3.4 uniform; C2.3 size-conditional)

Axis coverage: complete. No axis missing a variant.

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage

The active region of the fitness landscape (viable + boundary) is mapped: 4 candidates evaluated with multi-axis prosecution; 2 SURVIVE, 2 REFINE; 0 KILL at this stage (pre-killed at innovation: C1.4, C3.5; their seeds remain).

The unexplored region (corpus-wide template machinery for enforcing uniform application) is intentionally deferred — it's an inquiry-level extension, not a current candidate.

### Convergence

- At least one clean SURVIVE per pattern: C1.1 (Pattern 1), C3.4 (Pattern 3). Pattern 2 has two REFINEs (C2.2 + C2.3) which are complementary, not in conflict.
- The landscape did not change during Phase 2 — no new regions emerged during prosecution.
- Adversarial testing was strong (multi-axis, including specification-gap probes). Not rubber-stamping.

**Signal: TERMINATE with ranked survivors.**

---

## Final Deliverable

### (a) Dimensions with weights

| Dimension | Weight |
|---|---|
| Audience-preservation | HIGH (kill if violated) |
| Convention-compliance | HIGH (kill if violated) |
| Execution-hugging-respect | HIGH for Q3 only |
| Phase-fit conservatism | MEDIUM-HIGH |
| Coherence-with-corpus | HIGH |
| Feasibility | HIGH |
| Elegance | MEDIUM |
| Defended-by-default | MEDIUM-HIGH |

### (b) Fitness Landscape

- **Viable region:** C1.1, C3.4 (clean SURVIVEs).
- **Boundary region:** C2.2 (REFINE — scope), C2.3 (REFINE — file-size).
- **Dead region:** C1.4 (audience-violation), C3.5 (readability failure).
- **Unexplored region:** corpus-wide template machinery; deferred.

### (c) Candidate Verdicts

| ID | Candidate | Verdict | Constructive output |
|---|---|---|---|
| C1.1 | One-line A3 pointer | **SURVIVE** | Apply extended template covering both failure-mode and vocabulary audiences: *"On failure-mode recognition or vocabulary lookup mid-execution, consult `references/X.md`."* Apply to 7 SKILL.md files (explore, sensemaking, decompose, innovate, td-critique, comprehend, navigation). Rollout one discipline at a time. |
| C2.2 | Heading-derived B2 failure-modes list | **REFINE** | Scope to failure-modes row only. Other summary-table rows (Components, Process, Coverage) remain unless a separate inquiry establishes they have weaker defenses. v2 wording: *"Failure modes: Premature filtering · Recency bias · ..."* immediately after the body Failure Modes section. |
| C2.3 | TOC at file top | **REFINE** | Scope to references files >300 lines (navigation.md, td-critique.md, innovate.md, sensemaking.md, comprehend.md). Complementary to C2.2 in those files; not used in shorter files. |
| C3.4 | Italic refinement-note prefix | **SURVIVE** | Apply uniformly to all bolted-on subsections in the corpus. Template: *"\\*Refinement note (applies at [Step / Phase / Component]):\\*"* on first line. For refinements >20 lines, optionally add closing marker *"\\*— end refinement note —\\*"*. Body formatting unchanged. |

### (d) Coverage Map

| Pattern | Refactor candidate landed | Verdict |
|---|---|---|
| Pattern 1 (reference-loading boilerplate) | C1.1 | SURVIVE |
| Pattern 2 (failure-mode triplication) | C2.2 (primary) + C2.3 (long-file complement) | REFINE × 2 |
| Pattern 3 (bolted-on sub-rules) | C3.4 | SURVIVE |
| Cross-pattern (corpus-wide formalization) | A1 | DEFERRED with revival trigger |

### (e) Signal

**TERMINATE.** Ranked survivors per pattern; convergence reached; no iteration needed.

---

## Convergence Telemetry

| Telemetry item | Result |
|---|---|
| Dimension coverage | 8 dimensions extracted from sensemaking + corpus risk; all applied where relevant |
| Adversarial strength | **STRONG** — multi-axis prosecution including specification-gap probes; user-perspective and failure-case scenarios constructed per candidate |
| Landscape stability | **STABLE** — no new regions emerged during Phase 2 |
| Clean SURVIVE exists | **YES** — C1.1 (Pattern 1) and C3.4 (Pattern 3) clean SURVIVEs; Pattern 2 has two complementary REFINEs with concrete refinement targets |
| Failure modes observed | **None** — no rubber-stamping (multi-axis prosecution), no nitpicking (REFINEs are scope clarifications, not minor flaws), no dimension blindness (all dimensions sourced from sensemaking + project context), no false convergence (all critical dimensions had at least one survivor), no evaluation drift (dimensions fixed at Phase 0), no self-reference collapse (external grounding via the placement convention and corpus state), no wrong dimensions (validated against sensemaking output) |

**Overall: PROCEED** (sufficient coverage + convergence + tested survivors).
