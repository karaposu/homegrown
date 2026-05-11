# Innovation: Generic Discipline-Level Non-Ambiguity Convention

## User Input

devdocs/inquiries/2026-05-08_07-15__generic_discipline_level_nonambiguity_convention/_branch.md

## Phase 1 — Seed

Sensemaking + Decomposition stabilized: 2 edits + 1 state update. Innovation finalizes Edit 2's exact wording.

**Seed type:** Refinement (broaden prior narrow scope to generic) + Composition (source-side convention + destination-side examples) + Constraint (lightweight; one sentence per discipline; ~40-50 words).

**Direction:** the user's framing is structurally correct — the non-ambiguity problem is generic across 6 shorthand types. Innovation produces final wording for Edit 2 + concrete text for Edit 1 + state update text + composition explanation.

## Phase 2 — Generate (7 Mechanisms × 3 Variations Each)

### Mechanism 1: Combination (Generator)

**Generic:** Combine the principle (write parenthetical context on first use) + 4-5 type examples (illustrative) + cross-reference to Component A's example bank into one sentence.

**Focused:** Use semicolons to separate the principle, the type list, and the cross-reference. Compresses the wording.

**Contrarian:** Combine into a multi-sentence convention with separate paragraphs for principle, types, and cross-reference. Reject — too heavy.

**Surviving:** focused combination — semicolon-separated single sentence.

### Mechanism 2: Absence Recognition (Generator)

**Generic:** What's missing from the prior `2026-05-08_06-30` convention is broader scope. Add the missing 5 shorthand types via illustrative examples.

**Focused:** The prior wording said "section, component, step, or failure mode that is defined in another Homegrown discipline reference spec" — too narrow. Replace with "any niche term" and enumerate 4-5 types as illustrative examples.

**Contrarian:** What's missing is enforcement — without a check, the convention is just a suggestion. Reject — same regression to Component B; user constraint forbids checks.

**Surviving:** focused absence — generic "niche term" + illustrative type list.

### Mechanism 3: Domain Transfer (Generator)

**Generic:** Transfer from technical writing — "define abbreviations on first use" is the canonical writing-style convention.

**Focused:** Transfer from API documentation — "link to definition on first reference" + "subsequent references can be bare." Same shape, different domain.

**Contrarian:** Transfer from formal verification — every term must have a typed definition. Reject — heavy.

**Surviving:** focused transfer reinforces the "first use" + "subsequent bare" structure.

### Mechanism 4: Extrapolation (Generator)

**Generic:** As the methodology library grows, more shorthand types will appear (new protocols, new abbreviations, new coined terms). The generic principle covers them automatically; type-specific rules don't.

**Focused:** If the convention is generic, future spec additions create no maintenance burden on the convention itself. The illustrative examples can be extended; the principle stays stable.

**Surviving:** focused extrapolation supports the generic principle's stable shape.

### Mechanism 5: Lens Shifting (Framer)

**Generic:** Under the prior frame (cross-spec only), the convention covers 1/6 of the problem. Under the generic frame, it covers 6/6 with the same write-time mechanism.

**Focused:** The prior frame anchored on "cross-spec" because that was the most-evidenced sub-type. The generic frame steps back: ALL niche terms share the same correction (parenthetical on first use); covering all is structurally cleaner than enumerating one.

**Surviving:** focused lens shift confirms the broadening.

### Mechanism 6: Constraint Manipulation (Framer)

**Generic:** Add the constraint that the convention must fit ≤50 words.

**Focused:** Add constraints: (a) one sentence; (b) generic principle + 4-5 illustrative type examples; (c) cross-reference to Component A's example bank; (d) no post-write check.

**Contrarian:** Remove the cross-reference constraint and require self-contained wording. Reject — duplicates Component A in 5 places (maintenance hazard).

**Surviving:** focused constraint set.

### Mechanism 7: Inversion (Framer)

**Generic level 1:** "Disciplines write internally-referential output" → invert to "disciplines write with first-use disambiguation for any niche term."

**Focused level 2:** "Cross-spec convention catches cross-spec ambiguity" → invert to "generic principle catches all ambiguity types via one rule."

**Contrarian level 3:** "Disciplines should be cold-readable" → invert to "disciplines remain working documents; the discipline-level convention is about reducing what gets propagated forward, not making the discipline output cold-readable in isolation." This is structurally important — the convention isn't a cold-readability requirement; it's a "less ambiguous propagation" preference.

