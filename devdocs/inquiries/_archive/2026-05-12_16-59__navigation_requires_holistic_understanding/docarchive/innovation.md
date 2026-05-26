# Innovation: /navigation requires holistic understanding

## User Input

`devdocs/inquiries/2026-05-12_16-59__navigation_requires_holistic_understanding/_branch.md`

Operating on: `_branch.md` + `exploration.md` + `sensemaking.md` + `decomposition.md`. Decomposition produced 5 pieces: P-α (Setup sub-phase spec content), P-β (depth heuristic), P-γ (failure modes), P-δ (depth hierarchy cross-reference), P-ε (finding doc structure). Innovation generates variations along each piece's orthogonal axis, applies all 7 mechanisms to the overall adoption-package seed, tests survivors, and assembles the ACTIONABLE assembly.

---

## Seed

**Seed type:** Question/Dissatisfaction collision. The user is dissatisfied with B-refined's framing (it under-specifies how /navigation comprehends goal + state), and is asking "what if /navigation isn't a specialization of /explore but a separate process that consumes /explore's output + builds holistic understanding + selects?"

**Seed:** How do we land the refinement (B-refined-refined) into /navigation's canonical spec + a finding doc, in a way that honors the user's challenge, preserves the architecture, and is structurally clean?

**Intuition direction:**

- **Context.** Prior /explore-thread inquiries (4); current /navigation spec; B-refined finding; sensemaking output stabilizing the refinement; decomposition's 5 pieces.
- **Valuation.** The user explicitly challenged the prior finding; the refinement matters because it makes implicit operations explicit, enabling autonomous selection at L3+ and aligning /navigation's spec with what it actually does in practice.
- **Motivation.** Make the spec correct; honor the user's intuition; preserve project coherence; avoid both over-engineering (replacing B-refined) and under-engineering (leaving the gap implicit).

---

## Phase 2 — Generate (apply all 7 mechanisms; 3 variations each: generic / focused / contrarian)

### M1 — Lens Shifting (Framer)

**Generic — Autonomy-evolution lens.** Re-evaluate the refinement under the autonomy-ladder evolution lens. At L0-L1 (current), implicit context-comprehension via LLM ad-hoc reading works because a human is present to filter outputs. At L3+, the autonomous selector needs a SPECIFIED context model — implicit comprehension is forward-incompatible. The Setup sub-phase becomes the autonomous-selector's input contract.

→ **Output:** "Setup sub-phase is a forward-compatibility commitment; named now, used implicitly by humans at L0-L1, used explicitly by autonomous selectors at L3+."

**Focused — Project-depth-hierarchy lens.** Re-evaluate under the project's emerging depth-hierarchy lens. /explore established labeling depth (D0-D4). /navigation is the second discipline to gain explicit depth specification (context-comprehension at navigation depth). This sets a pattern for sense-making, comprehend, decompose, innovate, critique to follow when their respective depths get named.

→ **Output:** "Naming /navigation's depth is the second instance of a project-wide pattern (per-discipline depth-naming with inter-rater-agreement heuristics)."

**Contrarian — No-spec-edit lens.** Re-evaluate under "what if we DON'T edit /navigation's spec at all?" Cost: implicit comprehension persists; forward-compatibility with L3+ deferred to a later inquiry; user's challenge is unaddressed in canonical state. Benefit: zero migration cost; existing /navigation behavior unchanged.

→ **Output:** Rejected on structural grounds — the user's challenge identifies a real gap; deferring forward-compatibility is technically valid but practically just kicks the can. KILL.

---

### M2 — Combination (Generator)

**Generic — Preliminary-scaffolding-sub-phase pattern.** Combine the Setup sub-phase pattern with /explore's boundary-discovery pattern. Both are preliminary sub-phases producing internal scaffolding (not separate Transforms). Recognize this as a project-wide pattern ("preliminary-scaffolding-sub-phase") and reference it explicitly in /navigation's spec via cross-reference to /explore's §3.3.

→ **Output:** "Setup sub-phase explicitly cross-references /explore's boundary-discovery sub-phase as the project-precedented pattern."

**Focused — Inter-rater-agreement-heuristic pattern.** Combine the context-comprehension-vs-anchor-extraction heuristic with the labeling-vs-meaning heuristic. Both use inter-rater-agreement-among-naive-scanners. Generalize this as the project's "depth-boundary-heuristic" pattern — every discipline-depth-boundary uses an analogous heuristic.

