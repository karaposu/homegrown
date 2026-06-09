---
status: active
model: claude-opus-4-7[1m]
effort: unknown
---

# Finding: Task-Define Bounded-Extensibility Rule (b) — Worked Examples Refinement

## Question

From `_branch.md`:

**Question.** Design the §2.3 amendment to the Task-Define runtime spec at `cognitive_harness/task-define/references/task-define.md` that operationalizes the *bounded-extensibility rule (b)* — the rule which says additional per-item meta-questions may be added only when their answer *"materially shapes how Rephrase produces alternative formulations for this item."* The discipline's 4-stage flow places this rule at **Stage 2 (Meta-question time)** while Rephrase runs at **Stage 4**; the LLM judging whether to add a candidate extension must therefore predict whether the answer will shape Rephrase that hasn't happened yet. The spec currently states the rule qualitatively ("materially shapes") with no worked example, no operational test, and no concrete instance distinguishing a qualifying from a non-qualifying extension. For a Bootstrap-calibration-state discipline (no observed-performance data yet), this is exactly where the LLM is most likely to err — either firing extensions too liberally (which triggers the spec's LAYER 1 mode 3, *"MQ-extension-violates-bounded-rule"*) or skipping warranted extensions (silent under-coverage of per-item framing). The refinement needs to close the foresight gap via worked examples + (possibly) sharpened rule wording.

**Goal.** Concrete drop-in spec amendments — exact text for §2.3 — that close the foresight gap while preserving the meaning-layer's lightweight stance, the discipline-spec self-containment commitment, the existing internal consistency, and the meaning-layer-inherited qualitative anchor ("materially shapes"). The deliverable is text the user can drop into the spec file directly.

**What would fail.** Examples stated qualitatively without showing specific task statements + specific extensions + specific Rephrase implications; a structured-shape commitment on extension answers (which would push Task-Define past perception into emitting typed dispatch artifacts); an inquiry-folder reference leaking into the spec; an amendment that silently contradicts §2.4's existing authoring constraint on the dispatch substrate; an amendment that re-introduces a check at a different runtime stage (which would be a process-layer change explicitly out of scope per Layer Commitment).

## Finding Summary

- **The refinement is a coordinated two-part §2.3 amendment** to `cognitive_harness/task-define/references/task-define.md`. Part one updates rule (b)'s parenthetical to inline the operational test alongside the existing qualitative anchor. Part two adds a worked-examples sub-block immediately after the §2.3 (a/b/c) bullets — qualifying example + non-qualifying example on the SAME task statement so the contrast isolates the rule's mechanic, plus a short borderline-case clause.

- **The operational test for rule (b) is variant-set divergence: "the answer must commit information that would cause Rephrase to produce a different set of alternative formulations than it would produce without the answer."** The LLM applies the test at Stage 2 by mentally simulating Rephrase's plausible variants for the item, then asking whether those variants would change if the extension's answer were different. If the variant set would differ across plausible answer values — the extension qualifies. If the same variant set would emerge regardless of the answer — the extension is free-floating and excluded.

- **Rule (b)'s existing qualitative anchor ("materially shapes how Rephrase produces alternative formulations") is preserved** as the parenthetical's first clause; the operational test is appended as a second clause ("concretely, the answer must commit information..."); a pointer to the worked examples below is added. The rule (b) bullet's existing closing sentence — "A meta-question whose answer doesn't constrain Rephrase is free-floating and excluded" — stays verbatim. The amendment is REPAIR (modifies semantics while preserving the anchor); not REPLACE (which would lose the meaning-layer-inherited anchor) and not ADD-CONTENT-as-separate-sentence (which would visually separate the operational layer from the rule itself).

- **The worked-examples sub-block uses same-item contrast on "Refactor the authentication module."** The qualifying example pairs that item with the extension *"What's the unit of refactoring — function-level, class-level, module-level, or cross-module restructure?"* — the answer commits a granularity axis along which Rephrase's variants differ. The non-qualifying example pairs the same item with the extension *"What's the deadline for completion?"* — the answer commits a scheduling value, but Rephrase's variants for "refactor auth" are about HOW to refactor, not WHEN; the variant set is identical regardless of the deadline; the extension is free-floating and excluded. Same-item contrast isolates the rule's mechanic; only the extension varies between the two examples.

- **Borderline cases — when the constrains-Rephrase relation is genuinely ambiguous but rules (a) and (c) clearly pass — fire the extension.** This is the asymmetric-failure principle (at §4.4 of the runtime spec) applied to extension firing: false-positive extension is bounded-cost (Rephrase may ignore non-constraining content; LAYER 1 mode 4 at Stage 4 catches drift if any); false-negative skipped-extension is information-loss-in-the-dark (Rephrase drifts without a constraint that would have prevented the drift).

- **§4.2 LAYER 1 mode 3 (MQ-extension-violates-bounded-rule) recognition column stays unchanged.** Mode 3 inherits the §2.3 operational test via its existing phrasing ("fails one of the three bounded-extensibility conditions") — the operational test now lives inside one of those three conditions. No separate mode 3 amendment is required.

- **Pattern reusable for the analogous foresight gap in rule (a).** Rule (a) requires the LLM to judge "is this question about task structure or framing — NOT about external state-gathering." Like rule (b), this is a judgment at Stage 2 about how the question relates to operations that haven't run yet (the spec's substrate boundary). The refinement structure here — inline operational test in the rule + same-item-contrast worked examples — is structurally extensible to rule (a). Pattern propagation is explicitly out of scope for this finding but flagged as future work.

