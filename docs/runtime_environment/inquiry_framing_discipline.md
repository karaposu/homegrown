# Inquiry-Framing Discipline

A loop-builder-layer discipline for the person writing a new inquiry's `_branch.md`. The disciplines downstream (Exploration, Sensemaking, Decomposition, Innovation, Critique) operate on the candidate set the question implicitly defines. A pre-biased question pre-biases the disciplines' candidate set before any discipline runs. Catching pre-bias at framing time is the most-effective preventive intervention.

This is NOT a runtime AI discipline. It is a writing-time discipline for whoever (human or AI) is drafting the `_branch.md` content. It does not change the runtime behavior of any of the five MVL+ disciplines.

---

## When to apply

Apply this discipline when writing a `_branch.md` whose question compares multiple candidates and asks how they relate. Question shapes that trigger:

- "Is X different from Y?"
- "What's the overlap between A and B?"
- "Is C a specialization of D?"
- "What is the relationship between A and B?"
- "Are X, Y, and Z all instances of one thing?"
- Any question of the form "how do these N candidates relate?"

The discipline does NOT need to be applied to:
- Questions about a single subject ("What is X?", "How does X work?").
- Questions about an action ("How should we do X?", "What's the next step for X?").
- Questions about evaluation against fixed criteria ("Does X meet criteria Y?").

---

## The check — Question-Premise Pre-Bias Check

When the question's shape matches a relationship-between-candidates pattern, the question's framing pre-biases the candidate set the disciplines will analyze.

A question phrased as **"how are they different?"** pre-biases toward DISTINCTION (the analysis will find ways they differ).

A question phrased as **"how are they the same?"** pre-biases toward UNITY (the analysis will find ways they converge).

A question phrased neutrally as **"what is their relationship?"** pre-biases toward producing a TYPED RELATIONSHIP (e.g., "A is a specialization of B"; "A and B overlap but are separate") — which itself biases AWAY from full unification.

Pre-bias is structural — every question pre-biases something. The discipline is not to eliminate pre-bias (impossible) but to **surface it consciously** before committing the framing.

---

## How to apply

Before committing the `_branch.md` framing:

1. **Identify the framing's pre-bias.** Which direction does the question pull? Distinction, unity, typed relationship, partition, or other?

2. **State the inverse framing in one sentence.** What would the question look like if it pre-biased the opposite direction?

3. **Robustness test.** If the question would still be the right question under the inverse framing, the framing is robust. Commit it.

4. **Pre-bias detected.** If the inverse framing would reveal a different candidate set or a different verdict, the framing is pre-biased. Don't commit yet.

5. **Consider widening.** Phrase the question to ask both directions ("how are they related?" rather than "how are they different?" or "how are they the same?"). Or, if pre-bias is intentional and justified (e.g., a specific case calls for a distinction-finding focus), record the choice and the reasoning in the `_branch.md` Scope Check section so future readers see the deliberate decision.

The application is brief — typically a few minutes at framing time. The output is either a confirmed framing (with the inverse considered and ruled out), or a widened framing that the disciplines will analyze with a broader candidate set.

---

## Counter-example from project history

The 13-30 inquiry (`devdocs/inquiries/2026-05-11_13-30__explore_vs_navigation_overlap/`) asked:

> *"is navigation = explore + assess, OR specialization, OR schema-overlay?"*

All three candidates in the offered set pre-biased toward DISTINCTION-with-typed-relationship — each option assumed the candidates were structurally separate and the question was only about which TYPE of separateness. The candidate set excluded "are they actually one underlying operation?" — the unification candidate.

The MVL+ pipeline operated on the pre-biased candidate set. Sensemaking adjudicated the offered candidates, Innovation drafted within them, Decomposition partitioned them, Critique tested against them. The unification candidate was never surfaced.

The user pushed back externally:

> *"explore is concept_mapping + consuming the underlying content. and actually navigation is the same."*

The corrected 13-45 inquiry (`devdocs/inquiries/2026-05-11_13-45__is_explore_and_navigation_one_underlying_operation/`) reframed the question with the unification candidate as the foreground hypothesis. Sensemaking then produced the TEM (Typed Enumeration Mapping) partial-unification verdict, superseding the 13-30 finding.

Question-Premise Pre-Bias Check applied at the 13-30 `_branch.md` writing time would have surfaced the distinction-with-typed-relationship pre-bias and surfaced the inverse framing (unification) as a candidate. The 13-30 → 13-45 correction chain would not have been needed.

---

## Why this lives at the inquiry-framing layer

The diagnostic inquiry at `devdocs/inquiries/2026-05-11_14-00__loop_diagnose__why_disciplines_missed_convergence/finding.md` identified that question pre-bias originates at `_branch.md` writing time — BEFORE any discipline runs. The downstream disciplines (Sensemaking, Innovation, Decomposition, Critique) all operate on the candidate set the question implicitly defines.

The diagnostic finding designs a layered intervention:

- **Layer 1 (this discipline, ACTIONABLE now):** catch pre-bias at origin (inquiry-framing time). Most-effective intervention; reversible at near-zero cost; doesn't change runtime AI behavior at the discipline level. Single-instance evidence is sufficient — the same precedent that licensed the project's earlier scope-cut writing convention.

- **Layer 2 (DEFERRED until ≥3 instances of convergence-recognition failure):** a Sensemaking Question Premise Check refinement note + a Sensemaking Cross-Candidate Unity check refinement note + an Innovation Combination Generator candidate-set-level clarification, shipped as a bundled coordinated release at revival. Defense-in-depth catch-net for inquiries where Layer 1 was not applied.

Both layers together cover the failure surface. Layer 1 (this discipline) is the upstream-most catch and ships independently of Layer 2's revival trigger.

---

## How to know this discipline is working

Observable in the next `_branch.md` of relationship-between-candidates shape:

- Has the framer documented the framing's pre-bias?
- Has the framer stated the inverse framing and decided whether to test it?
- If pre-bias was intentional, is the choice recorded in `Scope Check` with reasoning?

If yes — the discipline is being applied.

If a relationship-between-candidates inquiry is framed without applying the check, and a convergence-recognition failure subsequently occurs (the disciplines miss a unity candidate that the user surfaces externally), that's evidence the discipline needs stronger prompting (e.g., explicit reminder in the runner's `_branch.md` template, or explicit step in `BRANCH_INQUIRY`'s validation).

---

## Related docs

- `docs/runtime_environment/folder_based.md` — the folder system inquiries live in (including the `_branch.md` template structure).
- `cognitive_harness/protocols/branch_inquiry.md` — the `BRANCH_INQUIRY` protocol that creates child inquiries with their own `_branch.md`.
- `devdocs/inquiries/2026-05-11_14-00__loop_diagnose__why_disciplines_missed_convergence/finding.md` — the diagnostic finding that designed this discipline.
