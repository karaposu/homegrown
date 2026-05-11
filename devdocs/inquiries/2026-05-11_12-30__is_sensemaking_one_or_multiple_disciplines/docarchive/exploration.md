# Exploration: Is Sensemaking One Discipline or Multiple Disciplines Under One File?

## Mode & Entry Point

**Mode: hybrid (artifact + possibility).**
- Artifact: read `homegrown/sense-making/references/sensemaking.md` (just-edited) plus the four sister discipline specs (explore, decompose, innovate, td-critique) to see how each is scoped.
- Possibility: enumerate decomposition candidates (A-F provided by _branch.md, plus any that surface during exploration).

**Entry: signal-first.** The user provided six candidates (A-F) and a specific hypothesis ("maybe comprehending + sensemaking"). Probe the spec's actual structure to see which candidates the territory supports; don't pre-commit.

---

## Cycle 1 — Coarse scan: territory regions

| Region | What's here | Confidence |
|---|---|---|
| **R1 — Current `sensemaking.md` (just-edited)** | Definition; 5 cognitive anchor types; 3 boundary construction operations (perspective checking, ambiguity collapse, DOF reduction); 5-phase process model; 4 saturation indicators; 6 failure modes; standard analysis protocol; the "Execute the Following Process" operational section; 5 refinement notes (Phase/Calibration-State req; Load-bearing concept test; Specific-vs-pattern cue; Accommodation trigger; Frame-exit Completeness as part of Definitional split) | Confirmed (read in full multiple times this conversation) |
| **R2 — Sister discipline specs** | Explore (1 core op, 6 components, 7-step cycle); Decompose (1 core op, 7 steps); Innovate (2 explicit operations: Generation + Framing; 7 mechanisms in 4 Generators + 3 Framers); Td-critique (2 explicit operations: Extraction + Evaluation; 5 phases) | Confirmed |
| **R3 — Candidate decompositions** | A (one discipline / status quo), B (Comprehending + Sensemaking), C (Sensemaking + Vigilance), D (Anchoring + Resolving), E (B+C), F (one file with named sub-modes), plus any new candidates surfacing in this scan | Scanned this cycle |
| **R4 — External / adjacent fields** | Philosophy of meaning (Verstehen vs Auslegung); cognitive science (encoding vs consolidation); software engineering (requirements gathering vs architecture decision); design methodology (divergent vs convergent phases) — all distinguish "what's there" from "what we commit to" | Scanned this cycle |
| **R5 — Operational consequences** | (1) split files (high cost; pipeline change; affects /MVL+, /sense-making skill, all inquiries); (2) one file with named sub-modes (low cost; structural relabel); (3) leave as is (zero cost; ignores split if real) | Scanned |
| **R6 — Self-reference mitigation** | External anchoring (cite sister specs; cite adjacent fields); meta-application of Frame-exit Completeness to this analysis at Sensemaking Phase 2; Critique self-confirmation test | Scanned |
| **R7 — Surround layer (project discipline-design conventions)** | The project's existing 5 disciplines (E, S, D, I, C) — each is one named operation that produces one named output type; disciplines are co-located in `homegrown/<name>/references/<name>.md`; splitting a discipline = creating a new folder + new skill + new pipeline step | Scanned |

**Surround-layer note:** the project's discipline-design convention sets the cost of any split. Each discipline is one folder + one references file + one skill + a pipeline position. Splitting sensemaking into two disciplines means two folders + two references + two skills + two pipeline positions OR an alternative arrangement (e.g., named sub-modes within one file). The cost decision sits in R5.

---

## Cycle 2 — Signal detection within R3 (candidate decompositions)

Probing each candidate against the artifact and the sister specs:

### Signal S1 — Comparison of sister-spec self-descriptions

The sister specs explicitly name their internal operations when there are two of them:

