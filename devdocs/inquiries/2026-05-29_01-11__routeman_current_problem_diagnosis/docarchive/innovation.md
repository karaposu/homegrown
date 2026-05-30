## User Input

`devdocs/inquiries/2026-05-29_01-11__routeman_current_problem_diagnosis/_branch.md` (prior outputs: surfacing.md, sensemaking.md, decomposition.md; workspace in context). Generate candidate root-cause FRAMINGS of routeman's current problem (diagnostic candidates), not solutions.

---

# Structural Innovation — Candidate Root-Cause Framings for Routeman's Problem

## Phase 1 — Seed + Methodology-Mode Consideration

**Seed** (type: Dissatisfaction + Question): "Sensemaking proposes a two-layer defect (structural loop-binding + process non-propagation). But is *that* the right framing of the ROOT, or do competing framings of 'what the current problem fundamentally is' survive better?"

**Methodology-mode consideration (required):**
- **Inherited mode:** the seed asks to "generate candidate root-cause FRAMINGS… not solutions" → competing diagnoses of the same evidence. Diagnoses-as-frames lean on **Framers** (Lens-shift, Inversion, Constraint) with Generators surfacing non-obvious roots → effectively **Generator-weighted-exploration crossed with Framer-heavy framing**.
- **Alternative mode named:** Standard-default (balanced 4G+3F).
- **What follows under the alternative:** balanced coverage would give equal Generator spread; acceptable, but a pure diagnosis is a *framing* act, so under-weighting Framers would miss competing lenses.
- **Decision:** run **all 7 mechanisms** (full coverage), leaning on the three Framers as primary diagnosis-generators. `Methodology-mode: full-coverage, framer-primary; reason: a diagnosis is a frame on fixed evidence — Framers are the workhorses, Generators surface non-obvious roots.`

## Phase 2 — Generate (7 mechanisms)

### Lens Shifting (Framer)
- *generic (spec-text lens):* The problem = the loop-binding passages §1.2/§1.4/§1.5. → **cand a**
- *focused (process lens):* Re-evaluated under "why does this keep recurring," the problem = findings never propagate to the spec; the text is a symptom. → **cand b**
- *contrarian (reader/usage lens):* The problem = no canon-cross-check at spec-read time; the spec is inherently mis-readable, so guard the reading. → **cand c**

### Inversion (Framer)
- Belief "routeman has a defect" → invert → "no defect; the recurrence reflects something else." *Depth-check (invert again, system-level):* "the defect is real but MIS-LOCATED in routeman — it's a project-wide gap (meaning-findings with no spec-update step) that routeman merely surfaces first." → **cand d**
- Belief "loop-binding language is a defect" → invert → "loop-binding is CORRECT; the standalone push (20-35) is the error." *Depth-check, system-level:* "routeman genuinely IS a Boundary discipline; canon line 109 is being over-applied." → **cand e** (contrarian; must be tested hard per Survival-Bias guard).

### Constraint Manipulation (Framer) — both directions mandatory
- *REMOVE* "a discipline spec must state its loop-role in its identity" → routeman's identity collapses to §1.1 (generic); problem dissolves into "identity over-specified by loop-role." → **cand f**
- *ADD* "a discipline spec may describe ONLY the operation; never its composition/runner-role" → §1.2/§1.5 become category errors (composition content in the identity layer). → **cand g**