- **The refinement honors all four project-architectural commitments that constrain it.** **Self-containment:** both amendments reference only intra-spec sections (§4.4 for the asymmetric-failure principle); no inquiry-folder paths; no design-history pointers. **Lightweight:** rule (b)'s parenthetical expands by one clause; the worked-examples sub-block is ~12-15 lines fitting §2.3's existing multi-paragraph structure; no sub-machinery. **Perception/action split:** the operational test specifies CONTENT presence (variant-set divergence at the content level), not syntactic shape — the LLM judges via mental simulation, not via parsing typed fields. **Meaning-layer harmony:** the existing qualitative anchor ("materially shapes") stays as the meaning-layer-inherited high-level framing; the operational test is the structural-layer implementation.

## Finding

Some surrounding context to ground the conclusions before reading them: the Task-Define discipline is a project discipline the user has authored over several recent inquiries (meaning layer settled; process layer settled; runtime spec authored at `cognitive_harness/task-define/references/task-define.md`). After authoring, a self-critique identified several under-specifications in the spec. The mode 6 detection rule was deep-dived in a prior inquiry (closing one gap with a similar two-section structural refinement). This inquiry deep-dives into a different gap — the bounded-extensibility rule (b) at §2.3 — where the rule's qualitative wording ("materially shapes how Rephrase produces alternative formulations") leaves an LLM applying it at Stage 2 without an operational test, because Rephrase doesn't run until Stage 4. The refinement closes this with two coordinated amendments to §2.3, mirroring the mode 6 inquiry's pattern of operational content + same-section illustrative content.

### 1. What gets amended

Two amendments to §2.3 of the Task-Define runtime spec. Nothing else changes.

**Rule (b)'s bullet (within the (a/b/c) bullet list at §2.3)** gets its parenthetical updated. The existing qualitative wording ("materially shapes how Rephrase produces alternative formulations for this item") is preserved as the parenthetical's first clause; the operational test is added as the parenthetical's second clause; a pointer to the worked examples below is appended; the bullet's closing sentence stays verbatim. This is the REPAIR shape — modify existing text in place while preserving the qualitative anchor.

**A worked-examples sub-block** is added immediately after the (a/b/c) bullets, before §2.3's closing paragraph about the rationale for the open-with-extension design. The sub-block contains a qualifying example + a non-qualifying example on the same task statement, followed by a short borderline-case clause. This is the ADD-CONTENT shape — append a distinct structural unit to §2.3's existing flow.

**§4.2 LAYER 1 mode 3** (the runtime self-check that detects rule (b) violations) is **unchanged**. Mode 3's recognition column already names "the three bounded-extensibility conditions" — those conditions now include the operational test (via §2.3's amendment), so mode 3 inherits the operational test through its existing wording without requiring a separate amendment. This mirrors the mode 6 inquiry's pattern of leaving downstream detection unchanged when the upstream rule's amendment carries the operational content.

