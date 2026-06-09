# Branch: per_phase_placement_failure_modes_with_distinguishing_header

## Question

- **Subject** — whether per-phase placement (failure modes distributed inline at each phase where they apply, with a distinguishing-header like `**Failure modes preventable at this phase:**`) is structurally better than the prior framework's recommended Hybrid overview+detail pattern for `/td-critique` §4 Failure Modes specifically — and what that says about (a) the framework's catalog recommendation OR (b) failure modes being a SPECIAL CASE within the catalog content-type.
- **Action** — adjudicate + design + (possibly) refine the prior framework. Adjudicate the user's intuition that per-phase placement is the "correct way" against the prior framework's analytical recommendation. Design a concrete per-phase + distinguishing-header scheme if the user's intuition wins. Possibly refine the prior framework to carve out failure modes as a special-case content-type if needed.
- **Level** — discipline-spec artifact (`td-critique.md`); cross-cutting (because the answer likely applies to other discipline specs with phase-affined failure modes).
- **Observation targets**:
  1. **Is the user's intuition structurally grounded?** Does per-phase placement actually serve `/td-critique`'s use case better than Hybrid overview+detail when failure modes have strong phase-affinity? Or is the intuition an artifact of preference?
  2. **What is the "Failure Modes:" header proposal structurally?** A simple visual distinguisher. Does it solve a real problem (separating failure-mode content from regular phase body content) or add bureaucracy?
  3. **Hybrid candidate: per-phase placement + thin catalog overview at §4.** A thin overview table at the top of the spec (or in §4) that points to per-phase locations. Does this resolve the "catalog scan loss" concern from the prior framework while preserving per-phase locality?
  4. **What does this say about the prior framework?** Does failure modes being a "phase-affined catalog" mean (a) the framework's catalog recommendation needs a special-case carve-out, (b) the framework was wrong about catalogs in general, or (c) the framework was right and the user's intuition is per-discipline-preference-not-meta-pattern?
  5. **Concrete shape for `/td-critique` §4 if per-phase placement wins.** Specifically: header text wording; relationship to existing refinement notes at each phase; what happens to the §4 collection (deleted? thinned to overview?); cross-references update plan.
- **Deliverable shape** — adjudication + concrete shape recommendation + framework-refinement (or framework-stays-with-caveat).

**The question.** Is per-phase placement of failure modes (with a simple `**Failure modes preventable at this phase:**` distinguishing header) structurally better than the prior framework's Hybrid overview+detail recommendation for `/td-critique` §4 Failure Modes — and if yes, does that mean failure modes are a special case OR does the framework need refinement?

## Goal

- **Criterion** — structurally honest adjudication. Don't rubber-stamp the user's preference; don't dismiss it either. Test the user's intuition against the prior framework's reasoning AND against external precedents. Produce a concrete recommendation that the user can act on for `/td-critique` §4.
- **Use case** — decide how to shape `/td-critique` §4 specifically (the upcoming application from the prior framework's COULD #2). If per-phase placement wins, apply it; if Hybrid overview+detail wins, apply that; if a third hybrid wins, apply that.
- **Desired outcome** — a single concrete shape recommendation for `/td-critique` §4 + (if applicable) a refinement to the prior framework that carves out the special case explicitly.
- **What would fail**:
  - Rubber-stamping the user's preference without structural reasoning ("you said per-phase placement so we do per-phase placement").
  - Defending the prior framework without honestly testing it against the user's challenge.
  - Producing a recommendation that's structurally inconsistent with the prior framework (e.g., recommending per-phase for failure modes without explaining why hooks/mechanisms in other disciplines shouldn't use per-phase too).
  - Producing a recommendation that doesn't address the user's distinguishing-header question concretely.

## Source Input

```text
Per-phase placement — failure modes distributed inline at each phase where they apply; no central catalog. Strong for content with strong phase-affinity; loses catalog scan.

i feel like this is correct way, but still we should distingusih them somehow? maybe simple Failure Modes: like header under each phase? 

what do you think?
```

## Scope Check

Question covers goal. The question targets the structural adjudication of per-phase vs Hybrid overview+detail for failure modes specifically + the distinguishing-header question; the goal is a concrete shape recommendation + framework refinement if needed.

**Specific-vs-pattern check.** The user's question is about `/td-critique` §4 specifically (the upcoming application) but the answer likely generalizes to other phase-affined catalog content in other discipline specs. Inquiry addresses both: the specific application AND the meta-pattern implication.

## Layer Commitment

**Primary layer: STRUCTURAL.**

The question is about what the spec ARTIFACT LOOKS LIKE — whether failure modes appear in one central §4 section OR distributed across phases; whether to add a distinguishing header; what the per-phase block looks like structurally. That is the structural layer.

Other layers considered and out of scope for THIS run:

- **Meaning** — what failure modes ARE as a concept. Already settled in `/td-critique`'s §4 entries; not in question.
- **Process** — when in a real `/td-critique` invocation the practitioner consults a failure mode. Downstream of the structural choice.

**Sequential plan.** Structural here. If process-layer follow-up is needed once a shape is committed, it can be a sequential follow-up inquiry.

## Synthesis Trigger

OMITTED. The inquiry consumes the prior framework finding (`devdocs/inquiries/2026-06-09_17-04__discipline_spec_text_organization_patterns_catalog/finding.md`) as inherited context but it's ONE prior, not TWO OR MORE — strict Synthesis Trigger doesn't fire. The inquiry's discipline work will explicitly RE-TEST the framework's catalog recommendation against the user's challenge as the central adjudication; the inheritance is honest.

Key inherited commitments from the prior framework to re-test:
1. Catalogs → Hybrid overview+detail (the framework's recommendation that this inquiry directly challenges).
2. Per-phase placement → strong for firing-locus locality but loses catalog scan (the framework's per-phase verdict; the user's intuition argues this trade-off is favorable for failure modes).
3. Per-content-type consistency across disciplines (the framework's cross-spec rule; this inquiry must address whether failure modes are a special case OR the rule extends to per-phase for failure modes everywhere).
4. The 5 content-types named: enumerated catalog / process / refinement notes / vocabulary / large catalogs (this inquiry tests whether failure modes are properly classified as "enumerated catalog" or whether they're a distinct "phase-affined catalog" content-type).