→ **Output:** "The new heuristic is one instance of a project-wide depth-boundary-heuristic pattern; cross-reference /explore's §4.4 explicitly."

**Contrarian — Cross-discipline-comprehension-layer.** Combine all disciplines' implicit comprehension operations into one unified cross-cutting "context-comprehension layer" outside the discipline taxonomy. Cost: violates per-discipline-depth principle; over-couples disciplines; loses the per-depth heuristic precision. KILL.

---

### M3 — Inversion (Framer)

**Generic L1 — "navigation needs context-comprehension" → invert:** "/navigation can run without context-comprehension at surface-level only." At L0-L1 the human fills the gap; at L3+ this fails. Inverting reveals that the Setup sub-phase is OPTIONAL at L0-L1 and REQUIRED at L3+. The spec text should mark Setup as a phase-dependent commitment.

→ **Output:** "Setup sub-phase is conditional — current calibration: human-mediated at L0-L1, autonomous at L3+. Forward-compatible spec text."

**Inversion L2 — System-level inversion.** "Context-comprehension is needed at navigation depth" → invert: "/navigation doesn't need its own depth — it uses sense-making's anchor-extraction as input." Component-level inversion. Invert again to system-level: "the SIC pipeline ALWAYS provides sense-making output as input to /navigation." Cost: requires runtime pipeline coupling between disciplines, violating workspace invariant; even if mediated by the runner, it forces sense-making to run before every /navigation, which is not the project's current architecture.

→ **Output:** Confirms Setup sub-phase IS the right placement (the inversion fails on structural grounds). REINFORCING.

**Contrarian L3 — Architectural inversion.** "The Setup sub-phase belongs to /navigation" → invert: "the Setup belongs to a NEW DISCIPLINE that sits between SIC and /navigation, for context-comprehension." Cost: discipline proliferation; over-decomposition; doesn't fit the project's existing discipline taxonomy (7 disciplines; adding an 8th for setup is too granular). KILL.

---

### M4 — Constraint Manipulation (Framer)

**Generic — Add backward-compatibility constraint.** ADD: "the spec edit must be backward-compatible — existing /navigation invocations continue to produce correct output without modification." Effect: Setup sub-phase is described as making EXPLICIT what was implicit. Existing implementations continue to work (they were already doing this implicitly); new implementations (especially autonomous ones) follow the explicit spec. Forward AND backward compatible.

→ **Output:** "Spec edit framed as 'naming what /navigation already does in practice' — no behavioral change required for existing implementations; explicit guidance available for new ones."

**Focused — Add project-vocabulary-reuse constraint.** ADD: "the spec edit must use existing project vocabulary; no new terms beyond what exists in /explore, sense-making, and prior /navigation findings." Effect: "Setup" name reuses /explore's sub-phase pattern; depth-hierarchy reuses /explore's labeling vocabulary; heuristic reuses /explore's inter-rater-agreement pattern. Produces a CONSERVATIVE refinement maximally aligned with project precedent.

→ **Output:** "Conservative refinement: every new piece references an existing precedent rather than introducing a new vocabulary."

**Contrarian — Remove specialization constraint.** REMOVE: "preserve the specialization-from-/explore framing." Effect: /navigation could be re-architected as a 5-component free-standing discipline with no parent. Cost: loses inheritance from /explore; bloats spec; loses transclusion benefit. KILL (sensemaking already rejected this on structural grounds).

---

### M5 — Absence Recognition (Generator)

**Generic — Gap inventory.** What's missing from /navigation's spec today that this inquiry surfaces?
1. An explicit name for the comprehension operation. → Addressed by P-α.
2. An explicit depth specification. → Addressed by P-α.
3. An explicit boundary heuristic. → Addressed by P-β.
4. An explicit failure-mode list for drift. → Addressed by P-γ.
5. An explicit depth-hierarchy placement. → Addressed by P-δ.
6. An explicit forward-compatibility note. → Addressed by P-α.
7. (Negative space) — a project-wide cross-discipline depth-hierarchy doc. → Out of scope; research frontier.

→ **Output:** "All gaps within scope are addressed by the 5-piece decomposition; one out-of-scope gap (project-wide depth doc) is flagged as research frontier."

