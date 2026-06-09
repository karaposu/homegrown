# Branch: Task-Define — Two-Pass-With-Surfacing-Between Pipeline Redesign Test

## Question

- **Subject** — the **pipeline-ordering design** for Task-Define and `/surfacing`. Currently (per the 07-48 process-layer finding + 15-39 meaning-layer finding + 21-12 reframe + 21-58 preparation-substrate finding): Task-Define runs **pre-pipeline** in a single pass (Reception → per-item Traversal executing 4-stage acyclic flow → Assembly), then the runner formulates `/surfacing`'s input from MQ2's preparation substrate (kinds + stance + verdict), then `/surfacing` always invokes. The user proposes an alternative: **two-pass Task-Define with /surfacing between** — Task-Define[pass-1] → /surfacing → Task-Define[pass-2]. The motivation: "without surfacing our rephrasings are limited due to lack of context; after doing surfacing we can refine them. This might be the best optimized way... and it dismisses the load-bearing effect of meta questions and trying to predict the future with them."
- **Action** — **inspect (DIAGNOSE + DESIGN-COMPARE)** the proposed two-pass design against the current single-pass-pre-pipeline architecture. Determine whether the two-pass design is structurally better, structurally worse, or mixed — and what positive interesting consequences (or negative ones) flow from it.
- **Level** — **cross-discipline pipeline-level**. The proposal targets the pipeline-step ordering of Task-Define + /surfacing as a coordinated pair, not Task-Define internals alone. Adjacent levels affected: discipline-internal (Task-Define's 4-stage flow gets re-invoked, with what semantics?); meaning-layer (MQ2's load-bearing role potentially shifts under two-pass; the user explicitly claims this); architectural (the pre-pipeline position of Task-Define from 15-39 + 07-48 gets challenged).
- **Observation targets** — list each as a separate item:
  1. **The premise test.** Is the user's claim ("rephrasings are limited without surfacing context") structurally correct? Can pre-/surfacing Rephrase actually be improved by post-/surfacing re-invocation, or does the current MQ-answer constraint already do enough?
  2. **The proposed pipeline shape.** Concretely, what is the two-pass design? Options: (a) Task-Define[pass-1] runs all 5 operations → /surfacing runs → Task-Define[pass-2] re-runs only Rephrase (and maybe Deconstruct/MultiScope) with surfaced context; (b) Task-Define[pass-1] runs only Itemize + MQ2 (just enough to prep /surfacing) → /surfacing runs → Task-Define[pass-2] runs the rest; (c) Task-Define[pass-1] runs all 5 operations from task-statement alone (no MQ2-preparation-of-surfacing) → /surfacing runs from task-statement directly → Task-Define[pass-2] re-runs all 5 with surfaced context; (d) something else.
  3. **The MQ2-preparation-substrate question.** Under two-pass, what happens to MQ2's preparation substrate role (from 21-58)? Does MQ2 still need to perceive kinds + stance before /surfacing? Or does /surfacing receive a different input?
  4. **The "meta-questions try to predict the future" claim.** The user says two-pass dismisses meta-questions' future-prediction load-bearing role. Is this accurate? Which meta-questions become non-load-bearing (MQ2 specifically? MQ1? MQ3?), and which remain?
  5. **The MQ-constrains-Rephrase safety mechanism.** Currently (per 07-48), Rephrase is constrained by Stage 2's MQ answers to prevent meaning-lock. Under two-pass, would Rephrase be constrained by (a) Stage 2 MQ answers AND /surfacing context, (b) /surfacing context alone, (c) something else? Does the safety mechanism survive, shift, or dissolve?
  6. **The acyclic-within-invocation commitment.** The 07-48 process-layer finding committed Task-Define's 4-stage flow as acyclic within an invocation; re-invocation is supported via `prior-bundles` for late-split recovery. Under two-pass, the second pass is a re-invocation — but with different semantics (surfacing-informed refinement, not missed-split recovery). Is this within the existing re-invocation envelope or a new mode?
  7. **The pre-pipeline position commitment.** The 15-39 finding and the spec's §1.3 commit Task-Define to pre-pipeline position because "Task-Define's output IS the framing the loop disciplines operate on." Under two-pass, Task-Define's pass-2 runs INSIDE the pipeline (after /surfacing). Does this dissolve the pre-pipeline commitment, refine it (Task-Define is BOTH pre-pipeline AND inside-pipeline), or supersede it (Task-Define is no longer pre-pipeline)?
  8. **The substrate-fidelity check on pass-2.** Task-Define's substrate (per §1.5 + NOT-list categories 2 + 5) is task-statement + LLM internal cognition only. Under pass-2, Task-Define has access to /surfacing's output — which IS project state. Does pass-2 violate the substrate? Or does the substrate-rule shift (pass-1 has restricted substrate; pass-2 has expanded substrate)?
  9. **The perception/action split status.** Currently Task-Define perceives, runner acts (formulates /surfacing input). Under two-pass, runner invokes /surfacing then re-invokes Task-Define with /surfacing's output. Does this preserve the split? Or does it shift?
  10. **The lightweight-stance preservation.** Two-pass means Task-Define runs twice per task statement. Is this still lightweight? Or does it double the cost in ways the lightweight-stance argues against?
  11. **The function-name-independence principle (from 21-58).** Under two-pass, does the "preparation substrate" concept-name still hold for MQ2's pass-1 output? Or does the role shift such that a different name is needed (since /surfacing context will refine the answer post-pass-1)?
  12. **The positive consequences** the user hopes for. If two-pass works, what specifically improves? Better rephrasings (the user's stated motivation)? Better deconstruct? Better multiscope? Reduced over/under-loading of /surfacing? Reduced reliance on hypothetical-relational mode (which is the workaround for not having context at pre-pipeline)? Architectural simplification by dismissing MQ2's preparation role?
  13. **The negative consequences** that might surface. If two-pass is structurally worse, what breaks? Compounding costs? Loss of perception/action split? Loss of substrate-fidelity? Loss of acyclic-flow architectural property? Loss of pre-pipeline framing-producer role?
  14. **Verdict criterion.** What kind of evidence would convincingly establish two-pass is "a lot better" vs "not better" vs "mixed"? The verdict should be structurally argued, not stylistic.
- **Deliverable shape** — verdict (a-lot-better / not-better / mixed) on the two-pass design + structural reasoning + enumeration of positive consequences (if any survive scrutiny) + enumeration of negative consequences (if any) + status of each inherited commitment (preserved / refined / superseded / dissolved) + recommendation (adopt / reject / explore variant) + scope of structural-followup work if adopted (out of scope per Layer Commitment; identified only).

**Question (single statement):** Is the proposed two-pass-Task-Define-with-/surfacing-between pipeline redesign structurally better, worse, or mixed compared to the current single-pass-pre-pipeline architecture — including (a) verification of the user's premise (pre-/surfacing rephrasings are limited by lack of context), (b) specification of the concrete two-pass shape (which operations run in pass-1 vs pass-2; how /surfacing's input is formulated; how /surfacing's output is consumed in pass-2), (c) status of each inherited commitment from the 6 prior task-define findings (15-39 / 14-14 / 17-02 / 07-48 / 21-12 / 21-58) under the proposed redesign, (d) enumeration of positive consequences (improved rephrasings, dismissed-MQ2-future-prediction, simplified hypothetical-relational, etc.) and negative consequences (doubled cost, broken acyclic-flow, substrate-fidelity question on pass-2, lost pre-pipeline framing-producer role, etc.), and (e) a structurally-grounded verdict (adopt / reject / variant) with the specific evidence shape that supports it?

## Goal

- **Criterion** — four qualities:
  - **Premise-test rigor.** The inquiry tests the user's claim ("rephrasings are limited without surfacing context") structurally — not by accepting or dismissing it on intuition. Either provides evidence that pre-/surfacing rephrasings genuinely lose information that surfaced context would provide, OR provides evidence that the MQ-answer constraint plus the bounded-extensibility rule already provide sufficient constraint without /surfacing.
  - **Concrete-shape specification.** The inquiry specifies WHICH operations would run in pass-1 vs pass-2, HOW /surfacing's input would be formulated (under each shape variant), and HOW /surfacing's output would be consumed in pass-2. The verdict isn't "two-pass is good in principle" but "this specific two-pass shape is or isn't better than the current shape."
  - **Inherited-commitment status rigor.** The 6 prior task-define findings carry settled commitments; each commitment's status under the proposed two-pass design is named (preserved / refined / superseded / dissolved) with structural reasoning. No commitment silently absorbed.
  - **Trade-off honesty.** Positive and negative consequences both enumerated explicitly with structural justification. The verdict is honestly arrived at — not biased toward defending the current architecture (status quo bias) and not biased toward adopting the new proposal (novelty bias).
- **Use case** — the user uses this finding to decide whether to (a) adopt the two-pass design (and trigger a process-layer redesign of Task-Define + /surfacing's pipeline interaction), (b) reject it and stick with single-pass-pre-pipeline, (c) adopt a variant (e.g., keep single-pass but make pass-2 optional under specific conditions), or (d) explore further before deciding.
- **Desired outcome** — a structurally-grounded verdict that gives the user clear next-step guidance + a list of inherited-commitment statuses that show what would have to change if the verdict is adopt.
- **What would fail** — a deliverable that:
  - accepts the user's premise without structural verification (just rolls over);
  - rejects the user's premise without structural grounds (status quo bias);
  - produces an adopt verdict without enumerating what breaks in current architecture;
  - produces a reject verdict without honestly engaging the positive consequences the user surfaces;
  - reaches into structural-layer (drafting spec amendments for the two-pass design) before settling the process-layer question;
  - treats the proposal as a wording change rather than a pipeline-architecture change;
  - silently absorbs inherited commitments from prior findings without status-naming.

## Source Input

```text
i have this idea

what if after surfacing, we do task-define again ?  because without surfacing our rephrasing's are limited due to lack of context.. but after doing surfacing we can refine them. 

this might be the best optimized way to be honest. and it dismisses the load bearing effect of meta questions and trying to predict the future with them...

lets inspect if such design is a lot better?  and it might result in some positive interesting results or not ?
```

## Scope Check

Question covers goal. The fourteen observation targets map to the four goal criteria: premise-test rigor covered by target 1; concrete-shape specification covered by targets 2+3+5; inherited-commitment status rigor covered by targets 4+6+7+8+9+10+11; trade-off honesty covered by targets 12+13+14.

Specific-vs-pattern check: the user proposes a SPECIFIC pipeline redesign (two-pass Task-Define with /surfacing between). The inquiry adjudicates this specific design + its specific consequences. The broader pattern (multi-pass disciplines in general; post-context refinement loops) is a tangential research frontier, surfaced as such, not relitigated.

## Layer Commitment

**Primary layer: Process.** The proposal targets WHAT STEPS the pipeline runs and in WHAT ORDER — Task-Define[pass-1] → /surfacing → Task-Define[pass-2] vs the current single-pass-pre-pipeline ordering. Process-layer adjudicates procedure, mechanism, gates, loop. The user explicitly proposes a process-step addition (pass-2) and a process-step relocation (Task-Define partially inside the pipeline).

**Other layers explicitly out of scope:**

- **Meaning** — the meaning-layer consequence (does MQ2's load-bearing role shift under two-pass?) is downstream of settling the process question. If two-pass is adopted, a follow-up meaning-layer inquiry would settle MQ2's revised role. If two-pass is rejected, the existing meaning commitments stand. Out of scope for THIS run.
- **Structural** — spec amendments at §1.3 (pre-pipeline commitment), §2.4 (preparation substrate), §3.1 (3-phase shape), §3.3 (per-item Traversal), §3.5 (re-invocation), §3.7 (pipeline position), and the `/surfacing` spec are downstream of both the process decision and the meaning consequence. Out of scope for THIS run.

**Layer ordering rationale:** the process question is upstream of the meaning consequences and the structural amendments. Settling the process commitment (adopt / reject / variant) determines whether to invest in the downstream layers at all. Settling meaning or structural first would commit on consequences before the process change is justified.

**Next-layer-inquiry preview (transparency note, not a planned-sequential commitment):** if this inquiry settles adopt or variant, the natural downstream sequence is (a) meaning-layer inquiry on the revised role of MQ2 + meta-questions generally + Rephrase's safety mechanism under post-surfacing context, then (b) structural-layer inquiry to amend the spec sections enumerated above. User decides scheduling.

## Synthesis Trigger

This inquiry inherits and must re-test commitments from MULTIPLE prior outputs whose substance depends on the current single-pass-pre-pipeline architecture being correct. The inquiry will re-test each commitment under the proposed redesign — either re-justify, refine, supersede, or dissolve with reasoning.

Prior outputs being synthesized / re-tested:

- `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` — original meaning-layer settlement; committed pre-pipeline position + perception/action split + the substrate (task-statement + LLM internal cognition only).
- `devdocs/inquiries/2026-06-04_07-48__task_define_process_layer/finding.md` — process-layer settlement; committed the 3-runtime-phase shape (Reception → per-item Traversal → Assembly) + 4-stage acyclic-within-invocation flow + per-item one-pass contract + MQ-constrains-Rephrase load-bearing safety mechanism.
- `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md` — mode 6 detection rule; committed MQ2's answer-content shape (verdict + kind specifier) for runner-side extraction.
- `devdocs/inquiries/2026-06-04_17-02__task_define_mq2_shape_thoroughness_check/finding.md` — verification inquiry; committed that mode 6 covers MQ2 shape concerns.
- `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md` — MQ2 reframe; committed three-element substance (verdict + kinds + stance + hypothetical-relational mode) + runner-mediated alignment with /surfacing.
- `devdocs/inquiries/2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/finding.md` — dispatch-vs-preparation correction; committed always-invoke premise + "preparation substrate" concept + function-name-independence principle + perception/action-split-with-action-target-shifted.

Each of these carries commitments whose status under two-pass must be named. CONCLUDE will require the finding to include an `## Inherited Commitments Re-test` section naming each commitment + status (PRESERVED / REFINED / SUPERSEDED / DISSOLVED) with structural reasoning. The inquiry's discipline work (Sensemaking ambiguity-collapse pairs + Critique adversarial evaluation) must actually do the re-testing, not just record the inheritance.
