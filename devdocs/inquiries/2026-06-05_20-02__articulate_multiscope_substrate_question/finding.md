---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Articulate MultiScope — Substrate Tension + Existence

## Question

From `_branch.md`:

**Question:** Given the substrate boundary (§1 of `devdocs/how_articulate_simple_should_be.md` says articulate uses only the task statement + LLM internal cognition) AND given that project context already in the LLM's context will inevitably bleed into MultiScope's small/big-scope rendering, does MultiScope belong in articulate_simple at all? If YES, what is its substrate-boundary-compliant essence and how should it be characterized so its outputs are not treated as authoritative-this-codebase by downstream consumers? If NO, where does it belong (e.g., only in the two-pass form where /surfacing has returned project material)?

The user raised two concerns when reading §2.4 of `how_articulate_simple_should_be.md`:
1. The substrate boundary says articulate doesn't reach for project context, but if project context is already in the LLM's context window, the LLM will use it whether asked to or not — and MultiScope could leverage that
2. Without context, MultiScope's small/big-scope renderings would be "just guessing" — useless or even harmful

**Goal:** A principled meaning-layer settlement — (a) does MultiScope belong? (b) if YES, what's the substrate-compliant essence + case-spectrum? (c) downstream-consumer reception framing.

**Layer Commitment:** Meaning-layer only. Structural revisions to §2.4 (and optional §1 explication) are downstream.

---

## Finding Summary

- **MultiScope BELONGS in articulate_simple.** Dropping it loses real value (scope-ambiguity surfacing, scope-decision-support, loop-Decomposition scaffolding, Rephrase scope-variant coverage). Moving to two-pass-only loses pre-feed value to `/surfacing`. The substrate concern is real but resolvable.

- **The substrate boundary is anti-FETCHING, not anti-USING-CONTEXT.** This is the architectural unlock for the inquiry. The boundary forbids reaching-OUT for new project state (fetching files, querying external systems); it does NOT (and cannot) restrict the LLM from using its own context window. The re-interpretation EXPLICATES §1's existing operational rule, revealed by §1's example sentences — the "outside-substrate" examples are all specific-this-project-now assertions, not generic context-use.

- **MultiScope's essence at articulate_simple = HYPOTHETICAL-SCOPE MODE.** Renders the item at hypothetical scope endpoints (small/big-scope) in **hypothetical-relational mode** — type-pattern grounded from general knowledge about tasks of this kind, NOT concrete-this-codebase rendering. Direct precedent transfer from MQ2's hypothetical-relational mode in `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md`.

- **"Just guessing" reframed as "hypothesis-generation."** The user's concern that MultiScope without context is "just guessing" is honest but misframed. Hypothesis-generation from general knowledge is a legitimate cognitive operation. The harm the user fears arises from RECEPTION (downstream treating hypothetical as concrete-this-codebase), not from EMISSION (the hypothetical rendering itself).

- **Reception rule is part of the meaning-layer commitment.** Downstream consumers receive MultiScope outputs as **scope-possibility-space** (a hypothesis-set), not as authoritative renderings. The choosing-one-for-actual-work happens at downstream consumers, with user input where needed. Articulate's emission contract is hypothetical-scope mode; the reception contract is hypothesis-set treatment. Both halves are needed for the operation to function correctly.

- **Cognitive operation type and level.** MultiScope is a **render-as-hypothetical-scope-endpoints** operation at the **OBJECT level** (renders the task at hypothetical scope points), distinct from Meta-question's PROPERTY level. MQ1 (Structural/scope perception) sits at the PROPERTY level and produces the scope-axis classification; MultiScope sits at the OBJECT level and renders points along that axis as hypothetical type-patterns.

- **7 harm-cases identified; reception rule is master-mitigation.** The structural harm classes (Rephrase locking onto speculation as concrete; loop disciplines designing around speculation; user adopting speculation as own framing; speculation contradicting actual project state; unwarranted scope-expansion; anchoring bias) all reduce to reception-rule failure. If downstream consumers treat outputs as hypothesis-set, the harm classes are mitigated structurally.