### 2. The rule (b) bullet amendment — exact text

Rule (b)'s current text reads:

> *(b) Must constrain Rephrase (i.e., the answer materially shapes how Rephrase produces alternative formulations for this item). A meta-question whose answer doesn't constrain Rephrase is free-floating and excluded.*

The amended text:

> *(b) Must **constrain Rephrase** (i.e., the answer materially shapes how Rephrase produces alternative formulations for this item — concretely, the answer must commit information that would cause Rephrase to produce a different set of alternative formulations than it would produce without the answer; worked examples below illustrate qualifying and non-qualifying cases). A meta-question whose answer doesn't constrain Rephrase is free-floating and excluded.*

Three changes from current to amended:

(a) The parenthetical's first clause is preserved verbatim: *"i.e., the answer materially shapes how Rephrase produces alternative formulations for this item."* This is the meaning-layer-inherited qualitative anchor; it stays.

(b) A second clause is appended: *"— concretely, the answer must commit information that would cause Rephrase to produce a different set of alternative formulations than it would produce without the answer."* This is the operational test. An LLM applying the test mentally simulates Rephrase's plausible variants for the item with and without the candidate extension's answer; if the variant sets differ, the extension qualifies.

(c) A pointer to the worked examples is appended: *"worked examples below illustrate qualifying and non-qualifying cases."*

The bullet's closing sentence — *"A meta-question whose answer doesn't constrain Rephrase is free-floating and excluded."* — stays verbatim outside the parenthetical.

### 3. The worked-examples sub-block — exact text

The sub-block is placed immediately after the (a/b/c) bullets, before §2.3's closing paragraph about the rationale for open-with-extension design:

> *Worked examples illustrating rule (b):*
>
> - *Qualifying.* Item: "Refactor the authentication module." Extension: "What's the unit of refactoring — function-level, class-level, module-level, or cross-module restructure?" The answer commits a granularity axis along which Rephrase's variants differ — the small-scope variant becomes something like "rename and restructure auth's internal functions"; the big-scope variant becomes something like "redesign auth's public interface for the rest of the system." Without the answer, these specific variants would not have been the natural alternatives.
>
> - *Non-qualifying.* Item: "Refactor the authentication module." Extension: "What's the deadline for completion?" The answer commits a scheduling value, but Rephrase's variants for "refactor auth" are about HOW to refactor, not WHEN. The variant set would be identical regardless of the deadline; the extension is free-floating and excluded at Stage 2.
>
> *Borderline cases — when the constrains-Rephrase relation is genuinely ambiguous but rules (a) and (c) clearly pass — fire the extension. The asymmetric-failure principle at §4.4 favors over-coverage at Stage 2 over information-loss-in-the-dark at Stage 4.*

Three structural choices behind the sub-block:

(a) **Same-item contrast.** Both examples use the SAME task statement ("Refactor the authentication module"). Only the extension varies. This isolates rule (b)'s mechanic — the reader sees that the rule depends on the extension's relation to Rephrase variants, not on the domain or the task. Different-item contrasts would introduce confounding variables.

(b) **Observable Rephrase implication.** Each example states what Rephrase variants would emerge (qualifying example shows them; non-qualifying example explains why none would differ). The reader doesn't have to mentally simulate Rephrase to apply the test — the implication is illustrated in the example text.

(c) **Borderline-case clause.** When rule (b)'s test is genuinely ambiguous but rules (a) and (c) clearly pass, the spec instructs the LLM to fire the extension. This is the asymmetric-failure principle (already committed at §4.4) applied to the extension-firing decision: a fired-but-non-constraining extension is bounded-cost (Rephrase may ignore non-constraining content; LAYER 1 mode 4 catches drift at Stage 4 if any); a skipped-but-warranted extension is information-loss-in-the-dark.

### 4. How the operational test applies at runtime

An LLM running Task-Define at Stage 2, considering whether to add a candidate per-item extension, applies the test as follows:

(a) Read the candidate extension question and its likely answer for this item.

(b) Mentally simulate 2-3 plausible Rephrase variants for the item, BEFORE incorporating the extension's answer.

