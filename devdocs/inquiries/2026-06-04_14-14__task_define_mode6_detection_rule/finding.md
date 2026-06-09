---
status: active
model: claude-opus-4-7[1m]
effort: unknown
---

# Finding: Task-Define LAYER 1 Mode 6 — Detection Rule Refinement

## Question

From `_branch.md`:

**Question.** Design the operational detection predicate for *LAYER 1 mode 6* — the failure mode called *MQ2-answer-missing-dispatch-info* in the Task-Define runtime spec at `cognitive_harness/task-define/references/task-define.md`. Task-Define is the project's discipline for expanding a task statement into a defined task (settled meaning layer at `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md`; settled process layer at `devdocs/inquiries/2026-06-04_07-48__task_define_process_layer/finding.md`). The runtime spec lists ten failure-mode handles the discipline self-checks at end of each invocation; *mode 6* is the one that fires when the per-item Meta-question operation produces an answer for MQ2 (the context-need question — *"Is this task self-contained, or does it require external context to make sense and be done right? If external, what kind?"*) that does not carry the information a runner needs to decide whether to invoke the project's Exploration discipline.

The gap this inquiry addresses: the spec's §4.2 mode 6 row currently carries only a failure DESCRIPTION ("Meta-question fires but MQ2's answer lacks the information enabling external-context-need determination"), not a content-presence RULE the end-of-invocation self-check can pattern-match against. The §2.4 dispatch substrate section states a qualitative authoring constraint ("at minimum a context-need verdict; when external context is needed, information about what kind"), but that constraint is on what the operation writes — not a predicate detection can evaluate. The two need to be coordinated: §2.4 commits the shape; §4.2 tests for the shape.

**Goal.** Concrete drop-in spec amendments — exact text for two sections — that close the detection gap while preserving the meaning-layer's lightweight stance, the self-containment of the discipline spec, the perception/action split (Task-Define perceives the framing-gap; the runner acts on the perception), and the existing internal consistency of the spec. The deliverable is text the user can drop into the spec file directly, not theory.

**What would fail.** A predicate stated qualitatively without committing the content presence rule; a structured-shape commitment that pushes Task-Define past perception into emitting a typed dispatch object; an inquiry-folder reference (a path like `devdocs/inquiries/...`) leaking into the spec; an amendment that silently contradicts §2.4's existing authoring constraint; an amendment that over-procedurizes by adding sub-machinery beyond what the meaning-layer's six lightweight criteria permit.

## Finding Summary

- **The refinement is a coordinated two-section amendment** to the Task-Define runtime spec at `cognitive_harness/task-define/references/task-define.md` — one paragraph appended to §2.4 (the dispatch-substrate section), and one row-cell replacement in §4.2 (the LAYER 1 mode 6 recognition column). The two amendments are coherent by construction: §2.4 carries the source-of-truth shape commitment; §4.2 references it.

- **The shape commitment for MQ2's answer is two-part content presence:** every per-item MQ2 answer must contain (a) a context-need verdict — one of {yes, no, uncertain} (or natural-language equivalents an LLM judging the answer would recognize as one of these three states); and (b) when the verdict is yes, a kind specifier — a one-sentence description of what kind of external context is needed. The shape is content, not syntax: a free-text answer carrying both elements satisfies the commitment as fully as a structured answer would.

- **The detection predicate is binary, per-item, and applies an explicit application gate.** At end of each invocation, the discipline's self-check examines each item's MQ2 answer; mode 6 fires if any item's answer is missing a verdict OR (when the verdict is yes) is missing a kind specifier. The predicate applies only when MQ2 has fired for at least one item — the degenerate count = 0 case (where the Itemize operation emits zero items and Meta-question never fires) is routed to a separate condition (FLAG condition (f) at §4.7), not to mode 6.

- **"Uncertain" is a valid runner-actionable verdict, not a mode 6 failure.** Per the runtime spec's asymmetric-failure principle (§4.4), the runner errs toward invoking Exploration when the verdict is uncertain — uncertain IS information for dispatch determination. Treating uncertain as triggering mode 6 would force Task-Define to always produce a definite verdict, even when the task statement is genuinely ambiguous; that would be a structural overreach into runner-side decision-making and would violate the perception/action split.

