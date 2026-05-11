# Innovation — Discipline-spec apparent-bloat reasons

## User Input

```
Generate concrete refactor candidates per piece (Q1, Q2, Q3). Apply mechanisms; minimum
1 generator + 1 framer per piece. Respect sensemaking constraints (preserve A1/A2/B1/B3;
no relocation in pattern 3; convention compliance; phase-fit conservatism).

Output disposition per the innovate spec: ACTIONABLE / DEFERRED with revival trigger /
RESEARCH FRONTIER. Apply axis-coverage check.
```

---

## Intuition (Direction Seed)

**Context** — three independent pieces, each constrained by sensemaking-confirmed principles. The corpus has multiple spec files; refactors that work uniformly are more valuable than per-file fixes.

**Valuation** — the user's framing ("there are reasons to the most bloat looking things") values *defended-by-default* refactors over aggressive cuts. Compression where audience is preserved beats removal where audience exists.

**Motivation** — produce concrete spec-edit candidates a reader could apply tomorrow without re-running the inquiry.

---

## Piece Q1 — Compress A3 (SKILL.md mid-exec footer)

### Current form (sample from `homegrown/explore/SKILL.md`)

```
**Reference loading during execution.** When recognizing failure modes (premature
depth, surface-only scanning, false confidence, premature termination, re-exploration,
completeness bias in possibility mode), consult the "Failure Modes" section of
`references/explore.md` for full descriptions and corrective actions. The framework's
vocabulary (signal types, confidence levels, scan vs probe semantics) is canonically
defined in that file.
```

### Axis-coverage check

The piece has two orthogonal axes:
- **Length axis** — paragraph / one-line / table-cell
- **Specificity axis** — enumerate-failure-modes / generic-pointer / contextual-trigger

Candidate sets must vary on both.

### Mechanism applications

| Mechanism | Variation | Candidate |
|---|---|---|
| Constraint Manipulation (focused) | Add "max one line" | **C1.1:** "On failure-mode recognition mid-execution, consult `references/X.md` § Failure Modes." |
| Combination (focused) | Combine A3 with skill-to-command table | **C1.2:** Add a "Reference for failure-mode recognition" column to the existing skill-to-command mapping table (relocates pointer from prose to operational table) |
| Absence Recognition (focused) | What's absent? Naming failure modes is enumerative; could be generic | **C1.3:** "On any structural concern mid-execution, re-read `references/X.md`." |
| Inversion (contrarian) | What if A3 is structurally absent? | **C1.4:** Drop A3 entirely; rely on Step 0's pre-load |
| Domain Transfer (focused) | RFCs / man pages use SEE ALSO line | **C1.5:** "See Also: `references/X.md`" |
| Lens Shifting | Under high-context-load conditions, mid-exec re-anchor matters most; should preserve specificity | Confirms C1.1 (specific section pointer) over C1.3 / C1.5 (generic) |

### Test (5 criteria)

| Candidate | Novelty | Scrutiny | Fertility | Actionability | Mechanism Indep. | Verdict |
|---|---|---|---|---|---|---|
| C1.1 (one-line, named section) | Low | Strong — keeps failure-mode pointer specific; reduces footprint | Medium — opens question "should all SKILL.md files use this template?" | High | **3 mechanisms** (CM + DT + LS) | **SURVIVE** |
| C1.2 (table column) | Medium | Weak — table conflates loading-protocol with failure-recognition pointer; mixes concerns | Medium | Medium — schema change | 1 mechanism | KILL (mixing concerns) |
| C1.3 (generic pointer) | Low | Weak — too generic; LLM may not fire it at the right moment | Low | High | 1 mechanism | KILL (loses specificity that A3 exists for) |
| C1.4 (drop entirely) | Low | Killed by sensemaking — A3's audience (mid-exec recognition) is real | — | — | — | KILL (violates audience-separation) |
| C1.5 (SEE ALSO line) | Low | Weak — same generic-pointer issue as C1.3; loses failure-mode specificity | Low | High | 1 mechanism | REFINE → already absorbed by C1.1 |

### Disposition

- **C1.1 — ACTIONABLE.** Multi-mechanism convergent (Constraint Manipulation + Domain Transfer + Lens Shifting). Concrete spec edit: replace the current paragraph-form A3 with a one-line section pointer. Naming the section keeps the audience function (the LLM knows where to look at recognition time); dropping the parenthetical failure-mode list relies on Step 0 pre-read to have loaded them.

---