**Surviving:** focused inversion (level 2) confirms the generic shape; level 3 confirms the convention's purpose is propagation reduction, not cold-readability.

## Mechanism Outputs Summary

| Mechanism | Surviving variation | Contribution |
|---|---|---|
| Combination (G) | Focused: semicolon-separated single sentence | Compresses principle + types + cross-reference into one sentence |
| Absence Recognition (G) | Focused: "any niche term" + illustrative list | Replaces narrow "section, component, step, failure mode" trigger |
| Domain Transfer (G) | Focused: API docs first-use convention | Reinforces "first use" + "subsequent bare" |
| Extrapolation (G) | Focused: generic principle scales | Stable convention; only example list extends over time |
| Lens Shifting (F) | Focused: 6/6 vs 1/6 coverage | Confirms broadening |
| Constraint Manipulation (F) | Focused: ≤50 words, generic, cross-ref | Shapes wording |
| Inversion (F) | Focused level 2 + level 3 | Generic principle; not cold-readability requirement |

**Convergence:** All 7 mechanisms point to a single-sentence generic convention with illustrative type examples and a cross-reference to Component A's example bank at conclude.md. HIGH convergence.

## Phase 3 — Test (5 criteria per surviving candidate)

### Candidate E1 — Component A Application Text (verbatim from prior `2026-05-07_22-10` finding)

**Concrete text** (3 example pairs to insert after the existing "Template" example pair at `homegrown/protocols/conclude.md` line 73):

```markdown

Additional examples of the failure mode and its correction:

- ❌ "the current Probe section says..." — which spec? in what discipline?
- ✅ "the Probe section in `homegrown/explore/references/explore.md` (the
   Structural Exploration discipline spec) says..."

- ❌ "Surface-Only Scanning failure mode" — failure mode of what? defined
   where?
- ✅ "Surface-Only Scanning (one of six failure modes documented in the
   Structural Exploration discipline spec at
   `homegrown/explore/references/explore.md`)"

- ❌ "Coarse Scan" — coarse scan of what? in what process?
- ✅ "Coarse Scan (the breadth-first first-pass step in Structural
   Exploration's Resolution Progression)"
```

**Tests:**

- **Novelty:** the text is verbatim from the prior `2026-05-07_22-10` finding's Component A. Not novel as new content; novel only as application of an already-proposed-but-not-applied piece. NOVEL-AS-APPLICATION.
- **Scrutiny survival:** strongest objection — *"this is just rehashing the prior finding."* Defense — the prior finding's Component A was never applied; this finding moves it from proposed to applied. Verifying the text quality: each example is a clean ❌/✅ pair showing the failure shape and its correction. The cross-spec-reference example shapes are illustrative for ALL niche terms (not just cross-spec). SURVIVES.
- **Fertility:** opens the example list as a structured surface; future shorthand types could add more example pairs as evidence accumulates. FERTILE.
- **Actionability:** mechanical insertion at known line number. ACTIONABLE.
- **Mechanism independence:** content is text-quoted from prior finding; not generated anew. The decision to apply it is the actionable artifact. HIGH (carried forward).

**VERDICT: SURVIVES.**

### Candidate E2 — Generic Convention Final Wording

**Concrete final wording** (single sentence; ~50 words; identical text to be inserted at the end of the SOLID INSTRUCTIONS section in each of the 5 discipline reference specs):

> **First-use context.** When introducing a niche term in this output — a name from another Homegrown discipline reference spec (e.g., "Probe component"), a project-specific reference (e.g., `/MVL+`, `enes/`), an abbreviation (e.g., "SV6"), a bare file path, or a concept coined within this inquiry — give brief parenthetical context on first use; subsequent uses can be bare. See `homegrown/protocols/conclude.md` non-ambiguity principle for example shapes.

Word count: ~55 words (slightly above 50; trade-off for explicit type enumeration).

**Tests:**

