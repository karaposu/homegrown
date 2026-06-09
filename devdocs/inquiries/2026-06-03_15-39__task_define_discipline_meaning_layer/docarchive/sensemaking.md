## User Input

`devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/_branch.md` (prior consumed: `surfacing.md` — 57 items across 9 regions A–H + I confirmed-absent; 9 frontier flags F1–F9; F1 lightweight enforcement + F7 NOT-list intrinsic grounding flagged load-bearing-first)

---

# Sensemaking — Task-Define (Meaning Layer, From Scratch)

## SV1 — Baseline understanding
"Task-Define is the discipline name + 3-then-5 operations + lightweight stance + a dynamic relationship with Exploration via meta-question answers. The user named the 5 operations across the iteration; Meta-question runs first per item to constrain Rephrase last; no fidelity verdict; no external anchor inputs."

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints:**
- **C1 — Layer = MEANING.** Structural and Process layers are out of scope (sequential next-runs).
- **C2 — "From scratch" mandate.** The prior IE arc (7+ inquiries) is informational context being DEPARTED FROM; its commitments are NOT inherited. The `## Inherited Commitments Re-test` obligation does not apply.
- **C3 — Lightweight stance is load-bearing.** The discipline must remain small; the stance must be ENFORCEABLE (not just a label) — surfacing's F1 flagged this as load-bearing-first.
- **C4 — Self-containment principle** (per memory `feedback_disciplines_self_contained` + LOOP_DIAGNOSE MC-A from 11-46 + surfacing's own §1.3 NOT-list intrinsic-grounding rule). Task-Define's spec must not contain outbound pointers to design-history or theory folders; the NOT-list grounds in OWN intrinsic character (not in what IE was or what neighbor disciplines do).
- **C5 — User-named 5 operations are committed.** Itemize, Meta-question, Deconstruct, MultiScope, Rephrase. User confirmed via iteration ("yes run MVLw" after iterated alignment).
- **C6 — Meta-question runs FIRST per item AND constrains Rephrase** (user verbatim: "rephrasing will not add undesired state or info and lock the meaning in wrong space"). Structural ordering commitment.
- **C7 — Inputs = task statement + LLM internal context only.** No external anchor inputs (no project_goal, no recent_context as direct inputs to the discipline). User verbatim: "use the context info of LLM to generate these rephrasings".
- **C8 — Task-Define / Exploration division is DYNAMIC**, not static-coupling. User verbatim: "this part, is dynamic. it depends on the task. thats the point of meta questions, maybe the question is not require project goal understending even".

**Key insights:**
- **K1 (verb-meaning synthesis — resolves surfacing's F5).** The name "Task-Define" implies *define* (settle-an-identity); the verb-phrase "Expand task definition by ..." implies *expand* (open-and-broaden). These are not in opposition: expansion is the MEANS; definition is the END. Verb-meaning: **"Task-Define is the cognitive operation of expanding a task statement into a defined task — via itemization, meta-questioning, deconstruction, multi-scope rendering, and constrained rephrasing."**
- **K2 (intra-discipline operation ordering — resolves F3).** The five operations form a 4-stage flow: **Itemize → (per item) Meta-question → Deconstruct + MultiScope (parallel) → Rephrase**. Itemize first because the rest are per-item; Meta-question second per item because it constrains the rest; Deconstruct + MultiScope can run in parallel (both are item-internal analyses informed by the same meta-question answers); Rephrase last because Meta-question answers constrain it (per C6).
- **K3 (lightweight enforcement criteria — resolves F1).** "Lightweight" is operationalized as five concrete criteria. What VIOLATES lightweight:
  - (i) introduction of any **verify-phase emitting a separate verdict** beyond the operation's direct output;
  - (ii) introduction of any **external-anchor input** to the discipline (the discipline reaching out for project_goal / recent_context / any non-task-statement source);
  - (iii) introduction of any **halt-gate output** from the discipline (a signal that gates the runner's loop continuation);
  - (iv) introduction of any **sub-machinery within an operation** that grows beyond a single paragraph in the spec (no sub-protocols; no separate output-axes inside an operation; no multi-stage internal verifiers);
  - (v) any **reach for ecosystem knowledge** (no fetching deprecated-spec lists; no currency-of-references checks; no project-history awareness).
- **K4 (NOT-list intrinsic grounding — resolves F7).** Re-grounded in Task-Define's OWN character (not in what IE had):
  - "No verify-phase / no fidelity verdict" → because Task-Define's verb is **EXPAND TO DEFINE**; fidelity-against-input is a single-axis judgment of a different operation (VERIFY); expansion and single-axis verification are operationally distinct.
  - "No external-anchor fetching" → because Task-Define's substrate is **task-statement + LLM internal cognition**; fetching surrounding context is a different verb (DRAW-FROM-ELSEWHERE).
  - "No fidelity verdict / PASS-FLAG output" → because Task-Define produces a more-defined task (SUBSTANTIVE OUTPUT); adjudication of input-vs-output faithfulness is a different operation.
  - "No cross-item interpretation" → because Task-Define operates at **per-item granularity**; cross-item interpretation is a different operation (cross-item relational structure).
  - "No project-goal awareness" → because Task-Define's **substrate excludes project state**; project-goal-awareness requires external fetching, which is a different verb.
- **K5 (Task-Define / Exploration handoff signal — resolves F4).** At meaning layer: **the meta-question answers ARE the signal.** No separate `needs_external_context` field. Three candidates considered: (a) separate field — fails because it duplicates information already in meta-question answers and would blur the perception/action split (Task-Define deciding = Task-Define acting); (b) **answers-themselves-as-signal — chosen**, honors perception/action split (Task-Define perceives via meta-questions; downstream consumer acts); (c) unconditional Exploration invocation — fails because it violates the DYNAMIC division commitment (would waste Exploration's work when context isn't needed).
- **K6 (pipeline position — resolves F8).** Task-Define runs **PRE-PIPELINE** — before the loop disciplines (Su → S → D → I → C in /MVLw; E → S → D → I → C in /MVL+; analogous for any other runner). Exploration runs **CONDITIONALLY** after Task-Define when meta-question answers signal external context is needed; otherwise the runner proceeds directly to Surfacing (or its pipeline-equivalent). The "Explore" in the user's framing refers to **the existing Exploration discipline** at `cognitive_harness/explore/` (the /MVL+ upstream discipline that finds project-context), not a generic "go-find" actor.
- **K7 (input contract — resolves F6).** **Input is ONE: the raw task statement.** "LLM internal context" is the SUBSTRATE of Task-Define's operation (universal to any LLM-implemented discipline), not a separate input parameter. Stating "LLM context" as an input would be like stating "the LLM" as an input — both are implicit substrates. Clarity: input contract = 1 input.
- **K8 (meta-question canonical set — resolves F2).** **Open-with-extension model.** Three base meta-questions (lightweight baseline):
  - **MQ1 (scope-axis):** "What scope does this task refer to? (time / concept / project / feature / cross-cutting / other)"
  - **MQ2 (context-need-axis):** "Is this task self-contained, or does it require external context to make sense / be done right? If external, what kind?"
  - **MQ3 (intent-vs-surface-axis):** "What is the underlying intent (vs the surface ask)?"
  - **Bounded extensibility:** additional meta-questions may be added per item when the LLM perceives a need, bounded by — (a) must be ABOUT the task (not about its answer); (b) must CONSTRAIN Rephrase (not free-floating); (c) must be EXPRESSIBLE in one sentence (lightweight criterion (iv)).
- **K9 (discipline-identity placement).** Task-Define is a **Core discipline** (sibling to Sense-making, Decomposition, Innovation, Critique, Surfacing). It operates pipeline-sequentially at the **upstream-most loop step** — even upstream of Surfacing / Exploration. Its identity-verb ("expand-to-define") distinguishes it from Sense-making ("organize anchors into stabilized model" — operates on a problem, more abstract granularity) and from Surfacing ("draw items from a bounded territory" — different operation).

**Structural points:**
- **SP1 (intra-discipline sequence):** Itemize → (per item) Meta-question → Deconstruct + MultiScope (parallel) → Rephrase. Five operations in a 4-stage flow.
- **SP2 (cross-discipline relationship):** Task-Define → (conditional: Exploration) → Surfacing → Sense-making → Decomposition → Innovation → Critique. Exploration is conditional on meta-question answers; the rest of the pipeline is unchanged.
- **SP3 (substrate vs input distinction):** substrate = LLM internal context (implicit); input = raw task statement (explicit, single).
- **SP4 (output shape — meaning-layer commitment; schema deferred to structural):** Task-Define's output is a more-defined task containing, per item: meta-question answers + deconstructed parts + multi-scoped versions + rephrasings. Outputs are SUBSTANTIVE (carry content) and PER-ITEM (each item has its own bundle).
- **SP5 (signal-not-verdict for meta-question answers):** meta-question answers are SIGNALS to downstream consumers; not a discipline-emitted verdict. Honors perception/action split.
- **SP6 (NOT-list scope at meaning layer):** the GROUNDING PATTERN (intrinsic per K4) is committed; the exact per-entry wording is structural-layer. Load-bearing exclusion categories: verification operations / external-context fetching / fidelity-verdict emission / cross-item interpretation / ecosystem-knowledge use.

**Foundational principles:**
- **FP1: Expansion is the means; definition is the end.** Task-Define's purpose is to settle a defined task; its mechanism is multi-faceted expansion.
- **FP2: Perception/action split** (project-level commitment re-affirmed structurally here). Task-Define perceives + emits content + signals; downstream actors decide and act.
- **FP3: The lightweight stance is enforced via concrete criteria** (K3), not as a vague aspiration. The criteria themselves are a meaning-layer structural commitment.
- **FP4: The NOT-list grounds intrinsically** (K4 + SP6) — per the discipline's own character, not by reference to neighbor disciplines.
- **FP5: Meta-question first, Rephrase last** (per C6 + K2). Meta-questions set the framing within which rephrasings happen, preventing meaning-lock in wrong space.
- **FP6: Task-Define is per-item granularity** (operates on each item after Itemize splits); cross-item operations are a different verb.
- **FP7: Open-with-extension meta-question set** (K8) — canonical 3 as the lightweight baseline; bounded extensibility honors the user's "more than these 3, or better refined" requirement without sliding into unbounded growth.

**Meaning-nodes:** Task-Define · expand-to-define (verb-meaning) · the 5 operations (Itemize, Meta-question, Deconstruct, MultiScope, Rephrase) · dynamic Task-Define/Exploration division · meta-question-answers-as-signal · lightweight stance with 5 enforcement criteria · intrinsic-grounded NOT-list · LLM internal context (substrate) · task statement (single input) · per-item operation · constrained Rephrase · open-with-extension meta-question set.

### SV2 — Anchor-informed understanding
Task-Define is a Core discipline at the upstream-most pipeline position, whose verb is **expand-to-define** — expand a task statement into a defined task. Five operations execute in a 4-stage intra-discipline flow (Itemize → Meta-question per item → Deconstruct + MultiScope parallel per item → Rephrase per item). Meta-question is load-bearing because its answers (a) determine downstream-context-need dynamically (signal to runner/Exploration), (b) constrain Rephrase so rephrasings don't lock meaning in the wrong space. The lightweight stance is operationalized via 5 concrete enforcement criteria; the NOT-list grounds intrinsically per Task-Define's own character via 5 load-bearing exclusion categories. Input contract = 1 (the task statement); substrate = LLM internal context (universal to LLM-implemented disciplines, not stated as input). The prior IE arc is informational context only — explicitly NOT inherited.

*Meta-inspection cross-reference (H4 concept names + H5 motivating examples):* H4 — "Task-Define" + 5 operation names + "expand-to-define" verb-meaning all align with user language (verified at A8 below). H5 — the 2 user-named meta-questions are SPECIFIC examples; the pattern they illustrate is the open-with-extension set (treated as pattern, not as the whole set — see A9 below).

---

## Phase 2 — Perspective Checking

- **Technical/Logical.** The 5-operation flow is implementable. Each operation is a clear cognitive act the LLM can perform. The ordering is logically coherent — Itemize splits the statement into the units the rest operate on; Meta-question per item constrains the per-item ops; Rephrase last because Meta-question answers constrain it. No internal-mechanism inconsistency.
- **Human/User.** The user committed to the name (Task-Define) + 3 of the 5 operations originally, and accepted Rephrase + Meta-question via iteration. User-language alignment confirmed: every load-bearing concept name is either user-chosen verbatim or user-accepted verbatim. The synthesis "expand-to-define" preserves both the user's name ("Define") and the user's verb-phrase ("Expand"). New anchor: **the user's pattern of iteration is itself a signal — they refined the framing several times before saying "yes run MVLw"; the design must honor the final framing, not earlier sketches.**
- **Strategic/Long-term.** With Task-Define as the upstream-most discipline, the project's multi-head + merging-loops trajectory (per memory D4) is supported — Itemize's multi-item output naturally feeds multi-head spawn at the runner level. The lightweight stance keeps the discipline cheap to invoke for any runner adopting it.
- **Risk/Failure.** Three risks:
  - (R1) **Sub-machinery creep into operations** — the structural layer next may accidentally re-introduce IE-style sub-mechanisms (e.g., a verify-axis snuck into Deconstruct). Mitigated by K3 enforcement criteria + K4 intrinsic-grounded NOT-list.
  - (R2) **Meta-question canonical set lock-in vs runaway growth** — too-closed (rigid 3) over-fits; too-open (anything-goes) un-lightweights. Mitigated by K8 (3 base + 3-bullet bounded-extensibility principle).
  - (R3) **Dynamic Task-Define/Exploration handoff ambiguity at process layer** — at meaning layer settled (meta-question answers ARE the signal); at process layer the runner needs concrete gating logic. Out of scope for meaning; noted as frontier for the process-layer inquiry.
- **Resource/Feasibility.** Spec is expected to be small (~200-300 lines for the structural-layer spec, vs IE's growing arc that accumulated multiple sections per finding). Implementation cost per discipline-invocation is bounded — five operations, each a cognitive act, no external API calls (no fetching). Resource-feasible.
- **Definitional/Internal Consistency.** Does Task-Define being "expand-to-define" contradict any internal commitments? The 5 operations are all **expansion-shaped** at item-level (Itemize expands ONE statement into N items; Meta-question expands the task with questions about it; Deconstruct expands the item into parts; MultiScope expands the item into multiple scope versions; Rephrase expands the item into multiple angles). The BUNDLE is **definitional** at task-level (the more-defined task is the output). Mechanism (expansive) and outcome (definitional) are internally coherent — no contradiction.
- **Definitional/Frame-exit Completeness** *(gating predicate check: does the inquiry's commitment-set use a term at ≥2 distinct values across committed structures?* — fires for "context"):
  - **Existence enumeration for "context":** (a) LLM internal context (the substrate); (b) external project context (what Exploration fetches if needed); (c) the task statement itself (input — a kind of immediate context); (d) recent_context (was a prior IE input; explicitly excluded by Task-Define). Four referents enumerated.
  - **Role assessment** for the load-bearing out-of-frame referent (b — external project context): it plays the role of "what Exploration finds when meta-question answers signal external context is needed." Load-bearing for the dynamic Task-Define/Exploration division. Out of Task-Define's frame; in Exploration's frame. Correct relocation (NOT exclusion).
  - **Verdict rigor:** the boundary "Task-Define doesn't fetch external context" — strongest counter: "but then Task-Define can't validate whether scope assumptions are right; meta-question answers may be wrong without external grounding." **Why the counter fails (structural):** meta-questions PRODUCE the framing-gaps; they don't VALIDATE them. Validation against external context IS Exploration's job. The split is structural — meta-question = framing-gap identification (perception of need); Exploration = framing-gap filling (action on need). Operationally distinct verbs.
  - **Residual/coverage:** any other multi-value term? "Task" — used at the discipline name (Task-Define) + the input (task statement) + the output (defined task). These are different roles of the SAME referent (the task as cognitive object); within-frame; not a frame-exit concern. **Termination:** no further substantive concerns; recursion terminates.
- **Phase/Calibration-State.** The design holds across calibration states. No claim is contingent on the project having calibration data; the lightweight stance + K8 open-with-extension principle accommodate early-operation calibration (the open extension is the LLM's per-item judgment until the canonical set sharpens with use). Phase-independent design.

*Meta-inspection cross-reference (after SV3 — H1 candidate set + H2 frame scope + H3 question framing + H7 phase/calibration state):*
- H1 (candidate set): the candidates being adjudicated are the 5 operations, the 3 base meta-questions, the 5 enforcement criteria, the 5 NOT-list categories. These are not in convergence-collapse (they remain distinct).
- H2 (frame scope): the frame scope is meaning-layer; structural and process are explicitly out-of-frame (sequential next-runs). Boundary check at A7 below.
- H3 (question framing): the question's wording ("define from scratch ... lightweight ... dynamic Task-Define/Exploration division") is the user's verbatim framing — no pre-bias detected.
- H7 (phase/calibration state): checked above (phase-independent design).

### SV3 — Multi-perspective understanding
Seven perspectives consulted; the model holds across all seven (no destabilizing anchor emerged). Frame-exit completeness check on "context" surfaces 4 referents and relocates the load-bearing out-of-frame one (external project context) to Exploration's scope — structurally clean cut. Three risks named with mitigations. Resource-feasibility confirmed (small spec; bounded invocation cost). Phase-independent design. The model is ready for ambiguity collapse.

---

## Phase 3 — Ambiguity Collapse

#### A1 — Verb-meaning: "Expand" or "Define" as the primary verb?

- **Strongest counter:** "Expand" is the user's verb-phrase verbatim ("Expand task definition by ..."); privileging "Define" treats the name as load-bearing over the user's stated verb.
- **Why counter fails (structural grounds):** the user's NAME ("Task-Define") is an identity-handle for the operation, distinct from the user's VERB-PHRASE ("Expand task definition by ...") which describes the operation's mechanism. Identity (what it IS) vs mechanism (how it operates) are different load-bearing axes. The synthesis "expand-to-define" preserves BOTH: definition is the OUTCOME (matches the name); expansion is the MECHANISM (matches the verb-phrase). The counter falls because it conflates verb-phrase with identity.
- **Confidence:** HIGH.
- **Resolution:** **K1 — verb-meaning = "Task-Define is the cognitive operation of EXPANDING a task statement into a DEFINED TASK — via itemization, meta-questioning, deconstruction, multi-scope rendering, and constrained rephrasing."**
- **Fixed:** the discipline's verb-meaning sentence (the load-bearing identity statement per sibling-discipline pattern).
- **No longer allowed:** treating "expand" or "define" alone as the primary verb.
- **Now depends on this:** the NOT-list grounding (verification ≠ expansion); the operation-set framing (all 5 are expansion-shaped).
- **Conceptual-model change:** the discipline's identity is settled at a synthesis-of-two-verbs rather than picking one and dropping the other.

#### A2 — Lightweight enforcement: vague label or concrete criteria?

- **Strongest counter:** "Lightweight is a stance, not a checklist; over-specifying criteria itself violates lightweight."
- **Why counter fails (structural grounds):** per the _branch.md Goal's "what would fail" item (iv) — "leaving 'lightweight' as a label rather than an actionable constraint" — the user explicitly committed to lightweight being actionable. Without enforcement criteria, the structural-layer author has no signal which design choices VIOLATE lightweight; IE-style sub-machinery creeps in invisibly. The criteria themselves are not heavy (5 short bullets); the heaviness comes from what they EXCLUDE, not from their existence. Structural test: a 5-bullet checklist is lighter than what it prevents.
- **Confidence:** HIGH.
- **Resolution:** **K3 — 5 enforcement criteria.** (i) no separate-verdict verify-phase; (ii) no external-anchor inputs; (iii) no halt-gate output; (iv) no sub-machinery beyond a paragraph; (v) no ecosystem-knowledge reach.
- **Fixed:** the lightweight stance is now operational (auditable at structural-layer authoring time).
- **No longer allowed:** any structural choice that violates one of the 5 criteria, unless explicitly defended.
- **Now depends on this:** the structural-layer spec author's design choices (every operation must pass the 5-criteria check).
- **Conceptual-model change:** "lightweight" graduates from stance to enforceable constraint.

#### A3 — Meta-question canonical set: closed or open?

- **Strongest counter (fully-open):** open-set is necessary because the user said "more than these 3, or better refined" — implying flexibility.
- **Why fully-open fails (structural):** if meta-questions can be ANY question, the constraint on Rephrase is unbounded; Meta-question stops being a load-bearing safety mechanism (its purpose was to PREVENT rephrasings from locking meaning in wrong space — that requires meta-questions to actually constrain).
- **Strongest counter (fully-closed at 3):** rigid 3 is over-fit to the 2 examples the user named and locks the discipline into an under-specified set.
- **Why fully-closed fails (structural):** the user explicitly rejected "just these 3" by saying "more than these 3, or better refined."
- **Synthesis (the chosen position):** **open-with-bounded-extensibility.** Three canonical base questions (MQ1 scope; MQ2 context-need; MQ3 intent-vs-surface) provide the lightweight baseline; extensions are allowed per item when the LLM perceives a need, bounded by 3 rules — (a) must be ABOUT the task (not about its answer); (b) must CONSTRAIN Rephrase; (c) must be EXPRESSIBLE in one sentence.
- **Confidence:** HIGH for the synthesis structure; MED for the exact 3 base questions (the canonical set may sharpen with calibration; structural layer can refine wording).
- **Resolution:** **K8 — open-with-extension model. MQ1/MQ2/MQ3 base + 3-bullet extension rule.**
- **Fixed:** the open-with-extension structure; the 3 base questions as the meaning-layer baseline.
- **No longer allowed:** fully-closed 3-only OR fully-open anything-goes.
- **Now depends on this:** the structural layer's exact MQ wording; the extension rule's phrasing.
- **Conceptual-model change:** Meta-question canonical set has a tractable shape (lightweight baseline + bounded extension).

#### A4 — Task-Define / Exploration handoff signal: separate field, meta-question answers, or unconditional?

- **Strongest counter (a — separate field `needs_external_context: bool`):** an explicit binary flag is more legible than implicit reading of meta-question answers.
- **Why (a) fails (structural):** a separate field DUPLICATES information already in the meta-question answers (MQ2 already asks "is this self-contained or does it need external context?"). Adding a separate field means Task-Define is DECIDING (acting) rather than perceiving — blurs the perception/action split (FP2).
- **Strongest counter (c — unconditional Exploration invocation):** Exploration always runs, reading Task-Define's output to decide what to fetch.
- **Why (c) fails (structural):** violates the DYNAMIC division commitment (C8) — wastes Exploration's work when meta-question answers indicate no external context is needed; the user explicitly committed to dynamic.
- **Confidence:** HIGH for (b).
- **Resolution:** **K5 — meta-question answers ARE the signal.** No separate field. Downstream actors (the runner; Exploration) read MQ2 + other meta-question answers and decide whether to invoke external-context-fetching.
- **Fixed:** the perception/action-split-honored handoff mechanism.
- **No longer allowed:** Task-Define emitting an explicit "needs Explore: yes/no" boolean; Exploration being invoked unconditionally.
- **Now depends on this:** the process-layer design (how the runner reads MQ2 answers and dispatches Exploration).
- **Conceptual-model change:** the dynamic division is grounded in a structural mechanism (signal-via-answers), not just declared as a goal.

#### A5 — Pipeline position: pre-pipeline or in-pipeline Core discipline?

- **Strongest counter:** "Task-Define is a Core discipline; place it inside the loop like Sense-making and Decomposition."
- **Why counter fails (structural):** Task-Define's output IS the framing the loop disciplines OPERATE ON. If Task-Define ran inside the loop, the loop would already be running with some prior framing — Task-Define's output would have nowhere to be encoded. The structural call-site test that drove the prior IE arc's pre-pipeline position applies identically here.
- **Confidence:** HIGH.
- **Resolution:** **K6 — pre-pipeline.** Task-Define runs BEFORE the loop disciplines. Exploration runs CONDITIONALLY after Task-Define when meta-question answers signal external context is needed; otherwise the runner proceeds directly to Surfacing / pipeline-equivalent.
- **Fixed:** pipeline position relative to loop disciplines.
- **No longer allowed:** Task-Define as an in-loop Core discipline.
- **Now depends on this:** the process-layer design (runner's pre-pipeline stage).
- **Conceptual-model change:** Task-Define is upstream-most; Exploration is conditional-second; loop disciplines are unchanged.

#### A6 — Input contract: 1 input or 3?

- **Strongest counter:** "LLM internal context should be explicit in the input contract for clarity."
- **Why counter fails (structural):** LLM internal context is the SUBSTRATE of any LLM-implemented discipline (universal). Inputs are EXOGENOUS things passed in. The task statement is exogenous (user provides it); LLM context is endogenous (the LLM has it whether or not it's named). Stating LLM context as an input would be like stating "the LLM" as an input — both are implicit substrates of any LLM-implemented operation.
- **Confidence:** HIGH.
- **Resolution:** **K7 — Input is ONE: the raw task statement.** Substrate is LLM internal context (not stated as input).
- **Fixed:** input contract cardinality (1 input).
- **No longer allowed:** multi-input contracts; treating LLM context as a separate input.
- **Now depends on this:** the structural-layer input-contract section.
- **Conceptual-model change:** Task-Define's input shape is minimal — one input.

#### A7 — NOT-list scope at meaning layer: principles or full enumeration?

- **Strongest counter:** "All NOT-list items should be enumerated at meaning layer for completeness."
- **Why counter partially fails (structural):** meaning layer commits to PRINCIPLES OF EXCLUSION (the intrinsic-grounding pattern from K4 + the load-bearing exclusion categories); the structural layer instantiates per-entry wording. Full-enumeration at meaning layer would conflate meaning and structural concerns.
- **Confidence:** MED-HIGH.
- **Resolution:** **K4 + SP6 — meaning layer commits to:** (a) the intrinsic-grounding pattern (every NOT-list entry grounds in Task-Define's own character, not in what neighbors do); (b) 5 load-bearing exclusion categories — **verification operations / external-context fetching / fidelity-verdict emission / cross-item interpretation / ecosystem-knowledge use.** Per-entry wording deferred to structural-layer inquiry.
- **Fixed:** NOT-list grounding principle + the 5 load-bearing categories.
- **No longer allowed:** NOT-list entries grounded by reference to neighbor disciplines or by reference to "what IE had but Task-Define doesn't."
- **Now depends on this:** the structural-layer NOT-list authoring.
- **Conceptual-model change:** NOT-list is principled (intrinsic + categorized), not arbitrary or comparative.

#### A8 — Load-bearing concept test (per refinement note) — domain-terminology-vs-external-default + user-language alignment

- **"Task-Define"** — user-chosen verbatim. PASS user-language alignment.
- **"Itemize / Deconstruct / MultiScope"** — user-chosen verbatim in the original /MVLw invocation. PASS.
- **"Rephrase / Meta-question"** — user-accepted verbatim in the iteration; the user redirected the meta-question framing twice ("seeds for explore" → "dynamic scope/context-need determinant") before saying "yes run MVLw" — confirming user-language alignment at the FINAL framing. PASS.
- **"expand-to-define" verb-meaning** — sensemaking-synthesis; not user-chosen verbatim. Does it match the user's "Expand task definition by ..." phrasing? Yes — "expand" is user's verb; "to define" matches the user's chosen name. Hyphenation is sensemaking's compression but preserves both load-bearing user-language elements. PASS.
- **"Lightweight"** — user-chosen verbatim ("and it should be lightweight"). PASS.
- **"Dynamic"** — user-chosen verbatim ("this part, is dynamic"). PASS.
- **All load-bearing concepts PASS** the user-language alignment test.

#### A9 — Specific-vs-pattern recognition cue (per refinement note)

- The user's 2 named meta-questions (MQ1 scope; MQ2 context-need) — are they THE WHOLE meta-question set, or specific examples of a wider pattern?
- The user explicitly addressed this: "more than these 3, questions or better more refined meta version of them" — they EXPLICITLY identified the 2-3 examples as specific instances, not the whole set, and requested a wider treatment ("more", "better refined").
- The corrective fires: **pattern-treatment is the correct response.** Sensemaking commits to the wider pattern (open-with-extension set per K8) rather than locking to the 2 examples.
- PASS — pattern not specific-examples.

#### A10 — Self-reference (H8 + failure mode #6 corrective)

- This inquiry uses **Sensemaking to design Task-Define, a sibling Core discipline.** Sensemaking and Task-Define share project-internal conceptual vocabulary (cognitive operation, perception/action split, NOT-list, lightweight).
- **External grounding present:**
  - The user's empirical framing (verbatim choices: name, 5 operations, lightweight, dynamic) — external evidence from outside the framework.
  - The prior IE arc's lessons (heaviness creep, sub-machinery growth, anchor-rephrasing explosion) — empirical evidence from prior inquiries outside this run.
  - Sibling-discipline structural exemplars (surfacing, sense-making, routelister, decompose) — pattern templates.
  - LOOP_DIAGNOSE 11-46 (the explicit failure-mode learning from the IE self-containment failure chain).
- **Self-reference risk bounded** — external grounding is adequate. The design is informed by empirical evidence outside the framework (user choices + prior failures + sibling patterns) not just by within-framework consistency.

### SV4 — Clarified understanding
Ten ambiguities resolved (8 HIGH, 2 MED). The model is now concretely operational: verb-meaning synthesis settled (expand-to-define); 5 operations with intra-discipline ordering settled (Itemize → MQ per item → Deconstruct + MultiScope parallel → Rephrase); meta-question canonical set settled (3 base + bounded extension); Task-Define/Exploration handoff settled (meta-question answers ARE the signal); pipeline position settled (pre-pipeline; Exploration conditional); input contract settled (1 input + LLM substrate); NOT-list grounding settled (intrinsic + 5 categories); lightweight stance settled (5 enforcement criteria). User-language alignment verified for all load-bearing concepts. Self-reference risk bounded via external grounding.

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:**
- Identity: Task-Define
- Verb-meaning: "Task-Define is the cognitive operation of expanding a task statement into a defined task — via itemization, meta-questioning, deconstruction, multi-scope rendering, and constrained rephrasing."
- The 5 operations: Itemize, Meta-question, Deconstruct, MultiScope, Rephrase
- Intra-discipline ordering: Itemize → (per item) Meta-question → Deconstruct + MultiScope (parallel) → Rephrase
- Meta-question role: dynamic scope/context-need determinant; constrains Rephrase
- Meta-question canonical set: open-with-extension; 3 base (MQ1 scope / MQ2 context-need / MQ3 intent-vs-surface); bounded extensibility (about-the-task + constrains-Rephrase + one-sentence)
- Task-Define / Exploration handoff: meta-question answers ARE the signal (no separate field; no unconditional invocation)
- Pipeline position: pre-pipeline; Exploration conditional
- Input contract: 1 input (task statement); LLM internal context is substrate (not input)
- Output shape: substantive content + per-item (each item gets its own bundle of meta-question answers + deconstructed parts + multi-scoped versions + rephrasings)
- Lightweight stance: enforced via 5 concrete criteria
- NOT-list grounding: intrinsic per Task-Define's character; 5 load-bearing exclusion categories
- Perception/action split: honored at every interface
- Self-containment: Task-Define's spec must not contain outbound pointers

**Eliminated:**
- "Elaborate" / "Inquiry Elaboration" as discipline name → Task-Define
- "Expand" alone as primary verb → expand-to-define synthesis
- "Define" alone as primary verb → expand-to-define synthesis
- External anchor inputs (project_goal, recent_context) → not Task-Define's substrate
- Fidelity verify-phase → not Task-Define's operation (operationally distinct verb)
- PASS/FLAG fidelity verdict → not Task-Define's output
- Halt-gate emission → not Task-Define's output
- Static Task-Define→Exploration coupling → dynamic
- Closed meta-question set → open-with-extension
- IE-as-Core-in-loop → pre-pipeline
- Separate field for "needs external context" → meta-question answers ARE the signal
- LLM context as a separate input → substrate not input
- NOT-list grounded by reference to neighbors → intrinsic-grounded by Task-Define's own character
- Anchor-grounded rephrasings (against external anchors) → Rephrase constrained by Meta-question answers
- The 15-28 process design's halt-tier + adoption protocol + reference_authority_check apparatus → mostly obsolete for Task-Define (no fidelity verdict to halt-tier; the cross-runner contract simplifies)

**Remaining viable (handed to structural / process layers):**
- Exact NOT-list per-entry wording — structural-layer
- Exact MQ1/MQ2/MQ3 final phrasing + extension-rule final phrasing — structural-layer
- Output schema field-by-field (e.g., what exactly does "deconstructed parts" contain — just subject/action/deliverable, or more?) — structural-layer
- Failure-mode list (analog to surfacing's LAYER-1 + LAYER-2) — structural-layer
- Pipeline-position concretization: where in MVLw, MVL+ (and any other runner) does Task-Define run — process-layer
- Handoff mechanism: how the runner reads MQ2 answers and dispatches Exploration — process-layer
- Whether Task-Define is standalone-included (invocable outside a runner) — structural-layer
- Whether MQ3 (intent-vs-surface) should be re-named / re-phrased before structural — minor; structural-layer

### SV5 — Constrained understanding
Design space is closed to: small-and-surgical structural-layer authoring + a much-lighter process-layer (no fidelity gate → no halt-tier; no separate handoff field → simple runner-side dispatch on MQ2 answer). The IE arc's process-layer artifacts (`reference_authority_check.md`, `inquiry_elaboration_adoption.md`) become mostly obsolete for Task-Define — reference-authority is now a decoupled runner concern (if kept); the adoption protocol collapses to a much simpler contract because the output interface is one substantive bundle (not three outputs across distinct interfaces).

---

## Phase 5 — Conceptual Stabilization

**Accommodation trigger check:** are perspectives producing destabilizing anchors? **No.** Every perspective in Phase 2 (Technical / Human / Strategic / Risk / Resource / Definitional-consistency / Frame-exit / Phase-calibration) produced anchors that REINFORCED the model, not destabilized it. The model is not being patched perspective-by-perspective; it's settling cleanly. Accommodation trigger does NOT fire.

*Meta-inspection cross-reference (after SV5 — H6 model fit + after SV6 — final hooks pass):* H6 — the model has not required revision-by-patching across perspectives; settlement is genuine (not forced). H8 (self-reference) — externally-grounded via user choices + prior failures + sibling patterns (see A10). H9 (user language alignment) — verified (see A8).

### SV6 — Stabilized Model

**Task-Define — Meaning-Layer Definition (Stabilized)**

1. **Identity (verb-meaning):** Task-Define is the cognitive operation of **expanding a task statement into a defined task** — via itemization, meta-questioning, deconstruction, multi-scope rendering, and constrained rephrasing. Expansion is the mechanism; definition is the outcome. The discipline replaces (does not refine) the prior Inquiry-Elaboration arc; commitments from that arc are NOT inherited.

2. **The 5 operations:**
   - **Itemize** — split the task statement into distinct atomic items (1 or more).
   - **Meta-question** (per item) — apply meaning-layer questions ABOUT the item to determine its scope and whether external context is needed.
   - **Deconstruct** (per item) — analyze the item into its constituent parts (at minimum: subject + action + deliverable-shape).
   - **MultiScope** (per item) — produce versions of the item at multiple scales (at minimum: small-scope + big-scope).
   - **Rephrase** (per item, last) — produce alternative formulations of the item, constrained by the Meta-question answers so as not to lock meaning in wrong space.

3. **Intra-discipline ordering:** **Itemize → (per item) Meta-question → Deconstruct + MultiScope (parallel) → Rephrase** (per item). Five operations in a 4-stage flow. Rationale: Itemize first because rest are per-item; Meta-question second per item because it constrains; Deconstruct + MultiScope parallelizable (both item-internal analyses informed by meta-question answers); Rephrase last because Meta-question answers constrain it.

4. **Meta-question canonical set (open-with-extension):**
   - **MQ1 (scope-axis):** "What scope does this task refer to? (time / concept / project / feature / cross-cutting / other)"
   - **MQ2 (context-need-axis):** "Is this task self-contained, or does it require external context to make sense / be done right? If external, what kind?"
   - **MQ3 (intent-vs-surface-axis):** "What is the underlying intent (vs the surface ask)?"
   - **Bounded extensibility:** additional meta-questions may be added per item when the LLM perceives a need, bounded by (a) must be ABOUT the task (not its answer); (b) must CONSTRAIN Rephrase (not free-floating); (c) must be EXPRESSIBLE in one sentence.

5. **Input contract — one input, one substrate:**
   - **Input:** the raw task statement (exogenous; one input only).
   - **Substrate:** LLM internal context (implicit; universal to LLM-implemented disciplines; not stated as input).

6. **Output (meaning-layer commitment; schema deferred to structural):** Task-Define's output is a more-defined task containing, per item: the meta-question answers + the deconstructed parts + the multi-scoped versions + the rephrasings. Outputs are SUBSTANTIVE (carry content) and PER-ITEM (each item has its own bundle).

7. **Dynamic Task-Define / Exploration division:** Task-Define operates on the task statement using LLM internal cognition; Exploration (the existing Core discipline at `cognitive_harness/explore/`) operates on the project to find external context. The division is **DYNAMIC, task-by-task** — determined by Meta-question answers (especially MQ2). The **meta-question answers ARE the signal** — no separate handoff field. Downstream consumers (the runner; Exploration) read the answers and decide whether to invoke external-context-fetching. Perception/action split honored.

8. **Pipeline position:** **Pre-pipeline** — Task-Define runs BEFORE the loop disciplines (e.g., Su → S → D → I → C in /MVLw; E → S → D → I → C in /MVL+). Exploration runs **conditionally** after Task-Define when meta-question answers signal external context is needed; otherwise the runner proceeds directly to Surfacing / pipeline-equivalent.

9. **Lightweight stance — operationalized as 5 enforcement criteria:**
   - (i) NO verify-phase emitting a separate verdict beyond the operation's direct output.
   - (ii) NO external-anchor inputs to the discipline.
   - (iii) NO halt-gate output from the discipline.
   - (iv) NO sub-machinery within an operation beyond a single paragraph in the spec.
   - (v) NO ecosystem-knowledge reach (no fetching deprecated-spec lists, currency checks, project-history).

10. **NOT-list — intrinsic grounding pattern; 5 load-bearing exclusion categories** (exact per-entry wording deferred to structural):
    - **Verification operations** — excluded because Task-Define's verb is EXPAND-TO-DEFINE; fidelity adjudication is a different verb (VERIFY).
    - **External-context fetching** — excluded because Task-Define's substrate is task-statement + LLM internal cognition; reaching for external context is a different verb.
    - **Fidelity-verdict emission (PASS/FLAG)** — excluded because Task-Define produces substantive content, not adjudication.
    - **Cross-item interpretation / cross-task relational meaning** — excluded because Task-Define is per-item granularity.
    - **Ecosystem-knowledge use** (deprecated specs, currency of references, project-history) — excluded because Task-Define operates on the task statement + LLM internal cognition, not on project state.

11. **Perception/action split:** Task-Define perceives the task + emits substantive content + signal-shaped meta-question answers; downstream actors (runner; Exploration; user) decide and act.

12. **Self-containment** (per memory `feedback_disciplines_self_contained` + LOOP_DIAGNOSE MC-A from 11-46): Task-Define's spec — when authored next at the structural layer — must not contain outbound pointers to other disciplines, design history, or theory folders.

13. **Departures from prior IE arc (acknowledged but NOT inherited):** Task-Define drops the 3-input contract (now 1); the 5 anchor-grounded rephrasings (now 1 Rephrase op informed by Meta-question answers, not external anchors); the verify-phase + fidelity verdict (eliminated); the request-structure verdict as a separate output (Itemize IS the multi-detection, implicit in output structure); the halt-with-one-bounce process gate (eliminated); the reference-authority pre-flight protocol (decoupled — a separate runner-side concern if wanted). Process-layer artifacts from the 15-28 inquiry (`reference_authority_check.md`, `inquiry_elaboration_adoption.md`) become mostly obsolete for Task-Define.

**How SV6 differs from SV1:** SV1 was instinct-level. SV6 fixes:
- The verb-meaning ("expand-to-define" synthesis resolving the Expand-vs-Define name-vs-verb tension at A1).
- The intra-discipline 4-stage ordering with explicit rationale (K2 + A1 + SP1).
- The Meta-question's load-bearing dynamic role + the open-with-extension canonical set (3 base + bounded extension; K8 + A3).
- The Task-Define/Exploration division as dynamic-via-meta-question-answers-as-signal (K5 + A4; perception/action split honored).
- The lightweight stance operationalized into 5 concrete enforcement criteria (K3 + A2).
- The NOT-list intrinsically grounded in 5 load-bearing categories (K4 + A7 + SP6).
- Input contract = 1 (K7 + A6); substrate = LLM internal context (not an input).
- Pre-pipeline position; conditional Exploration handoff (K6 + A5).
- Explicit departure list from the prior IE arc (item 13).

---

## Saturation Indicators

- **Perspective saturation:** 8 perspectives (Technical / Human / Strategic / Risk / Resource / Definitional-consistency / Frame-exit / Phase-calibration); last 2 (Frame-exit + Phase-calibration) confirmed existing anchors without introducing new anchor TYPES — saturated.
- **Ambiguity resolution:** 10/10 ambiguities resolved (8 HIGH, 2 MED). High ratio; none silently dropped.
- **SV delta:** SV1 (instinct-level read of name + 3 ops + lightweight) → SV6 (full meaning-layer model: 13 stabilized commitments + 5 enforcement criteria + 5 NOT-list categories + 3 base meta-questions + extension rule + dynamic-division mechanism). Substantial delta.
- **Anchor diversity:** 8 constraints + 9 key insights + 6 structural points + 7 foundational principles + 13 meaning-nodes across 8 perspectives. Diverse.

---

## Frontier (to Decomposition / Innovation / Critique)

- **D1 — Decomposition.** Partition the meaning-layer-settled deliverable into structural-layer authoring pieces. Likely pieces: (i) verb-meaning sentence + identity section; (ii) the 5 operations (each as a sub-section with one-paragraph mechanism description); (iii) intra-discipline ordering + rationale; (iv) MQ1/MQ2/MQ3 final wording + extension rule; (v) input contract + output schema (with substantive-content shape per item); (vi) NOT-list per-entry wording (5 categories from K4); (vii) lightweight stance + 5 enforcement criteria; (viii) failure-mode list (analog to surfacing's LAYER-1 + LAYER-2).
- **D2 — Innovation.** Produce concrete authorable content for the structural-layer pieces (the meaning layer says WHAT; the structural layer says HOW the spec is shaped; the innovation step in this inquiry's pipeline is producing the meaning-layer commitments as concrete content — most of which is already in SV6).
- **D3 — Critique pressure-test targets:**
  - (a) Does the verb-meaning synthesis "expand-to-define" hold under prosecution? Does it survive when transcribed into a verb-meaning sentence in the structural spec?
  - (b) Does K3 (5 lightweight enforcement criteria) actually CONSTRAIN structural-layer authoring? Test by attempting to violate each criterion and checking whether the violation is detectable.
  - (c) Does K4 (NOT-list intrinsic grounding) survive — is any of the 5 exclusion categories phrased in a way that mentions a neighbor discipline rather than Task-Define's own character?
  - (d) Does K5 (meta-question-answers-as-signal) honor perception/action split cleanly — or does any phrasing make Task-Define DECIDE rather than just PERCEIVE?
  - (e) Does K8 (open-with-extension meta-question set) preserve the lightweight stance — could the extension rule itself be exploited to add heavy meta-questions?
  - (f) Self-reference check: is the meaning-layer model's definition of Task-Define applicable to Task-Define itself recursively (i.e., could Task-Define elaborate the task "define Task-Define"? does the model fit?)