(c) Mentally simulate 2-3 plausible Rephrase variants for the item, AFTER incorporating the extension's answer.

(d) If the two variant sets differ in a way the answer caused — extension qualifies (fire).

(e) If the variant sets would be identical regardless of the answer — extension does not qualify (skip).

(f) If the difference is borderline (could go either way), apply the asymmetric-failure principle from §4.4 — fire when rules (a) and (c) clearly pass.

The test is judgment-dependent (the LLM's mental simulation), not algorithmic. This matches the spec's existing pattern at §4.1 (LAYER 1 failure modes are detectable via output observation; LLM judgment is the substrate, not structured parsing).

### 5. Why mode 3 stays unchanged

§4.2 LAYER 1 mode 3 (MQ-extension-violates-bounded-rule) currently says: *"An added meta-question extension was added but fails one of the three bounded-extensibility conditions (about task structure / constrains Rephrase / one sentence). The extension drifts into ecosystem-knowledge territory or floats free without constraining Rephrase."*

After this refinement, the "three bounded-extensibility conditions" referenced in mode 3's recognition column include the operational test (per §2.3 rule (b)'s amended parenthetical) — the operational test now lives inside one of the three conditions. The LLM running mode 3's self-check at end-of-invocation has access to §2.3's amended text and the worked examples; it applies the operational test directly as part of evaluating rule (b)'s compliance. No separate amendment to mode 3 is required.

This pattern (downstream detector inherits operational content from upstream rule via shared concept name) mirrors the mode 6 inquiry's pattern (where §4.2 mode 6's corrective column stayed unchanged after the §2.4 + §4.2 mode 6 recognition column refinement). The pattern reduces spec growth — operational content lives in one place; detectors elsewhere inherit through shared concept references.

### 6. Why the worked-examples sub-block uses "refactor the authentication module"

The example pair's choice is a deliberate test-design decision, not an arbitrary one. Three properties motivate it:

(a) **Task is concrete and project-agnostic.** Refactoring an authentication module is a widespread engineering task that LLMs trained on technical corpora understand; the example does not require domain expertise specific to one industry or codebase.

(b) **Same-item contrast is feasible.** Two extensions on the same task statement produce clearly different judgments (qualifies vs not) because the task admits multiple axes of variation (granularity, scope, kind-of-refactoring), and the extensions probe different axes (the qualifying one picks a Rephrase-relevant axis; the non-qualifying one picks a Rephrase-irrelevant axis like scheduling).

(c) **Rephrase implications are demonstrable in text.** The qualifying example's variant divergence ("rename internal functions" vs "redesign public interface") is observable; the reader can verify that the variants would actually differ. Some other task domains (e.g., "create a new file") admit less rich variant space and would make the contrast harder to demonstrate.

If empirical observation at Early Operation calibration (~10-20 invocations) reveals the refactoring example is too domain-narrow, alternative example pairs (caching scope; rendering bug modality; onboarding audience) surfaced during the inquiry's surfacing phase are available as swap-out candidates.

### 7. Pattern reusable for rule (a)

Rule (a) of the bounded-extensibility rule reads: *"Must be a question about the task's structure or framing — its kind, scope, intent, granularity — NOT a question requiring external state-gathering or ecosystem knowledge to answer."* Rule (a) has its own foresight-judgment requirement: the LLM at Stage 2 must judge whether the extension is "about task structure or framing" rather than about external state.

This refinement's structure — inline operational test in the rule + same-item-contrast worked examples illustrating qualifying vs non-qualifying cases — is structurally extensible to rule (a). A future inquiry could apply the same pattern: add an operational test ("the answer must be derivable from the task statement and LLM internal cognition alone, not from external project state"); add same-item-contrast examples (one extension about task structure that qualifies; one extension about external state that doesn't).

Pattern propagation is **out of scope for this finding** but explicitly flagged as future work. The structural pattern is now established for foresight-dependent rules in this discipline.

### 8. Coherence with the meaning-layer's lightweight stance

The user's original meaning-layer commitment to "lightweight" gates the refinement at several points. Each was checked:

