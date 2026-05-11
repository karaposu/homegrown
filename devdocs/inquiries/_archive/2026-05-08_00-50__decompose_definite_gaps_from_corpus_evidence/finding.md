---
status: active
---
# Finding: Decompose Discipline — Definite Gaps From Corpus Evidence

## Question

From `_branch.md`: across the seven LOOP_DIAGNOSE chain findings dated 2026-05-07 (chain 1 at `2026-05-07_15-01` through chain 7 at `2026-05-07_20-02`; LOOP_DIAGNOSE is the diagnostic protocol at `homegrown/protocols/loop_diagnose.md` that runs an MVL+ inquiry — the Extended Cognitive Loop with Exploration → Sensemaking → Decomposition → Innovation → Critique — over a correction chain to surface candidate methodology improvements), what is **for-sure missing** from the Structural Decomposition discipline spec at `homegrown/decompose/references/decompose.md`? "For-sure missing" means: the loop demonstrably failed because the rule was absent and the corrected loop succeeded because the rule was present (failure-of-absence + success-of-presence). The rule must be expressed in generic / meta-discipline language and placed per the placement convention at `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` (one canonical home + one-line cross-references at non-canonical surfaces; the convention itself is **not** embedded in `decompose.md`, per the prior `2026-05-07_23-27` decision on discipline-spec purity).

The goal: surgical, evidence-backed improvements to the spec that strictly raise robustness, with speculative additions explicitly rejected.

## Finding Summary

- **One rule is for-sure missing** from `decompose.md`: a **Determination-Mechanism Piece Check** at Step 7 (Self-Evaluate), within the Reassembly dimension. The rule says: when the Q-tree (the question tree produced by Decomposition) includes a load-bearing concept whose use depends on a runtime determination — i.e., the concept is referenced in one or more pieces, but its applicability is determined at runtime by checking *"does X exist?"*, *"is X applicable?"*, or similar — the Reassembly self-evaluation check must verify that the Q-tree includes a piece addressing the determination mechanism (HOW the runtime check is performed).

- **Why it's for-sure missing**: chain 6's T2 (the chain finding at `devdocs/inquiries/2026-05-07_19-08__loop_diagnose__past_navigation_memory_file_index_feasibility/finding.md`, candidate T2) is the primary-cause Decomposition failure across the corpus, with explicit before/after contrast. The prior loop's Q-tree presupposed the determination ("is `PastNavigationMemoryFile` source-present?") had been made without including a piece addressing HOW it is made; the corrected loop's Q-tree included the discovery mechanism as a first-class piece. The Reassembly check existed but did not catch the gap — its current general shape ("Can the pieces + interfaces reconstruct the whole?") didn't reach the runtime-determined-concept case.

- **Canonical home**: Step 7 (Self-Evaluate), as a follow-on paragraph after the minimum-3-dimension table (Independence / Completeness / Reassembly) and before the full-7-dimension table.