- **Detection feeds the existing FLAG verdict at §4.7.** When mode 6 fires, the discipline's self-assessment verdict at end of invocation routes to FLAG condition (d) — *any LAYER 1 mode was self-recognized*. Confidence on the FLAG verdict (HIGH / MED / LOW) is determined by §4.7's general rubric, which is itself under-specified (a separate gap acknowledged but out of scope for this refinement). Per-mode confidence (grading mode 6 by how badly the predicate fires) is explicitly NOT introduced here — lightweight stance plus Bootstrap calibration state both argue against introducing graded detection until empirical evidence warrants it.

- **The refinement honors all three project-architectural commitments that constrain it:** **self-containment** (the spec contains no outbound pointers to design history, inquiry folders, or other disciplines; both amendments reference only other sections of the same spec); **lightweight** (the §2.4 amendment fits within the section's existing multi-paragraph structure for a signature-internal-capability section, and the §4.2 amendment fits within the row-cell structure that sister disciplines use for failure-mode recognition columns); and **perception/action split** (the predicate tests perception's completeness — does the answer carry the information — without committing how the runner extracts a dispatch verdict from it).

- **The same pattern is reusable** for the other LAYER 1 failure modes (modes 1-5) whose recognition columns are similarly qualitative-only. *Shape commitment in the capability section + predicate in the failure-mode row referencing it* — applied here to mode 6, structurally extensible to the others when their gaps come into scope. Pattern propagation is explicitly out of scope for this finding but flagged as future work.

## Finding

Some surrounding context to ground the conclusions before reading them: **Task-Define is a relatively new project discipline** the user has authored across several recent inquiries. Its meaning layer (what the discipline IS as a cognitive operation) was settled in the *Task-Define meaning-layer inquiry*. Its process layer (how the operation runs at runtime) was settled in the *Task-Define process-layer inquiry*. The runtime spec at `cognitive_harness/task-define/references/task-define.md` was authored from those two findings. After authoring, a self-critique (in the prior conversation) identified several under-specifications; this inquiry deep-dives into one of them — the detection-rule gap for LAYER 1 failure mode 6.

The discipline's LAYER 1 failure modes are operational failures the discipline self-recognizes at end of each invocation by observing its own output. The recognition is done via pattern-matching against a "recognition column" entry for each mode in the spec's §4.2 table. For most LAYER 1 modes, the recognition column carries a concrete failure pattern an LLM running the self-check can apply; mode 6's column carries only a description of what failure LOOKS like, not a rule for detecting it. The gap is exactly that: a description is not a detection rule. This inquiry closes the gap with two amendments to two existing sections.

### 1. What gets amended

Two sections of `cognitive_harness/task-define/references/task-define.md` change. Nothing else in the spec changes.

