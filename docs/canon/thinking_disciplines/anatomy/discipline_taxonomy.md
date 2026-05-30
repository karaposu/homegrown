---
status: active
---
# Thinking Discipline Taxonomy

The canonical location for the 4-category discipline taxonomy. Other files (`/MVL+`, command specs, `docs/` files) reference this; duplicate content drifts, so keep placements and admission criteria here.

---

## The 4 categories (with visitor cards)

| Category | Visitor card (1-sentence reader orientation) |
|---|---|
| **Core** | These disciplines run pipeline-sequentially for every inquiry. |
| **Cross-cutting** | These disciplines are always available — any discipline can call them at any time. |
| **Boundary** | These disciplines run between cycles — backward-looking or forward-looking. |
| **Situational** | These disciplines are specialized — invoked when the specific situation calls for them. |

---

## Core

**Pipeline-sequential disciplines.** Worker-cycle disciplines that run within one inquiry. Different runner loops compose different subsets: `/MVL` runs S → I → C; `/MVLw` runs Su → S → D → I → C.

**Members:**

| Discipline | Role |
|---|---|
| `/surfacing` | Draw relevance-tagged items from a bounded territory into present attention (workspace + thin artifact; four relevance levels: core / sub / side / umbrella) |
| `/sense-making` | Construct stable meaning through SV1→SV6 progression (anchor extraction + perspective checking + ambiguity collapse + degrees-of-freedom reduction) |
| `/decompose` | Perceive coupling topology and partition into a question-tree (7-step process with dual-direction validation) |
| `/innovate` | Systematic mechanism application for novelty (7 mechanisms: Lens Shifting, Combination, Inversion, Constraint Manipulation, Absence Recognition, Domain Transfer, Extrapolation) |
| `/td-critique` | Adversarial testing across fitness dimensions (prosecution + defense + collision; SURVIVE / REFINE / KILL verdicts) |

**Admission rule:** Core disciplines operate pipeline-sequentially — each runs at a specific worker-loop step, consuming the prior step's output and producing input for the next. A candidate fails Core if it doesn't fit the sequence.

---

## Cross-cutting

**Always-available infrastructure disciplines.** Invokable at multiple points in the SIC loop; other disciplines draw on them routinely.

**Members:**

(none currently admitted)

### Cross-cutting admission criteria (descriptive, evidence-required)

A discipline is Cross-cutting when — observably — all four hold:

**1. Multi-location in operation**
- Description: invoked at more than one point in the SIC loop in practice (not theoretically)
- Evidence required: cite ≥2 specific points in existing SIC-loop outputs where the discipline is invoked; one-location-theoretical-invocability doesn't count

**2. Spec-quality in documentation**
- Description: numbered process + named failure modes + convergence criteria + clear I/O + distinguishing definition all present and substantive
- Evidence required: point to each of the 5 spec-quality components in the discipline's written specification

**3. Distinct primitive profile**
- Description: load-bearing primitives are not a subset of any Core discipline's load-bearing primitives
- Evidence required: show the discipline's Primitive Profile section; demonstrate at atom-level that it includes primitives absent from Core profiles

**4. Always-available infrastructure in use**
- Description: other disciplines draw on it routinely, not just in special cases
- Evidence required: cite ≥2 specific cases in existing discipline specs or design docs where this discipline is invoked as routine input, not special case

### Corpus-located audit (admission gate)

Before a Cross-cutting discipline is admitted, a corpus-located audit must confirm the four properties. Two-reviewer pass required.

Audit format:
```yaml
discipline: <name>
audit:
  - property: multi_location_in_operation
    evidence:
      - cite: <path + excerpt showing location 1>
      - cite: <path + excerpt showing location 2>
  - property: spec_quality_in_documentation
    evidence: <pointers to spec sections>
  - property: distinct_primitive_profile
    evidence: <profile location + atom-level distinctness argument>
  - property: always_available_infrastructure_in_use
    evidence:
      - cite: <path + excerpt showing routine invocation 1>
      - cite: <path + excerpt showing routine invocation 2>
reviewers: <≥2>
verdict: PASS | REFINE | FAIL
```

---

## Boundary

**Between-cycle disciplines.** Temporally complete at 2 (backward + forward). Adding a third without a new temporal direction manufactures a gap.

**Members:**

| Discipline | Role |
|---|---|
| `/routeman` | Forward-facing — enumerate possible next moves from current state toward a goal, type each by movement category (16 types across 3 Families: Progression / Re-orientation / Coordination), evaluate reachability, attach per-route adaptive guidance, without selecting which move to take |

The backward-facing slot is currently unfilled. `/reflect` (spec preserved at `cognitive_harness/non-active/reflect/`) is the candidate spec for that slot — observe how a completed cycle performed at the process level — pending revival.