- **Criterion (iv) "no sub-machinery beyond a paragraph per operation"** applies to OPERATION paragraphs at §2.1. §2.3 is the canonical-set + bounded-extensibility section, multi-paragraph by nature; rule (b)'s parenthetical expansion fits the section's existing structure; the worked-examples sub-block adds one structured unit consistent with §2.3's flow. Neither amendment violates criterion (iv).

- **Criterion (vi) "every output element load-bearing"** applies to discipline OUTPUTS, not spec content. The worked examples illustrate rule (b); they are spec content. The operational test in rule (b) is the rule's operational form; it is load-bearing for runtime application.

- **Project-rooted lightweight pattern** (compact additions; project-pattern-consistent structure; no novel ceremonies). Both amendments meet this pattern.

- **No process-layer change.** The refinement does not move rule (b)'s check from Stage 2 to Stage 4 (which would be a process-layer change explicitly out of scope per the inquiry's Layer Commitment). The Stage 4 retrospective alternative was considered and rejected at the sensemaking phase as out-of-scope process-layer change; flagged as future work.

## Inherited Commitments Re-test

This finding refines a section of the Task-Define runtime spec; the spec inherits commitments from the meaning-layer finding (15-39) and the process-layer finding (07-48), and the refinement pattern inherits from the mode 6 inquiry (14-14). Sensemaking explicitly re-tested the load-bearing commitments via Phase 2 Definitional-Internal-Consistency (10/10 PASS). Brief re-test summary:

| Source | Commitment | Re-test status | Evidence / Reason |
|---|---|---|---|
| `15-39` §4 | Rule (b) "must constrain Rephrase (materially shapes Rephrase)" | RE-TESTED | The amendment PRESERVES this wording as the parenthetical's first clause and ADDS the operational test as a second clause; meaning-layer-inherited anchor remains canonical |
| `15-39` §4 | Bounded-extensibility rule (a) "about task structure or framing" | RE-TESTED | Non-qualifying example N1 ("deadline") passes rule (a) — deadline is task-framing-adjacent — so the example tests rule (b) cleanly without confounding |
| `15-39` §4 | Bounded-extensibility rule (c) "expressible in one sentence" | RE-TESTED | Both example extensions are one-sentence questions; rule (c) compliance verified |
| `15-39` §4 | Open-with-extension rationale (closed 3-set over-fits; fully-open undermines Rephrase safety) | RE-TESTED | The amendment preserves the open-with-extension structure; the operational test reinforces (not relaxes) the safety constraint |
| `07-48` | Stage 2 Meta-question precedes Stage 4 Rephrase (4-stage flow) | RE-TESTED | Foresight problem identified by user IS structural feature; refinement operates within the constraint, not against it |
| `14-14` (mode 6 inquiry) | ADD-CONTENT-appending pattern preserves qualitative anchor | RE-TESTED | Applied directly to rule (b) parenthetical amendment (W2 form); pattern is precedent-rooted |
| `14-14` (mode 6 inquiry) | Strict self-containment (no inquiry-folder mentions in spec) | RE-TESTED | Both amendments reference only intra-spec sections (§4.4); no `devdocs/inquiries/...` paths |
| §4.4 asymmetric-failure principle | "Lean toward fire at MQ extensions when bounded-rule is met" | RE-TESTED | Borderline-case clause directly applies the principle (fire on ambiguous-but-(a)+(c)-pass cases) |
| §4.2 mode 3 recognition | "Fails one of the three bounded-extensibility conditions" | INHERITED-WITHOUT-RE-TEST (with explicit reason) | Mode 3 stays unchanged because its existing phrasing references the conditions, which now include the operational test; the inheritance is via shared concept name, not via direct cross-reference. If empirical observation later reveals mode 3 doesn't fire when it should, M3b (separate mode 3 amendment) becomes the refinement target. |

8 of 9 inherited commitments RE-TESTED; 1 (mode 3 recognition inheritance) explicitly flagged INHERITED-WITHOUT-RE-TEST with reason. No silent absorption.

## Next Actions

### MUST