**Focused — Redesign-from-scratch gap.** What SHOULD exist if /navigation were designed from scratch today, given the project's current state?
- A Setup sub-phase (this inquiry).
- Per-route forward-simulation at /comprehend depth (deferred — exceeds /navigation's depth; would re-introduce /comprehend overlap).
- Interactive guidance modes for human-AI collaboration (deferred — separate inquiry on collaboration patterns).

→ **Output:** "Beyond the current scope, two redesign-level absences flagged as research frontiers — they exceed this inquiry's scope but should be remembered."

**Contrarian — What's already there that we don't need to add?** Recognition: /navigation's Step 1 "Read the Cycle's Output" already does most of what Setup needs. The refinement is largely about NAMING what's already there. This means the spec edit is SMALLER than it might appear.

→ **Output:** "Spec edit budget is bounded — existing Step 1 text moves into the Setup sub-phase with light reformulation; no substantial NEW behavior is described."

---

### M6 — Domain Transfer (Generator)

**Generic — /explore's preliminary-sub-phase pattern.** Import directly: the Setup sub-phase is structurally a copy of /explore's boundary-discovery sub-phase pattern. Same trigger (input ambiguity → run sub-phase before main components), same output type (internal scaffolding, not a separate Transform), same conditional firing logic.

→ **Output:** "Setup sub-phase IS the boundary-discovery pattern, applied to /navigation. No new pattern needed."

**Focused — Software-architecture service-initialization pattern.** Import: services have a setup phase that reads config + state before processing requests. Mapping: /navigation reads SIC output + goal + state before processing route enumeration. The "service initialization" pattern is well-known; using it as an analogy in the spec text may aid reader comprehension.

→ **Output:** "Spec text optionally analogizes to service-initialization for reader-clarity; not load-bearing."

**Contrarian — Sense-making's anchor-extraction pattern.** Import: /navigation's Setup could literally run a mini-sense-making (extract anchors from the SIC output). Cost: violates depth boundary; conflates disciplines (the SAME LLM call cannot simultaneously do navigation-depth and anchor-extraction-depth without losing the distinction). KILL.

---

### M7 — Extrapolation (Generator)

**Generic — Autonomy ladder extrapolation.** Extrapolate L0 (current) → L1 → L2 → L3 → L4 along the autonomy ladder. At each level, /navigation's Setup sub-phase changes role:
- L0: implicit; LLM reads inputs ad hoc; human filters.
- L1: system-suggested context-model + human validates.
- L2: system-builds context model + human spot-checks.
- L3: autonomous context model; periodic human audit.
- L4: fully autonomous; Setup's depth heuristic is the audit mechanism.

→ **Output:** "Setup sub-phase has a defined role at every autonomy level; the spec text should hint at this evolution."

**Focused — Depth-hierarchy extrapolation.** Extrapolate the depth-hierarchy pattern. /explore has labeling-depth; /navigation has context-comprehension-depth. Other disciplines may have their own depths to name. Extrapolating: a project-wide depth-hierarchy doc emerges naturally as more disciplines get their depths named.

→ **Output:** "Project-wide depth-hierarchy doc is a research-frontier item; flagged for future inquiry when 3+ disciplines have named depths."

**Contrarian — Spec-complexity extrapolation.** Extrapolate: if each refinement adds one more component or sub-phase, /navigation will accumulate complexity over many inquiries. Counter-trend: spec elements that get used in practice survive; those that don't, atrophy. The Setup operation is used in practice today (every /navigation run already reads SIC output + goal + state); naming it doesn't add complexity, it specifies existing complexity. The extrapolation under counter-trend conditions → stable spec.

→ **Output:** "Spec complexity check: naming existing implicit operations is structural specificity, not complexity bloat."

---

## Mechanism coverage telemetry

- **Generators applied:** 4/4 (Combination M2; Absence Recognition M5; Domain Transfer M6; Extrapolation M7).
- **Framers applied:** 3/3 (Lens Shifting M1; Inversion M3; Constraint Manipulation M4).
- **Total mechanisms:** 7/7 — FULL COVERAGE.

**Convergence signal:** YES. Multiple mechanisms converge on the same core innovation:
- M1 (autonomy lens): Setup is a forward-compatibility commitment.
- M2 (preliminary-scaffolding-pattern): Setup IS the boundary-discovery pattern.
- M3 (inversion-L2): Setup IS the right placement (alternatives fail structurally).
- M4 (backward-compatibility): Setup names what's already implicit.
- M5 (gap inventory): all gaps map onto the 5 pieces from decomposition.
- M6 (preliminary-sub-phase domain transfer): same as M2.
- M7 (extrapolation): Setup is stable across autonomy levels.

7 of 7 mechanisms point to the same core innovation: **Setup sub-phase as the explicit naming of what /navigation already does implicitly, with depth specified between labeling and anchor-extraction, preserving B-refined's specialization framing.**

---

## Phase 3 — Test (5-test cycle per output)

I produced 7 generic + 7 focused + 7 contrarian = 21 outputs. I'll test the survivors that point at the convergent innovation; contrarian outputs that were KILLED in generation are already disposed.

### Test set: generic + focused outputs (convergent on the core innovation)

| # | Output (compressed) | Novel? | Survives scrutiny? | Fertile? | Actionable? | Mechanism-independent? |
|---|---|---|---|---|---|---|
| M1g | Setup is forward-compatibility commitment | Yes (B-refined didn't name this) | Yes (strongest objection: "implicit works at L0" — answered: forward-incompatible) | Yes (autonomy roadmap) | Yes (single spec note) | Yes (M3 + M7 also reach it) |
| M1f | Project-depth-hierarchy pattern | Yes (project-wide pattern made explicit) | Yes (precedented by /explore) | Yes (other disciplines may follow) | Yes (research-frontier flag) | Yes (M2 + M7 also reach it) |
| M2g | Setup cross-references /explore's boundary-discovery | Yes (explicit cross-ref new) | Yes (project precedent matches) | Yes (other disciplines follow same pattern) | Yes (one cross-ref line) | Yes (M6 also reaches it) |
| M2f | Cross-reference labeling-vs-meaning heuristic | Yes (explicit heuristic-pattern callout) | Yes (precedent solid) | Yes (heuristic-pattern doc could follow) | Yes (one cross-ref line) | Yes (M5 also reaches it) |
| M3g (L1) | Setup is conditional (calibration-state-aware) | Partially novel (calibration-state notes exist in /explore but not /navigation) | Yes | Yes (autonomy roadmap) | Yes (M1 + M7 converge) | Yes |
| M4g | Setup names what's implicit (backward-compatible) | Yes (the framing as "naming" not "adding") | Yes (existing implementations untouched) | Yes (low-migration adoption) | Yes (single intro sentence in spec) | Yes (M5 contrarian also reaches it) |
| M4f | Conservative refinement (project-vocabulary-reuse) | Yes (vocabulary-reuse constraint articulated) | Yes (project precedent compatible) | Yes (cleaner spec) | Yes (operational constraint on spec drafting) | Yes (M2 + M6 also reach it) |
| M5g | Gap inventory matches 5 pieces | Yes (verification of decomposition completeness) | Yes (each gap mapped) | Yes (research-frontier flag for out-of-scope gap) | Yes (verification check) | Yes (decomposition independently produced same 5 pieces) |
| M5f | Two redesign-level absences flagged | Yes (per-route forward-simulation; interactive guidance) | Yes (clear out-of-scope reasoning) | Yes (research-frontier items) | Yes (single note in finding's Open Questions) | Yes (M7 also reaches them) |
| M5contra | Spec edit smaller than appears | Yes (insight about existing Step 1) | Yes (verified by reading current spec) | Yes (low-bloat adoption) | Yes (constrains drafting) | Yes (M4 backward-compatibility also reaches it) |
| M6g | Setup IS boundary-discovery pattern | Yes (pattern identity made explicit) | Yes (project precedent direct) | Yes (other disciplines can adopt) | Yes (cross-ref) | Yes (M2 also reaches it) |
| M6f | Service-initialization analogy | Optionally novel (reader-clarity device) | Yes (analogy is well-known) | Yes (aids comprehension) | Yes (optional spec text) | DEFERRED (single-mechanism; can drop without losing core) |
| M7g | Setup has defined role at every autonomy level | Yes (forward-compat made concrete) | Yes (autonomy ladder is project commitment) | Yes (autonomy roadmap) | Yes (single forward-compat paragraph) | Yes (M1 + M3 converge) |
| M7f | Project-wide depth-hierarchy doc research frontier | Yes (research-frontier item) | Yes (trigger is clear: 3+ disciplines with named depths) | Yes (future inquiry seed) | Yes (single research-frontier note) | Yes (M1f also reaches it) |
| M7contra | Spec complexity = structural specificity, not bloat | Yes (anti-bloat argument articulated) | Yes (structural argument holds) | Yes (defense against bloat objections) | Yes (constrains drafting style) | Yes (M4 + M5contra also reach it) |

**Test summary:** 15 outputs tested; 14 PASS as ACTIONABLE; 1 (M6f service-initialization analogy) DEFERRED as single-mechanism (lose-able).

**Contrarian KILLED outputs:** M1contra (no-spec-edit); M2contra (cross-discipline-comprehension-layer); M3contra (separate setup-discipline); M4contra (remove specialization); M6contra (mini-sense-making in Setup). All killed on structural grounds with clear reasoning.

---

## Per-piece variations (axis-coverage check)

The seed produces 5 pieces (from decomposition); each has its own variant axis. Producing α-MIN / α-STD / α-RICH for each ensures candidate-space axis coverage.

### P-α (Setup sub-phase spec content): variations on spec-edit size

**α-MIN:** Two short paragraphs added to /navigation/references/navigation.md. First paragraph (in Identity / "What Navigation Is" section): "Navigation has a preliminary sub-phase, **Setup**, analogous to /explore's boundary-discovery. The Setup sub-phase reads the inquiry's `_branch.md` Goal + the SIC cycle output + the current state and builds an internal context model (not a separate Transform). It does context-comprehension at navigation depth — descriptive understanding of operative state and goal, between /explore's labeling depth and sense-making's anchor-extraction depth. See §[new section] for the depth heuristic and §[new section] for failure modes." Second paragraph (in Process Model section, before Step 1): "**Step 0 — Setup sub-phase.** Read `_branch.md` (Goal), SIC cycle output (C verdicts, frontier questions, telemetry, scope check), and current state. Build an internal context model used by Steps 1-6. Output: internal scaffolding only." Existing Step 1 text becomes "Step 1 — Read the Cycle's Output" still, lightly cross-referencing Setup.

→ ~20 lines added.

**α-STD (DEFAULT):** α-MIN content + a one-paragraph NOT-list refinement clarifying that "meaning-extraction" in the NOT-list refers to anchor-extraction at sense-making depth (not context-comprehension at navigation depth) + a one-paragraph forward-compatibility note explaining the Setup sub-phase's role at L0-L1 (implicit / human-mediated) vs L3+ (autonomous selector's input contract). Cross-references to P-β, P-γ, P-δ written as explicit links.

→ ~40 lines added.

**α-RICH:** α-STD content + worked example showing how a Setup sub-phase invocation produces the internal context model (with concrete sample SIC output → sample context model) + a sub-section explicitly framing Setup as a project-wide pattern instance (referencing /explore's boundary-discovery). Cross-references rich, with project-wide-pattern paragraph.

→ ~80 lines added.

### P-β (Depth heuristic): variations on heuristic phrasing

**β-MIN:** One paragraph statement: "Context-comprehension-vs-anchor-extraction boundary: multiple naive scanners (who have NOT done sense-making's anchor-extraction on this inquiry) reading the SIC output + Goal should produce roughly the same description of operative-state + goal. High agreement → context-comprehension (acceptable at navigation depth). Low agreement → anchor-extraction (sense-making's territory). This is the analog of /explore's labeling-vs-meaning heuristic (§4.4)." One sentence statement of the project-wide pattern.

→ ~10 lines added.

**β-STD (DEFAULT):** β-MIN + two examples (one positive: state description at navigation depth — "the SIC cycle survived 2 SURVIVE verdicts and 1 KILL with a seed; the goal is to determine whether route X is reachable given current evidence"; one negative: state description at anchor-extraction depth — "the inquiry's epistemic posture is in a phase-transition between exploration and commitment; the route candidates form a coherence-stability gradient"). One paragraph on edge cases (domain jargon; contested terminology — treat as context-comprehension at low confidence).

→ ~25 lines added.

**β-RICH:** β-STD + self-reference acknowledgment (the heuristic is a meta-cognitive move; same as /explore's §4.4) + cross-reference to the project's "depth-boundary-heuristic" pattern.

→ ~35 lines added.

### P-γ (Failure modes): variations on failure-mode count

**γ-MIN (2 modes):**
1. **Context-comprehension drift into anchor-extraction.** Setup starts extracting perspective-dependent anchors. Recognition: a re-read by a naive scanner produces a substantially different state description than Setup's. Prevention: hold to P-β heuristic.
2. **Implicit-comprehension.** Setup is skipped or reduced to "read inputs" without producing the explicit context model. Recognition: WHY field in route cards lacks reference to operative state or goal. Prevention: enforce Setup as the first operational step.

**γ-STD (4 modes; DEFAULT):** γ-MIN + 
3. **Context-comprehension drift into predictive modeling.** Setup starts building predictive cycle-dynamics models. Recognition: Setup output includes claims like "if route X is taken, the inquiry will reach state Y with probability Z." Prevention: stay descriptive; predictive modeling is /comprehend's territory.
4. **Context-model staleness.** Setup output is reused across iterations without re-running. Recognition: prior context model + current SIC output diverge. Prevention: Setup runs at each /navigation invocation.

**γ-RICH (6 modes):** γ-STD +
5. **Setup's depth bleeding into Guide.** Guide pointers start re-doing context-comprehension instead of giving operational guidance. Recognition: guidance pointers describe state/goal rather than action. Prevention: keep guidance operational; Setup carries state/goal description.
6. **Specialization-erosion.** Setup grows to replicate /explore's mechanics rather than running as a discrete sub-phase. Recognition: Setup text starts including scan-signal-probe cycles. Prevention: Setup reads inputs and produces context model; it does NOT scan for new items (that's /explore's job, transcluded in Enumerate).

### P-δ (Depth hierarchy cross-reference): variations on form

**δ-MIN — inline list:** One bullet list inside /navigation's Identity / "What Navigation Is" section: "Project depth hierarchy: labeling (/explore, D0–D4) ⊂ context-comprehension at navigation depth (this discipline) ⊂ anchor-extraction (sense-making) ⊂ predictive-modeling (/comprehend). Each lower-listed depth contains the prior's commitments and adds." Cross-reference to each discipline's spec.

**δ-STD — sub-section (DEFAULT):** One short sub-section ("Depth Hierarchy Context") inside /navigation's spec containing the bullet list from δ-MIN + a paragraph on each adjacent boundary (labeling-vs-context-comprehension; context-comprehension-vs-anchor-extraction) referencing the appropriate heuristic. + Note that a project-wide depth-hierarchy doc is a research-frontier item.

**δ-RICH — project-wide-doc trigger:** δ-STD + a new project-wide doc `homegrown/anatomy_of_disciplines.md` updated (or a new `homegrown/depth_hierarchy.md` created) with the depth hierarchy table; /navigation cross-references to it. Higher migration cost.

### P-ε (Finding doc): variations on size

**ε-MIN:** Finding doc following the prior /explore-thread template, with these sections: Question, Finding Summary (6 bullets), Finding body (3 short sub-sections), Next Actions (MUST / COULD / DEFERRED), Open Questions (research frontiers + monitoring), Source Input. ~150 lines total.

**ε-STD (DEFAULT):** ε-MIN + a Terminology section (user-language ↔ project-native: "holistic understanding" ↔ "context-comprehension at navigation depth") + a Change Rationale section (why refine, not replace) + a B-refined → B-refined-2 narrative section. ~220 lines total.

**ε-RICH:** ε-STD + a worked example showing the new spec edit in context (mini-diff of the /navigation spec showing before/after) + an extended Open Questions section with multi-discipline research frontiers. ~350 lines total.

---

## Assembly check

**Question:** What architecture emerges if I combine the survivors? Does the assembly produce emergent value that none of the individual pieces have?

**Combining the surviving outputs into one assembly:**

The ACTIONABLE assembly is: **α-STD + β-STD + γ-STD + δ-STD + ε-STD**, with these emergent commitments:

1. **Setup sub-phase named explicitly** with depth specification, position, inputs, output, depth-vs-anchor-extraction heuristic, NOT-list refinement, forward-compatibility note. (P-α α-STD)
2. **Depth heuristic** is the analog of /explore's labeling-vs-meaning, with concrete positive/negative examples and edge cases. (P-β β-STD)
3. **4 failure modes** named explicitly, covering drift in two directions (toward anchor-extraction; toward predictive-modeling), implicit-comprehension (the user's original concern), and context-model staleness. (P-γ γ-STD)
4. **Depth hierarchy** expressed as a sub-section in /navigation's spec with project-wide-doc trigger flagged as research-frontier. (P-δ δ-STD)
5. **Finding doc** with terminology, change rationale, B-refined → B-refined-2 narrative, full Next Actions and Open Questions. (P-ε ε-STD)

**Emergent property of the assembly:** the refinement is presented as a coherent "second-instance-of-a-project-wide-pattern" — naming /navigation's depth following the same shape /explore established. This makes future discipline-depth-naming inquiries cheaper to run because the pattern is now precedented in TWO disciplines, not just one. Neither piece alone produces this emergent meta-pattern.

### Axis coverage check (verifying orthogonal axes addressed)

| Axis | Variations produced |
|---|---|
| Spec-edit size (P-α) | α-MIN / α-STD / α-RICH ✓ |
| Heuristic phrasing (P-β) | β-MIN / β-STD / β-RICH ✓ |
| Failure-mode count (P-γ) | γ-MIN (2) / γ-STD (4) / γ-RICH (6) ✓ |
| Depth-hierarchy form (P-δ) | δ-MIN (inline) / δ-STD (sub-section) / δ-RICH (project-doc) ✓ |
| Finding doc size (P-ε) | ε-MIN / ε-STD / ε-RICH ✓ |

5 axes × 3 variations = 15 variation slots filled. The orthogonal axes from decomposition (one per piece) all have variants. No single-axis bias.

---

## Disposition of outputs

### ACTIONABLE (assembled into the recommended package)

- **α-STD** — Setup sub-phase spec content at standard size.
- **β-STD** — depth heuristic with examples and edge cases.
- **γ-STD** — 4 failure modes.
- **δ-STD** — depth hierarchy as sub-section in /navigation's spec.
- **ε-STD** — finding doc at standard size with terminology + change rationale + B-refined→B-refined-2 narrative.

### DEFERRED with revival trigger

- **α-MIN** — viable as user-preference fallback if "minimum-change" is the priority. Revival: user requests smallest-possible-edit; OR migration friction is observed in 2+ adoption attempts.
- **α-RICH** — viable as expanded form. Revival: 3+ readers report comprehension difficulty with α-STD's brevity; OR worked-example demand becomes evident.
- **β-RICH** — viable if cross-reference to project-wide depth-boundary-heuristic pattern is requested. Revival: 2+ other disciplines name their depths.
- **γ-MIN** / **γ-RICH** — fallback / extension. Revival: failure-mode count observed empirically (γ-MIN if 2 modes suffice in practice; γ-RICH if more modes fire in practice).
- **δ-MIN** — fallback if sub-section is judged too heavy. Revival: user requests minimal form.
- **δ-RICH** — extension. Revival: 3+ disciplines have named depths AND user requests project-wide doc.
- **ε-MIN** / **ε-RICH** — fallback / extension. Revival: as above.
- **M6f (service-initialization analogy)** — single-mechanism device. Revival: 2+ readers report difficulty understanding Setup's role.

### RESEARCH FRONTIER

- **M1f (project-depth-hierarchy pattern doc)** — separate inquiry trigger when 3+ disciplines have named depths.
- **M5f (per-route forward-simulation at /comprehend depth)** — separate inquiry on /navigation's depth ceiling.
- **M5f (interactive guidance modes for human-AI collaboration)** — separate inquiry on collaboration patterns.

### KILLED (with structural reasoning)

- M1contra (no-spec-edit) — kicks the can; structural gap persists.
- M2contra (cross-discipline-comprehension-layer) — over-couples disciplines.
- M3contra (separate setup-discipline) — over-decomposes the discipline taxonomy.
- M4contra (remove specialization) — sensemaking already rejected this (false binary).
- M6contra (mini-sense-making in Setup) — violates depth boundary.

---

## Telemetry

- Generators applied: 4/4 (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- Framers applied: 3/3 (Lens Shifting, Inversion, Constraint Manipulation)
- Mechanism coverage: FULL (7/7)
- Convergence: YES — 7 mechanisms converge on the core innovation (Setup sub-phase as explicit naming of implicit operation; B-refined refined, not replaced)
- Survivors tested: 15 / 15 with 5-test cycle; 14 ACTIONABLE; 1 DEFERRED (single-mechanism)
- KILLED outputs: 5 contrarian, all on structural grounds
- Per-piece axis coverage: 5 axes × 3 variations = 15 variant slots filled
- Assembly check: emergent property — second-instance of a project-wide depth-naming pattern, making future inquiries cheaper
- Failure modes observed: NONE (no premature evaluation; no single-mechanism trap; no early frame lock; no innovation without grounding; no mechanism exhaustion; no survival bias detected — contrarian outputs received structural attention before being killed)

**Overall: PROCEED to Critique.**
