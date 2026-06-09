# Branch: Task-Define Bounded-Extensibility Rule (b) — Worked Examples Refinement

## Question

- **Subject** — the **bounded-extensibility rule (b)** in the Task-Define runtime spec at `cognitive_harness/task-define/references/task-define.md` §2.3. The rule says additional per-item meta-questions may be added only when their answer *"materially shapes how Rephrase produces alternative formulations for this item"* — i.e., the answer constrains Rephrase. The gap: rule (b) fires at Stage 2 (Meta-question time) but Rephrase runs at Stage 4; the LLM judging whether to add a candidate extension must PREDICT whether the answer will shape Rephrase at a future stage. The spec provides no worked example, no operational test, and no concrete instance distinguishing a qualifying from a non-qualifying extension. For a Bootstrap-calibration-state discipline, this is exactly where the LLM is most likely to err — either firing extensions too liberally (which triggers LAYER 1 mode 3, "MQ-extension-violates-bounded-rule") or skipping warranted extensions (silent under-coverage of per-item framing).
- **Action** — design (DEVELOP) the spec amendment that closes the foresight gap. Includes worked examples + possibly sharpening rule (b)'s wording.
- **Level** — discipline-internal at the runtime-spec structural layer; specifically §2.3 (the Meta-question canonical set + bounded-extensibility rule) and adjacencies (§2.1 Meta-question operation paragraph + §2.1 Rephrase operation paragraph for the constrains-Rephrase relation grounding).
- **Observation targets** — list each as a separate item:
  1. **Qualifying extension example.** A concrete task statement + a concrete candidate extension question + the (predicted) answer + a concrete illustration of HOW that answer would materially shape Rephrase's per-item rephrasings. The example must make the constrains-Rephrase relation observable, not just asserted.
  2. **Non-qualifying extension example.** A concrete task statement + a concrete candidate extension question + the (predicted) answer + the demonstration that the answer would NOT shape Rephrase materially. The non-qualifying example must be plausible-but-rejected (the LLM might naively add it) — not a strawman.
  3. **The "constrains Rephrase" relation, operationalized.** What does "materially shape" mean concretely — does the relation require that Rephrase's variants USE the extension's answer as a constraint? That the variants DIFFER from what they would have been without the extension? Both? Different framings produce different operational tests; this observation target picks one.
  4. **Whether rule (b)'s current wording is sufficient when paired with the examples**, OR whether the wording needs sharpening (e.g., replacing "materially shape" with a more concrete predicate; adding the test alongside the rule rather than only in examples).
  5. **Placement** — where in §2.3 the examples + any wording sharpening live: immediately after the rule (a/b/c) bullet list; as a separate sub-section; as a worked-example block. Decision must respect §2.3's existing structure (canonical 3 questions + bounded-extensibility rule) without sub-machinery growth.
  6. **Coherence with LAYER 1 mode 3 detection.** §4.2 mode 3 is "MQ-extension-violates-bounded-rule." Does mode 3's recognition column need to be amended to reference the new examples (the way mode 6 now references §2.4 after the prior refinement)? Or does mode 3 detection operate on the rule's text alone?
  7. **Edge case — borderline cases.** When the constrains-Rephrase relation is genuinely ambiguous (the extension might or might not shape Rephrase depending on the item's structure), what should the rule prescribe — fire the extension (asymmetric-failure-aligned: lean toward fire when bounded-rule conditions are clearly met)? Skip it (lean toward keep-baseline)? Carry the uncertainty forward (mark the extension as "tentatively-fired; mode 4-like check at Stage 4 confirms or refutes")?
  8. **Lightweight + self-containment compliance.** The amendment must pass the runtime spec's six lightweight criteria (notably criterion iv "no sub-machinery beyond a paragraph per operation") AND respect the strict self-containment rule (no inquiry-folder mentions in committed text).
- **Deliverable shape** — concrete drop-in spec content: example text (qualifying + non-qualifying), a coherence note for any (b) wording change, placement decision, mode-3-coherence verdict, edge-case handling, compliance verdicts. Ready to amend `cognitive_harness/task-define/references/task-define.md` §2.3.

**Question (single statement):** What worked examples + any wording sharpening must the Task-Define runtime spec commit at §2.3 — to operationalize the bounded-extensibility rule (b) ("must constrain Rephrase") in a way that an LLM running the discipline at Bootstrap calibration state can apply reliably at Stage 2 (Meta-question time), without re-introducing sub-machinery beyond a paragraph + without leaking inquiry-folder references + while remaining coherent with LAYER 1 mode 3 detection at §4.2?

## Goal

- **Criterion** — three qualities:
  - **Concreteness.** Examples must be REAL-FEELING — actual task statements (not toy or hand-waved); actual extension question candidates (not "X-shaped" placeholders); actual Rephrase implications (or explicit demonstrations of their absence). An LLM reading the examples should pattern-match its own borderline cases against them.
  - **Operational test.** The constrains-Rephrase relation must be made observable, not merely asserted. The LLM should be able to apply the test ("would Rephrase's variants for this item depend on this extension's answer?") at Stage 2 without needing to actually run Rephrase to find out.
  - **Coherence.** The amendment is consistent with rule (a) (about-task-structure-or-framing), rule (c) (one-sentence), §2.1 Rephrase's constrained-by relation, §4.2 mode 3 detection, and the meaning layer's intent for bounded-extensibility (15-39 §4 reasoning preserved as inheritance).
- **Use case** — amend `cognitive_harness/task-define/references/task-define.md` §2.3 with the examples + any wording change; the next user of the spec (R1 readers / LLMs invoking Task-Define) sees a concrete operationalization of rule (b) instead of a foresight-dependent qualitative rule.
- **Desired outcome** — refinement the user can either approve as drop-in or push back on specific points; the deliverable is concrete spec text (examples + any wording change + placement + mode-3-coherence verdict), not theory.
- **What would fail** — a deliverable that:
  - states examples qualitatively ("an extension that constrains Rephrase would be...") without showing a specific task statement + specific extension + specific Rephrase implication;
  - introduces a multi-paragraph sub-machinery for the test (violates criterion iv);
  - re-introduces an outbound pointer (mentions an inquiry folder by name);
  - silently contradicts rule (a) or rule (c) or §2.1 Rephrase's constrained-by relation;
  - over-specifies the constraint by typing what shape extension answers take (echoes the structured-shape rejection from the mode 6 inquiry — the constraint is operational, not syntactic);
  - solves the foresight problem by moving the check to a different stage without explicitly flagging that as a process-layer concern (the structural refinement should not silently change WHEN the rule fires).

## Source Input

```text
. Bounded-extensibility rule (b) "must constrain Rephrase" requires foresight without a test.
  The rule fires at Stage 2 (Meta-question time); Rephrase fires at Stage 4. So when the LLM considers adding an extension at
  Stage 2, it has to predict whether the answer will materially shape Rephrase that hasn't happened yet. There's no objective
  test — the LLM judges forward in time. The spec provides no worked example of "this extension constrains Rephrase" vs "this
  extension doesn't." For a Bootstrap-calibration-state discipline, this is exactly where the LLM will most likely err — either
  firing too many extensions (LAYER 1 mode 3) or skipping warranted ones. Refinement: a 2-3 line worked example in §2.3
  showing a qualifying extension + a non-qualifying one, with the constrains-Rephrase relation made explicit. lets dive deep into this one
```

## Scope Check

Question covers goal. The eight observation targets map directly to the three goal criteria: concreteness covered by targets 1 + 2 + 3; operational test covered by targets 3 + 4 + 7; coherence covered by targets 4 + 5 + 6 + 8. The deliverable shape (drop-in spec content with examples + placement + compliance verdicts) matches the use case (amend §2.3).

Specific-vs-pattern check: the user's input names a specific gap (rule (b) at §2.3 of the current runtime spec) AND asks for the underlying pattern (a way to operationalize foresight-dependent rules in this discipline family). The deliverable is for the SPECIFIC instance (rule (b) at §2.3); the reasoning may surface pattern-level commitments that inform similar refinements at other rules (e.g., rule (a) "about task structure or framing" may have an analogous foresight gap — it requires the LLM to judge "is this question about task structure or about external-state-gathering"). But the inquiry's primary scope is rule (b)'s amendment; pattern-propagation is flagged as frontier per the mode 6 inquiry's precedent.

## Layer Commitment

**Primary layer: Structural.** The question targets WHAT IS WRITTEN at §2.3 of the runtime spec — example content + possibly a wording change to rule (b) + placement of the new content. The artifact's shape (what §2.3 contains and how it's organized) is the adjudication target.

**Other layers explicitly out of scope:**
- **Meaning** — the bounded-extensibility rule's purpose (preserving Rephrase's safety mechanism by constraining drift; preventing extensions that float free) is settled in the Task-Define meaning-layer finding's §4 reasoning. Rule (a)/(b)/(c)'s essence is inherited; this inquiry does NOT re-litigate what "constrains Rephrase" MEANS as a cognitive operation.
- **Process** — the timing of rule (b)'s firing (Stage 2 forward-prediction) is the current process commitment. If during the inquiry a process-layer alternative surfaces (e.g., moving the check to Stage 4 as retrospective audit), it will be flagged as a frontier and addressed in a separate inquiry — not redesigned in-flight. The structural refinement here operates within the existing process commitment.

**Layer ordering rationale:** meaning → process → structural is the project's established design dependency. Rule (b)'s meaning is settled; rule (b)'s process timing (Stage 2) is settled; what needs refinement is how §2.3 EXPRESSES the rule so the LLM can apply it operationally. That's structural.
