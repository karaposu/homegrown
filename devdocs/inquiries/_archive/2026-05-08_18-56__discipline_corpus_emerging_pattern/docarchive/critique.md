# Critique — Discipline-corpus emerging pattern

## User Input

```
Evaluate innovation's 4 ACTIONABLE candidates: Q1.2 (step_refinement.md), Q1.1
(glossary alt), Q2.1+Q2.3+Q2.4 (discipline_output.md), Q3.5→Q3.1+Q3.3 (pilot rollout).
Phase 0 dimensions from sensemaking + project risk. Multi-axis prosecution. Verdicts
SURVIVE / REFINE / KILL with constructive output. Assembly check.
```

---

## Phase 0 — Dimension Construction

### Dimensions extracted

| Dimension | What it asks | Source | Weight |
|---|---|---|---|
| **Correctness** | Does the artifact achieve its stated goal (name the primitive / specify the contract / close the gap)? | Standard | HIGH (kill if violated) |
| **Coherence-with-corpus** | Does the artifact fit existing corpus structures (alignment_control.md style; placement convention; etc.)? | Standard + project | HIGH |
| **Phase-fit conservatism (descriptive-only)** | Does the artifact avoid mechanical enforcement at this calibration? | Sensemaking SV6 | HIGH (kill if violated) |
| **Placement-convention compliance** | Respects `enes/discipline_rule_placement.md`'s one-canonical-home rule? | Corpus rule | HIGH |
| **resume.md alignment** | For Q2/Q3: aligns with resume.md's existing aspirational verdict-line behavior? | Sensemaking | HIGH for Q2/Q3 |
| **Feasibility** | Can it be applied as a concrete spec edit? | Standard | HIGH |
| **Elegance** | Minimum-sufficient form? | Standard | MEDIUM |
| **Defended-by-default ("brushing teeth")** | Honors descriptive maintenance framing rather than heavy machinery? | User's `_branch.md` | HIGH |

### Project-specific risk dimension check

The candidates touch shared corpus artifacts (`enes/`, `homegrown/contracts/`, multiple discipline specs). **Phase-fit conservatism** and **coherence-with-corpus** are explicitly project-specific — both included as HIGH-weight. Project-specific risk axes are covered.

### Validation

If a candidate passed all 8 dimensions, would the original problem (name emerging patterns + propose tidying artifacts) be solved? Yes — the dimensions span goal achievement (correctness), corpus fit (coherence), conservatism (phase-fit), structural compliance (placement convention), runtime alignment (resume.md), implementability (feasibility), parsimony (elegance), and the user's framing (defended-by-default).

---

## Phase 1 — Landscape Construction

### Viable region

Artifacts achieve goal + comply with placement convention + descriptive-only + match alignment_control.md style + minimum-sufficient + honor "brushing teeth."

### Dead region

