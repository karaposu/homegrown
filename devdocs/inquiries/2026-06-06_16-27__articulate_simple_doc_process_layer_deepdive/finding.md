---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: articulate_simple Doc — Process Layer Deep-Dive

## Question

Given the doc `devdocs/how_articulate_simple_should_be.md` (the explainer for the `articulate_simple` cognitive discipline) in its current state — after recent inquiries on MQ4 Boundary (`devdocs/inquiries/2026-06-06_10-37__articulate_scope_boundary_perception/`), Substrate-vs-Intra orthogonal axis (`devdocs/inquiries/2026-06-06_11-16__mqs_as_seed_qa_overreach_two_pass/`), and the structural re-audit (`devdocs/inquiries/2026-06-06_15-04__articulate_simple_doc_structural_reaudit/`) all applied their MUST-recommendations to the doc — what process-layer ambiguities exist across (a) order-of-operations clarity, (b) intra-Meta-question sub-step ordering, (c) Substrate-MQ routing point in the runtime flow, (d) how the LLM judges intrinsic-vs-extrinsic exclusion at runtime, (e) cold-context detection, (f) empty-output handling, (g) operation-failure modes, (h) bundle-emission gate timing, (i) inter-operation data flow between stages, (j) MQA fire-when-no-contradiction path, (k) two-pass design's current single-pass fallback, and (l) cross-LLM determinism stability; and what bounded-scope corrections are recommended?

**Goal**: make the doc executable — two LLMs given the same query should converge on the same bundle, OR the doc should explicitly state where divergence is permitted and why.

## Finding Summary

- **The doc's process layer has three distinct status types** — (1) visible commitments (the four-stage flow at §3 and per-operation cardinalities; already-explicit), (2) intentional under-specifications authorized by §5 lightweight stance (LLM-judgment permitted at edges by design), and (3) hard visibility gaps where implicit commitments are not surfaced in prose. The audit's primary job was discriminating which gaps fall into which status type.

- **Three hard visibility gaps need text-level marginal-clarifications**: G3 (Substrate-MQ routing point timing) at §2.2.7; G7 (inter-operation data flow override rule between Stage 2 and Stage 4) at §3 Stage 4 description; G10 (cross-LLM determinism status) at §5 lightweight stance. Each fix is one to two sentences appended to existing prose; no section restructure, no diagram changes.

- **For eight intentional under-specifications, the audit recommends DO-NOTHING** (per parsimony preferred over point-of-use marginal-notes). The §5 acknowledgment from G10's MUST serves as the umbrella visibility-fix; per-MQ marginal-notes at §2.2.2 / §2.2.4 / §2.4 would compound rendering noise without adding distinct value.

- **Eleven items documented as DEFERRED with revival-triggers** — eight intentional under-specs (G1, G2, G4, G5, G6, G11, G12, G14) plus three structural concerns (G8, G9, G13). The revival-trigger for most is empirical evidence at Early Operation (approximately 10-20 invocations per §10 calibration trajectory) showing that cross-LLM judgment divergence is operationally problematic on that specific gap.

- **Two new reusable meta-patterns named** for future audits — (1) layer-iterated audit pattern (the methodology of auditing a discipline doc once per cognitive layer — meaning, structural, process), and (2) intentional-under-specification-as-process-layer-permission (lightweight-stance disciplines encode runtime permissions for LLM-judgment divergence at edges, not just authoring-time restrictions). One meta-pattern is deferred: importing the software-spec-authoring under-specification taxonomy (IMPLEMENTATION-DEFINED / UNSPECIFIED / UNDEFINED) when 3 or more disciplines reach Mature-state.

- **The dominant tension axis — lightweight stance vs executability** — is reconciled by recognizing that the doc INTENTIONALLY does not commit to cross-LLM determinism at runtime; the fix is acknowledging the design choice (MUST C3 at §5), not engineering determinism. Engineering determinism would VIOLATE the lightweight stance's authored commitment.

## Finding

A small piece of context for the reader: this audit operates on `devdocs/how_articulate_simple_should_be.md`, the explainer doc for `articulate_simple` — a cognitive discipline that takes a compact task statement and expands it into a per-item bundle of perceptions (an "Itemize" count + a "Meta-question" answer set + a "Deconstruct" tuple + a "MultiDepth" rendering + a "Rephrase" variant set). The discipline is meant to be **lightweight** — single-pass, no runtime enforcement code, LLM judgment authorized at edges. Several prior inquiries have audited the doc at different cognitive layers: meaning (what each operation IS), structural (how the sections are organized), and now process (what STEPS the discipline runs at runtime). The user invoked this audit asking to "dive deep into process layer."

