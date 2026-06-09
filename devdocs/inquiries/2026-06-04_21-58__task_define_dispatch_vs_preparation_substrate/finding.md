---
status: active
model: claude-opus-4-7[1m]
effort: max
corrects: devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md
---
# Finding: Task-Define MQ2 — Dispatch-Substrate vs Preparation-Substrate (Always-Invoke Premise Test)

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md`

**Revision trigger:** User correction — user critiqued the "Meta-question answers ARE the dispatch substrate" framing in `devdocs/what_is_task_define.md` (which itself was a paraphrase of the prior 21-12 finding's runner-mediated-alignment commitment) with two claims: (a) "the runner always invokes the project's Exploration discipline which is called surfacing... so it doesnt makes sense"; (b) "meta questions are to prepare things in very lightweight way."

**What's preserved:**
- The substance commitment from 21-12 — MQ2's three-element answer (verdict ∈ {yes, no, uncertain} + when verdict=yes/uncertain: kinds-plural + relational-stance + hypothetical-relational expression mode) — survives unchanged. Verified as function-name-independent under the corrected concept.
- The REFINING relation with mode 6's §2.4 commitment from 21-12 — verdict structure preserved; kind specifier enriched.
- The runner-mediated alignment mechanism from 21-12 — Task-Define perceives; runner formulates /surfacing's input. (Just re-grounded as "input-formulation" rather than "invocation-gating.")
- The MQ2-specific scope decision from 21-12 — MQ1/MQ3 retain intra-discipline-coupling identities.

**What's changed:**
- The substrate-role concept name: **"dispatch substrate" → "preparation substrate"** (the architectural concept-name correction).
- The gating-language table in the 21-12 finding's §4: "Verdict = no → /surfacing skipped entirely" is corrected to "Verdict = no → /surfacing invoked with vacuous purpose, returns empty quickly." Same correction for "Stance = fresh-self-contained → /surfacing skipped entirely" → "/surfacing invoked with vacuous territory."
- The mode 6 detection rule's NAME (from 14-14 finding): "MQ2-answer-missing-dispatch-info" → "MQ2-answer-missing-preparation-info." (Rule's structural content unchanged.)
- The perception/action split's action TARGET (architectural invariant from 15-39 + mode 6 findings): action shifts from "decide whether to invoke /surfacing" → "formulate /surfacing's input from MQ2's preparation content." (Split itself preserved.)

**What's new:**
- The always-invoke premise as a structural commitment. /Surfacing is always invoked in the project's standard runner architecture; there is no dispatch decision for the runner to make.
- The function-name-independence principle articulated as a unifying frame for the survival commitments — what we call MQ2's substrate-role doesn't affect what its content carries or how the runner uses it.
- 8 cascading correction targets enumerated (6 MUSTs + 1 COULD plus the +1 §1.5 vocabulary update added at critique-stage REFINE) across the spec, the explanatory doc, and 4 prior task-define findings.

**Migration:** the 21-12 finding's gating-language table (§4) and the 14-14 finding's amendment text are corrected in place via REPAIR + inline supersedes notes pointing to this finding. The 15-39 finding's dispatch-substrate concept introduction gets a SUPERSEDES note (body preserved as historical record). The 17-02 verification finding gets a light terminology update (COULD). The substance commitments from 21-12 survive unchanged; readers consulting either finding should arrive at the same substantive commitment (kinds + stance + hypothetical-relational mode) — only the framing concept-name differs.

---

## Question

From `_branch.md`:

**Question:** Given the user's claim that the runner always invokes `/surfacing` (no dispatch decision to make), is the "dispatch substrate" framing of MQ2's answer at §2.4 of the Task-Define discipline spec (`cognitive_harness/task-define/references/task-define.md`) — propagated through `devdocs/what_is_task_define.md`, the mode 6 inquiry's §2.4 amendment, and the just-completed MQ2 reframe finding's gating language — structurally wrong, and if so, what IS the correct substrate-role concept for MQ2's answer? The inquiry's nine observation targets covered: premise test (is /surfacing always invoked?); dispatch-substrate concept under test; lightweight-stance compatibility; alternative substrate-role candidates (preparation / framing / pre-shape / lightweight-priors / other); effect on mode 6 detection rule; effect on the just-completed MQ2 reframe finding's gating language; effect on the perception/action split; architectural pipeline placement of MQ2; compatibility with the existing substance commitment.

**Goal:** a meaning-layer commitment on (a) the corrected substrate-role concept name + definition + grounding, (b) re-tested mode 6 detection rule status, (c) re-tested MQ2 reframe finding gating-language status, (d) perception/action split status, (e) cumulative effect on the dispatch-substrate framing across the spec, the explanatory doc, and the prior inquiry findings. Structural-followup work (spec amendments + doc corrections + prior-finding corrections) flagged as MUST but OUT OF SCOPE per Layer Commitment.

**Layer Commitment:** meaning-layer only. Structural-layer authoring (drafting the actual spec amendment text, doc rewrites, finding corrections) is OUT OF SCOPE for this inquiry; identified as next-step MUST work.

---

## Finding Summary

- **The user's always-invoke premise is structurally accepted.** /Surfacing is always invoked in the project's standard runner architecture; there is no dispatch decision for the runner to make. Three convergent grounds support acceptance: (a) /surfacing's lightweight spec design makes always-invoke cost-bounded; (b) for self-contained tasks, /surfacing invoked with vacuous purpose returns empty quickly — the runner gets explicit empty-confirmation rather than an unattended skip; (c) the user's direct domain knowledge of the project's runner architecture confirms the actual invocation pattern.

- **The "dispatch substrate" framing of MQ2's answer is therefore precisely-wrong.** "Dispatch" is a technical term with a specific meaning — runtime routing/decision among options. With no decision to make (invocation is unconditional), no dispatch happens. The term is misapplied across `cognitive_harness/task-define/references/task-define.md` §2.4, `devdocs/what_is_task_define.md`'s "Meta-question answers ARE the dispatch substrate" passage, the mode 6 inquiry's §2.4 amendment + §4.2 detection rule (using "dispatch info" terminology), the MQ2 verification inquiry's substance-coverage claims, and the just-completed MQ2 reframe finding's §4 gating-language table.

- **The corrected concept name is "preparation substrate."** MQ2's per-item answer is the lightweight preparation that informs the runner's formulation of `/surfacing`'s input (purpose + territory + bias). The name was selected via three convergent justifications: function-aligned (preparation IS what MQ2's answer does for /surfacing's input formulation); user-language-aligned (user said "prepare things in very lightweight way" — "preparation" maps directly); lightweight-connoted (preparing ≠ executing or routing; the noun phrase carries the lightness that Task-Define's lightweight-stance requires).

- **The substance commitment from the just-completed MQ2 reframe finding (2026-06-04_21-12) survives unchanged.** MQ2's three-element answer — verdict ∈ {yes, no, uncertain} + (when verdict=yes/uncertain) kinds-plural + relational-stance + hypothetical-relational expression mode — serves preparation just as it served the dispatch framing. The substance is function-name-independent: substance elements operate at the runner-translation layer regardless of what we call the substrate-role.

- **The mode 6 detection rule survives with cosmetic rename.** The rule's structural content (binary detection on presence/absence of (verdict + (when verdict=yes) kind content)) is name-independent. Renaming the rule from "MQ2-answer-missing-dispatch-info" to "MQ2-answer-missing-preparation-info" preserves the detection mechanism while aligning vocabulary with the corrected concept. The rule does not fire on verdict=no answers — verdict=no IS the required content; nothing is missing.

- **The perception/action split survives with action target shifted.** Task-Define still PERCEIVES (verdict + kinds + stance); the runner still ACTS — but the action target shifts from "decide whether to invoke /surfacing based on MQ2's verdict" (which makes no sense under always-invoke) to "formulate /surfacing's input from MQ2's preparation content." The architectural invariant (discipline perceives, runner acts) is preserved.

- **The lightweight-stance interpretation applies to the CONCEPT, not the SUBSTANCE.** User's "meta questions are to prepare things in very lightweight way" applies to the substrate-role concept (no heavy routing decision-machinery in the architecture) rather than the substance shape (which the user didn't directly challenge). The just-committed three-element substance remains the right substance shape.

- **Cascading corrections are enumerated as 8 targets** (out of scope per Layer Commitment but flagged for user-scheduled structural-followup work): 6 MUSTs across the spec (§2.4 RENAME + revise; §4.2 mode 6 RENAME + reword amendment; §1.5 vocabulary table UPDATE — added at critique-stage REFINE) + the explanatory doc (REPAIR) + the 21-12 MQ2 reframe finding §4 gating-language table (REPAIR + supersedes note) + the 14-14 mode 6 finding amendment text (REPAIR terminology); plus 1 SUPERSEDES note on the 15-39 original meaning-layer finding's concept introduction; plus 1 COULD light terminology update on the 17-02 MQ2 verification finding.

---

## Finding

### Small surrounding context

This inquiry is part of an ongoing development arc on Task-Define — a cognitive discipline (defined at `cognitive_harness/task-define/references/task-define.md`) whose job is to take a compact task statement and expand it into a defined task. Among Task-Define's five operations (Itemize, Meta-question, Deconstruct, MultiScope, Rephrase), the Meta-question operation applies three canonical questions per item: MQ1 (scope), MQ2 (context-need), MQ3 (intent).

MQ2 is structurally unique: its answer carries information used downstream by the project's `/surfacing` discipline (a sister discipline at `cognitive_harness/surfacing/`, which draws relevance-tagged items from a bounded territory). Multiple prior inquiries established this downstream coupling:

- **`devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/`** introduced an architectural concept called "dispatch substrate" — the idea that MQ2's answer carries info the runner reads to decide whether to invoke `/surfacing`.
- **`devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/`** committed a §2.4 spec amendment specifying that MQ2's answer must carry verdict ∈ {yes, no, uncertain} + (when verdict=yes) a kind specifier (the "dispatch info" the runner reads to decide).
- **`devdocs/inquiries/2026-06-04_17-02__task_define_mq2_shape_thoroughness_check/`** verified the mode 6 amendment covered the dispatch-substrate concerns.
- **`devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/`** committed a richer substance for MQ2 (kinds + stance + hypothetical-relational expression mode) and described the runner-mediated alignment with explicit gating language: "verdict=yes/uncertain → triggers /surfacing invocation; verdict=no → /surfacing skipped entirely."

After 21-12 closed, an explanatory doc (`devdocs/what_is_task_define.md`) was written to explain Task-Define to readers, including a paragraph captioned "Meta-question answers ARE the dispatch substrate." When the user read this paragraph, they flagged it as "weird": **the runner always invokes /surfacing** (in the project's actual runner architecture), so there is no dispatch decision for the runner to make — and meta-questions are meant to "prepare things in very lightweight way," not to carry heavy routing information.

This inquiry tests that critique, accepts the always-invoke premise, replaces the "dispatch substrate" concept with **"preparation substrate"**, verifies that the substance + rule + split commitments survive the concept correction, and enumerates the cascading corrections across the spec, the explanatory doc, and the four prior findings.

The Layer Commitment restricts this inquiry to meaning-layer settlement; the actual spec amendments and finding corrections are downstream MUST work the user schedules.

### 1. The always-invoke premise

The user's critique opens with a factual claim: **the runner always invokes the project's `/surfacing` discipline.** In the project's standard runner architecture, /surfacing is a pipeline step that runs every time, regardless of MQ2's answer. The runner doesn't read MQ2 and then DECIDE whether to invoke /surfacing; it invokes /surfacing and lets /surfacing operate on whatever input the runner formulates from MQ2's answer (plus the territory the runner has access to).

The inquiry accepts this premise on three convergent structural grounds:

**(a) /Surfacing's lightweight design.** The /surfacing discipline's own spec (at `cognitive_harness/surfacing/references/surfacing.md`) describes the discipline as lightweight; its cost on an empty or vacuous-territory invocation is bounded — quick empty result. The premise that /surfacing always runs is consistent with /surfacing's design. Conditional-invocation would require additional decision-machinery at the runner layer without clear benefit (decision-machinery that the user's lightweight-stance for Task-Define explicitly argues against).

**(b) Cost-bounded empty invocations.** For a task that's genuinely self-contained (e.g., "explain pure functions in JavaScript"), /surfacing invoked with vacuous purpose (no specific kinds to bias toward) returns empty quickly. The runner gets an explicit empty-confirmation, which is structurally cleaner than an unattended skip — empty-confirmation is observable; skip is silent.

**(c) Runner-architecture knowledge.** The user works directly with the project's runner; their domain knowledge of the actual invocation pattern is the most direct evidence available at the meaning-layer. The inquiry treats this as one ground among three, not the sole ground.

**Falsification criterion** (added at critique-stage as a sub-finding): the always-invoke premise would falsify if a runner with conditional /surfacing invocation existed AND that pattern were structurally preferred over always-invoke. This criterion is implicit in the three-ground argument but worth surfacing explicitly — future inquiries can test the premise against any new runner architecture by checking these two conditions.

### 2. Why "dispatch substrate" is precisely-wrong

"Dispatch" is a technical term with a specific meaning in software architecture: **runtime routing or decision among options.** A dispatch substrate carries the information used to make that routing decision.

Under the accepted always-invoke premise, there is no routing decision. The runner doesn't choose among options (invoke /surfacing vs skip /surfacing); /surfacing is unconditionally invoked. No dispatch happens.

The "dispatch substrate" framing therefore misapplies a precise technical term — it treats MQ2's answer as if it carries routing information when in fact it carries something else (information used to formulate /surfacing's input). The misapplication isn't merely cosmetic; it propagates architecturally:

- The §2.4 spec wording says "the runner reads to decide whether to invoke the project's Exploration discipline" — describing a decision that doesn't exist.
- The mode 6 detection rule at §4.2 is named "MQ2-answer-missing-dispatch-info" — invoking dispatch-vocabulary.
- The MQ2 verification finding at 17-02 frames mode 6's coverage in terms of "dispatch detection."
- The MQ2 reframe finding at 21-12 explicitly committed gating language: "verdict=yes/uncertain triggers /surfacing invocation; verdict=no skips /surfacing entirely" — using dispatch-style verdicts to gate invocation.
- The explanatory doc paraphrases the framing as "Meta-question answers ARE the dispatch substrate."

The critique surfaces that this is structurally incorrect everywhere it appears.

### 3. The corrected concept: preparation substrate

The corrected substrate-role concept is **PREPARATION SUBSTRATE**: MQ2's per-item answer is the lightweight preparation that informs the runner's formulation of `/surfacing`'s input (purpose + territory + bias).

Three convergent justifications support the chosen name:

**(a) Function-aligned.** MQ2's answer does not route or decide; it prepares /surfacing's input. The kinds element (one or more types of load-bearing information) tells the runner what to bias /surfacing's relevance-attribution toward. The stance element (continuation / fresh-start-of-prior / reference-to / fresh-self-contained) tells the runner what relational framing to apply to /surfacing's territory selection. The verdict element (yes/no/uncertain) tells the runner what kind of context-need to expect. All three serve formulation, not routing. "Preparation" captures the function.

**(b) User-language-aligned.** The user said "prepare things in very lightweight way." "Preparation" maps directly to "prepare." The user's framing is preserved in the name.

**(c) Lightweight-connoted.** Preparing is not executing or routing; the noun phrase carries the lightness that Task-Define's lightweight-stance requires (paragraph per operation; no sub-machinery). The name embeds the architectural property the user wants preserved.

Alternative names considered and rejected on structural grounds:

- **"Input substrate"** — terse and function-accurate but loses the lightweight nuance. Sounds more like data-passing than prepared content.
- **"Framing substrate"** — too broad. Framing connotes context-setting beyond MQ2's per-item scope.
- **"Pre-shape input"** — awkward as a noun phrase; less linguistically clean.
- **"Lightweight-priors"** — emphasizes lightness over function. Function should lead naming for architectural precision; modifier-led names emphasize the modifier over what's being modified.

A fifth candidate surfaced at critique-stage as a sub-finding-worth-mentioning: **"Lightweight substrate"** (combines "lightweight" with "substrate"; arguably even closer to user's "lightweight way"). Rejected on the same principle: modifier-led naming weakens the function anchor. "Lightweight" is preserved as the architectural property (via the lightweight-stance commitment), not embedded in the substrate-role's name.

### 4. The function-name-independence principle

The survival of three prior commitments (substance + mode 6 rule + perception/action split) under the concept correction rests on a single principle: **what we call MQ2's substrate-role doesn't affect what its content carries or how the runner uses it.** The substance elements operate at the runner-translation layer regardless of substrate-role naming. The detection rule operates on presence/absence of required content regardless of substrate-role naming. The perception/action split operates on which agent does what regardless of substrate-role naming.

This is the **function-name-independence principle**. Each survival commitment below is an application of it.

**Falsification criterion** (added at critique-stage): function-name-independence would falsify if any runner-translation logic referenced the term "dispatch" specifically (vs the substance elements themselves). If the runner's purpose-formulation logic said "if dispatch verdict = yes, then ..." rather than "if MQ2's verdict = yes, then ...", the concept name would be load-bearing and renaming it would break the translation. Inspection confirms no such reference exists; translation maps work on the substance elements directly.

### 5. The substance commitment survives unchanged

The MQ2 reframe finding (2026-06-04_21-12) committed MQ2's substance as a three-element answer:

- **Verdict** ∈ {yes, no, uncertain} — perceived context-need
- **Kinds-plural** (when verdict=yes/uncertain) — one or more types of load-bearing information
- **Relational stance** (when verdict=yes/uncertain) — one of {continuation, fresh-start-of-prior, reference-to, fresh-self-contained} with bounded-extensibility for runtime-perceived subtypes
- **Hypothetical-relational expression mode** — the LLM perceives "this kind of task typically has this stance possibility" rather than asserting specific project state

Under the corrected concept (preparation substrate), this substance serves preparation just as it served the dispatch framing:

- Verdict tells the runner what kind of context-need to expect (preparation signal)
- Kinds tell the runner what to bias /surfacing toward (input formulation)
- Stance tells the runner what relational framing to apply to /surfacing's territory (input formulation)
- Hypothetical-relational mode keeps the substance substrate-compliant (no project-state assertion at Task-Define layer)

Each element is function-name-independent in mechanism. The substance is the PREPARATION CONTENT; the concept correction is at the substrate-role NAME (what we call MQ2's answer's role); not at what the answer carries.

The substance simplification alternative (revert toward mode 6's verdict + one-sentence kind only) was tested at sensemaking and rejected on textual trace (the user critiqued the concept, not the substance) + commitment-preservation (the 21-12 finding's substance was committed at HIGH confidence after extensive sensemaking; reverting requires new evidence the user didn't provide).

### 6. The mode 6 detection rule survives with cosmetic rename

LAYER 1 mode 6 in the Task-Define spec (at §4.2 of the spec, amended by the 14-14 mode 6 inquiry) detects "MQ2-answer-missing-dispatch-info." The rule's structural content is binary detection: an MQ2 answer fires mode 6 when it lacks the required content — verdict missing, OR (when verdict=yes) kind specifier missing.

This rule's content is **name-independent**. The same predicate (presence/absence of verdict + (when yes) kind) operates whether we call MQ2's answer "dispatch info" or "preparation info." Renaming the rule to "MQ2-answer-missing-preparation-info" preserves the detection mechanism while aligning vocabulary with the corrected concept. No substantive rule changes; only naming.

**Sub-finding** (added at critique-stage): the rule does NOT fire on verdict=no answers. When verdict=no is the answer, kind/stance content is NOT REQUIRED (the rule's structure is "verdict + (when verdict=yes) kind"). Verdict=no IS the required content; nothing missing. This holds under both dispatch and preparation framings — an edge case implicit in the rule's structure but worth surfacing.

### 7. The perception/action split survives with action target shifted

The architectural invariant from the original meaning-layer settlement (15-39 finding) and the mode 6 finding (14-14) — that Task-Define PERCEIVES while the runner ACTS — is preserved under the corrected concept.

What shifts is what the runner's action TARGETS:

- **Under the dispatch framing (incorrect):** runner acts by deciding whether to invoke /surfacing based on MQ2's verdict.
- **Under the preparation framing (corrected):** runner acts by formulating /surfacing's input from MQ2's preparation content (kinds → purpose + bias; stance → territory selection + framing).

Translation logic varies per runner (out-of-scope per Task-Define spec §2.4 "runner-side extraction protocol"); the architectural split itself — discipline perceives, runner acts — is unchanged. Even mechanical translation is an action; the split is preserved, just redirected.

The dissolution alternative (split dissolves under always-invoke because there's nothing to decide) was tested at sensemaking and rejected: formulation IS action — the runner reads MQ2's preparation content + DECIDES how to translate that into /surfacing's purpose + territory + bias. Translation decisions can vary across runners. Even mechanical translation is an action; "mechanical" doesn't equal "absent."

### 8. The lightweight-stance interpretation is concept-level only

The user's "meta questions are to prepare things in very lightweight way" applies to the **substrate-role concept** (no heavy routing decision-machinery in the architecture) rather than the **substance shape** (which the user didn't directly challenge in this critique).

The textual trace supports this interpretation: the user's "lightweight way" clause follows the dispatch-concept critique ("doesnt makes sense ... meta questions are to prepare things in very lightweight way"). The two clauses are sequential; the second modifies the first. The user's critique is about the CONCEPT being too heavy (routing implications) — the proposed correction is a LIGHTER concept (preparation, which doesn't carry routing implications).

The just-committed substance from 21-12 (verdict + kinds + stance + hypothetical-relational mode) remains the right substance shape. Substance simplification would discard committed work without new evidence.

### 9. The cascading corrections (8 targets)

This meaning-layer settlement implies 8 cascading corrections across the spec, the explanatory doc, and 4 prior task-define findings. Per the Layer Commitment, **structural-amendment authoring is OUT OF SCOPE** for this inquiry; this section enumerates targets + intervention shapes + severity, but the user schedules the actual authoring.

**MUST corrections (7):**

| # | Target file | Intervention shape | Content |
|---|---|---|---|
| 1 | `cognitive_harness/task-define/references/task-define.md` §2.4 | **RENAME + revise wording** | Rename "dispatch substrate" → "preparation substrate" throughout §2.4. Revise "the runner reads to decide whether to invoke the project's Exploration discipline" → "the runner reads to formulate the project's Exploration discipline's input (purpose + territory + bias)." Preserve all other §2.4 content (necessary-information-content commitment; perception/action split; runner-side extraction protocol noted as out-of-scope). |
| 2 | Same file §4.2 mode 6 row | **RENAME + reword amendment text** | Rename mode 6 from "MQ2-answer-missing-dispatch-info" → "MQ2-answer-missing-preparation-info." Reword the detection-rule text (per the 14-14 amendment) to drop "dispatch" terminology. Preserve all detection-mechanism substance (binary detection on verdict + kind presence/absence). |
| 3 | Same file §1.5 vocabulary table | **UPDATE entry** | Update the "dispatch substrate" vocabulary entry: rename to "preparation substrate"; revise the definition from "the per-item meta-question answers themselves, which carry the information a runner uses to decide whether the project's Exploration discipline should be invoked" → "the per-item meta-question answers themselves, which carry the preparation content a runner uses to formulate the project's Exploration discipline's input." (Added at critique-stage REFINE; vocabulary table is the canonical definition source.) |
| 4 | `devdocs/what_is_task_define.md` "Meta-question answers ARE the dispatch substrate" passage | **REPAIR** | Rewrite the passage to (a) drop "dispatch substrate" and replace with "preparation substrate"; (b) clarify that /surfacing is always invoked in the project's standard runner architecture; (c) reframe MQ2's role as preparing /surfacing's input rather than gating its invocation; (d) keep the lightweight-stance framing intact. |
| 5 | `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md` §4 gating-language table | **REPAIR + supersedes note** | Correct the gating-language table: "Verdict = yes (or uncertain) | Triggers /surfacing invocation (verdict = no skips /surfacing)" → "Verdict = yes or uncertain → /surfacing invoked with kinds-derived purpose + stance-derived territory; verdict = no → /surfacing invoked with vacuous purpose, returns empty quickly." For the stance=fresh-self-contained line: "→ /surfacing skipped entirely" → "→ /surfacing invoked with vacuous territory; returns empty quickly." Add inline supersedes note at the section pointing to this finding. Preserve all substance commitments (verdict + kinds + stance + hypothetical-relational mode) intact. |
| 6 | `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md` amendment text | **REPAIR terminology** | Update the amendment text to use "preparation info" / "preparation substrate" instead of "dispatch info" / "dispatch substrate." Reword the §4.2 mode 6 recognition-column predicate to drop dispatch terminology. Preserve detection-mechanism substance unchanged. Add inline supersedes/corrects note pointing to this finding. |
| 7 | `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` concept introduction | **SUPERSEDES note** | Add inline supersedes note at the section that introduces the "dispatch substrate" architectural concept, pointing to this finding as the corrected-concept reference. Do NOT rewrite the body — historical-record preservation. The note redirects future readers to the corrected concept while the original finding stands as the record of the original meaning-layer commitment. |

**COULD correction (1):**

| # | Target file | Intervention shape | Content |
|---|---|---|---|
| 8 | `devdocs/inquiries/2026-06-04_17-02__task_define_mq2_shape_thoroughness_check/finding.md` | **UPDATE terminology (light)** | Update verification finding's references to "dispatch substrate" / "dispatch info" → "preparation substrate" / "preparation info." Substance verification (mode 6 covers refinement #4's three concerns) survives untouched — verification's substantive content is concept-name-independent. Lighter correction because the verification's substantive claims don't depend on the dispatch framing. |

**Historical-preservation strategy:** the intervention shapes vary by finding-age/centrality. The recent active findings (21-12 reframe + 14-14 mode 6) get REPAIR + supersedes note (preserves change-history rather than original-text — the corrections are active rather than archival). The older foundational finding (15-39 original) gets SUPERSEDES note only (body preserved as historical record; the note redirects future readers). The verification finding (17-02) gets UPDATE terminology (lightest; substance verification is concept-name-independent so only terminology surfaces are affected).

**§2.4 + §4.2 + §1.5 application priority:** these three spec amendments are co-located in the same file and can be applied atomically in one edit session. Atomic application avoids the inconsistency window where the spec internally references both "dispatch" and "preparation."

---

## Inherited Commitments Re-test

This inquiry's `_branch.md` declares a Synthesis Trigger listing 4 prior outputs whose commitments are inherited and must be re-tested under the corrected concept. The CONCLUDE protocol mandates this `## Inherited Commitments Re-test` section.

