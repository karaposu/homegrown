---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Articulate_simple Invocation-Focus Miss Diagnosis

## Question

From `devdocs/inquiries/2026-06-07_17-21__articulate_simple_invocation_focus_miss_diagnosis/_branch.md`:

**Subject:** a specific MISS in the `articulate_simple` discipline's output. When the distilled discipline (specified at `devdocs/distilled_articulate_simple_thinking_discipline.md`) was applied to the source request at `devdocs/for_future/2.md`, the bundle (saved at `devdocs/for_future/articulate_simple.md`) produced FIVE considered articulations spanning report-count + report-scope + meta-audit dimensions — but NONE of the five captured the user's actual mental model. The user's actual reading, as he later described: "for both innovate and decompose I want to understand how much they actually contribute; in my head both should be processed sequentially as two separate runs; I'm focused on decompose RIGHT NOW so I started describing the process for decompose specifically; the innovate run is implied as a separate future invocation." The user noted that considered articulation 1 (decompose-only report) was "partially correct" and considered articulation 2 (two parallel reports) was "even more correct" but missed that "these are two separate individual runs" rather than "answered symmetrically."

**Action:** diagnose — identify what specifically in the distilled discipline (which operation, which LLM-judgment edge, which asymmetric-failure direction, or which absent concept) caused the discipline to miss the "two sequential individual runs with focus on decompose for THIS run" reading.

**Level:** discipline-spec level. The diagnosis examines the distilled discipline against the observed miss to surface the structural cause.

**Deliverable shape:** a diagnosis report identifying the structural cause(s) of the miss + spec-level attribution (where in the discipline the gap lives) + recommendation on whether the gap is a meaning-layer issue, a process-layer issue, or a tuning issue (per-edge bias / signal-source attention). The diagnosis should be honest about whether the discipline as currently distilled CAN produce this reading at all, or whether a spec change is needed.