### What the audit found

The process layer presents an apparent tension. The user's goal asks for executability — that two LLMs given the same task statement should converge on the same bundle. But the doc's §5 lightweight-stance commitment says "runtime carries no enforcement code" and "Lightweight enforcement happens at authoring time; runtime carries no enforcement code." These two framings appear to pull in opposite directions: executability suggests determinism, while lightweight stance authorizes LLM-judgment divergence at edges.

The audit resolves this apparent tension by discriminating the doc's process commitments into **three distinct status types**:

**Status type 1: Visible commitments.** The §3 four-stage flow diagram (Itemize → Meta-question + MQ-aggregate-resolution → Deconstruct + MultiDepth → Rephrase) is the dominant artifact. Combined with §2.2's "parallel-perception mode" commitment (each meta-question doesn't read the others' outputs at emission time) and §2.2.6's commitment that MQ-aggregate-resolution fires "after the per-item MQs emit," Stage 2 has an internal order: the four parallel MQs emit first, then MQA fires. Per-operation cardinalities are also visible — Itemize emits a count and N items; MultiDepth emits exactly two outputs (literal + purpose-wrapped); Rephrase emits two or more variants. The §7 self-assessment timing is visible ("at end of each invocation"). The §8 LAYER 1 failure-mode detection happens "by the discipline's end-of-invocation self-check." These are already-explicit; no fix needed.

**Status type 2: Intentional under-specifications.** The §5 lightweight stance authorizes the LLM to make runtime judgment calls at specific edges: when to use cold-context-safe behavior vs warm-context-confident behavior (for MQ2's hypothetical-relational mode, for MQ4's empty-is-valid rule, for MultiDepth's purpose-chain depth); how to judge intrinsic-vs-extrinsic exclusion at runtime (which determines MQ3+MQA-routing vs MQ4-routing of an exclusion signal); when MQ-aggregate-resolution should reconcile a contradiction vs surface it as irreducible tension; whether Stage 3's internal ordering (Deconstruct first or MultiDepth first) matters for output identity; how to determine whether a proposed Meta-question extension would actually constrain a downstream operation (the "mentally simulate" test at §2.2.5). These are LLM-judgment-authorized by the lightweight stance — divergence at these edges is structurally permitted, not a deficiency. The 11-16 inquiry's PERMISSION-not-CONSTRAINT framing makes this explicit for MQ2 and MQ4 mitigations; the audit extends the same framing to the broader set of LLM-judgment edges.

**Status type 3: Hard visibility gaps.** The doc IMPLICITLY commits to specific answers on three procedural questions but doesn't surface those answers in prose. These are gaps not in the meaning of the discipline but in the visibility of its already-committed procedural decisions.

The three hard visibility gaps:

**G3 — Substrate-MQ routing point timing.** §2.2.7 commits that MQ2 and MQ4 (the "Substrate-MQs") flow OUT of `articulate_simple` to a cross-discipline consumer: the runner reads MQ2 and MQ4 from the bundle to formulate the `/surfacing` discipline's input (its territory specification and preparation substrate). What's NOT visibly stated: WHEN in the runtime flow does this routing happen — during MQA's reconciliation? After MQA but before bundle emission? At bundle emission only? Combining §2.2.7 (Substrate-MQs flow to runner) + §3 (bundle is end-of-invocation) + §6 (bundle structure includes MQ-answer-set with MQA's reconciliation) yields the implicit answer: routing happens at bundle emission, post-MQA reconciliation. The runner reads the bundle; the bundle carries MQ2 and MQ4 as part of the MQ-answer-set with MQA's reconciliation-content layered on top (when MQA fires on a contradiction involving MQ2 or MQ4). This is the implicit commitment; surfacing it visibly is a small marginal clarification.

**G7 — Inter-operation data flow override rule (Stage 2's output → Stage 4's input).** §3 says "Stage 4 — Rephrase (constrained by Stage 2's full output, including aggregate-resolution)." This admits two readings: (R1) Rephrase reads raw MQ outputs AND MQA's verdict + content as separate inputs; or (R2) Rephrase reads MQA's reconciled view (which REVISES raw MQ outputs as in the worked Examples C and D where MQA's reconciliation-content overrides MQ2's default kinds-list). The worked Examples at §13 disambiguate: when MQA fires on a contradiction (Example C: intrinsic anti-intent; Example D: extrinsic exclusion), MQA emits a "revised preparation substrate" that downstream consumers read INSTEAD of the raw MQ2 output. When MQA emits ALIGNED with "no tension to resolve" (Example A), raw MQ outputs flow through unchanged. So the implicit override rule is: MQA's reconciled content overrides raw MQ outputs when contradictions exist; otherwise raw flows through. This rule is committed in examples but not surfaced in §3's prose; the marginal-clarification surfaces it.

