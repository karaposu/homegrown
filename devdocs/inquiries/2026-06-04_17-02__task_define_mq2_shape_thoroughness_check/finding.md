---
status: active
model: claude-opus-4-7[1m]
effort: unknown
---

# Finding: Task-Define MQ2 Answer Shape — Thoroughness Check Verifies Mode 6 Coverage

## Question

From `_branch.md`:

**Question.** Does the prior LAYER 1 mode 6 deep-dive inquiry's §2.4 amendment (committed at `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md`) fully address the three concerns refinement #4 named — (a) Task-Define authoring MQ2's answer doesn't know what "sufficient" looks like; (b) a runner attempting extraction doesn't know what to look for; (c) LAYER 1 mode 6's detection can't fire reliably — or does a residual gap remain that requires supplementary spec content beyond what mode 6 already commits?

Background context: the Task-Define runtime spec at `cognitive_harness/task-define/references/task-define.md` has §2.4 (the dispatch-substrate section that commits how MQ2's per-item answers serve as the cross-discipline signal to the project's Exploration discipline). The current §2.4 wording carries a qualitative authoring constraint — *"MQ2's answer MUST contain enough information for a runner to make the external-context-need determination"* — that left three downstream actors operationally under-served. The mode 6 deep-dive inquiry produced an §2.4 amendment committing a two-part content-presence rule (verdict ∈ {yes, no, uncertain} + kind specifier when verdict = yes; content-not-syntax; per-item; uncertain runner-actionable per asymmetric-failure). This inquiry verifies whether that amendment fully closes refinement #4's three concerns.

**Goal.** Honest verification verdict the user can act on. Two possible outcomes: (1) COMPLETE COVERAGE — mode 6's amendment fully addresses refinement #4; no new amendment needed; just apply mode 6's MUST. (2) PARTIAL COVERAGE — mode 6 addresses substance but a residual gap remains; specify supplementary refinement text. The verdict must follow textual evidence (sentence-level trace from each concern to specific mode 6 amendment sentences); the inquiry must avoid both rubber-stamping (motivated COMPLETE without evidence) and nitpicking (motivated PARTIAL claiming a substantive gap that doesn't exist).

**What would fail.** A verdict that silently re-produces mode 6's amendment as new content (redundancy without acknowledgment); a verdict that invents a residual gap mode 6 already addresses (false PARTIAL); a verdict that dismisses refinement #4 as "already done" without verification (under-checking); a verdict over-stating the residual gap to justify producing supplementary content (motivated reasoning).

## Finding Summary

- **Verdict: COMPLETE COVERAGE on substance.** Refinement #4's three named concerns are addressed by mode 6's §2.4 amendment via the shape-commitment mechanism. The user's proposed refinement form (an explicit MQ2 answer shape commitment of the form *"(a) self-contained vs requires-external-context binary judgment, and (b) when requires-external-context, a one-sentence description of what kind of external context"*) IS what mode 6 delivered, with one strict refinement: mode 6 extended the user's binary to three states {yes, no, uncertain}. No new substantive amendment is required from this inquiry.

- **Concern A (Task-Define authoring sufficiency) is addressed** by mode 6 amendment sentences 1 and 2. Sentence 1 commits the shape: *"MQ2's answer carries two content elements: (a) a context-need verdict — one of {yes, no, uncertain}...; (b) when the verdict is yes, a kind specifier — a one-sentence description of what kind of external context is needed."* Sentence 2 tolerates free-text: *"The shape is content, not syntax: a free-text answer carrying both elements satisfies the commitment as fully as a structured answer would."* An LLM authoring MQ2's answer knows what content to produce and that format flexibility is allowed.

- **Concern B (runner extraction target) is addressed** by mode 6 amendment sentences 1, 2, and 4. Sentence 1 names what the runner looks for (verdict + kind). Sentence 2 tells the runner to judge content, not parse syntax. Sentence 4 commits *"The 'uncertain' verdict is a valid runner-actionable state — the runner errs toward invoking Exploration on uncertain answers per the asymmetric-failure principle at §4.4."* The runner knows what to extract and how to handle each verdict state.

- **Concern C (LAYER 1 mode 6 detection target) is addressed** by mode 6 amendment sentence 1 (in §2.4) plus mode 6's §4.2 mode 6 recognition column replacement, which reads *"Per-item check at end-of-invocation: any item's MQ2 answer is missing the content required by §2.4 — i.e., the answer does not state a context-need verdict (one of {yes, no, uncertain}), OR — when the verdict is yes — the answer does not state a kind specifier..."* The detection has an operational predicate to pattern-match against.

- **The user's "without an example of what satisfies vs violates the constraint" mention is a STYLISTIC supplement concern, not a SUBSTANTIVE residual gap.** Mode 6's amendment is operationally complete without worked examples — sentence 1 explicitly acknowledges *"natural-language equivalents that an LLM judging the answer would recognize as one of these three states,"* accepting LLM judgment as the substrate. Inconsistent application at Bootstrap state is an empirical Early-Operation concern, not a Bootstrap-state design gap. Examples would aid first-application illustration but aren't required to enable application.

- **OPTIONAL supplement (U1): a worked-examples sub-block at §2.4** could be added immediately after mode 6's amendment paragraph (before §2.4's final paragraph about runner-side-extraction-out-of-scope), parallel to the rule (b) inquiry's §2.3 sub-block. U1 would contain one qualifying MQ2 answer + one non-qualifying MQ2 answer on the same task statement, plus a brief uncertain example. **The user decides whether to adopt U1 or skip it (U5 = conservative default).** Mode 6's MUST closes refinement #4 either way.