**Goal:** A diagnosis that is SPECIFIC (names the operation + runtime step + concept gap precisely), STRUCTURAL (grounded in the discipline's operations / edges / modes / biases, not vague intuition), HONEST (acknowledges whether the discipline as currently distilled CAN produce the missed reading via better LLM judgment or whether a spec change is needed), and ACTIONABLE (points to where in the spec a change would go).

## Finding Summary

- **PRIMARY cause (the answer to "what caused this?").** The distilled `articulate_simple` discipline lacks a typed-axis concept for **deferral** — a state distinct from "in-scope" and "excluded" that captures "mentioned-but-not-this-turn / implied-future-invocation / user-mental-sequencing." This is a CONCEPT GAP at the meaning layer. The user's actual reading required this concept; the discipline's vocabulary doesn't grant it; so the considered articulations could not span it.

- **MOST-AFFECTED operation: MQ4 (the boundary-axis question "what is the user explicitly excluding?").** MQ4's answer space is binary — in-scope or excluded. When the user said two parallel "how many for decompose / how many for innovate" questions but specified only one file path (decompose only), the discipline's MQ4 had two readings to choose between: "innovate is in scope (produce both reports)" OR "innovate is excluded (produce decompose only)." The user's actual reading — "innovate is deferred to a future turn" — is a THIRD state MQ4's binary semantic does not grant.

- **MQ1 is SECONDARY-affected.** MQ1's verdict-axis ("what is the user asking for?") surfaced a "report-count axis" but framed it as "one report vs two reports IN THIS RUN" — never as "is THIS RUN one of multiple implied runs?" MQ1's typed-axis vocabulary, like MQ4's, doesn't include temporal scope. Secondary-affected because MQ1 supports the user's verdict axis, but the load-bearing conflater is MQ4.

- **Itemize's keep-together bias is NOT the load-bearing cause.** Even if Itemize had emitted count = 2 (two items: a decompose-item plus an innovate-item inside ONE invocation), the resulting two-bundle framing would still not capture "this INVOCATION is one of two SEQUENTIAL INVOCATIONS." That is a CATEGORICALLY different concept — multi-item-within-one-invocation vs this-invocation-is-one-of-multiple-implied-invocations. The concept gap is deeper than Itemize's count decision. Adjusting Itemize wouldn't fix the miss.

- **The discipline as currently distilled CANNOT produce the missed reading via LLM judgment alone.** This is a SPEC GAP, not a tuning issue. Even a perfectly-judging LLM running the current spec would collapse "deferred" into either "in-scope" or "excluded" because MQ4's hosting semantic ("what is the user explicitly excluding?") binds the answer space to those two states. The asymmetric-failure principle is a meta-rule at LLM-judgment edges — it can NUDGE within existing categories but it cannot CREATE a missing category. So better prompting won't fix this miss; a spec change will.

- **Fix recommendation (primary): widen MQ4's answer state space from binary to three states — in-scope / excluded / deferred.** Each identified ambiguity at MQ4 gets one of three state classifications: in-scope (will-be-addressed-in-this-invocation), excluded (permanently-out-of-scope), deferred (mentioned-but-not-this-turn / implied-future-invocation). The state classification is part of the LLM-judgment at Edge 4 (2-shape determination) — it is NOT a new sub-machinery; it extends the existing per-axis LLM-judgment with an answer-state tag. This preserves §6 criterion 4 ("no sub-machinery beyond a paragraph per operation"). An OPTIONAL secondary fix would add a temporal-scope sub-axis to MQ1, but it is not load-bearing for this specific miss.

- **Fix recommendation (alternative): REPAIR — modify MQ4's question text from "what is the user explicitly excluding?" to "what is the user explicitly excluding or deferring?".** This is lighter-footprint than the three-state widening — it preserves the function while changing the semantics to admit deferral. The trade-off: REPAIR buries the new state in the question text without an explicit answer-state classifier, so downstream consumers cannot distinguish "excluded" from "deferred" at the bundle structure level. ADD-DIMENSION (three-state) provides explicit structural separation; REPAIR is a single sentence edit. Both options are viable; the user can choose based on how much downstream-consumer clarity they want.

- **All 5 named discipline commitments are PRESERVED by the proposed fix.** Lightweight stance (§6) preserved — the state-classification is part of Edge 4's existing LLM-judgment, not a new sub-machinery. Asymmetric-failure principle preserved + extended (under perceived deliverable-asymmetry, prefer surfacing "deferred" over collapsing to in-or-out). NOT-list rule 1 (no adjudication) preserved — identification of a deferral state is identification, not picking. 2-shape principle preserved at content level (each MQ answer is still identified-ambiguities-list OR explicit-empty; the three-state widening operates at PER-IDENTIFIED-AMBIGUITY STATE classifier level, not as a replacement of the 2-shape answer-content contract). Per-invocation discipline scope preserved — identification of cross-invocation signals is per-invocation work (the LLM perceives the asymmetry signal IN THIS statement); ACTING on the cross-invocation intent (e.g., creating future runs) remains OUT of `articulate_simple`'s scope by design.

- **Concept name "deferral" chosen on project-vocabulary-coherence grounds; reasonable alternatives noted.** The TERM "DEFERRED" already exists in the project vocabulary at different layers — as a Next-Actions category in findings, as a "DEFERRED-revival" disposition in the Innovation discipline's output handling. Using "deferral" at the `articulate_simple` discipline level extends the same word to a new referent (per-invocation deferral within MQ4's answer state space). Alternative names tested: "implied-future-invocation" (risks conflation with Cascade B's "two-pass form"); "temporal scope" (too abstract; doesn't map to user mental model); "pending invocation" (closer to user mental model but less project-coherent). "Deferral" wins on coherence. Reasonable people could prefer alternatives; the choice is defensible-on-coherence-grounds rather than necessitated by user language alone.

- **The miss is GENERALIZABLE, not a one-off.** The triggering pattern — "N questions vs M deliverables" structural asymmetry between framing scope and explicit-target scope — recurs whenever a user mentions multiple subjects but specifies one explicit deliverable target. Wherever a user says "do X, and also Y" while specifying only ONE explicit target (one file path / one URL / one named artifact), the same gap applies. Fixing the gap at MQ4 addresses not just this miss but a class of structurally-similar future misses.

- **Where the fix lives**: the RUNTIME canonical change targets the distilled discipline at `devdocs/distilled_articulate_simple_thinking_discipline.md`. The dev-history docs at `devdocs/how_articulate_simple_should_be.md` (meaning layer) and `devdocs/how_articulate_simple_process_should_be.md` (process layer) MAY be updated for project-internal documentation consistency, but per the canon doc at `docs/canon/thinking_disciplines/how_a_discipline_should_be.md`, the dev-history docs are project-internal documentation, NOT the runtime canonical. The runtime change targets distilled; dev-history alignment is an optional follow-up.