## Piece Q2 — B2 (summary tables) disposition

### Current form (sample from `homegrown/innovate/references/innovate.md`)

```
| Component | What it is | How many |
|-----------|-----------|----------|
| **Intuition** | Upstream source of seeds — context, valuation, motivation | 3 components |
| **Seed** | The trigger — what starts the innovation process | 1 per process |
| **Mechanisms** | Tools for generating novelty from the seed | 7 (4 Generators + 3 Framers) |
| ...                                                                                |
| **Failure modes** | How innovation fails structurally | 6 identified |
```

### Axis-coverage check

Two orthogonal axes:
- **Disposition form** — drop / heading-derived list / TOC at file top / new-content table
- **Backstop replacement** — abandoned / heading-anchor-replaces / new-content-adds

Candidate sets must vary on both.

### Mechanism applications

| Mechanism | Variation | Candidate |
|---|---|---|
| Inversion (generic) | B2 should NOT exist | **C2.1:** Drop B2 entirely; rely on B1's headings as the index |
| Combination (focused) | Combine B2 with B1's heading anchors | **C2.2:** Replace B2 with a brief heading-derived list (auto-derivable from `### N. Name` patterns), no descriptions |
| Domain Transfer (focused) | Technical specs use TOC at top, not summary at bottom | **C2.3:** Replace B2 with a brief TOC at the top of `references/X.md` |
| Constraint Manipulation (focused) | Add "must add value beyond B1 headings OR drop" | Forces choice between C2.1 (drop) and C2.5 (new content) |
| Absence Recognition (focused) | What's absent that B2 should provide? | **C2.5:** B2 carries trigger conditions per failure mode (e.g., "Premature filtering — triggers when SIC produced ≥3 verdicts but Navigation map has ≤4 items") — new content not in B1 |
| Extrapolation (focused) | As corpus grows, drift compounds | C2.1 / C2.2 extrapolate well (no content to drift); C2.5 extrapolates poorly (more content to sync) |
| Lens Shifting | Skim audience needs index; deep audience needs B1; maintainer needs backstop | Confirms C2.2 (heading-derived list — serves skim minimally; zero-drift; preserves backstop via heading structure) |

### Test (5 criteria)

| Candidate | Novelty | Scrutiny | Fertility | Actionability | Mechanism Indep. | Verdict |
|---|---|---|---|---|---|---|
| C2.1 (drop) | Low | Strong objection: "loses skim audience"; partially defended by B1 headings | Low | High | 1 mechanism | REFINE → C2.2 captures skim function with zero drift |
| C2.2 (heading-derived list) | Low | Strong — preserves skim; minimal drift (drift only when headings change, which forces voluntary update); preserves canonical placement | Medium | High | **3 mechanisms** (Combination + CM + LS) | **SURVIVE** |
| C2.3 (TOC at top) | Medium | Strong — adds value (top-of-file scannability); preserves skim | Medium | High | 2 mechanisms (DT + Combination) | **SURVIVE** but lower than C2.2 |
| C2.5 (trigger table) | High | Medium — adds new content, but extrapolation flag (drift compounds with size) | High — opens "discipline failure modes adopt regression-symptom schema?" | Medium | 1 mechanism | DEFERRED |

### Disposition

- **C2.2 — ACTIONABLE.** Multi-mechanism convergent. Concrete spec edit: replace each `references/X.md` summary table with a brief heading-derived list (e.g., "**Failure modes:** Premature filtering · Recency bias · Action bias · …"). Drift is bounded — names match B1 headings.

- **C2.3 — ACTIONABLE (alternative).** TOC at file top. Two-mechanism convergent. Choose between C2.2 (compact, at end) and C2.3 (TOC, at top) based on file size; C2.3 wins for the longer references files.

- **C2.5 — DEFERRED.** Single-mechanism survivor (Absence Recognition only); fertile but adds new content, which fights the inquiry's compression direction. **Revival trigger:** if `enes/regression/desc.md`'s symptom schema (signal / baseline / deviation / specificity / severity) gets adopted into discipline failure modes as a corpus-wide upgrade, C2.5 becomes the natural target form for B2 (because B2 would then carry distinct fields, not restatement). **Why if revived:** trigger conditions and severity scoring are genuinely absent from B1 today; B2 could host them without overlap.

---

## Piece Q3 — Typographic demotion preserving canonical placement

### Current form (sample from `homegrown/sense-making/references/sensemaking.md` Phase 3)