**§2.4** (the dispatch substrate; the signature internal capability section for how Task-Define's Meta-question output supports the cross-discipline boundary with Exploration) currently has a four-paragraph structure: substrate identity → locus (the runner extracts) → necessary information content → runner-side extraction protocol out of scope. The amendment appends new content to the third paragraph (the necessary-information-content paragraph). The existing qualitative commitment is preserved as the paragraph's first part; the operational shape is added as the paragraph's continuation.

**§4.2** (the LAYER 1 failure modes table) currently has a row for mode 6 with three columns: number, mode name, recognition column, corrective column. The amendment replaces the recognition column's current failure-description text with the operational predicate; the corrective column ("Re-fire MQ2 for the affected items, explicitly demanding the necessary information content") stays unchanged.

### 2. The §2.4 amendment — exact text appended

The §2.4 third paragraph (currently the necessary-information-content commitment) is appended with the following content. The amendment is APPENDED (not replaced) so the existing higher-level qualitative anchor — the "necessary information content" framing introduced by the process-layer finding — is preserved as the paragraph's first part:

> *Operationally, this means MQ2's answer carries two content elements: (a) a context-need verdict — one of {yes, no, uncertain} (or natural-language equivalents that an LLM judging the answer would recognize as one of these three states); (b) when the verdict is yes, a kind specifier — a one-sentence description of what kind of external context is needed. The shape is content, not syntax: a free-text answer carrying both elements satisfies the commitment as fully as a structured answer would. The shape is per-item — each item's MQ2 answer is evaluated independently. The "uncertain" verdict is a valid runner-actionable state — the runner errs toward invoking Exploration on uncertain answers per the asymmetric-failure principle at §4.4.*

### 3. The §4.2 mode 6 recognition column — exact replacement text

The §4.2 mode 6 row's recognition column currently reads: *"Meta-question fires but MQ2's answer lacks the information enabling external-context-need determination — the runner cannot extract a dispatch verdict."* That entire text is REPLACED (not appended) with the following operational predicate. Replacement (rather than appending) matches the sister-discipline pattern observed in the Structural Surfacing discipline spec at `cognitive_harness/surfacing/references/surfacing.md` (the spec's §4.2 modes 6, 8, and 9 recognition columns each carry a concrete failure pattern, not a description-plus-pattern hybrid). The predicate IS the pattern; carrying both a description and a pattern would be redundancy.

> *Per-item check at end-of-invocation: any item's MQ2 answer is missing the content required by §2.4 — i.e., the answer does not state a context-need verdict (one of {yes, no, uncertain}), OR — when the verdict is yes — the answer does not state a kind specifier (a one-sentence description of what kind of external context is needed). Applies when MQ2 has fired for at least one item; does not apply in the count = 0 case (handled separately by FLAG condition (f) at §4.7). Detection is binary (mode fires or does not); confidence on the resulting FLAG verdict is determined per §4.7's general rubric.*

The corrective column for mode 6 stays unchanged. It currently reads: *"Re-fire MQ2 for the affected items, explicitly demanding the necessary information content."* — the existing wording is operationally complete with the refined recognition column.

### 4. How the predicate operates at runtime

The predicate runs at end of each Task-Define invocation, as part of the discipline's existing LAYER 1 self-check (Execute step 4 in the spec). The LLM running the discipline reads each per-item bundle's MQ2 answer in turn. For each answer, the LLM judges:

- **Is a context-need verdict present?** The answer should state either "yes" or "no" or "uncertain" — or the natural-language equivalent (e.g., "this task is self-contained" maps to no; "needs external context about the team's conventions" maps to yes; "I cannot determine from the statement alone" maps to uncertain). If no recognizable verdict is present, mode 6 fires for that item.
- **When the verdict is yes, is a kind specifier present?** The answer should additionally state, in roughly one sentence, what kind of external context is needed (e.g., "the team's recent architecture decisions in this service area" or "the project's deployment topology"). If the verdict is yes but no kind specifier is present, mode 6 fires for that item.
- **Otherwise** (verdict no, or verdict uncertain, or verdict yes with kind specifier present), the predicate is satisfied for that item.

If any item triggers mode 6, the discipline's end-of-invocation self-assessment verdict becomes FLAG, with mode 6 named in the verdict's conditions list and the triggering item identifier(s) included. If no item triggers mode 6, the predicate contributes nothing to the verdict (other modes and other conditions may still cause FLAG independently).

### 5. The application gate handles the degenerate Itemize case

The Itemize operation runs at the start of each invocation and emits a count ≥ 0. When count = 0 (the input task statement was empty, malformed, or contained no actionable task), Meta-question never fires; there is no MQ2 answer to test. Mode 6's predicate is structurally inapplicable.

The predicate's application gate makes this explicit: *"Applies when MQ2 has fired for at least one item."* The count = 0 case has its own handler — FLAG condition (f) at §4.7, which reads: *"Itemize emitted count = 0."* When count = 0, FLAG (f) fires; mode 6 does not. The two conditions are mutually exclusive by construction; the application gate routes correctly.

### 6. Why binary detection rather than graded

The runtime spec's §4.7 self-assessment carries a HIGH / MED / LOW confidence attribute on the FLAG verdict. A graded mode 6 detection — where the predicate's firing would also carry a per-mode confidence (e.g., HIGH for verdict-absent, MED for kind-absent-when-yes, LOW for borderline cases) — was considered and rejected.

Two reasons. First, §4.7's general confidence rubric is itself under-specified — the runtime spec acknowledges the gap. Committing per-mode confidence here would presuppose a rubric structure that does not yet exist; the dependency would be inverted. Second, the discipline is in Bootstrap calibration state. The runtime spec's §4.6 calibration trajectory commits to Bootstrap → Early Operation (~10-20 invocations) → Mature Operation (~30+ invocations), with empirical refinement of mode lists and detection criteria as data accumulates. Per-mode confidence is exactly the kind of refinement that should wait for Mature-state evidence; introducing it at Bootstrap presupposes evidence not yet available.

Binary detection is the structurally correct Bootstrap choice. If at Mature calibration the empirical firing pattern suggests graded detection would aid downstream consumers, the §4.2 mode 6 row can be revised then — the binary commitment does not constrain future refinement.

### 7. Why "uncertain" is a valid verdict, not a mode 6 failure

The runtime spec's §4.4 commits an asymmetric-failure principle: premature commitments are structurally worse than over-cautious commitments that preserve recoverability. Applied to Itemize specifically, this means default-to-keep-together; applied to the dispatch substrate, this means the runner errs toward invoking Exploration when the verdict on context-need is uncertain. False-positive Exploration is bounded-cost (the discipline does work that may not be needed); false-negative-missed-external-context is information-loss-in-the-dark (the loop disciplines operate on framing that should have been enriched).

If "uncertain" triggered mode 6 — i.e., if the predicate fired when the LLM produced an uncertain verdict — Task-Define would be required to always produce a definite verdict, even when the task statement is genuinely ambiguous (a property of the input the discipline did not author). That would force the discipline into deciding for the runner ("decide yes or decide no"); the runner's asymmetric-failure handling would never see uncertain as input.

The refinement names uncertain as a third valid verdict. Mode 6 fires only on content absence: no verdict at all, or yes without a kind specifier. Uncertain-with-or-without-kind-specifier does not fire.

### 8. The reusable pattern (out of scope but flagged)

The refinement structure — *shape commitment in the capability section + predicate in the failure-mode row referencing it* — is reusable for the other five LAYER 1 modes in §4.2, whose recognition columns are similarly qualitative-only. Mode 1 (Premature-Itemize-split), mode 2 (Late-multi-item-detected-by-downstream), mode 3 (MQ-extension-violates-bounded-rule), mode 4 (Rephrase-drifted-without-MQ-constraint), and mode 5 (Per-operation-firing-missed-an-operation) all have detection-rule gaps of varying severity.

Pattern propagation is **out of scope for this finding** but explicitly flagged as future work. A future inquiry can apply the same two-section pattern to each of the five modes: identify the operation's capability section (or extend §4.2's row directly when no separate capability section exists); commit the operation's shape constraint there; replace the failure-mode row's recognition column with an operational predicate that references the shape commitment.

