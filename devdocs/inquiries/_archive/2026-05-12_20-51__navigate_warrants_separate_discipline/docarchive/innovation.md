# Innovation: Does /navigate warrant being a separate discipline?

## User Input

`devdocs/inquiries/2026-05-12_20-51__navigate_warrants_separate_discipline/_branch.md`

Operating on: `_branch.md` + `exploration.md` + `sensemaking.md` + `decomposition.md`. Decomposition produced 3 pieces (P-α verdict + reasoning + alternatives + Candidate A compatibility; P-β lean-spec sketch + migration; P-δ scaffolding). Innovation generates variations on the lean-spec sketch, the verdict-presentation framing, and the alternatives presentation.

---

## Seed

**Seed type:** Refinement-with-pattern. The verdict (H3 lean extension) is committed; innovation produces concrete drafts.

**Seed:** What does the lean /navigate spec actually look like? How to phrase the specialization-plus-additions framing? How to present H1/H2/H4 alternatives without diluting the H3 recommendation?

---

## Phase 2 — Generate (7 mechanisms; 3 variations each: generic / focused / contrarian)

### M1 — Lens Shifting (Framer)

**Generic — Spec-as-pedagogical-document lens.** View the lean spec as a teaching document for readers new to /navigate. Each section should answer a specific reader question.

→ **Output:** "Lean spec sections: 'What it is' (1 paragraph) + 'How it specializes /explore' (1 paragraph) + 'What's /navigate-specific' (the additions content) + 'Failure modes specific to /navigate' + 'When to invoke'."

**Focused — Spec-as-contract lens.** View the lean spec as an input/output contract for the discipline. Identify the contract elements.

→ **Output:** "Lean spec organized as contract: Input contract (territory; destination; depth); Operation (one: enumeration); Annotation layers (inherited from /explore + /navigate-specific prescriptive Guide); Output format (route-card map); Failure modes."

**Contrarian — No-rewrite lens.** What if H1 (status quo) is correct and the loop is over-correcting again?

→ **Output:** Tested. Sensemaking carefully evaluated H1 vs H3. H1's "zero migration cost" is real but the leanness + explicitness gains justify ~2-3 hours of rewrite. KILL.

---

### M2 — Combination (Generator)

**Generic — Combine specialization-plus-additions framing with the lean spec.** The lean spec's opening section IS the specialization-plus-additions framing made explicit at the spec level.

→ **Output:** "Lean spec opens with: '/navigate is /explore-specialization-over-the-next-move-space with destination-bias and prescriptive Guide annotation layer. /explore mechanics are transcluded by reference. /navigate-specific additions follow.' Direct quote from iter-2 of 19-43's verdict."

**Focused — Combine /staged-explore precedent with /navigate's lean spec.** /staged-explore is documented at `homegrown/runners/staged_explore.md` as a short doc transcluding /explore. /navigate's lean spec could borrow this short-doc style.

→ **Output:** "Lean spec borrows /staged-explore's short-doc structure for the transclusion parts; retains /navigate-specific full sections for the 16-type taxonomy + route-card + Guide."

**Contrarian — Combine lean spec with H2 (FOLD).** Hybrid: do H3's lean rewrite AND H2's /explore expansion partially?

→ **Output:** Over-extends. /explore's identity shouldn't expand if H3 keeps /navigate as separate discipline. KILL.

---

### M3 — Inversion (Framer)

**Generic L1 — "Lean is better" → invert:** "Verbose is better; more content means more coverage." Tested: leanness isn't about removing content; it's about removing boilerplate redundancy. The /navigate-specific content is RETAINED in lean spec.

**Inversion L2 — System-level.** "Spec rewrite preserves canonical-spec status" → invert: "the rewrite IS the new canonical-spec; old version is obsolete." Refined: the lean spec REPLACES the old at the canonical path; old version goes to `navigation_v1.md` for ~3 months.

→ **Output:** Confirms the migration step: rewrite-at-canonical-path; old becomes `navigation_v1.md`.

**Inversion L3 — Architectural.** "/navigate is a discipline" → invert: "/navigate is not a discipline at all (H2/H4)." Tested in sensemaking; rejected for current verdict. STAYS DISCIPLINE.

---

### M4 — Constraint Manipulation (Framer)

**Generic — Add LOOP_DIAGNOSE Candidate A compatibility constraint.** ADD: "the lean spec must be loadable in full by /MVL+ when an inquiry analyzes /navigate."