- **Explore** says: "the core operation is coupling perception" — wait, that's decompose. Let me re-check. Explore says: "Structural Exploration is the process of mapping unknown territory through iterative scan-signal-probe cycles" — ONE core operation (mapping). Components serve the one operation.
- **Decompose** says: "Decomposition is the cognitive operation of perceiving internal structure in complexity" — ONE core operation (coupling perception).
- **Innovate** says: "Innovation has two structural operations: 1. Generation … 2. Framing." — explicitly TWO operations, named.
- **Td-critique** says: "Critique has two structural operations: 1. Extraction — pulling evaluation criteria from the already-understood problem. 2. Evaluation — positioning candidates against the extracted criteria." — explicitly TWO operations, named.

Pattern: when a discipline has two distinct cognitive operations, the project's convention is to **name them explicitly within one file** (Innovate, Td-critique), not to split into separate files.

This is a strong signal that the project's existing pattern for "discipline with two operations" is Candidate F (one file with named sub-modes), not file-splitting.

### Signal S2 — Sensemaking's own self-description

`sensemaking.md` says: "Structural Sensemaking is the process of constructing stable meaning by organizing cognitive anchors into constrained conceptual structures through perspective integration, ambiguity collapse, and degrees-of-freedom reduction."

Three operations are named (perspective integration, ambiguity collapse, DOF reduction) — but they're framed as components of ONE process, not as separate operations like Innovate and Td-critique do.

**Density anomaly:** sensemaking names THREE operations as one process. Innovate and Td-critique name TWO each as explicit dual operations. This is asymmetric. Either sensemaking should name them more explicitly (like Innovate/Td-critique do) or it really is one process that happens to have three sub-moves.

### Signal S3 — Phase analysis as expansion vs contraction

Mapping the 5 phases to expansion / contraction:

| Phase | Operation | Direction |
|---|---|---|
| Phase 1 — Cognitive Anchor Extraction | Extract anchors from input | EXPANSION (anchor count grows) |
| Phase 2 — Perspective Checking | Apply multiple perspectives; extract NEW anchors | EXPANSION (anchor count grows further) |
| Phase 3 — Ambiguity Collapse | Resolve vague terms, conflicts | CONTRACTION (ambiguities reduced) |
| Phase 4 — DOF Reduction | Fix variables; eliminate options | CONTRACTION (DOF reduced) |
| Phase 5 — Conceptual Stabilization | Synthesize into coherent model | CONTRACTION (model stabilized; converged) |

This is a clean expand-then-contract pattern. Phases 1-2 belong to one cognitive shape (expansion = building the anchor space). Phases 3-5 belong to another (contraction = stabilizing into a model).

The handoff between Phase 2 and Phase 3 is structurally real: Phase 2 produces an enriched anchor set; Phase 3 starts working WITH that anchor set to resolve ambiguities. The Sense Versions (SV1 → SV6) reflect this: SV2 captures the anchors after extraction, SV3 after perspective expansion, SV4 after ambiguity collapse, SV5 after DOF reduction, SV6 the stabilized model.

Phases 1-2 produce the FULL ANCHOR SET. Phases 3-5 take that anchor set and produce the STABILIZED MODEL. Two different outputs.

### Signal S4 — Recent edits and where they live

Mapping the recent refinement additions to their phase locations:

| Refinement | Phase | What it does |
|---|---|---|
| Phase/Calibration-State perspective requirement | Phase 2 (perspective checking) | Adds a new perspective axis |
| Load-bearing concept test | Phase 3 (ambiguity collapse) | Adds a meta-test for stabilized concepts |
| Specific-vs-pattern recognition cue | Phase 3 (ambiguity collapse) | Adds a specificity check |
| Accommodation trigger | Phase 5 (conceptual stabilization) | Adds model-misfit detection |
| Frame-exit Completeness (just adopted; 4 meta-categories) | Phase 2 (perspective checking) | Adds a project-wide referent check, with 4 sequenced cognitive moves |

