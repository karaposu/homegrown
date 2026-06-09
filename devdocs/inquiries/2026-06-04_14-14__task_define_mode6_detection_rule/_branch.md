# Branch: Task-Define LAYER 1 Mode 6 — Detection Rule Refinement

## Question

- **Subject** — the **detection rule** for LAYER 1 mode 6 ("MQ2-answer-missing-dispatch-info") in the Task-Define runtime spec at `cognitive_harness/task-define/references/task-define.md`. The mode is named and described, but the spec's §4.2 recognition column for it carries only a failure-description, not a content-presence rule that the end-of-invocation self-check (§4.7 + Execute step 4) can pattern-match against. The closely-related §2.4 dispatch-substrate section states an authoring constraint ("at minimum a context-need verdict; when external context is needed, information about what kind"), but that is a constraint on what the operation AUTHORS, not a predicate the self-check can EVALUATE.
- **Action** — design (DEVELOP — specify the missing predicate content + any structural commitments on MQ2's output shape the predicate needs as its target).
- **Level** — discipline-internal at the runtime-spec structural layer. Specifically, one row of §4.2 (the mode 6 row's recognition column) and possibly an adjacent commitment on MQ2's output shape in §2.3 (Meta-question canonical set) or §2.4 (dispatch substrate).
- **Observation targets** — list each as a separate item:
  1. **Predicate content.** What text should populate the §4.2 mode 6 recognition column so the end-of-invocation self-check has a concrete pattern to match against?
  2. **MQ2 answer shape commitment.** Does the predicate require a structural commitment on MQ2's output shape (specific fields, structured vs free-text) so the predicate has a definite target? If yes, where in the spec does that commitment live, and what is its content?
  3. **Interaction with §2.4 authoring constraint.** The §2.4 dispatch substrate already states a qualitative authoring constraint on MQ2's answer; how does the new detection predicate relate to it — is one the source-of-truth and the other a derived reference, or do they coexist independently (and if so, does §2.4's wording also need tightening)?
  4. **Predicate confidence dimension.** Is the predicate binary (present-or-absent fires mode 6) or graded (degree of insufficiency feeds a HIGH/MED/LOW confidence on the FLAG verdict)? The spec's self-assessment carries a confidence attribute per §4.7 — does mode 6's detection feed it?
  5. **Edge cases the predicate must handle.** Ambiguous answers ("maybe needs external context"); answers that name a kind without committing on the binary; structured-shape answers vs free-text answers; the count = 0 case where Meta-question never fires. Which of these need explicit handling in the predicate?
  6. **Lightweight-stance compliance.** Does the predicate (and any new MQ2-shape commitment) pass the 6 lightweight criteria from `15-39 §9` — particularly criterion (iv) "no sub-machinery beyond a paragraph per operation" and criterion (vi) "every output element load-bearing"?
  7. **Self-containment compliance.** Does the refinement preserve the discipline-spec self-containment rule (no outbound pointers to design history, theory folders, or other disciplines)?
- **Deliverable shape** — concrete drop-in spec content: text for the §4.2 mode 6 recognition column; text for any MQ2 output-shape commitment (with placement decision); coherence notes for §2.4's authoring constraint; coverage of the edge cases; lightweight + self-containment compliance verdicts. Ready to amend the runtime spec at `cognitive_harness/task-define/references/task-define.md`.

**Question (single statement):** What is the operational detection predicate the Task-Define runtime spec must commit for LAYER 1 mode 6 (MQ2-answer-missing-dispatch-info) — including the predicate's text in §4.2's recognition column, any structural commitment on MQ2's output shape that the predicate's evaluability requires, the coherence between the predicate and §2.4's existing authoring constraint, the predicate's confidence dimension, the predicate's edge-case handling, and the refinement's compliance with the meaning-layer's lightweight stance + the discipline-spec self-containment rule — such that the end-of-invocation self-check can reliably pattern-match the predicate at runtime without re-introducing sub-machinery or outbound pointers?

## Goal

- **Criterion** — three qualities:
  - **Operationality.** The predicate is concrete enough that an LLM running the end-of-invocation self-check can apply it without further interpretation. A qualitative gloss ("the answer must be sufficient") is a defect; a concrete content-presence rule ("the answer must contain X and, when condition C, also Y") is the bar.
  - **Coherence.** The predicate is consistent with §2.4's authoring constraint (the same MQ2-shape commitment is in force at authoring time and at detection time) and with the dispatch substrate's perception/action split (Task-Define perceives the framing-gap via meta-questions; the runner extracts the dispatch verdict — the predicate tests the perception's completeness, not the dispatch verdict's correctness).
  - **Lightweight + self-contained.** The refinement passes all 6 lightweight criteria and the no-outbound-pointers rule.
- **Use case** — amend the runtime spec at `cognitive_harness/task-define/references/task-define.md` with the refinement; the next user of the spec (R1 readers / runners invoking Task-Define) sees a complete detection rule instead of a placeholder description.
- **Desired outcome** — a refinement the user can either approve as drop-in or push back on specific points; the deliverable is concrete spec text (predicate + any MQ2-shape commitment + placement decisions), not theory.
- **What would fail** — a deliverable that:
  - states the predicate qualitatively ("must contain enough information") without specifying what content;
  - introduces a structured-shape requirement on MQ2's answer that violates criterion (iv) (multi-section sub-machinery within the Meta-question operation paragraph);
  - re-introduces an outbound pointer (mentions an inquiry by folder name, or links to design history);
  - silently contradicts §2.4's authoring constraint without explicitly tightening §2.4;
  - over-specifies a dispatch decision Task-Define is supposed to perceive but not commit (e.g., requiring MQ2's answer to be a typed enum the runner consumes mechanically — this would push Task-Define past perception into decision-making, violating the perception/action split).

## Source Input

```text
2. LAYER 1 mode 6 (MQ2-answer-missing-dispatch-info) has no detection rule.
  The mode is named, described, and a corrective is given — but the spec doesn't say what content-presence rule fires the 
  detection. The end-of-invocation LAYER 1 self-check (§4.7's failure-mode self-check in the Execute section) is supposed to
  pattern-match against the recognition column, but the recognition for mode 6 is "Meta-question fires but MQ2's answer lacks
  the information enabling external-context-need determination" — which is the failure described, not a rule for detecting it.
  Concretely: what content must MQ2's answer contain for the check to pass? At minimum a context-need verdict (yes/no)? A
  structured shape? The §2.4 dispatch substrate section says "at minimum a context-need verdict; when external context is
  needed, information about what kind" — but that's an authoring constraint, not a detection rule. Refinement: lift the §2.4
  constraint into an explicit detection predicate in §4.2 mode 6's recognition column ("the answer must contain a yes/no
  determination on external-context-need, plus — when yes — a kind specifier; absence of either constitutes mode 6"). lets dive deeper into this one
```

## Scope Check

Question covers goal. The seven observation targets map directly to the goal's criteria: operationality covered by targets 1+4+5; coherence covered by targets 2+3; lightweight + self-contained covered by targets 6+7. The deliverable shape (drop-in spec content with placement + compliance verdicts) matches the use case (amend the runtime spec).

Specific-vs-pattern check: the user's input names a specific gap (LAYER 1 mode 6 in the current runtime spec) AND asks for the underlying pattern (a detection predicate that satisfies the perception/action split + lightweight stance + self-containment for the dispatch substrate). The deliverable is for the SPECIFIC instance (mode 6 in this spec); the reasoning behind the chosen predicate may surface pattern-level commitments that inform future similar-shape refinements (e.g., other modes whose recognition columns need operationalization), but the inquiry's primary scope is the specific instance. No widening flagged.

## Layer Commitment

**Primary layer: Structural.** The question targets WHAT IS WRITTEN in specific sections of the runtime spec — the §4.2 mode 6 row's recognition column content + possibly content in §2.3 or §2.4 specifying MQ2's output shape. The artifact's shape (which sections, what they say, how they reference each other) is the adjudication target.

**Other layers explicitly out of scope:**
- **Meaning** — the dispatch substrate's identity (MQ-answers-as-signal; runner extracts) is settled in `15-39 §5` (Task-Define meaning-layer finding) and inherited by the process-layer finding's §5. The perception/action split (Task-Define perceives; runner acts) is settled in `15-39 §5` reasoning. This inquiry does NOT re-litigate either; if a meaning-layer ambiguity surfaces during the refinement, flag as a frontier and do not redesign in-flight.
- **Process** — the detection step's timing (end-of-invocation self-check) and locus (the LLM running the discipline, per the spec's §4.7 + Execute step 4) are already specified in the runtime spec. The WHEN and WHO of the detection are fixed; only the WHAT (the predicate's content) and its target (MQ2's answer shape) are at issue here. If a process-layer concern surfaces (e.g., should the detection fire per-item during Stage 2 instead of at end-of-invocation), flag as frontier.

**Layer ordering rationale:** meaning → process → structural is the project's established design dependency. Meaning fixes what the dispatch substrate IS; process fixes when/where the detection runs; structural fixes how the spec expresses both. The first two are settled; this inquiry refines only the third.
