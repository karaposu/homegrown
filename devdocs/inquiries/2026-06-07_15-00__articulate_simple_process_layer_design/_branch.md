# Branch: Articulate_simple Process-Layer Design

## Question

- **Subject:** the **process layer** of articulate_simple (the discipline described at the meaning layer in `devdocs/how_articulate_simple_should_be.md` and structurally re-organized at the 13-30 structural-layer redesign). The meaning layer is settled by the cascade chain (21-52, 23-18, 11-40, 12-22) and earlier foundational findings. The structural layer is settled by the 13-30 redesign. The process layer — HOW the discipline RUNS at invocation time — has been deliberately deferred per the meaning-layer doc's §9 ("Process-layer concerns... live in runner-side specs") AND its §6 ("Cross-LLM determinism on judgment-call edges... is intentionally not committed at runtime"). The deferral leaves a real gap: the discipline's per-stage runtime procedures, gate-firing rules, detection mechanisms for LLM-judgment edges, self-assessment runtime check, late-split re-fire triggers, spawn-or-process decision logic, bundle assembly mechanics, and interfaces with neighbors (/surfacing + runner + downstream loop disciplines) are not specified anywhere. This inquiry produces that specification — the process-layer artifact that complements the meaning-layer doc.

- **Action:** design — produce a process-layer specification for articulate_simple that articulates the runtime procedure without over-specifying the LLM-judgment edges the meaning-layer doc deliberately leaves open.

- **Level:** discipline-runtime level (how each of the 5 operations runs at invocation time; how the stages compose; how gates fire; how the bundle gets assembled and emitted; how recovery works).

