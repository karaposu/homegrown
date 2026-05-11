# Innovation — Discipline-corpus emerging pattern

## User Input

```
Generate concrete artifact proposals per piece (Q1, Q2, Q3). Mechanisms minimum
1G+1F per piece. Respect constraints: descriptive-only formalization; C3.4 visual
marker for Q1; hedging-allowed verdict for Q2; phase-fit "brushing teeth" rollout
for Q3.

Output disposition: ACTIONABLE / DEFERRED / RESEARCH FRONTIER.
```

---

## Intuition (Direction Seed)

**Context** — three artifact-shape decisions; sensemaking already named the patterns. The work is concrete: where does each artifact live, what shape does it take, how does the corpus migrate.

**Valuation** — the user explicitly framed this as "brushing teeth" (descriptive maintenance). Solutions that minimize blast radius and preserve organic emergence are valued over heavy formalization.

**Motivation** — produce concrete artifacts a maintainer could implement tomorrow without re-running the inquiry.

---

## Piece Q1 — Step Refinement primitive artifact

### Axis-coverage check

Two orthogonal axes:
- **Where it lives:** new file / addendum / glossary section / split across files
- **Form of document:** definition + shape + examples / definition + shape only / glossary entry / spec with audit list

### Mechanism applications

| Mechanism | Variation | Candidate |
|---|---|---|
| Constraint Manipulation (focused) | "Must not duplicate placement convention's content" | **Q1.1:** Glossary entry in `enes/glossary.md` (or new file `enes/step_refinement.md`) defining the primitive + 4-element shape + 2 subtypes + cross-reference to placement convention. Placement convention adds a one-line cross-reference. No duplication. |
| Combination (focused) | Combine primitive definition with prior inquiry's C3.4 visual marker | **Q1.2:** New file `enes/step_refinement.md` defining BOTH the primitive AND the visual marker convention (italic prefix). Single canonical home for the structural concept and its typographic application. |
| Domain Transfer (focused) | How do other specs define "type primitives"? — RFC 2119 / ISO standards / Kubernetes CRD | **Q1.3:** Section in `enes/discipline_taxonomy.md` titled "Spec Primitives" alongside the existing "4 categories" section. Treats Step Refinement as a corpus-level primitive within the existing taxonomy file. |
| Absence Recognition (focused) | What's missing? Auditable surface for "is this rule a Step Refinement?" | **Q1.4:** Add an audit table to the spec listing every Step Refinement currently in the corpus by discipline, step/component, anchor-link, and subtype. Makes the primitive concrete via examples. |
| Inversion (contrarian) | Don't name; leave rules as-is | **Q1.5:** No formalization. Killed by sensemaking — the user explicitly asked for naming; descriptive formalization is the deliverable. |
| Lens Shifting | Under growth conditions, naming compounds in value | Confirms Q1.1/Q1.2 over Q1.5 |
| Extrapolation (focused) | As more disciplines/rules added, which form scales? | Q1.1 scales linearly (one entry per addition); Q1.2 scales the same; Q1.4 scales N (audit table grows with each rule, drift risk) |

### Test (5 criteria)

