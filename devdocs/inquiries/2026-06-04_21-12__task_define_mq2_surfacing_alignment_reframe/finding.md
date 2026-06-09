---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Task-Define MQ2 — Reframe Toward Surfacing-Directive Alignment

## Question

From `_branch.md`:

**Question:** Settle the meaning-layer substance of MQ2 in the Task-Define discipline runtime spec at `cognitive_harness/task-define/references/task-define.md` (the second of three base meta-questions, canonically worded as "Is this task self-contained, or does it require external context to make sense and be done right? If external, what kind?"). The user critiqued the paraphrase in `devdocs/what_is_task_define.md` ("does the LLM need to know the project to do this right, or is the statement self-contained?") as too abstract/binary and proposed reframing toward: "does LLM need to surface specific information from the project base?" — with a richer answer-shape exemplar ("this task already worked on before, it has these artifacts and the current task is fresh start of it") to enable selective multi-layer relevance discrimination and full alignment with the downstream `/surfacing` discipline. The inquiry's nine observation targets covered: the cognitive question MQ2 IS asking; the answer-shape; the downstream coupling to /surfacing; substrate-fidelity check; compatibility with the prior mode 6 §2.4 commitment (verdict ∈ {yes,no,uncertain} + kind specifier); asymmetric-failure applicability; identity-boundary preservation; pattern-scope (MQ2-specific vs MQ1+MQ3 too?); effect on the explanatory doc.

**Goal:** a meaning-layer commitment with concrete answer-shape exemplar, downstream-alignment mechanism named, substrate-fidelity verdict, and compatibility verdict against the mode 6 commitment — sufficient to unblock structural amendments to the Task-Define discipline spec + correction of the explanatory doc as next-step work. The deliverable is concrete enough that the user can approve, refine, or push back on it.

**Layer Commitment:** meaning-layer only. Structural-layer work (spec wording amendments at §2.3 and §2.4; explanatory-doc paraphrase rewrite) is OUT OF SCOPE for this inquiry but identified as next-step MUST work.

---

## Finding Summary

- **MQ2's substance is a three-element answer (verdict + kinds + relational stance).** When MQ2 fires per item, the LLM perceives a verdict ∈ {yes, no, uncertain}; when verdict is yes or uncertain, the LLM additionally perceives one or more *kinds* of external information that would be load-bearing (e.g., "past incident memos", "prior auth-module designs"), and one *relational stance* toward the project (one of: continuation / fresh-start-of-prior / reference-to / fresh-self-contained, with runtime extensions allowed for perceived subtypes).

- **The kinds-plus-stance content must be expressed in "hypothetical-relational" mode, not assertive mode.** "Hypothetical-relational" means the LLM perceives "this kind of task is typically a continuation of prior work; if so, the prior artifacts of kinds [X, Y] would bear on it" — a type-pattern hypothesis perceivable from task-statement + LLM general task-type knowledge. It does NOT mean naming specific project artifacts (which would require project access Task-Define doesn't have). This expression mode is the substrate-compliance vehicle: it keeps the answer expressible from task-statement + LLM internal cognition only.

- **The reframe is a REFINING of mode 6's §2.4 commitment, not a supersession.** The verdict structure ∈ {yes, no, uncertain} from mode 6 is preserved. The kind specifier is enriched into a two-element kinds+stance payload. The alternative (pure surfacing-directive that replaces verdict + kind with directive-presence) was tested and rejected on two independent structural grounds: (i) directive-presence cannot express the runner-actionable "uncertain" verdict that mode 6 §4.4 asymmetric-failure relies on; (ii) directive-presence is an ambiguous detection target for LAYER 1 mode 6's missing-dispatch-info detection rule.

- **Downstream alignment with /surfacing is runner-mediated, not direct-mapped.** MQ2's answer carries verdict + kinds + stance; the runner reads the answer and formulates /surfacing's input: kinds → /surfacing's `purpose` field + bias inputs; stance → /surfacing's `territory` selection and framing (continuation → surface the prior artifacts the task continues; fresh-start-of-prior → surface the prior X as REFERENCE; reference-to → surface the referent context; fresh-self-contained → skip /surfacing entirely). The perception/action split is preserved: Task-Define perceives, the runner acts. The alternative (direct-map where Task-Define outputs /surfacing-shaped input directly) was tested and rejected because it violates both the perception/action split AND the substrate (Task-Define would need project access to bridge hypothetical-relational stance to concrete-territory selection).

- **The asymmetric-failure principle for MQ2 operationalizes as "lean richer, stop at pre-surfacing."** Under-specified MQ2 (vague verdict only) costs are real — the runner can't formulate /surfacing input and either skips /surfacing (false-negative on context-need) or invokes it with weak purpose (over-loads context, which is exactly the user's stated motivation against). Over-specified MQ2 (naming specific project items) costs are also real — it both violates substrate and pre-empts /surfacing's per-item job. The optimal lean: MORE detail on kinds and stance (cover plausible subtypes; express hypothetical-relational possibilities richly); STOP at pre-surfacing (no specific-item naming; no project-state assertion).