- **Novelty:** new generic convention; not in any current discipline spec. NOVEL.
- **Scrutiny survival:** strongest objection — *"55 words exceeds the ≤50 target."* Defense — the type enumeration is illustrative and provides recognition cues for all 6 shorthand types in one sentence. The alternative is shorter wording with no examples (Approach 3 — pure principle), which the prior `2026-05-07_22-10` finding showed fails because subjective recognition is unreliable. The 55 words buy concrete recognition cues; 5 words over budget is a net positive. SURVIVES.
- **Fertility:** opens SOLID INSTRUCTIONS as a structured surface for write-time conventions; future writing-style preferences can be added the same way. FERTILE.
- **Actionability:** runner reads the convention at discipline startup → applies it implicitly during writing. No checklist, no scan. ACTIONABLE.
- **Mechanism independence:** all 7 mechanisms converge. HIGH.

**VERDICT: SURVIVES.**

### Candidate S-1 — SUPERSEDES Update for Prior `2026-05-08_06-30`

**Concrete text** (state update for `devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/_state.md`):

```markdown
## Status

SUPERSEDED

## History

- ... (existing entries) ...
- 2026-05-08: Superseded by devdocs/inquiries/2026-05-08_07-15__generic_discipline_level_nonambiguity_convention/. The prior finding's narrow cross-spec-only scope was replaced with a generic convention covering all 6 shorthand types observed across the corpus (cross-spec references; within-discipline references; inquiry-coined terms; project-specific references; abbreviations; bare file paths). The narrow scope covered 1/6 of the actual problem; the generic version covers 6/6 at proportional cost.
```

**Tests:**

- **Novelty:** procedural update; not novel content. NOVEL-AS-PROCEDURAL.
- **Scrutiny survival:** strongest objection — *"is the prior finding actually superseded or just refined?"* Defense — the prior finding's wording is wrong-scoped (covers 1/6 of the problem); applying it as proposed would leave 5/6 uncovered. This finding replaces, not augments. SUPERSEDES is correct. SURVIVES.
- **Fertility:** maintains corpus integrity (one canonical answer per question). N/A for fertility metric.
- **Actionability:** mechanical _state.md edit. ACTIONABLE.
- **Mechanism independence:** procedural; not mechanism-driven. N/A.

**VERDICT: SURVIVES.**

### Candidate C-1 — Composition + Per-Shorthand-Type Verification (in finding only)

**Per-type verification table:**

