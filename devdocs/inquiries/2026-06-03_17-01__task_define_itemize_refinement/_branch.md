# Branch: Task-Define — Itemize Operation Refinement (Default-Keep-Together vs Default-Split)

## Question

- **Subject** — the **Itemize** operation within Task-Define (settled at the prior finding `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` §2 with the description "split the task statement into distinct atomic items, where each item is one coherent ask").
- **Action** — REFINE Itemize at the meaning layer. Specifically: (a) TEST whether the current "split into distinct atomic items" wording is harmful (causes premature itemization that separates the coherence in a single-task statement that happens to have multiple specifications, examples, or illustrative clauses); (b) if harmful, REFINE Itemize's verb-meaning to bias toward keep-together with split only on clearly-distinct-tasks detection.
- **Level** — discipline-component (one of Task-Define's 5 operations).
- **Observation targets** (each preserved separately):
  1. **Empirical test against the source input.** Apply the current Itemize description ("split into distinct atomic items") to the user's verbatim Source Input of the prior finding (the 3 iterations of the user's framing for redefining the IE arc). Does the application cause harm — i.e., would Itemize produce N items where the statement is structurally ONE task with multiple specifications? Test honestly.
  2. **The user's reframe hypothesis: "Itemize is about detecting if completely different tasks are given in one query or not."** Is this reframe more accurate than the current description? What's the strongest counter-argument, and does the user's reframe survive it?
  3. **Asymmetric-failure stance for Itemize.** The cost of premature-split (separating things that belong together — destroying meaning coherence) is structurally greater than the cost of late-split (a multi-task query treated as one — Meta-question and/or the user can catch and correct). The discipline's lean-toward-include principle (inherited from surfacing's §4.4 asymmetric-failure) applies at Itemize too: bias toward keep-together.
  4. **Refined verb-meaning.** If refined, what is Itemize's revised one-sentence verb-meaning at meaning layer? What is the revised one-paragraph mechanism description?
  5. **Distinguishing specifications from tasks.** A SINGLE task may carry multiple specifications (properties the task must satisfy), examples (illustrations of what the task means), clauses (sub-aspects of the same task). These are NOT separate tasks. What makes two things "completely different tasks" vs "specifications of the same task"? The meaning-layer commitment that bounds Itemize's split-fire condition.
  6. **Ripple effects on the rest of Task-Define.** Does refining Itemize affect Meta-question (per-item), Deconstruct (per-item), MultiScope (per-item), or Rephrase (per-item)? Does it affect the perception/action split (Itemize perceives the multi-task structure; the runner acts on it)? Does it affect the lightweight stance or NOT-list?
  7. **The 6th lightweight enforcement criterion's application to Itemize.** The criterion "every output element must be load-bearing for at least one downstream actor's decision" — when Itemize produces 1 item (the default), is that single-item output still load-bearing, or is Itemize a no-op in single-task cases? (Meaning-layer question: what does Itemize CONTRIBUTE in the single-task case?)
- **Deliverable shape** — a refined Itemize meaning-layer definition + an explicit honest test against the prior finding's Source Input + the verdict on the user's reframe hypothesis + the explicit specifications-vs-tasks distinction + any ripple-effects on adjacent operations.

**Question (one-sentence coverage):** Tested against the prior finding's Source Input (3 iterations of the user's framing for redefining the IE arc as Task-Define), does the current Itemize description "split into distinct atomic items" cause premature itemization that separates coherence in a structurally-one task with many specifications, and if YES, what is Itemize's refined meaning-layer definition (with bias toward keep-together via "detect completely different tasks" as the split-fire condition, distinguishing specifications-of-one-task from completely-different-tasks, honoring the asymmetric-failure principle, with any necessary ripple-effects on the rest of Task-Define noted)?

## Goal