Two refinements live in Phase 2 (expansion side). Two refinements live in Phase 3 (contraction side, ambiguity collapse). One refinement lives in Phase 5 (contraction side, stabilization).

**The Frame-exit Completeness refinement is the heaviest by far** — its body has 4 meta-categories (Existence Enumeration; Role Assessment; Verdict Rigor; Residual / Coverage Justification) + gating predicate + worked examples + termination criterion. It's structurally much bigger than the other refinements. It's also operationally distinct: it asks the AI to step OUTSIDE the inquiry's frame and check what's project-wide.

The Frame-exit Completeness operation is specifically a **comprehending move** — it asks "what's outside our current frame that we should know about?" That's not about stabilizing a model; it's about ensuring the anchor set is comprehensively built.

### Signal S5 — Cross-domain support for the split

Adjacent fields distinguish "comprehending" from "interpretation/sensemaking":

- **Philosophical hermeneutics** (Heidegger, Gadamer): Verstehen (understanding what's there) vs Auslegung (interpretive commitment). Two distinct cognitive operations.
- **Cognitive science**: encoding (taking information in) vs consolidation (stabilizing into memory/model). Two distinct operations with different mechanisms.
- **Software engineering**: requirements gathering (what does the system need to do?) vs architecture decisions (how will we structure it?). Two recognized phases.
- **Scientific method**: observation (gathering data) vs theorization (building model). Two phases with different cognitive shapes.
- **Design thinking**: divergent thinking (generate possibilities) vs convergent thinking (commit to direction). Same expand-contract pattern.

Five independent adjacent fields distinguish a comprehending phase from a sensemaking/committing phase. This is strong external validation for Candidate B (Comprehending + Sensemaking).

### Signal S6 — But the project's existing convention

S5 supports a split. S1 supports keeping it in one file (named sub-modes). These are not in conflict: the split is real cognitively (S5), but the right packaging is named sub-modes (S1).

This points toward **Candidate F (one file with named sub-modes)** as the operational answer — IF the cognitive split is real.

### Signal S7 — Candidate C reconsidered (Sensemaking + Vigilance)

The recent refinements (load-bearing concept test; specific-vs-pattern cue; Accommodation trigger; Frame-exit Completeness) feel like META-checks ON the sensemaking work itself. Could they form a separate "Vigilance" discipline?

Probe: do these refinements share a common cognitive shape?

- Load-bearing concept test: tests whether a stabilized concept is actually load-bearing or just nominal.
- Specific-vs-pattern cue: tests whether the inquiry is committing to a specific example or to a broader pattern.
- Accommodation trigger: tests whether the model is fitting the territory or being forced.
- Frame-exit Completeness: tests whether the inquiry's frame excludes project-wide referents.

Common shape: **self-checks against frame failures**. Each tests whether the inquiry's own cognitive work has a particular kind of failure.

But — these checks are INTERLEAVED into the phases, not sequential after them. Frame-exit Completeness lives at Phase 2. Load-bearing concept test lives at Phase 3. Specific-vs-pattern at Phase 3. Accommodation trigger at Phase 5. They're scattered across the process.

A discipline is sequential or at least temporally bounded. Scattered checks across multiple phases of another discipline don't form a discipline; they form a set of refinement notes (which is exactly what they are in the spec).

**Verdict on Candidate C: not a separate discipline.** The vigilance checks are properly framed as refinement notes within sensemaking (where the spec already places them). Splitting would force artificial sequencing.

### Signal S8 — Candidate D reconsidered (Anchoring + Resolving)

Candidate D splits at Phase 1 vs Phases 2-5. Phase 1 alone is just anchor extraction. But anchor extraction is essentially DATA INPUT to the sensemaking process, not a distinct cognitive operation that could stand alone.

**Verdict on Candidate D: split too early.** Phase 1 is too small to be its own discipline. Drop D.

### Signal S9 — Candidate E reconsidered (B + C combined)

If B is real (Comprehending + Sensemaking) and C is rejected (Vigilance is not a separate discipline), then E is just B. Drop E.

### Signal S10 — A new candidate emerges (jump-scan)

What if sensemaking is one discipline structurally, but the **operational LABEL "sensemaking" mismatches the EXPANSION half**?

Sensemaking = making sense of something. Making sense implies STABILIZATION (converging on what something means). The expansion half (anchor extraction + perspective checking) isn't really "making sense" — it's "gathering material for sense-making." The label "sensemaking" fits Phases 3-5 better than Phases 1-2.

If this is right, then maybe the discipline IS coherent (one process) but the NAME is partial-fit (only the second half matches the label).

A name change without a structural split? Possible candidates:
- "Sensemaking" stays as the WHOLE discipline name, but Phases 1-2 get a sub-label like "Comprehending" inside the file.
- Or the WHOLE discipline gets a more accurate name like "Meaning-Construction" that covers both halves, with "Comprehending" and "Sensemaking" as sub-modes.

This is a packaging variation of Candidate F.

**New Candidate G: rename the umbrella + name sub-modes.** Single discipline; new umbrella name (e.g., "Meaning-Construction"); two named sub-modes (Comprehending = Phases 1-2; Sensemaking = Phases 3-5). The "sensemaking" label survives but as a sub-mode name.

### Signal S11 — Counter-signal: does the expansion / contraction split really cleanly happen at Phase 2 / Phase 3?

Probe deeper: is Phase 2 purely expansion, or does it also contract?

Phase 2's perspectives produce new anchors (expansion), BUT they also TEST anchors against existing perspectives (which can REJECT anchors that don't survive cross-perspective scrutiny). That's a contraction move within Phase 2.