### Commitments inherited from `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` (original meaning-layer settlement)

- **Commitment:** "Dispatch substrate" as the architectural concept name for MQ2's answer's substrate-role.
  - **Source:** 15-39 finding's introduction of the dispatch-substrate concept at §2.4 of the Task-Define spec.
  - **Re-test status:** **RE-TESTED** (and **corrected**)
  - **Evidence:** sensemaking Ambiguity 2 explicitly tested the dispatch-substrate naming on structural grounds. The semantic broadening alternative (keep "dispatch" with broader semantic) failed on precision-loss cost. The corrected concept "preparation substrate" was selected via three-axis justification (function-aligned + user-language-aligned + lightweight-connoted). The 15-39 finding's concept introduction gets a SUPERSEDES note as a downstream correction (P3-MUST #7).

- **Commitment:** Perception/action split as architectural invariant — Task-Define perceives, runner acts.
  - **Source:** 15-39 finding's commitment, reinforced in 14-14 mode 6 finding's §2.4 amendment.
  - **Re-test status:** **RE-TESTED** (and **preserved with action-target shift**)
  - **Evidence:** sensemaking Ambiguity 6 explicitly tested whether the split survives under always-invoke. Defense argued: formulation IS action; action target shifts from invocation-decision to input-formulation; split itself preserved. The architectural invariant survives intact.