- **Criterion** — honest empirical test of the current Itemize description against the cited source input (not rubber-stamping the user's hypothesis; not over-claiming on the basis of a single test); refined definition if and only if harm is demonstrated; preserve the rest of Task-Define's design (perception/action split; lightweight stance; intrinsic NOT-list; the other 4 operations) unless ripple-effects genuinely require touching them; the refined Itemize must remain self-contained per memory `feedback_disciplines_self_contained`.
- **Use case** — the next inquiry (the structural-layer authoring of Task-Define's spec) consumes a refined Itemize meaning-layer definition rather than the prior finding's potentially-harmful "split into atomic items" wording.
- **Desired outcome** — Itemize's verb-meaning refined to a default-keep-together stance with explicit split-fire conditions, OR Itemize's verb-meaning confirmed as-is if the empirical test reveals no harm.
- **What would fail** — (i) agreeing with the user's hypothesis without testing (rubber-stamping); (ii) over-claiming (treating EVERY multi-spec statement as single-item even when truly distinct tasks ARE present); (iii) breaking the rest of Task-Define's design with unjustified ripple-effects; (iv) producing a refined Itemize wording that is itself ambiguous (e.g., "completely different tasks" without bounding what "completely different" means structurally); (v) re-opening Task-Define's meaning layer at scopes other than Itemize (out of scope — only this operation is being refined).

## Source Input

```text
in 
devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md
u said 

Five operations running in a 4-stage intra-discipline flow:

Stage 1 (statement-level): Itemize — split the task statement into atomic items.


but we should be extremely careful about itimize, because for the most part even task can have different examples definitions they are contrubiting to same meaning layer and it is part of one task. 

if we do premature itemization, we will seperate the coherance in the original task query text and harm the meaning..

itemize should be really careful with this..


lets refine this and check if 

"split the statement into distinct atomic items " is actaully harmful or not.  you can use devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md Source Input section to test this ,


i think itemize is about 

detecting if completely differnet tasks are given in one query or not 

but maybe i am wrong
```

## Scope Check

**Question covers goal: YES.** The 7 observation targets enumerate: empirical-test, hypothesis-test, asymmetric-failure stance, refined verb-meaning, specifications-vs-tasks distinction, ripple-effects, and criterion-(vi) application. The Goal's "what would fail" fences off (a) rubber-stamping, (b) over-claiming, (c) unjustified ripple-effects, (d) ambiguous refined wording, (e) out-of-scope re-opening of the rest of Task-Define.

**Specific-vs-pattern check:** the user named a specific test (against the prior finding's Source Input). The test is specific; the verdict it produces is about the GENERAL Itemize description. Apply the specific test, then generalize the verdict to the meaning-layer definition.

**Transcription-audit fail-safe:** clause-joiners in the Source Input — "even task can have different examples definitions they are contrubiting to same meaning layer **and** it is part of one task" (one clause; specifications-and-tasks are not separate); "detecting if completely differnet tasks are given in one query **or not**" (binary detection — both branches preserved). Each clause's semantic content appears in observation targets 1-2 + 5. **Transcription complete.**

## Layer Commitment

**Primary layer: MEANING.** The user is questioning what Itemize IS as a cognitive operation — challenging the current verb-meaning ("split into distinct atomic items") in favor of a different verb-meaning ("detect if completely different tasks are given in one query or not"). Structural and process choices are downstream of settling Itemize's meaning.

Out of scope for this run:
- **Structural** — Itemize's exact spec section wording, output schema field for the detection result, etc. Deferred to a later structural-layer pass.
- **Process** — runner-side handling of single-item vs multi-item Itemize outputs. Out of scope.

**Multi-layer sequential plan:** this refinement is meaning-layer-only. After settling Itemize's refined meaning, the structural-layer inquiry for Task-Define (already in the prior finding's MUST list) will incorporate the refined definition.

## Relationships

- **CONTINUES FROM:** `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` — this inquiry refines one operation (Itemize) within the prior finding's Task-Define meaning-layer design. The rest of the Task-Define design (the other 4 operations, intra-discipline ordering, meta-question canonical set, dynamic Task-Define/Exploration division, input contract, output shape, pipeline position, lightweight stance, NOT-list, self-containment) is NOT being re-opened. At CONCLUDE time, the finding's frontmatter should declare `refines: devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md`.

(No Synthesis Trigger: only ONE prior inquiry is being consumed — the threshold is ≥2. The single-prior case is handled via frontmatter `refines:` at CONCLUDE time, not via Synthesis Trigger's Re-test obligation.)