**Admission rule:** Boundary disciplines operate at cycle boundaries (between one worker-loop iteration and the next). Backward and forward cover the temporal space; a candidate for a third Boundary discipline would need a new temporal direction that isn't backward or forward (e.g., cross-cycle longitudinal) to be structurally justified.

---

## Situational

**On-demand specialized disciplines.** Invoked when the specific situation calls for them. Organic set — not a systematic framework.

**Members (non-exhaustive; organic):**

(none currently shipped as live disciplines)

Specs that could become Situational disciplines if reactivated live in `cognitive_harness/non-active/`:

- `/comprehend` (`cognitive_harness/non-active/comprehend/`) — construct tested predictive models of opaque artifacts

The prior taxonomy listed `/elaborate` and `/wayfinding` as Situational members; neither exists as a spec in the source tree (live or non-active) and both are removed pending a concrete spec.

**Admission rule:** Situational disciplines are specialized tools for specific situations. Admission is loose — if the discipline serves a specific operational purpose and has a coherent spec, it belongs here. Overlap with other disciplines is acceptable as long as the specialization is real.

**Situational disciplines skip Primitive Profile sections.** Rationale: maintenance burden without benefit; the set is organic and individually specialized; profile distinctness across Situational is not a load-bearing property.

---

## Rejected After Consideration

The audit (`thinking_disciplines_audit`) considered and rejected candidates. Each includes structural reasoning + revival trigger. Revival triggers meet the specificity test: time-bound OR condition-bound + falsifiable + observable.

This section is a **structured invitation**, not a prohibition. When a revival trigger fires, the candidate re-enters consideration via SIC loop.

### Reorganization candidates

1. **Split `/innovate` into `/innovate-generate` + `/innovate-test`**
   - Rejected: current `/innovate` handles both Generate and Test phases well; split creates duplication
   - Revival trigger: if `/innovate` runs frequently produce ungrounded novelty (Generate without Test)

2. **Rename `/sense-making` to emphasize Simulation primitive**
   - Rejected: aesthetic only; no structural benefit; naming change disrupts users
   - Revival trigger: none identified — aesthetic changes don't reach the HUGE OBVIOUS BENEFIT bar

3. **Primitive-grouping redesign (each primitive gets a discipline)**
   - Rejected: primitives are atoms within disciplines; disaggregation breaks working bundles
   - Revival trigger: none identified — category mistake at abstraction level

4. **Apply Primitive Profiles to Situational disciplines**
   - Rejected: maintenance burden without benefit; Situational set is organic
   - Revival trigger: if Situational disciplines become standardized (e.g., all run through `/MVL+` systematically)

5. **Eliminate `/MVL+` (make disciplines self-orchestrating)**
    - Rejected: meta-orchestration is real work; disciplines coordinating themselves creates distributed complexity
    - Revival trigger: if `/MVL+` becomes a pure pass-through with no coordination value

6. **Add third boundary discipline (real-time observation during cycle)**
    - Rejected: real-time observation is a PRIMITIVE operation (Metacognition), not a discipline
    - Revival trigger: none identified — abstraction-level mismatch is structural

### Missing-discipline candidates

1. **Consolidation discipline (cross-inquiry merge)**
   - Rejected: deferred — real capability gap but low priority; parallel inquiries rare
   - Revival trigger: if parallel-inquiry rate exceeds N/month (N calibrated by operation)

2. **Intrinsic-valuation discipline**
   - Rejected: category mistake — intrinsic valuation is an INDICATOR (autonomy-gradient level), not a discipline-level operation
   - Revival trigger: none identified — abstraction-level mismatch is structural

3. **Real-time metacognition discipline**
   - Rejected: category mistake — real-time metacognition is a PRIMITIVE within disciplines, not a discipline itself
   - Revival trigger: none identified — abstraction-level mismatch is structural

---

## Future candidates (deferred; active watch)

Candidates that were neither rejected structurally nor admitted. Tracked until their revival triggers fire.

Maintained in `docs/desc.md` alongside the autonomous-consciousness-goal context. Entries referenced here for visibility:

- **Consolidation (cross-inquiry merge)** — trigger: parallel-inquiry rate exceeds threshold
- **Parallel-MVL coordination** — trigger: approaching Level 3 autonomy

When a trigger fires, the candidate moves from register to active SIC loop. If rejected after re-consideration, it moves to the rejected list above with new revival trigger.

---

## Category-sufficiency check protocol

At inquiry close, the reflection step includes one question:

> **"Did this inquiry reveal a cognitive operation that fits no existing category?"**

Options: YES (describe) / NO / UNCERTAIN (describe). Responses log to `devdocs/category_sufficiency.log` (append-only).

