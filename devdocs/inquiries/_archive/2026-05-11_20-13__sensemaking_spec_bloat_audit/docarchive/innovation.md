# Innovation: Sensemaking Spec Bloat Audit

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-11_20-13__sensemaking_spec_bloat_audit/_branch.md`

Draft exact edit texts per Decomposition's 3 pieces (P1 B1 generalize-example HEAVY; P2 B2-B6 substitution drafts BULK; P3 Research Frontier observations).

---

## Seed and Direction

- **Seed: dissatisfaction.** The user identified that project-specific governance leaked into the discipline reference spec. Exploration inventoried 6 bloat instances; Sensemaking adjudicated per-instance fix shapes. Innovation drafts the exact text.
- **Direction:** preserve structural meaning under the universal-discipline test (would a generic practitioner using this discipline on an unrelated project find this text meaningful?).

---

## Phase 2 — Generate (mechanisms applied focused)

### Combination + Domain Transfer (Generators)

**Combination.** Combine the existing spec's structural patterns (refinement-note format; perspective format; example-with-positive-negative-pair structure) with the universal-discipline criterion. Result: substitutions that preserve the existing structure exactly while removing project-specific overlay.

**Domain Transfer.** Software refactoring's "rename for clarity" pattern (rename variables/functions for universal readability without changing behavior) maps to spec refactoring (rename terms for universal readability without changing the procedure described). The pattern is well-established; risk is bounded.

### Absence Recognition (Generator)

Absent items in current spec that the cleanup adds:
- **A1.** A generic example for Frame-exit Completeness (currently only a project-specific one).
- **A2.** Analysis-scoped wording instead of loop-scoped wording in load-bearing concept test.
- **A3.** Domain-scoped wording instead of project-scoped wording for axiom and vocabulary references.
- **A4.** Broader-scope wording instead of project-wide wording in Frame-exit Completeness perspective.
- **A5.** Removal of trailing project-governance parentheticals (Frontier-flag).

### Extrapolation (Generator)

At higher autonomy levels, the discipline spec will be referenced by autonomous agents with no project context. Universal wording scales without modification; project-specific wording breaks for any agent outside the project. Investment in cleanup now positions the spec for cross-project use.

### Lens Shifting (Framer)

Under the "current project practitioner" lens, some project-specific terms (the loop; the project; metaloop-ladder) carry useful context. Under the "generic practitioner" lens (the universal-discipline test), all such terms are bloat. The universal-discipline test forces the generic-practitioner lens — that's the right lens for a pure discipline reference spec.

### Constraint Manipulation (Framer)

- **Add constraint:** each substitution preserves structural meaning exactly. Same procedure; same predicate; same verdict.
- **Remove constraint:** no requirement to preserve project-specific terminology.
- **Reframe:** terms like "the loop," "the project," "project-wide," "trigger-classifier rules" are replaced not because they are wrong but because they introduce project context where universal context suffices.

### Inversion (Framer)

Component-level inversion: don't reword anything; keep spec as-is. Result: spec stays bloated; bloat accumulates with each new failure mode addition; cross-project sharing impossible. Sensemaking already eliminated this direction.

System-level inversion: don't have a discipline spec separate from project-meta-protocols — bundle them. Result: spec couples discipline-mechanics with project-governance, making the discipline impossible to reuse outside the project. Worse, not better.

Selected: reword (component-level) at the bloat-instance granularity. System remains structured (discipline-spec separate from project-meta-protocols).

**Result:** 7 mechanisms applied; converge on the 6 surgical edit drafts.

---

## P1 — B1 generalize-example draft (HEAVY)

### Target text (current, line 261)

```text
Example (positive — gating fires): a metaloop-ladder inquiry inherits "Memory" from a prior session-architecture finding and uses it across 6 levels with distinct propositions per row. Existence Enumeration's TYPE-axis prompt surfaces three referent types — human-mental memory; system-written md files (e.g., per-inquiry md files written by /MVL or /MVL+ runners); runtime in-memory state. The meta-loop frame's scope includes only the first; the other two are excluded. Role Assessment finds the md-file referent load-bearing (persistent memory across inquiries). Verdict: re-locate, not exclude.
```

### Drafted replacement

```text
Example (positive — gating fires): a system-design ladder inquiry inherits "state" from a prior architecture finding and uses it across 6 levels with distinct propositions per row. Existence Enumeration's TYPE-axis prompt surfaces three referent types — persistent state in storage; transient in-memory state during request handling; client-side cached state. The inquiry's frame includes only the first; the other two are excluded. Role Assessment finds the transient in-memory state load-bearing (the system's request-handling depends on it). Verdict: re-locate, not exclude.
```

### Demonstration-structure preservation check

| Demonstration element | Original | Replacement | Preserved? |
|---|---|---|---|
| Subject = ladder inquiry inheriting multi-value term | "metaloop-ladder inquiry inherits 'Memory'" | "system-design ladder inquiry inherits 'state'" | ✓ |
| Term used across N levels with distinct propositions | "across 6 levels with distinct propositions per row" | (unchanged) | ✓ |
| TYPE-axis surfaces 3 referent types | "human-mental memory; system-written md files...; runtime in-memory state" | "persistent state in storage; transient in-memory state...; client-side cached state" | ✓ |
| Frame includes only first; others excluded | "meta-loop frame's scope includes only the first; the other two are excluded" | "inquiry's frame includes only the first; the other two are excluded" | ✓ |
| Role Assessment finds one of the excluded load-bearing | "md-file referent load-bearing (persistent memory across inquiries)" | "transient in-memory state load-bearing (the system's request-handling depends on it)" | ✓ |
| Verdict: re-locate not exclude | (unchanged) | (unchanged) | ✓ |

All 6 demonstration elements preserved. Project-specific labels (/MVL, /MVL+, metaloop-ladder, session-architecture finding, persistent memory across inquiries) replaced with generic ones (system-design ladder, architecture finding, request-handling).

The "state" example is intentionally chosen because:
- Universal in software-design contexts (any practitioner familiar with system design recognizes the three state types).
- Maps cleanly to Memory's referent-type structure (persistent vs transient vs derived).
- Reads as natural language without requiring project knowledge.

---

## P2 — B2-B6 substitution drafts (BULK)

### B2 — Delete-entirely target

**File:** `homegrown/sense-making/references/sensemaking.md` line 378.

**Text to delete** (the trailing parenthetical, including the leading space before the open paren):

```text
 (Frontier flag: if N≥2 model-misfit instances emerge across the corpus, revisit this anchor decision and consider promoting Accommodation trigger to a separate named failure mode.)
```

**After deletion**, line 378 ends after "...the original Premature Stabilization rule addresses."

**Verification:** the Accommodation trigger refinement note's structural content (model-misfit detection; drop back to Phase 2; problem is structural model misfit not unresolved ambiguity; failing to recognize is Premature Stabilization on model-misfit axis) is fully preserved in the preceding sentences. The deletion removes only the project-governance parenthetical.

### B3 — Load-bearing concept test rewords (lines 334-338)

**Substitution table:**

| # | Original | Replacement | Line |
|---|---|---|---|
| B3.1 | "removing it would change the loop's verdict" | "removing it would change the analysis's verdict" | 334 |
| B3.2 | "Is this the project's actual property/principle, or an external default the loop adopted without testing?" | "Is this the domain's actual property/principle, or an external default the analysis adopted without testing?" | 336 |
| B3.3 | "project axioms (Foundational Principles)" | "domain axioms (Foundational Principles)" | 336 |
| B3.4 | "Does this term match the project's actual vocabulary and the user's language, or is it a loop-coined neologism that hasn't been validated?" | "Does this term match the domain's actual vocabulary and the user's language, or is it an analysis-coined neologism that hasn't been validated?" | 337 |
| B3.5 | "or has the loop coined a name without validation" | "or has the analysis coined a name without validation" | 338 |

**Verification:** in each substitution, the structural concept (test the analysis's claims against external defaults; check terminology against user vocabulary) is preserved exactly. "The loop" → "the analysis" generalizes the agent; "the project" → "the domain" generalizes the scope. The test logic is unchanged.

### B4 — "trigger-classifier rules" substitution (line 338)

**Original** (in context):
```text
Phase 5 / Conceptual Stabilization output — final committed concepts (especially trigger-classifier rules and concepts whose use depends on a runtime determination) → test multiple sub-aspects: proxy-vs-structural...
```

**Drafted replacement:**
```text
Phase 5 / Conceptual Stabilization output — final committed concepts (especially concepts whose use depends on a runtime determination) → test multiple sub-aspects: proxy-vs-structural...
```

**What changed:** the phrase "trigger-classifier rules and " is removed. The remaining phrase "concepts whose use depends on a runtime determination" already covers the structural category that "trigger-classifier rules" instantiated (project-specific case of the broader category). The general phrase is more inclusive; removing the project-specific sub-case loses nothing universal.

### B5 — Specific-vs-pattern recognition cue substitution (line 344)

**Original** (in context):
```text
particularly when that concept appears as a Phase 1 / Key Insight built from a small set of specific examples (e.g., observations from one inquiry, instances from one corpus chain)
```

**Drafted replacement:**
```text
particularly when that concept appears as a Phase 1 / Key Insight built from a small set of specific examples (e.g., from a small set of observations, or instances from one chain of related cases)
```

**What changed:** "observations from one inquiry, instances from one corpus chain" → "from a small set of observations, or instances from one chain of related cases." The structural cue (concept built from few examples → test specific-vs-pattern) is preserved; project-specific terms ("one inquiry," "corpus chain") replaced with generic descriptions.

### B6 — "project-wide" occurrence enumeration + substitution (Frame-exit Completeness; multiple lines)

**Occurrences of "project-wide" in Frame-exit Completeness:**

| # | Line | Original phrase | Replacement |
|---|---|---|---|
| B6.1 | 247 | "Does the inquiry's frame's anchor-set EXCLUDE referents that exist project-wide" | "Does the inquiry's frame's anchor-set EXCLUDE referents that exist in the broader scope" |
| B6.2 | 253 | "Ask: 'What does this term refer to project-wide, regardless of the inquiry's frame?'" | "Ask: 'What does this term refer to in the broader scope, regardless of the inquiry's frame?'" |
| B6.3 | 253 | "List each project-wide referent." | "List each broader-scope referent." |
| B6.4 | 253 | "LAYER (project-wide vs per-inquiry; pre-condition vs operation)" | "LAYER (broader-scope vs per-inquiry; pre-condition vs operation)" |
| B6.5 | 253 | "PHASE (project phase-dependence)" | "PHASE (context phase-dependence)" |
| B6.6 | 253 | "Failing to enumerate any referent-axis that has multiple project-wide values" | "Failing to enumerate any referent-axis that has multiple broader-scope values" |

**Substitution pattern:** "project-wide" → "broader-scope" (adjectival) or "in the broader scope" (adverbial); "project phase-dependence" → "context phase-dependence."

**Verification:** "broader scope" / "broader-scope" preserves the structural meaning (the scope outside the inquiry's frame) without implying THIS project. A generic practitioner reads "the broader scope" as "the scope outside the analysis's frame" — universal.

---

## P3 — Research Frontier observations

### Research Frontier 1 — B2 content destination

The deleted Frontier-flag parenthetical's content (Accommodation trigger as a future-promotion candidate when N≥2 model-misfit instances emerge across the corpus) is project-meta-protocol governance. After deletion from sensemaking.md, the content can OPTIONALLY live in:

- The originating inquiry's finding (where the Accommodation trigger was first proposed and the promotion-candidate observation was made).
- `homegrown/protocols/loop_diagnose.md` (which governs failure-mode promotion via the ≥3-instance threshold; the Accommodation-trigger promotion candidate could live alongside other project-meta promotion candidates).
- Simply unpreserved (the content is observation-only; the project can re-discover it if model-misfit instances actually accumulate).

This is a SEPARATE user decision after the cleanup ships. Out-of-scope for this inquiry's primary deliverable.

### Research Frontier 2 — Cross-discipline-spec audit

This inquiry's audit covered `homegrown/sense-making/references/sensemaking.md` only. The other four discipline specs may have analogous bloat:

- `homegrown/explore/references/explore.md`
- `homegrown/decompose/references/decompose.md`
- `homegrown/innovate/references/innovate.md`
- `homegrown/td-critique/references/td-critique.md`

Each was developed through similar inquiry-driven additions and may have accumulated project-specific governance, project-tool references, or "Frontier flag" parentheticals. A focused future inquiry could apply the universal-discipline test to each.

Out-of-scope for this inquiry's primary deliverable; flagged for separate audit.

---

## Phase 3 — Test (5-test cycle)

| Test | Result |
|---|---|
| **Novelty** | The cleanup is not novel in the literature sense (rename-for-clarity is a known refactoring pattern). But applying it systematically to a discipline reference spec produced the discrimination criterion "universal-discipline test" — a useful named tool. **NOVEL at the procedural level.** |
| **Scrutiny survival** | Sensemaking adjudicated counter-interpretations for each ambiguity. Innovation's drafted substitutions each preserve structural meaning (verified per substitution); the generalized B1 example preserves all 6 demonstration elements. **SURVIVED.** |
| **Fertility** | Opens 2 Research Frontiers (B2 content destination; cross-discipline-spec audit). Each could spawn focused future inquiries. The universal-discipline test itself is a fertile tool for future spec hygiene. **FERTILE.** |
| **Actionability** | All 6 fix drafts are exact text — ready to apply as surgical edits. P3 observations are clearly out-of-scope flags. **ACTIONABLE.** |
| **Mechanism independence** | 7 mechanisms converged on the same deliverable shape (mechanical text substitutions + one generalized example + Research Frontier observations). Domain Transfer reinforced the rename-for-clarity pattern; Absence Recognition identified the missing universal wording; Extrapolation justified investment now; Lens Shifting forced the generic-practitioner perspective; Constraint Manipulation set the meaning-preservation constraint; Inversion confirmed the cleanup is correct (don't-reword loses universality; bundle-discipline-with-governance is worse). **HIGH.** |

**Test cycle: SURVIVED.**

**Disposition: ACTIONABLE** (multi-mechanism convergent; Sensemaking-confirmed; mechanical edits with verified meaning-preservation).

---

## Assembly check + Axis coverage check

### Assembly emergence

The 3 pieces compose into a complete cleanup deliverable: P1 (the structurally heaviest fix, generalize-example) + P2 (the bulk of substitutions, 5 mechanical edits) + P3 (Research Frontier observations).

Emergent property: the cleanup, taken together, demonstrates the universal-discipline test as a reusable spec-hygiene tool. The 6 fixes are individually small but together they reposition the spec from "this project's discipline reference" to "a universal discipline reference," which is the spec's stated purpose.

### Axis coverage

| Axis | Variants in this deliverable | Coverage |
|---|---|---|
| Fix shape | Delete (B2); generalize-example (B1); reword (B3-B6) — all three categories | ✓ |
| Severity | HIGH (B1, B2); MEDIUM (B3, B4, B5); stylistic (B6) — all three tiers | ✓ |
| Edit complexity | Heavy (B1); single deletion (B2); multi-substitution (B3); single substitution (B4, B5); multi-occurrence substitution (B6) — full range | ✓ |
| Scope (Sensemaking only vs cross-discipline) | Sensemaking only (this inquiry); cross-discipline flagged as RF | ✓ |
| Content destination after deletion | Out-of-scope (preserved-elsewhere vs unpreserved is user decision) — flagged as RF | ✓ |
| Backward compatibility | Full (each fix verified to preserve structural meaning) | ✓ |

**Axis coverage: 6/6.** No single-axis bias.

---

## Mechanism Coverage Telemetry

- Generators applied: 4/4 (Combination + Domain Transfer + Absence Recognition + Extrapolation)
- Framers applied: 3/3 (Lens Shifting + Constraint Manipulation + Inversion at component AND system levels)
- Convergence: YES — 7 mechanisms converged on the 3-piece deliverable. Domain Transfer + Combination reinforced the rename-for-clarity pattern. Inversion confirmed the cleanup direction (component-level reword good; system-level bundle-discipline-with-governance worse).
- Survivors tested: 1/1 SURVIVED (assembly + individual fixes).
- Failure modes observed: None.
  - **Premature Evaluation** — generation separated from testing.
  - **Single-Mechanism Trap** — 7 mechanisms applied.
  - **Early Frame Lock** — Sensemaking framed; Innovation considered counter-interpretations during drafting.
  - **Innovation Without Grounding** — explicit 5-test cycle ran; meaning-preservation verified per substitution.
  - **Mechanism Exhaustion** — survivors produced.
  - **Survival Bias** — contrarian inversion (don't-reword; bundle-discipline-with-governance) explicitly tested and rejected on structural grounds.

**Overall: PROCEED.** Hand off to Critique.