**G10 — Cross-LLM determinism status (the executability question itself).** §5 lightweight stance ("runtime carries no enforcement code") + §10 calibration trajectory ("qualitative phrasings" preferred until empirical anchors stabilize) + the PERMISSION-not-CONSTRAINT framing from 11-16 together imply that cross-LLM determinism is INTENTIONALLY not guaranteed at runtime. LLM-judgment divergence at edges is authorized by design. The doc never makes this acknowledgment visible — readers asking the executability question (the user's stated Goal) deserve to see the design choice explicitly. The fix is a brief honest acknowledgment at §5.

### What the three fixes actually look like

Each fix is one to two sentences appended to or worked into existing prose at the specified section anchor. None requires a diagram change, a new section, or any restructure. All three honor the inherited Bootstrap-lock-simplest principle from the structural-layer deep-dive (`devdocs/inquiries/2026-06-06_09-58__articulate_simple_doc_structural_layer_deepdive/finding.md`) — favor narrow text-level fixes over broad procedural restructure.

The next section (Next Actions) specifies the exact text-level recommendations. Before that, the audit's status discrimination across all fourteen gaps surfaced by the upstream surfacing discipline is:

- **HARD VISIBILITY GAPS (3, becoming MUSTs)**: G3 / G7 / G10
- **INTENTIONAL UNDER-SPECIFICATIONS per §5 (8, becoming DEFERRED-with-revival-trigger)**: G1 (cold-context detection mechanism), G2 (intrinsic-vs-extrinsic runtime judgment criterion), G4 (Deconstruct operation-failure shape when tuple incoherent), G5 (MultiDepth empty-or-shallow purpose chain handling), G6 (MQ-aggregate-resolution reconcile-vs-surface confidence threshold), G11 (Meta-question extension downstream-simulation test runtime mechanism), G12 (MQ4 "visible" warm-context detection criterion), G14 (Stage 3 within-stage ordering acceptable divergence)
- **DEFERRED for structural or runner-side reasons (3)**: G8 (bundle-emission gate atomic-vs-streamed — partly structural; defer pending §3 diagram restructure inquiry), G9 (re-invocation parameter contract for runner-initiated late-split recovery — already deferred to runner-side specs per §9), G13 (LAYER 1 failure-mode taxonomy under-enumerated — calibration-state concern)

### Reusable meta-patterns surfaced by this audit

Two patterns reach ACTIONABLE status — they are general enough to apply to future audits on other discipline docs and grounded enough in this audit's work to be ready for reuse:

**Pattern 1: Layer-iterated audit pattern.** A discipline doc can be audited at each of three cognitive layers — meaning (what each operation IS), structural (how sections + diagrams + schema are organized), process (what STEPS run at runtime with what gates, judgment criteria, and failure modes). Auditing one layer at a time keeps the inquiry's scope bounded and lets each layer's commitments be tested against the layer's specific concerns. The four prior inquiries on this same doc (09-58 structural / 10-37 meaning / 11-16 meaning-structural / 15-04 structural re-audit) plus this one (process) collectively instantiate the pattern; naming the pattern makes it transferable to future audits on OTHER discipline docs.

**Pattern 2: Intentional-under-specification-as-process-layer-permission.** Lightweight-stance disciplines (those committing to "no runtime enforcement code") encode RUNTIME PERMISSIONS, not just authoring-time restrictions. When a process-layer audit on such a doc finds gaps in runtime detection / judgment / routing / determinism, the gaps split into accidental (the doc fails to commit to something it should) and intentional (the doc deliberately authorizes LLM judgment at this edge). Discriminating intentional from accidental BEFORE recommending fixes prevents the over-specification trap — recommending runtime enforcement code that violates the lightweight stance. This audit's discrimination of fourteen gaps into three / eight / three categories instantiates the pattern; future process-layer audits should apply the discrimination as their first move.

One additional meta-pattern reaches DEFERRED status: the software-spec-authoring under-specification taxonomy (IMPLEMENTATION-DEFINED / UNSPECIFIED / UNDEFINED) could be imported as a formal classification for lightweight discipline docs once 3 or more disciplines reach Mature-state (per §10 calibration trajectory) and need the additional precision. At Bootstrap-state with one discipline, importing the taxonomy is premature.

### Why the audit produced this finding shape rather than alternatives

The audit considered and rejected several alternative shapes; the most load-bearing rejection is documented in the Reasoning section below. Briefly: a Contrarian-rethink mode of the Innovation discipline was considered (would have re-litigated the upstream sensemaking discipline's discrimination); the Innovation discipline's piece-level Inversion considered REORGANIZE-WITHOUT-ADDING and REPAIR alternatives for the three MUSTs (rejected against ADD-CONTENT for parsimony); the Critique discipline's prosecution constructed a "what if audit produces no MUSTs only DEFERREDs" challenge (rejected because the discrimination's HARD-vs-INTENTIONAL distinction is structurally load-bearing — collapsing it would lose information).

## Inherited Commitments Re-test

The audit's branch declared a Synthesis Trigger inheriting commitments from four prior inquiries. Each is re-tested at the PROCESS layer below.

**Commitment 1: Bootstrap-lock-simplest at doc-level (governing principle for doc-evolution decisions)**
- **Source:** `devdocs/inquiries/2026-06-06_09-58__articulate_simple_doc_structural_layer_deepdive/finding.md` (structural-layer commitment that Bootstrap-lock-simplest governs how the doc evolves — favor narrow text-level fixes over broad restructure)
- **Re-test status:** RE-TESTED
- **Evidence:** This audit honored Bootstrap-lock-simplest throughout. All three MUSTs are one-to-two-sentence marginal-clarifications at existing section anchors (§2.2.7, §3 Stage 4, §5). No new sections, no diagram restructure, no runtime pseudo-code. The Constraint Manipulation REMOVE-direction at innovation stage explicitly tested removing Bootstrap-lock-simplest and produced "no candidate" because the relevant constraint is non-removable in this seed's context. The principle continues to govern at process layer.

**Commitment 2: MQ4 Boundary essence (4th meta-question type) + cold-empty-valid rule + intrinsic-vs-extrinsic routing (MQ3+MQA for intrinsic, MQ4 for extrinsic)**
- **Source:** `devdocs/inquiries/2026-06-06_10-37__articulate_scope_boundary_perception/finding.md` (meaning-layer commitment that MQ4 perceives explicit user-declared exclusions in warm-context; empty MQ4 is valid in cold context)
- **Re-test status:** RE-TESTED
- **Evidence:** The audit's G2 (intrinsic-vs-extrinsic runtime judgment criterion) is one of the eight intentional under-specifications — the criterion is left to LLM judgment per §5 lightweight stance. The audit's G3 (Substrate-MQ routing point) confirms that MQ4 flows OUT of articulate to the runner at bundle emission, consistent with MQ4's Substrate-MQ classification per §2.2.7. The audit's worked Example D at §13 (extrinsic exclusion case where MQ4 fires + MQA reconciles MQ4-vs-MQ2 contradiction) demonstrates the routing rule in action. MQ4 commitments stand at process layer.

**Commitment 3: Substrate-MQ vs Intra-articulate-MQ orthogonal axis + PERMISSION-not-CONSTRAINT framing + two-pass design as deferred structural resolution**
- **Source:** `devdocs/inquiries/2026-06-06_11-16__mqs_as_seed_qa_overreach_two_pass/finding.md` (orthogonal axis classifying MQs by consumer-discipline; PERMISSION framing for cold-context mitigations; two-pass design promotion to next-inquiry at meaning layer)
- **Re-test status:** RE-TESTED
- **Evidence:** The audit's G3 (Substrate-MQ routing point timing fix at §2.2.7) is directly consistent with the orthogonal axis commitment — Substrate-MQs flow to the runner at bundle emission. The audit's G10 (cross-LLM determinism non-commitment acknowledgment at §5) extends the PERMISSION-not-CONSTRAINT framing from MQ-specific mitigations to the broader runtime layer — the lightweight stance authorizes LLM-judgment divergence at edges in the same shape PERMISSION authorizes safe-mode emission at cold context. The two-pass design's deferred status remains; the inheritance map row at §11 (reframed by the 15-04 audit) continues to honor user's §9 deferral. Two-pass design's structural §9 update remains deferred per user; this audit does not propose re-opening that deferral.

**Commitment 4: Audit-as-today+tomorrow+reusable triad + marginal-note-as-honest-acknowledgment intervention shape + bounded-scope-or-defer test**
- **Source:** `devdocs/inquiries/2026-06-06_15-04__articulate_simple_doc_structural_reaudit/finding.md` (audit discipline: produce today fixes + tomorrow forward-flags + reusable meta-patterns; marginal-note shape for stale-spec-pointer; bounded-scope-or-defer governance)
- **Re-test status:** RE-TESTED
- **Evidence:** This audit produces today fixes (three MUSTs C1, C2, C3) + tomorrow revival-triggers (eleven DEFERRED entries with empirical-evidence-at-Early-Op triggers) + two new reusable meta-patterns (layer-iterated audit pattern + intentional-under-spec-as-permission). The MUST C3 at §5 uses marginal-note-as-honest-acknowledgment shape directly (acknowledging an intentional non-commitment that was previously implicit). The bounded-scope-or-defer test was applied throughout — every recommendation passes the test (text-level fix that fits a single focused pass), and items failing the test are documented in the DEFERRED list with revival-triggers. The 15-04 audit triad applies cleanly at process layer.

## Next Actions

### MUST

- **What:** Append a one-sentence marginal clarification to §2.2.7 (the "Substrate-MQ vs Intra-articulate-MQ — the orthogonal consumer axis" sub-section) stating: "In the runtime flow, Substrate-MQ routing happens at bundle emission, post-MQA reconciliation — the runner reads MQ2 and MQ4 from the bundle (with MQA's reconciliation-content layered when MQA fires on a contradiction involving them)."
  - **Who:** The user, when ready to apply this audit's recommendations to `devdocs/how_articulate_simple_should_be.md`
  - **Gate:** Observable trigger — when the user authorizes this audit's MUST-application (e.g., "apply M1" or equivalent)
  - **Why:** Surfaces the implicit answer to G3 (Substrate-MQ routing point timing) that was committed across §2.2.7 + §3 + §6 but not visibly stated. Closes a process-layer visibility gap without restructure.

- **What:** Append a one-sentence marginal clarification to §3 Stage 4's description (or to §2.2.6 MQA description; user's choice of anchor) stating: "When MQA fires on a contradiction, its reconciliation-content overrides the contradicting raw MQ outputs as Rephrase's input — see Examples C and D for the override behavior in action. When MQA emits ALIGNED with no tension to resolve, raw MQ outputs flow through unchanged."
  - **Who:** The user
  - **Gate:** Observable trigger — when the user authorizes this audit's MUST-application
  - **Why:** Surfaces the implicit answer to G7 (inter-operation data flow override rule) that was committed in Examples C and D at §13 but not stated in §3's prose. Closes a process-layer visibility gap.