- **The reframe applies only to MQ2; MQ1 and MQ3 keep their current identities.** MQ1 (scope) feeds MultiScope within Task-Define; MQ3 (intent) constrains Rephrase within Task-Define. Neither signals to a SECONDARY discipline branch like MQ2 does (MQ2's dispatch-substrate role at §2.4 is structurally unique). Applying the surfacing-alignment lens to MQ1 or MQ3 would collapse the real intra-vs-cross-discipline-coupling distinction; future ecosystem changes that introduce new cross-discipline couplings for MQ1 or MQ3 would warrant separate inquiries.

- **Structural-followup work (out of scope for this meaning-layer inquiry per Layer Commitment) consists of three amendments:** (1) §2.3 MQ2 wording amendment — ADD-CONTENT (append worked-examples sub-block + revise MQ2's question wording to reflect the kinds+stance perception target); (2) §2.4 dispatch-substrate commitment amendment — ADD-CONTENT (extend the necessary-information-content paragraph to specify the two-element kinds+stance payload + hypothetical-relational expression mode); (3) `devdocs/what_is_task_define.md` MQ2 paraphrase correction — REPAIR (rewrite the "does the LLM need to know the project to do this right" paraphrase to reflect the kinds+stance surfacing-directive substance).

---

## Finding

### Small surrounding context

The user is developing Task-Define as a discipline within a broader cognitive-harness project. Task-Define's job is to take a compact task statement and expand it into a defined task — through five operations (Itemize, Meta-question, Deconstruct, MultiScope, Rephrase) in a fixed 4-stage flow. Among the five operations, **Meta-question** applies three canonical questions per item: MQ1 (scope), MQ2 (context-need), MQ3 (intent). MQ2 is structurally unique: it's the only one of the three that carries information to a *secondary* discipline branch (the runner reads MQ2's answer to decide whether to invoke `/surfacing`, the project's discipline for drawing relevance-tagged items from a bounded territory).

In an earlier inquiry (mode 6 detection rule, 2026-06-04_14-14), the user committed an amendment to §2.4 of the Task-Define spec specifying that MQ2's answer must carry a verdict ∈ {yes, no, uncertain} plus (when verdict is yes) a kind specifier. That commitment closed the immediate detection-rule gap. But when the user read the explanatory doc `devdocs/what_is_task_define.md` (written shortly after to help readers grasp what Task-Define does), they encountered a paraphrase of MQ2 that felt "weird": "does the LLM need to know the project to do this right, or is the statement self-contained?" — and proposed a sharper reframing toward "does the LLM need to surface specific information from the project base?", with a concrete answer-shape exemplar mentioning prior-task continuity.

This inquiry settles what MQ2 IS — its substance at the meaning layer — in light of that reframe. The settlement honors three hard constraints from the discipline's identity: (a) substrate-fidelity (Task-Define only has access to the task statement and the LLM's own internal cognition; it cannot reach for project state), (b) compatibility with the just-committed mode 6 §2.4 commitment, and (c) the perception/action split (Task-Define perceives; the runner acts). What follows is the meaning-layer commitment in detail, with the structural-followup work identified but explicitly out-of-scope for this inquiry.

### 1. What MQ2 IS — the cognitive question

MQ2 is the cognitive question Task-Define applies, per item from Itemize, that asks the LLM to perceive **whether the task item requires external context** — and, when context is needed, **what kinds of external information would be load-bearing and what relational stance the task takes toward existing project state**.

The verb of perception is "perceive what kinds of external info would be load-bearing and the relational stance toward the project" — a sharpening of the prior framing's "judge sufficiency-of-statement-for-doing-task-right." The shift is from a binary self-contained/external verdict to a typed perception of (context-need + kinds + stance) that downstream consumers (the runner; potentially the user reading the framing artifact) can act on.

The answer's content elements:

**(1) Verdict** — one of {yes, no, uncertain}. Preserved from the mode 6 §2.4 commitment. The "uncertain" verdict is runner-actionable per the asymmetric-failure principle at §4.4 — the runner errs toward invoking the project's `/surfacing` discipline on uncertain answers.

**(2) Kinds-plural** — one or more types of external information that the LLM perceives as load-bearing for the item. Kinds are perceived as TYPES, not as specific items. Examples (illustrative): "past incident memos", "prior auth-module designs", "team velocity data", "ecosystem dependencies", "prior versions of the same artifact." The kinds list expresses what KIND of context would bear on the task, not which specific project artifact the LLM thinks exists.

**(3) Relational stance** — one of {continuation, fresh-start-of-prior, reference-to, fresh-self-contained} (with bounded-extensibility for runtime-perceived subtypes such as "hybrid" or "referent-uncertain"). The stance captures HOW the current task relates to existing project state — whether it continues prior work, starts fresh from a known prior, references something, or is genuinely self-contained.

When verdict = **no**, the answer is verdict-only — kinds and stance are not required. This minimal-shape is compatible with mode 6's existing minimal-answer case (verdict + nothing else when verdict is no).

When verdict = **uncertain**, the kinds-and-stance content is included as hypothetical pre-discrimination ("the relevant kinds and stance, IF context is needed"). This preserves mode 6's runner-actionability commitment for the uncertain verdict — the runner reads the hypothetical kinds + stance and formulates /surfacing input from them, erring toward invocation per asymmetric-failure.

### 2. The expression mode — hypothetical-relational, not assertive

The substance commitment above introduces a critical sub-distinction at the level of HOW the LLM expresses the perceived kinds + stance. There are two expression modes:

- **Assertive mode** — "this is a fresh start of commit abc123 at /src/auth/v2" or "the prior task was completed in `/docs/incident-q3.md` and this memo is its sequel." This mode requires the LLM to know specific project state (which commits exist; which files exist; what prior tasks were done). It violates Task-Define's substrate (NOT-list category 2: external-context fetching; NOT-list category 5: ecosystem-knowledge use).

- **Hypothetical-relational mode** — "this kind of task is typically a continuation of prior work; if so, the prior artifacts of kinds [past memos / prior versions] would bear on it; alternatively, this may be a fresh start, in which case only the task statement is load-bearing." This mode expresses stance as a type-pattern hypothesis. The LLM perceives "tasks of this kind typically have this stance possibility and these kinds of load-bearing context" from task-statement + LLM general task-type knowledge, without asserting anything specific about the project.

**MQ2's answer MUST use the hypothetical-relational mode.** This is the substrate-compliance vehicle that keeps the enriched substance expressible from task-statement + LLM internal cognition alone. Without this mode constraint, the kinds + stance would slide into assertive descriptions that require project access Task-Define doesn't have.

The distinction is structurally important because it's what makes MQ2's reframe substrate-compliant. If MQ2's answer asserted specific project state, MQ2 would no longer be a Task-Define operation — it would be a /surfacing operation or an exploration operation. The expression-mode commitment preserves Task-Define's identity.

### 3. The compatibility relation — REFINING (not supersession)

This inquiry's substance settlement is a **refinement** of the mode 6 §2.4 commitment, not a replacement. The verdict structure ∈ {yes, no, uncertain} is preserved exactly. The kind specifier from mode 6 is enriched: where mode 6 committed "(when yes) a one-sentence kind specifier," this inquiry's settlement says "(when yes or uncertain) a kinds-plural element + a relational-stance element, both expressed in hypothetical-relational mode."

The alternative — **superseding** the mode 6 commitment with a pure surfacing-directive answer (no verdict; just directive-presence indicates context-need) — was tested at the sensemaking stage and rejected on two independent structural grounds:

- **Uncertain-verdict cannot be expressed via directive-presence.** Absence of directive is ambiguous — it could mean "no context needed" or "I don't know if context is needed." The {yes, no, uncertain} verdict distinguishes these two cases explicitly. Mode 6's commitment requires the uncertain case to be runner-actionable (the runner errs toward invoking /surfacing per asymmetric-failure); pure-directive answers can't carry this.

- **The mode 6 detection rule at §4.2 (LAYER 1 mode 6 — "MQ2-answer-missing-dispatch-info") needs a clean detection target.** With the verdict + kind shape, detection is binary: answer either has verdict + (when yes) kind, or it doesn't. With pure-directive, detection becomes "did the LLM emit a directive?" — which is ambiguous because absence of directive is a valid state for verdict=no.

REFINING preserves both — the verdict structure remains canonical; the kind specifier becomes a richer two-element payload. The mode 6 detection rule continues to apply: it detects absence of the required content (verdict + (when verdict=yes) kinds + stance).

### 4. The downstream alignment with /surfacing — runner-mediated

The user's stated goal is "full alignment in surfacing's side." This inquiry settles the alignment mechanism as **runner-mediated**: MQ2's answer carries the perception; the runner reads the perception and formulates `/surfacing`'s input.

The translation logic the runner applies:

| MQ2's answer element | Runner's formulation for /surfacing |
|---|---|
| Verdict = yes (or uncertain) | Triggers /surfacing invocation (verdict = no skips /surfacing) |
| Kinds (one or more types of info needed) | → /surfacing's `purpose` field + bias toward kinds-listed |
| Stance = continuation | → /surfacing's `territory` = the prior artifacts the task continues |
| Stance = fresh-start-of-prior | → /surfacing's `territory` = prior X's artifacts as REFERENCE, not direct-operate |
| Stance = reference-to | → /surfacing's `territory` = the prior referent's context |
| Stance = fresh-self-contained | → /surfacing skipped entirely (stance asserts no project-base reach needed) |

This table is **descriptive** (how runners typically translate), not **prescriptive** (something Task-Define outputs directly). The runner is the bridge; Task-Define stays narrow.

The alternative — **direct-map** where Task-Define outputs /surfacing-shaped input fields (`purpose: …`, `territory: …`) directly — was tested at the sensemaking stage and rejected on two structural grounds:

- **It violates the perception/action split** committed in the mode 6 finding: Task-Define perceives, the runner acts. Direct-map would mean Task-Define is formulating runner-side input (an action), not perceiving (its identity).

- **It requires Task-Define to bridge hypothetical-relational stance to concrete-territory selection**, which requires project access. Task-Define's substrate excludes project access. The runner has the project access — that's why the runner is the bridge.

The perception/action split is the architectural reason MQ2 doesn't emit a `needs_external_context: bool` field directly; it's why MQ2 perceives kinds + stance and lets the runner translate.

### 5. The asymmetric-failure principle for MQ2 — lean richer, stop at pre-surfacing

The general asymmetric-failure principle at §4.4 commits Task-Define to "lean to fire" at MQ extensions and "lean to keep-together" at Itemize. For MQ2's enriched substance specifically, the operational form is **"lean richer, stop at pre-surfacing."**

**Under-specified MQ2** (vague verdict; minimal kinds/stance) costs:
- The runner can't formulate /surfacing input cleanly. It either skips /surfacing (false-negative on context-need; the user gets blind-loading the reframe was meant to prevent) or invokes /surfacing with weak purpose (over-loads; same problem).
- Recoverable via runner-initiated re-invocation (the runner can re-invoke Task-Define or re-invoke /surfacing with broader purpose), but recovery has cost.

**Over-specified MQ2** (naming specific project artifacts; asserting which prior task this continues from) costs:
- Substrate violation (NOT-list categories 2 + 5).
- Per-discipline-boundary violation: Task-Define would be doing /surfacing's per-item relevance work.
- Structurally irrecoverable: the wrong frame propagates downstream.

The trade-off resolves: lean toward MORE detail on kinds and stance (richer content; cover plausible subtypes), STOP at pre-surfacing (no specific-item naming; no project-state assertion). The "pre-surfacing" cut-off is the operational boundary — the LLM names KINDS (types of info that would matter) and STANCE (how the task relates to project state, in hypothetical-relational mode) but does NOT name specific items (which would require project access).

### 6. The pattern scope — MQ2-specific

A natural question this inquiry surfaced: should MQ1 (scope) and MQ3 (intent) also be reframed under a "downstream-discipline-aligned" lens?

The answer is no. MQ1 and MQ3 have *intra-discipline* downstream coupling, not cross-discipline coupling:

- MQ1 informs MultiScope's scope-axis (per §2.2 Stage 3 of the Task-Define spec — MultiScope reads MQ1 to determine what dimension to render small/big-scope along).
- MQ3 constrains Rephrase via the MQ-answer constraint relation (per §2.1 Rephrase — Rephrase is bound by ALL MQ answers; intent shapes which vocabularies fit).

Neither MQ1 nor MQ3 signals to a SECONDARY discipline branch like MQ2 signals to /surfacing. MQ2's dispatch-substrate role at §2.4 is structurally unique. Reframing MQ1 or MQ3 under the surfacing-alignment lens would force them into an unfitting coupling pattern — and would collapse a real structural distinction between intra-discipline coupling (MQ1/MQ3 to MultiScope/Rephrase, both inside Task-Define) and cross-discipline coupling (MQ2 to /surfacing, crossing the discipline boundary).

The scope commitment here is CURRENT-STATE: applies to MQ1 / MQ2 / MQ3 as they exist in the current Task-Define spec. If a future Core discipline emerges that MQ1 or MQ3 starts signaling to, the scope decision warrants revisiting via a separate inquiry. The current commitment isn't future-proof; it's current-state-correct.

### 7. The structural-followup work — out of scope per Layer Commitment

This inquiry's Layer Commitment scopes the work to meaning-layer only. Structural-layer work (spec wording amendments, explanatory-doc rewrites) is OUT OF SCOPE. But the meaning settlement implies specific structural-followup work, identified here for the user to schedule:

**(1) §2.3 MQ2 wording amendment** — intervention shape: **ADD-CONTENT**. Target file: `cognitive_harness/task-define/references/task-define.md`. Content: (a) append a worked-examples sub-block illustrating kinds + stance answer for representative task types; (b) revise MQ2's question wording from "Is this task self-contained, or does it require external context to make sense and be done right? If external, what kind?" to a wording that reflects the perception target shift — something along the lines of: "Does this item require external context? If yes or uncertain, what kinds of external information are load-bearing, and what is the relational stance toward the project? Express in hypothetical-relational mode (type-pattern hypothesis, not assertive project-state description)."

**(2) §2.4 dispatch-substrate commitment amendment** — intervention shape: **ADD-CONTENT**. Same target file. Content: extend the existing "necessary information content" commitment paragraph to specify the two-element kinds + stance payload + hypothetical-relational expression mode. Preserve the existing verdict structure commitment; add the kinds + stance sub-elements.

**(3) `devdocs/what_is_task_define.md` MQ2 paraphrase correction** — intervention shape: **REPAIR**. Target file: `devdocs/what_is_task_define.md`. Content: rewrite the "does the LLM need to know the project to do this right, or is the statement self-contained?" paraphrase to reflect the kinds + stance surfacing-directive substance. The alternative shape (pure REPAIR of §2.3 and §2.4 — rewriting them substantively) was tested and rejected because it would contradict the REFINING relation committed in §3 above (REFINING preserves verdict structure; pure REPAIR would override-not-preserve).

The three amendments are independent file edits; no ordering dependency. (§2.3 and §2.4 are co-located in one file and can be applied atomically; the explanatory doc is a separate file.)

### 8. Notes on bounded-extensibility for the stance taxonomy

The stance taxonomy (continuation / fresh-start-of-prior / reference-to / fresh-self-contained) is **bounded-extensible**: runtime extensions are allowed when the LLM perceives a stance subtype that doesn't fit the base 4 and would materially affect the runner's /surfacing formulation. The bounded-extensibility pattern is inherited from the existing MQ extension bounded-rule at §2.3 rule (b) — extensions qualify when they (a) are about task structure or framing, (b) constrain the downstream operation materially, (c) are expressible in one sentence (or, here, one stance-name + brief description).

Examples of runtime extensions that would qualify: "hybrid" (when an item has both continuation-of-prior and fresh-start aspects), "referent-uncertain" (when the task references something whose specifics the LLM doesn't know — e.g., "do the thing we discussed"). Examples that would NOT qualify: arbitrary free-form descriptions; stance-names that don't materially change the runner's territory formulation.

---

## Inherited Commitments Re-test

This inquiry is not a Synthesis (no `## Synthesis Trigger` in `_branch.md`), and its frontmatter does not declare `refines:` / `supersedes:` / `corrects:` of a prior finding. The `## Inherited Commitments Re-test` section is therefore not strictly required.

However, the inquiry's substance settlement materially refines a commitment from the mode 6 inquiry (2026-06-04_14-14), and inherits commitments from the process-layer inquiry (2026-06-04_07-48) and the original meaning-layer settlement (2026-06-03_15-39). Voluntarily including this section makes the inheritance explicit so a reviewer can verify the dependencies.

- **Commitment:** MQ2's answer must carry verdict ∈ {yes, no, uncertain} + (when verdict=yes) kind specifier (one-sentence description of what kind of external context is needed). The uncertain verdict is runner-actionable.
  - **Source:** `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md` (mode 6 inquiry's §2.4 amendment)
  - **Re-test status:** **RE-TESTED**
  - **Evidence:** This inquiry tested whether the proposed reframe is compatible (REFINING) or contradicts (SUPERSEDING) the verdict + kind structure. At sensemaking Ambiguity 1, the SUPERSEDING alternative (pure surfacing-directive replacing verdict + kind) was tested and rejected on two independent structural mechanisms: (i) uncertain-verdict cannot be expressed as directive-presence (which would lose mode 6's runner-actionable uncertain state); (ii) directive-presence is ambiguous as a detection target for the LAYER 1 mode 6 rule. REFINING was selected; the mode 6 commitment is preserved with kind enrichment. The verdict structure remains canonical.

- **Commitment:** Task-Define is in BOOTSTRAP calibration state (per §4.6); meaning-layer settlements operate from internal-consistency + sister-discipline precedent without empirical mode-firing-rate data.
  - **Source:** `cognitive_harness/task-define/references/task-define.md` §4.6 + reinforced in `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md`
  - **Re-test status:** **INHERITED-WITHOUT-RE-TEST**
  - **Reason:** Calibration-state is a project-wide condition independent of this inquiry's scope. The Bootstrap state is the current factual state; this inquiry inherits it as background. Re-testing would require empirical mode-firing-rate data that doesn't exist yet (acquired through ~10-20 invocations of Task-Define).

- **Commitment:** The dispatch substrate at §2.4 architectural invariant — MQ2's answer carries the dispatch information; the runner extracts (Task-Define perceives, runner acts).
  - **Source:** `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` (original meaning-layer settlement) + `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md` (mode 6's §2.4 commitment)
  - **Re-test status:** **RE-TESTED**
  - **Evidence:** This inquiry's sensemaking Ambiguity 4 explicitly tested whether the reframe preserves the perception/action split. The D4 direct-map alternative (Task-Define outputs /surfacing-shaped input directly) was tested and rejected on two structural grounds: (i) violates perception/action split (Task-Define would be formulating runner-side input); (ii) requires Task-Define to bridge hypothetical-relational stance to concrete-territory selection, which requires project access Task-Define doesn't have. The runner-mediated alignment mechanism (D5) preserves the split. Architectural invariant survives.

- **Commitment:** Task-Define's substrate is task statement + LLM internal cognition only; no external_anchors, no project_goal, no recent_context.
  - **Source:** `cognitive_harness/task-define/references/task-define.md` §1.5 + §1.4 NOT-list categories 2 + 5
  - **Re-test status:** **RE-TESTED**
  - **Evidence:** This inquiry's sensemaking Ambiguity 3 explicitly tested whether the enriched answer (kinds + stance) violates substrate. The hypothetical-relational expression mode is the substrate-compliance vehicle: it expresses stance as type-pattern hypothesis rather than asserted project-state. The assertive-mode alternative was tested and rejected on substrate violation. The substrate constraint survives.

- **Commitment:** Process-layer settlement — Task-Define runs in 3 runtime phases (Reception → per-item Traversal executing 4-stage flow → Assembly); the 4-stage flow is acyclic; one pass per item.
  - **Source:** `devdocs/inquiries/2026-06-04_07-48__task_define_process_layer/finding.md`
  - **Re-test status:** **INHERITED-WITHOUT-RE-TEST**
  - **Reason:** Process-layer is OUT OF SCOPE per this inquiry's Layer Commitment. The process timing of MQ2 firing (Stage 2 of the per-item iteration body) is unchanged by this meaning-layer reframe. No re-test needed.

- **Commitment:** MQ2 occupies Stage 2 of the 4-stage intra-discipline flow; fires first per item; the MQ-answer constraint relation makes Rephrase (Stage 4) depend on MQ answers including MQ2.
  - **Source:** `cognitive_harness/task-define/references/task-define.md` §2.2 + §2.1 Rephrase + `devdocs/inquiries/2026-06-04_07-48__task_define_process_layer/finding.md`
  - **Re-test status:** **INHERITED-WITHOUT-RE-TEST**
  - **Reason:** Stage timing and the MQ-answer constraint relation are process-layer/structural-layer concerns. This inquiry is meaning-layer only. The settlement here doesn't alter when MQ2 fires or how Rephrase consumes MQ answers; it only changes WHAT MQ2 perceives.

---

## Next Actions

### MUST

- **What:** Apply §2.3 MQ2 wording amendment — append worked-examples sub-block illustrating kinds + stance answer; revise MQ2's question wording to reflect the kinds + stance perception target.
  - **Who:** structural-layer follow-up inquiry (user-scheduled); discipline maintainer for the Task-Define spec.
  - **Gate:** condition-bound — apply when the user is ready to commit structural amendments to `cognitive_harness/task-define/references/task-define.md`.
  - **Why:** without this amendment, the spec's MQ2 wording remains the abstract self-contained-vs-external framing the user identified as "weird" — the meaning-layer commitment here is not reflected in the canonical spec text.

- **What:** Apply §2.4 dispatch-substrate commitment amendment — extend the necessary-information-content paragraph to specify the two-element kinds + stance payload + hypothetical-relational expression mode.
  - **Who:** structural-layer follow-up inquiry (user-scheduled); discipline maintainer for the Task-Define spec.
  - **Gate:** condition-bound — apply alongside the §2.3 amendment (same file; can be applied atomically).
  - **Why:** the dispatch substrate's necessary-information-content rule (per mode 6 §2.4 amendment) needs to specify the richer two-element payload so the runner can extract the new content. Without this, runner-side translation logic has no documented contract.

- **What:** Correct the MQ2 paraphrase in `devdocs/what_is_task_define.md` — rewrite "does the LLM need to know the project to do this right, or is the statement self-contained?" to reflect the kinds + stance surfacing-directive substance.
  - **Who:** explanatory-doc maintainer (likely the user or session).
  - **Gate:** condition-bound — apply when convenient; doc is reader-facing, correction is value-additive.
  - **Why:** the user explicitly flagged this paraphrase as "weird" and triggered this entire inquiry from it. The explanatory doc should reflect the settled meaning, not the prior abstract framing.

### COULD

- **What:** Add the stance taxonomy base set + bounded-extensibility rule explicitly to the §2.3 amendment (rather than implicitly inheriting from rule (b)).
  - **Who:** structural-layer follow-up inquiry author.
  - **Gate:** observable — if the implicit inheritance produces ambiguity at runtime (stance subtypes proliferate without clear warrant), make the rule explicit.
  - **Why:** explicit > implicit when the cost is low. The stance taxonomy is novel in this inquiry; making the bounded-extensibility rule explicit reduces the risk of free-form stance descriptions degrading dispatch-substrate consistency.
  - **Depends-on:** MUST item "§2.3 MQ2 wording amendment." This COULD is GATED — do not act until the MUST resolves.

- **What:** Consider future inquiry on whether other Core disciplines (currently /surfacing only is downstream-coupled to Task-Define via MQ2) should have analogous dispatch-substrate carriers via additional meta-questions.
  - **Who:** future user / discipline architect.
  - **Gate:** condition-bound — when a new Core discipline emerges that requires per-item signaling from Task-Define.
  - **Why:** the MQ2 ↔ /surfacing coupling pattern may generalize; capturing it as a pattern would help future cross-discipline coordination design.

### DEFERRED

- **What:** Empirical validation of the kinds + stance + hypothetical-relational substance through ~10-20 Task-Define invocations (per the Bootstrap → Early Operation calibration trajectory at §4.6).
  - **Gate:** observable — when ~10-20 Task-Define invocations have produced MQ2 answers in the new shape, examine: (i) does the hypothetical-relational mode hold in practice (vs LLM slipping into assertive mode)? (ii) does the stance taxonomy's base set cover most real cases (vs runtime extensions firing frequently)? (iii) does runner extraction succeed in formulating /surfacing input from the new content?
  - **Why (if revived):** would calibrate the meaning settlement empirically; could surface refinements to the substance, expression mode, or taxonomy that aren't visible at the meaning layer alone.

---

## Reasoning

The settled meaning was reached by eliminating four structurally-tested alternatives + by accepting the only candidate substance that survived adversarial evaluation on all 6 critical dimensions (substrate-fidelity, mode-6-compatibility, perception/action-split, per-discipline-boundary, correctness, coherence).

### Eliminated alternatives (with reasoning)

**Eliminated alternative 1: M4 baseline (no change from mode 6).** This would have kept MQ2's substance as just verdict + (when yes) one-sentence kind specifier, without the kinds-plural or stance enrichment. *Why rejected:* doesn't address the user's reframe motivation. The user explicitly identified the current binary "self-contained vs external" framing as too vague to enable selective, multi-layer relevance discrimination. Keeping mode 6 baseline ignores the structural gap the user surfaced.

**Eliminated alternative 2: M6 pure surfacing-directive (supersession of mode 6's verdict structure).** This would have replaced verdict + kind with directive-presence — MQ2's answer is either a surfacing-directive (context needed) or absent (no context needed). *Why rejected:* tested at sensemaking Ambiguity 1 on two independent structural mechanisms. (a) Pure-directive cannot express the "uncertain" verdict that mode 6's asymmetric-failure relies on (the uncertain verdict is runner-actionable — runner errs toward /surfacing; pure-directive collapses this to binary presence/absence). (b) Pure-directive is an ambiguous detection target for LAYER 1 mode 6's "missing-dispatch-info" rule (absence-of-directive could mean either "no context needed" or "LLM forgot to emit directive"). The verdict + kind structure provides a clean detection predicate; pure-directive loses it.

**Eliminated alternative 3: D4 direct-map alignment (Task-Define outputs /surfacing-shaped input directly).** This would have had Task-Define emit fields like `purpose: …`, `territory: …` directly in MQ2's answer, bypassing the runner translation step. *Why rejected:* tested at sensemaking Ambiguity 4 on two structural grounds. (a) Violates the perception/action split committed in the mode 6 finding: discipline perceives, runner acts. Direct-map would mean Task-Define is formulating runner-side input. (b) Requires Task-Define to bridge hypothetical-relational stance to concrete /surfacing territory selection. /Surfacing's territory needs to be concrete-bounded (per its §3.2 territory spec); concrete territory selection requires knowing which actual project artifacts exist. Task-Define doesn't have project access. The runner does — that's why the runner is the bridge.

**Eliminated alternative 4: Pure REPAIR intervention-shape for spec amendments.** This would have rewritten §2.3 and §2.4 entirely (not just appended sub-blocks + revised wording). *Why rejected:* tested at innovation's Intervention-Shape-Axis Inversion on structural ground — pure REPAIR contradicts the REFINING relation committed in the substance settlement. REFINING preserves verdict structure + enriches kind; pure REPAIR would override-not-preserve. The two commitments contradict; ADD-CONTENT survives (preserves existing text + appends new content), pure REPAIR fails.

### Why the surviving candidates held

**Substance (the three-element answer with hypothetical-relational mode):** survived because 4 mechanisms converge on it independently — Inversion against alternatives (M4/M6/kinds-only/stance-only); Combination of kinds + stance + hypothetical-relational into cohesive substance; Absence Recognition redesign-level question ("what would exist if MQ2 were designed today") yields the same substance; Domain Transfer parallel from medical triage (triage perceives KIND of case + URGENCY/stance — a similar two-element structure for a similar perception-pre-discrimination task). The convergence is independent (different mechanism grounds), not spurious (not all reading the same upstream input).

**Compatibility relation = REFINING:** survived because it's the only relation that preserves both (i) mode 6's verdict structure including the uncertain case, and (ii) the LAYER 1 mode 6 detection rule's cleanness. SUPERSEDING fails on both; ORTHOGONAL (no-change) doesn't address the user's reframe.

**Alignment mechanism = runner-mediated:** survived because it's the only mechanism that preserves the perception/action split + respects the substrate constraint. Direct-map violates both.

**Pattern scope = MQ2-specific:** survived because MQ2 is uniquely the dispatch-substrate carrier; MQ1 and MQ3 have intra-discipline coupling. Applying the lens to MQ1/MQ3 would collapse a real structural distinction.

**Asymmetric-failure form = lean richer, stop at pre-surfacing:** survived because under-specified MQ2 manifests the user's stated motivation against (blind context-loading), and over-specified MQ2 (specific items) violates substrate + per-discipline boundary. The pre-surfacing cut-off is the operational boundary where richness stops before either failure manifests.

**Stance taxonomy = bounded-extensible:** survived at MED confidence (vs the other commitments at HIGH). Bounded-extensible is the middle path between two failing extremes — free-form (no perception target; consistency degrades) and fixed-closed (over-constrains; misses real subtypes). The bounded-extensible pattern inherits the §2.3 rule (b) extension-qualification structure.

### Critique's adversarial evaluation produced sub-findings (notes for finding's Next Actions)

Critique's prosecution on each surviving candidate constructed multi-axis depth (user-perspective + specification-gap probe + specific-failure-case scenario). Five sub-findings emerged that don't kill or refine the candidates but warrant explicit acknowledgment:

- The stance taxonomy bounded-extensibility implicitly inherits from §2.3 rule (b)'s extension-qualification pattern. Sub-finding: make this inheritance explicit in the §2.3 amendment (covered by the COULD item).
- The kind→purpose / stance→territory mapping table is DESCRIPTIVE (runner-side translation logic), not PRESCRIPTIVE (Task-Define output). Clarified explicitly in §4 above.
- The MQ2-specific scope decision is CURRENT-STATE — applies to MQ1/MQ2/MQ3 as they exist in the current spec. Future ecosystem changes that introduce new cross-discipline couplings for MQ1 or MQ3 warrant separate inquiries. Clarified explicitly in §6 above.
- The three structural amendments are independent file edits without ordering dependency. Clarified explicitly in §7 above.
- The substance commitment doesn't specify an enforcement mechanism for the hypothetical-relational mode (the LLM might slip into assertive mode under context pressure). This is the same internal-discipline-enforcement constraint that all in-substrate disciplines operate under (Surfacing, Sensemaking, etc.); not unique to MQ2. The discipline's framing + the LLM's general substrate-adherence are the enforcement mechanism. No spec amendment needed; the constraint is structural-architectural, not procedural.

---

## Open Questions

### Monitoring

- After ~10-20 Task-Define invocations using the new MQ2 substance, examine: does the hypothetical-relational mode hold in practice? Does the stance taxonomy's base set cover most real cases? Does runner extraction succeed in formulating /surfacing input from the new content? (Covered by the DEFERRED item in Next Actions.)

### Refinement Triggers

- If empirical observation shows stance subtype runtime extensions firing frequently (suggesting the base 4 are insufficient), revisit the taxonomy via a separate inquiry.
- If a new Core discipline emerges that MQ1 or MQ3 starts signaling to, revisit the MQ2-specific scope decision via a separate inquiry.
- If the hypothetical-relational mode is observed to fail in practice (LLM slipping into assertive mode despite the constraint), the §2.3 amendment may need to add an enforcement sub-rule.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
A n implicit need for external context — does the LLM need to know the project to do this right, or is the statement self-contained?


this is a bit weird, it should be like 

does LLM need to surface specific information from the project base? something like "this task already worked on before, it has these artifacts and the current task is fresh start of it, " this is important because AI shouldnt blindly load everything to context, it should be selective and understand the relevance in multiple layers. Thsi is why task-define's job  is to see correct meta questions which can turn into full alignment in surfacing's side...
```

</details>