### Commitments inherited from `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md` (mode 6 detection rule)

- **Commitment:** §2.4 amendment specifying MQ2's answer carries verdict ∈ {yes, no, uncertain} + (when verdict=yes) kind specifier (described as "dispatch info").
  - **Source:** 14-14 finding's §2.4 amendment.
  - **Re-test status:** **RE-TESTED** (substance preserved; terminology corrected)
  - **Evidence:** sensemaking Ambiguity 3 explicitly tested whether mode 6 detection rule survives the concept correction. The rule's structural content (binary detection on verdict + (when yes) kind presence/absence) is name-independent. Substance survives unchanged; the amendment text gets terminology correction (P3-MUST #6) to drop dispatch language.

- **Commitment:** §4.2 mode 6 detection rule for "MQ2-answer-missing-dispatch-info."
  - **Source:** 14-14 finding's §4.2 recognition column amendment.
  - **Re-test status:** **RE-TESTED** (mechanism preserved; rule renamed)
  - **Evidence:** same as above — the rule's detection mechanism is name-independent. Rule renamed to "MQ2-answer-missing-preparation-info" (P3-MUST #2). Sub-finding: rule does not fire on verdict=no answers (verdict=no IS the required content; nothing missing).

### Commitments inherited from `devdocs/inquiries/2026-06-04_17-02__task_define_mq2_shape_thoroughness_check/finding.md` (MQ2 verification)