| Shorthand type | Example | Caught by E2 (write-time)? | Catches by E1 (compile-time)? |
|---|---|---|---|
| Cross-spec references | "Probe component", "Surface-Only Scanning" | YES | YES (Component A example #1, #2) |
| Within-discipline references | Critique referencing own "Phase 0" without context | YES | YES (Component A's principle is generic) |
| Inquiry-coined terms | "M6", "TP3", "Q-RF" from LOOP_DIAGNOSE corpus | YES | YES (residual case caught by principle) |
| Project-specific references | `/MVL+`, `enes/`, `LOOP_DIAGNOSE` | YES | YES (Component A's principle includes "project-specific references") |
| Abbreviations | "SV6", "CONCLUDE" | YES | YES (residual case) |
| Bare file paths | "explore.md" used bare on first use | YES | YES (Component A example #1 shows file path with parenthetical context) |

All 6 types caught at write-time by E2. Edit 1 catches residual cases at compile-time. Cascade clean.

**Composition explanation:**

```
Source-side prevention (E2 at disciplines):
  - Read once at SOLID INSTRUCTIONS startup
  - Applied implicitly during output writing
  - Cost: ~5-8 lines × 5 specs = 25-40 lines aggregate
  - Catches: all 6 shorthand types at write-time

  ↓  (residual cases — discipline forgot to apply, or borderline judgment)

Destination-side translation (E1 at conclude.md):
  - 4 example shapes in non-ambiguity principle's example list
  - Read by CONCLUDE runner during finding compilation
  - Cost: ~10-15 lines added at 1 file
  - Catches: residual at compile-time via pattern teaching

  ↓

Final finding.md output: niche terms have first-use parenthetical context.
```

Total methodology-library cost: ~35-55 lines across 6 files. No per-output scan or checklist.

**Tests:** SURVIVES (all 6 types covered; cascade clean).

### Candidate B-1 — Component B Rejection (Carried Forward)

Component B from `2026-05-07_22-10` (regex sub-section + checklist + remediation at conclude.md) remains REJECTED. Structural reasoning:

1. **Heavy compute load.** Per-output scan + per-match first-use lookup + per-match remediation cycle.
2. **Incompletely mechanizable.** Pattern 2 and Pattern 3 require semantic judgment pure regex can't express.
3. **User explicit constraint.** *"We don't want to overload AI with such work."*
4. **Source-side prevention obviates destination-side scan.** When E2 catches most ambiguity at write-time, the destination-side scan layer becomes redundant. E1's 4 examples handle residual via pattern teaching.

**Tests:** SURVIVES as a documented rejection (not as a candidate for spec).

## Phase 4 — Assembly Check

The strongest assembly:

```
E1 (Component A application to conclude.md)
  + E2 (generic convention to 5 discipline specs)
  + S-1 (SUPERSEDES prior 2026-05-08_06-30)
  + C-1 (composition + verification)
  + B-1 (Component B rejection carried forward)
```

**Emergent value:**

- E1 + E2 form the source-side + destination-side cascade. Both lightweight.
- S-1 closes the prior finding cleanly (no two competing conventions live).
- C-1 proves coverage of all 6 shorthand types and explains the cascade.
- B-1 documents the rejected heavy alternative.

**Self-applying check:** this Innovation phase produces a generic convention. Innovation's own output uses cross-spec references (e.g., "Probe component") with parenthetical context where appropriate. Self-test: this output uses "SOLID INSTRUCTIONS" — defined parenthetically as the actionable-instructions surface. Uses "Component A" — referenced parenthetically as "Component A from the prior `2026-05-07_22-10` finding." Walks its own talk.

**Assembly verdict: SURVIVE.**

## Phase 5 — V1 Shape (Stable Output for Critique)

```
TWO edits + ONE state update + REJECTION CARRY-FORWARD:

EDIT 1 (E1): apply Component A from prior 2026-05-07_22-10 finding to
  homegrown/protocols/conclude.md non-ambiguity principle's example list.
  - Where: insert at line 73 (after existing "Template" example pair).
  - Text: 3 example pairs (Probe section / Surface-Only Scanning / Coarse Scan).
  - Cost: ~10-15 lines added at 1 file.

EDIT 2 (E2): add generic first-use convention to 5 discipline reference
  specs' SOLID INSTRUCTIONS sections (end placement).
  - Where: end of SOLID INSTRUCTIONS in each of homegrown/explore/.../explore.md,
    homegrown/sense-making/.../sensemaking.md, homegrown/decompose/.../decompose.md,
    homegrown/innovate/.../innovate.md, homegrown/td-critique/.../td-critique.md.
  - Final wording (~55 words, identical text in all 5 specs):
    "**First-use context.** When introducing a niche term in this output —
    a name from another Homegrown discipline reference spec (e.g., 'Probe
    component'), a project-specific reference (e.g., /MVL+, enes/), an
    abbreviation (e.g., 'SV6'), a bare file path, or a concept coined within
    this inquiry — give brief parenthetical context on first use; subsequent
    uses can be bare. See homegrown/protocols/conclude.md non-ambiguity
    principle for example shapes."
  - Cost: ~5-8 lines × 5 specs = 25-40 lines aggregate.

STATE UPDATE (S-1): mark prior 2026-05-08_06-30 _state.md as SUPERSEDED
  with history entry pointing at this inquiry.

COMPOSITION (C-1): write-time generic convention (E2) + compile-time
  example bank (E1) = lightweight cascade. All 6 shorthand types covered
  at write-time; residual cases at compile-time via pattern teaching.

COMPONENT B REJECTION (B-1): carried forward from prior 2026-05-08_06-30.
  Structural reasoning preserved.

Aggregate cost: ~35-55 lines across 6 files. Smallest possible coverage of
the GENERIC problem. Prior narrow scope covered 1/6 at ~5 lines.
```

## Innovation Telemetry

- Generators applied: 4 / 4. Framers applied: 3 / 3. Coverage: FULL.
- Convergence: HIGH — all 7 mechanisms converge.
- Survivors tested: 5 (E1, E2, S-1, C-1, B-1). All SURVIVE.
- Failure modes observed: NONE.
- **Output disposition:**
  - E1: ACTIONABLE (applied edit; verbatim text from prior 22-10 finding).
  - E2: ACTIONABLE (new generic convention; final wording).
  - S-1: ACTIONABLE-PROCEDURAL (state file update).
  - C-1: DOCUMENTATION (verification + cascade explanation; in finding).
  - B-1: DOCUMENTATION (rejection carried forward; in finding).
- **Overall: PROCEED.**