- **4 domain-general high-relevance properties** (case-spectrum where MultiScope is load-bearing): scope-ambiguous tasks (genuinely uncertain user intent), scope-decision-support (user wants to consider narrow + broad), loop-Decomposition scaffolding (piece-tree depends on scope choice), Rephrase scope-variant coverage. These are linguistic features; they apply across engineering, research, content-authoring, strategy, organizational task domains.

- **Always-fire at meaning-layer.** Conditional firing (only when MQ1 detects scope-ambiguity) is process-layer optimization, out of scope for this meaning-layer inquiry. Asymmetric-failure principle (lean toward firing under uncertainty) supports always-fire.

- **MQ1 vs MultiScope distinction preserved.** MQ1 perceives the scope-axis (classification at PROPERTY level); MultiScope renders points along the axis (instances at OBJECT level). MQ1 is less exposed to speculation-harm because classification is bounded; MultiScope is where rendering speculation concentrates and where reception-rule matters.

- **Lightness-as-feature.** The hypothetical-scope solution is structurally light — no sub-machinery, no semantic context-scoping, no full project-state-checking. Heavy alternatives violate the lightweight stance and were rejected.

- **5 inherited commitments compatibility:** task-define meaning-layer (15-39) substrate boundary **RE-INTERPRETED** as anti-fetching (explication, not violation); process-layer (07-48) Stage 3b parallel-with-Deconstruct + reads MQ1 **PRESERVED**; MQ2 reframe (21-12) hypothetical-relational mode **APPLIED** to MultiScope as hypothetical-scope; meta-question taxonomy (10-03) MQ1 = Structural type **PRESERVED**; Deconstruct (19-17) lightness-as-feature + OBJECT-vs-PROPERTY **PRESERVED**. The §2.4 framing in `how_articulate_simple_should_be.md` is **UNDERSOLD-FOR-EXPLAINER-PURPOSE** — revision recommended.

- **Pass-2 essence DEFERRED.** Articulate-two-pass (post-context concrete-rendering) is a structurally distinct essence question; deferred to a separate inquiry per the inquiry's scope (articulate_simple = pass-1 only).

- **Structural-followup work (out of scope per Layer Commitment but enumerated):** §2.4 ADD-CONTENT revision (essence + 4 HR + 4 LR + reception rule + lightness mention + cross-references to §1 substrate + §2.2.2 hypothetical-relational mode + MQ-style generic-application warning + cross-domain examples). Optionally: §1 anti-fetching boundary explication sentence. The §2.4 revision is flagged as a soft-MUST.

---

## Finding

### Small surrounding context

Articulate is the cognitive discipline that expands a compact task statement into a defined task downstream loop disciplines can work on. It has 5 operations: Itemize, Meta-question, Deconstruct, MultiScope, Rephrase. §2.4 of `devdocs/how_articulate_simple_should_be.md` describes MultiScope: "renders each item at multiple defensible scales — small-scope (narrowest defensible) + big-scope (widest defensible), with MQ1's scope-axis answer determining what dimension scope varies along."

The user, reading §2.4, raised two concerns:
1. §1 says articulate doesn't reach for project context. But if project context is in the LLM's context (because the user has been working on the project), the LLM uses it whether asked to or not. MultiScope could leverage that — or is that violating the substrate boundary?
2. Without project context, MultiScope's small/big-scope renderings would be "just guessing" — useless or even harmful

The inquiry settles both concerns. The answer is: the substrate boundary is being misread as anti-using-context when it's actually anti-fetching; MultiScope's essence reframes as hypothetical-scope mode (the same vehicle MQ2 uses); the harm the user fears is real but resolvable via a reception rule that's part of the meaning-layer commitment.

### 1. The substrate boundary is anti-FETCHING, not anti-USING-CONTEXT

The architectural unlock for this inquiry is re-reading the substrate boundary's actual operational rule.

§1 says articulate uses the task statement + LLM internal cognition. It lists examples of what's "inside-substrate" — type-pattern claims like "OAuth flows generally involve a redirect URI and a token exchange step" and "Refactoring tasks usually vary along a granularity axis." It lists examples of what's "outside-substrate" — specific-this-project-now assertions like "the project's auth module lives at `src/auth/v2/index.ts`" and "yesterday's standup decided we're deprecating v1 endpoints."