| Candidate | Novelty | Scrutiny | Fertility | Actionability | Mechanism Indep. | Verdict |
|---|---|---|---|---|---|---|
| Q1.1 (glossary entry) | Low | Strong — minimal, no duplication | Medium | High | 2 mechanisms (CM + DT) | **SURVIVE** (lighter alternative) |
| Q1.2 (new file `enes/step_refinement.md`) | Medium | Strong — single canonical home for primitive + visual marker; respects placement convention | High — opens future "primitive register" for other corpus primitives | High | **3 mechanisms** (Combination + DT + Extrapolation) | **SURVIVE** (primary) |
| Q1.3 (section in discipline_taxonomy) | Low | Weak — taxonomy file is for discipline categories, not corpus primitives; mixes concerns | Low | High | 1 mechanism | KILL (concern-mixing) |
| Q1.4 (audit table) | Medium | Weak — drift risk grows with corpus | Medium | Medium | 1 mechanism | DEFERRED (could be auto-generated later) |
| Q1.5 (don't name) | Low | Killed by sensemaking | — | — | — | KILL (violates inquiry deliverable) |

### Disposition

- **Q1.2 — ACTIONABLE.** Multi-mechanism convergent. Concrete artifact: new file `enes/step_refinement.md` containing (a) primitive definition; (b) 4-element shape spec; (c) two subtypes with corpus examples; (d) visual marker convention from prior inquiry's C3.4; (e) cross-reference to `enes/discipline_rule_placement.md`. The placement convention gets a one-line cross-reference back. Single canonical home.

- **Q1.1 — ACTIONABLE (lighter alternative).** If `Q1.2` feels heavy, a glossary entry in `enes/glossary.md` (creating it if it doesn't exist) achieves most of the same value with less ceremony. Trade-off: loses the visual-marker bundling.

- **Q1.4 — DEFERRED.** Audit table is useful but drift-prone if maintained by hand. **Revival trigger:** when tooling exists to auto-generate the audit (e.g., a script that greps for italic-prefix `*Refinement note:*` patterns and emits a table), include the table in `enes/step_refinement.md`. **Why if revived:** discoverability + maintenance backstop.

---

## Piece Q2 — Discipline Output Contract artifact

### Axis-coverage check

Three orthogonal axes:
- **Where it lives:** new file in `enes/` / new file in `homegrown/contracts/` / section in `homegrown/protocols/resume.md` / addendum to placement convention
- **Verdict-form flexibility:** strict / hedging-allowed / fully qualitative
- **Structural sections specification:** explicit list / per-discipline guidelines / minimum-set + extension

### Mechanism applications

| Mechanism | Variation | Candidate |
|---|---|---|
| Domain Transfer (focused) | `homegrown/contracts/alignment_control.md` is the existing "shared vocabulary contract" pattern; mirror it | **Q2.1:** New file `homegrown/contracts/discipline_output.md` defining the contract (verdict line + structural sections) modeled on `alignment_control.md`'s style. Located alongside other contracts. |
| Combination (focused) | Combine contract with `homegrown/protocols/resume.md`'s existing aspirational verdict-line behavior | **Q2.2:** Section IN `homegrown/protocols/resume.md` formalizing the verdict-line contract resume.md already aspires to. Closes the loop where the gap is observable. |
| Constraint Manipulation (focused) | Verdict line MUST allow hedging | **Q2.3:** Verdict format = `**Verdict:** PROCEED \| FLAG \| RE-RUN [— optional descriptor]`. Descriptor carries hedging or qualitative annotation. Sensemaking's "saturation moderate" → "PROCEED — saturation moderate." |
| Absence Recognition (focused) | What canonical statement is missing? | **Q2.4:** Define 3-section minimum: `## User Input` (start) + body (discipline-specific) + `## Self-Assessment` ending with verdict line. Existing discipline outputs largely already have these; the contract makes the minimum explicit. |
| Inversion (contrarian) | Don't formalize; let resume.md adapt to each discipline's idiosyncratic self-assessment | **Q2.5:** No contract; update resume.md to handle idiosyncratic forms. Killed by phase-fit (resume.md becomes complex; uniform contract is simpler). |
| Lens Shifting | Under multi-runner conditions, uniform contract value compounds | Confirms uniform contract for the growth case |
| Extrapolation (focused) | As disciplines added, contract must be discoverable | Confirms `homegrown/contracts/` location (discoverable) over `enes/` (more conceptual) |

### Test (5 criteria)

| Candidate | Novelty | Scrutiny | Fertility | Actionability | Mechanism Indep. | Verdict |
|---|---|---|---|---|---|---|
| Q2.1 (new contract file) | Medium | Strong — modeled on existing `alignment_control.md`; contracts have a clear home | High — opens contracts directory as canonical location for shared spec layer | High | **2 mechanisms** (DT + Extrapolation) | **SURVIVE** (primary location) |
| Q2.2 (section in resume.md) | Low | Medium — resume.md grows; mixes "how to resume" with "what disciplines must produce" | Medium | High | 1 mechanism | REFINE → cross-reference Q2.1 from resume.md instead |
| Q2.3 (hedging-allowed format) | Low | Strong — preserves qualitative-discipline self-assessment without forcing false precision | High — verdict line becomes uniformly readable while carrying nuance | High | **2 mechanisms** (CM + LS) | **SURVIVE** (verdict format spec, embedded in Q2.1) |
| Q2.4 (3-section minimum) | Medium | Medium — forces some disciplines to add sections they don't currently have | Medium | Medium | 1 mechanism | REFINE → embed in Q2.1 as the "structural sections" portion |
| Q2.5 (don't formalize) | Low | Killed by phase-fit (resume.md complexity) | — | — | — | KILL (inversion fails) |

### Disposition

- **Q2.1 + Q2.3 + Q2.4 (assembly) — ACTIONABLE.** Concrete artifact: new file `homegrown/contracts/discipline_output.md` containing (a) the contract definition; (b) the hedging-allowed verdict format from Q2.3; (c) the 3-section minimum from Q2.4; (d) cross-reference from `homegrown/protocols/resume.md` (resume.md gets a one-line note pointing at the contract). Modeled on `alignment_control.md`'s structure (Loading note + sections for purpose / non-goals / contract / record shape / failure modes).

- **Q2.2 — REFINED INTO Q2.1.** Resume.md gets a cross-reference rather than holding the contract itself; concerns stay separated.

---

## Piece Q3 — Verdict-line rollout strategy

### Axis-coverage check

Two orthogonal axes:
- **Rollout cadence:** blanket retroactive / touch-as-worked-on / hybrid / pilot-then-incremental
- **Per-discipline tailoring:** uniform format / discipline-specific guidance / minimum + extension

### Mechanism applications

| Mechanism | Variation | Candidate |
|---|---|---|
| Domain Transfer (focused) | DB migrations / library upgrades use incremental + backward-compat | **Q3.1:** Touch-as-worked-on. Each discipline closes the gap when next touched (refactor, new inquiry, or maintenance pass). resume.md backward-compat stays in place during transition. |
| Inversion (focused) | All 5 at once | **Q3.2:** Blanket retroactive. Killed by phase-fit ("brushing teeth, not heavy machinery"). |
| Combination (focused) | Bundle with prior inquiry's C1.1 / C2.2 / C3.4 refactors | **Q3.3:** When a discipline is touched for the prior inquiry's refactors (e.g., applying italic refinement-note prefix), also add the verdict line. Two refactors per discipline-touch = better cost-amortization. |
| Constraint Manipulation (focused) | "No edit touches >3 lines per refactor pass" | **Q3.4:** Atomic per-discipline updates. One verdict line added; no other changes. Minimum blast radius. |
| Absence Recognition (focused) | First-discipline pilot is missing | **Q3.5:** Pilot on one discipline first. Validate the format works in practice (an LLM running the discipline produces a valid verdict line per the contract); then proceed to others. Pilot candidate: the next discipline that's actively touched after this inquiry. |
| Lens Shifting | Active vs. stable disciplines have different rollout costs | **Q3.6:** Hybrid — active disciplines (sensemaking, td-critique have been recently touched) get the verdict line via touch-as-worked-on quickly; stable disciplines wait for the next touch (could be deferred indefinitely with no cost). |
| Extrapolation (focused) | New disciplines should adopt contract from inception | Implies contract is in `homegrown/contracts/` (discoverable to new-discipline authors). Confirms Q2.1's location. |

### Test (5 criteria)

| Candidate | Novelty | Scrutiny | Fertility | Actionability | Mechanism Indep. | Verdict |
|---|---|---|---|---|---|---|
| Q3.1 (touch-as-worked-on) | Low | Strong — respects phase-fit; minimum forcing | High — generalizable rollout pattern for future addenda | High | **2 mechanisms** (DT + LS) | **SURVIVE** (primary cadence) |
| Q3.2 (blanket retroactive) | Low | Killed by phase-fit | — | — | — | KILL (inversion fails) |
| Q3.3 (bundle with prior inquiry refactors) | Medium | Strong — efficient (one touch per discipline closes both gaps); small marginal cost | Medium | High | **1 mechanism** (Combination) | **SURVIVE** (efficiency optimization) |
| Q3.4 (atomic per-discipline) | Low | Medium — atomicity is good but doesn't determine when to touch | Low | Medium | 1 mechanism | REFINE → folds into Q3.1's per-touch behavior |
| Q3.5 (first-discipline pilot) | Medium | Strong — validates format before scaling; reduces format-mistake cost | Medium | High | **2 mechanisms** (Absence + LS) | **SURVIVE** (pilot first; validates contract format) |
| Q3.6 (hybrid active/stable) | Medium | Strong — matches actual corpus state | Medium | High | **1 mechanism** (LS) | REFINE → Q3.1 + Q3.5 already covers this |

### Disposition

- **Q3.5 → Q3.1 (sequenced) — ACTIONABLE.** Concrete strategy: (a) **Pilot phase** — pick one discipline (likely sensemaking or explore — the next touched after the inquiry — or whichever is most actively maintained right now); add verdict line per Q2.1's format; verify it works in practice (an LLM running the discipline generates a valid hedging-allowed verdict line). (b) **Incremental phase** — once pilot validates, all remaining disciplines close the gap via touch-as-worked-on. resume.md's backward-compat stays in place during transition (existing fallback covers disciplines not yet touched).

- **Q3.3 — ACTIONABLE (bundled with prior inquiry).** When a discipline is touched for the prior inquiry's C1.1 (one-line A3 footer) or C2.2 (heading-derived B2 list) or C3.4 (italic refinement-note prefix), also add the verdict line per Q2.1. Single touch covers both inquiries' refactors. This is the efficiency optimization — Q3.1 and Q3.3 are compatible (Q3.3 just opportunistically rolls out Q3.1 when the prior-inquiry refactors are applied).

---

## Phase 3.5 — Assembly Check

### Survivors

- **Q1.2** — `enes/step_refinement.md` (Step Refinement primitive)
- **Q2.1 + Q2.3 + Q2.4** — `homegrown/contracts/discipline_output.md` (Discipline Output Contract)
- **Q3.5 → Q3.1 + Q3.3** — Pilot then incremental rollout, bundled with prior inquiry where possible

### Assembly question

Do the survivors combine into something emergent that none of them are individually?

**Component-level read:** three artifacts (one new file each in `enes/`, `homegrown/contracts/`, plus a rollout strategy that's a process not a file). Combined application establishes the corpus's "discipline meta-spec" layer — the explicit specifications of HOW disciplines are structured.

**Meta-level emergent assembly:**

> **A1 — Discipline meta-spec cross-reference cluster.** With Step Refinement (host primitive) + Discipline Output Contract + the existing placement convention, the corpus has at least 3 meta-spec primitives describing how disciplines are structured. `enes/discipline_taxonomy.md` (which already enumerates discipline categories) becomes the natural index point — add cross-references from the taxonomy to all three meta-spec primitives. Future additions (e.g., a 4th meta-spec primitive) drop into the same index.

**Test of assembly:**

| Criterion | Result |
|---|---|
| Novelty | Medium — extends an existing index file with new cross-references |
| Scrutiny | Strong objection: "premature codification — you've named 2 patterns; promote to index after each survives." Defended: assembly is opt-in cross-reference, not retroactive editing |
| Fertility | High — establishes meta-spec layer as a recognized corpus structure |
| Actionability | Concrete: 3 cross-reference lines added to `enes/discipline_taxonomy.md` |
| Mechanism Independence | Convergent on three pieces × multiple mechanisms each |

### Disposition

- **A1 — DEFERRED.** Single-assembly emergent candidate; depends on per-piece artifacts landing first. **Revival trigger:** after `enes/step_refinement.md` and `homegrown/contracts/discipline_output.md` are both shipped AND survive 30 days of use without re-edit, add the cross-references to `enes/discipline_taxonomy.md`. **Why if revived:** establishes the meta-spec layer as a discoverable cluster, enables future meta-spec primitives to drop in.

---

## Mechanism Coverage (Telemetry)

| Piece | Generators applied | Framers applied | Convergence | Survivors tested |
|---|---|---|---|---|
| Q1 | 4/4 (Combination, Absence Recognition, Domain Transfer, Extrapolation) | 3/3 (Constraint Manipulation, Inversion, Lens Shifting) | YES — 3 mechanisms converge on Q1.2 | 5 candidates / 2 SURVIVE / 1 DEFERRED / 2 KILL |
| Q2 | 4/4 (Combination, Domain Transfer, Absence Recognition, Extrapolation) | 3/3 (Constraint Manipulation, Inversion, Lens Shifting) | YES — assembly Q2.1+Q2.3+Q2.4 from multiple mechanisms | 5 candidates / 1 SURVIVE-as-assembly / 2 REFINE-into / 1 KILL |
| Q3 | 4/4 (Combination, Domain Transfer, Absence Recognition, Extrapolation) | 3/3 (Constraint Manipulation, Inversion, Lens Shifting) | YES — Q3.5+Q3.1 multi-mechanism convergent | 6 candidates / 3 SURVIVE / 2 REFINE-into / 1 KILL |
| Assembly | (cross-piece) | (cross-piece) | YES — meta-spec layer emergent | 1 assembly (DEFERRED) |

**Failure modes observed:** none.
- Premature evaluation avoided (full mechanism set generated before testing).
- Single-mechanism trap avoided (all primary survivors are multi-mechanism convergent).
- Early frame lock avoided (multiple framings tested per piece).
- Innovation without grounding avoided (every candidate tested against 5 criteria).
- Survival bias avoided (Inversion contrarians produced and legitimately killed for structural reasons — Q1.5 violates inquiry deliverable, Q2.5 violates phase-fit, Q3.2 violates phase-fit).
- Mechanism exhaustion avoided.

**Overall: PROCEED** (sufficient coverage + convergence per piece + tested survivors with disposition labels).

---

## Output Summary (for Critique)

### ACTIONABLE proposals (multi-mechanism convergent; ready for spec edit)

1. **Q1.2** — Create `enes/step_refinement.md` defining the Step Refinement primitive (4-element shape + 2 subtypes + visual marker). Add one-line cross-reference from `enes/discipline_rule_placement.md`.
2. **Q1.1** — Lighter alternative: glossary entry in `enes/glossary.md` (if Q1.2 feels heavy). Trade-off: loses visual-marker bundling.
3. **Q2.1+Q2.3+Q2.4** — Create `homegrown/contracts/discipline_output.md` defining the Discipline Output Contract (verdict line with hedging-allowed format + 3-section minimum). Modeled on existing `alignment_control.md`. Add cross-reference from `homegrown/protocols/resume.md`.
4. **Q3.5 → Q3.1 + Q3.3** — Pilot rollout on one discipline (next-touched after the inquiry); validate the format; then touch-as-worked-on for the remaining 4 disciplines. When prior inquiry's refactors land on a discipline, bundle the verdict-line addition.

### DEFERRED proposals (single-mechanism survivors; preserve option)

- **Q1.4** — Auto-generated audit table for Step Refinements. Revival: when tooling exists to grep + emit table.
- **A1** — Cross-references in `enes/discipline_taxonomy.md` linking the meta-spec primitives. Revival: after `enes/step_refinement.md` and `homegrown/contracts/discipline_output.md` ship and survive 30 days.

### KILLED (with seeds)

- **Q1.3** (place in `discipline_taxonomy.md` directly) — taxonomy file is for discipline categories not corpus primitives; concern-mixing. **Seed:** the taxonomy file IS a natural index point for cross-references (folded into A1 as DEFERRED).
- **Q1.5** (don't name) — violates inquiry deliverable. **Seed:** if future evidence suggests naming creates more confusion than clarity (e.g., maintainers don't use the term), consider de-naming with cause analysis.
- **Q2.5** (don't formalize contract) — violates phase-fit (resume.md complexity). **Seed:** if uniform contract proves to suppress useful per-discipline variation, consider per-discipline contracts as a refinement.
- **Q3.2** (blanket retroactive) — violates phase-fit. **Seed:** if a future event makes blanket-touch cheap (e.g., a corpus-wide tooling pass), revisit.