## Finding

### Context — why this miss matters

The distilled `articulate_simple` discipline was created (at `devdocs/distilled_articulate_simple_thinking_discipline.md`) by stripping inquiry-history scaffolding from the development-history docs (the meaning-layer doc + the process-layer doc), keeping only what the discipline IS as a standalone cognitive operation. That distillation step was guided by `docs/canon/thinking_disciplines/how_a_discipline_should_be.md`, which calls for runtime canonical specs to read independently of the project's inquiry architecture.

When the freshly-distilled discipline was applied to the source request at `devdocs/for_future/2.md`, the output (saved at `devdocs/for_future/articulate_simple.md`) produced five considered articulations: (1) decompose-only report; (2) two parallel reports answered symmetrically; (3) one combined report; (4) decompose-only with ask-before-innovate; (5) meta-audit reframing. The user observed that NONE of the five matched his actual mental model — "two sequential individual runs; this run focused on decompose; innovate run is implied for later."

The miss matters because it surfaces the first real-world test of the freshly-distilled spec. Surfacing 18 regions of evidence, Sensemaking adjudicating 8 ambiguities, Decomposition validating 8 pieces, Innovation testing 8 alternatives across 7 mechanisms, and Critique adversarially testing 12 candidates all converge on the same diagnosis. This finding compiles that diagnosis.

### What specifically caused the miss

The diagnostic chain has four linked claims:

**(1) The discipline's typed-axis vocabulary doesn't include a concept for "deferral."** The five MQ axes are MQ1 (verdict), MQ2 (context-need), MQ3 (intent / WHAT), MQ4 (boundary / what's excluded), plus MultiDepth's WHY axis. None of these axes are explicitly "temporal scope" or "deferral" or "implied-future-invocation." The discipline can talk about WHAT the user is asking for, what CONTEXT the response needs, what INTENT the user has, what is EXCLUDED, and WHY the user wants the task done — but it does not have a category for "mentioned-but-not-this-turn." That category is what the user's mental model needs to be expressible.

**(2) MQ4's binary in-vs-out semantic flattens "deferral" into "excluded."** MQ4's question is "what is the user explicitly excluding?" Its answer-state space is binary: in-scope (not excluded) OR excluded. When the discipline's LLM perceives the asymmetry signal in `2.md` (two parallel questions about both disciplines, but only one explicit file path), it has two ways to host that perception under MQ4: read the asymmetry as "innovate is in scope (the second question must mean we should also produce the innovate report)" or "innovate is excluded (the user's explicit file path is decompose-only, so innovate is dropped)." The deferral reading — "innovate is mentioned but is for a future turn" — has no MQ4 answer-state to live in. The discipline's bundle correctly surfaced MQ4 saying "may be intentional vs unintentional" exclusion of other disciplines, but that binary framing already collapsed the deferral nuance.

**(3) Even a perfectly-judging LLM cannot fix this with the current spec.** The asymmetric-failure principle (a meta-rule at LLM-judgment edges directing the discipline to bias toward identified-ambiguities under uncertainty) operates within existing typed-axis categories. It can NUDGE the discipline to emit "innovate might be excluded" as an identified ambiguity, but it cannot create a new category for "deferred." If an LLM heuristically emitted a bullet at MQ4 saying "innovate might be for later," that bullet would be read by downstream consumers — and by Rephrase at Stage 4 — as exclusion-ambiguity, not as deferral. The semantic of MQ4's hosting question binds the answer's interpretation. So this is a SPEC gap, not a tuning issue.

**(4) Itemize's keep-together bias is NOT what caused the miss.** Itemize emitted count = 1 (one work item) under its keep-together bias. If Itemize had emitted count = 2 instead (one item for decompose, one for innovate), the result would have been "two items processed inside ONE invocation" — not "this invocation is one of two SEQUENTIAL INVOCATIONS." The user's mental model is cross-invocation (two separate runs over two separate turns); Itemize's count is per-invocation (how many items in this one statement). These are categorically different concepts. Even alternate-Itemize-with-count-2 does not produce the missed reading. The concept gap is deeper than item count.

### The fix recommendation