### Absence Recognition (Generator) — patch + redesign mandatory, bidirectional
- *patch-level (what's missing):* a dedicated "where this typically runs (context note)" slot is absent — so loop-role gets folded INTO identity (contrast critique line 41, which HAS a Source note). → **cand h**
- *redesign-level (what's missing if designed fresh):* a uniform "identity = operation only; composition = separate" discipline template. → reinforces **cand g**
- *redesign-level (already-present-in-different-form):* the project ALREADY separates disciplines from runners (`worker_loop_logic.md`: "disciplines do the thinking; the runner does the plumbing"). Routeman's spec simply doesn't honor that existing separation. → **cand i**

### Domain Transfer (Generator) — native-domain source required
- *native (software):* this is **leaky abstraction / caller-coupling** — a module that hardcodes assumptions about its caller instead of taking them as injected parameters. Routeman hardcodes "the loop" into identity rather than accepting state+goal as injected. Fix-pattern analog: dependency injection. → **cand j**
- *deliberately-different (definitions/law):* "a definition that conflates essence with typical use" — like defining a knife as "what a chef chops with" (essence = cutting implement; kitchen = typical context). Reinforces **cand f/g**.
- *deliberately-different (medicine):* chronic condition treated symptomatically — 4 findings = 4 painkillers; the underlying condition (spec) untreated. Reinforces **cand b/d**.

### Extrapolation (Generator)
- Trend: 4 inquiries circling, spec unchanged → extend → inquiries #6/#7 keep firing; worse, as the project moves to multi-head + standalone reuse (the end-goal), a loop-bound identity flips from "confusion-generator" to "active blocker." → **cand k** (significance/stakes frame: "do nothing" has rising cost).

### Combination (Generator)
- Connect *identity-relational* (sensemaking) + *caller-coupling* (cand j) + *missing context-note slot* (cand h) → emergent: **the root is one thing seen three ways — routeman's identity is defined relative to its caller because the spec has no structural slot separating "what the operation is" from "where it's typically called," so it defaults to folding caller-context into identity.** → **cand l** (synthesis).

## Inherited Frame Audit (between Generate and Test)

**Seed's central assumption (inherited from sensemaking):** "routeman's problem IS a two-layer (structural + process) defect."
**Challenge scan:** Is it challenged in the candidate set? **YES, explicitly** — cand e challenges "there is a defect at all" (frame-rejection); cand d challenges the LOCATION ("mis-located in routeman; project-wide"); cand f/g challenge the CHARACTER ("over-specification / category error" rather than "loop-role-as-precondition"). → **Audit does NOT fire** (multiple explicit challenges present; the inherited frame is not inherited un-challenged).

## Consolidation — distinct competing framings

The 12 candidates cluster into 6 distinct root-cause framings:

- **F1 — Localized text defect** = {cand a}: the root is the specific loop-binding passages §1.2/§1.4/§1.5.
- **F2 — Identity/composition category error** = {f, g, i, j, l}: the root is that the spec folds *composition-layer / caller-context* into the *discipline-identity* layer (a disciplines-vs-runners separation-of-concerns violation). The passages are the symptom; the category error is why they exist.
- **F3 — Process / non-propagation defect** = {b, d, medicine-transfer}: the root is the absence of a finding→spec propagation step; meaning-findings accumulate without editing the artifact, so the defect regenerates (and the gap is arguably project-wide).
- **F4 — Read-time guard absence** = {c}: the root is the absence of a canon-cross-check at spec-read time.
- **F5 — Contrarian: no defect / standalone-reading is the error** = {e}: routeman genuinely is Boundary; canon 109 is over-applied.
- **F6 — Trajectory liability** = {k}: whatever the root, its significance compounds as the project scales to multi-head/standalone reuse.

## Phase 3 — Test (5-test cycle per framing)

| Framing | Novelty | Scrutiny survival | Fertility | Actionability | Mechanism independence | Disposition |
|---|---|---|---|---|---|---|
| **F1** localized text | LOW (restates sensemaking's structural layer) | Survives, but strongest objection ("fixing 3 passages without addressing WHY they're there risks recurrence") points past it to F2 | MED (→ a concrete edit) | HIGH | Single-ish (lens-shift + reading) | **SURVIVES as the SURFACE layer of F2 — not the root** |
| **F2** category error | **HIGH** (reframes "wrong text" → "wrong content-LAYER": composition smuggled into identity) | **Survives strongly.** Objection "isn't this just F1 reworded?" fails — F2 *explains* F1 (why the passages exist; why critique-line-41-style separation was never applied) and is grounded in the project's own disciplines-vs-runners separation + the sense-making contrast | **HIGH** (opens fix direction + generalizes to other disciplines) | HIGH | **4 mechanisms converge independently** (Constraint-REMOVE/ADD, Domain-transfer caller-coupling, Absence missing-slot, Combination) from *different* grounds → robust, not spurious | **ACTIONABLE — convergence winner; the ROOT** |
| **F3** non-propagation | HIGH (the "why it persists" layer) | Survives — 4 inquiries / spec-unchanged is empirical. Objection "routeman's or the project's problem?" → for this scoped diagnosis it is the persistence layer (cand d widens it project-wide) | HIGH (→ a finding→spec propagation step) | MED (process change; nameable but beyond this diagnostic scope) | Lens-shift + Inversion(d) + Domain-transfer(medicine) — multiple | **ACTIONABLE — the second (process) layer; complements F2** |
| **F4** read-time guard | MED | Weaker — presupposes the spec stays defective; if F2's fix lands, the guard is redundant | LOW-MED | MED | Single (lens-shift) | **DEFERRED** (fallback only; revival trigger: "if the spec cannot be edited") |
| **F5** contrarian no-defect | HIGH | **KILLED as root** — defeated by (i) §1.1-vs-§1.2 *internal* inconsistency (holds without canon), (ii) the empirical 4-inquiry oscillation, (iii) 20-35's HIGH-confidence standalone adjudication + cross-discipline confirmation. **BUT its surviving residue sharpens F2:** the boundary ROLE is legitimate — only *encoding it as an identity precondition* is the defect | — | — | Inversion | **KILLED as root; PRESERVED as the adversarial test that sharpens F2 to "role-OK / precondition-BAD"** |
| **F6** trajectory liability | MED | Survives as a *stakes* frame, not a root | MED (affects prioritization) | Raises stakes (argues against "do nothing") | Extrapolation only | **DEFERRED → feed to Critique as a stakes-modifier** |

*Survival-Bias guard explicitly exercised:* F5 (the most uncomfortable, frame-rejecting candidate) was generated AND tested hard rather than skipped — it failed on structural grounds, not on discomfort, and its residue was retained. The Inherited-Frame challenge candidates (d, e, f) were generated, so the uncomfortable directions were not "never-generated."

## Assembly Check

Combining the survivors yields an **emergent layered diagnosis** more valuable than any single framing:

> **ROOT (F2):** routeman's spec commits a *category error* — it bakes composition-layer / caller-context (its typical loop-role) into the discipline-**identity** layer, violating the project's own disciplines-vs-runners separation. 
> **SURFACE / SYMPTOM (F1):** this manifests as the specific loop-binding passages §1.2 ("consumes the artifacts of a completed cognitive cycle / without prior cognitive work… nothing to enumerate"), §1.4 (cycle-output-only `current state`), §1.5 ("operates between cognitive cycles"), in tension with the generic §1.1. 
> **PRECISE BOUNDARY (F5-sharpened):** the boundary *role* is legitimate (taxonomy); the defect is encoding that role as an identity *precondition* rather than as a runner-owned context note. 
> **PERSISTENCE (F3):** it survives because meaning-layer findings never propagate into the spec — four inquiries corrected readings; none edited the artifact; so the category error keeps regenerating the loop-bound reading. 
> **STAKES (F6):** the cost compounds as the project scales to multi-head / standalone reuse.

This assembly gives Critique a structured target: a root (F2), its symptom (F1), its persistence mechanism (F3), its precise boundary (F5-residue), and its stakes (F6).

## Mechanism Coverage (Telemetry)

- Generators applied: **4 / 4** (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- Framers applied: **3 / 3** (Lens Shifting, Constraint Manipulation [both directions], Inversion [depth-checked to system-level twice])
- Convergence: **YES** — 4 independent mechanisms converge on **F2** (category error) → HIGH confidence in the root framing
- Survivors tested: 6 / 6 framings run through the 5-test cycle
- Inherited Frame Audit: ran; did NOT fire (inherited two-layer frame explicitly challenged by cands d/e/f)
- Failure modes observed: **none** — Premature Evaluation avoided (generate-then-test); Single-Mechanism-Trap avoided (7 mechanisms); Early-Frame-Lock avoided (didn't stop at F1, pushed to F2/F3); Innovation-Without-Grounding avoided (all tested); Mechanism-Exhaustion N/A (survivors found); **Survival Bias explicitly guarded** (F5 generated + hard-tested + residue kept)
- **Overall: PROCEED** — full coverage, strong convergence on F2, all survivors tested, uncomfortable frame generated and tested.

**Handoff to Critique:** adjudicate the layered assembly — is F2 (category error) genuinely the root, or is F1 (localized text) sufficient and F2 over-theorized? Is F3 a separate problem or part of the same one? Is the F5-sharpened "role-OK/precondition-BAD" boundary correct? Render SURVIVE/REFINE/KILL per framing and confirm the diagnosis.
