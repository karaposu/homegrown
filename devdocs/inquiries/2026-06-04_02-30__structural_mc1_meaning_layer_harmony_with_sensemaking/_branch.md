# Branch: Structural MC1 — Meaning-Layer Design + Harmony Mechanism with Sensemaking

## Question

- **Subject** — **Structural MC1** — the proposed structural-version reformulation of sensemaking's A8 Load-bearing concept test refinement, surfaced as a candidate in the prior LOOP_DIAGNOSE inquiry (`devdocs/inquiries/2026-06-04_01-00__loop_diagnose__itemize_default_split_miss/finding.md`) but not adopted there because the LOOP_DIAGNOSE Step 5 guardrail prefers narrow MCs at 2-instance MED confidence. The user explicitly named the harmony_layer.md analog (from a separate translation framework) as the SHAPE of the right reformulation: active misclassification + audit-blindness inheriting the misclassification.
- **Action** — DESIGN at the meaning layer: what structural MC1 SHOULD be (its right form); what it SHOULDN'T be (failure modes); how it HARMONIZES with the rest of sensemaking; HOW to achieve that harmony (the mechanism).
- **Level** — discipline-component (one refinement note within sensemaking's spec at `cognitive_harness/sense-making/references/sensemaking.md`).
- **Observation targets** (preserved separately — the user's framing bundles 4 distinct concerns):
  1. **What structural MC1 SHOULD be.** The right meaning-layer form of A8's reformulation. The harmony_layer.md analog suggests: reformulate A8's test predicate from "verify the term" to "verify the load-bearing aspect of the concept" with the aspect determined by how the concept makes contact with the inquiry's purpose. What is the right way to articulate this without over- or under-generalizing?
  2. **What structural MC1 SHOULDN'T be.** Failure modes:
     - **Over-generalization** — making A8 so broad it becomes vague ("test everything about every concept");
     - **Under-generalization** — fixing only the user-named-operations subclass and missing future subclasses of the same shape;
     - **Replacement** — replacing A8's existing utility (vocabulary-alignment of newly-coined or domain-terminology-vs-external-default terms) with a different test;
     - **Disharmony** — introducing a new test alongside existing tests without harmonizing the underlying purpose;
     - **Circularity** — making the test predicate presuppose what the test is testing (e.g., "test the load-bearing aspect" where "load-bearing aspect" already assumes the test result);
     - **Architectural disruption** — requiring re-architecting Phase 3 or other sections that don't need to change.
  3. **Harmony with rest of sensemaking — what parts must structural MC1 harmonize with?** The candidates:
     - A8's existing verb-meaning (the operation called "Load-bearing concept test");
     - The existing A8 sub-aspects (Phase 1 / SV2+ / Phase 5 specific test-targets);
     - The illustrative-not-exhaustive principle (the spec explicitly says "the illustrative list is not exhaustive");
     - Phase 3's overall purpose (Ambiguity Collapse — converting ambiguities into structural commitments);
     - The discipline's purposive character (sensemaking is purpose-conditioned);
     - The meta-inspection hook architecture (H4 concept names; the load-bearing concept test is itself a hook-driven check per H4);
     - The failure-mode framework (Premature Stabilization #2 — the failure mode A8 prevents);
     - Phase 2's anchor types (Constraints / Insights / Structural Points / Foundational Principles / Meaning-Nodes — all of which can be load-bearing concepts).
  4. **How to achieve that harmony — the mechanism.** Candidates for the achievement mechanism:
     - Preserve A8's verb-meaning verbatim;
     - Reformulate the test TARGET, not the test verb-meaning, so the existing sub-aspects' specific predicates become INSTANTIATIONS of the reformulated target rather than alternatives to it;
     - Make the load-bearing-aspect determination an OPERATION OF the test rather than a presupposition (the test asks "what's the load-bearing aspect of this concept?" before testing it, rather than presupposing the aspect);
     - Frame the reformulation as a GENERALIZATION-OF-the-existing-sub-aspects rather than as their replacement;
     - Hook the reformulation to H4 (concept names) meta-inspection so the load-bearing-aspect determination triggers at the correct phase-end.
  5. **The structural defect's true name in sensemaking-native terms.** The harmony_layer.md analog calls this "active misclassification + audit-blindness inheriting the misclassification." Is that the right frame for A8 + critique's dimension-extraction-from-sensemaking-commitments? Or is there a more sensemaking-native frame — e.g., "incomplete-test-target conflated-with-complete" + "downstream commitment-extraction inherits the incomplete target"?
  6. **The LOOP_DIAGNOSE Step 5 guardrail tension.** Structural MC1 reformulates A8's underlying logic, which is bigger than Step 5 anticipates from 2 instances. How does this inquiry honor the guardrail while still doing the design work? Candidate: settle the meaning-layer of structural MC1 (this run) without committing to immediate implementation; the implementation gate is the same promotion criterion (3rd LOOP_DIAGNOSE chain producing the same shape via a different subclass; OR explicit user override).
- **Deliverable shape** — a meaning-layer design = the SHOULD-form (what structural MC1 IS as a reformulation) + the SHOULDN'T-list (what it isn't) + the harmony-with-sensemaking analysis (which sensemaking parts it must respect, and why) + the achievement mechanism (how the form preserves harmony) + a sensemaking-native naming of the defect being addressed + an honest statement of the Step 5 guardrail tension and how this run resolves it.

**Question (one-sentence coverage):** What is the right meaning-layer form of structural MC1 — the reformulation of sensemaking's A8 Load-bearing concept test refinement — such that it (a) closes the underlying defect (A8's test target verifies the term-aspect but the load-bearing aspect of a concept may not be its term) by reformulating the test target without over-generalizing into vagueness or under-generalizing into a fix-this-case-only sub-aspect; (b) preserves A8's verb-meaning and existing sub-aspects as instantiations rather than alternatives; (c) harmonizes with sensemaking's purposive character, illustrative-not-exhaustive principle, meta-inspection hook architecture, and Phase 3 Ambiguity Collapse purpose; (d) makes the load-bearing-aspect determination an operation of the test rather than a circular presupposition; (e) gives a sensemaking-native naming of the defect (rather than only the harmony_layer.md analog's frame); and (f) honors the LOOP_DIAGNOSE Step 5 guardrail (do not propose broad rewrites from 2 instances) by committing the meaning-layer design without committing implementation until promotion criteria fire?

## Goal

- **Criterion** — precision (structural MC1's form concrete enough to evaluate); explicit shouldn't-list with reasons; the harmony principle is articulated, not assumed; the achievement mechanism is operational; honest sensemaking-native naming of the defect; explicit acknowledgement of the Step 5 guardrail tension and the conditional-implementation resolution.
- **Use case** — once meaning-layer is settled, a structural-layer inquiry can author the exact A8 amendment in `cognitive_harness/sense-making/references/sensemaking.md`. Implementation gate: 3rd LOOP_DIAGNOSE chain producing the same defect shape via a different subclass (per promotion criterion in the 01-00 finding) OR explicit user override authorizing implementation at MED confidence.
- **Desired outcome** — a concrete meaning-layer design I can present to the user with: this is structural MC1's form / this is what it isn't / this is how it harmonizes / this is the achievement mechanism / this is the defect's name / this is how Step 5 is honored.
- **What would fail** —
  - (i) producing a vague restatement of "make A8 better" without concrete reformulation;
  - (ii) over-generalizing to a generic "test all aspects of all concepts" that loses sensemaking's specificity;
  - (iii) under-generalizing to a one-subclass fix indistinguishable from the surgical MC1;
  - (iv) ignoring the LOOP_DIAGNOSE Step 5 guardrail;
  - (v) creating disharmony with another sensemaking principle (the meta-inspection hooks, the failure-mode framework, the illustrative-not-exhaustive rule);
  - (vi) circularity in the test predicate (presupposing the load-bearing aspect);
  - (vii) silently importing the harmony_layer.md framework's vocabulary without translating to sensemaking-native terms;
  - (viii) producing a version that requires re-architecting Phase 3 or any other sensemaking section unnecessarily.

## Source Input

```text
lets discuss further structural MC1 , how it should be how it shouldnt be etc. and make sure it is in harmony with rest of sensemaking and how to achieve that.
```

(Context — the prior turn established that surgical MC1 adds a sub-aspect under A8 for the user-named-operations subclass; structural MC1 would reformulate A8's test predicate from "verify the term" to "verify the load-bearing aspect of the concept" with the aspect determined by how the concept makes contact with the inquiry's purpose. The user's harmony_layer.md analog from a separate translation framework provides the SHAPE of the defect: active misclassification of a feature's tier when the source uses the feature structurally rather than stylistically; the audit instrument inherits the misclassification's blindness. The user is asking for the meaning-layer design of structural MC1, the shouldn't-list, the harmony principle with sensemaking, and the achievement mechanism.)

## Scope Check

**Question covers goal: YES.** The 6 observation targets enumerate: SHOULD form / SHOULDN'T list / harmony parts / achievement mechanism / sensemaking-native defect naming / Step 5 guardrail tension resolution. Goal's "what would fail" fences off vague restatement, over-generalization, under-generalization, Step 5 ignorance, disharmony, circularity, vocabulary import, and architectural disruption.

**Specific-vs-pattern check:** the user explicitly named the harmony_layer.md analog as the SHAPE; the inquiry treats the shape as a structural pattern to be translated into sensemaking-native terms, not as a specific framework's vocabulary to import.

**Transcription-audit fail-safe:** clause-joiners in Source Input — "how it should be how it shouldnt be etc." (multi-clause; preserved as targets 1+2); "in harmony with rest of sensemaking AND how to achieve that" (clause-joiner "and"; preserved as targets 3+4). Each clause's semantic content appears in Question + Goal. **Transcription complete.**

## Layer Commitment

**Primary layer: MEANING.** The user is asking what structural MC1 IS as a refinement-of-A8 — its right form, its wrong forms, the principle by which it harmonizes with sensemaking, and the mechanism by which the form achieves harmony. Structural and process choices are downstream.

Out of scope for this run:
- **Structural** — exact spec section wording for the A8 amendment in `cognitive_harness/sense-making/references/sensemaking.md`. Deferred to the next inquiry that consumes this meaning-layer settlement.
- **Process** — implementation procedure (when to apply the edit; how to validate; how to roll out). Deferred.

Multi-layer plan: meaning (this run) → structural (next run, gated by promotion criterion per 01-00 finding OR user override) → process (after structural). The same meaning → structural → process sequence the project uses elsewhere.

## Relationships

- **CONTINUES FROM:** `devdocs/inquiries/2026-06-04_01-00__loop_diagnose__itemize_default_split_miss/finding.md` — this inquiry refines one of the maintenance candidates surfaced by the LOOP_DIAGNOSE (the structural reformulation of MC1, which was sketched as a promotion-candidate but not adopted there). Per CONCLUDE-time the finding's frontmatter should declare `refines:` against the 01-00 finding's MC1 section specifically — the meaning-layer design produced here becomes the structural-version-detailed sketch the 01-00 finding's promotion criterion can promote to action.
- **RELATED:** `cognitive_harness/sense-making/references/sensemaking.md` — the spec the eventual structural-layer authoring will amend; consulted as a CONSTRAINT (the meaning-layer design must harmonize with this spec's existing principles) not as a prior being synthesized.
- **METHODOLOGY PRECEDENT:** the harmony_layer.md analog (from a separate translation framework, named by the user) — used as a structural pattern (active misclassification + audit-blindness inheriting the misclassification) to be translated into sensemaking-native terms, not as a vocabulary to import.

(No Synthesis Trigger: the inquiry is design-shaped, not synthesis-shaped — it doesn't produce "an accurate version" of priors; it produces a new design that respects prior constraints. Synthesis Trigger fires for consolidation; this inquiry is creation.)
