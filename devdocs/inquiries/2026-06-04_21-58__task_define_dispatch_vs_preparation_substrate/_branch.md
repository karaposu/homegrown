# Branch: Task-Define MQ2 — Dispatch-Substrate vs Preparation-Substrate (Always-Invoke Premise Test)

## Question

- **Subject** — the **substrate-role of MQ2's answer** in the Task-Define discipline. Specifically: the "dispatch substrate" framing at §2.4 of `cognitive_harness/task-define/references/task-define.md` and as propagated through (a) `devdocs/what_is_task_define.md`'s "Meta-question answers ARE the dispatch substrate" passage, (b) the mode 6 inquiry's §2.4 amendment (which detects "missing dispatch info"), and (c) the just-completed MQ2 reframe finding (which committed "verdict=no → /surfacing skipped entirely" gating language). The user's critique: the dispatch framing assumes the runner DECIDES whether to invoke `/surfacing` based on MQ2's answer, but in practice **the runner always invokes `/surfacing`** — there is no dispatch decision. Meta-questions are for **lightweight preparation**, not heavy routing. The "dispatch substrate" concept may be the wrong characterization of what MQ2's answer is FOR.
- **Action** — **redefine (DEVELOP)** the substrate-role of MQ2's answer at the meaning layer. Test the user's "always-invoke" premise structurally (is /surfacing always invoked? if yes, why? if no, when not?). If premise holds, articulate the corrected substrate-role concept (preparation-substrate? pre-shape input? lightweight context-preparation?) and re-test the prior commitments that depend on the dispatch framing.
- **Level** — discipline-internal at the meaning-layer component. Specifically the §2.4 dispatch-substrate commitment + the user-facing paraphrase in `devdocs/what_is_task_define.md` + the just-completed MQ2 reframe finding's gating language. Adjacent surfaces: mode 6 detection rule at §4.2 (which detects "missing dispatch info"); the architectural perception/action split (does the corrected substrate-role still preserve the split, or does it dissolve the action side?).
- **Observation targets** — list each as a separate item:
  1. **Premise test.** Is the user's claim ("the runner always invokes /surfacing") structurally correct given the cognitive harness's architecture? Are there cases where the runner would NOT invoke /surfacing — and if so, what are the structural conditions?
  2. **Dispatch-substrate concept under test.** If /surfacing is always invoked, is "dispatch substrate" a misnomer? (Dispatch implies a routing decision; if no routing decision, no dispatch.) What is MQ2's answer's role then?
  3. **Lightweight stance.** The user's claim that "meta-questions are to prepare things in very lightweight way" — does this fit with the current §2.4 commitment that MQ2's answer carries "necessary information content" for runner extraction? Are the two compatible, or does lightweight-preparation conflict with necessary-information-content?
  4. **Alternative substrate-role candidates.** If "dispatch substrate" is wrong, what could it be: (a) preparation-substrate (MQ2 prepares /surfacing's input lightly); (b) framing-substrate (MQ2 provides the framing /surfacing operates under); (c) pre-shape input (MQ2 shapes what /surfacing should look for before /surfacing runs); (d) lightweight-priors (MQ2 perceives priors /surfacing can use); (e) something else?
  5. **Effect on mode 6 detection rule.** Mode 6 at §4.2 detects "MQ2-answer-missing-dispatch-info" (per the 2026-06-04_14-14 inquiry's amendment). If "dispatch info" is the wrong concept, what does mode 6 detect instead? Does the detection rule still hold, or does it need re-grounding?
  6. **Effect on the just-completed MQ2 reframe finding.** The 2026-06-04_21-12 finding's "runner-mediated alignment" mechanism committed: "verdict=no → /surfacing skipped entirely" / "verdict=yes/uncertain → triggers /surfacing invocation." If the runner always invokes /surfacing, this gating language is wrong. Does the substance commitment (verdict + kinds + stance) still hold, or does it also need re-shaping?
  7. **Effect on the perception/action split.** The dispatch-substrate framing preserved the perception/action split (Task-Define perceives, runner acts by deciding whether to invoke /surfacing). If there's no invocation decision, what's the action side of the split? Does the split dissolve, or does it shift (runner acts by FORMULATING /surfacing's input from MQ2's preparation rather than by GATING /surfacing's invocation)?
  8. **Architectural placement of MQ2 in the always-invoke pipeline.** If /surfacing always runs, where does MQ2's role sit in the pipeline timing? Before /surfacing (preparing /surfacing's input)? In parallel with /surfacing (independent perception)? After /surfacing (informing post-/surfacing interpretation)?
  9. **Compatibility with the existing substance commitment (verdict + kinds + stance + hypothetical-relational mode).** The just-completed MQ2 reframe committed a three-element answer. If MQ2 is preparation-substrate (not dispatch-substrate), does the three-element answer still make sense? Or does the substance shape itself need revisiting?
- **Deliverable shape** — meaning-layer commitment on (a) the corrected substrate-role concept name + definition + grounding, (b) re-tested mode 6 detection rule (still holds? needs re-grounding? must be retracted?), (c) re-tested MQ2 reframe finding's gating language (corrected to no-gating preparation-framing?), (d) perception/action split status (preserved? shifted? dissolved?), (e) cumulative effect on the dispatch-substrate framing across the spec, the explanatory doc, and the prior inquiry findings. Structural-followup work (spec amendments + doc corrections + prior-finding corrections) flagged as MUST but OUT OF SCOPE per Layer Commitment.

**Question (single statement):** Given the user's claim that the runner always invokes `/surfacing` (no dispatch decision to make), is the "dispatch substrate" framing of MQ2's answer at §2.4 (and propagated through `devdocs/what_is_task_define.md`, the mode 6 inquiry's §2.4 amendment, and the just-completed MQ2 reframe finding) structurally wrong — and if so, what IS the correct substrate-role concept for MQ2's answer (preparation-substrate / framing-substrate / pre-shape input / lightweight-priors / other), including (a) re-testing of the prior commitments that depend on the dispatch framing (mode 6 detection rule; MQ2 reframe finding's gating language; perception/action split), (b) compatibility verdict with the existing substance commitment (verdict + kinds + stance + hypothetical-relational mode), (c) the architectural placement of MQ2 in the always-invoke pipeline, and (d) the lightweight-stance preservation under the corrected concept?

## Goal

- **Criterion** — four qualities:
  - **Premise verification.** The inquiry tests whether the user's claim ("/surfacing always invoked") is structurally correct given the cognitive harness's architecture. Doesn't proceed to substrate-role redefinition without first verifying the premise.
  - **Concept replacement (if premise holds).** If the dispatch framing is wrong, the corrected substrate-role concept is named explicitly with structural grounding — not just "not-dispatch" but a positive characterization of what MQ2's answer IS for.
  - **Re-test rigor.** The 3+ prior commitments that depend on the dispatch framing (§2.4 commitment; mode 6 detection rule; MQ2 reframe finding's gating language) are each re-tested under the corrected concept — either re-justified, refined, or retracted with reasoning.
  - **Lightweight-stance fit.** The corrected concept fits the user's "meta-questions are to prepare things in very lightweight way" framing without violating Task-Define's lightweight-stance commitments (paragraph per operation; no sub-machinery; substrate-compliance).
- **Use case** — the meaning-layer commitment + the re-tested prior commitments + the structural-followup amendments unblock (a) corrections to `cognitive_harness/task-define/references/task-define.md` §2.4 + §4.2; (b) correction to `devdocs/what_is_task_define.md`'s "dispatch substrate" passage; (c) correction to the just-completed MQ2 reframe finding's gating language; (d) any cumulative correction across the cumulative pending application work from prior task-define inquiries.
- **Desired outcome** — a corrected substrate-role concept (with structural grounding) the user can either approve or push back on, plus a clear list of cumulative spec/doc/finding corrections needed as next-step work.
- **What would fail** — a deliverable that:
  - accepts the user's premise without structural verification (just rolls over);
  - rejects the user's premise without structural grounds (defending the dispatch framing because it's documented, not because it's correct);
  - produces a corrected concept that doesn't fit the lightweight-stance commitment;
  - corrects the dispatch framing but ignores the cascading effect on the just-completed MQ2 reframe finding's gating language;
  - over-commits to a new architectural concept without re-testing prior commitments;
  - reaches into structural-layer (spec amendments, doc rewrites, finding corrections) without first settling the meaning;
  - treats the inquiry as a wording change rather than a concept correction.

## Source Input

```text
Meta-question answers ARE the dispatch substrate. The runner needs to know whether to invoke the project's Exploration discipline (which fetches external context). Task-Define does NOT emit a separate needs_external_context: bool field. Instead, the MQ2 answer (the context-need question) carries the information, and the runner reads it.

part is weird, the runner always  invoke the project's Exploration discipline  which is called surfacing...  so it doesnt makes sense...

meta questions are to prepare things in very lightweight way..
```

## Scope Check

Question covers goal. The nine observation targets map to the four goal criteria: premise verification covered by target 1; concept replacement covered by targets 2+4+8; re-test rigor covered by targets 5+6+7+9; lightweight-stance fit covered by target 3.

Specific-vs-pattern check: the user names the "dispatch substrate" framing specifically (quoted text from `devdocs/what_is_task_define.md`). The inquiry's scope is the dispatch-substrate CONCEPT and its propagation through prior work — NOT a pattern question across all meta-questions (MQ1 and MQ3 don't have substrate-roles to a secondary discipline branch per the prior MQ2 reframe finding's MQ2-specific scope decision; this is intrinsically MQ2-specific).

## Layer Commitment

**Primary layer: Meaning.** The question targets WHAT MQ2's answer IS (its substrate-role concept) — challenging whether "dispatch substrate" correctly characterizes its role given the always-invoke premise. The user's "this doesn't make sense" is a meaning-layer critique: the concept itself is wrong, not the wording or the timing.

**Other layers explicitly out of scope:**
- **Structural** — spec wording amendments at §2.4 + §4.2 + `devdocs/what_is_task_define.md` + corrections to prior findings (mode 6 finding; MQ2 reframe finding) are downstream of settling the corrected concept. Authored amendments are OUT OF SCOPE for this inquiry; the inquiry will identify what amendments are needed but not author them.
- **Process** — MQ2's process timing (Stage 2 of the 4-stage flow; fires first per item) is inherited from the process-layer finding (2026-06-04_07-48); not re-litigated here. The corrected substrate-role doesn't change when MQ2 fires — only WHAT its answer IS FOR.

**Layer ordering rationale:** the substrate-role concept is the upstream concern; the spec wording, the explanatory doc paraphrase, and the prior-finding corrections all follow once the meaning is settled. Settling structural first would commit on wording with a still-wrong concept underneath; settling process first would commit on timing without questioning the substrate-role's purpose.

**Next-layer inquiry preview (transparency note, not a planned-sequential commitment):** if this inquiry settles a corrected substrate-role concept, the natural downstream work is (a) §2.4 + §4.2 amendments to the Task-Define spec; (b) `devdocs/what_is_task_define.md` correction; (c) corrections to mode 6 finding (2026-06-04_14-14) and MQ2 reframe finding (2026-06-04_21-12) — either via inline supersedes / corrects notes or via follow-up `corrects:` findings. User decides scheduling.

## Synthesis Trigger

This inquiry inherits and must re-test commitments from MULTIPLE prior outputs whose substance depends on the dispatch-substrate framing being correct. The inquiry will need to either re-justify each commitment under a corrected concept OR explicitly flag the commitment as superseded with reasoning.

Prior outputs being synthesized / re-tested:

- `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` — the original meaning-layer settlement for Task-Define; committed the dispatch-substrate architectural concept at §2.4.
- `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md` — the mode 6 detection rule inquiry; committed §2.4 amendment specifying MQ2's answer carries "dispatch info" (verdict + kind specifier) and §4.2 mode 6 detection rule for "missing dispatch info."
- `devdocs/inquiries/2026-06-04_17-02__task_define_mq2_shape_thoroughness_check/finding.md` — verification inquiry that confirmed mode 6's coverage of refinement #4's three concerns; depends on the dispatch-substrate framing being correct.
- `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md` — the just-completed MQ2 reframe finding; committed runner-mediated alignment with explicit gating language ("verdict=no → /surfacing skipped entirely"; "verdict=yes/uncertain → triggers /surfacing invocation").

Each of these carries commitments (architectural commitments; detection rules; gating language; verification verdicts) that depend on the dispatch-substrate framing. CONCLUDE will require the finding to include an `## Inherited Commitments Re-test` section that names each commitment and either re-tests it with cited evidence (under the corrected substrate-role concept) OR explicitly flags it as carried-forward-without-re-test with a reason (e.g., the commitment's substance doesn't depend on the dispatch framing).

The inquiry's discipline work — particularly Sensemaking (Ambiguity Collapse + Load-bearing concept test) and Critique (per-candidate adversarial evaluation) — must DO the re-testing, not just record the inheritance.
