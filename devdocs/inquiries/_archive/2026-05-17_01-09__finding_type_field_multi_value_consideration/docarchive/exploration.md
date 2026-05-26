# Exploration — Finding Type-Field Multi-Value Consideration

## Territory Overview

**Territory.** Two co-located sub-territories: (a) the empirical CORPUS — actual findings in `devdocs/inquiries/**/finding.md` that may or may not span multiple types; (b) the SCHEMA DESIGN space — alternative shapes the `type:` frontmatter key could take to handle multi-type cases.

**Mode.** Hybrid — artifact (corpus findings) + possibility (schema candidates).

**Entry-point.** Signal-first. The prior finding's silent assumption (multi-type findings don't exist or aren't worth schema-handling) is the explicit hypothesis to probe.

**Resolution.** D3 (functional one-line + structural-adjacency: per finding, which apparent type variants are present; per schema option, what it requires + what it permits).

**Boundary** (from sources): the prior finding's 4-variant enum (`decision | spec-modification | recommendation | loop-diagnose`); the project's ~50-finding corpus; the three findings I (this conversation) just produced — these are the freshest empirical evidence.

---

## Inventory

### R1 — Empirical evidence from recent findings (artifact mode)

Three findings produced in the past 24 hours, examined for type multiplicity:

**R1a — `sensemaking_spec_capability_comparison/finding.md`** (2026-05-16_00-35)
- Primary content shape: **decision** (pick promotion strategy V1 vs V2 vs V3).
- Also carries: **spec-modification** (Next Actions MUST: "Snapshot the current live spec" + replace file + add `status: live` frontmatter — concrete file edits with verification gates).
- Multi-type membership: **decision + spec-modification**. The finding's body has the decision-variant shape (verdict from candidates) AND a spec-modification trailer (concrete per-edit specs with paths and verification).