**Primary fix shape: ADD-DIMENSION at MQ4.** Widen MQ4's answer-state space from binary (in-scope / excluded) to three states (in-scope / excluded / deferred). For each identified ambiguity emitted at MQ4, the discipline classifies the ambiguity into one of the three states:

- **in-scope** — the user is including this in the current invocation (will be addressed by the bundle's downstream consumers).
- **excluded** — the user is permanently dropping this from scope (will not be addressed now, will not be addressed later).
- **deferred** — the user has mentioned this but is not addressing it this turn (will be addressed in a separate future invocation, or in a subsequent conversational turn).

The classification is part of the existing LLM-judgment at Edge 4 (2-shape determination); each identified ambiguity at MQ4 gets a state tag as part of its identification. This preserves §6 criterion 4 — the state-classification is not a new internal pass; it is an extension of the existing per-axis LLM-judgment with an answer-state tag.

**Alternative fix shape: REPAIR at MQ4.** A lighter-footprint alternative is to modify MQ4's question text from "what is the user explicitly excluding?" to "what is the user explicitly excluding or deferring?". This admits deferral at the question level without adding an explicit per-ambiguity state classifier in the bundle structure. Trade-off: REPAIR is a one-sentence edit; ADD-DIMENSION provides explicit structural separation in the bundle. The user can choose based on how much downstream-consumer clarity they want.

**Optional secondary fix: MQ1 temporal-scope sub-axis.** MQ1's "report-count" framing in this specific miss was in-this-run-scoped (one report vs two reports IN THIS RUN, not across-invocations). For misses where the temporal-scope ambiguity sits primarily at the verdict-axis (what is the user asking for) rather than at the boundary-axis (what is excluded), a MQ1 sub-axis for temporal scope would help. Not load-bearing for this specific miss; mentioned for completeness.

### What is preserved

The diagnostic verdict and the proposed fix preserve all five of the discipline's load-bearing commitments:

- **Lightweight stance (§6)**: the three-state widening adds a per-ambiguity answer-state tag classified as part of Edge 4's existing LLM-judgment. It is NOT a new sub-machinery, and the spec text addition for this fix is on the order of one sentence (the state taxonomy) plus a short definition (what "deferred" means). §6 criterion 4 ("no sub-machinery beyond a paragraph per operation") is preserved if the state-classification is articulated as integral to Edge 4, not as a separate verifier or internal phase.
- **Asymmetric-failure principle**: preserved and extended. The principle is a meta-rule directing the discipline to bias toward identified-ambiguities under uncertainty. The fix adds a per-edge direction: under perceived deliverable-asymmetry (N questions vs M deliverables), prefer surfacing the "deferred" state over collapsing to in-or-out. This extends the principle's application but is consistent with its meta-rule direction (under-emission of deferral is silent information loss; over-emission is downstream-recoverable).
- **NOT-list rule 1 (no adjudication)**: preserved. The discipline identifies that an ambiguity may be "deferred"; it does NOT decide whether it IS deferred. Identification ≠ adjudication. The picking happens downstream (by a runner, by the user, by a downstream loop discipline) — the discipline emits the option.
- **2-shape principle**: preserved at the answer-content level. Each MQ answer is still either an identified-ambiguities-list OR explicit-empty; the three-state widening operates at the per-identified-ambiguity STATE classifier level (each ambiguity in the list gets a state tag), NOT as a replacement of the 2-shape answer-content contract.
- **Per-invocation discipline scope**: preserved. Identification of cross-invocation signals (deferral) is per-invocation work — the LLM perceives the asymmetry signal IN THIS statement; the discipline emits the identification IN THIS bundle. Acting on the cross-invocation intent (e.g., creating future runs, scheduling the follow-up invocation, tracking the implied sequence) is OUT of `articulate_simple`'s scope by design — that remains runner-side. The discipline becomes more expressive without becoming cross-invocation.

### Where the fix lives

The runtime canonical spec at `devdocs/distilled_articulate_simple_thinking_discipline.md` is the primary fix target. Per the canon doc at `docs/canon/thinking_disciplines/how_a_discipline_should_be.md`, the dev-history docs (`devdocs/how_articulate_simple_should_be.md` for meaning layer; `devdocs/how_articulate_simple_process_should_be.md` for process layer) are project-internal documentation — they preserve the development history of the discipline but they are not the runtime canonical. The runtime change targets distilled. If the user wants project-internal documentation alignment, the dev-history docs may also be updated, but that is an optional follow-up.

### Why the diagnosis was concept-gap rather than tuning issue

The strongest alternative diagnosis was "tuning issue — the LLM judgment was insufficient; better prompting at Edge 4 would have surfaced 'deferred.'" That alternative was tested via Sensemaking's Ambiguity 1 and Innovation's Q1.1 framing-semantic Inversion. Both refuted it on structural grounds: even a perfectly-judging LLM running the current spec collapses "deferred" into in-or-out because MQ4's hosting question binds the answer space to those two states. The asymmetric-failure principle can nudge but not create. A bullet "innovate might be for later" emitted under MQ4 would be read as exclusion-ambiguity, flattening the nuance. So tuning alone is insufficient; SPEC change is required.

### Why Itemize was not the load-bearing cause

The strongest alternative attribution was "Itemize keep-together bias forced count = 1 when the user meant count = 2; that's why the discipline missed it." That attribution was tested via Sensemaking's Ambiguity 4 and Innovation's Lens Shifting contrarian. Both refuted it on categorical grounds: count = 2 would have produced "two items processed inside ONE invocation," not "this invocation is one of two SEQUENTIAL INVOCATIONS." The user's mental model is cross-invocation sequencing; Itemize's count is per-invocation item-count. Different categories. Even alternate-Itemize-with-count-2 doesn't produce the missed reading. Itemize is RULED OUT as the load-bearing cause; the concept gap is deeper.

### Why "deferral" rather than alternative names

The strongest naming alternatives were "implied-future-invocation" (risks conflation with Cascade B's two-pass form, which is also about a second invocation but post-context refinement of the SAME statement, not a separate sequential invocation); "temporal scope" (too abstract; doesn't map to user mental model); "pending invocation" (closer to user mental model but less project-coherent). All three are reasonable. "Deferral" wins on project-vocabulary coherence: the TERM "DEFERRED" already exists in the project at other layers (Next-Actions DEFERRED category in findings; DEFERRED-revival Innovation candidate disposition). Using the same word at a new discipline-level referent builds project-wide vocabulary coherence. Reasonable people could prefer the alternatives; the choice rests on coherence, not necessity.

### Why the gap is generalizable

The triggering pattern is structural, not specific to this request. Whenever a user mentions multiple subjects (N) in a statement but specifies only one explicit deliverable target (M < N), the asymmetry signal is present. The user's mental model in such cases often is "I'm asking about all N but I'm starting with the first one" — a deferral semantic. The discipline's current MQ4 binary semantic collapses this pattern in any structurally-similar request. So the fix addresses not just this miss but a class of structurally-similar future misses.

## Inherited Commitments Re-test

This inquiry's `_branch.md` did not declare a Synthesis Trigger (the priors are evidence inputs, not commitments being rolled up into a synthesized version). Per the CONCLUDE protocol's Synthesis Trigger criterion, the formal Inherited-Commitments-Re-test section is not required. However, for transparency, the three priors that fed the diagnosis as evidence are:

- `devdocs/for_future/2.md` — the source request. Read as evidence of textual signals (two parallel questions; one explicit file path; the structural asymmetry).
- `devdocs/for_future/articulate_simple.md` — the articulation output that exhibited the miss. Read as evidence of what the discipline emitted in response to the source request, and which considered articulations it produced.
- `devdocs/distilled_articulate_simple_thinking_discipline.md` — the distilled discipline spec. Read as the artifact being diagnosed (the typed-axis vocabulary; the MQ4 binary semantic; the asymmetric-failure principle; the 5 named commitments).

The canon doc at `docs/canon/thinking_disciplines/how_a_discipline_should_be.md` was read as context for the artifact-location distinction (distilled = runtime canonical; dev-history = project-internal documentation).

No commitments were silently absorbed; all priors were treated as evidence inputs rather than inherited claims.

## Next Actions

### MUST

(None. This finding is diagnostic; the question was "what caused this?" — the cause has been identified. Acting on the diagnosis is the user's downstream choice.)

### COULD

- **What:** Apply the primary fix — widen MQ4's answer-state space in the distilled discipline at `devdocs/distilled_articulate_simple_thinking_discipline.md` from binary (in-scope / excluded) to three states (in-scope / excluded / deferred). Add a short definition of "deferred" (mentioned-but-not-this-turn / implied-future-invocation / user-mental-sequencing). Articulate the state-classification as part of Edge 4's existing LLM-judgment (NOT as a new sub-machinery). Extend the asymmetric-failure principle's per-edge direction: under perceived deliverable-asymmetry, prefer surfacing "deferred."
  **Who:** the user or a future inquiry editing the distilled discipline doc.
  **Gate:** observable — when a follow-up articulation invocation surfaces another deliverable-asymmetry case, OR when the user decides the fix is worth applying based on this diagnosis alone.
  **Why:** addresses the structural cause of the miss; preserves all 5 named commitments; addresses a generalizable pattern, not just this one-off miss.

- **What:** Apply the alternative fix instead — REPAIR MQ4's question text from "what is the user explicitly excluding?" to "what is the user explicitly excluding or deferring?". Lighter-footprint than ADD-DIMENSION; preserves function while admitting deferral at the question level.
  **Who:** the user or a future inquiry.
  **Gate:** condition-bound — chosen instead of the primary fix if the user prefers the lighter-footprint edit and doesn't need explicit per-ambiguity state classification in the bundle structure.
  **Why:** addresses the same gap with less spec-text change; trade-off is reduced downstream-consumer clarity.
  **Depends-on:** mutually exclusive with the primary COULD above. Choose one OR the other, not both.

- **What:** Apply the optional secondary fix — add a temporal-scope sub-axis to MQ1's verdict-axis vocabulary, addressing across-invocations vs this-invocation framing at the "what is the user asking for?" level.
  **Who:** a future inquiry.
  **Gate:** condition-bound — only if subsequent articulation misses surface temporal-scope ambiguity at MQ1 specifically (not MQ4).
  **Why:** completes the temporal-scope coverage if MQ4-only proves insufficient.
  **Depends-on:** the primary COULD ("Apply the primary fix"). This COULD is GATED — do not act until the primary or alternative fix is applied AND further articulation misses surface specifically at MQ1.

- **What:** Update the dev-history docs at `devdocs/how_articulate_simple_should_be.md` (meaning layer) and `devdocs/how_articulate_simple_process_should_be.md` (process layer) to align with whichever fix is applied, for project-internal documentation consistency.
  **Who:** a future inquiry.
  **Gate:** condition-bound — when the user wants project-internal documentation aligned with the distilled runtime canonical.
  **Why:** preserves consistency across the project's three-layer documentation (meaning / structural / process / distilled-runtime); not required for runtime behavior but useful for future contributors.
  **Depends-on:** the primary COULD or the alternative REPAIR COULD. This COULD is GATED — do not act until the runtime canonical change is applied first.

### DEFERRED

- **What:** Promote "concept-gap-vs-tuning-issue" from candidate meta-pattern (sample-size 1, this inquiry) to ACTIONABLE meta-pattern.
  **Gate:** condition-bound — when 3+ inquiries surface the same diagnostic distinction (a fresh-distilled discipline produces a miss where the cause is a missing concept, not insufficient LLM judgment).
  **Why (if revived):** would surface a structural-diagnostic pattern for first-real-world-test misses of distilled discipline specs.

- **What:** Promote "deliverable-asymmetry-as-perception-axis" from candidate meta-pattern (sample-size 1) to ACTIONABLE.
  **Gate:** condition-bound — when 3+ inquiries surface deliverable-asymmetry signals that the discipline fails to perceive at any operation's typed-axis vocabulary.
  **Why (if revived):** would surface a structural-perception pattern about asymmetry signals lacking named perception axes.

- **What:** Test the discipline-level assembly emergent pattern "diagnostic-finding-with-concept-gap-as-load-bearing-cause" across other freshly-distilled disciplines.
  **Gate:** condition-bound — when 3+ disciplines have been distilled and tested in real-world use, surface their first-real-world-test misses, and the same diagnostic shape recurs.
  **Why (if revived):** would validate the assembly emergent pattern at sample-size 3+.

## Reasoning

### Why concept-gap rather than tuning issue

The strongest alternative diagnosis tested was "tuning issue — the LLM should have surfaced 'deferred' as a hedged bullet under MQ4 even without an explicit category." The discipline doesn't strictly forbid emitting such a bullet; the asymmetric-failure principle directs the discipline to bias toward identified-ambiguities under uncertainty.

But the structural analysis refutes this: MQ4's hosting question semantic ("what is the user explicitly excluding?") binds the answer space to in-vs-out. An LLM-emitted bullet "innovate might be for later" placed at MQ4 gets read by downstream consumers — and by Rephrase at Stage 4 — as exclusion-ambiguity. The semantic of the host question determines how the answer is interpreted. So the bullet's nuance is flattened at the consumer side, even if the LLM-side intent was to surface deferral.

The asymmetric-failure principle is a meta-rule at LLM-judgment edges. Its authority bound is "nudge within existing categories." It cannot CREATE a missing category. A perfectly-calibrated LLM running the current spec would still collapse deferral into in-or-out. So this is a SPEC gap, not a tuning issue.

### Why MQ4 most-affected, not MQ1

The user's "deferred" reading touches both MQ1 (the verdict — what is the user asking for) and MQ4 (the boundary — what is excluded). MQ1's "report-count axis" in the bundle was framed as one-vs-two IN THIS RUN — missing the temporal-scope sub-question. MQ4's "other-disciplines exclusion" was framed binary — missing the deferral state.

MQ4 is MOST-affected because its hosting semantic IS the explicit conflater. "Excluded" is structurally adjacent to "deferred" (both sit on the in-vs-out axis), so the deferral nuance naturally LIVES at MQ4 if it lives anywhere. MQ4's binary collapses two distinct states into one; that collapse is the load-bearing failure.

MQ1 is SECONDARY-affected — the "report-count axis" framing missed the across-invocations dimension. A future MQ1 sub-axis for temporal scope could help, but the load-bearing fix is at MQ4. Note that without explicit acknowledgment of MQ1 secondary-affected, a reviewer might wonder why MQ1 isn't named; the patch refinement (per Innovation + Critique) captures this.

### Why Itemize ruled out

The strongest alternative attribution tested was "Itemize keep-together bias forced count = 1; that's the cause." If Itemize had emitted count = 2, the per-item processing would have produced two bundles (one for decompose, one for innovate), arguably closer to the user's reading.

But "two items inside ONE invocation" is categorically different from "this invocation is one of two SEQUENTIAL INVOCATIONS." The user's mental model is cross-invocation (two separate runs over two separate turns). Itemize's count is per-invocation (how many work items in this one statement). Even count = 2 doesn't produce the missed reading. Itemize is RULED OUT.

### Why widen MQ4 rather than add MQ5

The strongest alternative fix shape tested was "add a new MQ5 axis for temporal scope." That alternative was rejected on parsimony grounds: a new MQ axis expands the discipline's runtime cost (5 MQs per item instead of 4) and may over-extend the discipline's per-invocation scope by introducing cross-invocation concerns as a first-class typed axis. Widening MQ4's answer-state space is more parsimonious — preserves the MQ count, adds one state to the answer-space (in-scope / excluded / deferred). "Deferral" is structurally adjacent to "boundary" (both on the in-vs-out semantic), so widening MQ4's host is natural.

REPAIR (modify MQ4's question text) was also tested as an even-lighter-footprint alternative. Both ADD-DIMENSION and REPAIR are viable; ADD-DIMENSION provides explicit per-ambiguity state classification in the bundle structure (clearer downstream consumer contract); REPAIR is a one-sentence edit. Both options are surfaced in the finding so the user can choose.

### Why "deferral" rather than alternative names

The strongest naming alternatives tested were "implied-future-invocation" (risks conflation with Cascade B's two-pass form, which is about post-context refinement of the SAME statement, not a separate sequential invocation); "temporal scope" (abstract; doesn't map to user mental model); "pending invocation" (closer to user mental model but less project-coherent).

"Deferral" wins on project-vocabulary coherence — the TERM is already in the project at other layers (DEFERRED Next-Actions category in findings; DEFERRED-revival Innovation candidate disposition). Using the same word at a new discipline-level referent builds vocabulary coherence across the project's three layers. The alternatives are reasonable; the choice is defensible-on-coherence-grounds rather than necessitated by user language alone. Critique flagged that reasonable people could disagree; the finding records the choice and its rationale, leaving the user free to swap names if they prefer.

### Why the gap is generalizable

The triggering pattern is structural: "N questions vs M deliverables" asymmetry between framing scope (multiple subjects mentioned) and explicit-target scope (single deliverable named). This recurs wherever a user says "do X, and also Y" while specifying only one explicit target. The user's mental model in such cases often is "I'm asking about all N but I'm starting with the first one" — a deferral semantic. The discipline's current MQ4 binary semantic collapses this in any structurally-similar request.

Fixing the gap at MQ4 addresses not just this miss but a class of structurally-similar future misses. The fix is therefore high-value, not just patch-level.

### Cross-domain confirmation

The three-state shape (in-scope / excluded / deferred) is confirmed by cross-domain pattern transfer from three different domains: task management systems (todo / doing / done / blocked / DEFERRED); message queue systems (in-queue / consumed / dead-lettered / DEFERRED-for-retry); project planning (in-scope / out-of-scope / PARKING-LOT). All three domains converge on a distinct "deferred" or "parking-lot" state alongside in-scope and excluded. This supports the three-state shape as structurally correct, not just an articulate_simple-specific patch.

## Open Questions

### Monitoring

- Observable after the fix is applied: do follow-up articulation invocations on structurally-similar requests (multi-subject mention with single target) now correctly surface "deferred" as an identified MQ4 ambiguity state?
- Observable after 3+ inquiries: do other discipline misses surface "concept-gap-vs-tuning-issue" as a recurring diagnostic type, promoting the meta-pattern from DEFERRED-revival to ACTIONABLE?
- Observable after 3+ inquiries: do other discipline misses surface "deliverable-asymmetry-as-perception-axis" as a recurring structural-perception pattern, promoting the meta-pattern from DEFERRED-revival to ACTIONABLE?

### Blocked

- Cascade B (two-pass-as-discipline-identity design from the `2026-06-07_12-22` finding) — still blocked by the cascade-acknowledgment-without-pre-decision pattern. Adjacent to but distinct from this inquiry's "deferral" concept; the two share the "second invocation" theme but at different referents (Cascade B = post-context refinement of the same statement; this inquiry's deferral = separate sequential invocation of a related-but-distinct subject).

### Research Frontiers

- Is there a broader project-level concept of "user mental sequencing across turns" that should be modeled in the loop-level architecture (runner-side), as a complement to articulate_simple's per-invocation identification of cross-invocation signals? Out of scope for this inquiry. No known path.
- Should other disciplines (sensemaking / decompose / innovate / critique) also acquire similar three-state answer-space taxonomies at their respective in-vs-out axes? Out of scope; would require domain-specific analysis per discipline.
- Are there other structural-asymmetry signals (beyond N-questions-vs-M-deliverables) that the discipline currently fails to perceive due to absent perception axes? Out of scope; would require a separate inquiry surfacing the pattern.

### Refinement Triggers

- A subsequent articulation invocation surfaces a temporal-scope ambiguity that sits primarily at MQ1 rather than MQ4 — triggers consideration of the optional secondary fix (MQ1 temporal-scope sub-axis).
- The "deferral" concept name proves problematic in downstream use (e.g., reviewers conflate it with the DEFERRED Next-Actions category in findings) — triggers re-evaluation of the alternative names (pending invocation / implied-future-invocation).
- A subsequent inquiry surfaces a structurally-similar miss at a DIFFERENT discipline (sensemaking, decompose, etc.) — triggers consideration of whether the three-state taxonomy generalizes beyond articulate_simple.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
read devdocs/for_future/articulate_simple.md fully together with devdocs/for_future/2.md

and also devdocs/distilled_articulate_simple_thinking_discipline.md

and i want you to understand that one articulation regarding devdocs/for_future/2.md

was user who wrote that text he started with a task defining in his head 

for both innovate and decompose i want to understand how much they actually contibute
 and then he started describing the process just for decompose , in this mind both should be processed sequentially, and he was focused on decompose

and when we used devdocs/distilled_articulate_simple_thinking_discipline.md for it, non of the Considered articulations actaully considered this , 

the first option is correct partially Decompose-only report , 

the second option  was also correct , even more than first one, Two parallel reports, but it is missing that these two are seperate individual runs,  and "The user's two parallel "how many for X / how many for Y" questions are answered symmetrically. " part feels like it is not clear these are two individual runs, 

can u check what caused this ?
```

</details>