→ **Output:** "Lean spec ~280-300 lines is comfortably loadable. Identity-defining content (the 'ONE structural operation' claim) stays at top, easily greppable."

**Focused — Add user-language-honor constraint.** ADD: "preserve user-language terms (labyrinth analogy; takeable paths) in the lean spec's intro where natural."

→ **Output:** "Intro paragraph mentions the labyrinth analogy briefly as motivational framing; the formal verb-meaning is project-native ('purposive enumeration of next-move routes with destination-bias and prescriptive guidance')."

**Contrarian — Remove the 'must preserve canonical-spec status' constraint.** What if H2 or H4 is adopted instead?

→ **Output:** Already explored; sensemaking committed H3. KILL.

---

### M5 — Absence Recognition (Generator)

**Generic — Gap inventory.** What's missing from a typical "REFINE recommendation" finding?

1. A concrete sketch of the lean spec's table of contents.
2. A line-count target per section (so the rewriter knows the scope).
3. An evaluation gate confirming H3 was correctly executed.
4. A research-frontier flag for other discipline specs that might also be over-engineered.

→ **Output:** "Add 4 content elements: lean-spec TOC; per-section line-count target; evaluation gate; research-frontier flag."

**Focused — Redesign-level absence.** What SHOULD exist if the project had a clean discipline taxonomy from the start?

→ **Output:** "Open Questions / Research Frontiers: a project-wide review of discipline specs for over-engineering patterns (similar to this /navigate review applied to /sense-making, /comprehend, /decompose, /innovate, /td-critique). Trigger: when /navigate's lean rewrite stabilizes (~3 months post-adoption)."

**Contrarian — What's already there that we don't need to add?** The user has implicit knowledge of the current /navigate spec; the finding doesn't need to restate the current spec's content — just describe the changes.

→ **Output:** "Lean-spec sketch in finding describes DELTA from current spec (what's preserved / transcluded / trimmed), not the full new spec content."

---

### M6 — Domain Transfer (Generator)

**Generic — Software refactoring (Extract Superclass) pattern.** When two classes share substantial logic, extract a common superclass; subclasses become lean.

→ **Output:** "/navigate's lean form is the 'subclass after Extract Superclass refactor' — /explore is the superclass; /navigate inherits + adds specifics. This is a structurally well-understood pattern from OOP."

**Focused — Documentation pattern: 'this builds on X' framing.** Many technical docs open with 'this builds on X' followed by what's added.

→ **Output:** "Lean spec opens with 'This is a specialization of /explore over the next-move-space. /explore's mechanics — scan-signal-probe; Step 0 declarations; the 5 annotation layers; the 11 failure modes — are inherited by transclusion. The following sections describe /navigate-specific additions.'"

**Contrarian — Dramatic-rewrite pattern.** Pretend /navigate is new and write spec from scratch.

→ **Output:** Loses prior accumulated content; not the right approach for refinement. KILL.

---

### M7 — Extrapolation (Generator)

**Generic — Pattern accumulation across disciplines.** If H3 lean-extension pattern works for /navigate, it might apply to other disciplines that are specializations.

→ **Output:** "Research-frontier: review other disciplines for similar 'lean-extension' opportunities. Trigger after /navigate's lean rewrite stabilizes (~3 months)."

**Focused — Autonomy-path extrapolation.** At L3+ autonomy, lean spec is easier for autonomous selectors to consume.

→ **Output:** "Forward-compatibility note: lean spec aligns with autonomous selection at L3+ (shorter spec → faster context loading → more reliable selector use)."

**Contrarian — Future-correction extrapolation.** Iteration 3 might revise this verdict.

→ **Output:** "Monitoring entry: observe whether the lean spec preserves all needed content after 3+ /navigate runs adopt it. If content-loss observed, revise."

---

## Mechanism coverage telemetry

- Generators: 4/4; Framers: 3/3; coverage FULL.
- Convergence: YES — 7 mechanisms converge on: lean-spec with explicit specialization-plus-additions framing + LOOP_DIAGNOSE compatibility + research-frontier for project-wide review.

---

## Phase 3 — Test (5-test cycle)