**R1b — `biggest_next_gain_toward_breakthrough/finding.md`** (2026-05-16_09-04)
- Primary content shape: **recommendation** (3-tier ranked plan with conditional reasoning per the prior finding's recommendation-variant pattern).
- Also carries: **decision** (selected Assembly X as default over W5 /intuit Phase A with explicit kill verdict) + **spec-modification** (Next Actions MUST: edit `cognitive_harness/MVL+/SKILL.md` template + edit `cognitive_harness/protocols/conclude.md`).
- Multi-type membership: **recommendation + decision + spec-modification**. Three apparent types in one finding.

**R1c — `name_for_navigation_discipline/finding.md`** (2026-05-16_15-18)
- Primary content shape: **decision** (rename `/navigation` → `/navigate` vs alternatives).
- Also carries: **spec-modification** (Next Actions MUST: `git mv` folder + `perl -i -pe` on frontmatter + grep+sed cross-references — fully concrete spec edit).
- Multi-type membership: **decision + spec-modification**.

**Empirical signal: 3 of 3 recent findings span two or three of the prior finding's four type-variants. Multi-type is the COMMON case, not a rare edge.**

### R2 — Structural overlap among the four type variants

| Variant pair | Overlap shape | Frequency in recent corpus |
|---|---|---|
| **decision ↔ spec-modification** | A decision that requires concrete file edits to realize the chosen option. The decision is the verdict; the spec-modification is its implementation. | R1a, R1b, R1c — all three findings exhibit this overlap |
| **recommendation ↔ decision** | A ranked recommendation that names a default top pick. The recommendation lists options; the decision identifies the default. | R1b exhibits this |
| **recommendation ↔ spec-modification** | A recommendation whose top pick is a concrete spec edit. | R1b exhibits this |
| **loop-diagnose ↔ spec-modification** | A diagnosis that names what to fix in a protocol/spec. | Not in recent corpus but plausible per prior finding's loop-diagnose discussion |
| **decision ↔ recommendation** | A decision presented as the top of a ranked recommendation list. | Indistinguishable from "recommendation with named default" in practice |
| **decision ↔ loop-diagnose** | A diagnosis that decides between failure-attribution candidates. | Plausible; not in recent corpus |
| **recommendation ↔ loop-diagnose** | A diagnosis-driven set of recommended fixes. | Plausible |
| **spec-modification ↔ loop-diagnose** | (subset of loop-diagnose ↔ spec-mod above) | Plausible |

**Key structural finding:** the four variants are NOT orthogonal — they form a partially-ordered set with multiple overlap regions. The prior finding treated them as a flat enum.

### R3 — Schema design candidates (possibility mode)

Six candidate schemas surveyed:

| Candidate | Shape | What it preserves | What it costs |
|---|---|---|---|
| **A1 — Strict single-value with collapse rule** | `type: decision` (enum unchanged); explicit rule "if a finding both decides AND modifies a spec, the DOMINANT type wins, with dominance defined by..." | Cheapest schema change; preserves existing variant body; preserves HALT-and-ask behavior | Requires a collapse rule the prior finding didn't write; some genuine multi-type cases may be forced into a wrong bucket |
| **A2 — List-valued** | `types: [decision, spec-modification]`; first entry selects Finding-body variant | Minimal schema change (key plural); preserves variant body via first entry; secondary entries are filter metadata | CONCLUDE's HALT-and-ask rule needs revision; cross-reference filters that assume scalar need updating |
| **A3 — Primary + secondary fields** | `type: decision` + `also: [spec-modification]` | Explicit primary; secondary is metadata-only; minimal change to CONCLUDE | Two fields to maintain; "also" semantics need a definition |
| **A4 — Composition variant** | Expand enum to include hybrid types: `decision+spec-modification`, `recommendation+spec-modification`, etc. Closed enum still | No schema-shape change (still single-valued enum); explicit hybrid bodies | Enum-size explosion (potentially N+(N choose 2) hybrid types — 4 + 6 = 10 variants); each hybrid needs its own Finding-body template |
| **A5 — Faceted typing** | Orthogonal axes: `decides: yes/no`, `modifies_spec: yes/no`, `recommends: yes/no`, `diagnoses: yes/no` — multiple facets co-exist by design | Maximum precision; orthogonality is honest about the partial-order | Four fields; cross-finding filter complexity; the Finding-body variant selection becomes a function of multiple facets rather than a single field |
| **A6 — Drop typing entirely** | No `type:` field; let body shape itself per author judgment | Zero schema cost | Loses the structural-check enforcement; loses the variant-body framework that motivated the prior finding |

### R4 — Comparison: what does each schema option imply for the three recent findings?

| Finding | A1 (single + collapse) | A2 (list) | A3 (primary + also) | A4 (composition) | A5 (faceted) |
|---|---|---|---|---|---|
| R1a sensemaking-spec-comparison | type: decision (collapse rule favors decision over spec-modification because "decision drives the modification") | types: [decision, spec-modification] | type: decision; also: [spec-modification] | type: decision+spec-modification | decides: yes; modifies_spec: yes |
| R1b biggest-next-gain | type: recommendation (collapse: recommendation contains the decision) | types: [recommendation, decision, spec-modification] | type: recommendation; also: [decision, spec-modification] | type: recommendation+spec-modification (the decision is implicit in any ranked recommendation) | decides: yes; modifies_spec: yes; recommends: yes |
| R1c name-for-navigation | type: decision | types: [decision, spec-modification] | type: decision; also: [spec-modification] | type: decision+spec-modification | decides: yes; modifies_spec: yes |

A1's collapse rule forces a per-case judgment; the rule itself is what's missing in the prior finding.

A2 is the smallest spec change that captures the empirical reality.

A4's enum explosion is real: 4 base + 6 pairwise hybrids = 10 type variants; each needs body shape.

A5 captures the most precision but is the most expensive schema change.

---

## Signal Log

| Signal | Where fired | What it surfaced |
|---|---|---|
| **Density** | R1, R2 | Every recent finding (3/3) is multi-typed; overlap among variants is structurally common, not edge-case |
| **Novelty** | R3 schema candidates | The list-valued (A2), primary+also (A3), and composition (A4) options are not in the prior finding's solution space |
| **Relevance** | R1, R2 | Direct evidence that the prior finding's single-valued assumption mismatches the actual corpus shape |
| **Tension** | R2 | The four type variants form a partially-ordered set, but the prior finding treats them as a flat enum — type-theoretic mismatch |
| **Absence** | The prior finding has no `also`-type field, no list form, no collapse rule. The prior finding's `related` and `diagnoses` keys serve different purposes (cross-finding pointers, not type-membership). |

**Probed:** R1 (3 recent findings examined for type membership), R2 (variant overlap structurally analyzed), R3 (6 schema candidates).

**Deferred:** A deep audit of the full ~50-finding corpus to count how many findings are multi-typed; the 3-of-3 evidence from R1 is sufficient signal at this resolution.

---

## Confidence Map

| Region | Confidence | Notes |
|---|---|---|
| R1a/R1b/R1c multi-type analysis | **confirmed** | Direct file inspection; each finding's body and MUST section examined |
| R2 variant overlap | **confirmed** | Structural analysis grounded in the four variants' definitions |
| R3 schema candidates | **confirmed** as a survey | The 6 candidates are exhaustive of the natural shapes; novel ones beyond would be exotic |
| R4 per-candidate per-finding | **inferred** | Direct mapping of evidence to schemas; depends on definitions |

**Confirmed-absent regions** (productive negative findings):

- **The prior finding has no argument for single-value-as-correct.** It assumes single-value without testing the multi-type alternative. This is the gap the user pointed at.
- **No collapse rule exists** that could rescue the strict single-value option (A1) without explicit construction.
- **No corpus statistics** in the prior finding count multi-type findings (the prior measured `related`/`diagnoses`/`verdict` key adoption but not type-multiplicity).

---

## Frontier State

**Stable.** Jump scan: are there schema options outside the 6 surveyed? Two extras considered (A7 free-form tags with no enum; A8 implicit type from body structure) — both fail on losing the variant-body benefit. No surprises.

---

## Gaps and Recommendations

To Sensemaking:
- What does "single-type finding" actually mean? If it means "the finding has exactly one variant body shape," that's structural — empirically every recent finding has multi-variant body shape, so single-type-by-this-definition is false. If it means "the finding has one dominant intent," that's interpretive — and the prior finding's variants are partially ordered, so dominance has a structural definition that may or may not hold.
- Is the multi-type phenomenon a property of the finding or of the inquiry? An inquiry can be a pure decision question that produces a finding with both decision and spec-mod content because realizing the decision REQUIRES spec edits. Is that finding multi-type, or single-type with deferred-to-implementation content?
- The decision/spec-modification overlap may be the MOST common case (R1a, R1b, R1c all show it). Is the right answer to define a composite variant for that one overlap (a constrained A4) rather than full list-valued (A2)?

To Decomposition:
- Decompose into: (i) does multi-type exist as a phenomenon (meaning); (ii) if yes, which schema captures it best (structural); (iii) what does CONCLUDE do (process, deferred).
- The follow-on structural decision sub-divides: pick among A1–A5 based on cost/benefit.

To Innovation:
- Generate any hybrid schemas not in the 6 surveyed (e.g., A2 + A4 hybrid: list-valued WITH some predefined hybrid types).
- Surface emergent assemblies that combine schema simplicity with multi-type honesty.

To Critique:
- Adversarially test each schema candidate against the per-finding evidence (R4).
- Kill candidates that don't honor the partial-order structure.
- Surface the collapse rule for A1 — is it actually constructible, or is A1 a hidden form of "the author picks arbitrarily"?

**Frontier observations:**

- The prior finding's contribution survives this critique on most fronts (4 variants are real; the universal base + variant body is sound). What's at risk is just the single-valued assumption.
- The cleanest refinement may be A2 (list-valued) with the first entry as the variant-body selector — minimal schema change that preserves the prior finding's architecture.

---

## Telemetry

- **Mode:** hybrid (artifact + possibility)
- **Entry point:** signal-first
- **Cycles run:** 2 (initial scan + jump scan)
- **Candidates:** 6 schema options + 3 corpus exemplars + variant-overlap matrix
- **Signals fired:** 5/5 types
- **Failure modes checked:** Premature depth (no — corpus scanned first); Surface-only scanning (no — variant overlap analyzed structurally); False confidence (no — jump scan performed); Premature termination (no — three convergence criteria met); Re-exploration (no — frontier tracked); Completeness bias possibility-mode (no — exhaustive 6 candidates); Open→closed drift (no — annotations at labeling level); Silent boundary-discovery (no — boundary explicit); Negative-space silent drop (no — confirmed-absent regions named); Inadequate D2 minimum (no — D3 maintained)
- **Convergence criteria:** frontier-stability ✓; declining-discovery-rate ✓; bounded-gaps ✓
- **Verdict:** PROCEED

## Self-Assessment

**PROCEED.** The single most load-bearing finding for downstream: **the multi-type phenomenon is empirically confirmed in 3 of 3 recent findings.** The prior finding's silent single-value assumption is not just a gap — it's a mismatch with corpus reality. Sensemaking's job is to settle the meaning question (is multi-type real or apparent?); Innovation's job is to generate hybrid schemas; Critique's job is to pick a schema that honors the partial-order structure of the four variants.