- **Cross-reference**: a one-line pointer at the Missing Pieces failure mode (failure mode #4 in `decompose.md`), since failing the new check is an instance of Missing Pieces.

- **Aggregate cost**: ~6–10 lines added to `decompose.md`. This is the smallest gap-inventory of any thinking-discipline spec analyzed so far in this series — explore.md got two rules, sensemaking.md got two rules, decompose.md gets one — which reflects Decomposition's downstream position in the cascade (most failures cascade through it from upstream rather than originating at it).

- **Speculative additions explicitly rejected**: chain 1's and chain 2's Decomposition-side propagation hypotheses are NOT proposed as separate Decomposition candidates. The chain findings themselves state the propagation hypotheses do not need independent maintenance candidates: if the upstream Sensemaking patch succeeds (M1 for chain 1, N2 for chain 2), the corridor that produced the amplification is itself prevented. Refinements to other Decomposition surfaces (Coupling Perception, Boundary Detection, Interface Mapping, Dependency Ordering, Hidden Coupling failure mode) are also rejected — no chain finding shows primary-cause failure for any of these surfaces.

- **Single-chain caveat documented in this finding only, not in `decompose.md`**: P11 family (Decomposition completeness) is at 1 chain. Single-chain primary-cause + before/after contrast satisfies the for-sure criterion (per the prior `2026-05-07_20-35` resolution for explore.md's Rule 2). The revival trigger (when to re-evaluate) is a maintenance-time concern and lives outside the runtime-loaded artifact, per the `2026-05-07_23-27` discipline-spec-purity decision.

## Finding

### 1. The for-sure-missing rule

**Determination-Mechanism Piece Check** — proposed addition to `homegrown/decompose/references/decompose.md` at Step 7 (Self-Evaluate), as a follow-on paragraph after the minimum-3-dimension table:

> **Determination-mechanism piece check.** When the question tree (Q-tree) includes a load-bearing concept whose use depends on a runtime determination — i.e., the concept is referenced in one or more pieces, but its applicability is determined at runtime by checking "does X exist?", "is X applicable?", or similar — the Reassembly self-evaluation check verifies that the Q-tree includes a piece addressing the determination mechanism (HOW the runtime check is performed). A Q-tree that presupposes the determination has been made — without including a piece addressing HOW it is made — fails Reassembly: reconstructing the whole requires the determination, but no piece provides it. Failing this check is an instance of Missing Pieces (failure mode #4).

A "load-bearing concept" is one whose removal would change the Q-tree's verdict — without addressing the concept, the Q-tree no longer holds together. This is the same observable used in the sensemaking.md sister analysis's load-bearing concept test.

### 2. The cross-reference

Append to the existing "How to prevent" line at the Missing Pieces failure mode (failure mode #4) in `decompose.md`:

> For Q-trees with load-bearing concepts whose use depends on a runtime determination, see Step 7 — Self-Evaluate → Determination-mechanism piece check.

This is one line. It points readers who arrive at the failure mode toward the canonical home. The rule is not duplicated; only the navigation pointer lives at the failure mode.

### 3. Why this placement

The placement convention from `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` (Operation-or-Step-First with Scope-Of-Application) routes a rule to the surface where it fires. The Determination-Mechanism Piece Check fires during Step 7's Reassembly self-evaluation, so Step 7 is the canonical home. The Reassembly dimension's "Pass if" cell in the minimum-3-dimension table is a single sentence — adding the rule's content (~6 lines) to that cell would bloat the table beyond its compact-summary format. Tables are for one-line summaries; multi-paragraph rules belong in follow-on prose. The spec already uses follow-on prose this way (e.g., "Low-scoring dimensions flag where the decomposition needs refinement before proceeding," currently around line 189 of `decompose.md`).

The cross-reference at Missing Pieces handles the navigation case: a reader investigating Missing Pieces gets pointed to where the prevention rule lives. One canonical home + one-line cross-reference = the convention's prescribed shape for non-canonical surfaces.

### 4. Why the corpus evidence is strong enough

Chain 6 (`2026-05-07_19-08__loop_diagnose__past_navigation_memory_file_index_feasibility`) shows:

- **Failure-of-absence**: the prior loop's Decomposition produced a Q-tree where `PastNavigationMemoryFile` was a load-bearing concept, but applicability depended on a runtime determination ("does the file exist?"). The Q-tree did not include a piece addressing HOW that determination is made. Reassembly self-evaluation, in its current general form, did not flag the gap.

- **Success-of-presence**: the corrected loop's Decomposition produced a Q-tree that explicitly addressed index storage, schema, update ownership, validation — and discovery mechanism became a first-class piece. The Reassembly check, applied to the corrected Q-tree, would now register a piece addressing the determination mechanism.

This is the failure-of-absence + success-of-presence pattern the for-sure criterion requires. Single-chain primary-cause is thinner than multi-chain convergence, but the explicit before/after contrast — same Q-tree shape evolved across two loops, with the determination-mechanism piece appearing in the second — gives the evidence enough weight to pass. The prior `2026-05-07_20-35` finding established this threshold (single-chain primary-cause + before/after contrast = passes for-sure) for explore.md's Rule 2 (chain 2 N1, also single-chain). The same standard applies here.

### 5. What was rejected and why

Three categories of speculative additions were considered and rejected in this analysis:

- **Chain 1's Decomposition propagation hypothesis** (the Q-tree presupposed the artifact rather than questioning it) is rejected as a separate Decomposition candidate. Chain 1's own finding states: *"The propagation hypotheses do not require independent maintenance candidates: if M1 (the upstream Sensemaking patch) succeeds, the corridor that produced these amplifications is itself prevented."* The corrective surface is at Sensemaking — the upstream cause — not at Decomposition. Adding a Decomposition rule for chain 1 would either duplicate the upstream patch's effect or fail to fire when the upstream patch succeeds and there is nothing left to catch.

- **Chain 2's Decomposition propagation hypothesis** (the Q-tree presupposed storage axis as separable) is rejected on the same basis. Chain 2's finding states: *"The propagation hypotheses do not require independent maintenance candidates: if N2 succeeds, the corridor that produced these amplifications is itself prevented."* Same reasoning: Sensemaking patch upstream prevents the cascade.

- **Refinements to other `decompose.md` surfaces** — Coupling Perception (Step 1), Boundary Detection (Step 2), Interface Mapping (Step 5), Dependency Ordering (Step 6), Hidden Coupling failure mode — are rejected because no chain finding surfaces a primary-cause failure for any of them. The for-sure criterion requires evidence; absence of evidence means the rule is speculative.

These rejections preserve the for-sure criterion's filtering effect: the spec gets only changes the corpus actually demands.

### 6. Why the rule does not need to cover propagation cases

This is the most important structural point. Chains 1 and 2 are propagation cases (Sensemaking failure cascading through Decomposition). The chain findings explicitly say the corrective surface is upstream at Sensemaking, not at Decomposition. The Determination-Mechanism Piece Check is targeted at primary-cause Decomposition failures (chain 6 / T2), not at Sensemaking-inherited propagation. Coverage:

| Chain | Decomposition implication | Caught by the new rule? |
|---|---|---|
| 1 | Propagation (covered by Sensemaking M1 upstream) | NO (intentionally — upstream-Sensemaking responsibility) |
| 2 | Propagation (covered by Sensemaking N2 upstream) | NO (same reason) |
| 3 | Not implicated | N/A |
| 4 | Not implicated | N/A |
| 5 | Not implicated | N/A |
| 6 | Q-tree presupposed runtime check without discovery-mechanism piece | YES — primary cause, caught |
| 7 | Not implicated | N/A |

100% coverage of primary-cause Decomposition failures across the corpus. The rule's narrow targeting is correct, not a gap.

### 7. Comparison to sister analyses

This is the third in a series of for-sure-missing analyses across the homegrown thinking disciplines:

- `explore.md` (sister analysis at `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md`): two rules — Type-Aware Probe + Contextual Surround Pre-Scan.
- `sensemaking.md` (sister analysis at `devdocs/inquiries/2026-05-08_00-20__sensemaking_definite_gaps_from_corpus_evidence/finding.md`): two rules — Load-Bearing Concept Test + Phase / Calibration-State Perspective.
- `decompose.md` (this finding): one rule — Determination-Mechanism Piece Check.

The shrinking inventory across the cascade (2 → 2 → 1) is not a methodology weakness; it reflects Decomposition's downstream position. Most loop failures originate upstream at Exploration or Sensemaking and propagate through Decomposition. The corpus shows only one chain (chain 6) where Decomposition itself is the primary cause. The methodology is producing inventory proportional to actual evidence, which is the desired behavior.

## Next Actions

### MUST

- **What:** Apply the Determination-Mechanism Piece Check rule to `homegrown/decompose/references/decompose.md` as a follow-on paragraph after the minimum-3-dimension table at Step 7 (Self-Evaluate), and append the one-line cross-reference at the Missing Pieces failure mode's "How to prevent" line.
- **Who:** User-confirmed surgical edit to `decompose.md` (matching the pattern from the explore.md and sensemaking.md sister edits, where the user gives a "yes, be surgical" or equivalent confirmation before the edit is applied).
- **Gate:** When the user confirms.
- **Why:** Without the rule in the spec, the next MVL+ run that produces a Q-tree with a load-bearing runtime-determined concept will not have the explicit Reassembly check and may repeat chain 6's failure pattern.

### COULD

- **What:** Re-run this for-sure-missing methodology against the remaining homegrown discipline specs — `homegrown/innovate/references/innovate.md` and `homegrown/td-critique/references/td-critique.md` — to round out the series.
- **Who:** Same methodology, applied via `/MVL+` to each spec in turn.
- **Gate:** User decision.
- **Why:** The series so far has caught for-sure gaps in three of the five Extended Cognitive Loop disciplines. Innovation and Critique remain unanalyzed under the same standard. Even a "no for-sure gaps" verdict for either spec would be a useful confirmation; an actual gap would be a candidate for the same surgical-edit pattern.

### DEFERRED

- **What:** Promote the Determination-Mechanism Piece Check from single-chain to cross-cutting (sister-rule status alongside M6 / TP3 / N9) if a future LOOP_DIAGNOSE run surfaces a second P11 instance.
- **Gate:** Observable — a new chain finding that names a primary-cause Decomposition completeness failure (P11 family).
- **Why (if revived):** Cross-cutting promotion strengthens the rule's evidence base from single-chain to multi-chain and may surface additional sub-aspects of the determination-mechanism check worth encoding. Promotion also signals to downstream protocols that the pattern is more than a chain-6 specific case.

## Reasoning

This finding's "for-sure missing" verdict comes from running the Extended Cognitive Loop (Exploration → Sensemaking → Decomposition → Innovation → Critique) over the seven LOOP_DIAGNOSE chain findings, focused on the Decomposition spec.

**Exploration** mapped the territory: 1 of 7 chains has primary-cause Decomposition implication (chain 6 / T2); 2 of 7 have propagation-only hypotheses explicitly rejected by their own findings (chains 1, 2); 4 of 7 don't implicate Decomposition at all. Frontiers stable; convergence achieved. The territorial map ruled out broad refactoring of `decompose.md` and pointed at one specific surface (Step 7 / Self-Evaluate / Reassembly).

**Sensemaking** stabilized the answer through six Sense Versions. Three ambiguities collapsed: (1) extending the Reassembly table cell vs. follow-on paragraph — table format constraint resolved this in favor of follow-on paragraph; (2) failure-mode tie inline vs. cross-reference only — both serve different purposes and both should exist (rule wording mentions Missing Pieces inline; cross-reference at Missing Pieces is separate one-line navigation); (3) revival trigger in spec vs. in finding — discipline-spec-purity principle resolved this in favor of finding-only documentation.

**Decomposition** partitioned the answer into four pieces (rule + cross-reference + speculative-filter documentation + verification + single-chain caveat documentation), validated bottom-up (12 atoms all mapping cleanly), and self-evaluated all 7 dimensions PASS.

**Innovation** generated the concrete wording for the rule and cross-reference. Five tests survived: novelty (no existing equivalent in `decompose.md`), scrutiny survival (single-chain evidence holds via before/after contrast), fertility (opens Reassembly as a structured surface), actionability (deterministic runtime check), mechanism independence (single-chain primary-cause with before/after contrast).

**Critique** evaluated against seven dimensions with weights (For-Sure Criterion 25%, Generic Framing 20%, Placement Convention 20%, Discipline-Spec Purity 15%, Coverage 10%, Implementation Cost 5%, Speculative-Filter Application 5%). Verdict: SURVIVE. All four critical dimensions HIGH. Adversarial strength STRONG. Landscape STABLE. Clean SURVIVE.

**Significant kills:**

- **Chain 1's Decomposition propagation hypothesis as a separate Decomposition candidate.** Considered: adding a rule like "Q-tree pieces should not presuppose artifacts whose existence is uncertain." Rejected because chain 1's own finding states the propagation hypothesis does not require an independent maintenance candidate — the upstream Sensemaking patch (M1) prevents the cascade. Adding the Decomposition rule would either duplicate M1's effect or never fire (because M1 already prevents the upstream condition that would trigger the Decomposition rule).
- **Chain 2's Decomposition propagation hypothesis.** Same reasoning as chain 1; chain 2's finding gives the same explicit rejection.
- **Refinements to Coupling Perception (Step 1), Boundary Detection (Step 2), Interface Mapping (Step 5), Dependency Ordering (Step 6), Hidden Coupling failure mode.** Considered as candidate surfaces. Rejected because the for-sure criterion requires primary-cause evidence in the corpus, and no chain provides it for any of these surfaces.
- **Embedding the placement convention in `decompose.md`.** Considered briefly, then rejected per the prior `2026-05-07_23-27` finding (Runtime-Purity Principle for Maintenance-Time Concerns). The placement convention is maintenance-time content and lives at `enes/discipline_rule_placement.md`; the discipline spec stays runtime-pure.
- **Including the revival trigger in the spec wording.** Considered briefly, then rejected on the same purity principle. Revival triggers are maintenance-time concerns and live in this finding's Refinement Triggers, not in `decompose.md`.
- **Multi-surface duplication of the rule** (e.g., the rule text at Step 7 AND at Missing Pieces). Rejected per the placement convention (`2026-05-07_22-54`): canonical home + one-line cross-reference is the convention's prescribed shape; multi-surface duplication causes long-run bloat.

**Trivial kills**: extending the minimum-3-dimension table cell to contain the rule (table format constraint); rewording the rule to omit the failure-mode tie (the tie is content, not navigation, and serves the runner reading the rule).

**Survivors that held:**

- One rule (Determination-Mechanism Piece Check) at Step 7 (Self-Evaluate, follow-on paragraph after the minimum-3-dimension table). Held because chain 6's primary-cause + before/after contrast meets the for-sure criterion threshold and the wording is generic enough to apply beyond chain 6's specific case.
- One-line cross-reference at Missing Pieces. Held because the placement convention prescribes it for non-canonical surfaces.
- Single-chain caveat + revival trigger documented here only, not in the spec. Held because of discipline-spec purity and because the caveat is not yet load-bearing on the rule's runtime behavior.

The methodology produces inventory proportional to evidence: explore.md got 2 rules, sensemaking.md got 2 rules, decompose.md gets 1 rule. The shrinking inventory reflects Decomposition's downstream position in the cascade, not a methodology weakness.

## Open Questions

### Monitoring

- **Effective firing of the new rule in next 3 MVL+ runs producing Q-trees with load-bearing runtime-determined concepts.** If the rule does not fire when applicable — i.e., the runner does not recognize a load-bearing concept whose use depends on a runtime determination, or does not verify the determination-mechanism piece — the rule's wording or placement may need refinement. Observable after 3 such runs.

### Refinement Triggers

- **P11 family at 1 chain (single-chain caveat).** This rule's evidence base is single-chain primary-cause + before/after contrast. The for-sure criterion accepts this threshold (per the prior `2026-05-07_20-35` resolution), but cross-chain reinforcement would be stronger. Revival trigger: revisit if (a) the rule does not fire effectively in the next 3 MVL+ runs producing Q-trees with runtime-determined load-bearing concepts, OR (b) a future LOOP_DIAGNOSE run surfaces a second primary-cause P11 instance — in which case the rule's evidence base strengthens toward cross-cutting promotion (sister-rule status alongside M6 / TP3 / N9). If neither condition fires, the rule's narrow scope is confirmed by absence of new instances.

- **Trigger predicate breadth.** The trigger uses examples ("does X exist?", "is X applicable?") to narrow the predicate. If future Q-trees surface runtime determinations that don't pattern-match these phrasings but still represent the same structural failure (load-bearing concept whose use depends on a runtime check, no piece addressing the mechanism), the trigger predicate may need broadening. Observable in MVL+ runs producing Q-trees with non-existence-check runtime determinations.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+ okay if you read all inquiries finding.md files starting from devdocs/inquiries/2026-05-07_15-01... and focus only to decompose homegrown/decompose/references/decompose.md... can you tell me what is missing from it? how it can be fixed?... in a for sure way, not 'might improve' but sth that is def missing
```

</details>