- **The verification methodology is reusable.** When a prior inquiry covers a present concern via a different mechanism than the user originally proposed (here: mode 6's shape commitment vs the user's proposed worked examples), the structural pattern for verification is — trace each concern to specific sentences of the prior commitment; characterize residual gaps as substantive vs stylistic; offer optional stylistic supplements explicitly framed as user-decision. This pattern applies whenever a future refinement is suspected of overlap with prior work.

## Finding

Small piece of surrounding context before the conclusions: refinement #4 was one of the items in an earlier self-critique of the Task-Define runtime spec (`cognitive_harness/task-define/references/task-define.md`). The user has been running thoroughness deep-dives on each critique item; refinement #4 is the fourth. Before running this inquiry, the user was offered a choice — skip it as redundant with the prior mode 6 deep-dive, run an adjacent worked-examples inquiry, or run the thoroughness check anyway. The user picked "run /MVLw on #4 anyway" as a thoroughness check on mode 6's coverage. This finding is that thoroughness check's verdict.

The verification methodology is sentence-level textual trace from each named concern to specific mode 6 amendment sentences. Per the LOOP_DIAGNOSE protocol's pattern (project-rooted evidence-based hypothesis attribution), claims are grounded in observable text rather than in design re-evaluation. Mode 6's amendment is treated as a committed reference; this inquiry's scope is verification, not re-evaluation.

### 1. The verdict — COMPLETE COVERAGE on the three named concerns

Refinement #4 named three concerns:

(a) **Task-Define authoring MQ2's answer doesn't know what "sufficient" looks like.** Mode 6's amendment sentence 1 commits the two-part shape (verdict + conditional kind). Sentence 2 commits content-not-syntax tolerance. Together, sentences 1 and 2 give the LLM authoring MQ2's answer (i) a target (verdict + kind) and (ii) flexibility about format. An LLM applying the amendment knows what content to produce.