- **Commitment:** Mode 6's §2.4 amendment fully covers refinement #4's three concerns (authoring sufficiency; runner extraction; mode 6 detection).
  - **Source:** 17-02 finding's verification verdict.
  - **Re-test status:** **INHERITED-WITHOUT-RE-TEST** (the SUBSTANTIVE verification — that mode 6 covers refinement #4's three concerns — is concept-name-independent; the verification's substance survives the concept correction)
  - **Reason:** the verification's substantive content (sentence-level textual trace + substance-vs-stylistic distinction) doesn't depend on the dispatch framing. Only terminology surfaces in the verification finding are affected. Terminology update is a COULD correction (P3-COULD #8). Re-testing the verification's substantive claims would relitigate already-settled work without new evidence.

### Commitments inherited from `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md` (MQ2 reframe — directly corrected by this finding)

- **Commitment:** MQ2's substance = verdict ∈ {yes, no, uncertain} + (when verdict=yes/uncertain) two-element content payload (kinds-plural + relational stance) expressed in hypothetical-relational mode.
  - **Source:** 21-12 finding's substance commitment.
  - **Re-test status:** **RE-TESTED** (and **preserved unchanged**)
  - **Evidence:** sensemaking Ambiguity 4 explicitly tested whether the substance survives the concept correction. The four substance elements (verdict + kinds + stance + hypothetical-relational mode) each serve preparation just as they served dispatch — function-name-independent. The substance simplification alternative was tested at Ambiguity 5 and rejected (user critiqued the concept, not the substance). Substance is preserved.

- **Commitment:** REFINING compatibility relation with mode 6's §2.4 commitment.
  - **Source:** 21-12 finding's compatibility commitment.
  - **Re-test status:** **INHERITED-WITHOUT-RE-TEST** (the REFINING relation is between the 21-12 substance enrichment and mode 6's prior commitment; both endpoints survive the concept correction with substance unchanged)
  - **Reason:** REFINING is an enrichment-not-rewrite relation. Both mode 6's commitment (verdict + kind) and 21-12's enrichment (verdict + kinds-plural + stance) survive the concept correction unchanged. The REFINING relation between them is therefore also unchanged.

- **Commitment:** Runner-mediated alignment mechanism (Task-Define perceives, runner formulates /surfacing's input).
  - **Source:** 21-12 finding's alignment-mechanism commitment.
  - **Re-test status:** **RE-TESTED** (and **preserved unchanged**)
  - **Evidence:** sensemaking Ambiguity 4 + 6 jointly tested. The mechanism's structure (Task-Define perceives substance elements; runner translates substance to /surfacing's purpose + territory + bias) is concept-name-independent. The alignment mechanism survives intact.

- **Commitment:** §4 gating-language table — "verdict=yes/uncertain → triggers /surfacing invocation; verdict=no → /surfacing skipped entirely."
  - **Source:** 21-12 finding's §4 table.
  - **Re-test status:** **RE-TESTED** (and **CORRECTED — this is the load-bearing reason this finding declares `corrects:` 21-12 in frontmatter**)
  - **Evidence:** sensemaking Ambiguity 1 accepted the always-invoke premise; under always-invoke, the gating language "skips /surfacing" is incorrect (no skipping occurs). The corrected gating language re-grounds the table as input-formulation: "verdict=no → /surfacing invoked with vacuous purpose, returns empty quickly." Same for the stance=fresh-self-contained line. Correction applied as P3-MUST #5 (REPAIR + supersedes note pointing to this finding).

- **Commitment:** MQ2-specific scope (MQ1/MQ3 retain intra-discipline-coupling identities).
  - **Source:** 21-12 finding's scope commitment.
  - **Re-test status:** **INHERITED-WITHOUT-RE-TEST**
  - **Reason:** scope decision is structurally independent of the dispatch-vs-preparation concept correction. MQ2's uniqueness as the dispatch-substrate / preparation-substrate carrier (vs MQ1/MQ3's intra-discipline coupling) holds under either framing. Re-testing would not change the outcome.

- **Commitment:** Asymmetric-failure operational form for MQ2 — lean richer, stop at pre-surfacing.
  - **Source:** 21-12 finding's operational-form commitment.
  - **Re-test status:** **INHERITED-WITHOUT-RE-TEST**
  - **Reason:** the operational form (lean richer / stop at pre-surfacing) is about substance-shape boundaries (more kinds + stance; don't name specific items). Substance-shape boundaries are independent of substrate-role concept-name. The form survives the concept correction.

---

## Next Actions

### MUST

- **What:** Apply §2.4 + §4.2 + §1.5 spec amendments to `cognitive_harness/task-define/references/task-define.md` atomically — rename "dispatch substrate" → "preparation substrate" in §2.4 + revise §2.4 wording from "decide whether to invoke" → "formulate input from"; rename mode 6 at §4.2 from "MQ2-answer-missing-dispatch-info" → "MQ2-answer-missing-preparation-info" + reword amendment text; update §1.5 vocabulary table entry.
  - **Who:** structural-layer follow-up inquiry author (user-scheduled); spec maintainer.
  - **Gate:** condition-bound — apply when user is ready to commit structural amendments to the Task-Define spec.
  - **Why:** without these amendments, the spec internally retains the dispatch-substrate concept that this finding identifies as precisely-wrong. §2.4 + §4.2 + §1.5 are co-located and should be applied atomically to avoid an inconsistency window.

- **What:** REPAIR the "Meta-question answers ARE the dispatch substrate" passage in `devdocs/what_is_task_define.md` to reflect the preparation-substrate framing.
  - **Who:** explanatory-doc maintainer.
  - **Gate:** condition-bound — apply when convenient; doc is reader-facing.
  - **Why:** this passage is what the user explicitly critiqued. The doc should reflect the corrected concept.

- **What:** REPAIR the §4 gating-language table in `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md` and add inline supersedes note pointing to this finding.
  - **Who:** finding maintainer (likely the user).
  - **Gate:** condition-bound — apply alongside spec amendments or as a separate edit.
  - **Why:** the 21-12 finding's gating-language table contains the most direct contradiction of the corrected concept (the "skips /surfacing" wording). Inline correction + supersedes note preserves the change-history.

- **What:** REPAIR terminology in `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md` amendment text + add inline supersedes/corrects note.
  - **Who:** finding maintainer.
  - **Gate:** condition-bound.
  - **Why:** the 14-14 finding's amendment text uses dispatch terminology throughout. Update keeps the finding's substance (the mode 6 detection rule's structural content) while aligning vocabulary.

- **What:** Add SUPERSEDES note at the dispatch-substrate concept introduction in `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md`. Do NOT rewrite the body.
  - **Who:** finding maintainer.
  - **Gate:** condition-bound.
  - **Why:** the 15-39 finding is the original introduction of the concept; preserving its body as historical record while adding a note redirecting future readers preserves the development arc's history.

### COULD

- **What:** UPDATE terminology (light) in `devdocs/inquiries/2026-06-04_17-02__task_define_mq2_shape_thoroughness_check/finding.md`.
  - **Who:** finding maintainer.
  - **Gate:** condition-bound — apply when convenient; lower priority than the MUSTs.
  - **Why:** the verification finding's substantive claims are concept-name-independent; only terminology surfaces are affected. Lighter update than the MUSTs.

- **What:** Consider future inquiry on whether the function-name-independence principle articulated here is portable to other architectural-concept corrections in the cognitive harness.
  - **Who:** future user / discipline architect.
  - **Gate:** condition-bound — when another concept-name correction surfaces and the principle could prevent re-relitigation of substance commitments.
  - **Why:** the principle could prevent substance-discarding when a concept-name turns out to be wrong; capturing it as a reusable pattern would help future architectural corrections.

### DEFERRED

- **What:** Empirical observation of the always-invoke premise via examination of the project's runner architecture artifacts.
  - **Gate:** observable — when runner-architecture artifacts (e.g., runner source code, runner pipeline configuration) are inspected, verify that /surfacing is invoked unconditionally as the standard pipeline pattern.
  - **Why (if revived):** would convert the always-invoke premise from MED-HIGH confidence (structurally defensible + user domain knowledge) to HIGH confidence (empirically verified). The falsification criterion stated in this finding's §1 provides the test predicate.

---

## Reasoning

The settled meaning was reached by accepting the user's always-invoke premise on three convergent structural grounds, then deriving the corrected concept "preparation substrate" via three-axis selection, then verifying the function-name-independence of three prior commitments (substance + mode 6 rule + perception/action split), then enumerating the 8 cascading corrections + scope decision.

### Why the user's premise was accepted (not rejected)

The premise-rejection alternative — that /surfacing is conditionally invoked under some runner pattern that justifies the dispatch framing — was tested at sensemaking Ambiguity 1 and rejected. Three structural grounds converged on acceptance:

- /Surfacing's lightweight design makes always-invoke cost-bounded; conditional-invocation would require additional decision-machinery the user's lightweight-stance argues against.
- Self-contained tasks get explicit empty-confirmation from vacuous-purpose /surfacing — structurally cleaner than silent skip.
- User's domain knowledge of the actual runner architecture confirms always-invoke as the pattern.

Confidence: MED-HIGH (relies partly on user knowledge; falsification criterion surfaced for future verification).

### Why "preparation substrate" was selected (not alternative names)

Alternative names were tested at sensemaking Ambiguity 2 + Load-bearing concept test. Each rejected on structural grounds:

- **"Dispatch substrate" (status quo, semantic broadening):** rejected on precision-loss cost. Broadening "dispatch" introduces architectural ambiguity.
- **"Input substrate":** terser and function-accurate but loses the lightweight nuance; sounds like data-passing.
- **"Framing substrate":** too broad; framing connotes context-setting beyond MQ2's per-item scope.
- **"Pre-shape input":** awkward as a noun phrase.
- **"Lightweight-priors":** emphasizes lightness over function; function should lead naming.
- **"Lightweight substrate"** (critique-stage alternative): modifier-led naming weakens the function anchor; "lightweight" is the architectural property, not the substrate-role's name.

"Preparation substrate" survived all alternatives on three-axis convergence (function + user-language + lightweight-connotation).

### Why three prior commitments survive (not need restructuring)

Three prior commitments were challenged at sensemaking with their respective negations:

- **Substance survives** (sensemaking Ambiguity 4 + 5): tested substance simplification (back toward mode 6's verdict + one-sentence kind). Rejected on textual trace (user critiqued the concept, not the substance) + commitment-preservation (21-12 substance was committed at HIGH confidence after extensive sensemaking).
- **Mode 6 rule survives with rename** (sensemaking Ambiguity 3): tested rule replacement under preparation framing. Rejected on substance-vs-name distinction — rule's structural content (binary detection on verdict + kind) is name-independent.
- **Perception/action split survives with action target shift** (sensemaking Ambiguity 6): tested split dissolution under always-invoke. Rejected — formulation IS action; action target shifts but split itself preserved.

The unifying principle (function-name-independence) makes the three survivals coherent rather than three separate claims.

### Why cascading corrections enumerated (not deferred or limited to spec)

The spec-only scope alternative (correct only the spec, leave prior findings as historical records) was tested at sensemaking Ambiguity 7 and rejected on future-coherence concern: future authors inheriting the prior findings would re-encounter the wrong concept without correction notes.

The cascade scope was expanded at critique-stage from 7 to 8 targets after a cascade-completeness sub-finding caught the missed §1.5 vocabulary table entry. Vocabulary table is the canonical definition source for the term; updating it is MUST-priority.

Alternative intervention shapes for the corrections were tested at innovation's Intervention-Shape-Axis Inversion:

- **REVERT-REGRESSION on 21-12 finding** (roll back to mode 6 baseline): rejected — would discard HIGH-confidence substance work without new evidence.
- **DO-NOTHING on prior findings** (only correct spec): rejected on future-coherence (same as sensemaking Ambiguity 7).
- **Pure REPAIR everywhere** (rewrite even 15-39 finding body): rejected on historical-record preservation (15-39 is the historical record of the original meaning-layer commitment; rewriting destroys the record).

The mix of RENAME / REPAIR / SUPERSEDES note / UPDATE terminology survives all three alternative-shape tests on structural grounds.

### Critique's sub-finding contributions

Critique's adversarial evaluation produced 7 sub-findings now incorporated into this finding:

- (1) Falsification criterion for the always-invoke premise (in §1 above).
- (2) "Lightweight substrate" mentioned as considered-and-noted alternative (in §3 above).
- (3) Falsification criterion for function-name-independence (in §4 above).
- (4) §2.4 + §4.2 + §1.5 cascading-correction priority (atomic application; noted in §9 above).
- (5) Mode 6 does not fire on verdict=no answers (in §6 above).
- (6) Added §1.5 vocabulary table update as 8th cascading correction target (P3 REFINE; in §9 above).
- (7) Historical-preservation strategy varies by finding-age (REPAIR + supersedes for recent active; SUPERSEDES note only for historical-record; in §9 above).

---

## Open Questions

### Monitoring

- After the cascading corrections are applied, verify cross-file consistency by checking that no remaining "dispatch substrate" / "dispatch info" references exist in `cognitive_harness/task-define/` + `devdocs/what_is_task_define.md` + the 4 prior findings.
- If the user inspects the project's runner architecture artifacts (per the DEFERRED action item above), update the always-invoke premise confidence from MED-HIGH to HIGH if empirically confirmed.

### Refinement Triggers

- If a runner with conditional /surfacing invocation appears AND is structurally preferred over always-invoke, the always-invoke premise falsifies — re-open this inquiry to re-test the dispatch-vs-preparation concept correction.
- If any runner-side translation logic is observed to reference "dispatch" specifically (vs the substance elements), the function-name-independence principle falsifies — re-open to re-test substance survival.
- If the §1.5 vocabulary table reveals additional dispatch references during the structural-amendment phase (beyond the single entry currently identified), expand the cascading corrections list.

### Research Frontiers

- The function-name-independence principle articulated in §4 may be portable to other architectural-concept corrections across the cognitive harness. Whether the principle generalizes to all concept-name corrections OR is specific to substrate-role concepts is open.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Meta-question answers ARE the dispatch substrate. The runner needs to know whether to invoke the project's Exploration discipline (which fetches external context). Task-Define does NOT emit a separate needs_external_context: bool field. Instead, the MQ2 answer (the context-need question) carries the information, and the runner reads it.

part is weird, the runner always  invoke the project's Exploration discipline  which is called surfacing...  so it doesnt makes sense...

meta questions are to prepare things in very lightweight way..
```

</details>
