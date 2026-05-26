# Innovation — Materialization Relationship to MVL Loop

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-17_14-15__materialization_relationship_to_mvl_loop/_branch.md
```

## Seed

Sensemaking confirmed the architectural verdict (O2 family — separate-triggerable peer-protocols) and narrowed to 3 viable boundary-UX verdicts (W1 suggestion line / W2 trigger artifact / W3 README-reframe-only). Innovation expands the candidate space: surface hybrids between W1/W2/W3 and test whether new mechanisms produce options Sensemaking missed.

## Direction

- **Context.** Artifact's separate-triggerable design with 8-source Universal Input Contract; CONCLUDE's current end-state (brief summary + relationship pointers + stop); README's tension.
- **Valuation.** Minimum cost; respect artifact design; capture user's "trigger" framing.
- **Motivation.** Deliver actionable verdict for /MVL+ ↔ materialization boundary.

---

## Phase 2 — Generate (7 mechanisms)

### 1. Lens Shifting (Framer)

- **LS-Generic.** "What does a fresh AI session need to do materialization?" Without context, the session needs a recent finding + Universal Input Contract fields. O4 (trigger artifact) pre-populates the contract.
- **LS-Focused.** "What does the user actually do post-/MVL+?" Discoverability + ease of invocation. O3 addresses discoverability; O4 addresses both.
- **LS-Contrarian.** "What if materialization is ALMOST NEVER the right next move?" Most findings are decisions/recommendations that don't materialize. Surfacing materialization at every finding is noise. The conditional logic matters more than the form.

### 2. Combination (Generator)

- **CB-Generic.** W1 + W2 hybrid — suggestion line AND trigger artifact. Cheap suggestion for human discoverability; trigger artifact for AI/runner consumption.
- **CB-Focused.** W2 narrowed by `type:` — trigger artifact only when `type: spec-modification`.
- **CB-Contrarian.** Suggestion embedded in CONCLUDE's existing `## Relationships` pointers (reuses existing infra).

### 3. Inversion (Framer)

- **IV-Level-1.** Materialization protocol signals INTO /MVL+ rather than /MVL+ signaling out. Bilateral signal.
- **IV-Level-2 (system).** No separate trigger artifact; materialization reads finding.md directly via a `from_finding` entry-point. Removes the artifact.
- **IV-Contrarian.** Materialization is human-gated only; no auto-trigger or suggestion at all.

### 4. Constraint Manipulation (Framer)

- **CM-Generic.** Remove "minimize spec change" → adopt W2 fully.
- **CM-Focused.** Add: "verdict must work for ALL 8 source_authority values." Trigger artifact pattern (W2) generalizes; suggestion line (W1) is /MVL+-specific.
- **CM-Contrarian.** Add: "no new artifact types." W1 and W3 survive; W2 killed.

### 5. Absence Recognition (Generator)

- **AR-Gap-Generic.** Missing documented INVOCATION CONTRACT (Universal Input Contract names fields but not HOW to invoke). Add an "Invocation" section to the artifact.
- **AR-Gap-Focused.** Missing **materialization-completion frontmatter marker** on finding (traceability after materialization completes).
- **AR-Gap-Contrarian.** Missing `materialize: skip | defer | auto` frontmatter field on finding (explicit gating).
- **AR-Redesign.** New concept — **materialization queue**. /MVL+ appends pending materializations; queue is the aggregate trigger artifact.

### 6. Domain Transfer (Generator)

- **DT-Software (event sourcing).** /MVL+ emits "finding produced" event; materialization subscribes. Trigger artifact is the event payload.
- **DT-Software (CLI piping).** finding.md IS the input; materialization reads it directly. Aligns with IV-Level-2.
- **DT-Workflow (Airflow).** Materialization is downstream task triggered by finding-production condition.
- **DT-GIT (staging area).** Pending materializations queued; `materialize` consumes them.

### 7. Extrapolation (Generator)

- **EX-1-month.** Per-finding suggestion or trigger artifact scales linearly. Cost remains small at current rate.
- **EX-6-months.** Queue pattern becomes more attractive as corpus grows.
- **EX-10-years.** Queue is the natural long-term architecture.

---

## Phase 3 — Test

### Consolidated candidate set

| Candidate | Origin |
|---|---|
| **W1** | Sensemaking — O3 suggestion line |
| **W2** | Sensemaking — O4 trigger artifact |
| **W3** | Sensemaking — status quo + README reframe |
| **N1** | CB-Generic — W1 + W2 hybrid (both signals) |
| **N2** | CB-Focused — W2 narrowed by `type: spec-modification` |
| **N3** | CB-Contrarian — suggestion in existing `## Relationships` pointers |
| **N4** | IV-Level-2 — no trigger artifact; materialization reads finding.md directly |
| **N5** | IV-Contrarian — human-gated only |
| **N6** | AR-Gap-Focused — materialization-completion frontmatter marker (modifier) |
| **N7** | AR-Gap-Contrarian — `materialize:` frontmatter field on finding |
| **N8** | AR-Redesign + DT-GIT + EX-6-months — materialization queue |

### Tests per candidate

