---
status: active
model: claude-opus-4-7[1m]
effort: max
refines: devdocs/inquiries/2026-06-05_20-02__articulate_multiscope_substrate_question/finding.md
---
# Finding: MultiScope — Distraction Critique + Context-Tiered Reframe (Refinement of 20-02)

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-06-05_20-02__articulate_multiscope_substrate_question/finding.md`

**Revision trigger:** User correction following the 20-02 finding. The user pushed back on 20-02's "hypothesis-generation is legitimate cognitive work" reframe, arguing that even if legitimate, hypothesis-generation causes **distraction more than help** when warm context is available. The user proposed a **3-tier context-grounded scope model** (immediate / recent / project) as an alternative to 20-02's hypothetical-scope mode essence. This inquiry tests whether the 3-tier model SUPERSEDES, REFINES, UPHOLDS, or REJECTS the just-committed 20-02 finding.

**What's preserved:**
- 20-02's anti-fetching substrate re-interpretation (the architectural unlock; load-bearing here)
- 20-02's reception rule (downstream consumers receive as scope-possibility-space)
- 20-02's 4 high-relevance properties
- 20-02's OBJECT-level placement
- 20-02's lightness-as-feature principle
- 20-02's hypothetical-scope mode (now as cold-context fallback, not primary)

**What's changed:**
- **Primary essence shifts** from hypothetical-scope mode (20-02) to **context-grounded scale-rendering** (this finding). When warm context is available, MultiScope uses it to render concrete small/big endpoints along MQ1's scope-axis. When cold, falls back to 20-02's hypothetical-scope mode.
- **§2.4 revision plan** updated: previous 20-02 ADD-CONTENT plan now becomes UPDATE consolidating both findings' commitments.

**What's new:**
- **Question-shift insight:** 20-02 answered LEGITIMACY (is hypothesis-generation legitimate cognitive work?). User is asking RELEVANCE (is it useful given warm-context availability?). Different questions, different answers. Both partial-right; refinement integrates both.
- **3-tier-to-existing-operations mapping:** the user's proposed tiers (immediate / recent / project) are NOT a new MultiScope mode — they overlap structurally with existing MQ work (immediate ≈ MQ3 + Deconstruct; recent ≈ MQ2 relational-stance; project ≈ MQ2 kinds + verdict + stance). Adding them to MultiScope would duplicate; the right structural fix is at the existing operations.
- **Dual-mode essence:** MultiScope is structurally dual-mode (warm-context-concrete primary; hypothetical fallback). The two modes are not competing essences but two operational modes of the same operation, selected by LLM-judgment-level context detection.

**Migration:** Readers who consult only 20-02 need to know there's a refinement (visible via 20-02's frontmatter — when 20-02 is updated to point to this finding) OR via the §2.4 revised spec which consolidates both. Future authors of structural-layer follow-up should consolidate 20-02 ADD-CONTENT plan + this finding's UPDATE plan into a single coherent §2.4 revision.

---

## Question

From `_branch.md`:

**Question:** Given the user's claim that hypothesis-generation (even if legitimate per 20-02) causes distraction more than help when warm context is available, AND given the user's proposed 3-tier context-grounded scope model (immediate / recent / project), does the 3-tier model REPLACE 20-02's hypothetical-scope mode essence for MultiScope, COMPLEMENT it, or get REJECTED? If the 3-tier model is adopted: what is its substrate-compliant essence + how does it relate to MQ1, Rephrase, loop disciplines, and the inherited commitments from 20-02 and prior task-define inquiries?

**Goal:** Honest meaning-layer adjudication between 20-02 and the 3-tier proposal. Either one wins, or they combine, or one is rejected with structural reasoning. The adjudication must be principled and specific.

**Layer Commitment:** Meaning-layer only. Structural revisions to §2.4 + MQ section updates are downstream.

---

## Finding Summary

- **VERDICT = REFINE 20-02.** Not supersede; not reject; not uphold-unchanged. The just-committed 20-02 finding's substantive commitments survive; this refinement adds context-grounded scale-rendering as the primary mode while preserving hypothetical-scope mode as cold-context fallback.

- **The architectural unlock is the question-shift.** 20-02 answered **LEGITIMACY** (is hypothesis-generation legitimate cognitive work?). User is asking **RELEVANCE** (is hypothesis-generation USEFUL given warm-context availability?). Different questions, different answers. Without recognizing the question-shift, the refinement would look like contradiction; with it, the refinement is honest extension responding to a different question than 20-02 answered.

- **MultiScope's primary essence = CONTEXT-GROUNDED SCALE-RENDERING.** When warm context is available, MultiScope renders concrete small/big-scope endpoints along MQ1's scope-axis using warm context (recent conversation + project context already in the LLM's window). The endpoints become specific (drawn from context) AND scaled (along MQ1's granularity axis), not generic type-pattern hypotheses.

- **Hypothetical-scope mode (20-02) survives as COLD-CONTEXT FALLBACK.** When the session has no warm context relevant to the task (fresh session; unrelated thread; new project with thin context), MultiScope falls back to rendering hypothetical small/big endpoints from general knowledge per 20-02. Dual-mode essence handles both cases gracefully.

- **The user's 3-tier perceptions (immediate / recent / project) are NOT a new MultiScope mode — they map to existing operations:**
  - **Immediate scope** ≈ MQ3 (intent inference: "what does user actually want?") + Deconstruct (subject/action/deliverable-shape: "what is being asked?")
  - **Recent scope** ≈ MQ2 relational-stance ("continuation" stance captures "continues recent work"; "fresh-start-of-prior" captures "fresh start of recent prior")
  - **Project scope** ≈ MQ2 kinds + verdict + relational-stance ("what kinds of context bear on this task? is context needed at all? is the task relevant to the project?")

  Adding 3-tier to MultiScope as a new essence would **duplicate work the existing MQs and Deconstruct already do.** The user's intuition (warm-context use should happen) is correct; the structural fix is to make warm-context use explicit in MQ2 + MQ3 + Deconstruct (where it already happens per 20-02's anti-fetching re-interpretation) + add it as MultiScope's primary mode for the scale-rendering job.

- **User's distraction critique is structurally valid for warm-context cases.** When the LLM session has accumulated relevant context, hypothetical type-pattern endpoints produce noise. Downstream consumers spend cycles on irrelevant hypotheses. The cost-asymmetry argument from 20-02 (distraction is bounded; missing context-grounded is unbounded) is not refuted — but distraction IS cost when context-grounded perception is available and being ignored.

- **Speculation reframed as hypothesis-generation (20-02 SV6-7) survives** as a partial defense — for cold-context cases, hypothesis-generation IS legitimate cognitive work and provides the only available scope-spectrum signal. For warm-context cases, context-grounded perception > hypothesis-generation.

- **Substrate boundary PRESERVED.** Context-grounded use of warm context respects 20-02's anti-fetching re-interpretation. User's "don't look up more details" exclusion preserves the boundary against fetching new project state.

- **Lightness PRESERVED.** The dispatch between warm-context-concrete vs cold-context-hypothetical is LLM-judgment-level, not sub-machinery. MultiScope still emits 2 endpoints (small/big); only the GROUNDING shifts based on context availability.

- **MQ1 → MultiScope coupling PRESERVED.** MQ1 still provides the scope-axis classification; MultiScope renders along that axis (using warm context when available; falling back to hypothetical when cold).

- **5+ inherited commitments status:**
  - 20-02 hypothetical-scope mode: **REFINED** (primary shifts; survives as fallback)
  - 20-02 reception rule + 4 HR properties + anti-fetching re-interpretation + OBJECT-level + lightness-as-feature: **PRESERVED**
  - 15-39 5 operations: **PRESERVED**
  - 07-48 Stage 3b + reads MQ1: **PRESERVED**
  - 21-12 hypothetical-relational mode (MQ2 precedent): **PRESERVED at MQ2**; partially applied to MultiScope (cold-context fallback mode only)
  - 10-03 MQ1 = Structural type: **PRESERVED**
  - 19-17 OBJECT-vs-PROPERTY + lightness-as-feature: **PRESERVED**
  - §2.4 framing: requires **UPDATE** (consolidates 20-02 ADD-CONTENT plan + this finding's warm-context primary mode + 3-tier-to-MQs mapping)

- **Structural-followup work (out of scope per Layer Commitment but enumerated):**
  - §2.4 UPDATE consolidating 20-02 plan + this finding's commitments + cold/warm worked example
  - MQ2 + MQ3 section updates making warm-context use explicit
  - Optional: explainer-note on legitimacy-vs-relevance question-shift
  - Pass-2 essence still DEFERRED (per 20-02; not affected by this refinement)

---

## Finding

### Small surrounding context

Just minutes before this inquiry was created, the `2026-06-05_20-02` inquiry (the prior MultiScope substrate question) was concluded. That finding committed MultiScope's essence to **hypothetical-scope mode**: render task-prose into hypothetical small/big-scope endpoints in hypothetical-relational mode (type-pattern grounded; not concrete-this-codebase). The 20-02 finding also defended this essence by reframing "guessing" as "hypothesis-generation" — legitimate cognitive work, not arbitrary picking.

The user pushed back. Their critique: even if hypothesis-generation is legitimate, it causes **distraction more than help** when the LLM has warm context available. They proposed a 3-tier model — immediate scope (task statement) / recent scope (last 3-5 messages, if relevant) / project scope (project base, if relevant or attachable) — as an alternative essence for MultiScope.

This inquiry adjudicates: does the 3-tier model supersede 20-02, refine it, uphold it, or get rejected?

### 1. The question-shift — the architectural unlock

20-02 and the user are answering different questions.

**20-02 answered LEGITIMACY.** Given that without context MultiScope can only "guess," is that guessing legitimate cognitive work or is it arbitrary picking that doesn't deserve to exist as an operation? 20-02's answer: it's hypothesis-generation from general knowledge — legitimate cognitive work, the same kind a senior engineer does when asked "improve the auth module" with no further context. The reframe defends MultiScope's right to exist by showing what it does is not arbitrary.

**The user is asking RELEVANCE.** Given that the LLM HAS warm context (the session has been ongoing; relevant material is loaded), is hypothesis-generation USEFUL or does it produce distraction? The user's answer: distraction. Type-pattern hypotheses ignore the specific context the LLM already has access to; they produce noise that downstream consumers must filter through; the cost is real even if the operation is "legitimate."

Both questions are valid. Both answers are partial-right. The legitimacy answer doesn't address the relevance concern; the relevance answer doesn't address what happens when context is genuinely absent.

The refinement integrates both: dual-mode essence handles warm-context cases (where relevance dominates) with context-grounded scale-rendering AND cold-context cases (where legitimacy is the structural defense) with the hypothetical-scope fallback.

Acknowledging this question-shift explicitly matters because without it, future readers might think this inquiry contradicts 20-02 arbitrarily. The refinement isn't contradiction; it's structural extension responding to a question 20-02 didn't address.

### 2. The verdict — REFINE, not SUPERSEDE

Refine means 20-02's substantive commitments survive. Supersession would mean rejecting them. The substantive commitments at stake:

- **Anti-fetching substrate re-interpretation** (20-02's architectural unlock). The boundary is anti-fetching, not anti-using-context. THIS finding rests on it — context-grounded use of warm context is permissible precisely because 20-02 established that using-what's-in-context is permitted.
- **Reception rule.** Downstream consumers receive MultiScope outputs as scope-possibility-space (hypothesis-set, not authoritative renderings). This applies in both modes — concrete renderings in warm mode are still candidates downstream chooses from; hypothetical renderings in cold mode same.
- **4 high-relevance properties.** Scope-ambiguous tasks, scope-decision-support, loop-Decomposition scaffolding, Rephrase scope-variant coverage. These case-spectrum properties apply across both modes.
- **OBJECT-level placement.** MultiScope renders the task at scope points; this is OBJECT-level work, distinct from Meta-question's PROPERTY-level.
- **Lightness-as-feature.** Heavy alternatives still rejected; the dual-mode dispatch is LLM-judgment-level, not additional machinery.

Supersession would lose all of these. Refinement preserves them and adds context-grounded scale-rendering as primary mode.

The verdict also avoids two opposite failure modes:

- **UPHOLD-UNCHANGED** would dismiss the user's distraction critique (which is structurally valid for warm-context cases). User-position disrespect; status-quo bias.
- **SUPERSEDE** would auto-defer to the user without testing the structural fit of their proposal (3-tier overlaps with MQ work — see Section 4). Motivated-deference; operation-parsimony violation.

REFINE acknowledges both 20-02 and the user are partially right, integrates honestly, and avoids both failure modes.

### 3. The essence — context-grounded scale-rendering (primary) + hypothetical-scope mode (fallback)

MultiScope's refined essence is **dual-mode**:

**Primary mode (warm-context):** Context-grounded scale-rendering. When the LLM has warm context relevant to the task (recent conversation thread; project context already loaded; user's stated immediate intent visible), MultiScope uses that context to render concrete small/big-scope endpoints along MQ1's scope-axis.

Worked example — *"improve the auth module"* with warm context: last 5 messages were about a session-token bug. MultiScope renders:
- *Small (context-grounded):* "Fix the token validation bug discussed in recent messages — patch the validation path that's mishandling expired tokens."
- *Big (context-grounded):* "Redesign the OAuth flow including token storage and refresh handling to prevent token-validation bugs of this class."

Both endpoints are concrete (drawn from warm context — the LLM knows the conversation is about session-token bugs) AND scaled (small = local fix; big = architectural redesign, along MQ1's granularity axis).

**Fallback mode (cold-context):** Hypothetical-scope mode per 20-02. When the session is fresh, or recent context is unrelated to the task, or the project context is thin/irrelevant, MultiScope falls back to rendering hypothetical small/big-scope endpoints from general knowledge — the same type-pattern hypotheses 20-02 defended.

Worked example — same task, cold session: no recent thread; no project context loaded. MultiScope renders:
- *Small (hypothetical):* "Tasks of this kind typically polish internals — naming, duplication, error handling."
- *Big (hypothetical):* "Tasks of this kind typically redesign the whole flow — session model, token format, integration points."

Both endpoints are hypothetical type-patterns (the LLM doesn't know which fits this codebase; emits the candidate spectrum) AND scaled (same axis as warm-context mode).

The dual-mode structure is the essence. The mode that fires per invocation is determined by LLM-judgment-level context detection — same operational pattern MQ2 + MQ3 already use (they detect whether warm context is available; use it when present; fall back to hypothetical when absent).

### 4. The 3-tier perceptions belong to MQ2 + MQ3 + Deconstruct, not MultiScope

The user proposed 3 tiers for MultiScope: immediate / recent / project. The structural analysis shows these perceptions OVERLAP substantially with existing operations:

**Immediate scope** = "what is being asked + what user is trying to achieve from the task statement alone." This is:
- **MQ3 (intent inference)** — "what does the user actually want behind the surface ask?" — captures "what user is trying to achieve"
- **Deconstruct (subject/action/deliverable-shape)** — captures "what is being asked" (the task's parts)

Together MQ3 + Deconstruct produce exactly what the user describes as immediate scope.

**Recent scope** = "if last 3-5 messages are related, what is being asked + how it fits with recent context." This is:
- **MQ2 relational-stance** — the stance taxonomy has "continuation" (this task continues recent work) and "fresh-start-of-prior" (this task is a fresh start from recent prior). Both stance values explicitly capture how the task relates to recent context.

**Project scope** = "is this task relevant to the project? newly introduced? attachable to a concept?" This is:
- **MQ2 kinds + verdict + relational-stance** — kinds capture what project context bears on the task; verdict captures whether context is needed (yes/no/uncertain); relational-stance captures whether the task is project-rooted or fresh.

The 3-tier perceptions are not new cognitive work — they re-cast existing MQ + Deconstruct work into a different presentation format. Adding them to MultiScope as a new mode would **duplicate** this work. Operation parsimony argues against duplication; each operation should have a structurally-distinct niche.

**MultiScope's structurally-distinct niche is scale-rendering** — along MQ1's scope-axis, at the framing-artifact level (before loop disciplines run). The 3-tier work belongs at MQ2 + MQ3 + Deconstruct (which already do property-level context-tier perception); MultiScope's job is the rendering layer.

The user's intuition (warm-context use should happen) is **structurally correct**. The user's diagnosis (the work belongs at MultiScope) **misplaces the work**. The refinement honors both: warm-context use happens (at MultiScope's primary mode, using context for the rendering; at MQ2 + MQ3 + Deconstruct for their perception work); the work is placed where it structurally fits.

### 5. Why operation-parsimony is the load-bearing principle

A cognitive system with N operations works well when each operation has a structurally-distinct niche — does cognitive work that no other operation does. Duplication creates two failure modes:

- **Inconsistency** — when two operations do similar work with different framing, their outputs may disagree, and downstream consumers don't know which to trust.
- **Bloat** — total operation count grows without adding capability; each invocation runs more cognitive operations than needed; lightness-as-feature is undermined.

The user's 3-tier proposal would create both. MQ2 + MQ3 + Deconstruct already do property-level context-tier perception; adding a duplicate at MultiScope would mean (a) two operations producing relational-stance-like perception (potential inconsistency); (b) more cognitive work per invocation (lightness bloat).

The refinement avoids both:
- MultiScope's primary mode (context-grounded scale-rendering) USES warm context but doesn't DUPLICATE the context-tier perceptions — it operates on a different axis (scale-rendering at OBJECT level), drawing on warm context to ground the scale-spectrum
- MQ2 + MQ3 + Deconstruct continue to do their PROPERTY-level work using warm context (already permitted per 20-02's anti-fetching re-interpretation)

Each operation keeps its niche; warm-context use is distributed appropriately.

### 6. The substrate boundary stays preserved

Both 20-02 and this finding rest on 20-02's anti-fetching re-interpretation of the substrate boundary: the boundary forbids reaching-OUT for new project state (fetching files, querying external systems); it does NOT (and cannot) restrict the LLM from using whatever's in its context window.

The user's "delicate context" exclusion ("LLM shouldn't go look up more details") explicitly preserves anti-fetching. The 3-tier proposal honored this — it uses warm context already loaded, doesn't fetch more.

The refinement honors it too. Context-grounded scale-rendering uses warm context (LLM's context window contents) for rendering; doesn't fetch new state. Cold-context fallback uses general knowledge only. Both modes are substrate-compliant.

### 7. Lightness stays preserved

Heavy alternatives — full project-state-checking, semantic context-scoping, conditional-firing dispatch logic — were rejected at 20-02 and remain rejected here. The dual-mode dispatch (warm vs cold) is at LLM-judgment level, not sub-machinery level. The LLM makes a single judgment per invocation (is warm context relevant?) and emits accordingly — same pattern MQ2 + MQ3 already use.

The total cognitive load per MultiScope invocation under the refinement is comparable to 20-02's hypothetical-scope mode — render 2 endpoints; emit them. Only the grounding shifts based on context availability. No additional operations, no additional pipeline complexity.

---

## Inherited Commitments Re-test

This inquiry directly refines the just-committed 20-02 finding and inherits commitments from 6 prior findings + 2 doc sections. The Synthesis Trigger declared 20-02 as the **CENTRAL commitment being tested**.

### Commitments from `devdocs/inquiries/2026-06-05_20-02__articulate_multiscope_substrate_question/finding.md` (the just-committed prior; CENTRAL)

- **Commitment:** Hypothetical-scope mode as MultiScope's essence (render hypothetical scope endpoints in hypothetical-relational mode; type-pattern grounded).
  - **Re-test status:** **REFINED**
  - **Evidence:** Primary essence shifts to context-grounded scale-rendering (this finding's SV6-2). Hypothetical-scope mode survives as cold-context fallback (SV6-3). The mode itself isn't rejected — it's bounded to its appropriate case (cold context, where it remains the right answer per 20-02's legitimacy argument).

- **Commitment:** Anti-fetching substrate re-interpretation (substrate boundary forbids reaching-OUT; doesn't restrict using-WHAT'S-IN context).
  - **Re-test status:** **PRESERVED + EXTENDED**
  - **Evidence:** This finding's context-grounded primary mode is structurally enabled by 20-02's re-interpretation. The refinement EXTENDS the anti-fetching framework into explicit context-use formalization at the rendering layer. Substrate boundary preservation is verified at A2 of sensemaking via §1's example sentences.

- **Commitment:** Reception rule (downstream consumers receive outputs as scope-possibility-space hypothesis-set; choose with user input).
  - **Re-test status:** **PRESERVED**
  - **Evidence:** Reception rule applies under both modes. Concrete renderings (warm mode) are still candidates downstream selects from; hypothetical renderings (cold mode) same. Downstream consumer contract is unchanged.

- **Commitment:** 4 domain-general high-relevance properties (scope-ambiguous tasks, scope-decision-support, loop-Decomposition scaffolding, Rephrase variant coverage).
  - **Re-test status:** **PRESERVED**
  - **Evidence:** The case-spectrum applies across both modes. The 4 properties are linguistic features that don't depend on warm-vs-cold context.

- **Commitment:** OBJECT-level placement (renders the task; distinct from Meta-question's PROPERTY level).
  - **Re-test status:** **PRESERVED**
  - **Evidence:** Both modes are OBJECT-level rendering. The level distinction from Meta-question is unchanged.

- **Commitment:** Lightness-as-feature.
  - **Re-test status:** **PRESERVED**
  - **Evidence:** No sub-machinery added; dispatch is LLM-judgment-level. Per A8 of sensemaking.

### Commitments from `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md`

- **Commitment:** 5 operations + MultiScope as one of them.
  - **Re-test status:** **PRESERVED**
  - **Evidence:** MultiScope retains its place. Essence shifts but operation continues.

### Commitments from `devdocs/inquiries/2026-06-04_07-48__task_define_process_layer/finding.md`

- **Commitment:** Stage 3b parallel with Deconstruct; MultiScope reads MQ1's scope-axis classification.
  - **Re-test status:** **PRESERVED**
  - **Evidence:** MQ1 → MultiScope coupling unchanged. The refinement doesn't break the dependence — MQ1 still provides the axis; MultiScope renders along it (in warm or cold mode).

### Commitments from `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md`

- **Commitment:** Hypothetical-relational expression mode (the precedent 20-02 transferred to MultiScope as hypothetical-scope).
  - **Re-test status:** **PRESERVED at MQ2; partially applied to MultiScope (cold-context fallback mode only)**
  - **Evidence:** MQ2's hypothetical-relational mode is unchanged for its property-level work. MultiScope's adoption of the pattern (per 20-02) is now bounded to cold-context fallback mode; primary mode uses warm context directly (when available).

### Commitments from `devdocs/inquiries/2026-06-05_10-03__meta_question_taxonomy_categories/finding.md`

- **Commitment:** MQ1 = Structural type at PROPERTY level.
  - **Re-test status:** **PRESERVED**
  - **Evidence:** MQ1's taxonomy placement unchanged. The refinement clarifies that MultiScope (downstream of MQ1) is at OBJECT level — consistent with the taxonomy.

### Commitments from `devdocs/inquiries/2026-06-05_19-17__articulate_deconstruct_true_value/finding.md`

- **Commitment:** OBJECT-vs-PROPERTY framing; lightness-as-feature.
  - **Re-test status:** **PRESERVED**
  - **Evidence:** MultiScope remains at OBJECT level; lightness preserved.

### Commitments from `devdocs/how_articulate_simple_should_be.md`

- **§1 substrate boundary:** PRESERVED via 20-02 re-interpretation
- **§2.4 MultiScope description:** requires **UPDATE** consolidating 20-02 ADD-CONTENT plan + this finding's warm-context primary mode + 3-tier-to-MQs mapping

---

## Next Actions

### MUST

- **What:** Revise `devdocs/how_articulate_simple_should_be.md` §2.4 to incorporate BOTH 20-02's planned ADD-CONTENT (essence + 4 HR + reception rule + lightness + MQ-style warning) AND this finding's refinement (context-grounded scale-rendering as primary; hypothetical-scope as cold-context fallback; legitimacy-vs-relevance question-shift acknowledged; 3-tier work mapping to MQ2+MQ3+Deconstruct). Intervention shape: **UPDATE** (consolidates both findings into a single coherent section). Include a worked example contrasting cold-context output (hypothetical small/big) vs warm-context output (concrete small/big).
  - **Who:** structural-layer follow-up inquiry author / explainer-doc maintainer
  - **Gate:** condition-bound — apply when the user is ready to commit the structural revision
  - **Why:** without the revision, the meaning-layer commitment exists only in two findings (20-02 + this one); §2.4 must reflect the dual-mode essence + 3-tier-to-MQs mapping. **Soft MUST** — the meaning-layer commitment stands, but finding-vs-spec drift accumulates until §2.4 is updated.

- **What:** When §2.4 revision is authored, explicitly clarify that "context-tier perceptions (immediate / recent / project) live at MQ2 + MQ3 + Deconstruct — not MultiScope." Provide the mapping (immediate ≈ MQ3 + Deconstruct; recent ≈ MQ2 relational-stance; project ≈ MQ2 kinds + verdict + stance).
  - **Who:** structural-layer follow-up author
  - **Gate:** condition-bound — apply alongside §2.4 UPDATE
  - **Why:** prevents future readers (or LLMs reading the doc) from misplacing the work at MultiScope (per critique sub-finding 3); honors operation-parsimony principle

- **What:** Update `devdocs/how_articulate_simple_should_be.md` MQ2 (§2.2.2) and MQ3 (§2.2.3) sections to make warm-context use **explicit** — these operations ALREADY use warm context per 20-02's anti-fetching re-interpretation, but the doc currently leaves this implicit. Explicit statements help readers understand where context-tier perception happens.
  - **Who:** structural-layer follow-up author
  - **Gate:** condition-bound — apply alongside §2.4 UPDATE
  - **Why:** prevents future readers from looking for context-tier perception in MultiScope when it lives at MQs (per critique sub-finding 4)

### COULD

- **What:** Optionally add an **explainer-note** in §2.4 (or a footnote) on the legitimacy-vs-relevance question-shift between 20-02 and this finding. Explains that the refinement isn't contradiction — 20-02 answered legitimacy (hypothesis-generation IS legitimate cognitive work); this finding addresses relevance (hypothesis-generation isn't always USEFUL when warm context is available).
  - **Who:** explainer-doc maintainer
  - **Gate:** condition-bound — apply when convenient
  - **Why:** helps future readers (and future inquiries) understand the inquiry-chain structure; prevents misreading the refinement as contradiction (per critique sub-finding 5)

- **What:** At Early Operation (~10-20 MultiScope invocations across diverse session states), empirically validate whether LLMs **reliably detect warm-vs-cold session state**. The dual-mode dispatch depends on this detection; if unreliable, may need refinement.
  - **Who:** calibration-infrastructure maintainer
  - **Gate:** observable — after ~10-20 invocations
  - **Why:** validates the dual-mode dispatch mechanism; identifies cases where LLM judgment is unreliable (e.g., partial warmth — some context but not enough; the threshold question)
  - **Depends-on:** MUST item "§2.4 UPDATE." This COULD is GATED — empirical validation occurs after the dual-mode essence is documented and being applied.

- **What:** Consider whether the dual-mode pattern (warm-context primary + hypothetical fallback) extends to other articulate operations facing similar context-tension. The meta-pattern may be project-wide.
  - **Who:** future articulate-architect inquiry
  - **Gate:** condition-bound — when another operation faces similar context-tension
  - **Why:** dual-mode is a generalizable substrate-compliance pattern; explicit capture saves rediscovery cost

### DEFERRED

- **What:** Pass-2 MultiScope essence inquiry — what is MultiScope's essence when articulate runs in two-pass form and `/surfacing` has returned project material? (This was already DEFERRED per 20-02; remains deferred here.)
  - **Gate:** condition-bound — when user is ready to develop articulate-two-pass design (currently `2026-06-05_00-11` finding has variant-(a) tension surfaced); OR observable — when empirical Early Operation evidence reveals patterns that need adjudication
  - **Why (if revived):** completes the two-pass design; the dual-mode pattern from this finding may inform but doesn't pre-decide pass-2 essence

---

## Reasoning

### Why REFINE not SUPERSEDE (Section 2)

The strongest counter — that the 3-tier model is a fundamentally different essence and should supersede 20-02 — was tested at sensemaking Ambiguity 1 and rejected on two grounds:

- **Operation parsimony (K14):** 3-tier perceptions overlap structurally with MQ2 + MQ3 + Deconstruct work (per A2 detailed mapping). Adding them to MultiScope creates duplication.
- **Inheritance preservation:** 20-02's substantive commitments (anti-fetching re-interpretation, reception rule, 4 HR properties, OBJECT-level, lightness) are load-bearing for THIS finding too. Supersession would lose them; refinement preserves them.

### Why the question-shift matters (Section 1)

K1 is the architectural unlock. Without recognizing that 20-02 and the user are answering different questions, the refinement looks like contradiction; with the recognition, it's honest extension. The explicit acknowledgment in the finding (and the optional explainer-note in §2.4) prevents future misinterpretation.

The cost-asymmetry argument from 20-02 (distraction is bounded; missing context-grounded is unbounded) is not refuted by the user's critique — it remains valid as a defense of MultiScope's existence. But it doesn't address the further question of whether, GIVEN that MultiScope exists and is useful in cold-context cases, it should ALSO use warm context when available. The user's question (relevance) is downstream of 20-02's question (legitimacy).

### Why dual-mode essence (Section 3)

The user's distraction critique is valid for warm-context cases. The 20-02 defense (hypothesis-generation is legitimate) is valid for cold-context cases. Single-mode essence sacrifices one case; dual-mode handles both. The dispatch is LLM-judgment-level (no sub-machinery), consistent with how MQ2 + MQ3 already use warm context per 20-02's anti-fetching re-interpretation.

The hybrid candidate (AL6/EV6/CASE5) emerged at sensemaking through cross-perspective convergence — definitional consistency (it preserves MultiScope's niche), domain-transfer (parallels Bayesian prior+likelihood→posterior structure), constraint manipulation (it's the unique solution satisfying substrate + lightness + user-critique simultaneously).

### Why the 3-tier work belongs to MQs (Section 4)

Sensemaking Ambiguity 2 tested whether the 3 tiers really overlap with existing MQs+Deconstruct, by explicit mapping. The mapping is substantive:
- Immediate ≈ MQ3 intent + Deconstruct parts
- Recent ≈ MQ2 relational-stance ("continuation" vs "fresh-start-of-prior")
- Project ≈ MQ2 kinds + verdict + relational-stance

Operation parsimony argues that work shouldn't be duplicated; the user's intuition (warm-context use) is honored by making MQ2+MQ3+Deconstruct's warm-context use explicit in their respective sections AND by MultiScope using warm context for its scale-rendering job.

### Sub-findings from critique (incorporated)

- **§2.4 should consolidate 20-02 + this finding into single coherent section** (P1 sub-finding) — incorporated into MUST item 1
- **§2.4 worked example should contrast cold-context vs warm-context output** (P2 sub-finding) — incorporated into MUST item 1
- **§2.4 should explicitly clarify 3-tier work lives at MQs** (P3 sub-finding) — incorporated into MUST item 2
- **MQ2 + MQ3 sections should explicitly mention warm-context use** (P3 sub-finding) — incorporated into MUST item 3
- **Optional explainer-note on legitimacy-vs-relevance question-shift** (P1 sub-finding) — incorporated as COULD
- **At Early Operation, validate warm-vs-cold detection reliability** (P2 sub-finding) — incorporated as COULD
- **§2.4 + MQ section updates flagged as soft-MUST** — incorporated (MUST items)

---

## Open Questions

### Monitoring

- After ~10-20 MultiScope invocations across diverse session states (Early Operation), monitor whether LLMs reliably detect warm-vs-cold session state at the dispatch level
- Monitor whether the dual-mode dispatch produces consistent outputs for similar inputs (or whether perceived warmth varies session-to-session)
- Monitor whether downstream consumers actually benefit from context-grounded renderings (less distraction; more focused work) vs hypothetical renderings
- Monitor whether MQ2 + MQ3 + Deconstruct sections' explicit warm-context-use statements help readers understand where context-tier perception happens

### Refinement Triggers

- If empirical evidence shows LLMs unreliably detect warm vs cold (e.g., same task in same session sometimes warm-treated, sometimes cold-treated), the dispatch mechanism may need explicit guidance (e.g., explicit user signal; runner-mediated context state)
- If downstream consumers still treat warm-context renderings as concrete-this-codebase even when they're context-grounded hypotheses, the reception rule may need stronger framing
- If new articulate operations face similar context-tension, apply the dual-mode pattern explicitly

### Research Frontiers

- Does the dual-mode pattern (warm-context primary + hypothetical fallback) extend to other articulate operations facing similar context-tension? Other cognitive disciplines?
- What is MultiScope's essence at articulate-two-pass (post-context concrete-rendering)? Pass-2 inquiry (deferred per 20-02)
- Does the legitimacy-vs-relevance question distinction generalize to other discipline-design questions where prior commitments may answer one question but not another?

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
okay but my point is this:

such Hypothesis-generation causes "distraction" more than help. we dont want that. 


i think for articulate simple 

we assume the AI session is warmed up enough to know about project context to a degree. but not delicate context. 

so multiscope should just do this 


immediate scope:  what is being asked, what this task implies in terms of what user is trying to achieve
recent scope: if, only if, recent concext shows each user query  is  relevant to each other, lets say last 3 to 5 messages from user's side,  what is being asked, what this task implies in terms of what user is trying to achieve and how it makes sense with past recent context
project scope : what is being asked is relevant to the project base? or it is newly introduces, if new , from which concept it can be attached to the project, or maybe it sholdnt since it is not relevant at all..



and of course LLM shouldnt go look up more details. 


what do you think of this perspective?  becasue multiscope makes sense only with known context, otherwise it will introduces more noise thatn more value
```

</details>