Counter: the cross-perspective scrutiny in Phase 2 isn't full ambiguity collapse; it's more like prompting for new anchors. Ambiguity collapse (Phase 3) is the dedicated collapse operation.

But the Frame-exit Completeness's 4th meta-category (Verdict Rigor) is a CONTRACTION move inside a Phase 2 perspective — it tests "out of scope" verdicts. So Phase 2 contains both expansion and contraction moves.

**This complicates the clean B split.** The boundary isn't strictly at Phase 2 / Phase 3. There's contraction inside Phase 2 (cross-perspective scrutiny; Frame-exit's Verdict Rigor). And there might be expansion inside Phase 3 (when ambiguity resolution surfaces new conceptual territory).

So the expand-contract structure isn't cleanly between Phases 2 and 3 — it's a gradient with the BULK of expansion in Phases 1-2 and the BULK of contraction in Phases 3-5, but with both operations interleaving.

This weakens Candidate B's clean-boundary claim. It supports either:
- Candidate A (one discipline; the expand/contract gradient is internal)
- Candidate F (one file; sub-modes labeled with the caveat that they're not strictly sequential)

### Signal S12 — Innovate's pattern as a model

Innovate's two operations (Generation + Framing) are not strictly sequential either — they iterate. But the spec NAMES them as two distinct operations and shows when each applies. This works.

If sensemaking adopted Innovate's pattern (two named operations with explicit roles, even if interleaved), the result would be Candidate F or G. The naming would acknowledge structural truth without forcing artificial sequence.

---

## Cycle 3 — Resolution decision

Zoom in on the strongest candidates: **A (one discipline)**, **B (Comprehending + Sensemaking; split)**, **F (one file with named sub-modes)**, **G (umbrella rename + named sub-modes)**.

Drop: C (Vigilance not separable), D (split too early), E (collapses to B).

Probe these four at higher resolution.

---

## Cycle 4 — Deep probe of the surviving candidates

### Candidate A — One discipline (status quo)

**For:**
- Sensemaking's three named operations (perspective integration; ambiguity collapse; DOF reduction) form an expand-contract methodology, similar to how Explore has scan+probe in one discipline.
- The expand/contract boundary isn't clean at Phase 2 / Phase 3 (Signal S11) — operations interleave.
- The spec works currently; no operational problem is being solved by a split.
- Splitting affects the pipeline (E → S → D → I → C); high cost.

**Against:**
- Innovate and Td-critique both explicitly name TWO operations when they have them; sensemaking implicitly has multiple operations but doesn't name them as explicit sub-operations. Asymmetric with sister specs.
- Five adjacent fields distinguish comprehending from sensemaking (Signal S5).
- The label "sensemaking" fits Phases 3-5 better than 1-2 (Signal S10).

**Confidence: viable in the boundary region.** Not the strongest candidate but defensible.

### Candidate B — Comprehending + Sensemaking (file split)

**For:**
- Clean cognitive split between expansion (anchor space building) and contraction (model stabilization).
- Strong external validation (5 adjacent fields).
- Names a real operational distinction; could enable each half to be invoked independently.

**Against:**
- Splits a single file into two files + two skills + two pipeline positions. High cost (S6/S11 supports this).
- The split boundary is gradient, not crisp (Signal S11).
- Project convention for "two operations": name them within ONE file (Innovate, Td-critique style). Splitting into two files is a departure from convention.
- Operationally, would the pipeline change to E → C → S → D → I → C? That's awkward (two C's: Comprehending and Critique).

**Confidence: dead region for "split into two files."** The cognitive split has merit but the file-split implementation conflicts with project convention.

### Candidate F — One file with named sub-modes

**For:**
- Matches project convention (Innovate, Td-critique both name two operations within one file).
- Acknowledges the cognitive split without paying file-split cost.
- Operationally cheap: relabel existing sections; no pipeline change.
- Sub-mode names give applications a hook for invoking parts independently if needed (just by referring to the sub-mode).

**Against:**
- The sub-mode boundary isn't strictly sequential (Signal S11 — interleaving).
- "Sub-mode" terminology is new to the project; would need definition.

**Confidence: viable region.** Strong candidate. The cost-benefit favors this.

### Candidate G — Umbrella rename + named sub-modes

**For:**
- Fixes the label-fit issue (Signal S10): "Sensemaking" only fits Phases 3-5; the umbrella needs a name that covers both halves.
- Matches project convention (one file).
- Acknowledges the structural truth most precisely.

**Against:**
- HIGH disruption: renaming the discipline affects every cross-reference, every protocol that names "Sensemaking," every prior finding that refers to it, the /MVL+ pipeline letter (S), the folder name, the skill name.
- Renaming without operational necessity is over-correction.
- "Sensemaking" is the established name; users know it.

**Confidence: dead region for "rename umbrella."** The cost is high; the benefit (precise label) is marginal. The label "Sensemaking" is established and the project can absorb the small mismatch.

---

## Cycle 5 — Jump scan: any candidate the named six miss?

Jump-scan question: is there a fundamentally different decomposition I haven't considered?

Probe: what if the right answer is **"one discipline with the post-edit name change to acknowledge it's broader than sensemaking"**? Not Candidate G (full umbrella rename) but a softer move — keep the name "Sensemaking" but explicitly state in the spec's intro that "Sensemaking" here covers both comprehending and stabilizing, the umbrella usage being broader than the colloquial usage. This is a CLARIFICATION rather than a structural change.

**Candidate H: clarify the umbrella scope without splitting or renaming.** Add a paragraph at the top of the spec saying "the term 'Sensemaking' in this discipline covers both the comprehending phase (anchor space building) and the stabilizing phase (model commitment) — broader than colloquial usage." Acknowledges the structural truth, fixes the label-fit issue, zero structural change.

This is the cheapest move that respects the structural truth. **Viable region.**

Another jump probe: what if the right answer is **operational — package the two sub-modes as separate skills (`comprehend` and `sense-make`) but in the same references file**? The references file stays one document; the skills layer splits.

**Candidate I: split at the skill layer; keep the references file.** Possible technically; somewhat unusual; not clearly necessary unless we want to invoke comprehending and sensemaking-proper independently. **Boundary region.**

---

## Cycle 6 — Convergence assessment

**Frontier stability:** Cycles 4 and 5 enumerated the candidate set and probed at depth. Each survivor (A, F, H, I) is structurally distinct and the cost-benefit profile is mapped.

**Discovery rate:** declining. Cycle 5's jump-scan added H and I; further cycles would refine wording rather than add new candidates.

**Bounded gaps:** the remaining unknowns are operational details (exact wording of sub-mode labels in F; exact wording of clarification in H) — bounded by the candidate set.

**Convergence: REACHED.**

---

## Final Deliverable — Structural Map

### Territory Overview

| Region | Resolution | Confidence | Major content |
|---|---|---|---|
| R1 — `sensemaking.md` (just-edited) | Fine | Confirmed | 5-phase process; 5 anchor types; 3 boundary ops; 6 failure modes; 5 refinement notes |
| R2 — Sister specs | Fine | Confirmed | Explore + Decompose are single-op; Innovate + Td-critique have explicit dual-op structure named within ONE file |
| R3 — Candidate set | Fine | Confirmed | Surviving: A (one discipline / status quo); F (one file, named sub-modes); H (clarify umbrella scope without restructure); I (skill-layer split with shared references). Rejected: B (file split), C (Vigilance), D (Anchoring/Resolving), E (B+C), G (umbrella rename) |
| R4 — External fields | Coarse | Confirmed | 5 adjacent fields distinguish comprehending from sensemaking |
| R5 — Operational consequences | Fine | Confirmed | Cost ladder: H (zero structural) < F (low; relabel) < I (medium; new skill files) < B (high; pipeline change) |
| R6 — Self-reference mitigation | Coarse | Scanned | External anchoring (sister specs; adjacent fields); meta-application at Sensemaking Phase 2; Critique self-confirmation test |
| R7 — Surround layer | Confirmed | Confirmed | Project convention: two-op disciplines name within one file (Innovate, Td-critique style) |

### Inventory

**Surviving decomposition candidates after Cycle 4 + Cycle 5:**

- **Candidate A — One discipline (status quo).** Defensible by analogy to Explore (expand+contract internal). The spec works; no operational problem is being solved by a split. Defends "the spec IS coherent as one discipline."
- **Candidate F — One file with named sub-modes** (e.g., "Comprehending mode" for Phases 1-2; "Stabilizing mode" for Phases 3-5). Matches project convention (Innovate / Td-critique). Acknowledges cognitive split without splitting files. Operationally cheap.
- **Candidate H — Clarify umbrella scope without restructure.** Add a clarifying paragraph at the spec's top noting that "Sensemaking" covers both comprehending and stabilizing. Cheapest move; acknowledges structural truth without changes.
- **Candidate I — Skill-layer split; shared references.** Two skill files (`comprehend` and `sense-make`) sharing the same references file. Operationally enables independent invocation; not clearly necessary.

**Rejected candidates and reasons:**

- **B (file split)** — cognitive split has merit but file-split implementation conflicts with project convention and forces pipeline change.
- **C (Sensemaking + Vigilance)** — vigilance checks are scattered across phases, not sequential; they're properly framed as refinement notes within sensemaking.
- **D (Anchoring + Resolving)** — Phase 1 too small to stand alone.
- **E (B + C combined)** — collapses to B once C is rejected.
- **G (umbrella rename)** — rename cost is high; benefit (precise label) is marginal; "Sensemaking" is established.

### Signal Log

| Signal | Status | Probed in |
|---|---|---|
| S1 — Project convention: two-op disciplines name within one file (Innovate, Td-critique) | Confirmed | Cycle 2 |
| S2 — Sensemaking's self-description names 3 operations but treats them as one process | Confirmed | Cycle 2 |
| S3 — Phase-by-phase expansion/contraction mapping (Phases 1-2 = expand; Phases 3-5 = contract) | Confirmed | Cycle 2 |
| S4 — Recent refinements mapped to phases; Frame-exit Completeness is the heaviest and lives in Phase 2 (comprehending side) | Confirmed | Cycle 2 |
| S5 — 5 adjacent fields distinguish comprehending from sensemaking | Confirmed | Cycle 2 |
| S6 — S5 supports a split; S1 supports keeping in one file; resolution: cognitive split is real, packaging stays as one file | Resolved | Cycle 2 |
| S7 — Candidate C (Vigilance) rejected: vigilance checks are scattered across phases | Resolved | Cycle 2 |
| S8 — Candidate D rejected: Phase 1 too small | Resolved | Cycle 2 |
| S9 — Candidate E collapses to B | Resolved | Cycle 2 |
| S10 — Label "Sensemaking" fits Phases 3-5 better than 1-2; new Candidate G emerged | Resolved (G rejected) | Cycle 2 + 4 |
| S11 — Expansion/contraction boundary isn't clean at Phase 2 / Phase 3 (interleaving) | Confirmed | Cycle 2 |
| S12 — Innovate's two-op naming pattern is a model for what sensemaking could adopt | Confirmed | Cycle 2 |
| Jump-scan H — clarify umbrella scope without restructure | New; viable | Cycle 5 |
| Jump-scan I — skill-layer split with shared references | New; boundary | Cycle 5 |

### Confidence Map

- **R1 (current spec):** Confirmed.
- **R2 (sister specs):** Confirmed.
- **R3 (candidates):** Confirmed for the survivor set (A, F, H, I) + rejection reasons for B, C, D, E, G.
- **R4 (external fields):** Confirmed.
- **R5 (operational consequences):** Confirmed cost ladder.
- **R6 (self-reference mitigation):** Scanned; specific approach TBD by Sensemaking.
- **R7 (surround layer):** Confirmed.

### Frontier State

**Stable.** The candidate space is mapped at the resolution needed for Sensemaking and Innovation to operate. The four surviving candidates (A, F, H, I) are distinct on cost, structural fidelity, and operational consequence. Sensemaking can adjudicate.

### Gaps and Recommendations

**Remaining gaps (bounded; for Sensemaking and Innovation):**

- **G1 — Pick among A, F, H, I** based on the cost-vs-structural-fidelity trade-off. Sensemaking should weigh: how strong is the cognitive split signal? How costly is each restructure? What's the smallest move that respects the truth?
- **G2 — If F is picked, what are the right sub-mode names?** "Comprehending" and "Sensemaking" risk confusion (the umbrella is also "Sensemaking"). Alternatives: "Anchor-building" and "Model-stabilizing"; "Divergent" and "Convergent"; "Phase 1-2 / Comprehending" and "Phase 3-5 / Stabilizing"; or others. Sensemaking + Innovation decide.
- **G3 — If H is picked, what's the exact clarifying paragraph?** Innovation drafts.
- **G4 — Operational consequence of the picked candidate** — spec file changes; whether to update CLAUDE.md / loop runners / cross-references. Sensemaking outlines the consequence; Innovation drafts specific changes if any.

**Recommendations for next discipline (Sensemaking):**

- Adjudicate the candidate set with explicit weighting of structural fidelity vs cost.
- Apply Frame-exit Completeness perspective (just adopted) to this analysis as a self-reference mitigation test.
- Surface any sub-mode-naming considerations for Innovation to draft.
- Test specific-vs-pattern (the 5 adjacent fields are specific examples; the broader pattern is "expand-contract cognitive operations have two named halves" — is the broader pattern what we're committing to?).
- Stay alert to the project's discipline-design convention (R7) as the operational constraint.