| Output | Novel? | Survives scrutiny? | Fertile? | Actionable? | Mech-independent? |
|---|---|---|---|---|---|
| Spec-as-pedagogical-document framing | Yes | Yes | Yes | Yes (TOC sections) | Yes (M2 converges) |
| Spec-as-contract framing | Yes | Yes | Yes | Yes (organization) | Yes (M6 converges) |
| Direct quote from iter-2 of 19-43 verdict in lean spec opening | Yes | Yes | Yes | Yes | Yes (M6 converges) |
| /staged-explore short-doc style for transclusion | Yes | Yes | Yes | Yes | Yes (M2 converges) |
| Migration step: old → navigation_v1.md | Yes | Yes | Yes | Yes | Yes |
| LOOP_DIAGNOSE compatibility constraint | Yes | Yes | Yes | Yes | Yes (M4g converges) |
| User-language honor (labyrinth in intro) | Yes | Yes | Yes | Yes | Yes |
| 4 content additions (TOC + line counts + eval gate + research-frontier) | Yes | Yes | Yes | Yes | Yes (M5g converges) |
| Research-frontier: project-wide review | Yes | Yes | Yes | Yes | Yes (M7g converges) |
| Lean-spec sketch describes DELTA only | Yes | Yes | Yes | Yes | Yes (M5contra) |
| 'This builds on X' opening framing | Yes | Yes | Yes | Yes | Yes (M6f) |
| Forward-compatibility L3+ note | Yes | Yes | Yes | Yes | Yes (M7f) |
| Monitoring entry for iteration 3 possibility | Yes | Yes | Yes | Yes | Yes (M7contra) |
| Extract Superclass pattern analogy | Yes | Yes | Yes | Yes | Yes (M6g) |

14 outputs tested; 14 ACTIONABLE.

Killed: M1contra (no-rewrite), M2contra (hybrid H2+H3), M4contra (remove canonical-status constraint), M6contra (dramatic rewrite from scratch).

---

## Per-piece variations

### P-α (verdict + reasoning + alternatives + Candidate A): size

- **α-MIN:** verdict statement + 3-line reasoning per option + 1-paragraph ambiguity acknowledgment + 1-paragraph Candidate A. ~40 lines.
- **α-STD (DEFAULT):** verdict + per-option full reasoning + ambiguity acknowledgment + alternatives presentation + Candidate A application. ~80 lines.
- **α-RICH:** α-STD + worked counterfactual (what if H2 were adopted) + research-frontier project-wide-review note. ~120 lines.

### P-β (lean-spec sketch + migration + risk mitigation): completeness

- **β-MIN:** TOC sketch + migration steps. ~25 lines.
- **β-STD (DEFAULT):** TOC sketch + per-section line-count target + DELTA-from-current-spec narrative + migration steps + content-loss-risk mitigation. ~60 lines.
- **β-RICH:** β-STD + opening-paragraph drafts (2-3 variants of the lean spec's intro) + per-section transition phrases. ~100 lines.

### P-δ (scaffolding): completeness

- δ-MIN / δ-STD (DEFAULT) / δ-RICH per CONCLUDE template.

---

## Assembly check

ACTIONABLE assembly: **α-STD + β-STD + δ-STD + content additions: lean-spec TOC + DELTA-narrative + LOOP_DIAGNOSE compatibility verification + research-frontier project-wide review + L3+ forward-compat + monitoring entry**.

Emergent property: the finding sets a **project precedent for lean-extension-document refactoring** — future inquiries facing similar over-engineering questions can apply this template.

### Axis coverage

| Axis | Variations |
|---|---|
| P-α size | MIN / STD / RICH ✓ |
| P-β completeness | MIN / STD / RICH ✓ |
| P-δ completeness | MIN / STD / RICH ✓ |

---

## Disposition

### ACTIONABLE
- α-STD + lean-spec TOC + DELTA narrative + Candidate A verification + research-frontier + L3+ forward-compat + monitoring entry.
- β-STD with concrete section-by-section line counts.
- δ-STD scaffolding.

### DEFERRED
- MIN/RICH variants — user-preference fallback/extension.
- β-RICH opening-paragraph drafts — activate if writers need more guidance.

### RESEARCH FRONTIER
- Project-wide discipline-spec review for over-engineering patterns.

### KILLED
- M1contra; M2contra; M4contra; M6contra.

---

## Telemetry

- 7/7 mechanisms. Coverage FULL.
- Convergence: YES on lean-spec + transclusion + Candidate A compatibility + research-frontier.
- 14 ACTIONABLE; 0 deferred-because-single-mechanism; 4 killed.
- Emergent property: project precedent for lean-extension-document refactoring.
- Failure modes: NONE.

**Overall: PROCEED to Critique.**