```
**Load-bearing concept test.** In addition to vague terms, conflicts, unclear goals,
and hidden assumptions identified above, generate at least one ambiguity-collapse pair
testing each load-bearing concept that has been stabilized in any earlier Sensemaking
output. A load-bearing concept is one whose presence materially affects downstream
stages — i.e., removing it would change the loop's verdict. ...

[continues for ~25 lines at the same heading/format level as the surrounding Phase 3
spine, with no visual signal that this is a refinement vs. main process]
```

### Axis-coverage check

Three orthogonal axes:
- **Visual device** — heading-level / italic-prefix / indented-block / callout / smaller-font / bold-tag
- **Granularity** — uniform-prefix / multi-device / minimal-marker
- **Machine-readability** — bare-markdown-only / HTML-allowed

Candidate sets must vary on at least the first two.

### Mechanism applications

| Mechanism | Variation | Candidate |
|---|---|---|
| Domain Transfer (focused) | Sphinx/RFC use admonitions ("Note:", "Warning:", "Refinement note:") | **C3.1:** Bolded prefix `**Refinement (applies at Phase N):**` on first line, body as a paragraph below |
| Combination (focused) | Combine multiple devices | **C3.2:** Smaller heading (####) + italic prefix + indented body (maximally signaled) |
| Constraint Manipulation (focused) | Lock to bare markdown only | Drops HTML-based options; keeps C3.1 / C3.4 / heading-level |
| Absence Recognition (focused) | What's the minimal absent signal? | **C3.4:** Single canonical italic-prefix `*Refinement note (applies at Step N):*` followed by the body content as before — no other formatting change |
| Inversion (contrarian) | Spine demoted; refinements are spine | **C3.5:** Refinements as `###`, spine as smaller — fails readability (reader needs to find spine to operate) |
| Lens Shifting | LLM-runner doesn't care; human reader benefits from demotion | Confirms a minimal change — italic prefix — that signals to humans without taxing LLM |
| Extrapolation (focused) | At hot-spot accretion (5+ refinements at one step), which scales? | Italic prefix scales uniformly; combined-devices (C3.2) scales worst (visual heaviness compounds) |

### Test (5 criteria)

| Candidate | Novelty | Scrutiny | Fertility | Actionability | Mechanism Indep. | Verdict |
|---|---|---|---|---|---|---|
| C3.1 (bold prefix) | Low | Medium — bold-on-first-line is slightly heavier than italic but works | Medium | High | 2 mechanisms (DT + CM) | **SURVIVE** |
| C3.2 (multi-device) | Low | Weak — heavy at scale; extrapolation kills it | Low | Medium | 1 mechanism | KILL (extrapolation) |
| C3.4 (italic prefix only) | Low | **Strong — minimal change preserves canonical placement, signals to humans, doesn't tax LLM, scales uniformly** | Medium — opens "should this be added to `enes/discipline_rule_placement.md`?" | High | **4 mechanisms** (DT + CM + LS + Extrapolation) | **SURVIVE** |
| C3.5 (invert spine) | High | Killed by readability test | — | — | — | KILL (readability) |

### Disposition

- **C3.4 — ACTIONABLE.** Multi-mechanism convergent (Domain Transfer + Constraint Manipulation + Lens Shifting + Extrapolation). Concrete spec edit: prefix each bolted-on subsection with `*Refinement note (applies at [Step / Phase / Component]):*` in italic, then the existing body text. No relocation. No heading-level change. Uniform across all bolted-on subsections in the corpus.

- **C3.1 — DEFERRED.** Two-mechanism survivor (DT + CM). Refines into C3.4 — same idea with lighter typography. Treat C3.4 as the primary; C3.1 as a fallback if readability test shows italic alone is too subtle. **Revival trigger:** if a sample reading test shows readers miss italic-prefixed refinements at the same rate as un-prefixed, escalate to bold (C3.1).

---

## Phase 3.5 — Assembly Check

Do the three survivors (C1.1, C2.2/C2.3, C3.4) combine into something emergent?

**Component-level:** they are three independent spec edits at different surfaces (SKILL.md / references/X.md end / references/X.md mid). Combined application reduces overall corpus footprint without breaking any defended placement.

**Emergent assembly candidate:**

> **A1 — Compression-discipline addendum to `enes/discipline_rule_placement.md`.** Promote the per-piece pattern into a corpus convention: (a) mid-exec re-pointers are one-liners naming the section; (b) summary scan layers are heading-derived, not duplicated content; (c) refinements at canonical step use italic-prefix `*Refinement note:*` form. The placement convention currently governs *where* rules live; the addendum extends it to *how they're formatted*, closing the gap identified in sensemaking.

**Test of the assembly:**

| Criterion | Result |
|---|---|
| Novelty | Medium — extends an existing convention rather than inventing one |
| Scrutiny | Strong objection: "premature codification — you've validated these on three pieces, not the corpus." Defended: addendum is opt-in, applies as files are touched; not retroactive |
| Fertility | High — opens systematic compression as a maintenance practice |
| Actionability | High once C1.1, C2.2, C3.4 are applied at least once |
| Mechanism Independence | Convergent on three pieces × multiple mechanisms each |

### Disposition

- **A1 — DEFERRED.** Single-assembly emergent candidate; depends on per-piece refactors landing first. **Revival trigger:** after C1.1, C2.2 (or C2.3), and C3.4 are each applied to at least one discipline pair AND survive 30 days of use without complaint or re-edit, formalize the addendum. **Why if revived:** the placement convention's silence on formatting (sensemaking Ambiguity 3, LOW confidence on "deliberate vs. gap") would be resolved in the gap direction by accumulated evidence.

---

## Mechanism Coverage (Telemetry)

| Piece | Generators applied | Framers applied | Convergence | Survivors tested |
|---|---|---|---|---|
| Q1 | 3/4 (Combination, Absence Recognition, Domain Transfer) | 3/3 (Constraint Manipulation, Lens Shifting, Inversion) | YES — 3 mechanisms converge on C1.1 | 5 candidates / 1 SURVIVE |
| Q2 | 4/4 (Combination, Domain Transfer, Absence Recognition, Extrapolation) | 3/3 (Inversion, Constraint Manipulation, Lens Shifting) | YES — 3 mechanisms converge on C2.2 | 4 candidates / 2 SURVIVE / 1 DEFERRED |
| Q3 | 3/4 (Combination, Absence Recognition, Domain Transfer) | 3/3 (Constraint Manipulation, Inversion, Lens Shifting) — Extrapolation also applied | YES — 4 mechanisms converge on C3.4 | 4 candidates / 1 SURVIVE / 1 REFINE-INTO-SURVIVOR |
| Assembly | (cross-piece) | (cross-piece) | YES — corpus-wide compression principle emerges | 1 assembly / DEFERRED with revival trigger |

**Failure modes observed:** none. Premature evaluation avoided (full mechanism set generated before testing). Single-mechanism trap avoided (≥3 mechanisms applied per piece). Early frame lock avoided (multiple framings tested per piece). Innovation without grounding avoided (every candidate tested against 5 criteria). Survival bias avoided (Inversion contrarians tested; some legitimately killed for structural reasons, e.g., C1.4 violating audience-separation, C3.5 failing readability).

**Overall: PROCEED** (sufficient coverage + convergence per piece + tested survivors with disposition labels).

---

## Output Summary (for Critique)

### ACTIONABLE refactors (multi-mechanism convergent; ready for spec edit)

1. **C1.1** — Compress A3 to one-line section pointer: `When recognizing failure modes mid-execution, consult \`references/X.md\` § Failure Modes.` Apply uniformly across SKILL.md files.
2. **C2.2** — Replace B2 summary tables with brief heading-derived failure-mode list. (Or **C2.3** — TOC at file top, for longer references files.)
3. **C3.4** — Prefix bolted-on subsections with italic `*Refinement note (applies at [Step / Phase / Component]):*`. No heading-level change; no relocation. Apply uniformly.

### DEFERRED refactors (single-mechanism survivors; preserve option)

- **C2.5** — B2 carries trigger conditions per failure mode. Revival: regression-symptom schema adoption.
- **C3.1** — Bold-prefix variant of C3.4. Revival: if italic alone fails readability test.
- **A1** — Compression-discipline addendum to `enes/discipline_rule_placement.md`. Revival: after C1.1 + C2.2/C2.3 + C3.4 land and survive 30 days.

### KILLED (with seeds for future inquiry)

- **C1.4** (drop A3 entirely) — killed by audience-separation; **seed:** A3's audience exists; killed by violating it. If a future calibration shows mid-exec LLMs robustly re-read references on their own, revisit.
- **C3.5** (invert spine) — killed by readability; **seed:** spine-vs-refinement is a binary; what if specs had three layers (spine / refinement / corner-case) with three typographic levels? Probably over-engineered; deferred indefinitely.