The pattern is not invented here — it derives from observing how the project's sister disciplines author their failure-mode rows. The Structural Surfacing discipline spec at `cognitive_harness/surfacing/references/surfacing.md` carries operational predicates in its mode 6 / 8 / 9 recognition columns; the Structural Sensemaking discipline spec at `cognitive_harness/sense-making/references/sensemaking.md` carries similar structured commitments in its Phase 3 schema. The pattern is project-rooted; this refinement applies it to one specific gap and surfaces its broader reusability.

## Next Actions

### MUST

- **What:** Apply both amendments to `cognitive_harness/task-define/references/task-define.md`. Append the §2.4 paragraph extension (the operational shape commitment, exact text in finding section 2 above) to §2.4's third paragraph. Replace §4.2 mode 6's recognition column text (the operational predicate, exact text in finding section 3 above). Leave §4.2 mode 6's corrective column unchanged.
  - **Who:** spec editor (anyone with edit access).
  - **Gate:** condition-bound — apply as a direct spec edit; no further inquiry needed.
  - **Why:** closes the LAYER 1 mode 6 detection gap. Until this edit lands, the runtime spec's mode 6 recognition column carries only a description; the end-of-invocation self-check has no pattern to apply; the failure mode is named but undetectable. With the edit, the detection becomes operational; the discipline can self-recognize mode 6 occurrences and route them to the FLAG verdict.

### COULD