Kill criterion: if the log accumulates only "no" entries for >30 inquiries without discrimination, the check is not producing signal — kill the protocol.

This is an active dragnet for missing categories rather than passive waiting. Patterns over time become seeds for proposing a 5th category via SIC loop.

---

## Primitive Profiles (summary table here; per-discipline sections NOT required)

**Load-bearing primitive summary across Core + Boundary disciplines:**

| Discipline | Category | Load-bearing | Secondary | Deliberately absent |
|---|---|---|---|---|
| `/surfacing` | Core | Intuition-similarity, Context-framing, Working Memory, Salience | Inhibition, Attention-pointer, Focus-deep | Simulation, Motivation |
| `/sense-making` | Core | Simulation, Working Memory, Intuition-similarity, Metacognition | Inhibition, Context-framing | Evaluation-as-ranking |
| `/decompose` | Core | Working Memory, Attention-pointer, Simulation, Intuition-similarity | Metacognition, Inhibition | — |
| `/innovate` | Core | **Simulation** (dominant), Intuition-similarity, Working Memory | Metacognition, Inhibition, Evaluation | Context-framing-as-narrowing |
| `/td-critique` | Core | **Evaluation**, **Inhibition**, Metacognition, Simulation | Intuition-similarity | exploratory Attention-pointer |
| `/routeman` | Boundary | Intuition-similarity, Simulation, Evaluation, Context-framing | Working Memory, Salience, Inhibition, Metacognition | Motivation |

Each discipline has a DISTINCT profile — atom-level distinctness across the set. Disciplines are primitive compounds, not primitive instances. This table is the empirical argument for the conservation verdict from the `thinking_disciplines_audit` inquiry.

### Why this table is the canonical location (not per-discipline spec sections)

Earlier thinking proposed adding a `## Primitive Profile` section (~100 words) to each Core + Cross-cutting + Boundary discipline spec file in `commands/`. That proposal was **revised**: the summary table here serves all three stated purposes better, without per-file duplication:

- **Atom-level distinctness argument** — visible in the table across disciplines; one-file scan shows the pattern
- **Primitive-to-discipline connection** — every discipline's load-bearing primitives listed here; readers find it via the taxonomy file, not spread across multiple spec files
- **Maintenance review target** — when primitive set changes materially, ONE file needs review, not many

**Profile sections in `commands/*.md` specs would be redundant with this table** and introduce drift risk (updates here and there get out of sync). They also do not affect runtime behavior — the LLM runs each discipline from its process description, not from a Primitive Profile section. Profiles are documentation-layer; documentation-layer is best served by a single canonical source.

**Rule:** per-discipline Primitive Profile sections in `commands/*.md` are **NOT required**. The summary table in this file is sufficient. If a specific discipline spec has unusual need for a profile section (e.g., spec authors want it for craft reasons), it may be added — but it's never the single source of truth; this table is.

### Versioning

The summary table carries an implicit version — when the typed primitive set (`docs/thinking_space_dynamics.md`) increments materially, this table is reviewed. Review outcome recorded inline (as a brief note after the table). Rubber-stamp kill criterion: if reviews become mechanical version-bumps without substantive updates, retire versioning of the table.

**Last reviewed:** 2026-05-27 (source-layout sync — added `/surfacing` to Core, `/routeman` to Boundary, cleaned Situational members. Primitive set version unchanged: 11 admitted primitives across Phase A+B; modulators deferred).

---

## Evolution hooks

- **Category-sufficiency check:** when the sufficiency log accumulates a pattern of "YES" or "UNCERTAIN" entries identifying a cognitive operation with no category fit, a 5th-category SIC loop may be proposed
- **Primitive Profiles:** when primitive set version increments materially, profiles flagged for review per review-trigger protocol
- **Rejected-list revival:** when a revival trigger fires on a rejected candidate, that candidate re-enters consideration via SIC loop
- **Future-candidate register:** when a deferred candidate's trigger fires, it moves from register to active inquiry seed
- **This file:** when the typed primitive set materially changes, or when a new discipline is admitted, or when a revival trigger fires, this file is updated

---

## Charter: what `docs/` holds

`docs/` holds curated stable-view files for architectural concepts — **one file per concept**.

Future additions must pass the "curated stable-view of an architectural concept" test.

---

## References

- `devdocs/inquiries/thinking_disciplines_audit/finding.md` — the audit that produced this taxonomy
- `devdocs/inquiries/thinking_space_primitives/finding.md` — typed 11-primitive set (used as audit tool for primitive profiles)
- `docs/thinking_space_dynamics.md` — architectural context
- `docs/desc.md` — end-goal context + future-candidate register