The "outside" examples are ALL specific-this-project-now claims that require fetching specific facts about the current project. None of them is "any use of context." The boundary's ACTUAL operational rule — revealed by its examples — is anti-fetching, not anti-using-context.

This matters because LLMs cannot operationally enforce strict context-isolation. If the user has been working on a file, that file may be in the LLM's context window. The LLM will use it implicitly when interpreting the task statement. There's no mechanism to "turn off" context-window use for one operation while leaving the LLM functional for others. Strict-isolation is operationally impossible.

The re-interpretation **explicates** what §1's examples already encode. It doesn't change the boundary; it reads it correctly. The boundary forbids:

- Fetching new files
- Querying external systems
- Asserting specific-this-project-now facts in outputs

It does not (and cannot) forbid:

- Using whatever's in the LLM's context window
- Drawing on general knowledge about tasks of this kind

The strongest counter to this re-interpretation — that it's motivated reasoning to keep MultiScope — was tested against §1's example sentences and rejected. §1's outside-substrate examples are uniformly specific-project-state assertions. The re-interpretation explicates the operational rule §1 already encodes; it doesn't invent a permissive new rule.

### 2. MultiScope BELONGS in articulate_simple

Given the substrate re-interpretation, the existential question resolves: MultiScope belongs.

Dropping MultiScope would lose:
- Scope-ambiguity surfacing for genuinely uncertain user intent
- Scope-decision-support when users want to consider narrow + broad before committing
- Loop-Decomposition scaffolding (downstream piece-tree design depends on scope choice)
- Rephrase scope-variant coverage (Rephrase needs scope endpoints to produce variants that span the spectrum)
- Pre-feed value to `/surfacing` (scope-possibility-space can inform `/surfacing`'s territory query)

Moving MultiScope to two-pass-only (only after `/surfacing` returns material) would lose the pre-feed value above. Scope-ambiguity often needs to surface BEFORE `/surfacing` for the runner to formulate `/surfacing`'s input. Many useful cases (research tasks, content tasks, strategy tasks) work fine without project context — the user's scope question doesn't require project state to surface.

The strongest alternative — strict-isolation substrate with MultiScope dropped — is operationally impossible (per the re-interpretation above) and would lose load-bearing value.

### 3. MultiScope's essence = hypothetical-scope mode

The cognitive operation is **render the item at hypothetical scope endpoints in hypothetical-relational mode**.

Three structural elements:

- **Cognitive operation type** — render-as-hypothetical-scope-endpoints. MultiScope is a TRANSFORMATION (renders task-prose into structured scope renderings), not just a perception.
- **Substrate-compliance vehicle** — hypothetical-relational mode (the same vehicle MQ2 uses, per `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md`). The endpoints are expressed as type-patterns from general knowledge about tasks of this kind, not as specific-this-codebase assertions.
- **Cognitive level** — OBJECT level (renders the task at scope-axis points). Distinct from MQ1's PROPERTY level (perceives the scope-axis classification).

The hypothetical-relational mode means the LLM expresses renderings as: *"tasks of this kind typically range from {polishing internals} to {redesigning the whole flow}; the small-scope endpoint is X if the task is of subtype A, Y if subtype B."* It does NOT express: *"this codebase's auth module specifically can be refactored at line 42 of auth-utils.ts up to architectural redesign."* The first is type-pattern hypothesis-generation; the second is specific-project-state assertion. The former is substrate-compliant; the latter violates the substrate boundary.

The user's "just guessing" concern is honest but misframes the operation. Hypothesis-generation from general knowledge — based on patterns the LLM has learned about how tasks of this kind typically range — IS legitimate cognitive work. It's the same kind of operation a senior engineer does when asked "improve the auth module": they generate hypothetical interpretations based on what auth-module improvements usually look like, then ask which interpretation fits.

### 4. The reception rule is part of meaning-layer commitment

The harm the user fears arises from RECEPTION, not EMISSION.

If MultiScope emits hypothetical-scope endpoints and downstream consumers receive them as authoritative-this-codebase renderings, harm follows:

- Rephrase locks onto a speculative scope variant as if concrete; produces rephrasings that don't fit the actual project
- Loop disciplines design work around the speculative scope; users see plans not matching actual project
- User reads speculative renderings as "the LLM understood my task"; user adopts the speculation as their own framing
- Speculation that contradicts actual project state (e.g., big-scope = "redesign whole auth" but the auth module is in frozen-API state)
- Unwarranted scope-expansion (small-scope is user's intent; big-scope is artifact of MultiScope's enumeration)
- Anchoring bias (user gets biased toward one specifically due to how the LLM presents the renderings)

All 6 of these reduce to a single failure mode: **downstream receives hypothetical as concrete**.

The structural mitigation is a **reception rule** that's part of MultiScope's meaning-layer commitment, not just downstream behavior. Articulate's emission contract is: outputs are hypothetical-scope mode renderings. The downstream reception contract is: outputs are received as scope-possibility-space (a hypothesis-set). Downstream consumers (Rephrase, loop disciplines, user reading framing) choose one rendering for actual work, with user input where needed.

Naming the reception rule at meaning-layer matters because the operation's identity depends on both halves: emission produces hypothesis-set; reception treats hypothesis-set. Without naming the reception rule, articulate emits but the contract is opaque — downstream is free to treat hypothetical as concrete, and harm follows. With the reception rule named, the contract is mutual: emission is honest about being hypothetical; reception honors that honesty.

### 5. MQ1 vs MultiScope — axis vs points-along-axis

MQ1 and MultiScope both work on scope but at different levels:

- **MQ1** is a Structural meta-question (per `devdocs/inquiries/2026-06-05_10-03__meta_question_taxonomy_categories/finding.md`). It perceives the scope-axis classification at the PROPERTY level — *"this task varies along the granularity axis"* or *"this task varies along the time-horizon axis."*
- **MultiScope** renders points along the perceived axis at the OBJECT level — *"the narrowest defensible point along the granularity axis is X; the widest is Y."*

MQ1 is bounded — classification produces a discrete axis name. MultiScope's renderings are open-ended — points along the axis could be many. The speculation-harm potential concentrates at MultiScope because the rendering is where the LLM commits to specific endpoints. MQ1's perception is less exposed; the axis classification itself is type-pattern recognition (which scope dimension this task varies along).

This distinction also explains why MQ1's substrate-compliance is less fraught: classification is a meta-perception (perceiving what dimension matters), while MultiScope's rendering is an object-perception (perceiving specific points). Both use general knowledge; both face context-bleed; but MultiScope's commitment to specific endpoints is where the user's "guessing" concern lands hardest.

### 6. 4 domain-general high-relevance properties

The case-spectrum where MultiScope is load-bearing has 4 linguistic-feature properties that apply across task domains:

- **Scope-ambiguous tasks** — the input has genuinely uncertain user intent at the scope dimension. Engineering: *"improve the auth module"* (polish vs redesign). Research: *"investigate the topic"* (narrow lit-review vs comprehensive synthesis). Content: *"write about the launch"* (announcement vs deep-dive). Strategy: *"decide pricing"* (one price vs full ranked-options analysis).

- **Scope-decision-support** — user wants to consider narrow + broad framings before committing. The candidate set helps them choose.

- **Loop-Decomposition scaffolding** — downstream Decomposition's piece-tree design depends on scope choice. Multi-scope hypothesis-set helps Decomposition pre-allocate piece-tree options.

- **Rephrase scope-variant coverage** — Rephrase needs scope endpoints to produce variants that span the spectrum. Without MultiScope's endpoints, Rephrase locks onto one interpretation.

These properties apply across engineering, research, content-authoring, strategy, organizational task domains. Engineering examples are illustrative, not bounding. The same MQ-style generic-application warning that applies to MQ1/MQ2/MQ3/Deconstruct should apply to MultiScope.

### 7. Speculation is hypothesis-generation, not "guessing"

The user's framing — "without context, multiscoping would be just guessing and not useful and even harmful" — is honest about the worry but mis-categorizes the operation.

"Guessing" implies arbitrary picking with no structural basis. Hypothesis-generation, by contrast, draws on general knowledge to produce candidate interpretations grounded in patterns the LLM has learned. When MultiScope renders small-scope and big-scope for *"improve the auth module"*, it's not picking randomly; it's drawing on its general knowledge of what auth-module improvements typically look like across the engineering tasks it has been trained on. The endpoints reflect type-patterns, not project-specific facts.

This is the same kind of cognitive work a senior engineer does when asked *"improve the auth module"* without further context: they generate hypotheses about what improvement might mean (polish internals; restructure organization; redesign the architecture; modernize the implementation patterns), then ask which fits. The hypotheses are not "guesses" — they're hypothesis-generation from accumulated domain knowledge.

Reframing the operation as hypothesis-generation rather than guessing changes how downstream consumers should receive the outputs. Hypothesis-generation produces a hypothesis-set to choose from; guessing produces a single arbitrary answer. The reception rule honors the hypothesis-set nature: downstream chooses one (with user input where needed) for actual work; the un-chosen hypotheses remain visible as alternatives.

### 8. Lightness as a feature

The hypothetical-scope mode solution is structurally light. No sub-machinery, no semantic context-scoping, no full project-state-checking. The operation's runtime cost is the same as the current concrete-rendering framing — render two endpoints; emit them. The substrate-compliance is achieved via expression mode, not via additional machinery.

Heavy alternatives were considered and rejected:
- Full project-state-checking — would require fetching files (violates anti-fetching boundary)
- Semantic context-scoping — would require analyzing what's in context to decide what to use (sub-machinery violation)
- Conditional firing (only when MQ1 detects scope-ambiguity) — would require dispatch logic that violates lightweight criterion 4 if treated as sub-machinery; also harder to detect scope-ambiguity reliably at MQ1 level

The light solution is structurally complete. Future maintainers should not be tempted to add machinery to "improve" MultiScope under the heavy alternatives, because doing so would force articulate's adjacent operations to inherit the weight.

---

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger listing 5 prior outputs + 2 doc sections. The CONCLUDE protocol mandates this section.

### Commitments from `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md`

- **Commitment:** Substrate boundary — articulate uses task statement + LLM internal cognition; no external project state.
  - **Re-test status:** **RE-INTERPRETED** (explication, not violation)
  - **Evidence:** The substrate boundary's actual operational rule is anti-fetching, not anti-using-context. §1's example sentences support this: "outside-substrate" examples are all specific-this-project-now assertions, not generic context-use. The re-interpretation explicates what §1 already encodes; the original commitment is preserved in its operational form.

- **Commitment:** 5 operations + MultiScope as the 4th.
  - **Re-test status:** **PRESERVED**
  - **Evidence:** MultiScope retains its place; only its essence framing shifts.

### Commitments from `devdocs/inquiries/2026-06-04_07-48__task_define_process_layer/finding.md`

- **Commitment:** Stage 3b parallel with Deconstruct; MultiScope reads MQ1's scope-axis answer.
  - **Re-test status:** **PRESERVED**
  - **Evidence:** Stage placement and MQ1 dependency are unchanged. Only essence framing shifts (now hypothetical-scope mode).

### Commitments from `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md`

- **Commitment:** Hypothetical-relational expression mode as substrate-compliance vehicle for MQ2.
  - **Re-test status:** **APPLIED** (precedent transferred)
  - **Evidence:** The same vehicle applies to MultiScope as hypothetical-scope mode. Project-wide pattern extension. MQ2's commitment is unchanged; MultiScope adopts the pattern.

### Commitments from `devdocs/inquiries/2026-06-05_10-03__meta_question_taxonomy_categories/finding.md`

- **Commitment:** 3-type meta-question taxonomy; MQ1 = Structural type at PROPERTY level.
  - **Re-test status:** **PRESERVED**
  - **Evidence:** MQ1's classification remains the scope-axis perception at PROPERTY level. MultiScope is downstream consumer at OBJECT level. The taxonomy is unchanged; MultiScope's relation to MQ1 is clarified.

### Commitments from `devdocs/inquiries/2026-06-05_19-17__articulate_deconstruct_true_value/finding.md`

- **Commitment:** OBJECT-vs-PROPERTY framing; lightness-as-feature principle.
  - **Re-test status:** **PRESERVED**
  - **Evidence:** MultiScope sits at OBJECT level (renders the task), consistent with the framing. Lightness preserved (hypothetical-scope solution is structurally light; no sub-machinery).

### Commitments from `devdocs/how_articulate_simple_should_be.md`

- **§1 substrate boundary:** RE-INTERPRETED as anti-fetching (explicated, not violated). Optional §1 explication addition recommended but not required.
- **§2.4 MultiScope description:** **UNDERSOLD-FOR-EXPLAINER-PURPOSE.** Revision recommended; soft-MUST.

---

## Next Actions

### MUST

- **What:** Revise `devdocs/how_articulate_simple_should_be.md` §2.4 to incorporate the hypothetical-scope mode essence + 4 domain-general high-relevance properties + 4 low-relevance categories + reception rule + lightness-as-feature mention + MQ-style generic-application warning + cross-domain examples. Intervention shape: **ADD-CONTENT**. Cross-reference §2.2.2 (MQ2 hypothetical-relational mode) and §1 (substrate boundary) explicitly.
  - **Who:** structural-layer follow-up inquiry author / explainer-doc maintainer
  - **Gate:** condition-bound — apply when the user is ready to commit the structural revision
  - **Why:** without the revision, the meaning-layer commitment exists only in this finding; the §2.4 framing continues to fail the explainer test that triggered this inquiry. **Soft MUST** — the meaning-layer commitment stands, but finding-vs-spec drift accumulates until §2.4 reflects the hypothetical-scope essence + reception rule.

- **What:** When the §2.4 revision is authored, document the **reception rule** explicitly so downstream consumers (Rephrase, loop disciplines, user reading framing) know to treat MultiScope outputs as scope-possibility-space (hypothesis-set), not as authoritative renderings.
  - **Who:** structural-layer follow-up author
  - **Gate:** condition-bound — apply alongside §2.4 ADD-CONTENT revision
  - **Why:** the reception rule is part of MultiScope's meaning-layer commitment; without explicit documentation in §2.4, downstream consumers may treat outputs as concrete and the harm cases manifest (per critique sub-finding 4)

- **What:** When the §2.4 revision is authored, include **cross-domain examples** spanning engineering, research, content-authoring, strategy, organizational task domains — paralleling the Deconstruct (§2.3) revision pattern. The 4 high-relevance properties are linguistic features; engineering examples should not dominate.
  - **Who:** structural-layer follow-up author
  - **Gate:** condition-bound — apply alongside §2.4 revision
  - **Why:** the 4 HR properties are domain-general; engineering-flavored examples alone would narrow the perceived case-spectrum (per critique sub-finding 3 + sensemaking A8)

### COULD

- **What:** Optionally add an explicit "anti-fetching boundary explication" sentence to §1 of `devdocs/how_articulate_simple_should_be.md` — making explicit what §1's example sentences already encode (the boundary forbids reaching-OUT for new project state; it doesn't restrict using-WHAT'S-IN-context).
  - **Who:** explainer-doc maintainer
  - **Gate:** condition-bound — apply when convenient; lower priority than the §2.4 MUST
  - **Why:** prevents future readers from misinterpreting the substrate boundary as strict-isolation; explicates the operational rule that's currently implicit in §1's examples (per critique sub-finding 1)
  - **Depends-on:** MUST item "§2.4 revision." OVERRIDE: §1 explication is adoption-ready independent of the MUST resolution because the §1 commitment exists in the explainer doc independent of §2.4's revision. Reason: §1 + §2.4 are independent doc sections; either can be revised first.

- **What:** At Early Operation (~10-20 MultiScope invocations across diverse task domains), empirically validate that the 4 HR properties actually predict load-bearing MultiScope firings — observe whether scope-ambiguous tasks produce useful hypothetical-scope renderings, whether reception rule is honored in practice, whether harm cases manifest.
  - **Who:** calibration-infrastructure maintainer
  - **Gate:** observable — after ~10-20 invocations
  - **Why:** Bootstrap state means harm cases are structurally-predicted, not empirically observed; Early Operation evidence validates or refines

- **What:** Consider whether the hypothetical-mode pattern (used by MQ2 and now MultiScope) extends to other articulate operations or future operations facing similar substrate-compliance tension. Capture as a project-wide pattern.
  - **Who:** future articulate-architect inquiry
  - **Gate:** condition-bound — when another operation faces similar substrate-tension
  - **Why:** the pattern's reusability is a meta-finding; explicit capture saves rediscovery cost

### DEFERRED

- **What:** Pass-2 MultiScope essence inquiry — what is MultiScope's essence when articulate runs in two-pass form and `/surfacing` has returned project material? Does the essence shift from hypothetical-scope to concrete-rendering (substrate now includes surfaced material)? Or does it remain hypothetical with refinement?
  - **Gate:** condition-bound — when user is ready to develop articulate-two-pass design further (currently `2026-06-05_00-11` finding has variant-(a) tension surfaced); OR observable — when empirical Early Operation evidence reveals patterns that need adjudication
  - **Why (if revived):** completes the two-pass design; articulate_simple is settled; articulate-two-pass needs its own essence inquiry for MultiScope (and other operations) to handle the post-context essence shift

---

## Reasoning

### Why the substrate-boundary re-interpretation is principled (Section 1)

The strongest counter — that the re-interpretation is motivated reasoning to keep MultiScope — was tested at sensemaking Ambiguity 2 by checking it against §1's example sentences. The "outside-substrate" examples §1 lists are ALL specific-this-project-now assertions (file paths, prior decisions, recent commits, team conversations). None of them is "any use of general context." §1's actual operational rule, revealed by its examples, is anti-fetching. The re-interpretation EXPLICATES rather than CHANGES.

The K11 operational impossibility argument adds defense in depth: strict-isolation (no context use at all) is operationally impossible for LLMs. There's no mechanism to selectively disable context-window use for one operation. The only feasible operational rule is anti-fetching.

The critique sub-finding (#1 §1 explication) acknowledges that §1's current wording is implicit; future readers might still misread. The optional §1 explication addresses this without changing the commitment.

### Why MultiScope BELONGS (Section 2)

Tested against three alternatives at sensemaking Ambiguity 1:

- **Drop entirely** — loses real value (4 useful-case categories); also operationally impossible to drop while keeping scope-rendering work somewhere
- **Move to two-pass only** — loses pre-feed value to `/surfacing` and pre-context useful cases (research/content/strategy tasks where project-state is less load-bearing)
- **Stay with revised essence** — preserves value; addresses substrate concern via hypothetical-scope mode

The third option wins on multiple grounds: respects substrate boundary (via hypothetical-scope mode); preserves useful cases; respects lightweight stance; allows pass-2 to evolve separately.

### Why hypothetical-scope mode (Section 3)

The MQ2 precedent from `2026-06-04_21-12` directly applies. MQ2 faces the same problem — substrate-compliance under context-bleed — and solves it via hypothetical-relational mode (perceives kinds + stance as type-patterns from general knowledge). MultiScope can transfer the same vehicle: render scope endpoints as type-patterns from general knowledge.

The alternative — concrete-rendering essence (current §2.4 framing) — fails substrate-compliance under context-bleed because the renderings will reflect whatever's in context (non-deterministic across sessions; risks asserting specific project state).

The alternative — pure scope-bracketing (linguistic narrowest+widest without type-pattern grounding) — is too thin to be useful for downstream consumers. The hypothetical-scope mode combines linguistic bracketing with type-pattern grounding.

The "render-as-tuple" essence framing from Deconstruct (19-17) generalizes naturally: MultiScope is "render-as-hypothetical-scope-endpoints" at OBJECT level. Both are transformations at the OBJECT level; both serve downstream consumers via structured emission.

### Why reception rule is meaning-layer (Section 4)

The harm cases (HM1-7 from surfacing) all reduce to reception-rule failure. If downstream receives hypothetical as concrete, harm follows; if downstream receives hypothetical as hypothesis-set, harm is mitigated. The reception rule isn't just downstream behavior; it's part of the operation's identity-defining contract.

Naming the reception rule at meaning-layer was tested at sensemaking Ambiguity 9 against the alternative ("reception is downstream-only; not articulate's commitment"). The alternative fails because the operation's value depends on how downstream receives it. Articulate emits with explicit hypothetical framing; downstream consumers receive under hypothesis-set treatment. Both halves are meaning-layer commitments.

### Why speculation = hypothesis-generation (Section 7)

The user's "just guessing" framing was tested at sensemaking Ambiguity 5+7. Speculation in this context isn't arbitrary picking; it's hypothesis-generation drawing on general knowledge about how tasks of this kind typically range. The framing change is structural — hypothesis-generation produces a hypothesis-set; guessing produces an arbitrary answer. The reception rule honors the hypothesis-set nature.

### Sub-findings from critique (incorporated)

The critique discipline produced 7 sub-findings now incorporated:

- (1) **§1 anti-fetching explication** as optional COULD — incorporated
- (2) **§2.4 cross-reference to §2.2.2** — incorporated into MUST 1
- (3) **Cross-domain examples in §2.4** — incorporated into MUST 3
- (4) **Reception rule visibility in §2.4** — incorporated into MUST 2
- (5) **Pass-2 trigger documented in DEFERRED** — incorporated
- (6) **§2.4 revision flagged as soft-MUST** — incorporated (MUST 1)
- (7) **MQ-style generic-application warning** — incorporated into MUST 1

---

## Open Questions

### Monitoring

- After ~10-20 MultiScope invocations across diverse domains (Early Operation), monitor whether the 4 HR properties predict load-bearing firings empirically
- Monitor whether the reception rule is honored in practice by downstream consumers (Rephrase, loop disciplines)
- Monitor whether the hypothetical-relational expression mode holds in practice or slips into assertive mode under context pressure (parallel to MQ2's monitoring per `2026-06-04_21-12`)
- Monitor harm-frequency: do HM1-7 manifest? At what rate? Which reception-rule mitigations work?

### Refinement Triggers

- If empirical evidence shows the hypothetical-relational mode frequently slips into assertive mode, the §2.4 essence specification may need an enforcement sub-rule
- If conditional firing (only when MQ1 detects scope-ambiguity) becomes structurally warranted (e.g., to save cycles on clear-scope tasks at scale), revisit always-fire commitment at process-layer
- If a new articulate operation faces similar substrate-tension, apply the hypothetical-mode pattern explicitly

### Research Frontiers

- Does the hypothetical-mode pattern (MQ2 + MultiScope) extend project-wide as a substrate-compliance vehicle for other operations facing context-bleed tension?
- What is MultiScope's essence at articulate-two-pass (post-context concrete-rendering vs hypothetical-with-refinement)? Pass-2 inquiry.
- Does the substrate boundary's anti-fetching interpretation generalize to other articulate-adjacent disciplines that might face similar tension?

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
u mentions 2.4 MultiScope
MultiScope renders each item at multiple defensible scales.

At minimum: a small-scope (narrowest defensible) version and a big-scope (widest defensible) version. MQ1's scope-axis answer determines what dimension "scope" varies along for this item.

Why two scales: many task statements are scope-ambiguous. "Improve the auth module" can mean polish-the-existing-internals (small) or redesign-the-whole-flow (big). Both are defensible interpretations; without explicit multi-scoping, the downstream loop disciplines lock onto whichever interpretation happens to feel natural to the LLM at the moment — which may not match the user's intent.

MultiScope makes the scope ambiguity visible. The downstream loop can then either choose (with the user's input if needed) or proceed on both interpretations in parallel.

but i am thinking two things 

first of all in devdocs/how_articulate_simple_should_be.md u mention articulate doesnt go check things in project base, yes this is correct but if it is in LLM's context , it will (even if we dont ask it ) use that project context... 

and multiscope can be used with that? 


otherwise , without any context, multiscoping woudl be just guessing and not useful and even harmful. so multiscoping must be extremly careful. it shouldnt be about guesssing..

or maybe multiscoping shouldnt exits in articulate simple? 


lets dive deep into this
```

</details>