Artifacts that violate phase-fit (mechanical enforcement) OR violate placement convention OR damage discipline-specific structures (e.g., forcing a verdict format that breaks sensemaking's qualitative self-assessment).

### Boundary region

Technically valid but with rollout/scope/format ambiguity — refinement targets exist.

### Unexplored region

**Tooling for auto-generated audit / cross-reference maps** is unaddressed by current candidates (Q1.4 was deferred for this reason). Frontier; not addressed by this critique.

---

## Phase 2 — Adversarial Evaluation

### Q1.2 — `enes/step_refinement.md` (primary Step Refinement artifact)

**Prosecution (multi-axis):**

| Axis | Strongest objection |
|---|---|
| Dimension-level | None severe — artifact achieves correctness, coheres, complies with convention, descriptive-only |
| User-perspective ("brushing teeth") | Adding a NEW conceptual file is closer to "introducing a new concept" than "brushing teeth." The user's frame implied small frequent maintenance, not occasional addition of new conceptual primitives |
| Specific failure-case scenario | A future maintainer encounters a bolted-on rule that doesn't fit the 4-element shape. The artifact describes the shape but doesn't say what to do about non-conforming rules — non-conformance is not addressed |
| Specification-gap probe | The artifact specifies WHAT (the primitive) but not HOW (rollout): are existing rules required to add the italic prefix when touched? Is the failure-mode link mandatory for new failure-anchored rules? Coverage-anchored outliers (innovate's two) — accommodated but not given examples? |

**Defense:**

- Naming an emergent pattern IS descriptive cleaning — exactly what the user asked for. The frame "constant cleaning and refactors" includes naming what's already implicitly there. The artifact documents an emergent pattern; it doesn't invent a new concept.
- The descriptive-only intent is the answer to non-conformance: the artifact describes the going-forward expectation; existing non-conforming rules align organically when next touched. Phase-fit explicitly says no retroactive enforcement.
- Specification gaps are about **rollout** (which is Q3's job), not about the artifact itself. The artifact's scope is "definition of the primitive"; rollout decisions live in Q3.

**Collision:**

The "brushing teeth" objection has merit but doesn't kill the artifact — descriptive naming is part of cleaning, not heavy machinery. The specification-gap concerns map to Q3, not to Q1.2's body.

**Verdict: SURVIVE** with **constructive note**: explicitly state the artifact's scope inside the file ("descriptive only; existing rules align organically when next touched; visual marker recommended for new rules; rollout details cross-referenced to Q3's strategy"). The note belongs in the file's introduction, not as a separate change to Q1.2.

---

### Q1.1 — Lighter alternative (glossary entry)

**Prosecution:**

| Axis | Strongest objection |
|---|---|
| Dimension-level | The glossary file (`enes/glossary.md`) doesn't currently exist. Creating a single-entry glossary file is awkward; over time it accumulates entries but starts as a one-entry file |
| Coherence | The visual marker spec lives separately (in placement convention or wherever) — content is split across two files |
| User-perspective | Lighter weight than Q1.2; closer to "brushing teeth" |
| Specification-gap | Discoverability: a maintainer looking up "Step Refinement" finds the glossary entry but not the visual marker; has to follow cross-references |

**Defense:**

- Lighter weight respects phase-fit better; minimum-sufficient artifact.
- Splitting content across files is acceptable when each file has its canonical home (visual marker in placement convention; primitive definition in glossary).

**Collision:**

The discoverability cost is real but bounded. Q1.2 unifies content for ergonomics; Q1.1 is more conservative. They are alternatives, not refinements of each other.

**Verdict: SURVIVE** as a less-preferred alternative. Q1.2 is primary (better discoverability); Q1.1 is the conservative fallback if Q1.2 feels heavy.

---

### Q2.1 + Q2.3 + Q2.4 — `homegrown/contracts/discipline_output.md`

**Prosecution (multi-axis):**

| Axis | Strongest objection |
|---|---|
| Dimension-level (correctness) | The contract specifies hedging-allowed verdicts but doesn't bound the hedging — "PROCEED — fine, I think" is technically a valid verdict but unparseable. Resume.md needs to extract the verdict TYPE (PROCEED / FLAG / RE-RUN); the descriptor can be free-form, but the format must be unambiguous |
| Coherence | Existing disciplines use `**Overall: PROCEED**` as the prefix (innovate, td-critique). The contract's proposed `**Verdict:**` prefix differs. If contract mandates `Verdict:`, existing disciplines need to change; if contract allows both, resume.md's regex needs to handle both |
| User-perspective ("brushing teeth") | Adding a new contract file is roughly the same magnitude as Q1.2; minor file addition, not heavy machinery |
| Specific failure-case scenario | Sensemaking's qualitative verdict format ("saturation moderate" without a clear PROCEED/FLAG/RE-RUN type) — would the contract reject this? If yes, sensemaking's existing self-assessment needs reformulation. If no, the verdict is unparseable |
| Specification-gap probe | The contract specifies the format but not the canonical prefix; doesn't address backward-compat with existing `**Overall:**` prefix |

**Defense:**

- The verdict TYPE (PROCEED / FLAG / RE-RUN) must be unambiguous; the descriptor is free-form. The contract should explicitly state this format constraint.
- Backward-compat with `**Overall:**` is a real concern; resume.md already handles missing verdicts via "treat as PROCEED" fallback. The contract can specify `**Verdict:**` as canonical going forward; resume.md regex updated to match either prefix during transition.
- Sensemaking's qualitative format adapts: "PROCEED — saturation moderate, three perspectives produced new anchors" — the type is mandatory; the qualitative content carries hedging.

**Collision:**

The format-consistency concern is real and bounds the contract's body. Refinement: contract specifies (a) canonical prefix `**Verdict:**`; (b) mandatory type slot (PROCEED / FLAG / RE-RUN); (c) optional free-form descriptor; (d) backward-compat note for `**Overall:**` until rollout completes.

**Verdict: REFINE** — survives critical dimensions; needs canonical-prefix + mandatory-type-slot specifications added to the contract body.

**Refine target:** Contract reads:
> Every discipline output exposes a verdict line in the form:
> `**Verdict:** [PROCEED | FLAG | RE-RUN] [— optional descriptor]`
>
> The verdict TYPE is mandatory and unambiguous (one of PROCEED, FLAG, RE-RUN). The descriptor is optional, free-form, and may carry qualitative hedging (e.g., "PROCEED — saturation moderate"). Resume.md retains backward-compat with the existing `**Overall:**` prefix during rollout (Q3); new disciplines and disciplines being touched use `**Verdict:**`.

---

### Q3.5 → Q3.1 + Q3.3 — Pilot rollout strategy

**Prosecution (multi-axis):**

| Axis | Strongest objection |
|---|---|
| Dimension-level | Touch-as-worked-on means stable disciplines (e.g., navigation, reflect) may never get touched, leaving the gap open indefinitely. resume.md's fallback covers this but the gap doesn't close |
| User-perspective | Matches "brushing teeth" well — minimum disruption, incremental |
| Specific failure-case scenario (1) | The pilot discipline's qualitative format works, but it doesn't generalize — e.g., sensemaking pilots successfully but explore's frontier-stability format causes friction. Pilot validates ONE discipline, not all |
| Specific failure-case scenario (2) | Stable discipline never touched; gap stays open. Cost is bounded (resume.md fallback), but the user's "constant cleaning" framing implies the gap should close eventually |
| Specification-gap probe | Which discipline is the pilot? Innovation said "next-touched after the inquiry" or "most actively maintained" — that's vague. No name given |

**Defense:**

- Pilot is a sanity check, not a generalization proof. The contract's hedging-allowed format means individual discipline frictions can be addressed per-discipline (verdicts can carry qualitative descriptors).
- Stable discipline gap-staying-open is acceptable: the cost is bounded (resume.md backward-compat); blanket retroactive edits would violate phase-fit. The "constant cleaning" framing is about routine maintenance, not corpus-completeness.
- Pilot specification: pick **sensemaking** as default. Rationale = it's the hardest case for the contract (qualitative self-assessment that resists strict verdict format). If hedging works for sensemaking, it works for the others (which have more structured self-assessment already).

**Collision:**

The pilot-discipline naming gap is real and easily closed. The "stable discipline gap" objection is acknowledged as a known cost, not a refactor target.

**Verdict: REFINE** — survives critical dimensions; needs pilot specification.

**Refine target:** Strategy reads:
> **Pilot phase:** apply the verdict-line addition to **sensemaking** first. Rationale: sensemaking's qualitative self-assessment (saturation indicators) is the hardest test for the contract's hedging-allowed format. Validating that sensemaking can produce a valid verdict line (e.g., `**Verdict:** PROCEED — saturation moderate; three perspectives produced new anchors`) confirms the format works for the corpus's most qualitative discipline.
>
> **Incremental phase (after pilot validates):** the remaining 4 disciplines without verdict lines (explore, decompose, comprehend, reflect) close the gap via touch-as-worked-on. When a discipline is next touched for any other refactor (including the prior inquiry's C1.1 / C2.2 / C3.4 application from `devdocs/inquiries/2026-05-08_17-23__discipline_spec_bloat_reasons/finding.md`), bundle the verdict-line addition.
>
> **Stable disciplines:** disciplines that aren't touched within the rollout window keep the existing self-assessment format. resume.md's backward-compat handles them indefinitely. Closing the gap when next touched is sufficient.

---

### Brief review of DEFERRED candidates

- **Q1.4** (audit table for Step Refinements) — **DEFER confirmed.** Single-mechanism survivor; auto-generation tooling required. Revival trigger valid.
- **A1** (cross-references in `enes/discipline_taxonomy.md`) — **DEFER confirmed.** Premature codification; revival trigger valid (after `enes/step_refinement.md` and `homegrown/contracts/discipline_output.md` ship and survive 30 days).

---

## Phase 3.5 — Assembly Check

### Survivors

| Candidate | Verdict |
|---|---|
| Q1.2 (`enes/step_refinement.md`) | SURVIVE |
| Q1.1 (glossary entry alternative) | SURVIVE (less preferred) |
| Q2.1+Q2.3+Q2.4 (`homegrown/contracts/discipline_output.md`) | REFINE (canonical prefix specification) |
| Q3.5→Q3.1+Q3.3 (pilot rollout) | REFINE (pilot specification) |

### Assembly question

Do the survivors combine into something emergent?

**Component-level:** three artifacts (Step Refinement primitive file; Discipline Output Contract file; pilot rollout strategy). Combined application establishes the corpus's "discipline meta-spec" layer.

**Meta-level:** the corpus has accreted descriptive specifications for discipline structure — placement convention (already exists), Step Refinement (new), Discipline Output Contract (new). Together they form a *discipline meta-spec cluster*. Naming this cluster is what A1 (deferred) does.

**Beyond A1:** the inquiry itself demonstrates a *meta-pattern* worth naming as observation: "the corpus periodically discovers emergent patterns in its accreted refinements; descriptive formalization (naming + spec) plus incremental rollout is the maintenance pattern." This is a frontier observation about HOW the corpus matures, not an additional artifact for this inquiry.

### Axis-coverage check

Per the bolted-on rule in td-critique: when candidate sets vary on multiple orthogonal axes, each axis must have at least one survivor.

The candidate space here has axes:
- **Artifact target axis** (primitive definition / contract definition / rollout strategy) — all three have survivors
- **Weight axis** (full file vs. lighter form) — Q1.2 vs. Q1.1 covers this for the primitive
- **Format-flexibility axis** (strict vs. hedging-allowed) — Q2's REFINE addresses this explicitly

Axis coverage: complete.

---

## Phase 4 — Coverage + Convergence

### Coverage

The active region (4 ACTIONABLE candidates) is fully evaluated; 2 DEFERRED noted; 4 KILLED at innovation. Landscape covered.

### Convergence

- 2 clean SURVIVEs (Q1.2 primary, Q1.1 alternative) — Pattern A (Step Refinement primitive) has clean survivors.
- 2 REFINEs with concrete refinement targets (Q2 needs canonical-prefix spec; Q3 needs pilot specification).
- Adversarial testing was strong (multi-axis, including specification-gap probes).
- Landscape did not change during Phase 2.

**Signal: TERMINATE with ranked survivors.**

---

## Final Deliverable

### (a) Dimensions with weights

| Dimension | Weight |
|---|---|
| Correctness | HIGH (kill if violated) |
| Coherence-with-corpus | HIGH |
| Phase-fit conservatism | HIGH (kill if violated) |
| Placement-convention compliance | HIGH |
| resume.md alignment | HIGH (Q2/Q3) |
| Feasibility | HIGH |
| Elegance | MEDIUM |
| Defended-by-default ("brushing teeth") | HIGH |

### (b) Fitness Landscape

- **Viable region:** Q1.2, Q1.1 (clean SURVIVEs).
- **Boundary region:** Q2 (REFINE — canonical prefix), Q3 (REFINE — pilot specification).
- **Dead region:** Inversion contrarians from innovation (Q1.5 don't-name, Q2.5 don't-formalize, Q3.2 blanket-retroactive).
- **Unexplored region:** auto-generated tooling for audit / cross-reference maps; deferred (Q1.4, A1).

### (c) Candidate Verdicts

| ID | Candidate | Verdict | Constructive output |
|---|---|---|---|
| Q1.2 | `enes/step_refinement.md` | **SURVIVE** | Apply with constructive note inside the file: explicitly state scope as "descriptive only; existing rules align organically; visual marker recommended for new rules; rollout cross-referenced to Q3." |
| Q1.1 | Glossary entry alternative | **SURVIVE** (less preferred) | Apply ONLY if Q1.2 is rejected as too heavy. Trade-off: discoverability cost (visual marker spec lives separately). |
| Q2 | `homegrown/contracts/discipline_output.md` | **REFINE** | Add canonical-prefix specification: verdict format = `**Verdict:** [PROCEED \| FLAG \| RE-RUN] [— optional descriptor]`. TYPE mandatory and unambiguous; descriptor free-form. resume.md backward-compat with `**Overall:**` during rollout. |
| Q3 | Pilot then incremental rollout | **REFINE** | Specify pilot = **sensemaking** (hardest test for hedging-allowed format). Incremental phase: touch-as-worked-on for explore/decompose/comprehend/reflect, bundled with prior inquiry's refactors when possible. Stable disciplines remain backward-compat indefinitely. |

### (d) Coverage Map

| Pattern | Artifact landed | Verdict |
|---|---|---|
| Pattern A (Step Refinement primitive) | Q1.2 | SURVIVE (with optional Q1.1 fallback) |
| Pattern B (Discipline Output Contract) | Q2 assembly | REFINE (canonical-prefix spec) |
| Pattern B rollout | Q3 strategy | REFINE (pilot-discipline specification) |
| Cross-pattern (corpus meta-spec cluster) | A1 | DEFERRED with revival trigger |

### (e) Signal

**TERMINATE.** Ranked survivors per pattern; convergence reached; no iteration needed.

---

## Convergence Telemetry

| Telemetry item | Result |
|---|---|
| Dimension coverage | 8 dimensions extracted from sensemaking + project risk; all applied where relevant |
| Adversarial strength | **STRONG** — multi-axis prosecution including specification-gap probes per ACTIONABLE candidate; identified real refinement targets (canonical prefix for Q2; pilot specification for Q3) |
| Landscape stability | **STABLE** — no new regions emerged during Phase 2 |
| Clean SURVIVE exists | **YES** — Q1.2 clean SURVIVE for Pattern A; Pattern B has REFINEs with concrete refinement targets |
| Failure modes observed | **None** — no rubber-stamping (multi-axis prosecution), no nitpicking (REFINEs are scope/format clarifications, not minor flaws), no dimension blindness (project-specific risk axes included), no false convergence (all critical dimensions had at least one survivor), no evaluation drift (dimensions fixed at Phase 0), no self-reference collapse (external grounding via the placement convention and corpus state), no wrong dimensions (validated against sensemaking output) |

**Overall: PROCEED** (sufficient coverage + convergence + tested survivors with constructive output).