| Candidate | Novelty | Scrutiny | Fertility | Actionability | Mech-independence | Disposition |
|---|---|---|---|---|---|---|
| **W1** | Low | Survives — small, conditional | Medium | HIGH | Multi (LS-Focused, DT-Workflow) | **ACTIONABLE — default** |
| **W2** | Medium | Survives — richer, long-term cleaner | HIGH | Medium | Multi (DT-event-sourcing, CM-Focused) | **ACTIONABLE — long-term default** |
| **W3** | Low | Under-honors user framing | Low | HIGH | Low | **ACTIONABLE-minimum** |
| **N1** | Medium | Counter "two signals where one suffices"; defense "different audiences" | HIGH | Medium | CB-Generic + LS-Generic | **ACTIONABLE-richer-pairing** |
| **N2** | Medium (refinement) | Survives — narrows W2 scope | Medium | HIGH | CB-Focused | **ACTIONABLE-refinement-of-W2** |
| **N3** | Medium-High (reuses infra) | Counter "materialization isn't really a relationship"; defense partially valid | Medium | HIGH | CB-Contrarian | **ACTIONABLE-alternative-to-W1** |
| **N4** | HIGH | Out of THIS inquiry's scope (artifact's design stands per SA4) | HIGH | Medium | IV-Level-2 + DT-CLI | **REFINE — defer to a future artifact-revision inquiry** |
| **N5** | Medium | Doesn't fit user framing ("MVL loop can trigger") | Low | High | IV-Contrarian | **REFINE — incompatible with branch frame** |
| **N6** | Medium | Survives — useful traceability | Medium | HIGH | AR-Gap-Focused | **ACTIONABLE-as-modifier (separate from main verdict)** |
| **N7** | Medium | Counter "adds field for rare case" | Medium | HIGH | AR-Gap-Contrarian | **REFINE — defer until needed** |
| **N8** | HIGH | Premature for current scale | HIGH long-term | LOW | AR-Redesign + DT-GIT + EX-6-months | **RESEARCH FRONTIER** |

### Assembly check

All three viable Sensemaking verdicts (W1, W2, W3) implicitly include the README reframe (cross-cutting per Decomposition's SA3). The interesting hybrids add N6 (completion marker) as a modifier:

- **Assembly X — W1 + N6 + README reframe.** Suggestion line at CONCLUDE + completion marker on finding frontmatter post-materialization + README reconciliation. Discoverability at handoff + traceability after.
- **Assembly Y — W2 + N6 + README reframe.** Richer signal + traceability + reconciliation. Long-term-best.
- **Assembly Z — N1 + N6 + README reframe.** Both signals + traceability + reconciliation. Maximum-coverage option.

### Axis coverage

| Axis | Variants |
|---|---|
| Signal strength | W3 (none) / W1 (soft) / W2 (rich) |
| Effort | W3 (zero) / W1 (small) / W2 (medium) / N6 (tiny) |
| Feedback loop | with/without N6 |
| Conditional logic | unconditional / `type:`-conditional (N2) / MUST-Edit-Spec-conditional |

Coverage complete.

### Failure-mode self-check

- **Premature evaluation:** No.
- **Single-mechanism trap:** No.
- **Early frame lock:** No (LS-Contrarian, IV-Level-2, IV-Contrarian all explored alternatives).
- **Innovation without grounding:** No.
- **Mechanism exhaustion:** No.
- **Survival Bias:** W1 is comfortable default; tested against N5 (uncomfortable, human-gated only). N5 doesn't fit branch frame ("MVL loop can trigger"); W1 wins on framing-fit, not comfort. Multi-mech convergence supports.

---

## Telemetry

- **Generators applied:** 4 / 4
- **Framers applied:** 3 / 3
- **Coverage:** FULL (7/7 mechanisms)
- **Convergence:** 2 mech → W1 (LS-Focused + DT-Workflow); 3 mech → W2 (DT-event-sourcing + CM-Focused + EX-10-years); 1 mech each on most N candidates.
- **Survivors tested:** 11 / 11
- **Dispositions:** 5 ACTIONABLE (W1, W2, W3, N1, N3) + 1 ACTIONABLE-refinement (N2) + 1 ACTIONABLE-as-modifier (N6); 3 REFINE (N4, N5, N7); 1 RESEARCH FRONTIER (N8)
- **Emergent assembly:** Assembly X (W1 + N6 + README) as natural pairing; Assembly Y (W2 + N6 + README) as long-term-best; Assembly Z (N1 + N6) maximum.
- **Failure modes:** None visibly (Survival Bias resolved).
- **Overall:** PROCEED.

## Hand-off to Critique

Decisive comparisons:
1. **W1 vs W2** — does the long-term value of W2's trigger artifact justify the medium effort over W1's tiny suggestion line, given the current corpus state?
2. **W1 vs N3** — does embedding in `## Relationships` (N3) cost less than a separate suggestion line (W1)?
3. **N6 as modifier** — is the completion-marker worth adding regardless of the main verdict?
4. **W3 vs all** — does pure README reframe under-honor the user's "trigger" framing?
5. **The emergent assemblies** — X (W1+N6+README) vs Y (W2+N6+README) — does richer signal pay back its cost?