- **What:** Apply both amendments to §2.3 of `cognitive_harness/task-define/references/task-define.md`. Update rule (b)'s parenthetical (exact text in finding section 2 above). Add the worked-examples sub-block (exact text in finding section 3 above) immediately after the (a/b/c) bullets, before the closing paragraph about open-with-extension rationale.
  - **Who:** spec editor (anyone with edit access).
  - **Gate:** condition-bound — apply as a direct spec edit; no further inquiry needed.
  - **Why:** closes the foresight gap in rule (b). Until this edit lands, the rule's qualitative wording leaves the LLM applying it at Stage 2 without an operational test; the LLM is most likely to err either liberally (firing too many extensions) or conservatively (skipping warranted ones), both of which degrade rule (b)'s effectiveness.

### COULD

- **What:** After Task-Define has accumulated approximately 10-20 invocations on real task statements (Early Operation calibration per the runtime spec's §4.6 calibration trajectory), observe rule (b)'s empirical firing patterns. Specifically: does the operational test fire reliably on real qualifying / non-qualifying extension candidates? Does the "refactor auth" example domain limit applicability to non-refactoring tasks? Do LLMs running the discipline apply the borderline-case clause correctly?
  - **Who:** spec maintainer; informal observation across whichever runners invoke Task-Define.
  - **Gate:** observable — after ~10-20 Task-Define invocations have been logged.
  - **Why:** validates the operational test empirically. If the refactoring example is too domain-narrow, alternative example pairs (caching scope; rendering bug; onboarding audience) are available as swap-outs.

- **What:** Propagate the *inline operational test + same-item-contrast worked examples* pattern to bounded-extensibility rule (a) — which has its own analogous foresight gap (requires the LLM at Stage 2 to judge "is this question about task structure or framing — NOT about external state-gathering").
  - **Who:** future inquiry author.
  - **Gate:** condition-bound — when the user wants to close rule (a)'s foresight gap; the pattern is established here and can be applied incrementally.
  - **Why:** rule (a) was identified during sensemaking as having a structurally similar gap; the pattern is reusable. The structural form of rule (a)'s refinement would parallel this finding's form — add an operational test inline in rule (a)'s parenthetical; add same-item-contrast examples illustrating task-structure-or-framing vs external-state-gathering.
  - **Depends-on:** MUST item "apply both amendments." OVERRIDE: COULD is adoption-ready independent of how quickly the MUST resolves, because the pattern itself is what gets reused (the pattern's structural form is established by this finding's reasoning whether or not the spec edit has landed yet). Reason: pattern reusability is a structural property of this inquiry's commitments; spec editing is a separate concrete step.

- **What:** Tighten the worked-examples sub-block's example length if strict compliance with the user's "2-3 line worked example" hint is preferred over implication-explicitness (the OPTIONAL R-1 surfaced at critique). The current examples are roughly 4 lines each (item + extension + Rephrase-implication paragraph) to convey the Rephrase implication observably; shorter examples would omit the implication paragraph and rely on reader inference.
  - **Who:** spec editor at compile time.
  - **Gate:** condition-bound — only if the user prefers compactness over implication-explicitness.
  - **Why:** the substantive directive (compact illustration with constrains-Rephrase relation explicit) is satisfied at current length; this COULD is purely stylistic.

### DEFERRED

- **What:** Reconsider whether rule (b)'s check should move from Stage 2 (forward-prediction) to Stage 4 (retrospective via LAYER 1 mode 4 detection). This is a process-layer alternative explicitly out of scope for this structural refinement.
  - **Gate:** condition-bound — only if Bootstrap calibration data reveals that the foresight problem persists despite the operationalization (e.g., the operational test produces too many false-positive or false-negative judgments). Trigger: 3+ observed instances where the LLM applied the operational test incorrectly + the misapplication was caught only at Stage 4.
  - **Why (if revived):** moving the check to Stage 4 converts a foresight problem into a hindsight problem; the LLM doesn't need to predict perfectly because mode 4 catches drift retrospectively. This is a process-layer change requiring a separate process-layer inquiry.

- **What:** Empirically validate that the same-item contrast example structure generalizes beyond the refactoring domain. The example uses "Refactor the authentication module"; the rule's mechanic should apply to any task domain, but example-domain-narrowness is a real risk for Bootstrap-state spec authors.
  - **Gate:** observable — after Task-Define invocations across diverse task domains accumulate.
  - **Why (if revived):** would either confirm the refactoring example as universally illustrative or motivate an alternative-domain example swap (caching scope; rendering bug; onboarding audience were available alternatives).

## Reasoning

The refinement was reached by structurally testing several candidate forms and rejecting each in turn until only the surviving design remained. The structure of the reasoning is: which design choices were considered, which were rejected, why they were rejected, and why the chosen design holds.

### Why inline operational test in rule (b) parenthetical (W2), not keep-only (W1) or replace-anchor (W3)

Three wording candidates were considered. The first was W1 — keep rule (b)'s current text unchanged, add the operational test only as part of the worked examples below. This is the most conservative. It was rejected because the operational test belongs WITH the rule's statement; if the reader scans only the (a/b/c) bullets without scrolling to the examples, they see qualitative-only wording. The operational layer should be visible at the rule.

The second was W3 — replace "materially shapes how Rephrase produces alternative formulations" with the operational test entirely. This is the most aggressive. It was rejected because the qualitative anchor was inherited from the meaning-layer finding (15-39 §4) and carries the rule's high-level intent ("materially shapes" names the relation); the operational test is the implementation. Replacing the qualitative anchor with the implementation flattens the two-layer structure (intent → operational test) — the same kind of flattening the mode 6 inquiry rejected when it preferred ADD-CONTENT-appending over REPAIR-in-place at §2.4.

W2 — inline the operational test alongside the existing qualitative anchor within rule (b)'s parenthetical — preserves both layers. The reader scanning the bullet sees the qualitative phrase + the concrete test + a pointer to examples; the qualitative anchor remains as the higher-level commitment; the operational test is the implementation underneath.

### Why same-item contrast (Q1+N1 on "refactor auth"), not different-domain pairs

The qualifying and non-qualifying examples could have come from different task domains — for instance, the qualifying example might be about caching and the non-qualifying about deadlines. This would broaden domain coverage in the example pair.

It was rejected because different-domain contrasts introduce a confounding variable: the reader might attribute the qualifying / non-qualifying judgment to the DOMAIN (refactoring vs caching) rather than to the RULE's mechanic (axis-commitment vs non-axis-commitment). Same-item contrast isolates the rule mechanic; both examples use "Refactor the authentication module"; only the extension varies. The reader sees that the rule depends on the extension's relation to Rephrase variants, not on the domain.

### Why operational test = variant-set divergence (combined form), not axis-commitment-only or mental-simulation-only

The operational test could have been stated more abstractly ("the answer commits an axis along which Rephrase varies") or more procedurally ("mentally simulate Rephrase's variants both with and without the answer"). The combined form — "the answer must commit information that would cause Rephrase to produce a different set of alternative formulations than it would produce without the answer" — encodes both the abstract mechanism (axis commitment, implicit in "would cause") and the procedural test (variant-set divergence, explicit in "different set of alternative formulations").

The abstract-only form was rejected because it depends on the LLM knowing what "axis Rephrase varies along" means in the abstract; harder to apply quickly. The procedural-only form was rejected because it states the operation without naming the mechanism; the LLM applies the test without understanding why it works. The combined form names both, in one sentence; the LLM has both the test and the mechanism in one place.

### Why lean-to-fire on borderline cases, not Stage 4 retrospective or split-rule

Three edge-case treatments were considered. EC1 (lean to fire on borderline) is the project-rooted application of the §4.4 asymmetric-failure principle: false-positive extension is bounded-cost (Rephrase may ignore non-constraining content; mode 4 may catch drift); false-negative skipped-extension is information-loss-in-the-dark. The asymmetric-failure principle is already committed; applying it to extension firing is direct.

EC2 (defer to Stage 4 retrospective via mode 4) is a process-layer change — it would move rule (b)'s effective check from Stage 2 to Stage 4. The inquiry's Layer Commitment explicitly placed process layer out of scope. EC2 is a valid alternative but belongs to a separate inquiry; flagged as future-work DEFERRED.

EC3 (split rule (b) into hard test + soft test) was rejected as over-procedurization; introduces sub-machinery into the rule itself; violates the lightweight spirit.

### Why §4.2 mode 3 stays unchanged

Mode 3's recognition column currently says "fails one of the three bounded-extensibility conditions." With the §2.3 amendment, those three conditions now include the operational test (inside rule (b)). The LLM running mode 3's self-check at end-of-invocation has access to §2.3's amended text; it applies the operational test directly as part of evaluating rule (b)'s compliance. The mode 3 recognition column doesn't need to change; the inheritance is via shared concept reference, not via cross-reference.

This pattern mirrors the mode 6 inquiry where mode 6's corrective column stayed unchanged after §2.4 + §4.2 recognition refinement. The pattern reduces spec growth — operational content lives in one place; downstream detectors inherit through shared concept names.

## Open Questions

### Monitoring

- **Observable after Task-Define has been invoked on ~10-20 real task statements** (Early Operation calibration per the runtime spec's §4.6 calibration trajectory). Does the operational test fire reliably on real qualifying / non-qualifying extension candidates? Does the test produce false positives (firing on extensions that genuinely constrain Rephrase) or false negatives (skipping extensions that should qualify)? Empirical evidence will indicate whether the test's wording is correctly calibrated.

- **Observable across LLMs of different capabilities.** Does the operational test apply reliably across different LLM models? Lower-capability LLMs may struggle to mentally simulate Rephrase variants accurately; the same-item-contrast examples provide pattern-matching scaffolding, but failure-mode evidence would inform whether the test needs additional grounding.

- **Observable when Task-Define is applied to non-engineering task domains.** Does the refactoring example generalize? If Task-Define is invoked on tasks from domains outside software engineering (e.g., research planning, content authoring), does the refactoring example still pattern-match for the LLM running the discipline?

### Refinement Triggers

- **If the operational test fires on ≥ 30% of MQ extension candidates across the first 20 invocations**, the test wording may be too tight (over-rejection); revisit the operational test's "different set of alternative formulations" phrasing. Trigger: observable ≥ 30% rejection rate of well-formed extension candidates.

- **If the operational test fires on ≤ 5% of MQ extension candidates across the first 20 invocations**, the test wording may be too loose (under-rejection); investigate whether real free-floating extensions are slipping past. Trigger: observable ≤ 5% rejection rate.

- **If LLMs running the discipline apply the borderline-case clause too liberally** (firing extensions that shouldn't have fired even under asymmetric-failure), tighten the borderline-clause wording — possibly add an upper bound on borderline extensions per item. Trigger: 3+ observed instances of borderline-fire that mode 4 later flagged as drift.

- **If mode 3 detection fails to fire when rule (b) is violated** (the LLM running mode 3's self-check doesn't apply the §2.3 operational test even though it's now inheritable), amend mode 3's recognition column explicitly to reference §2.3. Trigger: 2+ observed mode 3 misses on real rule (b) violations.

### Research Frontiers

- **Whether the *inline operational test + same-item-contrast worked examples* pattern generalizes to other discipline-spec rules with similar foresight gaps.** Rule (a) is the most direct candidate (F7 frontier from sensemaking); other disciplines (Sensemaking's Phase 3 Ambiguity Collapse schema; Surfacing's relevance-attribution mechanism) may have analogous gaps but in different shapes. The pattern's reusability beyond this discipline is open.

- **Whether the variant-set divergence test admits a lighter approximation for LLM application** — e.g., a one-question heuristic ("would I phrase the rephrasings differently?") that captures most of the test's power without requiring full mental simulation. If empirical observation reveals LLMs struggle with full simulation but a heuristic works, the test wording could be refined at Mature calibration.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
. Bounded-extensibility rule (b) "must constrain Rephrase" requires foresight without a test.
  The rule fires at Stage 2 (Meta-question time); Rephrase fires at Stage 4. So when the LLM considers adding an extension at
  Stage 2, it has to predict whether the answer will materially shape Rephrase that hasn't happened yet. There's no objective
  test — the LLM judges forward in time. The spec provides no worked example of "this extension constrains Rephrase" vs "this
  extension doesn't." For a Bootstrap-calibration-state discipline, this is exactly where the LLM will most likely err — either
  firing too many extensions (LAYER 1 mode 3) or skipping warranted ones. Refinement: a 2-3 line worked example in §2.3
  showing a qualifying extension + a non-qualifying one, with the constrains-Rephrase relation made explicit. lets dive deep into this one
```

</details>