- **Observation targets** (preserved as separate items):
  1. **Per-stage runtime procedure for each of the 5 operations** — Itemize / Meta-question (including MQA) / Deconstruct / MultiDepth / Rephrase. WHAT each operation reads, WHAT it emits, WHAT the runtime steps are, WHERE LLM judgment fires, WHERE deterministic rules fire.
  2. **Cold-context vs warm-context detection mechanism** — how the discipline detects whether session context contains relevant prior material vs is fresh. The meaning-layer doc commits "session context already loaded" as the warm-context input but doesn't specify HOW the LLM detects it at runtime.
  3. **Intrinsic-vs-extrinsic exclusion-ambiguity routing** — MQ4 handles extrinsic (warm session declarations); MQ3 + MQA handle intrinsic (in-statement signals like "from scratch"). The routing rule is named at the meaning layer (§2.2.4); the runtime mechanism is not specified.
  4. **MQA reconcile-vs-surface threshold** — when MQA reconciles an overlap vs surfaces it as joint-resolution-need. The meaning-layer doc commits "hybrid reconcile-OR-surface" but doesn't specify the runtime threshold.
  5. **2-shape determination mechanism** — how does the LLM determine identified-ambiguities-list vs explicit-empty at runtime for each MQ + for MultiDepth? The 18-21 empty-as-content principle + the §2.4 perceivability principle ("MultiDepth doesn't pad — emits what's perceivable") are the meaning-layer commitments; the runtime detection mechanism is not specified.
  6. **AMBIGUITY-NATURE distinction operationalization** — how does the LLM operationalize MQ3's WHAT axis vs MultiDepth's WHY axis at runtime? The 23-18 finding's AMBIGUITY-NATURE distinction is meaning-layer; the runtime detection mechanism is not specified.
  7. **Multi-source composition runtime enforcement for Rephrase** — how does Rephrase enforce the 4 constraint sources at runtime (Deconstruct deliverable-shape + identified-ambiguities-list + MQ4 NOT-list + substrate-bounded)? The §6 lightweight stance commits "runtime carries no enforcement code"; how is the constraint composition operationalized without runtime enforcement code?
  8. **Realistic variant count (2-6 per item) determination** — the 11-40 finding's 2-6 range was articulated as a claim at meaning layer. How is the variant count determined at runtime? Is there a target / cap / floor? When does the LLM stop generating variants?
  9. **Late-split re-fire triggers (runner-initiated)** — the §1 NOT-list mentions "runner-initiated re-fire mechanism." What specifically triggers it? Who detects late-split? How does the re-fire compose with the original invocation's bundle?
  10. **Spawn-or-process decision when Itemize count > 1** — the meaning-layer doc commits "When count > 1, the runner spawns N sibling work items." What's the runtime decision logic? Where does the spawn-vs-process branch get made?
  11. **LAYER 1 mode self-check runtime** — §7 commits "LAYER 1 modes self-check at end-of-invocation" + names specific modes. What's the runtime procedure for each mode's self-check?
  12. **HIGH/MED/LOW confidence assignment** — §8 commits the confidence rubric (Primary objective + Secondary subjective discriminators). What's the runtime procedure for assigning confidence per invocation?
  13. **Bundle assembly mechanics** — how does the discipline assemble the per-item bundle from the 5 operations' outputs? Field-level integration; ordering; statement-level fields (count + identifiers + self-assessment).
  14. **Interface with /surfacing** — the meaning-layer doc commits MQ2 + MQ4 as runner-consumed for /surfacing input formulation. What's the runtime hand-off mechanism?
  15. **Re-invocation modes** — the meaning-layer doc commits "Recovery from a late-discovered missed Itemize split happens via runner-initiated re-invocation, not via in-invocation iteration." What are the named re-invocation modes (e.g., "context-informed-refinement" mentioned in §9 OUT-OF-SCOPE list — that's for two-pass; but what about within-articulate_simple recovery modes)?
  16. **Relationship to §6 lightweight stance constraint** — §6 commits "Runtime self-enforcement would itself be sub-machinery — a check running on every invocation, which violates criterion 4 directly. Lightweight enforcement happens at authoring time; runtime carries no enforcement code." This is a HARD CONSTRAINT for the process-layer design — process-layer cannot introduce runtime enforcement code. How does the process-layer spec respect this while still articulating the runtime procedure?
  17. **Relationship to §9 OUT-OF-SCOPE commitment** — §9 commits process-layer as out of scope for the meaning-layer doc and routes to "runner-side specs." This inquiry produces process-layer content; where does it LIVE? A new sibling doc (e.g., `devdocs/articulate_simple_process_layer.md`)? Part of the runner spec? Inline in the meaning-layer doc with a clear partition? The artifact-shape decision is part of this inquiry's scope.

- **Deliverable shape:** process-layer specification + decisions on (a) WHERE the spec lives (artifact-shape decision); (b) the per-stage runtime procedures; (c) how LLM-judgment edges are honored without over-specification; (d) the gate-firing rules; (e) the recovery/re-fire mechanisms; (f) the bundle assembly mechanics; (g) the interfaces with neighbors; (h) explicit named cascading implications.

**Question statement:** Given that the meaning-layer doc `devdocs/how_articulate_simple_should_be.md` defers process-layer concerns to runner-side specs (per §9) and commits to no runtime enforcement code (per §6) — and given that the meaning-layer cascade chain (21-52, 23-18, 11-40, 12-22) has settled the operations' essences while leaving runtime procedure unspecified — what is the process-layer specification for articulate_simple: specifically (a) the per-stage runtime procedure for each of the 5 operations + MQA; (b) the gate-firing rules for cold-context detection, intrinsic-vs-extrinsic routing, MQA reconcile-vs-surface threshold, 2-shape determination, AMBIGUITY-NATURE operationalization, multi-source composition runtime enforcement, realistic variant count; (c) the recovery mechanisms (late-split re-fire triggers, spawn-or-process decision, re-invocation modes); (d) the self-assessment runtime procedure (LAYER 1 mode self-check, confidence assignment); (e) the bundle assembly mechanics + interfaces with /surfacing + runner + downstream loop disciplines; (f) the artifact-shape decision (where the spec LIVES — separate doc, part of runner spec, or co-located with meaning-layer doc with partition); (g) preservation of the §6 no-runtime-enforcement-code constraint?

## Goal

- **Criterion:** A confident process-layer specification that:
  - PRESERVES all settled meaning-layer commitments (21-52 / 23-18 / 11-40 / 12-22 / earlier)
  - PRESERVES the 13-30 structural-layer redesign (the meaning-layer doc's organization)
  - RESPECTS §6 lightweight stance constraint (no runtime enforcement code)
  - RESPECTS §9 OUT-OF-SCOPE commitment (process-layer doesn't live in the meaning-layer doc)
  - SPECIFIES the runtime procedure for each of the 5 operations + MQA
  - SPECIFIES gate-firing rules for the named LLM-judgment edges (cold-context detection / intrinsic-vs-extrinsic routing / MQA threshold / 2-shape determination / AMBIGUITY-NATURE / multi-source enforcement / variant count)
  - SPECIFIES recovery mechanisms (late-split re-fire / spawn-or-process / re-invocation modes)
  - SPECIFIES self-assessment runtime (LAYER 1 self-check / confidence assignment)
  - SPECIFIES bundle assembly + interfaces with neighbors
  - DECIDES the artifact-shape (where the spec lives) + rationale
  - NAMES any cascading implications honestly per cascade-acknowledgment patterns
- **Use case:** Produce the process-layer artifact for articulate_simple; enable runners (and any future runner) to implement the discipline consistently.
- **Desired outcome:** A clear process-layer specification the user can act on.
- **What would fail:**
  (a) producing process-layer content that violates §6 (introducing runtime enforcement code);
  (b) producing process-layer content in the meaning-layer doc (violating §9 OUT-OF-SCOPE);
  (c) over-specifying LLM-judgment edges (against §6 "lightweight stance authorizes LLM-judgment divergence by design");
  (d) under-specifying (failing to provide enough procedure for a runner to implement);
  (e) failing to engage the 4 cascade refinements' process-layer implications (e.g., 2-shape determination mechanism for MQs; AMBIGUITY-NATURE operationalization);
  (f) extending into meaning-layer revisions (meaning is settled; process-layer preserves meaning);
  (g) extending into structural-layer revisions of the meaning-layer doc (structure is settled; process-layer lives in its own artifact);
  (h) failing to make the artifact-shape decision (where the spec LIVES) — leaving readers without a path to find the process spec is a structural defect at process-layer level;
  (i) failing to address any of the 17 observation targets;
  (j) failing to engage the §1 NOT-list rule 3 ("No adjudication") at the process-layer level (the discipline emits options; runtime does NOT adjudicate which option is correct — process-layer must not introduce adjudication mechanisms);
  (k) over-engineering by introducing fictional mechanisms not grounded in observed LLM behavior or runner needs.

## Source Input

```text
okay now should dive deep of articulate simple (desc in devdocs/how_articulate_simple_should_be.md) process layer , since we made lots of changes , lets redo this
```

## Scope Check

Question covers goal. The 17 observation targets enumerate the named process-layer concerns at meaning + structural + cascade-driven granularity.

Specific-vs-pattern check: the user's request is specific to articulate_simple's process layer. Broader patterns (general "process-layer-design-for-discipline-explainer-disciplines" or "lightweight-stance-respecting-process-layer-patterns") may surface as Research Frontiers; not in-scope for this inquiry's verdict.

## Layer Commitment

**Primary layer: PROCESS.** The user explicitly says "process layer." The question is about HOW the discipline RUNS at invocation time. Meaning is settled by the cascade chain; structure is settled by the 13-30 redesign; only process remains.

**Out of scope:**
- **Meaning** — settled; this inquiry preserves all settled meaning-layer commitments. If the process-layer specification surfaces a meaning-layer concern (e.g., a runtime mechanism reveals an unstated meaning-layer ambiguity), it gets flagged as a follow-up inquiry, not addressed here.
- **Structural** — settled by 13-30; the meaning-layer doc's structural organization is preserved. The process-layer artifact has its own structural-layer concerns (e.g., should the process-layer spec be one doc or multiple sub-specs?) — those are in-scope for THIS inquiry's artifact-shape decision (observation target 17) but are scoped to the new process-layer artifact, not to the meaning-layer doc.

## Synthesis Trigger

This inquiry **SYNTHESIZES** the meaning-layer + structural-layer commitments to produce a process-layer specification consistent with both:

- `devdocs/how_articulate_simple_should_be.md` — the meaning-layer doc (current state after 13-30 redesign; 996 lines; 13 sections + inline Example A). UNDER DIRECT REFERENCE; all process-layer specifications must preserve the meaning + structure articulated here.
- `devdocs/inquiries/2026-06-07_13-30__articulate_simple_doc_structural_redesign/finding.md` — the structural-layer redesign (HYBRID-of-10-targeted-changes; layered-IA-for-spec-docs new meta-pattern). UNDER DIRECT REFERENCE; process-layer artifact must respect the meaning-layer doc's structural organization without disrupting it.
- `devdocs/inquiries/2026-06-07_12-22__section9_two_pass_deferral_cascade3_resolution/finding.md` — §9 refined to "complete as pre-context framing"; pre-context phase identity; Cascade B (two-pass-as-discipline-identity design) remains as already-flagged. UNDER TEST — process-layer specification should preserve pre-context phase identity; should NOT pre-decide Cascade B's articulate2 process-layer.
- `devdocs/inquiries/2026-06-07_11-40__rephrase_constraint_source_cascade2_resolution/finding.md` — Rephrase multi-source composition. UNDER DIRECT TEST — process-layer must articulate runtime enforcement of multi-source composition (within §6 no-runtime-enforcement-code constraint).
- `devdocs/inquiries/2026-06-06_23-18__multidepth_purpose_wrapped_cascade_resolution/finding.md` — MultiDepth literal + identified-purpose-motivation-ambiguities + AMBIGUITY-NATURE distinction. UNDER DIRECT TEST — process-layer must articulate runtime operationalization of WHY vs WHAT axes.
- `devdocs/inquiries/2026-06-06_21-52__no_commitments_pre_surfacing_safety/finding.md` — MQ 2-shape answer range + substrate-bounded chain. UNDER DIRECT TEST — process-layer must articulate runtime 2-shape determination mechanism.
- `devdocs/inquiries/2026-06-04_07-48__task_define_process_layer/finding.md` — original process-layer finding (3-phase runtime shape + per-operation firing-format + LAYER 1 / LAYER 2 failure-mode framework). UNDER DIRECT EXTENSION TEST (this is the foundational process-layer finding; this inquiry's redesign must align with or refine it).
- `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md` — mode 6 detection rule (MQ2 answer missing preparation content). UNDER TEST.
- `devdocs/inquiries/2026-06-04_17-46__task_define_confidence_rubric/finding.md` — HIGH/MED/LOW confidence rubric. UNDER DIRECT TEST — process-layer must articulate runtime confidence assignment.
- `devdocs/inquiries/2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/finding.md` — MQ2 dispatch + preparation substrate + always-invoke premise. UNDER TEST.
- `devdocs/inquiries/2026-06-06_18-21__articulate_simple_output_md_meaning/finding.md` — three-layer model (ANCHOR/ENVELOPE/CORE) + empty-as-content principle. UNDER TEST — empty-as-content is the meaning-layer commitment behind the 2-shape determination at runtime.

Each prior carries commitments this inquiry will inherit, re-test (at process layer), or refine (in process form). CONCLUDE will require an `## Inherited Commitments Re-test` section. Plan Sensemaking + Critique to do actual process-layer re-testing.