- **What:** Append a two-sentence honest acknowledgment to §5 lightweight stance stating: "Cross-LLM determinism on judgment-call edges (cold-context detection, intrinsic-vs-extrinsic exclusion routing, MQA reconcile-vs-surface threshold) is intentionally not committed at runtime — the lightweight stance authorizes LLM-judgment divergence at these edges by design. Authoring-time enforcement (this doc) ensures the discipline's contract is stable; runtime enforcement is explicitly out of scope."
  - **Who:** The user
  - **Gate:** Observable trigger — when the user authorizes this audit's MUST-application
  - **Why:** Surfaces the implicit answer to G10 (cross-LLM determinism status) that was committed across §5 + §10 + the PERMISSION-not-CONSTRAINT framing from `2026-06-06_11-16` but never made visible. Reconciles the apparent tension between the lightweight stance and the executability framing of the question.

### COULD

(None — the COULD-pool was discriminated to DO-NOTHING per parsimony. The eight intentional under-specifications were considered for point-of-use marginal-notes at §2.2.2 / §2.2.4 / §2.4, but the audit's discipline-chain — sensemaking ambiguity-collapse, innovation piece-level Inversion, critique adversarial collision — converged on DO-NOTHING being preferred. The §5 acknowledgment from MUST C3 serves as the umbrella visibility-fix for all eight under-specs; per-MQ notes would compound rendering noise without adding value. If reader-confusion on intentional under-specs is observed empirically at Early Operation, the COULD revives — see DEFERRED below.)

### DEFERRED

- **What:** Add point-of-use marginal-notes at §2.2.2 (MQ2 hypothetical-relational mode), §2.2.4 (MQ4 empty-is-valid rule), §2.4 (MultiDepth cold/warm context depth) signaling that the LLM-judgment-authorized framing applies at each location.
  - **Gate:** Observable trigger — reader-confusion observed at Early Operation (e.g., questions or downstream-discipline reports interpreting cold-context empty MQ4 as a "must emit something" failure, or interpreting MQ2's hypothetical-relational mode as mandatory)
  - **Why (if revived):** Point-of-use visibility helps readers who scan a single MQ sub-section without prior §5 context. Currently deferred because the §5 acknowledgment from MUST C3 is the parsimony-preferred umbrella; revival depends on empirical evidence that the umbrella is insufficient.

- **What:** Specify a runtime detection criterion for cold-context vs warm-context (currently left to LLM judgment per §5).
  - **Gate:** Observable trigger — empirical evidence at Early Operation (~10-20 invocations per §10) that cross-LLM divergence on cold-context detection is operationally problematic (e.g., one LLM treating session-level prior context as "cold" while another treats it as "warm" on the same input, producing systematically different MQ4 outputs).
  - **Why (if revived):** Currently intentional under-specification per §5 lightweight stance. Revives if empirical data shows the LLM-judgment authorization produces operationally-bad divergence.

- **What:** Specify a runtime judgment criterion for intrinsic-vs-extrinsic exclusion routing (currently left to LLM judgment; intrinsic routes to MQ3+MQA per Example C, extrinsic to MQ4 per Example D).
  - **Gate:** Observable trigger — empirical evidence at Early Op that LLMs systematically route the same exclusion signal differently (one to MQ3+MQA, another to MQ4).
  - **Why (if revived):** Currently intentional under-specification per §5. Revives if divergence is operationally problematic.

- **What:** Specify operation-failure shape for Deconstruct when the (subject, action, deliverable-shape) tuple cannot be coherently inferred.
  - **Gate:** Observable trigger — empirical evidence at Early Op that Deconstruct's commitment-forcing rule produces structurally-bad emissions in specific input patterns.
  - **Why (if revived):** Currently intentional under-spec — commitment-forcing implies "always emits something." Specific failure shape (e.g., low-confidence-tag attached to tuple, explicit ambiguity marker) is left to LLM at edges.

- **What:** Specify operation-failure shape for MultiDepth when the purpose chain cannot be inferred from task statement + general knowledge.
  - **Gate:** Observable trigger — empirical evidence at Early Op that purpose-wrapped output systematically lacks connectives in cases where readers expected at least one.
  - **Why (if revived):** Currently intentional — cold-context shallow chains are authorized. Specific empty-chain shape (fall back to literal-equals-purpose-wrapped? emit a marker?) is left to LLM.

- **What:** Specify a confidence threshold for MQ-aggregate-resolution's reconcile-vs-surface decision (currently qualitative: "reconcile when confidence allows; surface tension as content when not").
  - **Gate:** Observable trigger — empirical evidence at Early Op that MQA inconsistently reconciles the same contradiction shape across LLMs.
  - **Why (if revived):** Currently intentional per Bootstrap calibration trajectory (§10). Numerical anchor expected at Mature Operation; premature at Bootstrap.

- **What:** Specify the runtime mechanism for the Meta-question extension downstream-simulation test ("mentally simulate the downstream operation's plausible variants with and without the extension's answer" — §2.2.5).
  - **Gate:** Observable trigger — empirical evidence at Early Op that LLMs systematically disagree on whether a given extension qualifies under the (b) constraint test.
  - **Why (if revived):** Currently intentional under-spec — the test is LLM-judgment-based per §5.

- **What:** Specify a runtime criterion for "visible in session context" for MQ4 warm-context behavior (when MQ4 should enumerate user-declared exclusions vs stay empty).
  - **Gate:** Observable trigger — empirical evidence at Early Op that LLMs differ on what counts as "visible" session declarations.
  - **Why (if revived):** Currently intentional under-spec — "visible" is LLM-judgment-based.

- **What:** Specify acceptable Stage 3 within-stage ordering divergence ("implementation convenience" — Deconstruct or MultiDepth first).
  - **Gate:** Observable trigger — empirical evidence at Early Op that Stage 3 ordering produces non-equivalent emissions (i.e., not just implementation convenience but actual output divergence).
  - **Why (if revived):** Currently intentional — order divergence allowed, output convergence expected.

- **What:** Specify whether bundle emission is atomic (whole bundle emitted at end of invocation) or streamed (each operation's output emitted as it completes).
  - **Gate:** Condition-bound — when downstream-discipline runners need streaming behavior for performance or progressive-rendering reasons.
  - **Why (if revived):** Currently structural concern (§6 bundle structure) partly out of process-layer scope. Revives if runner-side requirements emerge.

- **What:** Specify the re-invocation parameter contract for runner-initiated late-split recovery from missed Itemize splits.
  - **Gate:** Observable trigger — when runner-side specs need formalization (per §9 deferral to runner-side specs).
  - **Why (if revived):** Already deferred per §9 ("how late-split re-fires are triggered" lives in runner-side specs, one per runner). Audit honors the existing deferral.

- **What:** Specify additional LAYER 1 failure modes beyond the partial list at §8.
  - **Gate:** Observable trigger — empirical evidence at Early Op reveals failure modes not currently enumerated.
  - **Why (if revived):** §8 explicitly notes the list is "best-guess at Bootstrap" and "will sharpen as calibration evidence accumulates." Revival is calibration-state-natural.

- **What:** Import the software-spec-authoring under-specification taxonomy (IMPLEMENTATION-DEFINED / UNSPECIFIED / UNDEFINED) as a formal classification for the doc's intentional under-specs.
  - **Gate:** Condition-bound — when 3 or more cognitive disciplines reach Mature-state per §10 calibration trajectory and need the additional precision.
  - **Why (if revived):** Reusable cross-discipline meta-pattern. At Bootstrap with one discipline, adopting the taxonomy is premature; at Mature with multiple disciplines, the taxonomy adds genuine value.

## Reasoning

### Why this finding shape over alternatives

The audit considered several alternative shapes; the most load-bearing alternatives and their rejections are documented here so a future reviewer can see the full field of what was considered.

**Alternative 1 (rejected at Innovation stage): Contrarian-rethink mode for the Innovation discipline.** The Innovation discipline can run in a Framer-weighted "Contrarian-rethink" mode that deliberately challenges prior commitments. Applied here, this mode would have re-litigated the upstream sensemaking discipline's discrimination (3 HARD / 8 INTENTIONAL / 3 DEFERRED), generating anti-classification candidates such as "what if G10 is INTENTIONAL not HARD" or "all gaps are INTENTIONAL — no MUSTs needed." The methodology-mode decision at Phase 1 of Innovation explicitly considered this alternative and chose Standard default instead, with reason: sensemaking's discrimination was adversarially-tested via eight ambiguity-collapse pairs (including two load-bearing concept tests and one self-reference check); running Contrarian-rethink at innovation stage would re-litigate territory sensemaking explicitly settled and over-elaborate the output.

**Alternative 2 (rejected at piece-level Inversion in Innovation): REORGANIZE-WITHOUT-ADDING for G3's MUST.** Innovation's piece-level Inversion at the G3 MUST piece considered the alternative intervention-shape REORGANIZE-WITHOUT-ADDING — restructuring §3's diagram or Stage 2 description to visually express the parallel-MQs → MQA → bundle-routing flow rather than appending a sentence at §2.2.7. The alternative was rejected for two reasons: (a) it would be a diagram restructure, violating Bootstrap-lock-simplest from `2026-06-06_09-58`; (b) it would expand the §3 diagram's surface, increasing visual complexity without making the routing-point timing more discoverable than a §2.2.7 sentence would. ADD-CONTENT principal preferred.

**Alternative 3 (considered carefully and partially preserved at piece-level Inversion): REPAIR for G7's MUST.** Innovation's piece-level Inversion at the G7 MUST piece considered the alternative intervention-shape REPAIR — modifying §3's existing prose ("Stage 2's full output") in-place to clarify the override rule rather than appending a sentence. Both shapes (ADD-CONTENT and REPAIR) passed the 5-test cycle at viable scores. The audit's recommendation is ADD-CONTENT (append a sentence) for marginal preference on Coherence (less change to existing prose), but the user can equivalently choose REPAIR (rewrite the existing line) — both honor Bootstrap-lock-simplest and produce equivalent visibility.

**Alternative 4 (rejected at Critique stage): No MUSTs, only DEFERREDs.** The Critique discipline's prosecution on the audit-as-a-whole considered the challenge "what if the audit produces no MUSTs, only DEFERREDs?" — all fourteen gaps marked DEFERRED with revival-triggers; no immediate text-level fixes prescribed. Under the §5 lightweight stance, this is a valid contrarian position. But the discrimination identified G3, G7, G10 as HARD (visibility-gaps where the answer is implicit in the doc but not surfaced) — visibility-gaps are STRUCTURALLY distinct from INTENTIONAL under-specs. Collapsing the distinction would lose information the discrimination's adversarial-tested SV4 already settled. The contrarian was rejected; the HARD-vs-INTENTIONAL distinction stands.

**Alternative 5 (rejected at Critique stage): Engineer cross-LLM determinism rather than acknowledge non-commitment.** The user's branch.md Goal includes the alternative framing "two LLMs should converge on the same bundle" as the first clause; the audit could theoretically pursue this by recommending runtime determinism gates. Rejected: §5 lightweight stance explicitly precludes runtime enforcement code; engineering determinism would violate the doc's authored commitment from `2026-06-04_07-48` (the original process-layer commitment establishing the lightweight stance). The audit pursues the SECOND clause of the Goal — "doc should explicitly state where divergence is permitted and why" — via MUST C3's honest acknowledgment at §5. This is the structurally correct path within the inherited constraints.

### Why no candidate received KILL verdict

The Critique discipline produced twelve SURVIVE verdicts and one REFINE-to-DO-NOTHING (the C4 point-of-use COULDs were refined to C4-alt DO-NOTHING per parsimony). Zero KILLs. The absence of KILLs is itself a signal worth noting: Innovation's piece-level Inversion at every meta-decision piece + the Inherited Frame Audit + the methodology-mode alternative consideration collectively filtered out the candidates that would have been KILLED at Critique stage before they reached Critique. The candidate set entering Critique was already pre-filtered for structural soundness. The remaining adversarial work in Critique was discriminating among viable candidates (e.g., C4 point-of-use vs C4-alt DO-NOTHING for parsimony), not eliminating dead candidates.

### Why two reusable meta-patterns were named (and one deferred)

Naming a meta-pattern earns its place when (a) the pattern was implicit across multiple instances but never named as a transferable methodology, AND (b) the naming makes the pattern reusable for future work that would otherwise re-derive it from scratch. The layer-iterated audit pattern qualifies — the 09-58 / 10-37 / 11-16 / 15-04 / this audit chain instantiates the pattern five times, but no inquiry had named it as a methodology future audits could apply to OTHER discipline docs. The intentional-under-specification-as-process-layer-permission pattern qualifies — the 09-58 calibration deferrals + §5 lightweight stance + 11-16 PERMISSION framing all implicitly enacted the pattern, but no inquiry had named the principle that lightweight-stance disciplines encode runtime permissions for LLM-judgment divergence at edges. The deferred software-spec-authoring under-specification taxonomy (IMPLEMENTATION-DEFINED / UNSPECIFIED / UNDEFINED) is genuinely fertile but premature for Bootstrap-state; the revival-trigger (3+ disciplines reach Mature-state) is the right gate.

## Open Questions

### Monitoring

- Whether MUST C1 (G3 routing-point clarification at §2.2.7) is sufficient when downstream readers ask follow-up questions about emission shape (e.g., "does the bundle carry MQ2 raw alongside MQA's reconciliation-content, or only the reconciled view?"). Observable after the audit's MUSTs are applied and readers consume the updated doc.

- Whether the §5 acknowledgment (MUST C3) suffices as umbrella visibility-fix for the eight intentional under-specifications, or whether point-of-use marginal-notes (the DEFERRED COULD) are needed. Observable after the audit's MUSTs are applied + the discipline runs through Early Operation invocations.

- Whether revival-triggers for the eight intentional under-spec DEFERREDs fire as expected at Early Operation (~10-20 invocations). If they fire faster than expected, the lightweight stance's LLM-judgment authorization may need tightening earlier than §10's calibration trajectory anticipated. If they don't fire at all by Mature Operation, the under-specs may be stable as intentional permanently.

### Blocked

- The two-pass design's structural §9 update (referenced by inheritance map row 16 in the doc, currently reframed by the 15-04 audit but with structural §9 prose still saying "separate construction"). Blocked on user's explicit deferral from the 11-16 inquiry. Not in scope for this audit; flagged for visibility because the inheritance row's "recognition that two-pass design is the structural resolution of overreach for Substrate-MQs" hint at G3's runtime-flow answer.

### Research Frontiers

- Whether the layer-iterated audit pattern (Pattern 1) applies cleanly to OTHER discipline docs in the project — e.g., the sensemaking discipline spec, the innovation discipline spec, the surfacing discipline spec. The pattern was named based on its instantiation on the `articulate_simple` doc; transferability is plausible but not confirmed.

- Whether the intentional-under-specification-as-process-layer-permission pattern (Pattern 2) applies to non-lightweight disciplines or only to those committing to the lightweight stance. The pattern was named based on `articulate_simple`'s §5 lightweight stance; other disciplines may have different stance commitments that change the pattern's applicability.

### Refinement Triggers

- If empirical evidence at Early Operation (~10-20 invocations per §10) shows that cross-LLM divergence on any of the eight intentional under-specifications is operationally problematic, the affected gap's status reclassifies from INTENTIONAL to HARD, and the gap moves from DEFERRED to MUST in a follow-up audit.

- If 3 or more cognitive disciplines reach Mature-state per §10 trajectory, the deferred meta-pattern (importing the software-spec-authoring under-specification taxonomy) revives for a cross-discipline meta-inquiry on adopting the formal classification.

- If user reopens the two-pass design §9 structural update deferred at the 11-16 inquiry, the G3 routing-point fix (MUST C1) may need re-examination — two-pass would change the runtime flow's routing point timing (Substrate-MQs would route to `/surfacing` mid-discipline rather than at end-of-invocation bundle emission).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
(use this skill) 

Now using the file we updated; lets dive deep into process layer
```

</details>