(b) **A runner attempting extraction doesn't know what to look for.** Mode 6's amendment sentences 1, 2, and 4 each contribute. Sentence 1 names the targets. Sentence 2 commits free-text tolerance (runner judges content, not parses fields). Sentence 4 commits the uncertain-verdict handling (runner errs toward invoking Exploration per the asymmetric-failure principle in the runtime spec's §4.4). A runner extracting the dispatch verdict has guidance for all three verdict states.

(c) **LAYER 1 mode 6's detection can't fire reliably.** Mode 6's amendment sentence 1 (in §2.4) plus the mode 6 inquiry's §4.2 recognition column replacement together commit the operational predicate. The §4.2 predicate explicitly references §2.4: *"any item's MQ2 answer is missing the content required by §2.4 — i.e., the answer does not state a context-need verdict (one of {yes, no, uncertain}), OR — when the verdict is yes — the answer does not state a kind specifier..."* The detection has a concrete pattern to match against.

All three concerns trace to specific sentences. The verdict on the named concerns is COMPLETE COVERAGE.

### 2. The user's proposed refinement form is what mode 6 delivered

Refinement #4 also proposed a specific form for the supplementary refinement:

> *"an explicit MQ2 answer shape commitment in §2.4 (or §2.3) — e.g., 'MQ2's answer carries (a) a self-contained vs requires-external-context binary judgment, and (b) when requires-external-context, a one-sentence description of what kind of external context.'"*

This IS the shape commitment mode 6 delivered. The only difference is that mode 6 extended the binary {yes, no} (or equivalently {self-contained, requires-external-context}) to a three-state set {yes, no, uncertain}, treating "uncertain" as a valid runner-actionable verdict per the asymmetric-failure principle. Mode 6's three-state form is a STRICT REFINEMENT of the user's proposed binary form — it covers everything the binary does plus the genuinely-ambiguous case.

So the user's proposed refinement is not a separate amendment requiring new design; it is what mode 6's inquiry already produced.

### 3. The "without examples" mention — stylistic, not substantive

Refinement #4's framing in the user's input was: *"Without an example of what satisfies vs violates the constraint: [three downstream consequences]."* This structures the example-gap as the CAUSE of the three concerns.

Mode 6 chose a different cause-eliminator. Rather than adding examples, it added a shape commitment — the same three concerns are addressed without examples because the shape commitment supplies the operational content directly. The user's mechanism (examples) and mode 6's mechanism (shape commitment) are both valid cause-eliminators.

This means the user's example-gap mention is addressed substantively (the three concerns are no longer downstream-orphaned) but not illustratively (the spec doesn't contain a sample MQ2 answer showing what the shape looks like in practice).

**This residual concern is stylistic, not substantive.** Mode 6's amendment is operationally complete on its own — sentence 1 explicitly acknowledges *"natural-language equivalents that an LLM judging the answer would recognize as one of these three states."* The LLM's judgment is the substrate; the shape commitment specifies the content; examples are not required to operationalize. Examples would be illustration aiding first-application; they're not load-bearing structural commitments.

### 4. The optional supplement (U1)

Should worked examples be added to §2.4 as a supplement?

**Two equally-valid options:**

**U1 (adopt supplement).** Add a worked-examples sub-block to §2.4, placed immediately after mode 6's amendment paragraph (the new third paragraph mode 6's MUST adds to §2.4) and before §2.4's final paragraph about runner-side-extraction-out-of-scope. The sub-block contains:

> *Worked examples illustrating the MQ2 answer shape:*
>
> - *Qualifying.* Item: "Refactor the authentication module." MQ2 answer: "Yes, this task requires external context — specifically, the team's recent architecture decisions and conventions for the authentication module's surrounding services." The answer carries a verdict (yes) AND a kind specifier (the team's recent architecture decisions and conventions). Both content elements per §2.4 present.
>
> - *Non-qualifying.* Item: "Refactor the authentication module." MQ2 answer: "Yes." The answer carries a verdict (yes) but the kind specifier is absent. LAYER 1 mode 6 fires.
>
> *Uncertain example.* Item: "Refactor the authentication module." MQ2 answer: "I cannot determine from the statement alone whether external context is needed." The answer carries an "uncertain" verdict; per §2.4, this is a valid runner-actionable state — the runner errs toward invoking Exploration per the asymmetric-failure principle at §4.4.

Pattern: same-item-shape contrast (both qualifying and non-qualifying on "Refactor the authentication module" — the same task statement used in the rule (b) inquiry's §2.3 sub-block, for cross-inquiry consistency). Only the MQ2 answer varies between qualifying and non-qualifying.

**U5 (skip supplement).** Apply only mode 6's MUST and rule (b) inquiry's MUST. No additional spec content from this inquiry.

**Conservative default by inaction = U5.** If the user makes no explicit choice, U5 applies (apply mode 6's MUST + rule (b) inquiry's MUST; no new amendment from this inquiry).

**Reasoning for the choice:**

- U1 aids first-application illustration. An LLM running Task-Define for the first time has concrete sample answers to pattern-match against, beyond the abstract shape commitment. Useful if first-application reliability is a concern.
- U5 keeps §2.4 compact. Mode 6 already grew §2.4 with the third paragraph; U5 avoids further growth. Useful if minimum spec growth is a concern.
- The structural pattern (shape commitment + worked-examples sub-block) is established in §2.3 by the rule (b) inquiry; adopting U1 makes §2.4 structurally parallel. Useful for cross-section consistency.
- The rule (b) inquiry's test was abstract (variant-set divergence — a relation to mentally simulate). MQ2's shape is concrete (structured content: verdict + kind). The illustration threshold differs; U5 is honest because the shape commitment doesn't need examples to apply, even though examples wouldn't hurt.

**Honest-assessment note.** Offering U1 carries a motivated-reasoning risk — the worked-examples pattern is established by the rule (b) inquiry, and adding U1 here would feel structurally satisfying. This finding explicitly frames U1 as OPTIONAL precisely to avoid that risk. The substantive verdict (COMPLETE COVERAGE) does not depend on U1's adoption. User makes the final call based on their preference for first-application illustration vs spec compactness.

### 5. Composition with the rule (b) inquiry's §2.3 sub-block

If both the rule (b) inquiry's §2.3 sub-block and this inquiry's U1 are applied, the runtime spec has two worked-examples sub-blocks: one at §2.3 (illustrating rule (b)'s operational test on variant-set divergence) and one at §2.4 (illustrating MQ2's content-presence shape). The two sub-blocks share the same task statement ("Refactor the authentication module") for cross-inquiry consistency.

This composition is structurally consistent — different sections, different commitments illustrated, one sub-block per section. Not over-procedurization; the runtime spec's §2.3 and §2.4 already are multi-paragraph sections by nature.

If U5 is chosen, only the §2.3 sub-block exists (from the rule (b) inquiry's MUST); no §2.4 sub-block from this inquiry.

### 6. The verification methodology is reusable

This inquiry's structural form — sentence-level textual trace + substance-vs-stylistic distinction + optional stylistic supplement explicitly framed as user-decision — is reusable for future thoroughness checks. Whenever a new refinement is suspected of overlap with a prior inquiry's work, this method produces an honest verdict without invented residual content.

The methodology is grounded in two project precedents: the LOOP_DIAGNOSE protocol's evidence-based hypothesis attribution (specific sentences as evidence), and the mode 6 inquiry's two-piece structural-refinement pattern (shape commitment + downstream detector). Combined, they give thoroughness checks a clear structural form.

Pattern propagation to other thoroughness needs (verifying other critique items against prior inquiries' work) is out of scope for this finding but flagged as future work — applies whenever a refinement candidate looks structurally overlapping with prior commitments.

## Inherited Commitments Re-test

This finding consumes prior inquiry outputs as its primary verification target. Voluntary re-test summary:

| Source | Commitment | Re-test status | Evidence / Reason |
|---|---|---|---|
| Mode 6 inquiry §2.4 amendment sentence 1 | "MQ2's answer carries two content elements: (a) verdict ∈ {yes, no, uncertain}; (b) kind specifier when verdict = yes" | RE-TESTED | Direct textual trace from refinement #4's Concern A, Concern B, and Concern C; each concern maps to this sentence as primary or partial coverage |
| Mode 6 inquiry §2.4 amendment sentence 2 | "Content not syntax" (free-text tolerance) | RE-TESTED | Trace to Concern A (authoring flexibility) and Concern B (runner extraction without parsing) |
| Mode 6 inquiry §2.4 amendment sentence 4 | "Uncertain is a valid runner-actionable verdict per §4.4 asymmetric-failure" | RE-TESTED | Trace to Concern B (runner handles all three verdict states) |
| Mode 6 inquiry §4.2 mode 6 recognition column replacement | "Per-item check at end-of-invocation: missing content required by §2.4" | RE-TESTED | Trace to Concern C (detection target) |
| Rule (b) inquiry §2.3 worked-examples sub-block pattern | Same-item-contrast structure + sub-block placement | INHERITED-WITHOUT-RE-TEST | The pattern is precedent for U1's optional design; this inquiry doesn't re-litigate rule (b)'s pattern, only references it for cross-inquiry consistency |
| 15-39 §4 bounded-extensibility rule | The meaning-layer commitment for MQ2's role | INHERITED-WITHOUT-RE-TEST (with reason) | Out of scope per Layer Commitment; meaning layer is settled |
| 15-39 §5 dispatch substrate as MQ-answers | The meaning-layer commitment for the dispatch boundary | INHERITED-WITHOUT-RE-TEST (with reason) | Out of scope per Layer Commitment; meaning layer is settled |
| §4.4 asymmetric-failure principle | The runtime spec commitment uncertain-as-valid relies on | INHERITED-WITHOUT-RE-TEST (with reason) | Long-standing project commitment; not re-litigated |

4 of 8 commitments RE-TESTED via textual trace; 4 INHERITED-WITHOUT-RE-TEST with explicit reasons (3 out-of-scope per Layer Commitment; 1 referenced as precedent without re-litigation).

## Next Actions

### MUST

(No new MUST from this inquiry. The MUST that needs application remains the mode 6 inquiry's pending MUST.)

- **What:** Apply the mode 6 inquiry's MUST — append the §2.4 amendment paragraph + replace the §4.2 mode 6 recognition column text — to `cognitive_harness/task-define/references/task-define.md`. (This MUST was committed in the mode 6 inquiry's finding and remains pending.)
  - **Who:** spec editor.
  - **Gate:** condition-bound.
  - **Why:** applying the mode 6 MUST closes refinement #4 alongside the gap mode 6 originally targeted. The two amendments serve both concerns simultaneously.

### COULD

- **What:** Adopt U1 — add a worked-examples sub-block to §2.4 of `cognitive_harness/task-define/references/task-define.md`, immediately after the mode 6 amendment paragraph and before §2.4's final paragraph. The exact text is in finding section 4 above. The sub-block contains qualifying + non-qualifying + uncertain examples on the same task statement ("Refactor the authentication module") for cross-inquiry consistency with the rule (b) inquiry's §2.3 sub-block.
  - **Who:** spec editor at compile time.
  - **Gate:** condition-bound — only if the user explicitly chooses to adopt U1 over the conservative default U5.
  - **Why:** aids first-application illustration; provides structural parallel to the rule (b) inquiry's §2.3 sub-block; useful when first-application reliability matters more than minimum spec growth.
  - **Depends-on:** mode 6 inquiry's MUST (the §2.4 amendment paragraph). OVERRIDE: U1 is structurally placed AFTER mode 6's amendment paragraph; the sub-block's existence depends on the amendment being applied first, but U1 itself can be authored in advance and applied together with mode 6's amendment.

- **What:** Skip U1 (the U5 default). Apply only mode 6's MUST + the rule (b) inquiry's MUST; this inquiry contributes no spec change beyond the verification verdict.
  - **Who:** default action by inaction.
  - **Gate:** condition-bound — default unless U1 is explicitly chosen.
  - **Why:** keeps §2.4 compact; honest assessment confirms mode 6's substantive coverage; U5 is structurally consistent and equally valid.

### DEFERRED

- **What:** Apply the verification methodology (sentence-level textual trace + substance-vs-stylistic distinction + optional stylistic supplement framing) to remaining critique items if they're suspected of overlap with prior inquiries' work. Specifically, future refinement items (#5 onwards in the original critique list) could benefit from this thoroughness-check pattern when their substance is potentially addressed by prior commitments.
  - **Gate:** observable — whenever a new refinement candidate looks structurally overlapping with prior commitments.
  - **Why (if revived):** prevents redundant inquiry pipelines; produces honest verdicts; offers optional supplements where pattern-consistency motivates them.

## Reasoning

The verdict was reached by sentence-level textual trace. The reasoning structure: what was tested, what was found, and what was deliberately not done.

### Why COMPLETE COVERAGE, not PARTIAL

Sensemaking's Phase 3 A1 ambiguity-collapse tested the PARTIAL counter explicitly: "the user's example-gap mention is a real residual concern that mode 6 doesn't address." The counter was rejected because the three NAMED concerns (authoring; extraction; detection) are addressed substantively by mode 6's shape commitment via a different mechanism (shape commitment) than the user proposed (worked examples) — both mechanisms eliminate the same cause (the example-gap) and produce the same downstream effect (the three concerns no longer downstream-orphaned). The user's "without examples" was a cause identification, not a fourth concern. Mode 6's cause-elimination differs in mechanism but matches in effect.

Substance is COMPLETE. The mechanism differs from the user's original proposal; the outcome is the same.

### Why STYLISTIC residual, not SUBSTANTIVE residual

Mode 6's amendment sentence 1 explicitly acknowledges LLM judgment: *"natural-language equivalents that an LLM judging the answer would recognize as one of these three states."* The LLM's judgment is the substrate; the shape commitment specifies the content. Without worked examples, the LLM can apply the commitment via its judgment substrate — the commitment is operationally complete.

Worked examples would aid first-application illustration (give the LLM concrete sample answers to pattern-match against) but aren't required to enable application. Inconsistent application at Bootstrap state is an Early-Operation empirical concern, not a Bootstrap-state design gap.

The residual is stylistic. The commitment is structural.

### Why U1 is offered but framed as optional

If U1 were committed (made part of this inquiry's MUST), the finding would silently re-introduce content that mode 6 already addresses via different mechanism — a redundancy without acknowledgment, or worse, motivated reasoning toward producing satisfying content.

If U1 were not offered at all, the user's "without examples" mention would be dismissed without addressing the stylistic concern — under-honoring the user's framing.

U1 framed as optional honors both: acknowledges the stylistic concern, offers a structurally-grounded supplement (parallel to the rule (b) inquiry's pattern), explicitly frames it as user-decision so motivated reasoning toward adoption is countered. The conservative default (U5) is equally valid; the user picks based on their preference for illustration vs compactness.

### Why mode 6's three-state extension is a strict refinement of the user's binary proposal

The user proposed: *"(a) a self-contained vs requires-external-context binary judgment."* Mode 6 commits: *"(a) a context-need verdict — one of {yes, no, uncertain}."*

Mapping: user's "self-contained" ≈ mode 6's "no"; user's "requires-external-context" ≈ mode 6's "yes." Mode 6 adds "uncertain" as a third state for cases where the LLM cannot determine from the task statement alone whether external context is needed.

The asymmetric-failure principle at §4.4 of the runtime spec says: under uncertainty, lean toward invoking Exploration (false-positive Exploration is bounded-cost; false-negative-missed-context is information-loss-in-the-dark). The "uncertain" verdict is the runtime expression of this principle — when the LLM is genuinely uncertain, "uncertain" communicates that to the runner, which applies the asymmetric-failure default (invoke Exploration).

A binary form forces the LLM to commit to yes or no even when the input is ambiguous; mode 6's three-state form lets the LLM defer the determination to the runner-side asymmetric-failure handler. The three-state form covers more cases than the binary form without losing any of the binary form's expressiveness — strict refinement.

### Why the verification methodology is reusable

The structural form of this finding — sentence-level trace + substance-vs-stylistic distinction + optional supplement framing — applies whenever a new refinement is suspected of overlap with prior inquiry work. Each thoroughness check produces:

1. A honest verdict (COMPLETE on substance vs PARTIAL with named gap).
2. A trace grounding the verdict in observable prior text.
3. An optional supplement (if any stylistic enhancement is available) explicitly framed as user-decision.

This is a project-rooted methodology — LOOP_DIAGNOSE protocol's evidence-based attribution + mode 6 inquiry's structural-refinement pattern. The methodology's reusability is the inquiry's emergent value beyond closing refinement #4.

## Open Questions

### Monitoring

- **Observable after mode 6's MUST is actually applied** to `cognitive_harness/task-define/references/task-define.md`. Does the applied §2.4 amendment text match the mode 6 inquiry's commitment? (Verification verdicts on COMMITTED content depend on the commitment being applied accurately.)

- **Observable when Task-Define is invoked on real task statements** (after ~10-20 invocations; Early Operation calibration). Does the shape commitment produce consistent MQ2 answers in practice? If LLMs running the discipline produce inconsistent verdicts (e.g., recognizing "needs domain context" as "yes" but "needs domain awareness" as "uncertain"), the natural-language-equivalents tolerance may need tightening — possibly via worked examples (U1 adoption) or via tighter shape-commitment wording.

### Refinement Triggers

- **If empirical observation reveals high variance in MQ2 verdict recognition across LLM-generated answers** (e.g., the LLM running mode 6's detection inconsistently identifies which answers carry which verdict), revisit the U5 default and reconsider U1 adoption. Trigger: 3+ observed cases where mode 6's detection produced false positives or false negatives that worked examples would have prevented.

- **If a future critique item is identified as potentially overlapping with a prior inquiry's work**, apply this finding's verification methodology — sentence-level textual trace + substance-vs-stylistic distinction + optional supplement framing — to verify before running a full /MVLw pipeline. Trigger: observable when a refinement candidate's scope looks structurally adjacent to existing committed content.

### Research Frontiers

- **Whether the verification methodology (textual trace + substance-vs-stylistic) generalizes to verification across DIFFERENT projects' inquiries, not just within this project.** The methodology assumes shared sentence-level addressability of prior commitments; cross-project verification would require additional structure (e.g., shared inquiry-folder conventions). Out of scope for this finding; flagged as future work.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
The dispatch substrate's "necessary information content" is abstract.
  §2.4 says MQ2's answer "MUST contain enough information for a runner to make the external-context-need determination." This
  is structurally correct (it's the meaning-layer commitment) but operationally insufficient. Without an example of what
  satisfies vs violates the constraint:
  - Task-Define authoring MQ2's answer doesn't know what "sufficient" looks like.
  - A runner attempting extraction doesn't know what to look for.
  - LAYER 1 mode 6's detection can't fire reliably.
  The §2.3 MQ2 template ("Is this task self-contained, or does it require external context to make sense and be done right? If
  external, what kind?") implies the answer should carry yes/no + kind, but this is conjecture from the template, not a
  committed contract. Refinement: an explicit MQ2 answer shape commitment in §2.4 (or §2.3) — e.g., "MQ2's answer carries (a) a
  self-contained vs requires-external-context binary judgment, and (b) when requires-external-context, a one-sentence
  description of what kind of external context." now lets dive deep into this one
```

</details>