- **What:** After Task-Define has accumulated approximately 10-20 invocations on real task statements (Early Operation calibration; per the runtime spec's §4.6 calibration trajectory), observe mode 6's empirical firing rate. Specifically: does the predicate fire on real cases of dispatch-info-missing? Does it produce false positives on well-formed answers? Does "uncertain" appear in real MQ2 answers, and does the runner handle it correctly?
  - **Who:** spec maintainer; informal observation across whichever runners invoke Task-Define.
  - **Gate:** observable — after ~10-20 Task-Define invocations have been logged.
  - **Why:** validates the predicate empirically. Bootstrap state's "best-guess" commitments need empirical confirmation before moving to Mature-state refinement (e.g., introducing per-mode confidence; tightening the natural-language-equivalents tolerance; sharpening the kind-specifier wording).

- **What:** Propagate the *shape commitment in capability section + predicate in failure-mode row references it* pattern to the other five LAYER 1 modes (Premature-Itemize-split, Late-multi-item-detected-by-downstream, MQ-extension-violates-bounded-rule, Rephrase-drifted-without-MQ-constraint, Per-operation-firing-missed-an-operation) whose recognition columns are similarly qualitative-only.
  - **Who:** future inquiry author.
  - **Gate:** condition-bound — when the user wants to close the remaining detection-rule gaps systematically; the pattern is established here and can be applied incrementally per mode.
  - **Why:** the other five LAYER 1 modes were identified in the prior critique as having varying-severity detection-rule gaps. Mode 6's refinement establishes the pattern; the pattern is structurally reusable.
  - **Depends-on:** MUST item "apply both amendments." OVERRIDE: COULD is adoption-ready independent of how quickly the MUST resolves, because the pattern itself is what gets reused (the pattern is established by this inquiry's reasoning whether or not the spec edit has landed yet). Reason: pattern reusability is a structural property of the inquiry's commitments; spec editing is a separate concrete step that can run in either order.

### DEFERRED

- **What:** Operationalize §4.7's general confidence rubric (the HIGH / MED / LOW determination for FLAG verdicts). This is a separate gap identified in the prior critique (refinement #6 from that critique).
  - **Gate:** condition-bound — when the confidence determination becomes a blocker for downstream consumers; current binary detection of mode 6 plus FLAG-without-graded-mode-6-confidence is acceptable at Bootstrap.
  - **Why (if revived):** would unlock per-mode confidence refinement at all six LAYER 1 modes (not just mode 6), making downstream consumers' interpretation of FLAG verdicts more actionable. Mode 6's binary detection contributes a clean signal when the rubric is later operationalized.

- **What:** Revisit the asymmetric-failure principle's coverage of the uncertain-verdict case. The current commitment ("runner errs toward invoking Exploration on uncertain") is a runner-side action; if multiple runners diverge in how they handle uncertain (e.g., one runner errs toward Exploration, another defers to user, a third treats uncertain as failure), the cross-runner-coordination concern from the meaning-layer's Open Questions section (Refinement Triggers) re-surfaces.
  - **Gate:** observable — when at least two runners that invoke Task-Define produce different dispatch verdicts on the same MQ2 = uncertain answer.
  - **Why (if revived):** would force a project-level commitment on uncertain-handling, possibly elevating it from a runner-side concern to a cross-discipline coordination spec.

## Reasoning

This refinement was reached by structurally testing several candidate predicates and shape-commitments, rejecting each in turn until only the surviving design remained. The structure of the reasoning is: which design choices were considered, which were rejected, why they were rejected, and why the chosen design holds.

### Why §2.4 carries the shape commitment, not §2.3 or §4.2

The shape commitment had three candidate placements. The first was §2.3 (the Meta-question canonical set, where the MQ2 verbatim question template lives — *"Is this task self-contained, or does it require external context to make sense and be done right? If external, what kind?"*). Placing the shape commitment alongside the question template would seem natural: the question and its answer shape live together. The reason this fails: §2.3's role is to commit the question wording and the bounded-extensibility rule (how additional meta-questions may be added per item). Adding answer-shape would expand §2.3's role into a section it does not occupy elsewhere; it would also force the §4.2 mode 6 predicate to reach across two structural jumps (§4.2 → §2.3) when a cleaner one-jump path (§4.2 → §2.4) is available.

The second candidate was §4.2 mode 6 row itself — carry the shape commitment IN the recognition column rather than referencing an external commitment. This compresses the spec, but it fails the single-source-of-truth principle: the same shape constraint then exists in two places (the qualitative version in §2.4 and the operational version in §4.2). Any future refinement risks the two diverging.

The third candidate — and the chosen one — is §2.4 (the dispatch substrate; the section that commits how the cross-discipline boundary with Exploration works). §2.4 is the section that already commits MQ2's answer is the dispatch substrate and that the answer's content must be sufficient for runner extraction. The operational shape is the operational form of that existing qualitative commitment; the two belong in the same section. The §4.2 mode 6 predicate references §2.4 with a single cross-reference, single source of truth maintained.

### Why content-presence, not structured-shape

The shape commitment had two candidate forms. A structured-shape form would commit MQ2's answer to a typed structure like `{external_context_required: yes|no|uncertain, kind: string|null}` — typed fields with strict syntax. This form is mechanically testable and makes runner extraction trivial. The reason this fails: it pushes Task-Define toward emitting a typed dispatch object, which the existing §2.4 commitment explicitly forbids — Task-Define does not emit a separate `needs_external_context` boolean or any typed dispatch artifact. The MQ answers ARE the substrate; they are LLM-generated text by nature. A typed-shape commitment would be a separate dispatch field in disguise; the perception/action split that gives Task-Define its architectural distinction would be violated.

The content-presence form (the chosen one) specifies what the answer must CONTAIN without specifying what syntax it must take. A free-text answer with a recognizable verdict and (when needed) a kind specifier passes; a structured answer with the same content passes; either form may fail by missing content. The LLM running the discipline's self-check pattern-matches against content presence using its own judgment — consistent with §4.1's commitment that LAYER 1 failure modes are *"detectable via output observation"*, not via structured parsing.

### Why uncertain is a valid verdict, not a mode 6 failure

This was a closer call than the placement and form decisions. The case for treating uncertain as a mode 6 failure: "uncertain" arguably is not the verdict the runner needs to make a clean dispatch decision; if Task-Define produces uncertain, the runner is left without a definite signal.

The case for treating uncertain as a valid verdict (the chosen position): the runtime spec's §4.4 commits an asymmetric-failure principle — under uncertainty, the runner errs toward invoking Exploration (since false-positive Exploration is bounded-cost; false-negative-missed-external-context is information-loss-in-the-dark). Under this principle, uncertain is a meaningful signal to the runner ("I cannot determine from the statement alone — please apply the lean-toward-Exploration default"). Forcing Task-Define to always produce yes-or-no would mean the discipline decides for the runner in cases where the input genuinely doesn't support a clean decision; that would blur the perception/action split. The runner-side handling of uncertain is the correct place for the decision logic.

Treating uncertain as valid required only naming it explicitly in the shape commitment as a third state alongside yes/no. The predicate then fires only on absence of any of the three (or on the kind-absence-when-yes specific case), not on the presence of uncertain.

### Why binary detection, not graded confidence

A graded mode 6 detection would carry per-mode confidence (e.g., HIGH for verdict-absent; MED for kind-absent-when-yes; LOW for borderline cases like an unclear verdict). This could aid downstream consumers' interpretation of the FLAG verdict.

It was rejected for two reasons. The first is that §4.7's general confidence rubric is itself under-specified — committing per-mode confidence presupposes a rubric structure that does not yet exist. The dependency would be inverted: per-mode confidence would shape the general rubric rather than being a derived case of it. The second reason is the Bootstrap calibration state. Per-mode confidence is empirically-grounded refinement; Bootstrap state lacks the empirical data. Committing graded detection at Bootstrap presupposes evidence not yet available.

Binary detection is the structurally correct Bootstrap choice. If at Mature calibration empirical evidence suggests graded detection would help, the §4.2 mode 6 row can be revised then; the binary commitment does not block future refinement.

### Why the §2.4 amendment APPENDS, not REPLACES

A simpler design would have replaced the existing §2.4 third paragraph entirely — overwriting the qualitative "necessary information content" commitment with the operational shape commitment. This is structurally cleaner: one statement of the constraint, no two-tier wording.

It was rejected because it loses the qualitative anchor. The "necessary information content" framing was introduced by the process-layer finding at `devdocs/inquiries/2026-06-04_07-48__task_define_process_layer/finding.md` (the immediately upstream commitment); preserving it as the higher-level layer and adding the operational shape as the implementation layer mirrors the meaning → process → structural ordering this whole project respects. Replacing rather than appending would flatten the two layers into one, losing the higher-level commitment's separability for future readers.

### Why the §4.2 amendment REPLACES, not APPENDS

The reverse decision applies to §4.2. A candidate design would have kept the existing failure-description text in the recognition column AND appended the operational predicate, so the column carries both a description and a pattern. This would seem to preserve the description's high-level summary while adding operationality.

It was rejected on the sister-discipline pattern. The Structural Surfacing discipline spec's §4.2 modes 6, 8, and 9 recognition columns each carry a concrete failure pattern (not a description-plus-pattern hybrid). The predicate IS the pattern; carrying both is redundancy. The runtime spec's lightweight criterion (iv) — *"no sub-machinery beyond a paragraph"* — applies to operation paragraphs not failure-mode rows, but the spirit of the lightweight stance favors compact rows over redundant ones.

The chosen design — REPLACE the description with the predicate — matches the sister-discipline pattern; a reader of the predicate also understands what the failure is, so the description's information content is not lost.

## Open Questions

### Monitoring

- **Observable after Task-Define has been invoked on ~10-20 real task statements** (Early Operation calibration per the runtime spec's §4.6 calibration trajectory). Does mode 6's predicate fire on real cases of dispatch-info-missing? Does it produce false positives on well-formed MQ2 answers? Does "uncertain" appear in real answers, and does the LLM running the discipline correctly recognize natural-language equivalents (e.g., "I'm not sure if this needs external context"; "the task is self-contained")? The empirical evidence will indicate whether the natural-language-equivalents tolerance is correctly calibrated.

- **Observable after at least two runners invoke Task-Define on the same task statement.** Do the runners produce different dispatch verdicts on MQ2 = uncertain answers? If yes, the cross-runner-coordination concern from the meaning-layer finding's Open Questions section is empirically triggered (Refinement Triggers there name "2+ runners disagreeing about whether Exploration should fire for the same MQ2 answer" as the threshold).

### Refinement Triggers

- **If mode 6's predicate fires on ≥ 30% of MQ2 answers across the first 20 Task-Define invocations**, the natural-language-equivalents tolerance is likely too tight (the LLM is failing to recognize valid verdicts); revisit the predicate's wording. Trigger: observable ≥ 30% firing rate.

- **If mode 6's predicate fires on 0% of MQ2 answers across the first 20 invocations**, the tolerance may be too loose (the predicate is not catching real cases); investigate whether real dispatch-info-missing cases are slipping past unrecognized. Trigger: observable 0% firing rate.

- **If users or runners begin requesting per-mode confidence on FLAG verdicts** (rather than accepting the §4.7 general rubric's binary-feeding-graded model), revisit the binary-detection commitment for mode 6. Trigger: 2+ explicit requests for graded mode 6 detection.

### Research Frontiers

- **Whether the *shape commitment in capability section + predicate in failure-mode row references it* pattern generalizes beyond LAYER 1 modes** to LAYER 2 identity-eroding modes. LAYER 2 modes (Verification-drift, Substrate-reach, Cross-item-interpretation-drift, Fidelity-verdict-drift) are detected by behavioral audit over time, not by per-invocation self-check. The detection pattern is necessarily different; whether a capability-section-anchored shape commitment helps anchor LAYER 2 detection is an open question. No known path; emerges if the pattern's reusability for LAYER 1 modes proves effective.

- **Whether the under-specified §4.7 general confidence rubric should be operationalized via per-mode confidence (the rejected graded mode 6 case)** or via a separate rubric-level inquiry. The current refinement defers; the longer-term direction depends on whether the §4.7 rubric becomes a blocker for downstream consumers.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

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

</details>
